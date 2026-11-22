/*
  Notepad API (Vercel serverless function) — raw interview notes, one per person.

  GET  /api/notes?id=<person-id>                 → { text, by, updatedAt }
  PUT  /api/notes  { id, text, by, base, force } → { text, by, updatedAt }   (409 if someone saved in between)

  Every request needs the header  x-notes-key: <NOTES_PASSCODE>.
  Storage is Upstash Redis (Vercel → Storage → Upstash). Needs these environment variables:
    NOTES_PASSCODE                                  the team passcode
    KV_REST_API_URL / KV_REST_API_TOKEN             (or UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN)
*/
const crypto = require("crypto");

const MAX_TEXT = 200000;
const HISTORY = 30;

// Vercel may add a custom prefix to the variable names (e.g. STORAGE_KV_REST_API_URL), so match by suffix.
const pick = (...suffixes) => {
  for (const s of suffixes) {
    if (process.env[s]) return process.env[s];
    const k = Object.keys(process.env).find(name => {
      const n = name.toUpperCase();
      return (n === s || n.endsWith(`_${s}`)) && process.env[name];
    });
    if (k) return process.env[k];
  }
  return undefined;
};
const env = () => ({
  pass: process.env.NOTES_PASSCODE,
  url: pick("KV_REST_API_URL", "UPSTASH_REDIS_REST_URL"),
  token: pick("KV_REST_API_TOKEN", "UPSTASH_REDIS_REST_TOKEN"),
});

const noteKey = id => `ftu:note:${id}`;
const histKey = id => `ftu:hist:${id}`;
const cleanId = v => (typeof v === "string" && /^[a-z0-9-]{1,60}$/.test(v) ? v : null);

function sameSecret(a, b) {
  const h = s => crypto.createHash("sha256").update(String(s)).digest();
  return crypto.timingSafeEqual(h(a), h(b));
}

async function redis(cfg, commands) {
  const r = await fetch(`${cfg.url.replace(/\/$/, "")}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!r.ok) throw new Error(`storage ${r.status}`);
  return (await r.json()).map(x => {
    if (x.error) throw new Error(x.error);
    return x.result;
  });
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  let raw = "";
  for await (const chunk of req) raw += chunk;
  return JSON.parse(raw || "{}");
}

module.exports = async function handler(req, res) {
  const cfg = env();
  if (!cfg.pass || !cfg.url || !cfg.token) {
    const missing = [!cfg.pass && "NOTES_PASSCODE", !cfg.url && "KV_REST_API_URL", !cfg.token && "KV_REST_API_TOKEN"].filter(Boolean);
    return send(res, 503, { error: "not_configured", missing });
  }
  if (!sameSecret(req.headers["x-notes-key"] || "", cfg.pass)) return send(res, 401, { error: "bad_key" });

  try {
    if (req.method === "GET") {
      const id = cleanId(new URL(req.url, "http://x").searchParams.get("id"));
      if (!id) return send(res, 400, { error: "bad_id" });
      const [raw] = await redis(cfg, [["GET", noteKey(id)]]);
      return send(res, 200, raw ? JSON.parse(raw) : { text: "", by: "", updatedAt: null });
    }

    if (req.method === "PUT") {
      let b;
      try { b = await readBody(req); } catch { return send(res, 400, { error: "bad_json" }); }
      const id = cleanId(b.id);
      if (!id) return send(res, 400, { error: "bad_id" });
      if (typeof b.text !== "string" || b.text.length > MAX_TEXT) return send(res, 400, { error: "bad_text" });
      const by = typeof b.by === "string" ? b.by.trim().slice(0, 60) : "";

      const [raw] = await redis(cfg, [["GET", noteKey(id)]]);
      const cur = raw ? JSON.parse(raw) : null;
      if (cur && !b.force && b.base !== cur.updatedAt) return send(res, 409, { error: "conflict", current: cur });

      const next = { text: b.text, by, updatedAt: new Date().toISOString() };
      const cmds = [["SET", noteKey(id), JSON.stringify(next)], ["SADD", "ftu:notes", id]];
      // Keep earlier versions: whenever another person writes, or after a 10-minute gap.
      if (cur && cur.text && cur.text !== b.text &&
          (cur.by !== by || Date.now() - Date.parse(cur.updatedAt) > 10 * 60 * 1000)) {
        cmds.push(["LPUSH", histKey(id), raw], ["LTRIM", histKey(id), "0", String(HISTORY - 1)]);
      }
      await redis(cfg, cmds);
      return send(res, 200, next);
    }

    res.setHeader("Allow", "GET, PUT");
    return send(res, 405, { error: "method" });
  } catch (e) {
    return send(res, 502, { error: "storage" });
  }
};
