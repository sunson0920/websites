"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [7878],
  {
    1782: (t, e, n) => {
      n.d(e, { A: () => _ });
      var i = n(70441),
        r = n(37292),
        o = n(13171),
        a = n(6874),
        s = n(95380),
        u = n(34575),
        c = {
          geoJSON: { aspectScale: 0.75, invertLongitute: !0 },
          geoSVG: { aspectScale: 1, invertLongitute: !1 },
        },
        l = ["lng", "lat"],
        h = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            (o.dimensions = l),
              (o.type = "geo"),
              (o._nameCoordMap = i.createHashMap()),
              (o.map = n);
            var a,
              u = r.projection,
              h = s.A.load(n, r.nameMap, r.nameProperty),
              d = s.A.getGeoResource(n),
              p =
                ((o.resourceType = d ? d.type : null), (o.regions = h.regions)),
              f = c[d.type];
            if (
              ((o._regionsMap = h.regionsMap),
              (o.regions = h.regions),
              (o.projection = u),
              u)
            )
              for (var g = 0; g < p.length; g++) {
                var m = p[g].getBoundingRect(u);
                (a = a || m.clone()).union(m);
              }
            else a = h.boundingRect;
            return (
              o.setBoundingRect(a.x, a.y, a.width, a.height),
              (o.aspectScale = u
                ? 1
                : i.retrieve2(r.aspectScale, f.aspectScale)),
              (o._invertLongitute = !u && f.invertLongitute),
              o
            );
          }
          return (
            (0, r.C6)(e, t),
            (e.prototype._transformTo = function (t, e, n, i) {
              var r = this.getBoundingRect(),
                a = this._invertLongitute;
              (r = r.clone()), a && (r.y = -r.y - r.height);
              var s = this._rawTransformable;
              s.transform = r.calculateTransform(new o.A(t, e, n, i));
              var u = s.parent;
              (s.parent = null),
                s.decomposeTransform(),
                (s.parent = u),
                a && (s.scaleY = -s.scaleY),
                this._updateTransform();
            }),
            (e.prototype.getRegion = function (t) {
              return this._regionsMap.get(t);
            }),
            (e.prototype.getRegionByCoord = function (t) {
              for (var e = this.regions, n = 0; n < e.length; n++) {
                var i = e[n];
                if ("geoJSON" === i.type && i.contain(t)) return e[n];
              }
            }),
            (e.prototype.addGeoCoord = function (t, e) {
              this._nameCoordMap.set(t, e);
            }),
            (e.prototype.getGeoCoord = function (t) {
              var e = this._regionsMap.get(t);
              return this._nameCoordMap.get(t) || (e && e.getCenter());
            }),
            (e.prototype.dataToPoint = function (t, e, n) {
              if ((i.isString(t) && (t = this.getGeoCoord(t)), t)) {
                var r = this.projection;
                return (
                  r && (t = r.project(t)), t && this.projectedToPoint(t, e, n)
                );
              }
            }),
            (e.prototype.pointToData = function (t) {
              var e = this.projection;
              return e && (t = e.unproject(t)), t && this.pointToProjected(t);
            }),
            (e.prototype.pointToProjected = function (e) {
              return t.prototype.pointToData.call(this, e);
            }),
            (e.prototype.projectedToPoint = function (e, n, i) {
              return t.prototype.dataToPoint.call(this, e, n, i);
            }),
            (e.prototype.convertToPixel = function (t, e, n) {
              var i = d(e);
              return i === this ? i.dataToPoint(n) : null;
            }),
            (e.prototype.convertFromPixel = function (t, e, n) {
              var i = d(e);
              return i === this ? i.pointToData(n) : null;
            }),
            e
          );
        })(a.A);
      function d(t) {
        var e = t.geoModel,
          n = t.seriesModel;
        return e
          ? e.coordinateSystem
          : n
          ? n.coordinateSystem ||
            (n.getReferringComponents("geo", u.US).models[0] || {})
              .coordinateSystem
          : null;
      }
      i.mixin(h, a.A);
      const p = h;
      var f = n(67730),
        g = n(85941),
        m = n(22290);
      function y(t, e) {
        var n = t.get("boundingCoords");
        if (null != n) {
          var i = n[0],
            r = n[1];
          if (
            isFinite(i[0]) &&
            isFinite(i[1]) &&
            isFinite(r[0]) &&
            isFinite(r[1])
          ) {
            var o = this.projection;
            if (o) {
              var a = i[0],
                s = i[1],
                u = r[0],
                c = r[1];
              (i = [1 / 0, 1 / 0]), (r = [-1 / 0, -1 / 0]);
              var l = function (t, e, n, a) {
                for (var s = n - t, u = a - e, c = 0; c <= 100; c++) {
                  var l = c / 100,
                    h = o.project([t + s * l, e + u * l]);
                  m.min(i, i, h), m.max(r, r, h);
                }
              };
              l(a, s, u, s), l(u, s, u, c), l(u, c, a, c), l(a, c, u, s);
            }
            this.setBoundingRect(i[0], i[1], r[0] - i[0], r[1] - i[1]);
          } else 0;
        }
        var h,
          d,
          p,
          y = this.getBoundingRect(),
          v = t.get("layoutCenter"),
          _ = t.get("layoutSize"),
          x = e.getWidth(),
          M = e.getHeight(),
          A = (y.width / y.height) * this.aspectScale,
          w = !1;
        if (
          (v &&
            _ &&
            ((h = [g.lo(v[0], x), g.lo(v[1], M)]),
            (d = g.lo(_, Math.min(x, M))),
            isNaN(h[0]) || isNaN(h[1]) || isNaN(d) || (w = !0)),
          w)
        )
          (p = {}),
            A > 1
              ? ((p.width = d), (p.height = d / A))
              : ((p.height = d), (p.width = d * A)),
            (p.y = h[1] - p.height / 2),
            (p.x = h[0] - p.width / 2);
        else {
          var I = t.getBoxLayoutParams();
          (I.aspect = A), (p = f.dV(I, { width: x, height: M }));
        }
        this.setViewRect(p.x, p.y, p.width, p.height),
          this.setCenter(t.get("center"), e),
          this.setZoom(t.get("zoom"));
      }
      var v = (function () {
        function t() {
          this.dimensions = l;
        }
        return (
          (t.prototype.create = function (t, e) {
            var n = [];
            function r(t) {
              return {
                nameProperty: t.get("nameProperty"),
                aspectScale: t.get("aspectScale"),
                projection: t.get("projection"),
              };
            }
            t.eachComponent("geo", function (t, o) {
              var a = t.get("map"),
                s = new p(
                  a + o,
                  a,
                  i.extend({ nameMap: t.get("nameMap") }, r(t))
                );
              (s.zoomLimit = t.get("scaleLimit")),
                n.push(s),
                (t.coordinateSystem = s),
                (s.model = t),
                (s.resize = y),
                s.resize(t, e);
            }),
              t.eachSeries(function (t) {
                if ("geo" === t.get("coordinateSystem")) {
                  var e = t.get("geoIndex") || 0;
                  t.coordinateSystem = n[e];
                }
              });
            var o = {};
            return (
              t.eachSeriesByType("map", function (t) {
                if (!t.getHostGeoModel()) {
                  var e = t.getMapType();
                  (o[e] = o[e] || []), o[e].push(t);
                }
              }),
              i.each(o, function (t, o) {
                var a = i.map(t, function (t) {
                    return t.get("nameMap");
                  }),
                  s = new p(
                    o,
                    o,
                    i.extend({ nameMap: i.mergeAll(a) }, r(t[0]))
                  );
                (s.zoomLimit = i.retrieve.apply(
                  null,
                  i.map(t, function (t) {
                    return t.get("scaleLimit");
                  })
                )),
                  n.push(s),
                  (s.resize = y),
                  s.resize(t[0], e),
                  i.each(t, function (t) {
                    (t.coordinateSystem = s),
                      (function (t, e) {
                        i.each(e.get("geoCoord"), function (e, n) {
                          t.addGeoCoord(n, e);
                        });
                      })(s, t);
                  });
              }),
              n
            );
          }),
          (t.prototype.getFilledRegions = function (t, e, n, r) {
            for (
              var o = (t || []).slice(), a = i.createHashMap(), u = 0;
              u < o.length;
              u++
            )
              a.set(o[u].name, o[u]);
            var c = s.A.load(e, n, r);
            return (
              i.each(c.regions, function (t) {
                var e = t.name,
                  n = a.get(e),
                  r = t.properties && t.properties.echartsStyle;
                n || ((n = { name: e }), o.push(n)), r && i.merge(n, r);
              }),
              o
            );
          }),
          t
        );
      })();
      const _ = new v();
    },
    6458: (t, e, n) => {
      n.d(e, { A: () => u });
      var i = n(70441),
        r = n(67730),
        o = n(85941),
        a = 864e5;
      function s(t) {
        var e = t.calendarModel,
          n = t.seriesModel;
        return e ? e.coordinateSystem : n ? n.coordinateSystem : null;
      }
      const u = (function () {
        function t(e, n, i) {
          (this.type = "calendar"),
            (this.dimensions = t.dimensions),
            (this.getDimensionsInfo = t.getDimensionsInfo),
            (this._model = e);
        }
        return (
          (t.getDimensionsInfo = function () {
            return [{ name: "time", type: "time" }, "value"];
          }),
          (t.prototype.getRangeInfo = function () {
            return this._rangeInfo;
          }),
          (t.prototype.getModel = function () {
            return this._model;
          }),
          (t.prototype.getRect = function () {
            return this._rect;
          }),
          (t.prototype.getCellWidth = function () {
            return this._sw;
          }),
          (t.prototype.getCellHeight = function () {
            return this._sh;
          }),
          (t.prototype.getOrient = function () {
            return this._orient;
          }),
          (t.prototype.getFirstDayOfWeek = function () {
            return this._firstDayOfWeek;
          }),
          (t.prototype.getDateInfo = function (t) {
            var e = (t = o._U(t)).getFullYear(),
              n = t.getMonth() + 1,
              i = n < 10 ? "0" + n : "" + n,
              r = t.getDate(),
              a = r < 10 ? "0" + r : "" + r,
              s = t.getDay();
            return {
              y: e + "",
              m: i,
              d: a,
              day: (s = Math.abs((s + 7 - this.getFirstDayOfWeek()) % 7)),
              time: t.getTime(),
              formatedDate: e + "-" + i + "-" + a,
              date: t,
            };
          }),
          (t.prototype.getNextNDay = function (t, e) {
            return (
              0 === (e = e || 0) ||
                (t = new Date(this.getDateInfo(t).time)).setDate(
                  t.getDate() + e
                ),
              this.getDateInfo(t)
            );
          }),
          (t.prototype.update = function (t, e) {
            (this._firstDayOfWeek = +this._model
              .getModel("dayLabel")
              .get("firstDay")),
              (this._orient = this._model.get("orient")),
              (this._lineWidth =
                this._model.getModel("itemStyle").getItemStyle().lineWidth ||
                0),
              (this._rangeInfo = this._getRangeInfo(this._initRangeOption()));
            var n = this._rangeInfo.weeks || 1,
              o = ["width", "height"],
              a = this._model.getCellSize().slice(),
              s = this._model.getBoxLayoutParams(),
              u = "horizontal" === this._orient ? [n, 7] : [7, n];
            i.each([0, 1], function (t) {
              h(a, t) && (s[o[t]] = a[t] * u[t]);
            });
            var c = { width: e.getWidth(), height: e.getHeight() },
              l = (this._rect = r.dV(s, c));
            function h(t, e) {
              return null != t[e] && "auto" !== t[e];
            }
            i.each([0, 1], function (t) {
              h(a, t) || (a[t] = l[o[t]] / u[t]);
            }),
              (this._sw = a[0]),
              (this._sh = a[1]);
          }),
          (t.prototype.dataToPoint = function (t, e) {
            i.isArray(t) && (t = t[0]), null == e && (e = !0);
            var n = this.getDateInfo(t),
              r = this._rangeInfo,
              o = n.formatedDate;
            if (e && !(n.time >= r.start.time && n.time < r.end.time + a))
              return [NaN, NaN];
            var s = n.day,
              u = this._getRangeInfo([r.start.time, o]).nthWeek;
            return "vertical" === this._orient
              ? [
                  this._rect.x + s * this._sw + this._sw / 2,
                  this._rect.y + u * this._sh + this._sh / 2,
                ]
              : [
                  this._rect.x + u * this._sw + this._sw / 2,
                  this._rect.y + s * this._sh + this._sh / 2,
                ];
          }),
          (t.prototype.pointToData = function (t) {
            var e = this.pointToDate(t);
            return e && e.time;
          }),
          (t.prototype.dataToRect = function (t, e) {
            var n = this.dataToPoint(t, e);
            return {
              contentShape: {
                x: n[0] - (this._sw - this._lineWidth) / 2,
                y: n[1] - (this._sh - this._lineWidth) / 2,
                width: this._sw - this._lineWidth,
                height: this._sh - this._lineWidth,
              },
              center: n,
              tl: [n[0] - this._sw / 2, n[1] - this._sh / 2],
              tr: [n[0] + this._sw / 2, n[1] - this._sh / 2],
              br: [n[0] + this._sw / 2, n[1] + this._sh / 2],
              bl: [n[0] - this._sw / 2, n[1] + this._sh / 2],
            };
          }),
          (t.prototype.pointToDate = function (t) {
            var e = Math.floor((t[0] - this._rect.x) / this._sw) + 1,
              n = Math.floor((t[1] - this._rect.y) / this._sh) + 1,
              i = this._rangeInfo.range;
            return "vertical" === this._orient
              ? this._getDateByWeeksAndDay(n, e - 1, i)
              : this._getDateByWeeksAndDay(e, n - 1, i);
          }),
          (t.prototype.convertToPixel = function (t, e, n) {
            var i = s(e);
            return i === this ? i.dataToPoint(n) : null;
          }),
          (t.prototype.convertFromPixel = function (t, e, n) {
            var i = s(e);
            return i === this ? i.pointToData(n) : null;
          }),
          (t.prototype.containPoint = function (t) {
            return console.warn("Not implemented."), !1;
          }),
          (t.prototype._initRangeOption = function () {
            var t,
              e = this._model.get("range");
            if ((i.isArray(e) && 1 === e.length && (e = e[0]), i.isArray(e)))
              t = e;
            else {
              var n = e.toString();
              if (
                (/^\d{4}$/.test(n) && (t = [n + "-01-01", n + "-12-31"]),
                /^\d{4}[\/|-]\d{1,2}$/.test(n))
              ) {
                var r = this.getDateInfo(n),
                  o = r.date;
                o.setMonth(o.getMonth() + 1);
                var a = this.getNextNDay(o, -1);
                t = [r.formatedDate, a.formatedDate];
              }
              /^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(n) && (t = [n, n]);
            }
            if (!t) return e;
            var s = this._getRangeInfo(t);
            return s.start.time > s.end.time && t.reverse(), t;
          }),
          (t.prototype._getRangeInfo = function (t) {
            var e,
              n = [this.getDateInfo(t[0]), this.getDateInfo(t[1])];
            n[0].time > n[1].time && ((e = !0), n.reverse());
            var i = Math.floor(n[1].time / a) - Math.floor(n[0].time / a) + 1,
              r = new Date(n[0].time),
              o = r.getDate(),
              s = n[1].date.getDate();
            r.setDate(o + i - 1);
            var u = r.getDate();
            if (u !== s)
              for (
                var c = r.getTime() - n[1].time > 0 ? 1 : -1;
                (u = r.getDate()) !== s && (r.getTime() - n[1].time) * c > 0;

              )
                (i -= c), r.setDate(u - c);
            var l = Math.floor((i + n[0].day + 6) / 7),
              h = e ? 1 - l : l - 1;
            return (
              e && n.reverse(),
              {
                range: [n[0].formatedDate, n[1].formatedDate],
                start: n[0],
                end: n[1],
                allDay: i,
                weeks: l,
                nthWeek: h,
                fweek: n[0].day,
                lweek: n[1].day,
              }
            );
          }),
          (t.prototype._getDateByWeeksAndDay = function (t, e, n) {
            var i = this._getRangeInfo(n);
            if (
              t > i.weeks ||
              (0 === t && e < i.fweek) ||
              (t === i.weeks && e > i.lweek)
            )
              return null;
            var r = 7 * (t - 1) - i.fweek + e,
              o = new Date(i.start.time);
            return o.setDate(+i.start.d + r), this.getDateInfo(o);
          }),
          (t.create = function (e, n) {
            var i = [];
            return (
              e.eachComponent("calendar", function (r) {
                var o = new t(r, e, n);
                i.push(o), (r.coordinateSystem = o);
              }),
              e.eachSeries(function (t) {
                "calendar" === t.get("coordinateSystem") &&
                  (t.coordinateSystem = i[t.get("calendarIndex") || 0]);
              }),
              i
            );
          }),
          (t.dimensions = ["time", "value"]),
          t
        );
      })();
    },
    6874: (t, e, n) => {
      n.d(e, { A: () => h });
      var i = n(37292),
        r = n(22290),
        o = n(44156),
        a = n(13171),
        s = n(71865),
        u = n(85941),
        c = r.applyTransform;
      function l(t) {
        var e = t.seriesModel;
        return e ? e.coordinateSystem : null;
      }
      const h = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.type = "view"),
            (n.dimensions = ["x", "y"]),
            (n._roamTransformable = new s.Ay()),
            (n._rawTransformable = new s.Ay()),
            (n.name = e),
            n
          );
        }
        return (
          (0, i.C6)(e, t),
          (e.prototype.setBoundingRect = function (t, e, n, i) {
            return (this._rect = new a.A(t, e, n, i)), this._rect;
          }),
          (e.prototype.getBoundingRect = function () {
            return this._rect;
          }),
          (e.prototype.setViewRect = function (t, e, n, i) {
            this._transformTo(t, e, n, i),
              (this._viewRect = new a.A(t, e, n, i));
          }),
          (e.prototype._transformTo = function (t, e, n, i) {
            var r = this.getBoundingRect(),
              o = this._rawTransformable;
            o.transform = r.calculateTransform(new a.A(t, e, n, i));
            var s = o.parent;
            (o.parent = null),
              o.decomposeTransform(),
              (o.parent = s),
              this._updateTransform();
          }),
          (e.prototype.setCenter = function (t, e) {
            t &&
              ((this._center = [
                (0, u.lo)(t[0], e.getWidth()),
                (0, u.lo)(t[1], e.getHeight()),
              ]),
              this._updateCenterAndZoom());
          }),
          (e.prototype.setZoom = function (t) {
            t = t || 1;
            var e = this.zoomLimit;
            e &&
              (null != e.max && (t = Math.min(e.max, t)),
              null != e.min && (t = Math.max(e.min, t))),
              (this._zoom = t),
              this._updateCenterAndZoom();
          }),
          (e.prototype.getDefaultCenter = function () {
            var t = this.getBoundingRect();
            return [t.x + t.width / 2, t.y + t.height / 2];
          }),
          (e.prototype.getCenter = function () {
            return this._center || this.getDefaultCenter();
          }),
          (e.prototype.getZoom = function () {
            return this._zoom || 1;
          }),
          (e.prototype.getRoamTransform = function () {
            return this._roamTransformable.getLocalTransform();
          }),
          (e.prototype._updateCenterAndZoom = function () {
            var t = this._rawTransformable.getLocalTransform(),
              e = this._roamTransformable,
              n = this.getDefaultCenter(),
              i = this.getCenter(),
              o = this.getZoom();
            (i = r.applyTransform([], i, t)),
              (n = r.applyTransform([], n, t)),
              (e.originX = i[0]),
              (e.originY = i[1]),
              (e.x = n[0] - i[0]),
              (e.y = n[1] - i[1]),
              (e.scaleX = e.scaleY = o),
              this._updateTransform();
          }),
          (e.prototype._updateTransform = function () {
            var t = this._roamTransformable,
              e = this._rawTransformable;
            (e.parent = t),
              t.updateTransform(),
              e.updateTransform(),
              o.copy(
                this.transform || (this.transform = []),
                e.transform || o.create()
              ),
              (this._rawTransform = e.getLocalTransform()),
              (this.invTransform = this.invTransform || []),
              o.invert(this.invTransform, this.transform),
              this.decomposeTransform();
          }),
          (e.prototype.getTransformInfo = function () {
            var t = this._rawTransformable,
              e = this._roamTransformable,
              n = new s.Ay();
            return (
              (n.transform = e.transform),
              n.decomposeTransform(),
              {
                roam: { x: n.x, y: n.y, scaleX: n.scaleX, scaleY: n.scaleY },
                raw: { x: t.x, y: t.y, scaleX: t.scaleX, scaleY: t.scaleY },
              }
            );
          }),
          (e.prototype.getViewRect = function () {
            return this._viewRect;
          }),
          (e.prototype.getViewRectAfterRoam = function () {
            var t = this.getBoundingRect().clone();
            return t.applyTransform(this.transform), t;
          }),
          (e.prototype.dataToPoint = function (t, e, n) {
            var i = e ? this._rawTransform : this.transform;
            return (n = n || []), i ? c(n, t, i) : r.copy(n, t);
          }),
          (e.prototype.pointToData = function (t) {
            var e = this.invTransform;
            return e ? c([], t, e) : [t[0], t[1]];
          }),
          (e.prototype.convertToPixel = function (t, e, n) {
            var i = l(e);
            return i === this ? i.dataToPoint(n) : null;
          }),
          (e.prototype.convertFromPixel = function (t, e, n) {
            var i = l(e);
            return i === this ? i.pointToData(n) : null;
          }),
          (e.prototype.containPoint = function (t) {
            return this.getViewRectAfterRoam().contain(t[0], t[1]);
          }),
          (e.dimensions = ["x", "y"]),
          e
        );
      })(s.Ay);
    },
    7335: (t, e, n) => {
      n.d(e, { A: () => s });
      var i = n(70441),
        r = n(15901);
      function o(t, e, n) {
        for (var i = 0; i < t.length; i++) t[i] = a(t[i], e[i], n);
      }
      function a(t, e, n) {
        for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
          var s = t.charCodeAt(a) - 64,
            u = t.charCodeAt(a + 1) - 64;
          (s = (s >> 1) ^ -(1 & s)),
            (u = (u >> 1) ^ -(1 & u)),
            (r = s += r),
            (o = u += o),
            i.push([s / n, u / n]);
        }
        return i;
      }
      function s(t, e) {
        return (
          (t = (function (t) {
            if (!t.UTF8Encoding) return t;
            var e = t,
              n = e.UTF8Scale;
            null == n && (n = 1024);
            var r = e.features;
            return (
              i.each(r, function (t) {
                var e = t.geometry,
                  r = e.encodeOffsets,
                  s = e.coordinates;
                if (r)
                  switch (e.type) {
                    case "LineString":
                      e.coordinates = a(s, r, n);
                      break;
                    case "Polygon":
                    case "MultiLineString":
                      o(s, r, n);
                      break;
                    case "MultiPolygon":
                      i.each(s, function (t, e) {
                        return o(t, r[e], n);
                      });
                  }
              }),
              (e.UTF8Encoding = !1),
              e
            );
          })(t)),
          i.map(
            i.filter(t.features, function (t) {
              return (
                t.geometry && t.properties && t.geometry.coordinates.length > 0
              );
            }),
            function (t) {
              var n = t.properties,
                o = t.geometry,
                a = [];
              switch (o.type) {
                case "Polygon":
                  var s = o.coordinates;
                  a.push(new r.m5(s[0], s.slice(1)));
                  break;
                case "MultiPolygon":
                  i.each(o.coordinates, function (t) {
                    t[0] && a.push(new r.m5(t[0], t.slice(1)));
                  });
                  break;
                case "LineString":
                  a.push(new r.nS([o.coordinates]));
                  break;
                case "MultiLineString":
                  a.push(new r.nS(o.coordinates));
              }
              var u = new r.cn(n[e || "name"], a, n.cp);
              return (u.properties = n), u;
            }
          )
        );
      }
    },
    7678: (t, e, n) => {
      n.d(e, { A: () => d });
      var i = n(37292);
      const r = (function (t) {
        function e(e, n, i, r, o) {
          var a = t.call(this, e, n, i) || this;
          return (a.type = r || "value"), (a.position = o || "bottom"), a;
        }
        return (
          (0, i.C6)(e, t),
          (e.prototype.isHorizontal = function () {
            var t = this.position;
            return "top" === t || "bottom" === t;
          }),
          (e.prototype.pointToData = function (t, e) {
            return this.coordinateSystem.pointToData(t)[0];
          }),
          e
        );
      })(n(46064).A);
      var o = n(88186),
        a = n(67730),
        s = n(70441),
        u = ["single"];
      function c(t) {
        var e = t.seriesModel,
          n = t.singleAxisModel;
        return (n && n.coordinateSystem) || (e && e.coordinateSystem);
      }
      const l = (function () {
        function t(t, e, n) {
          (this.type = "single"),
            (this.dimension = "single"),
            (this.dimensions = u),
            (this.axisPointerEnabled = !0),
            (this.model = t),
            this._init(t, e, n);
        }
        return (
          (t.prototype._init = function (t, e, n) {
            var i = this.dimension,
              a = new r(i, o.f$(t), [0, 0], t.get("type"), t.get("position")),
              s = "category" === a.type;
            (a.onBand = s && t.get("boundaryGap")),
              (a.inverse = t.get("inverse")),
              (a.orient = t.get("orient")),
              (t.axis = a),
              (a.model = t),
              (a.coordinateSystem = this),
              (this._axis = a);
          }),
          (t.prototype.update = function (t, e) {
            t.eachSeries(function (t) {
              if (t.coordinateSystem === this) {
                var e = t.getData();
                (0, s.each)(
                  e.mapDimensionsAll(this.dimension),
                  function (t) {
                    this._axis.scale.unionExtentFromData(e, t);
                  },
                  this
                ),
                  o.af(this._axis.scale, this._axis.model);
              }
            }, this);
          }),
          (t.prototype.resize = function (t, e) {
            (this._rect = (0, a.dV)(
              {
                left: t.get("left"),
                top: t.get("top"),
                right: t.get("right"),
                bottom: t.get("bottom"),
                width: t.get("width"),
                height: t.get("height"),
              },
              { width: e.getWidth(), height: e.getHeight() }
            )),
              this._adjustAxis();
          }),
          (t.prototype.getRect = function () {
            return this._rect;
          }),
          (t.prototype._adjustAxis = function () {
            var t = this._rect,
              e = this._axis,
              n = e.isHorizontal(),
              i = n ? [0, t.width] : [0, t.height],
              r = e.inverse ? 1 : 0;
            e.setExtent(i[r], i[1 - r]),
              this._updateAxisTransform(e, n ? t.x : t.y);
          }),
          (t.prototype._updateAxisTransform = function (t, e) {
            var n = t.getExtent(),
              i = n[0] + n[1],
              r = t.isHorizontal();
            (t.toGlobalCoord = r
              ? function (t) {
                  return t + e;
                }
              : function (t) {
                  return i - t + e;
                }),
              (t.toLocalCoord = r
                ? function (t) {
                    return t - e;
                  }
                : function (t) {
                    return i - t + e;
                  });
          }),
          (t.prototype.getAxis = function () {
            return this._axis;
          }),
          (t.prototype.getBaseAxis = function () {
            return this._axis;
          }),
          (t.prototype.getAxes = function () {
            return [this._axis];
          }),
          (t.prototype.getTooltipAxes = function () {
            return { baseAxes: [this.getAxis()], otherAxes: [] };
          }),
          (t.prototype.containPoint = function (t) {
            var e = this.getRect(),
              n = this.getAxis();
            return "horizontal" === n.orient
              ? n.contain(n.toLocalCoord(t[0])) &&
                  t[1] >= e.y &&
                  t[1] <= e.y + e.height
              : n.contain(n.toLocalCoord(t[1])) &&
                  t[0] >= e.y &&
                  t[0] <= e.y + e.height;
          }),
          (t.prototype.pointToData = function (t) {
            var e = this.getAxis();
            return [
              e.coordToData(
                e.toLocalCoord(t["horizontal" === e.orient ? 0 : 1])
              ),
            ];
          }),
          (t.prototype.dataToPoint = function (t) {
            var e = this.getAxis(),
              n = this.getRect(),
              i = [],
              r = "horizontal" === e.orient ? 0 : 1;
            return (
              t instanceof Array && (t = t[0]),
              (i[r] = e.toGlobalCoord(e.dataToCoord(+t))),
              (i[1 - r] = 0 === r ? n.y + n.height / 2 : n.x + n.width / 2),
              i
            );
          }),
          (t.prototype.convertToPixel = function (t, e, n) {
            return c(e) === this ? this.dataToPoint(n) : null;
          }),
          (t.prototype.convertFromPixel = function (t, e, n) {
            return c(e) === this ? this.pointToData(n) : null;
          }),
          t
        );
      })();
      var h = n(34575);
      const d = {
        create: function (t, e) {
          var n = [];
          return (
            t.eachComponent("singleAxis", function (i, r) {
              var o = new l(i, t, e);
              (o.name = "single_" + r),
                o.resize(i, e),
                (i.coordinateSystem = o),
                n.push(o);
            }),
            t.eachSeries(function (t) {
              if ("singleAxis" === t.get("coordinateSystem")) {
                var e = t.getReferringComponents("singleAxis", h.US).models[0];
                t.coordinateSystem = e && e.coordinateSystem;
              }
            }),
            n
          );
        },
        dimensions: u,
      };
    },
    8118: (t, e, n) => {
      n.d(e, { Ay: () => c });
      var i = n(70441);
      function r(t) {
        return "_EC_" + t;
      }
      var o = (function () {
          function t(t) {
            (this.type = "graph"),
              (this.nodes = []),
              (this.edges = []),
              (this._nodesMap = {}),
              (this._edgesMap = {}),
              (this._directed = t || !1);
          }
          return (
            (t.prototype.isDirected = function () {
              return this._directed;
            }),
            (t.prototype.addNode = function (t, e) {
              t = null == t ? "" + e : "" + t;
              var n = this._nodesMap;
              if (!n[r(t)]) {
                var i = new a(t, e);
                return (
                  (i.hostGraph = this), this.nodes.push(i), (n[r(t)] = i), i
                );
              }
            }),
            (t.prototype.getNodeByIndex = function (t) {
              var e = this.data.getRawIndex(t);
              return this.nodes[e];
            }),
            (t.prototype.getNodeById = function (t) {
              return this._nodesMap[r(t)];
            }),
            (t.prototype.addEdge = function (t, e, n) {
              var o = this._nodesMap,
                u = this._edgesMap;
              if (
                (i.isNumber(t) && (t = this.nodes[t]),
                i.isNumber(e) && (e = this.nodes[e]),
                t instanceof a || (t = o[r(t)]),
                e instanceof a || (e = o[r(e)]),
                t && e)
              ) {
                var c = t.id + "-" + e.id,
                  l = new s(t, e, n);
                return (
                  (l.hostGraph = this),
                  this._directed && (t.outEdges.push(l), e.inEdges.push(l)),
                  t.edges.push(l),
                  t !== e && e.edges.push(l),
                  this.edges.push(l),
                  (u[c] = l),
                  l
                );
              }
            }),
            (t.prototype.getEdgeByIndex = function (t) {
              var e = this.edgeData.getRawIndex(t);
              return this.edges[e];
            }),
            (t.prototype.getEdge = function (t, e) {
              t instanceof a && (t = t.id), e instanceof a && (e = e.id);
              var n = this._edgesMap;
              return this._directed
                ? n[t + "-" + e]
                : n[t + "-" + e] || n[e + "-" + t];
            }),
            (t.prototype.eachNode = function (t, e) {
              for (var n = this.nodes, i = n.length, r = 0; r < i; r++)
                n[r].dataIndex >= 0 && t.call(e, n[r], r);
            }),
            (t.prototype.eachEdge = function (t, e) {
              for (var n = this.edges, i = n.length, r = 0; r < i; r++)
                n[r].dataIndex >= 0 &&
                  n[r].node1.dataIndex >= 0 &&
                  n[r].node2.dataIndex >= 0 &&
                  t.call(e, n[r], r);
            }),
            (t.prototype.breadthFirstTraverse = function (t, e, n, i) {
              if ((e instanceof a || (e = this._nodesMap[r(e)]), e)) {
                for (
                  var o =
                      "out" === n
                        ? "outEdges"
                        : "in" === n
                        ? "inEdges"
                        : "edges",
                    s = 0;
                  s < this.nodes.length;
                  s++
                )
                  this.nodes[s].__visited = !1;
                if (!t.call(i, e, null))
                  for (var u = [e]; u.length; ) {
                    var c = u.shift(),
                      l = c[o];
                    for (s = 0; s < l.length; s++) {
                      var h = l[s],
                        d = h.node1 === c ? h.node2 : h.node1;
                      if (!d.__visited) {
                        if (t.call(i, d, c)) return;
                        u.push(d), (d.__visited = !0);
                      }
                    }
                  }
              }
            }),
            (t.prototype.update = function () {
              for (
                var t = this.data,
                  e = this.edgeData,
                  n = this.nodes,
                  i = this.edges,
                  r = 0,
                  o = n.length;
                r < o;
                r++
              )
                n[r].dataIndex = -1;
              for (r = 0, o = t.count(); r < o; r++)
                n[t.getRawIndex(r)].dataIndex = r;
              e.filterSelf(function (t) {
                var n = i[e.getRawIndex(t)];
                return n.node1.dataIndex >= 0 && n.node2.dataIndex >= 0;
              });
              for (r = 0, o = i.length; r < o; r++) i[r].dataIndex = -1;
              for (r = 0, o = e.count(); r < o; r++)
                i[e.getRawIndex(r)].dataIndex = r;
            }),
            (t.prototype.clone = function () {
              for (
                var e = new t(this._directed),
                  n = this.nodes,
                  i = this.edges,
                  r = 0;
                r < n.length;
                r++
              )
                e.addNode(n[r].id, n[r].dataIndex);
              for (r = 0; r < i.length; r++) {
                var o = i[r];
                e.addEdge(o.node1.id, o.node2.id, o.dataIndex);
              }
              return e;
            }),
            t
          );
        })(),
        a = (function () {
          function t(t, e) {
            (this.inEdges = []),
              (this.outEdges = []),
              (this.edges = []),
              (this.dataIndex = -1),
              (this.id = null == t ? "" : t),
              (this.dataIndex = null == e ? -1 : e);
          }
          return (
            (t.prototype.degree = function () {
              return this.edges.length;
            }),
            (t.prototype.inDegree = function () {
              return this.inEdges.length;
            }),
            (t.prototype.outDegree = function () {
              return this.outEdges.length;
            }),
            (t.prototype.getModel = function (t) {
              if (!(this.dataIndex < 0))
                return this.hostGraph.data
                  .getItemModel(this.dataIndex)
                  .getModel(t);
            }),
            (t.prototype.getAdjacentDataIndices = function () {
              for (
                var t = { edge: [], node: [] }, e = 0;
                e < this.edges.length;
                e++
              ) {
                var n = this.edges[e];
                n.dataIndex < 0 ||
                  (t.edge.push(n.dataIndex),
                  t.node.push(n.node1.dataIndex, n.node2.dataIndex));
              }
              return t;
            }),
            (t.prototype.getTrajectoryDataIndices = function () {
              for (
                var t = i.createHashMap(), e = i.createHashMap(), n = 0;
                n < this.edges.length;
                n++
              ) {
                var r = this.edges[n];
                if (!(r.dataIndex < 0)) {
                  t.set(r.dataIndex, !0);
                  for (
                    var o = [r.node1], a = [r.node2], s = 0;
                    s < o.length;

                  ) {
                    var u = o[s];
                    s++, e.set(u.dataIndex, !0);
                    for (var c = 0; c < u.inEdges.length; c++)
                      t.set(u.inEdges[c].dataIndex, !0),
                        o.push(u.inEdges[c].node1);
                  }
                  for (s = 0; s < a.length; ) {
                    var l = a[s];
                    s++, e.set(l.dataIndex, !0);
                    for (c = 0; c < l.outEdges.length; c++)
                      t.set(l.outEdges[c].dataIndex, !0),
                        a.push(l.outEdges[c].node2);
                  }
                }
              }
              return { edge: t.keys(), node: e.keys() };
            }),
            t
          );
        })(),
        s = (function () {
          function t(t, e, n) {
            (this.dataIndex = -1),
              (this.node1 = t),
              (this.node2 = e),
              (this.dataIndex = null == n ? -1 : n);
          }
          return (
            (t.prototype.getModel = function (t) {
              if (!(this.dataIndex < 0))
                return this.hostGraph.edgeData
                  .getItemModel(this.dataIndex)
                  .getModel(t);
            }),
            (t.prototype.getAdjacentDataIndices = function () {
              return {
                edge: [this.dataIndex],
                node: [this.node1.dataIndex, this.node2.dataIndex],
              };
            }),
            (t.prototype.getTrajectoryDataIndices = function () {
              var t = i.createHashMap(),
                e = i.createHashMap();
              t.set(this.dataIndex, !0);
              for (
                var n = [this.node1], r = [this.node2], o = 0;
                o < n.length;

              ) {
                var a = n[o];
                o++, e.set(a.dataIndex, !0);
                for (var s = 0; s < a.inEdges.length; s++)
                  t.set(a.inEdges[s].dataIndex, !0), n.push(a.inEdges[s].node1);
              }
              for (o = 0; o < r.length; ) {
                var u = r[o];
                o++, e.set(u.dataIndex, !0);
                for (s = 0; s < u.outEdges.length; s++)
                  t.set(u.outEdges[s].dataIndex, !0),
                    r.push(u.outEdges[s].node2);
              }
              return { edge: t.keys(), node: e.keys() };
            }),
            t
          );
        })();
      function u(t, e) {
        return {
          getValue: function (n) {
            var i = this[t][e];
            return i
              .getStore()
              .get(i.getDimensionIndex(n || "value"), this.dataIndex);
          },
          setVisual: function (n, i) {
            this.dataIndex >= 0 &&
              this[t][e].setItemVisual(this.dataIndex, n, i);
          },
          getVisual: function (n) {
            return this[t][e].getItemVisual(this.dataIndex, n);
          },
          setLayout: function (n, i) {
            this.dataIndex >= 0 &&
              this[t][e].setItemLayout(this.dataIndex, n, i);
          },
          getLayout: function () {
            return this[t][e].getItemLayout(this.dataIndex);
          },
          getGraphicEl: function () {
            return this[t][e].getItemGraphicEl(this.dataIndex);
          },
          getRawIndex: function () {
            return this[t][e].getRawIndex(this.dataIndex);
          },
        };
      }
      i.mixin(a, u("hostGraph", "data")),
        i.mixin(s, u("hostGraph", "edgeData"));
      const c = o;
    },
    8474: (t, e, n) => {
      n.d(e, {
        Kd: () => v,
        QE: () => w,
        d1: () => d,
        sC: () => g,
        uQ: () => M,
      });
      var i,
        r,
        o,
        a,
        s,
        u = n(70441),
        c = n(34575),
        l = n(62285),
        h = n(85327),
        d = (function () {
          function t(t, e) {
            var n = (0, l.tP)(t) ? t : (0, l.AF)(t);
            this._source = n;
            var i = (this._data = n.data);
            n.sourceFormat === h.XO &&
              ((this._offset = 0), (this._dimSize = e), (this._data = i)),
              s(this, i, n);
          }
          return (
            (t.prototype.getSource = function () {
              return this._source;
            }),
            (t.prototype.count = function () {
              return 0;
            }),
            (t.prototype.getItem = function (t, e) {}),
            (t.prototype.appendData = function (t) {}),
            (t.prototype.clean = function () {}),
            (t.protoInitialize = (function () {
              var e = t.prototype;
              (e.pure = !1), (e.persistent = !0);
            })()),
            (t.internalField = (function () {
              var t;
              s = function (t, r, o) {
                var s = o.sourceFormat,
                  c = o.seriesLayoutBy,
                  l = o.startIndex,
                  d = o.dimensionsDefine,
                  p = a[A(s, c)];
                if (((0, u.extend)(t, p), s === h.XO))
                  (t.getItem = e), (t.count = i), (t.fillStorage = n);
                else {
                  var f = g(s, c);
                  t.getItem = (0, u.bind)(f, null, r, l, d);
                  var m = v(s, c);
                  t.count = (0, u.bind)(m, null, r, l, d);
                }
              };
              var e = function (t, e) {
                  (t -= this._offset), (e = e || []);
                  for (
                    var n = this._data, i = this._dimSize, r = i * t, o = 0;
                    o < i;
                    o++
                  )
                    e[o] = n[r + o];
                  return e;
                },
                n = function (t, e, n, i) {
                  for (
                    var r = this._data, o = this._dimSize, a = 0;
                    a < o;
                    a++
                  ) {
                    for (
                      var s = i[a],
                        u = null == s[0] ? 1 / 0 : s[0],
                        c = null == s[1] ? -1 / 0 : s[1],
                        l = e - t,
                        h = n[a],
                        d = 0;
                      d < l;
                      d++
                    ) {
                      var p = r[d * o + a];
                      (h[t + d] = p), p < u && (u = p), p > c && (c = p);
                    }
                    (s[0] = u), (s[1] = c);
                  }
                },
                i = function () {
                  return this._data ? this._data.length / this._dimSize : 0;
                };
              function r(t) {
                for (var e = 0; e < t.length; e++) this._data.push(t[e]);
              }
              ((t = {})[h.Km + "_" + h.i_] = { pure: !0, appendData: r }),
                (t[h.Km + "_" + h.oC] = {
                  pure: !0,
                  appendData: function () {
                    throw new Error(
                      'Do not support appendData when set seriesLayoutBy: "row".'
                    );
                  },
                }),
                (t[h.Wk] = { pure: !0, appendData: r }),
                (t[h.t1] = {
                  pure: !0,
                  appendData: function (t) {
                    var e = this._data;
                    (0, u.each)(t, function (t, n) {
                      for (
                        var i = e[n] || (e[n] = []), r = 0;
                        r < (t || []).length;
                        r++
                      )
                        i.push(t[r]);
                    });
                  },
                }),
                (t[h.mK] = { appendData: r }),
                (t[h.XO] = {
                  persistent: !1,
                  pure: !0,
                  appendData: function (t) {
                    this._data = t;
                  },
                  clean: function () {
                    (this._offset += this.count()), (this._data = null);
                  },
                }),
                (a = t);
            })()),
            t
          );
        })(),
        p = function (t, e, n, i) {
          return t[i];
        },
        f =
          (((i = {})[h.Km + "_" + h.i_] = function (t, e, n, i) {
            return t[i + e];
          }),
          (i[h.Km + "_" + h.oC] = function (t, e, n, i, r) {
            i += e;
            for (var o = r || [], a = t, s = 0; s < a.length; s++) {
              var u = a[s];
              o[s] = u ? u[i] : null;
            }
            return o;
          }),
          (i[h.Wk] = p),
          (i[h.t1] = function (t, e, n, i, r) {
            for (var o = r || [], a = 0; a < n.length; a++) {
              0;
              var s = t[n[a].name];
              o[a] = s ? s[i] : null;
            }
            return o;
          }),
          (i[h.mK] = p),
          i);
      function g(t, e) {
        return f[A(t, e)];
      }
      var m = function (t, e, n) {
          return t.length;
        },
        y =
          (((r = {})[h.Km + "_" + h.i_] = function (t, e, n) {
            return Math.max(0, t.length - e);
          }),
          (r[h.Km + "_" + h.oC] = function (t, e, n) {
            var i = t[0];
            return i ? Math.max(0, i.length - e) : 0;
          }),
          (r[h.Wk] = m),
          (r[h.t1] = function (t, e, n) {
            var i = t[n[0].name];
            return i ? i.length : 0;
          }),
          (r[h.mK] = m),
          r);
      function v(t, e) {
        return y[A(t, e)];
      }
      var _ = function (t, e, n) {
          return t[e];
        },
        x =
          (((o = {})[h.Km] = _),
          (o[h.Wk] = function (t, e, n) {
            return t[n];
          }),
          (o[h.t1] = _),
          (o[h.mK] = function (t, e, n) {
            var i = (0, c.vj)(t);
            return i instanceof Array ? i[e] : i;
          }),
          (o[h.XO] = _),
          o);
      function M(t) {
        return x[t];
      }
      function A(t, e) {
        return t === h.Km ? t + "_" + e : t;
      }
      function w(t, e, n) {
        if (t) {
          var i = t.getRawDataItem(e);
          if (null != i) {
            var r = t.getStore(),
              o = r.getSource().sourceFormat;
            if (null != n) {
              var a = t.getDimensionIndex(n),
                s = r.getDimensionProperty(a);
              return M(o)(i, a, s);
            }
            var u = i;
            return o === h.mK && (u = (0, c.vj)(i)), u;
          }
        }
      }
    },
    9831: (t, e, n) => {
      n.d(e, { Tc: () => u });
      var i = n(70441),
        r = n(40127),
        o = (function () {
          function t(t, e, n) {
            this._prepareParams(t, e, n);
          }
          return (
            (t.prototype._prepareParams = function (t, e, n) {
              n[1] < n[0] && (n = [NaN, NaN]),
                (this._dataMin = n[0]),
                (this._dataMax = n[1]);
              var o = (this._isOrdinal = "ordinal" === t.type);
              this._needCrossZero =
                "interval" === t.type &&
                e.getNeedCrossZero &&
                e.getNeedCrossZero();
              var a = e.get("min", !0);
              null == a && (a = e.get("startValue", !0));
              var s = (this._modelMinRaw = a);
              (0, i.isFunction)(s)
                ? (this._modelMinNum = c(t, s({ min: n[0], max: n[1] })))
                : "dataMin" !== s && (this._modelMinNum = c(t, s));
              var u = (this._modelMaxRaw = e.get("max", !0));
              if (
                ((0, i.isFunction)(u)
                  ? (this._modelMaxNum = c(t, u({ min: n[0], max: n[1] })))
                  : "dataMax" !== u && (this._modelMaxNum = c(t, u)),
                o)
              )
                this._axisDataLen = e.getCategories().length;
              else {
                var l = e.get("boundaryGap"),
                  h = (0, i.isArray)(l) ? l : [l || 0, l || 0];
                "boolean" === typeof h[0] || "boolean" === typeof h[1]
                  ? (this._boundaryGapInner = [0, 0])
                  : (this._boundaryGapInner = [
                      (0, r.lo)(h[0], 1),
                      (0, r.lo)(h[1], 1),
                    ]);
              }
            }),
            (t.prototype.calculate = function () {
              var t = this._isOrdinal,
                e = this._dataMin,
                n = this._dataMax,
                r = this._axisDataLen,
                o = this._boundaryGapInner,
                a = t ? null : n - e || Math.abs(e),
                s = "dataMin" === this._modelMinRaw ? e : this._modelMinNum,
                u = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum,
                c = null != s,
                l = null != u;
              null == s && (s = t ? (r ? 0 : NaN) : e - o[0] * a),
                null == u && (u = t ? (r ? r - 1 : NaN) : n + o[1] * a),
                (null == s || !isFinite(s)) && (s = NaN),
                (null == u || !isFinite(u)) && (u = NaN);
              var h = (0, i.eqNaN)(s) || (0, i.eqNaN)(u) || (t && !r);
              this._needCrossZero &&
                (s > 0 && u > 0 && !c && (s = 0),
                s < 0 && u < 0 && !l && (u = 0));
              var d = this._determinedMin,
                p = this._determinedMax;
              return (
                null != d && ((s = d), (c = !0)),
                null != p && ((u = p), (l = !0)),
                { min: s, max: u, minFixed: c, maxFixed: l, isBlank: h }
              );
            }),
            (t.prototype.modifyDataMinMax = function (t, e) {
              this[s[t]] = e;
            }),
            (t.prototype.setDeterminedMinMax = function (t, e) {
              this[a[t]] = e;
            }),
            (t.prototype.freeze = function () {
              this.frozen = !0;
            }),
            t
          );
        })(),
        a = { min: "_determinedMin", max: "_determinedMax" },
        s = { min: "_dataMin", max: "_dataMax" };
      function u(t, e, n) {
        var i = t.rawExtentInfo;
        return i || ((i = new o(t, e, n)), (t.rawExtentInfo = i), i);
      }
      function c(t, e) {
        return null == e ? null : (0, i.eqNaN)(e) ? NaN : t.parse(e);
      }
    },
    15195: (t, e, n) => {
      n.d(e, { L: () => i });
      var i = (function () {
        function t() {}
        return (
          (t.prototype.getNeedCrossZero = function () {
            return !this.option.scale;
          }),
          (t.prototype.getCoordSysModel = function () {}),
          t
        );
      })();
    },
    15901: (t, e, n) => {
      n.d(e, { U5: () => m, cn: () => g, m5: () => p, nS: () => f });
      var i = n(37292),
        r = n(13171),
        o = n(22290),
        a = n(63372),
        s = n(44156),
        u = n(70441),
        c = [];
      function l(t, e) {
        for (var n = 0; n < t.length; n++) o.applyTransform(t[n], t[n], e);
      }
      function h(t, e, n, i) {
        for (var r = 0; r < t.length; r++) {
          var a = t[r];
          i && (a = i.project(a)),
            a &&
              isFinite(a[0]) &&
              isFinite(a[1]) &&
              (o.min(e, e, a), o.max(n, n, a));
        }
      }
      var d = (function () {
          function t(t) {
            this.name = t;
          }
          return (
            (t.prototype.setCenter = function (t) {
              this._center = t;
            }),
            (t.prototype.getCenter = function () {
              var t = this._center;
              return t || (t = this._center = this.calcCenter()), t;
            }),
            t
          );
        })(),
        p = function (t, e) {
          (this.type = "polygon"), (this.exterior = t), (this.interiors = e);
        },
        f = function (t) {
          (this.type = "linestring"), (this.points = t);
        },
        g = (function (t) {
          function e(e, n, i) {
            var r = t.call(this, e) || this;
            return (
              (r.type = "geoJSON"),
              (r.geometries = n),
              (r._center = i && [i[0], i[1]]),
              r
            );
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.calcCenter = function () {
              for (
                var t, e = this.geometries, n = 0, i = 0;
                i < e.length;
                i++
              ) {
                var r = e[i],
                  o = r.exterior,
                  a = o && o.length;
                a > n && ((t = r), (n = a));
              }
              if (t)
                return (function (t) {
                  for (
                    var e = 0,
                      n = 0,
                      i = 0,
                      r = t.length,
                      o = t[r - 1][0],
                      a = t[r - 1][1],
                      s = 0;
                    s < r;
                    s++
                  ) {
                    var u = t[s][0],
                      c = t[s][1],
                      l = o * c - u * a;
                    (e += l),
                      (n += (o + u) * l),
                      (i += (a + c) * l),
                      (o = u),
                      (a = c);
                  }
                  return e
                    ? [n / e / 3, i / e / 3, e]
                    : [t[0][0] || 0, t[0][1] || 0];
                })(t.exterior);
              var s = this.getBoundingRect();
              return [s.x + s.width / 2, s.y + s.height / 2];
            }),
            (e.prototype.getBoundingRect = function (t) {
              var e = this._rect;
              if (e && !t) return e;
              var n = [1 / 0, 1 / 0],
                i = [-1 / 0, -1 / 0],
                o = this.geometries;
              return (
                (0, u.each)(o, function (e) {
                  "polygon" === e.type
                    ? h(e.exterior, n, i, t)
                    : (0, u.each)(e.points, function (e) {
                        h(e, n, i, t);
                      });
                }),
                (isFinite(n[0]) &&
                  isFinite(n[1]) &&
                  isFinite(i[0]) &&
                  isFinite(i[1])) ||
                  (n[0] = n[1] = i[0] = i[1] = 0),
                (e = new r.A(n[0], n[1], i[0] - n[0], i[1] - n[1])),
                t || (this._rect = e),
                e
              );
            }),
            (e.prototype.contain = function (t) {
              var e = this.getBoundingRect(),
                n = this.geometries;
              if (!e.contain(t[0], t[1])) return !1;
              t: for (var i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                if ("polygon" === o.type) {
                  var s = o.exterior,
                    u = o.interiors;
                  if (a.l(s, t[0], t[1])) {
                    for (var c = 0; c < (u ? u.length : 0); c++)
                      if (a.l(u[c], t[0], t[1])) continue t;
                    return !0;
                  }
                }
              }
              return !1;
            }),
            (e.prototype.transformTo = function (t, e, n, i) {
              var o = this.getBoundingRect(),
                a = o.width / o.height;
              n ? i || (i = n / a) : (n = a * i);
              for (
                var s = new r.A(t, e, n, i),
                  c = o.calculateTransform(s),
                  h = this.geometries,
                  d = 0;
                d < h.length;
                d++
              ) {
                var p = h[d];
                "polygon" === p.type
                  ? (l(p.exterior, c),
                    (0, u.each)(p.interiors, function (t) {
                      l(t, c);
                    }))
                  : (0, u.each)(p.points, function (t) {
                      l(t, c);
                    });
              }
              (o = this._rect).copy(s),
                (this._center = [o.x + o.width / 2, o.y + o.height / 2]);
            }),
            (e.prototype.cloneShallow = function (t) {
              null == t && (t = this.name);
              var n = new e(t, this.geometries, this._center);
              return (n._rect = this._rect), (n.transformTo = null), n;
            }),
            e
          );
        })(d),
        m = (function (t) {
          function e(e, n) {
            var i = t.call(this, e) || this;
            return (i.type = "geoSVG"), (i._elOnlyForCalculate = n), i;
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.calcCenter = function () {
              for (
                var t = this._elOnlyForCalculate,
                  e = t.getBoundingRect(),
                  n = [e.x + e.width / 2, e.y + e.height / 2],
                  i = s.identity(c),
                  r = t;
                r && !r.isGeoSVGGraphicRoot;

              )
                s.mul(i, r.getLocalTransform(), i), (r = r.parent);
              return s.invert(i, i), o.applyTransform(n, n, i), n;
            }),
            e
          );
        })(d);
    },
    16554: (t, e, n) => {
      n.d(e, { A: () => a });
      var i = n(70441),
        r = 0;
      function o(t) {
        return (0, i.isObject)(t) && null != t.value ? t.value : t + "";
      }
      const a = (function () {
        function t(t) {
          (this.categories = t.categories || []),
            (this._needCollect = t.needCollect),
            (this._deduplication = t.deduplication),
            (this.uid = ++r);
        }
        return (
          (t.createByAxisModel = function (e) {
            var n = e.option,
              r = n.data,
              a = r && (0, i.map)(r, o);
            return new t({
              categories: a,
              needCollect: !a,
              deduplication: !1 !== n.dedplication,
            });
          }),
          (t.prototype.getOrdinal = function (t) {
            return this._getOrCreateMap().get(t);
          }),
          (t.prototype.parseAndCollect = function (t) {
            var e,
              n = this._needCollect;
            if (!(0, i.isString)(t) && !n) return t;
            if (n && !this._deduplication)
              return (e = this.categories.length), (this.categories[e] = t), e;
            var r = this._getOrCreateMap();
            return (
              null == (e = r.get(t)) &&
                (n
                  ? ((e = this.categories.length),
                    (this.categories[e] = t),
                    r.set(t, e))
                  : (e = NaN)),
              e
            );
          }),
          (t.prototype._getOrCreateMap = function () {
            return (
              this._map || (this._map = (0, i.createHashMap)(this.categories))
            );
          }),
          t
        );
      })();
    },
    17760: (t, e, n) => {
      n.d(e, { A: () => o });
      var i = n(70441);
      function r(t, e) {
        return (
          (e = e || [0, 0]),
          i.map(
            ["Radius", "Angle"],
            function (n, i) {
              var r = this["get" + n + "Axis"](),
                o = e[i],
                a = t[i] / 2,
                s =
                  "category" === r.type
                    ? r.getBandWidth()
                    : Math.abs(r.dataToCoord(o - a) - r.dataToCoord(o + a));
              return "Angle" === n && (s = (s * Math.PI) / 180), s;
            },
            this
          )
        );
      }
      function o(t) {
        var e = t.getRadiusAxis(),
          n = t.getAngleAxis(),
          o = e.getExtent();
        return (
          o[0] > o[1] && o.reverse(),
          {
            coordSys: { type: "polar", cx: t.cx, cy: t.cy, r: o[1], r0: o[0] },
            api: {
              coord: function (i) {
                var r = e.dataToRadius(i[0]),
                  o = n.dataToAngle(i[1]),
                  a = t.coordToPoint([r, o]);
                return a.push(r, (o * Math.PI) / 180), a;
              },
              size: i.bind(r, t),
            },
          }
        );
      }
    },
    18379: (t, e, n) => {
      n.d(e, { A: () => o });
      var i = n(37292),
        r = n(70441);
      const o = (function (t) {
        function e() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (n.type = e.type), n;
        }
        return (
          (0, i.C6)(e, t),
          (e.prototype.init = function () {
            t.prototype.init.apply(this, arguments), this.mergeOption({});
          }),
          (e.prototype.mergeOption = function (t) {
            var e = this.option;
            t && r.merge(e, t, !0), this._initDimensions();
          }),
          (e.prototype.contains = function (t, e) {
            var n = t.get("parallelIndex");
            return null != n && e.getComponent("parallel", n) === this;
          }),
          (e.prototype.setAxisExpand = function (t) {
            r.each(
              [
                "axisExpandable",
                "axisExpandCenter",
                "axisExpandCount",
                "axisExpandWidth",
                "axisExpandWindow",
              ],
              function (e) {
                t.hasOwnProperty(e) && (this.option[e] = t[e]);
              },
              this
            );
          }),
          (e.prototype._initDimensions = function () {
            var t = (this.dimensions = []),
              e = (this.parallelAxisIndex = []),
              n = r.filter(
                this.ecModel.queryComponents({ mainType: "parallelAxis" }),
                function (t) {
                  return (t.get("parallelIndex") || 0) === this.componentIndex;
                },
                this
              );
            r.each(n, function (n) {
              t.push("dim" + n.get("dim")), e.push(n.componentIndex);
            });
          }),
          (e.type = "parallel"),
          (e.dependencies = ["parallelAxis"]),
          (e.layoutMode = "box"),
          (e.defaultOption = {
            z: 0,
            left: 80,
            top: 60,
            right: 80,
            bottom: 60,
            layout: "horizontal",
            axisExpandable: !1,
            axisExpandCenter: null,
            axisExpandCount: 0,
            axisExpandWidth: 50,
            axisExpandRate: 17,
            axisExpandDebounce: 50,
            axisExpandSlideTriggerArea: [-0.15, 0.05, 0.4],
            axisExpandTriggerOn: "click",
            parallelAxisDefault: null,
          }),
          e
        );
      })(n(95244).A);
    },
    18846: (t, e, n) => {
      n.d(e, { A: () => d, M: () => h });
      var i = n(85327),
        r = n(31626),
        o = n(70441),
        a = n(62285),
        s = n(58327),
        u = n(34575),
        c = n(30130),
        l = n(52509);
      function h(t, e) {
        return d(t, e).dimensions;
      }
      function d(t, e) {
        (0, a.tP)(t) || (t = (0, a.AF)(t));
        var n = (e = e || {}).coordDimensions || [],
          h = e.dimensionsDefine || t.dimensionsDefine || [],
          d = (0, o.createHashMap)(),
          f = [],
          g = (function (t, e, n, i) {
            var r = Math.max(
              t.dimensionsDetectedCount || 1,
              e.length,
              n.length,
              i || 0
            );
            return (
              (0, o.each)(e, function (t) {
                var e;
                (0, o.isObject)(t) &&
                  (e = t.dimsDef) &&
                  (r = Math.max(r, e.length));
              }),
              r
            );
          })(t, n, h, e.dimensionsCount),
          m = e.canOmitUnusedDimensions && (0, l.eS)(g),
          y = h === t.dimensionsDefine,
          v = y ? (0, l.j_)(t) : (0, l.io)(h),
          _ = e.encodeDefine;
        !_ && e.encodeDefaulter && (_ = e.encodeDefaulter(t, g));
        for (
          var x = (0, o.createHashMap)(_), M = new s.A_(g), A = 0;
          A < M.length;
          A++
        )
          M[A] = -1;
        function w(t) {
          var e = M[t];
          if (e < 0) {
            var n = h[t],
              i = (0, o.isObject)(n) ? n : { name: n },
              a = new r.A(),
              s = i.name;
            null != s && null != v.get(s) && (a.name = a.displayName = s),
              null != i.type && (a.type = i.type),
              null != i.displayName && (a.displayName = i.displayName);
            var u = f.length;
            return (M[t] = u), (a.storeDimIndex = t), f.push(a), a;
          }
          return f[e];
        }
        if (!m) for (A = 0; A < g; A++) w(A);
        x.each(function (t, e) {
          var n = (0, u.qB)(t).slice();
          if (1 === n.length && !(0, o.isString)(n[0]) && n[0] < 0)
            x.set(e, !1);
          else {
            var i = x.set(e, []);
            (0, o.each)(n, function (t, n) {
              var r = (0, o.isString)(t) ? v.get(t) : t;
              null != r && r < g && ((i[n] = r), D(w(r), e, n));
            });
          }
        });
        var I = 0;
        function D(t, e, n) {
          null != i.Pe.get(e)
            ? (t.otherDims[e] = n)
            : ((t.coordDim = e), (t.coordDimIndex = n), d.set(e, !0));
        }
        (0, o.each)(n, function (t) {
          var e, n, i, r;
          if ((0, o.isString)(t)) (e = t), (r = {});
          else {
            e = (r = t).name;
            var a = r.ordinalMeta;
            (r.ordinalMeta = null),
              ((r = (0, o.extend)({}, r)).ordinalMeta = a),
              (n = r.dimsDef),
              (i = r.otherDims),
              (r.name =
                r.coordDim =
                r.coordDimIndex =
                r.dimsDef =
                r.otherDims =
                  null);
          }
          var s = x.get(e);
          if (!1 !== s) {
            if (!(s = (0, u.qB)(s)).length)
              for (var c = 0; c < ((n && n.length) || 1); c++) {
                for (; I < g && null != w(I).coordDim; ) I++;
                I < g && s.push(I++);
              }
            (0, o.each)(s, function (t, a) {
              var s = w(t);
              if (
                (y && null != r.type && (s.type = r.type),
                D((0, o.defaults)(s, r), e, a),
                null == s.name && n)
              ) {
                var u = n[a];
                !(0, o.isObject)(u) && (u = { name: u }),
                  (s.name = s.displayName = u.name),
                  (s.defaultTooltip = u.defaultTooltip);
              }
              i && (0, o.defaults)(s.otherDims, i);
            });
          }
        });
        var S = e.generateCoord,
          T = e.generateCoordCount,
          C = null != T;
        T = S ? T || 1 : 0;
        var b = S || "value";
        function L(t) {
          null == t.name && (t.name = t.coordDim);
        }
        if (m)
          (0, o.each)(f, function (t) {
            L(t);
          }),
            f.sort(function (t, e) {
              return t.storeDimIndex - e.storeDimIndex;
            });
        else
          for (var R = 0; R < g; R++) {
            var k = w(R);
            null == k.coordDim &&
              ((k.coordDim = p(b, d, C)),
              (k.coordDimIndex = 0),
              (!S || T <= 0) && (k.isExtraCoord = !0),
              T--),
              L(k),
              null != k.type ||
                ((0, c.PU)(t, R) !== c.sc.Must &&
                  (!k.isExtraCoord ||
                    (null == k.otherDims.itemName &&
                      null == k.otherDims.seriesName))) ||
                (k.type = "ordinal");
          }
        return (
          (function (t) {
            for (var e = (0, o.createHashMap)(), n = 0; n < t.length; n++) {
              var i = t[n],
                r = i.name,
                a = e.get(r) || 0;
              a > 0 && (i.name = r + (a - 1)), a++, e.set(r, a);
            }
          })(f),
          new l.Tc({
            source: t,
            dimensions: f,
            fullDimensionCount: g,
            dimensionOmitted: m,
          })
        );
      }
      function p(t, e, n) {
        if (n || e.hasKey(t)) {
          for (var i = 0; e.hasKey(t + i); ) i++;
          t += i;
        }
        return e.set(t, !0), t;
      }
    },
    20095: (t, e, n) => {
      n.d(e, { B: () => u, l: () => a });
      var i = n(70441),
        r = n(85327),
        o = (function () {
          function t(t, e) {
            (this._encode = t), (this._schema = e);
          }
          return (
            (t.prototype.get = function () {
              return {
                fullDimensions: this._getFullDimensionNames(),
                encode: this._encode,
              };
            }),
            (t.prototype._getFullDimensionNames = function () {
              return (
                this._cachedDimNames ||
                  (this._cachedDimNames = this._schema
                    ? this._schema.makeOutputDimensionNames()
                    : []),
                this._cachedDimNames
              );
            }),
            t
          );
        })();
      function a(t, e) {
        var n = {},
          a = (n.encode = {}),
          u = (0, i.createHashMap)(),
          c = [],
          l = [],
          h = {};
        (0, i.each)(t.dimensions, function (e) {
          var n,
            i = t.getDimensionInfo(e),
            o = i.coordDim;
          if (o) {
            0;
            var d = i.coordDimIndex;
            (s(a, o)[d] = e),
              i.isExtraCoord ||
                (u.set(o, 1),
                "ordinal" !== (n = i.type) && "time" !== n && (c[0] = e),
                (s(h, o)[d] = t.getDimensionIndex(i.name))),
              i.defaultTooltip && l.push(e);
          }
          r.Pe.each(function (t, e) {
            var n = s(a, e),
              r = i.otherDims[e];
            null != r && !1 !== r && (n[r] = i.name);
          });
        });
        var d = [],
          p = {};
        u.each(function (t, e) {
          var n = a[e];
          (p[e] = n[0]), (d = d.concat(n));
        }),
          (n.dataDimsOnCoord = d),
          (n.dataDimIndicesOnCoord = (0, i.map)(d, function (e) {
            return t.getDimensionInfo(e).storeDimIndex;
          })),
          (n.encodeFirstDimNotExtra = p);
        var f = a.label;
        f && f.length && (c = f.slice());
        var g = a.tooltip;
        return (
          g && g.length ? (l = g.slice()) : l.length || (l = c.slice()),
          (a.defaultedLabel = c),
          (a.defaultedTooltip = l),
          (n.userOutput = new o(h, e)),
          n
        );
      }
      function s(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e];
      }
      function u(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
      }
    },
    20807: (t, e, n) => {
      n.d(e, { py: () => y, v5: () => m });
      var i = n(85327),
        r = n(34575),
        o = n(70441),
        a = n(8474),
        s = n(92950),
        u = n(88),
        c = n(62285),
        l = (function () {
          function t() {}
          return (
            (t.prototype.getRawData = function () {
              throw new Error("not supported");
            }),
            (t.prototype.getRawDataItem = function (t) {
              throw new Error("not supported");
            }),
            (t.prototype.cloneRawData = function () {}),
            (t.prototype.getDimensionInfo = function (t) {}),
            (t.prototype.cloneAllDimensionInfo = function () {}),
            (t.prototype.count = function () {}),
            (t.prototype.retrieveValue = function (t, e) {}),
            (t.prototype.retrieveValueFromItem = function (t, e) {}),
            (t.prototype.convertValue = function (t, e) {
              return (0, s.Pn)(t, e);
            }),
            t
          );
        })();
      function h(t) {
        if (!_(t.sourceFormat)) {
          0, (0, u.$8)("");
        }
        return t.data;
      }
      function d(t) {
        var e = t.sourceFormat,
          n = t.data;
        if (!_(e)) {
          0, (0, u.$8)("");
        }
        if (e === i.Km) {
          for (var r = [], a = 0, s = n.length; a < s; a++)
            r.push(n[a].slice());
          return r;
        }
        if (e === i.Wk) {
          for (r = [], a = 0, s = n.length; a < s; a++)
            r.push((0, o.extend)({}, n[a]));
          return r;
        }
      }
      function p(t, e, n) {
        if (null != n)
          return (0, o.isNumber)(n) || (!isNaN(n) && !(0, o.hasOwn)(e, n))
            ? t[n]
            : (0, o.hasOwn)(e, n)
            ? e[n]
            : void 0;
      }
      function f(t) {
        return (0, o.clone)(t);
      }
      var g = (0, o.createHashMap)();
      function m(t) {
        var e = (t = (0, o.clone)(t)).type;
        e || (0, u.$8)("");
        var n = e.split(":");
        2 !== n.length && (0, u.$8)("");
        var i = !1;
        "echarts" === n[0] && ((e = n[1]), (i = !0)),
          (t.__isBuiltIn = i),
          g.set(e, t);
      }
      function y(t, e, n) {
        var i = (0, r.qB)(t),
          o = i.length;
        o || (0, u.$8)("");
        for (var a = 0, s = o; a < s; a++) {
          (e = v(i[a], e, n, 1 === o ? null : a)),
            a !== s - 1 && (e.length = Math.max(e.length, 1));
        }
        return e;
      }
      function v(t, e, n, s) {
        e.length || (0, u.$8)(""), (0, o.isObject)(t) || (0, u.$8)("");
        var m = t.type,
          y = g.get(m);
        y || (0, u.$8)("");
        var v = (0, o.map)(e, function (t) {
            return (function (t, e) {
              var n = new l(),
                r = t.data,
                s = (n.sourceFormat = t.sourceFormat),
                c = t.startIndex;
              t.seriesLayoutBy !== i.i_ && (0, u.$8)("");
              var g = [],
                m = {},
                y = t.dimensionsDefine;
              if (y)
                (0, o.each)(y, function (t, e) {
                  var n = t.name,
                    i = { index: e, name: n, displayName: t.displayName };
                  g.push(i),
                    null != n &&
                      ((0, o.hasOwn)(m, n) && (0, u.$8)(""), (m[n] = i));
                });
              else
                for (var v = 0; v < t.dimensionsDetectedCount; v++)
                  g.push({ index: v });
              var _ = (0, a.sC)(s, i.i_);
              e.__isBuiltIn &&
                ((n.getRawDataItem = function (t) {
                  return _(r, c, g, t);
                }),
                (n.getRawData = (0, o.bind)(h, null, t))),
                (n.cloneRawData = (0, o.bind)(d, null, t));
              var x = (0, a.Kd)(s, i.i_);
              n.count = (0, o.bind)(x, null, r, c, g);
              var M = (0, a.uQ)(s);
              n.retrieveValue = function (t, e) {
                var n = _(r, c, g, t);
                return A(n, e);
              };
              var A = (n.retrieveValueFromItem = function (t, e) {
                if (null != t) {
                  var n = g[e];
                  return n ? M(t, e, n.name) : void 0;
                }
              });
              return (
                (n.getDimensionInfo = (0, o.bind)(p, null, g, m)),
                (n.cloneAllDimensionInfo = (0, o.bind)(f, null, g)),
                n
              );
            })(t, y);
          }),
          x = (0, r.qB)(
            y.transform({
              upstream: v[0],
              upstreamList: v,
              config: (0, o.clone)(t.config),
            })
          );
        return (0, o.map)(x, function (t, n) {
          var r;
          (0, o.isObject)(t) || (0, u.$8)(""),
            t.data || (0, u.$8)(""),
            _((0, c.wZ)(t.data)) || (0, u.$8)("");
          var a = e[0];
          if (a && 0 === n && !t.dimensions) {
            var s = a.startIndex;
            s && (t.data = a.data.slice(0, s).concat(t.data)),
              (r = {
                seriesLayoutBy: i.i_,
                sourceHeader: s,
                dimensions: a.metaRawOption.dimensions,
              });
          } else r = { seriesLayoutBy: i.i_, sourceHeader: 0, dimensions: t.dimensions };
          return (0, c.gV)(t.data, r, null);
        });
      }
      function _(t) {
        return t === i.Km || t === i.Wk;
      }
    },
    21155: (t, e, n) => {
      n.d(e, { A: () => x });
      var i = n(70441),
        r = n(37292),
        o = n(46064),
        a = (function (t) {
          function e(e, n) {
            return t.call(this, "radius", e, n) || this;
          }
          return (
            (0, r.C6)(e, t),
            (e.prototype.pointToData = function (t, e) {
              return this.polar.pointToData(t, e)[
                "radius" === this.dim ? 0 : 1
              ];
            }),
            e
          );
        })(o.A);
      (a.prototype.dataToRadius = o.A.prototype.dataToCoord),
        (a.prototype.radiusToData = o.A.prototype.coordToData);
      const s = a;
      var u = n(40127),
        c = n(34575),
        l = (0, c.$r)(),
        h = (function (t) {
          function e(e, n) {
            return t.call(this, "angle", e, n || [0, 360]) || this;
          }
          return (
            (0, r.C6)(e, t),
            (e.prototype.pointToData = function (t, e) {
              return this.polar.pointToData(t, e)[
                "radius" === this.dim ? 0 : 1
              ];
            }),
            (e.prototype.calculateCategoryInterval = function () {
              var t = this,
                e = t.getLabelModel(),
                n = t.scale,
                i = n.getExtent(),
                r = n.count();
              if (i[1] - i[0] < 1) return 0;
              var o = i[0],
                a = t.dataToCoord(o + 1) - t.dataToCoord(o),
                s = Math.abs(a),
                c = u.NO(null == o ? "" : o + "", e.getFont(), "center", "top"),
                h = Math.max(c.height, 7) / s;
              isNaN(h) && (h = 1 / 0);
              var d = Math.max(0, Math.floor(h)),
                p = l(t.model),
                f = p.lastAutoInterval,
                g = p.lastTickCount;
              return (
                null != f &&
                null != g &&
                Math.abs(f - d) <= 1 &&
                Math.abs(g - r) <= 1 &&
                f > d
                  ? (d = f)
                  : ((p.lastTickCount = r), (p.lastAutoInterval = d)),
                d
              );
            }),
            e
          );
        })(o.A);
      (h.prototype.dataToAngle = o.A.prototype.dataToCoord),
        (h.prototype.angleToData = o.A.prototype.coordToData);
      const d = h;
      var p = ["radius", "angle"];
      function f(t) {
        var e = t.seriesModel,
          n = t.polarModel;
        return (n && n.coordinateSystem) || (e && e.coordinateSystem);
      }
      const g = (function () {
        function t(t) {
          (this.dimensions = p),
            (this.type = "polar"),
            (this.cx = 0),
            (this.cy = 0),
            (this._radiusAxis = new s()),
            (this._angleAxis = new d()),
            (this.axisPointerEnabled = !0),
            (this.name = t || ""),
            (this._radiusAxis.polar = this._angleAxis.polar = this);
        }
        return (
          (t.prototype.containPoint = function (t) {
            var e = this.pointToCoord(t);
            return (
              this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
            );
          }),
          (t.prototype.containData = function (t) {
            return (
              this._radiusAxis.containData(t[0]) &&
              this._angleAxis.containData(t[1])
            );
          }),
          (t.prototype.getAxis = function (t) {
            return this["_" + t + "Axis"];
          }),
          (t.prototype.getAxes = function () {
            return [this._radiusAxis, this._angleAxis];
          }),
          (t.prototype.getAxesByScale = function (t) {
            var e = [],
              n = this._angleAxis,
              i = this._radiusAxis;
            return (
              n.scale.type === t && e.push(n),
              i.scale.type === t && e.push(i),
              e
            );
          }),
          (t.prototype.getAngleAxis = function () {
            return this._angleAxis;
          }),
          (t.prototype.getRadiusAxis = function () {
            return this._radiusAxis;
          }),
          (t.prototype.getOtherAxis = function (t) {
            var e = this._angleAxis;
            return t === e ? this._radiusAxis : e;
          }),
          (t.prototype.getBaseAxis = function () {
            return (
              this.getAxesByScale("ordinal")[0] ||
              this.getAxesByScale("time")[0] ||
              this.getAngleAxis()
            );
          }),
          (t.prototype.getTooltipAxes = function (t) {
            var e =
              null != t && "auto" !== t ? this.getAxis(t) : this.getBaseAxis();
            return { baseAxes: [e], otherAxes: [this.getOtherAxis(e)] };
          }),
          (t.prototype.dataToPoint = function (t, e) {
            return this.coordToPoint([
              this._radiusAxis.dataToRadius(t[0], e),
              this._angleAxis.dataToAngle(t[1], e),
            ]);
          }),
          (t.prototype.pointToData = function (t, e) {
            var n = this.pointToCoord(t);
            return [
              this._radiusAxis.radiusToData(n[0], e),
              this._angleAxis.angleToData(n[1], e),
            ];
          }),
          (t.prototype.pointToCoord = function (t) {
            var e = t[0] - this.cx,
              n = t[1] - this.cy,
              i = this.getAngleAxis(),
              r = i.getExtent(),
              o = Math.min(r[0], r[1]),
              a = Math.max(r[0], r[1]);
            i.inverse ? (o = a - 360) : (a = o + 360);
            var s = Math.sqrt(e * e + n * n);
            (e /= s), (n /= s);
            for (
              var u = (Math.atan2(-n, e) / Math.PI) * 180, c = u < o ? 1 : -1;
              u < o || u > a;

            )
              u += 360 * c;
            return [s, u];
          }),
          (t.prototype.coordToPoint = function (t) {
            var e = t[0],
              n = (t[1] / 180) * Math.PI;
            return [Math.cos(n) * e + this.cx, -Math.sin(n) * e + this.cy];
          }),
          (t.prototype.getArea = function () {
            var t = this.getAngleAxis(),
              e = this.getRadiusAxis().getExtent().slice();
            e[0] > e[1] && e.reverse();
            var n = t.getExtent(),
              i = Math.PI / 180,
              r = 1e-4;
            return {
              cx: this.cx,
              cy: this.cy,
              r0: e[0],
              r: e[1],
              startAngle: -n[0] * i,
              endAngle: -n[1] * i,
              clockwise: t.inverse,
              contain: function (t, e) {
                var n = t - this.cx,
                  i = e - this.cy,
                  o = n * n + i * i,
                  a = this.r,
                  s = this.r0;
                return a !== s && o - r <= a * a && o + r >= s * s;
              },
            };
          }),
          (t.prototype.convertToPixel = function (t, e, n) {
            return f(e) === this ? this.dataToPoint(n) : null;
          }),
          (t.prototype.convertFromPixel = function (t, e, n) {
            return f(e) === this ? this.pointToData(n) : null;
          }),
          t
        );
      })();
      var m = n(85941),
        y = n(88186);
      function v(t, e) {
        var n = this,
          r = n.getAngleAxis(),
          o = n.getRadiusAxis();
        if (
          (r.scale.setExtent(1 / 0, -1 / 0),
          o.scale.setExtent(1 / 0, -1 / 0),
          t.eachSeries(function (t) {
            if (t.coordinateSystem === n) {
              var e = t.getData();
              i.each((0, y.wq)(e, "radius"), function (t) {
                o.scale.unionExtentFromData(e, t);
              }),
                i.each((0, y.wq)(e, "angle"), function (t) {
                  r.scale.unionExtentFromData(e, t);
                });
            }
          }),
          (0, y.af)(r.scale, r.model),
          (0, y.af)(o.scale, o.model),
          "category" === r.type && !r.onBand)
        ) {
          var a = r.getExtent(),
            s = 360 / r.scale.count();
          r.inverse ? (a[1] += s) : (a[1] -= s), r.setExtent(a[0], a[1]);
        }
      }
      function _(t, e) {
        var n;
        if (
          ((t.type = e.get("type")),
          (t.scale = (0, y.f$)(e)),
          (t.onBand = e.get("boundaryGap") && "category" === t.type),
          (t.inverse = e.get("inverse")),
          (function (t) {
            return "angleAxis" === t.mainType;
          })(e))
        ) {
          t.inverse = t.inverse !== e.get("clockwise");
          var i = e.get("startAngle"),
            r =
              null !== (n = e.get("endAngle")) && void 0 !== n
                ? n
                : i + (t.inverse ? -360 : 360);
          t.setExtent(i, r);
        }
        (e.axis = t), (t.model = e);
      }
      const x = {
        dimensions: p,
        create: function (t, e) {
          var n = [];
          return (
            t.eachComponent("polar", function (t, r) {
              var o = new g(r + "");
              o.update = v;
              var a = o.getRadiusAxis(),
                s = o.getAngleAxis(),
                u = t.findAxisModel("radiusAxis"),
                c = t.findAxisModel("angleAxis");
              _(a, u),
                _(s, c),
                (function (t, e, n) {
                  var r = e.get("center"),
                    o = n.getWidth(),
                    a = n.getHeight();
                  (t.cx = (0, m.lo)(r[0], o)), (t.cy = (0, m.lo)(r[1], a));
                  var s = t.getRadiusAxis(),
                    u = Math.min(o, a) / 2,
                    c = e.get("radius");
                  null == c ? (c = [0, "100%"]) : i.isArray(c) || (c = [0, c]);
                  var l = [(0, m.lo)(c[0], u), (0, m.lo)(c[1], u)];
                  s.inverse ? s.setExtent(l[1], l[0]) : s.setExtent(l[0], l[1]);
                })(o, t, e),
                n.push(o),
                (t.coordinateSystem = o),
                (o.model = t);
            }),
            t.eachSeries(function (t) {
              if ("polar" === t.get("coordinateSystem")) {
                var e = t.getReferringComponents("polar", c.US).models[0];
                0, (t.coordinateSystem = e.coordinateSystem);
              }
            }),
            n
          );
        },
      };
    },
    22824: (t, e, n) => {
      n.d(e, { A: () => c });
      var i = n(70441),
        r = n(88338),
        o = n(89033),
        a = n(18846),
        s = n(34575),
        u = (function () {
          function t(t, e) {
            (this.depth = 0),
              (this.height = 0),
              (this.dataIndex = -1),
              (this.children = []),
              (this.viewChildren = []),
              (this.isExpand = !1),
              (this.name = t || ""),
              (this.hostTree = e);
          }
          return (
            (t.prototype.isRemoved = function () {
              return this.dataIndex < 0;
            }),
            (t.prototype.eachNode = function (t, e, n) {
              i.isFunction(t) && ((n = e), (e = t), (t = null)),
                (t = t || {}),
                i.isString(t) && (t = { order: t });
              var r,
                o = t.order || "preorder",
                a = this[t.attr || "children"];
              "preorder" === o && (r = e.call(n, this));
              for (var s = 0; !r && s < a.length; s++) a[s].eachNode(t, e, n);
              "postorder" === o && e.call(n, this);
            }),
            (t.prototype.updateDepthAndHeight = function (t) {
              var e = 0;
              this.depth = t;
              for (var n = 0; n < this.children.length; n++) {
                var i = this.children[n];
                i.updateDepthAndHeight(t + 1), i.height > e && (e = i.height);
              }
              this.height = e + 1;
            }),
            (t.prototype.getNodeById = function (t) {
              if (this.getId() === t) return this;
              for (var e = 0, n = this.children, i = n.length; e < i; e++) {
                var r = n[e].getNodeById(t);
                if (r) return r;
              }
            }),
            (t.prototype.contains = function (t) {
              if (t === this) return !0;
              for (var e = 0, n = this.children, i = n.length; e < i; e++) {
                var r = n[e].contains(t);
                if (r) return r;
              }
            }),
            (t.prototype.getAncestors = function (t) {
              for (var e = [], n = t ? this : this.parentNode; n; )
                e.push(n), (n = n.parentNode);
              return e.reverse(), e;
            }),
            (t.prototype.getAncestorsIndices = function () {
              for (var t = [], e = this; e; )
                t.push(e.dataIndex), (e = e.parentNode);
              return t.reverse(), t;
            }),
            (t.prototype.getDescendantIndices = function () {
              var t = [];
              return (
                this.eachNode(function (e) {
                  t.push(e.dataIndex);
                }),
                t
              );
            }),
            (t.prototype.getValue = function (t) {
              var e = this.hostTree.data;
              return e
                .getStore()
                .get(e.getDimensionIndex(t || "value"), this.dataIndex);
            }),
            (t.prototype.setLayout = function (t, e) {
              this.dataIndex >= 0 &&
                this.hostTree.data.setItemLayout(this.dataIndex, t, e);
            }),
            (t.prototype.getLayout = function () {
              return this.hostTree.data.getItemLayout(this.dataIndex);
            }),
            (t.prototype.getModel = function (t) {
              if (!(this.dataIndex < 0))
                return this.hostTree.data
                  .getItemModel(this.dataIndex)
                  .getModel(t);
            }),
            (t.prototype.getLevelModel = function () {
              return (this.hostTree.levelModels || [])[this.depth];
            }),
            (t.prototype.setVisual = function (t, e) {
              this.dataIndex >= 0 &&
                this.hostTree.data.setItemVisual(this.dataIndex, t, e);
            }),
            (t.prototype.getVisual = function (t) {
              return this.hostTree.data.getItemVisual(this.dataIndex, t);
            }),
            (t.prototype.getRawIndex = function () {
              return this.hostTree.data.getRawIndex(this.dataIndex);
            }),
            (t.prototype.getId = function () {
              return this.hostTree.data.getId(this.dataIndex);
            }),
            (t.prototype.getChildIndex = function () {
              if (this.parentNode) {
                for (var t = this.parentNode.children, e = 0; e < t.length; ++e)
                  if (t[e] === this) return e;
                return -1;
              }
              return -1;
            }),
            (t.prototype.isAncestorOf = function (t) {
              for (var e = t.parentNode; e; ) {
                if (e === this) return !0;
                e = e.parentNode;
              }
              return !1;
            }),
            (t.prototype.isDescendantOf = function (t) {
              return t !== this && t.isAncestorOf(this);
            }),
            t
          );
        })();
      const c = (function () {
        function t(t) {
          (this.type = "tree"), (this._nodes = []), (this.hostModel = t);
        }
        return (
          (t.prototype.eachNode = function (t, e, n) {
            this.root.eachNode(t, e, n);
          }),
          (t.prototype.getNodeByDataIndex = function (t) {
            var e = this.data.getRawIndex(t);
            return this._nodes[e];
          }),
          (t.prototype.getNodeById = function (t) {
            return this.root.getNodeById(t);
          }),
          (t.prototype.update = function () {
            for (
              var t = this.data, e = this._nodes, n = 0, i = e.length;
              n < i;
              n++
            )
              e[n].dataIndex = -1;
            for (n = 0, i = t.count(); n < i; n++)
              e[t.getRawIndex(n)].dataIndex = n;
          }),
          (t.prototype.clearLayouts = function () {
            this.data.clearItemLayouts();
          }),
          (t.createTree = function (e, n, c) {
            var l = new t(n),
              h = [],
              d = 1;
            !(function t(e, n) {
              var r = e.value;
              (d = Math.max(d, i.isArray(r) ? r.length : 1)), h.push(e);
              var o = new u((0, s.vS)(e.name, ""), l);
              n
                ? (function (t, e) {
                    var n = e.children;
                    if (t.parentNode === e) return;
                    n.push(t), (t.parentNode = e);
                  })(o, n)
                : (l.root = o),
                l._nodes.push(o);
              var a = e.children;
              if (a) for (var c = 0; c < a.length; c++) t(a[c], o);
            })(e),
              l.root.updateDepthAndHeight(0);
            var p = (0, a.A)(h, {
                coordDimensions: ["value"],
                dimensionsCount: d,
              }).dimensions,
              f = new o.A(p, n);
            return (
              f.initData(h),
              c && c(f),
              (0, r.A)({ mainData: f, struct: l, structAttr: "tree" }),
              l.update(),
              l
            );
          }),
          t
        );
      })();
    },
    24755: (t, e, n) => {
      n.d(e, { iJ: () => o, me: () => s, sJ: () => a });
      var i = n(70441),
        r = n(52509);
      function o(t, e, n) {
        var o,
          a,
          s,
          u = (n = n || {}).byIndex,
          c = n.stackedCoordDimension;
        !(function (t) {
          return !(0, r.fg)(t.schema);
        })(e)
          ? ((a = e.schema), (o = a.dimensions), (s = e.store))
          : (o = e);
        var l,
          h,
          d,
          p,
          f = !(!t || !t.get("stack"));
        if (
          ((0, i.each)(o, function (t, e) {
            (0, i.isString)(t) && (o[e] = t = { name: t }),
              f &&
                !t.isExtraCoord &&
                (u || l || !t.ordinalMeta || (l = t),
                h ||
                  "ordinal" === t.type ||
                  "time" === t.type ||
                  (c && c !== t.coordDim) ||
                  (h = t));
          }),
          !h || u || l || (u = !0),
          h)
        ) {
          (d = "__\0ecstackresult_" + t.id),
            (p = "__\0ecstackedover_" + t.id),
            l && (l.createInvertedIndices = !0);
          var g = h.coordDim,
            m = h.type,
            y = 0;
          (0, i.each)(o, function (t) {
            t.coordDim === g && y++;
          });
          var v = {
              name: d,
              coordDim: g,
              coordDimIndex: y,
              type: m,
              isExtraCoord: !0,
              isCalculationCoord: !0,
              storeDimIndex: o.length,
            },
            _ = {
              name: p,
              coordDim: p,
              coordDimIndex: y + 1,
              type: m,
              isExtraCoord: !0,
              isCalculationCoord: !0,
              storeDimIndex: o.length + 1,
            };
          a
            ? (s &&
                ((v.storeDimIndex = s.ensureCalculationDimension(p, m)),
                (_.storeDimIndex = s.ensureCalculationDimension(d, m))),
              a.appendCalculationDimension(v),
              a.appendCalculationDimension(_))
            : (o.push(v), o.push(_));
        }
        return {
          stackedDimension: h && h.name,
          stackedByDimension: l && l.name,
          isStackedByIndex: u,
          stackedOverDimension: p,
          stackResultDimension: d,
        };
      }
      function a(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension");
      }
      function s(t, e) {
        return a(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
      }
    },
    30130: (t, e, n) => {
      n.d(e, {
        G9: () => h,
        Gt: () => d,
        OC: () => c,
        PU: () => p,
        ln: () => l,
        ps: () => u,
        sc: () => a,
      });
      var i = n(34575),
        r = n(70441),
        o = n(85327),
        a = { Must: 1, Might: 2, Not: 3 },
        s = (0, i.$r)();
      function u(t) {
        s(t).datasetMap = (0, r.createHashMap)();
      }
      function c(t, e, n) {
        var i = {},
          o = h(e);
        if (!o || !t) return i;
        var a,
          u,
          c = [],
          l = [],
          d = e.ecModel,
          p = s(d).datasetMap,
          f = o.uid + "_" + n.seriesLayoutBy;
        (t = t.slice()),
          (0, r.each)(t, function (e, n) {
            var o = (0, r.isObject)(e) ? e : (t[n] = { name: e });
            "ordinal" === o.type && null == a && ((a = n), (u = y(o))),
              (i[o.name] = []);
          });
        var g = p.get(f) || p.set(f, { categoryWayDim: u, valueWayDim: 0 });
        function m(t, e, n) {
          for (var i = 0; i < n; i++) t.push(e + i);
        }
        function y(t) {
          var e = t.dimsDef;
          return e ? e.length : 1;
        }
        return (
          (0, r.each)(t, function (t, e) {
            var n = t.name,
              r = y(t);
            if (null == a) {
              var o = g.valueWayDim;
              m(i[n], o, r), m(l, o, r), (g.valueWayDim += r);
            } else if (a === e) m(i[n], 0, r), m(c, 0, r);
            else {
              o = g.categoryWayDim;
              m(i[n], o, r), m(l, o, r), (g.categoryWayDim += r);
            }
          }),
          c.length && (i.itemName = c),
          l.length && (i.seriesName = l),
          i
        );
      }
      function l(t, e, n) {
        var i = {};
        if (!h(t)) return i;
        var s,
          u = e.sourceFormat,
          c = e.dimensionsDefine;
        (u !== o.Wk && u !== o.t1) ||
          (0, r.each)(c, function (t, e) {
            "name" === ((0, r.isObject)(t) ? t.name : t) && (s = e);
          });
        var l = (function () {
          for (
            var t = {}, i = {}, r = [], o = 0, l = Math.min(5, n);
            o < l;
            o++
          ) {
            var h = f(e.data, u, e.seriesLayoutBy, c, e.startIndex, o);
            r.push(h);
            var d = h === a.Not;
            if (
              (d && null == t.v && o !== s && (t.v = o),
              (null == t.n || t.n === t.v || (!d && r[t.n] === a.Not)) &&
                (t.n = o),
              p(t) && r[t.n] !== a.Not)
            )
              return t;
            d ||
              (h === a.Might && null == i.v && o !== s && (i.v = o),
              (null != i.n && i.n !== i.v) || (i.n = o));
          }
          function p(t) {
            return null != t.v && null != t.n;
          }
          return p(t) ? t : p(i) ? i : null;
        })();
        if (l) {
          i.value = [l.v];
          var d = null != s ? s : l.n;
          (i.itemName = [d]), (i.seriesName = [d]);
        }
        return i;
      }
      function h(t) {
        if (!t.get("data", !0))
          return (0, i.JO)(
            t.ecModel,
            "dataset",
            { index: t.get("datasetIndex", !0), id: t.get("datasetId", !0) },
            i.US
          ).models[0];
      }
      function d(t) {
        return t.get("transform", !0) || t.get("fromTransformResult", !0)
          ? (0, i.JO)(
              t.ecModel,
              "dataset",
              {
                index: t.get("fromDatasetIndex", !0),
                id: t.get("fromDatasetId", !0),
              },
              i.US
            ).models
          : [];
      }
      function p(t, e) {
        return f(
          t.data,
          t.sourceFormat,
          t.seriesLayoutBy,
          t.dimensionsDefine,
          t.startIndex,
          e
        );
      }
      function f(t, e, n, s, u, c) {
        var l, h, d;
        if ((0, r.isTypedArray)(t)) return a.Not;
        if (s) {
          var p = s[c];
          (0, r.isObject)(p)
            ? ((h = p.name), (d = p.type))
            : (0, r.isString)(p) && (h = p);
        }
        if (null != d) return "ordinal" === d ? a.Must : a.Not;
        if (e === o.Km) {
          var f = t;
          if (n === o.oC) {
            for (var g = f[c], m = 0; m < (g || []).length && m < 5; m++)
              if (null != (l = w(g[u + m]))) return l;
          } else
            for (m = 0; m < f.length && m < 5; m++) {
              var y = f[u + m];
              if (y && null != (l = w(y[c]))) return l;
            }
        } else if (e === o.Wk) {
          var v = t;
          if (!h) return a.Not;
          for (m = 0; m < v.length && m < 5; m++) {
            if ((M = v[m]) && null != (l = w(M[h]))) return l;
          }
        } else if (e === o.t1) {
          var _ = t;
          if (!h) return a.Not;
          if (!(g = _[h]) || (0, r.isTypedArray)(g)) return a.Not;
          for (m = 0; m < g.length && m < 5; m++)
            if (null != (l = w(g[m]))) return l;
        } else if (e === o.mK) {
          var x = t;
          for (m = 0; m < x.length && m < 5; m++) {
            var M = x[m],
              A = (0, i.vj)(M);
            if (!(0, r.isArray)(A)) return a.Not;
            if (null != (l = w(A[c]))) return l;
          }
        }
        function w(t) {
          var e = (0, r.isString)(t);
          return null != t && Number.isFinite(Number(t)) && "" !== t
            ? e
              ? a.Might
              : a.Not
            : e && "-" !== t
            ? a.Must
            : void 0;
        }
        return a.Not;
      }
    },
    31626: (t, e, n) => {
      n.d(e, { A: () => r });
      var i = n(70441);
      const r = function (t) {
        (this.otherDims = {}), null != t && i.extend(this, t);
      };
    },
    33337: (t, e, n) => {
      n.d(e, { A: () => l });
      var i = n(37292),
        r = n(70441),
        o = n(95244),
        a = n(76863),
        s = n(85941),
        u = n(15195),
        c = (function (t) {
          function e() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (n.type = e.type), (n.activeIntervals = []), n;
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.getAreaSelectStyle = function () {
              return (0, a.A)([
                ["fill", "color"],
                ["lineWidth", "borderWidth"],
                ["stroke", "borderColor"],
                ["width", "width"],
                ["opacity", "opacity"],
              ])(this.getModel("areaSelectStyle"));
            }),
            (e.prototype.setActiveIntervals = function (t) {
              var e = (this.activeIntervals = r.clone(t));
              if (e) for (var n = e.length - 1; n >= 0; n--) s.Y6(e[n]);
            }),
            (e.prototype.getActiveState = function (t) {
              var e = this.activeIntervals;
              if (!e.length) return "normal";
              if (null == t || isNaN(+t)) return "inactive";
              if (1 === e.length) {
                var n = e[0];
                if (n[0] <= t && t <= n[1]) return "active";
              } else
                for (var i = 0, r = e.length; i < r; i++)
                  if (e[i][0] <= t && t <= e[i][1]) return "active";
              return "inactive";
            }),
            e
          );
        })(o.A);
      r.mixin(c, u.L);
      const l = c;
    },
    34547: (t, e, n) => {
      n.d(e, { A: () => c });
      var i = n(37292);
      const r = (function (t) {
        function e(e, n, i) {
          var r = t.call(this, e, n, i) || this;
          return (r.type = "value"), (r.angle = 0), (r.name = ""), r;
        }
        return (0, i.C6)(e, t), e;
      })(n(46064).A);
      var o = n(72183),
        a = n(85941),
        s = n(70441),
        u = n(95939);
      const c = (function () {
        function t(t, e, n) {
          (this.dimensions = []),
            (this._model = t),
            (this._indicatorAxes = (0, s.map)(
              t.getIndicatorModels(),
              function (t, e) {
                var n = "indicator_" + e,
                  i = new r(n, new o.A());
                return (
                  (i.name = t.get("name")),
                  (i.model = t),
                  (t.axis = i),
                  this.dimensions.push(n),
                  i
                );
              },
              this
            )),
            this.resize(t, n);
        }
        return (
          (t.prototype.getIndicatorAxes = function () {
            return this._indicatorAxes;
          }),
          (t.prototype.dataToPoint = function (t, e) {
            var n = this._indicatorAxes[e];
            return this.coordToPoint(n.dataToCoord(t), e);
          }),
          (t.prototype.coordToPoint = function (t, e) {
            var n = this._indicatorAxes[e].angle;
            return [this.cx + t * Math.cos(n), this.cy - t * Math.sin(n)];
          }),
          (t.prototype.pointToData = function (t) {
            var e = t[0] - this.cx,
              n = t[1] - this.cy,
              i = Math.sqrt(e * e + n * n);
            (e /= i), (n /= i);
            for (
              var r, o = Math.atan2(-n, e), a = 1 / 0, s = -1, u = 0;
              u < this._indicatorAxes.length;
              u++
            ) {
              var c = this._indicatorAxes[u],
                l = Math.abs(o - c.angle);
              l < a && ((r = c), (s = u), (a = l));
            }
            return [s, +(r && r.coordToData(i))];
          }),
          (t.prototype.resize = function (t, e) {
            var n = t.get("center"),
              i = e.getWidth(),
              r = e.getHeight(),
              o = Math.min(i, r) / 2;
            (this.cx = a.lo(n[0], i)),
              (this.cy = a.lo(n[1], r)),
              (this.startAngle = (t.get("startAngle") * Math.PI) / 180);
            var u = t.get("radius");
            ((0, s.isString)(u) || (0, s.isNumber)(u)) && (u = [0, u]),
              (this.r0 = a.lo(u[0], o)),
              (this.r = a.lo(u[1], o)),
              (0, s.each)(
                this._indicatorAxes,
                function (t, e) {
                  t.setExtent(this.r0, this.r);
                  var n =
                    this.startAngle +
                    (e * Math.PI * 2) / this._indicatorAxes.length;
                  (n = Math.atan2(Math.sin(n), Math.cos(n))), (t.angle = n);
                },
                this
              );
          }),
          (t.prototype.update = function (t, e) {
            var n = this._indicatorAxes,
              i = this._model;
            (0, s.each)(n, function (t) {
              t.scale.setExtent(1 / 0, -1 / 0);
            }),
              t.eachSeriesByType(
                "radar",
                function (e, r) {
                  if (
                    "radar" === e.get("coordinateSystem") &&
                    t.getComponent("radar", e.get("radarIndex")) === i
                  ) {
                    var o = e.getData();
                    (0, s.each)(n, function (t) {
                      t.scale.unionExtentFromData(o, o.mapDimension(t.dim));
                    });
                  }
                },
                this
              );
            var r = i.get("splitNumber"),
              a = new o.A();
            a.setExtent(0, r),
              a.setInterval(1),
              (0, s.each)(n, function (t, e) {
                (0, u.m)(t.scale, t.model, a);
              });
          }),
          (t.prototype.convertToPixel = function (t, e, n) {
            return console.warn("Not implemented."), null;
          }),
          (t.prototype.convertFromPixel = function (t, e, n) {
            return console.warn("Not implemented."), null;
          }),
          (t.prototype.containPoint = function (t) {
            return console.warn("Not implemented."), !1;
          }),
          (t.create = function (e, n) {
            var i = [];
            return (
              e.eachComponent("radar", function (r) {
                var o = new t(r, e, n);
                i.push(o), (r.coordinateSystem = o);
              }),
              e.eachSeriesByType("radar", function (t) {
                "radar" === t.get("coordinateSystem") &&
                  (t.coordinateSystem = i[t.get("radarIndex") || 0]);
              }),
              i
            );
          }),
          (t.dimensions = []),
          t
        );
      })();
    },
    41772: (t, e, n) => {
      n.d(e, { A: () => w });
      var i = n(70441),
        r = n(67730),
        o = n(88186),
        a = n(37292),
        s = n(13171);
      const u = (function () {
        function t(t) {
          (this.type = "cartesian"),
            (this._dimList = []),
            (this._axes = {}),
            (this.name = t || "");
        }
        return (
          (t.prototype.getAxis = function (t) {
            return this._axes[t];
          }),
          (t.prototype.getAxes = function () {
            return i.map(
              this._dimList,
              function (t) {
                return this._axes[t];
              },
              this
            );
          }),
          (t.prototype.getAxesByScale = function (t) {
            return (
              (t = t.toLowerCase()),
              i.filter(this.getAxes(), function (e) {
                return e.scale.type === t;
              })
            );
          }),
          (t.prototype.addAxis = function (t) {
            var e = t.dim;
            (this._axes[e] = t), this._dimList.push(e);
          }),
          t
        );
      })();
      var c = n(44156),
        l = n(22290),
        h = ["x", "y"];
      function d(t) {
        return "interval" === t.type || "time" === t.type;
      }
      const p = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.type = "cartesian2d"), (e.dimensions = h), e;
        }
        return (
          (0, a.C6)(e, t),
          (e.prototype.calcAffineTransform = function () {
            this._transform = this._invTransform = null;
            var t = this.getAxis("x").scale,
              e = this.getAxis("y").scale;
            if (d(t) && d(e)) {
              var n = t.getExtent(),
                i = e.getExtent(),
                r = this.dataToPoint([n[0], i[0]]),
                o = this.dataToPoint([n[1], i[1]]),
                a = n[1] - n[0],
                s = i[1] - i[0];
              if (a && s) {
                var u = (o[0] - r[0]) / a,
                  l = (o[1] - r[1]) / s,
                  h = r[0] - n[0] * u,
                  p = r[1] - i[0] * l,
                  f = (this._transform = [u, 0, 0, l, h, p]);
                this._invTransform = (0, c.invert)([], f);
              }
            }
          }),
          (e.prototype.getBaseAxis = function () {
            return (
              this.getAxesByScale("ordinal")[0] ||
              this.getAxesByScale("time")[0] ||
              this.getAxis("x")
            );
          }),
          (e.prototype.containPoint = function (t) {
            var e = this.getAxis("x"),
              n = this.getAxis("y");
            return (
              e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
            );
          }),
          (e.prototype.containData = function (t) {
            return (
              this.getAxis("x").containData(t[0]) &&
              this.getAxis("y").containData(t[1])
            );
          }),
          (e.prototype.containZone = function (t, e) {
            var n = this.dataToPoint(t),
              i = this.dataToPoint(e),
              r = this.getArea(),
              o = new s.A(n[0], n[1], i[0] - n[0], i[1] - n[1]);
            return r.intersect(o);
          }),
          (e.prototype.dataToPoint = function (t, e, n) {
            n = n || [];
            var i = t[0],
              r = t[1];
            if (
              this._transform &&
              null != i &&
              isFinite(i) &&
              null != r &&
              isFinite(r)
            )
              return (0, l.applyTransform)(n, t, this._transform);
            var o = this.getAxis("x"),
              a = this.getAxis("y");
            return (
              (n[0] = o.toGlobalCoord(o.dataToCoord(i, e))),
              (n[1] = a.toGlobalCoord(a.dataToCoord(r, e))),
              n
            );
          }),
          (e.prototype.clampData = function (t, e) {
            var n = this.getAxis("x").scale,
              i = this.getAxis("y").scale,
              r = n.getExtent(),
              o = i.getExtent(),
              a = n.parse(t[0]),
              s = i.parse(t[1]);
            return (
              ((e = e || [])[0] = Math.min(
                Math.max(Math.min(r[0], r[1]), a),
                Math.max(r[0], r[1])
              )),
              (e[1] = Math.min(
                Math.max(Math.min(o[0], o[1]), s),
                Math.max(o[0], o[1])
              )),
              e
            );
          }),
          (e.prototype.pointToData = function (t, e) {
            var n = [];
            if (this._invTransform)
              return (0, l.applyTransform)(n, t, this._invTransform);
            var i = this.getAxis("x"),
              r = this.getAxis("y");
            return (
              (n[0] = i.coordToData(i.toLocalCoord(t[0]), e)),
              (n[1] = r.coordToData(r.toLocalCoord(t[1]), e)),
              n
            );
          }),
          (e.prototype.getOtherAxis = function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x");
          }),
          (e.prototype.getArea = function (t) {
            t = t || 0;
            var e = this.getAxis("x").getGlobalExtent(),
              n = this.getAxis("y").getGlobalExtent(),
              i = Math.min(e[0], e[1]) - t,
              r = Math.min(n[0], n[1]) - t,
              o = Math.max(e[0], e[1]) - i + t,
              a = Math.max(n[0], n[1]) - r + t;
            return new s.A(i, r, o, a);
          }),
          e
        );
      })(u);
      const f = (function (t) {
        function e(e, n, i, r, o) {
          var a = t.call(this, e, n, i) || this;
          return (
            (a.index = 0),
            (a.type = r || "value"),
            (a.position = o || "bottom"),
            a
          );
        }
        return (
          (0, a.C6)(e, t),
          (e.prototype.isHorizontal = function () {
            var t = this.position;
            return "top" === t || "bottom" === t;
          }),
          (e.prototype.getGlobalExtent = function (t) {
            var e = this.getExtent();
            return (
              (e[0] = this.toGlobalCoord(e[0])),
              (e[1] = this.toGlobalCoord(e[1])),
              t && e[0] > e[1] && e.reverse(),
              e
            );
          }),
          (e.prototype.pointToData = function (t, e) {
            return this.coordToData(
              this.toLocalCoord(t["x" === this.dim ? 0 : 1]),
              e
            );
          }),
          (e.prototype.setCategorySortInfo = function (t) {
            if ("category" !== this.type) return !1;
            (this.model.option.categorySortInfo = t), this.scale.setSortInfo(t);
          }),
          e
        );
      })(n(46064).A);
      var g = n(34575),
        m = n(54673),
        y = n(50494),
        v = n(95939),
        _ = (function () {
          function t(t, e, n) {
            (this.type = "grid"),
              (this._coordsMap = {}),
              (this._coordsList = []),
              (this._axesMap = {}),
              (this._axesList = []),
              (this.axisPointerEnabled = !0),
              (this.dimensions = h),
              this._initCartesian(t, e, n),
              (this.model = t);
          }
          return (
            (t.prototype.getRect = function () {
              return this._rect;
            }),
            (t.prototype.update = function (t, e) {
              var n = this._axesMap;
              function r(t) {
                var e,
                  n = (0, i.keys)(t),
                  r = n.length;
                if (r) {
                  for (var a = [], s = r - 1; s >= 0; s--) {
                    var u = t[+n[s]],
                      c = u.model,
                      l = u.scale;
                    (0, y.rf)(l) &&
                    c.get("alignTicks") &&
                    null == c.get("interval")
                      ? a.push(u)
                      : ((0, o.af)(l, c), (0, y.rf)(l) && (e = u));
                  }
                  a.length &&
                    (e || ((e = a.pop()), (0, o.af)(e.scale, e.model)),
                    (0, i.each)(a, function (t) {
                      (0, v.m)(t.scale, t.model, e.scale);
                    }));
                }
              }
              this._updateScale(t, this.model), r(n.x), r(n.y);
              var a = {};
              (0, i.each)(n.x, function (t) {
                M(n, "y", t, a);
              }),
                (0, i.each)(n.y, function (t) {
                  M(n, "x", t, a);
                }),
                this.resize(this.model, e);
            }),
            (t.prototype.resize = function (t, e, n) {
              var a = t.getBoxLayoutParams(),
                s = !n && t.get("containLabel"),
                u = (0, r.dV)(a, {
                  width: e.getWidth(),
                  height: e.getHeight(),
                });
              this._rect = u;
              var c = this._axesList;
              function l() {
                (0, i.each)(c, function (t) {
                  var e = t.isHorizontal(),
                    n = e ? [0, u.width] : [0, u.height],
                    i = t.inverse ? 1 : 0;
                  t.setExtent(n[i], n[1 - i]),
                    (function (t, e) {
                      var n = t.getExtent(),
                        i = n[0] + n[1];
                      (t.toGlobalCoord =
                        "x" === t.dim
                          ? function (t) {
                              return t + e;
                            }
                          : function (t) {
                              return i - t + e;
                            }),
                        (t.toLocalCoord =
                          "x" === t.dim
                            ? function (t) {
                                return t - e;
                              }
                            : function (t) {
                                return i - t + e;
                              });
                    })(t, e ? u.x : u.y);
                });
              }
              l(),
                s &&
                  ((0, i.each)(c, function (t) {
                    if (!t.model.get(["axisLabel", "inside"])) {
                      var e = (0, o.Og)(t);
                      if (e) {
                        var n = t.isHorizontal() ? "height" : "width",
                          i = t.model.get(["axisLabel", "margin"]);
                        (u[n] -= e[n] + i),
                          "top" === t.position
                            ? (u.y += e.height + i)
                            : "left" === t.position && (u.x += e.width + i);
                      }
                    }
                  }),
                  l()),
                (0, i.each)(this._coordsList, function (t) {
                  t.calcAffineTransform();
                });
            }),
            (t.prototype.getAxis = function (t, e) {
              var n = this._axesMap[t];
              if (null != n) return n[e || 0];
            }),
            (t.prototype.getAxes = function () {
              return this._axesList.slice();
            }),
            (t.prototype.getCartesian = function (t, e) {
              if (null != t && null != e) {
                var n = "x" + t + "y" + e;
                return this._coordsMap[n];
              }
              (0, i.isObject)(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
              for (var r = 0, o = this._coordsList; r < o.length; r++)
                if (
                  o[r].getAxis("x").index === t ||
                  o[r].getAxis("y").index === e
                )
                  return o[r];
            }),
            (t.prototype.getCartesians = function () {
              return this._coordsList.slice();
            }),
            (t.prototype.convertToPixel = function (t, e, n) {
              var i = this._findConvertTarget(e);
              return i.cartesian
                ? i.cartesian.dataToPoint(n)
                : i.axis
                ? i.axis.toGlobalCoord(i.axis.dataToCoord(n))
                : null;
            }),
            (t.prototype.convertFromPixel = function (t, e, n) {
              var i = this._findConvertTarget(e);
              return i.cartesian
                ? i.cartesian.pointToData(n)
                : i.axis
                ? i.axis.coordToData(i.axis.toLocalCoord(n))
                : null;
            }),
            (t.prototype._findConvertTarget = function (t) {
              var e,
                n,
                r = t.seriesModel,
                o =
                  t.xAxisModel ||
                  (r && r.getReferringComponents("xAxis", g.US).models[0]),
                a =
                  t.yAxisModel ||
                  (r && r.getReferringComponents("yAxis", g.US).models[0]),
                s = t.gridModel,
                u = this._coordsList;
              if (r)
                (e = r.coordinateSystem),
                  (0, i.indexOf)(u, e) < 0 && (e = null);
              else if (o && a)
                e = this.getCartesian(o.componentIndex, a.componentIndex);
              else if (o) n = this.getAxis("x", o.componentIndex);
              else if (a) n = this.getAxis("y", a.componentIndex);
              else if (s) {
                s.coordinateSystem === this && (e = this._coordsList[0]);
              }
              return { cartesian: e, axis: n };
            }),
            (t.prototype.containPoint = function (t) {
              var e = this._coordsList[0];
              if (e) return e.containPoint(t);
            }),
            (t.prototype._initCartesian = function (t, e, n) {
              var r = this,
                a = this,
                s = { left: !1, right: !1, top: !1, bottom: !1 },
                u = { x: {}, y: {} },
                c = { x: 0, y: 0 };
              if (
                (e.eachComponent("xAxis", l("x"), this),
                e.eachComponent("yAxis", l("y"), this),
                !c.x || !c.y)
              )
                return (this._axesMap = {}), void (this._axesList = []);
              function l(e) {
                return function (n, i) {
                  if (x(n, t)) {
                    var r = n.get("position");
                    "x" === e
                      ? "top" !== r &&
                        "bottom" !== r &&
                        (r = s.bottom ? "top" : "bottom")
                      : "left" !== r &&
                        "right" !== r &&
                        (r = s.left ? "right" : "left"),
                      (s[r] = !0);
                    var l = new f(e, (0, o.f$)(n), [0, 0], n.get("type"), r),
                      h = "category" === l.type;
                    (l.onBand = h && n.get("boundaryGap")),
                      (l.inverse = n.get("inverse")),
                      (n.axis = l),
                      (l.model = n),
                      (l.grid = a),
                      (l.index = i),
                      a._axesList.push(l),
                      (u[e][i] = l),
                      c[e]++;
                  }
                };
              }
              (this._axesMap = u),
                (0, i.each)(u.x, function (e, n) {
                  (0, i.each)(u.y, function (i, o) {
                    var a = "x" + n + "y" + o,
                      s = new p(a);
                    (s.master = r),
                      (s.model = t),
                      (r._coordsMap[a] = s),
                      r._coordsList.push(s),
                      s.addAxis(e),
                      s.addAxis(i);
                  });
                });
            }),
            (t.prototype._updateScale = function (t, e) {
              function n(t, e) {
                (0, i.each)((0, o.wq)(t, e.dim), function (n) {
                  e.scale.unionExtentFromData(t, n);
                });
              }
              (0, i.each)(this._axesList, function (t) {
                if ((t.scale.setExtent(1 / 0, -1 / 0), "category" === t.type)) {
                  var e = t.model.get("categorySortInfo");
                  t.scale.setSortInfo(e);
                }
              }),
                t.eachSeries(function (t) {
                  if ((0, m.gO)(t)) {
                    var i = (0, m.LR)(t),
                      r = i.xAxisModel,
                      o = i.yAxisModel;
                    if (!x(r, e) || !x(o, e)) return;
                    var a = this.getCartesian(
                        r.componentIndex,
                        o.componentIndex
                      ),
                      s = t.getData(),
                      u = a.getAxis("x"),
                      c = a.getAxis("y");
                    n(s, u), n(s, c);
                  }
                }, this);
            }),
            (t.prototype.getTooltipAxes = function (t) {
              var e = [],
                n = [];
              return (
                (0, i.each)(this.getCartesians(), function (r) {
                  var o =
                      null != t && "auto" !== t
                        ? r.getAxis(t)
                        : r.getBaseAxis(),
                    a = r.getOtherAxis(o);
                  (0, i.indexOf)(e, o) < 0 && e.push(o),
                    (0, i.indexOf)(n, a) < 0 && n.push(a);
                }),
                { baseAxes: e, otherAxes: n }
              );
            }),
            (t.create = function (e, n) {
              var i = [];
              return (
                e.eachComponent("grid", function (r, o) {
                  var a = new t(r, e, n);
                  (a.name = "grid_" + o),
                    a.resize(r, n, !0),
                    (r.coordinateSystem = a),
                    i.push(a);
                }),
                e.eachSeries(function (t) {
                  if ((0, m.gO)(t)) {
                    var e = (0, m.LR)(t),
                      n = e.xAxisModel,
                      i = e.yAxisModel;
                    0;
                    var r = n.getCoordSysModel().coordinateSystem;
                    t.coordinateSystem = r.getCartesian(
                      n.componentIndex,
                      i.componentIndex
                    );
                  }
                }),
                i
              );
            }),
            (t.dimensions = h),
            t
          );
        })();
      function x(t, e) {
        return t.getCoordSysModel() === e;
      }
      function M(t, e, n, i) {
        n.getAxesOnZeroOf = function () {
          return r ? [r] : [];
        };
        var r,
          o = t[e],
          a = n.model,
          s = a.get(["axisLine", "onZero"]),
          u = a.get(["axisLine", "onZeroAxisIndex"]);
        if (s) {
          if (null != u) A(o[u]) && (r = o[u]);
          else
            for (var c in o)
              if (o.hasOwnProperty(c) && A(o[c]) && !i[l(o[c])]) {
                r = o[c];
                break;
              }
          r && (i[l(r)] = !0);
        }
        function l(t) {
          return t.dim + "_" + t.index;
        }
      }
      function A(t) {
        return t && "category" !== t.type && "time" !== t.type && (0, o.JJ)(t);
      }
      const w = _;
    },
    41876: (t, e, n) => {
      function i(t, e) {
        return t.type === e;
      }
      n.d(e, { g: () => i });
    },
    44167: (t, e, n) => {
      n.d(e, { A: () => r });
      var i = n(37292);
      const r = (function (t) {
        function e() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (n.type = e.type), n;
        }
        return (
          (0, i.C6)(e, t),
          (e.prototype.findAxisModel = function (t) {
            var e;
            return (
              this.ecModel.eachComponent(
                t,
                function (t) {
                  t.getCoordSysModel() === this && (e = t);
                },
                this
              ),
              e
            );
          }),
          (e.type = "polar"),
          (e.dependencies = ["radiusAxis", "angleAxis"]),
          (e.defaultOption = { z: 0, center: ["50%", "50%"], radius: "80%" }),
          e
        );
      })(n(95244).A);
    },
    46064: (t, e, n) => {
      n.d(e, { A: () => x });
      var i = n(70441),
        r = n(85941),
        o = n(40127),
        a = n(34575),
        s = n(88186),
        u = (0, a.$r)();
      function c(t, e) {
        var n = i.map(e, function (e) {
          return t.scale.parse(e);
        });
        return (
          "time" === t.type &&
            n.length > 0 &&
            (n.sort(), n.unshift(n[0]), n.push(n[n.length - 1])),
          n
        );
      }
      function l(t) {
        var e = t.getLabelModel().get("customValues");
        if (e) {
          var n = (0, s.ry)(t),
            r = t.scale.getExtent(),
            o = c(t, e),
            a = i.filter(o, function (t) {
              return t >= r[0] && t <= r[1];
            });
          return {
            labels: i.map(a, function (e) {
              var i = { value: e };
              return {
                formattedLabel: n(i),
                rawLabel: t.scale.getLabel(i),
                tickValue: e,
              };
            }),
          };
        }
        return "category" === t.type
          ? (function (t) {
              var e = t.getLabelModel(),
                n = d(t, e);
              return !e.get("show") || t.scale.isBlank()
                ? { labels: [], labelCategoryInterval: n.labelCategoryInterval }
                : n;
            })(t)
          : (function (t) {
              var e = t.scale.getTicks(),
                n = (0, s.ry)(t);
              return {
                labels: i.map(e, function (e, i) {
                  return {
                    level: e.level,
                    formattedLabel: n(e, i),
                    rawLabel: t.scale.getLabel(e),
                    tickValue: e.value,
                  };
                }),
              };
            })(t);
      }
      function h(t, e) {
        var n = t.getTickModel().get("customValues");
        if (n) {
          var r = t.scale.getExtent(),
            o = c(t, n);
          return {
            ticks: i.filter(o, function (t) {
              return t >= r[0] && t <= r[1];
            }),
          };
        }
        return "category" === t.type
          ? (function (t, e) {
              var n,
                r,
                o = p(t, "ticks"),
                a = (0, s.j2)(e),
                u = f(o, a);
              if (u) return u;
              (e.get("show") && !t.scale.isBlank()) || (n = []);
              if (i.isFunction(a)) n = y(t, a, !0);
              else if ("auto" === a) {
                var c = d(t, t.getLabelModel());
                (r = c.labelCategoryInterval),
                  (n = i.map(c.labels, function (t) {
                    return t.tickValue;
                  }));
              } else n = m(t, (r = a), !0);
              return g(o, a, { ticks: n, tickCategoryInterval: r });
            })(t, e)
          : {
              ticks: i.map(t.scale.getTicks(), function (t) {
                return t.value;
              }),
            };
      }
      function d(t, e) {
        var n,
          r,
          o = p(t, "labels"),
          a = (0, s.j2)(e),
          c = f(o, a);
        return (
          c ||
          (i.isFunction(a)
            ? (n = y(t, a))
            : ((r =
                "auto" === a
                  ? (function (t) {
                      var e = u(t).autoInterval;
                      return null != e
                        ? e
                        : (u(t).autoInterval = t.calculateCategoryInterval());
                    })(t)
                  : a),
              (n = m(t, r))),
          g(o, a, { labels: n, labelCategoryInterval: r }))
        );
      }
      function p(t, e) {
        return u(t)[e] || (u(t)[e] = []);
      }
      function f(t, e) {
        for (var n = 0; n < t.length; n++)
          if (t[n].key === e) return t[n].value;
      }
      function g(t, e, n) {
        return t.push({ key: e, value: n }), n;
      }
      function m(t, e, n) {
        var i = (0, s.ry)(t),
          r = t.scale,
          o = r.getExtent(),
          a = t.getLabelModel(),
          u = [],
          c = Math.max((e || 0) + 1, 1),
          l = o[0],
          h = r.count();
        0 !== l && c > 1 && h / c > 2 && (l = Math.round(Math.ceil(l / c) * c));
        var d = (0, s.PJ)(t),
          p = a.get("showMinLabel") || d,
          f = a.get("showMaxLabel") || d;
        p && l !== o[0] && m(o[0]);
        for (var g = l; g <= o[1]; g += c) m(g);
        function m(t) {
          var e = { value: t };
          u.push(
            n
              ? t
              : { formattedLabel: i(e), rawLabel: r.getLabel(e), tickValue: t }
          );
        }
        return f && g - c !== o[1] && m(o[1]), u;
      }
      function y(t, e, n) {
        var r = t.scale,
          o = (0, s.ry)(t),
          a = [];
        return (
          i.each(r.getTicks(), function (t) {
            var i = r.getLabel(t),
              s = t.value;
            e(t.value, i) &&
              a.push(
                n ? s : { formattedLabel: o(t), rawLabel: i, tickValue: s }
              );
          }),
          a
        );
      }
      var v = [0, 1];
      function _(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        (t[0] += n), (t[1] -= n);
      }
      const x = (function () {
        function t(t, e, n) {
          (this.onBand = !1),
            (this.inverse = !1),
            (this.dim = t),
            (this.scale = e),
            (this._extent = n || [0, 0]);
        }
        return (
          (t.prototype.contain = function (t) {
            var e = this._extent,
              n = Math.min(e[0], e[1]),
              i = Math.max(e[0], e[1]);
            return t >= n && t <= i;
          }),
          (t.prototype.containData = function (t) {
            return this.scale.contain(t);
          }),
          (t.prototype.getExtent = function () {
            return this._extent.slice();
          }),
          (t.prototype.getPixelPrecision = function (t) {
            return (0, r.hb)(t || this.scale.getExtent(), this._extent);
          }),
          (t.prototype.setExtent = function (t, e) {
            var n = this._extent;
            (n[0] = t), (n[1] = e);
          }),
          (t.prototype.dataToCoord = function (t, e) {
            var n = this._extent,
              i = this.scale;
            return (
              (t = i.normalize(t)),
              this.onBand &&
                "ordinal" === i.type &&
                _((n = n.slice()), i.count()),
              (0, r.Cb)(t, v, n, e)
            );
          }),
          (t.prototype.coordToData = function (t, e) {
            var n = this._extent,
              i = this.scale;
            this.onBand &&
              "ordinal" === i.type &&
              _((n = n.slice()), i.count());
            var o = (0, r.Cb)(t, n, v, e);
            return this.scale.scale(o);
          }),
          (t.prototype.pointToData = function (t, e) {}),
          (t.prototype.getTicksCoords = function (t) {
            var e = (t = t || {}).tickModel || this.getTickModel(),
              n = h(this, e).ticks,
              o = (0, i.map)(
                n,
                function (t) {
                  return {
                    coord: this.dataToCoord(
                      "ordinal" === this.scale.type
                        ? this.scale.getRawOrdinalNumber(t)
                        : t
                    ),
                    tickValue: t,
                  };
                },
                this
              );
            return (
              (function (t, e, n, o) {
                var a = e.length;
                if (!t.onBand || n || !a) return;
                var s,
                  u,
                  c = t.getExtent();
                if (1 === a)
                  (e[0].coord = c[0]),
                    (s = e[1] = { coord: c[1], tickValue: e[0].tickValue });
                else {
                  var l = e[a - 1].tickValue - e[0].tickValue,
                    h = (e[a - 1].coord - e[0].coord) / l;
                  (0, i.each)(e, function (t) {
                    t.coord -= h / 2;
                  });
                  var d = t.scale.getExtent();
                  (u = 1 + d[1] - e[a - 1].tickValue),
                    (s = {
                      coord: e[a - 1].coord + h * u,
                      tickValue: d[1] + 1,
                    }),
                    e.push(s);
                }
                var p = c[0] > c[1];
                f(e[0].coord, c[0]) && (o ? (e[0].coord = c[0]) : e.shift());
                o && f(c[0], e[0].coord) && e.unshift({ coord: c[0] });
                f(c[1], s.coord) && (o ? (s.coord = c[1]) : e.pop());
                o && f(s.coord, c[1]) && e.push({ coord: c[1] });
                function f(t, e) {
                  return (
                    (t = (0, r.LI)(t)), (e = (0, r.LI)(e)), p ? t > e : t < e
                  );
                }
              })(this, o, e.get("alignWithLabel"), t.clamp),
              o
            );
          }),
          (t.prototype.getMinorTicksCoords = function () {
            if ("ordinal" === this.scale.type) return [];
            var t = this.model.getModel("minorTick").get("splitNumber");
            (t > 0 && t < 100) || (t = 5);
            var e = this.scale.getMinorTicks(t);
            return (0, i.map)(
              e,
              function (t) {
                return (0, i.map)(
                  t,
                  function (t) {
                    return { coord: this.dataToCoord(t), tickValue: t };
                  },
                  this
                );
              },
              this
            );
          }),
          (t.prototype.getViewLabels = function () {
            return l(this).labels;
          }),
          (t.prototype.getLabelModel = function () {
            return this.model.getModel("axisLabel");
          }),
          (t.prototype.getTickModel = function () {
            return this.model.getModel("axisTick");
          }),
          (t.prototype.getBandWidth = function () {
            var t = this._extent,
              e = this.scale.getExtent(),
              n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n;
          }),
          (t.prototype.calculateCategoryInterval = function () {
            return (function (t) {
              var e = (function (t) {
                  var e = t.getLabelModel();
                  return {
                    axisRotate: t.getRotate
                      ? t.getRotate()
                      : t.isHorizontal && !t.isHorizontal()
                      ? 90
                      : 0,
                    labelRotate: e.get("rotate") || 0,
                    font: e.getFont(),
                  };
                })(t),
                n = (0, s.ry)(t),
                i = ((e.axisRotate - e.labelRotate) / 180) * Math.PI,
                r = t.scale,
                a = r.getExtent(),
                c = r.count();
              if (a[1] - a[0] < 1) return 0;
              var l = 1;
              c > 40 && (l = Math.max(1, Math.floor(c / 40)));
              for (
                var h = a[0],
                  d = t.dataToCoord(h + 1) - t.dataToCoord(h),
                  p = Math.abs(d * Math.cos(i)),
                  f = Math.abs(d * Math.sin(i)),
                  g = 0,
                  m = 0;
                h <= a[1];
                h += l
              ) {
                var y,
                  v,
                  _ = o.NO(n({ value: h }), e.font, "center", "top");
                (y = 1.3 * _.width),
                  (v = 1.3 * _.height),
                  (g = Math.max(g, y, 7)),
                  (m = Math.max(m, v, 7));
              }
              var x = g / p,
                M = m / f;
              isNaN(x) && (x = 1 / 0), isNaN(M) && (M = 1 / 0);
              var A = Math.max(0, Math.floor(Math.min(x, M))),
                w = u(t.model),
                I = t.getExtent(),
                D = w.lastAutoInterval,
                S = w.lastTickCount;
              return (
                null != D &&
                null != S &&
                Math.abs(D - A) <= 1 &&
                Math.abs(S - c) <= 1 &&
                D > A &&
                w.axisExtent0 === I[0] &&
                w.axisExtent1 === I[1]
                  ? (A = D)
                  : ((w.lastTickCount = c),
                    (w.lastAutoInterval = A),
                    (w.axisExtent0 = I[0]),
                    (w.axisExtent1 = I[1])),
                A
              );
            })(this);
          }),
          t
        );
      })();
    },
    48392: (t, e, n) => {
      n.d(e, { P: () => u });
      var i = n(37292),
        r = n(70441),
        o = n(95244),
        a = n(15195),
        s = n(34575),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.getCoordSysModel = function () {
              return this.getReferringComponents("grid", s.US).models[0];
            }),
            (e.type = "cartesian2dAxis"),
            e
          );
        })(o.A);
      r.mixin(u, a.L);
    },
    52509: (t, e, n) => {
      n.d(e, {
        Tc: () => u,
        eS: () => d,
        fg: () => c,
        io: () => l,
        j_: () => h,
      });
      var i = n(70441),
        r = n(34575),
        o = n(62285),
        a = (0, r.$r)(),
        s = { float: "f", int: "i", ordinal: "o", number: "n", time: "t" },
        u = (function () {
          function t(t) {
            (this.dimensions = t.dimensions),
              (this._dimOmitted = t.dimensionOmitted),
              (this.source = t.source),
              (this._fullDimCount = t.fullDimensionCount),
              this._updateDimOmitted(t.dimensionOmitted);
          }
          return (
            (t.prototype.isDimensionOmitted = function () {
              return this._dimOmitted;
            }),
            (t.prototype._updateDimOmitted = function (t) {
              (this._dimOmitted = t),
                t && (this._dimNameMap || (this._dimNameMap = h(this.source)));
            }),
            (t.prototype.getSourceDimensionIndex = function (t) {
              return (0, i.retrieve2)(this._dimNameMap.get(t), -1);
            }),
            (t.prototype.getSourceDimension = function (t) {
              var e = this.source.dimensionsDefine;
              if (e) return e[t];
            }),
            (t.prototype.makeStoreSchema = function () {
              for (
                var t = this._fullDimCount,
                  e = (0, o.O0)(this.source),
                  n = !d(t),
                  i = "",
                  r = [],
                  a = 0,
                  u = 0;
                a < t;
                a++
              ) {
                var c = void 0,
                  l = void 0,
                  h = void 0,
                  p = this.dimensions[u];
                if (p && p.storeDimIndex === a)
                  (c = e ? p.name : null),
                    (l = p.type),
                    (h = p.ordinalMeta),
                    u++;
                else {
                  var f = this.getSourceDimension(a);
                  f && ((c = e ? f.name : null), (l = f.type));
                }
                r.push({ property: c, type: l, ordinalMeta: h }),
                  !e ||
                    null == c ||
                    (p && p.isCalculationCoord) ||
                    (i += n ? c.replace(/\`/g, "`1").replace(/\$/g, "`2") : c),
                  (i += "$"),
                  (i += s[l] || "f"),
                  h && (i += h.uid),
                  (i += "$");
              }
              var g = this.source;
              return {
                dimensions: r,
                hash: [g.seriesLayoutBy, g.startIndex, i].join("$$"),
              };
            }),
            (t.prototype.makeOutputDimensionNames = function () {
              for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
                var i = void 0,
                  r = this.dimensions[n];
                if (r && r.storeDimIndex === e)
                  r.isCalculationCoord || (i = r.name), n++;
                else {
                  var o = this.getSourceDimension(e);
                  o && (i = o.name);
                }
                t.push(i);
              }
              return t;
            }),
            (t.prototype.appendCalculationDimension = function (t) {
              this.dimensions.push(t),
                (t.isCalculationCoord = !0),
                this._fullDimCount++,
                this._updateDimOmitted(!0);
            }),
            t
          );
        })();
      function c(t) {
        return t instanceof u;
      }
      function l(t) {
        for (var e = (0, i.createHashMap)(), n = 0; n < (t || []).length; n++) {
          var r = t[n],
            o = (0, i.isObject)(r) ? r.name : r;
          null != o && null == e.get(o) && e.set(o, n);
        }
        return e;
      }
      function h(t) {
        var e = a(t);
        return e.dimNameMap || (e.dimNameMap = l(t.dimensionsDefine));
      }
      function d(t) {
        return t > 30;
      }
    },
    53625: (t, e, n) => {
      n.d(e, { A: () => o });
      var i = n(70441);
      function r(t, e) {
        return (
          (e = e || [0, 0]),
          i.map(
            [0, 1],
            function (n) {
              var i = e[n],
                r = t[n] / 2,
                o = [],
                a = [];
              return (
                (o[n] = i - r),
                (a[n] = i + r),
                (o[1 - n] = a[1 - n] = e[1 - n]),
                Math.abs(this.dataToPoint(o)[n] - this.dataToPoint(a)[n])
              );
            },
            this
          )
        );
      }
      function o(t) {
        var e = t.getBoundingRect();
        return {
          coordSys: {
            type: "geo",
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            zoom: t.getZoom(),
          },
          api: {
            coord: function (e) {
              return t.dataToPoint(e);
            },
            size: i.bind(r, t),
          },
        };
      }
    },
    54673: (t, e, n) => {
      n.d(e, { LR: () => s, Zp: () => o, gO: () => a });
      var i = n(70441),
        r = n(34575);
      function o(t, e, n) {
        n = n || {};
        var r = t.coordinateSystem,
          o = e.axis,
          a = {},
          s = o.getAxesOnZeroOf()[0],
          u = o.position,
          c = s ? "onZero" : u,
          l = o.dim,
          h = r.getRect(),
          d = [h.x, h.x + h.width, h.y, h.y + h.height],
          p = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
          f = e.get("offset") || 0,
          g = "x" === l ? [d[2] - f, d[3] + f] : [d[0] - f, d[1] + f];
        if (s) {
          var m = s.toGlobalCoord(s.dataToCoord(0));
          g[p.onZero] = Math.max(Math.min(m, g[1]), g[0]);
        }
        (a.position = ["y" === l ? g[p[c]] : d[0], "x" === l ? g[p[c]] : d[3]]),
          (a.rotation = (Math.PI / 2) * ("x" === l ? 0 : 1));
        (a.labelDirection =
          a.tickDirection =
          a.nameDirection =
            { top: -1, bottom: 1, left: -1, right: 1 }[u]),
          (a.labelOffset = s ? g[p[u]] - g[p.onZero] : 0),
          e.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection),
          i.retrieve(n.labelInside, e.get(["axisLabel", "inside"])) &&
            (a.labelDirection = -a.labelDirection);
        var y = e.get(["axisLabel", "rotate"]);
        return (a.labelRotate = "top" === c ? -y : y), (a.z2 = 1), a;
      }
      function a(t) {
        return "cartesian2d" === t.get("coordinateSystem");
      }
      function s(t) {
        var e = { xAxisModel: null, yAxisModel: null };
        return (
          i.each(e, function (n, i) {
            var o = i.replace(/Model$/, ""),
              a = t.getReferringComponents(o, r.US).models[0];
            e[i] = a;
          }),
          e
        );
      }
    },
    55056: (t, e, n) => {
      n.d(e, { Y: () => p });
      var i = n(94665),
        r = n(76072),
        o = n(29379),
        a = n(95244),
        s = n(15230),
        u = n(70441),
        c = n(55251),
        l = n(79124),
        h = [],
        d = {
          registerPreprocessor: i.lP,
          registerProcessor: i.qg,
          registerPostInit: i.cf,
          registerPostUpdate: i.tb,
          registerUpdateLifecycle: i.xV,
          registerAction: i.OH,
          registerCoordinateSystem: i.pX,
          registerLayout: i.Oh,
          registerVisual: i.AF,
          registerTransform: i.iY,
          registerLoading: i.Ej,
          registerMap: i.mz,
          registerImpl: c.m,
          PRIORITY: i.FQ,
          ComponentModel: a.A,
          ComponentView: r.A,
          SeriesModel: s.A,
          ChartView: o.A,
          registerComponentModel: function (t) {
            a.A.registerClass(t);
          },
          registerComponentView: function (t) {
            r.A.registerClass(t);
          },
          registerSeriesModel: function (t) {
            s.A.registerClass(t);
          },
          registerChartView: function (t) {
            o.A.registerClass(t);
          },
          registerSubTypeDefaulter: function (t, e) {
            a.A.registerSubTypeDefaulter(t, e);
          },
          registerPainter: function (t, e) {
            (0, l.registerPainter)(t, e);
          },
        };
      function p(t) {
        (0, u.isArray)(t)
          ? (0, u.each)(t, function (t) {
              p(t);
            })
          : (0, u.indexOf)(h, t) >= 0 ||
            (h.push(t),
            (0, u.isFunction)(t) && (t = { install: t }),
            t.install(d));
      }
    },
    55251: (t, e, n) => {
      n.d(e, { m: () => r, v: () => o });
      var i = {};
      function r(t, e) {
        i[t] = e;
      }
      function o(t) {
        return i[t];
      }
    },
    57489: (t, e, n) => {
      n.d(e, { A: () => u });
      var i = n(37292),
        r = n(70441),
        o = n(95244),
        a = n(67730);
      function s(t, e) {
        var n,
          i = t.cellSize;
        1 === (n = r.isArray(i) ? i : (t.cellSize = [i, i])).length &&
          (n[1] = n[0]);
        var o = r.map([0, 1], function (t) {
          return (
            (0, a.Qf)(e, t) && (n[t] = "auto"), null != n[t] && "auto" !== n[t]
          );
        });
        (0, a.YA)(t, e, { type: "box", ignoreSize: o });
      }
      const u = (function (t) {
        function e() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (n.type = e.type), n;
        }
        return (
          (0, i.C6)(e, t),
          (e.prototype.init = function (e, n, i) {
            var r = (0, a.vs)(e);
            t.prototype.init.apply(this, arguments), s(e, r);
          }),
          (e.prototype.mergeOption = function (e) {
            t.prototype.mergeOption.apply(this, arguments), s(this.option, e);
          }),
          (e.prototype.getCellSize = function () {
            return this.option.cellSize;
          }),
          (e.type = "calendar"),
          (e.defaultOption = {
            z: 2,
            left: 80,
            top: 60,
            cellSize: 20,
            orient: "horizontal",
            splitLine: {
              show: !0,
              lineStyle: { color: "#000", width: 1, type: "solid" },
            },
            itemStyle: { color: "#fff", borderWidth: 1, borderColor: "#ccc" },
            dayLabel: {
              show: !0,
              firstDay: 0,
              position: "start",
              margin: "50%",
              color: "#000",
            },
            monthLabel: {
              show: !0,
              position: "start",
              margin: 5,
              align: "center",
              formatter: null,
              color: "#000",
            },
            yearLabel: {
              show: !0,
              position: null,
              margin: 30,
              formatter: null,
              color: "#ccc",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              fontSize: 20,
            },
          }),
          e
        );
      })(o.A);
    },
    57542: (t, e, n) => {
      n.d(e, { vI: () => l, w2: () => c });
      var i = n(37292),
        r = n(70441),
        o = n(95244),
        a = n(15195),
        s = n(34575),
        u = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.getCoordSysModel = function () {
              return this.getReferringComponents("polar", s.US).models[0];
            }),
            (e.type = "polarAxis"),
            e
          );
        })(o.A);
      r.mixin(u, a.L);
      var c = (function (t) {
          function e() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (n.type = e.type), n;
          }
          return (0, i.C6)(e, t), (e.type = "angleAxis"), e;
        })(u),
        l = (function (t) {
          function e() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (n.type = e.type), n;
          }
          return (0, i.C6)(e, t), (e.type = "radiusAxis"), e;
        })(u);
    },
    58327: (t, e, n) => {
      n.d(e, { A_: () => l, Ay: () => m });
      var i,
        r = n(70441),
        o = n(92950),
        a = n(62285),
        s = "undefined",
        u = typeof Uint32Array === s ? Array : Uint32Array,
        c = typeof Uint16Array === s ? Array : Uint16Array,
        l = typeof Int32Array === s ? Array : Int32Array,
        h = typeof Float64Array === s ? Array : Float64Array,
        d = { float: h, int: l, ordinal: Array, number: Array, time: h };
      function p(t) {
        return t > 65535 ? u : c;
      }
      function f(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t);
      }
      function g(t, e, n, i, r) {
        var o = d[n || "float"];
        if (r) {
          var a = t[e],
            s = a && a.length;
          if (s !== i) {
            for (var u = new o(i), c = 0; c < s; c++) u[c] = a[c];
            t[e] = u;
          }
        } else t[e] = new o(i);
      }
      const m = (function () {
        function t() {
          (this._chunks = []),
            (this._rawExtent = []),
            (this._extent = []),
            (this._count = 0),
            (this._rawCount = 0),
            (this._calcDimNameToIdx = (0, r.createHashMap)());
        }
        return (
          (t.prototype.initData = function (t, e, n) {
            (this._provider = t),
              (this._chunks = []),
              (this._indices = null),
              (this.getRawIndex = this._getRawIdxIdentity);
            var o = t.getSource(),
              s = (this.defaultDimValueGetter = i[o.sourceFormat]);
            (this._dimValueGetter = n || s), (this._rawExtent = []);
            (0, a.O0)(o);
            (this._dimensions = (0, r.map)(e, function (t) {
              return { type: t.type, property: t.property };
            })),
              this._initDataFromProvider(0, t.count());
          }),
          (t.prototype.getProvider = function () {
            return this._provider;
          }),
          (t.prototype.getSource = function () {
            return this._provider.getSource();
          }),
          (t.prototype.ensureCalculationDimension = function (t, e) {
            var n = this._calcDimNameToIdx,
              i = this._dimensions,
              r = n.get(t);
            if (null != r) {
              if (i[r].type === e) return r;
            } else r = i.length;
            return (
              (i[r] = { type: e }),
              n.set(t, r),
              (this._chunks[r] = new d[e || "float"](this._rawCount)),
              (this._rawExtent[r] = [1 / 0, -1 / 0]),
              r
            );
          }),
          (t.prototype.collectOrdinalMeta = function (t, e) {
            var n = this._chunks[t],
              i = this._dimensions[t],
              r = this._rawExtent,
              o = i.ordinalOffset || 0,
              a = n.length;
            0 === o && (r[t] = [1 / 0, -1 / 0]);
            for (var s = r[t], u = o; u < a; u++) {
              var c = (n[u] = e.parseAndCollect(n[u]));
              isNaN(c) ||
                ((s[0] = Math.min(c, s[0])), (s[1] = Math.max(c, s[1])));
            }
            (i.ordinalMeta = e), (i.ordinalOffset = a), (i.type = "ordinal");
          }),
          (t.prototype.getOrdinalMeta = function (t) {
            return this._dimensions[t].ordinalMeta;
          }),
          (t.prototype.getDimensionProperty = function (t) {
            var e = this._dimensions[t];
            return e && e.property;
          }),
          (t.prototype.appendData = function (t) {
            var e = this._provider,
              n = this.count();
            e.appendData(t);
            var i = e.count();
            return (
              e.persistent || (i += n),
              n < i && this._initDataFromProvider(n, i, !0),
              [n, i]
            );
          }),
          (t.prototype.appendValues = function (t, e) {
            for (
              var n = this._chunks,
                r = this._dimensions,
                o = r.length,
                a = this._rawExtent,
                s = this.count(),
                u = s + Math.max(t.length, e || 0),
                c = 0;
              c < o;
              c++
            ) {
              g(n, c, (f = r[c]).type, u, !0);
            }
            for (var l = [], h = s; h < u; h++)
              for (var d = h - s, p = 0; p < o; p++) {
                var f = r[p],
                  m = i.arrayRows.call(this, t[d] || l, f.property, d, p);
                n[p][h] = m;
                var y = a[p];
                m < y[0] && (y[0] = m), m > y[1] && (y[1] = m);
              }
            return (this._rawCount = this._count = u), { start: s, end: u };
          }),
          (t.prototype._initDataFromProvider = function (t, e, n) {
            for (
              var i = this._provider,
                o = this._chunks,
                a = this._dimensions,
                s = a.length,
                u = this._rawExtent,
                c = (0, r.map)(a, function (t) {
                  return t.property;
                }),
                l = 0;
              l < s;
              l++
            ) {
              var h = a[l];
              u[l] || (u[l] = [1 / 0, -1 / 0]), g(o, l, h.type, e, n);
            }
            if (i.fillStorage) i.fillStorage(t, e, o, u);
            else
              for (var d = [], p = t; p < e; p++) {
                d = i.getItem(p, d);
                for (var f = 0; f < s; f++) {
                  var m = o[f],
                    y = this._dimValueGetter(d, c[f], p, f);
                  m[p] = y;
                  var v = u[f];
                  y < v[0] && (v[0] = y), y > v[1] && (v[1] = y);
                }
              }
            !i.persistent && i.clean && i.clean(),
              (this._rawCount = this._count = e),
              (this._extent = []);
          }),
          (t.prototype.count = function () {
            return this._count;
          }),
          (t.prototype.get = function (t, e) {
            if (!(e >= 0 && e < this._count)) return NaN;
            var n = this._chunks[t];
            return n ? n[this.getRawIndex(e)] : NaN;
          }),
          (t.prototype.getValues = function (t, e) {
            var n = [],
              i = [];
            if (null == e) {
              (e = t), (t = []);
              for (var r = 0; r < this._dimensions.length; r++) i.push(r);
            } else i = t;
            r = 0;
            for (var o = i.length; r < o; r++) n.push(this.get(i[r], e));
            return n;
          }),
          (t.prototype.getByRawIndex = function (t, e) {
            if (!(e >= 0 && e < this._rawCount)) return NaN;
            var n = this._chunks[t];
            return n ? n[e] : NaN;
          }),
          (t.prototype.getSum = function (t) {
            var e = 0;
            if (this._chunks[t])
              for (var n = 0, i = this.count(); n < i; n++) {
                var r = this.get(t, n);
                isNaN(r) || (e += r);
              }
            return e;
          }),
          (t.prototype.getMedian = function (t) {
            var e = [];
            this.each([t], function (t) {
              isNaN(t) || e.push(t);
            });
            var n = e.sort(function (t, e) {
                return t - e;
              }),
              i = this.count();
            return 0 === i
              ? 0
              : i % 2 === 1
              ? n[(i - 1) / 2]
              : (n[i / 2] + n[i / 2 - 1]) / 2;
          }),
          (t.prototype.indexOfRawIndex = function (t) {
            if (t >= this._rawCount || t < 0) return -1;
            if (!this._indices) return t;
            var e = this._indices,
              n = e[t];
            if (null != n && n < this._count && n === t) return t;
            for (var i = 0, r = this._count - 1; i <= r; ) {
              var o = ((i + r) / 2) | 0;
              if (e[o] < t) i = o + 1;
              else {
                if (!(e[o] > t)) return o;
                r = o - 1;
              }
            }
            return -1;
          }),
          (t.prototype.indicesOfNearest = function (t, e, n) {
            var i = this._chunks[t],
              r = [];
            if (!i) return r;
            null == n && (n = 1 / 0);
            for (
              var o = 1 / 0, a = -1, s = 0, u = 0, c = this.count();
              u < c;
              u++
            ) {
              var l = e - i[this.getRawIndex(u)],
                h = Math.abs(l);
              h <= n &&
                ((h < o || (h === o && l >= 0 && a < 0)) &&
                  ((o = h), (a = l), (s = 0)),
                l === a && (r[s++] = u));
            }
            return (r.length = s), r;
          }),
          (t.prototype.getIndices = function () {
            var t,
              e = this._indices;
            if (e) {
              var n = e.constructor,
                i = this._count;
              if (n === Array) {
                t = new n(i);
                for (var r = 0; r < i; r++) t[r] = e[r];
              } else t = new n(e.buffer, 0, i);
            } else {
              t = new (n = p(this._rawCount))(this.count());
              for (r = 0; r < t.length; r++) t[r] = r;
            }
            return t;
          }),
          (t.prototype.filter = function (t, e) {
            if (!this._count) return this;
            for (
              var n = this.clone(),
                i = n.count(),
                r = new (p(n._rawCount))(i),
                o = [],
                a = t.length,
                s = 0,
                u = t[0],
                c = n._chunks,
                l = 0;
              l < i;
              l++
            ) {
              var h = void 0,
                d = n.getRawIndex(l);
              if (0 === a) h = e(l);
              else if (1 === a) {
                h = e(c[u][d], l);
              } else {
                for (var f = 0; f < a; f++) o[f] = c[t[f]][d];
                (o[f] = l), (h = e.apply(null, o));
              }
              h && (r[s++] = d);
            }
            return (
              s < i && (n._indices = r),
              (n._count = s),
              (n._extent = []),
              n._updateGetRawIdx(),
              n
            );
          }),
          (t.prototype.selectRange = function (t) {
            var e = this.clone(),
              n = e._count;
            if (!n) return this;
            var i = (0, r.keys)(t),
              o = i.length;
            if (!o) return this;
            var a = e.count(),
              s = new (p(e._rawCount))(a),
              u = 0,
              c = i[0],
              l = t[c][0],
              h = t[c][1],
              d = e._chunks,
              f = !1;
            if (!e._indices) {
              var g = 0;
              if (1 === o) {
                for (var m = d[i[0]], y = 0; y < n; y++) {
                  (((M = m[y]) >= l && M <= h) || isNaN(M)) && (s[u++] = g),
                    g++;
                }
                f = !0;
              } else if (2 === o) {
                m = d[i[0]];
                var v = d[i[1]],
                  _ = t[i[1]][0],
                  x = t[i[1]][1];
                for (y = 0; y < n; y++) {
                  var M = m[y],
                    A = v[y];
                  ((M >= l && M <= h) || isNaN(M)) &&
                    ((A >= _ && A <= x) || isNaN(A)) &&
                    (s[u++] = g),
                    g++;
                }
                f = !0;
              }
            }
            if (!f)
              if (1 === o)
                for (y = 0; y < a; y++) {
                  var w = e.getRawIndex(y);
                  (((M = d[i[0]][w]) >= l && M <= h) || isNaN(M)) &&
                    (s[u++] = w);
                }
              else
                for (y = 0; y < a; y++) {
                  for (
                    var I = !0, D = ((w = e.getRawIndex(y)), 0);
                    D < o;
                    D++
                  ) {
                    var S = i[D];
                    ((M = d[S][w]) < t[S][0] || M > t[S][1]) && (I = !1);
                  }
                  I && (s[u++] = e.getRawIndex(y));
                }
            return (
              u < a && (e._indices = s),
              (e._count = u),
              (e._extent = []),
              e._updateGetRawIdx(),
              e
            );
          }),
          (t.prototype.map = function (t, e) {
            var n = this.clone(t);
            return this._updateDims(n, t, e), n;
          }),
          (t.prototype.modify = function (t, e) {
            this._updateDims(this, t, e);
          }),
          (t.prototype._updateDims = function (t, e, n) {
            for (
              var i = t._chunks,
                r = [],
                o = e.length,
                a = t.count(),
                s = [],
                u = t._rawExtent,
                c = 0;
              c < e.length;
              c++
            )
              u[e[c]] = [1 / 0, -1 / 0];
            for (var l = 0; l < a; l++) {
              for (var h = t.getRawIndex(l), d = 0; d < o; d++)
                s[d] = i[e[d]][h];
              s[o] = l;
              var p = n && n.apply(null, s);
              if (null != p) {
                "object" !== typeof p && ((r[0] = p), (p = r));
                for (c = 0; c < p.length; c++) {
                  var f = e[c],
                    g = p[c],
                    m = u[f],
                    y = i[f];
                  y && (y[h] = g),
                    g < m[0] && (m[0] = g),
                    g > m[1] && (m[1] = g);
                }
              }
            }
          }),
          (t.prototype.lttbDownSample = function (t, e) {
            var n,
              i,
              r,
              o = this.clone([t], !0),
              a = o._chunks[t],
              s = this.count(),
              u = 0,
              c = Math.floor(1 / e),
              l = this.getRawIndex(0),
              h = new (p(this._rawCount))(
                Math.min(2 * (Math.ceil(s / c) + 2), s)
              );
            h[u++] = l;
            for (var d = 1; d < s - 1; d += c) {
              for (
                var f = Math.min(d + c, s - 1),
                  g = Math.min(d + 2 * c, s),
                  m = (g + f) / 2,
                  y = 0,
                  v = f;
                v < g;
                v++
              ) {
                var _ = a[(S = this.getRawIndex(v))];
                isNaN(_) || (y += _);
              }
              y /= g - f;
              var x = d,
                M = Math.min(d + c, s),
                A = d - 1,
                w = a[l];
              (n = -1), (r = x);
              var I = -1,
                D = 0;
              for (v = x; v < M; v++) {
                var S;
                _ = a[(S = this.getRawIndex(v))];
                isNaN(_)
                  ? (D++, I < 0 && (I = S))
                  : (i = Math.abs((A - m) * (_ - w) - (A - v) * (y - w))) > n &&
                    ((n = i), (r = S));
              }
              D > 0 &&
                D < M - x &&
                ((h[u++] = Math.min(I, r)), (r = Math.max(I, r))),
                (h[u++] = r),
                (l = r);
            }
            return (
              (h[u++] = this.getRawIndex(s - 1)),
              (o._count = u),
              (o._indices = h),
              (o.getRawIndex = this._getRawIdx),
              o
            );
          }),
          (t.prototype.minmaxDownSample = function (t, e) {
            for (
              var n = this.clone([t], !0),
                i = n._chunks,
                r = Math.floor(1 / e),
                o = i[t],
                a = this.count(),
                s = new (p(this._rawCount))(2 * Math.ceil(a / r)),
                u = 0,
                c = 0;
              c < a;
              c += r
            ) {
              var l = c,
                h = o[this.getRawIndex(l)],
                d = c,
                f = o[this.getRawIndex(d)],
                g = r;
              c + r > a && (g = a - c);
              for (var m = 0; m < g; m++) {
                var y = o[this.getRawIndex(c + m)];
                y < h && ((h = y), (l = c + m)),
                  y > f && ((f = y), (d = c + m));
              }
              var v = this.getRawIndex(l),
                _ = this.getRawIndex(d);
              l < d
                ? ((s[u++] = v), (s[u++] = _))
                : ((s[u++] = _), (s[u++] = v));
            }
            return (n._count = u), (n._indices = s), n._updateGetRawIdx(), n;
          }),
          (t.prototype.downSample = function (t, e, n, i) {
            for (
              var r = this.clone([t], !0),
                o = r._chunks,
                a = [],
                s = Math.floor(1 / e),
                u = o[t],
                c = this.count(),
                l = (r._rawExtent[t] = [1 / 0, -1 / 0]),
                h = new (p(this._rawCount))(Math.ceil(c / s)),
                d = 0,
                f = 0;
              f < c;
              f += s
            ) {
              s > c - f && ((s = c - f), (a.length = s));
              for (var g = 0; g < s; g++) {
                var m = this.getRawIndex(f + g);
                a[g] = u[m];
              }
              var y = n(a),
                v = this.getRawIndex(Math.min(f + i(a, y) || 0, c - 1));
              (u[v] = y),
                y < l[0] && (l[0] = y),
                y > l[1] && (l[1] = y),
                (h[d++] = v);
            }
            return (r._count = d), (r._indices = h), r._updateGetRawIdx(), r;
          }),
          (t.prototype.each = function (t, e) {
            if (this._count)
              for (
                var n = t.length, i = this._chunks, r = 0, o = this.count();
                r < o;
                r++
              ) {
                var a = this.getRawIndex(r);
                switch (n) {
                  case 0:
                    e(r);
                    break;
                  case 1:
                    e(i[t[0]][a], r);
                    break;
                  case 2:
                    e(i[t[0]][a], i[t[1]][a], r);
                    break;
                  default:
                    for (var s = 0, u = []; s < n; s++) u[s] = i[t[s]][a];
                    (u[s] = r), e.apply(null, u);
                }
              }
          }),
          (t.prototype.getDataExtent = function (t) {
            var e = this._chunks[t],
              n = [1 / 0, -1 / 0];
            if (!e) return n;
            var i,
              r = this.count();
            if (!this._indices) return this._rawExtent[t].slice();
            if ((i = this._extent[t])) return i.slice();
            for (var o = (i = n)[0], a = i[1], s = 0; s < r; s++) {
              var u = e[this.getRawIndex(s)];
              u < o && (o = u), u > a && (a = u);
            }
            return (i = [o, a]), (this._extent[t] = i), i;
          }),
          (t.prototype.getRawDataItem = function (t) {
            var e = this.getRawIndex(t);
            if (this._provider.persistent) return this._provider.getItem(e);
            for (var n = [], i = this._chunks, r = 0; r < i.length; r++)
              n.push(i[r][e]);
            return n;
          }),
          (t.prototype.clone = function (e, n) {
            var i = new t(),
              o = this._chunks,
              a =
                e &&
                (0, r.reduce)(
                  e,
                  function (t, e) {
                    return (t[e] = !0), t;
                  },
                  {}
                );
            if (a)
              for (var s = 0; s < o.length; s++)
                i._chunks[s] = a[s] ? f(o[s]) : o[s];
            else i._chunks = o;
            return (
              this._copyCommonProps(i),
              n || (i._indices = this._cloneIndices()),
              i._updateGetRawIdx(),
              i
            );
          }),
          (t.prototype._copyCommonProps = function (t) {
            (t._count = this._count),
              (t._rawCount = this._rawCount),
              (t._provider = this._provider),
              (t._dimensions = this._dimensions),
              (t._extent = (0, r.clone)(this._extent)),
              (t._rawExtent = (0, r.clone)(this._rawExtent));
          }),
          (t.prototype._cloneIndices = function () {
            if (this._indices) {
              var t = this._indices.constructor,
                e = void 0;
              if (t === Array) {
                var n = this._indices.length;
                e = new t(n);
                for (var i = 0; i < n; i++) e[i] = this._indices[i];
              } else e = new t(this._indices);
              return e;
            }
            return null;
          }),
          (t.prototype._getRawIdxIdentity = function (t) {
            return t;
          }),
          (t.prototype._getRawIdx = function (t) {
            return t < this._count && t >= 0 ? this._indices[t] : -1;
          }),
          (t.prototype._updateGetRawIdx = function () {
            this.getRawIndex = this._indices
              ? this._getRawIdx
              : this._getRawIdxIdentity;
          }),
          (t.internalField = (function () {
            function t(t, e, n, i) {
              return (0, o.Pn)(t[i], this._dimensions[i]);
            }
            i = {
              arrayRows: t,
              objectRows: function (t, e, n, i) {
                return (0, o.Pn)(t[e], this._dimensions[i]);
              },
              keyedColumns: t,
              original: function (t, e, n, i) {
                var r = t && (null == t.value ? t : t.value);
                return (0, o.Pn)(
                  r instanceof Array ? r[i] : r,
                  this._dimensions[i]
                );
              },
              typedArray: function (t, e, n, i) {
                return t[i];
              },
            };
          })()),
          t
        );
      })();
    },
    58837: (t, e, n) => {
      n.d(e, { A: () => s });
      var i = n(70441),
        r = {
          show: !0,
          z: 0,
          inverse: !1,
          name: "",
          nameLocation: "end",
          nameRotate: null,
          nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
          nameTextStyle: {},
          nameGap: 15,
          silent: !1,
          triggerEvent: !1,
          tooltip: { show: !1 },
          axisPointer: {},
          axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: { color: "#6E7079", width: 1, type: "solid" },
            symbol: ["none", "none"],
            symbolSize: [10, 15],
          },
          axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: { width: 1 },
          },
          axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12,
          },
          splitLine: {
            show: !0,
            showMinLine: !0,
            showMaxLine: !0,
            lineStyle: { color: ["#E0E6F1"], width: 1, type: "solid" },
          },
          splitArea: {
            show: !1,
            areaStyle: {
              color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"],
            },
          },
        },
        o = i.merge(
          {
            boundaryGap: !0,
            deduplication: null,
            splitLine: { show: !1 },
            axisTick: { alignWithLabel: !1, interval: "auto" },
            axisLabel: { interval: "auto" },
          },
          r
        ),
        a = i.merge(
          {
            boundaryGap: [0, 0],
            axisLine: { show: "auto" },
            axisTick: { show: "auto" },
            splitNumber: 5,
            minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
            minorSplitLine: {
              show: !1,
              lineStyle: { color: "#F4F7FD", width: 1 },
            },
          },
          r
        );
      const s = {
        category: o,
        value: a,
        time: i.merge(
          {
            splitNumber: 6,
            axisLabel: {
              showMinLabel: !1,
              showMaxLabel: !1,
              rich: { primary: { fontWeight: "bold" } },
            },
            splitLine: { show: !1 },
          },
          a
        ),
        log: i.defaults({ logBase: 10 }, a),
      };
    },
    61208: (t, e, n) => {
      n.d(e, { A: () => c });
      var i = n(37292),
        r = n(58837),
        o = n(67730),
        a = n(16554),
        s = { value: 1, category: 1, time: 1, log: 1 },
        u = n(70441);
      function c(t, e, n, c) {
        (0, u.each)(s, function (s, h) {
          var d = (0, u.merge)((0, u.merge)({}, r.A[h], !0), c, !0),
            p = (function (t) {
              function n() {
                var n = (null !== t && t.apply(this, arguments)) || this;
                return (n.type = e + "Axis." + h), n;
              }
              return (
                (0, i.C6)(n, t),
                (n.prototype.mergeDefaultAndTheme = function (t, e) {
                  var n = (0, o.ad)(this),
                    i = n ? (0, o.vs)(t) : {},
                    r = e.getTheme();
                  (0, u.merge)(t, r.get(h + "Axis")),
                    (0, u.merge)(t, this.getDefaultOption()),
                    (t.type = l(t)),
                    n && (0, o.YA)(t, i, n);
                }),
                (n.prototype.optionUpdated = function () {
                  "category" === this.option.type &&
                    (this.__ordinalMeta = a.A.createByAxisModel(this));
                }),
                (n.prototype.getCategories = function (t) {
                  var e = this.option;
                  if ("category" === e.type)
                    return t ? e.data : this.__ordinalMeta.categories;
                }),
                (n.prototype.getOrdinalMeta = function () {
                  return this.__ordinalMeta;
                }),
                (n.type = e + "Axis." + h),
                (n.defaultOption = d),
                n
              );
            })(n);
          t.registerComponentModel(p);
        }),
          t.registerSubTypeDefaulter(e + "Axis", l);
      }
      function l(t) {
        return t.type || (t.data ? "category" : "value");
      }
    },
    62285: (t, e, n) => {
      n.d(e, {
        AF: () => l,
        BE: () => h,
        O0: () => g,
        gV: () => c,
        tP: () => u,
        wZ: () => d,
      });
      var i = n(70441),
        r = n(85327),
        o = n(34575),
        a = n(30130),
        s = function (t) {
          (this.data = t.data || (t.sourceFormat === r.t1 ? {} : [])),
            (this.sourceFormat = t.sourceFormat || r.vm),
            (this.seriesLayoutBy = t.seriesLayoutBy || r.i_),
            (this.startIndex = t.startIndex || 0),
            (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
            (this.metaRawOption = t.metaRawOption);
          var e = (this.dimensionsDefine = t.dimensionsDefine);
          if (e)
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              null == i.type &&
                (0, a.PU)(this, n) === a.sc.Must &&
                (i.type = "ordinal");
            }
        };
      function u(t) {
        return t instanceof s;
      }
      function c(t, e, n) {
        n = n || d(t);
        var a = e.seriesLayoutBy,
          u = (function (t, e, n, a, s) {
            var u, c;
            if (!t)
              return {
                dimensionsDefine: p(s),
                startIndex: c,
                dimensionsDetectedCount: u,
              };
            if (e === r.Km) {
              var l = t;
              "auto" === a || null == a
                ? f(
                    function (t) {
                      null != t &&
                        "-" !== t &&
                        ((0, i.isString)(t) ? null == c && (c = 1) : (c = 0));
                    },
                    n,
                    l,
                    10
                  )
                : (c = (0, i.isNumber)(a) ? a : a ? 1 : 0),
                s ||
                  1 !== c ||
                  ((s = []),
                  f(
                    function (t, e) {
                      s[e] = null != t ? t + "" : "";
                    },
                    n,
                    l,
                    1 / 0
                  )),
                (u = s
                  ? s.length
                  : n === r.oC
                  ? l.length
                  : l[0]
                  ? l[0].length
                  : null);
            } else if (e === r.Wk)
              s ||
                (s = (function (t) {
                  var e,
                    n = 0;
                  for (; n < t.length && !(e = t[n++]); );
                  if (e) return (0, i.keys)(e);
                })(t));
            else if (e === r.t1)
              s ||
                ((s = []),
                (0, i.each)(t, function (t, e) {
                  s.push(e);
                }));
            else if (e === r.mK) {
              var h = (0, o.vj)(t[0]);
              u = ((0, i.isArray)(h) && h.length) || 1;
            } else r.XO;
            return {
              startIndex: c,
              dimensionsDefine: p(s),
              dimensionsDetectedCount: u,
            };
          })(t, n, a, e.sourceHeader, e.dimensions);
        return new s({
          data: t,
          sourceFormat: n,
          seriesLayoutBy: a,
          dimensionsDefine: u.dimensionsDefine,
          startIndex: u.startIndex,
          dimensionsDetectedCount: u.dimensionsDetectedCount,
          metaRawOption: (0, i.clone)(e),
        });
      }
      function l(t) {
        return new s({
          data: t,
          sourceFormat: (0, i.isTypedArray)(t) ? r.XO : r.mK,
        });
      }
      function h(t) {
        return new s({
          data: t.data,
          sourceFormat: t.sourceFormat,
          seriesLayoutBy: t.seriesLayoutBy,
          dimensionsDefine: (0, i.clone)(t.dimensionsDefine),
          startIndex: t.startIndex,
          dimensionsDetectedCount: t.dimensionsDetectedCount,
        });
      }
      function d(t) {
        var e = r.vm;
        if ((0, i.isTypedArray)(t)) e = r.XO;
        else if ((0, i.isArray)(t)) {
          0 === t.length && (e = r.Km);
          for (var n = 0, o = t.length; n < o; n++) {
            var a = t[n];
            if (null != a) {
              if ((0, i.isArray)(a) || (0, i.isTypedArray)(a)) {
                e = r.Km;
                break;
              }
              if ((0, i.isObject)(a)) {
                e = r.Wk;
                break;
              }
            }
          }
        } else if ((0, i.isObject)(t))
          for (var s in t)
            if ((0, i.hasOwn)(t, s) && (0, i.isArrayLike)(t[s])) {
              e = r.t1;
              break;
            }
        return e;
      }
      function p(t) {
        if (t) {
          var e = (0, i.createHashMap)();
          return (0, i.map)(t, function (t, n) {
            var r = {
              name: (t = (0, i.isObject)(t) ? t : { name: t }).name,
              displayName: t.displayName,
              type: t.type,
            };
            if (null == r.name) return r;
            (r.name += ""), null == r.displayName && (r.displayName = r.name);
            var o = e.get(r.name);
            return (
              o ? (r.name += "-" + o.count++) : e.set(r.name, { count: 1 }), r
            );
          });
        }
      }
      function f(t, e, n, i) {
        if (e === r.oC)
          for (var o = 0; o < n.length && o < i; o++)
            t(n[o] ? n[o][0] : null, o);
        else {
          var a = n[0] || [];
          for (o = 0; o < a.length && o < i; o++) t(a[o], o);
        }
      }
      function g(t) {
        var e = t.sourceFormat;
        return e === r.Wk || e === r.t1;
      }
    },
    64014: (t, e, n) => {
      n.d(e, { A: () => o });
      var i = n(70441);
      function r(t, e) {
        return (
          (e = e || [0, 0]),
          i.map(
            ["x", "y"],
            function (n, i) {
              var r = this.getAxis(n),
                o = e[i],
                a = t[i] / 2;
              return "category" === r.type
                ? r.getBandWidth()
                : Math.abs(r.dataToCoord(o - a) - r.dataToCoord(o + a));
            },
            this
          )
        );
      }
      function o(t) {
        var e = t.master.getRect();
        return {
          coordSys: {
            type: "cartesian2d",
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
          },
          api: {
            coord: function (e) {
              return t.dataToPoint(e);
            },
            size: i.bind(r, t),
          },
        };
      }
    },
    65968: (t, e, n) => {
      n.d(e, { U: () => r });
      var i = n(70441);
      function r(t) {
        return new o(t);
      }
      var o = (function () {
          function t(t) {
            (t = t || {}),
              (this._reset = t.reset),
              (this._plan = t.plan),
              (this._count = t.count),
              (this._onDirty = t.onDirty),
              (this._dirty = !0);
          }
          return (
            (t.prototype.perform = function (t) {
              var e,
                n = this._upstream,
                r = t && t.skip;
              if (this._dirty && n) {
                var o = this.context;
                o.data = o.outputData = n.context.outputData;
              }
              this.__pipeline && (this.__pipeline.currentTask = this),
                this._plan && !r && (e = this._plan(this.context));
              var a,
                s = h(this._modBy),
                u = this._modDataCount || 0,
                c = h(t && t.modBy),
                l = (t && t.modDataCount) || 0;
              function h(t) {
                return !(t >= 1) && (t = 1), t;
              }
              (s === c && u === l) || (e = "reset"),
                (this._dirty || "reset" === e) &&
                  ((this._dirty = !1), (a = this._doReset(r))),
                (this._modBy = c),
                (this._modDataCount = l);
              var d = t && t.step;
              if (
                ((this._dueEnd = n
                  ? n._outputDueEnd
                  : this._count
                  ? this._count(this.context)
                  : 1 / 0),
                this._progress)
              ) {
                var p = this._dueIndex,
                  f = Math.min(
                    null != d ? this._dueIndex + d : 1 / 0,
                    this._dueEnd
                  );
                if (!r && (a || p < f)) {
                  var g = this._progress;
                  if ((0, i.isArray)(g))
                    for (var m = 0; m < g.length; m++)
                      this._doProgress(g[m], p, f, c, l);
                  else this._doProgress(g, p, f, c, l);
                }
                this._dueIndex = f;
                var y =
                  null != this._settedOutputEnd ? this._settedOutputEnd : f;
                0, (this._outputDueEnd = y);
              } else
                this._dueIndex = this._outputDueEnd =
                  null != this._settedOutputEnd
                    ? this._settedOutputEnd
                    : this._dueEnd;
              return this.unfinished();
            }),
            (t.prototype.dirty = function () {
              (this._dirty = !0), this._onDirty && this._onDirty(this.context);
            }),
            (t.prototype._doProgress = function (t, e, n, i, r) {
              a.reset(e, n, i, r),
                (this._callingProgress = t),
                this._callingProgress(
                  { start: e, end: n, count: n - e, next: a.next },
                  this.context
                );
            }),
            (t.prototype._doReset = function (t) {
              var e, n;
              (this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
                (this._settedOutputEnd = null),
                !t &&
                  this._reset &&
                  ((e = this._reset(this.context)) &&
                    e.progress &&
                    ((n = e.forceFirstProgress), (e = e.progress)),
                  (0, i.isArray)(e) && !e.length && (e = null)),
                (this._progress = e),
                (this._modBy = this._modDataCount = null);
              var r = this._downstream;
              return r && r.dirty(), n;
            }),
            (t.prototype.unfinished = function () {
              return this._progress && this._dueIndex < this._dueEnd;
            }),
            (t.prototype.pipe = function (t) {
              (this._downstream !== t || this._dirty) &&
                ((this._downstream = t), (t._upstream = this), t.dirty());
            }),
            (t.prototype.dispose = function () {
              this._disposed ||
                (this._upstream && (this._upstream._downstream = null),
                this._downstream && (this._downstream._upstream = null),
                (this._dirty = !1),
                (this._disposed = !0));
            }),
            (t.prototype.getUpstream = function () {
              return this._upstream;
            }),
            (t.prototype.getDownstream = function () {
              return this._downstream;
            }),
            (t.prototype.setOutputEnd = function (t) {
              this._outputDueEnd = this._settedOutputEnd = t;
            }),
            t
          );
        })(),
        a = (function () {
          var t,
            e,
            n,
            i,
            r,
            o = {
              reset: function (u, c, l, h) {
                (e = u),
                  (t = c),
                  (n = l),
                  (i = h),
                  (r = Math.ceil(i / n)),
                  (o.next = n > 1 && i > 0 ? s : a);
              },
            };
          return o;
          function a() {
            return e < t ? e++ : null;
          }
          function s() {
            var o = (e % r) * n + Math.ceil(e / r),
              a = e >= t ? null : o < i ? o : e;
            return e++, a;
          }
        })();
    },
    69464: (t, e, n) => {
      function i(t) {
        return null == t ? 0 : t.length || 1;
      }
      function r(t) {
        return t;
      }
      n.d(e, { A: () => o });
      const o = (function () {
        function t(t, e, n, i, o, a) {
          (this._old = t),
            (this._new = e),
            (this._oldKeyGetter = n || r),
            (this._newKeyGetter = i || r),
            (this.context = o),
            (this._diffModeMultiple = "multiple" === a);
        }
        return (
          (t.prototype.add = function (t) {
            return (this._add = t), this;
          }),
          (t.prototype.update = function (t) {
            return (this._update = t), this;
          }),
          (t.prototype.updateManyToOne = function (t) {
            return (this._updateManyToOne = t), this;
          }),
          (t.prototype.updateOneToMany = function (t) {
            return (this._updateOneToMany = t), this;
          }),
          (t.prototype.updateManyToMany = function (t) {
            return (this._updateManyToMany = t), this;
          }),
          (t.prototype.remove = function (t) {
            return (this._remove = t), this;
          }),
          (t.prototype.execute = function () {
            this[
              this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"
            ]();
          }),
          (t.prototype._executeOneToOne = function () {
            var t = this._old,
              e = this._new,
              n = {},
              r = new Array(t.length),
              o = new Array(e.length);
            this._initIndexMap(t, null, r, "_oldKeyGetter"),
              this._initIndexMap(e, n, o, "_newKeyGetter");
            for (var a = 0; a < t.length; a++) {
              var s = r[a],
                u = n[s],
                c = i(u);
              if (c > 1) {
                var l = u.shift();
                1 === u.length && (n[s] = u[0]),
                  this._update && this._update(l, a);
              } else
                1 === c
                  ? ((n[s] = null), this._update && this._update(u, a))
                  : this._remove && this._remove(a);
            }
            this._performRestAdd(o, n);
          }),
          (t.prototype._executeMultiple = function () {
            var t = this._old,
              e = this._new,
              n = {},
              r = {},
              o = [],
              a = [];
            this._initIndexMap(t, n, o, "_oldKeyGetter"),
              this._initIndexMap(e, r, a, "_newKeyGetter");
            for (var s = 0; s < o.length; s++) {
              var u = o[s],
                c = n[u],
                l = r[u],
                h = i(c),
                d = i(l);
              if (h > 1 && 1 === d)
                this._updateManyToOne && this._updateManyToOne(l, c),
                  (r[u] = null);
              else if (1 === h && d > 1)
                this._updateOneToMany && this._updateOneToMany(l, c),
                  (r[u] = null);
              else if (1 === h && 1 === d)
                this._update && this._update(l, c), (r[u] = null);
              else if (h > 1 && d > 1)
                this._updateManyToMany && this._updateManyToMany(l, c),
                  (r[u] = null);
              else if (h > 1)
                for (var p = 0; p < h; p++) this._remove && this._remove(c[p]);
              else this._remove && this._remove(c);
            }
            this._performRestAdd(a, r);
          }),
          (t.prototype._performRestAdd = function (t, e) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n],
                o = e[r],
                a = i(o);
              if (a > 1)
                for (var s = 0; s < a; s++) this._add && this._add(o[s]);
              else 1 === a && this._add && this._add(o);
              e[r] = null;
            }
          }),
          (t.prototype._initIndexMap = function (t, e, n, r) {
            for (var o = this._diffModeMultiple, a = 0; a < t.length; a++) {
              var s = "_ec_" + this[r](t[a], a);
              if ((o || (n[a] = s), e)) {
                var u = e[s],
                  c = i(u);
                0 === c
                  ? ((e[s] = a), o && n.push(s))
                  : 1 === c
                  ? (e[s] = [u, a])
                  : u.push(a);
              }
            }
          }),
          t
        );
      })();
    },
    70118: (t, e, n) => {
      n.d(e, { A: () => I });
      var i = n(70441),
        r = n(44156),
        o = n(67730),
        a = n(88186),
        s = n(37292);
      const u = (function (t) {
        function e(e, n, i, r, o) {
          var a = t.call(this, e, n, i) || this;
          return (a.type = r || "value"), (a.axisIndex = o), a;
        }
        return (
          (0, s.C6)(e, t),
          (e.prototype.isHorizontal = function () {
            return (
              "horizontal" !== this.coordinateSystem.getModel().get("layout")
            );
          }),
          e
        );
      })(n(46064).A);
      var c = n(72042),
        l = n(85941),
        h = n(92156),
        d = i.each,
        p = Math.min,
        f = Math.max,
        g = Math.floor,
        m = Math.ceil,
        y = l.LI,
        v = Math.PI;
      function _(t, e) {
        return p(f(t, e[0]), e[1]);
      }
      function x(t, e) {
        var n = e.layoutLength / (e.axisCount - 1);
        return {
          position: n * t,
          axisNameAvailableWidth: n,
          axisLabelShow: !0,
        };
      }
      function M(t, e) {
        var n,
          i,
          r = e.layoutLength,
          o = e.axisExpandWidth,
          a = e.axisCount,
          s = e.axisCollapseWidth,
          u = e.winInnerIndices,
          c = s,
          l = !1;
        return (
          t < u[0]
            ? ((n = t * s), (i = s))
            : t <= u[1]
            ? ((n = e.axisExpandWindow0Pos + t * o - e.axisExpandWindow[0]),
              (c = o),
              (l = !0))
            : ((n = r - (a - 1 - t) * s), (i = s)),
          {
            position: n,
            axisNameAvailableWidth: c,
            axisLabelShow: l,
            nameTruncateMaxWidth: i,
          }
        );
      }
      const A = (function () {
        function t(t, e, n) {
          (this.type = "parallel"),
            (this._axesMap = i.createHashMap()),
            (this._axesLayout = {}),
            (this.dimensions = t.dimensions),
            (this._model = t),
            this._init(t, e, n);
        }
        return (
          (t.prototype._init = function (t, e, n) {
            var i = t.dimensions,
              r = t.parallelAxisIndex;
            d(
              i,
              function (t, n) {
                var i = r[n],
                  o = e.getComponent("parallelAxis", i),
                  s = this._axesMap.set(
                    t,
                    new u(t, a.f$(o), [0, 0], o.get("type"), i)
                  ),
                  c = "category" === s.type;
                (s.onBand = c && o.get("boundaryGap")),
                  (s.inverse = o.get("inverse")),
                  (o.axis = s),
                  (s.model = o),
                  (s.coordinateSystem = o.coordinateSystem = this);
              },
              this
            );
          }),
          (t.prototype.update = function (t, e) {
            this._updateAxesFromSeries(this._model, t);
          }),
          (t.prototype.containPoint = function (t) {
            var e = this._makeLayoutInfo(),
              n = e.axisBase,
              i = e.layoutBase,
              r = e.pixelDimIndex,
              o = t[1 - r],
              a = t[r];
            return (
              o >= n &&
              o <= n + e.axisLength &&
              a >= i &&
              a <= i + e.layoutLength
            );
          }),
          (t.prototype.getModel = function () {
            return this._model;
          }),
          (t.prototype._updateAxesFromSeries = function (t, e) {
            e.eachSeries(function (n) {
              if (t.contains(n, e)) {
                var i = n.getData();
                d(
                  this.dimensions,
                  function (t) {
                    var e = this._axesMap.get(t);
                    e.scale.unionExtentFromData(i, i.mapDimension(t)),
                      a.af(e.scale, e.model);
                  },
                  this
                );
              }
            }, this);
          }),
          (t.prototype.resize = function (t, e) {
            (this._rect = o.dV(t.getBoxLayoutParams(), {
              width: e.getWidth(),
              height: e.getHeight(),
            })),
              this._layoutAxes();
          }),
          (t.prototype.getRect = function () {
            return this._rect;
          }),
          (t.prototype._makeLayoutInfo = function () {
            var t,
              e = this._model,
              n = this._rect,
              i = ["x", "y"],
              r = ["width", "height"],
              o = e.get("layout"),
              a = "horizontal" === o ? 0 : 1,
              s = n[r[a]],
              u = [0, s],
              c = this.dimensions.length,
              l = _(e.get("axisExpandWidth"), u),
              h = _(e.get("axisExpandCount") || 0, [0, c]),
              d =
                e.get("axisExpandable") &&
                c > 3 &&
                c > h &&
                h > 1 &&
                l > 0 &&
                s > 0,
              p = e.get("axisExpandWindow");
            p
              ? ((t = _(p[1] - p[0], u)), (p[1] = p[0] + t))
              : ((t = _(l * (h - 1), u)),
                ((p = [
                  l * (e.get("axisExpandCenter") || g(c / 2)) - t / 2,
                ])[1] = p[0] + t));
            var f = (s - t) / (c - h);
            f < 3 && (f = 0);
            var v = [g(y(p[0] / l, 1)) + 1, m(y(p[1] / l, 1)) - 1],
              x = (f / l) * p[0];
            return {
              layout: o,
              pixelDimIndex: a,
              layoutBase: n[i[a]],
              layoutLength: s,
              axisBase: n[i[1 - a]],
              axisLength: n[r[1 - a]],
              axisExpandable: d,
              axisExpandWidth: l,
              axisCollapseWidth: f,
              axisExpandWindow: p,
              axisCount: c,
              winInnerIndices: v,
              axisExpandWindow0Pos: x,
            };
          }),
          (t.prototype._layoutAxes = function () {
            var t = this._rect,
              e = this._axesMap,
              n = this.dimensions,
              i = this._makeLayoutInfo(),
              o = i.layout;
            e.each(function (t) {
              var e = [0, i.axisLength],
                n = t.inverse ? 1 : 0;
              t.setExtent(e[n], e[1 - n]);
            }),
              d(
                n,
                function (e, n) {
                  var a = (i.axisExpandable ? M : x)(n, i),
                    s = {
                      horizontal: { x: a.position, y: i.axisLength },
                      vertical: { x: 0, y: a.position },
                    },
                    u = { horizontal: v / 2, vertical: 0 },
                    c = [s[o].x + t.x, s[o].y + t.y],
                    l = u[o],
                    h = r.create();
                  r.rotate(h, h, l),
                    r.translate(h, h, c),
                    (this._axesLayout[e] = {
                      position: c,
                      rotation: l,
                      transform: h,
                      axisNameAvailableWidth: a.axisNameAvailableWidth,
                      axisLabelShow: a.axisLabelShow,
                      nameTruncateMaxWidth: a.nameTruncateMaxWidth,
                      tickDirection: 1,
                      labelDirection: 1,
                    });
                },
                this
              );
          }),
          (t.prototype.getAxis = function (t) {
            return this._axesMap.get(t);
          }),
          (t.prototype.dataToPoint = function (t, e) {
            return this.axisCoordToPoint(
              this._axesMap.get(e).dataToCoord(t),
              e
            );
          }),
          (t.prototype.eachActiveState = function (t, e, n, r) {
            null == n && (n = 0), null == r && (r = t.count());
            var o = this._axesMap,
              a = this.dimensions,
              s = [],
              u = [];
            i.each(a, function (e) {
              s.push(t.mapDimension(e)), u.push(o.get(e).model);
            });
            for (var c = this.hasAxisBrushed(), l = n; l < r; l++) {
              var h = void 0;
              if (c) {
                h = "active";
                for (
                  var d = t.getValues(s, l), p = 0, f = a.length;
                  p < f;
                  p++
                ) {
                  if ("inactive" === u[p].getActiveState(d[p])) {
                    h = "inactive";
                    break;
                  }
                }
              } else h = "normal";
              e(h, l);
            }
          }),
          (t.prototype.hasAxisBrushed = function () {
            for (
              var t = this.dimensions,
                e = this._axesMap,
                n = !1,
                i = 0,
                r = t.length;
              i < r;
              i++
            )
              "normal" !== e.get(t[i]).model.getActiveState() && (n = !0);
            return n;
          }),
          (t.prototype.axisCoordToPoint = function (t, e) {
            var n = this._axesLayout[e];
            return c.applyTransform([t, 0], n.transform);
          }),
          (t.prototype.getAxisLayout = function (t) {
            return i.clone(this._axesLayout[t]);
          }),
          (t.prototype.getSlidedAxisExpandWindow = function (t) {
            var e = this._makeLayoutInfo(),
              n = e.pixelDimIndex,
              i = e.axisExpandWindow.slice(),
              r = i[1] - i[0],
              o = [0, e.axisExpandWidth * (e.axisCount - 1)];
            if (!this.containPoint(t))
              return { behavior: "none", axisExpandWindow: i };
            var a,
              s = t[n] - e.layoutBase - e.axisExpandWindow0Pos,
              u = "slide",
              c = e.axisCollapseWidth,
              l = this._model.get("axisExpandSlideTriggerArea"),
              d = null != l[0];
            if (c)
              d && c && s < r * l[0]
                ? ((u = "jump"), (a = s - r * l[2]))
                : d && c && s > r * (1 - l[0])
                ? ((u = "jump"), (a = s - r * (1 - l[2])))
                : (a = s - r * l[1]) >= 0 &&
                  (a = s - r * (1 - l[1])) <= 0 &&
                  (a = 0),
                (a *= e.axisExpandWidth / c)
                  ? (0, h.A)(a, i, o, "all")
                  : (u = "none");
            else {
              var g = i[1] - i[0];
              ((i = [f(0, (o[1] * s) / g - g / 2)])[1] = p(o[1], i[0] + g)),
                (i[0] = i[1] - g);
            }
            return { axisExpandWindow: i, behavior: u };
          }),
          t
        );
      })();
      var w = n(34575);
      const I = {
        create: function (t, e) {
          var n = [];
          return (
            t.eachComponent("parallel", function (i, r) {
              var o = new A(i, t, e);
              (o.name = "parallel_" + r),
                o.resize(i, e),
                (i.coordinateSystem = o),
                (o.model = i),
                n.push(o);
            }),
            t.eachSeries(function (t) {
              if ("parallel" === t.get("coordinateSystem")) {
                var e = t.getReferringComponents("parallel", w.US).models[0];
                t.coordinateSystem = e.coordinateSystem;
              }
            }),
            n
          );
        },
      };
    },
    71984: (t, e, n) => {
      n.d(e, {
        Lv: () => h,
        A$: () => p,
        pr: () => g,
        A4: () => f,
        E: () => d,
      });
      var i = n(19626),
        r = n(73830);
      var o = n(70441),
        a = "ZH",
        s = "EN",
        u = s,
        c = {},
        l = {},
        h =
          r.A.domSupported &&
          (
            document.documentElement.lang ||
            navigator.language ||
            navigator.browserLanguage ||
            u
          )
            .toUpperCase()
            .indexOf(a) > -1
            ? a
            : u;
      function d(t, e) {
        (t = t.toUpperCase()), (l[t] = new i.A(e)), (c[t] = e);
      }
      function p(t) {
        if ((0, o.isString)(t)) {
          var e = c[t.toUpperCase()] || {};
          return t === a || t === s
            ? (0, o.clone)(e)
            : (0, o.merge)((0, o.clone)(e), (0, o.clone)(c[u]), !1);
        }
        return (0, o.merge)((0, o.clone)(t), (0, o.clone)(c[u]), !1);
      }
      function f(t) {
        return l[t];
      }
      function g() {
        return l[u];
      }
      d(s, {
        time: {
          month: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthAbbr: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayOfWeek: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        legend: { selector: { all: "All", inverse: "Inv" } },
        toolbox: {
          brush: {
            title: {
              rect: "Box Select",
              polygon: "Lasso Select",
              lineX: "Horizontally Select",
              lineY: "Vertically Select",
              keep: "Keep Selections",
              clear: "Clear Selections",
            },
          },
          dataView: {
            title: "Data View",
            lang: ["Data View", "Close", "Refresh"],
          },
          dataZoom: { title: { zoom: "Zoom", back: "Zoom Reset" } },
          magicType: {
            title: {
              line: "Switch to Line Chart",
              bar: "Switch to Bar Chart",
              stack: "Stack",
              tiled: "Tile",
            },
          },
          restore: { title: "Restore" },
          saveAsImage: {
            title: "Save as Image",
            lang: ["Right Click to Save Image"],
          },
        },
        series: {
          typeNames: {
            pie: "Pie chart",
            bar: "Bar chart",
            line: "Line chart",
            scatter: "Scatter plot",
            effectScatter: "Ripple scatter plot",
            radar: "Radar chart",
            tree: "Tree",
            treemap: "Treemap",
            boxplot: "Boxplot",
            candlestick: "Candlestick",
            k: "K line chart",
            heatmap: "Heat map",
            map: "Map",
            parallel: "Parallel coordinate map",
            lines: "Line graph",
            graph: "Relationship graph",
            sankey: "Sankey diagram",
            funnel: "Funnel chart",
            gauge: "Gauge",
            pictorialBar: "Pictorial bar",
            themeRiver: "Theme River Map",
            sunburst: "Sunburst",
            custom: "Custom chart",
            chart: "Chart",
          },
        },
        aria: {
          general: {
            withTitle: 'This is a chart about "{title}"',
            withoutTitle: "This is a chart",
          },
          series: {
            single: {
              prefix: "",
              withName: " with type {seriesType} named {seriesName}.",
              withoutName: " with type {seriesType}.",
            },
            multiple: {
              prefix: ". It consists of {seriesCount} series count.",
              withName:
                " The {seriesId} series is a {seriesType} representing {seriesName}.",
              withoutName: " The {seriesId} series is a {seriesType}.",
              separator: { middle: "", end: "" },
            },
          },
          data: {
            allData: "The data is as follows: ",
            partialData: "The first {displayCnt} items are: ",
            withName: "the data for {name} is {value}",
            withoutName: "{value}",
            separator: { middle: ", ", end: ". " },
          },
        },
      }),
        d(a, {
          time: {
            month: [
              "\u4e00\u6708",
              "\u4e8c\u6708",
              "\u4e09\u6708",
              "\u56db\u6708",
              "\u4e94\u6708",
              "\u516d\u6708",
              "\u4e03\u6708",
              "\u516b\u6708",
              "\u4e5d\u6708",
              "\u5341\u6708",
              "\u5341\u4e00\u6708",
              "\u5341\u4e8c\u6708",
            ],
            monthAbbr: [
              "1\u6708",
              "2\u6708",
              "3\u6708",
              "4\u6708",
              "5\u6708",
              "6\u6708",
              "7\u6708",
              "8\u6708",
              "9\u6708",
              "10\u6708",
              "11\u6708",
              "12\u6708",
            ],
            dayOfWeek: [
              "\u661f\u671f\u65e5",
              "\u661f\u671f\u4e00",
              "\u661f\u671f\u4e8c",
              "\u661f\u671f\u4e09",
              "\u661f\u671f\u56db",
              "\u661f\u671f\u4e94",
              "\u661f\u671f\u516d",
            ],
            dayOfWeekAbbr: [
              "\u65e5",
              "\u4e00",
              "\u4e8c",
              "\u4e09",
              "\u56db",
              "\u4e94",
              "\u516d",
            ],
          },
          legend: {
            selector: { all: "\u5168\u9009", inverse: "\u53cd\u9009" },
          },
          toolbox: {
            brush: {
              title: {
                rect: "\u77e9\u5f62\u9009\u62e9",
                polygon: "\u5708\u9009",
                lineX: "\u6a2a\u5411\u9009\u62e9",
                lineY: "\u7eb5\u5411\u9009\u62e9",
                keep: "\u4fdd\u6301\u9009\u62e9",
                clear: "\u6e05\u9664\u9009\u62e9",
              },
            },
            dataView: {
              title: "\u6570\u636e\u89c6\u56fe",
              lang: [
                "\u6570\u636e\u89c6\u56fe",
                "\u5173\u95ed",
                "\u5237\u65b0",
              ],
            },
            dataZoom: {
              title: {
                zoom: "\u533a\u57df\u7f29\u653e",
                back: "\u533a\u57df\u7f29\u653e\u8fd8\u539f",
              },
            },
            magicType: {
              title: {
                line: "\u5207\u6362\u4e3a\u6298\u7ebf\u56fe",
                bar: "\u5207\u6362\u4e3a\u67f1\u72b6\u56fe",
                stack: "\u5207\u6362\u4e3a\u5806\u53e0",
                tiled: "\u5207\u6362\u4e3a\u5e73\u94fa",
              },
            },
            restore: { title: "\u8fd8\u539f" },
            saveAsImage: {
              title: "\u4fdd\u5b58\u4e3a\u56fe\u7247",
              lang: ["\u53f3\u952e\u53e6\u5b58\u4e3a\u56fe\u7247"],
            },
          },
          series: {
            typeNames: {
              pie: "\u997c\u56fe",
              bar: "\u67f1\u72b6\u56fe",
              line: "\u6298\u7ebf\u56fe",
              scatter: "\u6563\u70b9\u56fe",
              effectScatter: "\u6d9f\u6f2a\u6563\u70b9\u56fe",
              radar: "\u96f7\u8fbe\u56fe",
              tree: "\u6811\u56fe",
              treemap: "\u77e9\u5f62\u6811\u56fe",
              boxplot: "\u7bb1\u578b\u56fe",
              candlestick: "K\u7ebf\u56fe",
              k: "K\u7ebf\u56fe",
              heatmap: "\u70ed\u529b\u56fe",
              map: "\u5730\u56fe",
              parallel: "\u5e73\u884c\u5750\u6807\u56fe",
              lines: "\u7ebf\u56fe",
              graph: "\u5173\u7cfb\u56fe",
              sankey: "\u6851\u57fa\u56fe",
              funnel: "\u6f0f\u6597\u56fe",
              gauge: "\u4eea\u8868\u76d8\u56fe",
              pictorialBar: "\u8c61\u5f62\u67f1\u56fe",
              themeRiver: "\u4e3b\u9898\u6cb3\u6d41\u56fe",
              sunburst: "\u65ed\u65e5\u56fe",
              custom: "\u81ea\u5b9a\u4e49\u56fe\u8868",
              chart: "\u56fe\u8868",
            },
          },
          aria: {
            general: {
              withTitle:
                "\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u201c{title}\u201d\u7684\u56fe\u8868\u3002",
              withoutTitle: "\u8fd9\u662f\u4e00\u4e2a\u56fe\u8868\uff0c",
            },
            series: {
              single: {
                prefix: "",
                withName:
                  "\u56fe\u8868\u7c7b\u578b\u662f{seriesType}\uff0c\u8868\u793a{seriesName}\u3002",
                withoutName: "\u56fe\u8868\u7c7b\u578b\u662f{seriesType}\u3002",
              },
              multiple: {
                prefix:
                  "\u5b83\u7531{seriesCount}\u4e2a\u56fe\u8868\u7cfb\u5217\u7ec4\u6210\u3002",
                withName:
                  "\u7b2c{seriesId}\u4e2a\u7cfb\u5217\u662f\u4e00\u4e2a\u8868\u793a{seriesName}\u7684{seriesType}\uff0c",
                withoutName:
                  "\u7b2c{seriesId}\u4e2a\u7cfb\u5217\u662f\u4e00\u4e2a{seriesType}\uff0c",
                separator: { middle: "\uff1b", end: "\u3002" },
              },
            },
            data: {
              allData: "\u5176\u6570\u636e\u662f\u2014\u2014",
              partialData:
                "\u5176\u4e2d\uff0c\u524d{displayCnt}\u9879\u662f\u2014\u2014",
              withName: "{name}\u7684\u6570\u636e\u662f{value}",
              withoutName: "{value}",
              separator: { middle: "\uff0c", end: "" },
            },
          },
        });
    },
    73703: (t, e, n) => {
      n.d(e, { A: () => h, R: () => l });
      var i = n(70441),
        r = n(62285),
        o = n(85327),
        a = n(30130),
        s = n(20807),
        u = n(58327),
        c = n(8474),
        l = (function () {
          function t(t) {
            (this._sourceList = []),
              (this._storeList = []),
              (this._upstreamSignList = []),
              (this._versionSignBase = 0),
              (this._dirty = !0),
              (this._sourceHost = t);
          }
          return (
            (t.prototype.dirty = function () {
              this._setLocalSource([], []),
                (this._storeList = []),
                (this._dirty = !0);
            }),
            (t.prototype._setLocalSource = function (t, e) {
              (this._sourceList = t),
                (this._upstreamSignList = e),
                this._versionSignBase++,
                this._versionSignBase > 9e10 && (this._versionSignBase = 0);
            }),
            (t.prototype._getVersionSign = function () {
              return this._sourceHost.uid + "_" + this._versionSignBase;
            }),
            (t.prototype.prepareSource = function () {
              this._isDirty() && (this._createSource(), (this._dirty = !1));
            }),
            (t.prototype._createSource = function () {
              this._setLocalSource([], []);
              var t,
                e,
                n = this._sourceHost,
                a = this._getUpstreamSourceManagers(),
                s = !!a.length;
              if (d(n)) {
                var u = n,
                  c = void 0,
                  l = void 0,
                  h = void 0;
                if (s) {
                  var p = a[0];
                  p.prepareSource(),
                    (c = (h = p.getSource()).data),
                    (l = h.sourceFormat),
                    (e = [p._getVersionSign()]);
                } else
                  (c = u.get("data", !0)),
                    (l = (0, i.isTypedArray)(c) ? o.XO : o.mK),
                    (e = []);
                var f = this._getSourceMetaRawOption() || {},
                  g = (h && h.metaRawOption) || {},
                  m =
                    (0, i.retrieve2)(f.seriesLayoutBy, g.seriesLayoutBy) ||
                    null,
                  y = (0, i.retrieve2)(f.sourceHeader, g.sourceHeader),
                  v = (0, i.retrieve2)(f.dimensions, g.dimensions);
                t =
                  m !== g.seriesLayoutBy || !!y !== !!g.sourceHeader || v
                    ? [
                        (0, r.gV)(
                          c,
                          { seriesLayoutBy: m, sourceHeader: y, dimensions: v },
                          l
                        ),
                      ]
                    : [];
              } else {
                var _ = n;
                if (s) {
                  var x = this._applyTransform(a);
                  (t = x.sourceList), (e = x.upstreamSignList);
                } else {
                  var M = _.get("source", !0);
                  (t = [(0, r.gV)(M, this._getSourceMetaRawOption(), null)]),
                    (e = []);
                }
              }
              this._setLocalSource(t, e);
            }),
            (t.prototype._applyTransform = function (t) {
              var e,
                n = this._sourceHost,
                o = n.get("transform", !0),
                a = n.get("fromTransformResult", !0);
              if (null != a) {
                1 !== t.length && p("");
              }
              var u = [],
                c = [];
              return (
                (0, i.each)(t, function (t) {
                  t.prepareSource();
                  var e = t.getSource(a || 0);
                  null == a || e || p(""),
                    u.push(e),
                    c.push(t._getVersionSign());
                }),
                o
                  ? (e = (0, s.py)(o, u, { datasetIndex: n.componentIndex }))
                  : null != a && (e = [(0, r.BE)(u[0])]),
                { sourceList: e, upstreamSignList: c }
              );
            }),
            (t.prototype._isDirty = function () {
              if (this._dirty) return !0;
              for (
                var t = this._getUpstreamSourceManagers(), e = 0;
                e < t.length;
                e++
              ) {
                var n = t[e];
                if (
                  n._isDirty() ||
                  this._upstreamSignList[e] !== n._getVersionSign()
                )
                  return !0;
              }
            }),
            (t.prototype.getSource = function (t) {
              t = t || 0;
              var e = this._sourceList[t];
              if (!e) {
                var n = this._getUpstreamSourceManagers();
                return n[0] && n[0].getSource(t);
              }
              return e;
            }),
            (t.prototype.getSharedDataStore = function (t) {
              var e = t.makeStoreSchema();
              return this._innerGetDataStore(e.dimensions, t.source, e.hash);
            }),
            (t.prototype._innerGetDataStore = function (t, e, n) {
              var i = this._storeList,
                r = i[0];
              r || (r = i[0] = {});
              var o = r[n];
              if (!o) {
                var a = this._getUpstreamSourceManagers()[0];
                d(this._sourceHost) && a
                  ? (o = a._innerGetDataStore(t, e, n))
                  : (o = new u.Ay()).initData(new c.d1(e, t.length), t),
                  (r[n] = o);
              }
              return o;
            }),
            (t.prototype._getUpstreamSourceManagers = function () {
              var t = this._sourceHost;
              if (d(t)) {
                var e = (0, a.G9)(t);
                return e ? [e.getSourceManager()] : [];
              }
              return (0, i.map)((0, a.Gt)(t), function (t) {
                return t.getSourceManager();
              });
            }),
            (t.prototype._getSourceMetaRawOption = function () {
              var t,
                e,
                n,
                i = this._sourceHost;
              if (d(i))
                (t = i.get("seriesLayoutBy", !0)),
                  (e = i.get("sourceHeader", !0)),
                  (n = i.get("dimensions", !0));
              else if (!this._getUpstreamSourceManagers().length) {
                var r = i;
                (t = r.get("seriesLayoutBy", !0)),
                  (e = r.get("sourceHeader", !0)),
                  (n = r.get("dimensions", !0));
              }
              return { seriesLayoutBy: t, sourceHeader: e, dimensions: n };
            }),
            t
          );
        })();
      function h(t) {
        t.option.transform && (0, i.setAsPrimitive)(t.option.transform);
      }
      function d(t) {
        return "series" === t.mainType;
      }
      function p(t) {
        throw new Error(t);
      }
    },
    83395: (t, e, n) => {
      n.d(e, { A: () => l });
      var i = n(37292),
        r = n(70441),
        o = n(34575),
        a = n(95244),
        s = n(19626),
        u = n(1782),
        c = n(95380);
      const l = (function (t) {
        function e() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (n.type = e.type), n;
        }
        return (
          (0, i.C6)(e, t),
          (e.prototype.init = function (t, e, n) {
            var i = c.A.getGeoResource(t.map);
            if (i && "geoJSON" === i.type) {
              var r = (t.itemStyle = t.itemStyle || {});
              "color" in r || (r.color = "#eee");
            }
            this.mergeDefaultAndTheme(t, n), o.M5(t, "label", ["show"]);
          }),
          (e.prototype.optionUpdated = function () {
            var t = this,
              e = this.option;
            e.regions = u.A.getFilledRegions(
              e.regions,
              e.map,
              e.nameMap,
              e.nameProperty
            );
            var n = {};
            (this._optionModelMap = r.reduce(
              e.regions || [],
              function (e, i) {
                var r = i.name;
                return (
                  r &&
                    (e.set(r, new s.A(i, t, t.ecModel)),
                    i.selected && (n[r] = !0)),
                  e
                );
              },
              r.createHashMap()
            )),
              e.selectedMap || (e.selectedMap = n);
          }),
          (e.prototype.getRegionModel = function (t) {
            return (
              this._optionModelMap.get(t) || new s.A(null, this, this.ecModel)
            );
          }),
          (e.prototype.getFormattedLabel = function (t, e) {
            var n = this.getRegionModel(t),
              i =
                "normal" === e
                  ? n.get(["label", "formatter"])
                  : n.get(["emphasis", "label", "formatter"]),
              o = { name: t };
            return r.isFunction(i)
              ? ((o.status = e), i(o))
              : r.isString(i)
              ? i.replace("{a}", null != t ? t : "")
              : void 0;
          }),
          (e.prototype.setZoom = function (t) {
            this.option.zoom = t;
          }),
          (e.prototype.setCenter = function (t) {
            this.option.center = t;
          }),
          (e.prototype.select = function (t) {
            var e = this.option,
              n = e.selectedMode;
            n &&
              ("multiple" !== n && (e.selectedMap = null),
              ((e.selectedMap || (e.selectedMap = {}))[t] = !0));
          }),
          (e.prototype.unSelect = function (t) {
            var e = this.option.selectedMap;
            e && (e[t] = !1);
          }),
          (e.prototype.toggleSelected = function (t) {
            this[this.isSelected(t) ? "unSelect" : "select"](t);
          }),
          (e.prototype.isSelected = function (t) {
            var e = this.option.selectedMap;
            return !(!e || !e[t]);
          }),
          (e.type = "geo"),
          (e.layoutMode = "box"),
          (e.defaultOption = {
            z: 0,
            show: !0,
            left: "center",
            top: "center",
            aspectScale: null,
            silent: !1,
            map: "",
            boundingCoords: null,
            center: null,
            zoom: 1,
            scaleLimit: null,
            label: { show: !1, color: "#000" },
            itemStyle: { borderWidth: 0.5, borderColor: "#444" },
            emphasis: {
              label: { show: !0, color: "rgb(100,0,0)" },
              itemStyle: { color: "rgba(255,215,0,0.8)" },
            },
            select: {
              label: { show: !0, color: "rgb(100,0,0)" },
              itemStyle: { color: "rgba(255,215,0,0.8)" },
            },
            regions: [],
          }),
          e
        );
      })(a.A);
    },
    84114: (t, e, n) => {
      n.d(e, { A: () => o });
      var i = n(70441),
        r = {};
      const o = (function () {
        function t() {
          this._coordinateSystems = [];
        }
        return (
          (t.prototype.create = function (t, e) {
            var n = [];
            i.each(r, function (i, r) {
              var o = i.create(t, e);
              n = n.concat(o || []);
            }),
              (this._coordinateSystems = n);
          }),
          (t.prototype.update = function (t, e) {
            i.each(this._coordinateSystems, function (n) {
              n.update && n.update(t, e);
            });
          }),
          (t.prototype.getCoordinateSystems = function () {
            return this._coordinateSystems.slice();
          }),
          (t.register = function (t, e) {
            r[t] = e;
          }),
          (t.get = function (t) {
            return r[t];
          }),
          t
        );
      })();
    },
    84430: (t, e, n) => {
      n.d(e, { A: () => u });
      var i = n(37292),
        r = n(95244),
        o = n(15195),
        a = n(70441),
        s = (function (t) {
          function e() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (n.type = e.type), n;
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype.getCoordSysModel = function () {
              return this;
            }),
            (e.type = "singleAxis"),
            (e.layoutMode = "box"),
            (e.defaultOption = {
              left: "5%",
              top: "5%",
              right: "5%",
              bottom: "5%",
              type: "value",
              position: "bottom",
              orient: "horizontal",
              axisLine: { show: !0, lineStyle: { width: 1, type: "solid" } },
              tooltip: { show: !0 },
              axisTick: { show: !0, length: 6, lineStyle: { width: 1 } },
              axisLabel: { show: !0, interval: "auto" },
              splitLine: {
                show: !0,
                lineStyle: { type: "dashed", opacity: 0.2 },
              },
            }),
            e
          );
        })(r.A);
      (0, a.mixin)(s, o.L.prototype);
      const u = s;
    },
    84587: (t, e, n) => {
      n.d(e, { A: () => h });
      var i = n(37292),
        r = n(70441),
        o = n(58837),
        a = n(19626),
        s = n(15195),
        u = n(95244),
        c = o.A.value;
      function l(t, e) {
        return r.defaults({ show: e }, t);
      }
      const h = (function (t) {
        function e() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (n.type = e.type), n;
        }
        return (
          (0, i.C6)(e, t),
          (e.prototype.optionUpdated = function () {
            var t = this.get("boundaryGap"),
              e = this.get("splitNumber"),
              n = this.get("scale"),
              i = this.get("axisLine"),
              o = this.get("axisTick"),
              u = this.get("axisLabel"),
              c = this.get("axisName"),
              l = this.get(["axisName", "show"]),
              h = this.get(["axisName", "formatter"]),
              d = this.get("axisNameGap"),
              p = this.get("triggerEvent"),
              f = r.map(
                this.get("indicator") || [],
                function (f) {
                  null != f.max && f.max > 0 && !f.min
                    ? (f.min = 0)
                    : null != f.min && f.min < 0 && !f.max && (f.max = 0);
                  var g = c;
                  null != f.color && (g = r.defaults({ color: f.color }, c));
                  var m = r.merge(
                    r.clone(f),
                    {
                      boundaryGap: t,
                      splitNumber: e,
                      scale: n,
                      axisLine: i,
                      axisTick: o,
                      axisLabel: u,
                      name: f.text,
                      showName: l,
                      nameLocation: "end",
                      nameGap: d,
                      nameTextStyle: g,
                      triggerEvent: p,
                    },
                    !1
                  );
                  if (r.isString(h)) {
                    var y = m.name;
                    m.name = h.replace("{value}", null != y ? y : "");
                  } else r.isFunction(h) && (m.name = h(m.name, m));
                  var v = new a.A(m, null, this.ecModel);
                  return (
                    r.mixin(v, s.L.prototype),
                    (v.mainType = "radar"),
                    (v.componentIndex = this.componentIndex),
                    v
                  );
                },
                this
              );
            this._indicatorModels = f;
          }),
          (e.prototype.getIndicatorModels = function () {
            return this._indicatorModels;
          }),
          (e.type = "radar"),
          (e.defaultOption = {
            z: 0,
            center: ["50%", "50%"],
            radius: "75%",
            startAngle: 90,
            axisName: { show: !0 },
            boundaryGap: [0, 0],
            splitNumber: 5,
            axisNameGap: 15,
            scale: !1,
            shape: "polygon",
            axisLine: r.merge({ lineStyle: { color: "#bbb" } }, c.axisLine),
            axisLabel: l(c.axisLabel, !1),
            axisTick: l(c.axisTick, !1),
            splitLine: l(c.splitLine, !0),
            splitArea: l(c.splitArea, !0),
            indicator: [],
          }),
          e
        );
      })(u.A);
    },
    87219: (t, e, n) => {
      n.d(e, { A: () => r });
      var i = n(37292);
      const r = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (0, i.C6)(e, t),
          (e.type = "grid"),
          (e.dependencies = ["xAxis", "yAxis"]),
          (e.layoutMode = "box"),
          (e.defaultOption = {
            show: !1,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 70,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc",
          }),
          e
        );
      })(n(95244).A);
    },
    87475: (t, e, n) => {
      n.d(e, { A: () => o });
      var i = n(70441),
        r = n(34575);
      function o(t) {
        !(function (t) {
          if (t.parallel) return;
          var e = !1;
          i.each(t.series, function (t) {
            t && "parallel" === t.type && (e = !0);
          }),
            e && (t.parallel = [{}]);
        })(t),
          (function (t) {
            var e = r.qB(t.parallelAxis);
            i.each(e, function (e) {
              if (i.isObject(e)) {
                var n = e.parallelIndex || 0,
                  o = r.qB(t.parallel)[n];
                o &&
                  o.parallelAxisDefault &&
                  i.merge(e, o.parallelAxisDefault, !1);
              }
            });
          })(t);
      }
    },
    88186: (t, e, n) => {
      n.d(e, {
        Dt: () => v,
        JJ: () => m,
        Og: () => _,
        PJ: () => A,
        PN: () => I,
        Rx: () => p,
        af: () => f,
        f$: () => g,
        j2: () => M,
        ry: () => y,
        wq: () => w,
      });
      var i = n(70441),
        r = n(89301),
        o = n(72183),
        a = n(49386),
        s = n(89777),
        u = n(13171),
        c = n(56443),
        l = n(49026),
        h = n(24755),
        d = n(9831);
      function p(t, e) {
        var n = t.type,
          r = (0, d.Tc)(t, e, t.getExtent()).calculate();
        t.setBlank(r.isBlank);
        var o = r.min,
          a = r.max,
          u = e.ecModel;
        if (u && "time" === n) {
          var c = (0, s.GL)("bar", u),
            l = !1;
          if (
            (i.each(c, function (t) {
              l = l || t.getBaseAxis() === e.axis;
            }),
            l)
          ) {
            var h = (0, s.vq)(c),
              p = (function (t, e, n, r) {
                var o = n.axis.getExtent(),
                  a = Math.abs(o[1] - o[0]),
                  u = (0, s.VA)(r, n.axis);
                if (void 0 === u) return { min: t, max: e };
                var c = 1 / 0;
                i.each(u, function (t) {
                  c = Math.min(t.offset, c);
                });
                var l = -1 / 0;
                i.each(u, function (t) {
                  l = Math.max(t.offset + t.width, l);
                }),
                  (c = Math.abs(c)),
                  (l = Math.abs(l));
                var h = c + l,
                  d = e - t,
                  p = d / (1 - (c + l) / a) - d;
                return (
                  (e += p * (l / h)), (t -= p * (c / h)), { min: t, max: e }
                );
              })(o, a, e, h);
            (o = p.min), (a = p.max);
          }
        }
        return { extent: [o, a], fixMin: r.minFixed, fixMax: r.maxFixed };
      }
      function f(t, e) {
        var n = e,
          i = p(t, n),
          r = i.extent,
          o = n.get("splitNumber");
        t instanceof l.A && (t.base = n.get("logBase"));
        var a = t.type,
          s = n.get("interval"),
          u = "interval" === a || "time" === a;
        t.setExtent(r[0], r[1]),
          t.calcNiceExtent({
            splitNumber: o,
            fixMin: i.fixMin,
            fixMax: i.fixMax,
            minInterval: u ? n.get("minInterval") : null,
            maxInterval: u ? n.get("maxInterval") : null,
          }),
          null != s && t.setInterval && t.setInterval(s);
      }
      function g(t, e) {
        if ((e = e || t.get("type")))
          switch (e) {
            case "category":
              return new r.A({
                ordinalMeta: t.getOrdinalMeta
                  ? t.getOrdinalMeta()
                  : t.getCategories(),
                extent: [1 / 0, -1 / 0],
              });
            case "time":
              return new c.A({
                locale: t.ecModel.getLocaleModel(),
                useUTC: t.ecModel.get("useUTC"),
              });
            default:
              return new (a.A.getClass(e) || o.A)();
          }
      }
      function m(t) {
        var e = t.scale.getExtent(),
          n = e[0],
          i = e[1];
        return !((n > 0 && i > 0) || (n < 0 && i < 0));
      }
      function y(t) {
        var e,
          n,
          r = t.getLabelModel().get("formatter"),
          o = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "time" === t.scale.type
          ? ((n = r),
            function (e, i) {
              return t.scale.getFormattedLabel(e, i, n);
            })
          : i.isString(r)
          ? (function (e) {
              return function (n) {
                var i = t.scale.getLabel(n);
                return e.replace("{value}", null != i ? i : "");
              };
            })(r)
          : i.isFunction(r)
          ? ((e = r),
            function (n, i) {
              return (
                null != o && (i = n.value - o),
                e(v(t, n), i, null != n.level ? { level: n.level } : null)
              );
            })
          : function (e) {
              return t.scale.getLabel(e);
            };
      }
      function v(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e.value;
      }
      function _(t) {
        var e = t.model,
          n = t.scale;
        if (e.get(["axisLabel", "show"]) && !n.isBlank()) {
          var i,
            o,
            a = n.getExtent();
          o = n instanceof r.A ? n.count() : (i = n.getTicks()).length;
          var s,
            u = t.getLabelModel(),
            c = y(t),
            l = 1;
          o > 40 && (l = Math.ceil(o / 40));
          for (var h = 0; h < o; h += l) {
            var d = c(i ? i[h] : { value: a[0] + h }, h),
              p = x(u.getTextRect(d), u.get("rotate") || 0);
            s ? s.union(p) : (s = p);
          }
          return s;
        }
      }
      function x(t, e) {
        var n = (e * Math.PI) / 180,
          i = t.width,
          r = t.height,
          o = i * Math.abs(Math.cos(n)) + Math.abs(r * Math.sin(n)),
          a = i * Math.abs(Math.sin(n)) + Math.abs(r * Math.cos(n));
        return new u.A(t.x, t.y, o, a);
      }
      function M(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e;
      }
      function A(t) {
        return "category" === t.type && 0 === M(t.getLabelModel());
      }
      function w(t, e) {
        var n = {};
        return (
          i.each(t.mapDimensionsAll(e), function (e) {
            n[(0, h.me)(t, e)] = !0;
          }),
          i.keys(n)
        );
      }
      function I(t, e, n) {
        e &&
          i.each(w(e, n), function (n) {
            var i = e.getApproximateExtent(n);
            i[0] < t[0] && (t[0] = i[0]), i[1] > t[1] && (t[1] = i[1]);
          });
      }
    },
    88338: (t, e, n) => {
      n.d(e, { A: () => d });
      var i = n(70441),
        r = (0, n(34575).$r)();
      function o(t, e) {
        if (r((o = this)).mainData === o) {
          var n = (0, i.extend)({}, r(this).datas);
          (n[this.dataType] = e), l(e, n, t);
        } else h(e, this.dataType, r(this).mainData, t);
        var o;
        return e;
      }
      function a(t, e) {
        return t.struct && t.struct.update(), e;
      }
      function s(t, e) {
        return (
          (0, i.each)(r(e).datas, function (n, i) {
            n !== e && h(n.cloneShallow(), i, e, t);
          }),
          e
        );
      }
      function u(t) {
        var e = r(this).mainData;
        return null == t || null == e ? e : r(e).datas[t];
      }
      function c() {
        var t = r(this).mainData;
        return null == t
          ? [{ data: t }]
          : (0, i.map)((0, i.keys)(r(t).datas), function (e) {
              return { type: e, data: r(t).datas[e] };
            });
      }
      function l(t, e, n) {
        (r(t).datas = {}),
          (0, i.each)(e, function (e, i) {
            h(e, i, t, n);
          });
      }
      function h(t, e, n, i) {
        (r(n).datas[e] = t),
          (r(t).mainData = n),
          (t.dataType = e),
          i.struct &&
            ((t[i.structAttr] = i.struct), (i.struct[i.datasAttr[e]] = t)),
          (t.getLinkedData = u),
          (t.getLinkedDataAll = c);
      }
      const d = function (t) {
        var e = t.mainData,
          n = t.datas;
        n || ((n = { main: e }), (t.datasAttr = { main: "data" })),
          (t.datas = t.mainData = null),
          l(e, n, t),
          (0, i.each)(n, function (n) {
            (0, i.each)(e.TRANSFERABLE_METHODS, function (e) {
              n.wrapMethod(e, (0, i.curry)(o, t));
            });
          }),
          e.wrapMethod("cloneShallow", (0, i.curry)(s, t)),
          (0, i.each)(e.CHANGABLE_METHODS, function (n) {
            e.wrapMethod(n, (0, i.curry)(a, t));
          }),
          (0, i.assert)(n[e.dataType] === e);
      };
    },
    88439: (t, e, n) => {
      n.d(e, {
        _0: () => pt.A,
        OZ: () => p.A,
        jT: () => l.A,
        bR: () => h.A,
        B8: () => f.A,
        Kx: () => I.A,
        FQ: () => c.FQ,
        rP: () => d.A,
        yW: () => _,
        Ng: () => c.Ng,
        p5: () => c.p5,
        El: () => c.El,
        zm: () => c.zm,
        Zf: () => c.Zf,
        AS: () => c.AS,
        _K: () => dt.A,
        yX: () => vt,
        rt: () => gt,
        NO: () => mt,
        NA: () => yt,
        GP: () => s,
        Bo: () => c.Bo,
        FP: () => c.FP,
        aQ: () => c.aQ,
        ZB: () => c.ZB,
        fA: () => a,
        dw: () => i,
        Ts: () => c.Ts,
        UU: () => ft.Xi,
        UP: () => m,
        ai: () => r,
        l3: () => z.A,
        zI: () => z.A,
        OH: () => c.OH,
        pX: () => c.pX,
        Oh: () => c.Oh,
        Ej: () => c.Ej,
        E: () => c.E,
        mz: () => c.mz,
        cf: () => c.cf,
        tb: () => c.tb,
        lP: () => c.lP,
        qg: () => c.qg,
        bf: () => c.bf,
        iY: () => c.iY,
        xV: () => c.xV,
        AF: () => c.AF,
        vV: () => c.vV,
        Gs: () => F.Gs,
        nF: () => x.nF,
        kB: () => o,
        Yx: () => B.Y,
        ZS: () => u,
        i1: () => y,
        rE: () => c.rE,
        F_: () => v,
        nd: () => g,
      });
      var i = {};
      n.r(i),
        n.d(i, {
          createDimensions: () => b.M,
          createList: () => k,
          createScale: () => E,
          createSymbol: () => L.v5,
          createTextStyle: () => P,
          dataStack: () => N,
          enableHoverEmphasis: () => R.iJ,
          getECData: () => T.z,
          getLayoutRect: () => D.dV,
          mixinAxisModelCommonMethods: () => O,
        });
      var r = {};
      n.r(r),
        n.d(r, {
          MAX_SAFE_INTEGER: () => V.Is,
          asc: () => V.Y6,
          getPercentWithPrecision: () => V.wp,
          getPixelPrecision: () => V.hb,
          getPrecision: () => V.XV,
          getPrecisionSafe: () => V.y6,
          isNumeric: () => V.kf,
          isRadianAroundZero: () => V.dh,
          linearMap: () => V.Cb,
          nice: () => V.Cm,
          numericToNumber: () => V.Sm,
          parseDate: () => V._U,
          quantile: () => V.YV,
          quantity: () => V.au,
          quantityExponent: () => V.NX,
          reformIntervals: () => V.sL,
          remRadian: () => V._7,
          round: () => V.LI,
        });
      var o = {};
      n.r(o), n.d(o, { format: () => G.GP, parse: () => V._U });
      var a = {};
      n.r(a),
        n.d(a, {
          Arc: () => nt.A,
          BezierCurve: () => et.A,
          BoundingRect: () => st.A,
          Circle: () => K.A,
          CompoundPath: () => rt.A,
          Ellipse: () => $.A,
          Group: () => U.A,
          Image: () => j.Ay,
          IncrementalDisplayable: () => it.A,
          Line: () => tt.A,
          LinearGradient: () => ot.A,
          Polygon: () => q.A,
          Polyline: () => Y.A,
          RadialGradient: () => at.A,
          Rect: () => Q.A,
          Ring: () => X.A,
          Sector: () => J.A,
          Text: () => Z.Ay,
          clipPointsByRect: () => H.clipPointsByRect,
          clipRectByRect: () => H.clipRectByRect,
          createIcon: () => H.createIcon,
          extendPath: () => H.extendPath,
          extendShape: () => H.extendShape,
          getShapeClass: () => H.getShapeClass,
          getTransform: () => H.getTransform,
          initProps: () => W.LW,
          makeImage: () => H.makeImage,
          makePath: () => H.makePath,
          mergePath: () => H.mergePath,
          registerShape: () => H.registerShape,
          resizePath: () => H.resizePath,
          updateProps: () => W.oi,
        });
      var s = {};
      n.r(s),
        n.d(s, {
          addCommas: () => ut.ob,
          capitalFirst: () => ut.x5,
          encodeHTML: () => ct.Me,
          formatTime: () => ut.fU,
          formatTpl: () => ut.YK,
          getTextRect: () => ht.k,
          getTooltipMarker: () => ut.qg,
          normalizeCssArray: () => ut.QX,
          toCamelCase: () => ut.Cb,
          truncateText: () => lt.EJ,
        });
      var u = {};
      n.r(u),
        n.d(u, {
          bind: () => v.bind,
          clone: () => v.clone,
          curry: () => v.curry,
          defaults: () => v.defaults,
          each: () => v.each,
          extend: () => v.extend,
          filter: () => v.filter,
          indexOf: () => v.indexOf,
          inherits: () => v.inherits,
          isArray: () => v.isArray,
          isFunction: () => v.isFunction,
          isObject: () => v.isObject,
          isString: () => v.isString,
          map: () => v.map,
          merge: () => v.merge,
          reduce: () => v.reduce,
        });
      var c = n(94665),
        l = n(95244),
        h = n(76072),
        d = n(15230),
        p = n(29379),
        f = n(89033),
        g = n(79124),
        m = n(44156),
        y = n(22290),
        v = n(70441),
        _ = n(32815),
        x = n(27904),
        M = n(62362),
        A = n(88186),
        w = n(15195),
        I = n(19626),
        D = n(67730),
        S = n(24755),
        T = n(3569),
        C = n(87689),
        b = n(18846),
        L = n(11552),
        R = n(41406);
      function k(t) {
        return (0, M.A)(null, t);
      }
      var N = {
        isDimensionStacked: S.sJ,
        enableDataStack: S.iJ,
        getStackedDimension: S.me,
      };
      function E(t, e) {
        var n = e;
        e instanceof I.A || (n = new I.A(e));
        var i = A.f$(n);
        return i.setExtent(t[0], t[1]), A.af(i, n), i;
      }
      function O(t) {
        v.mixin(t, w.L);
      }
      function P(t, e) {
        return (e = e || {}), (0, C.VB)(t, null, null, "normal" !== e.state);
      }
      var B = n(55056),
        F = n(62346),
        z = n(7335),
        V = n(85941),
        G = n(67013),
        H = n(72042),
        W = n(39253),
        U = n(47945),
        j = n(70867),
        Z = n(22007),
        K = n(94026),
        $ = n(34186),
        J = n(94106),
        X = n(59627),
        q = n(38794),
        Y = n(32502),
        Q = n(19084),
        tt = n(13124),
        et = n(44362),
        nt = n(95008),
        it = n(89530),
        rt = n(68886),
        ot = n(56073),
        at = n(46419),
        st = n(13171),
        ut = n(73411),
        ct = n(18729),
        lt = n(54491),
        ht = n(19644),
        dt = n(73830),
        pt = n(46064),
        ft = n(92350);
      function gt(t) {
        var e = l.A.extend(t);
        return l.A.registerClass(e), e;
      }
      function mt(t) {
        var e = h.A.extend(t);
        return h.A.registerClass(e), e;
      }
      function yt(t) {
        var e = d.A.extend(t);
        return d.A.registerClass(e), e;
      }
      function vt(t) {
        var e = p.A.extend(t);
        return p.A.registerClass(e), e;
      }
      var _t = n(60619);
      (0, B.Y)(_t._);
    },
    89033: (t, e, n) => {
      n.d(e, { A: () => T });
      var i,
        r,
        o,
        a,
        s,
        u,
        c,
        l = n(70441),
        h = n(19626),
        d = n(69464),
        p = n(8474),
        f = n(20095),
        g = n(31626),
        m = n(85327),
        y = n(34575),
        v = n(3569),
        _ = n(62285),
        x = n(58327),
        M = n(52509),
        A = l.isObject,
        w = l.map,
        I = "undefined" === typeof Int32Array ? Array : Int32Array,
        D = [
          "hasItemOption",
          "_nameList",
          "_idList",
          "_invertedIndicesMap",
          "_dimSummary",
          "userOutput",
          "_rawData",
          "_dimValueGetter",
          "_nameDimIdx",
          "_idDimIdx",
          "_nameRepeatCount",
        ],
        S = ["_approximateExtent"];
      const T = (function () {
        function t(t, e) {
          var n;
          (this.type = "list"),
            (this._dimOmitted = !1),
            (this._nameList = []),
            (this._idList = []),
            (this._visual = {}),
            (this._layout = {}),
            (this._itemVisuals = []),
            (this._itemLayouts = []),
            (this._graphicEls = []),
            (this._approximateExtent = {}),
            (this._calculationInfo = {}),
            (this.hasItemOption = !1),
            (this.TRANSFERABLE_METHODS = [
              "cloneShallow",
              "downSample",
              "minmaxDownSample",
              "lttbDownSample",
              "map",
            ]),
            (this.CHANGABLE_METHODS = ["filterSelf", "selectRange"]),
            (this.DOWNSAMPLE_METHODS = [
              "downSample",
              "minmaxDownSample",
              "lttbDownSample",
            ]);
          var i = !1;
          (0, M.fg)(t)
            ? ((n = t.dimensions),
              (this._dimOmitted = t.isDimensionOmitted()),
              (this._schema = t))
            : ((i = !0), (n = t)),
            (n = n || ["x", "y"]);
          for (
            var r = {}, o = [], a = {}, s = !1, u = {}, c = 0;
            c < n.length;
            c++
          ) {
            var h = n[c],
              d = l.isString(h)
                ? new g.A({ name: h })
                : h instanceof g.A
                ? h
                : new g.A(h),
              p = d.name;
            (d.type = d.type || "float"),
              d.coordDim || ((d.coordDim = p), (d.coordDimIndex = 0));
            var f = (d.otherDims = d.otherDims || {});
            o.push(p),
              (r[p] = d),
              null != u[p] && (s = !0),
              d.createInvertedIndices && (a[p] = []),
              0 === f.itemName && (this._nameDimIdx = c),
              0 === f.itemId && (this._idDimIdx = c),
              i && (d.storeDimIndex = c);
          }
          if (
            ((this.dimensions = o),
            (this._dimInfos = r),
            this._initGetDimensionInfo(s),
            (this.hostModel = e),
            (this._invertedIndicesMap = a),
            this._dimOmitted)
          ) {
            var m = (this._dimIdxToName = l.createHashMap());
            l.each(o, function (t) {
              m.set(r[t].storeDimIndex, t);
            });
          }
        }
        return (
          (t.prototype.getDimension = function (t) {
            var e = this._recognizeDimIndex(t);
            if (null == e) return t;
            if (((e = t), !this._dimOmitted)) return this.dimensions[e];
            var n = this._dimIdxToName.get(e);
            if (null != n) return n;
            var i = this._schema.getSourceDimension(e);
            return i ? i.name : void 0;
          }),
          (t.prototype.getDimensionIndex = function (t) {
            var e = this._recognizeDimIndex(t);
            if (null != e) return e;
            if (null == t) return -1;
            var n = this._getDimInfo(t);
            return n
              ? n.storeDimIndex
              : this._dimOmitted
              ? this._schema.getSourceDimensionIndex(t)
              : -1;
          }),
          (t.prototype._recognizeDimIndex = function (t) {
            if (
              l.isNumber(t) ||
              (null != t &&
                !isNaN(t) &&
                !this._getDimInfo(t) &&
                (!this._dimOmitted ||
                  this._schema.getSourceDimensionIndex(t) < 0))
            )
              return +t;
          }),
          (t.prototype._getStoreDimIndex = function (t) {
            return this.getDimensionIndex(t);
          }),
          (t.prototype.getDimensionInfo = function (t) {
            return this._getDimInfo(this.getDimension(t));
          }),
          (t.prototype._initGetDimensionInfo = function (t) {
            var e = this._dimInfos;
            this._getDimInfo = t
              ? function (t) {
                  return e.hasOwnProperty(t) ? e[t] : void 0;
                }
              : function (t) {
                  return e[t];
                };
          }),
          (t.prototype.getDimensionsOnCoord = function () {
            return this._dimSummary.dataDimsOnCoord.slice();
          }),
          (t.prototype.mapDimension = function (t, e) {
            var n = this._dimSummary;
            if (null == e) return n.encodeFirstDimNotExtra[t];
            var i = n.encode[t];
            return i ? i[e] : null;
          }),
          (t.prototype.mapDimensionsAll = function (t) {
            return (this._dimSummary.encode[t] || []).slice();
          }),
          (t.prototype.getStore = function () {
            return this._store;
          }),
          (t.prototype.initData = function (t, e, n) {
            var i,
              r = this;
            if ((t instanceof x.Ay && (i = t), !i)) {
              var o = this.dimensions,
                a =
                  (0, _.tP)(t) || l.isArrayLike(t) ? new p.d1(t, o.length) : t;
              i = new x.Ay();
              var s = w(o, function (t) {
                return { type: r._dimInfos[t].type, property: t };
              });
              i.initData(a, s, n);
            }
            (this._store = i),
              (this._nameList = (e || []).slice()),
              (this._idList = []),
              (this._nameRepeatCount = {}),
              this._doInit(0, i.count()),
              (this._dimSummary = (0, f.l)(this, this._schema)),
              (this.userOutput = this._dimSummary.userOutput);
          }),
          (t.prototype.appendData = function (t) {
            var e = this._store.appendData(t);
            this._doInit(e[0], e[1]);
          }),
          (t.prototype.appendValues = function (t, e) {
            var n = this._store.appendValues(t, e && e.length),
              i = n.start,
              r = n.end,
              o = this._shouldMakeIdFromName();
            if ((this._updateOrdinalMeta(), e))
              for (var a = i; a < r; a++) {
                var s = a - i;
                (this._nameList[a] = e[s]), o && c(this, a);
              }
          }),
          (t.prototype._updateOrdinalMeta = function () {
            for (
              var t = this._store, e = this.dimensions, n = 0;
              n < e.length;
              n++
            ) {
              var i = this._dimInfos[e[n]];
              i.ordinalMeta &&
                t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
            }
          }),
          (t.prototype._shouldMakeIdFromName = function () {
            var t = this._store.getProvider();
            return (
              null == this._idDimIdx &&
              t.getSource().sourceFormat !== m.XO &&
              !t.fillStorage
            );
          }),
          (t.prototype._doInit = function (t, e) {
            if (!(t >= e)) {
              var n = this._store.getProvider();
              this._updateOrdinalMeta();
              var r = this._nameList,
                o = this._idList;
              if (n.getSource().sourceFormat === m.mK && !n.pure)
                for (var a = [], s = t; s < e; s++) {
                  var u = n.getItem(s, a);
                  if (
                    (!this.hasItemOption &&
                      (0, y.zu)(u) &&
                      (this.hasItemOption = !0),
                    u)
                  ) {
                    var l = u.name;
                    null == r[s] && null != l && (r[s] = (0, y.vS)(l, null));
                    var h = u.id;
                    null == o[s] && null != h && (o[s] = (0, y.vS)(h, null));
                  }
                }
              if (this._shouldMakeIdFromName())
                for (s = t; s < e; s++) c(this, s);
              i(this);
            }
          }),
          (t.prototype.getApproximateExtent = function (t) {
            return (
              this._approximateExtent[t] ||
              this._store.getDataExtent(this._getStoreDimIndex(t))
            );
          }),
          (t.prototype.setApproximateExtent = function (t, e) {
            (e = this.getDimension(e)),
              (this._approximateExtent[e] = t.slice());
          }),
          (t.prototype.getCalculationInfo = function (t) {
            return this._calculationInfo[t];
          }),
          (t.prototype.setCalculationInfo = function (t, e) {
            A(t)
              ? l.extend(this._calculationInfo, t)
              : (this._calculationInfo[t] = e);
          }),
          (t.prototype.getName = function (t) {
            var e = this.getRawIndex(t),
              n = this._nameList[e];
            return (
              null == n &&
                null != this._nameDimIdx &&
                (n = o(this, this._nameDimIdx, e)),
              null == n && (n = ""),
              n
            );
          }),
          (t.prototype._getCategory = function (t, e) {
            var n = this._store.get(t, e),
              i = this._store.getOrdinalMeta(t);
            return i ? i.categories[n] : n;
          }),
          (t.prototype.getId = function (t) {
            return r(this, this.getRawIndex(t));
          }),
          (t.prototype.count = function () {
            return this._store.count();
          }),
          (t.prototype.get = function (t, e) {
            var n = this._store,
              i = this._dimInfos[t];
            if (i) return n.get(i.storeDimIndex, e);
          }),
          (t.prototype.getByRawIndex = function (t, e) {
            var n = this._store,
              i = this._dimInfos[t];
            if (i) return n.getByRawIndex(i.storeDimIndex, e);
          }),
          (t.prototype.getIndices = function () {
            return this._store.getIndices();
          }),
          (t.prototype.getDataExtent = function (t) {
            return this._store.getDataExtent(this._getStoreDimIndex(t));
          }),
          (t.prototype.getSum = function (t) {
            return this._store.getSum(this._getStoreDimIndex(t));
          }),
          (t.prototype.getMedian = function (t) {
            return this._store.getMedian(this._getStoreDimIndex(t));
          }),
          (t.prototype.getValues = function (t, e) {
            var n = this,
              i = this._store;
            return l.isArray(t)
              ? i.getValues(
                  w(t, function (t) {
                    return n._getStoreDimIndex(t);
                  }),
                  e
                )
              : i.getValues(t);
          }),
          (t.prototype.hasValue = function (t) {
            for (
              var e = this._dimSummary.dataDimIndicesOnCoord,
                n = 0,
                i = e.length;
              n < i;
              n++
            )
              if (isNaN(this._store.get(e[n], t))) return !1;
            return !0;
          }),
          (t.prototype.indexOfName = function (t) {
            for (var e = 0, n = this._store.count(); e < n; e++)
              if (this.getName(e) === t) return e;
            return -1;
          }),
          (t.prototype.getRawIndex = function (t) {
            return this._store.getRawIndex(t);
          }),
          (t.prototype.indexOfRawIndex = function (t) {
            return this._store.indexOfRawIndex(t);
          }),
          (t.prototype.rawIndexOf = function (t, e) {
            var n = t && this._invertedIndicesMap[t];
            var i = n && n[e];
            return null == i || isNaN(i) ? -1 : i;
          }),
          (t.prototype.indicesOfNearest = function (t, e, n) {
            return this._store.indicesOfNearest(
              this._getStoreDimIndex(t),
              e,
              n
            );
          }),
          (t.prototype.each = function (t, e, n) {
            l.isFunction(t) && ((n = e), (e = t), (t = []));
            var i = n || this,
              r = w(a(t), this._getStoreDimIndex, this);
            this._store.each(r, i ? l.bind(e, i) : e);
          }),
          (t.prototype.filterSelf = function (t, e, n) {
            l.isFunction(t) && ((n = e), (e = t), (t = []));
            var i = n || this,
              r = w(a(t), this._getStoreDimIndex, this);
            return (
              (this._store = this._store.filter(r, i ? l.bind(e, i) : e)), this
            );
          }),
          (t.prototype.selectRange = function (t) {
            var e = this,
              n = {},
              i = l.keys(t),
              r = [];
            return (
              l.each(i, function (i) {
                var o = e._getStoreDimIndex(i);
                (n[o] = t[i]), r.push(o);
              }),
              (this._store = this._store.selectRange(n)),
              this
            );
          }),
          (t.prototype.mapArray = function (t, e, n) {
            l.isFunction(t) && ((n = e), (e = t), (t = [])), (n = n || this);
            var i = [];
            return (
              this.each(
                t,
                function () {
                  i.push(e && e.apply(this, arguments));
                },
                n
              ),
              i
            );
          }),
          (t.prototype.map = function (t, e, n, i) {
            var r = n || i || this,
              o = w(a(t), this._getStoreDimIndex, this),
              s = u(this);
            return (s._store = this._store.map(o, r ? l.bind(e, r) : e)), s;
          }),
          (t.prototype.modify = function (t, e, n, i) {
            var r = n || i || this;
            var o = w(a(t), this._getStoreDimIndex, this);
            this._store.modify(o, r ? l.bind(e, r) : e);
          }),
          (t.prototype.downSample = function (t, e, n, i) {
            var r = u(this);
            return (
              (r._store = this._store.downSample(
                this._getStoreDimIndex(t),
                e,
                n,
                i
              )),
              r
            );
          }),
          (t.prototype.minmaxDownSample = function (t, e) {
            var n = u(this);
            return (
              (n._store = this._store.minmaxDownSample(
                this._getStoreDimIndex(t),
                e
              )),
              n
            );
          }),
          (t.prototype.lttbDownSample = function (t, e) {
            var n = u(this);
            return (
              (n._store = this._store.lttbDownSample(
                this._getStoreDimIndex(t),
                e
              )),
              n
            );
          }),
          (t.prototype.getRawDataItem = function (t) {
            return this._store.getRawDataItem(t);
          }),
          (t.prototype.getItemModel = function (t) {
            var e = this.hostModel,
              n = this.getRawDataItem(t);
            return new h.A(n, e, e && e.ecModel);
          }),
          (t.prototype.diff = function (t) {
            var e = this;
            return new d.A(
              t ? t.getStore().getIndices() : [],
              this.getStore().getIndices(),
              function (e) {
                return r(t, e);
              },
              function (t) {
                return r(e, t);
              }
            );
          }),
          (t.prototype.getVisual = function (t) {
            var e = this._visual;
            return e && e[t];
          }),
          (t.prototype.setVisual = function (t, e) {
            (this._visual = this._visual || {}),
              A(t) ? l.extend(this._visual, t) : (this._visual[t] = e);
          }),
          (t.prototype.getItemVisual = function (t, e) {
            var n = this._itemVisuals[t],
              i = n && n[e];
            return null == i ? this.getVisual(e) : i;
          }),
          (t.prototype.hasItemVisual = function () {
            return this._itemVisuals.length > 0;
          }),
          (t.prototype.ensureUniqueItemVisual = function (t, e) {
            var n = this._itemVisuals,
              i = n[t];
            i || (i = n[t] = {});
            var r = i[e];
            return (
              null == r &&
                ((r = this.getVisual(e)),
                l.isArray(r) ? (r = r.slice()) : A(r) && (r = l.extend({}, r)),
                (i[e] = r)),
              r
            );
          }),
          (t.prototype.setItemVisual = function (t, e, n) {
            var i = this._itemVisuals[t] || {};
            (this._itemVisuals[t] = i), A(e) ? l.extend(i, e) : (i[e] = n);
          }),
          (t.prototype.clearAllVisual = function () {
            (this._visual = {}), (this._itemVisuals = []);
          }),
          (t.prototype.setLayout = function (t, e) {
            A(t) ? l.extend(this._layout, t) : (this._layout[t] = e);
          }),
          (t.prototype.getLayout = function (t) {
            return this._layout[t];
          }),
          (t.prototype.getItemLayout = function (t) {
            return this._itemLayouts[t];
          }),
          (t.prototype.setItemLayout = function (t, e, n) {
            this._itemLayouts[t] = n
              ? l.extend(this._itemLayouts[t] || {}, e)
              : e;
          }),
          (t.prototype.clearItemLayouts = function () {
            this._itemLayouts.length = 0;
          }),
          (t.prototype.setItemGraphicEl = function (t, e) {
            var n = this.hostModel && this.hostModel.seriesIndex;
            (0, v.a)(n, this.dataType, t, e), (this._graphicEls[t] = e);
          }),
          (t.prototype.getItemGraphicEl = function (t) {
            return this._graphicEls[t];
          }),
          (t.prototype.eachItemGraphicEl = function (t, e) {
            l.each(this._graphicEls, function (n, i) {
              n && t && t.call(e, n, i);
            });
          }),
          (t.prototype.cloneShallow = function (e) {
            return (
              e ||
                (e = new t(
                  this._schema
                    ? this._schema
                    : w(this.dimensions, this._getDimInfo, this),
                  this.hostModel
                )),
              s(e, this),
              (e._store = this._store),
              e
            );
          }),
          (t.prototype.wrapMethod = function (t, e) {
            var n = this[t];
            l.isFunction(n) &&
              ((this.__wrappedMethods = this.__wrappedMethods || []),
              this.__wrappedMethods.push(t),
              (this[t] = function () {
                var t = n.apply(this, arguments);
                return e.apply(this, [t].concat(l.slice(arguments)));
              }));
          }),
          (t.internalField =
            ((i = function (t) {
              var e = t._invertedIndicesMap;
              l.each(e, function (n, i) {
                var r = t._dimInfos[i],
                  o = r.ordinalMeta,
                  a = t._store;
                if (o) {
                  n = e[i] = new I(o.categories.length);
                  for (var s = 0; s < n.length; s++) n[s] = -1;
                  for (s = 0; s < a.count(); s++)
                    n[a.get(r.storeDimIndex, s)] = s;
                }
              });
            }),
            (o = function (t, e, n) {
              return (0, y.vS)(t._getCategory(e, n), null);
            }),
            (r = function (t, e) {
              var n = t._idList[e];
              return (
                null == n && null != t._idDimIdx && (n = o(t, t._idDimIdx, e)),
                null == n && (n = "e\0\0" + e),
                n
              );
            }),
            (a = function (t) {
              return l.isArray(t) || (t = null != t ? [t] : []), t;
            }),
            (u = function (e) {
              var n = new t(
                e._schema ? e._schema : w(e.dimensions, e._getDimInfo, e),
                e.hostModel
              );
              return s(n, e), n;
            }),
            (s = function (t, e) {
              l.each(D.concat(e.__wrappedMethods || []), function (n) {
                e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
                (t.__wrappedMethods = e.__wrappedMethods),
                l.each(S, function (n) {
                  t[n] = l.clone(e[n]);
                }),
                (t._calculationInfo = l.extend({}, e._calculationInfo));
            }),
            void (c = function (t, e) {
              var n = t._nameList,
                i = t._idList,
                r = t._nameDimIdx,
                a = t._idDimIdx,
                s = n[e],
                u = i[e];
              if (
                (null == s && null != r && (n[e] = s = o(t, r, e)),
                null == u && null != a && (i[e] = u = o(t, a, e)),
                null == u && null != s)
              ) {
                var c = t._nameRepeatCount,
                  l = (c[s] = (c[s] || 0) + 1);
                (u = s), l > 1 && (u += "__ec__" + l), (i[e] = u);
              }
            }))),
          t
        );
      })();
    },
    92950: (t, e, n) => {
      n.d(e, { Fl: () => h, Pn: () => a, zC: () => u, zs: () => p });
      var i = n(85941),
        r = n(70441),
        o = n(88);
      function a(t, e) {
        var n = e && e.type;
        return "ordinal" === n
          ? t
          : ("time" !== n ||
              (0, r.isNumber)(t) ||
              null == t ||
              "-" === t ||
              (t = +(0, i._U)(t)),
            null == t || "" === t ? NaN : Number(t));
      }
      var s = (0, r.createHashMap)({
        number: function (t) {
          return parseFloat(t);
        },
        time: function (t) {
          return +(0, i._U)(t);
        },
        trim: function (t) {
          return (0, r.isString)(t) ? (0, r.trim)(t) : t;
        },
      });
      function u(t) {
        return s.get(t);
      }
      var c = {
          lt: function (t, e) {
            return t < e;
          },
          lte: function (t, e) {
            return t <= e;
          },
          gt: function (t, e) {
            return t > e;
          },
          gte: function (t, e) {
            return t >= e;
          },
        },
        l = (function () {
          function t(t, e) {
            if (!(0, r.isNumber)(e)) {
              0, (0, o.$8)("");
            }
            (this._opFn = c[t]), (this._rvalFloat = (0, i.Sm)(e));
          }
          return (
            (t.prototype.evaluate = function (t) {
              return (0, r.isNumber)(t)
                ? this._opFn(t, this._rvalFloat)
                : this._opFn((0, i.Sm)(t), this._rvalFloat);
            }),
            t
          );
        })(),
        h = (function () {
          function t(t, e) {
            var n = "desc" === t;
            (this._resultLT = n ? 1 : -1),
              null == e && (e = n ? "min" : "max"),
              (this._incomparable = "min" === e ? -1 / 0 : 1 / 0);
          }
          return (
            (t.prototype.evaluate = function (t, e) {
              var n = (0, r.isNumber)(t) ? t : (0, i.Sm)(t),
                o = (0, r.isNumber)(e) ? e : (0, i.Sm)(e),
                a = isNaN(n),
                s = isNaN(o);
              if (
                (a && (n = this._incomparable),
                s && (o = this._incomparable),
                a && s)
              ) {
                var u = (0, r.isString)(t),
                  c = (0, r.isString)(e);
                u && (n = c ? t : 0), c && (o = u ? e : 0);
              }
              return n < o ? this._resultLT : n > o ? -this._resultLT : 0;
            }),
            t
          );
        })(),
        d = (function () {
          function t(t, e) {
            (this._rval = e),
              (this._isEQ = t),
              (this._rvalTypeof = typeof e),
              (this._rvalFloat = (0, i.Sm)(e));
          }
          return (
            (t.prototype.evaluate = function (t) {
              var e = t === this._rval;
              if (!e) {
                var n = typeof t;
                n === this._rvalTypeof ||
                  ("number" !== n && "number" !== this._rvalTypeof) ||
                  (e = (0, i.Sm)(t) === this._rvalFloat);
              }
              return this._isEQ ? e : !e;
            }),
            t
          );
        })();
      function p(t, e) {
        return "eq" === t || "ne" === t
          ? new d("eq" === t, e)
          : (0, r.hasOwn)(c, t)
          ? new l(t, e)
          : null;
      }
    },
    94665: (t, e, n) => {
      n.d(e, {
        FQ: () => gt,
        Ng: () => se,
        p5: () => Re,
        El: () => ct,
        zm: () => ce,
        Zf: () => ue,
        AS: () => le,
        Bo: () => Me,
        FP: () => he,
        aQ: () => de,
        ZB: () => be,
        Ts: () => ae,
        OH: () => _e,
        pX: () => xe,
        Oh: () => Ae,
        Ej: () => Se,
        E: () => nt.E,
        mz: () => Ce,
        cf: () => me,
        tb: () => ye,
        lP: () => fe,
        qg: () => ge,
        bf: () => pe,
        iY: () => Le,
        xV: () => ve,
        AF: () => we,
        vV: () => Te,
        rE: () => ut,
      });
      var i = n(37292),
        r = n(79124),
        o = n(70441),
        a = n(73830),
        s = n(8599),
        u = n(15706),
        c = n(31813),
        l = [
          "getDom",
          "getZr",
          "getWidth",
          "getHeight",
          "getDevicePixelRatio",
          "dispatchAction",
          "isSSR",
          "isDisposed",
          "on",
          "off",
          "getDataURL",
          "getConnectedDataURL",
          "getOption",
          "getId",
          "updateLabelLayout",
        ];
      const h = function (t) {
        o.each(
          l,
          function (e) {
            this[e] = o.bind(t[e], t);
          },
          this
        );
      };
      var d = n(84114),
        p = n(12175),
        f = n(97335),
        g = n(96646),
        m = n(15230),
        y = n(76072),
        v = n(29379),
        _ = n(19084),
        x = n(70867),
        M = n(39253),
        A = n(70),
        w = n(3569),
        I = n(41406),
        D = n(34575),
        S = n(27904),
        T = n(84259),
        C = n(57931),
        b = n(65968),
        L = n(42953),
        R = (function () {
          function t(t, e, n, i) {
            (this._stageTaskMap = (0, o.createHashMap)()),
              (this.ecInstance = t),
              (this.api = e),
              (n = this._dataProcessorHandlers = n.slice()),
              (i = this._visualHandlers = i.slice()),
              (this._allHandlers = n.concat(i));
          }
          return (
            (t.prototype.restoreData = function (t, e) {
              t.restoreData(e),
                this._stageTaskMap.each(function (t) {
                  var e = t.overallTask;
                  e && e.dirty();
                });
            }),
            (t.prototype.getPerformArgs = function (t, e) {
              if (t.__pipeline) {
                var n = this._pipelineMap.get(t.__pipeline.id),
                  i = n.context,
                  r =
                    !e &&
                    n.progressiveEnabled &&
                    (!i || i.progressiveRender) &&
                    t.__idxInPipeline > n.blockIndex
                      ? n.step
                      : null,
                  o = i && i.modDataCount;
                return {
                  step: r,
                  modBy: null != o ? Math.ceil(o / r) : null,
                  modDataCount: o,
                };
              }
            }),
            (t.prototype.getPipeline = function (t) {
              return this._pipelineMap.get(t);
            }),
            (t.prototype.updateStreamModes = function (t, e) {
              var n = this._pipelineMap.get(t.uid),
                i = t.getData().count(),
                r =
                  n.progressiveEnabled &&
                  e.incrementalPrepareRender &&
                  i >= n.threshold,
                o = t.get("large") && i >= t.get("largeThreshold"),
                a = "mod" === t.get("progressiveChunkMode") ? i : null;
              t.pipelineContext = n.context = {
                progressiveRender: r,
                modDataCount: a,
                large: o,
              };
            }),
            (t.prototype.restorePipelines = function (t) {
              var e = this,
                n = (e._pipelineMap = (0, o.createHashMap)());
              t.eachSeries(function (t) {
                var i = t.getProgressive(),
                  r = t.uid;
                n.set(r, {
                  id: r,
                  head: null,
                  tail: null,
                  threshold: t.getProgressiveThreshold(),
                  progressiveEnabled:
                    i && !(t.preventIncremental && t.preventIncremental()),
                  blockIndex: -1,
                  step: Math.round(i || 700),
                  count: 0,
                }),
                  e._pipe(t, t.dataTask);
              });
            }),
            (t.prototype.prepareStageTasks = function () {
              var t = this._stageTaskMap,
                e = this.api.getModel(),
                n = this.api;
              (0, o.each)(
                this._allHandlers,
                function (i) {
                  var r = t.get(i.uid) || t.set(i.uid, {});
                  (0, o.assert)(!(i.reset && i.overallReset), ""),
                    i.reset && this._createSeriesStageTask(i, r, e, n),
                    i.overallReset && this._createOverallStageTask(i, r, e, n);
                },
                this
              );
            }),
            (t.prototype.prepareView = function (t, e, n, i) {
              var r = t.renderTask,
                o = r.context;
              (o.model = e),
                (o.ecModel = n),
                (o.api = i),
                (r.__block = !t.incrementalPrepareRender),
                this._pipe(e, r);
            }),
            (t.prototype.performDataProcessorTasks = function (t, e) {
              this._performStageTasks(this._dataProcessorHandlers, t, e, {
                block: !0,
              });
            }),
            (t.prototype.performVisualTasks = function (t, e, n) {
              this._performStageTasks(this._visualHandlers, t, e, n);
            }),
            (t.prototype._performStageTasks = function (t, e, n, i) {
              i = i || {};
              var r = !1,
                a = this;
              function s(t, e) {
                return (
                  t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
                );
              }
              (0, o.each)(t, function (t, o) {
                if (!i.visualType || i.visualType === t.visualType) {
                  var u = a._stageTaskMap.get(t.uid),
                    c = u.seriesTaskMap,
                    l = u.overallTask;
                  if (l) {
                    var h,
                      d = l.agentStubMap;
                    d.each(function (t) {
                      s(i, t) && (t.dirty(), (h = !0));
                    }),
                      h && l.dirty(),
                      a.updatePayload(l, n);
                    var p = a.getPerformArgs(l, i.block);
                    d.each(function (t) {
                      t.perform(p);
                    }),
                      l.perform(p) && (r = !0);
                  } else
                    c &&
                      c.each(function (o, u) {
                        s(i, o) && o.dirty();
                        var c = a.getPerformArgs(o, i.block);
                        (c.skip =
                          !t.performRawSeries &&
                          e.isSeriesFiltered(o.context.model)),
                          a.updatePayload(o, n),
                          o.perform(c) && (r = !0);
                      });
                }
              }),
                (this.unfinished = r || this.unfinished);
            }),
            (t.prototype.performSeriesTasks = function (t) {
              var e;
              t.eachSeries(function (t) {
                e = t.dataTask.perform() || e;
              }),
                (this.unfinished = e || this.unfinished);
            }),
            (t.prototype.plan = function () {
              this._pipelineMap.each(function (t) {
                var e = t.tail;
                do {
                  if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break;
                  }
                  e = e.getUpstream();
                } while (e);
              });
            }),
            (t.prototype.updatePayload = function (t, e) {
              "remain" !== e && (t.context.payload = e);
            }),
            (t.prototype._createSeriesStageTask = function (t, e, n, i) {
              var r = this,
                a = e.seriesTaskMap,
                s = (e.seriesTaskMap = (0, o.createHashMap)()),
                u = t.seriesType,
                c = t.getTargetSeries;
              function l(e) {
                var o = e.uid,
                  u = s.set(
                    o,
                    (a && a.get(o)) || (0, b.U)({ plan: P, reset: B, count: V })
                  );
                (u.context = {
                  model: e,
                  ecModel: n,
                  api: i,
                  useClearVisual: t.isVisual && !t.isLayout,
                  plan: t.plan,
                  reset: t.reset,
                  scheduler: r,
                }),
                  r._pipe(e, u);
              }
              t.createOnAllSeries
                ? n.eachRawSeries(l)
                : u
                ? n.eachRawSeriesByType(u, l)
                : c && c(n, i).each(l);
            }),
            (t.prototype._createOverallStageTask = function (t, e, n, i) {
              var r = this,
                a = (e.overallTask = e.overallTask || (0, b.U)({ reset: k }));
              a.context = {
                ecModel: n,
                api: i,
                overallReset: t.overallReset,
                scheduler: r,
              };
              var s = a.agentStubMap,
                u = (a.agentStubMap = (0, o.createHashMap)()),
                c = t.seriesType,
                l = t.getTargetSeries,
                h = !0,
                d = !1;
              function p(t) {
                var e = t.uid,
                  n = u.set(
                    e,
                    (s && s.get(e)) ||
                      ((d = !0), (0, b.U)({ reset: N, onDirty: O }))
                  );
                (n.context = { model: t, overallProgress: h }),
                  (n.agent = a),
                  (n.__block = h),
                  r._pipe(t, n);
              }
              (0, o.assert)(!t.createOnAllSeries, ""),
                c
                  ? n.eachRawSeriesByType(c, p)
                  : l
                  ? l(n, i).each(p)
                  : ((h = !1), (0, o.each)(n.getSeries(), p)),
                d && a.dirty();
            }),
            (t.prototype._pipe = function (t, e) {
              var n = t.uid,
                i = this._pipelineMap.get(n);
              !i.head && (i.head = e),
                i.tail && i.tail.pipe(e),
                (i.tail = e),
                (e.__idxInPipeline = i.count++),
                (e.__pipeline = i);
            }),
            (t.wrapStageHandler = function (t, e) {
              return (
                (0, o.isFunction)(t) &&
                  (t = { overallReset: t, seriesType: G(t) }),
                (t.uid = (0, L.$Q)("stageHandler")),
                e && (t.visualType = e),
                t
              );
            }),
            t
          );
        })();
      function k(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
      }
      function N(t) {
        return t.overallProgress && E;
      }
      function E() {
        this.agent.dirty(), this.getDownstream().dirty();
      }
      function O() {
        this.agent && this.agent.dirty();
      }
      function P(t) {
        return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
      }
      function B(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = (t.resetDefines = (0, D.qB)(
          t.reset(t.model, t.ecModel, t.api, t.payload)
        ));
        return e.length > 1
          ? (0, o.map)(e, function (t, e) {
              return z(e);
            })
          : F;
      }
      var F = z(0);
      function z(t) {
        return function (e, n) {
          var i = n.data,
            r = n.resetDefines[t];
          if (r && r.dataEach)
            for (var o = e.start; o < e.end; o++) r.dataEach(i, o);
          else r && r.progress && r.progress(e, i);
        };
      }
      function V(t) {
        return t.data.count();
      }
      function G(t) {
        H = null;
        try {
          t(W, U);
        } catch (e) {}
        return H;
      }
      var H,
        W = {},
        U = {};
      function j(t, e) {
        for (var n in e.prototype) t[n] = o.noop;
      }
      j(W, c.A),
        j(U, h),
        (W.eachSeriesByType = W.eachRawSeriesByType =
          function (t) {
            H = t;
          }),
        (W.eachComponent = function (t) {
          "series" === t.mainType && t.subType && (H = t.subType);
        });
      const Z = R;
      var K = n(81535),
        $ = n(39927),
        J = n(56092),
        X = n(29344),
        q = n(94488),
        Y = n(26644),
        Q = n(88),
        tt = n(74263),
        et = n(20807),
        nt = n(71984),
        it = n(31402),
        rt = n(90715);
      const ot = new u.A();
      var at = n(62346),
        st = n(55251),
        ut = "5.6.0",
        ct = { zrender: "5.6.1" },
        lt = 2e3,
        ht = 1e3,
        dt = 2e3,
        pt = 3e3,
        ft = 4500,
        gt = {
          PROCESSOR: { FILTER: 1e3, SERIES_FILTER: 800, STATISTIC: 5e3 },
          VISUAL: {
            LAYOUT: ht,
            PROGRESSIVE_LAYOUT: 1100,
            GLOBAL: dt,
            CHART: pt,
            POST_CHART_LAYOUT: 4600,
            COMPONENT: 4e3,
            BRUSH: 5e3,
            CHART_ITEM: ft,
            ARIA: 6e3,
            DECAL: 7e3,
          },
        },
        mt = "__flagInMainProcess",
        yt = "__pendingUpdate",
        vt = "__needsUpdateStatus",
        _t = /^[a-zA-Z0-9_]+$/,
        xt = "__connectUpdateStatus";
      function Mt(t) {
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          if (!this.isDisposed()) return wt(this, t, e);
          Kt(this.id);
        };
      }
      function At(t) {
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          return wt(this, t, e);
        };
      }
      function wt(t, e, n) {
        return (
          (n[0] = n[0] && n[0].toLowerCase()), u.A.prototype[e].apply(t, n)
        );
      }
      var It,
        Dt,
        St,
        Tt,
        Ct,
        bt,
        Lt,
        Rt,
        kt,
        Nt,
        Et,
        Ot,
        Pt,
        Bt,
        Ft,
        zt,
        Vt,
        Gt,
        Ht = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (0, i.C6)(e, t), e;
        })(u.A),
        Wt = Ht.prototype;
      (Wt.on = At("on")), (Wt.off = At("off"));
      var Ut = (function (t) {
          function e(e, n, i) {
            var a = t.call(this, new X.d()) || this;
            (a._chartsViews = []),
              (a._chartsMap = {}),
              (a._componentsViews = []),
              (a._componentsMap = {}),
              (a._pendingActions = []),
              (i = i || {}),
              (0, o.isString)(n) && (n = Qt[n]),
              (a._dom = e);
            i.ssr &&
              r.registerSSRDataGetter(function (t) {
                var e = (0, w.z)(t),
                  n = e.dataIndex;
                if (null != n) {
                  var i = (0, o.createHashMap)();
                  return (
                    i.set("series_index", e.seriesIndex),
                    i.set("data_index", n),
                    e.ssrType && i.set("ssr_type", e.ssrType),
                    i
                  );
                }
              });
            var u = (a._zr = r.init(e, {
              renderer: i.renderer || "canvas",
              devicePixelRatio: i.devicePixelRatio,
              width: i.width,
              height: i.height,
              ssr: i.ssr,
              useDirtyRect: (0, o.retrieve2)(i.useDirtyRect, !1),
              useCoarsePointer: (0, o.retrieve2)(i.useCoarsePointer, "auto"),
              pointerSize: i.pointerSize,
            }));
            (a._ssr = i.ssr),
              (a._throttledZrFlush = (0, S.nF)((0, o.bind)(u.flush, u), 17)),
              (n = (0, o.clone)(n)) && (0, f.A)(n, !0),
              (a._theme = n),
              (a._locale = (0, nt.A$)(i.locale || nt.Lv)),
              (a._coordSysMgr = new d.A());
            var c = (a._api = Ft(a));
            function l(t, e) {
              return t.__prio - e.__prio;
            }
            return (
              (0, s.A)(Yt, l),
              (0, s.A)(Xt, l),
              (a._scheduler = new Z(a, c, Xt, Yt)),
              (a._messageCenter = new Ht()),
              a._initEvents(),
              (a.resize = (0, o.bind)(a.resize, a)),
              u.animation.on("frame", a._onframe, a),
              Nt(u, a),
              Et(u, a),
              (0, o.setAsPrimitive)(a),
              a
            );
          }
          return (
            (0, i.C6)(e, t),
            (e.prototype._onframe = function () {
              if (!this._disposed) {
                Gt(this);
                var t = this._scheduler;
                if (this[yt]) {
                  var e = this[yt].silent;
                  this[mt] = !0;
                  try {
                    It(this), Tt.update.call(this, null, this[yt].updateParams);
                  } catch (a) {
                    throw ((this[mt] = !1), (this[yt] = null), a);
                  }
                  this._zr.flush(),
                    (this[mt] = !1),
                    (this[yt] = null),
                    Rt.call(this, e),
                    kt.call(this, e);
                } else if (t.unfinished) {
                  var n = 1,
                    i = this._model,
                    r = this._api;
                  t.unfinished = !1;
                  do {
                    var o = +new Date();
                    t.performSeriesTasks(i),
                      t.performDataProcessorTasks(i),
                      bt(this, i),
                      t.performVisualTasks(i),
                      Bt(this, this._model, r, "remain", {}),
                      (n -= +new Date() - o);
                  } while (n > 0 && t.unfinished);
                  t.unfinished || this._zr.flush();
                }
              }
            }),
            (e.prototype.getDom = function () {
              return this._dom;
            }),
            (e.prototype.getId = function () {
              return this.id;
            }),
            (e.prototype.getZr = function () {
              return this._zr;
            }),
            (e.prototype.isSSR = function () {
              return this._ssr;
            }),
            (e.prototype.setOption = function (t, e, n) {
              if (!this[mt])
                if (this._disposed) Kt(this.id);
                else {
                  var i, r, a;
                  if (
                    ((0, o.isObject)(e) &&
                      ((n = e.lazyUpdate),
                      (i = e.silent),
                      (r = e.replaceMerge),
                      (a = e.transition),
                      (e = e.notMerge)),
                    (this[mt] = !0),
                    !this._model || e)
                  ) {
                    var s = new p.A(this._api),
                      u = this._theme,
                      l = (this._model = new c.A());
                    (l.scheduler = this._scheduler),
                      (l.ssr = this._ssr),
                      l.init(null, null, null, u, this._locale, s);
                  }
                  this._model.setOption(t, { replaceMerge: r }, qt);
                  var h = { seriesTransition: a, optionChanged: !0 };
                  if (n)
                    (this[yt] = { silent: i, updateParams: h }),
                      (this[mt] = !1),
                      this.getZr().wakeUp();
                  else {
                    try {
                      It(this), Tt.update.call(this, null, h);
                    } catch (d) {
                      throw ((this[yt] = null), (this[mt] = !1), d);
                    }
                    this._ssr || this._zr.flush(),
                      (this[yt] = null),
                      (this[mt] = !1),
                      Rt.call(this, i),
                      kt.call(this, i);
                  }
                }
            }),
            (e.prototype.setTheme = function () {
              (0, Q.aT)("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
            }),
            (e.prototype.getModel = function () {
              return this._model;
            }),
            (e.prototype.getOption = function () {
              return this._model && this._model.getOption();
            }),
            (e.prototype.getWidth = function () {
              return this._zr.getWidth();
            }),
            (e.prototype.getHeight = function () {
              return this._zr.getHeight();
            }),
            (e.prototype.getDevicePixelRatio = function () {
              return (
                this._zr.painter.dpr ||
                (a.A.hasGlobalWindow && window.devicePixelRatio) ||
                1
              );
            }),
            (e.prototype.getRenderedCanvas = function (t) {
              return this.renderToCanvas(t);
            }),
            (e.prototype.renderToCanvas = function (t) {
              return (
                (t = t || {}),
                this._zr.painter.getRenderedCanvas({
                  backgroundColor:
                    t.backgroundColor || this._model.get("backgroundColor"),
                  pixelRatio: t.pixelRatio || this.getDevicePixelRatio(),
                })
              );
            }),
            (e.prototype.renderToSVGString = function (t) {
              return (
                (t = t || {}),
                this._zr.painter.renderToString({ useViewBox: t.useViewBox })
              );
            }),
            (e.prototype.getSvgDataURL = function () {
              if (a.A.svgSupported) {
                var t = this._zr,
                  e = t.storage.getDisplayList();
                return (
                  (0, o.each)(e, function (t) {
                    t.stopAnimation(null, !0);
                  }),
                  t.painter.toDataURL()
                );
              }
            }),
            (e.prototype.getDataURL = function (t) {
              if (!this._disposed) {
                var e = (t = t || {}).excludeComponents,
                  n = this._model,
                  i = [],
                  r = this;
                (0, o.each)(e, function (t) {
                  n.eachComponent({ mainType: t }, function (t) {
                    var e = r._componentsMap[t.__viewId];
                    e.group.ignore || (i.push(e), (e.group.ignore = !0));
                  });
                });
                var a =
                  "svg" === this._zr.painter.getType()
                    ? this.getSvgDataURL()
                    : this.renderToCanvas(t).toDataURL(
                        "image/" + ((t && t.type) || "png")
                      );
                return (
                  (0, o.each)(i, function (t) {
                    t.group.ignore = !1;
                  }),
                  a
                );
              }
              Kt(this.id);
            }),
            (e.prototype.getConnectedDataURL = function (t) {
              if (!this._disposed) {
                var e = "svg" === t.type,
                  n = this.group,
                  i = Math.min,
                  a = Math.max,
                  s = 1 / 0;
                if (ne[n]) {
                  var u = s,
                    c = s,
                    l = -1 / 0,
                    h = -1 / 0,
                    d = [],
                    p = (t && t.pixelRatio) || this.getDevicePixelRatio();
                  (0, o.each)(ee, function (r, s) {
                    if (r.group === n) {
                      var p = e
                          ? r.getZr().painter.getSvgDom().innerHTML
                          : r.renderToCanvas((0, o.clone)(t)),
                        f = r.getDom().getBoundingClientRect();
                      (u = i(f.left, u)),
                        (c = i(f.top, c)),
                        (l = a(f.right, l)),
                        (h = a(f.bottom, h)),
                        d.push({ dom: p, left: f.left, top: f.top });
                    }
                  });
                  var f = (l *= p) - (u *= p),
                    g = (h *= p) - (c *= p),
                    m = at.yh.createCanvas(),
                    y = r.init(m, { renderer: e ? "svg" : "canvas" });
                  if ((y.resize({ width: f, height: g }), e)) {
                    var v = "";
                    return (
                      (0, o.each)(d, function (t) {
                        var e = t.left - u,
                          n = t.top - c;
                        v +=
                          '<g transform="translate(' +
                          e +
                          "," +
                          n +
                          ')">' +
                          t.dom +
                          "</g>";
                      }),
                      (y.painter.getSvgRoot().innerHTML = v),
                      t.connectedBackgroundColor &&
                        y.painter.setBackgroundColor(
                          t.connectedBackgroundColor
                        ),
                      y.refreshImmediately(),
                      y.painter.toDataURL()
                    );
                  }
                  return (
                    t.connectedBackgroundColor &&
                      y.add(
                        new _.A({
                          shape: { x: 0, y: 0, width: f, height: g },
                          style: { fill: t.connectedBackgroundColor },
                        })
                      ),
                    (0, o.each)(d, function (t) {
                      var e = new x.Ay({
                        style: {
                          x: t.left * p - u,
                          y: t.top * p - c,
                          image: t.dom,
                        },
                      });
                      y.add(e);
                    }),
                    y.refreshImmediately(),
                    m.toDataURL("image/" + ((t && t.type) || "png"))
                  );
                }
                return this.getDataURL(t);
              }
              Kt(this.id);
            }),
            (e.prototype.convertToPixel = function (t, e) {
              return Ct(this, "convertToPixel", t, e);
            }),
            (e.prototype.convertFromPixel = function (t, e) {
              return Ct(this, "convertFromPixel", t, e);
            }),
            (e.prototype.containPixel = function (t, e) {
              if (!this._disposed) {
                var n,
                  i = this._model,
                  r = D._e(i, t);
                return (
                  (0, o.each)(
                    r,
                    function (t, i) {
                      i.indexOf("Models") >= 0 &&
                        (0, o.each)(
                          t,
                          function (t) {
                            var r = t.coordinateSystem;
                            if (r && r.containPoint)
                              n = n || !!r.containPoint(e);
                            else if ("seriesModels" === i) {
                              var o = this._chartsMap[t.__viewId];
                              o &&
                                o.containPoint &&
                                (n = n || o.containPoint(e, t));
                            } else 0;
                          },
                          this
                        );
                    },
                    this
                  ),
                  !!n
                );
              }
              Kt(this.id);
            }),
            (e.prototype.getVisual = function (t, e) {
              var n = this._model,
                i = D._e(n, t, { defaultMainType: "series" });
              var r = i.seriesModel.getData(),
                o = i.hasOwnProperty("dataIndexInside")
                  ? i.dataIndexInside
                  : i.hasOwnProperty("dataIndex")
                  ? r.indexOfRawIndex(i.dataIndex)
                  : null;
              return null != o ? (0, Y.Ez)(r, o, e) : (0, Y.rI)(r, e);
            }),
            (e.prototype.getViewOfComponentModel = function (t) {
              return this._componentsMap[t.__viewId];
            }),
            (e.prototype.getViewOfSeriesModel = function (t) {
              return this._chartsMap[t.__viewId];
            }),
            (e.prototype._initEvents = function () {
              var t = this;
              (0, o.each)(Zt, function (e) {
                var n = function (n) {
                  var i,
                    r = t.getModel(),
                    a = n.target;
                  if (
                    ("globalout" === e
                      ? (i = {})
                      : a &&
                        (0, it.R)(
                          a,
                          function (t) {
                            var e = (0, w.z)(t);
                            if (e && null != e.dataIndex) {
                              var n =
                                e.dataModel ||
                                r.getSeriesByIndex(e.seriesIndex);
                              return (
                                (i =
                                  (n &&
                                    n.getDataParams(
                                      e.dataIndex,
                                      e.dataType,
                                      a
                                    )) ||
                                  {}),
                                !0
                              );
                            }
                            if (e.eventData)
                              return (i = (0, o.extend)({}, e.eventData)), !0;
                          },
                          !0
                        ),
                    i)
                  ) {
                    var s = i.componentType,
                      u = i.componentIndex;
                    ("markLine" !== s &&
                      "markPoint" !== s &&
                      "markArea" !== s) ||
                      ((s = "series"), (u = i.seriesIndex));
                    var c = s && null != u && r.getComponent(s, u),
                      l =
                        c &&
                        t[
                          "series" === c.mainType
                            ? "_chartsMap"
                            : "_componentsMap"
                        ][c.__viewId];
                    0,
                      (i.event = n),
                      (i.type = e),
                      (t._$eventProcessor.eventInfo = {
                        targetEl: a,
                        packedEvent: i,
                        model: c,
                        view: l,
                      }),
                      t.trigger(e, i);
                  }
                };
                (n.zrEventfulCallAtLast = !0), t._zr.on(e, n, t);
              }),
                (0, o.each)(Jt, function (e, n) {
                  t._messageCenter.on(
                    n,
                    function (t) {
                      this.trigger(n, t);
                    },
                    t
                  );
                }),
                (0, o.each)(["selectchanged"], function (e) {
                  t._messageCenter.on(
                    e,
                    function (t) {
                      this.trigger(e, t);
                    },
                    t
                  );
                }),
                (0, tt.l)(this._messageCenter, this, this._api);
            }),
            (e.prototype.isDisposed = function () {
              return this._disposed;
            }),
            (e.prototype.clear = function () {
              this._disposed ? Kt(this.id) : this.setOption({ series: [] }, !0);
            }),
            (e.prototype.dispose = function () {
              if (this._disposed) Kt(this.id);
              else {
                (this._disposed = !0),
                  this.getDom() && D.Bq(this.getDom(), oe, "");
                var t = this,
                  e = t._api,
                  n = t._model;
                (0, o.each)(t._componentsViews, function (t) {
                  t.dispose(n, e);
                }),
                  (0, o.each)(t._chartsViews, function (t) {
                    t.dispose(n, e);
                  }),
                  t._zr.dispose(),
                  (t._dom =
                    t._model =
                    t._chartsMap =
                    t._componentsMap =
                    t._chartsViews =
                    t._componentsViews =
                    t._scheduler =
                    t._api =
                    t._zr =
                    t._throttledZrFlush =
                    t._theme =
                    t._coordSysMgr =
                    t._messageCenter =
                      null),
                  delete ee[t.id];
              }
            }),
            (e.prototype.resize = function (t) {
              if (!this[mt])
                if (this._disposed) Kt(this.id);
                else {
                  this._zr.resize(t);
                  var e = this._model;
                  if ((this._loadingFX && this._loadingFX.resize(), e)) {
                    var n = e.resetOption("media"),
                      i = t && t.silent;
                    this[yt] &&
                      (null == i && (i = this[yt].silent),
                      (n = !0),
                      (this[yt] = null)),
                      (this[mt] = !0);
                    try {
                      n && It(this),
                        Tt.update.call(this, {
                          type: "resize",
                          animation: (0, o.extend)(
                            { duration: 0 },
                            t && t.animation
                          ),
                        });
                    } catch (r) {
                      throw ((this[mt] = !1), r);
                    }
                    (this[mt] = !1), Rt.call(this, i), kt.call(this, i);
                  }
                }
            }),
            (e.prototype.showLoading = function (t, e) {
              if (this._disposed) Kt(this.id);
              else if (
                ((0, o.isObject)(t) && ((e = t), (t = "")),
                (t = t || "default"),
                this.hideLoading(),
                te[t])
              ) {
                var n = te[t](this._api, e),
                  i = this._zr;
                (this._loadingFX = n), i.add(n);
              }
            }),
            (e.prototype.hideLoading = function () {
              this._disposed
                ? Kt(this.id)
                : (this._loadingFX && this._zr.remove(this._loadingFX),
                  (this._loadingFX = null));
            }),
            (e.prototype.makeActionFromEvent = function (t) {
              var e = (0, o.extend)({}, t);
              return (e.type = Jt[t.type]), e;
            }),
            (e.prototype.dispatchAction = function (t, e) {
              if (this._disposed) Kt(this.id);
              else if (
                ((0, o.isObject)(e) || (e = { silent: !!e }),
                $t[t.type] && this._model)
              )
                if (this[mt]) this._pendingActions.push(t);
                else {
                  var n = e.silent;
                  Lt.call(this, t, n);
                  var i = e.flush;
                  i
                    ? this._zr.flush()
                    : !1 !== i &&
                      a.A.browser.weChat &&
                      this._throttledZrFlush(),
                    Rt.call(this, n),
                    kt.call(this, n);
                }
            }),
            (e.prototype.updateLabelLayout = function () {
              ot.trigger("series:layoutlabels", this._model, this._api, {
                updatedSeries: [],
              });
            }),
            (e.prototype.appendData = function (t) {
              if (this._disposed) Kt(this.id);
              else {
                var e = t.seriesIndex;
                0,
                  this.getModel().getSeriesByIndex(e).appendData(t),
                  (this._scheduler.unfinished = !0),
                  this.getZr().wakeUp();
              }
            }),
            (e.internalField = (function () {
              function t(t) {
                t.clearColorPalette(),
                  t.eachSeries(function (t) {
                    t.clearColorPalette();
                  });
              }
              function e(t) {
                for (
                  var e = [], n = t.currentStates, i = 0;
                  i < n.length;
                  i++
                ) {
                  var r = n[i];
                  "emphasis" !== r &&
                    "blur" !== r &&
                    "select" !== r &&
                    e.push(r);
                }
                t.selected && t.states.select && e.push("select"),
                  t.hoverState === I.e3 && t.states.emphasis
                    ? e.push("emphasis")
                    : t.hoverState === I.zX && t.states.blur && e.push("blur"),
                  t.useStates(e);
              }
              function n(t, e) {
                if (!t.preventAutoZ) {
                  var n = t.get("z") || 0,
                    i = t.get("zlevel") || 0;
                  e.eachRendered(function (t) {
                    return r(t, n, i, -1 / 0), !0;
                  });
                }
              }
              function r(t, e, n, i) {
                var o = t.getTextContent(),
                  a = t.getTextGuideLine();
                if (t.isGroup)
                  for (var s = t.childrenRef(), u = 0; u < s.length; u++)
                    i = Math.max(r(s[u], e, n, i), i);
                else (t.z = e), (t.zlevel = n), (i = Math.max(t.z2, i));
                if (
                  (o &&
                    ((o.z = e), (o.zlevel = n), isFinite(i) && (o.z2 = i + 2)),
                  a)
                ) {
                  var c = t.textGuideLineConfig;
                  (a.z = e),
                    (a.zlevel = n),
                    isFinite(i) && (a.z2 = i + (c && c.showAbove ? 1 : -1));
                }
                return i;
              }
              function u(t, e) {
                e.eachRendered(function (t) {
                  if (!M.LR(t)) {
                    var e = t.getTextContent(),
                      n = t.getTextGuideLine();
                    t.stateTransition && (t.stateTransition = null),
                      e && e.stateTransition && (e.stateTransition = null),
                      n && n.stateTransition && (n.stateTransition = null),
                      t.hasState()
                        ? ((t.prevStates = t.currentStates), t.clearStates())
                        : t.prevStates && (t.prevStates = null);
                  }
                });
              }
              function c(t, n) {
                var i = t.getModel("stateAnimation"),
                  r = t.isAnimationEnabled(),
                  o = i.get("duration"),
                  a =
                    o > 0
                      ? {
                          duration: o,
                          delay: i.get("delay"),
                          easing: i.get("easing"),
                        }
                      : null;
                n.eachRendered(function (t) {
                  if (t.states && t.states.emphasis) {
                    if (M.LR(t)) return;
                    if ((t instanceof A.Ay && (0, I.fz)(t), t.__dirty)) {
                      var n = t.prevStates;
                      n && t.useStates(n);
                    }
                    if (r) {
                      t.stateTransition = a;
                      var i = t.getTextContent(),
                        o = t.getTextGuideLine();
                      i && (i.stateTransition = a),
                        o && (o.stateTransition = a);
                    }
                    t.__dirty && e(t);
                  }
                });
              }
              (It = function (t) {
                var e = t._scheduler;
                e.restorePipelines(t._model),
                  e.prepareStageTasks(),
                  Dt(t, !0),
                  Dt(t, !1),
                  e.plan();
              }),
                (Dt = function (t, e) {
                  for (
                    var n = t._model,
                      i = t._scheduler,
                      r = e ? t._componentsViews : t._chartsViews,
                      o = e ? t._componentsMap : t._chartsMap,
                      a = t._zr,
                      s = t._api,
                      u = 0;
                    u < r.length;
                    u++
                  )
                    r[u].__alive = !1;
                  function c(t) {
                    var u = t.__requireNewView;
                    t.__requireNewView = !1;
                    var c = "_ec_" + t.id + "_" + t.type,
                      l = !u && o[c];
                    if (!l) {
                      var h = (0, J.CC)(t.type);
                      0,
                        (l = new (
                          e ? y.A.getClass(h.main, h.sub) : v.A.getClass(h.sub)
                        )()).init(n, s),
                        (o[c] = l),
                        r.push(l),
                        a.add(l.group);
                    }
                    (t.__viewId = l.__id = c),
                      (l.__alive = !0),
                      (l.__model = t),
                      (l.group.__ecComponentInfo = {
                        mainType: t.mainType,
                        index: t.componentIndex,
                      }),
                      !e && i.prepareView(l, t, n, s);
                  }
                  e
                    ? n.eachComponent(function (t, e) {
                        "series" !== t && c(e);
                      })
                    : n.eachSeries(c);
                  for (u = 0; u < r.length; ) {
                    var l = r[u];
                    l.__alive
                      ? u++
                      : (!e && l.renderTask.dispose(),
                        a.remove(l.group),
                        l.dispose(n, s),
                        r.splice(u, 1),
                        o[l.__id] === l && delete o[l.__id],
                        (l.__id = l.group.__ecComponentInfo = null));
                  }
                }),
                (St = function (t, e, n, i, r) {
                  var a = t._model;
                  if ((a.setUpdatePayload(n), i)) {
                    var s = {};
                    (s[i + "Id"] = n[i + "Id"]),
                      (s[i + "Index"] = n[i + "Index"]),
                      (s[i + "Name"] = n[i + "Name"]);
                    var u = { mainType: i, query: s };
                    r && (u.subType = r);
                    var c,
                      l = n.excludeSeriesId;
                    null != l &&
                      ((c = (0, o.createHashMap)()),
                      (0, o.each)(D.qB(l), function (t) {
                        var e = D.vS(t, null);
                        null != e && c.set(e, !0);
                      })),
                      a &&
                        a.eachComponent(
                          u,
                          function (e) {
                            if (!(c && null != c.get(e.id)))
                              if ((0, I.T$)(n))
                                if (e instanceof m.A)
                                  n.type !== I.h5 ||
                                    n.notBlur ||
                                    e.get(["emphasis", "disabled"]) ||
                                    (0, I.lV)(e, n, t._api);
                                else {
                                  var i = (0, I.Tl)(
                                      e.mainType,
                                      e.componentIndex,
                                      n.name,
                                      t._api
                                    ),
                                    r = i.focusSelf,
                                    a = i.dispatchers;
                                  n.type === I.h5 &&
                                    r &&
                                    !n.notBlur &&
                                    (0, I.Du)(
                                      e.mainType,
                                      e.componentIndex,
                                      t._api
                                    ),
                                    a &&
                                      (0, o.each)(a, function (t) {
                                        n.type === I.h5
                                          ? (0, I.HY)(t)
                                          : (0, I.SD)(t);
                                      });
                                }
                              else
                                (0, I.Lx)(n) &&
                                  e instanceof m.A &&
                                  ((0, I.t6)(e, n, t._api),
                                  (0, I.jA)(e),
                                  Vt(t));
                          },
                          t
                        ),
                      a &&
                        a.eachComponent(
                          u,
                          function (e) {
                            (c && null != c.get(e.id)) ||
                              h(
                                t[
                                  "series" === i
                                    ? "_chartsMap"
                                    : "_componentsMap"
                                ][e.__viewId]
                              );
                          },
                          t
                        );
                  } else
                    (0, o.each)(
                      [].concat(t._componentsViews).concat(t._chartsViews),
                      h
                    );
                  function h(i) {
                    i && i.__alive && i[e] && i[e](i.__model, a, t._api, n);
                  }
                }),
                (Tt = {
                  prepareAndUpdate: function (t) {
                    It(this),
                      Tt.update.call(this, t, {
                        optionChanged: null != t.newOption,
                      });
                  },
                  update: function (e, n) {
                    var i = this._model,
                      r = this._api,
                      o = this._zr,
                      a = this._coordSysMgr,
                      s = this._scheduler;
                    if (i) {
                      i.setUpdatePayload(e),
                        s.restoreData(i, e),
                        s.performSeriesTasks(i),
                        a.create(i, r),
                        s.performDataProcessorTasks(i, e),
                        bt(this, i),
                        a.update(i, r),
                        t(i),
                        s.performVisualTasks(i, e),
                        Ot(this, i, r, e, n);
                      var u = i.get("backgroundColor") || "transparent",
                        c = i.get("darkMode");
                      o.setBackgroundColor(u),
                        null != c && "auto" !== c && o.setDarkMode(c),
                        ot.trigger("afterupdate", i, r);
                    }
                  },
                  updateTransform: function (e) {
                    var n = this,
                      i = this._model,
                      r = this._api;
                    if (i) {
                      i.setUpdatePayload(e);
                      var a = [];
                      i.eachComponent(function (t, o) {
                        if ("series" !== t) {
                          var s = n.getViewOfComponentModel(o);
                          if (s && s.__alive)
                            if (s.updateTransform) {
                              var u = s.updateTransform(o, i, r, e);
                              u && u.update && a.push(s);
                            } else a.push(s);
                        }
                      });
                      var s = (0, o.createHashMap)();
                      i.eachSeries(function (t) {
                        var o = n._chartsMap[t.__viewId];
                        if (o.updateTransform) {
                          var a = o.updateTransform(t, i, r, e);
                          a && a.update && s.set(t.uid, 1);
                        } else s.set(t.uid, 1);
                      }),
                        t(i),
                        this._scheduler.performVisualTasks(i, e, {
                          setDirty: !0,
                          dirtyMap: s,
                        }),
                        Bt(this, i, r, e, {}, s),
                        ot.trigger("afterupdate", i, r);
                    }
                  },
                  updateView: function (e) {
                    var n = this._model;
                    n &&
                      (n.setUpdatePayload(e),
                      v.A.markUpdateMethod(e, "updateView"),
                      t(n),
                      this._scheduler.performVisualTasks(n, e, {
                        setDirty: !0,
                      }),
                      Ot(this, n, this._api, e, {}),
                      ot.trigger("afterupdate", n, this._api));
                  },
                  updateVisual: function (e) {
                    var n = this,
                      i = this._model;
                    i &&
                      (i.setUpdatePayload(e),
                      i.eachSeries(function (t) {
                        t.getData().clearAllVisual();
                      }),
                      v.A.markUpdateMethod(e, "updateVisual"),
                      t(i),
                      this._scheduler.performVisualTasks(i, e, {
                        visualType: "visual",
                        setDirty: !0,
                      }),
                      i.eachComponent(function (t, r) {
                        if ("series" !== t) {
                          var o = n.getViewOfComponentModel(r);
                          o && o.__alive && o.updateVisual(r, i, n._api, e);
                        }
                      }),
                      i.eachSeries(function (t) {
                        n._chartsMap[t.__viewId].updateVisual(t, i, n._api, e);
                      }),
                      ot.trigger("afterupdate", i, this._api));
                  },
                  updateLayout: function (t) {
                    Tt.update.call(this, t);
                  },
                }),
                (Ct = function (t, e, n, i) {
                  if (t._disposed) Kt(t.id);
                  else {
                    for (
                      var r,
                        o = t._model,
                        a = t._coordSysMgr.getCoordinateSystems(),
                        s = D._e(o, n),
                        u = 0;
                      u < a.length;
                      u++
                    ) {
                      var c = a[u];
                      if (c[e] && null != (r = c[e](o, s, i))) return r;
                    }
                    0;
                  }
                }),
                (bt = function (t, e) {
                  var n = t._chartsMap,
                    i = t._scheduler;
                  e.eachSeries(function (t) {
                    i.updateStreamModes(t, n[t.__viewId]);
                  });
                }),
                (Lt = function (t, e) {
                  var n = this,
                    i = this.getModel(),
                    r = t.type,
                    a = t.escapeConnect,
                    s = $t[r],
                    u = s.actionInfo,
                    c = (u.update || "update").split(":"),
                    l = c.pop(),
                    h = null != c[0] && (0, J.CC)(c[0]);
                  this[mt] = !0;
                  var d = [t],
                    p = !1;
                  t.batch &&
                    ((p = !0),
                    (d = (0, o.map)(t.batch, function (e) {
                      return (
                        ((e = (0, o.defaults)((0, o.extend)({}, e), t)).batch =
                          null),
                        e
                      );
                    })));
                  var f,
                    g = [],
                    m = (0, I.Lx)(t),
                    y = (0, I.T$)(t);
                  if (
                    (y && (0, I.qR)(this._api),
                    (0, o.each)(d, function (e) {
                      if (
                        (((f =
                          (f = s.action(e, n._model, n._api)) ||
                          (0, o.extend)({}, e)).type = u.event || f.type),
                        g.push(f),
                        y)
                      ) {
                        var i = D.HB(t),
                          r = i.queryOptionMap,
                          a = i.mainTypeSpecified ? r.keys()[0] : "series";
                        St(n, l, e, a), Vt(n);
                      } else m ? (St(n, l, e, "series"), Vt(n)) : h && St(n, l, e, h.main, h.sub);
                    }),
                    "none" !== l && !y && !m && !h)
                  )
                    try {
                      this[yt]
                        ? (It(this), Tt.update.call(this, t), (this[yt] = null))
                        : Tt[l].call(this, t);
                    } catch (x) {
                      throw ((this[mt] = !1), x);
                    }
                  if (
                    ((f = p
                      ? { type: u.event || r, escapeConnect: a, batch: g }
                      : g[0]),
                    (this[mt] = !1),
                    !e)
                  ) {
                    var v = this._messageCenter;
                    if ((v.trigger(f.type, f), m)) {
                      var _ = {
                        type: "selectchanged",
                        escapeConnect: a,
                        selected: (0, I.mc)(i),
                        isFromClick: t.isFromClick || !1,
                        fromAction: t.type,
                        fromActionPayload: t,
                      };
                      v.trigger(_.type, _);
                    }
                  }
                }),
                (Rt = function (t) {
                  for (var e = this._pendingActions; e.length; ) {
                    var n = e.shift();
                    Lt.call(this, n, t);
                  }
                }),
                (kt = function (t) {
                  !t && this.trigger("updated");
                }),
                (Nt = function (t, e) {
                  t.on("rendered", function (n) {
                    e.trigger("rendered", n),
                      !t.animation.isFinished() ||
                        e[yt] ||
                        e._scheduler.unfinished ||
                        e._pendingActions.length ||
                        e.trigger("finished");
                  });
                }),
                (Et = function (t, e) {
                  t.on("mouseover", function (t) {
                    var n = t.target,
                      i = (0, it.R)(n, I.u6);
                    i && ((0, I._m)(i, t, e._api), Vt(e));
                  })
                    .on("mouseout", function (t) {
                      var n = t.target,
                        i = (0, it.R)(n, I.u6);
                      i && ((0, I.Iz)(i, t, e._api), Vt(e));
                    })
                    .on("click", function (t) {
                      var n = t.target,
                        i = (0, it.R)(
                          n,
                          function (t) {
                            return null != (0, w.z)(t).dataIndex;
                          },
                          !0
                        );
                      if (i) {
                        var r = i.selected ? "unselect" : "select",
                          o = (0, w.z)(i);
                        e._api.dispatchAction({
                          type: r,
                          dataType: o.dataType,
                          dataIndexInside: o.dataIndex,
                          seriesIndex: o.seriesIndex,
                          isFromClick: !0,
                        });
                      }
                    });
                }),
                (Ot = function (t, e, n, i, r) {
                  !(function (t) {
                    var e = [],
                      n = [],
                      i = !1;
                    if (
                      (t.eachComponent(function (t, r) {
                        var o = r.get("zlevel") || 0,
                          a = r.get("z") || 0,
                          s = r.getZLevelKey();
                        (i = i || !!s),
                          ("series" === t ? n : e).push({
                            zlevel: o,
                            z: a,
                            idx: r.componentIndex,
                            type: t,
                            key: s,
                          });
                      }),
                      i)
                    ) {
                      var r,
                        a,
                        u = e.concat(n);
                      (0, s.A)(u, function (t, e) {
                        return t.zlevel === e.zlevel
                          ? t.z - e.z
                          : t.zlevel - e.zlevel;
                      }),
                        (0, o.each)(u, function (e) {
                          var n = t.getComponent(e.type, e.idx),
                            i = e.zlevel,
                            o = e.key;
                          null != r && (i = Math.max(r, i)),
                            o
                              ? (i === r && o !== a && i++, (a = o))
                              : a && (i === r && i++, (a = "")),
                            (r = i),
                            n.setZLevel(i);
                        });
                    }
                  })(e),
                    Pt(t, e, n, i, r),
                    (0, o.each)(t._chartsViews, function (t) {
                      t.__alive = !1;
                    }),
                    Bt(t, e, n, i, r),
                    (0, o.each)(t._chartsViews, function (t) {
                      t.__alive || t.remove(e, n);
                    });
                }),
                (Pt = function (t, e, i, r, a, s) {
                  (0, o.each)(s || t._componentsViews, function (t) {
                    var o = t.__model;
                    u(o, t), t.render(o, e, i, r), n(o, t), c(o, t);
                  });
                }),
                (Bt = function (t, e, i, r, s, l) {
                  var h = t._scheduler;
                  (s = (0, o.extend)(s || {}, {
                    updatedSeries: e.getSeries(),
                  })),
                    ot.trigger("series:beforeupdate", e, i, s);
                  var d = !1;
                  e.eachSeries(function (e) {
                    var n = t._chartsMap[e.__viewId];
                    n.__alive = !0;
                    var i = n.renderTask;
                    h.updatePayload(i, r),
                      u(e, n),
                      l && l.get(e.uid) && i.dirty(),
                      i.perform(h.getPerformArgs(i)) && (d = !0),
                      (n.group.silent = !!e.get("silent")),
                      (function (t, e) {
                        var n = t.get("blendMode") || null;
                        e.eachRendered(function (t) {
                          t.isGroup || (t.style.blend = n);
                        });
                      })(e, n),
                      (0, I.jA)(e);
                  }),
                    (h.unfinished = d || h.unfinished),
                    ot.trigger("series:layoutlabels", e, i, s),
                    ot.trigger("series:transition", e, i, s),
                    e.eachSeries(function (e) {
                      var i = t._chartsMap[e.__viewId];
                      n(e, i), c(e, i);
                    }),
                    (function (t, e) {
                      var n = t._zr,
                        i = n.storage,
                        r = 0;
                      i.traverse(function (t) {
                        t.isGroup || r++;
                      }),
                        r > e.get("hoverLayerThreshold") &&
                          !a.A.node &&
                          !a.A.worker &&
                          e.eachSeries(function (e) {
                            if (!e.preventUsingHoverLayer) {
                              var n = t._chartsMap[e.__viewId];
                              n.__alive &&
                                n.eachRendered(function (t) {
                                  t.states.emphasis &&
                                    (t.states.emphasis.hoverLayer = !0);
                                });
                            }
                          });
                    })(t, e),
                    ot.trigger("series:afterupdate", e, i, s);
                }),
                (Vt = function (t) {
                  (t[vt] = !0), t.getZr().wakeUp();
                }),
                (Gt = function (t) {
                  t[vt] &&
                    (t.getZr().storage.traverse(function (t) {
                      M.LR(t) || e(t);
                    }),
                    (t[vt] = !1));
                }),
                (Ft = function (t) {
                  return new ((function (e) {
                    function n() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      (0, i.C6)(n, e),
                      (n.prototype.getCoordinateSystems = function () {
                        return t._coordSysMgr.getCoordinateSystems();
                      }),
                      (n.prototype.getComponentByElement = function (e) {
                        for (; e; ) {
                          var n = e.__ecComponentInfo;
                          if (null != n)
                            return t._model.getComponent(n.mainType, n.index);
                          e = e.parent;
                        }
                      }),
                      (n.prototype.enterEmphasis = function (e, n) {
                        (0, I.HY)(e, n), Vt(t);
                      }),
                      (n.prototype.leaveEmphasis = function (e, n) {
                        (0, I.SD)(e, n), Vt(t);
                      }),
                      (n.prototype.enterBlur = function (e) {
                        (0, I.QX)(e), Vt(t);
                      }),
                      (n.prototype.leaveBlur = function (e) {
                        (0, I.JC)(e), Vt(t);
                      }),
                      (n.prototype.enterSelect = function (e) {
                        (0, I.JI)(e), Vt(t);
                      }),
                      (n.prototype.leaveSelect = function (e) {
                        (0, I.gd)(e), Vt(t);
                      }),
                      (n.prototype.getModel = function () {
                        return t.getModel();
                      }),
                      (n.prototype.getViewOfComponentModel = function (e) {
                        return t.getViewOfComponentModel(e);
                      }),
                      (n.prototype.getViewOfSeriesModel = function (e) {
                        return t.getViewOfSeriesModel(e);
                      }),
                      n
                    );
                  })(h))(t);
                }),
                (zt = function (t) {
                  function e(t, e) {
                    for (var n = 0; n < t.length; n++) {
                      t[n][xt] = e;
                    }
                  }
                  (0, o.each)(Jt, function (n, i) {
                    t._messageCenter.on(i, function (n) {
                      if (ne[t.group] && 0 !== t[xt]) {
                        if (n && n.escapeConnect) return;
                        var i = t.makeActionFromEvent(n),
                          r = [];
                        (0, o.each)(ee, function (e) {
                          e !== t && e.group === t.group && r.push(e);
                        }),
                          e(r, 0),
                          (0, o.each)(r, function (t) {
                            1 !== t[xt] && t.dispatchAction(i);
                          }),
                          e(r, 2);
                      }
                    });
                  });
                });
            })()),
            e
          );
        })(u.A),
        jt = Ut.prototype;
      (jt.on = Mt("on")),
        (jt.off = Mt("off")),
        (jt.one = function (t, e, n) {
          var i = this;
          (0, Q.aT)("ECharts#one is deprecated."),
            this.on.call(
              this,
              t,
              function n() {
                for (var r = [], o = 0; o < arguments.length; o++)
                  r[o] = arguments[o];
                e && e.apply && e.apply(this, r), i.off(t, n);
              },
              n
            );
        });
      var Zt = [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "mousemove",
        "mousedown",
        "mouseup",
        "globalout",
        "contextmenu",
      ];
      function Kt(t) {
        0;
      }
      var $t = {},
        Jt = {},
        Xt = [],
        qt = [],
        Yt = [],
        Qt = {},
        te = {},
        ee = {},
        ne = {},
        ie = +new Date() - 0,
        re = +new Date() - 0,
        oe = "_echarts_instance_";
      function ae(t, e, n) {
        var i = !(n && n.ssr);
        if (i) {
          0;
          var r = he(t);
          if (r) return r;
          0;
        }
        var o = new Ut(t, e, n);
        return (
          (o.id = "ec_" + ie++),
          (ee[o.id] = o),
          i && D.Bq(t, oe, o.id),
          zt(o),
          ot.trigger("afterinit", o),
          o
        );
      }
      function se(t) {
        if ((0, o.isArray)(t)) {
          var e = t;
          (t = null),
            (0, o.each)(e, function (e) {
              null != e.group && (t = e.group);
            }),
            (t = t || "g_" + re++),
            (0, o.each)(e, function (e) {
              e.group = t;
            });
        }
        return (ne[t] = !0), t;
      }
      function ue(t) {
        ne[t] = !1;
      }
      var ce = ue;
      function le(t) {
        (0, o.isString)(t) ? (t = ee[t]) : t instanceof Ut || (t = he(t)),
          t instanceof Ut && !t.isDisposed() && t.dispose();
      }
      function he(t) {
        return ee[D.D$(t, oe)];
      }
      function de(t) {
        return ee[t];
      }
      function pe(t, e) {
        Qt[t] = e;
      }
      function fe(t) {
        (0, o.indexOf)(qt, t) < 0 && qt.push(t);
      }
      function ge(t, e) {
        De(Xt, t, e, lt);
      }
      function me(t) {
        ve("afterinit", t);
      }
      function ye(t) {
        ve("afterupdate", t);
      }
      function ve(t, e) {
        ot.on(t, e);
      }
      function _e(t, e, n) {
        (0, o.isFunction)(e) && ((n = e), (e = ""));
        var i = (0, o.isObject)(t) ? t.type : [t, (t = { event: e })][0];
        (t.event = (t.event || i).toLowerCase()),
          (e = t.event),
          Jt[e] ||
            ((0, o.assert)(_t.test(i) && _t.test(e)),
            $t[i] || ($t[i] = { action: n, actionInfo: t }),
            (Jt[e] = i));
      }
      function xe(t, e) {
        d.A.register(t, e);
      }
      function Me(t) {
        var e = d.A.get(t);
        if (e)
          return e.getDimensionsInfo
            ? e.getDimensionsInfo()
            : e.dimensions.slice();
      }
      function Ae(t, e) {
        De(Yt, t, e, ht, "layout");
      }
      function we(t, e) {
        De(Yt, t, e, pt, "visual");
      }
      var Ie = [];
      function De(t, e, n, i, r) {
        if (
          (((0, o.isFunction)(e) || (0, o.isObject)(e)) && ((n = e), (e = i)),
          !((0, o.indexOf)(Ie, n) >= 0))
        ) {
          Ie.push(n);
          var a = Z.wrapStageHandler(n, r);
          (a.__prio = e), (a.__raw = n), t.push(a);
        }
      }
      function Se(t, e) {
        te[t] = e;
      }
      function Te(t) {
        (0, at.Gs)({ createCanvas: t });
      }
      function Ce(t, e, n) {
        var i = (0, st.v)("registerMap");
        i && i(t, e, n);
      }
      function be(t) {
        var e = (0, st.v)("getMap");
        return e && e(t);
      }
      var Le = et.v5;
      we(dt, T.mK),
        we(ft, T.HG),
        we(ft, T.EY),
        we(dt, q.P),
        we(ft, q.e),
        we(7e3, rt.A),
        fe(f.A),
        ge(900, g.A),
        Se("default", C.A),
        _e({ type: I.h5, event: I.h5, update: I.h5 }, o.noop),
        _e({ type: I.PW, event: I.PW, update: I.PW }, o.noop),
        _e({ type: I.Lv, event: I.Lv, update: I.Lv }, o.noop),
        _e({ type: I.U2, event: I.U2, update: I.U2 }, o.noop),
        _e({ type: I.Q6, event: I.Q6, update: I.Q6 }, o.noop),
        pe("light", K.A),
        pe("dark", $.A);
      var Re = {};
    },
    95366: (t, e, n) => {
      function i(t) {
        var e = t.getRect(),
          n = t.getRangeInfo();
        return {
          coordSys: {
            type: "calendar",
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            cellWidth: t.getCellWidth(),
            cellHeight: t.getCellHeight(),
            rangeInfo: {
              start: n.start,
              end: n.end,
              weeks: n.weeks,
              dayCount: n.allDay,
            },
          },
          api: {
            coord: function (e, n) {
              return t.dataToPoint(e, n);
            },
          },
        };
      }
      n.d(e, { A: () => i });
    },
    95380: (t, e, n) => {
      n.d(e, { A: () => w });
      var i = n(70441),
        r = n(77829),
        o = n(47945),
        a = n(19084),
        s = n(13171),
        u = n(17630),
        c = n(15901),
        l = (0, i.createHashMap)([
          "rect",
          "circle",
          "line",
          "ellipse",
          "polygon",
          "polyline",
          "path",
          "text",
          "tspan",
          "g",
        ]),
        h = (function () {
          function t(t, e) {
            (this.type = "geoSVG"),
              (this._usedGraphicMap = (0, i.createHashMap)()),
              (this._freedGraphics = []),
              (this._mapName = t),
              (this._parsedXML = (0, u.h)(e));
          }
          return (
            (t.prototype.load = function () {
              var t = this._firstGraphic;
              if (!t) {
                (t = this._firstGraphic = this._buildGraphic(this._parsedXML)),
                  this._freedGraphics.push(t),
                  (this._boundingRect =
                    this._firstGraphic.boundingRect.clone());
                var e = (function (t) {
                    var e = [],
                      n = (0, i.createHashMap)();
                    return (
                      (0, i.each)(t, function (t) {
                        if (null == t.namedFrom) {
                          var i = new c.U5(t.name, t.el);
                          e.push(i), n.set(t.name, i);
                        }
                      }),
                      { regions: e, regionsMap: n }
                    );
                  })(t.named),
                  n = e.regions,
                  r = e.regionsMap;
                (this._regions = n), (this._regionsMap = r);
              }
              return {
                boundingRect: this._boundingRect,
                regions: this._regions,
                regionsMap: this._regionsMap,
              };
            }),
            (t.prototype._buildGraphic = function (t) {
              var e, n;
              try {
                (n = (e =
                  (t &&
                    (0, r.cM)(t, { ignoreViewBox: !0, ignoreRootClip: !0 })) ||
                  {}).root),
                  (0, i.assert)(null != n);
              } catch (M) {
                throw new Error("Invalid svg format\n" + M.message);
              }
              var u = new o.A();
              u.add(n), (u.isGeoSVGGraphicRoot = !0);
              var c = e.width,
                h = e.height,
                d = e.viewBoxRect,
                p = this._boundingRect;
              if (!p) {
                var f = void 0,
                  g = void 0,
                  m = void 0,
                  y = void 0;
                if (
                  (null != c
                    ? ((f = 0), (m = c))
                    : d && ((f = d.x), (m = d.width)),
                  null != h
                    ? ((g = 0), (y = h))
                    : d && ((g = d.y), (y = d.height)),
                  null == f || null == g)
                ) {
                  var v = n.getBoundingRect();
                  null == f && ((f = v.x), (m = v.width)),
                    null == g && ((g = v.y), (y = v.height));
                }
                p = this._boundingRect = new s.A(f, g, m, y);
              }
              if (d) {
                var _ = (0, r.ps)(d, p);
                (n.scaleX = n.scaleY = _.scale), (n.x = _.x), (n.y = _.y);
              }
              u.setClipPath(new a.A({ shape: p.plain() }));
              var x = [];
              return (
                (0, i.each)(e.named, function (t) {
                  var e;
                  null != l.get(t.svgNodeTagLower) &&
                    (x.push(t),
                    ((e = t.el).silent = !1),
                    e.isGroup &&
                      e.traverse(function (t) {
                        t.silent = !1;
                      }));
                }),
                { root: u, boundingRect: p, named: x }
              );
            }),
            (t.prototype.useGraphic = function (t) {
              var e = this._usedGraphicMap,
                n = e.get(t);
              return (
                n ||
                ((n =
                  this._freedGraphics.pop() ||
                  this._buildGraphic(this._parsedXML)),
                e.set(t, n),
                n)
              );
            }),
            (t.prototype.freeGraphic = function (t) {
              var e = this._usedGraphicMap,
                n = e.get(t);
              n && (e.removeKey(t), this._freedGraphics.push(n));
            }),
            t
          );
        })();
      for (
        var d = n(7335),
          p = [126, 25],
          f = "\u5357\u6d77\u8bf8\u5c9b",
          g = [
            [
              [0, 3.5],
              [7, 11.2],
              [15, 11.9],
              [30, 7],
              [42, 0.7],
              [52, 0.7],
              [56, 7.7],
              [59, 0.7],
              [64, 0.7],
              [64, 0],
              [5, 0],
              [0, 3.5],
            ],
            [
              [13, 16.1],
              [19, 14.7],
              [16, 21.7],
              [11, 23.1],
              [13, 16.1],
            ],
            [
              [12, 32.2],
              [14, 38.5],
              [15, 38.5],
              [13, 32.2],
              [12, 32.2],
            ],
            [
              [16, 47.6],
              [12, 53.2],
              [13, 53.2],
              [18, 47.6],
              [16, 47.6],
            ],
            [
              [6, 64.4],
              [8, 70],
              [9, 70],
              [8, 64.4],
              [6, 64.4],
            ],
            [
              [23, 82.6],
              [29, 79.8],
              [30, 79.8],
              [25, 82.6],
              [23, 82.6],
            ],
            [
              [37, 70.7],
              [43, 62.3],
              [44, 62.3],
              [39, 70.7],
              [37, 70.7],
            ],
            [
              [48, 51.1],
              [51, 45.5],
              [53, 45.5],
              [50, 51.1],
              [48, 51.1],
            ],
            [
              [51, 35],
              [51, 28.7],
              [53, 28.7],
              [53, 35],
              [51, 35],
            ],
            [
              [52, 22.4],
              [55, 17.5],
              [56, 17.5],
              [53, 22.4],
              [52, 22.4],
            ],
            [
              [58, 12.6],
              [62, 7],
              [63, 7],
              [60, 12.6],
              [58, 12.6],
            ],
            [
              [0, 3.5],
              [0, 93.1],
              [64, 93.1],
              [64, 0],
              [63, 0],
              [63, 92.4],
              [1, 92.4],
              [1, 3.5],
              [0, 3.5],
            ],
          ],
          m = 0;
        m < g.length;
        m++
      )
        for (var y = 0; y < g[m].length; y++)
          (g[m][y][0] /= 10.5),
            (g[m][y][1] /= -14),
            (g[m][y][0] += p[0]),
            (g[m][y][1] += p[1]);
      var v = {
        "\u5357\u6d77\u8bf8\u5c9b": [32, 80],
        "\u5e7f\u4e1c": [0, -10],
        "\u9999\u6e2f": [10, 5],
        "\u6fb3\u95e8": [-10, 10],
        "\u5929\u6d25": [5, 5],
      };
      var _ = [
        [
          [123.45165252685547, 25.73527164402261],
          [123.49731445312499, 25.73527164402261],
          [123.49731445312499, 25.750734064600884],
          [123.45165252685547, 25.750734064600884],
          [123.45165252685547, 25.73527164402261],
        ],
      ];
      var x = (function () {
        function t(t, e, n) {
          var r;
          (this.type = "geoJSON"),
            (this._parsedMap = (0, i.createHashMap)()),
            (this._mapName = t),
            (this._specialAreas = n),
            (this._geoJSON =
              ((r = e),
              (0, i.isString)(r)
                ? "undefined" !== typeof JSON && JSON.parse
                  ? JSON.parse(r)
                  : new Function("return (" + r + ");")()
                : r));
        }
        return (
          (t.prototype.load = function (t, e) {
            e = e || "name";
            var n = this._parsedMap.get(e);
            if (!n) {
              var r = this._parseToRegions(e);
              n = this._parsedMap.set(e, { regions: r, boundingRect: M(r) });
            }
            var o = (0, i.createHashMap)(),
              a = [];
            return (
              (0, i.each)(n.regions, function (e) {
                var n = e.name;
                t && (0, i.hasOwn)(t, n) && (e = e.cloneShallow((n = t[n]))),
                  a.push(e),
                  o.set(n, e);
              }),
              {
                regions: a,
                boundingRect: n.boundingRect || new s.A(0, 0, 0, 0),
                regionsMap: o,
              }
            );
          }),
          (t.prototype._parseToRegions = function (t) {
            var e,
              n = this._mapName,
              r = this._geoJSON;
            try {
              e = r ? (0, d.A)(r, t) : [];
            } catch (o) {
              throw new Error("Invalid geoJson format\n" + o.message);
            }
            return (
              (function (t, e) {
                if ("china" === t) {
                  for (var n = 0; n < e.length; n++)
                    if (e[n].name === f) return;
                  e.push(
                    new c.cn(
                      f,
                      i.map(g, function (t) {
                        return { type: "polygon", exterior: t };
                      }),
                      p
                    )
                  );
                }
              })(n, e),
              (0, i.each)(
                e,
                function (t) {
                  var e = t.name;
                  !(function (t, e) {
                    if ("china" === t) {
                      var n = v[e.name];
                      if (n) {
                        var i = e.getCenter();
                        (i[0] += n[0] / 10.5),
                          (i[1] += -n[1] / 14),
                          e.setCenter(i);
                      }
                    }
                  })(n, t),
                    (function (t, e) {
                      "china" === t &&
                        "\u53f0\u6e7e" === e.name &&
                        e.geometries.push({ type: "polygon", exterior: _[0] });
                    })(n, t);
                  var i = this._specialAreas && this._specialAreas[e];
                  i && t.transformTo(i.left, i.top, i.width, i.height);
                },
                this
              ),
              e
            );
          }),
          (t.prototype.getMapForUser = function () {
            return {
              geoJson: this._geoJSON,
              geoJSON: this._geoJSON,
              specialAreas: this._specialAreas,
            };
          }),
          t
        );
      })();
      function M(t) {
        for (var e, n = 0; n < t.length; n++) {
          var i = t[n].getBoundingRect();
          (e = e || i.clone()).union(i);
        }
        return e;
      }
      var A = (0, i.createHashMap)();
      const w = {
        registerMap: function (t, e, n) {
          if (e.svg) {
            var i = new h(t, e.svg);
            A.set(t, i);
          } else {
            var r = e.geoJson || e.geoJSON;
            r && !e.features ? (n = e.specialAreas) : (r = e);
            i = new x(t, r, n);
            A.set(t, i);
          }
        },
        getGeoResource: function (t) {
          return A.get(t);
        },
        getMapForUser: function (t) {
          var e = A.get(t);
          return e && "geoJSON" === e.type && e.getMapForUser();
        },
        load: function (t, e, n) {
          var i = A.get(t);
          if (i) return i.load(e, n);
        },
      };
    },
    95939: (t, e, n) => {
      n.d(e, { m: () => u });
      var i = n(85941),
        r = n(72183),
        o = n(88186),
        a = n(50494),
        s = Math.log;
      function u(t, e, n) {
        var u = r.A.prototype,
          c = u.getTicks.call(n),
          l = u.getTicks.call(n, !0),
          h = c.length - 1,
          d = u.getInterval.call(n),
          p = (0, o.Rx)(t, e),
          f = p.extent,
          g = p.fixMin,
          m = p.fixMax;
        if ("log" === t.type) {
          var y = s(t.base);
          f = [s(f[0]) / y, s(f[1]) / y];
        }
        t.setExtent(f[0], f[1]),
          t.calcNiceExtent({ splitNumber: h, fixMin: g, fixMax: m });
        var v = u.getExtent.call(t);
        g && (f[0] = v[0]), m && (f[1] = v[1]);
        var _ = u.getInterval.call(t),
          x = f[0],
          M = f[1];
        if (g && m) _ = (M - x) / h;
        else if (g)
          for (M = f[0] + _ * h; M < f[1] && isFinite(M) && isFinite(f[1]); )
            (_ = (0, a.kH)(_)), (M = f[0] + _ * h);
        else if (m)
          for (x = f[1] - _ * h; x > f[0] && isFinite(x) && isFinite(f[0]); )
            (_ = (0, a.kH)(_)), (x = f[1] - _ * h);
        else {
          t.getTicks().length - 1 > h && (_ = (0, a.kH)(_));
          var A = _ * h;
          (M = Math.ceil(f[1] / _) * _),
            (x = (0, i.LI)(M - A)) < 0 && f[0] >= 0
              ? ((x = 0), (M = (0, i.LI)(A)))
              : M > 0 && f[1] <= 0 && ((M = 0), (x = -(0, i.LI)(A)));
        }
        var w = (c[0].value - l[0].value) / d,
          I = (c[h].value - l[h].value) / d;
        u.setExtent.call(t, x + _ * w, M + _ * I),
          u.setInterval.call(t, _),
          (w || I) && u.setNiceExtent.call(t, x + _, M - _);
      }
    },
    97272: (t, e, n) => {
      n.d(e, { A: () => o });
      var i = n(70441);
      function r(t, e) {
        var n = this.getAxis(),
          i = e instanceof Array ? e[0] : e,
          r = (t instanceof Array ? t[0] : t) / 2;
        return "category" === n.type
          ? n.getBandWidth()
          : Math.abs(n.dataToCoord(i - r) - n.dataToCoord(i + r));
      }
      function o(t) {
        var e = t.getRect();
        return {
          coordSys: {
            type: "singleAxis",
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
          },
          api: {
            coord: function (e) {
              return t.dataToPoint(e);
            },
            size: (0, i.bind)(r, t),
          },
        };
      }
    },
    98827: (t, e, n) => {
      n.d(e, { Z: () => r });
      var i = n(70441);
      function r(t, e) {
        e = e || {};
        var n = t.coordinateSystem,
          r = t.axis,
          o = {},
          a = r.position,
          s = r.orient,
          u = n.getRect(),
          c = [u.x, u.x + u.width, u.y, u.y + u.height],
          l = {
            horizontal: { top: c[2], bottom: c[3] },
            vertical: { left: c[0], right: c[1] },
          };
        o.position = [
          "vertical" === s ? l.vertical[a] : c[0],
          "horizontal" === s ? l.horizontal[a] : c[3],
        ];
        o.rotation = (Math.PI / 2) * { horizontal: 0, vertical: 1 }[s];
        (o.labelDirection =
          o.tickDirection =
          o.nameDirection =
            { top: -1, bottom: 1, right: 1, left: -1 }[a]),
          t.get(["axisTick", "inside"]) && (o.tickDirection = -o.tickDirection),
          i.retrieve(e.labelInside, t.get(["axisLabel", "inside"])) &&
            (o.labelDirection = -o.labelDirection);
        var h = e.rotate;
        return (
          null == h && (h = t.get(["axisLabel", "rotate"])),
          (o.labelRotation = "top" === a ? -h : h),
          (o.z2 = 1),
          o
        );
      }
    },
  },
]);
