// Receives anonymous page-view beacons from the site and stores them for the /admin dashboard.
// No cookies, no IP addresses stored. Location comes from Vercel's edge headers (country, region, city).
// Without a connected Redis store it quietly does nothing.
import { storeReady, pipeline, dayKey } from "./_store.js";

const BOT = /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit|whatsapp|telegram|discord|embedly|vercel|monitor|curl|wget|python|node-fetch|axios/i;
const KEEP_DAYS = 400;
const str = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
const num = (v, max) => (Number.isFinite(+v) ? Math.max(0, Math.min(max, Math.round(+v))) : 0);

function parseUA(ua) {
  const device = /ipad|tablet|(android(?!.*mobile))/i.test(ua) ? "Tablet" : /mobi|iphone|android/i.test(ua) ? "Mobile" : "Desktop";
  const browser = /edg\//i.test(ua) ? "Edge" : /opr\/|opera/i.test(ua) ? "Opera" : /samsungbrowser/i.test(ua) ? "Samsung Internet"
    : /firefox|fxios/i.test(ua) ? "Firefox" : /chrome|crios/i.test(ua) ? "Chrome" : /safari/i.test(ua) ? "Safari" : "Other";
  const os = /iphone|ipad|ipod/i.test(ua) ? "iOS" : /android/i.test(ua) ? "Android" : /mac os x|macintosh/i.test(ua) ? "macOS"
    : /windows/i.test(ua) ? "Windows" : /cros/i.test(ua) ? "ChromeOS" : /linux/i.test(ua) ? "Linux" : "Other";
  return { device, browser, os };
}

const head = (req, k) => {
  const v = req.headers[k];
  try { return v ? decodeURIComponent(String(v)) : ""; } catch { return String(v || ""); }
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  res.setHeader("Cache-Control", "no-store");
  const ua = String(req.headers["user-agent"] || "");
  if (!storeReady() || !ua || BOT.test(ua)) return res.status(204).end();

  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = null; } }
  if (!b || typeof b !== "object") return res.status(400).end();
  const k = ["view", "end", "click"].includes(b.k) ? b.k : null;
  if (!k || !/^[a-z0-9]{8,32}$/i.test(String(b.v)) || !/^[a-z0-9]{8,32}$/i.test(String(b.s))) return res.status(400).end();

  const ev = { t: Date.now(), k, v: b.v, s: b.s, p: str(b.p, 200) || "/" };
  if (k === "view") {
    let refHost = "";
    try { refHost = b.r ? new URL(b.r).hostname.replace(/^www\./, "") : ""; } catch {}
    if (/(^|\.)labeebs\.com$|vercel\.app$/i.test(refHost)) refHost = ""; // internal navigation
    Object.assign(ev, parseUA(ua), {
      r: refHost,
      rf: refHost ? str(b.r, 300) : "",
      us: str(b.us, 60), um: str(b.um, 60), uc: str(b.uc, 80),
      c: str(head(req, "x-vercel-ip-country"), 4),
      rg: str(head(req, "x-vercel-ip-country-region"), 40),
      ci: str(head(req, "x-vercel-ip-city"), 60),
      l: str(b.l, 20), sw: num(b.sw, 10000),
      n: b.n ? 1 : 0, f: b.f ? 1 : 0, // new visitor, first view of the session
      ti: str(b.ti, 120),
    });
  } else if (k === "end") {
    ev.d = num(b.d, 6 * 3600 * 1000); // active time on this page, ms
  } else {
    ev.x = str(b.x, 80); // what was clicked: Email, LinkedIn, Resume, an outside site
    ev.h = str(b.h, 200);
  }

  const key = `ev:${dayKey()}`;
  try {
    await pipeline([["RPUSH", key, JSON.stringify(ev)], ["EXPIRE", key, String(KEEP_DAYS * 86400)]]);
  } catch (e) {
    console.error("[track]", String(e && e.message).slice(0, 200));
  }
  return res.status(204).end();
}
