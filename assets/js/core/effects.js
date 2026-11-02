import { G } from './state.js';
import { $ } from './utils.js';

let audio = null;
let canvas = null;
let context = null;
let particles = [];
let frame = 0;
let hypeTimer;
let toastTimer;

export const reduced = () => globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;

export function beep(type) {
  if (!G.sound) return;
  try {
    audio ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') void audio.resume();
    const notes = {
      good: [523, 659, 784], combo: [523, 659, 784, 1046],
      win: [392, 523, 659, 784, 1046, 1318], soft: [660, 880],
      horn: [196, 262, 330, 392, 523, 659]
    }[type] || [220, 165];
    notes.forEach((frequency, i) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const start = audio.currentTime + i * (type === 'horn' ? .07 : .08);
      oscillator.type = type === 'bad' ? 'sawtooth' : type === 'soft' ? 'sine' : 'square';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(type === 'soft' ? .08 : .06, start);
      gain.gain.exponentialRampToValueAtTime(.0001, start + .22);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start(start);
      oscillator.stop(start + .24);
    });
  } catch { /* Audio may be blocked until a user gesture. */ }
}

function resize() {
  if (!canvas) return;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;
}

export function initEffects() {
  if (canvas) return;
  canvas = $('#fx');
  context = canvas?.getContext('2d');
  addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearEffects(); });
  resize();
}

export function confetti(count = 60) {
  if (reduced() || !context || document.hidden) return;
  const style = getComputedStyle(document.body);
  const colors = ['--score', '--chalk', '--good', '--red'].map(key => style.getPropertyValue(key).trim() || '#fff');
  const ratio = Math.min(devicePixelRatio || 1, 2);
  const start = !particles.length;
  for (let i = 0; i < Math.min(count, 180); i++) {
    particles.push({ x: canvas.width / 2, y: canvas.height * .45,
      vx: (Math.random() - .5) * 26 * ratio, vy: (-Math.random() * 22 - 6) * ratio,
      size: (4 + Math.random() * 6) * ratio, color: colors[i % colors.length],
      rotation: Math.random() * 6, life: 90 });
  }
  if (start) frame = requestAnimationFrame(tick);
}

function tick() {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    p.vy += .7 * ratio;
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= .98;
    p.rotation += .2;
    p.life--;
    context.save();
    context.translate(p.x, p.y);
    context.rotate(p.rotation);
    context.fillStyle = p.color;
    context.globalAlpha = Math.max(p.life / 90, 0);
    context.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    context.restore();
  }
  particles = particles.filter(p => p.life > 0 && p.y < canvas.height + 40);
  frame = particles.length ? requestAnimationFrame(tick) : 0;
}

export function clearEffects() {
  cancelAnimationFrame(frame);
  frame = 0;
  particles = [];
  context?.clearRect(0, 0, canvas.width, canvas.height);
  clearTimeout(hypeTimer);
  const text = $('#hypeText');
  if (text) text.className = '';
}

export function hype(text, bad) {
  const el = $('#hypeText');
  el.className = '';
  void el.offsetWidth;
  el.textContent = text;
  el.className = 'go' + (bad ? ' bad' : '');
  clearTimeout(hypeTimer);
  hypeTimer = setTimeout(() => { el.className = ''; }, 1150);
}

export function toast(text) {
  const el = $('#toast');
  el.textContent = text;
  el.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('on'), 2200);
}
