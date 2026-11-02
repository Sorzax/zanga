// Keep the original uz_* keys. In-memory fallback keeps studying possible when
// browser storage is blocked; the interface then explains that saving is temporary.
const memory = new Map();
let available = true;

export const LS = {
  get available() { return available; },
  get(key, fallback) {
    let raw;
    try {
      raw = globalThis.localStorage?.getItem(key);
      if (!globalThis.localStorage) available = false;
    } catch {
      available = false;
    }
    raw ??= memory.get(key);
    if (raw == null) return structuredClone(fallback);
    try { return JSON.parse(raw); } catch { return structuredClone(fallback); }
  },
  set(key, value) {
    const raw = JSON.stringify(value);
    memory.set(key, raw);
    try {
      if (!globalThis.localStorage) throw new Error('Storage unavailable');
      globalThis.localStorage.setItem(key, raw);
      return true;
    } catch {
      available = false;
      return false;
    }
  }
};
