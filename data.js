/* =========================================================
   RESEARCH DATA — edit this file to add people & interviews
   ---------------------------------------------------------
   Text fields can be bilingual:  { si: "සිංහල", en: "English" }
   (a plain string is shown in both languages).

   Photos: put a picture in  assets/people/  named after the
   person's id, e.g.  assets/people/prasanna-withanage.jpg
   (or set `photo` to any other path). If no photo is found,
   the card shows the person's initials instead.
   ========================================================= */

const STUDY = {
  title: "Framing the Unconventional",
  subtitle: {
    en: "Comparing filmmakers', industry professionals' and scholars' perspectives on unconventional framing in Sri Lankan cinema.",
    si: "ශ්‍රී ලාංකීය සිනමාවේ unconventional framing පිළිබඳ සිනමාකරුවන්, කර්මාන්ත වෘත්තිකයන් සහ විද්වතුන්ගේ දෘෂ්ටිකෝණ සංසන්දනය කිරීම.",
  },
  workingTitle:
    "An Interpretive & Multi-perspective Analysis of Unconventional Frames in Contemporary Sri Lankan Cinema",
  updated: { en: "22 November 2026", si: "2026 නොවැම්බර් 22" },
};

const GROUPS = [
  {
    id: "industry",
    name: { en: "Industry Professionals", si: "කර්මාන්ත වෘත්තිකයන්" },
    short: { en: "Industry", si: "කර්මාන්ත" },
    blurb: {
      en: "Directors and practitioners working within the Sri Lankan film industry.",
      si: "ශ්‍රී ලාංකීය සිනමා කර්මාන්තය තුළ ක්‍රියාකාරී අධ්‍යක්ෂවරුන් සහ වෘත්තිකයන්.",
    },
  },
  {
    id: "academics",
    name: { en: "Academics", si: "ශාස්ත්‍රඥයන්" },
    short: { en: "Academics", si: "ශාස්ත්‍රීය" },
    blurb: {
      en: "Scholars and lecturers who study, teach and write about cinema.",
      si: "සිනමාව අධ්‍යයනය කරන, උගන්වන සහ ඒ පිළිබඳ ලියන විද්වතුන් සහ කථිකාචාර්යවරුන්.",
    },
  },
  {
    id: "students",
    name: { en: "Film Students / Young Filmmakers", si: "සිනමා සිසුන් / නවක සිනමාකරුවන්" },
    short: { en: "Young filmmakers", si: "නවක" },
    blurb: {
      en: "Emerging filmmakers and students shaping the next generation of Sri Lankan cinema.",
      si: "ශ්‍රී ලාංකීය සිනමාවේ ඊළඟ පරම්පරාව ගොඩනගන නවක සිනමාකරුවන් සහ සිසුන්.",
    },
  },
];

/* group: "industry" | "academics" | "students"
   role:  shown under the name (optional)
   photo: optional — defaults to assets/people/<id>.jpg     */
const PEOPLE = [
  // Industry professionals
  { id: "vimukthi-jayasundara", name: "Vimukthi Jayasundara", group: "industry", role: { en: "Filmmaker", si: "සිනමාකරු" }, photo: "assets/people/vimukthi-jayasundara.png" },
  { id: "prasanna-withanage", name: "Prasanna Withanage", group: "industry" },
  { id: "prasanna-jayakodi", name: "Prasanna Jayakodi", group: "industry" },
  { id: "majith-s-uyangoda", name: "Majith S. Uyangoda", group: "industry" },
  { id: "md-mahindapaala", name: "M.D. Mahindapaala", group: "industry" },
  { id: "channa-deshapriya", name: "Channa Deshapriya", group: "industry" },

  // Academics
  { id: "supun-hemachandra", name: "Supun Hemachandra", group: "academics" },
  { id: "tharaka-nayanapriya", name: "Tharaka Nayanapriya", group: "academics" },
  { id: "boopathy-nalin", name: "Boopathy Nalin", group: "academics" },
  { id: "ileka-ruwanpathirana", name: "Ileka Ruwanpathirana", group: "academics" },
  { id: "hasantha-dissanayake", name: "Hasantha Dissanayake", group: "academics" },

  // Film students / young filmmakers
  { id: "nerun-kalpajith", name: "Nerun Kalpajith", group: "students" },
  { id: "sahan-ransika", name: "Sahan Ransika", group: "students" },
  { id: "praveen-katukithule", name: "Praveen Katukithule", group: "students" },
  { id: "samith-bodhipaksa", name: "Samith Bodhipaksa", group: "students" },
];

