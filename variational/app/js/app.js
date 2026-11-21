import { ANNOUNCEMENTS, LEADERBOARD, LOCALES, MARKETS, TIERS, getMarket } from "./data.js";
import { WALLET_ICONS } from "./wallet-icons.js";
import { tvResolution, tvSymbol } from "./chart.js";

const BASE = "/app";
const stripBase = (p) => {
  if (!p) return "/";
  if (p === BASE) return "/";
  if (p.startsWith(BASE + "/")) return p.slice(BASE.length) || "/";
  return p;
};
const withBase = (p) => BASE + (p === "/" ? "/" : p);
const baseHtml = (html) => html.replace(/(href|data-open)="\/(?!\/)/g, `$1="${BASE}/`);
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const state = {
  path: stripBase(location.pathname),
  symbol: "BTC",
  kind: "perp",
  side: "buy",
  orderType: "market",
  marginMode: "cross",
  leverage: 20,
  size: "",
  sizeUnit: "base",
  limitPrice: "",
  triggerPrice: "",
  reduceOnly: false,
  tpsl: false,
  tp: "",
  sl: "",
  maxSlippage: 0.5,
  interval: "15",
  chartHeight: 500,
  connected: false,
  balance: 12450.32,
  isolated: 0,
  bottomTab: "positions",
  theme: localStorage.getItem("vr-theme") || "dark",
  locale: localStorage.getItem("vr-locale") || "en",
  sound: true,
  confirmCancel: true,
  privacy: false,
  modal: null,
  menu: null,
  drawer: false,
  query: "",
  venue: "all",
  sector: "all",
  listKind: "all",
  pickerKind: "all",
  pickerVenue: "all",
  pickerSector: "all",
  pickerSort: "volume",
  pickerDir: "desc",
  pickerIndex: 0,
  page: 1,
  lbRange: "all",
  favs: new Set(["BTC", "ETH", "SOL"]),
  positions: [],
  orders: [],
  fills: [],
  toasts: [],
  tier: "iron",
};

let logoSvg = "";
let fundingAnchor = Date.now();

const CHEV = `<svg class="chev" viewBox="0 0 12 12" fill="none"><path d="M11.25 3.25L6 8.5L0.75 3.25" stroke="currentColor" stroke-width="1.5"/></svg>`;
const EXT = `<svg class="ext" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor"/></svg>`;
const GLOBE = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8C1 4.134 4.134 1 8 1s7 3.134 7 7M1 8h14M1 8c0 3.866 3.134 7 7 7s7-3.134 7-7M7.125 1L4.938 8l2.406 7M8.656 1 11.063 8 8.875 15" stroke="currentColor" stroke-width="1.5"/></svg>`;
const GEAR = `<svg width="16" height="16" viewBox="0 0 16 17" fill="none"><path d="M8 10.08a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" stroke-width="1.5"/><path d="M2.81 13.27a6.9 6.9 0 0 1-1.92-3.39l1.21-.7a6.2 6.2 0 0 1 0-2.19l-1.21-.7a6.9 6.9 0 0 1 1.92-3.39l1.21.7a6.4 6.4 0 0 1 1.9-1.1V.78a7.2 7.2 0 0 1 4 0v1.4c.7.25 1.34.6 1.9 1.1l1.21-.7a6.9 6.9 0 0 1 1.92 3.46l-1.21.7c.07.36.1.72.1 1.1s-.03.74-.1 1.1l1.21.7a6.9 6.9 0 0 1-1.92 3.39l-1.21-.7a6.4 6.4 0 0 1-1.9 1.1v1.4a7.2 7.2 0 0 1-4 0v-1.4a6.4 6.4 0 0 1-1.9-1.1l-1.21.7Z" stroke="currentColor" stroke-width="1.5"/></svg>`;
const PEN = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9.75 5.75 6.25 2.25M9.75 5.75 11.25 4.25 7.75.75 6.25 2.25M9.75 5.75 4.5 11H1V7.5L6.25 2.25" stroke="currentColor"/></svg>`;
const MARK = `<svg class="logo-mark" viewBox="0 0 35 24" fill="none"><path fill-rule="evenodd" d="M17.47 0c3 0 5.72 1.88 6.85 4.67l5.83 15.36c.31.73 1.01 1.19 1.76 1.19H35V24h-3.09a4.9 4.9 0 0 1-4.38-3.05l-1.65-4.33a1.85 1.85 0 0 0-3.57 0l-1.65 4.33A4.9 4.9 0 0 1 16.29 24H0v-2.78h3.05c.76 0 1.49-.5 1.79-1.26L10.6 4.8C11.68 1.94 14.42 0 17.47 0Z" fill="currentColor"/></svg>`;
const SEARCH_ICO = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="4.25"/><path d="M10.5 10.5 14 14" stroke-linecap="round"/></svg>`;
const SECTORS = ["all", "infra", "defi", "ai", "meme", "commodities", "equities", "preipo", "indices", "etf", "fx"];
const SECTOR_LABEL = { all: "All", infra: "Infra", defi: "DeFi", ai: "AI", meme: "Meme", commodities: "Commodities", equities: "Equities", preipo: "Pre-IPO", indices: "Indices", etf: "ETF", fx: "FX" };
const TICKER_LOGO = new Set(["NVDA", "TSLA", "AAPL", "MSFT", "AMZN", "META", "GOOGL", "ADBE", "AI", "ALB", "ASML", "BA", "BAC", "BIDU", "BILI", "CM", "CPNG"]);

function fmtUsd(n, digits = 2) {
  if (n == null || Number.isNaN(n)) return "—";
  const sign = n < 0 ? "-" : "";
  const v = Math.abs(n);
  if (v >= 1e12) return `${sign}$${(v / 1e12).toFixed(2)}T`;
  if (v >= 1e9) return `${sign}$${(v / 1e9).toFixed(2)}B`;
  if (v >= 1e6) return `${sign}$${(v / 1e6).toFixed(2)}M`;
  if (v >= 1e3 && digits === 0) return `${sign}$${(v / 1e3).toFixed(2)}K`;
  return `${sign}$${v.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
}
function fmtPx(n) {
  if (n == null) return "—";
  if (n >= 1000) return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 1) return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  if (n >= 0.01) return "$" + n.toFixed(4);
  return "$" + n.toPrecision(4);
}
function fmtQty(n) {
  if (n == null) return "—";
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (n >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
  return n.toPrecision(4);
}
function pct(n) {
  if (n == null) return "—";
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}
function clsChange(n) {
  return n > 0 ? "up" : n < 0 ? "down" : "";
}
function annFunding(m) {
  if (m.funding == null || !m.hours) return null;
  return m.funding * (24 / m.hours) * 365;
}
function usFlag() {
  const stripes = [1.7, 5.08, 8.46, 11.85, 15.23, 18.62].map((y) => `<rect y="${y}" width="22" height="1.7" fill="#fff"/>`).join("");
  return `<svg class="token-logo" viewBox="0 0 22 22" aria-hidden="true"><rect width="22" height="22" fill="#b22234"/>${stripes}<rect width="9.2" height="11.8" fill="#3c3b6e"/></svg>`;
}
function euFlag() {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    return `<circle cx="${(11 + Math.cos(a) * 5.6).toFixed(2)}" cy="${(11 + Math.sin(a) * 5.6).toFixed(2)}" r="0.85" fill="#fc0"/>`;
  }).join("");
  return `<svg class="token-logo" viewBox="0 0 22 22" aria-hidden="true"><rect width="22" height="22" fill="#003399"/>${stars}</svg>`;
}
function goldMark() {
  return `<svg class="token-logo" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#e8b84a"/><circle cx="16" cy="16" r="11" fill="none" stroke="#8d6418" stroke-width="1.4"/><path d="M16 8.4 18.1 13h4.8l-3.9 2.9 1.5 4.7L16 17.7 11.5 20.6 13 15.9 9.1 13h4.8L16 8.4Z" fill="#fff8e4"/></svg>`;
}
function silverMark() {
  return `<svg class="token-logo" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#e6e8ee"/><circle cx="16" cy="16" r="11" fill="none" stroke="#8b93a3" stroke-width="1.4"/><path d="M16 8.4 18.1 13h4.8l-3.9 2.9 1.5 4.7L16 17.7 11.5 20.6 13 15.9 9.1 13h4.8L16 8.4Z" fill="#f7f8fb"/></svg>`;
}
function oilMark() {
  return `<svg class="token-logo" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#111827"/><path d="M16 6.2c4.2 5.2 7.2 8.2 7.2 12.1a7.2 7.2 0 0 1-14.4 0c0-3.9 3-6.9 7.2-12.1Z" fill="#f8fafc"/></svg>`;
}
function logoMark(m) {
  const sym = m.symbol;
  if (m.venue === "crypto") return `https://assets.coincap.io/assets/icons/${sym.toLowerCase()}@2x.png`;
  if (sym === "EUR") return euFlag();
  if (sym === "XAU") return goldMark();
  if (sym === "XAG") return silverMark();
  if (sym === "USOIL" || sym === "UKOIL" || sym === "HOIL" || sym === "GASOL") return oilMark();
  if (sym === "US100" || sym === "US30" || sym === "US500" || sym === "DXI" || sym === "SPY" || sym === "QQQ" || m.sector === "indices") return usFlag();
  if (TICKER_LOGO.has(sym)) return `https://cdn.jsdelivr.net/gh/nvstly/icons@main/ticker_icons/${sym}.png`;
  return "";
}
function coin(m, size = 22) {
  const letter = m.symbol.slice(0, 1);
  const fg = m.color === "#FFFFFF" || m.color === "#D7D7D7" ? "#010612" : "#fff";
  const mark = logoMark(m);
  const box = `width:${size}px;height:${size}px`;
  if (!mark) return `<span class="coin" style="${box};background:${m.color};color:${fg}">${letter}</span>`;
  if (mark.startsWith("<svg")) return `<span class="coin logo" style="${box}">${mark}</span>`;
  return `<span class="coin logo" style="${box};background:${m.color};color:${fg}"><img src="${mark}" alt="" draggable="false" onerror="this.parentElement.classList.remove('logo');this.replaceWith(document.createTextNode('${letter}'))"></span>`;
}
function market() {
  return getMarket(state.symbol, state.kind);
}
function quotes(m = market()) {
  const mid = m.price || 0;
  const half = (m.spread || 0) / 100 / 2;
  return { bid: mid * (1 - half), ask: mid * (1 + half), mid };
}
function pad(n) { return String(n).padStart(2, "0"); }
function fundingLeft(hours) {
  const period = hours * 3600 * 1000;
  const elapsed = (Date.now() - fundingAnchor) % period;
  const left = period - elapsed;
  const s = Math.floor(left / 1000);
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
}
function nextFriday() {
  const now = new Date();
  const d = new Date(now);
  const day = d.getUTCDay();
  const add = (5 - day + 7) % 7 || 7;
  d.setUTCDate(d.getUTCDate() + add);
  d.setUTCHours(0, 0, 0, 0);
  let diff = d - now;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}
