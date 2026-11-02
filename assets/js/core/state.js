import { LS } from './storage.js';
import { emit } from './events.js';

export let CUR = null;
export let M = null;
export let TOPICS = [];
export let Q = [];
export let TOP = {};
// Keep this object stable: independently loaded classic scripts share it too.
export const S = {};
export let MODE = 'rayeq';
export const G = { sound: LS.get('uz_sound', true) === true };

const KEYS = ['xp', 'best', 'right', 'total', 'done3', 'miss', 'mast', 'ctest', 'seen', 'lab', 'plan', 'rtab', 'ztab'];
const number = value => Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
const object = value => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
const unique = value => [...new Set(Array.isArray(value) ? value : [])];

export function loadS(key, subject) {
  const get = (field, fallback) => LS.get(`uz_${key}_${field}`, fallback);
  const state = {
    xp: number(get('xp', 0)),
    best: number(get('best', 0)),
    right: number(get('right', 0)),
    total: number(get('total', 0)),
    done3: unique(get('done3', [])).filter(v => typeof v === 'string'),
    miss: unique(get('miss', [])).filter(v => Number.isInteger(v) && v >= 0),
    mast: object(get('mast', {})),
    ctest: object(get('ctest', {})),
    seen: object(get('seen', {})),
    lab: object(get('lab', {})),
    plan: get('plan', null),
    rtab: get('rtab', 'plan'),
    ztab: get('ztab', 'sum')
  };
  state.right = Math.min(state.right, state.total);
  for (const field of ['mast', 'ctest']) {
    state[field] = Object.fromEntries(Object.entries(state[field]).filter(([, v]) => Number.isFinite(v) && v >= 0 && v <= 100));
  }
  if (typeof state.rtab !== 'string') state.rtab = 'plan';
  if (typeof state.ztab !== 'string') state.ztab = 'sum';
  const plan = state.plan;
  const date = plan && typeof plan.start === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(plan.start) ? new Date(plan.start + 'T12:00:00Z') : null;
  if (!plan || !Number.isInteger(plan.days) || plan.days < 1 || plan.days > 90 || !date || Number.isNaN(+date) || date.toISOString().slice(0, 10) !== plan.start) {
    state.plan = null;
  } else {
    state.plan = { days: plan.days, start: plan.start };
  }
  if (subject) {
    const ids = new Set(subject.TOPICS.map(t => t.id));
    state.done3 = state.done3.filter(id => ids.has(id));
    state.miss = state.miss.filter(index => subject.Q[index] && !subject.Q[index][7]);
    state.mast = Object.fromEntries(Object.entries(state.mast).filter(([id]) => ids.has(id)));
  }
  return state;
}

export function save() {
  if (!CUR) return;
  for (const key of KEYS) LS.set(`uz_${CUR}_${key}`, S[key]);
  emit('statechange');
}

export function activateSubject(key, subject) {
  CUR = key;
  M = subject;
  TOPICS = subject.TOPICS;
  Q = subject.Q;
  TOP = subject.TOP;
  const restored = loadS(key, subject);
  for (const field of Object.keys(S)) delete S[field];
  Object.assign(S, restored);
  MODE = 'rayeq';
  LS.set('uz_last', key);
}

export function clearSubject() {
  CUR = null;
  M = null;
  TOPICS = [];
  Q = [];
  TOP = {};
  for (const field of Object.keys(S)) delete S[field];
  MODE = 'rayeq';
}

export function setCurrentMode(mode) { MODE = mode; }
