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
  /* Image on the landing page. Swap for any still (a film frame, a set photo…). */
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
  { id: "prasanna-withanage", name: "Prasanna Withanage", group: "industry", role: { en: "Film Director", si: "චිත්‍රපට අධ්‍යක්ෂ" } },
  { id: "prasanna-jayakodi", name: "Prasanna Jayakodi", group: "industry" },
  { id: "majith-s-uyangoda", name: "Majith S. Uyangoda", group: "industry" },
  { id: "md-mahindapaala", name: "M.D. Mahindapaala", group: "industry" },
  { id: "channa-deshapriya", name: "Channa Deshapriya", group: "industry", role: { en: "Cinematographer", si: "කැමරා ශිල්පී" }, photo: "assets/people/channa-deshapriya.png" },

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
  {
    code: "O5",
    key: { en: "Future vision", si: "අනාගත දැක්ම" },
    text: {
      en: "To synthesize each group's vision of the future of Sri Lankan cinema.",
      si: "ශ්‍රී ලාංකීය සිනමාවේ අනාගතය පිළිබඳ එක් එක් කණ්ඩායමේ දැක්ම සංශ්ලේෂණය කිරීම.",
    },
  },
  {
    code: "O6",
    key: { en: "Overall pattern", si: "සමස්ත රටාව" },
    text: {
      en: "To interpret the overall pattern across the three groups.",
      si: "කණ්ඩායම් තුන පුරා දක්නට ලැබෙන සමස්ත රටාව අර්ථකථනය කිරීම.",
    },
    /* answered by comparing groups, not inside a single interview */
    crossGroup: true,
  },
];

