# Labeeb Manamkandath — Portfolio
### Senior Product Designer · Dubai, UAE

Portfolio site with full case studies — built in React + Vite (client) and Node + Express (server).

---

## Project Structure

```
labeeb-portfolio/
├── client/                          # React app (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── CaseStudy.jsx        # Renders any case study from data
│   │   │   ├── CaseStudy.module.css # All visual styling
│   │   │   └── Reveal.jsx           # Scroll-reveal animation
│   │   ├── data/
│   │   │   ├── aiVoiceInsightGenerator.js
│   │   │   ├── aiFaceRegistrationFlow.js
│   │   │   ├── driverDailyRouteTimeline.js
│   │   │   ├── zaperAiWebsiteDesign.js
│   │   │   └── caseStudies.js       # Index — register new case studies here
│   │   ├── hooks/
│   │   │   └── useReveal.js
│   │   ├── App.jsx                  # Homepage + slug-based viewer
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/images/               # All mockup images
│   ├── vercel.json
│   └── .env.example
│
└── server/                          # Node + Express API
    ├── data/                        # Mirror of client data files
    ├── index.js
    └── vercel.json
```

---

## Run Locally

**Terminal 1 — Server:**
```bash
cd server
npm install
npm run dev
```
Runs on http://localhost:4000

**Terminal 2 — Client:**
```bash
cd client
npm install
npm run dev
```
Runs on http://localhost:5173

> The client works without the server — it falls back to local data files automatically.

---

## Adding a New Case Study

1. Add data file to `client/src/data/yourProject.js`
2. Add one import + one entry to `client/src/data/caseStudies.js`
3. Mirror the same file in `server/data/yourProject.js` (change `export default` to `module.exports`)
4. Add one require + one entry to `server/data/caseStudies.js`
5. Drop mockup images in `client/public/images/`
6. `git add . && git commit -m "Add case study" && git push`
7. Vercel auto-deploys in ~60 seconds

---

## Design Tokens

```css
--black: #0A0A0A
--white: #F5F2ED
--cream: #EDE9E1
--accent: #FF4D00
--progress: #1A7A4A
--issue:  #C8381E
--mid:    #6B6860
```

Fonts: Bebas Neue (display) · DM Sans (body) · DM Mono (labels)

---

**Labeeb Manamkandath** · labeebmanamkandath@gmail.com · labeeeb.framer.website
