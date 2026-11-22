# Framing the Unconventional

Qualitative research tracker comparing filmmakers', industry professionals' and scholars' perspectives on unconventional framing in Sri Lankan cinema. It holds the interview analysis, codes and themes for each research objective (O1–O4).

## Pages

- **Home**: the hero with an interview still, the three participant groups, and a link to the study
- **Study**: the working title, objectives O1–O6 and the chapter outline
- **Group**: the people in Industry Professionals, Academics, or Film Students / Young Filmmakers
- **Person**: one interviewee's photo and their analysis by objective, with codes
- **Themes**: emerging themes and which participants support them, by group

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
- `STUDY.heroImage`: the image on the landing page (swap it for any film still or set photo)

### Adding a photo

Put the image in `assets/people/` and name it after the person's `id`:

```
assets/people/prasanna-withanage.jpg
assets/people/supun-hemachandra.jpg
```

To use another file name or format, set `photo` on that person in `data.js`. If there's no photo, the card shows the person's initials.

## Running locally

Open `index.html` in a browser. You don't need a build step.