const OBJECTIVES = [
  {
    code: "O1",
    key: { en: "Definition", si: "නිර්වචනය" },
    text: {
      en: "To interpret how each group defines unconventional frames, and what each treats as unconventional.",
      si: "එක් එක් කණ්ඩායම unconventional රාමු නිර්වචනය කරන ආකාරය සහ ඔවුන් unconventional ලෙස සලකන්නේ කුමක්ද යන්න අර්ථකථනය කිරීම.",
    },
  },
  {
    code: "O2",
    key: { en: "Rules vs freedom", si: "රීති සහ නිදහස" },
    text: {
      en: "To compare how each group views the relationship between framing rules and aesthetic freedom.",
      si: "රාමුකරණ රීති සහ සෞන්දර්යාත්මක නිදහස අතර සම්බන්ධය එක් එක් කණ්ඩායම දකින ආකාරය සංසන්දනය කිරීම.",
    },
  },
  {
    code: "O3",
    key: { en: "Context", si: "සන්දර්භය" },
    text: {
      en: "To examine how each group perceives the influence of Sri Lanka's socio-economic and political conditions on unconventional framing.",
      si: "ශ්‍රී ලංකාවේ සමාජ-ආර්ථික සහ දේශපාලනික තත්ත්වයන් unconventional රාමුකරණයට බලපාන ආකාරය එක් එක් කණ්ඩායම දකින ආකාරය පරීක්ෂා කිරීම.",
    },
  },
  {
    code: "O4",
    key: { en: "Collaboration", si: "සහයෝගීතාව" },
    text: {
      en: "To compare how each group understands the cinematographer–director relationship in framing decisions.",
      si: "රාමුකරණ තීරණවලදී සිනමාකරු (cinematographer) සහ අධ්‍යක්ෂ අතර සම්බන්ධය එක් එක් කණ්ඩායම තේරුම් ගන්නා ආකාරය සංසන්දනය කිරීම.",
    },
  },
];

/* The dissertation is written in English, so chapter titles stay in English. */
const STRUCTURE = [
  { n: 1, title: "Introduction", items: ["Introduction to the Study", "What is Unconventional Framing?", "Background of the Study", "Aims of the Study", "Objectives of the Study", "Significance of the Study", "Research Outline"] },
  { n: 2, title: "Literature Review", items: ["Literature on Unconventional Approaches", "Literature on Sri Lankan Cinema", "Literature on Framings and Perspectives", "Literature Gap", "Theoretical Framework and Theories"] },
  { n: 3, title: "Methodology", items: ["Research Method", "Research Techniques", "Qualitative Interviews", "Thematic Analysis"] },
  { n: 4, title: "Findings", items: ["Presentation of Research Findings", "Revisiting the Research Objectives", "Discussion of Findings Using Thematic Analysis"] },
];

/* =========================================================
   INTERVIEWS — keyed by person id.
   Each objective: { heading, said: [..points..], interpretation, note }
   ========================================================= */
