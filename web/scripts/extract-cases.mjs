// Pull each full case study out of the previous site (client/site/index.html) so it renders
// inside the new portfolio at /work/<key>. The writing, images and layout markup are kept as
// they are; only the old app's template hooks are swapped for plain links.
// Run: node scripts/extract-cases.mjs  (writes src/data/cases/<key>.html)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const src = readFileSync(new URL("../../client/site/index.html", import.meta.url), "utf8");
const out = new URL("../src/data/cases/", import.meta.url);
mkdirSync(out, { recursive: true });

const keys = { Voice: "voice", Driver: "driver", Zaper: "zaper", Maid: "maid", Toolbox: "toolbox", Bazar: "bazar", Workforce: "workforce", Case: "case" };
const hrefs = {
  goBack: "/projects", goHome: "/", goAbout: "/about", goContact: "#contact", openAll: "/projects", navWork: "/projects",
  ...Object.fromEntries(Object.entries(keys).map(([k, v]) => [`open${k}`, `/work/${v}`])),
};

for (const [name, key] of Object.entries(keys)) {
  const m = src.match(new RegExp(`<sc-if value="\\{\\{ is${name} \\}\\}"[^>]*>([\\s\\S]*?)</sc-if>`));
  if (!m) throw new Error(`case ${name} not found`);
  let html = m[1].trim();
  // the wrapper's inline layout is replaced by the new page's own container
  html = html.replace(/^<div data-cs="1"[^>]*>/, "").replace(/<\/div>\s*$/, "");
  html = html.replace(/href="[^"]*"\s+onClick="\{\{ (\w+) \}\}"/g, (_, fn) => {
    if (!(fn in hrefs)) throw new Error(`unknown link ${fn} in ${name}`);
    return `href="${hrefs[fn]}"`;
  });
  html = html.replace(/\{\{ backLabel \}\}/g, "← All projects");
  html = html.replace(/src="(images|images-min|covers)\//g, 'src="/work/$1/');
  if (/\{\{|onClick=/.test(html)) throw new Error(`template syntax left in ${name}`);
  writeFileSync(new URL(`${key}.html`, out), html + "\n");
  console.log(key, html.length);
}
