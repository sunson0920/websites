export const LOCALES = [
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { value: "zh", label: "中文", flag: "🇨🇳" },
  { value: "vn", label: "Tiếng Việt", flag: "🇻🇳" },
  { value: "ua", label: "Українська", flag: "🇺🇦" },
  { value: "ru", label: "Русский", flag: "🇷🇺" },
];

export const TIERS = [
  { id: "iron", name: "Iron", color: "#575757", vol: 0, boost: 0 },
  { id: "bronze", name: "Bronze", color: "#d39a6f", vol: 100_000, boost: 5 },
  { id: "silver", name: "Silver", color: "#d7d7d7", vol: 500_000, boost: 10 },
  { id: "gold", name: "Gold", color: "#c89e5e", vol: 2_000_000, boost: 15 },
  { id: "platinum", name: "Platinum", color: "#ababa3", vol: 10_000_000, boost: 25 },
  { id: "diamond", name: "Diamond", color: "#77c6e4", vol: 50_000_000, boost: 40 },
  { id: "infinity", name: "Infinity", color: "#f4f3f1", vol: 100_000_000, boost: 60 },
];

const raw = [
  ["BTC", "Bitcoin", "perp", "crypto", "infra", 50, 104280, 1.42, 2.48e9, 8.12e8, 2.06e12, 0.01, 8, "#F7931A"],
  ["ETH", "Ethereum", "perp", "crypto", "infra", 50, 3924.5, 0.86, 1.12e9, 4.4e8, 4.72e11, 0.0085, 8, "#627EEA"],
  ["SOL", "Solana", "perp", "crypto", "infra", 20, 228.42, 3.15, 6.4e8, 1.85e8, 1.18e11, 0.012, 8, "#14F195"],
  ["HYPE", "Hyperliquid", "perp", "crypto", "defi", 10, 28.64, 5.42, 2.1e8, 9.4e7, 9.6e9, 0.02, 1, "#97FCE4"],
  ["BNB", "BNB", "perp", "crypto", "infra", 20, 712.3, -0.42, 1.8e8, 6.2e7, 1.04e11, 0.006, 8, "#F3BA2F"],
  ["XRP", "XRP", "perp", "crypto", "infra", 20, 2.41, 1.08, 3.2e8, 7.5e7, 1.37e11, 0.009, 8, "#23292F"],
  ["DOGE", "Dogecoin", "perp", "crypto", "meme", 10, 0.384, 2.64, 2.4e8, 4.1e7, 5.6e10, 0.015, 8, "#C2A633"],
  ["ADA", "Cardano", "perp", "crypto", "infra", 10, 0.92, -1.12, 8.4e7, 2.2e7, 3.3e10, 0.01, 8, "#0033AD"],
  ["AVAX", "Avalanche", "perp", "crypto", "infra", 10, 42.18, 0.54, 6.1e7, 1.8e7, 1.7e10, 0.011, 8, "#E84142"],
  ["LINK", "Chainlink", "perp", "crypto", "defi", 10, 22.74, 1.96, 9.2e7, 2.6e7, 1.5e10, 0.007, 8, "#2A5ADA"],
  ["SUI", "Sui", "perp", "crypto", "infra", 10, 3.86, 4.21, 1.4e8, 3.3e7, 1.2e10, 0.018, 8, "#4DA2FF"],
  ["TON", "Toncoin", "perp", "crypto", "infra", 10, 6.12, -0.73, 4.8e7, 1.4e7, 1.55e10, 0.009, 8, "#0098EA"],
  ["ARB", "Arbitrum", "perp", "crypto", "infra", 10, 1.08, 0.33, 5.5e7, 1.6e7, 4.3e9, 0.01, 8, "#12AAFF"],
  ["OP", "Optimism", "perp", "crypto", "infra", 10, 1.94, -2.05, 3.2e7, 9.1e6, 2.4e9, 0.012, 8, "#FF0420"],
  ["PEPE", "Pepe", "perp", "crypto", "meme", 5, 0.00001284, 6.8, 1.9e8, 2.8e7, 5.4e9, 0.03, 4, "#3D9A45"],
  ["WIF", "dogwifhat", "perp", "crypto", "meme", 5, 2.16, -3.4, 7.7e7, 1.2e7, 2.16e9, 0.025, 4, "#E8B923"],
  ["TAO", "Bittensor", "perp", "crypto", "ai", 5, 612.4, 2.18, 4.4e7, 1.5e7, 6.4e9, 0.014, 8, "#FFFFFF"],
  ["RENDER", "Render", "perp", "crypto", "ai", 5, 8.42, 1.55, 2.8e7, 8.2e6, 4.4e9, 0.016, 8, "#CF1010"],
  ["FET", "Artificial Superintelligence", "perp", "crypto", "ai", 5, 1.62, 0.92, 2.1e7, 6.4e6, 4.2e9, 0.013, 8, "#1F2A44"],
  ["AAVE", "Aave", "perp", "crypto", "defi", 10, 312.5, -0.28, 3.6e7, 1.1e7, 4.7e9, 0.006, 8, "#B6509E"],
  ["UNI", "Uniswap", "perp", "crypto", "defi", 10, 12.84, 0.44, 2.9e7, 8.8e6, 7.7e9, 0.008, 8, "#FF007A"],
  ["NEAR", "NEAR", "perp", "crypto", "infra", 10, 5.48, 1.22, 2.4e7, 7.1e6, 6.6e9, 0.011, 8, "#00EC97"],
  ["APT", "Aptos", "perp", "crypto", "infra", 10, 9.72, -1.64, 3.1e7, 9.4e6, 5.8e9, 0.012, 8, "#2DD8A3"],
  ["TIA", "Celestia", "perp", "crypto", "infra", 5, 6.08, 2.9, 2.2e7, 6.6e6, 3.4e9, 0.017, 8, "#7B2BF9"],
  ["NVDA", "NVIDIA", "perp", "tradfi", "equities", 20, 178.42, 1.15, 4.6e8, 1.2e8, 4.36e12, 0.004, 8, "#76B900"],
  ["TSLA", "Tesla", "perp", "tradfi", "equities", 10, 412.6, -0.88, 2.2e8, 6.4e7, 1.32e12, 0.006, 8, "#E31937"],
  ["AAPL", "Apple", "perp", "tradfi", "equities", 10, 248.15, 0.22, 1.6e8, 4.8e7, 3.72e12, 0.003, 8, "#A2AAAD"],
  ["MSFT", "Microsoft", "perp", "tradfi", "equities", 10, 468.9, 0.41, 1.1e8, 3.2e7, 3.48e12, 0.003, 8, "#00A4EF"],
  ["AMZN", "Amazon", "perp", "tradfi", "equities", 10, 228.4, 0.67, 9.4e7, 2.7e7, 2.4e12, 0.004, 8, "#FF9900"],
  ["META", "Meta", "perp", "tradfi", "equities", 10, 712.2, 1.34, 8.8e7, 2.4e7, 1.8e12, 0.004, 8, "#0668E1"],
  ["GOOGL", "Alphabet", "perp", "tradfi", "equities", 10, 196.5, 0.18, 7.2e7, 2.1e7, 2.4e12, 0.003, 8, "#4285F4"],
  ["US500", "S&P 500", "perp", "tradfi", "indices", 20, 6842.5, 0.31, 5.5e8, 2.1e8, null, 0.002, 8, "#4C9AF8"],
  ["US100", "Nasdaq 100", "perp", "tradfi", "indices", 20, 24180, 0.48, 4.1e8, 1.6e8, null, 0.0025, 8, "#5FB1FB"],
  ["US30", "Dow Jones", "perp", "tradfi", "indices", 20, 44820, 0.12, 1.2e8, 4.4e7, null, 0.002, 8, "#A0AEC0"],
  ["XAU", "Gold", "perp", "tradfi", "commodities", 50, 4128.6, 0.36, 3.8e8, 1.9e8, null, 0.0015, 8, "#C89E5E"],
  ["XAU", "Gold", "swap", "tradfi", "commodities", 10, 4126.2, 0.28, 9.2e7, 4.1e7, null, 0.008, 24, "#C89E5E"],
  ["XAG", "Silver", "perp", "tradfi", "commodities", 20, 48.62, 0.84, 8.4e7, 2.6e7, null, 0.004, 8, "#D7D7D7"],
  ["USOIL", "WTI Crude", "perp", "tradfi", "commodities", 20, 78.44, -1.22, 1.1e8, 3.8e7, null, 0.005, 8, "#333333"],
  ["UKOIL", "Brent Crude", "perp", "tradfi", "commodities", 20, 82.15, -0.96, 6.4e7, 2.2e7, null, 0.005, 8, "#1F2938"],
  ["EUR", "EUR/USD", "perp", "tradfi", "fx", 50, 1.0842, -0.08, 2.2e8, 7.4e7, null, 0.001, 8, "#003399"],
  ["DXI", "Dollar Index", "perp", "tradfi", "fx", 20, 104.82, 0.14, 4.8e7, 1.6e7, null, 0.001, 8, "#55677C"],
  ["OPENAI", "OpenAI", "perp", "tradfi", "preipo", 5, 186.4, 2.4, 3.6e7, 1.8e7, 5.2e11, 0.02, 8, "#10A37F"],
  ["ANTHROPIC", "Anthropic", "perp", "tradfi", "preipo", 5, 94.2, 1.1, 1.4e7, 6.2e6, 1.8e11, 0.02, 8, "#D4A27F"],
  ["SPY", "SPDR S&P 500", "perp", "tradfi", "etf", 10, 682.4, 0.29, 6.6e7, 1.9e7, null, 0.002, 8, "#1C5BD9"],
  ["QQQ", "Invesco QQQ", "perp", "tradfi", "etf", 10, 588.1, 0.46, 5.1e7, 1.5e7, null, 0.0025, 8, "#2471EC"],
];

