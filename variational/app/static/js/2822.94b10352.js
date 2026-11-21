/*! For license information please see 2822.94b10352.js.LICENSE.txt */
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [2822],
  {
    9864: (t, e, n) => {
      "use strict";
      n.d(e, {
        Id: () => A,
        My: () => u,
        OG: () => $,
        Ph: () => y,
        Q5: () => I,
        aK: () => B,
        aT: () => g,
        aY: () => o,
        dJ: () => _,
        e8: () => a,
        fg: () => O,
        lX: () => w,
        lq: () => b,
        qj: () => m,
        r4: () => E,
        x: () => N,
        z: () => v,
        zW: () => h,
      });
      const r = BigInt(0),
        i = BigInt(1);
      function o(t) {
        return (
          t instanceof Uint8Array ||
          (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
        );
      }
      function s(t) {
        if (!o(t)) throw new Error("Uint8Array expected");
      }
      function a(t, e) {
        if ("boolean" !== typeof e)
          throw new Error(t + " boolean expected, got " + e);
      }
      function h(t) {
        const e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function c(t) {
        if ("string" !== typeof t)
          throw new Error("hex string expected, got " + typeof t);
        return "" === t ? r : BigInt("0x" + t);
      }
      const l =
          "function" === typeof Uint8Array.from([]).toHex &&
          "function" === typeof Uint8Array.fromHex,
        f = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, "0")
        );
      function u(t) {
        if ((s(t), l)) return t.toHex();
        let e = "";
        for (let n = 0; n < t.length; n++) e += f[t[n]];
        return e;
      }
      const d = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function p(t) {
        return t >= d._0 && t <= d._9
          ? t - d._0
          : t >= d.A && t <= d.F
          ? t - (d.A - 10)
          : t >= d.a && t <= d.f
          ? t - (d.a - 10)
          : void 0;
      }
      function g(t) {
        if ("string" !== typeof t)
          throw new Error("hex string expected, got " + typeof t);
        if (l) return Uint8Array.fromHex(t);
        const e = t.length,
          n = e / 2;
        if (e % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + e
          );
        const r = new Uint8Array(n);
        for (let i = 0, o = 0; i < n; i++, o += 2) {
          const e = p(t.charCodeAt(o)),
            n = p(t.charCodeAt(o + 1));
          if (void 0 === e || void 0 === n) {
            const e = t[o] + t[o + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                e +
                '" at index ' +
                o
            );
          }
          r[i] = 16 * e + n;
        }
        return r;
      }
      function y(t) {
        return c(u(t));
      }
      function w(t) {
        return s(t), c(u(Uint8Array.from(t).reverse()));
      }
      function b(t, e) {
        return g(t.toString(16).padStart(2 * e, "0"));
      }
      function v(t, e) {
        return b(t, e).reverse();
      }
      function m(t, e, n) {
        let r;
        if ("string" === typeof e)
          try {
            r = g(e);
          } catch (s) {
            throw new Error(
              t + " must be hex string or Uint8Array, cause: " + s
            );
          }
        else {
          if (!o(e)) throw new Error(t + " must be hex string or Uint8Array");
          r = Uint8Array.from(e);
        }
        const i = r.length;
        if ("number" === typeof n && i !== n)
          throw new Error(t + " of length " + n + " expected, got " + i);
        return r;
      }
      function A() {
        let t = 0;
        for (let n = 0; n < arguments.length; n++) {
          const e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          s(e), (t += e.length);
        }
        const e = new Uint8Array(t);
        for (let n = 0, r = 0; n < arguments.length; n++) {
          const t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          e.set(t, r), (r += t.length);
        }
        return e;
      }
      const x = (t) => "bigint" === typeof t && r <= t;
      function E(t, e, n) {
        return x(t) && x(e) && x(n) && e <= t && t < n;
      }
      function B(t, e, n, r) {
        if (!E(e, n, r))
          throw new Error(
            "expected valid " + t + ": " + n + " <= n < " + r + ", got " + e
          );
      }
      function _(t) {
        let e;
        for (e = 0; t > r; t >>= i, e += 1);
        return e;
      }
      const $ = (t) => (i << BigInt(t)) - i,
        H = (t) => new Uint8Array(t),
        S = (t) => Uint8Array.from(t);
      function O(t, e, n) {
        if ("number" !== typeof t || t < 2)
          throw new Error("hashLen must be a number");
        if ("number" !== typeof e || e < 2)
          throw new Error("qByteLen must be a number");
        if ("function" !== typeof n)
          throw new Error("hmacFn must be a function");
        let r = H(t),
          i = H(t),
          o = 0;
        const s = () => {
            r.fill(1), i.fill(0), (o = 0);
          },
          a = function () {
            for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
              e[o] = arguments[o];
            return n(i, r, ...e);
          },
          h = function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : H(0);
            (i = a(S([0]), t)),
              (r = a()),
              0 !== t.length && ((i = a(S([1]), t)), (r = a()));
          },
          c = () => {
            if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let t = 0;
            const n = [];
            for (; t < e; ) {
              r = a();
              const e = r.slice();
              n.push(e), (t += r.length);
            }
            return A(...n);
          };
        return (t, e) => {
          let n;
          for (s(), h(t); !(n = e(c())); ) h();
          return s(), n;
        };
      }
      const C = {
        bigint: (t) => "bigint" === typeof t,
        function: (t) => "function" === typeof t,
        boolean: (t) => "boolean" === typeof t,
        string: (t) => "string" === typeof t,
        stringOrUint8Array: (t) => "string" === typeof t || o(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" === typeof t && Number.isSafeInteger(t.outputLen),
      };
      function I(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const r = (e, n, r) => {
          const i = C[n];
          if ("function" !== typeof i)
            throw new Error("invalid validator function");
          const o = t[e];
          if ((!r || void 0 !== o) && !i(o, t))
            throw new Error(
              "param " + String(e) + " is invalid. Expected " + n + ", got " + o
            );
        };
        for (const [i, o] of Object.entries(e)) r(i, o, !1);
        for (const [i, o] of Object.entries(n)) r(i, o, !0);
        return t;
      }
      function N(t) {
        const e = new WeakMap();
        return function (n) {
          const r = e.get(n);
          if (void 0 !== r) return r;
          for (
            var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
            s < i;
            s++
          )
            o[s - 1] = arguments[s];
          const a = t(n, ...o);
          return e.set(n, a), a;
        };
      }
    },
    11920: (t, e, n) => {
      "use strict";
      n.d(e, { sc: () => l });
      var r = n(98379);
      function i(t, e, n) {
        return (t & e) ^ (t & n) ^ (e & n);
      }
      class o extends r.Vw {
        constructor(t, e, n, i) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = n),
            (this.isLE = i),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, r.O8)(this.buffer));
        }
        update(t) {
          (0, r.CC)(this), (t = (0, r.ZJ)(t)), (0, r.DO)(t);
          const { view: e, buffer: n, blockLen: i } = this,
            o = t.length;
          for (let s = 0; s < o; ) {
            const a = Math.min(i - this.pos, o - s);
            if (a !== i)
              n.set(t.subarray(s, s + a), this.pos),
                (this.pos += a),
                (s += a),
                this.pos === i && (this.process(e, 0), (this.pos = 0));
            else {
              const e = (0, r.O8)(t);
              for (; i <= o - s; s += i) this.process(e, s);
            }
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, r.CC)(this), (0, r.Ht)(t, this), (this.finished = !0);
          const { buffer: e, view: n, blockLen: i, isLE: o } = this;
          let { pos: s } = this;
          (e[s++] = 128),
            (0, r.uH)(this.buffer.subarray(s)),
            this.padOffset > i - s && (this.process(n, 0), (s = 0));
          for (let r = s; r < i; r++) e[r] = 0;
          !(function (t, e, n, r) {
            if ("function" === typeof t.setBigUint64)
              return t.setBigUint64(e, n, r);
            const i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((n >> i) & o),
              a = Number(n & o),
              h = r ? 4 : 0,
              c = r ? 0 : 4;
            t.setUint32(e + h, s, r), t.setUint32(e + c, a, r);
          })(n, i - 8, BigInt(8 * this.length), o),
            this.process(n, 0);
          const a = (0, r.O8)(t),
            h = this.outputLen;
          if (h % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const c = h / 4,
            l = this.get();
          if (c > l.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let r = 0; r < c; r++) a.setUint32(4 * r, l[r], o);
        }
        digest() {
          const { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          const n = t.slice(0, e);
          return this.destroy(), n;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          const {
            blockLen: e,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.destroyed = o),
            (t.finished = i),
            (t.length = r),
            (t.pos = s),
            r % e && t.buffer.set(n),
            t
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      const s = Uint32Array.from([
        1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
        528734635, 1541459225,
      ]);
      n(90146);
      const a = Uint32Array.from([
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
        h = new Uint32Array(64);
      class c extends o {
        constructor() {
          super(
            64,
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
            8,
            !1
          ),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          const { A: t, B: e, C: n, D: r, E: i, F: o, G: s, H: a } = this;
          return [t, e, n, r, i, o, s, a];
        }
        set(t, e, n, r, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) h[r] = t.getUint32(e, !1);
          for (let i = 16; i < 64; i++) {
            const t = h[i - 15],
              e = h[i - 2],
              n = (0, r.Ow)(t, 7) ^ (0, r.Ow)(t, 18) ^ (t >>> 3),
              o = (0, r.Ow)(e, 17) ^ (0, r.Ow)(e, 19) ^ (e >>> 10);
            h[i] = (o + h[i - 7] + n + h[i - 16]) | 0;
          }
          let { A: n, B: o, C: s, D: c, E: l, F: f, G: u, H: d } = this;
          for (let g = 0; g < 64; g++) {
            const t =
                (d +
                  ((0, r.Ow)(l, 6) ^ (0, r.Ow)(l, 11) ^ (0, r.Ow)(l, 25)) +
                  (((p = l) & f) ^ (~p & u)) +
                  a[g] +
                  h[g]) |
                0,
              e =
                (((0, r.Ow)(n, 2) ^ (0, r.Ow)(n, 13) ^ (0, r.Ow)(n, 22)) +
                  i(n, o, s)) |
                0;
            (d = u),
              (u = f),
              (f = l),
              (l = (c + t) | 0),
              (c = s),
              (s = o),
              (o = n),
              (n = (t + e) | 0);
          }
          var p;
          (n = (n + this.A) | 0),
            (o = (o + this.B) | 0),
            (s = (s + this.C) | 0),
            (c = (c + this.D) | 0),
            (l = (l + this.E) | 0),
            (f = (f + this.F) | 0),
            (u = (u + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(n, o, s, c, l, f, u, d);
        }
        roundClean() {
          (0, r.uH)(h);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, r.uH)(this.buffer);
        }
      }
      const l = (0, r.qj)(() => new c());
    },
    12379: (t, e, n) => {
      var r,
        i = n(52143);
      !(function () {
        "use strict";
        var o = "input is invalid type",
          s = "object" === typeof window,
          a = s ? window : {};
        a.JS_SHA3_NO_WINDOW && (s = !1);
        var h = !s && "object" === typeof self;
        !a.JS_SHA3_NO_NODE_JS &&
        "object" === typeof i &&
        i.versions &&
        i.versions.node
          ? (a = n.g)
          : h && (a = self);
        var c = !a.JS_SHA3_NO_COMMON_JS && t.exports,
          l = n.amdO,
          f = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
          u = "0123456789abcdef".split(""),
          d = [4, 1024, 262144, 67108864],
          p = [0, 8, 16, 24],
          g = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          y = [224, 256, 384, 512],
          w = [128, 256],
          b = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          v = { 128: 168, 256: 136 };
        (!a.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          !f ||
            (!a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function (t) {
              return (
                "object" === typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var m = function (t, e, n) {
              return function (r) {
                return new z(t, e, t).update(r)[n]();
              };
            },
            A = function (t, e, n) {
              return function (r, i) {
                return new z(t, e, i).update(r)[n]();
              };
            },
            x = function (t, e, n) {
              return function (e, r, i, o) {
                return H["cshake" + t].update(e, r, i, o)[n]();
              };
            },
            E = function (t, e, n) {
              return function (e, r, i, o) {
                return H["kmac" + t].update(e, r, i, o)[n]();
              };
            },
            B = function (t, e, n, r) {
              for (var i = 0; i < b.length; ++i) {
                var o = b[i];
                t[o] = e(n, r, o);
              }
              return t;
            },
            _ = function (t, e) {
              var n = m(t, e, "hex");
              return (
                (n.create = function () {
                  return new z(t, e, t);
                }),
                (n.update = function (t) {
                  return n.create().update(t);
                }),
                B(n, m, t, e)
              );
            },
            $ = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: y,
                createMethod: _,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: y,
                createMethod: _,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: w,
                createMethod: function (t, e) {
                  var n = A(t, e, "hex");
                  return (
                    (n.create = function (n) {
                      return new z(t, e, n);
                    }),
                    (n.update = function (t, e) {
                      return n.create(e).update(t);
                    }),
                    B(n, A, t, e)
                  );
                },
              },
              {
                name: "cshake",
                padding: d,
                bits: w,
                createMethod: function (t, e) {
                  var n = v[t],
                    r = x(t, 0, "hex");
                  return (
                    (r.create = function (r, i, o) {
                      return i || o
                        ? new z(t, e, r).bytepad([i, o], n)
                        : H["shake" + t].create(r);
                    }),
                    (r.update = function (t, e, n, i) {
                      return r.create(e, n, i).update(t);
                    }),
                    B(r, x, t, e)
                  );
                },
              },
              {
                name: "kmac",
                padding: d,
                bits: w,
                createMethod: function (t, e) {
                  var n = v[t],
                    r = E(t, 0, "hex");
                  return (
                    (r.create = function (r, i, o) {
                      return new k(t, e, i)
                        .bytepad(["KMAC", o], n)
                        .bytepad([r], n);
                    }),
                    (r.update = function (t, e, n, i) {
                      return r.create(t, n, i).update(e);
                    }),
                    B(r, E, t, e)
                  );
                },
              },
            ],
            H = {},
            S = [],
            O = 0;
          O < $.length;
          ++O
        )
          for (var C = $[O], I = C.bits, N = 0; N < I.length; ++N) {
            var U = C.name + "_" + I[N];
            if (
              (S.push(U),
              (H[U] = C.createMethod(I[N], C.padding)),
              "sha3" !== C.name)
            ) {
              var L = C.name + I[N];
              S.push(L), (H[L] = H[U]);
            }
          }
        function z(t, e, n) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = n),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = n >> 5),
            (this.extraBytes = (31 & n) >> 3);
          for (var r = 0; r < 50; ++r) this.s[r] = 0;
        }
        function k(t, e, n) {
          z.call(this, t, e, n);
        }
        (z.prototype.update = function (t) {
          if (this.finalized) throw new Error("finalize already called");
          var e,
            n = typeof t;
          if ("string" !== n) {
            if ("object" !== n) throw new Error(o);
            if (null === t) throw new Error(o);
            if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
            else if (!Array.isArray(t) && (!f || !ArrayBuffer.isView(t)))
              throw new Error(o);
            e = !0;
          }
          for (
            var r,
              i,
              s = this.blocks,
              a = this.byteCount,
              h = t.length,
              c = this.blockCount,
              l = 0,
              u = this.s;
            l < h;

          ) {
            if (this.reset)
              for (this.reset = !1, s[0] = this.block, r = 1; r < c + 1; ++r)
                s[r] = 0;
            if (e)
              for (r = this.start; l < h && r < a; ++l)
                s[r >> 2] |= t[l] << p[3 & r++];
            else
              for (r = this.start; l < h && r < a; ++l)
                (i = t.charCodeAt(l)) < 128
                  ? (s[r >> 2] |= i << p[3 & r++])
                  : i < 2048
                  ? ((s[r >> 2] |= (192 | (i >> 6)) << p[3 & r++]),
                    (s[r >> 2] |= (128 | (63 & i)) << p[3 & r++]))
                  : i < 55296 || i >= 57344
                  ? ((s[r >> 2] |= (224 | (i >> 12)) << p[3 & r++]),
                    (s[r >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & r++]),
                    (s[r >> 2] |= (128 | (63 & i)) << p[3 & r++]))
                  : ((i =
                      65536 +
                      (((1023 & i) << 10) | (1023 & t.charCodeAt(++l)))),
                    (s[r >> 2] |= (240 | (i >> 18)) << p[3 & r++]),
                    (s[r >> 2] |= (128 | ((i >> 12) & 63)) << p[3 & r++]),
                    (s[r >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & r++]),
                    (s[r >> 2] |= (128 | (63 & i)) << p[3 & r++]));
            if (((this.lastByteIndex = r), r >= a)) {
              for (this.start = r - a, this.block = s[c], r = 0; r < c; ++r)
                u[r] ^= s[r];
              R(u), (this.reset = !0);
            } else this.start = r;
          }
          return this;
        }),
          (z.prototype.encode = function (t, e) {
            var n = 255 & t,
              r = 1,
              i = [n];
            for (n = 255 & (t >>= 8); n > 0; )
              i.unshift(n), (n = 255 & (t >>= 8)), ++r;
            return e ? i.push(r) : i.unshift(r), this.update(i), i.length;
          }),
          (z.prototype.encodeString = function (t) {
            var e,
              n = typeof t;
            if ("string" !== n) {
              if ("object" !== n) throw new Error(o);
              if (null === t) throw new Error(o);
              if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
              else if (!Array.isArray(t) && (!f || !ArrayBuffer.isView(t)))
                throw new Error(o);
              e = !0;
            }
            var r = 0,
              i = t.length;
            if (e) r = i;
            else
              for (var s = 0; s < t.length; ++s) {
                var a = t.charCodeAt(s);
                a < 128
                  ? (r += 1)
                  : a < 2048
                  ? (r += 2)
                  : a < 55296 || a >= 57344
                  ? (r += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & t.charCodeAt(++s)))),
                    (r += 4));
              }
            return (r += this.encode(8 * r)), this.update(t), r;
          }),
          (z.prototype.bytepad = function (t, e) {
            for (var n = this.encode(e), r = 0; r < t.length; ++r)
              n += this.encodeString(t[r]);
            var i = e - (n % e),
              o = [];
            return (o.length = i), this.update(o), this;
          }),
          (z.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                e = this.lastByteIndex,
                n = this.blockCount,
                r = this.s;
              if (
                ((t[e >> 2] |= this.padding[3 & e]),
                this.lastByteIndex === this.byteCount)
              )
                for (t[0] = t[n], e = 1; e < n + 1; ++e) t[e] = 0;
              for (t[n - 1] |= 2147483648, e = 0; e < n; ++e) r[e] ^= t[e];
              R(r);
            }
          }),
          (z.prototype.toString = z.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  e = this.blockCount,
                  n = this.s,
                  r = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  a = "";
                s < r;

              ) {
                for (o = 0; o < e && s < r; ++o, ++s)
                  (t = n[o]),
                    (a +=
                      u[(t >> 4) & 15] +
                      u[15 & t] +
                      u[(t >> 12) & 15] +
                      u[(t >> 8) & 15] +
                      u[(t >> 20) & 15] +
                      u[(t >> 16) & 15] +
                      u[(t >> 28) & 15] +
                      u[(t >> 24) & 15]);
                s % e === 0 && (R(n), (o = 0));
              }
              return (
                i &&
                  ((t = n[o]),
                  (a += u[(t >> 4) & 15] + u[15 & t]),
                  i > 1 && (a += u[(t >> 12) & 15] + u[(t >> 8) & 15]),
                  i > 2 && (a += u[(t >> 20) & 15] + u[(t >> 16) & 15])),
                a
              );
            }),
          (z.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              e = this.blockCount,
              n = this.s,
              r = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              s = 0,
              a = this.outputBits >> 3;
            t = i ? new ArrayBuffer((r + 1) << 2) : new ArrayBuffer(a);
            for (var h = new Uint32Array(t); s < r; ) {
              for (o = 0; o < e && s < r; ++o, ++s) h[s] = n[o];
              s % e === 0 && R(n);
            }
            return i && ((h[o] = n[o]), (t = t.slice(0, a))), t;
          }),
          (z.prototype.buffer = z.prototype.arrayBuffer),
          (z.prototype.digest = z.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  e,
                  n = this.blockCount,
                  r = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  h = [];
                a < i;

              ) {
                for (s = 0; s < n && a < i; ++s, ++a)
                  (t = a << 2),
                    (e = r[s]),
                    (h[t] = 255 & e),
                    (h[t + 1] = (e >> 8) & 255),
                    (h[t + 2] = (e >> 16) & 255),
                    (h[t + 3] = (e >> 24) & 255);
                a % n === 0 && R(r);
              }
              return (
                o &&
                  ((t = a << 2),
                  (e = r[s]),
                  (h[t] = 255 & e),
                  o > 1 && (h[t + 1] = (e >> 8) & 255),
                  o > 2 && (h[t + 2] = (e >> 16) & 255)),
                h
              );
            }),
          (k.prototype = new z()),
          (k.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), z.prototype.finalize.call(this)
            );
          });
        var R = function (t) {
          var e,
            n,
            r,
            i,
            o,
            s,
            a,
            h,
            c,
            l,
            f,
            u,
            d,
            p,
            y,
            w,
            b,
            v,
            m,
            A,
            x,
            E,
            B,
            _,
            $,
            H,
            S,
            O,
            C,
            I,
            N,
            U,
            L,
            z,
            k,
            R,
            T,
            P,
            j,
            q,
            M,
            F,
            D,
            V,
            Z,
            W,
            G,
            K,
            J,
            Y,
            X,
            Q,
            tt,
            et,
            nt,
            rt,
            it,
            ot,
            st,
            at,
            ht,
            ct,
            lt;
          for (r = 0; r < 48; r += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (c = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (e =
                (u = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
                ((s << 1) | (a >>> 31))),
              (n =
                (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
                ((a << 1) | (s >>> 31))),
              (t[0] ^= e),
              (t[1] ^= n),
              (t[10] ^= e),
              (t[11] ^= n),
              (t[20] ^= e),
              (t[21] ^= n),
              (t[30] ^= e),
              (t[31] ^= n),
              (t[40] ^= e),
              (t[41] ^= n),
              (e = i ^ ((h << 1) | (c >>> 31))),
              (n = o ^ ((c << 1) | (h >>> 31))),
              (t[2] ^= e),
              (t[3] ^= n),
              (t[12] ^= e),
              (t[13] ^= n),
              (t[22] ^= e),
              (t[23] ^= n),
              (t[32] ^= e),
              (t[33] ^= n),
              (t[42] ^= e),
              (t[43] ^= n),
              (e = s ^ ((l << 1) | (f >>> 31))),
              (n = a ^ ((f << 1) | (l >>> 31))),
              (t[4] ^= e),
              (t[5] ^= n),
              (t[14] ^= e),
              (t[15] ^= n),
              (t[24] ^= e),
              (t[25] ^= n),
              (t[34] ^= e),
              (t[35] ^= n),
              (t[44] ^= e),
              (t[45] ^= n),
              (e = h ^ ((u << 1) | (d >>> 31))),
              (n = c ^ ((d << 1) | (u >>> 31))),
              (t[6] ^= e),
              (t[7] ^= n),
              (t[16] ^= e),
              (t[17] ^= n),
              (t[26] ^= e),
              (t[27] ^= n),
              (t[36] ^= e),
              (t[37] ^= n),
              (t[46] ^= e),
              (t[47] ^= n),
              (e = l ^ ((i << 1) | (o >>> 31))),
              (n = f ^ ((o << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= n),
              (t[18] ^= e),
              (t[19] ^= n),
              (t[28] ^= e),
              (t[29] ^= n),
              (t[38] ^= e),
              (t[39] ^= n),
              (t[48] ^= e),
              (t[49] ^= n),
              (p = t[0]),
              (y = t[1]),
              (W = (t[11] << 4) | (t[10] >>> 28)),
              (G = (t[10] << 4) | (t[11] >>> 28)),
              (O = (t[20] << 3) | (t[21] >>> 29)),
              (C = (t[21] << 3) | (t[20] >>> 29)),
              (at = (t[31] << 9) | (t[30] >>> 23)),
              (ht = (t[30] << 9) | (t[31] >>> 23)),
              (F = (t[40] << 18) | (t[41] >>> 14)),
              (D = (t[41] << 18) | (t[40] >>> 14)),
              (z = (t[2] << 1) | (t[3] >>> 31)),
              (k = (t[3] << 1) | (t[2] >>> 31)),
              (w = (t[13] << 12) | (t[12] >>> 20)),
              (b = (t[12] << 12) | (t[13] >>> 20)),
              (K = (t[22] << 10) | (t[23] >>> 22)),
              (J = (t[23] << 10) | (t[22] >>> 22)),
              (I = (t[33] << 13) | (t[32] >>> 19)),
              (N = (t[32] << 13) | (t[33] >>> 19)),
              (ct = (t[42] << 2) | (t[43] >>> 30)),
              (lt = (t[43] << 2) | (t[42] >>> 30)),
              (et = (t[5] << 30) | (t[4] >>> 2)),
              (nt = (t[4] << 30) | (t[5] >>> 2)),
              (R = (t[14] << 6) | (t[15] >>> 26)),
              (T = (t[15] << 6) | (t[14] >>> 26)),
              (v = (t[25] << 11) | (t[24] >>> 21)),
              (m = (t[24] << 11) | (t[25] >>> 21)),
              (Y = (t[34] << 15) | (t[35] >>> 17)),
              (X = (t[35] << 15) | (t[34] >>> 17)),
              (U = (t[45] << 29) | (t[44] >>> 3)),
              (L = (t[44] << 29) | (t[45] >>> 3)),
              (_ = (t[6] << 28) | (t[7] >>> 4)),
              ($ = (t[7] << 28) | (t[6] >>> 4)),
              (rt = (t[17] << 23) | (t[16] >>> 9)),
              (it = (t[16] << 23) | (t[17] >>> 9)),
              (P = (t[26] << 25) | (t[27] >>> 7)),
              (j = (t[27] << 25) | (t[26] >>> 7)),
              (A = (t[36] << 21) | (t[37] >>> 11)),
              (x = (t[37] << 21) | (t[36] >>> 11)),
              (Q = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (V = (t[8] << 27) | (t[9] >>> 5)),
              (Z = (t[9] << 27) | (t[8] >>> 5)),
              (H = (t[18] << 20) | (t[19] >>> 12)),
              (S = (t[19] << 20) | (t[18] >>> 12)),
              (ot = (t[29] << 7) | (t[28] >>> 25)),
              (st = (t[28] << 7) | (t[29] >>> 25)),
              (q = (t[38] << 8) | (t[39] >>> 24)),
              (M = (t[39] << 8) | (t[38] >>> 24)),
              (E = (t[48] << 14) | (t[49] >>> 18)),
              (B = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = p ^ (~w & v)),
              (t[1] = y ^ (~b & m)),
              (t[10] = _ ^ (~H & O)),
              (t[11] = $ ^ (~S & C)),
              (t[20] = z ^ (~R & P)),
              (t[21] = k ^ (~T & j)),
              (t[30] = V ^ (~W & K)),
              (t[31] = Z ^ (~G & J)),
              (t[40] = et ^ (~rt & ot)),
              (t[41] = nt ^ (~it & st)),
              (t[2] = w ^ (~v & A)),
              (t[3] = b ^ (~m & x)),
              (t[12] = H ^ (~O & I)),
              (t[13] = S ^ (~C & N)),
              (t[22] = R ^ (~P & q)),
              (t[23] = T ^ (~j & M)),
              (t[32] = W ^ (~K & Y)),
              (t[33] = G ^ (~J & X)),
              (t[42] = rt ^ (~ot & at)),
              (t[43] = it ^ (~st & ht)),
              (t[4] = v ^ (~A & E)),
              (t[5] = m ^ (~x & B)),
              (t[14] = O ^ (~I & U)),
              (t[15] = C ^ (~N & L)),
              (t[24] = P ^ (~q & F)),
              (t[25] = j ^ (~M & D)),
              (t[34] = K ^ (~Y & Q)),
              (t[35] = J ^ (~X & tt)),
              (t[44] = ot ^ (~at & ct)),
              (t[45] = st ^ (~ht & lt)),
              (t[6] = A ^ (~E & p)),
              (t[7] = x ^ (~B & y)),
              (t[16] = I ^ (~U & _)),
              (t[17] = N ^ (~L & $)),
              (t[26] = q ^ (~F & z)),
              (t[27] = M ^ (~D & k)),
              (t[36] = Y ^ (~Q & V)),
              (t[37] = X ^ (~tt & Z)),
              (t[46] = at ^ (~ct & et)),
              (t[47] = ht ^ (~lt & nt)),
              (t[8] = E ^ (~p & w)),
              (t[9] = B ^ (~y & b)),
              (t[18] = U ^ (~_ & H)),
              (t[19] = L ^ (~$ & S)),
              (t[28] = F ^ (~z & R)),
              (t[29] = D ^ (~k & T)),
              (t[38] = Q ^ (~V & W)),
              (t[39] = tt ^ (~Z & G)),
              (t[48] = ct ^ (~et & rt)),
              (t[49] = lt ^ (~nt & it)),
              (t[0] ^= g[r]),
              (t[1] ^= g[r + 1]);
        };
        if (c) t.exports = H;
        else {
          for (O = 0; O < S.length; ++O) a[S[O]] = H[S[O]];
          l &&
            (void 0 ===
              (r = function () {
                return H;
              }.call(e, n, e, t)) ||
              (t.exports = r));
        }
      })();
    },
    12504: (t, e, n) => {
      "use strict";
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw new Error("positive integer expected, got " + t);
      }
      function i(t) {
        if (
          !(
            (e = t) instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw new Error("Uint8Array expected");
        for (
          var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
          i < n;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(t.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + t.length
          );
      }
      function o(t) {
        if ("function" !== typeof t || "function" !== typeof t.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        r(t.outputLen), r(t.blockLen);
      }
      function s(t) {
        let e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (t.destroyed) throw new Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function a(t, e) {
        i(t);
        const n = e.outputLen;
        if (t.length < n)
          throw new Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      n.d(e, { CC: () => s, DO: () => i, Ht: () => a, sd: () => o });
    },
    14467: (t, e, n) => {
      "use strict";
      n.d(e, { TQ: () => s, ol: () => a, r9: () => o });
      var r = n(12504),
        i = n(35172);
      function o(t, e, n) {
        return (t & e) ^ (~t & n);
      }
      function s(t, e, n) {
        return (t & e) ^ (t & n) ^ (e & n);
      }
      class a extends i.Vw {
        constructor(t, e, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.O8)(this.buffer));
        }
        update(t) {
          (0, r.CC)(this);
          const { view: e, buffer: n, blockLen: o } = this,
            s = (t = (0, i.ZJ)(t)).length;
          for (let r = 0; r < s; ) {
            const a = Math.min(o - this.pos, s - r);
            if (a !== o)
              n.set(t.subarray(r, r + a), this.pos),
                (this.pos += a),
                (r += a),
                this.pos === o && (this.process(e, 0), (this.pos = 0));
            else {
              const e = (0, i.O8)(t);
              for (; o <= s - r; r += o) this.process(e, r);
            }
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, r.CC)(this), (0, r.Ht)(t, this), (this.finished = !0);
          const { buffer: e, view: n, blockLen: o, isLE: s } = this;
          let { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(n, 0), (a = 0));
          for (let r = a; r < o; r++) e[r] = 0;
          !(function (t, e, n, r) {
            if ("function" === typeof t.setBigUint64)
              return t.setBigUint64(e, n, r);
            const i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((n >> i) & o),
              a = Number(n & o),
              h = r ? 4 : 0,
              c = r ? 0 : 4;
            t.setUint32(e + h, s, r), t.setUint32(e + c, a, r);
          })(n, o - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
          const h = (0, i.O8)(t),
            c = this.outputLen;
          if (c % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const l = c / 4,
            f = this.get();
          if (l > f.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let r = 0; r < l; r++) h.setUint32(4 * r, f[r], s);
        }
        digest() {
          const { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          const n = t.slice(0, e);
          return this.destroy(), n;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          const {
            blockLen: e,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = r),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            r % e && t.buffer.set(n),
            t
          );
        }
      }
    },
    18287: (t, e, n) => {
      "use strict";
      const r = n(27671).v4,
        i = n(54534),
        o = function (t, e) {
          if (!(this instanceof o)) return new o(t, e);
          e || (e = {}),
            (this.options = {
              reviver: "undefined" !== typeof e.reviver ? e.reviver : null,
              replacer: "undefined" !== typeof e.replacer ? e.replacer : null,
              generator:
                "undefined" !== typeof e.generator
                  ? e.generator
                  : function () {
                      return r();
                    },
              version: "undefined" !== typeof e.version ? e.version : 2,
              notificationIdNull:
                "boolean" === typeof e.notificationIdNull &&
                e.notificationIdNull,
            }),
            (this.callServer = t);
        };
      (t.exports = o),
        (o.prototype.request = function (t, e, n, r) {
          const o = this;
          let s = null;
          const a = Array.isArray(t) && "function" === typeof e;
          if (1 === this.options.version && a)
            throw new TypeError("JSON-RPC 1.0 does not support batching");
          if (
            a ||
            (!a && t && "object" === typeof t && "function" === typeof e)
          )
            (r = e), (s = t);
          else {
            "function" === typeof n && ((r = n), (n = void 0));
            const o = "function" === typeof r;
            try {
              s = i(t, e, n, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (c) {
              if (o) return r(c);
              throw c;
            }
            if (!o) return s;
          }
          let h;
          try {
            h = JSON.stringify(s, this.options.replacer);
          } catch (c) {
            return r(c);
          }
          return (
            this.callServer(h, function (t, e) {
              o._parseResponse(t, e, r);
            }),
            s
          );
        }),
        (o.prototype._parseResponse = function (t, e, n) {
          if (t) return void n(t);
          if (!e) return n();
          let r;
          try {
            r = JSON.parse(e, this.options.reviver);
          } catch (t) {
            return n(t);
          }
          if (3 === n.length) {
            if (Array.isArray(r)) {
              const t = function (t) {
                  return "undefined" !== typeof t.error;
                },
                e = function (e) {
                  return !t(e);
                };
              return n(null, r.filter(t), r.filter(e));
            }
            return n(null, r.error, r.result);
          }
          n(null, r);
        });
    },
    20819: (t, e, n) => {
      "use strict";
      n.d(e, {
        B8: () => p,
        D0: () => m,
        LH: () => v,
        Tp: () => x,
        dQ: () => y,
        jr: () => b,
        qy: () => E,
        zH: () => d,
        zi: () => f,
      });
      var r = n(9864);
      const i = BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        h = BigInt(4),
        c = BigInt(5),
        l = BigInt(8);
      function f(t, e) {
        const n = t % e;
        return n >= i ? n : e + n;
      }
      function u(t, e, n) {
        if (e < i) throw new Error("invalid exponent, negatives unsupported");
        if (n <= i) throw new Error("invalid modulus");
        if (n === o) return i;
        let r = o;
        for (; e > i; )
          e & o && (r = (r * t) % n), (t = (t * t) % n), (e >>= o);
        return r;
      }
      function d(t, e, n) {
        let r = t;
        for (; e-- > i; ) (r *= r), (r %= n);
        return r;
      }
      function p(t, e) {
        if (t === i) throw new Error("invert: expected non-zero number");
        if (e <= i)
          throw new Error("invert: expected positive modulus, got " + e);
        let n = f(t, e),
          r = e,
          s = i,
          a = o,
          h = o,
          c = i;
        for (; n !== i; ) {
          const t = r / n,
            e = r % n,
            i = s - h * t,
            o = a - c * t;
          (r = n), (n = e), (s = h), (a = c), (h = i), (c = o);
        }
        if (r !== o) throw new Error("invert: does not exist");
        return f(s, e);
      }
      function g(t) {
        if (t % h === a) {
          const e = (t + o) / h;
          return function (t, n) {
            const r = t.pow(n, e);
            if (!t.eql(t.sqr(r), n)) throw new Error("Cannot find square root");
            return r;
          };
        }
        if (t % l === c) {
          const e = (t - c) / l;
          return function (t, n) {
            const r = t.mul(n, s),
              i = t.pow(r, e),
              o = t.mul(n, i),
              a = t.mul(t.mul(o, s), i),
              h = t.mul(o, t.sub(a, t.ONE));
            if (!t.eql(t.sqr(h), n)) throw new Error("Cannot find square root");
            return h;
          };
        }
        return (function (t) {
          const e = (t - o) / s;
          let n, r, a;
          for (n = t - o, r = 0; n % s === i; n /= s, r++);
          for (a = s; a < t && u(a, e, t) !== t - o; a++)
            if (a > 1e3)
              throw new Error("Cannot find square root: likely non-prime P");
          if (1 === r) {
            const e = (t + o) / h;
            return function (t, n) {
              const r = t.pow(n, e);
              if (!t.eql(t.sqr(r), n))
                throw new Error("Cannot find square root");
              return r;
            };
          }
          const c = (n + o) / s;
          return function (t, i) {
            if (t.pow(i, e) === t.neg(t.ONE))
              throw new Error("Cannot find square root");
            let s = r,
              h = t.pow(t.mul(t.ONE, a), n),
              l = t.pow(i, c),
              f = t.pow(i, n);
            for (; !t.eql(f, t.ONE); ) {
              if (t.eql(f, t.ZERO)) return t.ZERO;
              let e = 1;
              for (let r = t.sqr(f); e < s && !t.eql(r, t.ONE); e++)
                r = t.sqr(r);
              const n = t.pow(h, o << BigInt(s - e - 1));
              (h = t.sqr(n)), (l = t.mul(l, n)), (f = t.mul(f, h)), (s = e);
            }
            return l;
          };
        })(t);
      }
      const y = (t, e) => (f(t, e) & o) === o,
        w = [
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
      function b(t) {
        const e = w.reduce((t, e) => ((t[e] = "function"), t), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        });
        return (0, r.Q5)(t, e);
      }
      function v(t, e) {
        const n = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: n, nByteLength: Math.ceil(n / 8) };
      }
      function m(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t <= i)
          throw new Error("invalid field: expected ORDER > 0, got " + t);
        const { nBitLength: a, nByteLength: h } = v(t, e);
        if (h > 2048)
          throw new Error("invalid field: expected ORDER of <= 2048 bytes");
        let c;
        const l = Object.freeze({
          ORDER: t,
          isLE: n,
          BITS: a,
          BYTES: h,
          MASK: (0, r.OG)(a),
          ZERO: i,
          ONE: o,
          create: (e) => f(e, t),
          isValid: (e) => {
            if ("bigint" !== typeof e)
              throw new Error(
                "invalid field element: expected bigint, got " + typeof e
              );
            return i <= e && e < t;
          },
          is0: (t) => t === i,
          isOdd: (t) => (t & o) === o,
          neg: (e) => f(-e, t),
          eql: (t, e) => t === e,
          sqr: (e) => f(e * e, t),
          add: (e, n) => f(e + n, t),
          sub: (e, n) => f(e - n, t),
          mul: (e, n) => f(e * n, t),
          pow: (t, e) =>
            (function (t, e, n) {
              if (n < i)
                throw new Error("invalid exponent, negatives unsupported");
              if (n === i) return t.ONE;
              if (n === o) return e;
              let r = t.ONE,
                s = e;
              for (; n > i; )
                n & o && (r = t.mul(r, s)), (s = t.sqr(s)), (n >>= o);
              return r;
            })(l, t, e),
          div: (e, n) => f(e * p(n, t), t),
          sqrN: (t) => t * t,
          addN: (t, e) => t + e,
          subN: (t, e) => t - e,
          mulN: (t, e) => t * e,
          inv: (e) => p(e, t),
          sqrt: s.sqrt || ((e) => (c || (c = g(t)), c(l, e))),
          invertBatch: (t) =>
            (function (t, e) {
              const n = new Array(e.length),
                r = e.reduce(
                  (e, r, i) => (t.is0(r) ? e : ((n[i] = e), t.mul(e, r))),
                  t.ONE
                ),
                i = t.inv(r);
              return (
                e.reduceRight(
                  (e, r, i) =>
                    t.is0(r) ? e : ((n[i] = t.mul(e, n[i])), t.mul(e, r)),
                  i
                ),
                n
              );
            })(l, t),
          cmov: (t, e, n) => (n ? e : t),
          toBytes: (t) => (n ? (0, r.z)(t, h) : (0, r.lq)(t, h)),
          fromBytes: (t) => {
            if (t.length !== h)
              throw new Error(
                "Field.fromBytes: expected " + h + " bytes, got " + t.length
              );
            return n ? (0, r.lX)(t) : (0, r.Ph)(t);
          },
        });
        return Object.freeze(l);
      }
      function A(t) {
        if ("bigint" !== typeof t)
          throw new Error("field order must be bigint");
        const e = t.toString(2).length;
        return Math.ceil(e / 8);
      }
      function x(t) {
        const e = A(t);
        return e + Math.ceil(e / 2);
      }
      function E(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const i = t.length,
          s = A(e),
          a = x(e);
        if (i < 16 || i < a || i > 1024)
          throw new Error("expected " + a + "-1024 bytes of input, got " + i);
        const h = f(n ? (0, r.lX)(t) : (0, r.Ph)(t), e - o) + o;
        return n ? (0, r.z)(h, s) : (0, r.lq)(h, s);
      }
    },
    21579: (t, e, n) => {
      "use strict";
      n.d(e, {
        WF: () => W,
        AH: () => i.AH,
        qy: () => $,
        JW: () => H,
        iz: () => i.iz,
      });
      n(40350), n(71274);
      var r,
        i = n(15569);
      const o = globalThis,
        s = o.trustedTypes,
        a = s ? s.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
        h = "$lit$",
        c = `lit$${Math.random().toFixed(9).slice(2)}$`,
        l = "?" + c,
        f = `<${l}>`,
        u = document,
        d = () => u.createComment(""),
        p = (t) =>
          null === t || ("object" != typeof t && "function" != typeof t),
        g = Array.isArray,
        y = (t) =>
          g(t) ||
          "function" ==
            typeof (null === t || void 0 === t ? void 0 : t[Symbol.iterator]),
        w = "[ \t\n\f\r]",
        b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        v = /-->/g,
        m = />/g,
        A = RegExp(
          `>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        x = /'/g,
        E = /"/g,
        B = /^(?:script|style|textarea|title)$/i,
        _ = (t) =>
          function (e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return { _$litType$: t, strings: e, values: r };
          },
        $ = _(1),
        H = _(2),
        S = (_(3), Symbol.for("lit-noChange")),
        O = Symbol.for("lit-nothing"),
        C = new WeakMap(),
        I = u.createTreeWalker(u, 129);
      function N(t, e) {
        if (!g(t) || !t.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== a ? a.createHTML(e) : e;
      }
      const U = (t, e) => {
        const n = t.length - 1,
          r = [];
        let i,
          o = 2 === e ? "<svg>" : 3 === e ? "<math>" : "",
          s = b;
        for (let a = 0; a < n; a++) {
          const e = t[a];
          let n,
            l,
            u = -1,
            d = 0;
          for (
            ;
            d < e.length && ((s.lastIndex = d), (l = s.exec(e)), null !== l);

          )
            (d = s.lastIndex),
              s === b
                ? "!--" === l[1]
                  ? (s = v)
                  : void 0 !== l[1]
                  ? (s = m)
                  : void 0 !== l[2]
                  ? (B.test(l[2]) && (i = RegExp("</" + l[2], "g")), (s = A))
                  : void 0 !== l[3] && (s = A)
                : s === A
                ? ">" === l[0]
                  ? ((s = null !== i && void 0 !== i ? i : b), (u = -1))
                  : void 0 === l[1]
                  ? (u = -2)
                  : ((u = s.lastIndex - l[2].length),
                    (n = l[1]),
                    (s = void 0 === l[3] ? A : '"' === l[3] ? E : x))
                : s === E || s === x
                ? (s = A)
                : s === v || s === m
                ? (s = b)
                : ((s = A), (i = void 0));
          const p = s === A && t[a + 1].startsWith("/>") ? " " : "";
          o +=
            s === b
              ? e + f
              : u >= 0
              ? (r.push(n), e.slice(0, u) + h + e.slice(u) + c + p)
              : e + c + (-2 === u ? a : p);
        }
        return [
          N(
            t,
            o +
              (t[n] || "<?>") +
              (2 === e ? "</svg>" : 3 === e ? "</math>" : "")
          ),
          r,
        ];
      };
      class L {
        constructor(t, e) {
          let n,
            { strings: r, _$litType$: i } = t;
          this.parts = [];
          let o = 0,
            a = 0;
          const f = r.length - 1,
            u = this.parts,
            [p, g] = U(r, i);
          if (
            ((this.el = L.createElement(p, e)),
            (I.currentNode = this.el.content),
            2 === i || 3 === i)
          ) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
          }
          for (; null !== (n = I.nextNode()) && u.length < f; ) {
            if (1 === n.nodeType) {
              if (n.hasAttributes())
                for (const t of n.getAttributeNames())
                  if (t.endsWith(h)) {
                    const e = g[a++],
                      r = n.getAttribute(t).split(c),
                      i = /([.?@])?(.*)/.exec(e);
                    u.push({
                      type: 1,
                      index: o,
                      name: i[2],
                      strings: r,
                      ctor:
                        "." === i[1]
                          ? P
                          : "?" === i[1]
                          ? j
                          : "@" === i[1]
                          ? q
                          : T,
                    }),
                      n.removeAttribute(t);
                  } else
                    t.startsWith(c) &&
                      (u.push({ type: 6, index: o }), n.removeAttribute(t));
              if (B.test(n.tagName)) {
                const t = n.textContent.split(c),
                  e = t.length - 1;
                if (e > 0) {
                  n.textContent = s ? s.emptyScript : "";
                  for (let r = 0; r < e; r++)
                    n.append(t[r], d()),
                      I.nextNode(),
                      u.push({ type: 2, index: ++o });
                  n.append(t[e], d());
                }
              }
            } else if (8 === n.nodeType)
              if (n.data === l) u.push({ type: 2, index: o });
              else {
                let t = -1;
                for (; -1 !== (t = n.data.indexOf(c, t + 1)); )
                  u.push({ type: 7, index: o }), (t += c.length - 1);
              }
            o++;
          }
        }
        static createElement(t, e) {
          const n = u.createElement("template");
          return (n.innerHTML = t), n;
        }
      }
      function z(t, e) {
        var n, r, i, o, s;
        let a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          h = arguments.length > 3 ? arguments[3] : void 0;
        if (e === S) return e;
        let c =
          void 0 !== h
            ? null === (n = a._$Co) || void 0 === n
              ? void 0
              : n[h]
            : a._$Cl;
        const l = p(e) ? void 0 : e._$litDirective$;
        return (
          (null === (r = c) || void 0 === r ? void 0 : r.constructor) !== l &&
            (null !== (i = c) &&
              void 0 !== i &&
              null !== (o = i._$AO) &&
              void 0 !== o &&
              o.call(i, !1),
            void 0 === l ? (c = void 0) : ((c = new l(t)), c._$AT(t, a, h)),
            void 0 !== h
              ? ((null !== (s = a._$Co) && void 0 !== s ? s : (a._$Co = []))[
                  h
                ] = c)
              : (a._$Cl = c)),
          void 0 !== c && (e = z(t, c._$AS(t, e.values), c, h)),
          e
        );
      }
      class k {
        constructor(t, e) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = t),
            (this._$AM = e);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t) {
          var e;
          const {
              el: { content: n },
              parts: r,
            } = this._$AD,
            i = (
              null !==
                (e = null === t || void 0 === t ? void 0 : t.creationScope) &&
              void 0 !== e
                ? e
                : u
            ).importNode(n, !0);
          I.currentNode = i;
          let o = I.nextNode(),
            s = 0,
            a = 0,
            h = r[0];
          for (; void 0 !== h; ) {
            var c;
            if (s === h.index) {
              let e;
              2 === h.type
                ? (e = new R(o, o.nextSibling, this, t))
                : 1 === h.type
                ? (e = new h.ctor(o, h.name, h.strings, this, t))
                : 6 === h.type && (e = new M(o, this, t)),
                this._$AV.push(e),
                (h = r[++a]);
            }
            s !== (null === (c = h) || void 0 === c ? void 0 : c.index) &&
              ((o = I.nextNode()), s++);
          }
          return (I.currentNode = u), i;
        }
        p(t) {
          let e = 0;
          for (const n of this._$AV)
            void 0 !== n &&
              (void 0 !== n.strings
                ? (n._$AI(t, n, e), (e += n.strings.length - 2))
                : n._$AI(t[e])),
              e++;
        }
      }
      class R {
        get _$AU() {
          var t, e;
          return null !==
            (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
            void 0 !== t
            ? t
            : this._$Cv;
        }
        constructor(t, e, n, r) {
          var i;
          (this.type = 2),
            (this._$AH = O),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = e),
            (this._$AM = n),
            (this.options = r),
            (this._$Cv =
              null ===
                (i = null === r || void 0 === r ? void 0 : r.isConnected) ||
              void 0 === i ||
              i);
        }
        get parentNode() {
          var t;
          let e = this._$AA.parentNode;
          const n = this._$AM;
          return (
            void 0 !== n &&
              11 === (null === (t = e) || void 0 === t ? void 0 : t.nodeType) &&
              (e = n.parentNode),
            e
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t) {
          (t = z(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this
          )),
            p(t)
              ? t === O || null == t || "" === t
                ? (this._$AH !== O && this._$AR(), (this._$AH = O))
                : t !== this._$AH && t !== S && this._(t)
              : void 0 !== t._$litType$
              ? this.$(t)
              : void 0 !== t.nodeType
              ? this.T(t)
              : y(t)
              ? this.k(t)
              : this._(t);
        }
        O(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        T(t) {
          this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
        }
        _(t) {
          this._$AH !== O && p(this._$AH)
            ? (this._$AA.nextSibling.data = t)
            : this.T(u.createTextNode(t)),
            (this._$AH = t);
        }
        $(t) {
          var e;
          const { values: n, _$litType$: r } = t,
            i =
              "number" == typeof r
                ? this._$AC(t)
                : (void 0 === r.el &&
                    (r.el = L.createElement(N(r.h, r.h[0]), this.options)),
                  r);
          if (
            (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i
          )
            this._$AH.p(n);
          else {
            const t = new k(i, this),
              e = t.u(this.options);
            t.p(n), this.T(e), (this._$AH = t);
          }
        }
        _$AC(t) {
          let e = C.get(t.strings);
          return void 0 === e && C.set(t.strings, (e = new L(t))), e;
        }
        k(t) {
          g(this._$AH) || ((this._$AH = []), this._$AR());
          const e = this._$AH;
          let n,
            r = 0;
          for (const i of t)
            r === e.length
              ? e.push(
                  (n = new R(this.O(d()), this.O(d()), this, this.options))
                )
              : (n = e[r]),
              n._$AI(i),
              r++;
          r < e.length &&
            (this._$AR(n && n._$AB.nextSibling, r), (e.length = r));
        }
        _$AR() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this._$AA.nextSibling,
            e = arguments.length > 1 ? arguments[1] : void 0;
          for (
            null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, e);
            t && t !== this._$AB;

          ) {
            var n;
            const e = t.nextSibling;
            t.remove(), (t = e);
          }
        }
        setConnected(t) {
          var e;
          void 0 === this._$AM &&
            ((this._$Cv = t),
            null === (e = this._$AP) || void 0 === e || e.call(this, t));
        }
      }
      class T {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(t, e, n, r, i) {
          (this.type = 1),
            (this._$AH = O),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = e),
            (this._$AM = r),
            (this.options = i),
            n.length > 2 || "" !== n[0] || "" !== n[1]
              ? ((this._$AH = Array(n.length - 1).fill(new String())),
                (this.strings = n))
              : (this._$AH = O);
        }
        _$AI(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
          const i = this.strings;
          let o = !1;
          if (void 0 === i)
            (t = z(this, t, e, 0)),
              (o = !p(t) || (t !== this._$AH && t !== S)),
              o && (this._$AH = t);
          else {
            const r = t;
            let s, a;
            for (t = i[0], s = 0; s < i.length - 1; s++)
              (a = z(this, r[n + s], e, s)),
                a === S && (a = this._$AH[s]),
                o || (o = !p(a) || a !== this._$AH[s]),
                a === O
                  ? (t = O)
                  : t !== O &&
                    (t += (null !== a && void 0 !== a ? a : "") + i[s + 1]),
                (this._$AH[s] = a);
          }
          o && !r && this.j(t);
        }
        j(t) {
          t === O
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(
                this.name,
                null !== t && void 0 !== t ? t : ""
              );
        }
      }
      class P extends T {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(t) {
          this.element[this.name] = t === O ? void 0 : t;
        }
      }
      class j extends T {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(t) {
          this.element.toggleAttribute(this.name, !!t && t !== O);
        }
      }
      class q extends T {
        constructor(t, e, n, r, i) {
          super(t, e, n, r, i), (this.type = 5);
        }
        _$AI(t) {
          var e;
          if (
            (t =
              null !==
                (e = z(
                  this,
                  t,
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this,
                  0
                )) && void 0 !== e
                ? e
                : O) === S
          )
            return;
          const n = this._$AH,
            r =
              (t === O && n !== O) ||
              t.capture !== n.capture ||
              t.once !== n.once ||
              t.passive !== n.passive,
            i = t !== O && (n === O || r);
          r && this.element.removeEventListener(this.name, this, n),
            i && this.element.addEventListener(this.name, this, t),
            (this._$AH = t);
        }
        handleEvent(t) {
          var e, n;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (e =
                    null === (n = this.options) || void 0 === n
                      ? void 0
                      : n.host) && void 0 !== e
                  ? e
                  : this.element,
                t
              )
            : this._$AH.handleEvent(t);
        }
      }
      class M {
        constructor(t, e, n) {
          (this.element = t),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = e),
            (this.options = n);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t) {
          z(this, t);
        }
      }
      const F = o.litHtmlPolyfillSupport;
      null !== F && void 0 !== F && F(L, R),
        (null !== (r = o.litHtmlVersions) && void 0 !== r
          ? r
          : (o.litHtmlVersions = [])
        ).push("3.3.0");
      var D, V;
      const Z = globalThis;
      class W extends i.mN {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var t, e;
          const n = super.createRenderRoot();
          return (
            (null !== (e = (t = this.renderOptions).renderBefore) &&
              void 0 !== e) ||
              (t.renderBefore = n.firstChild),
            n
          );
        }
        update(t) {
          const e = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(t),
            (this._$Do = ((t, e, n) => {
              var r;
              const i =
                null !==
                  (r = null === n || void 0 === n ? void 0 : n.renderBefore) &&
                void 0 !== r
                  ? r
                  : e;
              let o = i._$litPart$;
              if (void 0 === o) {
                var s;
                const t =
                  null !==
                    (s =
                      null === n || void 0 === n ? void 0 : n.renderBefore) &&
                  void 0 !== s
                    ? s
                    : null;
                i._$litPart$ = o = new R(
                  e.insertBefore(d(), t),
                  t,
                  void 0,
                  null !== n && void 0 !== n ? n : {}
                );
              }
              return o._$AI(t), o;
            })(e, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var t;
          super.connectedCallback(),
            null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
        }
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(),
            null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
        }
        render() {
          return S;
        }
      }
      (W._$litElement$ = !0),
        (W.finalized = !0),
        null === (D = Z.litElementHydrateSupport) ||
          void 0 === D ||
          D.call(Z, { LitElement: W });
      const G = Z.litElementPolyfillSupport;
      null === G || void 0 === G || G({ LitElement: W });
      (null !== (V = Z.litElementVersions) && void 0 !== V
        ? V
        : (Z.litElementVersions = [])
      ).push("4.2.0");
    },
    25282: (t, e, n) => {
      "use strict";
      n.d(e, { Xf: () => w, hT: () => y, hp: () => b });
      var r = n(20819),
        i = n(9864);
      const o = BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        const n = e.negate();
        return t ? n : e;
      }
      function h(t, e) {
        if (!Number.isSafeInteger(t) || t <= 0 || t > e)
          throw new Error(
            "invalid window size, expected [1.." + e + "], got W=" + t
          );
      }
      function c(t, e) {
        h(t, e);
        const n = 2 ** t;
        return {
          windows: Math.ceil(e / t) + 1,
          windowSize: 2 ** (t - 1),
          mask: (0, i.OG)(t),
          maxNumber: n,
          shiftBy: BigInt(t),
        };
      }
      function l(t, e, n) {
        const { windowSize: r, mask: i, maxNumber: o, shiftBy: a } = n;
        let h = Number(t & i),
          c = t >> a;
        h > r && ((h -= o), (c += s));
        const l = e * r;
        return {
          nextN: c,
          offset: l + Math.abs(h) - 1,
          isZero: 0 === h,
          isNeg: h < 0,
          isNegF: e % 2 !== 0,
          offsetF: l,
        };
      }
      function f(t, e) {
        if (!Array.isArray(t)) throw new Error("array expected");
        t.forEach((t, n) => {
          if (!(t instanceof e)) throw new Error("invalid point at index " + n);
        });
      }
      function u(t, e) {
        if (!Array.isArray(t)) throw new Error("array of scalars expected");
        t.forEach((t, n) => {
          if (!e.isValid(t)) throw new Error("invalid scalar at index " + n);
        });
      }
      const d = new WeakMap(),
        p = new WeakMap();
      function g(t) {
        return p.get(t) || 1;
      }
      function y(t, e) {
        return {
          constTimeNegate: a,
          hasPrecomputes: (t) => 1 !== g(t),
          unsafeLadder(e, n) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : t.ZERO,
              i = e;
            for (; n > o; )
              n & s && (r = r.add(i)), (i = i.double()), (n >>= s);
            return r;
          },
          precomputeWindow(t, n) {
            const { windows: r, windowSize: i } = c(n, e),
              o = [];
            let s = t,
              a = s;
            for (let e = 0; e < r; e++) {
              (a = s), o.push(a);
              for (let t = 1; t < i; t++) (a = a.add(s)), o.push(a);
              s = a.double();
            }
            return o;
          },
          wNAF(n, r, i) {
            let o = t.ZERO,
              s = t.BASE;
            const h = c(n, e);
            for (let t = 0; t < h.windows; t++) {
              const {
                nextN: e,
                offset: n,
                isZero: c,
                isNeg: f,
                isNegF: u,
                offsetF: d,
              } = l(i, t, h);
              (i = e), c ? (s = s.add(a(u, r[d]))) : (o = o.add(a(f, r[n])));
            }
            return { p: o, f: s };
          },
          wNAFUnsafe(n, r, i) {
            let s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t.ZERO;
            const a = c(n, e);
            for (let t = 0; t < a.windows && i !== o; t++) {
              const { nextN: e, offset: n, isZero: o, isNeg: h } = l(i, t, a);
              if (((i = e), !o)) {
                const t = r[n];
                s = s.add(h ? t.negate() : t);
              }
            }
            return s;
          },
          getPrecomputes(t, e, n) {
            let r = d.get(e);
            return (
              r ||
                ((r = this.precomputeWindow(e, t)), 1 !== t && d.set(e, n(r))),
              r
            );
          },
          wNAFCached(t, e, n) {
            const r = g(t);
            return this.wNAF(r, this.getPrecomputes(r, t, n), e);
          },
          wNAFCachedUnsafe(t, e, n, r) {
            const i = g(t);
            return 1 === i
              ? this.unsafeLadder(t, e, r)
              : this.wNAFUnsafe(i, this.getPrecomputes(i, t, n), e, r);
          },
          setWindowSize(t, n) {
            h(n, e), p.set(t, n), d.delete(t);
          },
        };
      }
      function w(t, e, n, r) {
        if ((f(n, t), u(r, e), n.length !== r.length))
          throw new Error(
            "arrays of points and scalars must have equal length"
          );
        const o = t.ZERO,
          s = (0, i.dJ)(BigInt(n.length)),
          a = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
          h = (0, i.OG)(a),
          c = new Array(Number(h) + 1).fill(o);
        let l = o;
        for (let i = Math.floor((e.BITS - 1) / a) * a; i >= 0; i -= a) {
          c.fill(o);
          for (let e = 0; e < r.length; e++) {
            const t = r[e],
              o = Number((t >> BigInt(i)) & h);
            c[o] = c[o].add(n[e]);
          }
          let t = o;
          for (let e = c.length - 1, n = o; e > 0; e--)
            (n = n.add(c[e])), (t = t.add(n));
          if (((l = l.add(t)), 0 !== i))
            for (let e = 0; e < a; e++) l = l.double();
        }
        return l;
      }
      function b(t) {
        return (
          (0, r.jr)(t.Fp),
          (0, i.Q5)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...(0, r.LH)(t.n, t.nBitLength),
            ...t,
            p: t.Fp.ORDER,
          })
        );
      }
    },
    26130: (t, e) => {
      (e.read = function (t, e, n, r, i) {
        var o,
          s,
          a = 8 * i - r - 1,
          h = (1 << a) - 1,
          c = h >> 1,
          l = -7,
          f = n ? i - 1 : 0,
          u = n ? -1 : 1,
          d = t[e + f];
        for (
          f += u, o = d & ((1 << -l) - 1), d >>= -l, l += a;
          l > 0;
          o = 256 * o + t[e + f], f += u, l -= 8
        );
        for (
          s = o & ((1 << -l) - 1), o >>= -l, l += r;
          l > 0;
          s = 256 * s + t[e + f], f += u, l -= 8
        );
        if (0 === o) o = 1 - c;
        else {
          if (o === h) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, r)), (o -= c);
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - r);
      }),
        (e.write = function (t, e, n, r, i, o) {
          var s,
            a,
            h,
            c = 8 * o - i - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : o - 1,
            p = r ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (h = Math.pow(2, -s)) < 1 && (s--, (h *= 2)),
                  (e += s + f >= 1 ? u / h : u * Math.pow(2, 1 - f)) * h >= 2 &&
                    (s++, (h /= 2)),
                  s + f >= l
                    ? ((a = 0), (s = l))
                    : s + f >= 1
                    ? ((a = (e * h - 1) * Math.pow(2, i)), (s += f))
                    : ((a = e * Math.pow(2, f - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[n + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, c += i;
            c > 0;
            t[n + d] = 255 & s, d += p, s /= 256, c -= 8
          );
          t[n + d - p] |= 128 * g;
        });
    },
    29519: (t, e, n) => {
      "use strict";
      n.d(e, { lY: () => A });
      var r = n(90146),
        i = n(98379);
      const o = BigInt(0),
        s = BigInt(1),
        a = BigInt(2),
        h = BigInt(7),
        c = BigInt(256),
        l = BigInt(113),
        f = [],
        u = [],
        d = [];
      for (let x = 0, E = s, B = 1, _ = 0; x < 24; x++) {
        ([B, _] = [_, (2 * B + 3 * _) % 5]),
          f.push(2 * (5 * _ + B)),
          u.push((((x + 1) * (x + 2)) / 2) % 64);
        let t = o;
        for (let e = 0; e < 7; e++)
          (E = ((E << s) ^ ((E >> h) * l)) % c),
            E & a && (t ^= s << ((s << BigInt(e)) - s));
        d.push(t);
      }
      const p = (0, r.lD)(d, !0),
        g = p[0],
        y = p[1],
        w = (t, e, n) => (n > 32 ? (0, r.WM)(t, e, n) : (0, r.P5)(t, e, n)),
        b = (t, e, n) => (n > 32 ? (0, r.im)(t, e, n) : (0, r.B4)(t, e, n));
      class v extends i.Vw {
        constructor(t, e, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 24;
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = n),
            (this.enableXOF = r),
            (this.rounds = o),
            (0, i.Fe)(n),
            !(0 < t && t < 200))
          )
            throw new Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, i.DH)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, i.fd)(this.state32),
            (function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 24;
              const n = new Uint32Array(10);
              for (let r = 24 - e; r < 24; r++) {
                for (let r = 0; r < 10; r++)
                  n[r] = t[r] ^ t[r + 10] ^ t[r + 20] ^ t[r + 30] ^ t[r + 40];
                for (let r = 0; r < 10; r += 2) {
                  const e = (r + 8) % 10,
                    i = (r + 2) % 10,
                    o = n[i],
                    s = n[i + 1],
                    a = w(o, s, 1) ^ n[e],
                    h = b(o, s, 1) ^ n[e + 1];
                  for (let n = 0; n < 50; n += 10)
                    (t[r + n] ^= a), (t[r + n + 1] ^= h);
                }
                let e = t[2],
                  i = t[3];
                for (let n = 0; n < 24; n++) {
                  const r = u[n],
                    o = w(e, i, r),
                    s = b(e, i, r),
                    a = f[n];
                  (e = t[a]), (i = t[a + 1]), (t[a] = o), (t[a + 1] = s);
                }
                for (let r = 0; r < 50; r += 10) {
                  for (let e = 0; e < 10; e++) n[e] = t[r + e];
                  for (let e = 0; e < 10; e++)
                    t[r + e] ^= ~n[(e + 2) % 10] & n[(e + 4) % 10];
                }
                (t[0] ^= g[r]), (t[1] ^= y[r]);
              }
              (0, i.uH)(n);
            })(this.state32, this.rounds),
            (0, i.fd)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, i.CC)(this), (t = (0, i.ZJ)(t)), (0, i.DO)(t);
          const { blockLen: e, state: n } = this,
            r = t.length;
          for (let i = 0; i < r; ) {
            const o = Math.min(e - this.pos, r - i);
            for (let e = 0; e < o; e++) n[this.pos++] ^= t[i++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: t, suffix: e, pos: n, blockLen: r } = this;
          (t[n] ^= e),
            0 !== (128 & e) && n === r - 1 && this.keccak(),
            (t[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, i.CC)(this, !1), (0, i.DO)(t), this.finish();
          const e = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = t.length; r < i; ) {
            this.posOut >= n && this.keccak();
            const o = Math.min(n - this.posOut, i - r);
            t.set(e.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, i.Fe)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, i.Ht)(t, this), this.finished))
            throw new Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, i.uH)(this.state);
        }
        _cloneInto(t) {
          const {
            blockLen: e,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new v(e, n, r, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = n),
            (t.outputLen = r),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      const m = (t, e, n) => (0, i.qj)(() => new v(e, t, n)),
        A = (() => m(1, 136, 32))();
    },
    35172: (t, e, n) => {
      "use strict";
      n.d(e, {
        Vw: () => c,
        Id: () => h,
        O8: () => o,
        po: () => f,
        Ow: () => s,
        ZJ: () => a,
        ld: () => l,
      });
      const r =
        "object" === typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = n(12504);
      function o(t) {
        return new DataView(t.buffer, t.byteOffset, t.byteLength);
      }
      function s(t, e) {
        return (t << (32 - e)) | (t >>> e);
      }
      "function" === typeof Uint8Array.from([]).toHex && Uint8Array.fromHex;
      function a(t) {
        return (
          "string" === typeof t &&
            (t = (function (t) {
              if ("string" !== typeof t)
                throw new Error("utf8ToBytes expected string, got " + typeof t);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, i.DO)(t),
          t
        );
      }
      function h() {
        let t = 0;
        for (let n = 0; n < arguments.length; n++) {
          const e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          (0, i.DO)(e), (t += e.length);
        }
        const e = new Uint8Array(t);
        for (let n = 0, r = 0; n < arguments.length; n++) {
          const t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          e.set(t, r), (r += t.length);
        }
        return e;
      }
      class c {
        clone() {
          return this._cloneInto();
        }
      }
      function l(t) {
        const e = (e) => t().update(a(e)).digest(),
          n = t();
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function f() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
        if (r && "function" === typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(t));
        if (r && "function" === typeof r.randomBytes)
          return Uint8Array.from(r.randomBytes(t));
        throw new Error("crypto.getRandomValues must be defined");
      }
    },
    35701: (t) => {
      "use strict";
      var e = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      t.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, n = 0; n < 10; n++)
            e["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(e)
              .map(function (t) {
                return e[t];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              r[t] = t;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (t, i) {
            for (
              var o,
                s,
                a = (function (t) {
                  if (null === t || void 0 === t)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(t);
                })(t),
                h = 1;
              h < arguments.length;
              h++
            ) {
              for (var c in (o = Object(arguments[h])))
                n.call(o, c) && (a[c] = o[c]);
              if (e) {
                s = e(o);
                for (var l = 0; l < s.length; l++)
                  r.call(o, s[l]) && (a[s[l]] = o[s[l]]);
              }
            }
            return a;
          };
    },
    54534: (t, e, n) => {
      "use strict";
      const r = n(27671).v4;
      t.exports = function (t, e, n, i) {
        if ("string" !== typeof t) throw new TypeError(t + " must be a string");
        const o = "number" === typeof (i = i || {}).version ? i.version : 2;
        if (1 !== o && 2 !== o) throw new TypeError(o + " must be 1 or 2");
        const s = { method: t };
        if ((2 === o && (s.jsonrpc = "2.0"), e)) {
          if ("object" !== typeof e && !Array.isArray(e))
            throw new TypeError(e + " must be an object, array or omitted");
          s.params = e;
        }
        if ("undefined" === typeof n) {
          const t =
            "function" === typeof i.generator
              ? i.generator
              : function () {
                  return r();
                };
          s.id = t(s, i);
        } else
          2 === o && null === n
            ? i.notificationIdNull && (s.id = null)
            : (s.id = n);
        return s;
      };
    },
    55572: (t) => {
      function e(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      (t.exports = e),
        (e.equal = function (t, e, n) {
          if (t != e)
            throw new Error(n || "Assertion failed: " + t + " != " + e);
        });
    },
    55587: (t, e, n) => {
      "use strict";
      n.d(e, { S8: () => i });
      var r = n(62735);
      function i(t) {
        return (0, r.tt)(t);
      }
    },
    71274: (t, e, n) => {
      "use strict";
      var r;
      n.d(e, { c0: () => _, ge: () => j, s6: () => $ });
      const i = globalThis,
        o = i.trustedTypes,
        s = o ? o.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
        a = "$lit$",
        h = `lit$${Math.random().toFixed(9).slice(2)}$`,
        c = "?" + h,
        l = `<${c}>`,
        f = document,
        u = () => f.createComment(""),
        d = (t) =>
          null === t || ("object" != typeof t && "function" != typeof t),
        p = Array.isArray,
        g = (t) =>
          p(t) ||
          "function" ==
            typeof (null === t || void 0 === t ? void 0 : t[Symbol.iterator]),
        y = "[ \t\n\f\r]",
        w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        b = /-->/g,
        v = />/g,
        m = RegExp(
          `>|${y}(?:([^\\s"'>=/]+)(${y}*=${y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        A = /'/g,
        x = /"/g,
        E = /^(?:script|style|textarea|title)$/i,
        B = (t) =>
          function (e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return { _$litType$: t, strings: e, values: r };
          },
        _ = (B(1), B(2), B(3), Symbol.for("lit-noChange")),
        $ = Symbol.for("lit-nothing"),
        H = new WeakMap(),
        S = f.createTreeWalker(f, 129);
      function O(t, e) {
        if (!p(t) || !t.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== s ? s.createHTML(e) : e;
      }
      const C = (t, e) => {
        const n = t.length - 1,
          r = [];
        let i,
          o = 2 === e ? "<svg>" : 3 === e ? "<math>" : "",
          s = w;
        for (let c = 0; c < n; c++) {
          const e = t[c];
          let n,
            f,
            u = -1,
            d = 0;
          for (
            ;
            d < e.length && ((s.lastIndex = d), (f = s.exec(e)), null !== f);

          )
            (d = s.lastIndex),
              s === w
                ? "!--" === f[1]
                  ? (s = b)
                  : void 0 !== f[1]
                  ? (s = v)
                  : void 0 !== f[2]
                  ? (E.test(f[2]) && (i = RegExp("</" + f[2], "g")), (s = m))
                  : void 0 !== f[3] && (s = m)
                : s === m
                ? ">" === f[0]
                  ? ((s = null !== i && void 0 !== i ? i : w), (u = -1))
                  : void 0 === f[1]
                  ? (u = -2)
                  : ((u = s.lastIndex - f[2].length),
                    (n = f[1]),
                    (s = void 0 === f[3] ? m : '"' === f[3] ? x : A))
                : s === x || s === A
                ? (s = m)
                : s === b || s === v
                ? (s = w)
                : ((s = m), (i = void 0));
          const p = s === m && t[c + 1].startsWith("/>") ? " " : "";
          o +=
            s === w
              ? e + l
              : u >= 0
              ? (r.push(n), e.slice(0, u) + a + e.slice(u) + h + p)
              : e + h + (-2 === u ? c : p);
        }
        return [
          O(
            t,
            o +
              (t[n] || "<?>") +
              (2 === e ? "</svg>" : 3 === e ? "</math>" : "")
          ),
          r,
        ];
      };
      class I {
        constructor(t, e) {
          let n,
            { strings: r, _$litType$: i } = t;
          this.parts = [];
          let s = 0,
            l = 0;
          const f = r.length - 1,
            d = this.parts,
            [p, g] = C(r, i);
          if (
            ((this.el = I.createElement(p, e)),
            (S.currentNode = this.el.content),
            2 === i || 3 === i)
          ) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
          }
          for (; null !== (n = S.nextNode()) && d.length < f; ) {
            if (1 === n.nodeType) {
              if (n.hasAttributes())
                for (const t of n.getAttributeNames())
                  if (t.endsWith(a)) {
                    const e = g[l++],
                      r = n.getAttribute(t).split(h),
                      i = /([.?@])?(.*)/.exec(e);
                    d.push({
                      type: 1,
                      index: s,
                      name: i[2],
                      strings: r,
                      ctor:
                        "." === i[1]
                          ? k
                          : "?" === i[1]
                          ? R
                          : "@" === i[1]
                          ? T
                          : z,
                    }),
                      n.removeAttribute(t);
                  } else
                    t.startsWith(h) &&
                      (d.push({ type: 6, index: s }), n.removeAttribute(t));
              if (E.test(n.tagName)) {
                const t = n.textContent.split(h),
                  e = t.length - 1;
                if (e > 0) {
                  n.textContent = o ? o.emptyScript : "";
                  for (let r = 0; r < e; r++)
                    n.append(t[r], u()),
                      S.nextNode(),
                      d.push({ type: 2, index: ++s });
                  n.append(t[e], u());
                }
              }
            } else if (8 === n.nodeType)
              if (n.data === c) d.push({ type: 2, index: s });
              else {
                let t = -1;
                for (; -1 !== (t = n.data.indexOf(h, t + 1)); )
                  d.push({ type: 7, index: s }), (t += h.length - 1);
              }
            s++;
          }
        }
        static createElement(t, e) {
          const n = f.createElement("template");
          return (n.innerHTML = t), n;
        }
      }
      function N(t, e) {
        var n, r, i, o, s;
        let a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          h = arguments.length > 3 ? arguments[3] : void 0;
        if (e === _) return e;
        let c =
          void 0 !== h
            ? null === (n = a._$Co) || void 0 === n
              ? void 0
              : n[h]
            : a._$Cl;
        const l = d(e) ? void 0 : e._$litDirective$;
        return (
          (null === (r = c) || void 0 === r ? void 0 : r.constructor) !== l &&
            (null !== (i = c) &&
              void 0 !== i &&
              null !== (o = i._$AO) &&
              void 0 !== o &&
              o.call(i, !1),
            void 0 === l ? (c = void 0) : ((c = new l(t)), c._$AT(t, a, h)),
            void 0 !== h
              ? ((null !== (s = a._$Co) && void 0 !== s ? s : (a._$Co = []))[
                  h
                ] = c)
              : (a._$Cl = c)),
          void 0 !== c && (e = N(t, c._$AS(t, e.values), c, h)),
          e
        );
      }
      class U {
        constructor(t, e) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = t),
            (this._$AM = e);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t) {
          var e;
          const {
              el: { content: n },
              parts: r,
            } = this._$AD,
            i = (
              null !==
                (e = null === t || void 0 === t ? void 0 : t.creationScope) &&
              void 0 !== e
                ? e
                : f
            ).importNode(n, !0);
          S.currentNode = i;
          let o = S.nextNode(),
            s = 0,
            a = 0,
            h = r[0];
          for (; void 0 !== h; ) {
            var c;
            if (s === h.index) {
              let e;
              2 === h.type
                ? (e = new L(o, o.nextSibling, this, t))
                : 1 === h.type
                ? (e = new h.ctor(o, h.name, h.strings, this, t))
                : 6 === h.type && (e = new P(o, this, t)),
                this._$AV.push(e),
                (h = r[++a]);
            }
            s !== (null === (c = h) || void 0 === c ? void 0 : c.index) &&
              ((o = S.nextNode()), s++);
          }
          return (S.currentNode = f), i;
        }
        p(t) {
          let e = 0;
          for (const n of this._$AV)
            void 0 !== n &&
              (void 0 !== n.strings
                ? (n._$AI(t, n, e), (e += n.strings.length - 2))
                : n._$AI(t[e])),
              e++;
        }
      }
      class L {
        get _$AU() {
          var t, e;
          return null !==
            (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
            void 0 !== t
            ? t
            : this._$Cv;
        }
        constructor(t, e, n, r) {
          var i;
          (this.type = 2),
            (this._$AH = $),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = e),
            (this._$AM = n),
            (this.options = r),
            (this._$Cv =
              null ===
                (i = null === r || void 0 === r ? void 0 : r.isConnected) ||
              void 0 === i ||
              i);
        }
        get parentNode() {
          var t;
          let e = this._$AA.parentNode;
          const n = this._$AM;
          return (
            void 0 !== n &&
              11 === (null === (t = e) || void 0 === t ? void 0 : t.nodeType) &&
              (e = n.parentNode),
            e
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t) {
          (t = N(
            this,
            t,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this
          )),
            d(t)
              ? t === $ || null == t || "" === t
                ? (this._$AH !== $ && this._$AR(), (this._$AH = $))
                : t !== this._$AH && t !== _ && this._(t)
              : void 0 !== t._$litType$
              ? this.$(t)
              : void 0 !== t.nodeType
              ? this.T(t)
              : g(t)
              ? this.k(t)
              : this._(t);
        }
        O(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        T(t) {
          this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
        }
        _(t) {
          this._$AH !== $ && d(this._$AH)
            ? (this._$AA.nextSibling.data = t)
            : this.T(f.createTextNode(t)),
            (this._$AH = t);
        }
        $(t) {
          var e;
          const { values: n, _$litType$: r } = t,
            i =
              "number" == typeof r
                ? this._$AC(t)
                : (void 0 === r.el &&
                    (r.el = I.createElement(O(r.h, r.h[0]), this.options)),
                  r);
          if (
            (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i
          )
            this._$AH.p(n);
          else {
            const t = new U(i, this),
              e = t.u(this.options);
            t.p(n), this.T(e), (this._$AH = t);
          }
        }
        _$AC(t) {
          let e = H.get(t.strings);
          return void 0 === e && H.set(t.strings, (e = new I(t))), e;
        }
        k(t) {
          p(this._$AH) || ((this._$AH = []), this._$AR());
          const e = this._$AH;
          let n,
            r = 0;
          for (const i of t)
            r === e.length
              ? e.push(
                  (n = new L(this.O(u()), this.O(u()), this, this.options))
                )
              : (n = e[r]),
              n._$AI(i),
              r++;
          r < e.length &&
            (this._$AR(n && n._$AB.nextSibling, r), (e.length = r));
        }
        _$AR() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this._$AA.nextSibling,
            e = arguments.length > 1 ? arguments[1] : void 0;
          for (
            null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, e);
            t && t !== this._$AB;

          ) {
            var n;
            const e = t.nextSibling;
            t.remove(), (t = e);
          }
        }
        setConnected(t) {
          var e;
          void 0 === this._$AM &&
            ((this._$Cv = t),
            null === (e = this._$AP) || void 0 === e || e.call(this, t));
        }
      }
      class z {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(t, e, n, r, i) {
          (this.type = 1),
            (this._$AH = $),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = e),
            (this._$AM = r),
            (this.options = i),
            n.length > 2 || "" !== n[0] || "" !== n[1]
              ? ((this._$AH = Array(n.length - 1).fill(new String())),
                (this.strings = n))
              : (this._$AH = $);
        }
        _$AI(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
          const i = this.strings;
          let o = !1;
          if (void 0 === i)
            (t = N(this, t, e, 0)),
              (o = !d(t) || (t !== this._$AH && t !== _)),
              o && (this._$AH = t);
          else {
            const r = t;
            let s, a;
            for (t = i[0], s = 0; s < i.length - 1; s++)
              (a = N(this, r[n + s], e, s)),
                a === _ && (a = this._$AH[s]),
                o || (o = !d(a) || a !== this._$AH[s]),
                a === $
                  ? (t = $)
                  : t !== $ &&
                    (t += (null !== a && void 0 !== a ? a : "") + i[s + 1]),
                (this._$AH[s] = a);
          }
          o && !r && this.j(t);
        }
        j(t) {
          t === $
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(
                this.name,
                null !== t && void 0 !== t ? t : ""
              );
        }
      }
      class k extends z {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(t) {
          this.element[this.name] = t === $ ? void 0 : t;
        }
      }
      class R extends z {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(t) {
          this.element.toggleAttribute(this.name, !!t && t !== $);
        }
      }
      class T extends z {
        constructor(t, e, n, r, i) {
          super(t, e, n, r, i), (this.type = 5);
        }
        _$AI(t) {
          var e;
          if (
            (t =
              null !==
                (e = N(
                  this,
                  t,
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this,
                  0
                )) && void 0 !== e
                ? e
                : $) === _
          )
            return;
          const n = this._$AH,
            r =
              (t === $ && n !== $) ||
              t.capture !== n.capture ||
              t.once !== n.once ||
              t.passive !== n.passive,
            i = t !== $ && (n === $ || r);
          r && this.element.removeEventListener(this.name, this, n),
            i && this.element.addEventListener(this.name, this, t),
            (this._$AH = t);
        }
        handleEvent(t) {
          var e, n;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (e =
                    null === (n = this.options) || void 0 === n
                      ? void 0
                      : n.host) && void 0 !== e
                  ? e
                  : this.element,
                t
              )
            : this._$AH.handleEvent(t);
        }
      }
      class P {
        constructor(t, e, n) {
          (this.element = t),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = e),
            (this.options = n);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t) {
          N(this, t);
        }
      }
      const j = {
          M: a,
          P: h,
          A: c,
          C: 1,
          L: C,
          R: U,
          D: g,
          V: N,
          I: L,
          H: z,
          N: R,
          U: T,
          B: k,
          F: P,
        },
        q = i.litHtmlPolyfillSupport;
      null !== q && void 0 !== q && q(I, L),
        (null !== (r = i.litHtmlVersions) && void 0 !== r
          ? r
          : (i.litHtmlVersions = [])
        ).push("3.3.0");
    },
    72932: (t, e, n) => {
      "use strict";
      function r() {
        const t = new Set();
        let e = [];
        const n = () =>
          (function (t) {
            if ("undefined" === typeof window) return;
            const e = (e) => t(e.detail);
            return (
              window.addEventListener("eip6963:announceProvider", e),
              window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),
              () => window.removeEventListener("eip6963:announceProvider", e)
            );
          })((n) => {
            e.some((t) => {
              let { info: e } = t;
              return e.uuid === n.info.uuid;
            }) || ((e = [...e, n]), t.forEach((t) => t(e, { added: [n] })));
          });
        let r = n();
        return {
          _listeners: () => t,
          clear() {
            t.forEach((t) => t([], { removed: [...e] })), (e = []);
          },
          destroy() {
            var e;
            this.clear(), t.clear(), null === (e = r) || void 0 === e || e();
          },
          findProvider(t) {
            let { rdns: n } = t;
            return e.find((t) => t.info.rdns === n);
          },
          getProviders: () => e,
          reset() {
            var t;
            this.clear(), null === (t = r) || void 0 === t || t(), (r = n());
          },
          subscribe(n) {
            let { emitImmediately: r } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return t.add(n), r && n(e, { added: e }), () => t.delete(n);
          },
        };
      }
      n.d(e, { y: () => r });
    },
    78383: (t, e, n) => {
      "use strict";
      n.d(e, { Fo: () => Tt });
      var r = {};
      n.r(r), n.d(r, { identity: () => H });
      var i = {};
      n.r(i), n.d(i, { base2: () => S });
      var o = {};
      n.r(o), n.d(o, { base8: () => O });
      var s = {};
      n.r(s), n.d(s, { base10: () => C });
      var a = {};
      n.r(a), n.d(a, { base16: () => I, base16upper: () => N });
      var h = {};
      n.r(h),
        n.d(h, {
          base32: () => U,
          base32hex: () => R,
          base32hexpad: () => P,
          base32hexpadupper: () => j,
          base32hexupper: () => T,
          base32pad: () => z,
          base32padupper: () => k,
          base32upper: () => L,
          base32z: () => q,
        });
      var c = {};
      n.r(c), n.d(c, { base36: () => M, base36upper: () => F });
      var l = {};
      n.r(l), n.d(l, { base58btc: () => D, base58flickr: () => V });
      var f = {};
      n.r(f),
        n.d(f, {
          base64: () => Z,
          base64pad: () => W,
          base64url: () => G,
          base64urlpad: () => K,
        });
      var u = {};
      n.r(u), n.d(u, { base256emoji: () => Q });
      var d = {};
      n.r(d), n.d(d, { sha256: () => Bt, sha512: () => _t });
      var p = {};
      n.r(p), n.d(p, { identity: () => Ht });
      var g = {};
      n.r(g),
        n.d(g, {
          code: () => Ot,
          decode: () => It,
          encode: () => Ct,
          name: () => St,
        });
      var y = {};
      n.r(y),
        n.d(y, {
          code: () => zt,
          decode: () => Rt,
          encode: () => kt,
          name: () => Lt,
        });
      const w = function (t, e) {
          if (t.length >= 255) throw new TypeError("Alphabet too long");
          for (var n = new Uint8Array(256), r = 0; r < n.length; r++)
            n[r] = 255;
          for (var i = 0; i < t.length; i++) {
            var o = t.charAt(i),
              s = o.charCodeAt(0);
            if (255 !== n[s]) throw new TypeError(o + " is ambiguous");
            n[s] = i;
          }
          var a = t.length,
            h = t.charAt(0),
            c = Math.log(a) / Math.log(256),
            l = Math.log(256) / Math.log(a);
          function f(t) {
            if ("string" !== typeof t) throw new TypeError("Expected String");
            if (0 === t.length) return new Uint8Array();
            var e = 0;
            if (" " !== t[e]) {
              for (var r = 0, i = 0; t[e] === h; ) r++, e++;
              for (
                var o = ((t.length - e) * c + 1) >>> 0, s = new Uint8Array(o);
                t[e];

              ) {
                var l = n[t.charCodeAt(e)];
                if (255 === l) return;
                for (
                  var f = 0, u = o - 1;
                  (0 !== l || f < i) && -1 !== u;
                  u--, f++
                )
                  (l += (a * s[u]) >>> 0),
                    (s[u] = l % 256 >>> 0),
                    (l = (l / 256) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (i = f), e++;
              }
              if (" " !== t[e]) {
                for (var d = o - i; d !== o && 0 === s[d]; ) d++;
                for (var p = new Uint8Array(r + (o - d)), g = r; d !== o; )
                  p[g++] = s[d++];
                return p;
              }
            }
          }
          return {
            encode: function (e) {
              if (
                (e instanceof Uint8Array ||
                  (ArrayBuffer.isView(e)
                    ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                    : Array.isArray(e) && (e = Uint8Array.from(e))),
                !(e instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === e.length) return "";
              for (
                var n = 0, r = 0, i = 0, o = e.length;
                i !== o && 0 === e[i];

              )
                i++, n++;
              for (
                var s = ((o - i) * l + 1) >>> 0, c = new Uint8Array(s);
                i !== o;

              ) {
                for (
                  var f = e[i], u = 0, d = s - 1;
                  (0 !== f || u < r) && -1 !== d;
                  d--, u++
                )
                  (f += (256 * c[d]) >>> 0),
                    (c[d] = f % a >>> 0),
                    (f = (f / a) >>> 0);
                if (0 !== f) throw new Error("Non-zero carry");
                (r = u), i++;
              }
              for (var p = s - r; p !== s && 0 === c[p]; ) p++;
              for (var g = h.repeat(n); p < s; ++p) g += t.charAt(c[p]);
              return g;
            },
            decodeUnsafe: f,
            decode: function (t) {
              var n = f(t);
              if (n) return n;
              throw new Error(`Non-${e} character`);
            },
          };
        },
        b =
          (new Uint8Array(0),
          (t) => {
            if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name)
              return t;
            if (t instanceof ArrayBuffer) return new Uint8Array(t);
            if (ArrayBuffer.isView(t))
              return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
            throw new Error("Unknown type, must be binary type");
          });
      class v {
        constructor(t, e, n) {
          (this.name = t), (this.prefix = e), (this.baseEncode = n);
        }
        encode(t) {
          if (t instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(t)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class m {
        constructor(t, e, n) {
          if (((this.name = t), (this.prefix = e), void 0 === e.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = e.codePointAt(0)), (this.baseDecode = n);
        }
        decode(t) {
          if ("string" === typeof t) {
            if (t.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(t)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(t.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(t) {
          return x(this, t);
        }
      }
      class A {
        constructor(t) {
          this.decoders = t;
        }
        or(t) {
          return x(this, t);
        }
        decode(t) {
          const e = t[0],
            n = this.decoders[e];
          if (n) return n.decode(t);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              t
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const x = (t, e) =>
        new A({
          ...(t.decoders || { [t.prefix]: t }),
          ...(e.decoders || { [e.prefix]: e }),
        });
      class E {
        constructor(t, e, n, r) {
          (this.name = t),
            (this.prefix = e),
            (this.baseEncode = n),
            (this.baseDecode = r),
            (this.encoder = new v(t, e, n)),
            (this.decoder = new m(t, e, r));
        }
        encode(t) {
          return this.encoder.encode(t);
        }
        decode(t) {
          return this.decoder.decode(t);
        }
      }
      const B = (t) => {
          let { name: e, prefix: n, encode: r, decode: i } = t;
          return new E(e, n, r, i);
        },
        _ = (t) => {
          let { prefix: e, name: n, alphabet: r } = t;
          const { encode: i, decode: o } = w(r, n);
          return B({ prefix: e, name: n, encode: i, decode: (t) => b(o(t)) });
        },
        $ = (t) => {
          let { name: e, prefix: n, bitsPerChar: r, alphabet: i } = t;
          return B({
            prefix: n,
            name: e,
            encode: (t) =>
              ((t, e, n) => {
                const r = "=" === e[e.length - 1],
                  i = (1 << n) - 1;
                let o = "",
                  s = 0,
                  a = 0;
                for (let h = 0; h < t.length; ++h)
                  for (a = (a << 8) | t[h], s += 8; s > n; )
                    (s -= n), (o += e[i & (a >> s)]);
                if ((s && (o += e[i & (a << (n - s))]), r))
                  for (; (o.length * n) & 7; ) o += "=";
                return o;
              })(t, i, r),
            decode: (t) =>
              ((t, e, n, r) => {
                const i = {};
                for (let l = 0; l < e.length; ++l) i[e[l]] = l;
                let o = t.length;
                for (; "=" === t[o - 1]; ) --o;
                const s = new Uint8Array(((o * n) / 8) | 0);
                let a = 0,
                  h = 0,
                  c = 0;
                for (let l = 0; l < o; ++l) {
                  const e = i[t[l]];
                  if (void 0 === e) throw new SyntaxError(`Non-${r} character`);
                  (h = (h << n) | e),
                    (a += n),
                    a >= 8 && ((a -= 8), (s[c++] = 255 & (h >> a)));
                }
                if (a >= n || 255 & (h << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return s;
              })(t, i, r, e),
          });
        },
        H = B({
          prefix: "\0",
          name: "identity",
          encode: (t) => {
            return (e = t), new TextDecoder().decode(e);
            var e;
          },
          decode: (t) => ((t) => new TextEncoder().encode(t))(t),
        }),
        S = $({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        O = $({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        C = _({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        I = $({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        N = $({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        U = $({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        L = $({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        z = $({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        k = $({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        R = $({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        T = $({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        P = $({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        j = $({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        q = $({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        M = _({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        F = _({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        D = _({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        V = _({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        Z = $({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        W = $({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        G = $({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        K = $({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        J = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        Y = J.reduce((t, e, n) => ((t[n] = e), t), []),
        X = J.reduce((t, e, n) => ((t[e.codePointAt(0)] = n), t), []);
      const Q = B({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (t) {
          return t.reduce((t, e) => (t += Y[e]), "");
        },
        decode: function (t) {
          const e = [];
          for (const n of t) {
            const t = X[n.codePointAt(0)];
            if (void 0 === t)
              throw new Error(`Non-base256emoji character: ${n}`);
            e.push(t);
          }
          return new Uint8Array(e);
        },
      });
      var tt = function t(e, n, r) {
          n = n || [];
          var i = (r = r || 0);
          for (; e >= rt; ) (n[r++] = (255 & e) | et), (e /= 128);
          for (; e & nt; ) (n[r++] = (255 & e) | et), (e >>>= 7);
          return (n[r] = 0 | e), (t.bytes = r - i + 1), n;
        },
        et = 128,
        nt = -128,
        rt = Math.pow(2, 31);
      var it = function t(e, n) {
          var r,
            i = 0,
            o = 0,
            s = (n = n || 0),
            a = e.length;
          do {
            if (s >= a)
              throw ((t.bytes = 0), new RangeError("Could not decode varint"));
            (r = e[s++]),
              (i += o < 28 ? (r & st) << o : (r & st) * Math.pow(2, o)),
              (o += 7);
          } while (r >= ot);
          return (t.bytes = s - n), i;
        },
        ot = 128,
        st = 127;
      var at = Math.pow(2, 7),
        ht = Math.pow(2, 14),
        ct = Math.pow(2, 21),
        lt = Math.pow(2, 28),
        ft = Math.pow(2, 35),
        ut = Math.pow(2, 42),
        dt = Math.pow(2, 49),
        pt = Math.pow(2, 56),
        gt = Math.pow(2, 63);
      const yt = {
          encode: tt,
          decode: it,
          encodingLength: function (t) {
            return t < at
              ? 1
              : t < ht
              ? 2
              : t < ct
              ? 3
              : t < lt
              ? 4
              : t < ft
              ? 5
              : t < ut
              ? 6
              : t < dt
              ? 7
              : t < pt
              ? 8
              : t < gt
              ? 9
              : 10;
          },
        },
        wt = function (t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return yt.encode(t, e, n), e;
        },
        bt = (t) => yt.encodingLength(t),
        vt = (t, e) => {
          const n = e.byteLength,
            r = bt(t),
            i = r + bt(n),
            o = new Uint8Array(i + n);
          return wt(t, o, 0), wt(n, o, r), o.set(e, i), new mt(t, n, e, o);
        };
      class mt {
        constructor(t, e, n, r) {
          (this.code = t), (this.size = e), (this.digest = n), (this.bytes = r);
        }
      }
      const At = (t) => {
        let { name: e, code: n, encode: r } = t;
        return new xt(e, n, r);
      };
      class xt {
        constructor(t, e, n) {
          (this.name = t), (this.code = e), (this.encode = n);
        }
        digest(t) {
          if (t instanceof Uint8Array) {
            const e = this.encode(t);
            return e instanceof Uint8Array
              ? vt(this.code, e)
              : e.then((t) => vt(this.code, t));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const Et = (t) => async (e) =>
          new Uint8Array(await crypto.subtle.digest(t, e)),
        Bt = At({ name: "sha2-256", code: 18, encode: Et("SHA-256") }),
        _t = At({ name: "sha2-512", code: 19, encode: Et("SHA-512") }),
        $t = b,
        Ht = {
          code: 0,
          name: "identity",
          encode: $t,
          digest: (t) => vt(0, $t(t)),
        },
        St = "raw",
        Ot = 85,
        Ct = (t) => b(t),
        It = (t) => b(t),
        Nt = new TextEncoder(),
        Ut = new TextDecoder(),
        Lt = "json",
        zt = 512,
        kt = (t) => Nt.encode(JSON.stringify(t)),
        Rt = (t) => JSON.parse(Ut.decode(t));
      Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom");
      Symbol.for("@ipld/js-cid/CID");
      const Tt = { ...r, ...i, ...o, ...s, ...a, ...h, ...c, ...l, ...f, ...u };
    },
    83221: (t, e, n) => {
      "use strict";
      n.d(e, { ev: () => z });
      var r = n(14467);
      const i = BigInt(2 ** 32 - 1),
        o = BigInt(32);
      function s(t) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(t & i), l: Number((t >> o) & i) }
          : { h: 0 | Number((t >> o) & i), l: 0 | Number(t & i) };
      }
      const a = {
        fromBig: s,
        split: function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = new Uint32Array(t.length),
            r = new Uint32Array(t.length);
          for (let i = 0; i < t.length; i++) {
            const { h: o, l: a } = s(t[i], e);
            [n[i], r[i]] = [o, a];
          }
          return [n, r];
        },
        toBig: (t, e) => (BigInt(t >>> 0) << o) | BigInt(e >>> 0),
        shrSH: (t, e, n) => t >>> n,
        shrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
        rotrSH: (t, e, n) => (t >>> n) | (e << (32 - n)),
        rotrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
        rotrBH: (t, e, n) => (t << (64 - n)) | (e >>> (n - 32)),
        rotrBL: (t, e, n) => (t >>> (n - 32)) | (e << (64 - n)),
        rotr32H: (t, e) => e,
        rotr32L: (t, e) => t,
        rotlSH: (t, e, n) => (t << n) | (e >>> (32 - n)),
        rotlSL: (t, e, n) => (e << n) | (t >>> (32 - n)),
        rotlBH: (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        rotlBL: (t, e, n) => (t << (n - 32)) | (e >>> (64 - n)),
        add: function (t, e, n, r) {
          const i = (e >>> 0) + (r >>> 0);
          return { h: (t + n + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
        },
        add3L: (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
        add3H: (t, e, n, r) => (e + n + r + ((t / 2 ** 32) | 0)) | 0,
        add4L: (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
        add4H: (t, e, n, r, i) => (e + n + r + i + ((t / 2 ** 32) | 0)) | 0,
        add5H: (t, e, n, r, i, o) =>
          (e + n + r + i + o + ((t / 2 ** 32) | 0)) | 0,
        add5L: (t, e, n, r, i) =>
          (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
      };
      var h = n(35172);
      const [c, l] = (() =>
          a.split(
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
            ].map((t) => BigInt(t))
          ))(),
        f = new Uint32Array(80),
        u = new Uint32Array(80);
      class d extends r.ol {
        constructor() {
          super(
            128,
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
            16,
            !1
          ),
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
            Ah: t,
            Al: e,
            Bh: n,
            Bl: r,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: h,
            El: c,
            Fh: l,
            Fl: f,
            Gh: u,
            Gl: d,
            Hh: p,
            Hl: g,
          } = this;
          return [t, e, n, r, i, o, s, a, h, c, l, f, u, d, p, g];
        }
        set(t, e, n, r, i, o, s, a, h, c, l, f, u, d, p, g) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | h),
            (this.El = 0 | c),
            (this.Fh = 0 | l),
            (this.Fl = 0 | f),
            (this.Gh = 0 | u),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(t, e) {
          for (let a = 0; a < 16; a++, e += 4)
            (f[a] = t.getUint32(e)), (u[a] = t.getUint32((e += 4)));
          for (let c = 16; c < 80; c++) {
            const t = 0 | f[c - 15],
              e = 0 | u[c - 15],
              n = a.rotrSH(t, e, 1) ^ a.rotrSH(t, e, 8) ^ a.shrSH(t, e, 7),
              r = a.rotrSL(t, e, 1) ^ a.rotrSL(t, e, 8) ^ a.shrSL(t, e, 7),
              i = 0 | f[c - 2],
              o = 0 | u[c - 2],
              s = a.rotrSH(i, o, 19) ^ a.rotrBH(i, o, 61) ^ a.shrSH(i, o, 6),
              h = a.rotrSL(i, o, 19) ^ a.rotrBL(i, o, 61) ^ a.shrSL(i, o, 6),
              l = a.add4L(r, h, u[c - 7], u[c - 16]),
              d = a.add4H(l, n, s, f[c - 7], f[c - 16]);
            (f[c] = 0 | d), (u[c] = 0 | l);
          }
          let {
            Ah: n,
            Al: r,
            Bh: i,
            Bl: o,
            Ch: s,
            Cl: h,
            Dh: d,
            Dl: p,
            Eh: g,
            El: y,
            Fh: w,
            Fl: b,
            Gh: v,
            Gl: m,
            Hh: A,
            Hl: x,
          } = this;
          for (let E = 0; E < 80; E++) {
            const t =
                a.rotrSH(g, y, 14) ^ a.rotrSH(g, y, 18) ^ a.rotrBH(g, y, 41),
              e = a.rotrSL(g, y, 14) ^ a.rotrSL(g, y, 18) ^ a.rotrBL(g, y, 41),
              B = (g & w) ^ (~g & v),
              _ = (y & b) ^ (~y & m),
              $ = a.add5L(x, e, _, l[E], u[E]),
              H = a.add5H($, A, t, B, c[E], f[E]),
              S = 0 | $,
              O = a.rotrSH(n, r, 28) ^ a.rotrBH(n, r, 34) ^ a.rotrBH(n, r, 39),
              C = a.rotrSL(n, r, 28) ^ a.rotrBL(n, r, 34) ^ a.rotrBL(n, r, 39),
              I = (n & i) ^ (n & s) ^ (i & s),
              N = (r & o) ^ (r & h) ^ (o & h);
            (A = 0 | v),
              (x = 0 | m),
              (v = 0 | w),
              (m = 0 | b),
              (w = 0 | g),
              (b = 0 | y),
              ({ h: g, l: y } = a.add(0 | d, 0 | p, 0 | H, 0 | S)),
              (d = 0 | s),
              (p = 0 | h),
              (s = 0 | i),
              (h = 0 | o),
              (i = 0 | n),
              (o = 0 | r);
            const U = a.add3L(S, C, N);
            (n = a.add3H(U, H, O, I)), (r = 0 | U);
          }
          ({ h: n, l: r } = a.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)),
            ({ h: i, l: o } = a.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: s, l: h } = a.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | h)),
            ({ h: d, l: p } = a.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: g, l: y } = a.add(0 | this.Eh, 0 | this.El, 0 | g, 0 | y)),
            ({ h: w, l: b } = a.add(0 | this.Fh, 0 | this.Fl, 0 | w, 0 | b)),
            ({ h: v, l: m } = a.add(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | m)),
            ({ h: A, l: x } = a.add(0 | this.Hh, 0 | this.Hl, 0 | A, 0 | x)),
            this.set(n, r, i, o, s, h, d, p, g, y, w, b, v, m, A, x);
        }
        roundClean() {
          f.fill(0), u.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      const p = (0, h.ld)(() => new d());
      var g = n(25282),
        y = n(20819),
        w = n(9864);
      const b = BigInt(0),
        v = BigInt(1),
        m = BigInt(2),
        A = BigInt(8),
        x = { zip215: !0 };
      function E(t) {
        const e = (function (t) {
            const e = (0, g.hp)(t);
            return (
              (0, w.Q5)(
                t,
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
              Object.freeze({ ...e })
            );
          })(t),
          {
            Fp: n,
            n: r,
            prehash: i,
            hash: o,
            randomBytes: s,
            nByteLength: a,
            h: h,
          } = e,
          c = m << (BigInt(8 * a) - v),
          l = n.create,
          f = (0, y.D0)(e.n, e.nBitLength),
          u =
            e.uvRatio ||
            ((t, e) => {
              try {
                return { isValid: !0, value: n.sqrt(t * n.inv(e)) };
              } catch (r) {
                return { isValid: !1, value: b };
              }
            }),
          d = e.adjustScalarBytes || ((t) => t),
          p =
            e.domain ||
            ((t, e, n) => {
              if (((0, w.e8)("phflag", n), e.length || n))
                throw new Error("Contexts/pre-hash are not supported");
              return t;
            });
        function E(t, e) {
          const n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              ? v
              : b;
          (0, w.aK)("coordinate " + t, e, n, c);
        }
        function B(t) {
          if (!(t instanceof H)) throw new Error("ExtendedPoint expected");
        }
        const _ = (0, w.x)((t, e) => {
            const { ex: r, ey: i, ez: o } = t,
              s = t.is0();
            null == e && (e = s ? A : n.inv(o));
            const a = l(r * e),
              h = l(i * e),
              c = l(o * e);
            if (s) return { x: b, y: v };
            if (c !== v) throw new Error("invZ was invalid");
            return { x: a, y: h };
          }),
          $ = (0, w.x)((t) => {
            const { a: n, d: r } = e;
            if (t.is0()) throw new Error("bad point: ZERO");
            const { ex: i, ey: o, ez: s, et: a } = t,
              h = l(i * i),
              c = l(o * o),
              f = l(s * s),
              u = l(f * f),
              d = l(h * n);
            if (l(f * l(d + c)) !== l(u + l(r * l(h * c))))
              throw new Error("bad point: equation left != right (1)");
            if (l(i * o) !== l(s * a))
              throw new Error("bad point: equation left != right (2)");
            return !0;
          });
        class H {
          constructor(t, e, n, r) {
            E("x", t),
              E("y", e),
              E("z", n, !0),
              E("t", r),
              (this.ex = t),
              (this.ey = e),
              (this.ez = n),
              (this.et = r),
              Object.freeze(this);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static fromAffine(t) {
            if (t instanceof H) throw new Error("extended point not allowed");
            const { x: e, y: n } = t || {};
            return E("x", e), E("y", n), new H(e, n, v, l(e * n));
          }
          static normalizeZ(t) {
            const e = n.invertBatch(t.map((t) => t.ez));
            return t.map((t, n) => t.toAffine(e[n])).map(H.fromAffine);
          }
          static msm(t, e) {
            return (0, g.Xf)(H, f, t, e);
          }
          _setWindowSize(t) {
            C.setWindowSize(this, t);
          }
          assertValidity() {
            $(this);
          }
          equals(t) {
            B(t);
            const { ex: e, ey: n, ez: r } = this,
              { ex: i, ey: o, ez: s } = t,
              a = l(e * s),
              h = l(i * r),
              c = l(n * s),
              f = l(o * r);
            return a === h && c === f;
          }
          is0() {
            return this.equals(H.ZERO);
          }
          negate() {
            return new H(l(-this.ex), this.ey, this.ez, l(-this.et));
          }
          double() {
            const { a: t } = e,
              { ex: n, ey: r, ez: i } = this,
              o = l(n * n),
              s = l(r * r),
              a = l(m * l(i * i)),
              h = l(t * o),
              c = n + r,
              f = l(l(c * c) - o - s),
              u = h + s,
              d = u - a,
              p = h - s,
              g = l(f * d),
              y = l(u * p),
              w = l(f * p),
              b = l(d * u);
            return new H(g, y, b, w);
          }
          add(t) {
            B(t);
            const { a: n, d: r } = e,
              { ex: i, ey: o, ez: s, et: a } = this,
              { ex: h, ey: c, ez: f, et: u } = t,
              d = l(i * h),
              p = l(o * c),
              g = l(a * r * u),
              y = l(s * f),
              w = l((i + o) * (h + c) - d - p),
              b = y - g,
              v = y + g,
              m = l(p - n * d),
              A = l(w * b),
              x = l(v * m),
              E = l(w * m),
              _ = l(b * v);
            return new H(A, x, _, E);
          }
          subtract(t) {
            return this.add(t.negate());
          }
          wNAF(t) {
            return C.wNAFCached(this, t, H.normalizeZ);
          }
          multiply(t) {
            const e = t;
            (0, w.aK)("scalar", e, v, r);
            const { p: n, f: i } = this.wNAF(e);
            return H.normalizeZ([n, i])[0];
          }
          multiplyUnsafe(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : H.ZERO;
            const n = t;
            return (
              (0, w.aK)("scalar", n, b, r),
              n === b
                ? O
                : this.is0() || n === v
                ? this
                : C.wNAFCachedUnsafe(this, n, H.normalizeZ, e)
            );
          }
          isSmallOrder() {
            return this.multiplyUnsafe(h).is0();
          }
          isTorsionFree() {
            return C.unsafeLadder(this, r).is0();
          }
          toAffine(t) {
            return _(this, t);
          }
          clearCofactor() {
            const { h: t } = e;
            return t === v ? this : this.multiplyUnsafe(t);
          }
          static fromHex(t) {
            let r =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const { d: i, a: o } = e,
              s = n.BYTES;
            (t = (0, w.qj)("pointHex", t, s)), (0, w.e8)("zip215", r);
            const a = t.slice(),
              h = t[s - 1];
            a[s - 1] = -129 & h;
            const f = (0, w.lX)(a),
              d = r ? c : n.ORDER;
            (0, w.aK)("pointHex.y", f, b, d);
            const p = l(f * f),
              g = l(p - v),
              y = l(i * p - o);
            let { isValid: m, value: A } = u(g, y);
            if (!m) throw new Error("Point.fromHex: invalid y coordinate");
            const x = (A & v) === v,
              E = 0 !== (128 & h);
            if (!r && A === b && E)
              throw new Error("Point.fromHex: x=0 and x_0=1");
            return E !== x && (A = l(-A)), H.fromAffine({ x: A, y: f });
          }
          static fromPrivateKey(t) {
            const { scalar: e } = U(t);
            return S.multiply(e);
          }
          toRawBytes() {
            const { x: t, y: e } = this.toAffine(),
              r = (0, w.z)(e, n.BYTES);
            return (r[r.length - 1] |= t & v ? 128 : 0), r;
          }
          toHex() {
            return (0, w.My)(this.toRawBytes());
          }
        }
        (H.BASE = new H(e.Gx, e.Gy, v, l(e.Gx * e.Gy))),
          (H.ZERO = new H(b, v, v, b));
        const { BASE: S, ZERO: O } = H,
          C = (0, g.hT)(H, 8 * a);
        function I(t) {
          return (0, y.zi)(t, r);
        }
        function N(t) {
          return I((0, w.lX)(t));
        }
        function U(t) {
          const e = n.BYTES;
          t = (0, w.qj)("private key", t, e);
          const r = (0, w.qj)("hashed private key", o(t), 2 * e),
            i = d(r.slice(0, e));
          return { head: i, prefix: r.slice(e, 2 * e), scalar: N(i) };
        }
        function L(t) {
          const { head: e, prefix: n, scalar: r } = U(t),
            i = S.multiply(r),
            o = i.toRawBytes();
          return { head: e, prefix: n, scalar: r, point: i, pointBytes: o };
        }
        function z() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Uint8Array();
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          const s = (0, w.Id)(...n);
          return N(o(p(s, (0, w.qj)("context", t), !!i)));
        }
        const k = x;
        S._setWindowSize(8);
        const R = {
          getExtendedPublicKey: L,
          randomPrivateKey: () => s(n.BYTES),
          precompute() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 8,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : H.BASE;
            return e._setWindowSize(t), e.multiply(BigInt(3)), e;
          },
        };
        return {
          CURVE: e,
          getPublicKey: function (t) {
            return L(t).pointBytes;
          },
          sign: function (t, e) {
            let o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            (t = (0, w.qj)("message", t)), i && (t = i(t));
            const { prefix: s, scalar: a, pointBytes: h } = L(e),
              c = z(o.context, s, t),
              l = S.multiply(c).toRawBytes(),
              f = I(c + z(o.context, l, h, t) * a);
            (0, w.aK)("signature.s", f, b, r);
            const u = (0, w.Id)(l, (0, w.z)(f, n.BYTES));
            return (0, w.qj)("result", u, 2 * n.BYTES);
          },
          verify: function (t, e, r) {
            let o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : k;
            const { context: s, zip215: a } = o,
              h = n.BYTES;
            (t = (0, w.qj)("signature", t, 2 * h)),
              (e = (0, w.qj)("message", e)),
              (r = (0, w.qj)("publicKey", r, h)),
              void 0 !== a && (0, w.e8)("zip215", a),
              i && (e = i(e));
            const c = (0, w.lX)(t.slice(h, 2 * h));
            let l, f, u;
            try {
              (l = H.fromHex(r, a)),
                (f = H.fromHex(t.slice(0, h), a)),
                (u = S.multiplyUnsafe(c));
            } catch (p) {
              return !1;
            }
            if (!a && l.isSmallOrder()) return !1;
            const d = z(s, f.toRawBytes(), l.toRawBytes(), e);
            return f
              .add(l.multiplyUnsafe(d))
              .subtract(u)
              .clearCofactor()
              .equals(H.ZERO);
          },
          ExtendedPoint: H,
          utils: R,
        };
      }
      const B = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        _ = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        ),
        $ = (BigInt(0), BigInt(1)),
        H = BigInt(2),
        S = (BigInt(3), BigInt(5)),
        O = BigInt(8);
      function C(t) {
        const e = BigInt(10),
          n = BigInt(20),
          r = BigInt(40),
          i = BigInt(80),
          o = B,
          s = (((t * t) % o) * t) % o,
          a = ((0, y.zH)(s, H, o) * s) % o,
          h = ((0, y.zH)(a, $, o) * t) % o,
          c = ((0, y.zH)(h, S, o) * h) % o,
          l = ((0, y.zH)(c, e, o) * c) % o,
          f = ((0, y.zH)(l, n, o) * l) % o,
          u = ((0, y.zH)(f, r, o) * f) % o,
          d = ((0, y.zH)(u, i, o) * u) % o,
          p = ((0, y.zH)(d, i, o) * u) % o,
          g = ((0, y.zH)(p, e, o) * c) % o;
        return { pow_p_5_8: ((0, y.zH)(g, H, o) * t) % o, b2: s };
      }
      function I(t) {
        return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
      }
      function N(t, e) {
        const n = B,
          r = (0, y.zi)(e * e * e, n),
          i = C(t * (0, y.zi)(r * r * e, n)).pow_p_5_8;
        let o = (0, y.zi)(t * r * i, n);
        const s = (0, y.zi)(e * o * o, n),
          a = o,
          h = (0, y.zi)(o * _, n),
          c = s === t,
          l = s === (0, y.zi)(-t, n),
          f = s === (0, y.zi)(-t * _, n);
        return (
          c && (o = a),
          (l || f) && (o = h),
          (0, y.dQ)(o, n) && (o = (0, y.zi)(-o, n)),
          { isValid: c || l, value: o }
        );
      }
      const U = (() => (0, y.D0)(B, void 0, !0))(),
        L = (() => ({
          a: U.create(BigInt(-1)),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: U,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: O,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: p,
          randomBytes: h.po,
          adjustScalarBytes: I,
          uvRatio: N,
        }))(),
        z = (() => E(L))();
    },
    85236: (t, e, n) => {
      "use strict";
      n.d(e, { secp256k1: () => N });
      var r = n(14467),
        i = n(35172);
      const o = new Uint32Array([
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
        s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        a = new Uint32Array(64);
      class h extends r.ol {
        constructor() {
          super(
            64,
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
            8,
            !1
          ),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          const { A: t, B: e, C: n, D: r, E: i, F: o, G: s, H: a } = this;
          return [t, e, n, r, i, o, s, a];
        }
        set(t, e, n, r, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) a[r] = t.getUint32(e, !1);
          for (let r = 16; r < 64; r++) {
            const t = a[r - 15],
              e = a[r - 2],
              n = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
              o = (0, i.Ow)(e, 17) ^ (0, i.Ow)(e, 19) ^ (e >>> 10);
            a[r] = (o + a[r - 7] + n + a[r - 16]) | 0;
          }
          let { A: n, B: s, C: h, D: c, E: l, F: f, G: u, H: d } = this;
          for (let p = 0; p < 64; p++) {
            const t =
                (d +
                  ((0, i.Ow)(l, 6) ^ (0, i.Ow)(l, 11) ^ (0, i.Ow)(l, 25)) +
                  (0, r.r9)(l, f, u) +
                  o[p] +
                  a[p]) |
                0,
              e =
                (((0, i.Ow)(n, 2) ^ (0, i.Ow)(n, 13) ^ (0, i.Ow)(n, 22)) +
                  (0, r.TQ)(n, s, h)) |
                0;
            (d = u),
              (u = f),
              (f = l),
              (l = (c + t) | 0),
              (c = h),
              (h = s),
              (s = n),
              (n = (t + e) | 0);
          }
          (n = (n + this.A) | 0),
            (s = (s + this.B) | 0),
            (h = (h + this.C) | 0),
            (c = (c + this.D) | 0),
            (l = (l + this.E) | 0),
            (f = (f + this.F) | 0),
            (u = (u + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(n, s, h, c, l, f, u, d);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const c = (0, i.ld)(() => new h());
      var l = n(12504);
      class f extends i.Vw {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, l.sd)(t);
          const n = (0, i.ZJ)(e);
          if (
            ((this.iHash = t.create()), "function" !== typeof this.iHash.update)
          )
            throw new Error(
              "Expected instance of class which extends utils.Hash"
            );
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const r = this.blockLen,
            o = new Uint8Array(r);
          o.set(n.length > r ? t.create().update(n).digest() : n);
          for (let i = 0; i < o.length; i++) o[i] ^= 54;
          this.iHash.update(o), (this.oHash = t.create());
          for (let i = 0; i < o.length; i++) o[i] ^= 106;
          this.oHash.update(o), o.fill(0);
        }
        update(t) {
          return (0, l.CC)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, l.CC)(this),
            (0, l.DO)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          const t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: e,
            iHash: n,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = r),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = n._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      const u = (t, e, n) => new f(t, e).update(n).digest();
      u.create = (t, e) => new f(t, e);
      var d = n(25282),
        p = n(20819),
        g = n(9864);
      function y(t) {
        void 0 !== t.lowS && (0, g.e8)("lowS", t.lowS),
          void 0 !== t.prehash && (0, g.e8)("prehash", t.prehash);
      }
      class w extends Error {
        constructor() {
          super(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          );
        }
      }
      const b = {
          Err: w,
          _tlv: {
            encode: (t, e) => {
              const { Err: n } = b;
              if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
              if (1 & e.length) throw new n("tlv.encode: unpadded data");
              const r = e.length / 2,
                i = (0, g.zW)(r);
              if ((i.length / 2) & 128)
                throw new n("tlv.encode: long form length too big");
              const o = r > 127 ? (0, g.zW)((i.length / 2) | 128) : "";
              return (0, g.zW)(t) + o + i + e;
            },
            decode(t, e) {
              const { Err: n } = b;
              let r = 0;
              if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
              if (e.length < 2 || e[r++] !== t)
                throw new n("tlv.decode: wrong tlv");
              const i = e[r++];
              let o = 0;
              if (!!(128 & i)) {
                const t = 127 & i;
                if (!t)
                  throw new n(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (t > 4)
                  throw new n("tlv.decode(long): byte length is too big");
                const s = e.subarray(r, r + t);
                if (s.length !== t)
                  throw new n("tlv.decode: length bytes not complete");
                if (0 === s[0])
                  throw new n("tlv.decode(long): zero leftmost byte");
                for (const e of s) o = (o << 8) | e;
                if (((r += t), o < 128))
                  throw new n("tlv.decode(long): not minimal encoding");
              } else o = i;
              const s = e.subarray(r, r + o);
              if (s.length !== o) throw new n("tlv.decode: wrong value length");
              return { v: s, l: e.subarray(r + o) };
            },
          },
          _int: {
            encode(t) {
              const { Err: e } = b;
              if (t < v)
                throw new e("integer: negative integers are not allowed");
              let n = (0, g.zW)(t);
              if (
                (8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length)
              )
                throw new e("unexpected DER parsing assertion: unpadded hex");
              return n;
            },
            decode(t) {
              const { Err: e } = b;
              if (128 & t[0])
                throw new e("invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new e(
                  "invalid signature integer: unnecessary leading zero"
                );
              return (0, g.Ph)(t);
            },
          },
          toSig(t) {
            const { Err: e, _int: n, _tlv: r } = b,
              i = (0, g.qj)("signature", t),
              { v: o, l: s } = r.decode(48, i);
            if (s.length)
              throw new e("invalid signature: left bytes after parsing");
            const { v: a, l: h } = r.decode(2, o),
              { v: c, l: l } = r.decode(2, h);
            if (l.length)
              throw new e("invalid signature: left bytes after parsing");
            return { r: n.decode(a), s: n.decode(c) };
          },
          hexFromSig(t) {
            const { _tlv: e, _int: n } = b,
              r = e.encode(2, n.encode(t.r)) + e.encode(2, n.encode(t.s));
            return e.encode(48, r);
          },
        },
        v = BigInt(0),
        m = BigInt(1),
        A = (BigInt(2), BigInt(3));
      BigInt(4);
      function x(t) {
        const e = (function (t) {
            const e = (0, d.hp)(t);
            (0, g.Q5)(
              e,
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
            const { endo: n, Fp: r, a: i } = e;
            if (n) {
              if (!r.eql(i, r.ZERO))
                throw new Error(
                  "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                );
              if (
                "object" !== typeof n ||
                "bigint" !== typeof n.beta ||
                "function" !== typeof n.splitScalar
              )
                throw new Error(
                  "invalid endomorphism, expected beta: bigint and splitScalar: function"
                );
            }
            return Object.freeze({ ...e });
          })(t),
          { Fp: n } = e,
          r = (0, p.D0)(e.n, e.nBitLength),
          i =
            e.toBytes ||
            ((t, e, r) => {
              const i = e.toAffine();
              return (0, g.Id)(
                Uint8Array.from([4]),
                n.toBytes(i.x),
                n.toBytes(i.y)
              );
            }),
          o =
            e.fromBytes ||
            ((t) => {
              const e = t.subarray(1);
              return {
                x: n.fromBytes(e.subarray(0, n.BYTES)),
                y: n.fromBytes(e.subarray(n.BYTES, 2 * n.BYTES)),
              };
            });
        function s(t) {
          const { a: r, b: i } = e,
            o = n.sqr(t),
            s = n.mul(o, t);
          return n.add(n.add(s, n.mul(t, r)), i);
        }
        if (!n.eql(n.sqr(e.Gy), s(e.Gx)))
          throw new Error("bad generator point: equation left != right");
        function a(t) {
          const {
            allowedPrivateKeyLengths: n,
            nByteLength: r,
            wrapPrivateKey: i,
            n: o,
          } = e;
          if (n && "bigint" !== typeof t) {
            if (
              ((0, g.aY)(t) && (t = (0, g.My)(t)),
              "string" !== typeof t || !n.includes(t.length))
            )
              throw new Error("invalid private key");
            t = t.padStart(2 * r, "0");
          }
          let s;
          try {
            s =
              "bigint" === typeof t
                ? t
                : (0, g.Ph)((0, g.qj)("private key", t, r));
          } catch (a) {
            throw new Error(
              "invalid private key, expected hex or " +
                r +
                " bytes, got " +
                typeof t
            );
          }
          return (
            i && (s = (0, p.zi)(s, o)), (0, g.aK)("private key", s, m, o), s
          );
        }
        function h(t) {
          if (!(t instanceof f)) throw new Error("ProjectivePoint expected");
        }
        const c = (0, g.x)((t, e) => {
            const { px: r, py: i, pz: o } = t;
            if (n.eql(o, n.ONE)) return { x: r, y: i };
            const s = t.is0();
            null == e && (e = s ? n.ONE : n.inv(o));
            const a = n.mul(r, e),
              h = n.mul(i, e),
              c = n.mul(o, e);
            if (s) return { x: n.ZERO, y: n.ZERO };
            if (!n.eql(c, n.ONE)) throw new Error("invZ was invalid");
            return { x: a, y: h };
          }),
          l = (0, g.x)((t) => {
            if (t.is0()) {
              if (e.allowInfinityPoint && !n.is0(t.py)) return;
              throw new Error("bad point: ZERO");
            }
            const { x: r, y: i } = t.toAffine();
            if (!n.isValid(r) || !n.isValid(i))
              throw new Error("bad point: x or y not FE");
            const o = n.sqr(i),
              a = s(r);
            if (!n.eql(o, a))
              throw new Error("bad point: equation left != right");
            if (!t.isTorsionFree())
              throw new Error("bad point: not in prime-order subgroup");
            return !0;
          });
        class f {
          constructor(t, e, r) {
            if (null == t || !n.isValid(t)) throw new Error("x required");
            if (null == e || !n.isValid(e)) throw new Error("y required");
            if (null == r || !n.isValid(r)) throw new Error("z required");
            (this.px = t), (this.py = e), (this.pz = r), Object.freeze(this);
          }
          static fromAffine(t) {
            const { x: e, y: r } = t || {};
            if (!t || !n.isValid(e) || !n.isValid(r))
              throw new Error("invalid affine point");
            if (t instanceof f) throw new Error("projective point not allowed");
            const i = (t) => n.eql(t, n.ZERO);
            return i(e) && i(r) ? f.ZERO : new f(e, r, n.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(t) {
            const e = n.invertBatch(t.map((t) => t.pz));
            return t.map((t, n) => t.toAffine(e[n])).map(f.fromAffine);
          }
          static fromHex(t) {
            const e = f.fromAffine(o((0, g.qj)("pointHex", t)));
            return e.assertValidity(), e;
          }
          static fromPrivateKey(t) {
            return f.BASE.multiply(a(t));
          }
          static msm(t, e) {
            return (0, d.Xf)(f, r, t, e);
          }
          _setWindowSize(t) {
            y.setWindowSize(this, t);
          }
          assertValidity() {
            l(this);
          }
          hasEvenY() {
            const { y: t } = this.toAffine();
            if (n.isOdd) return !n.isOdd(t);
            throw new Error("Field doesn't support isOdd");
          }
          equals(t) {
            h(t);
            const { px: e, py: r, pz: i } = this,
              { px: o, py: s, pz: a } = t,
              c = n.eql(n.mul(e, a), n.mul(o, i)),
              l = n.eql(n.mul(r, a), n.mul(s, i));
            return c && l;
          }
          negate() {
            return new f(this.px, n.neg(this.py), this.pz);
          }
          double() {
            const { a: t, b: r } = e,
              i = n.mul(r, A),
              { px: o, py: s, pz: a } = this;
            let h = n.ZERO,
              c = n.ZERO,
              l = n.ZERO,
              u = n.mul(o, o),
              d = n.mul(s, s),
              p = n.mul(a, a),
              g = n.mul(o, s);
            return (
              (g = n.add(g, g)),
              (l = n.mul(o, a)),
              (l = n.add(l, l)),
              (h = n.mul(t, l)),
              (c = n.mul(i, p)),
              (c = n.add(h, c)),
              (h = n.sub(d, c)),
              (c = n.add(d, c)),
              (c = n.mul(h, c)),
              (h = n.mul(g, h)),
              (l = n.mul(i, l)),
              (p = n.mul(t, p)),
              (g = n.sub(u, p)),
              (g = n.mul(t, g)),
              (g = n.add(g, l)),
              (l = n.add(u, u)),
              (u = n.add(l, u)),
              (u = n.add(u, p)),
              (u = n.mul(u, g)),
              (c = n.add(c, u)),
              (p = n.mul(s, a)),
              (p = n.add(p, p)),
              (u = n.mul(p, g)),
              (h = n.sub(h, u)),
              (l = n.mul(p, d)),
              (l = n.add(l, l)),
              (l = n.add(l, l)),
              new f(h, c, l)
            );
          }
          add(t) {
            h(t);
            const { px: r, py: i, pz: o } = this,
              { px: s, py: a, pz: c } = t;
            let l = n.ZERO,
              u = n.ZERO,
              d = n.ZERO;
            const p = e.a,
              g = n.mul(e.b, A);
            let y = n.mul(r, s),
              w = n.mul(i, a),
              b = n.mul(o, c),
              v = n.add(r, i),
              m = n.add(s, a);
            (v = n.mul(v, m)),
              (m = n.add(y, w)),
              (v = n.sub(v, m)),
              (m = n.add(r, o));
            let x = n.add(s, c);
            return (
              (m = n.mul(m, x)),
              (x = n.add(y, b)),
              (m = n.sub(m, x)),
              (x = n.add(i, o)),
              (l = n.add(a, c)),
              (x = n.mul(x, l)),
              (l = n.add(w, b)),
              (x = n.sub(x, l)),
              (d = n.mul(p, m)),
              (l = n.mul(g, b)),
              (d = n.add(l, d)),
              (l = n.sub(w, d)),
              (d = n.add(w, d)),
              (u = n.mul(l, d)),
              (w = n.add(y, y)),
              (w = n.add(w, y)),
              (b = n.mul(p, b)),
              (m = n.mul(g, m)),
              (w = n.add(w, b)),
              (b = n.sub(y, b)),
              (b = n.mul(p, b)),
              (m = n.add(m, b)),
              (y = n.mul(w, m)),
              (u = n.add(u, y)),
              (y = n.mul(x, m)),
              (l = n.mul(v, l)),
              (l = n.sub(l, y)),
              (y = n.mul(v, w)),
              (d = n.mul(x, d)),
              (d = n.add(d, y)),
              new f(l, u, d)
            );
          }
          subtract(t) {
            return this.add(t.negate());
          }
          is0() {
            return this.equals(f.ZERO);
          }
          wNAF(t) {
            return y.wNAFCached(this, t, f.normalizeZ);
          }
          multiplyUnsafe(t) {
            const { endo: r, n: i } = e;
            (0, g.aK)("scalar", t, v, i);
            const o = f.ZERO;
            if (t === v) return o;
            if (this.is0() || t === m) return this;
            if (!r || y.hasPrecomputes(this))
              return y.wNAFCachedUnsafe(this, t, f.normalizeZ);
            let { k1neg: s, k1: a, k2neg: h, k2: c } = r.splitScalar(t),
              l = o,
              u = o,
              d = this;
            for (; a > v || c > v; )
              a & m && (l = l.add(d)),
                c & m && (u = u.add(d)),
                (d = d.double()),
                (a >>= m),
                (c >>= m);
            return (
              s && (l = l.negate()),
              h && (u = u.negate()),
              (u = new f(n.mul(u.px, r.beta), u.py, u.pz)),
              l.add(u)
            );
          }
          multiply(t) {
            const { endo: r, n: i } = e;
            let o, s;
            if (((0, g.aK)("scalar", t, m, i), r)) {
              const { k1neg: e, k1: i, k2neg: a, k2: h } = r.splitScalar(t);
              let { p: c, f: l } = this.wNAF(i),
                { p: u, f: d } = this.wNAF(h);
              (c = y.constTimeNegate(e, c)),
                (u = y.constTimeNegate(a, u)),
                (u = new f(n.mul(u.px, r.beta), u.py, u.pz)),
                (o = c.add(u)),
                (s = l.add(d));
            } else {
              const { p: e, f: n } = this.wNAF(t);
              (o = e), (s = n);
            }
            return f.normalizeZ([o, s])[0];
          }
          multiplyAndAddUnsafe(t, e, n) {
            const r = f.BASE,
              i = (t, e) =>
                e !== v && e !== m && t.equals(r)
                  ? t.multiply(e)
                  : t.multiplyUnsafe(e),
              o = i(this, e).add(i(t, n));
            return o.is0() ? void 0 : o;
          }
          toAffine(t) {
            return c(this, t);
          }
          isTorsionFree() {
            const { h: t, isTorsionFree: n } = e;
            if (t === m) return !0;
            if (n) return n(f, this);
            throw new Error(
              "isTorsionFree() has not been declared for the elliptic curve"
            );
          }
          clearCofactor() {
            const { h: t, clearCofactor: n } = e;
            return t === m ? this : n ? n(f, this) : this.multiplyUnsafe(e.h);
          }
          toRawBytes() {
            let t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return (
              (0, g.e8)("isCompressed", t), this.assertValidity(), i(f, this, t)
            );
          }
          toHex() {
            let t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return (0, g.e8)("isCompressed", t), (0, g.My)(this.toRawBytes(t));
          }
        }
        (f.BASE = new f(e.Gx, e.Gy, n.ONE)),
          (f.ZERO = new f(n.ZERO, n.ONE, n.ZERO));
        const u = e.nBitLength,
          y = (0, d.hT)(f, e.endo ? Math.ceil(u / 2) : u);
        return {
          CURVE: e,
          ProjectivePoint: f,
          normPrivateKeyToScalar: a,
          weierstrassEquation: s,
          isWithinCurveOrder: function (t) {
            return (0, g.r4)(t, m, e.n);
          },
        };
      }
      function E(t) {
        const e = (function (t) {
            const e = (0, d.hp)(t);
            return (
              (0, g.Q5)(
                e,
                { hash: "hash", hmac: "function", randomBytes: "function" },
                {
                  bits2int: "function",
                  bits2int_modN: "function",
                  lowS: "boolean",
                }
              ),
              Object.freeze({ lowS: !0, ...e })
            );
          })(t),
          { Fp: n, n: r } = e,
          i = n.BYTES + 1,
          o = 2 * n.BYTES + 1;
        function s(t) {
          return (0, p.zi)(t, r);
        }
        function a(t) {
          return (0, p.B8)(t, r);
        }
        const {
            ProjectivePoint: h,
            normPrivateKeyToScalar: c,
            weierstrassEquation: l,
            isWithinCurveOrder: f,
          } = x({
            ...e,
            toBytes(t, e, r) {
              const i = e.toAffine(),
                o = n.toBytes(i.x),
                s = g.Id;
              return (
                (0, g.e8)("isCompressed", r),
                r
                  ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                  : s(Uint8Array.from([4]), o, n.toBytes(i.y))
              );
            },
            fromBytes(t) {
              const e = t.length,
                r = t[0],
                s = t.subarray(1);
              if (e !== i || (2 !== r && 3 !== r)) {
                if (e === o && 4 === r) {
                  return {
                    x: n.fromBytes(s.subarray(0, n.BYTES)),
                    y: n.fromBytes(s.subarray(n.BYTES, 2 * n.BYTES)),
                  };
                }
                throw new Error(
                  "invalid Point, expected length of " +
                    i +
                    ", or uncompressed " +
                    o +
                    ", got " +
                    e
                );
              }
              {
                const t = (0, g.Ph)(s);
                if (!(0, g.r4)(t, m, n.ORDER))
                  throw new Error("Point is not on curve");
                const e = l(t);
                let i;
                try {
                  i = n.sqrt(e);
                } catch (a) {
                  const t = a instanceof Error ? ": " + a.message : "";
                  throw new Error("Point is not on curve" + t);
                }
                return (
                  (1 === (1 & r)) !== ((i & m) === m) && (i = n.neg(i)),
                  { x: t, y: i }
                );
              }
            },
          }),
          u = (t) => (0, g.My)((0, g.lq)(t, e.nByteLength));
        function w(t) {
          return t > r >> m;
        }
        const A = (t, e, n) => (0, g.Ph)(t.slice(e, n));
        class E {
          constructor(t, e, n) {
            (0, g.aK)("r", t, m, r),
              (0, g.aK)("s", e, m, r),
              (this.r = t),
              (this.s = e),
              null != n && (this.recovery = n),
              Object.freeze(this);
          }
          static fromCompact(t) {
            const n = e.nByteLength;
            return (
              (t = (0, g.qj)("compactSignature", t, 2 * n)),
              new E(A(t, 0, n), A(t, n, 2 * n))
            );
          }
          static fromDER(t) {
            const { r: e, s: n } = b.toSig((0, g.qj)("DER", t));
            return new E(e, n);
          }
          assertValidity() {}
          addRecoveryBit(t) {
            return new E(this.r, this.s, t);
          }
          recoverPublicKey(t) {
            const { r: r, s: i, recovery: o } = this,
              c = H((0, g.qj)("msgHash", t));
            if (null == o || ![0, 1, 2, 3].includes(o))
              throw new Error("recovery id invalid");
            const l = 2 === o || 3 === o ? r + e.n : r;
            if (l >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const f = 0 === (1 & o) ? "02" : "03",
              d = h.fromHex(f + u(l)),
              p = a(l),
              y = s(-c * p),
              w = s(i * p),
              b = h.BASE.multiplyAndAddUnsafe(d, y, w);
            if (!b) throw new Error("point at infinify");
            return b.assertValidity(), b;
          }
          hasHighS() {
            return w(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new E(this.r, s(-this.s), this.recovery)
              : this;
          }
          toDERRawBytes() {
            return (0, g.aT)(this.toDERHex());
          }
          toDERHex() {
            return b.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return (0, g.aT)(this.toCompactHex());
          }
          toCompactHex() {
            return u(this.r) + u(this.s);
          }
        }
        const B = {
          isValidPrivateKey(t) {
            try {
              return c(t), !0;
            } catch (e) {
              return !1;
            }
          },
          normPrivateKeyToScalar: c,
          randomPrivateKey: () => {
            const t = (0, p.Tp)(e.n);
            return (0, p.qy)(e.randomBytes(t), e.n);
          },
          precompute() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 8,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : h.BASE;
            return e._setWindowSize(t), e.multiply(BigInt(3)), e;
          },
        };
        function _(t) {
          const e = (0, g.aY)(t),
            n = "string" === typeof t,
            r = (e || n) && t.length;
          return e
            ? r === i || r === o
            : n
            ? r === 2 * i || r === 2 * o
            : t instanceof h;
        }
        const $ =
            e.bits2int ||
            function (t) {
              if (t.length > 8192) throw new Error("input is too large");
              const n = (0, g.Ph)(t),
                r = 8 * t.length - e.nBitLength;
              return r > 0 ? n >> BigInt(r) : n;
            },
          H =
            e.bits2int_modN ||
            function (t) {
              return s($(t));
            },
          S = (0, g.OG)(e.nBitLength);
        function O(t) {
          return (
            (0, g.aK)("num < 2^" + e.nBitLength, t, v, S),
            (0, g.lq)(t, e.nByteLength)
          );
        }
        function C(t, r) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I;
          if (["recovered", "canonical"].some((t) => t in i))
            throw new Error("sign() legacy options not supported");
          const { hash: o, randomBytes: l } = e;
          let { lowS: u, prehash: d, extraEntropy: p } = i;
          null == u && (u = !0),
            (t = (0, g.qj)("msgHash", t)),
            y(i),
            d && (t = (0, g.qj)("prehashed msgHash", o(t)));
          const b = H(t),
            A = c(r),
            x = [O(A), O(b)];
          if (null != p && !1 !== p) {
            const t = !0 === p ? l(n.BYTES) : p;
            x.push((0, g.qj)("extraEntropy", t));
          }
          const B = (0, g.Id)(...x),
            _ = b;
          return {
            seed: B,
            k2sig: function (t) {
              const e = $(t);
              if (!f(e)) return;
              const n = a(e),
                r = h.BASE.multiply(e).toAffine(),
                i = s(r.x);
              if (i === v) return;
              const o = s(n * s(_ + i * A));
              if (o === v) return;
              let c = (r.x === i ? 0 : 2) | Number(r.y & m),
                l = o;
              return (
                u &&
                  w(o) &&
                  ((l = (function (t) {
                    return w(t) ? s(-t) : t;
                  })(o)),
                  (c ^= 1)),
                new E(i, l, c)
              );
            },
          };
        }
        const I = { lowS: e.lowS, prehash: !1 },
          N = { lowS: e.lowS, prehash: !1 };
        return (
          h.BASE._setWindowSize(8),
          {
            CURVE: e,
            getPublicKey: function (t) {
              let e =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return h.fromPrivateKey(t).toRawBytes(e);
            },
            getSharedSecret: function (t, e) {
              let n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              if (_(t)) throw new Error("first arg must be private key");
              if (!_(e)) throw new Error("second arg must be public key");
              return h.fromHex(e).multiply(c(t)).toRawBytes(n);
            },
            sign: function (t, n) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : I;
              const { seed: i, k2sig: o } = C(t, n, r),
                s = e;
              return (0, g.fg)(s.hash.outputLen, s.nByteLength, s.hmac)(i, o);
            },
            verify: function (t, n, r) {
              var i;
              let o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : N;
              const c = t;
              (n = (0, g.qj)("msgHash", n)), (r = (0, g.qj)("publicKey", r));
              const { lowS: l, prehash: f, format: u } = o;
              if ((y(o), "strict" in o))
                throw new Error("options.strict was renamed to lowS");
              if (void 0 !== u && "compact" !== u && "der" !== u)
                throw new Error("format must be compact or der");
              const d = "string" === typeof c || (0, g.aY)(c),
                p =
                  !d &&
                  !u &&
                  "object" === typeof c &&
                  null !== c &&
                  "bigint" === typeof c.r &&
                  "bigint" === typeof c.s;
              if (!d && !p)
                throw new Error(
                  "invalid signature, expected Uint8Array, hex string or Signature instance"
                );
              let w, v;
              try {
                if ((p && (w = new E(c.r, c.s)), d)) {
                  try {
                    "compact" !== u && (w = E.fromDER(c));
                  } catch (O) {
                    if (!(O instanceof b.Err)) throw O;
                  }
                  w || "der" === u || (w = E.fromCompact(c));
                }
                v = h.fromHex(r);
              } catch (C) {
                return !1;
              }
              if (!w) return !1;
              if (l && w.hasHighS()) return !1;
              f && (n = e.hash(n));
              const { r: m, s: A } = w,
                x = H(n),
                B = a(A),
                _ = s(x * B),
                $ = s(m * B),
                S =
                  null === (i = h.BASE.multiplyAndAddUnsafe(v, _, $)) ||
                  void 0 === i
                    ? void 0
                    : i.toAffine();
              return !!S && s(S.x) === m;
            },
            ProjectivePoint: h,
            Signature: E,
            utils: B,
          }
        );
      }
      function B(t) {
        return {
          hash: t,
          hmac: function (e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return u(t, e, (0, i.Id)(...r));
          },
          randomBytes: i.po,
        };
      }
      const _ = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        $ = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        H = BigInt(1),
        S = BigInt(2),
        O = (t, e) => (t + e / S) / e;
      function C(t) {
        const e = _,
          n = BigInt(3),
          r = BigInt(6),
          i = BigInt(11),
          o = BigInt(22),
          s = BigInt(23),
          a = BigInt(44),
          h = BigInt(88),
          c = (t * t * t) % e,
          l = (c * c * t) % e,
          f = ((0, p.zH)(l, n, e) * l) % e,
          u = ((0, p.zH)(f, n, e) * l) % e,
          d = ((0, p.zH)(u, S, e) * c) % e,
          g = ((0, p.zH)(d, i, e) * d) % e,
          y = ((0, p.zH)(g, o, e) * g) % e,
          w = ((0, p.zH)(y, a, e) * y) % e,
          b = ((0, p.zH)(w, h, e) * w) % e,
          v = ((0, p.zH)(b, a, e) * y) % e,
          m = ((0, p.zH)(v, n, e) * l) % e,
          A = ((0, p.zH)(m, s, e) * g) % e,
          x = ((0, p.zH)(A, r, e) * c) % e,
          E = (0, p.zH)(x, S, e);
        if (!I.eql(I.sqr(E), t)) throw new Error("Cannot find square root");
        return E;
      }
      const I = (0, p.D0)(_, void 0, void 0, { sqrt: C }),
        N = (function (t, e) {
          const n = (e) => E({ ...t, ...B(e) });
          return { ...n(e), create: n };
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: I,
            n: $,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                const e = $,
                  n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -H * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  o = n,
                  s = BigInt("0x100000000000000000000000000000000"),
                  a = O(o * t, e),
                  h = O(-r * t, e);
                let c = (0, p.zi)(t - a * n - h * i, e),
                  l = (0, p.zi)(-a * r - h * o, e);
                const f = c > s,
                  u = l > s;
                if ((f && (c = e - c), u && (l = e - l), c > s || l > s))
                  throw new Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: f, k1: c, k2neg: u, k2: l };
              },
            },
          },
          c
        );
      BigInt(0);
      N.ProjectivePoint;
    },
    90146: (t, e, n) => {
      "use strict";
      n.d(e, {
        B4: () => p,
        CQ: () => A,
        CW: () => m,
        Ei: () => u,
        F8: () => x,
        P5: () => d,
        TH: () => E,
        Vl: () => b,
        Vr: () => v,
        WM: () => g,
        WQ: () => w,
        im: () => y,
        jm: () => h,
        lD: () => s,
        qh: () => f,
        rE: () => c,
        ry: () => l,
        xn: () => a,
      });
      const r = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function o(t) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(t & r), l: Number((t >> i) & r) }
          : { h: 0 | Number((t >> i) & r), l: 0 | Number(t & r) };
      }
      function s(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = t.length;
        let r = new Uint32Array(n),
          i = new Uint32Array(n);
        for (let s = 0; s < n; s++) {
          const { h: n, l: a } = o(t[s], e);
          [r[s], i[s]] = [n, a];
        }
        return [r, i];
      }
      const a = (t, e, n) => t >>> n,
        h = (t, e, n) => (t << (32 - n)) | (e >>> n),
        c = (t, e, n) => (t >>> n) | (e << (32 - n)),
        l = (t, e, n) => (t << (32 - n)) | (e >>> n),
        f = (t, e, n) => (t << (64 - n)) | (e >>> (n - 32)),
        u = (t, e, n) => (t >>> (n - 32)) | (e << (64 - n)),
        d = (t, e, n) => (t << n) | (e >>> (32 - n)),
        p = (t, e, n) => (e << n) | (t >>> (32 - n)),
        g = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        y = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n));
      function w(t, e, n, r) {
        const i = (e >>> 0) + (r >>> 0);
        return { h: (t + n + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      const b = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
        v = (t, e, n, r) => (e + n + r + ((t / 2 ** 32) | 0)) | 0,
        m = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
        A = (t, e, n, r, i) => (e + n + r + i + ((t / 2 ** 32) | 0)) | 0,
        x = (t, e, n, r, i) =>
          (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        E = (t, e, n, r, i, o) => (e + n + r + i + o + ((t / 2 ** 32) | 0)) | 0;
    },
    92931: (t) => {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var n = function () {};
              (n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.prototype.constructor = t);
            }
          });
    },
    98379: (t, e, n) => {
      "use strict";
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw new Error("positive integer expected, got " + t);
      }
      function i(t) {
        if (
          !(
            (e = t) instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw new Error("Uint8Array expected");
        for (
          var e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
          i < n;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(t.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + t.length
          );
      }
      function o(t) {
        let e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (t.destroyed) throw new Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function s(t, e) {
        i(t);
        const n = e.outputLen;
        if (t.length < n)
          throw new Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      function a(t) {
        return new Uint32Array(
          t.buffer,
          t.byteOffset,
          Math.floor(t.byteLength / 4)
        );
      }
      function h() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        for (let r = 0; r < e.length; r++) e[r].fill(0);
      }
      function c(t) {
        return new DataView(t.buffer, t.byteOffset, t.byteLength);
      }
      function l(t, e) {
        return (t << (32 - e)) | (t >>> e);
      }
      n.d(e, {
        CC: () => o,
        DH: () => a,
        DO: () => i,
        Fe: () => r,
        Ht: () => s,
        My: () => y,
        O8: () => c,
        Ow: () => l,
        Vw: () => v,
        ZJ: () => b,
        fd: () => d,
        qj: () => m,
        uH: () => h,
      });
      const f = (() =>
        68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])();
      function u(t) {
        return (
          ((t << 24) & 4278190080) |
          ((t << 8) & 16711680) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255)
        );
      }
      const d = f
          ? (t) => t
          : function (t) {
              for (let e = 0; e < t.length; e++) t[e] = u(t[e]);
              return t;
            },
        p = (() =>
          "function" === typeof Uint8Array.from([]).toHex &&
          "function" === typeof Uint8Array.fromHex)(),
        g = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, "0")
        );
      function y(t) {
        if ((i(t), p)) return t.toHex();
        let e = "";
        for (let n = 0; n < t.length; n++) e += g[t[n]];
        return e;
      }
      function w(t) {
        if ("string" !== typeof t) throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(t));
      }
      function b(t) {
        return "string" === typeof t && (t = w(t)), i(t), t;
      }
      class v {}
      function m(t) {
        const e = (e) => t().update(b(e)).digest(),
          n = t();
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = () => t()),
          e
        );
      }
    },
  },
]);
