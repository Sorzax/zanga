import { META, ORDER, THEMES, SUBJECT_STATS } from '../../../data/catalog.js';
import { loadS, clearSubject } from '../core/state.js';
import { LS } from '../core/storage.js';
import { $, $$, ar } from '../core/utils.js';
import { nDays } from '../features/plan.js';
import { applyTheme } from './theme.js';
import { openSubject } from './navigation.js';

// Small, local vector icons; no image downloads are needed for the home screen.
const icons = {
  net: '<path d="M12 16l34 0-8 28H20L12 16zm0 0 26 28M46 16 20 44"/><circle cx="12" cy="16" r="5"/><circle cx="46" cy="16" r="5"/><circle cx="20" cy="44" r="5"/><circle cx="38" cy="44" r="5"/>',
  os: '<rect x="9" y="12" width="40" height="29" rx="3"/><path d="M20 49h18M29 41v8M17 21h9m-9 8h23"/>',
  algo: '<rect x="4" y="32" width="9" height="19"/><rect x="18" y="24" width="9" height="27"/><rect x="32" y="13" width="9" height="38"/><rect x="46" y="5" width="9" height="46"/>',
  web: '<rect x="5" y="10" width="48" height="38" rx="4"/><path d="M5 20h48M23 28l-8 6 8 6m12-12 8 6-8 6"/>',
  pl: '<path d="M20 8c-8 0-8 4-8 12 0 6-6 9-6 9s6 3 6 9c0 8 0 12 8 12M38 8c8 0 8 4 8 12 0 6 6 9 6 9s-6 3-6 9c0 8 0 12-8 12M25 35l8-13"/>',
  sc: '<rect x="4" y="9" width="13" height="12" rx="2"/><rect x="23" y="9" width="13" height="12" rx="2"/><rect x="42" y="9" width="12" height="12" rx="2"/><rect x="4" y="27" width="13" height="12" rx="2"/><rect x="42" y="27" width="12" height="12" rx="2"/><path d="M4 46h13m25 0h12"/>'
};

export function renderHome() {
  clearSubject();
  document.body.dataset.mode = 'rayeq';
  document.title = 'زنقة الكلاب';
  $('#home').hidden = false;
  $('#subj').hidden = true;
  $('#loading').hidden = true;
  $('#splash').hidden = true;
  $('#homeError').hidden = true;
  applyTheme('home');
  const last = LS.get('uz_last', null);
  $('#subjects').innerHTML = ORDER.map(key => {
    const stats = SUBJECT_STATS[key], color = THEMES[key].rayeq.score, state = loadS(key);
    const mastered = Math.min(stats.lessons, Object.values(state.mast).filter(value => value >= 80).length);
    const pct = Math.round(100 * mastered / stats.lessons);
    return `<button class="scard" data-s="${key}" style="--c:${color}">
      ${last === key ? '<span class="last">آخر وحدة</span>' : ''}
      <svg viewBox="0 0 58 58" aria-hidden="true" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${icons[key]}</svg>
      <h2>${META[key].name}</h2><div class="sen">${META[key].en}</div>
      <div class="smeta"><span>${ar(stats.lessons)} درس</span><span>${ar(stats.questions)} سؤال</span>
      <span>${META[key].sub}</span>${state.plan ? `<span>خطتك: ${nDays(state.plan.days)}</span>` : ''}${mastered ? `<span>أتقنت ${pct}%</span>` : ''}</div>
      <div class="sbar"><i style="width:${pct}%"></i></div></button>`;
  }).join('');
  $$('#subjects .scard').forEach(button => button.onclick = () => { void openSubject(button.dataset.s); });
  scrollTo({ top: 0 });
}
