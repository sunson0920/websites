/* Binance AI — 4AGENT on BNB Chain.
   One rAF loop drives the field; everything else is event-driven. */
(() => {
  'use strict';

  // BEP-20 contract. Posted on this page and on https://x.com/4agentonbsc4agent_x.
  const CONTRACT = '0xe0e3d251f3f66880e0dfb60a5f129381b225022f';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  const yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ── nav + scroll progress ──────────────────────────── */
  const nav = $('#nav');
  const bar = $('#progress');
  let scrollY0 = 0, scrollVel = 0;

  const onScroll = () => {
    const y = scrollY;
    scrollVel = y - scrollY0;
    scrollY0 = y;
    nav.classList.toggle('stuck', y > 24);
    const max = document.documentElement.scrollHeight - innerHeight;
    const frac = max > 0 ? clamp(y / max, 0, 1) : 0;
    if (bar) bar.style.transform = `scaleX(${frac})`;
    // the light warms as you travel down the page
    document.documentElement.style.setProperty('--hue', (frac * 46).toFixed(1) + 'deg');
    // The hero recedes rather than merely scrolling off. Progress is measured
    // against the hero's OWN height, not a fixed 0.9 viewports: the hero is
    // taller than that, so the old divisor drove --hp to 1 -- and the opacity to
    // its floor -- while the tagline, buttons and stats were still fully on
    // screen and meant to be read.
    const hpRaw = clamp(heroH > 1 ? (y - heroTop) / heroH : y / (innerHeight * 0.9), 0, 1);
    // Ease in quadratically so the first part of the scroll barely dims anything.
    // The hero still arrives at full recession by the time it leaves, but text
    // stays legible while it is the thing you are actually looking at.
    document.documentElement.style.setProperty('--hp', (hpRaw * hpRaw).toFixed(3));
  };
  const heroEl = document.querySelector('.hero');
  let heroTop = 0, heroH = 1;
  const measureHero = () => {
    if (!heroEl) return;
    heroTop = heroEl.offsetTop;
    heroH = Math.max(1, heroEl.offsetHeight);
  };
  measureHero();
  addEventListener('resize', measureHero, { passive: true });
  addEventListener('load', measureHero);

  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── reveals ────────────────────────────────────────── */
  const revealables = $$('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(el => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add('is-in'), Math.min(i * 70, 280));
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(el => io.observe(el));
  }

  /* ── kinetic headings: words rise out of a mask ───────
     Split before the IntersectionObserver runs so the stagger rides the
     existing .is-in reveal rather than duplicating it. */
  if (!reduced) {
    $$('.section-title, .join h2, .chapter-body h3').forEach(el => {
      if (el.dataset.split) return;
      if (/[\u3400-\u9fff]/.test(el.textContent || '')) return;
      let i = 0;
      const frag = document.createDocumentFragment();
      for (const node of [...el.childNodes]) {
        if (node.nodeType !== 3) { frag.appendChild(node); continue; }   // keep <br> etc.
        for (const word of node.textContent.split(/(\s+)/)) {
          if (!word) continue;
          if (/^\s+$/.test(word)) { frag.appendChild(document.createTextNode(' ')); continue; }
          const outer = document.createElement('span');
          outer.className = 'kw';
          const inner = document.createElement('span');
          inner.className = 'kw-i';
          inner.textContent = word;
          inner.style.transitionDelay = (i++ * 55) + 'ms';
          outer.appendChild(inner);
          frag.appendChild(outer);
        }
      }
      el.textContent = '';
      el.appendChild(frag);
      el.dataset.split = '1';
    });
  }

  /* ── custom cursor ──────────────────────────────────── */
  if (!reduced && !coarse && matchMedia('(hover: hover)').matches) {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cur-dot';
    ring.className = 'cur-ring';
    document.body.append(dot, ring);
    document.documentElement.classList.add('has-cursor');

    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, shown = false;

    addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (!shown) { shown = true; dot.style.opacity = ring.style.opacity = '1'; }
      const hit = e.target.closest('a,button,.tile,.chapter-art,.social,input');
      ring.classList.toggle('is-over', !!hit);
    }, { passive: true });

    addEventListener('pointerdown', () => ring.classList.add('is-down'));
    addEventListener('pointerup', () => ring.classList.remove('is-down'));
    addEventListener('pointerleave', () => { shown = false; dot.style.opacity = ring.style.opacity = '0'; });

    (function trail() {
      rx += (x - rx) * 0.16;                 // the ring lags, which reads as weight
      ry += (y - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      requestAnimationFrame(trail);
    })();
  }

  /* ── toast + copy ───────────────────────────────────── */
  const toast = $('#toast');
  let toastTimer;
  const say = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  };

  const copy = async (text, ev) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch { /* ignore */ }
      ta.remove();
    }
    say('Contract copied ✦');
    if (ev) burst(ev.clientX, ev.clientY, 22);
  };

  const copyBtn = $('#ca-copy');
  if (copyBtn) copyBtn.addEventListener('click', (e) => copy(CONTRACT, e));
  $$('[data-copy]').forEach(el => el.addEventListener('click', (e) => copy(el.dataset.copy, e)));

  /* ── live market stats ──────────────────────────────── */
  const money = (n) => {
    if (!isFinite(n)) return '—';
    if (n >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
    if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
    if (n >= 1e3) return '$' + Math.round(n / 1e3) + 'K';
    return '$' + n.toFixed(0);
  };
  const priceFmt = (p) => {
    const n = parseFloat(p);
    if (!isFinite(n)) return '—';
    if (n >= 1) return '$' + n.toFixed(3);
    return '$' + n.toFixed(clamp(-Math.floor(Math.log10(n)) + 2, 4, 12));
  };

  /* count a value up the first time it lands, then just swap it */
  const seenStat = new Set();
  const setStat = (key, text, cls) => {
    $$(`[data-stat="${key}"]`).forEach(el => {
      el.classList.remove('up', 'down');
      if (cls) el.classList.add(cls);

      const m = text.match(/^([^\d-]*)(-?[\d.]+)(.*)$/);
      if (reduced || seenStat.has(key) || !m) { el.textContent = text; return; }

      const [, pre, numStr, post] = m;
      const target = parseFloat(numStr);
      const decimals = (numStr.split('.')[1] || '').length;
      const t0 = performance.now();
      const tick = (t) => {
        const k = clamp((t - t0) / 850, 0, 1);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = pre + (target * eased).toFixed(decimals) + post;
        if (k < 1) requestAnimationFrame(tick);
        else el.textContent = text;
      };
      requestAnimationFrame(tick);
    });
    seenStat.add(key);
  };

  async function loadStats() {
    const note = $('#stats-note');
    if (!CONTRACT) {
      if (note) note.textContent = 'Quotes show up here once the contract is posted.';
      return;
    }
    try {
      const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONTRACT}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      const pairs = (data.pairs || []).filter(
        p => p.baseToken && p.baseToken.address.toLowerCase() === CONTRACT.toLowerCase());
      if (!pairs.length) throw new Error('no pairs');
      const p = pairs.sort((a, b) => ((b.liquidity || {}).usd || 0) - ((a.liquidity || {}).usd || 0))[0];

      setStat('price', priceFmt(p.priceUsd));
      setStat('mcap', money(p.marketCap ?? p.fdv));
      setStat('liq', money((p.liquidity || {}).usd));
      setStat('vol', money((p.volume || {}).h24));

      const chg = parseFloat((p.priceChange || {}).h24);
      setStat('chg', isFinite(chg) ? (chg >= 0 ? '+' : '') + chg.toFixed(2) + '%' : '—',
              isFinite(chg) ? (chg >= 0 ? 'up' : 'down') : '');

      // Everything below already arrives in the same response -- it was simply
      // being thrown away. No extra request, no extra key.
      const pc = p.priceChange || {};
      for (const w of ['h1', 'h6', 'h24']) {
        const v = parseFloat(pc[w]);
        setStat(w, isFinite(v) ? (v >= 0 ? '+' : '') + v.toFixed(1) + '%' : '—',
                isFinite(v) ? (v >= 0 ? 'up' : 'down') : '');
      }

      const tx = (p.txns || {}).h24 || {};
      const buys = Number(tx.buys) || 0, sells = Number(tx.sells) || 0, tot = buys + sells;
      setStat('txns', tot ? tot.toLocaleString('en-US') : '—');
      // Set directly, not via setStat: that count-up animation parses a leading
      // number out of the string, which would mangle "1,084 buys · 882 sells"
      // into "0,084 buys ..." on the way up.
      const split = document.querySelector('[data-stat="txsplit"]');
      if (split) split.textContent = tot
        ? buys.toLocaleString('en-US') + ' buys · ' + sells.toLocaleString('en-US') + ' sells'
        : 'Buys vs sells';
      // A share of width, not a claim about direction: the bar just shows the
      // split. Reading it as sentiment is the visitor's business, not ours.
      const bar = document.querySelector('[data-stat="buybar"]');
      if (bar) bar.style.width = tot ? (buys / tot * 100).toFixed(1) + '%' : '0%';
      if (note) note.textContent = 'Live from DexScreener · refreshes every 60s';
    } catch {
      if (note) note.textContent = 'Live data unavailable — check the chart on DexScreener';
    }
  }
  loadStats();
  setInterval(() => { if (!document.hidden) loadStats(); }, 60000);

  /* ── community gallery + lightbox ───────────────────── */
  const lb = $('#lightbox');
  const lbImg = $('#lightbox-img');
  const lbCap = $('#lightbox-cap');
  let lbItems = [], lbIndex = 0;

  const openLb = (i) => {
    if (!lb || !lbItems.length) return;
    lbIndex = (i + lbItems.length) % lbItems.length;
    const it = lbItems[lbIndex];
    lbImg.src = it.src;
    lbImg.alt = it.alt;
    lbCap.textContent = it.author || '';
    lbCap.href = it.url || '#';
    lbCap.style.visibility = it.author ? 'visible' : 'hidden';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeLb = () => {
    if (!lb) return;
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  if (lb) {
    lb.addEventListener('click', (e) => { if (e.target.closest('[data-lb-next]')) openLb(lbIndex + 1);
                                          else if (e.target.closest('[data-lb-prev]')) openLb(lbIndex - 1);
                                          else if (!e.target.closest('#lightbox-img')) closeLb(); });
    addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') openLb(lbIndex + 1);
      if (e.key === 'ArrowLeft') openLb(lbIndex - 1);
    });
  }

  async function loadGallery() {
    const grid = $('#gallery');
    if (!grid) return;

    const placeholders = () => {
      grid.innerHTML = '';
      for (let i = 0; i < 6; i++) {
        const d = document.createElement('div');
        d.className = 'tile empty';
        d.innerHTML = '<div><span>✦</span>4AGENT art<br>lands here</div>';
        grid.appendChild(d);
      }
    };

    try {
      // the single-file preview build injects the gallery inline; the real site fetches it
      let items = window.__GALLERY__;
      if (!items) {
        const res = await fetch('/assets/img/community/gallery.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(res.status);
        items = await res.json();
      }
      if (!Array.isArray(items) || !items.length) return placeholders();

      grid.innerHTML = '';
      lbItems = [];
      items.forEach((item) => {
        const file = typeof item === 'string' ? item : item.file;
        if (!file) return;
        const author = typeof item === 'string' ? '' : (item.author || '');
        const url = typeof item === 'string' ? '' : (item.url || '');
        const src = (file.startsWith('data:') || file.startsWith('/') || file.startsWith('http'))
          ? file : '/assets/img/community/' + file;
        const alt = author ? `Binance AI art · ${author}` : 'Binance AI art';
        const idx = lbItems.length;
        lbItems.push({ src, alt, author, url });

        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'tile';
        tile.setAttribute('aria-label', 'Open ' + alt);
        tile.addEventListener('click', () => openLb(idx));
        magnetize(tile);

        // Tiles render at ~215px, so they load a small square AVIF instead of the
        // full 760px original -- 6.9 MB of gallery becomes 1.5 MB. The lightbox
        // still opens the original (see lbItems above), which is the only place
        // the art is actually examined closely.
        //
        // The fallback is a src swap rather than <picture>: when a <source>
        // 404s the browser does NOT fall back to the <img>, it just fails. This
        // one mechanism covers both a missing thumbnail (someone added art
        // without running tools/build_thumbs.sh) and a browser too old for AVIF.
        const img = document.createElement('img');
        img.src = src; img.alt = alt;
        img.loading = 'lazy'; img.decoding = 'async';
        img.width = 400; img.height = 400;
        img.addEventListener('error', () => {
          if (img.src !== src && !src.startsWith('data:')) { img.src = src; return; }
          tile.remove();
        });
        tile.appendChild(img);

        if (author) {
          const c = document.createElement('span');
          c.className = 'credit';
          c.textContent = author;
          tile.appendChild(c);
        }
        grid.appendChild(tile);
      });
      if (!grid.children.length) placeholders();
      buildRibbon(items);
    } catch {
      placeholders();
    }
  }

  /* the scrolling strip: a slice of the same art, listed twice so the
     -50% translate loops seamlessly */
  function buildRibbon(items) {
    const strip = $('#ribbon');
    if (!strip || !items.length) return;
    const pick = items.slice(0, 20);
    strip.innerHTML = '';
    for (let pass = 0; pass < 2; pass++) {
      for (const item of pick) {
        const file = typeof item === 'string' ? item : item.file;
        if (!file) continue;
        // 178px, listed twice -- 40 elements. These are the same 20 files the
        // grid shows, so pointing at the same thumbnails means the ribbon costs
        // nothing extra: every one is already in cache.
        const img = document.createElement('img');
        const full = (file.startsWith('data:') || file.startsWith('/') || file.startsWith('http'))
          ? file : '/assets/img/community/' + file;
        img.src = full;
        img.addEventListener('error', () => {
          if (img.src !== full && !file.startsWith('data:')) img.src = full;
        });
        img.alt = '';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.width = 178; img.height = 178;
        strip.appendChild(img);
      }
    }
  }

  loadGallery();

  /* ── magnetic hover ─────────────────────────────────── */
  const magnetize = (el) => {
    if (reduced || coarse) return;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.setProperty('--mx', (dx * 9).toFixed(2) + 'px');
      el.style.setProperty('--my', (dy * 9).toFixed(2) + 'px');
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    });
  };
  $$('.btn, .social').forEach(magnetize);

  /* ── scroll parallax ────────────────────────────────── */
  const parallax = $$('[data-parallax]');
  let ticking = false;
  const runParallax = () => {
    const mid = innerHeight / 2;
    for (const el of parallax) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) continue;
      const off = ((r.top + r.height / 2) - mid) / innerHeight;
      el.style.transform = `translate3d(0,${(off * parseFloat(el.dataset.parallax) * -100).toFixed(1)}px,0)`;
    }
    ticking = false;
  };
  if (parallax.length && !reduced) {
    addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(runParallax); }
    }, { passive: true });
    runParallax();
  }

  /* ── the dust field ─────────────────────────────────── */
  const pointer = { x: -9999, y: -9999, active: false };
  let sparks = [];

  /* ── intro: the wordmark assembles out of dust ───────────
     Targets are sampled from the ACTUAL rendered glyphs — each letter is drawn
     into an offscreen buffer at its own getBoundingClientRect — so the particles
     land on the real letterforms rather than an approximation of them. The DOM
     wordmark then crossfades in underneath and the particles blow away. */
  const intro = {
    state: 'idle',            // idle -> assembling -> holding -> releasing -> done
    parts: [],
    t0: 0,
    active() { return this.state !== 'idle' && this.state !== 'done'; },

    /* Never let a failure here leave the headline hidden: .intro-hold is only
       ever applied behind a try/catch plus a watchdog that reveals the type
       regardless of what the animation does. */
    reveal() {
      const mark = $('.wordmark');
      if (mark) { mark.classList.add('intro-done'); mark.classList.remove('intro-hold'); }
      this.state = 'done';
      this.parts = [];
    },

    async begin() {
      try { await this.run(); }
      catch (e) { this.reveal(); }
    },

    async run() {
      const mark = $('.wordmark');
      if (!mark || reduced) return;
      const letters = $$('.wordmark span');
      if (!letters.length) return;

      // a signature intro is a first impression, not a toll booth — play it once
      // per session so navigating back doesn't make people sit through it again
      try {
        if (sessionStorage.getItem('dust-intro')) return;
        sessionStorage.setItem('dust-intro', '1');
      } catch { /* private mode: just play it */ }

      mark.classList.add('intro-hold');           // hide the real type while we build it
      setTimeout(() => { if (this.state !== 'done') this.reveal(); }, 6000);   // watchdog

      // the sample is only accurate once the display face is actually loaded
      try {
        await Promise.race([
          document.fonts ? document.fonts.ready : Promise.resolve(),
          new Promise(r => setTimeout(r, 1200)),
        ]);
      } catch { /* older browsers: sample with whatever is loaded */ }

      const w = innerWidth, h = innerHeight;
      const off = document.createElement('canvas');
      off.width = w; off.height = h;
      const octx = off.getContext('2d', { willReadFrequently: true });
      if (!octx) { mark.classList.remove('intro-hold'); return; }

      const cs = getComputedStyle(letters[0]);
      octx.fillStyle = '#fff';
      octx.textBaseline = 'alphabetic';
      octx.textAlign = 'center';

      let drew = false;
      for (const el of letters) {
        const r = el.getBoundingClientRect();
        if (!r.width || r.bottom < 0 || r.top > h) continue;
        octx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
        // baseline ≈ bottom of the box minus the descender slack of this face
        octx.fillText(el.textContent, r.left + r.width / 2, r.bottom - r.height * 0.11);
        drew = true;
      }
      if (!drew) { mark.classList.remove('intro-hold'); return; }

      // walk the buffer, adapting the step so huge type doesn't spawn 10k particles
      const data = octx.getImageData(0, 0, w, h).data;
      const targets = [];
      for (let step = 3; step <= 7; step++) {
        targets.length = 0;
        for (let y = 0; y < h; y += step) {
          for (let x = 0; x < w; x += step) {
            if (data[(y * w + x) * 4 + 3] > 128) targets.push({ x, y });
          }
        }
        if (targets.length <= 1900) break;
      }
      if (!targets.length) { mark.classList.remove('intro-hold'); return; }

      const cx = w / 2, cy = h / 2;
      this.parts = targets.map((t) => {
        const a = Math.random() * Math.PI * 2;
        const d = Math.max(w, h) * (0.45 + Math.random() * 0.65);
        return {
          tx: t.x, ty: t.y,
          x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d,
          sx: 0, sy: 0,
          r: Math.random() * 1.15 + 0.5,
          delay: (t.x / w) * 260 + Math.random() * 260,   // sweeps left to right
          dur: 720 + Math.random() * 420,
          vx: 0, vy: 0,
        };
      });
      for (const p of this.parts) { p.sx = p.x; p.sy = p.y; }

      this.t0 = performance.now();
      this.state = 'assembling';
    },

    draw(ctx, now) {
      if (!this.active()) return;
      const el = now - this.t0;
      const ease = (k) => 1 - Math.pow(1 - k, 4);

      if (this.state === 'assembling') {
        let landed = 0;
        for (const p of this.parts) {
          const k = clamp((el - p.delay) / p.dur, 0, 1);
          const e = ease(k);
          p.x = p.sx + (p.tx - p.sx) * e;
          p.y = p.sy + (p.ty - p.sy) * e;
          if (k >= 1) landed++;
          const a = 0.25 + 0.75 * e;
          ctx.fillStyle = `rgba(255,${214 + e * 20},${120 - e * 40},${a.toFixed(3)})`;
          ctx.fillRect(p.x, p.y, p.r, p.r);
        }
        if (landed === this.parts.length) { this.state = 'holding'; this.t0 = now; }
        return;
      }

      if (this.state === 'holding') {
        for (const p of this.parts) {
          ctx.fillStyle = 'rgba(255,236,170,1)';
          ctx.fillRect(p.x, p.y, p.r, p.r);
        }
        if (el > 260) {
          const mark = $('.wordmark');
          if (mark) mark.classList.add('intro-done');    // real type fades in under them
          for (const p of this.parts) {
            const a = Math.random() * Math.PI * 2;
            p.vx = Math.cos(a) * (0.6 + Math.random() * 2.3);
            p.vy = Math.sin(a) * (0.6 + Math.random() * 2.3) - 0.5;
            p.life = 1;
          }
          this.state = 'releasing';
          this.t0 = now;
        }
        return;
      }

      // releasing — blow away into the ambient field
      let alive = 0;
      for (const p of this.parts) {
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.985; p.vy = p.vy * 0.985 - 0.006;
        p.life *= 0.976;
        if (p.life > 0.03) {
          alive++;
          ctx.fillStyle = `rgba(255,226,140,${(p.life * 0.85).toFixed(3)})`;
          ctx.fillRect(p.x, p.y, p.r, p.r);
        }
      }
      if (!alive) {
        this.state = 'done';
        this.parts = [];
        const mark = $('.wordmark');
        if (mark) mark.classList.remove('intro-hold');
      }
    },
  };
  intro.begin();

  function burst(x, y, n = 18) {
    if (reduced) return;
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 * i) / n + Math.random() * 0.4;
      const sp = Math.random() * 3.4 + 1.1;
      sparks.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                    life: 1, r: Math.random() * 1.9 + 0.7 });
    }
  }
  addEventListener('pointerdown', (e) => {
    if (e.target.closest('a,button,input')) return;
    burst(e.clientX, e.clientY, 16);
  });

  (function dustfield() {
    const cv = $('#dustfield');
    if (!cv || reduced) return;
    const ctx = cv.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1, motes = [], stars = [], comets = [], glints = [], raf = null;
    let nextComet = 0, nextGlint = 0, t = 0, sky = 0;
    const LINK = 104, LINK2 = LINK * LINK;      // distance at which dust finds dust
    let grid = new Map();

    const build = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = innerWidth; h = innerHeight;
      cv.width = Math.floor(w * dpr);
      cv.height = Math.floor(h * dpr);
      cv.style.width = w + 'px';
      cv.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // three depth bands: far stars barely move, near dust moves most
      const starCount = Math.min(coarse ? 60 : 130, Math.round((w * h) / 14000));
      // stored relative to centre so the whole sky can rotate as one
      stars = Array.from({ length: starCount }, () => ({
        sx: Math.random() * w - w / 2, sy: Math.random() * h - h / 2,
        r: Math.random() * 1.05 + 0.25,
        z: Math.random() * 0.3 + 0.08,             // far away
        a: Math.random() * 0.5 + 0.18,
        tw: Math.random() * Math.PI * 2,
        ts: Math.random() * 0.012 + 0.003
      }));

      const count = Math.min(coarse ? 60 : 140, Math.round((w * h) / 13000));
      motes = Array.from({ length: count }, () => {
        const z = Math.random() * 0.75 + 0.35;     // nearer = bigger, faster, softer
        return {
          x: Math.random() * w, y: Math.random() * h,
          r: (Math.random() * 1.4 + 0.35) * z,
          vx: (Math.random() - 0.5) * 0.14 * z,
          vy: -(Math.random() * 0.22 + 0.05) * z,
          bx: 0, by: 0, z,
          a: (Math.random() * 0.5 + 0.12) * (1.15 - z * 0.4),
          tw: Math.random() * Math.PI * 2,
          ts: Math.random() * 0.02 + 0.005
        };
      });
      nextComet = t + 260 + Math.random() * 520;
      nextGlint = t + 90;
      glints = [];
    };

    /* a four-point flare, the same shape as the star in the mascot's halo */
    const drawGlint = (x, y, size, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = alpha;
      const g = ctx.createLinearGradient(-size, 0, size, 0);
      g.addColorStop(0, 'rgba(255,255,255,0)');
      g.addColorStop(0.5, 'rgba(255,246,220,1)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();                       // horizontal spike
      ctx.moveTo(-size, 0); ctx.lineTo(0, -size * 0.13);
      ctx.lineTo(size, 0);  ctx.lineTo(0, size * 0.13);
      ctx.closePath(); ctx.fill();
      ctx.beginPath();                       // vertical spike
      ctx.moveTo(0, -size); ctx.lineTo(size * 0.13, 0);
      ctx.lineTo(0, size);  ctx.lineTo(-size * 0.13, 0);
      ctx.closePath(); ctx.fill();
      ctx.restore();
    };

    addEventListener('pointermove', (e) => {
      pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true;
      // the nebula leans away from the pointer, a half-beat behind
      const nx = (e.clientX / innerWidth - 0.5), ny = (e.clientY / innerHeight - 0.5);
      document.documentElement.style.setProperty('--px', (nx * -26).toFixed(1) + 'px');
      document.documentElement.style.setProperty('--py', (ny * -26).toFixed(1) + 'px');
    }, { passive: true });
    addEventListener('pointerleave', () => { pointer.active = false; });

    const spawnComet = () => {
      const fromLeft = Math.random() < 0.5;
      comets.push({
        x: fromLeft ? -60 : w + 60,
        y: Math.random() * h * 0.55,
        vx: (fromLeft ? 1 : -1) * (5.5 + Math.random() * 3.5),
        vy: 1.6 + Math.random() * 1.4,
        life: 1
      });
    };

    const frame = () => {
      t++;
      scrollVel *= 0.86;            // streaks settle once the page stops moving
      ctx.clearRect(0, 0, w, h);

      // parallax offset per depth band, driven by scroll
      const sp = scrollY * 0.02;

      // ── far stars: the whole sky turns, slowly, like a real one
      sky += 0.00006;
      const cos = Math.cos(sky), sin = Math.sin(sky), cx = w / 2, cy = h / 2;
      for (const s of stars) {
        s.tw += s.ts;
        const x = cx + s.sx * cos - s.sy * sin;
        const y = ((cy + s.sx * sin + s.sy * cos - sp * s.z) % h + h) % h;
        const alpha = s.a * (0.45 + 0.55 * Math.sin(s.tw));
        ctx.fillStyle = `rgba(255,220,130,${alpha.toFixed(3)})`;
        ctx.fillRect(x, y, s.r, s.r);
        s.lastX = x; s.lastY = y;
      }

      // ── glints: every so often one star flares into a four-point star
      if (t > nextGlint && stars.length) {
        const s = stars[(Math.random() * stars.length) | 0];
        glints.push({ x: s.lastX || cx, y: s.lastY || cy, life: 1, size: 12 + Math.random() * 16 });
        nextGlint = t + 70 + Math.random() * 160;
      }
      glints = glints.filter(g => g.life > 0.03);
      for (const g of glints) {
        g.life *= 0.955;
        drawGlint(g.x, g.y, g.size * (0.4 + g.life * 0.6), g.life * 0.85);
      }

      // ── comets: rare, quick, with a tail
      if (t > nextComet) { spawnComet(); nextComet = t + 420 + Math.random() * 900; }
      comets = comets.filter(c => c.life > 0.02 && c.x > -220 && c.x < w + 220);
      for (const c of comets) {
        c.x += c.vx; c.y += c.vy; c.life *= 0.992;
        const g = ctx.createLinearGradient(c.x, c.y, c.x - c.vx * 13, c.y - c.vy * 13);
        g.addColorStop(0, `rgba(255,240,200,${(c.life * 0.9).toFixed(3)})`);
        g.addColorStop(1, 'rgba(240,185,11,0)');
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.7;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.vx * 13, c.y - c.vy * 13);
        ctx.stroke();
      }

      // ── dust: drifts, parallaxes with scroll, scatters from the pointer
      const R = 118, R2 = R * R;
      const streak = Math.min(Math.abs(scrollVel) * 0.45, 22);   // smears when you fling the page
      grid.clear();

      for (const m of motes) {
        m.x += m.vx; m.y += m.vy; m.tw += m.ts;
        if (m.y < -6) { m.y = h + 6; m.x = Math.random() * w; }
        if (m.x < -6) m.x = w + 6;
        if (m.x > w + 6) m.x = -6;

        const py = ((m.y - sp * m.z) % h + h) % h;

        if (pointer.active) {
          const dx = m.x + m.bx - pointer.x, dy = py + m.by - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 0.01) {
            const f = (1 - Math.sqrt(d2) / R) * 2.6 * m.z;
            const inv = 1 / Math.sqrt(d2);
            m.bx += dx * inv * f;
            m.by += dy * inv * f;
          }
        }
        m.bx *= 0.90; m.by *= 0.90;

        m.px = m.x + m.bx; m.py = py + m.by;
        m.alpha = m.a * (0.62 + 0.38 * Math.sin(m.tw));

        // bucket into a coarse grid so neighbour lookup stays O(n)
        const key = ((m.px / LINK) | 0) + ':' + ((m.py / LINK) | 0);
        let cell = grid.get(key);
        if (!cell) grid.set(key, cell = []);
        cell.push(m);
      }

      // ── threads: dust that drifts close briefly finds other dust
      if (!coarse) {
        ctx.lineWidth = 0.7;
        for (const m of motes) {
          let links = 0;
          const gx = (m.px / LINK) | 0, gy = (m.py / LINK) | 0;
          for (let ix = gx; ix <= gx + 1 && links < 3; ix++) {
            for (let iy = gy - 1; iy <= gy + 1 && links < 3; iy++) {
              const cell = grid.get(ix + ':' + iy);
              if (!cell) continue;
              for (const n of cell) {
                if (n === m || (ix === gx && iy <= gy && n.px <= m.px)) continue;  // each pair once
                const dx = n.px - m.px, dy = n.py - m.py, d2 = dx * dx + dy * dy;
                if (d2 > LINK2 || d2 < 1) continue;
                const near = 1 - Math.sqrt(d2) / LINK;
                ctx.strokeStyle = `rgba(240,185,11,${(near * near * 0.30).toFixed(3)})`;
                ctx.beginPath();
                ctx.moveTo(m.px, m.py);
                ctx.lineTo(n.px, n.py);
                ctx.stroke();
                if (++links >= 3) break;
              }
            }
          }
        }
      }

      for (const m of motes) {
        ctx.fillStyle = `rgba(255,226,140,${m.alpha.toFixed(3)})`;
        if (streak > 1.5) {
          ctx.lineWidth = m.r * 2;
          ctx.strokeStyle = ctx.fillStyle;
          ctx.beginPath();
          ctx.moveTo(m.px, m.py);
          ctx.lineTo(m.px, m.py + streak * m.z * Math.sign(scrollVel));
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(m.px, m.py, m.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // click sparks
      if (sparks.length) {
        sparks = sparks.filter(s => s.life > 0.02);
        for (const s of sparks) {
          s.x += s.vx; s.y += s.vy;
          s.vx *= 0.94; s.vy = s.vy * 0.94 + 0.03;
          s.life *= 0.94;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * s.life, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,236,190,${(s.life * 0.9).toFixed(3)})`;
          ctx.fill();
        }
      }

      // the assembling wordmark rides on top of the ambient field
      intro.draw(ctx, performance.now());

      // pointer halo — the mascot's halo motif, following the cursor
      if (pointer.active && !coarse) {
        const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 92);
        g.addColorStop(0, 'rgba(240,185,11,.16)');
        g.addColorStop(1, 'rgba(240,185,11,0)');
        ctx.fillStyle = g;
        ctx.fillRect(pointer.x - 92, pointer.y - 92, 184, 184);
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };

    let rt;
    addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(build, 180); }, { passive: true });
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

    build();
    start();
  })();

  /* ── wordmark letters follow the pointer ────────────── */
  if (!reduced && !coarse) {
    const letters = $$('.wordmark span');
    const mark = $('.wordmark');
    if (mark && letters.length) {
      mark.addEventListener('pointermove', (e) => {
        letters.forEach(l => {
          const r = l.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / 22;
          const dy = (e.clientY - (r.top + r.height / 2)) / 22;
          const dist = Math.hypot(dx, dy);
          const pull = clamp(14 - dist, 0, 14);
          l.style.setProperty('--tx', (dx * pull * 0.16).toFixed(1) + 'px');
          l.style.setProperty('--ty', (dy * pull * 0.16).toFixed(1) + 'px');
        });
      });
      mark.addEventListener('pointerleave', () => {
        letters.forEach(l => { l.style.setProperty('--tx', '0px'); l.style.setProperty('--ty', '0px'); });
      });
    }
  }
})();

/* ── Mascot video: make sure it actually plays ──────────────────────────────
   The markup already says autoplay+muted+loop, but that is a request, not a
   guarantee: Safari refuses in Low Power Mode, iOS wants the muted property set
   in JS (not just the attribute), and a play() issued before the element has
   data can reject outright. The tag has no controls, so a refusal would leave a
   silent poster frame with no way for the visitor to start it. This retries. */
(() => {
  const v = document.querySelector('.mascot-video');
  if (!v) return;

  // Setting these as properties (not attributes) is what iOS actually honours.
  v.muted = true;
  v.defaultMuted = true;
  v.playsInline = true;

  let done = false;
  const kick = () => {
    if (done) return;
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
    if (!v.paused) done = true;
  };

  kick();
  ['loadeddata', 'canplay', 'canplaythrough'].forEach(e => v.addEventListener(e, kick));

  // Only bother while it is on screen, and re-kick if the tab was backgrounded
  // (browsers pause offscreen/hidden video and do not always resume it).
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      for (const en of entries) {
        if (en.isIntersecting) { done = false; kick(); }
        else if (!v.paused) v.pause();     // offscreen decode is wasted battery
      }
    }, { rootMargin: '900px 0px' }).observe(v);
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) { done = false; kick(); }
  });

  // Last resort: the first user gesture anywhere satisfies every autoplay policy.
  const onGesture = () => { done = false; kick(); };
  ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(e =>
    addEventListener(e, onGesture, { once: true, passive: true }));
})();

/* ── Music on/off ───────────────────────────────────────────────────────────
   The video carries an audio track but must start muted — every browser blocks
   autoplay with sound. This button is the one control on it. Unmuting from a
   real click is always permitted, so the toggle is also the moment to make sure
   playback is actually running. */
(() => {
  const v = document.querySelector('.mascot-video');
  const btn = document.querySelector('.music-btn');
  if (!v || !btn) return;

  const txt = btn.querySelector('.music-txt');

  const render = () => {
    const on = !v.muted;
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.setAttribute('aria-label', on ? 'Turn music off' : 'Turn music on');
    if (txt) txt.textContent = on ? 'Music on' : 'Music off';
  };

  btn.addEventListener('click', () => {
    v.muted = !v.muted;
    v.defaultMuted = v.muted;
    if (!v.muted) {
      // Volume can be 0 from a previous session's state; make sure it is audible.
      if (!v.volume) v.volume = 1;
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => { v.muted = true; render(); });
    }
    render();
  });

  // Keep the label honest if anything else changes the mute state.
  v.addEventListener('volumechange', render);
  render();
})();

/* BNB Chain checks wait until a contract is posted on this page. */
