const express = require("express");
const cors = require("cors");
const caseStudies = require("./data/caseStudies");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// GET /api/case-studies — list all case studies (summary only)
app.get("/api/case-studies", (req, res) => {
  const summaries = caseStudies.map((cs) => ({
    slug: cs.slug,
    title: cs.meta.title.join(" "),
    role: cs.meta.role,
    timeline: cs.meta.timeline,
    heroImage: cs.meta.heroImage,
  }));
  res.json(summaries);
});

// GET /api/case-studies/:slug — full content for one case study
app.get("/api/case-studies/:slug", (req, res) => {
  const study = caseStudies.find((cs) => cs.slug === req.params.slug);
  if (!study) {
    return res.status(404).json({ error: "Case study not found" });
  }
  res.json(study);
});

app.get("/", (req, res) => {
  res.send("Case study API is running. Try /api/case-studies");
});

app.listen(PORT, () => {
  console.log(`Case study API running on http://localhost:${PORT}`);
});
