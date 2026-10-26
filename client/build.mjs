// The site is plain static files; the build just copies them to dist/.
import { cpSync, rmSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
cpSync("site", "dist", { recursive: true });
