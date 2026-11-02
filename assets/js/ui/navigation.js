import { META, ORDER } from '../../../data/catalog.js';
import { CUR, M, TOPICS, S, MODE, activateSubject, setCurrentMode, save } from '../core/state.js';
import { $, $$, ar } from '../core/utils.js';
import { CHAL, isMast } from '../core/helpers.js';
import { on } from '../core/events.js';
import { reduced, beep, confetti, hype, clearEffects } from '../core/effects.js';
import { applyTheme } from './theme.js';
import { renderHome } from './home.js';
import { renderPlan } from '../features/plan.js';
import { renderLessons, openLesson } from '../features/lessons.js';
import { renderBuilder } from '../features/builder.js';
import { renderCtest } from '../features/chapter-test.js';
import { renderExtra } from '../features/extra.js';
import { renderMiss } from '../features/mistakes.js';
import { renderSum, renderHot } from '../features/summary.js';
import { renderDrill } from '../features/drills.js';

const loaders = {
  net: () => import('../subjects/net.js'), os: () => import('../subjects/os.js'),
  algo: () => import('../subjects/algo.js'), web: () => import('../subjects/web.js'),
  pl: () => import('../subjects/pl.js'), sc: () => import('../subjects/sc.js')
};
const cache = new Map();
let request = 0;
let splashTimer;
let splashConfetti;

function closeSplash() {
  clearTimeout(splashTimer);
  clearTimeout(splashConfetti);
  $('#splash').hidden = true;
}

function updateHistory(key, mode) {
  if (mode === 'none') return;
  const next = location.pathname + location.search + (key ? '#' + key : '');
  if (next === location.pathname + location.search + location.hash) return;
  history[mode === 'replace' ? 'replaceState' : 'pushState'](null, '', next);
}

export function navigateHome({ historyMode = 'push' } = {}) {
  request++;
  closeSplash();
  clearEffects();
  renderHome();
  $('#app').removeAttribute('aria-busy');
  updateHistory(null, historyMode);
}

export async function openSubject(key, { historyMode = 'push' } = {}) {
  if (!ORDER.includes(key)) return navigateHome({ historyMode: 'replace' });
  const token = ++request;
  closeSplash();
  clearEffects();
  $('#home').hidden = true;
  $('#subj').hidden = true;
  $('#loading').hidden = false;
  $('#app').setAttribute('aria-busy', 'true');
  try {
    if (!cache.has(key)) cache.set(key, (await loaders[key]()).createSubject());
    if (token !== request) return;
    activateSubject(key, cache.get(key));
    document.title = 'زنقة الكلاب · ' + META[key].en;
    $('#loading').hidden = true;
    $('#subj').hidden = false;
    setMode('rayeq');
    updateHistory(key, historyMode);
  } catch (error) {
    if (token !== request) return;
    renderHome();
    $('#homeError').textContent = 'ما قدرنا نحمّل المادة. تأكد من الاتصال، وحاول تفتحها مرة ثانية.';
    $('#homeError').hidden = false;
    console.error('Subject load failed:', key, error);
  } finally {
    if (token === request) $('#app').removeAttribute('aria-busy');
  }
}

export function setMode(mode) {
  if (!CUR) return;
  closeSplash();
  clearEffects();
  setCurrentMode(mode);
  document.body.dataset.mode = mode;
  applyTheme(CUR, mode);
  $('#rayeqMode').hidden = mode !== 'rayeq';
  $('#zangaMode').hidden = mode !== 'zanga';
  $('#brand').innerHTML = (mode === 'zanga' ? 'زنقة الكلاب' : 'الرايق') + `<small>${META[CUR].name} · ${META[CUR].en}</small>`;
  $('#modebar').innerHTML = mode === 'rayeq'
    ? '<button class="zbtn" id="toZ"><span><b>مزنوق؟</b><br><span>الاختبار قريب؟ ادخل زنقة الكلاب: التلخيص، أهم النقاط، وتدريبات عليها</span></span><i>يلا ←</i></button>'
    : '<button class="rbtn" id="toR">→ رجّعني للرايق (الدروس والخطة)</button>';
  if (mode === 'rayeq') {
    $('#toZ').onclick = enterZanga;
    buildRTabs();
    showR(S.rtab || 'plan');
  } else {
    $('#toR').onclick = () => setMode('rayeq');
    buildZTabs();
    showZ(S.ztab || 'sum');
  }
  paintStats();
}

export function enterZanga() {
  setMode('zanga');
  const splash = $('#splash');
  splash.hidden = false;
  beep('horn');
  splashConfetti = setTimeout(() => confetti(160), 250);
  const close = () => { closeSplash(); hype('يلا يلا يلا!!'); scrollTo({ top: 0 }); };
  splash.onclick = close;
  splashTimer = setTimeout(close, reduced() ? 900 : 2300);
}

function tabsHTML(items, prefix) {
  return items.map(([key, title, description]) => `<button class="tab" role="tab" id="${prefix}-tab-${key}" aria-controls="${prefix}-${key}" data-tab="${key}" tabindex="-1">${title}<small>${description}</small></button>`).join('');
}

