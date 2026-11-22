/* Rendering, language switch and hash router. Content lives in data.js. */

const $app = document.getElementById("app");

/* ---------------- language ---------------- */
let LANG = "si";
try { LANG = localStorage.getItem("ftu-lang") || "si"; } catch (e) {}

/* pick the right language from a {si, en} field (plain strings pass through) */
const t = v => (v && typeof v === "object" && !Array.isArray(v) ? v[LANG] ?? v.en : v);

const UI = {
  en: {
    navHome: "Home", navIndustry: "Industry", navAcademics: "Academics", navStudents: "Young filmmakers", navThemes: "Themes",
    tabHome: "Home", tabIndustry: "Industry", tabAcademics: "Academics", tabStudents: "Young", tabThemes: "Themes",
    heroEyebrow: "Research project · Qualitative study",
    workingTitle: "Working title",
    progress: (d, n) => `${d} of ${n} interviews analysed`,
    partEyebrow: "Participants",
    partTitle: "Three groups, one question",
    partLede: "Choose a group to see the people interviewed and their analysis.",
    analysedOf: (d, n) => `${d}/${n} analysed`,
    people: n => `${n} people`,
    objEyebrow: "Research objectives",
    objTitle: "What the study asks",
    objLede: "Each objective is answered by comparing the three groups.",
    structEyebrow: "Research structure",
    structTitle: "Chapter outline",
    home: "Home",
    group: n => `Group ${n}`,
    analysed: "Analysed",
    pending: "Pending",
    interview: n => `Interview ${n}`,
    interviewPending: "Interview pending",
    objectives: "Objectives",
    notCovered: "not covered",
    interpretation: "Interpretation",
    note: "Note",
    closing: "Closing",
    keyIdea: "Key idea",
    codes: "Codes",
    initialCodes: "Initial codes",
    emptyTitle: "Analysis coming soon",
    emptyText: name => `The interview with ${name} will be analysed against the four research objectives:`,
    themesEyebrow: "Emerging themes",
    themesTitle: "Themes so far",
    themesSub: "Built from the interview codes. Each theme shows how many people in each group support it.",
    keyFinding: n => `Key finding · Interview ${n}`,
    footer: "Research tracker · Updated",
  },
  si: {
    navHome: "මුල් පිටුව", navIndustry: "කර්මාන්ත", navAcademics: "ශාස්ත්‍රීය", navStudents: "නවක සිනමාකරුවන්", navThemes: "තේමා",
    tabHome: "මුල", tabIndustry: "කර්මාන්ත", tabAcademics: "ශාස්ත්‍රීය", tabStudents: "නවක", tabThemes: "තේමා",
    heroEyebrow: "පර්යේෂණ ව්‍යාපෘතිය · ගුණාත්මක අධ්‍යයනය",
    workingTitle: "මූලික මාතෘකාව",
    progress: (d, n) => `සම්මුඛ සාකච්ඡා ${n} න් ${d} ක් විශ්ලේෂණය කර ඇත`,
    partEyebrow: "සහභාගිවන්නන්",
    partTitle: "කණ්ඩායම් තුනක්, එක් ප්‍රශ්නයක්",
    partLede: "සම්මුඛ සාකච්ඡා කළ පුද්ගලයන් සහ ඔවුන්ගේ විශ්ලේෂණය බැලීමට කණ්ඩායමක් තෝරන්න.",
    analysedOf: (d, n) => `${d}/${n} විශ්ලේෂිත`,
    people: n => `පුද්ගලයන් ${n}`,
    objEyebrow: "පර්යේෂණ අරමුණු",
    objTitle: "අධ්‍යයනය විමසන්නේ කුමක්ද?",
    objLede: "සෑම අරමුණකටම පිළිතුරු සපයන්නේ කණ්ඩායම් තුන සංසන්දනය කිරීමෙනි.",
    structEyebrow: "පර්යේෂණ ව්‍යුහය",
    structTitle: "පරිච්ඡේද සැලැස්ම",
    home: "මුල් පිටුව",
    group: n => `කණ්ඩායම ${n}`,
    analysed: "විශ්ලේෂිතයි",
    pending: "ඉදිරියේදී",
    interview: n => `සම්මුඛ සාකච්ඡාව ${n}`,
    interviewPending: "සම්මුඛ සාකච්ඡාව ඉදිරියේදී",
    objectives: "අරමුණු",
    notCovered: "ආවරණය නොවිණි",
    interpretation: "අර්ථකථනය",
    note: "සටහන",
    closing: "අවසාන",
    keyIdea: "මූලික අදහස",
    codes: "කේත",
    initialCodes: "මූලික කේත",
    emptyTitle: "විශ්ලේෂණය ඉදිරියේදී",
    emptyText: name => `${name} සමඟ කළ සම්මුඛ සාකච්ඡාව පහත පර්යේෂණ අරමුණු හතර අනුව විශ්ලේෂණය කෙරේ:`,
    themesEyebrow: "මතුවන තේමා",
    themesTitle: "මෙතෙක් හඳුනාගත් තේමා",
    themesSub: "සම්මුඛ සාකච්ඡා කේත ඇසුරින් ගොඩනගා ඇත. එක් එක් තේමාවට සහාය දක්වන පුද්ගලයන් ගණන කණ්ඩායම් අනුව මෙහි දැක්වේ.",
    keyFinding: n => `ප්‍රධාන සොයාගැනීම · සම්මුඛ සාකච්ඡාව ${n}`,
    footer: "පර්යේෂණ සටහන · යාවත්කාලීන කළේ",
  },
};
const L = key => UI[LANG][key];

