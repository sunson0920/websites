const MARKETS = [
  ["BTC", "$77,026.50", "btc.png", "#"],
  ["ETH", "$2,256.14", "eth.png", "#"],
  ["NVIDIA", "$203.73", "nvidia.png", "#"],
  ["GOLD", "$3,958.09", "gold.png", "#"],
  ["ANTHROPIC", "$1,615.95", "anthropic.png", "#"],
  ["OPENAI", "$1,374.36", "openai.png", "#"],
  ["SPACEX", "$137.32", "spacex.png", "#"],
  ["SANDISK", "$1,089.36", "sandisk.png", "#"],
];

const ICONS = {
  settled: `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4.24377 21.8832L34.7147 4.29078M32.5087 12.5235L34.7147 4.29078L26.482 2.08496M34.2438 40V21.6667H24.2438V40V28.3333H14.2438V40V35H4.24377V40" stroke="white"/></svg>`,
  peer: `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M34.1666 9.99999H1.66663V21.6667M27.4998 16.6668L34.1666 9.99999L27.4998 3.33315M12.5001 36.6668L5.83329 30L12.5001 23.3332M5.83329 30H38.3333V18.3333" stroke="white"/></svg>`,
  apps: `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M16.6659 23.3333H3.33252V36.6667H16.6659V23.3333Z" stroke="white"/><path d="M36.6658 3.33333H23.3325V16.6667H36.6658V3.33333Z" stroke="white"/><path d="M36.6658 23.3333H23.3325V36.6667H36.6658V23.3333Z" stroke="white"/><path d="M16.6658 3.33333H3.33252V16.6667H16.6658V3.33333Z" stroke="white"/></svg>`,
  rfq: `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M6.58936 14.6535C3.58549 17.0983 1.66666 20.8252 1.66666 25C1.66666 32.3638 7.63619 38.3333 15 38.3333C19.1558 38.3333 22.8677 36.432 25.313 33.4517M25 10V6.66667M25 23.3333V20M28.75 12.5V11.6667C28.75 10.7462 28.0038 10 27.0833 10H22.9167C21.9962 10 21.25 10.7462 21.25 11.6667V12.4131C21.25 13.1942 21.7925 13.8706 22.5552 14.04L27.4448 15.1266C28.2075 15.2961 28.75 15.9725 28.75 16.7537V18.3333C28.75 19.2538 28.0038 20 27.0833 20H22.9167C21.9962 20 21.25 19.2538 21.25 18.3333V17.5M11.6667 15C11.6667 18.5362 13.0714 21.9276 15.5719 24.4281C18.0724 26.9286 21.4638 28.3333 25 28.3333C28.5362 28.3333 31.9276 26.9286 34.4281 24.4281C36.9286 21.9276 38.3333 18.5362 38.3333 15C38.3333 11.4638 36.9286 8.0724 34.4281 5.57192C31.9276 3.07143 28.5362 1.66667 25 1.66667C21.4638 1.66667 18.0724 3.07143 15.5719 5.57192C13.0714 8.0724 11.6667 11.4638 11.6667 15Z" stroke="white"/></svg>`,
  custom: `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M20 15.8333V1.66665M20 24.1667C18.8949 24.1667 17.8351 23.7277 17.0537 22.9463C16.2723 22.1649 15.8333 21.1051 15.8333 20C15.8333 18.8949 16.2723 17.8351 17.0537 17.0537C17.8351 16.2723 18.8949 15.8333 20 15.8333C21.1051 15.8333 22.1649 16.2723 22.9463 17.0537C23.7277 17.8351 24.1667 18.8949 24.1667 20C24.1667 21.1051 23.7277 22.1649 22.9463 22.9463C22.1649 23.7277 21.1051 24.1667 20 24.1667ZM20 24.1667V38.3333M6.66667 28.3333V1.66663M6.66667 28.3333C8.96785 28.3333 10.8333 30.1988 10.8333 32.5C10.8333 34.8012 8.96785 36.6667 6.66667 36.6667C4.36548 36.6667 2.5 34.8012 2.5 32.5C2.5 30.1988 4.36548 28.3333 6.66667 28.3333ZM33.3333 38.3333V11.6667M33.3333 11.6667C35.6345 11.6667 37.5 9.80117 37.5 7.49999C37.5 5.1988 35.6345 3.33332 33.3333 3.33332C31.0322 3.33332 29.1667 5.1988 29.1667 7.49999C29.1667 9.80117 31.0322 11.6667 33.3333 11.6667Z" stroke="white"/></svg>`,
};

const ROW_A = [
  ["settled", "Settled On-Chain", "All trades are settled and cleared on-chain in isolated escrow smart contracts."],
  ["peer", "Peer-to-Peer", "Trades are always settled between two counterparties that agree to the rules of each trade."],
  ["apps", "One Protocol, Many Apps", "Omni is the first app. Pro, offering customizable OTC derivatives for institutions, is next."],
];
const ROW_B = [
  ["rfq", "Request-For-Quote", "Get the best all-in price for every trade without touching an order book."],
  ["custom", "Customizable", "Customizable derivatives like expiries, options and structures agreed directly between counterparties."],
  ["settled", "Isolated Risk", "A liquidation between two counterparties never touches anyone else's margin."],
  ["peer", "Peer-to-Peer", "Trades are always settled between two counterparties that agree to the rules of each trade."],
];

function tickHTML(m) {
  return `<a class="tick" href="${m[3]}"><p class="tick-name"><img src="assets/stocks/${m[2]}" alt="">${m[0]}</p><p class="tick-price">${m[1]}</p></a>`;
}

