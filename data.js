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
  { id: "majith-s-uyangoda", name: "Majith S. Uyangoda", group: "industry", role: { en: "Cinematographer", si: "කැමරා ශිල්පී" } },
  { id: "md-mahindapaala", name: "M.D. Mahindapaala", group: "industry" },
  { id: "channa-deshapriya", name: "Channa Deshapriya", group: "industry", role: { en: "Cinematographer", si: "කැමරා ශිල්පී" } },

  // Academics
  { id: "supun-hemachandra", name: "Supun Hemachandra", group: "academics" },
  { id: "tharaka-nayanapriya", name: "Tharaka Nayanapriya", group: "academics" },
  { id: "boopathy-nalin", name: "Boopathy Nalin", group: "academics", role: { en: "Film educator & critic", si: "සිනමා අධ්‍යාපනඥ සහ විචාරක" } },
  { id: "ileka-ruwanpathirana", name: "Ileka Ruwanpathirana", group: "academics", role: { en: "Senior Lecturer, University of Kelaniya", si: "ජ්‍යෙෂ්ඨ කථිකාචාර්ය, කැලණිය විශ්වවිද්‍යාලය" } },
  { id: "hasantha-dissanayake", name: "Hasantha Dissanayake", group: "academics", role: { en: "Filmmaker & lecturer in cinema", si: "සිනමාකරු සහ සිනමා කථිකාචාර්ය" } },

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
  { n: 1, title: "Introduction", items: ["Introduction to the Study", "Background of the Study", "Understanding Unconventional Framing", "Problem Statement", "Research Aim", "Research Objectives", "Research Questions", "Significance of the Study", "Scope and Limitations", "Research Outline"] },
  { n: 2, title: "Literature Review", items: ["Introduction", "Unconventional Approaches in Cinema", "Sri Lankan Cinema", "Framing, Composition and Camera Perspectives", "Critical Review of Previous Studies", "Theoretical Framework", "Conceptual Framework", "Research Gap", "Chapter Summary"] },
  { n: 3, title: "Research Methodology", items: ["Introduction", "Research Approach and Design", "Research Methods", "Sampling and Participant Selection", "Film Selection Criteria", "Data Collection – Film Analysis and Interviews", "Research Instruments and Interview Questions", "Data Analysis – Thematic Analysis", "Trustworthiness and Credibility", "Ethical Considerations", "Chapter Summary"] },
  { n: 4, title: "Findings and Discussion", items: ["Introduction", "Overview of Films and Participants", "Presentation of Research Findings", "Themes Identified Through Analysis", "Film Examples and Interview Evidence", "Discussion in Relation to Previous Literature", "Findings Linked to Research Questions and Objectives", "Chapter Summary"] },
  { n: 5, title: "Conclusion and Recommendations", items: ["Introduction", "Summary of Research Findings", "Achievement of Research Objectives", "Contributions of the Study", "Practical Recommendations", "Limitations of the Study", "Recommendations for Future Research", "Final Conclusion"] },
  { n: null, title: "End Matter", items: ["References", "Appendix A – Interview Questions", "Appendix B – Participant Information and Consent Form", "Appendix C – Film Analysis Framework", "Appendix D – Supporting Data / Coding Examples"] },
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
  "ileka-ruwanpathirana": {
    number: 4,
    tags: [
      { en: "Frame as boundary", si: "සීමාවක් ලෙස රාමුව" },
      { en: "Visual grammar", si: "දෘශ්‍ය ව්‍යාකරණය" },
      { en: "Western-centred conventions", si: "බටහිර කේන්ද්‍රීය සම්මත" },
      { en: "Maker and viewer", si: "නිර්මාණකරු සහ නරඹන්නා" },
      { en: "Meaning in context", si: "සන්දර්භය තුළ අර්ථය" },
      { en: "Small industry", si: "කුඩා කර්මාන්තය" },
      { en: "Theory and education", si: "න්‍යාය සහ අධ්‍යාපනය" },
    ],
    objectives: {
      O1: {
        heading: { en: "A frame is a boundary: what is inside and what is not", si: "රාමුවක් යනු සීමාවකි: ඇතුළත ඇත්තේ කුමක්ද, නැත්තේ කුමක්ද" },
        said: [
          {
            en: "Cinema is the making of images. She sees a frame as an arrangement of images used to communicate something within a story — a boundary that decides what is inside it and what is not.",
            si: "සිනමාව යනු රූප ගොනු කිරීමකි. කතාවක් තුළ යමක් සන්නිවේදනය කිරීමට භාවිත කරන රූප සැකැස්මක් ලෙස ඇය රාමුව දකී — එනම් ඇතුළත ඇත්තේ කුමක්ද, නැත්තේ කුමක්ද යන්න තීරණය කරන සීමාවකි.",
          },
          {
            en: "Just as a language has rules, visual language has a grammar built for it. The accepted ways of using that grammar are what we call conventional; going beyond them is what we call unconventional.",
            si: "භාෂාවකට රීති ඇති සේම, දෘශ්‍ය භාෂාවට ද ඒ සඳහා ගොඩනගාගත් ව්‍යාකරණයක් ඇත. පිළිගත් ක්‍රමවේද conventional ලෙස හඳුන්වන අතර, ඒවා ඉක්මවා යාම unconventional ලෙස හැඳින්වේ.",
          },
          {
            en: "Whether a frame is unconventional is one thing for the person who makes it and another for the person who watches it.",
            si: "රාමුවක් unconventional ද යන්න එය නිර්මාණය කරන තැනැත්තාට අනුව එකක් වන අතර, එය නරඹන තැනැත්තාට අනුව තවත් එකකි.",
          },
          {
            en: "These rules were mostly made with the West at the centre, and the imagery built within them is what we call the frame. Challenging this grammar is what is called an unconventional frame.",
            si: "බොහෝ විට මෙම රීති සකස් වූයේ බටහිර කේන්ද්‍ර කරගෙනය; ඒ තුළ ගොඩනැගුණු රූපමය ආඛ්‍යාන ‘රාමුව’ ලෙස හැඳින්වේ. මෙම ව්‍යාකරණයට අභියෝග කිරීම unconventional රාමුවක් ලෙස හැඳින්වේ.",
          },
        ],
        interpretation: {
          en: "She defines framing through the idea of a visual grammar. Unconventionality is the act of challenging that grammar — a grammar she sees as largely Western in origin — and it is read differently by the maker and by the viewer.",
          si: "ඇය රාමුකරණය නිර්වචනය කරන්නේ දෘශ්‍ය ව්‍යාකරණයක් යන අදහස ඔස්සේය. Unconventional බව යනු එම ව්‍යාකරණයට — බොහෝ දුරට බටහිර මූලයක් ඇති ව්‍යාකරණයකට — අභියෝග කිරීමයි; එය නිර්මාණකරුට සහ නරඹන්නාට වෙනස් ලෙස කියවේ.",
        },
      },
      O2: {
        heading: { en: "Freedom to experiment — but you must understand the rules to break them", si: "අත්හදා බැලීමට නිදහස ඇත — නමුත් රීති බිඳීමට ඒවා අවබෝධ කරගත යුතුය" },
        said: [
          {
            en: "Rules are made for anything as part of its development, out of necessity. Visual language is a language one learns through training; a person who masters it can become a director or a cameraman.",
            si: "ඕනෑම දෙයක රීති සකස් වන්නේ එහි දියුණුවට අවශ්‍යතාවක් ලෙසය. දෘශ්‍ය භාෂාව යනු පුහුණුව තුළින් ප්‍රගුණ කරන භාෂාවකි; එය ප්‍රගුණ කළ අයෙකුට අධ්‍යක්ෂවරයෙකු හෝ කැමරා ශිල්පියෙකු විය හැකිය.",
          },
          {
            en: "No one needs to be confined inside a frame. Storytelling should grow as an art: what matters is not tying the frame to a rule, but how the story is treated visually.",
            si: "කිසිවෙකු රාමුවක් තුළ කොටු විය යුතු නැත. කතන්දර කීම කලාවක් ලෙස වර්ධනය විය යුතුය: වැදගත් වන්නේ රාමුව රීතියකට කොටු කිරීම නොව, කතාව දෘශ්‍යමය වශයෙන් හසුරුවන ආකාරයයි.",
          },
          {
            en: "Anyone has the freedom to experiment, but to break the rules one must have an understanding of the rules.",
            si: "ඕනෑම කෙනෙකුට අත්හදා බැලීමට නිදහස ඇත; නමුත් රීති කැඩීමට නම් රීති පිළිබඳ අවබෝධයක් තිබිය යුතුය.",
          },
        ],
        interpretation: {
          en: "She treats freedom as earned through knowledge: conventions exist for the medium's development, and breaking them is meaningful only when it comes from someone who has mastered them.",
          si: "ඇය නිදහස දකින්නේ දැනුම තුළින් උපයාගන්නා දෙයක් ලෙසය: සම්මතයන් පවතින්නේ මාධ්‍යයේ දියුණුව සඳහා වන අතර, ඒවා බිඳීම අර්ථවත් වන්නේ ඒවා ප්‍රගුණ කළ අයෙකුගෙන් පැමිණෙන විට පමණි.",
        },
      },
      O3: {
        heading: { en: "Context shapes meaning — and a small industry shapes what is possible", si: "අර්ථය හැඩගස්වන්නේ සන්දර්භයයි — කළ හැකි දේ හැඩගස්වන්නේ කුඩා කර්මාන්තයයි" },
        said: [
          {
            en: "It is hard to draw a direct link between politics and unconventional framing: everyone lives inside society, so perspectives on what happens in the country differ. Unconventional frames do appear around such themes — in small observational moments and within plots.",
            si: "දේශපාලනය සහ unconventional රාමු අතර සෘජු සම්බන්ධයක් ගොඩනැගීම අපහසුය: සෑම කෙනෙකුම සමාජය තුළ සිටින නිසා, රට තුළ සිදුවන දේ පිළිබඳ දෘෂ්ටිකෝණ වෙනස් විය හැකිය. එවැනි තේමා වටා unconventional රාමු භාවිත වී ඇත — කුඩා නිරීක්ෂණ මොහොතවල සහ කතා වස්තු තුළ.",
          },
          {
            en: "Alongside the choices of the director, filmmaker and cameraman, the treatment the production asks for and the infrastructure available in the industry shape these choices. It is an industry of limited resources, yet within those facilities one can still turn to experimental work.",
            si: "අධ්‍යක්ෂවරයාගේ, සිනමාකරුවාගේ සහ කැමරා ශිල්පියාගේ තීරණ මෙන්ම, නිෂ්පාදනය ඉල්ලා සිටින ප්‍රතිකාරය (treatment) සහ කර්මාන්තය තුළ ඇති යටිතල පහසුකම් ද මේවා හැඩගස්වයි. මෙය සීමිත සම්පත් සහිත කර්මාන්තයකි; එහෙත් ඇති පහසුකම් තුළ අත්හදා බැලීම් කරා යොමු විය හැකිය.",
          },
          {
            en: "In Sri Lanka, unconventional frames can be seen in the artistic stream — in the films of Vimukthi Jayasundara, Prasanna Withanage and Asoka Handagama — as an artistic expression: the choice made to show the story.",
            si: "ශ්‍රී ලංකාවේ, කලාත්මක ධාරාව තුළ — විමුක්ති ජයසුන්දර, ප්‍රසන්න විතානගේ සහ අශෝක හඳගම ගේ සිනමා නිර්මාණ තුළ — unconventional රාමු කලාත්මක ප්‍රකාශනයක් ලෙස දැකිය හැකිය: එනම් කතාව පෙන්වීමට ගත් තේරීමයි.",
          },
          {
            en: "A large wide frame might suggest boundless space, carry a different meaning, or mark a triumph — it is read according to where it is used. Simply breaking a rule does not make a frame unconventional; every frame is tied to a context, and a frame cannot be discussed once its meaning is stripped away.",
            si: "විශාල wide රාමුවකින් අසීමිත අවකාශයක්, වෙනස් අර්ථයක් හෝ යමක් ජයග්‍රහණය කළ බවක් පෙන්විය හැකිය — එය කියවිය හැක්කේ භාවිත කරන තැන අනුවය. රීතියක් කැඩූ පමණින් රාමුවක් unconventional නොවේ; සෑම රාමුවක්ම සන්දර්භයක් හා බැඳී ඇති අතර, අර්ථය ඉවත් කර රාමුවක් ගැන කතා කළ නොහැකිය.",
          },
          {
            en: "Sri Lankan cinema is predominantly Sinhala-language, made in a small industry for a market that has always been small. Within it, concepts and production evolve, and the new elements that emerge are what we call unconventional frames.",
            si: "ශ්‍රී ලාංකීය සිනමාව ප්‍රධාන වශයෙන් සිංහල භාෂාවෙන් නිර්මාණය වන අතර, සැමවිටම කුඩා වෙළඳපොළක් සහිත කුඩා කර්මාන්තයකි. ඒ තුළ සංකල්ප සහ නිෂ්පාදන අංශ පරිණාමය වන අතර, එයින් මතු වන නව දේ unconventional රාමු ලෙස හැඳින්වේ.",
          },
        ],
        interpretation: {
          en: "Unlike the industry voices, she resists a direct political reading. For her, the decisive context is semantic and material: a frame's meaning depends on where it is used, and what can be attempted depends on the resources of a small, Sinhala-language industry.",
          si: "කර්මාන්ත හඬට වෙනස්ව, ඇය සෘජු දේශපාලනික කියවීමකට එකඟ නොවේ. ඇයට අනුව තීරණාත්මක සන්දර්භය අර්ථමය සහ භෞතික ය: රාමුවක අර්ථය රඳා පවතින්නේ එය භාවිත කරන තැන මත වන අතර, අත්හදා බැලිය හැකි දේ රඳා පවතින්නේ කුඩා, සිංහල භාෂා කර්මාන්තයක සම්පත් මතය.",
        },
      },
      O4: {
        partial: true,
        heading: { en: "Director, cameraman and production together", si: "අධ්‍යක්ෂ, කැමරා ශිල්පී සහ නිෂ්පාදනය එක්ව" },
        said: [
          {
            en: "She names the decisions of the director, the filmmaker and the cameraman, together with the treatment the production asks for, as what shapes the frame.",
            si: "රාමුව හැඩගස්වන දේ ලෙස ඇය අධ්‍යක්ෂවරයාගේ, සිනමාකරුවාගේ සහ කැමරා ශිල්පියාගේ තීරණ මෙන්ම නිෂ්පාදනය ඉල්ලා සිටින ප්‍රතිකාරය ද නම් කරයි.",
          },
        ],
        interpretation: {
          en: "She places the frame within a chain of decisions that includes the production, though the interview does not detail how the director and cinematographer divide these choices.",
          si: "ඇය නිෂ්පාදනය ද ඇතුළත් තීරණ දාමයක් තුළ රාමුව ස්ථානගත කරයි. නමුත් අධ්‍යක්ෂවරයා සහ කැමරා ශිල්පියා අතර මෙම තීරණ බෙදී යන ආකාරය මෙම සම්මුඛ සාකච්ඡාවේදී විස්තර නොවිණි.",
        },
      },
      O5: {
        heading: { en: "Opportunities are growing — but cinema needs theory and a film school", si: "අවස්ථා වර්ධනය වෙමින් පවතී — නමුත් සිනමාවට න්‍යාය සහ සිනමා පාසලක් අවශ්‍යයි" },
        said: [
          {
            en: "The present is relatively good. Both the state and the private sector are doing well, entering the industry is no longer the problem it once was, and the opportunities created in 2026 are very satisfying.",
            si: "වර්තමානය සාපේක්ෂව හොඳය. රාජ්‍ය සහ පෞද්ගලික අංශ දෙකම දැන් හොඳින් ක්‍රියා කරයි; කලින් කර්මාන්තයට පිවිසීම පහසු නොවූ නමුත් දැන් එය ගැටලුවක් නොවේ; 2026 දී නිර්මාණය වී ඇති අවස්ථා ගැන ඇය ඉතා සතුටු වේ.",
          },
          {
            en: "Still, much remains to be developed: the country has no film school or film institute, and it also needs people with practical training built up inside the industry.",
            si: "එහෙත් දියුණු කළ යුතු දේ බොහෝය: රටේ සිනමා පාසලක් හෝ සිනමා ආයතනයක් නැත; ඊට අමතරව කර්මාන්තය තුළින් ප්‍රායෝගික පුහුණුව ගොඩනගාගත් පිරිසක් ද සිටිය යුතුය.",
          },
          {
            en: "Development comes when these questions become a discussion. A theoretical side has to be built too: academic knowledge, research skills and analytical skills come through education, and together with practice they speed up development.",
            si: "මේ දේ සාකච්ඡාවක් ලෙස මතු වූ විට වර්ධනය ඇති වේ. න්‍යායාත්මක පැත්ත ද ගොඩනැගිය යුතුය: ශාස්ත්‍රීය දැනුම, පර්යේෂණ කුසලතා සහ විශ්ලේෂණ කුසලතා අධ්‍යාපනය තුළින් ලැබෙන අතර, ප්‍රායෝගිකත්වය සමඟ එක්ව ඒවා වර්ධනය වේගවත් කරයි.",
          },
        ],
        interpretation: {
          en: "Her vision of the future is institutional: optimism about current opportunities, paired with a call for formal film education that joins theory, research and industry practice.",
          si: "ඇයගේ අනාගත දැක්ම ආයතනිකය: වර්තමාන අවස්ථා පිළිබඳ ශුභවාදී බව, න්‍යාය, පර්යේෂණ සහ කර්මාන්ත ප්‍රායෝගිකත්වය එක් කරන විධිමත් සිනමා අධ්‍යාපනයක් සඳහා වූ ඉල්ලීමක් සමඟ ඇය ඉදිරිපත් කරයි.",
        },
      },
      O6: {
        heading: { en: "Her position in the overall pattern", si: "සමස්ත රටාව තුළ ඇයගේ ස්ථානය" },
        said: [
          {
            en: "As the first academic voice, she agrees with the industry that there are no fixed rules — but adds that breaking them requires first understanding them.",
            si: "පළමු ශාස්ත්‍රීය හඬ ලෙස, ස්ථාවර රීති නැති බවට ඇය කර්මාන්ත හඬ සමඟ එකඟ වේ — නමුත් ඒවා බිඳීමට පෙර ඒවා අවබෝධ කරගත යුතු බව එකතු කරයි.",
          },
          {
            en: "Like Vimukthi Jayasundara and Channa Deshapriya, she sees unconventionality as depending on the viewer, and adds that it is different again for the maker.",
            si: "විමුක්ති ජයසුන්දර සහ චන්න දේශප්‍රිය මෙන්, unconventional බව නරඹන්නා මත රඳා පවතින බව ඇය දකින අතර, නිර්මාණකරුට එය වෙනස් බව ද එකතු කරයි.",
          },
          {
            en: "She names Vimukthi Jayasundara and Prasanna Withanage — both interviewed in this study — and Asoka Handagama as the Sri Lankan examples of unconventional framing.",
            si: "Unconventional රාමුකරණයේ ශ්‍රී ලාංකීය උදාහරණ ලෙස ඇය මෙම අධ්‍යයනයේ සම්මුඛ සාකච්ඡා කළ විමුක්ති ජයසුන්දර සහ ප්‍රසන්න විතානගේ මෙන්ම අශෝක හඳගම ද නම් කරයි.",
          },
          {
            en: "Unlike Vimukthi and Prasanna, she resists a direct political reading of the frame, and is the first to call for film education and theory.",
            si: "විමුක්ති සහ ප්‍රසන්නට වෙනස්ව, රාමුව පිළිබඳ සෘජු දේශපාලනික කියවීමකට ඇය එකඟ නොවන අතර, සිනමා අධ්‍යාපනය සහ න්‍යාය ඉල්ලා සිටින පළමු හඬ ඇයයි.",
          },
        ],
        interpretation: {
          en: "The academic perspective reframes the question in terms of grammar, context and knowledge. Where practitioners stress vision, market and power, she stresses understanding: an unconventional frame is meaningful only in context and only when its maker knows the conventions it breaks.",
          si: "ශාස්ත්‍රීය දෘෂ්ටිකෝණය ප්‍රශ්නය ව්‍යාකරණය, සන්දර්භය සහ දැනුම ඔස්සේ නැවත සකස් කරයි. ප්‍රායෝගික නිර්මාණකරුවන් දැක්ම, වෙළඳපොළ සහ බලය අවධාරණය කරන තැන, ඇය අවබෝධය අවධාරණය කරයි: unconventional රාමුවක් අර්ථවත් වන්නේ සන්දර්භය තුළ සහ එහි නිර්මාණකරු තමන් බිඳින සම්මතයන් දන්නා විට පමණි.",
        },
      },
    },
    closing: {
      heading: { en: "Know the rules before you break them", si: "රීති බිඳීමට පෙර ඒවා දැනගන්න" },
      text: {
        en: "Anyone is free to experiment, and no one should be confined inside a frame — but to break the rules, you must first understand them.",
        si: "ඕනෑම කෙනෙකුට අත්හදා බැලීමට නිදහස ඇති අතර, කිසිවෙකු රාමුවක් තුළ කොටු විය යුතු නැත — නමුත් රීති කැඩීමට නම් පළමුව ඒවා අවබෝධ කරගත යුතුය.",
      },
    },
    codes: [
      { en: "Frame = arrangement of images", si: "රාමුව = රූප සැකැස්මක්" },
      { en: "Frame as boundary (inside / outside)", si: "සීමාවක් ලෙස රාමුව (ඇතුළත / පිටත)" },
      { en: "Visual language has a grammar", si: "දෘශ්‍ය භාෂාවට ව්‍යාකරණයක් ඇත" },
      { en: "Unconventional = going beyond accepted methods", si: "Unconventional = පිළිගත් ක්‍රම ඉක්මවා යාම" },
      { en: "Maker vs viewer", si: "නිර්මාණකරු සහ නරඹන්නා" },
      { en: "Western-centred rules", si: "බටහිර කේන්ද්‍රීය රීති" },
      { en: "Visual language learned through training", si: "පුහුණුවෙන් ප්‍රගුණ කරන දෘශ්‍ය භාෂාව" },
      { en: "Storytelling as an art", si: "කලාවක් ලෙස කතන්දර කීම" },
      { en: "Understand rules before breaking them", si: "රීති කැඩීමට පෙර ඒවා අවබෝධ කරගැනීම" },
      { en: "No direct political link", si: "සෘජු දේශපාලන සම්බන්ධයක් නැත" },
      { en: "Production treatment and infrastructure", si: "නිෂ්පාදන ප්‍රතිකාරය සහ යටිතල පහසුකම්" },
      { en: "Limited resources, room to experiment", si: "සීමිත සම්පත්, අත්හදා බැලීමට ඉඩ" },
      { en: "Artistic stream (Jayasundara, Withanage, Handagama)", si: "කලාත්මක ධාරාව (ජයසුන්දර, විතානගේ, හඳගම)" },
      { en: "Meaning depends on context", si: "අර්ථය සන්දර්භය මත රඳා පවතී" },
      { en: "Small Sinhala-language market", si: "කුඩා සිංහල භාෂා වෙළඳපොළ" },
      { en: "Opportunities in 2026", si: "2026 දී අවස්ථා" },
      { en: "No film school", si: "සිනමා පාසලක් නැත" },
      { en: "Theory, research and analysis skills", si: "න්‍යාය, පර්යේෂණ සහ විශ්ලේෂණ කුසලතා" },
    ],
  },
  "majith-s-uyangoda": {
    number: 5,
    tags: [
      { en: "Frame as emotion", si: "හැඟීමක් ලෙස රාමුව" },
      { en: "Concepts, not conventions", si: "සම්මත නොව සංකල්පනා" },
      { en: "The vertical turn", si: "සිරස් (vertical) හැරවුම" },
      { en: "Society shapes the frame", si: "සමාජය රාමුව හැඩගස්වයි" },
      { en: "Natural-light experiments", si: "ස්වාභාවික ආලෝක අත්හදා බැලීම්" },
      { en: "Director–DoP unity", si: "අධ්‍යක්ෂ–කැමරා ශිල්පී එකමුතුව" },
      { en: "Forums for cinema", si: "සිනමාව සඳහා සංවාද වේදිකා" },
    ],
    objectives: {
      O1: {
        heading: { en: "A frame is a moving image in which emotion is felt", si: "රාමුවක් යනු හැඟීම දැනෙන, චලනය සහිත චිත්‍රයකි" },
        said: [
          {
            en: "A frame cannot be defined simply, and there is no agreed definition of it anywhere. At its simplest it is what forms when a lens is put on a camera — and that changes from work to work.",
            si: "රාමුවක් සරලව නිර්වචනය කළ නොහැකි අතර, ‘මෙයයි රාමුව’ කියා කොතැනකවත් සම්මතයක් නැත. සරලම ලෙස එය කැමරාවකට ලෙන්ස් එකක් දැමූ විට හැදෙන දෙයයි — එය වැඩෙන් වැඩට වෙනස් වේ.",
          },
          {
            en: "If he had to answer in a few words: within cinematography, a frame is an image with movement, in which emotion and feeling can be felt.",
            si: "කෙටියෙන් පිළිතුරු දිය යුතු නම්: සිනමාකරණය තුළ රාමුවක් යනු චලනය සහිත, ඉමෝෂනය සහ හැඟීම දැනෙන චිත්‍රයකි.",
          },
          {
            en: "“Locking” a frame means capturing exactly the amount of the image that carries the emotion. To show a man laughing or crying, the whole man is not needed — only the part where the emotion is seen. He links this to the idea of balance, which contains several categories of its own.",
            si: "රාමුවක් ‘ලොක්’ කිරීම යනු ඉමෝෂනය රැගෙන යන ප්‍රමාණය පමණක් හසු කරගැනීමයි. මිනිසෙක් සිනාසෙන හෝ අඬන බව පෙන්වීමට මුළු මිනිසාම අවශ්‍ය නැත — ඉමෝෂනය පෙනෙන කොටස පමණක් ප්‍රමාණවත්ය. ඔහු මෙය සමබරතාව (balance) යන අදහසට සම්බන්ධ කරයි; එහි ම ප්‍රවර්ග කිහිපයක් ඇත.",
          },
          {
            en: "Cinematography drew its first inspiration from painting: light, darkness and shadow were learned from paintings, and a second of film is still twenty-four such images joined together.",
            si: "සිනමාකරණයේ මුල් ආභාසය ලැබුණේ සිතුවම්වලිනි: ආලෝකය, අඳුර සහ සෙවනැල්ල ඉගෙන ගත්තේ සිතුවම් ඇසුරිනි; චිත්‍රපටයක තත්පරයක් තවමත් එවැනි රූප විසිහතරක එකතුවකි.",
          },
          {
            en: "Whether a frame is conventional or not depends on the person who makes it and on the work.",
            si: "රාමුවක් සම්ප්‍රදායික ද නැද්ද යන්න රඳා පවතින්නේ එය හදන කෙනා සහ වැඩය අනුවය.",
          },
        ],
        interpretation: {
          en: "As a working cinematographer, he defines the frame by its emotional purpose rather than by rules of composition. The frame is a decision about how much of the image is needed to make a feeling felt.",
          si: "ක්‍රියාකාරී කැමරා ශිල්පියෙකු ලෙස, ඔහු රාමුව නිර්වචනය කරන්නේ සංයුති රීති අනුව නොව එහි හැඟීම්මය අරමුණ අනුවය. රාමුව යනු හැඟීමක් දැනවීමට රූපයෙන් කොපමණ ප්‍රමාණයක් අවශ්‍යද යන්න පිළිබඳ තීරණයකි.",
        },
      },
      O2: {
        heading: { en: "There are concepts, not conventions — and they are there to be broken", si: "ඇත්තේ සම්මත නොව සංකල්පනා ය — ඒවා බිඳීම සඳහා ය" },
        said: [
          {
            en: "“Non-conventional” suggests breaking a rule from the book — but the book's “this is a wide shot, this is a close-up” keeps changing. There is a large gap between the frames of 1990s cinema and those of 2025, and a frame he made ten years ago differs from one he makes today.",
            si: "‘සම්ප්‍රදායික නොවන’ යන්නෙන් පොතේ තිබෙන රීතියක් කැඩීමක් හැඟේ — නමුත් ‘මෙය වයිඩ් ෂොට් එකක්, මෙය ක්ලෝසප් එකක්’ යන පොතේ දේ නොනවත්වා වෙනස් වේ. 1990 දශකයේ සිනමාවේ රාමු සහ 2025 රාමු අතර විශාල පරතරයක් ඇති අතර, ඔහු අවුරුදු දහයකට පෙර හැදූ රාමුවක් සහ අද හදන රාමුවක් වෙනස්ය.",
          },
          {
            en: "He thinks the word “conventional” should not be used. Cinema has concepts: three-point lighting with key, fill and backlight does not mean three lamps are needed — the same levels can be made with shadow, or with black and white cloth.",
            si: "‘සම්ප්‍රදායික’ යන වචනය භාවිත කිරීම හොඳ නැතැයි ඔහු සිතයි. සිනමාවේ ඇත්තේ සංකල්පනා ය: key, fill සහ backlight සහිත ත්‍රී-ලයිට් ක්‍රමය යනු ලයිට් තුනක් අවශ්‍ය බව නොවේ — එම මට්ටම් සෙවනැල්ලෙන් හෝ කළු සහ සුදු රෙදි භාවිතයෙන් ද හැදිය හැකිය.",
          },
          {
            en: "Earlier filmmakers' work should not be labelled conventional: it was made for the political, technical and social needs of its moment. In time, what his generation makes will be called conventional too.",
            si: "පෙර සිනමාකරුවන්ගේ නිර්මාණ සම්ප්‍රදායික ලෙස ලේබල් නොකළ යුතුය: ඒවා හැදුණේ ඒ මොහොතේ දේශපාලනික, තාක්ෂණික සහ සමාජීය අවශ්‍යතා අනුවය. කාලයත් සමඟ ඔහුගේ පරම්පරාව කරන දේ ද සම්ප්‍රදායික යැයි කියනු ඇත.",
          },
          {
            en: "Around 2010–2016 a generation of “stubborn” Sri Lankan filmmakers emerged who learned these concepts, then broke them to give priority to their own creation and their own feeling.",
            si: "2010–2016 පමණ කාලයේ, මෙම සංකල්පනා ඉගෙන ගෙන, පසුව තමන්ගේ නිර්මාණයට සහ තමන්ට දැනෙන හැඟීමට මුල් තැන දීම සඳහා ඒවා බිඳ දැමූ ‘හිතුවක්කාර’ ශ්‍රී ලාංකීය සිනමාකරුවන් පිරිසක් බිහි විය.",
          },
          {
            en: "His own experiments are mostly in music videos: a single-take video with no cut that still moves through wide, close-up and over-the-shoulder compositions, and <i>Obe Hina Wenne Kohomada</i>, shot entirely in natural light by following the sun from morning backlight through side light to evening backlight. Advertising leaves less freedom, because the work belongs to the client.",
            si: "ඔහුගේ අත්හදා බැලීම් බොහොමයක් ඇත්තේ මියුසික් වීඩියෝවලය: කිසිදු කට් එකක් නැති තනි ෂොට් එකක් වුවද, වයිඩ්, ක්ලෝසප් සහ ඕවර්-ෂෝල්ඩර් සංයුති හරහා ගමන් කරන වීඩියෝවක්; සහ උදේ බැක්ලයිට් එකේ සිට සයිඩ් ලයිට් හරහා සවස බැක්ලයිට් එක දක්වා හිරු අනුගමනය කරමින්, සම්පූර්ණයෙන් ස්වාභාවික ආලෝකයෙන් රූගත කළ <i>ඔබ හිනා වෙන්නේ කොහොමද</i>. වෙළඳ දැන්වීම්වල නිදහස අඩුය, මන්ද වැඩය අයිති සේවාදායකයාටය.",
          },
        ],
        interpretation: {
          en: "He dissolves the opposition between rules and freedom: what the books call rules are concepts tied to a period, so freedom is not rebellion against a fixed tradition but the normal movement of each generation — grounded, like Ileka Ruwanpathirana's view, in first learning those concepts.",
          si: "ඔහු රීති සහ නිදහස අතර ප්‍රතිවිරෝධය දිය කර හරියි: පොත්වල රීති ලෙස හඳුන්වන දේ යුගයකට බැඳුණු සංකල්පනා ය; එබැවින් නිදහස යනු ස්ථාවර සම්ප්‍රදායකට එරෙහි කැරැල්ලක් නොව, සෑම පරම්පරාවකම ස්වාභාවික ගමනයි — ඉලේකා රුවන්පතිරණගේ අදහස මෙන්ම, මුලින්ම එම සංකල්පනා ඉගෙනීම මත පදනම් වූවකි.",
        },
      },
      O3: {
        heading: { en: "Society, politics and devices clearly shape the frame", si: "සමාජය, දේශපාලනය සහ උපාංග රාමුව පැහැදිලිවම හැඩගස්වයි" },
        said: [
          {
            en: "Social and political factors clearly affect the cinematic frame. Iranian filmmakers who cannot shoot freely outdoors make a hidden, indoor cinema; Korean, Japanese and Mexican films carry the colours, landscapes and social levels of the countries they come from — borrowing a Japanese look would not fit a Sri Lankan film.",
            si: "සමාජීය සහ දේශපාලනික සාධක සිනමා රාමුවට පැහැදිලිවම බලපායි. එළිමහනේ නිදහසේ රූගත කළ නොහැකි ඉරාන සිනමාකරුවන් සඟවාගත්, ගෘහස්ථ සිනමාවක් කරති; කොරියානු, ජපන් සහ මෙක්සිකානු චිත්‍රපට ඔවුන්ගේ රටවල වර්ණ, භූ දර්ශන සහ සමාජ මට්ටම් රැගෙන යයි — ජපන් පෙනුමක් ණයට ගැනීම ශ්‍රී ලාංකීය චිත්‍රපටයකට නොගැළපේ.",
          },
          {
            en: "Sri Lanka is an island whose landscape changes within a hundred kilometres, with Buddhist, Hindu, Catholic and Muslim cultures — the temple bell, the kovil's nadaswaram, the church hymn are all part of what a frame carries.",
            si: "ශ්‍රී ලංකාව කිලෝමීටර සීයක් ඇතුළත භූ දර්ශනය වෙනස් වන දූපතකි; බෞද්ධ, හින්දු, කතෝලික සහ මුස්ලිම් සංස්කෘතීන් ඇත — පන්සලේ ඝණ්ටාරය, කෝවිලේ නලාව, පල්ලියේ ගීතිකාව යන සියල්ල රාමුවක් රැගෙන යන දෙයෙහි කොටසකි.",
          },
          {
            en: "Politics reached the audience directly: during the war, when bombs went off in Colombo, the last buses disappeared, night life ended and the 10.30 pm show was lost. Now, in 2026, late shows are back — a country that has settled has given people space both to create and to enjoy.",
            si: "දේශපාලනය ප්‍රේක්ෂකයාට සෘජුවම බලපෑවේය: යුද සමයේ කොළඹ බෝම්බ පිපිරෙන විට, අවසාන බස් රථ නැති වී, රාත්‍රී ජීවිතය නැති වී, රාත්‍රී 10.30 දර්ශනය අහිමි විය. දැන්, 2026 දී, රාත්‍රී දර්ශන නැවත ඇත — සන්සුන් වූ රටක් මිනිසුන්ට නිර්මාණය කිරීමට සහ රසවිඳීමට අවකාශයක් ලබා දී ඇත.",
          },
          {
            en: "For a time Sri Lankan cinema split into art-house films seen mainly at festivals and films the mass audience could follow. After about 2013, new platforms and wider access brought a range of genres.",
            si: "යම් කාලයක ශ්‍රී ලාංකීය සිනමාව, ප්‍රධාන වශයෙන් උළෙලවලදී පමණක් නැරඹූ කලාත්මක චිත්‍රපට සහ මහජනතාවට තේරුම් ගත හැකි චිත්‍රපට ලෙස බෙදී ගියේය. 2013 න් පමණ පසු නව වේදිකා සහ පුළුල් ප්‍රවේශය විවිධ ශානර බිහි කළේය.",
          },
          {
            en: "The biggest current break with convention is the move to vertical framing — vertical series, shows and commercials made for phones that people watch in small gaps of time. Nobody set out to change the convention: viewers accepted it without noticing, and a generation born after 2020 may draw the sea on a vertical sheet.",
            si: "වර්තමානයේ සම්ප්‍රදායෙන් සිදු වූ විශාලතම බිඳීම සිරස් (vertical) රාමුකරණයට වූ ගමනයි — මිනිසුන් කුඩා කාල පරතරවලදී දුරකථනයෙන් නරඹන සිරස් කතා මාලා, වැඩසටහන් සහ වෙළඳ දැන්වීම්. කිසිවෙකු සම්මතය වෙනස් කිරීමට උත්සාහ කළේ නැත: ප්‍රේක්ෂකයා නොදැනුවත්වම එය පිළිගත් අතර, 2020 න් පසු ඉපදුණු පරම්පරාවක් මුහුද සිරස් කඩදාසියක අඳින්නට පුළුවන.",
          },
        ],
        interpretation: {
          en: "He agrees with the industry voices that politics and society shape the frame, but adds two concrete layers: the material conditions of viewing (buses, curfews, night shows) and the device itself. For him, today's decisive context is technological — the phone has changed the shape of the frame faster than any filmmaker.",
          si: "දේශපාලනය සහ සමාජය රාමුව හැඩගස්වන බවට ඔහු කර්මාන්ත හඬ සමඟ එකඟ වන අතර, ස්ථර දෙකක් එකතු කරයි: නැරඹීමේ භෞතික තත්ත්වයන් (බස්, ඇඳිරි නීති, රාත්‍රී දර්ශන) සහ උපාංගයම. ඔහුට අනුව අද තීරණාත්මක සන්දර්භය තාක්ෂණිකය — දුරකථනය කිසිම සිනමාකරුවෙකුට වඩා වේගයෙන් රාමුවේ හැඩය වෙනස් කර ඇත.",
        },
      },
      O4: {
        heading: { en: "Director and cinematographer must work as one unit", si: "අධ්‍යක්ෂ සහ කැමරා ශිල්පියා එක ඒකකයක් ලෙස වැඩ කළ යුතුය" },
        said: [
          {
            en: "What he expects most from a director is good leadership and guidance. A director who leads clearly, shares the story and guides the team makes the work flow; without that, things can go wrong.",
            si: "ඔහු අධ්‍යක්ෂවරයෙකුගෙන් වැඩිපුරම බලාපොරොත්තු වන්නේ හොඳ නායකත්වය සහ මඟපෙන්වීමයි. පැහැදිලිව නායකත්වය දෙන, කතාව බෙදාගන්නා සහ කණ්ඩායමට මඟ පෙන්වන අධ්‍යක්ෂවරයෙක් වැඩය සුමටව ගලා යාමට සලස්වයි; එය නැති විට දේවල් අවුල් විය හැකිය.",
          },
          {
            en: "On set, director and cinematographer are not two people but one, working towards one creative purpose. He never works “100% on his own creativity”: the frame comes from the director's creative intent.",
            si: "රූගත කිරීමේ ස්ථානයේ අධ්‍යක්ෂවරයා සහ කැමරා ශිල්පියා දෙදෙනෙක් නොව, එක් නිර්මාණාත්මක අරමුණක් සඳහා වැඩ කරන එක් අයෙකි. ඔහු කිසිදාක ‘සියයට සියයක් තමන්ගේ නිර්මාණශීලීත්වය’ මත වැඩ නොකරයි: රාමුව පැන නගින්නේ අධ්‍යක්ෂවරයාගේ නිර්මාණාත්මක අභිප්‍රාය තුළිනි.",
          },
          {
            en: "Reading the script creates a picture in each of their heads; they discuss until both are on the same track. If the director is on one track and he is on another, the film fails. The final frame is the point where they agree.",
            si: "පිටපත කියවන විට දෙදෙනාගේම හිසේ චිත්‍රයක් හැදේ; දෙදෙනාම එකම මාර්ගයේ සිටින තුරු ඔවුන් සාකච්ඡා කරයි. අධ්‍යක්ෂවරයා එක් මාර්ගයක සහ ඔහු තවත් මාර්ගයක සිටියොත් චිත්‍රපටය සාර්ථක නොවේ. අවසාන රාමුව යනු ඔවුන් එකඟ වන තැනයි.",
          },
          {
            en: "A film needs “unity”: director, cinematographer, production, costume and art departments — a team of 25 to 50 — working to one shared rule, such as a single colour palette for costumes and vehicles. He compares it to the red-and-white stripes of a kovil wall.",
            si: "චිත්‍රපටයකට ‘එකමුතුව’ (unity) අවශ්‍යයි: අධ්‍යක්ෂ, කැමරා ශිල්පී, නිෂ්පාදන, ඇඳුම් සහ කලා අංශ — 25 සිට 50 දක්වා කණ්ඩායමක් — ඇඳුම් සහ වාහන සඳහා එකම වර්ණ තලයක් වැනි එක් පොදු රීතියකට වැඩ කිරීම. ඔහු එය කෝවිල් තාප්පයක රතු-සුදු ඉරි සමඟ සසඳයි.",
          },
          {
            en: "Some directors write and shoot their own films as director-cinematographers; that is a different pattern, and it can also succeed.",
            si: "සමහර අධ්‍යක්ෂවරු තමන්ම ලියා, තමන්ම රූගත කරන අධ්‍යක්ෂ-කැමරා ශිල්පීන් වෙති; එය වෙනස් රටාවක් වන අතර, එය ද සාර්ථක විය හැකිය.",
          },
        ],
        interpretation: {
          en: "He gives the fullest account of collaboration so far. Framing is a negotiated agreement inside a hierarchy: the director leads and holds the vision, the cinematographer translates it, and the whole crew serves a shared visual unity.",
          si: "සහයෝගීතාව පිළිබඳ මෙතෙක් ලැබුණු සම්පූර්ණතම විස්තරය ඔහු ලබා දෙයි. රාමුකරණය යනු ධුරාවලියක් තුළ සාකච්ඡා කර ලබාගන්නා එකඟතාවකි: අධ්‍යක්ෂවරයා නායකත්වය දී දැක්ම රඳවා ගනී, කැමරා ශිල්පියා එය පරිවර්තනය කරයි, සමස්ත කණ්ඩායමම පොදු දෘශ්‍ය එකමුතුවකට සේවය කරයි.",
        },
      },
      O5: {
        heading: { en: "Vertical screens, open forums and constant renewal", si: "සිරස් තිර, විවෘත සංවාද වේදිකා සහ නොනවතින අලුත් වීම" },
        said: [
          {
            en: "He believes vertical framing is here to stay: large vertical screens may soon be built, vertical films will be submitted to festivals, and the form will be taught. Any medium can be used to make cinema.",
            si: "සිරස් රාමුකරණය නොනැසී පවතිනු ඇතැයි ඔහු විශ්වාස කරයි: විශාල සිරස් තිර ඉක්මනින් හැදිය හැකිය, සිරස් චිත්‍රපට උළෙලවලට ඉදිරිපත් කෙරෙනු ඇති අතර, එම ආකෘතිය ඉගැන්වෙනු ඇත. ඕනෑම මාධ්‍යයකින් සිනමාව කළ හැකිය.",
          },
          {
            en: "Sri Lankan cinema needs forums. Like forum theatre, where the audience can stop a play and propose changes, films should be discussed by a small group before mass release — by universities, societies or the private sector. Things change only when people talk.",
            si: "ශ්‍රී ලාංකීය සිනමාවට සංවාද වේදිකා (forums) අවශ්‍යයි. ප්‍රේක්ෂකයාට නාට්‍යයක් නවතා වෙනස්කම් යෝජනා කළ හැකි ෆෝරම් තියටර් මෙන්, මහජනතාවට නිකුත් කිරීමට පෙර චිත්‍රපට කුඩා පිරිසක් විසින් සාකච්ඡා කළ යුතුය — විශ්වවිද්‍යාල, සමිති හෝ පෞද්ගලික අංශය මගින්. දේවල් වෙනස් වන්නේ මිනිසුන් කතා කරන විට පමණි.",
          },
          {
            en: "Since about 2010 cinema in Sri Lanka has been getting better, and access has widened beyond one small group. Yet some village children have only ever seen a film on a school projector, and giving them access matters as much as teaching film.",
            si: "2010 පමණ සිට ශ්‍රී ලංකාවේ සිනමාව හොඳ අතට හැරෙමින් ඇති අතර, ප්‍රවේශය එක් කුඩා කණ්ඩායමකින් ඔබ්බට පුළුල් වී ඇත. එහෙත් සමහර ගම්බද ළමුන් චිත්‍රපටයක් දැක ඇත්තේ පාසල් ප්‍රොජෙක්ටරයකින් පමණි; ඔවුන්ට ප්‍රවේශය ලබා දීම සිනමාව ඉගැන්වීම තරම්ම වැදගත්ය.",
          },
          {
            en: "Cinema never grows old — it is we who grow old. So filmmakers must keep renewing themselves; the next generation of cinematographers will go somewhere he cannot predict.",
            si: "සිනමාව කිසිදා පරණ වන්නේ නැත — පරණ වන්නේ අපිය. එබැවින් සිනමාකරුවන් නොනවත්වා අලුත් විය යුතුය; ඊළඟ පරම්පරාවේ කැමරා ශිල්පීන් ඔහුට පුරෝකථනය කළ නොහැකි තැනකට යනු ඇත.",
          },
        ],
        interpretation: {
          en: "His future is open and platform-driven: new screens, new audiences and new forms, kept healthy by open discussion and by filmmakers who refuse to stand still.",
          si: "ඔහුගේ අනාගතය විවෘත සහ වේදිකා මත පදනම් වූවකි: නව තිර, නව ප්‍රේක්ෂකයින් සහ නව ආකෘති — විවෘත සාකච්ඡාව සහ එක තැන නොසිටින සිනමාකරුවන් මගින් සජීවීව තබාගත් අනාගතයකි.",
        },
      },
      O6: {
        heading: { en: "His position in the overall pattern", si: "සමස්ත රටාව තුළ ඔහුගේ ස්ථානය" },
        said: [
          {
            en: "Like Channa Deshapriya, he sees today's new frame becoming tomorrow's convention — but goes further and rejects calling any past cinema “conventional” at all.",
            si: "චන්න දේශප්‍රිය මෙන්ම, අද නව රාමුව හෙට සම්මතයක් වන බව ඔහු දකී — නමුත් තවත් ඉදිරියට ගොස්, අතීත කිසිදු සිනමාවක් ‘සම්ප්‍රදායික’ ලෙස හැඳින්වීම ම ප්‍රතික්ෂේප කරයි.",
          },
          {
            en: "Like Prasanna Withanage, he reads Sri Lankan cinema historically and politically, adding the war's effect on night shows and audiences.",
            si: "ප්‍රසන්න විතානගේ මෙන්ම, ඔහු ශ්‍රී ලාංකීය සිනමාව ඓතිහාසිකව සහ දේශපාලනිකව කියවන අතර, යුද්ධය රාත්‍රී දර්ශනවලට සහ ප්‍රේක්ෂකයාට කළ බලපෑම එකතු කරයි.",
          },
          {
            en: "Like Ileka Ruwanpathirana, he holds that concepts must be learned before they are broken.",
            si: "ඉලේකා රුවන්පතිරණ මෙන්ම, සංකල්පනා බිඳීමට පෙර ඒවා ඉගෙන ගත යුතු බව ඔහු දරයි.",
          },
          {
            en: "He adds what no one else raised: the vertical, phone-based frame as the major break of the present, and the most detailed account so far of director–cinematographer collaboration.",
            si: "අන් කිසිවෙකු මතු නොකළ දේ ඔහු එකතු කරයි: වර්තමානයේ ප්‍රධාන බිඳීම ලෙස දුරකථනය පදනම් කරගත් සිරස් රාමුව, සහ අධ්‍යක්ෂ–කැමරා ශිල්පී සහයෝගීතාව පිළිබඳ මෙතෙක් ලැබුණු වඩාත් විස්තරාත්මක විග්‍රහය.",
          },
        ],
        interpretation: {
          en: "With five voices, a cinematographer's view sharpens the pattern: unconventionality is not only relative and temporary — it is driven as much by technology and viewing habits as by artists. The frame changes because the screen and the society change.",
          si: "හඬ පහක් සමඟ, කැමරා ශිල්පියෙකුගේ දැක්ම රටාව තියුණු කරයි: unconventional බව සාපේක්ෂ සහ තාවකාලික පමණක් නොවේ — එය කලාකරුවන් මෙන්ම තාක්ෂණය සහ නැරඹීමේ පුරුදු මගින් ද මෙහෙයවේ. රාමුව වෙනස් වන්නේ තිරය සහ සමාජය වෙනස් වන නිසාය.",
        },
      },
    },
    closing: {
      heading: { en: "Cinema never grows old — we do", si: "සිනමාව පරණ වන්නේ නැත — පරණ වන්නේ අපිය" },
      text: {
        en: "No cinematic work is ever simply conventional; it is the creation of its moment. Those who come after will make their own — so we have to keep renewing ourselves.",
        si: "කිසිදු සිනමා කෘතියක් සරලව සම්ප්‍රදායික නොවේ; එය එහි මොහොතේ නිර්මාණයයි. පසුව එන අය තමන්ගේම දේ නිර්මාණය කරනු ඇත — එබැවින් අප නොනවත්වා අලුත් විය යුතුය.",
      },
    },
    codes: [
      { en: "No agreed definition of a frame", si: "රාමුවට සම්මත නිර්වචනයක් නැත" },
      { en: "Frame = moving image that carries emotion", si: "රාමුව = හැඟීම රැගෙන යන චලන චිත්‍රය" },
      { en: "Locking only the emotional portion", si: "හැඟීම පෙනෙන කොටස පමණක් ලොක් කිරීම" },
      { en: "Balance", si: "සමබරතාව" },
      { en: "Inspiration from painting", si: "සිතුවම්වලින් ආභාසය" },
      { en: "1990s vs 2025 frames", si: "1990 දශකය සහ 2025 රාමු" },
      { en: "Concepts, not conventions", si: "සම්මත නොව සංකල්පනා" },
      { en: "Three-point lighting as a concept", si: "සංකල්පනාවක් ලෙස ත්‍රී-ලයිට් ක්‍රමය" },
      { en: "Past cinema made for its moment", si: "අතීත සිනමාව එහි මොහොතට හැදුණකි" },
      { en: "“Stubborn” filmmakers (2010–2016)", si: "‘හිතුවක්කාර’ සිනමාකරුවන් (2010–2016)" },
      { en: "Single-take and natural-light music videos", si: "තනි ෂොට් සහ ස්වාභාවික ආලෝක මියුසික් වීඩියෝ" },
      { en: "Less freedom in advertising", si: "වෙළඳ දැන්වීම්වල අඩු නිදහස" },
      { en: "National cinemas carry their society", si: "ජාතික සිනමාව තම සමාජය රැගෙන යයි" },
      { en: "Multi-religious visual culture", si: "බහු ආගමික දෘශ්‍ය සංස්කෘතිය" },
      { en: "War, last buses and lost night shows", si: "යුද්ධය, අවසාන බස් සහ අහිමි වූ රාත්‍රී දර්ශන" },
      { en: "Art-house vs mass audience gap", si: "කලාත්මක සහ මහජන ප්‍රේක්ෂක පරතරය" },
      { en: "The vertical turn", si: "සිරස් හැරවුම" },
      { en: "Viewers accept change unknowingly", si: "ප්‍රේක්ෂකයා නොදැනුවත්වම වෙනස පිළිගැනීම" },
      { en: "Director as leader and guide", si: "නායකයා සහ මඟපෙන්වන්නා ලෙස අධ්‍යක්ෂ" },
      { en: "Director and DoP as one", si: "අධ්‍යක්ෂ සහ DoP එක් අයෙක් ලෙස" },
      { en: "Unity across departments", si: "අංශ හරහා එකමුතුව" },
      { en: "Forums before release", si: "නිකුතුවට පෙර සංවාද වේදිකා" },
      { en: "Access for village children", si: "ගම්බද ළමුන්ට ප්‍රවේශය" },
      { en: "Cinema never grows old", si: "සිනමාව කිසිදා පරණ නොවේ" },
    ],
  },
  "boopathy-nalin": {
    number: 6,
    tags: [
      { en: "Visual politics", si: "දෘශ්‍ය දේශපාලනය" },
      { en: "Hegemony of beauty", si: "සුන්දරත්වයේ බලාධිපත්‍යය" },
      { en: "Rules have a history", si: "රීතිවලට ඉතිහාසයක් ඇත" },
      { en: "Institutionalised radicalism", si: "ආයතනගත වූ රැඩිකල් බව" },
      { en: "Asian visual traditions", si: "ආසියානු දෘශ්‍ය සම්ප්‍රදායන්" },
      { en: "Urban aesthetics", si: "නාගරික සෞන්දර්යය" },
      { en: "Visual literacy", si: "දෘශ්‍ය සාක්ෂරතාව" },
    ],
    objectives: {
      O1: {
        heading: { en: "The frame is cinema's strongest means of aesthetic expression", si: "රාමුව සිනමාවේ ප්‍රබලතම සෞන්දර්යාත්මක ප්‍රකාශන මාධ්‍යයයි" },
        said: [
          {
            en: "The frame has been interpreted in many ways in theory. For him it is above all the most powerful means of intensifying expression and revealing it aesthetically.",
            si: "රාමුව න්‍යායාත්මකව විවිධ ආකාරයෙන් අර්ථකථනය කර ඇත. ඔහුට අනුව එය ප්‍රධාන වශයෙන්ම ප්‍රකාශනය තීව්‍ර කිරීමට සහ එය සෞන්දර්යාත්මකව එළිදැක්වීමට ඇති ප්‍රබලතම මාධ්‍යයයි.",
          },
          {
            en: "He does not fully accept the older idea that film is primarily visual: film is sight and sound together, and sometimes sound runs in parallel and decides as much as the image. He refers to the sound theorist Michel Chion on “visual domination”.",
            si: "චිත්‍රපටය මූලිකවම දෘශ්‍ය එකක් ය යන පැරණි අදහසට ඔහු සම්පූර්ණයෙන් එකඟ නොවේ: චිත්‍රපටය යනු දර්ශනය සහ ශබ්දය දෙකම ය; සමහර විට ශබ්දය රූපයට සමාන්තරව ගමන් කරමින් රූපය තරමටම තීරණය කරයි. “දෘශ්‍ය ආධිපත්‍යය” පිළිබඳව ඔහු ශබ්ද න්‍යායාචාර්ය මිෂෙල් ෂියොන් (Michel Chion) සිහිපත් කරයි.",
          },
          {
            en: "In narrative films the most important task of the image is to create what cannot be said in words or dialogue — a mood, an atmosphere — through lighting, composition and camera movement. That visual treatment is the most serious part of the work.",
            si: "කතා සහිත චිත්‍රපටවල රූපයේ වැදගත්ම කාර්යය වන්නේ වචනයෙන් හෝ දෙබසින් කිව නොහැකි දේ — මනෝභාවයක්, වාතාවරණයක් — ආලෝකකරණය, සංයුතිය සහ කැමරා චලනය හරහා නිර්මාණය කිරීමයි. එම දෘශ්‍ය ප්‍රතිකාරය (visual treatment) වැඩයේ බරපතලම කොටසයි.",
          },
          {
            en: "Something becomes conventional once institutions accept it — when festivals reward it and schools teach it. Handheld camera was radical in the 1960s; later schools taught how to shoot handheld, and it reached festival winners, Oscar nominees and Sri Lankan films.",
            si: "යමක් සම්ප්‍රදායික වන්නේ ආයතන එය පිළිගත් විටය — උළෙල සම්මාන දෙන විට සහ පාසල් එය උගන්වන විට. 1960 දශකයේ හෑන්ඩ්හෙල්ඩ් කැමරාව රැඩිකල් විය; පසුව පාසල් එය උගන්වන්නට පටන් ගත් අතර, උළෙල සම්මාන ලැබූ චිත්‍රපට, ඔස්කාර් නාමයෝජිත චිත්‍රපට සහ ශ්‍රී ලාංකීය චිත්‍රපට දක්වා එය පැතිර ගියේය.",
          },
        ],
        interpretation: {
          en: "As a film historian and critic, he defines the frame by its aesthetic power and the unconventional by its relation to institutions: a frame is unconventional while it stands outside what festivals and schools have absorbed.",
          si: "සිනමා ඉතිහාසඥයෙකු සහ විචාරකයෙකු ලෙස, ඔහු රාමුව එහි සෞන්දර්යාත්මක බලය අනුවත්, unconventional බව ආයතන සමඟ ඇති සම්බන්ධය අනුවත් නිර්වචනය කරයි: රාමුවක් unconventional වන්නේ උළෙල සහ පාසල් එය අවශෝෂණය කරගන්නා තුරු පමණි.",
        },
      },
      O2: {
        heading: { en: "Rules are not laws — they have a history, and knowing it is what lets you break them", si: "රීති නීති නොවේ — ඒවාට ඉතිහාසයක් ඇත; එය දැනගැනීමෙන් ඒවා බිඳිය හැකිය" },
        said: [
          {
            en: "Cinema has rules, not laws, and they did not appear from nowhere: leading lines, the golden ratio and the rule of thirds came from Renaissance painting; Russian avant-garde montage and German Expressionism shaped the 1920s; later the new waves — Italian neorealism and, recently, the Romanian New Wave of directors such as Radu Jude — broke them again.",
            si: "සිනමාවේ ඇත්තේ නීති නොව රීති ය; ඒවා නිකම්ම ආවේ නැත: leading lines, ගෝල්ඩන් රේෂියෝව සහ rule of thirds පුනරුදය කාලීන චිත්‍ර කලාවෙන් ආවේය; රුසියානු ඇවන්ගාඩ් මොන්ටාජ් සහ ජර්මානු ප්‍රකාශනවාදය 1920 දශකය හැඩගැස්වීය; පසුව නව රැළි — ඉතාලි නව යථාර්ථවාදය සහ මෑතදී රාඩු ජූඩ් වැනි අධ්‍යක්ෂවරුන්ගේ රුමේනියානු නව රැල්ල — නැවත ඒවා බිඳ දැමීය.",
          },
          {
            en: "If you are serious about film, you must understand why each rule formed by going back to its social background: Eisenstein's montage grew alongside communist ideas and Marx's dialectics — two images collide to produce a third.",
            si: "ඔබ සිනමාව ගැන බරපතල නම්, එක් එක් රීතිය හැදුණේ ඇයිද යන්න එහි සමාජ පසුබිමට ගොස් තේරුම් ගත යුතුය: අයිසන්ස්ටයින්ගේ මොන්ටාජ් වර්ධනය වූයේ කොමියුනිස්ට් අදහස් සහ මාක්ස්ගේ අපෝහකවාදය සමඟය — රූප දෙකක් ගැටී තුන්වන අර්ථයක් නිපදවයි.",
          },
          {
            en: "Even mainstream cinema now breaks rules: in Nelson's <i>Jailer</i>, Rajinikanth's star power lets him stand out of focus, off-composition, in the background of a song. Underground cinema and films such as Apichatpong Weerasethakul's <i>Mekong Hotel</i>, shot overexposed on an amateur camera, go further and reject aesthetics altogether.",
            si: "දැන් ප්‍රධාන ධාරාවේ සිනමාව පවා රීති බිඳියි: නෙල්සන්ගේ <i>Jailer</i> චිත්‍රපටයේ, රජනිකාන්ත්ගේ තරු බලය නිසා ගීතයක පසුබිමේ ඔහු ෆෝකස් නොවී, සංයුතියෙන් පිටත සිටීමට ඉඩ ලැබේ. භූගත සිනමාව සහ ඇමචූර් කැමරාවකින් over-exposed ලෙස රූගත කළ අපිචාට්පොං වීරසේතකුල්ගේ <i>Mekong Hotel</i> වැනි චිත්‍රපට තවත් ඉදිරියට ගොස් සෞන්දර්යය සම්පූර්ණයෙන්ම ප්‍රතික්ෂේප කරයි.",
          },
          {
            en: "A radical film usually keeps one or two accepted rules and breaks the rest — like a radical musician who keeps the melody's discipline but plays off the beat.",
            si: "රැඩිකල් චිත්‍රපටයක් සාමාන්‍යයෙන් පිළිගත් රීති එකක් හෝ දෙකක් රැක, ඉතිරිය බිඳියි — තනුවේ ශික්ෂණය රැකගෙන ඕෆ්-බීට් වාදනය කරන රැඩිකල් සංගීතඥයෙකු මෙන්.",
          },
        ],
        interpretation: {
          en: "Like Prasanna Withanage, he distinguishes rules from laws; like Ileka Ruwanpathirana, he grounds freedom in knowledge. His particular contribution is historical: rules are social products, so breaking them meaningfully requires knowing where they came from.",
          si: "ප්‍රසන්න විතානගේ මෙන්ම ඔහු රීති සහ නීති වෙන් කරයි; ඉලේකා රුවන්පතිරණ මෙන්ම නිදහස දැනුම මත පදනම් කරයි. ඔහුගේ විශේෂ දායකත්වය ඓතිහාසිකය: රීති සමාජ නිෂ්පාදන ය; එබැවින් ඒවා අර්ථවත්ව බිඳීමට ඒවා පැමිණි තැන දැනගත යුතුය.",
        },
      },
      O3: {
        heading: { en: "The politics of aesthetics: who decides what is beautiful", si: "සෞන්දර්යයේ දේශපාලනය: සුන්දර දේ තීරණය කරන්නේ කවුද" },
        said: [
          {
            en: "He is most interested in “visual politics” — not party politics, but the politics inside aesthetics. The way landscapes are shot carries a history: from Westerns and cowboy films, from the mountain (Heimat) films of Hitler's era to <i>The Sound of Music</i>, to Bollywood songs in the hills. There is a hegemony in the history of beauty, and he prefers films that break it.",
            si: "ඔහු වඩාත් උනන්දු වන්නේ “දෘශ්‍ය දේශපාලනය” ගැනයි — පක්ෂ දේශපාලනය නොව, සෞන්දර්යය තුළ ඇති දේශපාලනය. භූ දර්ශන රූගත කරන ආකාරයට ඉතිහාසයක් ඇත: වෙස්ටර්න් සහ කව්බෝයි චිත්‍රපටවල සිට, හිට්ලර්ගේ යුගයේ කඳුකර (Heimat) චිත්‍රපටවල සිට <i>The Sound of Music</i> දක්වා, කඳුකරයේ බොලිවුඩ් ගීත දක්වා. සුන්දරත්වයේ ඉතිහාසය තුළ බලාධිපත්‍යයක් ඇති අතර, ඔහු එය බිඳින චිත්‍රපටවලට කැමතිය.",
          },
          {
            en: "Sri Lankan visual treatment is largely Eurocentric — Rembrandt or Caravaggio lighting — and even popular Buddhist painting followed a Western style. He calls for a mix with Asian traditions instead: Kandyan temple murals, Santiniketan painters such as Nandalal Bose. This is not nationalism, he stresses.",
            si: "ශ්‍රී ලාංකීය දෘශ්‍ය ප්‍රතිකාරය බොහෝ දුරට යුරෝකේන්ද්‍රීය ය — රෙම්බ්‍රාන්ට් හෝ කැරවාජියෝ ආලෝකකරණය — ජනප්‍රිය බෞද්ධ චිත්‍ර කලාව පවා බටහිර ශෛලියක් අනුගමනය කළේය. ඒ වෙනුවට ආසියානු සම්ප්‍රදායන් සමඟ මිශ්‍රණයක් ඔහු ඉල්ලා සිටී: මහනුවර යුගයේ විහාර සිතුවම්, නන්දලාල් බෝස් වැනි ශාන්තිනිකේතන් චිත්‍ර ශිල්පීන්. මෙය ජාතිකවාදයක් නොවන බව ඔහු අවධාරණය කරයි.",
          },
          {
            en: "For him the most radical break in Sri Lankan cinema is Asoka Handagama's <i>Me Mage Sandai</i>: static, shot by shot, no pan, tilt or camera movement, shot by Channa Deshapriya and inspired by Kandyan temple murals, whose long horizontal strips work like long takes compressed into single frames.",
            si: "ඔහුට අනුව ශ්‍රී ලාංකීය සිනමාවේ රැඩිකල්ම බිඳීම අශෝක හඳගමගේ <i>මේ මගේ සඳයි</i> ය: ස්ථිතික, ෂොට් එකෙන් ෂොට් එකට, පෑන්, ටිල්ට් හෝ කැමරා චලනයක් නැතිව, චන්න දේශප්‍රිය විසින් රූගත කළ, මහනුවර විහාර සිතුවම්වලින් ආභාසය ලැබූ — එම සිතුවම්වල දිගු තිරස් තීරු තනි රාමුවලට හැකිළූ දිගු ෂොට් (long takes) මෙන් ක්‍රියා කරයි.",
          },
          {
            en: "He traces Sri Lanka's groundbreaking points: the camera leaving the studio and naturalistic lighting with Lester James Peries; radical handheld in <i>Sath Samudura</i>, then Nihal Singha, Dharmasena Pathiraja and Sugathapala Senarath Yapa; slow pace and poetic realism with Prasanna Vithanage, with interior lighting by cinematographers such as M.D. Mahindapala; and the saturated “Bollywood beauty” of mainstream films such as <i>Rosa Wasanthaya</i>.",
            si: "ඔහු ශ්‍රී ලංකාවේ මංසන්ධි ලක්ෂ්‍ය සොයා යයි: ලෙස්ටර් ජේම්ස් පීරිස් සමඟ කැමරාව ස්ටූඩියෝවෙන් එළියට යාම සහ ස්වාභාවිකවාදී ආලෝකකරණය; <i>සත් සමුදුර</i> හි රැඩිකල් හෑන්ඩ්හෙල්ඩ්, ඉන්පසු නිහාල් සිංහ, ධර්මසේන පතිරාජ සහ සුගතපාල සෙනරත් යාපා; ප්‍රසන්න විතානගේ සමඟ මන්දගාමී රිද්මය සහ කාව්‍යාත්මක යථාර්ථවාදය, එම්.ඩී. මහින්දපාල වැනි කැමරා ශිල්පීන්ගේ ගෘහස්ථ ආලෝකකරණය සමඟ; සහ <i>රෝස වසන්තය</i> වැනි ප්‍රධාන ධාරාවේ චිත්‍රපටවල සන්තෘප්ත “බොලිවුඩ් සුන්දරත්වය”.",
          },
          {
            en: "After <i>Purahanda Kaluwara</i> and <i>Me Mage Sandai</i>, the beautified dry-zone “border village” and a pale, brownish palette became an art-house trend that short filmmakers copied, where saturated green or yellow was not allowed. Vimukthi Jayasundara broke it in <i>Ahasin Wetei</i>, setting the state's struggle with young insurgents against tourism.",
            si: "<i>පුරහඳ කළුවර</i> සහ <i>මේ මගේ සඳයි</i> න් පසු, සුන්දර කළ වියළි කලාපීය “මායිම් ගම්මානය” සහ පඬු, දුඹුරු වර්ණ තලය කෙටි චිත්‍රපට කරන්නන් ද අනුකරණය කළ කලාත්මක චිත්‍රපට ප්‍රවණතාවක් බවට පත් විය; එහි සන්තෘප්ත කොළ හෝ කහ පාට සඳහා ඉඩක් නොවීය. විමුක්ති ජයසුන්දර <i>අහසින් වැටේ</i> හිදී, රාජ්‍යය සහ තරුණ කැරලිකරුවන් අතර අරගලය සංචාරක ව්‍යාපාරය සමඟ ගැටෙන ලෙස තබමින් එය බිඳ දැමීය.",
          },
          {
            en: "He strongly disagrees with Sarachchandra's warning against shooting the “concrete jungle”: we live in cities and must find their aesthetics. Recent films such as <i>Walampuri</i> and <i>Bahuchithawadiya</i> bring a new urban aesthetic — the dark, lumpen areas of the city — for the first time since Pathiraja.",
            si: "“කොන්ක්‍රීට් වනාන්තරය” රූගත නොකරන්නැයි සරච්චන්ද්‍රයන් කළ අවවාදයට ඔහු දැඩිව විරුද්ධ ය: අප ජීවත් වන්නේ නගරවල නිසා ඒවායේ සෞන්දර්යය සොයාගත යුතුය. <i>වලම්පුරි</i> සහ <i>බහුචිත්තවාදියා</i> වැනි මෑත චිත්‍රපට පතිරාජගෙන් පසු පළමු වරට නගරයේ අඳුරු, ලුම්පන් ප්‍රදේශ ඇතුළු නව නාගරික සෞන්දර්යයක් ගෙන එයි.",
          },
        ],
        interpretation: {
          en: "He gives the context a new angle: not only politics and the market, but the politics of beauty itself. What Sri Lankan cinema treats as beautiful — Eurocentric lighting, Bollywood colour, the pale village — is inherited, and unconventional framing means exposing and breaking that inheritance.",
          si: "ඔහු සන්දර්භයට නව කෝණයක් ලබා දෙයි: දේශපාලනය සහ වෙළඳපොළ පමණක් නොව, සුන්දරත්වයේම දේශපාලනය. ශ්‍රී ලාංකීය සිනමාව සුන්දර ලෙස සලකන දේ — යුරෝකේන්ද්‍රීය ආලෝකකරණය, බොලිවුඩ් වර්ණ, පඬු පැහැති ගම්මානය — උරුම කරගත් ඒවා ය; unconventional රාමුකරණය යනු එම උරුමය හෙළිදරව් කර බිඳීමයි.",
        },
      },
      O4: {
        heading: { en: "Writer, director and cinematographer must sit together", si: "තිර රචකයා, අධ්‍යක්ෂවරයා සහ කැමරා ශිල්පියා එකට වාඩි විය යුතුය" },
        said: [
          {
            en: "Speaking as a screenwriter, he has been lucky: the directors he works with involve him closely in pre-production and give him room.",
            si: "තිර රචකයෙකු ලෙස කතා කරමින්, ඔහු වාසනාවන්ත බව පවසයි: ඔහු සමඟ වැඩ කරන අධ්‍යක්ෂවරුන් පූර්ව නිෂ්පාදන කටයුතුවලදී ඔහුව සමීපව සම්බන්ධ කර ගෙන ඔහුට ඉඩ ලබා දෙති.",
          },
          {
            en: "A professional screenwriter has no right to write shots, cuts or camera movements; only writer-directors do that. But a writer can describe in a way that implies the frame — “through the tears in her eyes we see the reflection of a Bodhi tree” is, in effect, an extreme close-up.",
            si: "වෘත්තීය තිර රචකයෙකුට ෂොට්, කට් හෝ කැමරා චලන ලිවීමට අයිතියක් නැත; එය කරන්නේ ලේඛක-අධ්‍යක්ෂවරුන් පමණි. නමුත් රචකයෙකුට රාමුව ඇඟවෙන ලෙස විස්තර කළ හැකිය — “ඇගේ ඇස්වල කඳුළු අතරින් බෝධියක ඡායාව පෙනේ” යන්න ඇත්තෙන්ම extreme close-up එකකි.",
          },
          {
            en: "Many Sri Lankan films are made by writer-directors. Where there are three people, it is very important that writer, director and cinematographer sit together and talk — but the final decision on a shot must belong to the director and cinematographer; the writer can only suggest.",
            si: "බොහෝ ශ්‍රී ලාංකීය චිත්‍රපට ලේඛක-අධ්‍යක්ෂවරුන් විසින් නිර්මාණය කෙරේ. තිදෙනෙකු සිටින තැන, රචකයා, අධ්‍යක්ෂවරයා සහ කැමරා ශිල්පියා එකට වාඩි වී කතා කිරීම ඉතා වැදගත්ය — නමුත් ෂොට් එකක් පිළිබඳ අවසන් තීරණය අධ්‍යක්ෂවරයාට සහ කැමරා ශිල්පියාට අයත් විය යුතුය; රචකයාට කළ හැක්කේ යෝජනා කිරීම පමණි.",
          },
        ],
        interpretation: {
          en: "He adds the screenwriter to the framing relationship: the frame begins in the writing, but authority over it belongs to the director–cinematographer pair.",
          si: "ඔහු රාමුකරණ සම්බන්ධතාවට තිර රචකයා එකතු කරයි: රාමුව ලේඛනයේ සිටම ආරම්භ වුවද, ඒ පිළිබඳ බලය අධ්‍යක්ෂ–කැමරා ශිල්පී යුගලයට අයත්ය.",
        },
      },
      O5: {
        heading: { en: "Serious discussion, visual literacy and an Asian–Western mix", si: "බරපතල සාකච්ඡාව, දෘශ්‍ය සාක්ෂරතාව සහ ආසියානු–බටහිර මිශ්‍රණයක්" },
        said: [
          {
            en: "Much of what is called experimental in Sri Lanka is a small break from the ordinary; truly radical experimental cinema is something like Andy Warhol's eight-hour <i>Empire</i>. Serious experiment means going deeply into the subject without fear — “not a madman with a camera”.",
            si: "ශ්‍රී ලංකාවේ පර්යේෂණාත්මක (experimental) යැයි කියන බොහෝ දේ සාමාන්‍යයෙන් කුඩා බිඳීමකි; සැබෑ රැඩිකල් පර්යේෂණාත්මක සිනමාව ඇන්ඩි වෝහෝල්ගේ පැය අටක <i>Empire</i> වැනි දෙයකි. බරපතල පර්යේෂණයක් යනු බියෙන් තොරව විෂයයට ගැඹුරින් ඇතුළු වීමයි — “කැමරාවක් අතැති පිස්සෙක්” නොවේ.",
          },
          {
            en: "Interesting ideas appear on Facebook and online platforms and are forgotten the next day. Sri Lanka lacks written, serious discussion of cinema's aesthetics; most criticism — his own included — is ideological, and there are no academic journals at that level, unlike the film magazines of the past.",
            si: "රසවත් අදහස් ෆේස්බුක් සහ අන්තර්ජාල වේදිකාවල පළ වී පසුදා අමතක වේ. ශ්‍රී ලංකාවට සිනමාවේ සෞන්දර්යය පිළිබඳ ලිඛිත, බරපතල සාකච්ඡාව අඩුය; බොහෝ විචාර — ඔහුගේම ද ඇතුළුව — දෘෂ්ටිවාදී ය; අතීතයේ සිනමා සඟරා මෙන් එම මට්ටමේ ශාස්ත්‍රීය සඟරා නැත.",
          },
          {
            en: "The biggest weakness of Sri Lankan filmmakers is that they know only cinema — not photography, painting or exhibitions. They cannot name five contemporary painters or still photographers such as Lionel Wendt. They should study visual history back to cave painting, as Werner Herzog's <i>Cave of Forgotten Dreams</i> does.",
            si: "ශ්‍රී ලාංකීය සිනමාකරුවන්ගේ විශාලතම දුර්වලතාව වන්නේ ඔවුන් දන්නේ සිනමාව පමණක් වීමයි — ඡායාරූපකරණය, චිත්‍ර කලාව හෝ ප්‍රදර්ශන නොවේ. සමකාලීන චිත්‍ර ශිල්පීන් පස් දෙනෙකු හෝ ලයනල් වෙන්ඩ්ට් වැනි ඡායාරූප ශිල්පීන් නම් කිරීමට ඔවුන්ට නොහැකිය. වර්නර් හර්සොග්ගේ <i>Cave of Forgotten Dreams</i> මෙන් ගල් යුගයේ සිතුවම් දක්වා දෘශ්‍ය ඉතිහාසය ඔවුන් හැදෑරිය යුතුය.",
          },
          {
            en: "If filmmakers study this, they will become radical without trying. Western cinema must be learned, but combined with Buddhist, national and Asian visual traditions it could produce a genuinely new mix.",
            si: "සිනමාකරුවන් මේවා හැදෑරුවොත්, උත්සාහ නොකරම ඔවුන් රැඩිකල් වනු ඇත. බටහිර සිනමාව ඉගෙන ගත යුතුමය; නමුත් එය බෞද්ධ, ජාතික සහ ආසියානු දෘශ්‍ය සම්ප්‍රදායන් සමඟ එකතු කළහොත් සැබෑ නව මිශ්‍රණයක් බිහි විය හැකිය.",
          },
        ],
        interpretation: {
          en: "His future is built on knowledge: a cinema that studies the whole of visual history, writes about itself seriously, and joins Western craft with Asian visual traditions.",
          si: "ඔහුගේ අනාගතය දැනුම මත ගොඩනැගේ: සමස්ත දෘශ්‍ය ඉතිහාසයම හදාරන, තමන් ගැනම බරපතල ලෙස ලියන, බටහිර ශිල්පය ආසියානු දෘශ්‍ය සම්ප්‍රදායන් සමඟ එක් කරන සිනමාවක්.",
        },
      },
      O6: {
        heading: { en: "His position in the overall pattern", si: "සමස්ත රටාව තුළ ඔහුගේ ස්ථානය" },
        said: [
          {
            en: "He confirms several industry points from outside: he names <i>Me Mage Sandai</i> and Channa Deshapriya's camerawork, as Channa did, and like Channa notes that short filmmakers copied its look.",
            si: "ඔහු කර්මාන්ත හඬවල කරුණු කිහිපයක් පිටතින් තහවුරු කරයි: චන්න මෙන්ම ඔහු <i>මේ මගේ සඳයි</i> සහ චන්න දේශප්‍රියගේ කැමරා කර්මය නම් කරන අතර, චන්න මෙන්ම කෙටි චිත්‍රපට කරන්නන් එහි පෙනුම අනුකරණය කළ බව සඳහන් කරයි.",
          },
          {
            en: "He shares Prasanna Withanage's distinction between rules and laws and his historical lineage of Sri Lankan cinema, and credits Prasanna and M.D. Mahindapala with poetic realism and interior lighting.",
            si: "රීති සහ නීති අතර වෙනස සහ ශ්‍රී ලාංකීය සිනමාවේ ඓතිහාසික පරම්පරාව යන අදහස් ඔහු ප්‍රසන්න විතානගේ සමඟ බෙදාගන්නා අතර, කාව්‍යාත්මක යථාර්ථවාදය සහ ගෘහස්ථ ආලෝකකරණය සඳහා ප්‍රසන්න සහ එම්.ඩී. මහින්දපාල ට ගෞරවය දෙයි.",
          },
          {
            en: "Like Ileka Ruwanpathirana, he sees convention as a largely Western grammar and ties freedom to knowledge — but goes further, calling for Asian visual traditions and wider visual literacy.",
            si: "ඉලේකා රුවන්පතිරණ මෙන්, ඔහු සම්මතය බොහෝ දුරට බටහිර ව්‍යාකරණයක් ලෙස දකින අතර නිදහස දැනුමට බැඳ තබයි — නමුත් ආසියානු දෘශ්‍ය සම්ප්‍රදායන් සහ පුළුල් දෘශ්‍ය සාක්ෂරතාවක් ඉල්ලා සිටිමින් ඊට වඩා ඉදිරියට යයි.",
          },
          {
            en: "He adds what no one else raised: the politics of beauty, and a theory of how the radical becomes conventional once festivals and schools institutionalise it.",
            si: "අන් කිසිවෙකු මතු නොකළ දේ ඔහු එකතු කරයි: සුන්දරත්වයේ දේශපාලනය, සහ උළෙල සහ පාසල් එය ආයතනගත කළ පසු රැඩිකල් දේ සම්ප්‍රදායික වන ආකාරය පිළිබඳ න්‍යායක්.",
          },
        ],
        interpretation: {
          en: "With two academics, the academic view is taking shape: unconventionality is read through history, theory and knowledge, and the main constraint is not only the market but inherited ideas of beauty and the institutions that teach them.",
          si: "ශාස්ත්‍රඥයන් දෙදෙනෙකු සමඟ ශාස්ත්‍රීය දැක්ම හැඩගැසෙමින් පවතී: unconventional බව කියවෙන්නේ ඉතිහාසය, න්‍යාය සහ දැනුම ඔස්සේ ය; ප්‍රධාන සීමාව වෙළඳපොළ පමණක් නොව, උරුම කරගත් සුන්දරත්ව අදහස් සහ ඒවා උගන්වන ආයතන ද වේ.",
        },
      },
    },
    closing: {
      heading: { en: "Study it all, and you will become radical without trying", si: "සියල්ල හදාරන්න — උත්සාහ නොකරම රැඩිකල් වනු ඇත" },
      text: {
        en: "Radical filmmakers studied film history thoroughly before they broke its rules. Learn painting, photography and the whole of visual history — Western and Asian — and the new will follow.",
        si: "රැඩිකල් සිනමාකරුවන් සිනමාවේ රීති බිඳීමට පෙර එහි ඉතිහාසය හොඳින් හැදෑරූහ. චිත්‍ර කලාව, ඡායාරූපකරණය සහ — බටහිර මෙන්ම ආසියානු — සමස්ත දෘශ්‍ය ඉතිහාසය ඉගෙන ගන්න; අලුත් දේ ඉබේම පැමිණේ.",
      },
    },
    codes: [
      { en: "Frame = strongest means of aesthetic expression", si: "රාමුව = ප්‍රබලතම සෞන්දර්යාත්මක ප්‍රකාශනය" },
      { en: "Sight and sound, not image alone", si: "රූපය පමණක් නොව දර්ශනය සහ ශබ්දය" },
      { en: "Creating what dialogue cannot say", si: "දෙබසින් කිව නොහැකි දේ නිර්මාණය කිරීම" },
      { en: "Visual politics, not party politics", si: "පක්ෂ දේශපාලනය නොව දෘශ්‍ය දේශපාලනය" },
      { en: "Hegemony in the history of beauty", si: "සුන්දරත්ව ඉතිහාසයේ බලාධිපත්‍යය" },
      { en: "Rules, not laws — with a social history", si: "නීති නොව රීති — සමාජ ඉතිහාසයක් සහිතව" },
      { en: "Montage and dialectics", si: "මොන්ටාජ් සහ අපෝහකවාදය" },
      { en: "Keep two rules, break the rest", si: "රීති දෙකක් රැක ඉතිරිය බිඳීම" },
      { en: "Mainstream also breaks rules (Jailer)", si: "ප්‍රධාන ධාරාව ද රීති බිඳියි (Jailer)" },
      { en: "Radical becomes convention when institutionalised", si: "ආයතනගත වූ විට රැඩිකල් දේ සම්මත වීම" },
      { en: "Handheld: radical → taught", si: "හෑන්ඩ්හෙල්ඩ්: රැඩිකල් → උගන්වන දෙයක්" },
      { en: "Me Mage Sandai and Kandyan murals", si: "මේ මගේ සඳයි සහ මහනුවර විහාර සිතුවම්" },
      { en: "Eurocentric lighting", si: "යුරෝකේන්ද්‍රීය ආලෝකකරණය" },
      { en: "Asian visual traditions", si: "ආසියානු දෘශ්‍ය සම්ප්‍රදායන්" },
      { en: "Groundbreaking points in Sri Lankan cinema", si: "ශ්‍රී ලාංකීය සිනමාවේ මංසන්ධි ලක්ෂ්‍ය" },
      { en: "Bollywood beauty in the mainstream", si: "ප්‍රධාන ධාරාවේ බොලිවුඩ් සුන්දරත්වය" },
      { en: "Border-village, pale-palette art-house trend", si: "මායිම් ගම්මාන, පඬු වර්ණ කලාත්මක ප්‍රවණතාව" },
      { en: "Urban aesthetics vs the “concrete jungle”", si: "නාගරික සෞන්දර්යය සහ “කොන්ක්‍රීට් වනාන්තරය”" },
      { en: "Writer can imply, not dictate, the shot", si: "රචකයාට ෂොට් එක ඇඟවිය හැක, නියම කළ නොහැක" },
      { en: "Final shot decision: director + DoP", si: "අවසන් ෂොට් තීරණය: අධ්‍යක්ෂ + DoP" },
      { en: "Serious experiment, not a madman with a camera", si: "කැමරාවක් අතැති පිස්සෙක් නොව බරපතල පර්යේෂණය" },
      { en: "Lack of written aesthetic criticism", si: "ලිඛිත සෞන්දර්ය විචාරයේ හිඟය" },
      { en: "Visual literacy beyond cinema", si: "සිනමාවෙන් ඔබ්බට දෘශ්‍ය සාක්ෂරතාව" },
    ],
  },
  "hasantha-dissanayake": {
    number: 7,
    tags: [
      { en: "Framing as deep visual thinking", si: "ගැඹුරු දෘශ්‍ය චින්තනයක් ලෙස රාමුකරණය" },
      { en: "Mise-en-scène", si: "මිසොන්සෙන් (Mise-en-scène)" },
      { en: "Basics before breaking", si: "බිඳීමට පෙර මූලිකාංග" },
      { en: "National cinematic signatures", si: "ජාතික සිනමා අනන්‍යතා" },
      { en: "A style that became a formula", si: "සූත්‍රයක් බවට පත් වූ ශෛලියක්" },
      { en: "Director–DoP chemistry", si: "අධ්‍යක්ෂ–DoP රසායනය" },
    ],
    objectives: {
      O1: {
        heading: { en: "Framing is deep visual thinking — every detail inside the box matters", si: "රාමුකරණය ගැඹුරු දෘශ්‍ය චින්තනයකි — කොටුව තුළ සෑම විස්තරයක්ම වැදගත්ය" },
        said: [
          {
            en: "What separates cinematography from ordinary video is framing. We work inside a box, and there is a whole philosophy in how that box is built — it is not something you get by simply putting a camera down.",
            si: "සිනමාකරණය සාමාන්‍ය වීඩියෝවෙන් වෙන් කරන ප්‍රධානම දෙය රාමුකරණයයි. අප වැඩ කරන්නේ කොටුවක් තුළය; එම කොටුව ගොඩනගන ආකාරයේ සම්පූර්ණ දර්ශනයක් ඇත — එය නිකම්ම කැමරාවක් තබා ලබාගත හැකි දෙයක් නොවේ.",
          },
          {
            en: "The most important idea is mise-en-scène: lighting, art and production design, set design and actor blocking — everything inside the frame — together with composition.",
            si: "වැදගත්ම අදහස මිසොන්සෙන් (mise-en-scène) ය: ආලෝකකරණය, කලා සහ නිෂ්පාදන සැලසුම, කට්ටල සැලසුම සහ නළු නිළියන් ස්ථානගත කිරීම (actor blocking) — රාමුව තුළ ඇති සියල්ල — සංයුතිය සමඟ.",
          },
          {
            en: "Every detail is thought through. Even whether a crack in a wall is there or not matters, because it comes from the script and the director's intention.",
            si: "සෑම විස්තරයක්ම කල්පනා කර තීරණය කෙරේ. බිත්තියක ඉරිතැලීමක් තිබේද නැද්ද යන්න පවා වැදගත් වන්නේ, එය පිටපතෙන් සහ අධ්‍යක්ෂවරයාගේ අභිප්‍රායෙන් පැමිණෙන නිසාය.",
          },
          {
            en: "Asked to sum it up, he calls framing “deep visual thinking”.",
            si: "එක් වචනයකින් කියන්නැයි ඇසූ විට, ඔහු රාමුකරණය “ගැඹුරු දෘශ්‍ය චින්තනය” (deep visual thinking) ලෙස හඳුන්වයි.",
          },
          {
            en: "Unconventional frames are those that step outside theory in some way — not simply a Dutch angle, which is already in the theory, but composing differently within it. Nobody can say such a shot is “wrong”; the choice is in the filmmaker's hands.",
            si: "Unconventional රාමු යනු යම් ආකාරයකින් න්‍යායෙන් පිටතට පනින ඒවා ය — දැනටමත් න්‍යායේ ඇති ඩච් කෝණයක් (Dutch angle) පමණක් නොව, එය තුළ වෙනස් ලෙස සංයුති කිරීම. එවැනි ෂොට් එකක් “වැරදියි” කියා කිසිවෙකුට කිව නොහැක; තේරීම ඇත්තේ සිනමාකරුවාගේ අතේය.",
          },
        ],
        interpretation: {
          en: "He defines the frame through mise-en-scène: a fully designed space where nothing is accidental. Unconventionality is a departure from learned theory, and its legitimacy rests with the filmmaker's choice rather than with any fixed standard.",
          si: "ඔහු රාමුව නිර්වචනය කරන්නේ මිසොන්සෙන් ඔස්සේය: කිසිවක් අහම්බෙන් නොවන, සම්පූර්ණයෙන් සැලසුම් කළ අවකාශයකි. Unconventional බව යනු ඉගෙනගත් න්‍යායෙන් ඉවත් වීමක් වන අතර, එහි නීත්‍යනුකූලභාවය රඳා පවතින්නේ ස්ථාවර ප්‍රමිතියක් මත නොව සිනමාකරුවාගේ තේරීම මතය.",
        },
      },
      O2: {
        heading: { en: "Learn the basics first; break the theory when the work demands it", si: "මුලින් මූලිකාංග ඉගෙන ගන්න; වැඩය ඉල්ලන විට න්‍යාය බිඳින්න" },
        said: [
          {
            en: "Like painting and sculpture, cinema has passed through eras — modernism, postmodernism — and cinema, framing and cinematography all have theories: the rule of thirds, the golden ratio and so on.",
            si: "චිත්‍ර සහ මූර්ති කලාව මෙන්ම සිනමාව ද යුග ගණනාවක් පසු කර ඇත — නූතනවාදය, පශ්චාත් නූතනවාදය — සිනමාවට, රාමුකරණයට සහ සිනමාකරණයට න්‍යායන් ඇත: rule of thirds, golden ratio ආදිය.",
          },
          {
            en: "Whether you must know a theory before breaking it is controversial. As an academic he says yes, though filmmakers who are not academics — in Sri Lanka and abroad — would argue you can break it without knowing it.",
            si: "න්‍යායක් බිඳීමට පෙර එය දැනගත යුතුද යන්න විවාදාත්මකය. ශාස්ත්‍රඥයෙකු ලෙස ඔහු ඔව් යැයි පවසයි; නමුත් ශාස්ත්‍රඥයන් නොවන සිනමාකරුවන් — ලංකාවේ සහ ලෝකයේ — එය නොදැනත් බිඳිය හැකි බවට තර්ක කරනු ඇත.",
          },
          {
            en: "He tells his students to master the basics first. With experience you begin to feel you want to break the accepted theories — or a script demands unusual images. In Paweł Pawlikowski's <i>Ida</i>, the headroom breaks the theory completely.",
            si: "ඔහු සිසුන්ට කියන්නේ මුලින් මූලිකාංග ප්‍රගුණ කරන ලෙසයි. අත්දැකීම් සමඟ පිළිගත් න්‍යායන් බිඳීමට හිතෙන්නට පටන් ගනී — නැතහොත් පිටපතක් අමුතු රූප ඉල්ලා සිටී. පාවෙල් පව්ලිකොව්ස්කිගේ <i>Ida</i> චිත්‍රපටයේ headroom එක න්‍යාය සම්පූර්ණයෙන්ම බිඳ දමයි.",
          },
          {
            en: "In his own films he mostly keeps to the basics — simple camera angles and movements — and uses an unusual frame only where the script calls for it.",
            si: "තමන්ගේම චිත්‍රපටවල ඔහු බොහෝ විට මූලිකාංගවලට අනුගත වේ — සරල කැමරා කෝණ සහ චලන — අමුතු රාමුවක් භාවිත කරන්නේ පිටපත ඉල්ලා සිටින තැන පමණි.",
          },
        ],
        interpretation: {
          en: "Like Ileka Ruwanpathirana and Boopathy Nalin, he ties freedom to knowledge, but he is candid that this is an academic's view and is contested by practitioners. For him the trigger for breaking a rule should be the needs of the work, not novelty for its own sake.",
          si: "ඉලේකා රුවන්පතිරණ සහ භූපති නලින් මෙන්, ඔහු නිදහස දැනුමට බැඳ තබයි; නමුත් මෙය ශාස්ත්‍රඥයෙකුගේ දැක්මක් බවත්, ප්‍රායෝගික සිනමාකරුවන් එයට අභියෝග කරන බවත් ඔහු අවංකව පිළිගනී. ඔහුට අනුව රීතියක් බිඳීමට හේතුව විය යුත්තේ නවත්වය සඳහාම නොව වැඩයේ අවශ්‍යතාවයි.",
        },
      },
      O3: {
        heading: { en: "Every national cinema has a signature — and Sri Lanka's became a formula", si: "සෑම ජාතික සිනමාවකටම අනන්‍යතාවක් ඇත — ශ්‍රී ලංකාවේ එක සූත්‍රයක් බවට පත් විය" },
        said: [
          {
            en: "Every country's cinema has native characteristics — its concepts, storytelling, character development, philosophy, even the psychology of its people — and these shape the frame. This matters more for art-house films that represent a country than for commercial films, which favour images that are easy on the eye.",
            si: "සෑම රටකම සිනමාවට ආවේණික ලක්ෂණ ඇත — එහි සංකල්ප, කතා කීමේ ක්‍රමය, චරිත වර්ධනය, දර්ශනය, එම රටේ මිනිසුන්ගේ මනෝවිද්‍යාව පවා — මේවා රාමුව හැඩගස්වයි. මෙය වඩාත් වැදගත් වන්නේ ඇසට පහසු රූප වලට නැඹුරු වාණිජ චිත්‍රපටවලට වඩා, රටක් නියෝජනය කරන කලාත්මක චිත්‍රපටවලටය.",
          },
          {
            en: "An Iranian film is recognisable at a glance; so are films from Russia or Afghanistan. Bengali cinema — Ritwik Ghatak, Mrinal Sen — differs from Kerala's, even within India.",
            si: "ඉරාන චිත්‍රපටයක් බැලූ බැල්මටම හඳුනාගත හැකිය; රුසියාවේ හෝ ඇෆ්ගනිස්ථානයේ චිත්‍රපට ද එසේමය. ඉන්දියාව තුළ පවා, බෙංගාලි සිනමාව — රිත්වික් ඝටක්, මෘනාල් සෙන් — කේරළ සිනමාවෙන් වෙනස්ය.",
          },
          {
            en: "In Sri Lanka, an era produced a recognisable framing style — joked about as “a lone tree and a toilet in a big wide shot”. It began with Vimukthi Jayasundara's films around 2003–2005, such as <i>Sulanga Enu Pinisa</i>, and continued with Sanjeewa Pushpakumara: a lone figure against a cracked, peeling yellow or grey wall, the worn wall and the face contrasting to show the condition of society.",
            si: "ශ්‍රී ලංකාවේ, එක් යුගයක් හඳුනාගත හැකි රාමුකරණ ශෛලියක් බිහි කළේය — “විශාල වයිඩ් ෂොට් එකක තනි ගහක් සහ වැසිකිළියක්” ලෙස විහිළුවට කියවෙන. එය 2003–2005 පමණ කාලයේ <i>සුළඟ එනු පිණිස</i> වැනි විමුක්ති ජයසුන්දරගේ චිත්‍රපටවලින් ආරම්භ වී සංජීව පුෂ්පකුමාර සමඟ ඉදිරියට ගියේය: ඉරිතැලුණු, කපරාරුව ගැලවුණු කහ හෝ අළු පැහැති බිත්තියක් ඉදිරියේ තනි මිනිසෙක් — දිරාපත් බිත්තිය සහ මුහුණ අතර වෙනස සමාජයේ තත්ත්වය පෙන්වයි.",
          },
          {
            en: "Showing the war took on its own formula: wide shots of Jaffna's palmyrah palms, as if “to show the war you must take shots like this”.",
            si: "යුද්ධය පෙන්වීමට ද තමන්ගේම සූත්‍රයක් හැදුණි: යාපනයේ තල් ගස් සහිත වයිඩ් ෂොට් — “යුද්ධය පෙන්වන්නට නම් මෙවැනි ෂොට් ගත යුතුය” යන්නාක් මෙන්.",
          },
          {
            en: "Vimukthi Jayasundara, Sanjeewa Pushpakumara and Prasanna Jayakody took Sri Lankan cinema to international audiences, so abroad this look became “the Sri Lankan film”. Film students now watch these films and, often unconsciously, take them as an ideal — whether that is good or bad, he says, we do not yet know.",
            si: "විමුක්ති ජයසුන්දර, සංජීව පුෂ්පකුමාර සහ ප්‍රසන්න ජයකොඩි ශ්‍රී ලාංකීය සිනමාව ජාත්‍යන්තර ප්‍රේක්ෂකයන් වෙත ගෙන ගිය නිසා, විදෙස්වල මෙම පෙනුම “ශ්‍රී ලාංකීය චිත්‍රපටය” බවට පත් විය. සිනමා සිසුන් දැන් මෙම චිත්‍රපට නරඹා, බොහෝ විට නොදැනුවත්වම, ඒවා පරමාදර්ශයක් ලෙස ගනී — එය හොඳද නරකද යන්න අපි තවම නොදනිමු යැයි ඔහු පවසයි.",
          },
        ],
        interpretation: {
          en: "He shows how context shapes framing through national style, and how an unconventional frame of one generation hardened into a convention of the next. This independently confirms what Channa Deshapriya and Boopathy Nalin said about short filmmakers copying the look.",
          si: "සන්දර්භය ජාතික ශෛලිය හරහා රාමුකරණය හැඩගස්වන ආකාරයත්, එක් පරම්පරාවක unconventional රාමුවක් ඊළඟ පරම්පරාවේ සම්මතයක් බවට ඝන වූ ආකාරයත් ඔහු පෙන්වයි. කෙටි චිත්‍රපට කරන්නන් එම පෙනුම අනුකරණය කිරීම පිළිබඳව චන්න දේශප්‍රිය සහ භූපති නලින් පැවසූ දේ මෙය ස්වාධීනව තහවුරු කරයි.",
        },
      },
      O4: {
        heading: { en: "Argue for the best shot — the work matters more than the director", si: "හොඳම ෂොට් එක සඳහා තර්ක කරන්න — අධ්‍යක්ෂවරයාට වඩා වැදගත් වැඩයයි" },
        said: [
          {
            en: "He can shoot, but directing and screenwriting are his strengths. When he directed and shot his own short films, he felt he was missing things, so he decided never to do both again and always works with a director of photography.",
            si: "ඔහුට රූගත කළ හැකි වුවද, ඔහුගේ ශක්තිය අධ්‍යක්ෂණය සහ තිර රචනයයි. තමන්ගේ කෙටි චිත්‍රපට අධ්‍යක්ෂණය කරමින් රූගත කළ විට දේවල් මඟ හැරෙන බව ඔහුට දැනුණු නිසා, දෙකම නැවත කිසිදා එකට නොකිරීමට තීරණය කළ අතර, සැමවිටම කැමරා අධ්‍යක්ෂවරයෙකු සමඟ වැඩ කරයි.",
          },
          {
            en: "He prepares a shot breakdown from the script himself, then goes through it shot by shot with the DoP in pre-production. The editor and the gaffer also sit in; the gaffer may not say a word, but listens.",
            si: "ඔහු පිටපත අනුව ෂොට් බ්‍රේක්ඩවුන් එක තමන්ම සකසා, පූර්ව නිෂ්පාදනයේදී DoP සමඟ ෂොට් එකෙන් ෂොට් එකට සාකච්ඡා කරයි. සංස්කාරකවරයා සහ ගැෆර් ද එයට සහභාගී වේ; ගැෆර් වචනයක්වත් නොකීවත්, සවන් දෙයි.",
          },
          {
            en: "The DoP suggests alternatives. If he agrees, they go with it; if not, they argue — sometimes almost to a fight. He tells his DoP to argue logically, because the important “person” on set is not the director but the work and getting the best shot.",
            si: "DoP විකල්ප යෝජනා කරයි. ඔහු එකඟ නම් ඒ අනුව යයි; නැතිනම් ඔවුන් තර්ක කරයි — සමහර විට රණ්ඩුවක් දක්වාම. ඔහු තම DoP ට තාර්කිකව තර්ක කරන්නැයි කියන්නේ, රූගත කිරීමේදී වැදගත් “පුද්ගලයා” අධ්‍යක්ෂවරයා නොව වැඩය සහ හොඳම ෂොට් එක ලබාගැනීම නිසාය.",
          },
          {
            en: "Sometimes he simply gives the DoP freedom — and once the DoP added an extra light in an evening kitchen scene that he would not have thought of. Some directors chase award-winning cinematographers; for him the chemistry between director and DoP matters more.",
            si: "සමහර විට ඔහු DoP ට නිදහස ලබා දෙයි — වරක් සවස කුස්සියේ දර්ශනයක, ඔහුට නොසිතුණු අමතර ආලෝකයක් DoP එකතු කළේය. සමහර අධ්‍යක්ෂවරු සම්මාන දිනූ කැමරා ශිල්පීන් පසුපස යති; ඔහුට වඩා වැදගත් වන්නේ අධ්‍යක්ෂ සහ DoP අතර රසායනයයි.",
          },
        ],
        interpretation: {
          en: "He describes collaboration as structured disagreement: a director-led shot plan, tested in argument with the DoP and other crew, with the best shot — not the director's ego — as the final judge.",
          si: "ඔහු සහයෝගීතාව විස්තර කරන්නේ ව්‍යුහගත එකඟ නොවීමක් ලෙසය: අධ්‍යක්ෂවරයා මෙහෙයවන ෂොට් සැලැස්මක්, DoP සහ අනෙකුත් කාර්ය මණ්ඩලය සමඟ තර්කයෙන් පරීක්ෂා කර, අවසාන විනිසුරු ලෙස අධ්‍යක්ෂවරයාගේ මමත්වය නොව හොඳම ෂොට් එක.",
        },
      },
      O5: {
        partial: true,
        heading: { en: "The next generation is shaped by the last — and that needs research", si: "ඊළඟ පරම්පරාව පෙර පරම්පරාව විසින් හැඩගස්වයි — එය පර්යේෂණය කළ යුතුය" },
        said: [
          {
            en: "Young filmmakers absorb the framing of the generation fifteen or twenty years before them without noticing. How that influence passes from one generation to the next is, he suggests, a research topic of its own.",
            si: "තරුණ සිනමාකරුවන් තමන්ට වසර පහළොවක් හෝ විස්සකට පෙර පරම්පරාවේ රාමුකරණය නොදැනුවත්වම අවශෝෂණය කරගනී. එම බලපෑම එක් පරම්පරාවකින් අනෙකට ගලා යන ආකාරය තමන්ගේම පර්යේෂණ මාතෘකාවක් බව ඔහු යෝජනා කරයි.",
          },
          {
            en: "He sees this study as exploratory media research that may open further research rather than close the question.",
            si: "මෙම අධ්‍යයනය ප්‍රශ්නය වසා දමනවාට වඩා තවත් පර්යේෂණවලට දොර විවර කළ හැකි ගවේෂණාත්මක මාධ්‍ය පර්යේෂණයක් ලෙස ඔහු දකී.",
          },
        ],
        interpretation: {
          en: "He did not set out a vision of the future directly. His concern is generational: whether the next filmmakers will move beyond an inherited style or keep reproducing it.",
          si: "ඔහු අනාගතය පිළිබඳ දැක්මක් සෘජුව ඉදිරිපත් නොකළේය. ඔහුගේ සැලකිල්ල පරම්පරාගතය: ඊළඟ සිනමාකරුවන් උරුම කරගත් ශෛලියකින් ඔබ්බට යනු ඇත්ද, නැතහොත් එය දිගටම ප්‍රතිනිෂ්පාදනය කරනු ඇත්ද යන්න.",
        },
        note: {
          en: "Inferred from his remarks on influence and research; the future of Sri Lankan cinema was not discussed directly.",
          si: "බලපෑම සහ පර්යේෂණ පිළිබඳ ඔහුගේ අදහස් ඇසුරින් නිගමනය කළකි; ශ්‍රී ලාංකීය සිනමාවේ අනාගතය සෘජුව සාකච්ඡා නොවිණි.",
        },
      },
      O6: {
        heading: { en: "His position in the overall pattern", si: "සමස්ත රටාව තුළ ඔහුගේ ස්ථානය" },
        said: [
          {
            en: "He is the third academic voice, and like Ileka Ruwanpathirana and Boopathy Nalin he holds that theory should be learned before it is broken — while admitting practitioners dispute this.",
            si: "ඔහු තුන්වන ශාස්ත්‍රීය හඬයි; ඉලේකා රුවන්පතිරණ සහ භූපති නලින් මෙන්ම, න්‍යාය බිඳීමට පෙර එය ඉගෙන ගත යුතු බව ඔහු දරයි — ප්‍රායෝගික සිනමාකරුවන් මෙයට විරුද්ධ වන බව පිළිගනිමින්.",
          },
          {
            en: "He confirms, from a third angle, the story of a 2000s festival style that later filmmakers copied — told also by Channa Deshapriya and Boopathy Nalin.",
            si: "පසුකාලීන සිනමාකරුවන් අනුකරණය කළ 2000 දශකයේ උළෙල ශෛලිය පිළිබඳ කතාව — චන්න දේශප්‍රිය සහ භූපති නලින් ද පැවසූ — ඔහු තුන්වන කෝණයකින් තහවුරු කරයි.",
          },
          {
            en: "Like Majith S. Uyangoda, he puts director–DoP chemistry and agreement at the centre of framing, adding the role of argument and of the wider crew.",
            si: "මජිත් එස්. උයන්ගොඩ මෙන්, ඔහු රාමුකරණයේ කේන්ද්‍රයේ අධ්‍යක්ෂ–DoP රසායනය සහ එකඟතාව තබන අතර, තර්කයේ සහ පුළුල් කාර්ය මණ්ඩලයේ භූමිකාව ද එකතු කරයි.",
          },
          {
            en: "He adds mise-en-scène as the core of framing, and a comparative view of national cinematic signatures.",
            si: "රාමුකරණයේ හරය ලෙස මිසොන්සෙන් සහ ජාතික සිනමා අනන්‍යතා පිළිබඳ සංසන්දනාත්මක දැක්මක් ඔහු එකතු කරයි.",
          },
        ],
        interpretation: {
          en: "With three academics, a clear group pattern appears: they read the unconventional through theory and history, insist on knowing the rules, and are most critical of how one generation's breakthrough becomes the next generation's formula.",
          si: "ශාස්ත්‍රඥයන් තිදෙනෙකු සමඟ පැහැදිලි කණ්ඩායම් රටාවක් මතු වේ: ඔවුන් unconventional බව කියවන්නේ න්‍යාය සහ ඉතිහාසය ඔස්සේ ය; රීති දැනගත යුතු බව අවධාරණය කරයි; සහ එක් පරම්පරාවක මංපෙත් සොයාගැනීම ඊළඟ පරම්පරාවේ සූත්‍රයක් වන ආකාරය ගැන වඩාත්ම විවේචනාත්මක වේ.",
        },
      },
    },
    closing: {
      heading: { en: "Nobody can say a shot is wrong", si: "ෂොට් එකක් වැරදියි කියා කිසිවෙකුට කිව නොහැක" },
      text: {
        en: "Learn the basics, then break them when the work demands it. Once you step outside the theory, no one can say the shot is wrong — the choice is in the filmmaker's hands.",
        si: "මූලිකාංග ඉගෙන ගන්න, ඉන්පසු වැඩය ඉල්ලන විට ඒවා බිඳින්න. න්‍යායෙන් පිටතට පැනපු පසු, ෂොට් එක වැරදියි කියා කිසිවෙකුට කිව නොහැක — තේරීම ඇත්තේ සිනමාකරුවාගේ අතේය.",
      },
    },
    codes: [
      { en: "Framing separates cinema from video", si: "රාමුකරණය සිනමාව වීඩියෝවෙන් වෙන් කරයි" },
      { en: "Working inside a box", si: "කොටුවක් තුළ වැඩ කිරීම" },
      { en: "Mise-en-scène as the core", si: "හරය ලෙස මිසොන්සෙන්" },
      { en: "Every detail matters (the crack in the wall)", si: "සෑම විස්තරයක්ම වැදගත් (බිත්තියේ ඉරිතැලීම)" },
      { en: "Framing = deep visual thinking", si: "රාමුකරණය = ගැඹුරු දෘශ්‍ය චින්තනය" },
      { en: "Unconventional = stepping outside theory", si: "Unconventional = න්‍යායෙන් පිටතට පැනීම" },
      { en: "No shot is “wrong”", si: "කිසිදු ෂොට් එකක් “වැරදි” නොවේ" },
      { en: "Know theory before breaking it (contested)", si: "බිඳීමට පෙර න්‍යාය දැනගැනීම (විවාදාත්මක)" },
      { en: "Basics first for students", si: "සිසුන්ට මුලින් මූලිකාංග" },
      { en: "Script demands unusual images (Ida)", si: "පිටපත අමුතු රූප ඉල්ලයි (Ida)" },
      { en: "National cinematic signatures", si: "ජාතික සිනමා අනන්‍යතා" },
      { en: "Art-house represents the nation more than commercial", si: "වාණිජයට වඩා කලාත්මක සිනමාව රට නියෝජනය කරයි" },
      { en: "“A lone tree and a toilet in a wide shot”", si: "“වයිඩ් ෂොට් එකක තනි ගහක් සහ වැසිකිළියක්”" },
      { en: "Cracked yellow wall and face", si: "ඉරිතැලුණු කහ බිත්තිය සහ මුහුණ" },
      { en: "A formula for showing the war", si: "යුද්ධය පෙන්වීමේ සූත්‍රයක්" },
      { en: "International image of “the Sri Lankan film”", si: "“ශ්‍රී ලාංකීය චිත්‍රපටය” පිළිබඳ ජාත්‍යන්තර ප්‍රතිරූපය" },
      { en: "Students unconsciously copy", si: "සිසුන් නොදැනුවත්වම අනුකරණය කිරීම" },
      { en: "Never direct and shoot at once", si: "එකවර අධ්‍යක්ෂණය සහ රූගත කිරීම නොකිරීම" },
      { en: "Shot breakdown discussed with DoP, editor, gaffer", si: "DoP, සංස්කාරක, ගැෆර් සමඟ ෂොට් බ්‍රේක්ඩවුන් සාකච්ඡාව" },
      { en: "Argue for the best shot", si: "හොඳම ෂොට් එක සඳහා තර්ක කිරීම" },
      { en: "Chemistry over awards", si: "සම්මානවලට වඩා රසායනය" },
      { en: "Generational influence as a research topic", si: "පර්යේෂණ මාතෘකාවක් ලෙස පරම්පරාගත බලපෑම" },
    ],
  },
};

