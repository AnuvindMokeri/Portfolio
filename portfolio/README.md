# Portfolio — Blueprint Edition

A full-stack developer portfolio built as a set of "engineering drawing sheets" — grid paper background, title blocks, registration marks, and an interactive system schematic instead of the usual skills list.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Customize

Almost everything you need to change lives in **one file**:

```
src/data/content.js
```

Edit your name, role, bio, the stack schematic layers, projects, and experience there — the components just render it.

Other things to know:

- `src/App.css` — all visual styling, organized by section, using CSS variables defined in `src/index.css`.
- Colors, fonts, and layout width are set as CSS custom properties at the top of `src/index.css` under `:root` — change those to retheme the whole site.
- `src/components/Sheet.jsx` — the reusable wrapper that adds the corner registration marks and sheet-number footer to each section.
- `index.html` — page title, meta description, and favicon.

## Stack

React 19 + Vite, no CSS framework — plain CSS with custom properties, so there's nothing extra to strip out.