function toast(title, text, kind = "ok") {
  const id = Math.random().toString(36).slice(2);
  state.toasts.push({ id, title, text, kind });
  renderToasts();
  setTimeout(() => {
    state.toasts = state.toasts.filter((t) => t.id !== id);
    renderToasts();
  }, 4200);
}
function renderToasts() {
  $("#toasts").innerHTML = state.toasts
    .map(
      (t) => `<div class="toast ${t.kind === "error" ? "error" : ""}"><div><b>${t.title}</b><span>${t.text}</span></div><button data-close-toast="${t.id}">✕</button></div>`
    )
    .join("");
}

function route() {
  const path = state.path.replace(/\/$/, "") || "/";
  if (path.startsWith("/perpetual/") || path.startsWith("/swap/")) {
    const [, kind, sym] = path.split("/");
    state.kind = kind === "swap" ? "swap" : "perp";
    state.symbol = decodeURIComponent(sym || "BTC").toUpperCase();
    return "trade";
  }
  if (path === "/markets") return "markets";
  if (path === "/points") return "points";
  if (path === "/rewards") return "rewards";
  if (path === "/leaderboard") return "leaderboard";
  if (path === "/competition") return "competition";
  if (path === "/trader-rewards") return "traders";
  if (path === "/announcements") return "announcements";
  state.symbol = "BTC";
  state.kind = "perp";
  return "trade";
}

function go(path) {
  path = stripBase(path);
  if (location.pathname !== withBase(path)) history.pushState({}, "", withBase(path));
  state.path = path;
  state.menu = null;
  state.drawer = false;
  state.modal = null;
  render();
}

function navItem(href, label, key) {
  const active = route() === key;
  return `<a class="nav-link ${active ? "active" : ""}" href="${href}" data-link>${label}</a>`;
}

function shell(body, trade = false) {
  const page = route();
  const titles = {
    trade: `${state.symbol} ${state.kind === "swap" ? "SWAP" : "PERP"} | Variational Omni`,
    markets: "Markets | Variational Omni",
    points: "Points | Variational Omni",
    rewards: "Rewards | Variational Omni",
    leaderboard: "Leaderboard | Variational Omni",
    competition: "Swaps Competition | Variational Omni",
    traders: "On-Chain Traders | Variational Omni",
    announcements: "Announcements | Variational Omni",
  };
  document.title = titles[page] || "Variational Omni";
  document.documentElement.classList.toggle("light", state.theme === "light");

  const connect = state.connected
    ? `<div class="menu"><button class="btn-primary" data-menu="wallet">${state.privacy ? "0x••••" : "0x71C7…976F"}</button>${state.menu === "wallet" ? walletMenu() : ""}</div>`
    : `<button class="btn-primary" data-modal="connect">Connect</button>`;

  return `
  <div class="app">
    <div class="shell">
      <nav class="top">
        <div class="brand-row">
          <a class="logo-link" href="/perpetual/BTC" data-link>
            ${MARK}
            <span class="logo-word">${logoSvg}</span>
          </a>
          <div class="nav-tabs" id="nav-tabs">
            <span class="nav-pill" id="nav-pill"></span>
            ${navItem("/perpetual/" + state.symbol, "Trade", "trade")}
            ${navItem("/markets", "Markets", "markets")}
            ${navItem("/points", "Points", "points")}
            ${navItem("/rewards", "Rewards", "rewards")}
            ${navItem("/leaderboard", "Leaderboard", "leaderboard")}
            <div class="menu">
              <button class="menu-btn" data-menu="competitions">Competitions ${CHEV}</button>
              ${state.menu === "competitions" ? competitionsMenu() : ""}
            </div>
            <div class="menu">
              <button class="menu-btn" data-menu="more">More ${CHEV}</button>
              ${state.menu === "more" ? moreMenu() : ""}
            </div>
          </div>
        </div>
        <div class="nav-right">
          ${connect}
          <div class="menu">
            <button class="icon-btn" data-menu="lang" aria-label="Language">${GLOBE}</button>
            ${state.menu === "lang" ? langMenu() : ""}
          </div>
          <div class="menu">
            <button class="icon-btn" data-menu="settings" aria-label="Settings">${GEAR}</button>
            ${state.menu === "settings" ? settingsMenu() : ""}
          </div>
          <button class="icon-btn burger" data-open-drawer aria-label="Menu"><svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M0 9.5h16M0 .5h16" stroke="currentColor"/></svg></button>
        </div>
      </nav>
      ${trade ? body : `<div class="page">${body}</div>`}
    </div>
    ${trade ? mobileBar() : ""}
    ${state.drawer ? drawer() : ""}
    ${modal()}
    <div class="toasts" id="toasts"></div>
  </div>`;
}

function competitionsMenu() {
  return `<div class="popover left">
    <a href="/competition" data-link>Swaps Competition</a>
    <a href="/trader-rewards" data-link>On-Chain Traders</a>
  </div>`;
}
function moreMenu() {
  const items = [
    ["/announcements", "Announcements", false],
    ["https://docs.varprotocol.org", "Docs", true],
    ["https://arbdata.com/variational", "Stats", true],
    ["https://x.com/variationalonx", "X", true],
    ["https://t.me/variationaleth", "telegram", true],
    ["https://variational.link/", "Variational Website", true],
    ["https://docs.varprotocol.org/legal/privacy-policy", "Privacy Policy", true],
    ["https://docs.varprotocol.org/legal/terms-of-service", "Terms of Service", true],
  ];
  return `<div class="popover" style="width:220px">${items
    .map(([href, label, ext]) =>
      ext
        ? `<a href="${href}" target="_blank" rel="noreferrer">${label} ${EXT}</a>`
        : `<a href="${href}" data-link>${label}</a>`
    )
    .join("")}</div>`;
}
function langMenu() {
  return `<div class="popover">${LOCALES.map(
    (l) => `<button data-locale="${l.value}">${l.flag} ${l.label}${state.locale === l.value ? `<span class="check">✓</span>` : ""}</button>`
  ).join("")}</div>`;
}
function settingsMenu() {
  const row = (key, label) =>
    `<div class="toggle-row"><span>${label}</span><button class="switch ${state[key] ? "on" : ""}" data-toggle="${key}"><i></i></button></div>`;
  return `<div class="popover wide">
    ${row("sound", "Order fill sound")}
    ${row("confirmCancel", "Confirm order cancel")}
    ${row("privacy", "Privacy mode")}
    <div class="toggle-row"><span>Color theme</span></div>
    <div class="theme-picks">
      ${["dark", "light"].map((t) => `<button data-theme="${t}" class="${state.theme === t ? "on" : ""}">${t === "dark" ? "Dark" : "Light"}</button>`).join("")}
    </div>
  </div>`;
}
function walletMenu() {
  return `<div class="popover">
    <button data-modal="deposit">Deposit</button>
    <button data-modal="withdraw">Withdraw</button>
    <a href="https://arbiscan.io" target="_blank" rel="noreferrer">View on explorer ${EXT}</a>
    <button data-disconnect>Disconnect</button>
  </div>`;
}
function drawer() {
  const links = [
    ["/perpetual/BTC", "Trade"],
    ["/markets", "Markets"],
    ["/points", "Points"],
    ["/rewards", "Rewards"],
    ["/leaderboard", "Leaderboard"],
    ["/competition", "Swaps Competition"],
    ["/trader-rewards", "On-Chain Traders"],
    ["/announcements", "Announcements"],
  ];
  return `<div class="mobile-drawer" data-close-drawer><div class="drawer" data-stop>
    ${links.map(([h, l]) => `<a href="${h}" data-link>${l}</a>`).join("")}
    <button class="plain" data-modal="connect">Connect</button>
  </div></div>`;
}
function mobileBar() {
  const m = market();
  return `<div class="mobile-bar"><div class="inner">
    <button class="asset-btn" data-modal="markets" style="max-width:140px">${coin(m, 18)} <b>${m.symbol}</b> ${CHEV}</button>
    <button class="buy-solid" data-side="buy">Buy</button>
    <button class="sell-solid" data-side="sell">Sell</button>
  </div></div>`;
}

