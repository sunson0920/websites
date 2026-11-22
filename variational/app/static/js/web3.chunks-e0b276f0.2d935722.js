"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [41],
  {
    483: (r, e, t) => {
      t.r(e),
        t.d(e, {
          BaseContract: () => o.Uq,
          BigNumber: () => s.gH,
          Contract: () => o.NZ,
          ContractFactory: () => o.PM,
          FixedNumber: () => i.I3,
          Signer: () => I,
          VoidSigner: () => v,
          Wallet: () => b.uW,
          Wordlist: () => V.b,
          constants: () => n,
          errors: () => z.O4,
          getDefaultProvider: () => G.getDefaultProvider,
          logger: () => X,
          providers: () => G,
          utils: () => W,
          version: () => B,
          wordlists: () => j.Y,
        });
      var n = {};
      t.r(n),
        t.d(n, {
          AddressZero: () => T,
          EtherSymbol: () => k,
          HashZero: () => x,
          MaxInt256: () => M,
          MaxUint256: () => D,
          MinInt256: () => L,
          NegativeOne: () => O,
          One: () => P,
          Two: () => C,
          WeiPerEther: () => F,
          Zero: () => S,
        });
      var o = t(32296),
        s = t(12543),
        i = t(84815);
      let a = !1,
        l = !1;
      const u = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let c = u.default,
        h = null;
      const f = (function () {
        try {
          const r = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (t) {
                r.push(e);
              }
            }),
            r.length)
          )
            throw new Error("missing " + r.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var g, E;
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(g || (g = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(E || (E = {}));
      const m = "0123456789abcdef";
      class p {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, e) {
          const t = r.toLowerCase();
          null == u[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            c > u[t] || console.log.apply(console, e);
        }
        debug() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(p.levels.DEBUG, e);
        }
        info() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(p.levels.INFO, e);
        }
        warn() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(p.levels.WARNING, e);
        }
        makeError(r, e, t) {
          if (l) return this.makeError("censored error", e, {});
          e || (e = p.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((r) => {
            const e = t[r];
            try {
              if (e instanceof Uint8Array) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (t += m[e[r] >> 4]), (t += m[15 & e[r]]);
                n.push(r + "=Uint8Array(0x" + t + ")");
              } else n.push(r + "=" + JSON.stringify(e));
            } catch (i) {
              n.push(r + "=" + JSON.stringify(t[r].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const o = r;
          let s = "";
          switch (e) {
            case E.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = r;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case E.CALL_EXCEPTION:
            case E.INSUFFICIENT_FUNDS:
            case E.MISSING_NEW:
            case E.NONCE_EXPIRED:
            case E.REPLACEMENT_UNDERPRICED:
            case E.TRANSACTION_REPLACED:
            case E.UNPREDICTABLE_GAS_LIMIT:
              s = e;
          }
          s && (r += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          const i = new Error(r);
          return (
            (i.reason = o),
            (i.code = e),
            Object.keys(t).forEach(function (r) {
              i[r] = t[r];
            }),
            i
          );
        }
        throwError(r, e, t) {
          throw this.makeError(r, e, t);
        }
        throwArgumentError(r, e, t) {
          return this.throwError(r, p.errors.INVALID_ARGUMENT, {
            argument: e,
            value: t,
          });
        }
        assert(r, e, t, n) {
          r || this.throwError(e, t, n);
        }
        assertArgument(r, e, t, n) {
          r || this.throwArgumentError(e, t, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                p.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(r, e) {
          "number" === typeof r &&
            (null == e && (e = "value not safe"),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(e, p.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(e, p.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, e, t) {
          (t = t ? ": " + t : ""),
            r < e &&
              this.throwError(
                "missing argument" + t,
                p.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: e }
              ),
            r > e &&
              this.throwError(
                "too many arguments" + t,
                p.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: e }
              );
        }
        checkNew(r, e) {
          (r !== Object && null != r) ||
            this.throwError("missing new", p.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(r, e) {
          r === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                p.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r !== Object && null != r) ||
              this.throwError("missing new", p.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return h || (h = new p("logger/5.8.0")), h;
        }
        static setCensorship(r, e) {
          if (
            (!r &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                p.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            a)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              p.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (l = !!r), (a = !!e);
        }
        static setLogLevel(r) {
          const e = u[r.toLowerCase()];
          null != e
            ? (c = e)
            : p.globalLogger().warn("invalid log level - " + r);
        }
        static from(r) {
          return new p(r);
        }
      }
      (p.errors = E), (p.levels = g);
      var d = function (r, e, t, n) {
        return new (t || (t = Promise))(function (o, s) {
          function i(r) {
            try {
              l(n.next(r));
            } catch (e) {
              s(e);
            }
          }
          function a(r) {
            try {
              l(n.throw(r));
            } catch (e) {
              s(e);
            }
          }
          function l(r) {
            var e;
            r.done
              ? o(r.value)
              : ((e = r.value),
                e instanceof t
                  ? e
                  : new t(function (r) {
                      r(e);
                    })).then(i, a);
          }
          l((n = n.apply(r, e || [])).next());
        });
      };
      new p("properties/5.8.0");
      function N(r, e, t) {
        Object.defineProperty(r, e, { enumerable: !0, value: t, writable: !1 });
      }
      function y(r) {
        return d(this, void 0, void 0, function* () {
          const e = Object.keys(r).map((e) => {
            const t = r[e];
            return Promise.resolve(t).then((r) => ({ key: e, value: r }));
          });
          return (yield Promise.all(e)).reduce(
            (r, e) => ((r[e.key] = e.value), r),
            {}
          );
        });
      }
      var R = function (r, e, t, n) {
        return new (t || (t = Promise))(function (o, s) {
          function i(r) {
            try {
              l(n.next(r));
            } catch (e) {
              s(e);
            }
          }
          function a(r) {
            try {
              l(n.throw(r));
            } catch (e) {
              s(e);
            }
          }
          function l(r) {
            var e;
            r.done
              ? o(r.value)
              : ((e = r.value),
                e instanceof t
                  ? e
                  : new t(function (r) {
                      r(e);
                    })).then(i, a);
          }
          l((n = n.apply(r, e || [])).next());
        });
      };
      const w = new p("abstract-signer/5.6.2"),
        A = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        _ = [
          p.errors.INSUFFICIENT_FUNDS,
          p.errors.NONCE_EXPIRED,
          p.errors.REPLACEMENT_UNDERPRICED,
        ];
      class I {
        constructor() {
          w.checkAbstract(new.target, I), N(this, "_isSigner", !0);
        }
        getBalance(r) {
          return R(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), r)
            );
          });
        }
        getTransactionCount(r) {
          return R(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), r)
            );
          });
        }
        estimateGas(r) {
          return R(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const e = yield y(this.checkTransaction(r));
            return yield this.provider.estimateGas(e);
          });
        }
        call(r, e) {
          return R(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const t = yield y(this.checkTransaction(r));
            return yield this.provider.call(t, e);
          });
        }
        sendTransaction(r) {
          return R(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const e = yield this.populateTransaction(r),
              t = yield this.signTransaction(e);
            return yield this.provider.sendTransaction(t);
          });
        }
        getChainId() {
          return R(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            return (yield this.provider.getNetwork()).chainId;
          });
        }
        getGasPrice() {
          return R(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return R(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(r) {
          return R(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(r)
            );
          });
        }
        checkTransaction(r) {
          for (const t in r)
            -1 === A.indexOf(t) &&
              w.throwArgumentError(
                "invalid transaction key: " + t,
                "transaction",
                r
              );
          const e = (function (r) {
            const e = {};
            for (const t in r) e[t] = r[t];
            return e;
          })(r);
          return (
            null == e.from
              ? (e.from = this.getAddress())
              : (e.from = Promise.all([
                  Promise.resolve(e.from),
                  this.getAddress(),
                ]).then(
                  (e) => (
                    e[0].toLowerCase() !== e[1].toLowerCase() &&
                      w.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        r
                      ),
                    e[0]
                  )
                )),
            e
          );
        }
        populateTransaction(r) {
          return R(this, void 0, void 0, function* () {
            const e = yield y(this.checkTransaction(r));
            null != e.to &&
              ((e.to = Promise.resolve(e.to).then((r) =>
                R(this, void 0, void 0, function* () {
                  if (null == r) return null;
                  const e = yield this.resolveName(r);
                  return (
                    null == e &&
                      w.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        r
                      ),
                    e
                  );
                })
              )),
              e.to.catch((r) => {}));
            const t = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
            if (
              (null == e.gasPrice || (2 !== e.type && !t)
                ? (0 !== e.type && 1 !== e.type) ||
                  !t ||
                  w.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    r
                  )
                : w.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    r
                  ),
              (2 !== e.type && null != e.type) ||
                null == e.maxFeePerGas ||
                null == e.maxPriorityFeePerGas)
            )
              if (0 === e.type || 1 === e.type)
                null == e.gasPrice && (e.gasPrice = this.getGasPrice());
              else {
                const r = yield this.getFeeData();
                if (null == e.type)
                  if (null != r.maxFeePerGas && null != r.maxPriorityFeePerGas)
                    if (((e.type = 2), null != e.gasPrice)) {
                      const r = e.gasPrice;
                      delete e.gasPrice,
                        (e.maxFeePerGas = r),
                        (e.maxPriorityFeePerGas = r);
                    } else
                      null == e.maxFeePerGas &&
                        (e.maxFeePerGas = r.maxFeePerGas),
                        null == e.maxPriorityFeePerGas &&
                          (e.maxPriorityFeePerGas = r.maxPriorityFeePerGas);
                  else
                    null != r.gasPrice
                      ? (t &&
                          w.throwError(
                            "network does not support EIP-1559",
                            p.errors.UNSUPPORTED_OPERATION,
                            { operation: "populateTransaction" }
                          ),
                        null == e.gasPrice && (e.gasPrice = r.gasPrice),
                        (e.type = 0))
                      : w.throwError(
                          "failed to get consistent fee data",
                          p.errors.UNSUPPORTED_OPERATION,
                          { operation: "signer.getFeeData" }
                        );
                else
                  2 === e.type &&
                    (null == e.maxFeePerGas &&
                      (e.maxFeePerGas = r.maxFeePerGas),
                    null == e.maxPriorityFeePerGas &&
                      (e.maxPriorityFeePerGas = r.maxPriorityFeePerGas));
              }
            else e.type = 2;
            return (
              null == e.nonce &&
                (e.nonce = this.getTransactionCount("pending")),
              null == e.gasLimit &&
                (e.gasLimit = this.estimateGas(e).catch((r) => {
                  if (_.indexOf(r.code) >= 0) throw r;
                  return w.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    p.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: r, tx: e }
                  );
                })),
              null == e.chainId
                ? (e.chainId = this.getChainId())
                : (e.chainId = Promise.all([
                    Promise.resolve(e.chainId),
                    this.getChainId(),
                  ]).then(
                    (e) => (
                      0 !== e[1] &&
                        e[0] !== e[1] &&
                        w.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          r
                        ),
                      e[0]
                    )
                  )),
              yield y(e)
            );
          });
        }
        _checkProvider(r) {
          this.provider ||
            w.throwError("missing provider", p.errors.UNSUPPORTED_OPERATION, {
              operation: r || "_checkProvider",
            });
        }
        static isSigner(r) {
          return !(!r || !r._isSigner);
        }
      }
      class v extends I {
        constructor(r, e) {
          super(), N(this, "address", r), N(this, "provider", e || null);
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(r, e) {
          return Promise.resolve().then(() => {
            w.throwError(r, p.errors.UNSUPPORTED_OPERATION, { operation: e });
          });
        }
        signMessage(r) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(r) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction"
          );
        }
        _signTypedData(r, e, t) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData"
          );
        }
        connect(r) {
          return new v(this.address, r);
        }
      }
      var b = t(83653);
      const T = "0x0000000000000000000000000000000000000000";
      var U = t(61694);
      const O = U.gH.from(-1),
        S = U.gH.from(0),
        P = U.gH.from(1),
        C = U.gH.from(2),
        F = U.gH.from("1000000000000000000"),
        D = U.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        L = U.gH.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000"
        ),
        M = U.gH.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        x =
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        k = "\u039e";
      var G = t(78539),
        j = t(14434),
        V = t(32642),
        W = t(60194),
        z = t(5865);
      const B = "ethers/5.6.8",
        X = new z.Vy(B);
    },
    39599: (r, e, t) => {
      t.d(e, { Vy: () => f });
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let i = s.default,
        a = null;
      const l = (function () {
        try {
          const r = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (t) {
                r.push(e);
              }
            }),
            r.length)
          )
            throw new Error("missing " + r.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var u, c;
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(u || (u = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(c || (c = {}));
      const h = "0123456789abcdef";
      class f {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, e) {
          const t = r.toLowerCase();
          null == s[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            i > s[t] || console.log.apply(console, e);
        }
        debug() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.DEBUG, e);
        }
        info() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.INFO, e);
        }
        warn() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.WARNING, e);
        }
        makeError(r, e, t) {
          if (o) return this.makeError("censored error", e, {});
          e || (e = f.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((r) => {
            const e = t[r];
            try {
              if (e instanceof Uint8Array) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (t += h[e[r] >> 4]), (t += h[15 & e[r]]);
                n.push(r + "=Uint8Array(0x" + t + ")");
              } else n.push(r + "=" + JSON.stringify(e));
            } catch (a) {
              n.push(r + "=" + JSON.stringify(t[r].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const s = r;
          let i = "";
          switch (e) {
            case c.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const e = r;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  i += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  i += "-unbound-result";
              }
              break;
            }
            case c.CALL_EXCEPTION:
            case c.INSUFFICIENT_FUNDS:
            case c.MISSING_NEW:
            case c.NONCE_EXPIRED:
            case c.REPLACEMENT_UNDERPRICED:
            case c.TRANSACTION_REPLACED:
            case c.UNPREDICTABLE_GAS_LIMIT:
              i = e;
          }
          i && (r += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          const a = new Error(r);
          return (
            (a.reason = s),
            (a.code = e),
            Object.keys(t).forEach(function (r) {
              a[r] = t[r];
            }),
            a
          );
        }
        throwError(r, e, t) {
          throw this.makeError(r, e, t);
        }
        throwArgumentError(r, e, t) {
          return this.throwError(r, f.errors.INVALID_ARGUMENT, {
            argument: e,
            value: t,
          });
        }
        assert(r, e, t, n) {
          r || this.throwError(e, t, n);
        }
        assertArgument(r, e, t, n) {
          r || this.throwArgumentError(e, t, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l }
              );
        }
        checkSafeUint53(r, e) {
          "number" === typeof r &&
            (null == e && (e = "value not safe"),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, e, t) {
          (t = t ? ": " + t : ""),
            r < e &&
              this.throwError(
                "missing argument" + t,
                f.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: e }
              ),
            r > e &&
              this.throwError(
                "too many arguments" + t,
                f.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: e }
              );
        }
        checkNew(r, e) {
          (r !== Object && null != r) ||
            this.throwError("missing new", f.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(r, e) {
          r === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                f.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r !== Object && null != r) ||
              this.throwError("missing new", f.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return a || (a = new f("logger/5.8.0")), a;
        }
        static setCensorship(r, e) {
          if (
            (!r &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              f.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!r), (n = !!e);
        }
        static setLogLevel(r) {
          const e = s[r.toLowerCase()];
          null != e
            ? (i = e)
            : f.globalLogger().warn("invalid log level - " + r);
        }
        static from(r) {
          return new f(r);
        }
      }
      (f.errors = c), (f.levels = u);
    },
    60194: (r, e, t) => {
      t.r(e),
        t.d(e, {
          AbiCoder: () => Or,
          ConstructorFragment: () => Nr,
          ErrorFragment: () => wr,
          EventFragment: () => Er,
          FormatTypes: () => ur,
          Fragment: () => gr,
          FunctionFragment: () => yr,
          HDNode: () => It.Fo,
          Indexed: () => Mr,
          Interface: () => Gr,
          LogDescription: () => Fr,
          Logger: () => Tt.Vy,
          ParamType: () => hr,
          RLP: () => Ft,
          SigningKey: () => Dt.hR,
          SupportedAlgorithm: () => Wt.q,
          TransactionDescription: () => Dr,
          TransactionTypes: () => kt.Eh,
          UnicodeNormalizationForm: () => Mt.dz,
          Utf8ErrorFuncs: () => Mt.d5,
          Utf8ErrorReason: () => Mt._E,
          _TypedDataEncoder: () => _t.z,
          _fetchData: () => Vt.Em,
          _toEscapedUtf8String: () => Mt.Wj,
          accessListify: () => kt.$2,
          arrayify: () => st,
          base58: () => We,
          base64: () => n,
          checkProperties: () => Ct.qN,
          checkResultErrors: () => d,
          commify: () => Gt.l8,
          computeAddress: () => kt.Kt,
          computeHmac: () => Ut.L5,
          computePublicKey: () => Dt.uN,
          concat: () => it,
          deepCopy: () => Ct.A4,
          defaultAbiCoder: () => Sr,
          defaultPath: () => It.jb,
          defineReadOnly: () => Ct.yY,
          dnsEncode: () => Rt.Wh,
          entropyToMnemonic: () => It.VF,
          fetchJson: () => Vt.x6,
          formatBytes32String: () => xt.R,
          formatEther: () => Gt.ck,
          formatUnits: () => Gt.Js,
          getAccountPath: () => It.LL,
          getAddress: () => Qr,
          getContractAddress: () => te,
          getCreate2Address: () => ne,
          getIcapAddress: () => ee,
          getJsonWalletAddress: () => vt.cZ,
          getStatic: () => Ct.$J,
          hashMessage: () => wt.A,
          hexConcat: () => Et,
          hexDataLength: () => ft,
          hexDataSlice: () => gt,
          hexStripZeros: () => pt,
          hexValue: () => mt,
          hexZeroPad: () => dt,
          hexlify: () => ht,
          id: () => At.id,
          isAddress: () => re,
          isBytes: () => ot,
          isBytesLike: () => tt,
          isHexString: () => ut,
          isValidMnemonic: () => It.rj,
          isValidName: () => Rt.uV,
          joinSignature: () => yt,
          keccak256: () => bt.S,
          mnemonicToEntropy: () => It.x2,
          mnemonicToSeed: () => It.nl,
          namehash: () => Rt.kM,
          nameprep: () => Lt.j9,
          parseBytes32String: () => xt.V,
          parseEther: () => Gt.g5,
          parseTransaction: () => kt.qg,
          parseUnits: () => Gt.XS,
          poll: () => Vt.wt,
          randomBytes: () => St.p,
          recoverAddress: () => kt.x_,
          recoverPublicKey: () => Dt.jL,
          resolveProperties: () => Ct.k_,
          ripemd160: () => Ut.HE,
          serializeTransaction: () => kt.lK,
          sha256: () => Ut.sc,
          sha512: () => Ut.Zf,
          shallowCopy: () => Ct.Ic,
          shuffled: () => Pt.A,
          solidityKeccak256: () => Ot.So,
          solidityPack: () => Ot.qq,
          soliditySha256: () => Ot.sc,
          splitSignature: () => Nt,
          stripZeros: () => at,
          toUtf8Bytes: () => Mt.YW,
          toUtf8CodePoints: () => Mt.dg,
          toUtf8String: () => Mt._v,
          verifyMessage: () => jt.lT,
          verifyTypedData: () => jt.wh,
          zeroPad: () => lt,
        });
      var n = {};
      t.r(n), t.d(n, { decode: () => we, encode: () => Ae });
      var o = t(95542),
        s = t(89857);
      const i = new s.Vy("properties/5.8.0");
      function a(r, e, t) {
        Object.defineProperty(r, e, { enumerable: !0, value: t, writable: !1 });
      }
      function l(r, e) {
        for (let t = 0; t < 32; t++) {
          if (r[e]) return r[e];
          if (!r.prototype || "object" !== typeof r.prototype) break;
          r = Object.getPrototypeOf(r.prototype).constructor;
        }
        return null;
      }
      const u = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function c(r) {
        if (void 0 === r || null === r || u[typeof r]) return !0;
        if (Array.isArray(r) || "object" === typeof r) {
          if (!Object.isFrozen(r)) return !1;
          const t = Object.keys(r);
          for (let n = 0; n < t.length; n++) {
            let o = null;
            try {
              o = r[t[n]];
            } catch (e) {
              continue;
            }
            if (!c(o)) return !1;
          }
          return !0;
        }
        return i.throwArgumentError("Cannot deepCopy " + typeof r, "object", r);
      }
      function h(r) {
        if (c(r)) return r;
        if (Array.isArray(r)) return Object.freeze(r.map((r) => f(r)));
        if ("object" === typeof r) {
          const e = {};
          for (const t in r) {
            const n = r[t];
            void 0 !== n && a(e, t, f(n));
          }
          return e;
        }
        return i.throwArgumentError("Cannot deepCopy " + typeof r, "object", r);
      }
      function f(r) {
        return h(r);
      }
      class g {
        constructor(r) {
          for (const e in r) this[e] = f(r[e]);
        }
      }
      const E = "abi/5.6.3";
      var m = t(25987);
      const p = new s.Vy(E);
      function d(r) {
        const e = [],
          t = function (r, n) {
            if (Array.isArray(n))
              for (let s in n) {
                const i = r.slice();
                i.push(s);
                try {
                  t(i, n[s]);
                } catch (o) {
                  e.push({ path: i, error: o });
                }
              }
          };
        return t([], r), e;
      }
      class N {
        constructor(r, e, t, n) {
          (this.name = r),
            (this.type = e),
            (this.localName = t),
            (this.dynamic = n);
        }
        _throwError(r, e) {
          p.throwArgumentError(r, this.localName, e);
        }
      }
      class y {
        constructor(r) {
          a(this, "wordSize", r || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(r));
        }
        get data() {
          return (0, o.qn)(this._data);
        }
        get length() {
          return this._dataLength;
        }
        _writeData(r) {
          return this._data.push(r), (this._dataLength += r.length), r.length;
        }
        appendWriter(r) {
          return this._writeData((0, o.xW)(r._data));
        }
        writeBytes(r) {
          let e = (0, o.k9)(r);
          const t = e.length % this.wordSize;
          return (
            t && (e = (0, o.xW)([e, this._padding.slice(t)])),
            this._writeData(e)
          );
        }
        _getValue(r) {
          let e = (0, o.k9)(m.gH.from(r));
          return (
            e.length > this.wordSize &&
              p.throwError("value out-of-bounds", s.Vy.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: e.length,
              }),
            e.length % this.wordSize &&
              (e = (0, o.xW)([
                this._padding.slice(e.length % this.wordSize),
                e,
              ])),
            e
          );
        }
        writeValue(r) {
          return this._writeData(this._getValue(r));
        }
        writeUpdatableValue() {
          const r = this._data.length;
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (e) => {
              this._data[r] = this._getValue(e);
            }
          );
        }
      }
      class R {
        constructor(r, e, t, n) {
          a(this, "_data", (0, o.k9)(r)),
            a(this, "wordSize", e || 32),
            a(this, "_coerceFunc", t),
            a(this, "allowLoose", n),
            (this._offset = 0);
        }
        get data() {
          return (0, o.c$)(this._data);
        }
        get consumed() {
          return this._offset;
        }
        static coerce(r, e) {
          let t = r.match("^u?int([0-9]+)$");
          return t && parseInt(t[1]) <= 48 && (e = e.toNumber()), e;
        }
        coerce(r, e) {
          return this._coerceFunc ? this._coerceFunc(r, e) : R.coerce(r, e);
        }
        _peekBytes(r, e, t) {
          let n = Math.ceil(e / this.wordSize) * this.wordSize;
          return (
            this._offset + n > this._data.length &&
              (this.allowLoose && t && this._offset + e <= this._data.length
                ? (n = e)
                : p.throwError(
                    "data out-of-bounds",
                    s.Vy.errors.BUFFER_OVERRUN,
                    { length: this._data.length, offset: this._offset + n }
                  )),
            this._data.slice(this._offset, this._offset + n)
          );
        }
        subReader(r) {
          return new R(
            this._data.slice(this._offset + r),
            this.wordSize,
            this._coerceFunc,
            this.allowLoose
          );
        }
        readBytes(r, e) {
          let t = this._peekBytes(0, r, !!e);
          return (this._offset += t.length), t.slice(0, r);
        }
        readValue() {
          return m.gH.from(this.readBytes(this.wordSize));
        }
      }
      var w = t(12379),
        A = t.n(w);
      function _(r) {
        return "0x" + A().keccak_256((0, o.k9)(r));
      }
      const I = new s.Vy("address/5.8.0");
      function v(r) {
        (0, o.Lo)(r, 20) ||
          I.throwArgumentError("invalid address", "address", r);
        const e = (r = r.toLowerCase()).substring(2).split(""),
          t = new Uint8Array(40);
        for (let o = 0; o < 40; o++) t[o] = e[o].charCodeAt(0);
        const n = (0, o.k9)(_(t));
        for (let o = 0; o < 40; o += 2)
          n[o >> 1] >> 4 >= 8 && (e[o] = e[o].toUpperCase()),
            (15 & n[o >> 1]) >= 8 && (e[o + 1] = e[o + 1].toUpperCase());
        return "0x" + e.join("");
      }
      const b = {};
      for (let zt = 0; zt < 10; zt++) b[String(zt)] = String(zt);
      for (let zt = 0; zt < 26; zt++)
        b[String.fromCharCode(65 + zt)] = String(10 + zt);
      const T = Math.floor(
        ((U = 9007199254740991),
        Math.log10 ? Math.log10(U) : Math.log(U) / Math.LN10)
      );
      var U;
      function O(r) {
        let e = (r =
          (r = r.toUpperCase()).substring(4) + r.substring(0, 2) + "00")
          .split("")
          .map((r) => b[r])
          .join("");
        for (; e.length >= T; ) {
          let r = e.substring(0, T);
          e = (parseInt(r, 10) % 97) + e.substring(r.length);
        }
        let t = String(98 - (parseInt(e, 10) % 97));
        for (; t.length < 2; ) t = "0" + t;
        return t;
      }
      function S(r) {
        let e = null;
        if (
          ("string" !== typeof r &&
            I.throwArgumentError("invalid address", "address", r),
          r.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== r.substring(0, 2) && (r = "0x" + r),
            (e = v(r)),
            r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== r &&
              I.throwArgumentError("bad address checksum", "address", r);
        else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            r.substring(2, 4) !== O(r) &&
              I.throwArgumentError("bad icap checksum", "address", r),
              e = (0, m.Os)(r.substring(4));
            e.length < 40;

          )
            e = "0" + e;
          e = v("0x" + e);
        } else I.throwArgumentError("invalid address", "address", r);
        return e;
      }
      class P extends N {
        constructor(r) {
          super("address", "address", r, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(r, e) {
          try {
            e = S(e);
          } catch (t) {
            this._throwError(t.message, e);
          }
          return r.writeValue(e);
        }
        decode(r) {
          return S((0, o.bj)(r.readValue().toHexString(), 20));
        }
      }
      class C extends N {
        constructor(r) {
          super(r.name, r.type, void 0, r.dynamic), (this.coder = r);
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(r, e) {
          return this.coder.encode(r, e);
        }
        decode(r) {
          return this.coder.decode(r);
        }
      }
      const F = new s.Vy(E);
      function D(r, e, t) {
        let n = null;
        if (Array.isArray(t)) n = t;
        else if (t && "object" === typeof t) {
          let r = {};
          n = e.map((e) => {
            const n = e.localName;
            return (
              n ||
                F.throwError(
                  "cannot encode object for signature with missing names",
                  s.Vy.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: e, value: t }
                ),
              r[n] &&
                F.throwError(
                  "cannot encode object for signature with duplicate names",
                  s.Vy.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: e, value: t }
                ),
              (r[n] = !0),
              t[n]
            );
          });
        } else F.throwArgumentError("invalid tuple value", "tuple", t);
        e.length !== n.length &&
          F.throwArgumentError("types/value length mismatch", "tuple", t);
        let o = new y(r.wordSize),
          i = new y(r.wordSize),
          a = [];
        e.forEach((r, e) => {
          let t = n[e];
          if (r.dynamic) {
            let e = i.length;
            r.encode(i, t);
            let n = o.writeUpdatableValue();
            a.push((r) => {
              n(r + e);
            });
          } else r.encode(o, t);
        }),
          a.forEach((r) => {
            r(o.length);
          });
        let l = r.appendWriter(o);
        return (l += r.appendWriter(i)), l;
      }
      function L(r, e) {
        let t = [],
          n = r.subReader(0);
        e.forEach((e) => {
          let o = null;
          if (e.dynamic) {
            let t = r.readValue(),
              a = n.subReader(t.toNumber());
            try {
              o = e.decode(a);
            } catch (i) {
              if (i.code === s.Vy.errors.BUFFER_OVERRUN) throw i;
              (o = i),
                (o.baseType = e.name),
                (o.name = e.localName),
                (o.type = e.type);
            }
          } else
            try {
              o = e.decode(r);
            } catch (i) {
              if (i.code === s.Vy.errors.BUFFER_OVERRUN) throw i;
              (o = i),
                (o.baseType = e.name),
                (o.name = e.localName),
                (o.type = e.type);
            }
          void 0 != o && t.push(o);
        });
        const o = e.reduce((r, e) => {
          const t = e.localName;
          return t && (r[t] || (r[t] = 0), r[t]++), r;
        }, {});
        e.forEach((r, e) => {
          let n = r.localName;
          if (!n || 1 !== o[n]) return;
          if (("length" === n && (n = "_length"), null != t[n])) return;
          const s = t[e];
          s instanceof Error
            ? Object.defineProperty(t, n, {
                enumerable: !0,
                get: () => {
                  throw s;
                },
              })
            : (t[n] = s);
        });
        for (let s = 0; s < t.length; s++) {
          const r = t[s];
          r instanceof Error &&
            Object.defineProperty(t, s, {
              enumerable: !0,
              get: () => {
                throw r;
              },
            });
        }
        return Object.freeze(t);
      }
      class M extends N {
        constructor(r, e, t) {
          super(
            "array",
            r.type + "[" + (e >= 0 ? e : "") + "]",
            t,
            -1 === e || r.dynamic
          ),
            (this.coder = r),
            (this.length = e);
        }
        defaultValue() {
          const r = this.coder.defaultValue(),
            e = [];
          for (let t = 0; t < this.length; t++) e.push(r);
          return e;
        }
        encode(r, e) {
          Array.isArray(e) || this._throwError("expected array value", e);
          let t = this.length;
          -1 === t && ((t = e.length), r.writeValue(e.length)),
            F.checkArgumentCount(
              e.length,
              t,
              "coder array" + (this.localName ? " " + this.localName : "")
            );
          let n = [];
          for (let o = 0; o < e.length; o++) n.push(this.coder);
          return D(r, n, e);
        }
        decode(r) {
          let e = this.length;
          -1 === e &&
            ((e = r.readValue().toNumber()),
            32 * e > r._data.length &&
              F.throwError(
                "insufficient data length",
                s.Vy.errors.BUFFER_OVERRUN,
                { length: r._data.length, count: e }
              ));
          let t = [];
          for (let n = 0; n < e; n++) t.push(new C(this.coder));
          return r.coerce(this.name, L(r, t));
        }
      }
      class x extends N {
        constructor(r) {
          super("bool", "bool", r, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(r, e) {
          return r.writeValue(e ? 1 : 0);
        }
        decode(r) {
          return r.coerce(this.type, !r.readValue().isZero());
        }
      }
      class k extends N {
        constructor(r, e) {
          super(r, r, e, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(r, e) {
          e = (0, o.k9)(e);
          let t = r.writeValue(e.length);
          return (t += r.writeBytes(e)), t;
        }
        decode(r) {
          return r.readBytes(r.readValue().toNumber(), !0);
        }
      }
      class G extends k {
        constructor(r) {
          super("bytes", r);
        }
        decode(r) {
          return r.coerce(this.name, (0, o.c$)(super.decode(r)));
        }
      }
      class j extends N {
        constructor(r, e) {
          let t = "bytes" + String(r);
          super(t, t, e, !1), (this.size = r);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(r, e) {
          let t = (0, o.k9)(e);
          return (
            t.length !== this.size &&
              this._throwError("incorrect data length", e),
            r.writeBytes(t)
          );
        }
        decode(r) {
          return r.coerce(this.name, (0, o.c$)(r.readBytes(this.size)));
        }
      }
      class V extends N {
        constructor(r) {
          super("null", "", r, !1);
        }
        defaultValue() {
          return null;
        }
        encode(r, e) {
          return null != e && this._throwError("not null", e), r.writeBytes([]);
        }
        decode(r) {
          return r.readBytes(0), r.coerce(this.name, null);
        }
      }
      const W = m.gH.from(-1),
        z = m.gH.from(0),
        B = m.gH.from(1),
        X = m.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      class $ extends N {
        constructor(r, e, t) {
          const n = (e ? "int" : "uint") + 8 * r;
          super(n, n, t, !1), (this.size = r), (this.signed = e);
        }
        defaultValue() {
          return 0;
        }
        encode(r, e) {
          let t = m.gH.from(e),
            n = X.mask(8 * r.wordSize);
          if (this.signed) {
            let r = n.mask(8 * this.size - 1);
            (t.gt(r) || t.lt(r.add(B).mul(W))) &&
              this._throwError("value out-of-bounds", e);
          } else
            (t.lt(z) || t.gt(n.mask(8 * this.size))) &&
              this._throwError("value out-of-bounds", e);
          return (
            (t = t.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed &&
              (t = t.fromTwos(8 * this.size).toTwos(8 * r.wordSize)),
            r.writeValue(t)
          );
        }
        decode(r) {
          let e = r.readValue().mask(8 * this.size);
          return (
            this.signed && (e = e.fromTwos(8 * this.size)),
            r.coerce(this.name, e)
          );
        }
      }
      const K = new s.Vy("strings/5.8.0");
      var J, H;
      function Z(r, e, t, n, o) {
        if (r === H.BAD_PREFIX || r === H.UNEXPECTED_CONTINUE) {
          let r = 0;
          for (let n = e + 1; n < t.length && t[n] >> 6 === 2; n++) r++;
          return r;
        }
        return r === H.OVERRUN ? t.length - e - 1 : 0;
      }
      !(function (r) {
        (r.current = ""),
          (r.NFC = "NFC"),
          (r.NFD = "NFD"),
          (r.NFKC = "NFKC"),
          (r.NFKD = "NFKD");
      })(J || (J = {})),
        (function (r) {
          (r.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (r.BAD_PREFIX = "bad codepoint prefix"),
            (r.OVERRUN = "string overrun"),
            (r.MISSING_CONTINUE = "missing continuation byte"),
            (r.OUT_OF_RANGE = "out of UTF-8 range"),
            (r.UTF16_SURROGATE = "UTF-16 surrogate"),
            (r.OVERLONG = "overlong representation");
        })(H || (H = {}));
      const q = Object.freeze({
        error: function (r, e, t, n, o) {
          return K.throwArgumentError(
            `invalid codepoint at offset ${e}; ${r}`,
            "bytes",
            t
          );
        },
        ignore: Z,
        replace: function (r, e, t, n, o) {
          return r === H.OVERLONG
            ? (n.push(o), 0)
            : (n.push(65533), Z(r, e, t));
        },
      });
      function Y(r, e) {
        null == e && (e = q.error), (r = (0, o.k9)(r));
        const t = [];
        let n = 0;
        for (; n < r.length; ) {
          const o = r[n++];
          if (o >> 7 === 0) {
            t.push(o);
            continue;
          }
          let s = null,
            i = null;
          if (192 === (224 & o)) (s = 1), (i = 127);
          else if (224 === (240 & o)) (s = 2), (i = 2047);
          else {
            if (240 !== (248 & o)) {
              n += e(
                128 === (192 & o) ? H.UNEXPECTED_CONTINUE : H.BAD_PREFIX,
                n - 1,
                r,
                t
              );
              continue;
            }
            (s = 3), (i = 65535);
          }
          if (n - 1 + s >= r.length) {
            n += e(H.OVERRUN, n - 1, r, t);
            continue;
          }
          let a = o & ((1 << (8 - s - 1)) - 1);
          for (let l = 0; l < s; l++) {
            let o = r[n];
            if (128 != (192 & o)) {
              (n += e(H.MISSING_CONTINUE, n, r, t)), (a = null);
              break;
            }
            (a = (a << 6) | (63 & o)), n++;
          }
          null !== a &&
            (a > 1114111
              ? (n += e(H.OUT_OF_RANGE, n - 1 - s, r, t, a))
              : a >= 55296 && a <= 57343
              ? (n += e(H.UTF16_SURROGATE, n - 1 - s, r, t, a))
              : a <= i
              ? (n += e(H.OVERLONG, n - 1 - s, r, t, a))
              : t.push(a));
        }
        return t;
      }
      function Q(r) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : J.current;
        e != J.current && (K.checkNormalize(), (r = r.normalize(e)));
        let t = [];
        for (let n = 0; n < r.length; n++) {
          const e = r.charCodeAt(n);
          if (e < 128) t.push(e);
          else if (e < 2048) t.push((e >> 6) | 192), t.push((63 & e) | 128);
          else if (55296 == (64512 & e)) {
            n++;
            const o = r.charCodeAt(n);
            if (n >= r.length || 56320 !== (64512 & o))
              throw new Error("invalid utf-8 string");
            const s = 65536 + ((1023 & e) << 10) + (1023 & o);
            t.push((s >> 18) | 240),
              t.push(((s >> 12) & 63) | 128),
              t.push(((s >> 6) & 63) | 128),
              t.push((63 & s) | 128);
          } else
            t.push((e >> 12) | 224),
              t.push(((e >> 6) & 63) | 128),
              t.push((63 & e) | 128);
        }
        return (0, o.k9)(t);
      }
      function rr(r, e) {
        return Y(r, e)
          .map((r) =>
            r <= 65535
              ? String.fromCharCode(r)
              : ((r -= 65536),
                String.fromCharCode(
                  55296 + ((r >> 10) & 1023),
                  56320 + (1023 & r)
                ))
          )
          .join("");
      }
      class er extends k {
        constructor(r) {
          super("string", r);
        }
        defaultValue() {
          return "";
        }
        encode(r, e) {
          return super.encode(r, Q(e));
        }
        decode(r) {
          return rr(super.decode(r));
        }
      }
      class tr extends N {
        constructor(r, e) {
          let t = !1;
          const n = [];
          r.forEach((r) => {
            r.dynamic && (t = !0), n.push(r.type);
          });
          super("tuple", "tuple(" + n.join(",") + ")", e, t), (this.coders = r);
        }
        defaultValue() {
          const r = [];
          this.coders.forEach((e) => {
            r.push(e.defaultValue());
          });
          const e = this.coders.reduce((r, e) => {
            const t = e.localName;
            return t && (r[t] || (r[t] = 0), r[t]++), r;
          }, {});
          return (
            this.coders.forEach((t, n) => {
              let o = t.localName;
              o &&
                1 === e[o] &&
                ("length" === o && (o = "_length"),
                null == r[o] && (r[o] = r[n]));
            }),
            Object.freeze(r)
          );
        }
        encode(r, e) {
          return D(r, this.coders, e);
        }
        decode(r) {
          return r.coerce(this.name, L(r, this.coders));
        }
      }
      const nr = new s.Vy(E),
        or = {};
      let sr = { calldata: !0, memory: !0, storage: !0 },
        ir = { calldata: !0, memory: !0 };
      function ar(r, e) {
        if ("bytes" === r || "string" === r) {
          if (sr[e]) return !0;
        } else if ("address" === r) {
          if ("payable" === e) return !0;
        } else if ((r.indexOf("[") >= 0 || "tuple" === r) && ir[e]) return !0;
        return (
          (sr[e] || "payable" === e) &&
            nr.throwArgumentError("invalid modifier", "name", e),
          !1
        );
      }
      function lr(r, e) {
        for (let t in e) a(r, t, e[t]);
      }
      const ur = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        }),
        cr = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class hr {
        constructor(r, e) {
          r !== or &&
            nr.throwError("use fromString", s.Vy.errors.UNSUPPORTED_OPERATION, {
              operation: "new ParamType()",
            }),
            lr(this, e);
          let t = this.type.match(cr);
          lr(
            this,
            t
              ? {
                  arrayLength: parseInt(t[2] || "-1"),
                  arrayChildren: hr.fromObject({
                    type: t[1],
                    components: this.components,
                  }),
                  baseType: "array",
                }
              : {
                  arrayLength: null,
                  arrayChildren: null,
                  baseType: null != this.components ? "tuple" : this.type,
                }
          ),
            (this._isParamType = !0),
            Object.freeze(this);
        }
        format(r) {
          if (
            (r || (r = ur.sighash),
            ur[r] || nr.throwArgumentError("invalid format type", "format", r),
            r === ur.json)
          ) {
            let e = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" === typeof this.indexed && (e.indexed = this.indexed),
              this.components &&
                (e.components = this.components.map((e) =>
                  JSON.parse(e.format(r))
                )),
              JSON.stringify(e)
            );
          }
          let e = "";
          return (
            "array" === this.baseType
              ? ((e += this.arrayChildren.format(r)),
                (e +=
                  "[" +
                  (this.arrayLength < 0 ? "" : String(this.arrayLength)) +
                  "]"))
              : "tuple" === this.baseType
              ? (r !== ur.sighash && (e += this.type),
                (e +=
                  "(" +
                  this.components
                    .map((e) => e.format(r))
                    .join(r === ur.full ? ", " : ",") +
                  ")"))
              : (e += this.type),
            r !== ur.sighash &&
              (!0 === this.indexed && (e += " indexed"),
              r === ur.full && this.name && (e += " " + this.name)),
            e
          );
        }
        static from(r, e) {
          return "string" === typeof r ? hr.fromString(r, e) : hr.fromObject(r);
        }
        static fromObject(r) {
          return hr.isParamType(r)
            ? r
            : new hr(or, {
                name: r.name || null,
                type: Ar(r.type),
                indexed: null == r.indexed ? null : !!r.indexed,
                components: r.components
                  ? r.components.map(hr.fromObject)
                  : null,
              });
        }
        static fromString(r, e) {
          return (
            (t = (function (r, e) {
              let t = r;
              function n(e) {
                nr.throwArgumentError(
                  `unexpected character at position ${e}`,
                  "param",
                  r
                );
              }
              function o(r) {
                let t = {
                  type: "",
                  name: "",
                  parent: r,
                  state: { allowType: !0 },
                };
                return e && (t.indexed = !1), t;
              }
              r = r.replace(/\s/g, " ");
              let s = { type: "", name: "", state: { allowType: !0 } },
                i = s;
              for (let a = 0; a < r.length; a++) {
                let t = r[a];
                switch (t) {
                  case "(":
                    i.state.allowType && "" === i.type
                      ? (i.type = "tuple")
                      : i.state.allowParams || n(a),
                      (i.state.allowType = !1),
                      (i.type = Ar(i.type)),
                      (i.components = [o(i)]),
                      (i = i.components[0]);
                    break;
                  case ")":
                    delete i.state,
                      "indexed" === i.name &&
                        (e || n(a), (i.indexed = !0), (i.name = "")),
                      ar(i.type, i.name) && (i.name = ""),
                      (i.type = Ar(i.type));
                    let r = i;
                    (i = i.parent),
                      i || n(a),
                      delete r.parent,
                      (i.state.allowParams = !1),
                      (i.state.allowName = !0),
                      (i.state.allowArray = !0);
                    break;
                  case ",":
                    delete i.state,
                      "indexed" === i.name &&
                        (e || n(a), (i.indexed = !0), (i.name = "")),
                      ar(i.type, i.name) && (i.name = ""),
                      (i.type = Ar(i.type));
                    let s = o(i.parent);
                    i.parent.components.push(s), delete i.parent, (i = s);
                    break;
                  case " ":
                    i.state.allowType &&
                      "" !== i.type &&
                      ((i.type = Ar(i.type)),
                      delete i.state.allowType,
                      (i.state.allowName = !0),
                      (i.state.allowParams = !0)),
                      i.state.allowName &&
                        "" !== i.name &&
                        ("indexed" === i.name
                          ? (e || n(a),
                            i.indexed && n(a),
                            (i.indexed = !0),
                            (i.name = ""))
                          : ar(i.type, i.name)
                          ? (i.name = "")
                          : (i.state.allowName = !1));
                    break;
                  case "[":
                    i.state.allowArray || n(a),
                      (i.type += t),
                      (i.state.allowArray = !1),
                      (i.state.allowName = !1),
                      (i.state.readArray = !0);
                    break;
                  case "]":
                    i.state.readArray || n(a),
                      (i.type += t),
                      (i.state.readArray = !1),
                      (i.state.allowArray = !0),
                      (i.state.allowName = !0);
                    break;
                  default:
                    i.state.allowType
                      ? ((i.type += t),
                        (i.state.allowParams = !0),
                        (i.state.allowArray = !0))
                      : i.state.allowName
                      ? ((i.name += t), delete i.state.allowArray)
                      : i.state.readArray
                      ? (i.type += t)
                      : n(a);
                }
              }
              return (
                i.parent && nr.throwArgumentError("unexpected eof", "param", r),
                delete s.state,
                "indexed" === i.name
                  ? (e || n(t.length - 7),
                    i.indexed && n(t.length - 7),
                    (i.indexed = !0),
                    (i.name = ""))
                  : ar(i.type, i.name) && (i.name = ""),
                (s.type = Ar(s.type)),
                s
              );
            })(r, !!e)),
            hr.fromObject({
              name: t.name,
              type: t.type,
              indexed: t.indexed,
              components: t.components,
            })
          );
          var t;
        }
        static isParamType(r) {
          return !(null == r || !r._isParamType);
        }
      }
      function fr(r, e) {
        return (function (r) {
          r = r.trim();
          let e = [],
            t = "",
            n = 0;
          for (let o = 0; o < r.length; o++) {
            let s = r[o];
            "," === s && 0 === n
              ? (e.push(t), (t = ""))
              : ((t += s),
                "(" === s
                  ? n++
                  : ")" === s &&
                    (n--,
                    -1 === n &&
                      nr.throwArgumentError(
                        "unbalanced parenthesis",
                        "value",
                        r
                      )));
          }
          t && e.push(t);
          return e;
        })(r).map((r) => hr.fromString(r, e));
      }
      class gr {
        constructor(r, e) {
          r !== or &&
            nr.throwError(
              "use a static from method",
              s.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" }
            ),
            lr(this, e),
            (this._isFragment = !0),
            Object.freeze(this);
        }
        static from(r) {
          return gr.isFragment(r)
            ? r
            : "string" === typeof r
            ? gr.fromString(r)
            : gr.fromObject(r);
        }
        static fromObject(r) {
          if (gr.isFragment(r)) return r;
          switch (r.type) {
            case "function":
              return yr.fromObject(r);
            case "event":
              return Er.fromObject(r);
            case "constructor":
              return Nr.fromObject(r);
            case "error":
              return wr.fromObject(r);
            case "fallback":
            case "receive":
              return null;
          }
          return nr.throwArgumentError("invalid fragment object", "value", r);
        }
        static fromString(r) {
          return "event" ===
            (r = (r = (r = r.replace(/\s/g, " "))
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")).trim()).split(" ")[0]
            ? Er.fromString(r.substring(5).trim())
            : "function" === r.split(" ")[0]
            ? yr.fromString(r.substring(8).trim())
            : "constructor" === r.split("(")[0].trim()
            ? Nr.fromString(r.trim())
            : "error" === r.split(" ")[0]
            ? wr.fromString(r.substring(5).trim())
            : nr.throwArgumentError("unsupported fragment", "value", r);
        }
        static isFragment(r) {
          return !(!r || !r._isFragment);
        }
      }
      class Er extends gr {
        format(r) {
          if (
            (r || (r = ur.sighash),
            ur[r] || nr.throwArgumentError("invalid format type", "format", r),
            r === ur.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(r))),
            });
          let e = "";
          return (
            r !== ur.sighash && (e += "event "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(r))
                .join(r === ur.full ? ", " : ",") +
              ") "),
            r !== ur.sighash && this.anonymous && (e += "anonymous "),
            e.trim()
          );
        }
        static from(r) {
          return "string" === typeof r ? Er.fromString(r) : Er.fromObject(r);
        }
        static fromObject(r) {
          if (Er.isEventFragment(r)) return r;
          "event" !== r.type &&
            nr.throwArgumentError("invalid event object", "value", r);
          const e = {
            name: Ir(r.name),
            anonymous: r.anonymous,
            inputs: r.inputs ? r.inputs.map(hr.fromObject) : [],
            type: "event",
          };
          return new Er(or, e);
        }
        static fromString(r) {
          let e = r.match(vr);
          e || nr.throwArgumentError("invalid event string", "value", r);
          let t = !1;
          return (
            e[3].split(" ").forEach((r) => {
              switch (r.trim()) {
                case "anonymous":
                  t = !0;
                  break;
                case "":
                  break;
                default:
                  nr.warn("unknown modifier: " + r);
              }
            }),
            Er.fromObject({
              name: e[1].trim(),
              anonymous: t,
              inputs: fr(e[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(r) {
          return r && r._isFragment && "event" === r.type;
        }
      }
      function mr(r, e) {
        e.gas = null;
        let t = r.split("@");
        return 1 !== t.length
          ? (t.length > 2 &&
              nr.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                r
              ),
            t[1].match(/^[0-9]+$/) ||
              nr.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                r
              ),
            (e.gas = m.gH.from(t[1])),
            t[0])
          : r;
      }
      function pr(r, e) {
        (e.constant = !1),
          (e.payable = !1),
          (e.stateMutability = "nonpayable"),
          r.split(" ").forEach((r) => {
            switch (r.trim()) {
              case "constant":
                e.constant = !0;
                break;
              case "payable":
                (e.payable = !0), (e.stateMutability = "payable");
                break;
              case "nonpayable":
                (e.payable = !1), (e.stateMutability = "nonpayable");
                break;
              case "pure":
                (e.constant = !0), (e.stateMutability = "pure");
                break;
              case "view":
                (e.constant = !0), (e.stateMutability = "view");
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                console.log("unknown modifier: " + r);
            }
          });
      }
      function dr(r) {
        let e = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != r.stateMutability
            ? ((e.stateMutability = r.stateMutability),
              (e.constant =
                "view" === e.stateMutability || "pure" === e.stateMutability),
              null != r.constant &&
                !!r.constant !== e.constant &&
                nr.throwArgumentError(
                  "cannot have constant function with mutability " +
                    e.stateMutability,
                  "value",
                  r
                ),
              (e.payable = "payable" === e.stateMutability),
              null != r.payable &&
                !!r.payable !== e.payable &&
                nr.throwArgumentError(
                  "cannot have payable function with mutability " +
                    e.stateMutability,
                  "value",
                  r
                ))
            : null != r.payable
            ? ((e.payable = !!r.payable),
              null != r.constant ||
                e.payable ||
                "constructor" === r.type ||
                nr.throwArgumentError(
                  "unable to determine stateMutability",
                  "value",
                  r
                ),
              (e.constant = !!r.constant),
              e.constant
                ? (e.stateMutability = "view")
                : (e.stateMutability = e.payable ? "payable" : "nonpayable"),
              e.payable &&
                e.constant &&
                nr.throwArgumentError(
                  "cannot have constant payable function",
                  "value",
                  r
                ))
            : null != r.constant
            ? ((e.constant = !!r.constant),
              (e.payable = !e.constant),
              (e.stateMutability = e.constant ? "view" : "payable"))
            : "constructor" !== r.type &&
              nr.throwArgumentError(
                "unable to determine stateMutability",
                "value",
                r
              ),
          e
        );
      }
      class Nr extends gr {
        format(r) {
          if (
            (r || (r = ur.sighash),
            ur[r] || nr.throwArgumentError("invalid format type", "format", r),
            r === ur.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(r))),
            });
          r === ur.sighash &&
            nr.throwError(
              "cannot format a constructor for sighash",
              s.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" }
            );
          let e =
            "constructor(" +
            this.inputs
              .map((e) => e.format(r))
              .join(r === ur.full ? ", " : ",") +
            ") ";
          return (
            this.stateMutability &&
              "nonpayable" !== this.stateMutability &&
              (e += this.stateMutability + " "),
            e.trim()
          );
        }
        static from(r) {
          return "string" === typeof r ? Nr.fromString(r) : Nr.fromObject(r);
        }
        static fromObject(r) {
          if (Nr.isConstructorFragment(r)) return r;
          "constructor" !== r.type &&
            nr.throwArgumentError("invalid constructor object", "value", r);
          let e = dr(r);
          e.constant &&
            nr.throwArgumentError("constructor cannot be constant", "value", r);
          const t = {
            name: null,
            type: r.type,
            inputs: r.inputs ? r.inputs.map(hr.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: r.gas ? m.gH.from(r.gas) : null,
          };
          return new Nr(or, t);
        }
        static fromString(r) {
          let e = { type: "constructor" },
            t = (r = mr(r, e)).match(vr);
          return (
            (t && "constructor" === t[1].trim()) ||
              nr.throwArgumentError("invalid constructor string", "value", r),
            (e.inputs = fr(t[2].trim(), !1)),
            pr(t[3].trim(), e),
            Nr.fromObject(e)
          );
        }
        static isConstructorFragment(r) {
          return r && r._isFragment && "constructor" === r.type;
        }
      }
      class yr extends Nr {
        format(r) {
          if (
            (r || (r = ur.sighash),
            ur[r] || nr.throwArgumentError("invalid format type", "format", r),
            r === ur.json)
          )
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(r))),
              outputs: this.outputs.map((e) => JSON.parse(e.format(r))),
            });
          let e = "";
          return (
            r !== ur.sighash && (e += "function "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(r))
                .join(r === ur.full ? ", " : ",") +
              ") "),
            r !== ur.sighash &&
              (this.stateMutability
                ? "nonpayable" !== this.stateMutability &&
                  (e += this.stateMutability + " ")
                : this.constant && (e += "view "),
              this.outputs &&
                this.outputs.length &&
                (e +=
                  "returns (" +
                  this.outputs.map((e) => e.format(r)).join(", ") +
                  ") "),
              null != this.gas && (e += "@" + this.gas.toString() + " ")),
            e.trim()
          );
        }
        static from(r) {
          return "string" === typeof r ? yr.fromString(r) : yr.fromObject(r);
        }
        static fromObject(r) {
          if (yr.isFunctionFragment(r)) return r;
          "function" !== r.type &&
            nr.throwArgumentError("invalid function object", "value", r);
          let e = dr(r);
          const t = {
            type: r.type,
            name: Ir(r.name),
            constant: e.constant,
            inputs: r.inputs ? r.inputs.map(hr.fromObject) : [],
            outputs: r.outputs ? r.outputs.map(hr.fromObject) : [],
            payable: e.payable,
            stateMutability: e.stateMutability,
            gas: r.gas ? m.gH.from(r.gas) : null,
          };
          return new yr(or, t);
        }
        static fromString(r) {
          let e = { type: "function" },
            t = (r = mr(r, e)).split(" returns ");
          t.length > 2 &&
            nr.throwArgumentError("invalid function string", "value", r);
          let n = t[0].match(vr);
          if (
            (n ||
              nr.throwArgumentError("invalid function signature", "value", r),
            (e.name = n[1].trim()),
            e.name && Ir(e.name),
            (e.inputs = fr(n[2], !1)),
            pr(n[3].trim(), e),
            t.length > 1)
          ) {
            let n = t[1].match(vr);
            ("" == n[1].trim() && "" == n[3].trim()) ||
              nr.throwArgumentError("unexpected tokens", "value", r),
              (e.outputs = fr(n[2], !1));
          } else e.outputs = [];
          return yr.fromObject(e);
        }
        static isFunctionFragment(r) {
          return r && r._isFragment && "function" === r.type;
        }
      }
      function Rr(r) {
        const e = r.format();
        return (
          ("Error(string)" !== e && "Panic(uint256)" !== e) ||
            nr.throwArgumentError(
              `cannot specify user defined ${e} error`,
              "fragment",
              r
            ),
          r
        );
      }
      class wr extends gr {
        format(r) {
          if (
            (r || (r = ur.sighash),
            ur[r] || nr.throwArgumentError("invalid format type", "format", r),
            r === ur.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(r))),
            });
          let e = "";
          return (
            r !== ur.sighash && (e += "error "),
            (e +=
              this.name +
              "(" +
              this.inputs
                .map((e) => e.format(r))
                .join(r === ur.full ? ", " : ",") +
              ") "),
            e.trim()
          );
        }
        static from(r) {
          return "string" === typeof r ? wr.fromString(r) : wr.fromObject(r);
        }
        static fromObject(r) {
          if (wr.isErrorFragment(r)) return r;
          "error" !== r.type &&
            nr.throwArgumentError("invalid error object", "value", r);
          const e = {
            type: r.type,
            name: Ir(r.name),
            inputs: r.inputs ? r.inputs.map(hr.fromObject) : [],
          };
          return Rr(new wr(or, e));
        }
        static fromString(r) {
          let e = { type: "error" },
            t = r.match(vr);
          return (
            t || nr.throwArgumentError("invalid error signature", "value", r),
            (e.name = t[1].trim()),
            e.name && Ir(e.name),
            (e.inputs = fr(t[2], !1)),
            Rr(wr.fromObject(e))
          );
        }
        static isErrorFragment(r) {
          return r && r._isFragment && "error" === r.type;
        }
      }
      function Ar(r) {
        return (
          r.match(/^uint($|[^1-9])/)
            ? (r = "uint256" + r.substring(4))
            : r.match(/^int($|[^1-9])/) && (r = "int256" + r.substring(3)),
          r
        );
      }
      const _r = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function Ir(r) {
        return (
          (r && r.match(_r)) ||
            nr.throwArgumentError(`invalid identifier "${r}"`, "value", r),
          r
        );
      }
      const vr = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
      const br = new s.Vy(E),
        Tr = new RegExp(/^bytes([0-9]*)$/),
        Ur = new RegExp(/^(u?int)([0-9]*)$/);
      class Or {
        constructor(r) {
          a(this, "coerceFunc", r || null);
        }
        _getCoder(r) {
          switch (r.baseType) {
            case "address":
              return new P(r.name);
            case "bool":
              return new x(r.name);
            case "string":
              return new er(r.name);
            case "bytes":
              return new G(r.name);
            case "array":
              return new M(
                this._getCoder(r.arrayChildren),
                r.arrayLength,
                r.name
              );
            case "tuple":
              return new tr(
                (r.components || []).map((r) => this._getCoder(r)),
                r.name
              );
            case "":
              return new V(r.name);
          }
          let e = r.type.match(Ur);
          if (e) {
            let t = parseInt(e[2] || "256");
            return (
              (0 === t || t > 256 || t % 8 !== 0) &&
                br.throwArgumentError(
                  "invalid " + e[1] + " bit length",
                  "param",
                  r
                ),
              new $(t / 8, "int" === e[1], r.name)
            );
          }
          if (((e = r.type.match(Tr)), e)) {
            let t = parseInt(e[1]);
            return (
              (0 === t || t > 32) &&
                br.throwArgumentError("invalid bytes length", "param", r),
              new j(t, r.name)
            );
          }
          return br.throwArgumentError("invalid type", "type", r.type);
        }
        _getWordSize() {
          return 32;
        }
        _getReader(r, e) {
          return new R(r, this._getWordSize(), this.coerceFunc, e);
        }
        _getWriter() {
          return new y(this._getWordSize());
        }
        getDefaultValue(r) {
          const e = r.map((r) => this._getCoder(hr.from(r)));
          return new tr(e, "_").defaultValue();
        }
        encode(r, e) {
          r.length !== e.length &&
            br.throwError(
              "types/values length mismatch",
              s.Vy.errors.INVALID_ARGUMENT,
              {
                count: { types: r.length, values: e.length },
                value: { types: r, values: e },
              }
            );
          const t = r.map((r) => this._getCoder(hr.from(r))),
            n = new tr(t, "_"),
            o = this._getWriter();
          return n.encode(o, e), o.data;
        }
        decode(r, e, t) {
          const n = r.map((r) => this._getCoder(hr.from(r)));
          return new tr(n, "_").decode(this._getReader((0, o.k9)(e), t));
        }
      }
      const Sr = new Or();
      function Pr(r) {
        return _(Q(r));
      }
      const Cr = new s.Vy(E);
      class Fr extends g {}
      class Dr extends g {}
      class Lr extends g {}
      class Mr extends g {
        static isIndexed(r) {
          return !(!r || !r._isIndexed);
        }
      }
      const xr = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0,
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"],
        },
      };
      function kr(r, e) {
        const t = new Error(
          `deferred error during ABI decoding triggered accessing ${r}`
        );
        return (t.error = e), t;
      }
      class Gr {
        constructor(r) {
          let e = [];
          (e = "string" === typeof r ? JSON.parse(r) : r),
            a(
              this,
              "fragments",
              e.map((r) => gr.from(r)).filter((r) => null != r)
            ),
            a(this, "_abiCoder", l(new.target, "getAbiCoder")()),
            a(this, "functions", {}),
            a(this, "errors", {}),
            a(this, "events", {}),
            a(this, "structs", {}),
            this.fragments.forEach((r) => {
              let e = null;
              switch (r.type) {
                case "constructor":
                  return this.deploy
                    ? void Cr.warn("duplicate definition - constructor")
                    : void a(this, "deploy", r);
                case "function":
                  e = this.functions;
                  break;
                case "event":
                  e = this.events;
                  break;
                case "error":
                  e = this.errors;
                  break;
                default:
                  return;
              }
              let t = r.format();
              e[t] ? Cr.warn("duplicate definition - " + t) : (e[t] = r);
            }),
            this.deploy ||
              a(this, "deploy", Nr.from({ payable: !1, type: "constructor" })),
            a(this, "_isInterface", !0);
        }
        format(r) {
          r || (r = ur.full),
            r === ur.sighash &&
              Cr.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                r
              );
          const e = this.fragments.map((e) => e.format(r));
          return r === ur.json
            ? JSON.stringify(e.map((r) => JSON.parse(r)))
            : e;
        }
        static getAbiCoder() {
          return Sr;
        }
        static getAddress(r) {
          return S(r);
        }
        static getSighash(r) {
          return (0, o.Ab)(Pr(r.format()), 0, 4);
        }
        static getEventTopic(r) {
          return Pr(r.format());
        }
        getFunction(r) {
          if ((0, o.Lo)(r)) {
            for (const e in this.functions)
              if (r === this.getSighash(e)) return this.functions[e];
            Cr.throwArgumentError("no matching function", "sighash", r);
          }
          if (-1 === r.indexOf("(")) {
            const e = r.trim(),
              t = Object.keys(this.functions).filter(
                (r) => r.split("(")[0] === e
              );
            return (
              0 === t.length
                ? Cr.throwArgumentError("no matching function", "name", e)
                : t.length > 1 &&
                  Cr.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    e
                  ),
              this.functions[t[0]]
            );
          }
          const e = this.functions[yr.fromString(r).format()];
          return (
            e || Cr.throwArgumentError("no matching function", "signature", r),
            e
          );
        }
        getEvent(r) {
          if ((0, o.Lo)(r)) {
            const e = r.toLowerCase();
            for (const r in this.events)
              if (e === this.getEventTopic(r)) return this.events[r];
            Cr.throwArgumentError("no matching event", "topichash", e);
          }
          if (-1 === r.indexOf("(")) {
            const e = r.trim(),
              t = Object.keys(this.events).filter((r) => r.split("(")[0] === e);
            return (
              0 === t.length
                ? Cr.throwArgumentError("no matching event", "name", e)
                : t.length > 1 &&
                  Cr.throwArgumentError("multiple matching events", "name", e),
              this.events[t[0]]
            );
          }
          const e = this.events[Er.fromString(r).format()];
          return (
            e || Cr.throwArgumentError("no matching event", "signature", r), e
          );
        }
        getError(r) {
          if ((0, o.Lo)(r)) {
            const e = l(this.constructor, "getSighash");
            for (const t in this.errors) {
              if (r === e(this.errors[t])) return this.errors[t];
            }
            Cr.throwArgumentError("no matching error", "sighash", r);
          }
          if (-1 === r.indexOf("(")) {
            const e = r.trim(),
              t = Object.keys(this.errors).filter((r) => r.split("(")[0] === e);
            return (
              0 === t.length
                ? Cr.throwArgumentError("no matching error", "name", e)
                : t.length > 1 &&
                  Cr.throwArgumentError("multiple matching errors", "name", e),
              this.errors[t[0]]
            );
          }
          const e = this.errors[yr.fromString(r).format()];
          return (
            e || Cr.throwArgumentError("no matching error", "signature", r), e
          );
        }
        getSighash(r) {
          if ("string" === typeof r)
            try {
              r = this.getFunction(r);
            } catch (e) {
              try {
                r = this.getError(r);
              } catch (t) {
                throw e;
              }
            }
          return l(this.constructor, "getSighash")(r);
        }
        getEventTopic(r) {
          return (
            "string" === typeof r && (r = this.getEvent(r)),
            l(this.constructor, "getEventTopic")(r)
          );
        }
        _decodeParams(r, e) {
          return this._abiCoder.decode(r, e);
        }
        _encodeParams(r, e) {
          return this._abiCoder.encode(r, e);
        }
        encodeDeploy(r) {
          return this._encodeParams(this.deploy.inputs, r || []);
        }
        decodeErrorResult(r, e) {
          "string" === typeof r && (r = this.getError(r));
          const t = (0, o.k9)(e);
          return (
            (0, o.c$)(t.slice(0, 4)) !== this.getSighash(r) &&
              Cr.throwArgumentError(
                `data signature does not match error ${r.name}.`,
                "data",
                (0, o.c$)(t)
              ),
            this._decodeParams(r.inputs, t.slice(4))
          );
        }
        encodeErrorResult(r, e) {
          return (
            "string" === typeof r && (r = this.getError(r)),
            (0, o.c$)(
              (0, o.xW)([
                this.getSighash(r),
                this._encodeParams(r.inputs, e || []),
              ])
            )
          );
        }
        decodeFunctionData(r, e) {
          "string" === typeof r && (r = this.getFunction(r));
          const t = (0, o.k9)(e);
          return (
            (0, o.c$)(t.slice(0, 4)) !== this.getSighash(r) &&
              Cr.throwArgumentError(
                `data signature does not match function ${r.name}.`,
                "data",
                (0, o.c$)(t)
              ),
            this._decodeParams(r.inputs, t.slice(4))
          );
        }
        encodeFunctionData(r, e) {
          return (
            "string" === typeof r && (r = this.getFunction(r)),
            (0, o.c$)(
              (0, o.xW)([
                this.getSighash(r),
                this._encodeParams(r.inputs, e || []),
              ])
            )
          );
        }
        decodeFunctionResult(r, e) {
          "string" === typeof r && (r = this.getFunction(r));
          let t = (0, o.k9)(e),
            n = null,
            i = "",
            a = null,
            l = null,
            u = null;
          switch (t.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(r.outputs, t);
              } catch (c) {}
              break;
            case 4: {
              const r = (0, o.c$)(t.slice(0, 4)),
                e = xr[r];
              if (e)
                (a = this._abiCoder.decode(e.inputs, t.slice(4))),
                  (l = e.name),
                  (u = e.signature),
                  e.reason && (n = a[0]),
                  "Error" === l
                    ? (i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(
                        a[0]
                      )}`)
                    : "Panic" === l &&
                      (i = `; VM Exception while processing transaction: reverted with panic code ${a[0]}`);
              else
                try {
                  const e = this.getError(r);
                  (a = this._abiCoder.decode(e.inputs, t.slice(4))),
                    (l = e.name),
                    (u = e.format());
                } catch (c) {}
              break;
            }
          }
          return Cr.throwError(
            "call revert exception" + i,
            s.Vy.errors.CALL_EXCEPTION,
            {
              method: r.format(),
              data: (0, o.c$)(e),
              errorArgs: a,
              errorName: l,
              errorSignature: u,
              reason: n,
            }
          );
        }
        encodeFunctionResult(r, e) {
          return (
            "string" === typeof r && (r = this.getFunction(r)),
            (0, o.c$)(this._abiCoder.encode(r.outputs, e || []))
          );
        }
        encodeFilterTopics(r, e) {
          "string" === typeof r && (r = this.getEvent(r)),
            e.length > r.inputs.length &&
              Cr.throwError(
                "too many arguments for " + r.format(),
                s.Vy.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: e }
              );
          let t = [];
          r.anonymous || t.push(this.getEventTopic(r));
          const n = (r, e) =>
            "string" === r.type
              ? Pr(e)
              : "bytes" === r.type
              ? _((0, o.c$)(e))
              : ("address" === r.type &&
                  this._abiCoder.encode(["address"], [e]),
                (0, o.bj)((0, o.c$)(e), 32));
          for (
            e.forEach((e, o) => {
              let s = r.inputs[o];
              s.indexed
                ? null == e
                  ? t.push(null)
                  : "array" === s.baseType || "tuple" === s.baseType
                  ? Cr.throwArgumentError(
                      "filtering with tuples or arrays not supported",
                      "contract." + s.name,
                      e
                    )
                  : Array.isArray(e)
                  ? t.push(e.map((r) => n(s, r)))
                  : t.push(n(s, e))
                : null != e &&
                  Cr.throwArgumentError(
                    "cannot filter non-indexed parameters; must be null",
                    "contract." + s.name,
                    e
                  );
            });
            t.length && null === t[t.length - 1];

          )
            t.pop();
          return t;
        }
        encodeEventLog(r, e) {
          "string" === typeof r && (r = this.getEvent(r));
          const t = [],
            n = [],
            o = [];
          return (
            r.anonymous || t.push(this.getEventTopic(r)),
            e.length !== r.inputs.length &&
              Cr.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                e
              ),
            r.inputs.forEach((r, s) => {
              const i = e[s];
              if (r.indexed)
                if ("string" === r.type) t.push(Pr(i));
                else if ("bytes" === r.type) t.push(_(i));
                else {
                  if ("tuple" === r.baseType || "array" === r.baseType)
                    throw new Error("not implemented");
                  t.push(this._abiCoder.encode([r.type], [i]));
                }
              else n.push(r), o.push(i);
            }),
            { data: this._abiCoder.encode(n, o), topics: t }
          );
        }
        decodeEventLog(r, e, t) {
          if (
            ("string" === typeof r && (r = this.getEvent(r)),
            null != t && !r.anonymous)
          ) {
            let e = this.getEventTopic(r);
            ((0, o.Lo)(t[0], 32) && t[0].toLowerCase() === e) ||
              Cr.throwError(
                "fragment/topic mismatch",
                s.Vy.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: e, value: t[0] }
              ),
              (t = t.slice(1));
          }
          let n = [],
            i = [],
            a = [];
          r.inputs.forEach((r, e) => {
            r.indexed
              ? "string" === r.type ||
                "bytes" === r.type ||
                "tuple" === r.baseType ||
                "array" === r.baseType
                ? (n.push(hr.fromObject({ type: "bytes32", name: r.name })),
                  a.push(!0))
                : (n.push(r), a.push(!1))
              : (i.push(r), a.push(!1));
          });
          let l = null != t ? this._abiCoder.decode(n, (0, o.xW)(t)) : null,
            u = this._abiCoder.decode(i, e, !0),
            c = [],
            h = 0,
            f = 0;
          r.inputs.forEach((r, e) => {
            if (r.indexed)
              if (null == l) c[e] = new Mr({ _isIndexed: !0, hash: null });
              else if (a[e]) c[e] = new Mr({ _isIndexed: !0, hash: l[f++] });
              else
                try {
                  c[e] = l[f++];
                } catch (t) {
                  c[e] = t;
                }
            else
              try {
                c[e] = u[h++];
              } catch (t) {
                c[e] = t;
              }
            if (r.name && null == c[r.name]) {
              const t = c[e];
              t instanceof Error
                ? Object.defineProperty(c, r.name, {
                    enumerable: !0,
                    get: () => {
                      throw kr(`property ${JSON.stringify(r.name)}`, t);
                    },
                  })
                : (c[r.name] = t);
            }
          });
          for (let o = 0; o < c.length; o++) {
            const r = c[o];
            r instanceof Error &&
              Object.defineProperty(c, o, {
                enumerable: !0,
                get: () => {
                  throw kr(`index ${o}`, r);
                },
              });
          }
          return Object.freeze(c);
        }
        parseTransaction(r) {
          let e = this.getFunction(r.data.substring(0, 10).toLowerCase());
          return e
            ? new Dr({
                args: this._abiCoder.decode(
                  e.inputs,
                  "0x" + r.data.substring(10)
                ),
                functionFragment: e,
                name: e.name,
                signature: e.format(),
                sighash: this.getSighash(e),
                value: m.gH.from(r.value || "0"),
              })
            : null;
        }
        parseLog(r) {
          let e = this.getEvent(r.topics[0]);
          return !e || e.anonymous
            ? null
            : new Fr({
                eventFragment: e,
                name: e.name,
                signature: e.format(),
                topic: this.getEventTopic(e),
                args: this.decodeEventLog(e, r.data, r.topics),
              });
        }
        parseError(r) {
          const e = (0, o.c$)(r);
          let t = this.getError(e.substring(0, 10).toLowerCase());
          return t
            ? new Lr({
                args: this._abiCoder.decode(t.inputs, "0x" + e.substring(10)),
                errorFragment: t,
                name: t.name,
                signature: t.format(),
                sighash: this.getSighash(t),
              })
            : null;
        }
        static isInterface(r) {
          return !(!r || !r._isInterface);
        }
      }
      var jr = t(71488),
        Vr = t(83389);
      function Wr(r) {
        return "0x" + A().keccak_256((0, jr.k9)(r));
      }
      var zr = t(39599);
      const Br = new zr.Vy("rlp/5.8.0");
      function Xr(r) {
        const e = [];
        for (; r; ) e.unshift(255 & r), (r >>= 8);
        return e;
      }
      function $r(r) {
        if (Array.isArray(r)) {
          let e = [];
          if (
            (r.forEach(function (r) {
              e = e.concat($r(r));
            }),
            e.length <= 55)
          )
            return e.unshift(192 + e.length), e;
          const t = Xr(e.length);
          return t.unshift(247 + t.length), t.concat(e);
        }
        (0, jr.f)(r) ||
          Br.throwArgumentError("RLP object must be BytesLike", "object", r);
        const e = Array.prototype.slice.call((0, jr.k9)(r));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return e.unshift(128 + e.length), e;
        const t = Xr(e.length);
        return t.unshift(183 + t.length), t.concat(e);
      }
      function Kr(r) {
        return (0, jr.c$)($r(r));
      }
      const Jr = new zr.Vy("address/5.6.1");
      function Hr(r) {
        (0, jr.Lo)(r, 20) ||
          Jr.throwArgumentError("invalid address", "address", r);
        const e = (r = r.toLowerCase()).substring(2).split(""),
          t = new Uint8Array(40);
        for (let o = 0; o < 40; o++) t[o] = e[o].charCodeAt(0);
        const n = (0, jr.k9)(Wr(t));
        for (let o = 0; o < 40; o += 2)
          n[o >> 1] >> 4 >= 8 && (e[o] = e[o].toUpperCase()),
            (15 & n[o >> 1]) >= 8 && (e[o + 1] = e[o + 1].toUpperCase());
        return "0x" + e.join("");
      }
      const Zr = {};
      for (let zt = 0; zt < 10; zt++) Zr[String(zt)] = String(zt);
      for (let zt = 0; zt < 26; zt++)
        Zr[String.fromCharCode(65 + zt)] = String(10 + zt);
      const qr = Math.floor(
        (function (r) {
          return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
        })(9007199254740991)
      );
      function Yr(r) {
        let e = (r =
          (r = r.toUpperCase()).substring(4) + r.substring(0, 2) + "00")
          .split("")
          .map((r) => Zr[r])
          .join("");
        for (; e.length >= qr; ) {
          let r = e.substring(0, qr);
          e = (parseInt(r, 10) % 97) + e.substring(r.length);
        }
        let t = String(98 - (parseInt(e, 10) % 97));
        for (; t.length < 2; ) t = "0" + t;
        return t;
      }
      function Qr(r) {
        let e = null;
        if (
          ("string" !== typeof r &&
            Jr.throwArgumentError("invalid address", "address", r),
          r.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== r.substring(0, 2) && (r = "0x" + r),
            (e = Hr(r)),
            r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== r &&
              Jr.throwArgumentError("bad address checksum", "address", r);
        else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            r.substring(2, 4) !== Yr(r) &&
              Jr.throwArgumentError("bad icap checksum", "address", r),
              e = (0, Vr.Os)(r.substring(4));
            e.length < 40;

          )
            e = "0" + e;
          e = Hr("0x" + e);
        } else Jr.throwArgumentError("invalid address", "address", r);
        return e;
      }
      function re(r) {
        try {
          return Qr(r), !0;
        } catch (e) {}
        return !1;
      }
      function ee(r) {
        let e = (0, Vr.ii)(Qr(r).substring(2)).toUpperCase();
        for (; e.length < 30; ) e = "0" + e;
        return "XE" + Yr("XE00" + e) + e;
      }
      function te(r) {
        let e = null;
        try {
          e = Qr(r.from);
        } catch (n) {
          Jr.throwArgumentError("missing from address", "transaction", r);
        }
        const t = (0, jr.gr)((0, jr.k9)(Vr.gH.from(r.nonce).toHexString()));
        return Qr((0, jr.Ab)(Wr(Kr([e, t])), 12));
      }
      function ne(r, e, t) {
        return (
          32 !== (0, jr.cm)(e) &&
            Jr.throwArgumentError("salt must be 32 bytes", "salt", e),
          32 !== (0, jr.cm)(t) &&
            Jr.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              t
            ),
          Qr((0, jr.Ab)(Wr((0, jr.xW)(["0xff", Qr(r), e, t])), 12))
        );
      }
      let oe = !1,
        se = !1;
      const ie = {
        debug: 1,
        default: 2,
        info: 2,
        warning: 3,
        error: 4,
        off: 5,
      };
      let ae = ie.default,
        le = null;
      const ue = (function () {
        try {
          const r = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (t) {
                r.push(e);
              }
            }),
            r.length)
          )
            throw new Error("missing " + r.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var ce, he;
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(ce || (ce = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(he || (he = {}));
      const fe = "0123456789abcdef";
      class ge {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, e) {
          const t = r.toLowerCase();
          null == ie[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            ae > ie[t] || console.log.apply(console, e);
        }
        debug() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(ge.levels.DEBUG, e);
        }
        info() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(ge.levels.INFO, e);
        }
        warn() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(ge.levels.WARNING, e);
        }
        makeError(r, e, t) {
          if (se) return this.makeError("censored error", e, {});
          e || (e = ge.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((r) => {
            const e = t[r];
            try {
              if (e instanceof Uint8Array) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (t += fe[e[r] >> 4]), (t += fe[15 & e[r]]);
                n.push(r + "=Uint8Array(0x" + t + ")");
              } else n.push(r + "=" + JSON.stringify(e));
            } catch (i) {
              n.push(r + "=" + JSON.stringify(t[r].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const o = r;
          let s = "";
          switch (e) {
            case he.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = r;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case he.CALL_EXCEPTION:
            case he.INSUFFICIENT_FUNDS:
            case he.MISSING_NEW:
            case he.NONCE_EXPIRED:
            case he.REPLACEMENT_UNDERPRICED:
            case he.TRANSACTION_REPLACED:
            case he.UNPREDICTABLE_GAS_LIMIT:
              s = e;
          }
          s && (r += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          const i = new Error(r);
          return (
            (i.reason = o),
            (i.code = e),
            Object.keys(t).forEach(function (r) {
              i[r] = t[r];
            }),
            i
          );
        }
        throwError(r, e, t) {
          throw this.makeError(r, e, t);
        }
        throwArgumentError(r, e, t) {
          return this.throwError(r, ge.errors.INVALID_ARGUMENT, {
            argument: e,
            value: t,
          });
        }
        assert(r, e, t, n) {
          r || this.throwError(e, t, n);
        }
        assertArgument(r, e, t, n) {
          r || this.throwArgumentError(e, t, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            ue &&
              this.throwError(
                "platform missing String.prototype.normalize",
                ge.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: ue }
              );
        }
        checkSafeUint53(r, e) {
          "number" === typeof r &&
            (null == e && (e = "value not safe"),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(e, ge.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(e, ge.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, e, t) {
          (t = t ? ": " + t : ""),
            r < e &&
              this.throwError(
                "missing argument" + t,
                ge.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: e }
              ),
            r > e &&
              this.throwError(
                "too many arguments" + t,
                ge.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: e }
              );
        }
        checkNew(r, e) {
          (r !== Object && null != r) ||
            this.throwError("missing new", ge.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(r, e) {
          r === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                ge.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r !== Object && null != r) ||
              this.throwError("missing new", ge.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return le || (le = new ge("logger/5.8.0")), le;
        }
        static setCensorship(r, e) {
          if (
            (!r &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                ge.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            oe)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              ge.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (se = !!r), (oe = !!e);
        }
        static setLogLevel(r) {
          const e = ie[r.toLowerCase()];
          null != e
            ? (ae = e)
            : ge.globalLogger().warn("invalid log level - " + r);
        }
        static from(r) {
          return new ge(r);
        }
      }
      (ge.errors = he), (ge.levels = ce);
      const Ee = new ge("bytes/5.8.0");
      function me(r) {
        return !!r.toHexString;
      }
      function pe(r) {
        return (
          r.slice ||
            (r.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return pe(new Uint8Array(Array.prototype.slice.apply(r, e)));
            }),
          r
        );
      }
      function de(r) {
        return "number" === typeof r && r == r && r % 1 === 0;
      }
      function Ne(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ("string" === typeof r) return !1;
        if (!de(r.length) || r.length < 0) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          if (!de(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function ye(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          Ee.checkSafeUint53(r, "invalid arrayify value");
          const e = [];
          for (; r; ) e.unshift(255 & r), (r = parseInt(String(r / 256)));
          return 0 === e.length && e.push(0), pe(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          me(r) && (r = r.toHexString()),
          Re(r))
        ) {
          let t = r.substring(2);
          t.length % 2 &&
            ("left" === e.hexPad
              ? (t = "0" + t)
              : "right" === e.hexPad
              ? (t += "0")
              : Ee.throwArgumentError("hex data is odd-length", "value", r));
          const n = [];
          for (let r = 0; r < t.length; r += 2)
            n.push(parseInt(t.substring(r, r + 2), 16));
          return pe(new Uint8Array(n));
        }
        return Ne(r)
          ? pe(new Uint8Array(r))
          : Ee.throwArgumentError("invalid arrayify value", "value", r);
      }
      function Re(r, e) {
        return (
          !("string" !== typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || r.length === 2 + 2 * e)
        );
      }
      function we(r) {
        r = atob(r);
        const e = [];
        for (let t = 0; t < r.length; t++) e.push(r.charCodeAt(t));
        return ye(e);
      }
      function Ae(r) {
        r = ye(r);
        let e = "";
        for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
        return btoa(e);
      }
      let _e = !1,
        Ie = !1;
      const ve = {
        debug: 1,
        default: 2,
        info: 2,
        warning: 3,
        error: 4,
        off: 5,
      };
      let be = ve.default,
        Te = null;
      const Ue = (function () {
        try {
          const r = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (t) {
                r.push(e);
              }
            }),
            r.length)
          )
            throw new Error("missing " + r.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var Oe, Se;
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(Oe || (Oe = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(Se || (Se = {}));
      const Pe = "0123456789abcdef";
      class Ce {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, e) {
          const t = r.toLowerCase();
          null == ve[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            be > ve[t] || console.log.apply(console, e);
        }
        debug() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(Ce.levels.DEBUG, e);
        }
        info() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(Ce.levels.INFO, e);
        }
        warn() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(Ce.levels.WARNING, e);
        }
        makeError(r, e, t) {
          if (Ie) return this.makeError("censored error", e, {});
          e || (e = Ce.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((r) => {
            const e = t[r];
            try {
              if (e instanceof Uint8Array) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (t += Pe[e[r] >> 4]), (t += Pe[15 & e[r]]);
                n.push(r + "=Uint8Array(0x" + t + ")");
              } else n.push(r + "=" + JSON.stringify(e));
            } catch (i) {
              n.push(r + "=" + JSON.stringify(t[r].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const o = r;
          let s = "";
          switch (e) {
            case Se.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = r;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case Se.CALL_EXCEPTION:
            case Se.INSUFFICIENT_FUNDS:
            case Se.MISSING_NEW:
            case Se.NONCE_EXPIRED:
            case Se.REPLACEMENT_UNDERPRICED:
            case Se.TRANSACTION_REPLACED:
            case Se.UNPREDICTABLE_GAS_LIMIT:
              s = e;
          }
          s && (r += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          const i = new Error(r);
          return (
            (i.reason = o),
            (i.code = e),
            Object.keys(t).forEach(function (r) {
              i[r] = t[r];
            }),
            i
          );
        }
        throwError(r, e, t) {
          throw this.makeError(r, e, t);
        }
        throwArgumentError(r, e, t) {
          return this.throwError(r, Ce.errors.INVALID_ARGUMENT, {
            argument: e,
            value: t,
          });
        }
        assert(r, e, t, n) {
          r || this.throwError(e, t, n);
        }
        assertArgument(r, e, t, n) {
          r || this.throwArgumentError(e, t, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            Ue &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Ce.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: Ue }
              );
        }
        checkSafeUint53(r, e) {
          "number" === typeof r &&
            (null == e && (e = "value not safe"),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(e, Ce.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(e, Ce.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, e, t) {
          (t = t ? ": " + t : ""),
            r < e &&
              this.throwError(
                "missing argument" + t,
                Ce.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: e }
              ),
            r > e &&
              this.throwError(
                "too many arguments" + t,
                Ce.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: e }
              );
        }
        checkNew(r, e) {
          (r !== Object && null != r) ||
            this.throwError("missing new", Ce.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(r, e) {
          r === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                Ce.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r !== Object && null != r) ||
              this.throwError("missing new", Ce.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return Te || (Te = new Ce("logger/5.8.0")), Te;
        }
        static setCensorship(r, e) {
          if (
            (!r &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Ce.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            _e)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Ce.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (Ie = !!r), (_e = !!e);
        }
        static setLogLevel(r) {
          const e = ve[r.toLowerCase()];
          null != e
            ? (be = e)
            : Ce.globalLogger().warn("invalid log level - " + r);
        }
        static from(r) {
          return new Ce(r);
        }
      }
      (Ce.errors = Se), (Ce.levels = Oe);
      const Fe = new Ce("bytes/5.8.0");
      function De(r) {
        return !!r.toHexString;
      }
      function Le(r) {
        return (
          r.slice ||
            (r.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return Le(new Uint8Array(Array.prototype.slice.apply(r, e)));
            }),
          r
        );
      }
      function Me(r) {
        return "number" === typeof r && r == r && r % 1 === 0;
      }
      function xe(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ("string" === typeof r) return !1;
        if (!Me(r.length) || r.length < 0) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          if (!Me(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function ke(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          Fe.checkSafeUint53(r, "invalid arrayify value");
          const e = [];
          for (; r; ) e.unshift(255 & r), (r = parseInt(String(r / 256)));
          return 0 === e.length && e.push(0), Le(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          De(r) && (r = r.toHexString()),
          Ge(r))
        ) {
          let t = r.substring(2);
          t.length % 2 &&
            ("left" === e.hexPad
              ? (t = "0" + t)
              : "right" === e.hexPad
              ? (t += "0")
              : Fe.throwArgumentError("hex data is odd-length", "value", r));
          const n = [];
          for (let r = 0; r < t.length; r += 2)
            n.push(parseInt(t.substring(r, r + 2), 16));
          return Le(new Uint8Array(n));
        }
        return xe(r)
          ? Le(new Uint8Array(r))
          : Fe.throwArgumentError("invalid arrayify value", "value", r);
      }
      function Ge(r, e) {
        return (
          !("string" !== typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || r.length === 2 + 2 * e)
        );
      }
      new Ce("properties/5.8.0");
      function je(r, e, t) {
        Object.defineProperty(r, e, { enumerable: !0, value: t, writable: !1 });
      }
      class Ve {
        constructor(r) {
          je(this, "alphabet", r),
            je(this, "base", r.length),
            je(this, "_alphabetMap", {}),
            je(this, "_leader", r.charAt(0));
          for (let e = 0; e < r.length; e++) this._alphabetMap[r.charAt(e)] = e;
        }
        encode(r) {
          let e = ke(r);
          if (0 === e.length) return "";
          let t = [0];
          for (let o = 0; o < e.length; ++o) {
            let r = e[o];
            for (let e = 0; e < t.length; ++e)
              (r += t[e] << 8),
                (t[e] = r % this.base),
                (r = (r / this.base) | 0);
            for (; r > 0; ) t.push(r % this.base), (r = (r / this.base) | 0);
          }
          let n = "";
          for (let o = 0; 0 === e[o] && o < e.length - 1; ++o)
            n += this._leader;
          for (let o = t.length - 1; o >= 0; --o) n += this.alphabet[t[o]];
          return n;
        }
        decode(r) {
          if ("string" !== typeof r) throw new TypeError("Expected String");
          let e = [];
          if (0 === r.length) return new Uint8Array(e);
          e.push(0);
          for (let t = 0; t < r.length; t++) {
            let n = this._alphabetMap[r[t]];
            if (void 0 === n)
              throw new Error("Non-base" + this.base + " character");
            let o = n;
            for (let r = 0; r < e.length; ++r)
              (o += e[r] * this.base), (e[r] = 255 & o), (o >>= 8);
            for (; o > 0; ) e.push(255 & o), (o >>= 8);
          }
          for (let t = 0; r[t] === this._leader && t < r.length - 1; ++t)
            e.push(0);
          return ke(new Uint8Array(e.reverse()));
        }
      }
      new Ve("abcdefghijklmnopqrstuvwxyz234567");
      const We = new Ve(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
      let ze = !1,
        Be = !1;
      const Xe = {
        debug: 1,
        default: 2,
        info: 2,
        warning: 3,
        error: 4,
        off: 5,
      };
      let $e = Xe.default,
        Ke = null;
      const Je = (function () {
        try {
          const r = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (t) {
                r.push(e);
              }
            }),
            r.length)
          )
            throw new Error("missing " + r.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var He, Ze;
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(He || (He = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(Ze || (Ze = {}));
      const qe = "0123456789abcdef";
      class Ye {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, e) {
          const t = r.toLowerCase();
          null == Xe[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            $e > Xe[t] || console.log.apply(console, e);
        }
        debug() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(Ye.levels.DEBUG, e);
        }
        info() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(Ye.levels.INFO, e);
        }
        warn() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(Ye.levels.WARNING, e);
        }
        makeError(r, e, t) {
          if (Be) return this.makeError("censored error", e, {});
          e || (e = Ye.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((r) => {
            const e = t[r];
            try {
              if (e instanceof Uint8Array) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (t += qe[e[r] >> 4]), (t += qe[15 & e[r]]);
                n.push(r + "=Uint8Array(0x" + t + ")");
              } else n.push(r + "=" + JSON.stringify(e));
            } catch (i) {
              n.push(r + "=" + JSON.stringify(t[r].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const o = r;
          let s = "";
          switch (e) {
            case Ze.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = r;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case Ze.CALL_EXCEPTION:
            case Ze.INSUFFICIENT_FUNDS:
            case Ze.MISSING_NEW:
            case Ze.NONCE_EXPIRED:
            case Ze.REPLACEMENT_UNDERPRICED:
            case Ze.TRANSACTION_REPLACED:
            case Ze.UNPREDICTABLE_GAS_LIMIT:
              s = e;
          }
          s && (r += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          const i = new Error(r);
          return (
            (i.reason = o),
            (i.code = e),
            Object.keys(t).forEach(function (r) {
              i[r] = t[r];
            }),
            i
          );
        }
        throwError(r, e, t) {
          throw this.makeError(r, e, t);
        }
        throwArgumentError(r, e, t) {
          return this.throwError(r, Ye.errors.INVALID_ARGUMENT, {
            argument: e,
            value: t,
          });
        }
        assert(r, e, t, n) {
          r || this.throwError(e, t, n);
        }
        assertArgument(r, e, t, n) {
          r || this.throwArgumentError(e, t, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            Je &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Ye.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: Je }
              );
        }
        checkSafeUint53(r, e) {
          "number" === typeof r &&
            (null == e && (e = "value not safe"),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(e, Ye.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(e, Ye.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, e, t) {
          (t = t ? ": " + t : ""),
            r < e &&
              this.throwError(
                "missing argument" + t,
                Ye.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: e }
              ),
            r > e &&
              this.throwError(
                "too many arguments" + t,
                Ye.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: e }
              );
        }
        checkNew(r, e) {
          (r !== Object && null != r) ||
            this.throwError("missing new", Ye.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(r, e) {
          r === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                Ye.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r !== Object && null != r) ||
              this.throwError("missing new", Ye.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return Ke || (Ke = new Ye("logger/5.8.0")), Ke;
        }
        static setCensorship(r, e) {
          if (
            (!r &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Ye.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            ze)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Ye.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (Be = !!r), (ze = !!e);
        }
        static setLogLevel(r) {
          const e = Xe[r.toLowerCase()];
          null != e
            ? ($e = e)
            : Ye.globalLogger().warn("invalid log level - " + r);
        }
        static from(r) {
          return new Ye(r);
        }
      }
      (Ye.errors = Ze), (Ye.levels = He);
      const Qe = new Ye("bytes/5.6.1");
      function rt(r) {
        return !!r.toHexString;
      }
      function et(r) {
        return (
          r.slice ||
            (r.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return et(new Uint8Array(Array.prototype.slice.apply(r, e)));
            }),
          r
        );
      }
      function tt(r) {
        return (ut(r) && !(r.length % 2)) || ot(r);
      }
      function nt(r) {
        return "number" === typeof r && r == r && r % 1 === 0;
      }
      function ot(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ("string" === typeof r) return !1;
        if (!nt(r.length) || r.length < 0) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          if (!nt(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function st(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          Qe.checkSafeUint53(r, "invalid arrayify value");
          const e = [];
          for (; r; ) e.unshift(255 & r), (r = parseInt(String(r / 256)));
          return 0 === e.length && e.push(0), et(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          rt(r) && (r = r.toHexString()),
          ut(r))
        ) {
          let t = r.substring(2);
          t.length % 2 &&
            ("left" === e.hexPad
              ? (t = "0" + t)
              : "right" === e.hexPad
              ? (t += "0")
              : Qe.throwArgumentError("hex data is odd-length", "value", r));
          const n = [];
          for (let r = 0; r < t.length; r += 2)
            n.push(parseInt(t.substring(r, r + 2), 16));
          return et(new Uint8Array(n));
        }
        return ot(r)
          ? et(new Uint8Array(r))
          : Qe.throwArgumentError("invalid arrayify value", "value", r);
      }
      function it(r) {
        const e = r.map((r) => st(r)),
          t = e.reduce((r, e) => r + e.length, 0),
          n = new Uint8Array(t);
        return e.reduce((r, e) => (n.set(e, r), r + e.length), 0), et(n);
      }
      function at(r) {
        let e = st(r);
        if (0 === e.length) return e;
        let t = 0;
        for (; t < e.length && 0 === e[t]; ) t++;
        return t && (e = e.slice(t)), e;
      }
      function lt(r, e) {
        (r = st(r)).length > e &&
          Qe.throwArgumentError("value out of range", "value", arguments[0]);
        const t = new Uint8Array(e);
        return t.set(r, e - r.length), et(t);
      }
      function ut(r, e) {
        return (
          !("string" !== typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || r.length === 2 + 2 * e)
        );
      }
      const ct = "0123456789abcdef";
      function ht(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          Qe.checkSafeUint53(r, "invalid hexlify value");
          let e = "";
          for (; r; ) (e = ct[15 & r] + e), (r = Math.floor(r / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof r)
          return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          rt(r))
        )
          return r.toHexString();
        if (ut(r))
          return (
            r.length % 2 &&
              ("left" === e.hexPad
                ? (r = "0x0" + r.substring(2))
                : "right" === e.hexPad
                ? (r += "0")
                : Qe.throwArgumentError("hex data is odd-length", "value", r)),
            r.toLowerCase()
          );
        if (ot(r)) {
          let e = "0x";
          for (let t = 0; t < r.length; t++) {
            let n = r[t];
            e += ct[(240 & n) >> 4] + ct[15 & n];
          }
          return e;
        }
        return Qe.throwArgumentError("invalid hexlify value", "value", r);
      }
      function ft(r) {
        if ("string" !== typeof r) r = ht(r);
        else if (!ut(r) || r.length % 2) return null;
        return (r.length - 2) / 2;
      }
      function gt(r, e, t) {
        return (
          "string" !== typeof r
            ? (r = ht(r))
            : (!ut(r) || r.length % 2) &&
              Qe.throwArgumentError("invalid hexData", "value", r),
          (e = 2 + 2 * e),
          null != t ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
        );
      }
      function Et(r) {
        let e = "0x";
        return (
          r.forEach((r) => {
            e += ht(r).substring(2);
          }),
          e
        );
      }
      function mt(r) {
        const e = pt(ht(r, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function pt(r) {
        "string" !== typeof r && (r = ht(r)),
          ut(r) || Qe.throwArgumentError("invalid hex string", "value", r),
          (r = r.substring(2));
        let e = 0;
        for (; e < r.length && "0" === r[e]; ) e++;
        return "0x" + r.substring(e);
      }
      function dt(r, e) {
        for (
          "string" !== typeof r
            ? (r = ht(r))
            : ut(r) || Qe.throwArgumentError("invalid hex string", "value", r),
            r.length > 2 * e + 2 &&
              Qe.throwArgumentError(
                "value out of range",
                "value",
                arguments[1]
              );
          r.length < 2 * e + 2;

        )
          r = "0x0" + r.substring(2);
        return r;
      }
      function Nt(r) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (tt(r)) {
          let t = st(r);
          64 === t.length
            ? ((e.v = 27 + (t[32] >> 7)),
              (t[32] &= 127),
              (e.r = ht(t.slice(0, 32))),
              (e.s = ht(t.slice(32, 64))))
            : 65 === t.length
            ? ((e.r = ht(t.slice(0, 32))),
              (e.s = ht(t.slice(32, 64))),
              (e.v = t[64]))
            : Qe.throwArgumentError("invalid signature string", "signature", r),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : Qe.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    r
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (t[32] |= 128),
            (e._vs = ht(t.slice(32, 64)));
        } else {
          if (
            ((e.r = r.r),
            (e.s = r.s),
            (e.v = r.v),
            (e.recoveryParam = r.recoveryParam),
            (e._vs = r._vs),
            null != e._vs)
          ) {
            const t = lt(st(e._vs), 32);
            e._vs = ht(t);
            const n = t[0] >= 128 ? 1 : 0;
            null == e.recoveryParam
              ? (e.recoveryParam = n)
              : e.recoveryParam !== n &&
                Qe.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  r
                ),
              (t[0] &= 127);
            const o = ht(t);
            null == e.s
              ? (e.s = o)
              : e.s !== o &&
                Qe.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  r
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? Qe.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  r
                )
              : 0 === e.v || 1 === e.v
              ? (e.recoveryParam = e.v)
              : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const t = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== t &&
              Qe.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                r
              );
          }
          null != e.r && ut(e.r)
            ? (e.r = dt(e.r, 32))
            : Qe.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                r
              ),
            null != e.s && ut(e.s)
              ? (e.s = dt(e.s, 32))
              : Qe.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  r
                );
          const t = st(e.s);
          t[0] >= 128 &&
            Qe.throwArgumentError("signature s out of range", "signature", r),
            e.recoveryParam && (t[0] |= 128);
          const n = ht(t);
          e._vs &&
            (ut(e._vs) ||
              Qe.throwArgumentError("signature invalid _vs", "signature", r),
            (e._vs = dt(e._vs, 32))),
            null == e._vs
              ? (e._vs = n)
              : e._vs !== n &&
                Qe.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  r
                );
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
      function yt(r) {
        return ht(it([(r = Nt(r)).r, r.s, r.recoveryParam ? "0x1c" : "0x1b"]));
      }
      var Rt = t(86522),
        wt = t(11968),
        At = t(59178),
        _t = t(26952),
        It = t(12926),
        vt = t(51837),
        bt = t(48781),
        Tt = t(5865),
        Ut = t(12104),
        Ot = t(23321),
        St = t(14896),
        Pt = t(87429),
        Ct = t(433),
        Ft = t(26736),
        Dt = t(67045),
        Lt = t(48981),
        Mt = t(19098),
        xt = t(27547),
        kt = t(27026),
        Gt = t(21892),
        jt = t(83653),
        Vt = t(71698),
        Wt = t(13062);
    },
    61216: (r) => {
      for (
        var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", t = {}, n = 0;
        n < 32;
        n++
      ) {
        var o = e.charAt(n);
        if (void 0 !== t[o]) throw new TypeError(o + " is ambiguous");
        t[o] = n;
      }
      function s(r) {
        var e = r >> 25;
        return (
          ((33554431 & r) << 5) ^
          (996825010 & -(1 & e)) ^
          (642813549 & -((e >> 1) & 1)) ^
          (513874426 & -((e >> 2) & 1)) ^
          (1027748829 & -((e >> 3) & 1)) ^
          (705979059 & -((e >> 4) & 1))
        );
      }
      function i(r) {
        for (var e = 1, t = 0; t < r.length; ++t) {
          var n = r.charCodeAt(t);
          if (n < 33 || n > 126) return "Invalid prefix (" + r + ")";
          e = s(e) ^ (n >> 5);
        }
        for (e = s(e), t = 0; t < r.length; ++t) {
          var o = r.charCodeAt(t);
          e = s(e) ^ (31 & o);
        }
        return e;
      }
      function a(r, e) {
        if (((e = e || 90), r.length < 8)) return r + " too short";
        if (r.length > e) return "Exceeds length limit";
        var n = r.toLowerCase(),
          o = r.toUpperCase();
        if (r !== n && r !== o) return "Mixed-case string " + r;
        var a = (r = n).lastIndexOf("1");
        if (-1 === a) return "No separator character for " + r;
        if (0 === a) return "Missing prefix for " + r;
        var l = r.slice(0, a),
          u = r.slice(a + 1);
        if (u.length < 6) return "Data too short";
        var c = i(l);
        if ("string" === typeof c) return c;
        for (var h = [], f = 0; f < u.length; ++f) {
          var g = u.charAt(f),
            E = t[g];
          if (void 0 === E) return "Unknown character " + g;
          (c = s(c) ^ E), f + 6 >= u.length || h.push(E);
        }
        return 1 !== c ? "Invalid checksum for " + r : { prefix: l, words: h };
      }
      function l(r, e, t, n) {
        for (
          var o = 0, s = 0, i = (1 << t) - 1, a = [], l = 0;
          l < r.length;
          ++l
        )
          for (o = (o << e) | r[l], s += e; s >= t; )
            (s -= t), a.push((o >> s) & i);
        if (n) s > 0 && a.push((o << (t - s)) & i);
        else {
          if (s >= e) return "Excess padding";
          if ((o << (t - s)) & i) return "Non-zero padding";
        }
        return a;
      }
      r.exports = {
        decodeUnsafe: function () {
          var r = a.apply(null, arguments);
          if ("object" === typeof r) return r;
        },
        decode: function (r) {
          var e = a.apply(null, arguments);
          if ("object" === typeof e) return e;
          throw new Error(e);
        },
        encode: function (r, t, n) {
          if (((n = n || 90), r.length + 7 + t.length > n))
            throw new TypeError("Exceeds length limit");
          var o = i((r = r.toLowerCase()));
          if ("string" === typeof o) throw new Error(o);
          for (var a = r + "1", l = 0; l < t.length; ++l) {
            var u = t[l];
            if (u >> 5 !== 0) throw new Error("Non 5-bit word");
            (o = s(o) ^ u), (a += e.charAt(u));
          }
          for (l = 0; l < 6; ++l) o = s(o);
          for (o ^= 1, l = 0; l < 6; ++l) {
            a += e.charAt((o >> (5 * (5 - l))) & 31);
          }
          return a;
        },
        toWordsUnsafe: function (r) {
          var e = l(r, 8, 5, !0);
          if (Array.isArray(e)) return e;
        },
        toWords: function (r) {
          var e = l(r, 8, 5, !0);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        },
        fromWordsUnsafe: function (r) {
          var e = l(r, 5, 8, !1);
          if (Array.isArray(e)) return e;
        },
        fromWords: function (r) {
          var e = l(r, 5, 8, !1);
          if (Array.isArray(e)) return e;
          throw new Error(e);
        },
      };
    },
    71488: (r, e, t) => {
      t.d(e, {
        k9: () => u,
        xW: () => c,
        cm: () => m,
        Ab: () => p,
        c$: () => E,
        aY: () => l,
        f: () => i,
        Lo: () => f,
        gr: () => h,
      });
      const n = new (t(39599).Vy)("bytes/5.8.0");
      function o(r) {
        return !!r.toHexString;
      }
      function s(r) {
        return (
          r.slice ||
            (r.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return s(new Uint8Array(Array.prototype.slice.apply(r, e)));
            }),
          r
        );
      }
      function i(r) {
        return (f(r) && !(r.length % 2)) || l(r);
      }
      function a(r) {
        return "number" === typeof r && r == r && r % 1 === 0;
      }
      function l(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ("string" === typeof r) return !1;
        if (!a(r.length) || r.length < 0) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          if (!a(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function u(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          n.checkSafeUint53(r, "invalid arrayify value");
          const e = [];
          for (; r; ) e.unshift(255 & r), (r = parseInt(String(r / 256)));
          return 0 === e.length && e.push(0), s(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          o(r) && (r = r.toHexString()),
          f(r))
        ) {
          let t = r.substring(2);
          t.length % 2 &&
            ("left" === e.hexPad
              ? (t = "0" + t)
              : "right" === e.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", r));
          const o = [];
          for (let r = 0; r < t.length; r += 2)
            o.push(parseInt(t.substring(r, r + 2), 16));
          return s(new Uint8Array(o));
        }
        return l(r)
          ? s(new Uint8Array(r))
          : n.throwArgumentError("invalid arrayify value", "value", r);
      }
      function c(r) {
        const e = r.map((r) => u(r)),
          t = e.reduce((r, e) => r + e.length, 0),
          n = new Uint8Array(t);
        return e.reduce((r, e) => (n.set(e, r), r + e.length), 0), s(n);
      }
      function h(r) {
        let e = u(r);
        if (0 === e.length) return e;
        let t = 0;
        for (; t < e.length && 0 === e[t]; ) t++;
        return t && (e = e.slice(t)), e;
      }
      function f(r, e) {
        return (
          !("string" !== typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || r.length === 2 + 2 * e)
        );
      }
      const g = "0123456789abcdef";
      function E(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          n.checkSafeUint53(r, "invalid hexlify value");
          let e = "";
          for (; r; ) (e = g[15 & r] + e), (r = Math.floor(r / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof r)
          return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          o(r))
        )
          return r.toHexString();
        if (f(r))
          return (
            r.length % 2 &&
              ("left" === e.hexPad
                ? (r = "0x0" + r.substring(2))
                : "right" === e.hexPad
                ? (r += "0")
                : n.throwArgumentError("hex data is odd-length", "value", r)),
            r.toLowerCase()
          );
        if (l(r)) {
          let e = "0x";
          for (let t = 0; t < r.length; t++) {
            let n = r[t];
            e += g[(240 & n) >> 4] + g[15 & n];
          }
          return e;
        }
        return n.throwArgumentError("invalid hexlify value", "value", r);
      }
      function m(r) {
        if ("string" !== typeof r) r = E(r);
        else if (!f(r) || r.length % 2) return null;
        return (r.length - 2) / 2;
      }
      function p(r, e, t) {
        return (
          "string" !== typeof r
            ? (r = E(r))
            : (!f(r) || r.length % 2) &&
              n.throwArgumentError("invalid hexData", "value", r),
          (e = 2 + 2 * e),
          null != t ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
        );
      }
    },
    79538: (r, e, t) => {
      t.d(e, { Vy: () => f });
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let i = s.default,
        a = null;
      const l = (function () {
        try {
          const r = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (t) {
                r.push(e);
              }
            }),
            r.length)
          )
            throw new Error("missing " + r.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var u, c;
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(u || (u = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(c || (c = {}));
      const h = "0123456789abcdef";
      class f {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, e) {
          const t = r.toLowerCase();
          null == s[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            i > s[t] || console.log.apply(console, e);
        }
        debug() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.DEBUG, e);
        }
        info() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.INFO, e);
        }
        warn() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.WARNING, e);
        }
        makeError(r, e, t) {
          if (o) return this.makeError("censored error", e, {});
          e || (e = f.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((r) => {
            const e = t[r];
            try {
              if (e instanceof Uint8Array) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (t += h[e[r] >> 4]), (t += h[15 & e[r]]);
                n.push(r + "=Uint8Array(0x" + t + ")");
              } else n.push(r + "=" + JSON.stringify(e));
            } catch (a) {
              n.push(r + "=" + JSON.stringify(t[r].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const s = r;
          let i = "";
          switch (e) {
            case c.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const e = r;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  i += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  i += "-unbound-result";
              }
              break;
            }
            case c.CALL_EXCEPTION:
            case c.INSUFFICIENT_FUNDS:
            case c.MISSING_NEW:
            case c.NONCE_EXPIRED:
            case c.REPLACEMENT_UNDERPRICED:
            case c.TRANSACTION_REPLACED:
            case c.UNPREDICTABLE_GAS_LIMIT:
              i = e;
          }
          i && (r += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          const a = new Error(r);
          return (
            (a.reason = s),
            (a.code = e),
            Object.keys(t).forEach(function (r) {
              a[r] = t[r];
            }),
            a
          );
        }
        throwError(r, e, t) {
          throw this.makeError(r, e, t);
        }
        throwArgumentError(r, e, t) {
          return this.throwError(r, f.errors.INVALID_ARGUMENT, {
            argument: e,
            value: t,
          });
        }
        assert(r, e, t, n) {
          r || this.throwError(e, t, n);
        }
        assertArgument(r, e, t, n) {
          r || this.throwArgumentError(e, t, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l }
              );
        }
        checkSafeUint53(r, e) {
          "number" === typeof r &&
            (null == e && (e = "value not safe"),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, e, t) {
          (t = t ? ": " + t : ""),
            r < e &&
              this.throwError(
                "missing argument" + t,
                f.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: e }
              ),
            r > e &&
              this.throwError(
                "too many arguments" + t,
                f.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: e }
              );
        }
        checkNew(r, e) {
          (r !== Object && null != r) ||
            this.throwError("missing new", f.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(r, e) {
          r === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                f.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r !== Object && null != r) ||
              this.throwError("missing new", f.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return a || (a = new f("logger/5.8.0")), a;
        }
        static setCensorship(r, e) {
          if (
            (!r &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              f.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!r), (n = !!e);
        }
        static setLogLevel(r) {
          const e = s[r.toLowerCase()];
          null != e
            ? (i = e)
            : f.globalLogger().warn("invalid log level - " + r);
        }
        static from(r) {
          return new f(r);
        }
      }
      (f.errors = c), (f.levels = u);
    },
    86723: (r, e, t) => {
      t.d(e, { c$: () => u, aY: () => i, Lo: () => a });
      const n = new (t(79538).Vy)("bytes/5.8.0");
      function o(r) {
        return !!r.toHexString;
      }
      function s(r) {
        return "number" === typeof r && r == r && r % 1 === 0;
      }
      function i(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ("string" === typeof r) return !1;
        if (!s(r.length) || r.length < 0) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          if (!s(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function a(r, e) {
        return (
          !("string" !== typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || r.length === 2 + 2 * e)
        );
      }
      const l = "0123456789abcdef";
      function u(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          n.checkSafeUint53(r, "invalid hexlify value");
          let e = "";
          for (; r; ) (e = l[15 & r] + e), (r = Math.floor(r / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof r)
          return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          o(r))
        )
          return r.toHexString();
        if (a(r))
          return (
            r.length % 2 &&
              ("left" === e.hexPad
                ? (r = "0x0" + r.substring(2))
                : "right" === e.hexPad
                ? (r += "0")
                : n.throwArgumentError("hex data is odd-length", "value", r)),
            r.toLowerCase()
          );
        if (i(r)) {
          let e = "0x";
          for (let t = 0; t < r.length; t++) {
            let n = r[t];
            e += l[(240 & n) >> 4] + l[15 & n];
          }
          return e;
        }
        return n.throwArgumentError("invalid hexlify value", "value", r);
      }
    },
    89857: (r, e, t) => {
      t.d(e, { Vy: () => f });
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let i = s.default,
        a = null;
      const l = (function () {
        try {
          const r = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (t) {
                r.push(e);
              }
            }),
            r.length)
          )
            throw new Error("missing " + r.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (r) {
          return r.message;
        }
        return null;
      })();
      var u, c;
      !(function (r) {
        (r.DEBUG = "DEBUG"),
          (r.INFO = "INFO"),
          (r.WARNING = "WARNING"),
          (r.ERROR = "ERROR"),
          (r.OFF = "OFF");
      })(u || (u = {})),
        (function (r) {
          (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (r.NETWORK_ERROR = "NETWORK_ERROR"),
            (r.SERVER_ERROR = "SERVER_ERROR"),
            (r.TIMEOUT = "TIMEOUT"),
            (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (r.MISSING_NEW = "MISSING_NEW"),
            (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (r.ACTION_REJECTED = "ACTION_REJECTED");
        })(c || (c = {}));
      const h = "0123456789abcdef";
      class f {
        constructor(r) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: r,
            writable: !1,
          });
        }
        _log(r, e) {
          const t = r.toLowerCase();
          null == s[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", r),
            i > s[t] || console.log.apply(console, e);
        }
        debug() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.DEBUG, e);
        }
        info() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.INFO, e);
        }
        warn() {
          for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
            e[t] = arguments[t];
          this._log(f.levels.WARNING, e);
        }
        makeError(r, e, t) {
          if (o) return this.makeError("censored error", e, {});
          e || (e = f.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((r) => {
            const e = t[r];
            try {
              if (e instanceof Uint8Array) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (t += h[e[r] >> 4]), (t += h[15 & e[r]]);
                n.push(r + "=Uint8Array(0x" + t + ")");
              } else n.push(r + "=" + JSON.stringify(e));
            } catch (a) {
              n.push(r + "=" + JSON.stringify(t[r].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          const s = r;
          let i = "";
          switch (e) {
            case c.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const e = r;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  i += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  i += "-unbound-result";
              }
              break;
            }
            case c.CALL_EXCEPTION:
            case c.INSUFFICIENT_FUNDS:
            case c.MISSING_NEW:
            case c.NONCE_EXPIRED:
            case c.REPLACEMENT_UNDERPRICED:
            case c.TRANSACTION_REPLACED:
            case c.UNPREDICTABLE_GAS_LIMIT:
              i = e;
          }
          i && (r += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            n.length && (r += " (" + n.join(", ") + ")");
          const a = new Error(r);
          return (
            (a.reason = s),
            (a.code = e),
            Object.keys(t).forEach(function (r) {
              a[r] = t[r];
            }),
            a
          );
        }
        throwError(r, e, t) {
          throw this.makeError(r, e, t);
        }
        throwArgumentError(r, e, t) {
          return this.throwError(r, f.errors.INVALID_ARGUMENT, {
            argument: e,
            value: t,
          });
        }
        assert(r, e, t, n) {
          r || this.throwError(e, t, n);
        }
        assertArgument(r, e, t, n) {
          r || this.throwArgumentError(e, t, n);
        }
        checkNormalize(r) {
          null == r && (r = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l }
              );
        }
        checkSafeUint53(r, e) {
          "number" === typeof r &&
            (null == e && (e = "value not safe"),
            (r < 0 || r >= 9007199254740991) &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: r,
              }),
            r % 1 &&
              this.throwError(e, f.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: r,
              }));
        }
        checkArgumentCount(r, e, t) {
          (t = t ? ": " + t : ""),
            r < e &&
              this.throwError(
                "missing argument" + t,
                f.errors.MISSING_ARGUMENT,
                { count: r, expectedCount: e }
              ),
            r > e &&
              this.throwError(
                "too many arguments" + t,
                f.errors.UNEXPECTED_ARGUMENT,
                { count: r, expectedCount: e }
              );
        }
        checkNew(r, e) {
          (r !== Object && null != r) ||
            this.throwError("missing new", f.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(r, e) {
          r === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                f.errors.UNSUPPORTED_OPERATION,
                { name: r.name, operation: "new" }
              )
            : (r !== Object && null != r) ||
              this.throwError("missing new", f.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return a || (a = new f("logger/5.8.0")), a;
        }
        static setCensorship(r, e) {
          if (
            (!r &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                f.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!r) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              f.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!r), (n = !!e);
        }
        static setLogLevel(r) {
          const e = s[r.toLowerCase()];
          null != e
            ? (i = e)
            : f.globalLogger().warn("invalid log level - " + r);
        }
        static from(r) {
          return new f(r);
        }
      }
      (f.errors = c), (f.levels = u);
    },
    95542: (r, e, t) => {
      t.d(e, {
        k9: () => l,
        xW: () => u,
        qn: () => E,
        Ab: () => g,
        bj: () => m,
        c$: () => f,
        aY: () => a,
        Lo: () => c,
      });
      const n = new (t(89857).Vy)("bytes/5.8.0");
      function o(r) {
        return !!r.toHexString;
      }
      function s(r) {
        return (
          r.slice ||
            (r.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return s(new Uint8Array(Array.prototype.slice.apply(r, e)));
            }),
          r
        );
      }
      function i(r) {
        return "number" === typeof r && r == r && r % 1 === 0;
      }
      function a(r) {
        if (null == r) return !1;
        if (r.constructor === Uint8Array) return !0;
        if ("string" === typeof r) return !1;
        if (!i(r.length) || r.length < 0) return !1;
        for (let e = 0; e < r.length; e++) {
          const t = r[e];
          if (!i(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function l(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          n.checkSafeUint53(r, "invalid arrayify value");
          const e = [];
          for (; r; ) e.unshift(255 & r), (r = parseInt(String(r / 256)));
          return 0 === e.length && e.push(0), s(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          o(r) && (r = r.toHexString()),
          c(r))
        ) {
          let t = r.substring(2);
          t.length % 2 &&
            ("left" === e.hexPad
              ? (t = "0" + t)
              : "right" === e.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", r));
          const o = [];
          for (let r = 0; r < t.length; r += 2)
            o.push(parseInt(t.substring(r, r + 2), 16));
          return s(new Uint8Array(o));
        }
        return a(r)
          ? s(new Uint8Array(r))
          : n.throwArgumentError("invalid arrayify value", "value", r);
      }
      function u(r) {
        const e = r.map((r) => l(r)),
          t = e.reduce((r, e) => r + e.length, 0),
          n = new Uint8Array(t);
        return e.reduce((r, e) => (n.set(e, r), r + e.length), 0), s(n);
      }
      function c(r, e) {
        return (
          !("string" !== typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || r.length === 2 + 2 * e)
        );
      }
      const h = "0123456789abcdef";
      function f(r, e) {
        if ((e || (e = {}), "number" === typeof r)) {
          n.checkSafeUint53(r, "invalid hexlify value");
          let e = "";
          for (; r; ) (e = h[15 & r] + e), (r = Math.floor(r / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof r)
          return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
        if (
          (e.allowMissingPrefix &&
            "string" === typeof r &&
            "0x" !== r.substring(0, 2) &&
            (r = "0x" + r),
          o(r))
        )
          return r.toHexString();
        if (c(r))
          return (
            r.length % 2 &&
              ("left" === e.hexPad
                ? (r = "0x0" + r.substring(2))
                : "right" === e.hexPad
                ? (r += "0")
                : n.throwArgumentError("hex data is odd-length", "value", r)),
            r.toLowerCase()
          );
        if (a(r)) {
          let e = "0x";
          for (let t = 0; t < r.length; t++) {
            let n = r[t];
            e += h[(240 & n) >> 4] + h[15 & n];
          }
          return e;
        }
        return n.throwArgumentError("invalid hexlify value", "value", r);
      }
      function g(r, e, t) {
        return (
          "string" !== typeof r
            ? (r = f(r))
            : (!c(r) || r.length % 2) &&
              n.throwArgumentError("invalid hexData", "value", r),
          (e = 2 + 2 * e),
          null != t ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
        );
      }
      function E(r) {
        let e = "0x";
        return (
          r.forEach((r) => {
            e += f(r).substring(2);
          }),
          e
        );
      }
      function m(r, e) {
        for (
          "string" !== typeof r
            ? (r = f(r))
            : c(r) || n.throwArgumentError("invalid hex string", "value", r),
            r.length > 2 * e + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          r.length < 2 * e + 2;

        )
          r = "0x0" + r.substring(2);
        return r;
      }
    },
  },
]);
