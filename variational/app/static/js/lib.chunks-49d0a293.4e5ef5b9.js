/*! For license information please see lib.chunks-49d0a293.4e5ef5b9.js.LICENSE.txt */
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [5409],
  {
    882: (t, e) => {
      var r;
      !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function i() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var r = arguments[e];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o) t.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var f = i.apply(null, r);
                  f && t.push(f);
                }
              } else if ("object" === o)
                if (r.toString === Object.prototype.toString)
                  for (var s in r) n.call(r, s) && r[s] && t.push(s);
                else t.push(r.toString());
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((i.default = i), (t.exports = i))
          : void 0 ===
              (r = function () {
                return i;
              }.apply(e, [])) || (t.exports = r);
      })();
    },
    13740: (t, e, r) => {
      "use strict";
      const n = r(58931),
        i = r(26130),
        o =
          "function" === typeof Symbol && "function" === typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (e.Buffer = u),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return u.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50);
      const f = 2147483647;
      function s(t) {
        if (t > f)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        const e = new Uint8Array(t);
        return Object.setPrototypeOf(e, u.prototype), e;
      }
      function u(t, e, r) {
        if ("number" === typeof t) {
          if ("string" === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return l(t);
        }
        return c(t, e, r);
      }
      function c(t, e, r) {
        if ("string" === typeof t)
          return (function (t, e) {
            ("string" === typeof e && "" !== e) || (e = "utf8");
            if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
            const r = 0 | y(t, e);
            let n = s(r);
            const i = n.write(t, e);
            i !== r && (n = n.slice(0, i));
            return n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (X(t, Uint8Array)) {
              const e = new Uint8Array(t);
              return p(e.buffer, e.byteOffset, e.byteLength);
            }
            return a(t);
          })(t);
        if (null == t)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (X(t, ArrayBuffer) || (t && X(t.buffer, ArrayBuffer)))
          return p(t, e, r);
        if (
          "undefined" !== typeof SharedArrayBuffer &&
          (X(t, SharedArrayBuffer) || (t && X(t.buffer, SharedArrayBuffer)))
        )
          return p(t, e, r);
        if ("number" === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        const n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return u.from(n, e, r);
        const i = (function (t) {
          if (u.isBuffer(t)) {
            const e = 0 | g(t.length),
              r = s(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          if (void 0 !== t.length)
            return "number" !== typeof t.length || J(t.length) ? s(0) : a(t);
          if ("Buffer" === t.type && Array.isArray(t.data)) return a(t.data);
        })(t);
        if (i) return i;
        if (
          "undefined" !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" === typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]("string"), e, r);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function h(t) {
        if ("number" !== typeof t)
          throw new TypeError('"size" argument must be of type number');
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function l(t) {
        return h(t), s(t < 0 ? 0 : 0 | g(t));
      }
      function a(t) {
        const e = t.length < 0 ? 0 : 0 | g(t.length),
          r = s(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function p(t, e, r) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, u.prototype),
          n
        );
      }
      function g(t) {
        if (t >= f)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              f.toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function y(t, e) {
        if (u.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || X(t, ArrayBuffer)) return t.byteLength;
        if ("string" !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        const r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return Y(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return H(t).length;
            default:
              if (i) return n ? -1 : Y(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function w(t, e, r) {
        let n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return T(this, e, r);
            case "utf8":
            case "utf-8":
              return U(this, e, r);
            case "ascii":
              return N(this, e, r);
            case "latin1":
            case "binary":
              return S(this, e, r);
            case "base64":
              return O(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return L(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function d(t, e, r) {
        const n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function m(t, e, r, n, i) {
        if (0 === t.length) return -1;
        if (
          ("string" === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          J((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" === typeof e && (e = u.from(e, n)), u.isBuffer(e)))
          return 0 === e.length ? -1 : b(t, e, r, n, i);
        if ("number" === typeof e)
          return (
            (e &= 255),
            "function" === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : b(t, [e], r, n, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function b(t, e, r, n, i) {
        let o,
          f = 1,
          s = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (f = 2), (s /= 2), (u /= 2), (r /= 2);
        }
        function c(t, e) {
          return 1 === f ? t[e] : t.readUInt16BE(e * f);
        }
        if (i) {
          let n = -1;
          for (o = r; o < s; o++)
            if (c(t, o) === c(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === u)) return n * f;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < u; n++)
              if (c(t, o + n) !== c(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function E(t, e, r, n) {
        r = Number(r) || 0;
        const i = t.length - r;
        n ? (n = Number(n)) > i && (n = i) : (n = i);
        const o = e.length;
        let f;
        for (n > o / 2 && (n = o / 2), f = 0; f < n; ++f) {
          const n = parseInt(e.substr(2 * f, 2), 16);
          if (J(n)) return f;
          t[r + f] = n;
        }
        return f;
      }
      function B(t, e, r, n) {
        return W(Y(e, t.length - r), t, r, n);
      }
      function v(t, e, r, n) {
        return W(
          (function (t) {
            const e = [];
            for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
            return e;
          })(e),
          t,
          r,
          n
        );
      }
      function A(t, e, r, n) {
        return W(H(e), t, r, n);
      }
      function I(t, e, r, n) {
        return W(
          (function (t, e) {
            let r, n, i;
            const o = [];
            for (let f = 0; f < t.length && !((e -= 2) < 0); ++f)
              (r = t.charCodeAt(f)),
                (n = r >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n);
            return o;
          })(e, t.length - r),
          t,
          r,
          n
        );
      }
      function O(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r));
      }
      function U(t, e, r) {
        r = Math.min(t.length, r);
        const n = [];
        let i = e;
        for (; i < r; ) {
          const e = t[i];
          let o = null,
            f = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + f <= r) {
            let r, n, s, u;
            switch (f) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (r = t[i + 1]),
                  128 === (192 & r) &&
                    ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (o = u));
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  128 === (192 & r) &&
                    128 === (192 & n) &&
                    ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                    u > 2047 && (u < 55296 || u > 57343) && (o = u));
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (s = t[i + 3]),
                  128 === (192 & r) &&
                    128 === (192 & n) &&
                    128 === (192 & s) &&
                    ((u =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & s)),
                    u > 65535 && u < 1114112 && (o = u));
            }
          }
          null === o
            ? ((o = 65533), (f = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += f);
        }
        return (function (t) {
          const e = t.length;
          if (e <= R) return String.fromCharCode.apply(String, t);
          let r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += R)));
          return r;
        })(n);
      }
      (e.kMaxLength = f),
        (u.TYPED_ARRAY_SUPPORT = (function () {
          try {
            const t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          "undefined" === typeof console ||
          "function" !== typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(u.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(u.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.byteOffset;
          },
        }),
        (u.poolSize = 8192),
        (u.from = function (t, e, r) {
          return c(t, e, r);
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function (t, e, r) {
          return (function (t, e, r) {
            return (
              h(t),
              t <= 0
                ? s(t)
                : void 0 !== e
                ? "string" === typeof r
                  ? s(t).fill(e, r)
                  : s(t).fill(e)
                : s(t)
            );
          })(t, e, r);
        }),
        (u.allocUnsafe = function (t) {
          return l(t);
        }),
        (u.allocUnsafeSlow = function (t) {
          return l(t);
        }),
        (u.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype;
        }),
        (u.compare = function (t, e) {
          if (
            (X(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            X(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (u.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          let r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          const n = u.allocUnsafe(e);
          let i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (X(e, Uint8Array))
              i + e.length > n.length
                ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else {
              if (!u.isBuffer(e))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              e.copy(n, i);
            }
            i += e.length;
          }
          return n;
        }),
        (u.byteLength = y),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          const t = this.length;
          if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) d(this, e, e + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          const t = this.length;
          if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            d(this, e, e + 3), d(this, e + 1, e + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          const t = this.length;
          if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            d(this, e, e + 7),
              d(this, e + 1, e + 6),
              d(this, e + 2, e + 5),
              d(this, e + 3, e + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          const t = this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
            ? U(this, 0, t)
            : w.apply(this, arguments);
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }),
        (u.prototype.inspect = function () {
          let t = "";
          const r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function (t, e, r, n, i) {
          if (
            (X(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          let o = (i >>>= 0) - (n >>>= 0),
            f = (r >>>= 0) - (e >>>= 0);
          const s = Math.min(o, f),
            c = this.slice(n, i),
            h = t.slice(e, r);
          for (let u = 0; u < s; ++u)
            if (c[u] !== h[u]) {
              (o = c[u]), (f = h[u]);
              break;
            }
          return o < f ? -1 : f < o ? 1 : 0;
        }),
        (u.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (u.prototype.indexOf = function (t, e, r) {
          return m(this, t, e, r, !0);
        }),
        (u.prototype.lastIndexOf = function (t, e, r) {
          return m(this, t, e, r, !1);
        }),
        (u.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" === typeof e)
            (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          const i = this.length - e;
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let o = !1;
          for (;;)
            switch (n) {
              case "hex":
                return E(this, t, e, r);
              case "utf8":
              case "utf-8":
                return B(this, t, e, r);
              case "ascii":
              case "latin1":
              case "binary":
                return v(this, t, e, r);
              case "base64":
                return A(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return I(this, t, e, r);
              default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (o = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      const R = 4096;
      function N(t, e, r) {
        let n = "";
        r = Math.min(t.length, r);
        for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
        return n;
      }
      function S(t, e, r) {
        let n = "";
        r = Math.min(t.length, r);
        for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
        return n;
      }
      function T(t, e, r) {
        const n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = e; o < r; ++o) i += Z[t[o]];
        return i;
      }
      function L(t, e, r) {
        const n = t.slice(e, r);
        let i = "";
        for (let o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i;
      }
      function _(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function x(t, e, r, n, i, o) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function P(t, e, r, n, i) {
        G(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let f = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r++] = f),
          (f >>= 8),
          (t[r++] = f),
          (f >>= 8),
          (t[r++] = f),
          (f >>= 8),
          (t[r++] = f),
          r
        );
      }
      function C(t, e, r, n, i) {
        G(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let f = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r + 3] = f),
          (f >>= 8),
          (t[r + 2] = f),
          (f >>= 8),
          (t[r + 1] = f),
          (f >>= 8),
          (t[r] = f),
          r + 8
        );
      }
      function $(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function k(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || $(t, 0, r, 4),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function D(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || $(t, 0, r, 8),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (u.prototype.slice = function (t, e) {
        const r = this.length;
        (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t);
        const n = this.subarray(t, e);
        return Object.setPrototypeOf(n, u.prototype), n;
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (u.prototype.readUintBE = u.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (u.prototype.readUint8 = u.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || _(t, 1, this.length), this[t];
          }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || _(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || _(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || _(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || _(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (u.prototype.readBigUInt64LE = K(function (t) {
          z((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
          const n =
              e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (u.prototype.readBigUInt64BE = K(function (t) {
          z((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
          const n =
              e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (u.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
        }),
        (u.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || _(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
        }),
        (u.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || _(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (u.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || _(t, 2, this.length);
          const r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || _(t, 2, this.length);
          const r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || _(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || _(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (u.prototype.readBigInt64LE = K(function (t) {
          z((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
          const n =
            this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
            )
          );
        })),
        (u.prototype.readBigInt64BE = K(function (t) {
          z((t >>>= 0), "offset");
          const e = this[t],
            r = this[t + 7];
          (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
          const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
          return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
              this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r
            )
          );
        })),
        (u.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || _(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (u.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || _(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (u.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || _(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (u.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || _(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || x(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (u.prototype.writeBigUInt64LE = K(function (t) {
          return P(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            BigInt(0),
            BigInt("0xffffffffffffffff")
          );
        })),
        (u.prototype.writeBigUInt64BE = K(function (t) {
          return C(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            BigInt(0),
            BigInt("0xffffffffffffffff")
          );
        })),
        (u.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            x(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            f = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === f && 0 !== this[e + i - 1] && (f = 1),
              (this[e + i] = (((t / o) | 0) - f) & 255);
          return e + r;
        }),
        (u.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1);
            x(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            f = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === f && 0 !== this[e + i + 1] && (f = 1),
              (this[e + i] = (((t / o) | 0) - f) & 255);
          return e + r;
        }),
        (u.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (u.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (u.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (u.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (u.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (u.prototype.writeBigInt64LE = K(function (t) {
          return P(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (u.prototype.writeBigInt64BE = K(function (t) {
          return C(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (u.prototype.writeFloatLE = function (t, e, r) {
          return k(this, t, e, !0, r);
        }),
        (u.prototype.writeFloatBE = function (t, e, r) {
          return k(this, t, e, !1, r);
        }),
        (u.prototype.writeDoubleLE = function (t, e, r) {
          return D(this, t, e, !0, r);
        }),
        (u.prototype.writeDoubleBE = function (t, e, r) {
          return D(this, t, e, !1, r);
        }),
        (u.prototype.copy = function (t, e, r, n) {
          if (!u.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          const i = n - r;
          return (
            this === t && "function" === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (u.prototype.fill = function (t, e, r, n) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" !== typeof n)
            )
              throw new TypeError("encoding must be a string");
            if ("string" === typeof n && !u.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              const e = t.charCodeAt(0);
              (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
            }
          } else
            "number" === typeof t
              ? (t &= 255)
              : "boolean" === typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          let i;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            const o = u.isBuffer(t) ? t : u.from(t, n),
              f = o.length;
            if (0 === f)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % f];
          }
          return this;
        });
      const M = {};
      function F(t, e, r) {
        M[t] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function j(t) {
        let e = "",
          r = t.length;
        const n = "-" === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function G(t, e, r, n, i, o) {
        if (t > r || t < e) {
          const n = "bigint" === typeof e ? "n" : "";
          let i;
          throw (
            ((i =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                  : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${
                      8 * (o + 1) - 1
                    }${n}`
                : `>= ${e}${n} and <= ${r}${n}`),
            new M.ERR_OUT_OF_RANGE("value", i, t))
          );
        }
        !(function (t, e, r) {
          z(e, "offset"),
            (void 0 !== t[e] && void 0 !== t[e + r]) ||
              q(e, t.length - (r + 1));
        })(n, i, o);
      }
      function z(t, e) {
        if ("number" !== typeof t)
          throw new M.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function q(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (z(t, r), new M.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
          );
        if (e < 0) throw new M.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new M.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${e}`,
          t
        );
      }
      F(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        F(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        F(
          "ERR_OUT_OF_RANGE",
          function (t, e, r) {
            let n = `The value of "${t}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 2 ** 32
                ? (i = j(String(r)))
                : "bigint" === typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = j(i)),
                  (i += "n")),
              (n += ` It must be ${e}. Received ${i}`),
              n
            );
          },
          RangeError
        );
      const V = /[^+/0-9A-Za-z-_]/g;
      function Y(t, e) {
        let r;
        e = e || 1 / 0;
        const n = t.length;
        let i = null;
        const o = [];
        for (let f = 0; f < n; ++f) {
          if (((r = t.charCodeAt(f)), r > 55295 && r < 57344)) {
            if (!i) {
              if (r > 56319) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (f + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return o;
      }
      function H(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(V, "")).length < 2)
              return "";
            for (; t.length % 4 !== 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function W(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function X(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      function J(t) {
        return t !== t;
      }
      const Z = (function () {
        const t = "0123456789abcdef",
          e = new Array(256);
        for (let r = 0; r < 16; ++r) {
          const n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function K(t) {
        return "undefined" === typeof BigInt ? Q : t;
      }
      function Q() {
        throw new Error("BigInt not supported");
      }
    },
    58335: (t, e, r) => {
      "use strict";
      var n = r(13740).Buffer;
      (e.k5 = function (t) {
        {
          const e = n.from(t);
          e.reverse();
          const r = e.toString("hex");
          return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`);
        }
      }),
        (e.Bq = function (t, e) {
          {
            const r = t.toString(16),
              i = n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex");
            return i.reverse(), i;
          }
        });
    },
    99609: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => v });
      var n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        i = Math.ceil,
        o = Math.floor,
        f = "[BigNumber Error] ",
        s = f + "Number primitive has more than 15 significant digits: ",
        u = 1e14,
        c = 14,
        h = 9007199254740991,
        l = [
          1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
        ],
        a = 1e7,
        p = 1e9;
      function g(t) {
        var e = 0 | t;
        return t > 0 || t === e ? e : e - 1;
      }
      function y(t) {
        for (var e, r, n = 1, i = t.length, o = t[0] + ""; n < i; ) {
          for (e = t[n++] + "", r = c - e.length; r--; e = "0" + e);
          o += e;
        }
        for (i = o.length; 48 === o.charCodeAt(--i); );
        return o.slice(0, i + 1 || 1);
      }
      function w(t, e) {
        var r,
          n,
          i = t.c,
          o = e.c,
          f = t.s,
          s = e.s,
          u = t.e,
          c = e.e;
        if (!f || !s) return null;
        if (((r = i && !i[0]), (n = o && !o[0]), r || n))
          return r ? (n ? 0 : -s) : f;
        if (f != s) return f;
        if (((r = f < 0), (n = u == c), !i || !o))
          return n ? 0 : !i ^ r ? 1 : -1;
        if (!n) return (u > c) ^ r ? 1 : -1;
        for (s = (u = i.length) < (c = o.length) ? u : c, f = 0; f < s; f++)
          if (i[f] != o[f]) return (i[f] > o[f]) ^ r ? 1 : -1;
        return u == c ? 0 : (u > c) ^ r ? 1 : -1;
      }
      function d(t, e, r, n) {
        if (t < e || t > r || t !== o(t))
          throw Error(
            f +
              (n || "Argument") +
              ("number" == typeof t
                ? t < e || t > r
                  ? " out of range: "
                  : " not an integer: "
                : " not a primitive number: ") +
              String(t)
          );
      }
      function m(t) {
        var e = t.c.length - 1;
        return g(t.e / c) == e && t.c[e] % 2 != 0;
      }
      function b(t, e) {
        return (
          (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) +
          (e < 0 ? "e" : "e+") +
          e
        );
      }
      function E(t, e, r) {
        var n, i;
        if (e < 0) {
          for (i = r + "."; ++e; i += r);
          t = i + t;
        } else if (++e > (n = t.length)) {
          for (i = r, e -= n; --e; i += r);
          t += i;
        } else e < n && (t = t.slice(0, e) + "." + t.slice(e));
        return t;
      }
      var B = (function t(e) {
        var r,
          B,
          v,
          A = (k.prototype = { constructor: k, toString: null, valueOf: null }),
          I = new k(1),
          O = 20,
          U = 4,
          R = -7,
          N = 21,
          S = -1e7,
          T = 1e7,
          L = !1,
          _ = 1,
          x = 0,
          P = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xa0",
            suffix: "",
          },
          C = "0123456789abcdefghijklmnopqrstuvwxyz",
          $ = !0;
        function k(t, e) {
          var r,
            i,
            f,
            u,
            l,
            a,
            p,
            g,
            y = this;
          if (!(y instanceof k)) return new k(t, e);
          if (null == e) {
            if (t && !0 === t._isBigNumber)
              return (
                (y.s = t.s),
                void (!t.c || t.e > T
                  ? (y.c = y.e = null)
                  : t.e < S
                  ? (y.c = [(y.e = 0)])
                  : ((y.e = t.e), (y.c = t.c.slice())))
              );
            if ((a = "number" == typeof t) && 0 * t == 0) {
              if (((y.s = 1 / t < 0 ? ((t = -t), -1) : 1), t === ~~t)) {
                for (u = 0, l = t; l >= 10; l /= 10, u++);
                return void (u > T
                  ? (y.c = y.e = null)
                  : ((y.e = u), (y.c = [t])));
              }
              g = String(t);
            } else {
              if (!n.test((g = String(t)))) return v(y, g, a);
              y.s = 45 == g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
            }
            (u = g.indexOf(".")) > -1 && (g = g.replace(".", "")),
              (l = g.search(/e/i)) > 0
                ? (u < 0 && (u = l),
                  (u += +g.slice(l + 1)),
                  (g = g.substring(0, l)))
                : u < 0 && (u = g.length);
          } else {
            if ((d(e, 2, C.length, "Base"), 10 == e && $))
              return j((y = new k(t)), O + y.e + 1, U);
            if (((g = String(t)), (a = "number" == typeof t))) {
              if (0 * t != 0) return v(y, g, a, e);
              if (
                ((y.s = 1 / t < 0 ? ((g = g.slice(1)), -1) : 1),
                k.DEBUG && g.replace(/^0\.0*|\./, "").length > 15)
              )
                throw Error(s + t);
            } else y.s = 45 === g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
            for (r = C.slice(0, e), u = l = 0, p = g.length; l < p; l++)
              if (r.indexOf((i = g.charAt(l))) < 0) {
                if ("." == i) {
                  if (l > u) {
                    u = p;
                    continue;
                  }
                } else if (
                  !f &&
                  ((g == g.toUpperCase() && (g = g.toLowerCase())) ||
                    (g == g.toLowerCase() && (g = g.toUpperCase())))
                ) {
                  (f = !0), (l = -1), (u = 0);
                  continue;
                }
                return v(y, String(t), a, e);
              }
            (a = !1),
              (u = (g = B(g, e, 10, y.s)).indexOf(".")) > -1
                ? (g = g.replace(".", ""))
                : (u = g.length);
          }
          for (l = 0; 48 === g.charCodeAt(l); l++);
          for (p = g.length; 48 === g.charCodeAt(--p); );
          if ((g = g.slice(l, ++p))) {
            if (((p -= l), a && k.DEBUG && p > 15 && (t > h || t !== o(t))))
              throw Error(s + y.s * t);
            if ((u = u - l - 1) > T) y.c = y.e = null;
            else if (u < S) y.c = [(y.e = 0)];
            else {
              if (
                ((y.e = u),
                (y.c = []),
                (l = (u + 1) % c),
                u < 0 && (l += c),
                l < p)
              ) {
                for (l && y.c.push(+g.slice(0, l)), p -= c; l < p; )
                  y.c.push(+g.slice(l, (l += c)));
                l = c - (g = g.slice(l)).length;
              } else l -= p;
              for (; l--; g += "0");
              y.c.push(+g);
            }
          } else y.c = [(y.e = 0)];
        }
        function D(t, e, r, n) {
          var i, o, f, s, u;
          if ((null == r ? (r = U) : d(r, 0, 8), !t.c)) return t.toString();
          if (((i = t.c[0]), (f = t.e), null == e))
            (u = y(t.c)),
              (u =
                1 == n || (2 == n && (f <= R || f >= N))
                  ? b(u, f)
                  : E(u, f, "0"));
          else if (
            ((o = (t = j(new k(t), e, r)).e),
            (s = (u = y(t.c)).length),
            1 == n || (2 == n && (e <= o || o <= R)))
          ) {
            for (; s < e; u += "0", s++);
            u = b(u, o);
          } else if (((e -= f), (u = E(u, o, "0")), o + 1 > s)) {
            if (--e > 0) for (u += "."; e--; u += "0");
          } else if ((e += o - s) > 0)
            for (o + 1 == s && (u += "."); e--; u += "0");
          return t.s < 0 && i ? "-" + u : u;
        }
        function M(t, e) {
          for (var r, n, i = 1, o = new k(t[0]); i < t.length; i++)
            (!(n = new k(t[i])).s ||
              (r = w(o, n)) === e ||
              (0 === r && o.s === e)) &&
              (o = n);
          return o;
        }
        function F(t, e, r) {
          for (var n = 1, i = e.length; !e[--i]; e.pop());
          for (i = e[0]; i >= 10; i /= 10, n++);
          return (
            (r = n + r * c - 1) > T
              ? (t.c = t.e = null)
              : r < S
              ? (t.c = [(t.e = 0)])
              : ((t.e = r), (t.c = e)),
            t
          );
        }
        function j(t, e, r, n) {
          var f,
            s,
            h,
            a,
            p,
            g,
            y,
            w = t.c,
            d = l;
          if (w) {
            t: {
              for (f = 1, a = w[0]; a >= 10; a /= 10, f++);
              if ((s = e - f) < 0)
                (s += c),
                  (h = e),
                  (p = w[(g = 0)]),
                  (y = o((p / d[f - h - 1]) % 10));
              else if ((g = i((s + 1) / c)) >= w.length) {
                if (!n) break t;
                for (; w.length <= g; w.push(0));
                (p = y = 0), (f = 1), (h = (s %= c) - c + 1);
              } else {
                for (p = a = w[g], f = 1; a >= 10; a /= 10, f++);
                y = (h = (s %= c) - c + f) < 0 ? 0 : o((p / d[f - h - 1]) % 10);
              }
              if (
                ((n =
                  n ||
                  e < 0 ||
                  null != w[g + 1] ||
                  (h < 0 ? p : p % d[f - h - 1])),
                (n =
                  r < 4
                    ? (y || n) && (0 == r || r == (t.s < 0 ? 3 : 2))
                    : y > 5 ||
                      (5 == y &&
                        (4 == r ||
                          n ||
                          (6 == r &&
                            (s > 0 ? (h > 0 ? p / d[f - h] : 0) : w[g - 1]) %
                              10 &
                              1) ||
                          r == (t.s < 0 ? 8 : 7)))),
                e < 1 || !w[0])
              )
                return (
                  (w.length = 0),
                  n
                    ? ((e -= t.e + 1),
                      (w[0] = d[(c - (e % c)) % c]),
                      (t.e = -e || 0))
                    : (w[0] = t.e = 0),
                  t
                );
              if (
                (0 == s
                  ? ((w.length = g), (a = 1), g--)
                  : ((w.length = g + 1),
                    (a = d[c - s]),
                    (w[g] = h > 0 ? o((p / d[f - h]) % d[h]) * a : 0)),
                n)
              )
                for (;;) {
                  if (0 == g) {
                    for (s = 1, h = w[0]; h >= 10; h /= 10, s++);
                    for (h = w[0] += a, a = 1; h >= 10; h /= 10, a++);
                    s != a && (t.e++, w[0] == u && (w[0] = 1));
                    break;
                  }
                  if (((w[g] += a), w[g] != u)) break;
                  (w[g--] = 0), (a = 1);
                }
              for (s = w.length; 0 === w[--s]; w.pop());
            }
            t.e > T ? (t.c = t.e = null) : t.e < S && (t.c = [(t.e = 0)]);
          }
          return t;
        }
        function G(t) {
          var e,
            r = t.e;
          return null === r
            ? t.toString()
            : ((e = y(t.c)),
              (e = r <= R || r >= N ? b(e, r) : E(e, r, "0")),
              t.s < 0 ? "-" + e : e);
        }
        return (
          (k.clone = t),
          (k.ROUND_UP = 0),
          (k.ROUND_DOWN = 1),
          (k.ROUND_CEIL = 2),
          (k.ROUND_FLOOR = 3),
          (k.ROUND_HALF_UP = 4),
          (k.ROUND_HALF_DOWN = 5),
          (k.ROUND_HALF_EVEN = 6),
          (k.ROUND_HALF_CEIL = 7),
          (k.ROUND_HALF_FLOOR = 8),
          (k.EUCLID = 9),
          (k.config = k.set =
            function (t) {
              var e, r;
              if (null != t) {
                if ("object" != typeof t)
                  throw Error(f + "Object expected: " + t);
                if (
                  (t.hasOwnProperty((e = "DECIMAL_PLACES")) &&
                    (d((r = t[e]), 0, p, e), (O = r)),
                  t.hasOwnProperty((e = "ROUNDING_MODE")) &&
                    (d((r = t[e]), 0, 8, e), (U = r)),
                  t.hasOwnProperty((e = "EXPONENTIAL_AT")) &&
                    ((r = t[e]) && r.pop
                      ? (d(r[0], -p, 0, e),
                        d(r[1], 0, p, e),
                        (R = r[0]),
                        (N = r[1]))
                      : (d(r, -p, p, e), (R = -(N = r < 0 ? -r : r)))),
                  t.hasOwnProperty((e = "RANGE")))
                )
                  if ((r = t[e]) && r.pop)
                    d(r[0], -p, -1, e),
                      d(r[1], 1, p, e),
                      (S = r[0]),
                      (T = r[1]);
                  else {
                    if ((d(r, -p, p, e), !r))
                      throw Error(f + e + " cannot be zero: " + r);
                    S = -(T = r < 0 ? -r : r);
                  }
                if (t.hasOwnProperty((e = "CRYPTO"))) {
                  if ((r = t[e]) !== !!r)
                    throw Error(f + e + " not true or false: " + r);
                  if (r) {
                    if (
                      "undefined" == typeof crypto ||
                      !crypto ||
                      (!crypto.getRandomValues && !crypto.randomBytes)
                    )
                      throw ((L = !r), Error(f + "crypto unavailable"));
                    L = r;
                  } else L = r;
                }
                if (
                  (t.hasOwnProperty((e = "MODULO_MODE")) &&
                    (d((r = t[e]), 0, 9, e), (_ = r)),
                  t.hasOwnProperty((e = "POW_PRECISION")) &&
                    (d((r = t[e]), 0, p, e), (x = r)),
                  t.hasOwnProperty((e = "FORMAT")))
                ) {
                  if ("object" != typeof (r = t[e]))
                    throw Error(f + e + " not an object: " + r);
                  P = r;
                }
                if (t.hasOwnProperty((e = "ALPHABET"))) {
                  if (
                    "string" != typeof (r = t[e]) ||
                    /^.?$|[+\-.\s]|(.).*\1/.test(r)
                  )
                    throw Error(f + e + " invalid: " + r);
                  ($ = "0123456789" == r.slice(0, 10)), (C = r);
                }
              }
              return {
                DECIMAL_PLACES: O,
                ROUNDING_MODE: U,
                EXPONENTIAL_AT: [R, N],
                RANGE: [S, T],
                CRYPTO: L,
                MODULO_MODE: _,
                POW_PRECISION: x,
                FORMAT: P,
                ALPHABET: C,
              };
            }),
          (k.isBigNumber = function (t) {
            if (!t || !0 !== t._isBigNumber) return !1;
            if (!k.DEBUG) return !0;
            var e,
              r,
              n = t.c,
              i = t.e,
              s = t.s;
            t: if ("[object Array]" == {}.toString.call(n)) {
              if ((1 === s || -1 === s) && i >= -p && i <= p && i === o(i)) {
                if (0 === n[0]) {
                  if (0 === i && 1 === n.length) return !0;
                  break t;
                }
                if (
                  ((e = (i + 1) % c) < 1 && (e += c), String(n[0]).length == e)
                ) {
                  for (e = 0; e < n.length; e++)
                    if ((r = n[e]) < 0 || r >= u || r !== o(r)) break t;
                  if (0 !== r) return !0;
                }
              }
            } else if (
              null === n &&
              null === i &&
              (null === s || 1 === s || -1 === s)
            )
              return !0;
            throw Error(f + "Invalid BigNumber: " + t);
          }),
          (k.maximum = k.max =
            function () {
              return M(arguments, -1);
            }),
          (k.minimum = k.min =
            function () {
              return M(arguments, 1);
            }),
          (k.random = (function () {
            var t = 9007199254740992,
              e =
                (Math.random() * t) & 2097151
                  ? function () {
                      return o(Math.random() * t);
                    }
                  : function () {
                      return (
                        8388608 * ((1073741824 * Math.random()) | 0) +
                        ((8388608 * Math.random()) | 0)
                      );
                    };
            return function (t) {
              var r,
                n,
                s,
                u,
                h,
                a = 0,
                g = [],
                y = new k(I);
              if ((null == t ? (t = O) : d(t, 0, p), (u = i(t / c)), L))
                if (crypto.getRandomValues) {
                  for (
                    r = crypto.getRandomValues(new Uint32Array((u *= 2)));
                    a < u;

                  )
                    (h = 131072 * r[a] + (r[a + 1] >>> 11)) >= 9e15
                      ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                        (r[a] = n[0]),
                        (r[a + 1] = n[1]))
                      : (g.push(h % 1e14), (a += 2));
                  a = u / 2;
                } else {
                  if (!crypto.randomBytes)
                    throw ((L = !1), Error(f + "crypto unavailable"));
                  for (r = crypto.randomBytes((u *= 7)); a < u; )
                    (h =
                      281474976710656 * (31 & r[a]) +
                      1099511627776 * r[a + 1] +
                      4294967296 * r[a + 2] +
                      16777216 * r[a + 3] +
                      (r[a + 4] << 16) +
                      (r[a + 5] << 8) +
                      r[a + 6]) >= 9e15
                      ? crypto.randomBytes(7).copy(r, a)
                      : (g.push(h % 1e14), (a += 7));
                  a = u / 7;
                }
              if (!L) for (; a < u; ) (h = e()) < 9e15 && (g[a++] = h % 1e14);
              for (
                u = g[--a],
                  t %= c,
                  u && t && ((h = l[c - t]), (g[a] = o(u / h) * h));
                0 === g[a];
                g.pop(), a--
              );
              if (a < 0) g = [(s = 0)];
              else {
                for (s = -1; 0 === g[0]; g.splice(0, 1), s -= c);
                for (a = 1, h = g[0]; h >= 10; h /= 10, a++);
                a < c && (s -= c - a);
              }
              return (y.e = s), (y.c = g), y;
            };
          })()),
          (k.sum = function () {
            for (var t = 1, e = arguments, r = new k(e[0]); t < e.length; )
              r = r.plus(e[t++]);
            return r;
          }),
          (B = (function () {
            var t = "0123456789";
            function e(t, e, r, n) {
              for (var i, o, f = [0], s = 0, u = t.length; s < u; ) {
                for (o = f.length; o--; f[o] *= e);
                for (f[0] += n.indexOf(t.charAt(s++)), i = 0; i < f.length; i++)
                  f[i] > r - 1 &&
                    (null == f[i + 1] && (f[i + 1] = 0),
                    (f[i + 1] += (f[i] / r) | 0),
                    (f[i] %= r));
              }
              return f.reverse();
            }
            return function (n, i, o, f, s) {
              var u,
                c,
                h,
                l,
                a,
                p,
                g,
                w,
                d = n.indexOf("."),
                m = O,
                b = U;
              for (
                d >= 0 &&
                  ((l = x),
                  (x = 0),
                  (n = n.replace(".", "")),
                  (p = (w = new k(i)).pow(n.length - d)),
                  (x = l),
                  (w.c = e(E(y(p.c), p.e, "0"), 10, o, t)),
                  (w.e = w.c.length)),
                  h = l =
                    (g = e(n, i, o, s ? ((u = C), t) : ((u = t), C))).length;
                0 == g[--l];
                g.pop()
              );
              if (!g[0]) return u.charAt(0);
              if (
                (d < 0
                  ? --h
                  : ((p.c = g),
                    (p.e = h),
                    (p.s = f),
                    (g = (p = r(p, w, m, b, o)).c),
                    (a = p.r),
                    (h = p.e)),
                (d = g[(c = h + m + 1)]),
                (l = o / 2),
                (a = a || c < 0 || null != g[c + 1]),
                (a =
                  b < 4
                    ? (null != d || a) && (0 == b || b == (p.s < 0 ? 3 : 2))
                    : d > l ||
                      (d == l &&
                        (4 == b ||
                          a ||
                          (6 == b && 1 & g[c - 1]) ||
                          b == (p.s < 0 ? 8 : 7)))),
                c < 1 || !g[0])
              )
                n = a ? E(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
              else {
                if (((g.length = c), a))
                  for (--o; ++g[--c] > o; )
                    (g[c] = 0), c || (++h, (g = [1].concat(g)));
                for (l = g.length; !g[--l]; );
                for (d = 0, n = ""; d <= l; n += u.charAt(g[d++]));
                n = E(n, h, u.charAt(0));
              }
              return n;
            };
          })()),
          (r = (function () {
            function t(t, e, r) {
              var n,
                i,
                o,
                f,
                s = 0,
                u = t.length,
                c = e % a,
                h = (e / a) | 0;
              for (t = t.slice(); u--; )
                (s =
                  (((i =
                    c * (o = t[u] % a) +
                    ((n = h * o + (f = (t[u] / a) | 0) * c) % a) * a +
                    s) /
                    r) |
                    0) +
                  ((n / a) | 0) +
                  h * f),
                  (t[u] = i % r);
              return s && (t = [s].concat(t)), t;
            }
            function e(t, e, r, n) {
              var i, o;
              if (r != n) o = r > n ? 1 : -1;
              else
                for (i = o = 0; i < r; i++)
                  if (t[i] != e[i]) {
                    o = t[i] > e[i] ? 1 : -1;
                    break;
                  }
              return o;
            }
            function r(t, e, r, n) {
              for (var i = 0; r--; )
                (t[r] -= i),
                  (i = t[r] < e[r] ? 1 : 0),
                  (t[r] = i * n + t[r] - e[r]);
              for (; !t[0] && t.length > 1; t.splice(0, 1));
            }
            return function (n, i, f, s, h) {
              var l,
                a,
                p,
                y,
                w,
                d,
                m,
                b,
                E,
                B,
                v,
                A,
                I,
                O,
                U,
                R,
                N,
                S = n.s == i.s ? 1 : -1,
                T = n.c,
                L = i.c;
              if (!T || !T[0] || !L || !L[0])
                return new k(
                  n.s && i.s && (T ? !L || T[0] != L[0] : L)
                    ? (T && 0 == T[0]) || !L
                      ? 0 * S
                      : S / 0
                    : NaN
                );
              for (
                E = (b = new k(S)).c = [],
                  S = f + (a = n.e - i.e) + 1,
                  h ||
                    ((h = u), (a = g(n.e / c) - g(i.e / c)), (S = (S / c) | 0)),
                  p = 0;
                L[p] == (T[p] || 0);
                p++
              );
              if ((L[p] > (T[p] || 0) && a--, S < 0)) E.push(1), (y = !0);
              else {
                for (
                  O = T.length,
                    R = L.length,
                    p = 0,
                    S += 2,
                    (w = o(h / (L[0] + 1))) > 1 &&
                      ((L = t(L, w, h)),
                      (T = t(T, w, h)),
                      (R = L.length),
                      (O = T.length)),
                    I = R,
                    v = (B = T.slice(0, R)).length;
                  v < R;
                  B[v++] = 0
                );
                (N = L.slice()),
                  (N = [0].concat(N)),
                  (U = L[0]),
                  L[1] >= h / 2 && U++;
                do {
                  if (((w = 0), (l = e(L, B, R, v)) < 0)) {
                    if (
                      ((A = B[0]),
                      R != v && (A = A * h + (B[1] || 0)),
                      (w = o(A / U)) > 1)
                    )
                      for (
                        w >= h && (w = h - 1),
                          m = (d = t(L, w, h)).length,
                          v = B.length;
                        1 == e(d, B, m, v);

                      )
                        w--, r(d, R < m ? N : L, m, h), (m = d.length), (l = 1);
                    else 0 == w && (l = w = 1), (m = (d = L.slice()).length);
                    if (
                      (m < v && (d = [0].concat(d)),
                      r(B, d, v, h),
                      (v = B.length),
                      -1 == l)
                    )
                      for (; e(L, B, R, v) < 1; )
                        w++, r(B, R < v ? N : L, v, h), (v = B.length);
                  } else 0 === l && (w++, (B = [0]));
                  (E[p++] = w),
                    B[0] ? (B[v++] = T[I] || 0) : ((B = [T[I]]), (v = 1));
                } while ((I++ < O || null != B[0]) && S--);
                (y = null != B[0]), E[0] || E.splice(0, 1);
              }
              if (h == u) {
                for (p = 1, S = E[0]; S >= 10; S /= 10, p++);
                j(b, f + (b.e = p + a * c - 1) + 1, s, y);
              } else (b.e = a), (b.r = +y);
              return b;
            };
          })()),
          (v = (function () {
            var t = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
              e = /^([^.]+)\.$/,
              r = /^\.([^.]+)$/,
              n = /^-?(Infinity|NaN)$/,
              i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function (o, s, u, c) {
              var h,
                l = u ? s : s.replace(i, "");
              if (n.test(l)) o.s = isNaN(l) ? null : l < 0 ? -1 : 1;
              else {
                if (
                  !u &&
                  ((l = l.replace(t, function (t, e, r) {
                    return (
                      (h =
                        "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                      c && c != h ? t : e
                    );
                  })),
                  c && ((h = c), (l = l.replace(e, "$1").replace(r, "0.$1"))),
                  s != l)
                )
                  return new k(l, h);
                if (k.DEBUG)
                  throw Error(
                    f + "Not a" + (c ? " base " + c : "") + " number: " + s
                  );
                o.s = null;
              }
              o.c = o.e = null;
            };
          })()),
          (A.absoluteValue = A.abs =
            function () {
              var t = new k(this);
              return t.s < 0 && (t.s = 1), t;
            }),
          (A.comparedTo = function (t, e) {
            return w(this, new k(t, e));
          }),
          (A.decimalPlaces = A.dp =
            function (t, e) {
              var r,
                n,
                i,
                o = this;
              if (null != t)
                return (
                  d(t, 0, p),
                  null == e ? (e = U) : d(e, 0, 8),
                  j(new k(o), t + o.e + 1, e)
                );
              if (!(r = o.c)) return null;
              if (((n = ((i = r.length - 1) - g(this.e / c)) * c), (i = r[i])))
                for (; i % 10 == 0; i /= 10, n--);
              return n < 0 && (n = 0), n;
            }),
          (A.dividedBy = A.div =
            function (t, e) {
              return r(this, new k(t, e), O, U);
            }),
          (A.dividedToIntegerBy = A.idiv =
            function (t, e) {
              return r(this, new k(t, e), 0, 1);
            }),
          (A.exponentiatedBy = A.pow =
            function (t, e) {
              var r,
                n,
                s,
                u,
                h,
                l,
                a,
                p,
                g = this;
              if ((t = new k(t)).c && !t.isInteger())
                throw Error(f + "Exponent not an integer: " + G(t));
              if (
                (null != e && (e = new k(e)),
                (h = t.e > 14),
                !g.c ||
                  !g.c[0] ||
                  (1 == g.c[0] && !g.e && 1 == g.c.length) ||
                  !t.c ||
                  !t.c[0])
              )
                return (
                  (p = new k(Math.pow(+G(g), h ? t.s * (2 - m(t)) : +G(t)))),
                  e ? p.mod(e) : p
                );
              if (((l = t.s < 0), e)) {
                if (e.c ? !e.c[0] : !e.s) return new k(NaN);
                (n = !l && g.isInteger() && e.isInteger()) && (g = g.mod(e));
              } else {
                if (
                  t.e > 9 &&
                  (g.e > 0 ||
                    g.e < -1 ||
                    (0 == g.e
                      ? g.c[0] > 1 || (h && g.c[1] >= 24e7)
                      : g.c[0] < 8e13 || (h && g.c[0] <= 9999975e7)))
                )
                  return (
                    (u = g.s < 0 && m(t) ? -0 : 0),
                    g.e > -1 && (u = 1 / u),
                    new k(l ? 1 / u : u)
                  );
                x && (u = i(x / c + 2));
              }
              for (
                h
                  ? ((r = new k(0.5)), l && (t.s = 1), (a = m(t)))
                  : (a = (s = Math.abs(+G(t))) % 2),
                  p = new k(I);
                ;

              ) {
                if (a) {
                  if (!(p = p.times(g)).c) break;
                  u ? p.c.length > u && (p.c.length = u) : n && (p = p.mod(e));
                }
                if (s) {
                  if (0 === (s = o(s / 2))) break;
                  a = s % 2;
                } else if ((j((t = t.times(r)), t.e + 1, 1), t.e > 14))
                  a = m(t);
                else {
                  if (0 === (s = +G(t))) break;
                  a = s % 2;
                }
                (g = g.times(g)),
                  u
                    ? g.c && g.c.length > u && (g.c.length = u)
                    : n && (g = g.mod(e));
              }
              return n
                ? p
                : (l && (p = I.div(p)),
                  e ? p.mod(e) : u ? j(p, x, U, undefined) : p);
            }),
          (A.integerValue = function (t) {
            var e = new k(this);
            return null == t ? (t = U) : d(t, 0, 8), j(e, e.e + 1, t);
          }),
          (A.isEqualTo = A.eq =
            function (t, e) {
              return 0 === w(this, new k(t, e));
            }),
          (A.isFinite = function () {
            return !!this.c;
          }),
          (A.isGreaterThan = A.gt =
            function (t, e) {
              return w(this, new k(t, e)) > 0;
            }),
          (A.isGreaterThanOrEqualTo = A.gte =
            function (t, e) {
              return 1 === (e = w(this, new k(t, e))) || 0 === e;
            }),
          (A.isInteger = function () {
            return !!this.c && g(this.e / c) > this.c.length - 2;
          }),
          (A.isLessThan = A.lt =
            function (t, e) {
              return w(this, new k(t, e)) < 0;
            }),
          (A.isLessThanOrEqualTo = A.lte =
            function (t, e) {
              return -1 === (e = w(this, new k(t, e))) || 0 === e;
            }),
          (A.isNaN = function () {
            return !this.s;
          }),
          (A.isNegative = function () {
            return this.s < 0;
          }),
          (A.isPositive = function () {
            return this.s > 0;
          }),
          (A.isZero = function () {
            return !!this.c && 0 == this.c[0];
          }),
          (A.minus = function (t, e) {
            var r,
              n,
              i,
              o,
              f = this,
              s = f.s;
            if (((e = (t = new k(t, e)).s), !s || !e)) return new k(NaN);
            if (s != e) return (t.s = -e), f.plus(t);
            var h = f.e / c,
              l = t.e / c,
              a = f.c,
              p = t.c;
            if (!h || !l) {
              if (!a || !p) return a ? ((t.s = -e), t) : new k(p ? f : NaN);
              if (!a[0] || !p[0])
                return p[0]
                  ? ((t.s = -e), t)
                  : new k(a[0] ? f : 3 == U ? -0 : 0);
            }
            if (((h = g(h)), (l = g(l)), (a = a.slice()), (s = h - l))) {
              for (
                (o = s < 0) ? ((s = -s), (i = a)) : ((l = h), (i = p)),
                  i.reverse(),
                  e = s;
                e--;
                i.push(0)
              );
              i.reverse();
            } else
              for (
                n = (o = (s = a.length) < (e = p.length)) ? s : e, s = e = 0;
                e < n;
                e++
              )
                if (a[e] != p[e]) {
                  o = a[e] < p[e];
                  break;
                }
            if (
              (o && ((i = a), (a = p), (p = i), (t.s = -t.s)),
              (e = (n = p.length) - (r = a.length)) > 0)
            )
              for (; e--; a[r++] = 0);
            for (e = u - 1; n > s; ) {
              if (a[--n] < p[n]) {
                for (r = n; r && !a[--r]; a[r] = e);
                --a[r], (a[n] += u);
              }
              a[n] -= p[n];
            }
            for (; 0 == a[0]; a.splice(0, 1), --l);
            return a[0]
              ? F(t, a, l)
              : ((t.s = 3 == U ? -1 : 1), (t.c = [(t.e = 0)]), t);
          }),
          (A.modulo = A.mod =
            function (t, e) {
              var n,
                i,
                o = this;
              return (
                (t = new k(t, e)),
                !o.c || !t.s || (t.c && !t.c[0])
                  ? new k(NaN)
                  : !t.c || (o.c && !o.c[0])
                  ? new k(o)
                  : (9 == _
                      ? ((i = t.s),
                        (t.s = 1),
                        (n = r(o, t, 0, 3)),
                        (t.s = i),
                        (n.s *= i))
                      : (n = r(o, t, 0, _)),
                    (t = o.minus(n.times(t))).c[0] || 1 != _ || (t.s = o.s),
                    t)
              );
            }),
          (A.multipliedBy = A.times =
            function (t, e) {
              var r,
                n,
                i,
                o,
                f,
                s,
                h,
                l,
                p,
                y,
                w,
                d,
                m,
                b,
                E,
                B = this,
                v = B.c,
                A = (t = new k(t, e)).c;
              if (!v || !A || !v[0] || !A[0])
                return (
                  !B.s || !t.s || (v && !v[0] && !A) || (A && !A[0] && !v)
                    ? (t.c = t.e = t.s = null)
                    : ((t.s *= B.s),
                      v && A ? ((t.c = [0]), (t.e = 0)) : (t.c = t.e = null)),
                  t
                );
              for (
                n = g(B.e / c) + g(t.e / c),
                  t.s *= B.s,
                  (h = v.length) < (y = A.length) &&
                    ((m = v), (v = A), (A = m), (i = h), (h = y), (y = i)),
                  i = h + y,
                  m = [];
                i--;
                m.push(0)
              );
              for (b = u, E = a, i = y; --i >= 0; ) {
                for (
                  r = 0, w = A[i] % E, d = (A[i] / E) | 0, o = i + (f = h);
                  o > i;

                )
                  (r =
                    (((l =
                      w * (l = v[--f] % E) +
                      ((s = d * l + (p = (v[f] / E) | 0) * w) % E) * E +
                      m[o] +
                      r) /
                      b) |
                      0) +
                    ((s / E) | 0) +
                    d * p),
                    (m[o--] = l % b);
                m[o] = r;
              }
              return r ? ++n : m.splice(0, 1), F(t, m, n);
            }),
          (A.negated = function () {
            var t = new k(this);
            return (t.s = -t.s || null), t;
          }),
          (A.plus = function (t, e) {
            var r,
              n = this,
              i = n.s;
            if (((e = (t = new k(t, e)).s), !i || !e)) return new k(NaN);
            if (i != e) return (t.s = -e), n.minus(t);
            var o = n.e / c,
              f = t.e / c,
              s = n.c,
              h = t.c;
            if (!o || !f) {
              if (!s || !h) return new k(i / 0);
              if (!s[0] || !h[0]) return h[0] ? t : new k(s[0] ? n : 0 * i);
            }
            if (((o = g(o)), (f = g(f)), (s = s.slice()), (i = o - f))) {
              for (
                i > 0 ? ((f = o), (r = h)) : ((i = -i), (r = s)), r.reverse();
                i--;
                r.push(0)
              );
              r.reverse();
            }
            for (
              (i = s.length) - (e = h.length) < 0 &&
                ((r = h), (h = s), (s = r), (e = i)),
                i = 0;
              e;

            )
              (i = ((s[--e] = s[e] + h[e] + i) / u) | 0),
                (s[e] = u === s[e] ? 0 : s[e] % u);
            return i && ((s = [i].concat(s)), ++f), F(t, s, f);
          }),
          (A.precision = A.sd =
            function (t, e) {
              var r,
                n,
                i,
                o = this;
              if (null != t && t !== !!t)
                return (
                  d(t, 1, p),
                  null == e ? (e = U) : d(e, 0, 8),
                  j(new k(o), t, e)
                );
              if (!(r = o.c)) return null;
              if (((n = (i = r.length - 1) * c + 1), (i = r[i]))) {
                for (; i % 10 == 0; i /= 10, n--);
                for (i = r[0]; i >= 10; i /= 10, n++);
              }
              return t && o.e + 1 > n && (n = o.e + 1), n;
            }),
          (A.shiftedBy = function (t) {
            return d(t, -9007199254740991, h), this.times("1e" + t);
          }),
          (A.squareRoot = A.sqrt =
            function () {
              var t,
                e,
                n,
                i,
                o,
                f = this,
                s = f.c,
                u = f.s,
                c = f.e,
                h = O + 4,
                l = new k("0.5");
              if (1 !== u || !s || !s[0])
                return new k(
                  !u || (u < 0 && (!s || s[0])) ? NaN : s ? f : 1 / 0
                );
              if (
                (0 == (u = Math.sqrt(+G(f))) || u == 1 / 0
                  ? (((e = y(s)).length + c) % 2 == 0 && (e += "0"),
                    (u = Math.sqrt(+e)),
                    (c = g((c + 1) / 2) - (c < 0 || c % 2)),
                    (n = new k(
                      (e =
                        u == 1 / 0
                          ? "5e" + c
                          : (e = u.toExponential()).slice(
                              0,
                              e.indexOf("e") + 1
                            ) + c)
                    )))
                  : (n = new k(u + "")),
                n.c[0])
              )
                for ((u = (c = n.e) + h) < 3 && (u = 0); ; )
                  if (
                    ((o = n),
                    (n = l.times(o.plus(r(f, o, h, 1)))),
                    y(o.c).slice(0, u) === (e = y(n.c)).slice(0, u))
                  ) {
                    if (
                      (n.e < c && --u,
                      "9999" != (e = e.slice(u - 3, u + 1)) &&
                        (i || "4999" != e))
                    ) {
                      (+e && (+e.slice(1) || "5" != e.charAt(0))) ||
                        (j(n, n.e + O + 2, 1), (t = !n.times(n).eq(f)));
                      break;
                    }
                    if (!i && (j(o, o.e + O + 2, 0), o.times(o).eq(f))) {
                      n = o;
                      break;
                    }
                    (h += 4), (u += 4), (i = 1);
                  }
              return j(n, n.e + O + 1, U, t);
            }),
          (A.toExponential = function (t, e) {
            return null != t && (d(t, 0, p), t++), D(this, t, e, 1);
          }),
          (A.toFixed = function (t, e) {
            return (
              null != t && (d(t, 0, p), (t = t + this.e + 1)), D(this, t, e)
            );
          }),
          (A.toFormat = function (t, e, r) {
            var n,
              i = this;
            if (null == r)
              null != t && e && "object" == typeof e
                ? ((r = e), (e = null))
                : t && "object" == typeof t
                ? ((r = t), (t = e = null))
                : (r = P);
            else if ("object" != typeof r)
              throw Error(f + "Argument not an object: " + r);
            if (((n = i.toFixed(t, e)), i.c)) {
              var o,
                s = n.split("."),
                u = +r.groupSize,
                c = +r.secondaryGroupSize,
                h = r.groupSeparator || "",
                l = s[0],
                a = s[1],
                p = i.s < 0,
                g = p ? l.slice(1) : l,
                y = g.length;
              if (
                (c && ((o = u), (u = c), (c = o), (y -= o)), u > 0 && y > 0)
              ) {
                for (o = y % u || u, l = g.substr(0, o); o < y; o += u)
                  l += h + g.substr(o, u);
                c > 0 && (l += h + g.slice(o)), p && (l = "-" + l);
              }
              n = a
                ? l +
                  (r.decimalSeparator || "") +
                  ((c = +r.fractionGroupSize)
                    ? a.replace(
                        new RegExp("\\d{" + c + "}\\B", "g"),
                        "$&" + (r.fractionGroupSeparator || "")
                      )
                    : a)
                : l;
            }
            return (r.prefix || "") + n + (r.suffix || "");
          }),
          (A.toFraction = function (t) {
            var e,
              n,
              i,
              o,
              s,
              u,
              h,
              a,
              p,
              g,
              w,
              d,
              m = this,
              b = m.c;
            if (
              null != t &&
              ((!(h = new k(t)).isInteger() && (h.c || 1 !== h.s)) || h.lt(I))
            )
              throw Error(
                f +
                  "Argument " +
                  (h.isInteger() ? "out of range: " : "not an integer: ") +
                  G(h)
              );
            if (!b) return new k(m);
            for (
              e = new k(I),
                p = n = new k(I),
                i = a = new k(I),
                d = y(b),
                s = e.e = d.length - m.e - 1,
                e.c[0] = l[(u = s % c) < 0 ? c + u : u],
                t = !t || h.comparedTo(e) > 0 ? (s > 0 ? e : p) : h,
                u = T,
                T = 1 / 0,
                h = new k(d),
                a.c[0] = 0;
              (g = r(h, e, 0, 1)), 1 != (o = n.plus(g.times(i))).comparedTo(t);

            )
              (n = i),
                (i = o),
                (p = a.plus(g.times((o = p)))),
                (a = o),
                (e = h.minus(g.times((o = e)))),
                (h = o);
            return (
              (o = r(t.minus(n), i, 0, 1)),
              (a = a.plus(o.times(p))),
              (n = n.plus(o.times(i))),
              (a.s = p.s = m.s),
              (w =
                r(p, i, (s *= 2), U)
                  .minus(m)
                  .abs()
                  .comparedTo(r(a, n, s, U).minus(m).abs()) < 1
                  ? [p, i]
                  : [a, n]),
              (T = u),
              w
            );
          }),
          (A.toNumber = function () {
            return +G(this);
          }),
          (A.toPrecision = function (t, e) {
            return null != t && d(t, 1, p), D(this, t, e, 2);
          }),
          (A.toString = function (t) {
            var e,
              r = this,
              n = r.s,
              i = r.e;
            return (
              null === i
                ? n
                  ? ((e = "Infinity"), n < 0 && (e = "-" + e))
                  : (e = "NaN")
                : (null == t
                    ? (e = i <= R || i >= N ? b(y(r.c), i) : E(y(r.c), i, "0"))
                    : 10 === t && $
                    ? (e = E(y((r = j(new k(r), O + i + 1, U)).c), r.e, "0"))
                    : (d(t, 2, C.length, "Base"),
                      (e = B(E(y(r.c), i, "0"), 10, t, n, !0))),
                  n < 0 && r.c[0] && (e = "-" + e)),
              e
            );
          }),
          (A.valueOf = A.toJSON =
            function () {
              return G(this);
            }),
          (A._isBigNumber = !0),
          (A[Symbol.toStringTag] = "BigNumber"),
          (A[Symbol.for("nodejs.util.inspect.custom")] = A.valueOf),
          null != e && k.set(e),
          k
        );
      })();
      const v = B;
    },
  },
]);
