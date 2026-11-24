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
    partial: "partial",
    notAddressed: "Not addressed in this interview.",
    interpretation: "Interpretation",
    note: "Note",
    closing: "Closing",
    keyIdea: "Key idea",
    codes: "Codes",
    initialCodes: "Initial codes",
    emptyTitle: "Analysis coming soon",
    emptyText: name => `The interview with ${name} will be analysed against the research objectives:`,
    themesEyebrow: "Emerging themes",
    themesTitle: "Themes so far",
    themesSub: "Patterns that came out of the interviews, most shared first. Pick an objective to narrow the list, or tap a name to read that interview.",
    filterBy: "Filter by objective",
    filterAll: "All themes",
    noThemes: "No themes for this objective yet.",
    sharedBy: (n, d) => `Shared by ${n} of ${d} people interviewed so far`,
    keyFinding: n => `Key finding · Interview ${n}`,
    navStudy: "Study", tabStudy: "Study",
    navReport: "Report", tabReport: "Report",
    rptEyebrow: "Shared document",
    rptTitle: "Research report",
    rptSub: "Upload the Word file once, then anyone with the team passcode can edit it here. Every change saves automatically, and you can download it as Word at any time.",
    rptLockText: "Enter the team passcode to open the shared report.",
    rptUpload: "Upload Word",
    rptDownload: "Download Word",
    rptFormat: "Formatting",
    rptStyle: "Paragraph style",
    rptNormal: "Normal text",
    rptH: n => `Heading ${n}`,
    rptBullets: "Bulleted list",
    rptNumbers: "Numbered list",
    rptEmpty: "No document yet. Click “Upload Word” to bring in your .docx file, or just start typing here.",
    rptLocal: "Saved on this device only — online saving isn't set up yet.",
    rptTooLarge: "Too large to save online (over 800 KB) — usually because of big images. Remove or shrink images and try again.",
    rptReplaceConfirm: "Replace the current document with this Word file? (Earlier versions are kept in storage.)",
    rptReading: "Reading the Word file…",
    rptReadError: "Couldn't read that file. Please upload a .docx Word document.",
    rptExportError: "Couldn't create the Word file. Check your connection and try again.",
    rptNothingSaved: "Nothing saved yet",
    rptLoadTheirs: "Use their version",
    rptKeepMine: "Keep mine",
    rptDownloadMine: "Download mine",
    rptOtherEditing: who => `${who} is also editing — your next save will ask which version to keep.`,
    statParticipants: "Participants", statGroups: "Groups", statObjectives: "Objectives", statAnalysed: "Analysed",
    stripTitle: (o, c) => `${o} objectives · ${c} chapters`,
    stripText: "Research objectives, chapter outline and working title.",
    viewStudy: "View study",
    studyEyebrow: "Research design",
    studyTitle: "About the study",
    crossGroup: "Across groups",
    guideEyebrow: "Working documents",
    guideTitle: "Analysis guide for Chapter 4",
    guideLede: "Step-by-step method, templates, theme groups and what to write in each part of Chapter 4. Opens as a PDF.",
    guidePages: "8 pages",
    npTitle: "Notepad",
    npHint: "Raw interview notes · private, never shown on the site",
    npLockText: "Enter the team passcode to open the notes.",
    npKey: "Passcode",
    npUnlock: "Open",
    npBadKey: "Wrong passcode.",
    npName: "Your name",
    npPlaceholder: name => `Type or paste the notes from the interview with ${name}…`,
    npLoading: "Loading…",
    npEmpty: "No notes yet.",
    npUnsaved: "Unsaved changes…",
    npSaving: "Saving…",
    npSaved: (who, when) => `Saved${who ? ` by ${who}` : ""} · ${when}`,
    npLocal: "Saved on this device only — online saving isn't set up yet.",
    npError: "Couldn't save online — your text is kept on this device.",
    npConflict: (who, when) => `${who || "Someone"} saved a newer version (${when}).`,
    npKeepBoth: "Keep both",
    npOverwrite: "Keep only mine",
    npYourVersion: "your version",
    npCopy: "Copy",
    npCopied: "Copied",
    npDownload: "Download .txt",
    npSave: "Save",
  },
  si: {
    navHome: "මුල් පිටුව", navIndustry: "කර්මාන්ත", navAcademics: "ශාස්ත්‍රීය", navStudents: "නවක සිනමාකරුවන්", navThemes: "තේමා",
    tabHome: "මුල", tabIndustry: "කර්මාන්ත", tabAcademics: "ශාස්ත්‍රීය", tabStudents: "නවක", tabThemes: "තේමා",
    heroEyebrow: "පර්යේෂණ ව්‍යාපෘතිය · ගුණාත්මක අධ්‍යයනය",
    workingTitle: "මූලික මාතෘකාව",
    progress: (d, n) => `සම්මුඛ සාකච්ඡා ${n} න් ${d} ක් විශ්ලේෂණය කර ඇත`,
    partEyebrow: "සහභාගිවන්නන්",
    partTitle: "කණ්ඩායම් තුනක්, එක් ප්‍රශ්නයක්",
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
    partial: "අර්ධව",
    notAddressed: "මෙම සම්මුඛ සාකච්ඡාවේදී සාකච්ඡා නොවිණි.",
    interpretation: "අර්ථකථනය",
    note: "සටහන",
    closing: "අවසාන",
    keyIdea: "මූලික අදහස",
    codes: "කේත",
    initialCodes: "මූලික කේත",
    emptyTitle: "විශ්ලේෂණය ඉදිරියේදී",
    emptyText: name => `${name} සමඟ කළ සම්මුඛ සාකච්ඡාව පහත පර්යේෂණ අරමුණු අනුව විශ්ලේෂණය කෙරේ:`,
    themesEyebrow: "මතුවන තේමා",
    themesTitle: "මෙතෙක් හඳුනාගත් තේමා",
    themesSub: "සම්මුඛ සාකච්ඡාවලින් මතු වූ රටා — වැඩිපුරම බෙදාගත් ඒවා මුලින්. ලැයිස්තුව පටු කිරීමට අරමුණක් තෝරන්න, නැතහොත් එම සම්මුඛ සාකච්ඡාව කියවීමට නමක් තට්ටු කරන්න.",
    filterBy: "අරමුණ අනුව පෙරන්න",
    filterAll: "සියලු තේමා",
    noThemes: "මෙම අරමුණට තවම තේමා නැත.",
    sharedBy: (n, d) => `මෙතෙක් සම්මුඛ සාකච්ඡා කළ ${d} දෙනාගෙන් ${n} දෙනෙක් බෙදාගනී`,
    keyFinding: n => `ප්‍රධාන සොයාගැනීම · සම්මුඛ සාකච්ඡාව ${n}`,
    navStudy: "අධ්‍යයනය", tabStudy: "අධ්‍යයනය",
    navReport: "වාර්තාව", tabReport: "වාර්තාව",
    rptEyebrow: "හවුල් ලේඛනය",
    rptTitle: "පර්යේෂණ වාර්තාව",
    rptSub: "Word ගොනුව එක් වරක් උඩුගත කරන්න; ඉන්පසු කණ්ඩායම් මුරපදය ඇති ඕනෑම කෙනෙකුට එය මෙහිම සංස්කරණය කළ හැකිය. සෑම වෙනසක්ම ස්වයංක්‍රීයව සුරැකෙන අතර, ඕනෑම වේලාවක Word ලෙස බාගත හැකිය.",
    rptLockText: "හවුල් වාර්තාව විවෘත කිරීමට කණ්ඩායම් මුරපදය ඇතුළත් කරන්න.",
    rptUpload: "Word උඩුගත කරන්න",
    rptDownload: "Word බාගන්න",
    rptFormat: "හැඩතල",
    rptStyle: "ඡේද ශෛලිය",
    rptNormal: "සාමාන්‍ය පෙළ",
    rptH: n => `ශීර්ෂය ${n}`,
    rptBullets: "බුලට් ලැයිස්තුව",
    rptNumbers: "අංක ලැයිස්තුව",
    rptEmpty: "තවම ලේඛනයක් නැත. ඔබේ .docx ගොනුව ගෙන ඒමට “Word උඩුගත කරන්න” ක්ලික් කරන්න, නැතහොත් මෙහි ටයිප් කිරීම අරඹන්න.",
    rptLocal: "මෙම උපාංගයේ පමණක් සුරැකිණි — ඔන්ලයින් සුරැකීම තවම සකසා නැත.",
    rptTooLarge: "ඔන්ලයින් සුරැකීමට විශාල වැඩියි (800 KB ට වැඩි) — සාමාන්‍යයෙන් විශාල රූප නිසා. රූප ඉවත් කර හෝ කුඩා කර නැවත උත්සාහ කරන්න.",
    rptReplaceConfirm: "වත්මන් ලේඛනය මෙම Word ගොනුවෙන් ප්‍රතිස්ථාපනය කරන්නද? (පෙර පිටපත් ගබඩාවේ තබා ඇත.)",
    rptReading: "Word ගොනුව කියවමින්…",
    rptReadError: "එම ගොනුව කියවිය නොහැකි විය. කරුණාකර .docx Word ලේඛනයක් උඩුගත කරන්න.",
    rptExportError: "Word ගොනුව සෑදිය නොහැකි විය. සම්බන්ධතාව පරීක්ෂා කර නැවත උත්සාහ කරන්න.",
    rptNothingSaved: "තවම කිසිවක් සුරැකී නැත",
    rptLoadTheirs: "ඔවුන්ගේ පිටපත ගන්න",
    rptKeepMine: "මගේ පිටපත තබන්න",
    rptDownloadMine: "මගේ පිටපත බාගන්න",
    rptOtherEditing: who => `${who} ද සංස්කරණය කරමින් සිටී — ඔබේ ඊළඟ සුරැකීමේදී තබාගත යුතු පිටපත ඇසනු ඇත.`,
    statParticipants: "සහභාගිවන්නන්", statGroups: "කණ්ඩායම්", statObjectives: "අරමුණු", statAnalysed: "විශ්ලේෂිත",
    stripTitle: (o, c) => `අරමුණු ${o} · පරිච්ඡේද ${c}`,
    stripText: "පර්යේෂණ අරමුණු, පරිච්ඡේද සැලැස්ම සහ මූලික මාතෘකාව.",
    viewStudy: "අධ්‍යයනය බලන්න",
    studyEyebrow: "පර්යේෂණ සැලසුම",
    studyTitle: "අධ්‍යයනය ගැන",
    crossGroup: "කණ්ඩායම් හරහා",
    guideEyebrow: "වැඩ ලේඛන",
    guideTitle: "4 වන පරිච්ඡේදය සඳහා විශ්ලේෂණ මාර්ගෝපදේශය",
    guideLede: "පියවරෙන් පියවර ක්‍රමවේදය, ආකෘති, තේමා කාණ්ඩ සහ 4 වන පරිච්ඡේදයේ එක් එක් කොටසේ ලිවිය යුතු දේ. PDF ලෙස විවෘත වේ.",
    guidePages: "පිටු 8",
    npTitle: "සටහන් පොත",
    npHint: "සම්මුඛ සාකච්ඡා අමු සටහන් · පුද්ගලිකයි, වෙබ් අඩවියේ කිසිවිට නොපෙන්වේ",
    npLockText: "සටහන් විවෘත කිරීමට කණ්ඩායම් මුරපදය ඇතුළත් කරන්න.",
    npKey: "මුරපදය",
    npUnlock: "විවෘත කරන්න",
    npBadKey: "මුරපදය වැරදියි.",
    npName: "ඔබේ නම",
    npPlaceholder: name => `${name} සමඟ කළ සම්මුඛ සාකච්ඡාවේ සටහන් මෙහි ටයිප් කරන්න හෝ අලවන්න…`,
    npLoading: "පූරණය වෙමින්…",
    npEmpty: "තවම සටහන් නැත.",
    npUnsaved: "සුරැකීමට ඇත…",
    npSaving: "සුරකිමින්…",
    npSaved: (who, when) => `සුරැකිණි${who ? ` · ${who}` : ""} · ${when}`,
    npLocal: "මෙම උපාංගයේ පමණක් සුරැකිණි — ඔන්ලයින් සුරැකීම තවම සකසා නැත.",
    npError: "ඔන්ලයින් සුරැකීමට නොහැකි විය — ඔබේ පෙළ මෙම උපාංගයේ සුරැකී ඇත.",
    npConflict: (who, when) => `${who || "වෙනත් අයෙක්"} නවතම පිටපතක් සුරැකීය (${when}).`,
    npKeepBoth: "දෙකම තබාගන්න",
    npOverwrite: "මගේ පිටපත පමණක්",
    npYourVersion: "ඔබේ පිටපත",
    npCopy: "පිටපත්",
    npCopied: "පිටපත් කළා",
    npDownload: "බාගන්න",
    npSave: "සුරකින්න",
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
      ${corners}
      <div class="eyebrow">${L("heroEyebrow")}</div>
      <h1>${STUDY.title}</h1>
      <p class="sub">${t(STUDY.subtitle)}</p>
      <dl class="h-stats">
        <div><dt>${PEOPLE.length}</dt><dd>${L("statParticipants")}</dd></div>
        <div><dt>${GROUPS.length}</dt><dd>${L("statGroups")}</dd></div>
        <div><dt>${OBJECTIVES.length}</dt><dd>${L("statObjectives")}</dd></div>
        <div><dt>${done}<small>/${PEOPLE.length}</small></dt><dd>${L("statAnalysed")}</dd></div>
      </dl>
      <div class="h-progress" aria-hidden="true"><span style="width:${pct}%"></span></div>
    </header>

    <section id="groups" class="home-groups">
      <div class="sec-head">
        <div>
          <div class="eyebrow">${L("partEyebrow")}</div>
          <h2>${L("partTitle")}</h2>
        </div>
      </div>
      <div class="groups">${groupCards}</div>
    </section>

    <a class="study-strip" href="#/study">
      <div class="ss-codes">${OBJECTIVES.map(o => `<span>${o.code}</span>`).join("")}</div>
      <div class="ss-text">
        <b>${L("stripTitle")(OBJECTIVES.length, STRUCTURE.filter(c => c.n).length)}</b>
        <span>${L("stripText")}</span>
      </div>
      <span class="ss-go">${L("viewStudy")} <span class="arrow">→</span></span>
    </a>`;
}

/* ---------------- STUDY ---------------- */
function renderStudy() {
  $app.innerHTML = `
    ${crumbs([[L("home"), "#/"], [L("navStudy")]])}
    <header class="page-head">
      <div class="eyebrow">${L("studyEyebrow")}</div>
      <h1>${L("studyTitle")}</h1>
      <div class="working"><b>${L("workingTitle")}:</b> ${STUDY.workingTitle}</div>
    </header>

    <section class="tight">
      <div class="eyebrow">${L("objEyebrow")}</div>
      <h2>${L("objTitle")}</h2>
      <p class="lede">${L("objLede")}</p>
      <div class="obj-grid">
        ${OBJECTIVES.map(o => `
          <div class="obj">
            <div class="obj-top"><span class="code">${o.code}</span>${o.crossGroup ? `<span class="pill todo">${L("crossGroup")}</span>` : ""}</div>
            <div class="key">${t(o.key)}</div><p>${t(o.text)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section>
      <div class="eyebrow">${L("structEyebrow")}</div>
      <h2>${L("structTitle")}</h2>
      <div class="chapters">
        ${STRUCTURE.map(c => `
          <div class="chapter" lang="en">
            <h3>${c.n ? `<span>${c.n}</span>` : ""}${c.title}</h3>
            ${c.items.length ? `<ol>${c.items.map((it, i) => `<li>${c.n ? `<span class="num">${c.n}.${i + 1}</span>` : ""}${it}</li>`).join("")}</ol>` : ""}
          </div>`).join("")}
      </div>
    </section>

    <section>
      <div class="eyebrow">${L("guideEyebrow")}</div>
      <h2>${L("guideTitle")}</h2>
      <p class="lede">${L("guideLede")}</p>
      <div class="guides">
        ${[["en", "assets/docs/Analysis_Guide_EN.pdf", "English"], ["si", "assets/docs/Analysis_Guide_SI.pdf", "සිංහල"]].map(([lang, href, label]) => `
          <a class="guide-card" href="${href}" target="_blank" rel="noopener">
            <span class="g-ic" aria-hidden="true">PDF</span>
            <span class="g-txt"><b lang="${lang}">${lang === "si" ? "විශ්ලේෂණ මාර්ගෝපදේශය" : "Analysis Guide"}</b><small>${label} · ${L("guidePages")}</small></span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>`).join("")}
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

    <div class="people" style="--cols:${ppl.length <= 5 ? ppl.length : 3}">
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

  const personal = OBJECTIVES;
  const coverage = personal.map(o => {
    if (!iv) return `<span class="pill todo">${o.code}</span>`;
    const ob = iv.objectives[o.code];
    if (ob && ob.partial) return `<span class="pill gap">${o.code} · ${L("partial")}</span>`;
    if (!ob || ob.note) return `<span class="pill gap">${o.code} · ${L("notCovered")}</span>`;
    return `<span class="pill done">${o.code}</span>`;
  }).join("");

  let body;
  if (iv) {
    body = personal.map(o => {
      const ob = iv.objectives[o.code];
      if (!ob) return `
        <div class="obj-block">
          <div class="label"><div class="c">${o.code}</div><div class="t">${t(o.key)}</div></div>
          <div class="txt"><p class="muted">${L("notAddressed")}</p></div>
        </div>`;
      return `
        <div class="obj-block">
          <div class="label"><div class="c">${o.code}</div><div class="t">${t(o.key)}</div></div>
          <div class="txt">
            <h4>${t(ob.heading)}</h4>
            ${ob.said && ob.said.length ? `<ul>${ob.said.map(s => `<li>${t(s)}</li>`).join("")}</ul>` : ""}
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
          ${personal.map(o => `<li><b>${o.code}</b> ${t(o.text)}</li>`).join("")}
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
      ${renderNotepad(p)}
    </article>`;
  mountNotepad(p);
}

/* ---------------- THEMES ---------------- */
let themeFilter = "all";   // objective code, or "all"

function renderThemes() {
  const done = PEOPLE.filter(isDone).length;
  const support = th => th.who.map(personById).filter(Boolean);
  const sorted = THEMES.slice().sort((x, y) => support(y).length - support(x).length);
  const list = themeFilter === "all" ? sorted : sorted.filter(th => th.objs.includes(themeFilter));
  const count = code => THEMES.filter(th => th.objs.includes(code)).length;
  const chip = (f, label, n) => `<button type="button" class="chip${themeFilter === f ? " on" : ""}" data-f="${f}">${label}<span>${n}</span></button>`;

  const card = th => {
    const ppl = support(th);
    const pct = Math.round((ppl.length / Math.max(done, 1)) * 100);
    return `
      <article class="th-card">
        <div class="th-top">
          <h3>${t(th.name)}</h3>
          <span class="th-count" title="${L("sharedBy")(ppl.length, done)}">${ppl.length}</span>
        </div>
        <p class="th-desc">${t(th.desc)}</p>
        <div class="th-strength" aria-hidden="true"><span style="width:${pct}%"></span></div>
        <div class="th-meta">${L("sharedBy")(ppl.length, done)}</div>
        <div class="th-people">
          ${ppl.map(p => `<a class="th-person" href="#/person/${p.id}">${photo(p, "mini")}<span>${p.name}</span></a>`).join("")}
        </div>
        <div class="th-objs">${th.objs.map(o => `<span>${o} · ${t(OBJECTIVES.find(x => x.code === o).key)}</span>`).join("")}</div>
      </article>`;
  };

  $app.innerHTML = `
    ${crumbs([[L("home"), "#/"], [L("navThemes")]])}
    <header class="page-head">
      <div class="eyebrow">${L("themesEyebrow")}</div>
      <h1>${L("themesTitle")}</h1>
      <p class="sub">${L("themesSub")}</p>
    </header>

    <div class="key-finding">
      <div class="eyebrow">${L("keyFinding")(pad(KEY_FINDING.from))}</div>
      <h3>${t(KEY_FINDING.title)}</h3>
      <p>${t(KEY_FINDING.text)}</p>
    </div>

    <div class="th-filter" role="group" aria-label="${L("filterBy")}">
      ${chip("all", L("filterAll"), THEMES.length)}
      ${OBJECTIVES.filter(o => count(o.code)).map(o => chip(o.code, `${o.code} · ${t(o.key)}`, count(o.code))).join("")}
    </div>

    <div class="th-grid">
      ${list.length ? list.map(card).join("") : `<p class="muted">${L("noThemes")}</p>`}
    </div>`;

  document.querySelectorAll(".th-filter .chip").forEach(b => b.addEventListener("click", () => {
    themeFilter = b.dataset.f;
    renderThemes();
  }));
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

  if (kind === "group") renderGroup(id);
  else if (kind === "person") renderPerson(id);
  else if (kind === "themes") renderThemes();
  else if (kind === "study") renderStudy();
  else if (kind === "report") renderReport();
  else renderHome();

  document.querySelectorAll("nav a[data-r]").forEach(a => {
    const r = a.dataset.r;
    const active =
      (r === "home" && !kind) ||
      (r === "themes" && kind === "themes") ||
      (r === "study" && kind === "study") ||
      (r === "report" && kind === "report") ||
      (kind === "group" && r === id) ||
      (kind === "person" && personById(id) && r === personById(id).group);
    a.classList.toggle("on", Boolean(active));
  });
  if (scrollTop) window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
window.addEventListener("hashchange", () => route());
route();
