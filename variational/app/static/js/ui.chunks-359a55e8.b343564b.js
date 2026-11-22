"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [2247],
  {
    239: (e, t, i) => {
      i.d(t, { A: () => a });
      var n = i(34575);
      function a() {
        var e = (0, n.$r)();
        return function (t) {
          var i = e(t),
            n = t.pipelineContext,
            a = !!i.large,
            o = !!i.progressiveRender,
            r = (i.large = !(!n || !n.large)),
            l = (i.progressiveRender = !(!n || !n.progressiveRender));
          return !(a === r && o === l) && "reset";
        };
      }
    },
    2570: (e, t, i) => {
      i.d(t, { a: () => L });
      var n = i(37292),
        a = i(15230),
        o = i(14034),
        r = i(70441),
        l = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (
              (i.type = t.type),
              (i.defaultValueDimensions = [
                { name: "min", defaultTooltip: !0 },
                { name: "Q1", defaultTooltip: !0 },
                { name: "median", defaultTooltip: !0 },
                { name: "Q3", defaultTooltip: !0 },
                { name: "max", defaultTooltip: !0 },
              ]),
              (i.visualDrawType = "stroke"),
              i
            );
          }
          return (
            (0, n.C6)(t, e),
            (t.type = "series.boxplot"),
            (t.dependencies = ["xAxis", "yAxis", "grid"]),
            (t.defaultOption = {
              z: 2,
              coordinateSystem: "cartesian2d",
              legendHoverLink: !0,
              layout: null,
              boxWidth: [7, 50],
              itemStyle: { color: "#fff", borderWidth: 1 },
              emphasis: {
                scale: !0,
                itemStyle: {
                  borderWidth: 2,
                  shadowBlur: 5,
                  shadowOffsetX: 1,
                  shadowOffsetY: 1,
                  shadowColor: "rgba(0,0,0,0.2)",
                },
              },
              animationDuration: 800,
            }),
            t
          );
        })(a.A);
      (0, r.mixin)(l, o.n, !0);
      const s = l;
      var u = i(29379),
        d = i(72042),
        c = i(41406),
        h = i(70),
        p = i(39253),
        g = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.render = function (e, t, i) {
              var n = e.getData(),
                a = this.group,
                o = this._data;
              this._data || a.removeAll();
              var r = "horizontal" === e.get("layout") ? 1 : 0;
              n
                .diff(o)
                .add(function (e) {
                  if (n.hasValue(e)) {
                    var t = m(n.getItemLayout(e), n, e, r, !0);
                    n.setItemGraphicEl(e, t), a.add(t);
                  }
                })
                .update(function (e, t) {
                  var i = o.getItemGraphicEl(t);
                  if (n.hasValue(e)) {
                    var l = n.getItemLayout(e);
                    i ? ((0, p.ap)(i), v(l, i, n, e)) : (i = m(l, n, e, r)),
                      a.add(i),
                      n.setItemGraphicEl(e, i);
                  } else a.remove(i);
                })
                .remove(function (e) {
                  var t = o.getItemGraphicEl(e);
                  t && a.remove(t);
                })
                .execute(),
                (this._data = n);
            }),
            (t.prototype.remove = function (e) {
              var t = this.group,
                i = this._data;
              (this._data = null),
                i &&
                  i.eachItemGraphicEl(function (e) {
                    e && t.remove(e);
                  });
            }),
            (t.type = "boxplot"),
            t
          );
        })(u.A),
        f = function () {},
        y = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i.type = "boxplotBoxPath"), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getDefaultShape = function () {
              return new f();
            }),
            (t.prototype.buildPath = function (e, t) {
              var i = t.points,
                n = 0;
              for (e.moveTo(i[n][0], i[n][1]), n++; n < 4; n++)
                e.lineTo(i[n][0], i[n][1]);
              for (e.closePath(); n < i.length; n++)
                e.moveTo(i[n][0], i[n][1]), n++, e.lineTo(i[n][0], i[n][1]);
            }),
            t
          );
        })(h.Ay);
      function m(e, t, i, n, a) {
        var o = e.ends,
          r = new y({ shape: { points: a ? x(o, n, e) : o } });
        return v(e, r, t, i, a), r;
      }
      function v(e, t, i, n, a) {
        var o = i.hostModel;
        (0, d[a ? "initProps" : "updateProps"])(
          t,
          { shape: { points: e.ends } },
          o,
          n
        ),
          t.useStyle(i.getItemVisual(n, "style")),
          (t.style.strokeNoScale = !0),
          (t.z2 = 100);
        var r = i.getItemModel(n),
          l = r.getModel("emphasis");
        (0, c.Mx)(t, r),
          (0, c.Lm)(t, l.get("focus"), l.get("blurScope"), l.get("disabled"));
      }
      function x(e, t, i) {
        return r.map(e, function (e) {
          return ((e = e.slice())[t] = i.initBaseline), e;
        });
      }
      const b = g;
      var S = i(85941),
        _ = r.each;
      function A(e) {
        var t = (function (e) {
          var t = [],
            i = [];
          return (
            e.eachSeriesByType("boxplot", function (e) {
              var n = e.getBaseAxis(),
                a = r.indexOf(i, n);
              a < 0 &&
                ((a = i.length),
                (i[a] = n),
                (t[a] = { axis: n, seriesModels: [] })),
                t[a].seriesModels.push(e);
            }),
            t
          );
        })(e);
        _(t, function (e) {
          var t = e.seriesModels;
          t.length &&
            (!(function (e) {
              var t,
                i = e.axis,
                n = e.seriesModels,
                a = n.length,
                o = (e.boxWidthList = []),
                l = (e.boxOffsetList = []),
                s = [];
              if ("category" === i.type) t = i.getBandWidth();
              else {
                var u = 0;
                _(n, function (e) {
                  u = Math.max(u, e.getData().count());
                });
                var d = i.getExtent();
                t = Math.abs(d[1] - d[0]) / u;
              }
              _(n, function (e) {
                var i = e.get("boxWidth");
                r.isArray(i) || (i = [i, i]),
                  s.push([(0, S.lo)(i[0], t) || 0, (0, S.lo)(i[1], t) || 0]);
              });
              var c = 0.8 * t - 2,
                h = (c / a) * 0.3,
                p = (c - h * (a - 1)) / a,
                g = p / 2 - c / 2;
              _(n, function (e, t) {
                l.push(g),
                  (g += h + p),
                  o.push(Math.min(Math.max(p, s[t][0]), s[t][1]));
              });
            })(e),
            _(t, function (t, i) {
              !(function (e, t, i) {
                var n = e.coordinateSystem,
                  a = e.getData(),
                  o = i / 2,
                  r = "horizontal" === e.get("layout") ? 0 : 1,
                  l = 1 - r,
                  s = ["x", "y"],
                  u = a.mapDimension(s[r]),
                  d = a.mapDimensionsAll(s[l]);
                if (null == u || d.length < 5) return;
                for (var c = 0; c < a.count(); c++) {
                  var h = a.get(u, c),
                    p = x(h, d[2], c),
                    g = x(h, d[0], c),
                    f = x(h, d[1], c),
                    y = x(h, d[3], c),
                    m = x(h, d[4], c),
                    v = [];
                  b(v, f, !1),
                    b(v, y, !0),
                    v.push(g, f, m, y),
                    S(v, g),
                    S(v, m),
                    S(v, p),
                    a.setItemLayout(c, { initBaseline: p[l], ends: v });
                }
                function x(e, i, o) {
                  var s,
                    u = a.get(i, o),
                    d = [];
                  return (
                    (d[r] = e),
                    (d[l] = u),
                    isNaN(e) || isNaN(u)
                      ? (s = [NaN, NaN])
                      : ((s = n.dataToPoint(d))[r] += t),
                    s
                  );
                }
                function b(e, t, i) {
                  var n = t.slice(),
                    a = t.slice();
                  (n[r] += o), (a[r] -= o), i ? e.push(n, a) : e.push(a, n);
                }
                function S(e, t) {
                  var i = t.slice(),
                    n = t.slice();
                  (i[r] -= o), (n[r] += o), e.push(i, n);
                }
              })(t, e.boxOffsetList[i], e.boxWidthList[i]);
            }));
        });
      }
      var w = i(88),
        I = i(85327),
        M = {
          type: "echarts:boxplot",
          transform: function (e) {
            var t = e.upstream;
            if (t.sourceFormat !== I.Km) {
              0, (0, w.$8)("");
            }
            var i = (function (e, t) {
              for (
                var i = [],
                  n = [],
                  a = (t = t || {}).boundIQR,
                  o = "none" === a || 0 === a,
                  l = 0;
                l < e.length;
                l++
              ) {
                var s = (0, S.Y6)(e[l].slice()),
                  u = (0, S.YV)(s, 0.25),
                  d = (0, S.YV)(s, 0.5),
                  c = (0, S.YV)(s, 0.75),
                  h = s[0],
                  p = s[s.length - 1],
                  g = (null == a ? 1.5 : a) * (c - u),
                  f = o ? h : Math.max(h, u - g),
                  y = o ? p : Math.min(p, c + g),
                  m = t.itemNameFormatter,
                  v = (0, r.isFunction)(m)
                    ? m({ value: l })
                    : (0, r.isString)(m)
                    ? m.replace("{value}", l + "")
                    : l + "";
                i.push([v, f, u, d, c, y]);
                for (var x = 0; x < s.length; x++) {
                  var b = s[x];
                  if (b < f || b > y) {
                    var _ = [v, b];
                    n.push(_);
                  }
                }
              }
              return { boxData: i, outliers: n };
            })(t.getRawData(), e.config);
            return [
              {
                dimensions: ["ItemName", "Low", "Q1", "Q2", "Q3", "High"],
                data: i.boxData,
              },
              { data: i.outliers },
            ];
          },
        };
      function L(e) {
        e.registerSeriesModel(s),
          e.registerChartView(b),
          e.registerLayout(A),
          e.registerTransform(M);
      }
    },
    3629: (e, t, i) => {
      i.d(t, { T: () => r, i: () => o });
      var n = i(8474),
        a = i(70441);
      function o(e, t) {
        var i = e.mapDimensionsAll("defaultedLabel"),
          a = i.length;
        if (1 === a) {
          var o = (0, n.QE)(e, t, i[0]);
          return null != o ? o + "" : null;
        }
        if (a) {
          for (var r = [], l = 0; l < i.length; l++)
            r.push((0, n.QE)(e, t, i[l]));
          return r.join(" ");
        }
      }
      function r(e, t) {
        var i = e.mapDimensionsAll("defaultedLabel");
        if (!(0, a.isArray)(t)) return t + "";
        for (var n = [], o = 0; o < i.length; o++) {
          var r = e.getDimensionIndex(i[o]);
          r >= 0 && n.push(t[r]);
        }
        return n.join(" ");
      }
    },
    5508: (e, t, i) => {
      i.d(t, { A: () => r });
      var n = i(18846),
        a = i(89033),
        o = i(70441);
      function r(e, t, i) {
        t =
          ((0, o.isArray)(t) && { coordDimensions: t }) ||
          (0, o.extend)({ encodeDefine: e.getEncode() }, t);
        var r = e.getSource(),
          l = (0, n.A)(r, t).dimensions,
          s = new a.A(l, e);
        return s.initData(r, i), s;
      }
    },
    11e3: (e, t, i) => {
      i.d(t, { a: () => F });
      var n = i(37292),
        a = i(70441),
        o = i(29379),
        r = i(72042),
        l = i(39253),
        s = i(41406),
        u = i(70),
        d = i(34020),
        c = i(239),
        h = ["itemStyle", "borderColor"],
        p = ["itemStyle", "borderColor0"],
        g = ["itemStyle", "borderColorDoji"],
        f = ["itemStyle", "color"],
        y = ["itemStyle", "color0"];
      function m(e, t) {
        return t.get(e > 0 ? f : y);
      }
      function v(e, t) {
        return t.get(0 === e ? g : e > 0 ? h : p);
      }
      const x = {
        seriesType: "candlestick",
        plan: (0, c.A)(),
        performRawSeries: !0,
        reset: function (e, t) {
          if (!t.isSeriesFiltered(e))
            return (
              !e.pipelineContext.large && {
                progress: function (e, t) {
                  for (var i; null != (i = e.next()); ) {
                    var n = t.getItemModel(i),
                      o = t.getItemLayout(i).sign,
                      r = n.getItemStyle();
                    (r.fill = m(o, n)), (r.stroke = v(o, n) || r.fill);
                    var l = t.ensureUniqueItemVisual(i, "style");
                    (0, a.extend)(l, r);
                  }
                },
              }
            );
        },
      };
      var b = ["color", "borderColor"],
        S = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.render = function (e, t, i) {
              this.group.removeClipPath(),
                (this._progressiveEls = null),
                this._updateDrawMode(e),
                this._isLargeDraw
                  ? this._renderLarge(e)
                  : this._renderNormal(e);
            }),
            (t.prototype.incrementalPrepareRender = function (e, t, i) {
              this._clear(), this._updateDrawMode(e);
            }),
            (t.prototype.incrementalRender = function (e, t, i, n) {
              (this._progressiveEls = []),
                this._isLargeDraw
                  ? this._incrementalRenderLarge(e, t)
                  : this._incrementalRenderNormal(e, t);
            }),
            (t.prototype.eachRendered = function (e) {
              r.traverseElements(this._progressiveEls || this.group, e);
            }),
            (t.prototype._updateDrawMode = function (e) {
              var t = e.pipelineContext.large;
              (null != this._isLargeDraw && t === this._isLargeDraw) ||
                ((this._isLargeDraw = t), this._clear());
            }),
            (t.prototype._renderNormal = function (e) {
              var t = e.getData(),
                i = this._data,
                n = this.group,
                a = t.getLayout("isSimpleBox"),
                o = e.get("clip", !0),
                r = e.coordinateSystem,
                s = r.getArea && r.getArea();
              this._data || n.removeAll(),
                t
                  .diff(i)
                  .add(function (i) {
                    if (t.hasValue(i)) {
                      var r = t.getItemLayout(i);
                      if (o && I(s, r)) return;
                      var u = w(r, i, !0);
                      l.LW(u, { shape: { points: r.ends } }, e, i),
                        M(u, t, i, a),
                        n.add(u),
                        t.setItemGraphicEl(i, u);
                    }
                  })
                  .update(function (r, u) {
                    var d = i.getItemGraphicEl(u);
                    if (t.hasValue(r)) {
                      var c = t.getItemLayout(r);
                      o && I(s, c)
                        ? n.remove(d)
                        : (d
                            ? (l.oi(d, { shape: { points: c.ends } }, e, r),
                              (0, l.ap)(d))
                            : (d = w(c, r)),
                          M(d, t, r, a),
                          n.add(d),
                          t.setItemGraphicEl(r, d));
                    } else n.remove(d);
                  })
                  .remove(function (e) {
                    var t = i.getItemGraphicEl(e);
                    t && n.remove(t);
                  })
                  .execute(),
                (this._data = t);
            }),
            (t.prototype._renderLarge = function (e) {
              this._clear(), N(e, this.group);
              var t = e.get("clip", !0)
                ? (0, d.Ip)(e.coordinateSystem, !1, e)
                : null;
              t ? this.group.setClipPath(t) : this.group.removeClipPath();
            }),
            (t.prototype._incrementalRenderNormal = function (e, t) {
              for (
                var i, n = t.getData(), a = n.getLayout("isSimpleBox");
                null != (i = e.next());

              ) {
                var o = w(n.getItemLayout(i), i);
                M(o, n, i, a),
                  (o.incremental = !0),
                  this.group.add(o),
                  this._progressiveEls.push(o);
              }
            }),
            (t.prototype._incrementalRenderLarge = function (e, t) {
              N(t, this.group, this._progressiveEls, !0);
            }),
            (t.prototype.remove = function (e) {
              this._clear();
            }),
            (t.prototype._clear = function () {
              this.group.removeAll(), (this._data = null);
            }),
            (t.type = "candlestick"),
            t
          );
        })(o.A),
        _ = function () {},
        A = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i.type = "normalCandlestickBox"), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getDefaultShape = function () {
              return new _();
            }),
            (t.prototype.buildPath = function (e, t) {
              var i = t.points;
              this.__simpleBox
                ? (e.moveTo(i[4][0], i[4][1]), e.lineTo(i[6][0], i[6][1]))
                : (e.moveTo(i[0][0], i[0][1]),
                  e.lineTo(i[1][0], i[1][1]),
                  e.lineTo(i[2][0], i[2][1]),
                  e.lineTo(i[3][0], i[3][1]),
                  e.closePath(),
                  e.moveTo(i[4][0], i[4][1]),
                  e.lineTo(i[5][0], i[5][1]),
                  e.moveTo(i[6][0], i[6][1]),
                  e.lineTo(i[7][0], i[7][1]));
            }),
            t
          );
        })(u.Ay);
      function w(e, t, i) {
        var n = e.ends;
        return new A({ shape: { points: i ? L(n, e) : n }, z2: 100 });
      }
      function I(e, t) {
        for (var i = !0, n = 0; n < t.ends.length; n++)
          if (e.contain(t.ends[n][0], t.ends[n][1])) {
            i = !1;
            break;
          }
        return i;
      }
      function M(e, t, i, n) {
        var o = t.getItemModel(i);
        e.useStyle(t.getItemVisual(i, "style")),
          (e.style.strokeNoScale = !0),
          (e.__simpleBox = n),
          (0, s.Mx)(e, o);
        var r = t.getItemLayout(i).sign;
        a.each(e.states, function (e, t) {
          var i = o.getModel(t),
            n = m(r, i),
            a = v(r, i) || n,
            l = e.style || (e.style = {});
          n && (l.fill = n), a && (l.stroke = a);
        });
        var l = o.getModel("emphasis");
        (0, s.Lm)(e, l.get("focus"), l.get("blurScope"), l.get("disabled"));
      }
      function L(e, t) {
        return a.map(e, function (e) {
          return ((e = e.slice())[1] = t.initBaseline), e;
        });
      }
      var D = function () {},
        C = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i.type = "largeCandlestickBox"), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getDefaultShape = function () {
              return new D();
            }),
            (t.prototype.buildPath = function (e, t) {
              for (var i = t.points, n = 0; n < i.length; )
                if (this.__sign === i[n++]) {
                  var a = i[n++];
                  e.moveTo(a, i[n++]), e.lineTo(a, i[n++]);
                } else n += 3;
            }),
            t
          );
        })(u.Ay);
      function N(e, t, i, n) {
        var a = e.getData(),
          o = a.getLayout("largePoints"),
          r = new C({
            shape: { points: o },
            __sign: 1,
            ignoreCoarsePointer: !0,
          });
        t.add(r);
        var l = new C({
          shape: { points: o },
          __sign: -1,
          ignoreCoarsePointer: !0,
        });
        t.add(l);
        var s = new C({
          shape: { points: o },
          __sign: 0,
          ignoreCoarsePointer: !0,
        });
        t.add(s),
          T(1, r, e, a),
          T(-1, l, e, a),
          T(0, s, e, a),
          n && ((r.incremental = !0), (l.incremental = !0)),
          i && i.push(r, l);
      }
      function T(e, t, i, n) {
        var a = v(e, i) || m(e, i),
          o = i.getModel("itemStyle").getItemStyle(b);
        t.useStyle(o), (t.style.fill = null), (t.style.stroke = a);
      }
      const P = S;
      var E = i(15230),
        V = i(14034),
        R = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (
              (i.type = t.type),
              (i.defaultValueDimensions = [
                { name: "open", defaultTooltip: !0 },
                { name: "close", defaultTooltip: !0 },
                { name: "lowest", defaultTooltip: !0 },
                { name: "highest", defaultTooltip: !0 },
              ]),
              i
            );
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getShadowDim = function () {
              return "open";
            }),
            (t.prototype.brushSelector = function (e, t, i) {
              var n = t.getItemLayout(e);
              return n && i.rect(n.brushRect);
            }),
            (t.type = "series.candlestick"),
            (t.dependencies = ["xAxis", "yAxis", "grid"]),
            (t.defaultOption = {
              z: 2,
              coordinateSystem: "cartesian2d",
              legendHoverLink: !0,
              layout: null,
              clip: !0,
              itemStyle: {
                color: "#eb5454",
                color0: "#47b262",
                borderColor: "#eb5454",
                borderColor0: "#47b262",
                borderColorDoji: null,
                borderWidth: 1,
              },
              emphasis: { itemStyle: { borderWidth: 2 } },
              barMaxWidth: null,
              barMinWidth: null,
              barWidth: null,
              large: !0,
              largeThreshold: 600,
              progressive: 3e3,
              progressiveThreshold: 1e4,
              progressiveChunkMode: "mod",
              animationEasing: "linear",
              animationDuration: 300,
            }),
            t
          );
        })(E.A);
      (0, a.mixin)(R, V.n, !0);
      const z = R;
      function O(e) {
        e &&
          a.isArray(e.series) &&
          a.each(e.series, function (e) {
            a.isObject(e) && "k" === e.type && (e.type = "candlestick");
          });
      }
      var k = i(85941),
        G = i(41586);
      function B(e, t, i, n, a, o) {
        return i > n
          ? -1
          : i < n
          ? 1
          : o
          ? 0
          : t > 0
          ? e.get(a, t - 1) <= n
            ? 1
            : -1
          : 1;
      }
      const W = {
        seriesType: "candlestick",
        plan: (0, c.A)(),
        reset: function (e) {
          var t = e.coordinateSystem,
            i = e.getData(),
            n = (function (e, t) {
              var i,
                n = e.getBaseAxis(),
                o =
                  "category" === n.type
                    ? n.getBandWidth()
                    : ((i = n.getExtent()), Math.abs(i[1] - i[0]) / t.count()),
                r = (0, k.lo)((0, a.retrieve2)(e.get("barMaxWidth"), o), o),
                l = (0, k.lo)((0, a.retrieve2)(e.get("barMinWidth"), 1), o),
                s = e.get("barWidth");
              return null != s
                ? (0, k.lo)(s, o)
                : Math.max(Math.min(o / 2, r), l);
            })(e, i),
            o = ["x", "y"],
            l = i.getDimensionIndex(i.mapDimension(o[0])),
            s = (0, a.map)(i.mapDimensionsAll(o[1]), i.getDimensionIndex, i),
            u = s[0],
            d = s[1],
            c = s[2],
            h = s[3];
          if (
            (i.setLayout({ candleWidth: n, isSimpleBox: n <= 1.3 }),
            !(l < 0 || s.length < 4))
          )
            return {
              progress: e.pipelineContext.large
                ? function (i, n) {
                    var a,
                      o,
                      r = (0, G.J)(4 * i.count),
                      s = 0,
                      p = [],
                      g = [],
                      f = n.getStore(),
                      y = !!e.get(["itemStyle", "borderColorDoji"]);
                    for (; null != (o = i.next()); ) {
                      var m = f.get(l, o),
                        v = f.get(u, o),
                        x = f.get(d, o),
                        b = f.get(c, o),
                        S = f.get(h, o);
                      isNaN(m) || isNaN(b) || isNaN(S)
                        ? ((r[s++] = NaN), (s += 3))
                        : ((r[s++] = B(f, o, v, x, d, y)),
                          (p[0] = m),
                          (p[1] = b),
                          (a = t.dataToPoint(p, null, g)),
                          (r[s++] = a ? a[0] : NaN),
                          (r[s++] = a ? a[1] : NaN),
                          (p[1] = S),
                          (a = t.dataToPoint(p, null, g)),
                          (r[s++] = a ? a[1] : NaN));
                    }
                    n.setLayout("largePoints", r);
                  }
                : function (e, i) {
                    var a,
                      o = i.getStore();
                    for (; null != (a = e.next()); ) {
                      var s = o.get(l, a),
                        p = o.get(u, a),
                        g = o.get(d, a),
                        f = o.get(c, a),
                        y = o.get(h, a),
                        m = Math.min(p, g),
                        v = Math.max(p, g),
                        x = I(m, s),
                        b = I(v, s),
                        S = I(f, s),
                        _ = I(y, s),
                        A = [];
                      M(A, b, 0), M(A, x, 1), A.push(D(_), D(b), D(S), D(x));
                      var w = !!i
                        .getItemModel(a)
                        .get(["itemStyle", "borderColorDoji"]);
                      i.setItemLayout(a, {
                        sign: B(o, a, p, g, d, w),
                        initBaseline: p > g ? b[1] : x[1],
                        ends: A,
                        brushRect: L(f, y, s),
                      });
                    }
                    function I(e, i) {
                      var n = [];
                      return (
                        (n[0] = i),
                        (n[1] = e),
                        isNaN(i) || isNaN(e) ? [NaN, NaN] : t.dataToPoint(n)
                      );
                    }
                    function M(e, t, i) {
                      var a = t.slice(),
                        o = t.slice();
                      (a[0] = (0, r.subPixelOptimize)(a[0] + n / 2, 1, !1)),
                        (o[0] = (0, r.subPixelOptimize)(o[0] - n / 2, 1, !0)),
                        i ? e.push(a, o) : e.push(o, a);
                    }
                    function L(e, t, i) {
                      var a = I(e, i),
                        o = I(t, i);
                      return (
                        (a[0] -= n / 2),
                        (o[0] -= n / 2),
                        { x: a[0], y: a[1], width: n, height: o[1] - a[1] }
                      );
                    }
                    function D(e) {
                      return (e[0] = (0, r.subPixelOptimize)(e[0], 1)), e;
                    }
                  },
            };
        },
      };
      function F(e) {
        e.registerChartView(P),
          e.registerSeriesModel(z),
          e.registerPreprocessor(O),
          e.registerVisual(x),
          e.registerLayout(W);
      }
    },
    14034: (e, t, i) => {
      i.d(t, { n: () => l });
      var n = i(5508),
        a = i(70441),
        o = i(20095),
        r = i(30130),
        l = (function () {
          function e() {}
          return (
            (e.prototype._hasEncodeRule = function (e) {
              var t = this.getEncode();
              return t && null != t.get(e);
            }),
            (e.prototype.getInitialData = function (e, t) {
              var i,
                l,
                s = t.getComponent("xAxis", this.get("xAxisIndex")),
                u = t.getComponent("yAxis", this.get("yAxisIndex")),
                d = s.get("type"),
                c = u.get("type");
              "category" === d
                ? ((e.layout = "horizontal"),
                  (i = s.getOrdinalMeta()),
                  (l = !this._hasEncodeRule("x")))
                : "category" === c
                ? ((e.layout = "vertical"),
                  (i = u.getOrdinalMeta()),
                  (l = !this._hasEncodeRule("y")))
                : (e.layout = e.layout || "horizontal");
              var h = ["x", "y"],
                p = "horizontal" === e.layout ? 0 : 1,
                g = (this._baseAxisDim = h[p]),
                f = h[1 - p],
                y = [s, u],
                m = y[p].get("type"),
                v = y[1 - p].get("type"),
                x = e.data;
              if (x && l) {
                var b = [];
                a.each(x, function (e, t) {
                  var i;
                  a.isArray(e)
                    ? ((i = e.slice()), e.unshift(t))
                    : a.isArray(e.value)
                    ? (((i = a.extend({}, e)).value = i.value.slice()),
                      e.value.unshift(t))
                    : (i = e),
                    b.push(i);
                }),
                  (e.data = b);
              }
              var S = this.defaultValueDimensions,
                _ = [
                  {
                    name: g,
                    type: (0, o.B)(m),
                    ordinalMeta: i,
                    otherDims: { tooltip: !1, itemName: 0 },
                    dimsDef: ["base"],
                  },
                  { name: f, type: (0, o.B)(v), dimsDef: S.slice() },
                ];
              return (0, n.A)(this, {
                coordDimensions: _,
                dimensionsCount: S.length + 1,
                encodeDefaulter: a.curry(r.OC, _, this),
              });
            }),
            (e.prototype.getBaseAxis = function () {
              var e = this._baseAxisDim;
              return this.ecModel.getComponent(
                e + "Axis",
                this.get(e + "AxisIndex")
              ).axis;
            }),
            e
          );
        })();
    },
    14933: (e, t, i) => {
      i.d(t, { a: () => b });
      var n = i(37292),
        a = i(72042),
        o = i(19084),
        r = i(70867),
        l = i(41406),
        s = i(62346);
      const u = (function () {
        function e() {
          (this.blurSize = 30),
            (this.pointSize = 20),
            (this.maxOpacity = 1),
            (this.minOpacity = 0),
            (this._gradientPixels = { inRange: null, outOfRange: null });
          var e = s.yh.createCanvas();
          this.canvas = e;
        }
        return (
          (e.prototype.update = function (e, t, i, n, a, o) {
            var r = this._getBrush(),
              l = this._getGradient(a, "inRange"),
              s = this._getGradient(a, "outOfRange"),
              u = this.pointSize + this.blurSize,
              d = this.canvas,
              c = d.getContext("2d"),
              h = e.length;
            (d.width = t), (d.height = i);
            for (var p = 0; p < h; ++p) {
              var g = e[p],
                f = g[0],
                y = g[1],
                m = n(g[2]);
              (c.globalAlpha = m), c.drawImage(r, f - u, y - u);
            }
            if (!d.width || !d.height) return d;
            for (
              var v = c.getImageData(0, 0, d.width, d.height),
                x = v.data,
                b = 0,
                S = x.length,
                _ = this.minOpacity,
                A = this.maxOpacity - _;
              b < S;

            ) {
              m = x[b + 3] / 256;
              var w = 4 * Math.floor(255 * m);
              if (m > 0) {
                var I = o(m) ? l : s;
                m > 0 && (m = m * A + _),
                  (x[b++] = I[w]),
                  (x[b++] = I[w + 1]),
                  (x[b++] = I[w + 2]),
                  (x[b++] = I[w + 3] * m * 256);
              } else b += 4;
            }
            return c.putImageData(v, 0, 0), d;
          }),
          (e.prototype._getBrush = function () {
            var e =
                this._brushCanvas || (this._brushCanvas = s.yh.createCanvas()),
              t = this.pointSize + this.blurSize,
              i = 2 * t;
            (e.width = i), (e.height = i);
            var n = e.getContext("2d");
            return (
              n.clearRect(0, 0, i, i),
              (n.shadowOffsetX = i),
              (n.shadowBlur = this.blurSize),
              (n.shadowColor = "#000"),
              n.beginPath(),
              n.arc(-t, t, this.pointSize, 0, 2 * Math.PI, !0),
              n.closePath(),
              n.fill(),
              e
            );
          }),
          (e.prototype._getGradient = function (e, t) {
            for (
              var i = this._gradientPixels,
                n = i[t] || (i[t] = new Uint8ClampedArray(1024)),
                a = [0, 0, 0, 0],
                o = 0,
                r = 0;
              r < 256;
              r++
            )
              e[t](r / 255, !0, a),
                (n[o++] = a[0]),
                (n[o++] = a[1]),
                (n[o++] = a[2]),
                (n[o++] = a[3]);
            return n;
          }),
          e
        );
      })();
      var d = i(70441),
        c = i(29379),
        h = i(41876),
        p = i(87689);
      function g(e) {
        var t = e.dimensions;
        return "lng" === t[0] && "lat" === t[1];
      }
      const f = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            var n;
            t.eachComponent("visualMap", function (t) {
              t.eachTargetSeries(function (i) {
                i === e && (n = t);
              });
            }),
              (this._progressiveEls = null),
              this.group.removeAll();
            var a = e.coordinateSystem;
            "cartesian2d" === a.type || "calendar" === a.type
              ? this._renderOnCartesianAndCalendar(e, i, 0, e.getData().count())
              : g(a) && this._renderOnGeo(a, e, n, i);
          }),
          (t.prototype.incrementalPrepareRender = function (e, t, i) {
            this.group.removeAll();
          }),
          (t.prototype.incrementalRender = function (e, t, i, n) {
            var a = t.coordinateSystem;
            a &&
              (g(a)
                ? this.render(t, i, n)
                : ((this._progressiveEls = []),
                  this._renderOnCartesianAndCalendar(
                    t,
                    n,
                    e.start,
                    e.end,
                    !0
                  )));
          }),
          (t.prototype.eachRendered = function (e) {
            a.traverseElements(this._progressiveEls || this.group, e);
          }),
          (t.prototype._renderOnCartesianAndCalendar = function (
            e,
            t,
            i,
            n,
            a
          ) {
            var r,
              s,
              u,
              d,
              c = e.coordinateSystem,
              g = (0, h.g)(c, "cartesian2d");
            if (g) {
              var f = c.getAxis("x"),
                y = c.getAxis("y");
              0,
                (r = f.getBandWidth() + 0.5),
                (s = y.getBandWidth() + 0.5),
                (u = f.scale.getExtent()),
                (d = y.scale.getExtent());
            }
            for (
              var m = this.group,
                v = e.getData(),
                x = e.getModel(["emphasis", "itemStyle"]).getItemStyle(),
                b = e.getModel(["blur", "itemStyle"]).getItemStyle(),
                S = e.getModel(["select", "itemStyle"]).getItemStyle(),
                _ = e.get(["itemStyle", "borderRadius"]),
                A = (0, p.lx)(e),
                w = e.getModel("emphasis"),
                I = w.get("focus"),
                M = w.get("blurScope"),
                L = w.get("disabled"),
                D = g
                  ? [
                      v.mapDimension("x"),
                      v.mapDimension("y"),
                      v.mapDimension("value"),
                    ]
                  : [v.mapDimension("time"), v.mapDimension("value")],
                C = i;
              C < n;
              C++
            ) {
              var N = void 0,
                T = v.getItemVisual(C, "style");
              if (g) {
                var P = v.get(D[0], C),
                  E = v.get(D[1], C);
                if (
                  isNaN(v.get(D[2], C)) ||
                  isNaN(P) ||
                  isNaN(E) ||
                  P < u[0] ||
                  P > u[1] ||
                  E < d[0] ||
                  E > d[1]
                )
                  continue;
                var V = c.dataToPoint([P, E]);
                N = new o.A({
                  shape: {
                    x: V[0] - r / 2,
                    y: V[1] - s / 2,
                    width: r,
                    height: s,
                  },
                  style: T,
                });
              } else {
                if (isNaN(v.get(D[1], C))) continue;
                N = new o.A({
                  z2: 1,
                  shape: c.dataToRect([v.get(D[0], C)]).contentShape,
                  style: T,
                });
              }
              if (v.hasItemOption) {
                var R = v.getItemModel(C),
                  z = R.getModel("emphasis");
                (x = z.getModel("itemStyle").getItemStyle()),
                  (b = R.getModel(["blur", "itemStyle"]).getItemStyle()),
                  (S = R.getModel(["select", "itemStyle"]).getItemStyle()),
                  (_ = R.get(["itemStyle", "borderRadius"])),
                  (I = z.get("focus")),
                  (M = z.get("blurScope")),
                  (L = z.get("disabled")),
                  (A = (0, p.lx)(R));
              }
              N.shape.r = _;
              var O = e.getRawValue(C),
                k = "-";
              O && null != O[2] && (k = O[2] + ""),
                (0, p.qM)(N, A, {
                  labelFetcher: e,
                  labelDataIndex: C,
                  defaultOpacity: T.opacity,
                  defaultText: k,
                }),
                (N.ensureState("emphasis").style = x),
                (N.ensureState("blur").style = b),
                (N.ensureState("select").style = S),
                (0, l.Lm)(N, I, M, L),
                (N.incremental = a),
                a && (N.states.emphasis.hoverLayer = !0),
                m.add(N),
                v.setItemGraphicEl(C, N),
                this._progressiveEls && this._progressiveEls.push(N);
            }
          }),
          (t.prototype._renderOnGeo = function (e, t, i, n) {
            var a = i.targetVisuals.inRange,
              o = i.targetVisuals.outOfRange,
              l = t.getData(),
              s = this._hmLayer || this._hmLayer || new u();
            (s.blurSize = t.get("blurSize")),
              (s.pointSize = t.get("pointSize")),
              (s.minOpacity = t.get("minOpacity")),
              (s.maxOpacity = t.get("maxOpacity"));
            var c = e.getViewRect().clone(),
              h = e.getRoamTransform();
            c.applyTransform(h);
            var p = Math.max(c.x, 0),
              g = Math.max(c.y, 0),
              f = Math.min(c.width + c.x, n.getWidth()),
              y = Math.min(c.height + c.y, n.getHeight()),
              m = f - p,
              v = y - g,
              x = [
                l.mapDimension("lng"),
                l.mapDimension("lat"),
                l.mapDimension("value"),
              ],
              b = l.mapArray(x, function (t, i, n) {
                var a = e.dataToPoint([t, i]);
                return (a[0] -= p), (a[1] -= g), a.push(n), a;
              }),
              S = i.getExtent(),
              _ =
                "visualMap.continuous" === i.type
                  ? (function (e, t) {
                      var i = e[1] - e[0];
                      return (
                        (t = [(t[0] - e[0]) / i, (t[1] - e[0]) / i]),
                        function (e) {
                          return e >= t[0] && e <= t[1];
                        }
                      );
                    })(S, i.option.range)
                  : (function (e, t, i) {
                      var n = e[1] - e[0],
                        a = (t = d.map(t, function (t) {
                          return {
                            interval: [
                              (t.interval[0] - e[0]) / n,
                              (t.interval[1] - e[0]) / n,
                            ],
                          };
                        })).length,
                        o = 0;
                      return function (e) {
                        var n;
                        for (n = o; n < a; n++)
                          if ((r = t[n].interval)[0] <= e && e <= r[1]) {
                            o = n;
                            break;
                          }
                        if (n === a)
                          for (n = o - 1; n >= 0; n--) {
                            var r;
                            if ((r = t[n].interval)[0] <= e && e <= r[1]) {
                              o = n;
                              break;
                            }
                          }
                        return n >= 0 && n < a && i[n];
                      };
                    })(S, i.getPieceList(), i.option.selected);
            s.update(
              b,
              m,
              v,
              a.color.getNormalizer(),
              {
                inRange: a.color.getColorMapper(),
                outOfRange: o.color.getColorMapper(),
              },
              _
            );
            var A = new r.Ay({
              style: { width: m, height: v, x: p, y: g, image: s.canvas },
              silent: !0,
            });
            this.group.add(A);
          }),
          (t.type = "heatmap"),
          t
        );
      })(c.A);
      var y = i(15230),
        m = i(62362),
        v = i(84114);
      const x = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getInitialData = function (e, t) {
            return (0, m.A)(null, this, { generateCoord: "value" });
          }),
          (t.prototype.preventIncremental = function () {
            var e = v.A.get(this.get("coordinateSystem"));
            if (e && e.dimensions)
              return "lng" === e.dimensions[0] && "lat" === e.dimensions[1];
          }),
          (t.type = "series.heatmap"),
          (t.dependencies = ["grid", "geo", "calendar"]),
          (t.defaultOption = {
            coordinateSystem: "cartesian2d",
            z: 2,
            geoIndex: 0,
            blurSize: 30,
            pointSize: 20,
            maxOpacity: 1,
            minOpacity: 0,
            select: { itemStyle: { borderColor: "#212121" } },
          }),
          t
        );
      })(y.A);
      function b(e) {
        e.registerChartView(f), e.registerSeriesModel(x);
      }
    },
    15724: (e, t, i) => {
      i.d(t, { a: () => z });
      var n = i(37292),
        a = i(70441),
        o = i(29379),
        r = i(22007),
        l = i(39253),
        s = i(94106),
        u = i(41406),
        d = i(87689),
        c = i(3569),
        h = i(65065),
        p = i(64675),
        g = i(59752),
        f = i(85941);
      const y = (function (e) {
        function t(t, i, n, a) {
          var o = e.call(this) || this;
          (o.z2 = 2),
            (o.textConfig = { inside: !0 }),
            ((0, c.z)(o).seriesIndex = i.seriesIndex);
          var l = new r.Ay({
            z2: 4,
            silent: t.getModel().get(["label", "silent"]),
          });
          return o.setTextContent(l), o.updateData(!0, t, i, n, a), o;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.updateData = function (e, t, i, n, o) {
            (this.node = t),
              (t.piece = this),
              (i = i || this._seriesModel),
              (n = n || this._ecModel);
            var r = this;
            (0, c.z)(r).dataIndex = t.dataIndex;
            var s = t.getModel(),
              d = s.getModel("emphasis"),
              g = t.getLayout(),
              f = a.extend({}, g);
            f.label = null;
            var y = t.getVisual("style");
            y.lineJoin = "bevel";
            var m = t.getVisual("decal");
            m && (y.decal = (0, p.w)(m, o));
            var v = (0, h.i)(s.getModel("itemStyle"), f, !0);
            a.extend(f, v),
              a.each(u.BV, function (e) {
                var t = r.ensureState(e),
                  i = s.getModel([e, "itemStyle"]);
                t.style = i.getItemStyle();
                var n = (0, h.i)(i, f);
                n && (t.shape = n);
              }),
              e
                ? (r.setShape(f),
                  (r.shape.r = g.r0),
                  l.LW(r, { shape: { r: g.r } }, i, t.dataIndex))
                : (l.oi(r, { shape: f }, i), (0, l.ap)(r)),
              r.useStyle(y),
              this._updateLabel(i);
            var x = s.getShallow("cursor");
            x && r.attr("cursor", x),
              (this._seriesModel = i || this._seriesModel),
              (this._ecModel = n || this._ecModel);
            var b = d.get("focus"),
              S =
                "relative" === b
                  ? a.concatArray(
                      t.getAncestorsIndices(),
                      t.getDescendantIndices()
                    )
                  : "ancestor" === b
                  ? t.getAncestorsIndices()
                  : "descendant" === b
                  ? t.getDescendantIndices()
                  : b;
            (0, u.Lm)(this, S, d.get("blurScope"), d.get("disabled"));
          }),
          (t.prototype._updateLabel = function (e) {
            var t = this,
              i = this.node.getModel(),
              n = i.getModel("label"),
              o = this.node.getLayout(),
              r = o.endAngle - o.startAngle,
              l = (o.startAngle + o.endAngle) / 2,
              s = Math.cos(l),
              c = Math.sin(l),
              h = this,
              p = h.getTextContent(),
              y = this.node.dataIndex,
              m = (n.get("minAngle") / 180) * Math.PI,
              v = n.get("show") && !(null != m && Math.abs(r) < m);
            function x(e, t) {
              var i = e.get(t);
              return null == i ? n.get(t) : i;
            }
            (p.ignore = !v),
              a.each(u.wV, function (n) {
                var u =
                    "normal" === n
                      ? i.getModel("label")
                      : i.getModel([n, "label"]),
                  m = "normal" === n,
                  v = m ? p : p.ensureState(n),
                  b = e.getFormattedLabel(y, n);
                m && (b = b || t.node.name),
                  (v.style = (0, d.VB)(u, {}, null, "normal" !== n, !0)),
                  b && (v.style.text = b);
                var S = u.get("show");
                null == S || m || (v.ignore = !S);
                var _,
                  A = x(u, "position"),
                  w = m ? h : h.states[n],
                  I = w.style.fill;
                w.textConfig = {
                  outsideFill: "inherit" === u.get("color") ? I : null,
                  inside: "outside" !== A,
                };
                var M = x(u, "distance") || 0,
                  L = x(u, "align"),
                  D = x(u, "rotate"),
                  C = 0.5 * Math.PI,
                  N = 1.5 * Math.PI,
                  T = (0, g.n)("tangential" === D ? Math.PI / 2 - l : l),
                  P = T > C && !(0, f.dh)(T - C) && T < N;
                "outside" === A
                  ? ((_ = o.r + M), (L = P ? "right" : "left"))
                  : L && "center" !== L
                  ? "left" === L
                    ? ((_ = o.r0 + M), (L = P ? "right" : "left"))
                    : "right" === L &&
                      ((_ = o.r - M), (L = P ? "left" : "right"))
                  : ((_ =
                      r === 2 * Math.PI && 0 === o.r0 ? 0 : (o.r + o.r0) / 2),
                    (L = "center")),
                  (v.style.align = L),
                  (v.style.verticalAlign = x(u, "verticalAlign") || "middle"),
                  (v.x = _ * s + o.cx),
                  (v.y = _ * c + o.cy);
                var E = 0;
                "radial" === D
                  ? (E = (0, g.n)(-l) + (P ? Math.PI : 0))
                  : "tangential" === D
                  ? (E = (0, g.n)(Math.PI / 2 - l) + (P ? Math.PI : 0))
                  : a.isNumber(D) && (E = (D * Math.PI) / 180),
                  (v.rotation = (0, g.n)(E));
              }),
              p.dirtyStyle();
          }),
          t
        );
      })(s.A);
      var m = i(69464),
        v = i(47423),
        x = "sunburstRootToNode",
        b = "sunburstHighlight",
        S = "sunburstUnhighlight";
      var _ = i(73411);
      const A = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i, n) {
            var o = this;
            (this.seriesModel = e), (this.api = i), (this.ecModel = t);
            var r = e.getData(),
              l = r.tree.root,
              s = e.getViewRoot(),
              u = this.group,
              d = e.get("renderLabelForZeroData"),
              c = [];
            s.eachNode(function (e) {
              c.push(e);
            });
            var h = this._oldChildren || [];
            !(function (n, o) {
              if (0 === n.length && 0 === o.length) return;
              function s(e) {
                return e.getId();
              }
              function c(a, s) {
                !(function (n, a) {
                  d || !n || n.getValue() || (n = null);
                  if (n !== l && a !== l)
                    if (a && a.piece)
                      n
                        ? (a.piece.updateData(!1, n, e, t, i),
                          r.setItemGraphicEl(n.dataIndex, a.piece))
                        : (function (e) {
                            if (!e) return;
                            e.piece && (u.remove(e.piece), (e.piece = null));
                          })(a);
                    else if (n) {
                      var o = new y(n, e, t, i);
                      u.add(o), r.setItemGraphicEl(n.dataIndex, o);
                    }
                })(null == a ? null : n[a], null == s ? null : o[s]);
              }
              new m.A(o, n, s, s)
                .add(c)
                .update(c)
                .remove(a.curry(c, null))
                .execute();
            })(c, h),
              (function (n, a) {
                a.depth > 0
                  ? (o.virtualPiece
                      ? o.virtualPiece.updateData(!1, n, e, t, i)
                      : ((o.virtualPiece = new y(n, e, t, i)),
                        u.add(o.virtualPiece)),
                    a.piece.off("click"),
                    o.virtualPiece.on("click", function (e) {
                      o._rootToNode(a.parentNode);
                    }))
                  : o.virtualPiece &&
                    (u.remove(o.virtualPiece), (o.virtualPiece = null));
              })(l, s),
              this._initEvents(),
              (this._oldChildren = c);
          }),
          (t.prototype._initEvents = function () {
            var e = this;
            this.group.off("click"),
              this.group.on("click", function (t) {
                var i = !1;
                e.seriesModel.getViewRoot().eachNode(function (n) {
                  if (!i && n.piece && n.piece === t.target) {
                    var a = n.getModel().get("nodeClick");
                    if ("rootToNode" === a) e._rootToNode(n);
                    else if ("link" === a) {
                      var o = n.getModel(),
                        r = o.get("link");
                      if (r) {
                        var l = o.get("target", !0) || "_blank";
                        (0, _.JW)(r, l);
                      }
                    }
                    i = !0;
                  }
                });
              });
          }),
          (t.prototype._rootToNode = function (e) {
            e !== this.seriesModel.getViewRoot() &&
              this.api.dispatchAction({
                type: x,
                from: this.uid,
                seriesId: this.seriesModel.id,
                targetNode: e,
              });
          }),
          (t.prototype.containPoint = function (e, t) {
            var i = t.getData().getItemLayout(0);
            if (i) {
              var n = e[0] - i.cx,
                a = e[1] - i.cy,
                o = Math.sqrt(n * n + a * a);
              return o <= i.r && o >= i.r0;
            }
          }),
          (t.type = "sunburst"),
          t
        );
      })(o.A);
      var w = i(15230),
        I = i(22824),
        M = i(19626),
        L = i(73685);
      function D(e) {
        var t = 0;
        a.each(e.children, function (e) {
          D(e);
          var i = e.value;
          a.isArray(i) && (i = i[0]), (t += i);
        });
        var i = e.value;
        a.isArray(i) && (i = i[0]),
          (null == i || isNaN(i)) && (i = t),
          i < 0 && (i = 0),
          a.isArray(e.value) ? (e.value[0] = i) : (e.value = i);
      }
      const C = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i.ignoreStyleOnData = !0), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getInitialData = function (e, t) {
            var i = { name: e.name, children: e.data };
            D(i);
            var n = (this._levelModels = a.map(
                e.levels || [],
                function (e) {
                  return new M.A(e, this, t);
                },
                this
              )),
              o = I.A.createTree(i, this, function (e) {
                e.wrapMethod("getItemModel", function (e, t) {
                  var i = o.getNodeByDataIndex(t),
                    a = n[i.depth];
                  return a && (e.parentModel = a), e;
                });
              });
            return o.data;
          }),
          (t.prototype.optionUpdated = function () {
            this.resetViewRoot();
          }),
          (t.prototype.getDataParams = function (t) {
            var i = e.prototype.getDataParams.apply(this, arguments),
              n = this.getData().tree.getNodeByDataIndex(t);
            return (i.treePathInfo = (0, v.ev)(n, this)), i;
          }),
          (t.prototype.getLevelModel = function (e) {
            return this._levelModels && this._levelModels[e.depth];
          }),
          (t.prototype.getViewRoot = function () {
            return this._viewRoot;
          }),
          (t.prototype.resetViewRoot = function (e) {
            e ? (this._viewRoot = e) : (e = this._viewRoot);
            var t = this.getRawData().tree.root;
            (e && (e === t || t.contains(e))) || (this._viewRoot = t);
          }),
          (t.prototype.enableAriaDecal = function () {
            (0, L.A)(this);
          }),
          (t.type = "series.sunburst"),
          (t.defaultOption = {
            z: 2,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            stillShowZeroSum: !0,
            nodeClick: "rootToNode",
            renderLabelForZeroData: !1,
            label: {
              rotate: "radial",
              show: !0,
              opacity: 1,
              align: "center",
              position: "inside",
              distance: 5,
              silent: !0,
            },
            itemStyle: {
              borderWidth: 1,
              borderColor: "white",
              borderType: "solid",
              shadowBlur: 0,
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1,
            },
            emphasis: { focus: "descendant" },
            blur: { itemStyle: { opacity: 0.2 }, label: { opacity: 0.1 } },
            animationType: "expansion",
            animationDuration: 1e3,
            animationDurationUpdate: 500,
            data: [],
            sort: "desc",
          }),
          t
        );
      })(w.A);
      var N = Math.PI / 180;
      function T(e, t, i) {
        t.eachSeriesByType(e, function (e) {
          var t = e.get("center"),
            n = e.get("radius");
          a.isArray(n) || (n = [0, n]), a.isArray(t) || (t = [t, t]);
          var o = i.getWidth(),
            r = i.getHeight(),
            l = Math.min(o, r),
            s = (0, f.lo)(t[0], o),
            u = (0, f.lo)(t[1], r),
            d = (0, f.lo)(n[0], l / 2),
            c = (0, f.lo)(n[1], l / 2),
            h = -e.get("startAngle") * N,
            p = e.get("minAngle") * N,
            g = e.getData().tree.root,
            y = e.getViewRoot(),
            m = y.depth,
            v = e.get("sort");
          null != v && P(y, v);
          var x = 0;
          a.each(y.children, function (e) {
            !isNaN(e.getValue()) && x++;
          });
          var b = y.getValue(),
            S = (Math.PI / (b || x)) * 2,
            _ = y.depth > 0,
            A = y.height - (_ ? -1 : 1),
            w = (c - d) / (A || 1),
            I = e.get("clockwise"),
            M = e.get("stillShowZeroSum"),
            L = I ? 1 : -1,
            D = function (t, i) {
              if (t) {
                var n = i;
                if (t !== g) {
                  var o = t.getValue(),
                    r = 0 === b && M ? S : o * S;
                  r < p && (r = p), (n = i + L * r);
                  var c = t.depth - m - (_ ? -1 : 1),
                    h = d + w * c,
                    y = d + w * (c + 1),
                    v = e.getLevelModel(t);
                  if (v) {
                    var x = v.get("r0", !0),
                      A = v.get("r", !0),
                      C = v.get("radius", !0);
                    null != C && ((x = C[0]), (A = C[1])),
                      null != x && (h = (0, f.lo)(x, l / 2)),
                      null != A && (y = (0, f.lo)(A, l / 2));
                  }
                  t.setLayout({
                    angle: r,
                    startAngle: i,
                    endAngle: n,
                    clockwise: I,
                    cx: s,
                    cy: u,
                    r0: h,
                    r: y,
                  });
                }
                if (t.children && t.children.length) {
                  var N = 0;
                  a.each(t.children, function (e) {
                    N += D(e, i + N);
                  });
                }
                return n - i;
              }
            };
          if (_) {
            var C = d,
              T = d + w,
              E = 2 * Math.PI;
            g.setLayout({
              angle: E,
              startAngle: h,
              endAngle: h + E,
              clockwise: I,
              cx: s,
              cy: u,
              r0: C,
              r: T,
            });
          }
          D(y, h);
        });
      }
      function P(e, t) {
        var i = e.children || [];
        (e.children = (function (e, t) {
          if (a.isFunction(t)) {
            var i = a.map(e, function (e, t) {
              var i = e.getValue();
              return {
                params: {
                  depth: e.depth,
                  height: e.height,
                  dataIndex: e.dataIndex,
                  getValue: function () {
                    return i;
                  },
                },
                index: t,
              };
            });
            return (
              i.sort(function (e, i) {
                return t(e.params, i.params);
              }),
              a.map(i, function (t) {
                return e[t.index];
              })
            );
          }
          var n = "asc" === t;
          return e.sort(function (e, t) {
            var i = (e.getValue() - t.getValue()) * (n ? 1 : -1);
            return 0 === i ? (e.dataIndex - t.dataIndex) * (n ? -1 : 1) : i;
          });
        })(i, t)),
          i.length &&
            a.each(e.children, function (e) {
              P(e, t);
            });
      }
      var E = i(32815);
      function V(e) {
        var t = {};
        e.eachSeriesByType("sunburst", function (e) {
          var i = e.getData(),
            n = i.tree;
          n.eachNode(function (o) {
            var r = o.getModel().getModel("itemStyle").getItemStyle();
            r.fill ||
              (r.fill = (function (e, i, n) {
                for (var o = e; o && o.depth > 1; ) o = o.parentNode;
                var r = i.getColorFromPalette(o.name || o.dataIndex + "", t);
                return (
                  e.depth > 1 &&
                    (0, a.isString)(r) &&
                    (r = (0, E.lift)(r, ((e.depth - 1) / (n - 1)) * 0.5)),
                  r
                );
              })(o, e, n.root.height));
            var l = i.ensureUniqueItemVisual(o.dataIndex, "style");
            (0, a.extend)(l, r);
          });
        });
      }
      var R = i(15534);
      function z(e) {
        e.registerChartView(A),
          e.registerSeriesModel(C),
          e.registerLayout((0, a.curry)(T, "sunburst")),
          e.registerProcessor((0, a.curry)(R.A, "sunburst")),
          e.registerVisual(V),
          (function (e) {
            e.registerAction(
              { type: x, update: "updateView" },
              function (e, t) {
                t.eachComponent(
                  { mainType: "series", subType: "sunburst", query: e },
                  function (t, i) {
                    var n = (0, v.mw)(e, [x], t);
                    if (n) {
                      var a = t.getViewRoot();
                      a &&
                        (e.direction = (0, v.x5)(a, n.node)
                          ? "rollUp"
                          : "drillDown"),
                        t.resetViewRoot(n.node);
                    }
                  }
                );
              }
            ),
              e.registerAction({ type: b, update: "none" }, function (e, t, i) {
                (e = (0, a.extend)({}, e)),
                  t.eachComponent(
                    { mainType: "series", subType: "sunburst", query: e },
                    function (t) {
                      var i = (0, v.mw)(e, [b], t);
                      i && (e.dataIndex = i.node.dataIndex);
                    }
                  ),
                  i.dispatchAction((0, a.extend)(e, { type: "highlight" }));
              }),
              e.registerAction(
                { type: S, update: "updateView" },
                function (e, t, i) {
                  (e = (0, a.extend)({}, e)),
                    i.dispatchAction((0, a.extend)(e, { type: "downplay" }));
                }
              );
          })(e);
      }
    },
    20106: (e, t, i) => {
      i.d(t, { a: () => ve });
      var n = i(47423),
        a = i(70441),
        o = ["treemapZoomToNode", "treemapRender", "treemapMove"];
      var r = i(37292),
        l = i(15230),
        s = i(22824),
        u = i(19626),
        d = i(34575),
        c = i(78754),
        h = i(73685),
        p = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), (i.preventUsingHoverLayer = !0), i;
          }
          return (
            (0, r.C6)(t, e),
            (t.prototype.getInitialData = function (e, t) {
              var i = { name: e.name, children: e.data };
              g(i);
              var n = e.levels || [],
                o = (this.designatedVisualItemStyle = {}),
                r = new u.A({ itemStyle: o }, this, t);
              n = e.levels = (function (e, t) {
                var i,
                  n,
                  o = (0, d.qB)(t.get("color")),
                  r = (0, d.qB)(t.get(["aria", "decal", "decals"]));
                if (!o) return;
                (e = e || []),
                  a.each(e, function (e) {
                    var t = new u.A(e),
                      a = t.get("color"),
                      o = t.get("decal");
                    (t.get(["itemStyle", "color"]) || (a && "none" !== a)) &&
                      (i = !0),
                      (t.get(["itemStyle", "decal"]) || (o && "none" !== o)) &&
                        (n = !0);
                  });
                var l = e[0] || (e[0] = {});
                i || (l.color = o.slice());
                !n && r && (l.decal = r.slice());
                return e;
              })(n, t);
              var l = a.map(
                  n || [],
                  function (e) {
                    return new u.A(e, r, t);
                  },
                  this
                ),
                c = s.A.createTree(i, this, function (e) {
                  e.wrapMethod("getItemModel", function (e, t) {
                    var i = c.getNodeByDataIndex(t),
                      n = i ? l[i.depth] : null;
                    return (e.parentModel = n || r), e;
                  });
                });
              return c.data;
            }),
            (t.prototype.optionUpdated = function () {
              this.resetViewRoot();
            }),
            (t.prototype.formatTooltip = function (e, t, i) {
              var n = this.getData(),
                a = this.getRawValue(e),
                o = n.getName(e);
              return (0, c.Qx)("nameValue", { name: o, value: a });
            }),
            (t.prototype.getDataParams = function (t) {
              var i = e.prototype.getDataParams.apply(this, arguments),
                a = this.getData().tree.getNodeByDataIndex(t);
              return (
                (i.treeAncestors = (0, n.ev)(a, this)),
                (i.treePathInfo = i.treeAncestors),
                i
              );
            }),
            (t.prototype.setLayoutInfo = function (e) {
              (this.layoutInfo = this.layoutInfo || {}),
                a.extend(this.layoutInfo, e);
            }),
            (t.prototype.mapIdToIndex = function (e) {
              var t = this._idIndexMap;
              t ||
                ((t = this._idIndexMap = a.createHashMap()),
                (this._idIndexMapCount = 0));
              var i = t.get(e);
              return null == i && t.set(e, (i = this._idIndexMapCount++)), i;
            }),
            (t.prototype.getViewRoot = function () {
              return this._viewRoot;
            }),
            (t.prototype.resetViewRoot = function (e) {
              e ? (this._viewRoot = e) : (e = this._viewRoot);
              var t = this.getRawData().tree.root;
              (e && (e === t || t.contains(e))) || (this._viewRoot = t);
            }),
            (t.prototype.enableAriaDecal = function () {
              (0, h.A)(this);
            }),
            (t.type = "series.treemap"),
            (t.layoutMode = "box"),
            (t.defaultOption = {
              progressive: 0,
              left: "center",
              top: "middle",
              width: "80%",
              height: "80%",
              sort: !0,
              clipWindow: "origin",
              squareRatio: 0.5 * (1 + Math.sqrt(5)),
              leafDepth: null,
              drillDownIcon: "\u25b6",
              zoomToNodeRatio: 0.1024,
              scaleLimit: null,
              roam: !0,
              nodeClick: "zoomToNode",
              animation: !0,
              animationDurationUpdate: 900,
              animationEasing: "quinticInOut",
              breadcrumb: {
                show: !0,
                height: 22,
                left: "center",
                top: "bottom",
                emptyItemWidth: 25,
                itemStyle: {
                  color: "rgba(0,0,0,0.7)",
                  textStyle: { color: "#fff" },
                },
                emphasis: { itemStyle: { color: "rgba(0,0,0,0.9)" } },
              },
              label: {
                show: !0,
                distance: 0,
                padding: 5,
                position: "inside",
                color: "#fff",
                overflow: "truncate",
              },
              upperLabel: {
                show: !1,
                position: [0, "50%"],
                height: 20,
                overflow: "truncate",
                verticalAlign: "middle",
              },
              itemStyle: {
                color: null,
                colorAlpha: null,
                colorSaturation: null,
                borderWidth: 0,
                gapWidth: 0,
                borderColor: "#fff",
                borderColorSaturation: null,
              },
              emphasis: {
                upperLabel: {
                  show: !0,
                  position: [0, "50%"],
                  overflow: "truncate",
                  verticalAlign: "middle",
                },
              },
              visualDimension: 0,
              visualMin: null,
              visualMax: null,
              color: [],
              colorAlpha: null,
              colorSaturation: null,
              colorMappingBy: "index",
              visibleMin: 10,
              childrenVisibleMin: null,
              levels: [],
            }),
            t
          );
        })(l.A);
      function g(e) {
        var t = 0;
        a.each(e.children, function (e) {
          g(e);
          var i = e.value;
          a.isArray(i) && (i = i[0]), (t += i);
        });
        var i = e.value;
        a.isArray(i) && (i = i[0]),
          (null == i || isNaN(i)) && (i = t),
          i < 0 && (i = 0),
          a.isArray(e.value) ? (e.value[0] = i) : (e.value = i);
      }
      const f = p;
      var y = i(47945),
        m = i(19084),
        v = i(3569),
        x = i(41406),
        b = i(69464),
        S = i(38794),
        _ = i(22007),
        A = i(67730),
        w = i(87689),
        I = (function () {
          function e(e) {
            (this.group = new y.A()), e.add(this.group);
          }
          return (
            (e.prototype.render = function (e, t, i, n) {
              var a = e.getModel("breadcrumb"),
                o = this.group;
              if ((o.removeAll(), a.get("show") && i)) {
                var r = a.getModel("itemStyle"),
                  l = a.getModel("emphasis"),
                  s = r.getModel("textStyle"),
                  u = l.getModel(["itemStyle", "textStyle"]),
                  d = {
                    pos: {
                      left: a.get("left"),
                      right: a.get("right"),
                      top: a.get("top"),
                      bottom: a.get("bottom"),
                    },
                    box: { width: t.getWidth(), height: t.getHeight() },
                    emptyItemWidth: a.get("emptyItemWidth"),
                    totalWidth: 0,
                    renderList: [],
                  };
                this._prepare(i, d, s),
                  this._renderContent(e, d, r, l, s, u, n),
                  A.m$(o, d.pos, d.box);
              }
            }),
            (e.prototype._prepare = function (e, t, i) {
              for (var n = e; n; n = n.parentNode) {
                var a = (0, d.vS)(n.getModel().get("name"), ""),
                  o = i.getTextRect(a),
                  r = Math.max(o.width + 16, t.emptyItemWidth);
                (t.totalWidth += r + 8),
                  t.renderList.push({ node: n, text: a, width: r });
              }
            }),
            (e.prototype._renderContent = function (e, t, i, n, o, r, l) {
              for (
                var s = 0,
                  u = t.emptyItemWidth,
                  d = e.get(["breadcrumb", "height"]),
                  c = A.HU(t.pos, t.box),
                  h = t.totalWidth,
                  p = t.renderList,
                  g = n.getModel("itemStyle").getItemStyle(),
                  f = p.length - 1;
                f >= 0;
                f--
              ) {
                var y = p[f],
                  m = y.node,
                  v = y.width,
                  b = y.text;
                h > c.width && ((h -= v - u), (v = u), (b = null));
                var I = new S.A({
                  shape: { points: M(s, 0, v, d, f === p.length - 1, 0 === f) },
                  style: (0, a.defaults)(i.getItemStyle(), {
                    lineJoin: "bevel",
                  }),
                  textContent: new _.Ay({ style: (0, w.VB)(o, { text: b }) }),
                  textConfig: { position: "inside" },
                  z2: 1e4 * x.CA,
                  onclick: (0, a.curry)(l, m),
                });
                (I.disableLabelAnimation = !0),
                  (I.getTextContent().ensureState("emphasis").style = (0, w.VB)(
                    r,
                    { text: b }
                  )),
                  (I.ensureState("emphasis").style = g),
                  (0, x.Lm)(
                    I,
                    n.get("focus"),
                    n.get("blurScope"),
                    n.get("disabled")
                  ),
                  this.group.add(I),
                  L(I, e, m),
                  (s += v + 8);
              }
            }),
            (e.prototype.remove = function () {
              this.group.removeAll();
            }),
            e
          );
        })();
      function M(e, t, i, n, a, o) {
        var r = [
          [a ? e : e - 5, t],
          [e + i, t],
          [e + i, t + n],
          [a ? e : e - 5, t + n],
        ];
        return (
          !o && r.splice(2, 0, [e + i + 5, t + n / 2]),
          !a && r.push([e, t + n / 2]),
          r
        );
      }
      function L(e, t, i) {
        (0, v.z)(e).eventData = {
          componentType: "series",
          componentSubType: "treemap",
          componentIndex: t.componentIndex,
          seriesIndex: t.seriesIndex,
          seriesName: t.name,
          seriesType: "treemap",
          selfType: "breadcrumb",
          nodeData: { dataIndex: i && i.dataIndex, name: i && i.name },
          treePathInfo: i && (0, n.ev)(i, t),
        };
      }
      const D = I;
      var C = i(17569),
        N = i(13171),
        T = i(44156),
        P = i(45984),
        E = i(76863),
        V = i(29379),
        R = i(44120),
        z = i(73411),
        O = y.A,
        k = m.A,
        G = "label",
        B = "upperLabel",
        W = 10 * x.CA,
        F = 2 * x.CA,
        Y = 3 * x.CA,
        H = (0, E.A)([
          ["fill", "color"],
          ["stroke", "strokeColor"],
          ["lineWidth", "strokeWidth"],
          ["shadowBlur"],
          ["shadowOffsetX"],
          ["shadowOffsetY"],
          ["shadowColor"],
        ]),
        X = function (e) {
          var t = H(e);
          return (t.stroke = t.fill = t.lineWidth = null), t;
        },
        U = (0, d.$r)(),
        Z = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (
              (i.type = t.type),
              (i._state = "ready"),
              (i._storage = { nodeGroup: [], background: [], content: [] }),
              i
            );
          }
          return (
            (0, r.C6)(t, e),
            (t.prototype.render = function (e, t, i, o) {
              var r = t.findComponents({
                mainType: "series",
                subType: "treemap",
                query: o,
              });
              if (!((0, a.indexOf)(r, e) < 0)) {
                (this.seriesModel = e), (this.api = i), (this.ecModel = t);
                var l = n.mw(o, ["treemapZoomToNode", "treemapRootToNode"], e),
                  s = o && o.type,
                  u = e.layoutInfo,
                  d = !this._oldTree,
                  c = this._storage,
                  h =
                    "treemapRootToNode" === s && l && c
                      ? {
                          rootNodeGroup: c.nodeGroup[l.node.getRawIndex()],
                          direction: o.direction,
                        }
                      : null,
                  p = this._giveContainerGroup(u),
                  g = e.get("animation"),
                  f = this._doRender(p, e, h);
                !g ||
                d ||
                (s && "treemapZoomToNode" !== s && "treemapRootToNode" !== s)
                  ? f.renderFinally()
                  : this._doAnimation(p, f, e, h),
                  this._resetController(i),
                  this._renderBreadcrumb(e, i, l);
              }
            }),
            (t.prototype._giveContainerGroup = function (e) {
              var t = this._containerGroup;
              return (
                t ||
                  ((t = this._containerGroup = new O()),
                  this._initEvents(t),
                  this.group.add(t)),
                (t.x = e.x),
                (t.y = e.y),
                t
              );
            }),
            (t.prototype._doRender = function (e, t, i) {
              var n = t.getData().tree,
                o = this._oldTree,
                r = { nodeGroup: [], background: [], content: [] },
                l = { nodeGroup: [], background: [], content: [] },
                s = this._storage,
                u = [];
              function c(e, n, o, c) {
                return (function (e, t, i, n, o, r, l, s, u, c) {
                  if (!l) return;
                  var h = l.getLayout(),
                    p = e.getData(),
                    g = l.getModel();
                  if (
                    (p.setItemGraphicEl(l.dataIndex, null), !h || !h.isInView)
                  )
                    return;
                  var f = h.width,
                    m = h.height,
                    b = h.borderWidth,
                    S = h.invisible,
                    _ = l.getRawIndex(),
                    A = s && s.getRawIndex(),
                    I = l.viewChildren,
                    M = h.upperHeight,
                    L = I && I.length,
                    D = g.getModel("itemStyle"),
                    C = g.getModel(["emphasis", "itemStyle"]),
                    N = g.getModel(["blur", "itemStyle"]),
                    T = g.getModel(["select", "itemStyle"]),
                    P = D.get("borderRadius") || 0,
                    E = ae("nodeGroup", O);
                  if (!E) return;
                  if (
                    (u.add(E),
                    (E.x = h.x || 0),
                    (E.y = h.y || 0),
                    E.markRedraw(),
                    (U(E).nodeWidth = f),
                    (U(E).nodeHeight = m),
                    h.isAboveViewRoot)
                  )
                    return E;
                  var V = ae("background", k, c, F);
                  V && $(E, V, L && h.upperLabelHeight);
                  var z = g.getModel("emphasis"),
                    Z = z.get("focus"),
                    q = z.get("blurScope"),
                    j = z.get("disabled"),
                    Q =
                      "ancestor" === Z
                        ? l.getAncestorsIndices()
                        : "descendant" === Z
                        ? l.getDescendantIndices()
                        : Z;
                  if (L)
                    (0, x.u6)(E) && (0, x.ix)(E, !1),
                      V &&
                        ((0, x.ix)(V, !j),
                        p.setItemGraphicEl(l.dataIndex, V),
                        (0, x.gR)(V, Q, q));
                  else {
                    var J = ae("content", k, c, Y);
                    J && ee(E, J),
                      (V.disableMorphing = !0),
                      V && (0, x.u6)(V) && (0, x.ix)(V, !1),
                      (0, x.ix)(E, !j),
                      p.setItemGraphicEl(l.dataIndex, E);
                    var K = g.getShallow("cursor");
                    K && J.attr("cursor", K), (0, x.gR)(E, Q, q);
                  }
                  return E;
                  function $(t, i, n) {
                    var a = (0, v.z)(i);
                    if (
                      ((a.dataIndex = l.dataIndex),
                      (a.seriesIndex = e.seriesIndex),
                      i.setShape({ x: 0, y: 0, width: f, height: m, r: P }),
                      S)
                    )
                      te(i);
                    else {
                      i.invisible = !1;
                      var o = l.getVisual("style"),
                        r = o.stroke,
                        s = X(D);
                      s.fill = r;
                      var u = H(C);
                      u.fill = C.get("borderColor");
                      var d = H(N);
                      d.fill = N.get("borderColor");
                      var c = H(T);
                      if (((c.fill = T.get("borderColor")), n)) {
                        var h = f - 2 * b;
                        ie(i, r, o.opacity, {
                          x: b,
                          y: 0,
                          width: h,
                          height: M,
                        });
                      } else i.removeTextContent();
                      i.setStyle(s),
                        (i.ensureState("emphasis").style = u),
                        (i.ensureState("blur").style = d),
                        (i.ensureState("select").style = c),
                        (0, x.DW)(i);
                    }
                    t.add(i);
                  }
                  function ee(t, i) {
                    var n = (0, v.z)(i);
                    (n.dataIndex = l.dataIndex),
                      (n.seriesIndex = e.seriesIndex);
                    var a = Math.max(f - 2 * b, 0),
                      o = Math.max(m - 2 * b, 0);
                    if (
                      ((i.culling = !0),
                      i.setShape({ x: b, y: b, width: a, height: o, r: P }),
                      S)
                    )
                      te(i);
                    else {
                      i.invisible = !1;
                      var r = l.getVisual("style"),
                        s = r.fill,
                        u = X(D);
                      (u.fill = s), (u.decal = r.decal);
                      var d = H(C),
                        c = H(N),
                        h = H(T);
                      ie(i, s, r.opacity, null),
                        i.setStyle(u),
                        (i.ensureState("emphasis").style = d),
                        (i.ensureState("blur").style = c),
                        (i.ensureState("select").style = h),
                        (0, x.DW)(i);
                    }
                    t.add(i);
                  }
                  function te(e) {
                    !e.invisible && r.push(e);
                  }
                  function ie(t, i, n, o) {
                    var r = g.getModel(o ? B : G),
                      s = (0, d.vS)(g.get("name"), null),
                      u = r.getShallow("show");
                    (0, w.qM)(t, (0, w.lx)(g, o ? B : G), {
                      defaultText: u ? s : null,
                      inheritColor: i,
                      defaultOpacity: n,
                      labelFetcher: e,
                      labelDataIndex: l.dataIndex,
                    });
                    var c = t.getTextContent();
                    if (c) {
                      var p = c.style,
                        f = (0, a.normalizeCssArray)(p.padding || 0);
                      o &&
                        (t.setTextConfig({ layoutRect: o }),
                        (c.disableLabelLayout = !0)),
                        (c.beforeUpdate = function () {
                          var e = Math.max(
                              (o ? o.width : t.shape.width) - f[1] - f[3],
                              0
                            ),
                            i = Math.max(
                              (o ? o.height : t.shape.height) - f[0] - f[2],
                              0
                            );
                          (p.width === e && p.height === i) ||
                            c.setStyle({ width: e, height: i });
                        }),
                        (p.truncateMinChar = 2),
                        (p.lineOverflow = "truncate"),
                        ne(p, o, h);
                      var y = c.getState("emphasis");
                      ne(y ? y.style : null, o, h);
                    }
                  }
                  function ne(t, i, n) {
                    var a = t ? t.text : null;
                    if (!i && n.isLeafRoot && null != a) {
                      var o = e.get("drillDownIcon", !0);
                      t.text = o ? o + " " + a : a;
                    }
                  }
                  function ae(e, n, a, r) {
                    var l = null != A && i[e][A],
                      s = o[e];
                    return (
                      l
                        ? ((i[e][A] = null), oe(s, l))
                        : S ||
                          ((l = new n()) instanceof R.Ay &&
                            (l.z2 = (function (e, t) {
                              return e * W + t;
                            })(a, r)),
                          re(s, l)),
                      (t[e][_] = l)
                    );
                  }
                  function oe(e, t) {
                    var i = (e[_] = {});
                    t instanceof O
                      ? ((i.oldX = t.x), (i.oldY = t.y))
                      : (i.oldShape = (0, a.extend)({}, t.shape));
                  }
                  function re(e, t) {
                    var i = (e[_] = {}),
                      a = l.parentNode,
                      r = t instanceof y.A;
                    if (a && (!n || "drillDown" === n.direction)) {
                      var s = 0,
                        u = 0,
                        d = o.background[a.getRawIndex()];
                      !n &&
                        d &&
                        d.oldShape &&
                        ((s = d.oldShape.width), (u = d.oldShape.height)),
                        r
                          ? ((i.oldX = 0), (i.oldY = u))
                          : (i.oldShape = { x: s, y: u, width: 0, height: 0 });
                    }
                    i.fadein = !r;
                  }
                })(t, l, s, i, r, u, e, n, o, c);
              }
              !(function e(t, i, n, o, r) {
                o
                  ? ((i = t),
                    (0, a.each)(t, function (e, t) {
                      !e.isRemoved() && s(t, t);
                    }))
                  : new b.A(i, t, l, l)
                      .add(s)
                      .update(s)
                      .remove((0, a.curry)(s, null))
                      .execute();
                function l(e) {
                  return e.getId();
                }
                function s(a, l) {
                  var s = null != a ? t[a] : null,
                    u = null != l ? i[l] : null,
                    d = c(s, u, n, r);
                  d &&
                    e(
                      (s && s.viewChildren) || [],
                      (u && u.viewChildren) || [],
                      d,
                      o,
                      r + 1
                    );
                }
              })(
                n.root ? [n.root] : [],
                o && o.root ? [o.root] : [],
                e,
                n === o || !o,
                0
              );
              var h = (function (e) {
                var t = { nodeGroup: [], background: [], content: [] };
                return (
                  e &&
                    (0, a.each)(e, function (e, i) {
                      var n = t[i];
                      (0, a.each)(e, function (e) {
                        e && (n.push(e), (U(e).willDelete = !0));
                      });
                    }),
                  t
                );
              })(s);
              if (
                ((this._oldTree = n), (this._storage = l), this._controllerHost)
              ) {
                var p = this.seriesModel.layoutInfo,
                  g = n.root.getLayout();
                g.width === p.width &&
                  g.height === p.height &&
                  (this._controllerHost.zoom = 1);
              }
              return {
                lastsForAnimation: r,
                willDeleteEls: h,
                renderFinally: function () {
                  (0, a.each)(h, function (e) {
                    (0, a.each)(e, function (e) {
                      e.parent && e.parent.remove(e);
                    });
                  }),
                    (0, a.each)(u, function (e) {
                      (e.invisible = !0), e.dirty();
                    });
                },
              };
            }),
            (t.prototype._doAnimation = function (e, t, i, n) {
              var o = i.get("animationDurationUpdate"),
                r = i.get("animationEasing"),
                l = ((0, a.isFunction)(o) ? 0 : o) || 0,
                s = ((0, a.isFunction)(r) ? null : r) || "cubicOut",
                u = P.x();
              (0, a.each)(t.willDeleteEls, function (e, t) {
                (0, a.each)(e, function (e, i) {
                  if (!e.invisible) {
                    var a,
                      o = e.parent,
                      r = U(o);
                    if (n && "drillDown" === n.direction)
                      a =
                        o === n.rootNodeGroup
                          ? {
                              shape: {
                                x: 0,
                                y: 0,
                                width: r.nodeWidth,
                                height: r.nodeHeight,
                              },
                              style: { opacity: 0 },
                            }
                          : { style: { opacity: 0 } };
                    else {
                      var d = 0,
                        c = 0;
                      r.willDelete ||
                        ((d = r.nodeWidth / 2), (c = r.nodeHeight / 2)),
                        (a =
                          "nodeGroup" === t
                            ? { x: d, y: c, style: { opacity: 0 } }
                            : {
                                shape: { x: d, y: c, width: 0, height: 0 },
                                style: { opacity: 0 },
                              });
                    }
                    a && u.add(e, a, l, 0, s);
                  }
                });
              }),
                (0, a.each)(
                  this._storage,
                  function (e, i) {
                    (0, a.each)(e, function (e, n) {
                      var o = t.lastsForAnimation[i][n],
                        r = {};
                      o &&
                        (e instanceof y.A
                          ? null != o.oldX &&
                            ((r.x = e.x),
                            (r.y = e.y),
                            (e.x = o.oldX),
                            (e.y = o.oldY))
                          : (o.oldShape &&
                              ((r.shape = (0, a.extend)({}, e.shape)),
                              e.setShape(o.oldShape)),
                            o.fadein
                              ? (e.setStyle("opacity", 0),
                                (r.style = { opacity: 1 }))
                              : 1 !== e.style.opacity &&
                                (r.style = { opacity: 1 })),
                        u.add(e, r, l, 0, s));
                    });
                  },
                  this
                ),
                (this._state = "animating"),
                u
                  .finished(
                    (0, a.bind)(function () {
                      (this._state = "ready"), t.renderFinally();
                    }, this)
                  )
                  .start();
            }),
            (t.prototype._resetController = function (e) {
              var t = this._controller,
                i = this._controllerHost;
              i ||
                ((this._controllerHost = { target: this.group }),
                (i = this._controllerHost)),
                t ||
                  ((t = this._controller = new C.A(e.getZr())).enable(
                    this.seriesModel.get("roam")
                  ),
                  (i.zoomLimit = this.seriesModel.get("scaleLimit")),
                  (i.zoom = this.seriesModel.get("zoom")),
                  t.on("pan", (0, a.bind)(this._onPan, this)),
                  t.on("zoom", (0, a.bind)(this._onZoom, this)));
              var n = new N.A(0, 0, e.getWidth(), e.getHeight());
              t.setPointerChecker(function (e, t, i) {
                return n.contain(t, i);
              });
            }),
            (t.prototype._clearController = function () {
              var e = this._controller;
              (this._controllerHost = null), e && (e.dispose(), (e = null));
            }),
            (t.prototype._onPan = function (e) {
              if (
                "animating" !== this._state &&
                (Math.abs(e.dx) > 3 || Math.abs(e.dy) > 3)
              ) {
                var t = this.seriesModel.getData().tree.root;
                if (!t) return;
                var i = t.getLayout();
                if (!i) return;
                this.api.dispatchAction({
                  type: "treemapMove",
                  from: this.uid,
                  seriesId: this.seriesModel.id,
                  rootRect: {
                    x: i.x + e.dx,
                    y: i.y + e.dy,
                    width: i.width,
                    height: i.height,
                  },
                });
              }
            }),
            (t.prototype._onZoom = function (e) {
              var t = e.originX,
                i = e.originY,
                n = e.scale;
              if ("animating" !== this._state) {
                var a = this.seriesModel.getData().tree.root;
                if (!a) return;
                var o = a.getLayout();
                if (!o) return;
                var r,
                  l = new N.A(o.x, o.y, o.width, o.height),
                  s = this._controllerHost;
                r = s.zoomLimit;
                var u = (s.zoom = s.zoom || 1);
                if (((u *= n), r)) {
                  var d = r.min || 0,
                    c = r.max || 1 / 0;
                  u = Math.max(Math.min(c, u), d);
                }
                var h = u / s.zoom;
                s.zoom = u;
                var p = this.seriesModel.layoutInfo;
                (t -= p.x), (i -= p.y);
                var g = T.create();
                T.translate(g, g, [-t, -i]),
                  T.scale(g, g, [h, h]),
                  T.translate(g, g, [t, i]),
                  l.applyTransform(g),
                  this.api.dispatchAction({
                    type: "treemapRender",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    rootRect: {
                      x: l.x,
                      y: l.y,
                      width: l.width,
                      height: l.height,
                    },
                  });
              }
            }),
            (t.prototype._initEvents = function (e) {
              var t = this;
              e.on(
                "click",
                function (e) {
                  if ("ready" === t._state) {
                    var i = t.seriesModel.get("nodeClick", !0);
                    if (i) {
                      var n = t.findTarget(e.offsetX, e.offsetY);
                      if (n) {
                        var a = n.node;
                        if (a.getLayout().isLeafRoot) t._rootToNode(n);
                        else if ("zoomToNode" === i) t._zoomToNode(n);
                        else if ("link" === i) {
                          var o = a.hostTree.data.getItemModel(a.dataIndex),
                            r = o.get("link", !0),
                            l = o.get("target", !0) || "blank";
                          r && (0, z.JW)(r, l);
                        }
                      }
                    }
                  }
                },
                this
              );
            }),
            (t.prototype._renderBreadcrumb = function (e, t, i) {
              var a = this;
              i ||
                (i =
                  null != e.get("leafDepth", !0)
                    ? { node: e.getViewRoot() }
                    : this.findTarget(t.getWidth() / 2, t.getHeight() / 2)) ||
                (i = { node: e.getData().tree.root }),
                (
                  this._breadcrumb || (this._breadcrumb = new D(this.group))
                ).render(e, t, i.node, function (t) {
                  "animating" !== a._state &&
                    (n.x5(e.getViewRoot(), t)
                      ? a._rootToNode({ node: t })
                      : a._zoomToNode({ node: t }));
                });
            }),
            (t.prototype.remove = function () {
              this._clearController(),
                this._containerGroup && this._containerGroup.removeAll(),
                (this._storage = {
                  nodeGroup: [],
                  background: [],
                  content: [],
                }),
                (this._state = "ready"),
                this._breadcrumb && this._breadcrumb.remove();
            }),
            (t.prototype.dispose = function () {
              this._clearController();
            }),
            (t.prototype._zoomToNode = function (e) {
              this.api.dispatchAction({
                type: "treemapZoomToNode",
                from: this.uid,
                seriesId: this.seriesModel.id,
                targetNode: e.node,
              });
            }),
            (t.prototype._rootToNode = function (e) {
              this.api.dispatchAction({
                type: "treemapRootToNode",
                from: this.uid,
                seriesId: this.seriesModel.id,
                targetNode: e.node,
              });
            }),
            (t.prototype.findTarget = function (e, t) {
              var i;
              return (
                this.seriesModel.getViewRoot().eachNode(
                  { attr: "viewChildren", order: "preorder" },
                  function (n) {
                    var a = this._storage.background[n.getRawIndex()];
                    if (a) {
                      var o = a.transformCoordToLocal(e, t),
                        r = a.shape;
                      if (
                        !(
                          r.x <= o[0] &&
                          o[0] <= r.x + r.width &&
                          r.y <= o[1] &&
                          o[1] <= r.y + r.height
                        )
                      )
                        return !1;
                      i = { node: n, offsetX: o[0], offsetY: o[1] };
                    }
                  },
                  this
                ),
                i
              );
            }),
            (t.type = "treemap"),
            t
          );
        })(V.A);
      const q = Z;
      var j = i(31016),
        Q = i(32815),
        J = (0, d.$r)();
      const K = {
        seriesType: "treemap",
        reset: function (e) {
          var t = e.getData().tree.root;
          t.isRemoved() || $(t, {}, e.getViewRoot().getAncestors(), e);
        },
      };
      function $(e, t, i, n) {
        var o = e.getModel(),
          r = e.getLayout(),
          l = e.hostTree.data;
        if (r && !r.invisible && r.isInView) {
          var s,
            u = o.getModel("itemStyle"),
            d = (function (e, t, i) {
              var n = (0, a.extend)({}, t),
                o = i.designatedVisualItemStyle;
              return (
                (0, a.each)(
                  ["color", "colorAlpha", "colorSaturation"],
                  function (i) {
                    o[i] = t[i];
                    var a = e.get(i);
                    (o[i] = null), null != a && (n[i] = a);
                  }
                ),
                n
              );
            })(u, t, n),
            c = l.ensureUniqueItemVisual(e.dataIndex, "style"),
            h = u.get("borderColor"),
            p = u.get("borderColorSaturation");
          null != p &&
            (h = (function (e, t) {
              return null != t ? (0, Q.modifyHSL)(t, null, null, e) : null;
            })(p, (s = ee(d)))),
            (c.stroke = h);
          var g = e.viewChildren;
          if (g && g.length) {
            var f = (function (e, t, i, n, a, o) {
              if (!o || !o.length) return;
              var r =
                ie(t, "color") ||
                (null != a.color &&
                  "none" !== a.color &&
                  (ie(t, "colorAlpha") || ie(t, "colorSaturation")));
              if (!r) return;
              var l = t.get("visualMin"),
                s = t.get("visualMax"),
                u = i.dataExtent.slice();
              null != l && l < u[0] && (u[0] = l),
                null != s && s > u[1] && (u[1] = s);
              var d = t.get("colorMappingBy"),
                c = { type: r.name, dataExtent: u, visual: r.range };
              "color" !== c.type || ("index" !== d && "id" !== d)
                ? (c.mappingMethod = "linear")
                : ((c.mappingMethod = "category"), (c.loop = !0));
              var h = new j.A(c);
              return (J(h).drColorMappingBy = d), h;
            })(0, o, r, 0, d, g);
            (0, a.each)(g, function (e, t) {
              if (e.depth >= i.length || e === i[e.depth]) {
                var r = (function (e, t, i, n, o, r) {
                  var l = (0, a.extend)({}, t);
                  if (o) {
                    var s = o.type,
                      u = "color" === s && J(o).drColorMappingBy,
                      d =
                        "index" === u
                          ? n
                          : "id" === u
                          ? r.mapIdToIndex(i.getId())
                          : i.getValue(e.get("visualDimension"));
                    l[s] = o.mapValueToVisual(d);
                  }
                  return l;
                })(o, d, e, t, f, n);
                $(e, r, i, n);
              }
            });
          } else (s = ee(d)), (c.fill = s);
        }
      }
      function ee(e) {
        var t = te(e, "color");
        if (t) {
          var i = te(e, "colorAlpha"),
            n = te(e, "colorSaturation");
          return (
            n && (t = (0, Q.modifyHSL)(t, null, null, n)),
            i && (t = (0, Q.modifyAlpha)(t, i)),
            t
          );
        }
      }
      function te(e, t) {
        var i = e[t];
        if (null != i && "none" !== i) return i;
      }
      function ie(e, t) {
        var i = e.get(t);
        return (0, a.isArray)(i) && i.length ? { name: t, range: i } : null;
      }
      var ne = i(85941),
        ae = Math.max,
        oe = Math.min,
        re = a.retrieve,
        le = a.each,
        se = ["itemStyle", "borderWidth"],
        ue = ["itemStyle", "gapWidth"],
        de = ["upperLabel", "show"],
        ce = ["upperLabel", "height"];
      const he = {
        seriesType: "treemap",
        reset: function (e, t, i, o) {
          var r = i.getWidth(),
            l = i.getHeight(),
            s = e.option,
            u = A.dV(e.getBoxLayoutParams(), {
              width: i.getWidth(),
              height: i.getHeight(),
            }),
            d = s.size || [],
            c = (0, ne.lo)(re(u.width, d[0]), r),
            h = (0, ne.lo)(re(u.height, d[1]), l),
            p = o && o.type,
            g = n.mw(o, ["treemapZoomToNode", "treemapRootToNode"], e),
            f =
              "treemapRender" === p || "treemapMove" === p ? o.rootRect : null,
            y = e.getViewRoot(),
            m = n.bl(y);
          if ("treemapMove" !== p) {
            var v =
                "treemapZoomToNode" === p
                  ? (function (e, t, i, n, a) {
                      var o,
                        r = (t || {}).node,
                        l = [n, a];
                      if (!r || r === i) return l;
                      var s = n * a,
                        u = s * e.option.zoomToNodeRatio;
                      for (; (o = r.parentNode); ) {
                        for (
                          var d = 0, c = o.children, h = 0, p = c.length;
                          h < p;
                          h++
                        )
                          d += c[h].getValue();
                        var g = r.getValue();
                        if (0 === g) return l;
                        u *= d / g;
                        var f = o.getModel(),
                          y = f.get(se);
                        (u +=
                          4 * y * y +
                          (3 * y + Math.max(y, me(f))) * Math.pow(u, 0.5)) >
                          ne.Is && (u = ne.Is),
                          (r = o);
                      }
                      u < s && (u = s);
                      var m = Math.pow(u / s, 0.5);
                      return [n * m, a * m];
                    })(e, g, y, c, h)
                  : f
                  ? [f.width, f.height]
                  : [c, h],
              x = s.sort;
            x && "asc" !== x && "desc" !== x && (x = "desc");
            var b = {
              squareRatio: s.squareRatio,
              sort: x,
              leafDepth: s.leafDepth,
            };
            y.hostTree.clearLayouts();
            var S = {
              x: 0,
              y: 0,
              width: v[0],
              height: v[1],
              area: v[0] * v[1],
            };
            y.setLayout(S),
              pe(y, b, !1, 0),
              (S = y.getLayout()),
              le(m, function (e, t) {
                var i = (m[t + 1] || y).getValue();
                e.setLayout(
                  a.extend(
                    { dataExtent: [i, i], borderWidth: 0, upperHeight: 0 },
                    S
                  )
                );
              });
          }
          var _ = e.getData().tree.root;
          _.setLayout(
            (function (e, t, i) {
              if (t) return { x: t.x, y: t.y };
              var n = { x: 0, y: 0 };
              if (!i) return n;
              var a = i.node,
                o = a.getLayout();
              if (!o) return n;
              var r = [o.width / 2, o.height / 2],
                l = a;
              for (; l; ) {
                var s = l.getLayout();
                (r[0] += s.x), (r[1] += s.y), (l = l.parentNode);
              }
              return { x: e.width / 2 - r[0], y: e.height / 2 - r[1] };
            })(u, f, g),
            !0
          ),
            e.setLayoutInfo(u),
            ye(_, new N.A(-u.x, -u.y, r, l), m, y, 0);
        },
      };
      function pe(e, t, i, n) {
        var o, r;
        if (!e.isRemoved()) {
          var l = e.getLayout();
          (o = l.width), (r = l.height);
          var s = e.getModel(),
            u = s.get(se),
            d = s.get(ue) / 2,
            c = me(s),
            h = Math.max(u, c),
            p = u - d,
            g = h - d;
          e.setLayout(
            { borderWidth: u, upperHeight: h, upperLabelHeight: c },
            !0
          );
          var f = (o = ae(o - 2 * p, 0)) * (r = ae(r - p - g, 0)),
            y = (function (e, t, i, n, o, r) {
              var l = e.children || [],
                s = n.sort;
              "asc" !== s && "desc" !== s && (s = null);
              var u = null != n.leafDepth && n.leafDepth <= r;
              if (o && !u) return (e.viewChildren = []);
              (l = a.filter(l, function (e) {
                return !e.isRemoved();
              })),
                (function (e, t) {
                  t &&
                    e.sort(function (e, i) {
                      var n =
                        "asc" === t
                          ? e.getValue() - i.getValue()
                          : i.getValue() - e.getValue();
                      return 0 === n
                        ? "asc" === t
                          ? e.dataIndex - i.dataIndex
                          : i.dataIndex - e.dataIndex
                        : n;
                    });
                })(l, s);
              var d = (function (e, t, i) {
                for (var n = 0, a = 0, o = t.length; a < o; a++)
                  n += t[a].getValue();
                var r,
                  l = e.get("visualDimension");
                t && t.length
                  ? "value" === l && i
                    ? ((r = [t[t.length - 1].getValue(), t[0].getValue()]),
                      "asc" === i && r.reverse())
                    : ((r = [1 / 0, -1 / 0]),
                      le(t, function (e) {
                        var t = e.getValue(l);
                        t < r[0] && (r[0] = t), t > r[1] && (r[1] = t);
                      }))
                  : (r = [NaN, NaN]);
                return { sum: n, dataExtent: r };
              })(t, l, s);
              if (0 === d.sum) return (e.viewChildren = []);
              if (
                ((d.sum = (function (e, t, i, n, a) {
                  if (!n) return i;
                  for (
                    var o = e.get("visibleMin"), r = a.length, l = r, s = r - 1;
                    s >= 0;
                    s--
                  ) {
                    var u = a["asc" === n ? r - s - 1 : s].getValue();
                    (u / i) * t < o && ((l = s), (i -= u));
                  }
                  return (
                    "asc" === n ? a.splice(0, r - l) : a.splice(l, r - l), i
                  );
                })(t, i, d.sum, s, l)),
                0 === d.sum)
              )
                return (e.viewChildren = []);
              for (var c = 0, h = l.length; c < h; c++) {
                var p = (l[c].getValue() / d.sum) * i;
                l[c].setLayout({ area: p });
              }
              u &&
                (l.length && e.setLayout({ isLeafRoot: !0 }, !0),
                (l.length = 0));
              return (
                (e.viewChildren = l),
                e.setLayout({ dataExtent: d.dataExtent }, !0),
                l
              );
            })(e, s, f, t, i, n);
          if (y.length) {
            var m = { x: p, y: g, width: o, height: r },
              v = oe(o, r),
              x = 1 / 0,
              b = [];
            b.area = 0;
            for (var S = 0, _ = y.length; S < _; ) {
              var A = y[S];
              b.push(A), (b.area += A.getLayout().area);
              var w = ge(b, v, t.squareRatio);
              w <= x
                ? (S++, (x = w))
                : ((b.area -= b.pop().getLayout().area),
                  fe(b, v, m, d, !1),
                  (v = oe(m.width, m.height)),
                  (b.length = b.area = 0),
                  (x = 1 / 0));
            }
            if ((b.length && fe(b, v, m, d, !0), !i)) {
              var I = s.get("childrenVisibleMin");
              null != I && f < I && (i = !0);
            }
            for (S = 0, _ = y.length; S < _; S++) pe(y[S], t, i, n + 1);
          }
        }
      }
      function ge(e, t, i) {
        for (var n = 0, a = 1 / 0, o = 0, r = void 0, l = e.length; o < l; o++)
          (r = e[o].getLayout().area) && (r < a && (a = r), r > n && (n = r));
        var s = e.area * e.area,
          u = t * t * i;
        return s ? ae((u * n) / s, s / (u * a)) : 1 / 0;
      }
      function fe(e, t, i, n, a) {
        var o = t === i.width ? 0 : 1,
          r = 1 - o,
          l = ["x", "y"],
          s = ["width", "height"],
          u = i[l[o]],
          d = t ? e.area / t : 0;
        (a || d > i[s[r]]) && (d = i[s[r]]);
        for (var c = 0, h = e.length; c < h; c++) {
          var p = e[c],
            g = {},
            f = d ? p.getLayout().area / d : 0,
            y = (g[s[r]] = ae(d - 2 * n, 0)),
            m = i[l[o]] + i[s[o]] - u,
            v = c === h - 1 || m < f ? m : f,
            x = (g[s[o]] = ae(v - 2 * n, 0));
          (g[l[r]] = i[l[r]] + oe(n, y / 2)),
            (g[l[o]] = u + oe(n, x / 2)),
            (u += v),
            p.setLayout(g, !0);
        }
        (i[l[r]] += d), (i[s[r]] -= d);
      }
      function ye(e, t, i, n, a) {
        var o = e.getLayout(),
          r = i[a],
          l = r && r === e;
        if (!((r && !l) || (a === i.length && e !== n))) {
          e.setLayout(
            {
              isInView: !0,
              invisible: !l && !t.intersect(o),
              isAboveViewRoot: l,
            },
            !0
          );
          var s = new N.A(t.x - o.x, t.y - o.y, t.width, t.height);
          le(e.viewChildren || [], function (e) {
            ye(e, s, i, n, a + 1);
          });
        }
      }
      function me(e) {
        return e.get(de) ? e.get(ce) : 0;
      }
      function ve(e) {
        e.registerSeriesModel(f),
          e.registerChartView(q),
          e.registerVisual(K),
          e.registerLayout(he),
          (function (e) {
            for (var t = 0; t < o.length; t++)
              e.registerAction({ type: o[t], update: "updateView" }, a.noop);
            e.registerAction(
              { type: "treemapRootToNode", update: "updateView" },
              function (e, t) {
                t.eachComponent(
                  { mainType: "series", subType: "treemap", query: e },
                  function (t, i) {
                    var a = n.mw(
                      e,
                      ["treemapZoomToNode", "treemapRootToNode"],
                      t
                    );
                    if (a) {
                      var o = t.getViewRoot();
                      o &&
                        (e.direction = n.x5(o, a.node)
                          ? "rollUp"
                          : "drillDown"),
                        t.resetViewRoot(a.node);
                    }
                  }
                );
              }
            );
          })(e);
      }
    },
    27387: (e, t, i) => {
      i.d(t, { N: () => h, z: () => g });
      var n = i(37292),
        a = i(70),
        o = i(86076),
        r = i(3686),
        l = Math.min,
        s = Math.max;
      function u(e, t) {
        return isNaN(e) || isNaN(t);
      }
      function d(e, t, i, n, a, o, r, d, c) {
        for (var h, p, g, f, y, m, v = i, x = 0; x < n; x++) {
          var b = t[2 * v],
            S = t[2 * v + 1];
          if (v >= a || v < 0) break;
          if (u(b, S)) {
            if (c) {
              v += o;
              continue;
            }
            break;
          }
          if (v === i) e[o > 0 ? "moveTo" : "lineTo"](b, S), (g = b), (f = S);
          else {
            var _ = b - h,
              A = S - p;
            if (_ * _ + A * A < 0.5) {
              v += o;
              continue;
            }
            if (r > 0) {
              for (
                var w = v + o, I = t[2 * w], M = t[2 * w + 1];
                I === b && M === S && x < n;

              )
                x++,
                  (v += o),
                  (I = t[2 * (w += o)]),
                  (M = t[2 * w + 1]),
                  (_ = (b = t[2 * v]) - h),
                  (A = (S = t[2 * v + 1]) - p);
              var L = x + 1;
              if (c)
                for (; u(I, M) && L < n; )
                  L++, (I = t[2 * (w += o)]), (M = t[2 * w + 1]);
              var D = 0.5,
                C = 0,
                N = 0,
                T = void 0,
                P = void 0;
              if (L >= n || u(I, M)) (y = b), (m = S);
              else {
                (C = I - h), (N = M - p);
                var E = b - h,
                  V = I - b,
                  R = S - p,
                  z = M - S,
                  O = void 0,
                  k = void 0;
                if ("x" === d) {
                  var G = C > 0 ? 1 : -1;
                  (y = b - G * (O = Math.abs(E)) * r),
                    (m = S),
                    (T = b + G * (k = Math.abs(V)) * r),
                    (P = S);
                } else if ("y" === d) {
                  var B = N > 0 ? 1 : -1;
                  (y = b),
                    (m = S - B * (O = Math.abs(R)) * r),
                    (T = b),
                    (P = S + B * (k = Math.abs(z)) * r);
                } else
                  (O = Math.sqrt(E * E + R * R)),
                    (y =
                      b -
                      C *
                        r *
                        (1 - (D = (k = Math.sqrt(V * V + z * z)) / (k + O)))),
                    (m = S - N * r * (1 - D)),
                    (P = S + N * r * D),
                    (T = l((T = b + C * r * D), s(I, b))),
                    (P = l(P, s(M, S))),
                    (T = s(T, l(I, b))),
                    (m = S - ((N = (P = s(P, l(M, S))) - S) * O) / k),
                    (y = l((y = b - ((C = T - b) * O) / k), s(h, b))),
                    (m = l(m, s(p, S))),
                    (T = b + ((C = b - (y = s(y, l(h, b)))) * k) / O),
                    (P = S + ((N = S - (m = s(m, l(p, S)))) * k) / O);
              }
              e.bezierCurveTo(g, f, y, m, b, S), (g = T), (f = P);
            } else e.lineTo(b, S);
          }
          (h = b), (p = S), (v += o);
        }
        return x;
      }
      var c = function () {
          (this.smooth = 0), (this.smoothConstraint = !0);
        },
        h = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i.type = "ec-polyline"), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getDefaultStyle = function () {
              return { stroke: "#000", fill: null };
            }),
            (t.prototype.getDefaultShape = function () {
              return new c();
            }),
            (t.prototype.buildPath = function (e, t) {
              var i = t.points,
                n = 0,
                a = i.length / 2;
              if (t.connectNulls) {
                for (; a > 0 && u(i[2 * a - 2], i[2 * a - 1]); a--);
                for (; n < a && u(i[2 * n], i[2 * n + 1]); n++);
              }
              for (; n < a; )
                n +=
                  d(
                    e,
                    i,
                    n,
                    a,
                    a,
                    1,
                    t.smooth,
                    t.smoothMonotone,
                    t.connectNulls
                  ) + 1;
            }),
            (t.prototype.getPointOn = function (e, t) {
              this.path ||
                (this.createPathProxy(), this.buildPath(this.path, this.shape));
              for (
                var i,
                  n,
                  a = this.path.data,
                  l = o.A.CMD,
                  s = "x" === t,
                  u = [],
                  d = 0;
                d < a.length;

              ) {
                var c = void 0,
                  h = void 0,
                  p = void 0,
                  g = void 0,
                  f = void 0,
                  y = void 0,
                  m = void 0;
                switch (a[d++]) {
                  case l.M:
                    (i = a[d++]), (n = a[d++]);
                    break;
                  case l.L:
                    if (
                      ((c = a[d++]),
                      (h = a[d++]),
                      (m = s ? (e - i) / (c - i) : (e - n) / (h - n)) <= 1 &&
                        m >= 0)
                    ) {
                      var v = s ? (h - n) * m + n : (c - i) * m + i;
                      return s ? [e, v] : [v, e];
                    }
                    (i = c), (n = h);
                    break;
                  case l.C:
                    (c = a[d++]),
                      (h = a[d++]),
                      (p = a[d++]),
                      (g = a[d++]),
                      (f = a[d++]),
                      (y = a[d++]);
                    var x = s
                      ? (0, r._E)(i, c, p, f, e, u)
                      : (0, r._E)(n, h, g, y, e, u);
                    if (x > 0)
                      for (var b = 0; b < x; b++) {
                        var S = u[b];
                        if (S <= 1 && S >= 0) {
                          v = s
                            ? (0, r.Yb)(n, h, g, y, S)
                            : (0, r.Yb)(i, c, p, f, S);
                          return s ? [e, v] : [v, e];
                        }
                      }
                    (i = f), (n = y);
                }
              }
            }),
            t
          );
        })(a.Ay),
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (0, n.C6)(t, e), t;
        })(c),
        g = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i.type = "ec-polygon"), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getDefaultShape = function () {
              return new p();
            }),
            (t.prototype.buildPath = function (e, t) {
              var i = t.points,
                n = t.stackedOnPoints,
                a = 0,
                o = i.length / 2,
                r = t.smoothMonotone;
              if (t.connectNulls) {
                for (; o > 0 && u(i[2 * o - 2], i[2 * o - 1]); o--);
                for (; a < o && u(i[2 * a], i[2 * a + 1]); a++);
              }
              for (; a < o; ) {
                var l = d(e, i, a, o, o, 1, t.smooth, r, t.connectNulls);
                d(
                  e,
                  n,
                  a + l - 1,
                  l,
                  o,
                  -1,
                  t.stackedOnSmooth,
                  r,
                  t.connectNulls
                ),
                  (a += l + 1),
                  e.closePath();
              }
            }),
            t
          );
        })(a.Ay);
    },
    34020: (e, t, i) => {
      i.d(t, { Ip: () => d, Mi: () => u, SM: () => s });
      var n = i(19084),
        a = i(39253),
        o = i(94106),
        r = i(85941),
        l = i(70441);
      function s(e, t, i, o, r) {
        var s = e.getArea(),
          u = s.x,
          d = s.y,
          c = s.width,
          h = s.height,
          p = i.get(["lineStyle", "width"]) || 0;
        (u -= p / 2),
          (d -= p / 2),
          (c += p),
          (h += p),
          (c = Math.ceil(c)),
          u !== Math.floor(u) && ((u = Math.floor(u)), c++);
        var g = new n.A({ shape: { x: u, y: d, width: c, height: h } });
        if (t) {
          var f = e.getBaseAxis(),
            y = f.isHorizontal(),
            m = f.inverse;
          y
            ? (m && (g.shape.x += c), (g.shape.width = 0))
            : (m || (g.shape.y += h), (g.shape.height = 0));
          var v = (0, l.isFunction)(r)
            ? function (e) {
                r(e, g);
              }
            : null;
          a.LW(
            g,
            { shape: { width: c, height: h, x: u, y: d } },
            i,
            null,
            o,
            v
          );
        }
        return g;
      }
      function u(e, t, i) {
        var n = e.getArea(),
          l = (0, r.LI)(n.r0, 1),
          s = (0, r.LI)(n.r, 1),
          u = new o.A({
            shape: {
              cx: (0, r.LI)(e.cx, 1),
              cy: (0, r.LI)(e.cy, 1),
              r0: l,
              r: s,
              startAngle: n.startAngle,
              endAngle: n.endAngle,
              clockwise: n.clockwise,
            },
          });
        t &&
          ("angle" === e.getBaseAxis().dim
            ? (u.shape.endAngle = n.startAngle)
            : (u.shape.r = l),
          a.LW(u, { shape: { endAngle: n.endAngle, r: s } }, i));
        return u;
      }
      function d(e, t, i, n, a) {
        return e
          ? "polar" === e.type
            ? u(e, t, i)
            : "cartesian2d" === e.type
            ? s(e, t, i, n, a)
            : null
          : null;
      }
    },
    37187: (e, t, i) => {
      i.d(t, { A: () => s });
      var n = i(37292),
        a = i(15230),
        o = i(62362),
        r = i(70441),
        l = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getInitialData = function (e, t) {
              return (0, o.A)(null, this, { useEncodeDefaulter: !0 });
            }),
            (t.prototype.getMarkerPosition = function (e, t, i) {
              var n = this.coordinateSystem;
              if (n && n.clampData) {
                var a = n.clampData(e),
                  o = n.dataToPoint(a);
                if (i)
                  (0, r.each)(n.getAxes(), function (e, i) {
                    if ("category" === e.type && null != t) {
                      var n = e.getTicksCoords(),
                        r = e.getTickModel().get("alignWithLabel"),
                        l = a[i],
                        s = "x1" === t[i] || "y1" === t[i];
                      if ((s && !r && (l += 1), n.length < 2)) return;
                      if (2 === n.length)
                        return void (o[i] = e.toGlobalCoord(
                          e.getExtent()[s ? 1 : 0]
                        ));
                      for (
                        var u = void 0, d = void 0, c = 1, h = 0;
                        h < n.length;
                        h++
                      ) {
                        var p = n[h].coord,
                          g =
                            h === n.length - 1
                              ? n[h - 1].tickValue + c
                              : n[h].tickValue;
                        if (g === l) {
                          d = p;
                          break;
                        }
                        if (g < l) u = p;
                        else if (null != u && g > l) {
                          d = (p + u) / 2;
                          break;
                        }
                        1 === h && (c = g - n[0].tickValue);
                      }
                      null == d &&
                        (u
                          ? u && (d = n[n.length - 1].coord)
                          : (d = n[0].coord)),
                        (o[i] = e.toGlobalCoord(d));
                    }
                  });
                else {
                  var l = this.getData(),
                    s = l.getLayout("offset"),
                    u = l.getLayout("size"),
                    d = n.getBaseAxis().isHorizontal() ? 0 : 1;
                  o[d] += s + u / 2;
                }
                return o;
              }
              return [NaN, NaN];
            }),
            (t.type = "series.__base_bar__"),
            (t.defaultOption = {
              z: 2,
              coordinateSystem: "cartesian2d",
              legendHoverLink: !0,
              barMinHeight: 0,
              barMinAngle: 0,
              large: !1,
              largeThreshold: 400,
              progressive: 3e3,
              progressiveChunkMode: "mod",
            }),
            t
          );
        })(a.A);
      a.A.registerClass(l);
      const s = l;
    },
    39076: (e, t, i) => {
      i.d(t, { a: () => M });
      var n = i(37292),
        a = i(70),
        o = function () {
          (this.angle = 0),
            (this.width = 10),
            (this.r = 10),
            (this.x = 0),
            (this.y = 0);
        };
      const r = (function (e) {
        function t(t) {
          var i = e.call(this, t) || this;
          return (i.type = "pointer"), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getDefaultShape = function () {
            return new o();
          }),
          (t.prototype.buildPath = function (e, t) {
            var i = Math.cos,
              n = Math.sin,
              a = t.r,
              o = t.width,
              r = t.angle,
              l = t.x - i(r) * o * (o >= a / 3 ? 1 : 2),
              s = t.y - n(r) * o * (o >= a / 3 ? 1 : 2);
            (r = t.angle - Math.PI / 2),
              e.moveTo(l, s),
              e.lineTo(t.x + i(r) * o, t.y + n(r) * o),
              e.lineTo(t.x + i(t.angle) * a, t.y + n(t.angle) * a),
              e.lineTo(t.x - i(r) * o, t.y - n(r) * o),
              e.lineTo(l, s);
          }),
          t
        );
      })(a.Ay);
      var l = i(94106),
        s = i(13124),
        u = i(22007),
        d = i(39253),
        c = i(47945),
        h = i(41406),
        p = i(87689),
        g = i(29379),
        f = i(85941),
        y = i(54143),
        m = i(11552),
        v = i(70867),
        x = i(70441),
        b = i(3569),
        S = i(86076);
      function _(e, t) {
        var i = null == e ? "" : e + "";
        return (
          t &&
            ((0, x.isString)(t)
              ? (i = t.replace("{value}", i))
              : (0, x.isFunction)(t) && (i = t(e))),
          i
        );
      }
      const A = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            this.group.removeAll();
            var n = e.get(["axisLine", "lineStyle", "color"]),
              a = (function (e, t) {
                var i = e.get("center"),
                  n = t.getWidth(),
                  a = t.getHeight(),
                  o = Math.min(n, a);
                return {
                  cx: (0, f.lo)(i[0], t.getWidth()),
                  cy: (0, f.lo)(i[1], t.getHeight()),
                  r: (0, f.lo)(e.get("radius"), o / 2),
                };
              })(e, i);
            this._renderMain(e, t, i, n, a), (this._data = e.getData());
          }),
          (t.prototype.dispose = function () {}),
          (t.prototype._renderMain = function (e, t, i, n, a) {
            var o = this.group,
              r = e.get("clockwise"),
              s = (-e.get("startAngle") / 180) * Math.PI,
              u = (-e.get("endAngle") / 180) * Math.PI,
              d = e.getModel("axisLine"),
              c = d.get("roundCap") ? y.A : l.A,
              h = d.get("show"),
              p = d.getModel("lineStyle"),
              g = p.get("width"),
              f = [s, u];
            (0, S.q)(f, !r);
            for (
              var m = (u = f[1]) - (s = f[0]), v = s, b = [], _ = 0;
              h && _ < n.length;
              _++
            ) {
              var A = new c({
                shape: {
                  startAngle: v,
                  endAngle: (u = s + m * Math.min(Math.max(n[_][0], 0), 1)),
                  cx: a.cx,
                  cy: a.cy,
                  clockwise: r,
                  r0: a.r - g,
                  r: a.r,
                },
                silent: !0,
              });
              A.setStyle({ fill: n[_][1] }),
                A.setStyle(p.getLineStyle(["color", "width"])),
                b.push(A),
                (v = u);
            }
            b.reverse(),
              (0, x.each)(b, function (e) {
                return o.add(e);
              });
            var w = function (e) {
              if (e <= 0) return n[0][1];
              var t;
              for (t = 0; t < n.length; t++)
                if (n[t][0] >= e && (0 === t ? 0 : n[t - 1][0]) < e)
                  return n[t][1];
              return n[t - 1][1];
            };
            this._renderTicks(e, t, i, w, a, s, u, r, g),
              this._renderTitleAndDetail(e, t, i, w, a),
              this._renderAnchor(e, a),
              this._renderPointer(e, t, i, w, a, s, u, r, g);
          }),
          (t.prototype._renderTicks = function (e, t, i, n, a, o, r, l, d) {
            for (
              var c,
                h,
                g = this.group,
                y = a.cx,
                m = a.cy,
                v = a.r,
                b = +e.get("min"),
                S = +e.get("max"),
                A = e.getModel("splitLine"),
                w = e.getModel("axisTick"),
                I = e.getModel("axisLabel"),
                M = e.get("splitNumber"),
                L = w.get("splitNumber"),
                D = (0, f.lo)(A.get("length"), v),
                C = (0, f.lo)(w.get("length"), v),
                N = o,
                T = (r - o) / M,
                P = T / L,
                E = A.getModel("lineStyle").getLineStyle(),
                V = w.getModel("lineStyle").getLineStyle(),
                R = A.get("distance"),
                z = 0;
              z <= M;
              z++
            ) {
              if (((c = Math.cos(N)), (h = Math.sin(N)), A.get("show"))) {
                var O = R ? R + d : d,
                  k = new s.A({
                    shape: {
                      x1: c * (v - O) + y,
                      y1: h * (v - O) + m,
                      x2: c * (v - D - O) + y,
                      y2: h * (v - D - O) + m,
                    },
                    style: E,
                    silent: !0,
                  });
                "auto" === E.stroke && k.setStyle({ stroke: n(z / M) }),
                  g.add(k);
              }
              if (I.get("show")) {
                O = I.get("distance") + R;
                var G = _((0, f.LI)((z / M) * (S - b) + b), I.get("formatter")),
                  B = n(z / M),
                  W = c * (v - D - O) + y,
                  F = h * (v - D - O) + m,
                  Y = I.get("rotate"),
                  H = 0;
                "radial" === Y
                  ? (H = -N + 2 * Math.PI) > Math.PI / 2 && (H += Math.PI)
                  : "tangential" === Y
                  ? (H = -N - Math.PI / 2)
                  : (0, x.isNumber)(Y) && (H = (Y * Math.PI) / 180),
                  0 === H
                    ? g.add(
                        new u.Ay({
                          style: (0, p.VB)(
                            I,
                            {
                              text: G,
                              x: W,
                              y: F,
                              verticalAlign:
                                h < -0.8
                                  ? "top"
                                  : h > 0.8
                                  ? "bottom"
                                  : "middle",
                              align:
                                c < -0.4
                                  ? "left"
                                  : c > 0.4
                                  ? "right"
                                  : "center",
                            },
                            { inheritColor: B }
                          ),
                          silent: !0,
                        })
                      )
                    : g.add(
                        new u.Ay({
                          style: (0, p.VB)(
                            I,
                            {
                              text: G,
                              x: W,
                              y: F,
                              verticalAlign: "middle",
                              align: "center",
                            },
                            { inheritColor: B }
                          ),
                          silent: !0,
                          originX: W,
                          originY: F,
                          rotation: H,
                        })
                      );
              }
              if (w.get("show") && z !== M) {
                O = (O = w.get("distance")) ? O + d : d;
                for (var X = 0; X <= L; X++) {
                  (c = Math.cos(N)), (h = Math.sin(N));
                  var U = new s.A({
                    shape: {
                      x1: c * (v - O) + y,
                      y1: h * (v - O) + m,
                      x2: c * (v - C - O) + y,
                      y2: h * (v - C - O) + m,
                    },
                    silent: !0,
                    style: V,
                  });
                  "auto" === V.stroke &&
                    U.setStyle({ stroke: n((z + X / L) / M) }),
                    g.add(U),
                    (N += P);
                }
                N -= P;
              } else N += T;
            }
          }),
          (t.prototype._renderPointer = function (e, t, i, n, a, o, s, u, c) {
            var p = this.group,
              g = this._data,
              S = this._progressEls,
              _ = [],
              A = e.get(["pointer", "show"]),
              w = e.getModel("progress"),
              I = w.get("show"),
              M = e.getData(),
              L = M.mapDimension("value"),
              D = +e.get("min"),
              C = +e.get("max"),
              N = [D, C],
              T = [o, s];
            function P(t, i) {
              var n,
                o = M.getItemModel(t).getModel("pointer"),
                l = (0, f.lo)(o.get("width"), a.r),
                s = (0, f.lo)(o.get("length"), a.r),
                u = e.get(["pointer", "icon"]),
                d = o.get("offsetCenter"),
                c = (0, f.lo)(d[0], a.r),
                h = (0, f.lo)(d[1], a.r),
                p = o.get("keepAspect");
              return (
                ((n = u
                  ? (0, m.v5)(u, c - l / 2, h - s, l, s, null, p)
                  : new r({
                      shape: {
                        angle: -Math.PI / 2,
                        width: l,
                        r: s,
                        x: c,
                        y: h,
                      },
                    })).rotation = -(i + Math.PI / 2)),
                (n.x = a.cx),
                (n.y = a.cy),
                n
              );
            }
            function E(e, t) {
              var i = w.get("roundCap") ? y.A : l.A,
                n = w.get("overlap"),
                r = n ? w.get("width") : c / M.count(),
                s = n ? a.r - r : a.r - (e + 1) * r,
                d = n ? a.r : a.r - e * r,
                h = new i({
                  shape: {
                    startAngle: o,
                    endAngle: t,
                    cx: a.cx,
                    cy: a.cy,
                    clockwise: u,
                    r0: s,
                    r: d,
                  },
                });
              return (
                n && (h.z2 = (0, f.Cb)(M.get(L, e), [D, C], [100, 0], !0)), h
              );
            }
            (I || A) &&
              (M.diff(g)
                .add(function (t) {
                  var i = M.get(L, t);
                  if (A) {
                    var n = P(t, o);
                    d.LW(
                      n,
                      {
                        rotation: -(
                          (isNaN(+i) ? T[0] : (0, f.Cb)(i, N, T, !0)) +
                          Math.PI / 2
                        ),
                      },
                      e
                    ),
                      p.add(n),
                      M.setItemGraphicEl(t, n);
                  }
                  if (I) {
                    var a = E(t, o),
                      r = w.get("clip");
                    d.LW(a, { shape: { endAngle: (0, f.Cb)(i, N, T, r) } }, e),
                      p.add(a),
                      (0, b.a)(e.seriesIndex, M.dataType, t, a),
                      (_[t] = a);
                  }
                })
                .update(function (t, i) {
                  var n = M.get(L, t);
                  if (A) {
                    var a = g.getItemGraphicEl(i),
                      r = a ? a.rotation : o,
                      l = P(t, r);
                    (l.rotation = r),
                      d.oi(
                        l,
                        {
                          rotation: -(
                            (isNaN(+n) ? T[0] : (0, f.Cb)(n, N, T, !0)) +
                            Math.PI / 2
                          ),
                        },
                        e
                      ),
                      p.add(l),
                      M.setItemGraphicEl(t, l);
                  }
                  if (I) {
                    var s = S[i],
                      u = E(t, s ? s.shape.endAngle : o),
                      c = w.get("clip");
                    d.oi(u, { shape: { endAngle: (0, f.Cb)(n, N, T, c) } }, e),
                      p.add(u),
                      (0, b.a)(e.seriesIndex, M.dataType, t, u),
                      (_[t] = u);
                  }
                })
                .execute(),
              M.each(function (e) {
                var t = M.getItemModel(e),
                  i = t.getModel("emphasis"),
                  a = i.get("focus"),
                  o = i.get("blurScope"),
                  r = i.get("disabled");
                if (A) {
                  var l = M.getItemGraphicEl(e),
                    s = M.getItemVisual(e, "style"),
                    u = s.fill;
                  if (l instanceof v.Ay) {
                    var d = l.style;
                    l.useStyle(
                      (0, x.extend)(
                        {
                          image: d.image,
                          x: d.x,
                          y: d.y,
                          width: d.width,
                          height: d.height,
                        },
                        s
                      )
                    );
                  } else l.useStyle(s), "pointer" !== l.type && l.setColor(u);
                  l.setStyle(
                    t.getModel(["pointer", "itemStyle"]).getItemStyle()
                  ),
                    "auto" === l.style.fill &&
                      l.setStyle(
                        "fill",
                        n((0, f.Cb)(M.get(L, e), N, [0, 1], !0))
                      ),
                    (l.z2EmphasisLift = 0),
                    (0, h.Mx)(l, t),
                    (0, h.Lm)(l, a, o, r);
                }
                if (I) {
                  var c = _[e];
                  c.useStyle(M.getItemVisual(e, "style")),
                    c.setStyle(
                      t.getModel(["progress", "itemStyle"]).getItemStyle()
                    ),
                    (c.z2EmphasisLift = 0),
                    (0, h.Mx)(c, t),
                    (0, h.Lm)(c, a, o, r);
                }
              }),
              (this._progressEls = _));
          }),
          (t.prototype._renderAnchor = function (e, t) {
            var i = e.getModel("anchor");
            if (i.get("show")) {
              var n = i.get("size"),
                a = i.get("icon"),
                o = i.get("offsetCenter"),
                r = i.get("keepAspect"),
                l = (0, m.v5)(
                  a,
                  t.cx - n / 2 + (0, f.lo)(o[0], t.r),
                  t.cy - n / 2 + (0, f.lo)(o[1], t.r),
                  n,
                  n,
                  null,
                  r
                );
              (l.z2 = i.get("showAbove") ? 1 : 0),
                l.setStyle(i.getModel("itemStyle").getItemStyle()),
                this.group.add(l);
            }
          }),
          (t.prototype._renderTitleAndDetail = function (e, t, i, n, a) {
            var o = this,
              r = e.getData(),
              l = r.mapDimension("value"),
              s = +e.get("min"),
              d = +e.get("max"),
              h = new c.A(),
              g = [],
              y = [],
              m = e.isAnimationEnabled(),
              v = e.get(["pointer", "showAbove"]);
            r
              .diff(this._data)
              .add(function (e) {
                (g[e] = new u.Ay({ silent: !0 })),
                  (y[e] = new u.Ay({ silent: !0 }));
              })
              .update(function (e, t) {
                (g[e] = o._titleEls[t]), (y[e] = o._detailEls[t]);
              })
              .execute(),
              r.each(function (t) {
                var i = r.getItemModel(t),
                  o = r.get(l, t),
                  u = new c.A(),
                  x = n((0, f.Cb)(o, [s, d], [0, 1], !0)),
                  b = i.getModel("title");
                if (b.get("show")) {
                  var S = b.get("offsetCenter"),
                    A = a.cx + (0, f.lo)(S[0], a.r),
                    w = a.cy + (0, f.lo)(S[1], a.r);
                  (P = g[t]).attr({
                    z2: v ? 0 : 2,
                    style: (0, p.VB)(
                      b,
                      {
                        x: A,
                        y: w,
                        text: r.getName(t),
                        align: "center",
                        verticalAlign: "middle",
                      },
                      { inheritColor: x }
                    ),
                  }),
                    u.add(P);
                }
                var I = i.getModel("detail");
                if (I.get("show")) {
                  var M = I.get("offsetCenter"),
                    L = a.cx + (0, f.lo)(M[0], a.r),
                    D = a.cy + (0, f.lo)(M[1], a.r),
                    C = (0, f.lo)(I.get("width"), a.r),
                    N = (0, f.lo)(I.get("height"), a.r),
                    T = e.get(["progress", "show"])
                      ? r.getItemVisual(t, "style").fill
                      : x,
                    P = y[t],
                    E = I.get("formatter");
                  P.attr({
                    z2: v ? 0 : 2,
                    style: (0, p.VB)(
                      I,
                      {
                        x: L,
                        y: D,
                        text: _(o, E),
                        width: isNaN(C) ? null : C,
                        height: isNaN(N) ? null : N,
                        align: "center",
                        verticalAlign: "middle",
                      },
                      { inheritColor: T }
                    ),
                  }),
                    (0, p.Oh)(P, { normal: I }, o, function (e) {
                      return _(e, E);
                    }),
                    m &&
                      (0, p.xb)(P, t, r, e, {
                        getFormattedLabel: function (e, t, i, n, a, r) {
                          return _(r ? r.interpolatedValue : o, E);
                        },
                      }),
                    u.add(P);
                }
                h.add(u);
              }),
              this.group.add(h),
              (this._titleEls = g),
              (this._detailEls = y);
          }),
          (t.type = "gauge"),
          t
        );
      })(g.A);
      var w = i(5508);
      const I = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i.visualStyleAccessPath = "itemStyle"), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getInitialData = function (e, t) {
            return (0, w.A)(this, ["value"]);
          }),
          (t.type = "series.gauge"),
          (t.defaultOption = {
            z: 2,
            colorBy: "data",
            center: ["50%", "50%"],
            legendHoverLink: !0,
            radius: "75%",
            startAngle: 225,
            endAngle: -45,
            clockwise: !0,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
              show: !0,
              roundCap: !1,
              lineStyle: { color: [[1, "#E6EBF8"]], width: 10 },
            },
            progress: {
              show: !1,
              overlap: !0,
              width: 10,
              roundCap: !1,
              clip: !0,
            },
            splitLine: {
              show: !0,
              length: 10,
              distance: 10,
              lineStyle: { color: "#63677A", width: 3, type: "solid" },
            },
            axisTick: {
              show: !0,
              splitNumber: 5,
              length: 6,
              distance: 10,
              lineStyle: { color: "#63677A", width: 1, type: "solid" },
            },
            axisLabel: {
              show: !0,
              distance: 15,
              color: "#464646",
              fontSize: 12,
              rotate: 0,
            },
            pointer: {
              icon: null,
              offsetCenter: [0, 0],
              show: !0,
              showAbove: !0,
              length: "60%",
              width: 6,
              keepAspect: !1,
            },
            anchor: {
              show: !1,
              showAbove: !1,
              size: 6,
              icon: "circle",
              offsetCenter: [0, 0],
              keepAspect: !1,
              itemStyle: {
                color: "#fff",
                borderWidth: 0,
                borderColor: "#5470c6",
              },
            },
            title: {
              show: !0,
              offsetCenter: [0, "20%"],
              color: "#464646",
              fontSize: 16,
              valueAnimation: !1,
            },
            detail: {
              show: !0,
              backgroundColor: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "#ccc",
              width: 100,
              height: null,
              padding: [5, 10],
              offsetCenter: [0, "40%"],
              color: "#464646",
              fontSize: 30,
              fontWeight: "bold",
              lineHeight: 30,
              valueAnimation: !1,
            },
          }),
          t
        );
      })(i(15230).A);
      function M(e) {
        e.registerChartView(A), e.registerSeriesModel(I);
      }
    },
    40177: (e, t, i) => {
      i.d(t, { a: () => ce });
      var n = i(37292),
        a = i(62362),
        o = i(34575),
        r = i(15230),
        l = { color: "fill", borderColor: "stroke" },
        s = {
          symbol: 1,
          symbolSize: 1,
          symbolKeepAspect: 1,
          legendIcon: 1,
          visualMeta: 1,
          liftZ: 1,
          decal: 1,
        },
        u = (0, o.$r)();
      const d = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.optionUpdated = function () {
            (this.currentZLevel = this.get("zlevel", !0)),
              (this.currentZ = this.get("z", !0));
          }),
          (t.prototype.getInitialData = function (e, t) {
            return (0, a.A)(null, this);
          }),
          (t.prototype.getDataParams = function (t, i, n) {
            var a = e.prototype.getDataParams.call(this, t, i);
            return n && (a.info = u(n).info), a;
          }),
          (t.type = "series.custom"),
          (t.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar"]),
          (t.defaultOption = {
            coordinateSystem: "cartesian2d",
            z: 2,
            legendHoverLink: !0,
            clip: !1,
          }),
          t
        );
      })(r.A);
      var c = i(70441),
        h = i(70),
        p = i(72042),
        g = i(70867),
        f = i(22007),
        y = i(47945),
        m = i(41406),
        v = i(87689),
        x = i(3629),
        b = i(89777),
        S = i(69464),
        _ = i(29379),
        A = i(34020),
        w = i(64014),
        I = i(53625),
        M = i(97272),
        L = i(17760),
        D = i(95366),
        C = i(44120),
        N = i(41361),
        T = i(88),
        P = i(64675),
        E = i(54818),
        V = i(73639),
        R = "emphasis",
        z = "normal",
        O = "blur",
        k = "select",
        G = [z, R, O, k],
        B = {
          normal: ["itemStyle"],
          emphasis: [R, "itemStyle"],
          blur: [O, "itemStyle"],
          select: [k, "itemStyle"],
        },
        W = {
          normal: ["label"],
          emphasis: [R, "label"],
          blur: [O, "label"],
          select: [k, "label"],
        },
        F = ["x", "y"],
        Y = { normal: {}, emphasis: {}, blur: {}, select: {} },
        H = {
          cartesian2d: w.A,
          geo: I.A,
          single: M.A,
          polar: L.A,
          calendar: D.A,
        };
      function X(e) {
        return e instanceof h.Ay;
      }
      function U(e) {
        return e instanceof C.Ay;
      }
      const Z = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i, n) {
            this._progressiveEls = null;
            var a = this._data,
              o = e.getData(),
              r = this.group,
              l = K(e, o, t, i);
            a || r.removeAll(),
              o
                .diff(a)
                .add(function (t) {
                  ee(i, null, t, l(t, n), e, r, o);
                })
                .remove(function (t) {
                  var i = a.getItemGraphicEl(t);
                  i && (0, E.h8)(i, u(i).option, e);
                })
                .update(function (t, s) {
                  var u = a.getItemGraphicEl(s);
                  ee(i, u, t, l(t, n), e, r, o);
                })
                .execute();
            var s = e.get("clip", !0)
              ? (0, A.Ip)(e.coordinateSystem, !1, e)
              : null;
            s ? r.setClipPath(s) : r.removeClipPath(), (this._data = o);
          }),
          (t.prototype.incrementalPrepareRender = function (e, t, i) {
            this.group.removeAll(), (this._data = null);
          }),
          (t.prototype.incrementalRender = function (e, t, i, n, a) {
            var o = t.getData(),
              r = K(t, o, i, n),
              l = (this._progressiveEls = []);
            function s(e) {
              e.isGroup ||
                ((e.incremental = !0),
                (e.ensureState("emphasis").hoverLayer = !0));
            }
            for (var u = e.start; u < e.end; u++) {
              var d = ee(null, null, u, r(u, a), t, this.group, o);
              d && (d.traverse(s), l.push(d));
            }
          }),
          (t.prototype.eachRendered = function (e) {
            p.traverseElements(this._progressiveEls || this.group, e);
          }),
          (t.prototype.filterForExposedEvent = function (e, t, i, n) {
            var a = t.element;
            if (null == a || i.name === a) return !0;
            for (; (i = i.__hostTarget || i.parent) && i !== this.group; )
              if (i.name === a) return !0;
            return !1;
          }),
          (t.type = "custom"),
          t
        );
      })(_.A);
      function q(e) {
        var t,
          i = e.type;
        if ("path" === i) {
          var n = e.shape,
            a =
              null != n.width && null != n.height
                ? { x: n.x || 0, y: n.y || 0, width: n.width, height: n.height }
                : null,
            o = de(n);
          (t = p.makePath(o, null, a, n.layout || "center")),
            (u(t).customPathData = o);
        } else if ("image" === i)
          (t = new g.Ay({})), (u(t).customImagePath = e.style.image);
        else if ("text" === i) t = new f.Ay({});
        else if ("group" === i) t = new y.A();
        else {
          if ("compoundPath" === i)
            throw new Error('"compoundPath" is not supported yet.');
          var r = p.getShapeClass(i);
          if (!r) {
            0, (0, T.$8)("");
          }
          t = new r();
        }
        return (
          (u(t).customGraphicType = i),
          (t.name = e.name),
          (t.z2EmphasisLift = 1),
          (t.z2SelectLift = 1),
          t
        );
      }
      function j(e, t, i, n, a, o, r) {
        (0, V.$)(t);
        var l = a && a.normal.cfg;
        l && t.setTextConfig(l),
          n && null == n.transition && (n.transition = F);
        var s = n && n.style;
        if (s) {
          if ("text" === t.type) {
            var u = s;
            (0, c.hasOwn)(u, "textFill") && (u.fill = u.textFill),
              (0, c.hasOwn)(u, "textStroke") && (u.stroke = u.textStroke);
          }
          var d = void 0,
            h = X(t) ? s.decal : null;
          e && h && ((h.dirty = !0), (d = (0, P.w)(h, e))),
            (s.__decalPattern = d);
        }
        U(t) && s && (d = s.__decalPattern) && (s.decal = d);
        (0, E.rh)(t, n, o, { dataIndex: i, isInit: r, clearStyle: !0 }),
          (0, V.L)(t, n.keyframeAnimation, o);
      }
      function Q(e, t, i, n, a) {
        var o = t.isGroup ? null : t,
          r = a && a[e].cfg;
        if (o) {
          var l = o.ensureState(e);
          if (!1 === n) {
            var s = o.getState(e);
            s && (s.style = null);
          } else l.style = n || null;
          r && (l.textConfig = r), (0, m.DW)(o);
        }
      }
      function J(e, t, i) {
        var n = i === z,
          a = n ? t : ae(t, i),
          o = a ? a.z2 : null;
        null != o && ((n ? e : e.ensureState(i)).z2 = o || 0);
      }
      function K(e, t, i, n) {
        var a = e.get("renderItem"),
          o = e.coordinateSystem,
          r = {};
        o && (r = o.prepareCustoms ? o.prepareCustoms(o) : H[o.type](o));
        for (
          var u,
            d,
            h = (0, c.defaults)(
              {
                getWidth: n.getWidth,
                getHeight: n.getHeight,
                getZr: n.getZr,
                getDevicePixelRatio: n.getDevicePixelRatio,
                value: function (e, i) {
                  return (
                    null == i && (i = u),
                    t.getStore().get(t.getDimensionIndex(e || 0), i)
                  );
                },
                style: function (i, n) {
                  0;
                  null == n && (n = u);
                  var a = t.getItemVisual(n, "style"),
                    o = a && a.fill,
                    r = a && a.opacity,
                    l = w(n, z).getItemStyle();
                  null != o && (l.fill = o), null != r && (l.opacity = r);
                  var s = { inheritColor: (0, c.isString)(o) ? o : "#000" },
                    d = I(n, z),
                    h = v.VB(d, null, s, !1, !0);
                  h.text = d.getShallow("show")
                    ? (0, c.retrieve2)(
                        e.getFormattedLabel(n, z),
                        (0, x.i)(t, n)
                      )
                    : null;
                  var p = v.sD(d, s, !1);
                  return (
                    L(i, l),
                    (l = (0, N.Fs)(l, h, p)),
                    i && M(l, i),
                    (l.legacy = !0),
                    l
                  );
                },
                ordinalRawValue: function (e, i) {
                  null == i && (i = u), (e = e || 0);
                  var n = t.getDimensionInfo(e);
                  if (!n) {
                    var a = t.getDimensionIndex(e);
                    return a >= 0 ? t.getStore().get(a, i) : void 0;
                  }
                  var o = t.get(n.name, i),
                    r = n && n.ordinalMeta;
                  return r ? r.categories[o] : o;
                },
                styleEmphasis: function (i, n) {
                  0;
                  null == n && (n = u);
                  var a = w(n, R).getItemStyle(),
                    o = I(n, R),
                    r = v.VB(o, null, null, !0, !0);
                  r.text = o.getShallow("show")
                    ? (0, c.retrieve3)(
                        e.getFormattedLabel(n, R),
                        e.getFormattedLabel(n, z),
                        (0, x.i)(t, n)
                      )
                    : null;
                  var l = v.sD(o, null, !0);
                  return (
                    L(i, a),
                    (a = (0, N.Fs)(a, r, l)),
                    i && M(a, i),
                    (a.legacy = !0),
                    a
                  );
                },
                visual: function (e, i) {
                  if ((null == i && (i = u), (0, c.hasOwn)(l, e))) {
                    var n = t.getItemVisual(i, "style");
                    return n ? n[l[e]] : null;
                  }
                  if ((0, c.hasOwn)(s, e)) return t.getItemVisual(i, e);
                },
                barLayout: function (e) {
                  if ("cartesian2d" === o.type) {
                    var t = o.getBaseAxis();
                    return (0, b.DL)((0, c.defaults)({ axis: t }, e));
                  }
                },
                currentSeriesIndices: function () {
                  return i.getCurrentSeriesIndices();
                },
                font: function (e) {
                  return v.c8(e, i);
                },
              },
              r.api || {}
            ),
            p = {
              context: {},
              seriesId: e.id,
              seriesName: e.name,
              seriesIndex: e.seriesIndex,
              coordSys: r.coordSys,
              dataInsideLength: t.count(),
              encode: $(e.getData()),
            },
            g = {},
            f = {},
            y = {},
            m = {},
            S = 0;
          S < G.length;
          S++
        ) {
          var _ = G[S];
          (y[_] = e.getModel(B[_])), (m[_] = e.getModel(W[_]));
        }
        function A(e) {
          return e === u ? d || (d = t.getItemModel(e)) : t.getItemModel(e);
        }
        function w(e, i) {
          return t.hasItemOption
            ? e === u
              ? g[i] || (g[i] = A(e).getModel(B[i]))
              : A(e).getModel(B[i])
            : y[i];
        }
        function I(e, i) {
          return t.hasItemOption
            ? e === u
              ? f[i] || (f[i] = A(e).getModel(W[i]))
              : A(e).getModel(W[i])
            : m[i];
        }
        return function (e, i) {
          return (
            (u = e),
            (d = null),
            (g = {}),
            (f = {}),
            a &&
              a(
                (0, c.defaults)(
                  {
                    dataIndexInside: e,
                    dataIndex: t.getRawIndex(e),
                    actionType: i ? i.type : null,
                  },
                  p
                ),
                h
              )
          );
        };
        function M(e, t) {
          for (var i in t) (0, c.hasOwn)(t, i) && (e[i] = t[i]);
        }
        function L(e, t) {
          e &&
            (e.textFill && (t.textFill = e.textFill),
            e.textPosition && (t.textPosition = e.textPosition));
        }
      }
      function $(e) {
        var t = {};
        return (
          (0, c.each)(e.dimensions, function (i) {
            var n = e.getDimensionInfo(i);
            if (!n.isExtraCoord) {
              var a = n.coordDim;
              (t[a] = t[a] || [])[n.coordDimIndex] = e.getDimensionIndex(i);
            }
          }),
          t
        );
      }
      function ee(e, t, i, n, a, o, r) {
        if (n) {
          var l = te(e, t, i, n, a, o);
          return (
            l && r.setItemGraphicEl(i, l),
            l && (0, m.Lm)(l, n.focus, n.blurScope, n.emphasisDisabled),
            l
          );
        }
        o.remove(t);
      }
      function te(e, t, i, n, a, o) {
        var r = -1,
          l = t;
        t &&
          ie(t, n, a) &&
          ((r = (0, c.indexOf)(o.childrenRef(), t)), (t = null));
        var s,
          d,
          h = !t,
          p = t;
        p
          ? p.clearStates()
          : ((p = q(n)),
            l &&
              ((s = l),
              (d = p).copyTransform(s),
              U(d) &&
                U(s) &&
                (d.setStyle(s.style),
                (d.z = s.z),
                (d.z2 = s.z2),
                (d.zlevel = s.zlevel),
                (d.invisible = s.invisible),
                (d.ignore = s.ignore),
                X(d) && X(s) && d.setShape(s.shape)))),
          !1 === n.morph
            ? (p.disableMorphing = !0)
            : p.disableMorphing && (p.disableMorphing = !1),
          (Y.normal.cfg =
            Y.normal.conOpt =
            Y.emphasis.cfg =
            Y.emphasis.conOpt =
            Y.blur.cfg =
            Y.blur.conOpt =
            Y.select.cfg =
            Y.select.conOpt =
              null),
          (Y.isLegacy = !1),
          (function (e, t, i, n, a, o) {
            if (e.isGroup) return;
            ne(i, null, o), ne(i, R, o);
            var r = o.normal.conOpt,
              l = o.emphasis.conOpt,
              s = o.blur.conOpt,
              u = o.select.conOpt;
            if (null != r || null != l || null != u || null != s) {
              var d = e.getTextContent();
              if (!1 === r) d && e.removeTextContent();
              else {
                (r = o.normal.conOpt = r || { type: "text" }),
                  d ? d.clearStates() : ((d = q(r)), e.setTextContent(d)),
                  j(null, d, t, r, null, n, a);
                for (var c = r && r.style, h = 0; h < G.length; h++) {
                  var p = G[h];
                  if (p !== z) {
                    var g = o[p].conOpt;
                    Q(p, d, 0, oe(r, g, p), null);
                  }
                }
                c ? d.dirty() : d.markRedraw();
              }
            }
          })(p, i, n, a, h, Y),
          (function (e, t, i, n, a) {
            var o = i.clipPath;
            if (!1 === o) e && e.getClipPath() && e.removeClipPath();
            else if (o) {
              var r = e.getClipPath();
              r && ie(r, o, n) && (r = null),
                r || ((r = q(o)), e.setClipPath(r)),
                j(null, r, t, o, null, n, a);
            }
          })(p, i, n, a, h),
          j(e, p, i, n, Y, a, h),
          (0, c.hasOwn)(n, "info") && (u(p).info = n.info);
        for (var g = 0; g < G.length; g++) {
          var f = G[g];
          if (f !== z) {
            var y = ae(n, f);
            Q(f, p, 0, oe(n, y, f), Y);
          }
        }
        return (
          (function (e, t, i) {
            if (!e.isGroup) {
              var n = e,
                a = i.currentZ,
                o = i.currentZLevel;
              (n.z = a), (n.zlevel = o);
              var r = t.z2;
              null != r && (n.z2 = r || 0);
              for (var l = 0; l < G.length; l++) J(n, t, G[l]);
            }
          })(p, n, a),
          "group" === n.type &&
            (function (e, t, i, n, a) {
              var o = n.children,
                r = o ? o.length : 0,
                l = n.$mergeChildren,
                s = "byName" === l || n.diffChildrenByName,
                u = !1 === l;
              if (!r && !s && !u) return;
              if (s)
                return (
                  (d = {
                    api: e,
                    oldChildren: t.children() || [],
                    newChildren: o || [],
                    dataIndex: i,
                    seriesModel: a,
                    group: t,
                  }),
                  void new S.A(d.oldChildren, d.newChildren, le, le, d)
                    .add(se)
                    .update(se)
                    .remove(ue)
                    .execute()
                );
              var d;
              u && t.removeAll();
              for (var c = 0; c < r; c++) {
                var h = o[c],
                  p = t.childAt(c);
                h
                  ? (null == h.ignore && (h.ignore = !1), te(e, p, i, h, a, t))
                  : (p.ignore = !0);
              }
              for (var g = t.childCount() - 1; g >= c; g--) {
                var f = t.childAt(g);
                re(t, f, a);
              }
            })(e, p, i, n, a),
          r >= 0 ? o.replaceAt(p, r) : o.add(p),
          p
        );
      }
      function ie(e, t, i) {
        var n,
          a = u(e),
          o = t.type,
          r = t.shape,
          l = t.style;
        return (
          i.isUniversalTransitionEnabled() ||
          (null != o && o !== a.customGraphicType) ||
          ("path" === o &&
            (n = r) &&
            ((0, c.hasOwn)(n, "pathData") || (0, c.hasOwn)(n, "d")) &&
            de(r) !== a.customPathData) ||
          ("image" === o &&
            (0, c.hasOwn)(l, "image") &&
            l.image !== a.customImagePath)
        );
      }
      function ne(e, t, i) {
        var n = t ? ae(e, t) : e,
          a = t ? oe(e, n, R) : e.style,
          o = e.type,
          r = n ? n.textConfig : null,
          l = e.textContent,
          s = l ? (t ? ae(l, t) : l) : null;
        if (a && (i.isLegacy || (0, N.ex)(a, o, !!r, !!s))) {
          i.isLegacy = !0;
          var u = (0, N.lH)(a, o, !t);
          !r && u.textConfig && (r = u.textConfig),
            !s && u.textContent && (s = u.textContent);
        }
        if (!t && s) {
          var d = s;
          !d.type && (d.type = "text");
        }
        var c = t ? i[t] : i.normal;
        (c.cfg = r), (c.conOpt = s);
      }
      function ae(e, t) {
        return t ? (e ? e[t] : null) : e;
      }
      function oe(e, t, i) {
        var n = t && t.style;
        return null == n && i === R && e && (n = e.styleEmphasis), n;
      }
      function re(e, t, i) {
        t && (0, E.h8)(t, u(e).option, i);
      }
      function le(e, t) {
        var i = e && e.name;
        return null != i ? i : "e\0\0" + t;
      }
      function se(e, t) {
        var i = this.context,
          n = null != e ? i.newChildren[e] : null,
          a = null != t ? i.oldChildren[t] : null;
        te(i.api, a, i.dataIndex, n, i.seriesModel, i.group);
      }
      function ue(e) {
        var t = this.context,
          i = t.oldChildren[e];
        i && (0, E.h8)(i, u(i).option, t.seriesModel);
      }
      function de(e) {
        return e && (e.pathData || e.d);
      }
      function ce(e) {
        e.registerChartView(Z), e.registerSeriesModel(d);
      }
    },
    41599: (e, t, i) => {
      i.d(t, { a: () => H });
      var n = i(37292),
        a = i(62362),
        o = i(15230),
        r = i(11552),
        l = i(47945);
      const s = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i.hasSymbolVisual = !0), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getInitialData = function (e) {
            return (0, a.A)(null, this, { useEncodeDefaulter: !0 });
          }),
          (t.prototype.getLegendIcon = function (e) {
            var t = new l.A(),
              i = (0, r.v5)(
                "line",
                0,
                e.itemHeight / 2,
                e.itemWidth,
                0,
                e.lineStyle.stroke,
                !1
              );
            t.add(i), i.setStyle(e.lineStyle);
            var n = this.getData().getVisual("symbol"),
              a = this.getData().getVisual("symbolRotate"),
              o = "none" === n ? "circle" : n,
              s = 0.8 * e.itemHeight,
              u = (0, r.v5)(
                o,
                (e.itemWidth - s) / 2,
                (e.itemHeight - s) / 2,
                s,
                s,
                e.itemStyle.fill
              );
            t.add(u), u.setStyle(e.itemStyle);
            var d = "inherit" === e.iconRotate ? a : e.iconRotate || 0;
            return (
              (u.rotation = (d * Math.PI) / 180),
              u.setOrigin([e.itemWidth / 2, e.itemHeight / 2]),
              o.indexOf("empty") > -1 &&
                ((u.style.stroke = u.style.fill),
                (u.style.fill = "#fff"),
                (u.style.lineWidth = 2)),
              t
            );
          }),
          (t.type = "series.line"),
          (t.dependencies = ["grid", "polar"]),
          (t.defaultOption = {
            z: 3,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            clip: !0,
            label: { position: "top" },
            endLabel: { show: !1, valueAnimation: !0, distance: 8 },
            lineStyle: { width: 2, type: "solid" },
            emphasis: { scale: !0 },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0,
            universalTransition: { divideShape: "clone" },
            triggerLineEvent: !1,
          }),
          t
        );
      })(o.A);
      var u = i(70441),
        d = i(97681),
        c = i(88667),
        h = i(24755);
      function p(e, t, i) {
        var n = e.getBaseAxis(),
          a = e.getOtherAxis(n),
          o = (function (e, t) {
            var i = 0,
              n = e.scale.getExtent();
            "start" === t
              ? (i = n[0])
              : "end" === t
              ? (i = n[1])
              : (0, u.isNumber)(t) && !isNaN(t)
              ? (i = t)
              : n[0] > 0
              ? (i = n[0])
              : n[1] < 0 && (i = n[1]);
            return i;
          })(a, i),
          r = n.dim,
          l = a.dim,
          s = t.mapDimension(l),
          d = t.mapDimension(r),
          c = "x" === l || "radius" === l ? 1 : 0,
          p = (0, u.map)(e.dimensions, function (e) {
            return t.mapDimension(e);
          }),
          g = !1,
          f = t.getCalculationInfo("stackResultDimension");
        return (
          (0, h.sJ)(t, p[0]) && ((g = !0), (p[0] = f)),
          (0, h.sJ)(t, p[1]) && ((g = !0), (p[1] = f)),
          {
            dataDimsForPoint: p,
            valueStart: o,
            valueAxisDim: l,
            baseAxisDim: r,
            stacked: !!g,
            valueDim: s,
            baseDim: d,
            baseDataOffset: c,
            stackedOverDimension: t.getCalculationInfo("stackedOverDimension"),
          }
        );
      }
      function g(e, t, i, n) {
        var a = NaN;
        e.stacked &&
          (a = i.get(i.getCalculationInfo("stackedOverDimension"), n)),
          isNaN(a) && (a = e.valueStart);
        var o = e.baseDataOffset,
          r = [];
        return (r[o] = i.get(e.baseDim, n)), (r[1 - o] = a), t.dataToPoint(r);
      }
      var f = i(41586);
      var y = i(56073),
        m = i(39253),
        v = i(22007),
        x = i(34575),
        b = i(27387),
        S = i(29379),
        _ = i(34020),
        A = i(41876),
        w = i(41406),
        I = i(87689),
        M = i(3629),
        L = i(3569),
        D = i(73411),
        C = i(32815);
      function N(e, t) {
        if (e.length === t.length) {
          for (var i = 0; i < e.length; i++) if (e[i] !== t[i]) return;
          return !0;
        }
      }
      function T(e) {
        for (
          var t = 1 / 0, i = 1 / 0, n = -1 / 0, a = -1 / 0, o = 0;
          o < e.length;

        ) {
          var r = e[o++],
            l = e[o++];
          isNaN(r) || ((t = Math.min(r, t)), (n = Math.max(r, n))),
            isNaN(l) || ((i = Math.min(l, i)), (a = Math.max(l, a)));
        }
        return [
          [t, i],
          [n, a],
        ];
      }
      function P(e, t) {
        var i = T(e),
          n = i[0],
          a = i[1],
          o = T(t),
          r = o[0],
          l = o[1];
        return Math.max(
          Math.abs(n[0] - r[0]),
          Math.abs(n[1] - r[1]),
          Math.abs(a[0] - l[0]),
          Math.abs(a[1] - l[1])
        );
      }
      function E(e) {
        return u.isNumber(e) ? e : e ? 0.5 : 0;
      }
      function V(e, t, i, n, a) {
        var o = i.getBaseAxis(),
          r = "x" === o.dim || "radius" === o.dim ? 0 : 1,
          l = [],
          s = 0,
          u = [],
          d = [],
          c = [],
          h = [];
        if (a) {
          for (s = 0; s < e.length; s += 2) {
            var p = t || e;
            isNaN(p[s]) || isNaN(p[s + 1]) || h.push(e[s], e[s + 1]);
          }
          e = h;
        }
        for (s = 0; s < e.length - 2; s += 2)
          switch (
            ((c[0] = e[s + 2]),
            (c[1] = e[s + 3]),
            (d[0] = e[s]),
            (d[1] = e[s + 1]),
            l.push(d[0], d[1]),
            n)
          ) {
            case "end":
              (u[r] = c[r]), (u[1 - r] = d[1 - r]), l.push(u[0], u[1]);
              break;
            case "middle":
              var g = (d[r] + c[r]) / 2,
                f = [];
              (u[r] = f[r] = g),
                (u[1 - r] = d[1 - r]),
                (f[1 - r] = c[1 - r]),
                l.push(u[0], u[1]),
                l.push(f[0], f[1]);
              break;
            default:
              (u[r] = d[r]), (u[1 - r] = c[1 - r]), l.push(u[0], u[1]);
          }
        return l.push(e[s++], e[s++]), l;
      }
      function R(e, t, i) {
        var n = e.getVisual("visualMeta");
        if (n && n.length && e.count() && "cartesian2d" === t.type) {
          for (var a, o, r = n.length - 1; r >= 0; r--) {
            var l = e.getDimensionInfo(n[r].dimension);
            if ("x" === (a = l && l.coordDim) || "y" === a) {
              o = n[r];
              break;
            }
          }
          if (o) {
            var s = t.getAxis(a),
              d = u.map(o.stops, function (e) {
                return {
                  coord: s.toGlobalCoord(s.dataToCoord(e.value)),
                  color: e.color,
                };
              }),
              c = d.length,
              h = o.outerColors.slice();
            c && d[0].coord > d[c - 1].coord && (d.reverse(), h.reverse());
            var p = (function (e, t) {
                var i,
                  n,
                  a = [],
                  o = e.length;
                function r(e, t, i) {
                  var n = e.coord,
                    a = (i - n) / (t.coord - n);
                  return {
                    coord: i,
                    color: (0, C.lerp)(a, [e.color, t.color]),
                  };
                }
                for (var l = 0; l < o; l++) {
                  var s = e[l],
                    u = s.coord;
                  if (u < 0) i = s;
                  else {
                    if (u > t) {
                      n
                        ? a.push(r(n, s, t))
                        : i && a.push(r(i, s, 0), r(i, s, t));
                      break;
                    }
                    i && (a.push(r(i, s, 0)), (i = null)), a.push(s), (n = s);
                  }
                }
                return a;
              })(d, "x" === a ? i.getWidth() : i.getHeight()),
              g = p.length;
            if (!g && c)
              return d[0].coord < 0
                ? h[1]
                  ? h[1]
                  : d[c - 1].color
                : h[0]
                ? h[0]
                : d[0].color;
            var f = p[0].coord - 10,
              m = p[g - 1].coord + 10,
              v = m - f;
            if (v < 0.001) return "transparent";
            u.each(p, function (e) {
              e.offset = (e.coord - f) / v;
            }),
              p.push({
                offset: g ? p[g - 1].offset : 0.5,
                color: h[1] || "transparent",
              }),
              p.unshift({
                offset: g ? p[0].offset : 0.5,
                color: h[0] || "transparent",
              });
            var x = new y.A(0, 0, 0, 0, p, !0);
            return (x[a] = f), (x[a + "2"] = m), x;
          }
        }
      }
      function z(e, t, i) {
        var n = e.get("showAllSymbol"),
          a = "auto" === n;
        if (!n || a) {
          var o = i.getAxesByScale("ordinal")[0];
          if (
            o &&
            (!a ||
              !(function (e, t) {
                var i = e.getExtent(),
                  n = Math.abs(i[1] - i[0]) / e.scale.count();
                isNaN(n) && (n = 0);
                for (
                  var a = t.count(), o = Math.max(1, Math.round(a / 5)), r = 0;
                  r < a;
                  r += o
                )
                  if (
                    1.5 * c.A.getSymbolSize(t, r)[e.isHorizontal() ? 1 : 0] >
                    n
                  )
                    return !1;
                return !0;
              })(o, t))
          ) {
            var r = t.mapDimension(o.dim),
              l = {};
            return (
              u.each(o.getViewLabels(), function (e) {
                var t = o.scale.getRawOrdinalNumber(e.tickValue);
                l[t] = 1;
              }),
              function (e) {
                return !l.hasOwnProperty(t.get(r, e));
              }
            );
          }
        }
      }
      function O(e, t) {
        return [e[2 * t], e[2 * t + 1]];
      }
      function k(e) {
        if (e.get(["endLabel", "show"])) return !0;
        for (var t = 0; t < w.BV.length; t++)
          if (e.get([w.BV[t], "endLabel", "show"])) return !0;
        return !1;
      }
      function G(e, t, i, n) {
        if ((0, A.g)(t, "cartesian2d")) {
          var a = n.getModel("endLabel"),
            o = a.get("valueAnimation"),
            r = n.getData(),
            l = { lastFrameIndex: 0 },
            s = k(n)
              ? function (i, n) {
                  e._endLabelOnDuring(i, n, r, l, o, a, t);
                }
              : null,
            u = t.getBaseAxis().isHorizontal(),
            d = (0, _.SM)(
              t,
              i,
              n,
              function () {
                var t = e._endLabel;
                t &&
                  i &&
                  null != l.originalX &&
                  t.attr({ x: l.originalX, y: l.originalY });
              },
              s
            );
          if (!n.get("clip", !0)) {
            var c = d.shape,
              h = Math.max(c.width, c.height);
            u
              ? ((c.y -= h), (c.height += 2 * h))
              : ((c.x -= h), (c.width += 2 * h));
          }
          return s && s(1, d), d;
        }
        return (0, _.Mi)(t, i, n);
      }
      var B = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.init = function () {
            var e = new l.A(),
              t = new d.A();
            this.group.add(t.group),
              (this._symbolDraw = t),
              (this._lineGroup = e),
              (this._changePolyState = u.bind(this._changePolyState, this));
          }),
          (t.prototype.render = function (e, t, i) {
            var n = e.coordinateSystem,
              a = this.group,
              o = e.getData(),
              r = e.getModel("lineStyle"),
              l = e.getModel("areaStyle"),
              s = o.getLayout("points") || [],
              d = "polar" === n.type,
              c = this._coordSys,
              h = this._symbolDraw,
              y = this._polyline,
              v = this._polygon,
              x = this._lineGroup,
              b = !t.ssr && e.get("animation"),
              S = !l.isEmpty(),
              _ = l.get("origin"),
              A = p(n, o, _),
              I =
                S &&
                (function (e, t, i) {
                  if (!i.valueDim) return [];
                  for (
                    var n = t.count(), a = (0, f.J)(2 * n), o = 0;
                    o < n;
                    o++
                  ) {
                    var r = g(i, e, t, o);
                    (a[2 * o] = r[0]), (a[2 * o + 1] = r[1]);
                  }
                  return a;
                })(n, o, A),
              M = e.get("showSymbol"),
              C = e.get("connectNulls"),
              T = M && !d && z(e, o, n),
              P = this._data;
            P &&
              P.eachItemGraphicEl(function (e, t) {
                e.__temp && (a.remove(e), P.setItemGraphicEl(t, null));
              }),
              M || h.remove(),
              a.add(x);
            var O,
              k = !d && e.get("step");
            n &&
              n.getArea &&
              e.get("clip", !0) &&
              (null != (O = n.getArea()).width
                ? ((O.x -= 0.1),
                  (O.y -= 0.1),
                  (O.width += 0.2),
                  (O.height += 0.2))
                : O.r0 && ((O.r0 -= 0.5), (O.r += 0.5))),
              (this._clipShapeForSymbol = O);
            var B = R(o, n, i) || o.getVisual("style")[o.getVisual("drawType")];
            if (y && c.type === n.type && k === this._step) {
              S && !v
                ? (v = this._newPolygon(s, I))
                : v && !S && (x.remove(v), (v = this._polygon = null)),
                d || this._initOrUpdateEndLabel(e, n, (0, D.he)(B));
              var W = x.getClipPath();
              if (W) {
                var F = G(this, n, !1, e);
                m.LW(W, { shape: F.shape }, e);
              } else x.setClipPath(G(this, n, !0, e));
              M &&
                h.updateData(o, {
                  isIgnore: T,
                  clipShape: O,
                  disableAnimation: !0,
                  getSymbolPoint: function (e) {
                    return [s[2 * e], s[2 * e + 1]];
                  },
                }),
                (N(this._stackedOnPoints, I) && N(this._points, s)) ||
                  (b
                    ? this._doUpdateAnimation(o, I, n, i, k, _, C)
                    : (k &&
                        (I && (I = V(I, s, n, k, C)),
                        (s = V(s, null, n, k, C))),
                      y.setShape({ points: s }),
                      v && v.setShape({ points: s, stackedOnPoints: I })));
            } else
              M &&
                h.updateData(o, {
                  isIgnore: T,
                  clipShape: O,
                  disableAnimation: !0,
                  getSymbolPoint: function (e) {
                    return [s[2 * e], s[2 * e + 1]];
                  },
                }),
                b && this._initSymbolLabelAnimation(o, n, O),
                k && (I && (I = V(I, s, n, k, C)), (s = V(s, null, n, k, C))),
                (y = this._newPolyline(s)),
                S
                  ? (v = this._newPolygon(s, I))
                  : v && (x.remove(v), (v = this._polygon = null)),
                d || this._initOrUpdateEndLabel(e, n, (0, D.he)(B)),
                x.setClipPath(G(this, n, !0, e));
            var Y = e.getModel("emphasis"),
              H = Y.get("focus"),
              X = Y.get("blurScope"),
              U = Y.get("disabled");
            (y.useStyle(
              u.defaults(r.getLineStyle(), {
                fill: "none",
                stroke: B,
                lineJoin: "bevel",
              })
            ),
            (0, w.Mx)(y, e, "lineStyle"),
            y.style.lineWidth > 0 &&
              "bolder" === e.get(["emphasis", "lineStyle", "width"])) &&
              (y.getState("emphasis").style.lineWidth = +y.style.lineWidth + 1);
            ((0, L.z)(y).seriesIndex = e.seriesIndex), (0, w.Lm)(y, H, X, U);
            var Z = E(e.get("smooth")),
              q = e.get("smoothMonotone");
            if (
              (y.setShape({ smooth: Z, smoothMonotone: q, connectNulls: C }), v)
            ) {
              var j = o.getCalculationInfo("stackedOnSeries"),
                Q = 0;
              v.useStyle(
                u.defaults(l.getAreaStyle(), {
                  fill: B,
                  opacity: 0.7,
                  lineJoin: "bevel",
                  decal: o.getVisual("style").decal,
                })
              ),
                j && (Q = E(j.get("smooth"))),
                v.setShape({
                  smooth: Z,
                  stackedOnSmooth: Q,
                  smoothMonotone: q,
                  connectNulls: C,
                }),
                (0, w.Mx)(v, e, "areaStyle"),
                ((0, L.z)(v).seriesIndex = e.seriesIndex),
                (0, w.Lm)(v, H, X, U);
            }
            var J = this._changePolyState;
            o.eachItemGraphicEl(function (e) {
              e && (e.onHoverStateChange = J);
            }),
              (this._polyline.onHoverStateChange = J),
              (this._data = o),
              (this._coordSys = n),
              (this._stackedOnPoints = I),
              (this._points = s),
              (this._step = k),
              (this._valueOrigin = _),
              e.get("triggerLineEvent") &&
                (this.packEventData(e, y), v && this.packEventData(e, v));
          }),
          (t.prototype.packEventData = function (e, t) {
            (0, L.z)(t).eventData = {
              componentType: "series",
              componentSubType: "line",
              componentIndex: e.componentIndex,
              seriesIndex: e.seriesIndex,
              seriesName: e.name,
              seriesType: "line",
            };
          }),
          (t.prototype.highlight = function (e, t, i, n) {
            var a = e.getData(),
              o = x.le(a, n);
            if (
              (this._changePolyState("emphasis"),
              !(o instanceof Array) && null != o && o >= 0)
            ) {
              var r = a.getLayout("points"),
                l = a.getItemGraphicEl(o);
              if (!l) {
                var s = r[2 * o],
                  u = r[2 * o + 1];
                if (isNaN(s) || isNaN(u)) return;
                if (
                  this._clipShapeForSymbol &&
                  !this._clipShapeForSymbol.contain(s, u)
                )
                  return;
                var d = e.get("zlevel") || 0,
                  h = e.get("z") || 0;
                ((l = new c.A(a, o)).x = s), (l.y = u), l.setZ(d, h);
                var p = l.getSymbolPath().getTextContent();
                p &&
                  ((p.zlevel = d), (p.z = h), (p.z2 = this._polyline.z2 + 1)),
                  (l.__temp = !0),
                  a.setItemGraphicEl(o, l),
                  l.stopSymbolAnimation(!0),
                  this.group.add(l);
              }
              l.highlight();
            } else S.A.prototype.highlight.call(this, e, t, i, n);
          }),
          (t.prototype.downplay = function (e, t, i, n) {
            var a = e.getData(),
              o = x.le(a, n);
            if ((this._changePolyState("normal"), null != o && o >= 0)) {
              var r = a.getItemGraphicEl(o);
              r &&
                (r.__temp
                  ? (a.setItemGraphicEl(o, null), this.group.remove(r))
                  : r.downplay());
            } else S.A.prototype.downplay.call(this, e, t, i, n);
          }),
          (t.prototype._changePolyState = function (e) {
            var t = this._polygon;
            (0, w.Pk)(this._polyline, e), t && (0, w.Pk)(t, e);
          }),
          (t.prototype._newPolyline = function (e) {
            var t = this._polyline;
            return (
              t && this._lineGroup.remove(t),
              (t = new b.N({
                shape: { points: e },
                segmentIgnoreThreshold: 2,
                z2: 10,
              })),
              this._lineGroup.add(t),
              (this._polyline = t),
              t
            );
          }),
          (t.prototype._newPolygon = function (e, t) {
            var i = this._polygon;
            return (
              i && this._lineGroup.remove(i),
              (i = new b.z({
                shape: { points: e, stackedOnPoints: t },
                segmentIgnoreThreshold: 2,
              })),
              this._lineGroup.add(i),
              (this._polygon = i),
              i
            );
          }),
          (t.prototype._initSymbolLabelAnimation = function (e, t, i) {
            var n,
              a,
              o = t.getBaseAxis(),
              r = o.inverse;
            "cartesian2d" === t.type
              ? ((n = o.isHorizontal()), (a = !1))
              : "polar" === t.type && ((n = "angle" === o.dim), (a = !0));
            var l = e.hostModel,
              s = l.get("animationDuration");
            u.isFunction(s) && (s = s(null));
            var d = l.get("animationDelay") || 0,
              c = u.isFunction(d) ? d(null) : d;
            e.eachItemGraphicEl(function (e, o) {
              var l = e;
              if (l) {
                var h = [e.x, e.y],
                  p = void 0,
                  g = void 0,
                  f = void 0;
                if (i)
                  if (a) {
                    var y = i,
                      m = t.pointToCoord(h);
                    n
                      ? ((p = y.startAngle),
                        (g = y.endAngle),
                        (f = (-m[1] / 180) * Math.PI))
                      : ((p = y.r0), (g = y.r), (f = m[0]));
                  } else {
                    var v = i;
                    n
                      ? ((p = v.x), (g = v.x + v.width), (f = e.x))
                      : ((p = v.y + v.height), (g = v.y), (f = e.y));
                  }
                var x = g === p ? 0 : (f - p) / (g - p);
                r && (x = 1 - x);
                var b = u.isFunction(d) ? d(o) : s * x + c,
                  S = l.getSymbolPath(),
                  _ = S.getTextContent();
                l.attr({ scaleX: 0, scaleY: 0 }),
                  l.animateTo(
                    { scaleX: 1, scaleY: 1 },
                    { duration: 200, setToFinal: !0, delay: b }
                  ),
                  _ &&
                    _.animateFrom(
                      { style: { opacity: 0 } },
                      { duration: 300, delay: b }
                    ),
                  (S.disableLabelAnimation = !0);
              }
            });
          }),
          (t.prototype._initOrUpdateEndLabel = function (e, t, i) {
            var n = e.getModel("endLabel");
            if (k(e)) {
              var a = e.getData(),
                o = this._polyline,
                r = a.getLayout("points");
              if (!r)
                return o.removeTextContent(), void (this._endLabel = null);
              var l = this._endLabel;
              l ||
                (((l = this._endLabel = new v.Ay({ z2: 200 })).ignoreClip = !0),
                o.setTextContent(this._endLabel),
                (o.disableLabelAnimation = !0));
              var s = (function (e) {
                for (
                  var t, i, n = e.length / 2;
                  n > 0 &&
                  ((t = e[2 * n - 2]),
                  (i = e[2 * n - 1]),
                  isNaN(t) || isNaN(i));
                  n--
                );
                return n - 1;
              })(r);
              s >= 0 &&
                ((0, I.qM)(
                  o,
                  (0, I.lx)(e, "endLabel"),
                  {
                    inheritColor: i,
                    labelFetcher: e,
                    labelDataIndex: s,
                    defaultText: function (e, t, i) {
                      return null != i ? (0, M.T)(a, i) : (0, M.i)(a, e);
                    },
                    enableTextSetter: !0,
                  },
                  (function (e, t) {
                    var i = t.getBaseAxis(),
                      n = i.isHorizontal(),
                      a = i.inverse,
                      o = n ? (a ? "right" : "left") : "center",
                      r = n ? "middle" : a ? "top" : "bottom";
                    return {
                      normal: {
                        align: e.get("align") || o,
                        verticalAlign: e.get("verticalAlign") || r,
                      },
                    };
                  })(n, t)
                ),
                (o.textConfig.position = null));
            } else
              this._endLabel &&
                (this._polyline.removeTextContent(), (this._endLabel = null));
          }),
          (t.prototype._endLabelOnDuring = function (e, t, i, n, a, o, r) {
            var l = this._endLabel,
              s = this._polyline;
            if (l) {
              e < 1 &&
                null == n.originalX &&
                ((n.originalX = l.x), (n.originalY = l.y));
              var u = i.getLayout("points"),
                d = i.hostModel,
                c = d.get("connectNulls"),
                h = o.get("precision"),
                p = o.get("distance") || 0,
                g = r.getBaseAxis(),
                f = g.isHorizontal(),
                y = g.inverse,
                m = t.shape,
                v = y ? (f ? m.x : m.y + m.height) : f ? m.x + m.width : m.y,
                b = (f ? p : 0) * (y ? -1 : 1),
                S = (f ? 0 : -p) * (y ? -1 : 1),
                _ = f ? "x" : "y",
                A = (function (e, t, i) {
                  for (
                    var n,
                      a,
                      o = e.length / 2,
                      r = "x" === i ? 0 : 1,
                      l = 0,
                      s = -1,
                      u = 0;
                    u < o;
                    u++
                  )
                    if (
                      ((a = e[2 * u + r]),
                      !isNaN(a) && !isNaN(e[2 * u + 1 - r]))
                    )
                      if (0 !== u) {
                        if ((n <= t && a >= t) || (n >= t && a <= t)) {
                          s = u;
                          break;
                        }
                        (l = u), (n = a);
                      } else n = a;
                  return { range: [l, s], t: (t - n) / (a - n) };
                })(u, v, _),
                w = A.range,
                M = w[1] - w[0],
                L = void 0;
              if (M >= 1) {
                if (M > 1 && !c) {
                  var D = O(u, w[0]);
                  l.attr({ x: D[0] + b, y: D[1] + S }),
                    a && (L = d.getRawValue(w[0]));
                } else {
                  (D = s.getPointOn(v, _)) &&
                    l.attr({ x: D[0] + b, y: D[1] + S });
                  var C = d.getRawValue(w[0]),
                    N = d.getRawValue(w[1]);
                  a && (L = x.Il(i, h, C, N, A.t));
                }
                n.lastFrameIndex = w[0];
              } else {
                var T = 1 === e || n.lastFrameIndex > 0 ? w[0] : 0;
                D = O(u, T);
                a && (L = d.getRawValue(T)),
                  l.attr({ x: D[0] + b, y: D[1] + S });
              }
              if (a) {
                var P = (0, I.Lu)(l);
                "function" === typeof P.setLabelText && P.setLabelText(L);
              }
            }
          }),
          (t.prototype._doUpdateAnimation = function (e, t, i, n, a, o, r) {
            var l = this._polyline,
              s = this._polygon,
              u = e.hostModel,
              d = (function (e, t, i, n, a, o, r) {
                for (
                  var l = (function (e, t) {
                      var i = [];
                      return (
                        t
                          .diff(e)
                          .add(function (e) {
                            i.push({ cmd: "+", idx: e });
                          })
                          .update(function (e, t) {
                            i.push({ cmd: "=", idx: t, idx1: e });
                          })
                          .remove(function (e) {
                            i.push({ cmd: "-", idx: e });
                          })
                          .execute(),
                        i
                      );
                    })(e, t),
                    s = [],
                    u = [],
                    d = [],
                    c = [],
                    h = [],
                    y = [],
                    m = [],
                    v = p(a, t, r),
                    x = e.getLayout("points") || [],
                    b = t.getLayout("points") || [],
                    S = 0;
                  S < l.length;
                  S++
                ) {
                  var _ = l[S],
                    A = !0,
                    w = void 0,
                    I = void 0;
                  switch (_.cmd) {
                    case "=":
                      (w = 2 * _.idx), (I = 2 * _.idx1);
                      var M = x[w],
                        L = x[w + 1],
                        D = b[I],
                        C = b[I + 1];
                      (isNaN(M) || isNaN(L)) && ((M = D), (L = C)),
                        s.push(M, L),
                        u.push(D, C),
                        d.push(i[w], i[w + 1]),
                        c.push(n[I], n[I + 1]),
                        m.push(t.getRawIndex(_.idx1));
                      break;
                    case "+":
                      var N = _.idx,
                        T = v.dataDimsForPoint,
                        P = a.dataToPoint([t.get(T[0], N), t.get(T[1], N)]);
                      (I = 2 * N), s.push(P[0], P[1]), u.push(b[I], b[I + 1]);
                      var E = g(v, a, t, N);
                      d.push(E[0], E[1]),
                        c.push(n[I], n[I + 1]),
                        m.push(t.getRawIndex(N));
                      break;
                    case "-":
                      A = !1;
                  }
                  A && (h.push(_), y.push(y.length));
                }
                y.sort(function (e, t) {
                  return m[e] - m[t];
                });
                var V = s.length,
                  R = (0, f.J)(V),
                  z = (0, f.J)(V),
                  O = (0, f.J)(V),
                  k = (0, f.J)(V),
                  G = [];
                for (S = 0; S < y.length; S++) {
                  var B = y[S],
                    W = 2 * S,
                    F = 2 * B;
                  (R[W] = s[F]),
                    (R[W + 1] = s[F + 1]),
                    (z[W] = u[F]),
                    (z[W + 1] = u[F + 1]),
                    (O[W] = d[F]),
                    (O[W + 1] = d[F + 1]),
                    (k[W] = c[F]),
                    (k[W + 1] = c[F + 1]),
                    (G[S] = h[B]);
                }
                return {
                  current: R,
                  next: z,
                  stackedOnCurrent: O,
                  stackedOnNext: k,
                  status: G,
                };
              })(
                this._data,
                e,
                this._stackedOnPoints,
                t,
                this._coordSys,
                0,
                this._valueOrigin
              ),
              c = d.current,
              h = d.stackedOnCurrent,
              y = d.next,
              v = d.stackedOnNext;
            if (
              (a &&
                ((h = V(d.stackedOnCurrent, d.current, i, a, r)),
                (c = V(d.current, null, i, a, r)),
                (v = V(d.stackedOnNext, d.next, i, a, r)),
                (y = V(d.next, null, i, a, r))),
              P(c, y) > 3e3 || (s && P(h, v) > 3e3))
            )
              return (
                l.stopAnimation(),
                l.setShape({ points: y }),
                void (
                  s &&
                  (s.stopAnimation(),
                  s.setShape({ points: y, stackedOnPoints: v }))
                )
              );
            (l.shape.__points = d.current), (l.shape.points = c);
            var x = { shape: { points: y } };
            d.current !== c && (x.shape.__points = d.next),
              l.stopAnimation(),
              m.oi(l, x, u),
              s &&
                (s.setShape({ points: c, stackedOnPoints: h }),
                s.stopAnimation(),
                m.oi(s, { shape: { stackedOnPoints: v } }, u),
                l.shape.points !== s.shape.points &&
                  (s.shape.points = l.shape.points));
            for (var b = [], S = d.status, _ = 0; _ < S.length; _++) {
              if ("=" === S[_].cmd) {
                var A = e.getItemGraphicEl(S[_].idx1);
                A && b.push({ el: A, ptIdx: _ });
              }
            }
            l.animators &&
              l.animators.length &&
              l.animators[0].during(function () {
                s && s.dirtyShape();
                for (var e = l.shape.__points, t = 0; t < b.length; t++) {
                  var i = b[t].el,
                    n = 2 * b[t].ptIdx;
                  (i.x = e[n]), (i.y = e[n + 1]), i.markRedraw();
                }
              });
          }),
          (t.prototype.remove = function (e) {
            var t = this.group,
              i = this._data;
            this._lineGroup.removeAll(),
              this._symbolDraw.remove(!0),
              i &&
                i.eachItemGraphicEl(function (e, n) {
                  e.__temp && (t.remove(e), i.setItemGraphicEl(n, null));
                }),
              (this._polyline =
                this._polygon =
                this._coordSys =
                this._points =
                this._stackedOnPoints =
                this._endLabel =
                this._data =
                  null);
          }),
          (t.type = "line"),
          t
        );
      })(S.A);
      const W = B;
      var F = i(80349),
        Y = i(56074);
      function H(e) {
        e.registerChartView(W),
          e.registerSeriesModel(s),
          e.registerLayout((0, F.A)("line", !0)),
          e.registerVisual({
            seriesType: "line",
            reset: function (e) {
              var t = e.getData(),
                i = e.getModel("lineStyle").getLineStyle();
              i && !i.stroke && (i.stroke = t.getVisual("style").fill),
                t.setVisual("legendLineStyle", i);
            },
          }),
          e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, (0, Y.A)("line"));
      }
    },
    42860: (e, t, i) => {
      i.d(t, { a: () => A });
      var n = i(55056),
        a = i(37292),
        o = i(94026),
        r = i(33442),
        l = i(29379),
        s = i(87689),
        u = i(41406);
      const d = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, a.C6)(t, e),
          (t.prototype.render = function (e, t, i, n) {
            if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
              var a = this.group;
              if ((a.removeAll(), !e.getHostGeoModel())) {
                if (
                  (this._mapDraw &&
                    n &&
                    "geoRoam" === n.type &&
                    this._mapDraw.resetForLabelLayout(),
                  n &&
                    "geoRoam" === n.type &&
                    "series" === n.componentType &&
                    n.seriesId === e.id)
                )
                  (o = this._mapDraw) && a.add(o.group);
                else if (e.needsDrawMap) {
                  var o = this._mapDraw || new r.A(i);
                  a.add(o.group), o.draw(e, t, i, this, n), (this._mapDraw = o);
                } else
                  this._mapDraw && this._mapDraw.remove(),
                    (this._mapDraw = null);
                e.get("showLegendSymbol") &&
                  t.getComponent("legend") &&
                  this._renderSymbols(e, t, i);
              }
            }
          }),
          (t.prototype.remove = function () {
            this._mapDraw && this._mapDraw.remove(),
              (this._mapDraw = null),
              this.group.removeAll();
          }),
          (t.prototype.dispose = function () {
            this._mapDraw && this._mapDraw.remove(), (this._mapDraw = null);
          }),
          (t.prototype._renderSymbols = function (e, t, i) {
            var n = e.originalData,
              a = this.group;
            n.each(n.mapDimension("value"), function (t, i) {
              if (!isNaN(t)) {
                var r = n.getItemLayout(i);
                if (r && r.point) {
                  var l = r.point,
                    d = r.offset,
                    c = new o.A({
                      style: { fill: e.getData().getVisual("style").fill },
                      shape: { cx: l[0] + 9 * d, cy: l[1], r: 3 },
                      silent: !0,
                      z2: 8 + (d ? 0 : u.CA + 1),
                    });
                  if (!d) {
                    var h = e.mainSeries.getData(),
                      p = n.getName(i),
                      g = h.indexOfName(p),
                      f = n.getItemModel(i),
                      y = f.getModel("label"),
                      m = h.getItemGraphicEl(g);
                    (0, s.qM)(c, (0, s.lx)(f), {
                      labelFetcher: {
                        getFormattedLabel: function (t, i) {
                          return e.getFormattedLabel(g, i);
                        },
                      },
                      defaultText: p,
                    }),
                      (c.disableLabelAnimation = !0),
                      y.get("position") ||
                        c.setTextConfig({ position: "bottom" }),
                      (m.onHoverStateChange = function (e) {
                        (0, u.Pk)(c, e);
                      });
                  }
                  a.add(c);
                }
              }
            });
          }),
          (t.type = "map"),
          t
        );
      })(l.A);
      var c = i(70441),
        h = i(5508),
        p = i(15230),
        g = i(95380),
        f = i(30130),
        y = i(78754),
        m = i(11552);
      const v = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (
            (i.type = t.type),
            (i.needsDrawMap = !1),
            (i.seriesGroup = []),
            (i.getTooltipPosition = function (e) {
              if (null != e) {
                var t = this.getData().getName(e),
                  i = this.coordinateSystem,
                  n = i.getRegion(t);
                return n && i.dataToPoint(n.getCenter());
              }
            }),
            i
          );
        }
        return (
          (0, a.C6)(t, e),
          (t.prototype.getInitialData = function (e) {
            for (
              var t = (0, h.A)(this, {
                  coordDimensions: ["value"],
                  encodeDefaulter: c.curry(f.ln, this),
                }),
                i = c.createHashMap(),
                n = [],
                a = 0,
                o = t.count();
              a < o;
              a++
            ) {
              var r = t.getName(a);
              i.set(r, a);
            }
            var l = g.A.load(
              this.getMapType(),
              this.option.nameMap,
              this.option.nameProperty
            );
            return (
              c.each(l.regions, function (e) {
                var a,
                  o = e.name,
                  r = i.get(o),
                  l = e.properties && e.properties.echartsStyle;
                null == r
                  ? ((a = { name: o }), n.push(a))
                  : (a = t.getRawDataItem(r)),
                  l && c.merge(a, l);
              }),
              t.appendData(n),
              t
            );
          }),
          (t.prototype.getHostGeoModel = function () {
            var e = this.option.geoIndex;
            return null != e ? this.ecModel.getComponent("geo", e) : null;
          }),
          (t.prototype.getMapType = function () {
            return (this.getHostGeoModel() || this).option.map;
          }),
          (t.prototype.getRawValue = function (e) {
            var t = this.getData();
            return t.get(t.mapDimension("value"), e);
          }),
          (t.prototype.getRegionModel = function (e) {
            var t = this.getData();
            return t.getItemModel(t.indexOfName(e));
          }),
          (t.prototype.formatTooltip = function (e, t, i) {
            for (
              var n = this.getData(),
                a = this.getRawValue(e),
                o = n.getName(e),
                r = this.seriesGroup,
                l = [],
                s = 0;
              s < r.length;
              s++
            ) {
              var u = r[s].originalData.indexOfName(o),
                d = n.mapDimension("value");
              isNaN(r[s].originalData.get(d, u)) || l.push(r[s].name);
            }
            return (0, y.Qx)("section", {
              header: l.join(", "),
              noHeader: !l.length,
              blocks: [(0, y.Qx)("nameValue", { name: o, value: a })],
            });
          }),
          (t.prototype.setZoom = function (e) {
            this.option.zoom = e;
          }),
          (t.prototype.setCenter = function (e) {
            this.option.center = e;
          }),
          (t.prototype.getLegendIcon = function (e) {
            var t = e.icon || "roundRect",
              i = (0, m.v5)(
                t,
                0,
                0,
                e.itemWidth,
                e.itemHeight,
                e.itemStyle.fill
              );
            return (
              i.setStyle(e.itemStyle),
              (i.style.stroke = "none"),
              t.indexOf("empty") > -1 &&
                ((i.style.stroke = i.style.fill),
                (i.style.fill = "#fff"),
                (i.style.lineWidth = 2)),
              i
            );
          }),
          (t.type = "series.map"),
          (t.dependencies = ["geo"]),
          (t.layoutMode = "box"),
          (t.defaultOption = {
            z: 2,
            coordinateSystem: "geo",
            map: "",
            left: "center",
            top: "center",
            aspectScale: null,
            showLegendSymbol: !0,
            boundingCoords: null,
            center: null,
            zoom: 1,
            scaleLimit: null,
            selectedMode: !0,
            label: { show: !1, color: "#000" },
            itemStyle: {
              borderWidth: 0.5,
              borderColor: "#444",
              areaColor: "#eee",
            },
            emphasis: {
              label: { show: !0, color: "rgb(100,0,0)" },
              itemStyle: { areaColor: "rgba(255,215,0,0.8)" },
            },
            select: {
              label: { show: !0, color: "rgb(100,0,0)" },
              itemStyle: { color: "rgba(255,215,0,0.8)" },
            },
            nameProperty: "name",
          }),
          t
        );
      })(p.A);
      function x(e) {
        var t = {};
        e.eachSeriesByType("map", function (e) {
          var i = e.getHostGeoModel(),
            n = i ? "o" + i.id : "i" + e.getMapType();
          (t[n] = t[n] || []).push(e);
        }),
          c.each(t, function (e, t) {
            for (
              var i = (function (e, t) {
                  var i = {};
                  return (
                    c.each(e, function (e) {
                      e.each(e.mapDimension("value"), function (t, n) {
                        var a = "ec-" + e.getName(n);
                        (i[a] = i[a] || []), isNaN(t) || i[a].push(t);
                      });
                    }),
                    e[0].map(e[0].mapDimension("value"), function (n, a) {
                      for (
                        var o = "ec-" + e[0].getName(a),
                          r = 0,
                          l = 1 / 0,
                          s = -1 / 0,
                          u = i[o].length,
                          d = 0;
                        d < u;
                        d++
                      )
                        (l = Math.min(l, i[o][d])),
                          (s = Math.max(s, i[o][d])),
                          (r += i[o][d]);
                      return 0 === u
                        ? NaN
                        : "min" === t
                        ? l
                        : "max" === t
                        ? s
                        : "average" === t
                        ? r / u
                        : r;
                    })
                  );
                })(
                  c.map(e, function (e) {
                    return e.getData();
                  }),
                  e[0].get("mapValueCalculation")
                ),
                n = 0;
              n < e.length;
              n++
            )
              e[n].originalData = e[n].getData();
            for (n = 0; n < e.length; n++)
              (e[n].seriesGroup = e),
                (e[n].needsDrawMap = 0 === n && !e[n].getHostGeoModel()),
                e[n].setData(i.cloneShallow()),
                (e[n].mainSeries = e[0]);
          });
      }
      function b(e) {
        var t = {};
        e.eachSeriesByType("map", function (i) {
          var n = i.getMapType();
          if (!i.getHostGeoModel() && !t[n]) {
            var a = {};
            c.each(i.seriesGroup, function (t) {
              var i = t.coordinateSystem,
                n = t.originalData;
              t.get("showLegendSymbol") &&
                e.getComponent("legend") &&
                n.each(n.mapDimension("value"), function (e, t) {
                  var o = n.getName(t),
                    r = i.getRegion(o);
                  if (r && !isNaN(e)) {
                    var l = a[o] || 0,
                      s = i.dataToPoint(r.getCenter());
                    (a[o] = l + 1), n.setItemLayout(t, { point: s, offset: l });
                  }
                });
            });
            var o = i.getData();
            o.each(function (e) {
              var t = o.getName(e),
                i = o.getItemLayout(e) || {};
              (i.showLabel = !a[t]), o.setItemLayout(e, i);
            }),
              (t[n] = !0);
          }
        });
      }
      var S = i(74263),
        _ = i(14083);
      function A(e) {
        (0, n.Y)(_.a),
          e.registerChartView(d),
          e.registerSeriesModel(v),
          e.registerLayout(b),
          e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, x),
          (0, S.I)("map", e.registerAction);
      }
    },
    44763: (e, t, i) => {
      i.d(t, { A: () => d });
      var n = i(47945),
        a = i(72042),
        o = i(97865),
        r = i(87689);
      function l(e) {
        var t = e.hostModel,
          i = t.getModel("emphasis");
        return {
          lineStyle: t.getModel("lineStyle").getLineStyle(),
          emphasisLineStyle: i.getModel(["lineStyle"]).getLineStyle(),
          blurLineStyle: t.getModel(["blur", "lineStyle"]).getLineStyle(),
          selectLineStyle: t.getModel(["select", "lineStyle"]).getLineStyle(),
          emphasisDisabled: i.get("disabled"),
          blurScope: i.get("blurScope"),
          focus: i.get("focus"),
          labelStatesModels: (0, r.lx)(t),
        };
      }
      function s(e) {
        return isNaN(e[0]) || isNaN(e[1]);
      }
      function u(e) {
        return e && !s(e[0]) && !s(e[1]);
      }
      const d = (function () {
        function e(e) {
          (this.group = new n.A()), (this._LineCtor = e || o.A);
        }
        return (
          (e.prototype.updateData = function (e) {
            var t = this;
            this._progressiveEls = null;
            var i = this,
              n = i.group,
              a = i._lineData;
            (i._lineData = e), a || n.removeAll();
            var o = l(e);
            e.diff(a)
              .add(function (i) {
                t._doAdd(e, i, o);
              })
              .update(function (i, n) {
                t._doUpdate(a, e, n, i, o);
              })
              .remove(function (e) {
                n.remove(a.getItemGraphicEl(e));
              })
              .execute();
          }),
          (e.prototype.updateLayout = function () {
            var e = this._lineData;
            e &&
              e.eachItemGraphicEl(function (t, i) {
                t.updateLayout(e, i);
              }, this);
          }),
          (e.prototype.incrementalPrepareUpdate = function (e) {
            (this._seriesScope = l(e)),
              (this._lineData = null),
              this.group.removeAll();
          }),
          (e.prototype.incrementalUpdate = function (e, t) {
            function i(e) {
              e.isGroup ||
                (function (e) {
                  return e.animators && e.animators.length > 0;
                })(e) ||
                ((e.incremental = !0),
                (e.ensureState("emphasis").hoverLayer = !0));
            }
            this._progressiveEls = [];
            for (var n = e.start; n < e.end; n++) {
              if (u(t.getItemLayout(n))) {
                var a = new this._LineCtor(t, n, this._seriesScope);
                a.traverse(i),
                  this.group.add(a),
                  t.setItemGraphicEl(n, a),
                  this._progressiveEls.push(a);
              }
            }
          }),
          (e.prototype.remove = function () {
            this.group.removeAll();
          }),
          (e.prototype.eachRendered = function (e) {
            a.traverseElements(this._progressiveEls || this.group, e);
          }),
          (e.prototype._doAdd = function (e, t, i) {
            if (u(e.getItemLayout(t))) {
              var n = new this._LineCtor(e, t, i);
              e.setItemGraphicEl(t, n), this.group.add(n);
            }
          }),
          (e.prototype._doUpdate = function (e, t, i, n, a) {
            var o = e.getItemGraphicEl(i);
            u(t.getItemLayout(n))
              ? (o ? o.updateData(t, n, a) : (o = new this._LineCtor(t, n, a)),
                t.setItemGraphicEl(n, o),
                this.group.add(o))
              : this.group.remove(o);
          }),
          e
        );
      })();
    },
    45288: (e, t, i) => {
      i.d(t, { a: () => H });
      var n = i(37292),
        a = i(70441),
        o = i(94026),
        r = i(19084),
        l = i(39253),
        s = i(72042),
        u = i(47945),
        d = i(41406),
        c = i(11552),
        h = i(85941),
        p = i(29379),
        g = i(3629),
        f = i(87689),
        y = i(70867),
        m = i(3569),
        v = i(34020),
        x = ["itemStyle", "borderWidth"],
        b = [
          { xy: "x", wh: "width", index: 0, posDesc: ["left", "right"] },
          { xy: "y", wh: "height", index: 1, posDesc: ["top", "bottom"] },
        ],
        S = new o.A();
      function _(e, t, i, n) {
        var o = e.getItemLayout(t),
          r = i.get("symbolRepeat"),
          l = i.get("symbolClip"),
          s = i.get("symbolPosition") || "start",
          u = ((i.get("symbolRotate") || 0) * Math.PI) / 180 || 0,
          d = i.get("symbolPatternSize") || 2,
          p = i.isAnimationEnabled(),
          g = {
            dataIndex: t,
            layout: o,
            itemModel: i,
            symbolType: e.getItemVisual(t, "symbol") || "circle",
            style: e.getItemVisual(t, "style"),
            symbolClip: l,
            symbolRepeat: r,
            symbolRepeatDirection: i.get("symbolRepeatDirection"),
            symbolPatternSize: d,
            rotation: u,
            animationModel: p ? i : null,
            hoverScale: p && i.get(["emphasis", "scale"]),
            z2: i.getShallow("z", !0) || 0,
          };
        !(function (e, t, i, n, o) {
          var r,
            l = n.valueDim,
            s = e.get("symbolBoundingData"),
            u = n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()),
            d = u.toGlobalCoord(u.dataToCoord(0)),
            c = 1 - +(i[l.wh] <= 0);
          if (a.isArray(s)) {
            var h = [A(u, s[0]) - d, A(u, s[1]) - d];
            h[1] < h[0] && h.reverse(), (r = h[c]);
          } else
            r =
              null != s
                ? A(u, s) - d
                : t
                ? n.coordSysExtent[l.index][c] - d
                : i[l.wh];
          (o.boundingLength = r), t && (o.repeatCutLength = i[l.wh]);
          var p = "x" === l.xy,
            g = u.inverse;
          o.pxSign =
            (p && !g) || (!p && g) ? (r >= 0 ? 1 : -1) : r > 0 ? 1 : -1;
        })(i, r, o, n, g),
          (function (e, t, i, n, o, r, l, s, u, d) {
            var c,
              p = u.valueDim,
              g = u.categoryDim,
              f = Math.abs(i[g.wh]),
              y = e.getItemVisual(t, "symbolSize");
            c = a.isArray(y)
              ? y.slice()
              : null == y
              ? ["100%", "100%"]
              : [y, y];
            (c[g.index] = (0, h.lo)(c[g.index], f)),
              (c[p.index] = (0, h.lo)(c[p.index], n ? f : Math.abs(r))),
              (d.symbolSize = c);
            var m = (d.symbolScale = [c[0] / s, c[1] / s]);
            m[p.index] *= (u.isHorizontal ? -1 : 1) * l;
          })(e, t, o, r, 0, g.boundingLength, g.pxSign, d, n, g),
          (function (e, t, i, n, a) {
            var o = e.get(x) || 0;
            o &&
              (S.attr({ scaleX: t[0], scaleY: t[1], rotation: i }),
              S.updateTransform(),
              (o /= S.getLineScale()),
              (o *= t[n.valueDim.index]));
            a.valueLineWidth = o || 0;
          })(i, g.symbolScale, u, n, g);
        var f = g.symbolSize,
          y = (0, c.hV)(i.get("symbolOffset"), f);
        return (
          (function (e, t, i, n, o, r, l, s, u, d, c, p) {
            var g = c.categoryDim,
              f = c.valueDim,
              y = p.pxSign,
              m = Math.max(t[f.index] + s, 0),
              v = m;
            if (n) {
              var x = Math.abs(u),
                b = a.retrieve(e.get("symbolMargin"), "15%") + "",
                S = !1;
              b.lastIndexOf("!") === b.length - 1 &&
                ((S = !0), (b = b.slice(0, b.length - 1)));
              var _ = (0, h.lo)(b, t[f.index]),
                A = Math.max(m + 2 * _, 0),
                w = S ? 0 : 2 * _,
                I = (0, h.kf)(n),
                M = I ? n : k((x + w) / A);
              (A =
                m + 2 * (_ = (x - M * m) / 2 / (S ? M : Math.max(M - 1, 1)))),
                (w = S ? 0 : 2 * _),
                I || "fixed" === n || (M = d ? k((Math.abs(d) + w) / A) : 0),
                (v = M * A - w),
                (p.repeatTimes = M),
                (p.symbolMargin = _);
            }
            var L = y * (v / 2),
              D = (p.pathPosition = []);
            (D[g.index] = i[g.wh] / 2),
              (D[f.index] = "start" === l ? L : "end" === l ? u - L : u / 2),
              r && ((D[0] += r[0]), (D[1] += r[1]));
            var C = (p.bundlePosition = []);
            (C[g.index] = i[g.xy]), (C[f.index] = i[f.xy]);
            var N = (p.barRectShape = a.extend({}, i));
            (N[f.wh] =
              y * Math.max(Math.abs(i[f.wh]), Math.abs(D[f.index] + L))),
              (N[g.wh] = i[g.wh]);
            var T = (p.clipShape = {});
            (T[g.xy] = -i[g.xy]),
              (T[g.wh] = c.ecSize[g.wh]),
              (T[f.xy] = 0),
              (T[f.wh] = i[f.wh]);
          })(
            i,
            f,
            o,
            r,
            0,
            y,
            s,
            g.valueLineWidth,
            g.boundingLength,
            g.repeatCutLength,
            n,
            g
          ),
          g
        );
      }
      function A(e, t) {
        return e.toGlobalCoord(e.dataToCoord(e.scale.parse(t)));
      }
      function w(e) {
        var t = e.symbolPatternSize,
          i = (0, c.v5)(e.symbolType, -t / 2, -t / 2, t, t);
        return (
          i.attr({ culling: !0 }),
          "image" !== i.type && i.setStyle({ strokeNoScale: !0 }),
          i
        );
      }
      function I(e, t, i, n) {
        var a = e.__pictorialBundle,
          o = i.symbolSize,
          r = i.valueLineWidth,
          l = i.pathPosition,
          s = t.valueDim,
          u = i.repeatTimes || 0,
          d = 0,
          c = o[t.valueDim.index] + r + 2 * i.symbolMargin;
        for (
          R(e, function (e) {
            (e.__pictorialAnimationIndex = d),
              (e.__pictorialRepeatTimes = u),
              d < u
                ? z(e, null, g(d), i, n)
                : z(e, null, { scaleX: 0, scaleY: 0 }, i, n, function () {
                    a.remove(e);
                  }),
              d++;
          });
          d < u;
          d++
        ) {
          var h = w(i);
          (h.__pictorialAnimationIndex = d),
            (h.__pictorialRepeatTimes = u),
            a.add(h);
          var p = g(d);
          z(
            h,
            { x: p.x, y: p.y, scaleX: 0, scaleY: 0 },
            { scaleX: p.scaleX, scaleY: p.scaleY, rotation: p.rotation },
            i,
            n
          );
        }
        function g(e) {
          var t = l.slice(),
            n = i.pxSign,
            a = e;
          return (
            ("start" === i.symbolRepeatDirection ? n > 0 : n < 0) &&
              (a = u - 1 - e),
            (t[s.index] = c * (a - u / 2 + 0.5) + l[s.index]),
            {
              x: t[0],
              y: t[1],
              scaleX: i.symbolScale[0],
              scaleY: i.symbolScale[1],
              rotation: i.rotation,
            }
          );
        }
      }
      function M(e, t, i, n) {
        var a = e.__pictorialBundle,
          o = e.__pictorialMainPath;
        o
          ? z(
              o,
              null,
              {
                x: i.pathPosition[0],
                y: i.pathPosition[1],
                scaleX: i.symbolScale[0],
                scaleY: i.symbolScale[1],
                rotation: i.rotation,
              },
              i,
              n
            )
          : ((o = e.__pictorialMainPath = w(i)),
            a.add(o),
            z(
              o,
              {
                x: i.pathPosition[0],
                y: i.pathPosition[1],
                scaleX: 0,
                scaleY: 0,
                rotation: i.rotation,
              },
              { scaleX: i.symbolScale[0], scaleY: i.symbolScale[1] },
              i,
              n
            ));
      }
      function L(e, t, i) {
        var n = a.extend({}, t.barRectShape),
          o = e.__pictorialBarRect;
        o
          ? z(o, null, { shape: n }, t, i)
          : (((o = e.__pictorialBarRect =
              new r.A({
                z2: 2,
                shape: n,
                silent: !0,
                style: {
                  stroke: "transparent",
                  fill: "transparent",
                  lineWidth: 0,
                },
              })).disableMorphing = !0),
            e.add(o));
      }
      function D(e, t, i, n) {
        if (i.symbolClip) {
          var o = e.__pictorialClipPath,
            u = a.extend({}, i.clipShape),
            d = t.valueDim,
            c = i.animationModel,
            h = i.dataIndex;
          if (o) l.oi(o, { shape: u }, c, h);
          else {
            (u[d.wh] = 0),
              (o = new r.A({ shape: u })),
              e.__pictorialBundle.setClipPath(o),
              (e.__pictorialClipPath = o);
            var p = {};
            (p[d.wh] = i.clipShape[d.wh]),
              s[n ? "updateProps" : "initProps"](o, { shape: p }, c, h);
          }
        }
      }
      function C(e, t) {
        var i = e.getItemModel(t);
        return (i.getAnimationDelayParams = N), (i.isAnimationEnabled = T), i;
      }
      function N(e) {
        return {
          index: e.__pictorialAnimationIndex,
          count: e.__pictorialRepeatTimes,
        };
      }
      function T() {
        return (
          this.parentModel.isAnimationEnabled() &&
          !!this.getShallow("animation")
        );
      }
      function P(e, t, i, n) {
        var a = new u.A(),
          o = new u.A();
        return (
          a.add(o),
          (a.__pictorialBundle = o),
          (o.x = i.bundlePosition[0]),
          (o.y = i.bundlePosition[1]),
          i.symbolRepeat ? I(a, t, i) : M(a, 0, i),
          L(a, i, n),
          D(a, t, i, n),
          (a.__pictorialShapeStr = V(e, i)),
          (a.__pictorialSymbolMeta = i),
          a
        );
      }
      function E(e, t, i, n) {
        var o = n.__pictorialBarRect;
        o && o.removeTextContent();
        var r = [];
        R(n, function (e) {
          r.push(e);
        }),
          n.__pictorialMainPath && r.push(n.__pictorialMainPath),
          n.__pictorialClipPath && (i = null),
          a.each(r, function (e) {
            l.Nz(e, { scaleX: 0, scaleY: 0 }, i, t, function () {
              n.parent && n.parent.remove(n);
            });
          }),
          e.setItemGraphicEl(t, null);
      }
      function V(e, t) {
        return [
          e.getItemVisual(t.dataIndex, "symbol") || "none",
          !!t.symbolRepeat,
          !!t.symbolClip,
        ].join(":");
      }
      function R(e, t, i) {
        a.each(e.__pictorialBundle.children(), function (n) {
          n !== e.__pictorialBarRect && t.call(i, n);
        });
      }
      function z(e, t, i, n, a, o) {
        t && e.attr(t),
          n.symbolClip && !a
            ? i && e.attr(i)
            : i &&
              s[a ? "updateProps" : "initProps"](
                e,
                i,
                n.animationModel,
                n.dataIndex,
                o
              );
      }
      function O(e, t, i) {
        var n = i.dataIndex,
          o = i.itemModel,
          r = o.getModel("emphasis"),
          l = r.getModel("itemStyle").getItemStyle(),
          s = o.getModel(["blur", "itemStyle"]).getItemStyle(),
          u = o.getModel(["select", "itemStyle"]).getItemStyle(),
          c = o.getShallow("cursor"),
          h = r.get("focus"),
          p = r.get("blurScope"),
          m = r.get("scale");
        R(e, function (e) {
          if (e instanceof y.Ay) {
            var t = e.style;
            e.useStyle(
              a.extend(
                {
                  image: t.image,
                  x: t.x,
                  y: t.y,
                  width: t.width,
                  height: t.height,
                },
                i.style
              )
            );
          } else e.useStyle(i.style);
          var n = e.ensureState("emphasis");
          (n.style = l),
            m && ((n.scaleX = 1.1 * e.scaleX), (n.scaleY = 1.1 * e.scaleY)),
            (e.ensureState("blur").style = s),
            (e.ensureState("select").style = u),
            c && (e.cursor = c),
            (e.z2 = i.z2);
        });
        var v = t.valueDim.posDesc[+(i.boundingLength > 0)],
          x = e.__pictorialBarRect;
        (x.ignoreClip = !0),
          (0, f.qM)(x, (0, f.lx)(o), {
            labelFetcher: t.seriesModel,
            labelDataIndex: n,
            defaultText: (0, g.i)(t.seriesModel.getData(), n),
            inheritColor: i.style.fill,
            defaultOpacity: i.style.opacity,
            defaultOutsidePosition: v,
          }),
          (0, d.Lm)(e, h, p, r.get("disabled"));
      }
      function k(e) {
        var t = Math.round(e);
        return Math.abs(e - t) < 1e-4 ? t : Math.ceil(e);
      }
      const G = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            var n = this.group,
              a = e.getData(),
              o = this._data,
              r = e.coordinateSystem,
              s = r.getBaseAxis().isHorizontal(),
              u = r.master.getRect(),
              d = {
                ecSize: { width: i.getWidth(), height: i.getHeight() },
                seriesModel: e,
                coordSys: r,
                coordSysExtent: [
                  [u.x, u.x + u.width],
                  [u.y, u.y + u.height],
                ],
                isHorizontal: s,
                valueDim: b[+s],
                categoryDim: b[1 - +s],
              };
            a.diff(o)
              .add(function (e) {
                if (a.hasValue(e)) {
                  var t = C(a, e),
                    i = _(a, e, t, d),
                    o = P(a, d, i);
                  a.setItemGraphicEl(e, o), n.add(o), O(o, d, i);
                }
              })
              .update(function (e, t) {
                var i = o.getItemGraphicEl(t);
                if (a.hasValue(e)) {
                  var r = C(a, e),
                    s = _(a, e, r, d),
                    u = V(a, s);
                  i &&
                    u !== i.__pictorialShapeStr &&
                    (n.remove(i), a.setItemGraphicEl(e, null), (i = null)),
                    i
                      ? (function (e, t, i) {
                          var n = i.animationModel,
                            a = i.dataIndex,
                            o = e.__pictorialBundle;
                          l.oi(
                            o,
                            { x: i.bundlePosition[0], y: i.bundlePosition[1] },
                            n,
                            a
                          ),
                            i.symbolRepeat ? I(e, t, i, !0) : M(e, t, i, !0);
                          L(e, i, !0), D(e, t, i, !0);
                        })(i, d, s)
                      : (i = P(a, d, s, !0)),
                    a.setItemGraphicEl(e, i),
                    (i.__pictorialSymbolMeta = s),
                    n.add(i),
                    O(i, d, s);
                } else n.remove(i);
              })
              .remove(function (e) {
                var t = o.getItemGraphicEl(e);
                t && E(o, e, t.__pictorialSymbolMeta.animationModel, t);
              })
              .execute();
            var c = e.get("clip", !0)
              ? (0, v.Ip)(e.coordinateSystem, !1, e)
              : null;
            return (
              c ? n.setClipPath(c) : n.removeClipPath(),
              (this._data = a),
              this.group
            );
          }),
          (t.prototype.remove = function (e, t) {
            var i = this.group,
              n = this._data;
            e.get("animation")
              ? n &&
                n.eachItemGraphicEl(function (t) {
                  E(n, (0, m.z)(t).dataIndex, e, t);
                })
              : i.removeAll();
          }),
          (t.type = "pictorialBar"),
          t
        );
      })(p.A);
      var B = i(37187),
        W = i(42953);
      const F = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (
            (i.type = t.type),
            (i.hasSymbolVisual = !0),
            (i.defaultSymbol = "roundRect"),
            i
          );
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getInitialData = function (t) {
            return (
              (t.stack = null),
              e.prototype.getInitialData.apply(this, arguments)
            );
          }),
          (t.type = "series.pictorialBar"),
          (t.dependencies = ["grid"]),
          (t.defaultOption = (0, W.G_)(B.A.defaultOption, {
            symbol: "circle",
            symbolSize: null,
            symbolRotate: null,
            symbolPosition: null,
            symbolOffset: null,
            symbolMargin: null,
            symbolRepeat: !1,
            symbolRepeatDirection: "end",
            symbolClip: !1,
            symbolBoundingData: null,
            symbolPatternSize: 400,
            barGap: "-100%",
            clip: !1,
            progressive: 0,
            emphasis: { scale: !1 },
            select: { itemStyle: { borderColor: "#212121" } },
          })),
          t
        );
      })(B.A);
      var Y = i(89777);
      function H(e) {
        e.registerChartView(G),
          e.registerSeriesModel(F),
          e.registerLayout(
            e.PRIORITY.VISUAL.LAYOUT,
            (0, a.curry)(Y.Zp, "pictorialBar")
          ),
          e.registerLayout(
            e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,
            (0, Y.KF)("pictorialBar")
          );
      }
    },
    46670: (e, t, i) => {
      i.d(t, { a: () => m });
      var n = i(37292),
        a = i(97681),
        o = i(11552),
        r = i(47945),
        l = i(41406),
        s = i(88667);
      function u(e, t) {
        var i = t.rippleEffectColor || t.color;
        e.eachChild(function (e) {
          e.attr({
            z: t.z,
            zlevel: t.zlevel,
            style: {
              stroke: "stroke" === t.brushType ? i : null,
              fill: "fill" === t.brushType ? i : null,
            },
          });
        });
      }
      var d = (function (e) {
        function t(t, i) {
          var n = e.call(this) || this,
            a = new s.A(t, i),
            o = new r.A();
          return n.add(a), n.add(o), n.updateData(t, i), n;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.stopEffectAnimation = function () {
            this.childAt(1).removeAll();
          }),
          (t.prototype.startEffectAnimation = function (e) {
            for (
              var t = e.symbolType,
                i = e.color,
                n = e.rippleNumber,
                a = this.childAt(1),
                r = 0;
              r < n;
              r++
            ) {
              var l = (0, o.v5)(t, -1, -1, 2, 2, i);
              l.attr({
                style: { strokeNoScale: !0 },
                z2: 99,
                silent: !0,
                scaleX: 0.5,
                scaleY: 0.5,
              });
              var s = (-r / n) * e.period + e.effectOffset;
              l
                .animate("", !0)
                .when(e.period, {
                  scaleX: e.rippleScale / 2,
                  scaleY: e.rippleScale / 2,
                })
                .delay(s)
                .start(),
                l
                  .animateStyle(!0)
                  .when(e.period, { opacity: 0 })
                  .delay(s)
                  .start(),
                a.add(l);
            }
            u(a, e);
          }),
          (t.prototype.updateEffectAnimation = function (e) {
            for (
              var t = this._effectCfg,
                i = this.childAt(1),
                n = ["symbolType", "period", "rippleScale", "rippleNumber"],
                a = 0;
              a < n.length;
              a++
            ) {
              var o = n[a];
              if (t[o] !== e[o])
                return (
                  this.stopEffectAnimation(), void this.startEffectAnimation(e)
                );
            }
            u(i, e);
          }),
          (t.prototype.highlight = function () {
            (0, l.HY)(this);
          }),
          (t.prototype.downplay = function () {
            (0, l.SD)(this);
          }),
          (t.prototype.getSymbolType = function () {
            var e = this.childAt(0);
            return e && e.getSymbolType();
          }),
          (t.prototype.updateData = function (e, t) {
            var i = this,
              n = e.hostModel;
            this.childAt(0).updateData(e, t);
            var a = this.childAt(1),
              r = e.getItemModel(t),
              s = e.getItemVisual(t, "symbol"),
              u = (0, o.xU)(e.getItemVisual(t, "symbolSize")),
              d = e.getItemVisual(t, "style"),
              c = d && d.fill,
              h = r.getModel("emphasis");
            a.setScale(u),
              a.traverse(function (e) {
                e.setStyle("fill", c);
              });
            var p = (0, o.hV)(e.getItemVisual(t, "symbolOffset"), u);
            p && ((a.x = p[0]), (a.y = p[1]));
            var g = e.getItemVisual(t, "symbolRotate");
            a.rotation = ((g || 0) * Math.PI) / 180 || 0;
            var f = {};
            (f.showEffectOn = n.get("showEffectOn")),
              (f.rippleScale = r.get(["rippleEffect", "scale"])),
              (f.brushType = r.get(["rippleEffect", "brushType"])),
              (f.period = 1e3 * r.get(["rippleEffect", "period"])),
              (f.effectOffset = t / e.count()),
              (f.z = n.getShallow("z") || 0),
              (f.zlevel = n.getShallow("zlevel") || 0),
              (f.symbolType = s),
              (f.color = c),
              (f.rippleEffectColor = r.get(["rippleEffect", "color"])),
              (f.rippleNumber = r.get(["rippleEffect", "number"])),
              "render" === f.showEffectOn
                ? (this._effectCfg
                    ? this.updateEffectAnimation(f)
                    : this.startEffectAnimation(f),
                  (this._effectCfg = f))
                : ((this._effectCfg = null),
                  this.stopEffectAnimation(),
                  (this.onHoverStateChange = function (e) {
                    "emphasis" === e
                      ? "render" !== f.showEffectOn && i.startEffectAnimation(f)
                      : "normal" === e &&
                        "render" !== f.showEffectOn &&
                        i.stopEffectAnimation();
                  })),
              (this._effectCfg = f),
              (0, l.Lm)(
                this,
                h.get("focus"),
                h.get("blurScope"),
                h.get("disabled")
              );
          }),
          (t.prototype.fadeOut = function (e) {
            e && e();
          }),
          t
        );
      })(r.A);
      const c = d;
      var h = i(44156),
        p = i(80349);
      const g = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.init = function () {
            this._symbolDraw = new a.A(c);
          }),
          (t.prototype.render = function (e, t, i) {
            var n = e.getData(),
              a = this._symbolDraw;
            a.updateData(n, { clipShape: this._getClipShape(e) }),
              this.group.add(a.group);
          }),
          (t.prototype._getClipShape = function (e) {
            var t = e.coordinateSystem,
              i = t && t.getArea && t.getArea();
            return e.get("clip", !0) ? i : null;
          }),
          (t.prototype.updateTransform = function (e, t, i) {
            var n = e.getData();
            this.group.dirty();
            var a = (0, p.A)("").reset(e, t, i);
            a.progress &&
              a.progress({ start: 0, end: n.count(), count: n.count() }, n),
              this._symbolDraw.updateLayout();
          }),
          (t.prototype._updateGroupTransform = function (e) {
            var t = e.coordinateSystem;
            t &&
              t.getRoamTransform &&
              ((this.group.transform = h.clone(t.getRoamTransform())),
              this.group.decomposeTransform());
          }),
          (t.prototype.remove = function (e, t) {
            this._symbolDraw && this._symbolDraw.remove(!0);
          }),
          (t.type = "effectScatter"),
          t
        );
      })(i(29379).A);
      var f = i(62362);
      const y = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i.hasSymbolVisual = !0), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getInitialData = function (e, t) {
            return (0, f.A)(null, this, { useEncodeDefaulter: !0 });
          }),
          (t.prototype.brushSelector = function (e, t, i) {
            return i.point(t.getItemLayout(e));
          }),
          (t.type = "series.effectScatter"),
          (t.dependencies = ["grid", "polar"]),
          (t.defaultOption = {
            coordinateSystem: "cartesian2d",
            z: 2,
            legendHoverLink: !0,
            effectType: "ripple",
            progressive: 0,
            showEffectOn: "render",
            clip: !0,
            rippleEffect: {
              period: 4,
              scale: 2.5,
              brushType: "fill",
              number: 3,
            },
            universalTransition: { divideShape: "clone" },
            symbolSize: 10,
          }),
          t
        );
      })(i(15230).A);
      function m(e) {
        e.registerChartView(g),
          e.registerSeriesModel(y),
          e.registerLayout((0, p.A)("effectScatter"));
      }
    },
    47423: (e, t, i) => {
      i.d(t, { bl: () => o, ev: () => l, mw: () => a, x5: () => r });
      var n = i(70441);
      function a(e, t, i) {
        if (e && n.indexOf(t, e.type) >= 0) {
          var a = i.getData().tree.root,
            o = e.targetNode;
          if ((n.isString(o) && (o = a.getNodeById(o)), o && a.contains(o)))
            return { node: o };
          var r = e.targetNodeId;
          if (null != r && (o = a.getNodeById(r))) return { node: o };
        }
      }
      function o(e) {
        for (var t = []; e; ) (e = e.parentNode) && t.push(e);
        return t.reverse();
      }
      function r(e, t) {
        var i = o(e);
        return n.indexOf(i, t) >= 0;
      }
      function l(e, t) {
        for (var i = []; e; ) {
          var n = e.dataIndex;
          i.push({ name: e.name, dataIndex: n, value: t.getRawValue(n) }),
            (e = e.parentNode);
        }
        return i.reverse(), i;
      }
    },
    48188: (e, t, i) => {
      i.d(t, { a: () => k });
      var n = i(37292),
        a = i(44763),
        o = i(47945),
        r = i(97865),
        l = i(70441),
        s = i(11552),
        u = i(22290),
        d = i(3686);
      const c = (function (e) {
        function t(t, i, n) {
          var a = e.call(this) || this;
          return a.add(a.createLine(t, i, n)), a._updateEffectSymbol(t, i), a;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.createLine = function (e, t, i) {
            return new r.A(e, t, i);
          }),
          (t.prototype._updateEffectSymbol = function (e, t) {
            var i = e.getItemModel(t).getModel("effect"),
              n = i.get("symbolSize"),
              a = i.get("symbol");
            l.isArray(n) || (n = [n, n]);
            var o = e.getItemVisual(t, "style"),
              r = i.get("color") || (o && o.stroke),
              u = this.childAt(1);
            this._symbolType !== a &&
              (this.remove(u),
              ((u = (0, s.v5)(a, -0.5, -0.5, 1, 1, r)).z2 = 100),
              (u.culling = !0),
              this.add(u)),
              u &&
                (u.setStyle("shadowColor", r),
                u.setStyle(i.getItemStyle(["color"])),
                (u.scaleX = n[0]),
                (u.scaleY = n[1]),
                u.setColor(r),
                (this._symbolType = a),
                (this._symbolScale = n),
                this._updateEffectAnimation(e, i, t));
          }),
          (t.prototype._updateEffectAnimation = function (e, t, i) {
            var n = this.childAt(1);
            if (n) {
              var a = e.getItemLayout(i),
                o = 1e3 * t.get("period"),
                r = t.get("loop"),
                s = t.get("roundTrip"),
                u = t.get("constantSpeed"),
                d = l.retrieve(t.get("delay"), function (t) {
                  return ((t / e.count()) * o) / 3;
                });
              if (
                ((n.ignore = !0),
                this._updateAnimationPoints(n, a),
                u > 0 && (o = (this._getLineLength(n) / u) * 1e3),
                o !== this._period || r !== this._loop || s !== this._roundTrip)
              ) {
                n.stopAnimation();
                var c = void 0;
                (c = l.isFunction(d) ? d(i) : d),
                  n.__t > 0 && (c = -o * n.__t),
                  this._animateSymbol(n, o, c, r, s);
              }
              (this._period = o), (this._loop = r), (this._roundTrip = s);
            }
          }),
          (t.prototype._animateSymbol = function (e, t, i, n, a) {
            if (t > 0) {
              e.__t = 0;
              var o = this,
                r = e
                  .animate("", n)
                  .when(a ? 2 * t : t, { __t: a ? 2 : 1 })
                  .delay(i)
                  .during(function () {
                    o._updateSymbolPosition(e);
                  });
              n ||
                r.done(function () {
                  o.remove(e);
                }),
                r.start();
            }
          }),
          (t.prototype._getLineLength = function (e) {
            return u.dist(e.__p1, e.__cp1) + u.dist(e.__cp1, e.__p2);
          }),
          (t.prototype._updateAnimationPoints = function (e, t) {
            (e.__p1 = t[0]),
              (e.__p2 = t[1]),
              (e.__cp1 = t[2] || [
                (t[0][0] + t[1][0]) / 2,
                (t[0][1] + t[1][1]) / 2,
              ]);
          }),
          (t.prototype.updateData = function (e, t, i) {
            this.childAt(0).updateData(e, t, i), this._updateEffectSymbol(e, t);
          }),
          (t.prototype._updateSymbolPosition = function (e) {
            var t = e.__p1,
              i = e.__p2,
              n = e.__cp1,
              a = e.__t < 1 ? e.__t : 2 - e.__t,
              o = [e.x, e.y],
              r = o.slice(),
              l = d.k3,
              s = d.z7;
            (o[0] = l(t[0], n[0], i[0], a)), (o[1] = l(t[1], n[1], i[1], a));
            var c =
                e.__t < 1 ? s(t[0], n[0], i[0], a) : s(i[0], n[0], t[0], 1 - a),
              h =
                e.__t < 1 ? s(t[1], n[1], i[1], a) : s(i[1], n[1], t[1], 1 - a);
            (e.rotation = -Math.atan2(h, c) - Math.PI / 2),
              ("line" !== this._symbolType &&
                "rect" !== this._symbolType &&
                "roundRect" !== this._symbolType) ||
                (void 0 !== e.__lastT && e.__lastT < e.__t
                  ? ((e.scaleY = 1.05 * u.dist(r, o)),
                    1 === a &&
                      ((o[0] = r[0] + (o[0] - r[0]) / 2),
                      (o[1] = r[1] + (o[1] - r[1]) / 2)))
                  : 1 === e.__lastT
                  ? (e.scaleY = 2 * u.dist(t, o))
                  : (e.scaleY = this._symbolScale[1])),
              (e.__lastT = e.__t),
              (e.ignore = !1),
              (e.x = o[0]),
              (e.y = o[1]);
          }),
          (t.prototype.updateLayout = function (e, t) {
            this.childAt(0).updateLayout(e, t);
            var i = e.getItemModel(t).getModel("effect");
            this._updateEffectAnimation(e, i, t);
          }),
          t
        );
      })(o.A);
      var h = i(32502),
        p = i(39253),
        g = i(41406),
        f = (function (e) {
          function t(t, i, n) {
            var a = e.call(this) || this;
            return a._createPolyline(t, i, n), a;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype._createPolyline = function (e, t, i) {
              var n = e.getItemLayout(t),
                a = new h.A({ shape: { points: n } });
              this.add(a), this._updateCommonStl(e, t, i);
            }),
            (t.prototype.updateData = function (e, t, i) {
              var n = e.hostModel,
                a = this.childAt(0),
                o = { shape: { points: e.getItemLayout(t) } };
              p.oi(a, o, n, t), this._updateCommonStl(e, t, i);
            }),
            (t.prototype._updateCommonStl = function (e, t, i) {
              var n = this.childAt(0),
                a = e.getItemModel(t),
                o = i && i.emphasisLineStyle,
                r = i && i.focus,
                l = i && i.blurScope,
                s = i && i.emphasisDisabled;
              if (!i || e.hasItemOption) {
                var u = a.getModel("emphasis");
                (o = u.getModel("lineStyle").getLineStyle()),
                  (s = u.get("disabled")),
                  (r = u.get("focus")),
                  (l = u.get("blurScope"));
              }
              n.useStyle(e.getItemVisual(t, "style")),
                (n.style.fill = null),
                (n.style.strokeNoScale = !0),
                (n.ensureState("emphasis").style = o),
                (0, g.Lm)(this, r, l, s);
            }),
            (t.prototype.updateLayout = function (e, t) {
              this.childAt(0).setShape("points", e.getItemLayout(t));
            }),
            t
          );
        })(o.A);
      const y = f;
      const m = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t._lastFrame = 0), (t._lastFramePercent = 0), t;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.createLine = function (e, t, i) {
            return new y(e, t, i);
          }),
          (t.prototype._updateAnimationPoints = function (e, t) {
            this._points = t;
            for (var i = [0], n = 0, a = 1; a < t.length; a++) {
              var o = t[a - 1],
                r = t[a];
              (n += u.dist(o, r)), i.push(n);
            }
            if (0 !== n) {
              for (a = 0; a < i.length; a++) i[a] /= n;
              (this._offsets = i), (this._length = n);
            } else this._length = 0;
          }),
          (t.prototype._getLineLength = function () {
            return this._length;
          }),
          (t.prototype._updateSymbolPosition = function (e) {
            var t = e.__t < 1 ? e.__t : 2 - e.__t,
              i = this._points,
              n = this._offsets,
              a = i.length;
            if (n) {
              var o,
                r = this._lastFrame;
              if (t < this._lastFramePercent) {
                for (o = Math.min(r + 1, a - 1); o >= 0 && !(n[o] <= t); o--);
                o = Math.min(o, a - 2);
              } else {
                for (o = r; o < a && !(n[o] > t); o++);
                o = Math.min(o - 1, a - 2);
              }
              var l = (t - n[o]) / (n[o + 1] - n[o]),
                s = i[o],
                u = i[o + 1];
              (e.x = s[0] * (1 - l) + l * u[0]),
                (e.y = s[1] * (1 - l) + l * u[1]);
              var d = e.__t < 1 ? u[0] - s[0] : s[0] - u[0],
                c = e.__t < 1 ? u[1] - s[1] : s[1] - u[1];
              (e.rotation = -Math.atan2(c, d) - Math.PI / 2),
                (this._lastFrame = o),
                (this._lastFramePercent = t),
                (e.ignore = !1);
            }
          }),
          t
        );
      })(c);
      var v = i(13171),
        x = i(70),
        b = i(79606),
        S = i(34612),
        _ = i(3569),
        A = function () {
          (this.polyline = !1), (this.curveness = 0), (this.segs = []);
        },
        w = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i._off = 0), (i.hoverDataIdx = -1), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.reset = function () {
              (this.notClear = !1), (this._off = 0);
            }),
            (t.prototype.getDefaultStyle = function () {
              return { stroke: "#000", fill: null };
            }),
            (t.prototype.getDefaultShape = function () {
              return new A();
            }),
            (t.prototype.buildPath = function (e, t) {
              var i,
                n = t.segs,
                a = t.curveness;
              if (t.polyline)
                for (i = this._off; i < n.length; ) {
                  var o = n[i++];
                  if (o > 0) {
                    e.moveTo(n[i++], n[i++]);
                    for (var r = 1; r < o; r++) e.lineTo(n[i++], n[i++]);
                  }
                }
              else
                for (i = this._off; i < n.length; ) {
                  var l = n[i++],
                    s = n[i++],
                    u = n[i++],
                    d = n[i++];
                  if ((e.moveTo(l, s), a > 0)) {
                    var c = (l + u) / 2 - (s - d) * a,
                      h = (s + d) / 2 - (u - l) * a;
                    e.quadraticCurveTo(c, h, u, d);
                  } else e.lineTo(u, d);
                }
              this.incremental && ((this._off = i), (this.notClear = !0));
            }),
            (t.prototype.findDataIndex = function (e, t) {
              var i = this.shape,
                n = i.segs,
                a = i.curveness,
                o = this.style.lineWidth;
              if (i.polyline)
                for (var r = 0, l = 0; l < n.length; ) {
                  var s = n[l++];
                  if (s > 0)
                    for (var u = n[l++], d = n[l++], c = 1; c < s; c++) {
                      var h = n[l++],
                        p = n[l++];
                      if (b.l(u, d, h, p, o, e, t)) return r;
                    }
                  r++;
                }
              else
                for (r = 0, l = 0; l < n.length; ) {
                  (u = n[l++]), (d = n[l++]), (h = n[l++]), (p = n[l++]);
                  if (a > 0) {
                    var g = (u + h) / 2 - (d - p) * a,
                      f = (d + p) / 2 - (h - u) * a;
                    if (S.l(u, d, g, f, h, p, o, e, t)) return r;
                  } else if (b.l(u, d, h, p, o, e, t)) return r;
                  r++;
                }
              return -1;
            }),
            (t.prototype.contain = function (e, t) {
              var i = this.transformCoordToLocal(e, t),
                n = this.getBoundingRect();
              return (
                (e = i[0]),
                (t = i[1]),
                n.contain(e, t)
                  ? (this.hoverDataIdx = this.findDataIndex(e, t)) >= 0
                  : ((this.hoverDataIdx = -1), !1)
              );
            }),
            (t.prototype.getBoundingRect = function () {
              var e = this._rect;
              if (!e) {
                for (
                  var t = this.shape.segs,
                    i = 1 / 0,
                    n = 1 / 0,
                    a = -1 / 0,
                    o = -1 / 0,
                    r = 0;
                  r < t.length;

                ) {
                  var l = t[r++],
                    s = t[r++];
                  (i = Math.min(l, i)),
                    (a = Math.max(l, a)),
                    (n = Math.min(s, n)),
                    (o = Math.max(s, o));
                }
                e = this._rect = new v.A(i, n, a, o);
              }
              return e;
            }),
            t
          );
        })(x.Ay);
      const I = (function () {
        function e() {
          this.group = new o.A();
        }
        return (
          (e.prototype.updateData = function (e) {
            this._clear();
            var t = this._create();
            t.setShape({ segs: e.getLayout("linesPoints") }),
              this._setCommon(t, e);
          }),
          (e.prototype.incrementalPrepareUpdate = function (e) {
            this.group.removeAll(), this._clear();
          }),
          (e.prototype.incrementalUpdate = function (e, t) {
            var i = this._newAdded[0],
              n = t.getLayout("linesPoints"),
              a = i && i.shape.segs;
            if (a && a.length < 2e4) {
              var o = a.length,
                r = new Float32Array(o + n.length);
              r.set(a), r.set(n, o), i.setShape({ segs: r });
            } else {
              this._newAdded = [];
              var l = this._create();
              (l.incremental = !0),
                l.setShape({ segs: n }),
                this._setCommon(l, t),
                (l.__startIndex = e.start);
            }
          }),
          (e.prototype.remove = function () {
            this._clear();
          }),
          (e.prototype.eachRendered = function (e) {
            this._newAdded[0] && e(this._newAdded[0]);
          }),
          (e.prototype._create = function () {
            var e = new w({ cursor: "default", ignoreCoarsePointer: !0 });
            return this._newAdded.push(e), this.group.add(e), e;
          }),
          (e.prototype._setCommon = function (e, t, i) {
            var n = t.hostModel;
            e.setShape({
              polyline: n.get("polyline"),
              curveness: n.get(["lineStyle", "curveness"]),
            }),
              e.useStyle(n.getModel("lineStyle").getLineStyle()),
              (e.style.strokeNoScale = !0);
            var a = t.getVisual("style");
            a && a.stroke && e.setStyle("stroke", a.stroke),
              e.setStyle("fill", null);
            var o = (0, _.z)(e);
            (o.seriesIndex = n.seriesIndex),
              e.on("mousemove", function (t) {
                o.dataIndex = null;
                var i = e.hoverDataIdx;
                i > 0 && (o.dataIndex = i + e.__startIndex);
              });
          }),
          (e.prototype._clear = function () {
            (this._newAdded = []), this.group.removeAll();
          }),
          e
        );
      })();
      const M = {
        seriesType: "lines",
        plan: (0, i(239).A)(),
        reset: function (e) {
          var t = e.coordinateSystem;
          if (t) {
            var i = e.get("polyline"),
              n = e.pipelineContext.large;
            return {
              progress: function (a, o) {
                var r = [];
                if (n) {
                  var l = void 0,
                    s = a.end - a.start;
                  if (i) {
                    for (var u = 0, d = a.start; d < a.end; d++)
                      u += e.getLineCoordsCount(d);
                    l = new Float32Array(s + 2 * u);
                  } else l = new Float32Array(4 * s);
                  var c = 0,
                    h = [];
                  for (d = a.start; d < a.end; d++) {
                    var p = e.getLineCoords(d, r);
                    i && (l[c++] = p);
                    for (var g = 0; g < p; g++)
                      (h = t.dataToPoint(r[g], !1, h)),
                        (l[c++] = h[0]),
                        (l[c++] = h[1]);
                  }
                  o.setLayout("linesPoints", l);
                } else
                  for (d = a.start; d < a.end; d++) {
                    var f = o.getItemModel(d),
                      y = ((p = e.getLineCoords(d, r)), []);
                    if (i)
                      for (var m = 0; m < p; m++) y.push(t.dataToPoint(r[m]));
                    else {
                      (y[0] = t.dataToPoint(r[0])),
                        (y[1] = t.dataToPoint(r[1]));
                      var v = f.get(["lineStyle", "curveness"]);
                      +v &&
                        (y[2] = [
                          (y[0][0] + y[1][0]) / 2 - (y[0][1] - y[1][1]) * v,
                          (y[0][1] + y[1][1]) / 2 - (y[1][0] - y[0][0]) * v,
                        ]);
                    }
                    o.setItemLayout(d, y);
                  }
              },
            };
          }
        },
      };
      var L = i(34020);
      const D = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            var n = e.getData(),
              a = this._updateLineDraw(n, e),
              o = e.get("zlevel"),
              r = e.get(["effect", "trailLength"]),
              l = i.getZr(),
              s = "svg" === l.painter.getType();
            s || l.painter.getLayer(o).clear(!0),
              null == this._lastZlevel ||
                s ||
                l.configLayer(this._lastZlevel, { motionBlur: !1 }),
              this._showEffect(e) &&
                r > 0 &&
                (s ||
                  l.configLayer(o, {
                    motionBlur: !0,
                    lastFrameAlpha: Math.max(Math.min(r / 10 + 0.9, 1), 0),
                  })),
              a.updateData(n);
            var u = e.get("clip", !0) && (0, L.Ip)(e.coordinateSystem, !1, e);
            u ? this.group.setClipPath(u) : this.group.removeClipPath(),
              (this._lastZlevel = o),
              (this._finished = !0);
          }),
          (t.prototype.incrementalPrepareRender = function (e, t, i) {
            var n = e.getData();
            this._updateLineDraw(n, e).incrementalPrepareUpdate(n),
              this._clearLayer(i),
              (this._finished = !1);
          }),
          (t.prototype.incrementalRender = function (e, t, i) {
            this._lineDraw.incrementalUpdate(e, t.getData()),
              (this._finished = e.end === t.getData().count());
          }),
          (t.prototype.eachRendered = function (e) {
            this._lineDraw && this._lineDraw.eachRendered(e);
          }),
          (t.prototype.updateTransform = function (e, t, i) {
            var n = e.getData(),
              a = e.pipelineContext;
            if (!this._finished || a.large || a.progressiveRender)
              return { update: !0 };
            var o = M.reset(e, t, i);
            o.progress &&
              o.progress({ start: 0, end: n.count(), count: n.count() }, n),
              this._lineDraw.updateLayout(),
              this._clearLayer(i);
          }),
          (t.prototype._updateLineDraw = function (e, t) {
            var i = this._lineDraw,
              n = this._showEffect(t),
              o = !!t.get("polyline"),
              l = t.pipelineContext.large;
            return (
              (i &&
                n === this._hasEffet &&
                o === this._isPolyline &&
                l === this._isLargeDraw) ||
                (i && i.remove(),
                (i = this._lineDraw =
                  l ? new I() : new a.A(o ? (n ? m : y) : n ? c : r.A)),
                (this._hasEffet = n),
                (this._isPolyline = o),
                (this._isLargeDraw = l)),
              this.group.add(i.group),
              i
            );
          }),
          (t.prototype._showEffect = function (e) {
            return !!e.get(["effect", "show"]);
          }),
          (t.prototype._clearLayer = function (e) {
            var t = e.getZr();
            "svg" === t.painter.getType() ||
              null == this._lastZlevel ||
              t.painter.getLayer(this._lastZlevel).clear(!0);
          }),
          (t.prototype.remove = function (e, t) {
            this._lineDraw && this._lineDraw.remove(),
              (this._lineDraw = null),
              this._clearLayer(t);
          }),
          (t.prototype.dispose = function (e, t) {
            this.remove(e, t);
          }),
          (t.type = "lines"),
          t
        );
      })(i(29379).A);
      var C = i(15230),
        N = i(89033),
        T = i(78754),
        P = "undefined" === typeof Uint32Array ? Array : Uint32Array,
        E = "undefined" === typeof Float64Array ? Array : Float64Array;
      function V(e) {
        var t = e.data;
        t &&
          t[0] &&
          t[0][0] &&
          t[0][0].coord &&
          (e.data = (0, l.map)(t, function (e) {
            var t = { coords: [e[0].coord, e[1].coord] };
            return (
              e[0].name && (t.fromName = e[0].name),
              e[1].name && (t.toName = e[1].name),
              (0, l.mergeAll)([t, e[0], e[1]])
            );
          }));
      }
      const R = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (
            (i.type = t.type),
            (i.visualStyleAccessPath = "lineStyle"),
            (i.visualDrawType = "stroke"),
            i
          );
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.init = function (t) {
            (t.data = t.data || []), V(t);
            var i = this._processFlatCoordsArray(t.data);
            (this._flatCoords = i.flatCoords),
              (this._flatCoordsOffset = i.flatCoordsOffset),
              i.flatCoords && (t.data = new Float32Array(i.count)),
              e.prototype.init.apply(this, arguments);
          }),
          (t.prototype.mergeOption = function (t) {
            if ((V(t), t.data)) {
              var i = this._processFlatCoordsArray(t.data);
              (this._flatCoords = i.flatCoords),
                (this._flatCoordsOffset = i.flatCoordsOffset),
                i.flatCoords && (t.data = new Float32Array(i.count));
            }
            e.prototype.mergeOption.apply(this, arguments);
          }),
          (t.prototype.appendData = function (e) {
            var t = this._processFlatCoordsArray(e.data);
            t.flatCoords &&
              (this._flatCoords
                ? ((this._flatCoords = (0, l.concatArray)(
                    this._flatCoords,
                    t.flatCoords
                  )),
                  (this._flatCoordsOffset = (0, l.concatArray)(
                    this._flatCoordsOffset,
                    t.flatCoordsOffset
                  )))
                : ((this._flatCoords = t.flatCoords),
                  (this._flatCoordsOffset = t.flatCoordsOffset)),
              (e.data = new Float32Array(t.count))),
              this.getRawData().appendData(e.data);
          }),
          (t.prototype._getCoordsFromItemModel = function (e) {
            var t = this.getData().getItemModel(e);
            return t.option instanceof Array
              ? t.option
              : t.getShallow("coords");
          }),
          (t.prototype.getLineCoordsCount = function (e) {
            return this._flatCoordsOffset
              ? this._flatCoordsOffset[2 * e + 1]
              : this._getCoordsFromItemModel(e).length;
          }),
          (t.prototype.getLineCoords = function (e, t) {
            if (this._flatCoordsOffset) {
              for (
                var i = this._flatCoordsOffset[2 * e],
                  n = this._flatCoordsOffset[2 * e + 1],
                  a = 0;
                a < n;
                a++
              )
                (t[a] = t[a] || []),
                  (t[a][0] = this._flatCoords[i + 2 * a]),
                  (t[a][1] = this._flatCoords[i + 2 * a + 1]);
              return n;
            }
            var o = this._getCoordsFromItemModel(e);
            for (a = 0; a < o.length; a++)
              (t[a] = t[a] || []), (t[a][0] = o[a][0]), (t[a][1] = o[a][1]);
            return o.length;
          }),
          (t.prototype._processFlatCoordsArray = function (e) {
            var t = 0;
            if (
              (this._flatCoords && (t = this._flatCoords.length),
              (0, l.isNumber)(e[0]))
            ) {
              for (
                var i = e.length,
                  n = new P(i),
                  a = new E(i),
                  o = 0,
                  r = 0,
                  s = 0,
                  u = 0;
                u < i;

              ) {
                s++;
                var d = e[u++];
                (n[r++] = o + t), (n[r++] = d);
                for (var c = 0; c < d; c++) {
                  var h = e[u++],
                    p = e[u++];
                  (a[o++] = h), (a[o++] = p);
                }
              }
              return {
                flatCoordsOffset: new Uint32Array(n.buffer, 0, r),
                flatCoords: a,
                count: s,
              };
            }
            return {
              flatCoordsOffset: null,
              flatCoords: null,
              count: e.length,
            };
          }),
          (t.prototype.getInitialData = function (e, t) {
            var i = new N.A(["value"], this);
            return (
              (i.hasItemOption = !1),
              i.initData(e.data, [], function (e, t, n, a) {
                if (e instanceof Array) return NaN;
                i.hasItemOption = !0;
                var o = e.value;
                return null != o ? (o instanceof Array ? o[a] : o) : void 0;
              }),
              i
            );
          }),
          (t.prototype.formatTooltip = function (e, t, i) {
            var n = this.getData().getItemModel(e),
              a = n.get("name");
            if (a) return a;
            var o = n.get("fromName"),
              r = n.get("toName"),
              l = [];
            return (
              null != o && l.push(o),
              null != r && l.push(r),
              (0, T.Qx)("nameValue", { name: l.join(" > ") })
            );
          }),
          (t.prototype.preventIncremental = function () {
            return !!this.get(["effect", "show"]);
          }),
          (t.prototype.getProgressive = function () {
            var e = this.option.progressive;
            return null == e
              ? this.option.large
                ? 1e4
                : this.get("progressive")
              : e;
          }),
          (t.prototype.getProgressiveThreshold = function () {
            var e = this.option.progressiveThreshold;
            return null == e
              ? this.option.large
                ? 2e4
                : this.get("progressiveThreshold")
              : e;
          }),
          (t.prototype.getZLevelKey = function () {
            var e = this.getModel("effect"),
              t = e.get("trailLength");
            return this.getData().count() > this.getProgressiveThreshold()
              ? this.id
              : e.get("show") && t > 0
              ? t + ""
              : "";
          }),
          (t.type = "series.lines"),
          (t.dependencies = ["grid", "polar", "geo", "calendar"]),
          (t.defaultOption = {
            coordinateSystem: "geo",
            z: 2,
            legendHoverLink: !0,
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: ["none", "none"],
            symbolSize: [10, 10],
            geoIndex: 0,
            effect: {
              show: !1,
              period: 4,
              constantSpeed: 0,
              symbol: "circle",
              symbolSize: 3,
              loop: !0,
              trailLength: 0.2,
            },
            large: !1,
            largeThreshold: 2e3,
            polyline: !1,
            clip: !0,
            label: { show: !1, position: "end" },
            lineStyle: { opacity: 0.5 },
          }),
          t
        );
      })(C.A);
      function z(e) {
        return e instanceof Array || (e = [e, e]), e;
      }
      const O = {
        seriesType: "lines",
        reset: function (e) {
          var t = z(e.get("symbol")),
            i = z(e.get("symbolSize")),
            n = e.getData();
          return (
            n.setVisual("fromSymbol", t && t[0]),
            n.setVisual("toSymbol", t && t[1]),
            n.setVisual("fromSymbolSize", i && i[0]),
            n.setVisual("toSymbolSize", i && i[1]),
            {
              dataEach: n.hasItemOption
                ? function (e, t) {
                    var i = e.getItemModel(t),
                      n = z(i.getShallow("symbol", !0)),
                      a = z(i.getShallow("symbolSize", !0));
                    n[0] && e.setItemVisual(t, "fromSymbol", n[0]),
                      n[1] && e.setItemVisual(t, "toSymbol", n[1]),
                      a[0] && e.setItemVisual(t, "fromSymbolSize", a[0]),
                      a[1] && e.setItemVisual(t, "toSymbolSize", a[1]);
                  }
                : null,
            }
          );
        },
      };
      function k(e) {
        e.registerChartView(D),
          e.registerSeriesModel(R),
          e.registerLayout(M),
          e.registerVisual(O);
      }
    },
    48366: (e, t, i) => {
      i.d(t, { a: () => fe });
      var n = i(70441);
      function a(e) {
        var t = e.findComponents({ mainType: "legend" });
        t &&
          t.length &&
          e.eachSeriesByType("graph", function (e) {
            var i = e.getCategoriesData(),
              a = e.getGraph().data,
              o = i.mapArray(i.getName);
            a.filterSelf(function (e) {
              var i = a.getItemModel(e).getShallow("category");
              if (null != i) {
                (0, n.isNumber)(i) && (i = o[i]);
                for (var r = 0; r < t.length; r++)
                  if (!t[r].isSelected(i)) return !1;
              }
              return !0;
            });
          });
      }
      function o(e) {
        var t = {};
        e.eachSeriesByType("graph", function (e) {
          var i = e.getCategoriesData(),
            a = e.getData(),
            o = {};
          i.each(function (n) {
            var a = i.getName(n);
            o["ec-" + a] = n;
            var r = i.getItemModel(n),
              l = r.getModel("itemStyle").getItemStyle();
            l.fill || (l.fill = e.getColorFromPalette(a, t)),
              i.setItemVisual(n, "style", l);
            for (
              var s = ["symbol", "symbolSize", "symbolKeepAspect"], u = 0;
              u < s.length;
              u++
            ) {
              var d = r.getShallow(s[u], !0);
              null != d && i.setItemVisual(n, s[u], d);
            }
          }),
            i.count() &&
              a.each(function (e) {
                var t = a.getItemModel(e).getShallow("category");
                if (null != t) {
                  (0, n.isString)(t) && (t = o["ec-" + t]);
                  var r = i.getItemVisual(t, "style"),
                    l = a.ensureUniqueItemVisual(e, "style");
                  (0, n.extend)(l, r);
                  for (
                    var s = ["symbol", "symbolSize", "symbolKeepAspect"], u = 0;
                    u < s.length;
                    u++
                  )
                    a.setItemVisual(e, s[u], i.getItemVisual(t, s[u]));
                }
              });
        });
      }
      function r(e) {
        return e instanceof Array || (e = [e, e]), e;
      }
      function l(e) {
        e.eachSeriesByType("graph", function (e) {
          var t = e.getGraph(),
            i = e.getEdgeData(),
            a = r(e.get("edgeSymbol")),
            o = r(e.get("edgeSymbolSize"));
          i.setVisual("fromSymbol", a && a[0]),
            i.setVisual("toSymbol", a && a[1]),
            i.setVisual("fromSymbolSize", o && o[0]),
            i.setVisual("toSymbolSize", o && o[1]),
            i.setVisual("style", e.getModel("lineStyle").getLineStyle()),
            i.each(function (e) {
              var a = i.getItemModel(e),
                o = t.getEdgeByIndex(e),
                l = r(a.getShallow("symbol", !0)),
                s = r(a.getShallow("symbolSize", !0)),
                u = a.getModel("lineStyle").getLineStyle(),
                d = i.ensureUniqueItemVisual(e, "style");
              switch (((0, n.extend)(d, u), d.stroke)) {
                case "source":
                  var c = o.node1.getVisual("style");
                  d.stroke = c && c.fill;
                  break;
                case "target":
                  c = o.node2.getVisual("style");
                  d.stroke = c && c.fill;
              }
              l[0] && o.setVisual("fromSymbol", l[0]),
                l[1] && o.setVisual("toSymbol", l[1]),
                s[0] && o.setVisual("fromSymbolSize", s[0]),
                s[1] && o.setVisual("toSymbolSize", s[1]);
            });
        });
      }
      var s = i(22290),
        u = "--\x3e",
        d = function (e) {
          return e.get("autoCurveness") || null;
        },
        c = function (e, t) {
          var i = d(e),
            a = 20,
            o = [];
          if (n.isNumber(i)) a = i;
          else if (n.isArray(i)) return void (e.__curvenessList = i);
          t > a && (a = t);
          var r = a % 2 ? a + 2 : a + 3;
          o = [];
          for (var l = 0; l < r; l++)
            o.push(((l % 2 ? l + 1 : l) / 10) * (l % 2 ? -1 : 1));
          e.__curvenessList = o;
        },
        h = function (e, t, i) {
          var n = [e.id, e.dataIndex].join("."),
            a = [t.id, t.dataIndex].join(".");
          return [i.uid, n, a].join(u);
        },
        p = function (e) {
          var t = e.split(u);
          return [t[0], t[2], t[1]].join(u);
        },
        g = function (e, t) {
          var i = h(e.node1, e.node2, t);
          return t.__edgeMap[i];
        },
        f = function (e, t) {
          return y(h(e.node1, e.node2, t), t) + y(h(e.node2, e.node1, t), t);
        },
        y = function (e, t) {
          var i = t.__edgeMap;
          return i[e] ? i[e].length : 0;
        };
      function m(e, t, i, a) {
        var o = d(t),
          r = n.isArray(o);
        if (!o) return null;
        var l = g(e, t);
        if (!l) return null;
        for (var s = -1, u = 0; u < l.length; u++)
          if (l[u] === i) {
            s = u;
            break;
          }
        var m = f(e, t);
        c(t, m), (e.lineStyle = e.lineStyle || {});
        var v = h(e.node1, e.node2, t),
          x = t.__curvenessList,
          b = r || m % 2 ? 0 : 1;
        if (l.isForward) return x[b + s];
        var S = p(v),
          _ = y(S, t),
          A = x[s + _ + b];
        return a
          ? r
            ? o && 0 === o[0]
              ? (_ + b) % 2
                ? A
                : -A
              : ((_ % 2 ? 0 : 1) + b) % 2
              ? A
              : -A
            : (_ + b) % 2
            ? A
            : -A
          : x[s + _ + b];
      }
      function v(e) {
        var t = e.coordinateSystem;
        if (!t || "view" === t.type) {
          var i = e.getGraph();
          i.eachNode(function (e) {
            var t = e.getModel();
            e.setLayout([+t.get("x"), +t.get("y")]);
          }),
            x(i, e);
        }
      }
      function x(e, t) {
        e.eachEdge(function (e, i) {
          var a = n.retrieve3(
              e.getModel().get(["lineStyle", "curveness"]),
              -m(e, t, i, !0),
              0
            ),
            o = s.clone(e.node1.getLayout()),
            r = s.clone(e.node2.getLayout()),
            l = [o, r];
          +a &&
            l.push([
              (o[0] + r[0]) / 2 - (o[1] - r[1]) * a,
              (o[1] + r[1]) / 2 - (r[0] - o[0]) * a,
            ]),
            e.setLayout(l);
        });
      }
      function b(e, t) {
        e.eachSeriesByType("graph", function (e) {
          var t = e.get("layout"),
            i = e.coordinateSystem;
          if (i && "view" !== i.type) {
            var a = e.getData(),
              o = [];
            (0, n.each)(i.dimensions, function (e) {
              o = o.concat(a.mapDimensionsAll(e));
            });
            for (var r = 0; r < a.count(); r++) {
              for (var l = [], s = !1, u = 0; u < o.length; u++) {
                var d = a.get(o[u], r);
                isNaN(d) || (s = !0), l.push(d);
              }
              s
                ? a.setItemLayout(r, i.dataToPoint(l))
                : a.setItemLayout(r, [NaN, NaN]);
            }
            x(a.graph, e);
          } else (t && "none" !== t) || v(e);
        });
      }
      function S(e) {
        var t = e.coordinateSystem;
        if ("view" !== t.type) return 1;
        var i = e.option.nodeScaleRatio,
          n = t.scaleX;
        return ((t.getZoom() - 1) * i + 1) / n;
      }
      function _(e) {
        var t = e.getVisual("symbolSize");
        return t instanceof Array && (t = (t[0] + t[1]) / 2), +t;
      }
      var A = Math.PI,
        w = [];
      function I(e, t, i, a) {
        var o = e.coordinateSystem;
        if (!o || "view" === o.type) {
          var r = o.getBoundingRect(),
            l = e.getData(),
            u = l.graph,
            d = r.width / 2 + r.x,
            c = r.height / 2 + r.y,
            h = Math.min(r.width, r.height) / 2,
            p = l.count();
          if ((l.setLayout({ cx: d, cy: c }), p)) {
            if (i) {
              var g = o.pointToData(a),
                f = g[0],
                y = g[1],
                v = [f - d, y - c];
              s.normalize(v, v),
                s.scale(v, v, h),
                i.setLayout([d + v[0], c + v[1]], !0),
                L(i, e.get(["circular", "rotateLabel"]), d, c);
            }
            M[t](e, u, l, h, d, c, p),
              u.eachEdge(function (t, i) {
                var a,
                  o = n.retrieve3(
                    t.getModel().get(["lineStyle", "curveness"]),
                    m(t, e, i),
                    0
                  ),
                  r = s.clone(t.node1.getLayout()),
                  l = s.clone(t.node2.getLayout()),
                  u = (r[0] + l[0]) / 2,
                  h = (r[1] + l[1]) / 2;
                +o && (a = [d * (o *= 3) + u * (1 - o), c * o + h * (1 - o)]),
                  t.setLayout([r, l, a]);
              });
          }
        }
      }
      var M = {
        value: function (e, t, i, n, a, o, r) {
          var l = 0,
            s = i.getSum("value"),
            u = (2 * Math.PI) / (s || r);
          t.eachNode(function (e) {
            var t = e.getValue("value"),
              i = (u * (s ? t : 1)) / 2;
            (l += i),
              e.setLayout([n * Math.cos(l) + a, n * Math.sin(l) + o]),
              (l += i);
          });
        },
        symbolSize: function (e, t, i, n, a, o, r) {
          var l = 0;
          w.length = r;
          var s = S(e);
          t.eachNode(function (e) {
            var t = _(e);
            isNaN(t) && (t = 2), t < 0 && (t = 0), (t *= s);
            var i = Math.asin(t / 2 / n);
            isNaN(i) && (i = A / 2), (w[e.dataIndex] = i), (l += 2 * i);
          });
          var u = (2 * A - l) / r / 2,
            d = 0;
          t.eachNode(function (e) {
            var t = u + w[e.dataIndex];
            (d += t),
              (!e.getLayout() || !e.getLayout().fixed) &&
                e.setLayout([n * Math.cos(d) + a, n * Math.sin(d) + o]),
              (d += t);
          });
        },
      };
      function L(e, t, i, a) {
        var o = e.getGraphicEl();
        if (o) {
          var r = e.getModel().get(["label", "rotate"]) || 0,
            l = o.getSymbolPath();
          if (t) {
            var s = e.getLayout(),
              u = Math.atan2(s[1] - a, s[0] - i);
            u < 0 && (u = 2 * Math.PI + u);
            var d = s[0] < i;
            d && (u -= Math.PI);
            var c = d ? "left" : "right";
            l.setTextConfig({ rotation: -u, position: c, origin: "center" });
            var h = l.ensureState("emphasis");
            n.extend(h.textConfig || (h.textConfig = {}), { position: c });
          } else l.setTextConfig({ rotation: (r *= Math.PI / 180) });
        }
      }
      function D(e) {
        e.eachSeriesByType("graph", function (e) {
          "circular" === e.get("layout") && I(e, "symbolSize");
        });
      }
      var C = s.scaleAndAdd;
      var N = i(85941);
      function T(e) {
        e.eachSeriesByType("graph", function (e) {
          var t = e.coordinateSystem;
          if (!t || "view" === t.type)
            if ("force" === e.get("layout")) {
              var i = e.preservedPoints || {},
                a = e.getGraph(),
                o = a.data,
                r = a.edgeData,
                l = e.getModel("force"),
                u = l.get("initLayout");
              e.preservedPoints
                ? o.each(function (e) {
                    var t = o.getId(e);
                    o.setItemLayout(e, i[t] || [NaN, NaN]);
                  })
                : u && "none" !== u
                ? "circular" === u && I(e, "value")
                : v(e);
              var d = o.getDataExtent("value"),
                c = r.getDataExtent("value"),
                h = l.get("repulsion"),
                p = l.get("edgeLength"),
                g = n.isArray(h) ? h : [h, h],
                f = n.isArray(p) ? p : [p, p];
              f = [f[1], f[0]];
              var y = o.mapArray("value", function (e, t) {
                  var i = o.getItemLayout(t),
                    n = (0, N.Cb)(e, d, g);
                  return (
                    isNaN(n) && (n = (g[0] + g[1]) / 2),
                    {
                      w: n,
                      rep: n,
                      fixed: o.getItemModel(t).get("fixed"),
                      p: !i || isNaN(i[0]) || isNaN(i[1]) ? null : i,
                    }
                  );
                }),
                x = r.mapArray("value", function (t, i) {
                  var o = a.getEdgeByIndex(i),
                    r = (0, N.Cb)(t, c, f);
                  isNaN(r) && (r = (f[0] + f[1]) / 2);
                  var l = o.getModel(),
                    s = n.retrieve3(
                      o.getModel().get(["lineStyle", "curveness"]),
                      -m(o, e, i, !0),
                      0
                    );
                  return {
                    n1: y[o.node1.dataIndex],
                    n2: y[o.node2.dataIndex],
                    d: r,
                    curveness: s,
                    ignoreForceLayout: l.get("ignoreForceLayout"),
                  };
                }),
                b = t.getBoundingRect(),
                S = (function (e, t, i) {
                  for (
                    var n = e,
                      a = t,
                      o = i.rect,
                      r = o.width,
                      l = o.height,
                      u = [o.x + r / 2, o.y + l / 2],
                      d = null == i.gravity ? 0.1 : i.gravity,
                      c = 0;
                    c < n.length;
                    c++
                  ) {
                    var h = n[c];
                    h.p ||
                      (h.p = s.create(
                        r * (Math.random() - 0.5) + u[0],
                        l * (Math.random() - 0.5) + u[1]
                      )),
                      (h.pp = s.clone(h.p)),
                      (h.edges = null);
                  }
                  var p,
                    g,
                    f = null == i.friction ? 0.6 : i.friction,
                    y = f;
                  return {
                    warmUp: function () {
                      y = 0.8 * f;
                    },
                    setFixed: function (e) {
                      n[e].fixed = !0;
                    },
                    setUnfixed: function (e) {
                      n[e].fixed = !1;
                    },
                    beforeStep: function (e) {
                      p = e;
                    },
                    afterStep: function (e) {
                      g = e;
                    },
                    step: function (e) {
                      p && p(n, a);
                      for (var t = [], i = n.length, o = 0; o < a.length; o++) {
                        var r = a[o];
                        if (!r.ignoreForceLayout) {
                          var l = r.n1,
                            c = r.n2;
                          s.sub(t, c.p, l.p);
                          var h = s.len(t) - r.d,
                            f = c.w / (l.w + c.w);
                          isNaN(f) && (f = 0),
                            s.normalize(t, t),
                            !l.fixed && C(l.p, l.p, t, f * h * y),
                            !c.fixed && C(c.p, c.p, t, -(1 - f) * h * y);
                        }
                      }
                      for (o = 0; o < i; o++)
                        (b = n[o]).fixed ||
                          (s.sub(t, u, b.p), C(b.p, b.p, t, d * y));
                      for (o = 0; o < i; o++) {
                        l = n[o];
                        for (var m = o + 1; m < i; m++) {
                          (c = n[m]),
                            s.sub(t, c.p, l.p),
                            0 === (h = s.len(t)) &&
                              (s.set(
                                t,
                                Math.random() - 0.5,
                                Math.random() - 0.5
                              ),
                              (h = 1));
                          var v = (l.rep + c.rep) / h / h;
                          !l.fixed && C(l.pp, l.pp, t, v),
                            !c.fixed && C(c.pp, c.pp, t, -v);
                        }
                      }
                      var x = [];
                      for (o = 0; o < i; o++) {
                        var b;
                        (b = n[o]).fixed ||
                          (s.sub(x, b.p, b.pp),
                          C(b.p, b.p, x, y),
                          s.copy(b.pp, b.p));
                      }
                      var S = (y *= 0.992) < 0.01;
                      g && g(n, a, S), e && e(S);
                    },
                  };
                })(y, x, {
                  rect: b,
                  gravity: l.get("gravity"),
                  friction: l.get("friction"),
                });
              S.beforeStep(function (e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                  e[i].fixed && s.copy(e[i].p, a.getNodeByIndex(i).getLayout());
              }),
                S.afterStep(function (e, t, n) {
                  for (var r = 0, l = e.length; r < l; r++)
                    e[r].fixed || a.getNodeByIndex(r).setLayout(e[r].p),
                      (i[o.getId(r)] = e[r].p);
                  for (r = 0, l = t.length; r < l; r++) {
                    var u = t[r],
                      d = a.getEdgeByIndex(r),
                      c = u.n1.p,
                      h = u.n2.p,
                      p = d.getLayout();
                    ((p = p ? p.slice() : [])[0] = p[0] || []),
                      (p[1] = p[1] || []),
                      s.copy(p[0], c),
                      s.copy(p[1], h),
                      +u.curveness &&
                        (p[2] = [
                          (c[0] + h[0]) / 2 - (c[1] - h[1]) * u.curveness,
                          (c[1] + h[1]) / 2 - (h[0] - c[0]) * u.curveness,
                        ]),
                      d.setLayout(p);
                  }
                }),
                (e.forceLayout = S),
                (e.preservedPoints = i),
                S.step();
            } else e.forceLayout = null;
        });
      }
      var P = i(6874),
        E = i(67730),
        V = i(43514);
      function R(e, t) {
        var i = [];
        return (
          e.eachSeriesByType("graph", function (e) {
            var a = e.get("coordinateSystem");
            if (!a || "view" === a) {
              var o = e.getData(),
                r = o.mapArray(function (e) {
                  var t = o.getItemModel(e);
                  return [+t.get("x"), +t.get("y")];
                }),
                l = [],
                s = [];
              V.Cr(r, l, s),
                s[0] - l[0] === 0 && ((s[0] += 1), (l[0] -= 1)),
                s[1] - l[1] === 0 && ((s[1] += 1), (l[1] -= 1));
              var u = (s[0] - l[0]) / (s[1] - l[1]),
                d = (function (e, t, i) {
                  var a = (0, n.extend)(e.getBoxLayoutParams(), { aspect: i });
                  return (0, E.dV)(a, {
                    width: t.getWidth(),
                    height: t.getHeight(),
                  });
                })(e, t, u);
              isNaN(u) &&
                ((l = [d.x, d.y]), (s = [d.x + d.width, d.y + d.height]));
              var c = s[0] - l[0],
                h = s[1] - l[1],
                p = d.width,
                g = d.height,
                f = (e.coordinateSystem = new P.A());
              (f.zoomLimit = e.get("scaleLimit")),
                f.setBoundingRect(l[0], l[1], c, h),
                f.setViewRect(d.x, d.y, p, g),
                f.setCenter(e.get("center"), t),
                f.setZoom(e.get("zoom")),
                i.push(f);
            }
          }),
          i
        );
      }
      var z = i(37292),
        O = i(97681),
        k = i(44763),
        G = i(17569),
        B = i(42773),
        W = i(94458),
        F = i(39253),
        Y = i(3686),
        H = [],
        X = [],
        U = [],
        Z = Y.k3,
        q = s.distSquare,
        j = Math.abs;
      function Q(e, t, i) {
        for (
          var n,
            a = e[0],
            o = e[1],
            r = e[2],
            l = 1 / 0,
            s = i * i,
            u = 0.1,
            d = 0.1;
          d <= 0.9;
          d += 0.1
        ) {
          (H[0] = Z(a[0], o[0], r[0], d)),
            (H[1] = Z(a[1], o[1], r[1], d)),
            (p = j(q(H, t) - s)) < l && ((l = p), (n = d));
        }
        for (var c = 0; c < 32; c++) {
          var h = n + u;
          (X[0] = Z(a[0], o[0], r[0], n)),
            (X[1] = Z(a[1], o[1], r[1], n)),
            (U[0] = Z(a[0], o[0], r[0], h)),
            (U[1] = Z(a[1], o[1], r[1], h));
          var p = q(X, t) - s;
          if (j(p) < 0.01) break;
          var g = q(U, t) - s;
          (u /= 2),
            p < 0
              ? g >= 0
                ? (n += u)
                : (n -= u)
              : g >= 0
              ? (n -= u)
              : (n += u);
        }
        return n;
      }
      function J(e, t) {
        var i = [],
          n = Y.kx,
          a = [[], [], []],
          o = [[], []],
          r = [];
        (t /= 2),
          e.eachEdge(function (e, l) {
            var u = e.getLayout(),
              d = e.getVisual("fromSymbol"),
              c = e.getVisual("toSymbol");
            u.__original ||
              ((u.__original = [s.clone(u[0]), s.clone(u[1])]),
              u[2] && u.__original.push(s.clone(u[2])));
            var h = u.__original;
            if (null != u[2]) {
              if (
                (s.copy(a[0], h[0]),
                s.copy(a[1], h[2]),
                s.copy(a[2], h[1]),
                d && "none" !== d)
              ) {
                var p = _(e.node1),
                  g = Q(a, h[0], p * t);
                n(a[0][0], a[1][0], a[2][0], g, i),
                  (a[0][0] = i[3]),
                  (a[1][0] = i[4]),
                  n(a[0][1], a[1][1], a[2][1], g, i),
                  (a[0][1] = i[3]),
                  (a[1][1] = i[4]);
              }
              if (c && "none" !== c) {
                (p = _(e.node2)), (g = Q(a, h[1], p * t));
                n(a[0][0], a[1][0], a[2][0], g, i),
                  (a[1][0] = i[1]),
                  (a[2][0] = i[2]),
                  n(a[0][1], a[1][1], a[2][1], g, i),
                  (a[1][1] = i[1]),
                  (a[2][1] = i[2]);
              }
              s.copy(u[0], a[0]), s.copy(u[1], a[2]), s.copy(u[2], a[1]);
            } else {
              if (
                (s.copy(o[0], h[0]),
                s.copy(o[1], h[1]),
                s.sub(r, o[1], o[0]),
                s.normalize(r, r),
                d && "none" !== d)
              ) {
                p = _(e.node1);
                s.scaleAndAdd(o[0], o[0], r, p * t);
              }
              if (c && "none" !== c) {
                p = _(e.node2);
                s.scaleAndAdd(o[1], o[1], r, -p * t);
              }
              s.copy(u[0], o[0]), s.copy(u[1], o[1]);
            }
          });
      }
      var K = i(29379),
        $ = i(3569);
      function ee(e) {
        return "view" === e.type;
      }
      var te = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, z.C6)(t, e),
          (t.prototype.init = function (e, t) {
            var i = new O.A(),
              n = new k.A(),
              a = this.group;
            (this._controller = new G.A(t.getZr())),
              (this._controllerHost = { target: a }),
              a.add(i.group),
              a.add(n.group),
              (this._symbolDraw = i),
              (this._lineDraw = n),
              (this._firstRender = !0);
          }),
          (t.prototype.render = function (e, t, i) {
            var n = this,
              a = e.coordinateSystem;
            this._model = e;
            var o = this._symbolDraw,
              r = this._lineDraw,
              l = this.group;
            if (ee(a)) {
              var s = { x: a.x, y: a.y, scaleX: a.scaleX, scaleY: a.scaleY };
              this._firstRender ? l.attr(s) : F.oi(l, s, e);
            }
            J(e.getGraph(), S(e));
            var u = e.getData();
            o.updateData(u);
            var d = e.getEdgeData();
            r.updateData(d),
              this._updateNodeAndLinkScale(),
              this._updateController(e, t, i),
              clearTimeout(this._layoutTimeout);
            var c = e.forceLayout,
              h = e.get(["force", "layoutAnimation"]);
            c && this._startForceLayoutIteration(c, h);
            var p = e.get("layout");
            u.graph.eachNode(function (t) {
              var i = t.dataIndex,
                a = t.getGraphicEl(),
                o = t.getModel();
              if (a) {
                a.off("drag").off("dragend");
                var r = o.get("draggable");
                r &&
                  a
                    .on("drag", function (o) {
                      switch (p) {
                        case "force":
                          c.warmUp(),
                            !n._layouting && n._startForceLayoutIteration(c, h),
                            c.setFixed(i),
                            u.setItemLayout(i, [a.x, a.y]);
                          break;
                        case "circular":
                          u.setItemLayout(i, [a.x, a.y]),
                            t.setLayout({ fixed: !0 }, !0),
                            I(e, "symbolSize", t, [o.offsetX, o.offsetY]),
                            n.updateLayout(e);
                          break;
                        default:
                          u.setItemLayout(i, [a.x, a.y]),
                            x(e.getGraph(), e),
                            n.updateLayout(e);
                      }
                    })
                    .on("dragend", function () {
                      c && c.setUnfixed(i);
                    }),
                  a.setDraggable(r, !!o.get("cursor")),
                  "adjacency" === o.get(["emphasis", "focus"]) &&
                    ((0, $.z)(a).focus = t.getAdjacentDataIndices());
              }
            }),
              u.graph.eachEdge(function (e) {
                var t = e.getGraphicEl(),
                  i = e.getModel().get(["emphasis", "focus"]);
                t &&
                  "adjacency" === i &&
                  ((0, $.z)(t).focus = {
                    edge: [e.dataIndex],
                    node: [e.node1.dataIndex, e.node2.dataIndex],
                  });
              });
            var g =
                "circular" === e.get("layout") &&
                e.get(["circular", "rotateLabel"]),
              f = u.getLayout("cx"),
              y = u.getLayout("cy");
            u.graph.eachNode(function (e) {
              L(e, g, f, y);
            }),
              (this._firstRender = !1);
          }),
          (t.prototype.dispose = function () {
            this.remove(),
              this._controller && this._controller.dispose(),
              (this._controllerHost = null);
          }),
          (t.prototype._startForceLayoutIteration = function (e, t) {
            var i = this;
            !(function n() {
              e.step(function (e) {
                i.updateLayout(i._model),
                  (i._layouting = !e) &&
                    (t ? (i._layoutTimeout = setTimeout(n, 16)) : n());
              });
            })();
          }),
          (t.prototype._updateController = function (e, t, i) {
            var n = this,
              a = this._controller,
              o = this._controllerHost,
              r = this.group;
            a.setPointerChecker(function (t, n, a) {
              var o = r.getBoundingRect();
              return (
                o.applyTransform(r.transform),
                o.contain(n, a) && !(0, W.I)(t, i, e)
              );
            }),
              ee(e.coordinateSystem)
                ? (a.enable(e.get("roam")),
                  (o.zoomLimit = e.get("scaleLimit")),
                  (o.zoom = e.coordinateSystem.getZoom()),
                  a
                    .off("pan")
                    .off("zoom")
                    .on("pan", function (t) {
                      B.t(o, t.dx, t.dy),
                        i.dispatchAction({
                          seriesId: e.id,
                          type: "graphRoam",
                          dx: t.dx,
                          dy: t.dy,
                        });
                    })
                    .on("zoom", function (t) {
                      B.x(o, t.scale, t.originX, t.originY),
                        i.dispatchAction({
                          seriesId: e.id,
                          type: "graphRoam",
                          zoom: t.scale,
                          originX: t.originX,
                          originY: t.originY,
                        }),
                        n._updateNodeAndLinkScale(),
                        J(e.getGraph(), S(e)),
                        n._lineDraw.updateLayout(),
                        i.updateLabelLayout();
                    }))
                : a.disable();
          }),
          (t.prototype._updateNodeAndLinkScale = function () {
            var e = this._model,
              t = e.getData(),
              i = S(e);
            t.eachItemGraphicEl(function (e, t) {
              e && e.setSymbolScale(i);
            });
          }),
          (t.prototype.updateLayout = function (e) {
            J(e.getGraph(), S(e)),
              this._symbolDraw.updateLayout(),
              this._lineDraw.updateLayout();
          }),
          (t.prototype.remove = function () {
            clearTimeout(this._layoutTimeout),
              (this._layouting = !1),
              (this._layoutTimeout = null),
              this._symbolDraw && this._symbolDraw.remove(),
              this._lineDraw && this._lineDraw.remove();
          }),
          (t.type = "graph"),
          t
        );
      })(K.A);
      const ie = te;
      var ne = i(89033),
        ae = i(34575),
        oe = i(19626),
        re = i(49626),
        le = i(26272),
        se = i(15230),
        ue = i(78754),
        de = i(85140),
        ce = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), (i.hasSymbolVisual = !0), i;
          }
          return (
            (0, z.C6)(t, e),
            (t.prototype.init = function (t) {
              e.prototype.init.apply(this, arguments);
              var i = this;
              function n() {
                return i._categoriesData;
              }
              (this.legendVisualProvider = new le.A(n, n)),
                this.fillDataTextStyle(t.edges || t.links),
                this._updateCategoriesData();
            }),
            (t.prototype.mergeOption = function (t) {
              e.prototype.mergeOption.apply(this, arguments),
                this.fillDataTextStyle(t.edges || t.links),
                this._updateCategoriesData();
            }),
            (t.prototype.mergeDefaultAndTheme = function (t) {
              e.prototype.mergeDefaultAndTheme.apply(this, arguments),
                (0, ae.M5)(t, "edgeLabel", ["show"]);
            }),
            (t.prototype.getInitialData = function (e, t) {
              var i,
                a = e.edges || e.links || [],
                o = e.data || e.nodes || [],
                r = this;
              if (o && a) {
                d((i = this)) &&
                  ((i.__curvenessList = []), (i.__edgeMap = {}), c(i));
                var l = (0, re.A)(o, a, this, !0, function (e, t) {
                  e.wrapMethod("getItemModel", function (e) {
                    var t = r._categoriesModels[e.getShallow("category")];
                    return (
                      t &&
                        ((t.parentModel = e.parentModel), (e.parentModel = t)),
                      e
                    );
                  });
                  var i = oe.A.prototype.getModel;
                  function n(e, t) {
                    var n = i.call(this, e, t);
                    return (n.resolveParentPath = a), n;
                  }
                  function a(e) {
                    if (e && ("label" === e[0] || "label" === e[1])) {
                      var t = e.slice();
                      return (
                        "label" === e[0]
                          ? (t[0] = "edgeLabel")
                          : "label" === e[1] && (t[1] = "edgeLabel"),
                        t
                      );
                    }
                    return e;
                  }
                  t.wrapMethod("getItemModel", function (e) {
                    return (e.resolveParentPath = a), (e.getModel = n), e;
                  });
                });
                return (
                  n.each(
                    l.edges,
                    function (e) {
                      !(function (e, t, i, n) {
                        if (d(i)) {
                          var a = h(e, t, i),
                            o = i.__edgeMap,
                            r = o[p(a)];
                          o[a] && !r
                            ? (o[a].isForward = !0)
                            : r &&
                              o[a] &&
                              ((r.isForward = !0), (o[a].isForward = !1)),
                            (o[a] = o[a] || []),
                            o[a].push(n);
                        }
                      })(e.node1, e.node2, this, e.dataIndex);
                    },
                    this
                  ),
                  l.data
                );
              }
            }),
            (t.prototype.getGraph = function () {
              return this.getData().graph;
            }),
            (t.prototype.getEdgeData = function () {
              return this.getGraph().edgeData;
            }),
            (t.prototype.getCategoriesData = function () {
              return this._categoriesData;
            }),
            (t.prototype.formatTooltip = function (e, t, i) {
              if ("edge" === i) {
                var n = this.getData(),
                  a = this.getDataParams(e, i),
                  o = n.graph.getEdgeByIndex(e),
                  r = n.getName(o.node1.dataIndex),
                  l = n.getName(o.node2.dataIndex),
                  s = [];
                return (
                  null != r && s.push(r),
                  null != l && s.push(l),
                  (0, ue.Qx)("nameValue", {
                    name: s.join(" > "),
                    value: a.value,
                    noValue: null == a.value,
                  })
                );
              }
              return (0, de.J)({
                series: this,
                dataIndex: e,
                multipleSeries: t,
              });
            }),
            (t.prototype._updateCategoriesData = function () {
              var e = n.map(this.option.categories || [], function (e) {
                  return null != e.value ? e : n.extend({ value: 0 }, e);
                }),
                t = new ne.A(["value"], this);
              t.initData(e),
                (this._categoriesData = t),
                (this._categoriesModels = t.mapArray(function (e) {
                  return t.getItemModel(e);
                }));
            }),
            (t.prototype.setZoom = function (e) {
              this.option.zoom = e;
            }),
            (t.prototype.setCenter = function (e) {
              this.option.center = e;
            }),
            (t.prototype.isAnimationEnabled = function () {
              return (
                e.prototype.isAnimationEnabled.call(this) &&
                !(
                  "force" === this.get("layout") &&
                  this.get(["force", "layoutAnimation"])
                )
              );
            }),
            (t.type = "series.graph"),
            (t.dependencies = [
              "grid",
              "polar",
              "geo",
              "singleAxis",
              "calendar",
            ]),
            (t.defaultOption = {
              z: 2,
              coordinateSystem: "view",
              legendHoverLink: !0,
              layout: null,
              circular: { rotateLabel: !1 },
              force: {
                initLayout: null,
                repulsion: [0, 50],
                gravity: 0.1,
                friction: 0.6,
                edgeLength: 30,
                layoutAnimation: !0,
              },
              left: "center",
              top: "center",
              symbol: "circle",
              symbolSize: 10,
              edgeSymbol: ["none", "none"],
              edgeSymbolSize: 10,
              edgeLabel: { position: "middle", distance: 5 },
              draggable: !1,
              roam: !1,
              center: null,
              zoom: 1,
              nodeScaleRatio: 0.6,
              label: { show: !1, formatter: "{b}" },
              itemStyle: {},
              lineStyle: { color: "#aaa", width: 1, opacity: 0.5 },
              emphasis: { scale: !0, label: { show: !0 } },
              select: { itemStyle: { borderColor: "#212121" } },
            }),
            t
          );
        })(se.A);
      const he = ce;
      var pe = i(25879),
        ge = { type: "graphRoam", event: "graphRoam", update: "none" };
      function fe(e) {
        e.registerChartView(ie),
          e.registerSeriesModel(he),
          e.registerProcessor(a),
          e.registerVisual(o),
          e.registerVisual(l),
          e.registerLayout(b),
          e.registerLayout(e.PRIORITY.VISUAL.POST_CHART_LAYOUT, D),
          e.registerLayout(T),
          e.registerCoordinateSystem("graphView", {
            dimensions: P.A.dimensions,
            create: R,
          }),
          e.registerAction(
            {
              type: "focusNodeAdjacency",
              event: "focusNodeAdjacency",
              update: "series:focusNodeAdjacency",
            },
            n.noop
          ),
          e.registerAction(
            {
              type: "unfocusNodeAdjacency",
              event: "unfocusNodeAdjacency",
              update: "series:unfocusNodeAdjacency",
            },
            n.noop
          ),
          e.registerAction(ge, function (e, t, i) {
            t.eachComponent({ mainType: "series", query: e }, function (t) {
              var n = t.coordinateSystem,
                a = (0, pe.f)(n, e, void 0, i);
              t.setCenter && t.setCenter(a.center),
                t.setZoom && t.setZoom(a.zoom);
            });
          });
      }
    },
    49626: (e, t, i) => {
      i.d(t, { A: () => c });
      var n = i(70441),
        a = i(89033),
        o = i(8118),
        r = i(88338),
        l = i(18846),
        s = i(84114),
        u = i(62362),
        d = i(34575);
      function c(e, t, i, c, h) {
        for (var p = new o.Ay(c), g = 0; g < e.length; g++)
          p.addNode(n.retrieve(e[g].id, e[g].name, g), g);
        var f = [],
          y = [],
          m = 0;
        for (g = 0; g < t.length; g++) {
          var v = t[g],
            x = v.source,
            b = v.target;
          p.addEdge(x, b, m) &&
            (y.push(v),
            f.push(n.retrieve((0, d.vS)(v.id, null), x + " > " + b)),
            m++);
        }
        var S,
          _ = i.get("coordinateSystem");
        if ("cartesian2d" === _ || "polar" === _) S = (0, u.A)(e, i);
        else {
          var A = s.A.get(_),
            w = (A && A.dimensions) || [];
          n.indexOf(w, "value") < 0 && w.concat(["value"]);
          var I = (0, l.A)(e, {
            coordDimensions: w,
            encodeDefine: i.getEncode(),
          }).dimensions;
          (S = new a.A(I, i)).initData(e);
        }
        var M = new a.A(["value"], i);
        return (
          M.initData(y, f),
          h && h(S, M),
          (0, r.A)({
            mainData: S,
            struct: p,
            structAttr: "graph",
            datas: { node: S, edge: M },
            datasAttr: { node: "data", edge: "edgeData" },
          }),
          p.update(),
          p
        );
      }
    },
    50501: (e, t, i) => {
      i.d(t, { a: () => D });
      var n = i(55056),
        a = i(70441);
      function o(e) {
        e.eachSeriesByType("radar", function (e) {
          var t = e.getData(),
            i = [],
            n = e.coordinateSystem;
          if (n) {
            var o = n.getIndicatorAxes();
            a.each(o, function (e, a) {
              t.each(t.mapDimension(o[a].dim), function (e, t) {
                i[t] = i[t] || [];
                var o = n.dataToPoint(e, a);
                i[t][a] = r(o) ? o : l(n);
              });
            }),
              t.each(function (e) {
                var o =
                  a.find(i[e], function (e) {
                    return r(e);
                  }) || l(n);
                i[e].push(o.slice()), t.setItemLayout(e, i[e]);
              });
          }
        });
      }
      function r(e) {
        return !isNaN(e[0]) && !isNaN(e[1]);
      }
      function l(e) {
        return [e.cx, e.cy];
      }
      var s = i(15534);
      function u(e) {
        var t = e.polar;
        if (t) {
          a.isArray(t) || (t = [t]);
          var i = [];
          a.each(t, function (t, n) {
            t.indicator
              ? (t.type && !t.shape && (t.shape = t.type),
                (e.radar = e.radar || []),
                a.isArray(e.radar) || (e.radar = [e.radar]),
                e.radar.push(t))
              : i.push(t);
          }),
            (e.polar = i);
        }
        a.each(e.series, function (e) {
          e &&
            "radar" === e.type &&
            e.polarIndex &&
            (e.radarIndex = e.polarIndex);
        });
      }
      var d = i(37292),
        c = i(72042),
        h = i(38794),
        p = i(32502),
        g = i(39253),
        f = i(47945),
        y = i(41406),
        m = i(11552),
        v = i(29379),
        x = i(87689),
        b = i(70867);
      const S = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, d.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            var n = e.coordinateSystem,
              o = this.group,
              r = e.getData(),
              l = this._data;
            function s(e, t) {
              var i = e.getItemVisual(t, "symbol") || "circle";
              if ("none" !== i) {
                var n = m.xU(e.getItemVisual(t, "symbolSize")),
                  a = m.v5(i, -1, -1, 2, 2),
                  o = e.getItemVisual(t, "symbolRotate") || 0;
                return (
                  a.attr({
                    style: { strokeNoScale: !0 },
                    z2: 100,
                    scaleX: n[0] / 2,
                    scaleY: n[1] / 2,
                    rotation: (o * Math.PI) / 180 || 0,
                  }),
                  a
                );
              }
            }
            function u(t, i, n, a, o, r) {
              n.removeAll();
              for (var l = 0; l < i.length - 1; l++) {
                var u = s(a, o);
                u &&
                  ((u.__dimIdx = l),
                  t[l]
                    ? (u.setPosition(t[l]),
                      c[r ? "initProps" : "updateProps"](
                        u,
                        { x: i[l][0], y: i[l][1] },
                        e,
                        o
                      ))
                    : u.setPosition(i[l]),
                  n.add(u));
              }
            }
            function d(e) {
              return a.map(e, function (e) {
                return [n.cx, n.cy];
              });
            }
            r
              .diff(l)
              .add(function (t) {
                var i = r.getItemLayout(t);
                if (i) {
                  var n = new h.A(),
                    a = new p.A(),
                    o = { shape: { points: i } };
                  (n.shape.points = d(i)),
                    (a.shape.points = d(i)),
                    g.LW(n, o, e, t),
                    g.LW(a, o, e, t);
                  var l = new f.A(),
                    s = new f.A();
                  l.add(a),
                    l.add(n),
                    l.add(s),
                    u(a.shape.points, i, s, r, t, !0),
                    r.setItemGraphicEl(t, l);
                }
              })
              .update(function (t, i) {
                var n = l.getItemGraphicEl(i),
                  a = n.childAt(0),
                  o = n.childAt(1),
                  s = n.childAt(2),
                  d = { shape: { points: r.getItemLayout(t) } };
                d.shape.points &&
                  (u(a.shape.points, d.shape.points, s, r, t, !1),
                  (0, g.ap)(o),
                  (0, g.ap)(a),
                  g.oi(a, d, e),
                  g.oi(o, d, e),
                  r.setItemGraphicEl(t, n));
              })
              .remove(function (e) {
                o.remove(l.getItemGraphicEl(e));
              })
              .execute(),
              r.eachItemGraphicEl(function (e, t) {
                var i = r.getItemModel(t),
                  n = e.childAt(0),
                  l = e.childAt(1),
                  s = e.childAt(2),
                  u = r.getItemVisual(t, "style"),
                  d = u.fill;
                o.add(e),
                  n.useStyle(
                    a.defaults(i.getModel("lineStyle").getLineStyle(), {
                      fill: "none",
                      stroke: d,
                    })
                  ),
                  (0, y.Mx)(n, i, "lineStyle"),
                  (0, y.Mx)(l, i, "areaStyle");
                var c = i.getModel("areaStyle"),
                  h = c.isEmpty() && c.parentModel.isEmpty();
                (l.ignore = h),
                  a.each(["emphasis", "select", "blur"], function (e) {
                    var t = i.getModel([e, "areaStyle"]),
                      n = t.isEmpty() && t.parentModel.isEmpty();
                    l.ensureState(e).ignore = n && h;
                  }),
                  l.useStyle(
                    a.defaults(c.getAreaStyle(), {
                      fill: d,
                      opacity: 0.7,
                      decal: u.decal,
                    })
                  );
                var p = i.getModel("emphasis"),
                  g = p.getModel("itemStyle").getItemStyle();
                s.eachChild(function (e) {
                  if (e instanceof b.Ay) {
                    var n = e.style;
                    e.useStyle(
                      a.extend(
                        {
                          image: n.image,
                          x: n.x,
                          y: n.y,
                          width: n.width,
                          height: n.height,
                        },
                        u
                      )
                    );
                  } else e.useStyle(u), e.setColor(d), (e.style.strokeNoScale = !0);
                  e.ensureState("emphasis").style = a.clone(g);
                  var o = r.getStore().get(r.getDimensionIndex(e.__dimIdx), t);
                  (null == o || isNaN(o)) && (o = ""),
                    (0, x.qM)(e, (0, x.lx)(i), {
                      labelFetcher: r.hostModel,
                      labelDataIndex: t,
                      labelDimIndex: e.__dimIdx,
                      defaultText: o,
                      inheritColor: d,
                      defaultOpacity: u.opacity,
                    });
                }),
                  (0, y.Lm)(
                    e,
                    p.get("focus"),
                    p.get("blurScope"),
                    p.get("disabled")
                  );
              }),
              (this._data = r);
          }),
          (t.prototype.remove = function () {
            this.group.removeAll(), (this._data = null);
          }),
          (t.type = "radar"),
          t
        );
      })(v.A);
      var _ = i(15230),
        A = i(5508),
        w = i(26272),
        I = i(78754);
      const M = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i.hasSymbolVisual = !0), i;
        }
        return (
          (0, d.C6)(t, e),
          (t.prototype.init = function (t) {
            e.prototype.init.apply(this, arguments),
              (this.legendVisualProvider = new w.A(
                a.bind(this.getData, this),
                a.bind(this.getRawData, this)
              ));
          }),
          (t.prototype.getInitialData = function (e, t) {
            return (0, A.A)(this, {
              generateCoord: "indicator_",
              generateCoordCount: 1 / 0,
            });
          }),
          (t.prototype.formatTooltip = function (e, t, i) {
            var n = this.getData(),
              o = this.coordinateSystem.getIndicatorAxes(),
              r = this.getData().getName(e),
              l = "" === r ? this.name : r,
              s = (0, I.aw)(this, e);
            return (0, I.Qx)("section", {
              header: l,
              sortBlocks: !0,
              blocks: a.map(o, function (t) {
                var i = n.get(n.mapDimension(t.dim), e);
                return (0,
                I.Qx)("nameValue", { markerType: "subItem", markerColor: s, name: t.name, value: i, sortParam: i });
              }),
            });
          }),
          (t.prototype.getTooltipPosition = function (e) {
            if (null != e)
              for (
                var t = this.getData(),
                  i = this.coordinateSystem,
                  n = t.getValues(
                    a.map(i.dimensions, function (e) {
                      return t.mapDimension(e);
                    }),
                    e
                  ),
                  o = 0,
                  r = n.length;
                o < r;
                o++
              )
                if (!isNaN(n[o])) {
                  var l = i.getIndicatorAxes();
                  return i.coordToPoint(l[o].dataToCoord(n[o]), o);
                }
          }),
          (t.type = "series.radar"),
          (t.dependencies = ["radar"]),
          (t.defaultOption = {
            z: 2,
            colorBy: "data",
            coordinateSystem: "radar",
            legendHoverLink: !0,
            radarIndex: 0,
            lineStyle: { width: 2, type: "solid", join: "round" },
            label: { position: "top" },
            symbolSize: 8,
          }),
          t
        );
      })(_.A);
      var L = i(61592);
      function D(e) {
        (0, n.Y)(L.a),
          e.registerChartView(S),
          e.registerSeriesModel(M),
          e.registerLayout(o),
          e.registerProcessor((0, s.A)("radar")),
          e.registerPreprocessor(u);
      }
    },
    62362: (e, t, i) => {
      i.d(t, { A: () => g });
      var n = i(70441),
        a = i(89033),
        o = i(18846),
        r = i(20095),
        l = i(34575),
        s = i(84114),
        u = i(93621),
        d = i(62285),
        c = i(24755),
        h = i(30130),
        p = i(85327);
      const g = function (e, t, i) {
        i = i || {};
        var g,
          f = t.getSourceManager(),
          y = !1;
        e
          ? ((y = !0), (g = (0, d.AF)(e)))
          : (y = (g = f.getSource()).sourceFormat === p.mK);
        var m = (0, u.X)(t),
          v = (function (e, t) {
            var i,
              a = e.get("coordinateSystem"),
              o = s.A.get(a);
            return (
              t &&
                t.coordSysDims &&
                (i = n.map(t.coordSysDims, function (e) {
                  var i = { name: e },
                    n = t.axisMap.get(e);
                  if (n) {
                    var a = n.get("type");
                    i.type = (0, r.B)(a);
                  }
                  return i;
                })),
              i ||
                (i = (o &&
                  (o.getDimensionsInfo
                    ? o.getDimensionsInfo()
                    : o.dimensions.slice())) || ["x", "y"]),
              i
            );
          })(t, m),
          x = i.useEncodeDefaulter,
          b = n.isFunction(x) ? x : x ? n.curry(h.OC, v, t) : null,
          S = {
            coordDimensions: v,
            generateCoord: i.generateCoord,
            encodeDefine: t.getEncode(),
            encodeDefaulter: b,
            canOmitUnusedDimensions: !y,
          },
          _ = (0, o.A)(g, S),
          A = (function (e, t, i) {
            var a, o;
            return (
              i &&
                n.each(e, function (e, n) {
                  var r = e.coordDim,
                    l = i.categoryAxisMap.get(r);
                  l &&
                    (null == a && (a = n),
                    (e.ordinalMeta = l.getOrdinalMeta()),
                    t && (e.createInvertedIndices = !0)),
                    null != e.otherDims.itemName && (o = !0);
                }),
              o || null == a || (e[a].otherDims.itemName = 0),
              a
            );
          })(_.dimensions, i.createInvertedIndices, m),
          w = y ? null : f.getSharedDataStore(_),
          I = (0, c.iJ)(t, { schema: _, store: w }),
          M = new a.A(_, t);
        M.setCalculationInfo(I);
        var L =
          null != A &&
          (function (e) {
            if (e.sourceFormat === p.mK) {
              var t = (function (e) {
                var t = 0;
                for (; t < e.length && null == e[t]; ) t++;
                return e[t];
              })(e.data || []);
              return !n.isArray((0, l.vj)(t));
            }
          })(g)
            ? function (e, t, i, n) {
                return n === A ? i : this.defaultDimValueGetter(e, t, i, n);
              }
            : null;
        return (M.hasItemOption = !1), M.initData(y ? g : w, null, L), M;
      };
    },
    65065: (e, t, i) => {
      i.d(t, { i: () => o });
      var n = i(70441),
        a = i(40127);
      function o(e, t, i) {
        var o = e.get("borderRadius");
        if (null == o) return i ? { cornerRadius: 0 } : null;
        (0, n.isArray)(o) || (o = [o, o, o, o]);
        var r = Math.abs(t.r || 0 - t.r0 || 0);
        return {
          cornerRadius: (0, n.map)(o, function (e) {
            return (0, a.lo)(e, r);
          }),
        };
      }
    },
    66715: (e, t, i) => {
      i.d(t, { a: () => Q });
      var n = i(37292),
        a = i(70441),
        o = i(47945),
        r = i(39253),
        l = i(44362),
        s = i(3569),
        u = i(88667),
        d = i(67730);
      function c(e, t) {
        var i = e.isExpand ? e.children : [],
          n = e.parentNode.children,
          a = e.hierNode.i ? n[e.hierNode.i - 1] : null;
        if (i.length) {
          !(function (e) {
            var t = e.children,
              i = t.length,
              n = 0,
              a = 0;
            for (; --i >= 0; ) {
              var o = t[i];
              (o.hierNode.prelim += n),
                (o.hierNode.modifier += n),
                (a += o.hierNode.change),
                (n += o.hierNode.shift + a);
            }
          })(e);
          var o = (i[0].hierNode.prelim + i[i.length - 1].hierNode.prelim) / 2;
          a
            ? ((e.hierNode.prelim = a.hierNode.prelim + t(e, a)),
              (e.hierNode.modifier = e.hierNode.prelim - o))
            : (e.hierNode.prelim = o);
        } else a && (e.hierNode.prelim = a.hierNode.prelim + t(e, a));
        e.parentNode.hierNode.defaultAncestor = (function (e, t, i, n) {
          if (t) {
            for (
              var a = e,
                o = e,
                r = o.parentNode.children[0],
                l = t,
                s = a.hierNode.modifier,
                u = o.hierNode.modifier,
                d = r.hierNode.modifier,
                c = l.hierNode.modifier;
              (l = y(l)), (o = m(o)), l && o;

            ) {
              (a = y(a)), (r = m(r)), (a.hierNode.ancestor = e);
              var h = l.hierNode.prelim + c - o.hierNode.prelim - u + n(l, o);
              h > 0 && (x(v(l, e, i), e, h), (u += h), (s += h)),
                (c += l.hierNode.modifier),
                (u += o.hierNode.modifier),
                (s += a.hierNode.modifier),
                (d += r.hierNode.modifier);
            }
            l &&
              !y(a) &&
              ((a.hierNode.thread = l), (a.hierNode.modifier += c - s)),
              o &&
                !m(r) &&
                ((r.hierNode.thread = o),
                (r.hierNode.modifier += u - d),
                (i = e));
          }
          return i;
        })(e, a, e.parentNode.hierNode.defaultAncestor || n[0], t);
      }
      function h(e) {
        var t = e.hierNode.prelim + e.parentNode.hierNode.modifier;
        e.setLayout({ x: t }, !0),
          (e.hierNode.modifier += e.parentNode.hierNode.modifier);
      }
      function p(e) {
        return arguments.length ? e : b;
      }
      function g(e, t) {
        return (e -= Math.PI / 2), { x: t * Math.cos(e), y: t * Math.sin(e) };
      }
      function f(e, t) {
        return d.dV(e.getBoxLayoutParams(), {
          width: t.getWidth(),
          height: t.getHeight(),
        });
      }
      function y(e) {
        var t = e.children;
        return t.length && e.isExpand ? t[t.length - 1] : e.hierNode.thread;
      }
      function m(e) {
        var t = e.children;
        return t.length && e.isExpand ? t[0] : e.hierNode.thread;
      }
      function v(e, t, i) {
        return e.hierNode.ancestor.parentNode === t.parentNode
          ? e.hierNode.ancestor
          : i;
      }
      function x(e, t, i) {
        var n = i / (t.hierNode.i - e.hierNode.i);
        (t.hierNode.change -= n),
          (t.hierNode.shift += i),
          (t.hierNode.modifier += i),
          (t.hierNode.prelim += i),
          (e.hierNode.change += n);
      }
      function b(e, t) {
        return e.parentNode === t.parentNode ? 1 : 2;
      }
      var S = i(43514),
        _ = i(6874),
        A = i(42773),
        w = i(17569),
        I = i(94458),
        M = i(85941),
        L = i(29379),
        D = i(70),
        C = i(41406),
        N = function () {
          (this.parentPoint = []), (this.childPoints = []);
        },
        T = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getDefaultStyle = function () {
              return { stroke: "#000", fill: null };
            }),
            (t.prototype.getDefaultShape = function () {
              return new N();
            }),
            (t.prototype.buildPath = function (e, t) {
              var i = t.childPoints,
                n = i.length,
                a = t.parentPoint,
                o = i[0],
                r = i[n - 1];
              if (1 === n)
                return e.moveTo(a[0], a[1]), void e.lineTo(o[0], o[1]);
              var l = t.orient,
                s = "TB" === l || "BT" === l ? 0 : 1,
                u = 1 - s,
                d = (0, M.lo)(t.forkPosition, 1),
                c = [];
              (c[s] = a[s]),
                (c[u] = a[u] + (r[u] - a[u]) * d),
                e.moveTo(a[0], a[1]),
                e.lineTo(c[0], c[1]),
                e.moveTo(o[0], o[1]),
                (c[s] = o[s]),
                e.lineTo(c[0], c[1]),
                (c[s] = r[s]),
                e.lineTo(c[0], c[1]),
                e.lineTo(r[0], r[1]);
              for (var h = 1; h < n - 1; h++) {
                var p = i[h];
                e.moveTo(p[0], p[1]), (c[s] = p[s]), e.lineTo(c[0], c[1]);
              }
            }),
            t
          );
        })(D.Ay),
        P = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), (i._mainGroup = new o.A()), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.init = function (e, t) {
              (this._controller = new w.A(t.getZr())),
                (this._controllerHost = { target: this.group }),
                this.group.add(this._mainGroup);
            }),
            (t.prototype.render = function (e, t, i) {
              var n = e.getData(),
                a = e.layoutInfo,
                o = this._mainGroup;
              "radial" === e.get("layout")
                ? ((o.x = a.x + a.width / 2), (o.y = a.y + a.height / 2))
                : ((o.x = a.x), (o.y = a.y)),
                this._updateViewCoordSys(e, i),
                this._updateController(e, t, i);
              var r = this._data;
              n
                .diff(r)
                .add(function (t) {
                  E(n, t) && V(n, t, null, o, e);
                })
                .update(function (t, i) {
                  var a = r.getItemGraphicEl(i);
                  E(n, t) ? V(n, t, a, o, e) : a && O(r, i, a, o, e);
                })
                .remove(function (t) {
                  var i = r.getItemGraphicEl(t);
                  i && O(r, t, i, o, e);
                })
                .execute(),
                (this._nodeScaleRatio = e.get("nodeScaleRatio")),
                this._updateNodeAndLinkScale(e),
                !0 === e.get("expandAndCollapse") &&
                  n.eachItemGraphicEl(function (t, n) {
                    t.off("click").on("click", function () {
                      i.dispatchAction({
                        type: "treeExpandAndCollapse",
                        seriesId: e.id,
                        dataIndex: n,
                      });
                    });
                  }),
                (this._data = n);
            }),
            (t.prototype._updateViewCoordSys = function (e, t) {
              var i = e.getData(),
                n = [];
              i.each(function (e) {
                var t = i.getItemLayout(e);
                !t || isNaN(t.x) || isNaN(t.y) || n.push([+t.x, +t.y]);
              });
              var a = [],
                o = [];
              S.Cr(n, a, o);
              var r = this._min,
                l = this._max;
              o[0] - a[0] === 0 &&
                ((a[0] = r ? r[0] : a[0] - 1), (o[0] = l ? l[0] : o[0] + 1)),
                o[1] - a[1] === 0 &&
                  ((a[1] = r ? r[1] : a[1] - 1), (o[1] = l ? l[1] : o[1] + 1));
              var s = (e.coordinateSystem = new _.A());
              (s.zoomLimit = e.get("scaleLimit")),
                s.setBoundingRect(a[0], a[1], o[0] - a[0], o[1] - a[1]),
                s.setCenter(e.get("center"), t),
                s.setZoom(e.get("zoom")),
                this.group.attr({
                  x: s.x,
                  y: s.y,
                  scaleX: s.scaleX,
                  scaleY: s.scaleY,
                }),
                (this._min = a),
                (this._max = o);
            }),
            (t.prototype._updateController = function (e, t, i) {
              var n = this,
                a = this._controller,
                o = this._controllerHost,
                r = this.group;
              a.setPointerChecker(function (t, n, a) {
                var o = r.getBoundingRect();
                return (
                  o.applyTransform(r.transform),
                  o.contain(n, a) && !(0, I.I)(t, i, e)
                );
              }),
                a.enable(e.get("roam")),
                (o.zoomLimit = e.get("scaleLimit")),
                (o.zoom = e.coordinateSystem.getZoom()),
                a
                  .off("pan")
                  .off("zoom")
                  .on("pan", function (t) {
                    A.t(o, t.dx, t.dy),
                      i.dispatchAction({
                        seriesId: e.id,
                        type: "treeRoam",
                        dx: t.dx,
                        dy: t.dy,
                      });
                  })
                  .on("zoom", function (t) {
                    A.x(o, t.scale, t.originX, t.originY),
                      i.dispatchAction({
                        seriesId: e.id,
                        type: "treeRoam",
                        zoom: t.scale,
                        originX: t.originX,
                        originY: t.originY,
                      }),
                      n._updateNodeAndLinkScale(e),
                      i.updateLabelLayout();
                  });
            }),
            (t.prototype._updateNodeAndLinkScale = function (e) {
              var t = e.getData(),
                i = this._getNodeGlobalScale(e);
              t.eachItemGraphicEl(function (e, t) {
                e.setSymbolScale(i);
              });
            }),
            (t.prototype._getNodeGlobalScale = function (e) {
              var t = e.coordinateSystem;
              if ("view" !== t.type) return 1;
              var i = this._nodeScaleRatio,
                n = t.scaleX || 1;
              return ((t.getZoom() - 1) * i + 1) / n;
            }),
            (t.prototype.dispose = function () {
              this._controller && this._controller.dispose(),
                (this._controllerHost = null);
            }),
            (t.prototype.remove = function () {
              this._mainGroup.removeAll(), (this._data = null);
            }),
            (t.type = "tree"),
            t
          );
        })(L.A);
      function E(e, t) {
        var i = e.getItemLayout(t);
        return i && !isNaN(i.x) && !isNaN(i.y);
      }
      function V(e, t, i, n, o) {
        var d = !i,
          c = e.tree.getNodeByDataIndex(t),
          h = c.getModel(),
          p = c.getVisual("style").fill,
          g = !1 === c.isExpand && 0 !== c.children.length ? p : "#fff",
          f = e.tree.root,
          y = c.parentNode === f ? c : c.parentNode || c,
          m = e.getItemGraphicEl(y.dataIndex),
          v = y.getLayout(),
          x = m
            ? {
                x: m.__oldX,
                y: m.__oldY,
                rawX: m.__radialOldRawX,
                rawY: m.__radialOldRawY,
              }
            : v,
          b = c.getLayout();
        d
          ? (((i = new u.A(e, t, null, {
              symbolInnerColor: g,
              useNameLabel: !0,
            })).x = x.x),
            (i.y = x.y))
          : i.updateData(e, t, null, { symbolInnerColor: g, useNameLabel: !0 }),
          (i.__radialOldRawX = i.__radialRawX),
          (i.__radialOldRawY = i.__radialRawY),
          (i.__radialRawX = b.rawX),
          (i.__radialRawY = b.rawY),
          n.add(i),
          e.setItemGraphicEl(t, i),
          (i.__oldX = i.x),
          (i.__oldY = i.y),
          r.oi(i, { x: b.x, y: b.y }, o);
        var S = i.getSymbolPath();
        if ("radial" === o.get("layout")) {
          var _ = f.children[0],
            A = _.getLayout(),
            w = _.children.length,
            I = void 0,
            M = void 0;
          if (b.x === A.x && !0 === c.isExpand && _.children.length) {
            var L = {
              x:
                (_.children[0].getLayout().x +
                  _.children[w - 1].getLayout().x) /
                2,
              y:
                (_.children[0].getLayout().y +
                  _.children[w - 1].getLayout().y) /
                2,
            };
            (I = Math.atan2(L.y - A.y, L.x - A.x)) < 0 && (I = 2 * Math.PI + I),
              (M = L.x < A.x) && (I -= Math.PI);
          } else
            (I = Math.atan2(b.y - A.y, b.x - A.x)) < 0 && (I = 2 * Math.PI + I),
              0 === c.children.length ||
              (0 !== c.children.length && !1 === c.isExpand)
                ? (M = b.x < A.x) && (I -= Math.PI)
                : (M = b.x > A.x) || (I -= Math.PI);
          var D = M ? "left" : "right",
            N = h.getModel("label"),
            P = N.get("rotate"),
            E = P * (Math.PI / 180),
            V = S.getTextContent();
          V &&
            (S.setTextConfig({
              position: N.get("position") || D,
              rotation: null == P ? -I : E,
              origin: "center",
            }),
            V.setStyle("verticalAlign", "middle"));
        }
        var R = h.get(["emphasis", "focus"]),
          z =
            "relative" === R
              ? a.concatArray(c.getAncestorsIndices(), c.getDescendantIndices())
              : "ancestor" === R
              ? c.getAncestorsIndices()
              : "descendant" === R
              ? c.getDescendantIndices()
              : null;
        z && ((0, s.z)(i).focus = z),
          (function (e, t, i, n, o, s, u, d) {
            var c = t.getModel(),
              h = e.get("edgeShape"),
              p = e.get("layout"),
              g = e.getOrient(),
              f = e.get(["lineStyle", "curveness"]),
              y = e.get("edgeForkPosition"),
              m = c.getModel("lineStyle").getLineStyle(),
              v = n.__edge;
            if ("curve" === h)
              t.parentNode &&
                t.parentNode !== i &&
                (v || (v = n.__edge = new l.A({ shape: k(p, g, f, o, o) })),
                r.oi(v, { shape: k(p, g, f, s, u) }, e));
            else if ("polyline" === h)
              if ("orthogonal" === p) {
                if (
                  t !== i &&
                  t.children &&
                  0 !== t.children.length &&
                  !0 === t.isExpand
                ) {
                  for (var x = t.children, b = [], S = 0; S < x.length; S++) {
                    var _ = x[S].getLayout();
                    b.push([_.x, _.y]);
                  }
                  v ||
                    (v = n.__edge =
                      new T({
                        shape: {
                          parentPoint: [u.x, u.y],
                          childPoints: [[u.x, u.y]],
                          orient: g,
                          forkPosition: y,
                        },
                      })),
                    r.oi(
                      v,
                      { shape: { parentPoint: [u.x, u.y], childPoints: b } },
                      e
                    );
                }
              } else 0;
            v &&
              ("polyline" !== h || t.isExpand) &&
              (v.useStyle(a.defaults({ strokeNoScale: !0, fill: null }, m)),
              (0, C.Mx)(v, c, "lineStyle"),
              (0, C.DW)(v),
              d.add(v));
          })(o, c, f, i, x, v, b, n),
          i.__edge &&
            (i.onHoverStateChange = function (t) {
              if ("blur" !== t) {
                var n =
                  c.parentNode && e.getItemGraphicEl(c.parentNode.dataIndex);
                (n && n.hoverState === C.zX) || (0, C.Pk)(i.__edge, t);
              }
            });
      }
      function R(e, t, i, n, a) {
        var o = z(t.tree.root, e),
          l = o.source,
          s = o.sourceLayout,
          u = t.getItemGraphicEl(e.dataIndex);
        if (u) {
          var d = t.getItemGraphicEl(l.dataIndex).__edge,
            c =
              u.__edge ||
              (!1 === l.isExpand || 1 === l.children.length ? d : void 0),
            h = n.get("edgeShape"),
            p = n.get("layout"),
            g = n.get("orient"),
            f = n.get(["lineStyle", "curveness"]);
          c &&
            ("curve" === h
              ? r.Nz(c, { shape: k(p, g, f, s, s), style: { opacity: 0 } }, n, {
                  cb: function () {
                    i.remove(c);
                  },
                  removeOpt: a,
                })
              : "polyline" === h &&
                "orthogonal" === n.get("layout") &&
                r.Nz(
                  c,
                  {
                    shape: {
                      parentPoint: [s.x, s.y],
                      childPoints: [[s.x, s.y]],
                    },
                    style: { opacity: 0 },
                  },
                  n,
                  {
                    cb: function () {
                      i.remove(c);
                    },
                    removeOpt: a,
                  }
                ));
        }
      }
      function z(e, t) {
        for (
          var i, n = t.parentNode === e ? t : t.parentNode || t;
          null == (i = n.getLayout());

        )
          n = n.parentNode === e ? n : n.parentNode || n;
        return { source: n, sourceLayout: i };
      }
      function O(e, t, i, n, a) {
        var o = e.tree.getNodeByDataIndex(t),
          l = z(e.tree.root, o).sourceLayout,
          s = {
            duration: a.get("animationDurationUpdate"),
            easing: a.get("animationEasingUpdate"),
          };
        r.Nz(i, { x: l.x + 1, y: l.y + 1 }, a, {
          cb: function () {
            n.remove(i), e.setItemGraphicEl(t, null);
          },
          removeOpt: s,
        }),
          i.fadeOut(null, e.hostModel, { fadeLabel: !0, animation: s }),
          o.children.forEach(function (t) {
            R(t, e, n, a, s);
          }),
          R(o, e, n, a, s);
      }
      function k(e, t, i, n, a) {
        var o, r, l, s, u, d, c, h;
        if ("radial" === e) {
          (u = n.rawX), (c = n.rawY), (d = a.rawX), (h = a.rawY);
          var p = g(u, c),
            f = g(u, c + (h - c) * i),
            y = g(d, h + (c - h) * i),
            m = g(d, h);
          return {
            x1: p.x || 0,
            y1: p.y || 0,
            x2: m.x || 0,
            y2: m.y || 0,
            cpx1: f.x || 0,
            cpy1: f.y || 0,
            cpx2: y.x || 0,
            cpy2: y.y || 0,
          };
        }
        return (
          (u = n.x),
          (c = n.y),
          (d = a.x),
          (h = a.y),
          ("LR" !== t && "RL" !== t) ||
            ((o = u + (d - u) * i), (r = c), (l = d + (u - d) * i), (s = h)),
          ("TB" !== t && "BT" !== t) ||
            ((o = u), (r = c + (h - c) * i), (l = d), (s = h + (c - h) * i)),
          { x1: u, y1: c, x2: d, y2: h, cpx1: o, cpy1: r, cpx2: l, cpy2: s }
        );
      }
      const G = P;
      var B = i(15230),
        W = i(22824),
        F = i(19626),
        Y = i(78754),
        H = i(47423);
      const X = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.hasSymbolVisual = !0), (t.ignoreStyleOnData = !0), t;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getInitialData = function (e) {
            var t = { name: e.name, children: e.data },
              i = e.leaves || {},
              n = new F.A(i, this, this.ecModel),
              a = W.A.createTree(t, this, function (e) {
                e.wrapMethod("getItemModel", function (e, t) {
                  var i = a.getNodeByDataIndex(t);
                  return (
                    (i && i.children.length && i.isExpand) ||
                      (e.parentModel = n),
                    e
                  );
                });
              });
            var o = 0;
            a.eachNode("preorder", function (e) {
              e.depth > o && (o = e.depth);
            });
            var r =
              e.expandAndCollapse && e.initialTreeDepth >= 0
                ? e.initialTreeDepth
                : o;
            return (
              a.root.eachNode("preorder", function (e) {
                var t = e.hostTree.data.getRawDataItem(e.dataIndex);
                e.isExpand =
                  t && null != t.collapsed ? !t.collapsed : e.depth <= r;
              }),
              a.data
            );
          }),
          (t.prototype.getOrient = function () {
            var e = this.get("orient");
            return (
              "horizontal" === e ? (e = "LR") : "vertical" === e && (e = "TB"),
              e
            );
          }),
          (t.prototype.setZoom = function (e) {
            this.option.zoom = e;
          }),
          (t.prototype.setCenter = function (e) {
            this.option.center = e;
          }),
          (t.prototype.formatTooltip = function (e, t, i) {
            for (
              var n = this.getData().tree,
                a = n.root.children[0],
                o = n.getNodeByDataIndex(e),
                r = o.getValue(),
                l = o.name;
              o && o !== a;

            )
              (l = o.parentNode.name + "." + l), (o = o.parentNode);
            return (0, Y.Qx)("nameValue", {
              name: l,
              value: r,
              noValue: isNaN(r) || null == r,
            });
          }),
          (t.prototype.getDataParams = function (t) {
            var i = e.prototype.getDataParams.apply(this, arguments),
              n = this.getData().tree.getNodeByDataIndex(t);
            return (
              (i.treeAncestors = (0, H.ev)(n, this)),
              (i.collapsed = !n.isExpand),
              i
            );
          }),
          (t.type = "series.tree"),
          (t.layoutMode = "box"),
          (t.defaultOption = {
            z: 2,
            coordinateSystem: "view",
            left: "12%",
            top: "12%",
            right: "12%",
            bottom: "12%",
            layout: "orthogonal",
            edgeShape: "curve",
            edgeForkPosition: "50%",
            roam: !1,
            nodeScaleRatio: 0.4,
            center: null,
            zoom: 1,
            orient: "LR",
            symbol: "emptyCircle",
            symbolSize: 7,
            expandAndCollapse: !0,
            initialTreeDepth: 2,
            lineStyle: { color: "#ccc", width: 1.5, curveness: 0.5 },
            itemStyle: { color: "lightsteelblue", borderWidth: 1.5 },
            label: { show: !0 },
            animationEasing: "linear",
            animationDuration: 700,
            animationDurationUpdate: 500,
          }),
          t
        );
      })(B.A);
      function U(e, t) {
        for (var i, n = [e]; (i = n.pop()); )
          if ((t(i), i.isExpand)) {
            var a = i.children;
            if (a.length) for (var o = a.length - 1; o >= 0; o--) n.push(a[o]);
          }
      }
      function Z(e, t) {
        e.eachSeriesByType("tree", function (e) {
          !(function (e, t) {
            var i = f(e, t);
            e.layoutInfo = i;
            var n = e.get("layout"),
              a = 0,
              o = 0,
              r = null;
            "radial" === n
              ? ((a = 2 * Math.PI),
                (o = Math.min(i.height, i.width) / 2),
                (r = p(function (e, t) {
                  return (e.parentNode === t.parentNode ? 1 : 2) / e.depth;
                })))
              : ((a = i.width), (o = i.height), (r = p()));
            var l = e.getData().tree.root,
              s = l.children[0];
            if (s) {
              !(function (e) {
                var t = e;
                t.hierNode = {
                  defaultAncestor: null,
                  ancestor: t,
                  prelim: 0,
                  modifier: 0,
                  change: 0,
                  shift: 0,
                  i: 0,
                  thread: null,
                };
                for (var i, n, a = [t]; (i = a.pop()); )
                  if (((n = i.children), i.isExpand && n.length))
                    for (var o = n.length - 1; o >= 0; o--) {
                      var r = n[o];
                      (r.hierNode = {
                        defaultAncestor: null,
                        ancestor: r,
                        prelim: 0,
                        modifier: 0,
                        change: 0,
                        shift: 0,
                        i: o,
                        thread: null,
                      }),
                        a.push(r);
                    }
              })(l),
                (function (e, t, i) {
                  for (var n, a = [e], o = []; (n = a.pop()); )
                    if ((o.push(n), n.isExpand)) {
                      var r = n.children;
                      if (r.length)
                        for (var l = 0; l < r.length; l++) a.push(r[l]);
                    }
                  for (; (n = o.pop()); ) t(n, i);
                })(s, c, r),
                (l.hierNode.modifier = -s.hierNode.prelim),
                U(s, h);
              var u = s,
                d = s,
                y = s;
              U(s, function (e) {
                var t = e.getLayout().x;
                t < u.getLayout().x && (u = e),
                  t > d.getLayout().x && (d = e),
                  e.depth > y.depth && (y = e);
              });
              var m = u === d ? 1 : r(u, d) / 2,
                v = m - u.getLayout().x,
                x = 0,
                b = 0,
                S = 0,
                _ = 0;
              if ("radial" === n)
                (x = a / (d.getLayout().x + m + v)),
                  (b = o / (y.depth - 1 || 1)),
                  U(s, function (e) {
                    (S = (e.getLayout().x + v) * x), (_ = (e.depth - 1) * b);
                    var t = g(S, _);
                    e.setLayout({ x: t.x, y: t.y, rawX: S, rawY: _ }, !0);
                  });
              else {
                var A = e.getOrient();
                "RL" === A || "LR" === A
                  ? ((b = o / (d.getLayout().x + m + v)),
                    (x = a / (y.depth - 1 || 1)),
                    U(s, function (e) {
                      (_ = (e.getLayout().x + v) * b),
                        (S =
                          "LR" === A
                            ? (e.depth - 1) * x
                            : a - (e.depth - 1) * x),
                        e.setLayout({ x: S, y: _ }, !0);
                    }))
                  : ("TB" !== A && "BT" !== A) ||
                    ((x = a / (d.getLayout().x + m + v)),
                    (b = o / (y.depth - 1 || 1)),
                    U(s, function (e) {
                      (S = (e.getLayout().x + v) * x),
                        (_ =
                          "TB" === A
                            ? (e.depth - 1) * b
                            : o - (e.depth - 1) * b),
                        e.setLayout({ x: S, y: _ }, !0);
                    }));
              }
            }
          })(e, t);
        });
      }
      function q(e) {
        e.eachSeriesByType("tree", function (e) {
          var t = e.getData();
          t.tree.eachNode(function (e) {
            var i = e.getModel().getModel("itemStyle").getItemStyle(),
              n = t.ensureUniqueItemVisual(e.dataIndex, "style");
            (0, a.extend)(n, i);
          });
        });
      }
      var j = i(25879);
      function Q(e) {
        e.registerChartView(G),
          e.registerSeriesModel(X),
          e.registerLayout(Z),
          e.registerVisual(q),
          (function (e) {
            e.registerAction(
              {
                type: "treeExpandAndCollapse",
                event: "treeExpandAndCollapse",
                update: "update",
              },
              function (e, t) {
                t.eachComponent(
                  { mainType: "series", subType: "tree", query: e },
                  function (t) {
                    var i = e.dataIndex,
                      n = t.getData().tree.getNodeByDataIndex(i);
                    n.isExpand = !n.isExpand;
                  }
                );
              }
            ),
              e.registerAction(
                { type: "treeRoam", event: "treeRoam", update: "none" },
                function (e, t, i) {
                  t.eachComponent(
                    { mainType: "series", subType: "tree", query: e },
                    function (t) {
                      var n = t.coordinateSystem,
                        a = (0, j.f)(n, e, void 0, i);
                      t.setCenter && t.setCenter(a.center),
                        t.setZoom && t.setZoom(a.zoom);
                    }
                  );
                }
              );
          })(e);
      }
    },
    73685: (e, t, i) => {
      i.d(t, { A: () => a });
      var n = i(59974);
      function a(e) {
        var t = e.getData().tree,
          i = {};
        t.eachNode(function (t) {
          for (var a = t; a && a.depth > 1; ) a = a.parentNode;
          var o = (0, n.x)(e.ecModel, a.name || a.dataIndex + "", i);
          t.setVisual("decal", o);
        });
      }
    },
    76468: (e, t, i) => {
      i.d(t, { a: () => M });
      var n = i(37292),
        a = i(32502),
        o = i(22007),
        r = i(39253),
        l = i(92731),
        s = i(38794),
        u = i(41406),
        d = i(29379),
        c = i(75588),
        h = i(87689),
        p = ["itemStyle", "opacity"],
        g = (function (e) {
          function t(t, i) {
            var n = e.call(this) || this,
              r = n,
              l = new a.A(),
              s = new o.Ay();
            return (
              r.setTextContent(s),
              n.setTextGuideLine(l),
              n.updateData(t, i, !0),
              n
            );
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.updateData = function (e, t, i) {
              var n = this,
                a = e.hostModel,
                o = e.getItemModel(t),
                l = e.getItemLayout(t),
                s = o.getModel("emphasis"),
                d = o.get(p);
              (d = null == d ? 1 : d),
                i || (0, r.ap)(n),
                n.useStyle(e.getItemVisual(t, "style")),
                (n.style.lineJoin = "round"),
                i
                  ? (n.setShape({ points: l.points }),
                    (n.style.opacity = 0),
                    r.LW(n, { style: { opacity: d } }, a, t))
                  : r.oi(
                      n,
                      { style: { opacity: d }, shape: { points: l.points } },
                      a,
                      t
                    ),
                (0, u.Mx)(n, o),
                this._updateLabel(e, t),
                (0, u.Lm)(
                  this,
                  s.get("focus"),
                  s.get("blurScope"),
                  s.get("disabled")
                );
            }),
            (t.prototype._updateLabel = function (e, t) {
              var i = this,
                n = this.getTextGuideLine(),
                a = i.getTextContent(),
                o = e.hostModel,
                s = e.getItemModel(t),
                u = e.getItemLayout(t).label,
                d = e.getItemVisual(t, "style"),
                p = d.fill;
              (0, h.qM)(
                a,
                (0, h.lx)(s),
                {
                  labelFetcher: e.hostModel,
                  labelDataIndex: t,
                  defaultOpacity: d.opacity,
                  defaultText: e.getName(t),
                },
                {
                  normal: {
                    align: u.textAlign,
                    verticalAlign: u.verticalAlign,
                  },
                }
              ),
                i.setTextConfig({
                  local: !0,
                  inside: !!u.inside,
                  insideStroke: p,
                  outsideFill: p,
                });
              var g = u.linePoints;
              n.setShape({ points: g }),
                (i.textGuideLineConfig = {
                  anchor: g ? new l.A(g[0][0], g[0][1]) : null,
                }),
                r.oi(a, { style: { x: u.x, y: u.y } }, o, t),
                a.attr({
                  rotation: u.rotation,
                  originX: u.x,
                  originY: u.y,
                  z2: 10,
                }),
                (0, c.eR)(i, (0, c.rv)(s), { stroke: p });
            }),
            t
          );
        })(s.A);
      const f = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i.ignoreLabelLineUpdate = !0), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            var n = e.getData(),
              a = this._data,
              o = this.group;
            n
              .diff(a)
              .add(function (e) {
                var t = new g(n, e);
                n.setItemGraphicEl(e, t), o.add(t);
              })
              .update(function (e, t) {
                var i = a.getItemGraphicEl(t);
                i.updateData(n, e), o.add(i), n.setItemGraphicEl(e, i);
              })
              .remove(function (t) {
                var i = a.getItemGraphicEl(t);
                r.t5(i, e, t);
              })
              .execute(),
              (this._data = n);
          }),
          (t.prototype.remove = function () {
            this.group.removeAll(), (this._data = null);
          }),
          (t.prototype.dispose = function () {}),
          (t.type = "funnel"),
          t
        );
      })(d.A);
      var y = i(70441),
        m = i(5508),
        v = i(34575),
        x = i(30130),
        b = i(26272);
      const S = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.init = function (t) {
            e.prototype.init.apply(this, arguments),
              (this.legendVisualProvider = new b.A(
                y.bind(this.getData, this),
                y.bind(this.getRawData, this)
              )),
              this._defaultLabelLine(t);
          }),
          (t.prototype.getInitialData = function (e, t) {
            return (0, m.A)(this, {
              coordDimensions: ["value"],
              encodeDefaulter: y.curry(x.ln, this),
            });
          }),
          (t.prototype._defaultLabelLine = function (e) {
            (0, v.M5)(e, "labelLine", ["show"]);
            var t = e.labelLine,
              i = e.emphasis.labelLine;
            (t.show = t.show && e.label.show),
              (i.show = i.show && e.emphasis.label.show);
          }),
          (t.prototype.getDataParams = function (t) {
            var i = this.getData(),
              n = e.prototype.getDataParams.call(this, t),
              a = i.mapDimension("value"),
              o = i.getSum(a);
            return (
              (n.percent = o ? +((i.get(a, t) / o) * 100).toFixed(2) : 0),
              n.$vars.push("percent"),
              n
            );
          }),
          (t.type = "series.funnel"),
          (t.defaultOption = {
            z: 2,
            legendHoverLink: !0,
            colorBy: "data",
            left: 80,
            top: 60,
            right: 80,
            bottom: 60,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            orient: "vertical",
            gap: 0,
            funnelAlign: "center",
            label: { show: !0, position: "outer" },
            labelLine: { show: !0, length: 20, lineStyle: { width: 1 } },
            itemStyle: { borderColor: "#fff", borderWidth: 1 },
            emphasis: { label: { show: !0 } },
            select: { itemStyle: { borderColor: "#212121" } },
          }),
          t
        );
      })(i(15230).A);
      var _ = i(67730),
        A = i(85941);
      function w(e, t) {
        e.eachSeriesByType("funnel", function (e) {
          var i = e.getData(),
            n = i.mapDimension("value"),
            a = e.get("sort"),
            o = (function (e, t) {
              return _.dV(e.getBoxLayoutParams(), {
                width: t.getWidth(),
                height: t.getHeight(),
              });
            })(e, t),
            r = e.get("orient"),
            l = o.width,
            s = o.height,
            u = (function (e, t) {
              for (
                var i = e.mapDimension("value"),
                  n = e.mapArray(i, function (e) {
                    return e;
                  }),
                  a = [],
                  o = "ascending" === t,
                  r = 0,
                  l = e.count();
                r < l;
                r++
              )
                a[r] = r;
              return (
                (0, y.isFunction)(t)
                  ? a.sort(t)
                  : "none" !== t &&
                    a.sort(function (e, t) {
                      return o ? n[e] - n[t] : n[t] - n[e];
                    }),
                a
              );
            })(i, a),
            d = o.x,
            c = o.y,
            h =
              "horizontal" === r
                ? [
                    (0, A.lo)(e.get("minSize"), s),
                    (0, A.lo)(e.get("maxSize"), s),
                  ]
                : [
                    (0, A.lo)(e.get("minSize"), l),
                    (0, A.lo)(e.get("maxSize"), l),
                  ],
            p = i.getDataExtent(n),
            g = e.get("min"),
            f = e.get("max");
          null == g && (g = Math.min(p[0], 0)), null == f && (f = p[1]);
          var m = e.get("funnelAlign"),
            v = e.get("gap"),
            x =
              (("horizontal" === r ? l : s) - v * (i.count() - 1)) / i.count(),
            b = function (e, t) {
              if ("horizontal" === r) {
                var a = i.get(n, e) || 0,
                  o = (0, A.Cb)(a, [g, f], h, !0),
                  u = void 0;
                switch (m) {
                  case "top":
                    u = c;
                    break;
                  case "center":
                    u = c + (s - o) / 2;
                    break;
                  case "bottom":
                    u = c + (s - o);
                }
                return [
                  [t, u],
                  [t, u + o],
                ];
              }
              var p,
                y = i.get(n, e) || 0,
                v = (0, A.Cb)(y, [g, f], h, !0);
              switch (m) {
                case "left":
                  p = d;
                  break;
                case "center":
                  p = d + (l - v) / 2;
                  break;
                case "right":
                  p = d + l - v;
              }
              return [
                [p, t],
                [p + v, t],
              ];
            };
          "ascending" === a &&
            ((x = -x),
            (v = -v),
            "horizontal" === r ? (d += l) : (c += s),
            (u = u.reverse()));
          for (var S = 0; S < u.length; S++) {
            var w = u[S],
              I = u[S + 1],
              M = i.getItemModel(w);
            if ("horizontal" === r) {
              var L = M.get(["itemStyle", "width"]);
              null == L
                ? (L = x)
                : ((L = (0, A.lo)(L, l)), "ascending" === a && (L = -L));
              var D = b(w, d),
                C = b(I, d + L);
              (d += L + v),
                i.setItemLayout(w, { points: D.concat(C.slice().reverse()) });
            } else {
              var N = M.get(["itemStyle", "height"]);
              null == N
                ? (N = x)
                : ((N = (0, A.lo)(N, s)), "ascending" === a && (N = -N));
              (D = b(w, c)), (C = b(I, c + N));
              (c += N + v),
                i.setItemLayout(w, { points: D.concat(C.slice().reverse()) });
            }
          }
          !(function (e) {
            var t = e.hostModel.get("orient");
            e.each(function (i) {
              var n,
                a,
                o,
                r,
                l = e.getItemModel(i),
                s = l.getModel("label").get("position"),
                u = l.getModel("labelLine"),
                d = e.getItemLayout(i),
                c = d.points,
                h =
                  "inner" === s ||
                  "inside" === s ||
                  "center" === s ||
                  "insideLeft" === s ||
                  "insideRight" === s;
              if (h)
                "insideLeft" === s
                  ? ((a = (c[0][0] + c[3][0]) / 2 + 5),
                    (o = (c[0][1] + c[3][1]) / 2),
                    (n = "left"))
                  : "insideRight" === s
                  ? ((a = (c[1][0] + c[2][0]) / 2 - 5),
                    (o = (c[1][1] + c[2][1]) / 2),
                    (n = "right"))
                  : ((a = (c[0][0] + c[1][0] + c[2][0] + c[3][0]) / 4),
                    (o = (c[0][1] + c[1][1] + c[2][1] + c[3][1]) / 4),
                    (n = "center")),
                  (r = [
                    [a, o],
                    [a, o],
                  ]);
              else {
                var p = void 0,
                  g = void 0,
                  f = void 0,
                  y = void 0,
                  m = u.get("length");
                "left" === s
                  ? ((p = (c[3][0] + c[0][0]) / 2),
                    (g = (c[3][1] + c[0][1]) / 2),
                    (a = (f = p - m) - 5),
                    (n = "right"))
                  : "right" === s
                  ? ((p = (c[1][0] + c[2][0]) / 2),
                    (g = (c[1][1] + c[2][1]) / 2),
                    (a = (f = p + m) + 5),
                    (n = "left"))
                  : "top" === s
                  ? ((p = (c[3][0] + c[0][0]) / 2),
                    (o = (y = (g = (c[3][1] + c[0][1]) / 2) - m) - 5),
                    (n = "center"))
                  : "bottom" === s
                  ? ((p = (c[1][0] + c[2][0]) / 2),
                    (o = (y = (g = (c[1][1] + c[2][1]) / 2) + m) + 5),
                    (n = "center"))
                  : "rightTop" === s
                  ? ((p = "horizontal" === t ? c[3][0] : c[1][0]),
                    (g = "horizontal" === t ? c[3][1] : c[1][1]),
                    "horizontal" === t
                      ? ((o = (y = g - m) - 5), (n = "center"))
                      : ((a = (f = p + m) + 5), (n = "top")))
                  : "rightBottom" === s
                  ? ((p = c[2][0]),
                    (g = c[2][1]),
                    "horizontal" === t
                      ? ((o = (y = g + m) + 5), (n = "center"))
                      : ((a = (f = p + m) + 5), (n = "bottom")))
                  : "leftTop" === s
                  ? ((p = c[0][0]),
                    (g = "horizontal" === t ? c[0][1] : c[1][1]),
                    "horizontal" === t
                      ? ((o = (y = g - m) - 5), (n = "center"))
                      : ((a = (f = p - m) - 5), (n = "right")))
                  : "leftBottom" === s
                  ? ((p = "horizontal" === t ? c[1][0] : c[3][0]),
                    (g = "horizontal" === t ? c[1][1] : c[2][1]),
                    "horizontal" === t
                      ? ((o = (y = g + m) + 5), (n = "center"))
                      : ((a = (f = p - m) - 5), (n = "right")))
                  : ((p = (c[1][0] + c[2][0]) / 2),
                    (g = (c[1][1] + c[2][1]) / 2),
                    "horizontal" === t
                      ? ((o = (y = g + m) + 5), (n = "center"))
                      : ((a = (f = p + m) + 5), (n = "left"))),
                  "horizontal" === t ? (a = f = p) : (o = y = g),
                  (r = [
                    [p, g],
                    [f, y],
                  ]);
              }
              d.label = {
                linePoints: r,
                x: a,
                y: o,
                verticalAlign: "middle",
                textAlign: n,
                inside: h,
              };
            });
          })(i);
        });
      }
      var I = i(15534);
      function M(e) {
        e.registerChartView(f),
          e.registerSeriesModel(S),
          e.registerLayout(w),
          e.registerProcessor((0, I.A)("funnel"));
      }
    },
    76630: (e, t, i) => {
      i.d(t, { a: () => I });
      var n = i(55056),
        a = i(37292),
        o = i(47945),
        r = i(39253),
        l = i(19084),
        s = i(32502),
        u = i(41406),
        d = i(29379),
        c = i(85941),
        h = i(70441);
      function p(e, t, i, n) {
        for (var a, o = [], r = 0; r < i.length; r++) {
          var l = i[r],
            s = e.get(e.mapDimension(l), t);
          (a = s),
            ("category" === n.getAxis(l).type
              ? null == a
              : null == a || isNaN(a)) || o.push(n.dataToPoint(s, l));
        }
        return o;
      }
      function g(e, t, i, n, a) {
        var o = p(e, i, n, a),
          r = new s.A({ shape: { points: o }, z2: 10 });
        return t.add(r), e.setItemGraphicEl(i, r), r;
      }
      function f(e) {
        var t = e.get("smooth", !0);
        return (
          !0 === t && (t = 0.3),
          (t = (0, c.Sm)(t)),
          (0, h.eqNaN)(t) && (t = 0),
          { smooth: t }
        );
      }
      function y(e, t, i, n) {
        e.useStyle(t.getItemVisual(i, "style")),
          (e.style.fill = null),
          e.setShape("smooth", n.smooth);
        var a = t.getItemModel(i),
          o = a.getModel("emphasis");
        (0, u.Mx)(e, a, "lineStyle"),
          (0, u.Lm)(e, o.get("focus"), o.get("blurScope"), o.get("disabled"));
      }
      const m = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (
            (i.type = t.type),
            (i._dataGroup = new o.A()),
            (i._initialized = !1),
            i
          );
        }
        return (
          (0, a.C6)(t, e),
          (t.prototype.init = function () {
            this.group.add(this._dataGroup);
          }),
          (t.prototype.render = function (e, t, i, n) {
            this._progressiveEls = null;
            var a = this._dataGroup,
              o = e.getData(),
              s = this._data,
              u = e.coordinateSystem,
              d = u.dimensions,
              c = f(e);
            if (
              (o
                .diff(s)
                .add(function (e) {
                  y(g(o, a, e, d, u), o, e, c);
                })
                .update(function (t, i) {
                  var n = s.getItemGraphicEl(i),
                    a = p(o, t, d, u);
                  o.setItemGraphicEl(t, n),
                    r.oi(n, { shape: { points: a } }, e, t),
                    (0, r.ap)(n),
                    y(n, o, t, c);
                })
                .remove(function (e) {
                  var t = s.getItemGraphicEl(e);
                  a.remove(t);
                })
                .execute(),
              !this._initialized)
            ) {
              this._initialized = !0;
              var h = (function (e, t, i) {
                var n = e.model,
                  a = e.getRect(),
                  o = new l.A({
                    shape: { x: a.x, y: a.y, width: a.width, height: a.height },
                  }),
                  s = "horizontal" === n.get("layout") ? "width" : "height";
                return (
                  o.setShape(s, 0),
                  r.LW(
                    o,
                    { shape: { width: a.width, height: a.height } },
                    t,
                    i
                  ),
                  o
                );
              })(u, e, function () {
                setTimeout(function () {
                  a.removeClipPath();
                });
              });
              a.setClipPath(h);
            }
            this._data = o;
          }),
          (t.prototype.incrementalPrepareRender = function (e, t, i) {
            (this._initialized = !0),
              (this._data = null),
              this._dataGroup.removeAll();
          }),
          (t.prototype.incrementalRender = function (e, t, i) {
            for (
              var n = t.getData(),
                a = t.coordinateSystem,
                o = a.dimensions,
                r = f(t),
                l = (this._progressiveEls = []),
                s = e.start;
              s < e.end;
              s++
            ) {
              var u = g(n, this._dataGroup, s, o, a);
              (u.incremental = !0), y(u, n, s, r), l.push(u);
            }
          }),
          (t.prototype.remove = function () {
            this._dataGroup && this._dataGroup.removeAll(), (this._data = null);
          }),
          (t.type = "parallel"),
          t
        );
      })(d.A);
      var v = i(15230),
        x = i(62362);
      function b(e) {
        var t = e.ecModel.getComponent("parallel", e.get("parallelIndex"));
        if (t) {
          var i = {};
          return (
            (0, h.each)(t.dimensions, function (e) {
              var t = +e.replace("dim", "");
              i[e] = t;
            }),
            i
          );
        }
      }
      const S = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (
            (i.type = t.type),
            (i.visualStyleAccessPath = "lineStyle"),
            (i.visualDrawType = "stroke"),
            i
          );
        }
        return (
          (0, a.C6)(t, e),
          (t.prototype.getInitialData = function (e, t) {
            return (0, x.A)(null, this, {
              useEncodeDefaulter: (0, h.bind)(b, null, this),
            });
          }),
          (t.prototype.getRawIndicesByActiveState = function (e) {
            var t = this.coordinateSystem,
              i = this.getData(),
              n = [];
            return (
              t.eachActiveState(i, function (t, a) {
                e === t && n.push(i.getRawIndex(a));
              }),
              n
            );
          }),
          (t.type = "series.parallel"),
          (t.dependencies = ["parallel"]),
          (t.defaultOption = {
            z: 2,
            coordinateSystem: "parallel",
            parallelIndex: 0,
            label: { show: !1 },
            inactiveOpacity: 0.05,
            activeOpacity: 1,
            lineStyle: { width: 1, opacity: 0.45, type: "solid" },
            emphasis: { label: { show: !1 } },
            progressive: 500,
            smooth: !1,
            animationEasing: "linear",
          }),
          t
        );
      })(v.A);
      var _ = ["lineStyle", "opacity"];
      const A = {
        seriesType: "parallel",
        reset: function (e, t) {
          var i = e.coordinateSystem,
            n = {
              normal: e.get(["lineStyle", "opacity"]),
              active: e.get("activeOpacity"),
              inactive: e.get("inactiveOpacity"),
            };
          return {
            progress: function (e, t) {
              i.eachActiveState(
                t,
                function (e, i) {
                  var a = n[e];
                  if ("normal" === e && t.hasItemOption) {
                    var o = t.getItemModel(i).get(_, !0);
                    null != o && (a = o);
                  }
                  t.ensureUniqueItemVisual(i, "style").opacity = a;
                },
                e.start,
                e.end
              );
            },
          };
        },
      };
      var w = i(80254);
      function I(e) {
        (0, n.Y)(w.a),
          e.registerChartView(m),
          e.registerSeriesModel(S),
          e.registerVisual(e.PRIORITY.VISUAL.BRUSH, A);
      }
    },
    82295: (e, t, i) => {
      i.d(t, { a: () => B });
      var n = i(37292),
        a = i(70),
        o = i(19084),
        r = i(56073),
        l = i(39253),
        s = i(41406),
        u = i(29379),
        d = i(87689),
        c = i(3569),
        h = i(70441),
        p = function () {
          (this.x1 = 0),
            (this.y1 = 0),
            (this.x2 = 0),
            (this.y2 = 0),
            (this.cpx1 = 0),
            (this.cpy1 = 0),
            (this.cpx2 = 0),
            (this.cpy2 = 0),
            (this.extent = 0);
        },
        g = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getDefaultShape = function () {
              return new p();
            }),
            (t.prototype.buildPath = function (e, t) {
              var i = t.extent;
              e.moveTo(t.x1, t.y1),
                e.bezierCurveTo(t.cpx1, t.cpy1, t.cpx2, t.cpy2, t.x2, t.y2),
                "vertical" === t.orient
                  ? (e.lineTo(t.x2 + i, t.y2),
                    e.bezierCurveTo(
                      t.cpx2 + i,
                      t.cpy2,
                      t.cpx1 + i,
                      t.cpy1,
                      t.x1 + i,
                      t.y1
                    ))
                  : (e.lineTo(t.x2, t.y2 + i),
                    e.bezierCurveTo(
                      t.cpx2,
                      t.cpy2 + i,
                      t.cpx1,
                      t.cpy1 + i,
                      t.x1,
                      t.y1 + i
                    )),
                e.closePath();
            }),
            (t.prototype.highlight = function () {
              (0, s.HY)(this);
            }),
            (t.prototype.downplay = function () {
              (0, s.SD)(this);
            }),
            t
          );
        })(a.Ay),
        f = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), (i._focusAdjacencyDisabled = !1), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.render = function (e, t, i) {
              var n = this,
                a = e.getGraph(),
                r = this.group,
                u = e.layoutInfo,
                p = u.width,
                f = u.height,
                m = e.getData(),
                v = e.getData("edge"),
                x = e.get("orient");
              (this._model = e),
                r.removeAll(),
                (r.x = u.x),
                (r.y = u.y),
                a.eachEdge(function (t) {
                  var i = new g(),
                    n = (0, c.z)(i);
                  (n.dataIndex = t.dataIndex),
                    (n.seriesIndex = e.seriesIndex),
                    (n.dataType = "edge");
                  var a,
                    o,
                    l,
                    u,
                    m,
                    b,
                    S,
                    _,
                    A = t.getModel(),
                    w = A.getModel("lineStyle"),
                    I = w.get("curveness"),
                    M = t.node1.getLayout(),
                    L = t.node1.getModel(),
                    D = L.get("localX"),
                    C = L.get("localY"),
                    N = t.node2.getLayout(),
                    T = t.node2.getModel(),
                    P = T.get("localX"),
                    E = T.get("localY"),
                    V = t.getLayout();
                  (i.shape.extent = Math.max(1, V.dy)),
                    (i.shape.orient = x),
                    "vertical" === x
                      ? ((a = (null != D ? D * p : M.x) + V.sy),
                        (o = (null != C ? C * f : M.y) + M.dy),
                        (l = (null != P ? P * p : N.x) + V.ty),
                        (m = a),
                        (b = o * (1 - I) + (u = null != E ? E * f : N.y) * I),
                        (S = l),
                        (_ = o * I + u * (1 - I)))
                      : ((a = (null != D ? D * p : M.x) + M.dx),
                        (o = (null != C ? C * f : M.y) + V.sy),
                        (m = a * (1 - I) + (l = null != P ? P * p : N.x) * I),
                        (b = o),
                        (S = a * I + l * (1 - I)),
                        (_ = u = (null != E ? E * f : N.y) + V.ty)),
                    i.setShape({
                      x1: a,
                      y1: o,
                      x2: l,
                      y2: u,
                      cpx1: m,
                      cpy1: b,
                      cpx2: S,
                      cpy2: _,
                    }),
                    i.useStyle(w.getItemStyle()),
                    y(i.style, x, t);
                  var R = "" + A.get("value"),
                    z = (0, d.lx)(A, "edgeLabel");
                  (0, d.qM)(i, z, {
                    labelFetcher: {
                      getFormattedLabel: function (t, i, n, a, o, r) {
                        return e.getFormattedLabel(
                          t,
                          i,
                          "edge",
                          a,
                          (0, h.retrieve3)(
                            o,
                            z.normal && z.normal.get("formatter"),
                            R
                          ),
                          r
                        );
                      },
                    },
                    labelDataIndex: t.dataIndex,
                    defaultText: R,
                  }),
                    i.setTextConfig({ position: "inside" });
                  var O = A.getModel("emphasis");
                  (0, s.Mx)(i, A, "lineStyle", function (e) {
                    var i = e.getItemStyle();
                    return y(i, x, t), i;
                  }),
                    r.add(i),
                    v.setItemGraphicEl(t.dataIndex, i);
                  var k = O.get("focus");
                  (0,
                  s.Lm)(i, "adjacency" === k ? t.getAdjacentDataIndices() : "trajectory" === k ? t.getTrajectoryDataIndices() : k, O.get("blurScope"), O.get("disabled"));
                }),
                a.eachNode(function (t) {
                  var i = t.getLayout(),
                    n = t.getModel(),
                    a = n.get("localX"),
                    l = n.get("localY"),
                    u = n.getModel("emphasis"),
                    h = n.get(["itemStyle", "borderRadius"]) || 0,
                    g = new o.A({
                      shape: {
                        x: null != a ? a * p : i.x,
                        y: null != l ? l * f : i.y,
                        width: i.dx,
                        height: i.dy,
                        r: h,
                      },
                      style: n.getModel("itemStyle").getItemStyle(),
                      z2: 10,
                    });
                  (0, d.qM)(g, (0, d.lx)(n), {
                    labelFetcher: {
                      getFormattedLabel: function (t, i) {
                        return e.getFormattedLabel(t, i, "node");
                      },
                    },
                    labelDataIndex: t.dataIndex,
                    defaultText: t.id,
                  }),
                    (g.disableLabelAnimation = !0),
                    g.setStyle("fill", t.getVisual("color")),
                    g.setStyle("decal", t.getVisual("style").decal),
                    (0, s.Mx)(g, n),
                    r.add(g),
                    m.setItemGraphicEl(t.dataIndex, g),
                    ((0, c.z)(g).dataType = "node");
                  var y = u.get("focus");
                  (0,
                  s.Lm)(g, "adjacency" === y ? t.getAdjacentDataIndices() : "trajectory" === y ? t.getTrajectoryDataIndices() : y, u.get("blurScope"), u.get("disabled"));
                }),
                m.eachItemGraphicEl(function (t, a) {
                  m.getItemModel(a).get("draggable") &&
                    ((t.drift = function (t, o) {
                      (n._focusAdjacencyDisabled = !0),
                        (this.shape.x += t),
                        (this.shape.y += o),
                        this.dirty(),
                        i.dispatchAction({
                          type: "dragNode",
                          seriesId: e.id,
                          dataIndex: m.getRawIndex(a),
                          localX: this.shape.x / p,
                          localY: this.shape.y / f,
                        });
                    }),
                    (t.ondragend = function () {
                      n._focusAdjacencyDisabled = !1;
                    }),
                    (t.draggable = !0),
                    (t.cursor = "move"));
                }),
                !this._data &&
                  e.isAnimationEnabled() &&
                  r.setClipPath(
                    (function (e, t, i) {
                      var n = new o.A({
                        shape: {
                          x: e.x - 10,
                          y: e.y - 10,
                          width: 0,
                          height: e.height + 20,
                        },
                      });
                      return (
                        l.LW(n, { shape: { width: e.width + 20 } }, t, i), n
                      );
                    })(r.getBoundingRect(), e, function () {
                      r.removeClipPath();
                    })
                  ),
                (this._data = e.getData());
            }),
            (t.prototype.dispose = function () {}),
            (t.type = "sankey"),
            t
          );
        })(u.A);
      function y(e, t, i) {
        switch (e.fill) {
          case "source":
            (e.fill = i.node1.getVisual("color")),
              (e.decal = i.node1.getVisual("style").decal);
            break;
          case "target":
            (e.fill = i.node2.getVisual("color")),
              (e.decal = i.node2.getVisual("style").decal);
            break;
          case "gradient":
            var n = i.node1.getVisual("color"),
              a = i.node2.getVisual("color");
            (0, h.isString)(n) &&
              (0, h.isString)(a) &&
              (e.fill = new r.A(
                0,
                0,
                +("horizontal" === t),
                +("vertical" === t),
                [
                  { color: n, offset: 0 },
                  { color: a, offset: 1 },
                ]
              ));
        }
      }
      const m = f;
      var v = i(15230),
        x = i(49626),
        b = i(19626),
        S = i(78754),
        _ = (function (e) {
          function t() {
            var i = (null !== e && e.apply(this, arguments)) || this;
            return (i.type = t.type), i;
          }
          return (
            (0, n.C6)(t, e),
            (t.prototype.getInitialData = function (e, t) {
              var i = e.edges || e.links || [],
                n = e.data || e.nodes || [],
                a = e.levels || [];
              this.levelModels = [];
              for (var o = this.levelModels, r = 0; r < a.length; r++)
                null != a[r].depth &&
                  a[r].depth >= 0 &&
                  (o[a[r].depth] = new b.A(a[r], this, t));
              var l = (0, x.A)(n, i, this, !0, function (e, t) {
                e.wrapMethod("getItemModel", function (e, t) {
                  var i = e.parentModel,
                    n = i.getData().getItemLayout(t);
                  if (n) {
                    var a = n.depth,
                      o = i.levelModels[a];
                    o && (e.parentModel = o);
                  }
                  return e;
                }),
                  t.wrapMethod("getItemModel", function (e, t) {
                    var i = e.parentModel,
                      n = i.getGraph().getEdgeByIndex(t).node1.getLayout();
                    if (n) {
                      var a = n.depth,
                        o = i.levelModels[a];
                      o && (e.parentModel = o);
                    }
                    return e;
                  });
              });
              return l.data;
            }),
            (t.prototype.setNodePosition = function (e, t) {
              var i = (this.option.data || this.option.nodes)[e];
              (i.localX = t[0]), (i.localY = t[1]);
            }),
            (t.prototype.getGraph = function () {
              return this.getData().graph;
            }),
            (t.prototype.getEdgeData = function () {
              return this.getGraph().edgeData;
            }),
            (t.prototype.formatTooltip = function (e, t, i) {
              function n(e) {
                return isNaN(e) || null == e;
              }
              if ("edge" === i) {
                var a = this.getDataParams(e, i),
                  o = a.data,
                  r = a.value,
                  l = o.source + " -- " + o.target;
                return (0, S.Qx)("nameValue", {
                  name: l,
                  value: r,
                  noValue: n(r),
                });
              }
              var s = this.getGraph().getNodeByIndex(e).getLayout().value,
                u = this.getDataParams(e, i).data.name;
              return (0, S.Qx)("nameValue", {
                name: null != u ? u + "" : null,
                value: s,
                noValue: n(s),
              });
            }),
            (t.prototype.optionUpdated = function () {}),
            (t.prototype.getDataParams = function (t, i) {
              var n = e.prototype.getDataParams.call(this, t, i);
              if (null == n.value && "node" === i) {
                var a = this.getGraph().getNodeByIndex(t).getLayout().value;
                n.value = a;
              }
              return n;
            }),
            (t.type = "series.sankey"),
            (t.defaultOption = {
              z: 2,
              coordinateSystem: "view",
              left: "5%",
              top: "5%",
              right: "20%",
              bottom: "5%",
              orient: "horizontal",
              nodeWidth: 20,
              nodeGap: 8,
              draggable: !0,
              layoutIterations: 32,
              label: { show: !0, position: "right", fontSize: 12 },
              edgeLabel: { show: !1, fontSize: 12 },
              levels: [],
              nodeAlign: "justify",
              lineStyle: { color: "#314656", opacity: 0.2, curveness: 0.5 },
              emphasis: { label: { show: !0 }, lineStyle: { opacity: 0.5 } },
              select: { itemStyle: { borderColor: "#212121" } },
              animationEasing: "linear",
              animationDuration: 1e3,
            }),
            t
          );
        })(v.A);
      const A = _;
      var w = i(67730),
        I = i(34575);
      function M(e, t) {
        e.eachSeriesByType("sankey", function (e) {
          var i = e.get("nodeWidth"),
            n = e.get("nodeGap"),
            a = (function (e, t) {
              return w.dV(e.getBoxLayoutParams(), {
                width: t.getWidth(),
                height: t.getHeight(),
              });
            })(e, t);
          e.layoutInfo = a;
          var o = a.width,
            r = a.height,
            l = e.getGraph(),
            s = l.nodes,
            u = l.edges;
          !(function (e) {
            h.each(e, function (e) {
              var t = z(e.outEdges, R),
                i = z(e.inEdges, R),
                n = e.getValue() || 0,
                a = Math.max(t, i, n);
              e.setLayout({ value: a }, !0);
            });
          })(s),
            (function (e, t, i, n, a, o, r, l, s) {
              (function (e, t, i, n, a, o, r) {
                for (
                  var l = [], s = [], u = [], d = [], c = 0, p = 0;
                  p < t.length;
                  p++
                )
                  l[p] = 1;
                for (p = 0; p < e.length; p++)
                  (s[p] = e[p].inEdges.length), 0 === s[p] && u.push(e[p]);
                var g = -1;
                for (; u.length; ) {
                  for (var f = 0; f < u.length; f++) {
                    var y = u[f],
                      m = y.hostGraph.data.getRawDataItem(y.dataIndex),
                      v = null != m.depth && m.depth >= 0;
                    v && m.depth > g && (g = m.depth),
                      y.setLayout({ depth: v ? m.depth : c }, !0),
                      "vertical" === o
                        ? y.setLayout({ dy: i }, !0)
                        : y.setLayout({ dx: i }, !0);
                    for (var x = 0; x < y.outEdges.length; x++) {
                      var b = y.outEdges[x];
                      l[t.indexOf(b)] = 0;
                      var S = b.node2;
                      0 === --s[e.indexOf(S)] && d.indexOf(S) < 0 && d.push(S);
                    }
                  }
                  ++c, (u = d), (d = []);
                }
                for (p = 0; p < l.length; p++)
                  if (1 === l[p])
                    throw new Error(
                      "Sankey is a DAG, the original data has cycle!"
                    );
                var _ = g > c - 1 ? g : c - 1;
                r &&
                  "left" !== r &&
                  (function (e, t, i, n) {
                    if ("right" === t) {
                      for (var a = [], o = e, r = 0; o.length; ) {
                        for (var l = 0; l < o.length; l++) {
                          var s = o[l];
                          s.setLayout({ skNodeHeight: r }, !0);
                          for (var u = 0; u < s.inEdges.length; u++) {
                            var d = s.inEdges[u];
                            a.indexOf(d.node1) < 0 && a.push(d.node1);
                          }
                        }
                        (o = a), (a = []), ++r;
                      }
                      h.each(e, function (e) {
                        L(e) ||
                          e.setLayout(
                            {
                              depth: Math.max(
                                0,
                                n - e.getLayout().skNodeHeight
                              ),
                            },
                            !0
                          );
                      });
                    } else
                      "justify" === t &&
                        (function (e, t) {
                          h.each(e, function (e) {
                            L(e) ||
                              e.outEdges.length ||
                              e.setLayout({ depth: t }, !0);
                          });
                        })(e, n);
                  })(e, r, 0, _);
                var A = "vertical" === o ? (a - i) / _ : (n - i) / _;
                !(function (e, t, i) {
                  h.each(e, function (e) {
                    var n = e.getLayout().depth * t;
                    "vertical" === i
                      ? e.setLayout({ y: n }, !0)
                      : e.setLayout({ x: n }, !0);
                  });
                })(e, A, o);
              })(e, t, i, a, o, l, s),
                (function (e, t, i, n, a, o, r) {
                  var l = (function (e, t) {
                    var i = [],
                      n = "vertical" === t ? "y" : "x",
                      a = (0, I.Sq)(e, function (e) {
                        return e.getLayout()[n];
                      });
                    return (
                      a.keys.sort(function (e, t) {
                        return e - t;
                      }),
                      h.each(a.keys, function (e) {
                        i.push(a.buckets.get(e));
                      }),
                      i
                    );
                  })(e, r);
                  (function (e, t, i, n, a, o) {
                    var r = 1 / 0;
                    h.each(e, function (e) {
                      var t = e.length,
                        l = 0;
                      h.each(e, function (e) {
                        l += e.getLayout().value;
                      });
                      var s =
                        "vertical" === o
                          ? (n - (t - 1) * a) / l
                          : (i - (t - 1) * a) / l;
                      s < r && (r = s);
                    }),
                      h.each(e, function (e) {
                        h.each(e, function (e, t) {
                          var i = e.getLayout().value * r;
                          "vertical" === o
                            ? (e.setLayout({ x: t }, !0),
                              e.setLayout({ dx: i }, !0))
                            : (e.setLayout({ y: t }, !0),
                              e.setLayout({ dy: i }, !0));
                        });
                      }),
                      h.each(t, function (e) {
                        var t = +e.getValue() * r;
                        e.setLayout({ dy: t }, !0);
                      });
                  })(l, t, i, n, a, r),
                    D(l, a, i, n, r);
                  for (var s = 1; o > 0; o--)
                    C(l, (s *= 0.99), r),
                      D(l, a, i, n, r),
                      O(l, s, r),
                      D(l, a, i, n, r);
                })(e, t, o, a, n, r, l),
                (function (e, t) {
                  var i = "vertical" === t ? "x" : "y";
                  h.each(e, function (e) {
                    e.outEdges.sort(function (e, t) {
                      return e.node2.getLayout()[i] - t.node2.getLayout()[i];
                    }),
                      e.inEdges.sort(function (e, t) {
                        return e.node1.getLayout()[i] - t.node1.getLayout()[i];
                      });
                  }),
                    h.each(e, function (e) {
                      var t = 0,
                        i = 0;
                      h.each(e.outEdges, function (e) {
                        e.setLayout({ sy: t }, !0), (t += e.getLayout().dy);
                      }),
                        h.each(e.inEdges, function (e) {
                          e.setLayout({ ty: i }, !0), (i += e.getLayout().dy);
                        });
                    });
                })(e, l);
            })(
              s,
              u,
              i,
              n,
              o,
              r,
              0 !==
                h.filter(s, function (e) {
                  return 0 === e.getLayout().value;
                }).length
                ? 0
                : e.get("layoutIterations"),
              e.get("orient"),
              e.get("nodeAlign")
            );
        });
      }
      function L(e) {
        var t = e.hostGraph.data.getRawDataItem(e.dataIndex);
        return null != t.depth && t.depth >= 0;
      }
      function D(e, t, i, n, a) {
        var o = "vertical" === a ? "x" : "y";
        h.each(e, function (e) {
          var r, l, s;
          e.sort(function (e, t) {
            return e.getLayout()[o] - t.getLayout()[o];
          });
          for (
            var u = 0, d = e.length, c = "vertical" === a ? "dx" : "dy", h = 0;
            h < d;
            h++
          )
            (s = u - (l = e[h]).getLayout()[o]) > 0 &&
              ((r = l.getLayout()[o] + s),
              "vertical" === a
                ? l.setLayout({ x: r }, !0)
                : l.setLayout({ y: r }, !0)),
              (u = l.getLayout()[o] + l.getLayout()[c] + t);
          if ((s = u - t - ("vertical" === a ? n : i)) > 0) {
            (r = l.getLayout()[o] - s),
              "vertical" === a
                ? l.setLayout({ x: r }, !0)
                : l.setLayout({ y: r }, !0),
              (u = r);
            for (h = d - 2; h >= 0; --h)
              (s = (l = e[h]).getLayout()[o] + l.getLayout()[c] + t - u) > 0 &&
                ((r = l.getLayout()[o] - s),
                "vertical" === a
                  ? l.setLayout({ x: r }, !0)
                  : l.setLayout({ y: r }, !0)),
                (u = l.getLayout()[o]);
          }
        });
      }
      function C(e, t, i) {
        h.each(e.slice().reverse(), function (e) {
          h.each(e, function (e) {
            if (e.outEdges.length) {
              var n = z(e.outEdges, N, i) / z(e.outEdges, R);
              if (isNaN(n)) {
                var a = e.outEdges.length;
                n = a ? z(e.outEdges, T, i) / a : 0;
              }
              if ("vertical" === i) {
                var o = e.getLayout().x + (n - V(e, i)) * t;
                e.setLayout({ x: o }, !0);
              } else {
                var r = e.getLayout().y + (n - V(e, i)) * t;
                e.setLayout({ y: r }, !0);
              }
            }
          });
        });
      }
      function N(e, t) {
        return V(e.node2, t) * e.getValue();
      }
      function T(e, t) {
        return V(e.node2, t);
      }
      function P(e, t) {
        return V(e.node1, t) * e.getValue();
      }
      function E(e, t) {
        return V(e.node1, t);
      }
      function V(e, t) {
        return "vertical" === t
          ? e.getLayout().x + e.getLayout().dx / 2
          : e.getLayout().y + e.getLayout().dy / 2;
      }
      function R(e) {
        return e.getValue();
      }
      function z(e, t, i) {
        for (var n = 0, a = e.length, o = -1; ++o < a; ) {
          var r = +t(e[o], i);
          isNaN(r) || (n += r);
        }
        return n;
      }
      function O(e, t, i) {
        h.each(e, function (e) {
          h.each(e, function (e) {
            if (e.inEdges.length) {
              var n = z(e.inEdges, P, i) / z(e.inEdges, R);
              if (isNaN(n)) {
                var a = e.inEdges.length;
                n = a ? z(e.inEdges, E, i) / a : 0;
              }
              if ("vertical" === i) {
                var o = e.getLayout().x + (n - V(e, i)) * t;
                e.setLayout({ x: o }, !0);
              } else {
                var r = e.getLayout().y + (n - V(e, i)) * t;
                e.setLayout({ y: r }, !0);
              }
            }
          });
        });
      }
      var k = i(31016);
      function G(e) {
        e.eachSeriesByType("sankey", function (e) {
          var t = e.getGraph(),
            i = t.nodes,
            n = t.edges;
          if (i.length) {
            var a = 1 / 0,
              o = -1 / 0;
            h.each(i, function (e) {
              var t = e.getLayout().value;
              t < a && (a = t), t > o && (o = t);
            }),
              h.each(i, function (t) {
                var i = new k.A({
                    type: "color",
                    mappingMethod: "linear",
                    dataExtent: [a, o],
                    visual: e.get("color"),
                  }).mapValueToVisual(t.getLayout().value),
                  n = t.getModel().get(["itemStyle", "color"]);
                null != n
                  ? (t.setVisual("color", n), t.setVisual("style", { fill: n }))
                  : (t.setVisual("color", i),
                    t.setVisual("style", { fill: i }));
              });
          }
          n.length &&
            h.each(n, function (e) {
              var t = e.getModel().get("lineStyle");
              e.setVisual("style", t);
            });
        });
      }
      function B(e) {
        e.registerChartView(m),
          e.registerSeriesModel(A),
          e.registerLayout(M),
          e.registerVisual(G),
          e.registerAction(
            { type: "dragNode", event: "dragnode", update: "update" },
            function (e, t) {
              t.eachComponent(
                { mainType: "series", subType: "sankey", query: e },
                function (t) {
                  t.setNodePosition(e.dataIndex, [e.localX, e.localY]);
                }
              );
            }
          );
      }
    },
    86759: (e, t, i) => {
      i.d(t, { a: () => b });
      var n = i(55056),
        a = i(37292),
        o = i(62362);
      const r = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i.hasSymbolVisual = !0), i;
        }
        return (
          (0, a.C6)(t, e),
          (t.prototype.getInitialData = function (e, t) {
            return (0, o.A)(null, this, { useEncodeDefaulter: !0 });
          }),
          (t.prototype.getProgressive = function () {
            var e = this.option.progressive;
            return null == e
              ? this.option.large
                ? 5e3
                : this.get("progressive")
              : e;
          }),
          (t.prototype.getProgressiveThreshold = function () {
            var e = this.option.progressiveThreshold;
            return null == e
              ? this.option.large
                ? 1e4
                : this.get("progressiveThreshold")
              : e;
          }),
          (t.prototype.brushSelector = function (e, t, i) {
            return i.point(t.getItemLayout(e));
          }),
          (t.prototype.getZLevelKey = function () {
            return this.getData().count() > this.getProgressiveThreshold()
              ? this.id
              : "";
          }),
          (t.type = "series.scatter"),
          (t.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar"]),
          (t.defaultOption = {
            coordinateSystem: "cartesian2d",
            z: 2,
            legendHoverLink: !0,
            symbolSize: 10,
            large: !1,
            largeThreshold: 2e3,
            itemStyle: { opacity: 0.8 },
            emphasis: { scale: !0 },
            clip: !0,
            select: { itemStyle: { borderColor: "#212121" } },
            universalTransition: { divideShape: "clone" },
          }),
          t
        );
      })(i(15230).A);
      var l = i(97681),
        s = i(13171),
        u = i(70),
        d = i(47945),
        c = i(11552),
        h = i(3569),
        p = function () {},
        g = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i._off = 0), (i.hoverDataIdx = -1), i;
          }
          return (
            (0, a.C6)(t, e),
            (t.prototype.getDefaultShape = function () {
              return new p();
            }),
            (t.prototype.reset = function () {
              (this.notClear = !1), (this._off = 0);
            }),
            (t.prototype.buildPath = function (e, t) {
              var i,
                n = t.points,
                a = t.size,
                o = this.symbolProxy,
                r = o.shape,
                l = e.getContext ? e.getContext() : e,
                s = l && a[0] < 4,
                u = this.softClipShape;
              if (s) this._ctx = l;
              else {
                for (this._ctx = null, i = this._off; i < n.length; ) {
                  var d = n[i++],
                    c = n[i++];
                  isNaN(d) ||
                    isNaN(c) ||
                    (u && !u.contain(d, c)) ||
                    ((r.x = d - a[0] / 2),
                    (r.y = c - a[1] / 2),
                    (r.width = a[0]),
                    (r.height = a[1]),
                    o.buildPath(e, r, !0));
                }
                this.incremental && ((this._off = i), (this.notClear = !0));
              }
            }),
            (t.prototype.afterBrush = function () {
              var e,
                t = this.shape,
                i = t.points,
                n = t.size,
                a = this._ctx,
                o = this.softClipShape;
              if (a) {
                for (e = this._off; e < i.length; ) {
                  var r = i[e++],
                    l = i[e++];
                  isNaN(r) ||
                    isNaN(l) ||
                    (o && !o.contain(r, l)) ||
                    a.fillRect(r - n[0] / 2, l - n[1] / 2, n[0], n[1]);
                }
                this.incremental && ((this._off = e), (this.notClear = !0));
              }
            }),
            (t.prototype.findDataIndex = function (e, t) {
              for (
                var i = this.shape,
                  n = i.points,
                  a = i.size,
                  o = Math.max(a[0], 4),
                  r = Math.max(a[1], 4),
                  l = n.length / 2 - 1;
                l >= 0;
                l--
              ) {
                var s = 2 * l,
                  u = n[s] - o / 2,
                  d = n[s + 1] - r / 2;
                if (e >= u && t >= d && e <= u + o && t <= d + r) return l;
              }
              return -1;
            }),
            (t.prototype.contain = function (e, t) {
              var i = this.transformCoordToLocal(e, t),
                n = this.getBoundingRect();
              return (
                (e = i[0]),
                (t = i[1]),
                n.contain(e, t)
                  ? (this.hoverDataIdx = this.findDataIndex(e, t)) >= 0
                  : ((this.hoverDataIdx = -1), !1)
              );
            }),
            (t.prototype.getBoundingRect = function () {
              var e = this._rect;
              if (!e) {
                for (
                  var t = this.shape,
                    i = t.points,
                    n = t.size,
                    a = n[0],
                    o = n[1],
                    r = 1 / 0,
                    l = 1 / 0,
                    u = -1 / 0,
                    d = -1 / 0,
                    c = 0;
                  c < i.length;

                ) {
                  var h = i[c++],
                    p = i[c++];
                  (r = Math.min(h, r)),
                    (u = Math.max(h, u)),
                    (l = Math.min(p, l)),
                    (d = Math.max(p, d));
                }
                e = this._rect = new s.A(
                  r - a / 2,
                  l - o / 2,
                  u - r + a,
                  d - l + o
                );
              }
              return e;
            }),
            t
          );
        })(u.Ay),
        f = (function () {
          function e() {
            this.group = new d.A();
          }
          return (
            (e.prototype.updateData = function (e, t) {
              this._clear();
              var i = this._create();
              i.setShape({ points: e.getLayout("points") }),
                this._setCommon(i, e, t);
            }),
            (e.prototype.updateLayout = function (e) {
              var t = e.getLayout("points");
              this.group.eachChild(function (e) {
                if (null != e.startIndex) {
                  var i = 2 * (e.endIndex - e.startIndex),
                    n = 4 * e.startIndex * 2;
                  t = new Float32Array(t.buffer, n, i);
                }
                e.setShape("points", t), e.reset();
              });
            }),
            (e.prototype.incrementalPrepareUpdate = function (e) {
              this._clear();
            }),
            (e.prototype.incrementalUpdate = function (e, t, i) {
              var n = this._newAdded[0],
                a = t.getLayout("points"),
                o = n && n.shape.points;
              if (o && o.length < 2e4) {
                var r = o.length,
                  l = new Float32Array(r + a.length);
                l.set(o),
                  l.set(a, r),
                  (n.endIndex = e.end),
                  n.setShape({ points: l });
              } else {
                this._newAdded = [];
                var s = this._create();
                (s.startIndex = e.start),
                  (s.endIndex = e.end),
                  (s.incremental = !0),
                  s.setShape({ points: a }),
                  this._setCommon(s, t, i);
              }
            }),
            (e.prototype.eachRendered = function (e) {
              this._newAdded[0] && e(this._newAdded[0]);
            }),
            (e.prototype._create = function () {
              var e = new g({ cursor: "default" });
              return (
                (e.ignoreCoarsePointer = !0),
                this.group.add(e),
                this._newAdded.push(e),
                e
              );
            }),
            (e.prototype._setCommon = function (e, t, i) {
              var n = t.hostModel;
              i = i || {};
              var a = t.getVisual("symbolSize");
              e.setShape("size", a instanceof Array ? a : [a, a]),
                (e.softClipShape = i.clipShape || null),
                (e.symbolProxy = (0, c.v5)(t.getVisual("symbol"), 0, 0, 0, 0)),
                (e.setColor = e.symbolProxy.setColor);
              var o = e.shape.size[0] < 4;
              e.useStyle(
                n
                  .getModel("itemStyle")
                  .getItemStyle(
                    o ? ["color", "shadowBlur", "shadowColor"] : ["color"]
                  )
              );
              var r = t.getVisual("style"),
                l = r && r.fill;
              l && e.setColor(l);
              var s = (0, h.z)(e);
              (s.seriesIndex = n.seriesIndex),
                e.on("mousemove", function (t) {
                  s.dataIndex = null;
                  var i = e.hoverDataIdx;
                  i >= 0 && (s.dataIndex = i + (e.startIndex || 0));
                });
            }),
            (e.prototype.remove = function () {
              this._clear();
            }),
            (e.prototype._clear = function () {
              (this._newAdded = []), this.group.removeAll();
            }),
            e
          );
        })();
      const y = f;
      var m = i(80349);
      const v = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, a.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            var n = e.getData();
            this._updateSymbolDraw(n, e).updateData(n, {
              clipShape: this._getClipShape(e),
            }),
              (this._finished = !0);
          }),
          (t.prototype.incrementalPrepareRender = function (e, t, i) {
            var n = e.getData();
            this._updateSymbolDraw(n, e).incrementalPrepareUpdate(n),
              (this._finished = !1);
          }),
          (t.prototype.incrementalRender = function (e, t, i) {
            this._symbolDraw.incrementalUpdate(e, t.getData(), {
              clipShape: this._getClipShape(t),
            }),
              (this._finished = e.end === t.getData().count());
          }),
          (t.prototype.updateTransform = function (e, t, i) {
            var n = e.getData();
            if ((this.group.dirty(), !this._finished || n.count() > 1e4))
              return { update: !0 };
            var a = (0, m.A)("").reset(e, t, i);
            a.progress &&
              a.progress({ start: 0, end: n.count(), count: n.count() }, n),
              this._symbolDraw.updateLayout(n);
          }),
          (t.prototype.eachRendered = function (e) {
            this._symbolDraw && this._symbolDraw.eachRendered(e);
          }),
          (t.prototype._getClipShape = function (e) {
            if (e.get("clip", !0)) {
              var t = e.coordinateSystem;
              return t && t.getArea && t.getArea(0.1);
            }
          }),
          (t.prototype._updateSymbolDraw = function (e, t) {
            var i = this._symbolDraw,
              n = t.pipelineContext.large;
            return (
              (i && n === this._isLargeDraw) ||
                (i && i.remove(),
                (i = this._symbolDraw = n ? new y() : new l.A()),
                (this._isLargeDraw = n),
                this.group.removeAll()),
              this.group.add(i.group),
              i
            );
          }),
          (t.prototype.remove = function (e, t) {
            this._symbolDraw && this._symbolDraw.remove(!0),
              (this._symbolDraw = null);
          }),
          (t.prototype.dispose = function () {}),
          (t.type = "scatter"),
          t
        );
      })(i(29379).A);
      var x = i(84775);
      function b(e) {
        (0, n.Y)(x.a),
          e.registerSeriesModel(r),
          e.registerChartView(v),
          e.registerLayout((0, m.A)("scatter"));
      }
    },
    88667: (e, t, i) => {
      i.d(t, { A: () => g });
      var n = i(37292),
        a = i(11552),
        o = i(39253),
        r = i(47945),
        l = i(3569),
        s = i(41406),
        u = i(3629),
        d = i(70441),
        c = i(87689),
        h = i(70867);
      function p(e, t) {
        this.parent.drift(e, t);
      }
      const g = (function (e) {
        function t(t, i, n, a) {
          var o = e.call(this) || this;
          return o.updateData(t, i, n, a), o;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype._createSymbol = function (e, t, i, n, o) {
            this.removeAll();
            var r = (0, a.v5)(e, -1, -1, 2, 2, null, o);
            r.attr({
              z2: 100,
              culling: !0,
              scaleX: n[0] / 2,
              scaleY: n[1] / 2,
            }),
              (r.drift = p),
              (this._symbolType = e),
              this.add(r);
          }),
          (t.prototype.stopSymbolAnimation = function (e) {
            this.childAt(0).stopAnimation(null, e);
          }),
          (t.prototype.getSymbolType = function () {
            return this._symbolType;
          }),
          (t.prototype.getSymbolPath = function () {
            return this.childAt(0);
          }),
          (t.prototype.highlight = function () {
            (0, s.HY)(this.childAt(0));
          }),
          (t.prototype.downplay = function () {
            (0, s.SD)(this.childAt(0));
          }),
          (t.prototype.setZ = function (e, t) {
            var i = this.childAt(0);
            (i.zlevel = e), (i.z = t);
          }),
          (t.prototype.setDraggable = function (e, t) {
            var i = this.childAt(0);
            (i.draggable = e), (i.cursor = !t && e ? "move" : i.cursor);
          }),
          (t.prototype.updateData = function (e, i, n, a) {
            this.silent = !1;
            var r = e.getItemVisual(i, "symbol") || "circle",
              l = e.hostModel,
              s = t.getSymbolSize(e, i),
              u = r !== this._symbolType,
              d = a && a.disableAnimation;
            if (u) {
              var c = e.getItemVisual(i, "symbolKeepAspect");
              this._createSymbol(r, e, i, s, c);
            } else {
              (p = this.childAt(0)).silent = !1;
              var h = { scaleX: s[0] / 2, scaleY: s[1] / 2 };
              d ? p.attr(h) : o.oi(p, h, l, i), (0, o.ap)(p);
            }
            if ((this._updateCommon(e, i, s, n, a), u)) {
              var p = this.childAt(0);
              if (!d) {
                h = {
                  scaleX: this._sizeX,
                  scaleY: this._sizeY,
                  style: { opacity: p.style.opacity },
                };
                (p.scaleX = p.scaleY = 0),
                  (p.style.opacity = 0),
                  o.LW(p, h, l, i);
              }
            }
            d && this.childAt(0).stopAnimation("leave");
          }),
          (t.prototype._updateCommon = function (e, t, i, n, o) {
            var r,
              l,
              p,
              g,
              f,
              y,
              m,
              v,
              x,
              b = this.childAt(0),
              S = e.hostModel;
            if (
              (n &&
                ((r = n.emphasisItemStyle),
                (l = n.blurItemStyle),
                (p = n.selectItemStyle),
                (g = n.focus),
                (f = n.blurScope),
                (m = n.labelStatesModels),
                (v = n.hoverScale),
                (x = n.cursorStyle),
                (y = n.emphasisDisabled)),
              !n || e.hasItemOption)
            ) {
              var _ = n && n.itemModel ? n.itemModel : e.getItemModel(t),
                A = _.getModel("emphasis");
              (r = A.getModel("itemStyle").getItemStyle()),
                (p = _.getModel(["select", "itemStyle"]).getItemStyle()),
                (l = _.getModel(["blur", "itemStyle"]).getItemStyle()),
                (g = A.get("focus")),
                (f = A.get("blurScope")),
                (y = A.get("disabled")),
                (m = (0, c.lx)(_)),
                (v = A.getShallow("scale")),
                (x = _.getShallow("cursor"));
            }
            var w = e.getItemVisual(t, "symbolRotate");
            b.attr("rotation", ((w || 0) * Math.PI) / 180 || 0);
            var I = (0, a.hV)(e.getItemVisual(t, "symbolOffset"), i);
            I && ((b.x = I[0]), (b.y = I[1])), x && b.attr("cursor", x);
            var M = e.getItemVisual(t, "style"),
              L = M.fill;
            if (b instanceof h.Ay) {
              var D = b.style;
              b.useStyle(
                (0, d.extend)(
                  {
                    image: D.image,
                    x: D.x,
                    y: D.y,
                    width: D.width,
                    height: D.height,
                  },
                  M
                )
              );
            } else
              b.__isEmptyBrush
                ? b.useStyle((0, d.extend)({}, M))
                : b.useStyle(M),
                (b.style.decal = null),
                b.setColor(L, o && o.symbolInnerColor),
                (b.style.strokeNoScale = !0);
            var C = e.getItemVisual(t, "liftZ"),
              N = this._z2;
            null != C
              ? null == N && ((this._z2 = b.z2), (b.z2 += C))
              : null != N && ((b.z2 = N), (this._z2 = null));
            var T = o && o.useNameLabel;
            (0, c.qM)(b, m, {
              labelFetcher: S,
              labelDataIndex: t,
              defaultText: function (t) {
                return T ? e.getName(t) : (0, u.i)(e, t);
              },
              inheritColor: L,
              defaultOpacity: M.opacity,
            }),
              (this._sizeX = i[0] / 2),
              (this._sizeY = i[1] / 2);
            var P = b.ensureState("emphasis");
            (P.style = r),
              (b.ensureState("select").style = p),
              (b.ensureState("blur").style = l);
            var E =
              null == v || !0 === v
                ? Math.max(1.1, 3 / this._sizeY)
                : isFinite(v) && v > 0
                ? +v
                : 1;
            (P.scaleX = this._sizeX * E),
              (P.scaleY = this._sizeY * E),
              this.setSymbolScale(1),
              (0, s.Lm)(this, g, f, y);
          }),
          (t.prototype.setSymbolScale = function (e) {
            this.scaleX = this.scaleY = e;
          }),
          (t.prototype.fadeOut = function (e, t, i) {
            var n = this.childAt(0),
              a = (0, l.z)(this).dataIndex,
              r = i && i.animation;
            if (((this.silent = n.silent = !0), i && i.fadeLabel)) {
              var s = n.getTextContent();
              s &&
                o.Nz(s, { style: { opacity: 0 } }, t, {
                  dataIndex: a,
                  removeOpt: r,
                  cb: function () {
                    n.removeTextContent();
                  },
                });
            } else n.removeTextContent();
            o.Nz(n, { style: { opacity: 0 }, scaleX: 0, scaleY: 0 }, t, {
              dataIndex: a,
              cb: e,
              removeOpt: r,
            });
          }),
          (t.getSymbolSize = function (e, t) {
            return (0, a.xU)(e.getItemVisual(t, "symbolSize"));
          }),
          t
        );
      })(r.A);
    },
    90014: (e, t, i) => {
      i.d(t, { a: () => Z });
      var n = i(70441),
        a = i(89777),
        o = i(56074),
        r = i(37292),
        l = i(37187),
        s = i(62362),
        u = i(42953);
      const d = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, r.C6)(t, e),
          (t.prototype.getInitialData = function () {
            return (0, s.A)(null, this, {
              useEncodeDefaulter: !0,
              createInvertedIndices: !!this.get("realtimeSort", !0) || null,
            });
          }),
          (t.prototype.getProgressive = function () {
            return !!this.get("large") && this.get("progressive");
          }),
          (t.prototype.getProgressiveThreshold = function () {
            var e = this.get("progressiveThreshold"),
              t = this.get("largeThreshold");
            return t > e && (e = t), e;
          }),
          (t.prototype.brushSelector = function (e, t, i) {
            return i.rect(t.getItemLayout(e));
          }),
          (t.type = "series.bar"),
          (t.dependencies = ["grid", "polar"]),
          (t.defaultOption = (0, u.G_)(l.A.defaultOption, {
            clip: !0,
            roundCap: !1,
            showBackground: !1,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
              borderColor: null,
              borderWidth: 0,
              borderType: "solid",
              borderRadius: 0,
              shadowBlur: 0,
              shadowColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1,
            },
            select: { itemStyle: { borderColor: "#212121" } },
            realtimeSort: !1,
          })),
          t
        );
      })(l.A);
      var c = i(70),
        h = i(47945),
        p = i(72042),
        g = i(39253),
        f = i(19084),
        y = i(94106),
        m = i(3569),
        v = i(41406),
        x = i(87689),
        b = i(27904),
        S = i(34020),
        _ = i(54143),
        A = i(29379),
        w = i(41876),
        I = i(3629),
        M = i(83820),
        L = i(65065),
        D = Math.max,
        C = Math.min;
      var N = (function (e) {
          function t() {
            var i = e.call(this) || this;
            return (i.type = t.type), (i._isFirstFrame = !0), i;
          }
          return (
            (0, r.C6)(t, e),
            (t.prototype.render = function (e, t, i, n) {
              (this._model = e),
                this._removeOnRenderedListener(i),
                this._updateDrawMode(e);
              var a = e.get("coordinateSystem");
              ("cartesian2d" === a || "polar" === a) &&
                ((this._progressiveEls = null),
                this._isLargeDraw
                  ? this._renderLarge(e, t, i)
                  : this._renderNormal(e, t, i, n));
            }),
            (t.prototype.incrementalPrepareRender = function (e) {
              this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
            }),
            (t.prototype.incrementalRender = function (e, t) {
              (this._progressiveEls = []), this._incrementalRenderLarge(e, t);
            }),
            (t.prototype.eachRendered = function (e) {
              (0, p.traverseElements)(this._progressiveEls || this.group, e);
            }),
            (t.prototype._updateDrawMode = function (e) {
              var t = e.pipelineContext.large;
              (null != this._isLargeDraw && t === this._isLargeDraw) ||
                ((this._isLargeDraw = t), this._clear());
            }),
            (t.prototype._renderNormal = function (e, t, i, n) {
              var a,
                o = this.group,
                r = e.getData(),
                l = this._data,
                s = e.coordinateSystem,
                u = s.getBaseAxis();
              "cartesian2d" === s.type
                ? (a = u.isHorizontal())
                : "polar" === s.type && (a = "angle" === u.dim);
              var d = e.isAnimationEnabled() ? e : null,
                c = (function (e, t) {
                  var i = e.get("realtimeSort", !0),
                    n = t.getBaseAxis();
                  0;
                  if (i && "category" === n.type && "cartesian2d" === t.type)
                    return { baseAxis: n, otherAxis: t.getOtherAxis(n) };
                })(e, s);
              c && this._enableRealtimeSort(c, r, i);
              var p = e.get("clip", !0) || c,
                m = (function (e, t) {
                  var i = e.getArea && e.getArea();
                  if ((0, w.g)(e, "cartesian2d")) {
                    var n = e.getBaseAxis();
                    if ("category" !== n.type || !n.onBand) {
                      var a = t.getLayout("bandWidth");
                      n.isHorizontal()
                        ? ((i.x -= a), (i.width += 2 * a))
                        : ((i.y -= a), (i.height += 2 * a));
                    }
                  }
                  return i;
                })(s, r);
              o.removeClipPath();
              var v = e.get("roundCap", !0),
                b = e.get("showBackground", !0),
                S = e.getModel("backgroundStyle"),
                _ = S.get("borderRadius") || 0,
                A = [],
                I = this._backgroundEls,
                M = n && n.isInitSort,
                L = n && "changeAxisOrder" === n.type;
              function D(e) {
                var t = k[s.type](r, e),
                  i = (function (e, t, i) {
                    var n = "polar" === e.type ? y.A : f.A;
                    return new n({ shape: X(t, i, e), silent: !0, z2: 0 });
                  })(s, a, t);
                return (
                  i.useStyle(S.getItemStyle()),
                  "cartesian2d" === s.type
                    ? i.setShape("r", _)
                    : i.setShape("cornerRadius", _),
                  (A[e] = i),
                  i
                );
              }
              r.diff(l)
                .add(function (t) {
                  var i = r.getItemModel(t),
                    n = k[s.type](r, t, i);
                  if ((b && D(t), r.hasValue(t) && O[s.type](n))) {
                    var l = !1;
                    p && (l = T[s.type](m, n));
                    var h = P[s.type](e, r, t, n, a, d, u.model, !1, v);
                    c && (h.forceLabelAnimation = !0),
                      B(h, r, t, i, n, e, a, "polar" === s.type),
                      M
                        ? h.attr({ shape: n })
                        : c
                        ? E(c, d, h, n, t, a, !1, !1)
                        : (0, g.LW)(h, { shape: n }, e, t),
                      r.setItemGraphicEl(t, h),
                      o.add(h),
                      (h.ignore = l);
                  }
                })
                .update(function (t, i) {
                  var n = r.getItemModel(t),
                    h = k[s.type](r, t, n);
                  if (b) {
                    var f = void 0;
                    0 === I.length
                      ? (f = D(i))
                      : ((f = I[i]).useStyle(S.getItemStyle()),
                        "cartesian2d" === s.type
                          ? f.setShape("r", _)
                          : f.setShape("cornerRadius", _),
                        (A[t] = f));
                    var y = k[s.type](r, t),
                      w = X(a, y, s);
                    (0, g.oi)(f, { shape: w }, d, t);
                  }
                  var C = l.getItemGraphicEl(i);
                  if (r.hasValue(t) && O[s.type](h)) {
                    var N = !1;
                    if (
                      (p && (N = T[s.type](m, h)) && o.remove(C),
                      C
                        ? (0, g.ap)(C)
                        : (C = P[s.type](e, r, t, h, a, d, u.model, !!C, v)),
                      c && (C.forceLabelAnimation = !0),
                      L)
                    ) {
                      var V = C.getTextContent();
                      if (V) {
                        var R = (0, x.Lu)(V);
                        null != R.prevValue && (R.prevValue = R.value);
                      }
                    } else B(C, r, t, n, h, e, a, "polar" === s.type);
                    M
                      ? C.attr({ shape: h })
                      : c
                      ? E(c, d, C, h, t, a, !0, L)
                      : (0, g.oi)(C, { shape: h }, e, t, null),
                      r.setItemGraphicEl(t, C),
                      (C.ignore = N),
                      o.add(C);
                  } else o.remove(C);
                })
                .remove(function (t) {
                  var i = l.getItemGraphicEl(t);
                  i && (0, g.t5)(i, e, t);
                })
                .execute();
              var C =
                this._backgroundGroup || (this._backgroundGroup = new h.A());
              C.removeAll();
              for (var N = 0; N < A.length; ++N) C.add(A[N]);
              o.add(C), (this._backgroundEls = A), (this._data = r);
            }),
            (t.prototype._renderLarge = function (e, t, i) {
              this._clear(), Y(e, this.group), this._updateLargeClip(e);
            }),
            (t.prototype._incrementalRenderLarge = function (e, t) {
              this._removeBackground(),
                Y(t, this.group, this._progressiveEls, !0);
            }),
            (t.prototype._updateLargeClip = function (e) {
              var t = e.get("clip", !0) && (0, S.Ip)(e.coordinateSystem, !1, e),
                i = this.group;
              t ? i.setClipPath(t) : i.removeClipPath();
            }),
            (t.prototype._enableRealtimeSort = function (e, t, i) {
              var n = this;
              if (t.count()) {
                var a = e.baseAxis;
                if (this._isFirstFrame)
                  this._dispatchInitSort(t, e, i), (this._isFirstFrame = !1);
                else {
                  var o = function (e) {
                    var i = t.getItemGraphicEl(e),
                      n = i && i.shape;
                    return (
                      (n && Math.abs(a.isHorizontal() ? n.height : n.width)) ||
                      0
                    );
                  };
                  (this._onRendered = function () {
                    n._updateSortWithinSameData(t, o, a, i);
                  }),
                    i.getZr().on("rendered", this._onRendered);
                }
              }
            }),
            (t.prototype._dataSort = function (e, t, i) {
              var a = [];
              return (
                e.each(e.mapDimension(t.dim), function (e, t) {
                  var n = i(t);
                  (n = null == n ? NaN : n),
                    a.push({ dataIndex: t, mappedValue: n, ordinalNumber: e });
                }),
                a.sort(function (e, t) {
                  return t.mappedValue - e.mappedValue;
                }),
                {
                  ordinalNumbers: (0, n.map)(a, function (e) {
                    return e.ordinalNumber;
                  }),
                }
              );
            }),
            (t.prototype._isOrderChangedWithinSameData = function (e, t, i) {
              for (
                var n = i.scale,
                  a = e.mapDimension(i.dim),
                  o = Number.MAX_VALUE,
                  r = 0,
                  l = n.getOrdinalMeta().categories.length;
                r < l;
                ++r
              ) {
                var s = e.rawIndexOf(a, n.getRawOrdinalNumber(r)),
                  u = s < 0 ? Number.MIN_VALUE : t(e.indexOfRawIndex(s));
                if (u > o) return !0;
                o = u;
              }
              return !1;
            }),
            (t.prototype._isOrderDifferentInView = function (e, t) {
              for (
                var i = t.scale,
                  n = i.getExtent(),
                  a = Math.max(0, n[0]),
                  o = Math.min(n[1], i.getOrdinalMeta().categories.length - 1);
                a <= o;
                ++a
              )
                if (e.ordinalNumbers[a] !== i.getRawOrdinalNumber(a)) return !0;
            }),
            (t.prototype._updateSortWithinSameData = function (e, t, i, n) {
              if (this._isOrderChangedWithinSameData(e, t, i)) {
                var a = this._dataSort(e, i, t);
                this._isOrderDifferentInView(a, i) &&
                  (this._removeOnRenderedListener(n),
                  n.dispatchAction({
                    type: "changeAxisOrder",
                    componentType: i.dim + "Axis",
                    axisId: i.index,
                    sortInfo: a,
                  }));
              }
            }),
            (t.prototype._dispatchInitSort = function (e, t, i) {
              var n = t.baseAxis,
                a = this._dataSort(e, n, function (i) {
                  return e.get(e.mapDimension(t.otherAxis.dim), i);
                });
              i.dispatchAction({
                type: "changeAxisOrder",
                componentType: n.dim + "Axis",
                isInitSort: !0,
                axisId: n.index,
                sortInfo: a,
              });
            }),
            (t.prototype.remove = function (e, t) {
              this._clear(this._model), this._removeOnRenderedListener(t);
            }),
            (t.prototype.dispose = function (e, t) {
              this._removeOnRenderedListener(t);
            }),
            (t.prototype._removeOnRenderedListener = function (e) {
              this._onRendered &&
                (e.getZr().off("rendered", this._onRendered),
                (this._onRendered = null));
            }),
            (t.prototype._clear = function (e) {
              var t = this.group,
                i = this._data;
              e && e.isAnimationEnabled() && i && !this._isLargeDraw
                ? (this._removeBackground(),
                  (this._backgroundEls = []),
                  i.eachItemGraphicEl(function (t) {
                    (0, g.t5)(t, e, (0, m.z)(t).dataIndex);
                  }))
                : t.removeAll(),
                (this._data = null),
                (this._isFirstFrame = !0);
            }),
            (t.prototype._removeBackground = function () {
              this.group.remove(this._backgroundGroup),
                (this._backgroundGroup = null);
            }),
            (t.type = "bar"),
            t
          );
        })(A.A),
        T = {
          cartesian2d: function (e, t) {
            var i = t.width < 0 ? -1 : 1,
              n = t.height < 0 ? -1 : 1;
            i < 0 && ((t.x += t.width), (t.width = -t.width)),
              n < 0 && ((t.y += t.height), (t.height = -t.height));
            var a = e.x + e.width,
              o = e.y + e.height,
              r = D(t.x, e.x),
              l = C(t.x + t.width, a),
              s = D(t.y, e.y),
              u = C(t.y + t.height, o),
              d = l < r,
              c = u < s;
            return (
              (t.x = d && r > a ? l : r),
              (t.y = c && s > o ? u : s),
              (t.width = d ? 0 : l - r),
              (t.height = c ? 0 : u - s),
              i < 0 && ((t.x += t.width), (t.width = -t.width)),
              n < 0 && ((t.y += t.height), (t.height = -t.height)),
              d || c
            );
          },
          polar: function (e, t) {
            var i = t.r0 <= t.r ? 1 : -1;
            if (i < 0) {
              var n = t.r;
              (t.r = t.r0), (t.r0 = n);
            }
            var a = C(t.r, e.r),
              o = D(t.r0, e.r0);
            (t.r = a), (t.r0 = o);
            var r = a - o < 0;
            if (i < 0) {
              n = t.r;
              (t.r = t.r0), (t.r0 = n);
            }
            return r;
          },
        },
        P = {
          cartesian2d: function (e, t, i, a, o, r, l, s, u) {
            var d = new f.A({ shape: (0, n.extend)({}, a), z2: 1 });
            ((d.__dataIndex = i), (d.name = "item"), r) &&
              (d.shape[o ? "height" : "width"] = 0);
            return d;
          },
          polar: function (e, t, i, n, a, o, r, l, s) {
            var u = !a && s ? _.A : y.A,
              d = new u({ shape: n, z2: 1 });
            d.name = "item";
            var c = G(a);
            if (
              ((d.calculateTextPosition = (0, M.r)(c, {
                isRoundCap: u === _.A,
              })),
              o)
            ) {
              var h = a ? "r" : "endAngle",
                p = {};
              (d.shape[h] = a ? n.r0 : n.startAngle),
                (p[h] = n[h]),
                (l ? g.oi : g.LW)(d, { shape: p }, o);
            }
            return d;
          },
        };
      function E(e, t, i, n, a, o, r, l) {
        var s, u;
        o
          ? ((u = { x: n.x, width: n.width }),
            (s = { y: n.y, height: n.height }))
          : ((u = { y: n.y, height: n.height }),
            (s = { x: n.x, width: n.width })),
          l || (r ? g.oi : g.LW)(i, { shape: s }, t, a, null);
        var d = t ? e.baseAxis.model : null;
        (r ? g.oi : g.LW)(i, { shape: u }, d, a);
      }
      function V(e, t) {
        for (var i = 0; i < t.length; i++) if (!isFinite(e[t[i]])) return !0;
        return !1;
      }
      var R = ["x", "y", "width", "height"],
        z = ["cx", "cy", "r", "startAngle", "endAngle"],
        O = {
          cartesian2d: function (e) {
            return !V(e, R);
          },
          polar: function (e) {
            return !V(e, z);
          },
        },
        k = {
          cartesian2d: function (e, t, i) {
            var n = e.getItemLayout(t),
              a = i
                ? (function (e, t) {
                    var i = e.get(["itemStyle", "borderColor"]);
                    if (!i || "none" === i) return 0;
                    var n = e.get(["itemStyle", "borderWidth"]) || 0,
                      a = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width),
                      o = isNaN(t.height)
                        ? Number.MAX_VALUE
                        : Math.abs(t.height);
                    return Math.min(n, a, o);
                  })(i, n)
                : 0,
              o = n.width > 0 ? 1 : -1,
              r = n.height > 0 ? 1 : -1;
            return {
              x: n.x + (o * a) / 2,
              y: n.y + (r * a) / 2,
              width: n.width - o * a,
              height: n.height - r * a,
            };
          },
          polar: function (e, t, i) {
            var n = e.getItemLayout(t);
            return {
              cx: n.cx,
              cy: n.cy,
              r0: n.r0,
              r: n.r,
              startAngle: n.startAngle,
              endAngle: n.endAngle,
              clockwise: n.clockwise,
            };
          },
        };
      function G(e) {
        return (function (e) {
          var t = e ? "Arc" : "Angle";
          return function (e) {
            switch (e) {
              case "start":
              case "insideStart":
              case "end":
              case "insideEnd":
                return e + t;
              default:
                return e;
            }
          };
        })(e);
      }
      function B(e, t, i, a, o, r, l, s) {
        var u = t.getItemVisual(i, "style");
        if (s) {
          if (!r.get("roundCap")) {
            var d = e.shape,
              c = (0, L.i)(a.getModel("itemStyle"), d, !0);
            (0, n.extend)(d, c), e.setShape(d);
          }
        } else {
          var h = a.get(["itemStyle", "borderRadius"]) || 0;
          e.setShape("r", h);
        }
        e.useStyle(u);
        var p = a.getShallow("cursor");
        p && e.attr("cursor", p);
        var g = s
            ? l
              ? o.r >= o.r0
                ? "endArc"
                : "startArc"
              : o.endAngle >= o.startAngle
              ? "endAngle"
              : "startAngle"
            : l
            ? o.height >= 0
              ? "bottom"
              : "top"
            : o.width >= 0
            ? "right"
            : "left",
          f = (0, x.lx)(a);
        (0, x.qM)(e, f, {
          labelFetcher: r,
          labelDataIndex: i,
          defaultText: (0, I.i)(r.getData(), i),
          inheritColor: u.fill,
          defaultOpacity: u.opacity,
          defaultOutsidePosition: g,
        });
        var y = e.getTextContent();
        if (s && y) {
          var m = a.get(["label", "position"]);
          (e.textConfig.inside = "middle" === m || null),
            (0, M.W)(
              e,
              "outside" === m ? g : m,
              G(l),
              a.get(["label", "rotate"])
            );
        }
        (0, x.Oh)(y, f, r.getRawValue(i), function (e) {
          return (0, I.T)(t, e);
        });
        var b = a.getModel(["emphasis"]);
        (0, v.Lm)(e, b.get("focus"), b.get("blurScope"), b.get("disabled")),
          (0, v.Mx)(e, a),
          (function (e) {
            return (
              null != e.startAngle &&
              null != e.endAngle &&
              e.startAngle === e.endAngle
            );
          })(o) &&
            ((e.style.fill = "none"),
            (e.style.stroke = "none"),
            (0, n.each)(e.states, function (e) {
              e.style && (e.style.fill = e.style.stroke = "none");
            }));
      }
      var W = function () {},
        F = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (i.type = "largeBar"), i;
          }
          return (
            (0, r.C6)(t, e),
            (t.prototype.getDefaultShape = function () {
              return new W();
            }),
            (t.prototype.buildPath = function (e, t) {
              for (
                var i = t.points,
                  n = this.baseDimIdx,
                  a = 1 - this.baseDimIdx,
                  o = [],
                  r = [],
                  l = this.barWidth,
                  s = 0;
                s < i.length;
                s += 3
              )
                (r[n] = l),
                  (r[a] = i[s + 2]),
                  (o[n] = i[s + n]),
                  (o[a] = i[s + a]),
                  e.rect(o[0], o[1], r[0], r[1]);
            }),
            t
          );
        })(c.Ay);
      function Y(e, t, i, n) {
        var a = e.getData(),
          o = a.getLayout("valueAxisHorizontal") ? 1 : 0,
          r = a.getLayout("largeDataIndices"),
          l = a.getLayout("size"),
          s = e.getModel("backgroundStyle"),
          u = a.getLayout("largeBackgroundPoints");
        if (u) {
          var d = new F({
            shape: { points: u },
            incremental: !!n,
            silent: !0,
            z2: 0,
          });
          (d.baseDimIdx = o),
            (d.largeDataIndices = r),
            (d.barWidth = l),
            d.useStyle(s.getItemStyle()),
            t.add(d),
            i && i.push(d);
        }
        var c = new F({
          shape: { points: a.getLayout("largePoints") },
          incremental: !!n,
          ignoreCoarsePointer: !0,
          z2: 1,
        });
        (c.baseDimIdx = o),
          (c.largeDataIndices = r),
          (c.barWidth = l),
          t.add(c),
          c.useStyle(a.getVisual("style")),
          (c.style.stroke = null),
          ((0, m.z)(c).seriesIndex = e.seriesIndex),
          e.get("silent") || (c.on("mousedown", H), c.on("mousemove", H)),
          i && i.push(c);
      }
      var H = (0, b.nF)(
        function (e) {
          var t = (function (e, t, i) {
            for (
              var n = e.baseDimIdx,
                a = 1 - n,
                o = e.shape.points,
                r = e.largeDataIndices,
                l = [],
                s = [],
                u = e.barWidth,
                d = 0,
                c = o.length / 3;
              d < c;
              d++
            ) {
              var h = 3 * d;
              if (
                ((s[n] = u),
                (s[a] = o[h + 2]),
                (l[n] = o[h + n]),
                (l[a] = o[h + a]),
                s[a] < 0 && ((l[a] += s[a]), (s[a] = -s[a])),
                t >= l[0] && t <= l[0] + s[0] && i >= l[1] && i <= l[1] + s[1])
              )
                return r[d];
            }
            return -1;
          })(this, e.offsetX, e.offsetY);
          (0, m.z)(this).dataIndex = t >= 0 ? t : null;
        },
        30,
        !1
      );
      function X(e, t, i) {
        if ((0, w.g)(i, "cartesian2d")) {
          var n = t,
            a = i.getArea();
          return {
            x: e ? n.x : a.x,
            y: e ? a.y : n.y,
            width: e ? n.width : a.width,
            height: e ? a.height : n.height,
          };
        }
        var o = t;
        return {
          cx: (a = i.getArea()).cx,
          cy: a.cy,
          r0: e ? a.r0 : o.r0,
          r: e ? a.r : o.r,
          startAngle: e ? o.startAngle : 0,
          endAngle: e ? o.endAngle : 2 * Math.PI,
        };
      }
      const U = N;
      function Z(e) {
        e.registerChartView(U),
          e.registerSeriesModel(d),
          e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, n.curry(a.Zp, "bar")),
          e.registerLayout(
            e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,
            (0, a.KF)("bar")
          ),
          e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, (0, o.A)("bar")),
          e.registerAction(
            {
              type: "changeAxisOrder",
              event: "changeAxisOrder",
              update: "update",
            },
            function (e, t) {
              var i = e.componentType || "series";
              t.eachComponent({ mainType: i, query: e }, function (t) {
                e.sortInfo && t.axis.setCategorySortInfo(e.sortInfo);
              });
            }
          );
      }
    },
    95996: (e, t, i) => {
      i.d(t, { a: () => I });
      var n = i(37292),
        a = i(27387),
        o = i(47945),
        r = i(39253),
        l = i(19084),
        s = i(41406),
        u = i(87689),
        d = i(70441),
        c = i(69464);
      const h = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), (i._layers = []), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.render = function (e, t, i) {
            var n = e.getData(),
              h = this,
              p = this.group,
              g = e.getLayerSeries(),
              f = n.getLayout("layoutInfo"),
              y = f.rect,
              m = f.boundaryGap;
            function v(e) {
              return e.name;
            }
            (p.x = 0), (p.y = y.y + m[0]);
            var x = new c.A(this._layersSeries || [], g, v, v),
              b = [];
            function S(t, i, d) {
              var c = h._layers;
              if ("remove" !== t) {
                for (
                  var f, y, m = [], v = [], x = g[i].indices, S = 0;
                  S < x.length;
                  S++
                ) {
                  var _ = n.getItemLayout(x[S]),
                    A = _.x,
                    w = _.y0,
                    I = _.y;
                  m.push(A, w),
                    v.push(A, w + I),
                    (f = n.getItemVisual(x[S], "style"));
                }
                var M = n.getItemLayout(x[0]),
                  L = e.getModel("label").get("margin"),
                  D = e.getModel("emphasis");
                if ("add" === t) {
                  var C = (b[i] = new o.A());
                  (y = new a.z({
                    shape: {
                      points: m,
                      stackedOnPoints: v,
                      smooth: 0.4,
                      stackedOnSmooth: 0.4,
                      smoothConstraint: !1,
                    },
                    z2: 0,
                  })),
                    C.add(y),
                    p.add(C),
                    e.isAnimationEnabled() &&
                      y.setClipPath(
                        (function (e, t, i) {
                          var n = new l.A({
                            shape: {
                              x: e.x - 10,
                              y: e.y - 10,
                              width: 0,
                              height: e.height + 20,
                            },
                          });
                          return (
                            r.LW(
                              n,
                              {
                                shape: {
                                  x: e.x - 50,
                                  width: e.width + 100,
                                  height: e.height + 20,
                                },
                              },
                              t,
                              i
                            ),
                            n
                          );
                        })(y.getBoundingRect(), e, function () {
                          y.removeClipPath();
                        })
                      );
                } else {
                  C = c[d];
                  (y = C.childAt(0)),
                    p.add(C),
                    (b[i] = C),
                    r.oi(y, { shape: { points: m, stackedOnPoints: v } }, e),
                    (0, r.ap)(y);
                }
                (0, u.qM)(
                  y,
                  (0, u.lx)(e),
                  {
                    labelDataIndex: x[S - 1],
                    defaultText: n.getName(x[S - 1]),
                    inheritColor: f.fill,
                  },
                  { normal: { verticalAlign: "middle" } }
                ),
                  y.setTextConfig({ position: null, local: !0 });
                var N = y.getTextContent();
                N && ((N.x = M.x - L), (N.y = M.y0 + M.y / 2)),
                  y.useStyle(f),
                  n.setItemGraphicEl(i, y),
                  (0, s.Mx)(y, e),
                  (0, s.Lm)(
                    y,
                    D.get("focus"),
                    D.get("blurScope"),
                    D.get("disabled")
                  );
              } else p.remove(c[i]);
            }
            x
              .add((0, d.bind)(S, this, "add"))
              .update((0, d.bind)(S, this, "update"))
              .remove((0, d.bind)(S, this, "remove"))
              .execute(),
              (this._layersSeries = g),
              (this._layers = b);
          }),
          (t.type = "themeRiver"),
          t
        );
      })(i(29379).A);
      var p = i(15230),
        g = i(18846),
        f = i(20095),
        y = i(89033),
        m = i(34575),
        v = i(26272),
        x = i(78754);
      const b = (function (e) {
        function t() {
          var i = (null !== e && e.apply(this, arguments)) || this;
          return (i.type = t.type), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.init = function (t) {
            e.prototype.init.apply(this, arguments),
              (this.legendVisualProvider = new v.A(
                d.bind(this.getData, this),
                d.bind(this.getRawData, this)
              ));
          }),
          (t.prototype.fixData = function (e) {
            var t = e.length,
              i = {},
              n = (0, m.Sq)(e, function (e) {
                return i.hasOwnProperty(e[0] + "") || (i[e[0] + ""] = -1), e[2];
              }),
              a = [];
            n.buckets.each(function (e, t) {
              a.push({ name: t, dataList: e });
            });
            for (var o = a.length, r = 0; r < o; ++r) {
              for (var l = a[r].name, s = 0; s < a[r].dataList.length; ++s) {
                var u = a[r].dataList[s][0] + "";
                i[u] = r;
              }
              for (var u in i)
                i.hasOwnProperty(u) &&
                  i[u] !== r &&
                  ((i[u] = r), (e[t] = [u, 0, l]), t++);
            }
            return e;
          }),
          (t.prototype.getInitialData = function (e, t) {
            for (
              var i = this.getReferringComponents(
                  "singleAxis",
                  m.US
                ).models[0].get("type"),
                n = d.filter(e.data, function (e) {
                  return void 0 !== e[2];
                }),
                a = this.fixData(n || []),
                o = [],
                r = (this.nameMap = d.createHashMap()),
                l = 0,
                s = 0;
              s < a.length;
              ++s
            )
              o.push(a[s][2]), r.get(a[s][2]) || (r.set(a[s][2], l), l++);
            var u = (0, g.A)(a, {
                coordDimensions: ["single"],
                dimensionsDefine: [
                  { name: "time", type: (0, f.B)(i) },
                  { name: "value", type: "float" },
                  { name: "name", type: "ordinal" },
                ],
                encodeDefine: { single: 0, value: 1, itemName: 2 },
              }).dimensions,
              c = new y.A(u, this);
            return c.initData(a), c;
          }),
          (t.prototype.getLayerSeries = function () {
            for (
              var e = this.getData(), t = e.count(), i = [], n = 0;
              n < t;
              ++n
            )
              i[n] = n;
            var a = e.mapDimension("single"),
              o = (0, m.Sq)(i, function (t) {
                return e.get("name", t);
              }),
              r = [];
            return (
              o.buckets.each(function (t, i) {
                t.sort(function (t, i) {
                  return e.get(a, t) - e.get(a, i);
                }),
                  r.push({ name: i, indices: t });
              }),
              r
            );
          }),
          (t.prototype.getAxisTooltipData = function (e, t, i) {
            d.isArray(e) || (e = e ? [e] : []);
            for (
              var n,
                a = this.getData(),
                o = this.getLayerSeries(),
                r = [],
                l = o.length,
                s = 0;
              s < l;
              ++s
            ) {
              for (
                var u = Number.MAX_VALUE,
                  c = -1,
                  h = o[s].indices.length,
                  p = 0;
                p < h;
                ++p
              ) {
                var g = a.get(e[0], o[s].indices[p]),
                  f = Math.abs(g - t);
                f <= u && ((n = g), (u = f), (c = o[s].indices[p]));
              }
              r.push(c);
            }
            return { dataIndices: r, nestestValue: n };
          }),
          (t.prototype.formatTooltip = function (e, t, i) {
            var n = this.getData(),
              a = n.getName(e),
              o = n.get(n.mapDimension("value"), e);
            return (0, x.Qx)("nameValue", { name: a, value: o });
          }),
          (t.type = "series.themeRiver"),
          (t.dependencies = ["singleAxis"]),
          (t.defaultOption = {
            z: 2,
            colorBy: "data",
            coordinateSystem: "singleAxis",
            boundaryGap: ["10%", "10%"],
            singleAxisIndex: 0,
            animationEasing: "linear",
            label: { margin: 4, show: !0, position: "left", fontSize: 11 },
            emphasis: { label: { show: !0 } },
          }),
          t
        );
      })(p.A);
      var S = i(85941);
      function _(e, t) {
        e.eachSeriesByType("themeRiver", function (e) {
          var t = e.getData(),
            i = e.coordinateSystem,
            n = {},
            a = i.getRect();
          n.rect = a;
          var o = e.get("boundaryGap"),
            r = i.getAxis();
          ((n.boundaryGap = o), "horizontal" === r.orient)
            ? ((o[0] = S.lo(o[0], a.height)),
              (o[1] = S.lo(o[1], a.height)),
              A(t, e, a.height - o[0] - o[1]))
            : ((o[0] = S.lo(o[0], a.width)),
              (o[1] = S.lo(o[1], a.width)),
              A(t, e, a.width - o[0] - o[1]));
          t.setLayout("layoutInfo", n);
        });
      }
      function A(e, t, i) {
        if (e.count())
          for (
            var n,
              a = t.coordinateSystem,
              o = t.getLayerSeries(),
              r = e.mapDimension("single"),
              l = e.mapDimension("value"),
              s = d.map(o, function (t) {
                return d.map(t.indices, function (t) {
                  var i = a.dataToPoint(e.get(r, t));
                  return (i[1] = e.get(l, t)), i;
                });
              }),
              u = (function (e) {
                for (
                  var t = e.length,
                    i = e[0].length,
                    n = [],
                    a = [],
                    o = 0,
                    r = 0;
                  r < i;
                  ++r
                ) {
                  for (var l = 0, s = 0; s < t; ++s) l += e[s][r][1];
                  l > o && (o = l), n.push(l);
                }
                for (var u = 0; u < i; ++u) a[u] = (o - n[u]) / 2;
                o = 0;
                for (var d = 0; d < i; ++d) {
                  var c = n[d] + a[d];
                  c > o && (o = c);
                }
                return { y0: a, max: o };
              })(s),
              c = u.y0,
              h = i / u.max,
              p = o.length,
              g = o[0].indices.length,
              f = 0;
            f < g;
            ++f
          ) {
            (n = c[f] * h),
              e.setItemLayout(o[0].indices[f], {
                layerIndex: 0,
                x: s[0][f][0],
                y0: n,
                y: s[0][f][1] * h,
              });
            for (var y = 1; y < p; ++y)
              (n += s[y - 1][f][1] * h),
                e.setItemLayout(o[y].indices[f], {
                  layerIndex: y,
                  x: s[y][f][0],
                  y0: n,
                  y: s[y][f][1] * h,
                });
          }
      }
      var w = i(15534);
      function I(e) {
        e.registerChartView(h),
          e.registerSeriesModel(b),
          e.registerLayout(_),
          e.registerProcessor((0, w.A)("themeRiver"));
      }
    },
    96455: (e, t, i) => {
      i.d(t, { a: () => F });
      var n = i(74263),
        a = i(85941),
        o = i(67730),
        r = i(70441),
        l = i(86076),
        s = i(34575),
        u = 2 * Math.PI,
        d = Math.PI / 180;
      function c(e, t) {
        return o.dV(e.getBoxLayoutParams(), {
          width: t.getWidth(),
          height: t.getHeight(),
        });
      }
      function h(e, t) {
        var i = c(e, t),
          n = e.get("center"),
          o = e.get("radius");
        r.isArray(o) || (o = [0, o]);
        var l,
          s,
          u = (0, a.lo)(i.width, t.getWidth()),
          d = (0, a.lo)(i.height, t.getHeight()),
          h = Math.min(u, d),
          p = (0, a.lo)(o[0], h / 2),
          g = (0, a.lo)(o[1], h / 2),
          f = e.coordinateSystem;
        if (f) {
          var y = f.dataToPoint(n);
          (l = y[0] || 0), (s = y[1] || 0);
        } else
          r.isArray(n) || (n = [n, n]),
            (l = (0, a.lo)(n[0], u) + i.x),
            (s = (0, a.lo)(n[1], d) + i.y);
        return { cx: l, cy: s, r0: p, r: g };
      }
      function p(e, t, i) {
        t.eachSeriesByType(e, function (e) {
          var t = e.getData(),
            n = t.mapDimension("value"),
            o = c(e, i),
            r = h(e, i),
            s = r.cx,
            p = r.cy,
            f = r.r,
            y = r.r0,
            m = -e.get("startAngle") * d,
            v = e.get("endAngle"),
            x = e.get("padAngle") * d;
          v = "auto" === v ? m - u : -v * d;
          var b = e.get("minAngle") * d + x,
            S = 0;
          t.each(n, function (e) {
            !isNaN(e) && S++;
          });
          var _ = t.getSum(n),
            A = (Math.PI / (_ || S)) * 2,
            w = e.get("clockwise"),
            I = e.get("roseType"),
            M = e.get("stillShowZeroSum"),
            L = t.getDataExtent(n);
          L[0] = 0;
          var D = w ? 1 : -1,
            C = [m, v],
            N = (D * x) / 2;
          (0, l.q)(C, !w), (m = C[0]), (v = C[1]);
          var T = g(e);
          (T.startAngle = m), (T.endAngle = v), (T.clockwise = w);
          var P = Math.abs(v - m),
            E = P,
            V = 0,
            R = m;
          if (
            (t.setLayout({ viewRect: o, r: f }),
            t.each(n, function (e, i) {
              var n;
              if (isNaN(e))
                t.setItemLayout(i, {
                  angle: NaN,
                  startAngle: NaN,
                  endAngle: NaN,
                  clockwise: w,
                  cx: s,
                  cy: p,
                  r0: y,
                  r: I ? NaN : f,
                });
              else {
                (n = "area" !== I ? (0 === _ && M ? A : e * A) : P / S) < b
                  ? ((n = b), (E -= b))
                  : (V += e);
                var o = R + D * n,
                  r = 0,
                  l = 0;
                x > n ? (l = r = R + (D * n) / 2) : ((r = R + N), (l = o - N)),
                  t.setItemLayout(i, {
                    angle: n,
                    startAngle: r,
                    endAngle: l,
                    clockwise: w,
                    cx: s,
                    cy: p,
                    r0: y,
                    r: I ? (0, a.Cb)(e, L, [y, f]) : f,
                  }),
                  (R = o);
              }
            }),
            E < u && S)
          )
            if (E <= 0.001) {
              var z = P / S;
              t.each(n, function (e, i) {
                if (!isNaN(e)) {
                  var n = t.getItemLayout(i);
                  n.angle = z;
                  var a = 0,
                    o = 0;
                  z < x
                    ? (o = a = m + D * (i + 0.5) * z)
                    : ((a = m + D * i * z + N), (o = m + D * (i + 1) * z - N)),
                    (n.startAngle = a),
                    (n.endAngle = o);
                }
              });
            } else
              (A = E / V),
                (R = m),
                t.each(n, function (e, i) {
                  if (!isNaN(e)) {
                    var n = t.getItemLayout(i),
                      a = n.angle === b ? b : e * A,
                      o = 0,
                      r = 0;
                    a < x
                      ? (r = o = R + (D * a) / 2)
                      : ((o = R + N), (r = R + D * a - N)),
                      (n.startAngle = o),
                      (n.endAngle = r),
                      (R += D * a);
                  }
                });
        });
      }
      var g = (0, s.$r)(),
        f = i(15534),
        y = i(37292),
        m = i(22007),
        v = i(39253),
        x = i(32502),
        b = i(94106),
        S = i(41406),
        _ = i(29379),
        A = i(92731),
        w = i(75588),
        I = i(15696),
        M = Math.PI / 180;
      function L(e, t, i, n, a, o, r, l, s, u) {
        if (!(e.length < 2)) {
          for (var d = e.length, c = 0; c < d; c++)
            if (
              "outer" === e[c].position &&
              "labelLine" === e[c].labelAlignTo
            ) {
              var h = e[c].label.x - u;
              (e[c].linePoints[1][0] += h), (e[c].label.x = u);
            }
          (0, I.Xe)(e, s, s + r) &&
            (function (e) {
              for (
                var o = { list: [], maxY: 0 }, r = { list: [], maxY: 0 }, l = 0;
                l < e.length;
                l++
              )
                if ("none" === e[l].labelAlignTo) {
                  var s = e[l],
                    u = s.label.y > i ? r : o,
                    d = Math.abs(s.label.y - i);
                  if (d >= u.maxY) {
                    var c = s.label.x - t - s.len2 * a,
                      h = n + s.len,
                      g =
                        Math.abs(c) < h
                          ? Math.sqrt((d * d) / (1 - (c * c) / h / h))
                          : h;
                    (u.rB = g), (u.maxY = d);
                  }
                  u.list.push(s);
                }
              p(o), p(r);
            })(e);
        }
        function p(e) {
          for (var o = e.rB, r = o * o, l = 0; l < e.list.length; l++) {
            var s = e.list[l],
              u = Math.abs(s.label.y - i),
              d = n + s.len,
              c = d * d,
              h = Math.sqrt(Math.abs((1 - (u * u) / r) * c)),
              p = t + (h + s.len2) * a,
              g = p - s.label.x;
            D(s, s.targetTextWidth - g * a, !0), (s.label.x = p);
          }
        }
      }
      function D(e, t, i) {
        if ((void 0 === i && (i = !1), null == e.labelStyleWidth)) {
          var n = e.label,
            a = n.style,
            o = e.rect,
            r = a.backgroundColor,
            l = a.padding,
            s = l ? l[1] + l[3] : 0,
            u = a.overflow,
            d = o.width + (r ? 0 : s);
          if (t < d || i) {
            var c = o.height;
            if (u && u.match("break")) {
              n.setStyle("backgroundColor", null), n.setStyle("width", t - s);
              var h = n.getBoundingRect();
              n.setStyle("width", Math.ceil(h.width)),
                n.setStyle("backgroundColor", r);
            } else {
              var p = t - s,
                g =
                  t < d ? p : i ? (p > e.unconstrainedWidth ? null : p) : null;
              n.setStyle("width", g);
            }
            var f = n.getBoundingRect();
            o.width = f.width;
            var y = (n.style.margin || 0) + 2.1;
            (o.height = f.height + y), (o.y -= (o.height - c) / 2);
          }
        }
      }
      function C(e) {
        return "center" === e.position;
      }
      function N(e) {
        var t,
          i,
          n = e.getData(),
          o = [],
          l = !1,
          s = (e.get("minShowLabelAngle") || 0) * M,
          u = n.getLayout("viewRect"),
          d = n.getLayout("r"),
          c = u.width,
          h = u.x,
          p = u.y,
          g = u.height;
        function f(e) {
          e.ignore = !0;
        }
        n.each(function (e) {
          var u = n.getItemGraphicEl(e),
            p = u.shape,
            g = u.getTextContent(),
            y = u.getTextGuideLine(),
            m = n.getItemModel(e),
            v = m.getModel("label"),
            x = v.get("position") || m.get(["emphasis", "label", "position"]),
            b = v.get("distanceToLabelLine"),
            S = v.get("alignTo"),
            _ = (0, a.lo)(v.get("edgeDistance"), c),
            w = v.get("bleedMargin"),
            I = m.getModel("labelLine"),
            M = I.get("length");
          M = (0, a.lo)(M, c);
          var L = I.get("length2");
          if (((L = (0, a.lo)(L, c)), Math.abs(p.endAngle - p.startAngle) < s))
            return (
              (0, r.each)(g.states, f),
              (g.ignore = !0),
              void (y && ((0, r.each)(y.states, f), (y.ignore = !0)))
            );
          if (
            (function (e) {
              if (!e.ignore) return !0;
              for (var t in e.states) if (!1 === e.states[t].ignore) return !0;
              return !1;
            })(g)
          ) {
            var D,
              C,
              N,
              T,
              P = (p.startAngle + p.endAngle) / 2,
              E = Math.cos(P),
              V = Math.sin(P);
            (t = p.cx), (i = p.cy);
            var R = "inside" === x || "inner" === x;
            if ("center" === x) (D = p.cx), (C = p.cy), (T = "center");
            else {
              var z = (R ? ((p.r + p.r0) / 2) * E : p.r * E) + t,
                O = (R ? ((p.r + p.r0) / 2) * V : p.r * V) + i;
              if (((D = z + 3 * E), (C = O + 3 * V), !R)) {
                var k = z + E * (M + d - p.r),
                  G = O + V * (M + d - p.r),
                  B = k + (E < 0 ? -1 : 1) * L;
                (D =
                  "edge" === S
                    ? E < 0
                      ? h + _
                      : h + c - _
                    : B + (E < 0 ? -b : b)),
                  (C = G),
                  (N = [
                    [z, O],
                    [k, G],
                    [B, G],
                  ]);
              }
              T = R
                ? "center"
                : "edge" === S
                ? E > 0
                  ? "right"
                  : "left"
                : E > 0
                ? "left"
                : "right";
            }
            var W = Math.PI,
              F = 0,
              Y = v.get("rotate");
            if ((0, r.isNumber)(Y)) F = Y * (W / 180);
            else if ("center" === x) F = 0;
            else if ("radial" === Y || !0 === Y) {
              F = E < 0 ? -P + W : -P;
            } else if ("tangential" === Y && "outside" !== x && "outer" !== x) {
              var H = Math.atan2(E, V);
              H < 0 && (H = 2 * W + H), V > 0 && (H = W + H), (F = H - W);
            }
            if (
              ((l = !!F),
              (g.x = D),
              (g.y = C),
              (g.rotation = F),
              g.setStyle({ verticalAlign: "middle" }),
              R)
            ) {
              g.setStyle({ align: T });
              var X = g.states.select;
              X && ((X.x += g.x), (X.y += g.y));
            } else {
              var U = g.getBoundingRect().clone();
              U.applyTransform(g.getComputedTransform());
              var Z = (g.style.margin || 0) + 2.1;
              (U.y -= Z / 2),
                (U.height += Z),
                o.push({
                  label: g,
                  labelLine: y,
                  position: x,
                  len: M,
                  len2: L,
                  minTurnAngle: I.get("minTurnAngle"),
                  maxSurfaceAngle: I.get("maxSurfaceAngle"),
                  surfaceNormal: new A.A(E, V),
                  linePoints: N,
                  textAlign: T,
                  labelDistance: b,
                  labelAlignTo: S,
                  edgeDistance: _,
                  bleedMargin: w,
                  rect: U,
                  unconstrainedWidth: U.width,
                  labelStyleWidth: g.style.width,
                });
            }
            u.setTextConfig({ inside: R });
          }
        }),
          !l &&
            e.get("avoidLabelOverlap") &&
            (function (e, t, i, n, a, o, r, l) {
              for (
                var s = [],
                  u = [],
                  d = Number.MAX_VALUE,
                  c = -Number.MAX_VALUE,
                  h = 0;
                h < e.length;
                h++
              ) {
                var p = e[h].label;
                C(e[h]) ||
                  (p.x < t
                    ? ((d = Math.min(d, p.x)), s.push(e[h]))
                    : ((c = Math.max(c, p.x)), u.push(e[h])));
              }
              for (h = 0; h < e.length; h++)
                if (!C((y = e[h])) && y.linePoints) {
                  if (null != y.labelStyleWidth) continue;
                  p = y.label;
                  var g = y.linePoints,
                    f = void 0;
                  (f =
                    "edge" === y.labelAlignTo
                      ? p.x < t
                        ? g[2][0] - y.labelDistance - r - y.edgeDistance
                        : r + a - y.edgeDistance - g[2][0] - y.labelDistance
                      : "labelLine" === y.labelAlignTo
                      ? p.x < t
                        ? d - r - y.bleedMargin
                        : r + a - c - y.bleedMargin
                      : p.x < t
                      ? p.x - r - y.bleedMargin
                      : r + a - p.x - y.bleedMargin),
                    (y.targetTextWidth = f),
                    D(y, f);
                }
              for (
                L(u, t, i, n, 1, 0, o, 0, l, c),
                  L(s, t, i, n, -1, 0, o, 0, l, d),
                  h = 0;
                h < e.length;
                h++
              ) {
                var y;
                if (!C((y = e[h])) && y.linePoints) {
                  (p = y.label), (g = y.linePoints);
                  var m = "edge" === y.labelAlignTo,
                    v = p.style.padding,
                    x = v ? v[1] + v[3] : 0,
                    b = p.style.backgroundColor ? 0 : x,
                    S = y.rect.width + b,
                    _ = g[1][0] - g[2][0];
                  m
                    ? p.x < t
                      ? (g[2][0] = r + y.edgeDistance + S + y.labelDistance)
                      : (g[2][0] = r + a - y.edgeDistance - S - y.labelDistance)
                    : (p.x < t
                        ? (g[2][0] = p.x + y.labelDistance)
                        : (g[2][0] = p.x - y.labelDistance),
                      (g[1][0] = g[2][0] + _)),
                    (g[1][1] = g[2][1] = p.y);
                }
              }
            })(o, t, i, d, c, g, h, p);
        for (var y = 0; y < o.length; y++) {
          var m = o[y],
            v = m.label,
            x = m.labelLine,
            b = isNaN(v.x) || isNaN(v.y);
          if (v) {
            v.setStyle({ align: m.textAlign }),
              b && ((0, r.each)(v.states, f), (v.ignore = !0));
            var S = v.states.select;
            S && ((S.x += v.x), (S.y += v.y));
          }
          if (x) {
            var _ = m.linePoints;
            b || !_
              ? ((0, r.each)(x.states, f), (x.ignore = !0))
              : ((0, w.YI)(_, m.minTurnAngle),
                (0, w.QK)(_, m.surfaceNormal, m.maxSurfaceAngle),
                x.setShape({ points: _ }),
                (v.__hostTarget.textGuideLineConfig = {
                  anchor: new A.A(_[0][0], _[0][1]),
                }));
          }
        }
      }
      var T = i(87689),
        P = i(65065),
        E = (function (e) {
          function t(t, i, n) {
            var a = e.call(this) || this;
            a.z2 = 2;
            var o = new m.Ay();
            return a.setTextContent(o), a.updateData(t, i, n, !0), a;
          }
          return (
            (0, y.C6)(t, e),
            (t.prototype.updateData = function (e, t, i, n) {
              var a = this,
                o = e.hostModel,
                l = e.getItemModel(t),
                s = l.getModel("emphasis"),
                u = e.getItemLayout(t),
                d = (0, r.extend)((0, P.i)(l.getModel("itemStyle"), u, !0), u);
              if (isNaN(d.startAngle)) a.setShape(d);
              else {
                if (n) {
                  a.setShape(d);
                  var c = o.getShallow("animationType");
                  o.ecModel.ssr
                    ? (v.LW(a, { scaleX: 0, scaleY: 0 }, o, {
                        dataIndex: t,
                        isFrom: !0,
                      }),
                      (a.originX = d.cx),
                      (a.originY = d.cy))
                    : "scale" === c
                    ? ((a.shape.r = u.r0), v.LW(a, { shape: { r: u.r } }, o, t))
                    : null != i
                    ? (a.setShape({ startAngle: i, endAngle: i }),
                      v.LW(
                        a,
                        {
                          shape: {
                            startAngle: u.startAngle,
                            endAngle: u.endAngle,
                          },
                        },
                        o,
                        t
                      ))
                    : ((a.shape.endAngle = u.startAngle),
                      v.oi(a, { shape: { endAngle: u.endAngle } }, o, t));
                } else (0, v.ap)(a), v.oi(a, { shape: d }, o, t);
                a.useStyle(e.getItemVisual(t, "style")), (0, S.Mx)(a, l);
                var h = (u.startAngle + u.endAngle) / 2,
                  p = o.get("selectedOffset"),
                  g = Math.cos(h) * p,
                  f = Math.sin(h) * p,
                  y = l.getShallow("cursor");
                y && a.attr("cursor", y),
                  this._updateLabel(o, e, t),
                  (a.ensureState("emphasis").shape = (0, r.extend)(
                    { r: u.r + ((s.get("scale") && s.get("scaleSize")) || 0) },
                    (0, P.i)(s.getModel("itemStyle"), u)
                  )),
                  (0, r.extend)(a.ensureState("select"), {
                    x: g,
                    y: f,
                    shape: (0, P.i)(l.getModel(["select", "itemStyle"]), u),
                  }),
                  (0, r.extend)(a.ensureState("blur"), {
                    shape: (0, P.i)(l.getModel(["blur", "itemStyle"]), u),
                  });
                var m = a.getTextGuideLine(),
                  x = a.getTextContent();
                m && (0, r.extend)(m.ensureState("select"), { x: g, y: f }),
                  (0, r.extend)(x.ensureState("select"), { x: g, y: f }),
                  (0, S.Lm)(
                    this,
                    s.get("focus"),
                    s.get("blurScope"),
                    s.get("disabled")
                  );
              }
            }),
            (t.prototype._updateLabel = function (e, t, i) {
              var n = this,
                a = t.getItemModel(i),
                o = a.getModel("labelLine"),
                l = t.getItemVisual(i, "style"),
                s = l && l.fill,
                u = l && l.opacity;
              (0, T.qM)(n, (0, T.lx)(a), {
                labelFetcher: t.hostModel,
                labelDataIndex: i,
                inheritColor: s,
                defaultOpacity: u,
                defaultText: e.getFormattedLabel(i, "normal") || t.getName(i),
              });
              var d = n.getTextContent();
              n.setTextConfig({ position: null, rotation: null }),
                d.attr({ z2: 10 });
              var c = e.get(["label", "position"]);
              if ("outside" !== c && "outer" !== c) n.removeTextGuideLine();
              else {
                var h = this.getTextGuideLine();
                h || ((h = new x.A()), this.setTextGuideLine(h)),
                  (0, w.eR)(this, (0, w.rv)(a), {
                    stroke: s,
                    opacity: (0, r.retrieve3)(
                      o.get(["lineStyle", "opacity"]),
                      u,
                      1
                    ),
                  });
              }
            }),
            t
          );
        })(b.A);
      const V = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.ignoreLabelLineUpdate = !0), t;
        }
        return (
          (0, y.C6)(t, e),
          (t.prototype.render = function (e, t, i, n) {
            var a,
              o = e.getData(),
              l = this._data,
              s = this.group;
            if (!l && o.count() > 0) {
              for (
                var u = o.getItemLayout(0), d = 1;
                isNaN(u && u.startAngle) && d < o.count();
                ++d
              )
                u = o.getItemLayout(d);
              u && (a = u.startAngle);
            }
            if (
              (this._emptyCircleSector && s.remove(this._emptyCircleSector),
              0 === o.count() && e.get("showEmptyCircle"))
            ) {
              var c = g(e),
                p = new b.A({ shape: (0, r.extend)(h(e, i), c) });
              p.useStyle(e.getModel("emptyCircleStyle").getItemStyle()),
                (this._emptyCircleSector = p),
                s.add(p);
            }
            o
              .diff(l)
              .add(function (e) {
                var t = new E(o, e, a);
                o.setItemGraphicEl(e, t), s.add(t);
              })
              .update(function (e, t) {
                var i = l.getItemGraphicEl(t);
                i.updateData(o, e, a),
                  i.off("click"),
                  s.add(i),
                  o.setItemGraphicEl(e, i);
              })
              .remove(function (t) {
                var i = l.getItemGraphicEl(t);
                v.t5(i, e, t);
              })
              .execute(),
              N(e),
              "expansion" !== e.get("animationTypeUpdate") && (this._data = o);
          }),
          (t.prototype.dispose = function () {}),
          (t.prototype.containPoint = function (e, t) {
            var i = t.getData().getItemLayout(0);
            if (i) {
              var n = e[0] - i.cx,
                a = e[1] - i.cy,
                o = Math.sqrt(n * n + a * a);
              return o <= i.r && o >= i.r0;
            }
          }),
          (t.type = "pie"),
          t
        );
      })(_.A);
      var R = i(5508),
        z = i(30130),
        O = i(26272),
        k = i(15230),
        G = s.$r();
      const B = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (0, y.C6)(t, e),
          (t.prototype.init = function (t) {
            e.prototype.init.apply(this, arguments),
              (this.legendVisualProvider = new O.A(
                r.bind(this.getData, this),
                r.bind(this.getRawData, this)
              )),
              this._defaultLabelLine(t);
          }),
          (t.prototype.mergeOption = function () {
            e.prototype.mergeOption.apply(this, arguments);
          }),
          (t.prototype.getInitialData = function () {
            return (0, R.A)(this, {
              coordDimensions: ["value"],
              encodeDefaulter: r.curry(z.ln, this),
            });
          }),
          (t.prototype.getDataParams = function (t) {
            var i = this.getData(),
              n = G(i),
              o = n.seats;
            if (!o) {
              var r = [];
              i.each(i.mapDimension("value"), function (e) {
                r.push(e);
              }),
                (o = n.seats =
                  (0, a.kM)(r, i.hostModel.get("percentPrecision")));
            }
            var l = e.prototype.getDataParams.call(this, t);
            return (l.percent = o[t] || 0), l.$vars.push("percent"), l;
          }),
          (t.prototype._defaultLabelLine = function (e) {
            s.M5(e, "labelLine", ["show"]);
            var t = e.labelLine,
              i = e.emphasis.labelLine;
            (t.show = t.show && e.label.show),
              (i.show = i.show && e.emphasis.label.show);
          }),
          (t.type = "series.pie"),
          (t.defaultOption = {
            z: 2,
            legendHoverLink: !0,
            colorBy: "data",
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            endAngle: "auto",
            padAngle: 0,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
              rotate: 0,
              show: !0,
              overflow: "truncate",
              position: "outer",
              alignTo: "none",
              edgeDistance: "25%",
              bleedMargin: 10,
              distanceToLabelLine: 5,
            },
            labelLine: {
              show: !0,
              length: 15,
              length2: 15,
              smooth: !1,
              minTurnAngle: 90,
              maxSurfaceAngle: 90,
              lineStyle: { width: 1, type: "solid" },
            },
            itemStyle: { borderWidth: 1, borderJoin: "round" },
            showEmptyCircle: !0,
            emptyCircleStyle: { color: "lightgray", opacity: 1 },
            labelLayout: { hideOverlap: !0 },
            emphasis: { scale: !0, scaleSize: 5 },
            avoidLabelOverlap: !0,
            animationType: "expansion",
            animationDuration: 1e3,
            animationTypeUpdate: "transition",
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut",
          }),
          t
        );
      })(k.A);
      var W = i(26358);
      function F(e) {
        e.registerChartView(V),
          e.registerSeriesModel(B),
          (0, n.I)("pie", e.registerAction),
          e.registerLayout((0, r.curry)(p, "pie")),
          e.registerProcessor((0, f.A)("pie")),
          e.registerProcessor((0, W.A)("pie"));
      }
    },
    97681: (e, t, i) => {
      i.d(t, { A: () => h });
      var n = i(47945),
        a = i(39253),
        o = i(72042),
        r = i(88667),
        l = i(70441),
        s = i(87689);
      function u(e, t, i, n) {
        return (
          t &&
          !isNaN(t[0]) &&
          !isNaN(t[1]) &&
          !(n.isIgnore && n.isIgnore(i)) &&
          !(n.clipShape && !n.clipShape.contain(t[0], t[1])) &&
          "none" !== e.getItemVisual(i, "symbol")
        );
      }
      function d(e) {
        return (
          null == e || (0, l.isObject)(e) || (e = { isIgnore: e }), e || {}
        );
      }
      function c(e) {
        var t = e.hostModel,
          i = t.getModel("emphasis");
        return {
          emphasisItemStyle: i.getModel("itemStyle").getItemStyle(),
          blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
          selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
          focus: i.get("focus"),
          blurScope: i.get("blurScope"),
          emphasisDisabled: i.get("disabled"),
          hoverScale: i.get("scale"),
          labelStatesModels: (0, s.lx)(t),
          cursorStyle: t.get("cursor"),
        };
      }
      const h = (function () {
        function e(e) {
          (this.group = new n.A()), (this._SymbolCtor = e || r.A);
        }
        return (
          (e.prototype.updateData = function (e, t) {
            (this._progressiveEls = null), (t = d(t));
            var i = this.group,
              n = e.hostModel,
              o = this._data,
              r = this._SymbolCtor,
              l = t.disableAnimation,
              s = c(e),
              h = { disableAnimation: l },
              p =
                t.getSymbolPoint ||
                function (t) {
                  return e.getItemLayout(t);
                };
            o || i.removeAll(),
              e
                .diff(o)
                .add(function (n) {
                  var a = p(n);
                  if (u(e, a, n, t)) {
                    var o = new r(e, n, s, h);
                    o.setPosition(a), e.setItemGraphicEl(n, o), i.add(o);
                  }
                })
                .update(function (d, c) {
                  var g = o.getItemGraphicEl(c),
                    f = p(d);
                  if (u(e, f, d, t)) {
                    var y = e.getItemVisual(d, "symbol") || "circle",
                      m = g && g.getSymbolType && g.getSymbolType();
                    if (!g || (m && m !== y))
                      i.remove(g), (g = new r(e, d, s, h)).setPosition(f);
                    else {
                      g.updateData(e, d, s, h);
                      var v = { x: f[0], y: f[1] };
                      l ? g.attr(v) : a.oi(g, v, n);
                    }
                    i.add(g), e.setItemGraphicEl(d, g);
                  } else i.remove(g);
                })
                .remove(function (e) {
                  var t = o.getItemGraphicEl(e);
                  t &&
                    t.fadeOut(function () {
                      i.remove(t);
                    }, n);
                })
                .execute(),
              (this._getSymbolPoint = p),
              (this._data = e);
          }),
          (e.prototype.updateLayout = function () {
            var e = this,
              t = this._data;
            t &&
              t.eachItemGraphicEl(function (t, i) {
                var n = e._getSymbolPoint(i);
                t.setPosition(n), t.markRedraw();
              });
          }),
          (e.prototype.incrementalPrepareUpdate = function (e) {
            (this._seriesScope = c(e)),
              (this._data = null),
              this.group.removeAll();
          }),
          (e.prototype.incrementalUpdate = function (e, t, i) {
            function n(e) {
              e.isGroup ||
                ((e.incremental = !0),
                (e.ensureState("emphasis").hoverLayer = !0));
            }
            (this._progressiveEls = []), (i = d(i));
            for (var a = e.start; a < e.end; a++) {
              var o = t.getItemLayout(a);
              if (u(t, o, a, i)) {
                var r = new this._SymbolCtor(t, a, this._seriesScope);
                r.traverse(n),
                  r.setPosition(o),
                  this.group.add(r),
                  t.setItemGraphicEl(a, r),
                  this._progressiveEls.push(r);
              }
            }
          }),
          (e.prototype.eachRendered = function (e) {
            o.traverseElements(this._progressiveEls || this.group, e);
          }),
          (e.prototype.remove = function (e) {
            var t = this.group,
              i = this._data;
            i && e
              ? i.eachItemGraphicEl(function (e) {
                  e.fadeOut(function () {
                    t.remove(e);
                  }, i.hostModel);
                })
              : t.removeAll();
          }),
          e
        );
      })();
    },
    97865: (e, t, i) => {
      i.d(t, { A: () => M });
      var n = i(37292),
        a = i(70441),
        o = i(22290),
        r = i(11552),
        l = i(13124),
        s = i(44362),
        u = i(70),
        d = l.A.prototype,
        c = s.A.prototype,
        h = function () {
          (this.x1 = 0),
            (this.y1 = 0),
            (this.x2 = 0),
            (this.y2 = 0),
            (this.percent = 1);
        };
      !(function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        (0, n.C6)(t, e);
      })(h);
      function p(e) {
        return isNaN(+e.cpx1) || isNaN(+e.cpy1);
      }
      const g = (function (e) {
        function t(t) {
          var i = e.call(this, t) || this;
          return (i.type = "ec-line"), i;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype.getDefaultStyle = function () {
            return { stroke: "#000", fill: null };
          }),
          (t.prototype.getDefaultShape = function () {
            return new h();
          }),
          (t.prototype.buildPath = function (e, t) {
            p(t) ? d.buildPath.call(this, e, t) : c.buildPath.call(this, e, t);
          }),
          (t.prototype.pointAt = function (e) {
            return p(this.shape)
              ? d.pointAt.call(this, e)
              : c.pointAt.call(this, e);
          }),
          (t.prototype.tangentAt = function (e) {
            var t = this.shape,
              i = p(t) ? [t.x2 - t.x1, t.y2 - t.y1] : c.tangentAt.call(this, e);
            return o.normalize(i, i);
          }),
          t
        );
      })(u.Ay);
      var f = i(39253),
        y = i(47945),
        m = i(41406),
        v = i(87689),
        x = i(85941),
        b = ["fromSymbol", "toSymbol"];
      function S(e) {
        return "_" + e + "Type";
      }
      function _(e, t, i) {
        var n = t.getItemVisual(i, e);
        if (!n || "none" === n) return n;
        var a = t.getItemVisual(i, e + "Size"),
          o = t.getItemVisual(i, e + "Rotate"),
          l = t.getItemVisual(i, e + "Offset"),
          s = t.getItemVisual(i, e + "KeepAspect"),
          u = r.xU(a);
        return n + u + r.hV(l || 0, u) + (o || "") + (s || "");
      }
      function A(e, t, i) {
        var n = t.getItemVisual(i, e);
        if (n && "none" !== n) {
          var a = t.getItemVisual(i, e + "Size"),
            o = t.getItemVisual(i, e + "Rotate"),
            l = t.getItemVisual(i, e + "Offset"),
            s = t.getItemVisual(i, e + "KeepAspect"),
            u = r.xU(a),
            d = r.hV(l || 0, u),
            c = r.v5(
              n,
              -u[0] / 2 + d[0],
              -u[1] / 2 + d[1],
              u[0],
              u[1],
              null,
              s
            );
          return (
            (c.__specifiedRotation =
              null == o || isNaN(o) ? void 0 : (+o * Math.PI) / 180 || 0),
            (c.name = e),
            c
          );
        }
      }
      function w(e, t) {
        (e.x1 = t[0][0]),
          (e.y1 = t[0][1]),
          (e.x2 = t[1][0]),
          (e.y2 = t[1][1]),
          (e.percent = 1);
        var i = t[2];
        i
          ? ((e.cpx1 = i[0]), (e.cpy1 = i[1]))
          : ((e.cpx1 = NaN), (e.cpy1 = NaN));
      }
      var I = (function (e) {
        function t(t, i, n) {
          var a = e.call(this) || this;
          return a._createLine(t, i, n), a;
        }
        return (
          (0, n.C6)(t, e),
          (t.prototype._createLine = function (e, t, i) {
            var n = e.hostModel,
              o = (function (e) {
                var t = new g({ name: "line", subPixelOptimize: !0 });
                return w(t.shape, e), t;
              })(e.getItemLayout(t));
            (o.shape.percent = 0),
              f.LW(o, { shape: { percent: 1 } }, n, t),
              this.add(o),
              (0, a.each)(
                b,
                function (i) {
                  var n = A(i, e, t);
                  this.add(n), (this[S(i)] = _(i, e, t));
                },
                this
              ),
              this._updateCommonStl(e, t, i);
          }),
          (t.prototype.updateData = function (e, t, i) {
            var n = e.hostModel,
              o = this.childOfName("line"),
              r = e.getItemLayout(t),
              l = { shape: {} };
            w(l.shape, r),
              f.oi(o, l, n, t),
              (0, a.each)(
                b,
                function (i) {
                  var n = _(i, e, t),
                    a = S(i);
                  if (this[a] !== n) {
                    this.remove(this.childOfName(i));
                    var o = A(i, e, t);
                    this.add(o);
                  }
                  this[a] = n;
                },
                this
              ),
              this._updateCommonStl(e, t, i);
          }),
          (t.prototype.getLinePath = function () {
            return this.childAt(0);
          }),
          (t.prototype._updateCommonStl = function (e, t, i) {
            var n = e.hostModel,
              o = this.childOfName("line"),
              r = i && i.emphasisLineStyle,
              l = i && i.blurLineStyle,
              s = i && i.selectLineStyle,
              u = i && i.labelStatesModels,
              d = i && i.emphasisDisabled,
              c = i && i.focus,
              h = i && i.blurScope;
            if (!i || e.hasItemOption) {
              var p = e.getItemModel(t),
                g = p.getModel("emphasis");
              (r = g.getModel("lineStyle").getLineStyle()),
                (l = p.getModel(["blur", "lineStyle"]).getLineStyle()),
                (s = p.getModel(["select", "lineStyle"]).getLineStyle()),
                (d = g.get("disabled")),
                (c = g.get("focus")),
                (h = g.get("blurScope")),
                (u = (0, v.lx)(p));
            }
            var f = e.getItemVisual(t, "style"),
              y = f.stroke;
            o.useStyle(f),
              (o.style.fill = null),
              (o.style.strokeNoScale = !0),
              (o.ensureState("emphasis").style = r),
              (o.ensureState("blur").style = l),
              (o.ensureState("select").style = s),
              (0, a.each)(
                b,
                function (e) {
                  var t = this.childOfName(e);
                  if (t) {
                    t.setColor(y), (t.style.opacity = f.opacity);
                    for (var i = 0; i < m.BV.length; i++) {
                      var n = m.BV[i],
                        a = o.getState(n);
                      if (a) {
                        var r = a.style || {},
                          l = t.ensureState(n),
                          s = l.style || (l.style = {});
                        null != r.stroke &&
                          (s[t.__isEmptyBrush ? "stroke" : "fill"] = r.stroke),
                          null != r.opacity && (s.opacity = r.opacity);
                      }
                    }
                    t.markRedraw();
                  }
                },
                this
              );
            var S = n.getRawValue(t);
            (0, v.qM)(this, u, {
              labelDataIndex: t,
              labelFetcher: {
                getFormattedLabel: function (t, i) {
                  return n.getFormattedLabel(t, i, e.dataType);
                },
              },
              inheritColor: y || "#000",
              defaultOpacity: f.opacity,
              defaultText:
                (null == S ? e.getName(t) : isFinite(S) ? (0, x.LI)(S) : S) +
                "",
            });
            var _ = this.getTextContent();
            if (_) {
              var A = u.normal;
              (_.__align = _.style.align),
                (_.__verticalAlign = _.style.verticalAlign),
                (_.__position = A.get("position") || "middle");
              var w = A.get("distance");
              (0, a.isArray)(w) || (w = [w, w]), (_.__labelDistance = w);
            }
            this.setTextConfig({ position: null, local: !0, inside: !1 }),
              (0, m.Lm)(this, c, h, d);
          }),
          (t.prototype.highlight = function () {
            (0, m.HY)(this);
          }),
          (t.prototype.downplay = function () {
            (0, m.SD)(this);
          }),
          (t.prototype.updateLayout = function (e, t) {
            this.setLinePoints(e.getItemLayout(t));
          }),
          (t.prototype.setLinePoints = function (e) {
            var t = this.childOfName("line");
            w(t.shape, e), t.dirty();
          }),
          (t.prototype.beforeUpdate = function () {
            var e = this,
              t = e.childOfName("fromSymbol"),
              i = e.childOfName("toSymbol"),
              n = e.getTextContent();
            if (t || i || (n && !n.ignore)) {
              for (var a = 1, r = this.parent; r; )
                r.scaleX && (a /= r.scaleX), (r = r.parent);
              var l = e.childOfName("line");
              if (this.__dirty || l.__dirty) {
                var s = l.shape.percent,
                  u = l.pointAt(0),
                  d = l.pointAt(s),
                  c = o.sub([], d, u);
                if (
                  (o.normalize(c, c),
                  t &&
                    (t.setPosition(u),
                    w(t, 0),
                    (t.scaleX = t.scaleY = a * s),
                    t.markRedraw()),
                  i &&
                    (i.setPosition(d),
                    w(i, 1),
                    (i.scaleX = i.scaleY = a * s),
                    i.markRedraw()),
                  n && !n.ignore)
                ) {
                  (n.x = n.y = 0), (n.originX = n.originY = 0);
                  var h = void 0,
                    p = void 0,
                    g = n.__labelDistance,
                    f = g[0] * a,
                    y = g[1] * a,
                    m = s / 2,
                    v = l.tangentAt(m),
                    x = [v[1], -v[0]],
                    b = l.pointAt(m);
                  x[1] > 0 && ((x[0] = -x[0]), (x[1] = -x[1]));
                  var S = v[0] < 0 ? -1 : 1;
                  if ("start" !== n.__position && "end" !== n.__position) {
                    var _ = -Math.atan2(v[1], v[0]);
                    d[0] < u[0] && (_ = Math.PI + _), (n.rotation = _);
                  }
                  var A = void 0;
                  switch (n.__position) {
                    case "insideStartTop":
                    case "insideMiddleTop":
                    case "insideEndTop":
                    case "middle":
                      (A = -y), (p = "bottom");
                      break;
                    case "insideStartBottom":
                    case "insideMiddleBottom":
                    case "insideEndBottom":
                      (A = y), (p = "top");
                      break;
                    default:
                      (A = 0), (p = "middle");
                  }
                  switch (n.__position) {
                    case "end":
                      (n.x = c[0] * f + d[0]),
                        (n.y = c[1] * y + d[1]),
                        (h =
                          c[0] > 0.8
                            ? "left"
                            : c[0] < -0.8
                            ? "right"
                            : "center"),
                        (p =
                          c[1] > 0.8
                            ? "top"
                            : c[1] < -0.8
                            ? "bottom"
                            : "middle");
                      break;
                    case "start":
                      (n.x = -c[0] * f + u[0]),
                        (n.y = -c[1] * y + u[1]),
                        (h =
                          c[0] > 0.8
                            ? "right"
                            : c[0] < -0.8
                            ? "left"
                            : "center"),
                        (p =
                          c[1] > 0.8
                            ? "bottom"
                            : c[1] < -0.8
                            ? "top"
                            : "middle");
                      break;
                    case "insideStartTop":
                    case "insideStart":
                    case "insideStartBottom":
                      (n.x = f * S + u[0]),
                        (n.y = u[1] + A),
                        (h = v[0] < 0 ? "right" : "left"),
                        (n.originX = -f * S),
                        (n.originY = -A);
                      break;
                    case "insideMiddleTop":
                    case "insideMiddle":
                    case "insideMiddleBottom":
                    case "middle":
                      (n.x = b[0]),
                        (n.y = b[1] + A),
                        (h = "center"),
                        (n.originY = -A);
                      break;
                    case "insideEndTop":
                    case "insideEnd":
                    case "insideEndBottom":
                      (n.x = -f * S + d[0]),
                        (n.y = d[1] + A),
                        (h = v[0] >= 0 ? "right" : "left"),
                        (n.originX = f * S),
                        (n.originY = -A);
                  }
                  (n.scaleX = n.scaleY = a),
                    n.setStyle({
                      verticalAlign: n.__verticalAlign || p,
                      align: n.__align || h,
                    });
                }
              }
            }
            function w(e, t) {
              var i = e.__specifiedRotation;
              if (null == i) {
                var n = l.tangentAt(t);
                e.attr(
                  "rotation",
                  ((1 === t ? -1 : 1) * Math.PI) / 2 - Math.atan2(n[1], n[0])
                );
              } else e.attr("rotation", i);
            }
          }),
          t
        );
      })(y.A);
      const M = I;
    },
  },
]);
