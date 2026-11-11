/* =========================================================
   CONFIG — edit these at launch
   CA: paste the Ethereum token contract address (0x…, 42 chars). Empty = everything shows TBA.
   X / TG: full URLs. Empty = shown as "Soon".
   Tokenomics shown on page (1B supply, 0% tax, 100% LP burned)
   are PLACEHOLDERS in index.html (#supply .count data-to) — confirm at launch.
   ========================================================= */
const CONFIG = {
  CA: '0xa9015c7c7ede536e94679eee43fa2c837d90ca95',
  CHAIN: 'ethereum',
  PAIR: '',
  BUY: 'https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xa9015c7c7ede536e94679eee43fa2c837d90ca95',
  X: 'https://x.com/anthropicaieth',
  TG: 'https://t.me/anthropicaieth',
  NAME: 'Anthropic',
  TICKER: 'ANT'
};

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOBILE = matchMedia('(max-width: 760px)').matches || matchMedia('(pointer: coarse)').matches;
const gsap = window.gsap, ST = window.ScrollTrigger;
gsap.registerPlugin(ST);

/* ---------------- token UX ---------------- */
const CA_OK = /^0x[a-fA-F0-9]{40}$/.test(CONFIG.CA.trim());
const CA = CONFIG.CA.trim();
const short = s => s.length > 14 ? s.slice(0, 5) + '…' + s.slice(-5) : s;
const toastEl = $('#toast'); let tt;
function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toastEl.classList.remove('show'), 2200); }
function setLink(el, url, labelSel, label) {
  const lab = labelSel ? $(labelSel, el) : null;
  if (url) { el.href = url; el.target = '_blank'; el.rel = 'noopener'; el.classList.remove('is-tba'); el.removeAttribute('aria-disabled'); if (lab) lab.textContent = label; }
  else { el.removeAttribute('href'); el.classList.add('is-tba'); el.setAttribute('aria-disabled', 'true'); if (lab) lab.textContent = label + ' · TBA'; el.addEventListener('click', e => { e.preventDefault(); toast(label + ': TBA'); }); }
}
const CHART = `https://dexscreener.com/${CONFIG.CHAIN}/${CONFIG.PAIR || CA}`;
$$('.js-buy').forEach(el => setLink(el, CONFIG.BUY, '.js-buy-label', 'Buy Now'));
$$('.js-scan').forEach(el => setLink(el, CA_OK ? `https://etherscan.io/token/${CA}` : '', '.js-scan-label', 'Etherscan'));
$$('.js-chart').forEach(el => setLink(el, CONFIG.PAIR || CA_OK ? CHART : '', '.js-chart-label', 'Chart'));
setLink($('.js-x'), CONFIG.X, null, 'X'); setLink($('.js-tg'), CONFIG.TG, null, 'Telegram');
if (CONFIG.X) $('.js-x-state').textContent = 'Follow'; if (CONFIG.TG) $('.js-tg-state').textContent = 'Join';
$$('.js-ca-text').forEach(e => e.textContent = CA_OK ? short(CA) : 'TBA');
$$('.js-ca').forEach(b => b.addEventListener('click', async () => {
  if (!CA_OK) return toast('CA: TBA');
  try { await navigator.clipboard.writeText(CA); toast('CA copied: ' + short(CA)); } catch { toast('CA: ' + CA); }
}));
if (CONFIG.PAIR || CA_OK) {
  const f = document.createElement('iframe');
  f.src = `${CHART}?embed=1&theme=dark&trades=0&info=0`;
  f.title = '$' + CONFIG.TICKER + ' chart on DexScreener'; f.loading = 'lazy';
  f.addEventListener('load', () => $('#chartPh')?.remove());
  $('#chartFrame').appendChild(f);
}

