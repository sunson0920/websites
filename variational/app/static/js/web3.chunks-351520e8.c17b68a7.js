"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [764],
  {
    433: (e, r, t) => {
      t.d(r, {
        qN: () => v,
        A4: () => N,
        yY: () => g,
        $J: () => m,
        k_: () => y,
        Ic: () => E,
      });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
      var d = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const p = new h("properties/5.6.0");
      function g(e, r, t) {
        Object.defineProperty(e, r, { enumerable: !0, value: t, writable: !1 });
      }
      function m(e, r) {
        for (let t = 0; t < 32; t++) {
          if (e[r]) return e[r];
          if (!e.prototype || "object" !== typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function y(e) {
        return d(this, void 0, void 0, function* () {
          const r = Object.keys(e).map((r) => {
            const t = e[r];
            return Promise.resolve(t).then((e) => ({ key: r, value: e }));
          });
          return (yield Promise.all(r)).reduce(
            (e, r) => ((e[r.key] = r.value), e),
            {}
          );
        });
      }
      function v(e, r) {
        (e && "object" === typeof e) ||
          p.throwArgumentError("invalid object", "object", e),
          Object.keys(e).forEach((t) => {
            r[t] ||
              p.throwArgumentError(
                "invalid object key - " + t,
                "transaction:" + t,
                e
              );
          });
      }
      function E(e) {
        const r = {};
        for (const t in e) r[t] = e[t];
        return r;
      }
      const b = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function A(e) {
        if (void 0 === e || null === e || b[typeof e]) return !0;
        if (Array.isArray(e) || "object" === typeof e) {
          if (!Object.isFrozen(e)) return !1;
          const t = Object.keys(e);
          for (let n = 0; n < t.length; n++) {
            let o = null;
            try {
              o = e[t[n]];
            } catch (r) {
              continue;
            }
            if (!A(o)) return !1;
          }
          return !0;
        }
        return p.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function w(e) {
        if (A(e)) return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => N(e)));
        if ("object" === typeof e) {
          const r = {};
          for (const t in e) {
            const n = e[t];
            void 0 !== n && g(r, t, N(n));
          }
          return r;
        }
        return p.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function N(e) {
        return w(e);
      }
    },
    5865: (e, r, t) => {
      t.d(r, { O4: () => u, Vy: () => h });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.6.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
    },
    11759: (e, r, t) => {
      t.d(r, {
        k9: () => c,
        qn: () => m,
        cm: () => p,
        Ab: () => g,
        bj: () => y,
        c$: () => d,
        aY: () => f,
        f: () => s,
        Lo: () => l,
        Pc: () => v,
        gr: () => u,
      });
      const n = new (t(28638).Vy)("bytes/5.8.0");
      function o(e) {
        return !!e.toHexString;
      }
      function i(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return i(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function s(e) {
        return (l(e) && !(e.length % 2)) || f(e);
      }
      function a(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function f(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!a(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!a(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function c(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), i(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e) && (e = e.toHexString()),
          l(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          const o = [];
          for (let e = 0; e < t.length; e += 2)
            o.push(parseInt(t.substring(e, e + 2), 16));
          return i(new Uint8Array(o));
        }
        return f(e)
          ? i(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function u(e) {
        let r = c(e);
        if (0 === r.length) return r;
        let t = 0;
        for (; t < r.length && 0 === r[t]; ) t++;
        return t && (r = r.slice(t)), r;
      }
      function l(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const h = "0123456789abcdef";
      function d(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = h[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e))
        )
          return e.toHexString();
        if (l(e))
          return (
            e.length % 2 &&
              ("left" === r.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === r.hexPad
                ? (e += "0")
                : n.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (f(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += h[(240 & n) >> 4] + h[15 & n];
          }
          return r;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
      function p(e) {
        if ("string" !== typeof e) e = d(e);
        else if (!l(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function g(e, r, t) {
        return (
          "string" !== typeof e
            ? (e = d(e))
            : (!l(e) || e.length % 2) &&
              n.throwArgumentError("invalid hexData", "value", e),
          (r = 2 + 2 * r),
          null != t ? "0x" + e.substring(r, 2 + 2 * t) : "0x" + e.substring(r)
        );
      }
      function m(e) {
        let r = "0x";
        return (
          e.forEach((e) => {
            r += d(e).substring(2);
          }),
          r
        );
      }
      function y(e, r) {
        for (
          "string" !== typeof e
            ? (e = d(e))
            : l(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * r + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * r + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
      function v(e) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (s(e)) {
          let t = c(e);
          64 === t.length
            ? ((r.v = 27 + (t[32] >> 7)),
              (t[32] &= 127),
              (r.r = d(t.slice(0, 32))),
              (r.s = d(t.slice(32, 64))))
            : 65 === t.length
            ? ((r.r = d(t.slice(0, 32))),
              (r.s = d(t.slice(32, 64))),
              (r.v = t[64]))
            : n.throwArgumentError("invalid signature string", "signature", e),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : n.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (t[32] |= 128),
            (r._vs = d(t.slice(32, 64)));
        } else {
          if (
            ((r.r = e.r),
            (r.s = e.s),
            (r.v = e.v),
            (r.recoveryParam = e.recoveryParam),
            (r._vs = e._vs),
            null != r._vs)
          ) {
            const t = (function (e, r) {
              (e = c(e)).length > r &&
                n.throwArgumentError(
                  "value out of range",
                  "value",
                  arguments[0]
                );
              const t = new Uint8Array(r);
              return t.set(e, r - e.length), i(t);
            })(c(r._vs), 32);
            r._vs = d(t);
            const o = t[0] >= 128 ? 1 : 0;
            null == r.recoveryParam
              ? (r.recoveryParam = o)
              : r.recoveryParam !== o &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e
                ),
              (t[0] &= 127);
            const s = d(t);
            null == r.s
              ? (r.s = s)
              : r.s !== s &&
                n.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? n.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e
                )
              : 0 === r.v || 1 === r.v
              ? (r.recoveryParam = r.v)
              : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const t = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== t &&
              n.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e
              );
          }
          null != r.r && l(r.r)
            ? (r.r = y(r.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e
              ),
            null != r.s && l(r.s)
              ? (r.s = y(r.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e
                );
          const t = c(r.s);
          t[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", e),
            r.recoveryParam && (t[0] |= 128);
          const o = d(t);
          r._vs &&
            (l(r._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", e),
            (r._vs = y(r._vs, 32))),
            null == r._vs
              ? (r._vs = o)
              : r._vs !== o &&
                n.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e
                );
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
    },
    12104: (e, r, t) => {
      t.d(r, { L5: () => P, HE: () => I, sc: () => R, Zf: () => _ });
      var n = t(16143),
        o = t.n(n);
      let i = !1,
        s = !1;
      const a = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let f = a.default,
        c = null;
      const u = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var l, h;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(l || (l = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(h || (h = {}));
      const d = "0123456789abcdef";
      class p {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == a[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            f > a[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(p.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(p.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(p.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (s) return this.makeError("censored error", r, {});
          r || (r = p.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += d[r[e] >> 4]), (t += d[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const o = e;
          let i = "";
          switch (r) {
            case h.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + r;
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
            case h.CALL_EXCEPTION:
            case h.INSUFFICIENT_FUNDS:
            case h.MISSING_NEW:
            case h.NONCE_EXPIRED:
            case h.REPLACEMENT_UNDERPRICED:
            case h.TRANSACTION_REPLACED:
            case h.UNPREDICTABLE_GAS_LIMIT:
              i = r;
          }
          i && (e += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = o),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, p.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            u &&
              this.throwError(
                "platform missing String.prototype.normalize",
                p.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: u }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, p.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, p.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                p.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                p.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", p.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                p.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", p.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return c || (c = new p("logger/5.8.0")), c;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                p.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            i)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              p.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (s = !!e), (i = !!r);
        }
        static setLogLevel(e) {
          const r = a[e.toLowerCase()];
          null != r
            ? (f = r)
            : p.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new p(e);
        }
      }
      (p.errors = h), (p.levels = l);
      const g = new p("bytes/5.8.0");
      function m(e) {
        return !!e.toHexString;
      }
      function y(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return y(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function v(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function E(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!v(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!v(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function b(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          g.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), y(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          m(e) && (e = e.toHexString()),
          A(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : g.throwArgumentError("hex data is odd-length", "value", e));
          const n = [];
          for (let e = 0; e < t.length; e += 2)
            n.push(parseInt(t.substring(e, e + 2), 16));
          return y(new Uint8Array(n));
        }
        return E(e)
          ? y(new Uint8Array(e))
          : g.throwArgumentError("invalid arrayify value", "value", e);
      }
      function A(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      var w = t(13062);
      const N = new p("sha2/5.6.1");
      function I(e) {
        return "0x" + o().ripemd160().update(b(e)).digest("hex");
      }
      function R(e) {
        return "0x" + o().sha256().update(b(e)).digest("hex");
      }
      function _(e) {
        return "0x" + o().sha512().update(b(e)).digest("hex");
      }
      function P(e, r, t) {
        return (
          w.q[e] ||
            N.throwError(
              "unsupported algorithm " + e,
              p.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: e }
            ),
          "0x" + o().hmac(o()[e], b(r)).update(b(t)).digest("hex")
        );
      }
    },
    13062: (e, r, t) => {
      var n;
      t.d(r, { q: () => n }),
        (function (e) {
          (e.sha256 = "sha256"), (e.sha512 = "sha512");
        })(n || (n = {}));
    },
    14896: (e, r, t) => {
      t.d(r, { p: () => N });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
      const d = new h("bytes/5.8.0");
      function p(e) {
        return !!e.toHexString;
      }
      function g(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return g(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function m(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function y(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!m(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!m(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function v(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          d.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), g(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          p(e) && (e = e.toHexString()),
          E(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : d.throwArgumentError("hex data is odd-length", "value", e));
          const n = [];
          for (let e = 0; e < t.length; e += 2)
            n.push(parseInt(t.substring(e, e + 2), 16));
          return g(new Uint8Array(n));
        }
        return y(e)
          ? g(new Uint8Array(e))
          : d.throwArgumentError("invalid arrayify value", "value", e);
      }
      function E(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const b = new h("random/5.6.1");
      const A = (function () {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof t.g) return t.g;
        throw new Error("unable to locate global object");
      })();
      let w = A.crypto || A.msCrypto;
      function N(e) {
        (e <= 0 || e > 1024 || e % 1 || e != e) &&
          b.throwArgumentError("invalid length", "length", e);
        const r = new Uint8Array(e);
        return w.getRandomValues(r), v(r);
      }
      (w && w.getRandomValues) ||
        (b.warn("WARNING: Missing strong random number source"),
        (w = {
          getRandomValues: function (e) {
            return b.throwError(
              "no secure random source avaialble",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "crypto.getRandomValues" }
            );
          },
        }));
    },
    19098: (e, r, t) => {
      t.d(r, {
        dz: () => i,
        d5: () => f,
        _E: () => s,
        Wj: () => h,
        H5: () => d,
        YW: () => u,
        dg: () => g,
        _v: () => p,
      });
      var n = t(95174);
      const o = new (t(92209).Vy)("strings/5.6.1");
      var i, s;
      function a(e, r, t, n, o) {
        if (e === s.BAD_PREFIX || e === s.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = r + 1; n < t.length && t[n] >> 6 === 2; n++) e++;
          return e;
        }
        return e === s.OVERRUN ? t.length - r - 1 : 0;
      }
      !(function (e) {
        (e.current = ""),
          (e.NFC = "NFC"),
          (e.NFD = "NFD"),
          (e.NFKC = "NFKC"),
          (e.NFKD = "NFKD");
      })(i || (i = {})),
        (function (e) {
          (e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (e.BAD_PREFIX = "bad codepoint prefix"),
            (e.OVERRUN = "string overrun"),
            (e.MISSING_CONTINUE = "missing continuation byte"),
            (e.OUT_OF_RANGE = "out of UTF-8 range"),
            (e.UTF16_SURROGATE = "UTF-16 surrogate"),
            (e.OVERLONG = "overlong representation");
        })(s || (s = {}));
      const f = Object.freeze({
        error: function (e, r, t, n, i) {
          return o.throwArgumentError(
            `invalid codepoint at offset ${r}; ${e}`,
            "bytes",
            t
          );
        },
        ignore: a,
        replace: function (e, r, t, n, o) {
          return e === s.OVERLONG
            ? (n.push(o), 0)
            : (n.push(65533), a(e, r, t));
        },
      });
      function c(e, r) {
        null == r && (r = f.error), (e = (0, n.k9)(e));
        const t = [];
        let o = 0;
        for (; o < e.length; ) {
          const n = e[o++];
          if (n >> 7 === 0) {
            t.push(n);
            continue;
          }
          let i = null,
            a = null;
          if (192 === (224 & n)) (i = 1), (a = 127);
          else if (224 === (240 & n)) (i = 2), (a = 2047);
          else {
            if (240 !== (248 & n)) {
              o += r(
                128 === (192 & n) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX,
                o - 1,
                e,
                t
              );
              continue;
            }
            (i = 3), (a = 65535);
          }
          if (o - 1 + i >= e.length) {
            o += r(s.OVERRUN, o - 1, e, t);
            continue;
          }
          let f = n & ((1 << (8 - i - 1)) - 1);
          for (let c = 0; c < i; c++) {
            let n = e[o];
            if (128 != (192 & n)) {
              (o += r(s.MISSING_CONTINUE, o, e, t)), (f = null);
              break;
            }
            (f = (f << 6) | (63 & n)), o++;
          }
          null !== f &&
            (f > 1114111
              ? (o += r(s.OUT_OF_RANGE, o - 1 - i, e, t, f))
              : f >= 55296 && f <= 57343
              ? (o += r(s.UTF16_SURROGATE, o - 1 - i, e, t, f))
              : f <= a
              ? (o += r(s.OVERLONG, o - 1 - i, e, t, f))
              : t.push(f));
        }
        return t;
      }
      function u(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : i.current;
        r != i.current && (o.checkNormalize(), (e = e.normalize(r)));
        let t = [];
        for (let n = 0; n < e.length; n++) {
          const r = e.charCodeAt(n);
          if (r < 128) t.push(r);
          else if (r < 2048) t.push((r >> 6) | 192), t.push((63 & r) | 128);
          else if (55296 == (64512 & r)) {
            n++;
            const o = e.charCodeAt(n);
            if (n >= e.length || 56320 !== (64512 & o))
              throw new Error("invalid utf-8 string");
            const i = 65536 + ((1023 & r) << 10) + (1023 & o);
            t.push((i >> 18) | 240),
              t.push(((i >> 12) & 63) | 128),
              t.push(((i >> 6) & 63) | 128),
              t.push((63 & i) | 128);
          } else
            t.push((r >> 12) | 224),
              t.push(((r >> 6) & 63) | 128),
              t.push((63 & r) | 128);
        }
        return (0, n.k9)(t);
      }
      function l(e) {
        const r = "0000" + e.toString(16);
        return "\\u" + r.substring(r.length - 4);
      }
      function h(e, r) {
        return (
          '"' +
          c(e, r)
            .map((e) => {
              if (e < 256) {
                switch (e) {
                  case 8:
                    return "\\b";
                  case 9:
                    return "\\t";
                  case 10:
                    return "\\n";
                  case 13:
                    return "\\r";
                  case 34:
                    return '\\"';
                  case 92:
                    return "\\\\";
                }
                if (e >= 32 && e < 127) return String.fromCharCode(e);
              }
              return e <= 65535
                ? l(e)
                : l(55296 + (((e -= 65536) >> 10) & 1023)) +
                    l(56320 + (1023 & e));
            })
            .join("") +
          '"'
        );
      }
      function d(e) {
        return e
          .map((e) =>
            e <= 65535
              ? String.fromCharCode(e)
              : ((e -= 65536),
                String.fromCharCode(
                  55296 + ((e >> 10) & 1023),
                  56320 + (1023 & e)
                ))
          )
          .join("");
      }
      function p(e, r) {
        return d(c(e, r));
      }
      function g(e) {
        return c(
          u(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i.current
          )
        );
      }
    },
    21892: (e, r, t) => {
      t.d(r, {
        l8: () => s,
        ck: () => c,
        Js: () => a,
        g5: () => u,
        XS: () => f,
      });
      var n = t(93210);
      const o = new (t(91264).Vy)("units/5.6.1"),
        i = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function s(e) {
        const r = String(e).split(".");
        (r.length > 2 ||
          !r[0].match(/^-?[0-9]*$/) ||
          (r[1] && !r[1].match(/^[0-9]*$/)) ||
          "." === e ||
          "-." === e) &&
          o.throwArgumentError("invalid value", "value", e);
        let t = r[0],
          n = "";
        for (
          "-" === t.substring(0, 1) && ((n = "-"), (t = t.substring(1)));
          "0" === t.substring(0, 1);

        )
          t = t.substring(1);
        "" === t && (t = "0");
        let i = "";
        for (
          2 === r.length && (i = "." + (r[1] || "0"));
          i.length > 2 && "0" === i[i.length - 1];

        )
          i = i.substring(0, i.length - 1);
        const s = [];
        for (; t.length; ) {
          if (t.length <= 3) {
            s.unshift(t);
            break;
          }
          {
            const e = t.length - 3;
            s.unshift(t.substring(e)), (t = t.substring(0, e));
          }
        }
        return n + s.join(",") + i;
      }
      function a(e, r) {
        if ("string" === typeof r) {
          const e = i.indexOf(r);
          -1 !== e && (r = 3 * e);
        }
        return (0, n.gn)(e, null != r ? r : 18);
      }
      function f(e, r) {
        if (
          ("string" !== typeof e &&
            o.throwArgumentError("value must be a string", "value", e),
          "string" === typeof r)
        ) {
          const e = i.indexOf(r);
          -1 !== e && (r = 3 * e);
        }
        return (0, n.gs)(e, null != r ? r : 18);
      }
      function c(e) {
        return a(e, 18);
      }
      function u(e) {
        return f(e, 18);
      }
    },
    26736: (e, r, t) => {
      t.r(r), t.d(r, { decode: () => T, encode: () => P });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
      const d = new h("bytes/5.8.0");
      function p(e) {
        return !!e.toHexString;
      }
      function g(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return g(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function m(e) {
        return (b(e) && !(e.length % 2)) || v(e);
      }
      function y(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function v(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!y(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!y(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function E(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          d.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), g(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          p(e) && (e = e.toHexString()),
          b(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : d.throwArgumentError("hex data is odd-length", "value", e));
          const n = [];
          for (let e = 0; e < t.length; e += 2)
            n.push(parseInt(t.substring(e, e + 2), 16));
          return g(new Uint8Array(n));
        }
        return v(e)
          ? g(new Uint8Array(e))
          : d.throwArgumentError("invalid arrayify value", "value", e);
      }
      function b(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const A = "0123456789abcdef";
      function w(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          d.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = A[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          p(e))
        )
          return e.toHexString();
        if (b(e))
          return (
            e.length % 2 &&
              ("left" === r.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === r.hexPad
                ? (e += "0")
                : d.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (v(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += A[(240 & n) >> 4] + A[15 & n];
          }
          return r;
        }
        return d.throwArgumentError("invalid hexlify value", "value", e);
      }
      const N = new h("rlp/5.6.1");
      function I(e) {
        const r = [];
        for (; e; ) r.unshift(255 & e), (e >>= 8);
        return r;
      }
      function R(e, r, t) {
        let n = 0;
        for (let o = 0; o < t; o++) n = 256 * n + e[r + o];
        return n;
      }
      function _(e) {
        if (Array.isArray(e)) {
          let r = [];
          if (
            (e.forEach(function (e) {
              r = r.concat(_(e));
            }),
            r.length <= 55)
          )
            return r.unshift(192 + r.length), r;
          const t = I(r.length);
          return t.unshift(247 + t.length), t.concat(r);
        }
        m(e) ||
          N.throwArgumentError("RLP object must be BytesLike", "object", e);
        const r = Array.prototype.slice.call(E(e));
        if (1 === r.length && r[0] <= 127) return r;
        if (r.length <= 55) return r.unshift(128 + r.length), r;
        const t = I(r.length);
        return t.unshift(183 + t.length), t.concat(r);
      }
      function P(e) {
        return w(_(e));
      }
      function S(e, r, t, n) {
        const o = [];
        for (; t < r + 1 + n; ) {
          const i = k(e, t);
          o.push(i.result),
            (t += i.consumed) > r + 1 + n &&
              N.throwError("child data too short", h.errors.BUFFER_OVERRUN, {});
        }
        return { consumed: 1 + n, result: o };
      }
      function k(e, r) {
        if (
          (0 === e.length &&
            N.throwError("data too short", h.errors.BUFFER_OVERRUN, {}),
          e[r] >= 248)
        ) {
          const t = e[r] - 247;
          r + 1 + t > e.length &&
            N.throwError(
              "data short segment too short",
              h.errors.BUFFER_OVERRUN,
              {}
            );
          const n = R(e, r + 1, t);
          return (
            r + 1 + t + n > e.length &&
              N.throwError(
                "data long segment too short",
                h.errors.BUFFER_OVERRUN,
                {}
              ),
            S(e, r, r + 1 + t, t + n)
          );
        }
        if (e[r] >= 192) {
          const t = e[r] - 192;
          return (
            r + 1 + t > e.length &&
              N.throwError("data array too short", h.errors.BUFFER_OVERRUN, {}),
            S(e, r, r + 1, t)
          );
        }
        if (e[r] >= 184) {
          const t = e[r] - 183;
          r + 1 + t > e.length &&
            N.throwError("data array too short", h.errors.BUFFER_OVERRUN, {});
          const n = R(e, r + 1, t);
          r + 1 + t + n > e.length &&
            N.throwError("data array too short", h.errors.BUFFER_OVERRUN, {});
          return {
            consumed: 1 + t + n,
            result: w(e.slice(r + 1 + t, r + 1 + t + n)),
          };
        }
        if (e[r] >= 128) {
          const t = e[r] - 128;
          r + 1 + t > e.length &&
            N.throwError("data too short", h.errors.BUFFER_OVERRUN, {});
          return { consumed: 1 + t, result: w(e.slice(r + 1, r + 1 + t)) };
        }
        return { consumed: 1, result: w(e[r]) };
      }
      function T(e) {
        const r = E(e),
          t = k(r, 0);
        return (
          t.consumed !== r.length &&
            N.throwArgumentError("invalid rlp data", "data", e),
          t.result
        );
      }
    },
    27026: (e, r, t) => {
      t.d(r, {
        Eh: () => Ee,
        $2: () => Se,
        Kt: () => Ie,
        qg: () => Me,
        x_: () => Re,
        lK: () => xe,
      });
      var n = t(11759),
        o = t(89522),
        i = t(12379),
        s = t.n(i);
      function a(e) {
        return "0x" + s().keccak_256((0, n.k9)(e));
      }
      var f = t(28638);
      const c = new f.Vy("address/5.8.0");
      function u(e) {
        (0, n.Lo)(e, 20) ||
          c.throwArgumentError("invalid address", "address", e);
        const r = (e = e.toLowerCase()).substring(2).split(""),
          t = new Uint8Array(40);
        for (let n = 0; n < 40; n++) t[n] = r[n].charCodeAt(0);
        const o = (0, n.k9)(a(t));
        for (let n = 0; n < 40; n += 2)
          o[n >> 1] >> 4 >= 8 && (r[n] = r[n].toUpperCase()),
            (15 & o[n >> 1]) >= 8 && (r[n + 1] = r[n + 1].toUpperCase());
        return "0x" + r.join("");
      }
      const l = {};
      for (let Fe = 0; Fe < 10; Fe++) l[String(Fe)] = String(Fe);
      for (let Fe = 0; Fe < 26; Fe++)
        l[String.fromCharCode(65 + Fe)] = String(10 + Fe);
      const h = Math.floor(
        ((d = 9007199254740991),
        Math.log10 ? Math.log10(d) : Math.log(d) / Math.LN10)
      );
      var d;
      function p(e) {
        let r = (e =
          (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00")
          .split("")
          .map((e) => l[e])
          .join("");
        for (; r.length >= h; ) {
          let e = r.substring(0, h);
          r = (parseInt(e, 10) % 97) + r.substring(e.length);
        }
        let t = String(98 - (parseInt(r, 10) % 97));
        for (; t.length < 2; ) t = "0" + t;
        return t;
      }
      function g(e) {
        let r = null;
        if (
          ("string" !== typeof e &&
            c.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== e.substring(0, 2) && (e = "0x" + e),
            (r = u(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              r !== e &&
              c.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            e.substring(2, 4) !== p(e) &&
              c.throwArgumentError("bad icap checksum", "address", e),
              r = (0, o.Os)(e.substring(4));
            r.length < 40;

          )
            r = "0" + r;
          r = u("0x" + r);
        } else c.throwArgumentError("invalid address", "address", e);
        return r;
      }
      const m = o.gH.from(0);
      const y = new f.Vy("properties/5.8.0");
      function v(e, r, t) {
        Object.defineProperty(e, r, { enumerable: !0, value: t, writable: !1 });
      }
      const E = new f.Vy("rlp/5.8.0");
      function b(e) {
        const r = [];
        for (; e; ) r.unshift(255 & e), (e >>= 8);
        return r;
      }
      function A(e, r, t) {
        let n = 0;
        for (let o = 0; o < t; o++) n = 256 * n + e[r + o];
        return n;
      }
      function w(e) {
        if (Array.isArray(e)) {
          let r = [];
          if (
            (e.forEach(function (e) {
              r = r.concat(w(e));
            }),
            r.length <= 55)
          )
            return r.unshift(192 + r.length), r;
          const t = b(r.length);
          return t.unshift(247 + t.length), t.concat(r);
        }
        (0, n.f)(e) ||
          E.throwArgumentError("RLP object must be BytesLike", "object", e);
        const r = Array.prototype.slice.call((0, n.k9)(e));
        if (1 === r.length && r[0] <= 127) return r;
        if (r.length <= 55) return r.unshift(128 + r.length), r;
        const t = b(r.length);
        return t.unshift(183 + t.length), t.concat(r);
      }
      function N(e) {
        return (0, n.c$)(w(e));
      }
      function I(e, r, t, n) {
        const o = [];
        for (; t < r + 1 + n; ) {
          const i = R(e, t);
          o.push(i.result),
            (t += i.consumed) > r + 1 + n &&
              E.throwError(
                "child data too short",
                f.Vy.errors.BUFFER_OVERRUN,
                {}
              );
        }
        return { consumed: 1 + n, result: o };
      }
      function R(e, r) {
        if (
          (0 === e.length &&
            E.throwError("data too short", f.Vy.errors.BUFFER_OVERRUN, {}),
          e[r] >= 248)
        ) {
          const t = e[r] - 247;
          r + 1 + t > e.length &&
            E.throwError(
              "data short segment too short",
              f.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          const n = A(e, r + 1, t);
          return (
            r + 1 + t + n > e.length &&
              E.throwError(
                "data long segment too short",
                f.Vy.errors.BUFFER_OVERRUN,
                {}
              ),
            I(e, r, r + 1 + t, t + n)
          );
        }
        if (e[r] >= 192) {
          const t = e[r] - 192;
          return (
            r + 1 + t > e.length &&
              E.throwError(
                "data array too short",
                f.Vy.errors.BUFFER_OVERRUN,
                {}
              ),
            I(e, r, r + 1, t)
          );
        }
        if (e[r] >= 184) {
          const t = e[r] - 183;
          r + 1 + t > e.length &&
            E.throwError(
              "data array too short",
              f.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          const o = A(e, r + 1, t);
          r + 1 + t + o > e.length &&
            E.throwError(
              "data array too short",
              f.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          return {
            consumed: 1 + t + o,
            result: (0, n.c$)(e.slice(r + 1 + t, r + 1 + t + o)),
          };
        }
        if (e[r] >= 128) {
          const t = e[r] - 128;
          r + 1 + t > e.length &&
            E.throwError("data too short", f.Vy.errors.BUFFER_OVERRUN, {});
          return {
            consumed: 1 + t,
            result: (0, n.c$)(e.slice(r + 1, r + 1 + t)),
          };
        }
        return { consumed: 1, result: (0, n.c$)(e[r]) };
      }
      function _(e) {
        const r = (0, n.k9)(e),
          t = R(r, 0);
        return (
          t.consumed !== r.length &&
            E.throwArgumentError("invalid rlp data", "data", e),
          t.result
        );
      }
      var P = t(68571),
        S = t.n(P),
        k = t(16143),
        T = t.n(k);
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof t.g
        ? t.g
        : "undefined" !== typeof self && self;
      function O(e, r, t) {
        return (
          (t = {
            path: r,
            exports: {},
            require: function (e, r) {
              return (function () {
                throw new Error(
                  "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                );
              })((void 0 === r || null === r) && t.path);
            },
          }),
          e(t, t.exports),
          t.exports
        );
      }
      var C = x;
      function x(e, r) {
        if (!e) throw new Error(r || "Assertion failed");
      }
      x.equal = function (e, r, t) {
        if (e != r) throw new Error(t || "Assertion failed: " + e + " != " + r);
      };
      var U = O(function (e, r) {
          var t = r;
          function n(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function o(e) {
            for (var r = "", t = 0; t < e.length; t++)
              r += n(e[t].toString(16));
            return r;
          }
          (t.toArray = function (e, r) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var t = [];
            if ("string" !== typeof e) {
              for (var n = 0; n < e.length; n++) t[n] = 0 | e[n];
              return t;
            }
            if ("hex" === r) {
              (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                (e = "0" + e);
              for (n = 0; n < e.length; n += 2)
                t.push(parseInt(e[n] + e[n + 1], 16));
            } else
              for (n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n),
                  i = o >> 8,
                  s = 255 & o;
                i ? t.push(i, s) : t.push(s);
              }
            return t;
          }),
            (t.zero2 = n),
            (t.toHex = o),
            (t.encode = function (e, r) {
              return "hex" === r ? o(e) : e;
            });
        }),
        M = O(function (e, r) {
          var t = r;
          (t.assert = C),
            (t.toArray = U.toArray),
            (t.zero2 = U.zero2),
            (t.toHex = U.toHex),
            (t.encode = U.encode),
            (t.getNAF = function (e, r, t) {
              var n,
                o = new Array(Math.max(e.bitLength(), t) + 1);
              for (n = 0; n < o.length; n += 1) o[n] = 0;
              var i = 1 << (r + 1),
                s = e.clone();
              for (n = 0; n < o.length; n++) {
                var a,
                  f = s.andln(i - 1);
                s.isOdd()
                  ? ((a = f > (i >> 1) - 1 ? (i >> 1) - f : f), s.isubn(a))
                  : (a = 0),
                  (o[n] = a),
                  s.iushrn(1);
              }
              return o;
            }),
            (t.getJSF = function (e, r) {
              var t = [[], []];
              (e = e.clone()), (r = r.clone());
              for (var n, o = 0, i = 0; e.cmpn(-o) > 0 || r.cmpn(-i) > 0; ) {
                var s,
                  a,
                  f = (e.andln(3) + o) & 3,
                  c = (r.andln(3) + i) & 3;
                3 === f && (f = -1),
                  3 === c && (c = -1),
                  (s =
                    0 === (1 & f)
                      ? 0
                      : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== c
                      ? f
                      : -f),
                  t[0].push(s),
                  (a =
                    0 === (1 & c)
                      ? 0
                      : (3 !== (n = (r.andln(7) + i) & 7) && 5 !== n) || 2 !== f
                      ? c
                      : -c),
                  t[1].push(a),
                  2 * o === s + 1 && (o = 1 - o),
                  2 * i === a + 1 && (i = 1 - i),
                  e.iushrn(1),
                  r.iushrn(1);
              }
              return t;
            }),
            (t.cachedProperty = function (e, r, t) {
              var n = "_" + r;
              e.prototype[r] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = t.call(this));
              };
            }),
            (t.parseBytes = function (e) {
              return "string" === typeof e ? t.toArray(e, "hex") : e;
            }),
            (t.intFromLE = function (e) {
              return new (S())(e, "hex", "le");
            });
        }),
        F = M.getNAF,
        L = M.getJSF,
        D = M.assert;
      function B(e, r) {
        (this.type = e),
          (this.p = new (S())(r.p, 16)),
          (this.red = r.prime ? S().red(r.prime) : S().mont(this.p)),
          (this.zero = new (S())(0).toRed(this.red)),
          (this.one = new (S())(1).toRed(this.red)),
          (this.two = new (S())(2).toRed(this.red)),
          (this.n = r.n && new (S())(r.n, 16)),
          (this.g = r.g && this.pointFromJSON(r.g, r.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var t = this.n && this.p.div(this.n);
        !t || t.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      var G = B;
      function q(e, r) {
        (this.curve = e), (this.type = r), (this.precomputed = null);
      }
      (B.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (B.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (B.prototype._fixedNafMul = function (e, r) {
          D(e.precomputed);
          var t = e._getDoubles(),
            n = F(r, 1, this._bitLength),
            o = (1 << (t.step + 1)) - (t.step % 2 === 0 ? 2 : 1);
          o /= 3;
          var i,
            s,
            a = [];
          for (i = 0; i < n.length; i += t.step) {
            s = 0;
            for (var f = i + t.step - 1; f >= i; f--) s = (s << 1) + n[f];
            a.push(s);
          }
          for (
            var c = this.jpoint(null, null, null),
              u = this.jpoint(null, null, null),
              l = o;
            l > 0;
            l--
          ) {
            for (i = 0; i < a.length; i++)
              (s = a[i]) === l
                ? (u = u.mixedAdd(t.points[i]))
                : s === -l && (u = u.mixedAdd(t.points[i].neg()));
            c = c.add(u);
          }
          return c.toP();
        }),
        (B.prototype._wnafMul = function (e, r) {
          var t = 4,
            n = e._getNAFPoints(t);
          t = n.wnd;
          for (
            var o = n.points,
              i = F(r, t, this._bitLength),
              s = this.jpoint(null, null, null),
              a = i.length - 1;
            a >= 0;
            a--
          ) {
            for (var f = 0; a >= 0 && 0 === i[a]; a--) f++;
            if ((a >= 0 && f++, (s = s.dblp(f)), a < 0)) break;
            var c = i[a];
            D(0 !== c),
              (s =
                "affine" === e.type
                  ? c > 0
                    ? s.mixedAdd(o[(c - 1) >> 1])
                    : s.mixedAdd(o[(-c - 1) >> 1].neg())
                  : c > 0
                  ? s.add(o[(c - 1) >> 1])
                  : s.add(o[(-c - 1) >> 1].neg()));
          }
          return "affine" === e.type ? s.toP() : s;
        }),
        (B.prototype._wnafMulAdd = function (e, r, t, n, o) {
          var i,
            s,
            a,
            f = this._wnafT1,
            c = this._wnafT2,
            u = this._wnafT3,
            l = 0;
          for (i = 0; i < n; i++) {
            var h = (a = r[i])._getNAFPoints(e);
            (f[i] = h.wnd), (c[i] = h.points);
          }
          for (i = n - 1; i >= 1; i -= 2) {
            var d = i - 1,
              p = i;
            if (1 === f[d] && 1 === f[p]) {
              var g = [r[d], null, null, r[p]];
              0 === r[d].y.cmp(r[p].y)
                ? ((g[1] = r[d].add(r[p])),
                  (g[2] = r[d].toJ().mixedAdd(r[p].neg())))
                : 0 === r[d].y.cmp(r[p].y.redNeg())
                ? ((g[1] = r[d].toJ().mixedAdd(r[p])),
                  (g[2] = r[d].add(r[p].neg())))
                : ((g[1] = r[d].toJ().mixedAdd(r[p])),
                  (g[2] = r[d].toJ().mixedAdd(r[p].neg())));
              var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = L(t[d], t[p]);
              for (
                l = Math.max(y[0].length, l),
                  u[d] = new Array(l),
                  u[p] = new Array(l),
                  s = 0;
                s < l;
                s++
              ) {
                var v = 0 | y[0][s],
                  E = 0 | y[1][s];
                (u[d][s] = m[3 * (v + 1) + (E + 1)]), (u[p][s] = 0), (c[d] = g);
              }
            } else
              (u[d] = F(t[d], f[d], this._bitLength)),
                (u[p] = F(t[p], f[p], this._bitLength)),
                (l = Math.max(u[d].length, l)),
                (l = Math.max(u[p].length, l));
          }
          var b = this.jpoint(null, null, null),
            A = this._wnafT4;
          for (i = l; i >= 0; i--) {
            for (var w = 0; i >= 0; ) {
              var N = !0;
              for (s = 0; s < n; s++)
                (A[s] = 0 | u[s][i]), 0 !== A[s] && (N = !1);
              if (!N) break;
              w++, i--;
            }
            if ((i >= 0 && w++, (b = b.dblp(w)), i < 0)) break;
            for (s = 0; s < n; s++) {
              var I = A[s];
              0 !== I &&
                (I > 0
                  ? (a = c[s][(I - 1) >> 1])
                  : I < 0 && (a = c[s][(-I - 1) >> 1].neg()),
                (b = "affine" === a.type ? b.mixedAdd(a) : b.add(a)));
            }
          }
          for (i = 0; i < n; i++) c[i] = null;
          return o ? b : b.toP();
        }),
        (B.BasePoint = q),
        (q.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (q.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (B.prototype.decodePoint = function (e, r) {
          e = M.toArray(e, r);
          var t = this.p.byteLength();
          if (
            (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
            e.length - 1 === 2 * t
          )
            return (
              6 === e[0]
                ? D(e[e.length - 1] % 2 === 0)
                : 7 === e[0] && D(e[e.length - 1] % 2 === 1),
              this.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === t)
            return this.pointFromX(e.slice(1, 1 + t), 3 === e[0]);
          throw new Error("Unknown point format");
        }),
        (q.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (q.prototype._encode = function (e) {
          var r = this.curve.p.byteLength(),
            t = this.getX().toArray("be", r);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(t)
            : [4].concat(t, this.getY().toArray("be", r));
        }),
        (q.prototype.encode = function (e, r) {
          return M.encode(this._encode(r), e);
        }),
        (q.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var r = { doubles: null, naf: null, beta: null };
          return (
            (r.naf = this._getNAFPoints(8)),
            (r.doubles = this._getDoubles(4, e)),
            (r.beta = this._getBeta()),
            (this.precomputed = r),
            this
          );
        }),
        (q.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var r = this.precomputed.doubles;
          return (
            !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
          );
        }),
        (q.prototype._getDoubles = function (e, r) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var t = [this], n = this, o = 0; o < r; o += e) {
            for (var i = 0; i < e; i++) n = n.dbl();
            t.push(n);
          }
          return { step: e, points: t };
        }),
        (q.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var r = [this],
              t = (1 << e) - 1,
              n = 1 === t ? null : this.dbl(),
              o = 1;
            o < t;
            o++
          )
            r[o] = r[o - 1].add(n);
          return { wnd: e, points: r };
        }),
        (q.prototype._getBeta = function () {
          return null;
        }),
        (q.prototype.dblp = function (e) {
          for (var r = this, t = 0; t < e; t++) r = r.dbl();
          return r;
        });
      var V = O(function (e) {
          "function" === typeof Object.create
            ? (e.exports = function (e, r) {
                r &&
                  ((e.super_ = r),
                  (e.prototype = Object.create(r.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, r) {
                if (r) {
                  e.super_ = r;
                  var t = function () {};
                  (t.prototype = r.prototype),
                    (e.prototype = new t()),
                    (e.prototype.constructor = e);
                }
              });
        }),
        j = M.assert;
      function z(e) {
        G.call(this, "short", e),
          (this.a = new (S())(e.a, 16).toRed(this.red)),
          (this.b = new (S())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      V(z, G);
      var K = z;
      function W(e, r, t, n) {
        G.BasePoint.call(this, e, "affine"),
          null === r && null === t
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (S())(r, 16)),
              (this.y = new (S())(t, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function H(e, r, t, n) {
        G.BasePoint.call(this, e, "jacobian"),
          null === r && null === t && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (S())(0)))
            : ((this.x = new (S())(r, 16)),
              (this.y = new (S())(t, 16)),
              (this.z = new (S())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      (z.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var r, t;
          if (e.beta) r = new (S())(e.beta, 16).toRed(this.red);
          else {
            var n = this._getEndoRoots(this.p);
            r = (r = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (e.lambda) t = new (S())(e.lambda, 16);
          else {
            var o = this._getEndoRoots(this.n);
            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(r))
              ? (t = o[0])
              : ((t = o[1]), j(0 === this.g.mul(t).x.cmp(this.g.x.redMul(r))));
          }
          return {
            beta: r,
            lambda: t,
            basis: e.basis
              ? e.basis.map(function (e) {
                  return { a: new (S())(e.a, 16), b: new (S())(e.b, 16) };
                })
              : this._getEndoBasis(t),
          };
        }
      }),
        (z.prototype._getEndoRoots = function (e) {
          var r = e === this.p ? this.red : S().mont(e),
            t = new (S())(2).toRed(r).redInvm(),
            n = t.redNeg(),
            o = new (S())(3).toRed(r).redNeg().redSqrt().redMul(t);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (z.prototype._getEndoBasis = function (e) {
          for (
            var r,
              t,
              n,
              o,
              i,
              s,
              a,
              f,
              c,
              u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              l = e,
              h = this.n.clone(),
              d = new (S())(1),
              p = new (S())(0),
              g = new (S())(0),
              m = new (S())(1),
              y = 0;
            0 !== l.cmpn(0);

          ) {
            var v = h.div(l);
            (f = h.sub(v.mul(l))), (c = g.sub(v.mul(d)));
            var E = m.sub(v.mul(p));
            if (!n && f.cmp(u) < 0)
              (r = a.neg()), (t = d), (n = f.neg()), (o = c);
            else if (n && 2 === ++y) break;
            (a = f), (h = l), (l = f), (g = d), (d = c), (m = p), (p = E);
          }
          (i = f.neg()), (s = c);
          var b = n.sqr().add(o.sqr());
          return (
            i.sqr().add(s.sqr()).cmp(b) >= 0 && ((i = r), (s = t)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            i.negative && ((i = i.neg()), (s = s.neg())),
            [
              { a: n, b: o },
              { a: i, b: s },
            ]
          );
        }),
        (z.prototype._endoSplit = function (e) {
          var r = this.endo.basis,
            t = r[0],
            n = r[1],
            o = n.b.mul(e).divRound(this.n),
            i = t.b.neg().mul(e).divRound(this.n),
            s = o.mul(t.a),
            a = i.mul(n.a),
            f = o.mul(t.b),
            c = i.mul(n.b);
          return { k1: e.sub(s).sub(a), k2: f.add(c).neg() };
        }),
        (z.prototype.pointFromX = function (e, r) {
          (e = new (S())(e, 16)).red || (e = e.toRed(this.red));
          var t = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = t.redSqrt();
          if (0 !== n.redSqr().redSub(t).cmp(this.zero))
            throw new Error("invalid point");
          var o = n.fromRed().isOdd();
          return ((r && !o) || (!r && o)) && (n = n.redNeg()), this.point(e, n);
        }),
        (z.prototype.validate = function (e) {
          if (e.inf) return !0;
          var r = e.x,
            t = e.y,
            n = this.a.redMul(r),
            o = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
          return 0 === t.redSqr().redISub(o).cmpn(0);
        }),
        (z.prototype._endoWnafMulAdd = function (e, r, t) {
          for (
            var n = this._endoWnafT1, o = this._endoWnafT2, i = 0;
            i < e.length;
            i++
          ) {
            var s = this._endoSplit(r[i]),
              a = e[i],
              f = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (f = f.neg(!0))),
              (n[2 * i] = a),
              (n[2 * i + 1] = f),
              (o[2 * i] = s.k1),
              (o[2 * i + 1] = s.k2);
          }
          for (
            var c = this._wnafMulAdd(1, n, o, 2 * i, t), u = 0;
            u < 2 * i;
            u++
          )
            (n[u] = null), (o[u] = null);
          return c;
        }),
        V(W, G.BasePoint),
        (z.prototype.point = function (e, r, t) {
          return new W(this, e, r, t);
        }),
        (z.prototype.pointFromJSON = function (e, r) {
          return W.fromJSON(this, e, r);
        }),
        (W.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var r = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var t = this.curve,
                n = function (e) {
                  return t.point(e.x.redMul(t.endo.beta), e.y);
                };
              (e.beta = r),
                (r.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n),
                  },
                });
            }
            return r;
          }
        }),
        (W.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (W.fromJSON = function (e, r, t) {
          "string" === typeof r && (r = JSON.parse(r));
          var n = e.point(r[0], r[1], t);
          if (!r[2]) return n;
          function o(r) {
            return e.point(r[0], r[1], t);
          }
          var i = r[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: i.doubles && {
                step: i.doubles.step,
                points: [n].concat(i.doubles.points.map(o)),
              },
              naf: i.naf && {
                wnd: i.naf.wnd,
                points: [n].concat(i.naf.points.map(o)),
              },
            }),
            n
          );
        }),
        (W.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (W.prototype.isInfinity = function () {
          return this.inf;
        }),
        (W.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var r = this.y.redSub(e.y);
          0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(e.x).redInvm()));
          var t = r.redSqr().redISub(this.x).redISub(e.x),
            n = r.redMul(this.x.redSub(t)).redISub(this.y);
          return this.curve.point(t, n);
        }),
        (W.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var r = this.curve.a,
            t = this.x.redSqr(),
            n = e.redInvm(),
            o = t.redAdd(t).redIAdd(t).redIAdd(r).redMul(n),
            i = o.redSqr().redISub(this.x.redAdd(this.x)),
            s = o.redMul(this.x.redSub(i)).redISub(this.y);
          return this.curve.point(i, s);
        }),
        (W.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (W.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (W.prototype.mul = function (e) {
          return (
            (e = new (S())(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          );
        }),
        (W.prototype.mulAdd = function (e, r, t) {
          var n = [this, r],
            o = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, o)
            : this.curve._wnafMulAdd(1, n, o, 2);
        }),
        (W.prototype.jmulAdd = function (e, r, t) {
          var n = [this, r],
            o = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, o, !0)
            : this.curve._wnafMulAdd(1, n, o, 2, !0);
        }),
        (W.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (W.prototype.neg = function (e) {
          if (this.inf) return this;
          var r = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var t = this.precomputed,
              n = function (e) {
                return e.neg();
              };
            r.precomputed = {
              naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
              doubles: t.doubles && {
                step: t.doubles.step,
                points: t.doubles.points.map(n),
              },
            };
          }
          return r;
        }),
        (W.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        V(H, G.BasePoint),
        (z.prototype.jpoint = function (e, r, t) {
          return new H(this, e, r, t);
        }),
        (H.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            r = e.redSqr(),
            t = this.x.redMul(r),
            n = this.y.redMul(r).redMul(e);
          return this.curve.point(t, n);
        }),
        (H.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (H.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var r = e.z.redSqr(),
            t = this.z.redSqr(),
            n = this.x.redMul(r),
            o = e.x.redMul(t),
            i = this.y.redMul(r.redMul(e.z)),
            s = e.y.redMul(t.redMul(this.z)),
            a = n.redSub(o),
            f = i.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var c = a.redSqr(),
            u = c.redMul(a),
            l = n.redMul(c),
            h = f.redSqr().redIAdd(u).redISub(l).redISub(l),
            d = f.redMul(l.redISub(h)).redISub(i.redMul(u)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(h, d, p);
        }),
        (H.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var r = this.z.redSqr(),
            t = this.x,
            n = e.x.redMul(r),
            o = this.y,
            i = e.y.redMul(r).redMul(this.z),
            s = t.redSub(n),
            a = o.redSub(i);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = s.redSqr(),
            c = f.redMul(s),
            u = t.redMul(f),
            l = a.redSqr().redIAdd(c).redISub(u).redISub(u),
            h = a.redMul(u.redISub(l)).redISub(o.redMul(c)),
            d = this.z.redMul(s);
          return this.curve.jpoint(l, h, d);
        }),
        (H.prototype.dblp = function (e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          var r;
          if (this.curve.zeroA || this.curve.threeA) {
            var t = this;
            for (r = 0; r < e; r++) t = t.dbl();
            return t;
          }
          var n = this.curve.a,
            o = this.curve.tinv,
            i = this.x,
            s = this.y,
            a = this.z,
            f = a.redSqr().redSqr(),
            c = s.redAdd(s);
          for (r = 0; r < e; r++) {
            var u = i.redSqr(),
              l = c.redSqr(),
              h = l.redSqr(),
              d = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f)),
              p = i.redMul(l),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(h);
            var v = c.redMul(a);
            r + 1 < e && (f = f.redMul(h)), (i = g), (a = v), (c = y);
          }
          return this.curve.jpoint(i, c.redMul(o), a);
        }),
        (H.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (H.prototype._zeroDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              o = this.y.redSqr(),
              i = o.redSqr(),
              s = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              f = a.redSqr().redISub(s).redISub(s),
              c = i.redIAdd(i);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (e = f),
              (r = a.redMul(s.redISub(f)).redISub(c)),
              (t = this.y.redAdd(this.y));
          } else {
            var u = this.x.redSqr(),
              l = this.y.redSqr(),
              h = l.redSqr(),
              d = this.x.redAdd(l).redSqr().redISub(u).redISub(h);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u),
              g = p.redSqr(),
              m = h.redIAdd(h);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = g.redISub(d).redISub(d)),
              (r = p.redMul(d.redISub(e)).redISub(m)),
              (t = (t = this.y.redMul(this.z)).redIAdd(t));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (H.prototype._threeDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              o = this.y.redSqr(),
              i = o.redSqr(),
              s = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              f = a.redSqr().redISub(s).redISub(s);
            e = f;
            var c = i.redIAdd(i);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (r = a.redMul(s.redISub(f)).redISub(c)),
              (t = this.y.redAdd(this.y));
          } else {
            var u = this.z.redSqr(),
              l = this.y.redSqr(),
              h = this.x.redMul(l),
              d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = d.redSqr().redISub(g)),
              (t = this.y.redAdd(this.z).redSqr().redISub(l).redISub(u));
            var m = l.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (r = d.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (H.prototype._dbl = function () {
          var e = this.curve.a,
            r = this.x,
            t = this.y,
            n = this.z,
            o = n.redSqr().redSqr(),
            i = r.redSqr(),
            s = t.redSqr(),
            a = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(o)),
            f = r.redAdd(r),
            c = (f = f.redIAdd(f)).redMul(s),
            u = a.redSqr().redISub(c.redAdd(c)),
            l = c.redISub(u),
            h = s.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = a.redMul(l).redISub(h),
            p = t.redAdd(t).redMul(n);
          return this.curve.jpoint(u, d, p);
        }),
        (H.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            t = this.z.redSqr(),
            n = r.redSqr(),
            o = e.redAdd(e).redIAdd(e),
            i = o.redSqr(),
            s = this.x.redAdd(r).redSqr().redISub(e).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              i
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var c = o.redIAdd(s).redSqr().redISub(i).redISub(a).redISub(f),
            u = r.redMul(c);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var l = this.x.redMul(a).redISub(u);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var h = this.y.redMul(c.redMul(f.redISub(c)).redISub(s.redMul(a)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = this.z.redAdd(s).redSqr().redISub(t).redISub(a);
          return this.curve.jpoint(l, h, d);
        }),
        (H.prototype.mul = function (e, r) {
          return (e = new (S())(e, r)), this.curve._wnafMul(this, e);
        }),
        (H.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var r = this.z.redSqr(),
            t = e.z.redSqr();
          if (0 !== this.x.redMul(t).redISub(e.x.redMul(r)).cmpn(0)) return !1;
          var n = r.redMul(this.z),
            o = t.redMul(e.z);
          return 0 === this.y.redMul(o).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (H.prototype.eqXToP = function (e) {
          var r = this.z.redSqr(),
            t = e.toRed(this.curve.red).redMul(r);
          if (0 === this.x.cmp(t)) return !0;
          for (var n = e.clone(), o = this.curve.redN.redMul(r); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(o), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (H.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (H.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var J = O(function (e, r) {
          var t = r;
          (t.base = G), (t.short = K), (t.mont = null), (t.edwards = null);
        }),
        X = O(function (e, r) {
          var t,
            n = r,
            o = M.assert;
          function i(e) {
            "short" === e.type
              ? (this.curve = new J.short(e))
              : "edwards" === e.type
              ? (this.curve = new J.edwards(e))
              : (this.curve = new J.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              o(this.g.validate(), "Invalid curve"),
              o(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function s(e, r) {
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var t = new i(r);
                return (
                  Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: t,
                  }),
                  t
                );
              },
            });
          }
          (n.PresetCurve = i),
            s("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: T().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            s("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: T().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            s("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: T().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            s("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: T().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            s("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: T().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            s("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: T().sha256,
              gRed: !1,
              g: ["9"],
            }),
            s("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: T().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            t = null.crash();
          } catch (a) {
            t = void 0;
          }
          s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: T().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              t,
            ],
          });
        });
      function Q(e) {
        if (!(this instanceof Q)) return new Q(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var r = U.toArray(e.entropy, e.entropyEnc || "hex"),
          t = U.toArray(e.nonce, e.nonceEnc || "hex"),
          n = U.toArray(e.pers, e.persEnc || "hex");
        C(
          r.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(r, t, n);
      }
      var Y = Q;
      (Q.prototype._init = function (e, r, t) {
        var n = e.concat(r).concat(t);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var o = 0; o < this.V.length; o++)
          (this.K[o] = 0), (this.V[o] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (Q.prototype._hmac = function () {
          return new (T().hmac)(this.hash, this.K);
        }),
        (Q.prototype._update = function (e) {
          var r = this._hmac().update(this.V).update([0]);
          e && (r = r.update(e)),
            (this.K = r.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (Q.prototype.reseed = function (e, r, t, n) {
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            (e = U.toArray(e, r)),
            (t = U.toArray(t, n)),
            C(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(t || [])),
            (this._reseed = 1);
        }),
        (Q.prototype.generate = function (e, r, t, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            t && ((t = U.toArray(t, n || "hex")), this._update(t));
          for (var o = []; o.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (o = o.concat(this.V));
          var i = o.slice(0, e);
          return this._update(t), this._reseed++, U.encode(i, r);
        });
      var Z = M.assert;
      function $(e, r) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          r.priv && this._importPrivate(r.priv, r.privEnc),
          r.pub && this._importPublic(r.pub, r.pubEnc);
      }
      var ee = $;
      ($.fromPublic = function (e, r, t) {
        return r instanceof $ ? r : new $(e, { pub: r, pubEnc: t });
      }),
        ($.fromPrivate = function (e, r, t) {
          return r instanceof $ ? r : new $(e, { priv: r, privEnc: t });
        }),
        ($.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        ($.prototype.getPublic = function (e, r) {
          return (
            "string" === typeof e && ((r = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            r ? this.pub.encode(r, e) : this.pub
          );
        }),
        ($.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        ($.prototype._importPrivate = function (e, r) {
          (this.priv = new (S())(e, r || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        ($.prototype._importPublic = function (e, r) {
          if (e.x || e.y)
            return (
              "mont" === this.ec.curve.type
                ? Z(e.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  Z(e.x && e.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, r);
        }),
        ($.prototype.derive = function (e) {
          return (
            e.validate() || Z(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        ($.prototype.sign = function (e, r, t) {
          return this.ec.sign(e, this, r, t);
        }),
        ($.prototype.verify = function (e, r, t) {
          return this.ec.verify(e, r, this, void 0, t);
        }),
        ($.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var re = M.assert;
      function te(e, r) {
        if (e instanceof te) return e;
        this._importDER(e, r) ||
          (re(e.r && e.s, "Signature without r or s"),
          (this.r = new (S())(e.r, 16)),
          (this.s = new (S())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      var ne = te;
      function oe() {
        this.place = 0;
      }
      function ie(e, r) {
        var t = e[r.place++];
        if (!(128 & t)) return t;
        var n = 15 & t;
        if (0 === n || n > 4) return !1;
        if (0 === e[r.place]) return !1;
        for (var o = 0, i = 0, s = r.place; i < n; i++, s++)
          (o <<= 8), (o |= e[s]), (o >>>= 0);
        return !(o <= 127) && ((r.place = s), o);
      }
      function se(e) {
        for (var r = 0, t = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < t; )
          r++;
        return 0 === r ? e : e.slice(r);
      }
      function ae(e, r) {
        if (r < 128) e.push(r);
        else {
          var t = 1 + ((Math.log(r) / Math.LN2) >>> 3);
          for (e.push(128 | t); --t; ) e.push((r >>> (t << 3)) & 255);
          e.push(r);
        }
      }
      (te.prototype._importDER = function (e, r) {
        e = M.toArray(e, r);
        var t = new oe();
        if (48 !== e[t.place++]) return !1;
        var n = ie(e, t);
        if (!1 === n) return !1;
        if (n + t.place !== e.length) return !1;
        if (2 !== e[t.place++]) return !1;
        var o = ie(e, t);
        if (!1 === o) return !1;
        if (0 !== (128 & e[t.place])) return !1;
        var i = e.slice(t.place, o + t.place);
        if (((t.place += o), 2 !== e[t.place++])) return !1;
        var s = ie(e, t);
        if (!1 === s) return !1;
        if (e.length !== s + t.place) return !1;
        if (0 !== (128 & e[t.place])) return !1;
        var a = e.slice(t.place, s + t.place);
        if (0 === i[0]) {
          if (!(128 & i[1])) return !1;
          i = i.slice(1);
        }
        if (0 === a[0]) {
          if (!(128 & a[1])) return !1;
          a = a.slice(1);
        }
        return (
          (this.r = new (S())(i)),
          (this.s = new (S())(a)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (te.prototype.toDER = function (e) {
          var r = this.r.toArray(),
            t = this.s.toArray();
          for (
            128 & r[0] && (r = [0].concat(r)),
              128 & t[0] && (t = [0].concat(t)),
              r = se(r),
              t = se(t);
            !t[0] && !(128 & t[1]);

          )
            t = t.slice(1);
          var n = [2];
          ae(n, r.length), (n = n.concat(r)).push(2), ae(n, t.length);
          var o = n.concat(t),
            i = [48];
          return ae(i, o.length), (i = i.concat(o)), M.encode(i, e);
        });
      var fe = function () {
          throw new Error("unsupported");
        },
        ce = M.assert;
      function ue(e) {
        if (!(this instanceof ue)) return new ue(e);
        "string" === typeof e &&
          (ce(Object.prototype.hasOwnProperty.call(X, e), "Unknown curve " + e),
          (e = X[e])),
          e instanceof X.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      var le = ue;
      (ue.prototype.keyPair = function (e) {
        return new ee(this, e);
      }),
        (ue.prototype.keyFromPrivate = function (e, r) {
          return ee.fromPrivate(this, e, r);
        }),
        (ue.prototype.keyFromPublic = function (e, r) {
          return ee.fromPublic(this, e, r);
        }),
        (ue.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var r = new Y({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || fe(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              t = this.n.byteLength(),
              n = this.n.sub(new (S())(2));
            ;

          ) {
            var o = new (S())(r.generate(t));
            if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
          }
        }),
        (ue.prototype._truncateToN = function (e, r, t) {
          var n;
          if (S().isBN(e) || "number" === typeof e)
            n = (e = new (S())(e, 16)).byteLength();
          else if ("object" === typeof e)
            (n = e.length), (e = new (S())(e, 16));
          else {
            var o = e.toString();
            (n = (o.length + 1) >>> 1), (e = new (S())(o, 16));
          }
          "number" !== typeof t && (t = 8 * n);
          var i = t - this.n.bitLength();
          return (
            i > 0 && (e = e.ushrn(i)),
            !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (ue.prototype.sign = function (e, r, t, n) {
          if (
            ("object" === typeof t && ((n = t), (t = null)),
            n || (n = {}),
            "string" !== typeof e && "number" !== typeof e && !S().isBN(e))
          ) {
            ce(
              "object" === typeof e && e && "number" === typeof e.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              ce(e.length >>> 0 === e.length);
            for (var o = 0; o < e.length; o++) ce((255 & e[o]) === e[o]);
          }
          (r = this.keyFromPrivate(r, t)),
            (e = this._truncateToN(e, !1, n.msgBitLength)),
            ce(!e.isNeg(), "Can not sign a negative message");
          var i = this.n.byteLength(),
            s = r.getPrivate().toArray("be", i),
            a = e.toArray("be", i);
          ce(new (S())(a).eq(e), "Can not sign message");
          for (
            var f = new Y({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              c = this.n.sub(new (S())(1)),
              u = 0;
            ;
            u++
          ) {
            var l = n.k ? n.k(u) : new (S())(f.generate(this.n.byteLength()));
            if (
              !((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(c) >= 0)
            ) {
              var h = this.g.mul(l);
              if (!h.isInfinity()) {
                var d = h.getX(),
                  p = d.umod(this.n);
                if (0 !== p.cmpn(0)) {
                  var g = l.invm(this.n).mul(p.mul(r.getPrivate()).iadd(e));
                  if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                    var m =
                      (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                    return (
                      n.canonical &&
                        g.cmp(this.nh) > 0 &&
                        ((g = this.n.sub(g)), (m ^= 1)),
                      new ne({ r: p, s: g, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (ue.prototype.verify = function (e, r, t, n, o) {
          o || (o = {}),
            (e = this._truncateToN(e, !1, o.msgBitLength)),
            (t = this.keyFromPublic(t, n));
          var i = (r = new ne(r, "hex")).r,
            s = r.s;
          if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          var a,
            f = s.invm(this.n),
            c = f.mul(e).umod(this.n),
            u = f.mul(i).umod(this.n);
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(c, t.getPublic(), u)).isInfinity() &&
                a.eqXToP(i)
            : !(a = this.g.mulAdd(c, t.getPublic(), u)).isInfinity() &&
                0 === a.getX().umod(this.n).cmp(i);
        }),
        (ue.prototype.recoverPubKey = function (e, r, t, n) {
          ce((3 & t) === t, "The recovery param is more than two bits"),
            (r = new ne(r, n));
          var o = this.n,
            i = new (S())(e),
            s = r.r,
            a = r.s,
            f = 1 & t,
            c = t >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c)
            throw new Error("Unable to find sencond key candinate");
          s = c
            ? this.curve.pointFromX(s.add(this.curve.n), f)
            : this.curve.pointFromX(s, f);
          var u = r.r.invm(o),
            l = o.sub(i).mul(u).umod(o),
            h = a.mul(u).umod(o);
          return this.g.mulAdd(l, s, h);
        }),
        (ue.prototype.getKeyRecoveryParam = function (e, r, t, n) {
          if (null !== (r = new ne(r, n)).recoveryParam) return r.recoveryParam;
          for (var o = 0; o < 4; o++) {
            var i;
            try {
              i = this.recoverPubKey(e, r, o);
            } catch (e) {
              continue;
            }
            if (i.eq(t)) return o;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var he = O(function (e, r) {
        var t = r;
        (t.version = "6.6.1"),
          (t.utils = M),
          (t.rand = function () {
            throw new Error("unsupported");
          }),
          (t.curve = J),
          (t.curves = X),
          (t.ec = le),
          (t.eddsa = null);
      }).ec;
      const de = new f.Vy("signing-key/5.8.0");
      let pe = null;
      function ge() {
        return pe || (pe = new he("secp256k1")), pe;
      }
      class me {
        constructor(e) {
          v(this, "curve", "secp256k1"),
            v(this, "privateKey", (0, n.c$)(e)),
            32 !== (0, n.cm)(this.privateKey) &&
              de.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          const r = ge().keyFromPrivate((0, n.k9)(this.privateKey));
          v(this, "publicKey", "0x" + r.getPublic(!1, "hex")),
            v(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")),
            v(this, "_isSigningKey", !0);
        }
        _addPoint(e) {
          const r = ge().keyFromPublic((0, n.k9)(this.publicKey)),
            t = ge().keyFromPublic((0, n.k9)(e));
          return "0x" + r.pub.add(t.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          const r = ge().keyFromPrivate((0, n.k9)(this.privateKey)),
            t = (0, n.k9)(e);
          32 !== t.length &&
            de.throwArgumentError("bad digest length", "digest", e);
          const o = r.sign(t, { canonical: !0 });
          return (0, n.Pc)({
            recoveryParam: o.recoveryParam,
            r: (0, n.bj)("0x" + o.r.toString(16), 32),
            s: (0, n.bj)("0x" + o.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          const r = ge().keyFromPrivate((0, n.k9)(this.privateKey)),
            t = ge().keyFromPublic((0, n.k9)(ye(e)));
          return (0, n.bj)("0x" + r.derive(t.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !(!e || !e._isSigningKey);
        }
      }
      function ye(e, r) {
        const t = (0, n.k9)(e);
        if (32 === t.length) {
          const e = new me(t);
          return r
            ? "0x" + ge().keyFromPrivate(t).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === t.length
          ? r
            ? (0, n.c$)(t)
            : "0x" + ge().keyFromPublic(t).getPublic(!1, "hex")
          : 65 === t.length
          ? r
            ? "0x" + ge().keyFromPublic(t).getPublic(!0, "hex")
            : (0, n.c$)(t)
          : de.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
      const ve = new f.Vy("transactions/5.6.2");
      var Ee;
      function be(e) {
        return "0x" === e ? null : g(e);
      }
      function Ae(e) {
        return "0x" === e ? m : o.gH.from(e);
      }
      !(function (e) {
        (e[(e.legacy = 0)] = "legacy"),
          (e[(e.eip2930 = 1)] = "eip2930"),
          (e[(e.eip1559 = 2)] = "eip1559");
      })(Ee || (Ee = {}));
      const we = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        Ne = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function Ie(e) {
        const r = ye(e);
        return g((0, n.Ab)(a((0, n.Ab)(r, 1)), 12));
      }
      function Re(e, r) {
        return Ie(
          (function (e, r) {
            const t = (0, n.Pc)(r),
              o = { r: (0, n.k9)(t.r), s: (0, n.k9)(t.s) };
            return (
              "0x" +
              ge()
                .recoverPubKey((0, n.k9)(e), o, t.recoveryParam)
                .encode("hex", !1)
            );
          })((0, n.k9)(e), r)
        );
      }
      function _e(e, r) {
        const t = (0, n.gr)(o.gH.from(e).toHexString());
        return (
          t.length > 32 &&
            ve.throwArgumentError(
              "invalid length for " + r,
              "transaction:" + r,
              e
            ),
          t
        );
      }
      function Pe(e, r) {
        return {
          address: g(e),
          storageKeys: (r || []).map(
            (r, t) => (
              32 !== (0, n.cm)(r) &&
                ve.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${e}:${t}]`,
                  r
                ),
              r.toLowerCase()
            )
          ),
        };
      }
      function Se(e) {
        if (Array.isArray(e))
          return e.map((e, r) =>
            Array.isArray(e)
              ? (e.length > 2 &&
                  ve.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${r}]`,
                    e
                  ),
                Pe(e[0], e[1]))
              : Pe(e.address, e.storageKeys)
          );
        const r = Object.keys(e).map((r) => {
          const t = e[r].reduce((e, r) => ((e[r] = !0), e), {});
          return Pe(r, Object.keys(t).sort());
        });
        return r.sort((e, r) => e.address.localeCompare(r.address)), r;
      }
      function ke(e) {
        return Se(e).map((e) => [e.address, e.storageKeys]);
      }
      function Te(e, r) {
        if (null != e.gasPrice) {
          const r = o.gH.from(e.gasPrice),
            t = o.gH.from(e.maxFeePerGas || 0);
          r.eq(t) ||
            ve.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: r, maxFeePerGas: t }
            );
        }
        const t = [
          _e(e.chainId || 0, "chainId"),
          _e(e.nonce || 0, "nonce"),
          _e(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          _e(e.maxFeePerGas || 0, "maxFeePerGas"),
          _e(e.gasLimit || 0, "gasLimit"),
          null != e.to ? g(e.to) : "0x",
          _e(e.value || 0, "value"),
          e.data || "0x",
          ke(e.accessList || []),
        ];
        if (r) {
          const e = (0, n.Pc)(r);
          t.push(_e(e.recoveryParam, "recoveryParam")),
            t.push((0, n.gr)(e.r)),
            t.push((0, n.gr)(e.s));
        }
        return (0, n.qn)(["0x02", N(t)]);
      }
      function Oe(e, r) {
        const t = [
          _e(e.chainId || 0, "chainId"),
          _e(e.nonce || 0, "nonce"),
          _e(e.gasPrice || 0, "gasPrice"),
          _e(e.gasLimit || 0, "gasLimit"),
          null != e.to ? g(e.to) : "0x",
          _e(e.value || 0, "value"),
          e.data || "0x",
          ke(e.accessList || []),
        ];
        if (r) {
          const e = (0, n.Pc)(r);
          t.push(_e(e.recoveryParam, "recoveryParam")),
            t.push((0, n.gr)(e.r)),
            t.push((0, n.gr)(e.s));
        }
        return (0, n.qn)(["0x01", N(t)]);
      }
      function Ce(e, r) {
        var t, o;
        (o = Ne),
          ((t = e) && "object" === typeof t) ||
            y.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((e) => {
            o[e] ||
              y.throwArgumentError(
                "invalid object key - " + e,
                "transaction:" + e,
                t
              );
          });
        const i = [];
        we.forEach(function (r) {
          let t = e[r.name] || [];
          const o = {};
          r.numeric && (o.hexPad = "left"),
            (t = (0, n.k9)((0, n.c$)(t, o))),
            r.length &&
              t.length !== r.length &&
              t.length > 0 &&
              ve.throwArgumentError(
                "invalid length for " + r.name,
                "transaction:" + r.name,
                t
              ),
            r.maxLength &&
              ((t = (0, n.gr)(t)),
              t.length > r.maxLength &&
                ve.throwArgumentError(
                  "invalid length for " + r.name,
                  "transaction:" + r.name,
                  t
                )),
            i.push((0, n.c$)(t));
        });
        let s = 0;
        if (
          (null != e.chainId
            ? ((s = e.chainId),
              "number" !== typeof s &&
                ve.throwArgumentError(
                  "invalid transaction.chainId",
                  "transaction",
                  e
                ))
            : r && !(0, n.f)(r) && r.v > 28 && (s = Math.floor((r.v - 35) / 2)),
          0 !== s && (i.push((0, n.c$)(s)), i.push("0x"), i.push("0x")),
          !r)
        )
          return N(i);
        const a = (0, n.Pc)(r);
        let f = 27 + a.recoveryParam;
        return (
          0 !== s
            ? (i.pop(),
              i.pop(),
              i.pop(),
              (f += 2 * s + 8),
              a.v > 28 &&
                a.v !== f &&
                ve.throwArgumentError(
                  "transaction.chainId/signature.v mismatch",
                  "signature",
                  r
                ))
            : a.v !== f &&
              ve.throwArgumentError(
                "transaction.chainId/signature.v mismatch",
                "signature",
                r
              ),
          i.push((0, n.c$)(f)),
          i.push((0, n.gr)((0, n.k9)(a.r))),
          i.push((0, n.gr)((0, n.k9)(a.s))),
          N(i)
        );
      }
      function xe(e, r) {
        if (null == e.type || 0 === e.type)
          return (
            null != e.accessList &&
              ve.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                e
              ),
            Ce(e, r)
          );
        switch (e.type) {
          case 1:
            return Oe(e, r);
          case 2:
            return Te(e, r);
        }
        return ve.throwError(
          `unsupported transaction type: ${e.type}`,
          f.Vy.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: e.type }
        );
      }
      function Ue(e, r, t) {
        try {
          const t = Ae(r[0]).toNumber();
          if (0 !== t && 1 !== t) throw new Error("bad recid");
          e.v = t;
        } catch (o) {
          ve.throwArgumentError("invalid v for transaction type: 1", "v", r[0]);
        }
        (e.r = (0, n.bj)(r[1], 32)), (e.s = (0, n.bj)(r[2], 32));
        try {
          const r = a(t(e));
          e.from = Re(r, { r: e.r, s: e.s, recoveryParam: e.v });
        } catch (o) {}
      }
      function Me(e) {
        const r = (0, n.k9)(e);
        if (r[0] > 127)
          return (function (e) {
            const r = _(e);
            9 !== r.length &&
              6 !== r.length &&
              ve.throwArgumentError(
                "invalid raw transaction",
                "rawTransaction",
                e
              );
            const t = {
              nonce: Ae(r[0]).toNumber(),
              gasPrice: Ae(r[1]),
              gasLimit: Ae(r[2]),
              to: be(r[3]),
              value: Ae(r[4]),
              data: r[5],
              chainId: 0,
            };
            if (6 === r.length) return t;
            try {
              t.v = o.gH.from(r[6]).toNumber();
            } catch (i) {
              return t;
            }
            if (
              ((t.r = (0, n.bj)(r[7], 32)),
              (t.s = (0, n.bj)(r[8], 32)),
              o.gH.from(t.r).isZero() && o.gH.from(t.s).isZero())
            )
              (t.chainId = t.v), (t.v = 0);
            else {
              (t.chainId = Math.floor((t.v - 35) / 2)),
                t.chainId < 0 && (t.chainId = 0);
              let o = t.v - 27;
              const s = r.slice(0, 6);
              0 !== t.chainId &&
                (s.push((0, n.c$)(t.chainId)),
                s.push("0x"),
                s.push("0x"),
                (o -= 2 * t.chainId + 8));
              const f = a(N(s));
              try {
                t.from = Re(f, {
                  r: (0, n.c$)(t.r),
                  s: (0, n.c$)(t.s),
                  recoveryParam: o,
                });
              } catch (i) {}
              t.hash = a(e);
            }
            return (t.type = null), t;
          })(r);
        switch (r[0]) {
          case 1:
            return (function (e) {
              const r = _(e.slice(1));
              8 !== r.length &&
                11 !== r.length &&
                ve.throwArgumentError(
                  "invalid component count for transaction type: 1",
                  "payload",
                  (0, n.c$)(e)
                );
              const t = {
                type: 1,
                chainId: Ae(r[0]).toNumber(),
                nonce: Ae(r[1]).toNumber(),
                gasPrice: Ae(r[2]),
                gasLimit: Ae(r[3]),
                to: be(r[4]),
                value: Ae(r[5]),
                data: r[6],
                accessList: Se(r[7]),
              };
              return (
                8 === r.length || ((t.hash = a(e)), Ue(t, r.slice(8), Oe)), t
              );
            })(r);
          case 2:
            return (function (e) {
              const r = _(e.slice(1));
              9 !== r.length &&
                12 !== r.length &&
                ve.throwArgumentError(
                  "invalid component count for transaction type: 2",
                  "payload",
                  (0, n.c$)(e)
                );
              const t = Ae(r[2]),
                o = Ae(r[3]),
                i = {
                  type: 2,
                  chainId: Ae(r[0]).toNumber(),
                  nonce: Ae(r[1]).toNumber(),
                  maxPriorityFeePerGas: t,
                  maxFeePerGas: o,
                  gasPrice: null,
                  gasLimit: Ae(r[4]),
                  to: be(r[5]),
                  value: Ae(r[6]),
                  data: r[7],
                  accessList: Se(r[8]),
                };
              return (
                9 === r.length || ((i.hash = a(e)), Ue(i, r.slice(9), Te)), i
              );
            })(r);
        }
        return ve.throwError(
          `unsupported transaction type: ${r[0]}`,
          f.Vy.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: r[0] }
        );
      }
    },
    27547: (e, r, t) => {
      t.d(r, { R: () => s, V: () => a });
      const n =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
      var o = t(95174),
        i = t(19098);
      function s(e) {
        const r = (0, i.YW)(e);
        if (r.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, o.c$)((0, o.xW)([r, n]).slice(0, 32));
      }
      function a(e) {
        const r = (0, o.k9)(e);
        if (32 !== r.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== r[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let t = 31;
        for (; 0 === r[t - 1]; ) t--;
        return (0, i._v)(r.slice(0, t));
      }
    },
    28638: (e, r, t) => {
      t.d(r, { Vy: () => h });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
    },
    32245: (e, r, t) => {
      t.d(r, {
        k9: () => f,
        bj: () => h,
        c$: () => l,
        aY: () => a,
        Lo: () => c,
      });
      const n = new (t(91264).Vy)("bytes/5.8.0");
      function o(e) {
        return !!e.toHexString;
      }
      function i(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return i(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function s(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function a(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!s(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!s(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function f(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), i(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e) && (e = e.toHexString()),
          c(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          const o = [];
          for (let e = 0; e < t.length; e += 2)
            o.push(parseInt(t.substring(e, e + 2), 16));
          return i(new Uint8Array(o));
        }
        return a(e)
          ? i(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function c(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const u = "0123456789abcdef";
      function l(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = u[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e))
        )
          return e.toHexString();
        if (c(e))
          return (
            e.length % 2 &&
              ("left" === r.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === r.hexPad
                ? (e += "0")
                : n.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (a(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += u[(240 & n) >> 4] + u[15 & n];
          }
          return r;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
      function h(e, r) {
        for (
          "string" !== typeof e
            ? (e = l(e))
            : c(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * r + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * r + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
    },
    48981: (e, r, t) => {
      t.d(r, { j9: () => p });
      var n = t(19098);
      function o(e, r) {
        r ||
          (r = function (e) {
            return [parseInt(e, 16)];
          });
        let t = 0,
          n = {};
        return (
          e.split(",").forEach((e) => {
            let o = e.split(":");
            (t += parseInt(o[0], 16)), (n[t] = r(o[1]));
          }),
          n
        );
      }
      function i(e) {
        let r = 0;
        return e.split(",").map((e) => {
          let t = e.split("-");
          1 === t.length ? (t[1] = "0") : "" === t[1] && (t[1] = "1");
          let n = r + parseInt(t[0], 16);
          return (r = parseInt(t[1], 16)), { l: n, h: r };
        });
      }
      function s(e, r) {
        let t = 0;
        for (let n = 0; n < r.length; n++) {
          let o = r[n];
          if (
            ((t += o.l), e >= t && e <= t + o.h && (e - t) % (o.d || 1) === 0)
          ) {
            if (o.e && -1 !== o.e.indexOf(e - t)) continue;
            return o;
          }
        }
        return null;
      }
      const a = i(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        f = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((e) => parseInt(e, 16)),
        c = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        u = o(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        l = o(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        h = o(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (e) {
            if (e.length % 4 !== 0) throw new Error("bad data");
            let r = [];
            for (let t = 0; t < e.length; t += 4)
              r.push(parseInt(e.substring(t, t + 4), 16));
            return r;
          }
        ),
        d = i(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      function p(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let r = (0, n.dg)(e);
        var t;
        (t = r.map((e) => {
          if (f.indexOf(e) >= 0) return [];
          if (e >= 65024 && e <= 65039) return [];
          let r = (function (e) {
            let r = s(e, c);
            if (r) return [e + r.s];
            let t = u[e];
            if (t) return t;
            let n = l[e];
            return n ? [e + n[0]] : h[e] || null;
          })(e);
          return r || [e];
        })),
          (r = t.reduce(
            (e, r) => (
              r.forEach((r) => {
                e.push(r);
              }),
              e
            ),
            []
          )),
          (r = (0, n.dg)((0, n.H5)(r), n.dz.NFKC)),
          r.forEach((e) => {
            if (s(e, d)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          r.forEach((e) => {
            if (s(e, a)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          });
        let o = (0, n.H5)(r);
        if (
          "-" === o.substring(0, 1) ||
          "--" === o.substring(2, 4) ||
          "-" === o.substring(o.length - 1)
        )
          throw new Error("invalid hyphen");
        if (o.length > 63) throw new Error("too long");
        return o;
      }
    },
    67045: (e, r, t) => {
      t.d(r, { hR: () => pe, uN: () => me, jL: () => ge });
      var n = t(68571),
        o = t.n(n),
        i = t(16143),
        s = t.n(i);
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof t.g
        ? t.g
        : "undefined" !== typeof self && self;
      function a(e, r, t) {
        return (
          (t = {
            path: r,
            exports: {},
            require: function (e, r) {
              return (function () {
                throw new Error(
                  "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                );
              })((void 0 === r || null === r) && t.path);
            },
          }),
          e(t, t.exports),
          t.exports
        );
      }
      var f = c;
      function c(e, r) {
        if (!e) throw new Error(r || "Assertion failed");
      }
      c.equal = function (e, r, t) {
        if (e != r) throw new Error(t || "Assertion failed: " + e + " != " + r);
      };
      var u = a(function (e, r) {
          var t = r;
          function n(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function o(e) {
            for (var r = "", t = 0; t < e.length; t++)
              r += n(e[t].toString(16));
            return r;
          }
          (t.toArray = function (e, r) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var t = [];
            if ("string" !== typeof e) {
              for (var n = 0; n < e.length; n++) t[n] = 0 | e[n];
              return t;
            }
            if ("hex" === r) {
              (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                (e = "0" + e);
              for (n = 0; n < e.length; n += 2)
                t.push(parseInt(e[n] + e[n + 1], 16));
            } else
              for (n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n),
                  i = o >> 8,
                  s = 255 & o;
                i ? t.push(i, s) : t.push(s);
              }
            return t;
          }),
            (t.zero2 = n),
            (t.toHex = o),
            (t.encode = function (e, r) {
              return "hex" === r ? o(e) : e;
            });
        }),
        l = a(function (e, r) {
          var t = r;
          (t.assert = f),
            (t.toArray = u.toArray),
            (t.zero2 = u.zero2),
            (t.toHex = u.toHex),
            (t.encode = u.encode),
            (t.getNAF = function (e, r, t) {
              var n = new Array(Math.max(e.bitLength(), t) + 1);
              n.fill(0);
              for (
                var o = 1 << (r + 1), i = e.clone(), s = 0;
                s < n.length;
                s++
              ) {
                var a,
                  f = i.andln(o - 1);
                i.isOdd()
                  ? ((a = f > (o >> 1) - 1 ? (o >> 1) - f : f), i.isubn(a))
                  : (a = 0),
                  (n[s] = a),
                  i.iushrn(1);
              }
              return n;
            }),
            (t.getJSF = function (e, r) {
              var t = [[], []];
              (e = e.clone()), (r = r.clone());
              for (var n, o = 0, i = 0; e.cmpn(-o) > 0 || r.cmpn(-i) > 0; ) {
                var s,
                  a,
                  f = (e.andln(3) + o) & 3,
                  c = (r.andln(3) + i) & 3;
                3 === f && (f = -1),
                  3 === c && (c = -1),
                  (s =
                    0 === (1 & f)
                      ? 0
                      : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== c
                      ? f
                      : -f),
                  t[0].push(s),
                  (a =
                    0 === (1 & c)
                      ? 0
                      : (3 !== (n = (r.andln(7) + i) & 7) && 5 !== n) || 2 !== f
                      ? c
                      : -c),
                  t[1].push(a),
                  2 * o === s + 1 && (o = 1 - o),
                  2 * i === a + 1 && (i = 1 - i),
                  e.iushrn(1),
                  r.iushrn(1);
              }
              return t;
            }),
            (t.cachedProperty = function (e, r, t) {
              var n = "_" + r;
              e.prototype[r] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = t.call(this));
              };
            }),
            (t.parseBytes = function (e) {
              return "string" === typeof e ? t.toArray(e, "hex") : e;
            }),
            (t.intFromLE = function (e) {
              return new (o())(e, "hex", "le");
            });
        }),
        h = l.getNAF,
        d = l.getJSF,
        p = l.assert;
      function g(e, r) {
        (this.type = e),
          (this.p = new (o())(r.p, 16)),
          (this.red = r.prime ? o().red(r.prime) : o().mont(this.p)),
          (this.zero = new (o())(0).toRed(this.red)),
          (this.one = new (o())(1).toRed(this.red)),
          (this.two = new (o())(2).toRed(this.red)),
          (this.n = r.n && new (o())(r.n, 16)),
          (this.g = r.g && this.pointFromJSON(r.g, r.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var t = this.n && this.p.div(this.n);
        !t || t.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      var m = g;
      function y(e, r) {
        (this.curve = e), (this.type = r), (this.precomputed = null);
      }
      (g.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (g.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (g.prototype._fixedNafMul = function (e, r) {
          p(e.precomputed);
          var t = e._getDoubles(),
            n = h(r, 1, this._bitLength),
            o = (1 << (t.step + 1)) - (t.step % 2 === 0 ? 2 : 1);
          o /= 3;
          var i,
            s,
            a = [];
          for (i = 0; i < n.length; i += t.step) {
            s = 0;
            for (var f = i + t.step - 1; f >= i; f--) s = (s << 1) + n[f];
            a.push(s);
          }
          for (
            var c = this.jpoint(null, null, null),
              u = this.jpoint(null, null, null),
              l = o;
            l > 0;
            l--
          ) {
            for (i = 0; i < a.length; i++)
              (s = a[i]) === l
                ? (u = u.mixedAdd(t.points[i]))
                : s === -l && (u = u.mixedAdd(t.points[i].neg()));
            c = c.add(u);
          }
          return c.toP();
        }),
        (g.prototype._wnafMul = function (e, r) {
          var t = 4,
            n = e._getNAFPoints(t);
          t = n.wnd;
          for (
            var o = n.points,
              i = h(r, t, this._bitLength),
              s = this.jpoint(null, null, null),
              a = i.length - 1;
            a >= 0;
            a--
          ) {
            for (var f = 0; a >= 0 && 0 === i[a]; a--) f++;
            if ((a >= 0 && f++, (s = s.dblp(f)), a < 0)) break;
            var c = i[a];
            p(0 !== c),
              (s =
                "affine" === e.type
                  ? c > 0
                    ? s.mixedAdd(o[(c - 1) >> 1])
                    : s.mixedAdd(o[(-c - 1) >> 1].neg())
                  : c > 0
                  ? s.add(o[(c - 1) >> 1])
                  : s.add(o[(-c - 1) >> 1].neg()));
          }
          return "affine" === e.type ? s.toP() : s;
        }),
        (g.prototype._wnafMulAdd = function (e, r, t, n, o) {
          var i,
            s,
            a,
            f = this._wnafT1,
            c = this._wnafT2,
            u = this._wnafT3,
            l = 0;
          for (i = 0; i < n; i++) {
            var p = (a = r[i])._getNAFPoints(e);
            (f[i] = p.wnd), (c[i] = p.points);
          }
          for (i = n - 1; i >= 1; i -= 2) {
            var g = i - 1,
              m = i;
            if (1 === f[g] && 1 === f[m]) {
              var y = [r[g], null, null, r[m]];
              0 === r[g].y.cmp(r[m].y)
                ? ((y[1] = r[g].add(r[m])),
                  (y[2] = r[g].toJ().mixedAdd(r[m].neg())))
                : 0 === r[g].y.cmp(r[m].y.redNeg())
                ? ((y[1] = r[g].toJ().mixedAdd(r[m])),
                  (y[2] = r[g].add(r[m].neg())))
                : ((y[1] = r[g].toJ().mixedAdd(r[m])),
                  (y[2] = r[g].toJ().mixedAdd(r[m].neg())));
              var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                E = d(t[g], t[m]);
              for (
                l = Math.max(E[0].length, l),
                  u[g] = new Array(l),
                  u[m] = new Array(l),
                  s = 0;
                s < l;
                s++
              ) {
                var b = 0 | E[0][s],
                  A = 0 | E[1][s];
                (u[g][s] = v[3 * (b + 1) + (A + 1)]), (u[m][s] = 0), (c[g] = y);
              }
            } else
              (u[g] = h(t[g], f[g], this._bitLength)),
                (u[m] = h(t[m], f[m], this._bitLength)),
                (l = Math.max(u[g].length, l)),
                (l = Math.max(u[m].length, l));
          }
          var w = this.jpoint(null, null, null),
            N = this._wnafT4;
          for (i = l; i >= 0; i--) {
            for (var I = 0; i >= 0; ) {
              var R = !0;
              for (s = 0; s < n; s++)
                (N[s] = 0 | u[s][i]), 0 !== N[s] && (R = !1);
              if (!R) break;
              I++, i--;
            }
            if ((i >= 0 && I++, (w = w.dblp(I)), i < 0)) break;
            for (s = 0; s < n; s++) {
              var _ = N[s];
              0 !== _ &&
                (_ > 0
                  ? (a = c[s][(_ - 1) >> 1])
                  : _ < 0 && (a = c[s][(-_ - 1) >> 1].neg()),
                (w = "affine" === a.type ? w.mixedAdd(a) : w.add(a)));
            }
          }
          for (i = 0; i < n; i++) c[i] = null;
          return o ? w : w.toP();
        }),
        (g.BasePoint = y),
        (y.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (y.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (g.prototype.decodePoint = function (e, r) {
          e = l.toArray(e, r);
          var t = this.p.byteLength();
          if (
            (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
            e.length - 1 === 2 * t
          )
            return (
              6 === e[0]
                ? p(e[e.length - 1] % 2 === 0)
                : 7 === e[0] && p(e[e.length - 1] % 2 === 1),
              this.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === t)
            return this.pointFromX(e.slice(1, 1 + t), 3 === e[0]);
          throw new Error("Unknown point format");
        }),
        (y.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (y.prototype._encode = function (e) {
          var r = this.curve.p.byteLength(),
            t = this.getX().toArray("be", r);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(t)
            : [4].concat(t, this.getY().toArray("be", r));
        }),
        (y.prototype.encode = function (e, r) {
          return l.encode(this._encode(r), e);
        }),
        (y.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var r = { doubles: null, naf: null, beta: null };
          return (
            (r.naf = this._getNAFPoints(8)),
            (r.doubles = this._getDoubles(4, e)),
            (r.beta = this._getBeta()),
            (this.precomputed = r),
            this
          );
        }),
        (y.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var r = this.precomputed.doubles;
          return (
            !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
          );
        }),
        (y.prototype._getDoubles = function (e, r) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var t = [this], n = this, o = 0; o < r; o += e) {
            for (var i = 0; i < e; i++) n = n.dbl();
            t.push(n);
          }
          return { step: e, points: t };
        }),
        (y.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var r = [this],
              t = (1 << e) - 1,
              n = 1 === t ? null : this.dbl(),
              o = 1;
            o < t;
            o++
          )
            r[o] = r[o - 1].add(n);
          return { wnd: e, points: r };
        }),
        (y.prototype._getBeta = function () {
          return null;
        }),
        (y.prototype.dblp = function (e) {
          for (var r = this, t = 0; t < e; t++) r = r.dbl();
          return r;
        });
      var v = a(function (e) {
          "function" === typeof Object.create
            ? (e.exports = function (e, r) {
                r &&
                  ((e.super_ = r),
                  (e.prototype = Object.create(r.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, r) {
                if (r) {
                  e.super_ = r;
                  var t = function () {};
                  (t.prototype = r.prototype),
                    (e.prototype = new t()),
                    (e.prototype.constructor = e);
                }
              });
        }),
        E = l.assert;
      function b(e) {
        m.call(this, "short", e),
          (this.a = new (o())(e.a, 16).toRed(this.red)),
          (this.b = new (o())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      v(b, m);
      var A = b;
      function w(e, r, t, n) {
        m.BasePoint.call(this, e, "affine"),
          null === r && null === t
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (o())(r, 16)),
              (this.y = new (o())(t, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function N(e, r, t, n) {
        m.BasePoint.call(this, e, "jacobian"),
          null === r && null === t && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (o())(0)))
            : ((this.x = new (o())(r, 16)),
              (this.y = new (o())(t, 16)),
              (this.z = new (o())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      (b.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var r, t;
          if (e.beta) r = new (o())(e.beta, 16).toRed(this.red);
          else {
            var n = this._getEndoRoots(this.p);
            r = (r = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (e.lambda) t = new (o())(e.lambda, 16);
          else {
            var i = this._getEndoRoots(this.n);
            0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(r))
              ? (t = i[0])
              : ((t = i[1]), E(0 === this.g.mul(t).x.cmp(this.g.x.redMul(r))));
          }
          return {
            beta: r,
            lambda: t,
            basis: e.basis
              ? e.basis.map(function (e) {
                  return { a: new (o())(e.a, 16), b: new (o())(e.b, 16) };
                })
              : this._getEndoBasis(t),
          };
        }
      }),
        (b.prototype._getEndoRoots = function (e) {
          var r = e === this.p ? this.red : o().mont(e),
            t = new (o())(2).toRed(r).redInvm(),
            n = t.redNeg(),
            i = new (o())(3).toRed(r).redNeg().redSqrt().redMul(t);
          return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()];
        }),
        (b.prototype._getEndoBasis = function (e) {
          for (
            var r,
              t,
              n,
              i,
              s,
              a,
              f,
              c,
              u,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              h = e,
              d = this.n.clone(),
              p = new (o())(1),
              g = new (o())(0),
              m = new (o())(0),
              y = new (o())(1),
              v = 0;
            0 !== h.cmpn(0);

          ) {
            var E = d.div(h);
            (c = d.sub(E.mul(h))), (u = m.sub(E.mul(p)));
            var b = y.sub(E.mul(g));
            if (!n && c.cmp(l) < 0)
              (r = f.neg()), (t = p), (n = c.neg()), (i = u);
            else if (n && 2 === ++v) break;
            (f = c), (d = h), (h = c), (m = p), (p = u), (y = g), (g = b);
          }
          (s = c.neg()), (a = u);
          var A = n.sqr().add(i.sqr());
          return (
            s.sqr().add(a.sqr()).cmp(A) >= 0 && ((s = r), (a = t)),
            n.negative && ((n = n.neg()), (i = i.neg())),
            s.negative && ((s = s.neg()), (a = a.neg())),
            [
              { a: n, b: i },
              { a: s, b: a },
            ]
          );
        }),
        (b.prototype._endoSplit = function (e) {
          var r = this.endo.basis,
            t = r[0],
            n = r[1],
            o = n.b.mul(e).divRound(this.n),
            i = t.b.neg().mul(e).divRound(this.n),
            s = o.mul(t.a),
            a = i.mul(n.a),
            f = o.mul(t.b),
            c = i.mul(n.b);
          return { k1: e.sub(s).sub(a), k2: f.add(c).neg() };
        }),
        (b.prototype.pointFromX = function (e, r) {
          (e = new (o())(e, 16)).red || (e = e.toRed(this.red));
          var t = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = t.redSqrt();
          if (0 !== n.redSqr().redSub(t).cmp(this.zero))
            throw new Error("invalid point");
          var i = n.fromRed().isOdd();
          return ((r && !i) || (!r && i)) && (n = n.redNeg()), this.point(e, n);
        }),
        (b.prototype.validate = function (e) {
          if (e.inf) return !0;
          var r = e.x,
            t = e.y,
            n = this.a.redMul(r),
            o = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
          return 0 === t.redSqr().redISub(o).cmpn(0);
        }),
        (b.prototype._endoWnafMulAdd = function (e, r, t) {
          for (
            var n = this._endoWnafT1, o = this._endoWnafT2, i = 0;
            i < e.length;
            i++
          ) {
            var s = this._endoSplit(r[i]),
              a = e[i],
              f = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (f = f.neg(!0))),
              (n[2 * i] = a),
              (n[2 * i + 1] = f),
              (o[2 * i] = s.k1),
              (o[2 * i + 1] = s.k2);
          }
          for (
            var c = this._wnafMulAdd(1, n, o, 2 * i, t), u = 0;
            u < 2 * i;
            u++
          )
            (n[u] = null), (o[u] = null);
          return c;
        }),
        v(w, m.BasePoint),
        (b.prototype.point = function (e, r, t) {
          return new w(this, e, r, t);
        }),
        (b.prototype.pointFromJSON = function (e, r) {
          return w.fromJSON(this, e, r);
        }),
        (w.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var r = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var t = this.curve,
                n = function (e) {
                  return t.point(e.x.redMul(t.endo.beta), e.y);
                };
              (e.beta = r),
                (r.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n),
                  },
                });
            }
            return r;
          }
        }),
        (w.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (w.fromJSON = function (e, r, t) {
          "string" === typeof r && (r = JSON.parse(r));
          var n = e.point(r[0], r[1], t);
          if (!r[2]) return n;
          function o(r) {
            return e.point(r[0], r[1], t);
          }
          var i = r[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: i.doubles && {
                step: i.doubles.step,
                points: [n].concat(i.doubles.points.map(o)),
              },
              naf: i.naf && {
                wnd: i.naf.wnd,
                points: [n].concat(i.naf.points.map(o)),
              },
            }),
            n
          );
        }),
        (w.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (w.prototype.isInfinity = function () {
          return this.inf;
        }),
        (w.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var r = this.y.redSub(e.y);
          0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(e.x).redInvm()));
          var t = r.redSqr().redISub(this.x).redISub(e.x),
            n = r.redMul(this.x.redSub(t)).redISub(this.y);
          return this.curve.point(t, n);
        }),
        (w.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var r = this.curve.a,
            t = this.x.redSqr(),
            n = e.redInvm(),
            o = t.redAdd(t).redIAdd(t).redIAdd(r).redMul(n),
            i = o.redSqr().redISub(this.x.redAdd(this.x)),
            s = o.redMul(this.x.redSub(i)).redISub(this.y);
          return this.curve.point(i, s);
        }),
        (w.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (w.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (w.prototype.mul = function (e) {
          return (
            (e = new (o())(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          );
        }),
        (w.prototype.mulAdd = function (e, r, t) {
          var n = [this, r],
            o = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, o)
            : this.curve._wnafMulAdd(1, n, o, 2);
        }),
        (w.prototype.jmulAdd = function (e, r, t) {
          var n = [this, r],
            o = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, o, !0)
            : this.curve._wnafMulAdd(1, n, o, 2, !0);
        }),
        (w.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (w.prototype.neg = function (e) {
          if (this.inf) return this;
          var r = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var t = this.precomputed,
              n = function (e) {
                return e.neg();
              };
            r.precomputed = {
              naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
              doubles: t.doubles && {
                step: t.doubles.step,
                points: t.doubles.points.map(n),
              },
            };
          }
          return r;
        }),
        (w.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        v(N, m.BasePoint),
        (b.prototype.jpoint = function (e, r, t) {
          return new N(this, e, r, t);
        }),
        (N.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            r = e.redSqr(),
            t = this.x.redMul(r),
            n = this.y.redMul(r).redMul(e);
          return this.curve.point(t, n);
        }),
        (N.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (N.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var r = e.z.redSqr(),
            t = this.z.redSqr(),
            n = this.x.redMul(r),
            o = e.x.redMul(t),
            i = this.y.redMul(r.redMul(e.z)),
            s = e.y.redMul(t.redMul(this.z)),
            a = n.redSub(o),
            f = i.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var c = a.redSqr(),
            u = c.redMul(a),
            l = n.redMul(c),
            h = f.redSqr().redIAdd(u).redISub(l).redISub(l),
            d = f.redMul(l.redISub(h)).redISub(i.redMul(u)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(h, d, p);
        }),
        (N.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var r = this.z.redSqr(),
            t = this.x,
            n = e.x.redMul(r),
            o = this.y,
            i = e.y.redMul(r).redMul(this.z),
            s = t.redSub(n),
            a = o.redSub(i);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = s.redSqr(),
            c = f.redMul(s),
            u = t.redMul(f),
            l = a.redSqr().redIAdd(c).redISub(u).redISub(u),
            h = a.redMul(u.redISub(l)).redISub(o.redMul(c)),
            d = this.z.redMul(s);
          return this.curve.jpoint(l, h, d);
        }),
        (N.prototype.dblp = function (e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          var r;
          if (this.curve.zeroA || this.curve.threeA) {
            var t = this;
            for (r = 0; r < e; r++) t = t.dbl();
            return t;
          }
          var n = this.curve.a,
            o = this.curve.tinv,
            i = this.x,
            s = this.y,
            a = this.z,
            f = a.redSqr().redSqr(),
            c = s.redAdd(s);
          for (r = 0; r < e; r++) {
            var u = i.redSqr(),
              l = c.redSqr(),
              h = l.redSqr(),
              d = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f)),
              p = i.redMul(l),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(h);
            var v = c.redMul(a);
            r + 1 < e && (f = f.redMul(h)), (i = g), (a = v), (c = y);
          }
          return this.curve.jpoint(i, c.redMul(o), a);
        }),
        (N.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (N.prototype._zeroDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              o = this.y.redSqr(),
              i = o.redSqr(),
              s = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              f = a.redSqr().redISub(s).redISub(s),
              c = i.redIAdd(i);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (e = f),
              (r = a.redMul(s.redISub(f)).redISub(c)),
              (t = this.y.redAdd(this.y));
          } else {
            var u = this.x.redSqr(),
              l = this.y.redSqr(),
              h = l.redSqr(),
              d = this.x.redAdd(l).redSqr().redISub(u).redISub(h);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u),
              g = p.redSqr(),
              m = h.redIAdd(h);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = g.redISub(d).redISub(d)),
              (r = p.redMul(d.redISub(e)).redISub(m)),
              (t = (t = this.y.redMul(this.z)).redIAdd(t));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (N.prototype._threeDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              o = this.y.redSqr(),
              i = o.redSqr(),
              s = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              f = a.redSqr().redISub(s).redISub(s);
            e = f;
            var c = i.redIAdd(i);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (r = a.redMul(s.redISub(f)).redISub(c)),
              (t = this.y.redAdd(this.y));
          } else {
            var u = this.z.redSqr(),
              l = this.y.redSqr(),
              h = this.x.redMul(l),
              d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = d.redSqr().redISub(g)),
              (t = this.y.redAdd(this.z).redSqr().redISub(l).redISub(u));
            var m = l.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (r = d.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (N.prototype._dbl = function () {
          var e = this.curve.a,
            r = this.x,
            t = this.y,
            n = this.z,
            o = n.redSqr().redSqr(),
            i = r.redSqr(),
            s = t.redSqr(),
            a = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(o)),
            f = r.redAdd(r),
            c = (f = f.redIAdd(f)).redMul(s),
            u = a.redSqr().redISub(c.redAdd(c)),
            l = c.redISub(u),
            h = s.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = a.redMul(l).redISub(h),
            p = t.redAdd(t).redMul(n);
          return this.curve.jpoint(u, d, p);
        }),
        (N.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            t = this.z.redSqr(),
            n = r.redSqr(),
            o = e.redAdd(e).redIAdd(e),
            i = o.redSqr(),
            s = this.x.redAdd(r).redSqr().redISub(e).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              i
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var c = o.redIAdd(s).redSqr().redISub(i).redISub(a).redISub(f),
            u = r.redMul(c);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var l = this.x.redMul(a).redISub(u);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var h = this.y.redMul(c.redMul(f.redISub(c)).redISub(s.redMul(a)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = this.z.redAdd(s).redSqr().redISub(t).redISub(a);
          return this.curve.jpoint(l, h, d);
        }),
        (N.prototype.mul = function (e, r) {
          return (e = new (o())(e, r)), this.curve._wnafMul(this, e);
        }),
        (N.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var r = this.z.redSqr(),
            t = e.z.redSqr();
          if (0 !== this.x.redMul(t).redISub(e.x.redMul(r)).cmpn(0)) return !1;
          var n = r.redMul(this.z),
            o = t.redMul(e.z);
          return 0 === this.y.redMul(o).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (N.prototype.eqXToP = function (e) {
          var r = this.z.redSqr(),
            t = e.toRed(this.curve.red).redMul(r);
          if (0 === this.x.cmp(t)) return !0;
          for (var n = e.clone(), o = this.curve.redN.redMul(r); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(o), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (N.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (N.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var I = a(function (e, r) {
          var t = r;
          (t.base = m), (t.short = A), (t.mont = null), (t.edwards = null);
        }),
        R = a(function (e, r) {
          var t,
            n = r,
            o = l.assert;
          function i(e) {
            "short" === e.type
              ? (this.curve = new I.short(e))
              : "edwards" === e.type
              ? (this.curve = new I.edwards(e))
              : (this.curve = new I.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              o(this.g.validate(), "Invalid curve"),
              o(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function a(e, r) {
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var t = new i(r);
                return (
                  Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: t,
                  }),
                  t
                );
              },
            });
          }
          (n.PresetCurve = i),
            a("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: s().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            a("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: s().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            a("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: s().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            a("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: s().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            a("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: s().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            a("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: ["9"],
            }),
            a("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            t = null.crash();
          } catch (f) {
            t = void 0;
          }
          a("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: s().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              t,
            ],
          });
        });
      function _(e) {
        if (!(this instanceof _)) return new _(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var r = u.toArray(e.entropy, e.entropyEnc || "hex"),
          t = u.toArray(e.nonce, e.nonceEnc || "hex"),
          n = u.toArray(e.pers, e.persEnc || "hex");
        f(
          r.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(r, t, n);
      }
      var P = _;
      (_.prototype._init = function (e, r, t) {
        var n = e.concat(r).concat(t);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var o = 0; o < this.V.length; o++)
          (this.K[o] = 0), (this.V[o] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (_.prototype._hmac = function () {
          return new (s().hmac)(this.hash, this.K);
        }),
        (_.prototype._update = function (e) {
          var r = this._hmac().update(this.V).update([0]);
          e && (r = r.update(e)),
            (this.K = r.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (_.prototype.reseed = function (e, r, t, n) {
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            (e = u.toArray(e, r)),
            (t = u.toArray(t, n)),
            f(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(t || [])),
            (this._reseed = 1);
        }),
        (_.prototype.generate = function (e, r, t, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            t && ((t = u.toArray(t, n || "hex")), this._update(t));
          for (var o = []; o.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (o = o.concat(this.V));
          var i = o.slice(0, e);
          return this._update(t), this._reseed++, u.encode(i, r);
        });
      var S = l.assert;
      function k(e, r) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          r.priv && this._importPrivate(r.priv, r.privEnc),
          r.pub && this._importPublic(r.pub, r.pubEnc);
      }
      var T = k;
      (k.fromPublic = function (e, r, t) {
        return r instanceof k ? r : new k(e, { pub: r, pubEnc: t });
      }),
        (k.fromPrivate = function (e, r, t) {
          return r instanceof k ? r : new k(e, { priv: r, privEnc: t });
        }),
        (k.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (k.prototype.getPublic = function (e, r) {
          return (
            "string" === typeof e && ((r = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            r ? this.pub.encode(r, e) : this.pub
          );
        }),
        (k.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (k.prototype._importPrivate = function (e, r) {
          (this.priv = new (o())(e, r || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (k.prototype._importPublic = function (e, r) {
          if (e.x || e.y)
            return (
              "mont" === this.ec.curve.type
                ? S(e.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  S(e.x && e.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, r);
        }),
        (k.prototype.derive = function (e) {
          return (
            e.validate() || S(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (k.prototype.sign = function (e, r, t) {
          return this.ec.sign(e, this, r, t);
        }),
        (k.prototype.verify = function (e, r) {
          return this.ec.verify(e, r, this);
        }),
        (k.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var O = l.assert;
      function C(e, r) {
        if (e instanceof C) return e;
        this._importDER(e, r) ||
          (O(e.r && e.s, "Signature without r or s"),
          (this.r = new (o())(e.r, 16)),
          (this.s = new (o())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      var x = C;
      function U() {
        this.place = 0;
      }
      function M(e, r) {
        var t = e[r.place++];
        if (!(128 & t)) return t;
        var n = 15 & t;
        if (0 === n || n > 4) return !1;
        for (var o = 0, i = 0, s = r.place; i < n; i++, s++)
          (o <<= 8), (o |= e[s]), (o >>>= 0);
        return !(o <= 127) && ((r.place = s), o);
      }
      function F(e) {
        for (var r = 0, t = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < t; )
          r++;
        return 0 === r ? e : e.slice(r);
      }
      function L(e, r) {
        if (r < 128) e.push(r);
        else {
          var t = 1 + ((Math.log(r) / Math.LN2) >>> 3);
          for (e.push(128 | t); --t; ) e.push((r >>> (t << 3)) & 255);
          e.push(r);
        }
      }
      (C.prototype._importDER = function (e, r) {
        e = l.toArray(e, r);
        var t = new U();
        if (48 !== e[t.place++]) return !1;
        var n = M(e, t);
        if (!1 === n) return !1;
        if (n + t.place !== e.length) return !1;
        if (2 !== e[t.place++]) return !1;
        var i = M(e, t);
        if (!1 === i) return !1;
        var s = e.slice(t.place, i + t.place);
        if (((t.place += i), 2 !== e[t.place++])) return !1;
        var a = M(e, t);
        if (!1 === a) return !1;
        if (e.length !== a + t.place) return !1;
        var f = e.slice(t.place, a + t.place);
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1;
          s = s.slice(1);
        }
        if (0 === f[0]) {
          if (!(128 & f[1])) return !1;
          f = f.slice(1);
        }
        return (
          (this.r = new (o())(s)),
          (this.s = new (o())(f)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (C.prototype.toDER = function (e) {
          var r = this.r.toArray(),
            t = this.s.toArray();
          for (
            128 & r[0] && (r = [0].concat(r)),
              128 & t[0] && (t = [0].concat(t)),
              r = F(r),
              t = F(t);
            !t[0] && !(128 & t[1]);

          )
            t = t.slice(1);
          var n = [2];
          L(n, r.length), (n = n.concat(r)).push(2), L(n, t.length);
          var o = n.concat(t),
            i = [48];
          return L(i, o.length), (i = i.concat(o)), l.encode(i, e);
        });
      var D = function () {
          throw new Error("unsupported");
        },
        B = l.assert;
      function G(e) {
        if (!(this instanceof G)) return new G(e);
        "string" === typeof e &&
          (B(Object.prototype.hasOwnProperty.call(R, e), "Unknown curve " + e),
          (e = R[e])),
          e instanceof R.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      var q = G;
      (G.prototype.keyPair = function (e) {
        return new T(this, e);
      }),
        (G.prototype.keyFromPrivate = function (e, r) {
          return T.fromPrivate(this, e, r);
        }),
        (G.prototype.keyFromPublic = function (e, r) {
          return T.fromPublic(this, e, r);
        }),
        (G.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var r = new P({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || D(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              t = this.n.byteLength(),
              n = this.n.sub(new (o())(2));
            ;

          ) {
            var i = new (o())(r.generate(t));
            if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i);
          }
        }),
        (G.prototype._truncateToN = function (e, r) {
          var t = 8 * e.byteLength() - this.n.bitLength();
          return (
            t > 0 && (e = e.ushrn(t)),
            !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (G.prototype.sign = function (e, r, t, n) {
          "object" === typeof t && ((n = t), (t = null)),
            n || (n = {}),
            (r = this.keyFromPrivate(r, t)),
            (e = this._truncateToN(new (o())(e, 16)));
          for (
            var i = this.n.byteLength(),
              s = r.getPrivate().toArray("be", i),
              a = e.toArray("be", i),
              f = new P({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              c = this.n.sub(new (o())(1)),
              u = 0;
            ;
            u++
          ) {
            var l = n.k ? n.k(u) : new (o())(f.generate(this.n.byteLength()));
            if (
              !((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(c) >= 0)
            ) {
              var h = this.g.mul(l);
              if (!h.isInfinity()) {
                var d = h.getX(),
                  p = d.umod(this.n);
                if (0 !== p.cmpn(0)) {
                  var g = l.invm(this.n).mul(p.mul(r.getPrivate()).iadd(e));
                  if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                    var m =
                      (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                    return (
                      n.canonical &&
                        g.cmp(this.nh) > 0 &&
                        ((g = this.n.sub(g)), (m ^= 1)),
                      new x({ r: p, s: g, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (G.prototype.verify = function (e, r, t, n) {
          (e = this._truncateToN(new (o())(e, 16))),
            (t = this.keyFromPublic(t, n));
          var i = (r = new x(r, "hex")).r,
            s = r.s;
          if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          var a,
            f = s.invm(this.n),
            c = f.mul(e).umod(this.n),
            u = f.mul(i).umod(this.n);
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(c, t.getPublic(), u)).isInfinity() &&
                a.eqXToP(i)
            : !(a = this.g.mulAdd(c, t.getPublic(), u)).isInfinity() &&
                0 === a.getX().umod(this.n).cmp(i);
        }),
        (G.prototype.recoverPubKey = function (e, r, t, n) {
          B((3 & t) === t, "The recovery param is more than two bits"),
            (r = new x(r, n));
          var i = this.n,
            s = new (o())(e),
            a = r.r,
            f = r.s,
            c = 1 & t,
            u = t >> 1;
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw new Error("Unable to find sencond key candinate");
          a = u
            ? this.curve.pointFromX(a.add(this.curve.n), c)
            : this.curve.pointFromX(a, c);
          var l = r.r.invm(i),
            h = i.sub(s).mul(l).umod(i),
            d = f.mul(l).umod(i);
          return this.g.mulAdd(h, a, d);
        }),
        (G.prototype.getKeyRecoveryParam = function (e, r, t, n) {
          if (null !== (r = new x(r, n)).recoveryParam) return r.recoveryParam;
          for (var o = 0; o < 4; o++) {
            var i;
            try {
              i = this.recoverPubKey(e, r, o);
            } catch (e) {
              continue;
            }
            if (i.eq(t)) return o;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var V = a(function (e, r) {
        var t = r;
        (t.version = "6.5.4"),
          (t.utils = l),
          (t.rand = function () {
            throw new Error("unsupported");
          }),
          (t.curve = I),
          (t.curves = R),
          (t.ec = q),
          (t.eddsa = null);
      }).ec;
      let j = !1,
        z = !1;
      const K = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let W = K.default,
        H = null;
      const J = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var X, Q;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(X || (X = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(Q || (Q = {}));
      const Y = "0123456789abcdef";
      class Z {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == K[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            W > K[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Z.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Z.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(Z.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (z) return this.makeError("censored error", r, {});
          r || (r = Z.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += Y[r[e] >> 4]), (t += Y[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (s) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const o = e;
          let i = "";
          switch (r) {
            case Q.NUMERIC_FAULT: {
              i = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  i += "-" + r;
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
            case Q.CALL_EXCEPTION:
            case Q.INSUFFICIENT_FUNDS:
            case Q.MISSING_NEW:
            case Q.NONCE_EXPIRED:
            case Q.REPLACEMENT_UNDERPRICED:
            case Q.TRANSACTION_REPLACED:
            case Q.UNPREDICTABLE_GAS_LIMIT:
              i = r;
          }
          i && (e += " [ See: https://links.ethers.org/v5-errors-" + i + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const s = new Error(e);
          return (
            (s.reason = o),
            (s.code = r),
            Object.keys(t).forEach(function (e) {
              s[e] = t[e];
            }),
            s
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, Z.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            J &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Z.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: J }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, Z.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, Z.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                Z.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                Z.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", Z.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Z.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", Z.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return H || (H = new Z("logger/5.8.0")), H;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Z.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            j)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Z.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (z = !!e), (j = !!r);
        }
        static setLogLevel(e) {
          const r = K[e.toLowerCase()];
          null != r
            ? (W = r)
            : Z.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new Z(e);
        }
      }
      (Z.errors = Q), (Z.levels = X);
      const $ = new Z("bytes/5.8.0");
      function ee(e) {
        return !!e.toHexString;
      }
      function re(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return re(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function te(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function ne(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!te(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!te(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function oe(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          $.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), re(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          ee(e) && (e = e.toHexString()),
          ie(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : $.throwArgumentError("hex data is odd-length", "value", e));
          const n = [];
          for (let e = 0; e < t.length; e += 2)
            n.push(parseInt(t.substring(e, e + 2), 16));
          return re(new Uint8Array(n));
        }
        return ne(e)
          ? re(new Uint8Array(e))
          : $.throwArgumentError("invalid arrayify value", "value", e);
      }
      function ie(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const se = "0123456789abcdef";
      function ae(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          $.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = se[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          ee(e))
        )
          return e.toHexString();
        if (ie(e))
          return (
            e.length % 2 &&
              ("left" === r.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === r.hexPad
                ? (e += "0")
                : $.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (ne(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += se[(240 & n) >> 4] + se[15 & n];
          }
          return r;
        }
        return $.throwArgumentError("invalid hexlify value", "value", e);
      }
      function fe(e, r) {
        for (
          "string" !== typeof e
            ? (e = ae(e))
            : ie(e) || $.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * r + 2 &&
              $.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * r + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
      function ce(e) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if ((ie((t = e)) && !(t.length % 2)) || ne(t)) {
          let t = oe(e);
          64 === t.length
            ? ((r.v = 27 + (t[32] >> 7)),
              (t[32] &= 127),
              (r.r = ae(t.slice(0, 32))),
              (r.s = ae(t.slice(32, 64))))
            : 65 === t.length
            ? ((r.r = ae(t.slice(0, 32))),
              (r.s = ae(t.slice(32, 64))),
              (r.v = t[64]))
            : $.throwArgumentError("invalid signature string", "signature", e),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : $.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (t[32] |= 128),
            (r._vs = ae(t.slice(32, 64)));
        } else {
          if (
            ((r.r = e.r),
            (r.s = e.s),
            (r.v = e.v),
            (r.recoveryParam = e.recoveryParam),
            (r._vs = e._vs),
            null != r._vs)
          ) {
            const t = (function (e, r) {
              (e = oe(e)).length > r &&
                $.throwArgumentError(
                  "value out of range",
                  "value",
                  arguments[0]
                );
              const t = new Uint8Array(r);
              return t.set(e, r - e.length), re(t);
            })(oe(r._vs), 32);
            r._vs = ae(t);
            const n = t[0] >= 128 ? 1 : 0;
            null == r.recoveryParam
              ? (r.recoveryParam = n)
              : r.recoveryParam !== n &&
                $.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e
                ),
              (t[0] &= 127);
            const o = ae(t);
            null == r.s
              ? (r.s = o)
              : r.s !== o &&
                $.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? $.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e
                )
              : 0 === r.v || 1 === r.v
              ? (r.recoveryParam = r.v)
              : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const t = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== t &&
              $.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e
              );
          }
          null != r.r && ie(r.r)
            ? (r.r = fe(r.r, 32))
            : $.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e
              ),
            null != r.s && ie(r.s)
              ? (r.s = fe(r.s, 32))
              : $.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e
                );
          const t = oe(r.s);
          t[0] >= 128 &&
            $.throwArgumentError("signature s out of range", "signature", e),
            r.recoveryParam && (t[0] |= 128);
          const n = ae(t);
          r._vs &&
            (ie(r._vs) ||
              $.throwArgumentError("signature invalid _vs", "signature", e),
            (r._vs = fe(r._vs, 32))),
            null == r._vs
              ? (r._vs = n)
              : r._vs !== n &&
                $.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e
                );
        }
        var t;
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      new Z("properties/5.8.0");
      function ue(e, r, t) {
        Object.defineProperty(e, r, { enumerable: !0, value: t, writable: !1 });
      }
      const le = new Z("signing-key/5.6.2");
      let he = null;
      function de() {
        return he || (he = new V("secp256k1")), he;
      }
      class pe {
        constructor(e) {
          ue(this, "curve", "secp256k1"),
            ue(this, "privateKey", ae(e)),
            32 !==
              (function (e) {
                if ("string" !== typeof e) e = ae(e);
                else if (!ie(e) || e.length % 2) return null;
                return (e.length - 2) / 2;
              })(this.privateKey) &&
              le.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          const r = de().keyFromPrivate(oe(this.privateKey));
          ue(this, "publicKey", "0x" + r.getPublic(!1, "hex")),
            ue(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")),
            ue(this, "_isSigningKey", !0);
        }
        _addPoint(e) {
          const r = de().keyFromPublic(oe(this.publicKey)),
            t = de().keyFromPublic(oe(e));
          return "0x" + r.pub.add(t.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          const r = de().keyFromPrivate(oe(this.privateKey)),
            t = oe(e);
          32 !== t.length &&
            le.throwArgumentError("bad digest length", "digest", e);
          const n = r.sign(t, { canonical: !0 });
          return ce({
            recoveryParam: n.recoveryParam,
            r: fe("0x" + n.r.toString(16), 32),
            s: fe("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          const r = de().keyFromPrivate(oe(this.privateKey)),
            t = de().keyFromPublic(oe(me(e)));
          return fe("0x" + r.derive(t.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !(!e || !e._isSigningKey);
        }
      }
      function ge(e, r) {
        const t = ce(r),
          n = { r: oe(t.r), s: oe(t.s) };
        return (
          "0x" + de().recoverPubKey(oe(e), n, t.recoveryParam).encode("hex", !1)
        );
      }
      function me(e, r) {
        const t = oe(e);
        if (32 === t.length) {
          const e = new pe(t);
          return r
            ? "0x" + de().keyFromPrivate(t).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === t.length
          ? r
            ? ae(t)
            : "0x" + de().keyFromPublic(t).getPublic(!1, "hex")
          : 65 === t.length
          ? r
            ? "0x" + de().keyFromPublic(t).getPublic(!0, "hex")
            : ae(t)
          : le.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
    },
    78539: (e, r, t) => {
      t.r(r),
        t.d(r, {
          AlchemyProvider: () => yn,
          AlchemyWebSocketProvider: () => mn,
          AnkrProvider: () => An,
          BaseProvider: () => wt,
          CloudflareProvider: () => In,
          EtherscanProvider: () => xn,
          FallbackProvider: () => Jn,
          Formatter: () => Jr,
          InfuraProvider: () => $n,
          InfuraWebSocketProvider: () => Zn,
          IpcProvider: () => Xn,
          JsonRpcBatchProvider: () => eo,
          JsonRpcProvider: () => nn,
          JsonRpcSigner: () => en,
          NodesmithProvider: () => to,
          PocketProvider: () => io,
          Provider: () => b,
          Resolver: () => Et,
          StaticJsonRpcProvider: () => hn,
          UrlJsonRpcProvider: () => dn,
          Web3Provider: () => co,
          WebSocketProvider: () => cn,
          getDefaultProvider: () => lo,
          getNetwork: () => S,
          isCommunityResourcable: () => Xr,
          isCommunityResource: () => Qr,
          showThrottleMessage: () => Zr,
        });
      var n = t(58367),
        o = t(89050),
        i = t(88821);
      var s = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const a = new i.Vy("properties/5.8.0");
      function f(e, r, t) {
        Object.defineProperty(e, r, { enumerable: !0, value: t, writable: !1 });
      }
      function c(e, r) {
        for (let t = 0; t < 32; t++) {
          if (e[r]) return e[r];
          if (!e.prototype || "object" !== typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function u(e) {
        return s(this, void 0, void 0, function* () {
          const r = Object.keys(e).map((r) => {
            const t = e[r];
            return Promise.resolve(t).then((e) => ({ key: r, value: e }));
          });
          return (yield Promise.all(r)).reduce(
            (e, r) => ((e[r.key] = r.value), e),
            {}
          );
        });
      }
      function l(e) {
        const r = {};
        for (const t in e) r[t] = e[t];
        return r;
      }
      const h = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function d(e) {
        if (void 0 === e || null === e || h[typeof e]) return !0;
        if (Array.isArray(e) || "object" === typeof e) {
          if (!Object.isFrozen(e)) return !1;
          const t = Object.keys(e);
          for (let n = 0; n < t.length; n++) {
            let o = null;
            try {
              o = e[t[n]];
            } catch (r) {
              continue;
            }
            if (!d(o)) return !1;
          }
          return !0;
        }
        return a.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function p(e) {
        if (d(e)) return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => g(e)));
        if ("object" === typeof e) {
          const r = {};
          for (const t in e) {
            const n = e[t];
            void 0 !== n && f(r, t, g(n));
          }
          return r;
        }
        return a.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function g(e) {
        return p(e);
      }
      class m {
        constructor(e) {
          for (const r in e) this[r] = g(e[r]);
        }
      }
      var y = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const v = new i.Vy("abstract-provider/5.8.0");
      class E extends m {
        static isForkEvent(e) {
          return !(!e || !e._isForkEvent);
        }
      }
      class b {
        constructor() {
          v.checkAbstract(new.target, b), f(this, "_isProvider", !0);
        }
        getFeeData() {
          return y(this, void 0, void 0, function* () {
            const { block: e, gasPrice: r } = yield u({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch((e) => null),
            });
            let t = null,
              o = null,
              i = null;
            return (
              e &&
                e.baseFeePerGas &&
                ((t = e.baseFeePerGas),
                (i = n.gH.from("1500000000")),
                (o = e.baseFeePerGas.mul(2).add(i))),
              {
                lastBaseFeePerGas: t,
                maxFeePerGas: o,
                maxPriorityFeePerGas: i,
                gasPrice: r,
              }
            );
          });
        }
        addListener(e, r) {
          return this.on(e, r);
        }
        removeListener(e, r) {
          return this.off(e, r);
        }
        static isProvider(e) {
          return !(!e || !e._isProvider);
        }
      }
      const A = new i.Vy("networks/5.8.0");
      function w(e) {
        const r = function (r, t) {
          null == t && (t = {});
          const n = [];
          if (r.InfuraProvider && "-" !== t.infura)
            try {
              n.push(new r.InfuraProvider(e, t.infura));
            } catch (o) {}
          if (r.EtherscanProvider && "-" !== t.etherscan)
            try {
              n.push(new r.EtherscanProvider(e, t.etherscan));
            } catch (o) {}
          if (r.AlchemyProvider && "-" !== t.alchemy)
            try {
              n.push(new r.AlchemyProvider(e, t.alchemy));
            } catch (o) {}
          if (r.PocketProvider && "-" !== t.pocket) {
            const i = ["goerli", "ropsten", "rinkeby", "sepolia"];
            try {
              const o = new r.PocketProvider(e, t.pocket);
              o.network && -1 === i.indexOf(o.network.name) && n.push(o);
            } catch (o) {}
          }
          if (r.CloudflareProvider && "-" !== t.cloudflare)
            try {
              n.push(new r.CloudflareProvider(e));
            } catch (o) {}
          if (r.AnkrProvider && "-" !== t.ankr)
            try {
              const o = ["ropsten"],
                i = new r.AnkrProvider(e, t.ankr);
              i.network && -1 === o.indexOf(i.network.name) && n.push(i);
            } catch (o) {}
          if (r.QuickNodeProvider && "-" !== t.quicknode)
            try {
              n.push(new r.QuickNodeProvider(e, t.quicknode));
            } catch (o) {}
          if (0 === n.length) return null;
          if (r.FallbackProvider) {
            let o = 1;
            return (
              null != t.quorum ? (o = t.quorum) : "homestead" === e && (o = 2),
              new r.FallbackProvider(n, o)
            );
          }
          return n[0];
        };
        return (
          (r.renetwork = function (e) {
            return w(e);
          }),
          r
        );
      }
      function N(e, r) {
        const t = function (t, n) {
          return t.JsonRpcProvider ? new t.JsonRpcProvider(e, r) : null;
        };
        return (
          (t.renetwork = function (r) {
            return N(e, r);
          }),
          t
        );
      }
      const I = {
          chainId: 1,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "homestead",
          _defaultProvider: w("homestead"),
        },
        R = {
          chainId: 3,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "ropsten",
          _defaultProvider: w("ropsten"),
        },
        _ = {
          chainId: 63,
          name: "classicMordor",
          _defaultProvider: N(
            "https://www.ethercluster.com/mordor",
            "classicMordor"
          ),
        },
        P = {
          unspecified: { chainId: 0, name: "unspecified" },
          homestead: I,
          mainnet: I,
          morden: { chainId: 2, name: "morden" },
          ropsten: R,
          testnet: R,
          rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: w("rinkeby"),
          },
          kovan: { chainId: 42, name: "kovan", _defaultProvider: w("kovan") },
          goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: w("goerli"),
          },
          kintsugi: { chainId: 1337702, name: "kintsugi" },
          sepolia: {
            chainId: 11155111,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "sepolia",
            _defaultProvider: w("sepolia"),
          },
          holesky: {
            chainId: 17e3,
            name: "holesky",
            _defaultProvider: w("holesky"),
          },
          classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: N("https://www.ethercluster.com/etc", "classic"),
          },
          classicMorden: { chainId: 62, name: "classicMorden" },
          classicMordor: _,
          classicTestnet: _,
          classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: N(
              "https://www.ethercluster.com/kotti",
              "classicKotti"
            ),
          },
          xdai: { chainId: 100, name: "xdai" },
          matic: { chainId: 137, name: "matic", _defaultProvider: w("matic") },
          maticmum: {
            chainId: 80001,
            name: "maticmum",
            _defaultProvider: w("maticmum"),
          },
          optimism: {
            chainId: 10,
            name: "optimism",
            _defaultProvider: w("optimism"),
          },
          "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
          "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
          "optimism-sepolia": { chainId: 11155420, name: "optimism-sepolia" },
          arbitrum: { chainId: 42161, name: "arbitrum" },
          "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
          "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
          "arbitrum-sepolia": { chainId: 421614, name: "arbitrum-sepolia" },
          bnb: { chainId: 56, name: "bnb" },
          bnbt: { chainId: 97, name: "bnbt" },
        };
      function S(e) {
        if (null == e) return null;
        if ("number" === typeof e) {
          for (const r in P) {
            const t = P[r];
            if (t.chainId === e)
              return {
                name: t.name,
                chainId: t.chainId,
                ensAddress: t.ensAddress || null,
                _defaultProvider: t._defaultProvider || null,
              };
          }
          return { chainId: e, name: "unknown" };
        }
        if ("string" === typeof e) {
          const r = P[e];
          return null == r
            ? null
            : {
                name: r.name,
                chainId: r.chainId,
                ensAddress: r.ensAddress,
                _defaultProvider: r._defaultProvider || null,
              };
        }
        const r = P[e.name];
        if (!r)
          return (
            "number" !== typeof e.chainId &&
              A.throwArgumentError("invalid network chainId", "network", e),
            e
          );
        0 !== e.chainId &&
          e.chainId !== r.chainId &&
          A.throwArgumentError("network chainId mismatch", "network", e);
        let t = e._defaultProvider || null;
        var n;
        return (
          null == t &&
            r._defaultProvider &&
            (t =
              (n = r._defaultProvider) && "function" === typeof n.renetwork
                ? r._defaultProvider.renetwork(e)
                : r._defaultProvider),
          {
            name: e.name,
            chainId: r.chainId,
            ensAddress: e.ensAddress || r.ensAddress || null,
            _defaultProvider: t,
          }
        );
      }
      function k(e) {
        e = atob(e);
        const r = [];
        for (let t = 0; t < e.length; t++) r.push(e.charCodeAt(t));
        return (0, o.k9)(r);
      }
      function T(e) {
        e = (0, o.k9)(e);
        let r = "";
        for (let t = 0; t < e.length; t++) r += String.fromCharCode(e[t]);
        return btoa(r);
      }
      class O {
        constructor(e) {
          f(this, "alphabet", e),
            f(this, "base", e.length),
            f(this, "_alphabetMap", {}),
            f(this, "_leader", e.charAt(0));
          for (let r = 0; r < e.length; r++) this._alphabetMap[e.charAt(r)] = r;
        }
        encode(e) {
          let r = (0, o.k9)(e);
          if (0 === r.length) return "";
          let t = [0];
          for (let o = 0; o < r.length; ++o) {
            let e = r[o];
            for (let r = 0; r < t.length; ++r)
              (e += t[r] << 8),
                (t[r] = e % this.base),
                (e = (e / this.base) | 0);
            for (; e > 0; ) t.push(e % this.base), (e = (e / this.base) | 0);
          }
          let n = "";
          for (let o = 0; 0 === r[o] && o < r.length - 1; ++o)
            n += this._leader;
          for (let o = t.length - 1; o >= 0; --o) n += this.alphabet[t[o]];
          return n;
        }
        decode(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          let r = [];
          if (0 === e.length) return new Uint8Array(r);
          r.push(0);
          for (let t = 0; t < e.length; t++) {
            let n = this._alphabetMap[e[t]];
            if (void 0 === n)
              throw new Error("Non-base" + this.base + " character");
            let o = n;
            for (let e = 0; e < r.length; ++e)
              (o += r[e] * this.base), (r[e] = 255 & o), (o >>= 8);
            for (; o > 0; ) r.push(255 & o), (o >>= 8);
          }
          for (let t = 0; e[t] === this._leader && t < e.length - 1; ++t)
            r.push(0);
          return (0, o.k9)(new Uint8Array(r.reverse()));
        }
      }
      new O("abcdefghijklmnopqrstuvwxyz234567");
      const C = new O(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        ),
        x = new i.Vy("strings/5.8.0");
      var U, M;
      function F(e, r, t, n, o) {
        if (e === M.BAD_PREFIX || e === M.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = r + 1; n < t.length && t[n] >> 6 === 2; n++) e++;
          return e;
        }
        return e === M.OVERRUN ? t.length - r - 1 : 0;
      }
      !(function (e) {
        (e.current = ""),
          (e.NFC = "NFC"),
          (e.NFD = "NFD"),
          (e.NFKC = "NFKC"),
          (e.NFKD = "NFKD");
      })(U || (U = {})),
        (function (e) {
          (e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (e.BAD_PREFIX = "bad codepoint prefix"),
            (e.OVERRUN = "string overrun"),
            (e.MISSING_CONTINUE = "missing continuation byte"),
            (e.OUT_OF_RANGE = "out of UTF-8 range"),
            (e.UTF16_SURROGATE = "UTF-16 surrogate"),
            (e.OVERLONG = "overlong representation");
        })(M || (M = {}));
      const L = Object.freeze({
        error: function (e, r, t, n, o) {
          return x.throwArgumentError(
            `invalid codepoint at offset ${r}; ${e}`,
            "bytes",
            t
          );
        },
        ignore: F,
        replace: function (e, r, t, n, o) {
          return e === M.OVERLONG
            ? (n.push(o), 0)
            : (n.push(65533), F(e, r, t));
        },
      });
      function D(e, r) {
        null == r && (r = L.error), (e = (0, o.k9)(e));
        const t = [];
        let n = 0;
        for (; n < e.length; ) {
          const o = e[n++];
          if (o >> 7 === 0) {
            t.push(o);
            continue;
          }
          let i = null,
            s = null;
          if (192 === (224 & o)) (i = 1), (s = 127);
          else if (224 === (240 & o)) (i = 2), (s = 2047);
          else {
            if (240 !== (248 & o)) {
              n += r(
                128 === (192 & o) ? M.UNEXPECTED_CONTINUE : M.BAD_PREFIX,
                n - 1,
                e,
                t
              );
              continue;
            }
            (i = 3), (s = 65535);
          }
          if (n - 1 + i >= e.length) {
            n += r(M.OVERRUN, n - 1, e, t);
            continue;
          }
          let a = o & ((1 << (8 - i - 1)) - 1);
          for (let f = 0; f < i; f++) {
            let o = e[n];
            if (128 != (192 & o)) {
              (n += r(M.MISSING_CONTINUE, n, e, t)), (a = null);
              break;
            }
            (a = (a << 6) | (63 & o)), n++;
          }
          null !== a &&
            (a > 1114111
              ? (n += r(M.OUT_OF_RANGE, n - 1 - i, e, t, a))
              : a >= 55296 && a <= 57343
              ? (n += r(M.UTF16_SURROGATE, n - 1 - i, e, t, a))
              : a <= s
              ? (n += r(M.OVERLONG, n - 1 - i, e, t, a))
              : t.push(a));
        }
        return t;
      }
      function B(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : U.current;
        r != U.current && (x.checkNormalize(), (e = e.normalize(r)));
        let t = [];
        for (let n = 0; n < e.length; n++) {
          const r = e.charCodeAt(n);
          if (r < 128) t.push(r);
          else if (r < 2048) t.push((r >> 6) | 192), t.push((63 & r) | 128);
          else if (55296 == (64512 & r)) {
            n++;
            const o = e.charCodeAt(n);
            if (n >= e.length || 56320 !== (64512 & o))
              throw new Error("invalid utf-8 string");
            const i = 65536 + ((1023 & r) << 10) + (1023 & o);
            t.push((i >> 18) | 240),
              t.push(((i >> 12) & 63) | 128),
              t.push(((i >> 6) & 63) | 128),
              t.push((63 & i) | 128);
          } else
            t.push((r >> 12) | 224),
              t.push(((r >> 6) & 63) | 128),
              t.push((63 & r) | 128);
        }
        return (0, o.k9)(t);
      }
      function G(e, r) {
        return D(e, r)
          .map((e) =>
            e <= 65535
              ? String.fromCharCode(e)
              : ((e -= 65536),
                String.fromCharCode(
                  55296 + ((e >> 10) & 1023),
                  56320 + (1023 & e)
                ))
          )
          .join("");
      }
      var q = t(12379),
        V = t.n(q);
      function j(e) {
        return "0x" + V().keccak_256((0, o.k9)(e));
      }
      const z = "hash/5.8.0";
      function K(e, r) {
        null == r && (r = 1);
        const t = [],
          n = t.forEach,
          o = function (e, r) {
            n.call(e, function (e) {
              r > 0 && Array.isArray(e) ? o(e, r - 1) : t.push(e);
            });
          };
        return o(e, r), t;
      }
      function W(e) {
        return (function (e) {
          let r = 0;
          return () => e[r++];
        })(
          (function (e) {
            let r = 0;
            function t() {
              return (e[r++] << 8) | e[r++];
            }
            let n = t(),
              o = 1,
              i = [0, 1];
            for (let b = 1; b < n; b++) i.push((o += t()));
            let s = t(),
              a = r;
            r += s;
            let f = 0,
              c = 0;
            function u() {
              return (
                0 == f && ((c = (c << 8) | e[r++]), (f = 8)), (c >> --f) & 1
              );
            }
            const l = Math.pow(2, 31),
              h = l >>> 1,
              d = h >> 1,
              p = l - 1;
            let g = 0;
            for (let b = 0; b < 31; b++) g = (g << 1) | u();
            let m = [],
              y = 0,
              v = l;
            for (;;) {
              let e = Math.floor(((g - y + 1) * o - 1) / v),
                r = 0,
                t = n;
              for (; t - r > 1; ) {
                let n = (r + t) >>> 1;
                e < i[n] ? (t = n) : (r = n);
              }
              if (0 == r) break;
              m.push(r);
              let s = y + Math.floor((v * i[r]) / o),
                a = y + Math.floor((v * i[r + 1]) / o) - 1;
              for (; 0 == ((s ^ a) & h); )
                (g = ((g << 1) & p) | u()),
                  (s = (s << 1) & p),
                  (a = ((a << 1) & p) | 1);
              for (; s & ~a & d; )
                (g = (g & h) | ((g << 1) & (p >>> 1)) | u()),
                  (s = (s << 1) ^ h),
                  (a = ((a ^ h) << 1) | h | 1);
              (y = s), (v = 1 + a - s);
            }
            let E = n - 4;
            return m.map((r) => {
              switch (r - E) {
                case 3:
                  return E + 65792 + ((e[a++] << 16) | (e[a++] << 8) | e[a++]);
                case 2:
                  return E + 256 + ((e[a++] << 8) | e[a++]);
                case 1:
                  return E + e[a++];
                default:
                  return r - 1;
              }
            });
          })(e)
        );
      }
      function H(e) {
        return 1 & e ? ~e >> 1 : e >> 1;
      }
      function J(e, r) {
        let t = Array(e);
        for (let n = 0, o = -1; n < e; n++) t[n] = o += 1 + r();
        return t;
      }
      function X(e, r) {
        let t = Array(e);
        for (let n = 0, o = 0; n < e; n++) t[n] = o += H(r());
        return t;
      }
      function Q(e, r) {
        let t = J(e(), e),
          n = e(),
          o = J(n, e),
          i = (function (e, r) {
            let t = Array(e);
            for (let n = 0; n < e; n++) t[n] = 1 + r();
            return t;
          })(n, e);
        for (let s = 0; s < n; s++)
          for (let e = 0; e < i[s]; e++) t.push(o[s] + e);
        return r ? t.map((e) => r[e]) : t;
      }
      function Y(e, r, t) {
        let n = Array(e)
          .fill(void 0)
          .map(() => []);
        for (let o = 0; o < r; o++) X(e, t).forEach((e, r) => n[r].push(e));
        return n;
      }
      function Z(e, r) {
        let t = 1 + r(),
          n = r(),
          o = (function (e) {
            let r = [];
            for (;;) {
              let t = e();
              if (0 == t) break;
              r.push(t);
            }
            return r;
          })(r);
        return K(
          Y(o.length, 1 + e, r).map((e, r) => {
            const i = e[0],
              s = e.slice(1);
            return Array(o[r])
              .fill(void 0)
              .map((e, r) => {
                let o = r * n;
                return [i + r * t, s.map((e) => e + o)];
              });
          })
        );
      }
      function $(e, r) {
        return Y(1 + r(), 1 + e, r).map((e) => [e[0], e.slice(1)]);
      }
      const ee = W(
          k(
            "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
          )
        ),
        re = new Set(Q(ee)),
        te = new Set(Q(ee)),
        ne = (function (e) {
          let r = [];
          for (;;) {
            let t = e();
            if (0 == t) break;
            r.push(Z(t, e));
          }
          for (;;) {
            let t = e() - 1;
            if (t < 0) break;
            r.push($(t, e));
          }
          return (function (e) {
            const r = {};
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              r[n[0]] = n[1];
            }
            return r;
          })(K(r));
        })(ee),
        oe = (function (e) {
          let r = Q(e).sort((e, r) => e - r);
          return (function t() {
            let n = [];
            for (;;) {
              let o = Q(e, r);
              if (0 == o.length) break;
              n.push({ set: new Set(o), node: t() });
            }
            n.sort((e, r) => r.set.size - e.set.size);
            let o = e(),
              i = o % 3;
            o = (o / 3) | 0;
            let s = !!(1 & o);
            return (
              (o >>= 1),
              { branches: n, valid: i, fe0f: s, save: 1 == o, check: 2 == o }
            );
          })();
        })(ee);
      function ie(e) {
        return (function (e) {
          return D(
            B(
              e,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : U.current
            )
          );
        })(e);
      }
      function se(e) {
        return e.filter((e) => 65039 != e);
      }
      function ae(e) {
        for (let t of e.split(".")) {
          let e = ie(t);
          try {
            for (let r = e.lastIndexOf(95) - 1; r >= 0; r--)
              if (95 !== e[r])
                throw new Error("underscore only allowed at start");
            if (
              e.length >= 4 &&
              e.every((e) => e < 128) &&
              45 === e[2] &&
              45 === e[3]
            )
              throw new Error("invalid label extension");
          } catch (r) {
            throw new Error(`Invalid label "${t}": ${r.message}`);
          }
        }
        return e;
      }
      function fe(e) {
        return ae(
          (function (e, r) {
            let t = ie(e).reverse(),
              n = [];
            for (; t.length; ) {
              let e = ce(t);
              if (e) {
                n.push(...r(e));
                continue;
              }
              let o = t.pop();
              if (re.has(o)) {
                n.push(o);
                continue;
              }
              if (te.has(o)) continue;
              let i = ne[o];
              if (!i)
                throw new Error(
                  `Disallowed codepoint: 0x${o.toString(16).toUpperCase()}`
                );
              n.push(...i);
            }
            return ae(((o = String.fromCodePoint(...n)), o.normalize("NFC")));
            var o;
          })(e, se)
        );
      }
      function ce(e, r) {
        var t;
        let n,
          o,
          i = oe,
          s = [],
          a = e.length;
        for (r && (r.length = 0); a; ) {
          let f = e[--a];
          if (
            ((i =
              null === (t = i.branches.find((e) => e.set.has(f))) ||
              void 0 === t
                ? void 0
                : t.node),
            !i)
          )
            break;
          if (i.save) o = f;
          else if (i.check && f === o) break;
          s.push(f),
            i.fe0f && (s.push(65039), a > 0 && 65039 == e[a - 1] && a--),
            i.valid &&
              ((n = s.slice()),
              2 == i.valid && n.splice(1, 1),
              r && r.push(...e.slice(a).reverse()),
              (e.length = a));
        }
        return n;
      }
      const ue = new i.Vy(z),
        le = new Uint8Array(32);
      function he(e) {
        if (0 === e.length)
          throw new Error("invalid ENS name; empty component");
        return e;
      }
      function de(e) {
        const r = B(fe(e)),
          t = [];
        if (0 === e.length) return t;
        let n = 0;
        for (let o = 0; o < r.length; o++) {
          46 === r[o] && (t.push(he(r.slice(n, o))), (n = o + 1));
        }
        if (n >= r.length) throw new Error("invalid ENS name; empty component");
        return t.push(he(r.slice(n))), t;
      }
      function pe(e) {
        "string" !== typeof e &&
          ue.throwArgumentError("invalid ENS name; not a string", "name", e);
        let r = le;
        const t = de(e);
        for (; t.length; ) r = j((0, o.xW)([r, j(t.pop())]));
        return (0, o.c$)(r);
      }
      le.fill(0);
      var ge = t(16143),
        me = t.n(ge);
      new i.Vy("sha2/5.8.0");
      function ye(e) {
        return (
          "0x" +
          me()
            .sha256()
            .update((0, o.k9)(e))
            .digest("hex")
        );
      }
      var ve = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      function Ee(e, r) {
        return ve(this, void 0, void 0, function* () {
          null == r && (r = {});
          const t = {
            method: r.method || "GET",
            headers: r.headers || {},
            body: r.body || void 0,
          };
          if (
            (!0 !== r.skipFetchSetup &&
              ((t.mode = "cors"),
              (t.cache = "no-cache"),
              (t.credentials = "same-origin"),
              (t.redirect = "follow"),
              (t.referrer = "client")),
            null != r.fetchOptions)
          ) {
            const e = r.fetchOptions;
            e.mode && (t.mode = e.mode),
              e.cache && (t.cache = e.cache),
              e.credentials && (t.credentials = e.credentials),
              e.redirect && (t.redirect = e.redirect),
              e.referrer && (t.referrer = e.referrer);
          }
          const n = yield fetch(e, t),
            i = yield n.arrayBuffer(),
            s = {};
          return (
            n.headers.forEach
              ? n.headers.forEach((e, r) => {
                  s[r.toLowerCase()] = e;
                })
              : n.headers.keys().forEach((e) => {
                  s[e.toLowerCase()] = n.headers.get(e);
                }),
            {
              headers: s,
              statusCode: n.status,
              statusMessage: n.statusText,
              body: (0, o.k9)(new Uint8Array(i)),
            }
          );
        });
      }
      var be = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const Ae = new i.Vy("web/5.8.0");
      function we(e) {
        return new Promise((r) => {
          setTimeout(r, e);
        });
      }
      function Ne(e, r) {
        if (null == e) return null;
        if ("string" === typeof e) return e;
        if ((0, o.f)(e)) {
          if (
            r &&
            ("text" === r.split("/")[0] ||
              "application/json" === r.split(";")[0].trim())
          )
            try {
              return G(e);
            } catch (t) {}
          return (0, o.c$)(e);
        }
        return e;
      }
      function Ie(e, r, t) {
        let n = null;
        if (null != r) {
          n = B(r);
          const t = "string" === typeof e ? { url: e } : l(e);
          if (t.headers) {
            0 !==
              Object.keys(t.headers).filter(
                (e) => "content-type" === e.toLowerCase()
              ).length ||
              ((t.headers = l(t.headers)),
              (t.headers["content-type"] = "application/json"));
          } else t.headers = { "content-type": "application/json" };
          e = t;
        }
        return (function (e, r, t) {
          const n =
            "object" === typeof e && null != e.throttleLimit
              ? e.throttleLimit
              : 12;
          Ae.assertArgument(
            n > 0 && n % 1 === 0,
            "invalid connection throttle limit",
            "connection.throttleLimit",
            n
          );
          const o = "object" === typeof e ? e.throttleCallback : null,
            s =
              "object" === typeof e &&
              "number" === typeof e.throttleSlotInterval
                ? e.throttleSlotInterval
                : 100;
          Ae.assertArgument(
            s > 0 && s % 1 === 0,
            "invalid connection throttle slot interval",
            "connection.throttleSlotInterval",
            s
          );
          const a = "object" === typeof e && !!e.errorPassThrough,
            f = {};
          let c = null;
          const u = { method: "GET" };
          let h = !1,
            d = 12e4;
          if ("string" === typeof e) c = e;
          else if ("object" === typeof e) {
            if (
              ((null != e && null != e.url) ||
                Ae.throwArgumentError("missing URL", "connection.url", e),
              (c = e.url),
              "number" === typeof e.timeout && e.timeout > 0 && (d = e.timeout),
              e.headers)
            )
              for (const r in e.headers)
                (f[r.toLowerCase()] = { key: r, value: String(e.headers[r]) }),
                  ["if-none-match", "if-modified-since"].indexOf(
                    r.toLowerCase()
                  ) >= 0 && (h = !0);
            if (
              ((u.allowGzip = !!e.allowGzip),
              null != e.user && null != e.password)
            ) {
              "https:" !== c.substring(0, 6) &&
                !0 !== e.allowInsecureAuthentication &&
                Ae.throwError(
                  "basic authentication requires a secure https url",
                  i.Vy.errors.INVALID_ARGUMENT,
                  {
                    argument: "url",
                    url: c,
                    user: e.user,
                    password: "[REDACTED]",
                  }
                );
              const r = e.user + ":" + e.password;
              f.authorization = {
                key: "Authorization",
                value: "Basic " + T(B(r)),
              };
            }
            null != e.skipFetchSetup && (u.skipFetchSetup = !!e.skipFetchSetup),
              null != e.fetchOptions && (u.fetchOptions = l(e.fetchOptions));
          }
          const p = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
            g = c ? c.match(p) : null;
          if (g)
            try {
              const e = {
                statusCode: 200,
                statusMessage: "OK",
                headers: { "content-type": g[1] || "text/plain" },
                body: g[2]
                  ? k(g[3])
                  : ((m = g[3]),
                    B(
                      m.replace(/%([0-9a-f][0-9a-f])/gi, (e, r) =>
                        String.fromCharCode(parseInt(r, 16))
                      )
                    )),
              };
              let r = e.body;
              return t && (r = t(e.body, e)), Promise.resolve(r);
            } catch (b) {
              Ae.throwError(
                "processing response error",
                i.Vy.errors.SERVER_ERROR,
                {
                  body: Ne(g[1], g[2]),
                  error: b,
                  requestBody: null,
                  requestMethod: "GET",
                  url: c,
                }
              );
            }
          var m;
          r &&
            ((u.method = "POST"),
            (u.body = r),
            null == f["content-type"] &&
              (f["content-type"] = {
                key: "Content-Type",
                value: "application/octet-stream",
              }),
            null == f["content-length"] &&
              (f["content-length"] = {
                key: "Content-Length",
                value: String(r.length),
              }));
          const y = {};
          Object.keys(f).forEach((e) => {
            const r = f[e];
            y[r.key] = r.value;
          }),
            (u.headers = y);
          const v = (function () {
              let e = null;
              return {
                promise: new Promise(function (r, t) {
                  d &&
                    (e = setTimeout(() => {
                      null != e &&
                        ((e = null),
                        t(
                          Ae.makeError("timeout", i.Vy.errors.TIMEOUT, {
                            requestBody: Ne(u.body, y["content-type"]),
                            requestMethod: u.method,
                            timeout: d,
                            url: c,
                          })
                        ));
                    }, d));
                }),
                cancel: function () {
                  null != e && (clearTimeout(e), (e = null));
                },
              };
            })(),
            E = (function () {
              return be(this, void 0, void 0, function* () {
                for (let e = 0; e < n; e++) {
                  let r = null;
                  try {
                    if (((r = yield Ee(c, u)), e < n))
                      if (301 === r.statusCode || 302 === r.statusCode) {
                        const e = r.headers.location || "";
                        if ("GET" === u.method && e.match(/^https:/)) {
                          c = r.headers.location;
                          continue;
                        }
                      } else if (429 === r.statusCode) {
                        let t = !0;
                        if ((o && (t = yield o(e, c)), t)) {
                          let t = 0;
                          const n = r.headers["retry-after"];
                          (t =
                            "string" === typeof n && n.match(/^[1-9][0-9]*$/)
                              ? 1e3 * parseInt(n)
                              : s *
                                parseInt(
                                  String(Math.random() * Math.pow(2, e))
                                )),
                            yield we(t);
                          continue;
                        }
                      }
                  } catch (b) {
                    (r = b.response),
                      null == r &&
                        (v.cancel(),
                        Ae.throwError(
                          "missing response",
                          i.Vy.errors.SERVER_ERROR,
                          {
                            requestBody: Ne(u.body, y["content-type"]),
                            requestMethod: u.method,
                            serverError: b,
                            url: c,
                          }
                        ));
                  }
                  let f = r.body;
                  if (
                    (h && 304 === r.statusCode
                      ? (f = null)
                      : !a &&
                        (r.statusCode < 200 || r.statusCode >= 300) &&
                        (v.cancel(),
                        Ae.throwError(
                          "bad response",
                          i.Vy.errors.SERVER_ERROR,
                          {
                            status: r.statusCode,
                            headers: r.headers,
                            body: Ne(
                              f,
                              r.headers ? r.headers["content-type"] : null
                            ),
                            requestBody: Ne(u.body, y["content-type"]),
                            requestMethod: u.method,
                            url: c,
                          }
                        )),
                    t)
                  )
                    try {
                      const e = yield t(f, r);
                      return v.cancel(), e;
                    } catch (b) {
                      if (b.throttleRetry && e < n) {
                        let r = !0;
                        if ((o && (r = yield o(e, c)), r)) {
                          const r =
                            s *
                            parseInt(String(Math.random() * Math.pow(2, e)));
                          yield we(r);
                          continue;
                        }
                      }
                      v.cancel(),
                        Ae.throwError(
                          "processing response error",
                          i.Vy.errors.SERVER_ERROR,
                          {
                            body: Ne(
                              f,
                              r.headers ? r.headers["content-type"] : null
                            ),
                            error: b,
                            requestBody: Ne(u.body, y["content-type"]),
                            requestMethod: u.method,
                            url: c,
                          }
                        );
                    }
                  return v.cancel(), f;
                }
                return Ae.throwError(
                  "failed response",
                  i.Vy.errors.SERVER_ERROR,
                  {
                    requestBody: Ne(u.body, y["content-type"]),
                    requestMethod: u.method,
                    url: c,
                  }
                );
              });
            })();
          return Promise.race([v.promise, E]);
        })(e, n, (e, r) => {
          let n = null;
          if (null != e)
            try {
              n = JSON.parse(G(e));
            } catch (o) {
              Ae.throwError("invalid JSON", i.Vy.errors.SERVER_ERROR, {
                body: e,
                error: o,
              });
            }
          return t && (n = t(n, r)), n;
        });
      }
      function Re(e, r) {
        return (
          r || (r = {}),
          null == (r = l(r)).floor && (r.floor = 0),
          null == r.ceiling && (r.ceiling = 1e4),
          null == r.interval && (r.interval = 250),
          new Promise(function (t, n) {
            let o = null,
              i = !1;
            const s = () => !i && ((i = !0), o && clearTimeout(o), !0);
            r.timeout &&
              (o = setTimeout(() => {
                s() && n(new Error("timeout"));
              }, r.timeout));
            const a = r.retryLimit;
            let f = 0;
            !(function o() {
              return e().then(
                function (e) {
                  if (void 0 !== e) s() && t(e);
                  else if (r.oncePoll) r.oncePoll.once("poll", o);
                  else if (r.onceBlock) r.onceBlock.once("block", o);
                  else if (!i) {
                    if ((f++, f > a))
                      return void (s() && n(new Error("retry limit reached")));
                    let e =
                      r.interval *
                      parseInt(String(Math.random() * Math.pow(2, f)));
                    e < r.floor && (e = r.floor),
                      e > r.ceiling && (e = r.ceiling),
                      setTimeout(o, e);
                  }
                  return null;
                },
                function (e) {
                  s() && n(e);
                }
              );
            })();
          })
        );
      }
      var _e = t(61216),
        Pe = t.n(_e);
      const Se = "providers/5.6.8",
        ke = new i.Vy("rlp/5.8.0");
      function Te(e) {
        const r = [];
        for (; e; ) r.unshift(255 & e), (e >>= 8);
        return r;
      }
      function Oe(e, r, t) {
        let n = 0;
        for (let o = 0; o < t; o++) n = 256 * n + e[r + o];
        return n;
      }
      function Ce(e) {
        if (Array.isArray(e)) {
          let r = [];
          if (
            (e.forEach(function (e) {
              r = r.concat(Ce(e));
            }),
            r.length <= 55)
          )
            return r.unshift(192 + r.length), r;
          const t = Te(r.length);
          return t.unshift(247 + t.length), t.concat(r);
        }
        (0, o.f)(e) ||
          ke.throwArgumentError("RLP object must be BytesLike", "object", e);
        const r = Array.prototype.slice.call((0, o.k9)(e));
        if (1 === r.length && r[0] <= 127) return r;
        if (r.length <= 55) return r.unshift(128 + r.length), r;
        const t = Te(r.length);
        return t.unshift(183 + t.length), t.concat(r);
      }
      function xe(e) {
        return (0, o.c$)(Ce(e));
      }
      function Ue(e, r, t, n) {
        const o = [];
        for (; t < r + 1 + n; ) {
          const s = Me(e, t);
          o.push(s.result),
            (t += s.consumed) > r + 1 + n &&
              ke.throwError(
                "child data too short",
                i.Vy.errors.BUFFER_OVERRUN,
                {}
              );
        }
        return { consumed: 1 + n, result: o };
      }
      function Me(e, r) {
        if (
          (0 === e.length &&
            ke.throwError("data too short", i.Vy.errors.BUFFER_OVERRUN, {}),
          e[r] >= 248)
        ) {
          const t = e[r] - 247;
          r + 1 + t > e.length &&
            ke.throwError(
              "data short segment too short",
              i.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          const n = Oe(e, r + 1, t);
          return (
            r + 1 + t + n > e.length &&
              ke.throwError(
                "data long segment too short",
                i.Vy.errors.BUFFER_OVERRUN,
                {}
              ),
            Ue(e, r, r + 1 + t, t + n)
          );
        }
        if (e[r] >= 192) {
          const t = e[r] - 192;
          return (
            r + 1 + t > e.length &&
              ke.throwError(
                "data array too short",
                i.Vy.errors.BUFFER_OVERRUN,
                {}
              ),
            Ue(e, r, r + 1, t)
          );
        }
        if (e[r] >= 184) {
          const t = e[r] - 183;
          r + 1 + t > e.length &&
            ke.throwError(
              "data array too short",
              i.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          const n = Oe(e, r + 1, t);
          r + 1 + t + n > e.length &&
            ke.throwError(
              "data array too short",
              i.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          return {
            consumed: 1 + t + n,
            result: (0, o.c$)(e.slice(r + 1 + t, r + 1 + t + n)),
          };
        }
        if (e[r] >= 128) {
          const t = e[r] - 128;
          r + 1 + t > e.length &&
            ke.throwError("data too short", i.Vy.errors.BUFFER_OVERRUN, {});
          return {
            consumed: 1 + t,
            result: (0, o.c$)(e.slice(r + 1, r + 1 + t)),
          };
        }
        return { consumed: 1, result: (0, o.c$)(e[r]) };
      }
      function Fe(e) {
        const r = (0, o.k9)(e),
          t = Me(r, 0);
        return (
          t.consumed !== r.length &&
            ke.throwArgumentError("invalid rlp data", "data", e),
          t.result
        );
      }
      const Le = new i.Vy("address/5.8.0");
      function De(e) {
        (0, o.Lo)(e, 20) ||
          Le.throwArgumentError("invalid address", "address", e);
        const r = (e = e.toLowerCase()).substring(2).split(""),
          t = new Uint8Array(40);
        for (let o = 0; o < 40; o++) t[o] = r[o].charCodeAt(0);
        const n = (0, o.k9)(j(t));
        for (let o = 0; o < 40; o += 2)
          n[o >> 1] >> 4 >= 8 && (r[o] = r[o].toUpperCase()),
            (15 & n[o >> 1]) >= 8 && (r[o + 1] = r[o + 1].toUpperCase());
        return "0x" + r.join("");
      }
      const Be = {};
      for (let po = 0; po < 10; po++) Be[String(po)] = String(po);
      for (let po = 0; po < 26; po++)
        Be[String.fromCharCode(65 + po)] = String(10 + po);
      const Ge = Math.floor(
        ((qe = 9007199254740991),
        Math.log10 ? Math.log10(qe) : Math.log(qe) / Math.LN10)
      );
      var qe;
      function Ve(e) {
        let r = (e =
          (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00")
          .split("")
          .map((e) => Be[e])
          .join("");
        for (; r.length >= Ge; ) {
          let e = r.substring(0, Ge);
          r = (parseInt(e, 10) % 97) + r.substring(e.length);
        }
        let t = String(98 - (parseInt(r, 10) % 97));
        for (; t.length < 2; ) t = "0" + t;
        return t;
      }
      function je(e) {
        let r = null;
        if (
          ("string" !== typeof e &&
            Le.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== e.substring(0, 2) && (e = "0x" + e),
            (r = De(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              r !== e &&
              Le.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            e.substring(2, 4) !== Ve(e) &&
              Le.throwArgumentError("bad icap checksum", "address", e),
              r = (0, n.Os)(e.substring(4));
            r.length < 40;

          )
            r = "0" + r;
          r = De("0x" + r);
        } else Le.throwArgumentError("invalid address", "address", e);
        return r;
      }
      const ze = n.gH.from(0);
      var Ke = t(68571),
        We = t.n(Ke);
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof t.g
        ? t.g
        : "undefined" !== typeof self && self;
      function He(e, r, t) {
        return (
          (t = {
            path: r,
            exports: {},
            require: function (e, r) {
              return (function () {
                throw new Error(
                  "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                );
              })((void 0 === r || null === r) && t.path);
            },
          }),
          e(t, t.exports),
          t.exports
        );
      }
      var Je = Xe;
      function Xe(e, r) {
        if (!e) throw new Error(r || "Assertion failed");
      }
      Xe.equal = function (e, r, t) {
        if (e != r) throw new Error(t || "Assertion failed: " + e + " != " + r);
      };
      var Qe = He(function (e, r) {
          var t = r;
          function n(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function o(e) {
            for (var r = "", t = 0; t < e.length; t++)
              r += n(e[t].toString(16));
            return r;
          }
          (t.toArray = function (e, r) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var t = [];
            if ("string" !== typeof e) {
              for (var n = 0; n < e.length; n++) t[n] = 0 | e[n];
              return t;
            }
            if ("hex" === r) {
              (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                (e = "0" + e);
              for (n = 0; n < e.length; n += 2)
                t.push(parseInt(e[n] + e[n + 1], 16));
            } else
              for (n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n),
                  i = o >> 8,
                  s = 255 & o;
                i ? t.push(i, s) : t.push(s);
              }
            return t;
          }),
            (t.zero2 = n),
            (t.toHex = o),
            (t.encode = function (e, r) {
              return "hex" === r ? o(e) : e;
            });
        }),
        Ye = He(function (e, r) {
          var t = r;
          (t.assert = Je),
            (t.toArray = Qe.toArray),
            (t.zero2 = Qe.zero2),
            (t.toHex = Qe.toHex),
            (t.encode = Qe.encode),
            (t.getNAF = function (e, r, t) {
              var n,
                o = new Array(Math.max(e.bitLength(), t) + 1);
              for (n = 0; n < o.length; n += 1) o[n] = 0;
              var i = 1 << (r + 1),
                s = e.clone();
              for (n = 0; n < o.length; n++) {
                var a,
                  f = s.andln(i - 1);
                s.isOdd()
                  ? ((a = f > (i >> 1) - 1 ? (i >> 1) - f : f), s.isubn(a))
                  : (a = 0),
                  (o[n] = a),
                  s.iushrn(1);
              }
              return o;
            }),
            (t.getJSF = function (e, r) {
              var t = [[], []];
              (e = e.clone()), (r = r.clone());
              for (var n, o = 0, i = 0; e.cmpn(-o) > 0 || r.cmpn(-i) > 0; ) {
                var s,
                  a,
                  f = (e.andln(3) + o) & 3,
                  c = (r.andln(3) + i) & 3;
                3 === f && (f = -1),
                  3 === c && (c = -1),
                  (s =
                    0 === (1 & f)
                      ? 0
                      : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== c
                      ? f
                      : -f),
                  t[0].push(s),
                  (a =
                    0 === (1 & c)
                      ? 0
                      : (3 !== (n = (r.andln(7) + i) & 7) && 5 !== n) || 2 !== f
                      ? c
                      : -c),
                  t[1].push(a),
                  2 * o === s + 1 && (o = 1 - o),
                  2 * i === a + 1 && (i = 1 - i),
                  e.iushrn(1),
                  r.iushrn(1);
              }
              return t;
            }),
            (t.cachedProperty = function (e, r, t) {
              var n = "_" + r;
              e.prototype[r] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = t.call(this));
              };
            }),
            (t.parseBytes = function (e) {
              return "string" === typeof e ? t.toArray(e, "hex") : e;
            }),
            (t.intFromLE = function (e) {
              return new (We())(e, "hex", "le");
            });
        }),
        Ze = Ye.getNAF,
        $e = Ye.getJSF,
        er = Ye.assert;
      function rr(e, r) {
        (this.type = e),
          (this.p = new (We())(r.p, 16)),
          (this.red = r.prime ? We().red(r.prime) : We().mont(this.p)),
          (this.zero = new (We())(0).toRed(this.red)),
          (this.one = new (We())(1).toRed(this.red)),
          (this.two = new (We())(2).toRed(this.red)),
          (this.n = r.n && new (We())(r.n, 16)),
          (this.g = r.g && this.pointFromJSON(r.g, r.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var t = this.n && this.p.div(this.n);
        !t || t.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      var tr = rr;
      function nr(e, r) {
        (this.curve = e), (this.type = r), (this.precomputed = null);
      }
      (rr.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (rr.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (rr.prototype._fixedNafMul = function (e, r) {
          er(e.precomputed);
          var t = e._getDoubles(),
            n = Ze(r, 1, this._bitLength),
            o = (1 << (t.step + 1)) - (t.step % 2 === 0 ? 2 : 1);
          o /= 3;
          var i,
            s,
            a = [];
          for (i = 0; i < n.length; i += t.step) {
            s = 0;
            for (var f = i + t.step - 1; f >= i; f--) s = (s << 1) + n[f];
            a.push(s);
          }
          for (
            var c = this.jpoint(null, null, null),
              u = this.jpoint(null, null, null),
              l = o;
            l > 0;
            l--
          ) {
            for (i = 0; i < a.length; i++)
              (s = a[i]) === l
                ? (u = u.mixedAdd(t.points[i]))
                : s === -l && (u = u.mixedAdd(t.points[i].neg()));
            c = c.add(u);
          }
          return c.toP();
        }),
        (rr.prototype._wnafMul = function (e, r) {
          var t = 4,
            n = e._getNAFPoints(t);
          t = n.wnd;
          for (
            var o = n.points,
              i = Ze(r, t, this._bitLength),
              s = this.jpoint(null, null, null),
              a = i.length - 1;
            a >= 0;
            a--
          ) {
            for (var f = 0; a >= 0 && 0 === i[a]; a--) f++;
            if ((a >= 0 && f++, (s = s.dblp(f)), a < 0)) break;
            var c = i[a];
            er(0 !== c),
              (s =
                "affine" === e.type
                  ? c > 0
                    ? s.mixedAdd(o[(c - 1) >> 1])
                    : s.mixedAdd(o[(-c - 1) >> 1].neg())
                  : c > 0
                  ? s.add(o[(c - 1) >> 1])
                  : s.add(o[(-c - 1) >> 1].neg()));
          }
          return "affine" === e.type ? s.toP() : s;
        }),
        (rr.prototype._wnafMulAdd = function (e, r, t, n, o) {
          var i,
            s,
            a,
            f = this._wnafT1,
            c = this._wnafT2,
            u = this._wnafT3,
            l = 0;
          for (i = 0; i < n; i++) {
            var h = (a = r[i])._getNAFPoints(e);
            (f[i] = h.wnd), (c[i] = h.points);
          }
          for (i = n - 1; i >= 1; i -= 2) {
            var d = i - 1,
              p = i;
            if (1 === f[d] && 1 === f[p]) {
              var g = [r[d], null, null, r[p]];
              0 === r[d].y.cmp(r[p].y)
                ? ((g[1] = r[d].add(r[p])),
                  (g[2] = r[d].toJ().mixedAdd(r[p].neg())))
                : 0 === r[d].y.cmp(r[p].y.redNeg())
                ? ((g[1] = r[d].toJ().mixedAdd(r[p])),
                  (g[2] = r[d].add(r[p].neg())))
                : ((g[1] = r[d].toJ().mixedAdd(r[p])),
                  (g[2] = r[d].toJ().mixedAdd(r[p].neg())));
              var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = $e(t[d], t[p]);
              for (
                l = Math.max(y[0].length, l),
                  u[d] = new Array(l),
                  u[p] = new Array(l),
                  s = 0;
                s < l;
                s++
              ) {
                var v = 0 | y[0][s],
                  E = 0 | y[1][s];
                (u[d][s] = m[3 * (v + 1) + (E + 1)]), (u[p][s] = 0), (c[d] = g);
              }
            } else
              (u[d] = Ze(t[d], f[d], this._bitLength)),
                (u[p] = Ze(t[p], f[p], this._bitLength)),
                (l = Math.max(u[d].length, l)),
                (l = Math.max(u[p].length, l));
          }
          var b = this.jpoint(null, null, null),
            A = this._wnafT4;
          for (i = l; i >= 0; i--) {
            for (var w = 0; i >= 0; ) {
              var N = !0;
              for (s = 0; s < n; s++)
                (A[s] = 0 | u[s][i]), 0 !== A[s] && (N = !1);
              if (!N) break;
              w++, i--;
            }
            if ((i >= 0 && w++, (b = b.dblp(w)), i < 0)) break;
            for (s = 0; s < n; s++) {
              var I = A[s];
              0 !== I &&
                (I > 0
                  ? (a = c[s][(I - 1) >> 1])
                  : I < 0 && (a = c[s][(-I - 1) >> 1].neg()),
                (b = "affine" === a.type ? b.mixedAdd(a) : b.add(a)));
            }
          }
          for (i = 0; i < n; i++) c[i] = null;
          return o ? b : b.toP();
        }),
        (rr.BasePoint = nr),
        (nr.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (nr.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (rr.prototype.decodePoint = function (e, r) {
          e = Ye.toArray(e, r);
          var t = this.p.byteLength();
          if (
            (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
            e.length - 1 === 2 * t
          )
            return (
              6 === e[0]
                ? er(e[e.length - 1] % 2 === 0)
                : 7 === e[0] && er(e[e.length - 1] % 2 === 1),
              this.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === t)
            return this.pointFromX(e.slice(1, 1 + t), 3 === e[0]);
          throw new Error("Unknown point format");
        }),
        (nr.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (nr.prototype._encode = function (e) {
          var r = this.curve.p.byteLength(),
            t = this.getX().toArray("be", r);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(t)
            : [4].concat(t, this.getY().toArray("be", r));
        }),
        (nr.prototype.encode = function (e, r) {
          return Ye.encode(this._encode(r), e);
        }),
        (nr.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var r = { doubles: null, naf: null, beta: null };
          return (
            (r.naf = this._getNAFPoints(8)),
            (r.doubles = this._getDoubles(4, e)),
            (r.beta = this._getBeta()),
            (this.precomputed = r),
            this
          );
        }),
        (nr.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var r = this.precomputed.doubles;
          return (
            !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
          );
        }),
        (nr.prototype._getDoubles = function (e, r) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var t = [this], n = this, o = 0; o < r; o += e) {
            for (var i = 0; i < e; i++) n = n.dbl();
            t.push(n);
          }
          return { step: e, points: t };
        }),
        (nr.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var r = [this],
              t = (1 << e) - 1,
              n = 1 === t ? null : this.dbl(),
              o = 1;
            o < t;
            o++
          )
            r[o] = r[o - 1].add(n);
          return { wnd: e, points: r };
        }),
        (nr.prototype._getBeta = function () {
          return null;
        }),
        (nr.prototype.dblp = function (e) {
          for (var r = this, t = 0; t < e; t++) r = r.dbl();
          return r;
        });
      var or = He(function (e) {
          "function" === typeof Object.create
            ? (e.exports = function (e, r) {
                r &&
                  ((e.super_ = r),
                  (e.prototype = Object.create(r.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, r) {
                if (r) {
                  e.super_ = r;
                  var t = function () {};
                  (t.prototype = r.prototype),
                    (e.prototype = new t()),
                    (e.prototype.constructor = e);
                }
              });
        }),
        ir = Ye.assert;
      function sr(e) {
        tr.call(this, "short", e),
          (this.a = new (We())(e.a, 16).toRed(this.red)),
          (this.b = new (We())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      or(sr, tr);
      var ar = sr;
      function fr(e, r, t, n) {
        tr.BasePoint.call(this, e, "affine"),
          null === r && null === t
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (We())(r, 16)),
              (this.y = new (We())(t, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function cr(e, r, t, n) {
        tr.BasePoint.call(this, e, "jacobian"),
          null === r && null === t && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (We())(0)))
            : ((this.x = new (We())(r, 16)),
              (this.y = new (We())(t, 16)),
              (this.z = new (We())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      (sr.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var r, t;
          if (e.beta) r = new (We())(e.beta, 16).toRed(this.red);
          else {
            var n = this._getEndoRoots(this.p);
            r = (r = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (e.lambda) t = new (We())(e.lambda, 16);
          else {
            var o = this._getEndoRoots(this.n);
            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(r))
              ? (t = o[0])
              : ((t = o[1]), ir(0 === this.g.mul(t).x.cmp(this.g.x.redMul(r))));
          }
          return {
            beta: r,
            lambda: t,
            basis: e.basis
              ? e.basis.map(function (e) {
                  return { a: new (We())(e.a, 16), b: new (We())(e.b, 16) };
                })
              : this._getEndoBasis(t),
          };
        }
      }),
        (sr.prototype._getEndoRoots = function (e) {
          var r = e === this.p ? this.red : We().mont(e),
            t = new (We())(2).toRed(r).redInvm(),
            n = t.redNeg(),
            o = new (We())(3).toRed(r).redNeg().redSqrt().redMul(t);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (sr.prototype._getEndoBasis = function (e) {
          for (
            var r,
              t,
              n,
              o,
              i,
              s,
              a,
              f,
              c,
              u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              l = e,
              h = this.n.clone(),
              d = new (We())(1),
              p = new (We())(0),
              g = new (We())(0),
              m = new (We())(1),
              y = 0;
            0 !== l.cmpn(0);

          ) {
            var v = h.div(l);
            (f = h.sub(v.mul(l))), (c = g.sub(v.mul(d)));
            var E = m.sub(v.mul(p));
            if (!n && f.cmp(u) < 0)
              (r = a.neg()), (t = d), (n = f.neg()), (o = c);
            else if (n && 2 === ++y) break;
            (a = f), (h = l), (l = f), (g = d), (d = c), (m = p), (p = E);
          }
          (i = f.neg()), (s = c);
          var b = n.sqr().add(o.sqr());
          return (
            i.sqr().add(s.sqr()).cmp(b) >= 0 && ((i = r), (s = t)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            i.negative && ((i = i.neg()), (s = s.neg())),
            [
              { a: n, b: o },
              { a: i, b: s },
            ]
          );
        }),
        (sr.prototype._endoSplit = function (e) {
          var r = this.endo.basis,
            t = r[0],
            n = r[1],
            o = n.b.mul(e).divRound(this.n),
            i = t.b.neg().mul(e).divRound(this.n),
            s = o.mul(t.a),
            a = i.mul(n.a),
            f = o.mul(t.b),
            c = i.mul(n.b);
          return { k1: e.sub(s).sub(a), k2: f.add(c).neg() };
        }),
        (sr.prototype.pointFromX = function (e, r) {
          (e = new (We())(e, 16)).red || (e = e.toRed(this.red));
          var t = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = t.redSqrt();
          if (0 !== n.redSqr().redSub(t).cmp(this.zero))
            throw new Error("invalid point");
          var o = n.fromRed().isOdd();
          return ((r && !o) || (!r && o)) && (n = n.redNeg()), this.point(e, n);
        }),
        (sr.prototype.validate = function (e) {
          if (e.inf) return !0;
          var r = e.x,
            t = e.y,
            n = this.a.redMul(r),
            o = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
          return 0 === t.redSqr().redISub(o).cmpn(0);
        }),
        (sr.prototype._endoWnafMulAdd = function (e, r, t) {
          for (
            var n = this._endoWnafT1, o = this._endoWnafT2, i = 0;
            i < e.length;
            i++
          ) {
            var s = this._endoSplit(r[i]),
              a = e[i],
              f = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (f = f.neg(!0))),
              (n[2 * i] = a),
              (n[2 * i + 1] = f),
              (o[2 * i] = s.k1),
              (o[2 * i + 1] = s.k2);
          }
          for (
            var c = this._wnafMulAdd(1, n, o, 2 * i, t), u = 0;
            u < 2 * i;
            u++
          )
            (n[u] = null), (o[u] = null);
          return c;
        }),
        or(fr, tr.BasePoint),
        (sr.prototype.point = function (e, r, t) {
          return new fr(this, e, r, t);
        }),
        (sr.prototype.pointFromJSON = function (e, r) {
          return fr.fromJSON(this, e, r);
        }),
        (fr.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var r = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var t = this.curve,
                n = function (e) {
                  return t.point(e.x.redMul(t.endo.beta), e.y);
                };
              (e.beta = r),
                (r.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n),
                  },
                });
            }
            return r;
          }
        }),
        (fr.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (fr.fromJSON = function (e, r, t) {
          "string" === typeof r && (r = JSON.parse(r));
          var n = e.point(r[0], r[1], t);
          if (!r[2]) return n;
          function o(r) {
            return e.point(r[0], r[1], t);
          }
          var i = r[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: i.doubles && {
                step: i.doubles.step,
                points: [n].concat(i.doubles.points.map(o)),
              },
              naf: i.naf && {
                wnd: i.naf.wnd,
                points: [n].concat(i.naf.points.map(o)),
              },
            }),
            n
          );
        }),
        (fr.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (fr.prototype.isInfinity = function () {
          return this.inf;
        }),
        (fr.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var r = this.y.redSub(e.y);
          0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(e.x).redInvm()));
          var t = r.redSqr().redISub(this.x).redISub(e.x),
            n = r.redMul(this.x.redSub(t)).redISub(this.y);
          return this.curve.point(t, n);
        }),
        (fr.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var r = this.curve.a,
            t = this.x.redSqr(),
            n = e.redInvm(),
            o = t.redAdd(t).redIAdd(t).redIAdd(r).redMul(n),
            i = o.redSqr().redISub(this.x.redAdd(this.x)),
            s = o.redMul(this.x.redSub(i)).redISub(this.y);
          return this.curve.point(i, s);
        }),
        (fr.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (fr.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (fr.prototype.mul = function (e) {
          return (
            (e = new (We())(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          );
        }),
        (fr.prototype.mulAdd = function (e, r, t) {
          var n = [this, r],
            o = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, o)
            : this.curve._wnafMulAdd(1, n, o, 2);
        }),
        (fr.prototype.jmulAdd = function (e, r, t) {
          var n = [this, r],
            o = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, o, !0)
            : this.curve._wnafMulAdd(1, n, o, 2, !0);
        }),
        (fr.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (fr.prototype.neg = function (e) {
          if (this.inf) return this;
          var r = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var t = this.precomputed,
              n = function (e) {
                return e.neg();
              };
            r.precomputed = {
              naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
              doubles: t.doubles && {
                step: t.doubles.step,
                points: t.doubles.points.map(n),
              },
            };
          }
          return r;
        }),
        (fr.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        or(cr, tr.BasePoint),
        (sr.prototype.jpoint = function (e, r, t) {
          return new cr(this, e, r, t);
        }),
        (cr.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            r = e.redSqr(),
            t = this.x.redMul(r),
            n = this.y.redMul(r).redMul(e);
          return this.curve.point(t, n);
        }),
        (cr.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (cr.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var r = e.z.redSqr(),
            t = this.z.redSqr(),
            n = this.x.redMul(r),
            o = e.x.redMul(t),
            i = this.y.redMul(r.redMul(e.z)),
            s = e.y.redMul(t.redMul(this.z)),
            a = n.redSub(o),
            f = i.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var c = a.redSqr(),
            u = c.redMul(a),
            l = n.redMul(c),
            h = f.redSqr().redIAdd(u).redISub(l).redISub(l),
            d = f.redMul(l.redISub(h)).redISub(i.redMul(u)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(h, d, p);
        }),
        (cr.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var r = this.z.redSqr(),
            t = this.x,
            n = e.x.redMul(r),
            o = this.y,
            i = e.y.redMul(r).redMul(this.z),
            s = t.redSub(n),
            a = o.redSub(i);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = s.redSqr(),
            c = f.redMul(s),
            u = t.redMul(f),
            l = a.redSqr().redIAdd(c).redISub(u).redISub(u),
            h = a.redMul(u.redISub(l)).redISub(o.redMul(c)),
            d = this.z.redMul(s);
          return this.curve.jpoint(l, h, d);
        }),
        (cr.prototype.dblp = function (e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          var r;
          if (this.curve.zeroA || this.curve.threeA) {
            var t = this;
            for (r = 0; r < e; r++) t = t.dbl();
            return t;
          }
          var n = this.curve.a,
            o = this.curve.tinv,
            i = this.x,
            s = this.y,
            a = this.z,
            f = a.redSqr().redSqr(),
            c = s.redAdd(s);
          for (r = 0; r < e; r++) {
            var u = i.redSqr(),
              l = c.redSqr(),
              h = l.redSqr(),
              d = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f)),
              p = i.redMul(l),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(h);
            var v = c.redMul(a);
            r + 1 < e && (f = f.redMul(h)), (i = g), (a = v), (c = y);
          }
          return this.curve.jpoint(i, c.redMul(o), a);
        }),
        (cr.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (cr.prototype._zeroDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              o = this.y.redSqr(),
              i = o.redSqr(),
              s = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              f = a.redSqr().redISub(s).redISub(s),
              c = i.redIAdd(i);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (e = f),
              (r = a.redMul(s.redISub(f)).redISub(c)),
              (t = this.y.redAdd(this.y));
          } else {
            var u = this.x.redSqr(),
              l = this.y.redSqr(),
              h = l.redSqr(),
              d = this.x.redAdd(l).redSqr().redISub(u).redISub(h);
            d = d.redIAdd(d);
            var p = u.redAdd(u).redIAdd(u),
              g = p.redSqr(),
              m = h.redIAdd(h);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = g.redISub(d).redISub(d)),
              (r = p.redMul(d.redISub(e)).redISub(m)),
              (t = (t = this.y.redMul(this.z)).redIAdd(t));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (cr.prototype._threeDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              o = this.y.redSqr(),
              i = o.redSqr(),
              s = this.x.redAdd(o).redSqr().redISub(n).redISub(i);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              f = a.redSqr().redISub(s).redISub(s);
            e = f;
            var c = i.redIAdd(i);
            (c = (c = c.redIAdd(c)).redIAdd(c)),
              (r = a.redMul(s.redISub(f)).redISub(c)),
              (t = this.y.redAdd(this.y));
          } else {
            var u = this.z.redSqr(),
              l = this.y.redSqr(),
              h = this.x.redMul(l),
              d = this.x.redSub(u).redMul(this.x.redAdd(u));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = d.redSqr().redISub(g)),
              (t = this.y.redAdd(this.z).redSqr().redISub(l).redISub(u));
            var m = l.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (r = d.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (cr.prototype._dbl = function () {
          var e = this.curve.a,
            r = this.x,
            t = this.y,
            n = this.z,
            o = n.redSqr().redSqr(),
            i = r.redSqr(),
            s = t.redSqr(),
            a = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(o)),
            f = r.redAdd(r),
            c = (f = f.redIAdd(f)).redMul(s),
            u = a.redSqr().redISub(c.redAdd(c)),
            l = c.redISub(u),
            h = s.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = a.redMul(l).redISub(h),
            p = t.redAdd(t).redMul(n);
          return this.curve.jpoint(u, d, p);
        }),
        (cr.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            t = this.z.redSqr(),
            n = r.redSqr(),
            o = e.redAdd(e).redIAdd(e),
            i = o.redSqr(),
            s = this.x.redAdd(r).redSqr().redISub(e).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              i
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var c = o.redIAdd(s).redSqr().redISub(i).redISub(a).redISub(f),
            u = r.redMul(c);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var l = this.x.redMul(a).redISub(u);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var h = this.y.redMul(c.redMul(f.redISub(c)).redISub(s.redMul(a)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = this.z.redAdd(s).redSqr().redISub(t).redISub(a);
          return this.curve.jpoint(l, h, d);
        }),
        (cr.prototype.mul = function (e, r) {
          return (e = new (We())(e, r)), this.curve._wnafMul(this, e);
        }),
        (cr.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var r = this.z.redSqr(),
            t = e.z.redSqr();
          if (0 !== this.x.redMul(t).redISub(e.x.redMul(r)).cmpn(0)) return !1;
          var n = r.redMul(this.z),
            o = t.redMul(e.z);
          return 0 === this.y.redMul(o).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (cr.prototype.eqXToP = function (e) {
          var r = this.z.redSqr(),
            t = e.toRed(this.curve.red).redMul(r);
          if (0 === this.x.cmp(t)) return !0;
          for (var n = e.clone(), o = this.curve.redN.redMul(r); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(o), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (cr.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (cr.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var ur = He(function (e, r) {
          var t = r;
          (t.base = tr), (t.short = ar), (t.mont = null), (t.edwards = null);
        }),
        lr = He(function (e, r) {
          var t,
            n = r,
            o = Ye.assert;
          function i(e) {
            "short" === e.type
              ? (this.curve = new ur.short(e))
              : "edwards" === e.type
              ? (this.curve = new ur.edwards(e))
              : (this.curve = new ur.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              o(this.g.validate(), "Invalid curve"),
              o(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function s(e, r) {
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var t = new i(r);
                return (
                  Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: t,
                  }),
                  t
                );
              },
            });
          }
          (n.PresetCurve = i),
            s("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: me().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            s("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: me().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            s("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: me().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            s("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: me().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            s("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: me().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            s("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: me().sha256,
              gRed: !1,
              g: ["9"],
            }),
            s("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: me().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            t = null.crash();
          } catch (a) {
            t = void 0;
          }
          s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: me().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              t,
            ],
          });
        });
      function hr(e) {
        if (!(this instanceof hr)) return new hr(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var r = Qe.toArray(e.entropy, e.entropyEnc || "hex"),
          t = Qe.toArray(e.nonce, e.nonceEnc || "hex"),
          n = Qe.toArray(e.pers, e.persEnc || "hex");
        Je(
          r.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(r, t, n);
      }
      var dr = hr;
      (hr.prototype._init = function (e, r, t) {
        var n = e.concat(r).concat(t);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var o = 0; o < this.V.length; o++)
          (this.K[o] = 0), (this.V[o] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (hr.prototype._hmac = function () {
          return new (me().hmac)(this.hash, this.K);
        }),
        (hr.prototype._update = function (e) {
          var r = this._hmac().update(this.V).update([0]);
          e && (r = r.update(e)),
            (this.K = r.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (hr.prototype.reseed = function (e, r, t, n) {
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            (e = Qe.toArray(e, r)),
            (t = Qe.toArray(t, n)),
            Je(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(t || [])),
            (this._reseed = 1);
        }),
        (hr.prototype.generate = function (e, r, t, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            t && ((t = Qe.toArray(t, n || "hex")), this._update(t));
          for (var o = []; o.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (o = o.concat(this.V));
          var i = o.slice(0, e);
          return this._update(t), this._reseed++, Qe.encode(i, r);
        });
      var pr = Ye.assert;
      function gr(e, r) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          r.priv && this._importPrivate(r.priv, r.privEnc),
          r.pub && this._importPublic(r.pub, r.pubEnc);
      }
      var mr = gr;
      (gr.fromPublic = function (e, r, t) {
        return r instanceof gr ? r : new gr(e, { pub: r, pubEnc: t });
      }),
        (gr.fromPrivate = function (e, r, t) {
          return r instanceof gr ? r : new gr(e, { priv: r, privEnc: t });
        }),
        (gr.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (gr.prototype.getPublic = function (e, r) {
          return (
            "string" === typeof e && ((r = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            r ? this.pub.encode(r, e) : this.pub
          );
        }),
        (gr.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (gr.prototype._importPrivate = function (e, r) {
          (this.priv = new (We())(e, r || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (gr.prototype._importPublic = function (e, r) {
          if (e.x || e.y)
            return (
              "mont" === this.ec.curve.type
                ? pr(e.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  pr(e.x && e.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, r);
        }),
        (gr.prototype.derive = function (e) {
          return (
            e.validate() || pr(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (gr.prototype.sign = function (e, r, t) {
          return this.ec.sign(e, this, r, t);
        }),
        (gr.prototype.verify = function (e, r, t) {
          return this.ec.verify(e, r, this, void 0, t);
        }),
        (gr.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var yr = Ye.assert;
      function vr(e, r) {
        if (e instanceof vr) return e;
        this._importDER(e, r) ||
          (yr(e.r && e.s, "Signature without r or s"),
          (this.r = new (We())(e.r, 16)),
          (this.s = new (We())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      var Er = vr;
      function br() {
        this.place = 0;
      }
      function Ar(e, r) {
        var t = e[r.place++];
        if (!(128 & t)) return t;
        var n = 15 & t;
        if (0 === n || n > 4) return !1;
        if (0 === e[r.place]) return !1;
        for (var o = 0, i = 0, s = r.place; i < n; i++, s++)
          (o <<= 8), (o |= e[s]), (o >>>= 0);
        return !(o <= 127) && ((r.place = s), o);
      }
      function wr(e) {
        for (var r = 0, t = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < t; )
          r++;
        return 0 === r ? e : e.slice(r);
      }
      function Nr(e, r) {
        if (r < 128) e.push(r);
        else {
          var t = 1 + ((Math.log(r) / Math.LN2) >>> 3);
          for (e.push(128 | t); --t; ) e.push((r >>> (t << 3)) & 255);
          e.push(r);
        }
      }
      (vr.prototype._importDER = function (e, r) {
        e = Ye.toArray(e, r);
        var t = new br();
        if (48 !== e[t.place++]) return !1;
        var n = Ar(e, t);
        if (!1 === n) return !1;
        if (n + t.place !== e.length) return !1;
        if (2 !== e[t.place++]) return !1;
        var o = Ar(e, t);
        if (!1 === o) return !1;
        if (0 !== (128 & e[t.place])) return !1;
        var i = e.slice(t.place, o + t.place);
        if (((t.place += o), 2 !== e[t.place++])) return !1;
        var s = Ar(e, t);
        if (!1 === s) return !1;
        if (e.length !== s + t.place) return !1;
        if (0 !== (128 & e[t.place])) return !1;
        var a = e.slice(t.place, s + t.place);
        if (0 === i[0]) {
          if (!(128 & i[1])) return !1;
          i = i.slice(1);
        }
        if (0 === a[0]) {
          if (!(128 & a[1])) return !1;
          a = a.slice(1);
        }
        return (
          (this.r = new (We())(i)),
          (this.s = new (We())(a)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (vr.prototype.toDER = function (e) {
          var r = this.r.toArray(),
            t = this.s.toArray();
          for (
            128 & r[0] && (r = [0].concat(r)),
              128 & t[0] && (t = [0].concat(t)),
              r = wr(r),
              t = wr(t);
            !t[0] && !(128 & t[1]);

          )
            t = t.slice(1);
          var n = [2];
          Nr(n, r.length), (n = n.concat(r)).push(2), Nr(n, t.length);
          var o = n.concat(t),
            i = [48];
          return Nr(i, o.length), (i = i.concat(o)), Ye.encode(i, e);
        });
      var Ir = function () {
          throw new Error("unsupported");
        },
        Rr = Ye.assert;
      function _r(e) {
        if (!(this instanceof _r)) return new _r(e);
        "string" === typeof e &&
          (Rr(
            Object.prototype.hasOwnProperty.call(lr, e),
            "Unknown curve " + e
          ),
          (e = lr[e])),
          e instanceof lr.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      var Pr = _r;
      (_r.prototype.keyPair = function (e) {
        return new mr(this, e);
      }),
        (_r.prototype.keyFromPrivate = function (e, r) {
          return mr.fromPrivate(this, e, r);
        }),
        (_r.prototype.keyFromPublic = function (e, r) {
          return mr.fromPublic(this, e, r);
        }),
        (_r.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var r = new dr({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || Ir(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              t = this.n.byteLength(),
              n = this.n.sub(new (We())(2));
            ;

          ) {
            var o = new (We())(r.generate(t));
            if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
          }
        }),
        (_r.prototype._truncateToN = function (e, r, t) {
          var n;
          if (We().isBN(e) || "number" === typeof e)
            n = (e = new (We())(e, 16)).byteLength();
          else if ("object" === typeof e)
            (n = e.length), (e = new (We())(e, 16));
          else {
            var o = e.toString();
            (n = (o.length + 1) >>> 1), (e = new (We())(o, 16));
          }
          "number" !== typeof t && (t = 8 * n);
          var i = t - this.n.bitLength();
          return (
            i > 0 && (e = e.ushrn(i)),
            !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (_r.prototype.sign = function (e, r, t, n) {
          if (
            ("object" === typeof t && ((n = t), (t = null)),
            n || (n = {}),
            "string" !== typeof e && "number" !== typeof e && !We().isBN(e))
          ) {
            Rr(
              "object" === typeof e && e && "number" === typeof e.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              Rr(e.length >>> 0 === e.length);
            for (var o = 0; o < e.length; o++) Rr((255 & e[o]) === e[o]);
          }
          (r = this.keyFromPrivate(r, t)),
            (e = this._truncateToN(e, !1, n.msgBitLength)),
            Rr(!e.isNeg(), "Can not sign a negative message");
          var i = this.n.byteLength(),
            s = r.getPrivate().toArray("be", i),
            a = e.toArray("be", i);
          Rr(new (We())(a).eq(e), "Can not sign message");
          for (
            var f = new dr({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              c = this.n.sub(new (We())(1)),
              u = 0;
            ;
            u++
          ) {
            var l = n.k ? n.k(u) : new (We())(f.generate(this.n.byteLength()));
            if (
              !((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(c) >= 0)
            ) {
              var h = this.g.mul(l);
              if (!h.isInfinity()) {
                var d = h.getX(),
                  p = d.umod(this.n);
                if (0 !== p.cmpn(0)) {
                  var g = l.invm(this.n).mul(p.mul(r.getPrivate()).iadd(e));
                  if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                    var m =
                      (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                    return (
                      n.canonical &&
                        g.cmp(this.nh) > 0 &&
                        ((g = this.n.sub(g)), (m ^= 1)),
                      new Er({ r: p, s: g, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (_r.prototype.verify = function (e, r, t, n, o) {
          o || (o = {}),
            (e = this._truncateToN(e, !1, o.msgBitLength)),
            (t = this.keyFromPublic(t, n));
          var i = (r = new Er(r, "hex")).r,
            s = r.s;
          if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          var a,
            f = s.invm(this.n),
            c = f.mul(e).umod(this.n),
            u = f.mul(i).umod(this.n);
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(c, t.getPublic(), u)).isInfinity() &&
                a.eqXToP(i)
            : !(a = this.g.mulAdd(c, t.getPublic(), u)).isInfinity() &&
                0 === a.getX().umod(this.n).cmp(i);
        }),
        (_r.prototype.recoverPubKey = function (e, r, t, n) {
          Rr((3 & t) === t, "The recovery param is more than two bits"),
            (r = new Er(r, n));
          var o = this.n,
            i = new (We())(e),
            s = r.r,
            a = r.s,
            f = 1 & t,
            c = t >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c)
            throw new Error("Unable to find sencond key candinate");
          s = c
            ? this.curve.pointFromX(s.add(this.curve.n), f)
            : this.curve.pointFromX(s, f);
          var u = r.r.invm(o),
            l = o.sub(i).mul(u).umod(o),
            h = a.mul(u).umod(o);
          return this.g.mulAdd(l, s, h);
        }),
        (_r.prototype.getKeyRecoveryParam = function (e, r, t, n) {
          if (null !== (r = new Er(r, n)).recoveryParam) return r.recoveryParam;
          for (var o = 0; o < 4; o++) {
            var i;
            try {
              i = this.recoverPubKey(e, r, o);
            } catch (e) {
              continue;
            }
            if (i.eq(t)) return o;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var Sr = He(function (e, r) {
        var t = r;
        (t.version = "6.6.1"),
          (t.utils = Ye),
          (t.rand = function () {
            throw new Error("unsupported");
          }),
          (t.curve = ur),
          (t.curves = lr),
          (t.ec = Pr),
          (t.eddsa = null);
      }).ec;
      const kr = new i.Vy("signing-key/5.8.0");
      let Tr = null;
      function Or() {
        return Tr || (Tr = new Sr("secp256k1")), Tr;
      }
      class Cr {
        constructor(e) {
          f(this, "curve", "secp256k1"),
            f(this, "privateKey", (0, o.c$)(e)),
            32 !== (0, o.cm)(this.privateKey) &&
              kr.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          const r = Or().keyFromPrivate((0, o.k9)(this.privateKey));
          f(this, "publicKey", "0x" + r.getPublic(!1, "hex")),
            f(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")),
            f(this, "_isSigningKey", !0);
        }
        _addPoint(e) {
          const r = Or().keyFromPublic((0, o.k9)(this.publicKey)),
            t = Or().keyFromPublic((0, o.k9)(e));
          return "0x" + r.pub.add(t.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          const r = Or().keyFromPrivate((0, o.k9)(this.privateKey)),
            t = (0, o.k9)(e);
          32 !== t.length &&
            kr.throwArgumentError("bad digest length", "digest", e);
          const n = r.sign(t, { canonical: !0 });
          return (0, o.Pc)({
            recoveryParam: n.recoveryParam,
            r: (0, o.bj)("0x" + n.r.toString(16), 32),
            s: (0, o.bj)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          const r = Or().keyFromPrivate((0, o.k9)(this.privateKey)),
            t = Or().keyFromPublic((0, o.k9)(xr(e)));
          return (0, o.bj)("0x" + r.derive(t.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !(!e || !e._isSigningKey);
        }
      }
      function xr(e, r) {
        const t = (0, o.k9)(e);
        if (32 === t.length) {
          const e = new Cr(t);
          return r
            ? "0x" + Or().keyFromPrivate(t).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === t.length
          ? r
            ? (0, o.c$)(t)
            : "0x" + Or().keyFromPublic(t).getPublic(!1, "hex")
          : 65 === t.length
          ? r
            ? "0x" + Or().keyFromPublic(t).getPublic(!0, "hex")
            : (0, o.c$)(t)
          : kr.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
      const Ur = new i.Vy("transactions/5.8.0");
      var Mr;
      function Fr(e) {
        return "0x" === e ? null : je(e);
      }
      function Lr(e) {
        return "0x" === e ? ze : n.gH.from(e);
      }
      !(function (e) {
        (e[(e.legacy = 0)] = "legacy"),
          (e[(e.eip2930 = 1)] = "eip2930"),
          (e[(e.eip1559 = 2)] = "eip1559");
      })(Mr || (Mr = {}));
      function Dr(e, r) {
        return (function (e) {
          const r = xr(e);
          return je((0, o.Ab)(j((0, o.Ab)(r, 1)), 12));
        })(
          (function (e, r) {
            const t = (0, o.Pc)(r),
              n = { r: (0, o.k9)(t.r), s: (0, o.k9)(t.s) };
            return (
              "0x" +
              Or()
                .recoverPubKey((0, o.k9)(e), n, t.recoveryParam)
                .encode("hex", !1)
            );
          })((0, o.k9)(e), r)
        );
      }
      function Br(e, r) {
        const t = (0, o.gr)(n.gH.from(e).toHexString());
        return (
          t.length > 32 &&
            Ur.throwArgumentError(
              "invalid length for " + r,
              "transaction:" + r,
              e
            ),
          t
        );
      }
      function Gr(e, r) {
        return {
          address: je(e),
          storageKeys: (r || []).map(
            (r, t) => (
              32 !== (0, o.cm)(r) &&
                Ur.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${e}:${t}]`,
                  r
                ),
              r.toLowerCase()
            )
          ),
        };
      }
      function qr(e) {
        if (Array.isArray(e))
          return e.map((e, r) =>
            Array.isArray(e)
              ? (e.length > 2 &&
                  Ur.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${r}]`,
                    e
                  ),
                Gr(e[0], e[1]))
              : Gr(e.address, e.storageKeys)
          );
        const r = Object.keys(e).map((r) => {
          const t = e[r].reduce((e, r) => ((e[r] = !0), e), {});
          return Gr(r, Object.keys(t).sort());
        });
        return r.sort((e, r) => e.address.localeCompare(r.address)), r;
      }
      function Vr(e) {
        return qr(e).map((e) => [e.address, e.storageKeys]);
      }
      function jr(e, r) {
        if (null != e.gasPrice) {
          const r = n.gH.from(e.gasPrice),
            t = n.gH.from(e.maxFeePerGas || 0);
          r.eq(t) ||
            Ur.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: r, maxFeePerGas: t }
            );
        }
        const t = [
          Br(e.chainId || 0, "chainId"),
          Br(e.nonce || 0, "nonce"),
          Br(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          Br(e.maxFeePerGas || 0, "maxFeePerGas"),
          Br(e.gasLimit || 0, "gasLimit"),
          null != e.to ? je(e.to) : "0x",
          Br(e.value || 0, "value"),
          e.data || "0x",
          Vr(e.accessList || []),
        ];
        if (r) {
          const e = (0, o.Pc)(r);
          t.push(Br(e.recoveryParam, "recoveryParam")),
            t.push((0, o.gr)(e.r)),
            t.push((0, o.gr)(e.s));
        }
        return (0, o.qn)(["0x02", xe(t)]);
      }
      function zr(e, r) {
        const t = [
          Br(e.chainId || 0, "chainId"),
          Br(e.nonce || 0, "nonce"),
          Br(e.gasPrice || 0, "gasPrice"),
          Br(e.gasLimit || 0, "gasLimit"),
          null != e.to ? je(e.to) : "0x",
          Br(e.value || 0, "value"),
          e.data || "0x",
          Vr(e.accessList || []),
        ];
        if (r) {
          const e = (0, o.Pc)(r);
          t.push(Br(e.recoveryParam, "recoveryParam")),
            t.push((0, o.gr)(e.r)),
            t.push((0, o.gr)(e.s));
        }
        return (0, o.qn)(["0x01", xe(t)]);
      }
      function Kr(e, r, t) {
        try {
          const t = Lr(r[0]).toNumber();
          if (0 !== t && 1 !== t) throw new Error("bad recid");
          e.v = t;
        } catch (n) {
          Ur.throwArgumentError("invalid v for transaction type: 1", "v", r[0]);
        }
        (e.r = (0, o.bj)(r[1], 32)), (e.s = (0, o.bj)(r[2], 32));
        try {
          const r = j(t(e));
          e.from = Dr(r, { r: e.r, s: e.s, recoveryParam: e.v });
        } catch (n) {}
      }
      function Wr(e) {
        const r = (0, o.k9)(e);
        if (r[0] > 127)
          return (function (e) {
            const r = Fe(e);
            9 !== r.length &&
              6 !== r.length &&
              Ur.throwArgumentError(
                "invalid raw transaction",
                "rawTransaction",
                e
              );
            const t = {
              nonce: Lr(r[0]).toNumber(),
              gasPrice: Lr(r[1]),
              gasLimit: Lr(r[2]),
              to: Fr(r[3]),
              value: Lr(r[4]),
              data: r[5],
              chainId: 0,
            };
            if (6 === r.length) return t;
            try {
              t.v = n.gH.from(r[6]).toNumber();
            } catch (i) {
              return t;
            }
            if (
              ((t.r = (0, o.bj)(r[7], 32)),
              (t.s = (0, o.bj)(r[8], 32)),
              n.gH.from(t.r).isZero() && n.gH.from(t.s).isZero())
            )
              (t.chainId = t.v), (t.v = 0);
            else {
              (t.chainId = Math.floor((t.v - 35) / 2)),
                t.chainId < 0 && (t.chainId = 0);
              let n = t.v - 27;
              const s = r.slice(0, 6);
              0 !== t.chainId &&
                (s.push((0, o.c$)(t.chainId)),
                s.push("0x"),
                s.push("0x"),
                (n -= 2 * t.chainId + 8));
              const a = j(xe(s));
              try {
                t.from = Dr(a, {
                  r: (0, o.c$)(t.r),
                  s: (0, o.c$)(t.s),
                  recoveryParam: n,
                });
              } catch (i) {}
              t.hash = j(e);
            }
            return (t.type = null), t;
          })(r);
        switch (r[0]) {
          case 1:
            return (function (e) {
              const r = Fe(e.slice(1));
              8 !== r.length &&
                11 !== r.length &&
                Ur.throwArgumentError(
                  "invalid component count for transaction type: 1",
                  "payload",
                  (0, o.c$)(e)
                );
              const t = {
                type: 1,
                chainId: Lr(r[0]).toNumber(),
                nonce: Lr(r[1]).toNumber(),
                gasPrice: Lr(r[2]),
                gasLimit: Lr(r[3]),
                to: Fr(r[4]),
                value: Lr(r[5]),
                data: r[6],
                accessList: qr(r[7]),
              };
              return (
                8 === r.length || ((t.hash = j(e)), Kr(t, r.slice(8), zr)), t
              );
            })(r);
          case 2:
            return (function (e) {
              const r = Fe(e.slice(1));
              9 !== r.length &&
                12 !== r.length &&
                Ur.throwArgumentError(
                  "invalid component count for transaction type: 2",
                  "payload",
                  (0, o.c$)(e)
                );
              const t = Lr(r[2]),
                n = Lr(r[3]),
                i = {
                  type: 2,
                  chainId: Lr(r[0]).toNumber(),
                  nonce: Lr(r[1]).toNumber(),
                  maxPriorityFeePerGas: t,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: Lr(r[4]),
                  to: Fr(r[5]),
                  value: Lr(r[6]),
                  data: r[7],
                  accessList: qr(r[8]),
                };
              return (
                9 === r.length || ((i.hash = j(e)), Kr(i, r.slice(9), jr)), i
              );
            })(r);
        }
        return Ur.throwError(
          `unsupported transaction type: ${r[0]}`,
          i.Vy.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: r[0] }
        );
      }
      const Hr = new i.Vy(Se);
      class Jr {
        constructor() {
          this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          const e = {},
            r = this.address.bind(this),
            t = this.bigNumber.bind(this),
            n = this.blockTag.bind(this),
            o = this.data.bind(this),
            i = this.hash.bind(this),
            s = this.hex.bind(this),
            a = this.number.bind(this),
            f = this.type.bind(this);
          return (
            (e.transaction = {
              hash: i,
              type: f,
              accessList: Jr.allowNull(this.accessList.bind(this), null),
              blockHash: Jr.allowNull(i, null),
              blockNumber: Jr.allowNull(a, null),
              transactionIndex: Jr.allowNull(a, null),
              confirmations: Jr.allowNull(a, null),
              from: r,
              gasPrice: Jr.allowNull(t),
              maxPriorityFeePerGas: Jr.allowNull(t),
              maxFeePerGas: Jr.allowNull(t),
              gasLimit: t,
              to: Jr.allowNull(r, null),
              value: t,
              nonce: a,
              data: o,
              r: Jr.allowNull(this.uint256),
              s: Jr.allowNull(this.uint256),
              v: Jr.allowNull(a),
              creates: Jr.allowNull(r, null),
              raw: Jr.allowNull(o),
            }),
            (e.transactionRequest = {
              from: Jr.allowNull(r),
              nonce: Jr.allowNull(a),
              gasLimit: Jr.allowNull(t),
              gasPrice: Jr.allowNull(t),
              maxPriorityFeePerGas: Jr.allowNull(t),
              maxFeePerGas: Jr.allowNull(t),
              to: Jr.allowNull(r),
              value: Jr.allowNull(t),
              data: Jr.allowNull((e) => this.data(e, !0)),
              type: Jr.allowNull(a),
              accessList: Jr.allowNull(this.accessList.bind(this), null),
            }),
            (e.receiptLog = {
              transactionIndex: a,
              blockNumber: a,
              transactionHash: i,
              address: r,
              topics: Jr.arrayOf(i),
              data: o,
              logIndex: a,
              blockHash: i,
            }),
            (e.receipt = {
              to: Jr.allowNull(this.address, null),
              from: Jr.allowNull(this.address, null),
              contractAddress: Jr.allowNull(r, null),
              transactionIndex: a,
              root: Jr.allowNull(s),
              gasUsed: t,
              logsBloom: Jr.allowNull(o),
              blockHash: i,
              transactionHash: i,
              logs: Jr.arrayOf(this.receiptLog.bind(this)),
              blockNumber: a,
              confirmations: Jr.allowNull(a, null),
              cumulativeGasUsed: t,
              effectiveGasPrice: Jr.allowNull(t),
              status: Jr.allowNull(a),
              type: f,
            }),
            (e.block = {
              hash: Jr.allowNull(i),
              parentHash: i,
              number: a,
              timestamp: a,
              nonce: Jr.allowNull(s),
              difficulty: this.difficulty.bind(this),
              gasLimit: t,
              gasUsed: t,
              miner: Jr.allowNull(r),
              extraData: o,
              transactions: Jr.allowNull(Jr.arrayOf(i)),
              baseFeePerGas: Jr.allowNull(t),
            }),
            (e.blockWithTransactions = l(e.block)),
            (e.blockWithTransactions.transactions = Jr.allowNull(
              Jr.arrayOf(this.transactionResponse.bind(this))
            )),
            (e.filter = {
              fromBlock: Jr.allowNull(n, void 0),
              toBlock: Jr.allowNull(n, void 0),
              blockHash: Jr.allowNull(i, void 0),
              address: Jr.allowNull(r, void 0),
              topics: Jr.allowNull(this.topics.bind(this), void 0),
            }),
            (e.filterLog = {
              blockNumber: Jr.allowNull(a),
              blockHash: Jr.allowNull(i),
              transactionIndex: a,
              removed: Jr.allowNull(this.boolean.bind(this)),
              address: r,
              data: Jr.allowFalsish(o, "0x"),
              topics: Jr.arrayOf(i),
              transactionHash: i,
              logIndex: a,
            }),
            e
          );
        }
        accessList(e) {
          return qr(e || []);
        }
        number(e) {
          return "0x" === e ? 0 : n.gH.from(e).toNumber();
        }
        type(e) {
          return "0x" === e || null == e ? 0 : n.gH.from(e).toNumber();
        }
        bigNumber(e) {
          return n.gH.from(e);
        }
        boolean(e) {
          if ("boolean" === typeof e) return e;
          if ("string" === typeof e) {
            if ("true" === (e = e.toLowerCase())) return !0;
            if ("false" === e) return !1;
          }
          throw new Error("invalid boolean - " + e);
        }
        hex(e, r) {
          return "string" === typeof e &&
            (r || "0x" === e.substring(0, 2) || (e = "0x" + e), (0, o.Lo)(e))
            ? e.toLowerCase()
            : Hr.throwArgumentError("invalid hash", "value", e);
        }
        data(e, r) {
          const t = this.hex(e, r);
          if (t.length % 2 !== 0)
            throw new Error("invalid data; odd-length - " + e);
          return t;
        }
        address(e) {
          return je(e);
        }
        callAddress(e) {
          if (!(0, o.Lo)(e, 32)) return null;
          const r = je((0, o.Ab)(e, 12));
          return "0x0000000000000000000000000000000000000000" === r ? null : r;
        }
        contractAddress(e) {
          return (function (e) {
            let r = null;
            try {
              r = je(e.from);
            } catch (i) {
              Le.throwArgumentError("missing from address", "transaction", e);
            }
            const t = (0, o.gr)((0, o.k9)(n.gH.from(e.nonce).toHexString()));
            return je((0, o.Ab)(j(xe([r, t])), 12));
          })(e);
        }
        blockTag(e) {
          if (null == e) return "latest";
          if ("earliest" === e) return "0x0";
          if ("latest" === e || "pending" === e) return e;
          if ("number" === typeof e || (0, o.Lo)(e)) return (0, o.Fh)(e);
          throw new Error("invalid blockTag");
        }
        hash(e, r) {
          const t = this.hex(e, r);
          return 32 !== (0, o.cm)(t)
            ? Hr.throwArgumentError("invalid hash", "value", e)
            : t;
        }
        difficulty(e) {
          if (null == e) return null;
          const r = n.gH.from(e);
          try {
            return r.toNumber();
          } catch (t) {}
          return null;
        }
        uint256(e) {
          if (!(0, o.Lo)(e)) throw new Error("invalid uint256");
          return (0, o.bj)(e, 32);
        }
        _block(e, r) {
          null != e.author && null == e.miner && (e.miner = e.author);
          const t = null != e._difficulty ? e._difficulty : e.difficulty,
            o = Jr.check(r, e);
          return (o._difficulty = null == t ? null : n.gH.from(t)), o;
        }
        block(e) {
          return this._block(e, this.formats.block);
        }
        blockWithTransactions(e) {
          return this._block(e, this.formats.blockWithTransactions);
        }
        transactionRequest(e) {
          return Jr.check(this.formats.transactionRequest, e);
        }
        transactionResponse(e) {
          null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas),
            e.to &&
              n.gH.from(e.to).isZero() &&
              (e.to = "0x0000000000000000000000000000000000000000"),
            null != e.input && null == e.data && (e.data = e.input),
            null == e.to &&
              null == e.creates &&
              (e.creates = this.contractAddress(e)),
            (1 !== e.type && 2 !== e.type) ||
              null != e.accessList ||
              (e.accessList = []);
          const r = Jr.check(this.formats.transaction, e);
          if (null != e.chainId) {
            let t = e.chainId;
            (0, o.Lo)(t) && (t = n.gH.from(t).toNumber()), (r.chainId = t);
          } else {
            let t = e.networkId;
            null == t && null == r.v && (t = e.chainId),
              (0, o.Lo)(t) && (t = n.gH.from(t).toNumber()),
              "number" !== typeof t &&
                null != r.v &&
                ((t = (r.v - 35) / 2), t < 0 && (t = 0), (t = parseInt(t))),
              "number" !== typeof t && (t = 0),
              (r.chainId = t);
          }
          return (
            r.blockHash &&
              "x" === r.blockHash.replace(/0/g, "") &&
              (r.blockHash = null),
            r
          );
        }
        transaction(e) {
          return Wr(e);
        }
        receiptLog(e) {
          return Jr.check(this.formats.receiptLog, e);
        }
        receipt(e) {
          const r = Jr.check(this.formats.receipt, e);
          if (null != r.root)
            if (r.root.length <= 4) {
              const e = n.gH.from(r.root).toNumber();
              0 === e || 1 === e
                ? (null != r.status &&
                    r.status !== e &&
                    Hr.throwArgumentError(
                      "alt-root-status/status mismatch",
                      "value",
                      { root: r.root, status: r.status }
                    ),
                  (r.status = e),
                  delete r.root)
                : Hr.throwArgumentError(
                    "invalid alt-root-status",
                    "value.root",
                    r.root
                  );
            } else
              66 !== r.root.length &&
                Hr.throwArgumentError(
                  "invalid root hash",
                  "value.root",
                  r.root
                );
          return null != r.status && (r.byzantium = !0), r;
        }
        topics(e) {
          return Array.isArray(e)
            ? e.map((e) => this.topics(e))
            : null != e
            ? this.hash(e, !0)
            : null;
        }
        filter(e) {
          return Jr.check(this.formats.filter, e);
        }
        filterLog(e) {
          return Jr.check(this.formats.filterLog, e);
        }
        static check(e, r) {
          const t = {};
          for (const o in e)
            try {
              const n = e[o](r[o]);
              void 0 !== n && (t[o] = n);
            } catch (n) {
              throw ((n.checkKey = o), (n.checkValue = r[o]), n);
            }
          return t;
        }
        static allowNull(e, r) {
          return function (t) {
            return null == t ? r : e(t);
          };
        }
        static allowFalsish(e, r) {
          return function (t) {
            return t ? e(t) : r;
          };
        }
        static arrayOf(e) {
          return function (r) {
            if (!Array.isArray(r)) throw new Error("not an array");
            const t = [];
            return (
              r.forEach(function (r) {
                t.push(e(r));
              }),
              t
            );
          };
        }
      }
      function Xr(e) {
        return e && "function" === typeof e.isCommunityResource;
      }
      function Qr(e) {
        return Xr(e) && e.isCommunityResource();
      }
      let Yr = !1;
      function Zr() {
        Yr ||
          ((Yr = !0),
          console.log("========= NOTICE ========="),
          console.log(
            "Request-Rate Exceeded  (this message will not be repeated)"
          ),
          console.log(""),
          console.log(
            "The default API keys for each service are provided as a highly-throttled,"
          ),
          console.log(
            "community resource for low-traffic projects and early prototyping."
          ),
          console.log(""),
          console.log(
            "While your application will continue to function, we highly recommended"
          ),
          console.log(
            "signing up for your own API keys to improve performance, increase your"
          ),
          console.log(
            "request rate/limit and enable other perks, such as metrics and advanced APIs."
          ),
          console.log(""),
          console.log("For more details: https://docs.ethers.io/api-keys/"),
          console.log("=========================="));
      }
      var $r = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const et = new i.Vy(Se);
      function rt(e) {
        return null == e
          ? "null"
          : (32 !== (0, o.cm)(e) &&
              et.throwArgumentError("invalid topic", "topic", e),
            e.toLowerCase());
      }
      function tt(e) {
        for (e = e.slice(); e.length > 0 && null == e[e.length - 1]; ) e.pop();
        return e
          .map((e) => {
            if (Array.isArray(e)) {
              const r = {};
              e.forEach((e) => {
                r[rt(e)] = !0;
              });
              const t = Object.keys(r);
              return t.sort(), t.join("|");
            }
            return rt(e);
          })
          .join("&");
      }
      function nt(e) {
        if ("string" === typeof e) {
          if (((e = e.toLowerCase()), 32 === (0, o.cm)(e))) return "tx:" + e;
          if (-1 === e.indexOf(":")) return e;
        } else {
          if (Array.isArray(e)) return "filter:*:" + tt(e);
          if (E.isForkEvent(e))
            throw (et.warn("not implemented"), new Error("not implemented"));
          if (e && "object" === typeof e)
            return "filter:" + (e.address || "*") + ":" + tt(e.topics || []);
        }
        throw new Error("invalid event - " + e);
      }
      function ot() {
        return new Date().getTime();
      }
      function it(e) {
        return new Promise((r) => {
          setTimeout(r, e);
        });
      }
      const st = ["block", "network", "pending", "poll"];
      class at {
        constructor(e, r, t) {
          f(this, "tag", e),
            f(this, "listener", r),
            f(this, "once", t),
            (this._lastBlockNumber = -2),
            (this._inflight = !1);
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          const e = this.tag.split(":");
          return "tx" !== e[0] ? null : e[1];
        }
        get filter() {
          const e = this.tag.split(":");
          if ("filter" !== e[0]) return null;
          const r = e[1],
            t =
              "" === (n = e[2])
                ? []
                : n.split(/&/g).map((e) => {
                    if ("" === e) return [];
                    const r = e
                      .split("|")
                      .map((e) => ("null" === e ? null : e));
                    return 1 === r.length ? r[0] : r;
                  });
          var n;
          const o = {};
          return (
            t.length > 0 && (o.topics = t), r && "*" !== r && (o.address = r), o
          );
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || st.indexOf(this.tag) >= 0;
        }
      }
      const ft = {
        0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
        2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
        3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
        60: { symbol: "eth", ilk: "eth" },
        61: { symbol: "etc", ilk: "eth" },
        700: { symbol: "xdai", ilk: "eth" },
      };
      function ct(e) {
        return (0, o.bj)(n.gH.from(e).toHexString(), 32);
      }
      function ut(e) {
        return C.encode((0, o.xW)([e, (0, o.Ab)(ye(ye(e)), 0, 4)]));
      }
      const lt = new RegExp("^(ipfs)://(.*)$", "i"),
        ht = [
          new RegExp("^(https)://(.*)$", "i"),
          new RegExp("^(data):(.*)$", "i"),
          lt,
          new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      function dt(e, r) {
        try {
          return G(pt(e, r));
        } catch (t) {}
        return null;
      }
      function pt(e, r) {
        if ("0x" === e) return null;
        const t = n.gH.from((0, o.Ab)(e, r, r + 32)).toNumber(),
          i = n.gH.from((0, o.Ab)(e, t, t + 32)).toNumber();
        return (0, o.Ab)(e, t + 32, t + 32 + i);
      }
      function gt(e) {
        return (
          e.match(/^ipfs:\/\/ipfs\//i)
            ? (e = e.substring(12))
            : e.match(/^ipfs:\/\//i)
            ? (e = e.substring(7))
            : et.throwArgumentError("unsupported IPFS format", "link", e),
          `https://gateway.ipfs.io/ipfs/${e}`
        );
      }
      function mt(e) {
        const r = (0, o.k9)(e);
        if (r.length > 32) throw new Error("internal; should not happen");
        const t = new Uint8Array(32);
        return t.set(r, 32 - r.length), t;
      }
      function yt(e) {
        if (e.length % 32 === 0) return e;
        const r = new Uint8Array(32 * Math.ceil(e.length / 32));
        return r.set(e), r;
      }
      function vt(e) {
        const r = [];
        let t = 0;
        for (let n = 0; n < e.length; n++) r.push(null), (t += 32);
        for (let n = 0; n < e.length; n++) {
          const i = (0, o.k9)(e[n]);
          (r[n] = mt(t)),
            r.push(mt(i.length)),
            r.push(yt(i)),
            (t += 32 + 32 * Math.ceil(i.length / 32));
        }
        return (0, o.qn)(r);
      }
      class Et {
        constructor(e, r, t, n) {
          f(this, "provider", e),
            f(this, "name", t),
            f(this, "address", e.formatter.address(r)),
            f(this, "_resolvedAddress", n);
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
                })
                .then((e) => n.gH.from(e).eq(1))
                .catch((e) => {
                  if (e.code === i.Vy.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), e);
                })),
            this._supportsEip2544
          );
        }
        _fetch(e, r) {
          return $r(this, void 0, void 0, function* () {
            const t = {
              to: this.address,
              ccipReadEnabled: !0,
              data: (0, o.qn)([e, pe(this.name), r || "0x"]),
            };
            let n = !1;
            var s;
            (yield this.supportsWildcard()) &&
              ((n = !0),
              (t.data = (0, o.qn)([
                "0x9061b923",
                vt([
                  ((s = this.name),
                  (0, o.c$)(
                    (0, o.xW)(
                      de(s).map((e) => {
                        if (e.length > 63)
                          throw new Error(
                            "invalid DNS encoded entry; length exceeds 63 bytes"
                          );
                        const r = new Uint8Array(e.length + 1);
                        return r.set(e, 1), (r[0] = r.length - 1), r;
                      })
                    )
                  ) + "00"),
                  t.data,
                ]),
              ])));
            try {
              let e = yield this.provider.call(t);
              return (
                (0, o.k9)(e).length % 32 === 4 &&
                  et.throwError(
                    "resolver threw error",
                    i.Vy.errors.CALL_EXCEPTION,
                    { transaction: t, data: e }
                  ),
                n && (e = pt(e, 0)),
                e
              );
            } catch (a) {
              if (a.code === i.Vy.errors.CALL_EXCEPTION) return null;
              throw a;
            }
          });
        }
        _fetchBytes(e, r) {
          return $r(this, void 0, void 0, function* () {
            const t = yield this._fetch(e, r);
            return null != t ? pt(t, 0) : null;
          });
        }
        _getAddress(e, r) {
          const t = ft[String(e)];
          if (
            (null == t &&
              et.throwError(
                `unsupported coin type: ${e}`,
                i.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: `getAddress(${e})` }
              ),
            "eth" === t.ilk)
          )
            return this.provider.formatter.address(r);
          const n = (0, o.k9)(r);
          if (null != t.p2pkh) {
            const e = r.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (e) {
              const r = parseInt(e[1], 16);
              if (e[2].length === 2 * r && r >= 1 && r <= 75)
                return ut((0, o.xW)([[t.p2pkh], "0x" + e[2]]));
            }
          }
          if (null != t.p2sh) {
            const e = r.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (e) {
              const r = parseInt(e[1], 16);
              if (e[2].length === 2 * r && r >= 1 && r <= 75)
                return ut((0, o.xW)([[t.p2sh], "0x" + e[2]]));
            }
          }
          if (null != t.prefix) {
            const e = n[1];
            let r = n[0];
            if (
              (0 === r ? 20 !== e && 32 !== e && (r = -1) : (r = -1),
              r >= 0 && n.length === 2 + e && e >= 1 && e <= 75)
            ) {
              const e = Pe().toWords(n.slice(2));
              return e.unshift(r), Pe().encode(t.prefix, e);
            }
          }
          return null;
        }
        getAddress(e) {
          return $r(this, void 0, void 0, function* () {
            if ((null == e && (e = 60), 60 === e))
              try {
                const e = yield this._fetch("0x3b3b57de");
                return "0x" === e ||
                  "0x0000000000000000000000000000000000000000000000000000000000000000" ===
                    e
                  ? null
                  : this.provider.formatter.callAddress(e);
              } catch (n) {
                if (n.code === i.Vy.errors.CALL_EXCEPTION) return null;
                throw n;
              }
            const r = yield this._fetchBytes("0xf1cb7e06", ct(e));
            if (null == r || "0x" === r) return null;
            const t = this._getAddress(e, r);
            return (
              null == t &&
                et.throwError(
                  "invalid or unsupported coin data",
                  i.Vy.errors.UNSUPPORTED_OPERATION,
                  { operation: `getAddress(${e})`, coinType: e, data: r }
                ),
              t
            );
          });
        }
        getAvatar() {
          return $r(this, void 0, void 0, function* () {
            const e = [{ type: "name", content: this.name }];
            try {
              const r = yield this.getText("avatar");
              if (null == r) return null;
              for (let t = 0; t < ht.length; t++) {
                const i = r.match(ht[t]);
                if (null == i) continue;
                const s = i[1].toLowerCase();
                switch (s) {
                  case "https":
                    return (
                      e.push({ type: "url", content: r }),
                      { linkage: e, url: r }
                    );
                  case "data":
                    return (
                      e.push({ type: "data", content: r }),
                      { linkage: e, url: r }
                    );
                  case "ipfs":
                    return (
                      e.push({ type: "ipfs", content: r }),
                      { linkage: e, url: gt(r) }
                    );
                  case "erc721":
                  case "erc1155": {
                    const t = "erc721" === s ? "0xc87b56dd" : "0x0e89341c";
                    e.push({ type: s, content: r });
                    const a =
                        this._resolvedAddress || (yield this.getAddress()),
                      f = (i[2] || "").split("/");
                    if (2 !== f.length) return null;
                    const c = yield this.provider.formatter.address(f[0]),
                      u = (0, o.bj)(n.gH.from(f[1]).toHexString(), 32);
                    if ("erc721" === s) {
                      const r = this.provider.formatter.callAddress(
                        yield this.provider.call({
                          to: c,
                          data: (0, o.qn)(["0x6352211e", u]),
                        })
                      );
                      if (a !== r) return null;
                      e.push({ type: "owner", content: r });
                    } else if ("erc1155" === s) {
                      const r = n.gH.from(
                        yield this.provider.call({
                          to: c,
                          data: (0, o.qn)(["0x00fdd58e", (0, o.bj)(a, 32), u]),
                        })
                      );
                      if (r.isZero()) return null;
                      e.push({ type: "balance", content: r.toString() });
                    }
                    const l = {
                      to: this.provider.formatter.address(f[0]),
                      data: (0, o.qn)([t, u]),
                    };
                    let h = dt(yield this.provider.call(l), 0);
                    if (null == h) return null;
                    e.push({ type: "metadata-url-base", content: h }),
                      "erc1155" === s &&
                        ((h = h.replace("{id}", u.substring(2))),
                        e.push({ type: "metadata-url-expanded", content: h })),
                      h.match(/^ipfs:/i) && (h = gt(h)),
                      e.push({ type: "metadata-url", content: h });
                    const d = yield Ie(h);
                    if (!d) return null;
                    e.push({ type: "metadata", content: JSON.stringify(d) });
                    let p = d.image;
                    if ("string" !== typeof p) return null;
                    if (p.match(/^(https:\/\/|data:)/i));
                    else {
                      if (null == p.match(lt)) return null;
                      e.push({ type: "url-ipfs", content: p }), (p = gt(p));
                    }
                    return (
                      e.push({ type: "url", content: p }),
                      { linkage: e, url: p }
                    );
                  }
                }
              }
            } catch (r) {}
            return null;
          });
        }
        getContentHash() {
          return $r(this, void 0, void 0, function* () {
            const e = yield this._fetchBytes("0xbc1c58d1");
            if (null == e || "0x" === e) return null;
            const r = e.match(
              /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (r) {
              const e = parseInt(r[3], 16);
              if (r[4].length === 2 * e)
                return "ipfs://" + C.encode("0x" + r[1]);
            }
            const t = e.match(
              /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (t) {
              const e = parseInt(t[3], 16);
              if (t[4].length === 2 * e)
                return "ipns://" + C.encode("0x" + t[1]);
            }
            const n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (n && 64 === n[1].length) return "bzz://" + n[1];
            const o = e.match(/^0x90b2c605([0-9a-f]*)$/);
            if (o && 68 === o[1].length) {
              const e = { "=": "", "+": "-", "/": "_" };
              return "sia://" + T("0x" + o[1]).replace(/[=+\/]/g, (r) => e[r]);
            }
            return et.throwError(
              "invalid or unsupported content hash data",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "getContentHash()", data: e }
            );
          });
        }
        getText(e) {
          return $r(this, void 0, void 0, function* () {
            let r = B(e);
            (r = (0, o.xW)([ct(64), ct(r.length), r])),
              r.length % 32 !== 0 &&
                (r = (0, o.xW)([r, (0, o.bj)("0x", 32 - (e.length % 32))]));
            const t = yield this._fetchBytes("0x59d1d43c", (0, o.c$)(r));
            return null == t || "0x" === t ? null : G(t);
          });
        }
      }
      let bt = null,
        At = 1;
      class wt extends b {
        constructor(e) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            f(this, "anyNetwork", "any" === e),
            this.anyNetwork && (e = this.detectNetwork()),
            e instanceof Promise)
          )
            (this._networkPromise = e),
              e.catch((e) => {}),
              this._ready().catch((e) => {});
          else {
            const r = c(new.target, "getNetwork")(e);
            r
              ? (f(this, "_network", r), this.emit("network", r, null))
              : et.throwArgumentError("invalid network", "network", e);
          }
          (this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0);
        }
        _ready() {
          return $r(this, void 0, void 0, function* () {
            if (null == this._network) {
              let r = null;
              if (this._networkPromise)
                try {
                  r = yield this._networkPromise;
                } catch (e) {}
              null == r && (r = yield this.detectNetwork()),
                r ||
                  et.throwError(
                    "no network detected",
                    i.Vy.errors.UNKNOWN_ERROR,
                    {}
                  ),
                null == this._network &&
                  (this.anyNetwork
                    ? (this._network = r)
                    : f(this, "_network", r),
                  this.emit("network", r, null));
            }
            return this._network;
          });
        }
        get ready() {
          return Re(() =>
            this._ready().then(
              (e) => e,
              (e) => {
                if (
                  e.code !== i.Vy.errors.NETWORK_ERROR ||
                  "noNetwork" !== e.event
                )
                  throw e;
              }
            )
          );
        }
        static getFormatter() {
          return null == bt && (bt = new Jr()), bt;
        }
        static getNetwork(e) {
          return S(null == e ? "homestead" : e);
        }
        ccipReadFetch(e, r, t) {
          return $r(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === t.length) return null;
            const n = e.to.toLowerCase(),
              o = r.toLowerCase(),
              s = [];
            for (let e = 0; e < t.length; e++) {
              const r = t[e],
                a = r.replace("{sender}", n).replace("{data}", o),
                f =
                  r.indexOf("{data}") >= 0
                    ? null
                    : JSON.stringify({ data: o, sender: n }),
                c = yield Ie(
                  { url: a, errorPassThrough: !0 },
                  f,
                  (e, r) => ((e.status = r.statusCode), e)
                );
              if (c.data) return c.data;
              const u = c.message || "unknown error";
              if (c.status >= 400 && c.status < 500)
                return et.throwError(
                  `response not found during CCIP fetch: ${u}`,
                  i.Vy.errors.SERVER_ERROR,
                  { url: r, errorMessage: u }
                );
              s.push(u);
            }
            return et.throwError(
              `error encountered during CCIP fetch: ${s
                .map((e) => JSON.stringify(e))
                .join(", ")}`,
              i.Vy.errors.SERVER_ERROR,
              { urls: t, errorMessages: s }
            );
          });
        }
        _getInternalBlockNumber(e) {
          return $r(this, void 0, void 0, function* () {
            if ((yield this._ready(), e > 0))
              for (; this._internalBlockNumber; ) {
                const r = this._internalBlockNumber;
                try {
                  const t = yield r;
                  if (ot() - t.respTime <= e) return t.blockNumber;
                  break;
                } catch (o) {
                  if (this._internalBlockNumber === r) break;
                }
              }
            const r = ot(),
              t = u({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(
                  (e) => null,
                  (e) => e
                ),
              }).then((e) => {
                let { blockNumber: o, networkError: i } = e;
                if (i)
                  throw (
                    (this._internalBlockNumber === t &&
                      (this._internalBlockNumber = null),
                    i)
                  );
                const s = ot();
                return (
                  (o = n.gH.from(o).toNumber()),
                  o < this._maxInternalBlockNumber &&
                    (o = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = o),
                  this._setFastBlockNumber(o),
                  { blockNumber: o, reqTime: r, respTime: s }
                );
              });
            return (
              (this._internalBlockNumber = t),
              t.catch((e) => {
                this._internalBlockNumber === t &&
                  (this._internalBlockNumber = null);
              }),
              (yield t).blockNumber
            );
          });
        }
        poll() {
          return $r(this, void 0, void 0, function* () {
            const e = At++,
              r = [];
            let t = null;
            try {
              t = yield this._getInternalBlockNumber(
                100 + this.pollingInterval / 2
              );
            } catch (n) {
              return void this.emit("error", n);
            }
            if (
              (this._setFastBlockNumber(t),
              this.emit("poll", e, t),
              t !== this._lastBlockNumber)
            ) {
              if (
                (-2 === this._emitted.block && (this._emitted.block = t - 1),
                Math.abs(this._emitted.block - t) > 1e3)
              )
                et.warn(
                  `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${t})`
                ),
                  this.emit(
                    "error",
                    et.makeError(
                      "network block skew detected",
                      i.Vy.errors.NETWORK_ERROR,
                      {
                        blockNumber: t,
                        event: "blockSkew",
                        previousBlockNumber: this._emitted.block,
                      }
                    )
                  ),
                  this.emit("block", t);
              else
                for (let e = this._emitted.block + 1; e <= t; e++)
                  this.emit("block", e);
              this._emitted.block !== t &&
                ((this._emitted.block = t),
                Object.keys(this._emitted).forEach((e) => {
                  if ("block" === e) return;
                  const r = this._emitted[e];
                  "pending" !== r && t - r > 12 && delete this._emitted[e];
                })),
                -2 === this._lastBlockNumber && (this._lastBlockNumber = t - 1),
                this._events.forEach((e) => {
                  switch (e.type) {
                    case "tx": {
                      const t = e.hash;
                      let n = this.getTransactionReceipt(t)
                        .then((e) =>
                          e && null != e.blockNumber
                            ? ((this._emitted["t:" + t] = e.blockNumber),
                              this.emit(t, e),
                              null)
                            : null
                        )
                        .catch((e) => {
                          this.emit("error", e);
                        });
                      r.push(n);
                      break;
                    }
                    case "filter":
                      if (!e._inflight) {
                        e._inflight = !0;
                        const n = e.filter;
                        (n.fromBlock = e._lastBlockNumber + 1),
                          (n.toBlock = t),
                          n.toBlock - this._maxFilterBlockRange > n.fromBlock &&
                            (n.fromBlock =
                              n.toBlock - this._maxFilterBlockRange);
                        const o = this.getLogs(n)
                          .then((r) => {
                            (e._inflight = !1),
                              0 !== r.length &&
                                r.forEach((r) => {
                                  r.blockNumber > e._lastBlockNumber &&
                                    (e._lastBlockNumber = r.blockNumber),
                                    (this._emitted["b:" + r.blockHash] =
                                      r.blockNumber),
                                    (this._emitted["t:" + r.transactionHash] =
                                      r.blockNumber),
                                    this.emit(n, r);
                                });
                          })
                          .catch((r) => {
                            this.emit("error", r), (e._inflight = !1);
                          });
                        r.push(o);
                      }
                  }
                }),
                (this._lastBlockNumber = t),
                Promise.all(r)
                  .then(() => {
                    this.emit("didPoll", e);
                  })
                  .catch((e) => {
                    this.emit("error", e);
                  });
            } else this.emit("didPoll", e);
          });
        }
        resetEventsBlock(e) {
          (this._lastBlockNumber = e - 1), this.polling && this.poll();
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return $r(this, void 0, void 0, function* () {
            return et.throwError(
              "provider does not support network detection",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "provider.detectNetwork" }
            );
          });
        }
        getNetwork() {
          return $r(this, void 0, void 0, function* () {
            const e = yield this._ready(),
              r = yield this.detectNetwork();
            if (e.chainId !== r.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = r),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit("network", r, e),
                  yield it(0),
                  this._network
                );
              const t = et.makeError(
                "underlying network changed",
                i.Vy.errors.NETWORK_ERROR,
                { event: "changed", network: e, detectedNetwork: r }
              );
              throw (this.emit("error", t), t);
            }
            return e;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (e) => {
                this._setFastBlockNumber(e);
              },
              (e) => {}
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(e) {
          e && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      this._poller || this.poll(), (this._bootstrapPoll = null);
                    }, this.pollingInterval));
                }, 0)))
            : !e &&
              this._poller &&
              (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(e) {
          if ("number" !== typeof e || e <= 0 || parseInt(String(e)) != e)
            throw new Error("invalid polling interval");
          (this._pollingInterval = e),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval)));
        }
        _getFastBlockNumber() {
          const e = ot();
          return (
            e - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = e),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (e) => (
                  (null == this._fastBlockNumber ||
                    e > this._fastBlockNumber) &&
                    (this._fastBlockNumber = e),
                  this._fastBlockNumber
                )
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(e) {
          (null != this._fastBlockNumber && e < this._fastBlockNumber) ||
            ((this._fastQueryDate = ot()),
            (null == this._fastBlockNumber || e > this._fastBlockNumber) &&
              ((this._fastBlockNumber = e),
              (this._fastBlockNumberPromise = Promise.resolve(e))));
        }
        waitForTransaction(e, r, t) {
          return $r(this, void 0, void 0, function* () {
            return this._waitForTransaction(e, null == r ? 1 : r, t || 0, null);
          });
        }
        _waitForTransaction(e, r, t, n) {
          return $r(this, void 0, void 0, function* () {
            const o = yield this.getTransactionReceipt(e);
            return (o ? o.confirmations : 0) >= r
              ? o
              : new Promise((o, s) => {
                  const a = [];
                  let f = !1;
                  const c = function () {
                      return (
                        !!f ||
                        ((f = !0),
                        a.forEach((e) => {
                          e();
                        }),
                        !1)
                      );
                    },
                    u = (e) => {
                      e.confirmations < r || c() || o(e);
                    };
                  if (
                    (this.on(e, u),
                    a.push(() => {
                      this.removeListener(e, u);
                    }),
                    n)
                  ) {
                    let t = n.startBlock,
                      o = null;
                    const u = (a) =>
                      $r(this, void 0, void 0, function* () {
                        f ||
                          (yield it(1e3),
                          this.getTransactionCount(n.from).then(
                            (l) =>
                              $r(this, void 0, void 0, function* () {
                                if (!f) {
                                  if (l <= n.nonce) t = a;
                                  else {
                                    {
                                      const r = yield this.getTransaction(e);
                                      if (r && null != r.blockNumber) return;
                                    }
                                    for (
                                      null == o &&
                                      ((o = t - 3),
                                      o < n.startBlock && (o = n.startBlock));
                                      o <= a;

                                    ) {
                                      if (f) return;
                                      const t =
                                        yield this.getBlockWithTransactions(o);
                                      for (
                                        let o = 0;
                                        o < t.transactions.length;
                                        o++
                                      ) {
                                        const a = t.transactions[o];
                                        if (a.hash === e) return;
                                        if (
                                          a.from === n.from &&
                                          a.nonce === n.nonce
                                        ) {
                                          if (f) return;
                                          const t =
                                            yield this.waitForTransaction(
                                              a.hash,
                                              r
                                            );
                                          if (c()) return;
                                          let o = "replaced";
                                          return (
                                            a.data === n.data &&
                                            a.to === n.to &&
                                            a.value.eq(n.value)
                                              ? (o = "repriced")
                                              : "0x" === a.data &&
                                                a.from === a.to &&
                                                a.value.isZero() &&
                                                (o = "cancelled"),
                                            void s(
                                              et.makeError(
                                                "transaction was replaced",
                                                i.Vy.errors
                                                  .TRANSACTION_REPLACED,
                                                {
                                                  cancelled:
                                                    "replaced" === o ||
                                                    "cancelled" === o,
                                                  reason: o,
                                                  replacement:
                                                    this._wrapTransaction(a),
                                                  hash: e,
                                                  receipt: t,
                                                }
                                              )
                                            )
                                          );
                                        }
                                      }
                                      o++;
                                    }
                                  }
                                  f || this.once("block", u);
                                }
                              }),
                            (e) => {
                              f || this.once("block", u);
                            }
                          ));
                      });
                    if (f) return;
                    this.once("block", u),
                      a.push(() => {
                        this.removeListener("block", u);
                      });
                  }
                  if ("number" === typeof t && t > 0) {
                    const e = setTimeout(() => {
                      c() ||
                        s(
                          et.makeError(
                            "timeout exceeded",
                            i.Vy.errors.TIMEOUT,
                            { timeout: t }
                          )
                        );
                    }, t);
                    e.unref && e.unref(),
                      a.push(() => {
                        clearTimeout(e);
                      });
                  }
                });
          });
        }
        getBlockNumber() {
          return $r(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield this.perform("getGasPrice", {});
            try {
              return n.gH.from(e);
            } catch (r) {
              return et.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getGasPrice", result: e, error: r }
              );
            }
          });
        }
        getBalance(e, r) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield u({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
              }),
              o = yield this.perform("getBalance", t);
            try {
              return n.gH.from(o);
            } catch (s) {
              return et.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getBalance", params: t, result: o, error: s }
              );
            }
          });
        }
        getTransactionCount(e, r) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield u({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
              }),
              o = yield this.perform("getTransactionCount", t);
            try {
              return n.gH.from(o).toNumber();
            } catch (s) {
              return et.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                {
                  method: "getTransactionCount",
                  params: t,
                  result: o,
                  error: s,
                }
              );
            }
          });
        }
        getCode(e, r) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield u({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
              }),
              n = yield this.perform("getCode", t);
            try {
              return (0, o.c$)(n);
            } catch (s) {
              return et.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getCode", params: t, result: n, error: s }
              );
            }
          });
        }
        getStorageAt(e, r, t) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const n = yield u({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
                position: Promise.resolve(r).then((e) => (0, o.Fh)(e)),
              }),
              s = yield this.perform("getStorageAt", n);
            try {
              return (0, o.c$)(s);
            } catch (a) {
              return et.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getStorageAt", params: n, result: s, error: a }
              );
            }
          });
        }
        _wrapTransaction(e, r, t) {
          if (null != r && 32 !== (0, o.cm)(r))
            throw new Error("invalid response - sendTransaction");
          const n = e;
          return (
            null != r &&
              e.hash !== r &&
              et.throwError(
                "Transaction hash mismatch from Provider.sendTransaction.",
                i.Vy.errors.UNKNOWN_ERROR,
                { expectedHash: e.hash, returnedHash: r }
              ),
            (n.wait = (r, n) =>
              $r(this, void 0, void 0, function* () {
                let o;
                null == r && (r = 1),
                  null == n && (n = 0),
                  0 !== r &&
                    null != t &&
                    (o = {
                      data: e.data,
                      from: e.from,
                      nonce: e.nonce,
                      to: e.to,
                      value: e.value,
                      startBlock: t,
                    });
                const s = yield this._waitForTransaction(e.hash, r, n, o);
                return null == s && 0 === r
                  ? null
                  : ((this._emitted["t:" + e.hash] = s.blockNumber),
                    0 === s.status &&
                      et.throwError(
                        "transaction failed",
                        i.Vy.errors.CALL_EXCEPTION,
                        { transactionHash: e.hash, transaction: e, receipt: s }
                      ),
                    s);
              })),
            n
          );
        }
        sendTransaction(e) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield Promise.resolve(e).then((e) => (0, o.c$)(e)),
              t = this.formatter.transaction(e);
            null == t.confirmations && (t.confirmations = 0);
            const n = yield this._getInternalBlockNumber(
              100 + 2 * this.pollingInterval
            );
            try {
              const e = yield this.perform("sendTransaction", {
                signedTransaction: r,
              });
              return this._wrapTransaction(t, e, n);
            } catch (i) {
              throw ((i.transaction = t), (i.transactionHash = t.hash), i);
            }
          });
        }
        _getTransactionRequest(e) {
          return $r(this, void 0, void 0, function* () {
            const r = yield e,
              t = {};
            return (
              ["from", "to"].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    e ? this._getAddress(e) : null
                  ));
              }),
              [
                "gasLimit",
                "gasPrice",
                "maxFeePerGas",
                "maxPriorityFeePerGas",
                "value",
              ].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    e ? n.gH.from(e) : null
                  ));
              }),
              ["type"].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    null != e ? e : null
                  ));
              }),
              r.accessList &&
                (t.accessList = this.formatter.accessList(r.accessList)),
              ["data"].forEach((e) => {
                null != r[e] &&
                  (t[e] = Promise.resolve(r[e]).then((e) =>
                    e ? (0, o.c$)(e) : null
                  ));
              }),
              this.formatter.transactionRequest(yield u(t))
            );
          });
        }
        _getFilter(e) {
          return $r(this, void 0, void 0, function* () {
            e = yield e;
            const r = {};
            return (
              null != e.address && (r.address = this._getAddress(e.address)),
              ["blockHash", "topics"].forEach((t) => {
                null != e[t] && (r[t] = e[t]);
              }),
              ["fromBlock", "toBlock"].forEach((t) => {
                null != e[t] && (r[t] = this._getBlockTag(e[t]));
              }),
              this.formatter.filter(yield u(r))
            );
          });
        }
        _call(e, r, t) {
          return $r(this, void 0, void 0, function* () {
            t >= 10 &&
              et.throwError(
                "CCIP read exceeded maximum redirections",
                i.Vy.errors.SERVER_ERROR,
                { redirects: t, transaction: e }
              );
            const s = e.to,
              a = yield this.perform("call", { transaction: e, blockTag: r });
            if (
              t >= 0 &&
              "latest" === r &&
              null != s &&
              "0x556f1830" === a.substring(0, 10) &&
              (0, o.cm)(a) % 32 === 4
            )
              try {
                const f = (0, o.Ab)(a, 4),
                  c = (0, o.Ab)(f, 0, 32);
                n.gH.from(c).eq(s) ||
                  et.throwError(
                    "CCIP Read sender did not match",
                    i.Vy.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: a,
                    }
                  );
                const u = [],
                  l = n.gH.from((0, o.Ab)(f, 32, 64)).toNumber(),
                  h = n.gH.from((0, o.Ab)(f, l, l + 32)).toNumber(),
                  d = (0, o.Ab)(f, l + 32);
                for (let r = 0; r < h; r++) {
                  const t = dt(d, 32 * r);
                  null == t &&
                    et.throwError(
                      "CCIP Read contained corrupt URL string",
                      i.Vy.errors.CALL_EXCEPTION,
                      {
                        name: "OffchainLookup",
                        signature:
                          "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                        transaction: e,
                        data: a,
                      }
                    ),
                    u.push(t);
                }
                const p = pt(f, 64);
                n.gH.from((0, o.Ab)(f, 100, 128)).isZero() ||
                  et.throwError(
                    "CCIP Read callback selector included junk",
                    i.Vy.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: a,
                    }
                  );
                const g = (0, o.Ab)(f, 96, 100),
                  m = pt(f, 128),
                  y = yield this.ccipReadFetch(e, p, u);
                null == y &&
                  et.throwError(
                    "CCIP Read disabled or provided no URLs",
                    i.Vy.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: a,
                    }
                  );
                const v = { to: s, data: (0, o.qn)([g, vt([y, m])]) };
                return this._call(v, r, t + 1);
              } catch (f) {
                if (f.code === i.Vy.errors.SERVER_ERROR) throw f;
              }
            try {
              return (0, o.c$)(a);
            } catch (f) {
              return et.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                {
                  method: "call",
                  params: { transaction: e, blockTag: r },
                  result: a,
                  error: f,
                }
              );
            }
          });
        }
        call(e, r) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield u({
              transaction: this._getTransactionRequest(e),
              blockTag: this._getBlockTag(r),
              ccipReadEnabled: Promise.resolve(e.ccipReadEnabled),
            });
            return this._call(
              t.transaction,
              t.blockTag,
              t.ccipReadEnabled ? 0 : -1
            );
          });
        }
        estimateGas(e) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield u({ transaction: this._getTransactionRequest(e) }),
              t = yield this.perform("estimateGas", r);
            try {
              return n.gH.from(t);
            } catch (o) {
              return et.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "estimateGas", params: r, result: t, error: o }
              );
            }
          });
        }
        _getAddress(e) {
          return $r(this, void 0, void 0, function* () {
            "string" !== typeof (e = yield e) &&
              et.throwArgumentError("invalid address or ENS name", "name", e);
            const r = yield this.resolveName(e);
            return (
              null == r &&
                et.throwError(
                  "ENS name not configured",
                  i.Vy.errors.UNSUPPORTED_OPERATION,
                  { operation: `resolveName(${JSON.stringify(e)})` }
                ),
              r
            );
          });
        }
        _getBlock(e, r) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork(), (e = yield e);
            let t = -128;
            const n = { includeTransactions: !!r };
            if ((0, o.Lo)(e, 32)) n.blockHash = e;
            else
              try {
                (n.blockTag = yield this._getBlockTag(e)),
                  (0, o.Lo)(n.blockTag) &&
                    (t = parseInt(n.blockTag.substring(2), 16));
              } catch (i) {
                et.throwArgumentError(
                  "invalid block hash or block tag",
                  "blockHashOrBlockTag",
                  e
                );
              }
            return Re(
              () =>
                $r(this, void 0, void 0, function* () {
                  const e = yield this.perform("getBlock", n);
                  if (null == e)
                    return (null != n.blockHash &&
                      null == this._emitted["b:" + n.blockHash]) ||
                      (null != n.blockTag && t > this._emitted.block)
                      ? null
                      : void 0;
                  if (r) {
                    let r = null;
                    for (let n = 0; n < e.transactions.length; n++) {
                      const t = e.transactions[n];
                      if (null == t.blockNumber) t.confirmations = 0;
                      else if (null == t.confirmations) {
                        null == r &&
                          (r = yield this._getInternalBlockNumber(
                            100 + 2 * this.pollingInterval
                          ));
                        let e = r - t.blockNumber + 1;
                        e <= 0 && (e = 1), (t.confirmations = e);
                      }
                    }
                    const t = this.formatter.blockWithTransactions(e);
                    return (
                      (t.transactions = t.transactions.map((e) =>
                        this._wrapTransaction(e)
                      )),
                      t
                    );
                  }
                  return this.formatter.block(e);
                }),
              { oncePoll: this }
            );
          });
        }
        getBlock(e) {
          return this._getBlock(e, !1);
        }
        getBlockWithTransactions(e) {
          return this._getBlock(e, !0);
        }
        getTransaction(e) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork(), (e = yield e);
            const r = { transactionHash: this.formatter.hash(e, !0) };
            return Re(
              () =>
                $r(this, void 0, void 0, function* () {
                  const t = yield this.perform("getTransaction", r);
                  if (null == t)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  const n = this.formatter.transactionResponse(t);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let e =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    e <= 0 && (e = 1), (n.confirmations = e);
                  }
                  return this._wrapTransaction(n);
                }),
              { oncePoll: this }
            );
          });
        }
        getTransactionReceipt(e) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork(), (e = yield e);
            const r = { transactionHash: this.formatter.hash(e, !0) };
            return Re(
              () =>
                $r(this, void 0, void 0, function* () {
                  const t = yield this.perform("getTransactionReceipt", r);
                  if (null == t)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  if (null == t.blockHash) return;
                  const n = this.formatter.receipt(t);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let e =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    e <= 0 && (e = 1), (n.confirmations = e);
                  }
                  return n;
                }),
              { oncePoll: this }
            );
          });
        }
        getLogs(e) {
          return $r(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield u({ filter: this._getFilter(e) }),
              t = yield this.perform("getLogs", r);
            return (
              t.forEach((e) => {
                null == e.removed && (e.removed = !1);
              }),
              Jr.arrayOf(this.formatter.filterLog.bind(this.formatter))(t)
            );
          });
        }
        getEtherPrice() {
          return $r(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform("getEtherPrice", {});
          });
        }
        _getBlockTag(e) {
          return $r(this, void 0, void 0, function* () {
            if ("number" === typeof (e = yield e) && e < 0) {
              e % 1 && et.throwArgumentError("invalid BlockTag", "blockTag", e);
              let r = yield this._getInternalBlockNumber(
                100 + 2 * this.pollingInterval
              );
              return (r += e), r < 0 && (r = 0), this.formatter.blockTag(r);
            }
            return this.formatter.blockTag(e);
          });
        }
        getResolver(e) {
          return $r(this, void 0, void 0, function* () {
            let r = e;
            for (;;) {
              if ("" === r || "." === r) return null;
              if ("eth" !== e && "eth" === r) return null;
              const t = yield this._getResolver(r, "getResolver");
              if (null != t) {
                const n = new Et(this, t, e);
                return r === e || (yield n.supportsWildcard()) ? n : null;
              }
              r = r.split(".").slice(1).join(".");
            }
          });
        }
        _getResolver(e, r) {
          return $r(this, void 0, void 0, function* () {
            null == r && (r = "ENS");
            const t = yield this.getNetwork();
            t.ensAddress ||
              et.throwError(
                "network does not support ENS",
                i.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: r, network: t.name }
              );
            try {
              const r = yield this.call({
                to: t.ensAddress,
                data: "0x0178b8bf" + pe(e).substring(2),
              });
              return this.formatter.callAddress(r);
            } catch (n) {}
            return null;
          });
        }
        resolveName(e) {
          return $r(this, void 0, void 0, function* () {
            e = yield e;
            try {
              return Promise.resolve(this.formatter.address(e));
            } catch (t) {
              if ((0, o.Lo)(e)) throw t;
            }
            "string" !== typeof e &&
              et.throwArgumentError("invalid ENS name", "name", e);
            const r = yield this.getResolver(e);
            return r ? yield r.getAddress() : null;
          });
        }
        lookupAddress(e) {
          return $r(this, void 0, void 0, function* () {
            e = yield e;
            const r =
                (e = this.formatter.address(e)).substring(2).toLowerCase() +
                ".addr.reverse",
              t = yield this._getResolver(r, "lookupAddress");
            if (null == t) return null;
            const n = dt(
              yield this.call({
                to: t,
                data: "0x691f3431" + pe(r).substring(2),
              }),
              0
            );
            return (yield this.resolveName(n)) != e ? null : n;
          });
        }
        getAvatar(e) {
          return $r(this, void 0, void 0, function* () {
            let r = null;
            if ((0, o.Lo)(e)) {
              const t =
                  this.formatter.address(e).substring(2).toLowerCase() +
                  ".addr.reverse",
                o = yield this._getResolver(t, "getAvatar");
              if (!o) return null;
              r = new Et(this, o, t);
              try {
                const e = yield r.getAvatar();
                if (e) return e.url;
              } catch (n) {
                if (n.code !== i.Vy.errors.CALL_EXCEPTION) throw n;
              }
              try {
                const e = dt(
                  yield this.call({
                    to: o,
                    data: "0x691f3431" + pe(t).substring(2),
                  }),
                  0
                );
                r = yield this.getResolver(e);
              } catch (n) {
                if (n.code !== i.Vy.errors.CALL_EXCEPTION) throw n;
                return null;
              }
            } else if (((r = yield this.getResolver(e)), !r)) return null;
            const t = yield r.getAvatar();
            return null == t ? null : t.url;
          });
        }
        perform(e, r) {
          return et.throwError(
            e + " not implemented",
            i.Vy.errors.NOT_IMPLEMENTED,
            { operation: e }
          );
        }
        _startEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _stopEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _addEventListener(e, r, t) {
          const n = new at(nt(e), r, t);
          return this._events.push(n), this._startEvent(n), this;
        }
        on(e, r) {
          return this._addEventListener(e, r, !1);
        }
        once(e, r) {
          return this._addEventListener(e, r, !0);
        }
        emit(e) {
          for (
            var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1;
            n < r;
            n++
          )
            t[n - 1] = arguments[n];
          let o = !1,
            i = [],
            s = nt(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== s ||
                (setTimeout(() => {
                  e.listener.apply(this, t);
                }, 0),
                (o = !0),
                !e.once || (i.push(e), !1))
            )),
            i.forEach((e) => {
              this._stopEvent(e);
            }),
            o
          );
        }
        listenerCount(e) {
          if (!e) return this._events.length;
          let r = nt(e);
          return this._events.filter((e) => e.tag === r).length;
        }
        listeners(e) {
          if (null == e) return this._events.map((e) => e.listener);
          let r = nt(e);
          return this._events.filter((e) => e.tag === r).map((e) => e.listener);
        }
        off(e, r) {
          if (null == r) return this.removeAllListeners(e);
          const t = [];
          let n = !1,
            o = nt(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== o ||
                e.listener != r ||
                !!n ||
                ((n = !0), t.push(e), !1)
            )),
            t.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
        removeAllListeners(e) {
          let r = [];
          if (null == e) (r = this._events), (this._events = []);
          else {
            const t = nt(e);
            this._events = this._events.filter(
              (e) => e.tag !== t || (r.push(e), !1)
            );
          }
          return (
            r.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
      }
      var Nt = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const It = new i.Vy("abstract-signer/5.8.0"),
        Rt = [
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
        _t = [
          i.Vy.errors.INSUFFICIENT_FUNDS,
          i.Vy.errors.NONCE_EXPIRED,
          i.Vy.errors.REPLACEMENT_UNDERPRICED,
        ];
      class Pt {
        constructor() {
          It.checkAbstract(new.target, Pt), f(this, "_isSigner", !0);
        }
        getBalance(e) {
          return Nt(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), e)
            );
          });
        }
        getTransactionCount(e) {
          return Nt(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), e)
            );
          });
        }
        estimateGas(e) {
          return Nt(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const r = yield u(this.checkTransaction(e));
            return yield this.provider.estimateGas(r);
          });
        }
        call(e, r) {
          return Nt(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const t = yield u(this.checkTransaction(e));
            return yield this.provider.call(t, r);
          });
        }
        sendTransaction(e) {
          return Nt(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const r = yield this.populateTransaction(e),
              t = yield this.signTransaction(r);
            return yield this.provider.sendTransaction(t);
          });
        }
        getChainId() {
          return Nt(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            return (yield this.provider.getNetwork()).chainId;
          });
        }
        getGasPrice() {
          return Nt(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return Nt(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(e) {
          return Nt(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(e)
            );
          });
        }
        checkTransaction(e) {
          for (const t in e)
            -1 === Rt.indexOf(t) &&
              It.throwArgumentError(
                "invalid transaction key: " + t,
                "transaction",
                e
              );
          const r = l(e);
          return (
            null == r.from
              ? (r.from = this.getAddress())
              : (r.from = Promise.all([
                  Promise.resolve(r.from),
                  this.getAddress(),
                ]).then(
                  (r) => (
                    r[0].toLowerCase() !== r[1].toLowerCase() &&
                      It.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        e
                      ),
                    r[0]
                  )
                )),
            r
          );
        }
        populateTransaction(e) {
          return Nt(this, void 0, void 0, function* () {
            const r = yield u(this.checkTransaction(e));
            null != r.to &&
              ((r.to = Promise.resolve(r.to).then((e) =>
                Nt(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  const r = yield this.resolveName(e);
                  return (
                    null == r &&
                      It.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e
                      ),
                    r
                  );
                })
              )),
              r.to.catch((e) => {}));
            const t = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
            if (
              (null == r.gasPrice || (2 !== r.type && !t)
                ? (0 !== r.type && 1 !== r.type) ||
                  !t ||
                  It.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    e
                  )
                : It.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    e
                  ),
              (2 !== r.type && null != r.type) ||
                null == r.maxFeePerGas ||
                null == r.maxPriorityFeePerGas)
            )
              if (0 === r.type || 1 === r.type)
                null == r.gasPrice && (r.gasPrice = this.getGasPrice());
              else {
                const e = yield this.getFeeData();
                if (null == r.type)
                  if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                    if (((r.type = 2), null != r.gasPrice)) {
                      const e = r.gasPrice;
                      delete r.gasPrice,
                        (r.maxFeePerGas = e),
                        (r.maxPriorityFeePerGas = e);
                    } else
                      null == r.maxFeePerGas &&
                        (r.maxFeePerGas = e.maxFeePerGas),
                        null == r.maxPriorityFeePerGas &&
                          (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
                  else
                    null != e.gasPrice
                      ? (t &&
                          It.throwError(
                            "network does not support EIP-1559",
                            i.Vy.errors.UNSUPPORTED_OPERATION,
                            { operation: "populateTransaction" }
                          ),
                        null == r.gasPrice && (r.gasPrice = e.gasPrice),
                        (r.type = 0))
                      : It.throwError(
                          "failed to get consistent fee data",
                          i.Vy.errors.UNSUPPORTED_OPERATION,
                          { operation: "signer.getFeeData" }
                        );
                else
                  2 === r.type &&
                    (null == r.maxFeePerGas &&
                      (r.maxFeePerGas = e.maxFeePerGas),
                    null == r.maxPriorityFeePerGas &&
                      (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
              }
            else r.type = 2;
            return (
              null == r.nonce &&
                (r.nonce = this.getTransactionCount("pending")),
              null == r.gasLimit &&
                (r.gasLimit = this.estimateGas(r).catch((e) => {
                  if (_t.indexOf(e.code) >= 0) throw e;
                  return It.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: e, tx: r }
                  );
                })),
              null == r.chainId
                ? (r.chainId = this.getChainId())
                : (r.chainId = Promise.all([
                    Promise.resolve(r.chainId),
                    this.getChainId(),
                  ]).then(
                    (r) => (
                      0 !== r[1] &&
                        r[0] !== r[1] &&
                        It.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          e
                        ),
                      r[0]
                    )
                  )),
              yield u(r)
            );
          });
        }
        _checkProvider(e) {
          this.provider ||
            It.throwError(
              "missing provider",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: e || "_checkProvider" }
            );
        }
        static isSigner(e) {
          return !(!e || !e._isSigner);
        }
      }
      function St(e) {
        return j(B(e));
      }
      var kt = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const Tt = new i.Vy(z),
        Ot = new Uint8Array(32);
      Ot.fill(0);
      const Ct = n.gH.from(-1),
        xt = n.gH.from(0),
        Ut = n.gH.from(1),
        Mt = n.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      const Ft = (0, o.bj)(Ut.toHexString(), 32),
        Lt = (0, o.bj)(xt.toHexString(), 32),
        Dt = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        Bt = ["name", "version", "chainId", "verifyingContract", "salt"];
      function Gt(e) {
        return function (r) {
          return (
            "string" !== typeof r &&
              Tt.throwArgumentError(
                `invalid domain value for ${JSON.stringify(e)}`,
                `domain.${e}`,
                r
              ),
            r
          );
        };
      }
      const qt = {
        name: Gt("name"),
        version: Gt("version"),
        chainId: function (e) {
          try {
            return n.gH.from(e).toString();
          } catch (r) {}
          return Tt.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            e
          );
        },
        verifyingContract: function (e) {
          try {
            return je(e).toLowerCase();
          } catch (r) {}
          return Tt.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            e
          );
        },
        salt: function (e) {
          try {
            const r = (0, o.k9)(e);
            if (32 !== r.length) throw new Error("bad length");
            return (0, o.c$)(r);
          } catch (r) {}
          return Tt.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            e
          );
        },
      };
      function Vt(e) {
        {
          const r = e.match(/^(u?)int(\d*)$/);
          if (r) {
            const t = "" === r[1],
              i = parseInt(r[2] || "256");
            (i % 8 !== 0 || i > 256 || (r[2] && r[2] !== String(i))) &&
              Tt.throwArgumentError("invalid numeric width", "type", e);
            const s = Mt.mask(t ? i - 1 : i),
              a = t ? s.add(Ut).mul(Ct) : xt;
            return function (r) {
              const t = n.gH.from(r);
              return (
                (t.lt(a) || t.gt(s)) &&
                  Tt.throwArgumentError(
                    `value out-of-bounds for ${e}`,
                    "value",
                    r
                  ),
                (0, o.bj)(t.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          const r = e.match(/^bytes(\d+)$/);
          if (r) {
            const t = parseInt(r[1]);
            return (
              (0 === t || t > 32 || r[1] !== String(t)) &&
                Tt.throwArgumentError("invalid bytes width", "type", e),
              function (r) {
                return (
                  (0, o.k9)(r).length !== t &&
                    Tt.throwArgumentError(
                      `invalid length for ${e}`,
                      "value",
                      r
                    ),
                  (function (e) {
                    const r = (0, o.k9)(e),
                      t = r.length % 32;
                    return t ? (0, o.qn)([r, Ot.slice(t)]) : (0, o.c$)(r);
                  })(r)
                );
              }
            );
          }
        }
        switch (e) {
          case "address":
            return function (e) {
              return (0, o.bj)(je(e), 32);
            };
          case "bool":
            return function (e) {
              return e ? Ft : Lt;
            };
          case "bytes":
            return function (e) {
              return j(e);
            };
          case "string":
            return function (e) {
              return St(e);
            };
        }
        return null;
      }
      function jt(e, r) {
        return `${e}(${r
          .map((e) => {
            let { name: r, type: t } = e;
            return t + " " + r;
          })
          .join(",")})`;
      }
      class zt {
        constructor(e) {
          f(this, "types", Object.freeze(g(e))),
            f(this, "_encoderCache", {}),
            f(this, "_types", {});
          const r = {},
            t = {},
            n = {};
          Object.keys(e).forEach((e) => {
            (r[e] = {}), (t[e] = []), (n[e] = {});
          });
          for (const i in e) {
            const n = {};
            e[i].forEach((o) => {
              n[o.name] &&
                Tt.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(
                    o.name
                  )} in ${JSON.stringify(i)}`,
                  "types",
                  e
                ),
                (n[o.name] = !0);
              const s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === i &&
                Tt.throwArgumentError(
                  `circular type reference to ${JSON.stringify(s)}`,
                  "types",
                  e
                );
              Vt(s) ||
                (t[s] ||
                  Tt.throwArgumentError(
                    `unknown type ${JSON.stringify(s)}`,
                    "types",
                    e
                  ),
                t[s].push(i),
                (r[i][s] = !0));
            });
          }
          const o = Object.keys(t).filter((e) => 0 === t[e].length);
          0 === o.length
            ? Tt.throwArgumentError("missing primary type", "types", e)
            : o.length > 1 &&
              Tt.throwArgumentError(
                `ambiguous primary types or unused types: ${o
                  .map((e) => JSON.stringify(e))
                  .join(", ")}`,
                "types",
                e
              ),
            f(this, "primaryType", o[0]),
            (function o(i, s) {
              s[i] &&
                Tt.throwArgumentError(
                  `circular type reference to ${JSON.stringify(i)}`,
                  "types",
                  e
                ),
                (s[i] = !0),
                Object.keys(r[i]).forEach((e) => {
                  t[e] &&
                    (o(e, s),
                    Object.keys(s).forEach((r) => {
                      n[r][e] = !0;
                    }));
                }),
                delete s[i];
            })(this.primaryType, {});
          for (const i in n) {
            const r = Object.keys(n[i]);
            r.sort(),
              (this._types[i] =
                jt(i, e[i]) + r.map((r) => jt(r, e[r])).join(""));
          }
        }
        getEncoder(e) {
          let r = this._encoderCache[e];
          return r || (r = this._encoderCache[e] = this._getEncoder(e)), r;
        }
        _getEncoder(e) {
          {
            const r = Vt(e);
            if (r) return r;
          }
          const r = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (r) {
            const e = r[1],
              t = this.getEncoder(e),
              n = parseInt(r[3]);
            return (r) => {
              n >= 0 &&
                r.length !== n &&
                Tt.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  r
                );
              let i = r.map(t);
              return this._types[e] && (i = i.map(j)), j((0, o.qn)(i));
            };
          }
          const t = this.types[e];
          if (t) {
            const r = St(this._types[e]);
            return (e) => {
              const n = t.map((r) => {
                let { name: t, type: n } = r;
                const o = this.getEncoder(n)(e[t]);
                return this._types[n] ? j(o) : o;
              });
              return n.unshift(r), (0, o.qn)(n);
            };
          }
          return Tt.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        encodeType(e) {
          const r = this._types[e];
          return (
            r ||
              Tt.throwArgumentError(
                `unknown type: ${JSON.stringify(e)}`,
                "name",
                e
              ),
            r
          );
        }
        encodeData(e, r) {
          return this.getEncoder(e)(r);
        }
        hashStruct(e, r) {
          return j(this.encodeData(e, r));
        }
        encode(e) {
          return this.encodeData(this.primaryType, e);
        }
        hash(e) {
          return this.hashStruct(this.primaryType, e);
        }
        _visit(e, r, t) {
          if (Vt(e)) return t(e, r);
          const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const e = n[1],
              o = parseInt(n[3]);
            return (
              o >= 0 &&
                r.length !== o &&
                Tt.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  r
                ),
              r.map((r) => this._visit(e, r, t))
            );
          }
          const o = this.types[e];
          return o
            ? o.reduce((e, n) => {
                let { name: o, type: i } = n;
                return (e[o] = this._visit(i, r[o], t)), e;
              }, {})
            : Tt.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        visit(e, r) {
          return this._visit(this.primaryType, e, r);
        }
        static from(e) {
          return new zt(e);
        }
        static getPrimaryType(e) {
          return zt.from(e).primaryType;
        }
        static hashStruct(e, r, t) {
          return zt.from(r).hashStruct(e, t);
        }
        static hashDomain(e) {
          const r = [];
          for (const t in e) {
            const n = Dt[t];
            n ||
              Tt.throwArgumentError(
                `invalid typed-data domain key: ${JSON.stringify(t)}`,
                "domain",
                e
              ),
              r.push({ name: t, type: n });
          }
          return (
            r.sort((e, r) => Bt.indexOf(e.name) - Bt.indexOf(r.name)),
            zt.hashStruct("EIP712Domain", { EIP712Domain: r }, e)
          );
        }
        static encode(e, r, t) {
          return (0, o.qn)(["0x1901", zt.hashDomain(e), zt.from(r).hash(t)]);
        }
        static hash(e, r, t) {
          return j(zt.encode(e, r, t));
        }
        static resolveNames(e, r, t, n) {
          return kt(this, void 0, void 0, function* () {
            e = l(e);
            const i = {};
            e.verifyingContract &&
              !(0, o.Lo)(e.verifyingContract, 20) &&
              (i[e.verifyingContract] = "0x");
            const s = zt.from(r);
            s.visit(
              t,
              (e, r) => (
                "address" !== e || (0, o.Lo)(r, 20) || (i[r] = "0x"), r
              )
            );
            for (const e in i) i[e] = yield n(e);
            return (
              e.verifyingContract &&
                i[e.verifyingContract] &&
                (e.verifyingContract = i[e.verifyingContract]),
              (t = s.visit(t, (e, r) => ("address" === e && i[r] ? i[r] : r))),
              { domain: e, value: t }
            );
          });
        }
        static getPayload(e, r, t) {
          zt.hashDomain(e);
          const i = {},
            s = [];
          Bt.forEach((r) => {
            const t = e[r];
            null != t && ((i[r] = qt[r](t)), s.push({ name: r, type: Dt[r] }));
          });
          const a = zt.from(r),
            f = l(r);
          return (
            f.EIP712Domain
              ? Tt.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  r
                )
              : (f.EIP712Domain = s),
            a.encode(t),
            {
              types: f,
              domain: i,
              primaryType: a.primaryType,
              message: a.visit(t, (e, r) => {
                if (e.match(/^bytes(\d*)/)) return (0, o.c$)((0, o.k9)(r));
                if (e.match(/^u?int/)) return n.gH.from(r).toString();
                switch (e) {
                  case "address":
                    return r.toLowerCase();
                  case "bool":
                    return !!r;
                  case "string":
                    return (
                      "string" !== typeof r &&
                        Tt.throwArgumentError("invalid string", "value", r),
                      r
                    );
                }
                return Tt.throwArgumentError("unsupported type", "type", e);
              }),
            }
          );
        }
      }
      var Kt = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const Wt = new i.Vy(Se),
        Ht = ["call", "estimateGas"];
      function Jt(e, r) {
        if (null == e) return null;
        if ("string" === typeof e.message && e.message.match("reverted")) {
          const t = (0, o.Lo)(e.data) ? e.data : null;
          if (!r || t) return { message: e.message, data: t };
        }
        if ("object" === typeof e) {
          for (const t in e) {
            const n = Jt(e[t], r);
            if (n) return n;
          }
          return null;
        }
        if ("string" === typeof e)
          try {
            return Jt(JSON.parse(e), r);
          } catch (t) {}
        return null;
      }
      function Xt(e, r, t) {
        const n = t.transaction || t.signedTransaction;
        if ("call" === e) {
          const e = Jt(r, !0);
          if (e) return e.data;
          Wt.throwError(
            "missing revert data in call exception; Transaction reverted without a reason string",
            i.Vy.errors.CALL_EXCEPTION,
            { data: "0x", transaction: n, error: r }
          );
        }
        if ("estimateGas" === e) {
          let t = Jt(r.body, !1);
          null == t && (t = Jt(r, !1)),
            t &&
              Wt.throwError(
                "cannot estimate gas; transaction may fail or may require manual gas limit",
                i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: t.message, method: e, transaction: n, error: r }
              );
        }
        let o = r.message;
        throw (
          (r.code === i.Vy.errors.SERVER_ERROR &&
          r.error &&
          "string" === typeof r.error.message
            ? (o = r.error.message)
            : "string" === typeof r.body
            ? (o = r.body)
            : "string" === typeof r.responseText && (o = r.responseText),
          (o = (o || "").toLowerCase()),
          o.match(/insufficient funds|base fee exceeds gas limit/i) &&
            Wt.throwError(
              "insufficient funds for intrinsic transaction cost",
              i.Vy.errors.INSUFFICIENT_FUNDS,
              { error: r, method: e, transaction: n }
            ),
          o.match(/nonce (is )?too low/i) &&
            Wt.throwError(
              "nonce has already been used",
              i.Vy.errors.NONCE_EXPIRED,
              { error: r, method: e, transaction: n }
            ),
          o.match(
            /replacement transaction underpriced|transaction gas price.*too low/i
          ) &&
            Wt.throwError(
              "replacement fee too low",
              i.Vy.errors.REPLACEMENT_UNDERPRICED,
              { error: r, method: e, transaction: n }
            ),
          o.match(/only replay-protected/i) &&
            Wt.throwError(
              "legacy pre-eip-155 transactions not supported",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { error: r, method: e, transaction: n }
            ),
          Ht.indexOf(e) >= 0 &&
            o.match(
              /gas required exceeds allowance|always failing transaction|execution reverted/
            ) &&
            Wt.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: r, method: e, transaction: n }
            ),
          r)
        );
      }
      function Qt(e) {
        return new Promise(function (r) {
          setTimeout(r, e);
        });
      }
      function Yt(e) {
        if (e.error) {
          const r = new Error(e.error.message);
          throw ((r.code = e.error.code), (r.data = e.error.data), r);
        }
        return e.result;
      }
      function Zt(e) {
        return e ? e.toLowerCase() : e;
      }
      const $t = {};
      class en extends Pt {
        constructor(e, r, t) {
          if ((super(), e !== $t))
            throw new Error(
              "do not call the JsonRpcSigner constructor directly; use provider.getSigner"
            );
          f(this, "provider", r),
            null == t && (t = 0),
            "string" === typeof t
              ? (f(this, "_address", this.provider.formatter.address(t)),
                f(this, "_index", null))
              : "number" === typeof t
              ? (f(this, "_index", t), f(this, "_address", null))
              : Wt.throwArgumentError(
                  "invalid address or index",
                  "addressOrIndex",
                  t
                );
        }
        connect(e) {
          return Wt.throwError(
            "cannot alter JSON-RPC Signer connection",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "connect" }
          );
        }
        connectUnchecked() {
          return new rn($t, this.provider, this._address || this._index);
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send("eth_accounts", [])
                .then(
                  (e) => (
                    e.length <= this._index &&
                      Wt.throwError(
                        "unknown account #" + this._index,
                        i.Vy.errors.UNSUPPORTED_OPERATION,
                        { operation: "getAddress" }
                      ),
                    this.provider.formatter.address(e[this._index])
                  )
                );
        }
        sendUncheckedTransaction(e) {
          e = l(e);
          const r = this.getAddress().then(
            (e) => (e && (e = e.toLowerCase()), e)
          );
          if (null == e.gasLimit) {
            const t = l(e);
            (t.from = r), (e.gasLimit = this.provider.estimateGas(t));
          }
          return (
            null != e.to &&
              (e.to = Promise.resolve(e.to).then((e) =>
                Kt(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  const r = yield this.provider.resolveName(e);
                  return (
                    null == r &&
                      Wt.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e
                      ),
                    r
                  );
                })
              )),
            u({ tx: u(e), sender: r }).then((r) => {
              let { tx: t, sender: n } = r;
              null != t.from
                ? t.from.toLowerCase() !== n &&
                  Wt.throwArgumentError(
                    "from address mismatch",
                    "transaction",
                    e
                  )
                : (t.from = n);
              const o = this.provider.constructor.hexlifyTransaction(t, {
                from: !0,
              });
              return this.provider.send("eth_sendTransaction", [o]).then(
                (e) => e,
                (e) => Xt("sendTransaction", e, o)
              );
            })
          );
        }
        signTransaction(e) {
          return Wt.throwError(
            "signing transactions is unsupported",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "signTransaction" }
          );
        }
        sendTransaction(e) {
          return Kt(this, void 0, void 0, function* () {
            const r = yield this.provider._getInternalBlockNumber(
                100 + 2 * this.provider.pollingInterval
              ),
              t = yield this.sendUncheckedTransaction(e);
            try {
              return yield Re(
                () =>
                  Kt(this, void 0, void 0, function* () {
                    const e = yield this.provider.getTransaction(t);
                    if (null !== e)
                      return this.provider._wrapTransaction(e, t, r);
                  }),
                { oncePoll: this.provider }
              );
            } catch (n) {
              throw ((n.transactionHash = t), n);
            }
          });
        }
        signMessage(e) {
          return Kt(this, void 0, void 0, function* () {
            const r = "string" === typeof e ? B(e) : e,
              t = yield this.getAddress();
            return yield this.provider.send("personal_sign", [
              (0, o.c$)(r),
              t.toLowerCase(),
            ]);
          });
        }
        _legacySignMessage(e) {
          return Kt(this, void 0, void 0, function* () {
            const r = "string" === typeof e ? B(e) : e,
              t = yield this.getAddress();
            return yield this.provider.send("eth_sign", [
              t.toLowerCase(),
              (0, o.c$)(r),
            ]);
          });
        }
        _signTypedData(e, r, t) {
          return Kt(this, void 0, void 0, function* () {
            const n = yield zt.resolveNames(e, r, t, (e) =>
                this.provider.resolveName(e)
              ),
              o = yield this.getAddress();
            return yield this.provider.send("eth_signTypedData_v4", [
              o.toLowerCase(),
              JSON.stringify(zt.getPayload(n.domain, r, n.value)),
            ]);
          });
        }
        unlock(e) {
          return Kt(this, void 0, void 0, function* () {
            const r = this.provider,
              t = yield this.getAddress();
            return r.send("personal_unlockAccount", [t.toLowerCase(), e, null]);
          });
        }
      }
      class rn extends en {
        sendTransaction(e) {
          return this.sendUncheckedTransaction(e).then((e) => ({
            hash: e,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (r) => this.provider.waitForTransaction(e, r),
          }));
        }
      }
      const tn = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class nn extends wt {
        constructor(e, r) {
          let t = r;
          null == t &&
            (t = new Promise((e, r) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (r) => {
                    e(r);
                  },
                  (e) => {
                    r(e);
                  }
                );
              }, 0);
            })),
            super(t),
            e || (e = c(this.constructor, "defaultUrl")()),
            f(
              this,
              "connection",
              "string" === typeof e
                ? Object.freeze({ url: e })
                : Object.freeze(l(e))
            ),
            (this._nextId = 42);
        }
        get _cache() {
          return (
            null == this._eventLoopCache && (this._eventLoopCache = {}),
            this._eventLoopCache
          );
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return (
            this._cache.detectNetwork ||
              ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache.detectNetwork = null;
              }, 0)),
            this._cache.detectNetwork
          );
        }
        _uncachedDetectNetwork() {
          return Kt(this, void 0, void 0, function* () {
            yield Qt(0);
            let e = null;
            try {
              e = yield this.send("eth_chainId", []);
            } catch (r) {
              try {
                e = yield this.send("net_version", []);
              } catch (r) {}
            }
            if (null != e) {
              const t = c(this.constructor, "getNetwork");
              try {
                return t(n.gH.from(e).toNumber());
              } catch (r) {
                return Wt.throwError(
                  "could not detect network",
                  i.Vy.errors.NETWORK_ERROR,
                  { chainId: e, event: "invalidNetwork", serverError: r }
                );
              }
            }
            return Wt.throwError(
              "could not detect network",
              i.Vy.errors.NETWORK_ERROR,
              { event: "noNetwork" }
            );
          });
        }
        getSigner(e) {
          return new en($t, this, e);
        }
        getUncheckedSigner(e) {
          return this.getSigner(e).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((e) =>
            e.map((e) => this.formatter.address(e))
          );
        }
        send(e, r) {
          const t = {
            method: e,
            params: r,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          this.emit("debug", {
            action: "request",
            request: g(t),
            provider: this,
          });
          const n = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
          if (n && this._cache[e]) return this._cache[e];
          const o = Ie(this.connection, JSON.stringify(t), Yt).then(
            (e) => (
              this.emit("debug", {
                action: "response",
                request: t,
                response: e,
                provider: this,
              }),
              e
            ),
            (e) => {
              throw (
                (this.emit("debug", {
                  action: "response",
                  error: e,
                  request: t,
                  provider: this,
                }),
                e)
              );
            }
          );
          return (
            n &&
              ((this._cache[e] = o),
              setTimeout(() => {
                this._cache[e] = null;
              }, 0)),
            o
          );
        }
        prepareRequest(e, r) {
          switch (e) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [Zt(r.address), r.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [Zt(r.address), r.blockTag]];
            case "getCode":
              return ["eth_getCode", [Zt(r.address), r.blockTag]];
            case "getStorageAt":
              return [
                "eth_getStorageAt",
                [Zt(r.address), (0, o.bj)(r.position, 32), r.blockTag],
              ];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [r.signedTransaction]];
            case "getBlock":
              return r.blockTag
                ? [
                    "eth_getBlockByNumber",
                    [r.blockTag, !!r.includeTransactions],
                  ]
                : r.blockHash
                ? ["eth_getBlockByHash", [r.blockHash, !!r.includeTransactions]]
                : null;
            case "getTransaction":
              return ["eth_getTransactionByHash", [r.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [r.transactionHash]];
            case "call":
              return [
                "eth_call",
                [
                  c(this.constructor, "hexlifyTransaction")(r.transaction, {
                    from: !0,
                  }),
                  r.blockTag,
                ],
              ];
            case "estimateGas":
              return [
                "eth_estimateGas",
                [
                  c(this.constructor, "hexlifyTransaction")(r.transaction, {
                    from: !0,
                  }),
                ],
              ];
            case "getLogs":
              return (
                r.filter &&
                  null != r.filter.address &&
                  (r.filter.address = Zt(r.filter.address)),
                ["eth_getLogs", [r.filter]]
              );
          }
          return null;
        }
        perform(e, r) {
          return Kt(this, void 0, void 0, function* () {
            if ("call" === e || "estimateGas" === e) {
              const e = r.transaction;
              if (
                e &&
                null != e.type &&
                n.gH.from(e.type).isZero() &&
                null == e.maxFeePerGas &&
                null == e.maxPriorityFeePerGas
              ) {
                const t = yield this.getFeeData();
                null == t.maxFeePerGas &&
                  null == t.maxPriorityFeePerGas &&
                  (((r = l(r)).transaction = l(e)), delete r.transaction.type);
              }
            }
            const t = this.prepareRequest(e, r);
            null == t &&
              Wt.throwError(
                e + " not implemented",
                i.Vy.errors.NOT_IMPLEMENTED,
                { operation: e }
              );
            try {
              return yield this.send(t[0], t[1]);
            } catch (o) {
              return Xt(e, o, r);
            }
          });
        }
        _startEvent(e) {
          "pending" === e.tag && this._startPending(), super._startEvent(e);
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          const e = this,
            r = this.send("eth_newPendingTransactionFilter", []);
          (this._pendingFilter = r),
            r
              .then(function (t) {
                return (
                  (function n() {
                    e.send("eth_getFilterChanges", [t])
                      .then(function (t) {
                        if (e._pendingFilter != r) return null;
                        let n = Promise.resolve();
                        return (
                          t.forEach(function (r) {
                            (e._emitted["t:" + r.toLowerCase()] = "pending"),
                              (n = n.then(function () {
                                return e.getTransaction(r).then(function (r) {
                                  return e.emit("pending", r), null;
                                });
                              }));
                          }),
                          n.then(function () {
                            return Qt(1e3);
                          })
                        );
                      })
                      .then(function () {
                        if (e._pendingFilter == r)
                          return (
                            setTimeout(function () {
                              n();
                            }, 0),
                            null
                          );
                        e.send("eth_uninstallFilter", [t]);
                      })
                      .catch((e) => {});
                  })(),
                  t
                );
              })
              .catch((e) => {});
        }
        _stopEvent(e) {
          "pending" === e.tag &&
            0 === this.listenerCount("pending") &&
            (this._pendingFilter = null),
            super._stopEvent(e);
        }
        static hexlifyTransaction(e, r) {
          const t = l(tn);
          if (r) for (const n in r) r[n] && (t[n] = !0);
          var i, s;
          (s = t),
            ((i = e) && "object" === typeof i) ||
              a.throwArgumentError("invalid object", "object", i),
            Object.keys(i).forEach((e) => {
              s[e] ||
                a.throwArgumentError(
                  "invalid object key - " + e,
                  "transaction:" + e,
                  i
                );
            });
          const f = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach(function (r) {
              if (null == e[r]) return;
              const t = (0, o.Fh)(n.gH.from(e[r]));
              "gasLimit" === r && (r = "gas"), (f[r] = t);
            }),
            ["from", "to", "data"].forEach(function (r) {
              null != e[r] && (f[r] = (0, o.c$)(e[r]));
            }),
            e.accessList && (f.accessList = qr(e.accessList)),
            f
          );
        }
      }
      let on = null;
      try {
        if (((on = WebSocket), null == on)) throw new Error("inject please");
      } catch (ho) {
        const e = new i.Vy(Se);
        on = function () {
          e.throwError(
            "WebSockets not supported in this environment",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "new WebSocket()" }
          );
        };
      }
      var sn = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const an = new i.Vy(Se);
      let fn = 1;
      class cn extends nn {
        constructor(e, r) {
          "any" === r &&
            an.throwError(
              "WebSocketProvider does not support 'any' network yet",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "network:any" }
            ),
            super("string" === typeof e ? e : "_websocket", r),
            (this._pollingInterval = -1),
            (this._wsReady = !1),
            f(
              this,
              "_websocket",
              "string" === typeof e ? new on(this.connection.url) : e
            ),
            f(this, "_requests", {}),
            f(this, "_subs", {}),
            f(this, "_subIds", {}),
            f(this, "_detectNetwork", super.detectNetwork()),
            (this.websocket.onopen = () => {
              (this._wsReady = !0),
                Object.keys(this._requests).forEach((e) => {
                  this.websocket.send(this._requests[e].payload);
                });
            }),
            (this.websocket.onmessage = (e) => {
              const r = e.data,
                t = JSON.parse(r);
              if (null != t.id) {
                const e = String(t.id),
                  n = this._requests[e];
                if ((delete this._requests[e], void 0 !== t.result))
                  n.callback(null, t.result),
                    this.emit("debug", {
                      action: "response",
                      request: JSON.parse(n.payload),
                      response: t.result,
                      provider: this,
                    });
                else {
                  let e = null;
                  t.error
                    ? ((e = new Error(t.error.message || "unknown error")),
                      f(e, "code", t.error.code || null),
                      f(e, "response", r))
                    : (e = new Error("unknown error")),
                    n.callback(e, void 0),
                    this.emit("debug", {
                      action: "response",
                      error: e,
                      request: JSON.parse(n.payload),
                      provider: this,
                    });
                }
              } else if ("eth_subscription" === t.method) {
                const e = this._subs[t.params.subscription];
                e && e.processFunc(t.params.result);
              } else console.warn("this should not happen");
            });
          const t = setInterval(() => {
            this.emit("poll");
          }, 1e3);
          t.unref && t.unref();
        }
        get websocket() {
          return this._websocket;
        }
        detectNetwork() {
          return this._detectNetwork;
        }
        get pollingInterval() {
          return 0;
        }
        resetEventsBlock(e) {
          an.throwError(
            "cannot reset events block on WebSocketProvider",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "resetEventBlock" }
          );
        }
        set pollingInterval(e) {
          an.throwError(
            "cannot set polling interval on WebSocketProvider",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "setPollingInterval" }
          );
        }
        poll() {
          return sn(this, void 0, void 0, function* () {
            return null;
          });
        }
        set polling(e) {
          e &&
            an.throwError(
              "cannot set polling on WebSocketProvider",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "setPolling" }
            );
        }
        send(e, r) {
          const t = fn++;
          return new Promise((n, o) => {
            const i = JSON.stringify({
              method: e,
              params: r,
              id: t,
              jsonrpc: "2.0",
            });
            this.emit("debug", {
              action: "request",
              request: JSON.parse(i),
              provider: this,
            }),
              (this._requests[String(t)] = {
                callback: function (e, r) {
                  return e ? o(e) : n(r);
                },
                payload: i,
              }),
              this._wsReady && this.websocket.send(i);
          });
        }
        static defaultUrl() {
          return "ws://localhost:8546";
        }
        _subscribe(e, r, t) {
          return sn(this, void 0, void 0, function* () {
            let n = this._subIds[e];
            null == n &&
              ((n = Promise.all(r).then((e) => this.send("eth_subscribe", e))),
              (this._subIds[e] = n));
            const o = yield n;
            this._subs[o] = { tag: e, processFunc: t };
          });
        }
        _startEvent(e) {
          switch (e.type) {
            case "block":
              this._subscribe("block", ["newHeads"], (e) => {
                const r = n.gH.from(e.number).toNumber();
                (this._emitted.block = r), this.emit("block", r);
              });
              break;
            case "pending":
              this._subscribe("pending", ["newPendingTransactions"], (e) => {
                this.emit("pending", e);
              });
              break;
            case "filter":
              this._subscribe(
                e.tag,
                ["logs", this._getFilter(e.filter)],
                (r) => {
                  null == r.removed && (r.removed = !1),
                    this.emit(e.filter, this.formatter.filterLog(r));
                }
              );
              break;
            case "tx": {
              const r = (e) => {
                const r = e.hash;
                this.getTransactionReceipt(r).then((e) => {
                  e && this.emit(r, e);
                });
              };
              r(e),
                this._subscribe("tx", ["newHeads"], (e) => {
                  this._events.filter((e) => "tx" === e.type).forEach(r);
                });
              break;
            }
            case "debug":
            case "poll":
            case "willPoll":
            case "didPoll":
            case "error":
              break;
            default:
              console.log("unhandled:", e);
          }
        }
        _stopEvent(e) {
          let r = e.tag;
          if ("tx" === e.type) {
            if (this._events.filter((e) => "tx" === e.type).length) return;
            r = "tx";
          } else if (this.listenerCount(e.event)) return;
          const t = this._subIds[r];
          t &&
            (delete this._subIds[r],
            t.then((e) => {
              this._subs[e] &&
                (delete this._subs[e], this.send("eth_unsubscribe", [e]));
            }));
        }
        destroy() {
          return sn(this, void 0, void 0, function* () {
            this.websocket.readyState === on.CONNECTING &&
              (yield new Promise((e) => {
                (this.websocket.onopen = function () {
                  e(!0);
                }),
                  (this.websocket.onerror = function () {
                    e(!1);
                  });
              })),
              this.websocket.close(1e3);
          });
        }
      }
      var un = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const ln = new i.Vy(Se);
      class hn extends nn {
        detectNetwork() {
          const e = Object.create(null, {
            detectNetwork: { get: () => super.detectNetwork },
          });
          return un(this, void 0, void 0, function* () {
            let r = this.network;
            return (
              null == r &&
                ((r = yield e.detectNetwork.call(this)),
                r ||
                  ln.throwError(
                    "no network detected",
                    i.Vy.errors.UNKNOWN_ERROR,
                    {}
                  ),
                null == this._network &&
                  (f(this, "_network", r), this.emit("network", r, null))),
              r
            );
          });
        }
      }
      class dn extends hn {
        constructor(e, r) {
          ln.checkAbstract(new.target, dn),
            (e = c(new.target, "getNetwork")(e)),
            (r = c(new.target, "getApiKey")(r));
          super(c(new.target, "getUrl")(e, r), e),
            "string" === typeof r
              ? f(this, "apiKey", r)
              : null != r &&
                Object.keys(r).forEach((e) => {
                  f(this, e, r[e]);
                });
        }
        _startPending() {
          ln.warn("WARNING: API provider does not support pending filters");
        }
        isCommunityResource() {
          return !1;
        }
        getSigner(e) {
          return ln.throwError(
            "API provider does not support signing",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "getSigner" }
          );
        }
        listAccounts() {
          return Promise.resolve([]);
        }
        static getApiKey(e) {
          return e;
        }
        static getUrl(e, r) {
          return ln.throwError(
            "not implemented; sub-classes must override getUrl",
            i.Vy.errors.NOT_IMPLEMENTED,
            { operation: "getUrl" }
          );
        }
      }
      const pn = new i.Vy(Se),
        gn = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
      class mn extends cn {
        constructor(e, r) {
          const t = new yn(e, r);
          super(
            t.connection.url
              .replace(/^http/i, "ws")
              .replace(".alchemyapi.", ".ws.alchemyapi."),
            t.network
          ),
            f(this, "apiKey", t.apiKey);
        }
        isCommunityResource() {
          return this.apiKey === gn;
        }
      }
      class yn extends dn {
        static getWebSocketProvider(e, r) {
          return new mn(e, r);
        }
        static getApiKey(e) {
          return null == e
            ? gn
            : (e &&
                "string" !== typeof e &&
                pn.throwArgumentError("invalid apiKey", "apiKey", e),
              e);
        }
        static getUrl(e, r) {
          let t = null;
          switch (e.name) {
            case "homestead":
              t = "eth-mainnet.alchemyapi.io/v2/";
              break;
            case "ropsten":
              t = "eth-ropsten.alchemyapi.io/v2/";
              break;
            case "rinkeby":
              t = "eth-rinkeby.alchemyapi.io/v2/";
              break;
            case "goerli":
              t = "eth-goerli.alchemyapi.io/v2/";
              break;
            case "kovan":
              t = "eth-kovan.alchemyapi.io/v2/";
              break;
            case "matic":
              t = "polygon-mainnet.g.alchemy.com/v2/";
              break;
            case "maticmum":
              t = "polygon-mumbai.g.alchemy.com/v2/";
              break;
            case "arbitrum":
              t = "arb-mainnet.g.alchemy.com/v2/";
              break;
            case "arbitrum-rinkeby":
              t = "arb-rinkeby.g.alchemy.com/v2/";
              break;
            case "optimism":
              t = "opt-mainnet.g.alchemy.com/v2/";
              break;
            case "optimism-kovan":
              t = "opt-kovan.g.alchemy.com/v2/";
              break;
            default:
              pn.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0]
              );
          }
          return {
            allowGzip: !0,
            url: "https://" + t + r,
            throttleCallback: (e, t) => (r === gn && Zr(), Promise.resolve(!0)),
          };
        }
        isCommunityResource() {
          return this.apiKey === gn;
        }
      }
      const vn = new i.Vy(Se),
        En = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
      function bn(e) {
        switch (e) {
          case "homestead":
            return "rpc.ankr.com/eth/";
          case "ropsten":
            return "rpc.ankr.com/eth_ropsten/";
          case "rinkeby":
            return "rpc.ankr.com/eth_rinkeby/";
          case "goerli":
            return "rpc.ankr.com/eth_goerli/";
          case "matic":
            return "rpc.ankr.com/polygon/";
          case "arbitrum":
            return "rpc.ankr.com/arbitrum/";
        }
        return vn.throwArgumentError("unsupported network", "name", e);
      }
      class An extends dn {
        isCommunityResource() {
          return this.apiKey === En;
        }
        static getApiKey(e) {
          return null == e ? En : e;
        }
        static getUrl(e, r) {
          null == r && (r = En);
          const t = {
            allowGzip: !0,
            url: "https://" + bn(e.name) + r,
            throttleCallback: (e, t) => (
              r.apiKey === En && Zr(), Promise.resolve(!0)
            ),
          };
          return (
            null != r.projectSecret &&
              ((t.user = ""), (t.password = r.projectSecret)),
            t
          );
        }
      }
      var wn = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const Nn = new i.Vy(Se);
      class In extends dn {
        static getApiKey(e) {
          return (
            null != e &&
              Nn.throwArgumentError(
                "apiKey not supported for cloudflare",
                "apiKey",
                e
              ),
            null
          );
        }
        static getUrl(e, r) {
          let t = null;
          if ("homestead" === e.name) t = "https://cloudflare-eth.com/";
          else
            Nn.throwArgumentError(
              "unsupported network",
              "network",
              arguments[0]
            );
          return t;
        }
        perform(e, r) {
          const t = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return wn(this, void 0, void 0, function* () {
            if ("getBlockNumber" === e) {
              return (yield t.perform.call(this, "getBlock", {
                blockTag: "latest",
              })).number;
            }
            return t.perform.call(this, e, r);
          });
        }
      }
      var Rn = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const _n = new i.Vy(Se);
      function Pn(e) {
        const r = {};
        for (let t in e) {
          if (null == e[t]) continue;
          let n = e[t];
          ("type" === t && 0 === n) ||
            ((n = {
              type: !0,
              gasLimit: !0,
              gasPrice: !0,
              maxFeePerGs: !0,
              maxPriorityFeePerGas: !0,
              nonce: !0,
              value: !0,
            }[t]
              ? (0, o.Fh)((0, o.c$)(n))
              : "accessList" === t
              ? "[" +
                qr(n)
                  .map(
                    (e) =>
                      `{address:"${
                        e.address
                      }",storageKeys:["${e.storageKeys.join('","')}"]}`
                  )
                  .join(",") +
                "]"
              : (0, o.c$)(n)),
            (r[t] = n));
        }
        return r;
      }
      function Sn(e) {
        if (
          0 == e.status &&
          ("No records found" === e.message ||
            "No transactions found" === e.message)
        )
          return e.result;
        if (1 != e.status || "OK" != e.message) {
          const r = new Error("invalid response");
          throw (
            ((r.result = JSON.stringify(e)),
            (e.result || "").toLowerCase().indexOf("rate limit") >= 0 &&
              (r.throttleRetry = !0),
            r)
          );
        }
        return e.result;
      }
      function kn(e) {
        if (
          e &&
          0 == e.status &&
          "NOTOK" == e.message &&
          (e.result || "").toLowerCase().indexOf("rate limit") >= 0
        ) {
          const r = new Error("throttled response");
          throw ((r.result = JSON.stringify(e)), (r.throttleRetry = !0), r);
        }
        if ("2.0" != e.jsonrpc) {
          const r = new Error("invalid response");
          throw ((r.result = JSON.stringify(e)), r);
        }
        if (e.error) {
          const r = new Error(e.error.message || "unknown error");
          throw (
            (e.error.code && (r.code = e.error.code),
            e.error.data && (r.data = e.error.data),
            r)
          );
        }
        return e.result;
      }
      function Tn(e) {
        if ("pending" === e) throw new Error("pending not supported");
        return "latest" === e ? e : parseInt(e.substring(2), 16);
      }
      const On = "9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB";
      function Cn(e, r, t) {
        if ("call" === e && r.code === i.Vy.errors.SERVER_ERROR) {
          const e = r.error;
          if (
            e &&
            (e.message.match(/reverted/i) ||
              e.message.match(/VM execution error/i))
          ) {
            let t = e.data;
            if ((t && (t = "0x" + t.replace(/^.*0x/i, "")), (0, o.Lo)(t)))
              return t;
            _n.throwError(
              "missing revert data in call exception",
              i.Vy.errors.CALL_EXCEPTION,
              { error: r, data: "0x" }
            );
          }
        }
        let n = r.message;
        throw (
          (r.code === i.Vy.errors.SERVER_ERROR &&
            (r.error && "string" === typeof r.error.message
              ? (n = r.error.message)
              : "string" === typeof r.body
              ? (n = r.body)
              : "string" === typeof r.responseText && (n = r.responseText)),
          (n = (n || "").toLowerCase()),
          n.match(/insufficient funds/) &&
            _n.throwError(
              "insufficient funds for intrinsic transaction cost",
              i.Vy.errors.INSUFFICIENT_FUNDS,
              { error: r, method: e, transaction: t }
            ),
          n.match(
            /same hash was already imported|transaction nonce is too low|nonce too low/
          ) &&
            _n.throwError(
              "nonce has already been used",
              i.Vy.errors.NONCE_EXPIRED,
              { error: r, method: e, transaction: t }
            ),
          n.match(/another transaction with same nonce/) &&
            _n.throwError(
              "replacement fee too low",
              i.Vy.errors.REPLACEMENT_UNDERPRICED,
              { error: r, method: e, transaction: t }
            ),
          n.match(/execution failed due to an exception|execution reverted/) &&
            _n.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: r, method: e, transaction: t }
            ),
          r)
        );
      }
      class xn extends wt {
        constructor(e, r) {
          super(e),
            f(this, "baseUrl", this.getBaseUrl()),
            f(this, "apiKey", r || On);
        }
        getBaseUrl() {
          switch (this.network ? this.network.name : "invalid") {
            case "homestead":
              return "https://api.etherscan.io";
            case "ropsten":
              return "https://api-ropsten.etherscan.io";
            case "rinkeby":
              return "https://api-rinkeby.etherscan.io";
            case "kovan":
              return "https://api-kovan.etherscan.io";
            case "goerli":
              return "https://api-goerli.etherscan.io";
            case "optimism":
              return "https://api-optimistic.etherscan.io";
          }
          return _n.throwArgumentError(
            "unsupported network",
            "network",
            this.network.name
          );
        }
        getUrl(e, r) {
          const t = Object.keys(r).reduce((e, t) => {
              const n = r[t];
              return null != n && (e += `&${t}=${n}`), e;
            }, ""),
            n = this.apiKey ? `&apikey=${this.apiKey}` : "";
          return `${this.baseUrl}/api?module=${e}${t}${n}`;
        }
        getPostUrl() {
          return `${this.baseUrl}/api`;
        }
        getPostData(e, r) {
          return (r.module = e), (r.apikey = this.apiKey), r;
        }
        fetch(e, r, t) {
          return Rn(this, void 0, void 0, function* () {
            const n = t ? this.getPostUrl() : this.getUrl(e, r),
              o = t ? this.getPostData(e, r) : null,
              i = "proxy" === e ? kn : Sn;
            this.emit("debug", {
              action: "request",
              request: n,
              provider: this,
            });
            const s = {
              url: n,
              throttleSlotInterval: 1e3,
              throttleCallback: (e, r) => (
                this.isCommunityResource() && Zr(), Promise.resolve(!0)
              ),
            };
            let a = null;
            o &&
              ((s.headers = {
                "content-type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              }),
              (a = Object.keys(o)
                .map((e) => `${e}=${o[e]}`)
                .join("&")));
            const f = yield Ie(s, a, i || kn);
            return (
              this.emit("debug", {
                action: "response",
                request: n,
                response: g(f),
                provider: this,
              }),
              f
            );
          });
        }
        detectNetwork() {
          return Rn(this, void 0, void 0, function* () {
            return this.network;
          });
        }
        perform(e, r) {
          const t = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return Rn(this, void 0, void 0, function* () {
            switch (e) {
              case "getBlockNumber":
                return this.fetch("proxy", { action: "eth_blockNumber" });
              case "getGasPrice":
                return this.fetch("proxy", { action: "eth_gasPrice" });
              case "getBalance":
                return this.fetch("account", {
                  action: "balance",
                  address: r.address,
                  tag: r.blockTag,
                });
              case "getTransactionCount":
                return this.fetch("proxy", {
                  action: "eth_getTransactionCount",
                  address: r.address,
                  tag: r.blockTag,
                });
              case "getCode":
                return this.fetch("proxy", {
                  action: "eth_getCode",
                  address: r.address,
                  tag: r.blockTag,
                });
              case "getStorageAt":
                return this.fetch("proxy", {
                  action: "eth_getStorageAt",
                  address: r.address,
                  position: r.position,
                  tag: r.blockTag,
                });
              case "sendTransaction":
                return this.fetch(
                  "proxy",
                  {
                    action: "eth_sendRawTransaction",
                    hex: r.signedTransaction,
                  },
                  !0
                ).catch((e) => Cn("sendTransaction", e, r.signedTransaction));
              case "getBlock":
                if (r.blockTag)
                  return this.fetch("proxy", {
                    action: "eth_getBlockByNumber",
                    tag: r.blockTag,
                    boolean: r.includeTransactions ? "true" : "false",
                  });
                throw new Error("getBlock by blockHash not implemented");
              case "getTransaction":
                return this.fetch("proxy", {
                  action: "eth_getTransactionByHash",
                  txhash: r.transactionHash,
                });
              case "getTransactionReceipt":
                return this.fetch("proxy", {
                  action: "eth_getTransactionReceipt",
                  txhash: r.transactionHash,
                });
              case "call": {
                if ("latest" !== r.blockTag)
                  throw new Error(
                    "EtherscanProvider does not support blockTag for call"
                  );
                const e = Pn(r.transaction);
                (e.module = "proxy"), (e.action = "eth_call");
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (ho) {
                  return Cn("call", ho, r.transaction);
                }
              }
              case "estimateGas": {
                const e = Pn(r.transaction);
                (e.module = "proxy"), (e.action = "eth_estimateGas");
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (ho) {
                  return Cn("estimateGas", ho, r.transaction);
                }
              }
              case "getLogs": {
                const e = { action: "getLogs" };
                if (
                  (r.filter.fromBlock && (e.fromBlock = Tn(r.filter.fromBlock)),
                  r.filter.toBlock && (e.toBlock = Tn(r.filter.toBlock)),
                  r.filter.address && (e.address = r.filter.address),
                  r.filter.topics &&
                    r.filter.topics.length > 0 &&
                    (r.filter.topics.length > 1 &&
                      _n.throwError(
                        "unsupported topic count",
                        i.Vy.errors.UNSUPPORTED_OPERATION,
                        { topics: r.filter.topics }
                      ),
                    1 === r.filter.topics.length))
                ) {
                  const t = r.filter.topics[0];
                  ("string" === typeof t && 66 === t.length) ||
                    _n.throwError(
                      "unsupported topic format",
                      i.Vy.errors.UNSUPPORTED_OPERATION,
                      { topic0: t }
                    ),
                    (e.topic0 = t);
                }
                const t = yield this.fetch("logs", e);
                let n = {};
                for (let r = 0; r < t.length; r++) {
                  const e = t[r];
                  if (null == e.blockHash) {
                    if (null == n[e.blockNumber]) {
                      const r = yield this.getBlock(e.blockNumber);
                      r && (n[e.blockNumber] = r.hash);
                    }
                    e.blockHash = n[e.blockNumber];
                  }
                }
                return t;
              }
              case "getEtherPrice":
                return "homestead" !== this.network.name
                  ? 0
                  : parseFloat(
                      (yield this.fetch("stats", { action: "ethprice" })).ethusd
                    );
            }
            return t.perform.call(this, e, r);
          });
        }
        getHistory(e, r, t) {
          return Rn(this, void 0, void 0, function* () {
            const n = {
              action: "txlist",
              address: yield this.resolveName(e),
              startblock: null == r ? 0 : r,
              endblock: null == t ? 99999999 : t,
              sort: "asc",
            };
            return (yield this.fetch("account", n)).map((e) => {
              ["contractAddress", "to"].forEach(function (r) {
                "" == e[r] && delete e[r];
              }),
                null == e.creates &&
                  null != e.contractAddress &&
                  (e.creates = e.contractAddress);
              const r = this.formatter.transactionResponse(e);
              return e.timeStamp && (r.timestamp = parseInt(e.timeStamp)), r;
            });
          });
        }
        isCommunityResource() {
          return this.apiKey === On;
        }
      }
      var Un = function (e, r, t, n) {
        return new (t || (t = Promise))(function (o, i) {
          function s(e) {
            try {
              f(n.next(e));
            } catch (r) {
              i(r);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (r) {
              i(r);
            }
          }
          function f(e) {
            var r;
            e.done
              ? o(e.value)
              : ((r = e.value),
                r instanceof t
                  ? r
                  : new t(function (e) {
                      e(r);
                    })).then(s, a);
          }
          f((n = n.apply(e, r || [])).next());
        });
      };
      const Mn = new i.Vy(Se);
      function Fn() {
        return new Date().getTime();
      }
      function Ln(e) {
        let r = null;
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          if (null == n) return null;
          r
            ? (r.name === n.name &&
                r.chainId === n.chainId &&
                (r.ensAddress === n.ensAddress ||
                  (null == r.ensAddress && null == n.ensAddress))) ||
              Mn.throwArgumentError("provider mismatch", "networks", e)
            : (r = n);
        }
        return r;
      }
      function Dn(e, r) {
        e = e.slice().sort();
        const t = Math.floor(e.length / 2);
        if (e.length % 2) return e[t];
        const n = e[t - 1],
          o = e[t];
        return null != r && Math.abs(n - o) > r ? null : (n + o) / 2;
      }
      function Bn(e) {
        if (null === e) return "null";
        if ("number" === typeof e || "boolean" === typeof e)
          return JSON.stringify(e);
        if ("string" === typeof e) return e;
        if (n.gH.isBigNumber(e)) return e.toString();
        if (Array.isArray(e)) return JSON.stringify(e.map((e) => Bn(e)));
        if ("object" === typeof e) {
          const r = Object.keys(e);
          return (
            r.sort(),
            "{" +
              r
                .map((r) => {
                  let t = e[r];
                  return (
                    (t = "function" === typeof t ? "[function]" : Bn(t)),
                    JSON.stringify(r) + ":" + t
                  );
                })
                .join(",") +
              "}"
          );
        }
        throw new Error("unknown value type: " + typeof e);
      }
      let Gn = 1;
      function qn(e) {
        let r = null,
          t = null,
          n = new Promise((n) => {
            (r = function () {
              t && (clearTimeout(t), (t = null)), n();
            }),
              (t = setTimeout(r, e));
          });
        return {
          cancel: r,
          getPromise: function () {
            return n;
          },
          wait: (e) => ((n = n.then(e)), n),
        };
      }
      const Vn = [
          i.Vy.errors.CALL_EXCEPTION,
          i.Vy.errors.INSUFFICIENT_FUNDS,
          i.Vy.errors.NONCE_EXPIRED,
          i.Vy.errors.REPLACEMENT_UNDERPRICED,
          i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
        ],
        jn = [
          "address",
          "args",
          "errorArgs",
          "errorSignature",
          "method",
          "transaction",
        ];
      function zn(e, r) {
        const t = { weight: e.weight };
        return (
          Object.defineProperty(t, "provider", { get: () => e.provider }),
          e.start && (t.start = e.start),
          r && (t.duration = r - e.start),
          e.done &&
            (e.error ? (t.error = e.error) : (t.result = e.result || null)),
          t
        );
      }
      function Kn(e, r, t) {
        let n = Bn;
        switch (r) {
          case "getBlockNumber":
            return function (r) {
              const t = r.map((e) => e.result);
              let n = Dn(
                r.map((e) => e.result),
                2
              );
              if (null != n)
                return (
                  (n = Math.ceil(n)),
                  t.indexOf(n + 1) >= 0 && n++,
                  n >= e._highestBlockNumber && (e._highestBlockNumber = n),
                  e._highestBlockNumber
                );
            };
          case "getGasPrice":
            return function (e) {
              const r = e.map((e) => e.result);
              return r.sort(), r[Math.floor(r.length / 2)];
            };
          case "getEtherPrice":
            return function (e) {
              return Dn(e.map((e) => e.result));
            };
          case "getBalance":
          case "getTransactionCount":
          case "getCode":
          case "getStorageAt":
          case "call":
          case "estimateGas":
          case "getLogs":
            break;
          case "getTransaction":
          case "getTransactionReceipt":
            n = function (e) {
              return null == e
                ? null
                : (((e = l(e)).confirmations = -1), Bn(e));
            };
            break;
          case "getBlock":
            n = t.includeTransactions
              ? function (e) {
                  return null == e
                    ? null
                    : (((e = l(e)).transactions = e.transactions.map(
                        (e) => (((e = l(e)).confirmations = -1), e)
                      )),
                      Bn(e));
                }
              : function (e) {
                  return null == e ? null : Bn(e);
                };
            break;
          default:
            throw new Error("unknown method: " + r);
        }
        return (function (e, r) {
          return function (t) {
            const n = {};
            t.forEach((r) => {
              const t = e(r.result);
              n[t] || (n[t] = { count: 0, result: r.result }), n[t].count++;
            });
            const o = Object.keys(n);
            for (let e = 0; e < o.length; e++) {
              const t = n[o[e]];
              if (t.count >= r) return t.result;
            }
          };
        })(n, e.quorum);
      }
      function Wn(e, r) {
        return Un(this, void 0, void 0, function* () {
          const t = e.provider;
          return (null != t.blockNumber && t.blockNumber >= r) || -1 === r
            ? t
            : Re(
                () =>
                  new Promise((n, o) => {
                    setTimeout(function () {
                      return t.blockNumber >= r
                        ? n(t)
                        : e.cancelled
                        ? n(null)
                        : n(void 0);
                    }, 0);
                  }),
                { oncePoll: t }
              );
        });
      }
      function Hn(e, r, t, n) {
        return Un(this, void 0, void 0, function* () {
          let s = e.provider;
          switch (t) {
            case "getBlockNumber":
            case "getGasPrice":
              return s[t]();
            case "getEtherPrice":
              if (s.getEtherPrice) return s.getEtherPrice();
              break;
            case "getBalance":
            case "getTransactionCount":
            case "getCode":
              return (
                n.blockTag && (0, o.Lo)(n.blockTag) && (s = yield Wn(e, r)),
                s[t](n.address, n.blockTag || "latest")
              );
            case "getStorageAt":
              return (
                n.blockTag && (0, o.Lo)(n.blockTag) && (s = yield Wn(e, r)),
                s.getStorageAt(n.address, n.position, n.blockTag || "latest")
              );
            case "getBlock":
              return (
                n.blockTag && (0, o.Lo)(n.blockTag) && (s = yield Wn(e, r)),
                s[
                  n.includeTransactions
                    ? "getBlockWithTransactions"
                    : "getBlock"
                ](n.blockTag || n.blockHash)
              );
            case "call":
            case "estimateGas":
              return (
                n.blockTag && (0, o.Lo)(n.blockTag) && (s = yield Wn(e, r)),
                s[t](n.transaction)
              );
            case "getTransaction":
            case "getTransactionReceipt":
              return s[t](n.transactionHash);
            case "getLogs": {
              let t = n.filter;
              return (
                ((t.fromBlock && (0, o.Lo)(t.fromBlock)) ||
                  (t.toBlock && (0, o.Lo)(t.toBlock))) &&
                  (s = yield Wn(e, r)),
                s.getLogs(t)
              );
            }
          }
          return Mn.throwError(
            "unknown method error",
            i.Vy.errors.UNKNOWN_ERROR,
            { method: t, params: n }
          );
        });
      }
      class Jn extends wt {
        constructor(e, r) {
          0 === e.length &&
            Mn.throwArgumentError("missing providers", "providers", e);
          const t = e.map((e, r) => {
              if (b.isProvider(e)) {
                const r = Qr(e) ? 2e3 : 750,
                  t = 1;
                return Object.freeze({
                  provider: e,
                  weight: 1,
                  stallTimeout: r,
                  priority: t,
                });
              }
              const t = l(e);
              null == t.priority && (t.priority = 1),
                null == t.stallTimeout && (t.stallTimeout = Qr(e) ? 2e3 : 750),
                null == t.weight && (t.weight = 1);
              const n = t.weight;
              return (
                (n % 1 || n > 512 || n < 1) &&
                  Mn.throwArgumentError(
                    "invalid weight; must be integer in [1, 512]",
                    `providers[${r}].weight`,
                    n
                  ),
                Object.freeze(t)
              );
            }),
            n = t.reduce((e, r) => e + r.weight, 0);
          null == r
            ? (r = n / 2)
            : r > n &&
              Mn.throwArgumentError(
                "quorum will always fail; larger than total weight",
                "quorum",
                r
              );
          let o = Ln(t.map((e) => e.provider.network));
          null == o &&
            (o = new Promise((e, r) => {
              setTimeout(() => {
                this.detectNetwork().then(e, r);
              }, 0);
            })),
            super(o),
            f(this, "providerConfigs", Object.freeze(t)),
            f(this, "quorum", r),
            (this._highestBlockNumber = -1);
        }
        detectNetwork() {
          return Un(this, void 0, void 0, function* () {
            return Ln(
              yield Promise.all(
                this.providerConfigs.map((e) => e.provider.getNetwork())
              )
            );
          });
        }
        perform(e, r) {
          return Un(this, void 0, void 0, function* () {
            if ("sendTransaction" === e) {
              const e = yield Promise.all(
                this.providerConfigs.map((e) =>
                  e.provider.sendTransaction(r.signedTransaction).then(
                    (e) => e.hash,
                    (e) => e
                  )
                )
              );
              for (let r = 0; r < e.length; r++) {
                const t = e[r];
                if ("string" === typeof t) return t;
              }
              throw e[0];
            }
            -1 === this._highestBlockNumber &&
              "getBlockNumber" !== e &&
              (yield this.getBlockNumber());
            const t = Kn(this, e, r),
              n = (function (e) {
                for (let r = (e = e.slice()).length - 1; r > 0; r--) {
                  const t = Math.floor(Math.random() * (r + 1)),
                    n = e[r];
                  (e[r] = e[t]), (e[t] = n);
                }
                return e;
              })(this.providerConfigs.map(l));
            n.sort((e, r) => e.priority - r.priority);
            const o = this._highestBlockNumber;
            let s = 0,
              a = !0;
            for (;;) {
              const i = Fn();
              let f = n
                .filter((e) => e.runner && i - e.start < e.stallTimeout)
                .reduce((e, r) => e + r.weight, 0);
              for (; f < this.quorum && s < n.length; ) {
                const t = n[s++],
                  i = Gn++;
                (t.start = Fn()),
                  (t.staller = qn(t.stallTimeout)),
                  t.staller.wait(() => {
                    t.staller = null;
                  }),
                  (t.runner = Hn(t, o, e, r).then(
                    (n) => {
                      (t.done = !0),
                        (t.result = n),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: i,
                            backend: zn(t, Fn()),
                            request: { method: e, params: g(r) },
                            provider: this,
                          });
                    },
                    (n) => {
                      (t.done = !0),
                        (t.error = n),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: i,
                            backend: zn(t, Fn()),
                            request: { method: e, params: g(r) },
                            provider: this,
                          });
                    }
                  )),
                  this.listenerCount("debug") &&
                    this.emit("debug", {
                      action: "request",
                      rid: i,
                      backend: zn(t, null),
                      request: { method: e, params: g(r) },
                      provider: this,
                    }),
                  (f += t.weight);
              }
              const c = [];
              n.forEach((e) => {
                !e.done &&
                  e.runner &&
                  (c.push(e.runner),
                  e.staller && c.push(e.staller.getPromise()));
              }),
                c.length && (yield Promise.race(c));
              const u = n.filter((e) => e.done && null == e.error);
              if (u.length >= this.quorum) {
                const e = t(u);
                if (void 0 !== e)
                  return (
                    n.forEach((e) => {
                      e.staller && e.staller.cancel(), (e.cancelled = !0);
                    }),
                    e
                  );
                a || (yield qn(100).getPromise()), (a = !1);
              }
              const l = n.reduce((e, r) => {
                if (!r.done || null == r.error) return e;
                const t = r.error.code;
                return (
                  Vn.indexOf(t) >= 0 &&
                    (e[t] || (e[t] = { error: r.error, weight: 0 }),
                    (e[t].weight += r.weight)),
                  e
                );
              }, {});
              if (
                (Object.keys(l).forEach((e) => {
                  const r = l[e];
                  if (r.weight < this.quorum) return;
                  n.forEach((e) => {
                    e.staller && e.staller.cancel(), (e.cancelled = !0);
                  });
                  const t = r.error,
                    o = {};
                  jn.forEach((e) => {
                    null != t[e] && (o[e] = t[e]);
                  }),
                    Mn.throwError(t.reason || t.message, e, o);
                }),
                0 === n.filter((e) => !e.done).length)
              )
                break;
            }
            return (
              n.forEach((e) => {
                e.staller && e.staller.cancel(), (e.cancelled = !0);
              }),
              Mn.throwError("failed to meet quorum", i.Vy.errors.SERVER_ERROR, {
                method: e,
                params: r,
                results: n.map((e) => zn(e)),
                provider: this,
              })
            );
          });
        }
      }
      const Xn = null,
        Qn = new i.Vy(Se),
        Yn = "84842078b09946638c03157f83405213";
      class Zn extends cn {
        constructor(e, r) {
          const t = new $n(e, r),
            n = t.connection;
          n.password &&
            Qn.throwError(
              "INFURA WebSocket project secrets unsupported",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "InfuraProvider.getWebSocketProvider()" }
            );
          super(n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e),
            f(this, "apiKey", t.projectId),
            f(this, "projectId", t.projectId),
            f(this, "projectSecret", t.projectSecret);
        }
        isCommunityResource() {
          return this.projectId === Yn;
        }
      }
      class $n extends dn {
        static getWebSocketProvider(e, r) {
          return new Zn(e, r);
        }
        static getApiKey(e) {
          const r = { apiKey: Yn, projectId: Yn, projectSecret: null };
          return (
            null == e ||
              ("string" === typeof e
                ? (r.projectId = e)
                : null != e.projectSecret
                ? (Qn.assertArgument(
                    "string" === typeof e.projectId,
                    "projectSecret requires a projectId",
                    "projectId",
                    e.projectId
                  ),
                  Qn.assertArgument(
                    "string" === typeof e.projectSecret,
                    "invalid projectSecret",
                    "projectSecret",
                    "[REDACTED]"
                  ),
                  (r.projectId = e.projectId),
                  (r.projectSecret = e.projectSecret))
                : e.projectId && (r.projectId = e.projectId),
              (r.apiKey = r.projectId)),
            r
          );
        }
        static getUrl(e, r) {
          let t = null;
          switch (e ? e.name : "unknown") {
            case "homestead":
              t = "mainnet.infura.io";
              break;
            case "ropsten":
              t = "ropsten.infura.io";
              break;
            case "rinkeby":
              t = "rinkeby.infura.io";
              break;
            case "kovan":
              t = "kovan.infura.io";
              break;
            case "goerli":
              t = "goerli.infura.io";
              break;
            case "matic":
              t = "polygon-mainnet.infura.io";
              break;
            case "maticmum":
              t = "polygon-mumbai.infura.io";
              break;
            case "optimism":
              t = "optimism-mainnet.infura.io";
              break;
            case "optimism-kovan":
              t = "optimism-kovan.infura.io";
              break;
            case "arbitrum":
              t = "arbitrum-mainnet.infura.io";
              break;
            case "arbitrum-rinkeby":
              t = "arbitrum-rinkeby.infura.io";
              break;
            default:
              Qn.throwError(
                "unsupported network",
                i.Vy.errors.INVALID_ARGUMENT,
                { argument: "network", value: e }
              );
          }
          const n = {
            allowGzip: !0,
            url: "https://" + t + "/v3/" + r.projectId,
            throttleCallback: (e, t) => (
              r.projectId === Yn && Zr(), Promise.resolve(!0)
            ),
          };
          return (
            null != r.projectSecret &&
              ((n.user = ""), (n.password = r.projectSecret)),
            n
          );
        }
        isCommunityResource() {
          return this.projectId === Yn;
        }
      }
      class eo extends nn {
        send(e, r) {
          const t = {
            method: e,
            params: r,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          null == this._pendingBatch && (this._pendingBatch = []);
          const n = { request: t, resolve: null, reject: null },
            o = new Promise((e, r) => {
              (n.resolve = e), (n.reject = r);
            });
          return (
            this._pendingBatch.push(n),
            this._pendingBatchAggregator ||
              (this._pendingBatchAggregator = setTimeout(() => {
                const e = this._pendingBatch;
                (this._pendingBatch = null),
                  (this._pendingBatchAggregator = null);
                const r = e.map((e) => e.request);
                return (
                  this.emit("debug", {
                    action: "requestBatch",
                    request: g(r),
                    provider: this,
                  }),
                  Ie(this.connection, JSON.stringify(r)).then(
                    (t) => {
                      this.emit("debug", {
                        action: "response",
                        request: r,
                        response: t,
                        provider: this,
                      }),
                        e.forEach((e, r) => {
                          const n = t[r];
                          if (n.error) {
                            const r = new Error(n.error.message);
                            (r.code = n.error.code),
                              (r.data = n.error.data),
                              e.reject(r);
                          } else e.resolve(n.result);
                        });
                    },
                    (t) => {
                      this.emit("debug", {
                        action: "response",
                        error: t,
                        request: r,
                        provider: this,
                      }),
                        e.forEach((e) => {
                          e.reject(t);
                        });
                    }
                  )
                );
              }, 10)),
            o
          );
        }
      }
      const ro = new i.Vy(Se);
      class to extends dn {
        static getApiKey(e) {
          return (
            e &&
              "string" !== typeof e &&
              ro.throwArgumentError("invalid apiKey", "apiKey", e),
            e || "ETHERS_JS_SHARED"
          );
        }
        static getUrl(e, r) {
          ro.warn(
            "NodeSmith will be discontinued on 2019-12-20; please migrate to another platform."
          );
          let t = null;
          switch (e.name) {
            case "homestead":
              t = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
              break;
            case "ropsten":
              t = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
              break;
            case "rinkeby":
              t = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
              break;
            case "goerli":
              t = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
              break;
            case "kovan":
              t = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
              break;
            default:
              ro.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0]
              );
          }
          return t + "?apiKey=" + r;
        }
      }
      const no = new i.Vy(Se),
        oo = {
          homestead: "6004bcd10040261633ade990",
          ropsten: "6004bd4d0040261633ade991",
          rinkeby: "6004bda20040261633ade994",
          goerli: "6004bd860040261633ade992",
        };
      class io extends dn {
        constructor(e, r) {
          if (null == r) {
            const t = c(new.target, "getNetwork")(e);
            if (t) {
              const e = oo[t.name];
              e && (r = { applicationId: e, loadBalancer: !0 });
            }
            null == r &&
              no.throwError(
                "unsupported network",
                i.Vy.errors.INVALID_ARGUMENT,
                { argument: "network", value: e }
              );
          }
          super(e, r);
        }
        static getApiKey(e) {
          null == e &&
            no.throwArgumentError(
              "PocketProvider.getApiKey does not support null apiKey",
              "apiKey",
              e
            );
          const r = {
            applicationId: null,
            loadBalancer: !1,
            applicationSecretKey: null,
          };
          return (
            "string" === typeof e
              ? (r.applicationId = e)
              : null != e.applicationSecretKey
              ? (no.assertArgument(
                  "string" === typeof e.applicationId,
                  "applicationSecretKey requires an applicationId",
                  "applicationId",
                  e.applicationId
                ),
                no.assertArgument(
                  "string" === typeof e.applicationSecretKey,
                  "invalid applicationSecretKey",
                  "applicationSecretKey",
                  "[REDACTED]"
                ),
                (r.applicationId = e.applicationId),
                (r.applicationSecretKey = e.applicationSecretKey),
                (r.loadBalancer = !!e.loadBalancer))
              : e.applicationId
              ? (no.assertArgument(
                  "string" === typeof e.applicationId,
                  "apiKey.applicationId must be a string",
                  "apiKey.applicationId",
                  e.applicationId
                ),
                (r.applicationId = e.applicationId),
                (r.loadBalancer = !!e.loadBalancer))
              : no.throwArgumentError(
                  "unsupported PocketProvider apiKey",
                  "apiKey",
                  e
                ),
            r
          );
        }
        static getUrl(e, r) {
          let t = null;
          switch (e ? e.name : "unknown") {
            case "homestead":
              t = "eth-mainnet.gateway.pokt.network";
              break;
            case "ropsten":
              t = "eth-ropsten.gateway.pokt.network";
              break;
            case "rinkeby":
              t = "eth-rinkeby.gateway.pokt.network";
              break;
            case "goerli":
              t = "eth-goerli.gateway.pokt.network";
              break;
            default:
              no.throwError(
                "unsupported network",
                i.Vy.errors.INVALID_ARGUMENT,
                { argument: "network", value: e }
              );
          }
          let n = null;
          n = r.loadBalancer
            ? `https://${t}/v1/lb/${r.applicationId}`
            : `https://${t}/v1/${r.applicationId}`;
          const o = { url: n, headers: {} };
          return (
            null != r.applicationSecretKey &&
              ((o.user = ""), (o.password = r.applicationSecretKey)),
            o
          );
        }
        isCommunityResource() {
          return this.applicationId === oo[this.network.name];
        }
      }
      const so = new i.Vy(Se);
      let ao = 1;
      function fo(e, r) {
        const t = "Web3LegacyFetcher";
        return function (e, n) {
          const o = { method: e, params: n, id: ao++, jsonrpc: "2.0" };
          return new Promise((e, n) => {
            this.emit("debug", {
              action: "request",
              fetcher: t,
              request: g(o),
              provider: this,
            }),
              r(o, (r, i) => {
                if (r)
                  return (
                    this.emit("debug", {
                      action: "response",
                      fetcher: t,
                      error: r,
                      request: o,
                      provider: this,
                    }),
                    n(r)
                  );
                if (
                  (this.emit("debug", {
                    action: "response",
                    fetcher: t,
                    request: o,
                    response: i,
                    provider: this,
                  }),
                  i.error)
                ) {
                  const e = new Error(i.error.message);
                  return (e.code = i.error.code), (e.data = i.error.data), n(e);
                }
                e(i.result);
              });
          });
        };
      }
      class co extends nn {
        constructor(e, r) {
          null == e && so.throwArgumentError("missing provider", "provider", e);
          let t = null,
            n = null,
            o = null;
          "function" === typeof e
            ? ((t = "unknown:"), (n = e))
            : ((t = e.host || e.path || ""),
              !t && e.isMetaMask && (t = "metamask"),
              (o = e),
              e.request
                ? ("" === t && (t = "eip-1193:"),
                  (n = (function (e) {
                    return function (r, t) {
                      null == t && (t = []);
                      const n = { method: r, params: t };
                      return (
                        this.emit("debug", {
                          action: "request",
                          fetcher: "Eip1193Fetcher",
                          request: g(n),
                          provider: this,
                        }),
                        e.request(n).then(
                          (e) => (
                            this.emit("debug", {
                              action: "response",
                              fetcher: "Eip1193Fetcher",
                              request: n,
                              response: e,
                              provider: this,
                            }),
                            e
                          ),
                          (e) => {
                            throw (
                              (this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: n,
                                error: e,
                                provider: this,
                              }),
                              e)
                            );
                          }
                        )
                      );
                    };
                  })(e)))
                : e.sendAsync
                ? (n = fo(0, e.sendAsync.bind(e)))
                : e.send
                ? (n = fo(0, e.send.bind(e)))
                : so.throwArgumentError("unsupported provider", "provider", e),
              t || (t = "unknown:")),
            super(t, r),
            f(this, "jsonRpcFetchFunc", n),
            f(this, "provider", o);
        }
        send(e, r) {
          return this.jsonRpcFetchFunc(e, r);
        }
      }
      const uo = new i.Vy(Se);
      function lo(e, r) {
        if ((null == e && (e = "homestead"), "string" === typeof e)) {
          const r = e.match(/^(ws|http)s?:/i);
          if (r)
            switch (r[1].toLowerCase()) {
              case "http":
              case "https":
                return new nn(e);
              case "ws":
              case "wss":
                return new cn(e);
              default:
                uo.throwArgumentError("unsupported URL scheme", "network", e);
            }
        }
        const t = S(e);
        return (
          (t && t._defaultProvider) ||
            uo.throwError(
              "unsupported getDefaultProvider network",
              i.Vy.errors.NETWORK_ERROR,
              { operation: "getDefaultProvider", network: e }
            ),
          t._defaultProvider(
            {
              FallbackProvider: Jn,
              AlchemyProvider: yn,
              AnkrProvider: An,
              CloudflareProvider: In,
              EtherscanProvider: xn,
              InfuraProvider: $n,
              JsonRpcProvider: nn,
              NodesmithProvider: to,
              PocketProvider: io,
              Web3Provider: co,
              IpcProvider: Xn,
            },
            r
          )
        );
      }
    },
    87429: (e, r, t) => {
      function n(e) {
        for (let r = (e = e.slice()).length - 1; r > 0; r--) {
          const t = Math.floor(Math.random() * (r + 1)),
            n = e[r];
          (e[r] = e[t]), (e[t] = n);
        }
        return e;
      }
      t.d(r, { A: () => n });
    },
    88821: (e, r, t) => {
      t.d(r, { Vy: () => h });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
    },
    89050: (e, r, t) => {
      t.d(r, {
        k9: () => c,
        xW: () => u,
        qn: () => y,
        cm: () => g,
        Ab: () => m,
        Fh: () => v,
        bj: () => E,
        c$: () => p,
        aY: () => f,
        f: () => s,
        Lo: () => h,
        Pc: () => b,
        gr: () => l,
      });
      const n = new (t(88821).Vy)("bytes/5.8.0");
      function o(e) {
        return !!e.toHexString;
      }
      function i(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return i(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function s(e) {
        return (h(e) && !(e.length % 2)) || f(e);
      }
      function a(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function f(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!a(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!a(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function c(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), i(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e) && (e = e.toHexString()),
          h(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          const o = [];
          for (let e = 0; e < t.length; e += 2)
            o.push(parseInt(t.substring(e, e + 2), 16));
          return i(new Uint8Array(o));
        }
        return f(e)
          ? i(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function u(e) {
        const r = e.map((e) => c(e)),
          t = r.reduce((e, r) => e + r.length, 0),
          n = new Uint8Array(t);
        return r.reduce((e, r) => (n.set(r, e), e + r.length), 0), i(n);
      }
      function l(e) {
        let r = c(e);
        if (0 === r.length) return r;
        let t = 0;
        for (; t < r.length && 0 === r[t]; ) t++;
        return t && (r = r.slice(t)), r;
      }
      function h(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const d = "0123456789abcdef";
      function p(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = d[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e))
        )
          return e.toHexString();
        if (h(e))
          return (
            e.length % 2 &&
              ("left" === r.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === r.hexPad
                ? (e += "0")
                : n.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (f(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += d[(240 & n) >> 4] + d[15 & n];
          }
          return r;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
      function g(e) {
        if ("string" !== typeof e) e = p(e);
        else if (!h(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function m(e, r, t) {
        return (
          "string" !== typeof e
            ? (e = p(e))
            : (!h(e) || e.length % 2) &&
              n.throwArgumentError("invalid hexData", "value", e),
          (r = 2 + 2 * r),
          null != t ? "0x" + e.substring(r, 2 + 2 * t) : "0x" + e.substring(r)
        );
      }
      function y(e) {
        let r = "0x";
        return (
          e.forEach((e) => {
            r += p(e).substring(2);
          }),
          r
        );
      }
      function v(e) {
        const r = (function (e) {
          "string" !== typeof e && (e = p(e));
          h(e) || n.throwArgumentError("invalid hex string", "value", e);
          e = e.substring(2);
          let r = 0;
          for (; r < e.length && "0" === e[r]; ) r++;
          return "0x" + e.substring(r);
        })(p(e, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function E(e, r) {
        for (
          "string" !== typeof e
            ? (e = p(e))
            : h(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * r + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * r + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
      function b(e) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (s(e)) {
          let t = c(e);
          64 === t.length
            ? ((r.v = 27 + (t[32] >> 7)),
              (t[32] &= 127),
              (r.r = p(t.slice(0, 32))),
              (r.s = p(t.slice(32, 64))))
            : 65 === t.length
            ? ((r.r = p(t.slice(0, 32))),
              (r.s = p(t.slice(32, 64))),
              (r.v = t[64]))
            : n.throwArgumentError("invalid signature string", "signature", e),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : n.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (t[32] |= 128),
            (r._vs = p(t.slice(32, 64)));
        } else {
          if (
            ((r.r = e.r),
            (r.s = e.s),
            (r.v = e.v),
            (r.recoveryParam = e.recoveryParam),
            (r._vs = e._vs),
            null != r._vs)
          ) {
            const t = (function (e, r) {
              (e = c(e)).length > r &&
                n.throwArgumentError(
                  "value out of range",
                  "value",
                  arguments[0]
                );
              const t = new Uint8Array(r);
              return t.set(e, r - e.length), i(t);
            })(c(r._vs), 32);
            r._vs = p(t);
            const o = t[0] >= 128 ? 1 : 0;
            null == r.recoveryParam
              ? (r.recoveryParam = o)
              : r.recoveryParam !== o &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e
                ),
              (t[0] &= 127);
            const s = p(t);
            null == r.s
              ? (r.s = s)
              : r.s !== s &&
                n.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? n.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e
                )
              : 0 === r.v || 1 === r.v
              ? (r.recoveryParam = r.v)
              : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const t = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== t &&
              n.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e
              );
          }
          null != r.r && h(r.r)
            ? (r.r = E(r.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e
              ),
            null != r.s && h(r.s)
              ? (r.s = E(r.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e
                );
          const t = c(r.s);
          t[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", e),
            r.recoveryParam && (t[0] |= 128);
          const o = p(t);
          r._vs &&
            (h(r._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", e),
            (r._vs = E(r._vs, 32))),
            null == r._vs
              ? (r._vs = o)
              : r._vs !== o &&
                n.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e
                );
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
    },
    91264: (e, r, t) => {
      t.d(r, { Vy: () => h });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
    },
    92209: (e, r, t) => {
      t.d(r, { Vy: () => h });
      let n = !1,
        o = !1;
      const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = i.default,
        a = null;
      const f = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (t) {
                e.push(r);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var c, u;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(c || (c = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(u || (u = {}));
      const l = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, r) {
          const t = e.toLowerCase();
          null == i[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > i[t] || console.log.apply(console, r);
        }
        debug() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.DEBUG, r);
        }
        info() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.INFO, r);
        }
        warn() {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          this._log(h.levels.WARNING, r);
        }
        makeError(e, r, t) {
          if (o) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += l[r[e] >> 4]), (t += l[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const i = e;
          let s = "";
          switch (r) {
            case u.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
            case u.CALL_EXCEPTION:
            case u.INSUFFICIENT_FUNDS:
            case u.MISSING_NEW:
            case u.NONCE_EXPIRED:
            case u.REPLACEMENT_UNDERPRICED:
            case u.TRANSACTION_REPLACED:
            case u.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = r),
            Object.keys(t).forEach(function (e) {
              a[e] = t[e];
            }),
            a
          );
        }
        throwError(e, r, t) {
          throw this.makeError(e, r, t);
        }
        throwArgumentError(e, r, t) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: r,
            value: t,
          });
        }
        assert(e, r, t, n) {
          e || this.throwError(r, t, n);
        }
        assertArgument(e, r, t, n) {
          e || this.throwArgumentError(r, t, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(e, r) {
          "number" === typeof e &&
            (null == r && (r = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(r, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, r, t) {
          (t = t ? ": " + t : ""),
            e < r &&
              this.throwError(
                "missing argument" + t,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: r }
              ),
            e > r &&
              this.throwError(
                "too many arguments" + t,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: r }
              );
        }
        checkNew(e, r) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(e, r) {
          e === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, r) {
          if (
            (!e &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (o = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = i[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = u), (h.levels = c);
    },
    95174: (e, r, t) => {
      t.d(r, { k9: () => f, xW: () => c, c$: () => h });
      const n = new (t(92209).Vy)("bytes/5.8.0");
      function o(e) {
        return !!e.toHexString;
      }
      function i(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return i(new Uint8Array(Array.prototype.slice.apply(e, r)));
            }),
          e
        );
      }
      function s(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function a(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!s(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!s(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function f(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid arrayify value");
          const r = [];
          for (; e; ) r.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === r.length && r.push(0), i(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e) && (e = e.toHexString()),
          u(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          const o = [];
          for (let e = 0; e < t.length; e += 2)
            o.push(parseInt(t.substring(e, e + 2), 16));
          return i(new Uint8Array(o));
        }
        return a(e)
          ? i(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function c(e) {
        const r = e.map((e) => f(e)),
          t = r.reduce((e, r) => e + r.length, 0),
          n = new Uint8Array(t);
        return r.reduce((e, r) => (n.set(r, e), e + r.length), 0), i(n);
      }
      function u(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const l = "0123456789abcdef";
      function h(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = l[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          o(e))
        )
          return e.toHexString();
        if (u(e))
          return (
            e.length % 2 &&
              ("left" === r.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === r.hexPad
                ? (e += "0")
                : n.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (a(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += l[(240 & n) >> 4] + l[15 & n];
          }
          return r;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
    },
  },
]);
