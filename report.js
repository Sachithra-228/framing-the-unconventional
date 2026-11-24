/* ============================================================
   Report — one shared document that anyone with the team passcode
   can edit in the browser. Upload a Word file to start; every change
   saves automatically (through /api/notes, kind "doc"), and the
   current version can be downloaded as a Word file at any time.
   ============================================================ */

const RPT_ID = "report";
const RPT_MAX_BYTES = 800 * 1024;
const RPT_LIBS = {
  purify: "https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.min.js",
  mammoth: "https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js",
  docx: "https://cdn.jsdelivr.net/npm/docx@8.5.0/build/index.umd.js",
};
const rptLoaded = {};
function rptLoad(name) {
  if (!rptLoaded[name]) {
    rptLoaded[name] = new Promise((ok, fail) => {
      const s = Object.assign(document.createElement("script"), { src: RPT_LIBS[name], onload: ok, onerror: fail });
      document.head.appendChild(s);
    });
  }
  return rptLoaded[name];
}

let rpt = null;   // state of the Report page on screen

function renderReport() {
  $app.innerHTML = `
    ${crumbs([[L("home"), "#/"], [L("navReport")]])}
    <header class="page-head">
      <div class="eyebrow">${L("rptEyebrow")}</div>
      <h1>${L("rptTitle")}</h1>
      <p class="sub">${L("rptSub")}</p>
    </header>

    <form class="np-lock rpt-lock" id="rpt-lock" hidden>
      <p>${L("rptLockText")}</p>
      <div class="np-row">
        <input type="password" id="rpt-key" autocomplete="off" placeholder="${L("npKey")}" aria-label="${L("npKey")}">
        <button class="btn primary sm" type="submit">${L("npUnlock")}</button>
      </div>
      <p class="np-err" id="rpt-lock-err"></p>
    </form>

    <div class="rpt" id="rpt" hidden>
      <div class="rpt-bar">
        <label class="np-name">${L("npName")}<input id="rpt-name" maxlength="60" autocomplete="name"></label>
        <span class="rpt-actions">
          <label class="btn ghost sm" for="rpt-file" tabindex="0">${L("rptUpload")}</label>
          <input type="file" id="rpt-file" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" hidden>
          <button class="btn primary sm" type="button" id="rpt-dl">${L("rptDownload")}</button>
        </span>
      </div>
      <div class="rpt-tools" role="toolbar" aria-label="${L("rptFormat")}">
        <select id="rpt-block" aria-label="${L("rptStyle")}">
          <option value="p">${L("rptNormal")}</option>
          <option value="h1">${L("rptH")(1)}</option>
          <option value="h2">${L("rptH")(2)}</option>
          <option value="h3">${L("rptH")(3)}</option>
        </select>
        <span class="sep"></span>
        <button type="button" data-cmd="bold" title="Bold (Ctrl+B)"><b>B</b></button>
        <button type="button" data-cmd="italic" title="Italic (Ctrl+I)"><i>I</i></button>
        <button type="button" data-cmd="underline" title="Underline (Ctrl+U)"><u>U</u></button>
        <span class="sep"></span>
        <button type="button" data-cmd="insertUnorderedList" title="${L("rptBullets")}">• ≡</button>
        <button type="button" data-cmd="insertOrderedList" title="${L("rptNumbers")}">1. ≡</button>
        <span class="sep"></span>
        <button type="button" data-cmd="undo" title="Undo (Ctrl+Z)">↶</button>
        <button type="button" data-cmd="redo" title="Redo (Ctrl+Y)">↷</button>
        <span class="rpt-status" id="rpt-status"></span>
      </div>
      <div class="rpt-banner" id="rpt-banner" hidden>
        <span id="rpt-banner-msg"></span>
        <span class="rpt-banner-actions" id="rpt-banner-actions"></span>
      </div>
      <div class="rpt-paper">
        <div class="rpt-doc" id="rpt-doc" contenteditable="true" spellcheck="true" lang="${LANG}"></div>
        <div class="rpt-empty" id="rpt-empty" hidden>${L("rptEmpty")}</div>
      </div>
    </div>`;
  mountReport();
}