/* ---------------- loader ---------------- */
const loader = $('#loader'); let pct = 0; const lp = $('#loaderPct'), lb = $('#loaderBar');
const li = setInterval(() => { pct = Math.min(pct + Math.random() * 14, 92); lp.textContent = String(Math.floor(pct)).padStart(2, '0'); lb.style.width = pct + '%'; }, 90);
let loaded = false;
function finishLoad() {
  if (loaded) return; loaded = true; clearInterval(li);
  lp.textContent = '100'; lb.style.width = '100%';
  setTimeout(() => { loader.classList.add('done'); document.body.classList.remove('is-loading'); intro(); setTimeout(() => loader.remove(), 1100); }, RM ? 0 : 250);
}
const minT = new Promise(r => setTimeout(r, RM ? 0 : 900));
Promise.all([minT, document.fonts.ready, new Promise(r => document.readyState === 'complete' ? r() : addEventListener('load', r))]).then(finishLoad);
setTimeout(finishLoad, 4500);

/* ---------------- smooth scroll ---------------- */
let lenis = null;
if (!RM && window.Lenis) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ST.update);
  gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const t = $(a.getAttribute('href')); if (!t) return; e.preventDefault();
  lenis ? lenis.scrollTo(t, { offset: 0, duration: 1.4 }) : t.scrollIntoView();
}));

