/*! For license information please see 4789.772f049a.js.LICENSE.txt */
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [4789],
  {
    4110: (e, t, r) => {
      "use strict";
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("positive integer expected, got " + e);
      }
      function n(e) {
        if (
          !(
            (t = e) instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
          )
        )
          throw new Error("Uint8Array expected");
        for (
          var t, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
          n < r;
          n++
        )
          i[n - 1] = arguments[n];
        if (i.length > 0 && !i.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + i + ", got length=" + e.length
          );
      }
      function s(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        i(e.outputLen), i(e.blockLen);
      }
      function o(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        n(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      r.d(t, {
        CC: () => o,
        DO: () => n,
        Fe: () => i,
        Ht: () => a,
        sd: () => s,
      });
    },
    4198: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => u });
      var i = r(51477),
        n = r(32692),
        s = r(83439),
        o = r(59586);
      const { use: a } = i,
        { useSyncExternalStore: c } = s,
        l = (e, t) => {
          const r = (0, i.useRef)();
          (0, i.useEffect)(() => {
            r.current = (0, n.JR)(e, t, !0);
          }),
            (0, i.useDebugValue)(r.current);
        },
        h = new WeakMap();
      function u(e, t) {
        const r = null == t ? void 0 : t.sync,
          s = (0, i.useRef)(),
          u = (0, i.useRef)();
        let d = !0;
        const p = c(
          (0, i.useCallback)(
            (t) => {
              const i = (0, o.B1)(e, t, r);
              return t(), i;
            },
            [e, r]
          ),
          () => {
            const t = (0, o.P9)(e, a);
            try {
              if (
                !d &&
                s.current &&
                u.current &&
                !(0, n.Hq)(s.current, t, u.current, new WeakMap())
              )
                return s.current;
            } catch (r) {}
            return t;
          },
          () => (0, o.P9)(e, a)
        );
        d = !1;
        const f = new WeakMap();
        (0, i.useEffect)(() => {
          (s.current = p), (u.current = f);
        }),
          l(p, f);
        const g = (0, i.useMemo)(() => new WeakMap(), []);
        return (0, n.tz)(p, f, g, h);
      }
    },
    6567: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => b,
          __asyncGenerator: () => v,
          __asyncValues: () => _,
          __await: () => w,
          __awaiter: () => h,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => P,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => n,
          __generator: () => u,
          __importDefault: () => S,
          __importStar: () => I,
          __makeTemplateObject: () => E,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => m,
          __values: () => f,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, s) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & s[0]
                          ? i.return
                          : s[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, s[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                    case 0:
                    case 1:
                      n = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(n = (n = o.trys).length > 0 && n[n.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < n[1]) {
                        (o.label = n[1]), (n = s);
                        break;
                      }
                      if (n && o.label < n[2]) {
                        (o.label = n[2]), o.ops.push(s);
                        break;
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; )
            o.push(i.value);
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++)
            i[n] = s[o];
        return i;
      }
      function w(e) {
        return this instanceof w ? ((this.v = e), this) : new w(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          s = [];
        return (
          (i = {}),
          o("next"),
          o("throw"),
          o("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                s.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof w
              ? Promise.resolve(r.value.v).then(c, l)
              : h(s[0][2], r);
          } catch (i) {
            h(s[0][3], i);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: w(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                (function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    8759: (e, t, r) => {
      var i = r(26159),
        n = r(13740),
        s = {
          eth: "1",
          jingtum: "2",
          moac: "3",
          eos: "4",
          enu: "5",
          bos: "6",
          iost: "7",
          cosmos: "8",
          binance: "9",
          tron: "10",
          trx: "10",
          btc: "11",
          bsc: "12",
          dot: "13",
          kusama: "14",
          heco: "15",
          okexchain: "16",
          oktest: "17",
          matic: "18",
          polygon: "18",
          hsc: "19",
          oec: "20",
          subgame: "21",
          klaytn: "22",
          avax: "23",
          arb: "24",
          ftm: "25",
          op: "26",
          solana: "27",
          gnosis: "28",
          wax: "29",
          moonbeam: "31",
          aurora: "32",
          harmony: "33",
          kcc: "35",
          cfxevm: "36",
          planton: "37",
          bttc: "38",
          gt: "39",
          halo: "40",
          etc: "41",
          arbnova: "42",
          aptos: "43",
          doge: "44",
          fvm: "45",
          zksync: "46",
          eosevm: "47",
          sui: "48",
          mantle: "49",
          linea: "50",
          base: "51",
          opbnb: "52",
          polygonzkevm: "53",
          core: "54",
          happ: "55",
          scroll: "56",
          zkfair: "57",
          manta: "58",
          bevm: "59",
          metis: "60",
          zeta: "62",
          kroma: "63",
          merlin: "64",
          blast: "65",
          bitlayer: "66",
          xlayer: "67",
          rgbln: "69",
          mint: "70",
          ton: "71",
        },
        o = {
          1: "eth",
          2: "jingtum",
          3: "moac",
          4: "eos",
          5: "enu",
          6: "bos",
          7: "iost",
          8: "cosmos",
          9: "binance",
          10: "tron",
          11: "btc",
          12: "bsc",
          13: "dot",
          14: "kusama",
          15: "heco",
          16: "okexchain",
          17: "oktest",
          18: "matic",
          19: "hsc",
          20: "oec",
          21: "subgame",
          22: "klaytn",
          23: "avax",
          24: "arb",
          25: "ftm",
          26: "op",
          27: "solana",
          28: "gnosis",
          29: "wax",
          31: "moonbeam",
          32: "aurora",
          33: "harmony",
          35: "kcc",
          36: "cfxevm",
          37: "planton",
          38: "bttc",
          39: "gt",
          40: "halo",
          41: "etc",
          42: "arbnova",
          43: "aptos",
          44: "doge",
          45: "fvm",
          46: "zksync",
          47: "eosevm",
          48: "sui",
          49: "mantle",
          50: "linea",
          51: "base",
          52: "opbnb",
          53: "polygonzkevm",
          54: "core",
          55: "happ",
          56: "scroll",
          57: "zkfair",
          58: "manta",
          59: "bevm",
          60: "metis",
          62: "zeta",
          63: "kroma",
          64: "merlin",
          65: "blast",
          66: "bitlayer",
          67: "xlayer",
          69: "rgbln",
          70: "mint",
          71: "ton",
        },
        a = function (e) {
          return (
            (e = (e += "").replace(/^\s+|\s+$/g, "").toLowerCase()), s[e] || e
          );
        },
        c = function () {
          var e = parseInt(1e5 * Math.random());
          return "tp_callback_" + new Date().getTime() + e;
        },
        l = function (e, t, r) {
          window.TPJSBrigeClient && window.TPJSBrigeClient.callMessage(e, t, r),
            window.webkit &&
              window.webkit.messageHandlers &&
              window.webkit.messageHandlers[e] &&
              window.webkit.messageHandlers[e].postMessage({
                body: { params: t, callback: r },
              });
        },
        h = {
          version: "3.7.13",
          isConnected: function () {
            return !!(
              window.TPJSBrigeClient ||
              (window.webkit &&
                window.webkit.messageHandlers &&
                window.webkit.messageHandlers.getNodeUrl)
            );
          },
          invokeQRScanner: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r).qrResult || "";
                  e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("invokeQRScanner", "", r);
            });
          },
          shareNewsToSNS: function (e) {
            var t = {
              title:
                e.title ||
                "TokenPocket \u4f60\u7684\u901a\u7528\u6570\u5b57\u94b1\u5305",
              description: e.desc || "",
              url: e.url || "https://www.mytokenpocket.vip/",
              previewImage: e.previewImage || "",
            };
            l("shareNewsToSNS", JSON.stringify(t), "");
          },
          getAppInfo: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("getAppInfo", "", r);
            });
          },
          getDeviceId: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  i.device_id && (i.data = i.device_id), e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("getDeviceId", "", r);
            });
          },
          getWalletList: function (e) {
            if (!(e = a(e))) throw new Error("type invalid");
            var t = { type: e };
            return new i(function (e, r) {
              var i = c();
              (window[i] = function (t) {
                t = t.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(t);
                  e(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getWalletList", JSON.stringify(t), i);
            });
          },
          getWallets: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  if (i.data && i.data.length)
                    for (var n = 0; n < i.data.length; n++)
                      i.data[n].blockchain =
                        o[i.data[n].blockchain_id + ""] ||
                        i.data[n].blockchain_id;
                  e(i);
                } catch (s) {
                  t(s);
                }
              }),
                l("getWallets", "", r);
            });
          },
          getCurrentWallet: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  i.rawTransaction && (i.data = i.rawTransaction),
                    i.data &&
                      i.data.blockchain_id &&
                      (i.data.blockchain =
                        o[i.data.blockchain_id + ""] || i.data.blockchain_id),
                    e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("getCurrentWallet", "", r);
            });
          },
          sign: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("sign", JSON.stringify(e), i);
            });
          },
          back: function () {
            l("back", "", "");
          },
          fullScreen: function (e) {
            l("fullScreen", JSON.stringify(e), "");
          },
          setMenubar: function (e) {
            l("setMenubar", JSON.stringify(e), "");
          },
          close: function () {
            l("close", "", "");
          },
          importWallet: function (e) {
            if (!(e = a(e))) throw new Error("type invalid");
            var t = { blockChainId: e };
            l("importWallet", JSON.stringify(t), "");
          },
          startChat: function (e) {
            e.blockchain &&
              ((e.blockChainId = a(e.blockchain)), delete e.blockchain),
              l("startChat", JSON.stringify(e), "");
          },
          getNodeUrl: function (e) {
            return (
              e.blockchain &&
                ((e.blockChainId = a(e.blockchain)), delete e.blockchain),
              new i(function (t, r) {
                var i = c();
                (window[i] = function (e) {
                  e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                  try {
                    var i = JSON.parse(e);
                    i.data &&
                      i.data.blockChainId &&
                      (i.blockchain =
                        o[i.data.blockChainId + ""] || i.data.blockChainId),
                      t(i);
                  } catch (n) {
                    r(n);
                  }
                }),
                  l("getNodeUrl", JSON.stringify(e), i);
              })
            );
          },
          saveImage: function (e) {
            l("saveImage", JSON.stringify(e), "");
          },
          rollHorizontal: function (e) {
            l("rollHorizontal", JSON.stringify(e), "");
          },
          popGestureRecognizerEnable: function (e) {
            l("popGestureRecognizerEnable", JSON.stringify(e), "");
          },
          forwardNavigationGesturesEnable: function (e) {
            l("forwardNavigationGesturesEnable", JSON.stringify(e), "");
          },
          isDarkMode: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("isDarkMode", "", r);
            });
          },
          eosTokenTransfer: function (e) {
            if (!e.from || !e.to || !e.amount || !e.contract || !e.precision)
              throw new Error(
                'missing params; "from", "to", "amount", "contract", "precision" is required '
              );
            return (
              (e.amount = "" + e.amount),
              new i(function (t, r) {
                var i = c();
                (window[i] = function (e) {
                  e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                  try {
                    var i = JSON.parse(e);
                    i.result &&
                      !i.data.transactionId &&
                      (i.data = { transactionId: i.data }),
                      t(i);
                  } catch (n) {
                    r(n);
                  }
                }),
                  l("eosTokenTransfer", JSON.stringify(e), i);
              })
            );
          },
          pushEosAction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  i.result &&
                    !i.data.transactionId &&
                    (i.data = { transactionId: i.data }),
                    t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("pushEosAction", JSON.stringify(e), i);
            });
          },
          getEosBalance: function (e) {
            if (!e.account || !e.contract || !e.symbol)
              throw new Error(
                'missing params; "account", "contract", "symbol" is required '
              );
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getEosBalance", JSON.stringify(e), i);
            });
          },
          getTableRows: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getTableRows", JSON.stringify(e), i);
            });
          },
          getEosTableRows: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getEosTableRows", JSON.stringify(e), i);
            });
          },
          getEosAccountInfo: function (e) {
            if (!e.account)
              throw new Error('missing params; "account" is required ');
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getEosAccountInfo", JSON.stringify(e), i);
            });
          },
          getEosTransactionRecord: function (e) {
            if (!e.account)
              throw new Error('missing params; "account" is required ');
            return (
              (e.count = e.count ? +e.count : 10),
              (e.start = e.start ? +e.start : 0),
              new i(function (t, r) {
                var i = c();
                (window[i] = function (e) {
                  e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                  try {
                    var i = JSON.parse(e);
                    t(i);
                  } catch (n) {
                    r(n);
                  }
                }),
                  l("getEosTransactionRecord", JSON.stringify(e), i);
              })
            );
          },
          eosAuthSign: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("eosAuthSign", JSON.stringify(e), i);
            });
          },
          enuTokenTransfer: function (e) {
            if (
              !e.from ||
              !e.to ||
              !e.amount ||
              !e.tokenName ||
              !e.contract ||
              !e.precision
            )
              throw new Error(
                'missing params; "from", "to", "amount", "tokenName","contract", "precision" is required '
              );
            return (
              (e.amount = "" + e.amount),
              new i(function (t, r) {
                var i = c();
                (window[i] = function (e) {
                  e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                  try {
                    var i = JSON.parse(e);
                    i.result &&
                      !i.data.transactionId &&
                      (i.data = { transactionId: i.data }),
                      t(i);
                  } catch (n) {
                    r(n);
                  }
                }),
                  l("enuTokenTransfer", JSON.stringify(e), i);
              })
            );
          },
          pushEnuAction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  i.result &&
                    !i.data.transactionId &&
                    (i.data = { transactionId: i.data }),
                    t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("pushEnuAction", JSON.stringify(e), i);
            });
          },
          getEnuBalance: function (e) {
            if (!e.account || !e.contract || !e.symbol)
              throw new Error(
                'missing params; "account", "contract", "symbol" is required '
              );
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getEnuBalance", JSON.stringify(e), i);
            });
          },
          getEnuTableRows: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getEnuTableRows", JSON.stringify(e), i);
            });
          },
          getEnuAccountInfo: function (e) {
            if (!e.account)
              throw new Error('missing params; "account" is required ');
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("getEnuAccountInfo", JSON.stringify(e), i);
            });
          },
          getEnuTransactionRecord: function (e) {
            if (!e.account)
              throw new Error('missing params; "account" is required ');
            return (
              (e.count = e.count ? +e.count : 10),
              (e.start = e.start ? +e.start : 0),
              new i(function (t, r) {
                var i = c();
                (window[i] = function (e) {
                  e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                  try {
                    var i = JSON.parse(e);
                    t(i);
                  } catch (n) {
                    r(n);
                  }
                }),
                  l("getEnuTransactionRecord", JSON.stringify(e), i);
              })
            );
          },
          pushMoacTransaction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("pushMoacTransaction", JSON.stringify(e), i);
            });
          },
          moacTokenTransfer: function (e) {
            if (!e.from || !e.to || !e.amount || !e.gasLimit || !e.tokenName)
              throw new Error(
                'missing params; "from", "to", "amount", "gasLimit", "tokenName" is required '
              );
            if (e.contract && !e.decimal)
              throw new Error('missing params; "decimal" is required ');
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("moacTokenTransfer", JSON.stringify(e), i);
            });
          },
          sendMoacTransaction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("sendMoacTransaction", JSON.stringify(e), i);
            });
          },
          sendEthTransaction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("sendEthTransaction", JSON.stringify(e), i);
            });
          },
          signMoacTransaction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("signMoacTransaction", JSON.stringify(e), i);
            });
          },
          signEthTransaction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("signEthTransaction", JSON.stringify(e), i);
            });
          },
          signCosmosTransaction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("signCosmosTransaction", JSON.stringify(e), i);
            });
          },
          cosmosArbitrarySignature: function (e, t) {
            var r = { address: e, data: t };
            return new i(function (e, t) {
              var i = c();
              (window[i] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("cosmosArbitrarySignature", JSON.stringify(r), i);
            });
          },
          signJingtumTransaction: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("signJingtumTransaction", JSON.stringify(e), i);
            });
          },
          signOkexchainTransaction: function (e, t) {
            return new i(function (r, i) {
              var s = c();
              window[s] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var t = JSON.parse(e);
                  t.result &&
                    t.data &&
                    t.data.signatures &&
                    es.data.signatures.forEach(function (e) {
                      (e.signature = e.signature && n.from(e.signature)),
                        (e.pub_key.value =
                          e.pub_key.value && n.from(e.pub_key.value));
                    }),
                    r(t);
                } catch (s) {
                  i(s);
                }
              };
              var o = { tx: e, from: t };
              l("signOkexchainTransaction", JSON.stringify(o), s);
            });
          },
          getCurrentBalance: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("getCurrentBalance", "", r);
            });
          },
          btcTokenTransfer: function (e) {
            if (!e.from || !e.to || !e.amount)
              throw new Error(
                'missing params; "from", "to", "amount" is required '
              );
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("btcTokenTransfer", JSON.stringify(e), i);
            });
          },
          usdtTokenTransfer: function (e) {
            if (!e.from || !e.to || !e.amount)
              throw new Error(
                'missing params; "from", "to", "amount" is required '
              );
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("usdtTokenTransfer", JSON.stringify(e), i);
            });
          },
          getUsdtAddress: function () {
            return new i(function (e, t) {
              var r = c();
              (window[r] = function (r) {
                r = r.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(r);
                  e(i);
                } catch (n) {
                  t(n);
                }
              }),
                l("getUsdtAddress", "", r);
            });
          },
          getWallet: function (e) {
            return (
              e.walletTypes && e.walletTypes.length
                ? (e.walletTypes = e.walletTypes.map(function (e) {
                    return s[e.toLowerCase()] || e;
                  }))
                : (e.walletTypes = []),
              void 0 === e.switch && (e.switch = !0),
              new i(function (t, r) {
                var i = c();
                (window[i] = function (e) {
                  e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                  try {
                    var i = JSON.parse(e);
                    i.data &&
                      i.data.blockchain_id &&
                      (i.data.blockchain =
                        o[i.data.blockchain_id + ""] || i.data.blockchain_id),
                      t(i);
                  } catch (n) {
                    r(n);
                  }
                }),
                  l("getWallet", JSON.stringify(e), i);
              })
            );
          },
          addDAppToDiscover: function (e) {
            return new i(function (t, r) {
              var i = c();
              (window[i] = function (e) {
                e = e.replace(/\r/gi, "").replace(/\n/gi, "");
                try {
                  var i = JSON.parse(e);
                  t(i);
                } catch (n) {
                  r(n);
                }
              }),
                l("addDAppToDiscover", JSON.stringify(e), i);
            });
          },
        };
      e.exports = h;
    },
    9955: (e, t, r) => {
      var i =
          ("undefined" !== typeof globalThis && globalThis) ||
          ("undefined" !== typeof self && self) ||
          ("undefined" !== typeof r.g && r.g),
        n = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = i.DOMException);
          }
          return (e.prototype = i), new e();
        })();
      !(function (e) {
        !(function (t) {
          var i =
              ("undefined" !== typeof e && e) ||
              ("undefined" !== typeof self && self) ||
              ("undefined" !== typeof r.g && r.g) ||
              {},
            n = "URLSearchParams" in i,
            s = "Symbol" in i && "iterator" in Symbol,
            o =
              "FileReader" in i &&
              "Blob" in i &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            a = "FormData" in i,
            c = "ArrayBuffer" in i;
          if (c)
            var l = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              h =
                ArrayBuffer.isView ||
                function (e) {
                  return e && l.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function u(e) {
            if (
              ("string" !== typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            )
              throw new TypeError(
                'Invalid character in header field name: "' + e + '"'
              );
            return e.toLowerCase();
          }
          function d(e) {
            return "string" !== typeof e && (e = String(e)), e;
          }
          function p(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              s &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function f(e) {
            (this.map = {}),
              e instanceof f
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    if (2 != e.length)
                      throw new TypeError(
                        "Headers constructor: expected name/value pair to be length 2, found" +
                          e.length
                      );
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function g(e) {
            if (!e._noBody)
              return e.bodyUsed
                ? Promise.reject(new TypeError("Already read"))
                : void (e.bodyUsed = !0);
          }
          function y(e) {
            return new Promise(function (t, r) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                });
            });
          }
          function m(e) {
            var t = new FileReader(),
              r = y(t);
            return t.readAsArrayBuffer(e), r;
          }
          function w(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function v() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t;
                (this.bodyUsed = this.bodyUsed),
                  (this._bodyInit = e),
                  e
                    ? "string" === typeof e
                      ? (this._bodyText = e)
                      : o && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : a && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : n && URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : c && o && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = w(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : c && (ArrayBuffer.prototype.isPrototypeOf(e) || h(e))
                      ? (this._bodyArrayBuffer = w(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : ((this._noBody = !0), (this._bodyText = "")),
                  this.headers.get("content-type") ||
                    ("string" === typeof e
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : n &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              o &&
                (this.blob = function () {
                  var e = g(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
              (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var e = g(this);
                  return (
                    e ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset +
                              this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                  );
                }
                if (o) return this.blob().then(m);
                throw new Error("could not read as ArrayBuffer");
              }),
              (this.text = function () {
                var e = g(this);
                if (e) return e;
                if (this._bodyBlob)
                  return (function (e) {
                    var t = new FileReader(),
                      r = y(t),
                      i = /charset=([A-Za-z0-9_-]+)/.exec(e.type),
                      n = i ? i[1] : "utf-8";
                    return t.readAsText(e, n), r;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e),
                          r = new Array(t.length),
                          i = 0;
                        i < t.length;
                        i++
                      )
                        r[i] = String.fromCharCode(t[i]);
                      return r.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              a &&
                (this.formData = function () {
                  return this.text().then(E);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (f.prototype.append = function (e, t) {
            (e = u(e)), (t = d(t));
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t;
          }),
            (f.prototype.delete = function (e) {
              delete this.map[u(e)];
            }),
            (f.prototype.get = function (e) {
              return (e = u(e)), this.has(e) ? this.map[e] : null;
            }),
            (f.prototype.has = function (e) {
              return this.map.hasOwnProperty(u(e));
            }),
            (f.prototype.set = function (e, t) {
              this.map[u(e)] = d(t);
            }),
            (f.prototype.forEach = function (e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (f.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                p(e)
              );
            }),
            (f.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                p(e)
              );
            }),
            (f.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                p(e)
              );
            }),
            s && (f.prototype[Symbol.iterator] = f.prototype.entries);
          var b = [
            "CONNECT",
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT",
            "TRACE",
          ];
          function _(e, t) {
            if (!(this instanceof _))
              throw new TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            var r = (t = t || {}).body;
            if (e instanceof _) {
              if (e.bodyUsed) throw new TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new f(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                r ||
                  null == e._bodyInit ||
                  ((r = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (!t.headers && this.headers) || (this.headers = new f(t.headers)),
              (this.method = (function (e) {
                var t = e.toUpperCase();
                return b.indexOf(t) > -1 ? t : e;
              })(t.method || this.method || "GET")),
              (this.mode = t.mode || this.mode || null),
              (this.signal =
                t.signal ||
                this.signal ||
                (function () {
                  if ("AbortController" in i)
                    return new AbortController().signal;
                })()),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && r)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            if (
              (this._initBody(r),
              ("GET" === this.method || "HEAD" === this.method) &&
                ("no-store" === t.cache || "no-cache" === t.cache))
            ) {
              var n = /([?&])_=[^&]*/;
              if (n.test(this.url))
                this.url = this.url.replace(n, "$1_=" + new Date().getTime());
              else {
                this.url +=
                  (/\?/.test(this.url) ? "&" : "?") +
                  "_=" +
                  new Date().getTime();
              }
            }
          }
          function E(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var r = e.split("="),
                      i = r.shift().replace(/\+/g, " "),
                      n = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(i), decodeURIComponent(n));
                  }
                }),
              t
            );
          }
          function I(e) {
            var t = new f();
            return (
              e
                .replace(/\r?\n[\t ]+/g, " ")
                .split("\r")
                .map(function (e) {
                  return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                })
                .forEach(function (e) {
                  var r = e.split(":"),
                    i = r.shift().trim();
                  if (i) {
                    var n = r.join(":").trim();
                    try {
                      t.append(i, n);
                    } catch (s) {
                      console.warn("Response " + s.message);
                    }
                  }
                }),
              t
            );
          }
          function S(e, t) {
            if (!(this instanceof S))
              throw new TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            if (
              (t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              this.status < 200 || this.status > 599)
            )
              throw new RangeError(
                "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
              );
            (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText =
                void 0 === t.statusText ? "" : "" + t.statusText),
              (this.headers = new f(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (_.prototype.clone = function () {
            return new _(this, { body: this._bodyInit });
          }),
            v.call(_.prototype),
            v.call(S.prototype),
            (S.prototype.clone = function () {
              return new S(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new f(this.headers),
                url: this.url,
              });
            }),
            (S.error = function () {
              var e = new S(null, { status: 200, statusText: "" });
              return (e.ok = !1), (e.status = 0), (e.type = "error"), e;
            });
          var O = [301, 302, 303, 307, 308];
          (S.redirect = function (e, t) {
            if (-1 === O.indexOf(t))
              throw new RangeError("Invalid status code");
            return new S(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = i.DOMException);
          try {
            new t.DOMException();
          } catch (x) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function P(e, r) {
            return new Promise(function (n, s) {
              var a = new _(e, r);
              if (a.signal && a.signal.aborted)
                return s(new t.DOMException("Aborted", "AbortError"));
              var l = new XMLHttpRequest();
              function h() {
                l.abort();
              }
              if (
                ((l.onload = function () {
                  var e = {
                    statusText: l.statusText,
                    headers: I(l.getAllResponseHeaders() || ""),
                  };
                  0 === a.url.indexOf("file://") &&
                  (l.status < 200 || l.status > 599)
                    ? (e.status = 200)
                    : (e.status = l.status),
                    (e.url =
                      "responseURL" in l
                        ? l.responseURL
                        : e.headers.get("X-Request-URL"));
                  var t = "response" in l ? l.response : l.responseText;
                  setTimeout(function () {
                    n(new S(t, e));
                  }, 0);
                }),
                (l.onerror = function () {
                  setTimeout(function () {
                    s(new TypeError("Network request failed"));
                  }, 0);
                }),
                (l.ontimeout = function () {
                  setTimeout(function () {
                    s(new TypeError("Network request timed out"));
                  }, 0);
                }),
                (l.onabort = function () {
                  setTimeout(function () {
                    s(new t.DOMException("Aborted", "AbortError"));
                  }, 0);
                }),
                l.open(
                  a.method,
                  (function (e) {
                    try {
                      return "" === e && i.location.href ? i.location.href : e;
                    } catch (t) {
                      return e;
                    }
                  })(a.url),
                  !0
                ),
                "include" === a.credentials
                  ? (l.withCredentials = !0)
                  : "omit" === a.credentials && (l.withCredentials = !1),
                "responseType" in l &&
                  (o
                    ? (l.responseType = "blob")
                    : c && (l.responseType = "arraybuffer")),
                r &&
                  "object" === typeof r.headers &&
                  !(
                    r.headers instanceof f ||
                    (i.Headers && r.headers instanceof i.Headers)
                  ))
              ) {
                var p = [];
                Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                  p.push(u(e)), l.setRequestHeader(e, d(r.headers[e]));
                }),
                  a.headers.forEach(function (e, t) {
                    -1 === p.indexOf(t) && l.setRequestHeader(t, e);
                  });
              } else
                a.headers.forEach(function (e, t) {
                  l.setRequestHeader(t, e);
                });
              a.signal &&
                (a.signal.addEventListener("abort", h),
                (l.onreadystatechange = function () {
                  4 === l.readyState &&
                    a.signal.removeEventListener("abort", h);
                })),
                l.send("undefined" === typeof a._bodyInit ? null : a._bodyInit);
            });
          }
          (P.polyfill = !0),
            i.fetch ||
              ((i.fetch = P),
              (i.Headers = f),
              (i.Request = _),
              (i.Response = S)),
            (t.Headers = f),
            (t.Request = _),
            (t.Response = S),
            (t.fetch = P),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })({});
      })(n),
        (n.fetch.ponyfill = !0),
        delete n.fetch.polyfill;
      var s = i.fetch ? i : n;
      ((t = s.fetch).default = s.fetch),
        (t.fetch = s.fetch),
        (t.Headers = s.Headers),
        (t.Request = s.Request),
        (t.Response = s.Response),
        (e.exports = t);
    },
    11775: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(6567);
      i.__exportStar(r(86342), t), i.__exportStar(r(19720), t);
    },
    15162: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      const i = r(82505);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    18085: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => i });
      const i = "standard:events";
    },
    19720: (e, t, r) => {
      "use strict";
      var i = r(52143);
      function n() {
        return (
          "undefined" === typeof document &&
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function s() {
        return (
          "undefined" !== typeof i &&
          "undefined" !== typeof i.versions &&
          "undefined" !== typeof i.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = n),
        (t.isNode = s),
        (t.isBrowser = function () {
          return !n() && !s();
        });
    },
    20922: (e, t, r) => {
      "use strict";
      function i(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      r.d(t, { A: () => n });
      const n = function e(t, r) {
        if (t === r) return !0;
        if (null == t || null == r) return !1;
        if (Array.isArray(t))
          return (
            Array.isArray(r) &&
            t.length === r.length &&
            t.every(function (t, i) {
              return e(t, r[i]);
            })
          );
        if ("object" === typeof t || "object" === typeof r) {
          var n = i(t),
            s = i(r);
          return n !== t || s !== r
            ? e(n, s)
            : Object.keys(Object.assign({}, t, r)).every(function (i) {
                return e(t[i], r[i]);
              });
        }
        return !1;
      };
    },
    25742: (e, t, r) => {
      "use strict";
      r.d(t, { lY: () => T });
      var i = r(4110);
      const n = BigInt(2 ** 32 - 1),
        s = BigInt(32);
      function o(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & n), l: Number((e >> s) & n) }
          : { h: 0 | Number((e >> s) & n), l: 0 | Number(e & n) };
      }
      function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = new Uint32Array(e.length),
          i = new Uint32Array(e.length);
        for (let n = 0; n < e.length; n++) {
          const { h: s, l: a } = o(e[n], t);
          [r[n], i[n]] = [s, a];
        }
        return [r, i];
      }
      const c = (e, t, r) => (e << r) | (t >>> (32 - r)),
        l = (e, t, r) => (t << r) | (e >>> (32 - r)),
        h = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        u = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      var d = r(95386);
      const p = [],
        f = [],
        g = [],
        y = BigInt(0),
        m = BigInt(1),
        w = BigInt(2),
        v = BigInt(7),
        b = BigInt(256),
        _ = BigInt(113);
      for (let A = 0, N = m, R = 1, k = 0; A < 24; A++) {
        ([R, k] = [k, (2 * R + 3 * k) % 5]),
          p.push(2 * (5 * k + R)),
          f.push((((A + 1) * (A + 2)) / 2) % 64);
        let e = y;
        for (let t = 0; t < 7; t++)
          (N = ((N << m) ^ ((N >> v) * _)) % b),
            N & w && (e ^= m << ((m << BigInt(t)) - m));
        g.push(e);
      }
      const [E, I] = a(g, !0),
        S = (e, t, r) => (r > 32 ? h(e, t, r) : c(e, t, r)),
        O = (e, t, r) => (r > 32 ? u(e, t, r) : l(e, t, r));
      class P extends d.Vw {
        constructor(e, t, r) {
          let n =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 24;
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = n),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, i.Fe)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, d.DH)(this.state));
        }
        keccak() {
          d.qv || (0, d.Fc)(this.state32),
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 24;
              const r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let i = 0; i < 10; i++)
                  r[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
                for (let i = 0; i < 10; i += 2) {
                  const t = (i + 8) % 10,
                    n = (i + 2) % 10,
                    s = r[n],
                    o = r[n + 1],
                    a = S(s, o, 1) ^ r[t],
                    c = O(s, o, 1) ^ r[t + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[i + r] ^= a), (e[i + r + 1] ^= c);
                }
                let t = e[2],
                  n = e[3];
                for (let r = 0; r < 24; r++) {
                  const i = f[r],
                    s = S(t, n, i),
                    o = O(t, n, i),
                    a = p[r];
                  (t = e[a]), (n = e[a + 1]), (e[a] = s), (e[a + 1] = o);
                }
                for (let i = 0; i < 50; i += 10) {
                  for (let t = 0; t < 10; t++) r[t] = e[i + t];
                  for (let t = 0; t < 10; t++)
                    e[i + t] ^= ~r[(t + 2) % 10] & r[(t + 4) % 10];
                }
                (e[0] ^= E[i]), (e[1] ^= I[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            d.qv || (0, d.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, i.CC)(this);
          const { blockLen: t, state: r } = this,
            n = (e = (0, d.ZJ)(e)).length;
          for (let i = 0; i < n; ) {
            const s = Math.min(t - this.pos, n - i);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            0 !== (128 & t) && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, i.CC)(this, !1), (0, i.DO)(e), this.finish();
          const t = this.state,
            { blockLen: r } = this;
          for (let i = 0, n = e.length; i < n; ) {
            this.posOut >= r && this.keccak();
            const s = Math.min(r - this.posOut, n - i);
            e.set(t.subarray(this.posOut, this.posOut + s), i),
              (this.posOut += s),
              (i += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, i.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, i.Ht)(e, this), this.finished))
            throw new Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          const {
            blockLen: t,
            suffix: r,
            outputLen: i,
            rounds: n,
            enableXOF: s,
          } = this;
          return (
            e || (e = new P(t, r, i, s, n)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = n),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      const x = (e, t, r) => (0, d.ld)(() => new P(t, e, r)),
        T = x(1, 136, 32);
    },
    27671: (e, t, r) => {
      "use strict";
      var i;
      r.d(t, { v4: () => u });
      var n = new Uint8Array(16);
      function s() {
        if (
          !i &&
          !(i =
            ("undefined" !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" !== typeof msCrypto &&
              "function" === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return i(n);
      }
      const o =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const a = function (e) {
        return "string" === typeof e && o.test(e);
      };
      for (var c = [], l = 0; l < 256; ++l)
        c.push((l + 256).toString(16).substr(1));
      const h = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (
            c[e[t + 0]] +
            c[e[t + 1]] +
            c[e[t + 2]] +
            c[e[t + 3]] +
            "-" +
            c[e[t + 4]] +
            c[e[t + 5]] +
            "-" +
            c[e[t + 6]] +
            c[e[t + 7]] +
            "-" +
            c[e[t + 8]] +
            c[e[t + 9]] +
            "-" +
            c[e[t + 10]] +
            c[e[t + 11]] +
            c[e[t + 12]] +
            c[e[t + 13]] +
            c[e[t + 14]] +
            c[e[t + 15]]
          ).toLowerCase();
        if (!a(r)) throw TypeError("Stringified UUID is invalid");
        return r;
      };
      const u = function (e, t, r) {
        var i = (e = e || {}).random || (e.rng || s)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
          r = r || 0;
          for (var n = 0; n < 16; ++n) t[r + n] = i[n];
          return t;
        }
        return h(i);
      };
    },
    28619: (e, t) => {
      "use strict";
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.errorMessages = t.ErrorType = void 0),
        (function (e) {
          (e.MalformedUnicode = "MALFORMED_UNICODE"),
            (e.MalformedHexadecimal = "MALFORMED_HEXADECIMAL"),
            (e.CodePointLimit = "CODE_POINT_LIMIT"),
            (e.OctalDeprecation = "OCTAL_DEPRECATION"),
            (e.EndOfString = "END_OF_STRING");
        })((r = t.ErrorType || (t.ErrorType = {}))),
        (t.errorMessages = new Map([
          [r.MalformedUnicode, "malformed Unicode character escape sequence"],
          [
            r.MalformedHexadecimal,
            "malformed hexadecimal character escape sequence",
          ],
          [
            r.CodePointLimit,
            "Unicode codepoint must not be greater than 0x10FFFF in escape sequence",
          ],
          [
            r.OctalDeprecation,
            '"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead',
          ],
          [r.EndOfString, "malformed escape sequence at end of string"],
        ]));
    },
    34254: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IWatch = void 0);
      t.IWatch = class {};
    },
    34470: (e, t, r) => {
      "use strict";
      var i = r(51477);
      var n =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        s = i.useState,
        o = i.useEffect,
        a = i.useLayoutEffect,
        c = i.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !n(e, r);
        } catch (i) {
          return !0;
        }
      }
      var h =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                i = s({ inst: { value: r, getSnapshot: t } }),
                n = i[0].inst,
                h = i[1];
              return (
                a(
                  function () {
                    (n.value = r), (n.getSnapshot = t), l(n) && h({ inst: n });
                  },
                  [e, r, t]
                ),
                o(
                  function () {
                    return (
                      l(n) && h({ inst: n }),
                      e(function () {
                        l(n) && h({ inst: n });
                      })
                    );
                  },
                  [e]
                ),
                c(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : h;
    },
    35146: (e, t, r) => {
      "use strict";
      t.g = void 0;
      const i = r(98895);
      t.g = function () {
        let e, t;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (s) {
          return null;
        }
        function r() {
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          const n = e.getElementsByTagName("meta");
          for (let e = 0; e < n.length; e++) {
            const t = n[e],
              i = ["itemprop", "property", "name"]
                .map((e) => t.getAttribute(e))
                .filter((e) => !!e && r.includes(e));
            if (i.length && i) {
              const e = t.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        const n = (function () {
          let t = r("name", "og:site_name", "og:title", "twitter:title");
          return t || (t = e.title), t;
        })();
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: t.origin,
          icons: (function () {
            const r = e.getElementsByTagName("link"),
              i = [];
            for (let e = 0; e < r.length; e++) {
              const n = r[e],
                s = n.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                const e = n.getAttribute("href");
                if (e)
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      const i = t.pathname.split("/");
                      i.pop();
                      r += i.join("/") + "/" + e;
                    }
                    i.push(r);
                  } else if (0 === e.indexOf("//")) {
                    const r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
              }
            }
            return i;
          })(),
          name: n,
        };
      };
    },
    39190: (e, t, r) => {
      "use strict";
      t.MH = void 0;
      const i = r(28619);
      function n(e, t, r) {
        const n = (function (e) {
          return e.match(/[^a-f0-9]/i) ? NaN : parseInt(e, 16);
        })(e);
        if (Number.isNaN(n) || (void 0 !== r && r !== e.length))
          throw new SyntaxError(i.errorMessages.get(t));
        return n;
      }
      function s(e, t) {
        const r = n(e, i.ErrorType.MalformedUnicode, 4);
        if (void 0 !== t) {
          const e = n(t, i.ErrorType.MalformedUnicode, 4);
          return String.fromCharCode(r, e);
        }
        return String.fromCharCode(r);
      }
      const o = new Map([
        ["b", "\b"],
        ["f", "\f"],
        ["n", "\n"],
        ["r", "\r"],
        ["t", "\t"],
        ["v", "\v"],
        ["0", "\0"],
      ]);
      const a =
        /\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e.replace(a, function (e, r, a, c, l, h, u, d, p) {
          if (void 0 !== r) return "\\";
          if (void 0 !== a)
            return (function (e) {
              const t = n(e, i.ErrorType.MalformedHexadecimal, 2);
              return String.fromCharCode(t);
            })(a);
          if (void 0 !== c)
            return (function (e) {
              if ("{" !== (t = e).charAt(0) || "}" !== t.charAt(t.length - 1))
                throw new SyntaxError(
                  i.errorMessages.get(i.ErrorType.MalformedUnicode)
                );
              var t;
              const r = n(e.slice(1, -1), i.ErrorType.MalformedUnicode);
              try {
                return String.fromCodePoint(r);
              } catch (s) {
                throw s instanceof RangeError
                  ? new SyntaxError(
                      i.errorMessages.get(i.ErrorType.CodePointLimit)
                    )
                  : s;
              }
            })(c);
          if (void 0 !== l) return s(l, h);
          if (void 0 !== u) return s(u);
          if ("0" === d) return "\0";
          if (void 0 !== d)
            return (function (e) {
              if (
                arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1]
              )
                throw new SyntaxError(
                  i.errorMessages.get(i.ErrorType.OctalDeprecation)
                );
              const t = parseInt(e, 8);
              return String.fromCharCode(t);
            })(d, !t);
          if (void 0 !== p) return (f = p), o.get(f) || f;
          var f;
          throw new SyntaxError(i.errorMessages.get(i.ErrorType.EndOfString));
        });
      }
      t.MH = c;
    },
    41915: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => o });
      var i,
        n = function (e, t, r, i) {
          if ("a" === r && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" === typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e);
        },
        s = function (e, t, r, i, n) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !n)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" === typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        };
      function o(e) {
        const t = (t) => {
          let { register: r } = t;
          return r(e);
        };
        try {
          window.dispatchEvent(new a(t));
        } catch (r) {
          console.error(
            "wallet-standard:register-wallet event could not be dispatched\n",
            r
          );
        }
        try {
          window.addEventListener("wallet-standard:app-ready", (e) => {
            let { detail: r } = e;
            return t(r);
          });
        } catch (r) {
          console.error(
            "wallet-standard:app-ready event listener could not be added\n",
            r
          );
        }
      }
      class a extends Event {
        get detail() {
          return n(this, i, "f");
        }
        get type() {
          return "wallet-standard:register-wallet";
        }
        constructor(e) {
          super("wallet-standard:register-wallet", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            i.set(this, void 0),
            s(this, i, e, "f");
        }
        preventDefault() {
          throw new Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw new Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw new Error("stopPropagation cannot be called");
        }
      }
      i = new WeakMap();
    },
    48438: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    50567: (e) => {
      "use strict";
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    50771: (e, t, r) => {
      "use strict";
      r.d(t, {
        D5: () => P,
        U5: () => O,
        h6: () => n.a,
        iP: () => I,
        oI: () => S,
      });
      var i = r(68867),
        n = r.n(i),
        s = r(92131);
      const o = { level: "info" },
        a = "custom_context",
        c = 1024e3;
      class l {
        constructor(e) {
          (this.nodeValue = e),
            (this.sizeInBytes = new TextEncoder().encode(
              this.nodeValue
            ).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      }
      class h {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          const t = new l(e);
          if (t.size > this.maxSizeInBytes)
            throw new Error(
              `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
            );
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head
            ? (this.tail && (this.tail.next = t), (this.tail = t))
            : ((this.head = t), (this.tail = t)),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          const e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          const e = [];
          let t = this.head;
          for (; null !== t; ) e.push(t.value), (t = t.next);
          return e;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let e = this.head;
          return {
            next: () => {
              if (!e) return { done: !0, value: null };
              const t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class u {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
          (this.level = null !== e && void 0 !== e ? e : "error"),
            (this.levelValue = i.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new h(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === i.levels.values.error
            ? console.error(e)
            : t === i.levels.values.warn
            ? console.warn(e)
            : t === i.levels.values.debug
            ? console.debug(e)
            : t === i.levels.values.trace
            ? console.trace(e)
            : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append(
            (0, s.h)({ timestamp: new Date().toISOString(), log: e })
          );
          const t = "string" == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new h(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          const t = this.getLogArray();
          return (
            t.push((0, s.h)({ extraMetadata: e })),
            new Blob(t, { type: "application/json" })
          );
        }
      }
      class d {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
          this.baseChunkLogger = new u(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
        downloadLogsBlobInBrowser(e) {
          const t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement("a");
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class p {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
          this.baseChunkLogger = new u(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
      }
      var f = Object.defineProperty,
        g = Object.defineProperties,
        y = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        b = (e, t, r) =>
          t in e
            ? f(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        _ = (e, t) => {
          for (var r in t || (t = {})) w.call(t, r) && b(e, r, t[r]);
          if (m) for (var r of m(t)) v.call(t, r) && b(e, r, t[r]);
          return e;
        },
        E = (e, t) => g(e, y(t));
      function I(e) {
        return E(_({}, e), {
          level: (null === e || void 0 === e ? void 0 : e.level) || o.level,
        });
      }
      function S(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
          r = "";
        return (
          (r =
            typeof e.bindings > "u"
              ? (function (e) {
                  return (
                    e[
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : a
                    ] || ""
                  );
                })(e, t)
              : e.bindings().context || ""),
          r
        );
      }
      function O(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
        const i = (function (e, t) {
          const r = S(
            e,
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a
          );
          return r.trim() ? `${r}/${t}` : t;
        })(e, t, r);
        return (function (e, t) {
          return (
            (e[
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a
            ] = t),
            e
          );
        })(e.child({ context: i }), i, r);
      }
      function P(e) {
        return typeof e.loggerOverride < "u" &&
          "string" != typeof e.loggerOverride
          ? { logger: e.loggerOverride, chunkLoggerController: null }
          : typeof window < "u"
          ? (function (e) {
              var t, r;
              const i = new d(
                null == (t = e.opts) ? void 0 : t.level,
                e.maxSizeInBytes
              );
              return {
                logger: n()(
                  E(_({}, e.opts), {
                    level: "trace",
                    browser: E(
                      _({}, null == (r = e.opts) ? void 0 : r.browser),
                      { write: (e) => i.write(e) }
                    ),
                  })
                ),
                chunkLoggerController: i,
              };
            })(e)
          : (function (e) {
              var t;
              const r = new p(
                null == (t = e.opts) ? void 0 : t.level,
                e.maxSizeInBytes
              );
              return {
                logger: n()(E(_({}, e.opts), { level: "trace" }), r),
                chunkLoggerController: r,
              };
            })(e);
      }
    },
    50808: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    57293: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      r(62223).__exportStar(r(34254), t);
    },
    57297: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(62223);
      i.__exportStar(r(48438), t), i.__exportStar(r(15162), t);
    },
    59586: (e, t, r) => {
      "use strict";
      r.d(t, { B1: () => h, BX: () => l, KR: () => d, P9: () => u });
      var i = r(32692);
      const n = (e) => "object" === typeof e && null !== e,
        s = new WeakMap(),
        o = new WeakSet(),
        a = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Object.is,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (e, t) => new Proxy(e, t),
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : (e) =>
                    n(e) &&
                    !o.has(e) &&
                    (Array.isArray(e) || !(Symbol.iterator in e)) &&
                    !(e instanceof WeakMap) &&
                    !(e instanceof WeakSet) &&
                    !(e instanceof Error) &&
                    !(e instanceof Number) &&
                    !(e instanceof Date) &&
                    !(e instanceof String) &&
                    !(e instanceof RegExp) &&
                    !(e instanceof ArrayBuffer),
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : (e) => {
                    switch (e.status) {
                      case "fulfilled":
                        return e.value;
                      case "rejected":
                        throw e.reason;
                      default:
                        throw e;
                    }
                  },
            c =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : new WeakMap(),
            l =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : function (e, t) {
                    let r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : a;
                    const n = c.get(e);
                    if ((null == n ? void 0 : n[0]) === t) return n[1];
                    const h = Array.isArray(e)
                      ? []
                      : Object.create(Object.getPrototypeOf(e));
                    return (
                      (0, i.OC)(h, !0),
                      c.set(e, [t, h]),
                      Reflect.ownKeys(e).forEach((t) => {
                        if (Object.getOwnPropertyDescriptor(h, t)) return;
                        const n = Reflect.get(e, t),
                          { enumerable: a } = Reflect.getOwnPropertyDescriptor(
                            e,
                            t
                          ),
                          c = { value: n, enumerable: a, configurable: !0 };
                        if (o.has(n)) (0, i.OC)(n, !1);
                        else if (n instanceof Promise)
                          delete c.value, (c.get = () => r(n));
                        else if (s.has(n)) {
                          const [e, t] = s.get(n);
                          c.value = l(e, t(), r);
                        }
                        Object.defineProperty(h, t, c);
                      }),
                      Object.preventExtensions(h)
                    );
                  },
            h =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : new WeakMap(),
            u =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : [1, 1],
            d =
              arguments.length > 8 && void 0 !== arguments[8]
                ? arguments[8]
                : (a) => {
                    if (!n(a)) throw new Error("object required");
                    const c = h.get(a);
                    if (c) return c;
                    let p = u[0];
                    const f = new Set(),
                      g = function (e) {
                        let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : ++u[0];
                        p !== t && ((p = t), f.forEach((r) => r(e, t)));
                      };
                    let y = u[1];
                    const m = (e) => (t, r) => {
                        const i = [...t];
                        (i[1] = [e, ...i[1]]), g(i, r);
                      },
                      w = new Map(),
                      v = (e) => {
                        var t;
                        const r = w.get(e);
                        r && (w.delete(e), null == (t = r[1]) || t.call(r));
                      },
                      b = Array.isArray(a)
                        ? []
                        : Object.create(Object.getPrototypeOf(a)),
                      _ = t(b, {
                        deleteProperty(e, t) {
                          const r = Reflect.get(e, t);
                          v(t);
                          const i = Reflect.deleteProperty(e, t);
                          return i && g(["delete", [t], r]), i;
                        },
                        set(t, a, c, l) {
                          const u = Reflect.has(t, a),
                            p = Reflect.get(t, a, l);
                          if (u && (e(p, c) || (h.has(c) && e(p, h.get(c)))))
                            return !0;
                          v(a), n(c) && (c = (0, i.Ai)(c) || c);
                          let y = c;
                          if (c instanceof Promise)
                            c.then((e) => {
                              (c.status = "fulfilled"),
                                (c.value = e),
                                g(["resolve", [a], e]);
                            }).catch((e) => {
                              (c.status = "rejected"),
                                (c.reason = e),
                                g(["reject", [a], e]);
                            });
                          else {
                            !s.has(c) && r(c) && (y = d(c));
                            const e = !o.has(y) && s.get(y);
                            e &&
                              ((e, t) => {
                                if (w.has(e))
                                  throw new Error(
                                    "prop listener already exists"
                                  );
                                if (f.size) {
                                  const r = t[3](m(e));
                                  w.set(e, [t, r]);
                                } else w.set(e, [t]);
                              })(a, e);
                          }
                          return (
                            Reflect.set(t, a, y, l), g(["set", [a], c, p]), !0
                          );
                        },
                      });
                    h.set(a, _);
                    const E = [
                      b,
                      function () {
                        let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : ++u[1];
                        return (
                          y === e ||
                            f.size ||
                            ((y = e),
                            w.forEach((t) => {
                              let [r] = t;
                              const i = r[1](e);
                              i > p && (p = i);
                            })),
                          p
                        );
                      },
                      l,
                      (e) => {
                        f.add(e),
                          1 === f.size &&
                            w.forEach((e, t) => {
                              let [r, i] = e;
                              if (i) throw new Error("remove already exists");
                              const n = r[3](m(t));
                              w.set(t, [r, n]);
                            });
                        return () => {
                          f.delete(e),
                            0 === f.size &&
                              w.forEach((e, t) => {
                                let [r, i] = e;
                                i && (i(), w.set(t, [r]));
                              });
                        };
                      },
                    ];
                    return (
                      s.set(_, E),
                      Reflect.ownKeys(a).forEach((e) => {
                        const t = Object.getOwnPropertyDescriptor(a, e);
                        "value" in t &&
                          ((_[e] = a[e]), delete t.value, delete t.writable),
                          Object.defineProperty(b, e, t);
                      }),
                      _
                    );
                  };
          return [d, s, o, e, t, r, a, c, l, h, u];
        },
        [c] = a();
      function l() {
        return c(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        );
      }
      function h(e, t, r) {
        const i = s.get(e);
        let n;
        i || console.warn("Please use proxy object");
        const o = [],
          a = i[3];
        let c = !1;
        const l = a((e) => {
          o.push(e),
            r
              ? t(o.splice(0))
              : n ||
                (n = Promise.resolve().then(() => {
                  (n = void 0), c && t(o.splice(0));
                }));
        });
        return (
          (c = !0),
          () => {
            (c = !1), l();
          }
        );
      }
      function u(e, t) {
        const r = s.get(e);
        r || console.warn("Please use proxy object");
        const [i, n, o] = r;
        return o(i, n(), t);
      }
      function d(e) {
        return o.add(e), e;
      }
    },
    61133: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    62223: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => b,
          __asyncGenerator: () => v,
          __asyncValues: () => _,
          __await: () => w,
          __awaiter: () => h,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldSet: () => P,
          __createBinding: () => d,
          __decorate: () => a,
          __exportStar: () => p,
          __extends: () => n,
          __generator: () => u,
          __importDefault: () => S,
          __importStar: () => I,
          __makeTemplateObject: () => E,
          __metadata: () => l,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => m,
          __values: () => f,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, s) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          n,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & s[0]
                          ? i.return
                          : s[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, s[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                    case 0:
                    case 1:
                      n = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(n = (n = o.trys).length > 0 && n[n.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < n[1]) {
                        (o.label = n[1]), (n = s);
                        break;
                      }
                      if (n && o.label < n[2]) {
                        (o.label = n[2]), o.ops.push(s);
                        break;
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; )
            o.push(i.value);
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++)
            i[n] = s[o];
        return i;
      }
      function w(e) {
        return this instanceof w ? ((this.v = e), this) : new w(e);
      }
      function v(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          s = [];
        return (
          (i = {}),
          o("next"),
          o("throw"),
          o("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                s.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof w
              ? Promise.resolve(r.value.v).then(c, l)
              : h(s[0][2], r);
          } catch (i) {
            h(s[0][3], i);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function b(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: w(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function _(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                (function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    65540: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e))
            throw new Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          const t = this.get(e);
          if ("undefined" !== typeof t.elapsed)
            throw new Error(`Watch already stopped for label: ${e}`);
          const r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          const t = this.timestamps.get(e);
          if ("undefined" === typeof t)
            throw new Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          const t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    70502: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => i });
      const i = "standard:disconnect";
    },
    73906: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __addDisposableResource: () => D,
          __assign: () => s,
          __asyncDelegator: () => O,
          __asyncGenerator: () => S,
          __asyncValues: () => P,
          __await: () => I,
          __awaiter: () => f,
          __classPrivateFieldGet: () => k,
          __classPrivateFieldIn: () => j,
          __classPrivateFieldSet: () => C,
          __createBinding: () => y,
          __decorate: () => a,
          __disposeResources: () => U,
          __esDecorate: () => l,
          __exportStar: () => m,
          __extends: () => n,
          __generator: () => g,
          __importDefault: () => R,
          __importStar: () => N,
          __makeTemplateObject: () => x,
          __metadata: () => p,
          __param: () => c,
          __propKey: () => u,
          __read: () => v,
          __rest: () => o,
          __rewriteRelativeImportExtension: () => q,
          __runInitializers: () => h,
          __setFunctionName: () => d,
          __spread: () => b,
          __spreadArray: () => E,
          __spreadArrays: () => _,
          __values: () => w,
          default: () => M,
        });
      var i = function (e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }),
          i(e, t)
        );
      };
      function n(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (r[i] = e[i]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
            t.indexOf(i[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        }
        return r;
      }
      function a(e, t, r, i) {
        var n,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t, r, i, n, s) {
        function o(e) {
          if (void 0 !== e && "function" !== typeof e)
            throw new TypeError("Function expected");
          return e;
        }
        for (
          var a,
            c = i.kind,
            l = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            h = !t && e ? (i.static ? e : e.prototype) : null,
            u = t || (h ? Object.getOwnPropertyDescriptor(h, i.name) : {}),
            d = !1,
            p = r.length - 1;
          p >= 0;
          p--
        ) {
          var f = {};
          for (var g in i) f[g] = "access" === g ? {} : i[g];
          for (var g in i.access) f.access[g] = i.access[g];
          f.addInitializer = function (e) {
            if (d)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            s.push(o(e || null));
          };
          var y = (0, r[p])(
            "accessor" === c ? { get: u.get, set: u.set } : u[l],
            f
          );
          if ("accessor" === c) {
            if (void 0 === y) continue;
            if (null === y || "object" !== typeof y)
              throw new TypeError("Object expected");
            (a = o(y.get)) && (u.get = a),
              (a = o(y.set)) && (u.set = a),
              (a = o(y.init)) && n.unshift(a);
          } else (a = o(y)) && ("field" === c ? n.unshift(a) : (u[l] = a));
        }
        h && Object.defineProperty(h, i.name, u), (d = !0);
      }
      function h(e, t, r) {
        for (var i = arguments.length > 2, n = 0; n < t.length; n++)
          r = i ? t[n].call(e, r) : t[n].call(e);
        return i ? r : void 0;
      }
      function u(e) {
        return "symbol" === typeof e ? e : "".concat(e);
      }
      function d(e, t, r) {
        return (
          "symbol" === typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function p(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function f(e, t, r, i) {
        return new (r || (r = Promise))(function (n, s) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function g(e, t) {
        var r,
          i,
          n,
          s = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          },
          o = Object.create(
            ("function" === typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (o.next = a(0)),
          (o.throw = a(1)),
          (o.return = a(2)),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(a) {
          return function (c) {
            return (function (a) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), a[0] && (s = 0)), s; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & a[0]
                          ? i.return
                          : a[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, a[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (a = [2 & a[0], n.value]), a[0])) {
                    case 0:
                    case 1:
                      n = a;
                      break;
                    case 4:
                      return s.label++, { value: a[1], done: !1 };
                    case 5:
                      s.label++, (i = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(n = (n = s.trys).length > 0 && n[n.length - 1]) &&
                        (6 === a[0] || 2 === a[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === a[0] && (!n || (a[1] > n[0] && a[1] < n[3]))) {
                        s.label = a[1];
                        break;
                      }
                      if (6 === a[0] && s.label < n[1]) {
                        (s.label = n[1]), (n = a);
                        break;
                      }
                      if (n && s.label < n[2]) {
                        (s.label = n[2]), s.ops.push(a);
                        break;
                      }
                      n[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  a = t.call(e, s);
                } catch (c) {
                  (a = [6, c]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, c]);
          };
        }
      }
      var y = Object.create
        ? function (e, t, r, i) {
            void 0 === i && (i = r);
            var n = Object.getOwnPropertyDescriptor(t, r);
            (n &&
              !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
              (n = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, i, n);
          }
        : function (e, t, r, i) {
            void 0 === i && (i = r), (e[i] = t[r]);
          };
      function m(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            y(t, e, r);
      }
      function w(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function v(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; )
            o.push(i.value);
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }
      function b() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(v(arguments[t]));
        return e;
      }
      function _() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++)
            i[n] = s[o];
        return i;
      }
      function E(e, t, r) {
        if (r || 2 === arguments.length)
          for (var i, n = 0, s = t.length; n < s; n++)
            (!i && n in t) ||
              (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]));
        return e.concat(i || Array.prototype.slice.call(t));
      }
      function I(e) {
        return this instanceof I ? ((this.v = e), this) : new I(e);
      }
      function S(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          s = [];
        return (
          (i = Object.create(
            ("function" === typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          o("next"),
          o("throw"),
          o("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, l);
            };
          }),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e, t) {
          n[e] &&
            ((i[e] = function (t) {
              return new Promise(function (r, i) {
                s.push([e, t, r, i]) > 1 || a(e, t);
              });
            }),
            t && (i[e] = t(i[e])));
        }
        function a(e, t) {
          try {
            (r = n[e](t)).value instanceof I
              ? Promise.resolve(r.value.v).then(c, l)
              : h(s[0][2], r);
          } catch (i) {
            h(s[0][3], i);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function O(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: I(e[i](t)), done: !1 }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function P(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = w(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                (function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function x(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var T = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        A = function (e) {
          return (
            (A =
              Object.getOwnPropertyNames ||
              function (e) {
                var t = [];
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    (t[t.length] = r);
                return t;
              }),
            A(e)
          );
        };
      function N(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = A(e), i = 0; i < r.length; i++)
            "default" !== r[i] && y(t, e, r[i]);
        return T(t, e), t;
      }
      function R(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function k(e, t, r, i) {
        if ("a" === r && !i)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" === typeof t ? e !== t || !i : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e);
      }
      function C(e, t, r, i, n) {
        if ("m" === i) throw new TypeError("Private method is not writable");
        if ("a" === i && !n)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" === typeof t ? e !== t || !n : !t.has(e))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === i ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
      }
      function j(e, t) {
        if (null === t || ("object" !== typeof t && "function" !== typeof t))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" === typeof e ? t === e : e.has(t);
      }
      function D(e, t, r) {
        if (null !== t && void 0 !== t) {
          if ("object" !== typeof t && "function" !== typeof t)
            throw new TypeError("Object expected.");
          var i, n;
          if (r) {
            if (!Symbol.asyncDispose)
              throw new TypeError("Symbol.asyncDispose is not defined.");
            i = t[Symbol.asyncDispose];
          }
          if (void 0 === i) {
            if (!Symbol.dispose)
              throw new TypeError("Symbol.dispose is not defined.");
            (i = t[Symbol.dispose]), r && (n = i);
          }
          if ("function" !== typeof i)
            throw new TypeError("Object not disposable.");
          n &&
            (i = function () {
              try {
                n.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: i, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var L =
        "function" === typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var i = new Error(r);
              return (
                (i.name = "SuppressedError"),
                (i.error = e),
                (i.suppressed = t),
                i
              );
            };
      function U(e) {
        function t(t) {
          (e.error = e.hasError
            ? new L(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var r,
          i = 0;
        return (function n() {
          for (; (r = e.stack.pop()); )
            try {
              if (!r.async && 1 === i)
                return (i = 0), e.stack.push(r), Promise.resolve().then(n);
              if (r.dispose) {
                var s = r.dispose.call(r.value);
                if (r.async)
                  return (
                    (i |= 2),
                    Promise.resolve(s).then(n, function (e) {
                      return t(e), n();
                    })
                  );
              } else i |= 1;
            } catch (o) {
              t(o);
            }
          if (1 === i)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function q(e, t) {
        return "string" === typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, r, i, n, s) {
                return r
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !i || (n && s)
                  ? i + n + "." + s.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      const M = {
        __extends: n,
        __assign: s,
        __rest: o,
        __decorate: a,
        __param: c,
        __esDecorate: l,
        __runInitializers: h,
        __propKey: u,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: f,
        __generator: g,
        __createBinding: y,
        __exportStar: m,
        __values: w,
        __read: v,
        __spread: b,
        __spreadArrays: _,
        __spreadArray: E,
        __await: I,
        __asyncGenerator: S,
        __asyncDelegator: O,
        __asyncValues: P,
        __makeTemplateObject: x,
        __importStar: N,
        __importDefault: R,
        __classPrivateFieldGet: k,
        __classPrivateFieldSet: C,
        __classPrivateFieldIn: j,
        __addDisposableResource: D,
        __disposeResources: U,
        __rewriteRelativeImportExtension: q,
      };
    },
    74343: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(62223);
      i.__exportStar(r(57297), t),
        i.__exportStar(r(65540), t),
        i.__exportStar(r(57293), t),
        i.__exportStar(r(82505), t);
    },
    77427: (e, t, r) => {
      var i = r(8759);
      "undefined" !== typeof window &&
        "undefined" === typeof window.tp &&
        (window.tp = i),
        (e.exports = i);
    },
    80888: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => i });
      const i = "standard:connect";
    },
    81226: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => l });
      var i,
        n = function (e, t, r, i) {
          if ("a" === r && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" === typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e);
        },
        s = function (e, t, r, i, n) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !n)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" === typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        };
      let o;
      const a = new Set();
      const c = {};
      function l() {
        if (o) return o;
        if (
          ((o = Object.freeze({ register: h, get: d, on: p })),
          "undefined" === typeof window)
        )
          return o;
        const e = Object.freeze({ register: h });
        try {
          window.addEventListener("wallet-standard:register-wallet", (t) => {
            let { detail: r } = t;
            return r(e);
          });
        } catch (t) {
          console.error(
            "wallet-standard:register-wallet event listener could not be added\n",
            t
          );
        }
        try {
          window.dispatchEvent(new g(e));
        } catch (t) {
          console.error(
            "wallet-standard:app-ready event could not be dispatched\n",
            t
          );
        }
        return o;
      }
      function h() {
        for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++)
          r[i] = arguments[i];
        return (r = r.filter((e) => !a.has(e))).length
          ? (r.forEach((e) =>
              (function (e) {
                (u = void 0), a.add(e);
              })(e)
            ),
            null === (e = c.register) ||
              void 0 === e ||
              e.forEach((e) => f(() => e(...r))),
            function () {
              var e;
              r.forEach((e) =>
                (function (e) {
                  (u = void 0), a.delete(e);
                })(e)
              ),
                null === (e = c.unregister) ||
                  void 0 === e ||
                  e.forEach((e) => f(() => e(...r)));
            })
          : () => {};
      }
      let u;
      function d() {
        return u || (u = [...a]), u;
      }
      function p(e, t) {
        var r;
        return (
          (null === (r = c[e]) || void 0 === r ? void 0 : r.push(t)) ||
            (c[e] = [t]),
          function () {
            var r;
            c[e] =
              null === (r = c[e]) || void 0 === r
                ? void 0
                : r.filter((e) => t !== e);
          }
        );
      }
      function f(e) {
        try {
          e();
        } catch (t) {
          console.error(t);
        }
      }
      class g extends Event {
        get detail() {
          return n(this, i, "f");
        }
        get type() {
          return "wallet-standard:app-ready";
        }
        constructor(e) {
          super("wallet-standard:app-ready", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            i.set(this, void 0),
            s(this, i, e, "f");
        }
        preventDefault() {
          throw new Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw new Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw new Error("stopPropagation cannot be called");
        }
      }
      i = new WeakMap();
    },
    82505: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(62223);
      i.__exportStar(r(61133), t), i.__exportStar(r(50808), t);
    },
    83439: (e, t, r) => {
      "use strict";
      e.exports = r(34470);
    },
    86342: (e, t, r) => {
      "use strict";
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function n() {
        const e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = n),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!n();
        });
    },
    86992: (e, t, r) => {
      "use strict";
      r.d(t, { u$: () => n, zC: () => s });
      var i = r(59586);
      function n(e, t, r, n) {
        let s = e[t];
        return (0, i.B1)(
          e,
          () => {
            const i = e[t];
            Object.is(s, i) || r((s = i));
          },
          n
        );
      }
      Symbol();
      function s(e) {
        const t = (0, i.BX)({
          data: Array.from(e || []),
          has(e) {
            return this.data.some((t) => t[0] === e);
          },
          set(e, t) {
            const r = this.data.find((t) => t[0] === e);
            return r ? (r[1] = t) : this.data.push([e, t]), this;
          },
          get(e) {
            var t;
            return null == (t = this.data.find((t) => t[0] === e))
              ? void 0
              : t[1];
          },
          delete(e) {
            const t = this.data.findIndex((t) => t[0] === e);
            return -1 !== t && (this.data.splice(t, 1), !0);
          },
          clear() {
            this.data.splice(0);
          },
          get size() {
            return this.data.length;
          },
          toJSON() {
            return new Map(this.data);
          },
          forEach(e) {
            this.data.forEach((t) => {
              e(t[1], t[0], this);
            });
          },
          keys() {
            return this.data.map((e) => e[0]).values();
          },
          values() {
            return this.data.map((e) => e[1]).values();
          },
          entries() {
            return new Map(this.data).entries();
          },
          get [Symbol.toStringTag]() {
            return "Map";
          },
          [Symbol.iterator]() {
            return this.entries();
          },
        });
        return (
          Object.defineProperties(t, {
            data: { enumerable: !1 },
            size: { enumerable: !1 },
            toJSON: { enumerable: !1 },
          }),
          Object.seal(t),
          t
        );
      }
    },
    92131: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => o, j: () => s });
      const i = (e) =>
          JSON.stringify(e, (e, t) =>
            "bigint" === typeof t ? t.toString() + "n" : t
          ),
        n = (e) => {
          const t = e.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(t, (e, t) =>
            "string" === typeof t && t.match(/^\d+n$/)
              ? BigInt(t.substring(0, t.length - 1))
              : t
          );
        };
      function s(e) {
        if ("string" !== typeof e)
          throw new Error("Cannot safe json parse value of type " + typeof e);
        try {
          return n(e);
        } catch (t) {
          return e;
        }
      }
      function o(e) {
        return "string" === typeof e ? e : i(e) || "";
      }
    },
    95386: (e, t, r) => {
      "use strict";
      r.d(t, {
        Vw: () => p,
        Fc: () => h,
        Id: () => d,
        O8: () => o,
        qv: () => c,
        po: () => g,
        Ow: () => a,
        ZJ: () => u,
        DH: () => s,
        ld: () => f,
      });
      const i =
        "object" === typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var n = r(4110);
      function s(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function o(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function a(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      const c = (() =>
        68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])();
      function l(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function h(e) {
        for (let t = 0; t < e.length; t++) e[t] = l(e[t]);
      }
      function u(e) {
        return (
          "string" === typeof e &&
            (e = (function (e) {
              if ("string" !== typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, n.DO)(e),
          e
        );
      }
      function d() {
        let e = 0;
        for (let r = 0; r < arguments.length; r++) {
          const t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          (0, n.DO)(t), (e += t.length);
        }
        const t = new Uint8Array(e);
        for (let r = 0, i = 0; r < arguments.length; r++) {
          const e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          t.set(e, i), (i += e.length);
        }
        return t;
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      function f(e) {
        const t = (t) => e().update(u(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function g() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
        if (i && "function" === typeof i.getRandomValues)
          return i.getRandomValues(new Uint8Array(e));
        if (i && "function" === typeof i.randomBytes) return i.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
      }
    },
    98895: (e, t) => {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" !== typeof window &&
            "undefined" !== typeof window[e] &&
            (t = window[e]),
          t
        );
      }
      function i(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return i("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    99181: (e, t, r) => {
      "use strict";
      var i, n;
      r.d(t, { z: () => ct }),
        (function (e) {
          (e.assertEqual = (e) => e),
            (e.assertIs = function (e) {}),
            (e.assertNever = function (e) {
              throw new Error();
            }),
            (e.arrayToEnum = (e) => {
              const t = {};
              for (const r of e) t[r] = r;
              return t;
            }),
            (e.getValidEnumValues = (t) => {
              const r = e
                  .objectKeys(t)
                  .filter((e) => "number" !== typeof t[t[e]]),
                i = {};
              for (const e of r) i[e] = t[e];
              return e.objectValues(i);
            }),
            (e.objectValues = (t) =>
              e.objectKeys(t).map(function (e) {
                return t[e];
              })),
            (e.objectKeys =
              "function" === typeof Object.keys
                ? (e) => Object.keys(e)
                : (e) => {
                    const t = [];
                    for (const r in e)
                      Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t;
                  }),
            (e.find = (e, t) => {
              for (const r of e) if (t(r)) return r;
            }),
            (e.isInteger =
              "function" === typeof Number.isInteger
                ? (e) => Number.isInteger(e)
                : (e) =>
                    "number" === typeof e &&
                    isFinite(e) &&
                    Math.floor(e) === e),
            (e.joinValues = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : " | ";
              return e
                .map((e) => ("string" === typeof e ? `'${e}'` : e))
                .join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) =>
              "bigint" === typeof t ? t.toString() : t);
        })(i || (i = {})),
        (function (e) {
          e.mergeShapes = (e, t) => ({ ...e, ...t });
        })(n || (n = {}));
      const s = i.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        o = (e) => {
          switch (typeof e) {
            case "undefined":
              return s.undefined;
            case "string":
              return s.string;
            case "number":
              return isNaN(e) ? s.nan : s.number;
            case "boolean":
              return s.boolean;
            case "function":
              return s.function;
            case "bigint":
              return s.bigint;
            case "symbol":
              return s.symbol;
            case "object":
              return Array.isArray(e)
                ? s.array
                : null === e
                ? s.null
                : e.then &&
                  "function" === typeof e.then &&
                  e.catch &&
                  "function" === typeof e.catch
                ? s.promise
                : "undefined" !== typeof Map && e instanceof Map
                ? s.map
                : "undefined" !== typeof Set && e instanceof Set
                ? s.set
                : "undefined" !== typeof Date && e instanceof Date
                ? s.date
                : s.object;
            default:
              return s.unknown;
          }
        },
        a = i.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]);
      class c extends Error {
        constructor(e) {
          var t;
          super(),
            (t = this),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              t.issues = [...t.issues, ...e];
            });
          const r = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, r)
            : (this.__proto__ = r),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          const t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            i = (e) => {
              for (const n of e.issues)
                if ("invalid_union" === n.code) n.unionErrors.map(i);
                else if ("invalid_return_type" === n.code) i(n.returnTypeError);
                else if ("invalid_arguments" === n.code) i(n.argumentsError);
                else if (0 === n.path.length) r._errors.push(t(n));
                else {
                  let e = r,
                    i = 0;
                  for (; i < n.path.length; ) {
                    const r = n.path[i];
                    i === n.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(n)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      i++;
                  }
                }
            };
          return i(this), r;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, i.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (e) => e.message;
          const t = {},
            r = [];
          for (const i of this.issues)
            i.path.length > 0
              ? ((t[i.path[0]] = t[i.path[0]] || []), t[i.path[0]].push(e(i)))
              : r.push(e(i));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      c.create = (e) => new c(e);
      const l = (e, t) => {
        let r;
        switch (e.code) {
          case a.invalid_type:
            r =
              e.received === s.undefined
                ? "Required"
                : `Expected ${e.expected}, received ${e.received}`;
            break;
          case a.invalid_literal:
            r = `Invalid literal value, expected ${JSON.stringify(
              e.expected,
              i.jsonStringifyReplacer
            )}`;
            break;
          case a.unrecognized_keys:
            r = `Unrecognized key(s) in object: ${i.joinValues(e.keys, ", ")}`;
            break;
          case a.invalid_union:
            r = "Invalid input";
            break;
          case a.invalid_union_discriminator:
            r = `Invalid discriminator value. Expected ${i.joinValues(
              e.options
            )}`;
            break;
          case a.invalid_enum_value:
            r = `Invalid enum value. Expected ${i.joinValues(
              e.options
            )}, received '${e.received}'`;
            break;
          case a.invalid_arguments:
            r = "Invalid function arguments";
            break;
          case a.invalid_return_type:
            r = "Invalid function return type";
            break;
          case a.invalid_date:
            r = "Invalid date";
            break;
          case a.invalid_string:
            "object" === typeof e.validation
              ? "includes" in e.validation
                ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                  "number" === typeof e.validation.position &&
                    (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                : "startsWith" in e.validation
                ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                : "endsWith" in e.validation
                ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                : i.assertNever(e.validation)
              : (r =
                  "regex" !== e.validation
                    ? `Invalid ${e.validation}`
                    : "Invalid");
            break;
          case a.too_small:
            r =
              "array" === e.type
                ? `Array must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
                  } ${e.minimum} element(s)`
                : "string" === e.type
                ? `String must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at least" : "over"
                  } ${e.minimum} character(s)`
                : "number" === e.type
                ? `Number must be ${
                    e.exact
                      ? "exactly equal to "
                      : e.inclusive
                      ? "greater than or equal to "
                      : "greater than "
                  }${e.minimum}`
                : "date" === e.type
                ? `Date must be ${
                    e.exact
                      ? "exactly equal to "
                      : e.inclusive
                      ? "greater than or equal to "
                      : "greater than "
                  }${new Date(Number(e.minimum))}`
                : "Invalid input";
            break;
          case a.too_big:
            r =
              "array" === e.type
                ? `Array must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
                  } ${e.maximum} element(s)`
                : "string" === e.type
                ? `String must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at most" : "under"
                  } ${e.maximum} character(s)`
                : "number" === e.type
                ? `Number must be ${
                    e.exact
                      ? "exactly"
                      : e.inclusive
                      ? "less than or equal to"
                      : "less than"
                  } ${e.maximum}`
                : "bigint" === e.type
                ? `BigInt must be ${
                    e.exact
                      ? "exactly"
                      : e.inclusive
                      ? "less than or equal to"
                      : "less than"
                  } ${e.maximum}`
                : "date" === e.type
                ? `Date must be ${
                    e.exact
                      ? "exactly"
                      : e.inclusive
                      ? "smaller than or equal to"
                      : "smaller than"
                  } ${new Date(Number(e.maximum))}`
                : "Invalid input";
            break;
          case a.custom:
            r = "Invalid input";
            break;
          case a.invalid_intersection_types:
            r = "Intersection results could not be merged";
            break;
          case a.not_multiple_of:
            r = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case a.not_finite:
            r = "Number must be finite";
            break;
          default:
            (r = t.defaultError), i.assertNever(e);
        }
        return { message: r };
      };
      let h = l;
      function u() {
        return h;
      }
      const d = (e) => {
        const { data: t, path: r, errorMaps: i, issueData: n } = e,
          s = [...r, ...(n.path || [])],
          o = { ...n, path: s };
        let a = "";
        const c = i
          .filter((e) => !!e)
          .slice()
          .reverse();
        for (const l of c) a = l(o, { data: t, defaultError: a }).message;
        return { ...n, path: s, message: n.message || a };
      };
      function p(e, t) {
        const r = d({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            u(),
            l,
          ].filter((e) => !!e),
        });
        e.common.issues.push(r);
      }
      class f {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          const r = [];
          for (const i of t) {
            if ("aborted" === i.status) return g;
            "dirty" === i.status && e.dirty(), r.push(i.value);
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          const r = [];
          for (const i of t) r.push({ key: await i.key, value: await i.value });
          return f.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          const r = {};
          for (const i of t) {
            const { key: t, value: n } = i;
            if ("aborted" === t.status) return g;
            if ("aborted" === n.status) return g;
            "dirty" === t.status && e.dirty(),
              "dirty" === n.status && e.dirty(),
              "__proto__" === t.value ||
                ("undefined" === typeof n.value && !i.alwaysSet) ||
                (r[t.value] = n.value);
          }
          return { status: e.value, value: r };
        }
      }
      const g = Object.freeze({ status: "aborted" }),
        y = (e) => ({ status: "dirty", value: e }),
        m = (e) => ({ status: "valid", value: e }),
        w = (e) => "aborted" === e.status,
        v = (e) => "dirty" === e.status,
        b = (e) => "valid" === e.status,
        _ = (e) => "undefined" !== typeof Promise && e instanceof Promise;
      var E;
      !(function (e) {
        (e.errToObj = (e) =>
          "string" === typeof e ? { message: e } : e || {}),
          (e.toString = (e) =>
            "string" === typeof e
              ? e
              : null === e || void 0 === e
              ? void 0
              : e.message);
      })(E || (E = {}));
      class I {
        constructor(e, t, r, i) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = i);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      const S = (e, t) => {
        if (b(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw new Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            const t = new c(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function O(e) {
        if (!e) return {};
        const {
          errorMap: t,
          invalid_type_error: r,
          required_error: i,
          description: n,
        } = e;
        if (t && (r || i))
          throw new Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        if (t) return { errorMap: t, description: n };
        return {
          errorMap: (e, t) =>
            "invalid_type" !== e.code
              ? { message: t.defaultError }
              : "undefined" === typeof t.data
              ? { message: null !== i && void 0 !== i ? i : t.defaultError }
              : { message: null !== r && void 0 !== r ? r : t.defaultError },
          description: n,
        };
      }
      class P {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return o(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: o(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new f(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: o(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          const t = this._parse(e);
          if (_(t)) throw new Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          const t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          const r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          var r;
          const i = {
              common: {
                issues: [],
                async:
                  null !==
                    (r = null === t || void 0 === t ? void 0 : t.async) &&
                  void 0 !== r &&
                  r,
                contextualErrorMap:
                  null === t || void 0 === t ? void 0 : t.errorMap,
              },
              path: (null === t || void 0 === t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: o(e),
            },
            n = this._parseSync({ data: e, path: i.path, parent: i });
          return S(i, n);
        }
        async parseAsync(e, t) {
          const r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          const r = {
              common: {
                issues: [],
                contextualErrorMap:
                  null === t || void 0 === t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null === t || void 0 === t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: o(e),
            },
            i = this._parse({ data: e, path: r.path, parent: r }),
            n = await (_(i) ? i : Promise.resolve(i));
          return S(r, n);
        }
        refine(e, t) {
          const r = (e) =>
            "string" === typeof t || "undefined" === typeof t
              ? { message: t }
              : "function" === typeof t
              ? t(e)
              : t;
          return this._refinement((t, i) => {
            const n = e(t),
              s = () => i.addIssue({ code: a.custom, ...r(t) });
            return "undefined" !== typeof Promise && n instanceof Promise
              ? n.then((e) => !!e || (s(), !1))
              : !!n || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, i) =>
              !!e(r) || (i.addIssue("function" === typeof t ? t(r, i) : t), !1)
          );
        }
        _refinement(e) {
          return new pe({
            schema: this,
            typeName: Oe.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return fe.create(this, this._def);
        }
        nullable() {
          return ge.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return W.create(this, this._def);
        }
        promise() {
          return de.create(this, this._def);
        }
        or(e) {
          return Y.create([this, e], this._def);
        }
        and(e) {
          return te.create(this, e, this._def);
        }
        transform(e) {
          return new pe({
            ...O(this._def),
            schema: this,
            typeName: Oe.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          const t = "function" === typeof e ? e : () => e;
          return new ye({
            ...O(this._def),
            innerType: this,
            defaultValue: t,
            typeName: Oe.ZodDefault,
          });
        }
        brand() {
          return new be({
            typeName: Oe.ZodBranded,
            type: this,
            ...O(this._def),
          });
        }
        catch(e) {
          const t = "function" === typeof e ? e : () => e;
          return new me({
            ...O(this._def),
            innerType: this,
            catchValue: t,
            typeName: Oe.ZodCatch,
          });
        }
        describe(e) {
          return new (0, this.constructor)({ ...this._def, description: e });
        }
        pipe(e) {
          return _e.create(this, e);
        }
        readonly() {
          return Ee.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      const x = /^c[^\s-]{8,}$/i,
        T = /^[a-z][a-z0-9]*$/,
        A = /^[0-9A-HJKMNP-TV-Z]{26}$/,
        N =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        R =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
      let k;
      const C =
          /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        j =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
      class D extends P {
        _parse(e) {
          this._def.coerce && (e.data = String(e.data));
          if (this._getType(e) !== s.string) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.string,
                received: t.parsedType,
              }),
              g
            );
          }
          const t = new f();
          let r;
          for (const s of this._def.checks)
            if ("min" === s.kind)
              e.data.length < s.value &&
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.too_small,
                  minimum: s.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: s.message,
                }),
                t.dirty());
            else if ("max" === s.kind)
              e.data.length > s.value &&
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.too_big,
                  maximum: s.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: s.message,
                }),
                t.dirty());
            else if ("length" === s.kind) {
              const i = e.data.length > s.value,
                n = e.data.length < s.value;
              (i || n) &&
                ((r = this._getOrReturnCtx(e, r)),
                i
                  ? p(r, {
                      code: a.too_big,
                      maximum: s.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: s.message,
                    })
                  : n &&
                    p(r, {
                      code: a.too_small,
                      minimum: s.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: s.message,
                    }),
                t.dirty());
            } else if ("email" === s.kind)
              R.test(e.data) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  validation: "email",
                  code: a.invalid_string,
                  message: s.message,
                }),
                t.dirty());
            else if ("emoji" === s.kind)
              k ||
                (k = new RegExp(
                  "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                  "u"
                )),
                k.test(e.data) ||
                  ((r = this._getOrReturnCtx(e, r)),
                  p(r, {
                    validation: "emoji",
                    code: a.invalid_string,
                    message: s.message,
                  }),
                  t.dirty());
            else if ("uuid" === s.kind)
              N.test(e.data) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  validation: "uuid",
                  code: a.invalid_string,
                  message: s.message,
                }),
                t.dirty());
            else if ("cuid" === s.kind)
              x.test(e.data) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  validation: "cuid",
                  code: a.invalid_string,
                  message: s.message,
                }),
                t.dirty());
            else if ("cuid2" === s.kind)
              T.test(e.data) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  validation: "cuid2",
                  code: a.invalid_string,
                  message: s.message,
                }),
                t.dirty());
            else if ("ulid" === s.kind)
              A.test(e.data) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  validation: "ulid",
                  code: a.invalid_string,
                  message: s.message,
                }),
                t.dirty());
            else if ("url" === s.kind)
              try {
                new URL(e.data);
              } catch (l) {
                (r = this._getOrReturnCtx(e, r)),
                  p(r, {
                    validation: "url",
                    code: a.invalid_string,
                    message: s.message,
                  }),
                  t.dirty();
              }
            else if ("regex" === s.kind) {
              s.regex.lastIndex = 0;
              s.regex.test(e.data) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  validation: "regex",
                  code: a.invalid_string,
                  message: s.message,
                }),
                t.dirty());
            } else if ("trim" === s.kind) e.data = e.data.trim();
            else if ("includes" === s.kind)
              e.data.includes(s.value, s.position) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                t.dirty());
            else if ("toLowerCase" === s.kind) e.data = e.data.toLowerCase();
            else if ("toUpperCase" === s.kind) e.data = e.data.toUpperCase();
            else if ("startsWith" === s.kind)
              e.data.startsWith(s.value) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.invalid_string,
                  validation: { startsWith: s.value },
                  message: s.message,
                }),
                t.dirty());
            else if ("endsWith" === s.kind)
              e.data.endsWith(s.value) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.invalid_string,
                  validation: { endsWith: s.value },
                  message: s.message,
                }),
                t.dirty());
            else if ("datetime" === s.kind) {
              ((c = s).precision
                ? c.offset
                  ? new RegExp(
                      `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${c.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
                    )
                  : new RegExp(
                      `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${c.precision}}Z$`
                    )
                : 0 === c.precision
                ? c.offset
                  ? new RegExp(
                      "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
                    )
                  : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
                : c.offset
                ? new RegExp(
                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
                  )
                : new RegExp(
                    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"
                  )
              ).test(e.data) ||
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.invalid_string,
                  validation: "datetime",
                  message: s.message,
                }),
                t.dirty());
            } else
              "ip" === s.kind
                ? ((n = e.data),
                  (("v4" !== (o = s.version) && o) || !C.test(n)) &&
                    (("v6" !== o && o) || !j.test(n)) &&
                    ((r = this._getOrReturnCtx(e, r)),
                    p(r, {
                      validation: "ip",
                      code: a.invalid_string,
                      message: s.message,
                    }),
                    t.dirty()))
                : i.assertNever(s);
          var n, o, c;
          return { status: t.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: a.invalid_string,
            ...E.errToObj(r),
          });
        }
        _addCheck(e) {
          return new D({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...E.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...E.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: "emoji", ...E.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...E.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...E.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: "cuid2", ...E.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: "ulid", ...E.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: "ip", ...E.errToObj(e) });
        }
        datetime(e) {
          var t;
          return "string" === typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision:
                  "undefined" ===
                  typeof (null === e || void 0 === e ? void 0 : e.precision)
                    ? null
                    : null === e || void 0 === e
                    ? void 0
                    : e.precision,
                offset:
                  null !==
                    (t = null === e || void 0 === e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                ...E.errToObj(null === e || void 0 === e ? void 0 : e.message),
              });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...E.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: "includes",
            value: e,
            position: null === t || void 0 === t ? void 0 : t.position,
            ...E.errToObj(null === t || void 0 === t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...E.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...E.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...E.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...E.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: "length", value: e, ...E.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, E.errToObj(e));
        }
        trim() {
          return new D({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          });
        }
        toLowerCase() {
          return new D({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
        }
        toUpperCase() {
          return new D({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => "emoji" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => "cuid2" === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => "ulid" === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => "ip" === e.kind);
        }
        get minLength() {
          let e = null;
          for (const t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (const t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      function L(e, t) {
        const r = (e.toString().split(".")[1] || "").length,
          i = (t.toString().split(".")[1] || "").length,
          n = r > i ? r : i;
        return (
          (parseInt(e.toFixed(n).replace(".", "")) %
            parseInt(t.toFixed(n).replace(".", ""))) /
          Math.pow(10, n)
        );
      }
      D.create = (e) => {
        var t;
        return new D({
          checks: [],
          typeName: Oe.ZodString,
          coerce:
            null !== (t = null === e || void 0 === e ? void 0 : e.coerce) &&
            void 0 !== t &&
            t,
          ...O(e),
        });
      };
      class U extends P {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          this._def.coerce && (e.data = Number(e.data));
          if (this._getType(e) !== s.number) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.number,
                received: t.parsedType,
              }),
              g
            );
          }
          let t;
          const r = new f();
          for (const n of this._def.checks)
            if ("int" === n.kind)
              i.isInteger(e.data) ||
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: a.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: n.message,
                }),
                r.dirty());
            else if ("min" === n.kind) {
              (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: a.too_small,
                  minimum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty());
            } else if ("max" === n.kind) {
              (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: a.too_big,
                  maximum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty());
            } else
              "multipleOf" === n.kind
                ? 0 !== L(e.data, n.value) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  p(t, {
                    code: a.not_multiple_of,
                    multipleOf: n.value,
                    message: n.message,
                  }),
                  r.dirty())
                : "finite" === n.kind
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  p(t, { code: a.not_finite, message: n.message }),
                  r.dirty())
                : i.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, E.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, E.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, E.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, E.toString(t));
        }
        setLimit(e, t, r, i) {
          return new U({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: E.toString(i) },
            ],
          });
        }
        _addCheck(e) {
          return new U({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: E.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: E.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: E.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: E.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: E.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: E.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: E.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: E.toString(e),
          })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: E.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (const t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (const t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              "int" === e.kind ||
              ("multipleOf" === e.kind && i.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (const r of this._def.checks) {
            if (
              "finite" === r.kind ||
              "int" === r.kind ||
              "multipleOf" === r.kind
            )
              return !0;
            "min" === r.kind
              ? (null === t || r.value > t) && (t = r.value)
              : "max" === r.kind &&
                (null === e || r.value < e) &&
                (e = r.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      U.create = (e) =>
        new U({
          checks: [],
          typeName: Oe.ZodNumber,
          coerce: (null === e || void 0 === e ? void 0 : e.coerce) || !1,
          ...O(e),
        });
      class q extends P {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          this._def.coerce && (e.data = BigInt(e.data));
          if (this._getType(e) !== s.bigint) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.bigint,
                received: t.parsedType,
              }),
              g
            );
          }
          let t;
          const r = new f();
          for (const n of this._def.checks)
            if ("min" === n.kind) {
              (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: a.too_small,
                  type: "bigint",
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty());
            } else if ("max" === n.kind) {
              (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: a.too_big,
                  type: "bigint",
                  maximum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty());
            } else
              "multipleOf" === n.kind
                ? e.data % n.value !== BigInt(0) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  p(t, {
                    code: a.not_multiple_of,
                    multipleOf: n.value,
                    message: n.message,
                  }),
                  r.dirty())
                : i.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, E.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, E.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, E.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, E.toString(t));
        }
        setLimit(e, t, r, i) {
          return new q({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: E.toString(i) },
            ],
          });
        }
        _addCheck(e) {
          return new q({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: E.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: E.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: E.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: E.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: E.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (const t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (const t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      q.create = (e) => {
        var t;
        return new q({
          checks: [],
          typeName: Oe.ZodBigInt,
          coerce:
            null !== (t = null === e || void 0 === e ? void 0 : e.coerce) &&
            void 0 !== t &&
            t,
          ...O(e),
        });
      };
      class M extends P {
        _parse(e) {
          this._def.coerce && (e.data = Boolean(e.data));
          if (this._getType(e) !== s.boolean) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.boolean,
                received: t.parsedType,
              }),
              g
            );
          }
          return m(e.data);
        }
      }
      M.create = (e) =>
        new M({
          typeName: Oe.ZodBoolean,
          coerce: (null === e || void 0 === e ? void 0 : e.coerce) || !1,
          ...O(e),
        });
      class B extends P {
        _parse(e) {
          this._def.coerce && (e.data = new Date(e.data));
          if (this._getType(e) !== s.date) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.date,
                received: t.parsedType,
              }),
              g
            );
          }
          if (isNaN(e.data.getTime())) {
            return p(this._getOrReturnCtx(e), { code: a.invalid_date }), g;
          }
          const t = new f();
          let r;
          for (const n of this._def.checks)
            "min" === n.kind
              ? e.data.getTime() < n.value &&
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: "date",
                }),
                t.dirty())
              : "max" === n.kind
              ? e.data.getTime() > n.value &&
                ((r = this._getOrReturnCtx(e, r)),
                p(r, {
                  code: a.too_big,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: n.value,
                  type: "date",
                }),
                t.dirty())
              : i.assertNever(n);
          return { status: t.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new B({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: E.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: E.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (const t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (const t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      B.create = (e) =>
        new B({
          checks: [],
          coerce: (null === e || void 0 === e ? void 0 : e.coerce) || !1,
          typeName: Oe.ZodDate,
          ...O(e),
        });
      class $ extends P {
        _parse(e) {
          if (this._getType(e) !== s.symbol) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.symbol,
                received: t.parsedType,
              }),
              g
            );
          }
          return m(e.data);
        }
      }
      $.create = (e) => new $({ typeName: Oe.ZodSymbol, ...O(e) });
      class z extends P {
        _parse(e) {
          if (this._getType(e) !== s.undefined) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.undefined,
                received: t.parsedType,
              }),
              g
            );
          }
          return m(e.data);
        }
      }
      z.create = (e) => new z({ typeName: Oe.ZodUndefined, ...O(e) });
      class H extends P {
        _parse(e) {
          if (this._getType(e) !== s.null) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.null,
                received: t.parsedType,
              }),
              g
            );
          }
          return m(e.data);
        }
      }
      H.create = (e) => new H({ typeName: Oe.ZodNull, ...O(e) });
      class V extends P {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return m(e.data);
        }
      }
      V.create = (e) => new V({ typeName: Oe.ZodAny, ...O(e) });
      class K extends P {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return m(e.data);
        }
      }
      K.create = (e) => new K({ typeName: Oe.ZodUnknown, ...O(e) });
      class F extends P {
        _parse(e) {
          const t = this._getOrReturnCtx(e);
          return (
            p(t, {
              code: a.invalid_type,
              expected: s.never,
              received: t.parsedType,
            }),
            g
          );
        }
      }
      F.create = (e) => new F({ typeName: Oe.ZodNever, ...O(e) });
      class Z extends P {
        _parse(e) {
          if (this._getType(e) !== s.undefined) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.void,
                received: t.parsedType,
              }),
              g
            );
          }
          return m(e.data);
        }
      }
      Z.create = (e) => new Z({ typeName: Oe.ZodVoid, ...O(e) });
      class W extends P {
        _parse(e) {
          const { ctx: t, status: r } = this._processInputParams(e),
            i = this._def;
          if (t.parsedType !== s.array)
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.array,
                received: t.parsedType,
              }),
              g
            );
          if (null !== i.exactLength) {
            const e = t.data.length > i.exactLength.value,
              n = t.data.length < i.exactLength.value;
            (e || n) &&
              (p(t, {
                code: e ? a.too_big : a.too_small,
                minimum: n ? i.exactLength.value : void 0,
                maximum: e ? i.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: i.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== i.minLength &&
              t.data.length < i.minLength.value &&
              (p(t, {
                code: a.too_small,
                minimum: i.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: i.minLength.message,
              }),
              r.dirty()),
            null !== i.maxLength &&
              t.data.length > i.maxLength.value &&
              (p(t, {
                code: a.too_big,
                maximum: i.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: i.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                i.type._parseAsync(new I(t, e, t.path, r))
              )
            ).then((e) => f.mergeArray(r, e));
          const n = [...t.data].map((e, r) =>
            i.type._parseSync(new I(t, e, t.path, r))
          );
          return f.mergeArray(r, n);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new W({
            ...this._def,
            minLength: { value: e, message: E.toString(t) },
          });
        }
        max(e, t) {
          return new W({
            ...this._def,
            maxLength: { value: e, message: E.toString(t) },
          });
        }
        length(e, t) {
          return new W({
            ...this._def,
            exactLength: { value: e, message: E.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      function J(e) {
        if (e instanceof G) {
          const t = {};
          for (const r in e.shape) {
            const i = e.shape[r];
            t[r] = fe.create(J(i));
          }
          return new G({ ...e._def, shape: () => t });
        }
        return e instanceof W
          ? new W({ ...e._def, type: J(e.element) })
          : e instanceof fe
          ? fe.create(J(e.unwrap()))
          : e instanceof ge
          ? ge.create(J(e.unwrap()))
          : e instanceof re
          ? re.create(e.items.map((e) => J(e)))
          : e;
      }
      W.create = (e, t) =>
        new W({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: Oe.ZodArray,
          ...O(t),
        });
      class G extends P {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          const e = this._def.shape(),
            t = i.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== s.object) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.object,
                received: t.parsedType,
              }),
              g
            );
          }
          const { status: t, ctx: r } = this._processInputParams(e),
            { shape: i, keys: n } = this._getCached(),
            o = [];
          if (
            !(
              this._def.catchall instanceof F &&
              "strip" === this._def.unknownKeys
            )
          )
            for (const s in r.data) n.includes(s) || o.push(s);
          const c = [];
          for (const s of n) {
            const e = i[s],
              t = r.data[s];
            c.push({
              key: { status: "valid", value: s },
              value: e._parse(new I(r, t, r.path, s)),
              alwaysSet: s in r.data,
            });
          }
          if (this._def.catchall instanceof F) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (const t of o)
                c.push({
                  key: { status: "valid", value: t },
                  value: { status: "valid", value: r.data[t] },
                });
            else if ("strict" === e)
              o.length > 0 &&
                (p(r, { code: a.unrecognized_keys, keys: o }), t.dirty());
            else if ("strip" !== e)
              throw new Error(
                "Internal ZodObject error: invalid unknownKeys value."
              );
          } else {
            const e = this._def.catchall;
            for (const t of o) {
              const i = r.data[t];
              c.push({
                key: { status: "valid", value: t },
                value: e._parse(new I(r, i, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  const e = [];
                  for (const t of c) {
                    const r = await t.key;
                    e.push({
                      key: r,
                      value: await t.value,
                      alwaysSet: t.alwaysSet,
                    });
                  }
                  return e;
                })
                .then((e) => f.mergeObjectSync(t, e))
            : f.mergeObjectSync(t, c);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            E.errToObj,
            new G({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, r) => {
                      var i, n, s, o;
                      const a =
                        null !==
                          (s =
                            null === (n = (i = this._def).errorMap) ||
                            void 0 === n
                              ? void 0
                              : n.call(i, t, r).message) && void 0 !== s
                          ? s
                          : r.defaultError;
                      return "unrecognized_keys" === t.code
                        ? {
                            message:
                              null !== (o = E.errToObj(e).message) &&
                              void 0 !== o
                                ? o
                                : a,
                          }
                        : { message: a };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new G({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new G({ ...this._def, unknownKeys: "passthrough" });
        }
        extend(e) {
          return new G({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new G({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: Oe.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new G({ ...this._def, catchall: e });
        }
        pick(e) {
          const t = {};
          return (
            i.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          const t = {};
          return (
            i.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return J(this);
        }
        partial(e) {
          const t = {};
          return (
            i.objectKeys(this.shape).forEach((r) => {
              const i = this.shape[r];
              e && !e[r] ? (t[r] = i) : (t[r] = i.optional());
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          const t = {};
          return (
            i.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof fe; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return le(i.objectKeys(this.shape));
        }
      }
      (G.create = (e, t) =>
        new G({
          shape: () => e,
          unknownKeys: "strip",
          catchall: F.create(),
          typeName: Oe.ZodObject,
          ...O(t),
        })),
        (G.strictCreate = (e, t) =>
          new G({
            shape: () => e,
            unknownKeys: "strict",
            catchall: F.create(),
            typeName: Oe.ZodObject,
            ...O(t),
          })),
        (G.lazycreate = (e, t) =>
          new G({
            shape: e,
            unknownKeys: "strip",
            catchall: F.create(),
            typeName: Oe.ZodObject,
            ...O(t),
          }));
      class Y extends P {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                const r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              })
            ).then(function (e) {
              for (const t of e)
                if ("valid" === t.result.status) return t.result;
              for (const i of e)
                if ("dirty" === i.result.status)
                  return t.common.issues.push(...i.ctx.common.issues), i.result;
              const r = e.map((e) => new c(e.ctx.common.issues));
              return p(t, { code: a.invalid_union, unionErrors: r }), g;
            });
          {
            let e;
            const i = [];
            for (const s of r) {
              const r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                n = s._parseSync({ data: t.data, path: t.path, parent: r });
              if ("valid" === n.status) return n;
              "dirty" !== n.status || e || (e = { result: n, ctx: r }),
                r.common.issues.length && i.push(r.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            const n = i.map((e) => new c(e));
            return p(t, { code: a.invalid_union, unionErrors: n }), g;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      Y.create = (e, t) =>
        new Y({ options: e, typeName: Oe.ZodUnion, ...O(t) });
      const Q = (e) =>
        e instanceof ae
          ? Q(e.schema)
          : e instanceof pe
          ? Q(e.innerType())
          : e instanceof ce
          ? [e.value]
          : e instanceof he
          ? e.options
          : e instanceof ue
          ? Object.keys(e.enum)
          : e instanceof ye
          ? Q(e._def.innerType)
          : e instanceof z
          ? [void 0]
          : e instanceof H
          ? [null]
          : null;
      class X extends P {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== s.object)
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.object,
                received: t.parsedType,
              }),
              g
            );
          const r = this.discriminator,
            i = t.data[r],
            n = this.optionsMap.get(i);
          return n
            ? t.common.async
              ? n._parseAsync({ data: t.data, path: t.path, parent: t })
              : n._parseSync({ data: t.data, path: t.path, parent: t })
            : (p(t, {
                code: a.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              g);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          const i = new Map();
          for (const n of t) {
            const t = Q(n.shape[e]);
            if (!t)
              throw new Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (const r of t) {
              if (i.has(r))
                throw new Error(
                  `Discriminator property ${String(
                    e
                  )} has duplicate value ${String(r)}`
                );
              i.set(r, n);
            }
          }
          return new X({
            typeName: Oe.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: i,
            ...O(r),
          });
        }
      }
      function ee(e, t) {
        const r = o(e),
          n = o(t);
        if (e === t) return { valid: !0, data: e };
        if (r === s.object && n === s.object) {
          const r = i.objectKeys(t),
            n = i.objectKeys(e).filter((e) => -1 !== r.indexOf(e)),
            s = { ...e, ...t };
          for (const i of n) {
            const r = ee(e[i], t[i]);
            if (!r.valid) return { valid: !1 };
            s[i] = r.data;
          }
          return { valid: !0, data: s };
        }
        if (r === s.array && n === s.array) {
          if (e.length !== t.length) return { valid: !1 };
          const r = [];
          for (let i = 0; i < e.length; i++) {
            const n = ee(e[i], t[i]);
            if (!n.valid) return { valid: !1 };
            r.push(n.data);
          }
          return { valid: !0, data: r };
        }
        return r === s.date && n === s.date && +e === +t
          ? { valid: !0, data: e }
          : { valid: !1 };
      }
      class te extends P {
        _parse(e) {
          const { status: t, ctx: r } = this._processInputParams(e),
            i = (e, i) => {
              if (w(e) || w(i)) return g;
              const n = ee(e.value, i.value);
              return n.valid
                ? ((v(e) || v(i)) && t.dirty(),
                  { status: t.value, value: n.data })
                : (p(r, { code: a.invalid_intersection_types }), g);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then((e) => {
                let [t, r] = e;
                return i(t, r);
              })
            : i(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                })
              );
        }
      }
      te.create = (e, t, r) =>
        new te({ left: e, right: t, typeName: Oe.ZodIntersection, ...O(r) });
      class re extends P {
        _parse(e) {
          const { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== s.array)
            return (
              p(r, {
                code: a.invalid_type,
                expected: s.array,
                received: r.parsedType,
              }),
              g
            );
          if (r.data.length < this._def.items.length)
            return (
              p(r, {
                code: a.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              g
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (p(r, {
              code: a.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          const i = [...r.data]
            .map((e, t) => {
              const i = this._def.items[t] || this._def.rest;
              return i ? i._parse(new I(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(i).then((e) => f.mergeArray(t, e))
            : f.mergeArray(t, i);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new re({ ...this._def, rest: e });
        }
      }
      re.create = (e, t) => {
        if (!Array.isArray(e))
          throw new Error(
            "You must pass an array of schemas to z.tuple([ ... ])"
          );
        return new re({ items: e, typeName: Oe.ZodTuple, rest: null, ...O(t) });
      };
      class ie extends P {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          const { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== s.object)
            return (
              p(r, {
                code: a.invalid_type,
                expected: s.object,
                received: r.parsedType,
              }),
              g
            );
          const i = [],
            n = this._def.keyType,
            o = this._def.valueType;
          for (const s in r.data)
            i.push({
              key: n._parse(new I(r, s, r.path, s)),
              value: o._parse(new I(r, r.data[s], r.path, s)),
            });
          return r.common.async
            ? f.mergeObjectAsync(t, i)
            : f.mergeObjectSync(t, i);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new ie(
            t instanceof P
              ? { keyType: e, valueType: t, typeName: Oe.ZodRecord, ...O(r) }
              : {
                  keyType: D.create(),
                  valueType: e,
                  typeName: Oe.ZodRecord,
                  ...O(t),
                }
          );
        }
      }
      class ne extends P {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          const { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== s.map)
            return (
              p(r, {
                code: a.invalid_type,
                expected: s.map,
                received: r.parsedType,
              }),
              g
            );
          const i = this._def.keyType,
            n = this._def.valueType,
            o = [...r.data.entries()].map((e, t) => {
              let [s, o] = e;
              return {
                key: i._parse(new I(r, s, r.path, [t, "key"])),
                value: n._parse(new I(r, o, r.path, [t, "value"])),
              };
            });
          if (r.common.async) {
            const e = new Map();
            return Promise.resolve().then(async () => {
              for (const r of o) {
                const i = await r.key,
                  n = await r.value;
                if ("aborted" === i.status || "aborted" === n.status) return g;
                ("dirty" !== i.status && "dirty" !== n.status) || t.dirty(),
                  e.set(i.value, n.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            const e = new Map();
            for (const r of o) {
              const i = r.key,
                n = r.value;
              if ("aborted" === i.status || "aborted" === n.status) return g;
              ("dirty" !== i.status && "dirty" !== n.status) || t.dirty(),
                e.set(i.value, n.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      ne.create = (e, t, r) =>
        new ne({ valueType: t, keyType: e, typeName: Oe.ZodMap, ...O(r) });
      class se extends P {
        _parse(e) {
          const { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== s.set)
            return (
              p(r, {
                code: a.invalid_type,
                expected: s.set,
                received: r.parsedType,
              }),
              g
            );
          const i = this._def;
          null !== i.minSize &&
            r.data.size < i.minSize.value &&
            (p(r, {
              code: a.too_small,
              minimum: i.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: i.minSize.message,
            }),
            t.dirty()),
            null !== i.maxSize &&
              r.data.size > i.maxSize.value &&
              (p(r, {
                code: a.too_big,
                maximum: i.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: i.maxSize.message,
              }),
              t.dirty());
          const n = this._def.valueType;
          function o(e) {
            const r = new Set();
            for (const i of e) {
              if ("aborted" === i.status) return g;
              "dirty" === i.status && t.dirty(), r.add(i.value);
            }
            return { status: t.value, value: r };
          }
          const c = [...r.data.values()].map((e, t) =>
            n._parse(new I(r, e, r.path, t))
          );
          return r.common.async ? Promise.all(c).then((e) => o(e)) : o(c);
        }
        min(e, t) {
          return new se({
            ...this._def,
            minSize: { value: e, message: E.toString(t) },
          });
        }
        max(e, t) {
          return new se({
            ...this._def,
            maxSize: { value: e, message: E.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      se.create = (e, t) =>
        new se({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: Oe.ZodSet,
          ...O(t),
        });
      class oe extends P {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== s.function)
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.function,
                received: t.parsedType,
              }),
              g
            );
          function r(e, r) {
            return d({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                u(),
                l,
              ].filter((e) => !!e),
              issueData: { code: a.invalid_arguments, argumentsError: r },
            });
          }
          function i(e, r) {
            return d({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                u(),
                l,
              ].filter((e) => !!e),
              issueData: { code: a.invalid_return_type, returnTypeError: r },
            });
          }
          const n = { errorMap: t.common.contextualErrorMap },
            o = t.data;
          if (this._def.returns instanceof de) {
            const e = this;
            return m(async function () {
              for (
                var t = arguments.length, s = new Array(t), a = 0;
                a < t;
                a++
              )
                s[a] = arguments[a];
              const l = new c([]),
                h = await e._def.args.parseAsync(s, n).catch((e) => {
                  throw (l.addIssue(r(s, e)), l);
                }),
                u = await Reflect.apply(o, this, h);
              return await e._def.returns._def.type
                .parseAsync(u, n)
                .catch((e) => {
                  throw (l.addIssue(i(u, e)), l);
                });
            });
          }
          {
            const e = this;
            return m(function () {
              for (
                var t = arguments.length, s = new Array(t), a = 0;
                a < t;
                a++
              )
                s[a] = arguments[a];
              const l = e._def.args.safeParse(s, n);
              if (!l.success) throw new c([r(s, l.error)]);
              const h = Reflect.apply(o, this, l.data),
                u = e._def.returns.safeParse(h, n);
              if (!u.success) throw new c([i(h, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return new oe({ ...this._def, args: re.create(t).rest(K.create()) });
        }
        returns(e) {
          return new oe({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new oe({
            args: e || re.create([]).rest(K.create()),
            returns: t || K.create(),
            typeName: Oe.ZodFunction,
            ...O(r),
          });
        }
      }
      class ae extends P {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      ae.create = (e, t) =>
        new ae({ getter: e, typeName: Oe.ZodLazy, ...O(t) });
      class ce extends P {
        _parse(e) {
          if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                received: t.data,
                code: a.invalid_literal,
                expected: this._def.value,
              }),
              g
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function le(e, t) {
        return new he({ values: e, typeName: Oe.ZodEnum, ...O(t) });
      }
      ce.create = (e, t) =>
        new ce({ value: e, typeName: Oe.ZodLiteral, ...O(t) });
      class he extends P {
        _parse(e) {
          if ("string" !== typeof e.data) {
            const t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              p(t, {
                expected: i.joinValues(r),
                received: t.parsedType,
                code: a.invalid_type,
              }),
              g
            );
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            const t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              p(t, {
                received: t.data,
                code: a.invalid_enum_value,
                options: r,
              }),
              g
            );
          }
          return m(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        extract(e) {
          return he.create(e);
        }
        exclude(e) {
          return he.create(this.options.filter((t) => !e.includes(t)));
        }
      }
      he.create = le;
      class ue extends P {
        _parse(e) {
          const t = i.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== s.string && r.parsedType !== s.number) {
            const e = i.objectValues(t);
            return (
              p(r, {
                expected: i.joinValues(e),
                received: r.parsedType,
                code: a.invalid_type,
              }),
              g
            );
          }
          if (-1 === t.indexOf(e.data)) {
            const e = i.objectValues(t);
            return (
              p(r, {
                received: r.data,
                code: a.invalid_enum_value,
                options: e,
              }),
              g
            );
          }
          return m(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      ue.create = (e, t) =>
        new ue({ values: e, typeName: Oe.ZodNativeEnum, ...O(t) });
      class de extends P {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== s.promise && !1 === t.common.async)
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.promise,
                received: t.parsedType,
              }),
              g
            );
          const r =
            t.parsedType === s.promise ? t.data : Promise.resolve(t.data);
          return m(
            r.then((e) =>
              this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap,
              })
            )
          );
        }
      }
      de.create = (e, t) =>
        new de({ type: e, typeName: Oe.ZodPromise, ...O(t) });
      class pe extends P {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === Oe.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          const { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null,
            s = {
              addIssue: (e) => {
                p(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((s.addIssue = s.addIssue.bind(s)), "preprocess" === n.type)) {
            const e = n.transform(r.data, s);
            return r.common.issues.length
              ? { status: "dirty", value: r.data }
              : r.common.async
              ? Promise.resolve(e).then((e) =>
                  this._def.schema._parseAsync({
                    data: e,
                    path: r.path,
                    parent: r,
                  })
                )
              : this._def.schema._parseSync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
          }
          if ("refinement" === n.type) {
            const e = (e) => {
              const t = n.refinement(e, s);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw new Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return e;
            };
            if (!1 === r.common.async) {
              const i = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === i.status
                ? g
                : ("dirty" === i.status && t.dirty(),
                  e(i.value),
                  { status: t.value, value: i.value });
            }
            return this._def.schema
              ._parseAsync({ data: r.data, path: r.path, parent: r })
              .then((r) =>
                "aborted" === r.status
                  ? g
                  : ("dirty" === r.status && t.dirty(),
                    e(r.value).then(() => ({
                      status: t.value,
                      value: r.value,
                    })))
              );
          }
          if ("transform" === n.type) {
            if (!1 === r.common.async) {
              const e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!b(e)) return e;
              const i = n.transform(e.value, s);
              if (i instanceof Promise)
                throw new Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return { status: t.value, value: i };
            }
            return this._def.schema
              ._parseAsync({ data: r.data, path: r.path, parent: r })
              .then((e) =>
                b(e)
                  ? Promise.resolve(n.transform(e.value, s)).then((e) => ({
                      status: t.value,
                      value: e,
                    }))
                  : e
              );
          }
          i.assertNever(n);
        }
      }
      (pe.create = (e, t, r) =>
        new pe({ schema: e, typeName: Oe.ZodEffects, effect: t, ...O(r) })),
        (pe.createWithPreprocess = (e, t, r) =>
          new pe({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: Oe.ZodEffects,
            ...O(r),
          }));
      class fe extends P {
        _parse(e) {
          return this._getType(e) === s.undefined
            ? m(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      fe.create = (e, t) =>
        new fe({ innerType: e, typeName: Oe.ZodOptional, ...O(t) });
      class ge extends P {
        _parse(e) {
          return this._getType(e) === s.null
            ? m(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ge.create = (e, t) =>
        new ge({ innerType: e, typeName: Oe.ZodNullable, ...O(t) });
      class ye extends P {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          let r = t.data;
          return (
            t.parsedType === s.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ye.create = (e, t) =>
        new ye({
          innerType: e,
          typeName: Oe.ZodDefault,
          defaultValue:
            "function" === typeof t.default ? t.default : () => t.default,
          ...O(t),
        });
      class me extends P {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            i = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return _(i)
            ? i.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new c(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: "valid",
                value:
                  "valid" === i.status
                    ? i.value
                    : this._def.catchValue({
                        get error() {
                          return new c(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      me.create = (e, t) =>
        new me({
          innerType: e,
          typeName: Oe.ZodCatch,
          catchValue: "function" === typeof t.catch ? t.catch : () => t.catch,
          ...O(t),
        });
      class we extends P {
        _parse(e) {
          if (this._getType(e) !== s.nan) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, {
                code: a.invalid_type,
                expected: s.nan,
                received: t.parsedType,
              }),
              g
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      we.create = (e) => new we({ typeName: Oe.ZodNaN, ...O(e) });
      const ve = Symbol("zod_brand");
      class be extends P {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class _e extends P {
        _parse(e) {
          const { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async) {
            return (async () => {
              const e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === e.status
                ? g
                : "dirty" === e.status
                ? (t.dirty(), y(e.value))
                : this._def.out._parseAsync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
            })();
          }
          {
            const e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return "aborted" === e.status
              ? g
              : "dirty" === e.status
              ? (t.dirty(), { status: "dirty", value: e.value })
              : this._def.out._parseSync({
                  data: e.value,
                  path: r.path,
                  parent: r,
                });
          }
        }
        static create(e, t) {
          return new _e({ in: e, out: t, typeName: Oe.ZodPipeline });
        }
      }
      class Ee extends P {
        _parse(e) {
          const t = this._def.innerType._parse(e);
          return b(t) && (t.value = Object.freeze(t.value)), t;
        }
      }
      Ee.create = (e, t) =>
        new Ee({ innerType: e, typeName: Oe.ZodReadonly, ...O(t) });
      const Ie = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = arguments.length > 2 ? arguments[2] : void 0;
          return e
            ? V.create().superRefine((i, n) => {
                var s, o;
                if (!e(i)) {
                  const e =
                      "function" === typeof t
                        ? t(i)
                        : "string" === typeof t
                        ? { message: t }
                        : t,
                    a =
                      null ===
                        (o = null !== (s = e.fatal) && void 0 !== s ? s : r) ||
                      void 0 === o ||
                      o,
                    c = "string" === typeof e ? { message: e } : e;
                  n.addIssue({ code: "custom", ...c, fatal: a });
                }
              })
            : V.create();
        },
        Se = { object: G.lazycreate };
      var Oe;
      !(function (e) {
        (e.ZodString = "ZodString"),
          (e.ZodNumber = "ZodNumber"),
          (e.ZodNaN = "ZodNaN"),
          (e.ZodBigInt = "ZodBigInt"),
          (e.ZodBoolean = "ZodBoolean"),
          (e.ZodDate = "ZodDate"),
          (e.ZodSymbol = "ZodSymbol"),
          (e.ZodUndefined = "ZodUndefined"),
          (e.ZodNull = "ZodNull"),
          (e.ZodAny = "ZodAny"),
          (e.ZodUnknown = "ZodUnknown"),
          (e.ZodNever = "ZodNever"),
          (e.ZodVoid = "ZodVoid"),
          (e.ZodArray = "ZodArray"),
          (e.ZodObject = "ZodObject"),
          (e.ZodUnion = "ZodUnion"),
          (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
          (e.ZodIntersection = "ZodIntersection"),
          (e.ZodTuple = "ZodTuple"),
          (e.ZodRecord = "ZodRecord"),
          (e.ZodMap = "ZodMap"),
          (e.ZodSet = "ZodSet"),
          (e.ZodFunction = "ZodFunction"),
          (e.ZodLazy = "ZodLazy"),
          (e.ZodLiteral = "ZodLiteral"),
          (e.ZodEnum = "ZodEnum"),
          (e.ZodEffects = "ZodEffects"),
          (e.ZodNativeEnum = "ZodNativeEnum"),
          (e.ZodOptional = "ZodOptional"),
          (e.ZodNullable = "ZodNullable"),
          (e.ZodDefault = "ZodDefault"),
          (e.ZodCatch = "ZodCatch"),
          (e.ZodPromise = "ZodPromise"),
          (e.ZodBranded = "ZodBranded"),
          (e.ZodPipeline = "ZodPipeline"),
          (e.ZodReadonly = "ZodReadonly");
      })(Oe || (Oe = {}));
      const Pe = D.create,
        xe = U.create,
        Te = we.create,
        Ae = q.create,
        Ne = M.create,
        Re = B.create,
        ke = $.create,
        Ce = z.create,
        je = H.create,
        De = V.create,
        Le = K.create,
        Ue = F.create,
        qe = Z.create,
        Me = W.create,
        Be = G.create,
        $e = G.strictCreate,
        ze = Y.create,
        He = X.create,
        Ve = te.create,
        Ke = re.create,
        Fe = ie.create,
        Ze = ne.create,
        We = se.create,
        Je = oe.create,
        Ge = ae.create,
        Ye = ce.create,
        Qe = he.create,
        Xe = ue.create,
        et = de.create,
        tt = pe.create,
        rt = fe.create,
        it = ge.create,
        nt = pe.createWithPreprocess,
        st = _e.create,
        ot = {
          string: (e) => D.create({ ...e, coerce: !0 }),
          number: (e) => U.create({ ...e, coerce: !0 }),
          boolean: (e) => M.create({ ...e, coerce: !0 }),
          bigint: (e) => q.create({ ...e, coerce: !0 }),
          date: (e) => B.create({ ...e, coerce: !0 }),
        },
        at = g;
      var ct = Object.freeze({
        __proto__: null,
        defaultErrorMap: l,
        setErrorMap: function (e) {
          h = e;
        },
        getErrorMap: u,
        makeIssue: d,
        EMPTY_PATH: [],
        addIssueToContext: p,
        ParseStatus: f,
        INVALID: g,
        DIRTY: y,
        OK: m,
        isAborted: w,
        isDirty: v,
        isValid: b,
        isAsync: _,
        get util() {
          return i;
        },
        get objectUtil() {
          return n;
        },
        ZodParsedType: s,
        getParsedType: o,
        ZodType: P,
        ZodString: D,
        ZodNumber: U,
        ZodBigInt: q,
        ZodBoolean: M,
        ZodDate: B,
        ZodSymbol: $,
        ZodUndefined: z,
        ZodNull: H,
        ZodAny: V,
        ZodUnknown: K,
        ZodNever: F,
        ZodVoid: Z,
        ZodArray: W,
        ZodObject: G,
        ZodUnion: Y,
        ZodDiscriminatedUnion: X,
        ZodIntersection: te,
        ZodTuple: re,
        ZodRecord: ie,
        ZodMap: ne,
        ZodSet: se,
        ZodFunction: oe,
        ZodLazy: ae,
        ZodLiteral: ce,
        ZodEnum: he,
        ZodNativeEnum: ue,
        ZodPromise: de,
        ZodEffects: pe,
        ZodTransformer: pe,
        ZodOptional: fe,
        ZodNullable: ge,
        ZodDefault: ye,
        ZodCatch: me,
        ZodNaN: we,
        BRAND: ve,
        ZodBranded: be,
        ZodPipeline: _e,
        ZodReadonly: Ee,
        custom: Ie,
        Schema: P,
        ZodSchema: P,
        late: Se,
        get ZodFirstPartyTypeKind() {
          return Oe;
        },
        coerce: ot,
        any: De,
        array: Me,
        bigint: Ae,
        boolean: Ne,
        date: Re,
        discriminatedUnion: He,
        effect: tt,
        enum: Qe,
        function: Je,
        instanceof: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { message: `Input not instance of ${e.name}` };
          return Ie((t) => t instanceof e, t);
        },
        intersection: Ve,
        lazy: Ge,
        literal: Ye,
        map: Ze,
        nan: Te,
        nativeEnum: Xe,
        never: Ue,
        null: je,
        nullable: it,
        number: xe,
        object: Be,
        oboolean: () => Ne().optional(),
        onumber: () => xe().optional(),
        optional: rt,
        ostring: () => Pe().optional(),
        pipeline: st,
        preprocess: nt,
        promise: et,
        record: Fe,
        set: We,
        strictObject: $e,
        string: Pe,
        symbol: ke,
        transformer: tt,
        tuple: Ke,
        undefined: Ce,
        union: ze,
        unknown: Le,
        void: qe,
        NEVER: at,
        ZodIssueCode: a,
        quotelessJson: (e) =>
          JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: c,
      });
    },
    99296: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => My });
      var i = r(19922),
        n = r.n(i),
        s = r(74343);
      class o {}
      class a extends o {
        constructor(e) {
          super();
        }
      }
      const c = s.FIVE_SECONDS,
        l = "heartbeat_pulse";
      class h extends a {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.interval = c),
            (this.interval =
              (null === e || void 0 === e ? void 0 : e.interval) || c);
        }
        static async init(e) {
          const t = new h(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async initialize() {
          this.intervalRef = setInterval(
            () => this.pulse(),
            (0, s.toMiliseconds)(this.interval)
          );
        }
        pulse() {
          this.events.emit(l);
        }
      }
      var u = r(21541),
        d = r(13740).Buffer;
      function p(e) {
        try {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i];
          return (n = e(...r)) && "function" === typeof n.then
            ? n
            : Promise.resolve(n);
        } catch (s) {
          return Promise.reject(s);
        }
        var n;
      }
      function f(e) {
        if (
          (function (e) {
            const t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            const t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" === typeof e.toJSON) return f(e.toJSON());
        throw new Error("[unstorage] Cannot stringify value!");
      }
      const g = "base64:";
      function y(e) {
        return "string" === typeof e
          ? e
          : g +
              (function (e) {
                if (globalThis.Buffer) return d.from(e).toString("base64");
                return globalThis.btoa(String.fromCodePoint(...e));
              })(e);
      }
      function m(e) {
        return "string" !== typeof e
          ? e
          : e.startsWith(g)
          ? (function (e) {
              if (globalThis.Buffer) return d.from(e, "base64");
              return Uint8Array.from(globalThis.atob(e), (e) =>
                e.codePointAt(0)
              );
            })(e.slice(7))
          : e;
      }
      function w(e) {
        var t;
        return (
          (e &&
            (null === (t = e.split("?")[0]) || void 0 === t
              ? void 0
              : t
                  .replace(/[/\\]/g, ":")
                  .replace(/:+/g, ":")
                  .replace(/^:|:$/g, ""))) ||
          ""
        );
      }
      function v() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return w(t.join(":"));
      }
      function b(e) {
        return (e = w(e)) ? e + ":" : "";
      }
      const _ = () => {
        const e = new Map();
        return {
          name: "memory",
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem(t) {
            var r;
            return null !== (r = e.get(t)) && void 0 !== r ? r : null;
          },
          getItemRaw(t) {
            var r;
            return null !== (r = e.get(t)) && void 0 !== r ? r : null;
          },
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function E() {
        const e = {
            mounts: {
              "":
                (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
                ).driver || _(),
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {},
          },
          t = (t) => {
            for (const r of e.mountpoints)
              if (t.startsWith(r))
                return {
                  base: r,
                  relativeKey: t.slice(r.length),
                  driver: e.mounts[r],
                };
            return { base: "", relativeKey: t, driver: e.mounts[""] };
          },
          r = (t, r) =>
            e.mountpoints
              .filter((e) => e.startsWith(t) || (r && t.startsWith(e)))
              .map((r) => ({
                relativeBase: t.length > r.length ? t.slice(r.length) : void 0,
                mountpoint: r,
                driver: e.mounts[r],
              })),
          i = (t, r) => {
            if (e.watching) {
              r = w(r);
              for (const i of e.watchListeners) i(t, r);
            }
          },
          n = async () => {
            if (e.watching) {
              for (const t in e.unwatch) await e.unwatch[t]();
              (e.unwatch = {}), (e.watching = !1);
            }
          },
          s = (e, r, i) => {
            const n = new Map(),
              s = (e) => {
                let t = n.get(e.base);
                return (
                  t ||
                    ((t = { driver: e.driver, base: e.base, items: [] }),
                    n.set(e.base, t)),
                  t
                );
              };
            for (const o of e) {
              const e = "string" === typeof o,
                i = w(e ? o : o.key),
                n = e ? void 0 : o.value,
                a = e || !o.options ? r : { ...r, ...o.options },
                c = t(i);
              s(c).items.push({
                key: i,
                value: n,
                relativeKey: c.relativeKey,
                options: a,
              });
            }
            return Promise.all([...n.values()].map((e) => i(e))).then((e) =>
              e.flat()
            );
          },
          o = {
            hasItem(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = w(e);
              const { relativeKey: i, driver: n } = t(e);
              return p(n.hasItem, i, r);
            },
            getItem(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = w(e);
              const { relativeKey: i, driver: n } = t(e);
              return p(n.getItem, i, r).then((e) => (0, u.Ay)(e));
            },
            getItems(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return s(e, t, (e) =>
                e.driver.getItems
                  ? p(
                      e.driver.getItems,
                      e.items.map((e) => ({
                        key: e.relativeKey,
                        options: e.options,
                      })),
                      t
                    ).then((t) =>
                      t.map((t) => ({
                        key: v(e.base, t.key),
                        value: (0, u.Ay)(t.value),
                      }))
                    )
                  : Promise.all(
                      e.items.map((t) =>
                        p(e.driver.getItem, t.relativeKey, t.options).then(
                          (e) => ({ key: t.key, value: (0, u.Ay)(e) })
                        )
                      )
                    )
              );
            },
            getItemRaw(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = w(e);
              const { relativeKey: i, driver: n } = t(e);
              return n.getItemRaw
                ? p(n.getItemRaw, i, r)
                : p(n.getItem, i, r).then((e) => m(e));
            },
            async setItem(e, r) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(e);
              e = w(e);
              const { relativeKey: s, driver: a } = t(e);
              a.setItem &&
                (await p(a.setItem, s, f(r), n), a.watch || i("update", e));
            },
            async setItems(e, t) {
              await s(e, t, async (e) => {
                if (e.driver.setItems)
                  return p(
                    e.driver.setItems,
                    e.items.map((e) => ({
                      key: e.relativeKey,
                      value: f(e.value),
                      options: e.options,
                    })),
                    t
                  );
                e.driver.setItem &&
                  (await Promise.all(
                    e.items.map((t) =>
                      p(e.driver.setItem, t.relativeKey, f(t.value), t.options)
                    )
                  ));
              });
            },
            async setItemRaw(e, r) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(e, n);
              e = w(e);
              const { relativeKey: s, driver: a } = t(e);
              if (a.setItemRaw) await p(a.setItemRaw, s, r, n);
              else {
                if (!a.setItem) return;
                await p(a.setItem, s, y(r), n);
              }
              a.watch || i("update", e);
            },
            async removeItem(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" === typeof r && (r = { removeMeta: r }), (e = w(e));
              const { relativeKey: n, driver: s } = t(e);
              s.removeItem &&
                (await p(s.removeItem, n, r),
                (r.removeMeta || r.removeMata) &&
                  (await p(s.removeItem, n + "$", r)),
                s.watch || i("remove", e));
            },
            async getMeta(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" === typeof r && (r = { nativeOnly: r }), (e = w(e));
              const { relativeKey: i, driver: n } = t(e),
                s = Object.create(null);
              if (
                (n.getMeta && Object.assign(s, await p(n.getMeta, i, r)),
                !r.nativeOnly)
              ) {
                const e = await p(n.getItem, i + "$", r).then((e) =>
                  (0, u.Ay)(e)
                );
                e &&
                  "object" === typeof e &&
                  ("string" === typeof e.atime && (e.atime = new Date(e.atime)),
                  "string" === typeof e.mtime && (e.mtime = new Date(e.mtime)),
                  Object.assign(s, e));
              }
              return s;
            },
            setMeta(e, t) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return this.setItem(e + "$", t, r);
            },
            removeMeta(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return this.removeItem(e + "$", t);
            },
            async getKeys(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              e = b(e);
              const i = r(e, !0);
              let n = [];
              const s = [];
              let o = !0;
              for (const r of i) {
                var a;
                (null !== (a = r.driver.flags) && void 0 !== a && a.maxDepth) ||
                  (o = !1);
                const e = await p(r.driver.getKeys, r.relativeBase, t);
                for (const t of e) {
                  const e = r.mountpoint + w(t);
                  n.some((t) => e.startsWith(t)) || s.push(e);
                }
                n = [
                  r.mountpoint,
                  ...n.filter((e) => !e.startsWith(r.mountpoint)),
                ];
              }
              const c = void 0 !== t.maxDepth && !o;
              return s.filter(
                (r) =>
                  (!c ||
                    (function (e, t) {
                      if (void 0 === t) return !0;
                      let r = 0,
                        i = e.indexOf(":");
                      for (; i > -1; ) r++, (i = e.indexOf(":", i + 1));
                      return r <= t;
                    })(r, t.maxDepth)) &&
                  (function (e, t) {
                    return t
                      ? e.startsWith(t) && "$" !== e[e.length - 1]
                      : "$" !== e[e.length - 1];
                  })(r, e)
              );
            },
            async clear(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (e = b(e)),
                await Promise.all(
                  r(e, !1).map(async (e) => {
                    if (e.driver.clear)
                      return p(e.driver.clear, e.relativeBase, t);
                    if (e.driver.removeItem) {
                      const r = await e.driver.getKeys(e.relativeBase || "", t);
                      return Promise.all(
                        r.map((r) => e.driver.removeItem(r, t))
                      );
                    }
                  })
                );
            },
            async dispose() {
              await Promise.all(Object.values(e.mounts).map((e) => S(e)));
            },
            watch: async (t) => (
              await (async () => {
                if (!e.watching) {
                  e.watching = !0;
                  for (const t in e.mounts)
                    e.unwatch[t] = await I(e.mounts[t], i, t);
                }
              })(),
              e.watchListeners.push(t),
              async () => {
                (e.watchListeners = e.watchListeners.filter((e) => e !== t)),
                  0 === e.watchListeners.length && (await n());
              }
            ),
            async unwatch() {
              (e.watchListeners = []), await n();
            },
            mount(t, r) {
              if ((t = b(t)) && e.mounts[t])
                throw new Error(`already mounted at ${t}`);
              return (
                t &&
                  (e.mountpoints.push(t),
                  e.mountpoints.sort((e, t) => t.length - e.length)),
                (e.mounts[t] = r),
                e.watching &&
                  Promise.resolve(I(r, i, t))
                    .then((r) => {
                      e.unwatch[t] = r;
                    })
                    .catch(console.error),
                o
              );
            },
            async unmount(t) {
              let r =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              if ((t = b(t)) && e.mounts[t]) {
                var i, n;
                if (e.watching && t in e.unwatch)
                  null === (i = (n = e.unwatch)[t]) ||
                    void 0 === i ||
                    i.call(n),
                    delete e.unwatch[t];
                r && (await S(e.mounts[t])),
                  (e.mountpoints = e.mountpoints.filter((e) => e !== t)),
                  delete e.mounts[t];
              }
            },
            getMount() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              e = w(e) + ":";
              const r = t(e);
              return { driver: r.driver, base: r.base };
            },
            getMounts() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              e = w(e);
              return r(e, t.parents).map((e) => ({
                driver: e.driver,
                base: e.mountpoint,
              }));
            },
            keys: function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.getKeys(e, t);
            },
            get: function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.getItem(e, t);
            },
            set: function (e, t) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return o.setItem(e, t, r);
            },
            has: function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.hasItem(e, t);
            },
            del: function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.removeItem(e, t);
            },
            remove: function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.removeItem(e, t);
            },
          };
        return o;
      }
      function I(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {};
      }
      async function S(e) {
        "function" === typeof e.dispose && (await p(e.dispose));
      }
      var O = r(56720),
        P = r(92131);
      var x = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = e.base && e.base.length > 0 ? `${e.base}:` : "",
          r = (e) => t + e;
        let i;
        return (
          e.dbName && e.storeName && (i = (0, O.y$)(e.dbName, e.storeName)),
          {
            name: "idb-keyval",
            options: e,
            hasItem: async (e) => !(typeof (await (0, O.Jt)(r(e), i)) > "u"),
            async getItem(e) {
              var t;
              return null !== (t = await (0, O.Jt)(r(e), i)) && void 0 !== t
                ? t
                : null;
            },
            setItem: (e, t) => (0, O.hZ)(r(e), t, i),
            removeItem: (e) => (0, O.yH)(r(e), i),
            getKeys: () => (0, O.HP)(i),
            clear: () => (0, O.IU)(i),
          }
        );
      };
      class T {
        constructor() {
          this.indexedDb = E({
            driver: x({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          const t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, (0, P.h)(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var A =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof r.g < "u"
            ? r.g
            : typeof self < "u"
            ? self
            : {},
        N = { exports: {} };
      function R(e) {
        var t;
        return [e[0], (0, P.j)(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        let e;
        function t() {}
        (e = t),
          (e.prototype.getItem = function (e) {
            return this.hasOwnProperty(e) ? String(this[e]) : null;
          }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            const e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          typeof A < "u" && A.localStorage
            ? (N.exports = A.localStorage)
            : typeof window < "u" && window.localStorage
            ? (N.exports = window.localStorage)
            : (N.exports = new t());
      })();
      class k {
        constructor() {
          this.localStorage = N.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(R);
        }
        async getItem(e) {
          const t = this.localStorage.getItem(e);
          if (null !== t) return (0, P.j)(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, (0, P.h)(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      const C = async (e, t) => {
        t.length &&
          t.forEach(async (t) => {
            await e.removeItem(t);
          });
      };
      class j {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          const e = new k();
          this.storage = e;
          try {
            (async (e, t, r) => {
              const i = "wc_storage_version",
                n = await t.getItem(i);
              if (n && n >= 1) return void r(t);
              const s = await e.getKeys();
              if (!s.length) return void r(t);
              const o = [];
              for (; s.length; ) {
                const r = s.shift();
                if (!r) continue;
                const i = r.toLowerCase();
                if (
                  i.includes("wc@") ||
                  i.includes("walletconnect") ||
                  i.includes("wc_") ||
                  i.includes("wallet_connect")
                ) {
                  const i = await e.getItem(r);
                  await t.setItem(r, i), o.push(r);
                }
              }
              await t.setItem(i, 1), r(t), C(e, o);
            })(e, new T(), this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var D = r(50771);
      class L extends o {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class U extends o {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class q {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class M extends o {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class B extends o {
        constructor(e) {
          super();
        }
      }
      class $ {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class z extends o {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class H extends o {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class V {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.store = r);
        }
      }
      class K {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class F {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = r);
        }
      }
      n();
      class Z {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      i.EventEmitter;
      class W {
        constructor(e) {
          this.client = e;
        }
      }
      function J(e) {
        if (
          !(function (e) {
            return (
              e instanceof Uint8Array ||
              (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
            );
          })(e)
        )
          throw new Error("Uint8Array expected");
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + e.length
          );
      }
      function G(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      const Y =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        Q = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      function X(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          J(e),
          e
        );
      }
      class ee {
        clone() {
          return this._cloneInto();
        }
      }
      function te() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
        if (Y && "function" == typeof Y.getRandomValues)
          return Y.getRandomValues(new Uint8Array(e));
        if (Y && "function" == typeof Y.randomBytes) return Y.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
      }
      class re extends ee {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = Q(this.buffer));
        }
        update(e) {
          G(this);
          const { view: t, buffer: r, blockLen: i } = this,
            n = (e = X(e)).length;
          for (let s = 0; s < n; ) {
            const o = Math.min(i - this.pos, n - s);
            if (o !== i)
              r.set(e.subarray(s, s + o), this.pos),
                (this.pos += o),
                (s += o),
                this.pos === i && (this.process(t, 0), (this.pos = 0));
            else {
              const t = Q(e);
              for (; i <= n - s; s += i) this.process(t, s);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          G(this),
            (function (e, t) {
              J(e);
              const r = t.outputLen;
              if (e.length < r)
                throw new Error(
                  "digestInto() expects output buffer of length at least " + r
                );
            })(e, this),
            (this.finished = !0);
          const { buffer: t, view: r, blockLen: i, isLE: n } = this;
          let { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > i - s && (this.process(r, 0), (s = 0));
          for (let h = s; h < i; h++) t[h] = 0;
          (function (e, t, r, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, i);
            const n = BigInt(32),
              s = BigInt(4294967295),
              o = Number((r >> n) & s),
              a = Number(r & s),
              c = i ? 4 : 0,
              l = i ? 0 : 4;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), n),
            this.process(r, 0);
          const o = Q(e),
            a = this.outputLen;
          if (a % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const c = a / 4,
            l = this.get();
          if (c > l.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let h = 0; h < c; h++) o.setUint32(4 * h, l[h], n);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const {
            blockLen: t,
            buffer: r,
            length: i,
            finished: n,
            destroyed: s,
            pos: o,
          } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = n),
            (e.destroyed = s),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      const ie = BigInt(2 ** 32 - 1),
        ne = BigInt(32);
      function se(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & ie), l: Number((e >> ne) & ie) }
          : { h: 0 | Number((e >> ne) & ie), l: 0 | Number(e & ie) };
      }
      const oe = {
          fromBig: se,
          split: function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = new Uint32Array(e.length),
              i = new Uint32Array(e.length);
            for (let n = 0; n < e.length; n++) {
              const { h: s, l: o } = se(e[n], t);
              [r[n], i[n]] = [s, o];
            }
            return [r, i];
          },
          toBig: (e, t) => (BigInt(e >>> 0) << ne) | BigInt(t >>> 0),
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          rotr32H: (e, t) => t,
          rotr32L: (e, t) => e,
          rotlSH: (e, t, r) => (e << r) | (t >>> (32 - r)),
          rotlSL: (e, t, r) => (t << r) | (e >>> (32 - r)),
          rotlBH: (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
          rotlBL: (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
          add: function (e, t, r, i) {
            const n = (t >>> 0) + (i >>> 0);
            return { h: (e + r + ((n / 2 ** 32) | 0)) | 0, l: 0 | n };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, i) => (t + r + i + ((e / 2 ** 32) | 0)) | 0,
          add4L: (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
          add4H: (e, t, r, i, n) => (t + r + i + n + ((e / 2 ** 32) | 0)) | 0,
          add5H: (e, t, r, i, n, s) =>
            (t + r + i + n + s + ((e / 2 ** 32) | 0)) | 0,
          add5L: (e, t, r, i, n) =>
            (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (n >>> 0),
        },
        [ae, ce] = oe.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        le = new Uint32Array(80),
        he = new Uint32Array(80);
      class ue extends re {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          const {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: i,
            Ch: n,
            Cl: s,
            Dh: o,
            Dl: a,
            Eh: c,
            El: l,
            Fh: h,
            Fl: u,
            Gh: d,
            Gl: p,
            Hh: f,
            Hl: g,
          } = this;
          return [e, t, r, i, n, s, o, a, c, l, h, u, d, p, f, g];
        }
        set(e, t, r, i, n, s, o, a, c, l, h, u, d, p, f, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | i),
            (this.Ch = 0 | n),
            (this.Cl = 0 | s),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | h),
            (this.Fl = 0 | u),
            (this.Gh = 0 | d),
            (this.Gl = 0 | p),
            (this.Hh = 0 | f),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let w = 0; w < 16; w++, t += 4)
            (le[w] = e.getUint32(t)), (he[w] = e.getUint32((t += 4)));
          for (let w = 16; w < 80; w++) {
            const e = 0 | le[w - 15],
              t = 0 | he[w - 15],
              r = oe.rotrSH(e, t, 1) ^ oe.rotrSH(e, t, 8) ^ oe.shrSH(e, t, 7),
              i = oe.rotrSL(e, t, 1) ^ oe.rotrSL(e, t, 8) ^ oe.shrSL(e, t, 7),
              n = 0 | le[w - 2],
              s = 0 | he[w - 2],
              o = oe.rotrSH(n, s, 19) ^ oe.rotrBH(n, s, 61) ^ oe.shrSH(n, s, 6),
              a = oe.rotrSL(n, s, 19) ^ oe.rotrBL(n, s, 61) ^ oe.shrSL(n, s, 6),
              c = oe.add4L(i, a, he[w - 7], he[w - 16]),
              l = oe.add4H(c, r, o, le[w - 7], le[w - 16]);
            (le[w] = 0 | l), (he[w] = 0 | c);
          }
          let {
            Ah: r,
            Al: i,
            Bh: n,
            Bl: s,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: h,
            El: u,
            Fh: d,
            Fl: p,
            Gh: f,
            Gl: g,
            Hh: y,
            Hl: m,
          } = this;
          for (let w = 0; w < 80; w++) {
            const e =
                oe.rotrSH(h, u, 14) ^ oe.rotrSH(h, u, 18) ^ oe.rotrBH(h, u, 41),
              t =
                oe.rotrSL(h, u, 14) ^ oe.rotrSL(h, u, 18) ^ oe.rotrBL(h, u, 41),
              v = (h & d) ^ (~h & f),
              b = (u & p) ^ (~u & g),
              _ = oe.add5L(m, t, b, ce[w], he[w]),
              E = oe.add5H(_, y, e, v, ae[w], le[w]),
              I = 0 | _,
              S =
                oe.rotrSH(r, i, 28) ^ oe.rotrBH(r, i, 34) ^ oe.rotrBH(r, i, 39),
              O =
                oe.rotrSL(r, i, 28) ^ oe.rotrBL(r, i, 34) ^ oe.rotrBL(r, i, 39),
              P = (r & n) ^ (r & o) ^ (n & o),
              x = (i & s) ^ (i & a) ^ (s & a);
            (y = 0 | f),
              (m = 0 | g),
              (f = 0 | d),
              (g = 0 | p),
              (d = 0 | h),
              (p = 0 | u),
              ({ h: h, l: u } = oe.add(0 | c, 0 | l, 0 | E, 0 | I)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | n),
              (a = 0 | s),
              (n = 0 | r),
              (s = 0 | i);
            const T = oe.add3L(I, O, x);
            (r = oe.add3H(T, E, S, P)), (i = 0 | T);
          }
          ({ h: r, l: i } = oe.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
            ({ h: n, l: s } = oe.add(0 | this.Bh, 0 | this.Bl, 0 | n, 0 | s)),
            ({ h: o, l: a } = oe.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = oe.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: h, l: u } = oe.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
            ({ h: d, l: p } = oe.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | p)),
            ({ h: f, l: g } = oe.add(0 | this.Gh, 0 | this.Gl, 0 | f, 0 | g)),
            ({ h: y, l: m } = oe.add(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | m)),
            this.set(r, i, n, s, o, a, c, l, h, u, d, p, f, g, y, m);
        }
        roundClean() {
          le.fill(0), he.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      const de = (function (e) {
          const t = (t) => e().update(X(t)).digest(),
            r = e();
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new ue()),
        pe = BigInt(0),
        fe = BigInt(1),
        ge = BigInt(2);
      function ye(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function me(e) {
        if (!ye(e)) throw new Error("Uint8Array expected");
      }
      function we(e, t) {
        if ("boolean" != typeof t)
          throw new Error(e + " boolean expected, got " + t);
      }
      const ve = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function be(e) {
        me(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += ve[e[r]];
        return t;
      }
      function _e(e) {
        if ("string" != typeof e)
          throw new Error("hex string expected, got " + typeof e);
        return "" === e ? pe : BigInt("0x" + e);
      }
      const Ee = 48,
        Ie = 57,
        Se = 65,
        Oe = 70,
        Pe = 97,
        xe = 102;
      function Te(e) {
        return e >= Ee && e <= Ie
          ? e - Ee
          : e >= Se && e <= Oe
          ? e - (Se - 10)
          : e >= Pe && e <= xe
          ? e - (Pe - 10)
          : void 0;
      }
      function Ae(e) {
        if ("string" != typeof e)
          throw new Error("hex string expected, got " + typeof e);
        const t = e.length,
          r = t / 2;
        if (t % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + t
          );
        const i = new Uint8Array(r);
        for (let n = 0, s = 0; n < r; n++, s += 2) {
          const t = Te(e.charCodeAt(s)),
            r = Te(e.charCodeAt(s + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[s] + e[s + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                t +
                '" at index ' +
                s
            );
          }
          i[n] = 16 * t + r;
        }
        return i;
      }
      function Ne(e) {
        return me(e), _e(be(Uint8Array.from(e).reverse()));
      }
      function Re(e, t) {
        return Ae(e.toString(16).padStart(2 * t, "0"));
      }
      function ke(e, t) {
        return Re(e, t).reverse();
      }
      function Ce(e, t, r) {
        let i;
        if ("string" == typeof t)
          try {
            i = Ae(t);
          } catch (c) {
            throw new Error(
              e + " must be hex string or Uint8Array, cause: " + c
            );
          }
        else {
          if (!ye(t)) throw new Error(e + " must be hex string or Uint8Array");
          i = Uint8Array.from(t);
        }
        const n = i.length;
        if ("number" == typeof r && n !== r)
          throw new Error(e + " of length " + r + " expected, got " + n);
        return i;
      }
      function je() {
        let e = 0;
        for (let r = 0; r < arguments.length; r++) {
          const t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          me(t), (e += t.length);
        }
        const t = new Uint8Array(e);
        for (let r = 0, i = 0; r < arguments.length; r++) {
          const e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          t.set(e, i), (i += e.length);
        }
        return t;
      }
      const De = (e) => "bigint" == typeof e && pe <= e;
      function Le(e, t, r, i) {
        if (
          !(function (e, t, r) {
            return De(e) && De(t) && De(r) && t <= e && e < r;
          })(t, r, i)
        )
          throw new Error(
            "expected valid " + e + ": " + r + " <= n < " + i + ", got " + t
          );
      }
      const Ue = (e) => (ge << BigInt(e - 1)) - fe,
        qe = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || ye(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function Me(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const i = (t, r, i) => {
          const n = qe[r];
          if ("function" != typeof n)
            throw new Error("invalid validator function");
          const s = e[t];
          if ((!i || void 0 !== s) && !n(s, e))
            throw new Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + s
            );
        };
        for (const [n, s] of Object.entries(t)) i(n, s, !1);
        for (const [n, s] of Object.entries(r)) i(n, s, !0);
        return e;
      }
      function Be(e) {
        const t = new WeakMap();
        return function (r) {
          const i = t.get(r);
          if (void 0 !== i) return i;
          for (
            var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            s[o - 1] = arguments[o];
          const a = e(r, ...s);
          return t.set(r, a), a;
        };
      }
      const $e = BigInt(0),
        ze = BigInt(1),
        He = BigInt(2),
        Ve = BigInt(3),
        Ke = BigInt(4),
        Fe = BigInt(5),
        Ze = BigInt(8);
      function We(e, t) {
        const r = e % t;
        return r >= $e ? r : t + r;
      }
      function Je(e, t, r) {
        if (t < $e) throw new Error("invalid exponent, negatives unsupported");
        if (r <= $e) throw new Error("invalid modulus");
        if (r === ze) return $e;
        let i = ze;
        for (; t > $e; )
          t & ze && (i = (i * e) % r), (e = (e * e) % r), (t >>= ze);
        return i;
      }
      function Ge(e, t, r) {
        let i = e;
        for (; t-- > $e; ) (i *= i), (i %= r);
        return i;
      }
      function Ye(e, t) {
        if (e === $e) throw new Error("invert: expected non-zero number");
        if (t <= $e)
          throw new Error("invert: expected positive modulus, got " + t);
        let r = We(e, t),
          i = t,
          n = $e,
          s = ze;
        for (; r !== $e; ) {
          const e = i % r,
            t = n - s * (i / r);
          (i = r), (r = e), (n = s), (s = t);
        }
        if (i !== ze) throw new Error("invert: does not exist");
        return We(n, t);
      }
      function Qe(e) {
        if (e % Ke === Ve) {
          const t = (e + ze) / Ke;
          return function (e, r) {
            const i = e.pow(r, t);
            if (!e.eql(e.sqr(i), r)) throw new Error("Cannot find square root");
            return i;
          };
        }
        if (e % Ze === Fe) {
          const t = (e - Fe) / Ze;
          return function (e, r) {
            const i = e.mul(r, He),
              n = e.pow(i, t),
              s = e.mul(r, n),
              o = e.mul(e.mul(s, He), n),
              a = e.mul(s, e.sub(o, e.ONE));
            if (!e.eql(e.sqr(a), r)) throw new Error("Cannot find square root");
            return a;
          };
        }
        return (function (e) {
          const t = (e - ze) / He;
          let r, i, n;
          for (r = e - ze, i = 0; r % He === $e; r /= He, i++);
          for (n = He; n < e && Je(n, t, e) !== e - ze; n++)
            if (n > 1e3)
              throw new Error("Cannot find square root: likely non-prime P");
          if (1 === i) {
            const t = (e + ze) / Ke;
            return function (e, r) {
              const i = e.pow(r, t);
              if (!e.eql(e.sqr(i), r))
                throw new Error("Cannot find square root");
              return i;
            };
          }
          const s = (r + ze) / He;
          return function (e, o) {
            if (e.pow(o, t) === e.neg(e.ONE))
              throw new Error("Cannot find square root");
            let a = i,
              c = e.pow(e.mul(e.ONE, n), r),
              l = e.pow(o, s),
              h = e.pow(o, r);
            for (; !e.eql(h, e.ONE); ) {
              if (e.eql(h, e.ZERO)) return e.ZERO;
              let t = 1;
              for (let i = e.sqr(h); t < a && !e.eql(i, e.ONE); t++)
                i = e.sqr(i);
              const r = e.pow(c, ze << BigInt(a - t - 1));
              (c = e.sqr(r)), (l = e.mul(l, r)), (h = e.mul(h, c)), (a = t);
            }
            return l;
          };
        })(e);
      }
      const Xe = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function et(e, t) {
        const r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function tt(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e <= $e)
          throw new Error("invalid field: expected ORDER > 0, got " + e);
        const { nBitLength: n, nByteLength: s } = et(e, t);
        if (s > 2048)
          throw new Error("invalid field: expected ORDER of <= 2048 bytes");
        let o;
        const a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: s,
          MASK: Ue(n),
          ZERO: $e,
          ONE: ze,
          create: (t) => We(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw new Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return $e <= t && t < e;
          },
          is0: (e) => e === $e,
          isOdd: (e) => (e & ze) === ze,
          neg: (t) => We(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => We(t * t, e),
          add: (t, r) => We(t + r, e),
          sub: (t, r) => We(t - r, e),
          mul: (t, r) => We(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < $e)
                throw new Error("invalid exponent, negatives unsupported");
              if (r === $e) return e.ONE;
              if (r === ze) return t;
              let i = e.ONE,
                n = t;
              for (; r > $e; )
                r & ze && (i = e.mul(i, n)), (n = e.sqr(n)), (r >>= ze);
              return i;
            })(a, e, t),
          div: (t, r) => We(t * Ye(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => Ye(t, e),
          sqrt: i.sqrt || ((t) => (o || (o = Qe(e)), o(a, t))),
          invertBatch: (e) =>
            (function (e, t) {
              const r = new Array(t.length),
                i = t.reduce(
                  (t, i, n) => (e.is0(i) ? t : ((r[n] = t), e.mul(t, i))),
                  e.ONE
                ),
                n = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, n) =>
                    e.is0(i) ? t : ((r[n] = e.mul(t, r[n])), e.mul(t, i)),
                  n
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? ke(e, s) : Re(e, s)),
          fromBytes: (e) => {
            if (e.length !== s)
              throw new Error(
                "Field.fromBytes: expected " + s + " bytes, got " + e.length
              );
            return r
              ? Ne(e)
              : (function (e) {
                  return _e(be(e));
                })(e);
          },
        });
        return Object.freeze(a);
      }
      const rt = BigInt(0),
        it = BigInt(1);
      function nt(e, t) {
        const r = t.negate();
        return e ? r : t;
      }
      function st(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw new Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function ot(e, t) {
        st(e, t);
        return { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      const at = new WeakMap(),
        ct = new WeakMap();
      function lt(e) {
        return ct.get(e) || 1;
      }
      function ht(e, t, r, i) {
        if (
          ((function (e, t) {
            if (!Array.isArray(e)) throw new Error("array expected");
            e.forEach((e, r) => {
              if (!(e instanceof t))
                throw new Error("invalid point at index " + r);
            });
          })(r, e),
          (function (e, t) {
            if (!Array.isArray(e)) throw new Error("array of scalars expected");
            e.forEach((e, r) => {
              if (!t.isValid(e))
                throw new Error("invalid scalar at index " + r);
            });
          })(i, t),
          r.length !== i.length)
        )
          throw new Error(
            "arrays of points and scalars must have equal length"
          );
        const n = e.ZERO,
          s = (function (e) {
            let t;
            for (t = 0; e > pe; e >>= fe, t += 1);
            return t;
          })(BigInt(r.length)),
          o = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
          a = (1 << o) - 1,
          c = new Array(a + 1).fill(n);
        let l = n;
        for (let h = Math.floor((t.BITS - 1) / o) * o; h >= 0; h -= o) {
          c.fill(n);
          for (let t = 0; t < i.length; t++) {
            const e = i[t],
              n = Number((e >> BigInt(h)) & BigInt(a));
            c[n] = c[n].add(r[t]);
          }
          let e = n;
          for (let t = c.length - 1, r = n; t > 0; t--)
            (r = r.add(c[t])), (e = e.add(r));
          if (((l = l.add(e)), 0 !== h))
            for (let t = 0; t < o; t++) l = l.double();
        }
        return l;
      }
      function ut(e) {
        return (
          (function (e) {
            const t = Xe.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            Me(e, t);
          })(e.Fp),
          Me(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...et(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      const dt = BigInt(0),
        pt = BigInt(1),
        ft = BigInt(2),
        gt = BigInt(8),
        yt = { zip215: !0 };
      function mt(e) {
        const t = (function (e) {
            const t = ut(e);
            return (
              Me(
                e,
                {
                  hash: "function",
                  a: "bigint",
                  d: "bigint",
                  randomBytes: "function",
                },
                {
                  adjustScalarBytes: "function",
                  domain: "function",
                  uvRatio: "function",
                  mapToCurve: "function",
                }
              ),
              Object.freeze({ ...t })
            );
          })(e),
          {
            Fp: r,
            n: i,
            prehash: n,
            hash: s,
            randomBytes: o,
            nByteLength: a,
            h: c,
          } = t,
          l = ft << (BigInt(8 * a) - pt),
          h = r.create,
          u = tt(t.n, t.nBitLength),
          d =
            t.uvRatio ||
            ((e, t) => {
              try {
                return { isValid: !0, value: r.sqrt(e * r.inv(t)) };
              } catch {
                return { isValid: !1, value: dt };
              }
            }),
          p = t.adjustScalarBytes || ((e) => e),
          f =
            t.domain ||
            ((e, t, r) => {
              if ((we("phflag", r), t.length || r))
                throw new Error("Contexts/pre-hash are not supported");
              return e;
            });
        function g(e, t) {
          Le("coordinate " + e, t, dt, l);
        }
        function y(e) {
          if (!(e instanceof v)) throw new Error("ExtendedPoint expected");
        }
        const m = Be((e, t) => {
            const { ex: i, ey: n, ez: s } = e,
              o = e.is0();
            null == t && (t = o ? gt : r.inv(s));
            const a = h(i * t),
              c = h(n * t),
              l = h(s * t);
            if (o) return { x: dt, y: pt };
            if (l !== pt) throw new Error("invZ was invalid");
            return { x: a, y: c };
          }),
          w = Be((e) => {
            const { a: r, d: i } = t;
            if (e.is0()) throw new Error("bad point: ZERO");
            const { ex: n, ey: s, ez: o, et: a } = e,
              c = h(n * n),
              l = h(s * s),
              u = h(o * o),
              d = h(u * u),
              p = h(c * r);
            if (h(u * h(p + l)) !== h(d + h(i * h(c * l))))
              throw new Error("bad point: equation left != right (1)");
            if (h(n * s) !== h(o * a))
              throw new Error("bad point: equation left != right (2)");
            return !0;
          });
        class v {
          constructor(e, t, r, i) {
            (this.ex = e),
              (this.ey = t),
              (this.ez = r),
              (this.et = i),
              g("x", e),
              g("y", t),
              g("z", r),
              g("t", i),
              Object.freeze(this);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static fromAffine(e) {
            if (e instanceof v) throw new Error("extended point not allowed");
            const { x: t, y: r } = e || {};
            return g("x", t), g("y", r), new v(t, r, pt, h(t * r));
          }
          static normalizeZ(e) {
            const t = r.invertBatch(e.map((e) => e.ez));
            return e.map((e, r) => e.toAffine(t[r])).map(v.fromAffine);
          }
          static msm(e, t) {
            return ht(v, u, e, t);
          }
          _setWindowSize(e) {
            E.setWindowSize(this, e);
          }
          assertValidity() {
            w(this);
          }
          equals(e) {
            y(e);
            const { ex: t, ey: r, ez: i } = this,
              { ex: n, ey: s, ez: o } = e,
              a = h(t * o),
              c = h(n * i),
              l = h(r * o),
              u = h(s * i);
            return a === c && l === u;
          }
          is0() {
            return this.equals(v.ZERO);
          }
          negate() {
            return new v(h(-this.ex), this.ey, this.ez, h(-this.et));
          }
          double() {
            const { a: e } = t,
              { ex: r, ey: i, ez: n } = this,
              s = h(r * r),
              o = h(i * i),
              a = h(ft * h(n * n)),
              c = h(e * s),
              l = r + i,
              u = h(h(l * l) - s - o),
              d = c + o,
              p = d - a,
              f = c - o,
              g = h(u * p),
              y = h(d * f),
              m = h(u * f),
              w = h(p * d);
            return new v(g, y, w, m);
          }
          add(e) {
            y(e);
            const { a: r, d: i } = t,
              { ex: n, ey: s, ez: o, et: a } = this,
              { ex: c, ey: l, ez: u, et: d } = e;
            if (r === BigInt(-1)) {
              const e = h((s - n) * (l + c)),
                t = h((s + n) * (l - c)),
                r = h(t - e);
              if (r === dt) return this.double();
              const i = h(o * ft * d),
                p = h(a * ft * u),
                f = p + i,
                g = t + e,
                y = p - i,
                m = h(f * r),
                w = h(g * y),
                b = h(f * y),
                _ = h(r * g);
              return new v(m, w, _, b);
            }
            const p = h(n * c),
              f = h(s * l),
              g = h(a * i * d),
              m = h(o * u),
              w = h((n + s) * (c + l) - p - f),
              b = m - g,
              _ = m + g,
              E = h(f - r * p),
              I = h(w * b),
              S = h(_ * E),
              O = h(w * E),
              P = h(b * _);
            return new v(I, S, P, O);
          }
          subtract(e) {
            return this.add(e.negate());
          }
          wNAF(e) {
            return E.wNAFCached(this, e, v.normalizeZ);
          }
          multiply(e) {
            const t = e;
            Le("scalar", t, pt, i);
            const { p: r, f: n } = this.wNAF(t);
            return v.normalizeZ([r, n])[0];
          }
          multiplyUnsafe(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : v.ZERO;
            const r = e;
            return (
              Le("scalar", r, dt, i),
              r === dt
                ? _
                : this.is0() || r === pt
                ? this
                : E.wNAFCachedUnsafe(this, r, v.normalizeZ, t)
            );
          }
          isSmallOrder() {
            return this.multiplyUnsafe(c).is0();
          }
          isTorsionFree() {
            return E.unsafeLadder(this, i).is0();
          }
          toAffine(e) {
            return m(this, e);
          }
          clearCofactor() {
            const { h: e } = t;
            return e === pt ? this : this.multiplyUnsafe(e);
          }
          static fromHex(e) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const { d: n, a: s } = t,
              o = r.BYTES;
            (e = Ce("pointHex", e, o)), we("zip215", i);
            const a = e.slice(),
              c = e[o - 1];
            a[o - 1] = -129 & c;
            const u = Ne(a),
              p = i ? l : r.ORDER;
            Le("pointHex.y", u, dt, p);
            const f = h(u * u),
              g = h(f - pt),
              y = h(n * f - s);
            let { isValid: m, value: w } = d(g, y);
            if (!m) throw new Error("Point.fromHex: invalid y coordinate");
            const b = (w & pt) === pt,
              _ = 0 !== (128 & c);
            if (!i && w === dt && _)
              throw new Error("Point.fromHex: x=0 and x_0=1");
            return _ !== b && (w = h(-w)), v.fromAffine({ x: w, y: u });
          }
          static fromPrivateKey(e) {
            return O(e).point;
          }
          toRawBytes() {
            const { x: e, y: t } = this.toAffine(),
              i = ke(t, r.BYTES);
            return (i[i.length - 1] |= e & pt ? 128 : 0), i;
          }
          toHex() {
            return be(this.toRawBytes());
          }
        }
        (v.BASE = new v(t.Gx, t.Gy, pt, h(t.Gx * t.Gy))),
          (v.ZERO = new v(dt, pt, pt, dt));
        const { BASE: b, ZERO: _ } = v,
          E = (function (e, t) {
            return {
              constTimeNegate: nt,
              hasPrecomputes: (e) => 1 !== lt(e),
              unsafeLadder(t, r) {
                let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : e.ZERO,
                  n = t;
                for (; r > rt; )
                  r & it && (i = i.add(n)), (n = n.double()), (r >>= it);
                return i;
              },
              precomputeWindow(e, r) {
                const { windows: i, windowSize: n } = ot(r, t),
                  s = [];
                let o = e,
                  a = o;
                for (let t = 0; t < i; t++) {
                  (a = o), s.push(a);
                  for (let e = 1; e < n; e++) (a = a.add(o)), s.push(a);
                  o = a.double();
                }
                return s;
              },
              wNAF(r, i, n) {
                const { windows: s, windowSize: o } = ot(r, t);
                let a = e.ZERO,
                  c = e.BASE;
                const l = BigInt(2 ** r - 1),
                  h = 2 ** r,
                  u = BigInt(r);
                for (let e = 0; e < s; e++) {
                  const t = e * o;
                  let r = Number(n & l);
                  (n >>= u), r > o && ((r -= h), (n += it));
                  const s = t,
                    d = t + Math.abs(r) - 1,
                    p = e % 2 !== 0,
                    f = r < 0;
                  0 === r ? (c = c.add(nt(p, i[s]))) : (a = a.add(nt(f, i[d])));
                }
                return { p: a, f: c };
              },
              wNAFUnsafe(r, i, n) {
                let s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : e.ZERO;
                const { windows: o, windowSize: a } = ot(r, t),
                  c = BigInt(2 ** r - 1),
                  l = 2 ** r,
                  h = BigInt(r);
                for (let e = 0; e < o; e++) {
                  const t = e * a;
                  if (n === rt) break;
                  let r = Number(n & c);
                  if (((n >>= h), r > a && ((r -= l), (n += it)), 0 === r))
                    continue;
                  let o = i[t + Math.abs(r) - 1];
                  r < 0 && (o = o.negate()), (s = s.add(o));
                }
                return s;
              },
              getPrecomputes(e, t, r) {
                let i = at.get(t);
                return (
                  i ||
                    ((i = this.precomputeWindow(t, e)),
                    1 !== e && at.set(t, r(i))),
                  i
                );
              },
              wNAFCached(e, t, r) {
                const i = lt(e);
                return this.wNAF(i, this.getPrecomputes(i, e, r), t);
              },
              wNAFCachedUnsafe(e, t, r, i) {
                const n = lt(e);
                return 1 === n
                  ? this.unsafeLadder(e, t, i)
                  : this.wNAFUnsafe(n, this.getPrecomputes(n, e, r), t, i);
              },
              setWindowSize(e, r) {
                st(r, t), ct.set(e, r), at.delete(e);
              },
            };
          })(v, 8 * a);
        function I(e) {
          return We(e, i);
        }
        function S(e) {
          return I(Ne(e));
        }
        function O(e) {
          const t = r.BYTES;
          e = Ce("private key", e, t);
          const i = Ce("hashed private key", s(e), 2 * t),
            n = p(i.slice(0, t)),
            o = i.slice(t, 2 * t),
            a = S(n),
            c = b.multiply(a),
            l = c.toRawBytes();
          return { head: n, prefix: o, scalar: a, point: c, pointBytes: l };
        }
        function P() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Uint8Array();
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i];
          const o = je(...r);
          return S(s(f(o, Ce("context", e), !!n)));
        }
        const x = yt;
        return (
          b._setWindowSize(8),
          {
            CURVE: t,
            getPublicKey: function (e) {
              return O(e).pointBytes;
            },
            sign: function (e, t) {
              let s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              (e = Ce("message", e)), n && (e = n(e));
              const { prefix: o, scalar: a, pointBytes: c } = O(t),
                l = P(s.context, o, e),
                h = b.multiply(l).toRawBytes(),
                u = I(l + P(s.context, h, c, e) * a);
              return (
                Le("signature.s", u, dt, i),
                Ce("result", je(h, ke(u, r.BYTES)), 2 * r.BYTES)
              );
            },
            verify: function (e, t, i) {
              let s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : x;
              const { context: o, zip215: a } = s,
                c = r.BYTES;
              (e = Ce("signature", e, 2 * c)),
                (t = Ce("message", t)),
                (i = Ce("publicKey", i, c)),
                void 0 !== a && we("zip215", a),
                n && (t = n(t));
              const l = Ne(e.slice(c, 2 * c));
              let h, u, d;
              try {
                (h = v.fromHex(i, a)),
                  (u = v.fromHex(e.slice(0, c), a)),
                  (d = b.multiplyUnsafe(l));
              } catch {
                return !1;
              }
              if (!a && h.isSmallOrder()) return !1;
              const p = P(o, u.toRawBytes(), h.toRawBytes(), t);
              return u
                .add(h.multiplyUnsafe(p))
                .subtract(d)
                .clearCofactor()
                .equals(v.ZERO);
            },
            ExtendedPoint: v,
            utils: {
              getExtendedPublicKey: O,
              randomPrivateKey: () => o(r.BYTES),
              precompute() {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 8,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : v.BASE;
                return t._setWindowSize(e), t.multiply(BigInt(3)), t;
              },
            },
          }
        );
      }
      BigInt(0), BigInt(1);
      const wt = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        vt = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        );
      BigInt(0);
      const bt = BigInt(1),
        _t = BigInt(2);
      BigInt(3);
      const Et = BigInt(5),
        It = BigInt(8);
      function St(e) {
        return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
      }
      function Ot(e, t) {
        const r = wt,
          i = We(t * t * t, r),
          n = (function (e) {
            const t = BigInt(10),
              r = BigInt(20),
              i = BigInt(40),
              n = BigInt(80),
              s = wt,
              o = (((e * e) % s) * e) % s,
              a = (Ge(o, _t, s) * o) % s,
              c = (Ge(a, bt, s) * e) % s,
              l = (Ge(c, Et, s) * c) % s,
              h = (Ge(l, t, s) * l) % s,
              u = (Ge(h, r, s) * h) % s,
              d = (Ge(u, i, s) * u) % s,
              p = (Ge(d, n, s) * d) % s,
              f = (Ge(p, n, s) * d) % s,
              g = (Ge(f, t, s) * l) % s;
            return { pow_p_5_8: (Ge(g, _t, s) * e) % s, b2: o };
          })(e * We(i * i * t, r)).pow_p_5_8;
        let s = We(e * i * n, r);
        const o = We(t * s * s, r),
          a = s,
          c = We(s * vt, r),
          l = o === e,
          h = o === We(-e, r),
          u = o === We(-e * vt, r);
        return (
          l && (s = a),
          (h || u) && (s = c),
          ((e, t) => (We(e, t) & ze) === ze)(s, r) && (s = We(-s, r)),
          { isValid: l || h, value: s }
        );
      }
      const Pt = tt(wt, void 0, !0),
        xt = mt({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: Pt,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: It,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: de,
          randomBytes: te,
          adjustScalarBytes: St,
          uvRatio: Ot,
        }),
        Tt = "EdDSA",
        At = ".",
        Nt = "base64url",
        Rt = "utf8",
        kt = "utf8",
        Ct = "did",
        jt = "key",
        Dt = "base58btc";
      function Lt(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function Ut() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? Lt(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function qt(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = Ut(t);
        let i = 0;
        for (const n of e) r.set(n, i), (i += n.length);
        return Lt(r);
      }
      var Mt = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (
                var s = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var u = 0, d = s - 1;
                  (0 !== h || u < n) && -1 !== d;
                  d--, u++
                )
                  (h += (a * o[d]) >>> 0),
                    (o[d] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (n = u), t++;
              }
              if (" " !== e[t]) {
                for (var p = s - n; p !== s && 0 === o[p]; ) p++;
                for (var f = new Uint8Array(i + (s - p)), g = i; p !== s; )
                  f[g++] = o[p++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, i = 0, n = 0, s = t.length;
                n !== s && 0 === t[n];

              )
                n++, r++;
              for (
                var o = ((s - n) * h + 1) >>> 0, l = new Uint8Array(o);
                n !== s;

              ) {
                for (
                  var u = t[n], d = 0, p = o - 1;
                  (0 !== u || d < i) && -1 !== p;
                  p--, d++
                )
                  (u += (256 * l[p]) >>> 0),
                    (l[p] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw new Error("Non-zero carry");
                (i = d), n++;
              }
              for (var f = o - i; f !== o && 0 === l[f]; ) f++;
              for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var r = u(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        },
        Bt = Mt;
      const $t = (e) => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
          return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e))
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class zt {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class Ht {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return Kt(this, e);
        }
      }
      class Vt {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Kt(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const Kt = (e, t) =>
        new Vt({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class Ft {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new zt(e, t, r)),
            (this.decoder = new Ht(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const Zt = (e) => {
          let { name: t, prefix: r, encode: i, decode: n } = e;
          return new Ft(t, r, i, n);
        },
        Wt = (e) => {
          let { prefix: t, name: r, alphabet: i } = e;
          const { encode: n, decode: s } = Bt(i, r);
          return Zt({ prefix: t, name: r, encode: n, decode: (e) => $t(s(e)) });
        },
        Jt = (e) => {
          let { name: t, prefix: r, bitsPerChar: i, alphabet: n } = e;
          return Zt({
            prefix: r,
            name: t,
            encode: (e) =>
              ((e, t, r) => {
                const i = "=" === t[t.length - 1],
                  n = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], o += 8; o > r; )
                    (o -= r), (s += t[n & (a >> o)]);
                if ((o && (s += t[n & (a << (r - o))]), i))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, n, i),
            decode: (e) =>
              ((e, t, r, i) => {
                const n = {};
                for (let h = 0; h < t.length; ++h) n[t[h]] = h;
                let s = e.length;
                for (; "=" === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  l = 0;
                for (let h = 0; h < s; ++h) {
                  const t = n[e[h]];
                  if (void 0 === t) throw new SyntaxError(`Non-${i} character`);
                  (c = (c << r) | t),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(e, n, i, t),
          });
        },
        Gt = Zt({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var Yt = Object.freeze({ __proto__: null, identity: Gt });
      const Qt = Jt({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var Xt = Object.freeze({ __proto__: null, base2: Qt });
      const er = Jt({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var tr = Object.freeze({ __proto__: null, base8: er });
      const rr = Wt({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var ir = Object.freeze({ __proto__: null, base10: rr });
      const nr = Jt({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        sr = Jt({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var or = Object.freeze({ __proto__: null, base16: nr, base16upper: sr });
      const ar = Jt({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        cr = Jt({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        lr = Jt({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        hr = Jt({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        ur = Jt({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        dr = Jt({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        pr = Jt({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        fr = Jt({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        gr = Jt({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var yr = Object.freeze({
        __proto__: null,
        base32: ar,
        base32upper: cr,
        base32pad: lr,
        base32padupper: hr,
        base32hex: ur,
        base32hexupper: dr,
        base32hexpad: pr,
        base32hexpadupper: fr,
        base32z: gr,
      });
      const mr = Wt({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        wr = Wt({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var vr = Object.freeze({ __proto__: null, base36: mr, base36upper: wr });
      const br = Wt({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        _r = Wt({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var Er = Object.freeze({
        __proto__: null,
        base58btc: br,
        base58flickr: _r,
      });
      const Ir = Jt({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Sr = Jt({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Or = Jt({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Pr = Jt({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var xr = Object.freeze({
        __proto__: null,
        base64: Ir,
        base64pad: Sr,
        base64url: Or,
        base64urlpad: Pr,
      });
      const Tr = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        Ar = Tr.reduce((e, t, r) => ((e[r] = t), e), []),
        Nr = Tr.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const Rr = Zt({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (e) {
          return e.reduce((e, t) => (e += Ar[t]), "");
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = Nr[r.codePointAt(0)];
            if (void 0 === e)
              throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var kr = Object.freeze({ __proto__: null, base256emoji: Rr }),
        Cr = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= Lr; )
            (r[i++] = (255 & t) | jr), (t /= 128);
          for (; t & Dr; ) (r[i++] = (255 & t) | jr), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        jr = 128,
        Dr = -128,
        Lr = Math.pow(2, 31);
      var Ur = function e(t, r) {
          var i,
            n = 0,
            s = ((r = r || 0), 0),
            o = r,
            a = t.length;
          do {
            if (o >= a)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (i = t[o++]),
              (n += s < 28 ? (i & Mr) << s : (i & Mr) * Math.pow(2, s)),
              (s += 7);
          } while (i >= qr);
          return (e.bytes = o - r), n;
        },
        qr = 128,
        Mr = 127;
      var Br = Math.pow(2, 7),
        $r = Math.pow(2, 14),
        zr = Math.pow(2, 21),
        Hr = Math.pow(2, 28),
        Vr = Math.pow(2, 35),
        Kr = Math.pow(2, 42),
        Fr = Math.pow(2, 49),
        Zr = Math.pow(2, 56),
        Wr = Math.pow(2, 63),
        Jr = {
          encode: Cr,
          decode: Ur,
          encodingLength: function (e) {
            return e < Br
              ? 1
              : e < $r
              ? 2
              : e < zr
              ? 3
              : e < Hr
              ? 4
              : e < Vr
              ? 5
              : e < Kr
              ? 6
              : e < Fr
              ? 7
              : e < Zr
              ? 8
              : e < Wr
              ? 9
              : 10;
          },
        },
        Gr = Jr;
      const Yr = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return Gr.encode(e, t, r), t;
        },
        Qr = (e) => Gr.encodingLength(e),
        Xr = (e, t) => {
          const r = t.byteLength,
            i = Qr(e),
            n = i + Qr(r),
            s = new Uint8Array(n + r);
          return Yr(e, s, 0), Yr(r, s, i), s.set(t, n), new ei(e, r, t, s);
        };
      class ei {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const ti = (e) => {
        let { name: t, code: r, encode: i } = e;
        return new ri(t, r, i);
      };
      class ri {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? Xr(this.code, t)
              : t.then((e) => Xr(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const ii = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        ni = ti({ name: "sha2-256", code: 18, encode: ii("SHA-256") }),
        si = ti({ name: "sha2-512", code: 19, encode: ii("SHA-512") });
      Object.freeze({ __proto__: null, sha256: ni, sha512: si });
      const oi = $t,
        ai = {
          code: 0,
          name: "identity",
          encode: oi,
          digest: (e) => Xr(0, oi(e)),
        };
      Object.freeze({ __proto__: null, identity: ai });
      new TextEncoder(), new TextDecoder();
      const ci = {
        ...Yt,
        ...Xt,
        ...tr,
        ...ir,
        ...or,
        ...yr,
        ...vr,
        ...Er,
        ...xr,
        ...kr,
      };
      function li(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const hi = li(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        ui = li(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = Ut((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        di = {
          utf8: hi,
          "utf-8": hi,
          hex: ci.base16,
          latin1: ui,
          ascii: ui,
          binary: ui,
          ...ci,
        };
      function pi(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = di[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8");
      }
      function fi(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = di[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode(`${r.prefix}${e}`)
          : Lt(globalThis.Buffer.from(e, "utf-8"));
      }
      function gi(e) {
        return (0, P.j)(pi(fi(e, Nt), Rt));
      }
      function yi(e) {
        return pi(fi((0, P.h)(e), Rt), Nt);
      }
      function mi(e) {
        const t = "z" + pi(qt([fi("K36", Dt), e]), Dt);
        return [Ct, jt, t].join(":");
      }
      function wi(e) {
        return pi(e, Nt);
      }
      function vi(e) {
        const t = e.split(At),
          r = gi(t[0]),
          i = gi(t[1]),
          n = (function (e) {
            return fi(e, Nt);
          })(t[2]);
        return {
          header: r,
          payload: i,
          signature: n,
          data: fi(t.slice(0, 2).join(At), kt),
        };
      }
      function bi() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : te(32);
        const t = xt.getPublicKey(e);
        return { secretKey: qt([e, t]), publicKey: t };
      }
      async function _i(e, t, r, i) {
        let n =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : (0, s.fromMiliseconds)(Date.now());
        const o = { alg: Tt, typ: "JWT" },
          a = { iss: mi(i.publicKey), sub: e, aud: t, iat: n, exp: n + r },
          c = (function (e) {
            return fi([yi(e.header), yi(e.payload)].join(At), kt);
          })({ header: o, payload: a });
        return (function (e) {
          return [yi(e.header), yi(e.payload), wi(e.signature)].join(At);
        })({
          header: o,
          payload: a,
          signature: xt.sign(c, i.secretKey.slice(0, 32)),
        });
      }
      var Ei = r(21065),
        Ii = r(98895),
        Si = r(35146),
        Oi = r(60651);
      r(26498);
      function Pi() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function xi(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = Pi(t);
        let i = 0;
        for (const n of e) r.set(n, i), (i += n.length);
        return r;
      }
      var Ti = r(78383);
      function Ai(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const Ni = Ai(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        Ri = Ai(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = Pi((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        ki = {
          utf8: Ni,
          "utf-8": Ni,
          hex: Ti.Fo.base16,
          latin1: Ri,
          ascii: Ri,
          binary: Ri,
          ...Ti.Fo,
        };
      function Ci(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = ki[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.decoder.decode(`${r.prefix}${e}`)
          : globalThis.Buffer.from(e, "utf8");
      }
      function ji(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "utf8";
        const r = ki[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return ("utf8" !== t && "utf-8" !== t) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? r.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8");
      }
      const Di = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
          batchFetchMessages: "waku_batchFetchMessages",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
          batchFetchMessages: "irn_batchFetchMessages",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
          batchFetchMessages: "iridium_batchFetchMessages",
        },
      };
      var Li = r(52143),
        Ui = r(13740).Buffer;
      const qi = ":";
      function Mi(e) {
        const [t, r] = e.split(qi);
        return { namespace: t, reference: r };
      }
      function Bi(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const $i = "react-native",
        zi = "node",
        Hi = "browser",
        Vi = "unknown",
        Ki = "js";
      function Fi() {
        return (
          typeof Li < "u" &&
          typeof Li.versions < "u" &&
          typeof Li.versions.node < "u"
        );
      }
      function Zi() {
        return (
          !(0, Ii.getDocument)() &&
          !!(0, Ii.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function Wi() {
        return !Fi() && !!(0, Ii.getNavigator)() && !!(0, Ii.getDocument)();
      }
      function Ji() {
        return Zi() ? $i : Fi() ? zi : Wi() ? Hi : Vi;
      }
      function Gi() {
        var e;
        try {
          return Zi() &&
            typeof r.g < "u" &&
            typeof (null == r.g ? void 0 : r.g.Application) < "u"
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function Yi() {
        return (
          (0, Si.g)() || { name: "", description: "", url: "", icons: [""] }
        );
      }
      function Qi(e, t, i) {
        const n = (function () {
            if (
              Ji() === $i &&
              typeof r.g < "u" &&
              typeof (null == r.g ? void 0 : r.g.Platform) < "u"
            ) {
              const { OS: e, Version: t } = r.g.Platform;
              return [e, t].join("-");
            }
            const e = (0, Ei.o0)();
            if (null === e) return "unknown";
            const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [t, e.name, e.version].join("-")
              : [t, e.version].join("-");
          })(),
          s = (function () {
            var e;
            const t = Ji();
            return t === Hi
              ? [
                  t,
                  (null == (e = (0, Ii.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), [Ki, i].join("-"), n, s].join("/");
      }
      function Xi(e) {
        let {
          protocol: t,
          version: r,
          relayUrl: i,
          sdkVersion: n,
          auth: s,
          projectId: o,
          useOnCloseEvent: a,
          bundleId: c,
          packageName: l,
        } = e;
        const h = i.split("?"),
          u = {
            auth: s,
            ua: Qi(t, r, n),
            projectId: o,
            useOnCloseEvent: a || void 0,
            packageName: l || void 0,
            bundleId: c || void 0,
          },
          d = (function (e, t) {
            const r = new URLSearchParams(e);
            for (const i of Object.keys(t).sort())
              if (t.hasOwnProperty(i)) {
                const e = t[i];
                void 0 !== e && r.set(i, e);
              }
            return r.toString();
          })(h[1] || "", u);
        return h[0] + "?" + d;
      }
      function en(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function tn(e) {
        return Object.fromEntries(e.entries());
      }
      function rn(e) {
        return new Map(Object.entries(e));
      }
      function nn() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : s.FIVE_MINUTES,
          t = arguments.length > 1 ? arguments[1] : void 0;
        const r = (0, s.toMiliseconds)(e || s.FIVE_MINUTES);
        let i, n, o, a;
        return {
          resolve: (e) => {
            o && i && (clearTimeout(o), i(e), (a = Promise.resolve(e)));
          },
          reject: (e) => {
            o && n && (clearTimeout(o), n(e));
          },
          done: () =>
            new Promise((e, s) => {
              if (a) return e(a);
              (o = setTimeout(() => {
                const e = new Error(t);
                (a = Promise.reject(e)), s(e);
              }, r)),
                (i = e),
                (n = s);
            }),
        };
      }
      function sn(e, t, r) {
        return new Promise(async (i, n) => {
          const s = setTimeout(() => n(new Error(r)), t);
          try {
            i(await e);
          } catch (c) {
            n(c);
          }
          clearTimeout(s);
        });
      }
      function on(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw new Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw new Error(
              'Value must be "number" for expirer target type: id'
            );
          return `id:${t}`;
        }
        throw new Error(`Unknown expirer target type: ${e}`);
      }
      function an(e) {
        const [t, r] = e.split(":"),
          i = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) i.topic = r;
        else {
          if ("id" !== t || !Number.isInteger(Number(r)))
            throw new Error(
              `Invalid target, expected id:number or topic:string, got ${t}:${r}`
            );
          i.id = Number(r);
        }
        return i;
      }
      function cn(e, t) {
        return (0, s.fromMiliseconds)(
          (t || Date.now()) + (0, s.toMiliseconds)(e)
        );
      }
      function ln(e) {
        return Date.now() >= (0, s.toMiliseconds)(e);
      }
      function hn(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function un() {
        return [
          ...new Set([
            ...(arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : []),
            ...(arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : []),
          ]),
        ];
      }
      async function dn(e) {
        let { id: t, topic: i, wcDeepLink: n } = e;
        var s;
        try {
          if (!n) return;
          const e = "string" == typeof n ? JSON.parse(n) : n,
            o = null === e || void 0 === e ? void 0 : e.href;
          if ("string" != typeof o) return;
          const a = (function (e, t, r) {
              const i = `requestId=${t}&sessionTopic=${r}`;
              e.endsWith("/") && (e = e.slice(0, -1));
              let n = `${e}`;
              if (e.startsWith("https://t.me")) {
                n = `${n}${
                  e.includes("?") ? "&startapp=" : "?startapp="
                }${(function (e) {
                  let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  const r = Ui.from(e).toString("base64");
                  return t ? r.replace(/[=]/g, "") : r;
                })(i, !0)}`;
              } else n = `${n}/wc?${i}`;
              return n;
            })(o, t, i),
            c = Ji();
          if (c === Hi) {
            if (null == (s = (0, Ii.getDocument)()) || !s.hasFocus())
              return void console.warn(
                "Document does not have focus, skipping deeplink."
              );
            !(function (e) {
              let t = "_self";
              !(function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? ((typeof window < "u" &&
                    (!!window.TelegramWebviewProxy ||
                      !!window.Telegram ||
                      !!window.TelegramWebviewProxyProto)) ||
                    e.startsWith("https://") ||
                    e.startsWith("http://")) &&
                  (t = "_blank")
                : (t = "_top"),
                window.open(e, t, "noreferrer noopener");
            })(a);
          } else
            c === $i &&
              typeof (null == r.g ? void 0 : r.g.Linking) < "u" &&
              (await r.g.Linking.openURL(a));
        } catch (o) {
          console.error(o);
        }
      }
      function pn(e, t) {
        if (!e.includes(t)) return null;
        const r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function fn() {
        return typeof crypto < "u" && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
              const t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function gn() {
        return (
          typeof Li < "u" &&
          "true" ===
            {
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_NOSTR_TOKEN_SEND_TO:
                "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
              REACT_APP_NOSTR_MARKET_SEND_TO:
                "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw",
              REACT_APP_NOSTR_AIRDROP_SEND_TO:
                "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
              REACT_APP_NOSTR_MINT_SEND_TO:
                "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
              REACT_APP_NOSTR_LOCK:
                "npub1zm3a3da2a0qepq2l752sdtu8xzl5src8c82exrh9av2x2va8k3jsqqdccy",
              REACT_APP_MICRO_NODE_SEND_TO:
                "npub1dh7jwjrv9xvpw6a7wtsxpje7fequ7tmjzpendr594yjeuk9ckhasuljnc6",
              REACT_APP_API_GraphQL_URL:
                "https://graph.lnfi.network/api/graph_data",
              REACT_APP_QUERY_API_URL: "https://market-api.lnfi.network",
              REACT_APP_MICRO_NODE_API_URL: "https://micro-api.lnfi.network",
              REACT_APP_LN_DEX_URL: "https://www.ln.exchange/",
              REACT_APP_LN_SPOT_URL: "https://app.ln.exchange/",
              REACT_APP_LN_PERP_URL:
                "https://app.ln.exchange/#/perpetual/btc-usdt",
              REACT_APP_LN_NODE_URL: "https://devoflnnode.unift.xyz/  // to do",
              REACT_APP_USDT_CONTRACT_ADDR:
                "0xfad6367E97217cC51b4cd838Cc086831f81d38C2",
              REACT_APP_BTC_SEND_TO_ADDR:
                "bc1qzrgykyfuyredsgkw3zu4zkplkyxuv4na6mstp5",
              REACT_APP_CURRENT_ENV: "prod",
              REACT_APP_GRAPH_BASE: "",
              REACT_APP_TX: "https://mempool.space/tx/",
              REACT_APP_REG_TX: "https://mempool.space/tx/",
              REACT_APP_LIGHTNING: "universe.lightning.finance",
              REACT_APP_MEMOPOOL: "https://mempool.space",
              REACT_APP_GAS_ADDR:
                "bc1prz29tcyq926tvgpskdkd037jrxvjxzmxwu2apssxnhy6gs7cmr8q6kex7v",
              REACT_APP_GAS_FEE: "100000",
              REACT_APP_TREASURY_ADDR:
                "bc1ppyhr8t9hh6s7h774aj9ruugyujd3e76lmw2s3mx33flak72vk06qvm2j82",
              REACT_APP_TREASURY_FEE: "100000",
              REACT_APP_WITHDRAW_ADDR:
                "tb1p8jqsuqz3t7uk38vq57tkr2x3yupkdfymwxlz274hh2qch52lvp3qtc4v52",
              REACT_APP_WITHDRAW_FEE: "1000",
              REACT_APP_QUOTE_TOKEN: "SATS",
              REACT_APP_QUOTE_UNIT: "100000000",
              REACT_APP_UNIVERSE_HOST: "universe.lnfi.network:10029",
              REACT_APP_DEPOSIT_LIGHTNING_LIMIT: "10000|10000000",
              REACT_APP_WITHDRAW_LIGHTNING_LIMIT: "10000|10000000",
              REACT_APP_IS_LIMIT_IP: "0",
              REACT_APP_NOSTR_SERVER: "wss://relay02.lnfi.network",
              REACT_APP_API_VALID_BRC20: "https://sign-api.unift.xyz",
              REACT_APP_IS_MAINNING: "0",
              REACT_APP_FAIRMINT_TOKEN: "TNA",
              REACT_APP_SWAP_TOKEN: "AIFI",
              REACT_APP_NOSTR_NODE_HOST:
                "x6dpvaaxi462zyly2jzfippt3iivr4sxmctdhoelkxzukusmmfgbplad.onion:9735",
              REACT_APP_NOSTR_NODE_NPUBKEY:
                "03bdaa035f786c6e80aa728eb9a21caf2126550b34c09021e57b2280ae9190457c",
              REACT_APP_ASSET_BASE_LINK:
                "https://megalithic.me/taproot_assets_explorer?search=",
              REACT_APP_API_ORCAL_PRICE: "https://bridge-oracle.ln.exchange",
              REACT_APP_PARTNER_NUMBER: "1500",
              REACT_APP_PARTNER_TOKEN: "TREAT",
              REACT_APP_API_BORKER_URL: "https://broker.ln.exchange",
              REACT_APP_WAGMI_PROJECTID: "92461524d3cfcb3d78b38b5dbd6a6ce3",
              REACT_APP_ASTRA_API_URL: "https://api.astra-labs.io/",
              REACT_APP_MINTFEE_TOKEN: "USDT",
              REACT_APP_SPOT_API_URL: "https://test-spots-api.ln.exchange",
              REACT_APP_MINT_SERVICE_FEE_CREATE: "1000",
              REACT_APP_MINT_SERVICE_FEE_TOKEN_CREATE: "AIFI",
            }.IS_VITEST
        );
      }
      function yn(e) {
        return Ui.from(e, "base64").toString("utf-8");
      }
      function mn(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("positive integer expected, got " + e);
      }
      function wn(e) {
        if (
          !(function (e) {
            return (
              e instanceof Uint8Array ||
              (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
            );
          })(e)
        )
          throw new Error("Uint8Array expected");
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + e.length
          );
      }
      function vn(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        mn(e.outputLen), mn(e.blockLen);
      }
      function bn(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function _n(e, t) {
        wn(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      const En = BigInt(2 ** 32 - 1),
        In = BigInt(32);
      function Sn(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & En), l: Number((e >> In) & En) }
          : { h: 0 | Number((e >> In) & En), l: 0 | Number(e & En) };
      }
      const On =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function Pn(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function xn(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      const Tn = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function An(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function Nn(e) {
        for (let t = 0; t < e.length; t++) e[t] = An(e[t]);
      }
      function Rn(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          wn(e),
          e
        );
      }
      class kn {
        clone() {
          return this._cloneInto();
        }
      }
      function Cn(e) {
        const t = (t) => e().update(Rn(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function jn() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
        if (On && "function" == typeof On.getRandomValues)
          return On.getRandomValues(new Uint8Array(e));
        if (On && "function" == typeof On.randomBytes) return On.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
      }
      const Dn = [],
        Ln = [],
        Un = [],
        qn = BigInt(0),
        Mn = BigInt(1),
        Bn = BigInt(2),
        $n = BigInt(7),
        zn = BigInt(256),
        Hn = BigInt(113);
      for (let By = 0, $y = Mn, zy = 1, Hy = 0; By < 24; By++) {
        ([zy, Hy] = [Hy, (2 * zy + 3 * Hy) % 5]),
          Dn.push(2 * (5 * Hy + zy)),
          Ln.push((((By + 1) * (By + 2)) / 2) % 64);
        let e = qn;
        for (let t = 0; t < 7; t++)
          ($y = (($y << Mn) ^ (($y >> $n) * Hn)) % zn),
            $y & Bn && (e ^= Mn << ((Mn << BigInt(t)) - Mn));
        Un.push(e);
      }
      const [Vn, Kn] = (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let n = 0; n < e.length; n++) {
            const { h: s, l: o } = Sn(e[n], t);
            [r[n], i[n]] = [s, o];
          }
          return [r, i];
        })(Un, !0),
        Fn = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (t << (r - 32)) | (e >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (e << r) | (t >>> (32 - r)))(e, t, r),
        Zn = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (e << (r - 32)) | (t >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (t << r) | (e >>> (32 - r)))(e, t, r);
      class Wn extends kn {
        constructor(e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 24;
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = n),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            mn(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error("Sha3 supports only keccak-f1600 function");
          var s;
          (this.state = new Uint8Array(200)),
            (this.state32 =
              ((s = this.state),
              new Uint32Array(
                s.buffer,
                s.byteOffset,
                Math.floor(s.byteLength / 4)
              )));
        }
        keccak() {
          Tn || Nn(this.state32),
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 24;
              const r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let i = 0; i < 10; i++)
                  r[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
                for (let i = 0; i < 10; i += 2) {
                  const t = (i + 8) % 10,
                    n = (i + 2) % 10,
                    s = r[n],
                    o = r[n + 1],
                    a = Fn(s, o, 1) ^ r[t],
                    c = Zn(s, o, 1) ^ r[t + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[i + r] ^= a), (e[i + r + 1] ^= c);
                }
                let t = e[2],
                  n = e[3];
                for (let r = 0; r < 24; r++) {
                  const i = Ln[r],
                    s = Fn(t, n, i),
                    o = Zn(t, n, i),
                    a = Dn[r];
                  (t = e[a]), (n = e[a + 1]), (e[a] = s), (e[a + 1] = o);
                }
                for (let i = 0; i < 50; i += 10) {
                  for (let t = 0; t < 10; t++) r[t] = e[i + t];
                  for (let t = 0; t < 10; t++)
                    e[i + t] ^= ~r[(t + 2) % 10] & r[(t + 4) % 10];
                }
                (e[0] ^= Vn[i]), (e[1] ^= Kn[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            Tn || Nn(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          bn(this);
          const { blockLen: t, state: r } = this,
            i = (e = Rn(e)).length;
          for (let n = 0; n < i; ) {
            const s = Math.min(t - this.pos, i - n);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            0 !== (128 & t) && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          bn(this, !1), wn(e), this.finish();
          const t = this.state,
            { blockLen: r } = this;
          for (let i = 0, n = e.length; i < n; ) {
            this.posOut >= r && this.keccak();
            const s = Math.min(r - this.posOut, n - i);
            e.set(t.subarray(this.posOut, this.posOut + s), i),
              (this.posOut += s),
              (i += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return mn(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((_n(e, this), this.finished))
            throw new Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          const {
            blockLen: t,
            suffix: r,
            outputLen: i,
            rounds: n,
            enableXOF: s,
          } = this;
          return (
            e || (e = new Wn(t, r, i, s, n)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = n),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      const Jn = ((e, t, r) => Cn(() => new Wn(t, e, r)))(1, 136, 32),
        Gn = "https://rpc.walletconnect.org/v1";
      function Yn(e) {
        const t = `\x19Ethereum Signed Message:\n${e.length}`,
          r = new TextEncoder().encode(t + e);
        return "0x" + Ui.from(Jn(r)).toString("hex");
      }
      async function Qn(e, t, r, i, n, s) {
        switch (r.t) {
          case "eip191":
            return await (async function (e, t, r) {
              return (
                (
                  await (0, Oi.x)({ hash: Yn(t), signature: r })
                ).toLowerCase() === e.toLowerCase()
              );
            })(e, t, r.s);
          case "eip1271":
            return await (async function (e, t, r, i, n, s) {
              const o = Mi(i);
              if (!o.namespace || !o.reference)
                throw new Error(
                  `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
                );
              try {
                const o = "0x1626ba7e",
                  a =
                    "0000000000000000000000000000000000000000000000000000000000000040",
                  c =
                    "0000000000000000000000000000000000000000000000000000000000000041",
                  l = r.substring(2),
                  h = o + Yn(t).substring(2) + a + c + l,
                  u = await fetch(`${s || Gn}/?chainId=${i}&projectId=${n}`, {
                    method: "POST",
                    body: JSON.stringify({
                      id: Xn(),
                      jsonrpc: "2.0",
                      method: "eth_call",
                      params: [{ to: e, data: h }, "latest"],
                    }),
                  }),
                  { result: d } = await u.json();
                return (
                  !!d && d.slice(0, o.length).toLowerCase() === o.toLowerCase()
                );
              } catch (N) {
                return console.error("isValidEip1271Signature: ", N), !1;
              }
            })(e, t, r.s, i, n, s);
          default:
            throw new Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
            );
        }
      }
      function Xn() {
        return Date.now() + Math.floor(1e3 * Math.random());
      }
      var es = Object.defineProperty,
        ts = Object.defineProperties,
        rs = Object.getOwnPropertyDescriptors,
        is = Object.getOwnPropertySymbols,
        ns = Object.prototype.hasOwnProperty,
        ss = Object.prototype.propertyIsEnumerable,
        os = (e, t, r) =>
          t in e
            ? es(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        as = (e, t) => {
          for (var r in t || (t = {})) ns.call(t, r) && os(e, r, t[r]);
          if (is) for (var r of is(t)) ss.call(t, r) && os(e, r, t[r]);
          return e;
        },
        cs = (e, t) => ts(e, rs(t));
      const ls = (e) => (null === e || void 0 === e ? void 0 : e.split(":")),
        hs = (e) => {
          const t = e && ls(e);
          if (t) return t[2] + ":" + t[3];
        },
        us = (e) => {
          const t = e && ls(e);
          if (t) return t.pop();
        };
      async function ds(e) {
        const { cacao: t, projectId: r } = e,
          { s: i, p: n } = t,
          s = ps(n, n.iss),
          o = us(n.iss);
        return await Qn(o, s, i, hs(n.iss), r);
      }
      const ps = (e, t) => {
        const r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = us(t);
        if (!e.aud && !e.uri)
          throw new Error(
            "Either `aud` or `uri` is required to construct the message"
          );
        let n = e.statement || void 0;
        const s = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${((e) => {
            const t = e && ls(e);
            if (t) return e.includes("did:pkh:") ? t[3] : t[1];
          })(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources
            ? `Resources:${e.resources.map((e) => `\n- ${e}`).join("")}`
            : void 0,
          f = Ss(e.resources);
        if (f) {
          n = _s(n, ms(f));
        }
        return [r, i, "", n, "", s, o, a, c, l, h, u, d, p]
          .filter((e) => null != e)
          .join("\n");
      };
      function fs(e) {
        if (!e) throw new Error("No recap provided, value is undefined");
        if (!e.att) throw new Error("No `att` property found");
        const t = Object.keys(e.att);
        if (null == t || !t.length)
          throw new Error("No resources found in `att` property");
        t.forEach((t) => {
          const r = e.att[t];
          if (Array.isArray(r))
            throw new Error(`Resource must be an object: ${t}`);
          if ("object" != typeof r)
            throw new Error(`Resource must be an object: ${t}`);
          if (!Object.keys(r).length)
            throw new Error(`Resource object is empty: ${t}`);
          Object.keys(r).forEach((e) => {
            const t = r[e];
            if (!Array.isArray(t))
              throw new Error(
                `Ability limits ${e} must be an array of objects, found: ${t}`
              );
            if (!t.length)
              throw new Error(
                `Value of ${e} is empty array, must be an array with objects`
              );
            t.forEach((t) => {
              if ("object" != typeof t)
                throw new Error(
                  `Ability limits (${e}) must be an array of objects, found: ${t}`
                );
            });
          });
        });
      }
      function gs(e, t) {
        var r;
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t =
          null === (r = t) || void 0 === r
            ? void 0
            : r.sort((e, t) => e.localeCompare(t));
        const n = t.map((t) => ({ [`${e}/${t}`]: [i] }));
        return Object.assign({}, ...n);
      }
      function ys(e) {
        return (
          fs(e),
          `urn:recap:${(function (e) {
            return Ui.from(JSON.stringify(e)).toString("base64");
          })(e).replace(/=/g, "")}`
        );
      }
      function ms(e) {
        const t = (function (e) {
          return JSON.parse(Ui.from(e, "base64").toString("utf-8"));
        })(e.replace("urn:recap:", ""));
        return fs(t), t;
      }
      function ws(e, t, r) {
        const i = (function (e, t, r) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return (
            null !== r && void 0 !== r && r.sort((e, t) => e.localeCompare(t)),
            { att: { [e]: gs(t, r, i) } }
          );
        })(e, t, r);
        return ys(i);
      }
      function vs(e) {
        return e && e.includes("urn:recap:");
      }
      function bs(e, t) {
        const r = (function (e, t) {
          fs(e), fs(t);
          const r = Object.keys(e.att)
              .concat(Object.keys(t.att))
              .sort((e, t) => e.localeCompare(t)),
            i = { att: {} };
          return (
            r.forEach((r) => {
              var n, s;
              Object.keys((null == (n = e.att) ? void 0 : n[r]) || {})
                .concat(
                  Object.keys((null == (s = t.att) ? void 0 : s[r]) || {})
                )
                .sort((e, t) => e.localeCompare(t))
                .forEach((n) => {
                  var s, o;
                  i.att[r] = cs(as({}, i.att[r]), {
                    [n]:
                      (null == (s = e.att[r]) ? void 0 : s[n]) ||
                      (null == (o = t.att[r]) ? void 0 : o[n]),
                  });
                });
            }),
            i
          );
        })(ms(e), ms(t));
        return ys(r);
      }
      function _s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 ? arguments[1] : void 0;
        fs(t);
        const r =
          "I further authorize the stated URI to perform the following actions on my behalf: ";
        if (e.includes(r)) return e;
        const i = [];
        let n = 0;
        Object.keys(t.att).forEach((e) => {
          const r = Object.keys(t.att[e]).map((e) => ({
            ability: e.split("/")[0],
            action: e.split("/")[1],
          }));
          r.sort((e, t) => e.action.localeCompare(t.action));
          const s = {};
          r.forEach((e) => {
            s[e.ability] || (s[e.ability] = []), s[e.ability].push(e.action);
          });
          const o = Object.keys(s).map(
            (t) => (n++, `(${n}) '${t}': '${s[t].join("', '")}' for '${e}'.`)
          );
          i.push(o.join(", ").replace(".,", "."));
        });
        return `${e ? e + " " : ""}${`${r}${i.join(" ")}`}`;
      }
      function Es(e) {
        var t;
        const r = ms(e);
        fs(r);
        const i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split("/")[1]) : [];
      }
      function Is(e) {
        const t = ms(e);
        fs(t);
        const r = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = null === e || void 0 === e ? void 0 : e[0]) &&
                t.chains &&
                r.push(e[0].chains);
            });
          }),
          [...new Set(r.flat())]
        );
      }
      function Ss(e) {
        if (!e) return;
        const t = null === e || void 0 === e ? void 0 : e[e.length - 1];
        return vs(t) ? t : void 0;
      }
      function Os(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("positive integer expected, got " + e);
      }
      function Ps(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function xs(e) {
        if (!Ps(e)) throw new Error("Uint8Array expected");
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + e.length
          );
      }
      function Ts(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function As(e) {
        if ("boolean" != typeof e)
          throw new Error(`boolean expected, not ${e}`);
      }
      const Ns = (e) =>
        new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
        throw new Error("Non little-endian hardware is not supported");
      function Rs(e) {
        if ("string" == typeof e)
          e = (function (e) {
            if ("string" != typeof e) throw new Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else {
          if (!Ps(e)) throw new Error("Uint8Array expected, got " + typeof e);
          e = js(e);
        }
        return e;
      }
      function ks(e, t) {
        let r =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw new Error(
            "invalid output length, expected " + e + ", got: " + t.length
          );
        if (
          r &&
          !(function (e) {
            return e.byteOffset % 4 === 0;
          })(t)
        )
          throw new Error("invalid output, must be aligned");
        return t;
      }
      function Cs(e, t, r, i) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        const n = BigInt(32),
          s = BigInt(4294967295),
          o = Number((r >> n) & s),
          a = Number(r & s),
          c = i ? 4 : 0,
          l = i ? 0 : 4;
        e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
      }
      function js(e) {
        return Uint8Array.from(e);
      }
      function Ds() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        for (let i = 0; i < t.length; i++) t[i].fill(0);
      }
      const Ls = (e) =>
          Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
        Us = Ls("expand 16-byte k"),
        qs = Ls("expand 32-byte k"),
        Ms = Ns(Us),
        Bs = Ns(qs);
      function $s(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function zs(e) {
        return e.byteOffset % 4 === 0;
      }
      const Hs = 2 ** 32 - 1,
        Vs = new Uint32Array();
      const Ks = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class Fs {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            xs((e = Rs(e)), 32);
          const t = Ks(e, 0),
            r = Ks(e, 2),
            i = Ks(e, 4),
            n = Ks(e, 6),
            s = Ks(e, 8),
            o = Ks(e, 10),
            a = Ks(e, 12),
            c = Ks(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (this.r[2] = 7939 & ((r >>> 10) | (i << 6))),
            (this.r[3] = 8191 & ((i >>> 7) | (n << 9))),
            (this.r[4] = 255 & ((n >>> 4) | (s << 12))),
            (this.r[5] = (s >>> 1) & 8190),
            (this.r[6] = 8191 & ((s >>> 14) | (o << 2))),
            (this.r[7] = 8065 & ((o >>> 11) | (a << 5))),
            (this.r[8] = 8191 & ((a >>> 8) | (c << 8))),
            (this.r[9] = (c >>> 5) & 127);
          for (let l = 0; l < 8; l++) this.pad[l] = Ks(e, 16 + 2 * l);
        }
        process(e, t) {
          const r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                ? 0
                : 2048,
            { h: i, r: n } = this,
            s = n[0],
            o = n[1],
            a = n[2],
            c = n[3],
            l = n[4],
            h = n[5],
            u = n[6],
            d = n[7],
            p = n[8],
            f = n[9],
            g = Ks(e, t + 0),
            y = Ks(e, t + 2),
            m = Ks(e, t + 4),
            w = Ks(e, t + 6),
            v = Ks(e, t + 8),
            b = Ks(e, t + 10),
            _ = Ks(e, t + 12),
            E = Ks(e, t + 14);
          let I = i[0] + (8191 & g),
            S = i[1] + (8191 & ((g >>> 13) | (y << 3))),
            O = i[2] + (8191 & ((y >>> 10) | (m << 6))),
            P = i[3] + (8191 & ((m >>> 7) | (w << 9))),
            x = i[4] + (8191 & ((w >>> 4) | (v << 12))),
            T = i[5] + ((v >>> 1) & 8191),
            A = i[6] + (8191 & ((v >>> 14) | (b << 2))),
            N = i[7] + (8191 & ((b >>> 11) | (_ << 5))),
            R = i[8] + (8191 & ((_ >>> 8) | (E << 8))),
            k = i[9] + ((E >>> 5) | r),
            C = 0,
            j =
              C + I * s + S * (5 * f) + O * (5 * p) + P * (5 * d) + x * (5 * u);
          (C = j >>> 13),
            (j &= 8191),
            (j +=
              T * (5 * h) +
              A * (5 * l) +
              N * (5 * c) +
              R * (5 * a) +
              k * (5 * o)),
            (C += j >>> 13),
            (j &= 8191);
          let D = C + I * o + S * s + O * (5 * f) + P * (5 * p) + x * (5 * d);
          (C = D >>> 13),
            (D &= 8191),
            (D +=
              T * (5 * u) +
              A * (5 * h) +
              N * (5 * l) +
              R * (5 * c) +
              k * (5 * a)),
            (C += D >>> 13),
            (D &= 8191);
          let L = C + I * a + S * o + O * s + P * (5 * f) + x * (5 * p);
          (C = L >>> 13),
            (L &= 8191),
            (L +=
              T * (5 * d) +
              A * (5 * u) +
              N * (5 * h) +
              R * (5 * l) +
              k * (5 * c)),
            (C += L >>> 13),
            (L &= 8191);
          let U = C + I * c + S * a + O * o + P * s + x * (5 * f);
          (C = U >>> 13),
            (U &= 8191),
            (U +=
              T * (5 * p) +
              A * (5 * d) +
              N * (5 * u) +
              R * (5 * h) +
              k * (5 * l)),
            (C += U >>> 13),
            (U &= 8191);
          let q = C + I * l + S * c + O * a + P * o + x * s;
          (C = q >>> 13),
            (q &= 8191),
            (q +=
              T * (5 * f) +
              A * (5 * p) +
              N * (5 * d) +
              R * (5 * u) +
              k * (5 * h)),
            (C += q >>> 13),
            (q &= 8191);
          let M = C + I * h + S * l + O * c + P * a + x * o;
          (C = M >>> 13),
            (M &= 8191),
            (M +=
              T * s + A * (5 * f) + N * (5 * p) + R * (5 * d) + k * (5 * u)),
            (C += M >>> 13),
            (M &= 8191);
          let B = C + I * u + S * h + O * l + P * c + x * a;
          (C = B >>> 13),
            (B &= 8191),
            (B += T * o + A * s + N * (5 * f) + R * (5 * p) + k * (5 * d)),
            (C += B >>> 13),
            (B &= 8191);
          let $ = C + I * d + S * u + O * h + P * l + x * c;
          (C = $ >>> 13),
            ($ &= 8191),
            ($ += T * a + A * o + N * s + R * (5 * f) + k * (5 * p)),
            (C += $ >>> 13),
            ($ &= 8191);
          let z = C + I * p + S * d + O * u + P * h + x * l;
          (C = z >>> 13),
            (z &= 8191),
            (z += T * c + A * a + N * o + R * s + k * (5 * f)),
            (C += z >>> 13),
            (z &= 8191);
          let H = C + I * f + S * p + O * d + P * u + x * h;
          (C = H >>> 13),
            (H &= 8191),
            (H += T * l + A * c + N * a + R * o + k * s),
            (C += H >>> 13),
            (H &= 8191),
            (C = ((C << 2) + C) | 0),
            (C = (C + j) | 0),
            (j = 8191 & C),
            (C >>>= 13),
            (D += C),
            (i[0] = j),
            (i[1] = D),
            (i[2] = L),
            (i[3] = U),
            (i[4] = q),
            (i[5] = M),
            (i[6] = B),
            (i[7] = $),
            (i[8] = z),
            (i[9] = H);
        }
        finalize() {
          const { h: e, pad: t } = this,
            r = new Uint16Array(10);
          let i = e[1] >>> 13;
          e[1] &= 8191;
          for (let o = 2; o < 10; o++)
            (e[o] += i), (i = e[o] >>> 13), (e[o] &= 8191);
          (e[0] += 5 * i),
            (i = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += i),
            (i = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += i),
            (r[0] = e[0] + 5),
            (i = r[0] >>> 13),
            (r[0] &= 8191);
          for (let o = 1; o < 10; o++)
            (r[o] = e[o] + i), (i = r[o] >>> 13), (r[o] &= 8191);
          r[9] -= 8192;
          let n = (1 ^ i) - 1;
          for (let o = 0; o < 10; o++) r[o] &= n;
          n = ~n;
          for (let o = 0; o < 10; o++) e[o] = (e[o] & n) | r[o];
          (e[0] = 65535 & (e[0] | (e[1] << 13))),
            (e[1] = 65535 & ((e[1] >>> 3) | (e[2] << 10))),
            (e[2] = 65535 & ((e[2] >>> 6) | (e[3] << 7))),
            (e[3] = 65535 & ((e[3] >>> 9) | (e[4] << 4))),
            (e[4] = 65535 & ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14))),
            (e[5] = 65535 & ((e[6] >>> 2) | (e[7] << 11))),
            (e[6] = 65535 & ((e[7] >>> 5) | (e[8] << 8))),
            (e[7] = 65535 & ((e[8] >>> 8) | (e[9] << 5)));
          let s = e[0] + t[0];
          e[0] = 65535 & s;
          for (let o = 1; o < 8; o++)
            (s = (((e[o] + t[o]) | 0) + (s >>> 16)) | 0), (e[o] = 65535 & s);
          Ds(r);
        }
        update(e) {
          Ts(this);
          const { buffer: t, blockLen: r } = this,
            i = (e = Rs(e)).length;
          for (let n = 0; n < i; ) {
            const s = Math.min(r - this.pos, i - n);
            if (s !== r)
              t.set(e.subarray(n, n + s), this.pos),
                (this.pos += s),
                (n += s),
                this.pos === r && (this.process(t, 0, !1), (this.pos = 0));
            else for (; r <= i - n; n += r) this.process(e, n);
          }
          return this;
        }
        destroy() {
          Ds(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          Ts(this),
            (function (e, t) {
              xs(e);
              const r = t.outputLen;
              if (e.length < r)
                throw new Error(
                  "digestInto() expects output buffer of length at least " + r
                );
            })(e, this),
            (this.finished = !0);
          const { buffer: t, h: r } = this;
          let { pos: i } = this;
          if (i) {
            for (t[i++] = 1; i < 16; i++) t[i] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let n = 0;
          for (let s = 0; s < 8; s++)
            (e[n++] = r[s] >>> 0), (e[n++] = r[s] >>> 8);
          return e;
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
      }
      const Zs = (function (e) {
        const t = (t, r) => e(r).update(Rs(t)).digest(),
          r = e(new Uint8Array(32));
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      })((e) => new Fs(e));
      const Ws = (function (e, t) {
          const {
            allowShortKeys: r,
            extendNonceFn: i,
            counterLength: n,
            counterRight: s,
            rounds: o,
          } = (function (e, t) {
            if (null == t || "object" != typeof t)
              throw new Error("options must be defined");
            return Object.assign(e, t);
          })(
            {
              allowShortKeys: !1,
              counterLength: 8,
              counterRight: !1,
              rounds: 20,
            },
            t
          );
          if ("function" != typeof e)
            throw new Error("core must be a function");
          return (
            Os(n),
            Os(o),
            As(s),
            As(r),
            function (t, a, c, l) {
              let h =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0;
              xs(t), xs(a), xs(c);
              const u = c.length;
              if (
                (void 0 === l && (l = new Uint8Array(u)),
                xs(l),
                Os(h),
                h < 0 || h >= Hs)
              )
                throw new Error("arx: counter overflow");
              if (l.length < u)
                throw new Error(
                  `arx: output (${l.length}) is shorter than data (${u})`
                );
              const d = [];
              let p,
                f,
                g = t.length;
              if (32 === g) d.push((p = js(t))), (f = Bs);
              else {
                if (16 !== g || !r)
                  throw new Error(`arx: invalid 32-byte key, got length=${g}`);
                (p = new Uint8Array(32)),
                  p.set(t),
                  p.set(t, 16),
                  (f = Ms),
                  d.push(p);
              }
              zs(a) || d.push((a = js(a)));
              const y = Ns(p);
              if (i) {
                if (24 !== a.length)
                  throw new Error("arx: extended nonce must be 24 bytes");
                i(f, y, Ns(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              const m = 16 - n;
              if (m !== a.length)
                throw new Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                const e = new Uint8Array(12);
                e.set(a, s ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              const w = Ns(a);
              return (
                (function (e, t, r, i, n, s, o, a) {
                  const c = n.length,
                    l = new Uint8Array(64),
                    h = Ns(l),
                    u = zs(n) && zs(s),
                    d = u ? Ns(n) : Vs,
                    p = u ? Ns(s) : Vs;
                  for (let f = 0; f < c; o++) {
                    if ((e(t, r, i, h, o, a), o >= Hs))
                      throw new Error("arx: counter overflow");
                    const g = Math.min(64, c - f);
                    if (u && 64 === g) {
                      const e = f / 4;
                      if (f % 4 !== 0)
                        throw new Error("arx: invalid block position");
                      for (let t, r = 0; r < 16; r++)
                        (t = e + r), (p[t] = d[t] ^ h[r]);
                      f += 64;
                    } else {
                      for (let e, t = 0; t < g; t++)
                        (e = f + t), (s[e] = n[e] ^ l[t]);
                      f += g;
                    }
                  }
                })(e, f, y, w, c, l, h, o),
                Ds(...d),
                l
              );
            }
          );
        })(
          function (e, t, r, i, n) {
            let s =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 20,
              o = e[0],
              a = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              u = t[1],
              d = t[2],
              p = t[3],
              f = t[4],
              g = t[5],
              y = t[6],
              m = t[7],
              w = n,
              v = r[0],
              b = r[1],
              _ = r[2],
              E = o,
              I = a,
              S = c,
              O = l,
              P = h,
              x = u,
              T = d,
              A = p,
              N = f,
              R = g,
              k = y,
              C = m,
              j = w,
              D = v,
              L = b,
              U = _;
            for (let M = 0; M < s; M += 2)
              (E = (E + P) | 0),
                (j = $s(j ^ E, 16)),
                (N = (N + j) | 0),
                (P = $s(P ^ N, 12)),
                (E = (E + P) | 0),
                (j = $s(j ^ E, 8)),
                (N = (N + j) | 0),
                (P = $s(P ^ N, 7)),
                (I = (I + x) | 0),
                (D = $s(D ^ I, 16)),
                (R = (R + D) | 0),
                (x = $s(x ^ R, 12)),
                (I = (I + x) | 0),
                (D = $s(D ^ I, 8)),
                (R = (R + D) | 0),
                (x = $s(x ^ R, 7)),
                (S = (S + T) | 0),
                (L = $s(L ^ S, 16)),
                (k = (k + L) | 0),
                (T = $s(T ^ k, 12)),
                (S = (S + T) | 0),
                (L = $s(L ^ S, 8)),
                (k = (k + L) | 0),
                (T = $s(T ^ k, 7)),
                (O = (O + A) | 0),
                (U = $s(U ^ O, 16)),
                (C = (C + U) | 0),
                (A = $s(A ^ C, 12)),
                (O = (O + A) | 0),
                (U = $s(U ^ O, 8)),
                (C = (C + U) | 0),
                (A = $s(A ^ C, 7)),
                (E = (E + x) | 0),
                (U = $s(U ^ E, 16)),
                (k = (k + U) | 0),
                (x = $s(x ^ k, 12)),
                (E = (E + x) | 0),
                (U = $s(U ^ E, 8)),
                (k = (k + U) | 0),
                (x = $s(x ^ k, 7)),
                (I = (I + T) | 0),
                (j = $s(j ^ I, 16)),
                (C = (C + j) | 0),
                (T = $s(T ^ C, 12)),
                (I = (I + T) | 0),
                (j = $s(j ^ I, 8)),
                (C = (C + j) | 0),
                (T = $s(T ^ C, 7)),
                (S = (S + A) | 0),
                (D = $s(D ^ S, 16)),
                (N = (N + D) | 0),
                (A = $s(A ^ N, 12)),
                (S = (S + A) | 0),
                (D = $s(D ^ S, 8)),
                (N = (N + D) | 0),
                (A = $s(A ^ N, 7)),
                (O = (O + P) | 0),
                (L = $s(L ^ O, 16)),
                (R = (R + L) | 0),
                (P = $s(P ^ R, 12)),
                (O = (O + P) | 0),
                (L = $s(L ^ O, 8)),
                (R = (R + L) | 0),
                (P = $s(P ^ R, 7));
            let q = 0;
            (i[q++] = (o + E) | 0),
              (i[q++] = (a + I) | 0),
              (i[q++] = (c + S) | 0),
              (i[q++] = (l + O) | 0),
              (i[q++] = (h + P) | 0),
              (i[q++] = (u + x) | 0),
              (i[q++] = (d + T) | 0),
              (i[q++] = (p + A) | 0),
              (i[q++] = (f + N) | 0),
              (i[q++] = (g + R) | 0),
              (i[q++] = (y + k) | 0),
              (i[q++] = (m + C) | 0),
              (i[q++] = (w + j) | 0),
              (i[q++] = (v + D) | 0),
              (i[q++] = (b + L) | 0),
              (i[q++] = (_ + U) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        Js = new Uint8Array(16),
        Gs = (e, t) => {
          e.update(t);
          const r = t.length % 16;
          r && e.update(Js.subarray(r));
        },
        Ys = new Uint8Array(32);
      function Qs(e, t, r, i, n) {
        const s = e(t, r, Ys),
          o = Zs.create(s);
        n && Gs(o, n), Gs(o, i);
        const a = new Uint8Array(16),
          c = ((e) => new DataView(e.buffer, e.byteOffset, e.byteLength))(a);
        Cs(c, 0, BigInt(n ? n.length : 0), !0),
          Cs(c, 8, BigInt(i.length), !0),
          o.update(a);
        const l = o.digest();
        return Ds(s, a), l;
      }
      const Xs = ((e, t) => {
        function r(r) {
          for (
            var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), s = 1;
            s < i;
            s++
          )
            n[s - 1] = arguments[s];
          if ((xs(r), void 0 !== e.nonceLength)) {
            const t = n[0];
            if (!t) throw new Error("nonce / iv required");
            e.varSizeNonce ? xs(t) : xs(t, e.nonceLength);
          }
          const o = e.tagLength;
          o && void 0 !== n[1] && xs(n[1]);
          const a = t(r, ...n),
            c = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw new Error("cipher output not supported");
                xs(t);
              }
            };
          let l = !1;
          return {
            encrypt(e, t) {
              if (l)
                throw new Error("cannot encrypt() twice with same key + nonce");
              return (l = !0), xs(e), c(a.encrypt.length, t), a.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((xs(e), o && e.length < o))
                throw new Error(
                  "invalid ciphertext length: smaller than tagLength=" + o
                );
              return c(a.decrypt.length, t), a.decrypt(e, t);
            },
          };
        }
        return Object.assign(r, e), r;
      })(
        { blockSize: 64, nonceLength: 12, tagLength: 16 },
        ((eo = Ws),
        (e, t, r) => ({
          encrypt(i, n) {
            const s = i.length;
            (n = ks(s + 16, n, !1)).set(i);
            const o = n.subarray(0, -16);
            eo(e, t, o, o, 1);
            const a = Qs(eo, e, t, o, r);
            return n.set(a, s), Ds(a), n;
          },
          decrypt(i, n) {
            n = ks(i.length - 16, n, !1);
            const s = i.subarray(0, -16),
              o = i.subarray(-16),
              a = Qs(eo, e, t, s, r);
            if (
              !(function (e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 0 === r;
              })(o, a)
            )
              throw new Error("invalid tag");
            return n.set(i.subarray(0, -16)), eo(e, t, n, n, 1), Ds(a), n;
          },
        }))
      );
      var eo;
      class to extends kn {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), vn(e);
          const r = Rn(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw new Error(
              "Expected instance of class which extends utils.Hash"
            );
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const i = this.blockLen,
            n = new Uint8Array(i);
          n.set(r.length > i ? e.create().update(r).digest() : r);
          for (let s = 0; s < n.length; s++) n[s] ^= 54;
          this.iHash.update(n), (this.oHash = e.create());
          for (let s = 0; s < n.length; s++) n[s] ^= 106;
          this.oHash.update(n), n.fill(0);
        }
        update(e) {
          return bn(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          bn(this),
            wn(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          const e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: t,
            iHash: r,
            finished: i,
            destroyed: n,
            blockLen: s,
            outputLen: o,
          } = this;
          return (
            (e.finished = i),
            (e.destroyed = n),
            (e.blockLen = s),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      const ro = (e, t, r) => new to(e, t).update(r).digest();
      ro.create = (e, t) => new to(e, t);
      const io = new Uint8Array([0]),
        no = new Uint8Array();
      const so = (e, t, r, i, n) =>
        (function (e, t, r) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32;
          if ((vn(e), mn(i), i > 255 * e.outputLen))
            throw new Error("Length should be <= 255*HashLen");
          const n = Math.ceil(i / e.outputLen);
          void 0 === r && (r = no);
          const s = new Uint8Array(n * e.outputLen),
            o = ro.create(e, t),
            a = o._cloneInto(),
            c = new Uint8Array(o.outputLen);
          for (let l = 0; l < n; l++)
            (io[0] = l + 1),
              a
                .update(0 === l ? no : c)
                .update(r)
                .update(io)
                .digestInto(c),
              s.set(c, e.outputLen * l),
              o._cloneInto(a);
          return o.destroy(), a.destroy(), c.fill(0), io.fill(0), s.slice(0, i);
        })(
          e,
          (function (e, t, r) {
            return (
              vn(e),
              void 0 === r && (r = new Uint8Array(e.outputLen)),
              ro(e, Rn(r), Rn(t))
            );
          })(e, t, r),
          i,
          n
        );
      function oo(e, t, r) {
        return (e & t) ^ (~e & r);
      }
      function ao(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      class co extends kn {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = Pn(this.buffer));
        }
        update(e) {
          bn(this);
          const { view: t, buffer: r, blockLen: i } = this,
            n = (e = Rn(e)).length;
          for (let s = 0; s < n; ) {
            const o = Math.min(i - this.pos, n - s);
            if (o !== i)
              r.set(e.subarray(s, s + o), this.pos),
                (this.pos += o),
                (s += o),
                this.pos === i && (this.process(t, 0), (this.pos = 0));
            else {
              const t = Pn(e);
              for (; i <= n - s; s += i) this.process(t, s);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          bn(this), _n(e, this), (this.finished = !0);
          const { buffer: t, view: r, blockLen: i, isLE: n } = this;
          let { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > i - s && (this.process(r, 0), (s = 0));
          for (let h = s; h < i; h++) t[h] = 0;
          (function (e, t, r, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, i);
            const n = BigInt(32),
              s = BigInt(4294967295),
              o = Number((r >> n) & s),
              a = Number(r & s),
              c = i ? 4 : 0,
              l = i ? 0 : 4;
            e.setUint32(t + c, o, i), e.setUint32(t + l, a, i);
          })(r, i - 8, BigInt(8 * this.length), n),
            this.process(r, 0);
          const o = Pn(e),
            a = this.outputLen;
          if (a % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const c = a / 4,
            l = this.get();
          if (c > l.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let h = 0; h < c; h++) o.setUint32(4 * h, l[h], n);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const {
            blockLen: t,
            buffer: r,
            length: i,
            finished: n,
            destroyed: s,
            pos: o,
          } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = n),
            (e.destroyed = s),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      const lo = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        ho = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        uo = new Uint32Array(64);
      class po extends co {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | ho[0]),
            (this.B = 0 | ho[1]),
            (this.C = 0 | ho[2]),
            (this.D = 0 | ho[3]),
            (this.E = 0 | ho[4]),
            (this.F = 0 | ho[5]),
            (this.G = 0 | ho[6]),
            (this.H = 0 | ho[7]);
        }
        get() {
          const { A: e, B: t, C: r, D: i, E: n, F: s, G: o, H: a } = this;
          return [e, t, r, i, n, s, o, a];
        }
        set(e, t, r, i, n, s, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | i),
            (this.E = 0 | n),
            (this.F = 0 | s),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let h = 0; h < 16; h++, t += 4) uo[h] = e.getUint32(t, !1);
          for (let h = 16; h < 64; h++) {
            const e = uo[h - 15],
              t = uo[h - 2],
              r = xn(e, 7) ^ xn(e, 18) ^ (e >>> 3),
              i = xn(t, 17) ^ xn(t, 19) ^ (t >>> 10);
            uo[h] = (i + uo[h - 7] + r + uo[h - 16]) | 0;
          }
          let { A: r, B: i, C: n, D: s, E: o, F: a, G: c, H: l } = this;
          for (let h = 0; h < 64; h++) {
            const e =
                (l +
                  (xn(o, 6) ^ xn(o, 11) ^ xn(o, 25)) +
                  oo(o, a, c) +
                  lo[h] +
                  uo[h]) |
                0,
              t = ((xn(r, 2) ^ xn(r, 13) ^ xn(r, 22)) + ao(r, i, n)) | 0;
            (l = c),
              (c = a),
              (a = o),
              (o = (s + e) | 0),
              (s = n),
              (n = i),
              (i = r),
              (r = (e + t) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (n = (n + this.C) | 0),
            (s = (s + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, i, n, s, o, a, c, l);
        }
        roundClean() {
          uo.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const fo = Cn(() => new po()),
        go = BigInt(0),
        yo = BigInt(1),
        mo = BigInt(2);
      function wo(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function vo(e) {
        if (!wo(e)) throw new Error("Uint8Array expected");
      }
      function bo(e, t) {
        if ("boolean" != typeof t)
          throw new Error(e + " boolean expected, got " + t);
      }
      const _o = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function Eo(e) {
        vo(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += _o[e[r]];
        return t;
      }
      function Io(e) {
        const t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function So(e) {
        if ("string" != typeof e)
          throw new Error("hex string expected, got " + typeof e);
        return "" === e ? go : BigInt("0x" + e);
      }
      const Oo = 48,
        Po = 57,
        xo = 65,
        To = 70,
        Ao = 97,
        No = 102;
      function Ro(e) {
        return e >= Oo && e <= Po
          ? e - Oo
          : e >= xo && e <= To
          ? e - (xo - 10)
          : e >= Ao && e <= No
          ? e - (Ao - 10)
          : void 0;
      }
      function ko(e) {
        if ("string" != typeof e)
          throw new Error("hex string expected, got " + typeof e);
        const t = e.length,
          r = t / 2;
        if (t % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + t
          );
        const i = new Uint8Array(r);
        for (let n = 0, s = 0; n < r; n++, s += 2) {
          const t = Ro(e.charCodeAt(s)),
            r = Ro(e.charCodeAt(s + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[s] + e[s + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                t +
                '" at index ' +
                s
            );
          }
          i[n] = 16 * t + r;
        }
        return i;
      }
      function Co(e) {
        return So(Eo(e));
      }
      function jo(e) {
        return vo(e), So(Eo(Uint8Array.from(e).reverse()));
      }
      function Do(e, t) {
        return ko(e.toString(16).padStart(2 * t, "0"));
      }
      function Lo(e, t) {
        return Do(e, t).reverse();
      }
      function Uo(e, t, r) {
        let i;
        if ("string" == typeof t)
          try {
            i = ko(t);
          } catch (s) {
            throw new Error(
              e + " must be hex string or Uint8Array, cause: " + s
            );
          }
        else {
          if (!wo(t)) throw new Error(e + " must be hex string or Uint8Array");
          i = Uint8Array.from(t);
        }
        const n = i.length;
        if ("number" == typeof r && n !== r)
          throw new Error(e + " of length " + r + " expected, got " + n);
        return i;
      }
      function qo() {
        let e = 0;
        for (let r = 0; r < arguments.length; r++) {
          const t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          vo(t), (e += t.length);
        }
        const t = new Uint8Array(e);
        for (let r = 0, i = 0; r < arguments.length; r++) {
          const e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          t.set(e, i), (i += e.length);
        }
        return t;
      }
      const Mo = (e) => "bigint" == typeof e && go <= e;
      function Bo(e, t, r) {
        return Mo(e) && Mo(t) && Mo(r) && t <= e && e < r;
      }
      function $o(e, t, r, i) {
        if (!Bo(t, r, i))
          throw new Error(
            "expected valid " + e + ": " + r + " <= n < " + i + ", got " + t
          );
      }
      function zo(e) {
        let t;
        for (t = 0; e > go; e >>= yo, t += 1);
        return t;
      }
      const Ho = (e) => (mo << BigInt(e - 1)) - yo,
        Vo = (e) => new Uint8Array(e),
        Ko = (e) => Uint8Array.from(e);
      function Fo(e, t, r) {
        if ("number" != typeof e || e < 2)
          throw new Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw new Error("qByteLen must be a number");
        if ("function" != typeof r)
          throw new Error("hmacFn must be a function");
        let i = Vo(e),
          n = Vo(e),
          s = 0;
        const o = () => {
            i.fill(1), n.fill(0), (s = 0);
          },
          a = function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
              t[s] = arguments[s];
            return r(n, i, ...t);
          },
          c = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Vo();
            (n = a(Ko([0]), e)),
              (i = a()),
              0 !== e.length && ((n = a(Ko([1]), e)), (i = a()));
          },
          l = () => {
            if (s++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let e = 0;
            const r = [];
            for (; e < t; ) {
              i = a();
              const t = i.slice();
              r.push(t), (e += i.length);
            }
            return qo(...r);
          };
        return (e, t) => {
          let r;
          for (o(), c(e); !(r = t(l())); ) c();
          return o(), r;
        };
      }
      const Zo = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || wo(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function Wo(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const i = (t, r, i) => {
          const n = Zo[r];
          if ("function" != typeof n)
            throw new Error("invalid validator function");
          const s = e[t];
          if ((!i || void 0 !== s) && !n(s, e))
            throw new Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + s
            );
        };
        for (const [n, s] of Object.entries(t)) i(n, s, !1);
        for (const [n, s] of Object.entries(r)) i(n, s, !0);
        return e;
      }
      function Jo(e) {
        const t = new WeakMap();
        return function (r) {
          const i = t.get(r);
          if (void 0 !== i) return i;
          for (
            var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            s[o - 1] = arguments[o];
          const a = e(r, ...s);
          return t.set(r, a), a;
        };
      }
      var Go = Object.freeze({
        __proto__: null,
        isBytes: wo,
        abytes: vo,
        abool: bo,
        bytesToHex: Eo,
        numberToHexUnpadded: Io,
        hexToNumber: So,
        hexToBytes: ko,
        bytesToNumberBE: Co,
        bytesToNumberLE: jo,
        numberToBytesBE: Do,
        numberToBytesLE: Lo,
        numberToVarBytesBE: function (e) {
          return ko(Io(e));
        },
        ensureBytes: Uo,
        concatBytes: qo,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
          return 0 === r;
        },
        utf8ToBytes: function (e) {
          if ("string" != typeof e) throw new Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: Bo,
        aInRange: $o,
        bitLen: zo,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & yo;
        },
        bitSet: function (e, t, r) {
          return e | ((r ? yo : go) << BigInt(t));
        },
        bitMask: Ho,
        createHmacDrbg: Fo,
        validateObject: Wo,
        notImplemented: () => {
          throw new Error("not implemented");
        },
        memoized: Jo,
      });
      const Yo = BigInt(0),
        Qo = BigInt(1),
        Xo = BigInt(2),
        ea = BigInt(3),
        ta = BigInt(4),
        ra = BigInt(5),
        ia = BigInt(8);
      function na(e, t) {
        const r = e % t;
        return r >= Yo ? r : t + r;
      }
      function sa(e, t, r) {
        if (t < Yo) throw new Error("invalid exponent, negatives unsupported");
        if (r <= Yo) throw new Error("invalid modulus");
        if (r === Qo) return Yo;
        let i = Qo;
        for (; t > Yo; )
          t & Qo && (i = (i * e) % r), (e = (e * e) % r), (t >>= Qo);
        return i;
      }
      function oa(e, t, r) {
        let i = e;
        for (; t-- > Yo; ) (i *= i), (i %= r);
        return i;
      }
      function aa(e, t) {
        if (e === Yo) throw new Error("invert: expected non-zero number");
        if (t <= Yo)
          throw new Error("invert: expected positive modulus, got " + t);
        let r = na(e, t),
          i = t,
          n = Yo,
          s = Qo;
        for (; r !== Yo; ) {
          const e = i % r,
            t = n - s * (i / r);
          (i = r), (r = e), (n = s), (s = t);
        }
        if (i !== Qo) throw new Error("invert: does not exist");
        return na(n, t);
      }
      function ca(e) {
        if (e % ta === ea) {
          const t = (e + Qo) / ta;
          return function (e, r) {
            const i = e.pow(r, t);
            if (!e.eql(e.sqr(i), r)) throw new Error("Cannot find square root");
            return i;
          };
        }
        if (e % ia === ra) {
          const t = (e - ra) / ia;
          return function (e, r) {
            const i = e.mul(r, Xo),
              n = e.pow(i, t),
              s = e.mul(r, n),
              o = e.mul(e.mul(s, Xo), n),
              a = e.mul(s, e.sub(o, e.ONE));
            if (!e.eql(e.sqr(a), r)) throw new Error("Cannot find square root");
            return a;
          };
        }
        return (function (e) {
          const t = (e - Qo) / Xo;
          let r, i, n;
          for (r = e - Qo, i = 0; r % Xo === Yo; r /= Xo, i++);
          for (n = Xo; n < e && sa(n, t, e) !== e - Qo; n++)
            if (n > 1e3)
              throw new Error("Cannot find square root: likely non-prime P");
          if (1 === i) {
            const t = (e + Qo) / ta;
            return function (e, r) {
              const i = e.pow(r, t);
              if (!e.eql(e.sqr(i), r))
                throw new Error("Cannot find square root");
              return i;
            };
          }
          const s = (r + Qo) / Xo;
          return function (e, o) {
            if (e.pow(o, t) === e.neg(e.ONE))
              throw new Error("Cannot find square root");
            let a = i,
              c = e.pow(e.mul(e.ONE, n), r),
              l = e.pow(o, s),
              h = e.pow(o, r);
            for (; !e.eql(h, e.ONE); ) {
              if (e.eql(h, e.ZERO)) return e.ZERO;
              let t = 1;
              for (let i = e.sqr(h); t < a && !e.eql(i, e.ONE); t++)
                i = e.sqr(i);
              const r = e.pow(c, Qo << BigInt(a - t - 1));
              (c = e.sqr(r)), (l = e.mul(l, r)), (h = e.mul(h, c)), (a = t);
            }
            return l;
          };
        })(e);
      }
      const la = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function ha(e, t) {
        const r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function ua(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e <= Yo)
          throw new Error("invalid field: expected ORDER > 0, got " + e);
        const { nBitLength: n, nByteLength: s } = ha(e, t);
        if (s > 2048)
          throw new Error("invalid field: expected ORDER of <= 2048 bytes");
        let o;
        const a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: s,
          MASK: Ho(n),
          ZERO: Yo,
          ONE: Qo,
          create: (t) => na(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw new Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return Yo <= t && t < e;
          },
          is0: (e) => e === Yo,
          isOdd: (e) => (e & Qo) === Qo,
          neg: (t) => na(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => na(t * t, e),
          add: (t, r) => na(t + r, e),
          sub: (t, r) => na(t - r, e),
          mul: (t, r) => na(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < Yo)
                throw new Error("invalid exponent, negatives unsupported");
              if (r === Yo) return e.ONE;
              if (r === Qo) return t;
              let i = e.ONE,
                n = t;
              for (; r > Yo; )
                r & Qo && (i = e.mul(i, n)), (n = e.sqr(n)), (r >>= Qo);
              return i;
            })(a, e, t),
          div: (t, r) => na(t * aa(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => aa(t, e),
          sqrt: i.sqrt || ((t) => (o || (o = ca(e)), o(a, t))),
          invertBatch: (e) =>
            (function (e, t) {
              const r = new Array(t.length),
                i = t.reduce(
                  (t, i, n) => (e.is0(i) ? t : ((r[n] = t), e.mul(t, i))),
                  e.ONE
                ),
                n = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, n) =>
                    e.is0(i) ? t : ((r[n] = e.mul(t, r[n])), e.mul(t, i)),
                  n
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? Lo(e, s) : Do(e, s)),
          fromBytes: (e) => {
            if (e.length !== s)
              throw new Error(
                "Field.fromBytes: expected " + s + " bytes, got " + e.length
              );
            return r ? jo(e) : Co(e);
          },
        });
        return Object.freeze(a);
      }
      function da(e) {
        if ("bigint" != typeof e) throw new Error("field order must be bigint");
        const t = e.toString(2).length;
        return Math.ceil(t / 8);
      }
      function pa(e) {
        const t = da(e);
        return t + Math.ceil(t / 2);
      }
      const fa = BigInt(0),
        ga = BigInt(1);
      function ya(e, t) {
        const r = t.negate();
        return e ? r : t;
      }
      function ma(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw new Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function wa(e, t) {
        ma(e, t);
        return { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) };
      }
      const va = new WeakMap(),
        ba = new WeakMap();
      function _a(e) {
        return ba.get(e) || 1;
      }
      function Ea(e, t, r, i) {
        if (
          ((function (e, t) {
            if (!Array.isArray(e)) throw new Error("array expected");
            e.forEach((e, r) => {
              if (!(e instanceof t))
                throw new Error("invalid point at index " + r);
            });
          })(r, e),
          (function (e, t) {
            if (!Array.isArray(e)) throw new Error("array of scalars expected");
            e.forEach((e, r) => {
              if (!t.isValid(e))
                throw new Error("invalid scalar at index " + r);
            });
          })(i, t),
          r.length !== i.length)
        )
          throw new Error(
            "arrays of points and scalars must have equal length"
          );
        const n = e.ZERO,
          s = zo(BigInt(r.length)),
          o = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
          a = (1 << o) - 1,
          c = new Array(a + 1).fill(n);
        let l = n;
        for (let h = Math.floor((t.BITS - 1) / o) * o; h >= 0; h -= o) {
          c.fill(n);
          for (let t = 0; t < i.length; t++) {
            const e = i[t],
              n = Number((e >> BigInt(h)) & BigInt(a));
            c[n] = c[n].add(r[t]);
          }
          let e = n;
          for (let t = c.length - 1, r = n; t > 0; t--)
            (r = r.add(c[t])), (e = e.add(r));
          if (((l = l.add(e)), 0 !== h))
            for (let t = 0; t < o; t++) l = l.double();
        }
        return l;
      }
      function Ia(e) {
        return (
          (function (e) {
            const t = la.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            Wo(e, t);
          })(e.Fp),
          Wo(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...ha(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      const Sa = BigInt(0),
        Oa = BigInt(1);
      const Pa = BigInt(
        "57896044618658097711785492504343953926634992332820282019728792003956564819949"
      );
      BigInt(0);
      const xa = BigInt(1),
        Ta = BigInt(2),
        Aa = BigInt(3),
        Na = BigInt(5);
      BigInt(8);
      const Ra = (function (e) {
        const t = (function (e) {
            return (
              Wo(
                e,
                { a: "bigint" },
                {
                  montgomeryBits: "isSafeInteger",
                  nByteLength: "isSafeInteger",
                  adjustScalarBytes: "function",
                  domain: "function",
                  powPminus2: "function",
                  Gu: "bigint",
                }
              ),
              Object.freeze({ ...e })
            );
          })(e),
          { P: r } = t,
          i = (e) => na(e, r),
          n = t.montgomeryBits,
          s = Math.ceil(n / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => sa(e, r - BigInt(2), r));
        function l(e, t, r) {
          const n = i(e * (t - r));
          return [(t = i(t - n)), (r = i(r + n))];
        }
        const h = (t.a - BigInt(2)) / BigInt(4);
        function u(e) {
          return Lo(i(e), s);
        }
        function d(e, t) {
          const d = (function (e) {
              const t = Uo("u coordinate", e, s);
              return 32 === o && (t[31] &= 127), jo(t);
            })(t),
            p = (function (e) {
              const t = Uo("scalar", e),
                r = t.length;
              if (r !== s && r !== o)
                throw new Error(
                  "invalid scalar, expected " +
                    s +
                    " or " +
                    o +
                    " bytes, got " +
                    r
                );
              return jo(a(t));
            })(e),
            f = (function (e, t) {
              $o("u", e, Sa, r), $o("scalar", t, Sa, r);
              const s = t,
                o = e;
              let a,
                u = Oa,
                d = Sa,
                p = e,
                f = Oa,
                g = Sa;
              for (let r = BigInt(n - 1); r >= Sa; r--) {
                const e = (s >> r) & Oa;
                (g ^= e),
                  (a = l(g, u, p)),
                  (u = a[0]),
                  (p = a[1]),
                  (a = l(g, d, f)),
                  (d = a[0]),
                  (f = a[1]),
                  (g = e);
                const t = u + d,
                  n = i(t * t),
                  c = u - d,
                  y = i(c * c),
                  m = n - y,
                  w = p + f,
                  v = i((p - f) * t),
                  b = i(w * c),
                  _ = v + b,
                  E = v - b;
                (p = i(_ * _)),
                  (f = i(o * i(E * E))),
                  (u = i(n * y)),
                  (d = i(m * (n + i(h * m))));
              }
              (a = l(g, u, p)),
                (u = a[0]),
                (p = a[1]),
                (a = l(g, d, f)),
                (d = a[0]),
                (f = a[1]);
              const y = c(d);
              return i(u * y);
            })(d, p);
          if (f === Sa)
            throw new Error("invalid private or public key received");
          return u(f);
        }
        const p = u(t.Gu);
        function f(e) {
          return d(e, p);
        }
        return {
          scalarMult: d,
          scalarMultBase: f,
          getSharedSecret: (e, t) => d(e, t),
          getPublicKey: (e) => f(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: p,
        };
      })({
        P: Pa,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          const t = Pa,
            { pow_p_5_8: r, b2: i } = (function (e) {
              const t = BigInt(10),
                r = BigInt(20),
                i = BigInt(40),
                n = BigInt(80),
                s = Pa,
                o = (((e * e) % s) * e) % s,
                a = (oa(o, Ta, s) * o) % s,
                c = (oa(a, xa, s) * e) % s,
                l = (oa(c, Na, s) * c) % s,
                h = (oa(l, t, s) * l) % s,
                u = (oa(h, r, s) * h) % s,
                d = (oa(u, i, s) * u) % s,
                p = (oa(d, n, s) * d) % s,
                f = (oa(p, n, s) * d) % s,
                g = (oa(f, t, s) * l) % s;
              return { pow_p_5_8: (oa(g, Ta, s) * e) % s, b2: o };
            })(e);
          return na(oa(r, Aa, t) * i, t);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: jn,
      });
      function ka(e) {
        void 0 !== e.lowS && bo("lowS", e.lowS),
          void 0 !== e.prehash && bo("prehash", e.prehash);
      }
      const { bytesToNumberBE: Ca, hexToBytes: ja } = Go;
      class Da extends Error {
        constructor() {
          super(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          );
        }
      }
      const La = {
          Err: Da,
          _tlv: {
            encode: (e, t) => {
              const { Err: r } = La;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (1 & t.length) throw new r("tlv.encode: unpadded data");
              const i = t.length / 2,
                n = Io(i);
              if ((n.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              const s = i > 127 ? Io((n.length / 2) | 128) : "";
              return Io(e) + s + n + t;
            },
            decode(e, t) {
              const { Err: r } = La;
              let i = 0;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (t.length < 2 || t[i++] !== e)
                throw new r("tlv.decode: wrong tlv");
              const n = t[i++];
              let s = 0;
              if (!!(128 & n)) {
                const e = 127 & n;
                if (!e)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                const o = t.subarray(i, i + e);
                if (o.length !== e)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === o[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (const t of o) s = (s << 8) | t;
                if (((i += e), s < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else s = n;
              const o = t.subarray(i, i + s);
              if (o.length !== s) throw new r("tlv.decode: wrong value length");
              return { v: o, l: t.subarray(i + s) };
            },
          },
          _int: {
            encode(e) {
              const { Err: t } = La;
              if (e < Ua)
                throw new t("integer: negative integers are not allowed");
              let r = Io(e);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(e) {
              const { Err: t } = La;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return Ca(e);
            },
          },
          toSig(e) {
            const { Err: t, _int: r, _tlv: i } = La,
              n = "string" == typeof e ? ja(e) : e;
            vo(n);
            const { v: s, l: o } = i.decode(48, n);
            if (o.length)
              throw new t("invalid signature: left bytes after parsing");
            const { v: a, l: c } = i.decode(2, s),
              { v: l, l: h } = i.decode(2, c);
            if (h.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: r.decode(a), s: r.decode(l) };
          },
          hexFromSig(e) {
            const { _tlv: t, _int: r } = La,
              i = t.encode(2, r.encode(e.r)) + t.encode(2, r.encode(e.s));
            return t.encode(48, i);
          },
        },
        Ua = BigInt(0),
        qa = BigInt(1);
      BigInt(2);
      const Ma = BigInt(3);
      function Ba(e) {
        const t = (function (e) {
            const t = Ia(e);
            Wo(
              t,
              { a: "field", b: "field" },
              {
                allowedPrivateKeyLengths: "array",
                wrapPrivateKey: "boolean",
                isTorsionFree: "function",
                clearCofactor: "function",
                allowInfinityPoint: "boolean",
                fromBytes: "function",
                toBytes: "function",
              }
            );
            const { endo: r, Fp: i, a: n } = t;
            if (r) {
              if (!i.eql(n, i.ZERO))
                throw new Error(
                  "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                );
              if (
                "object" != typeof r ||
                "bigint" != typeof r.beta ||
                "function" != typeof r.splitScalar
              )
                throw new Error(
                  "invalid endomorphism, expected beta: bigint and splitScalar: function"
                );
            }
            return Object.freeze({ ...t });
          })(e),
          { Fp: r } = t,
          i = ua(t.n, t.nBitLength),
          n =
            t.toBytes ||
            ((e, t, i) => {
              const n = t.toAffine();
              return qo(Uint8Array.from([4]), r.toBytes(n.x), r.toBytes(n.y));
            }),
          s =
            t.fromBytes ||
            ((e) => {
              const t = e.subarray(1);
              return {
                x: r.fromBytes(t.subarray(0, r.BYTES)),
                y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
              };
            });
        function o(e) {
          const { a: i, b: n } = t,
            s = r.sqr(e),
            o = r.mul(s, e);
          return r.add(r.add(o, r.mul(e, i)), n);
        }
        if (!r.eql(r.sqr(t.Gy), o(t.Gx)))
          throw new Error("bad generator point: equation left != right");
        function a(e) {
          const {
            allowedPrivateKeyLengths: r,
            nByteLength: i,
            wrapPrivateKey: n,
            n: s,
          } = t;
          if (r && "bigint" != typeof e) {
            if (
              (wo(e) && (e = Eo(e)),
              "string" != typeof e || !r.includes(e.length))
            )
              throw new Error("invalid private key");
            e = e.padStart(2 * i, "0");
          }
          let o;
          try {
            o = "bigint" == typeof e ? e : Co(Uo("private key", e, i));
          } catch {
            throw new Error(
              "invalid private key, expected hex or " +
                i +
                " bytes, got " +
                typeof e
            );
          }
          return n && (o = na(o, s)), $o("private key", o, qa, s), o;
        }
        function c(e) {
          if (!(e instanceof u)) throw new Error("ProjectivePoint expected");
        }
        const l = Jo((e, t) => {
            const { px: i, py: n, pz: s } = e;
            if (r.eql(s, r.ONE)) return { x: i, y: n };
            const o = e.is0();
            null == t && (t = o ? r.ONE : r.inv(s));
            const a = r.mul(i, t),
              c = r.mul(n, t),
              l = r.mul(s, t);
            if (o) return { x: r.ZERO, y: r.ZERO };
            if (!r.eql(l, r.ONE)) throw new Error("invZ was invalid");
            return { x: a, y: c };
          }),
          h = Jo((e) => {
            if (e.is0()) {
              if (t.allowInfinityPoint && !r.is0(e.py)) return;
              throw new Error("bad point: ZERO");
            }
            const { x: i, y: n } = e.toAffine();
            if (!r.isValid(i) || !r.isValid(n))
              throw new Error("bad point: x or y not FE");
            const s = r.sqr(n),
              a = o(i);
            if (!r.eql(s, a))
              throw new Error("bad point: equation left != right");
            if (!e.isTorsionFree())
              throw new Error("bad point: not in prime-order subgroup");
            return !0;
          });
        class u {
          constructor(e, t, i) {
            if (
              ((this.px = e),
              (this.py = t),
              (this.pz = i),
              null == e || !r.isValid(e))
            )
              throw new Error("x required");
            if (null == t || !r.isValid(t)) throw new Error("y required");
            if (null == i || !r.isValid(i)) throw new Error("z required");
            Object.freeze(this);
          }
          static fromAffine(e) {
            const { x: t, y: i } = e || {};
            if (!e || !r.isValid(t) || !r.isValid(i))
              throw new Error("invalid affine point");
            if (e instanceof u) throw new Error("projective point not allowed");
            const n = (e) => r.eql(e, r.ZERO);
            return n(t) && n(i) ? u.ZERO : new u(t, i, r.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(e) {
            const t = r.invertBatch(e.map((e) => e.pz));
            return e.map((e, r) => e.toAffine(t[r])).map(u.fromAffine);
          }
          static fromHex(e) {
            const t = u.fromAffine(s(Uo("pointHex", e)));
            return t.assertValidity(), t;
          }
          static fromPrivateKey(e) {
            return u.BASE.multiply(a(e));
          }
          static msm(e, t) {
            return Ea(u, i, e, t);
          }
          _setWindowSize(e) {
            p.setWindowSize(this, e);
          }
          assertValidity() {
            h(this);
          }
          hasEvenY() {
            const { y: e } = this.toAffine();
            if (r.isOdd) return !r.isOdd(e);
            throw new Error("Field doesn't support isOdd");
          }
          equals(e) {
            c(e);
            const { px: t, py: i, pz: n } = this,
              { px: s, py: o, pz: a } = e,
              l = r.eql(r.mul(t, a), r.mul(s, n)),
              h = r.eql(r.mul(i, a), r.mul(o, n));
            return l && h;
          }
          negate() {
            return new u(this.px, r.neg(this.py), this.pz);
          }
          double() {
            const { a: e, b: i } = t,
              n = r.mul(i, Ma),
              { px: s, py: o, pz: a } = this;
            let c = r.ZERO,
              l = r.ZERO,
              h = r.ZERO,
              d = r.mul(s, s),
              p = r.mul(o, o),
              f = r.mul(a, a),
              g = r.mul(s, o);
            return (
              (g = r.add(g, g)),
              (h = r.mul(s, a)),
              (h = r.add(h, h)),
              (c = r.mul(e, h)),
              (l = r.mul(n, f)),
              (l = r.add(c, l)),
              (c = r.sub(p, l)),
              (l = r.add(p, l)),
              (l = r.mul(c, l)),
              (c = r.mul(g, c)),
              (h = r.mul(n, h)),
              (f = r.mul(e, f)),
              (g = r.sub(d, f)),
              (g = r.mul(e, g)),
              (g = r.add(g, h)),
              (h = r.add(d, d)),
              (d = r.add(h, d)),
              (d = r.add(d, f)),
              (d = r.mul(d, g)),
              (l = r.add(l, d)),
              (f = r.mul(o, a)),
              (f = r.add(f, f)),
              (d = r.mul(f, g)),
              (c = r.sub(c, d)),
              (h = r.mul(f, p)),
              (h = r.add(h, h)),
              (h = r.add(h, h)),
              new u(c, l, h)
            );
          }
          add(e) {
            c(e);
            const { px: i, py: n, pz: s } = this,
              { px: o, py: a, pz: l } = e;
            let h = r.ZERO,
              d = r.ZERO,
              p = r.ZERO;
            const f = t.a,
              g = r.mul(t.b, Ma);
            let y = r.mul(i, o),
              m = r.mul(n, a),
              w = r.mul(s, l),
              v = r.add(i, n),
              b = r.add(o, a);
            (v = r.mul(v, b)),
              (b = r.add(y, m)),
              (v = r.sub(v, b)),
              (b = r.add(i, s));
            let _ = r.add(o, l);
            return (
              (b = r.mul(b, _)),
              (_ = r.add(y, w)),
              (b = r.sub(b, _)),
              (_ = r.add(n, s)),
              (h = r.add(a, l)),
              (_ = r.mul(_, h)),
              (h = r.add(m, w)),
              (_ = r.sub(_, h)),
              (p = r.mul(f, b)),
              (h = r.mul(g, w)),
              (p = r.add(h, p)),
              (h = r.sub(m, p)),
              (p = r.add(m, p)),
              (d = r.mul(h, p)),
              (m = r.add(y, y)),
              (m = r.add(m, y)),
              (w = r.mul(f, w)),
              (b = r.mul(g, b)),
              (m = r.add(m, w)),
              (w = r.sub(y, w)),
              (w = r.mul(f, w)),
              (b = r.add(b, w)),
              (y = r.mul(m, b)),
              (d = r.add(d, y)),
              (y = r.mul(_, b)),
              (h = r.mul(v, h)),
              (h = r.sub(h, y)),
              (y = r.mul(v, m)),
              (p = r.mul(_, p)),
              (p = r.add(p, y)),
              new u(h, d, p)
            );
          }
          subtract(e) {
            return this.add(e.negate());
          }
          is0() {
            return this.equals(u.ZERO);
          }
          wNAF(e) {
            return p.wNAFCached(this, e, u.normalizeZ);
          }
          multiplyUnsafe(e) {
            const { endo: i, n: n } = t;
            $o("scalar", e, Ua, n);
            const s = u.ZERO;
            if (e === Ua) return s;
            if (this.is0() || e === qa) return this;
            if (!i || p.hasPrecomputes(this))
              return p.wNAFCachedUnsafe(this, e, u.normalizeZ);
            let { k1neg: o, k1: a, k2neg: c, k2: l } = i.splitScalar(e),
              h = s,
              d = s,
              f = this;
            for (; a > Ua || l > Ua; )
              a & qa && (h = h.add(f)),
                l & qa && (d = d.add(f)),
                (f = f.double()),
                (a >>= qa),
                (l >>= qa);
            return (
              o && (h = h.negate()),
              c && (d = d.negate()),
              (d = new u(r.mul(d.px, i.beta), d.py, d.pz)),
              h.add(d)
            );
          }
          multiply(e) {
            const { endo: i, n: n } = t;
            let s, o;
            if (($o("scalar", e, qa, n), i)) {
              const { k1neg: t, k1: n, k2neg: a, k2: c } = i.splitScalar(e);
              let { p: l, f: h } = this.wNAF(n),
                { p: d, f: f } = this.wNAF(c);
              (l = p.constTimeNegate(t, l)),
                (d = p.constTimeNegate(a, d)),
                (d = new u(r.mul(d.px, i.beta), d.py, d.pz)),
                (s = l.add(d)),
                (o = h.add(f));
            } else {
              const { p: t, f: r } = this.wNAF(e);
              (s = t), (o = r);
            }
            return u.normalizeZ([s, o])[0];
          }
          multiplyAndAddUnsafe(e, t, r) {
            const i = u.BASE,
              n = (e, t) =>
                t !== Ua && t !== qa && e.equals(i)
                  ? e.multiply(t)
                  : e.multiplyUnsafe(t),
              s = n(this, t).add(n(e, r));
            return s.is0() ? void 0 : s;
          }
          toAffine(e) {
            return l(this, e);
          }
          isTorsionFree() {
            const { h: e, isTorsionFree: r } = t;
            if (e === qa) return !0;
            if (r) return r(u, this);
            throw new Error(
              "isTorsionFree() has not been declared for the elliptic curve"
            );
          }
          clearCofactor() {
            const { h: e, clearCofactor: r } = t;
            return e === qa ? this : r ? r(u, this) : this.multiplyUnsafe(t.h);
          }
          toRawBytes() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return bo("isCompressed", e), this.assertValidity(), n(u, this, e);
          }
          toHex() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return bo("isCompressed", e), Eo(this.toRawBytes(e));
          }
        }
        (u.BASE = new u(t.Gx, t.Gy, r.ONE)),
          (u.ZERO = new u(r.ZERO, r.ONE, r.ZERO));
        const d = t.nBitLength,
          p = (function (e, t) {
            return {
              constTimeNegate: ya,
              hasPrecomputes: (e) => 1 !== _a(e),
              unsafeLadder(t, r) {
                let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : e.ZERO,
                  n = t;
                for (; r > fa; )
                  r & ga && (i = i.add(n)), (n = n.double()), (r >>= ga);
                return i;
              },
              precomputeWindow(e, r) {
                const { windows: i, windowSize: n } = wa(r, t),
                  s = [];
                let o = e,
                  a = o;
                for (let t = 0; t < i; t++) {
                  (a = o), s.push(a);
                  for (let e = 1; e < n; e++) (a = a.add(o)), s.push(a);
                  o = a.double();
                }
                return s;
              },
              wNAF(r, i, n) {
                const { windows: s, windowSize: o } = wa(r, t);
                let a = e.ZERO,
                  c = e.BASE;
                const l = BigInt(2 ** r - 1),
                  h = 2 ** r,
                  u = BigInt(r);
                for (let e = 0; e < s; e++) {
                  const t = e * o;
                  let r = Number(n & l);
                  (n >>= u), r > o && ((r -= h), (n += ga));
                  const s = t,
                    d = t + Math.abs(r) - 1,
                    p = e % 2 !== 0,
                    f = r < 0;
                  0 === r ? (c = c.add(ya(p, i[s]))) : (a = a.add(ya(f, i[d])));
                }
                return { p: a, f: c };
              },
              wNAFUnsafe(r, i, n) {
                let s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : e.ZERO;
                const { windows: o, windowSize: a } = wa(r, t),
                  c = BigInt(2 ** r - 1),
                  l = 2 ** r,
                  h = BigInt(r);
                for (let e = 0; e < o; e++) {
                  const t = e * a;
                  if (n === fa) break;
                  let r = Number(n & c);
                  if (((n >>= h), r > a && ((r -= l), (n += ga)), 0 === r))
                    continue;
                  let o = i[t + Math.abs(r) - 1];
                  r < 0 && (o = o.negate()), (s = s.add(o));
                }
                return s;
              },
              getPrecomputes(e, t, r) {
                let i = va.get(t);
                return (
                  i ||
                    ((i = this.precomputeWindow(t, e)),
                    1 !== e && va.set(t, r(i))),
                  i
                );
              },
              wNAFCached(e, t, r) {
                const i = _a(e);
                return this.wNAF(i, this.getPrecomputes(i, e, r), t);
              },
              wNAFCachedUnsafe(e, t, r, i) {
                const n = _a(e);
                return 1 === n
                  ? this.unsafeLadder(e, t, i)
                  : this.wNAFUnsafe(n, this.getPrecomputes(n, e, r), t, i);
              },
              setWindowSize(e, r) {
                ma(r, t), ba.set(e, r), va.delete(e);
              },
            };
          })(u, t.endo ? Math.ceil(d / 2) : d);
        return {
          CURVE: t,
          ProjectivePoint: u,
          normPrivateKeyToScalar: a,
          weierstrassEquation: o,
          isWithinCurveOrder: function (e) {
            return Bo(e, qa, t.n);
          },
        };
      }
      function $a(e) {
        const t = (function (e) {
            const t = Ia(e);
            return (
              Wo(
                t,
                { hash: "hash", hmac: "function", randomBytes: "function" },
                {
                  bits2int: "function",
                  bits2int_modN: "function",
                  lowS: "boolean",
                }
              ),
              Object.freeze({ lowS: !0, ...t })
            );
          })(e),
          { Fp: r, n: i } = t,
          n = r.BYTES + 1,
          s = 2 * r.BYTES + 1;
        function o(e) {
          return na(e, i);
        }
        function a(e) {
          return aa(e, i);
        }
        const {
            ProjectivePoint: c,
            normPrivateKeyToScalar: l,
            weierstrassEquation: h,
            isWithinCurveOrder: u,
          } = Ba({
            ...t,
            toBytes(e, t, i) {
              const n = t.toAffine(),
                s = r.toBytes(n.x),
                o = qo;
              return (
                bo("isCompressed", i),
                i
                  ? o(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s)
                  : o(Uint8Array.from([4]), s, r.toBytes(n.y))
              );
            },
            fromBytes(e) {
              const t = e.length,
                i = e[0],
                o = e.subarray(1);
              if (t !== n || (2 !== i && 3 !== i)) {
                if (t === s && 4 === i) {
                  return {
                    x: r.fromBytes(o.subarray(0, r.BYTES)),
                    y: r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES)),
                  };
                }
                throw new Error(
                  "invalid Point, expected length of " +
                    n +
                    ", or uncompressed " +
                    s +
                    ", got " +
                    t
                );
              }
              {
                const e = Co(o);
                if (!Bo(e, qa, r.ORDER))
                  throw new Error("Point is not on curve");
                const t = h(e);
                let n;
                try {
                  n = r.sqrt(t);
                } catch (W) {
                  const t = W instanceof Error ? ": " + W.message : "";
                  throw new Error("Point is not on curve" + t);
                }
                return (
                  (1 === (1 & i)) !== ((n & qa) === qa) && (n = r.neg(n)),
                  { x: e, y: n }
                );
              }
            },
          }),
          d = (e) => Eo(Do(e, t.nByteLength));
        function p(e) {
          return e > i >> qa;
        }
        const f = (e, t, r) => Co(e.slice(t, r));
        class g {
          constructor(e, t, r) {
            (this.r = e),
              (this.s = t),
              (this.recovery = r),
              this.assertValidity();
          }
          static fromCompact(e) {
            const r = t.nByteLength;
            return (
              (e = Uo("compactSignature", e, 2 * r)),
              new g(f(e, 0, r), f(e, r, 2 * r))
            );
          }
          static fromDER(e) {
            const { r: t, s: r } = La.toSig(Uo("DER", e));
            return new g(t, r);
          }
          assertValidity() {
            $o("r", this.r, qa, i), $o("s", this.s, qa, i);
          }
          addRecoveryBit(e) {
            return new g(this.r, this.s, e);
          }
          recoverPublicKey(e) {
            const { r: i, s: n, recovery: s } = this,
              l = v(Uo("msgHash", e));
            if (null == s || ![0, 1, 2, 3].includes(s))
              throw new Error("recovery id invalid");
            const h = 2 === s || 3 === s ? i + t.n : i;
            if (h >= r.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const u = 0 === (1 & s) ? "02" : "03",
              p = c.fromHex(u + d(h)),
              f = a(h),
              g = o(-l * f),
              y = o(n * f),
              m = c.BASE.multiplyAndAddUnsafe(p, g, y);
            if (!m) throw new Error("point at infinify");
            return m.assertValidity(), m;
          }
          hasHighS() {
            return p(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new g(this.r, o(-this.s), this.recovery)
              : this;
          }
          toDERRawBytes() {
            return ko(this.toDERHex());
          }
          toDERHex() {
            return La.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return ko(this.toCompactHex());
          }
          toCompactHex() {
            return d(this.r) + d(this.s);
          }
        }
        const y = {
          isValidPrivateKey(e) {
            try {
              return l(e), !0;
            } catch {
              return !1;
            }
          },
          normPrivateKeyToScalar: l,
          randomPrivateKey: () => {
            const e = pa(t.n);
            return (function (e, t) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              const i = e.length,
                n = da(t),
                s = pa(t);
              if (i < 16 || i < s || i > 1024)
                throw new Error(
                  "expected " + s + "-1024 bytes of input, got " + i
                );
              const o = na(r ? jo(e) : Co(e), t - Qo) + Qo;
              return r ? Lo(o, n) : Do(o, n);
            })(t.randomBytes(e), t.n);
          },
          precompute() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 8,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : c.BASE;
            return t._setWindowSize(e), t.multiply(BigInt(3)), t;
          },
        };
        function m(e) {
          const t = wo(e),
            r = "string" == typeof e,
            i = (t || r) && e.length;
          return t
            ? i === n || i === s
            : r
            ? i === 2 * n || i === 2 * s
            : e instanceof c;
        }
        const w =
            t.bits2int ||
            function (e) {
              if (e.length > 8192) throw new Error("input is too large");
              const r = Co(e),
                i = 8 * e.length - t.nBitLength;
              return i > 0 ? r >> BigInt(i) : r;
            },
          v =
            t.bits2int_modN ||
            function (e) {
              return o(w(e));
            },
          b = Ho(t.nBitLength);
        function _(e) {
          return $o("num < 2^" + t.nBitLength, e, Ua, b), Do(e, t.nByteLength);
        }
        function E(e, i) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I;
          if (["recovered", "canonical"].some((e) => e in n))
            throw new Error("sign() legacy options not supported");
          const { hash: s, randomBytes: h } = t;
          let { lowS: d, prehash: f, extraEntropy: y } = n;
          null == d && (d = !0),
            (e = Uo("msgHash", e)),
            ka(n),
            f && (e = Uo("prehashed msgHash", s(e)));
          const m = v(e),
            b = l(i),
            E = [_(b), _(m)];
          if (null != y && !1 !== y) {
            const e = !0 === y ? h(r.BYTES) : y;
            E.push(Uo("extraEntropy", e));
          }
          const S = qo(...E),
            O = m;
          return {
            seed: S,
            k2sig: function (e) {
              const t = w(e);
              if (!u(t)) return;
              const r = a(t),
                i = c.BASE.multiply(t).toAffine(),
                n = o(i.x);
              if (n === Ua) return;
              const s = o(r * o(O + n * b));
              if (s === Ua) return;
              let l = (i.x === n ? 0 : 2) | Number(i.y & qa),
                h = s;
              return (
                d &&
                  p(s) &&
                  ((h = (function (e) {
                    return p(e) ? o(-e) : e;
                  })(s)),
                  (l ^= 1)),
                new g(n, h, l)
              );
            },
          };
        }
        const I = { lowS: t.lowS, prehash: !1 },
          S = { lowS: t.lowS, prehash: !1 };
        return (
          c.BASE._setWindowSize(8),
          {
            CURVE: t,
            getPublicKey: function (e) {
              let t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return c.fromPrivateKey(e).toRawBytes(t);
            },
            getSharedSecret: function (e, t) {
              let r =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              if (m(e)) throw new Error("first arg must be private key");
              if (!m(t)) throw new Error("second arg must be public key");
              return c.fromHex(t).multiply(l(e)).toRawBytes(r);
            },
            sign: function (e, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : I;
              const { seed: n, k2sig: s } = E(e, r, i),
                o = t;
              return Fo(o.hash.outputLen, o.nByteLength, o.hmac)(n, s);
            },
            verify: function (e, r, i) {
              var n;
              let s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : S;
              const l = e;
              (r = Uo("msgHash", r)), (i = Uo("publicKey", i));
              const { lowS: h, prehash: u, format: d } = s;
              if ((ka(s), "strict" in s))
                throw new Error("options.strict was renamed to lowS");
              if (void 0 !== d && "compact" !== d && "der" !== d)
                throw new Error("format must be compact or der");
              const p = "string" == typeof l || wo(l),
                f =
                  !p &&
                  !d &&
                  "object" == typeof l &&
                  null !== l &&
                  "bigint" == typeof l.r &&
                  "bigint" == typeof l.s;
              if (!p && !f)
                throw new Error(
                  "invalid signature, expected Uint8Array, hex string or Signature instance"
                );
              let y, m;
              try {
                if ((f && (y = new g(l.r, l.s)), p)) {
                  try {
                    "compact" !== d && (y = g.fromDER(l));
                  } catch (me) {
                    if (!(me instanceof La.Err)) throw me;
                  }
                  !y && "der" !== d && (y = g.fromCompact(l));
                }
                m = c.fromHex(i);
              } catch {
                return !1;
              }
              if (!y || (h && y.hasHighS())) return !1;
              u && (r = t.hash(r));
              const { r: w, s: b } = y,
                _ = v(r),
                E = a(b),
                I = o(_ * E),
                O = o(w * E),
                P =
                  null === (n = c.BASE.multiplyAndAddUnsafe(m, I, O)) ||
                  void 0 === n
                    ? void 0
                    : n.toAffine();
              return !!P && o(P.x) === w;
            },
            ProjectivePoint: c,
            Signature: g,
            utils: y,
          }
        );
      }
      function za(e) {
        return {
          hash: e,
          hmac: function (t) {
            for (
              var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              i[n - 1] = arguments[n];
            return ro(
              e,
              t,
              (function () {
                let e = 0;
                for (let r = 0; r < arguments.length; r++) {
                  const t =
                    r < 0 || arguments.length <= r ? void 0 : arguments[r];
                  wn(t), (e += t.length);
                }
                const t = new Uint8Array(e);
                for (let r = 0, i = 0; r < arguments.length; r++) {
                  const e =
                    r < 0 || arguments.length <= r ? void 0 : arguments[r];
                  t.set(e, i), (i += e.length);
                }
                return t;
              })(...i)
            );
          },
          randomBytes: jn,
        };
      }
      BigInt(4);
      const Ha = ua(
          BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          )
        ),
        Va = (function (e, t) {
          const r = (t) => $a({ ...e, ...za(t) });
          return { ...r(t), create: r };
        })(
          {
            a: Ha.create(BigInt("-3")),
            b: BigInt(
              "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
            ),
            Fp: Ha,
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
            h: BigInt(1),
            lowS: !1,
          },
          fo
        ),
        Ka = "base10",
        Fa = "base16",
        Za = "base64pad",
        Wa = "base64url",
        Ja = "utf8";
      function Ga() {
        return ji(jn(32), Fa);
      }
      function Ya(e) {
        return ji(fo(Ci(e, Fa)), Fa);
      }
      function Qa(e) {
        return ji(fo(Ci(e, Ja)), Fa);
      }
      function Xa(e) {
        return Ci(`${e}`, Ka);
      }
      function ec(e) {
        return Number(ji(e, Ka));
      }
      function tc(e) {
        return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function rc(e) {
        const t = e.replace(/-/g, "+").replace(/_/g, "/"),
          r = (4 - (t.length % 4)) % 4;
        return t + "=".repeat(r);
      }
      function ic(e) {
        if (2 === ec(e.type)) return ji(xi([e.type, e.sealed]), Za);
        if (1 === ec(e.type)) {
          if (typeof e.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
          return ji(xi([e.type, e.senderPublicKey, e.iv, e.sealed]), Za);
        }
        return ji(xi([e.type, e.iv, e.sealed]), Za);
      }
      function nc(e) {
        const t = Ci((e.encoding || Za) === Wa ? rc(e.encoded) : e.encoded, Za),
          r = t.slice(0, 1);
        if (1 === ec(r)) {
          const e = 33,
            i = e + 12,
            n = t.slice(1, e),
            s = t.slice(e, i);
          return { type: r, sealed: t.slice(i), iv: s, senderPublicKey: n };
        }
        if (2 === ec(r)) {
          return { type: r, sealed: t.slice(1), iv: jn(12) };
        }
        const i = t.slice(1, 13);
        return { type: r, sealed: t.slice(13), iv: i };
      }
      function sc(e) {
        const t = (null === e || void 0 === e ? void 0 : e.type) || 0;
        if (1 === t) {
          if (
            typeof (null === e || void 0 === e ? void 0 : e.senderPublicKey) >
            "u"
          )
            throw new Error("missing sender public key");
          if (
            typeof (null === e || void 0 === e ? void 0 : e.receiverPublicKey) >
            "u"
          )
            throw new Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey:
            null === e || void 0 === e ? void 0 : e.senderPublicKey,
          receiverPublicKey:
            null === e || void 0 === e ? void 0 : e.receiverPublicKey,
        };
      }
      function oc(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      function ac(e) {
        return 2 === e.type;
      }
      function cc(e, t) {
        const [r, i, n] = e.split("."),
          s = Ui.from(rc(n), "base64");
        if (64 !== s.length) throw new Error("Invalid signature length");
        const o = s.slice(0, 32),
          a = s.slice(32, 64),
          c = fo(`${r}.${i}`),
          l = (function (e) {
            const t = Ui.from(e.x, "base64"),
              r = Ui.from(e.y, "base64");
            return xi([new Uint8Array([4]), t, r]);
          })(t);
        if (!Va.verify(xi([o, a]), c, l)) throw new Error("Invalid signature");
        return vi(e).payload;
      }
      function lc(e) {
        return (
          (null === e || void 0 === e ? void 0 : e.relay) || { protocol: "irn" }
        );
      }
      function hc(e) {
        const t = Di[e];
        if (typeof t > "u")
          throw new Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function uc(e) {
        const t = {},
          r =
            "relay" +
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "-");
        return (
          Object.keys(e).forEach((i) => {
            if (i.startsWith(r)) {
              const n = i.replace(r, ""),
                s = e[i];
              t[n] = s;
            }
          }),
          t
        );
      }
      function dc(e) {
        if (!e.includes("wc:")) {
          const t = yn(e);
          null != t && t.includes("wc:") && (e = t);
        }
        const t = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          i = e.substring(0, t),
          n = e.substring(t + 1, r).split("@"),
          s = typeof r < "u" ? e.substring(r) : "",
          o = new URLSearchParams(s),
          a = {};
        o.forEach((e, t) => {
          a[t] = e;
        });
        const c = "string" == typeof a.methods ? a.methods.split(",") : void 0;
        return {
          protocol: i,
          topic: pc(n[0]),
          version: parseInt(n[1], 10),
          symKey: a.symKey,
          relay: uc(a),
          methods: c,
          expiryTimestamp: a.expiryTimestamp
            ? parseInt(a.expiryTimestamp, 10)
            : void 0,
        };
      }
      function pc(e) {
        return e.startsWith("//") ? e.substring(2) : e;
      }
      function fc(e) {
        const t = new URLSearchParams(),
          r = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "-";
            const r = {};
            return (
              Object.keys(e).forEach((i) => {
                const n = i,
                  s = "relay" + t + n;
                e[n] && (r[s] = e[n]);
              }),
              r
            );
          })(e.relay);
        Object.keys(r)
          .sort()
          .forEach((e) => {
            t.set(e, r[e]);
          }),
          t.set("symKey", e.symKey),
          e.expiryTimestamp &&
            t.set("expiryTimestamp", e.expiryTimestamp.toString()),
          e.methods && t.set("methods", e.methods.join(","));
        const i = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${i}`;
      }
      function gc(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function yc(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [r, i] = e.split(":");
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function mc(e) {
        return e.includes(":");
      }
      function wc(e) {
        return mc(e) ? e.split(":")[0] : e;
      }
      function vc(e, t) {
        t = t.map((e) => e.replace("did:pkh:", ""));
        const r = (function (e) {
          const t = {};
          return (
            null !== e &&
              void 0 !== e &&
              e.forEach((e) => {
                var r;
                const [i, n] = e.split(":");
                t[i] ||
                  (t[i] = {
                    accounts: [],
                    chains: [],
                    events: [],
                    methods: [],
                  }),
                  t[i].accounts.push(e),
                  null == (r = t[i].chains) || r.push(`${i}:${n}`);
              }),
            t
          );
        })(t);
        for (const [i, n] of Object.entries(r))
          n.methods ? (n.methods = un(n.methods, e)) : (n.methods = e),
            (n.events = ["chainChanged", "accountsChanged"]);
        return r;
      }
      const bc = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        _c = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function Ec(e, t) {
        const { message: r, code: i } = _c[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function Ic(e, t) {
        const { message: r, code: i } = bc[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function Sc(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function Oc(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function Pc(e) {
        return typeof e > "u";
      }
      function xc(e, t) {
        return !(!t || !Pc(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function Tc(e, t) {
        return !(!t || !Pc(e)) || ("number" == typeof e && !isNaN(e));
      }
      function Ac(e) {
        return !(!xc(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
      }
      function Nc(e) {
        let t = !0;
        return (
          Sc(e) ? e.length && (t = e.every((e) => xc(e, !1))) : (t = !1), t
        );
      }
      function Rc(e, t, r) {
        let i = null;
        return (
          Object.entries(e).forEach((e) => {
            let [n, s] = e;
            if (i) return;
            const o = (function (e, t, r) {
              let i = null;
              return (
                Sc(t) && t.length
                  ? t.forEach((e) => {
                      i ||
                        Ac(e) ||
                        (i = Ic(
                          "UNSUPPORTED_CHAINS",
                          `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`
                        ));
                    })
                  : Ac(e) ||
                    (i = Ic(
                      "UNSUPPORTED_CHAINS",
                      `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                    )),
                i
              );
            })(n, Bi(n, s), `${t} ${r}`);
            o && (i = o);
          }),
          i
        );
      }
      function kc(e, t) {
        let r = null;
        return (
          Sc(e)
            ? e.forEach((e) => {
                r ||
                  (function (e) {
                    if (xc(e, !1) && e.includes(":")) {
                      const t = e.split(":");
                      if (3 === t.length) {
                        const e = t[0] + ":" + t[1];
                        return !!t[2] && Ac(e);
                      }
                    }
                    return !1;
                  })(e) ||
                  (r = Ic(
                    "UNSUPPORTED_ACCOUNTS",
                    `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                  ));
              })
            : (r = Ic(
                "UNSUPPORTED_ACCOUNTS",
                `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
              )),
          r
        );
      }
      function Cc(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            if (r) return;
            const i = (function (e, t) {
              let r = null;
              return (
                Nc(null === e || void 0 === e ? void 0 : e.methods)
                  ? Nc(null === e || void 0 === e ? void 0 : e.events) ||
                    (r = Ic(
                      "UNSUPPORTED_EVENTS",
                      `${t}, events should be an array of strings or empty array for no events`
                    ))
                  : (r = Ic(
                      "UNSUPPORTED_METHODS",
                      `${t}, methods should be an array of strings or empty array for no methods`
                    )),
                r
              );
            })(e, `${t}, namespace`);
            i && (r = i);
          }),
          r
        );
      }
      function jc(e, t) {
        let r = null;
        if (e && Oc(e)) {
          const i = Cc(e, t);
          i && (r = i);
          const n = (function (e, t) {
            let r = null;
            return (
              Object.values(e).forEach((e) => {
                if (r) return;
                const i = kc(
                  null === e || void 0 === e ? void 0 : e.accounts,
                  `${t} namespace`
                );
                i && (r = i);
              }),
              r
            );
          })(e, t);
          n && (r = n);
        } else
          r = Ec(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return r;
      }
      function Dc(e) {
        return xc(e.protocol, !0);
      }
      function Lc(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function Uc(e, t) {
        return !(
          !Ac(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...yc(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function qc(e, t, r) {
        return (
          !!xc(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                yc(e.accounts).includes(t) && r.push(...e.methods);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function Mc(e, t, r) {
        return (
          !!xc(r, !1) &&
          (function (e, t) {
            const r = [];
            return (
              Object.values(e).forEach((e) => {
                yc(e.accounts).includes(t) && r.push(...e.events);
              }),
              r
            );
          })(e, t).includes(r)
        );
      }
      function Bc(e, t, r) {
        let i = null;
        const n = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          s = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  const i = yc(e[r].accounts);
                  null === i ||
                    void 0 === i ||
                    i.forEach((i) => {
                      t[i] = {
                        accounts: e[r].accounts.filter((e) =>
                          e.includes(`${i}:`)
                        ),
                        methods: e[r].methods,
                        events: e[r].events,
                      };
                    });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(n),
          a = Object.keys(s),
          c = $c(Object.keys(e)),
          l = $c(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (i = Ec(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${h.toString()}\n      Received: ${Object.keys(
                t
              ).toString()}`
            )),
          en(o, a) ||
            (i = Ec(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || i) return;
            const n = yc(t[e].accounts);
            n.includes(e) ||
              (i = Ec(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${n.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (en(n[e].methods, s[e].methods)
                ? en(n[e].events, s[e].events) ||
                  (i = Ec(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = Ec(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function $c(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function zc() {
        const e = Ji();
        return new Promise((t) => {
          switch (e) {
            case Hi:
              t(
                (function () {
                  var e;
                  return (
                    Wi() &&
                    (null === (e = navigator) || void 0 === e
                      ? void 0
                      : e.onLine)
                  );
                })()
              );
              break;
            case $i:
              t(
                (async function () {
                  if (Zi() && typeof r.g < "u" && null != r.g && r.g.NetInfo) {
                    const e = await (null == r.g
                      ? void 0
                      : r.g.NetInfo.fetch());
                    return null === e || void 0 === e ? void 0 : e.isConnected;
                  }
                  return !0;
                })()
              );
              break;
            default:
              t(!0);
          }
        });
      }
      function Hc(e) {
        switch (Ji()) {
          case Hi:
            !(function (e) {
              !Zi() &&
                Wi() &&
                (window.addEventListener("online", () => e(!0)),
                window.addEventListener("offline", () => e(!1)));
            })(e);
            break;
          case $i:
            !(function (e) {
              var t;
              Zi() &&
                typeof r.g < "u" &&
                null != r.g &&
                r.g.NetInfo &&
                (null === (t = r.g) ||
                  void 0 === t ||
                  t.NetInfo.addEventListener((t) =>
                    e(null === t || void 0 === t ? void 0 : t.isConnected)
                  ));
            })(e);
        }
      }
      const Vc = {};
      class Kc {
        static get(e) {
          return Vc[e];
        }
        static set(e, t) {
          Vc[e] = t;
        }
        static delete(e) {
          delete Vc[e];
        }
      }
      const Fc = "PARSE_ERROR",
        Zc = "INVALID_REQUEST",
        Wc = "METHOD_NOT_FOUND",
        Jc = "INVALID_PARAMS",
        Gc = "INTERNAL_ERROR",
        Yc = "SERVER_ERROR",
        Qc = [-32700, -32600, -32601, -32602, -32603],
        Xc = {
          [Fc]: { code: -32700, message: "Parse error" },
          [Zc]: { code: -32600, message: "Invalid Request" },
          [Wc]: { code: -32601, message: "Method not found" },
          [Jc]: { code: -32602, message: "Invalid params" },
          [Gc]: { code: -32603, message: "Internal error" },
          [Yc]: { code: -32e3, message: "Server error" },
        },
        el = Yc;
      function tl(e) {
        return Qc.includes(e);
      }
      function rl(e) {
        return Object.keys(Xc).includes(e) ? Xc[e] : Xc[el];
      }
      function il(e) {
        const t = Object.values(Xc).find((t) => t.code === e);
        return t || Xc[el];
      }
      function nl(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? new Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var sl = r(11775);
      function ol() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        return (
          Date.now() * Math.pow(10, e) +
          Math.floor(Math.random() * Math.pow(10, e))
        );
      }
      function al() {
        return BigInt(
          ol(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6)
        );
      }
      function cl(e, t, r) {
        return { id: r || ol(), jsonrpc: "2.0", method: e, params: t };
      }
      function ll(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function hl(e, t, r) {
        return { id: e, jsonrpc: "2.0", error: ul(t, r) };
      }
      function ul(e, t) {
        return "undefined" === typeof e
          ? rl(Gc)
          : ("string" === typeof e &&
              (e = Object.assign(Object.assign({}, rl(Yc)), { message: e })),
            "undefined" !== typeof t && (e.data = t),
            tl(e.code) && (e = il(e.code)),
            e);
      }
      class dl {}
      class pl extends dl {
        constructor() {
          super();
        }
      }
      class fl extends pl {
        constructor(e) {
          super();
        }
      }
      function gl(e, t) {
        const r = (function (e) {
          const t = e.match(new RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return "undefined" !== typeof r && new RegExp(t).test(r);
      }
      function yl(e) {
        return gl(e, "^https?:");
      }
      function ml(e) {
        return gl(e, "^wss?:");
      }
      function wl(e) {
        return (
          "object" === typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function vl(e) {
        return wl(e) && "method" in e;
      }
      function bl(e) {
        return wl(e) && (_l(e) || El(e));
      }
      function _l(e) {
        return "result" in e;
      }
      function El(e) {
        return "error" in e;
      }
      class Il extends fl {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            cl(e.method, e.params || [], e.id || al().toString()),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (a) {
                i(a);
              }
            this.events.on(`${e.id}`, (e) => {
              El(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (a) {
              i(a);
            }
          });
        }
        setConnection() {
          return arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.connection;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            bl(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              new Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const Sl = (e) => e.split("?")[0],
        Ol =
          typeof WebSocket < "u"
            ? WebSocket
            : typeof r.g < "u" && typeof r.g.WebSocket < "u"
            ? r.g.WebSocket
            : typeof window < "u" && typeof window.WebSocket < "u"
            ? window.WebSocket
            : typeof self < "u" && typeof self.WebSocket < "u"
            ? self.WebSocket
            : r(50567);
      class Pl {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new i.EventEmitter()),
            (this.registering = !1),
            !ml(e))
          )
            throw new Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return typeof this.socket < "u";
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            typeof this.socket > "u"
              ? t(new Error("Connection already closed"))
              : ((this.socket.onclose = (t) => {
                  this.onClose(t), e();
                }),
                this.socket.close());
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send((0, P.h)(e));
          } catch (eo) {
            this.onError(e.id, eo);
          }
        }
        register() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!ml(e))
            throw new Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            const e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        new Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, i) => {
              const n = (0, sl.isReactNative)()
                  ? void 0
                  : {
                      rejectUnauthorized:
                        ((o = e),
                        !new RegExp("wss?://localhost(:d{2,5})?").test(o)),
                    },
                s = new Ol(e, [], n);
              var o;
              typeof WebSocket < "u" ||
              (typeof r.g < "u" && typeof r.g.WebSocket < "u") ||
              (typeof window < "u" && typeof window.WebSocket < "u") ||
              (typeof self < "u" && typeof self.WebSocket < "u")
                ? (s.onerror = (e) => {
                    const t = e;
                    i(this.emitError(t.error));
                  })
                : s.on("error", (e) => {
                    i(this.emitError(e));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), t(s);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          const t = "string" == typeof e.data ? (0, P.j)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          const r = this.parseError(t),
            i = hl(e, r.message || r.toString());
          this.events.emit("payload", i);
        }
        parseError(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url;
          return nl(e, Sl(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          const t = this.parseError(
            new Error(
              (null === e || void 0 === e ? void 0 : e.message) ||
                `WebSocket connection failed for host: ${Sl(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
      var xl = r(31489),
        Tl = r.n(xl);
      const Al = "core",
        Nl = `wc@2:${Al}:`,
        Rl = "error",
        kl = { database: ":memory:" },
        Cl = "client_ed25519_seed",
        jl = s.ONE_DAY,
        Dl = s.SIX_HOURS,
        Ll = "wss://relay.walletconnect.org",
        Ul = "relayer_message",
        ql = "relayer_message_ack",
        Ml = "relayer_connect",
        Bl = "relayer_disconnect",
        $l = "relayer_error",
        zl = "relayer_connection_stalled",
        Hl = "relayer_publish",
        Vl = "payload",
        Kl = "connect",
        Fl = "disconnect",
        Zl = "error",
        Wl = "2.18.0",
        Jl = { link_mode: "link_mode", relay: "relay" },
        Gl = "WALLETCONNECT_LINK_MODE_APPS",
        Yl = "subscription_created",
        Ql = "subscription_deleted",
        Xl = "subscription_sync",
        eh = "subscription_resubscribed",
        th = 1e3 * s.FIVE_SECONDS,
        rh = {
          wc_pairingDelete: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: s.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: s.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        ih = "pairing_create",
        nh = "pairing_expire",
        sh = "pairing_delete",
        oh = "pairing_ping",
        ah = "history_created",
        ch = "history_updated",
        lh = "history_deleted",
        hh = "history_sync",
        uh = "expirer_created",
        dh = "expirer_deleted",
        ph = "expirer_expired",
        fh = "expirer_sync",
        gh = "https://verify.walletconnect.org",
        yh = gh,
        mh = `${yh}/v3`,
        wh = ["https://verify.walletconnect.com", gh],
        vh = "pairing_started",
        bh = "pairing_uri_validation_success",
        _h = "pairing_uri_not_expired",
        Eh = "store_new_pairing",
        Ih = "subscribing_pairing_topic",
        Sh = "subscribe_pairing_topic_success",
        Oh = "existing_pairing",
        Ph = "pairing_not_expired",
        xh = "emit_inactive_pairing",
        Th = "emit_session_proposal",
        Ah = "no_internet_connection",
        Nh = "malformed_pairing_uri",
        Rh = "active_pairing_already_exists",
        kh = "subscribe_pairing_topic_failure",
        Ch = "pairing_expired",
        jh = "proposal_listener_not_found",
        Dh = "session_approve_started",
        Lh = "session_namespaces_validation_success",
        Uh = "subscribing_session_topic",
        qh = "subscribe_session_topic_success",
        Mh = "publishing_session_approve",
        Bh = "session_approve_publish_success",
        $h = "store_session",
        zh = "publishing_session_settle",
        Hh = "session_settle_publish_success",
        Vh = "no_internet_connection",
        Kh = "proposal_expired",
        Fh = "subscribe_session_topic_failure",
        Zh = "session_approve_publish_failure",
        Wh = "session_settle_publish_failure",
        Jh = "session_approve_namespace_validation_failure",
        Gh = "proposal_not_found",
        Yh = "authenticated_session_approve_started",
        Qh = "create_authenticated_session_topic",
        Xh = "cacaos_verified",
        eu = "store_authenticated_session",
        tu = "subscribing_authenticated_session_topic",
        ru = "subscribe_authenticated_session_topic_success",
        iu = "publishing_authenticated_session_approve",
        nu = "no_internet_connection",
        su = "invalid_cacao",
        ou = "subscribe_authenticated_session_topic_failure",
        au = "authenticated_session_approve_publish_failure",
        cu = "authenticated_session_pending_request_not_found";
      var lu = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (
                var s = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var u = 0, d = s - 1;
                  (0 !== h || u < n) && -1 !== d;
                  d--, u++
                )
                  (h += (a * o[d]) >>> 0),
                    (o[d] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (n = u), t++;
              }
              if (" " !== e[t]) {
                for (var p = s - n; p !== s && 0 === o[p]; ) p++;
                for (var f = new Uint8Array(i + (s - p)), g = i; p !== s; )
                  f[g++] = o[p++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, i = 0, n = 0, s = t.length;
                n !== s && 0 === t[n];

              )
                n++, r++;
              for (
                var o = ((s - n) * h + 1) >>> 0, l = new Uint8Array(o);
                n !== s;

              ) {
                for (
                  var u = t[n], d = 0, p = o - 1;
                  (0 !== u || d < i) && -1 !== p;
                  p--, d++
                )
                  (u += (256 * l[p]) >>> 0),
                    (l[p] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw new Error("Non-zero carry");
                (i = d), n++;
              }
              for (var f = o - i; f !== o && 0 === l[f]; ) f++;
              for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var r = u(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        },
        hu = lu;
      const uu = (e) => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
          return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e))
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class du {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class pu {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return gu(this, e);
        }
      }
      class fu {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return gu(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const gu = (e, t) =>
        new fu({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class yu {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new du(e, t, r)),
            (this.decoder = new pu(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const mu = (e) => {
          let { name: t, prefix: r, encode: i, decode: n } = e;
          return new yu(t, r, i, n);
        },
        wu = (e) => {
          let { prefix: t, name: r, alphabet: i } = e;
          const { encode: n, decode: s } = hu(i, r);
          return mu({ prefix: t, name: r, encode: n, decode: (e) => uu(s(e)) });
        },
        vu = (e) => {
          let { name: t, prefix: r, bitsPerChar: i, alphabet: n } = e;
          return mu({
            prefix: r,
            name: t,
            encode: (e) =>
              ((e, t, r) => {
                const i = "=" === t[t.length - 1],
                  n = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], o += 8; o > r; )
                    (o -= r), (s += t[n & (a >> o)]);
                if ((o && (s += t[n & (a << (r - o))]), i))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, n, i),
            decode: (e) =>
              ((e, t, r, i) => {
                const n = {};
                for (let h = 0; h < t.length; ++h) n[t[h]] = h;
                let s = e.length;
                for (; "=" === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  l = 0;
                for (let h = 0; h < s; ++h) {
                  const t = n[e[h]];
                  if (void 0 === t) throw new SyntaxError(`Non-${i} character`);
                  (c = (c << r) | t),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(e, n, i, t),
          });
        },
        bu = mu({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var _u = Object.freeze({ __proto__: null, identity: bu });
      const Eu = vu({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var Iu = Object.freeze({ __proto__: null, base2: Eu });
      const Su = vu({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var Ou = Object.freeze({ __proto__: null, base8: Su });
      const Pu = wu({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var xu = Object.freeze({ __proto__: null, base10: Pu });
      const Tu = vu({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Au = vu({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var Nu = Object.freeze({ __proto__: null, base16: Tu, base16upper: Au });
      const Ru = vu({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        ku = vu({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Cu = vu({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        ju = vu({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Du = vu({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Lu = vu({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        Uu = vu({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        qu = vu({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        Mu = vu({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var Bu = Object.freeze({
        __proto__: null,
        base32: Ru,
        base32upper: ku,
        base32pad: Cu,
        base32padupper: ju,
        base32hex: Du,
        base32hexupper: Lu,
        base32hexpad: Uu,
        base32hexpadupper: qu,
        base32z: Mu,
      });
      const $u = wu({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        zu = wu({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var Hu = Object.freeze({ __proto__: null, base36: $u, base36upper: zu });
      const Vu = wu({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Ku = wu({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var Fu = Object.freeze({
        __proto__: null,
        base58btc: Vu,
        base58flickr: Ku,
      });
      const Zu = vu({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Wu = vu({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Ju = vu({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Gu = vu({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var Yu = Object.freeze({
        __proto__: null,
        base64: Zu,
        base64pad: Wu,
        base64url: Ju,
        base64urlpad: Gu,
      });
      const Qu = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        Xu = Qu.reduce((e, t, r) => ((e[r] = t), e), []),
        ed = Qu.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      const td = mu({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (e) {
          return e.reduce((e, t) => (e += Xu[t]), "");
        },
        decode: function (e) {
          const t = [];
          for (const r of e) {
            const e = ed[r.codePointAt(0)];
            if (void 0 === e)
              throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var rd = Object.freeze({ __proto__: null, base256emoji: td }),
        id = function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= od; )
            (r[i++] = (255 & t) | nd), (t /= 128);
          for (; t & sd; ) (r[i++] = (255 & t) | nd), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        nd = 128,
        sd = -128,
        od = Math.pow(2, 31);
      var ad = function e(t, r) {
          var i,
            n = 0,
            s = ((r = r || 0), 0),
            o = r,
            a = t.length;
          do {
            if (o >= a)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (i = t[o++]),
              (n += s < 28 ? (i & ld) << s : (i & ld) * Math.pow(2, s)),
              (s += 7);
          } while (i >= cd);
          return (e.bytes = o - r), n;
        },
        cd = 128,
        ld = 127;
      var hd = Math.pow(2, 7),
        ud = Math.pow(2, 14),
        dd = Math.pow(2, 21),
        pd = Math.pow(2, 28),
        fd = Math.pow(2, 35),
        gd = Math.pow(2, 42),
        yd = Math.pow(2, 49),
        md = Math.pow(2, 56),
        wd = Math.pow(2, 63),
        vd = {
          encode: id,
          decode: ad,
          encodingLength: function (e) {
            return e < hd
              ? 1
              : e < ud
              ? 2
              : e < dd
              ? 3
              : e < pd
              ? 4
              : e < fd
              ? 5
              : e < gd
              ? 6
              : e < yd
              ? 7
              : e < md
              ? 8
              : e < wd
              ? 9
              : 10;
          },
        },
        bd = vd;
      const _d = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return bd.encode(e, t, r), t;
        },
        Ed = (e) => bd.encodingLength(e),
        Id = (e, t) => {
          const r = t.byteLength,
            i = Ed(e),
            n = i + Ed(r),
            s = new Uint8Array(n + r);
          return _d(e, s, 0), _d(r, s, i), s.set(t, n), new Sd(e, r, t, s);
        };
      class Sd {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      const Od = (e) => {
        let { name: t, code: r, encode: i } = e;
        return new Pd(t, r, i);
      };
      class Pd {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? Id(this.code, t)
              : t.then((e) => Id(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const xd = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        Td = Od({ name: "sha2-256", code: 18, encode: xd("SHA-256") }),
        Ad = Od({ name: "sha2-512", code: 19, encode: xd("SHA-512") });
      Object.freeze({ __proto__: null, sha256: Td, sha512: Ad });
      const Nd = uu,
        Rd = {
          code: 0,
          name: "identity",
          encode: Nd,
          digest: (e) => Id(0, Nd(e)),
        };
      Object.freeze({ __proto__: null, identity: Rd });
      new TextEncoder(), new TextDecoder();
      const kd = {
        ..._u,
        ...Iu,
        ...Ou,
        ...xu,
        ...Nu,
        ...Bu,
        ...Hu,
        ...Fu,
        ...Yu,
        ...rd,
      };
      function Cd(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      const jd = Cd(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        Dd = Cd(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        Ld = {
          utf8: jd,
          "utf-8": jd,
          hex: kd.base16,
          latin1: Dd,
          ascii: Dd,
          binary: Dd,
          ...kd,
        };
      class Ud {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Nl),
            (this.init = async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > "u") {
                const { message: t } = Ec(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw new Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, D.U5)(t, this.name));
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, tn(e));
        }
        async getKeyChain() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? rn(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class qd {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.randomSessionIdentifier = Ga()),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              return mi(bi(await this.getClientSeed()).publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const e = (function () {
                const e = Ra.utils.randomPrivateKey(),
                  t = Ra.getPublicKey(e);
                return { privateKey: ji(e, Fa), publicKey: ji(t, Fa) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              const t = bi(await this.getClientSeed()),
                r = this.randomSessionIdentifier,
                i = jl;
              return await _i(r, e, i, t);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              const i = (function (e, t) {
                const r = Ra.getSharedSecret(Ci(e, Fa), Ci(t, Fa));
                return ji(so(fo, r, void 0, void 0, 32), Fa);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(i, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              const r = t || Ya(e);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              const i = sc(r),
                n = (0, P.h)(t);
              if (ac(i))
                return (function (e, t) {
                  const r = Xa(2),
                    i = jn(12),
                    n = ic({ type: r, sealed: Ci(e, Ja), iv: i });
                  return t === Wa ? tc(n) : n;
                })(n, null === r || void 0 === r ? void 0 : r.encoding);
              if (oc(i)) {
                const t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const s = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (function (e) {
                const t = Xa(typeof e.type < "u" ? e.type : 0);
                if (1 === ec(t) && typeof e.senderPublicKey > "u")
                  throw new Error(
                    "Missing sender public key for type 1 envelope"
                  );
                const r =
                    typeof e.senderPublicKey < "u"
                      ? Ci(e.senderPublicKey, Fa)
                      : void 0,
                  i = typeof e.iv < "u" ? Ci(e.iv, Fa) : jn(12),
                  n = Ci(e.symKey, Fa),
                  s = ic({
                    type: t,
                    sealed: Xs(n, i).encrypt(Ci(e.message, Ja)),
                    iv: i,
                    senderPublicKey: r,
                  });
                return e.encoding === Wa ? tc(s) : s;
              })({
                type: o,
                symKey: s,
                message: n,
                senderPublicKey: a,
                encoding: null === r || void 0 === r ? void 0 : r.encoding,
              });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              const i = (function (e, t) {
                const r = nc({
                  encoded: e,
                  encoding: null === t || void 0 === t ? void 0 : t.encoding,
                });
                return sc({
                  type: ec(r.type),
                  senderPublicKey:
                    typeof r.senderPublicKey < "u"
                      ? ji(r.senderPublicKey, Fa)
                      : void 0,
                  receiverPublicKey:
                    null === t || void 0 === t ? void 0 : t.receiverPublicKey,
                });
              })(t, r);
              if (ac(i)) {
                const e = (function (e, t) {
                  const { sealed: r } = nc({ encoded: e, encoding: t });
                  return ji(r, Ja);
                })(t, null === r || void 0 === r ? void 0 : r.encoding);
                return (0, P.j)(e);
              }
              if (oc(i)) {
                const t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                const i = (function (e) {
                  const t = Ci(e.symKey, Fa),
                    { sealed: r, iv: i } = nc({
                      encoded: e.encoded,
                      encoding: e.encoding,
                    }),
                    n = Xs(t, i).decrypt(r);
                  if (null === n) throw new Error("Failed to decrypt");
                  return ji(n, Ja);
                })({
                  symKey: this.getSymKey(e),
                  encoded: t,
                  encoding: null === r || void 0 === r ? void 0 : r.encoding,
                });
                return (0, P.j)(i);
              } catch (N) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(N);
              }
            }),
            (this.getPayloadType = function (e) {
              return ec(
                nc({
                  encoded: e,
                  encoding:
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Za,
                }).type
              );
            }),
            (this.getPayloadSenderPublicKey = function (e) {
              const t = nc({
                encoded: e,
                encoding:
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Za,
              });
              return t.senderPublicKey ? ji(t.senderPublicKey, Fa) : void 0;
            }),
            (this.core = e),
            (this.logger = (0, D.U5)(t, this.name)),
            (this.keychain = r || new Ud(this.core, this.logger));
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(Cl);
          } catch {
            (e = Ga()), await this.keychain.set(Cl, e);
          }
          return (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8";
            const r = Ld[t];
            if (!r) throw new Error(`Unsupported encoding "${t}"`);
            return ("utf8" !== t && "utf-8" !== t) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode(`${r.prefix}${e}`)
              : globalThis.Buffer.from(e, "utf8");
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Md extends q {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Nl),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < "u" && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (c) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(c);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              const r = Qa(t);
              let i = this.messages.get(e);
              return (
                typeof i > "u" && (i = {}),
                typeof i[r] < "u" ||
                  ((i[r] = t), this.messages.set(e, i), await this.persist()),
                r
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => {
              this.isInitialized();
              return typeof this.get(e)[Qa(t)] < "u";
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, D.U5)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, tn(e));
        }
        async getRelayerMessages() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? rn(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      var Bd = Object.defineProperty,
        $d = Object.defineProperties,
        zd = Object.getOwnPropertyDescriptors,
        Hd = Object.getOwnPropertySymbols,
        Vd = Object.prototype.hasOwnProperty,
        Kd = Object.prototype.propertyIsEnumerable,
        Fd = (e, t, r) =>
          t in e
            ? Bd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Zd = (e, t) => {
          for (var r in t || (t = {})) Vd.call(t, r) && Fd(e, r, t[r]);
          if (Hd) for (var r of Hd(t)) Kd.call(t, r) && Fd(e, r, t[r]);
          return e;
        },
        Wd = (e, t) => $d(e, zd(t));
      class Jd extends M {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new i.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, s.toMiliseconds)(s.ONE_MINUTE)),
            (this.initialPublishTimeout = (0, s.toMiliseconds)(
              15 * s.ONE_SECOND
            )),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              var i;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              const n = (null === r || void 0 === r ? void 0 : r.ttl) || Dl,
                s = lc(r),
                o = (null === r || void 0 === r ? void 0 : r.prompt) || !1,
                a = (null === r || void 0 === r ? void 0 : r.tag) || 0,
                c =
                  (null === r || void 0 === r ? void 0 : r.id) ||
                  al().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: n,
                    relay: s,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation:
                      null === r || void 0 === r ? void 0 : r.attestation,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                const i = new Promise(async (i) => {
                  const s = (e) => {
                    let { id: t } = e;
                    l.opts.id === t &&
                      (this.removeRequestFromQueue(t),
                      this.relayer.events.removeListener(Hl, s),
                      i(l));
                  };
                  this.relayer.events.on(Hl, s);
                  const h = sn(
                    new Promise((i, s) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: n,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation:
                          null === r || void 0 === r ? void 0 : r.attestation,
                      })
                        .then(i)
                        .catch((e) => {
                          this.logger.warn(
                            e,
                            null === e || void 0 === e ? void 0 : e.message
                          ),
                            s(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await h, this.events.removeListener(Hl, s);
                  } catch (u) {
                    this.queue.set(c, Wd(Zd({}, l), { attempt: 1 })),
                      this.logger.warn(
                        u,
                        null === u || void 0 === u ? void 0 : u.message
                      );
                  }
                });
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { id: c, topic: e, message: t, opts: r },
                }),
                  await sn(i, this.publishTimeout, h);
              } catch (A) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(A),
                  null !=
                    (i = null === r || void 0 === r ? void 0 : r.internal) &&
                    i.throwOnFailedPublish)
                )
                  throw A;
              } finally {
                this.queue.delete(c);
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, D.U5)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        async rpcPublish(e) {
          var t, r, i, n;
          const {
              topic: s,
              message: o,
              ttl: a = Dl,
              prompt: c,
              tag: l,
              id: h,
              attestation: u,
            } = e,
            d = {
              method: hc(lc().protocol).publish,
              params: {
                topic: s,
                message: o,
                ttl: a,
                prompt: c,
                tag: l,
                attestation: u,
              },
              id: h,
            };
          Pc(null == (t = d.params) ? void 0 : t.prompt) &&
            (null == (r = d.params) || delete r.prompt),
            Pc(null == (i = d.params) ? void 0 : i.tag) &&
              (null == (n = d.params) || delete n.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: d,
            });
          const p = await this.relayer.request(d);
          return (
            this.relayer.events.emit(Hl, e),
            this.logger.debug("Successfully Published Payload"),
            p
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            const r = e.attempt + 1;
            this.queue.set(t, Wd(Zd({}, e), { attempt: r }));
            const { topic: i, message: n, opts: s, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish({
                topic: i,
                message: n,
                ttl: s.ttl,
                prompt: s.prompt,
                tag: s.tag,
                id: s.id,
                attestation: o,
              }),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(l, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(zl)
              );
            this.checkQueue();
          }),
            this.relayer.on(ql, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class Gd {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const i = r.filter((e) => e !== t);
              i.length ? this.map.set(e, i) : this.map.delete(e);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var Yd = Object.defineProperty,
        Qd = Object.defineProperties,
        Xd = Object.getOwnPropertyDescriptors,
        ep = Object.getOwnPropertySymbols,
        tp = Object.prototype.hasOwnProperty,
        rp = Object.prototype.propertyIsEnumerable,
        ip = (e, t, r) =>
          t in e
            ? Yd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        np = (e, t) => {
          for (var r in t || (t = {})) tp.call(t, r) && ip(e, r, t[r]);
          if (ep) for (var r of ep(t)) rp.call(t, r) && ip(e, r, t[r]);
          return e;
        },
        sp = (e, t) => Qd(e, Xd(t));
      class op extends z {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new Gd()),
            (this.events = new i.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = Nl),
            (this.subscribeTimeout = (0, s.toMiliseconds)(s.ONE_MINUTE)),
            (this.initialSubscribeTimeout = (0, s.toMiliseconds)(
              15 * s.ONE_SECOND
            )),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()),
                await this.restore()),
                (this.initialized = !0);
            }),
            (this.subscribe = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                const r = lc(t),
                  i = {
                    topic: e,
                    relay: r,
                    transportType:
                      null === t || void 0 === t ? void 0 : t.transportType,
                  };
                this.pending.set(e, i);
                const n = await this.rpcSubscribe(e, r, t);
                return (
                  "string" == typeof n &&
                    (this.onSubscribe(n, i),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: e, opts: t },
                    })),
                  n
                );
              } catch (r) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(r),
                  r)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof (null === t || void 0 === t ? void 0 : t.id) < "u"
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) => {
              if (this.topics.includes(e)) return !0;
              const t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((r, i) => {
                const n = new s.Watch();
                n.start(t);
                const o = setInterval(() => {
                  ((!this.pending.has(e) && this.topics.includes(e)) ||
                    this.cached.some((t) => t.topic === e)) &&
                    (clearInterval(o), n.stop(t), r(!0)),
                    n.elapsed(t) >= th &&
                      (clearInterval(o),
                      n.stop(t),
                      i(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.start = async () => {
              await this.onConnect();
            }),
            (this.stop = async () => {
              await this.onDisconnect();
            }),
            (this.restart = async () => {
              await this.restore(), await this.onRestart();
            }),
            (this.checkPending = async () => {
              if (
                0 === this.pending.size &&
                (!this.initialized || !this.relayer.connected)
              )
                return;
              const e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            (this.registerEventListeners = () => {
              this.relayer.core.heartbeat.on(l, async () => {
                await this.checkPending();
              }),
                this.events.on(Yl, async (e) => {
                  const t = Yl;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(Ql, async (e) => {
                  const t = Ql;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = (0, D.U5)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          const r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t))
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            const i = lc(r);
            await this.rpcUnsubscribe(e, t, i);
            const n = Ic("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (i) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(i),
              i)
            );
          }
        }
        async rpcSubscribe(e, t, r) {
          var i;
          (null === r || void 0 === r ? void 0 : r.transportType) ===
            Jl.relay && (await this.restartToComplete());
          const n = { method: hc(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: n,
            });
          const o =
            null == (i = null === r || void 0 === r ? void 0 : r.internal)
              ? void 0
              : i.throwOnFailedPublish;
          try {
            const t = this.getSubscriptionId(e);
            if (
              (null === r || void 0 === r ? void 0 : r.transportType) ===
              Jl.link_mode
            )
              return (
                setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(n).catch((e) => this.logger.warn(e));
                }, (0, s.toMiliseconds)(s.ONE_SECOND)),
                t
              );
            const i = new Promise(async (t) => {
                const r = (i) => {
                  i.topic === e && (this.events.removeListener(Yl, r), t(i.id));
                };
                this.events.on(Yl, r);
                try {
                  const i = await sn(
                    new Promise((e, t) => {
                      this.relayer
                        .request(n)
                        .catch((e) => {
                          this.logger.warn(
                            e,
                            null === e || void 0 === e ? void 0 : e.message
                          ),
                            t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(Yl, r), t(i);
                } catch {}
              }),
              a = await sn(
                i,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!a && o)
              throw new Error(`Subscribing to ${e} failed, please try again`);
            return a ? t : null;
          } catch (q) {
            if (
              (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(zl),
              o)
            )
              throw q;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          const t = {
            method: hc(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            await await sn(
              new Promise((e) => {
                this.relayer
                  .request(t)
                  .catch((e) => this.logger.warn(e))
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchSubscribe failed, please try again"
            );
          } catch {
            this.relayer.events.emit(zl);
          }
        }
        async rpcBatchFetchMessages(e) {
          if (!e.length) return;
          const t = {
            method: hc(e[0].relay.protocol).batchFetchMessages,
            params: { topics: e.map((e) => e.topic) },
          };
          let r;
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            r = await await sn(
              new Promise((e, r) => {
                this.relayer
                  .request(t)
                  .catch((e) => {
                    this.logger.warn(e), r(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchFetchMessages failed, please try again"
            );
          } catch {
            this.relayer.events.emit(zl);
          }
          return r;
        }
        rpcUnsubscribe(e, t, r) {
          const i = {
            method: hc(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, sp(np({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, np({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, np({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(Yl, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          const t = this.subscriptions.get(e);
          if (!t) {
            const { message: t } = Ec("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          const r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(Ql, sp(np({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(Xl);
        }
        async onRestart() {
          if (this.cached.length) {
            const e = [...this.cached],
              t = Math.ceil(
                this.cached.length / this.batchSubscribeTopicsLimit
              );
            for (let r = 0; r < t; r++) {
              const t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(eh);
        }
        async restore() {
          try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              const { message: e } = Ec("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                new Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              e.map((e) =>
                sp(np({}, e), { id: this.getSubscriptionId(e.topic) })
              )
            ));
        }
        async batchFetchMessages(e) {
          if (!e.length) return;
          this.logger.trace(
            `Fetching batch messages for ${e.length} subscriptions`
          );
          const t = await this.rpcBatchFetchMessages(e);
          t &&
            t.messages &&
            (await (function (e) {
              return new Promise((t) => setTimeout(t, e));
            })((0, s.toMiliseconds)(s.ONE_SECOND)),
            await this.relayer.handleBatchMessageEvents(t.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async restartToComplete() {
          !this.relayer.connected &&
            !this.relayer.connecting &&
            (await this.relayer.transportOpen());
        }
        getSubscriptionId(e) {
          return Qa(e + this.clientId);
        }
      }
      var ap = Object.defineProperty,
        cp = Object.getOwnPropertySymbols,
        lp = Object.prototype.hasOwnProperty,
        hp = Object.prototype.propertyIsEnumerable,
        up = (e, t, r) =>
          t in e
            ? ap(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dp = (e, t) => {
          for (var r in t || (t = {})) lp.call(t, r) && up(e, r, t[r]);
          if (cp) for (var r of cp(t)) hp.call(t, r) && up(e, r, t[r]);
          return e;
        };
      class pp extends B {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new i.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.heartBeatTimeout = (0, s.toMiliseconds)(
              s.THIRTY_SECONDS + s.FIVE_SECONDS
            )),
            (this.requestsInFlight = []),
            (this.connectTimeout = (0, s.toMiliseconds)(15 * s.ONE_SECOND)),
            (this.request = async (e) => {
              var t, r;
              this.logger.debug("Publishing Request Payload");
              const i = e.id || al().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  {
                    id: i,
                    method: e.method,
                    topic: null == (t = e.params) ? void 0 : t.topic,
                  },
                  "relayer.request - publishing..."
                );
                const n = `${i}:${
                  (null == (r = e.params) ? void 0 : r.tag) || ""
                }`;
                this.requestsInFlight.push(n);
                const s = await this.provider.request(e);
                return (
                  (this.requestsInFlight = this.requestsInFlight.filter(
                    (e) => e !== n
                  )),
                  s
                );
              } catch (a) {
                throw (this.logger.debug(`Failed to Publish Request: ${i}`), a);
              }
            }),
            (this.resetPingTimeout = () => {
              if (Fi())
                try {
                  clearTimeout(this.pingTimeout),
                    (this.pingTimeout = setTimeout(() => {
                      var e, t, r;
                      this.logger.debug(
                        {},
                        "pingTimeout: Connection stalled, terminating..."
                      ),
                        null ==
                          (r =
                            null ==
                            (t =
                              null == (e = this.provider)
                                ? void 0
                                : e.connection)
                              ? void 0
                              : t.socket) || r.terminate();
                    }, this.heartBeatTimeout));
                } catch (eo) {
                  this.logger.warn(
                    eo,
                    null === eo || void 0 === eo ? void 0 : eo.message
                  );
                }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            (this.onConnectHandler = () => {
              this.logger.warn({}, "Relayer connected \ud83d\udedc"),
                this.startPingTimeout(),
                this.events.emit(Ml);
            }),
            (this.onDisconnectHandler = () => {
              this.logger.warn({}, "Relayer disconnected \ud83d\uded1"),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.fatal(
                e,
                `Fatal socket error: ${
                  null === e || void 0 === e ? void 0 : e.message
                }`
              ),
                this.events.emit($l, e),
                this.logger.fatal(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(Vl, this.onPayloadHandler),
                this.provider.on(Kl, this.onConnectHandler),
                this.provider.on(Fl, this.onDisconnectHandler),
                this.provider.on(Zl, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < "u" && "string" != typeof e.logger
                ? (0, D.U5)(e.logger, this.name)
                : (0, D.h6)((0, D.iP)({ level: e.logger || "error" }))),
            (this.messages = new Md(this.logger, e.core)),
            (this.subscriber = new op(this, this.logger)),
            (this.publisher = new Jd(this, this.logger)),
            (this.relayUrl =
              (null === e || void 0 === e ? void 0 : e.relayUrl) || Ll),
            (this.projectId = e.projectId),
            Zi() &&
            typeof r.g < "u" &&
            typeof (null == r.g ? void 0 : r.g.Platform) < "u" &&
            "android" === (null == r.g ? void 0 : r.g.Platform.OS)
              ? (this.packageName = Gi())
              : Zi() &&
                typeof r.g < "u" &&
                typeof (null == r.g ? void 0 : r.g.Platform) < "u" &&
                "ios" === (null == r.g ? void 0 : r.g.Platform.OS) &&
                (this.bundleId = Gi()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.cached.length > 0)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(
                e,
                null === e || void 0 === e ? void 0 : e.message
              );
            }
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get connected() {
          var e, t, r;
          return (
            1 ===
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : r.readyState)
          );
        }
        get connecting() {
          var e, t, r;
          return (
            0 ===
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : r.readyState)
          );
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
              transportType: Jl.relay,
            });
        }
        async subscribe(e, t) {
          var r, i, n;
          this.isInitialized(),
            (null == t ||
              !t.transportType ||
              "relay" ===
                (null === t || void 0 === t ? void 0 : t.transportType)) &&
              (await this.toEstablishConnection());
          const s =
            typeof (null ==
            (r = null === t || void 0 === t ? void 0 : t.internal)
              ? void 0
              : r.throwOnFailedPublish) > "u" ||
            (null == (i = null === t || void 0 === t ? void 0 : t.internal)
              ? void 0
              : i.throwOnFailedPublish);
          let o,
            a =
              (null == (n = this.subscriber.topicMap.get(e)) ? void 0 : n[0]) ||
              "";
          const c = (t) => {
            t.topic === e && (this.subscriber.off(Yl, c), o());
          };
          return (
            await Promise.all([
              new Promise((e) => {
                (o = e), this.subscriber.on(Yl, c);
              }),
              new Promise(async (r, i) => {
                (a =
                  (await this.subscriber
                    .subscribe(
                      e,
                      dp({ internal: { throwOnFailedPublish: s } }, t)
                    )
                    .catch((e) => {
                      s && i(e);
                    })) || a),
                  r();
              }),
            ]),
            a
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          this.provider.disconnect &&
          (this.hasExperiencedNetworkDisruption || this.connected)
            ? await sn(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (
            (this.connectPromise
              ? (this.logger.debug(
                  {},
                  "Waiting for existing connection attempt to resolve..."
                ),
                await this.connectPromise,
                this.logger.debug({}, "Existing connection attempt resolved"))
              : ((this.connectPromise = new Promise(async (t, r) => {
                  await this.connect(e)
                    .then(t)
                    .catch(r)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw new Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, "Restarting transport..."),
            !this.connectionAttemptInProgress &&
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await zc()))
            throw new Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(e) {
          if (0 === (null === e || void 0 === e ? void 0 : e.length))
            return void this.logger.trace(
              "Batch message events is empty. Ignoring..."
            );
          const t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          this.logger.debug(`Batch of ${t.length} message events sorted`);
          for (const i of t)
            try {
              await this.onMessageEvent(i);
            } catch (r) {
              this.logger.warn(
                r,
                "Error while processing batch message event: " +
                  (null === r || void 0 === r ? void 0 : r.message)
              );
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          const { topic: r } = e;
          if (!t.sessionExists) {
            const e = {
              topic: r,
              expiry: cn(s.FIVE_MINUTES),
              relay: { protocol: "irn" },
              active: !1,
            };
            await this.core.pairing.pairings.set(r, e);
          }
          this.events.emit(Ul, e), await this.recordMessageEvent(e);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              this.logger.debug(
                {},
                `Connecting to ${this.relayUrl}, attempt: ${t}...`
              ),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  const r = () => {
                    t(
                      new Error(
                        "Connection interrupted while trying to subscribe"
                      )
                    );
                  };
                  this.provider.once(Fl, r),
                    await sn(
                      new Promise((e, t) => {
                        this.provider.connect().then(e).catch(t);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((e) => {
                        t(e);
                      })
                      .finally(() => {
                        this.provider.off(Fl, r),
                          clearTimeout(this.reconnectTimeout),
                          (this.reconnectTimeout = void 0);
                      }),
                    await new Promise(async (e, t) => {
                      const r = () => {
                        t(
                          new Error(
                            "Connection interrupted while trying to subscribe"
                          )
                        );
                      };
                      this.provider.once(Fl, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(Fl, r);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (c) {
              await this.subscriber.stop();
              const t = c;
              this.logger.warn({}, t.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug(
                {},
                `Connected to ${this.relayUrl} successfully on attempt: ${t}`
              );
              break;
            }
            await new Promise((e) =>
              setTimeout(e, (0, s.toMiliseconds)(1 * t))
            ),
              t++;
          }
        }
        startPingTimeout() {
          var e, t, r, i, n;
          if (Fi())
            try {
              null !=
                (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (n =
                    null ==
                    (i = null == (r = this.provider) ? void 0 : r.connection)
                      ? void 0
                      : i.socket) ||
                  n.on("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (a) {
              this.logger.warn(
                a,
                null === a || void 0 === a ? void 0 : a.message
              );
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          const e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new Il(
            new Pl(
              Xi({
                sdkVersion: Wl,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          const { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          const { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.warn(
                `Ignoring message for non-subscribed topic ${t}`
              ),
              !0
            );
          const i = this.messages.has(t, r);
          return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            vl(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            const t = e.params,
              { topic: r, message: i, publishedAt: n, attestation: s } = t.data,
              o = {
                topic: r,
                message: i,
                publishedAt: n,
                transportType: Jl.relay,
                attestation: s,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(dp({ type: "event", event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else bl(e) && this.events.emit(ql, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(Ul, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          const t = ll(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(Vl, this.onPayloadHandler),
            this.provider.off(Kl, this.onConnectHandler),
            this.provider.off(Fl, this.onDisconnectHandler),
            this.provider.off(Zl, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await zc();
          Hc(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.transportOpen().catch((e) =>
                    this.logger.error(
                      e,
                      null === e || void 0 === e ? void 0 : e.message
                    )
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          await this.subscriber.stop(),
            clearTimeout(this.pingTimeout),
            this.events.emit(Bl),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                this.connectPromise ||
                (this.reconnectTimeout = setTimeout(async () => {
                  clearTimeout(this.reconnectTimeout),
                    await this.transportOpen().catch((e) =>
                      this.logger.error(
                        e,
                        null === e || void 0 === e ? void 0 : e.message
                      )
                    );
                }, (0, s.toMiliseconds)(0.1))));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(),
            !this.connected && (await this.transportOpen());
        }
      }
      var fp = Object.defineProperty,
        gp = Object.getOwnPropertySymbols,
        yp = Object.prototype.hasOwnProperty,
        mp = Object.prototype.propertyIsEnumerable,
        wp = (e, t, r) =>
          t in e
            ? fp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        vp = (e, t) => {
          for (var r in t || (t = {})) yp.call(t, r) && wp(e, r, t[r]);
          if (gp) for (var r of gp(t)) mp.call(t, r) && wp(e, r, t[r]);
          return e;
        };
      class bp extends $ {
        constructor(e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Nl,
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : void 0;
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Nl),
            (this.recentlyDeleted = []),
            (this.recentlyDeletedLimit = 200),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !Pc(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                        var t;
                        return null ==
                          (t = null === e || void 0 === e ? void 0 : e.proposer)
                          ? void 0
                          : t.publicKey;
                      })(e)
                    ? this.map.set(e.id, e)
                    : (function (e) {
                        return null === e || void 0 === e ? void 0 : e.topic;
                      })(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((r) => Tl()(t[r], e[r]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              const r = vp(vp({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = (0, D.U5)(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = n);
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          const t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              const { message: t } = Ec(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), new Error(t));
            }
            const { message: t } = Ec("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              const { message: e } = Ec("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class _p {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (n())()),
            (this.initialized = !1),
            (this.storagePrefix = Nl),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = (e) => {
              let { methods: t } = e;
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...t]),
                ]);
            }),
            (this.create = async (e) => {
              this.isInitialized();
              const t = Ga(),
                r = await this.core.crypto.setSymKey(t),
                i = cn(s.FIVE_MINUTES),
                n = { protocol: "irn" },
                o = {
                  topic: r,
                  expiry: i,
                  relay: n,
                  active: !1,
                  methods: null === e || void 0 === e ? void 0 : e.methods,
                },
                a = fc({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: t,
                  relay: n,
                  expiryTimestamp: i,
                  methods: null === e || void 0 === e ? void 0 : e.methods,
                });
              return (
                this.events.emit(ih, o),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, o),
                await this.core.relayer.subscribe(r, {
                  transportType:
                    null === e || void 0 === e ? void 0 : e.transportType,
                }),
                { topic: r, uri: a }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized();
              const t = this.core.eventClient.createEvent({
                properties: {
                  topic: null === e || void 0 === e ? void 0 : e.uri,
                  trace: [vh],
                },
              });
              this.isValidPair(e, t);
              const {
                topic: r,
                symKey: i,
                relay: n,
                expiryTimestamp: o,
                methods: a,
              } = dc(e.uri);
              let c;
              if (
                ((t.props.properties.topic = r),
                t.addTrace(bh),
                t.addTrace(_h),
                this.pairings.keys.includes(r))
              ) {
                if (((c = this.pairings.get(r)), t.addTrace(Oh), c.active))
                  throw (
                    (t.setError(Rh),
                    new Error(
                      `Pairing already exists: ${r}. Please try again with a new connection URI.`
                    ))
                  );
                t.addTrace(Ph);
              }
              const l = o || cn(s.FIVE_MINUTES),
                h = { topic: r, relay: n, expiry: l, active: !1, methods: a };
              this.core.expirer.set(r, l),
                await this.pairings.set(r, h),
                t.addTrace(Eh),
                e.activatePairing && (await this.activate({ topic: r })),
                this.events.emit(ih, h),
                t.addTrace(xh),
                this.core.crypto.keychain.has(r) ||
                  (await this.core.crypto.setSymKey(i, r)),
                t.addTrace(Ih);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                t.setError(Ah);
              }
              try {
                await this.core.relayer.subscribe(r, { relay: n });
              } catch (u) {
                throw (t.setError(kh), u);
              }
              return t.addTrace(Sh), h;
            }),
            (this.activate = async (e) => {
              let { topic: t } = e;
              this.isInitialized();
              const r = cn(s.FIVE_MINUTES);
              this.core.expirer.set(t, r),
                await this.pairings.update(t, { active: !0, expiry: r });
            }),
            (this.ping = async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  "ping() is deprecated and will be removed in the next major release."
                );
              const { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: i, reject: n } = nn();
                this.events.once(hn("pairing_ping", e), (e) => {
                  let { error: t } = e;
                  t ? n(t) : i();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async (e) => {
              let { topic: t, expiry: r } = e;
              this.isInitialized(),
                await this.pairings.update(t, { expiry: r });
            }),
            (this.updateMetadata = async (e) => {
              let { topic: t, metadata: r } = e;
              this.isInitialized(),
                await this.pairings.update(t, { peerMetadata: r });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  Ic("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.formatUriFromPairing = (e) => {
              this.isInitialized();
              const { topic: t, relay: r, expiry: i, methods: n } = e,
                s = this.core.crypto.keychain.get(t);
              return fc({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: s,
                relay: r,
                expiryTimestamp: i,
                methods: n,
              });
            }),
            (this.sendRequest = async (e, t, r) => {
              const i = cl(t, r),
                n = await this.core.crypto.encode(e, i),
                s = rh[t].req;
              return (
                this.core.history.set(e, i),
                this.core.relayer.publish(e, n, s),
                i.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              const i = ll(e, r),
                n = await this.core.crypto.encode(t, i),
                s = await this.core.history.get(t, e),
                o = rh[s.request.method].res;
              await this.core.relayer.publish(t, n, o),
                await this.core.history.resolve(i);
            }),
            (this.sendError = async (e, t, r) => {
              const i = hl(e, r),
                n = await this.core.crypto.encode(t, i),
                s = await this.core.history.get(t, e),
                o = rh[s.request.method]
                  ? rh[s.request.method].res
                  : rh.unregistered_method.res;
              await this.core.relayer.publish(t, n, o),
                await this.core.history.resolve(i);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, Ic("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              const e = this.pairings.getAll().filter((e) => ln(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, r);
                default:
                  return this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(oh, { id: r, topic: e });
              } catch (a) {
                await this.sendError(r, e, a), this.logger.error(a);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                _l(t)
                  ? this.events.emit(hn("pairing_ping", r), {})
                  : El(t) &&
                    this.events.emit(hn("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(sh, { id: r, topic: e });
              } catch (a) {
                await this.sendError(r, e, a), this.logger.error(a);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              const { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                const t = Ic("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (q) {
                await this.sendError(r, e, q), this.logger.error(q);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(Ic("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e, t) => {
              var r;
              if (!Lc(e)) {
                const { message: r } = Ec(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (t.setError(Nh), new Error(r));
              }
              if (
                !(function (e) {
                  function t(e) {
                    try {
                      return typeof new URL(e) < "u";
                    } catch {
                      return !1;
                    }
                  }
                  try {
                    if (xc(e, !1)) return !!t(e) || t(yn(e));
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                const { message: r } = Ec(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (t.setError(Nh), new Error(r));
              }
              const i = dc(null === e || void 0 === e ? void 0 : e.uri);
              if (
                null == (r = null === i || void 0 === i ? void 0 : i.relay) ||
                !r.protocol
              ) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (t.setError(Nh), new Error(e));
              }
              if (null == i || !i.symKey) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (t.setError(Nh), new Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, s.toMiliseconds)(
                  null === i || void 0 === i ? void 0 : i.expiryTimestamp
                ) < Date.now()
              ) {
                t.setError(Ch);
                const { message: e } = Ec(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!xc(e, !1)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const { message: t } = Ec(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw new Error(t);
              }
              if (ln(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const { message: t } = Ec("EXPIRED", `pairing topic: ${e}`);
                throw new Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, D.U5)(t, this.name)),
            (this.pairings = new bp(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(Ul, async (e) => {
            const { topic: t, message: r, transportType: i } = e;
            if (
              !this.pairings.keys.includes(t) ||
              i === Jl.link_mode ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              return;
            const n = await this.core.crypto.decode(t, r);
            try {
              vl(n)
                ? (this.core.history.set(t, n),
                  this.onRelayEventRequest({ topic: t, payload: n }))
                : bl(n) &&
                  (await this.core.history.resolve(n),
                  await this.onRelayEventResponse({ topic: t, payload: n }),
                  this.core.history.delete(t, n.id));
            } catch (a) {
              this.logger.error(a);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(ph, async (e) => {
            const { topic: t } = an(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(nh, { topic: t }));
          });
        }
      }
      class Ep extends U {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new i.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Nl),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              const i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: cn(s.THIRTY_DAYS),
              };
              this.records.set(i.id, i),
                this.persist(),
                this.events.emit(ah, i);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = El(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(ch, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  if (r.topic === e) {
                    if (typeof t < "u" && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(lh, r);
                  }
                }),
                this.persist();
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, D.U5)(t, this.name));
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const e = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < "u") return;
              const r = {
                topic: t.topic,
                request: cl(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          const t = this.records.get(e);
          if (!t) {
            const { message: t } = Ec("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(hh);
        }
        async restore() {
          try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              const { message: e } = Ec("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(ah, (e) => {
            const t = ah;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e });
          }),
            this.events.on(ch, (e) => {
              const t = ch;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.events.on(lh, (e) => {
              const t = lh;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.core.heartbeat.on(l, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, s.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(lh, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Ip extends H {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new i.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Nl),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(uh, { target: r, expiration: i });
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(dh, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, D.U5)(t, this.name));
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e)
            return (function (e) {
              return on("topic", e);
            })(e);
          if ("number" == typeof e)
            return (function (e) {
              return on("id", e);
            })(e);
          const { message: t } = Ec("UNKNOWN_TYPE", "Target type: " + typeof e);
          throw new Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(fh);
        }
        async restore() {
          try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              const { message: e } = Ec("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          const t = this.expirations.get(e);
          if (!t) {
            const { message: t } = Ec("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.warn(t), new Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          const { expiry: r } = t;
          (0, s.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(ph, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(l, () => this.checkExpirations()),
            this.events.on(uh, (e) => {
              const t = uh;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(ph, (e) => {
              const t = ph;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(dh, (e) => {
              const t = dh;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Sp extends V {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            (this.name = "verify-api"),
            (this.verifyUrlV3 = mh),
            (this.storagePrefix = Nl),
            (this.version = 2),
            (this.init = async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, s.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            (this.register = async (e) => {
              if (!Wi() || this.isDevEnv) return;
              const t = window.location.origin,
                { id: r, decryptedId: i } = e,
                n = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                const e = (0, Ii.getDocument)(),
                  t = this.startAbortTimer(5 * s.ONE_SECOND),
                  i = await new Promise((i, s) => {
                    const o = () => {
                      window.removeEventListener("message", c),
                        e.body.removeChild(a),
                        s("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", o);
                    const a = e.createElement("iframe");
                    (a.src = n),
                      (a.style.display = "none"),
                      a.addEventListener("error", o, {
                        signal: this.abortController.signal,
                      });
                    const c = (n) => {
                      if (n.data && "string" == typeof n.data)
                        try {
                          const s = JSON.parse(n.data);
                          if ("verify_attestation" === s.type) {
                            if (vi(s.attestation).payload.id !== r) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener(
                                "abort",
                                o
                              ),
                              window.removeEventListener("message", c),
                              i(null === s.attestation ? "" : s.attestation);
                          }
                        } catch (s) {
                          this.logger.warn(s);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener("message", c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", i), i;
              } catch (j) {
                this.logger.warn(j);
              }
              return "";
            }),
            (this.resolve = async (e) => {
              if (this.isDevEnv) return "";
              const { attestationId: t, hash: r, encryptedId: i } = e;
              if ("" === t)
                return void this.logger.debug(
                  "resolve: attestationId is empty, skipping"
                );
              if (t) {
                if (vi(t).payload.id !== i) return;
                const e = await this.isValidJwtAttestation(t);
                if (e)
                  return e.isVerified
                    ? e
                    : void this.logger.warn(
                        "resolve: jwt attestation: origin url not verified"
                      );
              }
              if (!r) return;
              const n = this.getVerifyUrl(
                null === e || void 0 === e ? void 0 : e.verifyUrl
              );
              return this.fetchAttestation(r, n);
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              const r = this.startAbortTimer(5 * s.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(r), 200 === i.status ? await i.json() : void 0
              );
            }),
            (this.getVerifyUrl = (e) => {
              let t = e || yh;
              return (
                wh.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${yh}`
                  ),
                  (t = yh)),
                t
              );
            }),
            (this.fetchPublicKey = async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                const e = this.startAbortTimer(s.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.persistPublicKey = async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            (this.removePublicKey = async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            (this.isValidJwtAttestation = async (e) => {
              const t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (q) {
                this.logger.error(q),
                  this.logger.warn("error validating attestation");
              }
              const r = await this.fetchAndPersistPublicKey();
              try {
                if (r) return this.validateAttestation(e, r);
              } catch (q) {
                this.logger.error(q),
                  this.logger.warn("error validating attestation");
              }
            }),
            (this.getPublicKey = async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()),
            (this.fetchAndPersistPublicKey = async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                const t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              const e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            (this.validateAttestation = (e, t) => {
              const r = cc(e, t.publicKey),
                i = {
                  hasExpired: (0, s.toMiliseconds)(r.exp) < Date.now(),
                  payload: r,
                };
              if (i.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  new Error("JWT attestation expired"))
                );
              return {
                origin: i.payload.origin,
                isScam: i.payload.isScam,
                isVerified: i.payload.isVerified,
              };
            }),
            (this.logger = (0, D.U5)(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = gn()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, s.toMiliseconds)(e)
            )
          );
        }
      }
      class Op extends K {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.context = "echo"),
            (this.registerDeviceToken = async (e) => {
              const {
                  clientId: t,
                  token: r,
                  notificationType: i,
                  enableEncrypted: n = !1,
                } = e,
                s = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(s, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: i,
                  token: r,
                  always_raw: n,
                }),
              });
            }),
            (this.logger = (0, D.U5)(t, this.context));
        }
      }
      var Pp = Object.defineProperty,
        xp = Object.getOwnPropertySymbols,
        Tp = Object.prototype.hasOwnProperty,
        Ap = Object.prototype.propertyIsEnumerable,
        Np = (e, t, r) =>
          t in e
            ? Pp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Rp = (e, t) => {
          for (var r in t || (t = {})) Tp.call(t, r) && Np(e, r, t[r]);
          if (xp) for (var r of xp(t)) Ap.call(t, r) && Np(e, r, t[r]);
          return e;
        };
      class kp extends F {
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.context = "event-client"),
            (this.storagePrefix = Nl),
            (this.storageVersion = 0.1),
            (this.events = new Map()),
            (this.shouldPersist = !1),
            (this.init = async () => {
              if (!gn())
                try {
                  const e = {
                    eventId: fn(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: "INIT",
                      type: "",
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: Qi(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          Wl
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.createEvent = (e) => {
              const {
                  event: t = "ERROR",
                  type: r = "",
                  properties: { topic: i, trace: n },
                } = e,
                s = fn(),
                o = this.core.projectId || "",
                a = Date.now(),
                c = Rp(
                  {
                    eventId: s,
                    timestamp: a,
                    props: {
                      event: t,
                      type: r,
                      properties: { topic: i, trace: n },
                    },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(s)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(s, c), (this.shouldPersist = !0)),
                c
              );
            }),
            (this.getEvent = (e) => {
              const { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              const i = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === r
              );
              return i ? Rp(Rp({}, i), this.setMethods(i.eventId)) : void 0;
            }),
            (this.deleteEvent = (e) => {
              const { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            (this.setEventListeners = () => {
              this.core.heartbeat.on(l, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, s.fromMiliseconds)(Date.now()) -
                      (0, s.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            (this.setMethods = (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            (this.addTrace = (e, t) => {
              const r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            (this.setError = (e, t) => {
              const r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            (this.persist = async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            (this.restore = async () => {
              try {
                const e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    Rp(Rp({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.submit = async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              const e = [];
              for (const [r, i] of this.events) i.props.type && e.push(i);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (const t of e)
                      this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (t) {
                  this.logger.warn(t);
                }
            }),
            (this.sendEvent = async (e) => {
              const t = this.getAppDomain() ? "" : "&sp=desktop";
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Wl}${t}`,
                { method: "POST", body: JSON.stringify(e) }
              );
            }),
            (this.getAppDomain = () => Yi().url),
            (this.logger = (0, D.U5)(t, this.context)),
            (this.telemetryEnabled = r),
            r
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      }
      var Cp = Object.defineProperty,
        jp = Object.getOwnPropertySymbols,
        Dp = Object.prototype.hasOwnProperty,
        Lp = Object.prototype.propertyIsEnumerable,
        Up = (e, t, r) =>
          t in e
            ? Cp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        qp = (e, t) => {
          for (var r in t || (t = {})) Dp.call(t, r) && Up(e, r, t[r]);
          if (jp) for (var r of jp(t)) Lp.call(t, r) && Up(e, r, t[r]);
          return e;
        };
      class Mp extends L {
        constructor(e) {
          var t;
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = Al),
            (this.events = new i.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.dispatchEnvelope = (e) => {
              let { topic: t, message: r, sessionExists: i } = e;
              if (!t || !r) return;
              const n = {
                topic: t,
                message: r,
                publishedAt: Date.now(),
                transportType: Jl.link_mode,
              };
              this.relayer.onLinkMessageEvent(n, { sessionExists: i });
            }),
            (this.projectId =
              null === e || void 0 === e ? void 0 : e.projectId),
            (this.relayUrl =
              (null === e || void 0 === e ? void 0 : e.relayUrl) || Ll),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          const r = (0, D.iP)({
              level:
                "string" ==
                  typeof (null === e || void 0 === e ? void 0 : e.logger) &&
                e.logger
                  ? e.logger
                  : Rl,
              name: Al,
            }),
            { logger: n, chunkLoggerController: s } = (0, D.D5)({
              opts: r,
              maxSizeInBytes:
                null === e || void 0 === e ? void 0 : e.maxLogBlobSizeInBytes,
              loggerOverride: null === e || void 0 === e ? void 0 : e.logger,
            });
          (this.logChunkController = s),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = (0, D.U5)(n, this.name)),
            (this.heartbeat = new h()),
            (this.crypto = new qd(
              this,
              this.logger,
              null === e || void 0 === e ? void 0 : e.keychain
            )),
            (this.history = new Ep(this, this.logger)),
            (this.expirer = new Ip(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new j(
                    qp(
                      qp({}, kl),
                      null === e || void 0 === e ? void 0 : e.storageOptions
                    )
                  )),
            (this.relayer = new pp({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new _p(this, this.logger)),
            (this.verify = new Sp(this, this.logger, this.storage)),
            (this.echoClient = new Op(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new kp(
              this,
              this.logger,
              null === e || void 0 === e ? void 0 : e.telemetryEnabled
            ));
        }
        static async init(e) {
          const t = new Mp(e);
          await t.initialize();
          const r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(Gl, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(Gl)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      const Bp = Mp,
        $p = "client",
        zp = `wc@2:${$p}:`,
        Hp = $p,
        Vp = "error",
        Kp = "WALLETCONNECT_DEEPLINK_CHOICE",
        Fp = s.SEVEN_DAYS,
        Zp = {
          wc_sessionPropose: {
            req: { ttl: s.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: s.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: s.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: s.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: s.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: s.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: s.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: s.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        Wp = { min: s.FIVE_MINUTES, max: s.SEVEN_DAYS },
        Jp = "IDLE",
        Gp = "ACTIVE",
        Yp = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        Qp = "wc@1.5:auth:",
        Xp = `${Qp}:PUB_KEY`;
      var ef = Object.defineProperty,
        tf = Object.defineProperties,
        rf = Object.getOwnPropertyDescriptors,
        nf = Object.getOwnPropertySymbols,
        sf = Object.prototype.hasOwnProperty,
        of = Object.prototype.propertyIsEnumerable,
        af = (e, t, r) =>
          t in e
            ? ef(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        cf = (e, t) => {
          for (var r in t || (t = {})) sf.call(t, r) && af(e, r, t[r]);
          if (nf) for (var r of nf(t)) of.call(t, r) && af(e, r, t[r]);
          return e;
        },
        lf = (e, t) => tf(e, rf(t));
      class hf extends W {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.name = "engine"),
            (this.events = new (n())()),
            (this.initialized = !1),
            (this.requestQueue = { state: Jp, queue: [] }),
            (this.sessionRequestQueue = { state: Jp, queue: [] }),
            (this.requestQueueDelay = s.ONE_SECOND),
            (this.expectedPairingMethodMap = new Map()),
            (this.recentlyDeletedMap = new Map()),
            (this.recentlyDeletedLimit = 200),
            (this.relayMessageCache = []),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(Zp) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, s.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              const t = lf(cf({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              const {
                pairingTopic: r,
                requiredNamespaces: i,
                optionalNamespaces: n,
                sessionProperties: o,
                relays: a,
              } = t;
              let c,
                l = r,
                h = !1;
              try {
                if (l) {
                  const e = this.client.core.pairing.pairings.get(l);
                  this.client.logger.warn(
                    "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                  ),
                    (h = e.active);
                }
              } catch (v) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${l}) failed`
                  ),
                  v)
                );
              }
              if (!l || !h) {
                const { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (l = e), (c = t);
              }
              if (!l) {
                const { message: e } = Ec(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${l}`
                );
                throw new Error(e);
              }
              const u = await this.client.core.crypto.generateKeyPair(),
                d = Zp.wc_sessionPropose.req.ttl || s.FIVE_MINUTES,
                p = cn(d),
                f = cf(
                  {
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    relays:
                      null !== a && void 0 !== a ? a : [{ protocol: "irn" }],
                    proposer: { publicKey: u, metadata: this.client.metadata },
                    expiryTimestamp: p,
                    pairingTopic: l,
                  },
                  o && { sessionProperties: o }
                ),
                { reject: g, resolve: y, done: m } = nn(d, "Proposal expired");
              this.events.once(hn("session_connect"), async (e) => {
                let { error: t, session: r } = e;
                if (t) g(t);
                else if (r) {
                  r.self.publicKey = u;
                  const e = lf(cf({}, r), {
                    pairingTopic: f.pairingTopic,
                    requiredNamespaces: f.requiredNamespaces,
                    optionalNamespaces: f.optionalNamespaces,
                    transportType: Jl.relay,
                  });
                  await this.client.session.set(r.topic, e),
                    await this.setExpiry(r.topic, r.expiry),
                    l &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: l,
                        metadata: r.peer.metadata,
                      })),
                    this.cleanupDuplicatePairings(e),
                    y(e);
                }
              });
              const w = await this.sendRequest({
                topic: l,
                method: "wc_sessionPropose",
                params: f,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(w, cf({ id: w }, f)),
                { uri: c, approval: m }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (eo) {
                throw (this.client.logger.error("pair() failed"), eo);
              }
            }),
            (this.approve = async (e) => {
              var t, r, i;
              const n = this.client.core.eventClient.createEvent({
                properties: {
                  topic:
                    null == (t = null === e || void 0 === e ? void 0 : e.id)
                      ? void 0
                      : t.toString(),
                  trace: [Dh],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (E) {
                throw (n.setError(Vh), E);
              }
              try {
                await this.isValidProposalId(
                  null === e || void 0 === e ? void 0 : e.id
                );
              } catch (E) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${
                      null === e || void 0 === e ? void 0 : e.id
                    }) failed`
                  ),
                  n.setError(Gh),
                  E)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (E) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  n.setError(Jh),
                  E)
                );
              }
              const {
                  id: s,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  sessionConfig: l,
                } = e,
                h = this.client.proposal.get(s);
              this.client.core.eventClient.deleteEvent({ eventId: n.eventId });
              const {
                pairingTopic: u,
                proposer: d,
                requiredNamespaces: p,
                optionalNamespaces: f,
              } = h;
              let g =
                null == (r = this.client.core.eventClient)
                  ? void 0
                  : r.getEvent({ topic: u });
              g ||
                (g =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.createEvent({
                        type: Dh,
                        properties: { topic: u, trace: [Dh, Lh] },
                      }));
              const y = await this.client.core.crypto.generateKeyPair(),
                m = d.publicKey,
                w = await this.client.core.crypto.generateSharedKey(y, m),
                v = cf(
                  cf(
                    {
                      relay: {
                        protocol: null !== o && void 0 !== o ? o : "irn",
                      },
                      namespaces: a,
                      controller: {
                        publicKey: y,
                        metadata: this.client.metadata,
                      },
                      expiry: cn(Fp),
                    },
                    c && { sessionProperties: c }
                  ),
                  l && { sessionConfig: l }
                ),
                b = Jl.relay;
              g.addTrace(Uh);
              try {
                await this.client.core.relayer.subscribe(w, {
                  transportType: b,
                });
              } catch (E) {
                throw (g.setError(Fh), E);
              }
              g.addTrace(qh);
              const _ = lf(cf({}, v), {
                topic: w,
                requiredNamespaces: p,
                optionalNamespaces: f,
                pairingTopic: u,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: d.publicKey, metadata: d.metadata },
                controller: y,
                transportType: Jl.relay,
              });
              await this.client.session.set(w, _), g.addTrace($h);
              try {
                g.addTrace(zh),
                  await this.sendRequest({
                    topic: w,
                    method: "wc_sessionSettle",
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    var t;
                    throw (
                      (null !== (t = g) && void 0 !== t && t.setError(Wh), e)
                    );
                  }),
                  g.addTrace(Hh),
                  g.addTrace(Mh),
                  await this.sendResult({
                    id: s,
                    topic: u,
                    result: {
                      relay: {
                        protocol: null !== o && void 0 !== o ? o : "irn",
                      },
                      responderPublicKey: y,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    var t;
                    throw (
                      (null !== (t = g) && void 0 !== t && t.setError(Zh), e)
                    );
                  }),
                  g.addTrace(Bh);
              } catch (E) {
                throw (
                  (this.client.logger.error(E),
                  this.client.session.delete(w, Ic("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(w),
                  E)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: g.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: u,
                  metadata: d.metadata,
                }),
                await this.client.proposal.delete(s, Ic("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: u }),
                await this.setExpiry(w, cn(Fp)),
                {
                  topic: w,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(w)),
                }
              );
            }),
            (this.reject = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (n) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  n)
                );
              }
              const { id: t, reason: r } = e;
              let i;
              try {
                i = this.client.proposal.get(t).pairingTopic;
              } catch (n) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${t}) failed`
                  ),
                  n)
                );
              }
              i &&
                (await this.sendError({
                  id: t,
                  topic: i,
                  error: r,
                  rpcOpts: Zp.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(t, Ic("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch ($) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  $)
                );
              }
              const { topic: t, namespaces: r } = e,
                { done: i, resolve: n, reject: s } = nn(),
                o = ol(),
                a = al().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(hn("session_update", o), (e) => {
                  let { error: t } = e;
                  t ? s(t) : n();
                }),
                await this.client.session.update(t, { namespaces: r }),
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    s(e);
                }),
                { acknowledged: i }
              );
            }),
            (this.extend = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (q) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  q)
                );
              }
              const { topic: t } = e,
                r = ol(),
                { done: i, resolve: n, reject: s } = nn();
              return (
                this.events.once(hn("session_extend", r), (e) => {
                  let { error: t } = e;
                  t ? s(t) : n();
                }),
                await this.setExpiry(t, cn(Fp)),
                this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: r,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  s(e);
                }),
                { acknowledged: i }
              );
            }),
            (this.request = async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (d) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  d)
                );
              }
              const {
                  chainId: t,
                  request: r,
                  topic: i,
                  expiry: n = Zp.wc_sessionRequest.req.ttl,
                } = e,
                s = this.client.session.get(i);
              (null === s || void 0 === s ? void 0 : s.transportType) ===
                Jl.relay && (await this.confirmOnlineStateOrThrow());
              const o = ol(),
                a = al().toString(),
                {
                  done: c,
                  resolve: l,
                  reject: h,
                } = nn(n, "Request expired. Please try again.");
              this.events.once(hn("session_request", o), (e) => {
                let { error: t, result: r } = e;
                t ? h(t) : l(r);
              });
              const u = this.getAppLinkIfEnabled(
                s.peer.metadata,
                s.transportType
              );
              return u
                ? (await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: "wc_sessionRequest",
                    params: {
                      request: lf(cf({}, r), { expiryTimestamp: cn(n) }),
                      chainId: t,
                    },
                    expiry: n,
                    throwOnFailedPublish: !0,
                    appLink: u,
                  }).catch((e) => h(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o,
                  }),
                  await c())
                : await Promise.all([
                    new Promise(async (e) => {
                      await this.sendRequest({
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: "wc_sessionRequest",
                        params: {
                          request: lf(cf({}, r), { expiryTimestamp: cn(n) }),
                          chainId: t,
                        },
                        expiry: n,
                        throwOnFailedPublish: !0,
                      }).catch((e) => h(e)),
                        this.client.events.emit("session_request_sent", {
                          topic: i,
                          request: r,
                          chainId: t,
                          id: o,
                        }),
                        e();
                    }),
                    new Promise(async (e) => {
                      var t;
                      if (null == (t = s.sessionConfig) || !t.disableDeepLink) {
                        const e = await (async function (e, t) {
                          let r = "";
                          try {
                            if (Wi() && ((r = localStorage.getItem(t)), r))
                              return r;
                            r = await e.getItem(t);
                          } catch (n) {
                            console.error(n);
                          }
                          return r;
                        })(this.client.core.storage, Kp);
                        await dn({ id: o, topic: i, wcDeepLink: e });
                      }
                      e();
                    }),
                    c(),
                  ]).then((e) => e[2]);
            }),
            (this.respond = async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: r } = e,
                { id: i } = r,
                n = this.client.session.get(t);
              n.transportType === Jl.relay &&
                (await this.confirmOnlineStateOrThrow());
              const s = this.getAppLinkIfEnabled(
                n.peer.metadata,
                n.transportType
              );
              _l(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: s,
                  })
                : El(r) &&
                  (await this.sendError({
                    id: i,
                    topic: t,
                    error: r.error,
                    appLink: s,
                  })),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (c) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  c)
                );
              }
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = ol(),
                  r = al().toString(),
                  { done: i, resolve: n, reject: s } = nn();
                this.events.once(hn("session_ping", e), (e) => {
                  let { error: t } = e;
                  t ? s(t) : n();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: r,
                    }),
                    i(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    "ping() on pairing topic is deprecated and will be removed in the next major release."
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              const { topic: t, event: r, chainId: i } = e,
                n = al().toString(),
                s = ol();
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: n,
                clientRpcId: s,
              });
            }),
            (this.disconnect = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: Ic("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else {
                if (!this.client.core.pairing.pairings.keys.includes(t)) {
                  const { message: e } = Ec(
                    "MISMATCHED_TOPIC",
                    `Session or pairing topic not found: ${t}`
                  );
                  throw new Error(e);
                }
                await this.client.core.pairing.disconnect({ topic: t });
              }
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  const { requiredNamespaces: r } = t,
                    i = Object.keys(e.namespaces),
                    n = Object.keys(r);
                  let s = !0;
                  return (
                    !!en(n, i) &&
                    (i.forEach((t) => {
                      const {
                          accounts: i,
                          methods: n,
                          events: o,
                        } = e.namespaces[t],
                        a = yc(i),
                        c = r[t];
                      (!en(Bi(t, c), a) ||
                        !en(c.methods, n) ||
                        !en(c.events, o)) &&
                        (s = !1);
                    }),
                    s)
                  );
                })(t, e)
              )
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.authenticate = async (e, t) => {
              var r;
              this.isInitialized(), this.isValidAuthenticate(e);
              const i =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect)
                    ? void 0
                    : r.linkMode),
                n = i ? Jl.link_mode : Jl.relay;
              n === Jl.relay && (await this.confirmOnlineStateOrThrow());
              const {
                  chains: s,
                  statement: o = "",
                  uri: a,
                  domain: c,
                  nonce: l,
                  type: h,
                  exp: u,
                  nbf: d,
                  methods: p = [],
                  expiry: f,
                } = e,
                g = [...(e.resources || [])],
                { topic: y, uri: m } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: n,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: y, uri: m },
              });
              const w = await this.client.core.crypto.generateKeyPair(),
                v = Ya(w);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(Xp, {
                    responseTopic: v,
                    publicKey: w,
                  }),
                  this.client.auth.pairingTopics.set(v, {
                    topic: v,
                    pairingTopic: y,
                  }),
                ]),
                await this.client.core.relayer.subscribe(v, {
                  transportType: n,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${y}`
                ),
                p.length > 0)
              ) {
                const { namespace: e } = Mi(s[0]);
                let t = ws(e, "request", p);
                Ss(g) && (t = bs(t, g.pop())), g.push(t);
              }
              const b =
                  f && f > Zp.wc_sessionAuthenticate.req.ttl
                    ? f
                    : Zp.wc_sessionAuthenticate.req.ttl,
                _ = {
                  authPayload: {
                    type: null !== h && void 0 !== h ? h : "caip122",
                    chains: s,
                    statement: o,
                    aud: a,
                    domain: c,
                    version: "1",
                    nonce: l,
                    iat: new Date().toISOString(),
                    exp: u,
                    nbf: d,
                    resources: g,
                  },
                  requester: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: cn(b),
                },
                E = {
                  requiredNamespaces: {},
                  optionalNamespaces: {
                    eip155: {
                      chains: s,
                      methods: [...new Set(["personal_sign", ...p])],
                      events: ["chainChanged", "accountsChanged"],
                    },
                  },
                  relays: [{ protocol: "irn" }],
                  pairingTopic: y,
                  proposer: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: cn(Zp.wc_sessionPropose.req.ttl),
                },
                { done: I, resolve: S, reject: O } = nn(b, "Request expired"),
                P = async (e) => {
                  let { error: t, session: r } = e;
                  if ((this.events.off(hn("session_request", T), x), t)) O(t);
                  else if (r) {
                    (r.self.publicKey = w),
                      await this.client.session.set(r.topic, r),
                      await this.setExpiry(r.topic, r.expiry),
                      y &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: y,
                          metadata: r.peer.metadata,
                        }));
                    const e = this.client.session.get(r.topic);
                    await this.deleteProposal(A), S({ session: e });
                  }
                },
                x = async (e) => {
                  var r, i, s;
                  if (
                    (await this.deletePendingAuthRequest(T, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    const t = Ic(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(hn("session_connect"), P),
                        O(e.error.message));
                  }
                  await this.deleteProposal(A),
                    this.events.off(hn("session_connect"), P);
                  const { cacaos: o, responder: a } = e.result,
                    c = [],
                    l = [];
                  for (const t of o) {
                    (await ds({
                      cacao: t,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        t,
                        "Signature verification failed"
                      ),
                      O(
                        Ic(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    const { p: e } = t,
                      r = Ss(e.resources),
                      i = [hs(e.iss)],
                      n = us(e.iss);
                    if (r) {
                      const e = Es(r),
                        t = Is(r);
                      c.push(...e), i.push(...t);
                    }
                    for (const t of i) l.push(`${t}:${n}`);
                  }
                  const h = await this.client.core.crypto.generateSharedKey(
                    w,
                    a.publicKey
                  );
                  let u;
                  c.length > 0 &&
                    ((u = {
                      topic: h,
                      acknowledged: !0,
                      self: { publicKey: w, metadata: this.client.metadata },
                      peer: a,
                      controller: a.publicKey,
                      expiry: cn(Fp),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: y,
                      namespaces: vc([...new Set(c)], [...new Set(l)]),
                      transportType: n,
                    }),
                    await this.client.core.relayer.subscribe(h, {
                      transportType: n,
                    }),
                    await this.client.session.set(h, u),
                    y &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: y,
                        metadata: a.metadata,
                      })),
                    (u = this.client.session.get(h))),
                    null != (r = this.client.metadata.redirect) &&
                      r.linkMode &&
                      null != (i = a.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = a.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(
                        a.metadata.redirect.universal
                      ),
                      this.client.session.update(h, {
                        transportType: Jl.link_mode,
                      })),
                    S({ auths: o, session: u });
                },
                T = ol(),
                A = ol();
              let N;
              this.events.once(hn("session_connect"), P),
                this.events.once(hn("session_request", T), x);
              try {
                if (i) {
                  const e = cl("wc_sessionAuthenticate", _, T);
                  this.client.core.history.set(y, e);
                  const r = await this.client.core.crypto.encode("", e, {
                    type: 2,
                    encoding: Wa,
                  });
                  N = gc(t, y, r);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: y,
                      method: "wc_sessionAuthenticate",
                      params: _,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: T,
                    }),
                    this.sendRequest({
                      topic: y,
                      method: "wc_sessionPropose",
                      params: E,
                      expiry: Zp.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: A,
                    }),
                  ]);
              } catch (R) {
                throw (
                  (this.events.off(hn("session_connect"), P),
                  this.events.off(hn("session_request", T), x),
                  R)
                );
              }
              return (
                await this.setProposal(A, cf({ id: A }, E)),
                await this.setAuthRequest(T, {
                  request: lf(cf({}, _), { verifyContext: {} }),
                  pairingTopic: y,
                  transportType: n,
                }),
                { uri: null !== N && void 0 !== N ? N : m, response: I }
              );
            }),
            (this.approveSessionAuthenticate = async (e) => {
              const { id: t, auths: r } = e,
                i = this.client.core.eventClient.createEvent({
                  properties: { topic: t.toString(), trace: [Yh] },
                });
              try {
                this.isInitialized();
              } catch (f) {
                throw (i.setError(nu), f);
              }
              const n = this.getPendingAuthRequest(t);
              if (!n)
                throw (
                  (i.setError(cu),
                  new Error(`Could not find pending auth request with id ${t}`))
                );
              const s = n.transportType || Jl.relay;
              s === Jl.relay && (await this.confirmOnlineStateOrThrow());
              const o = n.requester.publicKey,
                a = await this.client.core.crypto.generateKeyPair(),
                c = Ya(o),
                l = { type: 1, receiverPublicKey: o, senderPublicKey: a },
                h = [],
                u = [];
              for (const g of r) {
                if (
                  !(await ds({
                    cacao: g,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  i.setError(su);
                  const e = Ic(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: t,
                      topic: c,
                      error: e,
                      encodeOpts: l,
                    }),
                    new Error(e.message))
                  );
                }
                i.addTrace(Xh);
                const { p: e } = g,
                  r = Ss(e.resources),
                  n = [hs(e.iss)],
                  s = us(e.iss);
                if (r) {
                  const e = Es(r),
                    t = Is(r);
                  h.push(...e), n.push(...t);
                }
                for (const t of n) u.push(`${t}:${s}`);
              }
              const d = await this.client.core.crypto.generateSharedKey(a, o);
              let p;
              if (
                (i.addTrace(Qh),
                (null === h || void 0 === h ? void 0 : h.length) > 0)
              ) {
                (p = {
                  topic: d,
                  acknowledged: !0,
                  self: { publicKey: a, metadata: this.client.metadata },
                  peer: { publicKey: o, metadata: n.requester.metadata },
                  controller: o,
                  expiry: cn(Fp),
                  authentication: r,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: n.pairingTopic,
                  namespaces: vc([...new Set(h)], [...new Set(u)]),
                  transportType: s,
                }),
                  i.addTrace(tu);
                try {
                  await this.client.core.relayer.subscribe(d, {
                    transportType: s,
                  });
                } catch (f) {
                  throw (i.setError(ou), f);
                }
                i.addTrace(ru),
                  await this.client.session.set(d, p),
                  i.addTrace(eu),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              i.addTrace(iu);
              try {
                await this.sendResult({
                  topic: c,
                  id: t,
                  result: {
                    cacaos: r,
                    responder: { publicKey: a, metadata: this.client.metadata },
                  },
                  encodeOpts: l,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, s),
                });
              } catch (f) {
                throw (i.setError(au), f);
              }
              return (
                await this.client.auth.requests.delete(t, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: n.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: i.eventId,
                }),
                { session: p }
              );
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              this.isInitialized();
              const { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i)
                throw new Error(
                  `Could not find pending auth request with id ${t}`
                );
              i.transportType === Jl.relay &&
                (await this.confirmOnlineStateOrThrow());
              const n = i.requester.publicKey,
                s = await this.client.core.crypto.generateKeyPair(),
                o = Ya(n),
                a = { type: 1, receiverPublicKey: n, senderPublicKey: s };
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: a,
                rpcOpts: Zp.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  i.requester.metadata,
                  i.transportType
                ),
              }),
                await this.client.auth.requests.delete(t, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(t, Ic("USER_DISCONNECTED"));
            }),
            (this.formatAuthMessage = (e) => {
              this.isInitialized();
              const { request: t, iss: r } = e;
              return ps(t, r);
            }),
            (this.processRelayMessageCache = () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      const e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  const t = this.client.core.pairing.pairings.get(
                      e.pairingTopic
                    ),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var i, n;
                        return (
                          (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                          (null == (n = r.peerMetadata) ? void 0 : n.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (eo) {
                  this.client.logger.error(eo);
                }
            }),
            (this.deleteSession = async (e) => {
              var t;
              const {
                  topic: r,
                  expirerHasDeleted: i = !1,
                  emitEvent: n = !0,
                  id: s = 0,
                } = e,
                { self: o } = this.client.session.get(r);
              await this.client.core.relayer.unsubscribe(r),
                await this.client.session.delete(r, Ic("USER_DISCONNECTED")),
                this.addToRecentlyDeleted(r, "session"),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(r) &&
                  (await this.client.core.crypto.deleteSymKey(r)),
                i || this.client.core.expirer.del(r),
                this.client.core.storage
                  .removeItem(Kp)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r &&
                    this.deletePendingSessionRequest(
                      e.id,
                      Ic("USER_DISCONNECTED")
                    );
                }),
                r ===
                  (null == (t = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : t.topic) && (this.sessionRequestQueue.state = Jp),
                n &&
                  this.client.events.emit("session_delete", {
                    id: s,
                    topic: r,
                  });
            }),
            (this.deleteProposal = async (e, t) => {
              if (t)
                try {
                  const t = this.client.proposal.get(e),
                    r = this.client.core.eventClient.getEvent({
                      topic: t.pairingTopic,
                    });
                  null === r || void 0 === r || r.setError(Kh);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, Ic("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            (this.deletePendingSessionRequest = async function (e, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              await Promise.all([
                t.client.pendingRequest.delete(e, r),
                i ? Promise.resolve() : t.client.core.expirer.del(e),
              ]),
                t.addToRecentlyDeleted(e, "request"),
                (t.sessionRequestQueue.queue =
                  t.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                i &&
                  ((t.sessionRequestQueue.state = Jp),
                  t.client.events.emit("session_request_expire", { id: e }));
            }),
            (this.deletePendingAuthRequest = async function (e, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              await Promise.all([
                t.client.auth.requests.delete(e, r),
                i ? Promise.resolve() : t.client.core.expirer.del(e),
              ]);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            (this.setProposal = async (e, t) => {
              this.client.core.expirer.set(e, cn(Zp.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            (this.setAuthRequest = async (e, t) => {
              const {
                request: r,
                pairingTopic: i,
                transportType: n = Jl.relay,
              } = t;
              this.client.core.expirer.set(e, r.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: r.authPayload,
                  requester: r.requester,
                  expiryTimestamp: r.expiryTimestamp,
                  id: e,
                  pairingTopic: i,
                  verifyContext: r.verifyContext,
                  transportType: n,
                });
            }),
            (this.setPendingSessionRequest = async (e) => {
              const { id: t, topic: r, params: i, verifyContext: n } = e,
                s =
                  i.request.expiryTimestamp || cn(Zp.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, s),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: n,
                });
            }),
            (this.sendRequest = async (e) => {
              const {
                  topic: t,
                  method: i,
                  params: n,
                  expiry: s,
                  relayRpcId: o,
                  clientRpcId: a,
                  throwOnFailedPublish: c,
                  appLink: l,
                } = e,
                h = cl(i, n, a);
              let u;
              const d = !!l;
              try {
                const e = d ? Wa : Za;
                u = await this.client.core.crypto.encode(t, h, { encoding: e });
              } catch (g) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${t} failed`
                  ),
                  g)
                );
              }
              let p;
              if (Yp.includes(i)) {
                const e = Qa(JSON.stringify(h)),
                  t = Qa(u);
                p = await this.client.core.verify.register({
                  id: t,
                  decryptedId: e,
                });
              }
              const f = Zp[i].req;
              if (
                ((f.attestation = p),
                s && (f.ttl = s),
                o && (f.id = o),
                this.client.core.history.set(t, h),
                d)
              ) {
                const e = gc(l, t, u);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                const e = Zp[i].req;
                s && (e.ttl = s),
                  o && (e.id = o),
                  c
                    ? ((e.internal = lf(cf({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(t, u, e))
                    : this.client.core.relayer
                        .publish(t, u, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return h.id;
            }),
            (this.sendResult = async (e) => {
              const {
                  id: t,
                  topic: i,
                  result: n,
                  throwOnFailedPublish: s,
                  encodeOpts: o,
                  appLink: a,
                } = e,
                c = ll(t, n);
              let l;
              const h = a && typeof (null == r.g ? void 0 : r.g.Linking) < "u";
              try {
                const e = h ? Wa : Za;
                l = await this.client.core.crypto.encode(
                  i,
                  c,
                  lf(cf({}, o || {}), { encoding: e })
                );
              } catch (A) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${i} failed`
                  ),
                  A)
                );
              }
              let u;
              try {
                u = await this.client.core.history.get(i, t);
              } catch (A) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${i}, ${t}) failed`
                  ),
                  A)
                );
              }
              if (h) {
                const e = gc(a, i, l);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                const e = Zp[u.request.method].res;
                s
                  ? ((e.internal = lf(cf({}, e.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(i, l, e))
                  : this.client.core.relayer
                      .publish(i, l, e)
                      .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(c);
            }),
            (this.sendError = async (e) => {
              const {
                  id: t,
                  topic: i,
                  error: n,
                  encodeOpts: s,
                  rpcOpts: o,
                  appLink: a,
                } = e,
                c = hl(t, n);
              let l;
              const h = a && typeof (null == r.g ? void 0 : r.g.Linking) < "u";
              try {
                const e = h ? Wa : Za;
                l = await this.client.core.crypto.encode(
                  i,
                  c,
                  lf(cf({}, s || {}), { encoding: e })
                );
              } catch (A) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${i} failed`
                  ),
                  A)
                );
              }
              let u;
              try {
                u = await this.client.core.history.get(i, t);
              } catch (A) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${i}, ${t}) failed`
                  ),
                  A)
                );
              }
              if (h) {
                const e = gc(a, i, l);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                const e = o || Zp[u.request.method].res;
                this.client.core.relayer.publish(i, l, e);
              }
              await this.client.core.history.resolve(c);
            }),
            (this.cleanup = async () => {
              const e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                ln(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  ln(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state !== Gp) {
                for (
                  this.client.logger.info(
                    `Request queue starting with ${this.requestQueue.queue.length} requests`
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = Gp;
                  const e = this.requestQueue.queue.shift();
                  if (e)
                    try {
                      await this.processRequest(e);
                    } catch (eo) {
                      this.client.logger.warn(eo);
                    }
                }
                this.requestQueue.state = Jp;
              } else
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
            }),
            (this.processRequest = async (e) => {
              const {
                  topic: t,
                  payload: r,
                  attestation: i,
                  transportType: n,
                  encryptedId: s,
                } = e,
                o = r.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: t, requestMethod: o })
              )
                switch (o) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: s,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, r);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, r);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, r);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, r);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, r);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: s,
                      transportType: n,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, r);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: s,
                      transportType: n,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${o}`
                    );
                }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r, transportType: i } = e,
                n = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r, i);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${n}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              const { topic: t } = e,
                { message: r } = Ec(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw new Error(r);
            }),
            (this.shouldIgnorePairingRequest = (e) => {
              const { topic: t, requestMethod: r } = e,
                i = this.expectedPairingMethodMap.get(t);
              return (
                !(!i || i.includes(r)) &&
                !!(
                  i.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            (this.onSessionProposeRequest = async (e) => {
              const {
                  topic: t,
                  payload: r,
                  attestation: i,
                  encryptedId: n,
                } = e,
                { params: s, id: o } = r;
              try {
                const e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  null !== e && void 0 !== e && e.setError(jh)),
                  this.isValidConnect(cf({}, r.params));
                const a = s.expiryTimestamp || cn(Zp.wc_sessionPropose.req.ttl),
                  c = cf({ id: o, pairingTopic: t, expiryTimestamp: a }, s);
                await this.setProposal(o, c);
                const l = await this.getVerifyContext({
                  attestationId: i,
                  hash: Qa(JSON.stringify(r)),
                  encryptedId: n,
                  metadata: c.proposer.metadata,
                });
                null !== e && void 0 !== e && e.addTrace(Th),
                  this.client.events.emit("session_proposal", {
                    id: o,
                    params: c,
                    verifyContext: l,
                  });
              } catch (N) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: N,
                  rpcOpts: Zp.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(N);
              }
            }),
            (this.onSessionProposeResponse = async (e, t, r) => {
              const { id: i } = t;
              if (_l(t)) {
                const { result: n } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: n,
                });
                const s = this.client.proposal.get(i);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: s,
                });
                const o = s.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: o,
                });
                const a = n.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: a,
                });
                const c = await this.client.core.crypto.generateSharedKey(o, a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: c,
                });
                const l = await this.client.core.relayer.subscribe(c, {
                  transportType: r,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if (El(t)) {
                await this.client.proposal.delete(i, Ic("USER_DISCONNECTED"));
                const e = hn("session_connect");
                if (0 === this.events.listenerCount(e))
                  throw new Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(hn("session_connect"), { error: t.error });
              }
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              const { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                const {
                    relay: r,
                    controller: n,
                    expiry: s,
                    namespaces: o,
                    sessionProperties: a,
                    sessionConfig: c,
                  } = t.params,
                  l = lf(
                    cf(
                      cf(
                        {
                          topic: e,
                          relay: r,
                          expiry: s,
                          namespaces: o,
                          acknowledged: !0,
                          pairingTopic: "",
                          requiredNamespaces: {},
                          optionalNamespaces: {},
                          controller: n.publicKey,
                          self: {
                            publicKey: "",
                            metadata: this.client.metadata,
                          },
                          peer: {
                            publicKey: n.publicKey,
                            metadata: n.metadata,
                          },
                        },
                        a && { sessionProperties: a }
                      ),
                      c && { sessionConfig: c }
                    ),
                    { transportType: Jl.relay }
                  ),
                  h = hn("session_connect");
                if (0 === this.events.listenerCount(h))
                  throw new Error(`emitting ${h} without any listeners 997`);
                this.events.emit(hn("session_connect"), { session: l }),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (n) {
                await this.sendError({ id: r, topic: e, error: n }),
                  this.client.logger.error(n);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              const { id: r } = t;
              _l(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(hn("session_approve", r), {}))
                : El(t) &&
                  (await this.client.session.delete(e, Ic("USER_DISCONNECTED")),
                  this.events.emit(hn("session_approve", r), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              const { params: r, id: i } = t;
              try {
                const t = `${e}_session_update`,
                  n = Kc.get(t);
                if (n && this.isRequestOutOfSync(n, i))
                  return (
                    this.client.logger.warn(
                      `Discarding out of sync request - ${i}`
                    ),
                    void this.sendError({
                      id: i,
                      topic: e,
                      error: Ic("INVALID_UPDATE_REQUEST"),
                    })
                  );
                this.isValidUpdate(cf({ topic: e }, r));
                try {
                  Kc.set(t, i),
                    await this.client.session.update(e, {
                      namespaces: r.namespaces,
                    }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (q) {
                  throw (Kc.delete(t), q);
                }
                this.client.events.emit("session_update", {
                  id: i,
                  topic: e,
                  params: r,
                });
              } catch (n) {
                await this.sendError({ id: i, topic: e, error: n }),
                  this.client.logger.error(n);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              t.toString().slice(0, -3) < e.toString().slice(0, -3)),
            (this.onSessionUpdateResponse = (e, t) => {
              const { id: r } = t,
                i = hn("session_update", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              _l(t)
                ? this.events.emit(hn("session_update", r), {})
                : El(t) &&
                  this.events.emit(hn("session_update", r), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, cn(Fp)),
                  await this.sendResult({
                    id: r,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (i) {
                await this.sendError({ id: r, topic: e, error: i }),
                  this.client.logger.error(i);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              const { id: r } = t,
                i = hn("session_extend", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              _l(t)
                ? this.events.emit(hn("session_extend", r), {})
                : El(t) &&
                  this.events.emit(hn("session_extend", r), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: r,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (i) {
                await this.sendError({ id: r, topic: e, error: i }),
                  this.client.logger.error(i);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              const { id: r } = t,
                i = hn("session_ping", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              setTimeout(() => {
                _l(t)
                  ? this.events.emit(hn("session_ping", r), {})
                  : El(t) &&
                    this.events.emit(hn("session_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(Hl, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({
                      id: r,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: Ic("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (i) {
                this.client.logger.error(i);
              }
            }),
            (this.onSessionRequest = async (e) => {
              var t, r, i;
              const {
                  topic: n,
                  payload: s,
                  attestation: o,
                  encryptedId: a,
                  transportType: c,
                } = e,
                { id: l, params: h } = s;
              try {
                await this.isValidRequest(cf({ topic: n }, h));
                const e = this.client.session.get(n),
                  s = {
                    id: l,
                    topic: n,
                    params: h,
                    verifyContext: await this.getVerifyContext({
                      attestationId: o,
                      hash: Qa(JSON.stringify(cl("wc_sessionRequest", h, l))),
                      encryptedId: a,
                      metadata: e.peer.metadata,
                      transportType: c,
                    }),
                  };
                await this.setPendingSessionRequest(s),
                  c === Jl.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (r = e.peer.metadata.redirect)
                        ? void 0
                        : r.universal
                    ),
                  null != (i = this.client.signConfig) && i.disableRequestQueue
                    ? this.emitSessionRequest(s)
                    : (this.addSessionRequestToSessionRequestQueue(s),
                      this.processSessionRequestQueue());
              } catch (A) {
                await this.sendError({ id: l, topic: n, error: A }),
                  this.client.logger.error(A);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              const { id: r } = t,
                i = hn("session_request", r);
              if (0 === this.events.listenerCount(i))
                throw new Error(`emitting ${i} without any listeners`);
              _l(t)
                ? this.events.emit(hn("session_request", r), {
                    result: t.result,
                  })
                : El(t) &&
                  this.events.emit(hn("session_request", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              const { id: r, params: i } = t;
              try {
                const t = `${e}_session_event_${i.event.name}`,
                  n = Kc.get(t);
                if (n && this.isRequestOutOfSync(n, r))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                this.isValidEmit(cf({ topic: e }, i)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  Kc.set(t, r);
              } catch (n) {
                await this.sendError({ id: r, topic: e, error: n }),
                  this.client.logger.error(n);
              }
            }),
            (this.onSessionAuthenticateResponse = (e, t) => {
              const { id: r } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t,
              }),
                _l(t)
                  ? this.events.emit(hn("session_request", r), {
                      result: t.result,
                    })
                  : El(t) &&
                    this.events.emit(hn("session_request", r), {
                      error: t.error,
                    });
            }),
            (this.onSessionAuthenticateRequest = async (e) => {
              var t;
              const {
                topic: r,
                payload: i,
                attestation: n,
                encryptedId: s,
                transportType: o,
              } = e;
              try {
                const {
                    requester: e,
                    authPayload: a,
                    expiryTimestamp: c,
                  } = i.params,
                  l = await this.getVerifyContext({
                    attestationId: n,
                    hash: Qa(JSON.stringify(i)),
                    encryptedId: s,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: r,
                    id: i.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(i.id, {
                  request: h,
                  pairingTopic: r,
                  transportType: o,
                }),
                  o === Jl.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: r,
                    params: i.params,
                    id: i.id,
                    verifyContext: l,
                  });
              } catch (N) {
                this.client.logger.error(N);
                const t = i.params.requester.publicKey,
                  n = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(i.params.requester.metadata, o),
                  a = { type: 1, receiverPublicKey: t, senderPublicKey: n };
                await this.sendError({
                  id: i.id,
                  topic: r,
                  error: N,
                  encodeOpts: a,
                  rpcOpts: Zp.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = Jp),
                    this.processSessionRequestQueue();
                }, (0, s.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = (e) => {
              let { topic: t, error: r } = e;
              const i = this.client.core.history.pending;
              i.length > 0 &&
                i
                  .filter(
                    (e) =>
                      e.topic === t && "wc_sessionRequest" === e.request.method
                  )
                  .forEach((e) => {
                    const t = hn("session_request", e.request.id);
                    if (0 === this.events.listenerCount(t))
                      throw new Error(`emitting ${t} without any listeners`);
                    this.events.emit(hn("session_request", e.request.id), {
                      error: r,
                    });
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === Gp)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              const e = this.sessionRequestQueue.queue[0];
              if (e)
                try {
                  (this.sessionRequestQueue.state = Gp),
                    this.emitSessionRequest(e);
                } catch (eo) {
                  this.client.logger.error(eo);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.emitSessionRequest = (e) => {
              this.client.events.emit("session_request", e);
            }),
            (this.onPairingCreated = (e) => {
              if (
                (e.methods &&
                  this.expectedPairingMethodMap.set(e.topic, e.methods),
                e.active)
              )
                return;
              const t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: cl(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  ),
                });
            }),
            (this.isValidConnect = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw new Error(t);
              }
              const {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: n,
                relays: s,
              } = e;
              if (
                (Pc(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    t && !e
                      ? (r = !0)
                      : e &&
                        Sc(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = Dc(e);
                        }),
                    r
                  );
                })(s, !0))
              ) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${s}`
                );
                throw new Error(e);
              }
              !Pc(r) &&
                0 !== Oc(r) &&
                this.validateNamespaces(r, "requiredNamespaces"),
                !Pc(i) &&
                  0 !== Oc(i) &&
                  this.validateNamespaces(i, "optionalNamespaces"),
                Pc(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              const r = (function (e, t, r) {
                let i = null;
                if (e && Oc(e)) {
                  const n = Cc(e, t);
                  n && (i = n);
                  const s = Rc(e, t, r);
                  s && (i = s);
                } else
                  i = Ec(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`
                  );
                return i;
              })(e, "connect()", t);
              if (r) throw new Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!Lc(e))
                throw new Error(
                  Ec("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              const {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: n,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              const s = this.client.proposal.get(t),
                o = jc(r, "approve()");
              if (o) throw new Error(o.message);
              const a = Bc(s.requiredNamespaces, r, "approve()");
              if (a) throw new Error(a.message);
              if (!xc(i, !0)) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${i}`
                );
                throw new Error(e);
              }
              Pc(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw new Error(t);
              }
              const { id: t, reason: r } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    "object" != typeof e ||
                    !e.code ||
                    !Tc(e.code, !1) ||
                    !e.message ||
                    !xc(e.message, !1)
                  );
                })(r))
              ) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw new Error(t);
              }
              const { relay: t, controller: r, namespaces: i, expiry: n } = e;
              if (!Dc(t)) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw new Error(e);
              }
              const s = (function (e, t) {
                let r = null;
                return (
                  xc(null === e || void 0 === e ? void 0 : e.publicKey, !1) ||
                    (r = Ec(
                      "MISSING_OR_INVALID",
                      `${t} controller public key should be a string`
                    )),
                  r
                );
              })(r, "onSessionSettleRequest()");
              if (s) throw new Error(s.message);
              const o = jc(i, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              if (ln(n)) {
                const { message: e } = Ec(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw new Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t, namespaces: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              const i = this.client.session.get(t),
                n = jc(r, "update()");
              if (n) throw new Error(n.message);
              const s = Bc(i.requiredNamespaces, r, "update()");
              if (s) throw new Error(s.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t, request: r, chainId: i, expiry: n } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              const { namespaces: s } = this.client.session.get(t);
              if (!Uc(s, i)) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${i}`
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Pc(e) || !xc(e.method, !1));
                })(r)
              ) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
              if (!qc(s, i, r.method)) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`
                );
                throw new Error(e);
              }
              if (
                n &&
                !(function (e, t) {
                  return Tc(e, !1) && e <= t.max && e >= t.min;
                })(n, Wp)
              ) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${n}. Expiry must be a number (in seconds) between ${Wp.min} and ${Wp.max}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              var t;
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: r, response: i } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (n) {
                throw (
                  (null !=
                    (t = null === e || void 0 === e ? void 0 : e.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  n)
                );
              }
              if (
                !(function (e) {
                  return !(
                    Pc(e) ||
                    (Pc(e.result) && Pc(e.error)) ||
                    !Tc(e.id, !1) ||
                    !xc(e.jsonrpc, !1)
                  );
                })(i)
              ) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t, event: r, chainId: i } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: n } = this.client.session.get(t);
              if (!Uc(n, i)) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${i}`
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Pc(e) || !xc(e.name, !1));
                })(r)
              ) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
              if (!Mc(n, i, r.name)) {
                const { message: e } = Ec(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Lc(e)) {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidAuthenticate = (e) => {
              const { chains: t, uri: r, domain: i, nonce: n } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw new Error(
                  "chains is required and must be a non-empty array"
                );
              if (!xc(r, !1)) throw new Error("uri is required parameter");
              if (!xc(i, !1)) throw new Error("domain is required parameter");
              if (!xc(n, !1)) throw new Error("nonce is required parameter");
              if ([...new Set(t.map((e) => Mi(e).namespace))].length > 1)
                throw new Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              const { namespace: s } = Mi(t[0]);
              if ("eip155" !== s)
                throw new Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            (this.getVerifyContext = async (e) => {
              const {
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  metadata: n,
                  transportType: s,
                } = e,
                o = {
                  verified: {
                    verifyUrl: n.verifyUrl || yh,
                    validation: "UNKNOWN",
                    origin: n.url || "",
                  },
                };
              try {
                if (s === Jl.link_mode) {
                  const e = this.getAppLinkIfEnabled(n, s);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(n.url).origin
                        ? "VALID"
                        : "INVALID"),
                    o
                  );
                }
                const e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  verifyUrl: n.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(n.url).origin ? "VALID" : "INVALID"));
              } catch (N) {
                this.client.logger.warn(N);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(o)}`
                ),
                o
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!xc(e, !1)) {
                  const { message: r } = Ec(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw new Error(r);
                }
              });
            }),
            (this.getPendingAuthRequest = (e) => {
              const t = this.client.auth.requests.get(e);
              return "object" == typeof t ? t : void 0;
            }),
            (this.addToRecentlyDeleted = (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0;
                const t = this.recentlyDeletedLimit / 2;
                for (const r of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(r);
                }
              }
            }),
            (this.checkRecentlyDeleted = (e) => {
              const t = this.recentlyDeletedMap.get(e);
              if (t) {
                const { message: r } = Ec(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw new Error(r);
              }
            }),
            (this.isLinkModeEnabled = (e, t) => {
              var i, n, s, o, a, c, l, h, u;
              return (
                !(!e || t !== Jl.link_mode) &&
                !0 ===
                  (null ==
                  (n = null == (i = this.client.metadata) ? void 0 : i.redirect)
                    ? void 0
                    : n.linkMode) &&
                void 0 !==
                  (null ==
                  (o = null == (s = this.client.metadata) ? void 0 : s.redirect)
                    ? void 0
                    : o.universal) &&
                "" !==
                  (null ==
                  (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                    ? void 0
                    : c.universal) &&
                void 0 !==
                  (null ==
                  (l = null === e || void 0 === e ? void 0 : e.redirect)
                    ? void 0
                    : l.universal) &&
                "" !==
                  (null ==
                  (h = null === e || void 0 === e ? void 0 : e.redirect)
                    ? void 0
                    : h.universal) &&
                !0 ===
                  (null ==
                  (u = null === e || void 0 === e ? void 0 : e.redirect)
                    ? void 0
                    : u.linkMode) &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                typeof (null == r.g ? void 0 : r.g.Linking) < "u"
              );
            }),
            (this.getAppLinkIfEnabled = (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = null === e || void 0 === e ? void 0 : e.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            (this.handleLinkModeMessage = (e) => {
              let { url: t } = e;
              if (!t || !t.includes("wc_ev") || !t.includes("topic")) return;
              const r = pn(t, "topic") || "",
                i = decodeURIComponent(pn(t, "wc_ev") || ""),
                n = this.client.session.keys.includes(r);
              n &&
                this.client.session.update(r, { transportType: Jl.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: r,
                  message: i,
                  sessionExists: n,
                });
            }),
            (this.registerLinkModeListeners = async () => {
              var e;
              if (
                gn() ||
                (Zi() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                const e = null == r.g ? void 0 : r.g.Linking;
                if (typeof e < "u") {
                  e.addEventListener(
                    "url",
                    this.handleLinkModeMessage,
                    this.client.name
                  );
                  const t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Ec("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(Ul, (e) => {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(e)
              : this.onRelayMessage(e);
          });
        }
        async onRelayMessage(e) {
          const { topic: t, message: r, attestation: i, transportType: n } = e,
            { publicKey: s } = this.client.auth.authKeys.keys.includes(Xp)
              ? this.client.auth.authKeys.get(Xp)
              : { responseTopic: void 0, publicKey: void 0 },
            o = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: s,
              encoding: n === Jl.link_mode ? Wa : Za,
            });
          try {
            vl(o)
              ? (this.client.core.history.set(t, o),
                this.onRelayEventRequest({
                  topic: t,
                  payload: o,
                  attestation: i,
                  transportType: n,
                  encryptedId: Qa(r),
                }))
              : bl(o)
              ? (await this.client.core.history.resolve(o),
                await this.onRelayEventResponse({
                  topic: t,
                  payload: o,
                  transportType: n,
                }),
                this.client.core.history.delete(t, o.id))
              : this.onRelayEventUnknownPayload({
                  topic: t,
                  payload: o,
                  transportType: n,
                });
          } catch (q) {
            this.client.logger.error(q);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(ph, async (e) => {
            const { topic: t, id: r } = an(e.target);
            return r && this.client.pendingRequest.keys.includes(r)
              ? await this.deletePendingSessionRequest(r, Ec("EXPIRED"), !0)
              : r && this.client.auth.requests.keys.includes(r)
              ? await this.deletePendingAuthRequest(r, Ec("EXPIRED"), !0)
              : void (t
                  ? this.client.session.keys.includes(t) &&
                    (await this.deleteSession({
                      topic: t,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: t }))
                  : r &&
                    (await this.deleteProposal(r, !0),
                    this.client.events.emit("proposal_expire", { id: r })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(ih, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(sh, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!xc(e, !1)) {
            const { message: t } = Ec(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const { message: t } = Ec(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if (ln(this.client.core.pairing.pairings.get(e).expiry)) {
            const { message: t } = Ec("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!xc(e, !1)) {
            const { message: t } = Ec(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw new Error(t);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            const { message: t } = Ec(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if (ln(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            const { message: t } = Ec("EXPIRED", `session topic: ${e}`);
            throw new Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            const { message: t } = Ec(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), new Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (
            (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
          )
            await this.isValidSessionTopic(e);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              if (xc(e, !1)) {
                const { message: t } = Ec(
                  "NO_MATCHING_KEY",
                  `session or pairing topic doesn't exist: ${e}`
                );
                throw new Error(t);
              }
              {
                const { message: t } = Ec(
                  "MISSING_OR_INVALID",
                  `session or pairing topic should be a string: ${e}`
                );
                throw new Error(t);
              }
            }
            this.isValidPairingTopic(e);
          }
        }
        async isValidProposalId(e) {
          if (
            !(function (e) {
              return "number" == typeof e;
            })(e)
          ) {
            const { message: t } = Ec(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw new Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            const { message: t } = Ec(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw new Error(t);
          }
          if (ln(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const { message: t } = Ec("EXPIRED", `proposal id: ${e}`);
            throw new Error(t);
          }
        }
      }
      class uf extends bp {
        constructor(e, t) {
          super(e, t, "proposal", zp), (this.core = e), (this.logger = t);
        }
      }
      class df extends bp {
        constructor(e, t) {
          super(e, t, "session", zp), (this.core = e), (this.logger = t);
        }
      }
      class pf extends bp {
        constructor(e, t) {
          super(e, t, "request", zp, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class ff extends bp {
        constructor(e, t) {
          super(e, t, "authKeys", Qp, () => Xp),
            (this.core = e),
            (this.logger = t);
        }
      }
      class gf extends bp {
        constructor(e, t) {
          super(e, t, "pairingTopics", Qp), (this.core = e), (this.logger = t);
        }
      }
      class yf extends bp {
        constructor(e, t) {
          super(e, t, "requests", Qp, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class mf {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.authKeys = new ff(this.core, this.logger)),
            (this.pairingTopics = new gf(this.core, this.logger)),
            (this.requests = new yf(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      class wf extends Z {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = Hp),
            (this.events = new i.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (eo) {
                throw (this.logger.error(eo.message), eo);
              }
            }),
            (this.authenticate = async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (r) {
                throw (this.logger.error(r.message), r);
              }
            }),
            (this.formatAuthMessage = (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.approveSessionAuthenticate = async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (c) {
                throw (this.logger.error(c.message), c);
              }
            }),
            (this.name = (null === e || void 0 === e ? void 0 : e.name) || Hp),
            (this.metadata =
              (null === e || void 0 === e ? void 0 : e.metadata) || Yi()),
            (this.signConfig =
              null === e || void 0 === e ? void 0 : e.signConfig);
          const t =
            typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" &&
            "string" != typeof (null === e || void 0 === e ? void 0 : e.logger)
              ? e.logger
              : (0, D.h6)(
                  (0, D.iP)({
                    level:
                      (null === e || void 0 === e ? void 0 : e.logger) || Vp,
                  })
                );
          (this.core =
            (null === e || void 0 === e ? void 0 : e.core) || new Bp(e)),
            (this.logger = (0, D.U5)(t, this.name)),
            (this.session = new df(this.core, this.logger)),
            (this.proposal = new uf(this.core, this.logger)),
            (this.pendingRequest = new pf(this.core, this.logger)),
            (this.engine = new hf(this)),
            (this.auth = new mf(this.core, this.logger));
        }
        static async init(e) {
          const t = new wf(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, D.oI)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              setTimeout(() => {
                this.engine.processRelayMessageCache();
              }, (0, s.toMiliseconds)(s.ONE_SECOND));
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var vf = r(9955),
        bf = r.n(vf),
        _f = Object.defineProperty,
        Ef = Object.defineProperties,
        If = Object.getOwnPropertyDescriptors,
        Sf = Object.getOwnPropertySymbols,
        Of = Object.prototype.hasOwnProperty,
        Pf = Object.prototype.propertyIsEnumerable,
        xf = (e, t, r) =>
          t in e
            ? _f(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Tf = (e, t) => {
          for (var r in t || (t = {})) Of.call(t, r) && xf(e, r, t[r]);
          if (Sf) for (var r of Sf(t)) Pf.call(t, r) && xf(e, r, t[r]);
          return e;
        },
        Af = (e, t) => Ef(e, If(t));
      const Nf = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class Rf {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new i.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !yl(e))
          )
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw new Error("Connection already closed");
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            const t = (0, P.h)(e),
              r = await (
                await bf()(this.url, Af(Tf({}, Nf), { body: t }))
              ).json();
            this.onPayload({ data: r });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!yl(e))
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            const e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return t(
                        new Error("HTTP connection is missing or invalid")
                      );
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              const t = (0, P.h)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await bf()(e, Af(Tf({}, Nf), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            const e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          const t = "string" == typeof e.data ? (0, P.j)(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          const r = this.parseError(t),
            i = hl(e, r.message || r.toString());
          this.events.emit("payload", i);
        }
        parseError(e) {
          return nl(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url,
            "HTTP"
          );
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      var kf = r(13740).Buffer;
      const Cf = "error",
        jf = "wc@2:universal_provider:",
        Df = "https://rpc.walletconnect.org/v1/",
        Lf = "generic",
        Uf = `${Df}bundler`,
        qf = "default_chain_changed";
      function Mf() {}
      function Bf(e) {
        return null == e || ("object" != typeof e && "function" != typeof e);
      }
      function $f(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function zf(e) {
        return "object" == typeof e && null !== e;
      }
      function Hf(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function Vf(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      const Kf = "[object RegExp]",
        Ff = "[object String]",
        Zf = "[object Number]",
        Wf = "[object Boolean]",
        Jf = "[object Arguments]",
        Gf = "[object Symbol]",
        Yf = "[object Date]",
        Qf = "[object Map]",
        Xf = "[object Set]",
        eg = "[object Array]",
        tg = "[object ArrayBuffer]",
        rg = "[object Object]",
        ig = "[object DataView]",
        ng = "[object Uint8Array]",
        sg = "[object Uint8ClampedArray]",
        og = "[object Uint16Array]",
        ag = "[object Uint32Array]",
        cg = "[object Int8Array]",
        lg = "[object Int16Array]",
        hg = "[object Int32Array]",
        ug = "[object Float32Array]",
        dg = "[object Float64Array]";
      function pg(e, t, r) {
        let i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : new Map(),
          n =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : void 0;
        const s = null === n || void 0 === n ? void 0 : n(e, t, r, i);
        if (null != s) return s;
        if (Bf(e)) return e;
        if (i.has(e)) return i.get(e);
        if (Array.isArray(e)) {
          const t = new Array(e.length);
          i.set(e, t);
          for (let s = 0; s < e.length; s++) t[s] = pg(e[s], s, r, i, n);
          return (
            Object.hasOwn(e, "index") && (t.index = e.index),
            Object.hasOwn(e, "input") && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          const t = new RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          const t = new Map();
          i.set(e, t);
          for (const [s, o] of e) t.set(s, pg(o, s, r, i, n));
          return t;
        }
        if (e instanceof Set) {
          const t = new Set();
          i.set(e, t);
          for (const s of e) t.add(pg(s, void 0, r, i, n));
          return t;
        }
        if (typeof kf < "u" && kf.isBuffer(e)) return e.subarray();
        if ($f(e)) {
          const t = new (Object.getPrototypeOf(e).constructor)(e.length);
          i.set(e, t);
          for (let s = 0; s < e.length; s++) t[s] = pg(e[s], s, r, i, n);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          (typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          const t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return i.set(e, t), fg(t, e, r, i, n), t;
        }
        if (typeof File < "u" && e instanceof File) {
          const t = new File([e], e.name, { type: e.type });
          return i.set(e, t), fg(t, e, r, i, n), t;
        }
        if (e instanceof Blob) {
          const t = new Blob([e], { type: e.type });
          return i.set(e, t), fg(t, e, r, i, n), t;
        }
        if (e instanceof Error) {
          const t = new e.constructor();
          return (
            i.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            fg(t, e, r, i, n),
            t
          );
        }
        if (
          "object" == typeof e &&
          (function (e) {
            switch (Vf(e)) {
              case Jf:
              case eg:
              case tg:
              case ig:
              case Wf:
              case Yf:
              case ug:
              case dg:
              case cg:
              case lg:
              case hg:
              case Qf:
              case Zf:
              case rg:
              case Kf:
              case Xf:
              case Ff:
              case Gf:
              case ng:
              case sg:
              case og:
              case ag:
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          const t = Object.create(Object.getPrototypeOf(e));
          return i.set(e, t), fg(t, e, r, i, n), t;
        }
        return e;
      }
      function fg(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
          i = arguments.length > 3 ? arguments[3] : void 0,
          n = arguments.length > 4 ? arguments[4] : void 0;
        const s = [...Object.keys(t), ...Hf(t)];
        for (let o = 0; o < s.length; o++) {
          const a = s[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = pg(t[a], a, r, i, n));
        }
      }
      function gg(e, t) {
        return (function (e, t) {
          return pg(e, void 0, e, new Map(), t);
        })(e, (r, i, n, s) => {
          const o = null === t || void 0 === t ? void 0 : t(r, i, n, s);
          if (null != o) return o;
          if ("object" == typeof e)
            switch (Object.prototype.toString.call(e)) {
              case Zf:
              case Ff:
              case Wf: {
                const t = new e.constructor(
                  null === e || void 0 === e ? void 0 : e.valueOf()
                );
                return fg(t, e), t;
              }
              case Jf: {
                const t = {};
                return (
                  fg(t, e),
                  (t.length = e.length),
                  (t[Symbol.iterator] = e[Symbol.iterator]),
                  t
                );
              }
              default:
                return;
            }
        });
      }
      function yg(e) {
        return gg(e);
      }
      function mg(e) {
        return (
          null !== e && "object" == typeof e && "[object Arguments]" === Vf(e)
        );
      }
      function wg(e) {
        return $f(e);
      }
      function vg(e) {
        if ("object" != typeof e || null == e) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        if ("[object Object]" !== Object.prototype.toString.call(e)) {
          var t;
          const r = e[Symbol.toStringTag];
          return (
            !(
              null == r ||
              null ===
                (t = Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)) ||
              void 0 === t ||
              !t.writable
            ) && e.toString() === `[object ${r}]`
          );
        }
        let r = e;
        for (; null !== Object.getPrototypeOf(r); )
          r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(e) === r;
      }
      function bg(e, t, r, i) {
        if ((Bf(e) && (e = Object(e)), null == t || "object" != typeof t))
          return e;
        if (i.has(t))
          return (function (e) {
            if (Bf(e)) return e;
            if (
              Array.isArray(e) ||
              $f(e) ||
              e instanceof ArrayBuffer ||
              (typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
            )
              return e.slice(0);
            const t = Object.getPrototypeOf(e),
              r = t.constructor;
            if (e instanceof Date || e instanceof Map || e instanceof Set)
              return new r(e);
            if (e instanceof RegExp) {
              const t = new r(e);
              return (t.lastIndex = e.lastIndex), t;
            }
            if (e instanceof DataView) return new r(e.buffer.slice(0));
            if (e instanceof Error) {
              const t = new r(e.message);
              return (
                (t.stack = e.stack), (t.name = e.name), (t.cause = e.cause), t
              );
            }
            if (typeof File < "u" && e instanceof File)
              return new r([e], e.name, {
                type: e.type,
                lastModified: e.lastModified,
              });
            if ("object" == typeof e) {
              const r = Object.create(t);
              return Object.assign(r, e);
            }
            return e;
          })(i.get(t));
        if ((i.set(t, e), Array.isArray(t))) {
          t = t.slice();
          for (let e = 0; e < t.length; e++) {
            var n;
            t[e] = null !== (n = t[e]) && void 0 !== n ? n : void 0;
          }
        }
        const s = [...Object.keys(t), ...Hf(t)];
        for (let o = 0; o < s.length; o++) {
          const n = s[o];
          let a = t[n],
            c = e[n];
          if (
            (mg(a) && (a = { ...a }),
            mg(c) && (c = { ...c }),
            typeof kf < "u" && kf.isBuffer(a) && (a = yg(a)),
            Array.isArray(a))
          )
            if ("object" == typeof c && null != c) {
              const e = [],
                t = Reflect.ownKeys(c);
              for (let r = 0; r < t.length; r++) {
                const i = t[r];
                e[i] = c[i];
              }
              c = e;
            } else c = [];
          const l = r(c, a, n, e, t, i);
          null != l
            ? (e[n] = l)
            : Array.isArray(a) || (zf(c) && zf(a))
            ? (e[n] = bg(c, a, r, i))
            : null == c && vg(a)
            ? (e[n] = bg({}, a, r, i))
            : null == c && wg(a)
            ? (e[n] = yg(a))
            : (void 0 === c || void 0 !== a) && (e[n] = a);
        }
        return e;
      }
      function _g(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        return (function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i];
          const n = r.slice(0, -1),
            s = r[r.length - 1];
          let o = e;
          for (let a = 0; a < n.length; a++) o = bg(o, n[a], s, new Map());
          return o;
        })(e, ...r, Mf);
      }
      var Eg = Object.defineProperty,
        Ig = Object.defineProperties,
        Sg = Object.getOwnPropertyDescriptors,
        Og = Object.getOwnPropertySymbols,
        Pg = Object.prototype.hasOwnProperty,
        xg = Object.prototype.propertyIsEnumerable,
        Tg = (e, t, r) =>
          t in e
            ? Eg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ag = (e, t) => {
          for (var r in t || (t = {})) Pg.call(t, r) && Tg(e, r, t[r]);
          if (Og) for (var r of Og(t)) xg.call(t, r) && Tg(e, r, t[r]);
          return e;
        },
        Ng = (e, t) => Ig(e, Sg(t));
      function Rg(e, t, r) {
        var i;
        const n = Mi(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[n.reference]) ||
          `${Df}?chainId=${n.namespace}:${n.reference}&projectId=${r}`
        );
      }
      function kg(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function Cg(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function jg() {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return _g(
          Dg(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ),
          Dg(e)
        );
      }
      function Dg(e) {
        var t, r, i, n;
        const s = {};
        if (!Oc(e)) return s;
        for (const [o, a] of Object.entries(e)) {
          const e = mc(o) ? [o] : a.chains,
            c = a.methods || [],
            l = a.events || [],
            h = a.rpcMap || {},
            u = wc(o);
          s[u] = Ng(Ag(Ag({}, s[u]), a), {
            chains: un(e, null == (t = s[u]) ? void 0 : t.chains),
            methods: un(c, null == (r = s[u]) ? void 0 : r.methods),
            events: un(l, null == (i = s[u]) ? void 0 : i.events),
            rpcMap: Ag(Ag({}, h), null == (n = s[u]) ? void 0 : n.rpcMap),
          });
        }
        return s;
      }
      function Lg(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function Ug(e) {
        const t = {};
        for (const [r, i] of Object.entries(e)) {
          const e = i.methods || [],
            n = i.events || [],
            s = i.accounts || [],
            o = mc(r) ? [r] : i.chains ? i.chains : Cg(i.accounts);
          t[r] = { chains: o, methods: e, events: n, accounts: s };
        }
        return t;
      }
      function qg(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : ((e = e.includes(":") ? e.split(":")[1] : e),
            isNaN(Number(e)) ? e : Number(e));
      }
      const Mg = {},
        Bg = (e) => Mg[e],
        $g = (e, t) => {
          Mg[e] = t;
        };
      var zg = Object.defineProperty,
        Hg = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? zg(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class Vg {
        constructor(e) {
          Hg(this, "name", "polkadot"),
            Hg(this, "client"),
            Hg(this, "httpProviders"),
            Hg(this, "events"),
            Hg(this, "namespace"),
            Hg(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(qf, `${this.name}:${e}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = kg(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var Kg = Object.defineProperty,
        Fg = Object.defineProperties,
        Zg = Object.getOwnPropertyDescriptors,
        Wg = Object.getOwnPropertySymbols,
        Jg = Object.prototype.hasOwnProperty,
        Gg = Object.prototype.propertyIsEnumerable,
        Yg = (e, t, r) =>
          t in e
            ? Kg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Qg = (e, t) => {
          for (var r in t || (t = {})) Jg.call(t, r) && Yg(e, r, t[r]);
          if (Wg) for (var r of Wg(t)) Gg.call(t, r) && Yg(e, r, t[r]);
          return e;
        },
        Xg = (e, t) => Fg(e, Zg(t)),
        ey = (e, t, r) => Yg(e, "symbol" != typeof t ? t + "" : t, r);
      class ty {
        constructor(e) {
          ey(this, "name", "eip155"),
            ey(this, "client"),
            ey(this, "chainId"),
            ey(this, "namespace"),
            ey(this, "httpProviders"),
            ey(this, "events"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(e);
            case "wallet_getCallsStatus":
              return await this.getCallStatus(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(qf, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          const r =
            t ||
            Rg(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = parseInt(kg(t));
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          const e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let i = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0";
          i = i.startsWith("0x") ? i : `0x${i}`;
          const n = parseInt(i, 16);
          if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
          else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
              throw new Error(
                `Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
              );
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: i }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${n}`);
          }
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, r, i;
          const n =
            null == (r = null == (t = e.request) ? void 0 : t.params)
              ? void 0
              : r[0];
          if (!n)
            throw new Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          const s = this.client.session.get(e.topic),
            o =
              (null ==
              (i = null === s || void 0 === s ? void 0 : s.sessionProperties)
                ? void 0
                : i.capabilities) || {};
          if (null != o && o[n])
            return null === o || void 0 === o ? void 0 : o[n];
          const a = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: Xg(Qg({}, s.sessionProperties || {}), {
                capabilities: Xg(Qg({}, o || {}), { [n]: a }),
              }),
            });
          } catch (K) {
            console.warn("Failed to update session with capabilities", K);
          }
          return a;
        }
        async getCallStatus(e) {
          var t, r;
          const i = this.client.session.get(e.topic),
            n = null == (t = i.sessionProperties) ? void 0 : t.bundler_name;
          if (n) {
            const t = this.getBundlerUrl(e.chainId, n);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (o) {
              console.warn("Failed to fetch call status from bundler", o, t);
            }
          }
          const s = null == (r = i.sessionProperties) ? void 0 : r.bundler_url;
          if (s)
            try {
              return await this.getUserOperationReceipt(s, e);
            } catch (N) {
              console.warn(
                "Failed to fetch call status from custom bundler",
                N,
                s
              );
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw new Error("Fetching call status not approved by the wallet.");
        }
        async getUserOperationReceipt(e, t) {
          var r;
          const i = new URL(e),
            n = await fetch(i, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                cl("eth_getUserOperationReceipt", [
                  null == (r = t.request.params) ? void 0 : r[0],
                ])
              ),
            });
          if (!n.ok)
            throw new Error(
              `Failed to fetch user operation receipt - ${n.status}`
            );
          return await n.json();
        }
        getBundlerUrl(e, t) {
          return `${Uf}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var ry = Object.defineProperty,
        iy = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? ry(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class ny {
        constructor(e) {
          iy(this, "name", "solana"),
            iy(this, "client"),
            iy(this, "httpProviders"),
            iy(this, "events"),
            iy(this, "namespace"),
            iy(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(qf, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = kg(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var sy = Object.defineProperty,
        oy = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? sy(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class ay {
        constructor(e) {
          oy(this, "name", "cosmos"),
            oy(this, "client"),
            oy(this, "httpProviders"),
            oy(this, "events"),
            oy(this, "namespace"),
            oy(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(qf, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = kg(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var cy = Object.defineProperty,
        ly = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? cy(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class hy {
        constructor(e) {
          ly(this, "name", "algorand"),
            ly(this, "client"),
            ly(this, "httpProviders"),
            ly(this, "events"),
            ly(this, "namespace"),
            ly(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            const r =
              t ||
              Rg(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(qf, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var uy = Object.defineProperty,
        dy = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? uy(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class py {
        constructor(e) {
          dy(this, "name", "cip34"),
            dy(this, "client"),
            dy(this, "httpProviders"),
            dy(this, "events"),
            dy(this, "namespace"),
            dy(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(qf, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              const r = this.getCardanoRPCUrl(t),
                i = kg(t);
              e[i] = this.createHttpProvider(i, r);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          const t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || this.getCardanoRPCUrl(e);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var fy = Object.defineProperty,
        gy = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? fy(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class yy {
        constructor(e) {
          gy(this, "name", "elrond"),
            gy(this, "client"),
            gy(this, "httpProviders"),
            gy(this, "events"),
            gy(this, "namespace"),
            gy(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(qf, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = kg(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var my = Object.defineProperty,
        wy = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? my(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class vy {
        constructor(e) {
          wy(this, "name", "multiversx"),
            wy(this, "client"),
            wy(this, "httpProviders"),
            wy(this, "events"),
            wy(this, "namespace"),
            wy(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(qf, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const i = kg(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var by = Object.defineProperty,
        _y = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? by(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class Ey {
        constructor(e) {
          _y(this, "name", "near"),
            _y(this, "client"),
            _y(this, "httpProviders"),
            _y(this, "events"),
            _y(this, "namespace"),
            _y(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || Rg(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(qf, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace);
          return typeof r > "u"
            ? void 0
            : new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var Iy = Object.defineProperty,
        Sy = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Iy(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class Oy {
        constructor(e) {
          Sy(this, "name", "tezos"),
            Sy(this, "client"),
            Sy(this, "httpProviders"),
            Sy(this, "events"),
            Sy(this, "namespace"),
            Sy(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || Rg(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(qf, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              e[t] = this.createHttpProvider(t);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace);
          return typeof r > "u" ? void 0 : new Il(new Rf(r));
        }
      }
      var Py = Object.defineProperty,
        xy = (e, t, r) =>
          ((e, t, r) =>
            t in e
              ? Py(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r))(e, "symbol" != typeof t ? t + "" : t, r);
      class Ty {
        constructor(e) {
          xy(this, "name", Lf),
            xy(this, "client"),
            xy(this, "httpProviders"),
            xy(this, "events"),
            xy(this, "namespace"),
            xy(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = Bg("events")),
            (this.client = Bg("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(e.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(e.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(qf, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          const r = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                const t = Mi(e);
                r[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            r
          );
        }
        getHttpProvider(e) {
          const t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || Rg(e, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
          return new Il(new Rf(r, Bg("disableProviderPing")));
        }
      }
      var Ay = Object.defineProperty,
        Ny = Object.defineProperties,
        Ry = Object.getOwnPropertyDescriptors,
        ky = Object.getOwnPropertySymbols,
        Cy = Object.prototype.hasOwnProperty,
        jy = Object.prototype.propertyIsEnumerable,
        Dy = (e, t, r) =>
          t in e
            ? Ay(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ly = (e, t) => {
          for (var r in t || (t = {})) Cy.call(t, r) && Dy(e, r, t[r]);
          if (ky) for (var r of ky(t)) jy.call(t, r) && Dy(e, r, t[r]);
          return e;
        },
        Uy = (e, t) => Ny(e, Ry(t)),
        qy = (e, t, r) => Dy(e, "symbol" != typeof t ? t + "" : t, r);
      class My {
        constructor(e) {
          qy(this, "client"),
            qy(this, "namespaces"),
            qy(this, "optionalNamespaces"),
            qy(this, "sessionProperties"),
            qy(this, "scopedProperties"),
            qy(this, "events", new (n())()),
            qy(this, "rpcProviders", {}),
            qy(this, "session"),
            qy(this, "providerOpts"),
            qy(this, "logger"),
            qy(this, "uri"),
            qy(this, "disableProviderPing", !1),
            (this.providerOpts = e),
            (this.logger =
              typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" &&
              "string" !=
                typeof (null === e || void 0 === e ? void 0 : e.logger)
                ? e.logger
                : (0, D.h6)(
                    (0, D.iP)({
                      level:
                        (null === e || void 0 === e ? void 0 : e.logger) || Cf,
                    })
                  )),
            (this.disableProviderPing =
              (null === e || void 0 === e ? void 0 : e.disableProviderPing) ||
              !1);
        }
        static async init(e) {
          const t = new My(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          const [i, n] = this.validateChain(t);
          if (!this.session)
            throw new Error("Please call connect() before request()");
          return await this.getProvider(i).request({
            request: Ly({}, e),
            chainId: `${i}:${n}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, i) {
          const n = new Date().getTime();
          this.request(e, r, i)
            .then((e) => t(null, ll(n, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw new Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw new Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: Ic("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw new Error("Sign Client not initialized");
          this.setNamespaces(e), await this.cleanupPendingPairings();
          const { uri: r, response: i } = await this.client.authenticate(e, t);
          r && ((this.uri = r), this.events.emit("display_uri", r));
          const n = await i();
          if (((this.session = n.session), this.session)) {
            const e = Ug(this.session.namespaces);
            (this.namespaces = jg(this.namespaces, e)),
              await this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return n;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          const { uri: t, approval: r } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit("display_uri", t));
          const i = await r();
          this.session = i;
          const n = Ug(i.namespaces);
          return (
            (this.namespaces = jg(this.namespaces, n)),
            await this.persist("namespaces", this.namespaces),
            await this.persist("optionalNamespaces", this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            const [r, i] = this.validateChain(e),
              n = this.getProvider(r);
            n.name === Lf
              ? n.setDefaultChain(`${r}:${i}`, t)
              : n.setDefaultChain(i, t);
          } catch (r) {
            if (!/Please call connect/.test(r.message)) throw r;
          }
        }
        async cleanupPendingPairings() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger.info("Cleaning up inactive pairings...");
          const t = this.client.pairing.getAll();
          if (Sc(t)) {
            for (const r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.logger.warn(
            "abortPairingAttempt is deprecated. This is now a no-op."
          );
        }
        async checkStorage() {
          (this.namespaces = (await this.getFromStore("namespaces")) || {}),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.session && this.createProviders();
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          var e, t;
          if (
            ((this.client =
              this.providerOpts.client ||
              (await wf.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || Cf,
                relayUrl:
                  this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled,
              }))),
            this.providerOpts.session)
          )
            try {
              this.session = this.client.session.get(
                this.providerOpts.session.topic
              );
            } catch (r) {
              throw (
                (this.logger.error("Failed to get session", r),
                new Error(
                  `The provided session: ${
                    null ==
                    (t = null == (e = this.providerOpts) ? void 0 : e.session)
                      ? void 0
                      : t.topic
                  } doesn't exist in the Sign client`
                ))
              );
            }
          else {
            const e = this.client.session.getAll();
            this.session = e[0];
          }
          this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (!this.session)
            throw new Error(
              "Session not initialized. Please call connect() before enable()"
            );
          const e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => wc(e))),
          ];
          $g("client", this.client),
            $g("events", this.events),
            $g("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              const t = (function (e, t) {
                  const r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!r.length) return [];
                  const i = [];
                  return (
                    r.forEach((e) => {
                      const r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = Cg(t),
                i = jg(this.namespaces, this.optionalNamespaces),
                n = Uy(Ly({}, i[e]), { accounts: t, chains: r });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new ty({ namespace: n });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new hy({ namespace: n });
                  break;
                case "solana":
                  this.rpcProviders[e] = new ny({ namespace: n });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new ay({ namespace: n });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new Vg({ namespace: n });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new py({ namespace: n });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new yy({ namespace: n });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new vy({ namespace: n });
                  break;
                case "near":
                  this.rpcProviders[e] = new Ey({ namespace: n });
                  break;
                case "tezos":
                  this.rpcProviders[e] = new Oy({ namespace: n });
                  break;
                default:
                  this.rpcProviders[Lf]
                    ? this.rpcProviders[Lf].updateNamespace(n)
                    : (this.rpcProviders[Lf] = new Ty({ namespace: n }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            var t;
            const { topic: r } = e;
            r === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              var t;
              const { params: r, topic: i } = e;
              if (i !== (null == (t = this.session) ? void 0 : t.topic)) return;
              const { event: n } = r;
              if ("accountsChanged" === n.name) {
                const e = n.data;
                e && Sc(e) && this.events.emit("accountsChanged", e.map(Lg));
              } else if ("chainChanged" === n.name) {
                const e = r.chainId,
                  t = r.event.data,
                  i = wc(e),
                  n = qg(e) !== qg(t) ? `${i}:${qg(t)}` : e;
                this.onChainChanged(n);
              } else this.events.emit(n.name, n.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", (e) => {
              let { topic: t, params: r } = e;
              var i, n;
              if (t !== (null == (i = this.session) ? void 0 : i.topic)) return;
              const { namespaces: s } = r,
                o = null == (n = this.client) ? void 0 : n.session.get(t);
              (this.session = Uy(Ly({}, o), { namespaces: s })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: t, params: r });
            }),
            this.client.on("session_delete", async (e) => {
              var t;
              e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                (await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  Uy(Ly({}, Ic("USER_DISCONNECTED")), { data: e.topic })
                ));
            }),
            this.on(qf, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[Lf];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          const {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: i,
            scopedProperties: n,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = i),
            (this.scopedProperties = n);
        }
        validateChain(e) {
          const [t, r] = (null === e || void 0 === e
            ? void 0
            : e.split(":")) || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => wc(e))
              .includes(t)
          )
            throw new Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          const i = wc(Object.keys(this.namespaces)[0]);
          return [i, this.rpcProviders[i].getDefaultChain()];
        }
        async requestAccounts() {
          const [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!this.namespaces) return;
          const [r, i] = this.validateChain(e);
          if (!i) return;
          this.updateNamespaceChain(r, i), this.events.emit("chainChanged", i);
          const n = this.getProvider(r).getDefaultChain();
          t || this.getProvider(r).setDefaultChain(i),
            this.emitAccountsChangedOnChainChange({
              namespace: r,
              previousChainId: n,
              newChainId: e,
            }),
            await this.persist("namespaces", this.namespaces);
        }
        emitAccountsChangedOnChainChange(e) {
          let { namespace: t, previousChainId: r, newChainId: i } = e;
          var n, s;
          try {
            if (r === i) return;
            const e =
              null ==
              (s = null == (n = this.session) ? void 0 : n.namespaces[t])
                ? void 0
                : s.accounts;
            if (!e) return;
            const o = e.filter((e) => e.includes(`${i}:`)).map(Lg);
            if (!Sc(o)) return;
            this.events.emit("accountsChanged", o);
          } catch (o) {
            this.logger.warn(
              "Failed to emit accountsChanged on chain change",
              o
            );
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          const r = this.namespaces[e] ? e : `${e}:${t}`,
            i = { chains: [], methods: [], events: [], defaultChain: t };
          this.namespaces[r]
            ? this.namespaces[r] && (this.namespaces[r].defaultChain = t)
            : (this.namespaces[r] = i);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            await this.deleteFromStore("namespaces"),
            await this.deleteFromStore("optionalNamespaces"),
            await this.deleteFromStore("sessionProperties"),
            (this.session = void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 }),
            await this.cleanupStorage();
        }
        async persist(e, t) {
          var r;
          const i = (null == (r = this.session) ? void 0 : r.topic) || "";
          await this.client.core.storage.setItem(`${jf}/${e}${i}`, t);
        }
        async getFromStore(e) {
          var t;
          const r = (null == (t = this.session) ? void 0 : t.topic) || "";
          return await this.client.core.storage.getItem(`${jf}/${e}${r}`);
        }
        async deleteFromStore(e) {
          var t;
          const r = (null == (t = this.session) ? void 0 : t.topic) || "";
          await this.client.core.storage.removeItem(`${jf}/${e}${r}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
              return;
            const t = await this.client.core.storage.getKeys();
            for (const e of t)
              e.startsWith(jf) &&
                (await this.client.core.storage.removeItem(e));
          } catch (t) {
            this.logger.warn("Failed to cleanup storage", t);
          }
        }
      }
    },
  },
]);
