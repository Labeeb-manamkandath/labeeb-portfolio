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

## New site (in progress, branch `ai-redesign`)

The redesigned portfolio lives in `web/` (Astro). Vercel builds it through the root `vercel.json` and serves `web/dist`.

- `cd web && npm install && npm run dev` to work locally.
- `api/structure.js` is a Vercel function that structures a voice note with the Claude API. It needs `ANTHROPIC_API_KEY` in the Vercel project's environment variables. Without it the endpoint returns 503 and the demo says live AI is off.
- Every demo is labelled Live or Simulated on the page. Scripted sample data lives in `web/src/data/voice-samples.js`.
