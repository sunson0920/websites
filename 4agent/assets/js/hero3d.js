/* Binance AI — 3D hero.
   The logo floats as a glossy 3D diamond (logo texture on a gold extruded body),
   gold coins and cut diamonds orbit it, layered gold dust drifts behind, and an
   additive glow stands in for bloom. Mouse = parallax, scroll = camera dolly.
   One rAF loop; it stops when the hero is off screen or the tab is hidden.
   prefers-reduced-motion renders one still frame. Uses the existing logo.png only. */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const hero = document.querySelector('.hero');
const fig = document.querySelector('.hero-mascot');
const canvas = document.getElementById('hero3d');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const small = matchMedia('(max-width: 720px)').matches || matchMedia('(pointer: coarse)').matches;

function boot() {
  if (!hero || !fig || !canvas) return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !small, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  const CAMZ = 12;
  camera.position.set(0, 0, CAMZ);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  scene.add(new THREE.AmbientLight(0xfff1cc, 0.45));
  const key = new THREE.DirectionalLight(0xfff0c0, 2.2); key.position.set(-4, 6, 8); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffb000, 2.6); rim.position.set(5, -2, -6); scene.add(rim);
  const warm = new THREE.PointLight(0xf0b90b, 30, 18, 1.6); warm.position.set(0, 0, 3); scene.add(warm);

  /* ---------- procedural textures (canvas only, nothing saved) ---------- */
  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,255,255,1)');
    r.addColorStop(0.18, 'rgba(255,226,130,.85)');
    r.addColorStop(0.45, 'rgba(240,185,11,.28)');
    r.addColorStop(1, 'rgba(240,185,11,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const starTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,225,140,.9)'); r.addColorStop(1, 'rgba(255,200,60,0)');
    g.fillStyle = r; g.fillRect(0, 0, 64, 64);
    g.globalCompositeOperation = 'lighter'; g.fillStyle = 'rgba(255,240,190,.9)';
    g.fillRect(31, 4, 2, 56); g.fillRect(4, 31, 56, 2);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const coinTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(100, 90, 10, 128, 128, 130);
    r.addColorStop(0, '#fff3b8'); r.addColorStop(0.45, '#f5c242'); r.addColorStop(1, '#a86f05');
    g.fillStyle = r; g.fillRect(0, 0, 256, 256);
    g.strokeStyle = 'rgba(120,70,0,.55)'; g.lineWidth = 8; g.beginPath(); g.arc(128, 128, 108, 0, Math.PI * 2); g.stroke();
    g.strokeStyle = 'rgba(255,245,200,.5)'; g.lineWidth = 3; g.beginPath(); g.arc(128, 128, 96, 0, Math.PI * 2); g.stroke();
    g.save(); g.translate(128, 128); g.rotate(Math.PI / 4);
    const s = 70, rr = 16; g.beginPath();
    g.moveTo(-s / 2 + rr, -s / 2); g.arcTo(s / 2, -s / 2, s / 2, s / 2, rr); g.arcTo(s / 2, s / 2, -s / 2, s / 2, rr);
    g.arcTo(-s / 2, s / 2, -s / 2, -s / 2, rr); g.arcTo(-s / 2, -s / 2, s / 2, -s / 2, rr); g.closePath();
    g.fillStyle = 'rgba(130,80,0,.45)'; g.fill(); g.restore();
    g.fillStyle = 'rgba(255,248,215,.9)'; g.font = '700 34px Sora, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('BIBI', 128, 130);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
  })();

  /* ---------- the mascot: logo plane + glossy gold diamond body ---------- */
  const bibi = new THREE.Group();
  scene.add(bibi);
  const spinner = new THREE.Group();
  bibi.add(spinner);

  const shape = new THREE.Shape();
  const S = 1.78, R = 0.38, h = S / 2;
  shape.moveTo(-h + R, -h); shape.lineTo(h - R, -h); shape.quadraticCurveTo(h, -h, h, -h + R);
  shape.lineTo(h, h - R); shape.quadraticCurveTo(h, h, h - R, h); shape.lineTo(-h + R, h);
  shape.quadraticCurveTo(-h, h, -h, h - R); shape.lineTo(-h, -h + R); shape.quadraticCurveTo(-h, -h, -h + R, -h);
  const bodyGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: true, bevelThickness: 0.14, bevelSize: 0.12, bevelSegments: 8, curveSegments: 24 });
  bodyGeo.center();
  const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0xf5a400, metalness: 0.35, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.06, emissive: 0x3a2400, emissiveIntensity: 0.35 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.rotation.z = Math.PI / 4;
  body.position.set(0, -0.15, -0.42);
  body.scale.setScalar(0.97);
  spinner.add(body);

  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffc83a, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(9, 9, 1); halo.position.z = -1.6;
  bibi.add(halo);

  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffd25a, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.75, 0.014, 8, 160), ringMat);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.25, 0.01, 8, 160), ringMat.clone());
  ring2.material.opacity = 0.32;
  ring1.rotation.x = 1.25; ring2.rotation.x = 1.1; ring2.rotation.y = 0.35;
  bibi.add(ring1, ring2);

  const img = new Image();
  img.decoding = 'async';
  img.src = '/assets/img/logo.png';
  const logoReady = img.decode().then(() => {
    // runtime-only: flood-fill the white backdrop from the edges to alpha; the file is untouched
    const w = img.naturalWidth, hgt = img.naturalHeight;
    const c = document.createElement('canvas'); c.width = w; c.height = hgt;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(img, 0, 0);
    const d = g.getImageData(0, 0, w, hgt); const px = d.data;
    const seen = new Uint8Array(w * hgt); const stack = [];
    const light = (i) => { const o = i * 4; return Math.min(px[o], px[o + 1], px[o + 2]) > 222; };
    for (let x = 0; x < w; x++) { stack.push(x, (hgt - 1) * w + x); }
    for (let y = 0; y < hgt; y++) { stack.push(y * w, y * w + w - 1); }
    while (stack.length) {
      const i = stack.pop();
      if (seen[i] || !light(i)) continue;
      seen[i] = 1; px[i * 4 + 3] = 0;
      const x = i % w, y = (i / w) | 0;
      if (x > 0) stack.push(i - 1); if (x < w - 1) stack.push(i + 1);
      if (y > 0) stack.push(i - w); if (y < hgt - 1) stack.push(i + w);
    }
    // soften the 1px fringe next to removed pixels
    for (let i = 0; i < w * hgt; i++) {
      if (seen[i]) continue;
      const x = i % w, y = (i / w) | 0;
      if ((x > 0 && seen[i - 1]) || (x < w - 1 && seen[i + 1]) || (y > 0 && seen[i - w]) || (y < hgt - 1 && seen[i + w])) {
        const o = i * 4, m = Math.min(px[o], px[o + 1], px[o + 2]);
        if (m > 160) px[o + 3] = Math.max(0, 255 - (m - 160) * 2.6);
      }
    }
    g.putImageData(d, 0, 0);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.04, toneMapped: false }));
    plane.position.z = 0.02;
    spinner.add(plane);
  }).catch(() => {});

  /* ---------- orbiting coins & diamonds ---------- */
  const coinMats = [
    new THREE.MeshStandardMaterial({ color: 0xd9a024, metalness: 1, roughness: 0.28 }),
    new THREE.MeshStandardMaterial({ map: coinTex, color: 0xd9a63a, metalness: 0.9, roughness: 0.38 }),
    new THREE.MeshStandardMaterial({ map: coinTex, color: 0xd9a63a, metalness: 0.9, roughness: 0.38 }),
  ];
  const coinGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.09, 48);
  const gemGeo = new THREE.OctahedronGeometry(0.3, 0);
  const gemMat = new THREE.MeshPhysicalMaterial({ color: 0xfcd535, metalness: 0.55, roughness: 0.08, clearcoat: 1, flatShading: true, emissive: 0x6b4a00, emissiveIntensity: 0.45 });
  const orbiters = [];
  const nCoins = small ? 5 : 8, nGems = small ? 6 : 10;
  for (let i = 0; i < nCoins + nGems; i++) {
    const isCoin = i < nCoins;
    const m = isCoin ? new THREE.Mesh(coinGeo, coinMats) : new THREE.Mesh(gemGeo, gemMat);
    if (!isCoin) m.scale.set(1, 1.45, 1);
    const sc = isCoin ? 0.75 + Math.random() * 0.5 : 0.6 + Math.random() * 0.7;
    m.scale.multiplyScalar(sc);
    const o = {
      m, isCoin,
      r: 3.4 + Math.random() * 2.4, // orbit radius (mascot units)
      sp: (0.12 + Math.random() * 0.22) * (Math.random() < 0.5 ? -1 : 1),
      ph: Math.random() * Math.PI * 2,
      tilt: (Math.random() - 0.5) * 0.9,
      yb: (Math.random() - 0.5) * 0.9,
      spin: 0.6 + Math.random() * 1.6,
    };
    orbiters.push(o);
    bibi.add(m);
  }

  /* ---------- layered gold dust & sparkles ---------- */
  const mkPoints = (n, size, opacity, spread) => {
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread[0];
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread[2] - 2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ map: starTex, size, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffd76a, sizeAttenuation: true });
    const p = new THREE.Points(geo, mat);
    scene.add(p);
    return p;
  };
  const dust = mkPoints(small ? 260 : 900, 0.07, 0.75, [26, 16, 14]);
  const sparks = mkPoints(small ? 40 : 110, 0.26, 0.9, [22, 14, 8]);
  const motes = mkPoints(small ? 20 : 50, 0.55, 0.35, [20, 12, 6]);

  /* ---------- layout: pin the mascot over the figure's slot ---------- */
  let W = 1, H = 1, base = new THREE.Vector3(), unit = 1;
  const offsetIn = (el, root) => { let x = 0, y = 0; while (el && el !== root) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; } return { x, y }; };
  const layout = () => {
    W = canvas.clientWidth || hero.clientWidth; H = canvas.clientHeight || innerHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    const visH = 2 * CAMZ * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const u = visH / H;
    const o = offsetIn(fig, hero);
    const cx = o.x + fig.offsetWidth / 2, cy = o.y + fig.offsetHeight / 2;
    base.set((cx - W / 2) * u, -(cy - H / 2) * u + fig.offsetWidth * u * 0.06, 0);
    unit = (1.36 * fig.offsetWidth * u) / 4;
    bibi.position.copy(base);
    bibi.scale.setScalar(unit);
  };
  layout();
  addEventListener('resize', () => { layout(); if (reduced) render(0); }, { passive: true });

  /* ---------- input ---------- */
  let mx = 0, my = 0, tmx = 0, tmy = 0, sp = 0;
  if (!reduced) {
    addEventListener('pointermove', (e) => { tmx = (e.clientX / innerWidth) * 2 - 1; tmy = (e.clientY / innerHeight) * 2 - 1; }, { passive: true });
  }

  const render = (t) => {
    const ts = t * 0.001;
    mx += (tmx - mx) * 0.06; my += (tmy - my) * 0.06;
    sp = reduced ? 0 : Math.min(1, scrollY / (innerHeight * 0.9));

    // scroll-driven camera: dolly back, rise and roll a touch
    camera.position.set(mx * 0.7, -my * 0.45 + sp * 1.4, CAMZ + sp * 5);
    camera.lookAt(base.x * 0.25, base.y * 0.25 - sp * 0.6, 0);
    camera.rotation.z += sp * 0.06;

    bibi.position.set(base.x, base.y + Math.sin(ts * 1.25) * 0.14 * unit, base.z);
    spinner.rotation.y = Math.sin(ts * 0.55) * 0.38 + mx * 0.5 + sp * 2.4;
    spinner.rotation.x = Math.sin(ts * 0.8) * 0.08 + my * 0.3;
    spinner.rotation.z = Math.sin(ts * 0.45) * 0.05;
    halo.material.opacity = 0.72 + Math.sin(ts * 1.6) * 0.18;
    const hs = 8.6 + Math.sin(ts * 1.6) * 0.5; halo.scale.set(hs, hs, 1);
    ring1.rotation.z = ts * 0.25; ring2.rotation.z = -ts * 0.18;
    warm.intensity = 26 + Math.sin(ts * 2.1) * 6;

    for (const o of orbiters) {
      const a = o.ph + ts * o.sp;
      const x = Math.cos(a) * o.r, z = Math.sin(a) * o.r * 0.55;
      o.m.position.set(x, o.yb - Math.sin(a) * o.r * 0.46 + Math.sin(a * 2 + o.ph) * 0.25 + x * o.tilt * 0.2, z);
      o.m.rotation.x = o.isCoin ? Math.PI / 2 + Math.sin(ts * o.spin) * 0.6 : ts * o.spin * 0.6;
      o.m.rotation.y = ts * o.spin;
    }
    dust.rotation.y = ts * 0.02 + mx * 0.08; dust.position.y = ((ts * 0.12) % 2) - 1;
    sparks.rotation.y = -ts * 0.03 + mx * 0.12; sparks.material.opacity = 0.65 + Math.sin(ts * 2.3) * 0.3;
    motes.rotation.z = ts * 0.01; motes.material.opacity = 0.25 + Math.sin(ts * 0.9 + 1) * 0.12;

    renderer.render(scene, camera);
  };

  let raf = 0, visible = true;
  const loop = (t) => { render(t); raf = requestAnimationFrame(loop); };
  const start = () => { if (!raf && !reduced && visible && !document.hidden) raf = requestAnimationFrame(loop); };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };

  logoReady.then(() => {
    render(performance.now());
    fig.classList.add('is-3d');
    canvas.classList.add('is-on');
    canvas.dataset.ready = '1';
    if (reduced) return;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }).observe(canvas);
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    start();
  });
}

try { boot(); } catch (e) { /* the hero.jpg fallback stays */ }
