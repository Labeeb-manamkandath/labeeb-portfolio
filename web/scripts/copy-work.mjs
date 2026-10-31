// Serve the previous portfolio (with all full case studies) at /work/.
// Copied at build time from client/site so the case studies stay byte-for-byte as written.
import { cpSync, readFileSync, writeFileSync } from "node:fs";
const src = new URL("../../client/site/", import.meta.url);
const dest = new URL("../dist/work/", import.meta.url);
cpSync(src, dest, { recursive: true });
const page = new URL("index.html", dest);
const html = readFileSync(page, "utf8");
// keep search engines on the new homepage; the archive stays reachable by link
if (!html.includes('name="robots"')) writeFileSync(page, html.replace("<head>", '<head><meta name="robots" content="noindex, follow">'));
