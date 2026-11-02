import test from 'node:test';
import assert from 'node:assert/strict';
import { ORDER } from '../data/catalog.js';
import { activateSubject } from '../assets/js/core/state.js';
import { buildPlan } from '../assets/js/features/plan.js';

for (const key of ORDER) {
  test(`${key}: plans cover every lesson once for short and long schedules`, async () => {
    const subject = (await import(`../assets/js/subjects/${key}.js`)).createSubject();
    activateSubject(key, subject);
    const expected = subject.CHS.flatMap(ch => subject.TOPICS.filter(t => t.ch === ch).map(t => t.id));
    for (const count of [1, 2, 3, 7, 14, 30, 90]) {
      const plan = buildPlan(count);
      assert.equal(plan.length, count, `Wrong number of days: ${count}`);
      assert.deepEqual(plan.flatMap(day => day.L), expected);
      assert(plan.some(day => day.tests.includes('all')));
      assert(plan.every(day => Number.isFinite(day.mins) && day.mins >= 0));
    }
  });
}