function setLang(lang) {
  LANG = lang;
  try { localStorage.setItem("ftu-lang", lang); } catch (e) {}
  route(false);
}

/* ---------------- helpers ---------------- */
const groupById = id => GROUPS.find(g => g.id === id);
const personById = id => PEOPLE.find(p => p.id === id);
const peopleIn = gid => PEOPLE.filter(p => p.group === gid);
const isDone = p => Boolean(INTERVIEWS[p.id]);
const pad = n => String(n).padStart(2, "0");
const initials = n => {
  const w = n.replace(/[^A-Za-z ]/g, " ").trim().split(/\s+/);
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
};
const photoOf = p => p.photo || `assets/people/${p.id}.jpg`;
const roleOf = p => t(p.role) || t(groupById(p.group).short);

/* Photo with initials underneath — if the image is missing it removes itself. */
const photo = (p, cls = "") => `
  <div class="photo ${cls}">
    <span class="ini">${initials(p.name)}</span>
    <img src="${photoOf(p)}" alt="${p.name}" loading="lazy" onerror="this.remove()">
  </div>`;

const corners = `<i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>`;

const statusPill = p =>
  isDone(p) ? `<span class="pill done">${L("analysed")}</span>` : `<span class="pill todo">${L("pending")}</span>`;

const crumbs = items => `
  <div class="crumbs">${items.map((it, i) =>
    i < items.length - 1 ? `<a href="${it[1]}">${it[0]}</a><span>/</span>` : `<b>${it[0]}</b>`).join("")}
  </div>`;

/* ---------------- HOME ---------------- */
function renderHome() {
  const done = PEOPLE.filter(isDone).length;
  const pct = Math.round((done / PEOPLE.length) * 100);

  const groupCards = GROUPS.map((g, i) => {
    const ppl = peopleIn(g.id);
    const d = ppl.filter(isDone).length;
    return `
      <a class="group-card" href="#/group/${g.id}">
        ${corners}
        <div class="gc-top">
          <span class="gc-num">${pad(i + 1)}</span>
          <span class="gc-rec"><span class="dot"></span>${L("analysedOf")(d, ppl.length)}</span>
        </div>
        <h3>${t(g.name)}</h3>
        <p>${t(g.blurb)}</p>
        <div class="gc-foot">
          <div class="stack">${ppl.slice(0, 6).map(p => photo(p, "mini")).join("")}</div>
          <span class="gc-count">${L("people")(ppl.length)} <span class="arrow">→</span></span>
        </div>
      </a>`;
  }).join("");

  $app.innerHTML = `
    <header class="hero">
      <div class="eyebrow">${L("heroEyebrow")}</div>
      <h1>${STUDY.title}</h1>
      <p class="sub">${t(STUDY.subtitle)}</p>
      <div class="working"><b>${L("workingTitle")}:</b> ${STUDY.workingTitle}</div>
      <div class="progress">
        <div class="pr-row"><span>${L("progress")(done, PEOPLE.length)}</span><span>${pct}%</span></div>
        <div class="bar"><span style="width:${pct}%"></span></div>
      </div>
    </header>

    <section>
      <div class="eyebrow">${L("partEyebrow")}</div>
      <h2>${L("partTitle")}</h2>
      <p class="lede">${L("partLede")}</p>
      <div class="groups">${groupCards}</div>
    </section>

    <section id="objectives">
      <div class="eyebrow">${L("objEyebrow")}</div>
      <h2>${L("objTitle")}</h2>
      <p class="lede">${L("objLede")}</p>
      <div class="obj-grid">
        ${OBJECTIVES.map(o => `
          <div class="obj"><div class="code">${o.code}</div><div class="key">${t(o.key)}</div><p>${t(o.text)}</p></div>`).join("")}
      </div>
    </section>

    <section id="structure">
      <div class="eyebrow">${L("structEyebrow")}</div>
      <h2>${L("structTitle")}</h2>
      <div class="chapters">
        ${STRUCTURE.map(c => `
          <div class="chapter" lang="en">
            <h3><span>${c.n}</span>${c.title}</h3>
            <ol>${c.items.map((it, i) => `<li><span class="num">${c.n}.${i + 1}</span>${it}</li>`).join("")}</ol>
          </div>`).join("")}
      </div>
    </section>`;
}

