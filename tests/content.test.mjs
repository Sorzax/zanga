import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { ORDER, SUBJECT_STATS } from '../data/catalog.js';

const baseline = JSON.parse(await readFile(new URL('./content-baseline.json', import.meta.url), 'utf8'));

for (const key of ORDER) {
  test(`${key}: original content, indices, figures, and chapter order are preserved`, async () => {
    const { createSubject } = await import(`../assets/js/subjects/${key}.js`);
    const subject = createSubject();
    for (const [field, expected] of Object.entries(baseline[key])) {
      const data = JSON.stringify(subject[field]);
      assert.equal(createHash('sha256').update(data).digest('hex'), expected, field);
    }
    assert.equal(subject.TOPICS.length, SUBJECT_STATS[key].lessons);
    assert.equal(subject.Q.filter(q => !q[7]).length, SUBJECT_STATS[key].questions);
    assert.equal(new Set(subject.TOPICS.map(t => t.id)).size, subject.TOPICS.length);
    assert.equal(typeof subject.lab.render, 'function');
    for (const topic of subject.TOPICS) {
      assert(subject.CHS.includes(topic.ch), `Missing chapter ${topic.ch}`);
      assert.equal(subject.TOP[topic.id], topic);
      assert(subject.Q.some(q => q[1] === topic.id && !q[7]), `No practice questions: ${topic.id}`);
    }
    for (const q of subject.Q) {
      assert(Array.isArray(q[3]) && q[3].length >= 2, `Invalid options: ${q[2]}`);
      assert.equal(typeof q[2], 'string');
    }
  });
}
