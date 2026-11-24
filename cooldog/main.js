import * as THREE from './assets/vendor/three.module.js';

const C = window.CONFIG || {};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const isMob = () => innerWidth < 900;

/* ---------------- stations ---------------- */
const STATIONS = [
  { id: 'fm', name: 'LOOSY FM', f: '101.1', img: 'assets/img/logo.webp' },
  { id: 'story', name: 'THE STORY', f: '94.7', img: 'assets/img/herodesk.webp' },
  { id: 'tv', name: 'DOGG TV', f: '88.8', img: 'assets/img/poster.jpg' },
  { id: 'ride', name: 'HOW TO RIDE', f: '103.5', img: 'assets/img/canal.jpg' },
  { id: 'rental', name: 'RENTAL BOOTH', f: '97.3', img: 'assets/img/rental-booth.webp' },
  { id: 'pack', name: 'THE PACK', f: '106.9', img: 'assets/memes/12.webp' },
  { id: 'signal', name: 'SIGNAL', f: '91.1', img: 'assets/img/abbuu.webp' },
];
// sky palettes per station: [skyTop, skyMid, horizon, waterDeep, waterLit, sunTint, night]
const PAL = [
  ['#2b0b5e', '#c2318f', '#ffb25c', '#1a2a6b', '#2fd6e8', '#ffd08a', 0.0],
  ['#3a1464', '#ff6a7a', '#ffd27a', '#1d3d78', '#43e0d8', '#ffe2a0', 0.0],
  ['#07021a', '#4a0d6e', '#ff2fa0', '#0b0b2e', '#7a3cff', '#ff7ad0', 1.0],
  ['#1a6dd8', '#6fc4ff', '#ffe0f0', '#0a4f8a', '#26f0ff', '#fff3c0', 0.0],
  ['#1e0748', '#a51f8e', '#ff7b4a', '#21155a', '#ff5ec4', '#ffb070', 0.3],
  ['#030114', '#1c0a48', '#7b2bd6', '#070a2a', '#3a6dff', '#c9a0ff', 1.0],
  ['#2a2c7a', '#ff8fb5', '#ffe9a8', '#20407a', '#5ee8ff', '#fff0c0', 0.1],
];

let cur = 0;
const stEls = $$('.st');
const npName = $('#np-name'), npF = $('#np-freq');
const banner = $('#banner'), bannerT = $('#banner-t');

/* ---------------- links ---------------- */
const ca = (C.ca || '').trim();
const links = {
  buy: ca ? C.buyBase + ca : C.buyTBA,
  chart: ca ? C.chartBase + ca : C.chartTBA,
  explorer: ca ? C.explorerBase + ca : '',
  telegram: C.telegram || '',
  x: C.x || '',
};
$('#ca-val').textContent = ca || '0x279a7d8948a9dfbac72c363150e78321138b33b1';