/* ---------------- GROUP ---------------- */
function renderGroup(gid) {
  const g = groupById(gid);
  if (!g) return renderHome();
  const ppl = peopleIn(gid).slice().sort((a, b) => isDone(b) - isDone(a));

  $app.innerHTML = `
    ${crumbs([[L("home"), "#/"], [t(g.name)]])}
    <header class="page-head">
      <div class="eyebrow">${L("group")(pad(GROUPS.indexOf(g) + 1))}</div>
      <h1>${t(g.name)}</h1>
      <p class="sub">${t(g.blurb)}</p>
      <div class="tabs">
        ${GROUPS.map(x => `<a href="#/group/${x.id}" class="${x.id === gid ? "on" : ""}">${t(x.short)}<span>${peopleIn(x.id).length}</span></a>`).join("")}
      </div>
    </header>

    <div class="people">
      ${ppl.map(p => `
        <a class="person" href="#/person/${p.id}">
          <div class="frame">${photo(p)}${corners}</div>
          <div class="p-info">
            <div class="p-name">${p.name}</div>
            <div class="p-role">${roleOf(p)}</div>
            ${statusPill(p)}
          </div>
        </a>`).join("")}
    </div>`;
}

/* ---------------- PERSON ---------------- */
function renderPerson(pid) {
  const p = personById(pid);
  if (!p) return renderHome();
  const g = groupById(p.group);
  const iv = INTERVIEWS[p.id];
  const siblings = peopleIn(p.group);
  const idx = siblings.indexOf(p);
  const prev = siblings[(idx - 1 + siblings.length) % siblings.length];
  const next = siblings[(idx + 1) % siblings.length];

  const coverage = OBJECTIVES.map(o => {
    if (!iv) return `<span class="pill todo">${o.code}</span>`;
    const ob = iv.objectives[o.code];
    if (!ob || ob.note) return `<span class="pill gap">${o.code} · ${L("notCovered")}</span>`;
    return `<span class="pill done">${o.code}</span>`;
  }).join("");

  let body;
  if (iv) {
    body = OBJECTIVES.map(o => {
      const ob = iv.objectives[o.code];
      if (!ob) return "";
      return `
        <div class="obj-block">
          <div class="label"><div class="c">${o.code}</div><div class="t">${t(o.key)}</div></div>
          <div class="txt">
            <h4>${t(ob.heading)}</h4>
            <ul>${ob.said.map(s => `<li>${t(s)}</li>`).join("")}</ul>
            ${ob.interpretation ? `<div class="callout"><b>${L("interpretation")}</b>${t(ob.interpretation)}</div>` : ""}
            ${ob.note ? `<div class="callout gap"><b>${L("note")}</b>${t(ob.note)}</div>` : ""}
          </div>
        </div>`;
    }).join("");

    if (iv.closing) body += `
      <div class="obj-block">
        <div class="label"><div class="c sm">${L("closing")}</div><div class="t">${L("keyIdea")}</div></div>
        <div class="txt"><h4>${t(iv.closing.heading)}</h4><p>${t(iv.closing.text)}</p></div>
      </div>`;

    if (iv.codes) body += `
      <div class="obj-block">
        <div class="label"><div class="c sm">${L("codes")}</div><div class="t">${L("initialCodes")}</div></div>
        <div class="codes">${iv.codes.map(c => `<span>${t(c)}</span>`).join("")}</div>
      </div>`;
  } else {
    body = `
      <div class="empty">
        <div class="empty-icon">${corners}<span>REC</span></div>
        <h3>${L("emptyTitle")}</h3>
        <p>${L("emptyText")(p.name)}</p>
        <ol class="guide">
          ${OBJECTIVES.map(o => `<li><b>${o.code}</b> ${t(o.text)}</li>`).join("")}
        </ol>
      </div>`;
  }

  $app.innerHTML = `
    ${crumbs([[L("home"), "#/"], [t(g.name), `#/group/${g.id}`], [p.name]])}
    <article class="profile">
      <div class="pf-head">
        <div class="frame big">${photo(p)}${corners}</div>
        <div class="pf-info">
          <div class="eyebrow">${iv ? L("interview")(pad(iv.number)) : L("interviewPending")} · ${t(g.name)}</div>
          <h1>${p.name}</h1>
          <div class="p-role lg">${roleOf(p)}</div>
          ${iv && iv.tags ? `<div class="tags">${iv.tags.map(x => `<span class="tag">${t(x)}</span>`).join("")}</div>` : ""}
          <div class="coverage"><span class="cov-label">${L("objectives")}</span>${coverage}</div>
          <div class="pf-nav">
            <a href="#/person/${prev.id}">← ${prev.name}</a>
            <a href="#/person/${next.id}">${next.name} →</a>
          </div>
        </div>
      </div>
      <div class="pf-body">${body}</div>
    </article>`;
}

/* ---------------- THEMES ---------------- */
function renderThemes() {
  $app.innerHTML = `
    ${crumbs([[L("home"), "#/"], [L("navThemes")]])}
    <header class="page-head">
      <div class="eyebrow">${L("themesEyebrow")}</div>
      <h1>${L("themesTitle")}</h1>
      <p class="sub">${L("themesSub")}</p>
    </header>
    <div class="themes">
      ${THEMES.map(th => `
        <div class="theme">
          <div class="tn">${t(th.name)}</div>
          <div class="objs">${th.objs.map(o => `<span>${o}</span>`).join("")}</div>
          <div class="td">${t(th.desc)}</div>
          <div class="meters">
            ${GROUPS.map(g => {
              const total = peopleIn(g.id).length;
              const n = th.who.map(personById).filter(x => x && x.group === g.id).length;
              return `<div class="meter"><div class="m-top"><span>${t(g.short)}</span><b>${n}/${total}</b></div>
                <div class="bar"><span style="width:${Math.round((n / total) * 100)}%"></span></div></div>`;
            }).join("")}
          </div>
          <div class="names">${th.who.map(personById).filter(Boolean)
            .map(x => `<a class="pill done" href="#/person/${x.id}">${x.name}</a>`).join("")}</div>
        </div>`).join("")}
    </div>
    <div class="key-finding">
      <div class="eyebrow">${L("keyFinding")(pad(KEY_FINDING.from))}</div>
      <h3>${t(KEY_FINDING.title)}</h3>
      <p>${t(KEY_FINDING.text)}</p>
    </div>`;
}

/* ---------------- ROUTER ---------------- */
function route(scrollTop = true) {
  const [, kind, id] = (location.hash || "#/").replace(/^#/, "").split("/");

  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = L(el.dataset.t); });
  document.querySelectorAll(".lang button").forEach(b => {
    b.classList.toggle("on", b.dataset.lang === LANG);
    b.setAttribute("aria-pressed", b.dataset.lang === LANG);
  });
  document.getElementById("updated").textContent = t(STUDY.updated);

  if (kind === "group") renderGroup(id);
  else if (kind === "person") renderPerson(id);
  else if (kind === "themes") renderThemes();
  else renderHome();

  document.querySelectorAll("nav a[data-r]").forEach(a => {
    const r = a.dataset.r;
    const active =
      (r === "home" && !kind) ||
      (r === "themes" && kind === "themes") ||
      (kind === "group" && r === id) ||
      (kind === "person" && personById(id) && r === personById(id).group);
    a.classList.toggle("on", Boolean(active));
  });
  if (scrollTop) window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
window.addEventListener("hashchange", () => route());
route();
