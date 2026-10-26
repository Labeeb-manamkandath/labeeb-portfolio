# Labeeb Manamkandath — Portfolio

Product Designer — UI/UX, Visual & Digital Experiences.

The site in `client/site/` is plain static files: `index.html`, `support.js`, and the images it loads. React is loaded from unpkg at runtime, so there is nothing to compile.

## Deploy

Vercel builds from `client/`. `npm run build` copies `site/` to `dist/`, which Vercel serves.

## Run locally

```bash
cd client/site
python3 -m http.server 8000
```

Then open http://localhost:8000.

The older React + Vite version and the `server/` API remain in git history (and `server/` is unchanged).
