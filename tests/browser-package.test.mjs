import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInContext, createContext, Script } from 'node:vm';
import { ORDER, META } from '../data/catalog.js';
import * as state from '../assets/js/core/state.js';

const root = new URL('../', import.meta.url);
const entry = await readFile(new URL('assets/js/runtime/app.js', root), 'utf8');
const chunks = Object.fromEntries(await Promise.all(ORDER.map(async key => [key, await readFile(new URL(`assets/js/runtime/${key}.js`, root), 'utf8')])));

function browser(protocol = 'file:', options = {}) {
  const nodes = new Map();
  const listeners = new Map();
  const store = new Map();
  const requests = [];
  const docNode = () => ({ hidden: false, textContent: '', innerHTML: '', style: { setProperty() {} }, dataset: {},
    classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, removeAttribute() {}, addEventListener() {}, focus() {},
    querySelector() { return docNode(); }, querySelectorAll() { return []; } });
  function get(selector) {
    if (!nodes.has(selector)) nodes.set(selector, docNode());
    return nodes.get(selector);
  }
  get('#fx').getContext = () => null;
  get('#splash').hidden = true;
  get('#loading').hidden = true;
  const origin = protocol === 'file:' ? 'file:///test/Folder%20with%20spaces/' : 'https://example.invalid/project/';
  const location = new URL(origin + 'index.html');
  location.hash = options.hash || '';
  let context;
  let bootReady = false;
  const doc = {
    hidden: false, documentElement: { style: {}, dataset: {} }, body: { style: { setProperty() {} }, dataset: {} },
    currentScript: { src: origin + 'assets/js/runtime/app.js' },
    querySelector: get, querySelectorAll: () => [],
    getElementById: id => get('#' + id), addEventListener() {},
    createElement: () => ({ remove() {} }),
    head: { appendChild(script) {
      requests.push(script.src);
      const key = new URL(script.src).pathname.match(/\/([a-z]+)\.js$/)?.[1];
      queueMicrotask(() => {
        if (options.failFirst && requests.length === 1) { script.onerror(); return; }
        try {
          if (!chunks[key]) throw new Error('Missing chunk');
          runInContext(chunks[key], context, { timeout: 1000 });
          script.onload();
        } catch (error) { script.onerror(error); }
      });
    } }
  };
  context = createContext({
    console: { error() {}, log() {} }, URL, Map, Set, Math, Promise, Object, Number, JSON, Date, String, Array,
    structuredClone, document: doc, location,
    history: { pushState(_a, _b, url) { location.href = new URL(url, location).href; }, replaceState(_a, _b, url) { location.href = new URL(url, location).href; } },
    localStorage: { getItem: key => store.get(key) ?? null, setItem: (key, value) => store.set(key, value) },
    addEventListener(type, callback) { listeners.set(type, callback); },
    matchMedia: () => ({ matches: true }), innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1,
    scrollTo() {}, cancelAnimationFrame() {}, requestAnimationFrame() { throw new Error('Unexpected idle animation'); },
    setTimeout() { return 0; }, clearTimeout() {},
    ZangaBoot: { ready() { bootReady = true; } }
  });
  context.window = context;
  runInContext(entry, context, { timeout: 1000 });
  async function settle() { for (let i = 0; i < 12; i++) await Promise.resolve(); }
  return { context, get, requests, listeners, location, get bootReady() { return bootReady; }, settle };
}

test('opening HTML never depends on module scripts and renders six cards before boot', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert(!html.includes('type="module"'));
  assert.equal((html.match(/class="scard"/g) || []).length, 6);
  assert(html.includes('assets/js/runtime/app.js'));
  assert(html.includes('bootStatus'));
  assert(!/\bimport\s*\(/.test(entry));
  assert(!/\bfetch\s*\(/.test(entry));
  new Script(entry);
  for (const source of Object.values(chunks)) new Script(source);
});

for (const protocol of ['file:', 'https:']) {
  test(`${protocol} startup, lazy course loading, and returning home for all six subjects`, async () => {
    const app = browser(protocol);
    assert.equal(app.bootReady, true);
    assert.equal((app.get('#subjects').innerHTML.match(/class="scard"/g) || []).length, 6);
    assert.equal(app.requests.length, 0);
    for (const key of ORDER) {
      // Hash navigation exercises the same public route used by saved links.
      app.location.hash = key;
      app.listeners.get('hashchange')();
      await app.settle();
      assert(app.get('#brand').innerHTML.includes(META[key].name), key);
      assert.equal(app.get('#loading').hidden, true, key);
      assert.equal(app.get('#subj').hidden, false, key);
      assert.equal(app.get('#homeError').hidden, true, key);
      app.get('#homeBtn').onclick();
      assert.equal(app.get('#home').hidden, false);
    }
    assert.equal(app.requests.length, 6);
    assert(app.requests.every(url => url.startsWith(protocol)));
    assert(app.requests.every(url => url.includes('/assets/js/runtime/')));
  });
}

test('a failed course download returns home and the next attempt can recover', async () => {
  const app = browser('https:', { failFirst: true });
  app.location.hash = 'net';
  app.listeners.get('hashchange')();
  await app.settle();
  assert.equal(app.get('#home').hidden, false);
  assert.equal(app.get('#homeError').hidden, false);
  app.location.hash = 'net';
  app.listeners.get('hashchange')();
  await app.settle();
  assert.equal(app.get('#subj').hidden, false);
  assert(app.get('#brand').innerHTML.includes(META.net.name));
  assert.equal(app.requests.length, 2);
});

test('switching courses retains one shared state object for classic course scripts', () => {
  const original = state.S;
  const subject = key => ({ TOPICS: [{ id: key }], Q: [], TOP: {} });
  state.activateSubject('net', subject('inet'));
  state.S.lab.test = true;
  state.activateSubject('os', subject('os'));
  assert.equal(state.S, original);
  assert.equal(state.S.lab.test, undefined);
  state.clearSubject();
  assert.equal(state.S, original);
  assert.deepEqual(state.S, {});
});
