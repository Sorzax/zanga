// Run from the project root: node scripts/export-questions.mjs > questions.seed.json
// Import this file into your backend; do not publish it as a ranked quiz API.
import { ORDER } from '../data/catalog.js';

const questions = [];
for (const subject of ORDER) {
  const { Q } = await import(`../data/subjects/${subject}.js`);
  Q.forEach((q, index) => {
    if (q[7]) return;
    questions.push({
      id: `${subject}-q${String(index).padStart(4, '0')}`,
      subject, topic: q[1], chapter: q[0], prompt: q[2],
      options: q[3].map((text, option) => ({ id: `o${option}`, text })),
      correctOptionId: 'o0', explanationAr: q[4], explanationEn: q[5]
    });
  });
}
console.log(JSON.stringify({ schemaVersion: 1, questions }, null, 2));
