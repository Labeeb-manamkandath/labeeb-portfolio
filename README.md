# Labeeb Manamkandath — Portfolio

Product Designer — UI/UX, Visual & Digital Experiences.

The site in `client/site/` is plain static files: `index.html`, `support.js`, and the images it loads. React is loaded from unpkg at runtime, so there is nothing to compile.

## Deploy

Vercel builds from the repo root using `vercel.json`: it copies `client/site/` to `client/dist/` and serves that.

## Run locally

```bash
cd client/site
python3 -m http.server 8000
```

Then open http://localhost:8000.

The older React + Vite version and the `server/` API remain in git history (and `server/` is unchanged).
