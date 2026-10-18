# Arpita's After School Classes — Website

A colourful, kids-friendly, fully bilingual (**Hindi / English**) website for **Arpita's
After School Classes** — an after-school activity centre for children aged **4–10** in
**Geeta Bhawan, Indore (M.P.)**.

> अर्पिता की स्कूल के बाद की क्लासेज़ — गीता भवन, इंदौर · 15 गतिविधियाँ · उम्र 4–10 · ₹2000/माह

- **Live site:** https://arpita-after-school.web.app
- **Language:** one language shown at a time, switched with the हिं/EN toggle
  (choice is remembered in `localStorage`)
- **No backend:** the admission form opens a pre-filled **WhatsApp** message

---

## Tech stack

| | |
|---|---|
| Framework | **React 18** (function components + hooks, `StrictMode`) |
| Build tool | **Vite 5** (`@vitejs/plugin-react`) |
| Styling | Plain **CSS** (`src/styles.css`), custom properties, mobile-first media queries |
| Fonts | Google Fonts — *Poppins* + *Noto Sans Devanagari* |
| Hosting | **Firebase Hosting** (`firebase.json`, `.firebaserc`) |
| Language | JavaScript / JSX (no TypeScript) |

No UI libraries, no CSS frameworks, no tracking scripts.

---

## Requirements

- **Node.js 18 or newer** — https://nodejs.org (LTS)
- npm (comes with Node)
- *Optional:* Firebase CLI (`npm i -g firebase-tools`) — only for deploying

---

## Getting started

```bash
npm install        # install dependencies (first time only)
npm run dev        # start dev server → http://localhost:5174
```

## Build

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run standalone # single-file build → website.html + dist/standalone.html
```

### Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server with hot reload (port 5174) |
| `npm run build` | Builds the optimised site into `dist/` |
| `npm run preview` | Serves the `dist/` build locally |
| `npm run standalone` | Builds **one self-contained HTML file** (`website.html`) with CSS + JS inlined — handy for sharing on WhatsApp/e-mail or double-click opening. Also re-copies `public/gallery/` → `gallery/` so the file works offline |

`vite.config.js` sets `base: './'`, so the build works from **any** folder —
Firebase, GitHub Pages sub-paths, or even opened directly from disk.

---

## Project structure

```
arpita-classes/
├─ index.html              # HTML shell + SEO / social-preview meta tags
├─ vite.config.js          # Vite config (base: './', port 5174)
├─ firebase.json           # Firebase Hosting config (cache + security headers)
├─ .firebaserc             # Firebase project id
├─ public/
│  ├─ favicon.svg          # browser tab icon
│  ├─ apple-touch-icon.png # iOS home-screen icon
│  ├─ og-image.png         # social sharing preview (WhatsApp/Facebook)
│  ├─ robots.txt
│  └─ gallery/             # gallery photos (photo1.jpg … photo12.jpg)
├─ scripts/
│  └─ inline.mjs           # builds the single-file website.html
├─ src/
│  ├─ main.jsx             # React entry point
│  ├─ App.jsx              # page composition
│  ├─ i18n.jsx             # language context (hi / en) + localStorage
│  ├─ styles.css           # all styling
│  ├─ data/
│  │  └─ content.js        # ⭐ ALL TEXT lives here (Hindi + English)
│  └─ components/          # 14 components (Navbar, Hero, About, Classes, …)
├─ logo-proposals/         # old logo design drafts (not part of the site)
└─ website.html            # generated — do not edit by hand
```

---

## Editing the content

**Everything the visitor reads is in one file: `src/data/content.js`.**

```js
export const site = { /* phone, WhatsApp, email, address, social links, Google review */ }
export const content = {
  hi: { /* all Hindi text */ },
  en: { /* all English text */ },
}
export const gallery = [ /* gallery photo list */ ]
```

- Business details (phone, WhatsApp, e-mail, address, hours, social links) → `site`
- Section texts → `content.hi` and `content.en` (keep the same keys in both)
- Activities / teachers / fees / timetable → inside each language block
- Gallery photos → `gallery` list

### Gallery photos

Put your images in `public/gallery/` and point to them **without a leading slash**:

```js
{ src: 'gallery/photo1.jpg' }
```

---

## Deployment

### Firebase Hosting (current)

```bash
npm run build
firebase deploy --only hosting --project arpita-after-school
```

- Live: https://arpita-after-school.web.app
- Console: https://console.firebase.google.com/project/arpita-after-school/overview

> If `og:image` / `og:url` change, update the absolute URLs in `index.html`.

### GitHub Pages (optional)

The build already uses relative paths, so it works on Pages as-is:

1. Push the repo to GitHub (see below).
2. `npm run build`
3. Publish the `dist/` folder (e.g. with the `gh-pages` package or a GitHub Action).

---

## Putting this project on GitHub

**One-time setup** (install Git from https://git-scm.com/downloads, then):

```bash
git init
git add .
git commit -m "Initial commit: Arpita's After School Classes website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

What is **not** pushed (see `.gitignore`): `node_modules/`, `dist/`, `website.html`,
`gallery/` (root copy) and `.firebase/` — all generated or local.

A good public repo checklist:

- [x] `node_modules` and build output are ignored
- [x] No secrets in the code (only public business contact details)
- [x] `.firebaserc` contains only the public Firebase project id
- [x] README (this file) explains setup and deployment

---

## Owner's guide (हिंदी)

- **नाम, फ़ोन, WhatsApp, ईमेल, पता, टाइम, सोशल लिंक बदलने हैं?** → `src/data/content.js`
  में `site` ऑब्जेक्ट।
- **किसी भी सेक्शन का टेक्स्ट बदलना है?** → उसी फ़ाइल में `content.hi` (हिंदी) या
  `content.en` (English)।
- **गैलरी की फ़ोटो बदलनी हैं?** → `public/gallery/` में नई फ़ोटो रखकर `gallery` लिस्ट
  का `src` बदल दें (जैसे `gallery/photo1.jpg`)।
- **बदलाव के बाद ऑनलाइन करना है?** →

  ```bash
  npm run build
  firebase deploy --only hosting
  ```

- **WhatsApp पर भेजने के लिए एक फ़ाइल चाहिए?** → `npm run standalone` चलाएँ, फिर
  `website.html` भेज दें।
- **एडमिशन फ़ॉर्म** का कोई सर्वर नहीं है — "Submit" दबाने पर WhatsApp पर संदेश तैयार
  हो जाता है। (इसलिए `site.whatsapp` नंबर सही होना ज़रूरी है।)
- **Teachers** के नाम नहीं दिखाए गए — सिर्फ़ "Expert Staff" लिखा है, जैसा तय हुआ था।

---

## License

© Arpita's After School Classes. All rights reserved.