function tradePage() {
  const m = market();
  const q = quotes(m);
  const activePx = state.side === "buy" ? q.ask : q.bid;
  const size = Number(state.size) || 0;
  const qty = state.sizeUnit === "quote" && activePx ? size / activePx : size;
  const value = qty * activePx;
  const margin = state.leverage ? value / state.leverage : 0;
  const liq = qty
    ? state.side === "buy"
      ? activePx * (1 - 0.9 / state.leverage)
      : activePx * (1 + 0.9 / state.leverage)
    : null;
  const available = state.connected ? state.balance : 0;
  const upnl = state.positions.reduce((s, p) => s + (m.price - p.entry) * p.qty * (p.side === "buy" ? 1 : -1), 0);

  return `<div class="workspace">
    <div class="main-col">
      <div class="panel stats">
        <button class="asset-btn" data-modal="markets">
          <span class="asset-id">${coin(m)}<span class="asset-name">${m.symbol}</span><span class="tag">${m.kind === "swap" ? "SWAP" : "PERP"}</span><span class="lev-tag">${m.maxLev}x</span></span>
          ${CHEV}
        </button>
        <div class="stats-scroll">
          ${stat("Mark Price", fmtPx(q.mid), true, "Mark price is used for unrealized PnL, margin, and liquidations.")}
          ${stat("Index Price", fmtPx(q.mid * 0.9999))}
          ${stat("24h Volume", fmtUsd(m.volume))}
          ${stat("24h Change", `<span class="${clsChange(m.change)}">${pct(m.change)}</span>`)}
          ${stat("FDV", m.fdv ? fmtUsd(m.fdv) : "—", true, "Fully diluted valuation of the underlying asset.")}
          ${stat("Open Interest", fmtUsd(m.oi), true, "Open interest is the total outstanding position value.")}
          ${stat("Funding / Countdown", `<span class="${m.funding >= 0 ? "up" : "down"}">${m.funding.toFixed(4)}%</span> <span style="color:var(--dim)">/</span> <span>${fundingLeft(m.hours)}</span>`, true, "Funding is paid between longs and shorts. The timer counts down to the next payment.")}
        </div>
      </div>
      <div class="panel chart-block">
        <div class="chart-frame" id="chart-frame" style="height:${state.chartHeight}px">
          <div class="tf-bar">
            <span class="tf-symbol">${m.symbol}-${m.kind === "swap" ? "SWAP" : "PERP"}</span>
            ${["1m", "5m", "15m", "1H", "4H", "1D"].map((t) => `<button data-tf="${t}" class="${state.interval === t ? "active" : ""}">${t}</button>`).join("")}
          </div>
          <div id="tv-slot"></div>
        </div>
        <div class="resize-h" id="resize"></div>
      </div>
      <div class="panel book">
        <div class="book-tabs" id="book-tabs">
          <span class="tab-pill" id="book-pill"></span>
          ${["positions", "orders", "trades", "orderHistory", "funding", "rpnl"]
            .map((id) => {
              const labels = { positions: "Positions", orders: "Open Orders", trades: "Trade History", orderHistory: "Order History", funding: "Funding History", rpnl: "Realized PNL" };
              return `<button class="tab-btn ${state.bottomTab === id ? "active" : ""}" data-tab="${id}">${labels[id]}</button>`;
            })
            .join("")}
        </div>
        ${bottomTable(upnl)}
      </div>
    </div>
    <aside class="side">
      <div class="ticket">
        <div class="pair">
          <button class="ghost" data-modal="leverage">${state.leverage}x</button>
          <div class="menu" style="flex:1">
            <button class="ghost" style="width:100%" data-menu="margin">${state.marginMode === "cross" ? "Cross" : "Isolated"}</button>
            ${state.menu === "margin" ? `<div class="popover" style="width:220px">
              <button data-margin="cross">Cross<span class="check">${state.marginMode === "cross" ? "✓" : ""}</span></button>
              <button data-margin="isolated">Isolated<span class="check">${state.marginMode === "isolated" ? "✓" : ""}</span></button>
            </div>` : ""}
          </div>
        </div>
        <div class="seg" id="order-seg">
          <span class="seg-pill" id="seg-pill"></span>
          <button class="seg-btn ${state.orderType === "market" ? "active" : ""}" data-otype="market">Market</button>
          <button class="seg-btn ${state.orderType === "limit" ? "active" : ""}" data-otype="limit">Limit</button>
          <div class="menu" style="flex:1;display:flex">
            <button class="seg-btn pro-btn ${state.orderType === "stop" || state.orderType === "stoplimit" ? "active" : ""}" data-menu="pro">${state.orderType === "stoplimit" ? "Stop Limit" : state.orderType === "stop" ? "Stop" : "Pro"} ${CHEV}</button>
            ${state.menu === "pro" ? `<div class="popover left"><button data-otype="stop">Stop Market</button><button data-otype="stoplimit">Stop Limit</button></div>` : ""}
          </div>
        </div>
        <div class="bs">
          <button class="buy ${state.side === "buy" ? "on" : ""}" data-side="buy"><span>Buy</span><small class="num">${fmtPx(q.ask)}</small></button>
          <button class="sell ${state.side === "sell" ? "on" : ""}" data-side="sell"><span>Sell</span><small class="num">${fmtPx(q.bid)}</small></button>
        </div>
        <div>
          <div class="kv"><span class="k tip" title="Half the distance between the bid and ask for this size.">Spread</span><span class="v num">${m.spread.toFixed(3)}%</span></div>
          <div class="kv"><span class="k">Available to Trade</span><span class="v num">${fmtUsd(available)}</span></div>
          <div class="kv"><span class="k">Current Position</span><span class="v num">${positionText()}</span></div>
        </div>
        ${state.orderType !== "market" ? `<label class="field"><span>${state.orderType === "stop" ? "Trigger" : "Price"}</span><input data-input="limitPrice" inputmode="decimal" placeholder="0" value="${escapeAttr(state.limitPrice)}"></label>` : ""}
        ${state.orderType === "stoplimit" ? `<label class="field"><span>Trigger</span><input data-input="triggerPrice" inputmode="decimal" placeholder="0" value="${escapeAttr(state.triggerPrice)}"></label>` : ""}
        <div class="size-row">
          <div class="slider-col">
            <label class="field"><span>Size</span><input id="size-input" data-input="size" inputmode="decimal" placeholder="0" value="${escapeAttr(state.size)}"><button class="unit-swap" data-unit title="Toggle coin / USD"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4h8M8 2l2 2-2 2M10 8H2M4 6 2 8l2 2" stroke="currentColor"/></svg></button></label>
            <input type="range" min="0" max="100" step="1" value="${sliderValue(available, activePx)}" data-slider style="--p:${sliderValue(available, activePx)}%">
          </div>
          <label class="field pct-field"><input data-pct inputmode="decimal" value="${sliderValue(available, activePx)}">%</label>
        </div>
        <div class="checks">
          <label class="check-row ${state.connected ? "" : "off"}"><input type="checkbox" data-check="reduceOnly" ${state.reduceOnly ? "checked" : ""} ${state.connected ? "" : "disabled"}> Reduce Only</label>
          <label class="check-row"><input type="checkbox" data-check="tpsl" ${state.tpsl ? "checked" : ""}> Take Profit / Stop Loss</label>
        </div>
        ${state.tpsl ? `<label class="field"><span>Take Profit</span><input data-input="tp" placeholder="0" value="${escapeAttr(state.tp)}"></label><label class="field"><span>Stop Loss</span><input data-input="sl" placeholder="0" value="${escapeAttr(state.sl)}"></label>` : ""}
        <button class="btn-primary wide" id="submit">${submitLabel()}</button>
        <div class="divider"></div>
        <div class="kv"><span class="k">Liquidation Price</span><span class="v num" style="color:var(--muted-text)">${liq ? fmtPx(liq) : "—"}</span></div>
        <div class="kv"><span class="k">Order Value</span><span class="v num">${fmtUsd(value)}</span></div>
        <div class="kv"><span class="k">Order Quantity</span><span class="v num">${qty ? fmtQty(qty) + " " + m.symbol : "—"}</span></div>
        <div class="kv"><span class="k">Margin Required</span><span class="v num">${qty ? fmtUsd(margin) : "—"}</span></div>
        <div class="kv"><span class="k">Quoted Price</span><span class="v num">${qty ? fmtPx(activePx) : ""}</span></div>
        <div class="kv"><span class="k">Slippage</span><button class="slip-btn" data-modal="slippage"><span>Est: 0%</span><span>/</span><span>Max: ${state.maxSlippage}%</span>${PEN}</button></div>
        <div class="kv"><span class="k">Fee</span><span class="v fee num">$0.00</span></div>
        <div class="divider"></div>
        <div class="kv"><span class="k">Portfolio Value</span><span class="v num">${fmtUsd(state.connected ? state.balance + upnl : 0)}</span></div>
        <div class="kv"><span class="k tip" title="Collateral locked on isolated positions.">Isolated Margin</span><span class="v num">${fmtUsd(state.connected ? state.isolated : 0)}</span></div>
        <div class="kv"><span class="k">Unrealized PNL</span><span class="v num ${clsChange(upnl)}">${state.connected && state.positions.length ? fmtUsd(upnl) : "—"}</span></div>
        <div class="kv"><span class="k tip" title="Maintenance margin used across the portfolio.">MM Usage</span><span class="v">${state.connected ? "2.4%" : "—"}</span></div>
        <div class="kv"><span class="k tip" title="Initial margin used divided by portfolio value.">Margin Ratio</span><span class="v">${state.connected ? "8.1%" : "—"}</span></div>
        <div class="kv"><span class="k">Portfolio Leverage</span><span class="v">${state.connected && value ? (value / Math.max(state.balance, 1)).toFixed(2) + "x" : "—"}</span></div>
      </div>
    </aside>
  </div>`;
}

