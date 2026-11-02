import { S, save } from './state.js';
import { confetti, beep, toast } from './effects.js';

export function solved(id) {
  const was = S.lab[id];
  S.lab[id] = true;
  save();
  if (!was) { confetti(70); beep('soft'); toast('تحدي محلول'); }
}