/* ---------------- hero intro ---------------- */
function intro() {
  if (RM) return;
  gsap.from('.hw span', { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.07 });
  gsap.from('.hero__head', { opacity: 0, y: 40, scale: .96, duration: 1.6, ease: 'expo.out', delay: .2 });
  gsap.from(['.hero__top', '.hero__tag', '.hero__actions > *'], { opacity: 0, y: 20, duration: 1, ease: 'power3.out', stagger: .06, delay: .45 });
  gsap.from('.nav', { y: -80, opacity: 0, duration: 1.1, ease: 'expo.out', delay: .1 });
  window.__formNet && window.__formNet();
}
if (!RM) {
  gsap.to('.hero__word', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero__head', { yPercent: -18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

/* ---------------- manifesto word reveal ---------------- */
const mt = $('#manifestoText');
const KEY = ['connections,', 'colony', 'mind', 'node'];
mt.innerHTML = mt.textContent.trim().split(/\s+/).map(w => `<span class="w${KEY.some(k => w.toLowerCase().startsWith(k)) ? ' k' : ''}">${w}</span>`).join(' ');
if (!RM) {
  const words = $$('.w', mt);
  const pinned = !MOBILE;
  gsap.to(words, { opacity: 1, stagger: 0.1, ease: 'none',
    scrollTrigger: { trigger: '.manifesto', start: pinned ? 'top top' : 'top 70%', end: pinned ? '+=130%' : 'bottom 60%', scrub: 0.6, pin: pinned ? '.manifesto__pin' : false } });
}

/* ---------------- tapes ---------------- */
const star = `<svg viewBox="0 0 24 24" aria-hidden="true"><g stroke="currentColor" stroke-width="2"><path d="M12 12 12 2M12 12 21 7M12 12 20 18M12 12 8 21M12 12 3 9"/></g><circle cx="12" cy="12" r="4" fill="currentColor"/><g fill="currentColor"><circle cx="12" cy="2.5" r="2"/><circle cx="21" cy="7" r="2"/><circle cx="20" cy="18" r="2"/><circle cx="8" cy="21" r="2"/><circle cx="3" cy="9" r="2"/></g></svg>`;
const tapeA = ['The Network Mind', '$ANT', 'Colony of thought', 'Nasdaq · ANT', 'One node at a time'].map(t => `<span>${t}</span>${star}`).join('');
const tapeB = [['$ANT', 'LISTING DAY'], ['SUPPLY', '1,000,000,000'], ['LP', 'LOCKED / BURNED'], ['CHAIN', 'ETHEREUM'], ['VENUE', 'UNISWAP'], ['TAX', '0/0'], ['STATUS', CA_OK ? 'LIVE' : 'PRE-LISTING']].map(([a, b]) => `<span><span class="tk">${a}</span> ${b} <span class="up">+</span></span>`).join('<span>/</span>');
$$('.tape__track').forEach((t, i) => {
  t.innerHTML = (i ? tapeB : tapeA).repeat(4);
  if (RM) return;
  const dir = +t.dataset.speed;
  const tw = gsap.fromTo(t, { xPercent: dir > 0 ? 0 : -50 }, { xPercent: dir > 0 ? -50 : 0, duration: i ? 40 : 30, ease: 'none', repeat: -1 });
  ST.create({ trigger: '.tape', start: 'top bottom', end: 'bottom top', onUpdate: s => tw.timeScale(1 + Math.min(Math.abs(s.getVelocity()) / 400, 4)) });
});

/* ---------------- ipo timeline ---------------- */
if (!RM) {
  gsap.from('.ipo-step', { opacity: 0, y: 40, stagger: .12, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.ipo-track', start: 'top 85%' } });
  gsap.from('.n-item', { opacity: 0, y: 28, stagger: .08, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.notable__list', start: 'top 82%' } });
}

/* ---------------- counters ---------------- */
$$('.count').forEach(el => {
  const to = +el.dataset.to; const fmt = v => Math.round(v).toLocaleString('en-US');
  if (RM) { el.textContent = fmt(to); return; }
  const o = { v: 0 };
  ST.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => gsap.to(o, { v: to, duration: 2.2, ease: 'expo.out', onUpdate: () => el.textContent = fmt(o.v) }) });
});

/* ---------------- coin ---------------- */
const coin = $('#coin'), cw = $('#coinwrap');
if (!RM) {
  const spin = { r: 0, f: 0 }; const tilt = { x: 0, y: 0 };
  gsap.fromTo(spin, { r: -38 }, { r: 38, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  const flip = () => gsap.to(spin, { f: '+=360', duration: 1.4, ease: 'power3.inOut' });
  cw.addEventListener('click', flip);
  ST.create({ trigger: cw, start: 'top bottom', end: 'bottom top', onEnter: flip });
  cw.addEventListener('pointermove', e => { const b = cw.getBoundingClientRect(); tilt.x = ((e.clientY - b.top) / b.height - .5) * -30; tilt.y = ((e.clientX - b.left) / b.width - .5) * 50; });
  cw.addEventListener('pointerleave', () => { tilt.x = 0; tilt.y = 0; });
  const cur = { x: 0, y: 0 };
  gsap.ticker.add(() => { cur.x += (tilt.x - cur.x) * .08; cur.y += (tilt.y - cur.y) * .08; coin.style.transform = `rotateX(${cur.x}deg) rotateY(${spin.r + spin.f + cur.y}deg)`; });
}

/* ---------------- reveal heads/cards ---------------- */
if (!RM) {
  $$('.sec-head, .step, .social, .stat, .ledger, .notable__intro, .clarify, .chart__frame, .footer__art').forEach(el => gsap.from(el, { opacity: 0, y: 50, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
  gsap.from('.footer__big', { yPercent: 30, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.footer__big', start: 'top bottom', end: 'center 70%', scrub: true } });
}

/* ---------------- scroll ink line ---------------- */
const inkSvg = $('#ink'), inkPath = $('#inkPath'), inkHead = $('#inkHead'), inkWrap = $('.inkwrap');
let inkLen = 0;
function buildInk() {
  const w = inkWrap.offsetWidth, h = inkWrap.offsetHeight;
  inkSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  const top0 = inkWrap.getBoundingClientRect().top;
  const ys = $$('.inkwrap > section').map(s => s.getBoundingClientRect().top - top0 + 40).filter(y => y > 0);
  ys.push(h - 60);
  const L = w * (MOBILE ? 0.018 : 0.02), R = w * (MOBILE ? 0.982 : 0.962);
  let d = `M ${R} 0`; let prev = 0, side = 1;
  ys.forEach((y, i) => {
    const x = side ? R : L, nx = side ? L : R;
    // run down the gutter, then cross over in the section gap
    d += ` C ${x + (side ? 18 : -18)} ${prev + (y - prev) * .35}, ${x + (side ? -14 : 14)} ${prev + (y - prev) * .7}, ${x} ${y - 70}`;
    if (i < ys.length - 1) d += ` C ${x} ${y + 10}, ${nx} ${y - 40}, ${nx} ${y + 40}`;
    prev = y + 40; side = 1 - side;
  });
  inkPath.setAttribute('d', d); inkLen = inkPath.getTotalLength();
  inkPath.style.strokeDasharray = inkLen; drawInk();
}
function drawInk() {
  const r = inkWrap.getBoundingClientRect();
  const p = RM ? 1 : Math.min(Math.max((innerHeight * .6 - r.top) / r.height, 0), 1);
  inkPath.style.strokeDashoffset = inkLen * (1 - p);
  const pt = inkPath.getPointAtLength(inkLen * p); inkHead.setAttribute('cx', pt.x); inkHead.setAttribute('cy', pt.y);
}
addEventListener('load', () => { buildInk(); ST.refresh(); });
let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(buildInk, 200); });
ST.create({ trigger: inkWrap, start: 'top bottom', end: 'bottom top', onUpdate: drawInk });
buildInk();

/* ---------------- progress rail ---------------- */
const secs = $$('[data-node]'); const rn = $('#railNodes'), rl = $('#railLabel'), rf = $('#railFill');
secs.forEach(() => rn.appendChild(document.createElement('li')));
function rail() {
  const max = document.documentElement.scrollHeight - innerHeight; rf.style.height = (scrollY / max * 100) + '%';
  let idx = 0; secs.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * .5) idx = i; });
  $$('li', rn).forEach((l, i) => l.classList.toggle('on', i === idx)); rl.textContent = secs[idx].dataset.node; $('.rail').classList.toggle('off', $('#footer').getBoundingClientRect().top < innerHeight * .6);
}
addEventListener('scroll', rail, { passive: true }); rail();

/* ---------------- magnetic + cursor ---------------- */
if (!RM && matchMedia('(hover:hover) and (pointer:fine)').matches) {
  $$('.magnetic').forEach(el => {
    el.addEventListener('pointermove', e => { const b = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - b.left - b.width / 2) * .35, y: (e.clientY - b.top - b.height / 2) * .45, duration: .4, ease: 'power3.out' }); });
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: .8, ease: 'elastic.out(1,.4)' }));
  });
  const c = $('#cursor'); const qx = gsap.quickTo(c, 'x', { duration: .25 }), qy = gsap.quickTo(c, 'y', { duration: .25 });
  addEventListener('pointermove', e => { qx(e.clientX); qy(e.clientY); });
  $$('a,button').forEach(el => { el.addEventListener('pointerenter', () => c.classList.add('big')); el.addEventListener('pointerleave', () => c.classList.remove('big')); });
}