const toastEl = $('#toast');
let toastT;
function toast(html, ms = 2600) {
  toastEl.innerHTML = html;
  toastEl.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove('show'), ms);
}
function burst(x, y, n = 14, col) {
  for (let i = 0; i < n; i++) {
    const d = document.createElement('i');
    d.className = 'burst';
    const a = Math.random() * Math.PI * 2, v = 40 + Math.random() * 90;
    d.style.left = x + 'px'; d.style.top = y + 'px';
    d.style.background = col || ['#fff', '#ffe14a', '#ff2fa0', '#22e4ff'][i % 4];
    document.body.appendChild(d);
    d.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${Math.cos(a) * v}px,${Math.sin(a) * v + 40}px) scale(.2)`, opacity: 0 }], { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(.2,.8,.4,1)' }).onfinish = () => d.remove();
  }
}

document.addEventListener('click', async (e) => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2);
  sfx('blip');
  if (act === 'copy') {
    e.preventDefault();
    el.classList.add('hit'); setTimeout(() => el.classList.remove('hit'), 300);
    if (!ca) return toast('<b>CA 0x279a7d8948a9dfbac72c363150e78321138b33b1</b> — the Ethereum contract drops at launch. Only trust the CA posted here.');
    try { await navigator.clipboard.writeText(ca); } catch (_) {
      const t = document.createElement('textarea'); t.value = ca; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove();
    }
    return toast('<b>CA copied</b> — ' + ca.slice(0, 6) + '…' + ca.slice(-4));
  }
  if (act === 'buy' || act === 'chart') {
    if (!ca) {
      // keep the exact Dan-provided 0x279a7d8948a9dfbac72c363150e78321138b33b1 URL live, but warn first
      toast(act === 'buy' ? '<b>CA 0x279a7d8948a9dfbac72c363150e78321138b33b1</b> — opening Uniswap (ETH → 0x279a7d8948a9dfbac72c363150e78321138b33b1). Paste the official CA once it launches.' : '<b>CA 0x279a7d8948a9dfbac72c363150e78321138b33b1</b> — chart goes live at launch. Opening DexScreener.');
    }
    return; // href handles navigation
  }
  if (act === 'explorer') {
    if (!ca) { e.preventDefault(); return toast('<b>Etherscan</b> — coming soon, CA 0x279a7d8948a9dfbac72c363150e78321138b33b1.'); }
    return;
  }
  if (act === 'telegram' || act === 'x') {
    const u = links[act];
    if (!u) return toast(`<b>${act === 'x' ? 'X / Twitter' : 'Telegram'}</b> — coming soon. Official link drops with the launch.`);
    window.open(u, '_blank', 'noopener');
  }
});
$$('[data-act=buy]').forEach(a => a.href = links.buy);
$$('[data-act=chart]').forEach(a => a.href = links.chart);
$$('[data-act=explorer]').forEach(a => a.href = links.explorer || '#');

/* ---------------- wave letters ---------------- */
$$('[data-wave]').forEach(el => {
  const t = el.textContent; el.textContent = '';
  [...t].forEach(ch => { const s = document.createElement('span'); s.className = 'ch'; s.textContent = ch === ' ' ? '\u00a0' : ch; el.appendChild(s); });
});
const waveChars = $$('[data-wave] .ch');

/* ---------------- facts ---------------- */
const facts = $('#facts');
(C.facts || []).forEach(([k, v], i) => {
  const li = document.createElement('li');
  li.style.animationDelay = (i * 0.09) + 's';
  const val = k === 'Contract' && ca ? ca.slice(0, 6) + '…' + ca.slice(-4) : v;
  li.innerHTML = `<span>${k}</span><b class="${val === '0x279a7d8948a9dfbac72c363150e78321138b33b1' ? 'tba' : ''}">${String(val).replace('$', '<span class="dl">$</span>')}</b>`;
  facts.appendChild(li);
});

/* ---------------- missions ---------------- */
const MISSIONS = [
  ['GET A WALLET', 'Download an Ethereum wallet like <b>MetaMask</b> or <b>Rabby</b> (browser extension or mobile app). Write your recovery phrase down offline — never share it.'],
  ['LOAD SOME ETH', 'Buy ETH on an exchange and send it to your wallet on <b>Ethereum mainnet</b>. Keep a little extra for gas fees.'],
  ['HIT UNISWAP', 'Open <a href="LINK" target="_blank" rel="noopener">Uniswap</a> with the BUY throttle and connect your wallet. Paste the official $LOOSY contract — <b>CA: 0x279a7d8948a9dfbac72c363150e78321138b33b1</b> until launch.'],
  ['SWAP FOR $LOOSY', 'Check the token name <b>Cool Dog</b>, ticker <b>$LOOSY</b> and the contract, choose your amount, review the quote and confirm. Welcome aboard, goodest boy in Vice City.'],
];
let mi = 0;
const blips = $$('.blip'), rdog = $('.radar-dog');
function setMission(i, flash = true) {
  mi = (i + MISSIONS.length) % MISSIONS.length;
  $('#m-num').textContent = `MISSION ${mi + 1}/${MISSIONS.length}`;
  $('#m-h').textContent = MISSIONS[mi][0];
  $('#m-p').innerHTML = MISSIONS[mi][1].replace('LINK', links.buy);
  blips.forEach((b, k) => { b.classList.toggle('on', k === mi); b.classList.toggle('done', k < mi); });
  rdog.style.left = blips[mi].style.left; rdog.style.top = blips[mi].style.top;
  const m = $('#mission'); m.classList.remove('m-flash'); void m.offsetWidth; if (flash) m.classList.add('m-flash');
}
blips.forEach((b, k) => b.addEventListener('click', () => { sfx('blip'); setMission(k); }));
$('#m-next').addEventListener('click', (e) => {
  sfx('blip');
  if (mi === MISSIONS.length - 1) {
    const p = document.createElement('div'); p.className = 'passed'; p.innerHTML = 'MISSION PASSED!<small>RESPECT +</small>';
    document.body.appendChild(p); setTimeout(() => p.remove(), 2300); sfx('win');
    setMission(0, false);
  } else setMission(mi + 1);
});
setMission(0, false);

/* ---------------- video ---------------- */
const vid = $('#vid'), screen = $('.screen');
$('#btn-play').addEventListener('click', () => { vid.play().catch(() => {}); screen.classList.add('playing'); });
vid.addEventListener('click', () => { if (vid.paused) { vid.play(); screen.classList.add('playing'); } else { vid.pause(); screen.classList.remove('playing'); } });
$('#btn-unmute').addEventListener('click', (e) => {
  vid.muted = !vid.muted; e.currentTarget.setAttribute('aria-pressed', String(!vid.muted));
  $('.mega-txt').textContent = vid.muted ? 'SOUND ON' : 'MUTE';
  if (!vid.muted) { vid.play().catch(() => {}); screen.classList.add('playing'); }
});

/* ---------------- wheel ---------------- */
const wheel = $('#wheel'), ring = $('#wheel-ring');
STATIONS.forEach((s, i) => {
  const b = document.createElement('button');
  b.className = 'wsta'; b.dataset.go = i;
  const a = -Math.PI / 2 + i / STATIONS.length * Math.PI * 2;
  b.style.left = (50 + Math.cos(a) * 39) + '%'; b.style.top = (50 + Math.sin(a) * 39) + '%';
  b.innerHTML = `<img src="${s.img}" alt=""><span>${s.name}</span>`;
  b.setAttribute('aria-label', s.name);
  b.addEventListener('mouseenter', () => { $('#wc-n').textContent = s.name; $('#wc-f').textContent = s.f; });
  ring.appendChild(b);
});
function openWheel(o) {
  wheel.classList.toggle('open', o); wheel.setAttribute('aria-hidden', String(!o));
  $('#btn-wheel').setAttribute('aria-expanded', String(o));
  $$('.wsta').forEach((b, i) => b.classList.toggle('cur', i === cur));
  $('#wc-n').textContent = STATIONS[cur].name; $('#wc-f').textContent = STATIONS[cur].f;
  if (o) sfx('static');
}
$('#btn-wheel').addEventListener('click', () => openWheel(!wheel.classList.contains('open')));
wheel.addEventListener('click', (e) => { if (e.target === wheel) openWheel(false); });
document.addEventListener('click', (e) => {
  const g = e.target.closest('[data-go]');
  if (!g) return;
  e.preventDefault();
  openWheel(false);
  go(+g.dataset.go);
});
$('#btn-prev').addEventListener('click', () => go(cur - 1));
$('#btn-next').addEventListener('click', () => go(cur + 1));
addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'e') go(cur + 1);
  else if (e.key === 'ArrowLeft' || e.key === 'q') go(cur - 1);
  else if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) { e.preventDefault(); openWheel(true); }
  else if (e.key === 'Escape') { openWheel(false); closeLB(); }
});

/* station change via wheel scroll when panel can't scroll further */
let wheelLock = 0;
addEventListener('wheel', (e) => {
  if (wheel.classList.contains('open') || $('#lightbox').classList.contains('open')) return;
  const st = stEls[cur];
  const canDown = st.scrollTop + st.clientHeight < st.scrollHeight - 2, canUp = st.scrollTop > 2;
  if ((e.deltaY > 0 && canDown) || (e.deltaY < 0 && canUp)) return;
  if (Math.abs(e.deltaY) < 25) return;
  const now = performance.now(); if (now < wheelLock) return;
  wheelLock = now + 1100;
  go(cur + (e.deltaY > 0 ? 1 : -1));
}, { passive: true });
/* swipe */
let sx = 0, sy = 0, st0 = 0;
addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; st0 = performance.now(); }, { passive: true });
addEventListener('touchend', (e) => {
  if (cur === 5 && e.target.closest('#sea,.pack-hit')) return; // pack uses drag
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6 && performance.now() - st0 < 600) go(cur + (dx < 0 ? 1 : -1));
}, { passive: true });

/* static noise overlay */
const stc = $('#static'), sctx = stc.getContext('2d');
let staticUntil = 0;
function drawStatic() {
  const w = stc.width = 160, h = stc.height = 100;
  const id = sctx.createImageData(w, h);
  for (let i = 0; i < id.data.length; i += 4) { const v = Math.random() * 255; id.data[i] = v; id.data[i + 1] = v * .8; id.data[i + 2] = v; id.data[i + 3] = 255; }
  sctx.putImageData(id, 0, 0);
}

function go(i, silent) {
  i = (i + STATIONS.length) % STATIONS.length;
  if (i === cur && !silent) return;
  const prev = cur; cur = i;
  stEls.forEach((s, k) => { s.classList.toggle('on', k === i); s.classList.toggle('out', k === prev && k !== i); });
  setTimeout(() => stEls[prev]?.classList.remove('out'), 900);
  stEls[i].scrollTop = 0;
  document.body.dataset.st = i;
  npName.textContent = STATIONS[i].name; npF.textContent = STATIONS[i].f;
  if (!silent) {
    bannerT.textContent = STATIONS[i].name;
    banner.classList.add('show'); clearTimeout(banner._t); banner._t = setTimeout(() => banner.classList.remove('show'), 950);
    staticUntil = performance.now() + 380; sfx('static');
    kick = 0.6;
  }
  if (i !== 2 && !vid.paused) { vid.pause(); screen.classList.remove('playing'); }
  history.replaceState(null, '', '#' + STATIONS[i].id);
}

/* ---------------- audio (off by default) ---------------- */
let actx, master, radioOn = false, arpT;
function ac() {
  if (!actx) { actx = new (window.AudioContext || window.webkitAudioContext)(); master = actx.createGain(); master.gain.value = 0.18; master.connect(actx.destination); }
  return actx;
}
function sfx(kind) {
  if (!radioOn) return;
  const a = ac(), t = a.currentTime;
  if (kind === 'static') {
    const b = a.createBuffer(1, a.sampleRate * 0.3, a.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = a.createBufferSource(); s.buffer = b; const f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1800;
    s.connect(f).connect(master); s.start();
  } else {
    const o = a.createOscillator(), g = a.createGain(); o.type = 'square';
    o.frequency.setValueAtTime(kind === 'win' ? 523 : 880, t); o.frequency.exponentialRampToValueAtTime(kind === 'win' ? 1046 : 1320, t + 0.12);
    g.gain.setValueAtTime(0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + (kind === 'win' ? 0.5 : 0.15));
    o.connect(g).connect(master); o.start(t); o.stop(t + 0.6);
  }
}
const NOTES = [57, 60, 64, 67, 69, 67, 64, 60, 53, 57, 60, 64, 55, 59, 62, 67];
function startArp() {
  const a = ac(); let step = 0; const bpm = 104, dt = 60 / bpm / 2;
  let next = a.currentTime + 0.05;
  arpT = setInterval(() => {
    while (next < a.currentTime + 0.2) {
      const n = NOTES[step % NOTES.length] + (Math.floor(step / 16) % 2 ? 0 : 0);
      const o = a.createOscillator(), g = a.createGain(), f = a.createBiquadFilter();
      o.type = 'sawtooth'; o.frequency.value = 440 * Math.pow(2, (n - 69) / 12);
      f.type = 'lowpass'; f.frequency.value = 1400 + 900 * Math.sin(step / 5);
      g.gain.setValueAtTime(0.18, next); g.gain.exponentialRampToValueAtTime(0.001, next + dt * 0.95);
      o.connect(f).connect(g).connect(master); o.start(next); o.stop(next + dt);
      if (step % 4 === 0) { // bass
        const b = a.createOscillator(), bg = a.createGain(); b.type = 'triangle'; b.frequency.value = 440 * Math.pow(2, (NOTES[step % NOTES.length] - 24 - 69) / 12);
        bg.gain.setValueAtTime(0.5, next); bg.gain.exponentialRampToValueAtTime(0.001, next + dt * 3.6); b.connect(bg).connect(master); b.start(next); b.stop(next + dt * 4);
      }
      step++; next += dt;
    }
  }, 60);
}
$('#btn-sound').addEventListener('click', (e) => {
  radioOn = !radioOn; const b = e.currentTarget; b.setAttribute('aria-pressed', String(radioOn));
  $('.cas-lbl').textContent = radioOn ? 'LOOSY FM ON' : 'RADIO OFF';
  if (radioOn) { ac().resume(); startArp(); sfx('static'); toast('<b>LOOSY FM</b> — synthwave on. Tap the cassette to kill it.'); }
  else { clearInterval(arpT); }
});

/* ---------------- lightbox ---------------- */
const MEMES = Array.from({ length: 17 }, (_, i) => `assets/memes/${String(i + 1).padStart(2, '0')}.webp`);
const lb = $('#lightbox');
function openLB(i) { $('#lb-img').src = MEMES[i]; $('#lb-save').href = MEMES[i]; lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); }
function closeLB() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); }
$('#lb-close').addEventListener('click', closeLB);
lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });

/* =================== THREE.JS WORLD =================== */
const canvas = $('#sea');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (err) { console.warn('WebGL unavailable'); }
let kick = 0;
const WAVE = `
float wave(vec2 p, float t, float A){
  return A*(0.34*sin(p.x*0.21+t*0.9)+0.26*sin(p.y*0.27+t*1.1+p.x*0.08)+0.13*sin((p.x+p.y)*0.53+t*1.7)+0.06*sin((p.x-p.y)*1.07+t*2.4));
}`;
function waveJS(x, z, t, A) {
  return A * (0.34 * Math.sin(x * 0.21 + t * 0.9) + 0.26 * Math.sin(z * 0.27 + t * 1.1 + x * 0.08) + 0.13 * Math.sin((x + z) * 0.53 + t * 1.7) + 0.06 * Math.sin((x - z) * 1.07 + t * 2.4));
}

if (renderer) {
  $('#fallback-bg').style.display = 'none';
  renderer.setPixelRatio(Math.min(devicePixelRatio, isMob() ? 1.6 : 1.75));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 900);
  const loader = new THREE.TextureLoader();
  const tex = (u) => { const t = loader.load(u); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };

  const U = {
    uT: { value: 0 }, uA: { value: 1.25 },
    uTop: { value: new THREE.Color() }, uMid: { value: new THREE.Color() }, uHor: { value: new THREE.Color() },
    uDeep: { value: new THREE.Color() }, uLit: { value: new THREE.Color() }, uSun: { value: new THREE.Color() }, uNight: { value: 0 },
    uCam: { value: new THREE.Vector3() }, uDog: { value: new THREE.Vector3() },
  };
  const setPal = (i, k = 1) => {
    const p = PAL[i]; const tmp = new THREE.Color();
    ['uTop', 'uMid', 'uHor', 'uDeep', 'uLit', 'uSun'].forEach((key, j) => U[key].value.lerp(tmp.set(p[j]), k));
    U.uNight.value += (p[6] - U.uNight.value) * k;
  };
  setPal(0, 1);

  // sky dome
  const sky = new THREE.Mesh(new THREE.SphereGeometry(500, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, uniforms: U,
    vertexShader: `varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `uniform vec3 uTop,uMid,uHor; uniform float uNight,uT; varying vec3 vP;
      float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
      void main(){ float y=vP.y; vec3 c=mix(uHor,uMid,smoothstep(-0.02,0.18,y)); c=mix(c,uTop,smoothstep(0.15,0.65,y));
        vec2 g=floor(vec2(atan(vP.z,vP.x)*220.,y*260.)); float s=step(0.996,h(g))*smoothstep(0.08,0.5,y)*(0.6+0.4*sin(uT*3.+h(g)*40.));
        c+=vec3(s)*uNight; 
        float band=smoothstep(0.0,0.02,y)*(1.-smoothstep(0.02,0.12,y)); c+=uHor*band*0.25;
        gl_FragColor=vec4(c,1.); }`
  }));
  scene.add(sky);

  // sun (official striped sun art)
  const sunTex = tex('assets/img/sun.png');
  const sun = new THREE.Mesh(new THREE.PlaneGeometry(110, 110), new THREE.MeshBasicMaterial({ map: sunTex, transparent: true, depthWrite: false, fog: false, color: 0xffffff }));
  sun.position.set(0, 26, -330); scene.add(sun);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: U,
    vertexShader: `varying vec2 vU; void main(){vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform vec3 uSun; varying vec2 vU; void main(){ float d=length(vU-.5); gl_FragColor=vec4(uSun*pow(max(0.,1.-d*2.),2.5)*0.55,1.);} `
  }));
  glow.position.set(0, 26, -335); scene.add(glow);

  // ocean — flows past the rider (uFlow) so the boat cruises calmly instead of zooming around
  U.uFlow = { value: 0 };
  const seg = isMob() ? 170 : 240;
  const oceanGeo = new THREE.PlaneGeometry(420, 420, seg, seg); oceanGeo.rotateX(-Math.PI / 2);
  const ocean = new THREE.Mesh(oceanGeo, new THREE.ShaderMaterial({
    uniforms: U,
    vertexShader: `uniform float uT,uA,uFlow; varying vec3 vW; varying float vH; varying vec3 vN; ${WAVE}
      void main(){ vec3 p=position; vec2 q=(modelMatrix*vec4(p,1.)).xz+vec2(uFlow,0.); float d=length(p.xz)/210.; float f=(1.-d*0.6);
        float h=wave(q,uT,uA)*f; float hx=wave(q+vec2(.25,0.),uT,uA)*f; float hz=wave(q+vec2(0.,.25),uT,uA)*f;
        vN=normalize(vec3(-(hx-h)/.25,1.,-(hz-h)/.25)); p.y=h; vH=h; vec4 w=modelMatrix*vec4(p,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
    fragmentShader: `uniform vec3 uDeep,uLit,uHor,uMid,uSun,uCam,uDog; uniform float uT,uNight,uFlow; varying vec3 vW; varying float vH; varying vec3 vN;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      void main(){ vec3 n=normalize(vN);
        vec2 wp=vW.xz+vec2(uFlow,0.);
        n=normalize(n+vec3(noise(wp*1.3+uT*.4)-.5,0.,noise(wp*1.3-uT*.35+7.)-.5)*0.18);
        vec3 v=normalize(uCam-vW); float fr=pow(1.-max(dot(n,v),0.),4.);
        vec3 c=mix(uDeep,uLit,smoothstep(-0.6,0.7,vH)*0.45+0.12);
        c=mix(c,mix(uHor,uMid,0.3),fr*0.6);
        vec3 L=normalize(vec3(0.,0.08,-1.)); vec3 r=reflect(-v,n); float sp=pow(max(dot(r,L),0.),120.);
        float streak=exp(-pow(vW.x-uCam.x,2.)/(80.+abs(vW.z-uCam.z)*5.))*smoothstep(0.,-200.,vW.z-uCam.z);
        c+=uSun*(sp*1.4+streak*sp*3.+streak*0.12);
        vec2 g=abs(fract(wp/8.)-.5); float line=1.-smoothstep(0.,0.02,min(g.x,g.y));
        float dist=length(vW.xz-uCam.xz); c+=vec3(1.,.25,.7)*line*(0.03+0.07*uNight)*exp(-dist/60.);
        float foam=smoothstep(0.62,0.95,vH)*smoothstep(.45,.75,noise(wp*2.5+uT*.3))*0.35; c=mix(c,vec3(1.),foam);
        float fog=1.-exp(-dist/190.); c=mix(c,uHor,fog*0.9);
        gl_FragColor=vec4(c,1.); }`
  }));
  ocean.renderOrder = 0;
  scene.add(ocean);

  // palm silhouettes (official palms image) as far skyline strip
  const palms = new THREE.Mesh(new THREE.PlaneGeometry(520, 130), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { map: { value: tex('assets/img/palms.jpg') }, ...U },
    vertexShader: `varying vec2 vU; void main(){vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform sampler2D map; uniform vec3 uTop; varying vec2 vU; void main(){ vec2 u=vec2(fract(vU.x*2.),vU.y); vec3 t=texture2D(map,u).rgb; float l=dot(t,vec3(.3,.59,.11)); float a=smoothstep(0.2,0.07,l)*smoothstep(0.02,0.25,vU.y)*(1.-smoothstep(0.62,0.9,vU.y)); gl_FragColor=vec4(mix(vec3(0.05,0.01,0.1),uTop*0.4,0.3),a*0.9);} `
  }));
  palms.position.set(0, 40, -300); scene.add(palms);

  const dot = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.35, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();

  // ---- rider: full-body Cool Dog on jet ski (faces +x, cruises forward while the sea flows past)
  const dogTex = tex('assets/img/dog-ride.webp');
  const dogW = 5.2, dogH = dogW * 701 / 1009;
  const WL = dogH * 0.13; // waterline height in the art
  const dogGeo = new THREE.PlaneGeometry(dogW, dogH); dogGeo.translate(0, dogH / 2 - WL, 0);
  const dogMat = new THREE.MeshBasicMaterial({ map: dogTex, transparent: true, alphaTest: 0.1, side: THREE.DoubleSide, fog: false, depthWrite: true });
  const dog = new THREE.Mesh(dogGeo, dogMat); dog.renderOrder = 5;
  // water reflection (flipped, faded, wobbly)
  const reflMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { map: { value: dogTex }, uT: U.uT },
    vertexShader: `varying vec2 vU; void main(){ vU=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `uniform sampler2D map; uniform float uT; varying vec2 vU; void main(){ vec2 u=vU; u.x+=sin(u.y*40.+uT*3.)*0.006; vec4 c=texture2D(map,u); float fade=smoothstep(0.55,0.95,u.y); gl_FragColor=vec4(c.rgb*0.55,c.a*fade*0.28);} `
  });
  const refl = new THREE.Mesh(dogGeo, reflMat); refl.scale.y = -0.6; refl.position.y = 0.02; refl.renderOrder = 2;
  // soft dark contact shadow
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshBasicMaterial({ map: dot, color: 0x0a0220, transparent: true, opacity: .45, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.scale.set(dogW * .42, dogW * .14, 1); shadow.renderOrder = 1;
  const dogTilt = new THREE.Group(); dogTilt.add(dog);
  const dogRig = new THREE.Group(); dogRig.add(dogTilt, refl); scene.add(dogRig, shadow);

  // ---- wake trail: foamy V behind the stern that follows the waves
  const wakeGeo = new THREE.PlaneGeometry(16, 5, 64, 8); wakeGeo.rotateX(-Math.PI / 2); wakeGeo.translate(-8, 0, 0);
  const wake = new THREE.Mesh(wakeGeo, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { ...U, uOrg: { value: new THREE.Vector3() } },
    vertexShader: `uniform float uT,uA,uFlow; uniform vec3 uOrg; varying vec2 vU; ${WAVE}
      void main(){ vU=uv; vec4 w=modelMatrix*vec4(position,1.); w.y=wave(w.xz+vec2(uFlow,0.),uT,uA)+0.04; gl_Position=projectionMatrix*viewMatrix*w; }`,
    fragmentShader: `uniform float uT,uFlow; varying vec2 vU;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      void main(){ float x=1.-vU.x; float y=(vU.y-.5)*2.; float spread=0.08+x*0.85;
        float arm=exp(-pow((abs(y)-spread*0.9)/(0.05+x*0.18),2.)); float core=exp(-pow(y/(0.05+x*0.25),2.))*(1.-x)*0.9;
        float n=noise(vec2(vU.x*30.+uFlow*1.9,vU.y*12.)); float a=(arm*0.8+core)*(0.35+0.65*n)*(1.-smoothstep(0.55,1.,x))*smoothstep(0.,0.03,x);
        gl_FragColor=vec4(vec3(1.),a*0.55);} `
  }));
  wake.renderOrder = 1; scene.add(wake);

  // ---- spray: sparse, tiny, translucent droplets from hull + wake only
  const NP = 420;
  const pPos = new Float32Array(NP * 3), pVel = new Float32Array(NP * 3), pLife = new Float32Array(NP), pCol = new Float32Array(NP * 3);
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3)); pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
  const pts = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.09, map: dot, transparent: true, opacity: 0.55, depthWrite: false, vertexColors: true }));
  pts.frustumCulled = false; pts.renderOrder = 6; scene.add(pts);
  for (let i = 0; i < NP; i++) pPos[i * 3 + 1] = -99;
  let pHead = 0;
  function emit(x, y, z, vx, vy, vz, life) {
    const i = pHead; pHead = (pHead + 1) % NP;
    pPos[i * 3] = x; pPos[i * 3 + 1] = y; pPos[i * 3 + 2] = z; pVel[i * 3] = vx; pVel[i * 3 + 1] = vy; pVel[i * 3 + 2] = vz; pLife[i] = life;
    pCol[i * 3] = .92; pCol[i * 3 + 1] = .97; pCol[i * 3 + 2] = 1;
  }
  const W = (x, z) => waveJS(x + U.uFlow.value, z, U.uT.value, U.uA.value);

  // ---- buoys: drift past with the current, only in lanes BEHIND the rider (never in its foreground)
  const buoyTex = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 128; const x = c.getContext('2d'); for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#ffffff' : '#ff2f4d'; x.fillRect(0, i * 16, 64, 16); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const buoyGeo = new THREE.CylinderGeometry(0.45, 0.65, 1.8, 18); buoyGeo.translate(0, 0.6, 0);
  const capGeo = new THREE.SphereGeometry(0.28, 12, 8);
  const buoys = [];
  [[-30, -12], [-10, -18], [8, -11], [26, -20], [-20, -28], [40, -14], [16, -30]].forEach(([x, z], i) => {
    const g = new THREE.Group();
    const m = new THREE.Mesh(buoyGeo, new THREE.MeshBasicMaterial({ map: buoyTex }));
    const cap = new THREE.Mesh(capGeo, new THREE.MeshBasicMaterial({ color: 0xffe14a })); cap.position.y = 1.7;
    g.add(m, cap); g.position.set(x, 0, z); scene.add(g);
    buoys.push({ g, cap, x, z, vy: 0, y: 0, rx: 0, rz: 0, vrx: 0, vrz: 0, ph: i * 1.7 });
  });

  // tap splash: small, soft
  const rings = [];
  const ringGeo = new THREE.RingGeometry(0.8, 1, 48); ringGeo.rotateX(-Math.PI / 2);
  function splashAt(x, z, big = 1) {
    const y = W(x, z);
    for (let i = 0; i < 26 * big; i++) {
      const a = Math.random() * Math.PI * 2, s = 0.6 + Math.random() * 1.6;
      emit(x, y + .05, z, Math.cos(a) * s, 2 + Math.random() * 2.5, Math.sin(a) * s, .5 + Math.random() * .4);
    }
    const r = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .5, depthWrite: false }));
    r.position.set(x, y + .05, z); scene.add(r); rings.push({ r, t: 0, big });
  }

  // meme ring (THE PACK) — placed each frame in front of the camera
  const pack = new THREE.Group(); scene.add(pack);
  const packCenter = new THREE.Vector3(0, 0, -30);
  const PACK_R = 12.5;
  const cards = [];
  const MEME_AR = [16 / 9, 1, 16 / 9, 415 / 739, 964 / 542, 415 / 739, .8, 16 / 9, 399 / 501, 16 / 9, .75, 16 / 9, 16 / 9, 1, 16 / 9, 16 / 9, 405 / 720];
  MEMES.forEach((u, i) => {
    const ar = MEME_AR[i], h = ar > 1.2 ? 2.6 : 3.4, w = h * ar;
    const frame = new THREE.Mesh(new THREE.PlaneGeometry(w + .24, h + .24), new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0xff2fa0 : i % 3 === 1 ? 0xffe14a : 0x22e4ff, transparent: true, side: THREE.DoubleSide, fog: false }));
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex(u), transparent: true, side: THREE.DoubleSide, fog: false }));
    m.position.z = 0.02; frame.add(m);
    const a = i / MEMES.length * Math.PI * 2;
    frame.position.set(Math.sin(a) * PACK_R, 2.4, Math.cos(a) * PACK_R);
    frame.rotation.y = a;
    frame.userData = { i, a, m };
    pack.add(frame); cards.push(frame);
  });
  let packRot = 0, packVel = 0.15, packVis = 0;
  const setPackOpacity = (o) => cards.forEach(c => { const tr = o < 0.985; [c.material, c.userData.m.material].forEach(mt => { mt.opacity = tr ? o : 1; if (mt.transparent !== tr) { mt.transparent = tr; mt.needsUpdate = true; } }); c.visible = o > 0.01; });
  setPackOpacity(0);

  // ---- framing: where the rider sits on screen per station [fx, fy, heightFraction, azimuth, elevation]
  // chosen to sit in empty space, clear of the HUD, dock and content cards
  const FRAME_D = [
    [0.70, 0.56, 0.40, 0.22, 0.10],
    [0.80, 0.84, 0.20, -0.25, 0.12],
    [0.12, 0.80, 0.19, 0.30, 0.12],
    [0.78, 0.84, 0.19, 0.20, 0.14],
    [0.27, 0.86, 0.17, -0.20, 0.12],
    [0.86, 0.50, 0.17, 0.25, 0.10],
    [0.82, 0.84, 0.19, 0.15, 0.10],
  ];
  const FRAME_M = [
    [0.50, 0.54, 0.19, 0.18, 0.10],
    ['lane', 0, 0, -0.2, 0.12],
    [0.50, 0.70, 0.14, 0.25, 0.12],
    ['lane', 0, 0, 0.2, 0.12],
    ['lane', 0, 0, -0.2, 0.12],
    [0.50, 0.76, 0.12, 0.2, 0.16],
    [0.50, 0.70, 0.15, 0.1, 0.10],
  ];
  const fr = { fx: .7, fy: .56, hf: .4, az: .2, el: .1 };
  const camPos = new THREE.Vector3(0, 4, 14), camLook = new THREE.Vector3(0, 1.5, 0);
  const tgtPos = new THREE.Vector3(), tgtLook = new THREE.Vector3();
  const dogPos = new THREE.Vector3(), dogPrev = new THREE.Vector3();
  let mx = 0, my = 0;
  addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });

  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  let drag = null;
  canvas.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, t: performance.now(), moved: 0, lastX: e.clientX }; });
  addEventListener('pointermove', (e) => {
    if (!drag) return; const dx = e.clientX - drag.lastX; drag.lastX = e.clientX; drag.moved += Math.abs(dx);
    if (cur === 5) { packVel = dx * 0.004; packRot += dx * 0.006; }
  });
  addEventListener('pointerup', (e) => {
    if (!drag) return; const d = drag; drag = null;
    if (e.target !== canvas || d.moved > 8) return;
    ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (cur === 5) {
      const hit = ray.intersectObjects(cards, false)[0];
      if (hit) { openLB(hit.object.userData.i); sfx('blip'); return; }
    }
    const p = new THREE.Vector3(); if (ray.ray.intersectPlane(plane, p)) { splashAt(p.x, p.z, 1); sfx('blip'); }
  });
  $('#pk-prev').addEventListener('click', () => { packVel = -0.12; sfx('blip'); });
  $('#pk-next').addEventListener('click', () => { packVel = 0.12; sfx('blip'); });

  function resize() {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h;
    camera.fov = w / h < 0.8 ? 62 : 50; camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  const needle = $('#needle'), knots = $('#knots');
  const clock = new THREE.Clock();
  let t = 0, speedSm = 0, kickSm = 0, steer = 0, steerV = 0, bounce = 0, bounceV = 0, pitch = 0, pitchV = 0;
  const tmpV = new THREE.Vector3();
  function frame() {
    const dt = Math.min(clock.getDelta(), 0.05); t += dt; U.uT.value = t;
    setPal(cur, 1 - Math.pow(0.03, dt));
    const mob = isMob();
    kickSm += (kick - kickSm) * Math.min(1, dt * 1.5); kick *= Math.pow(0.5, dt);
    // calm cruise: forward speed via flowing sea + slow gentle weave
    const cruise = 1.6 + kickSm * 0.8;
    U.uFlow.value += cruise * dt;
    dogPrev.copy(dogPos);
    dogPos.x = Math.sin(t * 0.11) * 0.9;
    dogPos.z = Math.sin(t * 0.07) * 1.1 + Math.sin(t * 0.17) * 0.4;
    const vz = (dogPos.z - dogPrev.z) / Math.max(dt, 1e-4), vx = (dogPos.x - dogPrev.x) / Math.max(dt, 1e-4);
    const speed = Math.hypot(cruise + vx, vz);
    speedSm += (speed - speedSm) * Math.min(1, dt * 2);
    // wave under hull: average stern/bow for natural pitch
    const bowY = W(dogPos.x + dogW * .32, dogPos.z), sternY = W(dogPos.x - dogW * .32, dogPos.z);
    const midY = W(dogPos.x, dogPos.z);
    const hullY = Math.max(midY, (bowY + sternY) / 2);
    // spring-damped bounce + pitch (lags the wave a little = feels heavy & natural)
    bounceV += ((hullY - bounce) * 18 - bounceV * 6) * dt; bounce += bounceV * dt;
    const tgtPitch = Math.atan2(bowY - sternY, dogW * .64) * 0.8;
    pitchV += ((tgtPitch - pitch) * 14 - pitchV * 5) * dt; pitch += pitchV * dt;
    // lean into the weave (steering = lateral velocity)
    const tgtSteer = THREE.MathUtils.clamp(-vz * 0.35, -0.12, 0.12);
    steerV += ((tgtSteer - steer) * 8 - steerV * 4) * dt; steer += steerV * dt;
    dogPos.y = bounce;
    dogRig.position.set(dogPos.x, bounce, dogPos.z);
    // billboard yaw only (stays upright on water)
    dogRig.rotation.y = Math.atan2(camera.position.x - dogPos.x, camera.position.z - dogPos.z);
    dogTilt.rotation.z = pitch + Math.sin(t * 1.7) * 0.012;
    dog.rotation.y = steer * 1.2;
    dog.position.y = Math.sin(t * 2.1) * 0.03;
    dog.scale.set(1 + steer * .25, 1 - Math.abs(bounceV) * 0.01, 1);
    shadow.position.set(dogPos.x, midY + 0.03, dogPos.z); shadow.scale.set(dogW * (.42 + Math.sin(t * 2) * .01), dogW * .14, 1);
    wake.position.set(dogPos.x - dogW * .36, 0, dogPos.z); wake.rotation.y = -steer * 0.6;
    U.uDog.value.copy(dogPos);

    // droplets: few, from the stern sides + a little bow mist
    const sternX = dogPos.x - dogW * 0.36;
    if (Math.random() < dt * (mob ? 22 : 30)) {
      const side = Math.random() < .5 ? -1 : 1;
      emit(sternX + Math.random() * .3, sternY + .12, dogPos.z + side * (0.25 + Math.random() * .3), -cruise * (0.4 + Math.random() * .4), 1.2 + Math.random() * 1.6, side * (0.5 + Math.random() * .8), 0.45 + Math.random() * .3);
    }
    if (bounceV < -0.6 && Math.random() < dt * 30) { // hull slap on a crest
      for (let k = 0; k < 3; k++) { const side = k % 2 ? -1 : 1; emit(dogPos.x + dogW * .15, bowY + .08, dogPos.z + side * .5, -cruise * .3, 1 + Math.random(), side * (1 + Math.random()), .4); }
    }
    for (let i = 0; i < NP; i++) {
      if (pLife[i] <= 0) continue;
      pLife[i] -= dt;
      pVel[i * 3 + 1] -= 9.8 * dt;
      pPos[i * 3] += (pVel[i * 3] - 0) * dt; pPos[i * 3 + 1] += pVel[i * 3 + 1] * dt; pPos[i * 3 + 2] += pVel[i * 3 + 2] * dt;
      if (pPos[i * 3 + 1] < W(pPos[i * 3], pPos[i * 3 + 2]) || pLife[i] <= 0) { pLife[i] = 0; pPos[i * 3 + 1] = -99; }
    }
    pGeo.attributes.position.needsUpdate = true; pGeo.attributes.color.needsUpdate = true;

    // buoys drift with the current and wrap; spring-float on the waves
    buoys.forEach(b => {
      b.x -= cruise * dt; if (b.x < -45) b.x += 90;
      const wy = W(b.x, b.z);
      b.vy += ((wy - b.y) * 30 - b.vy * 4) * dt; b.y += b.vy * dt;
      const sx = W(b.x + .5, b.z) - W(b.x - .5, b.z), sz = W(b.x, b.z + .5) - W(b.x, b.z - .5);
      b.vrz += ((-sx * 0.9 - b.rz) * 20 - b.vrz * 3) * dt; b.rz += b.vrz * dt;
      b.vrx += ((sz * 0.9 - b.rx) * 20 - b.vrx * 3) * dt; b.rx += b.vrx * dt;
      b.g.position.set(b.x + dogPos.x, b.y - .2, b.z + dogPos.z); b.g.rotation.set(b.rx, t * .3 + b.ph, b.rz);
      b.cap.material.color.setHSL(0.14, 1, 0.5 + 0.3 * Math.max(0, Math.sin(t * 4 + b.ph)));
    });
    for (let i = rings.length - 1; i >= 0; i--) {
      const r = rings[i]; r.t += dt; const s = 1 + r.t * 4; r.r.scale.set(s, 1, s); r.r.material.opacity = Math.max(0, .5 - r.t * .7);
      if (r.t > .8) { scene.remove(r.r); r.r.material.dispose(); rings.splice(i, 1); }
    }

    // camera: framed on the rider, calm follow
    let F = (mob ? FRAME_M : FRAME_D)[cur];
    if (mob && cur === 0) { const tb = document.querySelector('.tick').getBoundingClientRect().bottom, ct = document.querySelector('.ca-row').getBoundingClientRect().top; const gap = Math.max(70, ct - tb); F = [0.5, (tb + ct) / 2 / innerHeight + 0.01, Math.min(0.2, gap * 0.92 / innerHeight), F[3], F[4]]; }
    if (F[0] === 'lane') { const dockH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dock')) || 86; F = [0.5, 1 - (dockH + 46) / innerHeight, 84 / innerHeight, F[3], F[4]]; }
    const kf = 1 - Math.pow(0.15, dt);
    fr.fx += (F[0] - fr.fx) * kf; fr.fy += (F[1] - fr.fy) * kf; fr.hf += (F[2] - fr.hf) * kf; fr.az += (F[3] - fr.az) * kf; fr.el += (F[4] - fr.el) * kf;
    const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const dist = (dogH * 1.15) / (2 * tanH * fr.hf);
    const az = fr.az + mx * 0.08, el = fr.el - my * 0.03;
    tgtLook.set(dogPos.x, (dogH / 2 - WL) * 0.9, dogPos.z);
    tgtPos.set(tgtLook.x + Math.sin(az) * Math.cos(el) * dist, tgtLook.y + Math.sin(el) * dist, tgtLook.z + Math.cos(az) * Math.cos(el) * dist);
    const k = 1 - Math.pow(0.12, dt);
    camPos.lerp(tgtPos, k); camLook.lerp(tgtLook, k);
    camera.position.copy(camPos); camera.position.y += Math.sin(t * 0.9) * .04;
    camera.lookAt(camLook);
    const Wd = innerWidth, Hd = innerHeight;
    camera.setViewOffset(Wd, Hd, (0.5 - fr.fx) * Wd, (0.5 - fr.fy) * Hd, Wd, Hd);
    U.uCam.value.copy(camera.position);
    sun.lookAt(camera.position); glow.lookAt(camera.position); palms.lookAt(camera.position.x, palms.position.y, camera.position.z);
    sun.material.color.copy(U.uSun.value);
    sun.position.set(camera.position.x, 26 + Math.sin(t * .2) * 2, camera.position.z - 330);
    glow.position.set(camera.position.x, sun.position.y, camera.position.z - 335);
    palms.position.set(camera.position.x, 40, camera.position.z - 300);
    ocean.position.set(camera.position.x, 0, camera.position.z - 120);

    // pack ring sits ahead of the camera (screen-centre), rider stays framed in the corner
    const wantPack = cur === 5 ? 1 : 0;
    packVis += (wantPack - packVis) * Math.min(1, dt * 3); setPackOpacity(packVis);
    if (packVis > 0.01) {
      camera.updateMatrixWorld();
      tmpV.set(-0.25, 0.1, 0.5).unproject(camera).sub(camera.position).setY(0).normalize();
      pack.position.set(camera.position.x + tmpV.x * 30, 0, camera.position.z + tmpV.z * 30);
    }
    if (!drag) { packVel += ((cur === 5 ? 0.1 : 0.04) * Math.sign(packVel || 1) - packVel) * dt * 0.6; }
    packRot += packVel * dt * 2.5;
    pack.rotation.y = packRot;
    cards.forEach((c, i) => { c.position.y = 3 + Math.sin(t * 1.1 + i) * .3 + (1 - packVis) * -5; c.rotation.z = Math.sin(t * .8 + i) * .05; });

    renderer.render(scene, camera);

    // HUD: speedometer from real dog speed
    const kn = Math.round(speedSm * 5.5);
    needle.style.transform = `rotate(${45 + Math.min(kn, 70) / 70 * 270}deg)`;
    knots.textContent = String(kn).padStart(2, '0');

    // letters ride the wave
    const tt = t;
    for (let i = 0; i < waveChars.length; i++) {
      const c = waveChars[i];
      if (!c.offsetParent) continue;
      const y = Math.sin(tt * 2.6 + i * .55) * 6 + Math.sin(tt * 1.3 + i * .9) * 3;
      const r = Math.cos(tt * 2.6 + i * .55) * 4;
      c.style.transform = `translateY(${y.toFixed(1)}px) rotate(${r.toFixed(1)}deg)`;
    }
    // static overlay
    const now = performance.now();
    if (now < staticUntil) { drawStatic(); stc.style.opacity = ((staticUntil - now) / 380 * .55).toFixed(2); } else if (stc.style.opacity !== '0') stc.style.opacity = '0';
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  // expose for verification
  window.__cooldog = { splashAt, go: (i) => go(i) };
} else {
  // non-WebGL: still animate letters
  (function loop(t) { waveChars.forEach((c, i) => c.style.transform = `translateY(${Math.sin(t / 380 + i * .55) * 6}px)`); requestAnimationFrame(loop); })(0);
}

/* ---------------- init ---------------- */
const hashI = STATIONS.findIndex(s => '#' + s.id === location.hash);
if (hashI > 0) go(hashI, true);
const boot = $('#boot');
const hideBoot = () => boot.classList.add('gone');
if (document.readyState === 'complete') setTimeout(hideBoot, 700); else addEventListener('load', () => setTimeout(hideBoot, 500));
setTimeout(hideBoot, 3500);