/* The dissertation is written in English, so chapter titles stay in English. */
const STRUCTURE = [
  { n: 1, title: "Introduction", items: ["Introduction to the Study", "What is Unconventional Framing?", "Background of the Study", "Aims of the Study", "Objectives of the Study", "Significance of the Study", "Research Outline"] },
  { n: 2, title: "Literature Review", items: ["Literature on Unconventional Approaches", "Literature on Sri Lankan Cinema", "Literature on Framings and Perspectives", "Literature Gap", "Theoretical Framework and Theories"] },
  { n: 3, title: "Methodology", items: ["Research Method", "Research Techniques", "Qualitative Interviews", "Thematic Analysis"] },
  { n: 4, title: "Findings", items: ["Presentation of Research Findings", "Revisiting the Research Objectives", "Discussion of Findings Using Thematic Analysis"] },
  { n: 5, title: "Conclusion", items: [] },
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
            en: "Compared with war-victory cinema, this anti-war, artistic stream presents a different political vision. Films such as <i>Purahanda Kaluwara</i> and <i>Me Mage Sandai</i> differ both aesthetically and in their characteristics.",
            si: "යුද විරෝධී සහ කලාත්මක මෙම ධාරාව යුද ජය සිනමාව සමඟ සසඳන විට, එය වෙනස් දේශපාලනික දැක්මක් ඉදිරිපත් කරයි. <i>පුරහඳ කළුවර</i> සහ <i>මේ මගේ සඳයි</i> වැනි සිනමා පට සෞන්දර්යාත්මකව මෙන්ම ලක්ෂණ අතින් ද වෙනස් වේ.",
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
      O5: {
        partial: true,
        heading: { en: "An evolving, open-ended cinema", si: "පරිණාමය වන, විවෘත සිනමාවක්" },
        said: [],
        interpretation: {
          en: "The future of Sri Lankan cinema was not discussed directly. However, his view that cinema is an evolving medium that keeps searching for new rules points to an open, exploratory vision of its future, one in which filmmakers with their own cinematic language move beyond existing conventions.",
          si: "ශ්‍රී ලාංකීය සිනමාවේ අනාගතය පිළිබඳව සෘජුව සාකච්ඡා නොවිණි. නමුත් සිනමාව නව රීති සොයා යන, පරිණාමය වන මාධ්‍යයක් බවට ඔහු දරන අදහස, එහි අනාගතය පිළිබඳ විවෘත සහ ගවේෂණාත්මක දැක්මක් පෙන්නුම් කරයි — එනම් ස්වකීය සිනමා භාෂාවක් ඇති නිර්මාණකරුවන් පවතින සම්මතයන්ගෙන් ඔබ්බට යන අනාගතයකි.",
        },
        note: {
          en: "Inferred from his wider views; this objective will be explored directly in the remaining interviews.",
          si: "ඔහුගේ පුළුල් අදහස් ඇසුරින් නිගමනය කළකි; මෙම අරමුණ ඉතිරි සම්මුඛ සාකච්ඡාවලදී සෘජුව විමසනු ලැබේ.",
        },
      },
      O6: {
        heading: { en: "His position in the overall pattern", si: "සමස්ත රටාව තුළ ඔහුගේ ස්ථානය" },
        said: [
          {
            en: "Defines unconventional framing by the idea it generates, not by its visual form.",
            si: "Unconventional framing නිර්වචනය කරන්නේ එහි දෘශ්‍ය ස්වරූපයෙන් නොව, එය ජනනය කරන අදහසෙනි.",
          },
          {
            en: "Sees cinematic rules as historical and changeable, with freedom tied to a personal cinematic language.",
            si: "සිනමා රීති ඓතිහාසික සහ වෙනස් විය හැකි ඒවා ලෙස දකින අතර, නිදහස පුද්ගලික සිනමා භාෂාවක් හා බැඳී ඇති බව දකී.",
          },
          {
            en: "Treats seeing beyond accepted frames as inherently political, illustrated through post-war cinema.",
            si: "සම්මත රාමුවලින් ඔබ්බට දැකීම ස්වභාවයෙන්ම දේශපාලනික ලෙස සලකන අතර, එය පශ්චාත්-යුද සිනමාව ඇසුරින් පැහැදිලි කරයි.",
          },
          {
            en: "Locates unconventionality in the eye of the critic and the viewer.",
            si: "Unconventional බව රඳා පවතින්නේ විචාරකයාගේ සහ ප්‍රේක්ෂකයාගේ දැක්ම මත බව පවසයි.",
          },
        ],
        interpretation: {
          en: "As the first industry-professional voice, his view sets a reference point: framing as an ideational, political and subjective practice. The cross-group pattern will emerge as the academics and young filmmakers are compared against it.",
          si: "පළමු කර්මාන්ත වෘත්තිකයාගේ හඬ ලෙස, ඔහුගේ දැක්ම සංසන්දනය සඳහා මූලික ලක්ෂ්‍යයක් සපයයි: රාමුකරණය අදහස්මය, දේශපාලනික සහ ආත්මීය ක්‍රියාවලියක් ලෙස. ශාස්ත්‍රඥයන් සහ නවක සිනමාකරුවන් මේ සමඟ සංසන්දනය කරන විට කණ්ඩායම් හරහා රටාව මතු වේ.",
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
  "channa-deshapriya": {
    number: 2,
    tags: [
      { en: "Inclusion & exclusion", si: "ඇතුළත් කිරීම සහ බැහැර කිරීම" },
      { en: "Frame and context", si: "රාමුව සහ සන්දර්භය" },
      { en: "Relative unconventionality", si: "සාපේක්ෂ බව" },
      { en: "Static framing", si: "ස්ථිතික රාමුකරණය" },
      { en: "Commercial vs authored work", si: "වාණිජ සහ ස්වකීය නිර්මාණ" },
      { en: "Renewal", si: "නොනවතින අලුත් වීම" },
    ],
    objectives: {
      O1: {
        heading: { en: "A frame is a balance of what to include and exclude", si: "රාමුවක් යනු ඇතුළත් කරන සහ බැහැර කරන දේ අතර සමබරතාවකි" },
        said: [
          {
            en: "A frame is created by striking a balance between what is included and what is left out — the character, the foreground and the background. That balance changes with the context of the story being told.",
            si: "රාමුවක් නිර්මාණය වන්නේ චරිතය, පෙරබිම සහ පසුබිම ඇතුළුව, රාමුවට ඇතුළත් කරන දේ සහ බැහැර කරන දේ අතර සමබරතාවක් ගොඩනැගීමෙනි. එම සමබරතාව කියන්නට යන කතාවේ සන්දර්භය අනුව වෙනස් වේ.",
          },
          {
            en: "The frame affects the context, and the context in turn affects the frame — the two are bound together.",
            si: "රාමුව සන්දර්භයට බලපාන අතර, සන්දර්භය ද රාමුවට බලපායි — මේ දෙක එකිනෙක හා බැඳී ඇත.",
          },
          {
            en: "Even once a frame has been decided, the same frame may not work in two different contexts or two different films.",
            si: "රාමුවක් තීරණය කළ පසුවත්, එකම රාමුව වෙනස් සන්දර්භ දෙකක හෝ චිත්‍රපට දෙකක එකසේ නොගැළපෙන්නට පුළුවන.",
          },
          {
            en: "Whether a frame is unconventional may lie in the viewer's mind: it is the viewer who feels that “this is not the convention”.",
            si: "රාමුවක් සම්ප්‍රදායික නොවන බව පවතින්නේ බලන කෙනාගේ මනස තුළ විය හැකිය: “මෙය සම්ප්‍රදායක් නොවේ” යැයි දැනෙන්නේ ප්‍රේක්ෂකයාටයි.",
          },
          {
            en: "Frames can shift with the spectator's point of view. When the expected object is missing from the place where it is usually found, the presentation becomes unconventional.",
            si: "ප්‍රේක්ෂකයාගේ දෘෂ්ටිකෝණය (POV) අනුව රාමු වෙනස් විය හැකිය. සාමාන්‍යයෙන් තිබිය යුතු තැන අදාළ වස්තුව නොතිබුණොත්, එය සම්ප්‍රදායික නොවන ඉදිරිපත් කිරීමක් වේ.",
          },
          {
            en: "As an example he cites <i>Me Mage Sandai</i>: not a single frame contains camera movement — all 507 shots are static. Revisiting the film, he learned several new things about framing from it.",
            si: "උදාහරණයක් ලෙස ඔහු <i>මේ මගේ සඳයි</i> චිත්‍රපටය දක්වයි: එහි කිසිදු රූප රාමුවක කැමරා චලනයක් නැත — රූප රාමු 507 ම ස්ථිතිකය. එය නැවත නරඹා රාමු පිළිබඳ තවත් දේවල් කිහිපයක් ඉගෙන ගත් බව ඔහු පවසයි.",
          },
        ],
        interpretation: {
          en: "For him, framing is a craft of selection and balance that only makes sense in context. Unconventionality is not a property of the frame alone: it arises when a frame breaks what the viewer expects to see.",
          si: "ඔහුට අනුව රාමුකරණය යනු සන්දර්භය තුළ පමණක් අර්ථවත් වන, තේරීමේ සහ සමබරතාවේ ශිල්පයකි. Unconventional බව රාමුවේ පමණක් ඇති ගුණයක් නොවේ: එය මතු වන්නේ ප්‍රේක්ෂකයා දැකීමට අපේක්ෂා කරන දේ රාමුව බිඳ දමන විටය.",
        },
      },
      O2: {
        heading: { en: "Today's unconventional becomes tomorrow's convention", si: "අද සම්ප්‍රදායික නොවන දේ හෙට සම්මතයක් වේ" },
        said: [
          {
            en: "This is a relative question. After a while, Sri Lankan short filmmakers tried the same approach; once a new method is introduced, the next one has to be found. What is unconventional in one place can be a convention in another.",
            si: "මෙය සාපේක්ෂ ප්‍රශ්නයකි. ටික කලකට පසු ලංකාවේ කෙටි චිත්‍රපට කරන අය ද එවැනි ක්‍රමය අත්හදා බැලූහ; නව ක්‍රමයක් හඳුන්වා දුන් පසු ඊළඟ එක සොයාගත යුතුය. එක් තැනක සම්ප්‍රදායික නොවන රාමුවක් තවත් තැනක සම්ප්‍රදායක් විය හැකිය.",
          },
          {
            en: "Audiences broadly do not take to unconventional work, but that is no reason for artists to stop being creative; cinema's newness has to be carried forward.",
            si: "ප්‍රේක්ෂකයෝ පුළුල් වශයෙන් සම්ප්‍රදායික නොවන නිර්මාණවලට කැමති නොවෙති. නමුත් ඒ නිසා කලාකරුවා මෙම නිර්මාණශීලීත්වය නතර කිරීම හොඳ නැත; සිනමාවේ ඇති නවමු බව ඉදිරියට ගෙන යා යුතුය.",
          },
          {
            en: "Somehow, what is made as unconventional is later accepted as convention.",
            si: "කෙසේ හෝ, සම්ප්‍රදායික නොවන ලෙස කරන දේ පසු කාලයක සම්මත දේ ලෙස පිළිගැනේ.",
          },
          {
            en: "In advertising, which he also does a great deal of, the work must follow what people like and their psychology — when selling a bar of soap, the viewer may prefer the familiar. In his films, however, they worked the way they wanted, and the audience adapted to it.",
            si: "ඔහු වෙළඳ දැන්වීම් ද බොහෝ සේ කරයි. එහිදී මිනිසුන් කැමති දේ සහ ඔවුන්ගේ මනෝවිද්‍යාව අනුව වැඩ කළ යුතුය — සබන් කැටයක් විකුණන විට ප්‍රේක්ෂකයා හුරුපුරුදු දේ දැකීමට කැමති විය හැකිය. නමුත් තම චිත්‍රපට නිර්මාණවලදී ඔවුන් කැමති ආකාරයටම වැඩ කළ අතර, ප්‍රේක්ෂකයා ඊට හැඩගැසුණි.",
          },
        ],
        interpretation: {
          en: "He sees rules and freedom as a cycle: an unconventional choice is imitated, absorbed and eventually becomes the norm, so freedom means continually moving on. Freedom is greatest in authored film work and narrowest in commissioned advertising.",
          si: "ඔහු රීති සහ නිදහස චක්‍රයක් ලෙස දකී: සම්ප්‍රදායික නොවන තේරීමක් අනුකරණය වී, අවශෝෂණය වී, අවසානයේ සම්මතය බවට පත් වේ. එබැවින් නිදහස යනු නොනවත්වා ඉදිරියට යාමයි. නිදහස වැඩිම වන්නේ ස්වකීය චිත්‍රපට නිර්මාණවල වන අතර, අඩුම වන්නේ ඇණවුම් කළ වෙළඳ දැන්වීම්වලය.",
        },
      },
      O3: {
        partial: true,
        heading: { en: "Commercial pressure as the main tension", si: "ප්‍රධාන ආතතිය ලෙස වාණිජ පීඩනය" },
        said: [
          {
            en: "Asked how political and cultural conditions sit with unconventional work, he points to commercial cinema, where such unconventional elements can come into conflict.",
            si: "දේශපාලනික සහ සංස්කෘතික තත්ත්වයන් සම්ප්‍රදායික නොවන නිර්මාණ සමඟ ගැළපෙන්නේ කෙසේදැයි විමසූ විට, ඔහු වාණිජ සිනමාව දෙසට යොමු වෙයි — එහිදී එවැනි සම්ප්‍රදායික නොවන දේ ගැටුමට ලක් විය හැකිය.",
          },
        ],
        interpretation: {
          en: "He frames the socio-economic dimension mainly through the market rather than through politics. The wider political and cultural influence on framing was not developed further in this interview.",
          si: "ඔහු සමාජ-ආර්ථික මානය දේශපාලනය හරහා නොව ප්‍රධාන වශයෙන් වෙළඳපොළ හරහා දකී. රාමුකරණයට දේශපාලනික සහ සංස්කෘතික තත්ත්වයන්ගේ පුළුල් බලපෑම මෙම සම්මුඛ සාකච්ඡාවේදී වැඩිදුර සාකච්ඡා නොවිණි.",
        },
      },
      O5: {
        heading: { en: "Keep renewing — there is room even for small audiences", si: "නොනවත්වා අලුත් වීම — කුඩා ප්‍රේක්ෂකාගාරයකට වුවද ඉඩ ඇත" },
        said: [
          {
            en: "Once a new method has been introduced, the next one must be found — cinema's newness has to be carried forward.",
            si: "නව ක්‍රමයක් හඳුන්වා දුන් පසු ඊළඟ එක සොයාගත යුතුය — සිනමාවේ නවමු බව ඉදිරියට ගෙන යා යුතුය.",
          },
          {
            en: "Today's emerging cinematographers, working on small commercials, have to make a great effort to create something of their own that is recognised as unconventional.",
            si: "අද බිහිවන කැමරා ශිල්පීන්ට, කුඩා වෙළඳ දැන්වීම්වල වැඩ කරමින්, සම්ප්‍රදායික නොවන යැයි පිළිගැනෙන ස්වකීය දෙයක් කිරීමට විශාල උත්සාහයක් ගැනීමට සිදු වේ.",
          },
          {
            en: "Even if the audience for such work is not large, there can still be a place for it in the world — and alongside this, filmmakers must work out how to take their work forward.",
            si: "එවැනි නිර්මාණවලට ප්‍රේක්ෂක ජන සමූහය විශාල නොවුණත්, ලෝකයේ ඊට ඉඩක් තිබිය හැකිය. ඒ සමඟම, තම වැඩ ඉදිරියට ගෙන යන්නේ කෙසේද යන්න ද සොයාගත යුතුය.",
          },
        ],
        interpretation: {
          en: "His vision of the future is generational: progress depends on new cinematographers continually renewing the frame, even if that means a smaller, possibly international, audience.",
          si: "ඔහුගේ අනාගත දැක්ම පරම්පරාගතය: ප්‍රගතිය රඳා පවතින්නේ කුඩා — සමහර විට ජාත්‍යන්තර — ප්‍රේක්ෂකාගාරයක් වුවද, නව කැමරා ශිල්පීන් නොනවත්වා රාමුව අලුත් කිරීම මතය.",
        },
      },
      O6: {
        heading: { en: "His position in the overall pattern", si: "සමස්ත රටාව තුළ ඔහුගේ ස්ථානය" },
        said: [
          {
            en: "Agrees with Vimukthi Jayasundara that unconventionality is decided by the viewer, and adds that it is temporary: it eventually becomes convention.",
            si: "Unconventional බව තීරණය කරන්නේ ප්‍රේක්ෂකයා බවට විමුක්ති ජයසුන්දර සමඟ එකඟ වන අතර, එය තාවකාලික බවත් — අවසානයේ සම්මතයක් බවට පත් වන බවත් — එකතු කරයි.",
          },
          {
            en: "Approaches framing as a practitioner's craft — inclusion, exclusion and balance — where Vimukthi approaches it through ideas and politics.",
            si: "විමුක්ති රාමුකරණය අදහස් සහ දේශපාලනය හරහා දකින අතර, චන්න එය ප්‍රායෝගික ශිල්පයක් ලෙස — ඇතුළත් කිරීම, බැහැර කිරීම සහ සමබරතාව ලෙස — දකී.",
          },
          {
            en: "Both cite <i>Me Mage Sandai</i>: Vimukthi for its political vision of the war, Channa for its entirely static framing.",
            si: "දෙදෙනාම <i>මේ මගේ සඳයි</i> සඳහන් කරයි: විමුක්ති එහි යුද්ධය පිළිබඳ දේශපාලනික දැක්ම නිසා, චන්න එහි සම්පූර්ණයෙන් ස්ථිතික රාමුකරණය නිසා.",
          },
          {
            en: "Both see the commercial setting as the place where unconventional framing is most constrained.",
            si: "සම්ප්‍රදායික නොවන රාමුකරණය වඩාත්ම සීමා වන්නේ වාණිජ සන්දර්භය තුළ බව දෙදෙනාම දකී.",
          },
        ],
        interpretation: {
          en: "Within the industry group, a shared view is forming: unconventionality is relative, viewer-dependent and historically temporary, with commerce as its main constraint. The two differ in emphasis — ideas and politics for the director, craft and context for the cinematographer.",
          si: "කර්මාන්ත කණ්ඩායම තුළ පොදු දැක්මක් ගොඩනැගෙමින් පවතී: unconventional බව සාපේක්ෂ, ප්‍රේක්ෂකයා මත රඳා පවතින සහ ඓතිහාසිකව තාවකාලික වන අතර, එහි ප්‍රධාන සීමාව වාණිජ පීඩනයයි. වෙනස ඇත්තේ අවධාරණයෙහිය — අධ්‍යක්ෂවරයා අදහස් සහ දේශපාලනය අවධාරණය කරන අතර, කැමරා ශිල්පියා ශිල්පය සහ සන්දර්භය අවධාරණය කරයි.",
        },
      },
    },
    closing: {
      heading: { en: "Unconventionality is temporary", si: "Unconventional බව තාවකාලිකයි" },
      text: {
        en: "What is made today as unconventional is, somehow, accepted later as convention — which is why the search for the next new approach can never stop.",
        si: "අද සම්ප්‍රදායික නොවන ලෙස කරන දේ, කෙසේ හෝ පසු කාලයක සම්මතයක් ලෙස පිළිගැනේ — ඊළඟ නව ප්‍රවේශය සෙවීම කිසිදා නතර කළ නොහැක්කේ එබැවිනි.",
      },
    },
    codes: [
      { en: "Frame = balance of include / exclude", si: "රාමුව = ඇතුළත් / බැහැර කිරීමේ සමබරතාව" },
      { en: "Frame shapes context, context shapes frame", si: "රාමුව සන්දර්භයට, සන්දර්භය රාමුවට බලපායි" },
      { en: "Same frame, different context", si: "එකම රාමුව, වෙනස් සන්දර්භ" },
      { en: "Unconventional in the viewer's mind", si: "ප්‍රේක්ෂකයාගේ මනස තුළ unconventional බව" },
      { en: "Breaking point-of-view expectations", si: "දෘෂ්ටිකෝණ අපේක්ෂා බිඳීම" },
      { en: "All-static film (Me Mage Sandai, 507 shots)", si: "සම්පූර්ණයෙන් ස්ථිතික චිත්‍රපටය (මේ මගේ සඳයි, රූප රාමු 507)" },
      { en: "Unconventionality is relative", si: "Unconventional බව සාපේක්ෂයි" },
      { en: "Innovations get imitated", si: "නවෝත්පාදන අනුකරණය වීම" },
      { en: "Unconventional becomes convention", si: "Unconventional දේ පසුව සම්මත වීම" },
      { en: "Creativity despite small audiences", si: "කුඩා ප්‍රේක්ෂකාගාරය මැද නිර්මාණශීලීත්වය" },
      { en: "Commercial clash", si: "වාණිජ ගැටුම" },
      { en: "Advertising follows audience psychology", si: "වෙළඳ දැන්වීම් ප්‍රේක්ෂක මනෝවිද්‍යාව අනුගමනය කරයි" },
      { en: "Audiences adapt to the work", si: "ප්‍රේක්ෂකයා නිර්මාණයට හැඩගැසීම" },
      { en: "Emerging cinematographers' effort", si: "නවක කැමරා ශිල්පීන්ගේ උත්සාහය" },
    ],
  },
  "prasanna-withanage": {
    number: 3,
    tags: [
      { en: "Director's worldview", si: "අධ්‍යක්ෂවරයාගේ ලෝක දෘෂ්ටිය" },
      { en: "Revealing the inner world", si: "අභ්‍යන්තරය හෙළිදරව් කිරීම" },
      { en: "Rules, not laws", si: "නීති නොව රීති" },
      { en: "Historical lineage", si: "ඓතිහාසික පරම්පරාව" },
      { en: "Borrowed conventions", si: "ණයට ගත් සම්මත" },
      { en: "Market and state", si: "වෙළඳපොළ සහ රාජ්‍යය" },
      { en: "Authenticity", si: "ස්වකීයත්වය" },
    ],
    objectives: {
      O1: {
        heading: { en: "The frame decides how the audience sees the film", si: "ප්‍රේක්ෂකයා චිත්‍රපටය දකින ආකාරය තීරණය කරන්නේ රාමුවයි" },
        said: [
          {
            en: "How an audience sees a film is decided by the frame the director creates. That frame is shaped by the director's worldview, or by the angle from which he looks at a character.",
            si: "ප්‍රේක්ෂකයා චිත්‍රපටයක් දකින ආකාරය තීරණය වන්නේ අධ්‍යක්ෂවරයා නිර්මාණය කරන රාමුව අනුවයි. එම රාමුව හැඩගැසෙන්නේ අධ්‍යක්ෂවරයාගේ ලෝක දෘෂ්ටියෙන්, නැතහොත් ඔහු චරිතය දෙස බලන කෝණයෙනි.",
          },
          {
            en: "A frame becomes unconventional when it shows us something in a way not seen here before. What art has always done is to show, through its uniqueness, something that has not been shown before — and “unconventional” simply means what is not traditional.",
            si: "රාමුවක් unconventional වන්නේ මෙහි මීට පෙර නොදුටු ආකාරයකින් යමක් අපට පෙන්වන විටය. කලාව සැමවිටම කරන්නේ අපූර්වත්වය පදනම් කරගෙන, පෙර නොවූ විරූ දෙයක් පෙන්වීමයි — “unconventional” යනු සාම්ප්‍රදායික නොවන දෙයයි.",
          },
          {
            en: "Leaving the traditional path for the unconventional can put a filmmaker in difficulty. That is why he says whether a frame is conventional or unconventional comes down to the choice of the frame itself.",
            si: "සාම්ප්‍රදායික මාවත අත්හැර unconventional ලෙස යාම සිනමාකරුවා අමාරුවේ වැටීමට හේතු විය හැකිය. එබැවින්, රාමුවක් conventional ද unconventional ද යන්න තීරණය වන්නේ රාමුව තෝරාගැනීම පදනම් කරගෙන බව ඔහු පවසයි.",
          },
          {
            en: "Films are normally shot in master shots and cuts; unconventional frames can be used instead to reveal what is inside a character.",
            si: "සාමාන්‍යයෙන් චිත්‍රපටයක් රූගත කරන්නේ master shots සහ cuts ලෙසය; ඒ වෙනුවට, චරිතයක අභ්‍යන්තරය හෙළිදරව් කිරීමට unconventional රාමු භාවිත කළ හැකිය.",
          },
        ],
        interpretation: {
          en: "For him the frame is the director's way of seeing, handed to the audience. Unconventionality is defined historically — as what has not been seen before — and its purpose is expressive: to open up the inner life of a character.",
          si: "ඔහුට අනුව රාමුව යනු අධ්‍යක්ෂවරයාගේ දැකීමේ ආකාරය ප්‍රේක්ෂකයාට පිරිනැමීමයි. Unconventional බව ඔහු ඓතිහාසිකව නිර්වචනය කරයි — එනම් මීට පෙර නොදුටු දේ ලෙස — එහි අරමුණ ප්‍රකාශනාත්මකය: චරිතයක අභ්‍යන්තර ලෝකය විවර කිරීමයි.",
        },
      },
      O2: {
        heading: { en: "Cinema has rules, not laws — and rules can be broken", si: "සිනමාවේ ඇත්තේ නීති නොව රීති ය — රීති බිඳිය හැකිය" },
        said: [
          {
            en: "There is a difference between rules and laws. A rule can be broken; breaking a law brings trouble. Cinema has rules, and it is because directors break them that new creations come about.",
            si: "රීති සහ නීති අතර වෙනසක් ඇත. රීතියක් කඩා බිඳ දැමිය හැකිය; නීතියක් කැඩුවොත් ගැටලුවක් වේ. සිනමාවේ ඇත්තේ රීති ය; අධ්‍යක්ෂවරුන් එම රීති කඩන නිසා නව නිර්මාණ බිහි වේ.",
          },
          {
            en: "In a conventional film you would normally keep headroom above a character, but a filmmaker can break that and be creative.",
            si: "සාම්ප්‍රදායික ලෙස චිත්‍රපටයක් කරන විට චරිතයට ඉහළින් headroom එකක් තැබිය හැකි නමුත්, නිර්මාණකරුවෙකුට එය බිඳ දමා නිර්මාණශීලී විය හැකිය.",
          },
          {
            en: "World cinema shows the same: after the Second World War, neorealist cinema placed the camera differently from the norm — <i>Rome, Open City</i> showed that this was not an ordinary film but reality itself.",
            si: "ලෝක සිනමාවේ ද මෙය දැකිය හැකිය: දෙවන ලෝක යුද්ධයෙන් පසු නව යථාර්ථවාදී සිනමාව බිහිවෙද්දී කැමරාව ස්ථානගත කළ ආකාරය සාමාන්‍ය ආකාරයට වඩා වෙනස් විය — <i>Rome, Open City</i> චිත්‍රපටය මෙය සාමාන්‍ය චිත්‍රපටයක් නොව සැබෑවක් බව පෙන්වූයේය.",
          },
        ],
        interpretation: {
          en: "His distinction between rules and laws frames creative freedom as legitimate rule-breaking: conventions are working agreements, not obligations, and new cinematic forms are born precisely where they are broken.",
          si: "රීති සහ නීති අතර ඔහු දක්වන වෙනස, නිර්මාණාත්මක නිදහස නීත්‍යනුකූල රීති බිඳීමක් ලෙස පෙන්වයි: සම්මතයන් යනු බැඳීම් නොව, ක්‍රියාකාරී එකඟතා ය; නව සිනමා ආකෘති බිහි වන්නේ ඒවා බිඳෙන තැනදීමය.",
        },
      },
      O3: {
        heading: { en: "Framing is shaped by history, the market and the state", si: "රාමුකරණය හැඩගැසෙන්නේ ඉතිහාසය, වෙළඳපොළ සහ රාජ්‍යය අනුවයි" },
        said: [
          {
            en: "Sri Lankan framing has long borrowed its language: from 1947 it followed the language of Tamil cinema, in the 1980s that of Hindi cinema, and Indian cinema's influence remains today. Directors and cinematographers shape their frames to the tastes that dominate at any given moment.",
            si: "ශ්‍රී ලාංකීය රාමුකරණය දිගු කලක් තම භාෂාව ණයට ගෙන ඇත: 1947 සිට රාමු සැකසීමේදී දෙමළ සිනමාවේ භාෂාව ද, 1980 දශකයේ හින්දි සිනමාවේ භාෂාව ද අනුගමනය කළ අතර, ඉන්දීය සිනමාවේ බලපෑම අදටත් පවතී. අධ්‍යක්ෂවරුන් සහ කැමරා ශිල්පීන් එක් එක් මොහොතේ ආධිපත්‍යය දරන රුචිකත්වයන්ට ගැළපෙන සේ රාමු හැඩගස්වති.",
          },
          {
            en: "Against this, national cinema renewed the frame. In 1956 Lester James Peries took the camera outdoors, bringing a natural, realistic influence at a time when the question was how to represent national identity rather than repeat the Tamil-cinema idiom; Ediriweera Sarachchandra's theatre ran in parallel.",
            si: "මෙයට ප්‍රතිවිරුද්ධව, ජාතික සිනමාව රාමුව අලුත් කළේය. 1956 දී ලෙස්ටර් ජේම්ස් පීරිස් කැමරාව එළියට ගෙන ගියේය — 50 දශකයේ ජාතික අනන්‍යතාව නිරූපණය කළ යුත්තේ කෙසේද යන ප්‍රශ්නය මතු වූ විට, දෙමළ සිනමා භාෂාව වෙනුවට ස්වාභාවික, යථාර්ථවාදී බලපෑමක් ඔහු පෙන්වීය; එදිරිවීර සරච්චන්ද්‍රයන්ගේ නාට්‍ය ද ඊට සමාන්තරව පැවතුණි.",
          },
          {
            en: "In the 1970s, <i>Ahas Gauwa</i> brought urban youth onto the screen in a way entirely different from commercial cinema. Donald Karunaratne and Dharmasena Pathiraja used the handheld camera to represent youth; it had been used before (he mentions Nihal Singha), but in framing young people's restlessness and their search for freedom, they showed Colombo's urban youth in a way not seen before.",
            si: "1970 දශකයේ <i>අහස් ගව්ව</i> චිත්‍රපටය, වාණිජ සිනමාව තරුණ ජීවිත නිරූපණය කළ ආකාරයට වඩා සම්පූර්ණයෙන්ම වෙනස් ලෙස නාගරික තරුණ ජීවිතය තිරයට ගෙනාවේය. ඩොනල්ඩ් කරුණාරත්න සහ ධර්මසේන පතිරාජ තරුණයා නිරූපණය කිරීමට අතින් ගත් (handheld) කැමරාව යොදා ගත්හ. එය මීට පෙර (නිහාල් සිංහ මහතා විසින්) භාවිත කර තිබුණද, තරුණයාගේ නොසන්සුන්කම සහ නිදහස සොයා යාම රූප රාමුවලට නැගීමේදී, කොළඹ නාගරික තරුණ ජීවිතය මීට පෙර නොදුටු ආකාරයකින් ඔවුහු පෙන්වූහ.",
          },
          {
            en: "In his film <i>Purahanda Kaluwara</i>, a home guard carries a monk on a bicycle through the middle of abandoned paddy fields. That single frame shows the condition of the village — not drought, but poverty. As the camera tilts down, a gun barrel comes into view, showing the village's insecurity: everything is shown within one frame.",
            si: "ඔහුගේ <i>පුරහඳ කළුවර</i> චිත්‍රපටයේ ග්‍රාම ආරක්ෂකයෙකු භික්ෂුවක් බයිසිකලයේ නංවාගෙන, වගා නොකර අතහැර දැමූ කුඹුරු යායක් මැදින් එන රූප රාමුවක් ඇත. එම එක් රූප රාමුවෙන්ම ගමේ තත්ත්වය පෙන්වයි — එය නියඟයක් නොව, දරිද්‍රතාවයි. කැමරාව පහත් කරන විට තුවක්කු බටයක් පෙනෙන අතර, එයින් ගමේ අනාරක්ෂිත බව පෙන්වයි: ඒ සියල්ල එක් රාමුවක් තුළම පෙන්වයි.",
          },
          {
            en: "In Vimukthi Jayasundara's <i>Sulanga Enu Pinisa</i>, rather than building the story of the moment, the frame conveys the characters' inner state. A character conceived this way is communicated through the frame itself rather than by having the characters narrate their experiences.",
            si: "විමුක්ති ජයසුන්දරගේ <i>සුළඟ එනු පිණිස</i> චිත්‍රපටයේ, එම මොහොතේ කතාව ගොඩනැගීමට වඩා, චරිතවල අභ්‍යන්තර තත්ත්වය සහ හැඟීම් රාමුවෙන් දැනවේ. මෙවැනි චරිතයක් සන්නිවේදනය කරන්නේ, චරිත තම අත්දැකීම් පවසනවාට වඩා, රූප රාමුව හරහාමය.",
          },
          {
            en: "Working within a conventional framework places a film in the market far more easily, because audiences are used to it — but that is not the director's aspiration.",
            si: "සාම්ප්‍රදායික රාමුවක් තුළ වැඩ කළොත් චිත්‍රපටය වෙළඳපොළේ ස්ථානගත වීම බොහෝ සෙයින් පහසුය, මන්ද ප්‍රේක්ෂකයා ඊට හුරු වී ඇත — නමුත් එය අධ්‍යක්ෂවරයාගේ අභිලාෂය නොවේ.",
          },
          {
            en: "Between roughly 2005 and 2015 the state itself extended patronage, and state narratives followed. A frame can be used in the service of an ideology.",
            si: "2005 – 2015 පමණ කාලයේ පැවති රාජ්‍යය විසින්ම අනුග්‍රහය දැක්වූ අතර, එවිට රාජ්‍ය කතා බිහි විය. මතවාදයක් සඳහා රාමුවක් භාවිත විය හැකිය.",
          },
          {
            en: "On the other hand, there are also socio-economic reasons behind unconventional frames.",
            si: "අනෙක් අතට, unconventional රාමු පිටුපස සමාජ-ආර්ථික හේතු ද පවතී.",
          },
        ],
        interpretation: {
          en: "He gives the most historical account so far. Sri Lankan convention is itself borrowed from South Indian and Hindi cinema, and each break with it — from 1956 to the 1970s to the war-era films — was tied to its social moment. Framing is pulled between the market, which rewards the familiar, and the state, which can turn the frame into a vehicle for ideology.",
          si: "මෙතෙක් ලැබුණු වඩාත්ම ඓතිහාසික විග්‍රහය ඔහු ලබා දෙයි. ශ්‍රී ලාංකීය සම්මතය ම දකුණු ඉන්දීය සහ හින්දි සිනමාවෙන් ණයට ගත් එකක් වන අතර, එයින් සිදු වූ සෑම බිඳීමක්ම — 1956 සිට 1970 දශකය දක්වාත්, යුද සමයේ චිත්‍රපට දක්වාත් — එහි සමාජ මොහොත හා බැඳී පැවතුණි. රාමුකරණය, හුරුපුරුදු දේට ත්‍යාග දෙන වෙළඳපොළ සහ රාමුව මතවාදයක වාහකයක් කළ හැකි රාජ්‍යය අතර ඇදී යයි.",
        },
      },
      O4: {
        partial: true,
        heading: { en: "Success is shared by director and cinematographer", si: "සාර්ථකත්වය අධ්‍යක්ෂ සහ කැමරා අධ්‍යක්ෂ දෙදෙනාටම හිමිය" },
        said: [
          {
            en: "Asked what he expects from a cinematographer, he says a film's success comes from both the director and the cinematographer.",
            si: "කැමරා අධ්‍යක්ෂවරයෙකුගෙන් ඔහු බලාපොරොත්තු වන්නේ කුමක්දැයි විමසූ විට, චිත්‍රපටයක සාර්ථකත්වයට අධ්‍යක්ෂවරයා සහ කැමරා අධ්‍යක්ෂවරයා යන දෙදෙනාම හේතු වන බව ඔහු පවසයි.",
          },
        ],
        interpretation: {
          en: "He sees framing as a shared responsibility rather than the cinematographer's alone, although the interview does not go into how decisions are divided between the two.",
          si: "ඔහු රාමුකරණය කැමරා ශිල්පියාගේ පමණක් නොව හවුල් වගකීමක් ලෙස දකී. නමුත් දෙදෙනා අතර තීරණ බෙදී යන ආකාරය මෙම සම්මුඛ සාකච්ඡාවේදී විස්තර නොවිණි.",
        },
      },
      O6: {
        heading: { en: "His position in the overall pattern", si: "සමස්ත රටාව තුළ ඔහුගේ ස්ථානය" },
        said: [
          {
            en: "Shares Vimukthi Jayasundara's political reading of the frame, and adds the role of the state: patronage between 2005 and 2015 produced state narratives.",
            si: "රාමුව පිළිබඳ විමුක්ති ජයසුන්දරගේ දේශපාලනික කියවීම බෙදා ගන්නා අතර, රාජ්‍යයේ භූමිකාව එකතු කරයි: 2005 – 2015 කාලයේ අනුග්‍රහය රාජ්‍ය කතා බිහි කළේය.",
          },
          {
            en: "Agrees with Channa Deshapriya that the market favours the familiar, because audiences are used to conventional framing.",
            si: "ප්‍රේක්ෂකයා සාම්ප්‍රදායික රාමුකරණයට හුරු වී ඇති නිසා, වෙළඳපොළ හුරුපුරුදු දේට නැඹුරු වන බවට චන්න දේශප්‍රිය සමඟ එකඟ වේ.",
          },
          {
            en: "Both he and Vimukthi cite <i>Purahanda Kaluwara</i>; he in turn cites Vimukthi's <i>Sulanga Enu Pinisa</i> as an example of conveying character through the frame.",
            si: "ඔහු සහ විමුක්ති දෙදෙනාම <i>පුරහඳ කළුවර</i> සඳහන් කරයි; ඔහු ද රාමුව හරහා චරිතය සන්නිවේදනය කිරීමේ උදාහරණයක් ලෙස විමුක්තිගේ <i>සුළඟ එනු පිණිස</i> දක්වයි.",
          },
          {
            en: "Adds what the others did not: a historical lineage of Sri Lankan framing, the distinction between rules and laws, and the first remarks on the director–cinematographer relationship.",
            si: "අනෙක් අය සාකච්ඡා නොකළ දේ එකතු කරයි: ශ්‍රී ලාංකීය රාමුකරණයේ ඓතිහාසික පරම්පරාව, රීති සහ නීති අතර වෙනස, සහ අධ්‍යක්ෂ–කැමරා අධ්‍යක්ෂ සම්බන්ධතාව පිළිබඳ පළමු අදහස්.",
          },
        ],
        interpretation: {
          en: "With three industry voices, the group's view is clearer: unconventionality is relative — to the viewer, to time and to what came before — and is held back by the market. Prasanna Withanage widens this to history and power: the frame is shaped not only by the audience but also by the state.",
          si: "කර්මාන්ත හඬ තුනක් සමඟ කණ්ඩායමේ දැක්ම වඩාත් පැහැදිලි වේ: unconventional බව සාපේක්ෂයි — ප්‍රේක්ෂකයාට, කාලයට සහ ඊට පෙර පැවති දේට — එය වෙළඳපොළ විසින් සීමා කෙරේ. ප්‍රසන්න විතානගේ මෙය ඉතිහාසය සහ බලය දක්වා පුළුල් කරයි: රාමුව හැඩගැසෙන්නේ ප්‍රේක්ෂකයා අනුව පමණක් නොව, රාජ්‍යය අනුව ද වේ.",
        },
      },
    },
    closing: {
      heading: { en: "Showing what has not been seen before", si: "පෙර නොවූ විරූ දේ පෙන්වීම" },
      text: {
        en: "Anyone can be unconventional for the sake of it; what counts is whether it comes from the director's own vision. It is not about adopting someone else's style.",
        si: "ඕනෑම කෙනෙකුට බොරුවට unconventional විය හැකිය; වැදගත් වන්නේ එය අධ්‍යක්ෂවරයාගේ ස්වකීය දැක්මෙන් පැන නගින්නේද යන්නයි. අවශ්‍ය වන්නේ වෙනත් කෙනෙකුගේ ශෛලියකට හැඩගැසීම නොවේ.",
      },
    },
    codes: [
      { en: "Frame = director's worldview", si: "රාමුව = අධ්‍යක්ෂවරයාගේ ලෝක දෘෂ්ටිය" },
      { en: "Unconventional = not seen before", si: "Unconventional = පෙර නොදුටු දේ" },
      { en: "Risk of the unconventional path", si: "Unconventional මාවතේ අවදානම" },
      { en: "Frames that reveal a character's interior", si: "චරිතයේ අභ්‍යන්තරය හෙළි කරන රාමු" },
      { en: "Rules can be broken, laws cannot", si: "රීති බිඳිය හැක, නීති නොහැක" },
      { en: "Breaking headroom", si: "Headroom බිඳීම" },
      { en: "Neorealism (Rome, Open City)", si: "නව යථාර්ථවාදය (Rome, Open City)" },
      { en: "Convention borrowed from Tamil / Hindi cinema", si: "දෙමළ / හින්දි සිනමාවෙන් ණයට ගත් සම්මතය" },
      { en: "1956: camera taken outdoors", si: "1956: කැමරාව එළියට ගෙන යාම" },
      { en: "1970s handheld youth cinema", si: "1970 දශකයේ handheld තරුණ සිනමාව" },
      { en: "One frame shows a whole village (Purahanda Kaluwara)", si: "එක් රාමුවකින් මුළු ගමම (පුරහඳ කළුවර)" },
      { en: "Character conveyed through the frame", si: "රාමුව හරහා චරිතය සන්නිවේදනය" },
      { en: "Market favours the familiar", si: "වෙළඳපොළ හුරුපුරුදු දේට නැඹුරුයි" },
      { en: "State patronage and ideology", si: "රාජ්‍ය අනුග්‍රහය සහ මතවාදය" },
      { en: "Authenticity over style", si: "ශෛලියට වඩා ස්වකීයත්වය" },
      { en: "Shared director–cinematographer success", si: "අධ්‍යක්ෂ–කැමරා අධ්‍යක්ෂ හවුල් සාර්ථකත්වය" },
    ],
  },
};

const THEMES = [
  {
    name: { en: "Framing as a foundation", si: "මූලිකාංගයක් ලෙස රාමුව" },
    desc: { en: "The frame is a fundamental element of cinema: it begins in the screenplay and is built through choices of what to include and exclude.", si: "රාමුව සිනමාවේ මූලික අංගයකි: එය තිර පිටපතේ සිටම ආරම්භ වන අතර, ඇතුළත් කරන සහ බැහැර කරන දේ පිළිබඳ තේරීම් හරහා ගොඩනැගේ." },
    objs: ["O1"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage"],
  },
  {
    name: { en: "Frame and context are interdependent", si: "රාමුව සහ සන්දර්භය අන්‍යෝන්‍ය වශයෙන් බැඳී ඇත" },
    desc: { en: "The frame shapes the context and the context shapes the frame; the same frame may not work in another film.", si: "රාමුව සන්දර්භයට ද, සන්දර්භය රාමුවට ද බලපායි; එකම රාමුව වෙනත් චිත්‍රපටයක නොගැළපෙන්නට පුළුවන." },
    objs: ["O1"], who: ["channa-deshapriya"],
  },
  {
    name: { en: "Evolution of cinematic language", si: "සිනමා භාෂාවේ පරිණාමය" },
    desc: { en: "Cinematic rules change from era to era; cinema keeps searching for new ones.", si: "සිනමා රීති යුගයෙන් යුගයට වෙනස් වේ; සිනමාව නව රීති සොයා යයි." },
    objs: ["O2"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage"],
  },
  {
    name: { en: "Unconventional becomes convention", si: "Unconventional දේ සම්මතයක් බවට පත් වීම" },
    desc: { en: "New approaches are imitated and absorbed until they become the norm, so the next one has to be found.", si: "නව ප්‍රවේශ අනුකරණය වී සම්මතය බවට පත් වන තුරු අවශෝෂණය වේ; එබැවින් ඊළඟ එක සොයාගත යුතුය." },
    objs: ["O2", "O5"], who: ["vimukthi-jayasundara", "channa-deshapriya"],
  },
  {
    name: { en: "Artistic freedom", si: "කලාත්මක නිදහස" },
    desc: { en: "The freedom to go beyond existing rules in one's own, authored work.", si: "තමන්ගේම ස්වකීය නිර්මාණ තුළ පවතින රීතිවලින් ඔබ්බට යාමේ නිදහස." },
    objs: ["O2"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage"],
  },
  {
    name: { en: "Commercial constraint", si: "වාණිජ සීමා" },
    desc: { en: "In commercial cinema and advertising, expression stays tied to what audiences already like.", si: "වාණිජ සිනමාව සහ වෙළඳ දැන්වීම් තුළ ප්‍රකාශනය ප්‍රේක්ෂකයා දැනටමත් කැමති දේට බැඳී පවතී." },
    objs: ["O2", "O3"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage"],
  },
  {
    name: { en: "Political seeing", si: "දේශපාලනික දැක්ම" },
    desc: { en: "Looking beyond the accepted frame is itself political and can move society — and the state, in turn, can use the frame to serve an ideology.", si: "සම්මත රාමුවෙන් ඔබ්බට බැලීමම දේශපාලනික වන අතර, එයට සමාජය පෙළඹවිය හැකිය — අනෙක් අතට, රාජ්‍යයට ද මතවාදයක් සඳහා රාමුව භාවිත කළ හැකිය." },
    objs: ["O3"], who: ["vimukthi-jayasundara", "prasanna-withanage"],
  },
  {
    name: { en: "Multiple perspectives on war", si: "යුද්ධය පිළිබඳ විවිධ දෘෂ්ටිකෝණ" },
    desc: { en: "War-victory cinema and cinema of war's grief: two perspectives on the same events.", si: "යුද ජය සිනමාව සහ යුද ශෝක සිනමාව — එකම සිදුවීම් පිළිබඳ දෘෂ්ටිකෝණ දෙකක්." },
    objs: ["O3"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Subjectivity of unconventionality", si: "Unconventional බවෙහි ආත්මීයත්වය" },
    desc: { en: "Whether something is unconventional depends on the critic and the viewer.", si: "යමක් unconventional ද යන්න විචාරකයා සහ ප්‍රේක්ෂකයා මත රඳා පවතී." },
    objs: ["O1"], who: ["vimukthi-jayasundara", "channa-deshapriya"],
  },
  {
    name: { en: "Renewal through a new generation", si: "නව පරම්පරාවක් හරහා අලුත් වීම" },
    desc: { en: "The future depends on emerging filmmakers continually renewing the frame, even for small audiences.", si: "අනාගතය රඳා පවතින්නේ කුඩා ප්‍රේක්ෂකාගාරයක් සඳහා වුවද, නවක සිනමාකරුවන් නොනවත්වා රාමුව අලුත් කිරීම මතය." },
    objs: ["O5"], who: ["channa-deshapriya"],
  },
  {
    name: { en: "The frame reveals the inner world", si: "රාමුව අභ්‍යන්තර ලෝකය හෙළි කරයි" },
    desc: { en: "Unconventional frames can convey a character's inner state, or a whole social condition, without dialogue.", si: "Unconventional රාමුවලට දෙබසකින් තොරව චරිතයක අභ්‍යන්තර තත්ත්වය හෝ සමස්ත සමාජ තත්ත්වයක් සන්නිවේදනය කළ හැකිය." },
    objs: ["O1", "O3"], who: ["prasanna-withanage"],
  },
  {
    name: { en: "Rules, not laws", si: "නීති නොව රීති" },
    desc: { en: "Cinema's conventions are rules that can be broken, unlike laws; new creations come from breaking them.", si: "සිනමාවේ සම්මතයන් නීති නොව බිඳිය හැකි රීති ය; නව නිර්මාණ බිහි වන්නේ ඒවා බිඳීමෙනි." },
    objs: ["O2"], who: ["prasanna-withanage"],
  },
  {
    name: { en: "Borrowed conventions", si: "ණයට ගත් සම්මත" },
    desc: { en: "Sri Lankan framing conventions came from Tamil and Hindi cinema; national cinema defined itself by breaking from them.", si: "ශ්‍රී ලාංකීය රාමුකරණ සම්මත දෙමළ සහ හින්දි සිනමාවෙන් පැමිණි ඒවා ය; ජාතික සිනමාව තමන්ව නිර්වචනය කළේ ඒවායෙන් බිඳී යාමෙනි." },
    objs: ["O3"], who: ["prasanna-withanage"],
  },
  {
    name: { en: "Authenticity over style", si: "ශෛලියට වඩා ස්වකීයත්වය" },
    desc: { en: "Unconventional framing has value only when it comes from the director's own vision, not from imitating a style.", si: "Unconventional රාමුකරණය වටින්නේ එය ශෛලියක් අනුකරණය කිරීමෙන් නොව, අධ්‍යක්ෂවරයාගේ ස්වකීය දැක්මෙන් පැන නගින විට පමණි." },
    objs: ["O2"], who: ["prasanna-withanage"],
  },
  {
    name: { en: "Shared authorship of the frame", si: "රාමුවේ හවුල් කර්තෘත්වය" },
    desc: { en: "A film's success belongs to both the director and the cinematographer.", si: "චිත්‍රපටයක සාර්ථකත්වය අධ්‍යක්ෂවරයාට සහ කැමරා අධ්‍යක්ෂවරයාට යන දෙදෙනාටම හිමිය." },
    objs: ["O4"], who: ["prasanna-withanage"],
  },
];

const KEY_FINDING = {
  from: "01 · 02 · 03",
  title: { en: "Unconventionality is relative — to the viewer, to time and to power", si: "Unconventional බව සාපේක්ෂයි — ප්‍රේක්ෂකයාට, කාලයට සහ බලයට" },
  text: {
    en: "All three industry voices agree there is no fixed definition of “unconventional”. For Vimukthi Jayasundara it is decided by the critic and the viewer; Channa Deshapriya adds time — today's unconventional is later accepted as convention; Prasanna Withanage adds history and power — unconventional is what has not been seen before, Sri Lankan convention was itself borrowed, and both the market and the state shape what a frame may show. This links the study to reception theory and to the politics of national cinema.",
    si: "Unconventional යන්නට ස්ථාවර නිර්වචනයක් නැති බවට කර්මාන්ත හඬ තුනම එකඟ වේ. විමුක්ති ජයසුන්දරට අනුව එය තීරණය කරන්නේ විචාරකයා සහ ප්‍රේක්ෂකයා ය; චන්න දේශප්‍රිය කාලය එකතු කරයි — අද සම්ප්‍රදායික නොවන දේ පසුව සම්මතයක් ලෙස පිළිගැනේ; ප්‍රසන්න විතානගේ ඉතිහාසය සහ බලය එකතු කරයි — unconventional යනු මීට පෙර නොදුටු දේ වන අතර, ශ්‍රී ලාංකීය සම්මතය ම ණයට ගත් එකකි; රාමුවකට පෙන්විය හැකි දේ හැඩගස්වන්නේ වෙළඳපොළ සහ රාජ්‍යය යන දෙකමය. මෙය අධ්‍යයනය reception න්‍යාය සහ ජාතික සිනමාවේ දේශපාලනය සමඟ සම්බන්ධ කරයි.",
  },
};
