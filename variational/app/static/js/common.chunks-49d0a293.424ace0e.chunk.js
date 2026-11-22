/*! For license information please see common.chunks-49d0a293.424ace0e.chunk.js.LICENSE.txt */
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [1161],
  {
    975: (e, t, r) => {
      "use strict";
      r.d(t, { Kq: () => d });
      var n = r(51722),
        i = r(83238);
      const s = (e, t) => {
          const r = e._$AN;
          if (void 0 === r) return !1;
          for (const i of r) {
            var n;
            null !== (n = i._$AO) && void 0 !== n && n.call(i, t, !1), s(i, t);
          }
          return !0;
        },
        o = (e) => {
          let t, r;
          do {
            var n;
            if (void 0 === (t = e._$AM)) break;
            (r = t._$AN), r.delete(e), (e = t);
          } while (0 === (null === (n = r) || void 0 === n ? void 0 : n.size));
        },
        a = (e) => {
          for (let t; (t = e._$AM); e = t) {
            let r = t._$AN;
            if (void 0 === r) t._$AN = r = new Set();
            else if (r.has(e)) break;
            r.add(e), u(t);
          }
        };
      function c(e) {
        void 0 !== this._$AN
          ? (o(this), (this._$AM = e), a(this))
          : (this._$AM = e);
      }
      function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const n = this._$AH,
          i = this._$AN;
        if (void 0 !== i && 0 !== i.size)
          if (t)
            if (Array.isArray(n))
              for (let a = r; a < n.length; a++) s(n[a], !1), o(n[a]);
            else null != n && (s(n, !1), o(n));
          else s(this, e);
      }
      const u = (e) => {
        var t, r;
        e.type == i.OA.CHILD &&
          ((null !== (t = e._$AP) && void 0 !== t) || (e._$AP = f),
          (null !== (r = e._$AQ) && void 0 !== r) || (e._$AQ = c));
      };
      class d extends i.WL {
        constructor() {
          super(...arguments), (this._$AN = void 0);
        }
        _$AT(e, t, r) {
          super._$AT(e, t, r), a(this), (this.isConnected = e._$AU);
        }
        _$AO(e) {
          var t, r;
          let n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          e !== this.isConnected &&
            ((this.isConnected = e),
            e
              ? null === (t = this.reconnected) || void 0 === t || t.call(this)
              : null === (r = this.disconnected) ||
                void 0 === r ||
                r.call(this)),
            n && (s(this, e), o(this));
        }
        setValue(e) {
          if ((0, n.Rt)(this._$Ct)) this._$Ct._$AI(e, this);
          else {
            const t = [...this._$Ct._$AH];
            (t[this._$Ci] = e), this._$Ct._$AI(t, this, 0);
          }
        }
        disconnected() {}
        reconnected() {}
      }
    },
    2485: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => Me });
      var n,
        i,
        s = 9e15,
        o = 1e9,
        a = "0123456789abcdef",
        c =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        f =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        u = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -s,
          maxE: s,
          crypto: !1,
        },
        d = !0,
        h = "[DecimalError] ",
        l = h + "Invalid argument: ",
        p = h + "Precision limit exceeded",
        b = h + "crypto unavailable",
        g = "[object Decimal]",
        y = Math.floor,
        m = Math.pow,
        w = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        v = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        A = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        E = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        x = 1e7,
        _ = c.length - 1,
        B = f.length - 1,
        S = { toStringTag: g };
      function H(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          s = "",
          o = e[0];
        if (i > 0) {
          for (s += o, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + "").length) && (s += D(r)), (s += n);
          (r = 7 - (n = (o = e[t]) + "").length) && (s += D(r));
        } else if (0 === o) return "0";
        for (; o % 10 === 0; ) o /= 10;
        return s + o;
      }
      function C(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(l + e);
      }
      function T(e, t, r, n) {
        var i, s, o, a;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (s = m(10, 7 - t)),
          (a = e[i] % s | 0),
          null == n
            ? t < 3
              ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                (o =
                  (r < 4 && 99999 == a) ||
                  (r > 3 && 49999 == a) ||
                  5e4 == a ||
                  0 == a))
              : (o =
                  (((r < 4 && a + 1 == s) || (r > 3 && a + 1 == s / 2)) &&
                    ((e[i + 1] / s / 100) | 0) == m(10, t - 2) - 1) ||
                  ((a == s / 2 || 0 == a) && 0 == ((e[i + 1] / s / 100) | 0)))
            : t < 4
            ? (0 == t
                ? (a = (a / 1e3) | 0)
                : 1 == t
                ? (a = (a / 100) | 0)
                : 2 == t && (a = (a / 10) | 0),
              (o = ((n || r < 4) && 9999 == a) || (!n && r > 3 && 4999 == a)))
            : (o =
                (((n || r < 4) && a + 1 == s) ||
                  (!n && r > 3 && a + 1 == s / 2)) &&
                ((e[i + 1] / s / 1e3) | 0) == m(10, t - 3) - 1),
          o
        );
      }
      function P(e, t, r) {
        for (var n, i, s = [0], o = 0, c = e.length; o < c; ) {
          for (i = s.length; i--; ) s[i] *= t;
          for (s[0] += a.indexOf(e.charAt(o++)), n = 0; n < s.length; n++)
            s[n] > r - 1 &&
              (void 0 === s[n + 1] && (s[n + 1] = 0),
              (s[n + 1] += (s[n] / r) | 0),
              (s[n] %= r));
        }
        return s.reverse();
      }
      (S.absoluteValue = S.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), N(e);
        }),
        (S.ceil = function () {
          return N(new this.constructor(this), this.e + 1, 2);
        }),
        (S.clampedTo = S.clamp =
          function (e, t) {
            var r = this,
              n = r.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s))
              return new n(NaN);
            if (e.gt(t)) throw Error(l + t);
            return r.cmp(e) < 0 ? e : r.cmp(t) > 0 ? t : new n(r);
          }),
        (S.comparedTo = S.cmp =
          function (e) {
            var t,
              r,
              n,
              i,
              s = this,
              o = s.d,
              a = (e = new s.constructor(e)).d,
              c = s.s,
              f = e.s;
            if (!o || !a)
              return c && f
                ? c !== f
                  ? c
                  : o === a
                  ? 0
                  : !o ^ (c < 0)
                  ? 1
                  : -1
                : NaN;
            if (!o[0] || !a[0]) return o[0] ? c : a[0] ? -f : 0;
            if (c !== f) return c;
            if (s.e !== e.e) return (s.e > e.e) ^ (c < 0) ? 1 : -1;
            for (t = 0, r = (n = o.length) < (i = a.length) ? n : i; t < r; ++t)
              if (o[t] !== a[t]) return (o[t] > a[t]) ^ (c < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (c < 0) ? 1 : -1;
          }),
        (S.cosine = S.cos =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.d
              ? r.d[0]
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r, n, i;
                    if (t.isZero()) return t;
                    (n = t.d.length),
                      n < 32
                        ? (i = (1 / Z(4, (r = Math.ceil(n / 3)))).toString())
                        : ((r = 16), (i = "2.3283064365386962890625e-10"));
                    (e.precision += r), (t = K(e, 1, t.times(i), new e(1)));
                    for (var s = r; s--; ) {
                      var o = t.times(t);
                      t = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (e.precision -= r), t;
                  })(n, W(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  N(2 == i || 3 == i ? r.neg() : r, e, t, !0))
                : new n(1)
              : new n(NaN);
          }),
        (S.cubeRoot = S.cbrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              o,
              a,
              c,
              f,
              u = this,
              h = u.constructor;
            if (!u.isFinite() || u.isZero()) return new h(u);
            for (
              d = !1,
                (s = u.s * m(u.s * u, 1 / 3)) && Math.abs(s) != 1 / 0
                  ? (n = new h(s.toString()))
                  : ((r = H(u.d)),
                    (s = ((e = u.e) - r.length + 1) % 3) &&
                      (r += 1 == s || -2 == s ? "0" : "00"),
                    (s = m(r, 1 / 3)),
                    (e = y((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((n = new h(
                      (r =
                        s == 1 / 0
                          ? "5e" + e
                          : (r = s.toExponential()).slice(
                              0,
                              r.indexOf("e") + 1
                            ) + e)
                    )).s = u.s)),
                o = (e = h.precision) + 3;
              ;

            )
              if (
                ((f = (c = (a = n).times(a).times(a)).plus(u)),
                (n = I(f.plus(u).times(a), f.plus(c), o + 2, 1)),
                H(a.d).slice(0, o) === (r = H(n.d)).slice(0, o))
              ) {
                if (
                  "9999" != (r = r.slice(o - 3, o + 1)) &&
                  (i || "4999" != r)
                ) {
                  (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                    (N(n, e + 1, 1), (t = !n.times(n).times(n).eq(u)));
                  break;
                }
                if (!i && (N(a, e + 1, 0), a.times(a).times(a).eq(u))) {
                  n = a;
                  break;
                }
                (o += 4), (i = 1);
              }
            return (d = !0), N(n, e, h.rounding, t);
          }),
        (S.decimalPlaces = S.dp =
          function () {
            var e,
              t = this.d,
              r = NaN;
            if (t) {
              if (((r = 7 * ((e = t.length - 1) - y(this.e / 7))), (e = t[e])))
                for (; e % 10 == 0; e /= 10) r--;
              r < 0 && (r = 0);
            }
            return r;
          }),
        (S.dividedBy = S.div =
          function (e) {
            return I(this, new this.constructor(e));
          }),
        (S.dividedToIntegerBy = S.divToInt =
          function (e) {
            var t = this.constructor;
            return N(I(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (S.equals = S.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (S.floor = function () {
          return N(new this.constructor(this), this.e + 1, 3);
        }),
        (S.greaterThan = S.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (S.greaterThanOrEqualTo = S.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (S.hyperbolicCosine = S.cosh =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s = this,
              o = s.constructor,
              a = new o(1);
            if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return a;
            (r = o.precision),
              (n = o.rounding),
              (o.precision = r + Math.max(s.e, s.sd()) + 4),
              (o.rounding = 1),
              (i = s.d.length) < 32
                ? (t = (1 / Z(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (s = K(o, 1, s.times(t), new o(1), !0));
            for (var c, f = e, u = new o(8); f--; )
              (c = s.times(s)), (s = a.minus(c.times(u.minus(c.times(u)))));
            return N(s, (o.precision = r), (o.rounding = n), !0);
          }),
        (S.hyperbolicSine = S.sinh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
              ((t = s.precision),
              (r = s.rounding),
              (s.precision = t + Math.max(i.e, i.sd()) + 4),
              (s.rounding = 1),
              (n = i.d.length) < 3)
            )
              i = K(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e),
                (i = K(s, 2, (i = i.times(1 / Z(5, e))), i, !0));
              for (var o, a = new s(5), c = new s(16), f = new s(20); e--; )
                (o = i.times(i)),
                  (i = i.times(a.plus(o.times(c.times(o).plus(f)))));
            }
            return (s.precision = t), (s.rounding = r), N(i, t, r, !0);
          }),
        (S.hyperbolicTangent = S.tanh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 7),
                  (n.rounding = 1),
                  I(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
              : new n(r.s);
          }),
        (S.inverseCosine = S.acos =
          function () {
            var e = this,
              t = e.constructor,
              r = e.abs().cmp(1),
              n = t.precision,
              i = t.rounding;
            return -1 !== r
              ? 0 === r
                ? e.isNeg()
                  ? U(t, n, i)
                  : new t(0)
                : new t(NaN)
              : e.isZero()
              ? U(t, n + 4, i).times(0.5)
              : ((t.precision = n + 6),
                (t.rounding = 1),
                (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                (t.precision = n),
                (t.rounding = i),
                e.times(2));
          }),
        (S.inverseHyperbolicCosine = S.acosh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.lte(1)
              ? new n(r.eq(1) ? 0 : NaN)
              : r.isFinite()
              ? ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                (n.rounding = 1),
                (d = !1),
                (r = r.times(r).minus(1).sqrt().plus(r)),
                (d = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln())
              : new n(r);
          }),
        (S.inverseHyperbolicSine = S.asinh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return !r.isFinite() || r.isZero()
              ? new n(r)
              : ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                (n.rounding = 1),
                (d = !1),
                (r = r.times(r).plus(1).sqrt().plus(r)),
                (d = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln());
          }),
        (S.inverseHyperbolicTangent = S.atanh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = s.precision),
                  (t = s.rounding),
                  (n = i.sd()),
                  Math.max(n, e) < 2 * -i.e - 1
                    ? N(new s(i), e, t, !0)
                    : ((s.precision = r = n - i.e),
                      (i = I(i.plus(1), new s(1).minus(i), r + e, 1)),
                      (s.precision = e + 4),
                      (s.rounding = 1),
                      (i = i.ln()),
                      (s.precision = e),
                      (s.rounding = t),
                      i.times(0.5)))
              : new s(NaN);
          }),
        (S.inverseSine = S.asin =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isZero()
              ? new s(i)
              : ((t = i.abs().cmp(1)),
                (r = s.precision),
                (n = s.rounding),
                -1 !== t
                  ? 0 === t
                    ? (((e = U(s, r + 4, n).times(0.5)).s = i.s), e)
                    : new s(NaN)
                  : ((s.precision = r + 6),
                    (s.rounding = 1),
                    (i = i
                      .div(new s(1).minus(i.times(i)).sqrt().plus(1))
                      .atan()),
                    (s.precision = r),
                    (s.rounding = n),
                    i.times(2)));
          }),
        (S.inverseTangent = S.atan =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              o,
              a,
              c,
              f = this,
              u = f.constructor,
              h = u.precision,
              l = u.rounding;
            if (f.isFinite()) {
              if (f.isZero()) return new u(f);
              if (f.abs().eq(1) && h + 4 <= B)
                return ((o = U(u, h + 4, l).times(0.25)).s = f.s), o;
            } else {
              if (!f.s) return new u(NaN);
              if (h + 4 <= B)
                return ((o = U(u, h + 4, l).times(0.5)).s = f.s), o;
            }
            for (
              u.precision = a = h + 10,
                u.rounding = 1,
                e = r = Math.min(28, (a / 7 + 2) | 0);
              e;
              --e
            )
              f = f.div(f.times(f).plus(1).sqrt().plus(1));
            for (
              d = !1,
                t = Math.ceil(a / 7),
                n = 1,
                c = f.times(f),
                o = new u(f),
                i = f;
              -1 !== e;

            )
              if (
                ((i = i.times(c)),
                (s = o.minus(i.div((n += 2)))),
                (i = i.times(c)),
                void 0 !== (o = s.plus(i.div((n += 2)))).d[t])
              )
                for (e = t; o.d[e] === s.d[e] && e--; );
            return (
              r && (o = o.times(2 << (r - 1))),
              (d = !0),
              N(o, (u.precision = h), (u.rounding = l), !0)
            );
          }),
        (S.isFinite = function () {
          return !!this.d;
        }),
        (S.isInteger = S.isInt =
          function () {
            return !!this.d && y(this.e / 7) > this.d.length - 2;
          }),
        (S.isNaN = function () {
          return !this.s;
        }),
        (S.isNegative = S.isNeg =
          function () {
            return this.s < 0;
          }),
        (S.isPositive = S.isPos =
          function () {
            return this.s > 0;
          }),
        (S.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (S.lessThan = S.lt =
          function (e) {
            return this.cmp(e) < 0;
          }),
        (S.lessThanOrEqualTo = S.lte =
          function (e) {
            return this.cmp(e) < 1;
          }),
        (S.logarithm = S.log =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              c,
              f = this,
              u = f.constructor,
              h = u.precision,
              l = u.rounding;
            if (null == e) (e = new u(10)), (t = !0);
            else {
              if (((r = (e = new u(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
                return new u(NaN);
              t = e.eq(10);
            }
            if (((r = f.d), f.s < 0 || !r || !r[0] || f.eq(1)))
              return new u(
                r && !r[0] ? -1 / 0 : 1 != f.s ? NaN : r ? 0 : 1 / 0
              );
            if (t)
              if (r.length > 1) s = !0;
              else {
                for (i = r[0]; i % 10 === 0; ) i /= 10;
                s = 1 !== i;
              }
            if (
              ((d = !1),
              (o = q(f, (a = h + 5))),
              (n = t ? R(u, a + 10) : q(e, a)),
              T((c = I(o, n, a, 1)).d, (i = h), l))
            )
              do {
                if (
                  ((o = q(f, (a += 10))),
                  (n = t ? R(u, a + 10) : q(e, a)),
                  (c = I(o, n, a, 1)),
                  !s)
                ) {
                  +H(c.d).slice(i + 1, i + 15) + 1 == 1e14 &&
                    (c = N(c, h + 1, 0));
                  break;
                }
              } while (T(c.d, (i += 10), l));
            return (d = !0), N(c, h, l);
          }),
        (S.minus = S.sub =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              c,
              f,
              u,
              h,
              l,
              p = this,
              b = p.constructor;
            if (((e = new b(e)), !p.d || !e.d))
              return (
                p.s && e.s
                  ? p.d
                    ? (e.s = -e.s)
                    : (e = new b(e.d || p.s !== e.s ? p : NaN))
                  : (e = new b(NaN)),
                e
              );
            if (p.s != e.s) return (e.s = -e.s), p.plus(e);
            if (
              ((f = p.d),
              (l = e.d),
              (a = b.precision),
              (c = b.rounding),
              !f[0] || !l[0])
            ) {
              if (l[0]) e.s = -e.s;
              else {
                if (!f[0]) return new b(3 === c ? -0 : 0);
                e = new b(p);
              }
              return d ? N(e, a, c) : e;
            }
            if (
              ((r = y(e.e / 7)), (u = y(p.e / 7)), (f = f.slice()), (s = u - r))
            ) {
              for (
                (h = s < 0)
                  ? ((t = f), (s = -s), (o = l.length))
                  : ((t = l), (r = u), (o = f.length)),
                  s > (n = Math.max(Math.ceil(a / 7), o) + 2) &&
                    ((s = n), (t.length = 1)),
                  t.reverse(),
                  n = s;
                n--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (h = (n = f.length) < (o = l.length)) && (o = n), n = 0;
                n < o;
                n++
              )
                if (f[n] != l[n]) {
                  h = f[n] < l[n];
                  break;
                }
              s = 0;
            }
            for (
              h && ((t = f), (f = l), (l = t), (e.s = -e.s)),
                o = f.length,
                n = l.length - o;
              n > 0;
              --n
            )
              f[o++] = 0;
            for (n = l.length; n > s; ) {
              if (f[--n] < l[n]) {
                for (i = n; i && 0 === f[--i]; ) f[i] = x - 1;
                --f[i], (f[n] += x);
              }
              f[n] -= l[n];
            }
            for (; 0 === f[--o]; ) f.pop();
            for (; 0 === f[0]; f.shift()) --r;
            return f[0]
              ? ((e.d = f), (e.e = L(f, r)), d ? N(e, a, c) : e)
              : new b(3 === c ? -0 : 0);
          }),
        (S.modulo = S.mod =
          function (e) {
            var t,
              r = this,
              n = r.constructor;
            return (
              (e = new n(e)),
              !r.d || !e.s || (e.d && !e.d[0])
                ? new n(NaN)
                : !e.d || (r.d && !r.d[0])
                ? N(new n(r), n.precision, n.rounding)
                : ((d = !1),
                  9 == n.modulo
                    ? ((t = I(r, e.abs(), 0, 3, 1)).s *= e.s)
                    : (t = I(r, e, 0, n.modulo, 1)),
                  (t = t.times(e)),
                  (d = !0),
                  r.minus(t))
            );
          }),
        (S.naturalExponential = S.exp =
          function () {
            return $(this);
          }),
        (S.naturalLogarithm = S.ln =
          function () {
            return q(this);
          }),
        (S.negated = S.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), N(e);
          }),
        (S.plus = S.add =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              c,
              f,
              u,
              h = this,
              l = h.constructor;
            if (((e = new l(e)), !h.d || !e.d))
              return (
                h.s && e.s
                  ? h.d || (e = new l(e.d || h.s === e.s ? h : NaN))
                  : (e = new l(NaN)),
                e
              );
            if (h.s != e.s) return (e.s = -e.s), h.minus(e);
            if (
              ((f = h.d),
              (u = e.d),
              (a = l.precision),
              (c = l.rounding),
              !f[0] || !u[0])
            )
              return u[0] || (e = new l(h)), d ? N(e, a, c) : e;
            if (
              ((s = y(h.e / 7)), (n = y(e.e / 7)), (f = f.slice()), (i = s - n))
            ) {
              for (
                i < 0
                  ? ((r = f), (i = -i), (o = u.length))
                  : ((r = u), (n = s), (o = f.length)),
                  i > (o = (s = Math.ceil(a / 7)) > o ? s + 1 : o + 1) &&
                    ((i = o), (r.length = 1)),
                  r.reverse();
                i--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              (o = f.length) - (i = u.length) < 0 &&
                ((i = o), (r = u), (u = f), (f = r)),
                t = 0;
              i;

            )
              (t = ((f[--i] = f[i] + u[i] + t) / x) | 0), (f[i] %= x);
            for (t && (f.unshift(t), ++n), o = f.length; 0 == f[--o]; ) f.pop();
            return (e.d = f), (e.e = L(f, n)), d ? N(e, a, c) : e;
          }),
        (S.precision = S.sd =
          function (e) {
            var t,
              r = this;
            if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e)
              throw Error(l + e);
            return (
              r.d
                ? ((t = k(r.d)), e && r.e + 1 > t && (t = r.e + 1))
                : (t = NaN),
              t
            );
          }),
        (S.round = function () {
          var e = this,
            t = e.constructor;
          return N(new t(e), e.e + 1, t.rounding);
        }),
        (S.sine = S.sin =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r,
                      n = t.d.length;
                    if (n < 3) return t.isZero() ? t : K(e, 2, t, t);
                    (r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
                      (t = t.times(1 / Z(5, r))),
                      (t = K(e, 2, t, t));
                    for (
                      var i, s = new e(5), o = new e(16), a = new e(20);
                      r--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(o.times(i).minus(a)))));
                    return t;
                  })(n, W(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  N(i > 2 ? r.neg() : r, e, t, !0))
              : new n(NaN);
          }),
        (S.squareRoot = S.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              o = this,
              a = o.d,
              c = o.e,
              f = o.s,
              u = o.constructor;
            if (1 !== f || !a || !a[0])
              return new u(!f || (f < 0 && (!a || a[0])) ? NaN : a ? o : 1 / 0);
            for (
              d = !1,
                0 == (f = Math.sqrt(+o)) || f == 1 / 0
                  ? (((t = H(a)).length + c) % 2 == 0 && (t += "0"),
                    (f = Math.sqrt(t)),
                    (c = y((c + 1) / 2) - (c < 0 || c % 2)),
                    (n = new u(
                      (t =
                        f == 1 / 0
                          ? "5e" + c
                          : (t = f.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1
                            ) + c)
                    )))
                  : (n = new u(f.toString())),
                r = (c = u.precision) + 3;
              ;

            )
              if (
                ((n = (s = n).plus(I(o, s, r + 2, 1)).times(0.5)),
                H(s.d).slice(0, r) === (t = H(n.d)).slice(0, r))
              ) {
                if (
                  "9999" != (t = t.slice(r - 3, r + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (N(n, c + 1, 1), (e = !n.times(n).eq(o)));
                  break;
                }
                if (!i && (N(s, c + 1, 0), s.times(s).eq(o))) {
                  n = s;
                  break;
                }
                (r += 4), (i = 1);
              }
            return (d = !0), N(n, c, u.rounding, e);
          }),
        (S.tangent = S.tan =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 10),
                  (n.rounding = 1),
                  ((r = r.sin()).s = 1),
                  (r = I(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                  (n.precision = e),
                  (n.rounding = t),
                  N(2 == i || 4 == i ? r.neg() : r, e, t, !0))
              : new n(NaN);
          }),
        (S.times = S.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              c,
              f,
              u = this,
              h = u.constructor,
              l = u.d,
              p = (e = new h(e)).d;
            if (((e.s *= u.s), !l || !l[0] || !p || !p[0]))
              return new h(
                !e.s || (l && !l[0] && !p) || (p && !p[0] && !l)
                  ? NaN
                  : l && p
                  ? 0 * e.s
                  : e.s / 0
              );
            for (
              r = y(u.e / 7) + y(e.e / 7),
                (c = l.length) < (f = p.length) &&
                  ((s = l), (l = p), (p = s), (o = c), (c = f), (f = o)),
                s = [],
                n = o = c + f;
              n--;

            )
              s.push(0);
            for (n = f; --n >= 0; ) {
              for (t = 0, i = c + n; i > n; )
                (a = s[i] + p[n] * l[i - n - 1] + t),
                  (s[i--] = a % x | 0),
                  (t = (a / x) | 0);
              s[i] = (s[i] + t) % x | 0;
            }
            for (; !s[--o]; ) s.pop();
            return (
              t ? ++r : s.shift(),
              (e.d = s),
              (e.e = L(s, r)),
              d ? N(e, h.precision, h.rounding) : e
            );
          }),
        (S.toBinary = function (e, t) {
          return Y(this, 2, e, t);
        }),
        (S.toDecimalPlaces = S.toDP =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return (
              (r = new n(r)),
              void 0 === e
                ? r
                : (C(e, 0, o),
                  void 0 === t ? (t = n.rounding) : C(t, 0, 8),
                  N(r, e + r.e + 1, t))
            );
          }),
        (S.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = O(n, !0))
              : (C(e, 0, o),
                void 0 === t ? (t = i.rounding) : C(t, 0, 8),
                (r = O((n = N(new i(n), e + 1, t)), !0, e + 1))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (S.toFixed = function (e, t) {
          var r,
            n,
            i = this,
            s = i.constructor;
          return (
            void 0 === e
              ? (r = O(i))
              : (C(e, 0, o),
                void 0 === t ? (t = s.rounding) : C(t, 0, 8),
                (r = O((n = N(new s(i), e + i.e + 1, t)), !1, e + n.e + 1))),
            i.isNeg() && !i.isZero() ? "-" + r : r
          );
        }),
        (S.toFraction = function (e) {
          var t,
            r,
            n,
            i,
            s,
            o,
            a,
            c,
            f,
            u,
            h,
            p,
            b = this,
            g = b.d,
            y = b.constructor;
          if (!g) return new y(b);
          if (
            ((f = r = new y(1)),
            (n = c = new y(0)),
            (o = (s = (t = new y(n)).e = k(g) - b.e - 1) % 7),
            (t.d[0] = m(10, o < 0 ? 7 + o : o)),
            null == e)
          )
            e = s > 0 ? t : f;
          else {
            if (!(a = new y(e)).isInt() || a.lt(f)) throw Error(l + a);
            e = a.gt(t) ? (s > 0 ? t : f) : a;
          }
          for (
            d = !1,
              a = new y(H(g)),
              u = y.precision,
              y.precision = s = 7 * g.length * 2;
            (h = I(a, t, 0, 1, 1)), 1 != (i = r.plus(h.times(n))).cmp(e);

          )
            (r = n),
              (n = i),
              (i = f),
              (f = c.plus(h.times(i))),
              (c = i),
              (i = t),
              (t = a.minus(h.times(i))),
              (a = i);
          return (
            (i = I(e.minus(r), n, 0, 1, 1)),
            (c = c.plus(i.times(f))),
            (r = r.plus(i.times(n))),
            (c.s = f.s = b.s),
            (p =
              I(f, n, s, 1).minus(b).abs().cmp(I(c, r, s, 1).minus(b).abs()) < 1
                ? [f, n]
                : [c, r]),
            (y.precision = u),
            (d = !0),
            p
          );
        }),
        (S.toHexadecimal = S.toHex =
          function (e, t) {
            return Y(this, 16, e, t);
          }),
        (S.toNearest = function (e, t) {
          var r = this,
            n = r.constructor;
          if (((r = new n(r)), null == e)) {
            if (!r.d) return r;
            (e = new n(1)), (t = n.rounding);
          } else {
            if (
              ((e = new n(e)),
              void 0 === t ? (t = n.rounding) : C(t, 0, 8),
              !r.d)
            )
              return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e;
          }
          return (
            e.d[0]
              ? ((d = !1), (r = I(r, e, 0, t, 1).times(e)), (d = !0), N(r))
              : ((e.s = r.s), (r = e)),
            r
          );
        }),
        (S.toNumber = function () {
          return +this;
        }),
        (S.toOctal = function (e, t) {
          return Y(this, 8, e, t);
        }),
        (S.toPower = S.pow =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a = this,
              c = a.constructor,
              f = +(e = new c(e));
            if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new c(m(+a, f));
            if ((a = new c(a)).eq(1)) return a;
            if (((n = c.precision), (s = c.rounding), e.eq(1)))
              return N(a, n, s);
            if (
              (t = y(e.e / 7)) >= e.d.length - 1 &&
              (r = f < 0 ? -f : f) <= 9007199254740991
            )
              return (
                (i = M(c, a, r, n)), e.s < 0 ? new c(1).div(i) : N(i, n, s)
              );
            if ((o = a.s) < 0) {
              if (t < e.d.length - 1) return new c(NaN);
              if (
                (0 == (1 & e.d[t]) && (o = 1),
                0 == a.e && 1 == a.d[0] && 1 == a.d.length)
              )
                return (a.s = o), a;
            }
            return (t =
              0 != (r = m(+a, f)) && isFinite(r)
                ? new c(r + "").e
                : y(f * (Math.log("0." + H(a.d)) / Math.LN10 + a.e + 1))) >
              c.maxE + 1 || t < c.minE - 1
              ? new c(t > 0 ? o / 0 : 0)
              : ((d = !1),
                (c.rounding = a.s = 1),
                (r = Math.min(12, (t + "").length)),
                (i = $(e.times(q(a, n + r)), n)).d &&
                  T((i = N(i, n + 5, 1)).d, n, s) &&
                  ((t = n + 10),
                  +H((i = N($(e.times(q(a, t + r)), t), t + 5, 1)).d).slice(
                    n + 1,
                    n + 15
                  ) +
                    1 ==
                    1e14 && (i = N(i, n + 1, 0))),
                (i.s = o),
                (d = !0),
                (c.rounding = s),
                N(i, n, s));
          }),
        (S.toPrecision = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = O(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
              : (C(e, 1, o),
                void 0 === t ? (t = i.rounding) : C(t, 0, 8),
                (r = O(
                  (n = N(new i(n), e, t)),
                  e <= n.e || n.e <= i.toExpNeg,
                  e
                ))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (S.toSignificantDigits = S.toSD =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (C(e, 1, o), void 0 === t ? (t = r.rounding) : C(t, 0, 8)),
              N(new r(this), e, t)
            );
          }),
        (S.toString = function () {
          var e = this,
            t = e.constructor,
            r = O(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
          return e.isNeg() && !e.isZero() ? "-" + r : r;
        }),
        (S.truncated = S.trunc =
          function () {
            return N(new this.constructor(this), this.e + 1, 1);
          }),
        (S.valueOf = S.toJSON =
          function () {
            var e = this,
              t = e.constructor,
              r = O(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
            return e.isNeg() ? "-" + r : r;
          });
      var I = (function () {
        function e(e, t, r) {
          var n,
            i = 0,
            s = e.length;
          for (e = e.slice(); s--; )
            (n = e[s] * t + i), (e[s] = n % r | 0), (i = (n / r) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, r, n) {
          var i, s;
          if (r != n) s = r > n ? 1 : -1;
          else
            for (i = s = 0; i < r; i++)
              if (e[i] != t[i]) {
                s = e[i] > t[i] ? 1 : -1;
                break;
              }
          return s;
        }
        function r(e, t, r, n) {
          for (var i = 0; r--; )
            (e[r] -= i),
              (i = e[r] < t[r] ? 1 : 0),
              (e[r] = i * n + e[r] - t[r]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, s, o, a, c, f) {
          var u,
            d,
            h,
            l,
            p,
            b,
            g,
            m,
            w,
            v,
            A,
            E,
            _,
            B,
            S,
            H,
            C,
            T,
            P,
            I,
            O = i.constructor,
            L = i.s == s.s ? 1 : -1,
            R = i.d,
            U = s.d;
          if (!R || !R[0] || !U || !U[0])
            return new O(
              i.s && s.s && (R ? !U || R[0] != U[0] : U)
                ? (R && 0 == R[0]) || !U
                  ? 0 * L
                  : L / 0
                : NaN
            );
          for (
            f
              ? ((p = 1), (d = i.e - s.e))
              : ((f = x), (p = 7), (d = y(i.e / p) - y(s.e / p))),
              P = U.length,
              C = R.length,
              v = (w = new O(L)).d = [],
              h = 0;
            U[h] == (R[h] || 0);
            h++
          );
          if (
            (U[h] > (R[h] || 0) && d--,
            null == o
              ? ((B = o = O.precision), (a = O.rounding))
              : (B = c ? o + (i.e - s.e) + 1 : o),
            B < 0)
          )
            v.push(1), (b = !0);
          else {
            if (((B = (B / p + 2) | 0), (h = 0), 1 == P)) {
              for (l = 0, U = U[0], B++; (h < C || l) && B--; h++)
                (S = l * f + (R[h] || 0)),
                  (v[h] = (S / U) | 0),
                  (l = S % U | 0);
              b = l || h < C;
            } else {
              for (
                (l = (f / (U[0] + 1)) | 0) > 1 &&
                  ((U = e(U, l, f)),
                  (R = e(R, l, f)),
                  (P = U.length),
                  (C = R.length)),
                  H = P,
                  E = (A = R.slice(0, P)).length;
                E < P;

              )
                A[E++] = 0;
              (I = U.slice()).unshift(0), (T = U[0]), U[1] >= f / 2 && ++T;
              do {
                (l = 0),
                  (u = t(U, A, P, E)) < 0
                    ? ((_ = A[0]),
                      P != E && (_ = _ * f + (A[1] || 0)),
                      (l = (_ / T) | 0) > 1
                        ? (l >= f && (l = f - 1),
                          1 ==
                            (u = t(
                              (g = e(U, l, f)),
                              A,
                              (m = g.length),
                              (E = A.length)
                            )) && (l--, r(g, P < m ? I : U, m, f)))
                        : (0 == l && (u = l = 1), (g = U.slice())),
                      (m = g.length) < E && g.unshift(0),
                      r(A, g, E, f),
                      -1 == u &&
                        (u = t(U, A, P, (E = A.length))) < 1 &&
                        (l++, r(A, P < E ? I : U, E, f)),
                      (E = A.length))
                    : 0 === u && (l++, (A = [0])),
                  (v[h++] = l),
                  u && A[0] ? (A[E++] = R[H] || 0) : ((A = [R[H]]), (E = 1));
              } while ((H++ < C || void 0 !== A[0]) && B--);
              b = void 0 !== A[0];
            }
            v[0] || v.shift();
          }
          if (1 == p) (w.e = d), (n = b);
          else {
            for (h = 1, l = v[0]; l >= 10; l /= 10) h++;
            (w.e = h + d * p - 1), N(w, c ? o + w.e + 1 : o, a, b);
          }
          return w;
        };
      })();
      function N(e, t, r, n) {
        var i,
          s,
          o,
          a,
          c,
          f,
          u,
          h,
          l,
          p = e.constructor;
        e: if (null != t) {
          if (!(h = e.d)) return e;
          for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (o = t),
              (c = ((u = h[(l = 0)]) / m(10, i - o - 1)) % 10 | 0);
          else if ((l = Math.ceil((s + 1) / 7)) >= (a = h.length)) {
            if (!n) break e;
            for (; a++ <= l; ) h.push(0);
            (u = c = 0), (i = 1), (o = (s %= 7) - 7 + 1);
          } else {
            for (u = a = h[l], i = 1; a >= 10; a /= 10) i++;
            c =
              (o = (s %= 7) - 7 + i) < 0 ? 0 : (u / m(10, i - o - 1)) % 10 | 0;
          }
          if (
            ((n =
              n ||
              t < 0 ||
              void 0 !== h[l + 1] ||
              (o < 0 ? u : u % m(10, i - o - 1))),
            (f =
              r < 4
                ? (c || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : c > 5 ||
                  (5 == c &&
                    (4 == r ||
                      n ||
                      (6 == r &&
                        (s > 0 ? (o > 0 ? u / m(10, i - o) : 0) : h[l - 1]) %
                          10 &
                          1) ||
                      r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !h[0])
          )
            return (
              (h.length = 0),
              f
                ? ((t -= e.e + 1),
                  (h[0] = m(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (h[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((h.length = l), (a = 1), l--)
              : ((h.length = l + 1),
                (a = m(10, 7 - s)),
                (h[l] = o > 0 ? ((u / m(10, i - o)) % m(10, o) | 0) * a : 0)),
            f)
          )
            for (;;) {
              if (0 == l) {
                for (s = 1, o = h[0]; o >= 10; o /= 10) s++;
                for (o = h[0] += a, a = 1; o >= 10; o /= 10) a++;
                s != a && (e.e++, h[0] == x && (h[0] = 1));
                break;
              }
              if (((h[l] += a), h[l] != x)) break;
              (h[l--] = 0), (a = 1);
            }
          for (s = h.length; 0 === h[--s]; ) h.pop();
        }
        return (
          d &&
            (e.e > p.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < p.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function O(e, t, r) {
        if (!e.isFinite()) return z(e);
        var n,
          i = e.e,
          s = H(e.d),
          o = s.length;
        return (
          t
            ? (r && (n = r - o) > 0
                ? (s = s.charAt(0) + "." + s.slice(1) + D(n))
                : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
            ? ((s = "0." + D(-i - 1) + s), r && (n = r - o) > 0 && (s += D(n)))
            : i >= o
            ? ((s += D(i + 1 - o)),
              r && (n = r - i - 1) > 0 && (s = s + "." + D(n)))
            : ((n = i + 1) < o && (s = s.slice(0, n) + "." + s.slice(n)),
              r && (n = r - o) > 0 && (i + 1 === o && (s += "."), (s += D(n)))),
          s
        );
      }
      function L(e, t) {
        var r = e[0];
        for (t *= 7; r >= 10; r /= 10) t++;
        return t;
      }
      function R(e, t, r) {
        if (t > _) throw ((d = !0), r && (e.precision = r), Error(p));
        return N(new e(c), t, 1, !0);
      }
      function U(e, t, r) {
        if (t > B) throw Error(p);
        return N(new e(f), t, r, !0);
      }
      function k(e) {
        var t = e.length - 1,
          r = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) r--;
          for (t = e[0]; t >= 10; t /= 10) r++;
        }
        return r;
      }
      function D(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function M(e, t, r, n) {
        var i,
          s = new e(1),
          o = Math.ceil(n / 7 + 4);
        for (d = !1; ; ) {
          if (
            (r % 2 && X((s = s.times(t)).d, o) && (i = !0),
            0 === (r = y(r / 2)))
          ) {
            (r = s.d.length - 1), i && 0 === s.d[r] && ++s.d[r];
            break;
          }
          X((t = t.times(t)).d, o);
        }
        return (d = !0), s;
      }
      function F(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function j(e, t, r) {
        for (var n, i, s = new e(t[0]), o = 0; ++o < t.length; ) {
          if (!(i = new e(t[o])).s) {
            s = i;
            break;
          }
          ((n = s.cmp(i)) === r || (0 === n && s.s === r)) && (s = i);
        }
        return s;
      }
      function $(e, t) {
        var r,
          n,
          i,
          s,
          o,
          a,
          c,
          f = 0,
          u = 0,
          h = 0,
          l = e.constructor,
          p = l.rounding,
          b = l.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new l(
            e.d
              ? e.d[0]
                ? e.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : e.s
              ? e.s < 0
                ? 0
                : e
              : NaN
          );
        for (
          null == t ? ((d = !1), (c = b)) : (c = t), a = new l(0.03125);
          e.e > -2;

        )
          (e = e.times(a)), (h += 5);
        for (
          c += n = ((Math.log(m(2, h)) / Math.LN10) * 2 + 5) | 0,
            r = s = o = new l(1),
            l.precision = c;
          ;

        ) {
          if (
            ((s = N(s.times(e), c, 1)),
            (r = r.times(++u)),
            H((a = o.plus(I(s, r, c, 1))).d).slice(0, c) === H(o.d).slice(0, c))
          ) {
            for (i = h; i--; ) o = N(o.times(o), c, 1);
            if (null != t) return (l.precision = b), o;
            if (!(f < 3 && T(o.d, c - n, p, f)))
              return N(o, (l.precision = b), p, (d = !0));
            (l.precision = c += 10), (r = s = a = new l(1)), (u = 0), f++;
          }
          o = a;
        }
      }
      function q(e, t) {
        var r,
          n,
          i,
          s,
          o,
          a,
          c,
          f,
          u,
          h,
          l,
          p = 1,
          b = e,
          g = b.d,
          y = b.constructor,
          m = y.rounding,
          w = y.precision;
        if (b.s < 0 || !g || !g[0] || (!b.e && 1 == g[0] && 1 == g.length))
          return new y(g && !g[0] ? -1 / 0 : 1 != b.s ? NaN : g ? 0 : b);
        if (
          (null == t ? ((d = !1), (u = w)) : (u = t),
          (y.precision = u += 10),
          (n = (r = H(g)).charAt(0)),
          !(Math.abs((s = b.e)) < 15e14))
        )
          return (
            (f = R(y, u + 2, w).times(s + "")),
            (b = q(new y(n + "." + r.slice(1)), u - 10).plus(f)),
            (y.precision = w),
            null == t ? N(b, w, m, (d = !0)) : b
          );
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = H((b = b.times(e)).d)).charAt(0)), p++;
        for (
          s = b.e,
            n > 1
              ? ((b = new y("0." + r)), s++)
              : (b = new y(n + "." + r.slice(1))),
            h = b,
            c = o = b = I(b.minus(1), b.plus(1), u, 1),
            l = N(b.times(b), u, 1),
            i = 3;
          ;

        ) {
          if (
            ((o = N(o.times(l), u, 1)),
            H((f = c.plus(I(o, new y(i), u, 1))).d).slice(0, u) ===
              H(c.d).slice(0, u))
          ) {
            if (
              ((c = c.times(2)),
              0 !== s && (c = c.plus(R(y, u + 2, w).times(s + ""))),
              (c = I(c, new y(p), u, 1)),
              null != t)
            )
              return (y.precision = w), c;
            if (!T(c.d, u - 10, m, a))
              return N(c, (y.precision = w), m, (d = !0));
            (y.precision = u += 10),
              (f = o = b = I(h.minus(1), h.plus(1), u, 1)),
              (l = N(b.times(b), u, 1)),
              (i = a = 1);
          }
          (c = f), (i += 2);
        }
      }
      function z(e) {
        return String((e.s * e.s) / 0);
      }
      function V(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
          n++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = r = r - n - 1),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += "0";
          e.d.push(+t),
            d &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function G(e, t) {
        var r, n, i, s, o, a, c, f, u;
        if (t.indexOf("_") > -1) {
          if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), E.test(t)))
            return V(e, t);
        } else if ("Infinity" === t || "NaN" === t)
          return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
        if (v.test(t)) (r = 16), (t = t.toLowerCase());
        else if (w.test(t)) r = 2;
        else {
          if (!A.test(t)) throw Error(l + t);
          r = 8;
        }
        for (
          (s = t.search(/p/i)) > 0
            ? ((c = +t.slice(s + 1)), (t = t.substring(2, s)))
            : (t = t.slice(2)),
            o = (s = t.indexOf(".")) >= 0,
            n = e.constructor,
            o &&
              ((s = (a = (t = t.replace(".", "")).length) - s),
              (i = M(n, new n(r), s, 2 * s))),
            s = u = (f = P(t, r, x)).length - 1;
          0 === f[s];
          --s
        )
          f.pop();
        return s < 0
          ? new n(0 * e.s)
          : ((e.e = L(f, u)),
            (e.d = f),
            (d = !1),
            o && (e = I(e, i, 4 * a)),
            c && (e = e.times(Math.abs(c) < 54 ? m(2, c) : De.pow(2, c))),
            (d = !0),
            e);
      }
      function K(e, t, r, n, i) {
        var s,
          o,
          a,
          c,
          f = e.precision,
          u = Math.ceil(f / 7);
        for (d = !1, c = r.times(r), a = new e(n); ; ) {
          if (
            ((o = I(a.times(c), new e(t++ * t++), f, 1)),
            (a = i ? n.plus(o) : n.minus(o)),
            (n = I(o.times(c), new e(t++ * t++), f, 1)),
            void 0 !== (o = a.plus(n)).d[u])
          ) {
            for (s = u; o.d[s] === a.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = a), (a = n), (n = o), (o = s);
        }
        return (d = !0), (o.d.length = u + 1), o;
      }
      function Z(e, t) {
        for (var r = e; --t; ) r *= e;
        return r;
      }
      function W(e, t) {
        var r,
          n = t.s < 0,
          s = U(e, e.precision, 1),
          o = s.times(0.5);
        if ((t = t.abs()).lte(o)) return (i = n ? 4 : 1), t;
        if ((r = t.divToInt(s)).isZero()) i = n ? 3 : 2;
        else {
          if ((t = t.minus(r.times(s))).lte(o))
            return (i = F(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
          i = F(r) ? (n ? 1 : 4) : n ? 3 : 2;
        }
        return t.minus(s).abs();
      }
      function Y(e, t, r, i) {
        var s,
          c,
          f,
          u,
          d,
          h,
          l,
          p,
          b,
          g = e.constructor,
          y = void 0 !== r;
        if (
          (y
            ? (C(r, 1, o), void 0 === i ? (i = g.rounding) : C(i, 0, 8))
            : ((r = g.precision), (i = g.rounding)),
          e.isFinite())
        ) {
          for (
            y
              ? ((s = 2), 16 == t ? (r = 4 * r - 3) : 8 == t && (r = 3 * r - 2))
              : (s = t),
              (f = (l = O(e)).indexOf(".")) >= 0 &&
                ((l = l.replace(".", "")),
                ((b = new g(1)).e = l.length - f),
                (b.d = P(O(b), 10, s)),
                (b.e = b.d.length)),
              c = d = (p = P(l, 10, s)).length;
            0 == p[--d];

          )
            p.pop();
          if (p[0]) {
            if (
              (f < 0
                ? c--
                : (((e = new g(e)).d = p),
                  (e.e = c),
                  (p = (e = I(e, b, r, i, 0, s)).d),
                  (c = e.e),
                  (h = n)),
              (f = p[r]),
              (u = s / 2),
              (h = h || void 0 !== p[r + 1]),
              (h =
                i < 4
                  ? (void 0 !== f || h) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : f > u ||
                    (f === u &&
                      (4 === i ||
                        h ||
                        (6 === i && 1 & p[r - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (p.length = r),
              h)
            )
              for (; ++p[--r] > s - 1; ) (p[r] = 0), r || (++c, p.unshift(1));
            for (d = p.length; !p[d - 1]; --d);
            for (f = 0, l = ""; f < d; f++) l += a.charAt(p[f]);
            if (y) {
              if (d > 1)
                if (16 == t || 8 == t) {
                  for (f = 16 == t ? 4 : 3, --d; d % f; d++) l += "0";
                  for (d = (p = P(l, s, t)).length; !p[d - 1]; --d);
                  for (f = 1, l = "1."; f < d; f++) l += a.charAt(p[f]);
                } else l = l.charAt(0) + "." + l.slice(1);
              l = l + (c < 0 ? "p" : "p+") + c;
            } else if (c < 0) {
              for (; ++c; ) l = "0" + l;
              l = "0." + l;
            } else if (++c > d) for (c -= d; c--; ) l += "0";
            else c < d && (l = l.slice(0, c) + "." + l.slice(c));
          } else l = y ? "0p+0" : "0";
          l = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + l;
        } else l = z(e);
        return e.s < 0 ? "-" + l : l;
      }
      function X(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function Q(e) {
        return new this(e).abs();
      }
      function J(e) {
        return new this(e).acos();
      }
      function ee(e) {
        return new this(e).acosh();
      }
      function te(e, t) {
        return new this(e).plus(t);
      }
      function re(e) {
        return new this(e).asin();
      }
      function ne(e) {
        return new this(e).asinh();
      }
      function ie(e) {
        return new this(e).atan();
      }
      function se(e) {
        return new this(e).atanh();
      }
      function oe(e, t) {
        (e = new this(e)), (t = new this(t));
        var r,
          n = this.precision,
          i = this.rounding,
          s = n + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((r = t.s < 0 ? U(this, n, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                ? ((r = U(this, s, 1).times(0.5)).s = e.s)
                : t.s < 0
                ? ((this.precision = s),
                  (this.rounding = 1),
                  (r = this.atan(I(e, t, s, 1))),
                  (t = U(this, s, 1)),
                  (this.precision = n),
                  (this.rounding = i),
                  (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                : (r = this.atan(I(e, t, s, 1)))
              : ((r = U(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (r = new this(NaN)),
          r
        );
      }
      function ae(e) {
        return new this(e).cbrt();
      }
      function ce(e) {
        return N((e = new this(e)), e.e + 1, 2);
      }
      function fe(e, t, r) {
        return new this(e).clamp(t, r);
      }
      function ue(e) {
        if (!e || "object" !== typeof e) throw Error(h + "Object expected");
        var t,
          r,
          n,
          i = !0 === e.defaults,
          a = [
            "precision",
            1,
            o,
            "rounding",
            0,
            8,
            "toExpNeg",
            -s,
            0,
            "toExpPos",
            0,
            s,
            "maxE",
            0,
            s,
            "minE",
            -s,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < a.length; t += 3)
          if (((r = a[t]), i && (this[r] = u[r]), void 0 !== (n = e[r]))) {
            if (!(y(n) === n && n >= a[t + 1] && n <= a[t + 2]))
              throw Error(l + r + ": " + n);
            this[r] = n;
          }
        if (((r = "crypto"), i && (this[r] = u[r]), void 0 !== (n = e[r]))) {
          if (!0 !== n && !1 !== n && 0 !== n && 1 !== n)
            throw Error(l + r + ": " + n);
          if (n) {
            if (
              "undefined" == typeof crypto ||
              !crypto ||
              (!crypto.getRandomValues && !crypto.randomBytes)
            )
              throw Error(b);
            this[r] = !0;
          } else this[r] = !1;
        }
        return this;
      }
      function de(e) {
        return new this(e).cos();
      }
      function he(e) {
        return new this(e).cosh();
      }
      function le(e, t) {
        return new this(e).div(t);
      }
      function pe(e) {
        return new this(e).exp();
      }
      function be(e) {
        return N((e = new this(e)), e.e + 1, 3);
      }
      function ge() {
        var e,
          t,
          r = new this(0);
        for (d = !1, e = 0; e < arguments.length; )
          if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t)));
          else {
            if (t.s) return (d = !0), new this(1 / 0);
            r = t;
          }
        return (d = !0), r.sqrt();
      }
      function ye(e) {
        return e instanceof De || (e && e.toStringTag === g) || !1;
      }
      function me(e) {
        return new this(e).ln();
      }
      function we(e, t) {
        return new this(e).log(t);
      }
      function ve(e) {
        return new this(e).log(2);
      }
      function Ae(e) {
        return new this(e).log(10);
      }
      function Ee() {
        return j(this, arguments, -1);
      }
      function xe() {
        return j(this, arguments, 1);
      }
      function _e(e, t) {
        return new this(e).mod(t);
      }
      function Be(e, t) {
        return new this(e).mul(t);
      }
      function Se(e, t) {
        return new this(e).pow(t);
      }
      function He(e) {
        var t,
          r,
          n,
          i,
          s = 0,
          a = new this(1),
          c = [];
        if (
          (void 0 === e ? (e = this.precision) : C(e, 1, o),
          (n = Math.ceil(e / 7)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); s < n; )
              (i = t[s]) >= 429e7
                ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (c[s++] = i % 1e7);
          else {
            if (!crypto.randomBytes) throw Error(b);
            for (t = crypto.randomBytes((n *= 4)); s < n; )
              (i =
                t[s] +
                (t[s + 1] << 8) +
                (t[s + 2] << 16) +
                ((127 & t[s + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, s)
                : (c.push(i % 1e7), (s += 4));
            s = n / 4;
          }
        else for (; s < n; ) c[s++] = (1e7 * Math.random()) | 0;
        for (
          e %= 7,
            (n = c[--s]) &&
              e &&
              ((i = m(10, 7 - e)), (c[s] = ((n / i) | 0) * i));
          0 === c[s];
          s--
        )
          c.pop();
        if (s < 0) (r = 0), (c = [0]);
        else {
          for (r = -1; 0 === c[0]; r -= 7) c.shift();
          for (n = 1, i = c[0]; i >= 10; i /= 10) n++;
          n < 7 && (r -= 7 - n);
        }
        return (a.e = r), (a.d = c), a;
      }
      function Ce(e) {
        return N((e = new this(e)), e.e + 1, this.rounding);
      }
      function Te(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
      }
      function Pe(e) {
        return new this(e).sin();
      }
      function Ie(e) {
        return new this(e).sinh();
      }
      function Ne(e) {
        return new this(e).sqrt();
      }
      function Oe(e, t) {
        return new this(e).sub(t);
      }
      function Le() {
        var e = 0,
          t = arguments,
          r = new this(t[e]);
        for (d = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
        return (d = !0), N(r, this.precision, this.rounding);
      }
      function Re(e) {
        return new this(e).tan();
      }
      function Ue(e) {
        return new this(e).tanh();
      }
      function ke(e) {
        return N((e = new this(e)), e.e + 1, 1);
      }
      (S[Symbol.for("nodejs.util.inspect.custom")] = S.toString),
        (S[Symbol.toStringTag] = "Decimal");
      var De = (S.constructor = (function e(t) {
        var r, n, i;
        function s(e) {
          var t,
            r,
            n,
            i = this;
          if (!(i instanceof s)) return new s(e);
          if (((i.constructor = s), ye(e)))
            return (
              (i.s = e.s),
              void (d
                ? !e.d || e.e > s.maxE
                  ? ((i.e = NaN), (i.d = null))
                  : e.e < s.minE
                  ? ((i.e = 0), (i.d = [0]))
                  : ((i.e = e.e), (i.d = e.d.slice()))
                : ((i.e = e.e), (i.d = e.d ? e.d.slice() : e.d)))
            );
          if ("number" === (n = typeof e)) {
            if (0 === e)
              return (i.s = 1 / e < 0 ? -1 : 1), (i.e = 0), void (i.d = [0]);
            if (
              (e < 0 ? ((e = -e), (i.s = -1)) : (i.s = 1), e === ~~e && e < 1e7)
            ) {
              for (t = 0, r = e; r >= 10; r /= 10) t++;
              return void (d
                ? t > s.maxE
                  ? ((i.e = NaN), (i.d = null))
                  : t < s.minE
                  ? ((i.e = 0), (i.d = [0]))
                  : ((i.e = t), (i.d = [e]))
                : ((i.e = t), (i.d = [e])));
            }
            return 0 * e !== 0
              ? (e || (i.s = NaN), (i.e = NaN), void (i.d = null))
              : V(i, e.toString());
          }
          if ("string" === n)
            return (
              45 === (r = e.charCodeAt(0))
                ? ((e = e.slice(1)), (i.s = -1))
                : (43 === r && (e = e.slice(1)), (i.s = 1)),
              E.test(e) ? V(i, e) : G(i, e)
            );
          if ("bigint" === n)
            return (
              e < 0 ? ((e = -e), (i.s = -1)) : (i.s = 1), V(i, e.toString())
            );
          throw Error(l + e);
        }
        if (
          ((s.prototype = S),
          (s.ROUND_UP = 0),
          (s.ROUND_DOWN = 1),
          (s.ROUND_CEIL = 2),
          (s.ROUND_FLOOR = 3),
          (s.ROUND_HALF_UP = 4),
          (s.ROUND_HALF_DOWN = 5),
          (s.ROUND_HALF_EVEN = 6),
          (s.ROUND_HALF_CEIL = 7),
          (s.ROUND_HALF_FLOOR = 8),
          (s.EUCLID = 9),
          (s.config = s.set = ue),
          (s.clone = e),
          (s.isDecimal = ye),
          (s.abs = Q),
          (s.acos = J),
          (s.acosh = ee),
          (s.add = te),
          (s.asin = re),
          (s.asinh = ne),
          (s.atan = ie),
          (s.atanh = se),
          (s.atan2 = oe),
          (s.cbrt = ae),
          (s.ceil = ce),
          (s.clamp = fe),
          (s.cos = de),
          (s.cosh = he),
          (s.div = le),
          (s.exp = pe),
          (s.floor = be),
          (s.hypot = ge),
          (s.ln = me),
          (s.log = we),
          (s.log10 = Ae),
          (s.log2 = ve),
          (s.max = Ee),
          (s.min = xe),
          (s.mod = _e),
          (s.mul = Be),
          (s.pow = Se),
          (s.random = He),
          (s.round = Ce),
          (s.sign = Te),
          (s.sin = Pe),
          (s.sinh = Ie),
          (s.sqrt = Ne),
          (s.sub = Oe),
          (s.sum = Le),
          (s.tan = Re),
          (s.tanh = Ue),
          (s.trunc = ke),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            i = [
              "precision",
              "rounding",
              "toExpNeg",
              "toExpPos",
              "maxE",
              "minE",
              "modulo",
              "crypto",
            ],
              r = 0;
            r < i.length;

          )
            t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
        return s.config(t), s;
      })(u));
      (c = new De(c)), (f = new De(f));
      const Me = De;
    },
    3837: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toBig =
          t.shrSL =
          t.shrSH =
          t.rotrSL =
          t.rotrSH =
          t.rotrBL =
          t.rotrBH =
          t.rotr32L =
          t.rotr32H =
          t.rotlSL =
          t.rotlSH =
          t.rotlBL =
          t.rotlBH =
          t.add5L =
          t.add5H =
          t.add4L =
          t.add4H =
          t.add3L =
          t.add3H =
            void 0),
        (t.add = w),
        (t.fromBig = i),
        (t.split = s);
      const r = BigInt(2 ** 32 - 1),
        n = BigInt(32);
      function i(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & r), l: Number((e >> n) & r) }
          : { h: 0 | Number((e >> n) & r), l: 0 | Number(e & r) };
      }
      function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const r = e.length;
        let n = new Uint32Array(r),
          s = new Uint32Array(r);
        for (let o = 0; o < r; o++) {
          const { h: r, l: a } = i(e[o], t);
          [n[o], s[o]] = [r, a];
        }
        return [n, s];
      }
      const o = (e, t) => (BigInt(e >>> 0) << n) | BigInt(t >>> 0);
      t.toBig = o;
      const a = (e, t, r) => e >>> r;
      t.shrSH = a;
      const c = (e, t, r) => (e << (32 - r)) | (t >>> r);
      t.shrSL = c;
      const f = (e, t, r) => (e >>> r) | (t << (32 - r));
      t.rotrSH = f;
      const u = (e, t, r) => (e << (32 - r)) | (t >>> r);
      t.rotrSL = u;
      const d = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32));
      t.rotrBH = d;
      const h = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r));
      t.rotrBL = h;
      const l = (e, t) => t;
      t.rotr32H = l;
      const p = (e, t) => e;
      t.rotr32L = p;
      const b = (e, t, r) => (e << r) | (t >>> (32 - r));
      t.rotlSH = b;
      const g = (e, t, r) => (t << r) | (e >>> (32 - r));
      t.rotlSL = g;
      const y = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r));
      t.rotlBH = y;
      const m = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function w(e, t, r, n) {
        const i = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      t.rotlBL = m;
      const v = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
      t.add3L = v;
      const A = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0;
      t.add3H = A;
      const E = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
      t.add4L = E;
      const x = (e, t, r, n, i) => (t + r + n + i + ((e / 2 ** 32) | 0)) | 0;
      t.add4H = x;
      const _ = (e, t, r, n, i) =>
        (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
      t.add5L = _;
      const B = (e, t, r, n, i, s) =>
        (t + r + n + i + s + ((e / 2 ** 32) | 0)) | 0;
      t.add5H = B;
      const S = {
        fromBig: i,
        split: s,
        toBig: o,
        shrSH: a,
        shrSL: c,
        rotrSH: f,
        rotrSL: u,
        rotrBH: d,
        rotrBL: h,
        rotr32H: l,
        rotr32L: p,
        rotlSH: b,
        rotlSL: g,
        rotlBH: y,
        rotlBL: m,
        add: w,
        add3L: v,
        add3H: A,
        add4L: E,
        add4H: x,
        add5H: B,
        add5L: _,
      };
      t.default = S;
    },
    4742: (e, t, r) => {
      "use strict";
      r.d(t, { MZ: () => n.M, wk: () => i.w });
      var n = r(48300),
        i = r(34564);
    },
    4794: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" === typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    6370: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ej: () => g,
        Fl: () => x,
        Ho: () => l,
        M7: () => p,
        Ty: () => m,
        di: () => b,
        ii: () => E,
        oB: () => d,
        sH: () => h,
        tf: () => y,
        u: () => A,
        uK: () => u,
        xW: () => c,
        xb: () => f,
      });
      var n = r(15914),
        i = r(48809),
        s = r(73884);
      const o = new TextEncoder(),
        a = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function c() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return `0x${t.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const r = `0x${Number(e)}`;
        return "number" === typeof t.size ? (s.Sl(r, t.size), l(r, t.size)) : r;
      }
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = "";
        for (let i = 0; i < e.length; i++) r += a[e[i]];
        const n = `0x${r}`;
        return "number" === typeof t.size ? (s.Sl(n, t.size), p(n, t.size)) : n;
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { signed: r, size: n } = t,
          i = BigInt(e);
        let s;
        n
          ? (s = r
              ? (1n << (8n * BigInt(n) - 1n)) - 1n
              : 2n ** (8n * BigInt(n)) - 1n)
          : "number" === typeof e && (s = BigInt(Number.MAX_SAFE_INTEGER));
        const o = "bigint" === typeof s && r ? -s - 1n : 0;
        if ((s && i > s) || i < o) {
          const t = "bigint" === typeof e ? "n" : "";
          throw new m({
            max: s ? `${s}${t}` : void 0,
            min: `${o}${t}`,
            signed: r,
            size: n,
            value: `${e}${t}`,
          });
        }
        const a = `0x${(r && i < 0
          ? (1n << BigInt(8 * n)) + BigInt(i)
          : i
        ).toString(16)}`;
        return n ? l(a, n) : a;
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return u(o.encode(e), t);
      }
      function l(e, t) {
        return s.eV(e, { dir: "left", size: t });
      }
      function p(e, t) {
        return s.eV(e, { dir: "right", size: t });
      }
      function b(e, t, r) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const { strict: i } = n;
        s.kK(e, t);
        const o = `0x${e
          .replace("0x", "")
          .slice(
            2 * (null !== t && void 0 !== t ? t : 0),
            2 * (null !== r && void 0 !== r ? r : e.length)
          )}`;
        return i && s.X(o, t, r), o;
      }
      function g(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function y(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { strict: r = !1 } = t;
        try {
          return (
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const { strict: r = !1 } = t;
              if (!e) throw new w(e);
              if ("string" !== typeof e) throw new w(e);
              if (r && !/^0x[0-9a-fA-F]*$/.test(e)) throw new v(e);
              if (!e.startsWith("0x")) throw new v(e);
            })(e, { strict: r }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class m extends n.C {
        constructor(e) {
          let { max: t, min: r, signed: n, size: i, value: s } = e;
          super(
            `Number \`${s}\` is not in safe${i ? ` ${8 * i}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              t ? `(\`${r}\` to \`${t}\`)` : `(above \`${r}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      n.C;
      class w extends n.C {
        constructor(e) {
          super(
            `Value \`${
              "object" === typeof e ? i.A(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class v extends n.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      n.C;
      class A extends n.C {
        constructor(e) {
          let { givenSize: t, maxSize: r } = e;
          super(
            `Size cannot exceed \`${r}\` bytes. Given size: \`${t}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class E extends n.C {
        constructor(e) {
          let { offset: t, position: r, size: n } = e;
          super(
            `Slice ${
              "start" === r ? "starting" : "ending"
            } at offset \`${t}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class x extends n.C {
        constructor(e) {
          let { size: t, targetSize: r, type: n } = e;
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${t}\`) exceeds padding size (\`${r}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    10541: (e, t, r) => {
      "use strict";
      r.d(t, { vA: () => u, tf: () => h });
      var n = r(30068);
      class i extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          const t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            const e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      const s = { checksum: new i(8192) },
        o = s.checksum;
      var a = r(15914),
        c = r(47171);
      const f = /^0x[a-fA-F0-9]{40}$/;
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { strict: r = !0 } = t;
        if (!f.test(e)) throw new l({ address: e, cause: new p() });
        if (r) {
          if (e.toLowerCase() === e) return;
          if (d(e) !== e) throw new l({ address: e, cause: new b() });
        }
      }
      function d(e) {
        if (o.has(e)) return o.get(e);
        u(e, { strict: !1 });
        const t = e.substring(2).toLowerCase(),
          r = c.So(n.sH(t), { as: "Bytes" }),
          i = t.split("");
        for (let n = 0; n < 40; n += 2)
          r[n >> 1] >> 4 >= 8 && i[n] && (i[n] = i[n].toUpperCase()),
            (15 & r[n >> 1]) >= 8 &&
              i[n + 1] &&
              (i[n + 1] = i[n + 1].toUpperCase());
        const s = `0x${i.join("")}`;
        return o.set(e, s), s;
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { strict: r = !0 } = null !== t && void 0 !== t ? t : {};
        try {
          return u(e, { strict: r }), !0;
        } catch {
          return !1;
        }
      }
      class l extends a.C {
        constructor(e) {
          let { address: t, cause: r } = e;
          super(`Address "${t}" is invalid.`, { cause: r }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class p extends a.C {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class b extends a.C {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
    },
    11932: (e, t, r) => {
      "use strict";
      r.d(t, { m_: () => y, HT: () => h, n1: () => l, go: () => p });
      var n = r(17479),
        i = r(29123),
        s = r(15914),
        o = r(47171),
        a = r(6370),
        c = r(10541);
      function f(e) {
        let t = !0,
          r = "",
          n = 0,
          i = "",
          o = !1;
        for (let s = 0; s < e.length; s++) {
          const a = e[s];
          if (
            (["(", ")", ","].includes(a) && (t = !0),
            "(" === a && n++,
            ")" === a && n--,
            t)
          )
            if (0 !== n)
              " " !== a
                ? ((i += a), (r += a))
                : "," !== e[s - 1] &&
                  "," !== r &&
                  ",(" !== r &&
                  ((r = ""), (t = !1));
            else if (
              " " === a &&
              ["event", "function", "error", ""].includes(i)
            )
              i = "";
            else if (((i += a), ")" === a)) {
              o = !0;
              break;
            }
        }
        if (!o) throw new s.C("Unable to normalize signature.");
        return i;
      }
      function u(e, t) {
        const r = typeof e,
          n = t.type;
        switch (n) {
          case "address":
            return c.tf(e, { strict: !1 });
          case "bool":
            return "boolean" === r;
          case "function":
          case "string":
            return "string" === r;
          default:
            return "tuple" === n && "components" in t
              ? Object.values(t.components).every((t, r) =>
                  u(Object.values(e)[r], t)
                )
              : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                  n
                )
              ? "number" === r || "bigint" === r
              : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)
              ? "string" === r || e instanceof Uint8Array
              : !!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n) &&
                Array.isArray(e) &&
                e.every((e) =>
                  u(e, { ...t, type: n.replace(/(\[[0-9]{0,}\])$/, "") })
                );
        }
      }
      function d(e, t, r) {
        for (const n in e) {
          const i = e[n],
            s = t[n];
          if (
            "tuple" === i.type &&
            "tuple" === s.type &&
            "components" in i &&
            "components" in s
          )
            return d(i.components, s.components, r[n]);
          const o = [i.type, s.type];
          if (
            !(!o.includes("address") || !o.includes("bytes20")) ||
            (((o.includes("address") && o.includes("string")) ||
              !(!o.includes("address") || !o.includes("bytes"))) &&
              c.tf(r[n], { strict: !1 }))
          )
            return o;
        }
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { prepare: r = !0 } = t,
          i = Array.isArray(e) || "string" === typeof e ? n.$(e) : e;
        return { ...i, ...(r ? { hash: b(i) } : {}) };
      }
      function l(e, t, r) {
        const { args: n = [], prepare: i = !0 } =
            null !== r && void 0 !== r ? r : {},
          s = a.tf(t, { strict: !1 }),
          o = e.filter((e) =>
            s
              ? "function" === e.type || "error" === e.type
                ? p(e) === a.di(t, 0, 4)
                : "event" === e.type && b(e) === t
              : "name" in e && e.name === t
          );
        if (0 === o.length) throw new y({ name: t });
        if (1 === o.length) return { ...o[0], ...(i ? { hash: b(o[0]) } : {}) };
        let c;
        for (const a of o) {
          if (!("inputs" in a)) continue;
          if (!n || 0 === n.length) {
            if (!a.inputs || 0 === a.inputs.length)
              return { ...a, ...(i ? { hash: b(a) } : {}) };
            continue;
          }
          if (!a.inputs) continue;
          if (0 === a.inputs.length) continue;
          if (a.inputs.length !== n.length) continue;
          if (
            n.every((e, t) => {
              const r = "inputs" in a && a.inputs[t];
              return !!r && u(e, r);
            })
          ) {
            if (c && "inputs" in c && c.inputs) {
              const e = d(a.inputs, c.inputs, n);
              if (e)
                throw new g(
                  { abiItem: a, type: e[0] },
                  { abiItem: c, type: e[1] }
                );
            }
            c = a;
          }
        }
        const f = (() => {
          if (c) return c;
          const [e, ...t] = o;
          return { ...e, overloads: t };
        })();
        if (!f) throw new y({ name: t });
        return { ...f, ...(i ? { hash: b(f) } : {}) };
      }
      function p(e) {
        return a.di(b(e), 0, 4);
      }
      function b(e) {
        return "string" !== typeof e && "hash" in e && e.hash
          ? e.hash
          : o.So(
              a.sH(
                (function (e) {
                  return f("string" === typeof e ? e : i.B(e));
                })(e)
              )
            );
      }
      class g extends s.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${f(i.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${f(i.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class y extends s.C {
        constructor(e) {
          let { name: t, data: r, type: n = "item" } = e;
          super(
            `ABI ${n}${
              t ? ` with name "${t}"` : r ? ` with data "${r}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      s.C;
    },
    13261: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => s });
      var n = r(71274),
        i = r(83238);
      const s = (0, i.u$)(
        class extends i.WL {
          constructor(e) {
            var t;
            if (
              (super(e),
              e.type !== i.OA.ATTRIBUTE ||
                "class" !== e.name ||
                (null === (t = e.strings) || void 0 === t ? void 0 : t.length) >
                  2)
            )
              throw Error(
                "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
              );
          }
          render(e) {
            return (
              " " +
              Object.keys(e)
                .filter((t) => e[t])
                .join(" ") +
              " "
            );
          }
          update(e, t) {
            let [r] = t;
            if (void 0 === this.st) {
              (this.st = new Set()),
                void 0 !== e.strings &&
                  (this.nt = new Set(
                    e.strings
                      .join(" ")
                      .split(/\s/)
                      .filter((e) => "" !== e)
                  ));
              for (const e in r) {
                var i;
                r[e] &&
                  (null === (i = this.nt) || void 0 === i || !i.has(e)) &&
                  this.st.add(e);
              }
              return this.render(r);
            }
            const s = e.element.classList;
            for (const n of this.st) n in r || (s.remove(n), this.st.delete(n));
            for (const n in r) {
              var o;
              const e = !!r[n];
              e === this.st.has(n) ||
                (null === (o = this.nt) || void 0 === o ? void 0 : o.has(n)) ||
                (e
                  ? (s.add(n), this.st.add(n))
                  : (s.remove(n), this.st.delete(n)));
            }
            return n.c0;
          }
        }
      );
    },
    15244: (e, t, r) => {
      var n = r(38842)("jsonp");
      e.exports = function (e, t, r) {
        "function" == typeof t && ((r = t), (t = {}));
        t || (t = {});
        var o,
          a,
          c = t.prefix || "__jp",
          f = t.name || c + i++,
          u = t.param || "callback",
          d = null != t.timeout ? t.timeout : 6e4,
          h = encodeURIComponent,
          l = document.getElementsByTagName("script")[0] || document.head;
        d &&
          (a = setTimeout(function () {
            p(), r && r(new Error("Timeout"));
          }, d));
        function p() {
          o.parentNode && o.parentNode.removeChild(o),
            (window[f] = s),
            a && clearTimeout(a);
        }
        return (
          (window[f] = function (e) {
            n("jsonp got", e), p(), r && r(null, e);
          }),
          (e = (e += (~e.indexOf("?") ? "&" : "?") + u + "=" + h(f)).replace(
            "?&",
            "?"
          )),
          n('jsonp req "%s"', e),
          ((o = document.createElement("script")).src = e),
          l.parentNode.insertBefore(o, l),
          function () {
            window[f] && p();
          }
        );
      };
      var i = 0;
      function s() {}
    },
    15914: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => n });
      class n extends Error {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = ((e) => {
              if (t.cause instanceof n) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return null !== (e = t.cause) && void 0 !== e && e.message
                ? t.cause.message
                : t.details;
            })(),
            i = (t.cause instanceof n && t.cause.docsPath) || t.docsPath,
            s = `https://oxlib.sh${null !== i && void 0 !== i ? i : ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(r || i
                ? ["", r ? `Details: ${r}` : void 0, i ? `See: ${s}` : void 0]
                : []),
            ]
              .filter((e) => "string" === typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = r),
            (this.docs = s),
            (this.docsPath = i),
            (this.shortMessage = e);
        }
        walk(e) {
          return i(this, e);
        }
      }
      function i(e, t) {
        return null !== t && void 0 !== t && t(e)
          ? e
          : e && "object" === typeof e && "cause" in e && e.cause
          ? i(e.cause, t)
          : t
          ? null
          : e;
      }
    },
    17067: (e, t, r) => {
      "use strict";
      var n = r(71014),
        i = r(68584).Buffer;
      e.exports = function (e) {
        function t(t) {
          var r = t.slice(0, -4),
            n = t.slice(-4),
            i = e(r);
          if (!((n[0] ^ i[0]) | (n[1] ^ i[1]) | (n[2] ^ i[2]) | (n[3] ^ i[3])))
            return r;
        }
        return {
          encode: function (t) {
            var r = e(t);
            return n.encode(i.concat([t, r], t.length + 4));
          },
          decode: function (e) {
            var r = t(n.decode(e));
            if (!r) throw new Error("Invalid checksum");
            return r;
          },
          decodeUnsafe: function (e) {
            var r = n.decodeUnsafe(e);
            if (r) return t(r);
          },
        };
      };
    },
    21298: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha512_256 =
          t.sha512_224 =
          t.sha512 =
          t.sha384 =
          t.sha256 =
          t.sha224 =
            void 0);
      var n = r(86689);
      Object.defineProperty(t, "sha224", {
        enumerable: !0,
        get: function () {
          return n.sha224;
        },
      }),
        Object.defineProperty(t, "sha256", {
          enumerable: !0,
          get: function () {
            return n.sha256;
          },
        });
      var i = r(33796);
      Object.defineProperty(t, "sha384", {
        enumerable: !0,
        get: function () {
          return i.sha384;
        },
      }),
        Object.defineProperty(t, "sha512", {
          enumerable: !0,
          get: function () {
            return i.sha512;
          },
        }),
        Object.defineProperty(t, "sha512_224", {
          enumerable: !0,
          get: function () {
            return i.sha512_224;
          },
        }),
        Object.defineProperty(t, "sha512_256", {
          enumerable: !0,
          get: function () {
            return i.sha512_256;
          },
        });
    },
    22557: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => o, K: () => f });
      var n = r(71274),
        i = r(975),
        s = r(83238);
      const o = () => new a();
      class a {}
      const c = new WeakMap(),
        f = (0, s.u$)(
          class extends i.Kq {
            render(e) {
              return n.s6;
            }
            update(e, t) {
              var r;
              let [i] = t;
              const s = i !== this.G;
              return (
                s && void 0 !== this.G && this.rt(void 0),
                (s || this.lt !== this.ct) &&
                  ((this.G = i),
                  (this.ht =
                    null === (r = e.options) || void 0 === r ? void 0 : r.host),
                  this.rt((this.ct = e.element))),
                n.s6
              );
            }
            rt(e) {
              if (
                (this.isConnected || (e = void 0), "function" == typeof this.G)
              ) {
                var t;
                const r =
                  null !== (t = this.ht) && void 0 !== t ? t : globalThis;
                let n = c.get(r);
                void 0 === n && ((n = new WeakMap()), c.set(r, n)),
                  void 0 !== n.get(this.G) && this.G.call(this.ht, void 0),
                  n.set(this.G, e),
                  void 0 !== e && this.G.call(this.ht, e);
              } else this.G.value = e;
            }
            get lt() {
              var e, t, r;
              return "function" == typeof this.G
                ? null ===
                    (e = c.get(
                      null !== (t = this.ht) && void 0 !== t ? t : globalThis
                    )) || void 0 === e
                  ? void 0
                  : e.get(this.G)
                : null === (r = this.G) || void 0 === r
                ? void 0
                : r.value;
            }
            disconnected() {
              this.lt === this.ct && this.rt(void 0);
            }
            reconnected() {
              this.rt(this.ct);
            }
          }
        );
    },
    25796: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.SHA224 = t.sha256 = t.SHA256 = void 0);
      const n = r(75491);
      (t.SHA256 = n.SHA256),
        (t.sha256 = n.sha256),
        (t.SHA224 = n.SHA224),
        (t.sha224 = n.sha224);
    },
    26449: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = t.HMAC = void 0);
      const n = r(45791),
        i = r(43165);
      class s extends i.Hash {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, n.ahash)(e);
          const r = (0, i.toBytes)(t);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new Error(
              "Expected instance of class which extends utils.Hash"
            );
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const s = this.blockLen,
            o = new Uint8Array(s);
          o.set(r.length > s ? e.create().update(r).digest() : r);
          for (let n = 0; n < o.length; n++) o[n] ^= 54;
          this.iHash.update(o), (this.oHash = e.create());
          for (let n = 0; n < o.length; n++) o[n] ^= 106;
          this.oHash.update(o), o.fill(0);
        }
        update(e) {
          return (0, n.aexists)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, n.aexists)(this),
            (0, n.abytes)(e, this.outputLen),
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
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: o,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
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
      t.HMAC = s;
      (t.hmac = (e, t, r) => new s(e, t).update(r).digest()),
        (t.hmac.create = (e, t) => new s(e, t));
    },
    30068: (e, t, r) => {
      "use strict";
      r.d(t, {
        Fl: () => b,
        u: () => p,
        HT: () => u,
        sH: () => h,
        Ej: () => l,
      });
      var n = r(15914),
        i = r(6370);
      r(48809);
      function s(e, t) {
        if (l(e) > t) throw new p({ givenSize: l(e), maxSize: t });
      }
      const o = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function a(e) {
        return e >= o.zero && e <= o.nine
          ? e - o.zero
          : e >= o.A && e <= o.F
          ? e - (o.A - 10)
          : e >= o.a && e <= o.f
          ? e - (o.a - 10)
          : void 0;
      }
      var c = r(73884);
      const f = new TextEncoder();
      function u(e) {
        return e instanceof Uint8Array
          ? e
          : "string" === typeof e
          ? d(e)
          : (function (e) {
              return e instanceof Uint8Array ? e : new Uint8Array(e);
            })(e);
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { size: r } = t;
        let s = e;
        r && (c.Sl(e, r), (s = i.M7(e, r)));
        let o = s.slice(2);
        o.length % 2 && (o = `0${o}`);
        const f = o.length / 2,
          u = new Uint8Array(f);
        for (let i = 0, c = 0; i < f; i++) {
          const e = a(o.charCodeAt(c++)),
            t = a(o.charCodeAt(c++));
          if (void 0 === e || void 0 === t)
            throw new n.C(
              `Invalid byte sequence ("${o[c - 2]}${o[c - 1]}" in "${o}").`
            );
          u[i] = 16 * e + t;
        }
        return u;
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { size: r } = t,
          n = f.encode(e);
        return "number" === typeof r
          ? (s(n, r),
            (function (e, t) {
              return (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                const { dir: r, size: n = 32 } = t;
                if (0 === n) return e;
                if (e.length > n)
                  throw new b({ size: e.length, targetSize: n, type: "Bytes" });
                const i = new Uint8Array(n);
                for (let s = 0; s < n; s++) {
                  const t = "right" === r;
                  i[t ? s : n - s - 1] = e[t ? s : e.length - s - 1];
                }
                return i;
              })(e, { dir: "right", size: t });
            })(n, r))
          : n;
      }
      function l(e) {
        return e.length;
      }
      n.C;
      n.C;
      class p extends n.C {
        constructor(e) {
          let { givenSize: t, maxSize: r } = e;
          super(
            `Size cannot exceed \`${r}\` bytes. Given size: \`${t}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      n.C;
      class b extends n.C {
        constructor(e) {
          let { size: t, targetSize: r, type: n } = e;
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${t}\`) exceeds padding size (\`${r}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    31006: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DER = t.DERErr = void 0),
        (t.weierstrassPoints = l),
        (t.weierstrass = function (e) {
          const r = (function (e) {
              const t = (0, n.validateBasic)(e);
              return (
                (0, s.validateObject)(
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
            { Fp: a, n: u } = r,
            d = a.BYTES + 1,
            h = 2 * a.BYTES + 1;
          function p(e) {
            return (0, i.mod)(e, u);
          }
          function b(e) {
            return (0, i.invert)(e, u);
          }
          const {
              ProjectivePoint: g,
              normPrivateKeyToScalar: y,
              weierstrassEquation: m,
              isWithinCurveOrder: w,
            } = l({
              ...r,
              toBytes(e, t, r) {
                const n = t.toAffine(),
                  i = a.toBytes(n.x),
                  o = s.concatBytes;
                return (
                  (0, s.abool)("isCompressed", r),
                  r
                    ? o(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i)
                    : o(Uint8Array.from([4]), i, a.toBytes(n.y))
                );
              },
              fromBytes(e) {
                const t = e.length,
                  r = e[0],
                  n = e.subarray(1);
                if (t !== d || (2 !== r && 3 !== r)) {
                  if (t === h && 4 === r) {
                    return {
                      x: a.fromBytes(n.subarray(0, a.BYTES)),
                      y: a.fromBytes(n.subarray(a.BYTES, 2 * a.BYTES)),
                    };
                  }
                  throw new Error(
                    "invalid Point, expected length of " +
                      d +
                      ", or uncompressed " +
                      h +
                      ", got " +
                      t
                  );
                }
                {
                  const e = (0, s.bytesToNumberBE)(n);
                  if (!(0, s.inRange)(e, f, a.ORDER))
                    throw new Error("Point is not on curve");
                  const t = m(e);
                  let o;
                  try {
                    o = a.sqrt(t);
                  } catch (i) {
                    const e = i instanceof Error ? ": " + i.message : "";
                    throw new Error("Point is not on curve" + e);
                  }
                  return (
                    (1 === (1 & r)) !== ((o & f) === f) && (o = a.neg(o)),
                    { x: e, y: o }
                  );
                }
              },
            }),
            v = (e) =>
              (0, s.bytesToHex)((0, s.numberToBytesBE)(e, r.nByteLength));
          function A(e) {
            return e > u >> f;
          }
          const E = (e, t, r) => (0, s.bytesToNumberBE)(e.slice(t, r));
          class x {
            constructor(e, t, r) {
              (0, s.aInRange)("r", e, f, u),
                (0, s.aInRange)("s", t, f, u),
                (this.r = e),
                (this.s = t),
                null != r && (this.recovery = r),
                Object.freeze(this);
            }
            static fromCompact(e) {
              const t = r.nByteLength;
              return (
                (e = (0, s.ensureBytes)("compactSignature", e, 2 * t)),
                new x(E(e, 0, t), E(e, t, 2 * t))
              );
            }
            static fromDER(e) {
              const { r: r, s: n } = t.DER.toSig((0, s.ensureBytes)("DER", e));
              return new x(r, n);
            }
            assertValidity() {}
            addRecoveryBit(e) {
              return new x(this.r, this.s, e);
            }
            recoverPublicKey(e) {
              const { r: t, s: n, recovery: i } = this,
                o = H((0, s.ensureBytes)("msgHash", e));
              if (null == i || ![0, 1, 2, 3].includes(i))
                throw new Error("recovery id invalid");
              const c = 2 === i || 3 === i ? t + r.n : t;
              if (c >= a.ORDER) throw new Error("recovery id 2 or 3 invalid");
              const f = 0 === (1 & i) ? "02" : "03",
                u = g.fromHex(f + v(c)),
                d = b(c),
                h = p(-o * d),
                l = p(n * d),
                y = g.BASE.multiplyAndAddUnsafe(u, h, l);
              if (!y) throw new Error("point at infinify");
              return y.assertValidity(), y;
            }
            hasHighS() {
              return A(this.s);
            }
            normalizeS() {
              return this.hasHighS()
                ? new x(this.r, p(-this.s), this.recovery)
                : this;
            }
            toDERRawBytes() {
              return (0, s.hexToBytes)(this.toDERHex());
            }
            toDERHex() {
              return t.DER.hexFromSig({ r: this.r, s: this.s });
            }
            toCompactRawBytes() {
              return (0, s.hexToBytes)(this.toCompactHex());
            }
            toCompactHex() {
              return v(this.r) + v(this.s);
            }
          }
          const _ = {
            isValidPrivateKey(e) {
              try {
                return y(e), !0;
              } catch (t) {
                return !1;
              }
            },
            normPrivateKeyToScalar: y,
            randomPrivateKey: () => {
              const e = (0, i.getMinHashLength)(r.n);
              return (0, i.mapHashToField)(r.randomBytes(e), r.n);
            },
            precompute() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 8,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : g.BASE;
              return t._setWindowSize(e), t.multiply(BigInt(3)), t;
            },
          };
          function B(e) {
            const t = (0, s.isBytes)(e),
              r = "string" === typeof e,
              n = (t || r) && e.length;
            return t
              ? n === d || n === h
              : r
              ? n === 2 * d || n === 2 * h
              : e instanceof g;
          }
          const S =
              r.bits2int ||
              function (e) {
                if (e.length > 8192) throw new Error("input is too large");
                const t = (0, s.bytesToNumberBE)(e),
                  n = 8 * e.length - r.nBitLength;
                return n > 0 ? t >> BigInt(n) : t;
              },
            H =
              r.bits2int_modN ||
              function (e) {
                return p(S(e));
              },
            C = (0, s.bitMask)(r.nBitLength);
          function T(e) {
            return (
              (0, s.aInRange)("num < 2^" + r.nBitLength, e, c, C),
              (0, s.numberToBytesBE)(e, r.nByteLength)
            );
          }
          function P(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : I;
            if (["recovered", "canonical"].some((e) => e in n))
              throw new Error("sign() legacy options not supported");
            const { hash: i, randomBytes: u } = r;
            let { lowS: d, prehash: h, extraEntropy: l } = n;
            null == d && (d = !0),
              (e = (0, s.ensureBytes)("msgHash", e)),
              o(n),
              h && (e = (0, s.ensureBytes)("prehashed msgHash", i(e)));
            const m = H(e),
              v = y(t),
              E = [T(v), T(m)];
            if (null != l && !1 !== l) {
              const e = !0 === l ? u(a.BYTES) : l;
              E.push((0, s.ensureBytes)("extraEntropy", e));
            }
            const _ = (0, s.concatBytes)(...E),
              B = m;
            return {
              seed: _,
              k2sig: function (e) {
                const t = S(e);
                if (!w(t)) return;
                const r = b(t),
                  n = g.BASE.multiply(t).toAffine(),
                  i = p(n.x);
                if (i === c) return;
                const s = p(r * p(B + i * v));
                if (s === c) return;
                let o = (n.x === i ? 0 : 2) | Number(n.y & f),
                  a = s;
                return (
                  d &&
                    A(s) &&
                    ((a = (function (e) {
                      return A(e) ? p(-e) : e;
                    })(s)),
                    (o ^= 1)),
                  new x(i, a, o)
                );
              },
            };
          }
          const I = { lowS: r.lowS, prehash: !1 },
            N = { lowS: r.lowS, prehash: !1 };
          return (
            g.BASE._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function (e) {
                let t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                return g.fromPrivateKey(e).toRawBytes(t);
              },
              getSharedSecret: function (e, t) {
                let r =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2];
                if (B(e)) throw new Error("first arg must be private key");
                if (!B(t)) throw new Error("second arg must be public key");
                return g.fromHex(t).multiply(y(e)).toRawBytes(r);
              },
              sign: function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : I;
                const { seed: i, k2sig: o } = P(e, t, n),
                  a = r;
                return (0, s.createHmacDrbg)(
                  a.hash.outputLen,
                  a.nByteLength,
                  a.hmac
                )(i, o);
              },
              verify: function (e, n, i) {
                var a;
                let c =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : N;
                const f = e;
                (n = (0, s.ensureBytes)("msgHash", n)),
                  (i = (0, s.ensureBytes)("publicKey", i));
                const { lowS: u, prehash: d, format: h } = c;
                if ((o(c), "strict" in c))
                  throw new Error("options.strict was renamed to lowS");
                if (void 0 !== h && "compact" !== h && "der" !== h)
                  throw new Error("format must be compact or der");
                const l = "string" === typeof f || (0, s.isBytes)(f),
                  y =
                    !l &&
                    !h &&
                    "object" === typeof f &&
                    null !== f &&
                    "bigint" === typeof f.r &&
                    "bigint" === typeof f.s;
                if (!l && !y)
                  throw new Error(
                    "invalid signature, expected Uint8Array, hex string or Signature instance"
                  );
                let m, w;
                try {
                  if ((y && (m = new x(f.r, f.s)), l)) {
                    try {
                      "compact" !== h && (m = x.fromDER(f));
                    } catch (T) {
                      if (!(T instanceof t.DER.Err)) throw T;
                    }
                    m || "der" === h || (m = x.fromCompact(f));
                  }
                  w = g.fromHex(i);
                } catch (P) {
                  return !1;
                }
                if (!m) return !1;
                if (u && m.hasHighS()) return !1;
                d && (n = r.hash(n));
                const { r: v, s: A } = m,
                  E = H(n),
                  _ = b(A),
                  B = p(E * _),
                  S = p(v * _),
                  C =
                    null === (a = g.BASE.multiplyAndAddUnsafe(w, B, S)) ||
                    void 0 === a
                      ? void 0
                      : a.toAffine();
                if (!C) return !1;
                return p(C.x) === v;
              },
              ProjectivePoint: g,
              Signature: x,
              utils: _,
            }
          );
        }),
        (t.SWUFpSqrtRatio = p),
        (t.mapToCurveSimpleSWU = function (e, t) {
          if (
            ((0, i.validateField)(e),
            !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z))
          )
            throw new Error("mapToCurveSimpleSWU: invalid opts");
          const r = p(e, t.Z);
          if (!e.isOdd) throw new Error("Fp.isOdd is not implemented!");
          return (n) => {
            let i, s, o, a, c, f, u, d;
            (i = e.sqr(n)),
              (i = e.mul(i, t.Z)),
              (s = e.sqr(i)),
              (s = e.add(s, i)),
              (o = e.add(s, e.ONE)),
              (o = e.mul(o, t.B)),
              (a = e.cmov(t.Z, e.neg(s), !e.eql(s, e.ZERO))),
              (a = e.mul(a, t.A)),
              (s = e.sqr(o)),
              (f = e.sqr(a)),
              (c = e.mul(f, t.A)),
              (s = e.add(s, c)),
              (s = e.mul(s, o)),
              (f = e.mul(f, a)),
              (c = e.mul(f, t.B)),
              (s = e.add(s, c)),
              (u = e.mul(i, o));
            const { isValid: h, value: l } = r(s, f);
            (d = e.mul(i, n)),
              (d = e.mul(d, l)),
              (u = e.cmov(u, o, h)),
              (d = e.cmov(d, l, h));
            const p = e.isOdd(n) === e.isOdd(d);
            return (
              (d = e.cmov(e.neg(d), d, p)), (u = e.div(u, a)), { x: u, y: d }
            );
          };
        });
      const n = r(67005),
        i = r(52208),
        s = r(58571);
      function o(e) {
        void 0 !== e.lowS && (0, s.abool)("lowS", e.lowS),
          void 0 !== e.prehash && (0, s.abool)("prehash", e.prehash);
      }
      class a extends Error {
        constructor() {
          super(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          );
        }
      }
      (t.DERErr = a),
        (t.DER = {
          Err: a,
          _tlv: {
            encode: (e, r) => {
              const { Err: n } = t.DER;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (1 & r.length) throw new n("tlv.encode: unpadded data");
              const i = r.length / 2,
                o = (0, s.numberToHexUnpadded)(i);
              if ((o.length / 2) & 128)
                throw new n("tlv.encode: long form length too big");
              const a =
                i > 127 ? (0, s.numberToHexUnpadded)((o.length / 2) | 128) : "";
              return (0, s.numberToHexUnpadded)(e) + a + o + r;
            },
            decode(e, r) {
              const { Err: n } = t.DER;
              let i = 0;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (r.length < 2 || r[i++] !== e)
                throw new n("tlv.decode: wrong tlv");
              const s = r[i++];
              let o = 0;
              if (!!(128 & s)) {
                const e = 127 & s;
                if (!e)
                  throw new n(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new n("tlv.decode(long): byte length is too big");
                const t = r.subarray(i, i + e);
                if (t.length !== e)
                  throw new n("tlv.decode: length bytes not complete");
                if (0 === t[0])
                  throw new n("tlv.decode(long): zero leftmost byte");
                for (const r of t) o = (o << 8) | r;
                if (((i += e), o < 128))
                  throw new n("tlv.decode(long): not minimal encoding");
              } else o = s;
              const a = r.subarray(i, i + o);
              if (a.length !== o) throw new n("tlv.decode: wrong value length");
              return { v: a, l: r.subarray(i + o) };
            },
          },
          _int: {
            encode(e) {
              const { Err: r } = t.DER;
              if (e < c)
                throw new r("integer: negative integers are not allowed");
              let n = (0, s.numberToHexUnpadded)(e);
              if (
                (8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length)
              )
                throw new r("unexpected DER parsing assertion: unpadded hex");
              return n;
            },
            decode(e) {
              const { Err: r } = t.DER;
              if (128 & e[0])
                throw new r("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new r(
                  "invalid signature integer: unnecessary leading zero"
                );
              return (0, s.bytesToNumberBE)(e);
            },
          },
          toSig(e) {
            const { Err: r, _int: n, _tlv: i } = t.DER,
              o = (0, s.ensureBytes)("signature", e),
              { v: a, l: c } = i.decode(48, o);
            if (c.length)
              throw new r("invalid signature: left bytes after parsing");
            const { v: f, l: u } = i.decode(2, a),
              { v: d, l: h } = i.decode(2, u);
            if (h.length)
              throw new r("invalid signature: left bytes after parsing");
            return { r: n.decode(f), s: n.decode(d) };
          },
          hexFromSig(e) {
            const { _tlv: r, _int: n } = t.DER,
              i = r.encode(2, n.encode(e.r)) + r.encode(2, n.encode(e.s));
            return r.encode(48, i);
          },
        });
      const c = BigInt(0),
        f = BigInt(1),
        u = BigInt(2),
        d = BigInt(3),
        h = BigInt(4);
      function l(e) {
        const t = (function (e) {
            const t = (0, n.validateBasic)(e);
            (0, s.validateObject)(
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
            const { endo: r, Fp: i, a: o } = t;
            if (r) {
              if (!i.eql(o, i.ZERO))
                throw new Error(
                  "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                );
              if (
                "object" !== typeof r ||
                "bigint" !== typeof r.beta ||
                "function" !== typeof r.splitScalar
              )
                throw new Error(
                  "invalid endomorphism, expected beta: bigint and splitScalar: function"
                );
            }
            return Object.freeze({ ...t });
          })(e),
          { Fp: r } = t,
          o = (0, i.Field)(t.n, t.nBitLength),
          a =
            t.toBytes ||
            ((e, t, n) => {
              const i = t.toAffine();
              return (0, s.concatBytes)(
                Uint8Array.from([4]),
                r.toBytes(i.x),
                r.toBytes(i.y)
              );
            }),
          u =
            t.fromBytes ||
            ((e) => {
              const t = e.subarray(1);
              return {
                x: r.fromBytes(t.subarray(0, r.BYTES)),
                y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
              };
            });
        function h(e) {
          const { a: n, b: i } = t,
            s = r.sqr(e),
            o = r.mul(s, e);
          return r.add(r.add(o, r.mul(e, n)), i);
        }
        if (!r.eql(r.sqr(t.Gy), h(t.Gx)))
          throw new Error("bad generator point: equation left != right");
        function l(e) {
          const {
            allowedPrivateKeyLengths: r,
            nByteLength: n,
            wrapPrivateKey: o,
            n: a,
          } = t;
          if (r && "bigint" !== typeof e) {
            if (
              ((0, s.isBytes)(e) && (e = (0, s.bytesToHex)(e)),
              "string" !== typeof e || !r.includes(e.length))
            )
              throw new Error("invalid private key");
            e = e.padStart(2 * n, "0");
          }
          let c;
          try {
            c =
              "bigint" === typeof e
                ? e
                : (0, s.bytesToNumberBE)(
                    (0, s.ensureBytes)("private key", e, n)
                  );
          } catch (u) {
            throw new Error(
              "invalid private key, expected hex or " +
                n +
                " bytes, got " +
                typeof e
            );
          }
          return (
            o && (c = (0, i.mod)(c, a)),
            (0, s.aInRange)("private key", c, f, a),
            c
          );
        }
        function p(e) {
          if (!(e instanceof y)) throw new Error("ProjectivePoint expected");
        }
        const b = (0, s.memoized)((e, t) => {
            const { px: n, py: i, pz: s } = e;
            if (r.eql(s, r.ONE)) return { x: n, y: i };
            const o = e.is0();
            null == t && (t = o ? r.ONE : r.inv(s));
            const a = r.mul(n, t),
              c = r.mul(i, t),
              f = r.mul(s, t);
            if (o) return { x: r.ZERO, y: r.ZERO };
            if (!r.eql(f, r.ONE)) throw new Error("invZ was invalid");
            return { x: a, y: c };
          }),
          g = (0, s.memoized)((e) => {
            if (e.is0()) {
              if (t.allowInfinityPoint && !r.is0(e.py)) return;
              throw new Error("bad point: ZERO");
            }
            const { x: n, y: i } = e.toAffine();
            if (!r.isValid(n) || !r.isValid(i))
              throw new Error("bad point: x or y not FE");
            const s = r.sqr(i),
              o = h(n);
            if (!r.eql(s, o))
              throw new Error("bad point: equation left != right");
            if (!e.isTorsionFree())
              throw new Error("bad point: not in prime-order subgroup");
            return !0;
          });
        class y {
          constructor(e, t, n) {
            if (null == e || !r.isValid(e)) throw new Error("x required");
            if (null == t || !r.isValid(t)) throw new Error("y required");
            if (null == n || !r.isValid(n)) throw new Error("z required");
            (this.px = e), (this.py = t), (this.pz = n), Object.freeze(this);
          }
          static fromAffine(e) {
            const { x: t, y: n } = e || {};
            if (!e || !r.isValid(t) || !r.isValid(n))
              throw new Error("invalid affine point");
            if (e instanceof y) throw new Error("projective point not allowed");
            const i = (e) => r.eql(e, r.ZERO);
            return i(t) && i(n) ? y.ZERO : new y(t, n, r.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(e) {
            const t = r.invertBatch(e.map((e) => e.pz));
            return e.map((e, r) => e.toAffine(t[r])).map(y.fromAffine);
          }
          static fromHex(e) {
            const t = y.fromAffine(u((0, s.ensureBytes)("pointHex", e)));
            return t.assertValidity(), t;
          }
          static fromPrivateKey(e) {
            return y.BASE.multiply(l(e));
          }
          static msm(e, t) {
            return (0, n.pippenger)(y, o, e, t);
          }
          _setWindowSize(e) {
            w.setWindowSize(this, e);
          }
          assertValidity() {
            g(this);
          }
          hasEvenY() {
            const { y: e } = this.toAffine();
            if (r.isOdd) return !r.isOdd(e);
            throw new Error("Field doesn't support isOdd");
          }
          equals(e) {
            p(e);
            const { px: t, py: n, pz: i } = this,
              { px: s, py: o, pz: a } = e,
              c = r.eql(r.mul(t, a), r.mul(s, i)),
              f = r.eql(r.mul(n, a), r.mul(o, i));
            return c && f;
          }
          negate() {
            return new y(this.px, r.neg(this.py), this.pz);
          }
          double() {
            const { a: e, b: n } = t,
              i = r.mul(n, d),
              { px: s, py: o, pz: a } = this;
            let c = r.ZERO,
              f = r.ZERO,
              u = r.ZERO,
              h = r.mul(s, s),
              l = r.mul(o, o),
              p = r.mul(a, a),
              b = r.mul(s, o);
            return (
              (b = r.add(b, b)),
              (u = r.mul(s, a)),
              (u = r.add(u, u)),
              (c = r.mul(e, u)),
              (f = r.mul(i, p)),
              (f = r.add(c, f)),
              (c = r.sub(l, f)),
              (f = r.add(l, f)),
              (f = r.mul(c, f)),
              (c = r.mul(b, c)),
              (u = r.mul(i, u)),
              (p = r.mul(e, p)),
              (b = r.sub(h, p)),
              (b = r.mul(e, b)),
              (b = r.add(b, u)),
              (u = r.add(h, h)),
              (h = r.add(u, h)),
              (h = r.add(h, p)),
              (h = r.mul(h, b)),
              (f = r.add(f, h)),
              (p = r.mul(o, a)),
              (p = r.add(p, p)),
              (h = r.mul(p, b)),
              (c = r.sub(c, h)),
              (u = r.mul(p, l)),
              (u = r.add(u, u)),
              (u = r.add(u, u)),
              new y(c, f, u)
            );
          }
          add(e) {
            p(e);
            const { px: n, py: i, pz: s } = this,
              { px: o, py: a, pz: c } = e;
            let f = r.ZERO,
              u = r.ZERO,
              h = r.ZERO;
            const l = t.a,
              b = r.mul(t.b, d);
            let g = r.mul(n, o),
              m = r.mul(i, a),
              w = r.mul(s, c),
              v = r.add(n, i),
              A = r.add(o, a);
            (v = r.mul(v, A)),
              (A = r.add(g, m)),
              (v = r.sub(v, A)),
              (A = r.add(n, s));
            let E = r.add(o, c);
            return (
              (A = r.mul(A, E)),
              (E = r.add(g, w)),
              (A = r.sub(A, E)),
              (E = r.add(i, s)),
              (f = r.add(a, c)),
              (E = r.mul(E, f)),
              (f = r.add(m, w)),
              (E = r.sub(E, f)),
              (h = r.mul(l, A)),
              (f = r.mul(b, w)),
              (h = r.add(f, h)),
              (f = r.sub(m, h)),
              (h = r.add(m, h)),
              (u = r.mul(f, h)),
              (m = r.add(g, g)),
              (m = r.add(m, g)),
              (w = r.mul(l, w)),
              (A = r.mul(b, A)),
              (m = r.add(m, w)),
              (w = r.sub(g, w)),
              (w = r.mul(l, w)),
              (A = r.add(A, w)),
              (g = r.mul(m, A)),
              (u = r.add(u, g)),
              (g = r.mul(E, A)),
              (f = r.mul(v, f)),
              (f = r.sub(f, g)),
              (g = r.mul(v, m)),
              (h = r.mul(E, h)),
              (h = r.add(h, g)),
              new y(f, u, h)
            );
          }
          subtract(e) {
            return this.add(e.negate());
          }
          is0() {
            return this.equals(y.ZERO);
          }
          wNAF(e) {
            return w.wNAFCached(this, e, y.normalizeZ);
          }
          multiplyUnsafe(e) {
            const { endo: n, n: i } = t;
            (0, s.aInRange)("scalar", e, c, i);
            const o = y.ZERO;
            if (e === c) return o;
            if (this.is0() || e === f) return this;
            if (!n || w.hasPrecomputes(this))
              return w.wNAFCachedUnsafe(this, e, y.normalizeZ);
            let { k1neg: a, k1: u, k2neg: d, k2: h } = n.splitScalar(e),
              l = o,
              p = o,
              b = this;
            for (; u > c || h > c; )
              u & f && (l = l.add(b)),
                h & f && (p = p.add(b)),
                (b = b.double()),
                (u >>= f),
                (h >>= f);
            return (
              a && (l = l.negate()),
              d && (p = p.negate()),
              (p = new y(r.mul(p.px, n.beta), p.py, p.pz)),
              l.add(p)
            );
          }
          multiply(e) {
            const { endo: n, n: i } = t;
            let o, a;
            if (((0, s.aInRange)("scalar", e, f, i), n)) {
              const { k1neg: t, k1: i, k2neg: s, k2: c } = n.splitScalar(e);
              let { p: f, f: u } = this.wNAF(i),
                { p: d, f: h } = this.wNAF(c);
              (f = w.constTimeNegate(t, f)),
                (d = w.constTimeNegate(s, d)),
                (d = new y(r.mul(d.px, n.beta), d.py, d.pz)),
                (o = f.add(d)),
                (a = u.add(h));
            } else {
              const { p: t, f: r } = this.wNAF(e);
              (o = t), (a = r);
            }
            return y.normalizeZ([o, a])[0];
          }
          multiplyAndAddUnsafe(e, t, r) {
            const n = y.BASE,
              i = (e, t) =>
                t !== c && t !== f && e.equals(n)
                  ? e.multiply(t)
                  : e.multiplyUnsafe(t),
              s = i(this, t).add(i(e, r));
            return s.is0() ? void 0 : s;
          }
          toAffine(e) {
            return b(this, e);
          }
          isTorsionFree() {
            const { h: e, isTorsionFree: r } = t;
            if (e === f) return !0;
            if (r) return r(y, this);
            throw new Error(
              "isTorsionFree() has not been declared for the elliptic curve"
            );
          }
          clearCofactor() {
            const { h: e, clearCofactor: r } = t;
            return e === f ? this : r ? r(y, this) : this.multiplyUnsafe(t.h);
          }
          toRawBytes() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return (
              (0, s.abool)("isCompressed", e),
              this.assertValidity(),
              a(y, this, e)
            );
          }
          toHex() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return (
              (0, s.abool)("isCompressed", e),
              (0, s.bytesToHex)(this.toRawBytes(e))
            );
          }
        }
        (y.BASE = new y(t.Gx, t.Gy, r.ONE)),
          (y.ZERO = new y(r.ZERO, r.ONE, r.ZERO));
        const m = t.nBitLength,
          w = (0, n.wNAF)(y, t.endo ? Math.ceil(m / 2) : m);
        return {
          CURVE: t,
          ProjectivePoint: y,
          normPrivateKeyToScalar: l,
          weierstrassEquation: h,
          isWithinCurveOrder: function (e) {
            return (0, s.inRange)(e, f, t.n);
          },
        };
      }
      function p(e, t) {
        const r = e.ORDER;
        let n = c;
        for (let d = r - f; d % u === c; d /= u) n += f;
        const i = n,
          s = u << (i - f - f),
          o = s * u,
          a = (r - f) / o,
          l = (a - f) / u,
          p = o - f,
          b = s,
          g = e.pow(t, a),
          y = e.pow(t, (a + f) / u);
        let m = (t, r) => {
          let n = g,
            s = e.pow(r, p),
            o = e.sqr(s);
          o = e.mul(o, r);
          let a = e.mul(t, o);
          (a = e.pow(a, l)),
            (a = e.mul(a, s)),
            (s = e.mul(a, r)),
            (o = e.mul(a, t));
          let c = e.mul(o, s);
          a = e.pow(c, b);
          let d = e.eql(a, e.ONE);
          (s = e.mul(o, y)),
            (a = e.mul(c, n)),
            (o = e.cmov(s, o, d)),
            (c = e.cmov(a, c, d));
          for (let h = i; h > f; h--) {
            let t = h - u;
            t = u << (t - f);
            let r = e.pow(c, t);
            const i = e.eql(r, e.ONE);
            (s = e.mul(o, n)),
              (n = e.mul(n, n)),
              (r = e.mul(c, n)),
              (o = e.cmov(s, o, i)),
              (c = e.cmov(r, c, i));
          }
          return { isValid: d, value: o };
        };
        if (e.ORDER % h === d) {
          const r = (e.ORDER - d) / h,
            n = e.sqrt(e.neg(t));
          m = (t, i) => {
            let s = e.sqr(i);
            const o = e.mul(t, i);
            s = e.mul(s, o);
            let a = e.pow(s, r);
            a = e.mul(a, o);
            const c = e.mul(a, n),
              f = e.mul(e.sqr(a), i),
              u = e.eql(f, t);
            return { isValid: u, value: e.cmov(c, a, u) };
          };
        }
        return m;
      }
    },
    32069: (e, t, r) => {
      "use strict";
      var n = r(92931),
        i = r(12159),
        s = r(66078),
        o = r(72425),
        a = r(70249);
      function c(e) {
        a.call(this, "digest"), (this._hash = e);
      }
      n(c, a),
        (c.prototype._update = function (e) {
          this._hash.update(e);
        }),
        (c.prototype._final = function () {
          return this._hash.digest();
        }),
        (e.exports = function (e) {
          return "md5" === (e = e.toLowerCase())
            ? new i()
            : "rmd160" === e || "ripemd160" === e
            ? new s()
            : new c(o(e));
        });
    },
    32878: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.maybe =
          t.Boolean =
          t.Array =
          t.Buffer256bit =
          t.Network =
          t.typeforce =
            void 0),
        (t.typeforce = r(45489)),
        (t.Network = t.typeforce.compile({
          messagePrefix: t.typeforce.oneOf(
            t.typeforce.Buffer,
            t.typeforce.String
          ),
          bip32: { public: t.typeforce.UInt32, private: t.typeforce.UInt32 },
          pubKeyHash: t.typeforce.UInt8,
          scriptHash: t.typeforce.UInt8,
          wif: t.typeforce.UInt8,
        })),
        (t.Buffer256bit = t.typeforce.BufferN(32)),
        (t.Array = t.typeforce.Array),
        (t.Boolean = t.typeforce.Boolean),
        (t.maybe = t.typeforce.maybe);
    },
    33796: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha384 =
          t.sha512_256 =
          t.sha512_224 =
          t.sha512 =
          t.SHA384 =
          t.SHA512_256 =
          t.SHA512_224 =
          t.SHA512 =
            void 0);
      const n = r(90760),
        i = r(78700),
        s = r(43165),
        [o, a] = (() =>
          i.default.split(
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
          ))(),
        c = new Uint32Array(80),
        f = new Uint32Array(80);
      class u extends n.HashMD {
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
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: o,
            Dl: a,
            Eh: c,
            El: f,
            Fh: u,
            Fl: d,
            Gh: h,
            Gl: l,
            Hh: p,
            Hl: b,
          } = this;
          return [e, t, r, n, i, s, o, a, c, f, u, d, h, l, p, b];
        }
        set(e, t, r, n, i, s, o, a, c, f, u, d, h, l, p, b) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | f),
            (this.Fh = 0 | u),
            (this.Fl = 0 | d),
            (this.Gh = 0 | h),
            (this.Gl = 0 | l),
            (this.Hh = 0 | p),
            (this.Hl = 0 | b);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4)
            (c[i] = e.getUint32(t)), (f[i] = e.getUint32((t += 4)));
          for (let o = 16; o < 80; o++) {
            const e = 0 | c[o - 15],
              t = 0 | f[o - 15],
              r =
                i.default.rotrSH(e, t, 1) ^
                i.default.rotrSH(e, t, 8) ^
                i.default.shrSH(e, t, 7),
              n =
                i.default.rotrSL(e, t, 1) ^
                i.default.rotrSL(e, t, 8) ^
                i.default.shrSL(e, t, 7),
              s = 0 | c[o - 2],
              a = 0 | f[o - 2],
              u =
                i.default.rotrSH(s, a, 19) ^
                i.default.rotrBH(s, a, 61) ^
                i.default.shrSH(s, a, 6),
              d =
                i.default.rotrSL(s, a, 19) ^
                i.default.rotrBL(s, a, 61) ^
                i.default.shrSL(s, a, 6),
              h = i.default.add4L(n, d, f[o - 7], f[o - 16]),
              l = i.default.add4H(h, r, u, c[o - 7], c[o - 16]);
            (c[o] = 0 | l), (f[o] = 0 | h);
          }
          let {
            Ah: r,
            Al: n,
            Bh: s,
            Bl: u,
            Ch: d,
            Cl: h,
            Dh: l,
            Dl: p,
            Eh: b,
            El: g,
            Fh: y,
            Fl: m,
            Gh: w,
            Gl: v,
            Hh: A,
            Hl: E,
          } = this;
          for (let x = 0; x < 80; x++) {
            const e =
                i.default.rotrSH(b, g, 14) ^
                i.default.rotrSH(b, g, 18) ^
                i.default.rotrBH(b, g, 41),
              t =
                i.default.rotrSL(b, g, 14) ^
                i.default.rotrSL(b, g, 18) ^
                i.default.rotrBL(b, g, 41),
              _ = (b & y) ^ (~b & w),
              B = (g & m) ^ (~g & v),
              S = i.default.add5L(E, t, B, a[x], f[x]),
              H = i.default.add5H(S, A, e, _, o[x], c[x]),
              C = 0 | S,
              T =
                i.default.rotrSH(r, n, 28) ^
                i.default.rotrBH(r, n, 34) ^
                i.default.rotrBH(r, n, 39),
              P =
                i.default.rotrSL(r, n, 28) ^
                i.default.rotrBL(r, n, 34) ^
                i.default.rotrBL(r, n, 39),
              I = (r & s) ^ (r & d) ^ (s & d),
              N = (n & u) ^ (n & h) ^ (u & h);
            (A = 0 | w),
              (E = 0 | v),
              (w = 0 | y),
              (v = 0 | m),
              (y = 0 | b),
              (m = 0 | g),
              ({ h: b, l: g } = i.default.add(0 | l, 0 | p, 0 | H, 0 | C)),
              (l = 0 | d),
              (p = 0 | h),
              (d = 0 | s),
              (h = 0 | u),
              (s = 0 | r),
              (u = 0 | n);
            const O = i.default.add3L(C, P, N);
            (r = i.default.add3H(O, H, T, I)), (n = 0 | O);
          }
          ({ h: r, l: n } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | r,
            0 | n
          )),
            ({ h: s, l: u } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | s,
              0 | u
            )),
            ({ h: d, l: h } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | d,
              0 | h
            )),
            ({ h: l, l: p } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | l,
              0 | p
            )),
            ({ h: b, l: g } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | b,
              0 | g
            )),
            ({ h: y, l: m } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | y,
              0 | m
            )),
            ({ h: w, l: v } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | w,
              0 | v
            )),
            ({ h: A, l: E } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | A,
              0 | E
            )),
            this.set(r, n, s, u, d, h, l, p, b, g, y, m, w, v, A, E);
        }
        roundClean() {
          c.fill(0), f.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      t.SHA512 = u;
      class d extends u {
        constructor() {
          super(28),
            (this.Ah = -1942145080),
            (this.Al = 424955298),
            (this.Bh = 1944164710),
            (this.Bl = -1982016298),
            (this.Ch = 502970286),
            (this.Cl = 855612546),
            (this.Dh = 1738396948),
            (this.Dl = 1479516111),
            (this.Eh = 258812777),
            (this.El = 2077511080),
            (this.Fh = 2011393907),
            (this.Fl = 79989058),
            (this.Gh = 1067287976),
            (this.Gl = 1780299464),
            (this.Hh = 286451373),
            (this.Hl = -1848208735);
        }
      }
      t.SHA512_224 = d;
      class h extends u {
        constructor() {
          super(32),
            (this.Ah = 573645204),
            (this.Al = -64227540),
            (this.Bh = -1621794909),
            (this.Bl = -934517566),
            (this.Ch = 596883563),
            (this.Cl = 1867755857),
            (this.Dh = -1774684391),
            (this.Dl = 1497426621),
            (this.Eh = -1775747358),
            (this.El = -1467023389),
            (this.Fh = -1101128155),
            (this.Fl = 1401305490),
            (this.Gh = 721525244),
            (this.Gl = 746961066),
            (this.Hh = 246885852),
            (this.Hl = -2117784414);
        }
      }
      t.SHA512_256 = h;
      class l extends u {
        constructor() {
          super(48),
            (this.Ah = -876896931),
            (this.Al = -1056596264),
            (this.Bh = 1654270250),
            (this.Bl = 914150663),
            (this.Ch = -1856437926),
            (this.Cl = 812702999),
            (this.Dh = 355462360),
            (this.Dl = -150054599),
            (this.Eh = 1731405415),
            (this.El = -4191439),
            (this.Fh = -1900787065),
            (this.Fl = 1750603025),
            (this.Gh = -619958771),
            (this.Gl = 1694076839),
            (this.Hh = 1203062813),
            (this.Hl = -1090891868);
        }
      }
      (t.SHA384 = l),
        (t.sha512 = (0, s.wrapConstructor)(() => new u())),
        (t.sha512_224 = (0, s.wrapConstructor)(() => new d())),
        (t.sha512_256 = (0, s.wrapConstructor)(() => new h())),
        (t.sha384 = (0, s.wrapConstructor)(() => new l()));
    },
    38842: (e, t, r) => {
      var n = r(52143);
      function i() {
        var e;
        try {
          e = t.storage.debug;
        } catch (r) {}
        return (
          !e &&
            "undefined" !== typeof n &&
            "env" in n &&
            (e = {
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
            }.DEBUG),
          e
        );
      }
      ((t = e.exports = r(69485)).log = function () {
        return (
          "object" === typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (t.formatArgs = function (e) {
          var r = this.useColors;
          if (
            ((e[0] =
              (r ? "%c" : "") +
              this.namespace +
              (r ? " %c" : " ") +
              e[0] +
              (r ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !r)
          )
            return;
          var n = "color: " + this.color;
          e.splice(1, 0, n, "color: inherit");
          var i = 0,
            s = 0;
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && (i++, "%c" === e && (s = i));
          }),
            e.splice(s, 0, n);
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (r) {}
        }),
        (t.load = i),
        (t.useColors = function () {
          if (
            "undefined" !== typeof window &&
            window.process &&
            "renderer" === window.process.type
          )
            return !0;
          return (
            ("undefined" !== typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" !== typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          "undefined" != typeof chrome && "undefined" != typeof chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
        (t.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson",
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        }),
        t.enable(i());
    },
    41036: (e) => {
      var t = 1e3,
        r = 60 * t,
        n = 60 * r,
        i = 24 * n,
        s = 365.25 * i;
      function o(e, t, r) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + " " + r
            : Math.ceil(e / t) + " " + r + "s";
      }
      e.exports = function (e, a) {
        a = a || {};
        var c,
          f = typeof e;
        if ("string" === f && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var o =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!o) return;
            var a = parseFloat(o[1]);
            switch ((o[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return a * s;
              case "days":
              case "day":
              case "d":
                return a * i;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return a * n;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return a * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return a * t;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return a;
              default:
                return;
            }
          })(e);
        if ("number" === f && !1 === isNaN(e))
          return a.long
            ? o((c = e), i, "day") ||
                o(c, n, "hour") ||
                o(c, r, "minute") ||
                o(c, t, "second") ||
                c + " ms"
            : (function (e) {
                if (e >= i) return Math.round(e / i) + "d";
                if (e >= n) return Math.round(e / n) + "h";
                if (e >= r) return Math.round(e / r) + "m";
                if (e >= t) return Math.round(e / t) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    43165: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hash = t.nextTick = t.byteSwapIfBE = t.isLE = void 0),
        (t.isBytes = function (e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }),
        (t.u8 = function (e) {
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }),
        (t.u32 = function (e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        }),
        (t.createView = function (e) {
          return new DataView(e.buffer, e.byteOffset, e.byteLength);
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.rotl = function (e, t) {
          return (e << t) | ((e >>> (32 - t)) >>> 0);
        }),
        (t.byteSwap = s),
        (t.byteSwap32 = function (e) {
          for (let t = 0; t < e.length; t++) e[t] = s(e[t]);
        }),
        (t.bytesToHex = function (e) {
          if (((0, i.abytes)(e), o)) return e.toHex();
          let t = "";
          for (let r = 0; r < e.length; r++) t += a[e[r]];
          return t;
        }),
        (t.hexToBytes = function (e) {
          if ("string" !== typeof e)
            throw new Error("hex string expected, got " + typeof e);
          if (o) return Uint8Array.fromHex(e);
          const t = e.length,
            r = t / 2;
          if (t % 2)
            throw new Error(
              "hex string expected, got unpadded hex of length " + t
            );
          const n = new Uint8Array(r);
          for (let i = 0, s = 0; i < r; i++, s += 2) {
            const t = f(e.charCodeAt(s)),
              r = f(e.charCodeAt(s + 1));
            if (void 0 === t || void 0 === r) {
              const t = e[s] + e[s + 1];
              throw new Error(
                'hex string expected, got non-hex character "' +
                  t +
                  '" at index ' +
                  s
              );
            }
            n[i] = 16 * t + r;
          }
          return n;
        }),
        (t.asyncLoop = async function (e, r, n) {
          let i = Date.now();
          for (let s = 0; s < e; s++) {
            n(s);
            const e = Date.now() - i;
            (e >= 0 && e < r) || (await (0, t.nextTick)(), (i += e));
          }
        }),
        (t.utf8ToBytes = u),
        (t.toBytes = d),
        (t.concatBytes = function () {
          let e = 0;
          for (let r = 0; r < arguments.length; r++) {
            const t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            (0, i.abytes)(t), (e += t.length);
          }
          const t = new Uint8Array(e);
          for (let r = 0, n = 0; r < arguments.length; r++) {
            const e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            t.set(e, n), (n += e.length);
          }
          return t;
        }),
        (t.checkOpts = function (e, t) {
          if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
            throw new Error("Options should be object or undefined");
          return Object.assign(e, t);
        }),
        (t.wrapConstructor = function (e) {
          const t = (t) => e().update(d(t)).digest(),
            r = e();
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = () => e()),
            t
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          const t = (t, r) => e(r).update(d(t)).digest(),
            r = e({});
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          const t = (t, r) => e(r).update(d(t)).digest(),
            r = e({});
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.randomBytes = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
          if (n.crypto && "function" === typeof n.crypto.getRandomValues)
            return n.crypto.getRandomValues(new Uint8Array(e));
          if (n.crypto && "function" === typeof n.crypto.randomBytes)
            return Uint8Array.from(n.crypto.randomBytes(e));
          throw new Error("crypto.getRandomValues must be defined");
        });
      const n = r(86835),
        i = r(45791);
      function s(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      (t.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => s(e));
      const o =
          "function" === typeof Uint8Array.from([]).toHex &&
          "function" === typeof Uint8Array.fromHex,
        a = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      const c = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function f(e) {
        return e >= c._0 && e <= c._9
          ? e - c._0
          : e >= c.A && e <= c.F
          ? e - (c.A - 10)
          : e >= c.a && e <= c.f
          ? e - (c.a - 10)
          : void 0;
      }
      function u(e) {
        if ("string" !== typeof e)
          throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function d(e) {
        return "string" === typeof e && (e = u(e)), (0, i.abytes)(e), e;
      }
      t.nextTick = async () => {};
      t.Hash = class {
        clone() {
          return this._cloneInto();
        }
      };
    },
    43419: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getHash = o),
        (t.createCurve = function (e, t) {
          const r = (t) => (0, s.weierstrass)({ ...e, ...o(t) });
          return { ...r(t), create: r };
        });
      const n = r(26449),
        i = r(43165),
        s = r(31006);
      function o(e) {
        return {
          hash: e,
          hmac: function (t) {
            for (
              var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              s[o - 1] = arguments[o];
            return (0, n.hmac)(e, t, (0, i.concatBytes)(...s));
          },
          randomBytes: i.randomBytes,
        };
      }
    },
    45791: (e, t) => {
      "use strict";
      function r(e) {
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
          var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
          i < r;
          i++
        )
          n[i - 1] = arguments[i];
        if (n.length > 0 && !n.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + n + ", got length=" + e.length
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.anumber = r),
        (t.abytes = n),
        (t.ahash = function (e) {
          if ("function" !== typeof e || "function" !== typeof e.create)
            throw new Error("Hash should be wrapped by utils.wrapConstructor");
          r(e.outputLen), r(e.blockLen);
        }),
        (t.aexists = function (e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (e.destroyed) throw new Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw new Error("Hash#digest() has already been called");
        }),
        (t.aoutput = function (e, t) {
          n(e);
          const r = t.outputLen;
          if (e.length < r)
            throw new Error(
              "digestInto() expects output buffer of length at least " + r
            );
        });
    },
    46927: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encodeToCurve = t.hashToCurve = t.schnorr = t.secp256k1 = void 0);
      const n = r(21298),
        i = r(43165),
        s = r(43419),
        o = r(63802),
        a = r(52208),
        c = r(58571),
        f = r(31006),
        u = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        d = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        h = BigInt(1),
        l = BigInt(2),
        p = (e, t) => (e + t / l) / t;
      function b(e) {
        const t = u,
          r = BigInt(3),
          n = BigInt(6),
          i = BigInt(11),
          s = BigInt(22),
          o = BigInt(23),
          c = BigInt(44),
          f = BigInt(88),
          d = (e * e * e) % t,
          h = (d * d * e) % t,
          p = ((0, a.pow2)(h, r, t) * h) % t,
          b = ((0, a.pow2)(p, r, t) * h) % t,
          y = ((0, a.pow2)(b, l, t) * d) % t,
          m = ((0, a.pow2)(y, i, t) * y) % t,
          w = ((0, a.pow2)(m, s, t) * m) % t,
          v = ((0, a.pow2)(w, c, t) * w) % t,
          A = ((0, a.pow2)(v, f, t) * v) % t,
          E = ((0, a.pow2)(A, c, t) * w) % t,
          x = ((0, a.pow2)(E, r, t) * h) % t,
          _ = ((0, a.pow2)(x, o, t) * m) % t,
          B = ((0, a.pow2)(_, n, t) * d) % t,
          S = (0, a.pow2)(B, l, t);
        if (!g.eql(g.sqr(S), e)) throw new Error("Cannot find square root");
        return S;
      }
      const g = (0, a.Field)(u, void 0, void 0, { sqrt: b });
      t.secp256k1 = (0, s.createCurve)(
        {
          a: BigInt(0),
          b: BigInt(7),
          Fp: g,
          n: d,
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
            splitScalar: (e) => {
              const t = d,
                r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                n = -h * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                s = r,
                o = BigInt("0x100000000000000000000000000000000"),
                c = p(s * e, t),
                f = p(-n * e, t);
              let u = (0, a.mod)(e - c * r - f * i, t),
                l = (0, a.mod)(-c * n - f * s, t);
              const b = u > o,
                g = l > o;
              if ((b && (u = t - u), g && (l = t - l), u > o || l > o))
                throw new Error("splitScalar: Endomorphism failed, k=" + e);
              return { k1neg: b, k1: u, k2neg: g, k2: l };
            },
          },
        },
        n.sha256
      );
      const y = BigInt(0),
        m = {};
      function w(e) {
        let t = m[e];
        if (void 0 === t) {
          const r = (0, n.sha256)(Uint8Array.from(e, (e) => e.charCodeAt(0)));
          (t = (0, c.concatBytes)(r, r)), (m[e] = t);
        }
        for (
          var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1;
          s < r;
          s++
        )
          i[s - 1] = arguments[s];
        return (0, n.sha256)((0, c.concatBytes)(t, ...i));
      }
      const v = (e) => e.toRawBytes(!0).slice(1),
        A = (e) => (0, c.numberToBytesBE)(e, 32),
        E = (e) => (0, a.mod)(e, u),
        x = (e) => (0, a.mod)(e, d),
        _ = t.secp256k1.ProjectivePoint;
      function B(e) {
        let r = t.secp256k1.utils.normPrivateKeyToScalar(e),
          n = _.fromPrivateKey(r);
        return { scalar: n.hasEvenY() ? r : x(-r), bytes: v(n) };
      }
      function S(e) {
        (0, c.aInRange)("x", e, h, u);
        const t = E(e * e);
        let r = b(E(t * e + BigInt(7)));
        r % l !== y && (r = E(-r));
        const n = new _(e, r, h);
        return n.assertValidity(), n;
      }
      const H = c.bytesToNumberBE;
      function C() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return x(H(w("BIP0340/challenge", ...t)));
      }
      function T(e) {
        return B(e).bytes;
      }
      function P(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : (0, i.randomBytes)(32);
        const n = (0, c.ensureBytes)("message", e),
          { bytes: s, scalar: o } = B(t),
          a = (0, c.ensureBytes)("auxRand", r, 32),
          f = A(o ^ H(w("BIP0340/aux", a))),
          u = w("BIP0340/nonce", f, s, n),
          d = x(H(u));
        if (d === y) throw new Error("sign failed: k is zero");
        const { bytes: h, scalar: l } = B(d),
          p = C(h, s, n),
          b = new Uint8Array(64);
        if ((b.set(h, 0), b.set(A(x(l + p * o)), 32), !I(b, n, s)))
          throw new Error("sign: Invalid signature produced");
        return b;
      }
      function I(e, t, r) {
        const n = (0, c.ensureBytes)("signature", e, 64),
          i = (0, c.ensureBytes)("message", t),
          s = (0, c.ensureBytes)("publicKey", r, 32);
        try {
          const e = S(H(s)),
            t = H(n.subarray(0, 32));
          if (!(0, c.inRange)(t, h, u)) return !1;
          const r = H(n.subarray(32, 64));
          if (!(0, c.inRange)(r, h, d)) return !1;
          const l = C(A(t), v(e), i),
            p =
              ((o = e),
              (a = r),
              (f = x(-l)),
              _.BASE.multiplyAndAddUnsafe(o, a, f));
          return !(!p || !p.hasEvenY() || p.toAffine().x !== t);
        } catch (l) {
          return !1;
        }
        var o, a, f;
      }
      t.schnorr = {
        getPublicKey: T,
        sign: P,
        verify: I,
        utils: {
          randomPrivateKey: t.secp256k1.utils.randomPrivateKey,
          lift_x: S,
          pointToBytes: v,
          numberToBytesBE: c.numberToBytesBE,
          bytesToNumberBE: c.bytesToNumberBE,
          taggedHash: w,
          mod: a.mod,
        },
      };
      const N = (() =>
          (0, o.isogenyMap)(
            g,
            [
              [
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
                "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
                "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
              ],
              [
                "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
                "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
              [
                "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
                "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
                "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
                "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
              ],
              [
                "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
                "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
                "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
            ].map((e) => e.map((e) => BigInt(e)))
          ))(),
        O = (() =>
          (0, f.mapToCurveSimpleSWU)(g, {
            A: BigInt(
              "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
            ),
            B: BigInt("1771"),
            Z: g.create(BigInt("-11")),
          }))(),
        L = (() =>
          (0, o.createHasher)(
            t.secp256k1.ProjectivePoint,
            (e) => {
              const { x: t, y: r } = O(g.create(e[0]));
              return N(t, r);
            },
            {
              DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
              encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
              p: g.ORDER,
              m: 1,
              k: 128,
              expand: "xmd",
              hash: n.sha256,
            }
          ))();
      (t.hashToCurve = L.hashToCurve), (t.encodeToCurve = L.encodeToCurve);
    },
    47171: (e, t, r) => {
      "use strict";
      r.d(t, { So: () => o });
      var n = r(29519),
        i = r(30068),
        s = r(6370);
      function o(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { as: r = "string" === typeof e ? "Hex" : "Bytes" } = t,
          o = (0, n.lY)(i.HT(e));
        return "Bytes" === r ? o : s.uK(o);
      }
    },
    47758: (e, t, r) => {
      "use strict";
      function n(e) {
        var t,
          r,
          i = "";
        if ("string" == typeof e || "number" == typeof e) i += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = n(e[t])) && (i && (i += " "), (i += r));
          else for (t in e) e[t] && (i && (i += " "), (i += t));
        return i;
      }
      function i() {
        for (var e, t, r = 0, i = ""; r < arguments.length; )
          (e = arguments[r++]) && (t = n(e)) && (i && (i += " "), (i += t));
        return i;
      }
      r.r(t), r.d(t, { clsx: () => i, default: () => s });
      const s = i;
    },
    48809: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      const n = "#__bigint";
      function i(e, t, r) {
        return JSON.stringify(
          e,
          (e, r) =>
            "function" === typeof t
              ? t(e, r)
              : "bigint" === typeof r
              ? r.toString() + n
              : r,
          r
        );
      }
    },
    51722: (e, t, r) => {
      "use strict";
      r.d(t, { Rt: () => o, sO: () => s });
      var n = r(71274);
      const { I: i } = n.ge,
        s = (e) =>
          null === e || ("object" != typeof e && "function" != typeof e),
        o = (e) => void 0 === e.strings;
    },
    52208: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isNegativeLE = void 0),
        (t.mod = d),
        (t.pow = h),
        (t.pow2 = function (e, t, r) {
          let n = e;
          for (; t-- > i; ) (n *= n), (n %= r);
          return n;
        }),
        (t.invert = l),
        (t.tonelliShanks = p),
        (t.FpSqrt = b),
        (t.validateField = function (e) {
          const t = g.reduce((e, t) => ((e[t] = "function"), e), {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "isSafeInteger",
            BITS: "isSafeInteger",
          });
          return (0, n.validateObject)(e, t);
        }),
        (t.FpPow = y),
        (t.FpInvertBatch = m),
        (t.FpDiv = function (e, t, r) {
          return e.mul(t, "bigint" === typeof r ? l(r, e.ORDER) : e.inv(r));
        }),
        (t.FpLegendre = w),
        (t.FpIsSquare = function (e) {
          const t = w(e.ORDER);
          return (r) => {
            const n = t(e, r);
            return e.eql(n, e.ZERO) || e.eql(n, e.ONE);
          };
        }),
        (t.nLength = v),
        (t.Field = function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (e <= i)
            throw new Error("invalid field: expected ORDER > 0, got " + e);
          const { nBitLength: a, nByteLength: c } = v(e, t);
          if (c > 2048)
            throw new Error("invalid field: expected ORDER of <= 2048 bytes");
          let f;
          const u = Object.freeze({
            ORDER: e,
            isLE: r,
            BITS: a,
            BYTES: c,
            MASK: (0, n.bitMask)(a),
            ZERO: i,
            ONE: s,
            create: (t) => d(t, e),
            isValid: (t) => {
              if ("bigint" !== typeof t)
                throw new Error(
                  "invalid field element: expected bigint, got " + typeof t
                );
              return i <= t && t < e;
            },
            is0: (e) => e === i,
            isOdd: (e) => (e & s) === s,
            neg: (t) => d(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => d(t * t, e),
            add: (t, r) => d(t + r, e),
            sub: (t, r) => d(t - r, e),
            mul: (t, r) => d(t * r, e),
            pow: (e, t) => y(u, e, t),
            div: (t, r) => d(t * l(r, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => l(t, e),
            sqrt: o.sqrt || ((t) => (f || (f = b(e)), f(u, t))),
            invertBatch: (e) => m(u, e),
            cmov: (e, t, r) => (r ? t : e),
            toBytes: (e) =>
              r ? (0, n.numberToBytesLE)(e, c) : (0, n.numberToBytesBE)(e, c),
            fromBytes: (e) => {
              if (e.length !== c)
                throw new Error(
                  "Field.fromBytes: expected " + c + " bytes, got " + e.length
                );
              return r ? (0, n.bytesToNumberLE)(e) : (0, n.bytesToNumberBE)(e);
            },
          });
          return Object.freeze(u);
        }),
        (t.FpSqrtOdd = function (e, t) {
          if (!e.isOdd) throw new Error("Field doesn't have isOdd");
          const r = e.sqrt(t);
          return e.isOdd(r) ? r : e.neg(r);
        }),
        (t.FpSqrtEven = function (e, t) {
          if (!e.isOdd) throw new Error("Field doesn't have isOdd");
          const r = e.sqrt(t);
          return e.isOdd(r) ? e.neg(r) : r;
        }),
        (t.hashToPrivateScalar = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const i = (e = (0, n.ensureBytes)("privateHash", e)).length,
            o = v(t).nByteLength + 8;
          if (o < 24 || i < o || i > 1024)
            throw new Error(
              "hashToPrivateScalar: expected " +
                o +
                "-1024 bytes of input, got " +
                i
            );
          return (
            d(
              r ? (0, n.bytesToNumberLE)(e) : (0, n.bytesToNumberBE)(e),
              t - s
            ) + s
          );
        }),
        (t.getFieldBytesLength = A),
        (t.getMinHashLength = E),
        (t.mapHashToField = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const i = e.length,
            o = A(t),
            a = E(t);
          if (i < 16 || i < a || i > 1024)
            throw new Error("expected " + a + "-1024 bytes of input, got " + i);
          const c =
            d(
              r ? (0, n.bytesToNumberLE)(e) : (0, n.bytesToNumberBE)(e),
              t - s
            ) + s;
          return r
            ? (0, n.numberToBytesLE)(c, o)
            : (0, n.numberToBytesBE)(c, o);
        });
      const n = r(58571),
        i = BigInt(0),
        s = BigInt(1),
        o = BigInt(2),
        a = BigInt(3),
        c = BigInt(4),
        f = BigInt(5),
        u = BigInt(8);
      function d(e, t) {
        const r = e % t;
        return r >= i ? r : t + r;
      }
      function h(e, t, r) {
        if (t < i) throw new Error("invalid exponent, negatives unsupported");
        if (r <= i) throw new Error("invalid modulus");
        if (r === s) return i;
        let n = s;
        for (; t > i; )
          t & s && (n = (n * e) % r), (e = (e * e) % r), (t >>= s);
        return n;
      }
      function l(e, t) {
        if (e === i) throw new Error("invert: expected non-zero number");
        if (t <= i)
          throw new Error("invert: expected positive modulus, got " + t);
        let r = d(e, t),
          n = t,
          o = i,
          a = s,
          c = s,
          f = i;
        for (; r !== i; ) {
          const e = n / r,
            t = n % r,
            i = o - c * e,
            s = a - f * e;
          (n = r), (r = t), (o = c), (a = f), (c = i), (f = s);
        }
        if (n !== s) throw new Error("invert: does not exist");
        return d(o, t);
      }
      function p(e) {
        const t = (e - s) / o;
        let r, n, a;
        for (r = e - s, n = 0; r % o === i; r /= o, n++);
        for (a = o; a < e && h(a, t, e) !== e - s; a++)
          if (a > 1e3)
            throw new Error("Cannot find square root: likely non-prime P");
        if (1 === n) {
          const t = (e + s) / c;
          return function (e, r) {
            const n = e.pow(r, t);
            if (!e.eql(e.sqr(n), r)) throw new Error("Cannot find square root");
            return n;
          };
        }
        const f = (r + s) / o;
        return function (e, i) {
          if (e.pow(i, t) === e.neg(e.ONE))
            throw new Error("Cannot find square root");
          let o = n,
            c = e.pow(e.mul(e.ONE, a), r),
            u = e.pow(i, f),
            d = e.pow(i, r);
          for (; !e.eql(d, e.ONE); ) {
            if (e.eql(d, e.ZERO)) return e.ZERO;
            let t = 1;
            for (let n = e.sqr(d); t < o && !e.eql(n, e.ONE); t++) n = e.sqr(n);
            const r = e.pow(c, s << BigInt(o - t - 1));
            (c = e.sqr(r)), (u = e.mul(u, r)), (d = e.mul(d, c)), (o = t);
          }
          return u;
        };
      }
      function b(e) {
        if (e % c === a) {
          const t = (e + s) / c;
          return function (e, r) {
            const n = e.pow(r, t);
            if (!e.eql(e.sqr(n), r)) throw new Error("Cannot find square root");
            return n;
          };
        }
        if (e % u === f) {
          const t = (e - f) / u;
          return function (e, r) {
            const n = e.mul(r, o),
              i = e.pow(n, t),
              s = e.mul(r, i),
              a = e.mul(e.mul(s, o), i),
              c = e.mul(s, e.sub(a, e.ONE));
            if (!e.eql(e.sqr(c), r)) throw new Error("Cannot find square root");
            return c;
          };
        }
        return p(e);
      }
      t.isNegativeLE = (e, t) => (d(e, t) & s) === s;
      const g = [
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
      function y(e, t, r) {
        if (r < i) throw new Error("invalid exponent, negatives unsupported");
        if (r === i) return e.ONE;
        if (r === s) return t;
        let n = e.ONE,
          o = t;
        for (; r > i; ) r & s && (n = e.mul(n, o)), (o = e.sqr(o)), (r >>= s);
        return n;
      }
      function m(e, t) {
        const r = new Array(t.length),
          n = t.reduce(
            (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
            e.ONE
          ),
          i = e.inv(n);
        return (
          t.reduceRight(
            (t, n, i) =>
              e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
            i
          ),
          r
        );
      }
      function w(e) {
        const t = (e - s) / o;
        return (e, r) => e.pow(r, t);
      }
      function v(e, t) {
        const r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function A(e) {
        if ("bigint" !== typeof e)
          throw new Error("field order must be bigint");
        const t = e.toString(2).length;
        return Math.ceil(t / 8);
      }
      function E(e) {
        const t = A(e);
        return t + Math.ceil(t / 2);
      }
    },
    54715: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ripemd160 = t.RIPEMD160 = void 0);
      const n = r(72900);
      (t.RIPEMD160 = n.RIPEMD160), (t.ripemd160 = n.ripemd160);
    },
    54960: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.testnet = t.bitcoin = void 0),
        (t.bitcoin = {
          messagePrefix: "\x18Bitcoin Signed Message:\n",
          bech32: "bc",
          bip32: { public: 76067358, private: 76066276 },
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
        }),
        (t.testnet = {
          messagePrefix: "\x18Bitcoin Signed Message:\n",
          bech32: "tb",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        });
    },
    58571: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notImplemented = t.bitMask = void 0),
        (t.isBytes = i),
        (t.abytes = s),
        (t.abool = function (e, t) {
          if ("boolean" !== typeof t)
            throw new Error(e + " boolean expected, got " + t);
        }),
        (t.numberToHexUnpadded = o),
        (t.hexToNumber = a),
        (t.bytesToHex = u),
        (t.hexToBytes = l),
        (t.bytesToNumberBE = function (e) {
          return a(u(e));
        }),
        (t.bytesToNumberLE = function (e) {
          return s(e), a(u(Uint8Array.from(e).reverse()));
        }),
        (t.numberToBytesBE = p),
        (t.numberToBytesLE = function (e, t) {
          return p(e, t).reverse();
        }),
        (t.numberToVarBytesBE = function (e) {
          return l(o(e));
        }),
        (t.ensureBytes = function (e, t, r) {
          let n;
          if ("string" === typeof t)
            try {
              n = l(t);
            } catch (o) {
              throw new Error(
                e + " must be hex string or Uint8Array, cause: " + o
              );
            }
          else {
            if (!i(t)) throw new Error(e + " must be hex string or Uint8Array");
            n = Uint8Array.from(t);
          }
          const s = n.length;
          if ("number" === typeof r && s !== r)
            throw new Error(e + " of length " + r + " expected, got " + s);
          return n;
        }),
        (t.concatBytes = b),
        (t.equalBytes = function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
          return 0 === r;
        }),
        (t.utf8ToBytes = function (e) {
          if ("string" !== typeof e) throw new Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        }),
        (t.inRange = y),
        (t.aInRange = function (e, t, r, n) {
          if (!y(t, r, n))
            throw new Error(
              "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
            );
        }),
        (t.bitLen = function (e) {
          let t;
          for (t = 0; e > r; e >>= n, t += 1);
          return t;
        }),
        (t.bitGet = function (e, t) {
          return (e >> BigInt(t)) & n;
        }),
        (t.bitSet = function (e, t, i) {
          return e | ((i ? n : r) << BigInt(t));
        }),
        (t.createHmacDrbg = function (e, t, r) {
          if ("number" !== typeof e || e < 2)
            throw new Error("hashLen must be a number");
          if ("number" !== typeof t || t < 2)
            throw new Error("qByteLen must be a number");
          if ("function" !== typeof r)
            throw new Error("hmacFn must be a function");
          let n = m(e),
            i = m(e),
            s = 0;
          const o = () => {
              n.fill(1), i.fill(0), (s = 0);
            },
            a = function () {
              for (
                var e = arguments.length, t = new Array(e), s = 0;
                s < e;
                s++
              )
                t[s] = arguments[s];
              return r(i, n, ...t);
            },
            c = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : m(0);
              (i = a(w([0]), e)),
                (n = a()),
                0 !== e.length && ((i = a(w([1]), e)), (n = a()));
            },
            f = () => {
              if (s++ >= 1e3) throw new Error("drbg: tried 1000 values");
              let e = 0;
              const r = [];
              for (; e < t; ) {
                n = a();
                const t = n.slice();
                r.push(t), (e += n.length);
              }
              return b(...r);
            };
          return (e, t) => {
            let r;
            for (o(), c(e); !(r = t(f())); ) c();
            return o(), r;
          };
        }),
        (t.validateObject = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const n = (t, r, n) => {
            const i = v[r];
            if ("function" !== typeof i)
              throw new Error("invalid validator function");
            const s = e[t];
            if ((!n || void 0 !== s) && !i(s, e))
              throw new Error(
                "param " +
                  String(t) +
                  " is invalid. Expected " +
                  r +
                  ", got " +
                  s
              );
          };
          for (const [i, s] of Object.entries(t)) n(i, s, !1);
          for (const [i, s] of Object.entries(r)) n(i, s, !0);
          return e;
        }),
        (t.memoized = function (e) {
          const t = new WeakMap();
          return function (r) {
            const n = t.get(r);
            if (void 0 !== n) return n;
            for (
              var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1;
              o < i;
              o++
            )
              s[o - 1] = arguments[o];
            const a = e(r, ...s);
            return t.set(r, a), a;
          };
        });
      const r = BigInt(0),
        n = BigInt(1);
      function i(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function s(e) {
        if (!i(e)) throw new Error("Uint8Array expected");
      }
      function o(e) {
        const t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function a(e) {
        if ("string" !== typeof e)
          throw new Error("hex string expected, got " + typeof e);
        return "" === e ? r : BigInt("0x" + e);
      }
      const c =
          "function" === typeof Uint8Array.from([]).toHex &&
          "function" === typeof Uint8Array.fromHex,
        f = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function u(e) {
        if ((s(e), c)) return e.toHex();
        let t = "";
        for (let r = 0; r < e.length; r++) t += f[e[r]];
        return t;
      }
      const d = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function h(e) {
        return e >= d._0 && e <= d._9
          ? e - d._0
          : e >= d.A && e <= d.F
          ? e - (d.A - 10)
          : e >= d.a && e <= d.f
          ? e - (d.a - 10)
          : void 0;
      }
      function l(e) {
        if ("string" !== typeof e)
          throw new Error("hex string expected, got " + typeof e);
        if (c) return Uint8Array.fromHex(e);
        const t = e.length,
          r = t / 2;
        if (t % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + t
          );
        const n = new Uint8Array(r);
        for (let i = 0, s = 0; i < r; i++, s += 2) {
          const t = h(e.charCodeAt(s)),
            r = h(e.charCodeAt(s + 1));
          if (void 0 === t || void 0 === r) {
            const t = e[s] + e[s + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                t +
                '" at index ' +
                s
            );
          }
          n[i] = 16 * t + r;
        }
        return n;
      }
      function p(e, t) {
        return l(e.toString(16).padStart(2 * t, "0"));
      }
      function b() {
        let e = 0;
        for (let r = 0; r < arguments.length; r++) {
          const t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          s(t), (e += t.length);
        }
        const t = new Uint8Array(e);
        for (let r = 0, n = 0; r < arguments.length; r++) {
          const e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          t.set(e, n), (n += e.length);
        }
        return t;
      }
      const g = (e) => "bigint" === typeof e && r <= e;
      function y(e, t, r) {
        return g(e) && g(t) && g(r) && t <= e && e < r;
      }
      t.bitMask = (e) => (n << BigInt(e)) - n;
      const m = (e) => new Uint8Array(e),
        w = (e) => Uint8Array.from(e);
      const v = {
        bigint: (e) => "bigint" === typeof e,
        function: (e) => "function" === typeof e,
        boolean: (e) => "boolean" === typeof e,
        string: (e) => "string" === typeof e,
        stringOrUint8Array: (e) => "string" === typeof e || i(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" === typeof e && Number.isSafeInteger(e.outputLen),
      };
      t.notImplemented = () => {
        throw new Error("not implemented");
      };
    },
    62839: (e, t, r) => {
      "use strict";
      t.dg = void 0;
      var n = r(95851);
      Object.defineProperty(t, "dg", {
        enumerable: !0,
        get: function () {
          return n.ECPairFactory;
        },
      });
    },
    62950: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.testEcc = void 0);
      const i = (e) => n.from(e, "hex");
      function s(e) {
        if (!e) throw new Error("ecc library invalid");
      }
      t.testEcc = function (e) {
        s(
          e.isPoint(
            i(
              "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
            )
          )
        ),
          s(
            !e.isPoint(
              i(
                "030000000000000000000000000000000000000000000000000000000000000005"
              )
            )
          ),
          s(
            e.isPrivate(
              i(
                "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
              )
            )
          ),
          s(
            e.isPrivate(
              i(
                "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"
              )
            )
          ),
          s(
            !e.isPrivate(
              i(
                "0000000000000000000000000000000000000000000000000000000000000000"
              )
            )
          ),
          s(
            !e.isPrivate(
              i(
                "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
              )
            )
          ),
          s(
            !e.isPrivate(
              i(
                "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142"
              )
            )
          ),
          s(
            n
              .from(
                e.privateAdd(
                  i(
                    "0000000000000000000000000000000000000000000000000000000000000001"
                  ),
                  i(
                    "0000000000000000000000000000000000000000000000000000000000000000"
                  )
                )
              )
              .equals(
                i(
                  "0000000000000000000000000000000000000000000000000000000000000001"
                )
              )
          ),
          s(
            null ===
              e.privateAdd(
                i(
                  "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"
                ),
                i(
                  "0000000000000000000000000000000000000000000000000000000000000003"
                )
              )
          ),
          s(
            n
              .from(
                e.privateAdd(
                  i(
                    "e211078564db65c3ce7704f08262b1f38f1ef412ad15b5ac2d76657a63b2c500"
                  ),
                  i(
                    "b51fbb69051255d1becbd683de5848242a89c229348dd72896a87ada94ae8665"
                  )
                )
              )
              .equals(
                i(
                  "9730c2ee69edbb958d42db7460bafa18fef9d955325aec99044c81c8282b0a24"
                )
              )
          ),
          s(
            n
              .from(
                e.privateNegate(
                  i(
                    "0000000000000000000000000000000000000000000000000000000000000001"
                  )
                )
              )
              .equals(
                i(
                  "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"
                )
              )
          ),
          s(
            n
              .from(
                e.privateNegate(
                  i(
                    "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"
                  )
                )
              )
              .equals(
                i(
                  "0000000000000000000000000000000000000000000000000000000000000003"
                )
              )
          ),
          s(
            n
              .from(
                e.privateNegate(
                  i(
                    "b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"
                  )
                )
              )
              .equals(
                i(
                  "4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792"
                )
              )
          ),
          s(
            n
              .from(
                e.pointCompress(
                  i(
                    "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
                  ),
                  !0
                )
              )
              .equals(
                i(
                  "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                )
              )
          ),
          s(
            n
              .from(
                e.pointCompress(
                  i(
                    "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
                  ),
                  !1
                )
              )
              .equals(
                i(
                  "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
                )
              )
          ),
          s(
            n
              .from(
                e.pointCompress(
                  i(
                    "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                  ),
                  !0
                )
              )
              .equals(
                i(
                  "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                )
              )
          ),
          s(
            n
              .from(
                e.pointCompress(
                  i(
                    "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                  ),
                  !1
                )
              )
              .equals(
                i(
                  "0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
                )
              )
          ),
          s(
            n
              .from(
                e.pointFromScalar(
                  i(
                    "b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"
                  )
                )
              )
              .equals(
                i(
                  "02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99"
                )
              )
          ),
          s(
            null ===
              e.xOnlyPointAddTweak(
                i(
                  "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                ),
                i(
                  "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"
                )
              )
          );
        let t = e.xOnlyPointAddTweak(
          i("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"),
          i("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac")
        );
        s(
          n
            .from(t.xOnlyPubkey)
            .equals(
              i(
                "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
              )
            ) && 1 === t.parity
        ),
          (t = e.xOnlyPointAddTweak(
            i(
              "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"
            ),
            i(
              "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47"
            )
          )),
          s(
            n
              .from(t.xOnlyPubkey)
              .equals(
                i(
                  "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
                )
              ) && 0 === t.parity
          ),
          s(
            n
              .from(
                e.sign(
                  i(
                    "5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"
                  ),
                  i(
                    "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"
                  )
                )
              )
              .equals(
                i(
                  "54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"
                )
              )
          ),
          s(
            e.verify(
              i(
                "5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"
              ),
              i(
                "0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
              ),
              i(
                "54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5"
              )
            )
          ),
          e.signSchnorr &&
            s(
              n
                .from(
                  e.signSchnorr(
                    i(
                      "7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"
                    ),
                    i(
                      "c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"
                    ),
                    i(
                      "c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906"
                    )
                  )
                )
                .equals(
                  i(
                    "5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7"
                  )
                )
            ),
          e.verifySchnorr &&
            s(
              e.verifySchnorr(
                i(
                  "7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"
                ),
                i(
                  "dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"
                ),
                i(
                  "5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7"
                )
              )
            );
      };
    },
    63802: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.expand_message_xmd = f),
        (t.expand_message_xof = u),
        (t.hash_to_field = d),
        (t.isogenyMap = function (e, t) {
          const r = t.map((e) => Array.from(e).reverse());
          return (t, n) => {
            const [i, s, o, a] = r.map((r) =>
              r.reduce((r, n) => e.add(e.mul(r, t), n))
            );
            if (e.is0(s) || e.is0(a)) throw new Error("bad point: ZERO");
            return (
              (t = e.div(i, s)), (n = e.mul(n, e.div(o, a))), { x: t, y: n }
            );
          };
        }),
        (t.createHasher = function (e, t, r) {
          if ("function" !== typeof t)
            throw new Error("mapToCurve() must be defined");
          return {
            hashToCurve(n, i) {
              const s = d(n, 2, { ...r, DST: r.DST, ...i }),
                o = e.fromAffine(t(s[0])),
                a = e.fromAffine(t(s[1])),
                c = o.add(a).clearCofactor();
              return c.assertValidity(), c;
            },
            encodeToCurve(n, i) {
              const s = d(n, 1, { ...r, DST: r.encodeDST, ...i }),
                o = e.fromAffine(t(s[0])).clearCofactor();
              return o.assertValidity(), o;
            },
            mapToCurve(r) {
              if (!Array.isArray(r))
                throw new Error("mapToCurve: expected array of bigints");
              for (const e of r)
                if ("bigint" !== typeof e)
                  throw new Error("mapToCurve: expected array of bigints");
              const n = e.fromAffine(t(r)).clearCofactor();
              return n.assertValidity(), n;
            },
          };
        });
      const n = r(52208),
        i = r(58571),
        s = i.bytesToNumberBE;
      function o(e, t) {
        if ((c(e), c(t), e < 0 || e >= 1 << (8 * t)))
          throw new Error("invalid I2OSP input: " + e);
        const r = Array.from({ length: t }).fill(0);
        for (let n = t - 1; n >= 0; n--) (r[n] = 255 & e), (e >>>= 8);
        return new Uint8Array(r);
      }
      function a(e, t) {
        const r = new Uint8Array(e.length);
        for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
        return r;
      }
      function c(e) {
        if (!Number.isSafeInteger(e)) throw new Error("number expected");
      }
      function f(e, t, r, n) {
        (0, i.abytes)(e),
          (0, i.abytes)(t),
          c(r),
          t.length > 255 &&
            (t = n(
              (0, i.concatBytes)((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)
            ));
        const { outputLen: s, blockLen: f } = n,
          u = Math.ceil(r / s);
        if (r > 65535 || u > 255)
          throw new Error("expand_message_xmd: invalid lenInBytes");
        const d = (0, i.concatBytes)(t, o(t.length, 1)),
          h = o(0, f),
          l = o(r, 2),
          p = new Array(u),
          b = n((0, i.concatBytes)(h, e, l, o(0, 1), d));
        p[0] = n((0, i.concatBytes)(b, o(1, 1), d));
        for (let c = 1; c <= u; c++) {
          const e = [a(b, p[c - 1]), o(c + 1, 1), d];
          p[c] = n((0, i.concatBytes)(...e));
        }
        return (0, i.concatBytes)(...p).slice(0, r);
      }
      function u(e, t, r, n, s) {
        if (((0, i.abytes)(e), (0, i.abytes)(t), c(r), t.length > 255)) {
          const e = Math.ceil((2 * n) / 8);
          t = s
            .create({ dkLen: e })
            .update((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-"))
            .update(t)
            .digest();
        }
        if (r > 65535 || t.length > 255)
          throw new Error("expand_message_xof: invalid lenInBytes");
        return s
          .create({ dkLen: r })
          .update(e)
          .update(o(r, 2))
          .update(t)
          .update(o(t.length, 1))
          .digest();
      }
      function d(e, t, r) {
        (0, i.validateObject)(r, {
          DST: "stringOrUint8Array",
          p: "bigint",
          m: "isSafeInteger",
          k: "isSafeInteger",
          hash: "hash",
        });
        const { p: o, k: a, m: d, hash: h, expand: l, DST: p } = r;
        (0, i.abytes)(e), c(t);
        const b = "string" === typeof p ? (0, i.utf8ToBytes)(p) : p,
          g = o.toString(2).length,
          y = Math.ceil((g + a) / 8),
          m = t * d * y;
        let w;
        if ("xmd" === l) w = f(e, b, m, h);
        else if ("xof" === l) w = u(e, b, m, a, h);
        else {
          if ("_internal_pass" !== l)
            throw new Error('expand must be "xmd" or "xof"');
          w = e;
        }
        const v = new Array(t);
        for (let i = 0; i < t; i++) {
          const e = new Array(d);
          for (let t = 0; t < d; t++) {
            const r = y * (t + i * d),
              a = w.subarray(r, r + y);
            e[t] = (0, n.mod)(s(a), o);
          }
          v[i] = e;
        }
        return v;
      }
    },
    66993: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => s });
      var n = r(6370);
      function i(e) {
        return {
          address: e.address,
          amount: n.oB(e.amount),
          index: n.oB(e.index),
          validatorIndex: n.oB(e.validatorIndex),
        };
      }
      function s(e) {
        return {
          ...("bigint" === typeof e.baseFeePerGas && {
            baseFeePerGas: n.oB(e.baseFeePerGas),
          }),
          ...("bigint" === typeof e.blobBaseFee && {
            blobBaseFee: n.oB(e.blobBaseFee),
          }),
          ...("string" === typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" === typeof e.gasLimit && { gasLimit: n.oB(e.gasLimit) }),
          ...("bigint" === typeof e.number && { number: n.oB(e.number) }),
          ...("bigint" === typeof e.prevRandao && {
            prevRandao: n.oB(e.prevRandao),
          }),
          ...("bigint" === typeof e.time && { time: n.oB(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(i) }),
        };
      }
    },
    67005: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wNAF = function (e, t) {
          return {
            constTimeNegate: a,
            hasPrecomputes: (e) => 1 !== b(e),
            unsafeLadder(t, r) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : e.ZERO,
                i = t;
              for (; r > s; )
                r & o && (n = n.add(i)), (i = i.double()), (r >>= o);
              return n;
            },
            precomputeWindow(e, r) {
              const { windows: n, windowSize: i } = f(r, t),
                s = [];
              let o = e,
                a = o;
              for (let t = 0; t < n; t++) {
                (a = o), s.push(a);
                for (let e = 1; e < i; e++) (a = a.add(o)), s.push(a);
                o = a.double();
              }
              return s;
            },
            wNAF(r, n, i) {
              let s = e.ZERO,
                o = e.BASE;
              const c = f(r, t);
              for (let e = 0; e < c.windows; e++) {
                const {
                  nextN: t,
                  offset: r,
                  isZero: f,
                  isNeg: d,
                  isNegF: h,
                  offsetF: l,
                } = u(i, e, c);
                (i = t), f ? (o = o.add(a(h, n[l]))) : (s = s.add(a(d, n[r])));
              }
              return { p: s, f: o };
            },
            wNAFUnsafe(r, n, i) {
              let o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : e.ZERO;
              const a = f(r, t);
              for (let e = 0; e < a.windows && i !== s; e++) {
                const { nextN: t, offset: r, isZero: s, isNeg: c } = u(i, e, a);
                if (((i = t), !s)) {
                  const e = n[r];
                  o = o.add(c ? e.negate() : e);
                }
              }
              return o;
            },
            getPrecomputes(e, t, r) {
              let n = l.get(t);
              return (
                n ||
                  ((n = this.precomputeWindow(t, e)),
                  1 !== e && l.set(t, r(n))),
                n
              );
            },
            wNAFCached(e, t, r) {
              const n = b(e);
              return this.wNAF(n, this.getPrecomputes(n, e, r), t);
            },
            wNAFCachedUnsafe(e, t, r, n) {
              const i = b(e);
              return 1 === i
                ? this.unsafeLadder(e, t, n)
                : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), t, n);
            },
            setWindowSize(e, r) {
              c(r, t), p.set(e, r), l.delete(e);
            },
          };
        }),
        (t.pippenger = function (e, t, r, n) {
          if ((d(r, e), h(n, t), r.length !== n.length))
            throw new Error(
              "arrays of points and scalars must have equal length"
            );
          const s = e.ZERO,
            o = (0, i.bitLen)(BigInt(r.length)),
            a = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1,
            c = (0, i.bitMask)(a),
            f = new Array(Number(c) + 1).fill(s),
            u = Math.floor((t.BITS - 1) / a) * a;
          let l = s;
          for (let i = u; i >= 0; i -= a) {
            f.fill(s);
            for (let t = 0; t < n.length; t++) {
              const e = n[t],
                s = Number((e >> BigInt(i)) & c);
              f[s] = f[s].add(r[t]);
            }
            let e = s;
            for (let t = f.length - 1, r = s; t > 0; t--)
              (r = r.add(f[t])), (e = e.add(r));
            if (((l = l.add(e)), 0 !== i))
              for (let t = 0; t < a; t++) l = l.double();
          }
          return l;
        }),
        (t.precomputeMSMUnsafe = function (e, t, r, n) {
          c(n, t.BITS), d(r, e);
          const s = e.ZERO,
            o = 2 ** n - 1,
            a = Math.ceil(t.BITS / n),
            f = (0, i.bitMask)(n),
            u = r.map((e) => {
              const t = [];
              for (let r = 0, n = e; r < o; r++) t.push(n), (n = n.add(e));
              return t;
            });
          return (e) => {
            if ((h(e, t), e.length > r.length))
              throw new Error(
                "array of scalars must be smaller than array of points"
              );
            let i = s;
            for (let t = 0; t < a; t++) {
              if (i !== s) for (let e = 0; e < n; e++) i = i.double();
              const r = BigInt(a * n - (t + 1) * n);
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  s = Number((n >> r) & f);
                s && (i = i.add(u[t][s - 1]));
              }
            }
            return i;
          };
        }),
        (t.validateBasic = function (e) {
          return (
            (0, n.validateField)(e.Fp),
            (0, i.validateObject)(
              e,
              { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
              { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
            ),
            Object.freeze({
              ...(0, n.nLength)(e.n, e.nBitLength),
              ...e,
              p: e.Fp.ORDER,
            })
          );
        });
      const n = r(52208),
        i = r(58571),
        s = BigInt(0),
        o = BigInt(1);
      function a(e, t) {
        const r = t.negate();
        return e ? r : t;
      }
      function c(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw new Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function f(e, t) {
        c(e, t);
        const r = 2 ** e;
        return {
          windows: Math.ceil(t / e) + 1,
          windowSize: 2 ** (e - 1),
          mask: (0, i.bitMask)(e),
          maxNumber: r,
          shiftBy: BigInt(e),
        };
      }
      function u(e, t, r) {
        const { windowSize: n, mask: i, maxNumber: s, shiftBy: a } = r;
        let c = Number(e & i),
          f = e >> a;
        c > n && ((c -= s), (f += o));
        const u = t * n;
        return {
          nextN: f,
          offset: u + Math.abs(c) - 1,
          isZero: 0 === c,
          isNeg: c < 0,
          isNegF: t % 2 !== 0,
          offsetF: u,
        };
      }
      function d(e, t) {
        if (!Array.isArray(e)) throw new Error("array expected");
        e.forEach((e, r) => {
          if (!(e instanceof t)) throw new Error("invalid point at index " + r);
        });
      }
      function h(e, t) {
        if (!Array.isArray(e)) throw new Error("array of scalars expected");
        e.forEach((e, r) => {
          if (!t.isValid(e)) throw new Error("invalid scalar at index " + r);
        });
      }
      const l = new WeakMap(),
        p = new WeakMap();
      function b(e) {
        return p.get(e) || 1;
      }
    },
    69485: (e, t, r) => {
      var n;
      function i(e) {
        function r() {
          if (r.enabled) {
            var e = r,
              i = +new Date(),
              s = i - (n || i);
            (e.diff = s), (e.prev = n), (e.curr = i), (n = i);
            for (var o = new Array(arguments.length), a = 0; a < o.length; a++)
              o[a] = arguments[a];
            (o[0] = t.coerce(o[0])),
              "string" !== typeof o[0] && o.unshift("%O");
            var c = 0;
            (o[0] = o[0].replace(/%([a-zA-Z%])/g, function (r, n) {
              if ("%%" === r) return r;
              c++;
              var i = t.formatters[n];
              if ("function" === typeof i) {
                var s = o[c];
                (r = i.call(e, s)), o.splice(c, 1), c--;
              }
              return r;
            })),
              t.formatArgs.call(e, o),
              (r.log || t.log || console.log.bind(console)).apply(e, o);
          }
        }
        return (
          (r.namespace = e),
          (r.enabled = t.enabled(e)),
          (r.useColors = t.useColors()),
          (r.color = (function (e) {
            var r,
              n = 0;
            for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
            return t.colors[Math.abs(n) % t.colors.length];
          })(e)),
          "function" === typeof t.init && t.init(r),
          r
        );
      }
      ((t = e.exports = i.debug = i.default = i).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function () {
          t.enable("");
        }),
        (t.enable = function (e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var r = ("string" === typeof e ? e : "").split(/[\s,]+/),
              n = r.length,
              i = 0;
            i < n;
            i++
          )
            r[i] &&
              ("-" === (e = r[i].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          var r, n;
          for (r = 0, n = t.skips.length; r < n; r++)
            if (t.skips[r].test(e)) return !1;
          for (r = 0, n = t.names.length; r < n; r++)
            if (t.names[r].test(e)) return !0;
          return !1;
        }),
        (t.humanize = r(41036)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    70249: (e, t, r) => {
      "use strict";
      var n = r(68584).Buffer,
        i = r(26267).Transform,
        s = r(90012).I;
      function o(e) {
        i.call(this),
          (this.hashMode = "string" === typeof e),
          this.hashMode
            ? (this[e] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      r(92931)(o, i);
      var a = "undefined" !== typeof Uint8Array,
        c =
          "undefined" !== typeof ArrayBuffer &&
          "undefined" !== typeof Uint8Array &&
          ArrayBuffer.isView &&
          (n.prototype instanceof Uint8Array || n.TYPED_ARRAY_SUPPORT);
      (o.prototype.update = function (e, t, r) {
        var i = (function (e, t) {
            if (e instanceof n) return e;
            if ("string" === typeof e) return n.from(e, t);
            if (c && ArrayBuffer.isView(e)) {
              if (0 === e.byteLength) return n.alloc(0);
              var r = n.from(e.buffer, e.byteOffset, e.byteLength);
              if (r.byteLength === e.byteLength) return r;
            }
            if (a && e instanceof Uint8Array) return n.from(e);
            if (
              n.isBuffer(e) &&
              e.constructor &&
              "function" === typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            )
              return n.from(e);
            throw new TypeError(
              'The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.'
            );
          })(e, t),
          s = this._update(i);
        return this.hashMode ? this : (r && (s = this._toString(s, r)), s);
      }),
        (o.prototype.setAutoPadding = function () {}),
        (o.prototype.getAuthTag = function () {
          throw new Error("trying to get auth tag in unsupported state");
        }),
        (o.prototype.setAuthTag = function () {
          throw new Error("trying to set auth tag in unsupported state");
        }),
        (o.prototype.setAAD = function () {
          throw new Error("trying to set aad in unsupported state");
        }),
        (o.prototype._transform = function (e, t, r) {
          var n;
          try {
            this.hashMode ? this._update(e) : this.push(this._update(e));
          } catch (i) {
            n = i;
          } finally {
            r(n);
          }
        }),
        (o.prototype._flush = function (e) {
          var t;
          try {
            this.push(this.__final());
          } catch (r) {
            t = r;
          }
          e(t);
        }),
        (o.prototype._finalOrDigest = function (e) {
          var t = this.__final() || n.alloc(0);
          return e && (t = this._toString(t, e, !0)), t;
        }),
        (o.prototype._toString = function (e, t, r) {
          if (
            (this._decoder ||
              ((this._decoder = new s(t)), (this._encoding = t)),
            this._encoding !== t)
          )
            throw new Error("can\u2019t switch encodings");
          var n = this._decoder.write(e);
          return r && (n += this._decoder.end()), n;
        }),
        (e.exports = o);
    },
    71014: (e, t, r) => {
      var n = r(87265);
      e.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    71597: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => i });
      var n = r(71274);
      const i = (e) => (null !== e && void 0 !== e ? e : n.s6);
    },
    72900: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ripemd160 = t.RIPEMD160 = t.md5 = t.MD5 = t.sha1 = t.SHA1 = void 0);
      const n = r(98755),
        i = r(75086),
        s = Uint32Array.from([
          1732584193, 4023233417, 2562383102, 271733878, 3285377520,
        ]),
        o = new Uint32Array(80);
      class a extends n.HashMD {
        constructor() {
          super(64, 20, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]);
        }
        get() {
          const { A: e, B: t, C: r, D: n, E: i } = this;
          return [e, t, r, n, i];
        }
        set(e, t, r, n, i) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) o[n] = e.getUint32(t, !1);
          for (let n = 16; n < 80; n++)
            o[n] = (0, i.rotl)(o[n - 3] ^ o[n - 8] ^ o[n - 14] ^ o[n - 16], 1);
          let { A: r, B: s, C: a, D: c, E: f } = this;
          for (let u = 0; u < 80; u++) {
            let e, t;
            u < 20
              ? ((e = (0, n.Chi)(s, a, c)), (t = 1518500249))
              : u < 40
              ? ((e = s ^ a ^ c), (t = 1859775393))
              : u < 60
              ? ((e = (0, n.Maj)(s, a, c)), (t = 2400959708))
              : ((e = s ^ a ^ c), (t = 3395469782));
            const d = ((0, i.rotl)(r, 5) + e + f + t + o[u]) | 0;
            (f = c), (c = a), (a = (0, i.rotl)(s, 30)), (s = r), (r = d);
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (a = (a + this.C) | 0),
            (c = (c + this.D) | 0),
            (f = (f + this.E) | 0),
            this.set(r, s, a, c, f);
        }
        roundClean() {
          (0, i.clean)(o);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0), (0, i.clean)(this.buffer);
        }
      }
      (t.SHA1 = a), (t.sha1 = (0, i.createHasher)(() => new a()));
      const c = Math.pow(2, 32),
        f = Array.from({ length: 64 }, (e, t) =>
          Math.floor(c * Math.abs(Math.sin(t + 1)))
        ),
        u = s.slice(0, 4),
        d = new Uint32Array(16);
      class h extends n.HashMD {
        constructor() {
          super(64, 16, 8, !0),
            (this.A = 0 | u[0]),
            (this.B = 0 | u[1]),
            (this.C = 0 | u[2]),
            (this.D = 0 | u[3]);
        }
        get() {
          const { A: e, B: t, C: r, D: n } = this;
          return [e, t, r, n];
        }
        set(e, t, r, n) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) d[n] = e.getUint32(t, !0);
          let { A: r, B: s, C: o, D: a } = this;
          for (let c = 0; c < 64; c++) {
            let e, t, u;
            c < 16
              ? ((e = (0, n.Chi)(s, o, a)), (t = c), (u = [7, 12, 17, 22]))
              : c < 32
              ? ((e = (0, n.Chi)(a, s, o)),
                (t = (5 * c + 1) % 16),
                (u = [5, 9, 14, 20]))
              : c < 48
              ? ((e = s ^ o ^ a), (t = (3 * c + 5) % 16), (u = [4, 11, 16, 23]))
              : ((e = o ^ (s | ~a)), (t = (7 * c) % 16), (u = [6, 10, 15, 21])),
              (e = e + r + f[c] + d[t]),
              (r = a),
              (a = o),
              (o = s),
              (s += (0, i.rotl)(e, u[c % 4]));
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (o = (o + this.C) | 0),
            (a = (a + this.D) | 0),
            this.set(r, s, o, a);
        }
        roundClean() {
          (0, i.clean)(d);
        }
        destroy() {
          this.set(0, 0, 0, 0), (0, i.clean)(this.buffer);
        }
      }
      (t.MD5 = h), (t.md5 = (0, i.createHasher)(() => new h()));
      const l = Uint8Array.from([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        p = (() => Uint8Array.from(new Array(16).fill(0).map((e, t) => t)))(),
        b = (() => p.map((e) => (9 * e + 5) % 16))(),
        g = (() => {
          const e = [[p], [b]];
          for (let t = 0; t < 4; t++)
            for (let r of e) r.push(r[t].map((e) => l[e]));
          return e;
        })(),
        y = (() => g[0])(),
        m = (() => g[1])(),
        w = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => Uint8Array.from(e)),
        v = y.map((e, t) => e.map((e) => w[t][e])),
        A = m.map((e, t) => e.map((e) => w[t][e])),
        E = Uint32Array.from([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        x = Uint32Array.from([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]);
      function _(e, t, r, n) {
        return 0 === e
          ? t ^ r ^ n
          : 1 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t | ~r) ^ n
          : 3 === e
          ? (t & n) | (r & ~n)
          : t ^ (r | ~n);
      }
      const B = new Uint32Array(16);
      class S extends n.HashMD {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776);
        }
        get() {
          const { h0: e, h1: t, h2: r, h3: n, h4: i } = this;
          return [e, t, r, n, i];
        }
        set(e, t, r, n, i) {
          (this.h0 = 0 | e),
            (this.h1 = 0 | t),
            (this.h2 = 0 | r),
            (this.h3 = 0 | n),
            (this.h4 = 0 | i);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) B[i] = e.getUint32(t, !0);
          let r = 0 | this.h0,
            n = r,
            s = 0 | this.h1,
            o = s,
            a = 0 | this.h2,
            c = a,
            f = 0 | this.h3,
            u = f,
            d = 0 | this.h4,
            h = d;
          for (let l = 0; l < 5; l++) {
            const e = 4 - l,
              t = E[l],
              p = x[l],
              b = y[l],
              g = m[l],
              w = v[l],
              S = A[l];
            for (let n = 0; n < 16; n++) {
              const e =
                ((0, i.rotl)(r + _(l, s, a, f) + B[b[n]] + t, w[n]) + d) | 0;
              (r = d), (d = f), (f = 0 | (0, i.rotl)(a, 10)), (a = s), (s = e);
            }
            for (let r = 0; r < 16; r++) {
              const t =
                ((0, i.rotl)(n + _(e, o, c, u) + B[g[r]] + p, S[r]) + h) | 0;
              (n = h), (h = u), (u = 0 | (0, i.rotl)(c, 10)), (c = o), (o = t);
            }
          }
          this.set(
            (this.h1 + a + u) | 0,
            (this.h2 + f + h) | 0,
            (this.h3 + d + n) | 0,
            (this.h4 + r + o) | 0,
            (this.h0 + s + c) | 0
          );
        }
        roundClean() {
          (0, i.clean)(B);
        }
        destroy() {
          (this.destroyed = !0),
            (0, i.clean)(this.buffer),
            this.set(0, 0, 0, 0, 0);
        }
      }
      (t.RIPEMD160 = S), (t.ripemd160 = (0, i.createHasher)(() => new S()));
    },
    73884: (e, t, r) => {
      "use strict";
      r.d(t, { Sl: () => i, X: () => o, eV: () => a, kK: () => s });
      var n = r(6370);
      function i(e, t) {
        if (n.Ej(e) > t) throw new n.u({ givenSize: n.Ej(e), maxSize: t });
      }
      function s(e, t) {
        if ("number" === typeof t && t > 0 && t > n.Ej(e) - 1)
          throw new n.ii({ offset: t, position: "start", size: n.Ej(e) });
      }
      function o(e, t, r) {
        if ("number" === typeof t && "number" === typeof r && n.Ej(e) !== r - t)
          throw new n.ii({ offset: r, position: "end", size: n.Ej(e) });
      }
      function a(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { dir: r, size: i = 32 } = t;
        if (0 === i) return e;
        const s = e.replace("0x", "");
        if (s.length > 2 * i)
          throw new n.Fl({
            size: Math.ceil(s.length / 2),
            targetSize: i,
            type: "Hex",
          });
        return `0x${s["right" === r ? "padEnd" : "padStart"](2 * i, "0")}`;
      }
    },
    75086: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wrapXOFConstructorWithOpts =
          t.wrapConstructorWithOpts =
          t.wrapConstructor =
          t.Hash =
          t.nextTick =
          t.swap32IfBE =
          t.byteSwapIfBE =
          t.swap8IfBE =
          t.isLE =
            void 0),
        (t.isBytes = i),
        (t.anumber = s),
        (t.abytes = o),
        (t.ahash = function (e) {
          if ("function" !== typeof e || "function" !== typeof e.create)
            throw new Error("Hash should be wrapped by utils.createHasher");
          s(e.outputLen), s(e.blockLen);
        }),
        (t.aexists = function (e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (e.destroyed) throw new Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw new Error("Hash#digest() has already been called");
        }),
        (t.aoutput = function (e, t) {
          o(e);
          const r = t.outputLen;
          if (e.length < r)
            throw new Error(
              "digestInto() expects output buffer of length at least " + r
            );
        }),
        (t.u8 = function (e) {
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }),
        (t.u32 = function (e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        }),
        (t.clean = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          for (let n = 0; n < t.length; n++) t[n].fill(0);
        }),
        (t.createView = function (e) {
          return new DataView(e.buffer, e.byteOffset, e.byteLength);
        }),
        (t.rotr = function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        }),
        (t.rotl = function (e, t) {
          return (e << t) | ((e >>> (32 - t)) >>> 0);
        }),
        (t.byteSwap = a),
        (t.byteSwap32 = c),
        (t.bytesToHex = function (e) {
          if ((o(e), f)) return e.toHex();
          let t = "";
          for (let r = 0; r < e.length; r++) t += u[e[r]];
          return t;
        }),
        (t.hexToBytes = function (e) {
          if ("string" !== typeof e)
            throw new Error("hex string expected, got " + typeof e);
          if (f) return Uint8Array.fromHex(e);
          const t = e.length,
            r = t / 2;
          if (t % 2)
            throw new Error(
              "hex string expected, got unpadded hex of length " + t
            );
          const n = new Uint8Array(r);
          for (let i = 0, s = 0; i < r; i++, s += 2) {
            const t = h(e.charCodeAt(s)),
              r = h(e.charCodeAt(s + 1));
            if (void 0 === t || void 0 === r) {
              const t = e[s] + e[s + 1];
              throw new Error(
                'hex string expected, got non-hex character "' +
                  t +
                  '" at index ' +
                  s
              );
            }
            n[i] = 16 * t + r;
          }
          return n;
        }),
        (t.asyncLoop = async function (e, r, n) {
          let i = Date.now();
          for (let s = 0; s < e; s++) {
            n(s);
            const e = Date.now() - i;
            (e >= 0 && e < r) || (await (0, t.nextTick)(), (i += e));
          }
        }),
        (t.utf8ToBytes = l),
        (t.bytesToUtf8 = function (e) {
          return new TextDecoder().decode(e);
        }),
        (t.toBytes = p),
        (t.kdfInputToBytes = function (e) {
          "string" === typeof e && (e = l(e));
          return o(e), e;
        }),
        (t.concatBytes = function () {
          let e = 0;
          for (let r = 0; r < arguments.length; r++) {
            const t = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            o(t), (e += t.length);
          }
          const t = new Uint8Array(e);
          for (let r = 0, n = 0; r < arguments.length; r++) {
            const e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            t.set(e, n), (n += e.length);
          }
          return t;
        }),
        (t.checkOpts = function (e, t) {
          if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
            throw new Error("options should be object or undefined");
          return Object.assign(e, t);
        }),
        (t.createHasher = b),
        (t.createOptHasher = g),
        (t.createXOFer = y),
        (t.randomBytes = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
          if (n.crypto && "function" === typeof n.crypto.getRandomValues)
            return n.crypto.getRandomValues(new Uint8Array(e));
          if (n.crypto && "function" === typeof n.crypto.randomBytes)
            return Uint8Array.from(n.crypto.randomBytes(e));
          throw new Error("crypto.getRandomValues must be defined");
        });
      const n = r(4794);
      function i(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function s(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("positive integer expected, got " + e);
      }
      function o(e) {
        if (!i(e)) throw new Error("Uint8Array expected");
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + e.length
          );
      }
      function a(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function c(e) {
        for (let t = 0; t < e.length; t++) e[t] = a(e[t]);
        return e;
      }
      (t.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        (t.swap8IfBE = t.isLE ? (e) => e : (e) => a(e)),
        (t.byteSwapIfBE = t.swap8IfBE),
        (t.swap32IfBE = t.isLE ? (e) => e : c);
      const f = (() =>
          "function" === typeof Uint8Array.from([]).toHex &&
          "function" === typeof Uint8Array.fromHex)(),
        u = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      const d = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function h(e) {
        return e >= d._0 && e <= d._9
          ? e - d._0
          : e >= d.A && e <= d.F
          ? e - (d.A - 10)
          : e >= d.a && e <= d.f
          ? e - (d.a - 10)
          : void 0;
      }
      function l(e) {
        if ("string" !== typeof e) throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function p(e) {
        return "string" === typeof e && (e = l(e)), o(e), e;
      }
      t.nextTick = async () => {};
      function b(e) {
        const t = (t) => e().update(p(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function g(e) {
        const t = (t, r) => e(r).update(p(t)).digest(),
          r = e({});
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function y(e) {
        const t = (t, r) => e(r).update(p(t)).digest(),
          r = e({});
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      (t.Hash = class {}),
        (t.wrapConstructor = b),
        (t.wrapConstructorWithOpts = g),
        (t.wrapXOFConstructorWithOpts = y);
    },
    75272: (e) => {
      "use strict";
      e.exports = function (e) {
        for (var t = [], r = e.length, n = 0; n < r; n++) {
          var i = e.charCodeAt(n);
          if (i >= 55296 && i <= 56319 && r > n + 1) {
            var s = e.charCodeAt(n + 1);
            s >= 56320 &&
              s <= 57343 &&
              ((i = 1024 * (i - 55296) + s - 56320 + 65536), (n += 1));
          }
          i < 128
            ? t.push(i)
            : i < 2048
            ? (t.push((i >> 6) | 192), t.push((63 & i) | 128))
            : i < 55296 || (i >= 57344 && i < 65536)
            ? (t.push((i >> 12) | 224),
              t.push(((i >> 6) & 63) | 128),
              t.push((63 & i) | 128))
            : i >= 65536 && i <= 1114111
            ? (t.push((i >> 18) | 240),
              t.push(((i >> 12) & 63) | 128),
              t.push(((i >> 6) & 63) | 128),
              t.push((63 & i) | 128))
            : t.push(239, 191, 189);
        }
        return new Uint8Array(t).buffer;
      };
    },
    75491: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha512_224 =
          t.sha512_256 =
          t.sha384 =
          t.sha512 =
          t.sha224 =
          t.sha256 =
          t.SHA512_256 =
          t.SHA512_224 =
          t.SHA384 =
          t.SHA512 =
          t.SHA224 =
          t.SHA256 =
            void 0);
      const n = r(98755),
        i = r(3837),
        s = r(75086),
        o = Uint32Array.from([
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
        a = new Uint32Array(64);
      class c extends n.HashMD {
        constructor() {
          super(
            64,
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
            8,
            !1
          ),
            (this.A = 0 | n.SHA256_IV[0]),
            (this.B = 0 | n.SHA256_IV[1]),
            (this.C = 0 | n.SHA256_IV[2]),
            (this.D = 0 | n.SHA256_IV[3]),
            (this.E = 0 | n.SHA256_IV[4]),
            (this.F = 0 | n.SHA256_IV[5]),
            (this.G = 0 | n.SHA256_IV[6]),
            (this.H = 0 | n.SHA256_IV[7]);
        }
        get() {
          const { A: e, B: t, C: r, D: n, E: i, F: s, G: o, H: a } = this;
          return [e, t, r, n, i, s, o, a];
        }
        set(e, t, r, n, i, s, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) a[n] = e.getUint32(t, !1);
          for (let n = 16; n < 64; n++) {
            const e = a[n - 15],
              t = a[n - 2],
              r = (0, s.rotr)(e, 7) ^ (0, s.rotr)(e, 18) ^ (e >>> 3),
              i = (0, s.rotr)(t, 17) ^ (0, s.rotr)(t, 19) ^ (t >>> 10);
            a[n] = (i + a[n - 7] + r + a[n - 16]) | 0;
          }
          let { A: r, B: i, C: c, D: f, E: u, F: d, G: h, H: l } = this;
          for (let p = 0; p < 64; p++) {
            const e =
                (l +
                  ((0, s.rotr)(u, 6) ^
                    (0, s.rotr)(u, 11) ^
                    (0, s.rotr)(u, 25)) +
                  (0, n.Chi)(u, d, h) +
                  o[p] +
                  a[p]) |
                0,
              t =
                (((0, s.rotr)(r, 2) ^ (0, s.rotr)(r, 13) ^ (0, s.rotr)(r, 22)) +
                  (0, n.Maj)(r, i, c)) |
                0;
            (l = h),
              (h = d),
              (d = u),
              (u = (f + e) | 0),
              (f = c),
              (c = i),
              (i = r),
              (r = (e + t) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (c = (c + this.C) | 0),
            (f = (f + this.D) | 0),
            (u = (u + this.E) | 0),
            (d = (d + this.F) | 0),
            (h = (h + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, i, c, f, u, d, h, l);
        }
        roundClean() {
          (0, s.clean)(a);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, s.clean)(this.buffer);
        }
      }
      t.SHA256 = c;
      class f extends c {
        constructor() {
          super(28),
            (this.A = 0 | n.SHA224_IV[0]),
            (this.B = 0 | n.SHA224_IV[1]),
            (this.C = 0 | n.SHA224_IV[2]),
            (this.D = 0 | n.SHA224_IV[3]),
            (this.E = 0 | n.SHA224_IV[4]),
            (this.F = 0 | n.SHA224_IV[5]),
            (this.G = 0 | n.SHA224_IV[6]),
            (this.H = 0 | n.SHA224_IV[7]);
        }
      }
      t.SHA224 = f;
      const u = (() =>
          i.split(
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
          ))(),
        d = (() => u[0])(),
        h = (() => u[1])(),
        l = new Uint32Array(80),
        p = new Uint32Array(80);
      class b extends n.HashMD {
        constructor() {
          super(
            128,
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
            16,
            !1
          ),
            (this.Ah = 0 | n.SHA512_IV[0]),
            (this.Al = 0 | n.SHA512_IV[1]),
            (this.Bh = 0 | n.SHA512_IV[2]),
            (this.Bl = 0 | n.SHA512_IV[3]),
            (this.Ch = 0 | n.SHA512_IV[4]),
            (this.Cl = 0 | n.SHA512_IV[5]),
            (this.Dh = 0 | n.SHA512_IV[6]),
            (this.Dl = 0 | n.SHA512_IV[7]),
            (this.Eh = 0 | n.SHA512_IV[8]),
            (this.El = 0 | n.SHA512_IV[9]),
            (this.Fh = 0 | n.SHA512_IV[10]),
            (this.Fl = 0 | n.SHA512_IV[11]),
            (this.Gh = 0 | n.SHA512_IV[12]),
            (this.Gl = 0 | n.SHA512_IV[13]),
            (this.Hh = 0 | n.SHA512_IV[14]),
            (this.Hl = 0 | n.SHA512_IV[15]);
        }
        get() {
          const {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: o,
            Dl: a,
            Eh: c,
            El: f,
            Fh: u,
            Fl: d,
            Gh: h,
            Gl: l,
            Hh: p,
            Hl: b,
          } = this;
          return [e, t, r, n, i, s, o, a, c, f, u, d, h, l, p, b];
        }
        set(e, t, r, n, i, s, o, a, c, f, u, d, h, l, p, b) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | f),
            (this.Fh = 0 | u),
            (this.Fl = 0 | d),
            (this.Gh = 0 | h),
            (this.Gl = 0 | l),
            (this.Hh = 0 | p),
            (this.Hl = 0 | b);
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4)
            (l[i] = e.getUint32(t)), (p[i] = e.getUint32((t += 4)));
          for (let d = 16; d < 80; d++) {
            const e = 0 | l[d - 15],
              t = 0 | p[d - 15],
              r = i.rotrSH(e, t, 1) ^ i.rotrSH(e, t, 8) ^ i.shrSH(e, t, 7),
              n = i.rotrSL(e, t, 1) ^ i.rotrSL(e, t, 8) ^ i.shrSL(e, t, 7),
              s = 0 | l[d - 2],
              o = 0 | p[d - 2],
              a = i.rotrSH(s, o, 19) ^ i.rotrBH(s, o, 61) ^ i.shrSH(s, o, 6),
              c = i.rotrSL(s, o, 19) ^ i.rotrBL(s, o, 61) ^ i.shrSL(s, o, 6),
              f = i.add4L(n, c, p[d - 7], p[d - 16]),
              u = i.add4H(f, r, a, l[d - 7], l[d - 16]);
            (l[d] = 0 | u), (p[d] = 0 | f);
          }
          let {
            Ah: r,
            Al: n,
            Bh: s,
            Bl: o,
            Ch: a,
            Cl: c,
            Dh: f,
            Dl: u,
            Eh: b,
            El: g,
            Fh: y,
            Fl: m,
            Gh: w,
            Gl: v,
            Hh: A,
            Hl: E,
          } = this;
          for (let x = 0; x < 80; x++) {
            const e =
                i.rotrSH(b, g, 14) ^ i.rotrSH(b, g, 18) ^ i.rotrBH(b, g, 41),
              t = i.rotrSL(b, g, 14) ^ i.rotrSL(b, g, 18) ^ i.rotrBL(b, g, 41),
              _ = (b & y) ^ (~b & w),
              B = (g & m) ^ (~g & v),
              S = i.add5L(E, t, B, h[x], p[x]),
              H = i.add5H(S, A, e, _, d[x], l[x]),
              C = 0 | S,
              T = i.rotrSH(r, n, 28) ^ i.rotrBH(r, n, 34) ^ i.rotrBH(r, n, 39),
              P = i.rotrSL(r, n, 28) ^ i.rotrBL(r, n, 34) ^ i.rotrBL(r, n, 39),
              I = (r & s) ^ (r & a) ^ (s & a),
              N = (n & o) ^ (n & c) ^ (o & c);
            (A = 0 | w),
              (E = 0 | v),
              (w = 0 | y),
              (v = 0 | m),
              (y = 0 | b),
              (m = 0 | g),
              ({ h: b, l: g } = i.add(0 | f, 0 | u, 0 | H, 0 | C)),
              (f = 0 | a),
              (u = 0 | c),
              (a = 0 | s),
              (c = 0 | o),
              (s = 0 | r),
              (o = 0 | n);
            const O = i.add3L(C, P, N);
            (r = i.add3H(O, H, T, I)), (n = 0 | O);
          }
          ({ h: r, l: n } = i.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: s, l: o } = i.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | o)),
            ({ h: a, l: c } = i.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | c)),
            ({ h: f, l: u } = i.add(0 | this.Dh, 0 | this.Dl, 0 | f, 0 | u)),
            ({ h: b, l: g } = i.add(0 | this.Eh, 0 | this.El, 0 | b, 0 | g)),
            ({ h: y, l: m } = i.add(0 | this.Fh, 0 | this.Fl, 0 | y, 0 | m)),
            ({ h: w, l: v } = i.add(0 | this.Gh, 0 | this.Gl, 0 | w, 0 | v)),
            ({ h: A, l: E } = i.add(0 | this.Hh, 0 | this.Hl, 0 | A, 0 | E)),
            this.set(r, n, s, o, a, c, f, u, b, g, y, m, w, v, A, E);
        }
        roundClean() {
          (0, s.clean)(l, p);
        }
        destroy() {
          (0, s.clean)(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      t.SHA512 = b;
      class g extends b {
        constructor() {
          super(48),
            (this.Ah = 0 | n.SHA384_IV[0]),
            (this.Al = 0 | n.SHA384_IV[1]),
            (this.Bh = 0 | n.SHA384_IV[2]),
            (this.Bl = 0 | n.SHA384_IV[3]),
            (this.Ch = 0 | n.SHA384_IV[4]),
            (this.Cl = 0 | n.SHA384_IV[5]),
            (this.Dh = 0 | n.SHA384_IV[6]),
            (this.Dl = 0 | n.SHA384_IV[7]),
            (this.Eh = 0 | n.SHA384_IV[8]),
            (this.El = 0 | n.SHA384_IV[9]),
            (this.Fh = 0 | n.SHA384_IV[10]),
            (this.Fl = 0 | n.SHA384_IV[11]),
            (this.Gh = 0 | n.SHA384_IV[12]),
            (this.Gl = 0 | n.SHA384_IV[13]),
            (this.Hh = 0 | n.SHA384_IV[14]),
            (this.Hl = 0 | n.SHA384_IV[15]);
        }
      }
      t.SHA384 = g;
      const y = Uint32Array.from([
          2352822216, 424955298, 1944164710, 2312950998, 502970286, 855612546,
          1738396948, 1479516111, 258812777, 2077511080, 2011393907, 79989058,
          1067287976, 1780299464, 286451373, 2446758561,
        ]),
        m = Uint32Array.from([
          573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857,
          2520282905, 1497426621, 2519219938, 2827943907, 3193839141,
          1401305490, 721525244, 746961066, 246885852, 2177182882,
        ]);
      class w extends b {
        constructor() {
          super(28),
            (this.Ah = 0 | y[0]),
            (this.Al = 0 | y[1]),
            (this.Bh = 0 | y[2]),
            (this.Bl = 0 | y[3]),
            (this.Ch = 0 | y[4]),
            (this.Cl = 0 | y[5]),
            (this.Dh = 0 | y[6]),
            (this.Dl = 0 | y[7]),
            (this.Eh = 0 | y[8]),
            (this.El = 0 | y[9]),
            (this.Fh = 0 | y[10]),
            (this.Fl = 0 | y[11]),
            (this.Gh = 0 | y[12]),
            (this.Gl = 0 | y[13]),
            (this.Hh = 0 | y[14]),
            (this.Hl = 0 | y[15]);
        }
      }
      t.SHA512_224 = w;
      class v extends b {
        constructor() {
          super(32),
            (this.Ah = 0 | m[0]),
            (this.Al = 0 | m[1]),
            (this.Bh = 0 | m[2]),
            (this.Bl = 0 | m[3]),
            (this.Ch = 0 | m[4]),
            (this.Cl = 0 | m[5]),
            (this.Dh = 0 | m[6]),
            (this.Dl = 0 | m[7]),
            (this.Eh = 0 | m[8]),
            (this.El = 0 | m[9]),
            (this.Fh = 0 | m[10]),
            (this.Fl = 0 | m[11]),
            (this.Gh = 0 | m[12]),
            (this.Gl = 0 | m[13]),
            (this.Hh = 0 | m[14]),
            (this.Hl = 0 | m[15]);
        }
      }
      (t.SHA512_256 = v),
        (t.sha256 = (0, s.createHasher)(() => new c())),
        (t.sha224 = (0, s.createHasher)(() => new f())),
        (t.sha512 = (0, s.createHasher)(() => new b())),
        (t.sha384 = (0, s.createHasher)(() => new g())),
        (t.sha512_256 = (0, s.createHasher)(() => new v())),
        (t.sha512_224 = (0, s.createHasher)(() => new w()));
    },
    76749: (e, t, r) => {
      "use strict";
      r.d(t, { HT: () => a, lF: () => o });
      var n = r(11932),
        i = r(91953),
        s = r(6370);
      function o(e, t) {
        var r;
        const { bytecode: n, args: o } = t;
        return s.xW(
          n,
          null !== (r = e.inputs) &&
            void 0 !== r &&
            r.length &&
            null !== o &&
            void 0 !== o &&
            o.length
            ? i.lF(e.inputs, o)
            : "0x"
        );
      }
      function a(e) {
        return n.HT(e);
      }
    },
    78564: (e, t, r) => {
      "use strict";
      var n = r(32069),
        i = r(17067);
      e.exports = i(function (e) {
        var t = n("sha256").update(e).digest();
        return n("sha256").update(t).digest();
      });
    },
    78700: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
            void 0),
        (t.fromBig = i),
        (t.split = s),
        (t.add = w);
      const r = BigInt(2 ** 32 - 1),
        n = BigInt(32);
      function i(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & r), l: Number((e >> n) & r) }
          : { h: 0 | Number((e >> n) & r), l: 0 | Number(e & r) };
      }
      function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = new Uint32Array(e.length),
          n = new Uint32Array(e.length);
        for (let s = 0; s < e.length; s++) {
          const { h: o, l: a } = i(e[s], t);
          [r[s], n[s]] = [o, a];
        }
        return [r, n];
      }
      const o = (e, t) => (BigInt(e >>> 0) << n) | BigInt(t >>> 0);
      t.toBig = o;
      const a = (e, t, r) => e >>> r;
      t.shrSH = a;
      const c = (e, t, r) => (e << (32 - r)) | (t >>> r);
      t.shrSL = c;
      const f = (e, t, r) => (e >>> r) | (t << (32 - r));
      t.rotrSH = f;
      const u = (e, t, r) => (e << (32 - r)) | (t >>> r);
      t.rotrSL = u;
      const d = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32));
      t.rotrBH = d;
      const h = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r));
      t.rotrBL = h;
      const l = (e, t) => t;
      t.rotr32H = l;
      const p = (e, t) => e;
      t.rotr32L = p;
      const b = (e, t, r) => (e << r) | (t >>> (32 - r));
      t.rotlSH = b;
      const g = (e, t, r) => (t << r) | (e >>> (32 - r));
      t.rotlSL = g;
      const y = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r));
      t.rotlBH = y;
      const m = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function w(e, t, r, n) {
        const i = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      t.rotlBL = m;
      const v = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
      t.add3L = v;
      const A = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0;
      t.add3H = A;
      const E = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
      t.add4L = E;
      const x = (e, t, r, n, i) => (t + r + n + i + ((e / 2 ** 32) | 0)) | 0;
      t.add4H = x;
      const _ = (e, t, r, n, i) =>
        (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
      t.add5L = _;
      const B = (e, t, r, n, i, s) =>
        (t + r + n + i + s + ((e / 2 ** 32) | 0)) | 0;
      t.add5H = B;
      const S = {
        fromBig: i,
        split: s,
        toBig: o,
        shrSH: a,
        shrSL: c,
        rotrSH: f,
        rotrSL: u,
        rotrBH: d,
        rotrBL: h,
        rotr32H: l,
        rotr32L: p,
        rotlSH: b,
        rotlSL: g,
        rotlBH: y,
        rotlBL: m,
        add: w,
        add3L: v,
        add3H: A,
        add4L: E,
        add4H: x,
        add5H: B,
        add5L: _,
      };
      t.default = S;
    },
    83238: (e, t, r) => {
      "use strict";
      r.d(t, { OA: () => n, WL: () => s, u$: () => i });
      const n = {
          ATTRIBUTE: 1,
          CHILD: 2,
          PROPERTY: 3,
          BOOLEAN_ATTRIBUTE: 4,
          EVENT: 5,
          ELEMENT: 6,
        },
        i = (e) =>
          function () {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return { _$litDirective$: e, values: r };
          };
      class s {
        constructor(e) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(e, t, r) {
          (this._$Ct = e), (this._$AM = t), (this._$Ci = r);
        }
        _$AS(e, t) {
          return this.update(e, t);
        }
        update(e, t) {
          return this.render(...t);
        }
      }
    },
    84881: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, r, n) {
          var i = {},
            s = {};
          s[r] = 0;
          var o,
            a,
            c,
            f,
            u,
            d,
            h,
            l = t.PriorityQueue.make();
          for (l.push(r, 0); !l.empty(); )
            for (c in ((a = (o = l.pop()).value),
            (f = o.cost),
            (u = e[a] || {})))
              u.hasOwnProperty(c) &&
                ((d = f + u[c]),
                (h = s[c]),
                ("undefined" === typeof s[c] || h > d) &&
                  ((s[c] = d), l.push(c, d), (i[c] = a)));
          if ("undefined" !== typeof n && "undefined" === typeof s[n]) {
            var p = ["Could not find a path from ", r, " to ", n, "."].join("");
            throw new Error(p);
          }
          return i;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var r = [], n = t; n; ) r.push(n), e[n], (n = e[n]);
          return r.reverse(), r;
        },
        find_path: function (e, r, n) {
          var i = t.single_source_shortest_paths(e, r, n);
          return t.extract_shortest_path_from_predecessor_list(i, n);
        },
        PriorityQueue: {
          make: function (e) {
            var r,
              n = t.PriorityQueue,
              i = {};
            for (r in ((e = e || {}), n)) n.hasOwnProperty(r) && (i[r] = n[r]);
            return (i.queue = []), (i.sorter = e.sorter || n.default_sorter), i;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            var r = { value: e, cost: t };
            this.queue.push(r), this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    86689: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.sha256 = t.SHA256 = void 0);
      const n = r(90760),
        i = r(43165),
        s = new Uint32Array([
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
        o = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        a = new Uint32Array(64);
      class c extends n.HashMD {
        constructor() {
          super(
            64,
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
            8,
            !1
          ),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
        get() {
          const { A: e, B: t, C: r, D: n, E: i, F: s, G: o, H: a } = this;
          return [e, t, r, n, i, s, o, a];
        }
        set(e, t, r, n, i, s, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) a[n] = e.getUint32(t, !1);
          for (let n = 16; n < 64; n++) {
            const e = a[n - 15],
              t = a[n - 2],
              r = (0, i.rotr)(e, 7) ^ (0, i.rotr)(e, 18) ^ (e >>> 3),
              s = (0, i.rotr)(t, 17) ^ (0, i.rotr)(t, 19) ^ (t >>> 10);
            a[n] = (s + a[n - 7] + r + a[n - 16]) | 0;
          }
          let { A: r, B: o, C: c, D: f, E: u, F: d, G: h, H: l } = this;
          for (let p = 0; p < 64; p++) {
            const e =
                (l +
                  ((0, i.rotr)(u, 6) ^
                    (0, i.rotr)(u, 11) ^
                    (0, i.rotr)(u, 25)) +
                  (0, n.Chi)(u, d, h) +
                  s[p] +
                  a[p]) |
                0,
              t =
                (((0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22)) +
                  (0, n.Maj)(r, o, c)) |
                0;
            (l = h),
              (h = d),
              (d = u),
              (u = (f + e) | 0),
              (f = c),
              (c = o),
              (o = r),
              (r = (e + t) | 0);
          }
          (r = (r + this.A) | 0),
            (o = (o + this.B) | 0),
            (c = (c + this.C) | 0),
            (f = (f + this.D) | 0),
            (u = (u + this.E) | 0),
            (d = (d + this.F) | 0),
            (h = (h + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, o, c, f, u, d, h, l);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      t.SHA256 = c;
      class f extends c {
        constructor() {
          super(28),
            (this.A = -1056596264),
            (this.B = 914150663),
            (this.C = 812702999),
            (this.D = -150054599),
            (this.E = -4191439),
            (this.F = 1750603025),
            (this.G = 1694076839),
            (this.H = -1090891868);
        }
      }
      (t.sha256 = (0, i.wrapConstructor)(() => new c())),
        (t.sha224 = (0, i.wrapConstructor)(() => new f()));
    },
    86835: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" === typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    87265: (e, t, r) => {
      "use strict";
      var n = r(68584).Buffer;
      e.exports = function (e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var i = 0; i < e.length; i++) {
          var s = e.charAt(i),
            o = s.charCodeAt(0);
          if (255 !== t[o]) throw new TypeError(s + " is ambiguous");
          t[o] = i;
        }
        var a = e.length,
          c = e.charAt(0),
          f = Math.log(a) / Math.log(256),
          u = Math.log(256) / Math.log(a);
        function d(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return n.alloc(0);
          for (var r = 0, i = 0, s = 0; e[r] === c; ) i++, r++;
          for (
            var o = ((e.length - r) * f + 1) >>> 0, u = new Uint8Array(o);
            r < e.length;

          ) {
            var d = e.charCodeAt(r);
            if (d > 255) return;
            var h = t[d];
            if (255 === h) return;
            for (var l = 0, p = o - 1; (0 !== h || l < s) && -1 !== p; p--, l++)
              (h += (a * u[p]) >>> 0),
                (u[p] = h % 256 >>> 0),
                (h = (h / 256) >>> 0);
            if (0 !== h) throw new Error("Non-zero carry");
            (s = l), r++;
          }
          for (var b = o - s; b !== o && 0 === u[b]; ) b++;
          var g = n.allocUnsafe(i + (o - b));
          g.fill(0, 0, i);
          for (var y = i; b !== o; ) g[y++] = u[b++];
          return g;
        }
        return {
          encode: function (t) {
            if (
              ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
              !n.isBuffer(t))
            )
              throw new TypeError("Expected Buffer");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, s = 0, o = t.length; s !== o && 0 === t[s]; )
              s++, r++;
            for (
              var f = ((o - s) * u + 1) >>> 0, d = new Uint8Array(f);
              s !== o;

            ) {
              for (
                var h = t[s], l = 0, p = f - 1;
                (0 !== h || l < i) && -1 !== p;
                p--, l++
              )
                (h += (256 * d[p]) >>> 0),
                  (d[p] = h % a >>> 0),
                  (h = (h / a) >>> 0);
              if (0 !== h) throw new Error("Non-zero carry");
              (i = l), s++;
            }
            for (var b = f - i; b !== f && 0 === d[b]; ) b++;
            for (var g = c.repeat(r); b < f; ++b) g += e.charAt(d[b]);
            return g;
          },
          decodeUnsafe: d,
          decode: function (e) {
            var t = d(e);
            if (t) return t;
            throw new Error("Non-base" + a + " character");
          },
        };
      };
    },
    90009: (e, t, r) => {
      "use strict";
      r.d(t, { HT: () => a, Rt: () => o });
      var n = r(11932),
        i = r(91953),
        s = r(6370);
      function o(e) {
        const { overloads: t } = e,
          r = t
            ? c([e, ...t], e.name, {
                args: arguments.length <= 1 ? void 0 : arguments[1],
              })
            : e,
          o = ((a = r), n.go(a));
        var a;
        const f =
          (arguments.length <= 1 ? 0 : arguments.length - 1) > 0
            ? i.lF(r.inputs, arguments.length <= 1 ? void 0 : arguments[1])
            : void 0;
        return f ? s.xW(o, f) : o;
      }
      function a(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return n.HT(e, t);
      }
      function c(e, t, r) {
        const i = n.n1(e, t, r);
        if ("function" !== i.type)
          throw new n.m_({ name: t, type: "function" });
        return i;
      }
    },
    90760: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashMD = void 0),
        (t.setBigUint64 = s),
        (t.Chi = function (e, t, r) {
          return (e & t) ^ (~e & r);
        }),
        (t.Maj = function (e, t, r) {
          return (e & t) ^ (e & r) ^ (t & r);
        });
      const n = r(45791),
        i = r(43165);
      function s(e, t, r, n) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, r, n);
        const i = BigInt(32),
          s = BigInt(4294967295),
          o = Number((r >> i) & s),
          a = Number(r & s),
          c = n ? 4 : 0,
          f = n ? 0 : 4;
        e.setUint32(t + c, o, n), e.setUint32(t + f, a, n);
      }
      class o extends i.Hash {
        constructor(e, t, r, n) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.createView)(this.buffer));
        }
        update(e) {
          (0, n.aexists)(this);
          const { view: t, buffer: r, blockLen: s } = this,
            o = (e = (0, i.toBytes)(e)).length;
          for (let n = 0; n < o; ) {
            const a = Math.min(s - this.pos, o - n);
            if (a !== s)
              r.set(e.subarray(n, n + a), this.pos),
                (this.pos += a),
                (n += a),
                this.pos === s && (this.process(t, 0), (this.pos = 0));
            else {
              const t = (0, i.createView)(e);
              for (; s <= o - n; n += s) this.process(t, n);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, n.aexists)(this), (0, n.aoutput)(e, this), (this.finished = !0);
          const { buffer: t, view: r, blockLen: o, isLE: a } = this;
          let { pos: c } = this;
          (t[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > o - c && (this.process(r, 0), (c = 0));
          for (let n = c; n < o; n++) t[n] = 0;
          s(r, o - 8, BigInt(8 * this.length), a), this.process(r, 0);
          const f = (0, i.createView)(e),
            u = this.outputLen;
          if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const d = u / 4,
            h = this.get();
          if (d > h.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let n = 0; n < d; n++) f.setUint32(4 * n, h[n], a);
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
            length: n,
            finished: i,
            destroyed: s,
            pos: o,
          } = this;
          return (
            (e.length = n),
            (e.pos = o),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      t.HashMD = o;
    },
    91953: (e, t, r) => {
      "use strict";
      r.d(t, {
        GK: () => p,
        BI: () => b,
        dm: () => y,
        ST: () => m,
        lF: () => h,
      });
      r(61913);
      var n = r(10541),
        i = r(15914),
        s = r(6370);
      const o = /^(.*)\[([0-9]*)\]$/,
        a = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        c =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function f(e) {
        let { checksumAddress: t = !1, parameter: r, value: o } = e;
        const a = r,
          h = d(a.type);
        if (h) {
          const [e, r] = h;
          return (function (e, t) {
            const { checksumAddress: r, length: n, parameter: i } = t,
              o = null === n;
            if (!Array.isArray(e)) throw new y(e);
            if (!o && e.length !== n)
              throw new p({
                expectedLength: n,
                givenLength: e.length,
                type: `${i.type}[${n}]`,
              });
            let a = !1;
            const c = [];
            for (let s = 0; s < e.length; s++) {
              const t = f({ checksumAddress: r, parameter: i, value: e[s] });
              t.dynamic && (a = !0), c.push(t);
            }
            if (o || a) {
              const e = u(c);
              if (o) {
                const t = s.oB(c.length, { size: 32 });
                return { dynamic: !0, encoded: c.length > 0 ? s.xW(t, e) : t };
              }
              if (a) return { dynamic: !0, encoded: e };
            }
            return {
              dynamic: !1,
              encoded: s.xW(
                ...c.map((e) => {
                  let { encoded: t } = e;
                  return t;
                })
              ),
            };
          })(o, {
            checksumAddress: t,
            length: e,
            parameter: { ...a, type: r },
          });
        }
        if ("tuple" === a.type)
          return (function (e, t) {
            const { checksumAddress: r, parameter: n } = t;
            let i = !1;
            const o = [];
            for (let s = 0; s < n.components.length; s++) {
              const t = n.components[s],
                a = f({
                  checksumAddress: r,
                  parameter: t,
                  value: e[Array.isArray(e) ? s : t.name],
                });
              o.push(a), a.dynamic && (i = !0);
            }
            return {
              dynamic: i,
              encoded: i
                ? u(o)
                : s.xW(
                    ...o.map((e) => {
                      let { encoded: t } = e;
                      return t;
                    })
                  ),
            };
          })(o, { checksumAddress: t, parameter: a });
        if ("address" === a.type)
          return (function (e, t) {
            const { checksum: r = !1 } = t;
            return (
              n.vA(e, { strict: r }),
              { dynamic: !1, encoded: s.Ho(e.toLowerCase()) }
            );
          })(o, { checksum: t });
        if ("bool" === a.type)
          return (function (e) {
            if ("boolean" !== typeof e)
              throw new i.C(
                `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
              );
            return { dynamic: !1, encoded: s.Ho(s.xb(e)) };
          })(o);
        if (a.type.startsWith("uint") || a.type.startsWith("int")) {
          var l;
          const e = a.type.startsWith("int"),
            [, , t = "256"] =
              null !== (l = c.exec(a.type)) && void 0 !== l ? l : [];
          return (function (e, t) {
            let { signed: r, size: n } = t;
            if ("number" === typeof n) {
              const t = 2n ** (BigInt(n) - (r ? 1n : 0n)) - 1n,
                i = r ? -t - 1n : 0n;
              if (e > t || e < i)
                throw new s.Ty({
                  max: t.toString(),
                  min: i.toString(),
                  signed: r,
                  size: n / 8,
                  value: e.toString(),
                });
            }
            return { dynamic: !1, encoded: s.oB(e, { size: 32, signed: r }) };
          })(o, { signed: e, size: Number(t) });
        }
        if (a.type.startsWith("bytes"))
          return (function (e, t) {
            let { type: r } = t;
            const [, n] = r.split("bytes"),
              i = s.Ej(e);
            if (!n) {
              let t = e;
              return (
                i % 32 !== 0 &&
                  (t = s.M7(t, 32 * Math.ceil((e.length - 2) / 2 / 32))),
                { dynamic: !0, encoded: s.xW(s.Ho(s.oB(i, { size: 32 })), t) }
              );
            }
            if (i !== Number.parseInt(n))
              throw new b({ expectedSize: Number.parseInt(n), value: e });
            return { dynamic: !1, encoded: s.M7(e) };
          })(o, { type: a.type });
        if ("string" === a.type)
          return (function (e) {
            const t = s.sH(e),
              r = Math.ceil(s.Ej(t) / 32),
              n = [];
            for (let i = 0; i < r; i++)
              n.push(s.M7(s.di(t, 32 * i, 32 * (i + 1))));
            return {
              dynamic: !0,
              encoded: s.xW(s.M7(s.oB(s.Ej(t), { size: 32 })), ...n),
            };
          })(o);
        throw new m(a.type);
      }
      function u(e) {
        let t = 0;
        for (let o = 0; o < e.length; o++) {
          const { dynamic: r, encoded: n } = e[o];
          t += r ? 32 : s.Ej(n);
        }
        const r = [],
          n = [];
        let i = 0;
        for (let o = 0; o < e.length; o++) {
          const { dynamic: a, encoded: c } = e[o];
          a
            ? (r.push(s.oB(t + i, { size: 32 })), n.push(c), (i += s.Ej(c)))
            : r.push(c);
        }
        return s.xW(...r, ...n);
      }
      function d(e) {
        const t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function h(e, t, r) {
        const { checksumAddress: n = !1 } = null !== r && void 0 !== r ? r : {};
        if (e.length !== t.length)
          throw new g({ expectedLength: e.length, givenLength: t.length });
        const i = (function (e) {
            let { checksumAddress: t, parameters: r, values: n } = e;
            const i = [];
            for (let s = 0; s < r.length; s++)
              i.push(f({ checksumAddress: t, parameter: r[s], value: n[s] }));
            return i;
          })({ checksumAddress: n, parameters: e, values: t }),
          s = u(i);
        return 0 === s.length ? "0x" : s;
      }
      function l(e, t) {
        if (e.length !== t.length)
          throw new g({ expectedLength: e.length, givenLength: t.length });
        const r = [];
        for (let n = 0; n < e.length; n++) {
          const i = e[n],
            s = t[n];
          r.push(l.encode(i, s));
        }
        return s.xW(...r);
      }
      !(function (e) {
        e.encode = function e(t, r) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ("address" === t) {
            const e = r;
            return n.vA(e), s.Ho(e.toLowerCase(), i ? 32 : 0);
          }
          if ("string" === t) return s.sH(r);
          if ("bytes" === t) return r;
          if ("bool" === t) return s.Ho(s.xb(r), i ? 32 : 1);
          const f = t.match(c);
          if (f) {
            const [e, t, n = "256"] = f,
              o = Number.parseInt(n) / 8;
            return s.oB(r, { size: i ? 32 : o, signed: "int" === t });
          }
          const u = t.match(a);
          if (u) {
            const [e, t] = u;
            if (Number.parseInt(t) !== (r.length - 2) / 2)
              throw new b({ expectedSize: Number.parseInt(t), value: r });
            return s.M7(r, i ? 32 : 0);
          }
          const d = t.match(o);
          if (d && Array.isArray(r)) {
            const [t, n] = d,
              i = [];
            for (let s = 0; s < r.length; s++) i.push(e(n, r[s], !0));
            return 0 === i.length ? "0x" : s.xW(...i);
          }
          throw new m(t);
        };
      })(l || (l = {}));
      i.C;
      i.C;
      class p extends i.C {
        constructor(e) {
          let { expectedLength: t, givenLength: r, type: n } = e;
          super(
            `Array length mismatch for type \`${n}\`. Expected: \`${t}\`. Given: \`${r}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class b extends i.C {
        constructor(e) {
          let { expectedSize: t, value: r } = e;
          super(
            `Size of bytes "${r}" (bytes${s.Ej(
              r
            )}) does not match expected size (bytes${t}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class g extends i.C {
        constructor(e) {
          let { expectedLength: t, givenLength: r } = e;
          super(
            [
              "ABI encoding parameters/values length mismatch.",
              `Expected length (parameters): ${t}`,
              `Given length (values): ${r}`,
            ].join("\n")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class y extends i.C {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class m extends i.C {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
    },
    94220: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => h });
      var n = r(71274),
        i = r(51722),
        s = r(975);
      class o {
        constructor(e) {
          this.G = e;
        }
        disconnect() {
          this.G = void 0;
        }
        reconnect(e) {
          this.G = e;
        }
        deref() {
          return this.G;
        }
      }
      class a {
        constructor() {
          (this.Y = void 0), (this.Z = void 0);
        }
        get() {
          return this.Y;
        }
        pause() {
          var e;
          (null !== (e = this.Y) && void 0 !== e) ||
            (this.Y = new Promise((e) => (this.Z = e)));
        }
        resume() {
          var e;
          null !== (e = this.Z) && void 0 !== e && e.call(this),
            (this.Y = this.Z = void 0);
        }
      }
      var c = r(83238);
      const f = (e) => !(0, i.sO)(e) && "function" == typeof e.then,
        u = 1073741823;
      class d extends s.Kq {
        constructor() {
          super(...arguments),
            (this._$Cwt = u),
            (this._$Cbt = []),
            (this._$CK = new o(this)),
            (this._$CX = new a());
        }
        render() {
          for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return null !== (e = r.find((e) => !f(e))) && void 0 !== e ? e : n.c0;
        }
        update(e, t) {
          const r = this._$Cbt;
          let i = r.length;
          this._$Cbt = t;
          const s = this._$CK,
            o = this._$CX;
          this.isConnected || this.disconnected();
          for (let n = 0; n < t.length && !(n > this._$Cwt); n++) {
            const e = t[n];
            if (!f(e)) return (this._$Cwt = n), e;
            (n < i && e === r[n]) ||
              ((this._$Cwt = u),
              (i = 0),
              Promise.resolve(e).then(async (t) => {
                for (; o.get(); ) await o.get();
                const r = s.deref();
                if (void 0 !== r) {
                  const n = r._$Cbt.indexOf(e);
                  n > -1 && n < r._$Cwt && ((r._$Cwt = n), r.setValue(t));
                }
              }));
          }
          return n.c0;
        }
        disconnected() {
          this._$CK.disconnect(), this._$CX.pause();
        }
        reconnected() {
          this._$CK.reconnect(this), this._$CX.resume();
        }
      }
      const h = (0, c.u$)(d);
    },
    95851: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer,
        i = r(43693).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ECPairFactory = t.networks = void 0);
      const s = r(54960);
      t.networks = s;
      const o = r(32878),
        a = r(7248),
        c = r(83556),
        f = r(62950),
        u = o.typeforce.maybe(
          o.typeforce.compile({
            compressed: o.maybe(o.Boolean),
            network: o.maybe(o.Network),
          })
        );
      t.ECPairFactory = function (e) {
        function t(t, r) {
          if ((o.typeforce(o.Buffer256bit, t), !e.isPrivate(t)))
            throw new TypeError("Private key not in range [1, n)");
          return o.typeforce(u, r), new d(t, void 0, r);
        }
        function r(t, r) {
          return (
            o.typeforce(e.isPoint, t), o.typeforce(u, r), new d(void 0, t, r)
          );
        }
        (0, f.testEcc)(e);
        class d {
          constructor(t, r, o) {
            i(this, "__D", void 0),
              i(this, "__Q", void 0),
              i(this, "compressed", void 0),
              i(this, "network", void 0),
              i(this, "lowR", void 0),
              (this.__D = t),
              (this.__Q = r),
              (this.lowR = !1),
              void 0 === o && (o = {}),
              (this.compressed = void 0 === o.compressed || o.compressed),
              (this.network = o.network || s.bitcoin),
              void 0 !== r &&
                (this.__Q = n.from(e.pointCompress(r, this.compressed)));
          }
          get privateKey() {
            return this.__D;
          }
          get publicKey() {
            if (!this.__Q) {
              const t = e.pointFromScalar(this.__D, this.compressed);
              this.__Q = n.from(t);
            }
            return this.__Q;
          }
          toWIF() {
            if (!this.__D) throw new Error("Missing private key");
            return c.encode(this.network.wif, this.__D, this.compressed);
          }
          tweak(e) {
            return this.privateKey
              ? this.tweakFromPrivateKey(e)
              : this.tweakFromPublicKey(e);
          }
          sign(t, r) {
            if (!this.__D) throw new Error("Missing private key");
            if ((void 0 === r && (r = this.lowR), !1 === r))
              return n.from(e.sign(t, this.__D));
            {
              let r = e.sign(t, this.__D);
              const i = n.alloc(32, 0);
              let s = 0;
              for (; r[0] > 127; )
                s++, i.writeUIntLE(s, 0, 6), (r = e.sign(t, this.__D, i));
              return n.from(r);
            }
          }
          signSchnorr(t) {
            if (!this.privateKey) throw new Error("Missing private key");
            if (!e.signSchnorr)
              throw new Error("signSchnorr not supported by ecc library");
            return n.from(e.signSchnorr(t, this.privateKey));
          }
          verify(t, r) {
            return e.verify(t, this.publicKey, r);
          }
          verifySchnorr(t, r) {
            if (!e.verifySchnorr)
              throw new Error("verifySchnorr not supported by ecc library");
            return e.verifySchnorr(t, this.publicKey.subarray(1, 33), r);
          }
          tweakFromPublicKey(t) {
            const i = 32 === (s = this.publicKey).length ? s : s.slice(1, 33);
            var s;
            const o = e.xOnlyPointAddTweak(i, t);
            if (!o || null === o.xOnlyPubkey)
              throw new Error("Cannot tweak public key!");
            const a = n.from([0 === o.parity ? 2 : 3]);
            return r(n.concat([a, o.xOnlyPubkey]), {
              network: this.network,
              compressed: this.compressed,
            });
          }
          tweakFromPrivateKey(r) {
            const i =
                3 === this.publicKey[0] ||
                (4 === this.publicKey[0] && 1 === (1 & this.publicKey[64]))
                  ? e.privateNegate(this.privateKey)
                  : this.privateKey,
              s = e.privateAdd(i, r);
            if (!s) throw new Error("Invalid tweaked private key!");
            return t(n.from(s), {
              network: this.network,
              compressed: this.compressed,
            });
          }
        }
        return {
          isPoint: function (t) {
            return e.isPoint(t);
          },
          fromPrivateKey: t,
          fromPublicKey: r,
          fromWIF: function (e, r) {
            const n = c.decode(e),
              i = n.version;
            if (o.Array(r)) {
              if (!(r = r.filter((e) => i === e.wif).pop()))
                throw new Error("Unknown network version");
            } else if (((r = r || s.bitcoin), i !== r.wif))
              throw new Error("Invalid network version");
            return t(n.privateKey, { compressed: n.compressed, network: r });
          },
          makeRandom: function (r) {
            o.typeforce(u, r), void 0 === r && (r = {});
            const n = r.rng || a;
            let i;
            do {
              (i = n(32)), o.typeforce(o.Buffer256bit, i);
            } while (!e.isPrivate(i));
            return t(i, r);
          },
        };
      };
    },
    98374: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha1 = t.SHA1 = void 0);
      const n = r(72900);
      (t.SHA1 = n.SHA1), (t.sha1 = n.sha1);
    },
    98755: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHA512_IV =
          t.SHA384_IV =
          t.SHA224_IV =
          t.SHA256_IV =
          t.HashMD =
            void 0),
        (t.setBigUint64 = i),
        (t.Chi = function (e, t, r) {
          return (e & t) ^ (~e & r);
        }),
        (t.Maj = function (e, t, r) {
          return (e & t) ^ (e & r) ^ (t & r);
        });
      const n = r(75086);
      function i(e, t, r, n) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, r, n);
        const i = BigInt(32),
          s = BigInt(4294967295),
          o = Number((r >> i) & s),
          a = Number(r & s),
          c = n ? 4 : 0,
          f = n ? 0 : 4;
        e.setUint32(t + c, o, n), e.setUint32(t + f, a, n);
      }
      class s extends n.Hash {
        constructor(e, t, r, i) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, n.createView)(this.buffer));
        }
        update(e) {
          (0, n.aexists)(this), (e = (0, n.toBytes)(e)), (0, n.abytes)(e);
          const { view: t, buffer: r, blockLen: i } = this,
            s = e.length;
          for (let o = 0; o < s; ) {
            const a = Math.min(i - this.pos, s - o);
            if (a !== i)
              r.set(e.subarray(o, o + a), this.pos),
                (this.pos += a),
                (o += a),
                this.pos === i && (this.process(t, 0), (this.pos = 0));
            else {
              const t = (0, n.createView)(e);
              for (; i <= s - o; o += i) this.process(t, o);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, n.aexists)(this), (0, n.aoutput)(e, this), (this.finished = !0);
          const { buffer: t, view: r, blockLen: s, isLE: o } = this;
          let { pos: a } = this;
          (t[a++] = 128),
            (0, n.clean)(this.buffer.subarray(a)),
            this.padOffset > s - a && (this.process(r, 0), (a = 0));
          for (let n = a; n < s; n++) t[n] = 0;
          i(r, s - 8, BigInt(8 * this.length), o), this.process(r, 0);
          const c = (0, n.createView)(e),
            f = this.outputLen;
          if (f % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const u = f / 4,
            d = this.get();
          if (u > d.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let n = 0; n < u; n++) c.setUint32(4 * n, d[n], o);
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
            length: n,
            finished: i,
            destroyed: s,
            pos: o,
          } = this;
          return (
            (e.destroyed = s),
            (e.finished = i),
            (e.length = n),
            (e.pos = o),
            n % t && e.buffer.set(r),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      (t.HashMD = s),
        (t.SHA256_IV = Uint32Array.from([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ])),
        (t.SHA224_IV = Uint32Array.from([
          3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
          1694076839, 3204075428,
        ])),
        (t.SHA384_IV = Uint32Array.from([
          3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
          355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
          3675008525, 1694076839, 1203062813, 3204075428,
        ])),
        (t.SHA512_IV = Uint32Array.from([
          1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
          4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
          2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
        ]));
    },
  },
]);
