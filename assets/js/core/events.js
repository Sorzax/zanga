// Shared notifications keep storage independent of the screen that is open.
const listeners = new Map();

export function on(event, callback) {
  if (!listeners.has(event)) listeners.set(event, new Set());
  listeners.get(event).add(callback);
  return () => listeners.get(event)?.delete(callback);
}

export function emit(event, value) {
  for (const callback of listeners.get(event) || []) callback(value);
}
