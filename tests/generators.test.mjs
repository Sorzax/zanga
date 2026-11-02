import test from 'node:test';
import assert from 'node:assert/strict';
import { ORDER } from '../data/catalog.js';
import { activateSubject } from '../assets/js/core/state.js';

for (const key of ORDER) {
  test(`${key}: generated exercises have usable options and explanations`, async () => {
    const subject = (await import(`../assets/js/subjects/${key}.js`)).createSubject();
    activateSubject(key, subject);
    for (const [topic, generate] of Object.entries(subject.GEN)) {
      for (let i = 0; i < 12; i++) {
        const index = generate();
        const question = subject.Q[index];
        assert(question, `${key}/${topic}: generator returned an invalid index`);
        assert.equal(question[7], 1);
        assert(question[3].length >= 2);
        assert(question[3].every(answer => typeof answer === 'string' && answer.length));
        assert.equal(new Set(question[3]).size, question[3].length, `${key}/${topic}: duplicate options`);
        assert.equal(typeof question[4], 'string');
        assert.equal(typeof question[5], 'string');
      }
    }
  });
}
