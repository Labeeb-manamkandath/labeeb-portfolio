// Visitor stats for the private /admin page. Protected by ADMIN_PASSWORD, which Labeeb sets in Vercel.
import { createHash, timingSafeEqual } from "node:crypto";
import { storeReady, pipeline, dayKey } from "./_store.js";

const fails = new Map(); // ip -> [timestamps], best effort
const sha = (s) => createHash("sha256").update(String(s)).digest();

function authorised(req) {
  const want = process.env.ADMIN_PASSWORD || "";
  const got = String(req.headers["x-admin-key"] || "");
  if (!want || !got) return false;
  return timingSafeEqual(sha(want), sha(got));
}

const inc = (m, k, by = 1) => { if (k) m.set(k, (m.get(k) || 0) + by); };
const top = (m, n = 12) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => ({ k, v }));

function sourceOf(ev) {
  if (ev.us) return ev.us.toLowerCase();
  if (!ev.r) return "Direct";
  const h = ev.r;
  if (/linkedin|lnkd\.in/.test(h)) return "LinkedIn";
  if (/google\./.test(h)) return "Google";
  if (/bing\.com/.test(h)) return "Bing";
  if (/duckduckgo/.test(h)) return "DuckDuckGo";
  if (/chatgpt|openai/.test(h)) return "ChatGPT";
  if (/claude\.ai|perplexity/.test(h)) return h.includes("claude") ? "Claude" : "Perplexity";
  if (/facebook|fb\.com|fb\.me/.test(h)) return "Facebook";
  if (/instagram/.test(h)) return "Instagram";
  if (/t\.co$|twitter|x\.com/.test(h)) return "X / Twitter";
  if (/behance/.test(h)) return "Behance";
  if (/dribbble/.test(h)) return "Dribbble";
  if (/github/.test(h)) return "GitHub";
  if (/mail\.|outlook|gmail/.test(h)) return "Email";
  return h;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "anon";
  const now = Date.now();
  const recentFails = (fails.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000);
  if (recentFails.length >= 8) return res.status(429).json({ error: "Too many tries. Wait 15 minutes." });
  if (!process.env.ADMIN_PASSWORD) return res.status(503).json({ error: "setup", need: "ADMIN_PASSWORD" });
  if (!authorised(req)) {
    fails.set(ip, [...recentFails, now]);
    return res.status(401).json({ error: "Wrong password." });
  }
  if (!storeReady()) return res.status(503).json({ error: "setup", need: "store" });

  const days = Math.max(1, Math.min(90, parseInt(req.query.days, 10) || 30));
  const dates = [];
  for (let i = days - 1; i >= 0; i--) dates.push(dayKey(new Date(now - i * 86400000)));
  const uniq = [...new Set(dates)];

  let lists;
  try {
    lists = await pipeline(uniq.map((d) => ["LRANGE", `ev:${d}`, "0", "-1"]));
  } catch (e) {
    console.error("[admin]", String(e && e.message).slice(0, 200));
    return res.status(502).json({ error: "Couldn't read the stats store." });
  }

  const daily = uniq.map((d) => ({ d, visitors: new Set(), views: 0 }));
  const allVisitors = new Set(), newVisitors = new Set();
  const sessions = new Map();
  const pages = new Map(), pageVisitors = new Map(), sources = new Map(), referrers = new Map(), countries = new Map(), cities = new Map();
  const devices = new Map(), browsers = new Map(), oses = new Map(), clicks = new Map(), langs = new Map(), campaigns = new Map();
  let views = 0;
  const live = new Set();

  lists.forEach((items, i) => {
    for (const raw of items || []) {
      let ev; try { ev = JSON.parse(raw); } catch { continue; }
      let s = sessions.get(ev.s);
      if (!s) { s = { id: ev.s, v: ev.v, start: ev.t, last: ev.t, pages: [], dur: new Map(), clicks: [] }; sessions.set(ev.s, s); }
      s.start = Math.min(s.start, ev.t); s.last = Math.max(s.last, ev.t);
      if (now - ev.t < 5 * 60 * 1000) live.add(ev.v);
      if (ev.k === "view") {
        views++; daily[i].views++; daily[i].visitors.add(ev.v); allVisitors.add(ev.v);
        if (ev.n) newVisitors.add(ev.v);
        inc(pages, ev.p);
        if (!pageVisitors.has(ev.p)) pageVisitors.set(ev.p, new Set());
        pageVisitors.get(ev.p).add(ev.v);
        s.pages.push({ p: ev.p, t: ev.t });
        if (!s.meta || ev.f) {
          s.meta = { c: ev.c, rg: ev.rg, ci: ev.ci, device: ev.device, browser: ev.browser, os: ev.os, l: ev.l, src: sourceOf(ev), rf: ev.rf, n: ev.n, uc: ev.uc, um: ev.um };
        }
      } else if (ev.k === "end") {
        s.dur.set(ev.p, Math.max(s.dur.get(ev.p) || 0, ev.d || 0));
      } else if (ev.k === "click") {
        inc(clicks, ev.x); s.clicks.push(ev.x);
      }
    }
  });

  let bounces = 0, durTotal = 0, durCount = 0;
  const visitorSessions = new Map();
  for (const s of sessions.values()) {
    if (!s.meta) continue;
    const m = s.meta;
    inc(sources, m.src); if (m.rf) inc(referrers, m.rf.replace(/^https?:\/\/(www\.)?/, "").slice(0, 80));
    inc(countries, m.c || "??"); if (m.ci) inc(cities, `${m.ci}|${m.c || ""}`);
    inc(devices, m.device); inc(browsers, m.browser); inc(oses, m.os); inc(langs, (m.l || "").split("-")[0] || "");
    if (m.uc) inc(campaigns, m.uc);
    if (s.pages.length <= 1) bounces++;
    const d = [...s.dur.values()].reduce((a, b) => a + b, 0);
    s.time = d; if (d > 0) { durTotal += d; durCount++; }
    visitorSessions.set(s.v, (visitorSessions.get(s.v) || 0) + 1);
  }
  const counted = [...sessions.values()].filter((s) => s.meta);

  const recent = counted.sort((a, b) => b.start - a.start).slice(0, 60).map((s) => ({
    start: s.start, last: s.last, ...s.meta, pages: s.pages.sort((a, b) => a.t - b.t).map((x) => x.p), time: s.time,
    clicks: s.clicks, visits: visitorSessions.get(s.v) || 1,
  }));

  return res.status(200).json({
    days, tz: "Asia/Dubai", generated: now,
    totals: {
      visitors: allVisitors.size, newVisitors: newVisitors.size, views, sessions: counted.length,
      pagesPerSession: counted.length ? views / counted.length : 0,
      avgTime: durCount ? durTotal / durCount : 0,
      bounceRate: counted.length ? bounces / counted.length : 0,
      live: live.size,
    },
    daily: daily.map((x) => ({ d: x.d, visitors: x.visitors.size, views: x.views })),
    pages: top(pages, 15).map((x) => ({ ...x, u: pageVisitors.get(x.k).size })),
    sources: top(sources), referrers: top(referrers), countries: top(countries, 15), cities: top(cities),
    devices: top(devices), browsers: top(browsers), os: top(oses), clicks: top(clicks), languages: top(langs), campaigns: top(campaigns),
    recent,
  });
}
