(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [8329],
  {
    1652: (t, e, r) => {
      "use strict";
      r.d(e, { $: () => _ });
      var n,
        i,
        s,
        o,
        a,
        u,
        h,
        c,
        l,
        f,
        d,
        p,
        v,
        A,
        y,
        g,
        b = r(39790),
        w = r(55149),
        m = r(26562),
        N = r(38458),
        S = r(24558),
        O = r(89023),
        E = r(50042),
        L = r(53238),
        T = r(46341),
        k = r(87435),
        C = r(51983),
        _ =
          ((n = new WeakMap()),
          (i = new WeakMap()),
          (s = new WeakMap()),
          (o = new WeakMap()),
          (a = new WeakMap()),
          (u = new WeakMap()),
          (h = new WeakMap()),
          (c = new WeakMap()),
          (l = new WeakMap()),
          (f = new WeakMap()),
          (d = new WeakMap()),
          (p = new WeakMap()),
          (v = new WeakMap()),
          (A = new WeakMap()),
          (y = new WeakMap()),
          (g = new WeakSet()),
          class extends T.Q {
            constructor(t, e) {
              super(),
                (0, b.A)(this, g),
                (0, w.A)(this, n, void 0),
                (0, w.A)(this, i, void 0),
                (0, w.A)(this, s, void 0),
                (0, w.A)(this, o, void 0),
                (0, w.A)(this, a, void 0),
                (0, w.A)(this, u, void 0),
                (0, w.A)(this, h, void 0),
                (0, w.A)(this, c, void 0),
                (0, w.A)(this, l, void 0),
                (0, w.A)(this, f, void 0),
                (0, w.A)(this, d, void 0),
                (0, w.A)(this, p, void 0),
                (0, w.A)(this, v, void 0),
                (0, w.A)(this, A, void 0),
                (0, w.A)(this, y, new Set()),
                (this.options = e),
                (0, S.A)(n, this, t),
                (0, S.A)(c, this, null),
                (0, S.A)(h, this, (0, k.T)()),
                this.options.experimental_prefetchInRender ||
                  (0, N.A)(h, this).reject(
                    new Error(
                      "experimental_prefetchInRender feature flag is not enabled"
                    )
                  ),
                this.bindMethods(),
                this.setOptions(e);
            }
            bindMethods() {
              this.refetch = this.refetch.bind(this);
            }
            onSubscribe() {
              1 === this.listeners.size &&
                ((0, N.A)(i, this).addObserver(this),
                B((0, N.A)(i, this), this.options)
                  ? (0, m.A)(g, this, U).call(this)
                  : this.updateResult(),
                (0, m.A)(g, this, j).call(this));
            }
            onUnsubscribe() {
              this.hasListeners() || this.destroy();
            }
            shouldFetchOnReconnect() {
              return D(
                (0, N.A)(i, this),
                this.options,
                this.options.refetchOnReconnect
              );
            }
            shouldFetchOnWindowFocus() {
              return D(
                (0, N.A)(i, this),
                this.options,
                this.options.refetchOnWindowFocus
              );
            }
            destroy() {
              (this.listeners = new Set()),
                (0, m.A)(g, this, M).call(this),
                (0, m.A)(g, this, J).call(this),
                (0, N.A)(i, this).removeObserver(this);
            }
            setOptions(t) {
              const e = this.options,
                r = (0, N.A)(i, this);
              if (
                ((this.options = (0, N.A)(n, this).defaultQueryOptions(t)),
                void 0 !== this.options.enabled &&
                  "boolean" !== typeof this.options.enabled &&
                  "function" !== typeof this.options.enabled &&
                  "boolean" !==
                    typeof (0, C.Eh)(this.options.enabled, (0, N.A)(i, this)))
              )
                throw new Error(
                  "Expected enabled to be a boolean or a callback that returns a boolean"
                );
              (0, m.A)(g, this, W).call(this),
                (0, N.A)(i, this).setOptions(this.options),
                e._defaulted &&
                  !(0, C.f8)(this.options, e) &&
                  (0, N.A)(n, this)
                    .getQueryCache()
                    .notify({
                      type: "observerOptionsUpdated",
                      query: (0, N.A)(i, this),
                      observer: this,
                    });
              const s = this.hasListeners();
              s &&
                P((0, N.A)(i, this), r, this.options, e) &&
                (0, m.A)(g, this, U).call(this),
                this.updateResult(),
                !s ||
                  ((0, N.A)(i, this) === r &&
                    (0, C.Eh)(this.options.enabled, (0, N.A)(i, this)) ===
                      (0, C.Eh)(e.enabled, (0, N.A)(i, this)) &&
                    (0, C.d2)(this.options.staleTime, (0, N.A)(i, this)) ===
                      (0, C.d2)(e.staleTime, (0, N.A)(i, this))) ||
                  (0, m.A)(g, this, I).call(this);
              const o = (0, m.A)(g, this, R).call(this);
              !s ||
                ((0, N.A)(i, this) === r &&
                  (0, C.Eh)(this.options.enabled, (0, N.A)(i, this)) ===
                    (0, C.Eh)(e.enabled, (0, N.A)(i, this)) &&
                  o === (0, N.A)(A, this)) ||
                (0, m.A)(g, this, x).call(this, o);
            }
            getOptimisticResult(t) {
              const e = (0, N.A)(n, this)
                  .getQueryCache()
                  .build((0, N.A)(n, this), t),
                r = this.createResult(e, t);
              return (
                (function (t, e) {
                  if (!(0, C.f8)(t.getCurrentResult(), e)) return !0;
                  return !1;
                })(this, r) &&
                  ((0, S.A)(o, this, r),
                  (0, S.A)(u, this, this.options),
                  (0, S.A)(a, this, (0, N.A)(i, this).state)),
                r
              );
            }
            getCurrentResult() {
              return (0, N.A)(o, this);
            }
            trackResult(t, e) {
              const r = {};
              return (
                Object.keys(t).forEach((n) => {
                  Object.defineProperty(r, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (
                      this.trackProp(n),
                      null === e || void 0 === e || e(n),
                      t[n]
                    ),
                  });
                }),
                r
              );
            }
            trackProp(t) {
              (0, N.A)(y, this).add(t);
            }
            getCurrentQuery() {
              return (0, N.A)(i, this);
            }
            refetch() {
              let { ...t } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return this.fetch({ ...t });
            }
            fetchOptimistic(t) {
              const e = (0, N.A)(n, this).defaultQueryOptions(t),
                r = (0, N.A)(n, this)
                  .getQueryCache()
                  .build((0, N.A)(n, this), e);
              return r.fetch().then(() => this.createResult(r, e));
            }
            fetch(t) {
              var e;
              return (0, m.A)(g, this, U)
                .call(this, {
                  ...t,
                  cancelRefetch:
                    null === (e = t.cancelRefetch) || void 0 === e || e,
                })
                .then(() => (this.updateResult(), (0, N.A)(o, this)));
            }
            createResult(t, e) {
              const r = (0, N.A)(i, this),
                n = this.options,
                p = (0, N.A)(o, this),
                v = (0, N.A)(a, this),
                A = (0, N.A)(u, this),
                y = t !== r ? t.state : (0, N.A)(s, this),
                { state: g } = t;
              let b,
                w = { ...g },
                m = !1;
              if (e._optimisticResults) {
                const i = this.hasListeners(),
                  s = !i && B(t, e),
                  o = i && P(t, r, e, n);
                (s || o) && (w = { ...w, ...(0, L.k)(g.data, t.options) }),
                  "isRestoring" === e._optimisticResults &&
                    (w.fetchStatus = "idle");
              }
              let { error: O, errorUpdatedAt: E, status: T } = w;
              b = w.data;
              let _ = !1;
              if (
                void 0 !== e.placeholderData &&
                void 0 === b &&
                "pending" === T
              ) {
                let t;
                var U;
                if (
                  null !== p &&
                  void 0 !== p &&
                  p.isPlaceholderData &&
                  e.placeholderData ===
                    (null === A || void 0 === A ? void 0 : A.placeholderData)
                )
                  (t = p.data), (_ = !0);
                else
                  t =
                    "function" === typeof e.placeholderData
                      ? e.placeholderData(
                          null === (U = (0, N.A)(d, this)) || void 0 === U
                            ? void 0
                            : U.state.data,
                          (0, N.A)(d, this)
                        )
                      : e.placeholderData;
                void 0 !== t &&
                  ((T = "success"),
                  (b = (0, C.pl)(
                    null === p || void 0 === p ? void 0 : p.data,
                    t,
                    e
                  )),
                  (m = !0));
              }
              if (e.select && void 0 !== b && !_)
                if (
                  p &&
                  b === (null === v || void 0 === v ? void 0 : v.data) &&
                  e.select === (0, N.A)(l, this)
                )
                  b = (0, N.A)(f, this);
                else
                  try {
                    (0, S.A)(l, this, e.select),
                      (b = e.select(b)),
                      (b = (0, C.pl)(
                        null === p || void 0 === p ? void 0 : p.data,
                        b,
                        e
                      )),
                      (0, S.A)(f, this, b),
                      (0, S.A)(c, this, null);
                  } catch (W) {
                    (0, S.A)(c, this, W);
                  }
              (0, N.A)(c, this) &&
                ((O = (0, N.A)(c, this)),
                (b = (0, N.A)(f, this)),
                (E = Date.now()),
                (T = "error"));
              const I = "fetching" === w.fetchStatus,
                R = "pending" === T,
                x = "error" === T,
                j = R && I,
                M = void 0 !== b,
                J = {
                  status: T,
                  fetchStatus: w.fetchStatus,
                  isPending: R,
                  isSuccess: "success" === T,
                  isError: x,
                  isInitialLoading: j,
                  isLoading: j,
                  data: b,
                  dataUpdatedAt: w.dataUpdatedAt,
                  error: O,
                  errorUpdatedAt: E,
                  failureCount: w.fetchFailureCount,
                  failureReason: w.fetchFailureReason,
                  errorUpdateCount: w.errorUpdateCount,
                  isFetched: w.dataUpdateCount > 0 || w.errorUpdateCount > 0,
                  isFetchedAfterMount:
                    w.dataUpdateCount > y.dataUpdateCount ||
                    w.errorUpdateCount > y.errorUpdateCount,
                  isFetching: I,
                  isRefetching: I && !R,
                  isLoadingError: x && !M,
                  isPaused: "paused" === w.fetchStatus,
                  isPlaceholderData: m,
                  isRefetchError: x && M,
                  isStale: Q(t, e),
                  refetch: this.refetch,
                  promise: (0, N.A)(h, this),
                };
              if (this.options.experimental_prefetchInRender) {
                const e = (t) => {
                    "error" === J.status
                      ? t.reject(J.error)
                      : void 0 !== J.data && t.resolve(J.data);
                  },
                  n = () => {
                    const t = (0, S.A)(h, this, (J.promise = (0, k.T)()));
                    e(t);
                  },
                  i = (0, N.A)(h, this);
                switch (i.status) {
                  case "pending":
                    t.queryHash === r.queryHash && e(i);
                    break;
                  case "fulfilled":
                    ("error" !== J.status && J.data === i.value) || n();
                    break;
                  case "rejected":
                    ("error" === J.status && J.error === i.reason) || n();
                }
              }
              return J;
            }
            updateResult() {
              const t = (0, N.A)(o, this),
                e = this.createResult((0, N.A)(i, this), this.options);
              if (
                ((0, S.A)(a, this, (0, N.A)(i, this).state),
                (0, S.A)(u, this, this.options),
                void 0 !== (0, N.A)(a, this).data &&
                  (0, S.A)(d, this, (0, N.A)(i, this)),
                (0, C.f8)(e, t))
              )
                return;
              (0, S.A)(o, this, e);
              (0, m.A)(g, this, F).call(this, {
                listeners: (() => {
                  if (!t) return !0;
                  const { notifyOnChangeProps: e } = this.options,
                    r = "function" === typeof e ? e() : e;
                  if ("all" === r || (!r && !(0, N.A)(y, this).size)) return !0;
                  const n = new Set(
                    null !== r && void 0 !== r ? r : (0, N.A)(y, this)
                  );
                  return (
                    this.options.throwOnError && n.add("error"),
                    Object.keys((0, N.A)(o, this)).some((e) => {
                      const r = e;
                      return (0, N.A)(o, this)[r] !== t[r] && n.has(r);
                    })
                  );
                })(),
              });
            }
            onQueryUpdate() {
              this.updateResult(),
                this.hasListeners() && (0, m.A)(g, this, j).call(this);
            }
          });
      function U(t) {
        (0, m.A)(g, this, W).call(this);
        let e = (0, N.A)(i, this).fetch(this.options, t);
        return (
          (null !== t && void 0 !== t && t.throwOnError) || (e = e.catch(C.lQ)),
          e
        );
      }
      function I() {
        (0, m.A)(g, this, M).call(this);
        const t = (0, C.d2)(this.options.staleTime, (0, N.A)(i, this));
        if (C.S$ || (0, N.A)(o, this).isStale || !(0, C.gn)(t)) return;
        const e = (0, C.j3)((0, N.A)(o, this).dataUpdatedAt, t) + 1;
        (0, S.A)(
          p,
          this,
          setTimeout(() => {
            (0, N.A)(o, this).isStale || this.updateResult();
          }, e)
        );
      }
      function R() {
        var t;
        return (
          null !==
            (t =
              "function" === typeof this.options.refetchInterval
                ? this.options.refetchInterval((0, N.A)(i, this))
                : this.options.refetchInterval) &&
          void 0 !== t &&
          t
        );
      }
      function x(t) {
        (0, m.A)(g, this, J).call(this),
          (0, S.A)(A, this, t),
          !C.S$ &&
            !1 !== (0, C.Eh)(this.options.enabled, (0, N.A)(i, this)) &&
            (0, C.gn)((0, N.A)(A, this)) &&
            0 !== (0, N.A)(A, this) &&
            (0, S.A)(
              v,
              this,
              setInterval(() => {
                (this.options.refetchIntervalInBackground || O.m.isFocused()) &&
                  (0, m.A)(g, this, U).call(this);
              }, (0, N.A)(A, this))
            );
      }
      function j() {
        (0, m.A)(g, this, I).call(this),
          (0, m.A)(g, this, x).call(this, (0, m.A)(g, this, R).call(this));
      }
      function M() {
        (0, N.A)(p, this) &&
          (clearTimeout((0, N.A)(p, this)), (0, S.A)(p, this, void 0));
      }
      function J() {
        (0, N.A)(v, this) &&
          (clearInterval((0, N.A)(v, this)), (0, S.A)(v, this, void 0));
      }
      function W() {
        const t = (0, N.A)(n, this)
          .getQueryCache()
          .build((0, N.A)(n, this), this.options);
        if (t === (0, N.A)(i, this)) return;
        const e = (0, N.A)(i, this);
        (0, S.A)(i, this, t),
          (0, S.A)(s, this, t.state),
          this.hasListeners() &&
            (null === e || void 0 === e || e.removeObserver(this),
            t.addObserver(this));
      }
      function F(t) {
        E.jG.batch(() => {
          t.listeners &&
            this.listeners.forEach((t) => {
              t((0, N.A)(o, this));
            }),
            (0, N.A)(n, this)
              .getQueryCache()
              .notify({
                query: (0, N.A)(i, this),
                type: "observerResultsUpdated",
              });
        });
      }
      function B(t, e) {
        return (
          (function (t, e) {
            return (
              !1 !== (0, C.Eh)(e.enabled, t) &&
              void 0 === t.state.data &&
              !("error" === t.state.status && !1 === e.retryOnMount)
            );
          })(t, e) ||
          (void 0 !== t.state.data && D(t, e, e.refetchOnMount))
        );
      }
      function D(t, e, r) {
        if (!1 !== (0, C.Eh)(e.enabled, t)) {
          const n = "function" === typeof r ? r(t) : r;
          return "always" === n || (!1 !== n && Q(t, e));
        }
        return !1;
      }
      function P(t, e, r, n) {
        return (
          (t !== e || !1 === (0, C.Eh)(n.enabled, t)) &&
          (!r.suspense || "error" !== t.state.status) &&
          Q(t, r)
        );
      }
      function Q(t, e) {
        return (
          !1 !== (0, C.Eh)(e.enabled, t) &&
          t.isStaleByTime((0, C.d2)(e.staleTime, t))
        );
      }
    },
    14215: (t, e, r) => {
      var n = r(13740).Buffer,
        i = r(31102),
        s = r(23558);
      function o(t) {
        return n.isBuffer(t);
      }
      function a(t) {
        return "string" === typeof t && /^([0-9a-f]{2})+$/i.test(t);
      }
      function u(t, e) {
        var r = t.toJSON();
        function n(n) {
          if (!t(n)) return !1;
          if (n.length === e) return !0;
          throw s.tfCustomError(
            r + "(Length: " + e + ")",
            r + "(Length: " + n.length + ")"
          );
        }
        return (
          (n.toJSON = function () {
            return r;
          }),
          n
        );
      }
      var h = u.bind(null, i.Array),
        c = u.bind(null, o),
        l = u.bind(null, a),
        f = u.bind(null, i.String);
      var d = Math.pow(2, 53) - 1;
      var p = {
        ArrayN: h,
        Buffer: o,
        BufferN: c,
        Finite: function (t) {
          return "number" === typeof t && isFinite(t);
        },
        Hex: a,
        HexN: l,
        Int8: function (t) {
          return (t << 24) >> 24 === t;
        },
        Int16: function (t) {
          return (t << 16) >> 16 === t;
        },
        Int32: function (t) {
          return (0 | t) === t;
        },
        Int53: function (t) {
          return (
            "number" === typeof t && t >= -d && t <= d && Math.floor(t) === t
          );
        },
        Range: function (t, e, r) {
          function n(n, i) {
            return r(n, i) && n > t && n < e;
          }
          return (
            (r = r || i.Number),
            (n.toJSON = function () {
              return `${r.toJSON()} between [${t}, ${e}]`;
            }),
            n
          );
        },
        StringN: f,
        UInt8: function (t) {
          return (255 & t) === t;
        },
        UInt16: function (t) {
          return (65535 & t) === t;
        },
        UInt32: function (t) {
          return t >>> 0 === t;
        },
        UInt53: function (t) {
          return (
            "number" === typeof t && t >= 0 && t <= d && Math.floor(t) === t
          );
        },
      };
      for (var v in p)
        p[v].toJSON = function (t) {
          return t;
        }.bind(null, v);
      t.exports = p;
    },
    23558: (t, e, r) => {
      var n = r(31102);
      function i(t) {
        return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
      }
      function s(t) {
        return n.Nil(t) ? "" : i(t.constructor);
      }
      function o(t, e) {
        Error.captureStackTrace && Error.captureStackTrace(t, e);
      }
      function a(t) {
        return n.Function(t)
          ? t.toJSON
            ? t.toJSON()
            : i(t)
          : n.Array(t)
          ? "Array"
          : t && n.Object(t)
          ? "Object"
          : void 0 !== t
          ? t
          : "";
      }
      function u(t, e, r) {
        var i = (function (t) {
          return n.Function(t)
            ? ""
            : n.String(t)
            ? JSON.stringify(t)
            : t && n.Object(t)
            ? ""
            : t;
        })(e);
        return (
          "Expected " +
          a(t) +
          ", got" +
          ("" !== r ? " " + r : "") +
          ("" !== i ? " " + i : "")
        );
      }
      function h(t, e, r) {
        (r = r || s(e)),
          (this.message = u(t, e, r)),
          o(this, h),
          (this.__type = t),
          (this.__value = e),
          (this.__valueTypeName = r);
      }
      function c(t, e, r, n, i) {
        t
          ? ((i = i || s(n)),
            (this.message = (function (t, e, r, n, i) {
              var s = '" of type ';
              return (
                "key" === e && (s = '" with key type '),
                u('property "' + a(r) + s + a(t), n, i)
              );
            })(t, r, e, n, i)))
          : (this.message = 'Unexpected property "' + e + '"'),
          o(this, h),
          (this.__label = r),
          (this.__property = e),
          (this.__type = t),
          (this.__value = n),
          (this.__valueTypeName = i);
      }
      (h.prototype = Object.create(Error.prototype)),
        (h.prototype.constructor = h),
        (c.prototype = Object.create(Error.prototype)),
        (c.prototype.constructor = h),
        (t.exports = {
          TfTypeError: h,
          TfPropertyTypeError: c,
          tfCustomError: function (t, e) {
            return new h(t, {}, e);
          },
          tfSubError: function (t, e, r) {
            return (
              t instanceof c
                ? ((e = e + "." + t.__property),
                  (t = new c(
                    t.__type,
                    e,
                    t.__label,
                    t.__value,
                    t.__valueTypeName
                  )))
                : t instanceof h &&
                  (t = new c(t.__type, e, r, t.__value, t.__valueTypeName)),
              o(t),
              t
            );
          },
          tfJSON: a,
          getValueTypeName: s,
        });
    },
    26267: (t, e, r) => {
      t.exports = i;
      var n = r(19922).EventEmitter;
      function i() {
        n.call(this);
      }
      r(92931)(i, n),
        (i.Readable = r(97291)),
        (i.Writable = r(48751)),
        (i.Duplex = r(46629)),
        (i.Transform = r(43819)),
        (i.PassThrough = r(51553)),
        (i.finished = r(78289)),
        (i.pipeline = r(92979)),
        (i.Stream = i),
        (i.prototype.pipe = function (t, e) {
          var r = this;
          function i(e) {
            t.writable && !1 === t.write(e) && r.pause && r.pause();
          }
          function s() {
            r.readable && r.resume && r.resume();
          }
          r.on("data", i),
            t.on("drain", s),
            t._isStdio ||
              (e && !1 === e.end) ||
              (r.on("end", a), r.on("close", u));
          var o = !1;
          function a() {
            o || ((o = !0), t.end());
          }
          function u() {
            o || ((o = !0), "function" === typeof t.destroy && t.destroy());
          }
          function h(t) {
            if ((c(), 0 === n.listenerCount(this, "error"))) throw t;
          }
          function c() {
            r.removeListener("data", i),
              t.removeListener("drain", s),
              r.removeListener("end", a),
              r.removeListener("close", u),
              r.removeListener("error", h),
              t.removeListener("error", h),
              r.removeListener("end", c),
              r.removeListener("close", c),
              t.removeListener("close", c);
          }
          return (
            r.on("error", h),
            t.on("error", h),
            r.on("end", c),
            r.on("close", c),
            t.on("close", c),
            t.emit("pipe", r),
            t
          );
        });
    },
    31102: (t) => {
      var e = {
        Array: function (t) {
          return null !== t && void 0 !== t && t.constructor === Array;
        },
        Boolean: function (t) {
          return "boolean" === typeof t;
        },
        Function: function (t) {
          return "function" === typeof t;
        },
        Nil: function (t) {
          return void 0 === t || null === t;
        },
        Number: function (t) {
          return "number" === typeof t;
        },
        Object: function (t) {
          return "object" === typeof t;
        },
        String: function (t) {
          return "string" === typeof t;
        },
        "": function () {
          return !0;
        },
      };
      for (var r in ((e.Null = e.Nil), e))
        e[r].toJSON = function (t) {
          return t;
        }.bind(null, r);
      t.exports = e;
    },
    45489: (t, e, r) => {
      var n = r(23558),
        i = r(31102),
        s = n.tfJSON,
        o = n.TfTypeError,
        a = n.TfPropertyTypeError,
        u = n.tfSubError,
        h = n.getValueTypeName,
        c = {
          arrayOf: function (t, e) {
            function r(r, n) {
              return (
                !!i.Array(r) &&
                !i.Nil(r) &&
                !(void 0 !== e.minLength && r.length < e.minLength) &&
                !(void 0 !== e.maxLength && r.length > e.maxLength) &&
                (void 0 === e.length || r.length === e.length) &&
                r.every(function (e, r) {
                  try {
                    return f(t, e, n);
                  } catch (i) {
                    throw u(i, r);
                  }
                })
              );
            }
            return (
              (t = l(t)),
              (e = e || {}),
              (r.toJSON = function () {
                var r = "[" + s(t) + "]";
                return (
                  void 0 !== e.length
                    ? (r += "{" + e.length + "}")
                    : (void 0 === e.minLength && void 0 === e.maxLength) ||
                      (r +=
                        "{" +
                        (void 0 === e.minLength ? 0 : e.minLength) +
                        "," +
                        (void 0 === e.maxLength ? 1 / 0 : e.maxLength) +
                        "}"),
                  r
                );
              }),
              r
            );
          },
          maybe: function t(e) {
            function r(r, n) {
              return i.Nil(r) || e(r, n, t);
            }
            return (
              (e = l(e)),
              (r.toJSON = function () {
                return "?" + s(e);
              }),
              r
            );
          },
          map: function (t, e) {
            function r(r, n) {
              if (!i.Object(r)) return !1;
              if (i.Nil(r)) return !1;
              for (var s in r) {
                try {
                  e && f(e, s, n);
                } catch (a) {
                  throw u(a, s, "key");
                }
                try {
                  var o = r[s];
                  f(t, o, n);
                } catch (a) {
                  throw u(a, s);
                }
              }
              return !0;
            }
            return (
              (t = l(t)),
              e && (e = l(e)),
              (r.toJSON = e
                ? function () {
                    return "{" + s(e) + ": " + s(t) + "}";
                  }
                : function () {
                    return "{" + s(t) + "}";
                  }),
              r
            );
          },
          object: function (t) {
            var e = {};
            for (var r in t) e[r] = l(t[r]);
            function n(t, r) {
              if (!i.Object(t)) return !1;
              if (i.Nil(t)) return !1;
              var n;
              try {
                for (n in e) {
                  f(e[n], t[n], r);
                }
              } catch (s) {
                throw u(s, n);
              }
              if (r) for (n in t) if (!e[n]) throw new a(void 0, n);
              return !0;
            }
            return (
              (n.toJSON = function () {
                return s(e);
              }),
              n
            );
          },
          anyOf: function () {
            var t = [].slice.call(arguments).map(l);
            function e(e, r) {
              return t.some(function (t) {
                try {
                  return f(t, e, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(s).join("|");
              }),
              e
            );
          },
          allOf: function () {
            var t = [].slice.call(arguments).map(l);
            function e(e, r) {
              return t.every(function (t) {
                try {
                  return f(t, e, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(s).join(" & ");
              }),
              e
            );
          },
          quacksLike: function (t) {
            function e(e) {
              return t === h(e);
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
          tuple: function () {
            var t = [].slice.call(arguments).map(l);
            function e(e, r) {
              return (
                !i.Nil(e) &&
                !i.Nil(e.length) &&
                (!r || e.length === t.length) &&
                t.every(function (t, n) {
                  try {
                    return f(t, e[n], r);
                  } catch (i) {
                    throw u(i, n);
                  }
                })
              );
            }
            return (
              (e.toJSON = function () {
                return "(" + t.map(s).join(", ") + ")";
              }),
              e
            );
          },
          value: function (t) {
            function e(e) {
              return e === t;
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
        };
      function l(t) {
        if (i.String(t))
          return "?" === t[0] ? c.maybe(t.slice(1)) : i[t] || c.quacksLike(t);
        if (t && i.Object(t)) {
          if (i.Array(t)) {
            if (1 !== t.length)
              throw new TypeError(
                "Expected compile() parameter of type Array of length 1"
              );
            return c.arrayOf(t[0]);
          }
          return c.object(t);
        }
        return i.Function(t) ? t : c.value(t);
      }
      function f(t, e, r, n) {
        if (i.Function(t)) {
          if (t(e, r)) return !0;
          throw new o(n || t, e);
        }
        return f(l(t), e, r);
      }
      for (var d in ((c.oneOf = c.anyOf), i)) f[d] = i[d];
      for (d in c) f[d] = c[d];
      var p = r(14215);
      for (d in p) f[d] = p[d];
      (f.compile = l),
        (f.TfTypeError = o),
        (f.TfPropertyTypeError = a),
        (t.exports = f);
    },
    49592: (t, e, r) => {
      function n(t) {
        try {
          if (!r.g.localStorage) return !1;
        } catch (n) {
          return !1;
        }
        var e = r.g.localStorage[t];
        return null != e && "true" === String(e).toLowerCase();
      }
      t.exports = function (t, e) {
        if (n("noDeprecation")) return t;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(e);
            n("traceDeprecation") ? console.trace(e) : console.warn(e),
              (r = !0);
          }
          return t.apply(this, arguments);
        };
      };
    },
    80232: (t, e, r) => {
      "use strict";
      var n = r(68584).Buffer;
      function i(t) {
        if (t < 0 || t > 9007199254740991 || t % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function s(t) {
        return i(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9;
      }
      t.exports = {
        encode: function t(e, r, o) {
          if ((i(e), r || (r = n.allocUnsafe(s(e))), !n.isBuffer(r)))
            throw new TypeError("buffer must be a Buffer instance");
          return (
            o || (o = 0),
            e < 253
              ? (r.writeUInt8(e, o), (t.bytes = 1))
              : e <= 65535
              ? (r.writeUInt8(253, o), r.writeUInt16LE(e, o + 1), (t.bytes = 3))
              : e <= 4294967295
              ? (r.writeUInt8(254, o), r.writeUInt32LE(e, o + 1), (t.bytes = 5))
              : (r.writeUInt8(255, o),
                r.writeUInt32LE(e >>> 0, o + 1),
                r.writeUInt32LE((e / 4294967296) | 0, o + 5),
                (t.bytes = 9)),
            r
          );
        },
        decode: function t(e, r) {
          if (!n.isBuffer(e))
            throw new TypeError("buffer must be a Buffer instance");
          r || (r = 0);
          var s = e.readUInt8(r);
          if (s < 253) return (t.bytes = 1), s;
          if (253 === s) return (t.bytes = 3), e.readUInt16LE(r + 1);
          if (254 === s) return (t.bytes = 5), e.readUInt32LE(r + 1);
          t.bytes = 9;
          var o = e.readUInt32LE(r + 1),
            a = 4294967296 * e.readUInt32LE(r + 5) + o;
          return i(a), a;
        },
        encodingLength: s,
      };
    },
    83556: (t, e, r) => {
      var n = r(13740).Buffer,
        i = r(78564);
      function s(t, e) {
        if (void 0 !== e && t[0] !== e)
          throw new Error("Invalid network version");
        if (33 === t.length)
          return { version: t[0], privateKey: t.slice(1, 33), compressed: !1 };
        if (34 !== t.length) throw new Error("Invalid WIF length");
        if (1 !== t[33]) throw new Error("Invalid compression flag");
        return { version: t[0], privateKey: t.slice(1, 33), compressed: !0 };
      }
      function o(t, e, r) {
        var i = new n(r ? 34 : 33);
        return i.writeUInt8(t, 0), e.copy(i, 1), r && (i[33] = 1), i;
      }
      t.exports = {
        decode: function (t, e) {
          return s(i.decode(t), e);
        },
        decodeRaw: s,
        encode: function (t, e, r) {
          return "number" === typeof t
            ? i.encode(o(t, e, r))
            : i.encode(o(t.version, t.privateKey, t.compressed));
        },
        encodeRaw: o,
      };
    },
    90012: (t, e, r) => {
      "use strict";
      var n = r(68584).Buffer,
        i =
          n.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function s(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              if (!t) return "utf8";
              for (var e; ; )
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" !== typeof e && (n.isEncoding === i || !i(t)))
              throw new Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = u), (this.end = h), (e = 4);
            break;
          case "utf8":
            (this.fillLast = a), (e = 4);
            break;
          case "base64":
            (this.text = c), (this.end = l), (e = 3);
            break;
          default:
            return (this.write = f), void (this.end = d);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(e));
      }
      function o(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
          ? 2
          : t >> 4 === 14
          ? 3
          : t >> 3 === 30
          ? 4
          : t >> 6 === 2
          ? -1
          : -2;
      }
      function a(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function (t, e) {
            if (128 !== (192 & e[0])) return (t.lastNeed = 0), "\ufffd";
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 !== (192 & e[1])) return (t.lastNeed = 1), "\ufffd";
              if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
                return (t.lastNeed = 2), "\ufffd";
            }
          })(this, t);
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function u(t, e) {
        if ((t.length - e) % 2 === 0) {
          var r = t.toString("utf16le", e);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function h(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, r);
        }
        return e;
      }
      function c(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - r));
      }
      function l(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function f(t) {
        return t.toString(this.encoding);
      }
      function d(t) {
        return t && t.length ? this.write(t) : "";
      }
      (e.I = s),
        (s.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, r;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < t.length
            ? e
              ? e + this.text(t, r)
              : this.text(t, r)
            : e || "";
        }),
        (s.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "\ufffd" : e;
        }),
        (s.prototype.text = function (t, e) {
          var r = (function (t, e, r) {
            var n = e.length - 1;
            if (n < r) return 0;
            var i = o(e[n]);
            if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
            if (--n < r || -2 === i) return 0;
            if (((i = o(e[n])), i >= 0))
              return i > 0 && (t.lastNeed = i - 2), i;
            if (--n < r || -2 === i) return 0;
            if (((i = o(e[n])), i >= 0))
              return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = r;
          var n = t.length - (r - this.lastNeed);
          return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
        }),
        (s.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
  },
]);
