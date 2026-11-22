"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [3069],
  {
    101: (e, r, t) => {
      t.d(r, { S: () => s });
      var n = t(12379),
        i = t.n(n),
        o = t(70148);
      function s(e) {
        return "0x" + i().keccak_256((0, o.k9)(e));
      }
    },
    2239: (e, r, t) => {
      t.d(r, { dz: () => o, H5: () => c, YW: () => l, dg: () => h });
      var n = t(70148);
      const i = new (t(50227).Vy)("strings/5.8.0");
      var o, s;
      function a(e, r, t, n, i) {
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
      })(o || (o = {})),
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
        error: function (e, r, t, n, o) {
          return i.throwArgumentError(
            `invalid codepoint at offset ${r}; ${e}`,
            "bytes",
            t
          );
        },
        ignore: a,
        replace: function (e, r, t, n, i) {
          return e === s.OVERLONG
            ? (n.push(i), 0)
            : (n.push(65533), a(e, r, t));
        },
      });
      function u(e, r) {
        null == r && (r = f.error), (e = (0, n.k9)(e));
        const t = [];
        let i = 0;
        for (; i < e.length; ) {
          const n = e[i++];
          if (n >> 7 === 0) {
            t.push(n);
            continue;
          }
          let o = null,
            a = null;
          if (192 === (224 & n)) (o = 1), (a = 127);
          else if (224 === (240 & n)) (o = 2), (a = 2047);
          else {
            if (240 !== (248 & n)) {
              i += r(
                128 === (192 & n) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX,
                i - 1,
                e,
                t
              );
              continue;
            }
            (o = 3), (a = 65535);
          }
          if (i - 1 + o >= e.length) {
            i += r(s.OVERRUN, i - 1, e, t);
            continue;
          }
          let f = n & ((1 << (8 - o - 1)) - 1);
          for (let u = 0; u < o; u++) {
            let n = e[i];
            if (128 != (192 & n)) {
              (i += r(s.MISSING_CONTINUE, i, e, t)), (f = null);
              break;
            }
            (f = (f << 6) | (63 & n)), i++;
          }
          null !== f &&
            (f > 1114111
              ? (i += r(s.OUT_OF_RANGE, i - 1 - o, e, t, f))
              : f >= 55296 && f <= 57343
              ? (i += r(s.UTF16_SURROGATE, i - 1 - o, e, t, f))
              : f <= a
              ? (i += r(s.OVERLONG, i - 1 - o, e, t, f))
              : t.push(f));
        }
        return t;
      }
      function l(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : o.current;
        r != o.current && (i.checkNormalize(), (e = e.normalize(r)));
        let t = [];
        for (let n = 0; n < e.length; n++) {
          const r = e.charCodeAt(n);
          if (r < 128) t.push(r);
          else if (r < 2048) t.push((r >> 6) | 192), t.push((63 & r) | 128);
          else if (55296 == (64512 & r)) {
            n++;
            const i = e.charCodeAt(n);
            if (n >= e.length || 56320 !== (64512 & i))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & r) << 10) + (1023 & i);
            t.push((o >> 18) | 240),
              t.push(((o >> 12) & 63) | 128),
              t.push(((o >> 6) & 63) | 128),
              t.push((63 & o) | 128);
          } else
            t.push((r >> 12) | 224),
              t.push(((r >> 6) & 63) | 128),
              t.push((63 & r) | 128);
        }
        return (0, n.k9)(t);
      }
      function c(e) {
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
      function h(e) {
        return u(
          l(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.current
          )
        );
      }
    },
    7080: (e, r, t) => {
      t.d(r, { r: () => n });
      const n = "hash/5.6.1";
    },
    8688: (e, r, t) => {
      t.d(r, {
        k9: () => f,
        xW: () => u,
        cm: () => d,
        Ab: () => p,
        bj: () => g,
        c$: () => h,
        aY: () => a,
        Lo: () => l,
        Pc: () => m,
      });
      const n = new (t(77247).Vy)("bytes/5.8.0");
      function i(e) {
        return !!e.toHexString;
      }
      function o(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(e, r)));
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
          return 0 === r.length && r.push(0), o(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e) && (e = e.toHexString()),
          l(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          const i = [];
          for (let e = 0; e < t.length; e += 2)
            i.push(parseInt(t.substring(e, e + 2), 16));
          return o(new Uint8Array(i));
        }
        return a(e)
          ? o(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function u(e) {
        const r = e.map((e) => f(e)),
          t = r.reduce((e, r) => e + r.length, 0),
          n = new Uint8Array(t);
        return r.reduce((e, r) => (n.set(r, e), e + r.length), 0), o(n);
      }
      function l(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const c = "0123456789abcdef";
      function h(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = c[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e))
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
        if (a(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += c[(240 & n) >> 4] + c[15 & n];
          }
          return r;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
      function d(e) {
        if ("string" !== typeof e) e = h(e);
        else if (!l(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function p(e, r, t) {
        return (
          "string" !== typeof e
            ? (e = h(e))
            : (!l(e) || e.length % 2) &&
              n.throwArgumentError("invalid hexData", "value", e),
          (r = 2 + 2 * r),
          null != t ? "0x" + e.substring(r, 2 + 2 * t) : "0x" + e.substring(r)
        );
      }
      function g(e, r) {
        for (
          "string" !== typeof e
            ? (e = h(e))
            : l(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * r + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * r + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
      function m(e) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if ((l((t = e)) && !(t.length % 2)) || a(t)) {
          let t = f(e);
          64 === t.length
            ? ((r.v = 27 + (t[32] >> 7)),
              (t[32] &= 127),
              (r.r = h(t.slice(0, 32))),
              (r.s = h(t.slice(32, 64))))
            : 65 === t.length
            ? ((r.r = h(t.slice(0, 32))),
              (r.s = h(t.slice(32, 64))),
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
            (r._vs = h(t.slice(32, 64)));
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
              (e = f(e)).length > r &&
                n.throwArgumentError(
                  "value out of range",
                  "value",
                  arguments[0]
                );
              const t = new Uint8Array(r);
              return t.set(e, r - e.length), o(t);
            })(f(r._vs), 32);
            r._vs = h(t);
            const i = t[0] >= 128 ? 1 : 0;
            null == r.recoveryParam
              ? (r.recoveryParam = i)
              : r.recoveryParam !== i &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e
                ),
              (t[0] &= 127);
            const s = h(t);
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
            ? (r.r = g(r.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e
              ),
            null != r.s && l(r.s)
              ? (r.s = g(r.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e
                );
          const t = f(r.s);
          t[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", e),
            r.recoveryParam && (t[0] |= 128);
          const i = h(t);
          r._vs &&
            (l(r._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", e),
            (r._vs = g(r._vs, 32))),
            null == r._vs
              ? (r._vs = i)
              : r._vs !== i &&
                n.throwArgumentError(
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
    },
    11968: (e, r, t) => {
      t.d(r, { A: () => a });
      var n = t(70148),
        i = t(101),
        o = t(2239);
      const s = "\x19Ethereum Signed Message:\n";
      function a(e) {
        return (
          "string" === typeof e && (e = (0, o.YW)(e)),
          (0, i.S)((0, n.xW)([(0, o.YW)(s), (0, o.YW)(String(e.length)), e]))
        );
      }
    },
    12926: (e, r, t) => {
      t.d(r, {
        Fo: () => ke,
        jb: () => Ue,
        VF: () => Ge,
        LL: () => ze,
        rj: () => We,
        x2: () => Le,
        nl: () => Be,
      });
      var n = t(8688),
        i = t(77247);
      new i.Vy("properties/5.8.0");
      function o(e, r, t) {
        Object.defineProperty(e, r, { enumerable: !0, value: t, writable: !1 });
      }
      class s {
        constructor(e) {
          o(this, "alphabet", e),
            o(this, "base", e.length),
            o(this, "_alphabetMap", {}),
            o(this, "_leader", e.charAt(0));
          for (let r = 0; r < e.length; r++) this._alphabetMap[e.charAt(r)] = r;
        }
        encode(e) {
          let r = (0, n.k9)(e);
          if (0 === r.length) return "";
          let t = [0];
          for (let n = 0; n < r.length; ++n) {
            let e = r[n];
            for (let r = 0; r < t.length; ++r)
              (e += t[r] << 8),
                (t[r] = e % this.base),
                (e = (e / this.base) | 0);
            for (; e > 0; ) t.push(e % this.base), (e = (e / this.base) | 0);
          }
          let i = "";
          for (let n = 0; 0 === r[n] && n < r.length - 1; ++n)
            i += this._leader;
          for (let n = t.length - 1; n >= 0; --n) i += this.alphabet[t[n]];
          return i;
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
            let i = n;
            for (let e = 0; e < r.length; ++e)
              (i += r[e] * this.base), (r[e] = 255 & i), (i >>= 8);
            for (; i > 0; ) r.push(255 & i), (i >>= 8);
          }
          for (let t = 0; e[t] === this._leader && t < e.length - 1; ++t)
            r.push(0);
          return (0, n.k9)(new Uint8Array(r.reverse()));
        }
      }
      new s("abcdefghijklmnopqrstuvwxyz234567");
      const a = new s(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
      var f = t(3789);
      const u = new i.Vy("strings/5.8.0");
      var l, c;
      function h(e, r, t, n, i) {
        if (e === c.BAD_PREFIX || e === c.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = r + 1; n < t.length && t[n] >> 6 === 2; n++) e++;
          return e;
        }
        return e === c.OVERRUN ? t.length - r - 1 : 0;
      }
      !(function (e) {
        (e.current = ""),
          (e.NFC = "NFC"),
          (e.NFD = "NFD"),
          (e.NFKC = "NFKC"),
          (e.NFKD = "NFKD");
      })(l || (l = {})),
        (function (e) {
          (e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (e.BAD_PREFIX = "bad codepoint prefix"),
            (e.OVERRUN = "string overrun"),
            (e.MISSING_CONTINUE = "missing continuation byte"),
            (e.OUT_OF_RANGE = "out of UTF-8 range"),
            (e.UTF16_SURROGATE = "UTF-16 surrogate"),
            (e.OVERLONG = "overlong representation");
        })(c || (c = {}));
      Object.freeze({
        error: function (e, r, t, n, i) {
          return u.throwArgumentError(
            `invalid codepoint at offset ${r}; ${e}`,
            "bytes",
            t
          );
        },
        ignore: h,
        replace: function (e, r, t, n, i) {
          return e === c.OVERLONG
            ? (n.push(i), 0)
            : (n.push(65533), h(e, r, t));
        },
      });
      function d(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : l.current;
        r != l.current && (u.checkNormalize(), (e = e.normalize(r)));
        let t = [];
        for (let n = 0; n < e.length; n++) {
          const r = e.charCodeAt(n);
          if (r < 128) t.push(r);
          else if (r < 2048) t.push((r >> 6) | 192), t.push((63 & r) | 128);
          else if (55296 == (64512 & r)) {
            n++;
            const i = e.charCodeAt(n);
            if (n >= e.length || 56320 !== (64512 & i))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & r) << 10) + (1023 & i);
            t.push((o >> 18) | 240),
              t.push(((o >> 12) & 63) | 128),
              t.push(((o >> 6) & 63) | 128),
              t.push((63 & o) | 128);
          } else
            t.push((r >> 12) | 224),
              t.push(((r >> 6) & 63) | 128),
              t.push((63 & r) | 128);
        }
        return (0, n.k9)(t);
      }
      var p,
        g = t(16143),
        m = t.n(g);
      !(function (e) {
        (e.sha256 = "sha256"), (e.sha512 = "sha512");
      })(p || (p = {}));
      const y = new i.Vy("sha2/5.8.0");
      function b(e) {
        return (
          "0x" +
          m()
            .sha256()
            .update((0, n.k9)(e))
            .digest("hex")
        );
      }
      function E(e, r, t) {
        return (
          p[e] ||
            y.throwError(
              "unsupported algorithm " + e,
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: e }
            ),
          "0x" +
            m()
              .hmac(m()[e], (0, n.k9)(r))
              .update((0, n.k9)(t))
              .digest("hex")
        );
      }
      var v = t(68571),
        S = t.n(v);
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof t.g
        ? t.g
        : "undefined" !== typeof self && self;
      function A(e, r, t) {
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
      var w = N;
      function N(e, r) {
        if (!e) throw new Error(r || "Assertion failed");
      }
      N.equal = function (e, r, t) {
        if (e != r) throw new Error(t || "Assertion failed: " + e + " != " + r);
      };
      var I = A(function (e, r) {
          var t = r;
          function n(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function i(e) {
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
                var i = e.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? t.push(o, s) : t.push(s);
              }
            return t;
          }),
            (t.zero2 = n),
            (t.toHex = i),
            (t.encode = function (e, r) {
              return "hex" === r ? i(e) : e;
            });
        }),
        R = A(function (e, r) {
          var t = r;
          (t.assert = w),
            (t.toArray = I.toArray),
            (t.zero2 = I.zero2),
            (t.toHex = I.toHex),
            (t.encode = I.encode),
            (t.getNAF = function (e, r, t) {
              var n,
                i = new Array(Math.max(e.bitLength(), t) + 1);
              for (n = 0; n < i.length; n += 1) i[n] = 0;
              var o = 1 << (r + 1),
                s = e.clone();
              for (n = 0; n < i.length; n++) {
                var a,
                  f = s.andln(o - 1);
                s.isOdd()
                  ? ((a = f > (o >> 1) - 1 ? (o >> 1) - f : f), s.isubn(a))
                  : (a = 0),
                  (i[n] = a),
                  s.iushrn(1);
              }
              return i;
            }),
            (t.getJSF = function (e, r) {
              var t = [[], []];
              (e = e.clone()), (r = r.clone());
              for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || r.cmpn(-o) > 0; ) {
                var s,
                  a,
                  f = (e.andln(3) + i) & 3,
                  u = (r.andln(3) + o) & 3;
                3 === f && (f = -1),
                  3 === u && (u = -1),
                  (s =
                    0 === (1 & f)
                      ? 0
                      : (3 !== (n = (e.andln(7) + i) & 7) && 5 !== n) || 2 !== u
                      ? f
                      : -f),
                  t[0].push(s),
                  (a =
                    0 === (1 & u)
                      ? 0
                      : (3 !== (n = (r.andln(7) + o) & 7) && 5 !== n) || 2 !== f
                      ? u
                      : -u),
                  t[1].push(a),
                  2 * i === s + 1 && (i = 1 - i),
                  2 * o === a + 1 && (o = 1 - o),
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
        C = R.getNAF,
        P = R.getJSF,
        T = R.assert;
      function _(e, r) {
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
      var F = _;
      function x(e, r) {
        (this.curve = e), (this.type = r), (this.precomputed = null);
      }
      (_.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (_.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (_.prototype._fixedNafMul = function (e, r) {
          T(e.precomputed);
          var t = e._getDoubles(),
            n = C(r, 1, this._bitLength),
            i = (1 << (t.step + 1)) - (t.step % 2 === 0 ? 2 : 1);
          i /= 3;
          var o,
            s,
            a = [];
          for (o = 0; o < n.length; o += t.step) {
            s = 0;
            for (var f = o + t.step - 1; f >= o; f--) s = (s << 1) + n[f];
            a.push(s);
          }
          for (
            var u = this.jpoint(null, null, null),
              l = this.jpoint(null, null, null),
              c = i;
            c > 0;
            c--
          ) {
            for (o = 0; o < a.length; o++)
              (s = a[o]) === c
                ? (l = l.mixedAdd(t.points[o]))
                : s === -c && (l = l.mixedAdd(t.points[o].neg()));
            u = u.add(l);
          }
          return u.toP();
        }),
        (_.prototype._wnafMul = function (e, r) {
          var t = 4,
            n = e._getNAFPoints(t);
          t = n.wnd;
          for (
            var i = n.points,
              o = C(r, t, this._bitLength),
              s = this.jpoint(null, null, null),
              a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var f = 0; a >= 0 && 0 === o[a]; a--) f++;
            if ((a >= 0 && f++, (s = s.dblp(f)), a < 0)) break;
            var u = o[a];
            T(0 !== u),
              (s =
                "affine" === e.type
                  ? u > 0
                    ? s.mixedAdd(i[(u - 1) >> 1])
                    : s.mixedAdd(i[(-u - 1) >> 1].neg())
                  : u > 0
                  ? s.add(i[(u - 1) >> 1])
                  : s.add(i[(-u - 1) >> 1].neg()));
          }
          return "affine" === e.type ? s.toP() : s;
        }),
        (_.prototype._wnafMulAdd = function (e, r, t, n, i) {
          var o,
            s,
            a,
            f = this._wnafT1,
            u = this._wnafT2,
            l = this._wnafT3,
            c = 0;
          for (o = 0; o < n; o++) {
            var h = (a = r[o])._getNAFPoints(e);
            (f[o] = h.wnd), (u[o] = h.points);
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var d = o - 1,
              p = o;
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
                y = P(t[d], t[p]);
              for (
                c = Math.max(y[0].length, c),
                  l[d] = new Array(c),
                  l[p] = new Array(c),
                  s = 0;
                s < c;
                s++
              ) {
                var b = 0 | y[0][s],
                  E = 0 | y[1][s];
                (l[d][s] = m[3 * (b + 1) + (E + 1)]), (l[p][s] = 0), (u[d] = g);
              }
            } else
              (l[d] = C(t[d], f[d], this._bitLength)),
                (l[p] = C(t[p], f[p], this._bitLength)),
                (c = Math.max(l[d].length, c)),
                (c = Math.max(l[p].length, c));
          }
          var v = this.jpoint(null, null, null),
            S = this._wnafT4;
          for (o = c; o >= 0; o--) {
            for (var A = 0; o >= 0; ) {
              var w = !0;
              for (s = 0; s < n; s++)
                (S[s] = 0 | l[s][o]), 0 !== S[s] && (w = !1);
              if (!w) break;
              A++, o--;
            }
            if ((o >= 0 && A++, (v = v.dblp(A)), o < 0)) break;
            for (s = 0; s < n; s++) {
              var N = S[s];
              0 !== N &&
                (N > 0
                  ? (a = u[s][(N - 1) >> 1])
                  : N < 0 && (a = u[s][(-N - 1) >> 1].neg()),
                (v = "affine" === a.type ? v.mixedAdd(a) : v.add(a)));
            }
          }
          for (o = 0; o < n; o++) u[o] = null;
          return i ? v : v.toP();
        }),
        (_.BasePoint = x),
        (x.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (x.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (_.prototype.decodePoint = function (e, r) {
          e = R.toArray(e, r);
          var t = this.p.byteLength();
          if (
            (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
            e.length - 1 === 2 * t
          )
            return (
              6 === e[0]
                ? T(e[e.length - 1] % 2 === 0)
                : 7 === e[0] && T(e[e.length - 1] % 2 === 1),
              this.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === t)
            return this.pointFromX(e.slice(1, 1 + t), 3 === e[0]);
          throw new Error("Unknown point format");
        }),
        (x.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (x.prototype._encode = function (e) {
          var r = this.curve.p.byteLength(),
            t = this.getX().toArray("be", r);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(t)
            : [4].concat(t, this.getY().toArray("be", r));
        }),
        (x.prototype.encode = function (e, r) {
          return R.encode(this._encode(r), e);
        }),
        (x.prototype.precompute = function (e) {
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
        (x.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var r = this.precomputed.doubles;
          return (
            !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
          );
        }),
        (x.prototype._getDoubles = function (e, r) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var t = [this], n = this, i = 0; i < r; i += e) {
            for (var o = 0; o < e; o++) n = n.dbl();
            t.push(n);
          }
          return { step: e, points: t };
        }),
        (x.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var r = [this],
              t = (1 << e) - 1,
              n = 1 === t ? null : this.dbl(),
              i = 1;
            i < t;
            i++
          )
            r[i] = r[i - 1].add(n);
          return { wnd: e, points: r };
        }),
        (x.prototype._getBeta = function () {
          return null;
        }),
        (x.prototype.dblp = function (e) {
          for (var r = this, t = 0; t < e; t++) r = r.dbl();
          return r;
        });
      var O = A(function (e) {
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
        M = R.assert;
      function D(e) {
        F.call(this, "short", e),
          (this.a = new (S())(e.a, 16).toRed(this.red)),
          (this.b = new (S())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      O(D, F);
      var U = D;
      function k(e, r, t, n) {
        F.BasePoint.call(this, e, "affine"),
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
      function B(e, r, t, n) {
        F.BasePoint.call(this, e, "jacobian"),
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
      (D.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var r, t;
          if (e.beta) r = new (S())(e.beta, 16).toRed(this.red);
          else {
            var n = this._getEndoRoots(this.p);
            r = (r = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (e.lambda) t = new (S())(e.lambda, 16);
          else {
            var i = this._getEndoRoots(this.n);
            0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(r))
              ? (t = i[0])
              : ((t = i[1]), M(0 === this.g.mul(t).x.cmp(this.g.x.redMul(r))));
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
        (D.prototype._getEndoRoots = function (e) {
          var r = e === this.p ? this.red : S().mont(e),
            t = new (S())(2).toRed(r).redInvm(),
            n = t.redNeg(),
            i = new (S())(3).toRed(r).redNeg().redSqrt().redMul(t);
          return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()];
        }),
        (D.prototype._getEndoBasis = function (e) {
          for (
            var r,
              t,
              n,
              i,
              o,
              s,
              a,
              f,
              u,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              c = e,
              h = this.n.clone(),
              d = new (S())(1),
              p = new (S())(0),
              g = new (S())(0),
              m = new (S())(1),
              y = 0;
            0 !== c.cmpn(0);

          ) {
            var b = h.div(c);
            (f = h.sub(b.mul(c))), (u = g.sub(b.mul(d)));
            var E = m.sub(b.mul(p));
            if (!n && f.cmp(l) < 0)
              (r = a.neg()), (t = d), (n = f.neg()), (i = u);
            else if (n && 2 === ++y) break;
            (a = f), (h = c), (c = f), (g = d), (d = u), (m = p), (p = E);
          }
          (o = f.neg()), (s = u);
          var v = n.sqr().add(i.sqr());
          return (
            o.sqr().add(s.sqr()).cmp(v) >= 0 && ((o = r), (s = t)),
            n.negative && ((n = n.neg()), (i = i.neg())),
            o.negative && ((o = o.neg()), (s = s.neg())),
            [
              { a: n, b: i },
              { a: o, b: s },
            ]
          );
        }),
        (D.prototype._endoSplit = function (e) {
          var r = this.endo.basis,
            t = r[0],
            n = r[1],
            i = n.b.mul(e).divRound(this.n),
            o = t.b.neg().mul(e).divRound(this.n),
            s = i.mul(t.a),
            a = o.mul(n.a),
            f = i.mul(t.b),
            u = o.mul(n.b);
          return { k1: e.sub(s).sub(a), k2: f.add(u).neg() };
        }),
        (D.prototype.pointFromX = function (e, r) {
          (e = new (S())(e, 16)).red || (e = e.toRed(this.red));
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
        (D.prototype.validate = function (e) {
          if (e.inf) return !0;
          var r = e.x,
            t = e.y,
            n = this.a.redMul(r),
            i = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
          return 0 === t.redSqr().redISub(i).cmpn(0);
        }),
        (D.prototype._endoWnafMulAdd = function (e, r, t) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < e.length;
            o++
          ) {
            var s = this._endoSplit(r[o]),
              a = e[o],
              f = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (f = f.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = f),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * o, t), l = 0;
            l < 2 * o;
            l++
          )
            (n[l] = null), (i[l] = null);
          return u;
        }),
        O(k, F.BasePoint),
        (D.prototype.point = function (e, r, t) {
          return new k(this, e, r, t);
        }),
        (D.prototype.pointFromJSON = function (e, r) {
          return k.fromJSON(this, e, r);
        }),
        (k.prototype._getBeta = function () {
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
        (k.prototype.toJSON = function () {
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
        (k.fromJSON = function (e, r, t) {
          "string" === typeof r && (r = JSON.parse(r));
          var n = e.point(r[0], r[1], t);
          if (!r[2]) return n;
          function i(r) {
            return e.point(r[0], r[1], t);
          }
          var o = r[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (k.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (k.prototype.isInfinity = function () {
          return this.inf;
        }),
        (k.prototype.add = function (e) {
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
        (k.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var r = this.curve.a,
            t = this.x.redSqr(),
            n = e.redInvm(),
            i = t.redAdd(t).redIAdd(t).redIAdd(r).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (k.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (k.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (k.prototype.mul = function (e) {
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
        (k.prototype.mulAdd = function (e, r, t) {
          var n = [this, r],
            i = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (k.prototype.jmulAdd = function (e, r, t) {
          var n = [this, r],
            i = [e, t];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (k.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (k.prototype.neg = function (e) {
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
        (k.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        O(B, F.BasePoint),
        (D.prototype.jpoint = function (e, r, t) {
          return new B(this, e, r, t);
        }),
        (B.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            r = e.redSqr(),
            t = this.x.redMul(r),
            n = this.y.redMul(r).redMul(e);
          return this.curve.point(t, n);
        }),
        (B.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (B.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var r = e.z.redSqr(),
            t = this.z.redSqr(),
            n = this.x.redMul(r),
            i = e.x.redMul(t),
            o = this.y.redMul(r.redMul(e.z)),
            s = e.y.redMul(t.redMul(this.z)),
            a = n.redSub(i),
            f = o.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = a.redSqr(),
            l = u.redMul(a),
            c = n.redMul(u),
            h = f.redSqr().redIAdd(l).redISub(c).redISub(c),
            d = f.redMul(c.redISub(h)).redISub(o.redMul(l)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(h, d, p);
        }),
        (B.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var r = this.z.redSqr(),
            t = this.x,
            n = e.x.redMul(r),
            i = this.y,
            o = e.y.redMul(r).redMul(this.z),
            s = t.redSub(n),
            a = i.redSub(o);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = s.redSqr(),
            u = f.redMul(s),
            l = t.redMul(f),
            c = a.redSqr().redIAdd(u).redISub(l).redISub(l),
            h = a.redMul(l.redISub(c)).redISub(i.redMul(u)),
            d = this.z.redMul(s);
          return this.curve.jpoint(c, h, d);
        }),
        (B.prototype.dblp = function (e) {
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
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            f = a.redSqr().redSqr(),
            u = s.redAdd(s);
          for (r = 0; r < e; r++) {
            var l = o.redSqr(),
              c = u.redSqr(),
              h = c.redSqr(),
              d = l.redAdd(l).redIAdd(l).redIAdd(n.redMul(f)),
              p = o.redMul(c),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(h);
            var b = u.redMul(a);
            r + 1 < e && (f = f.redMul(h)), (o = g), (a = b), (u = y);
          }
          return this.curve.jpoint(o, u.redMul(i), a);
        }),
        (B.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (B.prototype._zeroDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              f = a.redSqr().redISub(s).redISub(s),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = f),
              (r = a.redMul(s.redISub(f)).redISub(u)),
              (t = this.y.redAdd(this.y));
          } else {
            var l = this.x.redSqr(),
              c = this.y.redSqr(),
              h = c.redSqr(),
              d = this.x.redAdd(c).redSqr().redISub(l).redISub(h);
            d = d.redIAdd(d);
            var p = l.redAdd(l).redIAdd(l),
              g = p.redSqr(),
              m = h.redIAdd(h);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = g.redISub(d).redISub(d)),
              (r = p.redMul(d.redISub(e)).redISub(m)),
              (t = (t = this.y.redMul(this.z)).redIAdd(t));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (B.prototype._threeDbl = function () {
          var e, r, t;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              f = a.redSqr().redISub(s).redISub(s);
            e = f;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (r = a.redMul(s.redISub(f)).redISub(u)),
              (t = this.y.redAdd(this.y));
          } else {
            var l = this.z.redSqr(),
              c = this.y.redSqr(),
              h = this.x.redMul(c),
              d = this.x.redSub(l).redMul(this.x.redAdd(l));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = d.redSqr().redISub(g)),
              (t = this.y.redAdd(this.z).redSqr().redISub(c).redISub(l));
            var m = c.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (r = d.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, r, t);
        }),
        (B.prototype._dbl = function () {
          var e = this.curve.a,
            r = this.x,
            t = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = r.redSqr(),
            s = t.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            f = r.redAdd(r),
            u = (f = f.redIAdd(f)).redMul(s),
            l = a.redSqr().redISub(u.redAdd(u)),
            c = u.redISub(l),
            h = s.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = a.redMul(c).redISub(h),
            p = t.redAdd(t).redMul(n);
          return this.curve.jpoint(l, d, p);
        }),
        (B.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            t = this.z.redSqr(),
            n = r.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            s = this.x.redAdd(r).redSqr().redISub(e).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o
            )).redSqr(),
            f = n.redIAdd(n);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(f),
            l = r.redMul(u);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var c = this.x.redMul(a).redISub(l);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var h = this.y.redMul(u.redMul(f.redISub(u)).redISub(s.redMul(a)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = this.z.redAdd(s).redSqr().redISub(t).redISub(a);
          return this.curve.jpoint(c, h, d);
        }),
        (B.prototype.mul = function (e, r) {
          return (e = new (S())(e, r)), this.curve._wnafMul(this, e);
        }),
        (B.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var r = this.z.redSqr(),
            t = e.z.redSqr();
          if (0 !== this.x.redMul(t).redISub(e.x.redMul(r)).cmpn(0)) return !1;
          var n = r.redMul(this.z),
            i = t.redMul(e.z);
          return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (B.prototype.eqXToP = function (e) {
          var r = this.z.redSqr(),
            t = e.toRed(this.curve.red).redMul(r);
          if (0 === this.x.cmp(t)) return !0;
          for (var n = e.clone(), i = this.curve.redN.redMul(r); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(i), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (B.prototype.inspect = function () {
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
        (B.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var L = A(function (e, r) {
          var t = r;
          (t.base = F), (t.short = U), (t.mont = null), (t.edwards = null);
        }),
        G = A(function (e, r) {
          var t,
            n = r,
            i = R.assert;
          function o(e) {
            "short" === e.type
              ? (this.curve = new L.short(e))
              : "edwards" === e.type
              ? (this.curve = new L.edwards(e))
              : (this.curve = new L.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              i(this.g.validate(), "Invalid curve"),
              i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function s(e, r) {
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var t = new o(r);
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
          (n.PresetCurve = o),
            s("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: m().sha256,
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
              hash: m().sha256,
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
              hash: m().sha256,
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
              hash: m().sha384,
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
              hash: m().sha512,
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
              hash: m().sha256,
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
              hash: m().sha256,
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
            hash: m().sha256,
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
      function W(e) {
        if (!(this instanceof W)) return new W(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var r = I.toArray(e.entropy, e.entropyEnc || "hex"),
          t = I.toArray(e.nonce, e.nonceEnc || "hex"),
          n = I.toArray(e.pers, e.persEnc || "hex");
        w(
          r.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(r, t, n);
      }
      var z = W;
      (W.prototype._init = function (e, r, t) {
        var n = e.concat(r).concat(t);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++)
          (this.K[i] = 0), (this.V[i] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (W.prototype._hmac = function () {
          return new (m().hmac)(this.hash, this.K);
        }),
        (W.prototype._update = function (e) {
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
        (W.prototype.reseed = function (e, r, t, n) {
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            (e = I.toArray(e, r)),
            (t = I.toArray(t, n)),
            w(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(t || [])),
            (this._reseed = 1);
        }),
        (W.prototype.generate = function (e, r, t, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof r && ((n = t), (t = r), (r = null)),
            t && ((t = I.toArray(t, n || "hex")), this._update(t));
          for (var i = []; i.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (i = i.concat(this.V));
          var o = i.slice(0, e);
          return this._update(t), this._reseed++, I.encode(o, r);
        });
      var V = R.assert;
      function j(e, r) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          r.priv && this._importPrivate(r.priv, r.privEnc),
          r.pub && this._importPublic(r.pub, r.pubEnc);
      }
      var K = j;
      (j.fromPublic = function (e, r, t) {
        return r instanceof j ? r : new j(e, { pub: r, pubEnc: t });
      }),
        (j.fromPrivate = function (e, r, t) {
          return r instanceof j ? r : new j(e, { priv: r, privEnc: t });
        }),
        (j.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (j.prototype.getPublic = function (e, r) {
          return (
            "string" === typeof e && ((r = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            r ? this.pub.encode(r, e) : this.pub
          );
        }),
        (j.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (j.prototype._importPrivate = function (e, r) {
          (this.priv = new (S())(e, r || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (j.prototype._importPublic = function (e, r) {
          if (e.x || e.y)
            return (
              "mont" === this.ec.curve.type
                ? V(e.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  V(e.x && e.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, r);
        }),
        (j.prototype.derive = function (e) {
          return (
            e.validate() || V(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (j.prototype.sign = function (e, r, t) {
          return this.ec.sign(e, this, r, t);
        }),
        (j.prototype.verify = function (e, r, t) {
          return this.ec.verify(e, r, this, void 0, t);
        }),
        (j.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var q = R.assert;
      function H(e, r) {
        if (e instanceof H) return e;
        this._importDER(e, r) ||
          (q(e.r && e.s, "Signature without r or s"),
          (this.r = new (S())(e.r, 16)),
          (this.s = new (S())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      var $ = H;
      function J() {
        this.place = 0;
      }
      function X(e, r) {
        var t = e[r.place++];
        if (!(128 & t)) return t;
        var n = 15 & t;
        if (0 === n || n > 4) return !1;
        if (0 === e[r.place]) return !1;
        for (var i = 0, o = 0, s = r.place; o < n; o++, s++)
          (i <<= 8), (i |= e[s]), (i >>>= 0);
        return !(i <= 127) && ((r.place = s), i);
      }
      function Y(e) {
        for (var r = 0, t = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < t; )
          r++;
        return 0 === r ? e : e.slice(r);
      }
      function Q(e, r) {
        if (r < 128) e.push(r);
        else {
          var t = 1 + ((Math.log(r) / Math.LN2) >>> 3);
          for (e.push(128 | t); --t; ) e.push((r >>> (t << 3)) & 255);
          e.push(r);
        }
      }
      (H.prototype._importDER = function (e, r) {
        e = R.toArray(e, r);
        var t = new J();
        if (48 !== e[t.place++]) return !1;
        var n = X(e, t);
        if (!1 === n) return !1;
        if (n + t.place !== e.length) return !1;
        if (2 !== e[t.place++]) return !1;
        var i = X(e, t);
        if (!1 === i) return !1;
        if (0 !== (128 & e[t.place])) return !1;
        var o = e.slice(t.place, i + t.place);
        if (((t.place += i), 2 !== e[t.place++])) return !1;
        var s = X(e, t);
        if (!1 === s) return !1;
        if (e.length !== s + t.place) return !1;
        if (0 !== (128 & e[t.place])) return !1;
        var a = e.slice(t.place, s + t.place);
        if (0 === o[0]) {
          if (!(128 & o[1])) return !1;
          o = o.slice(1);
        }
        if (0 === a[0]) {
          if (!(128 & a[1])) return !1;
          a = a.slice(1);
        }
        return (
          (this.r = new (S())(o)),
          (this.s = new (S())(a)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (H.prototype.toDER = function (e) {
          var r = this.r.toArray(),
            t = this.s.toArray();
          for (
            128 & r[0] && (r = [0].concat(r)),
              128 & t[0] && (t = [0].concat(t)),
              r = Y(r),
              t = Y(t);
            !t[0] && !(128 & t[1]);

          )
            t = t.slice(1);
          var n = [2];
          Q(n, r.length), (n = n.concat(r)).push(2), Q(n, t.length);
          var i = n.concat(t),
            o = [48];
          return Q(o, i.length), (o = o.concat(i)), R.encode(o, e);
        });
      var Z = function () {
          throw new Error("unsupported");
        },
        ee = R.assert;
      function re(e) {
        if (!(this instanceof re)) return new re(e);
        "string" === typeof e &&
          (ee(Object.prototype.hasOwnProperty.call(G, e), "Unknown curve " + e),
          (e = G[e])),
          e instanceof G.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      var te = re;
      (re.prototype.keyPair = function (e) {
        return new K(this, e);
      }),
        (re.prototype.keyFromPrivate = function (e, r) {
          return K.fromPrivate(this, e, r);
        }),
        (re.prototype.keyFromPublic = function (e, r) {
          return K.fromPublic(this, e, r);
        }),
        (re.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var r = new z({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || Z(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              t = this.n.byteLength(),
              n = this.n.sub(new (S())(2));
            ;

          ) {
            var i = new (S())(r.generate(t));
            if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i);
          }
        }),
        (re.prototype._truncateToN = function (e, r, t) {
          var n;
          if (S().isBN(e) || "number" === typeof e)
            n = (e = new (S())(e, 16)).byteLength();
          else if ("object" === typeof e)
            (n = e.length), (e = new (S())(e, 16));
          else {
            var i = e.toString();
            (n = (i.length + 1) >>> 1), (e = new (S())(i, 16));
          }
          "number" !== typeof t && (t = 8 * n);
          var o = t - this.n.bitLength();
          return (
            o > 0 && (e = e.ushrn(o)),
            !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (re.prototype.sign = function (e, r, t, n) {
          if (
            ("object" === typeof t && ((n = t), (t = null)),
            n || (n = {}),
            "string" !== typeof e && "number" !== typeof e && !S().isBN(e))
          ) {
            ee(
              "object" === typeof e && e && "number" === typeof e.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              ee(e.length >>> 0 === e.length);
            for (var i = 0; i < e.length; i++) ee((255 & e[i]) === e[i]);
          }
          (r = this.keyFromPrivate(r, t)),
            (e = this._truncateToN(e, !1, n.msgBitLength)),
            ee(!e.isNeg(), "Can not sign a negative message");
          var o = this.n.byteLength(),
            s = r.getPrivate().toArray("be", o),
            a = e.toArray("be", o);
          ee(new (S())(a).eq(e), "Can not sign message");
          for (
            var f = new z({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              u = this.n.sub(new (S())(1)),
              l = 0;
            ;
            l++
          ) {
            var c = n.k ? n.k(l) : new (S())(f.generate(this.n.byteLength()));
            if (
              !((c = this._truncateToN(c, !0)).cmpn(1) <= 0 || c.cmp(u) >= 0)
            ) {
              var h = this.g.mul(c);
              if (!h.isInfinity()) {
                var d = h.getX(),
                  p = d.umod(this.n);
                if (0 !== p.cmpn(0)) {
                  var g = c.invm(this.n).mul(p.mul(r.getPrivate()).iadd(e));
                  if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                    var m =
                      (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                    return (
                      n.canonical &&
                        g.cmp(this.nh) > 0 &&
                        ((g = this.n.sub(g)), (m ^= 1)),
                      new $({ r: p, s: g, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (re.prototype.verify = function (e, r, t, n, i) {
          i || (i = {}),
            (e = this._truncateToN(e, !1, i.msgBitLength)),
            (t = this.keyFromPublic(t, n));
          var o = (r = new $(r, "hex")).r,
            s = r.s;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          var a,
            f = s.invm(this.n),
            u = f.mul(e).umod(this.n),
            l = f.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(u, t.getPublic(), l)).isInfinity() &&
                a.eqXToP(o)
            : !(a = this.g.mulAdd(u, t.getPublic(), l)).isInfinity() &&
                0 === a.getX().umod(this.n).cmp(o);
        }),
        (re.prototype.recoverPubKey = function (e, r, t, n) {
          ee((3 & t) === t, "The recovery param is more than two bits"),
            (r = new $(r, n));
          var i = this.n,
            o = new (S())(e),
            s = r.r,
            a = r.s,
            f = 1 & t,
            u = t >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw new Error("Unable to find sencond key candinate");
          s = u
            ? this.curve.pointFromX(s.add(this.curve.n), f)
            : this.curve.pointFromX(s, f);
          var l = r.r.invm(i),
            c = i.sub(o).mul(l).umod(i),
            h = a.mul(l).umod(i);
          return this.g.mulAdd(c, s, h);
        }),
        (re.prototype.getKeyRecoveryParam = function (e, r, t, n) {
          if (null !== (r = new $(r, n)).recoveryParam) return r.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var o;
            try {
              o = this.recoverPubKey(e, r, i);
            } catch (e) {
              continue;
            }
            if (o.eq(t)) return i;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var ne = A(function (e, r) {
        var t = r;
        (t.version = "6.6.1"),
          (t.utils = R),
          (t.rand = function () {
            throw new Error("unsupported");
          }),
          (t.curve = L),
          (t.curves = G),
          (t.ec = te),
          (t.eddsa = null);
      }).ec;
      const ie = new i.Vy("signing-key/5.8.0");
      let oe = null;
      function se() {
        return oe || (oe = new ne("secp256k1")), oe;
      }
      class ae {
        constructor(e) {
          o(this, "curve", "secp256k1"),
            o(this, "privateKey", (0, n.c$)(e)),
            32 !== (0, n.cm)(this.privateKey) &&
              ie.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          const r = se().keyFromPrivate((0, n.k9)(this.privateKey));
          o(this, "publicKey", "0x" + r.getPublic(!1, "hex")),
            o(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")),
            o(this, "_isSigningKey", !0);
        }
        _addPoint(e) {
          const r = se().keyFromPublic((0, n.k9)(this.publicKey)),
            t = se().keyFromPublic((0, n.k9)(e));
          return "0x" + r.pub.add(t.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          const r = se().keyFromPrivate((0, n.k9)(this.privateKey)),
            t = (0, n.k9)(e);
          32 !== t.length &&
            ie.throwArgumentError("bad digest length", "digest", e);
          const i = r.sign(t, { canonical: !0 });
          return (0, n.Pc)({
            recoveryParam: i.recoveryParam,
            r: (0, n.bj)("0x" + i.r.toString(16), 32),
            s: (0, n.bj)("0x" + i.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          const r = se().keyFromPrivate((0, n.k9)(this.privateKey)),
            t = se().keyFromPublic((0, n.k9)(fe(e)));
          return (0, n.bj)("0x" + r.derive(t.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !(!e || !e._isSigningKey);
        }
      }
      function fe(e, r) {
        const t = (0, n.k9)(e);
        if (32 === t.length) {
          const e = new ae(t);
          return r
            ? "0x" + se().keyFromPrivate(t).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === t.length
          ? r
            ? (0, n.c$)(t)
            : "0x" + se().keyFromPublic(t).getPublic(!1, "hex")
          : 65 === t.length
          ? r
            ? "0x" + se().keyFromPublic(t).getPublic(!0, "hex")
            : (0, n.c$)(t)
          : ie.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
      var ue = t(12379),
        le = t.n(ue);
      function ce(e) {
        return "0x" + le().keccak_256((0, n.k9)(e));
      }
      const he = new i.Vy("address/5.8.0");
      function de(e) {
        (0, n.Lo)(e, 20) ||
          he.throwArgumentError("invalid address", "address", e);
        const r = (e = e.toLowerCase()).substring(2).split(""),
          t = new Uint8Array(40);
        for (let n = 0; n < 40; n++) t[n] = r[n].charCodeAt(0);
        const i = (0, n.k9)(ce(t));
        for (let n = 0; n < 40; n += 2)
          i[n >> 1] >> 4 >= 8 && (r[n] = r[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (r[n + 1] = r[n + 1].toUpperCase());
        return "0x" + r.join("");
      }
      const pe = {};
      for (let Ve = 0; Ve < 10; Ve++) pe[String(Ve)] = String(Ve);
      for (let Ve = 0; Ve < 26; Ve++)
        pe[String.fromCharCode(65 + Ve)] = String(10 + Ve);
      const ge = Math.floor(
        ((me = 9007199254740991),
        Math.log10 ? Math.log10(me) : Math.log(me) / Math.LN10)
      );
      var me;
      function ye(e) {
        let r = (e =
          (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00")
          .split("")
          .map((e) => pe[e])
          .join("");
        for (; r.length >= ge; ) {
          let e = r.substring(0, ge);
          r = (parseInt(e, 10) % 97) + r.substring(e.length);
        }
        let t = String(98 - (parseInt(r, 10) % 97));
        for (; t.length < 2; ) t = "0" + t;
        return t;
      }
      function be(e) {
        let r = null;
        if (
          ("string" !== typeof e &&
            he.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== e.substring(0, 2) && (e = "0x" + e),
            (r = de(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              r !== e &&
              he.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            e.substring(2, 4) !== ye(e) &&
              he.throwArgumentError("bad icap checksum", "address", e),
              r = (0, f.Os)(e.substring(4));
            r.length < 40;

          )
            r = "0" + r;
          r = de("0x" + r);
        } else he.throwArgumentError("invalid address", "address", e);
        return r;
      }
      new i.Vy("transactions/5.8.0");
      var Ee;
      !(function (e) {
        (e[(e.legacy = 0)] = "legacy"),
          (e[(e.eip2930 = 1)] = "eip2930"),
          (e[(e.eip1559 = 2)] = "eip1559");
      })(Ee || (Ee = {}));
      function ve(e) {
        const r = fe(e);
        return be((0, n.Ab)(ce((0, n.Ab)(r, 1)), 12));
      }
      const Se = new i.Vy("wordlists/5.8.0");
      class Ae {
        constructor(e) {
          Se.checkAbstract(new.target, Ae), o(this, "locale", e);
        }
        split(e) {
          return e.toLowerCase().split(/ +/g);
        }
        join(e) {
          return e.join(" ");
        }
        static check(e) {
          const r = [];
          for (let t = 0; t < 2048; t++) {
            const n = e.getWord(t);
            if (t !== e.getWordIndex(n)) return "0x";
            r.push(n);
          }
          return ce(d(r.join("\n") + "\n"));
        }
        static register(e, r) {
          r || (r = e.locale);
        }
      }
      let we = null;
      function Ne(e) {
        if (
          null == we &&
          ((we =
            "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo"
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()
              .substring(1)
              .split(" ")),
          "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !==
            Ae.check(e))
        )
          throw (
            ((we = null), new Error("BIP39 Wordlist for en (English) FAILED"))
          );
      }
      const Ie = new (class extends Ae {
        constructor() {
          super("en");
        }
        getWord(e) {
          return Ne(this), we[e];
        }
        getWordIndex(e) {
          return Ne(this), we.indexOf(e);
        }
      })();
      Ae.register(Ie);
      const Re = { en: Ie },
        Ce = new i.Vy("hdnode/5.6.2"),
        Pe = f.gH.from(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        Te = d("Bitcoin seed"),
        _e = 2147483648;
      function Fe(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function xe(e) {
        return (0, n.bj)((0, n.c$)(e), 32);
      }
      function Oe(e) {
        return a.encode((0, n.xW)([e, (0, n.Ab)(b(b(e)), 0, 4)]));
      }
      function Me(e) {
        if (null == e) return Re.en;
        if ("string" === typeof e) {
          const r = Re[e];
          return (
            null == r && Ce.throwArgumentError("unknown locale", "wordlist", e),
            r
          );
        }
        return e;
      }
      const De = {},
        Ue = "m/44'/60'/0'/0/0";
      class ke {
        constructor(e, r, t, i, s, a, f, u) {
          if (e !== De)
            throw new Error("HDNode constructor cannot be called directly");
          if (r) {
            const e = new ae(r);
            o(this, "privateKey", e.privateKey),
              o(this, "publicKey", e.compressedPublicKey);
          } else
            o(this, "privateKey", null), o(this, "publicKey", (0, n.c$)(t));
          var l;
          o(this, "parentFingerprint", i),
            o(
              this,
              "fingerprint",
              (0, n.Ab)(
                ((l = b(this.publicKey)),
                "0x" +
                  m()
                    .ripemd160()
                    .update((0, n.k9)(l))
                    .digest("hex")),
                0,
                4
              )
            ),
            o(this, "address", ve(this.publicKey)),
            o(this, "chainCode", s),
            o(this, "index", a),
            o(this, "depth", f),
            null == u
              ? (o(this, "mnemonic", null), o(this, "path", null))
              : "string" === typeof u
              ? (o(this, "mnemonic", null), o(this, "path", u))
              : (o(this, "mnemonic", u), o(this, "path", u.path));
        }
        get extendedKey() {
          if (this.depth >= 256) throw new Error("Depth too large!");
          return Oe(
            (0, n.xW)([
              null != this.privateKey ? "0x0488ADE4" : "0x0488B21E",
              (0, n.c$)(this.depth),
              this.parentFingerprint,
              (0, n.bj)((0, n.c$)(this.index), 4),
              this.chainCode,
              null != this.privateKey
                ? (0, n.xW)(["0x00", this.privateKey])
                : this.publicKey,
            ])
          );
        }
        neuter() {
          return new ke(
            De,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path
          );
        }
        _derive(e) {
          if (e > 4294967295) throw new Error("invalid index - " + String(e));
          let r = this.path;
          r && (r += "/" + (e & ~_e));
          const t = new Uint8Array(37);
          if (e & _e) {
            if (!this.privateKey)
              throw new Error("cannot derive child of neutered node");
            t.set((0, n.k9)(this.privateKey), 1), r && (r += "'");
          } else t.set((0, n.k9)(this.publicKey));
          for (let n = 24; n >= 0; n -= 8)
            t[33 + (n >> 3)] = (e >> (24 - n)) & 255;
          const i = (0, n.k9)(E(p.sha512, this.chainCode, t)),
            o = i.slice(0, 32),
            s = i.slice(32);
          let a = null,
            u = null;
          if (this.privateKey)
            a = xe(f.gH.from(o).add(this.privateKey).mod(Pe));
          else {
            u = new ae((0, n.c$)(o))._addPoint(this.publicKey);
          }
          let l = r;
          const c = this.mnemonic;
          return (
            c &&
              (l = Object.freeze({
                phrase: c.phrase,
                path: r,
                locale: c.locale || "en",
              })),
            new ke(De, a, u, this.fingerprint, xe(s), e, this.depth + 1, l)
          );
        }
        derivePath(e) {
          const r = e.split("/");
          if (0 === r.length || ("m" === r[0] && 0 !== this.depth))
            throw new Error("invalid path - " + e);
          "m" === r[0] && r.shift();
          let t = this;
          for (let n = 0; n < r.length; n++) {
            const e = r[n];
            if (e.match(/^[0-9]+'$/)) {
              const r = parseInt(e.substring(0, e.length - 1));
              if (r >= _e) throw new Error("invalid path index - " + e);
              t = t._derive(_e + r);
            } else {
              if (!e.match(/^[0-9]+$/))
                throw new Error("invalid path component - " + e);
              {
                const r = parseInt(e);
                if (r >= _e) throw new Error("invalid path index - " + e);
                t = t._derive(r);
              }
            }
          }
          return t;
        }
        static _fromSeed(e, r) {
          const t = (0, n.k9)(e);
          if (t.length < 16 || t.length > 64) throw new Error("invalid seed");
          const i = (0, n.k9)(E(p.sha512, Te, t));
          return new ke(
            De,
            xe(i.slice(0, 32)),
            null,
            "0x00000000",
            xe(i.slice(32)),
            0,
            0,
            r
          );
        }
        static fromMnemonic(e, r, t) {
          return (
            (e = Ge(Le(e, (t = Me(t))), t)),
            ke._fromSeed(Be(e, r), { phrase: e, path: "m", locale: t.locale })
          );
        }
        static fromSeed(e) {
          return ke._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          const r = a.decode(e);
          (82 === r.length && Oe(r.slice(0, 78)) === e) ||
            Ce.throwArgumentError(
              "invalid extended key",
              "extendedKey",
              "[REDACTED]"
            );
          const t = r[4],
            i = (0, n.c$)(r.slice(5, 9)),
            o = parseInt((0, n.c$)(r.slice(9, 13)).substring(2), 16),
            s = (0, n.c$)(r.slice(13, 45)),
            f = r.slice(45, 78);
          switch ((0, n.c$)(r.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf":
              return new ke(De, null, (0, n.c$)(f), i, s, o, t, null);
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== f[0]) break;
              return new ke(De, (0, n.c$)(f.slice(1)), null, i, s, o, t, null);
          }
          return Ce.throwArgumentError(
            "invalid extended key",
            "extendedKey",
            "[REDACTED]"
          );
        }
      }
      function Be(e, r) {
        r || (r = "");
        const t = d("mnemonic" + r, l.NFKD);
        return (function (e, r, t, i, o) {
          let s;
          (e = (0, n.k9)(e)), (r = (0, n.k9)(r));
          let a = 1;
          const f = new Uint8Array(i),
            u = new Uint8Array(r.length + 4);
          let l, c;
          u.set(r);
          for (let h = 1; h <= a; h++) {
            (u[r.length] = (h >> 24) & 255),
              (u[r.length + 1] = (h >> 16) & 255),
              (u[r.length + 2] = (h >> 8) & 255),
              (u[r.length + 3] = 255 & h);
            let d = (0, n.k9)(E(o, e, u));
            s ||
              ((s = d.length),
              (c = new Uint8Array(s)),
              (a = Math.ceil(i / s)),
              (l = i - (a - 1) * s)),
              c.set(d);
            for (let r = 1; r < t; r++) {
              d = (0, n.k9)(E(o, e, d));
              for (let e = 0; e < s; e++) c[e] ^= d[e];
            }
            const p = (h - 1) * s,
              g = h === a ? l : s;
            f.set((0, n.k9)(c).slice(0, g), p);
          }
          return (0, n.c$)(f);
        })(d(e, l.NFKD), t, 2048, 64, "sha512");
      }
      function Le(e, r) {
        (r = Me(r)), Ce.checkNormalize();
        const t = r.split(e);
        if (t.length % 3 !== 0) throw new Error("invalid mnemonic");
        const i = (0, n.k9)(new Uint8Array(Math.ceil((11 * t.length) / 8)));
        let o = 0;
        for (let n = 0; n < t.length; n++) {
          let e = r.getWordIndex(t[n].normalize("NFKD"));
          if (-1 === e) throw new Error("invalid mnemonic");
          for (let r = 0; r < 11; r++)
            e & (1 << (10 - r)) && (i[o >> 3] |= 1 << (7 - (o % 8))), o++;
        }
        const s = (32 * t.length) / 3,
          a = Fe(t.length / 3);
        if (((0, n.k9)(b(i.slice(0, s / 8)))[0] & a) !== (i[i.length - 1] & a))
          throw new Error("invalid checksum");
        return (0, n.c$)(i.slice(0, s / 8));
      }
      function Ge(e, r) {
        if (
          ((r = Me(r)),
          (e = (0, n.k9)(e)).length % 4 !== 0 || e.length < 16 || e.length > 32)
        )
          throw new Error("invalid entropy");
        const t = [0];
        let i = 11;
        for (let n = 0; n < e.length; n++)
          i > 8
            ? ((t[t.length - 1] <<= 8), (t[t.length - 1] |= e[n]), (i -= 8))
            : ((t[t.length - 1] <<= i),
              (t[t.length - 1] |= e[n] >> (8 - i)),
              t.push(e[n] & ((1 << (8 - i)) - 1)),
              (i += 3));
        const o = e.length / 4,
          s = (0, n.k9)(b(e))[0] & Fe(o);
        return (
          (t[t.length - 1] <<= o),
          (t[t.length - 1] |= s >> (8 - o)),
          r.join(t.map((e) => r.getWord(e)))
        );
      }
      function We(e, r) {
        try {
          return Le(e, r), !0;
        } catch (t) {}
        return !1;
      }
      function ze(e) {
        return (
          ("number" !== typeof e || e < 0 || e >= _e || e % 1) &&
            Ce.throwArgumentError("invalid account index", "index", e),
          `m/44'/60'/${e}'/0/0`
        );
      }
    },
    26952: (e, r, t) => {
      t.d(r, { z: () => B });
      var n = t(70148),
        i = t(63961),
        o = t(101),
        s = t(50227);
      const a = new s.Vy("address/5.8.0");
      function f(e) {
        (0, n.Lo)(e, 20) ||
          a.throwArgumentError("invalid address", "address", e);
        const r = (e = e.toLowerCase()).substring(2).split(""),
          t = new Uint8Array(40);
        for (let n = 0; n < 40; n++) t[n] = r[n].charCodeAt(0);
        const i = (0, n.k9)((0, o.S)(t));
        for (let n = 0; n < 40; n += 2)
          i[n >> 1] >> 4 >= 8 && (r[n] = r[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (r[n + 1] = r[n + 1].toUpperCase());
        return "0x" + r.join("");
      }
      const u = {};
      for (let L = 0; L < 10; L++) u[String(L)] = String(L);
      for (let L = 0; L < 26; L++)
        u[String.fromCharCode(65 + L)] = String(10 + L);
      const l = Math.floor(
        ((c = 9007199254740991),
        Math.log10 ? Math.log10(c) : Math.log(c) / Math.LN10)
      );
      var c;
      function h(e) {
        let r = (e =
          (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00")
          .split("")
          .map((e) => u[e])
          .join("");
        for (; r.length >= l; ) {
          let e = r.substring(0, l);
          r = (parseInt(e, 10) % 97) + r.substring(e.length);
        }
        let t = String(98 - (parseInt(r, 10) % 97));
        for (; t.length < 2; ) t = "0" + t;
        return t;
      }
      function d(e) {
        let r = null;
        if (
          ("string" !== typeof e &&
            a.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== e.substring(0, 2) && (e = "0x" + e),
            (r = f(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              r !== e &&
              a.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            e.substring(2, 4) !== h(e) &&
              a.throwArgumentError("bad icap checksum", "address", e),
              r = (0, i.Os)(e.substring(4));
            r.length < 40;

          )
            r = "0" + r;
          r = f("0x" + r);
        } else a.throwArgumentError("invalid address", "address", e);
        return r;
      }
      const p = new s.Vy("properties/5.8.0");
      function g(e, r, t) {
        Object.defineProperty(e, r, { enumerable: !0, value: t, writable: !1 });
      }
      function m(e) {
        const r = {};
        for (const t in e) r[t] = e[t];
        return r;
      }
      const y = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function b(e) {
        if (void 0 === e || null === e || y[typeof e]) return !0;
        if (Array.isArray(e) || "object" === typeof e) {
          if (!Object.isFrozen(e)) return !1;
          const t = Object.keys(e);
          for (let n = 0; n < t.length; n++) {
            let i = null;
            try {
              i = e[t[n]];
            } catch (r) {
              continue;
            }
            if (!b(i)) return !1;
          }
          return !0;
        }
        return p.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function E(e) {
        if (b(e)) return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => v(e)));
        if ("object" === typeof e) {
          const r = {};
          for (const t in e) {
            const n = e[t];
            void 0 !== n && g(r, t, v(n));
          }
          return r;
        }
        return p.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function v(e) {
        return E(e);
      }
      var S = t(7080),
        A = t(59178),
        w = function (e, r, t, n) {
          return new (t || (t = Promise))(function (i, o) {
            function s(e) {
              try {
                f(n.next(e));
              } catch (r) {
                o(r);
              }
            }
            function a(e) {
              try {
                f(n.throw(e));
              } catch (r) {
                o(r);
              }
            }
            function f(e) {
              var r;
              e.done
                ? i(e.value)
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
      const N = new s.Vy(S.r),
        I = new Uint8Array(32);
      I.fill(0);
      const R = i.gH.from(-1),
        C = i.gH.from(0),
        P = i.gH.from(1),
        T = i.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      const _ = (0, n.bj)(P.toHexString(), 32),
        F = (0, n.bj)(C.toHexString(), 32),
        x = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        O = ["name", "version", "chainId", "verifyingContract", "salt"];
      function M(e) {
        return function (r) {
          return (
            "string" !== typeof r &&
              N.throwArgumentError(
                `invalid domain value for ${JSON.stringify(e)}`,
                `domain.${e}`,
                r
              ),
            r
          );
        };
      }
      const D = {
        name: M("name"),
        version: M("version"),
        chainId: function (e) {
          try {
            return i.gH.from(e).toString();
          } catch (r) {}
          return N.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            e
          );
        },
        verifyingContract: function (e) {
          try {
            return d(e).toLowerCase();
          } catch (r) {}
          return N.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            e
          );
        },
        salt: function (e) {
          try {
            const r = (0, n.k9)(e);
            if (32 !== r.length) throw new Error("bad length");
            return (0, n.c$)(r);
          } catch (r) {}
          return N.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            e
          );
        },
      };
      function U(e) {
        {
          const r = e.match(/^(u?)int(\d*)$/);
          if (r) {
            const t = "" === r[1],
              o = parseInt(r[2] || "256");
            (o % 8 !== 0 || o > 256 || (r[2] && r[2] !== String(o))) &&
              N.throwArgumentError("invalid numeric width", "type", e);
            const s = T.mask(t ? o - 1 : o),
              a = t ? s.add(P).mul(R) : C;
            return function (r) {
              const t = i.gH.from(r);
              return (
                (t.lt(a) || t.gt(s)) &&
                  N.throwArgumentError(
                    `value out-of-bounds for ${e}`,
                    "value",
                    r
                  ),
                (0, n.bj)(t.toTwos(256).toHexString(), 32)
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
                N.throwArgumentError("invalid bytes width", "type", e),
              function (r) {
                return (
                  (0, n.k9)(r).length !== t &&
                    N.throwArgumentError(`invalid length for ${e}`, "value", r),
                  (function (e) {
                    const r = (0, n.k9)(e),
                      t = r.length % 32;
                    return t ? (0, n.qn)([r, I.slice(t)]) : (0, n.c$)(r);
                  })(r)
                );
              }
            );
          }
        }
        switch (e) {
          case "address":
            return function (e) {
              return (0, n.bj)(d(e), 32);
            };
          case "bool":
            return function (e) {
              return e ? _ : F;
            };
          case "bytes":
            return function (e) {
              return (0, o.S)(e);
            };
          case "string":
            return function (e) {
              return (0, A.id)(e);
            };
        }
        return null;
      }
      function k(e, r) {
        return `${e}(${r
          .map((e) => {
            let { name: r, type: t } = e;
            return t + " " + r;
          })
          .join(",")})`;
      }
      class B {
        constructor(e) {
          g(this, "types", Object.freeze(v(e))),
            g(this, "_encoderCache", {}),
            g(this, "_types", {});
          const r = {},
            t = {},
            n = {};
          Object.keys(e).forEach((e) => {
            (r[e] = {}), (t[e] = []), (n[e] = {});
          });
          for (const o in e) {
            const n = {};
            e[o].forEach((i) => {
              n[i.name] &&
                N.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(
                    i.name
                  )} in ${JSON.stringify(o)}`,
                  "types",
                  e
                ),
                (n[i.name] = !0);
              const s = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === o &&
                N.throwArgumentError(
                  `circular type reference to ${JSON.stringify(s)}`,
                  "types",
                  e
                );
              U(s) ||
                (t[s] ||
                  N.throwArgumentError(
                    `unknown type ${JSON.stringify(s)}`,
                    "types",
                    e
                  ),
                t[s].push(o),
                (r[o][s] = !0));
            });
          }
          const i = Object.keys(t).filter((e) => 0 === t[e].length);
          0 === i.length
            ? N.throwArgumentError("missing primary type", "types", e)
            : i.length > 1 &&
              N.throwArgumentError(
                `ambiguous primary types or unused types: ${i
                  .map((e) => JSON.stringify(e))
                  .join(", ")}`,
                "types",
                e
              ),
            g(this, "primaryType", i[0]),
            (function i(o, s) {
              s[o] &&
                N.throwArgumentError(
                  `circular type reference to ${JSON.stringify(o)}`,
                  "types",
                  e
                ),
                (s[o] = !0),
                Object.keys(r[o]).forEach((e) => {
                  t[e] &&
                    (i(e, s),
                    Object.keys(s).forEach((r) => {
                      n[r][e] = !0;
                    }));
                }),
                delete s[o];
            })(this.primaryType, {});
          for (const o in n) {
            const r = Object.keys(n[o]);
            r.sort(),
              (this._types[o] = k(o, e[o]) + r.map((r) => k(r, e[r])).join(""));
          }
        }
        getEncoder(e) {
          let r = this._encoderCache[e];
          return r || (r = this._encoderCache[e] = this._getEncoder(e)), r;
        }
        _getEncoder(e) {
          {
            const r = U(e);
            if (r) return r;
          }
          const r = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (r) {
            const e = r[1],
              t = this.getEncoder(e),
              i = parseInt(r[3]);
            return (r) => {
              i >= 0 &&
                r.length !== i &&
                N.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  r
                );
              let s = r.map(t);
              return this._types[e] && (s = s.map(o.S)), (0, o.S)((0, n.qn)(s));
            };
          }
          const t = this.types[e];
          if (t) {
            const r = (0, A.id)(this._types[e]);
            return (e) => {
              const i = t.map((r) => {
                let { name: t, type: n } = r;
                const i = this.getEncoder(n)(e[t]);
                return this._types[n] ? (0, o.S)(i) : i;
              });
              return i.unshift(r), (0, n.qn)(i);
            };
          }
          return N.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        encodeType(e) {
          const r = this._types[e];
          return (
            r ||
              N.throwArgumentError(
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
          return (0, o.S)(this.encodeData(e, r));
        }
        encode(e) {
          return this.encodeData(this.primaryType, e);
        }
        hash(e) {
          return this.hashStruct(this.primaryType, e);
        }
        _visit(e, r, t) {
          if (U(e)) return t(e, r);
          const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const e = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                r.length !== i &&
                N.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  r
                ),
              r.map((r) => this._visit(e, r, t))
            );
          }
          const i = this.types[e];
          return i
            ? i.reduce((e, n) => {
                let { name: i, type: o } = n;
                return (e[i] = this._visit(o, r[i], t)), e;
              }, {})
            : N.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        visit(e, r) {
          return this._visit(this.primaryType, e, r);
        }
        static from(e) {
          return new B(e);
        }
        static getPrimaryType(e) {
          return B.from(e).primaryType;
        }
        static hashStruct(e, r, t) {
          return B.from(r).hashStruct(e, t);
        }
        static hashDomain(e) {
          const r = [];
          for (const t in e) {
            const n = x[t];
            n ||
              N.throwArgumentError(
                `invalid typed-data domain key: ${JSON.stringify(t)}`,
                "domain",
                e
              ),
              r.push({ name: t, type: n });
          }
          return (
            r.sort((e, r) => O.indexOf(e.name) - O.indexOf(r.name)),
            B.hashStruct("EIP712Domain", { EIP712Domain: r }, e)
          );
        }
        static encode(e, r, t) {
          return (0, n.qn)(["0x1901", B.hashDomain(e), B.from(r).hash(t)]);
        }
        static hash(e, r, t) {
          return (0, o.S)(B.encode(e, r, t));
        }
        static resolveNames(e, r, t, i) {
          return w(this, void 0, void 0, function* () {
            e = m(e);
            const o = {};
            e.verifyingContract &&
              !(0, n.Lo)(e.verifyingContract, 20) &&
              (o[e.verifyingContract] = "0x");
            const s = B.from(r);
            s.visit(
              t,
              (e, r) => (
                "address" !== e || (0, n.Lo)(r, 20) || (o[r] = "0x"), r
              )
            );
            for (const e in o) o[e] = yield i(e);
            return (
              e.verifyingContract &&
                o[e.verifyingContract] &&
                (e.verifyingContract = o[e.verifyingContract]),
              (t = s.visit(t, (e, r) => ("address" === e && o[r] ? o[r] : r))),
              { domain: e, value: t }
            );
          });
        }
        static getPayload(e, r, t) {
          B.hashDomain(e);
          const o = {},
            s = [];
          O.forEach((r) => {
            const t = e[r];
            null != t && ((o[r] = D[r](t)), s.push({ name: r, type: x[r] }));
          });
          const a = B.from(r),
            f = m(r);
          return (
            f.EIP712Domain
              ? N.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  r
                )
              : (f.EIP712Domain = s),
            a.encode(t),
            {
              types: f,
              domain: o,
              primaryType: a.primaryType,
              message: a.visit(t, (e, r) => {
                if (e.match(/^bytes(\d*)/)) return (0, n.c$)((0, n.k9)(r));
                if (e.match(/^u?int/)) return i.gH.from(r).toString();
                switch (e) {
                  case "address":
                    return r.toLowerCase();
                  case "bool":
                    return !!r;
                  case "string":
                    return (
                      "string" !== typeof r &&
                        N.throwArgumentError("invalid string", "value", r),
                      r
                    );
                }
                return N.throwArgumentError("unsupported type", "type", e);
              }),
            }
          );
        }
      }
    },
    48781: (e, r, t) => {
      t.d(r, { S: () => A });
      var n = t(12379),
        i = t.n(n);
      let o = !1,
        s = !1;
      const a = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let f = a.default,
        u = null;
      const l = (function () {
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
      var c, h;
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
          const i = e;
          let o = "";
          switch (r) {
            case h.NUMERIC_FAULT: {
              o = "NUMERIC_FAULT";
              const r = e;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  o += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  o += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  o += "-unbound-result";
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
              o = r;
          }
          o && (e += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"),
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
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                p.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l }
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
          return u || (u = new p("logger/5.8.0")), u;
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
            o)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              p.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (s = !!e), (o = !!r);
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
      (p.errors = h), (p.levels = c);
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
      function b(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function E(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!b(e.length) || e.length < 0) return !1;
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          if (!b(t) || t < 0 || t >= 256) return !1;
        }
        return !0;
      }
      function v(e, r) {
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
          S(e))
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
      function S(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      function A(e) {
        return "0x" + i().keccak_256(v(e));
      }
    },
    50227: (e, r, t) => {
      t.d(r, { Vy: () => h });
      let n = !1,
        i = !1;
      const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = o.default,
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
      var u, l;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(u || (u = {})),
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
        })(l || (l = {}));
      const c = "0123456789abcdef";
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
          null == o[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > o[t] || console.log.apply(console, r);
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
          if (i) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += c[r[e] >> 4]), (t += c[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const o = e;
          let s = "";
          switch (r) {
            case l.NUMERIC_FAULT: {
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
            case l.CALL_EXCEPTION:
            case l.INSUFFICIENT_FUNDS:
            case l.MISSING_NEW:
            case l.NONCE_EXPIRED:
            case l.REPLACEMENT_UNDERPRICED:
            case l.TRANSACTION_REPLACED:
            case l.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
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
          (i = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = o[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = l), (h.levels = u);
    },
    59178: (e, r, t) => {
      t.d(r, { id: () => o });
      var n = t(101),
        i = t(2239);
      function o(e) {
        return (0, n.S)((0, i.YW)(e));
      }
    },
    70148: (e, r, t) => {
      t.d(r, {
        k9: () => f,
        xW: () => u,
        qn: () => d,
        bj: () => p,
        c$: () => h,
        aY: () => a,
        Lo: () => l,
      });
      const n = new (t(50227).Vy)("bytes/5.8.0");
      function i(e) {
        return !!e.toHexString;
      }
      function o(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(e, r)));
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
          return 0 === r.length && r.push(0), o(new Uint8Array(r));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e) && (e = e.toHexString()),
          l(e))
        ) {
          let t = e.substring(2);
          t.length % 2 &&
            ("left" === r.hexPad
              ? (t = "0" + t)
              : "right" === r.hexPad
              ? (t += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          const i = [];
          for (let e = 0; e < t.length; e += 2)
            i.push(parseInt(t.substring(e, e + 2), 16));
          return o(new Uint8Array(i));
        }
        return a(e)
          ? o(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function u(e) {
        const r = e.map((e) => f(e)),
          t = r.reduce((e, r) => e + r.length, 0),
          n = new Uint8Array(t);
        return r.reduce((e, r) => (n.set(r, e), e + r.length), 0), o(n);
      }
      function l(e, r) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || e.length === 2 + 2 * r)
        );
      }
      const c = "0123456789abcdef";
      function h(e, r) {
        if ((r || (r = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let r = "";
          for (; e; ) (r = c[15 & e] + r), (e = Math.floor(e / 16));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (r.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e))
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
        if (a(e)) {
          let r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += c[(240 & n) >> 4] + c[15 & n];
          }
          return r;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
      function d(e) {
        let r = "0x";
        return (
          e.forEach((e) => {
            r += h(e).substring(2);
          }),
          r
        );
      }
      function p(e, r) {
        for (
          "string" !== typeof e
            ? (e = h(e))
            : l(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * r + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * r + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
    },
    77247: (e, r, t) => {
      t.d(r, { Vy: () => h });
      let n = !1,
        i = !1;
      const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = o.default,
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
      var u, l;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(u || (u = {})),
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
        })(l || (l = {}));
      const c = "0123456789abcdef";
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
          null == o[t] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > o[t] || console.log.apply(console, r);
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
          if (i) return this.makeError("censored error", r, {});
          r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
          const n = [];
          Object.keys(t).forEach((e) => {
            const r = t[e];
            try {
              if (r instanceof Uint8Array) {
                let t = "";
                for (let e = 0; e < r.length; e++)
                  (t += c[r[e] >> 4]), (t += c[15 & r[e]]);
                n.push(e + "=Uint8Array(0x" + t + ")");
              } else n.push(e + "=" + JSON.stringify(r));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(t[e].toString()));
            }
          }),
            n.push(`code=${r}`),
            n.push(`version=${this.version}`);
          const o = e;
          let s = "";
          switch (r) {
            case l.NUMERIC_FAULT: {
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
            case l.CALL_EXCEPTION:
            case l.INSUFFICIENT_FUNDS:
            case l.MISSING_NEW:
            case l.NONCE_EXPIRED:
            case l.REPLACEMENT_UNDERPRICED:
            case l.TRANSACTION_REPLACED:
            case l.UNPREDICTABLE_GAS_LIMIT:
              s = r;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
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
          (i = !!e), (n = !!r);
        }
        static setLogLevel(e) {
          const r = o[e.toLowerCase()];
          null != r
            ? (s = r)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = l), (h.levels = u);
    },
    86522: (e, r, t) => {
      t.d(r, { Wh: () => N, uV: () => A, kM: () => w });
      var n = t(70148),
        i = t(2239);
      function o(e, r) {
        r ||
          (r = function (e) {
            return [parseInt(e, 16)];
          });
        let t = 0,
          n = {};
        return (
          e.split(",").forEach((e) => {
            let i = e.split(":");
            (t += parseInt(i[0], 16)), (n[t] = r(i[1]));
          }),
          n
        );
      }
      function s(e) {
        let r = 0;
        return e.split(",").map((e) => {
          let t = e.split("-");
          1 === t.length ? (t[1] = "0") : "" === t[1] && (t[1] = "1");
          let n = r + parseInt(t[0], 16);
          return (r = parseInt(t[1], 16)), { l: n, h: r };
        });
      }
      function a(e, r) {
        let t = 0;
        for (let n = 0; n < r.length; n++) {
          let i = r[n];
          if (
            ((t += i.l), e >= t && e <= t + i.h && (e - t) % (i.d || 1) === 0)
          ) {
            if (i.e && -1 !== i.e.indexOf(e - t)) continue;
            return i;
          }
        }
        return null;
      }
      const f = s(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        u = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((e) => parseInt(e, 16)),
        l = [
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
        c = o(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        h = o(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        d = o(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (e) {
            if (e.length % 4 !== 0) throw new Error("bad data");
            let r = [];
            for (let t = 0; t < e.length; t += 4)
              r.push(parseInt(e.substring(t, t + 4), 16));
            return r;
          }
        ),
        p = s(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      function g(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let r = (0, i.dg)(e);
        var t;
        (t = r.map((e) => {
          if (u.indexOf(e) >= 0) return [];
          if (e >= 65024 && e <= 65039) return [];
          let r = (function (e) {
            let r = a(e, l);
            if (r) return [e + r.s];
            let t = c[e];
            if (t) return t;
            let n = h[e];
            return n ? [e + n[0]] : d[e] || null;
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
          (r = (0, i.dg)((0, i.H5)(r), i.dz.NFKC)),
          r.forEach((e) => {
            if (a(e, p)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          r.forEach((e) => {
            if (a(e, f)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          });
        let n = (0, i.H5)(r);
        if (
          "-" === n.substring(0, 1) ||
          "--" === n.substring(2, 4) ||
          "-" === n.substring(n.length - 1)
        )
          throw new Error("invalid hyphen");
        return n;
      }
      var m = t(101),
        y = t(50227),
        b = t(7080);
      const E = new y.Vy(b.r),
        v = new Uint8Array(32);
      v.fill(0);
      const S = new RegExp("^((.*)\\.)?([^.]+)$");
      function A(e) {
        try {
          const r = e.split(".");
          for (let e = 0; e < r.length; e++)
            if (0 === g(r[e]).length) throw new Error("empty");
          return !0;
        } catch (r) {}
        return !1;
      }
      function w(e) {
        "string" !== typeof e &&
          E.throwArgumentError("invalid ENS name; not a string", "name", e);
        let r = e,
          t = v;
        for (; r.length; ) {
          const o = r.match(S);
          (null != o && "" !== o[2]) ||
            E.throwArgumentError(
              "invalid ENS address; missing component",
              "name",
              e
            );
          const s = (0, i.YW)(g(o[3]));
          (t = (0, m.S)((0, n.xW)([t, (0, m.S)(s)]))), (r = o[2] || "");
        }
        return (0, n.c$)(t);
      }
      function N(e) {
        return (
          (0, n.c$)(
            (0, n.xW)(
              e.split(".").map((e) => {
                const r = (0, i.YW)("_" + g(e));
                return (r[0] = r.length - 1), r;
              })
            )
          ) + "00"
        );
      }
    },
  },
]);
