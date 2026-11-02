import test from 'node:test';
import assert from 'node:assert/strict';
import * as state from '../assets/js/core/state.js';
import { runQuiz } from '../assets/js/features/quiz.js';

// A small DOM stand-in exercises quiz state transitions without a browser package.
const node = extra => ({ classList: { add() {}, remove() {} }, focus() {}, ...extra });
const overlay = node();
globalThis.document = { querySelector: () => overlay };
state.G.sound = false;

class QuizArea {
  set innerHTML(html) {
    this.html = html;
    this.buttons = new Map();
    for (const match of html.matchAll(/data-q="([^"]+)"/g)) this.buttons.set(match[1], node());
    this.options = [...html.matchAll(/data-k="(\d+)"/g)].map(match => node({ dataset: { k: match[1] } }));
  }
  get innerHTML() { return this.html; }
  querySelector(selector) { return this.buttons.get(selector.match(/data-q="([^"]+)"/)?.[1]) || null; }
  querySelectorAll() { return this.options; }
  click(key) { this.buttons.get(key).onclick(); }
}

const subject = { TOPICS: [{ id: 'test', ch: 1 }], TOP: { test: { t: 'Test' } },
  Q: [[1, 'test', 'Question', ['Yes', 'No'], 'شرح', 'Explanation', 0, 0]],
  CHS: [1], CHAL: [], chl: ch => `Chapter ${ch}` };

test('one answer is counted once, and revisiting the result does not complete twice', () => {
  state.activateSubject('net', subject);
  const area = new QuizArea();
  let completed = 0, results = 0;
  runQuiz(area, [0], { calm: true, onDone: () => completed++, onResult: () => results++ });
  const answer = area.options.find(option => option.dataset.k === '0').onclick;
  answer();
  answer();
  assert.equal(state.S.total, 1);
  assert.equal(state.S.right, 1);
  area.click('next');
  assert.equal(completed, 1);
  area.click('review');
  area.click('next');
  assert.equal(completed, 1);
  assert.equal(results, 2);
  assert.equal(state.S.total, 1);
});

test('a wrong answer is saved for review and invalid indices are ignored', () => {
  state.activateSubject('net', subject);
  state.S.miss = [];
  const area = new QuizArea();
  runQuiz(area, [-1, 999, 0], { calm: true });
  area.options.find(option => option.dataset.k === '1').onclick();
  assert.deepEqual(state.S.miss, [0]);
});
