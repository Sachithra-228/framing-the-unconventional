/* ============================================================
   Notepad — raw interview notes for each person.
   Saved online through /api/notes (needs the team passcode) and
   always kept as a draft in this browser too. Raw notes are never
   shown on the public pages.
   ============================================================ */

const npStore = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } },
};
const npDraftGet = id => { try { return JSON.parse(npStore.get(`ftu-np:${id}`)) || null; } catch { return null; } };
const npDraftSet = (id, d) => npStore.set(`ftu-np:${id}`, JSON.stringify(d));

const npOpen = new Set();   // which person notepads are expanded (survives a language switch)
let np = null;              // state of the notepad on screen

const npWhen = iso => {
  if (!iso) return "";
  try { return new Date(iso).toLocaleString(LANG === "si" ? "si-LK" : "en-GB", { dateStyle: "medium", timeStyle: "short" }); }
  catch { return iso; }
};

function renderNotepad(p) {
  return `
    <details class="notepad" id="np" ${npOpen.has(p.id) ? "open" : ""}>
      <summary>
        <span class="np-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>
        </span>
        <span class="np-tt"><b>${L("npTitle")}</b><small>${L("npHint")}</small></span>
      </summary>
      <div class="np-body">
        <form class="np-lock" id="np-lock" hidden>
          <p>${L("npLockText")}</p>
          <div class="np-row">
            <input type="password" id="np-key" autocomplete="off" placeholder="${L("npKey")}" aria-label="${L("npKey")}">
            <button class="btn primary sm" type="submit">${L("npUnlock")}</button>
          </div>
          <p class="np-err" id="np-lock-err"></p>
        </form>
        <div class="np-edit" id="np-edit" hidden>
          <label class="np-name">${L("npName")}<input id="np-name" maxlength="60" autocomplete="name"></label>
          <textarea id="np-text" spellcheck="false" placeholder="${L("npPlaceholder")(p.name)}"></textarea>
          <div class="np-conflict" id="np-conflict" hidden>
            <span id="np-conflict-msg"></span>
            <button class="btn primary sm" type="button" id="np-both">${L("npKeepBoth")}</button>
            <button class="btn ghost sm" type="button" id="np-force">${L("npOverwrite")}</button>
          </div>
          <div class="np-bar">
            <span class="np-status" id="np-status"></span>
            <span class="np-actions">
              <button class="btn ghost sm" type="button" id="np-copy">${L("npCopy")}</button>
              <button class="btn ghost sm" type="button" id="np-dl">${L("npDownload")}</button>
              <button class="btn primary sm" type="button" id="np-save">${L("npSave")}</button>
            </span>
          </div>
        </div>
      </div>
    </details>`;
}