const INTERVIEWS = {
  "vimukthi-jayasundara": {
    number: 1,
    tags: [
      { en: "Frame as foundation", si: "රාමුව මූලිකයි" },
      { en: "Evolving rules", si: "වෙනස් වන රීති" },
      { en: "Political seeing", si: "දේශපාලනික දැක්ම" },
      { en: "War cinema", si: "යුද සිනමාව" },
      { en: "Subjectivity", si: "ආත්මීයත්වය" },
    ],
    objectives: {
      O1: {
        heading: { en: "The frame is the foundation of cinema", si: "රාමුව සිනමාවේ මූලිකම අංගයයි" },
        said: [
          {
            en: "There is no cinema without the frame. Even while writing a screenplay or any other text, the filmmaker is already imagining images, characters and objects within frames. Framing therefore begins in the script.",
            si: "රාමුවක් නොමැතිව සිනමාවක් නැත. තිර රචනයක් හෝ වෙනත් ලේඛනයක් ලියන විටදීම නිර්මාණකරුවාගේ මනසේ රූප රාමු, චරිත සහ දේවල් කල්පනා වේ. එනම් රාමුකරණය ආරම්භ වන්නේ තිර පිටපතේ සිටමයි.",
          },
          {
            en: "By the time a film is complete, a great many frames have been built up, existing in the screenplay as a sequence of events.",
            si: "චිත්‍රපටය අවසන් වන විට රාමු රාශියක් ගොඩනැගී ඇති අතර, ඒවා සිද්ධි මාලාවක් ලෙස තිර පිටපත තුළ පවතී.",
          },
          {
            en: "A conventional frame is, in general, one's ordinary means of expression. Contemporary films are full of common frames: today anyone can have an idea and a phone or camera, and they present those ideas through common frames.",
            si: "සාමාන්‍ය (සම්ප්‍රදායික) රාමුවක් යනු පොදුවේ තමන්ගේ සාමාන්‍ය ප්‍රකාශන මාධ්‍යයයි. වර්තමාන සිනමාවේ සුලභ රාමු බහුලය. අද ඕනෑම කෙනෙකුට අදහසක් මෙන්ම ෆෝන් එකක් හෝ කැමරාවක් ද ඇත — ඔවුන් එම අදහස් පෙන්වන්නේ සුලභ රාමු හරහාය.",
          },
          {
            en: "To express something different from common frames, one must change the object captured in the frame, or something about it, or generate a different idea altogether. Such work is what is called <b>unconventional framing</b>.",
            si: "සුලභ රාමුවලින් වෙනස් දෙයක් ප්‍රකාශ කිරීමට නම්, රාමුවට හසුවන වස්තුව හෝ ඒ පිළිබඳ යමක් වෙනස් කළ යුතුය; නැතහොත් වෙනත් අදහසක් ජනනය කළ යුතුය. එවැනි නිර්මාණ <b>unconventional framing</b> ලෙස හඳුන්වයි.",
          },
        ],
        interpretation: {
          en: "For him, unconventional framing is not only about how a frame looks, but about moving beyond the common frame to generate a <i>different idea</i>. His observation that common frames have multiplied as cameras have become accessible to everyone is important context.",
          si: "ඔහුට අනුව unconventional framing යනු රාමුවේ පෙනුම පමණක් නොව, සුලභ රාමුවෙන් ඔබ්බට ගොස් <i>වෙනස් අදහසක්</i> ජනනය කිරීමයි. කැමරාව සැමට ළඟා විය හැකි වීමත් සමඟ සුලභ රාමු ද බහුල වී ඇති බවට ඔහු කරන නිරීක්ෂණය වැදගත් සන්දර්භයකි.",
        },
      },
      O2: {
        heading: { en: "Cinematic rules are not fixed", si: "සිනමා රීති ස්ථාවර නොවේ" },
        said: [
          {
            en: "Cinematography has its accepted conventions, but creativity is free, so those rules can be exceeded.",
            si: "සිනමාටොග්‍රැෆියට ද සම්මත රීති ඇත. නමුත් නිර්මාණශීලීත්වය නිදහස් දෙයකි; ඒ නිසා එම රීති ඉක්මවා යා හැකිය.",
          },
          {
            en: "Rules change from era to era; from cinema's earliest days to the present, they have kept changing.",
            si: "රීති යුගයෙන් යුගයට වෙනස් වේ. සිනමාවේ ආරම්භක අවධියේ සිට අද දක්වා රීති වෙනස් වෙමින් පැමිණ ඇත.",
          },
          {
            en: "The dominant rule system today is one that makes the story easy to convey: simple, and relatable to audiences. It is built on the rules of an earlier era.",
            si: "වර්තමානයේ බහුලව පවතින්නේ කතාව පහසුවෙන් ප්‍රකාශ කළ හැකි, සරල සහ ජනතාවට සමීප කරගත හැකි රීති පද්ධතියකි. එය පෙර යුගයක රීති මත ගොඩනැගූවකි.",
          },
          {
            en: "Cinema is an evolving medium that searches for new rules. Expression may differ in a commercial context, but when filmmakers build their own cinematic medium they can move beyond existing rules.",
            si: "සිනමාව යනු පරිණාමය වන, නව රීති සොයා යන මාධ්‍යයකි. වාණිජ සන්දර්භයක ප්‍රකාශනය වෙනස් විය හැකි නමුත්, තමන්ගේම සිනමා මාධ්‍යයක් ගොඩනගන විට පවතින රීතිවලින් ඔබ්බට යා හැකිය.",
          },
        ],
        interpretation: {
          en: "He sees rules and freedom not as opposites but as a historically shifting relationship. Commercial cinema stays closer to existing rules, while a personal cinematic language opens up space for freedom.",
          si: "ඔහු රීති සහ නිදහස අතර ගැටුමක් නොව, ඓතිහාසිකව වෙනස් වන සම්බන්ධයක් දකී. වාණිජ සිනමාව පවතින රීතිවලට වැඩියෙන් බැඳී සිටින අතර, පුද්ගලික සිනමා භාෂාවක් නිදහසට ඉඩ සලසයි.",
        },
      },
      O3: {
        heading: { en: "A new way of seeing is political", si: "නව බැල්මක් දේශපාලනික වේ" },
        said: [
          {
            en: "Every era has its accepted frames. Being able to see beyond them and offer a new interpretation is, in itself, political.",
            si: "සෑම යුගයකම සම්මත රාමු පවතී. ඒවායින් ඔබ්බට දැකීමට සහ අලුත් අර්ථකථනයක් ලබාදීමට හැකි නම්, එය දේශපාලනික වේ.",
          },
          {
            en: "If one can look with a new gaze, it goes beyond a mere reading: it can move society and bring about political transformation.",
            si: "අලුත් බැල්මකින් බැලිය හැකි නම්, එය කියවීමකට පමණක් සීමා නොවී, සමාජය පෙළඹවීමට — එනම් දේශපාලන පරිවර්තනයකට — හේතු විය හැකිය.",
          },
          {
            en: "He identifies two streams in Sri Lankan cinema about the war: <b>war-victory cinema</b>, centred on military triumph, and <b>cinema of war's grief</b>, centred on the losses the war caused. Most of his own work belongs to the second.",
            si: "යුද්ධය සම්බන්ධයෙන් ශ්‍රී ලාංකීය සිනමාවේ ධාරා දෙකක් ඔහු හඳුනාගනී: යුද ජයග්‍රහණය කේන්ද්‍ර කරගත් <b>යුද ජය සිනමාව</b> සහ යුද්ධය නිසා සිදුවූ අහිමිවීම් කේන්ද්‍ර කරගත් <b>යුද ශෝක සිනමාව</b>. ඔහුගේම කෘති බොහොමයක් අයත් වන්නේ දෙවැන්නටය.",
          },
          {
            en: "Compared with war-victory cinema, this anti-war, artistic stream presents a different political vision. These films differ both aesthetically and in their characteristics.",
            si: "යුද විරෝධී සහ කලාත්මක මෙම ධාරාව යුද ජය සිනමාව සමඟ සසඳන විට, එය වෙනස් දේශපාලනික දැක්මක් ඉදිරිපත් කරයි. මේවා සෞන්දර්යාත්මකව මෙන්ම ලක්ෂණ අතින් ද වෙනස් සිනමා පට වේ.",
          },
        ],
        interpretation: {
          en: "Framing cannot be separated from politics: looking beyond an accepted frame is itself a political act. The two streams of post-war Sri Lankan cinema offer a strong example for O3.",
          si: "රාමුකරණය දේශපාලනයෙන් වෙන් කළ නොහැක; සම්මත රාමුවකින් ඔබ්බට බැලීමම දේශපාලනික ක්‍රියාවකි. පශ්චාත්-යුද ලාංකීය සිනමාවේ මෙම ධාරා දෙක O3 සඳහා ශක්තිමත් උදාහරණයකි.",
        },
      },
      O4: {
        heading: { en: "Not addressed in this interview", si: "මෙම සම්මුඛ සාකච්ඡාවේදී සාකච්ඡා නොවිණි" },
        said: [
          {
            en: "Although he notes that framing begins in the screenplay, the interview does not describe how framing decisions are shared between the cinematographer and the director.",
            si: "රාමුකරණය තිර පිටපතේ සිටම ආරම්භ වන බව ඔහු පැවසුවද, සිනමාකරු (cinematographer) සහ අධ්‍යක්ෂ අතර රාමුකරණ තීරණ බෙදී යන ආකාරය මෙම සම්මුඛ සාකච්ඡාවේදී සාකච්ඡා නොවිණි.",
          },
        ],
        note: {
          en: "This objective will be addressed through the remaining interviews.",
          si: "මෙම අරමුණ ඉතිරි සම්මුඛ සාකච්ඡා ඔස්සේ ආවරණය කෙරේ.",
        },
      },
    },
    closing: {
      heading: { en: "Unconventionality is subjective", si: "Unconventional බව ආත්මීයයි" },
      text: {
        en: "Whether a film is unconventional depends on the critic and the viewer observing it. Without them, a film is not simply “unconventional” on its own — this is his view.",
        si: "චිත්‍රපටයක් unconventional ද යන්න තීරණය වන්නේ එය නිරීක්ෂණය කරන විචාරකයා සහ ප්‍රේක්ෂකයා අනුවය. ඔවුන්ගෙන් තොරව චිත්‍රපටයක් තනිවම unconventional ලෙස සලකනු නොලැබේ — මෙය ඔහුගේ මතයයි.",
      },
    },
    codes: [
      { en: "Frame begins in the script", si: "රාමුව තිර පිටපතෙන් ඇරඹේ" },
      { en: "No cinema without the frame", si: "රාමුවකින් තොර සිනමාවක් නැත" },
      { en: "Conventional = familiar expression", si: "සම්ප්‍රදායික = හුරුපුරුදු ප්‍රකාශනය" },
      { en: "Accessible cameras → common frames", si: "සුලභ කැමරා → සුලභ රාමු" },
      { en: "Change the object / meaning in frame", si: "රාමුවේ වස්තුව / අර්ථය වෙනස් කිරීම" },
      { en: "Rules change by era", si: "යුගයෙන් යුගයට වෙනස් වන රීති" },
      { en: "Simple, relatable rule system", si: "සරල, සමීප රීති පද්ධතිය" },
      { en: "Cinema seeks new rules", si: "නව රීති සොයන සිනමාව" },
      { en: "Commercial limits", si: "වාණිජ සීමා" },
      { en: "Own cinematic language → freedom", si: "ස්වකීය සිනමා භාෂාව → නිදහස" },
      { en: "Seeing beyond = political", si: "ඔබ්බට දැකීම = දේශපාලනික" },
      { en: "Cinema can move society", si: "සමාජය පෙළඹවිය හැකි සිනමාව" },
      { en: "War-victory vs war-grief cinema", si: "යුද ජය සිනමාව සහ යුද ශෝක සිනමාව" },
      { en: "Loss caused by war", si: "යුද්ධය නිසා වූ අහිමිවීම්" },
      { en: "Critic / viewer decides", si: "විචාරකයා / ප්‍රේක්ෂකයා තීරණය කරයි" },
    ],
  },
};