function mountReport() {
  const $ = id => document.getElementById(id);
  if (rpt) rpt.stop();
  const me = { base: null, mode: null, dirty: false, saving: false, again: false, conflict: false,
               timer: null, poll: null, lastInput: 0 };
  rpt = me;
  const editor = $("rpt-doc"), status = $("rpt-status"), nameIn = $("rpt-name");
  const alive = () => rpt === me && document.body.contains(editor);
  me.stop = () => { clearTimeout(me.timer); clearInterval(me.poll); document.removeEventListener("visibilitychange", onVis); };

  nameIn.value = npStore.get("ftu-notes-name") || "";
  nameIn.addEventListener("input", () => npStore.set("ftu-notes-name", nameIn.value.trim()));

  const setStatus = (msg, cls = "") => { status.textContent = msg; status.className = `rpt-status ${cls}`; };
  const clean = html => (window.DOMPurify
    ? DOMPurify.sanitize(html, { USE_PROFILE: { html: true }, FORBID_TAGS: ["style", "form", "input", "button"], FORBID_ATTR: ["style", "class", "id"] })
    : "");
  const bytes = s => new Blob([s]).size;
  const draftGet = () => { try { return JSON.parse(npStore.get("ftu-rpt")) || null; } catch { return null; } };
  const draftSet = () => npStore.set("ftu-rpt", JSON.stringify({ html: editor.innerHTML, base: me.base, dirty: me.dirty }));
  const setHTML = html => { editor.innerHTML = clean(html); $("rpt-empty").hidden = editor.textContent.trim() !== "" || !!editor.querySelector("img,table"); };
  const banner = (msg, actions = []) => {
    $("rpt-banner").hidden = !msg;
    $("rpt-banner-msg").textContent = msg || "";
    const box = $("rpt-banner-actions"); box.innerHTML = "";
    actions.forEach(([label, fn, primary]) => {
      const b = Object.assign(document.createElement("button"), { type: "button", className: `btn ${primary ? "primary" : "ghost"} sm`, textContent: label });
      b.addEventListener("click", fn); box.appendChild(b);
    });
  };
  const key = () => npStore.get("ftu-notes-key") || "";
  const api = (q, opt = {}) => fetch(`/api/notes${q}`, { cache: "no-store", ...opt, headers: { "x-notes-key": key(), ...(opt.headers || {}) } });

  const showLock = err => {
    $("rpt").hidden = true; $("rpt-lock").hidden = false;
    $("rpt-lock-err").textContent = err ? L("npBadKey") : "";
    $("rpt-key").focus();
  };

  async function load() {
    try { await rptLoad("purify"); } catch { /* sanitizer unavailable: clean() returns "" */ }
    if (!alive()) return;
    const draft = draftGet();
    setStatus(L("npLoading"));
    let r;
    try { r = await api(`?kind=doc&id=${RPT_ID}`); } catch { r = null; }
    if (!alive()) return;
    if (r && r.status === 401) return showLock(Boolean(key()));
    $("rpt-lock").hidden = true; $("rpt").hidden = false;

    const json = r && r.ok && (r.headers.get("content-type") || "").includes("json");
    if (!json) {
      me.mode = "local";
      setHTML(draft ? draft.html : "");
      me.base = draft ? draft.base : null; me.dirty = !!(draft && draft.dirty);
      return setStatus(L("rptLocal"), "warn");
    }
    const data = await r.json();
    if (!alive()) return;
    me.mode = "server";
    if (draft && draft.dirty && draft.html !== data.text) {
      setHTML(draft.html); me.base = draft.base; me.dirty = true;
      setStatus(L("npUnsaved"), "warn"); save();
    } else {
      setHTML(data.text); me.base = data.updatedAt; me.dirty = false; draftSet();
      setStatus(data.updatedAt ? L("npSaved")(data.by, npWhen(data.updatedAt)) : L("rptNothingSaved"), data.updatedAt ? "ok" : "");
    }
    clearInterval(me.poll);
    me.poll = setInterval(poll, 12000);
  }

  async function save(force = false) {
    if (me.mode !== "server" || me.conflict) return;
    if (me.saving) { me.again = true; return; }
    clearTimeout(me.timer); me.timer = null;
    const html = clean(editor.innerHTML);
    if (bytes(html) > RPT_MAX_BYTES) return setStatus(L("rptTooLarge"), "warn");
    me.saving = true;
    setStatus(L("npSaving"));
    let r;
    try {
      r = await api("", {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "doc", id: RPT_ID, text: html, by: nameIn.value.trim(), base: me.base, force }),
      });
    } catch { r = null; }
    me.saving = false;
    if (!alive()) return;
    if (r && r.ok) {
      const info = await r.json();
      me.base = info.updatedAt;
      me.dirty = clean(editor.innerHTML) !== html;
      draftSet();
      setStatus(me.dirty ? L("npUnsaved") : L("npSaved")(info.by, npWhen(info.updatedAt)), me.dirty ? "warn" : "ok");
      if (me.dirty || me.again) { me.again = false; queue(); }
    } else if (r && r.status === 409) {
      const { current } = await r.json();
      me.conflict = true;
      setStatus(L("npUnsaved"), "warn");
      banner(L("npConflict")(current.by, npWhen(current.updatedAt)), [
        [L("rptLoadTheirs"), () => { me.conflict = false; banner(""); setHTML(current.text || ""); me.base = current.updatedAt; me.dirty = false; draftSet(); setStatus(L("npSaved")(current.by, npWhen(current.updatedAt)), "ok"); }, true],
        [L("rptKeepMine"), () => { me.conflict = false; banner(""); save(true); }],
        [L("rptDownloadMine"), () => download()],
      ]);
    } else if (r && r.status === 413) {
      setStatus(L("rptTooLarge"), "warn");
    } else if (r && r.status === 401) {
      showLock(true);
    } else {
      setStatus(L("npError"), "warn");
    }
  }
  const queue = () => { clearTimeout(me.timer); me.timer = setTimeout(save, 2000); };

  // Pick up other people's saves while this page is open.
  async function poll() {
    if (!alive()) return me.stop();
    if (document.visibilityState !== "visible" || me.mode !== "server" || me.saving || me.conflict) return;
    let r;
    try { r = await api(`?kind=doc&id=${RPT_ID}&meta=1`); } catch { return; }
    if (!r.ok || !alive()) return;
    const m = await r.json();
    if (!m.updatedAt || m.updatedAt === me.base) return;
    const idle = Date.now() - me.lastInput > 5000;
    if (!me.dirty && idle) {
      const full = await api(`?kind=doc&id=${RPT_ID}`).then(x => x.json()).catch(() => null);
      if (!full || !alive() || me.dirty) return;
      setHTML(full.text); me.base = full.updatedAt; draftSet();
      setStatus(L("npSaved")(full.by, npWhen(full.updatedAt)), "ok");
      banner("");
    } else if (m.by && m.by !== nameIn.value.trim()) {
      banner(L("rptOtherEditing")(m.by));
    }
  }
  const onVis = () => { if (document.visibilityState === "hidden" && me.timer && alive()) save(); else if (alive()) poll(); };
  document.addEventListener("visibilitychange", onVis);

  // Editing
  editor.addEventListener("input", () => {
    me.dirty = true; me.lastInput = Date.now();
    $("rpt-empty").hidden = true;
    draftSet();
    if (me.mode === "server") { setStatus(L("npUnsaved"), "warn"); queue(); }
    else setStatus(L("rptLocal"), "warn");
  });
  editor.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") { e.preventDefault(); save(); }
  });
  document.querySelectorAll(".rpt-tools button[data-cmd]").forEach(b => {
    b.addEventListener("mousedown", e => e.preventDefault());   // keep the text selection
    b.addEventListener("click", () => { editor.focus(); document.execCommand(b.dataset.cmd, false, null); editor.dispatchEvent(new Event("input")); });
  });
  $("rpt-block").addEventListener("change", e => {
    editor.focus(); document.execCommand("formatBlock", false, `<${e.target.value}>`);
    editor.dispatchEvent(new Event("input"));
  });
  document.addEventListener("selectionchange", function track() {
    if (!alive()) return document.removeEventListener("selectionchange", track);
    const sel = window.getSelection();
    if (!sel.rangeCount || !editor.contains(sel.anchorNode)) return;
    let n = sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement;
    while (n && n !== editor && !/^(P|H1|H2|H3)$/.test(n.tagName)) n = n.parentElement;
    $("rpt-block").value = n && n !== editor ? n.tagName.toLowerCase() : "p";
  });

  // Upload a Word file
  $("rpt-file").addEventListener("change", async e => {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;
    if (editor.textContent.trim() && !confirm(L("rptReplaceConfirm"))) return;
    setStatus(L("rptReading"));
    try {
      await Promise.all([rptLoad("mammoth"), rptLoad("purify")]);
      const result = await mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() });
      if (!alive()) return;
      setHTML(result.value);
      editor.dispatchEvent(new Event("input"));
      if (me.mode === "server") save();
    } catch {
      setStatus(L("rptReadError"), "warn");
    }
  });

  // Download as Word
  async function download() {
    const btn = $("rpt-dl"); btn.disabled = true;
    try {
      await rptLoad("docx");
      const blob = await rptToDocx(editor);
      const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: "Framing_the_Unconventional_Report.docx" });
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch {
      setStatus(L("rptExportError"), "warn");
    } finally { btn.disabled = false; }
  }
  $("rpt-dl").addEventListener("click", download);

  $("rpt-lock").addEventListener("submit", e => {
    e.preventDefault();
    npStore.set("ftu-notes-key", $("rpt-key").value.trim());
    load();
  });

  load();
}