function cardHTML(item) {
  return `<article class="proto-card"><div class="proto-icon">${ICONS[item[0]]}</div><div class="proto-copy"><strong>${item[1]}</strong><span>${item[2]}</span></div></article>`;
}

function fillMarquee(id, items, copies) {
  const track = document.getElementById(id);
  const once = items.map(cardHTML).join("");
  track.innerHTML = once.repeat(copies) + once.repeat(copies);
}

const ticker = document.getElementById("ticker-track");
const ticks = MARKETS.map(tickHTML).join("");
ticker.innerHTML = ticks + ticks;

fillMarquee("row-a", ROW_A, 4);
fillMarquee("row-b", ROW_B, 4);

const nav = document.getElementById("nav");
function onScroll() {
  nav.classList.toggle("is-collapsed", window.scrollY > 24);
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");
langBtn.addEventListener("click", () => {
  const open = langMenu.hasAttribute("hidden");
  langMenu.toggleAttribute("hidden", !open);
  langBtn.setAttribute("aria-expanded", open ? "true" : "false");
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang")) {
    langMenu.hidden = true;
    langBtn.setAttribute("aria-expanded", "false");
  }
});

const menuBtn = document.getElementById("menu-btn");
const mobilePanel = document.getElementById("mobile-panel");
menuBtn.addEventListener("click", () => {
  mobilePanel.toggleAttribute("hidden");
  menuBtn.setAttribute("aria-expanded", mobilePanel.hasAttribute("hidden") ? "false" : "true");
});

const video = document.getElementById("hero-video");
const unmute = document.getElementById("unmute");
unmute.addEventListener("click", () => {
  video.muted = !video.muted;
  unmute.textContent = video.muted ? "Unmute" : "Mute";
  if (!video.muted) video.play().catch(() => {});
});

const featureRow = document.getElementById("feature-row");
const dots = [...document.querySelectorAll(".dots i")];
featureRow.addEventListener("scroll", () => {
  const i = Math.round(featureRow.scrollLeft / Math.max(featureRow.clientWidth, 1));
  dots.forEach((d, n) => d.classList.toggle("on", n === i));
}, { passive: true });

function fit(canvas) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const pw = Math.max(1, Math.floor(w * dpr));
  const ph = Math.max(1, Math.floor(h * dpr));
  if (canvas.width !== pw || canvas.height !== ph) {
    canvas.width = pw;
    canvas.height = ph;
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

function drawField(canvas, t, mode) {
  const { ctx, w, h } = fit(canvas);
  ctx.clearRect(0, 0, w, h);
  const cols = 110;
  const rows = mode === "footer" ? 26 : 34;
  const horizon = mode === "footer" ? h * 0.42 : h * 0.12;
  const travel = mode === "footer" ? h * 0.62 : h * 0.95;
  for (let j = 0; j <= rows; j++) {
    const z = j / rows;
    const depth = Math.pow(z, 1.15);
    for (let i = 0; i <= cols; i++) {
      const u = i / cols;
      const xN = u - 0.5;
      const wave =
        Math.sin(xN * 8 + t * 0.9 + z * 4) * 0.7 +
        Math.sin(xN * 3.2 - t * 0.45 + z * 8) * 0.45;
      const spread = 0.55 + depth * 1.35;
      const x = w * 0.5 + xN * w * spread;
      const y = horizon + z * travel + wave * (22 + depth * 64);
      const crest = 0.35 + Math.max(0, wave);
      const mix = u;
      const r = 230 * (1 - mix) + 80 * mix;
      const g = 70 * (1 - mix) + 190 * mix;
      const b = 255;
      const alpha = Math.min(1, (0.2 + depth * 0.85) * (0.55 + crest));
      const size = (0.9 + depth * 2.2) * (0.8 + crest * 0.45);
      ctx.beginPath();
      ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha})`;
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawStats(canvas, t) {
  const { ctx, w, h } = fit(canvas);
  ctx.clearRect(0, 0, w, h);
  const strokes = [
    ["rgba(76,154,248,0.55)", 0.72, 0.42],
    ["rgba(96,170,255,0.28)", 0.95, 0.55],
    ["rgba(86,199,140,0.4)", 1.18, 0.68],
    ["rgba(76,154,248,0.22)", 1.42, 0.82],
    ["rgba(140,180,255,0.18)", 1.68, 0.95],
  ];
  strokes.forEach((s, n) => {
    ctx.beginPath();
    ctx.strokeStyle = s[0];
    ctx.lineWidth = 1.15;
    const rx = w * s[1] * 0.46;
    const ry = h * s[2];
    const rot = -0.55 + Math.sin(t * 0.15 + n) * 0.012;
    ctx.ellipse(w * 0.78, h * 0.58, rx, ry, rot, Math.PI * 0.72, Math.PI * 1.95);
    ctx.stroke();
  });
}

const heroCanvas = document.getElementById("hero-canvas");
const statsCanvas = document.getElementById("stats-canvas");
const footerCanvas = document.getElementById("footer-canvas");
let time = 0;
function frame() {
  time += 0.016;
  drawField(heroCanvas, time, "hero");
  drawField(footerCanvas, time + 1.4, "footer");
  drawStats(statsCanvas, time);
  requestAnimationFrame(frame);
}
frame();
window.addEventListener("resize", () => {
  drawField(heroCanvas, time, "hero");
  drawField(footerCanvas, time, "footer");
  drawStats(statsCanvas, time);
});