function mountNotepad(p) {
  const $ = id => document.getElementById(id);
  const box = $("np");
  if (!box) return;
  if (np) { clearTimeout(np.timer); if (np.unmount) np.unmount(); }
  np = { pid: p.id, base: null, mode: null, timer: null, saving: false, again: false, conflict: null, loaded: false };
  const me = np;
  const alive = () => np === me && document.body.contains(box);

  const text = $("np-text"), name = $("np-name"), status = $("np-status");
  name.value = npStore.get("ftu-notes-name") || "";

  const setStatus = (msg, cls = "") => { status.textContent = msg; status.className = `np-status ${cls}`; };
  const showEdit = () => { $("np-lock").hidden = true; $("np-edit").hidden = false; };
  const showLock = err => {
    $("np-edit").hidden = true; $("np-lock").hidden = false;
    $("np-lock-err").textContent = err ? L("npBadKey") : "";
    $("np-key").focus();
  };
  const saveDraft = dirty => npDraftSet(p.id, { text: text.value, base: me.base, dirty });

  async function load() {
    me.loaded = true;
    const draft = npDraftGet(p.id);
    const key = npStore.get("ftu-notes-key") || "";
    showEdit();
    setStatus(L("npLoading"));
    let r;
    try {
      r = await fetch(`/api/notes?id=${encodeURIComponent(p.id)}`, { headers: { "x-notes-key": key }, cache: "no-store" });
    } catch { r = null; }
    if (!alive()) return;

    if (r && r.status === 401) { me.loaded = false; return showLock(Boolean(key)); }
    const json = r && r.ok && (r.headers.get("content-type") || "").includes("json");
    if (!json) {                       // no server (local preview) or not set up yet → this device only
      me.mode = "local";
      text.value = draft ? draft.text : "";
      me.base = draft ? draft.base : null;
      return setStatus(L("npLocal"), "warn");
    }
    const data = await r.json();
    if (!alive()) return;
    me.mode = "server";
    if (draft && draft.dirty && draft.text !== data.text) {
      text.value = draft.text; me.base = draft.base;
      setStatus(L("npUnsaved"), "warn");
      save();
    } else {
      text.value = data.text; me.base = data.updatedAt;
      saveDraft(false);
      setStatus(data.updatedAt ? L("npSaved")(data.by, npWhen(data.updatedAt)) : L("npEmpty"), data.updatedAt ? "ok" : "");
    }
  }

  async function save(force = false) {
    if (me.mode !== "server" || me.conflict) return;
    if (me.saving) { me.again = true; return; }
    clearTimeout(me.timer);
    me.timer = null;
    me.saving = true;
    const sent = text.value;
    setStatus(L("npSaving"));
    let r;
    try {
      r = await fetch("/api/notes", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-notes-key": npStore.get("ftu-notes-key") || "" },
        body: JSON.stringify({ id: p.id, text: sent, by: name.value.trim(), base: me.base, force }),
      });
    } catch { r = null; }
    me.saving = false;
    if (!alive()) return;

    if (r && r.ok) {
      const data = await r.json();
      me.base = data.updatedAt;
      const clean = text.value === sent;
      saveDraft(!clean);
      setStatus(clean ? L("npSaved")(data.by, npWhen(data.updatedAt)) : L("npUnsaved"), clean ? "ok" : "warn");
      if (!clean || me.again) { me.again = false; queue(); }
    } else if (r && r.status === 409) {
      const { current } = await r.json();
      me.conflict = current;
      $("np-conflict-msg").textContent = L("npConflict")(current.by, npWhen(current.updatedAt));
      $("np-conflict").hidden = false;
      setStatus(L("npUnsaved"), "warn");
    } else if (r && r.status === 401) {
      showLock(true);
    } else {
      setStatus(L("npError"), "warn");
    }
  }

  const queue = () => { clearTimeout(me.timer); me.timer = setTimeout(save, 2500); };

  function resolve(keepBoth) {
    const cur = me.conflict;
    me.conflict = null;
    $("np-conflict").hidden = true;
    me.base = cur.updatedAt;
    if (keepBoth && cur.text.trim() !== text.value.trim()) {
      text.value = `${cur.text}\n\n——— ${L("npYourVersion")} ———\n\n${text.value}`;
    }
    saveDraft(true);
    save();
  }

  box.addEventListener("toggle", () => {
    if (box.open) { npOpen.add(p.id); if (!me.loaded) load(); }
    else { npOpen.delete(p.id); if (me.timer) save(); }
  });
  if (box.open) load();
  // Save straight away when the tab is hidden or closed, instead of waiting for the timer.
  const flush = () => { if (document.visibilityState === "hidden" && me.timer && alive()) save(); };
  document.addEventListener("visibilitychange", flush);
  me.unmount = () => document.removeEventListener("visibilitychange", flush);

  $("np-lock").addEventListener("submit", e => {
    e.preventDefault();
    npStore.set("ftu-notes-key", $("np-key").value.trim());
    load();
  });
  text.addEventListener("input", () => {
    saveDraft(true);
    if (me.mode === "server") { setStatus(L("npUnsaved"), "warn"); queue(); }
    else if (me.mode === "local") setStatus(L("npLocal"), "warn");
  });
  text.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") { e.preventDefault(); save(); }
  });
  name.addEventListener("input", () => npStore.set("ftu-notes-name", name.value.trim()));
  $("np-save").addEventListener("click", () => (me.mode === "server" ? save() : load()));
  $("np-both").addEventListener("click", () => resolve(true));
  $("np-force").addEventListener("click", () => resolve(false));
  $("np-copy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(text.value); }
    catch { text.select(); document.execCommand("copy"); }
    const b = $("np-copy"); b.textContent = L("npCopied");
    setTimeout(() => { b.textContent = L("npCopy"); }, 1500);
  });
  $("np-dl").addEventListener("click", () => {
    const blob = new Blob([`${p.name}\n\n${text.value}`], { type: "text/plain;charset=utf-8" });
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${p.id}-notes.txt` });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });
}
