/* Binance AI — premium layer: tilt + glare cards, staggered reveals, sparkle
   field, gold confetti on copy/buy, count-up numbers. Event-driven only; motion
   is transform/opacity. Reduced motion: nothing moves, everything is shown. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const small = matchMedia('(max-width: 720px)').matches;

  /* ── staggered groups ── */
  const groups = ['.chips .chip', '.cards .card', '.steps .step', '.crew figure', '.numbers .num', '.embed-row .embed-card', '.socials .social'];
  groups.forEach((sel) => $$(sel).forEach((el, i) => { el.classList.add('stg'); el.style.setProperty('--i', i); }));
  if (reduced) $$('.stg, .reveal').forEach((el) => el.classList.add('is-in'));
  else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      setTimeout(() => e.target.classList.add('stg-done'), 1400);
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    $$('.stg').forEach((el) => io.observe(el));
  } else $$('.stg').forEach((el) => el.classList.add('is-in'));

  /* ── sparkle field (CSS twinkles) ── */
  const field = $('.sparkles');
  if (field && !reduced) {
    const n = small ? 14 : 34;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
      const s = document.createElement('i');
      s.style.left = (Math.random() * 100).toFixed(2) + '%';
      s.style.top = (Math.random() * 100).toFixed(2) + '%';
      s.style.setProperty('--s', (0.5 + Math.random() * 1.1).toFixed(2));
      s.style.animationDelay = (-Math.random() * 6).toFixed(2) + 's';
      s.style.animationDuration = (3.2 + Math.random() * 4).toFixed(2) + 's';
      frag.appendChild(s);
    }
    field.appendChild(frag);
  }

  /* ── 3D tilt + glare (one delegated listener) ── */
  const TILT = '.crew figure, .tile, .card, .step, .chapter-art, .quote-card';
  let cur = null;
  const reset = (el) => { if (!el) return; el.style.rotate = ''; el.classList.remove('tilting'); };
  if (!reduced && !coarse) {
    addEventListener('pointermove', (e) => {
      const el = e.target.closest && e.target.closest(TILT);
      if (el !== cur) { reset(cur); cur = el; }
      if (!el) return;
      if (!el.querySelector(':scope > .glare')) {
        const g = document.createElement('span'); g.className = 'glare'; g.setAttribute('aria-hidden', 'true'); el.appendChild(g);
      }
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
      const k = el.classList.contains('quote-card') ? 6 : 14;
      const len = Math.hypot(dx, dy) || 0.0001;
      el.classList.add('tilting');
      el.style.rotate = `${(-dy / len).toFixed(3)} ${(dx / len).toFixed(3)} 0 ${(len * k * 1.4).toFixed(2)}deg`;
      el.style.setProperty('--gx', (dx * 100).toFixed(1) + '%');
      el.style.setProperty('--gy', (dy * 100).toFixed(1) + '%');
    }, { passive: true });
    document.addEventListener('pointerleave', () => { reset(cur); cur = null; });
  }

  /* ── gold confetti ── */
  const COLORS = ['#F0B90B', '#FCD535', '#FFE9A8', '#FFFFFF', '#C98A00'];
  const confetti = (x, y, n = 46) => {
    if (reduced || !document.body.animate) return;
    const layer = document.createElement('div');
    layer.className = 'confetti';
    document.body.appendChild(layer);
    let left = n;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('i');
      const w = 6 + Math.random() * 7;
      p.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${w * (Math.random() < 0.5 ? 1 : 0.45)}px;background:${COLORS[i % COLORS.length]};` +
        (i % 3 === 0 ? 'border-radius:2px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);' : 'border-radius:2px;');
      layer.appendChild(p);
      const a = Math.random() * Math.PI * 2, v = 90 + Math.random() * 220;
      const dx = Math.cos(a) * v, dy = Math.sin(a) * v - 140;
      p.animate([
        { transform: 'translate(-50%,-50%) rotate(0deg) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${dx * 0.7}px), calc(-50% + ${dy * 0.7}px)) rotate(${Math.random() * 360}deg) scale(1)`, opacity: 1, offset: 0.45 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy + 260}px)) rotate(${Math.random() * 900}deg) scale(.6)`, opacity: 0 },
      ], { duration: 1300 + Math.random() * 900, easing: 'cubic-bezier(.16,1,.3,1)' }).onfinish = () => { if (--left <= 0) layer.remove(); };
    }
  };
  const fire = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    confetti(e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2);
  };
  $$('#ca-copy, [data-copy], #buy-primary, #nav-buy').forEach((el) => el.addEventListener('click', fire));
  window.bibiConfetti = confetti;

  /* ── counters ── */
  const nums = $$('[data-count]');
  const show = (el) => { el.textContent = el.dataset.count; };
  if (reduced || !('IntersectionObserver' in window)) nums.forEach(show);
  else {
    const cio = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target, to = +el.dataset.count, t0 = performance.now(), dur = 1600;
      const step = (t) => {
        const k = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(to * ease);
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: 0.5 });
    nums.forEach((el) => { el.textContent = '0'; cio.observe(el); });
  }
})();
