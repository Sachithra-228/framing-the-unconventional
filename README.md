# Framing the Unconventional

Qualitative research tracker comparing filmmakers', industry professionals' and scholars' perspectives on unconventional framing in Sri Lankan cinema. It holds the interview analysis, codes and themes for each research objective (O1–O4).

## Pages

- **Home**: the study title and key numbers, the three participant groups, and a link to the study
- **Study**: the working title, objectives O1–O6 and the chapter outline
- **Group**: the people in Industry Professionals, Academics, or Film Students / Young Filmmakers
- **Person**: one interviewee's photo and their analysis by objective, with codes
- **Themes**: emerging themes and which participants support them, by group
- **Report**: one shared document (the research report) that the team edits in the browser

## Languages

The site has a **සිං / EN** switch in the top bar, and it remembers the reader's choice. Text in `data.js` can be bilingual:

```js
heading: { si: "රාමුව සිනමාවේ මූලිකම අංගයයි", en: "The frame is the foundation of cinema" }
```

A plain string shows the same in both languages. Interface labels are in `UI` at the top of `app.js`.

## Updating

Everything is in [`data.js`](data.js):

- `PEOPLE`: name, group and role of each participant
- `INTERVIEWS`: analysis for each person, keyed by their `id`
- `THEMES`: emerging themes and who supports them

### Adding a photo

Put the image in `assets/people/` and name it after the person's `id`:

```
assets/people/prasanna-withanage.jpg
assets/people/supun-hemachandra.jpg
```

To use another file name or format, set `photo` on that person in `data.js`. If there's no photo, the card shows the person's initials.

## Notepad (raw notes)

Each person page has a **Notepad** at the bottom. Anyone with the team passcode can type or paste the raw interview notes there. The notes save automatically and are never shown on the public pages. Copy or download them later to write up the analysis.

The notes are stored by [`api/notes.js`](api/notes.js), a Vercel function backed by Upstash Redis. One-time setup in the Vercel dashboard:

1. **Storage → Create → Upstash (Redis)**, then connect it to this project. This adds `KV_REST_API_URL` and `KV_REST_API_TOKEN`.
2. **Settings → Environment Variables**: add `NOTES_PASSCODE` set to the team passcode.
3. Redeploy.

Until the setup is done, the notepad still works, but the notes are saved only in that browser.

If two people save the same notepad at once, the second person is asked to keep both versions or keep only theirs. The last 30 earlier versions are also kept in storage.

## Report (shared document)

The **Report** page holds one shared document. Upload a Word (.docx) file once; after that, anyone with the team passcode can edit it in the browser. Every change saves automatically, other people's saves appear within about 12 seconds, and **Download Word** exports the current version as a .docx at any time.

- It uses the same storage and passcode as the Notepad (`api/notes.js` with `kind: "doc"`).
- Formatting kept: headings, bold, italic, underline, bulleted and numbered lists, tables and images. Page layout, headers and footers, comments and tracked changes from Word are not kept.
- The document must stay under 800 KB, so keep images small.
- If two people save at the same moment, the second person chooses: use the other version, keep theirs, or download theirs first. The last 10 earlier versions are also kept in storage.

## Running locally

Open `index.html` in a browser. You don't need a build step.