function stat(label, value, tip = false, title = "") {
  return `<div class="stat"><span class="lbl ${tip ? "tip" : ""}" ${title ? `title="${title}"` : ""}>${label}</span><span class="val num">${value}</span></div>`;
}
function positionText() {
  const p = state.positions.find((x) => x.symbol === state.symbol && x.kind === state.kind);
  if (!p) return "—";
  return `${p.side === "buy" ? "+" : "-"}${fmtQty(Math.abs(p.qty))} ${p.symbol}`;
}
function sliderValue(available, px) {
  const size = Number(state.size) || 0;
  if (!state.connected || !available || !px) return 0;
  const qty = state.sizeUnit === "quote" ? size / px : size;
  const margin = (qty * px) / state.leverage;
  return Math.max(0, Math.min(100, Math.round((margin / available) * 100)));
}
function submitLabel() {
  if (!state.connected) return "Connect";
  const verb = state.side === "buy" ? "Buy" : "Sell";
  if (state.orderType === "limit" || state.orderType === "stoplimit") return `${verb} / Limit`;
  if (state.orderType === "stop") return `${verb} / Stop`;
  return verb;
}
function escapeAttr(v) {
  return String(v ?? "").replace(/"/g, "&quot;");
}

function bottomTable() {
  if (!state.connected) {
    return `<div class="empty-book"><span>Connect your wallet to see your positions</span><button class="btn-primary" data-modal="connect" style="min-width:88px">Connect</button></div>`;
  }
  if (state.bottomTab === "positions") return positionsTable();
  if (state.bottomTab === "orders") return ordersTable(state.orders.filter((o) => o.status === "open"));
  if (state.bottomTab === "orderHistory") return ordersTable(state.orders);
  if (state.bottomTab === "trades") return fillsTable();
  if (state.bottomTab === "funding") return simpleEmpty("No funding payments yet.");
  return simpleEmpty("No realized PNL yet.");
}
function simpleEmpty(text) {
  return `<div class="empty-book"><span>${text}</span></div>`;
}
function positionsTable() {
  if (!state.positions.length) return simpleEmpty("No open positions.");
  const head = ["Market", "Qty", "Value", "Entry", "Mark", "Liq. Price", "Margin", "Funding", "PNL", ""];
  const rows = state.positions.map((p) => {
    const m = getMarket(p.symbol, p.kind);
    const dir = p.side === "buy" ? 1 : -1;
    const pnl = (m.price - p.entry) * p.qty * dir;
    const value = p.qty * m.price;
    return `<tr>
      <td>${coin(m, 16)} ${p.symbol} <span class="tag">${p.kind === "swap" ? "SWAP" : "PERP"}</span></td>
      <td class="${p.side === "buy" ? "up" : "down"}">${p.side === "buy" ? "+" : "-"}${fmtQty(p.qty)}</td>
      <td class="num">${fmtUsd(value)}</td>
      <td class="num">${fmtPx(p.entry)}</td>
      <td class="num">${fmtPx(m.price)}</td>
      <td class="num">${fmtPx(p.liq)}</td>
      <td class="num">${fmtUsd(p.margin)}</td>
      <td class="num">$0.00</td>
      <td class="num ${clsChange(pnl)}">${fmtUsd(pnl)}</td>
      <td><div class="row-actions"><button class="linkish" data-close-pos="${p.id}">Close</button><button class="linkish" data-reverse="${p.id}">Reverse</button></div></td>
    </tr>`;
  });
  return `<div class="table-wrap"><table class="grid"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
}
function ordersTable(list) {
  if (!list.length) return simpleEmpty("No orders.");
  const head = ["Market", "Side", "Type", "Price", "Size", "Status", "Time", ""];
  const rows = list.map((o) => `<tr>
    <td>${o.symbol}</td><td class="${o.side === "buy" ? "up" : "down"}">${o.side === "buy" ? "Buy" : "Sell"}</td>
    <td>${o.type}</td><td class="num">${fmtPx(o.price)}</td><td class="num">${fmtQty(o.qty)}</td>
    <td>${o.status}</td><td>${o.time}</td>
    <td>${o.status === "open" ? `<button class="linkish danger" data-cancel="${o.id}">Cancel</button>` : ""}</td>
  </tr>`);
  return `<div class="table-wrap"><table class="grid"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
}
function fillsTable() {
  if (!state.fills.length) return simpleEmpty("No trades yet.");
  const head = ["Market", "Side", "Price", "Size", "Fee", "Time"];
  const rows = state.fills.map((f) => `<tr><td>${f.symbol}</td><td class="${f.side === "buy" ? "up" : "down"}">${f.side}</td><td class="num">${fmtPx(f.price)}</td><td class="num">${fmtQty(f.qty)}</td><td class="fee">$0.00</td><td>${f.time}</td></tr>`);
  return `<div class="table-wrap"><table class="grid"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
}

function filteredMarkets() {
  const q = state.query.trim().toLowerCase();
  return MARKETS.filter((m) => {
    if (state.listKind !== "all" && m.kind !== state.listKind) return false;
    if (state.venue === "crypto" && m.venue !== "crypto") return false;
    if (state.venue === "tradfi" && m.venue !== "tradfi") return false;
    if (state.sector !== "all" && m.sector !== state.sector) return false;
    if (!q) return true;
    return m.symbol.toLowerCase().includes(q) || m.name.toLowerCase().includes(q);
  });
}

function sparkSvg(points, change) {
  if (!points?.length) return "";
  const min = Math.min(...points);
  const max = Math.max(...points);
  const w = 84;
  const h = 28;
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * (h - 4) - 2;
      return `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const color = change >= 0 ? "#56c75d" : "#f1787e";
  return `<svg class="spark" viewBox="0 0 ${w} ${h}"><path d="${d}" fill="none" stroke="${color}" stroke-width="1.4"/></svg>`;
}

function marketsPage() {
  const live = MARKETS.filter((m) => !m.soon);
  const cap = live.filter((m) => m.venue === "crypto" && m.fdv).reduce((s, m) => s + m.fdv, 0);
  const vol = live.reduce((s, m) => s + (m.volume || 0), 0);
  const oi = live.reduce((s, m) => s + (m.oi || 0), 0);
  const gainers = [...live].sort((a, b) => b.change - a.change).slice(0, 5);
  const losers = [...live].sort((a, b) => a.change - b.change).slice(0, 5);
  const newTradfi = MARKETS.filter((m) => m.soon && m.venue === "tradfi").slice(0, 4);
  const newCrypto = live.filter((m) => m.venue === "crypto").slice(-4).reverse();
  const list = filteredMarkets();
  const pageSize = 20;
  const pages = Math.max(1, Math.ceil(list.length / pageSize));
  state.page = Math.min(state.page, pages);
  const slice = list.slice((state.page - 1) * pageSize, state.page * pageSize);
  const mini = (m) => `<div class="mini-row"><span class="left-id">${coin(m, 16)} ${m.symbol} <span class="tag">${m.kind.toUpperCase()}</span></span><span class="num ${clsChange(m.change)}">${m.change == null ? "Soon" : pct(m.change)}</span></div>`;

  return `
    <h1>Markets</h1>
    <div class="stat-cards">
      <div class="card"><div class="lbl">Crypto Market Cap</div><div class="big num">${fmtUsd(cap)}</div></div>
      <div class="card"><div class="lbl">24h Trading Volume</div><div class="big num">${fmtUsd(vol)}</div></div>
      <div class="card"><div class="lbl">Total Markets</div><div class="big num">${MARKETS.length}</div></div>
      <div class="card"><div class="lbl">Open Interest</div><div class="big num">${fmtUsd(oi)}</div></div>
    </div>
    <div class="two">
      <div class="card"><div class="lbl">New TradFi Listings <span style="float:right">Total ${MARKETS.filter((m) => m.soon).length}</span></div><div class="mini-list">${newTradfi.map(mini).join("")}</div></div>
      <div class="card"><div class="lbl">New Crypto Listings</div><div class="mini-list">${newCrypto.map(mini).join("")}</div></div>
    </div>
    <div class="two">
      <div class="card"><div class="lbl">Top Gainers <span style="float:right">24h</span></div><div class="mini-list">${gainers.map(mini).join("")}</div></div>
      <div class="card"><div class="lbl">Top Losers <span style="float:right">24h</span></div><div class="mini-list">${losers.map(mini).join("")}</div></div>
    </div>
    <div class="filters">
      <input id="market-search" class="search" placeholder="Search markets" data-search value="${escapeAttr(state.query)}">
      ${["all", "perp", "swap"].map((k) => `<button class="chip ${state.listKind === k ? "on" : ""}" data-kind="${k}">${k === "all" ? "All" : k.toUpperCase()}</button>`).join("")}
      ${["all", "crypto", "tradfi"].map((k) => `<button class="chip ${state.venue === k ? "on" : ""}" data-venue="${k}">${k === "all" ? "All Markets" : k === "crypto" ? "Crypto" : "TradFi"}</button>`).join("")}
    </div>
    <div class="filters">
      ${SECTORS.map((s) => `<button class="chip ${state.sector === s ? "on" : ""}" data-sector="${s}">${SECTOR_LABEL[s]}</button>`).join("")}
    </div>
    <div class="table-wrap"><table class="grid"><thead><tr>
      <th>Asset</th><th>24h Volume</th><th>Price</th><th>24h Change</th><th>FDV/MC</th><th>Open Interest</th><th>Ann. Funding</th><th>Last 7 Days</th>
    </tr></thead><tbody>
      ${slice.map((m) => {
        const rate = annFunding(m);
        const ann = rate == null ? "—" : `${rate.toFixed(2)}%`;
        const href = m.soon ? "" : `/${m.kind === "swap" ? "swap" : "perpetual"}/${m.symbol}`;
        return `<tr data-open="${href}" style="cursor:${href ? "pointer" : "default"}">
          <td><span class="left-id">${coin(m, 18)}<span><b>${m.symbol}</b> <span class="tag">${m.kind.toUpperCase()}</span> ${m.soon ? `<span class="tag soon">Soon</span>` : `<span class="lev-tag">${m.maxLev}x</span>`}<div style="color:var(--dim);font-size:11px">${m.name}</div></span></span></td>
          <td class="num">${m.volume == null ? "—" : fmtUsd(m.volume)}</td>
          <td class="num">${m.price == null ? "—" : fmtPx(m.price)}</td>
          <td class="num ${clsChange(m.change)}">${m.change == null ? "—" : pct(m.change)}</td>
          <td class="num">${m.fdv ? fmtUsd(m.fdv) : "—"}</td>
          <td class="num">${m.oi ? fmtUsd(m.oi) : "—"}</td>
          <td class="num ${m.funding > 0 ? "up" : ""}">${ann}</td>
          <td>${sparkSvg(m.spark, m.change || 0)}</td>
        </tr>`;
      }).join("")}
    </tbody></table></div>
    <div class="pager"><span>${(state.page - 1) * pageSize + 1} – ${Math.min(state.page * pageSize, list.length)} of ${list.length}</span>
      <span style="display:flex;gap:6px"><button data-page="-1" ${state.page === 1 ? "disabled" : ""}>Prev</button><button data-page="1" ${state.page === pages ? "disabled" : ""}>Next</button></span>
    </div>`;
}

function pointsPage() {
  const t = nextFriday();
  const box = (n, l) => `<div class="count-box"><b>${pad(n)}</b><span>${l}</span></div>`;
  return `<h1>Points</h1>
    <p class="sub">Points are awarded for activity on Omni. Points are distributed every Friday for the previous week’s platform activity.</p>
    ${state.connected ? "" : `<button class="btn-primary" data-modal="connect" style="margin-bottom:18px">Connect</button>`}
    <div class="lbl" style="color:var(--muted-text);font-size:12px;margin-bottom:8px">Next Drop</div>
    <div class="countdown" data-countdown>
      ${box(t.days, "Days")}<span style="align-self:center;color:var(--dim)">:</span>
      ${box(t.hours, "Hours")}<span style="align-self:center;color:var(--dim)">:</span>
      ${box(t.mins, "Mins")}<span style="align-self:center;color:var(--dim)">:</span>
      ${box(t.secs, "Secs")}
    </div>
    <div class="stat-cards" style="margin-top:18px">
      <div class="card"><div class="lbl">Your Points</div><div class="big num">${state.connected ? "12,480" : "—"}</div></div>
      <div class="card"><div class="lbl">Rank</div><div class="big num">${state.connected ? "1,204" : "—"}</div></div>
      <div class="card"><div class="lbl">This Week</div><div class="big num">${state.connected ? "860" : "—"}</div></div>
      <div class="card"><div class="lbl">Referral Boost</div><div class="big num">${state.connected ? "1.2x" : "—"}</div></div>
    </div>`;
}

function rewardsPage() {
  return `<h1>Rewards</h1>
    <p class="sub">We share revenue using rewards. You earn rewards based on your 30 day trading activity.</p>
    <div style="display:flex;gap:8px;margin-bottom:16px">
      ${state.connected ? "" : `<button class="btn-primary" data-modal="connect">Connect</button>`}
      <a class="ghost" style="display:inline-flex;align-items:center;padding:0 12px;width:auto;text-decoration:none" href="https://docs.varprotocol.org" target="_blank" rel="noreferrer">Docs</a>
    </div>
    <div class="tiers">
      ${TIERS.map((t) => `<button class="tier ${state.tier === t.id ? "on" : ""}" data-tier="${t.id}">
        <div class="name" style="color:${t.color}">${t.name}</div>
        <div class="meta">30 Day Total Vol. To Unlock<b class="num">${fmtUsd(t.vol)}</b></div>
        <div class="meta">Boost to Points Earned<b>${t.boost}%</b></div>
        <div class="meta">Spread Rebates<b>Coming soon</b></div>
        <div class="meta">OLP Capacity<b>Coming soon</b></div>
      </button>`).join("")}
    </div>
    <p class="note">Total Volume is Personal Volume + (0.2 × Referred Volume)</p>`;
}

function leaderboardPage() {
  const ranges = [["all", "All Time"], ["24h", "Last 24 Hours"], ["7d", "Last 7 Days"], ["30d", "Last 30 Days"]];
  const factor = { all: 1, "24h": 0.04, "7d": 0.18, "30d": 0.46 }[state.lbRange];
  return `<h1>Leaderboard</h1>
    <div class="lb-tabs">${ranges.map(([id, label]) => `<button class="chip ${state.lbRange === id ? "on" : ""}" data-lb="${id}">${label}</button>`).join("")}</div>
    <div class="table-wrap"><table class="grid"><thead><tr><th>Ranking</th><th>User</th><th>Tier</th><th>PNL</th><th>Volume</th></tr></thead>
    <tbody>${LEADERBOARD.map((row, i) => {
      const [user, tier, pnl, vol] = row;
      const shown = user;
      return `<tr><td>${i + 1}</td><td>${state.privacy ? "0x••••" : shown}</td><td style="color:${TIERS.find((t) => t.name === tier)?.color || "inherit"}">${tier}</td><td class="num up">${fmtUsd(pnl * factor)}</td><td class="num">${fmtUsd(vol * factor)}</td></tr>`;
    }).join("")}</tbody></table></div>
    <p class="note">Excludes accounts with less than $100,000 in lifetime trading volume.</p>`;
}

function competitionPage() {
  return `<h1>Swaps Competition</h1>
    <p class="sub">Trade listed swaps. Rankings follow notional volume while the competition window is open. Swap markets follow traditional hours and use isolated margin.</p>
    <div class="stat-cards">
      <div class="card"><div class="lbl">Window</div><div class="big">Weekly</div></div>
      <div class="card"><div class="lbl">Your Volume</div><div class="big num">${state.connected ? "$0.00" : "—"}</div></div>
      <div class="card"><div class="lbl">Rank</div><div class="big">—</div></div>
      <div class="card"><div class="lbl">Markets</div><div class="big num">${MARKETS.filter((m) => m.kind === "swap").length}</div></div>
    </div>
    ${leaderSlice("Swap volume")}`;
}
function tradersPage() {
  return `<h1>On-Chain Traders</h1>
    <p class="sub">Public trader rankings across Omni perpetual markets.</p>
    ${leaderSlice("Volume")}`;
}
function leaderSlice() {
  return `<div class="table-wrap"><table class="grid"><thead><tr><th>Ranking</th><th>User</th><th>Tier</th><th>PNL</th><th>Volume</th></tr></thead><tbody>
    ${LEADERBOARD.slice(0, 8).map((row, i) => `<tr><td>${i + 1}</td><td>${row[0]}</td><td>${row[1]}</td><td class="num up">${fmtUsd(row[2])}</td><td class="num">${fmtUsd(row[3])}</td></tr>`).join("")}
  </tbody></table></div>`;
}
function announcementsPage() {
  return `<h1>Announcements</h1>
    <div class="announce">${ANNOUNCEMENTS.map((a) => `<article><span class="tag">${a.tag}</span><h3>${a.title}</h3><p>${a.body}</p><time>${a.time}</time></article>`).join("")}</div>`;
}

function modal() {
  if (state.modal === "connect") return connectModal();
  if (state.modal === "markets") return marketsModal();
  if (state.modal === "leverage") return leverageModal();
  if (state.modal === "slippage") return slippageModal();
  if (state.modal === "deposit" || state.modal === "withdraw") return transferModal(state.modal);
  return "";
}
function connectModal() {
  const wallets = ["MetaMask", "WalletConnect", "Coinbase Wallet", "Rabby", "OKX Wallet", "Phantom"];
  return `<div class="overlay" data-close-modal><div class="modal sm" data-stop>
    <div class="modal-head"><h2>Connect</h2><button class="x" data-close-modal>✕</button></div>
    <div class="wallets">${wallets.map((name) => `<button data-wallet="${name}"><span class="wallet-icon">${WALLET_ICONS[name]}</span>${name}</button>`).join("")}</div>
    <p class="fine">Local preview. Connecting uses a sample portfolio so you can try the ticket, positions, and transfers.</p>
  </div></div>`;
}
function pickerList() {
  const q = state.query.trim().toLowerCase();
  const list = MARKETS.filter((m) => {
    if (m.soon) return false;
    if (state.pickerKind !== "all" && m.kind !== state.pickerKind) return false;
    if (state.pickerVenue !== "all" && m.venue !== state.pickerVenue) return false;
    if (state.pickerSector !== "all" && m.sector !== state.pickerSector) return false;
    if (!q) return true;
    return m.symbol.toLowerCase().includes(q) || m.name.toLowerCase().includes(q);
  });
  const dir = state.pickerDir === "asc" ? 1 : -1;
  const key = state.pickerSort;
  const num = (m) => {
    if (key === "price") return m.price;
    if (key === "change") return m.kind === "swap" ? null : m.change;
    if (key === "volume") return m.volume;
    if (key === "oi") return m.oi;
    if (key === "funding") return annFunding(m);
    return null;
  };
  list.sort((a, b) => {
    if (key === "asset") return (a.symbol.localeCompare(b.symbol) || a.kind.localeCompare(b.kind)) * dir;
    const av = num(a);
    const bv = num(b);
    const an = av == null || Number.isNaN(av);
    const bn = bv == null || Number.isNaN(bv);
    if (an && bn) return a.symbol.localeCompare(b.symbol);
    if (an) return 1;
    if (bn) return -1;
    return (av - bv) * dir || a.symbol.localeCompare(b.symbol);
  });
  return list;
}
function sortMark(key) {
  const active = state.pickerSort === key;
  const up = active && state.pickerDir === "asc" ? "on" : "";
  const down = active && state.pickerDir === "desc" ? "on" : "";
  return `<svg class="sort-ico" viewBox="0 0 10 12" aria-hidden="true"><path class="${up}" d="M5 1.2 8.2 5H1.8Z"/><path class="${down}" d="M5 10.8 1.8 7h6.4Z"/></svg>`;
}
function pickerIcon(m) {
  return coin(m, 22);
}
function changeCell(m) {
  if (m.kind === "swap" || m.change == null) return `<span class="dash">–</span>`;
  if (!m.change) return `<span class="num">0.00%</span>`;
  const arrow = m.change > 0 ? "↑" : "↓";
  return `<span class="chg num ${clsChange(m.change)}">${arrow} ${Math.abs(m.change).toFixed(2)}%</span>`;
}
function fundingCell(m) {
  const ann = annFunding(m);
  if (ann == null) return "—";
  const cls = ann > 0 ? "up" : ann < 0 ? "down" : "";
  const txt = `${ann.toFixed(2)}%`;
  if (m.kind === "swap") return `<span class="num ${cls}">${txt} (L) / ${txt} (S)</span>`;
  return `<span class="num ${cls}">${txt}</span>`;
}
function pickerHead(key, label, right) {
  return `<th class="${right ? "right" : ""}"><button class="th-btn ${right ? "right" : ""}" data-psort="${key}">${label}${sortMark(key)}</button></th>`;
}
function marketsModal() {
  const list = pickerList();
  if (state.pickerIndex >= list.length) state.pickerIndex = 0;
  const venues = [["all", "All Markets"], ["crypto", "Crypto"], ["tradfi", "TradFi"]];
  const kinds = [["all", "All"], ["perp", "PERP"], ["swap", "SWAP"]];
  const rows = list.map((m, i) => {
    const on = i === state.pickerIndex ? "on" : "";
    const fav = state.favs.has(m.symbol);
    return `<tr class="picker-row ${on}" data-pick="${m.symbol}|${m.kind}" data-index="${i}">
      <td><div class="asset-cell">
        <button class="star-btn ${fav ? "on" : ""}" data-fav="${m.symbol}" aria-label="${fav ? "Unfavorite" : "Favorite"} ${m.symbol}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.7 9.8 5.6l4.3.4-3.3 2.8.9 4.3L8 11.2 4.3 13.1l.9-4.3L1.9 6l4.3-.4L8 1.7Z" fill="${fav ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg></button>
        ${pickerIcon(m)}
        <b>${m.symbol}</b>
        <span class="dot">•</span>
        <span class="tag">${m.kind === "swap" ? "SWAP" : "PERP"}</span>
        <span class="tag">${m.maxLev}X</span>
        ${m.venue === "tradfi" ? `<span class="tag tf">TradFi</span>` : ""}
      </div></td>
      <td class="num">${m.price == null ? "—" : fmtPx(m.price)}</td>
      <td>${changeCell(m)}</td>
      <td class="num">${m.volume == null ? "—" : fmtUsd(m.volume)}</td>
      <td class="num">${m.oi == null ? "—" : fmtUsd(m.oi)}</td>
      <td>${fundingCell(m)}</td>
    </tr>`;
  }).join("");
  const kbd = (t) => `<kbd class="kbd">${t}</kbd>`;
  return `<div class="overlay" data-close-modal><div class="modal picker" data-stop role="dialog" aria-label="Markets">
    <label class="picker-search">
      ${SEARCH_ICO}
      <input id="picker-search" placeholder="Search" data-modal-search value="${escapeAttr(state.query)}" autocomplete="off" autofocus>
    </label>
    <div class="picker-bar">
      <div class="picker-venues">
        ${venues.map(([id, label]) => `<button class="${state.pickerVenue === id ? "on" : ""}" data-pvenue="${id}">${label}</button>`).join("")}
      </div>
      <div class="picker-kinds">
        ${kinds.map(([id, label]) => `<button class="${state.pickerKind === id ? "on" : ""}" data-pkind="${id}">${label}</button>`).join("")}
      </div>
    </div>
    <div class="picker-sectors">
      ${SECTORS.map((s) => `<button class="${state.pickerSector === s ? "on" : ""}" data-psector="${s}">${SECTOR_LABEL[s]}</button>`).join("")}
    </div>
    <div class="picker-scroll market-list">
      <table class="picker-table">
        <thead><tr>
          ${pickerHead("asset", "Asset", false)}
          ${pickerHead("price", "Price", true)}
          ${pickerHead("change", "24h Change", true)}
          ${pickerHead("volume", "24h Volume", true)}
          ${pickerHead("oi", "Open Interest", true)}
          ${pickerHead("funding", "Ann. Funding", true)}
        </tr></thead>
        <tbody>${rows || `<tr><td class="picker-empty" colspan="6">No markets</td></tr>`}</tbody>
      </table>
    </div>
    <div class="picker-foot">
      <div class="picker-hints">
        <span class="hint">${kbd("/")} Open menu</span>
        <span class="hint">${kbd("↑")}${kbd("↓")} Navigate</span>
        <span class="hint">${kbd("Enter")} Select</span>
        <span class="hint">${kbd("Esc")} Close</span>
      </div>
      <a class="btn-primary picker-view" href="/markets" data-link>View All</a>
    </div>
  </div></div>`;
}
function openMarkets() {
  state.menu = null;
  state.drawer = false;
  state.modal = "markets";
  state.query = "";
  state.pickerKind = "all";
  state.pickerVenue = "all";
  state.pickerSector = "all";
  state.pickerSort = "volume";
  state.pickerDir = "desc";
  state.pickerIndex = 0;
  render();
  $("#picker-search")?.focus();
}
function chooseMarket(symbol, kind) {
  state.symbol = symbol;
  state.kind = kind;
  state.modal = null;
  state.query = "";
  const path = `/${kind === "swap" ? "swap" : "perpetual"}/${symbol}`;
  if (location.pathname !== withBase(path)) history.pushState({}, "", withBase(path));
  state.path = path;
  render();
}
function refreshMarketsModal() {
  if (state.modal !== "markets") {
    render();
    return;
  }
  const overlay = $("#app .overlay");
  if (!overlay) {
    render();
    return;
  }
  const focus = document.activeElement;
  const wasSearch = focus && focus.id === "picker-search";
  const start = wasSearch ? focus.selectionStart : null;
  overlay.replaceWith(document.createRange().createContextualFragment(marketsModal()));
  const again = $("#picker-search");
  if (again) {
    again.focus();
    if (wasSearch && start != null) {
      try { again.setSelectionRange(start, start); } catch (e) {}
    }
  }
  document.querySelector(".picker-row.on")?.scrollIntoView({ block: "nearest" });
}
function leverageModal() {
  const m = market();
  return `<div class="overlay" data-close-modal><div class="modal sm" data-stop>
    <div class="modal-head"><h2>Leverage</h2><button class="x" data-close-modal>✕</button></div>
    <div class="lev-val num"><span id="lev-readout">${state.leverage}</span>x</div>
    <input type="range" min="1" max="${m.maxLev}" step="1" value="${state.leverage}" data-lev style="--p:${((state.leverage - 1) / (m.maxLev - 1)) * 100}%">
    <p class="fine">Max ${m.maxLev}x on ${m.symbol}-${m.kind === "swap" ? "SWAP" : "PERP"}. Leverage is set per market.</p>
    <button class="btn-primary wide" data-close-modal style="margin-top:12px">Confirm</button>
  </div></div>`;
}
function slippageModal() {
  return `<div class="overlay" data-close-modal><div class="modal sm" data-stop>
    <div class="modal-head"><h2>Slippage</h2><button class="x" data-close-modal>✕</button></div>
    <label class="field"><span>Max</span><input data-slip value="${state.maxSlippage}">%</label>
    <p class="fine">Orders that move the quote by more than this amount are rejected. Estimated slippage updates with size.</p>
    <button class="btn-primary wide" data-close-modal style="margin-top:12px">Save</button>
  </div></div>`;
}
function transferModal(kind) {
  const title = kind === "deposit" ? "Deposit" : "Withdraw";
  return `<div class="overlay" data-close-modal><div class="modal sm" data-stop>
    <div class="modal-head"><h2>${title} USDC</h2><button class="x" data-close-modal>✕</button></div>
    <p class="sub" style="margin-top:0">Arbitrum USDC. Available ${fmtUsd(state.balance)}.</p>
    <label class="field"><span>Amount</span><input id="transfer-amt" inputmode="decimal" placeholder="0.00"></label>
    <button class="btn-primary wide" id="transfer-go" style="margin-top:12px">${title}</button>
  </div></div>`;
}

function render() {
  const page = route();
  const root = $("#app");
  const focus = document.activeElement;
  const focusId = focus && focus.id;
  const selStart = focus && focus.selectionStart;
  let html = "";
  if (page === "trade") html = shell(tradePage(), true);
  else if (page === "markets") html = shell(marketsPage());
  else if (page === "points") html = shell(pointsPage());
  else if (page === "rewards") html = shell(rewardsPage());
  else if (page === "leaderboard") html = shell(leaderboardPage());
  else if (page === "competition") html = shell(competitionPage());
  else if (page === "traders") html = shell(tradersPage());
  else html = shell(announcementsPage());
  root.innerHTML = baseHtml(html);
  renderToasts();
  placePills();
  if (page === "trade") mountChart();
  if (focusId) {
    const next = document.getElementById(focusId);
    if (next) {
      next.focus();
      if (selStart != null && next.setSelectionRange) {
        try { next.setSelectionRange(selStart, selStart); } catch (e) {}
      }
    }
  }
}

function placePills() {
  const nav = $("#nav-tabs");
  const pill = $("#nav-pill");
  const active = nav && $(".nav-link.active", nav);
  if (pill && active) {
    pill.style.width = active.offsetWidth + "px";
    pill.style.transform = `translate(${active.offsetLeft}px, 0)`;
  }
  movePill("#book-tabs", ".tab-btn.active", "#book-pill");
  movePill("#order-seg", ".seg-btn.active", "#seg-pill");
}
function movePill(wrapSel, activeSel, pillSel) {
  const wrap = $(wrapSel);
  const pill = $(pillSel);
  const active = wrap && $(activeSel, wrap);
  if (!pill || !active) return;
  pill.style.width = active.offsetWidth + "px";
  pill.style.transform = `translate(${active.offsetLeft}px, 0)`;
}

let tvFrame = null;
let tvKey = "";

function mountChart() {
  const slot = $("#tv-slot");
  if (!slot) return;
  const m = market();
  const symbol = tvSymbol(m);
  const resolution = tvResolution(state.interval);
  const theme = state.theme === "light" ? "light" : "dark";
  if (!symbol) {
    tvFrame = null;
    tvKey = "";
    slot.innerHTML = `<div class="chart-missing">No TradingView market for ${m.symbol}</div>`;
    return;
  }
  const key = `${symbol}|${resolution}|${theme}`;
  if (tvFrame && tvKey === key) {
    slot.replaceChildren(tvFrame);
    return;
  }
  tvKey = key;
  const toolbar = theme === "dark" ? "0b101b" : "ffffff";
  const params = new URLSearchParams({
    frameElementId: "tv-chart",
    symbol,
    interval: resolution,
    hidesidetoolbar: "0",
    hidetoptoolbar: "0",
    symboledit: "0",
    saveimage: "0",
    toolbarbg: toolbar,
    studies: "[]",
    theme,
    style: "1",
    timezone: "Etc/UTC",
    withdateranges: "1",
    hideideas: "1",
    locale: "en",
  });
  tvFrame = document.createElement("iframe");
  tvFrame.id = "tv-chart";
  tvFrame.className = "tv-chart";
  tvFrame.title = `${m.symbol} chart`;
  tvFrame.setAttribute("allow", "fullscreen");
  tvFrame.referrerPolicy = "origin";
  tvFrame.src = `https://www.tradingview.com/widgetembed/?${params.toString()}`;
  slot.replaceChildren(tvFrame);
}

function patchPrices() {
  if (route() !== "trade") {
    const cd = $("[data-countdown]");
    if (cd) {
      const t = nextFriday();
      const nums = [t.days, t.hours, t.mins, t.secs];
      $$("b", cd).forEach((el, i) => (el.textContent = pad(nums[i])));
    }
    return;
  }
  const m = market();
  const vals = $$(".stats-scroll .val");
  const q = quotes(m);
  if (vals.length >= 7) {
    vals[0].textContent = fmtPx(q.mid);
    vals[1].textContent = fmtPx(q.mid * 0.9999);
    vals[3].innerHTML = `<span class="${clsChange(m.change)}">${pct(m.change)}</span>`;
    const fund = vals[6];
    if (fund) fund.innerHTML = `<span class="${m.funding >= 0 ? "up" : "down"}">${m.funding.toFixed(4)}%</span> <span style="color:var(--dim)">/</span> <span>${fundingLeft(m.hours)}</span>`;
  }
  $$(".bs .buy small").forEach((el) => (el.textContent = fmtPx(q.ask)));
  $$(".bs .sell small").forEach((el) => (el.textContent = fmtPx(q.bid)));
}

function tickMarkets() {
  MARKETS.forEach((m) => {
    if (!m.price) return;
    const nudge = (Math.random() - 0.5) * m.price * 0.00015;
    m.price = Math.max(0, m.price + nudge);
    m.change += nudge / m.price * 100 * 0.2;
  });
  patchPrices();
}

function submitOrder() {
  if (!state.connected) {
    state.modal = "connect";
    render();
    return;
  }
  const m = market();
  const q = quotes(m);
  const px = state.side === "buy" ? q.ask : q.bid;
  const raw = Number(state.size);
  if (!raw) {
    toast("Enter a size", "Size is required before you can place an order.", "error");
    return;
  }
  const qty = state.sizeUnit === "quote" ? raw / px : raw;
  const value = qty * px;
  const margin = value / state.leverage;
  if (margin > state.balance) {
    toast("Not enough margin", "Reduce size or lower leverage.", "error");
    return;
  }
  const limit = Number(state.limitPrice);
  if ((state.orderType === "limit" || state.orderType === "stoplimit") && !limit) {
    toast("Enter a price", "Limit orders need a price.", "error");
    return;
  }
  const now = new Date().toLocaleTimeString();
  if (state.orderType === "market") {
    const existing = state.positions.find((p) => p.symbol === m.symbol && p.kind === m.kind);
    if (existing && existing.side === state.side) {
      const nextQty = existing.qty + qty;
      existing.entry = (existing.entry * existing.qty + px * qty) / nextQty;
      existing.qty = nextQty;
      existing.margin += margin;
    } else if (existing && existing.side !== state.side) {
      if (qty >= existing.qty) {
        state.positions = state.positions.filter((p) => p !== existing);
        const remain = qty - existing.qty;
        if (remain > 1e-8 && !state.reduceOnly) {
          state.positions.push(makePos(m, state.side, remain, px, (remain * px) / state.leverage));
        }
      } else {
        existing.qty -= qty;
        existing.margin = (existing.qty * px) / state.leverage;
      }
    } else if (!state.reduceOnly) {
      state.positions.push(makePos(m, state.side, qty, px, margin));
    } else {
      toast("Reduce only", "There is no position to reduce.", "error");
      return;
    }
    state.balance -= 0;
    state.fills.unshift({ symbol: m.symbol, side: state.side, price: px, qty, time: now });
    toast("Order filled", `${state.side === "buy" ? "Bought" : "Sold"} ${fmtQty(qty)} ${m.symbol} @ ${fmtPx(px)}`);
    state.bottomTab = "positions";
  } else {
    state.orders.unshift({
      id: Math.random().toString(36).slice(2),
      symbol: m.symbol,
      side: state.side,
      type: state.orderType,
      price: limit || px,
      qty,
      status: "open",
      time: now,
    });
    toast("Order placed", `${state.orderType} ${state.side} ${fmtQty(qty)} ${m.symbol}`);
    state.bottomTab = "orders";
  }
  state.size = "";
  render();
}

function makePos(m, side, qty, entry, margin) {
  const liq = side === "buy" ? entry * (1 - 0.9 / state.leverage) : entry * (1 + 0.9 / state.leverage);
  return { id: Math.random().toString(36).slice(2), symbol: m.symbol, kind: m.kind, side, qty, entry, margin, liq };
}

function onClick(e) {
  const t = e.target.closest("button, a");
  const picked = e.target.closest("[data-pick]");
  if (e.target.closest("[data-stop]")) {
    if (!t && !picked) return;
  }
  if (t?.hasAttribute("data-link")) {
    e.preventDefault();
    go(t.getAttribute("href"));
    return;
  }
  if (t?.hasAttribute("data-close-modal")) {
    state.modal = null;
    state.query = "";
    render();
    return;
  }
  if (e.target.closest("[data-close-modal]") && !e.target.closest("[data-stop]")) {
    state.modal = null;
    state.query = "";
    render();
    return;
  }
  if (e.target.closest("[data-close-drawer]") && !e.target.closest("[data-stop]")) {
    state.drawer = false;
    render();
    return;
  }
  if (picked && !e.target.closest("[data-fav]")) {
    const [symbol, kind] = picked.dataset.pick.split("|");
    chooseMarket(symbol, kind);
    return;
  }
  const row = e.target.closest("tr[data-open]");
  if (!t) {
    if (row && row.dataset.open) {
      go(row.dataset.open);
      return;
    }
    if (state.menu && !e.target.closest(".menu")) {
      state.menu = null;
      render();
    }
    return;
  }
  if (t.dataset.menu) {
    state.menu = state.menu === t.dataset.menu ? null : t.dataset.menu;
    render();
    return;
  }
  if (t.dataset.modal) {
    if (t.dataset.modal === "markets") {
      openMarkets();
      return;
    }
    state.menu = null;
    state.modal = t.dataset.modal;
    state.query = "";
    render();
    return;
  }
  if (t.dataset.openDrawer != null) {
    state.drawer = true;
    render();
    return;
  }
  if (t.dataset.locale) {
    state.locale = t.dataset.locale;
    localStorage.setItem("vr-locale", state.locale);
    state.menu = null;
    render();
    return;
  }
  if (t.dataset.theme) {
    state.theme = t.dataset.theme;
    localStorage.setItem("vr-theme", state.theme);
    render();
    return;
  }
  if (t.dataset.toggle) {
    state[t.dataset.toggle] = !state[t.dataset.toggle];
    render();
    return;
  }
  if (t.dataset.disconnect != null) {
    state.connected = false;
    state.positions = [];
    state.orders = [];
    state.menu = null;
    toast("Disconnected", "Wallet disconnected.");
    render();
    return;
  }
  if (t.dataset.wallet) {
    state.connected = true;
    state.modal = null;
    toast("Connected", `${t.dataset.wallet} preview session is ready.`);
    render();
    return;
  }
  if (t.dataset.side) {
    state.side = t.dataset.side;
    render();
    return;
  }
  if (t.dataset.otype) {
    state.orderType = t.dataset.otype;
    state.menu = null;
    render();
    return;
  }
  if (t.dataset.margin) {
    state.marginMode = t.dataset.margin;
    state.menu = null;
    render();
    return;
  }
  if (t.dataset.tab) {
    state.bottomTab = t.dataset.tab;
    render();
    return;
  }
  if (t.dataset.tf) {
    state.interval = t.dataset.tf;
    render();
    return;
  }
  if (t.dataset.unit != null) {
    state.sizeUnit = state.sizeUnit === "base" ? "quote" : "base";
    state.size = "";
    render();
    return;
  }
  if (t.id === "submit") {
    submitOrder();
    return;
  }
  if (t.dataset.closePos) {
    const p = state.positions.find((x) => x.id === t.dataset.closePos);
    state.positions = state.positions.filter((x) => x.id !== t.dataset.closePos);
    if (p) {
      const m = getMarket(p.symbol, p.kind);
      const pnl = (m.price - p.entry) * p.qty * (p.side === "buy" ? 1 : -1);
      state.balance += pnl;
      toast("Position closed", `${p.symbol} PNL ${fmtUsd(pnl)}`);
    }
    render();
    return;
  }
  if (t.dataset.reverse) {
    const p = state.positions.find((x) => x.id === t.dataset.reverse);
    if (p) {
      p.side = p.side === "buy" ? "sell" : "buy";
      p.entry = getMarket(p.symbol, p.kind).price;
      p.liq = p.side === "buy" ? p.entry * (1 - 0.9 / state.leverage) : p.entry * (1 + 0.9 / state.leverage);
      toast("Position reversed", `${p.symbol} is now ${p.side === "buy" ? "long" : "short"}.`);
    }
    render();
    return;
  }
  if (t.dataset.cancel) {
    const o = state.orders.find((x) => x.id === t.dataset.cancel);
    if (o) o.status = "canceled";
    toast("Order canceled", "The open order was canceled.");
    render();
    return;
  }
  if (t.dataset.closeToast) {
    state.toasts = state.toasts.filter((x) => x.id !== t.dataset.closeToast);
    renderToasts();
    return;
  }
  if (t.dataset.kind) {
    state.listKind = t.dataset.kind;
    state.page = 1;
    render();
    return;
  }
  if (t.dataset.venue) {
    state.venue = t.dataset.venue;
    state.page = 1;
    render();
    return;
  }
  if (t.dataset.sector) {
    state.sector = t.dataset.sector;
    state.page = 1;
    render();
    return;
  }
  if (t.dataset.page) {
    state.page += Number(t.dataset.page);
    render();
    return;
  }
  if (t.dataset.lb) {
    state.lbRange = t.dataset.lb;
    render();
    return;
  }
  if (t.dataset.tier) {
    state.tier = t.dataset.tier;
    render();
    return;
  }
  if (t?.dataset.pkind) {
    state.pickerKind = t.dataset.pkind;
    state.pickerIndex = 0;
    refreshMarketsModal();
    return;
  }
  if (t?.dataset.pvenue) {
    state.pickerVenue = t.dataset.pvenue;
    state.pickerIndex = 0;
    refreshMarketsModal();
    return;
  }
  if (t?.dataset.psector) {
    state.pickerSector = t.dataset.psector;
    state.pickerIndex = 0;
    refreshMarketsModal();
    return;
  }
  if (t?.dataset.psort) {
    const key = t.dataset.psort;
    if (state.pickerSort === key) state.pickerDir = state.pickerDir === "asc" ? "desc" : "asc";
    else {
      state.pickerSort = key;
      state.pickerDir = key === "asset" ? "asc" : "desc";
    }
    state.pickerIndex = 0;
    refreshMarketsModal();
    return;
  }
  if (t?.dataset.fav) {
    e.preventDefault();
    if (state.favs.has(t.dataset.fav)) state.favs.delete(t.dataset.fav);
    else state.favs.add(t.dataset.fav);
    if (state.modal === "markets") refreshMarketsModal();
    else render();
    return;
  }
  if (t.id === "transfer-go") {
    const amt = Number($("#transfer-amt")?.value);
    if (!amt || amt < 0) {
      toast("Enter an amount", "Use a positive USDC amount.", "error");
      return;
    }
    if (state.modal === "withdraw") {
      if (amt > state.balance) {
        toast("Insufficient balance", "Amount is larger than available USDC.", "error");
        return;
      }
      state.balance -= amt;
      toast("Withdrawal submitted", `${fmtUsd(amt)} USDC queued on Arbitrum.`);
    } else {
      state.balance += amt;
      toast("Deposit submitted", `${fmtUsd(amt)} USDC credited in this preview.`);
    }
    state.modal = null;
    render();
    return;
  }
}

function onInput(e) {
  const el = e.target;
  if (el.dataset.input) {
    state[el.dataset.input] = el.value;
    if (el.dataset.input === "size") refreshTicketNumbers();
    return;
  }
  if (el.dataset.search != null || el.dataset.modalSearch != null) {
    state.query = el.value;
    state.page = 1;
    if (state.modal === "markets") {
      state.pickerIndex = 0;
      refreshMarketsModal();
    } else render();
    return;
  }
  if (el.dataset.slider != null) {
    const pct = Number(el.value);
    el.style.setProperty("--p", pct + "%");
    const m = market();
    const q = quotes(m);
    const px = state.side === "buy" ? q.ask : q.bid;
    const available = state.connected ? state.balance : 0;
    const margin = (available * pct) / 100;
    const qty = state.leverage ? (margin * state.leverage) / px : 0;
    state.size = state.sizeUnit === "quote" ? (qty * px).toFixed(2) : qty ? qty.toPrecision(4) : "";
    const size = $("#size-input");
    if (size) size.value = state.size;
    const pctInput = $("[data-pct]");
    if (pctInput) pctInput.value = String(pct);
    refreshTicketNumbers();
    return;
  }
  if (el.dataset.pct != null) {
    const slider = document.querySelector("[data-slider]");
    if (slider) {
      slider.value = el.value;
      slider.dispatchEvent(new Event("input", { bubbles: true }));
    }
    return;
  }
  if (el.dataset.lev != null) {
    state.leverage = Number(el.value);
    const max = market().maxLev;
    el.style.setProperty("--p", ((state.leverage - 1) / (max - 1)) * 100 + "%");
    const read = $("#lev-readout");
    if (read) read.textContent = String(state.leverage);
    return;
  }
  if (el.dataset.slip != null) state.maxSlippage = Number(el.value) || 0;
  if (el.dataset.check) state[el.dataset.check] = el.checked;
}

function refreshTicketNumbers() {
  if (route() !== "trade") return;
  const m = market();
  const q = quotes(m);
  const activePx = state.side === "buy" ? q.ask : q.bid;
  const size = Number(state.size) || 0;
  const qty = state.sizeUnit === "quote" && activePx ? size / activePx : size;
  const value = qty * activePx;
  const margin = state.leverage ? value / state.leverage : 0;
  const liq = qty ? (state.side === "buy" ? activePx * (1 - 0.9 / state.leverage) : activePx * (1 + 0.9 / state.leverage)) : null;
  const rows = $$(".ticket .kv .v");
  const map = {
    3: qty ? fmtPx(liq) : "—",
  };
  const labels = $$(".ticket .kv .k");
  labels.forEach((k, i) => {
    const v = k.parentElement.querySelector(".v");
    if (!v) return;
    const name = k.textContent.trim();
    if (name === "Liquidation Price") v.textContent = liq ? fmtPx(liq) : "—";
    if (name === "Order Value") v.textContent = fmtUsd(value);
    if (name === "Order Quantity") v.textContent = qty ? `${fmtQty(qty)} ${m.symbol}` : "—";
    if (name === "Margin Required") v.textContent = qty ? fmtUsd(margin) : "—";
    if (name === "Quoted Price") v.textContent = qty ? fmtPx(activePx) : "";
  });
  void map;
}

function onKey(e) {
  if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
    e.preventDefault();
    openMarkets();
    return;
  }
  if (state.modal === "markets" && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
    const list = pickerList();
    if (!list.length) return;
    e.preventDefault();
    state.pickerIndex = e.key === "ArrowDown"
      ? Math.min(list.length - 1, state.pickerIndex + 1)
      : Math.max(0, state.pickerIndex - 1);
    refreshMarketsModal();
    return;
  }
  if (state.modal === "markets" && e.key === "Enter") {
    const list = pickerList();
    const m = list[state.pickerIndex];
    if (!m) return;
    e.preventDefault();
    chooseMarket(m.symbol, m.kind);
    return;
  }
  if (e.key === "Escape") {
    state.modal = null;
    state.menu = null;
    state.drawer = false;
    state.query = "";
    render();
  }
}

