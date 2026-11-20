import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.labeebs.com",
  build: { inlineStylesheets: "auto" },
  // The About page was folded into the homepage (2026-11-20).
  redirects: { "/about": "/#experience" },
});
