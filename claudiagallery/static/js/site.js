/* claudiagallery.vip — split-flaps, the hero, loops, galleries, the lightbox, the player. No dependencies (hls.js loads on demand). */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* header */
  const hdr = $(".site-h");
  if (hdr && !hdr.classList.contains("always")) {
    const on = () => hdr.classList.toggle("solid", scrollY > 40);
    addEventListener("scroll", on, { passive: true }); on();
  }
  const mb = $(".menu-b"), nav = $(".nav");
  if (mb && nav) mb.addEventListener("click", () => { const o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });

  /* split-flap boards: tiles are rendered in the HTML; they clatter through letters once, when first seen */
  const CH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  function flapBoard(el) {
    if (RM) return;
    const start = performance.now() + (+el.dataset.delay || 0);
    $$(".flap", el).forEach((d, i) => {
      const c = d.textContent;
      if (!c) return;
      const stop = start + 380 + i * 95 + Math.random() * 260;
      const step = now => {
        if (now >= stop) { d.textContent = c; return; }
        if (now >= start) { d.textContent = CH[(Math.random() * CH.length) | 0]; d.classList.remove("tick"); void d.offsetWidth; d.classList.add("tick"); }
        setTimeout(() => requestAnimationFrame(step), 55);
      };
      requestAnimationFrame(step);
    });
  }
  const flapIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { flapIO.unobserve(e.target); flapBoard(e.target); } }), { threshold: .6 });
  $$(".flaps[data-flap]").forEach(el => el.closest(".hero") ? flapBoard(el) : flapIO.observe(el));

  /* hero slideshow + the detector boxes (real Grounding DINO boxes from the films' plates) */
  const hero = $(".hero");
  if (hero) {
    const slides = $$(".slide", hero), pips = $$(".pips button", hero), rd = $$("[data-rd]", hero);
    let i = 0, timer;
    const place = () => slides.forEach(s => {
      const img = $("img", s), box = $(".cvbox", s);
      if (!box || !img.naturalWidth) return;
      const [bx, by, bw, bh] = JSON.parse(s.dataset.box), W = s.clientWidth, H = s.clientHeight;
      const sc = Math.max(W / img.naturalWidth, H / img.naturalHeight), iw = img.naturalWidth * sc, ih = img.naturalHeight * sc;
      const [px, py] = (s.dataset.pos || "50 50").split(" ").map(Number);
      const ox = (W - iw) * px / 100, oy = (H - ih) * py / 100;
      Object.assign(box.style, { left: ox + bx * iw + "px", top: oy + by * ih + "px", width: bw * iw + "px", height: bh * ih + "px" });
    });
    const show = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("on", k === i));
      pips.forEach((p, k) => p.classList.toggle("on", k === i));
      const d = slides[i].dataset;
      rd.forEach(el => { el.textContent = d[el.dataset.rd] || ""; });
    };
    const run = () => { clearInterval(timer); if (!RM) timer = setInterval(() => show(i + 1), 7000); };
    pips.forEach((p, k) => p.addEventListener("click", () => { show(k); run(); }));
    slides.forEach(s => { const im = $("img", s); im.complete ? place() : im.addEventListener("load", place); });
    addEventListener("resize", place);
    show(0); run();
  }

  /* loops play only while visible */
  const vIO = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting && !RM) { if (v.preload === "none") v.preload = "auto"; v.play().catch(() => {}); } else v.pause();
  }), { threshold: .25 });
  $$("video[data-loop]").forEach(v => vIO.observe(v));

  /* copy buttons: <button class="copy" data-copy="#id"> or nearest pre */
  document.addEventListener("click", e => {
    const b = e.target.closest(".copy");
    if (!b) return;
    const src = b.dataset.copy ? $(b.dataset.copy) : b.closest(".prompt,.codeblock")?.querySelector("pre");
    const text = b.dataset.text || src?.innerText || "";
    navigator.clipboard?.writeText(text.trim()).then(() => {
      const t = b.textContent; b.classList.add("ok"); b.textContent = "Copied";
      setTimeout(() => { b.classList.remove("ok"); b.textContent = t; }, 1400);
    });
  });

  /* Code 128 (set B): the garment tag's barcode encodes the image id, so it scans */
  const C128 = "212222 222122 222221 121223 121322 131222 122213 122312 132212 221213 221312 231212 112232 122132 122231 113222 123122 123221 223211 221132 221231 213212 223112 312131 311222 321122 321221 312212 322112 322211 212123 212321 232121 111323 131123 131321 112313 132113 132311 211313 231113 231311 112133 112331 132131 113123 113321 133121 313121 211331 231131 213113 213311 213131 311123 311321 331121 312113 312311 332111 314111 221411 431111 111224 111422 121124 121421 141122 141221 112214 112412 122114 122411 142112 142211 241211 221114 413111 241112 134111 111242 121142 121241 114212 124112 124211 411212 421112 421211 212141 214121 412121 111143 111341 131141 114113 114311 411113 411311 113141 114131 311141 411131 211412 211214 211232 2331112".split(" ");
  function barcode(text) {
    const codes = [104];
    for (const ch of text) { const c = ch.charCodeAt(0) - 32; if (c >= 0 && c < 95) codes.push(c); }
    let sum = 104; codes.slice(1).forEach((c, k) => sum += c * (k + 1));
    codes.push(sum % 103, 106);
    let x = 10, rects = "";
    codes.forEach(c => { [...C128[c]].forEach((w, k) => { w = +w; if (k % 2 === 0) rects += `<rect x="${x}" y="0" width="${w}" height="40"/>`; x += w; }); });
    return `<svg class="bc" viewBox="0 0 ${x + 10} 40" preserveAspectRatio="none" role="img" aria-label="Code 128 barcode: ${esc(text)}"><g fill="currentColor">${rects}</g></svg>`;
  }

  /* gallery + lightbox */
  const room = $("[data-film]");
  const grid = $(".grid");
  const lb = $(".lb");
  const film = room?.dataset.film;
  let DATA = null, BYID = {}, list = [], cur = -1, mode = "image";
  const loadData = () => DATA ? Promise.resolve(DATA) : fetch(`/api/films/${film}.json`).then(r => r.json()).then(d => {
    DATA = d; d.items.forEach(it => BYID[it.id] = it); return d;
  });

  if (grid) {
    const tiles = $$(".tile", grid);
    const state = { set: grid.dataset.default || "film", batch: "", look: "", q: "" };
    const count = $(".filters .count");
    const apply = () => {
      const q = state.q.trim().toLowerCase();
      let n = 0;
      tiles.forEach(t => {
        const d = t.dataset;
        let ok = state.set === "all" || (state.set === "film" ? d.plate === "1" : d.her === "1");
        if (ok && state.batch) ok = d.batch === state.batch;
        if (ok && state.look) ok = d.look === state.look;
        if (ok && q) ok = (BYID[d.id]?.prompt || "").toLowerCase().includes(q) || d.id.includes(q);
        t.hidden = !ok; if (ok) n++;
      });
      if (count) count.textContent = n + (n === 1 ? " image" : " images");
    };
    $$(".seg button").forEach(b => b.addEventListener("click", () => {
      $$(".seg button").forEach(x => x.setAttribute("aria-pressed", x === b));
      state.set = b.dataset.set; apply();
    }));
    $$(".filters select").forEach(s => s.addEventListener("change", () => { state[s.dataset.f] = s.value; apply(); }));
    const sq = $(".filters .search");
    if (sq) sq.addEventListener("input", () => { state.q = sq.value; loadData().then(apply); });
    grid.addEventListener("click", e => {
      const t = e.target.closest(".tile"); if (!t) return;
      e.preventDefault();
      list = tiles.filter(x => !x.hidden).map(x => x.dataset.id);
      openImage(t.dataset.id);
    });
    apply();
  }

  const stills = $$(".stills button");
  stills.forEach((b, k) => b.addEventListener("click", () => { mode = "still"; list = stills.map(x => x.dataset.src); cur = k; showStill(); }));

  function openLB() { lb.hidden = false; document.documentElement.style.overflow = "hidden"; $(".lb-x", lb)?.focus({ preventScroll: true }); }
  function closeLB() {
    lb.hidden = true; document.documentElement.style.overflow = "";
    if (location.hash.startsWith("#i=")) history.replaceState(null, "", location.pathname + location.search);
  }
  function showStill() {
    lb.classList.add("still");
    const b = stills[cur], img = $(".lb-img", lb);
    img.src = b.dataset.src; img.alt = b.dataset.alt || "";
    openLB();
  }
  function openImage(id) {
    mode = "image"; lb.classList.remove("still");
    cur = list.indexOf(id);
    if (cur < 0) { list = [id]; cur = 0; }
    openLB();
    const img = $(".lb-img", lb), t = grid?.querySelector(`.tile[data-id="${CSS.escape(id)}"] img`);
    if (t) { img.src = t.currentSrc || t.src; img.alt = t.alt; }
    loadData().then(() => render(id));
    history.replaceState(null, "", "#i=" + id);
  }
  function render(id) {
    const it = BYID[id]; if (!it) return;
    const img = $(".lb-img", lb);
    const hi = new Image(); hi.src = it.url.m; hi.decode?.().then(() => { if (BYID[id] === it && list[cur] === id) img.src = it.url.m; }).catch(() => {});
    img.alt = it.alt;
    const sibs = DATA.items.filter(x => x.batch === it.batch && x.job === it.job).sort((a, b) => a.n - b.n);
    const badges = [
      it.plate ? `<span class="badge film">In the film${it.edited ? " · edited" : ""}</span>` : "",
      it.cut ? `<span class="badge">Picked, shot cut</span>` : "",
      it.verdict === "pick" ? `<span class="badge pick">Director's pick</span>` : "",
      it.verdict === "reject" ? `<span class="badge rej">Rejected by the director</span>` : "",
      it.verdict === "comment" ? `<span class="badge">Director's note</span>` : "",
      it.look ? `<span class="badge">${esc(it.look_name || it.look)}</span>` : ""
    ].join("");
    const ar = it.w / it.h;
    const body = `
      <div class="head">
        <div class="lab"><b>${esc(DATA.film.title)}</b> · ${esc(it.batch)} · #${it.n} of ${sibs.length}</div>
        <h2>${esc(it.job)}</h2>
        ${badges ? `<div class="badges">${badges}</div>` : ""}
      </div>
      ${sibs.length > 1 ? `<div class="sibs" style="--sr:${ar}">${sibs.map(s => `<button data-sib="${esc(s.id)}" ${s.id === id ? 'aria-current="true"' : ""} aria-label="Variant ${s.n}"><img src="${s.url.s}" alt="" loading="lazy"><span>${s.n}</span></button>`).join("")}</div>` : ""}
      <div class="prompt"><div class="bar"><span class="lab">Prompt</span><button class="copy">Copy</button></div><pre>${esc(it.prompt)}</pre></div>
      <dl class="meta-l">
        <div><dt>Params</dt><dd>${esc(it.params)}${it.profile ? " + the director's personal profile" : ""}</dd></div>
        ${it.irefs ? `<div><dt>Image refs</dt><dd>${esc(it.irefs)}</dd></div>` : ""}
        <div><dt>Size</dt><dd>${it.w} × ${it.h}</dd></div>
        <div><dt>Framing</dt><dd>${esc(it.framing_name || "—")}</dd></div>
        ${it.batch_note ? `<div><dt>Batch</dt><dd>${esc(it.batch_note)}</dd></div>` : ""}
      </dl>
      <div class="lb-acts">
        <a class="btn" href="${it.url.full}" download>Download full</a>
        <a class="btn" href="${it.page}">Image page</a>
        <button class="btn copy" data-text="${esc(location.origin + it.page)}">Copy link</button>
      </div>
      ${film === "escape-velocity" ? barcode(it.id) + `<div class="lab">${esc(it.id)}</div>` : ""}`;
    const info = $(".lb-info", lb);
    if (film === "bliss") {
      info.innerHTML = `<div class="xpw-t"><span class="ic"></span><span class="tt">${esc(it.job)}-${it.n}.png</span><span class="xpw-b"><b class="min" aria-hidden="true"></b><b class="max" aria-hidden="true"></b><b class="x" role="button" tabindex="0" aria-label="Close"></b></span></div><div class="body">${body}</div>`;
    } else info.innerHTML = body;
    info.scrollTop = 0;
  }
  if (lb) {
    lb.addEventListener("click", e => {
      if (e.target.closest(".lb-x") || e.target.closest(".xpw-b .x") || e.target === lb || e.target.classList.contains("lb-stage")) return closeLB();
      if (e.target.closest(".lb-prev")) return step(-1);
      if (e.target.closest(".lb-next")) return step(1);
      const s = e.target.closest("[data-sib]");
      if (s) { const id = s.dataset.sib; history.replaceState(null, "", "#i=" + id); render(id); }
    });
    addEventListener("keydown", e => {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLB();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    });
    let x0 = null;
    lb.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", e => {
      if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50 && e.target.closest(".lb-stage")) step(dx < 0 ? 1 : -1);
    });
  }
  function step(d) {
    if (!list.length) return;
    cur = (cur + d + list.length) % list.length;
    if (mode === "still") return showStill();
    const id = list[cur];
    const t = grid?.querySelector(`.tile[data-id="${CSS.escape(id)}"] img`);
    if (t) $(".lb-img", lb).src = t.currentSrc || t.src;
    history.replaceState(null, "", "#i=" + id);
    loadData().then(() => render(id));
  }
  if (grid && location.hash.startsWith("#i=")) {
    const id = decodeURIComponent(location.hash.slice(3));
    loadData().then(() => { if (BYID[id]) { list = $$(".tile", grid).filter(x => !x.hidden).map(x => x.dataset.id); openImage(id); } });
  }

  /* the film player: native HLS where it exists, hls.js elsewhere */
  const pl = $(".player");
  $$("[data-play]").forEach(b => b.addEventListener("click", () => {
    const v = $("video", pl), src = b.dataset.play;
    pl.hidden = false; document.documentElement.style.overflow = "hidden";
    const go = () => v.play().catch(() => {});
    if (v.canPlayType("application/vnd.apple.mpegurl")) { v.src = src; go(); return; }
    const attach = () => { const h = new window.Hls({ capLevelToPlayerSize: true }); h.loadSource(src); h.attachMedia(v); v._hls = h; h.on(window.Hls.Events.MANIFEST_PARSED, go); };
    if (window.Hls) return attach();
    const s = document.createElement("script"); s.src = "/static/js/hls.light.min.js"; s.onload = attach; document.head.appendChild(s);
  }));
  if (pl) {
    const close = () => { const v = $("video", pl); v.pause(); v._hls?.destroy(); v._hls = null; v.removeAttribute("src"); v.load(); pl.hidden = true; document.documentElement.style.overflow = ""; };
    $(".px", pl).addEventListener("click", close);
    addEventListener("keydown", e => { if (!pl.hidden && e.key === "Escape") close(); });
  }

  /* the wiki main page: filter articles and records as you type */
  const wf = $(".wk-find input");
  if (wf) {
    const rows = $$(".wk-row"), cats = $$(".wk-cat"), feat = $(".wk-feature"), none = $(".wk-none");
    const match = (el, q) => q.every(w => (el.dataset.text || "").includes(w));
    wf.addEventListener("input", () => {
      const q = wf.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      rows.forEach(r => { r.hidden = q.length > 0 && !match(r, q); });
      cats.forEach(c => { c.hidden = !$$(".wk-row", c).some(r => !r.hidden); });
      if (feat) feat.hidden = q.length > 0 && !match(feat, q);
      none.hidden = rows.some(r => !r.hidden) || (feat && !feat.hidden);
    });
  }

  /* table of contents: highlight the section in view */
  const toc = $(".toc");
  if (toc) {
    const links = $$("a[href^='#']", toc), map = new Map(links.map(a => [decodeURIComponent(a.hash.slice(1)), a]));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { links.forEach(a => a.classList.remove("on")); map.get(e.target.id)?.classList.add("on"); }
    }), { rootMargin: "-20% 0px -70% 0px" });
    $$(".prose h2[id], .prose h3[id], .wk-cat[id], .wk-feature[id]").forEach(h => map.has(h.id) && io.observe(h));
  }
})();
