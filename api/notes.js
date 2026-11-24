/*
  Shared-text API (Vercel serverless function), used by
    - the Notepad (kind "note"): raw interview notes, one per person
    - the Report page (kind "doc"): a shared document stored as HTML

  GET  /api/notes?kind=<note|doc>&id=<id>[&meta=1]       → { text, by, updatedAt }  (meta=1: no text)
  PUT  /api/notes  { kind, id, text, by, base, force }   → { by, updatedAt }        (409 if someone saved in between)
  kind defaults to "note".

  Every request needs the header  x-notes-key: <NOTES_PASSCODE>.
  Storage is Upstash Redis (Vercel → Storage → Upstash). Needs these environment variables:
    NOTES_PASSCODE                                  the team passcode
    KV_REST_API_URL / KV_REST_API_TOKEN             (or UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN)
*/
const crypto = require("crypto");

// note: limit in characters; doc: limit in bytes (Upstash requests must stay small)
const KINDS = {
  note: { key: "ftu:note:", hist: "ftu:hist:", meta: "ftu:notemeta:", index: "ftu:notes", maxChars: 200000, history: 30 },
  doc:  { key: "ftu:doc:",  hist: "ftu:dochist:", meta: "ftu:docmeta:", index: "ftu:docs", maxBytes: 800 * 1024, history: 10 },
};

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

const PROGRESS_KEY = "ftu:progress:";
async function readProgress(cfg, key) {
  const [flat] = await redis(cfg, [["HGETALL", key]]);
  const items = {};
  if (Array.isArray(flat)) for (let i = 0; i < flat.length; i += 2) {
    try { items[flat[i]] = JSON.parse(flat[i + 1]); } catch { items[flat[i]] = {}; }
  } else if (flat && typeof flat === "object") for (const [k, v] of Object.entries(flat)) {
    try { items[k] = JSON.parse(v); } catch { items[k] = {}; }
  }
  return items;
}

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
  // Chapter-outline ticks (kind=progress): anyone can read, only the team (passcode) can change.
  // Stored as a Redis hash so two people ticking different sections at once never overwrite each other.
  const q0 = new URL(req.url, "http://x").searchParams;
  if (q0.get("kind") === "progress") {
    const id = cleanId(q0.get("id"));
    if (!id) return send(res, 400, { error: "bad_id" });
    const key = PROGRESS_KEY + id;
    try {
      if (req.method === "GET") return send(res, 200, { items: await readProgress(cfg, key) });
      if (req.method !== "PUT") { res.setHeader("Allow", "GET, PUT"); return send(res, 405, { error: "method" }); }
      if (!sameSecret(req.headers["x-notes-key"] || "", cfg.pass)) return send(res, 401, { error: "bad_key" });
      let b;
      try { b = await readBody(req); } catch { return send(res, 400, { error: "bad_json" }); }
      if (typeof b.item !== "string" || !/^[A-Za-z0-9.]{1,12}$/.test(b.item) || typeof b.done !== "boolean") {
        return send(res, 400, { error: "bad_item" });
      }
      const by = typeof b.by === "string" ? b.by.trim().slice(0, 60) : "";
      await redis(cfg, [b.done
        ? ["HSET", key, b.item, JSON.stringify({ by, at: new Date().toISOString() })]
        : ["HDEL", key, b.item]]);
      return send(res, 200, { items: await readProgress(cfg, key) });
    } catch {
      return send(res, 502, { error: "storage" });
    }
  }

  if (!sameSecret(req.headers["x-notes-key"] || "", cfg.pass)) return send(res, 401, { error: "bad_key" });

  try {
    if (req.method === "GET") {
      const q = new URL(req.url, "http://x").searchParams;
      const K = KINDS[q.get("kind") || "note"];
      const id = cleanId(q.get("id"));
      if (!K) return send(res, 400, { error: "bad_kind" });
      if (!id) return send(res, 400, { error: "bad_id" });
      if (q.get("meta")) {
        const [m] = await redis(cfg, [["GET", K.meta + id]]);
        return send(res, 200, m ? JSON.parse(m) : { by: "", updatedAt: null });
      }
      const [raw] = await redis(cfg, [["GET", K.key + id]]);
      return send(res, 200, raw ? JSON.parse(raw) : { text: "", by: "", updatedAt: null });
    }

    if (req.method === "PUT") {
      let b;
      try { b = await readBody(req); } catch { return send(res, 400, { error: "bad_json" }); }
      const K = KINDS[b.kind || "note"];
      const id = cleanId(b.id);
      if (!K) return send(res, 400, { error: "bad_kind" });
      if (!id) return send(res, 400, { error: "bad_id" });
      if (typeof b.text !== "string") return send(res, 400, { error: "bad_text" });
      if ((K.maxChars && b.text.length > K.maxChars) || (K.maxBytes && Buffer.byteLength(b.text) > K.maxBytes)) {
        return send(res, 413, { error: "too_large" });
      }
      const by = typeof b.by === "string" ? b.by.trim().slice(0, 60) : "";

      const [m] = await redis(cfg, [["GET", K.meta + id]]);
      let meta = m ? JSON.parse(m) : null;
      if (!meta) {   // notes saved before meta keys existed
        const [raw0] = await redis(cfg, [["GET", K.key + id]]);
        if (raw0) { const c = JSON.parse(raw0); meta = { by: c.by, updatedAt: c.updatedAt }; }
      }
      if (meta && !b.force && b.base !== meta.updatedAt) {
        const [raw1] = await redis(cfg, [["GET", K.key + id]]);
        return send(res, 409, { error: "conflict", current: raw1 ? JSON.parse(raw1) : meta });
      }

      // Keep earlier versions: whenever another person writes, or after a 10-minute gap.
      if (meta && (meta.by !== by || Date.now() - Date.parse(meta.updatedAt) > 10 * 60 * 1000)) {
        const [raw] = await redis(cfg, [["GET", K.key + id]]);
        if (raw && JSON.parse(raw).text !== b.text) {
          await redis(cfg, [["LPUSH", K.hist + id, raw], ["LTRIM", K.hist + id, "0", String(K.history - 1)]]);
        }
      }
      const next = { text: b.text, by, updatedAt: new Date().toISOString() };
      const info = { by, updatedAt: next.updatedAt };
      await redis(cfg, [["SET", K.key + id, JSON.stringify(next)], ["SET", K.meta + id, JSON.stringify(info)], ["SADD", K.index, id]]);
      return send(res, 200, info);
    }

    res.setHeader("Allow", "GET, PUT");
    return send(res, 405, { error: "method" });
  } catch (e) {
    return send(res, 502, { error: "storage" });
  }
};
