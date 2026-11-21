const TV_SYMBOLS = {
  BTC: "BINANCE:BTCUSDT",
  ETH: "BINANCE:ETHUSDT",
  SOL: "BINANCE:SOLUSDT",
  HYPE: "BYBIT:HYPEUSDT",
  BNB: "BINANCE:BNBUSDT",
  XRP: "BINANCE:XRPUSDT",
  DOGE: "BINANCE:DOGEUSDT",
  ADA: "BINANCE:ADAUSDT",
  AVAX: "BINANCE:AVAXUSDT",
  LINK: "BINANCE:LINKUSDT",
  SUI: "BINANCE:SUIUSDT",
  TON: "BINANCE:TONUSDT",
  ARB: "BINANCE:ARBUSDT",
  OP: "BINANCE:OPUSDT",
  PEPE: "BINANCE:PEPEUSDT",
  WIF: "BINANCE:WIFUSDT",
  TAO: "BINANCE:TAOUSDT",
  RENDER: "BINANCE:RENDERUSDT",
  FET: "BINANCE:FETUSDT",
  AAVE: "BINANCE:AAVEUSDT",
  UNI: "BINANCE:UNIUSDT",
  NEAR: "BINANCE:NEARUSDT",
  APT: "BINANCE:APTUSDT",
  TIA: "BINANCE:TIAUSDT",
  NVDA: "NASDAQ:NVDA",
  TSLA: "NASDAQ:TSLA",
  AAPL: "NASDAQ:AAPL",
  MSFT: "NASDAQ:MSFT",
  AMZN: "NASDAQ:AMZN",
  META: "NASDAQ:META",
  GOOGL: "NASDAQ:GOOGL",
  US500: "TVC:SPX",
  US100: "TVC:NDQ",
  US30: "TVC:DJI",
  XAU: "TVC:GOLD",
  XAG: "TVC:SILVER",
  USOIL: "TVC:USOIL",
  UKOIL: "TVC:UKOIL",
  EUR: "FX:EURUSD",
  DXI: "TVC:DXY",
  SPY: "AMEX:SPY",
  QQQ: "NASDAQ:QQQ",
  ADBE: "NASDAQ:ADBE",
  ASML: "NASDAQ:ASML",
  BA: "NYSE:BA",
  BAC: "NYSE:BAC",
  BIDU: "NASDAQ:BIDU",
  BILI: "NASDAQ:BILI",
  CPNG: "NYSE:CPNG",
  ALB: "NYSE:ALB",
  AI: "NYSE:AI",
  CATTL: "CME:LE1!",
  COFFC: "ICEUS:KC1!",
  COTTN: "ICEUS:CT1!",
  GASOL: "NYMEX:RB1!",
  HOG: "CME:HE1!",
  HOIL: "NYMEX:HO1!",
  OJ: "ICEUS:OJ1!",
  SOYB: "CBOT:ZS1!",
  SUGAR: "ICEUS:SB1!",
  WHEAT: "CBOT:ZW1!",
};

const INTERVALS = {
  "1m": "1",
  "5m": "5",
  "15m": "15",
  "1H": "60",
  "4H": "240",
  "1D": "D",
};

let tvLoader;

export function tvSymbol(market) {
  return TV_SYMBOLS[market.symbol] || null;
}

export function tvResolution(interval) {
  return INTERVALS[interval] || "15";
}

export function loadTradingView() {
  if (window.TradingView) return Promise.resolve(window.TradingView);
  if (tvLoader) return tvLoader;
  tvLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => resolve(window.TradingView);
    script.onerror = () => {
      tvLoader = null;
      reject(new Error("TradingView failed to load"));
    };
    document.head.appendChild(script);
  });
  return tvLoader;
}