function bindResize() {
  document.addEventListener("mousedown", (e) => {
    if (e.target.id !== "resize") return;
    e.preventDefault();
    const startY = e.clientY;
    const startH = state.chartHeight;
    const move = (ev) => {
      state.chartHeight = Math.max(280, Math.min(820, startH + (ev.clientY - startY)));
      const frame = $("#chart-frame");
      if (frame) frame.style.height = state.chartHeight + "px";
      window.dispatchEvent(new Event("resize"));
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  });
}

async function boot() {
  try {
    logoSvg = await fetch(BASE + "/logo-wordmark.svg").then((r) => r.text());
  } catch (e) {
    logoSvg = "";
  }
  const sym = stripBase(location.pathname).split("/")[2];
  if (sym) state.symbol = sym.toUpperCase();
  render();
  bindResize();
  document.body.addEventListener("click", onClick);
  document.body.addEventListener("input", onInput);
  document.body.addEventListener("change", onInput);
  document.body.addEventListener("mouseover", (e) => {
    const row = e.target.closest?.(".picker-row");
    if (!row || state.modal !== "markets") return;
    const idx = Number(row.dataset.index);
    if (!Number.isFinite(idx) || idx === state.pickerIndex) return;
    state.pickerIndex = idx;
    $$(".picker-row").forEach((r) => r.classList.toggle("on", Number(r.dataset.index) === idx));
  });
  window.addEventListener("keydown", onKey);
  window.addEventListener("popstate", () => {
    state.path = stripBase(location.pathname);
    render();
  });
  window.addEventListener("resize", () => {
    placePills();
  });
  setInterval(tickMarkets, 1000);
}

boot();