const soon = [
  ["CATTL", "Live Cattle", "commodities"],
  ["COFFC", "Coffee", "commodities"],
  ["COTTN", "Cotton", "commodities"],
  ["GASOL", "Gasoline", "commodities"],
  ["HOG", "Lean Hogs", "commodities"],
  ["HOIL", "Heating Oil", "commodities"],
  ["OJ", "Orange Juice", "commodities"],
  ["SOYB", "Soybeans", "commodities"],
  ["SUGAR", "Sugar", "commodities"],
  ["WHEAT", "Wheat", "commodities"],
  ["ADBE", "Adobe", "equities"],
  ["AI", "C3.ai", "ai"],
  ["ALB", "Albemarle", "equities"],
  ["ASML", "ASML", "equities"],
  ["BA", "Boeing", "equities"],
  ["BAC", "Bank of America", "equities"],
  ["BIDU", "Baidu", "equities"],
  ["BILI", "Bilibili", "equities"],
  ["CM", "Canadian Imperial Bank", "equities"],
  ["CPNG", "Coupang", "equities"],
];

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function spark(symbol, change) {
  const rnd = mulberry32(hash(symbol + "spark"));
  const pts = [];
  let v = 50;
  for (let i = 0; i < 28; i++) {
    v += (rnd() - 0.48) * 6 + change * 0.15;
    pts.push(v);
  }
  return pts;
}

