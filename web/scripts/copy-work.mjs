// The case studies (src/data/cases, from scripts/extract-cases.mjs) use the previous site's
// images, so copy those folders from client/site to /work/ at build time.
import { cpSync } from "node:fs";
for (const dir of ["images", "images-min", "covers"]) {
  cpSync(new URL(`../../client/site/${dir}/`, import.meta.url), new URL(`../dist/work/${dir}/`, import.meta.url), { recursive: true });
}