/* ---------------- WebGL: the network mind ---------------- */
(function net() {
  const canvas = $('#gl'); const hero = $('#hero');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: !MOBILE, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { canvas.remove(); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, MOBILE ? 1.5 : 2));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 100); cam.position.set(0, 0, 9);
  const group = new THREE.Group(); scene.add(group);

  const N = MOBILE ? 170 : 420;
  // home positions: a brain-like ellipsoid shell + inner core, with a few long "axon" outliers
  const home = [], start = [], pos = [];
  for (let i = 0; i < N; i++) {
    const u = Math.random(), v = Math.random(); const th = u * Math.PI * 2, ph = Math.acos(2 * v - 1);
    const r = i < N * .15 ? Math.random() * 1.4 : 2.1 + Math.random() * .5 + (Math.random() < .06 ? 1.6 : 0);
    const p = new THREE.Vector3(Math.sin(ph) * Math.cos(th) * r * 1.25, Math.cos(ph) * r * 1.0, Math.sin(ph) * Math.sin(th) * r * .95);
    home.push(p);
    start.push(new THREE.Vector3((Math.random() - .5) * 30, (Math.random() - .5) * 20, (Math.random() - .5) * 20 - 4));
    pos.push(start[i].clone());
  }
  // edges: k nearest within threshold
  const edges = [];
  for (let i = 0; i < N; i++) {
    const d = []; for (let j = 0; j < N; j++) if (j !== i) d.push([home[i].distanceToSquared(home[j]), j]);
    d.sort((a, b) => a[0] - b[0]);
    for (let k = 0; k < 3; k++) if (d[k][0] < 1.8 && d[k][1] > i) edges.push([i, d[k][1]]);
  }
  // hub: big node at centre linked to some outer nodes (echoes the logo star)
  const hubLinks = []; for (let i = 0; i < N; i++) if (home[i].length() > 3.2) hubLinks.push(i);

  const sphere = new THREE.IcosahedronGeometry(1, MOBILE ? 1 : 2);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const inst = new THREE.InstancedMesh(sphere, mat, N + 1);
  const ivory = new THREE.Color(0xF0EEE6), terra = new THREE.Color(0xE8845F);
  const sizes = [];
  for (let i = 0; i < N; i++) { const t = Math.random() < .22; inst.setColorAt(i, t ? terra : ivory); sizes.push((t ? .042 : .026) + Math.random() * .02); }
  inst.setColorAt(N, ivory); sizes.push(.22);
  group.add(inst);

  const E = edges.length + hubLinks.length;
  const lpos = new Float32Array(E * 6), lcol = new Float32Array(E * 6);
  for (let e = 0; e < E; e++) { const hub = e >= edges.length; const c = hub ? [.95, .55, .4] : [.9, .88, .84]; const a = hub ? .4 : .22; for (let k = 0; k < 2; k++) { lcol[e * 6 + k * 3] = c[0] * a; lcol[e * 6 + k * 3 + 1] = c[1] * a; lcol[e * 6 + k * 3 + 2] = c[2] * a; } }
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.BufferAttribute(lpos, 3)); lg.setAttribute('color', new THREE.BufferAttribute(lcol, 3));
  const lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  group.add(lines);

  // synaptic pulses travelling along edges
  const P = MOBILE ? 40 : 110;
  const pp = new Float32Array(P * 3); const pulses = Array.from({ length: P }, () => ({ e: Math.floor(Math.random() * E), t: Math.random(), s: .4 + Math.random() * .9 }));
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  const dotTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,240,225,1)'); g.addColorStop(.3, 'rgba(240,150,110,.8)'); g.addColorStop(1, 'rgba(217,119,87,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: MOBILE ? .28 : .24, map: dotTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  group.add(pts);

  // dust
  const D = MOBILE ? 250 : 700; const dp = new Float32Array(D * 3); for (let i = 0; i < D * 3; i++) dp[i] = (Math.random() - .5) * (i % 3 === 2 ? 10 : 22);
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const dust = new THREE.Points(dg, new THREE.PointsMaterial({ size: .05, map: dotTex, transparent: true, opacity: .5, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(dust);

  let composer = null;
  if (!MOBILE) {
    composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, cam));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), .42, .45, .42)); composer.addPass(new OutputPass());
  }
  function size() {
    const w = hero.clientWidth, h = hero.clientHeight; renderer.setSize(w, h, false); composer && composer.setSize(w, h);
    cam.aspect = w / h; cam.updateProjectionMatrix();
    // place the mind around the line-art head (right side on desktop, top-right on mobile)
    if (w > 760) { group.position.set(2.6 * Math.min(cam.aspect / 1.6, 1.4), .5, 0); group.scale.setScalar(.82); }
    else { group.position.set(.9, 1.6, 0); group.scale.setScalar(.72); }
  }
  size(); addEventListener('resize', size);

  // interaction
  const mouse = new THREE.Vector2(9, 9), tgtRot = { x: 0, y: 0 }; const ray = new THREE.Raycaster(); const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); const mp = new THREE.Vector3(999, 999, 0);
  hero.addEventListener('pointermove', e => { const b = hero.getBoundingClientRect(); mouse.set((e.clientX - b.left) / b.width * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); tgtRot.y = mouse.x * .5; tgtRot.x = -mouse.y * .3; });
  hero.addEventListener('pointerleave', () => mouse.set(9, 9));
  let burst = 0; hero.addEventListener('click', e => { if (e.target.closest('a,button')) return; burst = 1; });

  let form = RM ? 1 : 0; window.__formNet = () => gsap.to({}, { duration: 2.6, ease: 'expo.out', onUpdate() { form = this.progress() < 1 ? gsap.parseEase('expo.out')(this.progress()) : 1; } });
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), tmp = new THREE.Vector3(), inv = new THREE.Matrix4();
  let visible = true; new IntersectionObserver(([en]) => visible = en.isIntersecting).observe(hero);
  document.addEventListener('visibilitychange', () => visible = !document.hidden && hero.getBoundingClientRect().bottom > 0);
  const clock = new THREE.Clock(); let t = 0;
  function frame() {
    const dt = Math.min(clock.getDelta(), .05); t += dt;
    group.rotation.y += ((tgtRot.y + t * .06) - group.rotation.y) * .04; group.rotation.x += (tgtRot.x - group.rotation.x) * .04;
    // mouse in group-local space
    ray.setFromCamera(mouse, cam); ray.ray.intersectPlane(plane, mp) || mp.set(999, 999, 0);
    inv.copy(group.matrixWorld).invert(); const ml = mp.clone().applyMatrix4(inv);
    burst *= .95;
    const breathe = 1 + Math.sin(t * 1.2) * .03;
    for (let i = 0; i < N; i++) {
      const h = home[i]; tmp.copy(h).multiplyScalar(breathe * (1 + burst * (1.5 + (i % 5) * .3)));
      tmp.x += Math.sin(t * .7 + i) * .05; tmp.y += Math.cos(t * .6 + i * 1.3) * .05;
      const target = tmp.lerpVectors(start[i], tmp, form);
      const dx = target.x - ml.x, dy = target.y - ml.y, dz = target.z - ml.z, d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < 2.2) { const f = (2.2 - d2) * .35; target.x += dx * f; target.y += dy * f; }
      pos[i].lerp(target, .08);
      sc.setScalar(sizes[i] * (1 + .25 * Math.sin(t * 2 + i))); m4.compose(pos[i], q, sc); inst.setMatrixAt(i, m4);
    }
    sc.setScalar(sizes[N] * (1 + .08 * Math.sin(t * 2)) * form); m4.compose(new THREE.Vector3(), q, sc); inst.setMatrixAt(N, m4);
    inst.instanceMatrix.needsUpdate = true;
    const hub = new THREE.Vector3();
    for (let e = 0; e < E; e++) { const [a, b] = e < edges.length ? edges[e] : [-1, hubLinks[e - edges.length]]; const A = a < 0 ? hub : pos[a], B = pos[b]; lpos.set([A.x, A.y, A.z, B.x, B.y, B.z], e * 6); }
    lg.attributes.position.needsUpdate = true; lines.material.opacity = form;
    for (let i = 0; i < P; i++) { const p = pulses[i]; p.t += dt * p.s; if (p.t > 1) { p.t = 0; p.e = Math.floor(Math.random() * E); } const o = p.e * 6; pp[i * 3] = lpos[o] + (lpos[o + 3] - lpos[o]) * p.t; pp[i * 3 + 1] = lpos[o + 1] + (lpos[o + 4] - lpos[o + 1]) * p.t; pp[i * 3 + 2] = lpos[o + 2] + (lpos[o + 5] - lpos[o + 2]) * p.t; }
    pg.attributes.position.needsUpdate = true; pts.material.opacity = form;
    dust.rotation.y = t * .01;
    composer ? composer.render() : renderer.render(scene, cam);
  }
  function loop() { requestAnimationFrame(loop); if (visible) frame(); }
  if (RM) { form = 1; frame(); addEventListener('resize', () => frame()); } else loop();
})();