/* ---------- HTML → Word (.docx), using the docx library ---------- */
async function rptToDocx(root) {
  const D = window.docx;
  const PAGE_W = 9026;   // A4 width minus 1-inch margins, in twentieths of a point
  const FONT = { ascii: "Arial", hAnsi: "Arial", cs: "Iskoola Pota", eastAsia: "Arial" };
  let listInstance = 0;

  const dataUrlBytes = src => {
    const b64 = src.split(",")[1] || "";
    const bin = atob(b64), out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  };
  function imageRun(img) {
    const src = img.getAttribute("src") || "";
    const m = src.match(/^data:image\/(png|jpe?g|gif|bmp);base64,/i);
    if (!m) return null;
    let w = img.naturalWidth || 400, h = img.naturalHeight || 300;
    if (w > 600) { h = Math.round(h * 600 / w); w = 600; }
    const type = m[1].toLowerCase().replace("jpeg", "jpg");
    return new D.ImageRun({ type, data: dataUrlBytes(src), transformation: { width: w, height: h } });
  }
  function runs(node, f = {}) {
    const out = [];
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) {
        const text = n.textContent.replace(/\s+/g, " ");
        if (text) out.push(new D.TextRun({ text, bold: f.b, italics: f.i, underline: f.u ? {} : undefined, superScript: f.sup, subScript: f.sub }));
      } else if (n.nodeType === 1) {
        const t = n.tagName;
        if (t === "BR") out.push(new D.TextRun({ text: "", break: 1 }));
        else if (t === "IMG") { const r = imageRun(n); if (r) out.push(r); }
        else if (t === "UL" || t === "OL" || t === "TABLE") { /* handled as blocks */ }
        else out.push(...runs(n, {
          b: f.b || t === "B" || t === "STRONG", i: f.i || t === "I" || t === "EM",
          u: f.u || t === "U", sup: f.sup || t === "SUP", sub: f.sub || t === "SUB",
        }));
      }
    });
    return out;
  }
  function list(el, level, out) {
    const ordered = el.tagName === "OL";
    const instance = ++listInstance;
    [...el.children].filter(li => li.tagName === "LI").forEach(li => {
      out.push(new D.Paragraph({ children: runs(li), numbering: { reference: ordered ? "num" : "bullet", level: Math.min(level, 4), instance } }));
      [...li.children].filter(c => c.tagName === "UL" || c.tagName === "OL").forEach(sub => list(sub, level + 1, out));
    });
  }
  function table(el) {
    const rows = [...el.querySelectorAll(":scope > tr, :scope > thead > tr, :scope > tbody > tr, :scope > tfoot > tr")];
    const cols = Math.max(1, ...rows.map(r => [...r.children].reduce((n, c) => n + (+c.getAttribute("colspan") || 1), 0)));
    const colW = Math.floor(PAGE_W / cols);
    return new D.Table({
      width: { size: colW * cols, type: D.WidthType.DXA },
      columnWidths: Array(cols).fill(colW),
      rows: rows.map(r => new D.TableRow({
        children: [...r.children].map(c => {
          const span = +c.getAttribute("colspan") || 1;
          const kids = blocks(c);
          return new D.TableCell({
            width: { size: colW * span, type: D.WidthType.DXA }, columnSpan: span > 1 ? span : undefined,
            margins: { top: 60, bottom: 60, left: 100, right: 100 },
            children: kids.length ? kids : [new D.Paragraph("")],
          });
        }),
      })),
    });
  }
  function blocks(container) {
    const out = [];
    let inline = [];
    const flush = () => {
      if (inline.length) {
        const wrap = document.createElement("span"); inline.forEach(n => wrap.appendChild(n.cloneNode(true)));
        const r = runs(wrap); if (r.length) out.push(new D.Paragraph({ children: r }));
        inline = [];
      }
    };
    container.childNodes.forEach(n => {
      if (n.nodeType !== 1) { if (n.nodeType === 3 && n.textContent.trim()) inline.push(n); return; }
      const t = n.tagName;
      const h = t.match(/^H([1-6])$/);
      if (h) { flush(); out.push(new D.Paragraph({ heading: D.HeadingLevel[`HEADING_${Math.min(+h[1], 3)}`], children: runs(n) })); }
      else if (t === "P") { flush(); out.push(new D.Paragraph({ children: runs(n) })); }
      else if (t === "UL" || t === "OL") { flush(); list(n, 0, out); }
      else if (t === "TABLE") { flush(); out.push(table(n)); out.push(new D.Paragraph("")); }
      else if (t === "BLOCKQUOTE") { flush(); out.push(new D.Paragraph({ indent: { left: 720 }, children: runs(n) })); }
      else if (t === "DIV" || t === "SECTION" || t === "ARTICLE") { flush(); out.push(...blocks(n)); }
      else inline.push(n);
    });
    flush();
    return out;
  }

  const levels = fmt => [0, 1, 2, 3, 4].map(l => ({
    level: l, format: fmt === "bullet" ? D.LevelFormat.BULLET : D.LevelFormat.DECIMAL,
    text: fmt === "bullet" ? ["•", "◦", "▪", "•", "◦"][l] : `%${l + 1}.`,
    alignment: D.AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 720 * (l + 1), hanging: 360 } } },
  }));
  const body = blocks(root);
  const heading = (size, before) => ({ run: { font: FONT, size, bold: true }, paragraph: { spacing: { before, after: 120 }, keepNext: true } });

  const doc = new D.Document({
    creator: "Framing the Unconventional",
    title: "Framing the Unconventional — report",
    styles: {
      default: {
        document: { run: { font: FONT, size: 24 }, paragraph: { spacing: { after: 120, line: 300 } } },
        heading1: heading(32, 360), heading2: heading(28, 280), heading3: heading(24, 240),
      },
    },
    numbering: { config: [{ reference: "bullet", levels: levels("bullet") }, { reference: "num", levels: levels("num") }] },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
      children: body.length ? body : [new D.Paragraph("")],
    }],
  });
  return D.Packer.toBlob(doc);
}
