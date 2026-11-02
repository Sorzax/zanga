import { $, $$ } from './core/utils.js';
import { G } from './core/state.js';
import { LS } from './core/storage.js';
import { initEffects, toast } from './core/effects.js';
import { initNavigation } from './ui/navigation.js';

function paintSound() {
  $('#soundBtn').textContent = 'الصوت: ' + (G.sound ? 'شغّال' : 'طافي');
  $('#soundBtn').setAttribute('aria-pressed', String(G.sound));
}

$('#soundBtn').onclick = () => {
  G.sound = !G.sound;
  LS.set('uz_sound', G.sound);
  paintSound();
};

addEventListener('keydown', event => {
  if (event.ctrlKey || event.altKey || event.metaKey || event.repeat || !$('#splash').hidden) return;
  if (/INPUT|SELECT|TEXTAREA/.test(event.target.tagName) || event.target.isContentEditable) return;
  const number = Number(event.key);
  if (!Number.isInteger(number) || number < 1 || number > 4) return;
  const options = $$('.opts').find(el => el.getClientRects().length);
  const button = options?.querySelectorAll('.opt')[number - 1];
  if (button && !button.disabled) { event.preventDefault(); button.click(); }
});

// Image paths are preserved. A readable caption replaces a missing slide image.
document.addEventListener('error', event => {
  if (event.target.tagName !== 'IMG' || !event.target.closest('.fig')) return;
  const img = event.target;
  img.hidden = true;
  const note = document.createElement('p');
  note.className = 'missing-slide';
  note.textContent = 'صورة السلايد غير متوفرة حاليًا.';
  img.after(note);
}, true);

paintSound();
initEffects();
initNavigation();
globalThis.ZangaBoot?.ready();
if (!LS.available) toast('الحفظ مؤقت في هذه الجلسة؛ تخزين المتصفح غير متاح.');
