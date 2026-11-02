import test from 'node:test';
import assert from 'node:assert/strict';
import { LS } from '../assets/js/core/storage.js';
import { loadS, activateSubject, save } from '../assets/js/core/state.js';
import { createSubject } from '../assets/js/subjects/net.js';
import { esc, shuffle } from '../assets/js/core/utils.js';

const store = new Map();
globalThis.localStorage = { getItem: key => store.get(key) ?? null, setItem: (key, value) => store.set(key, value) };

test('existing browser progress survives under the same uz_* keys', () => {
  store.clear();
  LS.set('uz_net_xp', 120);
  LS.set('uz_net_total', 10);
  LS.set('uz_net_right', 8);
  LS.set('uz_net_mast', { inet: 90 });
  LS.set('uz_net_miss', [0, 2]);
  const subject = createSubject();
  const restored = loadS('net', subject);
  assert.equal(restored.xp, 120);
  assert.equal(restored.mast.inet, 90);
  assert.deepEqual(restored.miss, [0, 2]);
  activateSubject('net', subject);
  save();
  assert.equal(JSON.parse(store.get('uz_net_xp')), 120);
  assert.deepEqual(JSON.parse(store.get('uz_net_miss')), [0, 2]);
});

test('corrupt JSON, wrong types, unknown questions, and impossible plan dates recover', () => {
  store.clear();
  store.set('uz_net_lab', '{broken');
  LS.set('uz_net_xp', '100');
  LS.set('uz_net_done3', { inet: true });
  LS.set('uz_net_miss', [0, 0, -1, '2', 999999]);
  LS.set('uz_net_mast', { inet: 80, proto: 999, missing: 100 });
  LS.set('uz_net_plan', { days: 7, start: '2026-02-31' });
  const restored = loadS('net', createSubject());
  assert.equal(restored.xp, 0);
  assert.deepEqual(restored.lab, {});
  assert.deepEqual(restored.done3, []);
  assert.deepEqual(restored.miss, [0]);
  assert.deepEqual(restored.mast, { inet: 80 });
  assert.equal(restored.plan, null);
});

test('blocked storage still permits temporary studying', () => {
  const saved = globalThis.localStorage;
  globalThis.localStorage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.equal(LS.set('temporary', { xp: 5 }), false);
  assert.deepEqual(LS.get('temporary', null), { xp: 5 });
  globalThis.localStorage = saved;
});

test('escaping handles attribute quotes and shuffle preserves its input', () => {
  assert.equal(esc('" onfocus="x < &'), '&quot; onfocus=&quot;x &lt; &amp;');
  const input = [1, 2, 3, 4];
  assert.deepEqual(shuffle(input).sort(), input);
  assert.deepEqual(input, [1, 2, 3, 4]);
});