export function buildRTabs() {
  const items = [['plan','خطتي','على قد وقتك'], ['lessons','الدروس','بالترتيب'],
    ['lab',META[CUR].lab.tab,META[CUR].lab.sub], ['build','اختبار مخصص','العدد والدروس'], ['ctest','اختبار شابتر','بدون وقت']];
  if (M.EXTRA) items.push(['extra', M.EXTRA.tab, M.EXTRA.sub]);
  items.push(['miss','أخطائي', `<span class="missCount">${ar(S.miss.length)} سؤال</span>`]);
  $('#rTabs').innerHTML = tabsHTML(items, 'r');
  $$('#rTabs .tab').forEach(button => button.onclick = () => showR(button.dataset.tab));
}

export function buildZTabs() {
  const items = [['sum','التلخيص','كروت + درّبني'], ['hot','أهم النقاط',`${ar(M.HOT_POINTS.length)} نقطة`], ['drill','تدريبات','على الملخص']];
  if (M.EXTRA) items.push(['extra', M.EXTRA.tab, M.EXTRA.sub]);
  items.push(['miss','أخطائي', `<span class="missCount">${ar(S.miss.length)} سؤال</span>`]);
  $('#zTabs').innerHTML = tabsHTML(items, 'z');
  $$('#zTabs .tab').forEach(button => button.onclick = () => showZ(button.dataset.tab));
}

function selectTab(prefix, tab, all) {
  $$(`#${prefix}Tabs .tab`).forEach(button => {
    const selected = button.dataset.tab === tab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  for (const key of all) {
    const panel = $(`#${prefix}-${key}`);
    panel.hidden = key !== tab;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `${prefix}-tab-${key}`);
  }
}

export function showR(tab, arg) {
  const all = ['plan','lessons','lab','build','ctest','extra','miss'];
  if (!all.includes(tab) || (tab === 'extra' && !M.EXTRA)) tab = 'plan';
  S.rtab = tab;
  save();
  selectTab('r', tab, all);
  if (tab === 'plan') renderPlan();
  if (tab === 'lessons') arg ? openLesson(arg) : renderLessons();
  if (tab === 'lab') {
    $('#labTitle').textContent = META[CUR].lab.title;
    $('#labLead').textContent = META[CUR].lab.lead;
    M.lab.render();
  }
  if (tab === 'build') renderBuilder();
  if (tab === 'ctest') renderCtest(arg);
  if (tab === 'extra') renderExtra('r');
  if (tab === 'miss') renderMiss($('#r-miss .missList'), 'r');
  scrollTo({ top: 0, behavior: reduced() ? 'instant' : 'smooth' });
}

export function showZ(tab, arg) {
  const all = ['sum','hot','drill','extra','miss'];
  if (!all.includes(tab) || (tab === 'extra' && !M.EXTRA)) tab = 'sum';
  S.ztab = tab;
  save();
  selectTab('z', tab, all);
  if (tab === 'sum') renderSum();
  if (tab === 'hot') renderHot();
  if (tab === 'drill') renderDrill(arg);
  if (tab === 'extra') renderExtra('z');
  if (tab === 'miss') renderMiss($('#z-miss .missList'), 'z');
}

export function paintStats() {
  if (!CUR) return;
  $$('.missCount').forEach(el => { el.textContent = ar(S.miss.length) + ' سؤال'; });
  const accuracy = S.total ? ar(Math.round(100 * S.right / S.total)) + '%' : '—';
  const mastered = TOPICS.filter(t => isMast(t.id)).length;
  if (MODE === 'rayeq') {
    const challenges = CHAL();
    $('#stats').innerHTML = `<div class="stat"><b>${mastered}/${TOPICS.length}</b><span>دروس متقنة</span></div>
      <div class="stat"><b>${Math.round(100 * mastered / TOPICS.length)}%</b><span>تقدّمك</span></div>
      <div class="stat"><b>${accuracy}</b><span>دقّتك</span></div>
      ${challenges.length ? `<div class="stat"><b>${challenges.filter(x => S.lab[x.id]).length}/${challenges.length}</b><span>تحديات المختبر</span></div>` : ''}`;
  } else {
    $('#stats').innerHTML = `<div class="stat"><b>${ar(S.xp)}</b><span>نقاط</span></div>
      <div class="stat"><b>${ar(S.best)}</b><span>أعلى كومبو</span></div><div class="stat"><b>${accuracy}</b><span>دقّتك</span></div>
      <div class="stat"><b>${TOPICS.filter(t => S.done3.includes(t.id)).length}/${TOPICS.length}</b><span>كروت الملخص</span></div>`;
  }
}

export function initNavigation() {
  $('#homeBtn').onclick = () => navigateHome();
  on('statechange', paintStats);
  const route = () => {
    const key = location.hash.slice(1);
    if (ORDER.includes(key)) void openSubject(key, { historyMode: 'none' });
    else navigateHome({ historyMode: key ? 'replace' : 'none' });
  };
  addEventListener('popstate', route);
  addEventListener('hashchange', () => {
    const key = location.hash.slice(1);
    if (key !== (CUR || '') && $('#loading').hidden) route();
  });
  addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#splash').hidden) closeSplash(); });
  for (const prefix of ['r', 'z']) {
    $(`#${prefix}Tabs`).addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      const buttons = $$(`#${prefix}Tabs .tab`);
      const current = buttons.indexOf(document.activeElement);
      if (current < 0) return;
      event.preventDefault();
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
        : (current + (event.key === 'ArrowLeft' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[index].click();
      buttons[index].focus();
    });
  }
  route();
}