export const MARKETS = raw.map((row) => {
  const [symbol, name, kind, venue, sector, maxLev, price, change, volume, oi, fdv, funding, hours, color] = row;
  return {
    id: `${symbol}-${kind}`,
    symbol,
    name,
    kind,
    venue,
    sector,
    maxLev,
    price,
    change,
    volume,
    oi,
    fdv,
    funding,
    hours,
    color,
    soon: false,
    spread: symbol === "BTC" || symbol === "ETH" ? 0.005 : symbol === "SOL" ? 0.008 : 0.02,
    spark: spark(symbol + kind, change),
  };
});

soon.forEach(([symbol, name, sector]) => {
  MARKETS.push({
    id: `${symbol}-swap`,
    symbol,
    name,
    kind: "swap",
    venue: "tradfi",
    sector,
    maxLev: 5,
    price: null,
    change: null,
    volume: null,
    oi: null,
    fdv: null,
    funding: null,
    hours: 24,
    color: "#55677C",
    soon: true,
    spread: 0,
    spark: [],
  });
});

export function getMarket(symbol, kind = "perp") {
  return (
    MARKETS.find((m) => m.symbol === symbol && m.kind === kind && !m.soon) ||
    MARKETS.find((m) => m.symbol === symbol && !m.soon) ||
    MARKETS[0]
  );
}

export const LEADERBOARD = [
  ["0x7a3c…91e2", "Diamond", 1842330, 912_000_000],
  ["0x12f0…44ab", "Platinum", 966420, 540_000_000],
  ["0x88de…10c4", "Gold", 612880, 288_000_000],
  ["0x4b19…e771", "Gold", 401225, 196_000_000],
  ["0xc0a2…55d8", "Silver", 288410, 142_000_000],
  ["0x91ee…0b3a", "Silver", 176640, 121_000_000],
  ["0x33d1…9af0", "Silver", 142208, 98_400_000],
  ["0xaa70…612c", "Bronze", 98440, 76_200_000],
  ["0x5e18…c49b", "Bronze", 72110, 64_800_000],
  ["0x2d44…18ef", "Bronze", 55320, 51_200_000],
  ["0xbb01…77a2", "Iron", 31880, 22_400_000],
  ["0x60c9…3d11", "Iron", 18440, 14_600_000],
];

export const ANNOUNCEMENTS = [
  {
    tag: "Listings",
    title: "New commodity swaps queued",
    body: "Cattle, coffee, cotton, gasoline, and other swap markets are marked Soon on the markets page.",
    time: "Nov 2, 2026",
  },
  {
    tag: "Trading",
    title: "Zero-fee perpetuals on 550+ markets",
    body: "Crypto, equities, indices, FX, metals, and pre-IPO contracts trade from one terminal with up to 50x leverage.",
    time: "Oct 28, 2026",
  },
  {
    tag: "Rewards",
    title: "Weekly points drop",
    body: "Points are awarded for activity on Omni and distributed every Friday for the previous week.",
    time: "Oct 24, 2026",
  },
];
