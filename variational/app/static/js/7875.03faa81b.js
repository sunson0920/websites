(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [7875],
  {
    235: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => A, s: () => p });
      var s,
        n,
        r,
        o,
        a = i(39790),
        u = i(55149),
        l = i(26562),
        h = i(38458),
        c = i(24558),
        d = i(50042),
        v = i(83091),
        f = i(28211),
        p =
          ((s = new WeakMap()),
          (n = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakSet()),
          class extends v.k {
            constructor(t) {
              super(),
                (0, a.A)(this, o),
                (0, u.A)(this, s, void 0),
                (0, u.A)(this, n, void 0),
                (0, u.A)(this, r, void 0),
                (this.mutationId = t.mutationId),
                (0, c.A)(n, this, t.mutationCache),
                (0, c.A)(s, this, []),
                (this.state = t.state || {
                  context: void 0,
                  data: void 0,
                  error: null,
                  failureCount: 0,
                  failureReason: null,
                  isPaused: !1,
                  status: "idle",
                  variables: void 0,
                  submittedAt: 0,
                }),
                this.setOptions(t.options),
                this.scheduleGc();
            }
            setOptions(t) {
              (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
              return this.options.meta;
            }
            addObserver(t) {
              (0, h.A)(s, this).includes(t) ||
                ((0, h.A)(s, this).push(t),
                this.clearGcTimeout(),
                (0, h.A)(n, this).notify({
                  type: "observerAdded",
                  mutation: this,
                  observer: t,
                }));
            }
            removeObserver(t) {
              (0, c.A)(
                s,
                this,
                (0, h.A)(s, this).filter((e) => e !== t)
              ),
                this.scheduleGc(),
                (0, h.A)(n, this).notify({
                  type: "observerRemoved",
                  mutation: this,
                  observer: t,
                });
            }
            optionalRemove() {
              (0, h.A)(s, this).length ||
                ("pending" === this.state.status
                  ? this.scheduleGc()
                  : (0, h.A)(n, this).remove(this));
            }
            continue() {
              var t, e;
              return null !==
                (t =
                  null === (e = (0, h.A)(r, this)) || void 0 === e
                    ? void 0
                    : e.continue()) && void 0 !== t
                ? t
                : this.execute(this.state.variables);
            }
            async execute(t) {
              var e;
              const i = () => {
                (0, l.A)(o, this, y).call(this, { type: "continue" });
              };
              (0, c.A)(
                r,
                this,
                (0, f.II)({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(t)
                      : Promise.reject(new Error("No mutationFn found")),
                  onFail: (t, e) => {
                    (0, l.A)(o, this, y).call(this, {
                      type: "failed",
                      failureCount: t,
                      error: e,
                    });
                  },
                  onPause: () => {
                    (0, l.A)(o, this, y).call(this, { type: "pause" });
                  },
                  onContinue: i,
                  retry:
                    null !== (e = this.options.retry) && void 0 !== e ? e : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                  canRun: () => (0, h.A)(n, this).canRun(this),
                })
              );
              const s = "pending" === this.state.status,
                a = !(0, h.A)(r, this).canStart();
              try {
                var u, d, v, p, A, g, m, b;
                if (s) i();
                else {
                  var w, O, M, S;
                  (0, l.A)(o, this, y).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: a,
                  }),
                    await (null ===
                      (w = (O = (0, h.A)(n, this).config).onMutate) ||
                    void 0 === w
                      ? void 0
                      : w.call(O, t, this));
                  const e = await (null === (M = (S = this.options).onMutate) ||
                  void 0 === M
                    ? void 0
                    : M.call(S, t));
                  e !== this.state.context &&
                    (0, l.A)(o, this, y).call(this, {
                      type: "pending",
                      context: e,
                      variables: t,
                      isPaused: a,
                    });
                }
                const e = await (0, h.A)(r, this).start();
                return (
                  await (null ===
                    (u = (d = (0, h.A)(n, this).config).onSuccess) ||
                  void 0 === u
                    ? void 0
                    : u.call(d, e, t, this.state.context, this)),
                  await (null === (v = (p = this.options).onSuccess) ||
                  void 0 === v
                    ? void 0
                    : v.call(p, e, t, this.state.context)),
                  await (null ===
                    (A = (g = (0, h.A)(n, this).config).onSettled) ||
                  void 0 === A
                    ? void 0
                    : A.call(
                        g,
                        e,
                        null,
                        this.state.variables,
                        this.state.context,
                        this
                      )),
                  await (null === (m = (b = this.options).onSettled) ||
                  void 0 === m
                    ? void 0
                    : m.call(b, e, null, t, this.state.context)),
                  (0, l.A)(o, this, y).call(this, { type: "success", data: e }),
                  e
                );
              } catch (D) {
                try {
                  var k, P, E, C, Q, q, F, j;
                  throw (
                    (await (null ===
                      (k = (P = (0, h.A)(n, this).config).onError) ||
                    void 0 === k
                      ? void 0
                      : k.call(P, D, t, this.state.context, this)),
                    await (null === (E = (C = this.options).onError) ||
                    void 0 === E
                      ? void 0
                      : E.call(C, D, t, this.state.context)),
                    await (null ===
                      (Q = (q = (0, h.A)(n, this).config).onSettled) ||
                    void 0 === Q
                      ? void 0
                      : Q.call(
                          q,
                          void 0,
                          D,
                          this.state.variables,
                          this.state.context,
                          this
                        )),
                    await (null === (F = (j = this.options).onSettled) ||
                    void 0 === F
                      ? void 0
                      : F.call(j, void 0, D, t, this.state.context)),
                    D)
                  );
                } finally {
                  (0, l.A)(o, this, y).call(this, { type: "error", error: D });
                }
              } finally {
                (0, h.A)(n, this).runNext(this);
              }
            }
          });
      function y(t) {
        (this.state = ((e) => {
          switch (t.type) {
            case "failed":
              return {
                ...e,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...e, isPaused: !0 };
            case "continue":
              return { ...e, isPaused: !1 };
            case "pending":
              return {
                ...e,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...e,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...e,
                data: void 0,
                error: t.error,
                failureCount: e.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error",
              };
          }
        })(this.state)),
          d.jG.batch(() => {
            (0, h.A)(s, this).forEach((e) => {
              e.onMutationUpdate(t);
            }),
              (0, h.A)(n, this).notify({
                mutation: this,
                type: "updated",
                action: t,
              });
          });
      }
      function A() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    8626: (t, e) => {
      "use strict";
      function i(t, e, i) {
        return e <= t && t <= i;
      }
      function s(t) {
        if (void 0 === t) return {};
        if (t === Object(t)) return t;
        throw TypeError("Could not convert argument to dictionary");
      }
      function n(t) {
        this.tokens = [].slice.call(t);
      }
      n.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function (t) {
          if (Array.isArray(t))
            for (var e = t; e.length; ) this.tokens.unshift(e.pop());
          else this.tokens.unshift(t);
        },
        push: function (t) {
          if (Array.isArray(t))
            for (var e = t; e.length; ) this.tokens.push(e.shift());
          else this.tokens.push(t);
        },
      };
      var r = -1;
      function o(t, e) {
        if (t) throw TypeError("Decoder error");
        return e || 65533;
      }
      var a = "utf-8";
      function u(t, e) {
        if (!(this instanceof u)) return new u(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : a) !== a)
          throw new Error("Encoding not supported. Only utf-8 is supported");
        (e = s(e)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = Boolean(e.fatal)),
          (this._ignoreBOM = Boolean(e.ignoreBOM)),
          Object.defineProperty(this, "encoding", { value: "utf-8" }),
          Object.defineProperty(this, "fatal", { value: this._fatal }),
          Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
      }
      function l(t, e) {
        if (!(this instanceof l)) return new l(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : a) !== a)
          throw new Error("Encoding not supported. Only utf-8 is supported");
        (e = s(e)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: Boolean(e.fatal) }),
          Object.defineProperty(this, "encoding", { value: "utf-8" });
      }
      function h(t) {
        var e = t.fatal,
          s = 0,
          n = 0,
          a = 0,
          u = 128,
          l = 191;
        this.handler = function (t, h) {
          if (-1 === h && 0 !== a) return (a = 0), o(e);
          if (-1 === h) return r;
          if (0 === a) {
            if (i(h, 0, 127)) return h;
            if (i(h, 194, 223)) (a = 1), (s = h - 192);
            else if (i(h, 224, 239))
              224 === h && (u = 160),
                237 === h && (l = 159),
                (a = 2),
                (s = h - 224);
            else {
              if (!i(h, 240, 244)) return o(e);
              240 === h && (u = 144),
                244 === h && (l = 143),
                (a = 3),
                (s = h - 240);
            }
            return (s <<= 6 * a), null;
          }
          if (!i(h, u, l))
            return (s = a = n = 0), (u = 128), (l = 191), t.prepend(h), o(e);
          if (
            ((u = 128),
            (l = 191),
            (s += (h - 128) << (6 * (a - (n += 1)))),
            n !== a)
          )
            return null;
          var c = s;
          return (s = a = n = 0), c;
        };
      }
      function c(t) {
        t.fatal;
        this.handler = function (t, e) {
          if (-1 === e) return r;
          if (i(e, 0, 127)) return e;
          var s, n;
          i(e, 128, 2047)
            ? ((s = 1), (n = 192))
            : i(e, 2048, 65535)
            ? ((s = 2), (n = 224))
            : i(e, 65536, 1114111) && ((s = 3), (n = 240));
          for (var o = [(e >> (6 * s)) + n]; s > 0; ) {
            var a = e >> (6 * (s - 1));
            o.push(128 | (63 & a)), (s -= 1);
          }
          return o;
        };
      }
      (u.prototype = {
        decode: function (t, e) {
          var i;
          (i =
            "object" === typeof t && t instanceof ArrayBuffer
              ? new Uint8Array(t)
              : "object" === typeof t &&
                "buffer" in t &&
                t.buffer instanceof ArrayBuffer
              ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
              : new Uint8Array(0)),
            (e = s(e)),
            this._streaming ||
              ((this._decoder = new h({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = Boolean(e.stream));
          for (
            var o, a = new n(i), u = [];
            !a.endOfStream() && (o = this._decoder.handler(a, a.read())) !== r;

          )
            null !== o && (Array.isArray(o) ? u.push.apply(u, o) : u.push(o));
          if (!this._streaming) {
            do {
              if ((o = this._decoder.handler(a, a.read())) === r) break;
              null !== o && (Array.isArray(o) ? u.push.apply(u, o) : u.push(o));
            } while (!a.endOfStream());
            this._decoder = null;
          }
          return (
            u.length &&
              (-1 === ["utf-8"].indexOf(this.encoding) ||
                this._ignoreBOM ||
                this._BOMseen ||
                (65279 === u[0]
                  ? ((this._BOMseen = !0), u.shift())
                  : (this._BOMseen = !0))),
            (function (t) {
              for (var e = "", i = 0; i < t.length; ++i) {
                var s = t[i];
                s <= 65535
                  ? (e += String.fromCharCode(s))
                  : ((s -= 65536),
                    (e += String.fromCharCode(
                      55296 + (s >> 10),
                      56320 + (1023 & s)
                    )));
              }
              return e;
            })(u)
          );
        },
      }),
        (l.prototype = {
          encode: function (t, e) {
            (t = t ? String(t) : ""),
              (e = s(e)),
              this._streaming || (this._encoder = new c(this._options)),
              (this._streaming = Boolean(e.stream));
            for (
              var i,
                o = [],
                a = new n(
                  (function (t) {
                    for (
                      var e = String(t), i = e.length, s = 0, n = [];
                      s < i;

                    ) {
                      var r = e.charCodeAt(s);
                      if (r < 55296 || r > 57343) n.push(r);
                      else if (56320 <= r && r <= 57343) n.push(65533);
                      else if (55296 <= r && r <= 56319)
                        if (s === i - 1) n.push(65533);
                        else {
                          var o = t.charCodeAt(s + 1);
                          if (56320 <= o && o <= 57343) {
                            var a = 1023 & r,
                              u = 1023 & o;
                            n.push(65536 + (a << 10) + u), (s += 1);
                          } else n.push(65533);
                        }
                      s += 1;
                    }
                    return n;
                  })(t)
                );
              !a.endOfStream() &&
              (i = this._encoder.handler(a, a.read())) !== r;

            )
              Array.isArray(i) ? o.push.apply(o, i) : o.push(i);
            if (!this._streaming) {
              for (; (i = this._encoder.handler(a, a.read())) !== r; )
                Array.isArray(i) ? o.push.apply(o, i) : o.push(i);
              this._encoder = null;
            }
            return new Uint8Array(o);
          },
        }),
        (e.TextEncoder = l),
        (e.TextDecoder = u);
    },
    12285: (t) => {
      t.exports = function () {
        var t = document.getSelection();
        if (!t.rangeCount) return function () {};
        for (
          var e = document.activeElement, i = [], s = 0;
          s < t.rangeCount;
          s++
        )
          i.push(t.getRangeAt(s));
        switch (e.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            e.blur();
            break;
          default:
            e = null;
        }
        return (
          t.removeAllRanges(),
          function () {
            "Caret" === t.type && t.removeAllRanges(),
              t.rangeCount ||
                i.forEach(function (e) {
                  t.addRange(e);
                }),
              e && e.focus();
          }
        );
      };
    },
    15243: (t, e, i) => {
      "use strict";
      function s(t, e, i) {
        var s = (i || {}).atBegin;
        return (function (t, e, i) {
          var s,
            n = i || {},
            r = n.noTrailing,
            o = void 0 !== r && r,
            a = n.noLeading,
            u = void 0 !== a && a,
            l = n.debounceMode,
            h = void 0 === l ? void 0 : l,
            c = !1,
            d = 0;
          function v() {
            s && clearTimeout(s);
          }
          function f() {
            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
              n[r] = arguments[r];
            var a = this,
              l = Date.now() - d;
            function f() {
              (d = Date.now()), e.apply(a, n);
            }
            function p() {
              s = void 0;
            }
            c ||
              (u || !h || s || f(),
              v(),
              void 0 === h && l > t
                ? u
                  ? ((d = Date.now()), o || (s = setTimeout(h ? p : f, t)))
                  : f()
                : !0 !== o &&
                  (s = setTimeout(h ? p : f, void 0 === h ? t - l : t)));
          }
          return (
            (f.cancel = function (t) {
              var e = (t || {}).upcomingOnly,
                i = void 0 !== e && e;
              v(), (c = !i);
            }),
            f
          );
        })(t, e, { debounceMode: !1 !== (void 0 !== s && s) });
      }
      i.d(e, { s: () => s });
    },
    25996: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => c });
      var s,
        n,
        r,
        o = i(55149),
        a = i(38458),
        u = i(24558),
        l = i(46341),
        h = i(51983),
        c = new ((s = new WeakMap()),
        (n = new WeakMap()),
        (r = new WeakMap()),
        class extends l.Q {
          constructor() {
            super(),
              (0, o.A)(this, s, !0),
              (0, o.A)(this, n, void 0),
              (0, o.A)(this, r, void 0),
              (0, u.A)(r, this, (t) => {
                if (!h.S$ && window.addEventListener) {
                  const e = () => t(!0),
                    i = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", i, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", i);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            (0, a.A)(n, this) || this.setEventListener((0, a.A)(r, this));
          }
          onUnsubscribe() {
            var t;
            this.hasListeners() ||
              (null === (t = (0, a.A)(n, this)) || void 0 === t || t.call(this),
              (0, u.A)(n, this, void 0));
          }
          setEventListener(t) {
            var e;
            (0, u.A)(r, this, t),
              null === (e = (0, a.A)(n, this)) || void 0 === e || e.call(this),
              (0, u.A)(n, this, t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            (0, a.A)(s, this) !== t &&
              ((0, u.A)(s, this, t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return (0, a.A)(s, this);
          }
        })();
    },
    28211: (t, e, i) => {
      "use strict";
      i.d(e, { II: () => c, v_: () => u, wm: () => h });
      var s = i(89023),
        n = i(25996),
        r = i(87435),
        o = i(51983);
      function a(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function u(t) {
        return (
          "online" !== (null !== t && void 0 !== t ? t : "online") ||
          n.t.isOnline()
        );
      }
      var l = class extends Error {
        constructor(t) {
          super("CancelledError"),
            (this.revert = null === t || void 0 === t ? void 0 : t.revert),
            (this.silent = null === t || void 0 === t ? void 0 : t.silent);
        }
      };
      function h(t) {
        return t instanceof l;
      }
      function c(t) {
        let e,
          i = !1,
          h = 0,
          c = !1;
        const d = (0, r.T)(),
          v = () =>
            s.m.isFocused() &&
            ("always" === t.networkMode || n.t.isOnline()) &&
            t.canRun(),
          f = () => u(t.networkMode) && t.canRun(),
          p = (i) => {
            var s, n;
            c ||
              ((c = !0),
              null === (s = t.onSuccess) || void 0 === s || s.call(t, i),
              null === (n = e) || void 0 === n || n(),
              d.resolve(i));
          },
          y = (i) => {
            var s, n;
            c ||
              ((c = !0),
              null === (s = t.onError) || void 0 === s || s.call(t, i),
              null === (n = e) || void 0 === n || n(),
              d.reject(i));
          },
          A = () =>
            new Promise((i) => {
              var s;
              (e = (t) => {
                (c || v()) && i(t);
              }),
                null === (s = t.onPause) || void 0 === s || s.call(t);
            }).then(() => {
              var i;
              ((e = void 0), c) ||
                null === (i = t.onContinue) ||
                void 0 === i ||
                i.call(t);
            }),
          g = () => {
            if (c) return;
            let e;
            const s = 0 === h ? t.initialPromise : void 0;
            try {
              e = null !== s && void 0 !== s ? s : t.fn();
            } catch (n) {
              e = Promise.reject(n);
            }
            Promise.resolve(e)
              .then(p)
              .catch((e) => {
                var s, n, r;
                if (c) return;
                const u =
                    null !== (s = t.retry) && void 0 !== s ? s : o.S$ ? 0 : 3,
                  l = null !== (n = t.retryDelay) && void 0 !== n ? n : a,
                  d = "function" === typeof l ? l(h, e) : l,
                  f =
                    !0 === u ||
                    ("number" === typeof u && h < u) ||
                    ("function" === typeof u && u(h, e));
                !i && f
                  ? (h++,
                    null === (r = t.onFail) || void 0 === r || r.call(t, h, e),
                    (0, o.yy)(d)
                      .then(() => (v() ? void 0 : A()))
                      .then(() => {
                        i ? y(e) : g();
                      }))
                  : y(e);
              });
          };
        return {
          promise: d,
          cancel: (e) => {
            var i;
            c ||
              (y(new l(e)),
              null === (i = t.abort) || void 0 === i || i.call(t));
          },
          continue: () => {
            var t;
            return null === (t = e) || void 0 === t || t(), d;
          },
          cancelRetry: () => {
            i = !0;
          },
          continueRetry: () => {
            i = !1;
          },
          canStart: f,
          start: () => (f() ? g() : A().then(g), d),
        };
      }
    },
    32833: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => F });
      var s,
        n,
        r,
        o,
        a = i(55149),
        u = i(38458),
        l = i(24558),
        h = i(51983),
        c = i(53238),
        d = i(50042),
        v = i(46341),
        f =
          ((s = new WeakMap()),
          class extends v.Q {
            constructor() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              super(),
                (0, a.A)(this, s, void 0),
                (this.config = t),
                (0, l.A)(s, this, new Map());
            }
            build(t, e, i) {
              var s;
              const n = e.queryKey,
                r =
                  null !== (s = e.queryHash) && void 0 !== s
                    ? s
                    : (0, h.F$)(n, e);
              let o = this.get(r);
              return (
                o ||
                  ((o = new c.X({
                    client: t,
                    queryKey: n,
                    queryHash: r,
                    options: t.defaultQueryOptions(e),
                    state: i,
                    defaultOptions: t.getQueryDefaults(n),
                  })),
                  this.add(o)),
                o
              );
            }
            add(t) {
              (0, u.A)(s, this).has(t.queryHash) ||
                ((0, u.A)(s, this).set(t.queryHash, t),
                this.notify({ type: "added", query: t }));
            }
            remove(t) {
              const e = (0, u.A)(s, this).get(t.queryHash);
              e &&
                (t.destroy(),
                e === t && (0, u.A)(s, this).delete(t.queryHash),
                this.notify({ type: "removed", query: t }));
            }
            clear() {
              d.jG.batch(() => {
                this.getAll().forEach((t) => {
                  this.remove(t);
                });
              });
            }
            get(t) {
              return (0, u.A)(s, this).get(t);
            }
            getAll() {
              return [...(0, u.A)(s, this).values()];
            }
            find(t) {
              const e = { exact: !0, ...t };
              return this.getAll().find((t) => (0, h.MK)(e, t));
            }
            findAll() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              const e = this.getAll();
              return Object.keys(t).length > 0
                ? e.filter((e) => (0, h.MK)(t, e))
                : e;
            }
            notify(t) {
              d.jG.batch(() => {
                this.listeners.forEach((e) => {
                  e(t);
                });
              });
            }
            onFocus() {
              d.jG.batch(() => {
                this.getAll().forEach((t) => {
                  t.onFocus();
                });
              });
            }
            onOnline() {
              d.jG.batch(() => {
                this.getAll().forEach((t) => {
                  t.onOnline();
                });
              });
            }
          }),
        p = i(235),
        y =
          ((n = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakMap()),
          class extends v.Q {
            constructor() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              super(),
                (0, a.A)(this, n, void 0),
                (0, a.A)(this, r, void 0),
                (0, a.A)(this, o, void 0),
                (this.config = t),
                (0, l.A)(n, this, new Set()),
                (0, l.A)(r, this, new Map()),
                (0, l.A)(o, this, 0);
            }
            build(t, e, i) {
              var s;
              const n = new p.s({
                mutationCache: this,
                mutationId: (0, l.A)(o, this, ((s = (0, u.A)(o, this)), ++s)),
                options: t.defaultMutationOptions(e),
                state: i,
              });
              return this.add(n), n;
            }
            add(t) {
              (0, u.A)(n, this).add(t);
              const e = A(t);
              if ("string" === typeof e) {
                const i = (0, u.A)(r, this).get(e);
                i ? i.push(t) : (0, u.A)(r, this).set(e, [t]);
              }
              this.notify({ type: "added", mutation: t });
            }
            remove(t) {
              if ((0, u.A)(n, this).delete(t)) {
                const e = A(t);
                if ("string" === typeof e) {
                  const i = (0, u.A)(r, this).get(e);
                  if (i)
                    if (i.length > 1) {
                      const e = i.indexOf(t);
                      -1 !== e && i.splice(e, 1);
                    } else i[0] === t && (0, u.A)(r, this).delete(e);
                }
              }
              this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
              const e = A(t);
              if ("string" === typeof e) {
                const i = (0, u.A)(r, this).get(e),
                  s =
                    null === i || void 0 === i
                      ? void 0
                      : i.find((t) => "pending" === t.state.status);
                return !s || s === t;
              }
              return !0;
            }
            runNext(t) {
              const e = A(t);
              if ("string" === typeof e) {
                var i, s;
                const n =
                  null === (i = (0, u.A)(r, this).get(e)) || void 0 === i
                    ? void 0
                    : i.find((e) => e !== t && e.state.isPaused);
                return null !==
                  (s = null === n || void 0 === n ? void 0 : n.continue()) &&
                  void 0 !== s
                  ? s
                  : Promise.resolve();
              }
              return Promise.resolve();
            }
            clear() {
              d.jG.batch(() => {
                (0, u.A)(n, this).forEach((t) => {
                  this.notify({ type: "removed", mutation: t });
                }),
                  (0, u.A)(n, this).clear(),
                  (0, u.A)(r, this).clear();
              });
            }
            getAll() {
              return Array.from((0, u.A)(n, this));
            }
            find(t) {
              const e = { exact: !0, ...t };
              return this.getAll().find((t) => (0, h.nJ)(e, t));
            }
            findAll() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return this.getAll().filter((e) => (0, h.nJ)(t, e));
            }
            notify(t) {
              d.jG.batch(() => {
                this.listeners.forEach((e) => {
                  e(t);
                });
              });
            }
            resumePausedMutations() {
              const t = this.getAll().filter((t) => t.state.isPaused);
              return d.jG.batch(() =>
                Promise.all(t.map((t) => t.continue().catch(h.lQ)))
              );
            }
          });
      function A(t) {
        var e;
        return null === (e = t.options.scope) || void 0 === e ? void 0 : e.id;
      }
      var g,
        m,
        b,
        w,
        O,
        M,
        S,
        k,
        P = i(89023),
        E = i(25996);
      function C(t) {
        return {
          onFetch: (e, i) => {
            var s, n, r;
            const o = e.options,
              a =
                null === (s = e.fetchOptions) ||
                void 0 === s ||
                null === (s = s.meta) ||
                void 0 === s ||
                null === (s = s.fetchMore) ||
                void 0 === s
                  ? void 0
                  : s.direction,
              u =
                (null === (n = e.state.data) || void 0 === n
                  ? void 0
                  : n.pages) || [],
              l =
                (null === (r = e.state.data) || void 0 === r
                  ? void 0
                  : r.pageParams) || [];
            let c = { pages: [], pageParams: [] },
              d = 0;
            const v = async () => {
              let i = !1;
              const s = (0, h.ZM)(e.options, e.fetchOptions),
                n = async (t, n, r) => {
                  if (i) return Promise.reject();
                  if (null == n && t.pages.length) return Promise.resolve(t);
                  const o = {
                    client: e.client,
                    queryKey: e.queryKey,
                    pageParam: n,
                    direction: r ? "backward" : "forward",
                    meta: e.options.meta,
                  };
                  var a;
                  (a = o),
                    Object.defineProperty(a, "signal", {
                      enumerable: !0,
                      get: () => (
                        e.signal.aborted
                          ? (i = !0)
                          : e.signal.addEventListener("abort", () => {
                              i = !0;
                            }),
                        e.signal
                      ),
                    });
                  const u = await s(o),
                    { maxPages: l } = e.options,
                    c = r ? h.ZZ : h.y9;
                  return {
                    pages: c(t.pages, u, l),
                    pageParams: c(t.pageParams, n, l),
                  };
                };
              if (a && u.length) {
                const t = "backward" === a,
                  e = { pages: u, pageParams: l },
                  i = (t ? q : Q)(o, e);
                c = await n(e, i, t);
              } else {
                const e = null !== t && void 0 !== t ? t : u.length;
                do {
                  var r;
                  const t =
                    0 === d
                      ? null !== (r = l[0]) && void 0 !== r
                        ? r
                        : o.initialPageParam
                      : Q(o, c);
                  if (d > 0 && null == t) break;
                  (c = await n(c, t)), d++;
                } while (d < e);
              }
              return c;
            };
            e.options.persister
              ? (e.fetchFn = () => {
                  var t, s;
                  return null === (t = (s = e.options).persister) ||
                    void 0 === t
                    ? void 0
                    : t.call(
                        s,
                        v,
                        {
                          client: e.client,
                          queryKey: e.queryKey,
                          meta: e.options.meta,
                          signal: e.signal,
                        },
                        i
                      );
                })
              : (e.fetchFn = v);
          },
        };
      }
      function Q(t, e) {
        let { pages: i, pageParams: s } = e;
        const n = i.length - 1;
        return i.length > 0 ? t.getNextPageParam(i[n], i, s[n], s) : void 0;
      }
      function q(t, e) {
        var i;
        let { pages: s, pageParams: n } = e;
        return s.length > 0
          ? null === (i = t.getPreviousPageParam) || void 0 === i
            ? void 0
            : i.call(t, s[0], s, n[0], n)
          : void 0;
      }
      var F =
        ((g = new WeakMap()),
        (m = new WeakMap()),
        (b = new WeakMap()),
        (w = new WeakMap()),
        (O = new WeakMap()),
        (M = new WeakMap()),
        (S = new WeakMap()),
        (k = new WeakMap()),
        class {
          constructor() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (0, a.A)(this, g, void 0),
              (0, a.A)(this, m, void 0),
              (0, a.A)(this, b, void 0),
              (0, a.A)(this, w, void 0),
              (0, a.A)(this, O, void 0),
              (0, a.A)(this, M, void 0),
              (0, a.A)(this, S, void 0),
              (0, a.A)(this, k, void 0),
              (0, l.A)(g, this, t.queryCache || new f()),
              (0, l.A)(m, this, t.mutationCache || new y()),
              (0, l.A)(b, this, t.defaultOptions || {}),
              (0, l.A)(w, this, new Map()),
              (0, l.A)(O, this, new Map()),
              (0, l.A)(M, this, 0);
          }
          mount() {
            var t;
            (0, l.A)(M, this, ((t = (0, u.A)(M, this)), t++, t)),
              1 === (0, u.A)(M, this) &&
                ((0, l.A)(
                  S,
                  this,
                  P.m.subscribe(async (t) => {
                    t &&
                      (await this.resumePausedMutations(),
                      (0, u.A)(g, this).onFocus());
                  })
                ),
                (0, l.A)(
                  k,
                  this,
                  E.t.subscribe(async (t) => {
                    t &&
                      (await this.resumePausedMutations(),
                      (0, u.A)(g, this).onOnline());
                  })
                ));
          }
          unmount() {
            var t, e, i;
            (0, l.A)(M, this, ((t = (0, u.A)(M, this)), t--, t)),
              0 === (0, u.A)(M, this) &&
                (null === (e = (0, u.A)(S, this)) ||
                  void 0 === e ||
                  e.call(this),
                (0, l.A)(S, this, void 0),
                null === (i = (0, u.A)(k, this)) ||
                  void 0 === i ||
                  i.call(this),
                (0, l.A)(k, this, void 0));
          }
          isFetching(t) {
            return (0, u.A)(g, this).findAll({ ...t, fetchStatus: "fetching" })
              .length;
          }
          isMutating(t) {
            return (0, u.A)(m, this).findAll({ ...t, status: "pending" })
              .length;
          }
          getQueryData(t) {
            var e;
            const i = this.defaultQueryOptions({ queryKey: t });
            return null === (e = (0, u.A)(g, this).get(i.queryHash)) ||
              void 0 === e
              ? void 0
              : e.state.data;
          }
          ensureQueryData(t) {
            const e = this.defaultQueryOptions(t),
              i = (0, u.A)(g, this).build(this, e),
              s = i.state.data;
            return void 0 === s
              ? this.fetchQuery(t)
              : (t.revalidateIfStale &&
                  i.isStaleByTime((0, h.d2)(e.staleTime, i)) &&
                  this.prefetchQuery(e),
                Promise.resolve(s));
          }
          getQueriesData(t) {
            return (0, u.A)(g, this)
              .findAll(t)
              .map((t) => {
                let { queryKey: e, state: i } = t;
                return [e, i.data];
              });
          }
          setQueryData(t, e, i) {
            const s = this.defaultQueryOptions({ queryKey: t }),
              n = (0, u.A)(g, this).get(s.queryHash),
              r = null === n || void 0 === n ? void 0 : n.state.data,
              o = (0, h.Zw)(e, r);
            if (void 0 !== o)
              return (0, u.A)(g, this)
                .build(this, s)
                .setData(o, { ...i, manual: !0 });
          }
          setQueriesData(t, e, i) {
            return d.jG.batch(() =>
              (0, u.A)(g, this)
                .findAll(t)
                .map((t) => {
                  let { queryKey: s } = t;
                  return [s, this.setQueryData(s, e, i)];
                })
            );
          }
          getQueryState(t) {
            var e;
            const i = this.defaultQueryOptions({ queryKey: t });
            return null === (e = (0, u.A)(g, this).get(i.queryHash)) ||
              void 0 === e
              ? void 0
              : e.state;
          }
          removeQueries(t) {
            const e = (0, u.A)(g, this);
            d.jG.batch(() => {
              e.findAll(t).forEach((t) => {
                e.remove(t);
              });
            });
          }
          resetQueries(t, e) {
            const i = (0, u.A)(g, this);
            return d.jG.batch(
              () => (
                i.findAll(t).forEach((t) => {
                  t.reset();
                }),
                this.refetchQueries({ type: "active", ...t }, e)
              )
            );
          }
          cancelQueries(t) {
            const e = {
                revert: !0,
                ...(arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}),
              },
              i = d.jG.batch(() =>
                (0, u.A)(g, this)
                  .findAll(t)
                  .map((t) => t.cancel(e))
              );
            return Promise.all(i).then(h.lQ).catch(h.lQ);
          }
          invalidateQueries(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return d.jG.batch(() => {
              var i, s;
              return (
                (0, u.A)(g, this)
                  .findAll(t)
                  .forEach((t) => {
                    t.invalidate();
                  }),
                "none" === (null === t || void 0 === t ? void 0 : t.refetchType)
                  ? Promise.resolve()
                  : this.refetchQueries(
                      {
                        ...t,
                        type:
                          null !==
                            (i =
                              null !==
                                (s =
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.refetchType) && void 0 !== s
                                ? s
                                : null === t || void 0 === t
                                ? void 0
                                : t.type) && void 0 !== i
                            ? i
                            : "active",
                      },
                      e
                    )
              );
            });
          }
          refetchQueries(t) {
            var e;
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const s = {
                ...i,
                cancelRefetch:
                  null === (e = i.cancelRefetch) || void 0 === e || e,
              },
              n = d.jG.batch(() =>
                (0, u.A)(g, this)
                  .findAll(t)
                  .filter((t) => !t.isDisabled())
                  .map((t) => {
                    let e = t.fetch(void 0, s);
                    return (
                      s.throwOnError || (e = e.catch(h.lQ)),
                      "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    );
                  })
              );
            return Promise.all(n).then(h.lQ);
          }
          fetchQuery(t) {
            const e = this.defaultQueryOptions(t);
            void 0 === e.retry && (e.retry = !1);
            const i = (0, u.A)(g, this).build(this, e);
            return i.isStaleByTime((0, h.d2)(e.staleTime, i))
              ? i.fetch(e)
              : Promise.resolve(i.state.data);
          }
          prefetchQuery(t) {
            return this.fetchQuery(t).then(h.lQ).catch(h.lQ);
          }
          fetchInfiniteQuery(t) {
            return (t.behavior = C(t.pages)), this.fetchQuery(t);
          }
          prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(h.lQ).catch(h.lQ);
          }
          ensureInfiniteQueryData(t) {
            return (t.behavior = C(t.pages)), this.ensureQueryData(t);
          }
          resumePausedMutations() {
            return E.t.isOnline()
              ? (0, u.A)(m, this).resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return (0, u.A)(g, this);
          }
          getMutationCache() {
            return (0, u.A)(m, this);
          }
          getDefaultOptions() {
            return (0, u.A)(b, this);
          }
          setDefaultOptions(t) {
            (0, l.A)(b, this, t);
          }
          setQueryDefaults(t, e) {
            (0, u.A)(w, this).set((0, h.EN)(t), {
              queryKey: t,
              defaultOptions: e,
            });
          }
          getQueryDefaults(t) {
            const e = [...(0, u.A)(w, this).values()],
              i = {};
            return (
              e.forEach((e) => {
                (0, h.Cp)(t, e.queryKey) && Object.assign(i, e.defaultOptions);
              }),
              i
            );
          }
          setMutationDefaults(t, e) {
            (0, u.A)(O, this).set((0, h.EN)(t), {
              mutationKey: t,
              defaultOptions: e,
            });
          }
          getMutationDefaults(t) {
            const e = [...(0, u.A)(O, this).values()],
              i = {};
            return (
              e.forEach((e) => {
                (0, h.Cp)(t, e.mutationKey) &&
                  Object.assign(i, e.defaultOptions);
              }),
              i
            );
          }
          defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const e = {
              ...(0, u.A)(b, this).queries,
              ...this.getQueryDefaults(t.queryKey),
              ...t,
              _defaulted: !0,
            };
            return (
              e.queryHash || (e.queryHash = (0, h.F$)(e.queryKey, e)),
              void 0 === e.refetchOnReconnect &&
                (e.refetchOnReconnect = "always" !== e.networkMode),
              void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
              !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
              e.queryFn === h.hT && (e.enabled = !1),
              e
            );
          }
          defaultMutationOptions(t) {
            return null !== t && void 0 !== t && t._defaulted
              ? t
              : {
                  ...(0, u.A)(b, this).mutations,
                  ...((null === t || void 0 === t ? void 0 : t.mutationKey) &&
                    this.getMutationDefaults(t.mutationKey)),
                  ...t,
                  _defaulted: !0,
                };
          }
          clear() {
            (0, u.A)(g, this).clear(), (0, u.A)(m, this).clear();
          }
        });
    },
    46341: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => s });
      var s = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    50042: (t, e, i) => {
      "use strict";
      i.d(e, { jG: () => n });
      var s = (t) => setTimeout(t, 0);
      var n = (function () {
        let t = [],
          e = 0,
          i = (t) => {
            t();
          },
          n = (t) => {
            t();
          },
          r = s;
        const o = (s) => {
          e
            ? t.push(s)
            : r(() => {
                i(s);
              });
        };
        return {
          batch: (s) => {
            let o;
            e++;
            try {
              o = s();
            } finally {
              e--,
                e ||
                  (() => {
                    const e = t;
                    (t = []),
                      e.length &&
                        r(() => {
                          n(() => {
                            e.forEach((t) => {
                              i(t);
                            });
                          });
                        });
                  })();
            }
            return o;
          },
          batchCalls: (t) =>
            function () {
              for (
                var e = arguments.length, i = new Array(e), s = 0;
                s < e;
                s++
              )
                i[s] = arguments[s];
              o(() => {
                t(...i);
              });
            },
          schedule: o,
          setNotifyFunction: (t) => {
            i = t;
          },
          setBatchNotifyFunction: (t) => {
            n = t;
          },
          setScheduler: (t) => {
            r = t;
          },
        };
      })();
    },
    51983: (t, e, i) => {
      "use strict";
      i.d(e, {
        BH: () => p,
        Cp: () => f,
        EN: () => v,
        Eh: () => l,
        F$: () => d,
        MK: () => h,
        S$: () => s,
        ZM: () => k,
        ZZ: () => M,
        Zw: () => r,
        d2: () => u,
        f8: () => y,
        gn: () => o,
        hT: () => S,
        j3: () => a,
        lQ: () => n,
        nJ: () => c,
        pl: () => w,
        y9: () => O,
        yy: () => b,
      });
      var s = "undefined" === typeof window || "Deno" in globalThis;
      function n() {}
      function r(t, e) {
        return "function" === typeof t ? t(e) : t;
      }
      function o(t) {
        return "number" === typeof t && t >= 0 && t !== 1 / 0;
      }
      function a(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function u(t, e) {
        return "function" === typeof t ? t(e) : t;
      }
      function l(t, e) {
        return "function" === typeof t ? t(e) : t;
      }
      function h(t, e) {
        const {
          type: i = "all",
          exact: s,
          fetchStatus: n,
          predicate: r,
          queryKey: o,
          stale: a,
        } = t;
        if (o)
          if (s) {
            if (e.queryHash !== d(o, e.options)) return !1;
          } else if (!f(e.queryKey, o)) return !1;
        if ("all" !== i) {
          const t = e.isActive();
          if ("active" === i && !t) return !1;
          if ("inactive" === i && t) return !1;
        }
        return (
          ("boolean" !== typeof a || e.isStale() === a) &&
          (!n || n === e.state.fetchStatus) &&
          !(r && !r(e))
        );
      }
      function c(t, e) {
        const { exact: i, status: s, predicate: n, mutationKey: r } = t;
        if (r) {
          if (!e.options.mutationKey) return !1;
          if (i) {
            if (v(e.options.mutationKey) !== v(r)) return !1;
          } else if (!f(e.options.mutationKey, r)) return !1;
        }
        return (!s || e.state.status === s) && !(n && !n(e));
      }
      function d(t, e) {
        return ((null === e || void 0 === e ? void 0 : e.queryKeyHashFn) || v)(
          t
        );
      }
      function v(t) {
        return JSON.stringify(t, (t, e) =>
          g(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, i) => ((t[i] = e[i]), t), {})
            : e
        );
      }
      function f(t, e) {
        return (
          t === e ||
          (typeof t === typeof e &&
            !(!t || !e || "object" !== typeof t || "object" !== typeof e) &&
            Object.keys(e).every((i) => f(t[i], e[i])))
        );
      }
      function p(t, e) {
        if (t === e) return t;
        const i = A(t) && A(e);
        if (i || (g(t) && g(e))) {
          const s = i ? t : Object.keys(t),
            n = s.length,
            r = i ? e : Object.keys(e),
            o = r.length,
            a = i ? [] : {};
          let u = 0;
          for (let l = 0; l < o; l++) {
            const n = i ? l : r[l];
            ((!i && s.includes(n)) || i) && void 0 === t[n] && void 0 === e[n]
              ? ((a[n] = void 0), u++)
              : ((a[n] = p(t[n], e[n])),
                a[n] === t[n] && void 0 !== t[n] && u++);
          }
          return n === o && u === n ? t : a;
        }
        return e;
      }
      function y(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (const i in t) if (t[i] !== e[i]) return !1;
        return !0;
      }
      function A(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function g(t) {
        if (!m(t)) return !1;
        const e = t.constructor;
        if (void 0 === e) return !0;
        const i = e.prototype;
        return (
          !!m(i) &&
          !!i.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function m(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function b(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function w(t, e, i) {
        return "function" === typeof i.structuralSharing
          ? i.structuralSharing(t, e)
          : !1 !== i.structuralSharing
          ? p(t, e)
          : e;
      }
      function O(t, e) {
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const s = [...t, e];
        return i && s.length > i ? s.slice(1) : s;
      }
      function M(t, e) {
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const s = [e, ...t];
        return i && s.length > i ? s.slice(0, -1) : s;
      }
      var S = Symbol();
      function k(t, e) {
        return !t.queryFn && null !== e && void 0 !== e && e.initialPromise
          ? () => e.initialPromise
          : t.queryFn && t.queryFn !== S
          ? t.queryFn
          : () =>
              Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`));
      }
    },
    53238: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => b, k: () => O });
      var s,
        n,
        r,
        o,
        a,
        u,
        l,
        h,
        c = i(39790),
        d = i(55149),
        v = i(26562),
        f = i(38458),
        p = i(24558),
        y = i(51983),
        A = i(50042),
        g = i(28211),
        m = i(83091),
        b =
          ((s = new WeakMap()),
          (n = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakMap()),
          (a = new WeakMap()),
          (u = new WeakMap()),
          (l = new WeakMap()),
          (h = new WeakSet()),
          class extends m.k {
            constructor(t) {
              var e;
              super(),
                (0, c.A)(this, h),
                (0, d.A)(this, s, void 0),
                (0, d.A)(this, n, void 0),
                (0, d.A)(this, r, void 0),
                (0, d.A)(this, o, void 0),
                (0, d.A)(this, a, void 0),
                (0, d.A)(this, u, void 0),
                (0, d.A)(this, l, void 0),
                (0, p.A)(l, this, !1),
                (0, p.A)(u, this, t.defaultOptions),
                this.setOptions(t.options),
                (this.observers = []),
                (0, p.A)(o, this, t.client),
                (0, p.A)(r, this, (0, f.A)(o, this).getQueryCache()),
                (this.queryKey = t.queryKey),
                (this.queryHash = t.queryHash),
                (0, p.A)(
                  s,
                  this,
                  (function (t) {
                    const e =
                        "function" === typeof t.initialData
                          ? t.initialData()
                          : t.initialData,
                      i = void 0 !== e,
                      s = i
                        ? "function" === typeof t.initialDataUpdatedAt
                          ? t.initialDataUpdatedAt()
                          : t.initialDataUpdatedAt
                        : 0;
                    return {
                      data: e,
                      dataUpdateCount: 0,
                      dataUpdatedAt: i
                        ? null !== s && void 0 !== s
                          ? s
                          : Date.now()
                        : 0,
                      error: null,
                      errorUpdateCount: 0,
                      errorUpdatedAt: 0,
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                      fetchMeta: null,
                      isInvalidated: !1,
                      status: i ? "success" : "pending",
                      fetchStatus: "idle",
                    };
                  })(this.options)
                ),
                (this.state =
                  null !== (e = t.state) && void 0 !== e
                    ? e
                    : (0, f.A)(s, this)),
                this.scheduleGc();
            }
            get meta() {
              return this.options.meta;
            }
            get promise() {
              var t;
              return null === (t = (0, f.A)(a, this)) || void 0 === t
                ? void 0
                : t.promise;
            }
            setOptions(t) {
              (this.options = { ...(0, f.A)(u, this), ...t }),
                this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
              this.observers.length ||
                "idle" !== this.state.fetchStatus ||
                (0, f.A)(r, this).remove(this);
            }
            setData(t, e) {
              const i = (0, y.pl)(this.state.data, t, this.options);
              return (
                (0, v.A)(h, this, w).call(this, {
                  data: i,
                  type: "success",
                  dataUpdatedAt:
                    null === e || void 0 === e ? void 0 : e.updatedAt,
                  manual: null === e || void 0 === e ? void 0 : e.manual,
                }),
                i
              );
            }
            setState(t, e) {
              (0, v.A)(h, this, w).call(this, {
                type: "setState",
                state: t,
                setStateOptions: e,
              });
            }
            cancel(t) {
              var e, i;
              const s =
                null === (e = (0, f.A)(a, this)) || void 0 === e
                  ? void 0
                  : e.promise;
              return (
                null === (i = (0, f.A)(a, this)) || void 0 === i || i.cancel(t),
                s ? s.then(y.lQ).catch(y.lQ) : Promise.resolve()
              );
            }
            destroy() {
              super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
              this.destroy(), this.setState((0, f.A)(s, this));
            }
            isActive() {
              return this.observers.some(
                (t) => !1 !== (0, y.Eh)(t.options.enabled, this)
              );
            }
            isDisabled() {
              return this.getObserversCount() > 0
                ? !this.isActive()
                : this.options.queryFn === y.hT ||
                    this.state.dataUpdateCount + this.state.errorUpdateCount ===
                      0;
            }
            isStale() {
              return (
                !!this.state.isInvalidated ||
                (this.getObserversCount() > 0
                  ? this.observers.some((t) => t.getCurrentResult().isStale)
                  : void 0 === this.state.data)
              );
            }
            isStaleByTime() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return (
                this.state.isInvalidated ||
                void 0 === this.state.data ||
                !(0, y.j3)(this.state.dataUpdatedAt, t)
              );
            }
            onFocus() {
              var t;
              const e = this.observers.find((t) =>
                t.shouldFetchOnWindowFocus()
              );
              null === e || void 0 === e || e.refetch({ cancelRefetch: !1 }),
                null === (t = (0, f.A)(a, this)) ||
                  void 0 === t ||
                  t.continue();
            }
            onOnline() {
              var t;
              const e = this.observers.find((t) => t.shouldFetchOnReconnect());
              null === e || void 0 === e || e.refetch({ cancelRefetch: !1 }),
                null === (t = (0, f.A)(a, this)) ||
                  void 0 === t ||
                  t.continue();
            }
            addObserver(t) {
              this.observers.includes(t) ||
                (this.observers.push(t),
                this.clearGcTimeout(),
                (0, f.A)(r, this).notify({
                  type: "observerAdded",
                  query: this,
                  observer: t,
                }));
            }
            removeObserver(t) {
              this.observers.includes(t) &&
                ((this.observers = this.observers.filter((e) => e !== t)),
                this.observers.length ||
                  ((0, f.A)(a, this) &&
                    ((0, f.A)(l, this)
                      ? (0, f.A)(a, this).cancel({ revert: !0 })
                      : (0, f.A)(a, this).cancelRetry()),
                  this.scheduleGc()),
                (0, f.A)(r, this).notify({
                  type: "observerRemoved",
                  query: this,
                  observer: t,
                }));
            }
            getObserversCount() {
              return this.observers.length;
            }
            invalidate() {
              this.state.isInvalidated ||
                (0, v.A)(h, this, w).call(this, { type: "invalidate" });
            }
            fetch(t, e) {
              var i, s;
              if ("idle" !== this.state.fetchStatus)
                if (
                  void 0 !== this.state.data &&
                  null !== e &&
                  void 0 !== e &&
                  e.cancelRefetch
                )
                  this.cancel({ silent: !0 });
                else if ((0, f.A)(a, this))
                  return (
                    (0, f.A)(a, this).continueRetry(), (0, f.A)(a, this).promise
                  );
              if ((t && this.setOptions(t), !this.options.queryFn)) {
                const t = this.observers.find((t) => t.options.queryFn);
                t && this.setOptions(t.options);
              }
              const u = new AbortController(),
                c = (t) => {
                  Object.defineProperty(t, "signal", {
                    enumerable: !0,
                    get: () => ((0, p.A)(l, this, !0), u.signal),
                  });
                },
                d = {
                  fetchOptions: e,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: (0, f.A)(o, this),
                  state: this.state,
                  fetchFn: () => {
                    const t = (0, y.ZM)(this.options, e),
                      i = {
                        client: (0, f.A)(o, this),
                        queryKey: this.queryKey,
                        meta: this.meta,
                      };
                    return (
                      c(i),
                      (0, p.A)(l, this, !1),
                      this.options.persister
                        ? this.options.persister(t, i, this)
                        : t(i)
                    );
                  },
                };
              var A;
              (c(d),
              null === (i = this.options.behavior) ||
                void 0 === i ||
                i.onFetch(d, this),
              (0, p.A)(n, this, this.state),
              "idle" === this.state.fetchStatus ||
                this.state.fetchMeta !==
                  (null === (s = d.fetchOptions) || void 0 === s
                    ? void 0
                    : s.meta)) &&
                (0, v.A)(h, this, w).call(this, {
                  type: "fetch",
                  meta:
                    null === (A = d.fetchOptions) || void 0 === A
                      ? void 0
                      : A.meta,
                });
              const m = (t) => {
                var e, i, s, n;
                (((0, g.wm)(t) && t.silent) ||
                  (0, v.A)(h, this, w).call(this, { type: "error", error: t }),
                (0, g.wm)(t)) ||
                  (null === (e = (i = (0, f.A)(r, this).config).onError) ||
                    void 0 === e ||
                    e.call(i, t, this),
                  null === (s = (n = (0, f.A)(r, this).config).onSettled) ||
                    void 0 === s ||
                    s.call(n, this.state.data, t, this));
                this.scheduleGc();
              };
              return (
                (0, p.A)(
                  a,
                  this,
                  (0, g.II)({
                    initialPromise:
                      null === e || void 0 === e ? void 0 : e.initialPromise,
                    fn: d.fetchFn,
                    abort: u.abort.bind(u),
                    onSuccess: (t) => {
                      var e, i, s, n;
                      if (void 0 !== t) {
                        try {
                          this.setData(t);
                        } catch (o) {
                          return void m(o);
                        }
                        null ===
                          (e = (i = (0, f.A)(r, this).config).onSuccess) ||
                          void 0 === e ||
                          e.call(i, t, this),
                          null ===
                            (s = (n = (0, f.A)(r, this).config).onSettled) ||
                            void 0 === s ||
                            s.call(n, t, this.state.error, this),
                          this.scheduleGc();
                      } else
                        m(new Error(`${this.queryHash} data is undefined`));
                    },
                    onError: m,
                    onFail: (t, e) => {
                      (0, v.A)(h, this, w).call(this, {
                        type: "failed",
                        failureCount: t,
                        error: e,
                      });
                    },
                    onPause: () => {
                      (0, v.A)(h, this, w).call(this, { type: "pause" });
                    },
                    onContinue: () => {
                      (0, v.A)(h, this, w).call(this, { type: "continue" });
                    },
                    retry: d.options.retry,
                    retryDelay: d.options.retryDelay,
                    networkMode: d.options.networkMode,
                    canRun: () => !0,
                  })
                ),
                (0, f.A)(a, this).start()
              );
            }
          });
      function w(t) {
        (this.state = ((e) => {
          var i, s;
          switch (t.type) {
            case "failed":
              return {
                ...e,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...e, fetchStatus: "paused" };
            case "continue":
              return { ...e, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...e,
                ...O(e.data, this.options),
                fetchMeta: null !== (i = t.meta) && void 0 !== i ? i : null,
              };
            case "success":
              return {
                ...e,
                data: t.data,
                dataUpdateCount: e.dataUpdateCount + 1,
                dataUpdatedAt:
                  null !== (s = t.dataUpdatedAt) && void 0 !== s
                    ? s
                    : Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
            case "error":
              const r = t.error;
              return (0, g.wm)(r) && r.revert && (0, f.A)(n, this)
                ? { ...(0, f.A)(n, this), fetchStatus: "idle" }
                : {
                    ...e,
                    error: r,
                    errorUpdateCount: e.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: e.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
            case "invalidate":
              return { ...e, isInvalidated: !0 };
            case "setState":
              return { ...e, ...t.state };
          }
        })(this.state)),
          A.jG.batch(() => {
            this.observers.forEach((t) => {
              t.onQueryUpdate();
            }),
              (0, f.A)(r, this).notify({
                query: this,
                type: "updated",
                action: t,
              });
          });
      }
      function O(t, e) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, g.v_)(e.networkMode) ? "fetching" : "paused",
          ...(void 0 === t && { error: null, status: "pending" }),
        };
      }
    },
    54649: (t, e, i) => {
      "use strict";
      i.d(e, { _: () => A });
      var s,
        n,
        r,
        o,
        a,
        u = i(39790),
        l = i(55149),
        h = i(38458),
        c = i(26562),
        d = i(24558),
        v = i(235),
        f = i(50042),
        p = i(46341),
        y = i(51983),
        A =
          ((s = new WeakMap()),
          (n = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakMap()),
          (a = new WeakSet()),
          class extends p.Q {
            constructor(t, e) {
              super(),
                (0, u.A)(this, a),
                (0, l.A)(this, s, void 0),
                (0, l.A)(this, n, void 0),
                (0, l.A)(this, r, void 0),
                (0, l.A)(this, o, void 0),
                (0, d.A)(s, this, t),
                this.setOptions(e),
                this.bindMethods(),
                (0, c.A)(a, this, g).call(this);
            }
            bindMethods() {
              (this.mutate = this.mutate.bind(this)),
                (this.reset = this.reset.bind(this));
            }
            setOptions(t) {
              var e;
              const i = this.options;
              (this.options = (0, h.A)(s, this).defaultMutationOptions(t)),
                (0, y.f8)(this.options, i) ||
                  (0, h.A)(s, this)
                    .getMutationCache()
                    .notify({
                      type: "observerOptionsUpdated",
                      mutation: (0, h.A)(r, this),
                      observer: this,
                    }),
                null !== i &&
                void 0 !== i &&
                i.mutationKey &&
                this.options.mutationKey &&
                (0, y.EN)(i.mutationKey) !== (0, y.EN)(this.options.mutationKey)
                  ? this.reset()
                  : "pending" ===
                      (null === (e = (0, h.A)(r, this)) || void 0 === e
                        ? void 0
                        : e.state.status) &&
                    (0, h.A)(r, this).setOptions(this.options);
            }
            onUnsubscribe() {
              var t;
              this.hasListeners() ||
                null === (t = (0, h.A)(r, this)) ||
                void 0 === t ||
                t.removeObserver(this);
            }
            onMutationUpdate(t) {
              (0, c.A)(a, this, g).call(this),
                (0, c.A)(a, this, m).call(this, t);
            }
            getCurrentResult() {
              return (0, h.A)(n, this);
            }
            reset() {
              var t;
              null === (t = (0, h.A)(r, this)) ||
                void 0 === t ||
                t.removeObserver(this),
                (0, d.A)(r, this, void 0),
                (0, c.A)(a, this, g).call(this),
                (0, c.A)(a, this, m).call(this);
            }
            mutate(t, e) {
              var i;
              return (
                (0, d.A)(o, this, e),
                null === (i = (0, h.A)(r, this)) ||
                  void 0 === i ||
                  i.removeObserver(this),
                (0, d.A)(
                  r,
                  this,
                  (0, h.A)(s, this)
                    .getMutationCache()
                    .build((0, h.A)(s, this), this.options)
                ),
                (0, h.A)(r, this).addObserver(this),
                (0, h.A)(r, this).execute(t)
              );
            }
          });
      function g() {
        var t, e;
        const i =
          null !==
            (t =
              null === (e = (0, h.A)(r, this)) || void 0 === e
                ? void 0
                : e.state) && void 0 !== t
            ? t
            : (0, v.$)();
        (0, d.A)(n, this, {
          ...i,
          isPending: "pending" === i.status,
          isSuccess: "success" === i.status,
          isError: "error" === i.status,
          isIdle: "idle" === i.status,
          mutate: this.mutate,
          reset: this.reset,
        });
      }
      function m(t) {
        f.jG.batch(() => {
          if ((0, h.A)(o, this) && this.hasListeners()) {
            const d = (0, h.A)(n, this).variables,
              v = (0, h.A)(n, this).context;
            var e, i, s, r;
            if ("success" === (null === t || void 0 === t ? void 0 : t.type))
              null === (e = (i = (0, h.A)(o, this)).onSuccess) ||
                void 0 === e ||
                e.call(i, t.data, d, v),
                null === (s = (r = (0, h.A)(o, this)).onSettled) ||
                  void 0 === s ||
                  s.call(r, t.data, null, d, v);
            else if (
              "error" === (null === t || void 0 === t ? void 0 : t.type)
            ) {
              var a, u, l, c;
              null === (a = (u = (0, h.A)(o, this)).onError) ||
                void 0 === a ||
                a.call(u, t.error, d, v),
                null === (l = (c = (0, h.A)(o, this)).onSettled) ||
                  void 0 === l ||
                  l.call(c, void 0, t.error, d, v);
            }
          }
          this.listeners.forEach((t) => {
            t((0, h.A)(n, this));
          });
        });
      }
    },
    83091: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => u });
      var s,
        n = i(55149),
        r = i(38458),
        o = i(24558),
        a = i(51983),
        u =
          ((s = new WeakMap()),
          class {
            constructor() {
              (0, n.A)(this, s, void 0);
            }
            destroy() {
              this.clearGcTimeout();
            }
            scheduleGc() {
              this.clearGcTimeout(),
                (0, a.gn)(this.gcTime) &&
                  (0, o.A)(
                    s,
                    this,
                    setTimeout(() => {
                      this.optionalRemove();
                    }, this.gcTime)
                  );
            }
            updateGcTime(t) {
              this.gcTime = Math.max(
                this.gcTime || 0,
                null !== t && void 0 !== t ? t : a.S$ ? 1 / 0 : 3e5
              );
            }
            clearGcTimeout() {
              (0, r.A)(s, this) &&
                (clearTimeout((0, r.A)(s, this)), (0, o.A)(s, this, void 0));
            }
          });
    },
    87435: (t, e, i) => {
      "use strict";
      function s() {
        let t, e;
        const i = new Promise((i, s) => {
          (t = i), (e = s);
        });
        function s(t) {
          Object.assign(i, t), delete i.resolve, delete i.reject;
        }
        return (
          (i.status = "pending"),
          i.catch(() => {}),
          (i.resolve = (e) => {
            s({ status: "fulfilled", value: e }), t(e);
          }),
          (i.reject = (t) => {
            s({ status: "rejected", reason: t }), e(t);
          }),
          i
        );
      }
      i.d(e, { T: () => s });
    },
    89023: (t, e, i) => {
      "use strict";
      i.d(e, { m: () => c });
      var s,
        n,
        r,
        o = i(55149),
        a = i(38458),
        u = i(24558),
        l = i(46341),
        h = i(51983),
        c = new ((s = new WeakMap()),
        (n = new WeakMap()),
        (r = new WeakMap()),
        class extends l.Q {
          constructor() {
            super(),
              (0, o.A)(this, s, void 0),
              (0, o.A)(this, n, void 0),
              (0, o.A)(this, r, void 0),
              (0, u.A)(r, this, (t) => {
                if (!h.S$ && window.addEventListener) {
                  const e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            (0, a.A)(n, this) || this.setEventListener((0, a.A)(r, this));
          }
          onUnsubscribe() {
            var t;
            this.hasListeners() ||
              (null === (t = (0, a.A)(n, this)) || void 0 === t || t.call(this),
              (0, u.A)(n, this, void 0));
          }
          setEventListener(t) {
            var e;
            (0, u.A)(r, this, t),
              null === (e = (0, a.A)(n, this)) || void 0 === e || e.call(this),
              (0, u.A)(
                n,
                this,
                t((t) => {
                  "boolean" === typeof t ? this.setFocused(t) : this.onFocus();
                })
              );
          }
          setFocused(t) {
            (0, a.A)(s, this) !== t && ((0, u.A)(s, this, t), this.onFocus());
          }
          onFocus() {
            const t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            var t;
            return "boolean" === typeof (0, a.A)(s, this)
              ? (0, a.A)(s, this)
              : "hidden" !==
                  (null === (t = globalThis.document) || void 0 === t
                    ? void 0
                    : t.visibilityState);
          }
        })();
    },
    96792: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => r });
      var s = !0,
        n = "Invariant failed";
      function r(t, e) {
        if (!t) {
          if (s) throw new Error(n);
          var i = "function" === typeof e ? e() : e,
            r = i ? "".concat(n, ": ").concat(i) : n;
          throw new Error(r);
        }
      }
    },
  },
]);