const THEMES = [
  {
    name: { en: "Framing as a foundation", si: "මූලිකාංගයක් ලෙස රාමුව" },
    desc: { en: "The frame is a fundamental element of cinema: it begins in the screenplay and is built through choices of what to include and exclude.", si: "රාමුව සිනමාවේ මූලික අංගයකි: එය තිර පිටපතේ සිටම ආරම්භ වන අතර, ඇතුළත් කරන සහ බැහැර කරන දේ පිළිබඳ තේරීම් හරහා ගොඩනැගේ." },
    objs: ["O1"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage", "ileka-ruwanpathirana", "majith-s-uyangoda", "boopathy-nalin", "hasantha-dissanayake"],
  },
  {
    name: { en: "Frame and context are interdependent", si: "රාමුව සහ සන්දර්භය අන්‍යෝන්‍ය වශයෙන් බැඳී ඇත" },
    desc: { en: "The frame shapes the context and the context shapes the frame; the same frame may not work in another film.", si: "රාමුව සන්දර්භයට ද, සන්දර්භය රාමුවට ද බලපායි; එකම රාමුව වෙනත් චිත්‍රපටයක නොගැළපෙන්නට පුළුවන." },
    objs: ["O1"], who: ["channa-deshapriya", "ileka-ruwanpathirana", "hasantha-dissanayake"],
  },
  {
    name: { en: "Evolution of cinematic language", si: "සිනමා භාෂාවේ පරිණාමය" },
    desc: { en: "Cinematic rules change from era to era; cinema keeps searching for new ones.", si: "සිනමා රීති යුගයෙන් යුගයට වෙනස් වේ; සිනමාව නව රීති සොයා යයි." },
    objs: ["O2"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage", "majith-s-uyangoda", "boopathy-nalin"],
  },
  {
    name: { en: "Unconventional becomes convention", si: "Unconventional දේ සම්මතයක් බවට පත් වීම" },
    desc: { en: "New approaches are imitated and absorbed — and taught by schools and rewarded by festivals — until they become the norm, so the next one has to be found.", si: "නව ප්‍රවේශ අනුකරණය වී — පාසල් විසින් උගන්වා, උළෙල විසින් සම්මාන දී — සම්මතය බවට පත් වන තුරු අවශෝෂණය වේ; එබැවින් ඊළඟ එක සොයාගත යුතුය." },
    objs: ["O2", "O5"], who: ["vimukthi-jayasundara", "channa-deshapriya", "majith-s-uyangoda", "boopathy-nalin", "hasantha-dissanayake"],
  },
  {
    name: { en: "Artistic freedom", si: "කලාත්මක නිදහස" },
    desc: { en: "The freedom to go beyond existing rules in one's own, authored work.", si: "තමන්ගේම ස්වකීය නිර්මාණ තුළ පවතින රීතිවලින් ඔබ්බට යාමේ නිදහස." },
    objs: ["O2"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage", "ileka-ruwanpathirana", "majith-s-uyangoda", "boopathy-nalin", "hasantha-dissanayake"],
  },
  {
    name: { en: "Commercial constraint", si: "වාණිජ සීමා" },
    desc: { en: "In commercial cinema and advertising, expression stays tied to what audiences already like.", si: "වාණිජ සිනමාව සහ වෙළඳ දැන්වීම් තුළ ප්‍රකාශනය ප්‍රේක්ෂකයා දැනටමත් කැමති දේට බැඳී පවතී." },
    objs: ["O2", "O3"], who: ["vimukthi-jayasundara", "channa-deshapriya", "prasanna-withanage", "majith-s-uyangoda"],
  },
  {
    name: { en: "Political seeing", si: "දේශපාලනික දැක්ම" },
    desc: { en: "Looking beyond the accepted frame is itself political and can move society — and the state, in turn, can use the frame to serve an ideology.", si: "සම්මත රාමුවෙන් ඔබ්බට බැලීමම දේශපාලනික වන අතර, එයට සමාජය පෙළඹවිය හැකිය — අනෙක් අතට, රාජ්‍යයට ද මතවාදයක් සඳහා රාමුව භාවිත කළ හැකිය." },
    objs: ["O3"], who: ["vimukthi-jayasundara", "prasanna-withanage", "majith-s-uyangoda", "boopathy-nalin"],
  },
  {
    name: { en: "Multiple perspectives on war", si: "යුද්ධය පිළිබඳ විවිධ දෘෂ්ටිකෝණ" },
    desc: { en: "War-victory cinema and cinema of war's grief: two perspectives on the same events.", si: "යුද ජය සිනමාව සහ යුද ශෝක සිනමාව — එකම සිදුවීම් පිළිබඳ දෘෂ්ටිකෝණ දෙකක්." },
    objs: ["O3"], who: ["vimukthi-jayasundara"],
  },
  {
    name: { en: "Subjectivity of unconventionality", si: "Unconventional බවෙහි ආත්මීයත්වය" },
    desc: { en: "Whether something is unconventional depends on the critic and the viewer — and, for the maker, it can mean something else again.", si: "යමක් unconventional ද යන්න විචාරකයා සහ ප්‍රේක්ෂකයා මත රඳා පවතී — නිර්මාණකරුට එය තවත් දෙයක් විය හැකිය." },
    objs: ["O1"], who: ["vimukthi-jayasundara", "channa-deshapriya", "ileka-ruwanpathirana", "majith-s-uyangoda", "hasantha-dissanayake"],
  },
  {
    name: { en: "Renewal through a new generation", si: "නව පරම්පරාවක් හරහා අලුත් වීම" },
    desc: { en: "The future depends on emerging filmmakers continually renewing the frame, even for small audiences.", si: "අනාගතය රඳා පවතින්නේ කුඩා ප්‍රේක්ෂකාගාරයක් සඳහා වුවද, නවක සිනමාකරුවන් නොනවත්වා රාමුව අලුත් කිරීම මතය." },
    objs: ["O5"], who: ["channa-deshapriya", "majith-s-uyangoda"],
  },
  {
    name: { en: "The frame reveals the inner world", si: "රාමුව අභ්‍යන්තර ලෝකය හෙළි කරයි" },
    desc: { en: "Unconventional frames can convey a character's inner state, or a whole social condition, without dialogue.", si: "Unconventional රාමුවලට දෙබසකින් තොරව චරිතයක අභ්‍යන්තර තත්ත්වය හෝ සමස්ත සමාජ තත්ත්වයක් සන්නිවේදනය කළ හැකිය." },
    objs: ["O1", "O3"], who: ["prasanna-withanage", "boopathy-nalin", "hasantha-dissanayake"],
  },
  {
    name: { en: "Rules, not laws", si: "නීති නොව රීති" },
    desc: { en: "Cinema's conventions are rules that can be broken, unlike laws; new creations come from breaking them — by those who understand them.", si: "සිනමාවේ සම්මතයන් නීති නොව බිඳිය හැකි රීති ය; නව නිර්මාණ බිහි වන්නේ ඒවා අවබෝධ කරගත් අය ඒවා බිඳීමෙනි." },
    objs: ["O2"], who: ["prasanna-withanage", "ileka-ruwanpathirana", "majith-s-uyangoda", "boopathy-nalin"],
  },
  {
    name: { en: "Borrowed conventions", si: "ණයට ගත් සම්මත" },
    desc: { en: "Framing conventions were shaped elsewhere — by Tamil and Hindi cinema, and by a largely Western visual grammar; unconventional work defines itself by breaking from them.", si: "රාමුකරණ සම්මත හැඩගැසුණේ වෙනත් තැන්වලය — දෙමළ සහ හින්දි සිනමාව මෙන්ම බොහෝ දුරට බටහිර දෘශ්‍ය ව්‍යාකරණයක් මගින්; unconventional නිර්මාණ තමන්ව නිර්වචනය කරන්නේ ඒවායෙන් බිඳී යාමෙනි." },
    objs: ["O3"], who: ["prasanna-withanage", "ileka-ruwanpathirana", "boopathy-nalin"],
  },
  {
    name: { en: "Authenticity over style", si: "ශෛලියට වඩා ස්වකීයත්වය" },
    desc: { en: "Unconventional framing has value only when it comes from the director's own vision, not from imitating a style.", si: "Unconventional රාමුකරණය වටින්නේ එය ශෛලියක් අනුකරණය කිරීමෙන් නොව, අධ්‍යක්ෂවරයාගේ ස්වකීය දැක්මෙන් පැන නගින විට පමණි." },
    objs: ["O2"], who: ["prasanna-withanage"],
  },
  {
    name: { en: "Shared authorship of the frame", si: "රාමුවේ හවුල් කර්තෘත්වය" },
    desc: { en: "The frame comes from a chain of decisions — writer, director, cinematographer and crew — agreed through discussion and even argument; a film's success belongs to all of them.", si: "රාමුව බිහි වන්නේ තීරණ දාමයකිනි — රචක, අධ්‍යක්ෂ, කැමරා අධ්‍යක්ෂ සහ කාර්ය මණ්ඩලය — සාකච්ඡාවෙන් සහ තර්කයෙන් පවා එකඟ වී; චිත්‍රපටයක සාර්ථකත්වය ඔවුන් සැමට හිමිය." },
    objs: ["O4"], who: ["prasanna-withanage", "ileka-ruwanpathirana", "majith-s-uyangoda", "boopathy-nalin", "hasantha-dissanayake"],
  },
  {
    name: { en: "Visual grammar", si: "දෘශ්‍ය ව්‍යාකරණය" },
    desc: { en: "Visual language has a grammar, learned through training; convention means its accepted use, unconventional means challenging it.", si: "දෘශ්‍ය භාෂාවට පුහුණුවෙන් ප්‍රගුණ කරන ව්‍යාකරණයක් ඇත; conventional යනු එහි පිළිගත් භාවිතය වන අතර, unconventional යනු එයට අභියෝග කිරීමයි." },
    objs: ["O1", "O2"], who: ["ileka-ruwanpathirana", "boopathy-nalin", "hasantha-dissanayake"],
  },
  {
    name: { en: "Constraints of a small industry", si: "කුඩා කර්මාන්තයක සීමා" },
    desc: { en: "A small, Sinhala-language market with limited resources shapes what can be attempted — yet leaves room to experiment.", si: "සීමිත සම්පත් සහිත කුඩා සිංහල භාෂා වෙළඳපොළක් අත්හදා බැලිය හැකි දේ හැඩගස්වයි — එහෙත් අත්හදා බැලීමට ඉඩක් ද තබයි." },
    objs: ["O3"], who: ["ileka-ruwanpathirana"],
  },
  {
    name: { en: "Need for film education", si: "සිනමා අධ්‍යාපනයේ අවශ්‍යතාව" },
    desc: { en: "The future needs a film school, theory, and research and analysis skills alongside industry practice.", si: "අනාගතයට කර්මාන්ත ප්‍රායෝගිකත්වයට සමගාමීව සිනමා පාසලක්, න්‍යාය සහ පර්යේෂණ හා විශ්ලේෂණ කුසලතා අවශ්‍යයි." },
    objs: ["O5"], who: ["ileka-ruwanpathirana", "boopathy-nalin", "hasantha-dissanayake"],
  },
  {
    name: { en: "The vertical turn", si: "සිරස් (vertical) හැරවුම" },
    desc: { en: "Phones and platforms have turned the frame vertical — the biggest break with convention today, accepted by viewers without anyone deciding it.", si: "දුරකථන සහ වේදිකා රාමුව සිරස් කර ඇත — අද සම්ප්‍රදායෙන් සිදුවන විශාලතම බිඳීම; කිසිවෙකු තීරණය නොකළත් ප්‍රේක්ෂකයා එය පිළිගෙන ඇත." },
    objs: ["O3", "O5"], who: ["majith-s-uyangoda"],
  },
  {
    name: { en: "Frame as emotion", si: "හැඟීමක් ලෙස රාමුව" },
    desc: { en: "A frame is defined by the feeling it carries: it locks only as much of the image as the emotion needs.", si: "රාමුවක් නිර්වචනය වන්නේ එය රැගෙන යන හැඟීමෙනි: ඉමෝෂනයට අවශ්‍ය ප්‍රමාණය පමණක් එය ලොක් කරයි." },
    objs: ["O1"], who: ["majith-s-uyangoda"],
  },
  {
    name: { en: "Forums for cinema", si: "සිනමාව සඳහා සංවාද වේදිකා" },
    desc: { en: "Open discussion — through universities, societies and forums before release — is what moves cinema forward.", si: "විවෘත සාකච්ඡාව — විශ්වවිද්‍යාල, සමිති සහ නිකුතුවට පෙර සංවාද වේදිකා හරහා — සිනමාව ඉදිරියට ගෙන යයි." },
    objs: ["O5"], who: ["majith-s-uyangoda", "boopathy-nalin"],
  },
  {
    name: { en: "Politics of aesthetics", si: "සෞන්දර්යයේ දේශපාලනය" },
    desc: { en: "What counts as beautiful — how landscapes, light and colour are filmed — has a history and a hegemony that unconventional framing can expose and break.", si: "සුන්දර යැයි සැලකෙන දේ — භූ දර්ශන, ආලෝකය සහ වර්ණ රූගත කරන ආකාරය — ඉතිහාසයක් සහ බලාධිපත්‍යයක් ඇති අතර, unconventional රාමුකරණයට එය හෙළිදරව් කර බිඳිය හැකිය." },
    objs: ["O3"], who: ["boopathy-nalin"],
  },
  {
    name: { en: "Asian visual traditions", si: "ආසියානු දෘශ්‍ය සම්ප්‍රදායන්" },
    desc: { en: "Temple murals and Asian painting offer an alternative to Eurocentric composition and lighting — a new mix rather than nationalism.", si: "විහාර සිතුවම් සහ ආසියානු චිත්‍ර කලාව යුරෝකේන්ද්‍රීය සංයුතියට සහ ආලෝකකරණයට විකල්පයක් සපයයි — ජාතිකවාදයක් නොව නව මිශ්‍රණයක්." },
    objs: ["O3", "O5"], who: ["boopathy-nalin"],
  },
  {
    name: { en: "Urban aesthetics", si: "නාගරික සෞන්දර්යය" },
    desc: { en: "The city — including its dark, unplanned corners — deserves its own aesthetics, against the idea that only the village is beautiful.", si: "නගරයට — එහි අඳුරු, සැලසුම් නොකළ කොටස් ද ඇතුළුව — තමන්ගේම සෞන්දර්යයක් තිබිය යුතුය; සුන්දර වන්නේ ගම පමණක් ය යන අදහසට එරෙහිව." },
    objs: ["O3"], who: ["boopathy-nalin"],
  },
  {
    name: { en: "Mise-en-scène", si: "මිසොන්සෙන් (Mise-en-scène)" },
    desc: { en: "The frame is a fully designed space — light, set, art direction and blocking — where even a crack in a wall is a decision.", si: "රාමුව යනු සම්පූර්ණයෙන් සැලසුම් කළ අවකාශයකි — ආලෝකය, කට්ටලය, කලා අධ්‍යක්ෂණය සහ blocking — බිත්තියක ඉරිතැලීමක් පවා තීරණයකි." },
    objs: ["O1"], who: ["hasantha-dissanayake"],
  },
  {
    name: { en: "National cinematic signatures", si: "ජාතික සිනමා අනන්‍යතා" },
    desc: { en: "Each national cinema has a recognisable look; Sri Lanka's 2000s festival style — wide shots, lone figures, worn walls, pale palettes — became an image of “the Sri Lankan film” that newer filmmakers copy.", si: "සෑම ජාතික සිනමාවකටම හඳුනාගත හැකි පෙනුමක් ඇත; ශ්‍රී ලංකාවේ 2000 දශකයේ උළෙල ශෛලිය — වයිඩ් ෂොට්, තනි මිනිසුන්, දිරාපත් බිත්ති, පඬු වර්ණ — නවක සිනමාකරුවන් අනුකරණය කරන “ශ්‍රී ලාංකීය චිත්‍රපටය” පිළිබඳ ප්‍රතිරූපයක් බවට පත් විය." },
    objs: ["O3"], who: ["hasantha-dissanayake", "boopathy-nalin", "channa-deshapriya"],
  },
];

const KEY_FINDING = {
  from: "01 – 07",
  title: { en: "Unconventionality is relative — to the viewer, to time, to power, to knowledge and to the screen", si: "Unconventional බව සාපේක්ෂයි — ප්‍රේක්ෂකයාට, කාලයට, බලයට, දැනුමට සහ තිරයට" },
  text: {
    en: "All seven voices so far agree there is no fixed definition of “unconventional”. For Vimukthi Jayasundara it is decided by the critic and the viewer; Channa Deshapriya adds time — today's unconventional is later accepted as convention; Prasanna Withanage adds history and power — Sri Lankan convention was itself borrowed, and both the market and the state shape what a frame may show. The first academic voice, Ileka Ruwanpathirana, adds knowledge: conventions form a learned, largely Western visual grammar, and breaking them is meaningful only when they are understood. Majith S. Uyangoda adds the screen: the frame changes because devices and viewing habits change, as the vertical phone frame shows, and he would rather call past practice “concepts” than “conventions”. Boopathy Nalin adds the politics of beauty: what is treated as beautiful — Eurocentric lighting, Bollywood colour, the pale “border village” — is inherited, and the radical becomes convention once festivals and schools institutionalise it. Hasantha Dissanayake shows this happening in Sri Lanka: the 2000s festival style — a lone figure, a worn wall, a wide shot — hardened into a formula that newer filmmakers copy. This links the study to reception theory, to the politics of national cinema and of aesthetics, to film education and to media technology.",
    si: "Unconventional යන්නට ස්ථාවර නිර්වචනයක් නැති බවට මෙතෙක් හඬ හතම එකඟ වේ. විමුක්ති ජයසුන්දරට අනුව එය තීරණය කරන්නේ විචාරකයා සහ ප්‍රේක්ෂකයා ය; චන්න දේශප්‍රිය කාලය එකතු කරයි — අද සම්ප්‍රදායික නොවන දේ පසුව සම්මතයක් ලෙස පිළිගැනේ; ප්‍රසන්න විතානගේ ඉතිහාසය සහ බලය එකතු කරයි — ශ්‍රී ලාංකීය සම්මතය ම ණයට ගත් එකක් වන අතර, රාමුවකට පෙන්විය හැකි දේ හැඩගස්වන්නේ වෙළඳපොළ සහ රාජ්‍යය යන දෙකමය. පළමු ශාස්ත්‍රීය හඬ වන ඉලේකා රුවන්පතිරණ දැනුම එකතු කරයි — සම්මතයන් යනු පුහුණුවෙන් ප්‍රගුණ කරන, බොහෝ දුරට බටහිර දෘශ්‍ය ව්‍යාකරණයක් වන අතර, ඒවා බිඳීම අර්ථවත් වන්නේ ඒවා අවබෝධ කරගත් විට පමණි. මජිත් එස්. උයන්ගොඩ තිරය එකතු කරයි — සිරස් දුරකථන රාමුවෙන් පෙනෙන පරිදි, උපාංග සහ නැරඹීමේ පුරුදු වෙනස් වන නිසා රාමුව වෙනස් වේ; ඔහු අතීත භාවිතය ‘සම්මත’ වෙනුවට ‘සංකල්පනා’ ලෙස හැඳින්වීමට කැමතිය. භූපති නලින් සුන්දරත්වයේ දේශපාලනය එකතු කරයි — සුන්දර ලෙස සලකන දේ (යුරෝකේන්ද්‍රීය ආලෝකකරණය, බොලිවුඩ් වර්ණ, පඬු පැහැති “මායිම් ගම්මානය”) උරුම කරගත් ඒවා වන අතර, උළෙල සහ පාසල් එය ආයතනගත කළ විට රැඩිකල් දේ සම්මතයක් වේ. හසන්ත දිසානායක ශ්‍රී ලංකාවේ මෙය සිදුවන ආකාරය පෙන්වයි: 2000 දශකයේ උළෙල ශෛලිය — තනි මිනිසෙක්, දිරාපත් බිත්තියක්, වයිඩ් ෂොට් එකක් — නවක සිනමාකරුවන් අනුකරණය කරන සූත්‍රයක් බවට ඝන විය. මෙය අධ්‍යයනය reception න්‍යාය, ජාතික සිනමාවේ දේශපාලනය, සිනමා අධ්‍යාපනය සහ මාධ්‍ය තාක්ෂණය සමඟ සම්බන්ධ කරයි.",
  },
};