const THEMES = [
  {
    name: { en: "Framing as a foundation", si: "මූලිකාංගයක් ලෙස රාමුව" },
    desc: { en: "The frame is a fundamental element of cinema, beginning in the screenplay.", si: "රාමුව සිනමාවේ මූලික අංගයකි; එය තිර පිටපතේ සිටම ආරම්භ වේ." },
    objs: ["O1"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Evolution of cinematic language", si: "සිනමා භාෂාවේ පරිණාමය" },
    desc: { en: "Cinematic rules change from era to era; cinema keeps searching for new ones.", si: "සිනමා රීති යුගයෙන් යුගයට වෙනස් වේ; සිනමාව නව රීති සොයා යයි." },
    objs: ["O2"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Artistic freedom", si: "කලාත්මක නිදහස" },
    desc: { en: "The freedom to go beyond existing rules within one's own cinematic language.", si: "තමන්ගේම සිනමා භාෂාවක් තුළ පවතින රීතිවලින් ඔබ්බට යාමේ නිදහස." },
    objs: ["O2"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Commercial constraint", si: "වාණිජ සීමා" },
    desc: { en: "In a commercial context, expression stays tied to simple, relatable rules.", si: "වාණිජ සන්දර්භය තුළ ප්‍රකාශනය සරල, සමීප රීතිවලට බැඳී පවතී." },
    objs: ["O2", "O3"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Political seeing", si: "දේශපාලනික දැක්ම" },
    desc: { en: "Looking beyond the accepted frame is itself political and can move society.", si: "සම්මත රාමුවෙන් ඔබ්බට බැලීමම දේශපාලනික වන අතර, එයට සමාජය පෙළඹවිය හැකිය." },
    objs: ["O3"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Multiple perspectives on war", si: "යුද්ධය පිළිබඳ විවිධ දෘෂ්ටිකෝණ" },
    desc: { en: "War-victory cinema and cinema of war's grief: two perspectives on the same events.", si: "යුද ජය සිනමාව සහ යුද ශෝක සිනමාව — එකම සිදුවීම් පිළිබඳ දෘෂ්ටිකෝණ දෙකක්." },
    objs: ["O3"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Subjectivity of unconventionality", si: "Unconventional බවෙහි ආත්මීයත්වය" },
    desc: { en: "Whether something is unconventional depends on the critic and the viewer.", si: "යමක් unconventional ද යන්න විචාරකයා සහ ප්‍රේක්ෂකයා මත රඳා පවතී." },
    objs: ["O1"], who: ["vimukthi-jayasundara"],
  },
];

const KEY_FINDING = {
  from: 1,
  title: { en: "Unconventionality is subjective", si: "Unconventional බව ආත්මීයයි" },
  text: {
    en: "There is no fixed definition of “unconventional”. The same film may appear unconventional to one critic or viewer and not to another. This links the study to reception and spectatorship theory.",
    si: "Unconventional යන්නට ස්ථාවර නිර්වචනයක් නැත. එකම චිත්‍රපටයක් එක් විචාරකයෙකුට හෝ ප්‍රේක්ෂකයෙකුට unconventional ලෙස පෙනෙන අතර, තවත් කෙනෙකුට එසේ නොපෙනෙන්නට පුළුවන. මෙය අධ්‍යයනය reception සහ spectatorship න්‍යායන් සමඟ සම්බන්ධ කරයි.",
  },
};
