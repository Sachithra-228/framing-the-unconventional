/* ============================================================
   Chapter outline with shared progress ticks (Study page).
   Anyone can see which sections are done; ticking or unticking
   needs the team passcode. Saved through /api/notes?kind=progress.
   ============================================================ */

const PROGRESS_ID = "study";
let outlineDone = null;      // { "1.1": { by, at }, ... } once loaded
let outlineOnline = null;    // true / false once we know whether saving works
let outlinePending = null;   // { item, done } waiting for a passcode

const outlineItems = () => STRUCTURE.flatMap(c => c.items.map((it, i) => ({ id: c.n ? `${c.n}.${i + 1}` : `E${i + 1}`, ch: c })));

function renderOutline() {
  const done = outlineDone || {};
  const all = outlineItems();
  const n = all.filter(x => done[x.id]).length;
  return `
    <div class="outline-bar" id="outline-bar">
      <div class="ob-top">
        <span class="ob-count" id="ob-count">${L("progDone")(n, all.length)}</span>
        <span class="ob-hint">${L("progHint")}</span>
      </div>
      <div class="ob-track"><span id="ob-fill" style="width:${Math.round((n / all.length) * 100)}%"></span></div>
      <form class="ob-lock" id="ob-lock" hidden>
        <span>${L("progLock")}</span>
        <input type="password" id="ob-key" autocomplete="off" placeholder="${L("npKey")}" aria-label="${L("npKey")}">
        <button class="btn primary sm" type="submit">${L("npUnlock")}</button>
        <span class="np-err" id="ob-err"></span>
      </form>
      <div class="ob-msg" id="ob-msg" hidden></div>
    </div>
    <div class="chapters">
      ${STRUCTURE.map(c => {
        const items = c.items.map((it, i) => ({ id: c.n ? `${c.n}.${i + 1}` : `E${i + 1}`, it, num: c.n ? `${c.n}.${i + 1}` : "" }));
        const d = items.filter(x => done[x.id]).length;
        return `
        <div class="chapter${items.length && d === items.length ? " complete" : ""}" lang="en" data-ch="${c.n || "E"}">
          <h3>${c.n ? `<span>${c.n}</span>` : ""}${c.title}${items.length ? `<small class="ch-count">${d}/${items.length}</small>` : ""}</h3>
          ${items.length ? `<ol>${items.map(x => `
            <li class="${done[x.id] ? "done" : ""}" data-item="${x.id}" title="${done[x.id] ? tickTitle(done[x.id]) : ""}">
              <label>
                <input type="checkbox" ${done[x.id] ? "checked" : ""} aria-label="${x.num} ${x.it}">
                ${x.num ? `<span class="num">${x.num}</span>` : ""}<span class="txt">${x.it}</span>
              </label>
            </li>`).join("")}</ol>` : ""}
        </div>`;
      }).join("")}
    </div>`;
}

const tickTitle = t => L("progTicked")(t.by, t.at ? npWhen(t.at) : "");

function refreshOutline() {
  const done = outlineDone || {};
  const all = outlineItems();
  const n = all.filter(x => done[x.id]).length;
  const count = document.getElementById("ob-count");
  if (!count) return;
  count.textContent = L("progDone")(n, all.length);
  document.getElementById("ob-fill").style.width = `${Math.round((n / all.length) * 100)}%`;
  document.querySelectorAll(".chapter").forEach(ch => {
    const lis = [...ch.querySelectorAll("li[data-item]")];
    lis.forEach(li => {
      const t = done[li.dataset.item];
      li.classList.toggle("done", !!t);
      li.querySelector("input").checked = !!t;
      li.title = t ? tickTitle(t) : "";
    });
    const d = lis.filter(li => done[li.dataset.item]).length;
    const small = ch.querySelector(".ch-count");
    if (small) small.textContent = `${d}/${lis.length}`;
    ch.classList.toggle("complete", lis.length > 0 && d === lis.length);
  });
}

function outlineMessage(msg) {
  const el = document.getElementById("ob-msg");
  if (!el) return;
  el.hidden = !msg;
  el.textContent = msg || "";
}

async function loadOutline() {
  try {
    const r = await fetch(`/api/notes?kind=progress&id=${PROGRESS_ID}`, { cache: "no-store" });
    const json = r.ok && (r.headers.get("content-type") || "").includes("json");
    if (!json) throw new Error("offline");
    outlineDone = (await r.json()).items || {};
    outlineOnline = true;
  } catch {
    outlineDone = outlineDone || {};
    outlineOnline = false;
  }
  refreshOutline();
}

async function saveTick(item, done) {
  if (!outlineDone) outlineDone = {};
  const key = npStore.get("ftu-notes-key") || "";
  if (!key) { outlinePending = { item, done }; showOutlineLock(false); refreshOutline(); return; }
  const before = outlineDone[item];
  if (done) outlineDone[item] = { by: npStore.get("ftu-notes-name") || "", at: new Date().toISOString() };
  else delete outlineDone[item];
  refreshOutline();
  let r;
  try {
    r = await fetch(`/api/notes?kind=progress&id=${PROGRESS_ID}`, {
      method: "PUT", cache: "no-store",
      headers: { "Content-Type": "application/json", "x-notes-key": key },
      body: JSON.stringify({ item, done, by: npStore.get("ftu-notes-name") || "" }),
    });
  } catch { r = null; }
  if (r && r.ok) {
    outlineDone = (await r.json()).items || outlineDone;
    outlineMessage("");
  } else {
    if (before) outlineDone[item] = before; else delete outlineDone[item];
    if (r && r.status === 401) { outlinePending = { item, done }; showOutlineLock(true); }
    else outlineMessage(outlineOnline === false ? L("progOffline") : L("progError"));
  }
  refreshOutline();
}

function showOutlineLock(wrong) {
  const f = document.getElementById("ob-lock");
  if (!f) return;
  f.hidden = false;
  document.getElementById("ob-err").textContent = wrong ? L("npBadKey") : "";
  document.getElementById("ob-key").focus();
}

function mountOutline() {
  document.querySelectorAll(".chapter li[data-item] input").forEach(cb => {
    cb.addEventListener("change", () => saveTick(cb.closest("li").dataset.item, cb.checked));
  });
  const f = document.getElementById("ob-lock");
  f.addEventListener("submit", e => {
    e.preventDefault();
    npStore.set("ftu-notes-key", document.getElementById("ob-key").value.trim());
    f.hidden = true;
    if (outlinePending) { const p = outlinePending; outlinePending = null; saveTick(p.item, p.done); }
  });
  loadOutline();
}
