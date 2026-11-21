(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [571],
  {
    1872: (e, t, n) => {
      "use strict";
      var i = n(68584).Buffer;
      e.exports = function (e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
        for (var s = 0; s < e.length; s++) {
          var r = e.charAt(s),
            o = r.charCodeAt(0);
          if (255 !== t[o]) throw new TypeError(r + " is ambiguous");
          t[o] = s;
        }
        var a = e.length,
          l = e.charAt(0),
          c = Math.log(a) / Math.log(256),
          u = Math.log(256) / Math.log(a);
        function d(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return i.alloc(0);
          for (var n = 0, s = 0, r = 0; e[n] === l; ) s++, n++;
          for (
            var o = ((e.length - n) * c + 1) >>> 0, u = new Uint8Array(o);
            n < e.length;

          ) {
            var d = e.charCodeAt(n);
            if (d > 255) return;
            var h = t[d];
            if (255 === h) return;
            for (var p = 0, g = o - 1; (0 !== h || p < r) && -1 !== g; g--, p++)
              (h += (a * u[g]) >>> 0),
                (u[g] = h % 256 >>> 0),
                (h = (h / 256) >>> 0);
            if (0 !== h) throw new Error("Non-zero carry");
            (r = p), n++;
          }
          for (var f = o - r; f !== o && 0 === u[f]; ) f++;
          var m = i.allocUnsafe(s + (o - f));
          m.fill(0, 0, s);
          for (var y = s; f !== o; ) m[y++] = u[f++];
          return m;
        }
        return {
          encode: function (t) {
            if (
              ((Array.isArray(t) || t instanceof Uint8Array) && (t = i.from(t)),
              !i.isBuffer(t))
            )
              throw new TypeError("Expected Buffer");
            if (0 === t.length) return "";
            for (var n = 0, s = 0, r = 0, o = t.length; r !== o && 0 === t[r]; )
              r++, n++;
            for (
              var c = ((o - r) * u + 1) >>> 0, d = new Uint8Array(c);
              r !== o;

            ) {
              for (
                var h = t[r], p = 0, g = c - 1;
                (0 !== h || p < s) && -1 !== g;
                g--, p++
              )
                (h += (256 * d[g]) >>> 0),
                  (d[g] = h % a >>> 0),
                  (h = (h / a) >>> 0);
              if (0 !== h) throw new Error("Non-zero carry");
              (s = p), r++;
            }
            for (var f = c - s; f !== c && 0 === d[f]; ) f++;
            for (var m = l.repeat(n); f < c; ++f) m += e.charAt(d[f]);
            return m;
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
    4599: (e, t, n) => {
      var i = n(1872);
      e.exports = i(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    8629: (e, t, n) => {
      "use strict";
      n.d(t, {
        a: () => S,
        b: () => m,
        c: () => f,
        d: () => o,
        e: () => h,
        f: () => M,
        h: () => v,
        j: () => a,
        k: () => k,
        n: () => r,
        p: () => b,
        q: () => w,
        r: () => y,
        s: () => u,
        t: () => d,
        u: () => g,
        v: () => p,
        w: () => c,
        x: () => s,
      });
      var i = n(10704);
      function s(e) {
        const t = e;
        Object.keys(t).forEach((e) => {
          try {
            t[e] = null;
          } catch (n) {}
          try {
            delete t[e];
          } catch (n) {}
        });
      }
      function r(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function o() {
        return Date.now();
      }
      function a(e, t) {
        void 0 === t && (t = "x");
        const n = (0, i.a)();
        let s, r, o;
        const a = (function (e) {
          const t = (0, i.a)();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((r = a.transform || a.webkitTransform),
              r.split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (o = new n.WebKitCSSMatrix("none" === r ? "" : r)))
            : ((o =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (s = o.toString().split(","))),
          "x" === t &&
            (r = n.WebKitCSSMatrix
              ? o.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          "y" === t &&
            (r = n.WebKitCSSMatrix
              ? o.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          r || 0
        );
      }
      function l(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function c() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (
            void 0 !== s &&
            null !== s &&
            ((n = s),
            !("undefined" !== typeof window &&
            "undefined" !== typeof window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const n = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = n.length; t < i; t += 1) {
              const i = n[t],
                r = Object.getOwnPropertyDescriptor(s, i);
              void 0 !== r &&
                r.enumerable &&
                (l(e[i]) && l(s[i])
                  ? s[i].__swiper__
                    ? (e[i] = s[i])
                    : c(e[i], s[i])
                  : !l(e[i]) && l(s[i])
                  ? ((e[i] = {}),
                    s[i].__swiper__ ? (e[i] = s[i]) : c(e[i], s[i]))
                  : (e[i] = s[i]));
            }
          }
        }
        var n;
        return e;
      }
      function u(e, t, n) {
        e.style.setProperty(t, n);
      }
      function d(e) {
        let { swiper: t, targetPosition: n, side: s } = e;
        const r = (0, i.a)(),
          o = -t.translate;
        let a,
          l = null;
        const c = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(t.cssModeFrameID);
        const u = n > o ? "next" : "prev",
          d = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
          h = () => {
            (a = new Date().getTime()), null === l && (l = a);
            const e = Math.max(Math.min((a - l) / c, 1), 0),
              i = 0.5 - Math.cos(e * Math.PI) / 2;
            let u = o + i * (n - o);
            if ((d(u, n) && (u = n), t.wrapperEl.scrollTo({ [s]: u }), d(u, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [s]: u });
                }),
                void r.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = r.requestAnimationFrame(h);
          };
        h();
      }
      function h(e, t) {
        void 0 === t && (t = "");
        const n = (0, i.a)(),
          s = [...e.children];
        return (
          n.HTMLSlotElement &&
            e instanceof HTMLSlotElement &&
            s.push(...e.assignedElements()),
          t ? s.filter((e) => e.matches(t)) : s
        );
      }
      function p(e, t) {
        const n = (0, i.a)();
        let s = t.contains(e);
        if (!s && n.HTMLSlotElement && t instanceof HTMLSlotElement) {
          (s = [...t.assignedElements()].includes(e)),
            s ||
              (s = (function (e, t) {
                const n = [t];
                for (; n.length > 0; ) {
                  const t = n.shift();
                  if (e === t) return !0;
                  n.push(
                    ...t.children,
                    ...(t.shadowRoot ? t.shadowRoot.children : []),
                    ...(t.assignedElements ? t.assignedElements() : [])
                  );
                }
              })(e, t));
        }
        return s;
      }
      function g(e) {
        try {
          return void console.warn(e);
        } catch (t) {}
      }
      function f(e, t) {
        void 0 === t && (t = []);
        const n = document.createElement(e);
        return (
          n.classList.add(
            ...(Array.isArray(t)
              ? t
              : (function (e) {
                  return (
                    void 0 === e && (e = ""),
                    e
                      .trim()
                      .split(" ")
                      .filter((e) => !!e.trim())
                  );
                })(t))
          ),
          n
        );
      }
      function m(e) {
        const t = (0, i.a)(),
          n = (0, i.g)(),
          s = e.getBoundingClientRect(),
          r = n.body,
          o = e.clientTop || r.clientTop || 0,
          a = e.clientLeft || r.clientLeft || 0,
          l = e === t ? t.scrollY : e.scrollTop,
          c = e === t ? t.scrollX : e.scrollLeft;
        return { top: s.top + l - o, left: s.left + c - a };
      }
      function y(e, t) {
        const n = [];
        for (; e.previousElementSibling; ) {
          const i = e.previousElementSibling;
          t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
        }
        return n;
      }
      function w(e, t) {
        const n = [];
        for (; e.nextElementSibling; ) {
          const i = e.nextElementSibling;
          t ? i.matches(t) && n.push(i) : n.push(i), (e = i);
        }
        return n;
      }
      function b(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function v(e) {
        let t,
          n = e;
        if (n) {
          for (t = 0; null !== (n = n.previousSibling); )
            1 === n.nodeType && (t += 1);
          return t;
        }
      }
      function S(e, t) {
        const n = [];
        let i = e.parentElement;
        for (; i; )
          t ? i.matches(t) && n.push(i) : n.push(i), (i = i.parentElement);
        return n;
      }
      function k(e, t) {
        t &&
          e.addEventListener("transitionend", function n(i) {
            i.target === e &&
              (t.call(e, i), e.removeEventListener("transitionend", n));
          });
      }
      function M(e, t, n) {
        const s = (0, i.a)();
        return n
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
    },
    10704: (e, t, n) => {
      "use strict";
      function i(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function s(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : i(t[n]) &&
                i(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                s(e[n], t[n]);
          });
      }
      n.d(t, { a: () => l, g: () => o });
      const r = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function o() {
        const e = "undefined" !== typeof document ? document : {};
        return s(e, r), e;
      }
      const a = {
        document: r,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        const e = "undefined" !== typeof window ? window : {};
        return s(e, a), e;
      }
    },
    13083: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => i });
      const i = "solana:signAndSendTransaction";
    },
    30834: () => {},
    39107: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => i });
      const i = "solana:signMessage";
    },
    40929: (e, t, n) => {
      "use strict";
      n.d(t, { RC: () => ee, qr: () => te });
      var i = n(51477),
        s = n(10704),
        r = n(8629);
      let o, a, l;
      function c() {
        return (
          o ||
            (o = (function () {
              const e = (0, s.a)(),
                t = (0, s.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          o
        );
      }
      function u(e) {
        return (
          void 0 === e && (e = {}),
          a ||
            (a = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = c(),
                i = (0, s.a)(),
                r = i.navigator.platform,
                o = t || i.navigator.userAgent,
                a = { ios: !1, android: !1 },
                l = i.screen.width,
                u = i.screen.height,
                d = o.match(/(Android);?[\s\/]+([\d.]+)?/);
              let h = o.match(/(iPad).*OS\s([\d_]+)/);
              const p = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                g = !h && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === r;
              let m = "MacIntel" === r;
              return (
                !h &&
                  m &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${l}x${u}`) >= 0 &&
                  ((h = o.match(/(Version)\/([\d.]+)/)),
                  h || (h = [0, 1, "13_0_0"]),
                  (m = !1)),
                d && !f && ((a.os = "android"), (a.android = !0)),
                (h || g || p) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          a
        );
      }
      function d() {
        return (
          l ||
            (l = (function () {
              const e = (0, s.a)(),
                t = u();
              let n = !1;
              function i() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              }
              if (i()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                  const [e, i] = t
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  n = e < 16 || (16 === e && i < 2);
                }
              }
              const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
                o = i();
              return {
                isSafari: n || o,
                needPerspectiveFix: n,
                need3dFix: o || (r && t.ios),
                isWebView: r,
              };
            })()),
          l
        );
      }
      var h = {
        on(e, t, n) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" !== typeof t) return i;
          const s = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t);
            }),
            i
          );
        },
        once(e, t, n) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" !== typeof t) return i;
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            t.apply(i, r);
          }
          return (s.__emitterProxy = t), i.on(e, s, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          const i = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((i, s) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(s, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, i;
          for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
            r[o] = arguments[o];
          "string" === typeof r[0] || Array.isArray(r[0])
            ? ((t = r[0]), (n = r.slice(1, r.length)), (i = e))
            : ((t = r[0].events), (n = r[0].data), (i = r[0].context || e)),
            n.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, n);
                  });
            }),
            e
          );
        },
      };
      const p = (e, t, n) => {
        t && !e.classList.contains(n)
          ? e.classList.add(n)
          : !t && e.classList.contains(n) && e.classList.remove(n);
      };
      const g = (e, t, n) => {
        t && !e.classList.contains(n)
          ? e.classList.add(n)
          : !t && e.classList.contains(n) && e.classList.remove(n);
      };
      const f = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const n = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (n) {
            let t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (n.shadowRoot
                ? (t = n.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    n.shadowRoot &&
                      ((t = n.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        m = (e, t) => {
          if (!e.slides[t]) return;
          const n = e.slides[t].querySelector('[loading="lazy"]');
          n && n.removeAttribute("loading");
        },
        y = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const n = e.slides.length;
          if (!n || !t || t < 0) return;
          t = Math.min(t, n);
          const i =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            s = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const n = s,
              r = [n - t];
            return (
              r.push(...Array.from({ length: t }).map((e, t) => n + i + t)),
              void e.slides.forEach((t, n) => {
                r.includes(t.column) && m(e, n);
              })
            );
          }
          const r = s + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let o = s - t; o <= r + t; o += 1) {
              const t = ((o % n) + n) % n;
              (t < s || t > r) && m(e, t);
            }
          else
            for (
              let o = Math.max(s - t, 0);
              o <= Math.min(r + t, n - 1);
              o += 1
            )
              o !== s && (o > r || o < s) && m(e, o);
        };
      var w = {
        updateSize: function () {
          const e = this;
          let t, n;
          const i = e.el;
          (t =
            "undefined" !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : i.clientWidth),
            (n =
              "undefined" !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : i.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt((0, r.p)(i, "padding-left") || 0, 10) -
                parseInt((0, r.p)(i, "padding-right") || 0, 10)),
              (n =
                n -
                parseInt((0, r.p)(i, "padding-top") || 0, 10) -
                parseInt((0, r.p)(i, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t, n) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0);
          }
          const n = e.params,
            {
              wrapperEl: i,
              slidesEl: s,
              size: o,
              rtlTranslate: a,
              wrongRTL: l,
            } = e,
            c = e.virtual && n.virtual.enabled,
            u = c ? e.virtual.slides.length : e.slides.length,
            d = (0, r.e)(s, `.${e.params.slideClass}, swiper-slide`),
            h = c ? e.virtual.slides.length : d.length;
          let p = [];
          const g = [],
            f = [];
          let m = n.slidesOffsetBefore;
          "function" === typeof m && (m = n.slidesOffsetBefore.call(e));
          let y = n.slidesOffsetAfter;
          "function" === typeof y && (y = n.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            b = e.slidesGrid.length;
          let v = n.spaceBetween,
            S = -m,
            k = 0,
            M = 0;
          if ("undefined" === typeof o) return;
          "string" === typeof v && v.indexOf("%") >= 0
            ? (v = (parseFloat(v.replace("%", "")) / 100) * o)
            : "string" === typeof v && (v = parseFloat(v)),
            (e.virtualSize = -v),
            d.forEach((e) => {
              a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            n.centeredSlides &&
              n.cssMode &&
              ((0, r.s)(i, "--swiper-centered-offset-before", ""),
              (0, r.s)(i, "--swiper-centered-offset-after", ""));
          const I = n.grid && n.grid.rows > 1 && e.grid;
          let T;
          I ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
          const x =
            "auto" === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              (e) => "undefined" !== typeof n.breakpoints[e].slidesPerView
            ).length > 0;
          for (let A = 0; A < h; A += 1) {
            let i;
            if (
              ((T = 0),
              d[A] && (i = d[A]),
              I && e.grid.updateSlide(A, i, d),
              !d[A] || "none" !== (0, r.p)(i, "display"))
            ) {
              if ("auto" === n.slidesPerView) {
                x && (d[A].style[e.getDirectionLabel("width")] = "");
                const s = getComputedStyle(i),
                  o = i.style.transform,
                  a = i.style.webkitTransform;
                if (
                  (o && (i.style.transform = "none"),
                  a && (i.style.webkitTransform = "none"),
                  n.roundLengths)
                )
                  T = e.isHorizontal()
                    ? (0, r.f)(i, "width", !0)
                    : (0, r.f)(i, "height", !0);
                else {
                  const e = t(s, "width"),
                    n = t(s, "padding-left"),
                    r = t(s, "padding-right"),
                    o = t(s, "margin-left"),
                    a = t(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + o + a;
                  else {
                    const { clientWidth: t, offsetWidth: s } = i;
                    T = e + n + r + o + a + (s - t);
                  }
                }
                o && (i.style.transform = o),
                  a && (i.style.webkitTransform = a),
                  n.roundLengths && (T = Math.floor(T));
              } else
                (T = (o - (n.slidesPerView - 1) * v) / n.slidesPerView),
                  n.roundLengths && (T = Math.floor(T)),
                  d[A] && (d[A].style[e.getDirectionLabel("width")] = `${T}px`);
              d[A] && (d[A].swiperSlideSize = T),
                f.push(T),
                n.centeredSlides
                  ? ((S = S + T / 2 + k / 2 + v),
                    0 === k && 0 !== A && (S = S - o / 2 - v),
                    0 === A && (S = S - o / 2 - v),
                    Math.abs(S) < 0.001 && (S = 0),
                    n.roundLengths && (S = Math.floor(S)),
                    M % n.slidesPerGroup === 0 && p.push(S),
                    g.push(S))
                  : (n.roundLengths && (S = Math.floor(S)),
                    (M - Math.min(e.params.slidesPerGroupSkip, M)) %
                      e.params.slidesPerGroup ===
                      0 && p.push(S),
                    g.push(S),
                    (S = S + T + v)),
                (e.virtualSize += T + v),
                (k = T),
                (M += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, o) + y),
            a &&
              l &&
              ("slide" === n.effect || "coverflow" === n.effect) &&
              (i.style.width = `${e.virtualSize + v}px`),
            n.setWrapperSize &&
              (i.style[e.getDirectionLabel("width")] = `${
                e.virtualSize + v
              }px`),
            I && e.grid.updateWrapperSize(T, p),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < p.length; i += 1) {
              let s = p[i];
              n.roundLengths && (s = Math.floor(s)),
                p[i] <= e.virtualSize - o && t.push(s);
            }
            (p = t),
              Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - o);
          }
          if (c && n.loop) {
            const t = f[0] + v;
            if (n.slidesPerGroup > 1) {
              const i = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    n.slidesPerGroup
                ),
                s = t * n.slidesPerGroup;
              for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + s);
            }
            for (
              let i = 0;
              i < e.virtual.slidesBefore + e.virtual.slidesAfter;
              i += 1
            )
              1 === n.slidesPerGroup && p.push(p[p.length - 1] + t),
                g.push(g[g.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === p.length && (p = [0]), 0 !== v)) {
            const t =
              e.isHorizontal() && a
                ? "marginLeft"
                : e.getDirectionLabel("marginRight");
            d.filter(
              (e, t) => !(n.cssMode && !n.loop) || t !== d.length - 1
            ).forEach((e) => {
              e.style[t] = `${v}px`;
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (v || 0);
            }),
              (e -= v);
            const t = e > o ? e - o : 0;
            p = p.map((e) => (e <= 0 ? -m : e > t ? t + y : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            f.forEach((t) => {
              e += t + (v || 0);
            }),
              (e -= v);
            const t = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
            if (e + t < o) {
              const n = (o - e - t) / 2;
              p.forEach((e, t) => {
                p[t] = e - n;
              }),
                g.forEach((e, t) => {
                  g[t] = e + n;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: g,
              slidesSizesGrid: f,
            }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            (0, r.s)(i, "--swiper-centered-offset-before", -p[0] + "px"),
              (0, r.s)(
                i,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (h !== u && e.emit("slidesLengthChange"),
            p.length !== w &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            g.length !== b && e.emit("slidesGridLengthChange"),
            n.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit("slidesUpdated"),
            !c && !n.cssMode && ("slide" === n.effect || "fade" === n.effect))
          ) {
            const t = `${n.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            h <= n.maxBackfaceHiddenSlides
              ? i || e.el.classList.add(t)
              : i && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            i = t.virtual && t.params.virtual.enabled;
          let s,
            r = 0;
          "number" === typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                n.push(e);
              });
            else
              for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                const e = t.activeIndex + s;
                if (e > t.slides.length && !i) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (s = 0; s < n.length; s += 1)
            if ("undefined" !== typeof n[s]) {
              const e = n[s].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            n = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset =
              (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
              n -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: i, rtlTranslate: s, snapGrid: r } = t;
          if (0 === i.length) return;
          "undefined" === typeof i[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let o = -e;
          s && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
          let a = n.spaceBetween;
          "string" === typeof a && a.indexOf("%") >= 0
            ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
            : "string" === typeof a && (a = parseFloat(a));
          for (let l = 0; l < i.length; l += 1) {
            const e = i[l];
            let c = e.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset);
            const u =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
                (e.swiperSlideSize + a),
              d =
                (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
                (e.swiperSlideSize + a),
              h = -(o - c),
              g = h + t.slidesSizesGrid[l],
              f = h >= 0 && h <= t.size - t.slidesSizesGrid[l],
              m =
                (h >= 0 && h < t.size - 1) ||
                (g > 1 && g <= t.size) ||
                (h <= 0 && g >= t.size);
            m && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l)),
              p(e, m, n.slideVisibleClass),
              p(e, f, n.slideFullyVisibleClass),
              (e.progress = s ? -u : u),
              (e.originalProgress = s ? -d : d);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: s, isBeginning: r, isEnd: o, progressLoop: a } = t;
          const l = r,
            c = o;
          if (0 === i) (s = 0), (r = !0), (o = !0);
          else {
            s = (e - t.minTranslate()) / i;
            const n = Math.abs(e - t.minTranslate()) < 1,
              a = Math.abs(e - t.maxTranslate()) < 1;
            (r = n || s <= 0), (o = a || s >= 1), n && (s = 0), a && (s = 1);
          }
          if (n.loop) {
            const n = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              s = t.slidesGrid[n],
              r = t.slidesGrid[i],
              o = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            (a = l >= s ? (l - s) / o : (l + o - r) / o), a > 1 && (a -= 1);
          }
          Object.assign(t, {
            progress: s,
            progressLoop: a,
            isBeginning: r,
            isEnd: o,
          }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !l && t.emit("reachBeginning toEdge"),
            o && !c && t.emit("reachEnd toEdge"),
            ((l && !r) || (c && !o)) && t.emit("fromEdge"),
            t.emit("progress", s);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: n, slidesEl: i, activeIndex: s } = e,
            o = e.virtual && n.virtual.enabled,
            a = e.grid && n.grid && n.grid.rows > 1,
            l = (e) => (0, r.e)(i, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
          let c, u, d;
          if (o)
            if (n.loop) {
              let t = s - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (c = l(`[data-swiper-slide-index="${t}"]`));
            } else c = l(`[data-swiper-slide-index="${s}"]`);
          else
            a
              ? ((c = t.find((e) => e.column === s)),
                (d = t.find((e) => e.column === s + 1)),
                (u = t.find((e) => e.column === s - 1)))
              : (c = t[s]);
          c &&
            (a ||
              ((d = (0, r.q)(c, `.${n.slideClass}, swiper-slide`)[0]),
              n.loop && !d && (d = t[0]),
              (u = (0, r.r)(c, `.${n.slideClass}, swiper-slide`)[0]),
              n.loop && 0 === !u && (u = t[t.length - 1]))),
            t.forEach((e) => {
              g(e, e === c, n.slideActiveClass),
                g(e, e === d, n.slideNextClass),
                g(e, e === u, n.slidePrevClass);
            }),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: s,
              activeIndex: r,
              realIndex: o,
              snapIndex: a,
            } = t;
          let l,
            c = e;
          const u = (e) => {
            let n = e - t.virtual.slidesBefore;
            return (
              n < 0 && (n = t.virtual.slides.length + n),
              n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
              n
            );
          };
          if (
            ("undefined" === typeof c &&
              (c = (function (e) {
                const { slidesGrid: t, params: n } = e,
                  i = e.rtlTranslate ? e.translate : -e.translate;
                let s;
                for (let r = 0; r < t.length; r += 1)
                  "undefined" !== typeof t[r + 1]
                    ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2
                      ? (s = r)
                      : i >= t[r] && i < t[r + 1] && (s = r + 1)
                    : i >= t[r] && (s = r);
                return (
                  n.normalizeSlideIndex &&
                    (s < 0 || "undefined" === typeof s) &&
                    (s = 0),
                  s
                );
              })(t)),
            i.indexOf(n) >= 0)
          )
            l = i.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, c);
            l = e + Math.floor((c - e) / s.slidesPerGroup);
          }
          if ((l >= i.length && (l = i.length - 1), c === r && !t.params.loop))
            return void (
              l !== a && ((t.snapIndex = l), t.emit("snapIndexChange"))
            );
          if (c === r && t.params.loop && t.virtual && t.params.virtual.enabled)
            return void (t.realIndex = u(c));
          const d = t.grid && s.grid && s.grid.rows > 1;
          let h;
          if (t.virtual && s.virtual.enabled && s.loop) h = u(c);
          else if (d) {
            const e = t.slides.find((e) => e.column === c);
            let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)),
              (h = Math.floor(n / s.grid.rows));
          } else if (t.slides[c]) {
            const e = t.slides[c].getAttribute("data-swiper-slide-index");
            h = e ? parseInt(e, 10) : c;
          } else h = c;
          Object.assign(t, {
            previousSnapIndex: a,
            snapIndex: l,
            previousRealIndex: o,
            realIndex: h,
            previousIndex: r,
            activeIndex: c,
          }),
            t.initialized && y(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              (o !== h && t.emit("realIndexChange"), t.emit("slideChange"));
        },
        updateClickedSlide: function (e, t) {
          const n = this,
            i = n.params;
          let s = e.closest(`.${i.slideClass}, swiper-slide`);
          !s &&
            n.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
              !s &&
                e.matches &&
                e.matches(`.${i.slideClass}, swiper-slide`) &&
                (s = e);
            });
          let r,
            o = !1;
          if (s)
            for (let a = 0; a < n.slides.length; a += 1)
              if (n.slides[a] === s) {
                (o = !0), (r = a);
                break;
              }
          if (!s || !o)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = s),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  s.getAttribute("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = r),
            i.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var b = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: i,
            wrapperEl: s,
          } = this;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          let o = (0, r.j)(s, e);
          return (o += this.cssOverflowAdjustment()), n && (o = -o), o || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            { rtlTranslate: i, params: s, wrapperEl: r, progress: o } = n;
          let a,
            l = 0,
            c = 0;
          n.isHorizontal() ? (l = i ? -e : e) : (c = e),
            s.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? l : c),
            s.cssMode
              ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -l : -c)
              : s.virtualTranslate ||
                (n.isHorizontal()
                  ? (l -= n.cssOverflowAdjustment())
                  : (c -= n.cssOverflowAdjustment()),
                (r.style.transform = `translate3d(${l}px, ${c}px, 0px)`));
          const u = n.maxTranslate() - n.minTranslate();
          (a = 0 === u ? 0 : (e - n.minTranslate()) / u),
            a !== o && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === i && (i = !0);
          const o = this,
            { params: a, wrapperEl: l } = o;
          if (o.animating && a.preventInteractionOnTransition) return !1;
          const c = o.minTranslate(),
            u = o.maxTranslate();
          let d;
          if (
            ((d = i && e > c ? c : i && e < u ? u : e),
            o.updateProgress(d),
            a.cssMode)
          ) {
            const e = o.isHorizontal();
            if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!o.support.smoothScroll)
                return (
                  (0, r.t)({
                    swiper: o,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              l.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(d),
                n &&
                  (o.emit("beforeTransitionStart", t, s),
                  o.emit("transitionEnd")))
              : (o.setTransition(t),
                o.setTranslate(d),
                n &&
                  (o.emit("beforeTransitionStart", t, s),
                  o.emit("transitionStart")),
                o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                    (o.onTranslateToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.wrapperEl.removeEventListener(
                          "transitionend",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        (o.onTranslateToWrapperTransitionEnd = null),
                        delete o.onTranslateToWrapperTransitionEnd,
                        (o.animating = !1),
                        n && o.emit("transitionEnd"));
                    }),
                  o.wrapperEl.addEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function v(e) {
        let { swiper: t, runCallbacks: n, direction: i, step: s } = e;
        const { activeIndex: r, previousIndex: o } = t;
        let a = i;
        if (
          (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
          t.emit(`transition${s}`),
          n && r !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
          t.emit(`slideChangeTransition${s}`),
            "next" === a
              ? t.emit(`slideNextTransition${s}`)
              : t.emit(`slidePrevTransition${s}`);
        }
      }
      var S = {
        slideTo: function (e, t, n, i, s) {
          void 0 === e && (e = 0),
            void 0 === n && (n = !0),
            "string" === typeof e && (e = parseInt(e, 10));
          const o = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: l,
            snapGrid: c,
            slidesGrid: u,
            previousIndex: h,
            activeIndex: p,
            rtlTranslate: g,
            wrapperEl: f,
            enabled: m,
          } = o;
          if (
            (!m && !i && !s) ||
            o.destroyed ||
            (o.animating && l.preventInteractionOnTransition)
          )
            return !1;
          "undefined" === typeof t && (t = o.params.speed);
          const y = Math.min(o.params.slidesPerGroupSkip, a);
          let w = y + Math.floor((a - y) / o.params.slidesPerGroup);
          w >= c.length && (w = c.length - 1);
          const b = -c[w];
          if (l.normalizeSlideIndex)
            for (let r = 0; r < u.length; r += 1) {
              const e = -Math.floor(100 * b),
                t = Math.floor(100 * u[r]),
                n = Math.floor(100 * u[r + 1]);
              "undefined" !== typeof u[r + 1]
                ? e >= t && e < n - (n - t) / 2
                  ? (a = r)
                  : e >= t && e < n && (a = r + 1)
                : e >= t && (a = r);
            }
          if (o.initialized && a !== p) {
            if (
              !o.allowSlideNext &&
              (g
                ? b > o.translate && b > o.minTranslate()
                : b < o.translate && b < o.minTranslate())
            )
              return !1;
            if (
              !o.allowSlidePrev &&
              b > o.translate &&
              b > o.maxTranslate() &&
              (p || 0) !== a
            )
              return !1;
          }
          let v;
          a !== (h || 0) && n && o.emit("beforeSlideChangeStart"),
            o.updateProgress(b),
            (v = a > p ? "next" : a < p ? "prev" : "reset");
          const S = o.virtual && o.params.virtual.enabled;
          if (
            !(S && s) &&
            ((g && -b === o.translate) || (!g && b === o.translate))
          )
            return (
              o.updateActiveIndex(a),
              l.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== l.effect && o.setTranslate(b),
              "reset" !== v && (o.transitionStart(n, v), o.transitionEnd(n, v)),
              !1
            );
          if (l.cssMode) {
            const e = o.isHorizontal(),
              n = g ? b : -b;
            if (0 === t)
              S &&
                ((o.wrapperEl.style.scrollSnapType = "none"),
                (o._immediateVirtual = !0)),
                S && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
                  ? ((o._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      f[e ? "scrollLeft" : "scrollTop"] = n;
                    }))
                  : (f[e ? "scrollLeft" : "scrollTop"] = n),
                S &&
                  requestAnimationFrame(() => {
                    (o.wrapperEl.style.scrollSnapType = ""),
                      (o._immediateVirtual = !1);
                  });
            else {
              if (!o.support.smoothScroll)
                return (
                  (0, r.t)({
                    swiper: o,
                    targetPosition: n,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          const k = d().isSafari;
          return (
            S && !s && k && o.isElement && o.virtual.update(!1, !1, a),
            o.setTransition(t),
            o.setTranslate(b),
            o.updateActiveIndex(a),
            o.updateSlidesClasses(),
            o.emit("beforeTransitionStart", t, i),
            o.transitionStart(n, v),
            0 === t
              ? o.transitionEnd(n, v)
              : o.animating ||
                ((o.animating = !0),
                o.onSlideToWrapperTransitionEnd ||
                  (o.onSlideToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.wrapperEl.removeEventListener(
                        "transitionend",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      (o.onSlideToWrapperTransitionEnd = null),
                      delete o.onSlideToWrapperTransitionEnd,
                      o.transitionEnd(n, v));
                  }),
                o.wrapperEl.addEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = !0),
            "string" === typeof e)
          ) {
            e = parseInt(e, 10);
          }
          const s = this;
          if (s.destroyed) return;
          "undefined" === typeof t && (t = s.params.speed);
          const r = s.grid && s.params.grid && s.params.grid.rows > 1;
          let o = e;
          if (s.params.loop)
            if (s.virtual && s.params.virtual.enabled)
              o += s.virtual.slidesBefore;
            else {
              let e;
              if (r) {
                const t = o * s.params.grid.rows;
                e = s.slides.find(
                  (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                ).column;
              } else e = s.getSlideIndexByData(o);
              const t = r
                  ? Math.ceil(s.slides.length / s.params.grid.rows)
                  : s.slides.length,
                { centeredSlides: n } = s.params;
              let a = s.params.slidesPerView;
              "auto" === a
                ? (a = s.slidesPerViewDynamic())
                : ((a = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
                  n && a % 2 === 0 && (a += 1));
              let l = t - e < a;
              if (
                (n && (l = l || e < Math.ceil(a / 2)),
                i && n && "auto" !== s.params.slidesPerView && !r && (l = !1),
                l)
              ) {
                const i = n
                  ? e < s.activeIndex
                    ? "prev"
                    : "next"
                  : e - s.activeIndex - 1 < s.params.slidesPerView
                  ? "next"
                  : "prev";
                s.loopFix({
                  direction: i,
                  slideTo: !0,
                  activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                  slideRealIndex: "next" === i ? s.realIndex : void 0,
                });
              }
              if (r) {
                const e = o * s.params.grid.rows;
                o = s.slides.find(
                  (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                ).column;
              } else o = s.getSlideIndexByData(o);
            }
          return (
            requestAnimationFrame(() => {
              s.slideTo(o, t, n, i);
            }),
            s
          );
        },
        slideNext: function (e, t, n) {
          void 0 === t && (t = !0);
          const i = this,
            { enabled: s, params: r, animating: o } = i;
          if (!s || i.destroyed) return i;
          "undefined" === typeof e && (e = i.params.speed);
          let a = r.slidesPerGroup;
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
            c = i.virtual && r.virtual.enabled;
          if (r.loop) {
            if (o && !c && r.loopPreventsSliding) return !1;
            if (
              (i.loopFix({ direction: "next" }),
              (i._clientLeft = i.wrapperEl.clientLeft),
              i.activeIndex === i.slides.length - 1 && r.cssMode)
            )
              return (
                requestAnimationFrame(() => {
                  i.slideTo(i.activeIndex + l, e, t, n);
                }),
                !0
              );
          }
          return r.rewind && i.isEnd
            ? i.slideTo(0, e, t, n)
            : i.slideTo(i.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === t && (t = !0);
          const i = this,
            {
              params: s,
              snapGrid: r,
              slidesGrid: o,
              rtlTranslate: a,
              enabled: l,
              animating: c,
            } = i;
          if (!l || i.destroyed) return i;
          "undefined" === typeof e && (e = i.params.speed);
          const u = i.virtual && s.virtual.enabled;
          if (s.loop) {
            if (c && !u && s.loopPreventsSliding) return !1;
            i.loopFix({ direction: "prev" }),
              (i._clientLeft = i.wrapperEl.clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const h = d(a ? i.translate : -i.translate),
            p = r.map((e) => d(e)),
            g = s.freeMode && s.freeMode.enabled;
          let f = r[p.indexOf(h) - 1];
          if ("undefined" === typeof f && (s.cssMode || g)) {
            let e;
            r.forEach((t, n) => {
              h >= t && (e = n);
            }),
              "undefined" !== typeof e && (f = g ? r[e] : r[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          if (
            ("undefined" !== typeof f &&
              ((m = o.indexOf(f)),
              m < 0 && (m = i.activeIndex - 1),
              "auto" === s.slidesPerView &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            s.rewind && i.isBeginning)
          ) {
            const s =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(s, e, t, n);
          }
          return s.loop && 0 === i.activeIndex && s.cssMode
            ? (requestAnimationFrame(() => {
                i.slideTo(m, e, t, n);
              }),
              !0)
            : i.slideTo(m, e, t, n);
        },
        slideReset: function (e, t, n) {
          void 0 === t && (t = !0);
          const i = this;
          if (!i.destroyed)
            return (
              "undefined" === typeof e && (e = i.params.speed),
              i.slideTo(i.activeIndex, e, t, n)
            );
        },
        slideToClosest: function (e, t, n, i) {
          void 0 === t && (t = !0), void 0 === i && (i = 0.5);
          const s = this;
          if (s.destroyed) return;
          "undefined" === typeof e && (e = s.params.speed);
          let r = s.activeIndex;
          const o = Math.min(s.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / s.params.slidesPerGroup),
            l = s.rtlTranslate ? s.translate : -s.translate;
          if (l >= s.snapGrid[a]) {
            const e = s.snapGrid[a];
            l - e > (s.snapGrid[a + 1] - e) * i &&
              (r += s.params.slidesPerGroup);
          } else {
            const e = s.snapGrid[a - 1];
            l - e <= (s.snapGrid[a] - e) * i && (r -= s.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, s.slidesGrid.length - 1)),
            s.slideTo(r, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this;
          if (e.destroyed) return;
          const { params: t, slidesEl: n } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let s,
            o = e.clickedIndex;
          const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
          if (t.loop) {
            if (e.animating) return;
            (s = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? o < e.loopedSlides - i / 2 ||
                  o > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (o = e.getSlideIndex(
                      (0, r.e)(n, `${a}[data-swiper-slide-index="${s}"]`)[0]
                    )),
                    (0, r.n)(() => {
                      e.slideTo(o);
                    }))
                  : e.slideTo(o)
                : o > e.slides.length - i
                ? (e.loopFix(),
                  (o = e.getSlideIndex(
                    (0, r.e)(n, `${a}[data-swiper-slide-index="${s}"]`)[0]
                  )),
                  (0, r.n)(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o);
          } else e.slideTo(o);
        },
      };
      var k = {
        loopCreate: function (e, t) {
          const n = this,
            { params: i, slidesEl: s } = n;
          if (!i.loop || (n.virtual && n.params.virtual.enabled)) return;
          const o = () => {
              (0, r.e)(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                e.setAttribute("data-swiper-slide-index", t);
              });
            },
            a = n.grid && i.grid && i.grid.rows > 1,
            l = i.slidesPerGroup * (a ? i.grid.rows : 1),
            c = n.slides.length % l !== 0,
            u = a && n.slides.length % i.grid.rows !== 0,
            d = (e) => {
              for (let t = 0; t < e; t += 1) {
                const e = n.isElement
                  ? (0, r.c)("swiper-slide", [i.slideBlankClass])
                  : (0, r.c)("div", [i.slideClass, i.slideBlankClass]);
                n.slidesEl.append(e);
              }
            };
          if (c) {
            if (i.loopAddBlankSlides) {
              d(l - (n.slides.length % l)), n.recalcSlides(), n.updateSlides();
            } else
              (0, r.u)(
                "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            o();
          } else if (u) {
            if (i.loopAddBlankSlides) {
              d(i.grid.rows - (n.slides.length % i.grid.rows)),
                n.recalcSlides(),
                n.updateSlides();
            } else
              (0, r.u)(
                "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            o();
          } else o();
          n.loopFix({
            slideRealIndex: e,
            direction: i.centeredSlides ? void 0 : "next",
            initial: t,
          });
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: n = !0,
            direction: i,
            setTranslate: s,
            activeSlideIndex: o,
            initial: a,
            byController: l,
            byMousewheel: c,
          } = void 0 === e ? {} : e;
          const u = this;
          if (!u.params.loop) return;
          u.emit("beforeLoopFix");
          const {
              slides: d,
              allowSlidePrev: h,
              allowSlideNext: p,
              slidesEl: g,
              params: f,
            } = u,
            { centeredSlides: m, initialSlide: y } = f;
          if (
            ((u.allowSlidePrev = !0),
            (u.allowSlideNext = !0),
            u.virtual && f.virtual.enabled)
          )
            return (
              n &&
                (f.centeredSlides || 0 !== u.snapIndex
                  ? f.centeredSlides && u.snapIndex < f.slidesPerView
                    ? u.slideTo(
                        u.virtual.slides.length + u.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : u.snapIndex === u.snapGrid.length - 1 &&
                      u.slideTo(u.virtual.slidesBefore, 0, !1, !0)
                  : u.slideTo(u.virtual.slides.length, 0, !1, !0)),
              (u.allowSlidePrev = h),
              (u.allowSlideNext = p),
              void u.emit("loopFix")
            );
          let w = f.slidesPerView;
          "auto" === w
            ? (w = u.slidesPerViewDynamic())
            : ((w = Math.ceil(parseFloat(f.slidesPerView, 10))),
              m && w % 2 === 0 && (w += 1));
          const b = f.slidesPerGroupAuto ? w : f.slidesPerGroup;
          let v = b;
          v % b !== 0 && (v += b - (v % b)),
            (v += f.loopAdditionalSlides),
            (u.loopedSlides = v);
          const S = u.grid && f.grid && f.grid.rows > 1;
          d.length < w + v ||
          ("cards" === u.params.effect && d.length < w + 2 * v)
            ? (0, r.u)(
                "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
              )
            : S &&
              "row" === f.grid.fill &&
              (0, r.u)(
                "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
              );
          const k = [],
            M = [],
            I = S ? Math.ceil(d.length / f.grid.rows) : d.length,
            T = a && I - y < w && !m;
          let x = T ? y : u.activeIndex;
          "undefined" === typeof o
            ? (o = u.getSlideIndex(
                d.find((e) => e.classList.contains(f.slideActiveClass))
              ))
            : (x = o);
          const A = "next" === i || !i,
            E = "prev" === i || !i;
          let L = 0,
            N = 0;
          const z =
            (S ? d[o].column : o) +
            (m && "undefined" === typeof s ? -w / 2 + 0.5 : 0);
          if (z < v) {
            L = Math.max(v - z, b);
            for (let e = 0; e < v - z; e += 1) {
              const t = e - Math.floor(e / I) * I;
              if (S) {
                const e = I - t - 1;
                for (let t = d.length - 1; t >= 0; t -= 1)
                  d[t].column === e && k.push(t);
              } else k.push(I - t - 1);
            }
          } else if (z + w > I - v) {
            (N = Math.max(z - (I - 2 * v), b)),
              T && (N = Math.max(N, w - I + y + 1));
            for (let e = 0; e < N; e += 1) {
              const t = e - Math.floor(e / I) * I;
              S
                ? d.forEach((e, n) => {
                    e.column === t && M.push(n);
                  })
                : M.push(t);
            }
          }
          if (
            ((u.__preventObserver__ = !0),
            requestAnimationFrame(() => {
              u.__preventObserver__ = !1;
            }),
            "cards" === u.params.effect &&
              d.length < w + 2 * v &&
              (M.includes(o) && M.splice(M.indexOf(o), 1),
              k.includes(o) && k.splice(k.indexOf(o), 1)),
            E &&
              k.forEach((e) => {
                (d[e].swiperLoopMoveDOM = !0),
                  g.prepend(d[e]),
                  (d[e].swiperLoopMoveDOM = !1);
              }),
            A &&
              M.forEach((e) => {
                (d[e].swiperLoopMoveDOM = !0),
                  g.append(d[e]),
                  (d[e].swiperLoopMoveDOM = !1);
              }),
            u.recalcSlides(),
            "auto" === f.slidesPerView
              ? u.updateSlides()
              : S &&
                ((k.length > 0 && E) || (M.length > 0 && A)) &&
                u.slides.forEach((e, t) => {
                  u.grid.updateSlide(t, e, u.slides);
                }),
            f.watchSlidesProgress && u.updateSlidesOffset(),
            n)
          )
            if (k.length > 0 && E) {
              if ("undefined" === typeof t) {
                const e = u.slidesGrid[x],
                  t = u.slidesGrid[x + L] - e;
                c
                  ? u.setTranslate(u.translate - t)
                  : (u.slideTo(x + Math.ceil(L), 0, !1, !0),
                    s &&
                      ((u.touchEventsData.startTranslate =
                        u.touchEventsData.startTranslate - t),
                      (u.touchEventsData.currentTranslate =
                        u.touchEventsData.currentTranslate - t)));
              } else if (s) {
                const e = S ? k.length / f.grid.rows : k.length;
                u.slideTo(u.activeIndex + e, 0, !1, !0),
                  (u.touchEventsData.currentTranslate = u.translate);
              }
            } else if (M.length > 0 && A)
              if ("undefined" === typeof t) {
                const e = u.slidesGrid[x],
                  t = u.slidesGrid[x - N] - e;
                c
                  ? u.setTranslate(u.translate - t)
                  : (u.slideTo(x - N, 0, !1, !0),
                    s &&
                      ((u.touchEventsData.startTranslate =
                        u.touchEventsData.startTranslate - t),
                      (u.touchEventsData.currentTranslate =
                        u.touchEventsData.currentTranslate - t)));
              } else {
                const e = S ? M.length / f.grid.rows : M.length;
                u.slideTo(u.activeIndex - e, 0, !1, !0);
              }
          if (
            ((u.allowSlidePrev = h),
            (u.allowSlideNext = p),
            u.controller && u.controller.control && !l)
          ) {
            const e = {
              slideRealIndex: t,
              direction: i,
              setTranslate: s,
              activeSlideIndex: o,
              byController: !0,
            };
            Array.isArray(u.controller.control)
              ? u.controller.control.forEach((t) => {
                  !t.destroyed &&
                    t.params.loop &&
                    t.loopFix({
                      ...e,
                      slideTo: t.params.slidesPerView === f.slidesPerView && n,
                    });
                })
              : u.controller.control instanceof u.constructor &&
                u.controller.control.params.loop &&
                u.controller.control.loopFix({
                  ...e,
                  slideTo:
                    u.controller.control.params.slidesPerView ===
                      f.slidesPerView && n,
                });
          }
          u.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: n } = e;
          if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const i = [];
          e.slides.forEach((e) => {
            const t =
              "undefined" === typeof e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            i[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            i.forEach((e) => {
              n.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      function M(e, t, n) {
        const i = (0, s.a)(),
          { params: r } = e,
          o = r.edgeSwipeDetection,
          a = r.edgeSwipeThreshold;
        return (
          !o ||
          !(n <= a || n >= i.innerWidth - a) ||
          ("prevent" === o && (t.preventDefault(), !0))
        );
      }
      function I(e) {
        const t = this,
          n = (0, s.g)();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const o = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== o.pointerId && o.pointerId !== i.pointerId) return;
          o.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (o.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type)
          return void M(t, i, i.targetTouches[0].pageX);
        const { params: a, touches: l, enabled: c } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && a.preventInteractionOnTransition) return;
        !t.animating && a.cssMode && a.loop && t.loopFix();
        let u = i.target;
        if ("wrapper" === a.touchEventsTarget && !(0, r.v)(u, t.wrapperEl))
          return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (o.isTouched && o.isMoved) return;
        const d = !!a.noSwipingClass && "" !== a.noSwipingClass,
          h = i.composedPath ? i.composedPath() : i.path;
        d && i.target && i.target.shadowRoot && h && (u = h[0]);
        const p = a.noSwipingSelector
            ? a.noSwipingSelector
            : `.${a.noSwipingClass}`,
          g = !(!i.target || !i.target.shadowRoot);
        if (
          a.noSwiping &&
          (g
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === (0, s.g)() || n === (0, s.a)()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const i = n.closest(e);
                    return i || n.getRootNode
                      ? i || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, u)
            : u.closest(p))
        )
          return void (t.allowClick = !0);
        if (a.swipeHandler && !u.closest(a.swipeHandler)) return;
        (l.currentX = i.pageX), (l.currentY = i.pageY);
        const f = l.currentX,
          m = l.currentY;
        if (!M(t, i, f)) return;
        Object.assign(o, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (l.startX = f),
          (l.startY = m),
          (o.touchStartTime = (0, r.d)()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          a.threshold > 0 && (o.allowThresholdMove = !1);
        let y = !0;
        u.matches(o.focusableElements) &&
          ((y = !1), "SELECT" === u.nodeName && (o.isTouched = !1)),
          n.activeElement &&
            n.activeElement.matches(o.focusableElements) &&
            n.activeElement !== u &&
            ("mouse" === i.pointerType ||
              ("mouse" !== i.pointerType && !u.matches(o.focusableElements))) &&
            n.activeElement.blur();
        const w = y && t.allowTouchMove && a.touchStartPreventDefault;
        (!a.touchStartForcePreventDefault && !w) ||
          u.isContentEditable ||
          i.preventDefault(),
          a.freeMode &&
            a.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !a.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", i);
      }
      function T(e) {
        const t = (0, s.g)(),
          n = this,
          i = n.touchEventsData,
          { params: o, touches: a, rtlTranslate: l, enabled: c } = n;
        if (!c) return;
        if (!o.simulateTouch && "mouse" === e.pointerType) return;
        let u,
          d = e;
        if (
          (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type)
        ) {
          if (null !== i.touchId) return;
          if (d.pointerId !== i.pointerId) return;
        }
        if ("touchmove" === d.type) {
          if (
            ((u = [...d.changedTouches].find(
              (e) => e.identifier === i.touchId
            )),
            !u || u.identifier !== i.touchId)
          )
            return;
        } else u = d;
        if (!i.isTouched)
          return void (
            i.startMoving &&
            i.isScrolling &&
            n.emit("touchMoveOpposite", d)
          );
        const h = u.pageX,
          p = u.pageY;
        if (d.preventedByNestedSwiper)
          return (a.startX = h), void (a.startY = p);
        if (!n.allowTouchMove)
          return (
            d.target.matches(i.focusableElements) || (n.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(a, {
                startX: h,
                startY: p,
                currentX: h,
                currentY: p,
              }),
              (i.touchStartTime = (0, r.d)()))
            )
          );
        if (o.touchReleaseOnEdges && !o.loop)
          if (n.isVertical()) {
            if (
              (p < a.startY && n.translate <= n.maxTranslate()) ||
              (p > a.startY && n.translate >= n.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else {
            if (
              l &&
              ((h > a.startX && -n.translate <= n.maxTranslate()) ||
                (h < a.startX && -n.translate >= n.minTranslate()))
            )
              return;
            if (
              !l &&
              ((h < a.startX && n.translate <= n.maxTranslate()) ||
                (h > a.startX && n.translate >= n.minTranslate()))
            )
              return;
          }
        if (
          (t.activeElement &&
            t.activeElement.matches(i.focusableElements) &&
            t.activeElement !== d.target &&
            "mouse" !== d.pointerType &&
            t.activeElement.blur(),
          t.activeElement &&
            d.target === t.activeElement &&
            d.target.matches(i.focusableElements))
        )
          return (i.isMoved = !0), void (n.allowClick = !1);
        i.allowTouchCallbacks && n.emit("touchMove", d),
          (a.previousX = a.currentX),
          (a.previousY = a.currentY),
          (a.currentX = h),
          (a.currentY = p);
        const g = a.currentX - a.startX,
          f = a.currentY - a.startY;
        if (
          n.params.threshold &&
          Math.sqrt(g ** 2 + f ** 2) < n.params.threshold
        )
          return;
        if ("undefined" === typeof i.isScrolling) {
          let e;
          (n.isHorizontal() && a.currentY === a.startY) ||
          (n.isVertical() && a.currentX === a.startX)
            ? (i.isScrolling = !1)
            : g * g + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(g))) / Math.PI),
              (i.isScrolling = n.isHorizontal()
                ? e > o.touchAngle
                : 90 - e > o.touchAngle));
        }
        if (
          (i.isScrolling && n.emit("touchMoveOpposite", d),
          "undefined" === typeof i.startMoving &&
            ((a.currentX === a.startX && a.currentY === a.startY) ||
              (i.startMoving = !0)),
          i.isScrolling ||
            ("touchmove" === d.type && i.preventTouchMoveFromPointerMove))
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (n.allowClick = !1),
          !o.cssMode && d.cancelable && d.preventDefault(),
          o.touchMoveStopPropagation && !o.nested && d.stopPropagation();
        let m = n.isHorizontal() ? g : f,
          y = n.isHorizontal()
            ? a.currentX - a.previousX
            : a.currentY - a.previousY;
        o.oneWayMovement &&
          ((m = Math.abs(m) * (l ? 1 : -1)), (y = Math.abs(y) * (l ? 1 : -1))),
          (a.diff = m),
          (m *= o.touchRatio),
          l && ((m = -m), (y = -y));
        const w = n.touchesDirection;
        (n.swipeDirection = m > 0 ? "prev" : "next"),
          (n.touchesDirection = y > 0 ? "prev" : "next");
        const b = n.params.loop && !o.cssMode,
          v =
            ("next" === n.touchesDirection && n.allowSlideNext) ||
            ("prev" === n.touchesDirection && n.allowSlidePrev);
        if (!i.isMoved) {
          if (
            (b && v && n.loopFix({ direction: n.swipeDirection }),
            (i.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            n.wrapperEl.dispatchEvent(e);
          }
          (i.allowMomentumBounce = !1),
            !o.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", d);
        }
        if (
          (new Date().getTime(),
          !1 !== o._loopSwapReset &&
            i.isMoved &&
            i.allowThresholdMove &&
            w !== n.touchesDirection &&
            b &&
            v &&
            Math.abs(m) >= 1)
        )
          return (
            Object.assign(a, {
              startX: h,
              startY: p,
              currentX: h,
              currentY: p,
              startTranslate: i.currentTranslate,
            }),
            (i.loopSwapReset = !0),
            void (i.startTranslate = i.currentTranslate)
          );
        n.emit("sliderMove", d),
          (i.isMoved = !0),
          (i.currentTranslate = m + i.startTranslate);
        let S = !0,
          k = o.resistanceRatio;
        if (
          (o.touchReleaseOnEdges && (k = 0),
          m > 0
            ? (b &&
                v &&
                i.allowThresholdMove &&
                i.currentTranslate >
                  (o.centeredSlides
                    ? n.minTranslate() -
                      n.slidesSizesGrid[n.activeIndex + 1] -
                      ("auto" !== o.slidesPerView &&
                      n.slides.length - o.slidesPerView >= 2
                        ? n.slidesSizesGrid[n.activeIndex + 1] +
                          n.params.spaceBetween
                        : 0) -
                      n.params.spaceBetween
                    : n.minTranslate()) &&
                n.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              i.currentTranslate > n.minTranslate() &&
                ((S = !1),
                o.resistance &&
                  (i.currentTranslate =
                    n.minTranslate() -
                    1 +
                    (-n.minTranslate() + i.startTranslate + m) ** k)))
            : m < 0 &&
              (b &&
                v &&
                i.allowThresholdMove &&
                i.currentTranslate <
                  (o.centeredSlides
                    ? n.maxTranslate() +
                      n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                      n.params.spaceBetween +
                      ("auto" !== o.slidesPerView &&
                      n.slides.length - o.slidesPerView >= 2
                        ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                          n.params.spaceBetween
                        : 0)
                    : n.maxTranslate()) &&
                n.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    n.slides.length -
                    ("auto" === o.slidesPerView
                      ? n.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(o.slidesPerView, 10))),
                }),
              i.currentTranslate < n.maxTranslate() &&
                ((S = !1),
                o.resistance &&
                  (i.currentTranslate =
                    n.maxTranslate() +
                    1 -
                    (n.maxTranslate() - i.startTranslate - m) ** k))),
          S && (d.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          o.threshold > 0)
        ) {
          if (!(Math.abs(m) > o.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (a.startX = a.currentX),
              (a.startY = a.currentY),
              (i.currentTranslate = i.startTranslate),
              void (a.diff = n.isHorizontal()
                ? a.currentX - a.startX
                : a.currentY - a.startY)
            );
        }
        o.followFinger &&
          !o.cssMode &&
          (((o.freeMode && o.freeMode.enabled && n.freeMode) ||
            o.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          o.freeMode &&
            o.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(i.currentTranslate),
          n.setTranslate(i.currentTranslate));
      }
      function x(e) {
        const t = this,
          n = t.touchEventsData;
        let i,
          s = e;
        s.originalEvent && (s = s.originalEvent);
        if ("touchend" === s.type || "touchcancel" === s.type) {
          if (
            ((i = [...s.changedTouches].find(
              (e) => e.identifier === n.touchId
            )),
            !i || i.identifier !== n.touchId)
          )
            return;
        } else {
          if (null !== n.touchId) return;
          if (s.pointerId !== n.pointerId) return;
          i = s;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(s.type)
        ) {
          if (
            !(
              ["pointercancel", "contextmenu"].includes(s.type) &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        (n.pointerId = null), (n.touchId = null);
        const {
          params: o,
          touches: a,
          rtlTranslate: l,
          slidesGrid: c,
          enabled: u,
        } = t;
        if (!u) return;
        if (!o.simulateTouch && "mouse" === s.pointerType) return;
        if (
          (n.allowTouchCallbacks && t.emit("touchEnd", s),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && o.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        o.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = (0, r.d)(),
          h = d - n.touchStartTime;
        if (t.allowClick) {
          const e = s.path || (s.composedPath && s.composedPath());
          t.updateClickedSlide((e && e[0]) || s.target, e),
            t.emit("tap click", s),
            h < 300 &&
              d - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", s);
        }
        if (
          ((n.lastClickTime = (0, r.d)()),
          (0, r.n)(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            (0 === a.diff && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let p;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (p = o.followFinger
            ? l
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          o.cssMode)
        )
          return;
        if (o.freeMode && o.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: p });
        const g = p >= -t.maxTranslate() && !t.params.loop;
        let f = 0,
          m = t.slidesSizesGrid[0];
        for (
          let r = 0;
          r < c.length;
          r += r < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
        ) {
          const e = r < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
          "undefined" !== typeof c[r + e]
            ? (g || (p >= c[r] && p < c[r + e])) &&
              ((f = r), (m = c[r + e] - c[r]))
            : (g || p >= c[r]) &&
              ((f = r), (m = c[c.length - 1] - c[c.length - 2]));
        }
        let y = null,
          w = null;
        o.rewind &&
          (t.isBeginning
            ? (w =
                o.virtual && o.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (y = 0));
        const b = (p - c[f]) / m,
          v = f < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
        if (h > o.longSwipesMs) {
          if (!o.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (b >= o.longSwipesRatio
              ? t.slideTo(o.rewind && t.isEnd ? y : f + v)
              : t.slideTo(f)),
            "prev" === t.swipeDirection &&
              (b > 1 - o.longSwipesRatio
                ? t.slideTo(f + v)
                : null !== w && b < 0 && Math.abs(b) > o.longSwipesRatio
                ? t.slideTo(w)
                : t.slideTo(f));
        } else {
          if (!o.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
            ? s.target === t.navigation.nextEl
              ? t.slideTo(f + v)
              : t.slideTo(f)
            : ("next" === t.swipeDirection && t.slideTo(null !== y ? y : f + v),
              "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
        }
      }
      function A() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e,
          o = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const a = o && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        a
          ? e.params.loop && !o
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = i),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function E(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function L() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
        if (!i) return;
        let s;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      function N(e) {
        const t = this;
        f(t, e.target),
          t.params.cssMode ||
            ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      function z() {
        const e = this;
        e.documentTouchHandlerProceeded ||
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
      }
      const j = (e, t) => {
        const n = (0, s.g)(),
          { params: i, el: r, wrapperEl: o, device: a } = e,
          l = !!i.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        r &&
          "string" !== typeof r &&
          (n[c]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l,
          }),
          r[c]("touchstart", e.onTouchStart, { passive: !1 }),
          r[c]("pointerdown", e.onTouchStart, { passive: !1 }),
          n[c]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
          n[c]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
          n[c]("touchend", e.onTouchEnd, { passive: !0 }),
          n[c]("pointerup", e.onTouchEnd, { passive: !0 }),
          n[c]("pointercancel", e.onTouchEnd, { passive: !0 }),
          n[c]("touchcancel", e.onTouchEnd, { passive: !0 }),
          n[c]("pointerout", e.onTouchEnd, { passive: !0 }),
          n[c]("pointerleave", e.onTouchEnd, { passive: !0 }),
          n[c]("contextmenu", e.onTouchEnd, { passive: !0 }),
          (i.preventClicks || i.preventClicksPropagation) &&
            r[c]("click", e.onClick, !0),
          i.cssMode && o[c]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[u](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                A,
                !0
              )
            : e[u]("observerUpdate", A, !0),
          r[c]("load", e.onLoad, { capture: !0 }));
      };
      const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var C = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function P(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const i = Object.keys(n)[0],
            s = n[i];
          "object" === typeof s && null !== s
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "navigation" === i &&
                e[i] &&
                e[i].enabled &&
                !e[i].prevEl &&
                !e[i].nextEl &&
                (e[i].auto = !0),
              ["pagination", "scrollbar"].indexOf(i) >= 0 &&
                e[i] &&
                e[i].enabled &&
                !e[i].el &&
                (e[i].auto = !0),
              i in e && "enabled" in s
                ? ("object" !== typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  (0, r.w)(t, n))
                : (0, r.w)(t, n))
            : (0, r.w)(t, n);
        };
      }
      const _ = {
          eventsEmitter: h,
          update: w,
          translate: b,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode ||
                ((n.wrapperEl.style.transitionDuration = `${e}ms`),
                (n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              i.cssMode ||
                (i.autoHeight && n.updateAutoHeight(),
                v({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              (n.animating = !1),
                i.cssMode ||
                  (n.setTransition(0),
                  v({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: S,
          loop: k,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                { params: t } = e;
              (e.onTouchStart = I.bind(e)),
                (e.onTouchMove = T.bind(e)),
                (e.onTouchEnd = x.bind(e)),
                (e.onDocumentTouchStart = z.bind(e)),
                t.cssMode && (e.onScroll = L.bind(e)),
                (e.onClick = E.bind(e)),
                (e.onLoad = N.bind(e)),
                j(e, "on");
            },
            detachEvents: function () {
              j(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                { realIndex: t, initialized: n, params: i, el: o } = e,
                a = i.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              const l = (0, s.g)(),
                c =
                  "window" !== i.breakpointsBase && i.breakpointsBase
                    ? "container"
                    : i.breakpointsBase,
                u =
                  ["window", "container"].includes(i.breakpointsBase) ||
                  !i.breakpointsBase
                    ? e.el
                    : l.querySelector(i.breakpointsBase),
                d = e.getBreakpoint(a, c, u);
              if (!d || e.currentBreakpoint === d) return;
              const h = (d in a ? a[d] : void 0) || e.originalParams,
                p = D(e, i),
                g = D(e, h),
                f = e.params.grabCursor,
                m = h.grabCursor,
                y = i.enabled;
              p && !g
                ? (o.classList.remove(
                    `${i.containerModifierClass}grid`,
                    `${i.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !p &&
                  g &&
                  (o.classList.add(`${i.containerModifierClass}grid`),
                  ((h.grid.fill && "column" === h.grid.fill) ||
                    (!h.grid.fill && "column" === i.grid.fill)) &&
                    o.classList.add(`${i.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                f && !m ? e.unsetGrabCursor() : !f && m && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if ("undefined" === typeof h[t]) return;
                  const n = i[t] && i[t].enabled,
                    s = h[t] && h[t].enabled;
                  n && !s && e[t].disable(), !n && s && e[t].enable();
                });
              const w = h.direction && h.direction !== i.direction,
                b = i.loop && (h.slidesPerView !== i.slidesPerView || w),
                v = i.loop;
              w && n && e.changeDirection(), (0, r.w)(e.params, h);
              const S = e.params.enabled,
                k = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                y && !S ? e.disable() : !y && S && e.enable(),
                (e.currentBreakpoint = d),
                e.emit("_beforeBreakpoint", h),
                n &&
                  (b
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !v && k
                    ? (e.loopCreate(t), e.updateSlides())
                    : v && !k && e.loopDestroy()),
                e.emit("breakpoint", h);
            },
            getBreakpoint: function (e, t, n) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !n))
              )
                return;
              let i = !1;
              const r = (0, s.a)(),
                o = "window" === t ? r.innerHeight : n.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ("string" === typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: o * t, point: e };
                  }
                  return { value: e, point: e };
                });
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let s = 0; s < a.length; s += 1) {
                const { point: e, value: o } = a[s];
                "window" === t
                  ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = e)
                  : o <= n.clientWidth && (i = e);
              }
              return i || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: i } = n;
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                { classNames: t, params: n, rtl: i, el: s, device: r } = e,
                o = (function (e, t) {
                  const n = [];
                  return (
                    e.forEach((e) => {
                      "object" === typeof e
                        ? Object.keys(e).forEach((i) => {
                            e[i] && n.push(t + i);
                          })
                        : "string" === typeof e && n.push(t + e);
                    }),
                    n
                  );
                })(
                  [
                    "initialized",
                    n.direction,
                    { "free-mode": e.params.freeMode && n.freeMode.enabled },
                    { autoheight: n.autoHeight },
                    { rtl: i },
                    { grid: n.grid && n.grid.rows > 1 },
                    {
                      "grid-column":
                        n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                    },
                    { android: r.android },
                    { ios: r.ios },
                    { "css-mode": n.cssMode },
                    { centered: n.cssMode && n.centeredSlides },
                    { "watch-progress": n.watchSlidesProgress },
                  ],
                  n.containerModifierClass
                );
              t.push(...o), s.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function () {
              const { el: e, classNames: t } = this;
              e &&
                "string" !== typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        O = {};
      class B {
        constructor() {
          let e, t;
          for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
            t || (t = {}),
            (t = (0, r.w)({}, t)),
            e && !t.el && (t.el = e);
          const a = (0, s.g)();
          if (
            t.el &&
            "string" === typeof t.el &&
            a.querySelectorAll(t.el).length > 1
          ) {
            const e = [];
            return (
              a.querySelectorAll(t.el).forEach((n) => {
                const i = (0, r.w)({}, t, { el: n });
                e.push(new B(i));
              }),
              e
            );
          }
          const l = this;
          (l.__swiper__ = !0),
            (l.support = c()),
            (l.device = u({ userAgent: t.userAgent })),
            (l.browser = d()),
            (l.eventsListeners = {}),
            (l.eventsAnyListeners = []),
            (l.modules = [...l.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              l.modules.push(...t.modules);
          const h = {};
          l.modules.forEach((e) => {
            e({
              params: t,
              swiper: l,
              extendParams: P(t, h),
              on: l.on.bind(l),
              once: l.once.bind(l),
              off: l.off.bind(l),
              emit: l.emit.bind(l),
            });
          });
          const p = (0, r.w)({}, C, h);
          return (
            (l.params = (0, r.w)({}, p, O, t)),
            (l.originalParams = (0, r.w)({}, l.params)),
            (l.passedParams = (0, r.w)({}, t)),
            l.params &&
              l.params.on &&
              Object.keys(l.params.on).forEach((e) => {
                l.on(e, l.params.on[e]);
              }),
            l.params && l.params.onAny && l.onAny(l.params.onAny),
            Object.assign(l, {
              enabled: l.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === l.params.direction,
              isVertical: () => "vertical" === l.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            l.emit("_swiper"),
            l.params.init && l.init(),
            l
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: n } = this,
            i = (0, r.e)(t, `.${n.slideClass}, swiper-slide`),
            s = (0, r.h)(i[0]);
          return (0, r.h)(e) - s;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.find(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = (0, r.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = n.minTranslate(),
            s = (n.maxTranslate() - i) * e + i;
          n.translateTo(s, "undefined" === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((n) => {
            const i = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: i,
            slidesGrid: s,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if ("number" === typeof n.slidesPerView) return n.slidesPerView;
          if (n.centeredSlides) {
            let e,
              t = i[a] ? Math.ceil(i[a].swiperSlideSize) : 0;
            for (let n = a + 1; n < i.length; n += 1)
              i[n] &&
                !e &&
                ((t += Math.ceil(i[n].swiperSlideSize)),
                (l += 1),
                t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let c = a + 1; c < i.length; c += 1) {
              (t ? s[c] + r[c] - s[a] < o : s[c] - s[a] < o) && (l += 1);
            }
          else
            for (let c = a - 1; c >= 0; c -= 1) {
              s[a] - s[c] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let s;
          if (
            (n.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && f(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            n.freeMode && n.freeMode.enabled && !n.cssMode)
          )
            i(), n.autoHeight && e.updateAutoHeight();
          else {
            if (
              ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
              e.isEnd &&
              !n.centeredSlides
            ) {
              const t =
                e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
              s = e.slideTo(t.length - 1, 0, !1, !0);
            } else s = e.slideTo(e.activeIndex, 0, !1, !0);
            s || i();
          }
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            i = n.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.el.classList.remove(`${n.params.containerModifierClass}${i}`),
              n.el.classList.add(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let n = e || t.params.el;
          if (("string" === typeof n && (n = document.querySelector(n)), !n))
            return !1;
          (n.swiper = t),
            n.parentNode &&
              n.parentNode.host &&
              n.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let s = (() => {
            if (n && n.shadowRoot && n.shadowRoot.querySelector) {
              return n.shadowRoot.querySelector(i());
            }
            return (0, r.e)(n, i())[0];
          })();
          return (
            !s &&
              t.params.createElements &&
              ((s = (0, r.c)("div", t.params.wrapperClass)),
              n.append(s),
              (0, r.e)(n, `.${t.params.slideClass}`).forEach((e) => {
                s.append(e);
              })),
            Object.assign(t, {
              el: n,
              wrapperEl: s,
              slidesEl:
                t.isElement && !n.parentNode.host.slideSlots
                  ? n.parentNode.host
                  : s,
              hostEl: t.isElement ? n.parentNode.host : n,
              mounted: !0,
              rtl:
                "rtl" === n.dir.toLowerCase() ||
                "rtl" === (0, r.p)(n, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === n.dir.toLowerCase() ||
                  "rtl" === (0, r.p)(n, "direction")),
              wrongRTL: "-webkit-box" === (0, r.p)(s, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(void 0, !0),
            t.attachEvents();
          const n = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            n.forEach((e) => {
              e.complete
                ? f(t, e)
                : e.addEventListener("load", (e) => {
                    f(t, e.target);
                  });
            }),
            y(t),
            (t.initialized = !0),
            y(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: i, el: s, wrapperEl: o, slides: a } = n;
          return (
            "undefined" === typeof n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              i.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                s && "string" !== typeof s && s.removeAttribute("style"),
                o && o.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      i.slideVisibleClass,
                      i.slideFullyVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                (n.el && "string" !== typeof n.el && (n.el.swiper = null),
                (0, r.x)(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, r.w)(O, e);
        }
        static get extendedDefaults() {
          return O;
        }
        static get defaults() {
          return C;
        }
        static installModule(e) {
          B.prototype.__modules__ || (B.prototype.__modules__ = []);
          const t = B.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => B.installModule(e)), B)
            : (B.installModule(e), B);
        }
      }
      Object.keys(_).forEach((e) => {
        Object.keys(_[e]).forEach((t) => {
          B.prototype[t] = _[e][t];
        });
      }),
        B.use([
          function (e) {
            let { swiper: t, on: n, emit: i } = e;
            const r = (0, s.a)();
            let o = null,
              a = null;
            const l = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              c = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && "undefined" !== typeof r.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((o = new ResizeObserver((e) => {
                    a = r.requestAnimationFrame(() => {
                      const { width: n, height: i } = t;
                      let s = n,
                        r = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: i,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((s = i ? i.width : (n[0] || n).inlineSize),
                          (r = i ? i.height : (n[0] || n).blockSize));
                      }),
                        (s === n && r === i) || l();
                    });
                  })),
                  o.observe(t.el))
                : (r.addEventListener("resize", l),
                  r.addEventListener("orientationchange", c));
            }),
              n("destroy", () => {
                a && r.cancelAnimationFrame(a),
                  o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)),
                  r.removeEventListener("resize", l),
                  r.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: i, emit: o } = e;
            const a = [],
              l = (0, s.a)(),
              c = function (e, n) {
                void 0 === n && (n = {});
                const i = new (l.MutationObserver || l.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void o("observerUpdate", e[0]);
                    const n = function () {
                      o("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame
                      ? l.requestAnimationFrame(n)
                      : l.setTimeout(n, 0);
                  }
                );
                i.observe(e, {
                  attributes:
                    "undefined" === typeof n.attributes || n.attributes,
                  childList:
                    t.isElement ||
                    ("undefined" === typeof n.childList || n).childList,
                  characterData:
                    "undefined" === typeof n.characterData || n.characterData,
                }),
                  a.push(i);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = (0, r.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) c(e[t]);
                  }
                  c(t.hostEl, { childList: t.params.observeSlideChildren }),
                    c(t.wrapperEl, { attributes: !1 });
                }
              }),
              i("destroy", () => {
                a.forEach((e) => {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              });
          },
        ]);
      const W = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function R(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function U(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : R(t[n]) && R(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : U(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function H(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function Y(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function K(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function G(e) {
        void 0 === e && (e = "");
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          n = [];
        return (
          t.forEach((e) => {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      function V(e) {
        return (
          void 0 === e && (e = ""),
          e
            ? e.includes("swiper-wrapper")
              ? e
              : `swiper-wrapper ${e}`
            : "swiper-wrapper"
        );
      }
      function $() {
        return (
          ($ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          $.apply(this, arguments)
        );
      }
      function F(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function q(e) {
        const t = [];
        return (
          i.Children.toArray(e).forEach((e) => {
            F(e)
              ? t.push(e)
              : e.props &&
                e.props.children &&
                q(e.props.children).forEach((e) => t.push(e));
          }),
          t
        );
      }
      function Q(e) {
        const t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          i.Children.toArray(e).forEach((e) => {
            if (F(e)) t.push(e);
            else if (e.props && e.props.slot && n[e.props.slot])
              n[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const i = q(e.props.children);
              i.length > 0
                ? i.forEach((e) => t.push(e))
                : n["container-end"].push(e);
            } else n["container-end"].push(e);
          }),
          { slides: t, slots: n }
        );
      }
      function Z(e, t) {
        return "undefined" === typeof window
          ? (0, i.useEffect)(e, t)
          : (0, i.useLayoutEffect)(e, t);
      }
      const X = (0, i.createContext)(null),
        J = (0, i.createContext)(null),
        ee = (0, i.forwardRef)(function (e, t) {
          let {
              className: n,
              tag: s = "div",
              wrapperTag: r = "div",
              children: o,
              onSwiper: a,
              ...l
            } = void 0 === e ? {} : e,
            c = !1;
          const [u, d] = (0, i.useState)("swiper"),
            [h, p] = (0, i.useState)(null),
            [g, f] = (0, i.useState)(!1),
            m = (0, i.useRef)(!1),
            y = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            b = (0, i.useRef)(null),
            v = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            M = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            {
              params: T,
              passedParams: x,
              rest: A,
              events: E,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              const n = { on: {} },
                i = {},
                s = {};
              U(n, C), (n._emitClasses = !0), (n.init = !1);
              const r = {},
                o = W.map((e) => e.replace(/_/, "")),
                a = Object.assign({}, e);
              return (
                Object.keys(a).forEach((a) => {
                  "undefined" !== typeof e[a] &&
                    (o.indexOf(a) >= 0
                      ? R(e[a])
                        ? ((n[a] = {}),
                          (s[a] = {}),
                          U(n[a], e[a]),
                          U(s[a], e[a]))
                        : ((n[a] = e[a]), (s[a] = e[a]))
                      : 0 === a.search(/on[A-Z]/) && "function" === typeof e[a]
                      ? t
                        ? (i[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                        : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (r[a] = e[a]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
                }),
                { params: n, passedParams: s, rest: r, events: i }
              );
            })(l),
            { slides: L, slots: N } = Q(o),
            z = () => {
              f(!g);
            };
          Object.assign(T.on, {
            _containerClasses(e, t) {
              d(t);
            },
          });
          const j = () => {
            Object.assign(T.on, E), (c = !0);
            const e = { ...T };
            if (
              (delete e.wrapperClass,
              (w.current = new B(e)),
              w.current.virtual && w.current.params.virtual.enabled)
            ) {
              w.current.virtual.slides = L;
              const e = {
                cache: !1,
                slides: L,
                renderExternal: p,
                renderExternalUpdate: !1,
              };
              U(w.current.params.virtual, e),
                U(w.current.originalParams.virtual, e);
            }
          };
          y.current || j(), w.current && w.current.on("_beforeBreakpoint", z);
          return (
            (0, i.useEffect)(() => () => {
              w.current && w.current.off("_beforeBreakpoint", z);
            }),
            (0, i.useEffect)(() => {
              !m.current &&
                w.current &&
                (w.current.emitSlidesClasses(), (m.current = !0));
            }),
            Z(() => {
              if ((t && (t.current = y.current), y.current))
                return (
                  w.current.destroyed && j(),
                  (function (e, t) {
                    let {
                      el: n,
                      nextEl: i,
                      prevEl: s,
                      paginationEl: r,
                      scrollbarEl: o,
                      swiper: a,
                    } = e;
                    H(t) &&
                      i &&
                      s &&
                      ((a.params.navigation.nextEl = i),
                      (a.originalParams.navigation.nextEl = i),
                      (a.params.navigation.prevEl = s),
                      (a.originalParams.navigation.prevEl = s)),
                      Y(t) &&
                        r &&
                        ((a.params.pagination.el = r),
                        (a.originalParams.pagination.el = r)),
                      K(t) &&
                        o &&
                        ((a.params.scrollbar.el = o),
                        (a.originalParams.scrollbar.el = o)),
                      a.init(n);
                  })(
                    {
                      el: y.current,
                      nextEl: S.current,
                      prevEl: k.current,
                      paginationEl: M.current,
                      scrollbarEl: I.current,
                      swiper: w.current,
                    },
                    T
                  ),
                  a && !w.current.destroyed && a(w.current),
                  () => {
                    w.current &&
                      !w.current.destroyed &&
                      w.current.destroy(!0, !1);
                  }
                );
            }, []),
            Z(() => {
              !c &&
                E &&
                w.current &&
                Object.keys(E).forEach((e) => {
                  w.current.on(e, E[e]);
                });
              const e = (function (e, t, n, i, s) {
                const r = [];
                if (!t) return r;
                const o = (e) => {
                  r.indexOf(e) < 0 && r.push(e);
                };
                if (n && i) {
                  const e = i.map(s),
                    t = n.map(s);
                  e.join("") !== t.join("") && o("children"),
                    i.length !== n.length && o("children");
                }
                return (
                  W.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((n) => {
                      if (n in e && n in t)
                        if (R(e[n]) && R(t[n])) {
                          const i = Object.keys(e[n]),
                            s = Object.keys(t[n]);
                          i.length !== s.length
                            ? o(n)
                            : (i.forEach((i) => {
                                e[n][i] !== t[n][i] && o(n);
                              }),
                              s.forEach((i) => {
                                e[n][i] !== t[n][i] && o(n);
                              }));
                        } else e[n] !== t[n] && o(n);
                    }),
                  r
                );
              })(x, b.current, L, v.current, (e) => e.key);
              return (
                (b.current = x),
                (v.current = L),
                e.length &&
                  w.current &&
                  !w.current.destroyed &&
                  (function (e) {
                    let {
                      swiper: t,
                      slides: n,
                      passedParams: i,
                      changedParams: s,
                      nextEl: r,
                      prevEl: o,
                      scrollbarEl: a,
                      paginationEl: l,
                    } = e;
                    const c = s.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: u,
                        pagination: d,
                        navigation: h,
                        scrollbar: p,
                        virtual: g,
                        thumbs: f,
                      } = t;
                    let m, y, w, b, v, S, k, M;
                    s.includes("thumbs") &&
                      i.thumbs &&
                      i.thumbs.swiper &&
                      !i.thumbs.swiper.destroyed &&
                      u.thumbs &&
                      (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
                      (m = !0),
                      s.includes("controller") &&
                        i.controller &&
                        i.controller.control &&
                        u.controller &&
                        !u.controller.control &&
                        (y = !0),
                      s.includes("pagination") &&
                        i.pagination &&
                        (i.pagination.el || l) &&
                        (u.pagination || !1 === u.pagination) &&
                        d &&
                        !d.el &&
                        (w = !0),
                      s.includes("scrollbar") &&
                        i.scrollbar &&
                        (i.scrollbar.el || a) &&
                        (u.scrollbar || !1 === u.scrollbar) &&
                        p &&
                        !p.el &&
                        (b = !0),
                      s.includes("navigation") &&
                        i.navigation &&
                        (i.navigation.prevEl || o) &&
                        (i.navigation.nextEl || r) &&
                        (u.navigation || !1 === u.navigation) &&
                        h &&
                        !h.prevEl &&
                        !h.nextEl &&
                        (v = !0);
                    const I = (e) => {
                      t[e] &&
                        (t[e].destroy(),
                        "navigation" === e
                          ? (t.isElement &&
                              (t[e].prevEl.remove(), t[e].nextEl.remove()),
                            (u[e].prevEl = void 0),
                            (u[e].nextEl = void 0),
                            (t[e].prevEl = void 0),
                            (t[e].nextEl = void 0))
                          : (t.isElement && t[e].el.remove(),
                            (u[e].el = void 0),
                            (t[e].el = void 0)));
                    };
                    s.includes("loop") &&
                      t.isElement &&
                      (u.loop && !i.loop
                        ? (S = !0)
                        : !u.loop && i.loop
                        ? (k = !0)
                        : (M = !0)),
                      c.forEach((e) => {
                        if (R(u[e]) && R(i[e]))
                          Object.assign(u[e], i[e]),
                            ("navigation" !== e &&
                              "pagination" !== e &&
                              "scrollbar" !== e) ||
                              !("enabled" in i[e]) ||
                              i[e].enabled ||
                              I(e);
                        else {
                          const t = i[e];
                          (!0 !== t && !1 !== t) ||
                          ("navigation" !== e &&
                            "pagination" !== e &&
                            "scrollbar" !== e)
                            ? (u[e] = i[e])
                            : !1 === t && I(e);
                        }
                      }),
                      c.includes("controller") &&
                        !y &&
                        t.controller &&
                        t.controller.control &&
                        u.controller &&
                        u.controller.control &&
                        (t.controller.control = u.controller.control),
                      s.includes("children") && n && g && u.virtual.enabled
                        ? ((g.slides = n), g.update(!0))
                        : s.includes("virtual") &&
                          g &&
                          u.virtual.enabled &&
                          (n && (g.slides = n), g.update(!0)),
                      s.includes("children") && n && u.loop && (M = !0),
                      m && f.init() && f.update(!0);
                    y && (t.controller.control = u.controller.control),
                      w &&
                        (!t.isElement ||
                          (l && "string" !== typeof l) ||
                          ((l = document.createElement("div")),
                          l.classList.add("swiper-pagination"),
                          l.part.add("pagination"),
                          t.el.appendChild(l)),
                        l && (u.pagination.el = l),
                        d.init(),
                        d.render(),
                        d.update()),
                      b &&
                        (!t.isElement ||
                          (a && "string" !== typeof a) ||
                          ((a = document.createElement("div")),
                          a.classList.add("swiper-scrollbar"),
                          a.part.add("scrollbar"),
                          t.el.appendChild(a)),
                        a && (u.scrollbar.el = a),
                        p.init(),
                        p.updateSize(),
                        p.setTranslate()),
                      v &&
                        (t.isElement &&
                          ((r && "string" !== typeof r) ||
                            ((r = document.createElement("div")),
                            r.classList.add("swiper-button-next"),
                            (r.innerHTML = t.hostEl.constructor.nextButtonSvg),
                            r.part.add("button-next"),
                            t.el.appendChild(r)),
                          (o && "string" !== typeof o) ||
                            ((o = document.createElement("div")),
                            o.classList.add("swiper-button-prev"),
                            (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
                            o.part.add("button-prev"),
                            t.el.appendChild(o))),
                        r && (u.navigation.nextEl = r),
                        o && (u.navigation.prevEl = o),
                        h.init(),
                        h.update()),
                      s.includes("allowSlideNext") &&
                        (t.allowSlideNext = i.allowSlideNext),
                      s.includes("allowSlidePrev") &&
                        (t.allowSlidePrev = i.allowSlidePrev),
                      s.includes("direction") &&
                        t.changeDirection(i.direction, !1),
                      (S || M) && t.loopDestroy(),
                      (k || M) && t.loopCreate(),
                      t.update();
                  })({
                    swiper: w.current,
                    slides: L,
                    passedParams: x,
                    changedParams: e,
                    nextEl: S.current,
                    prevEl: k.current,
                    scrollbarEl: I.current,
                    paginationEl: M.current,
                  }),
                () => {
                  E &&
                    w.current &&
                    Object.keys(E).forEach((e) => {
                      w.current.off(e, E[e]);
                    });
                }
              );
            }),
            Z(() => {
              var e;
              !(e = w.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            }, [h]),
            i.createElement(
              s,
              $({ ref: y, className: G(`${u}${n ? ` ${n}` : ""}`) }, A),
              i.createElement(
                J.Provider,
                { value: w.current },
                N["container-start"],
                i.createElement(
                  r,
                  { className: V(T.wrapperClass) },
                  N["wrapper-start"],
                  T.virtual
                    ? (function (e, t, n) {
                        if (!n) return null;
                        const s = (e) => {
                            let n = e;
                            return (
                              e < 0
                                ? (n = t.length + e)
                                : n >= t.length && (n -= t.length),
                              n
                            );
                          },
                          r = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${n.offset}px`,
                              }
                            : { top: `${n.offset}px` },
                          { from: o, to: a } = n,
                          l = e.params.loop ? -t.length : 0,
                          c = e.params.loop ? 2 * t.length : t.length,
                          u = [];
                        for (let i = l; i < c; i += 1)
                          i >= o && i <= a && u.push(t[s(i)]);
                        return u.map((t, n) =>
                          i.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: t.props.virtualIndex || t.key || `slide-${n}`,
                          })
                        );
                      })(w.current, L, h)
                    : L.map((e, t) =>
                        i.cloneElement(e, {
                          swiper: w.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  N["wrapper-end"]
                ),
                H(T) &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement("div", {
                      ref: k,
                      className: "swiper-button-prev",
                    }),
                    i.createElement("div", {
                      ref: S,
                      className: "swiper-button-next",
                    })
                  ),
                K(T) &&
                  i.createElement("div", {
                    ref: I,
                    className: "swiper-scrollbar",
                  }),
                Y(T) &&
                  i.createElement("div", {
                    ref: M,
                    className: "swiper-pagination",
                  }),
                N["container-end"]
              )
            )
          );
        });
      ee.displayName = "Swiper";
      const te = (0, i.forwardRef)(function (e, t) {
        let {
          tag: n = "div",
          children: s,
          className: r = "",
          swiper: o,
          zoom: a,
          lazy: l,
          virtualIndex: c,
          swiperSlideIndex: u,
          ...d
        } = void 0 === e ? {} : e;
        const h = (0, i.useRef)(null),
          [p, g] = (0, i.useState)("swiper-slide"),
          [f, m] = (0, i.useState)(!1);
        function y(e, t, n) {
          t === h.current && g(n);
        }
        Z(() => {
          if (
            ("undefined" !== typeof u && (h.current.swiperSlideIndex = u),
            t && (t.current = h.current),
            h.current && o)
          ) {
            if (!o.destroyed)
              return (
                o.on("_slideClass", y),
                () => {
                  o && o.off("_slideClass", y);
                }
              );
            "swiper-slide" !== p && g("swiper-slide");
          }
        }),
          Z(() => {
            o && h.current && !o.destroyed && g(o.getSlideClasses(h.current));
          }, [o]);
        const w = {
            isActive: p.indexOf("swiper-slide-active") >= 0,
            isVisible: p.indexOf("swiper-slide-visible") >= 0,
            isPrev: p.indexOf("swiper-slide-prev") >= 0,
            isNext: p.indexOf("swiper-slide-next") >= 0,
          },
          b = () => ("function" === typeof s ? s(w) : s);
        return i.createElement(
          n,
          $(
            {
              ref: h,
              className: G(`${p}${r ? ` ${r}` : ""}`),
              "data-swiper-slide-index": c,
              onLoad: () => {
                m(!0);
              },
            },
            d
          ),
          a &&
            i.createElement(
              X.Provider,
              { value: w },
              i.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" === typeof a ? a : void 0,
                },
                b(),
                l &&
                  !f &&
                  i.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !a &&
            i.createElement(
              X.Provider,
              { value: w },
              b(),
              l &&
                !f &&
                i.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      te.displayName = "SwiperSlide";
    },
    42449: (e, t, n) => {
      "use strict";
      n.d(t, {
        d_: () => Xn,
        Ng: () => $n,
        Sr: () => di,
        J3: () => ne,
        yq: () => Ye,
        ZX: () => Te,
        Kt: () => xe,
      });
      var i = n(13740),
        s = n(83221),
        r = n(68571),
        o = n.n(r),
        a = n(4599),
        l = n.n(a),
        c = n(11920),
        u = n(79422),
        d = n(63386),
        h = n(58335);
      class p extends TypeError {
        constructor(e, t) {
          let n;
          const { message: i, explanation: s, ...r } = e,
            { path: o } = e,
            a = 0 === o.length ? i : `At path: ${o.join(".")} -- ${i}`;
          super(null !== s && void 0 !== s ? s : a),
            null != s && (this.cause = a),
            Object.assign(this, r),
            (this.name = this.constructor.name),
            (this.failures = () =>
              null !== n && void 0 !== n ? n : (n = [e, ...t()]));
        }
      }
      function g(e) {
        return "object" === typeof e && null != e;
      }
      function f(e) {
        return g(e) && !Array.isArray(e);
      }
      function m(e) {
        return "symbol" === typeof e
          ? e.toString()
          : "string" === typeof e
          ? JSON.stringify(e)
          : `${e}`;
      }
      function y(e, t, n, i) {
        if (!0 === e) return;
        !1 === e ? (e = {}) : "string" === typeof e && (e = { message: e });
        const { path: s, branch: r } = t,
          { type: o } = n,
          {
            refinement: a,
            message: l = `Expected a value of type \`${o}\`${
              a ? ` with refinement \`${a}\`` : ""
            }, but received: \`${m(i)}\``,
          } = e;
        return {
          value: i,
          type: o,
          refinement: a,
          key: s[s.length - 1],
          path: s,
          branch: r,
          ...e,
          message: l,
        };
      }
      function* w(e, t, n, i) {
        var s;
        (g((s = e)) && "function" === typeof s[Symbol.iterator]) || (e = [e]);
        for (const r of e) {
          const e = y(r, t, n, i);
          e && (yield e);
        }
      }
      function b(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (function* () {
          const {
              path: i = [],
              branch: s = [e],
              coerce: r = !1,
              mask: o = !1,
            } = n,
            a = { path: i, branch: s, mask: o };
          r && (e = t.coercer(e, a));
          let l = "valid";
          for (const c of t.validator(e, a))
            (c.explanation = n.message), (l = "not_valid"), yield [c, void 0];
          for (let [c, u, d] of t.entries(e, a)) {
            const t = b(u, d, {
              path: void 0 === c ? i : [...i, c],
              branch: void 0 === c ? s : [...s, u],
              coerce: r,
              mask: o,
              message: n.message,
            });
            for (const n of t)
              n[0]
                ? ((l = null != n[0].refinement ? "not_refined" : "not_valid"),
                  yield [n[0], void 0])
                : r &&
                  ((u = n[1]),
                  void 0 === c
                    ? (e = u)
                    : e instanceof Map
                    ? e.set(c, u)
                    : e instanceof Set
                    ? e.add(u)
                    : g(e) && (void 0 !== u || c in e) && (e[c] = u));
          }
          if ("not_valid" !== l)
            for (const c of t.refiner(e, a))
              (c.explanation = n.message),
                (l = "not_refined"),
                yield [c, void 0];
          "valid" === l && (yield [void 0, e]);
        })();
      }
      class v {
        constructor(e) {
          const {
            type: t,
            schema: n,
            validator: i,
            refiner: s,
            coercer: r = (e) => e,
            entries: o = function* () {},
          } = e;
          (this.type = t),
            (this.schema = n),
            (this.entries = o),
            (this.coercer = r),
            (this.validator = i ? (e, t) => w(i(e, t), t, this, e) : () => []),
            (this.refiner = s ? (e, t) => w(s(e, t), t, this, e) : () => []);
        }
        assert(e, t) {
          return (function (e, t, n) {
            const i = M(e, t, { message: n });
            if (i[0]) throw i[0];
          })(e, this, t);
        }
        create(e, t) {
          return S(e, this, t);
        }
        is(e) {
          return k(e, this);
        }
        mask(e, t) {
          return (function (e, t, n) {
            const i = M(e, t, { coerce: !0, mask: !0, message: n });
            if (i[0]) throw i[0];
            return i[1];
          })(e, this, t);
        }
        validate(e) {
          return M(
            e,
            this,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          );
        }
      }
      function S(e, t, n) {
        const i = M(e, t, { coerce: !0, message: n });
        if (i[0]) throw i[0];
        return i[1];
      }
      function k(e, t) {
        return !M(e, t)[0];
      }
      function M(e, t) {
        const n = b(
            e,
            t,
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ),
          i = (function (e) {
            const { done: t, value: n } = e.next();
            return t ? void 0 : n;
          })(n);
        if (i[0]) {
          return [
            new p(i[0], function* () {
              for (const e of n) e[0] && (yield e[0]);
            }),
            void 0,
          ];
        }
        return [void 0, i[1]];
      }
      function I(e, t) {
        return new v({ type: e, schema: null, validator: t });
      }
      function T(e) {
        return new v({
          type: "array",
          schema: e,
          *entries(t) {
            if (e && Array.isArray(t))
              for (const [n, i] of t.entries()) yield [n, i, e];
          },
          coercer: (e) => (Array.isArray(e) ? e.slice() : e),
          validator: (e) =>
            Array.isArray(e) ||
            `Expected an array value, but received: ${m(e)}`,
        });
      }
      function x() {
        return I("boolean", (e) => "boolean" === typeof e);
      }
      function A(e) {
        return I(
          "instance",
          (t) =>
            t instanceof e ||
            `Expected a \`${e.name}\` instance, but received: ${m(t)}`
        );
      }
      function E(e) {
        const t = m(e),
          n = typeof e;
        return new v({
          type: "literal",
          schema:
            "string" === n || "number" === n || "boolean" === n ? e : null,
          validator: (n) =>
            n === e || `Expected the literal \`${t}\`, but received: ${m(n)}`,
        });
      }
      function L() {
        return I("never", () => !1);
      }
      function N(e) {
        return new v({
          ...e,
          validator: (t, n) => null === t || e.validator(t, n),
          refiner: (t, n) => null === t || e.refiner(t, n),
        });
      }
      function z() {
        return I(
          "number",
          (e) =>
            ("number" === typeof e && !isNaN(e)) ||
            `Expected a number, but received: ${m(e)}`
        );
      }
      function j(e) {
        return new v({
          ...e,
          validator: (t, n) => void 0 === t || e.validator(t, n),
          refiner: (t, n) => void 0 === t || e.refiner(t, n),
        });
      }
      function D(e, t) {
        return new v({
          type: "record",
          schema: null,
          *entries(n) {
            if (g(n))
              for (const i in n) {
                const s = n[i];
                yield [i, i, e], yield [i, s, t];
              }
          },
          validator: (e) => f(e) || `Expected an object, but received: ${m(e)}`,
          coercer: (e) => (f(e) ? { ...e } : e),
        });
      }
      function C() {
        return I(
          "string",
          (e) =>
            "string" === typeof e || `Expected a string, but received: ${m(e)}`
        );
      }
      function P(e) {
        const t = L();
        return new v({
          type: "tuple",
          schema: null,
          *entries(n) {
            if (Array.isArray(n)) {
              const i = Math.max(e.length, n.length);
              for (let s = 0; s < i; s++) yield [s, n[s], e[s] || t];
            }
          },
          validator: (e) =>
            Array.isArray(e) || `Expected an array, but received: ${m(e)}`,
          coercer: (e) => (Array.isArray(e) ? e.slice() : e),
        });
      }
      function _(e) {
        const t = Object.keys(e);
        return new v({
          type: "type",
          schema: e,
          *entries(n) {
            if (g(n)) for (const i of t) yield [i, n[i], e[i]];
          },
          validator: (e) => f(e) || `Expected an object, but received: ${m(e)}`,
          coercer: (e) => (f(e) ? { ...e } : e),
        });
      }
      function O(e) {
        const t = e.map((e) => e.type).join(" | ");
        return new v({
          type: "union",
          schema: null,
          coercer(t, n) {
            for (const i of e) {
              const [e, s] = i.validate(t, { coerce: !0, mask: n.mask });
              if (!e) return s;
            }
            return t;
          },
          validator(n, i) {
            const s = [];
            for (const t of e) {
              const [...e] = b(n, t, i),
                [r] = e;
              if (!r[0]) return [];
              for (const [t] of e) t && s.push(t);
            }
            return [
              `Expected the value to satisfy a union of \`${t}\`, but received: ${m(
                n
              )}`,
              ...s,
            ];
          },
        });
      }
      function B() {
        return I("unknown", () => !0);
      }
      function W(e, t, n) {
        return new v({
          ...e,
          coercer: (i, s) =>
            k(i, t) ? e.coercer(n(i, s), s) : e.coercer(i, s),
        });
      }
      var R = n(18287),
        U = n.n(R),
        H = n(29873),
        Y = n(29519),
        K = n(85236);
      s.ev.utils.randomPrivateKey;
      const G = () => {
          const e = s.ev.utils.randomPrivateKey(),
            t = V(e),
            n = new Uint8Array(64);
          return n.set(e), n.set(t, 32), { publicKey: t, secretKey: n };
        },
        V = s.ev.getPublicKey;
      function $(e) {
        try {
          return s.ev.ExtendedPoint.fromHex(e), !0;
        } catch {
          return !1;
        }
      }
      const F = (e, t) => s.ev.sign(e, t.slice(0, 32)),
        q = s.ev.verify,
        Q = (e) =>
          i.Buffer.isBuffer(e)
            ? e
            : e instanceof Uint8Array
            ? i.Buffer.from(e.buffer, e.byteOffset, e.byteLength)
            : i.Buffer.from(e);
      class Z {
        constructor(e) {
          Object.assign(this, e);
        }
        encode() {
          return i.Buffer.from((0, u.serialize)(X, this));
        }
        static decode(e) {
          return (0, u.deserialize)(X, this, e);
        }
        static decodeUnchecked(e) {
          return (0, u.deserializeUnchecked)(X, this, e);
        }
      }
      const X = new Map();
      var J;
      const ee = 32;
      let te = 1;
      class ne extends Z {
        constructor(e) {
          if (
            (super({}),
            (this._bn = void 0),
            (function (e) {
              return void 0 !== e._bn;
            })(e))
          )
            this._bn = e._bn;
          else {
            if ("string" === typeof e) {
              const t = l().decode(e);
              if (t.length != ee) throw new Error("Invalid public key input");
              this._bn = new (o())(t);
            } else this._bn = new (o())(e);
            if (this._bn.byteLength() > ee)
              throw new Error("Invalid public key input");
          }
        }
        static unique() {
          const e = new ne(te);
          return (te += 1), new ne(e.toBuffer());
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return l().encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          const e = this.toBuffer();
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        toBuffer() {
          const e = this._bn.toArrayLike(i.Buffer);
          if (e.length === ee) return e;
          const t = i.Buffer.alloc(32);
          return e.copy(t, 32 - e.length), t;
        }
        get [Symbol.toStringTag]() {
          return `PublicKey(${this.toString()})`;
        }
        toString() {
          return this.toBase58();
        }
        static async createWithSeed(e, t, n) {
          const s = i.Buffer.concat([
              e.toBuffer(),
              i.Buffer.from(t),
              n.toBuffer(),
            ]),
            r = (0, c.sc)(s);
          return new ne(r);
        }
        static createProgramAddressSync(e, t) {
          let n = i.Buffer.alloc(0);
          e.forEach(function (e) {
            if (e.length > 32) throw new TypeError("Max seed length exceeded");
            n = i.Buffer.concat([n, Q(e)]);
          }),
            (n = i.Buffer.concat([
              n,
              t.toBuffer(),
              i.Buffer.from("ProgramDerivedAddress"),
            ]));
          const s = (0, c.sc)(n);
          if ($(s))
            throw new Error("Invalid seeds, address must fall off the curve");
          return new ne(s);
        }
        static async createProgramAddress(e, t) {
          return this.createProgramAddressSync(e, t);
        }
        static findProgramAddressSync(e, t) {
          let n,
            s = 255;
          for (; 0 != s; ) {
            try {
              const r = e.concat(i.Buffer.from([s]));
              n = this.createProgramAddressSync(r, t);
            } catch (r) {
              if (r instanceof TypeError) throw r;
              s--;
              continue;
            }
            return [n, s];
          }
          throw new Error("Unable to find a viable program address nonce");
        }
        static async findProgramAddress(e, t) {
          return this.findProgramAddressSync(e, t);
        }
        static isOnCurve(e) {
          return $(new ne(e).toBytes());
        }
      }
      (J = ne),
        (ne.default = new J("11111111111111111111111111111111")),
        X.set(ne, { kind: "struct", fields: [["_bn", "u256"]] });
      new ne("BPFLoader1111111111111111111111111111111111");
      const ie = 1232;
      class se extends Error {
        constructor(e) {
          super(`Signature ${e} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(se.prototype, "name", {
        value: "TransactionExpiredBlockheightExceededError",
      });
      class re extends Error {
        constructor(e, t) {
          super(
            `Transaction was not confirmed in ${t.toFixed(
              2
            )} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
          ),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(re.prototype, "name", {
        value: "TransactionExpiredTimeoutError",
      });
      class oe extends Error {
        constructor(e) {
          super(`Signature ${e} has expired: the nonce is no longer valid.`),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(oe.prototype, "name", {
        value: "TransactionExpiredNonceInvalidError",
      });
      class ae {
        constructor(e, t) {
          (this.staticAccountKeys = void 0),
            (this.accountKeysFromLookups = void 0),
            (this.staticAccountKeys = e),
            (this.accountKeysFromLookups = t);
        }
        keySegments() {
          const e = [this.staticAccountKeys];
          return (
            this.accountKeysFromLookups &&
              (e.push(this.accountKeysFromLookups.writable),
              e.push(this.accountKeysFromLookups.readonly)),
            e
          );
        }
        get(e) {
          for (const t of this.keySegments()) {
            if (e < t.length) return t[e];
            e -= t.length;
          }
        }
        get length() {
          return this.keySegments().flat().length;
        }
        compileInstructions(e) {
          if (this.length > 256)
            throw new Error(
              "Account index overflow encountered during compilation"
            );
          const t = new Map();
          this.keySegments()
            .flat()
            .forEach((e, n) => {
              t.set(e.toBase58(), n);
            });
          const n = (e) => {
            const n = t.get(e.toBase58());
            if (void 0 === n)
              throw new Error(
                "Encountered an unknown instruction account key during compilation"
              );
            return n;
          };
          return e.map((e) => ({
            programIdIndex: n(e.programId),
            accountKeyIndexes: e.keys.map((e) => n(e.pubkey)),
            data: e.data,
          }));
        }
      }
      const le = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "publicKey";
          return d.av(32, e);
        },
        ce = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "signature";
          return d.av(64, e);
        },
        ue = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "string";
          const t = d.w3(
              [
                d.DH("length"),
                d.DH("lengthPadding"),
                d.av(d.cY(d.DH(), -8), "chars"),
              ],
              e
            ),
            n = t.decode.bind(t),
            s = t.encode.bind(t),
            r = t;
          return (
            (r.decode = (e, t) => n(e, t).chars.toString()),
            (r.encode = (e, t, n) => {
              const r = { chars: i.Buffer.from(e, "utf8") };
              return s(r, t, n);
            }),
            (r.alloc = (e) =>
              d.DH().span + d.DH().span + i.Buffer.from(e, "utf8").length),
            r
          );
        };
      function de(e, t) {
        const n = (e) => {
          if (e.span >= 0) return e.span;
          if ("function" === typeof e.alloc) return e.alloc(t[e.property]);
          if ("count" in e && "elementLayout" in e) {
            const i = t[e.property];
            if (Array.isArray(i)) return i.length * n(e.elementLayout);
          } else if ("fields" in e) return de({ layout: e }, t[e.property]);
          return 0;
        };
        let i = 0;
        return (
          e.layout.fields.forEach((e) => {
            i += n(e);
          }),
          i
        );
      }
      function he(e) {
        let t = 0,
          n = 0;
        for (;;) {
          let i = e.shift();
          if (((t |= (127 & i) << (7 * n)), (n += 1), 0 === (128 & i))) break;
        }
        return t;
      }
      function pe(e, t) {
        let n = t;
        for (;;) {
          let t = 127 & n;
          if (((n >>= 7), 0 == n)) {
            e.push(t);
            break;
          }
          (t |= 128), e.push(t);
        }
      }
      function ge(e, t) {
        if (!e) throw new Error(t || "Assertion failed");
      }
      class fe {
        constructor(e, t) {
          (this.payer = void 0),
            (this.keyMetaMap = void 0),
            (this.payer = e),
            (this.keyMetaMap = t);
        }
        static compile(e, t) {
          const n = new Map(),
            i = (e) => {
              const t = e.toBase58();
              let i = n.get(t);
              return (
                void 0 === i &&
                  ((i = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                  n.set(t, i)),
                i
              );
            },
            s = i(t);
          (s.isSigner = !0), (s.isWritable = !0);
          for (const r of e) {
            i(r.programId).isInvoked = !0;
            for (const e of r.keys) {
              const t = i(e.pubkey);
              t.isSigner || (t.isSigner = e.isSigner),
                t.isWritable || (t.isWritable = e.isWritable);
            }
          }
          return new fe(t, n);
        }
        getMessageComponents() {
          const e = [...this.keyMetaMap.entries()];
          ge(e.length <= 256, "Max static account keys length exceeded");
          const t = e.filter((e) => {
              let [, t] = e;
              return t.isSigner && t.isWritable;
            }),
            n = e.filter((e) => {
              let [, t] = e;
              return t.isSigner && !t.isWritable;
            }),
            i = e.filter((e) => {
              let [, t] = e;
              return !t.isSigner && t.isWritable;
            }),
            s = e.filter((e) => {
              let [, t] = e;
              return !t.isSigner && !t.isWritable;
            }),
            r = {
              numRequiredSignatures: t.length + n.length,
              numReadonlySignedAccounts: n.length,
              numReadonlyUnsignedAccounts: s.length,
            };
          {
            ge(t.length > 0, "Expected at least one writable signer key");
            const [e] = t[0];
            ge(
              e === this.payer.toBase58(),
              "Expected first writable signer key to be the fee payer"
            );
          }
          return [
            r,
            [
              ...t.map((e) => {
                let [t] = e;
                return new ne(t);
              }),
              ...n.map((e) => {
                let [t] = e;
                return new ne(t);
              }),
              ...i.map((e) => {
                let [t] = e;
                return new ne(t);
              }),
              ...s.map((e) => {
                let [t] = e;
                return new ne(t);
              }),
            ],
          ];
        }
        extractTableLookup(e) {
          const [t, n] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && e.isWritable
            ),
            [i, s] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && !e.isWritable
            );
          if (0 !== t.length || 0 !== i.length)
            return [
              { accountKey: e.key, writableIndexes: t, readonlyIndexes: i },
              { writable: n, readonly: s },
            ];
        }
        drainKeysFoundInLookupTable(e, t) {
          const n = new Array(),
            i = new Array();
          for (const [s, r] of this.keyMetaMap.entries())
            if (t(r)) {
              const t = new ne(s),
                r = e.findIndex((e) => e.equals(t));
              r >= 0 &&
                (ge(r < 256, "Max lookup table index exceeded"),
                n.push(r),
                i.push(t),
                this.keyMetaMap.delete(s));
            }
          return [n, i];
        }
      }
      const me = "Reached end of buffer unexpectedly";
      function ye(e) {
        if (0 === e.length) throw new Error(me);
        return e.shift();
      }
      function we(e) {
        for (
          var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1;
          s < n;
          s++
        )
          i[s - 1] = arguments[s];
        const [r] = i;
        if (
          2 === i.length
            ? r + (null !== (t = i[1]) && void 0 !== t ? t : 0) > e.length
            : r >= e.length
        )
          throw new Error(me);
        return e.splice(...i);
      }
      class be {
        constructor(e) {
          (this.header = void 0),
            (this.accountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.instructions = void 0),
            (this.indexToProgramIds = new Map()),
            (this.header = e.header),
            (this.accountKeys = e.accountKeys.map((e) => new ne(e))),
            (this.recentBlockhash = e.recentBlockhash),
            (this.instructions = e.instructions),
            this.instructions.forEach((e) =>
              this.indexToProgramIds.set(
                e.programIdIndex,
                this.accountKeys[e.programIdIndex]
              )
            );
        }
        get version() {
          return "legacy";
        }
        get staticAccountKeys() {
          return this.accountKeys;
        }
        get compiledInstructions() {
          return this.instructions.map((e) => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: l().decode(e.data),
          }));
        }
        get addressTableLookups() {
          return [];
        }
        getAccountKeys() {
          return new ae(this.staticAccountKeys);
        }
        static compile(e) {
          const t = fe.compile(e.instructions, e.payerKey),
            [n, i] = t.getMessageComponents(),
            s = new ae(i)
              .compileInstructions(e.instructions)
              .map((e) => ({
                programIdIndex: e.programIdIndex,
                accounts: e.accountKeyIndexes,
                data: l().encode(e.data),
              }));
          return new be({
            header: n,
            accountKeys: i,
            recentBlockhash: e.recentBlockhash,
            instructions: s,
          });
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          const t = this.header.numRequiredSignatures;
          if (e >= this.header.numRequiredSignatures) {
            return (
              e - t <
              this.accountKeys.length -
                t -
                this.header.numReadonlyUnsignedAccounts
            );
          }
          return e < t - this.header.numReadonlySignedAccounts;
        }
        isProgramId(e) {
          return this.indexToProgramIds.has(e);
        }
        programIds() {
          return [...this.indexToProgramIds.values()];
        }
        nonProgramIds() {
          return this.accountKeys.filter((e, t) => !this.isProgramId(t));
        }
        serialize() {
          const e = this.accountKeys.length;
          let t = [];
          pe(t, e);
          const n = this.instructions.map((e) => {
            const { accounts: t, programIdIndex: n } = e,
              s = Array.from(l().decode(e.data));
            let r = [];
            pe(r, t.length);
            let o = [];
            return (
              pe(o, s.length),
              {
                programIdIndex: n,
                keyIndicesCount: i.Buffer.from(r),
                keyIndices: t,
                dataLength: i.Buffer.from(o),
                data: s,
              }
            );
          });
          let s = [];
          pe(s, n.length);
          let r = i.Buffer.alloc(ie);
          i.Buffer.from(s).copy(r);
          let o = s.length;
          n.forEach((e) => {
            const t = d
              .w3([
                d.u8("programIdIndex"),
                d.av(e.keyIndicesCount.length, "keyIndicesCount"),
                d.O6(d.u8("keyIndex"), e.keyIndices.length, "keyIndices"),
                d.av(e.dataLength.length, "dataLength"),
                d.O6(d.u8("userdatum"), e.data.length, "data"),
              ])
              .encode(e, r, o);
            o += t;
          }),
            (r = r.slice(0, o));
          const a = d.w3([
              d.av(1, "numRequiredSignatures"),
              d.av(1, "numReadonlySignedAccounts"),
              d.av(1, "numReadonlyUnsignedAccounts"),
              d.av(t.length, "keyCount"),
              d.O6(le("key"), e, "keys"),
              le("recentBlockhash"),
            ]),
            c = {
              numRequiredSignatures: i.Buffer.from([
                this.header.numRequiredSignatures,
              ]),
              numReadonlySignedAccounts: i.Buffer.from([
                this.header.numReadonlySignedAccounts,
              ]),
              numReadonlyUnsignedAccounts: i.Buffer.from([
                this.header.numReadonlyUnsignedAccounts,
              ]),
              keyCount: i.Buffer.from(t),
              keys: this.accountKeys.map((e) => Q(e.toBytes())),
              recentBlockhash: l().decode(this.recentBlockhash),
            };
          let u = i.Buffer.alloc(2048);
          const h = a.encode(c, u);
          return r.copy(u, h), u.slice(0, h + r.length);
        }
        static from(e) {
          let t = [...e];
          const n = ye(t);
          if (n !== (127 & n))
            throw new Error(
              "Versioned messages must be deserialized with VersionedMessage.deserialize()"
            );
          const s = ye(t),
            r = ye(t),
            o = he(t);
          let a = [];
          for (let l = 0; l < o; l++) {
            const e = we(t, 0, ee);
            a.push(new ne(i.Buffer.from(e)));
          }
          const c = we(t, 0, ee),
            u = he(t);
          let d = [];
          for (let p = 0; p < u; p++) {
            const e = ye(t),
              n = we(t, 0, he(t)),
              s = we(t, 0, he(t)),
              r = l().encode(i.Buffer.from(s));
            d.push({ programIdIndex: e, accounts: n, data: r });
          }
          const h = {
            header: {
              numRequiredSignatures: n,
              numReadonlySignedAccounts: s,
              numReadonlyUnsignedAccounts: r,
            },
            recentBlockhash: l().encode(i.Buffer.from(c)),
            accountKeys: a,
            instructions: d,
          };
          return new be(h);
        }
      }
      class ve {
        constructor(e) {
          (this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = e.header),
            (this.staticAccountKeys = e.staticAccountKeys),
            (this.recentBlockhash = e.recentBlockhash),
            (this.compiledInstructions = e.compiledInstructions),
            (this.addressTableLookups = e.addressTableLookups);
        }
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let e = 0;
          for (const t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
          return e;
        }
        getAccountKeys(e) {
          let t;
          if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              e.accountKeysFromLookups.writable.length +
                e.accountKeysFromLookups.readonly.length
            )
              throw new Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups"
              );
            t = e.accountKeysFromLookups;
          } else if (
            e &&
            "addressLookupTableAccounts" in e &&
            e.addressLookupTableAccounts
          )
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw new Error(
              "Failed to get account keys because address table lookups were not resolved"
            );
          return new ae(this.staticAccountKeys, t);
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          const t = this.header.numRequiredSignatures,
            n = this.staticAccountKeys.length;
          if (e >= n) {
            return (
              e - n <
              this.addressTableLookups.reduce(
                (e, t) => e + t.writableIndexes.length,
                0
              )
            );
          }
          if (e >= this.header.numRequiredSignatures) {
            return e - t < n - t - this.header.numReadonlyUnsignedAccounts;
          }
          return e < t - this.header.numReadonlySignedAccounts;
        }
        resolveAddressTableLookups(e) {
          const t = { writable: [], readonly: [] };
          for (const n of this.addressTableLookups) {
            const i = e.find((e) => e.key.equals(n.accountKey));
            if (!i)
              throw new Error(
                `Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`
              );
            for (const e of n.writableIndexes) {
              if (!(e < i.state.addresses.length))
                throw new Error(
                  `Failed to find address for index ${e} in address lookup table ${n.accountKey.toBase58()}`
                );
              t.writable.push(i.state.addresses[e]);
            }
            for (const e of n.readonlyIndexes) {
              if (!(e < i.state.addresses.length))
                throw new Error(
                  `Failed to find address for index ${e} in address lookup table ${n.accountKey.toBase58()}`
                );
              t.readonly.push(i.state.addresses[e]);
            }
          }
          return t;
        }
        static compile(e) {
          const t = fe.compile(e.instructions, e.payerKey),
            n = new Array(),
            i = { writable: new Array(), readonly: new Array() },
            s = e.addressLookupTableAccounts || [];
          for (const l of s) {
            const e = t.extractTableLookup(l);
            if (void 0 !== e) {
              const [t, { writable: s, readonly: r }] = e;
              n.push(t), i.writable.push(...s), i.readonly.push(...r);
            }
          }
          const [r, o] = t.getMessageComponents(),
            a = new ae(o, i).compileInstructions(e.instructions);
          return new ve({
            header: r,
            staticAccountKeys: o,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: a,
            addressTableLookups: n,
          });
        }
        serialize() {
          const e = Array();
          pe(e, this.staticAccountKeys.length);
          const t = this.serializeInstructions(),
            n = Array();
          pe(n, this.compiledInstructions.length);
          const i = this.serializeAddressTableLookups(),
            s = Array();
          pe(s, this.addressTableLookups.length);
          const r = d.w3([
              d.u8("prefix"),
              d.w3(
                [
                  d.u8("numRequiredSignatures"),
                  d.u8("numReadonlySignedAccounts"),
                  d.u8("numReadonlyUnsignedAccounts"),
                ],
                "header"
              ),
              d.av(e.length, "staticAccountKeysLength"),
              d.O6(le(), this.staticAccountKeys.length, "staticAccountKeys"),
              le("recentBlockhash"),
              d.av(n.length, "instructionsLength"),
              d.av(t.length, "serializedInstructions"),
              d.av(s.length, "addressTableLookupsLength"),
              d.av(i.length, "serializedAddressTableLookups"),
            ]),
            o = new Uint8Array(ie),
            a = r.encode(
              {
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((e) =>
                  e.toBytes()
                ),
                recentBlockhash: l().decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(n),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(s),
                serializedAddressTableLookups: i,
              },
              o
            );
          return o.slice(0, a);
        }
        serializeInstructions() {
          let e = 0;
          const t = new Uint8Array(ie);
          for (const n of this.compiledInstructions) {
            const i = Array();
            pe(i, n.accountKeyIndexes.length);
            const s = Array();
            pe(s, n.data.length);
            e += d
              .w3([
                d.u8("programIdIndex"),
                d.av(i.length, "encodedAccountKeyIndexesLength"),
                d.O6(d.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"),
                d.av(s.length, "encodedDataLength"),
                d.av(n.data.length, "data"),
              ])
              .encode(
                {
                  programIdIndex: n.programIdIndex,
                  encodedAccountKeyIndexesLength: new Uint8Array(i),
                  accountKeyIndexes: n.accountKeyIndexes,
                  encodedDataLength: new Uint8Array(s),
                  data: n.data,
                },
                t,
                e
              );
          }
          return t.slice(0, e);
        }
        serializeAddressTableLookups() {
          let e = 0;
          const t = new Uint8Array(ie);
          for (const n of this.addressTableLookups) {
            const i = Array();
            pe(i, n.writableIndexes.length);
            const s = Array();
            pe(s, n.readonlyIndexes.length);
            e += d
              .w3([
                le("accountKey"),
                d.av(i.length, "encodedWritableIndexesLength"),
                d.O6(d.u8(), n.writableIndexes.length, "writableIndexes"),
                d.av(s.length, "encodedReadonlyIndexesLength"),
                d.O6(d.u8(), n.readonlyIndexes.length, "readonlyIndexes"),
              ])
              .encode(
                {
                  accountKey: n.accountKey.toBytes(),
                  encodedWritableIndexesLength: new Uint8Array(i),
                  writableIndexes: n.writableIndexes,
                  encodedReadonlyIndexesLength: new Uint8Array(s),
                  readonlyIndexes: n.readonlyIndexes,
                },
                t,
                e
              );
          }
          return t.slice(0, e);
        }
        static deserialize(e) {
          let t = [...e];
          const n = ye(t),
            i = 127 & n;
          ge(n !== i, "Expected versioned message but received legacy message");
          ge(
            0 === i,
            `Expected versioned message with version 0 but found version ${i}`
          );
          const s = {
              numRequiredSignatures: ye(t),
              numReadonlySignedAccounts: ye(t),
              numReadonlyUnsignedAccounts: ye(t),
            },
            r = [],
            o = he(t);
          for (let l = 0; l < o; l++) r.push(new ne(we(t, 0, ee)));
          const a = l().encode(we(t, 0, ee)),
            c = he(t),
            u = [];
          for (let l = 0; l < c; l++) {
            const e = ye(t),
              n = we(t, 0, he(t)),
              i = he(t),
              s = new Uint8Array(we(t, 0, i));
            u.push({ programIdIndex: e, accountKeyIndexes: n, data: s });
          }
          const d = he(t),
            h = [];
          for (let l = 0; l < d; l++) {
            const e = new ne(we(t, 0, ee)),
              n = we(t, 0, he(t)),
              i = we(t, 0, he(t));
            h.push({ accountKey: e, writableIndexes: n, readonlyIndexes: i });
          }
          return new ve({
            header: s,
            staticAccountKeys: r,
            recentBlockhash: a,
            compiledInstructions: u,
            addressTableLookups: h,
          });
        }
      }
      const Se = {
        deserializeMessageVersion(e) {
          const t = e[0],
            n = 127 & t;
          return n === t ? "legacy" : n;
        },
        deserialize: (e) => {
          const t = Se.deserializeMessageVersion(e);
          if ("legacy" === t) return be.from(e);
          if (0 === t) return ve.deserialize(e);
          throw new Error(
            `Transaction message version ${t} deserialization is not supported`
          );
        },
      };
      let ke = (function (e) {
        return (
          (e[(e.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
          (e[(e.PROCESSED = 1)] = "PROCESSED"),
          (e[(e.TIMED_OUT = 2)] = "TIMED_OUT"),
          (e[(e.NONCE_INVALID = 3)] = "NONCE_INVALID"),
          e
        );
      })({});
      const Me = i.Buffer.alloc(64).fill(0);
      class Ie {
        constructor(e) {
          (this.keys = void 0),
            (this.programId = void 0),
            (this.data = i.Buffer.alloc(0)),
            (this.programId = e.programId),
            (this.keys = e.keys),
            e.data && (this.data = e.data);
        }
        toJSON() {
          return {
            keys: this.keys.map((e) => {
              let { pubkey: t, isSigner: n, isWritable: i } = e;
              return { pubkey: t.toJSON(), isSigner: n, isWritable: i };
            }),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
      }
      class Te {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        constructor(e) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            e)
          )
            if (
              (e.feePayer && (this.feePayer = e.feePayer),
              e.signatures && (this.signatures = e.signatures),
              Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
            ) {
              const { minContextSlot: t, nonceInfo: n } = e;
              (this.minNonceContextSlot = t), (this.nonceInfo = n);
            } else if (
              Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
            ) {
              const { blockhash: t, lastValidBlockHeight: n } = e;
              (this.recentBlockhash = t), (this.lastValidBlockHeight = n);
            } else {
              const { recentBlockhash: t, nonceInfo: n } = e;
              n && (this.nonceInfo = n), (this.recentBlockhash = t);
            }
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((e) => e.toJSON()),
            signers: this.signatures.map((e) => {
              let { publicKey: t } = e;
              return t.toJSON();
            }),
          };
        }
        add() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (0 === t.length) throw new Error("No instructions");
          return (
            t.forEach((e) => {
              "instructions" in e
                ? (this.instructions = this.instructions.concat(e.instructions))
                : "data" in e && "programId" in e && "keys" in e
                ? this.instructions.push(e)
                : this.instructions.push(new Ie(e));
            }),
            this
          );
        }
        compileMessage() {
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          let e, t, n;
          if (
            (this.nonceInfo
              ? ((e = this.nonceInfo.nonce),
                (t =
                  this.instructions[0] != this.nonceInfo.nonceInstruction
                    ? [this.nonceInfo.nonceInstruction, ...this.instructions]
                    : this.instructions))
              : ((e = this.recentBlockhash), (t = this.instructions)),
            !e)
          )
            throw new Error("Transaction recentBlockhash required");
          if (
            (t.length < 1 && console.warn("No instructions provided"),
            this.feePayer)
          )
            n = this.feePayer;
          else {
            if (!(this.signatures.length > 0 && this.signatures[0].publicKey))
              throw new Error("Transaction fee payer required");
            n = this.signatures[0].publicKey;
          }
          for (let l = 0; l < t.length; l++)
            if (void 0 === t[l].programId)
              throw new Error(
                `Transaction instruction index ${l} has undefined program id`
              );
          const i = [],
            s = [];
          t.forEach((e) => {
            e.keys.forEach((e) => {
              s.push({ ...e });
            });
            const t = e.programId.toString();
            i.includes(t) || i.push(t);
          }),
            i.forEach((e) => {
              s.push({ pubkey: new ne(e), isSigner: !1, isWritable: !1 });
            });
          const r = [];
          s.forEach((e) => {
            const t = e.pubkey.toString(),
              n = r.findIndex((e) => e.pubkey.toString() === t);
            n > -1
              ? ((r[n].isWritable = r[n].isWritable || e.isWritable),
                (r[n].isSigner = r[n].isSigner || e.isSigner))
              : r.push(e);
          }),
            r.sort(function (e, t) {
              if (e.isSigner !== t.isSigner) return e.isSigner ? -1 : 1;
              if (e.isWritable !== t.isWritable) return e.isWritable ? -1 : 1;
              return e.pubkey
                .toBase58()
                .localeCompare(t.pubkey.toBase58(), "en", {
                  localeMatcher: "best fit",
                  usage: "sort",
                  sensitivity: "variant",
                  ignorePunctuation: !1,
                  numeric: !1,
                  caseFirst: "lower",
                });
            });
          const o = r.findIndex((e) => e.pubkey.equals(n));
          if (o > -1) {
            const [e] = r.splice(o, 1);
            (e.isSigner = !0), (e.isWritable = !0), r.unshift(e);
          } else r.unshift({ pubkey: n, isSigner: !0, isWritable: !0 });
          for (const l of this.signatures) {
            const e = r.findIndex((e) => e.pubkey.equals(l.publicKey));
            if (!(e > -1))
              throw new Error(`unknown signer: ${l.publicKey.toString()}`);
            r[e].isSigner ||
              ((r[e].isSigner = !0),
              console.warn(
                "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
              ));
          }
          let a = 0,
            c = 0,
            u = 0;
          const d = [],
            h = [];
          r.forEach((e) => {
            let { pubkey: t, isSigner: n, isWritable: i } = e;
            n
              ? (d.push(t.toString()), (a += 1), i || (c += 1))
              : (h.push(t.toString()), i || (u += 1));
          });
          const p = d.concat(h),
            g = t.map((e) => {
              const { data: t, programId: n } = e;
              return {
                programIdIndex: p.indexOf(n.toString()),
                accounts: e.keys.map((e) => p.indexOf(e.pubkey.toString())),
                data: l().encode(t),
              };
            });
          return (
            g.forEach((e) => {
              ge(e.programIdIndex >= 0), e.accounts.forEach((e) => ge(e >= 0));
            }),
            new be({
              header: {
                numRequiredSignatures: a,
                numReadonlySignedAccounts: c,
                numReadonlyUnsignedAccounts: u,
              },
              accountKeys: p,
              recentBlockhash: e,
              instructions: g,
            })
          );
        }
        _compile() {
          const e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
          if (this.signatures.length === t.length) {
            if (this.signatures.every((e, n) => t[n].equals(e.publicKey)))
              return e;
          }
          return (
            (this.signatures = t.map((e) => ({
              signature: null,
              publicKey: e,
            }))),
            e
          );
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        async getEstimatedFee(e) {
          return (await e.getFeeForMessage(this.compileMessage())).value;
        }
        setSigners() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (0 === t.length) throw new Error("No signers");
          const i = new Set();
          this.signatures = t
            .filter((e) => {
              const t = e.toString();
              return !i.has(t) && (i.add(t), !0);
            })
            .map((e) => ({ signature: null, publicKey: e }));
        }
        sign() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (0 === t.length) throw new Error("No signers");
          const i = new Set(),
            s = [];
          for (const o of t) {
            const e = o.publicKey.toString();
            i.has(e) || (i.add(e), s.push(o));
          }
          this.signatures = s.map((e) => ({
            signature: null,
            publicKey: e.publicKey,
          }));
          const r = this._compile();
          this._partialSign(r, ...s);
        }
        partialSign() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (0 === t.length) throw new Error("No signers");
          const i = new Set(),
            s = [];
          for (const o of t) {
            const e = o.publicKey.toString();
            i.has(e) || (i.add(e), s.push(o));
          }
          const r = this._compile();
          this._partialSign(r, ...s);
        }
        _partialSign(e) {
          const t = e.serialize();
          for (
            var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1;
            s < n;
            s++
          )
            i[s - 1] = arguments[s];
          i.forEach((e) => {
            const n = F(t, e.secretKey);
            this._addSignature(e.publicKey, Q(n));
          });
        }
        addSignature(e, t) {
          this._compile(), this._addSignature(e, t);
        }
        _addSignature(e, t) {
          ge(64 === t.length);
          const n = this.signatures.findIndex((t) => e.equals(t.publicKey));
          if (n < 0) throw new Error(`unknown signer: ${e.toString()}`);
          this.signatures[n].signature = i.Buffer.from(t);
        }
        verifySignatures() {
          let e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return !this._getMessageSignednessErrors(this.serializeMessage(), e);
        }
        _getMessageSignednessErrors(e, t) {
          const n = {};
          for (const { signature: i, publicKey: s } of this.signatures)
            null === i
              ? t && (n.missing || (n.missing = [])).push(s)
              : q(i, e, s.toBytes()) || (n.invalid || (n.invalid = [])).push(s);
          return n.invalid || n.missing ? n : void 0;
        }
        serialize(e) {
          const { requireAllSignatures: t, verifySignatures: n } =
              Object.assign(
                { requireAllSignatures: !0, verifySignatures: !0 },
                e
              ),
            i = this.serializeMessage();
          if (n) {
            const e = this._getMessageSignednessErrors(i, t);
            if (e) {
              let t = "Signature verification failed.";
              throw (
                (e.invalid &&
                  (t += `\nInvalid signature for public key${
                    1 === e.invalid.length ? "" : "(s)"
                  } [\`${e.invalid.map((e) => e.toBase58()).join("`, `")}\`].`),
                e.missing &&
                  (t += `\nMissing signature for public key${
                    1 === e.missing.length ? "" : "(s)"
                  } [\`${e.missing.map((e) => e.toBase58()).join("`, `")}\`].`),
                new Error(t))
              );
            }
          }
          return this._serialize(i);
        }
        _serialize(e) {
          const { signatures: t } = this,
            n = [];
          pe(n, t.length);
          const s = n.length + 64 * t.length + e.length,
            r = i.Buffer.alloc(s);
          return (
            ge(t.length < 256),
            i.Buffer.from(n).copy(r, 0),
            t.forEach((e, t) => {
              let { signature: s } = e;
              null !== s &&
                (ge(64 === s.length, "signature has invalid length"),
                i.Buffer.from(s).copy(r, n.length + 64 * t));
            }),
            e.copy(r, n.length + 64 * t.length),
            ge(r.length <= ie, `Transaction too large: ${r.length} > 1232`),
            r
          );
        }
        get keys() {
          return (
            ge(1 === this.instructions.length),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            ge(1 === this.instructions.length), this.instructions[0].programId
          );
        }
        get data() {
          return ge(1 === this.instructions.length), this.instructions[0].data;
        }
        static from(e) {
          let t = [...e];
          const n = he(t);
          let s = [];
          for (let r = 0; r < n; r++) {
            const e = we(t, 0, 64);
            s.push(l().encode(i.Buffer.from(e)));
          }
          return Te.populate(be.from(t), s);
        }
        static populate(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          const n = new Te();
          return (
            (n.recentBlockhash = e.recentBlockhash),
            e.header.numRequiredSignatures > 0 &&
              (n.feePayer = e.accountKeys[0]),
            t.forEach((t, i) => {
              const s = {
                signature: t == l().encode(Me) ? null : l().decode(t),
                publicKey: e.accountKeys[i],
              };
              n.signatures.push(s);
            }),
            e.instructions.forEach((t) => {
              const i = t.accounts.map((t) => {
                const i = e.accountKeys[t];
                return {
                  pubkey: i,
                  isSigner:
                    n.signatures.some(
                      (e) => e.publicKey.toString() === i.toString()
                    ) || e.isAccountSigner(t),
                  isWritable: e.isAccountWritable(t),
                };
              });
              n.instructions.push(
                new Ie({
                  keys: i,
                  programId: e.accountKeys[t.programIdIndex],
                  data: l().decode(t.data),
                })
              );
            }),
            (n._message = e),
            (n._json = n.toJSON()),
            n
          );
        }
      }
      class xe {
        get version() {
          return this.message.version;
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), void 0 !== t)
          )
            ge(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures"
            ),
              (this.signatures = t);
          else {
            const t = [];
            for (let n = 0; n < e.header.numRequiredSignatures; n++)
              t.push(new Uint8Array(64));
            this.signatures = t;
          }
          this.message = e;
        }
        serialize() {
          const e = this.message.serialize(),
            t = Array();
          pe(t, this.signatures.length);
          const n = d.w3([
              d.av(t.length, "encodedSignaturesLength"),
              d.O6(ce(), this.signatures.length, "signatures"),
              d.av(e.length, "serializedMessage"),
            ]),
            i = new Uint8Array(2048),
            s = n.encode(
              {
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e,
              },
              i
            );
          return i.slice(0, s);
        }
        static deserialize(e) {
          let t = [...e];
          const n = [],
            i = he(t);
          for (let r = 0; r < i; r++) n.push(new Uint8Array(we(t, 0, 64)));
          const s = Se.deserialize(new Uint8Array(t));
          return new xe(s, n);
        }
        sign(e) {
          const t = this.message.serialize(),
            n = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures
            );
          for (const i of e) {
            const e = n.findIndex((e) => e.equals(i.publicKey));
            ge(
              e >= 0,
              `Cannot sign with non signer key ${i.publicKey.toBase58()}`
            ),
              (this.signatures[e] = F(t, i.secretKey));
          }
        }
        addSignature(e, t) {
          ge(64 === t.byteLength, "Signature must be 64 bytes long");
          const n = this.message.staticAccountKeys
            .slice(0, this.message.header.numRequiredSignatures)
            .findIndex((t) => t.equals(e));
          ge(
            n >= 0,
            `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
          ),
            (this.signatures[n] = t);
        }
      }
      const Ae = new ne("SysvarC1ock11111111111111111111111111111111"),
        Ee =
          (new ne("SysvarEpochSchedu1e111111111111111111111111"),
          new ne("Sysvar1nstructions1111111111111111111111111"),
          new ne("SysvarRecentB1ockHashes11111111111111111111")),
        Le = new ne("SysvarRent111111111111111111111111111111111"),
        Ne =
          (new ne("SysvarRewards111111111111111111111111111111"),
          new ne("SysvarS1otHashes111111111111111111111111111"),
          new ne("SysvarS1otHistory11111111111111111111111111"),
          new ne("SysvarStakeHistory1111111111111111111111111"));
      class ze extends Error {
        constructor(e) {
          let { action: t, signature: n, transactionMessage: i, logs: s } = e;
          const r = s
              ? `Logs: \n${JSON.stringify(s.slice(-10), null, 2)}. `
              : "",
            o =
              "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
          let a;
          switch (t) {
            case "send":
              a = `Transaction ${n} resulted in an error. \n${i}. ` + r + o;
              break;
            case "simulate":
              a = `Simulation failed. \nMessage: ${i}. \n` + r + o;
              break;
            default:
              a = `Unknown action '${t}'`;
          }
          super(a),
            (this.signature = void 0),
            (this.transactionMessage = void 0),
            (this.transactionLogs = void 0),
            (this.signature = n),
            (this.transactionMessage = i),
            (this.transactionLogs = s || void 0);
        }
        get transactionError() {
          return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs)
              ? this.transactionLogs
              : void 0,
          };
        }
        get logs() {
          const e = this.transactionLogs;
          if (null == e || "object" !== typeof e || !("then" in e)) return e;
        }
        async getLogs(e) {
          return (
            Array.isArray(this.transactionLogs) ||
              (this.transactionLogs = new Promise((t, n) => {
                e.getTransaction(this.signature)
                  .then((e) => {
                    if (e && e.meta && e.meta.logMessages) {
                      const n = e.meta.logMessages;
                      (this.transactionLogs = n), t(n);
                    } else n(new Error("Log messages not found"));
                  })
                  .catch(n);
              })),
            await this.transactionLogs
          );
        }
      }
      class je extends Error {
        constructor(e, t) {
          let { code: n, message: i, data: s } = e;
          super(null != t ? `${t}: ${i}` : i),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = n),
            (this.data = s),
            (this.name = "SolanaJSONRPCError");
        }
      }
      async function De(e, t, n, i) {
        const s = i && {
            skipPreflight: i.skipPreflight,
            preflightCommitment: i.preflightCommitment || i.commitment,
            maxRetries: i.maxRetries,
            minContextSlot: i.minContextSlot,
          },
          r = await e.sendTransaction(t, n, s);
        let o;
        if (null != t.recentBlockhash && null != t.lastValidBlockHeight)
          o = (
            await e.confirmTransaction(
              {
                abortSignal:
                  null === i || void 0 === i ? void 0 : i.abortSignal,
                signature: r,
                blockhash: t.recentBlockhash,
                lastValidBlockHeight: t.lastValidBlockHeight,
              },
              i && i.commitment
            )
          ).value;
        else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
          const { nonceInstruction: n } = t.nonceInfo,
            s = n.keys[0].pubkey;
          o = (
            await e.confirmTransaction(
              {
                abortSignal:
                  null === i || void 0 === i ? void 0 : i.abortSignal,
                minContextSlot: t.minNonceContextSlot,
                nonceAccountPubkey: s,
                nonceValue: t.nonceInfo.nonce,
                signature: r,
              },
              i && i.commitment
            )
          ).value;
        } else
          null != (null === i || void 0 === i ? void 0 : i.abortSignal) &&
            console.warn(
              "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
            ),
            (o = (await e.confirmTransaction(r, i && i.commitment)).value);
        if (o.err) {
          if (null != r)
            throw new ze({
              action: "send",
              signature: r,
              transactionMessage: `Status: (${JSON.stringify(o)})`,
            });
          throw new Error(`Transaction ${r} failed (${JSON.stringify(o)})`);
        }
        return r;
      }
      function Ce(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function Pe(e, t) {
        const n = e.layout.span >= 0 ? e.layout.span : de(e, t),
          s = i.Buffer.alloc(n),
          r = Object.assign({ instruction: e.index }, t);
        return e.layout.encode(r, s), s;
      }
      const _e = d.I0("lamportsPerSignature"),
        Oe = d.w3([
          d.DH("version"),
          d.DH("state"),
          le("authorizedPubkey"),
          le("nonce"),
          d.w3([_e], "feeCalculator"),
        ]),
        Be = Oe.span;
      class We {
        constructor(e) {
          (this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = e.authorizedPubkey),
            (this.nonce = e.nonce),
            (this.feeCalculator = e.feeCalculator);
        }
        static fromAccountData(e) {
          const t = Oe.decode(Q(e), 0);
          return new We({
            authorizedPubkey: new ne(t.authorizedPubkey),
            nonce: new ne(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
      }
      const Re =
        ((Ue = 8),
        (e) => {
          const t = (0, d.av)(Ue, e),
            { encode: n, decode: s } = ((e) => ({
              decode: e.decode.bind(e),
              encode: e.encode.bind(e),
            }))(t),
            r = t;
          return (
            (r.decode = (e, t) => {
              const n = s(e, t);
              return (0, h.k5)(i.Buffer.from(n));
            }),
            (r.encode = (e, t, i) => {
              const s = (0, h.Bq)(e, Ue);
              return n(s, t, i);
            }),
            r
          );
        });
      var Ue;
      const He = Object.freeze({
        Create: {
          index: 0,
          layout: d.w3([
            d.DH("instruction"),
            d.Wg("lamports"),
            d.Wg("space"),
            le("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: d.w3([d.DH("instruction"), le("programId")]),
        },
        Transfer: {
          index: 2,
          layout: d.w3([d.DH("instruction"), Re("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: d.w3([
            d.DH("instruction"),
            le("base"),
            ue("seed"),
            d.Wg("lamports"),
            d.Wg("space"),
            le("programId"),
          ]),
        },
        AdvanceNonceAccount: { index: 4, layout: d.w3([d.DH("instruction")]) },
        WithdrawNonceAccount: {
          index: 5,
          layout: d.w3([d.DH("instruction"), d.Wg("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: d.w3([d.DH("instruction"), le("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: d.w3([d.DH("instruction"), le("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: d.w3([d.DH("instruction"), d.Wg("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: d.w3([
            d.DH("instruction"),
            le("base"),
            ue("seed"),
            d.Wg("space"),
            le("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: d.w3([
            d.DH("instruction"),
            le("base"),
            ue("seed"),
            le("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: d.w3([
            d.DH("instruction"),
            Re("lamports"),
            ue("seed"),
            le("programId"),
          ]),
        },
        UpgradeNonceAccount: { index: 12, layout: d.w3([d.DH("instruction")]) },
      });
      class Ye {
        constructor() {}
        static createAccount(e) {
          const t = Pe(He.Create, {
            lamports: e.lamports,
            space: e.space,
            programId: Q(e.programId.toBuffer()),
          });
          return new Ie({
            keys: [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static transfer(e) {
          let t, n;
          if ("basePubkey" in e) {
            (t = Pe(He.TransferWithSeed, {
              lamports: BigInt(e.lamports),
              seed: e.seed,
              programId: Q(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          } else {
            (t = Pe(He.Transfer, { lamports: BigInt(e.lamports) })),
              (n = [
                { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          }
          return new Ie({ keys: n, programId: this.programId, data: t });
        }
        static assign(e) {
          let t, n;
          if ("basePubkey" in e) {
            (t = Pe(He.AssignWithSeed, {
              base: Q(e.basePubkey.toBuffer()),
              seed: e.seed,
              programId: Q(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            (t = Pe(He.Assign, { programId: Q(e.programId.toBuffer()) })),
              (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new Ie({ keys: n, programId: this.programId, data: t });
        }
        static createAccountWithSeed(e) {
          const t = Pe(He.CreateWithSeed, {
            base: Q(e.basePubkey.toBuffer()),
            seed: e.seed,
            lamports: e.lamports,
            space: e.space,
            programId: Q(e.programId.toBuffer()),
          });
          let n = [
            { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
            { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
          ];
          return (
            e.basePubkey.equals(e.fromPubkey) ||
              n.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
            new Ie({ keys: n, programId: this.programId, data: t })
          );
        }
        static createNonceAccount(e) {
          const t = new Te();
          "basePubkey" in e && "seed" in e
            ? t.add(
                Ye.createAccountWithSeed({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  basePubkey: e.basePubkey,
                  seed: e.seed,
                  lamports: e.lamports,
                  space: Be,
                  programId: this.programId,
                })
              )
            : t.add(
                Ye.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: Be,
                  programId: this.programId,
                })
              );
          const n = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey,
          };
          return t.add(this.nonceInitialize(n)), t;
        }
        static nonceInitialize(e) {
          const t = Pe(He.InitializeNonceAccount, {
              authorized: Q(e.authorizedPubkey.toBuffer()),
            }),
            n = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: Ee, isSigner: !1, isWritable: !1 },
                { pubkey: Le, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: t,
            };
          return new Ie(n);
        }
        static nonceAdvance(e) {
          const t = Pe(He.AdvanceNonceAccount),
            n = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: Ee, isSigner: !1, isWritable: !1 },
                { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: t,
            };
          return new Ie(n);
        }
        static nonceWithdraw(e) {
          const t = Pe(He.WithdrawNonceAccount, { lamports: e.lamports });
          return new Ie({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: Ee, isSigner: !1, isWritable: !1 },
              { pubkey: Le, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static nonceAuthorize(e) {
          const t = Pe(He.AuthorizeNonceAccount, {
            authorized: Q(e.newAuthorizedPubkey.toBuffer()),
          });
          return new Ie({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static allocate(e) {
          let t, n;
          if ("basePubkey" in e) {
            (t = Pe(He.AllocateWithSeed, {
              base: Q(e.basePubkey.toBuffer()),
              seed: e.seed,
              space: e.space,
              programId: Q(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            (t = Pe(He.Allocate, { space: e.space })),
              (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new Ie({ keys: n, programId: this.programId, data: t });
        }
      }
      Ye.programId = new ne("11111111111111111111111111111111");
      class Ke {
        constructor() {}
        static getMinNumSignatures(e) {
          return 2 * (Math.ceil(e / Ke.chunkSize) + 1 + 1);
        }
        static async load(e, t, n, s, r) {
          {
            const i = await e.getMinimumBalanceForRentExemption(r.length),
              o = await e.getAccountInfo(n.publicKey, "confirmed");
            let a = null;
            if (null !== o) {
              if (o.executable)
                return (
                  console.error(
                    "Program load failed, account is already executable"
                  ),
                  !1
                );
              o.data.length !== r.length &&
                ((a = a || new Te()),
                a.add(
                  Ye.allocate({ accountPubkey: n.publicKey, space: r.length })
                )),
                o.owner.equals(s) ||
                  ((a = a || new Te()),
                  a.add(
                    Ye.assign({ accountPubkey: n.publicKey, programId: s })
                  )),
                o.lamports < i &&
                  ((a = a || new Te()),
                  a.add(
                    Ye.transfer({
                      fromPubkey: t.publicKey,
                      toPubkey: n.publicKey,
                      lamports: i - o.lamports,
                    })
                  ));
            } else
              a = new Te().add(
                Ye.createAccount({
                  fromPubkey: t.publicKey,
                  newAccountPubkey: n.publicKey,
                  lamports: i > 0 ? i : 1,
                  space: r.length,
                  programId: s,
                })
              );
            null !== a && (await De(e, a, [t, n], { commitment: "confirmed" }));
          }
          const o = d.w3([
              d.DH("instruction"),
              d.DH("offset"),
              d.DH("bytesLength"),
              d.DH("bytesLengthPadding"),
              d.O6(d.u8("byte"), d.cY(d.DH(), -8), "bytes"),
            ]),
            a = Ke.chunkSize;
          let l = 0,
            c = r,
            u = [];
          for (; c.length > 0; ) {
            const r = c.slice(0, a),
              d = i.Buffer.alloc(a + 16);
            o.encode(
              {
                instruction: 0,
                offset: l,
                bytes: r,
                bytesLength: 0,
                bytesLengthPadding: 0,
              },
              d
            );
            const h = new Te().add({
              keys: [{ pubkey: n.publicKey, isSigner: !0, isWritable: !0 }],
              programId: s,
              data: d,
            });
            if (
              (u.push(De(e, h, [t, n], { commitment: "confirmed" })),
              e._rpcEndpoint.includes("solana.com"))
            ) {
              const e = 4;
              await Ce(1e3 / e);
            }
            (l += a), (c = c.slice(a));
          }
          await Promise.all(u);
          {
            const r = d.w3([d.DH("instruction")]),
              o = i.Buffer.alloc(r.span);
            r.encode({ instruction: 1 }, o);
            const a = new Te().add({
                keys: [
                  { pubkey: n.publicKey, isSigner: !0, isWritable: !0 },
                  { pubkey: Le, isSigner: !1, isWritable: !1 },
                ],
                programId: s,
                data: o,
              }),
              l = "processed",
              c = await e.sendTransaction(a, [t, n], {
                preflightCommitment: l,
              }),
              { context: u, value: h } = await e.confirmTransaction(
                {
                  signature: c,
                  lastValidBlockHeight: a.lastValidBlockHeight,
                  blockhash: a.recentBlockhash,
                },
                l
              );
            if (h.err)
              throw new Error(`Transaction ${c} failed (${JSON.stringify(h)})`);
            for (;;) {
              try {
                if ((await e.getSlot({ commitment: l })) > u.slot) break;
              } catch {}
              await new Promise((e) => setTimeout(e, Math.round(200)));
            }
          }
          return !0;
        }
      }
      Ke.chunkSize = 932;
      new ne("BPFLoader2111111111111111111111111111111111");
      function Ge(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      var Ve, $e;
      function Fe() {
        if ($e) return Ve;
        $e = 1;
        var e = Object.prototype.toString,
          t =
            Object.keys ||
            function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return t;
            };
        function n(i, s) {
          var r, o, a, l, c, u, d;
          if (!0 === i) return "true";
          if (!1 === i) return "false";
          switch (typeof i) {
            case "object":
              if (null === i) return null;
              if (i.toJSON && "function" === typeof i.toJSON)
                return n(i.toJSON(), s);
              if ("[object Array]" === (d = e.call(i))) {
                for (a = "[", o = i.length - 1, r = 0; r < o; r++)
                  a += n(i[r], !0) + ",";
                return o > -1 && (a += n(i[r], !0)), a + "]";
              }
              if ("[object Object]" === d) {
                for (o = (l = t(i).sort()).length, a = "", r = 0; r < o; )
                  void 0 !== (u = n(i[(c = l[r])], !1)) &&
                    (a && (a += ","), (a += JSON.stringify(c) + ":" + u)),
                    r++;
                return "{" + a + "}";
              }
              return JSON.stringify(i);
            case "function":
            case "undefined":
              return s ? null : void 0;
            case "string":
              return JSON.stringify(i);
            default:
              return isFinite(i) ? i : null;
          }
        }
        return (Ve = function (e) {
          var t = n(e, !1);
          if (void 0 !== t) return "" + t;
        });
      }
      var qe = Ge(Fe());
      function Qe(e) {
        let t = 0;
        for (; e > 1; ) (e /= 2), t++;
        return t;
      }
      class Ze {
        constructor(e, t, n, i, s) {
          (this.slotsPerEpoch = void 0),
            (this.leaderScheduleSlotOffset = void 0),
            (this.warmup = void 0),
            (this.firstNormalEpoch = void 0),
            (this.firstNormalSlot = void 0),
            (this.slotsPerEpoch = e),
            (this.leaderScheduleSlotOffset = t),
            (this.warmup = n),
            (this.firstNormalEpoch = i),
            (this.firstNormalSlot = s);
        }
        getEpoch(e) {
          return this.getEpochAndSlotIndex(e)[0];
        }
        getEpochAndSlotIndex(e) {
          if (e < this.firstNormalSlot) {
            const n =
              Qe(
                0 === (t = e + 32 + 1)
                  ? 1
                  : (t--,
                    (t |= t >> 1),
                    (t |= t >> 2),
                    (t |= t >> 4),
                    (t |= t >> 8),
                    (t |= t >> 16),
                    1 + (t |= t >> 32))
              ) -
              Qe(32) -
              1;
            return [n, e - (this.getSlotsInEpoch(n) - 32)];
          }
          {
            const t = e - this.firstNormalSlot,
              n = Math.floor(t / this.slotsPerEpoch);
            return [this.firstNormalEpoch + n, t % this.slotsPerEpoch];
          }
          var t;
        }
        getFirstSlotInEpoch(e) {
          return e <= this.firstNormalEpoch
            ? 32 * (Math.pow(2, e) - 1)
            : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
                this.firstNormalSlot;
        }
        getLastSlotInEpoch(e) {
          return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
        }
        getSlotsInEpoch(e) {
          return e < this.firstNormalEpoch
            ? Math.pow(2, e + Qe(32))
            : this.slotsPerEpoch;
        }
      }
      var Xe = globalThis.fetch;
      class Je extends H.vE {
        constructor(e, t, n) {
          super(
            (e) => {
              const n = (0, H.kb)(e, {
                autoconnect: !0,
                max_reconnects: 5,
                reconnect: !0,
                reconnect_interval: 1e3,
                ...t,
              });
              return (this.underlyingSocket = "socket" in n ? n.socket : n), n;
            },
            e,
            t,
            n
          ),
            (this.underlyingSocket = void 0);
        }
        call() {
          var e;
          const t =
            null === (e = this.underlyingSocket) || void 0 === e
              ? void 0
              : e.readyState;
          return 1 === t
            ? super.call(...arguments)
            : Promise.reject(
                new Error(
                  "Tried to call a JSON-RPC method `" +
                    (arguments.length <= 0 ? void 0 : arguments[0]) +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
        notify() {
          var e;
          const t =
            null === (e = this.underlyingSocket) || void 0 === e
              ? void 0
              : e.readyState;
          return 1 === t
            ? super.notify(...arguments)
            : Promise.reject(
                new Error(
                  "Tried to send a JSON-RPC notification `" +
                    (arguments.length <= 0 ? void 0 : arguments[0]) +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
      }
      class et {
        constructor(e) {
          (this.key = void 0),
            (this.state = void 0),
            (this.key = e.key),
            (this.state = e.state);
        }
        isActive() {
          const e = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === e;
        }
        static deserialize(e) {
          const t = (function (e, t) {
              let n;
              try {
                n = e.layout.decode(t);
              } catch (i) {
                throw new Error("invalid instruction; " + i);
              }
              if (n.typeIndex !== e.index)
                throw new Error(
                  `invalid account data; account type mismatch ${n.typeIndex} != ${e.index}`
                );
              return n;
            })(tt, e),
            n = e.length - 56;
          ge(n >= 0, "lookup table is invalid"),
            ge(n % 32 === 0, "lookup table is invalid");
          const i = n / 32,
            { addresses: s } = d
              .w3([d.O6(le(), i, "addresses")])
              .decode(e.slice(56));
          return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority:
              0 !== t.authority.length ? new ne(t.authority[0]) : void 0,
            addresses: s.map((e) => new ne(e)),
          };
        }
      }
      const tt = {
          index: 1,
          layout: d.w3([
            d.DH("typeIndex"),
            Re("deactivationSlot"),
            d.I0("lastExtendedSlot"),
            d.u8("lastExtendedStartIndex"),
            d.u8(),
            d.O6(le(), d.cY(d.u8(), -1), "authority"),
          ]),
        },
        nt = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
      const it = W(A(ne), C(), (e) => new ne(e)),
        st = P([C(), E("base64")]),
        rt = W(A(i.Buffer), st, (e) => i.Buffer.from(e[0], "base64"));
      function ot(e) {
        let t, n;
        if ("string" === typeof e) t = e;
        else if (e) {
          const { commitment: i, ...s } = e;
          (t = i), (n = s);
        }
        return { commitment: t, config: n };
      }
      function at(e) {
        return e.map((e) => {
          var t;
          return "memcmp" in e
            ? {
                ...e,
                memcmp: {
                  ...e.memcmp,
                  encoding:
                    null !== (t = e.memcmp.encoding) && void 0 !== t
                      ? t
                      : "base58",
                },
              }
            : e;
        });
      }
      function lt(e) {
        return O([
          _({ jsonrpc: E("2.0"), id: C(), result: e }),
          _({
            jsonrpc: E("2.0"),
            id: C(),
            error: _({ code: B(), message: C(), data: j(I("any", () => !0)) }),
          }),
        ]);
      }
      const ct = lt(B());
      function ut(e) {
        return W(lt(e), ct, (t) =>
          "error" in t ? t : { ...t, result: S(t.result, e) }
        );
      }
      function dt(e) {
        return ut(_({ context: _({ slot: z() }), value: e }));
      }
      function ht(e) {
        return _({ context: _({ slot: z() }), value: e });
      }
      function pt(e, t) {
        return 0 === e
          ? new ve({
              header: t.header,
              staticAccountKeys: t.accountKeys.map((e) => new ne(e)),
              recentBlockhash: t.recentBlockhash,
              compiledInstructions: t.instructions.map((e) => ({
                programIdIndex: e.programIdIndex,
                accountKeyIndexes: e.accounts,
                data: l().decode(e.data),
              })),
              addressTableLookups: t.addressTableLookups,
            })
          : new be(t);
      }
      const gt = _({
          foundation: z(),
          foundationTerm: z(),
          initial: z(),
          taper: z(),
          terminal: z(),
        }),
        ft = ut(
          T(
            N(
              _({
                epoch: z(),
                effectiveSlot: z(),
                amount: z(),
                postBalance: z(),
                commission: j(N(z())),
              })
            )
          )
        ),
        mt = T(_({ slot: z(), prioritizationFee: z() })),
        yt = _({ total: z(), validator: z(), foundation: z(), epoch: z() }),
        wt = _({
          epoch: z(),
          slotIndex: z(),
          slotsInEpoch: z(),
          absoluteSlot: z(),
          blockHeight: j(z()),
          transactionCount: j(z()),
        }),
        bt = _({
          slotsPerEpoch: z(),
          leaderScheduleSlotOffset: z(),
          warmup: x(),
          firstNormalEpoch: z(),
          firstNormalSlot: z(),
        }),
        vt = D(C(), T(z())),
        St = N(O([_({}), C()])),
        kt = _({ err: St }),
        Mt = E("receivedSignature"),
        It = _({ "solana-core": C(), "feature-set": j(z()) }),
        Tt = _({ program: C(), programId: it, parsed: B() }),
        xt = _({ programId: it, accounts: T(it), data: C() }),
        At = dt(
          _({
            err: N(O([_({}), C()])),
            logs: N(T(C())),
            accounts: j(
              N(
                T(
                  N(
                    _({
                      executable: x(),
                      owner: C(),
                      lamports: z(),
                      data: T(C()),
                      rentEpoch: j(z()),
                    })
                  )
                )
              )
            ),
            unitsConsumed: j(z()),
            returnData: j(
              N(_({ programId: C(), data: P([C(), E("base64")]) }))
            ),
            innerInstructions: j(
              N(T(_({ index: z(), instructions: T(O([Tt, xt])) })))
            ),
          })
        ),
        Et = dt(
          _({
            byIdentity: D(C(), T(z())),
            range: _({ firstSlot: z(), lastSlot: z() }),
          })
        );
      const Lt = ut(gt),
        Nt = ut(yt),
        zt = ut(mt),
        jt = ut(wt),
        Dt = ut(bt),
        Ct = ut(vt),
        Pt = ut(z()),
        _t = dt(
          _({
            total: z(),
            circulating: z(),
            nonCirculating: z(),
            nonCirculatingAccounts: T(it),
          })
        ),
        Ot = _({
          amount: C(),
          uiAmount: N(z()),
          decimals: z(),
          uiAmountString: j(C()),
        }),
        Bt = dt(
          T(
            _({
              address: it,
              amount: C(),
              uiAmount: N(z()),
              decimals: z(),
              uiAmountString: j(C()),
            })
          )
        ),
        Wt = dt(
          T(
            _({
              pubkey: it,
              account: _({
                executable: x(),
                owner: it,
                lamports: z(),
                data: rt,
                rentEpoch: z(),
              }),
            })
          )
        ),
        Rt = _({ program: C(), parsed: B(), space: z() }),
        Ut = dt(
          T(
            _({
              pubkey: it,
              account: _({
                executable: x(),
                owner: it,
                lamports: z(),
                data: Rt,
                rentEpoch: z(),
              }),
            })
          )
        ),
        Ht = dt(T(_({ lamports: z(), address: it }))),
        Yt = _({
          executable: x(),
          owner: it,
          lamports: z(),
          data: rt,
          rentEpoch: z(),
        }),
        Kt = _({ pubkey: it, account: Yt }),
        Gt = W(O([A(i.Buffer), Rt]), O([st, Rt]), (e) =>
          Array.isArray(e) ? S(e, rt) : e
        ),
        Vt = _({
          executable: x(),
          owner: it,
          lamports: z(),
          data: Gt,
          rentEpoch: z(),
        }),
        $t = _({ pubkey: it, account: Vt }),
        Ft = _({
          state: O([
            E("active"),
            E("inactive"),
            E("activating"),
            E("deactivating"),
          ]),
          active: z(),
          inactive: z(),
        }),
        qt = ut(
          T(
            _({
              signature: C(),
              slot: z(),
              err: St,
              memo: N(C()),
              blockTime: j(N(z())),
            })
          )
        ),
        Qt = ut(
          T(
            _({
              signature: C(),
              slot: z(),
              err: St,
              memo: N(C()),
              blockTime: j(N(z())),
            })
          )
        ),
        Zt = _({ subscription: z(), result: ht(Yt) }),
        Xt = _({ pubkey: it, account: Yt }),
        Jt = _({ subscription: z(), result: ht(Xt) }),
        en = _({ parent: z(), slot: z(), root: z() }),
        tn = _({ subscription: z(), result: en }),
        nn = O([
          _({
            type: O([
              E("firstShredReceived"),
              E("completed"),
              E("optimisticConfirmation"),
              E("root"),
            ]),
            slot: z(),
            timestamp: z(),
          }),
          _({ type: E("createdBank"), parent: z(), slot: z(), timestamp: z() }),
          _({
            type: E("frozen"),
            slot: z(),
            timestamp: z(),
            stats: _({
              numTransactionEntries: z(),
              numSuccessfulTransactions: z(),
              numFailedTransactions: z(),
              maxTransactionsPerEntry: z(),
            }),
          }),
          _({ type: E("dead"), slot: z(), timestamp: z(), err: C() }),
        ]),
        sn = _({ subscription: z(), result: nn }),
        rn = _({ subscription: z(), result: ht(O([kt, Mt])) }),
        on = _({ subscription: z(), result: z() }),
        an = _({
          pubkey: C(),
          gossip: N(C()),
          tpu: N(C()),
          rpc: N(C()),
          version: N(C()),
        }),
        ln = _({
          votePubkey: C(),
          nodePubkey: C(),
          activatedStake: z(),
          epochVoteAccount: x(),
          epochCredits: T(P([z(), z(), z()])),
          commission: z(),
          lastVote: z(),
          rootSlot: N(z()),
        }),
        cn = ut(_({ current: T(ln), delinquent: T(ln) })),
        un = O([E("processed"), E("confirmed"), E("finalized")]),
        dn = _({
          slot: z(),
          confirmations: N(z()),
          err: St,
          confirmationStatus: j(un),
        }),
        hn = dt(T(N(dn))),
        pn = ut(z()),
        gn = _({
          accountKey: it,
          writableIndexes: T(z()),
          readonlyIndexes: T(z()),
        }),
        fn = _({
          signatures: T(C()),
          message: _({
            accountKeys: T(C()),
            header: _({
              numRequiredSignatures: z(),
              numReadonlySignedAccounts: z(),
              numReadonlyUnsignedAccounts: z(),
            }),
            instructions: T(
              _({ accounts: T(z()), data: C(), programIdIndex: z() })
            ),
            recentBlockhash: C(),
            addressTableLookups: j(T(gn)),
          }),
        }),
        mn = _({
          pubkey: it,
          signer: x(),
          writable: x(),
          source: j(O([E("transaction"), E("lookupTable")])),
        }),
        yn = _({ accountKeys: T(mn), signatures: T(C()) }),
        wn = _({ parsed: B(), program: C(), programId: it }),
        bn = _({ accounts: T(it), data: C(), programId: it }),
        vn = W(
          O([bn, wn]),
          O([
            _({ parsed: B(), program: C(), programId: C() }),
            _({ accounts: T(C()), data: C(), programId: C() }),
          ]),
          (e) => S(e, "accounts" in e ? bn : wn)
        ),
        Sn = _({
          signatures: T(C()),
          message: _({
            accountKeys: T(mn),
            instructions: T(vn),
            recentBlockhash: C(),
            addressTableLookups: j(N(T(gn))),
          }),
        }),
        kn = _({
          accountIndex: z(),
          mint: C(),
          owner: j(C()),
          programId: j(C()),
          uiTokenAmount: Ot,
        }),
        Mn = _({ writable: T(it), readonly: T(it) }),
        In = _({
          err: St,
          fee: z(),
          innerInstructions: j(
            N(
              T(
                _({
                  index: z(),
                  instructions: T(
                    _({ accounts: T(z()), data: C(), programIdIndex: z() })
                  ),
                })
              )
            )
          ),
          preBalances: T(z()),
          postBalances: T(z()),
          logMessages: j(N(T(C()))),
          preTokenBalances: j(N(T(kn))),
          postTokenBalances: j(N(T(kn))),
          loadedAddresses: j(Mn),
          computeUnitsConsumed: j(z()),
        }),
        Tn = _({
          err: St,
          fee: z(),
          innerInstructions: j(N(T(_({ index: z(), instructions: T(vn) })))),
          preBalances: T(z()),
          postBalances: T(z()),
          logMessages: j(N(T(C()))),
          preTokenBalances: j(N(T(kn))),
          postTokenBalances: j(N(T(kn))),
          loadedAddresses: j(Mn),
          computeUnitsConsumed: j(z()),
        }),
        xn = O([E(0), E("legacy")]),
        An = _({
          pubkey: C(),
          lamports: z(),
          postBalance: N(z()),
          rewardType: N(C()),
          commission: j(N(z())),
        }),
        En = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              transactions: T(
                _({ transaction: fn, meta: N(In), version: j(xn) })
              ),
              rewards: j(T(An)),
              blockTime: N(z()),
              blockHeight: N(z()),
            })
          )
        ),
        Ln = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              rewards: j(T(An)),
              blockTime: N(z()),
              blockHeight: N(z()),
            })
          )
        ),
        Nn = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              transactions: T(
                _({ transaction: yn, meta: N(In), version: j(xn) })
              ),
              rewards: j(T(An)),
              blockTime: N(z()),
              blockHeight: N(z()),
            })
          )
        ),
        zn = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              transactions: T(
                _({ transaction: Sn, meta: N(Tn), version: j(xn) })
              ),
              rewards: j(T(An)),
              blockTime: N(z()),
              blockHeight: N(z()),
            })
          )
        ),
        jn = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              transactions: T(
                _({ transaction: yn, meta: N(Tn), version: j(xn) })
              ),
              rewards: j(T(An)),
              blockTime: N(z()),
              blockHeight: N(z()),
            })
          )
        ),
        Dn = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              rewards: j(T(An)),
              blockTime: N(z()),
              blockHeight: N(z()),
            })
          )
        ),
        Cn = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              transactions: T(_({ transaction: fn, meta: N(In) })),
              rewards: j(T(An)),
              blockTime: N(z()),
            })
          )
        ),
        Pn = ut(
          N(
            _({
              blockhash: C(),
              previousBlockhash: C(),
              parentSlot: z(),
              signatures: T(C()),
              blockTime: N(z()),
            })
          )
        ),
        _n = ut(
          N(
            _({
              slot: z(),
              meta: N(In),
              blockTime: j(N(z())),
              transaction: fn,
              version: j(xn),
            })
          )
        ),
        On = ut(
          N(
            _({
              slot: z(),
              transaction: Sn,
              meta: N(Tn),
              blockTime: j(N(z())),
              version: j(xn),
            })
          )
        ),
        Bn = dt(_({ blockhash: C(), lastValidBlockHeight: z() })),
        Wn = dt(x()),
        Rn = ut(
          T(
            _({
              slot: z(),
              numTransactions: z(),
              numSlots: z(),
              samplePeriodSecs: z(),
            })
          )
        ),
        Un = dt(N(_({ feeCalculator: _({ lamportsPerSignature: z() }) }))),
        Hn = ut(C()),
        Yn = ut(C()),
        Kn = _({ err: St, logs: T(C()), signature: C() }),
        Gn = _({ result: ht(Kn), subscription: z() }),
        Vn = { "solana-client": "js/1.0.0-maintenance" };
      class $n {
        constructor(e, t) {
          let n, i, s, r, o, a;
          var l;
          (this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            (this.getBlockHeight = (() => {
              const e = {};
              return async (t) => {
                var n;
                const { commitment: i, config: s } = ot(t),
                  r = this._buildArgs([], i, void 0, s),
                  o = qe(r);
                return (
                  (e[o] =
                    null !== (n = e[o]) && void 0 !== n
                      ? n
                      : (async () => {
                          try {
                            const e = S(
                              await this._rpcRequest("getBlockHeight", r),
                              ut(z())
                            );
                            if ("error" in e)
                              throw new je(
                                e.error,
                                "failed to get block height information"
                              );
                            return e.result;
                          } finally {
                            delete e[o];
                          }
                        })()),
                  await e[o]
                );
              };
            })()),
            t && "string" === typeof t
              ? (this._commitment = t)
              : t &&
                ((this._commitment = t.commitment),
                (this._confirmTransactionInitialTimeout =
                  t.confirmTransactionInitialTimeout),
                (n = t.wsEndpoint),
                (i = t.httpHeaders),
                (s = t.fetch),
                (r = t.fetchMiddleware),
                (o = t.disableRetryOnRateLimit),
                (a = t.httpAgent)),
            (this._rpcEndpoint = (function (e) {
              if (!1 === /^https?:/.test(e))
                throw new TypeError(
                  "Endpoint URL must start with `http:` or `https:`."
                );
              return e;
            })(e)),
            (this._rpcWsEndpoint =
              n ||
              (function (e) {
                const t = e.match(nt);
                if (null == t)
                  throw TypeError(`Failed to validate endpoint URL \`${e}\``);
                const [n, i, s, r] = t,
                  o = e.startsWith("https:") ? "wss:" : "ws:",
                  a = null == s ? null : parseInt(s.slice(1), 10);
                return `${o}//${i}${null == a ? "" : `:${a + 1}`}${r}`;
              })(e)),
            (this._rpcClient = (function (e, t, n, i, s, r) {
              const o = n || Xe;
              let a;
              return (
                null != r &&
                  console.warn(
                    "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
                  ),
                i &&
                  (a = async (e, t) => {
                    const n = await new Promise((n, s) => {
                      try {
                        i(e, t, (e, t) => n([e, t]));
                      } catch (r) {
                        s(r);
                      }
                    });
                    return await o(...n);
                  }),
                new (U())(async (n, i) => {
                  const r = {
                    method: "POST",
                    body: n,
                    agent: void 0,
                    headers: Object.assign(
                      { "Content-Type": "application/json" },
                      t || {},
                      Vn
                    ),
                  };
                  try {
                    let t,
                      n = 5,
                      l = 500;
                    for (
                      ;
                      (t = a ? await a(e, r) : await o(e, r)),
                        429 === t.status && !0 !== s && ((n -= 1), 0 !== n);

                    )
                      console.error(
                        `Server responded with ${t.status} ${t.statusText}.  Retrying after ${l}ms delay...`
                      ),
                        await Ce(l),
                        (l *= 2);
                    const c = await t.text();
                    t.ok
                      ? i(null, c)
                      : i(new Error(`${t.status} ${t.statusText}: ${c}`));
                  } catch (l) {
                    l instanceof Error && i(l);
                  }
                }, {})
              );
            })(e, i, s, r, o, a)),
            (this._rpcRequest =
              ((l = this._rpcClient),
              (e, t) =>
                new Promise((n, i) => {
                  l.request(e, t, (e, t) => {
                    e ? i(e) : n(t);
                  });
                }))),
            (this._rpcBatchRequest = (function (e) {
              return (t) =>
                new Promise((n, i) => {
                  0 === t.length && n([]);
                  const s = t.map((t) => e.request(t.methodName, t.args));
                  e.request(s, (e, t) => {
                    e ? i(e) : n(t);
                  });
                });
            })(this._rpcClient)),
            (this._rpcWebSocket = new Je(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this)
            );
        }
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        async getBalanceAndContext(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgs([e.toBase58()], n, void 0, i),
            r = S(await this._rpcRequest("getBalance", s), dt(z()));
          if ("error" in r)
            throw new je(r.error, `failed to get balance for ${e.toBase58()}`);
          return r.result;
        }
        async getBalance(e, t) {
          return await this.getBalanceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw new Error(
                "failed to get balance of account " + e.toBase58() + ": " + t
              );
            });
        }
        async getBlockTime(e) {
          const t = S(await this._rpcRequest("getBlockTime", [e]), ut(N(z())));
          if ("error" in t)
            throw new je(t.error, `failed to get block time for slot ${e}`);
          return t.result;
        }
        async getMinimumLedgerSlot() {
          const e = S(await this._rpcRequest("minimumLedgerSlot", []), ut(z()));
          if ("error" in e)
            throw new je(e.error, "failed to get minimum ledger slot");
          return e.result;
        }
        async getFirstAvailableBlock() {
          const e = S(await this._rpcRequest("getFirstAvailableBlock", []), Pt);
          if ("error" in e)
            throw new je(e.error, "failed to get first available block");
          return e.result;
        }
        async getSupply(e) {
          let t = {};
          t =
            "string" === typeof e
              ? { commitment: e }
              : e
              ? { ...e, commitment: (e && e.commitment) || this.commitment }
              : { commitment: this.commitment };
          const n = S(await this._rpcRequest("getSupply", [t]), _t);
          if ("error" in n) throw new je(n.error, "failed to get supply");
          return n.result;
        }
        async getTokenSupply(e, t) {
          const n = this._buildArgs([e.toBase58()], t),
            i = S(await this._rpcRequest("getTokenSupply", n), dt(Ot));
          if ("error" in i) throw new je(i.error, "failed to get token supply");
          return i.result;
        }
        async getTokenAccountBalance(e, t) {
          const n = this._buildArgs([e.toBase58()], t),
            i = S(await this._rpcRequest("getTokenAccountBalance", n), dt(Ot));
          if ("error" in i)
            throw new je(i.error, "failed to get token account balance");
          return i.result;
        }
        async getTokenAccountsByOwner(e, t, n) {
          const { commitment: i, config: s } = ot(n);
          let r = [e.toBase58()];
          "mint" in t
            ? r.push({ mint: t.mint.toBase58() })
            : r.push({ programId: t.programId.toBase58() });
          const o = this._buildArgs(r, i, "base64", s),
            a = S(await this._rpcRequest("getTokenAccountsByOwner", o), Wt);
          if ("error" in a)
            throw new je(
              a.error,
              `failed to get token accounts owned by account ${e.toBase58()}`
            );
          return a.result;
        }
        async getParsedTokenAccountsByOwner(e, t, n) {
          let i = [e.toBase58()];
          "mint" in t
            ? i.push({ mint: t.mint.toBase58() })
            : i.push({ programId: t.programId.toBase58() });
          const s = this._buildArgs(i, n, "jsonParsed"),
            r = S(await this._rpcRequest("getTokenAccountsByOwner", s), Ut);
          if ("error" in r)
            throw new je(
              r.error,
              `failed to get token accounts owned by account ${e.toBase58()}`
            );
          return r.result;
        }
        async getLargestAccounts(e) {
          const t = {
              ...e,
              commitment: (e && e.commitment) || this.commitment,
            },
            n = t.filter || t.commitment ? [t] : [],
            i = S(await this._rpcRequest("getLargestAccounts", n), Ht);
          if ("error" in i)
            throw new je(i.error, "failed to get largest accounts");
          return i.result;
        }
        async getTokenLargestAccounts(e, t) {
          const n = this._buildArgs([e.toBase58()], t),
            i = S(await this._rpcRequest("getTokenLargestAccounts", n), Bt);
          if ("error" in i)
            throw new je(i.error, "failed to get token largest accounts");
          return i.result;
        }
        async getAccountInfoAndContext(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgs([e.toBase58()], n, "base64", i),
            r = S(await this._rpcRequest("getAccountInfo", s), dt(N(Yt)));
          if ("error" in r)
            throw new je(
              r.error,
              `failed to get info about account ${e.toBase58()}`
            );
          return r.result;
        }
        async getParsedAccountInfo(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgs([e.toBase58()], n, "jsonParsed", i),
            r = S(await this._rpcRequest("getAccountInfo", s), dt(N(Vt)));
          if ("error" in r)
            throw new je(
              r.error,
              `failed to get info about account ${e.toBase58()}`
            );
          return r.result;
        }
        async getAccountInfo(e, t) {
          try {
            return (await this.getAccountInfoAndContext(e, t)).value;
          } catch (n) {
            throw new Error(
              "failed to get info about account " + e.toBase58() + ": " + n
            );
          }
        }
        async getMultipleParsedAccounts(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = e.map((e) => e.toBase58()),
            r = this._buildArgs([s], n, "jsonParsed", i),
            o = S(
              await this._rpcRequest("getMultipleAccounts", r),
              dt(T(N(Vt)))
            );
          if ("error" in o)
            throw new je(o.error, `failed to get info for accounts ${s}`);
          return o.result;
        }
        async getMultipleAccountsInfoAndContext(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = e.map((e) => e.toBase58()),
            r = this._buildArgs([s], n, "base64", i),
            o = S(
              await this._rpcRequest("getMultipleAccounts", r),
              dt(T(N(Yt)))
            );
          if ("error" in o)
            throw new je(o.error, `failed to get info for accounts ${s}`);
          return o.result;
        }
        async getMultipleAccountsInfo(e, t) {
          return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
        }
        async getStakeActivation(e, t, n) {
          const { commitment: i, config: s } = ot(t),
            r = this._buildArgs([e.toBase58()], i, void 0, {
              ...s,
              epoch:
                null != n ? n : null === s || void 0 === s ? void 0 : s.epoch,
            }),
            o = S(await this._rpcRequest("getStakeActivation", r), ut(Ft));
          if ("error" in o)
            throw new je(
              o.error,
              `failed to get Stake Activation ${e.toBase58()}`
            );
          return o.result;
        }
        async getProgramAccounts(e, t) {
          const { commitment: n, config: i } = ot(t),
            { encoding: s, ...r } = i || {},
            o = this._buildArgs([e.toBase58()], n, s || "base64", {
              ...r,
              ...(r.filters ? { filters: at(r.filters) } : null),
            }),
            a = await this._rpcRequest("getProgramAccounts", o),
            l = T(Kt),
            c = !0 === r.withContext ? S(a, dt(l)) : S(a, ut(l));
          if ("error" in c)
            throw new je(
              c.error,
              `failed to get accounts owned by program ${e.toBase58()}`
            );
          return c.result;
        }
        async getParsedProgramAccounts(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgs([e.toBase58()], n, "jsonParsed", i),
            r = S(await this._rpcRequest("getProgramAccounts", s), ut(T($t)));
          if ("error" in r)
            throw new je(
              r.error,
              `failed to get accounts owned by program ${e.toBase58()}`
            );
          return r.result;
        }
        async confirmTransaction(e, t) {
          let n, i;
          if ("string" == typeof e) n = e;
          else {
            var s;
            const t = e;
            if (null !== (s = t.abortSignal) && void 0 !== s && s.aborted)
              return Promise.reject(t.abortSignal.reason);
            n = t.signature;
          }
          try {
            i = l().decode(n);
          } catch (r) {
            throw new Error("signature must be base58 encoded: " + n);
          }
          return (
            ge(64 === i.length, "signature has invalid length"),
            "string" === typeof e
              ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                  commitment: t || this.commitment,
                  signature: n,
                })
              : "lastValidBlockHeight" in e
              ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy(
                  { commitment: t || this.commitment, strategy: e }
                )
              : await this.confirmTransactionUsingDurableNonceStrategy({
                  commitment: t || this.commitment,
                  strategy: e,
                })
          );
        }
        getCancellationPromise(e) {
          return new Promise((t, n) => {
            null != e &&
              (e.aborted
                ? n(e.reason)
                : e.addEventListener("abort", () => {
                    n(e.reason);
                  }));
          });
        }
        getTransactionConfirmationPromise(e) {
          let t,
            n,
            { commitment: i, signature: s } = e,
            r = !1;
          return {
            abortConfirmation: () => {
              n && (n(), (n = void 0)),
                null != t && (this.removeSignatureListener(t), (t = void 0));
            },
            confirmationPromise: new Promise((e, o) => {
              try {
                t = this.onSignature(
                  s,
                  (n, i) => {
                    t = void 0;
                    const s = { context: i, value: n };
                    e({ __type: ke.PROCESSED, response: s });
                  },
                  i
                );
                const a = new Promise((e) => {
                  null == t
                    ? e()
                    : (n = this._onSubscriptionStateChange(t, (t) => {
                        "subscribed" === t && e();
                      }));
                });
                (async () => {
                  if ((await a, r)) return;
                  const t = await this.getSignatureStatus(s);
                  if (r) return;
                  if (null == t) return;
                  const { context: n, value: l } = t;
                  if (null != l)
                    if (null !== l && void 0 !== l && l.err) o(l.err);
                    else {
                      switch (i) {
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                          if ("processed" === l.confirmationStatus) return;
                          break;
                        case "finalized":
                        case "max":
                        case "root":
                          if (
                            "processed" === l.confirmationStatus ||
                            "confirmed" === l.confirmationStatus
                          )
                            return;
                      }
                      (r = !0),
                        e({
                          __type: ke.PROCESSED,
                          response: { context: n, value: l },
                        });
                    }
                })();
              } catch (a) {
                o(a);
              }
            }),
          };
        }
        async confirmTransactionUsingBlockHeightExceedanceStrategy(e) {
          let {
              commitment: t,
              strategy: {
                abortSignal: n,
                lastValidBlockHeight: i,
                signature: s,
              },
            } = e,
            r = !1;
          const o = new Promise((e) => {
              const n = async () => {
                try {
                  return await this.getBlockHeight(t);
                } catch (e) {
                  return -1;
                }
              };
              (async () => {
                let t = await n();
                if (!r) {
                  for (; t <= i; ) {
                    if ((await Ce(1e3), r)) return;
                    if (((t = await n()), r)) return;
                  }
                  e({ __type: ke.BLOCKHEIGHT_EXCEEDED });
                }
              })();
            }),
            { abortConfirmation: a, confirmationPromise: l } =
              this.getTransactionConfirmationPromise({
                commitment: t,
                signature: s,
              }),
            c = this.getCancellationPromise(n);
          let u;
          try {
            const e = await Promise.race([c, l, o]);
            if (e.__type !== ke.PROCESSED) throw new se(s);
            u = e.response;
          } finally {
            (r = !0), a();
          }
          return u;
        }
        async confirmTransactionUsingDurableNonceStrategy(e) {
          let {
              commitment: t,
              strategy: {
                abortSignal: n,
                minContextSlot: i,
                nonceAccountPubkey: s,
                nonceValue: r,
                signature: o,
              },
            } = e,
            a = !1;
          const l = new Promise((e) => {
              let n = r,
                o = null;
              const l = async () => {
                try {
                  const { context: e, value: n } =
                    await this.getNonceAndContext(s, {
                      commitment: t,
                      minContextSlot: i,
                    });
                  return (
                    (o = e.slot), null === n || void 0 === n ? void 0 : n.nonce
                  );
                } catch (e) {
                  return n;
                }
              };
              (async () => {
                if (((n = await l()), !a))
                  for (;;) {
                    if (r !== n)
                      return void e({
                        __type: ke.NONCE_INVALID,
                        slotInWhichNonceDidAdvance: o,
                      });
                    if ((await Ce(2e3), a)) return;
                    if (((n = await l()), a)) return;
                  }
              })();
            }),
            { abortConfirmation: c, confirmationPromise: u } =
              this.getTransactionConfirmationPromise({
                commitment: t,
                signature: o,
              }),
            d = this.getCancellationPromise(n);
          let h;
          try {
            const e = await Promise.race([d, u, l]);
            if (e.__type === ke.PROCESSED) h = e.response;
            else {
              var p;
              let n;
              for (;;) {
                var g;
                const t = await this.getSignatureStatus(o);
                if (null == t) break;
                if (
                  !(
                    t.context.slot <
                    (null !== (g = e.slotInWhichNonceDidAdvance) && void 0 !== g
                      ? g
                      : i)
                  )
                ) {
                  n = t;
                  break;
                }
                await Ce(400);
              }
              if (null === (p = n) || void 0 === p || !p.value) throw new oe(o);
              {
                const e = t || "finalized",
                  { confirmationStatus: i } = n.value;
                switch (e) {
                  case "processed":
                  case "recent":
                    if (
                      "processed" !== i &&
                      "confirmed" !== i &&
                      "finalized" !== i
                    )
                      throw new oe(o);
                    break;
                  case "confirmed":
                  case "single":
                  case "singleGossip":
                    if ("confirmed" !== i && "finalized" !== i) throw new oe(o);
                    break;
                  case "finalized":
                  case "max":
                  case "root":
                    if ("finalized" !== i) throw new oe(o);
                }
                h = { context: n.context, value: { err: n.value.err } };
              }
            }
          } finally {
            (a = !0), c();
          }
          return h;
        }
        async confirmTransactionUsingLegacyTimeoutStrategy(e) {
          let t,
            { commitment: n, signature: i } = e;
          const s = new Promise((e) => {
              let i = this._confirmTransactionInitialTimeout || 6e4;
              switch (n) {
                case "processed":
                case "recent":
                case "single":
                case "confirmed":
                case "singleGossip":
                  i = this._confirmTransactionInitialTimeout || 3e4;
              }
              t = setTimeout(
                () => e({ __type: ke.TIMED_OUT, timeoutMs: i }),
                i
              );
            }),
            { abortConfirmation: r, confirmationPromise: o } =
              this.getTransactionConfirmationPromise({
                commitment: n,
                signature: i,
              });
          let a;
          try {
            const e = await Promise.race([o, s]);
            if (e.__type !== ke.PROCESSED) throw new re(i, e.timeoutMs / 1e3);
            a = e.response;
          } finally {
            clearTimeout(t), r();
          }
          return a;
        }
        async getClusterNodes() {
          const e = S(await this._rpcRequest("getClusterNodes", []), ut(T(an)));
          if ("error" in e)
            throw new je(e.error, "failed to get cluster nodes");
          return e.result;
        }
        async getVoteAccounts(e) {
          const t = this._buildArgs([], e),
            n = S(await this._rpcRequest("getVoteAccounts", t), cn);
          if ("error" in n)
            throw new je(n.error, "failed to get vote accounts");
          return n.result;
        }
        async getSlot(e) {
          const { commitment: t, config: n } = ot(e),
            i = this._buildArgs([], t, void 0, n),
            s = S(await this._rpcRequest("getSlot", i), ut(z()));
          if ("error" in s) throw new je(s.error, "failed to get slot");
          return s.result;
        }
        async getSlotLeader(e) {
          const { commitment: t, config: n } = ot(e),
            i = this._buildArgs([], t, void 0, n),
            s = S(await this._rpcRequest("getSlotLeader", i), ut(C()));
          if ("error" in s) throw new je(s.error, "failed to get slot leader");
          return s.result;
        }
        async getSlotLeaders(e, t) {
          const n = [e, t],
            i = S(await this._rpcRequest("getSlotLeaders", n), ut(T(it)));
          if ("error" in i) throw new je(i.error, "failed to get slot leaders");
          return i.result;
        }
        async getSignatureStatus(e, t) {
          const { context: n, value: i } = await this.getSignatureStatuses(
            [e],
            t
          );
          ge(1 === i.length);
          return { context: n, value: i[0] };
        }
        async getSignatureStatuses(e, t) {
          const n = [e];
          t && n.push(t);
          const i = S(await this._rpcRequest("getSignatureStatuses", n), hn);
          if ("error" in i)
            throw new je(i.error, "failed to get signature status");
          return i.result;
        }
        async getTransactionCount(e) {
          const { commitment: t, config: n } = ot(e),
            i = this._buildArgs([], t, void 0, n),
            s = S(await this._rpcRequest("getTransactionCount", i), ut(z()));
          if ("error" in s)
            throw new je(s.error, "failed to get transaction count");
          return s.result;
        }
        async getTotalSupply(e) {
          return (
            await this.getSupply({
              commitment: e,
              excludeNonCirculatingAccountsList: !0,
            })
          ).value.total;
        }
        async getInflationGovernor(e) {
          const t = this._buildArgs([], e),
            n = S(await this._rpcRequest("getInflationGovernor", t), Lt);
          if ("error" in n) throw new je(n.error, "failed to get inflation");
          return n.result;
        }
        async getInflationReward(e, t, n) {
          const { commitment: i, config: s } = ot(n),
            r = this._buildArgs([e.map((e) => e.toBase58())], i, void 0, {
              ...s,
              epoch:
                null != t ? t : null === s || void 0 === s ? void 0 : s.epoch,
            }),
            o = S(await this._rpcRequest("getInflationReward", r), ft);
          if ("error" in o)
            throw new je(o.error, "failed to get inflation reward");
          return o.result;
        }
        async getInflationRate() {
          const e = S(await this._rpcRequest("getInflationRate", []), Nt);
          if ("error" in e)
            throw new je(e.error, "failed to get inflation rate");
          return e.result;
        }
        async getEpochInfo(e) {
          const { commitment: t, config: n } = ot(e),
            i = this._buildArgs([], t, void 0, n),
            s = S(await this._rpcRequest("getEpochInfo", i), jt);
          if ("error" in s) throw new je(s.error, "failed to get epoch info");
          return s.result;
        }
        async getEpochSchedule() {
          const e = S(await this._rpcRequest("getEpochSchedule", []), Dt);
          if ("error" in e)
            throw new je(e.error, "failed to get epoch schedule");
          const t = e.result;
          return new Ze(
            t.slotsPerEpoch,
            t.leaderScheduleSlotOffset,
            t.warmup,
            t.firstNormalEpoch,
            t.firstNormalSlot
          );
        }
        async getLeaderSchedule() {
          const e = S(await this._rpcRequest("getLeaderSchedule", []), Ct);
          if ("error" in e)
            throw new je(e.error, "failed to get leader schedule");
          return e.result;
        }
        async getMinimumBalanceForRentExemption(e, t) {
          const n = this._buildArgs([e], t),
            i = S(
              await this._rpcRequest("getMinimumBalanceForRentExemption", n),
              pn
            );
          return "error" in i
            ? (console.warn(
                "Unable to fetch minimum balance for rent exemption"
              ),
              0)
            : i.result;
        }
        async getRecentBlockhashAndContext(e) {
          const {
            context: t,
            value: { blockhash: n },
          } = await this.getLatestBlockhashAndContext(e);
          return {
            context: t,
            value: {
              blockhash: n,
              feeCalculator: {
                get lamportsPerSignature() {
                  throw new Error(
                    "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                  );
                },
                toJSON: () => ({}),
              },
            },
          };
        }
        async getRecentPerformanceSamples(e) {
          const t = S(
            await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
            Rn
          );
          if ("error" in t)
            throw new je(t.error, "failed to get recent performance samples");
          return t.result;
        }
        async getFeeCalculatorForBlockhash(e, t) {
          const n = this._buildArgs([e], t),
            i = S(
              await this._rpcRequest("getFeeCalculatorForBlockhash", n),
              Un
            );
          if ("error" in i)
            throw new je(i.error, "failed to get fee calculator");
          const { context: s, value: r } = i.result;
          return { context: s, value: null !== r ? r.feeCalculator : null };
        }
        async getFeeForMessage(e, t) {
          const n = Q(e.serialize()).toString("base64"),
            i = this._buildArgs([n], t),
            s = S(await this._rpcRequest("getFeeForMessage", i), dt(N(z())));
          if ("error" in s)
            throw new je(s.error, "failed to get fee for message");
          if (null === s.result) throw new Error("invalid blockhash");
          return s.result;
        }
        async getRecentPrioritizationFees(e) {
          var t;
          const n =
              null === e ||
              void 0 === e ||
              null === (t = e.lockedWritableAccounts) ||
              void 0 === t
                ? void 0
                : t.map((e) => e.toBase58()),
            i = null !== n && void 0 !== n && n.length ? [n] : [],
            s = S(await this._rpcRequest("getRecentPrioritizationFees", i), zt);
          if ("error" in s)
            throw new je(s.error, "failed to get recent prioritization fees");
          return s.result;
        }
        async getRecentBlockhash(e) {
          try {
            return (await this.getRecentBlockhashAndContext(e)).value;
          } catch (t) {
            throw new Error("failed to get recent blockhash: " + t);
          }
        }
        async getLatestBlockhash(e) {
          try {
            return (await this.getLatestBlockhashAndContext(e)).value;
          } catch (t) {
            throw new Error("failed to get recent blockhash: " + t);
          }
        }
        async getLatestBlockhashAndContext(e) {
          const { commitment: t, config: n } = ot(e),
            i = this._buildArgs([], t, void 0, n),
            s = S(await this._rpcRequest("getLatestBlockhash", i), Bn);
          if ("error" in s)
            throw new je(s.error, "failed to get latest blockhash");
          return s.result;
        }
        async isBlockhashValid(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgs([e], n, void 0, i),
            r = S(await this._rpcRequest("isBlockhashValid", s), Wn);
          if ("error" in r)
            throw new je(
              r.error,
              "failed to determine if the blockhash `" + e + "`is valid"
            );
          return r.result;
        }
        async getVersion() {
          const e = S(await this._rpcRequest("getVersion", []), ut(It));
          if ("error" in e) throw new je(e.error, "failed to get version");
          return e.result;
        }
        async getGenesisHash() {
          const e = S(await this._rpcRequest("getGenesisHash", []), ut(C()));
          if ("error" in e) throw new je(e.error, "failed to get genesis hash");
          return e.result;
        }
        async getBlock(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgsAtLeastConfirmed([e], n, void 0, i),
            r = await this._rpcRequest("getBlock", s);
          try {
            switch (
              null === i || void 0 === i ? void 0 : i.transactionDetails
            ) {
              case "accounts": {
                const e = S(r, Nn);
                if ("error" in e) throw e.error;
                return e.result;
              }
              case "none": {
                const e = S(r, Ln);
                if ("error" in e) throw e.error;
                return e.result;
              }
              default: {
                const e = S(r, En);
                if ("error" in e) throw e.error;
                const { result: t } = e;
                return t
                  ? {
                      ...t,
                      transactions: t.transactions.map((e) => {
                        let { transaction: t, meta: n, version: i } = e;
                        return {
                          meta: n,
                          transaction: { ...t, message: pt(i, t.message) },
                          version: i,
                        };
                      }),
                    }
                  : null;
              }
            }
          } catch (o) {
            throw new je(o, "failed to get confirmed block");
          }
        }
        async getParsedBlock(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", i),
            r = await this._rpcRequest("getBlock", s);
          try {
            switch (
              null === i || void 0 === i ? void 0 : i.transactionDetails
            ) {
              case "accounts": {
                const e = S(r, jn);
                if ("error" in e) throw e.error;
                return e.result;
              }
              case "none": {
                const e = S(r, Dn);
                if ("error" in e) throw e.error;
                return e.result;
              }
              default: {
                const e = S(r, zn);
                if ("error" in e) throw e.error;
                return e.result;
              }
            }
          } catch (o) {
            throw new je(o, "failed to get block");
          }
        }
        async getBlockProduction(e) {
          let t, n;
          if ("string" === typeof e) n = e;
          else if (e) {
            const { commitment: i, ...s } = e;
            (n = i), (t = s);
          }
          const i = this._buildArgs([], n, "base64", t),
            s = S(await this._rpcRequest("getBlockProduction", i), Et);
          if ("error" in s)
            throw new je(s.error, "failed to get block production information");
          return s.result;
        }
        async getTransaction(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgsAtLeastConfirmed([e], n, void 0, i),
            r = S(await this._rpcRequest("getTransaction", s), _n);
          if ("error" in r) throw new je(r.error, "failed to get transaction");
          const o = r.result;
          return o
            ? {
                ...o,
                transaction: {
                  ...o.transaction,
                  message: pt(o.version, o.transaction.message),
                },
              }
            : o;
        }
        async getParsedTransaction(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", i),
            r = S(await this._rpcRequest("getTransaction", s), On);
          if ("error" in r) throw new je(r.error, "failed to get transaction");
          return r.result;
        }
        async getParsedTransactions(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = e.map((e) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", i),
            }));
          return (await this._rpcBatchRequest(s)).map((e) => {
            const t = S(e, On);
            if ("error" in t)
              throw new je(t.error, "failed to get transactions");
            return t.result;
          });
        }
        async getTransactions(e, t) {
          const { commitment: n, config: i } = ot(t),
            s = e.map((e) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([e], n, void 0, i),
            }));
          return (await this._rpcBatchRequest(s)).map((e) => {
            const t = S(e, _n);
            if ("error" in t)
              throw new je(t.error, "failed to get transactions");
            const n = t.result;
            return n
              ? {
                  ...n,
                  transaction: {
                    ...n.transaction,
                    message: pt(n.version, n.transaction.message),
                  },
                }
              : n;
          });
        }
        async getConfirmedBlock(e, t) {
          const n = this._buildArgsAtLeastConfirmed([e], t),
            i = S(await this._rpcRequest("getBlock", n), Cn);
          if ("error" in i)
            throw new je(i.error, "failed to get confirmed block");
          const s = i.result;
          if (!s) throw new Error("Confirmed block " + e + " not found");
          const r = {
            ...s,
            transactions: s.transactions.map((e) => {
              let { transaction: t, meta: n } = e;
              const i = new be(t.message);
              return { meta: n, transaction: { ...t, message: i } };
            }),
          };
          return {
            ...r,
            transactions: r.transactions.map((e) => {
              let { transaction: t, meta: n } = e;
              return {
                meta: n,
                transaction: Te.populate(t.message, t.signatures),
              };
            }),
          };
        }
        async getBlocks(e, t, n) {
          const i = this._buildArgsAtLeastConfirmed(
              void 0 !== t ? [e, t] : [e],
              n
            ),
            s = S(await this._rpcRequest("getBlocks", i), ut(T(z())));
          if ("error" in s) throw new je(s.error, "failed to get blocks");
          return s.result;
        }
        async getBlockSignatures(e, t) {
          const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            i = S(await this._rpcRequest("getBlock", n), Pn);
          if ("error" in i) throw new je(i.error, "failed to get block");
          const s = i.result;
          if (!s) throw new Error("Block " + e + " not found");
          return s;
        }
        async getConfirmedBlockSignatures(e, t) {
          const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            i = S(await this._rpcRequest("getBlock", n), Pn);
          if ("error" in i)
            throw new je(i.error, "failed to get confirmed block");
          const s = i.result;
          if (!s) throw new Error("Confirmed block " + e + " not found");
          return s;
        }
        async getConfirmedTransaction(e, t) {
          const n = this._buildArgsAtLeastConfirmed([e], t),
            i = S(await this._rpcRequest("getTransaction", n), _n);
          if ("error" in i) throw new je(i.error, "failed to get transaction");
          const s = i.result;
          if (!s) return s;
          const r = new be(s.transaction.message),
            o = s.transaction.signatures;
          return { ...s, transaction: Te.populate(r, o) };
        }
        async getParsedConfirmedTransaction(e, t) {
          const n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
            i = S(await this._rpcRequest("getTransaction", n), On);
          if ("error" in i)
            throw new je(i.error, "failed to get confirmed transaction");
          return i.result;
        }
        async getParsedConfirmedTransactions(e, t) {
          const n = e.map((e) => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
          }));
          return (await this._rpcBatchRequest(n)).map((e) => {
            const t = S(e, On);
            if ("error" in t)
              throw new je(t.error, "failed to get confirmed transactions");
            return t.result;
          });
        }
        async getConfirmedSignaturesForAddress(e, t, n) {
          let i = {},
            s = await this.getFirstAvailableBlock();
          for (; !("until" in i) && !(--t <= 0 || t < s); )
            try {
              const e = await this.getConfirmedBlockSignatures(t, "finalized");
              e.signatures.length > 0 &&
                (i.until = e.signatures[e.signatures.length - 1].toString());
            } catch (o) {
              if (o instanceof Error && o.message.includes("skipped")) continue;
              throw o;
            }
          let r = await this.getSlot("finalized");
          for (; !("before" in i) && !(++n > r); )
            try {
              const e = await this.getConfirmedBlockSignatures(n);
              e.signatures.length > 0 &&
                (i.before = e.signatures[e.signatures.length - 1].toString());
            } catch (o) {
              if (o instanceof Error && o.message.includes("skipped")) continue;
              throw o;
            }
          return (await this.getConfirmedSignaturesForAddress2(e, i)).map(
            (e) => e.signature
          );
        }
        async getConfirmedSignaturesForAddress2(e, t, n) {
          const i = this._buildArgsAtLeastConfirmed(
              [e.toBase58()],
              n,
              void 0,
              t
            ),
            s = S(
              await this._rpcRequest("getConfirmedSignaturesForAddress2", i),
              qt
            );
          if ("error" in s)
            throw new je(
              s.error,
              "failed to get confirmed signatures for address"
            );
          return s.result;
        }
        async getSignaturesForAddress(e, t, n) {
          const i = this._buildArgsAtLeastConfirmed(
              [e.toBase58()],
              n,
              void 0,
              t
            ),
            s = S(await this._rpcRequest("getSignaturesForAddress", i), Qt);
          if ("error" in s)
            throw new je(s.error, "failed to get signatures for address");
          return s.result;
        }
        async getAddressLookupTable(e, t) {
          const { context: n, value: i } = await this.getAccountInfoAndContext(
            e,
            t
          );
          let s = null;
          return (
            null !== i &&
              (s = new et({ key: e, state: et.deserialize(i.data) })),
            { context: n, value: s }
          );
        }
        async getNonceAndContext(e, t) {
          const { context: n, value: i } = await this.getAccountInfoAndContext(
            e,
            t
          );
          let s = null;
          return (
            null !== i && (s = We.fromAccountData(i.data)),
            { context: n, value: s }
          );
        }
        async getNonce(e, t) {
          return await this.getNonceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw new Error(
                "failed to get nonce for account " + e.toBase58() + ": " + t
              );
            });
        }
        async requestAirdrop(e, t) {
          const n = S(
            await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
            Hn
          );
          if ("error" in n)
            throw new je(n.error, `airdrop to ${e.toBase58()} failed`);
          return n.result;
        }
        async _blockhashWithExpiryBlockHeight(e) {
          if (!e) {
            for (; this._pollingBlockhash; ) await Ce(100);
            const e = Date.now() - this._blockhashInfo.lastFetch >= 3e4;
            if (null !== this._blockhashInfo.latestBlockhash && !e)
              return this._blockhashInfo.latestBlockhash;
          }
          return await this._pollNewBlockhash();
        }
        async _pollNewBlockhash() {
          this._pollingBlockhash = !0;
          try {
            const e = Date.now(),
              t = this._blockhashInfo.latestBlockhash,
              n = t ? t.blockhash : null;
            for (let i = 0; i < 50; i++) {
              const e = await this.getLatestBlockhash("finalized");
              if (n !== e.blockhash)
                return (
                  (this._blockhashInfo = {
                    latestBlockhash: e,
                    lastFetch: Date.now(),
                    transactionSignatures: [],
                    simulatedSignatures: [],
                  }),
                  e
                );
              await Ce(200);
            }
            throw new Error(
              `Unable to obtain a new blockhash after ${Date.now() - e}ms`
            );
          } finally {
            this._pollingBlockhash = !1;
          }
        }
        async getStakeMinimumDelegation(e) {
          const { commitment: t, config: n } = ot(e),
            i = this._buildArgs([], t, "base64", n),
            s = S(
              await this._rpcRequest("getStakeMinimumDelegation", i),
              dt(z())
            );
          if ("error" in s)
            throw new je(s.error, "failed to get stake minimum delegation");
          return s.result;
        }
        async simulateTransaction(e, t, n) {
          if ("message" in e) {
            const s = e.serialize(),
              r = i.Buffer.from(s).toString("base64");
            if (Array.isArray(t) || void 0 !== n)
              throw new Error("Invalid arguments");
            const o = t || {};
            (o.encoding = "base64"),
              "commitment" in o || (o.commitment = this.commitment),
              t &&
                "object" === typeof t &&
                "innerInstructions" in t &&
                (o.innerInstructions = t.innerInstructions);
            const a = [r, o],
              l = S(await this._rpcRequest("simulateTransaction", a), At);
            if ("error" in l)
              throw new Error(
                "failed to simulate transaction: " + l.error.message
              );
            return l.result;
          }
          let s;
          if (e instanceof Te) {
            let t = e;
            (s = new Te()),
              (s.feePayer = t.feePayer),
              (s.instructions = e.instructions),
              (s.nonceInfo = t.nonceInfo),
              (s.signatures = t.signatures);
          } else (s = Te.populate(e)), (s._message = s._json = void 0);
          if (void 0 !== t && !Array.isArray(t))
            throw new Error("Invalid arguments");
          const r = t;
          if (s.nonceInfo && r) s.sign(...r);
          else {
            let e = this._disableBlockhashCaching;
            for (;;) {
              const t = await this._blockhashWithExpiryBlockHeight(e);
              if (
                ((s.lastValidBlockHeight = t.lastValidBlockHeight),
                (s.recentBlockhash = t.blockhash),
                !r)
              )
                break;
              if ((s.sign(...r), !s.signature)) throw new Error("!signature");
              const n = s.signature.toString("base64");
              if (
                !this._blockhashInfo.simulatedSignatures.includes(n) &&
                !this._blockhashInfo.transactionSignatures.includes(n)
              ) {
                this._blockhashInfo.simulatedSignatures.push(n);
                break;
              }
              e = !0;
            }
          }
          const o = s._compile(),
            a = o.serialize(),
            l = s._serialize(a).toString("base64"),
            c = { encoding: "base64", commitment: this.commitment };
          if (n) {
            const e = (Array.isArray(n) ? n : o.nonProgramIds()).map((e) =>
              e.toBase58()
            );
            c.accounts = { encoding: "base64", addresses: e };
          }
          r && (c.sigVerify = !0),
            t &&
              "object" === typeof t &&
              "innerInstructions" in t &&
              (c.innerInstructions = t.innerInstructions);
          const u = [l, c],
            d = S(await this._rpcRequest("simulateTransaction", u), At);
          if ("error" in d) {
            let e;
            if (
              "data" in d.error &&
              ((e = d.error.data.logs), e && Array.isArray(e))
            ) {
              const t = "\n    ",
                n = t + e.join(t);
              console.error(d.error.message, n);
            }
            throw new ze({
              action: "simulate",
              signature: "",
              transactionMessage: d.error.message,
              logs: e,
            });
          }
          return d.result;
        }
        async sendTransaction(e, t, n) {
          if ("version" in e) {
            if (t && Array.isArray(t)) throw new Error("Invalid arguments");
            const n = e.serialize();
            return await this.sendRawTransaction(n, t);
          }
          if (void 0 === t || !Array.isArray(t))
            throw new Error("Invalid arguments");
          const i = t;
          if (e.nonceInfo) e.sign(...i);
          else {
            let t = this._disableBlockhashCaching;
            for (;;) {
              const n = await this._blockhashWithExpiryBlockHeight(t);
              if (
                ((e.lastValidBlockHeight = n.lastValidBlockHeight),
                (e.recentBlockhash = n.blockhash),
                e.sign(...i),
                !e.signature)
              )
                throw new Error("!signature");
              const s = e.signature.toString("base64");
              if (!this._blockhashInfo.transactionSignatures.includes(s)) {
                this._blockhashInfo.transactionSignatures.push(s);
                break;
              }
              t = !0;
            }
          }
          const s = e.serialize();
          return await this.sendRawTransaction(s, n);
        }
        async sendRawTransaction(e, t) {
          const n = Q(e).toString("base64");
          return await this.sendEncodedTransaction(n, t);
        }
        async sendEncodedTransaction(e, t) {
          const n = { encoding: "base64" },
            i = t && t.skipPreflight,
            s =
              !0 === i
                ? "processed"
                : (t && t.preflightCommitment) || this.commitment;
          t && null != t.maxRetries && (n.maxRetries = t.maxRetries),
            t &&
              null != t.minContextSlot &&
              (n.minContextSlot = t.minContextSlot),
            i && (n.skipPreflight = i),
            s && (n.preflightCommitment = s);
          const r = [e, n],
            o = S(await this._rpcRequest("sendTransaction", r), Yn);
          if ("error" in o) {
            let e;
            throw (
              ("data" in o.error && (e = o.error.data.logs),
              new ze({
                action: i ? "send" : "simulate",
                signature: "",
                transactionMessage: o.error.message,
                logs: e,
              }))
            );
          }
          return o.result;
        }
        _wsOnOpen() {
          (this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              (async () => {
                try {
                  await this._rpcWebSocket.notify("ping");
                } catch {}
              })();
            }, 5e3)),
            this._updateSubscriptions();
        }
        _wsOnError(e) {
          (this._rpcWebSocketConnected = !1),
            console.error("ws error:", e.message);
        }
        _wsOnClose(e) {
          (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            1e3 !== e
              ? ((this._subscriptionCallbacksByServerSubscriptionId = {}),
                Object.entries(this._subscriptionsByHash).forEach((e) => {
                  let [t, n] = e;
                  this._setSubscription(t, { ...n, state: "pending" });
                }))
              : this._updateSubscriptions();
        }
        _setSubscription(e, t) {
          var n;
          const i =
            null === (n = this._subscriptionsByHash[e]) || void 0 === n
              ? void 0
              : n.state;
          if (((this._subscriptionsByHash[e] = t), i !== t.state)) {
            const n = this._subscriptionStateChangeCallbacksByHash[e];
            n &&
              n.forEach((e) => {
                try {
                  e(t.state);
                } catch {}
              });
          }
        }
        _onSubscriptionStateChange(e, t) {
          var n;
          const i = this._subscriptionHashByClientSubscriptionId[e];
          if (null == i) return () => {};
          const s =
            (n = this._subscriptionStateChangeCallbacksByHash)[i] ||
            (n[i] = new Set());
          return (
            s.add(t),
            () => {
              s.delete(t),
                0 === s.size &&
                  delete this._subscriptionStateChangeCallbacksByHash[i];
            }
          );
        }
        async _updateSubscriptions() {
          if (0 === Object.keys(this._subscriptionsByHash).length)
            return void (
              this._rpcWebSocketConnected &&
              ((this._rpcWebSocketConnected = !1),
              (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                  this._rpcWebSocket.close();
                } catch (e) {
                  e instanceof Error &&
                    console.log(
                      `Error when closing socket connection: ${e.message}`
                    );
                }
              }, 500)))
            );
          if (
            (null !== this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null),
              (this._rpcWebSocketConnected = !0)),
            !this._rpcWebSocketConnected)
          )
            return void this._rpcWebSocket.connect();
          const e = this._rpcWebSocketGeneration,
            t = () => e === this._rpcWebSocketGeneration;
          await Promise.all(
            Object.keys(this._subscriptionsByHash).map(async (e) => {
              const n = this._subscriptionsByHash[e];
              if (void 0 !== n)
                switch (n.state) {
                  case "pending":
                  case "unsubscribed":
                    if (0 === n.callbacks.size)
                      return (
                        delete this._subscriptionsByHash[e],
                        "unsubscribed" === n.state &&
                          delete this
                            ._subscriptionCallbacksByServerSubscriptionId[
                            n.serverSubscriptionId
                          ],
                        void (await this._updateSubscriptions())
                      );
                    await (async () => {
                      const { args: i, method: s } = n;
                      try {
                        this._setSubscription(e, {
                          ...n,
                          state: "subscribing",
                        });
                        const t = await this._rpcWebSocket.call(s, i);
                        this._setSubscription(e, {
                          ...n,
                          serverSubscriptionId: t,
                          state: "subscribed",
                        }),
                          (this._subscriptionCallbacksByServerSubscriptionId[
                            t
                          ] = n.callbacks),
                          await this._updateSubscriptions();
                      } catch (r) {
                        if (
                          (console.error(
                            `Received ${
                              r instanceof Error ? "" : "JSON-RPC "
                            }error calling \`${s}\``,
                            { args: i, error: r }
                          ),
                          !t())
                        )
                          return;
                        this._setSubscription(e, { ...n, state: "pending" }),
                          await this._updateSubscriptions();
                      }
                    })();
                    break;
                  case "subscribed":
                    0 === n.callbacks.size &&
                      (await (async () => {
                        const {
                          serverSubscriptionId: i,
                          unsubscribeMethod: s,
                        } = n;
                        if (this._subscriptionsAutoDisposedByRpc.has(i))
                          this._subscriptionsAutoDisposedByRpc.delete(i);
                        else {
                          this._setSubscription(e, {
                            ...n,
                            state: "unsubscribing",
                          }),
                            this._setSubscription(e, {
                              ...n,
                              state: "unsubscribing",
                            });
                          try {
                            await this._rpcWebSocket.call(s, [i]);
                          } catch (r) {
                            if (
                              (r instanceof Error &&
                                console.error(`${s} error:`, r.message),
                              !t())
                            )
                              return;
                            return (
                              this._setSubscription(e, {
                                ...n,
                                state: "subscribed",
                              }),
                              void (await this._updateSubscriptions())
                            );
                          }
                        }
                        this._setSubscription(e, {
                          ...n,
                          state: "unsubscribed",
                        }),
                          await this._updateSubscriptions();
                      })());
                }
            })
          );
        }
        _handleServerNotification(e, t) {
          const n = this._subscriptionCallbacksByServerSubscriptionId[e];
          void 0 !== n &&
            n.forEach((e) => {
              try {
                e(...t);
              } catch (n) {
                console.error(n);
              }
            });
        }
        _wsOnAccountNotification(e) {
          const { result: t, subscription: n } = S(e, Zt);
          this._handleServerNotification(n, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          const n = this._nextClientSubscriptionId++,
            i = qe([e.method, t]),
            s = this._subscriptionsByHash[i];
          return (
            void 0 === s
              ? (this._subscriptionsByHash[i] = {
                  ...e,
                  args: t,
                  callbacks: new Set([e.callback]),
                  state: "pending",
                })
              : s.callbacks.add(e.callback),
            (this._subscriptionHashByClientSubscriptionId[n] = i),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[n] =
              async () => {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                  n
                ],
                  delete this._subscriptionHashByClientSubscriptionId[n];
                const t = this._subscriptionsByHash[i];
                ge(
                  void 0 !== t,
                  `Could not find a \`Subscription\` when tearing down client subscription #${n}`
                ),
                  t.callbacks.delete(e.callback),
                  await this._updateSubscriptions();
              }),
            this._updateSubscriptions(),
            n
          );
        }
        onAccountChange(e, t, n) {
          const { commitment: i, config: s } = ot(n),
            r = this._buildArgs(
              [e.toBase58()],
              i || this._commitment || "finalized",
              "base64",
              s
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            r
          );
        }
        async removeAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "account change");
        }
        _wsOnProgramAccountNotification(e) {
          const { result: t, subscription: n } = S(e, Jt);
          this._handleServerNotification(n, [
            { accountId: t.value.pubkey, accountInfo: t.value.account },
            t.context,
          ]);
        }
        onProgramAccountChange(e, t, n, i) {
          const { commitment: s, config: r } = ot(n),
            o = this._buildArgs(
              [e.toBase58()],
              s || this._commitment || "finalized",
              "base64",
              r || (i ? { filters: at(i) } : void 0)
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            o
          );
        }
        async removeProgramAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(
            e,
            "program account change"
          );
        }
        onLogs(e, t, n) {
          const i = this._buildArgs(
            ["object" === typeof e ? { mentions: [e.toString()] } : e],
            n || this._commitment || "finalized"
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            i
          );
        }
        async removeOnLogsListener(e) {
          await this._unsubscribeClientSubscription(e, "logs");
        }
        _wsOnLogsNotification(e) {
          const { result: t, subscription: n } = S(e, Gn);
          this._handleServerNotification(n, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          const { result: t, subscription: n } = S(e, tn);
          this._handleServerNotification(n, [t]);
        }
        onSlotChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            []
          );
        }
        async removeSlotChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "slot change");
        }
        _wsOnSlotUpdatesNotification(e) {
          const { result: t, subscription: n } = S(e, sn);
          this._handleServerNotification(n, [t]);
        }
        onSlotUpdate(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            []
          );
        }
        async removeSlotUpdateListener(e) {
          await this._unsubscribeClientSubscription(e, "slot update");
        }
        async _unsubscribeClientSubscription(e, t) {
          const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
          n
            ? await n()
            : console.warn(
                `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
              );
        }
        _buildArgs(e, t, n, i) {
          const s = t || this._commitment;
          if (s || n || i) {
            let t = {};
            n && (t.encoding = n),
              s && (t.commitment = s),
              i && (t = Object.assign(t, i)),
              e.push(t);
          }
          return e;
        }
        _buildArgsAtLeastConfirmed(e, t, n, i) {
          const s = t || this._commitment;
          if (s && !["confirmed", "finalized"].includes(s))
            throw new Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`"
            );
          return this._buildArgs(e, t, n, i);
        }
        _wsOnSignatureNotification(e) {
          const { result: t, subscription: n } = S(e, rn);
          "receivedSignature" !== t.value &&
            this._subscriptionsAutoDisposedByRpc.add(n),
            this._handleServerNotification(
              n,
              "receivedSignature" === t.value
                ? [{ type: "received" }, t.context]
                : [{ type: "status", result: t.value }, t.context]
            );
        }
        onSignature(e, t, n) {
          const i = this._buildArgs([e], n || this._commitment || "finalized"),
            s = this._makeSubscription(
              {
                callback: (e, n) => {
                  if ("status" === e.type) {
                    t(e.result, n);
                    try {
                      this.removeSignatureListener(s);
                    } catch (i) {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              i
            );
          return s;
        }
        onSignatureWithOptions(e, t, n) {
          const { commitment: i, ...s } = {
              ...n,
              commitment:
                (n && n.commitment) || this._commitment || "finalized",
            },
            r = this._buildArgs([e], i, void 0, s),
            o = this._makeSubscription(
              {
                callback: (e, n) => {
                  t(e, n);
                  try {
                    this.removeSignatureListener(o);
                  } catch (i) {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              r
            );
          return o;
        }
        async removeSignatureListener(e) {
          await this._unsubscribeClientSubscription(e, "signature result");
        }
        _wsOnRootNotification(e) {
          const { result: t, subscription: n } = S(e, on);
          this._handleServerNotification(n, [t]);
        }
        onRootChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            []
          );
        }
        async removeRootChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "root change");
        }
      }
      class Fn {
        constructor(e) {
          (this._keypair = void 0),
            (this._keypair = null !== e && void 0 !== e ? e : G());
        }
        static generate() {
          return new Fn(G());
        }
        static fromSecretKey(e, t) {
          if (64 !== e.byteLength) throw new Error("bad secret key size");
          const n = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            const t = e.slice(0, 32),
              i = V(t);
            for (let e = 0; e < 32; e++)
              if (n[e] !== i[e])
                throw new Error("provided secretKey is invalid");
          }
          return new Fn({ publicKey: n, secretKey: e });
        }
        static fromSeed(e) {
          const t = V(e),
            n = new Uint8Array(64);
          return n.set(e), n.set(t, 32), new Fn({ publicKey: t, secretKey: n });
        }
        get publicKey() {
          return new ne(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
      }
      const qn = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: d.w3([
            d.DH("instruction"),
            Re("recentSlot"),
            d.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: { index: 1, layout: d.w3([d.DH("instruction")]) },
        ExtendLookupTable: {
          index: 2,
          layout: d.w3([
            d.DH("instruction"),
            Re(),
            d.O6(le(), d.cY(d.DH(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: d.w3([d.DH("instruction")]),
        },
        CloseLookupTable: { index: 4, layout: d.w3([d.DH("instruction")]) },
      });
      class Qn {
        constructor() {}
        static createLookupTable(e) {
          const [t, n] = ne.findProgramAddressSync(
              [e.authority.toBuffer(), (0, h.Bq)(BigInt(e.recentSlot), 8)],
              this.programId
            ),
            i = Pe(qn.CreateLookupTable, {
              recentSlot: BigInt(e.recentSlot),
              bumpSeed: n,
            }),
            s = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: Ye.programId, isSigner: !1, isWritable: !1 },
            ];
          return [new Ie({ programId: this.programId, keys: s, data: i }), t];
        }
        static freezeLookupTable(e) {
          const t = Pe(qn.FreezeLookupTable),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new Ie({ programId: this.programId, keys: n, data: t });
        }
        static extendLookupTable(e) {
          const t = Pe(qn.ExtendLookupTable, {
              addresses: e.addresses.map((e) => e.toBytes()),
            }),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            e.payer &&
              n.push(
                { pubkey: e.payer, isSigner: !0, isWritable: !0 },
                { pubkey: Ye.programId, isSigner: !1, isWritable: !1 }
              ),
            new Ie({ programId: this.programId, keys: n, data: t })
          );
        }
        static deactivateLookupTable(e) {
          const t = Pe(qn.DeactivateLookupTable),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new Ie({ programId: this.programId, keys: n, data: t });
        }
        static closeLookupTable(e) {
          const t = Pe(qn.CloseLookupTable),
            n = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new Ie({ programId: this.programId, keys: n, data: t });
        }
      }
      Qn.programId = new ne("AddressLookupTab1e1111111111111111111111111");
      const Zn = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: d.w3([
            d.u8("instruction"),
            d.DH("units"),
            d.DH("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: d.w3([d.u8("instruction"), d.DH("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: d.w3([d.u8("instruction"), d.DH("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: d.w3([d.u8("instruction"), Re("microLamports")]),
        },
      });
      class Xn {
        constructor() {}
        static requestUnits(e) {
          const t = Pe(Zn.RequestUnits, e);
          return new Ie({ keys: [], programId: this.programId, data: t });
        }
        static requestHeapFrame(e) {
          const t = Pe(Zn.RequestHeapFrame, e);
          return new Ie({ keys: [], programId: this.programId, data: t });
        }
        static setComputeUnitLimit(e) {
          const t = Pe(Zn.SetComputeUnitLimit, e);
          return new Ie({ keys: [], programId: this.programId, data: t });
        }
        static setComputeUnitPrice(e) {
          const t = Pe(Zn.SetComputeUnitPrice, {
            microLamports: BigInt(e.microLamports),
          });
          return new Ie({ keys: [], programId: this.programId, data: t });
        }
      }
      Xn.programId = new ne("ComputeBudget111111111111111111111111111111");
      const Jn = d.w3([
        d.u8("numSignatures"),
        d.u8("padding"),
        d.NX("signatureOffset"),
        d.NX("signatureInstructionIndex"),
        d.NX("publicKeyOffset"),
        d.NX("publicKeyInstructionIndex"),
        d.NX("messageDataOffset"),
        d.NX("messageDataSize"),
        d.NX("messageInstructionIndex"),
      ]);
      class ei {
        constructor() {}
        static createInstructionWithPublicKey(e) {
          const {
            publicKey: t,
            message: n,
            signature: s,
            instructionIndex: r,
          } = e;
          ge(
            32 === t.length,
            `Public Key must be 32 bytes but received ${t.length} bytes`
          ),
            ge(
              64 === s.length,
              `Signature must be 64 bytes but received ${s.length} bytes`
            );
          const o = Jn.span,
            a = o + t.length,
            l = a + s.length,
            c = i.Buffer.alloc(l + n.length),
            u = null == r ? 65535 : r;
          return (
            Jn.encode(
              {
                numSignatures: 1,
                padding: 0,
                signatureOffset: a,
                signatureInstructionIndex: u,
                publicKeyOffset: o,
                publicKeyInstructionIndex: u,
                messageDataOffset: l,
                messageDataSize: n.length,
                messageInstructionIndex: u,
              },
              c
            ),
            c.fill(t, o),
            c.fill(s, a),
            c.fill(n, l),
            new Ie({ keys: [], programId: ei.programId, data: c })
          );
        }
        static createInstructionWithPrivateKey(e) {
          const { privateKey: t, message: n, instructionIndex: i } = e;
          ge(
            64 === t.length,
            `Private key must be 64 bytes but received ${t.length} bytes`
          );
          try {
            const e = Fn.fromSecretKey(t),
              s = e.publicKey.toBytes(),
              r = F(n, e.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: s,
              message: n,
              signature: r,
              instructionIndex: i,
            });
          } catch (s) {
            throw new Error(`Error creating instruction; ${s}`);
          }
        }
      }
      ei.programId = new ne("Ed25519SigVerify111111111111111111111111111");
      K.secp256k1.utils.isValidPrivateKey;
      const ti = K.secp256k1.getPublicKey,
        ni = d.w3([
          d.u8("numSignatures"),
          d.NX("signatureOffset"),
          d.u8("signatureInstructionIndex"),
          d.NX("ethAddressOffset"),
          d.u8("ethAddressInstructionIndex"),
          d.NX("messageDataOffset"),
          d.NX("messageDataSize"),
          d.u8("messageInstructionIndex"),
          d.av(20, "ethAddress"),
          d.av(64, "signature"),
          d.u8("recoveryId"),
        ]);
      class ii {
        constructor() {}
        static publicKeyToEthAddress(e) {
          ge(
            64 === e.length,
            `Public key must be 64 bytes but received ${e.length} bytes`
          );
          try {
            return i.Buffer.from((0, Y.lY)(Q(e))).slice(-20);
          } catch (t) {
            throw new Error(`Error constructing Ethereum address: ${t}`);
          }
        }
        static createInstructionWithPublicKey(e) {
          const {
            publicKey: t,
            message: n,
            signature: i,
            recoveryId: s,
            instructionIndex: r,
          } = e;
          return ii.createInstructionWithEthAddress({
            ethAddress: ii.publicKeyToEthAddress(t),
            message: n,
            signature: i,
            recoveryId: s,
            instructionIndex: r,
          });
        }
        static createInstructionWithEthAddress(e) {
          const {
            ethAddress: t,
            message: n,
            signature: s,
            recoveryId: r,
            instructionIndex: o = 0,
          } = e;
          let a;
          (a =
            "string" === typeof t
              ? t.startsWith("0x")
                ? i.Buffer.from(t.substr(2), "hex")
                : i.Buffer.from(t, "hex")
              : t),
            ge(
              20 === a.length,
              `Address must be 20 bytes but received ${a.length} bytes`
            );
          const l = 12 + a.length,
            c = l + s.length + 1,
            u = i.Buffer.alloc(ni.span + n.length);
          return (
            ni.encode(
              {
                numSignatures: 1,
                signatureOffset: l,
                signatureInstructionIndex: o,
                ethAddressOffset: 12,
                ethAddressInstructionIndex: o,
                messageDataOffset: c,
                messageDataSize: n.length,
                messageInstructionIndex: o,
                signature: Q(s),
                ethAddress: Q(a),
                recoveryId: r,
              },
              u
            ),
            u.fill(Q(n), ni.span),
            new Ie({ keys: [], programId: ii.programId, data: u })
          );
        }
        static createInstructionWithPrivateKey(e) {
          const { privateKey: t, message: n, instructionIndex: s } = e;
          ge(
            32 === t.length,
            `Private key must be 32 bytes but received ${t.length} bytes`
          );
          try {
            const e = Q(t),
              r = ti(e, !1).slice(1),
              o = i.Buffer.from((0, Y.lY)(Q(n))),
              [a, l] = ((e, t) => {
                const n = K.secp256k1.sign(e, t);
                return [n.toCompactRawBytes(), n.recovery];
              })(o, e);
            return this.createInstructionWithPublicKey({
              publicKey: r,
              message: n,
              signature: a,
              recoveryId: l,
              instructionIndex: s,
            });
          } catch (r) {
            throw new Error(`Error creating instruction; ${r}`);
          }
        }
      }
      var si;
      ii.programId = new ne("KeccakSecp256k11111111111111111111111111111");
      const ri = new ne("StakeConfig11111111111111111111111111111111");
      class oi {
        constructor(e, t, n) {
          (this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = e),
            (this.epoch = t),
            (this.custodian = n);
        }
      }
      (si = oi), (oi.default = new si(0, 0, ne.default));
      const ai = Object.freeze({
        Initialize: {
          index: 0,
          layout: d.w3([
            d.DH("instruction"),
            (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "authorized";
              return d.w3([le("staker"), le("withdrawer")], e);
            })(),
            (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "lockup";
              return d.w3(
                [d.Wg("unixTimestamp"), d.Wg("epoch"), le("custodian")],
                e
              );
            })(),
          ]),
        },
        Authorize: {
          index: 1,
          layout: d.w3([
            d.DH("instruction"),
            le("newAuthorized"),
            d.DH("stakeAuthorizationType"),
          ]),
        },
        Delegate: { index: 2, layout: d.w3([d.DH("instruction")]) },
        Split: {
          index: 3,
          layout: d.w3([d.DH("instruction"), d.Wg("lamports")]),
        },
        Withdraw: {
          index: 4,
          layout: d.w3([d.DH("instruction"), d.Wg("lamports")]),
        },
        Deactivate: { index: 5, layout: d.w3([d.DH("instruction")]) },
        Merge: { index: 7, layout: d.w3([d.DH("instruction")]) },
        AuthorizeWithSeed: {
          index: 8,
          layout: d.w3([
            d.DH("instruction"),
            le("newAuthorized"),
            d.DH("stakeAuthorizationType"),
            ue("authoritySeed"),
            le("authorityOwner"),
          ]),
        },
      });
      Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
      class li {
        constructor() {}
        static initialize(e) {
          const { stakePubkey: t, authorized: n, lockup: i } = e,
            s = i || oi.default,
            r = Pe(ai.Initialize, {
              authorized: {
                staker: Q(n.staker.toBuffer()),
                withdrawer: Q(n.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: s.unixTimestamp,
                epoch: s.epoch,
                custodian: Q(s.custodian.toBuffer()),
              },
            }),
            o = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: Le, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: r,
            };
          return new Ie(o);
        }
        static createAccountWithSeed(e) {
          const t = new Te();
          t.add(
            Ye.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          const { stakePubkey: n, authorized: i, lockup: s } = e;
          return t.add(
            this.initialize({ stakePubkey: n, authorized: i, lockup: s })
          );
        }
        static createAccount(e) {
          const t = new Te();
          t.add(
            Ye.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          const { stakePubkey: n, authorized: i, lockup: s } = e;
          return t.add(
            this.initialize({ stakePubkey: n, authorized: i, lockup: s })
          );
        }
        static delegate(e) {
          const { stakePubkey: t, authorizedPubkey: n, votePubkey: i } = e,
            s = Pe(ai.Delegate);
          return new Te().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !1 },
              { pubkey: Ae, isSigner: !1, isWritable: !1 },
              { pubkey: Ne, isSigner: !1, isWritable: !1 },
              { pubkey: ri, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static authorize(e) {
          const {
              stakePubkey: t,
              authorizedPubkey: n,
              newAuthorizedPubkey: i,
              stakeAuthorizationType: s,
              custodianPubkey: r,
            } = e,
            o = Pe(ai.Authorize, {
              newAuthorized: Q(i.toBuffer()),
              stakeAuthorizationType: s.index,
            }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: Ae, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return (
            r && a.push({ pubkey: r, isSigner: !0, isWritable: !1 }),
            new Te().add({ keys: a, programId: this.programId, data: o })
          );
        }
        static authorizeWithSeed(e) {
          const {
              stakePubkey: t,
              authorityBase: n,
              authoritySeed: i,
              authorityOwner: s,
              newAuthorizedPubkey: r,
              stakeAuthorizationType: o,
              custodianPubkey: a,
            } = e,
            l = Pe(ai.AuthorizeWithSeed, {
              newAuthorized: Q(r.toBuffer()),
              stakeAuthorizationType: o.index,
              authoritySeed: i,
              authorityOwner: Q(s.toBuffer()),
            }),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
              { pubkey: Ae, isSigner: !1, isWritable: !1 },
            ];
          return (
            a && c.push({ pubkey: a, isSigner: !0, isWritable: !1 }),
            new Te().add({ keys: c, programId: this.programId, data: l })
          );
        }
        static splitInstruction(e) {
          const {
              stakePubkey: t,
              authorizedPubkey: n,
              splitStakePubkey: i,
              lamports: s,
            } = e,
            r = Pe(ai.Split, { lamports: s });
          return new Ie({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: r,
          });
        }
        static split(e, t) {
          const n = new Te();
          return (
            n.add(
              Ye.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId,
              })
            ),
            n.add(this.splitInstruction(e))
          );
        }
        static splitWithSeed(e, t) {
          const {
              stakePubkey: n,
              authorizedPubkey: i,
              splitStakePubkey: s,
              basePubkey: r,
              seed: o,
              lamports: a,
            } = e,
            l = new Te();
          return (
            l.add(
              Ye.allocate({
                accountPubkey: s,
                basePubkey: r,
                seed: o,
                space: this.space,
                programId: this.programId,
              })
            ),
            t &&
              t > 0 &&
              l.add(
                Ye.transfer({
                  fromPubkey: e.authorizedPubkey,
                  toPubkey: s,
                  lamports: t,
                })
              ),
            l.add(
              this.splitInstruction({
                stakePubkey: n,
                authorizedPubkey: i,
                splitStakePubkey: s,
                lamports: a,
              })
            )
          );
        }
        static merge(e) {
          const {
              stakePubkey: t,
              sourceStakePubKey: n,
              authorizedPubkey: i,
            } = e,
            s = Pe(ai.Merge);
          return new Te().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: Ae, isSigner: !1, isWritable: !1 },
              { pubkey: Ne, isSigner: !1, isWritable: !1 },
              { pubkey: i, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static withdraw(e) {
          const {
              stakePubkey: t,
              authorizedPubkey: n,
              toPubkey: i,
              lamports: s,
              custodianPubkey: r,
            } = e,
            o = Pe(ai.Withdraw, { lamports: s }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: Ae, isSigner: !1, isWritable: !1 },
              { pubkey: Ne, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return (
            r && a.push({ pubkey: r, isSigner: !0, isWritable: !1 }),
            new Te().add({ keys: a, programId: this.programId, data: o })
          );
        }
        static deactivate(e) {
          const { stakePubkey: t, authorizedPubkey: n } = e,
            i = Pe(ai.Deactivate);
          return new Te().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: Ae, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
      }
      (li.programId = new ne("Stake11111111111111111111111111111111111111")),
        (li.space = 200);
      const ci = Object.freeze({
        InitializeAccount: {
          index: 0,
          layout: d.w3([
            d.DH("instruction"),
            (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "voteInit";
              return d.w3(
                [
                  le("nodePubkey"),
                  le("authorizedVoter"),
                  le("authorizedWithdrawer"),
                  d.u8("commission"),
                ],
                e
              );
            })(),
          ]),
        },
        Authorize: {
          index: 1,
          layout: d.w3([
            d.DH("instruction"),
            le("newAuthorized"),
            d.DH("voteAuthorizationType"),
          ]),
        },
        Withdraw: {
          index: 3,
          layout: d.w3([d.DH("instruction"), d.Wg("lamports")]),
        },
        UpdateValidatorIdentity: {
          index: 4,
          layout: d.w3([d.DH("instruction")]),
        },
        AuthorizeWithSeed: {
          index: 10,
          layout: d.w3([
            d.DH("instruction"),
            (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "voteAuthorizeWithSeedArgs";
              return d.w3(
                [
                  d.DH("voteAuthorizationType"),
                  le("currentAuthorityDerivedKeyOwnerPubkey"),
                  ue("currentAuthorityDerivedKeySeed"),
                  le("newAuthorized"),
                ],
                e
              );
            })(),
          ]),
        },
      });
      Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
      class ui {
        constructor() {}
        static initializeAccount(e) {
          const { votePubkey: t, nodePubkey: n, voteInit: i } = e,
            s = Pe(ci.InitializeAccount, {
              voteInit: {
                nodePubkey: Q(i.nodePubkey.toBuffer()),
                authorizedVoter: Q(i.authorizedVoter.toBuffer()),
                authorizedWithdrawer: Q(i.authorizedWithdrawer.toBuffer()),
                commission: i.commission,
              },
            }),
            r = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: Le, isSigner: !1, isWritable: !1 },
                { pubkey: Ae, isSigner: !1, isWritable: !1 },
                { pubkey: n, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: s,
            };
          return new Ie(r);
        }
        static createAccount(e) {
          const t = new Te();
          return (
            t.add(
              Ye.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId,
              })
            ),
            t.add(
              this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit,
              })
            )
          );
        }
        static authorize(e) {
          const {
              votePubkey: t,
              authorizedPubkey: n,
              newAuthorizedPubkey: i,
              voteAuthorizationType: s,
            } = e,
            r = Pe(ci.Authorize, {
              newAuthorized: Q(i.toBuffer()),
              voteAuthorizationType: s.index,
            }),
            o = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: Ae, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new Te().add({ keys: o, programId: this.programId, data: r });
        }
        static authorizeWithSeed(e) {
          const {
              currentAuthorityDerivedKeyBasePubkey: t,
              currentAuthorityDerivedKeyOwnerPubkey: n,
              currentAuthorityDerivedKeySeed: i,
              newAuthorizedPubkey: s,
              voteAuthorizationType: r,
              votePubkey: o,
            } = e,
            a = Pe(ci.AuthorizeWithSeed, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: Q(n.toBuffer()),
                currentAuthorityDerivedKeySeed: i,
                newAuthorized: Q(s.toBuffer()),
                voteAuthorizationType: r.index,
              },
            }),
            l = [
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: Ae, isSigner: !1, isWritable: !1 },
              { pubkey: t, isSigner: !0, isWritable: !1 },
            ];
          return new Te().add({ keys: l, programId: this.programId, data: a });
        }
        static withdraw(e) {
          const {
              votePubkey: t,
              authorizedWithdrawerPubkey: n,
              lamports: i,
              toPubkey: s,
            } = e,
            r = Pe(ci.Withdraw, { lamports: i }),
            o = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new Te().add({ keys: o, programId: this.programId, data: r });
        }
        static safeWithdraw(e, t, n) {
          if (e.lamports > t - n)
            throw new Error(
              "Withdraw will leave vote account with insufficient funds."
            );
          return ui.withdraw(e);
        }
        static updateValidatorIdentity(e) {
          const {
              votePubkey: t,
              authorizedWithdrawerPubkey: n,
              nodePubkey: i,
            } = e,
            s = Pe(ci.UpdateValidatorIdentity),
            r = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !0, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new Te().add({ keys: r, programId: this.programId, data: s });
        }
      }
      (ui.programId = new ne("Vote111111111111111111111111111111111111111")),
        (ui.space = 3762);
      new ne("Va1idator1nfo111111111111111111111111111111"),
        _({
          name: C(),
          website: j(C()),
          details: j(C()),
          iconUrl: j(C()),
          keybaseUsername: j(C()),
        });
      new ne("Vote111111111111111111111111111111111111111"),
        d.w3([
          le("nodePubkey"),
          le("authorizedWithdrawer"),
          d.u8("commission"),
          d.I0(),
          d.O6(
            d.w3([d.I0("slot"), d.DH("confirmationCount")]),
            d.cY(d.DH(), -8),
            "votes"
          ),
          d.u8("rootSlotValid"),
          d.I0("rootSlot"),
          d.I0(),
          d.O6(
            d.w3([d.I0("epoch"), le("authorizedVoter")]),
            d.cY(d.DH(), -8),
            "authorizedVoters"
          ),
          d.w3(
            [
              d.O6(
                d.w3([
                  le("authorizedPubkey"),
                  d.I0("epochOfLastAuthorizedSwitch"),
                  d.I0("targetEpoch"),
                ]),
                32,
                "buf"
              ),
              d.I0("idx"),
              d.u8("isEmpty"),
            ],
            "priorVoters"
          ),
          d.I0(),
          d.O6(
            d.w3([d.I0("epoch"), d.I0("credits"), d.I0("prevCredits")]),
            d.cY(d.DH(), -8),
            "epochCredits"
          ),
          d.w3([d.I0("slot"), d.I0("timestamp")], "lastTimestamp"),
        ]);
      const di = 1e9;
    },
    42510: (e, t, n) => {
      "use strict";
      n.d(t, { U1: () => a, s3: () => r, FJ: () => o });
      var i = n(10704),
        s = n(8629);
      function r(e) {
        let { swiper: t, extendParams: n, on: r, emit: o } = e;
        const a = (0, i.g)(),
          l = (0, i.a)();
        function c(e) {
          if (!t.enabled) return;
          const { rtlTranslate: n } = t;
          let i = e;
          i.originalEvent && (i = i.originalEvent);
          const r = i.keyCode || i.charCode,
            c = t.params.keyboard.pageUpDown,
            u = c && 33 === r,
            d = c && 34 === r,
            h = 37 === r,
            p = 39 === r,
            g = 38 === r,
            f = 40 === r;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && p) || (t.isVertical() && f) || d)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && h) || (t.isVertical() && g) || u)
          )
            return !1;
          if (
            !(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) &&
            (!a.activeElement ||
              !a.activeElement.nodeName ||
              ("input" !== a.activeElement.nodeName.toLowerCase() &&
                "textarea" !== a.activeElement.nodeName.toLowerCase()))
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (u || d || h || p || g || f)
            ) {
              let e = !1;
              if (
                (0, s.a)(t.el, `.${t.params.slideClass}, swiper-slide`).length >
                  0 &&
                0 === (0, s.a)(t.el, `.${t.params.slideActiveClass}`).length
              )
                return;
              const i = t.el,
                r = i.clientWidth,
                o = i.clientHeight,
                a = l.innerWidth,
                c = l.innerHeight,
                u = (0, s.b)(i);
              n && (u.left -= i.scrollLeft);
              const d = [
                [u.left, u.top],
                [u.left + r, u.top],
                [u.left, u.top + o],
                [u.left + r, u.top + o],
              ];
              for (let t = 0; t < d.length; t += 1) {
                const n = d[t];
                if (n[0] >= 0 && n[0] <= a && n[1] >= 0 && n[1] <= c) {
                  if (0 === n[0] && 0 === n[1]) continue;
                  e = !0;
                }
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((u || d || h || p) &&
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                (((d || p) && !n) || ((u || h) && n)) && t.slideNext(),
                (((u || h) && !n) || ((d || p) && n)) && t.slidePrev())
              : ((u || d || g || f) &&
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                (d || f) && t.slideNext(),
                (u || g) && t.slidePrev()),
              o("keyPress", r);
          }
        }
        function u() {
          t.keyboard.enabled ||
            (a.addEventListener("keydown", c), (t.keyboard.enabled = !0));
        }
        function d() {
          t.keyboard.enabled &&
            (a.removeEventListener("keydown", c), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          n({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          r("init", () => {
            t.params.keyboard.enabled && u();
          }),
          r("destroy", () => {
            t.keyboard.enabled && d();
          }),
          Object.assign(t.keyboard, { enable: u, disable: d });
      }
      function o(e) {
        let { swiper: t, extendParams: n, on: r, emit: o } = e;
        const a = (0, i.a)();
        let l;
        n({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel",
          },
        }),
          (t.mousewheel = { enabled: !1 });
        let c,
          u = (0, s.d)();
        const d = [];
        function h() {
          t.enabled && (t.mouseEntered = !0);
        }
        function p() {
          t.enabled && (t.mouseEntered = !1);
        }
        function g(e) {
          return (
            !(
              t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta
            ) &&
            !(
              t.params.mousewheel.thresholdTime &&
              (0, s.d)() - u < t.params.mousewheel.thresholdTime
            ) &&
            ((e.delta >= 6 && (0, s.d)() - u < 60) ||
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), o("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), o("scroll", e.raw)),
              (u = new a.Date().getTime()),
              !1))
          );
        }
        function f(e) {
          let n = e,
            i = !0;
          if (!t.enabled) return;
          if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
            return;
          const r = t.params.mousewheel;
          t.params.cssMode && n.preventDefault();
          let a = t.el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (a = document.querySelector(t.params.mousewheel.eventsTarget));
          const u = a && a.contains(n.target);
          if (!t.mouseEntered && !u && !r.releaseOnEdges) return !0;
          n.originalEvent && (n = n.originalEvent);
          let h = 0;
          const p = t.rtlTranslate ? -1 : 1,
            f = (function (e) {
              let t = 0,
                n = 0,
                i = 0,
                s = 0;
              return (
                "detail" in e && (n = e.detail),
                "wheelDelta" in e && (n = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = n), (n = 0)),
                (i = 10 * t),
                (s = 10 * n),
                "deltaY" in e && (s = e.deltaY),
                "deltaX" in e && (i = e.deltaX),
                e.shiftKey && !i && ((i = s), (s = 0)),
                (i || s) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((i *= 40), (s *= 40))
                    : ((i *= 800), (s *= 800))),
                i && !t && (t = i < 1 ? -1 : 1),
                s && !n && (n = s < 1 ? -1 : 1),
                { spinX: t, spinY: n, pixelX: i, pixelY: s }
              );
            })(n);
          if (r.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
              h = -f.pixelX * p;
            } else {
              if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
              h = -f.pixelY;
            }
          else
            h =
              Math.abs(f.pixelX) > Math.abs(f.pixelY)
                ? -f.pixelX * p
                : -f.pixelY;
          if (0 === h) return !0;
          r.invert && (h = -h);
          let m = t.getTranslate() + h * r.sensitivity;
          if (
            (m >= t.minTranslate() && (m = t.minTranslate()),
            m <= t.maxTranslate() && (m = t.maxTranslate()),
            (i =
              !!t.params.loop ||
              !(m === t.minTranslate() || m === t.maxTranslate())),
            i && t.params.nested && n.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const e = {
                time: (0, s.d)(),
                delta: Math.abs(h),
                direction: Math.sign(h),
              },
              i =
                c &&
                e.time < c.time + 500 &&
                e.delta <= c.delta &&
                e.direction === c.direction;
            if (!i) {
              c = void 0;
              let a = t.getTranslate() + h * r.sensitivity;
              const u = t.isBeginning,
                p = t.isEnd;
              if (
                (a >= t.minTranslate() && (a = t.minTranslate()),
                a <= t.maxTranslate() && (a = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(a),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!u && t.isBeginning) || (!p && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.loop &&
                  t.loopFix({
                    direction: e.direction < 0 ? "next" : "prev",
                    byMousewheel: !0,
                  }),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(l), (l = void 0), d.length >= 15 && d.shift();
                const n = d.length ? d[d.length - 1] : void 0,
                  i = d[0];
                if (
                  (d.push(e),
                  n && (e.delta > n.delta || e.direction !== n.direction))
                )
                  d.splice(0);
                else if (
                  d.length >= 15 &&
                  e.time - i.time < 500 &&
                  i.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const n = h > 0 ? 0.8 : 0.2;
                  (c = e),
                    d.splice(0),
                    (l = (0, s.n)(() => {
                      !t.destroyed &&
                        t.params &&
                        t.slideToClosest(t.params.speed, !0, void 0, n);
                    }, 0));
                }
                l ||
                  (l = (0, s.n)(() => {
                    if (t.destroyed || !t.params) return;
                    (c = e),
                      d.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (i || o("scroll", n),
                t.params.autoplay &&
                  t.params.autoplay.disableOnInteraction &&
                  t.autoplay.stop(),
                r.releaseOnEdges &&
                  (a === t.minTranslate() || a === t.maxTranslate()))
              )
                return !0;
            }
          } else {
            const n = {
              time: (0, s.d)(),
              delta: Math.abs(h),
              direction: Math.sign(h),
              raw: e,
            };
            d.length >= 2 && d.shift();
            const i = d.length ? d[d.length - 1] : void 0;
            if (
              (d.push(n),
              i
                ? (n.direction !== i.direction ||
                    n.delta > i.delta ||
                    n.time > i.time + 150) &&
                  g(n)
                : g(n),
              (function (e) {
                const n = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
                  return !0;
                return !1;
              })(n))
            )
              return !0;
          }
          return (
            n.preventDefault ? n.preventDefault() : (n.returnValue = !1), !1
          );
        }
        function m(e) {
          let n = t.el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (n = document.querySelector(t.params.mousewheel.eventsTarget)),
            n[e]("mouseenter", h),
            n[e]("mouseleave", p),
            n[e]("wheel", f);
        }
        function y() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", f), !0)
            : !t.mousewheel.enabled &&
                (m("addEventListener"), (t.mousewheel.enabled = !0), !0);
        }
        function w() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, f), !0)
            : !!t.mousewheel.enabled &&
                (m("removeEventListener"), (t.mousewheel.enabled = !1), !0);
        }
        r("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && w(),
            t.params.mousewheel.enabled && y();
        }),
          r("destroy", () => {
            t.params.cssMode && y(), t.mousewheel.enabled && w();
          }),
          Object.assign(t.mousewheel, { enable: y, disable: w });
      }
      function a(e) {
        let { swiper: t, extendParams: n, emit: i, once: r } = e;
        n({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                if (t.params.cssMode) return;
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                if (t.params.cssMode) return;
                const { touchEventsData: e, touches: n } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "currentX" : "currentY"],
                    time: (0, s.d)(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: n } = e;
                if (t.params.cssMode) return;
                const {
                    params: o,
                    wrapperEl: a,
                    rtlTranslate: l,
                    snapGrid: c,
                    touchEventsData: u,
                  } = t,
                  d = (0, s.d)() - u.touchStartTime;
                if (n < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (n > -t.maxTranslate())
                  t.slides.length < c.length
                    ? t.slideTo(c.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (o.freeMode.momentum) {
                    if (u.velocities.length > 1) {
                      const e = u.velocities.pop(),
                        n = u.velocities.pop(),
                        i = e.position - n.position,
                        r = e.time - n.time;
                      (t.velocity = i / r),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < o.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (r > 150 || (0, s.d)() - e.time > 300) &&
                          (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= o.freeMode.momentumVelocityRatio),
                      (u.velocities.length = 0);
                    let e = 1e3 * o.freeMode.momentumRatio;
                    const n = t.velocity * e;
                    let d = t.translate + n;
                    l && (d = -d);
                    let h,
                      p = !1;
                    const g =
                      20 *
                      Math.abs(t.velocity) *
                      o.freeMode.momentumBounceRatio;
                    let f;
                    if (d < t.maxTranslate())
                      o.freeMode.momentumBounce
                        ? (d + t.maxTranslate() < -g &&
                            (d = t.maxTranslate() - g),
                          (h = t.maxTranslate()),
                          (p = !0),
                          (u.allowMomentumBounce = !0))
                        : (d = t.maxTranslate()),
                        o.loop && o.centeredSlides && (f = !0);
                    else if (d > t.minTranslate())
                      o.freeMode.momentumBounce
                        ? (d - t.minTranslate() > g &&
                            (d = t.minTranslate() + g),
                          (h = t.minTranslate()),
                          (p = !0),
                          (u.allowMomentumBounce = !0))
                        : (d = t.minTranslate()),
                        o.loop && o.centeredSlides && (f = !0);
                    else if (o.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < c.length; t += 1)
                        if (c[t] > -d) {
                          e = t;
                          break;
                        }
                      (d =
                        Math.abs(c[e] - d) < Math.abs(c[e - 1] - d) ||
                        "next" === t.swipeDirection
                          ? c[e]
                          : c[e - 1]),
                        (d = -d);
                    }
                    if (
                      (f &&
                        r("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = l
                          ? Math.abs((-d - t.translate) / t.velocity)
                          : Math.abs((d - t.translate) / t.velocity)),
                        o.freeMode.sticky)
                      ) {
                        const n = Math.abs((l ? -d : d) - t.translate),
                          i = t.slidesSizesGrid[t.activeIndex];
                        e =
                          n < i
                            ? o.speed
                            : n < 2 * i
                            ? 1.5 * o.speed
                            : 2.5 * o.speed;
                      }
                    } else if (o.freeMode.sticky)
                      return void t.slideToClosest();
                    o.freeMode.momentumBounce && p
                      ? (t.updateProgress(h),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        (0, s.k)(a, () => {
                          t &&
                            !t.destroyed &&
                            u.allowMomentumBounce &&
                            (i("momentumBounce"),
                            t.setTransition(o.speed),
                            setTimeout(() => {
                              t.setTranslate(h),
                                (0, s.k)(a, () => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (i("_freeModeNoMomentumRelease"),
                        t.updateProgress(d),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          (0, s.k)(a, () => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(d),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (o.freeMode.sticky) return void t.slideToClosest();
                    o.freeMode && i("_freeModeNoMomentumRelease");
                  }
                  (!o.freeMode.momentum || d >= o.longSwipesMs) &&
                    (i("_freeModeStaticRelease"),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      }
    },
    53493: (e, t, n) => {
      "use strict";
      n.d(t, { DE: () => a });
      var i = n(96564),
        s = n(99020),
        r = n(74391);
      class o extends i.Ce {
        async sendTransaction(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = !0;
          try {
            if ((0, r.Y)(e)) {
              if (!this.supportedTransactionVersions)
                throw new s.UF(
                  "Sending versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(e.version))
                throw new s.UF(
                  `Sending transaction version ${e.version} isn't supported by this wallet`
                );
              try {
                const i = (e = await this.signTransaction(e)).serialize();
                return await t.sendRawTransaction(i, n);
              } catch (o) {
                if (o instanceof s.z4) throw ((i = !1), o);
                throw new s.UF(
                  null === o || void 0 === o ? void 0 : o.message,
                  o
                );
              }
            } else
              try {
                const { signers: i, ...s } = n;
                (e = await this.prepareTransaction(e, t, s)),
                  (null === i || void 0 === i ? void 0 : i.length) &&
                    e.partialSign(...i);
                const r = (e = await this.signTransaction(e)).serialize();
                return await t.sendRawTransaction(r, s);
              } catch (o) {
                if (o instanceof s.z4) throw ((i = !1), o);
                throw new s.UF(
                  null === o || void 0 === o ? void 0 : o.message,
                  o
                );
              }
          } catch (o) {
            throw (i && this.emit("error", o), o);
          }
        }
        async signAllTransactions(e) {
          for (const n of e)
            if ((0, r.Y)(n)) {
              if (!this.supportedTransactionVersions)
                throw new s.z4(
                  "Signing versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(n.version))
                throw new s.z4(
                  `Signing transaction version ${n.version} isn't supported by this wallet`
                );
            }
          const t = [];
          for (const n of e) t.push(await this.signTransaction(n));
          return t;
        }
      }
      class a extends o {}
    },
    63554: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => O });
      var i = n(53493),
        s = n(96564),
        r = n(99020),
        o = n(74391),
        a = n(42449),
        l = n(41915);
      const c = "solana:mainnet",
        u = "solana:devnet",
        d = "solana:testnet";
      var h = n(13083),
        p = n(80312),
        g = n(39107),
        f = n(80888),
        m = n(70502),
        y = n(18085);
      var w,
        b,
        v,
        S,
        k,
        M,
        I,
        T,
        x,
        A,
        E,
        L,
        N,
        z,
        j = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" === typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        },
        D = function (e, t, n, i, s) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !s)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" === typeof t ? e !== t || !s : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? s.call(e, n) : s ? (s.value = n) : t.set(e, n), n;
        };
      class C {
        constructor() {
          var e = this;
          w.add(this),
            b.set(this, {}),
            v.set(this, "1.0.0"),
            S.set(this, "MetaMask"),
            k.set(
              this,
              "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="
            ),
            M.set(this, null),
            I.set(this, (e, t) => {
              var n;
              return (
                (null === (n = j(this, b, "f")[e]) || void 0 === n
                  ? void 0
                  : n.push(t)) || (j(this, b, "f")[e] = [t]),
                () => j(this, w, "m", x).call(this, e, t)
              );
            }),
            A.set(this, async () => {
              if (!j(this, M, "f")) {
                let t;
                try {
                  t = (await n.e(5618).then(n.bind(n, 5618))).default;
                } catch (e) {
                  throw new Error("Unable to load Solflare MetaMask SDK");
                }
                D(this, M, new t(), "f"),
                  j(this, M, "f").on("standard_change", (e) =>
                    j(this, w, "m", T).call(this, "change", e)
                  );
              }
              return (
                this.accounts.length || (await j(this, M, "f").connect()),
                { accounts: this.accounts }
              );
            }),
            E.set(this, async () => {
              j(this, M, "f") && (await j(this, M, "f").disconnect());
            }),
            L.set(this, async function () {
              if (!j(e, M, "f")) throw new r.kW();
              return await j(e, M, "f").standardSignAndSendTransaction(
                ...arguments
              );
            }),
            N.set(this, async function () {
              if (!j(e, M, "f")) throw new r.kW();
              return await j(e, M, "f").standardSignTransaction(...arguments);
            }),
            z.set(this, async function () {
              if (!j(e, M, "f")) throw new r.kW();
              return await j(e, M, "f").standardSignMessage(...arguments);
            });
        }
        get version() {
          return j(this, v, "f");
        }
        get name() {
          return j(this, S, "f");
        }
        get icon() {
          return j(this, k, "f");
        }
        get chains() {
          return [c, u, d];
        }
        get features() {
          return {
            [f.u]: { version: "1.0.0", connect: j(this, A, "f") },
            [m.w]: { version: "1.0.0", disconnect: j(this, E, "f") },
            [y.j]: { version: "1.0.0", on: j(this, I, "f") },
            [h.R]: {
              version: "1.0.0",
              supportedTransactionVersions: ["legacy", 0],
              signAndSendTransaction: j(this, L, "f"),
            },
            [p.q]: {
              version: "1.0.0",
              supportedTransactionVersions: ["legacy", 0],
              signTransaction: j(this, N, "f"),
            },
            [g.F]: { version: "1.0.0", signMessage: j(this, z, "f") },
          };
        }
        get accounts() {
          return j(this, M, "f") ? j(this, M, "f").standardAccounts : [];
        }
      }
      (b = new WeakMap()),
        (v = new WeakMap()),
        (S = new WeakMap()),
        (k = new WeakMap()),
        (M = new WeakMap()),
        (I = new WeakMap()),
        (A = new WeakMap()),
        (E = new WeakMap()),
        (L = new WeakMap()),
        (N = new WeakMap()),
        (z = new WeakMap()),
        (w = new WeakSet()),
        (T = function (e) {
          for (
            var t,
              n = arguments.length,
              i = new Array(n > 1 ? n - 1 : 0),
              s = 1;
            s < n;
            s++
          )
            i[s - 1] = arguments[s];
          null === (t = j(this, b, "f")[e]) ||
            void 0 === t ||
            t.forEach((e) => e.apply(null, i));
        }),
        (x = function (e, t) {
          var n;
          j(this, b, "f")[e] =
            null === (n = j(this, b, "f")[e]) || void 0 === n
              ? void 0
              : n.filter((e) => t !== e);
        });
      let P = !1;
      async function _() {
        const e = "solflare-detect-metamask";
        function t() {
          window.postMessage(
            {
              target: "metamask-contentscript",
              data: {
                name: "metamask-provider",
                data: { id: e, jsonrpc: "2.0", method: "wallet_getSnaps" },
              },
            },
            window.location.origin
          );
        }
        function n(i) {
          var s;
          const r = i.data;
          var o;
          "metamask-inpage" ===
            (null === r || void 0 === r ? void 0 : r.target) &&
            "metamask-provider" ===
              (null === (s = r.data) || void 0 === s ? void 0 : s.name) &&
            ((null === (o = r.data.data) || void 0 === o ? void 0 : o.id) === e
              ? (window.removeEventListener("message", n),
                r.data.data.error || P || ((0, l.L)(new C()), (P = !0)))
              : t());
        }
        window.addEventListener("message", n),
          window.setTimeout(
            () => window.removeEventListener("message", n),
            5e3
          ),
          t();
      }
      class O extends i.DE {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(),
            (this.name = "Solflare"),
            (this.url = "https://solflare.com"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+"),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._readyState =
              "undefined" === typeof window || "undefined" === typeof document
                ? s.Ok.Unsupported
                : s.Ok.Loadable),
            (this._disconnected = () => {
              const e = this._wallet;
              e &&
                (e.off("disconnect", this._disconnected),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new r.PQ()),
                this.emit("disconnect"));
            }),
            (this._accountChanged = (e) => {
              if (!e) return;
              const t = this._publicKey;
              if (t) {
                try {
                  e = new a.J3(e.toBytes());
                } catch (n) {
                  return void this.emit(
                    "error",
                    new r.Kd(null === n || void 0 === n ? void 0 : n.message, n)
                  );
                }
                t.equals(e) || ((this._publicKey = e), this.emit("connect", e));
              }
            }),
            (this._connecting = !1),
            (this._publicKey = null),
            (this._wallet = null),
            (this._config = e),
            this._readyState !== s.Ok.Unsupported &&
              ((0, s.qG)(() => {
                var e;
                return (
                  !!(
                    (null !== (e = window.solflare) &&
                      void 0 !== e &&
                      e.isSolflare) ||
                    window.SolflareApp
                  ) &&
                  ((this._readyState = s.Ok.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
                );
              }),
              _());
        }
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get connected() {
          var e;
          return !(null === (e = this._wallet) || void 0 === e || !e.connected);
        }
        get readyState() {
          return this._readyState;
        }
        async autoConnect() {
          (this.readyState === s.Ok.Loadable && (0, s.Br)()) ||
            (await this.connect());
        }
        async connect() {
          try {
            if (this.connected || this.connecting) return;
            if (
              this._readyState !== s.Ok.Loadable &&
              this._readyState !== s.Ok.Installed
            )
              throw new r.AE();
            if (this.readyState === s.Ok.Loadable && (0, s.Br)()) {
              const e = encodeURIComponent(window.location.href),
                t = encodeURIComponent(window.location.origin);
              return void (window.location.href = `https://solflare.com/ul/v1/browse/${e}?ref=${t}`);
            }
            let t, i, o;
            try {
              t = (await n.e(5034).then(n.bind(n, 25034))).default;
            } catch (e) {
              throw new r.Sz(
                null === e || void 0 === e ? void 0 : e.message,
                e
              );
            }
            try {
              i = new t({ network: this._config.network });
            } catch (e) {
              throw new r.Ez(
                null === e || void 0 === e ? void 0 : e.message,
                e
              );
            }
            if (((this._connecting = !0), !i.connected))
              try {
                await i.connect();
              } catch (e) {
                throw new r.Y6(
                  null === e || void 0 === e ? void 0 : e.message,
                  e
                );
              }
            if (!i.publicKey) throw new r.Y6();
            try {
              o = new a.J3(i.publicKey.toBytes());
            } catch (e) {
              throw new r.Kd(
                null === e || void 0 === e ? void 0 : e.message,
                e
              );
            }
            i.on("disconnect", this._disconnected),
              i.on("accountChanged", this._accountChanged),
              (this._wallet = i),
              (this._publicKey = o),
              this.emit("connect", o);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          const e = this._wallet;
          if (e) {
            e.off("disconnect", this._disconnected),
              e.off("accountChanged", this._accountChanged),
              (this._wallet = null),
              (this._publicKey = null);
            try {
              await e.disconnect();
            } catch (t) {
              this.emit(
                "error",
                new r.Y8(null === t || void 0 === t ? void 0 : t.message, t)
              );
            }
          }
          this.emit("disconnect");
        }
        async sendTransaction(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          try {
            const s = this._wallet;
            if (!s) throw new r.kW();
            try {
              const { signers: i, ...r } = n;
              return (
                (0, o.Y)(e)
                  ? (null === i || void 0 === i ? void 0 : i.length) &&
                    e.sign(i)
                  : ((e = await this.prepareTransaction(e, t, r)),
                    (null === i || void 0 === i ? void 0 : i.length) &&
                      e.partialSign(...i)),
                (r.preflightCommitment = r.preflightCommitment || t.commitment),
                await s.signAndSendTransaction(e, r)
              );
            } catch (i) {
              if (i instanceof r.m7) throw i;
              throw new r.UF(
                null === i || void 0 === i ? void 0 : i.message,
                i
              );
            }
          } catch (i) {
            throw (this.emit("error", i), i);
          }
        }
        async signTransaction(e) {
          try {
            const n = this._wallet;
            if (!n) throw new r.kW();
            try {
              return (await n.signTransaction(e)) || e;
            } catch (t) {
              throw new r.z4(
                null === t || void 0 === t ? void 0 : t.message,
                t
              );
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }
        async signAllTransactions(e) {
          try {
            const n = this._wallet;
            if (!n) throw new r.kW();
            try {
              return (await n.signAllTransactions(e)) || e;
            } catch (t) {
              throw new r.z4(
                null === t || void 0 === t ? void 0 : t.message,
                t
              );
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }
        async signMessage(e) {
          try {
            const n = this._wallet;
            if (!n) throw new r.kW();
            try {
              return await n.signMessage(e, "utf8");
            } catch (t) {
              throw new r.K3(
                null === t || void 0 === t ? void 0 : t.message,
                t
              );
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }
      }
    },
    74391: (e, t, n) => {
      "use strict";
      function i(e) {
        return "version" in e;
      }
      n.d(t, { Y: () => i });
    },
    80312: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i });
      const i = "solana:signTransaction";
    },
    90995: (e, t, n) => {
      "use strict";
      function i(e) {
        switch (e) {
          case "processed":
          case "confirmed":
          case "finalized":
          case void 0:
            return e;
          case "recent":
            return "processed";
          case "single":
          case "singleGossip":
            return "confirmed";
          case "max":
          case "root":
            return "finalized";
          default:
            return;
        }
      }
      n.d(t, { i: () => i });
    },
    91679: () => {},
    92888: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => l });
      var i = n(53493),
        s = n(96564),
        r = n(99020),
        o = n(74391),
        a = n(42449);
      class l extends i.DE {
        constructor() {
          super(),
            (this.name = "Phantom"),
            (this.url = "https://phantom.app"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg=="),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._readyState =
              "undefined" === typeof window || "undefined" === typeof document
                ? s.Ok.Unsupported
                : s.Ok.NotDetected),
            (this._disconnected = () => {
              const e = this._wallet;
              e &&
                (e.off("disconnect", this._disconnected),
                e.off("accountChanged", this._accountChanged),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new r.PQ()),
                this.emit("disconnect"));
            }),
            (this._accountChanged = (e) => {
              const t = this._publicKey;
              if (t) {
                try {
                  e = new a.J3(e.toBytes());
                } catch (n) {
                  return void this.emit(
                    "error",
                    new r.Kd(null === n || void 0 === n ? void 0 : n.message, n)
                  );
                }
                t.equals(e) || ((this._publicKey = e), this.emit("connect", e));
              }
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== s.Ok.Unsupported &&
              ((0, s.Br)()
                ? ((this._readyState = s.Ok.Loadable),
                  this.emit("readyStateChange", this._readyState))
                : (0, s.qG)(() => {
                    var e, t;
                    return (
                      !!(
                        (null !== (e = window.phantom) &&
                          void 0 !== e &&
                          null !== (e = e.solana) &&
                          void 0 !== e &&
                          e.isPhantom) ||
                        (null !== (t = window.solana) &&
                          void 0 !== t &&
                          t.isPhantom)
                      ) &&
                      ((this._readyState = s.Ok.Installed),
                      this.emit("readyStateChange", this._readyState),
                      !0)
                    );
                  }));
        }
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        async autoConnect() {
          this.readyState === s.Ok.Installed && (await this.connect());
        }
        async connect() {
          try {
            var e;
            if (this.connected || this.connecting) return;
            if (this.readyState === s.Ok.Loadable) {
              const e = encodeURIComponent(window.location.href),
                t = encodeURIComponent(window.location.origin);
              return void (window.location.href = `https://phantom.app/ul/browse/${e}?ref=${t}`);
            }
            if (this.readyState !== s.Ok.Installed) throw new r.AE();
            this._connecting = !0;
            const n =
              (null === (e = window.phantom) || void 0 === e
                ? void 0
                : e.solana) || window.solana;
            if (!n.isConnected)
              try {
                await n.connect();
              } catch (t) {
                throw new r.Y6(
                  null === t || void 0 === t ? void 0 : t.message,
                  t
                );
              }
            if (!n.publicKey) throw new r.fk();
            let i;
            try {
              i = new a.J3(n.publicKey.toBytes());
            } catch (t) {
              throw new r.Kd(
                null === t || void 0 === t ? void 0 : t.message,
                t
              );
            }
            n.on("disconnect", this._disconnected),
              n.on("accountChanged", this._accountChanged),
              (this._wallet = n),
              (this._publicKey = i),
              this.emit("connect", i);
          } catch (t) {
            throw (this.emit("error", t), t);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          const e = this._wallet;
          if (e) {
            e.off("disconnect", this._disconnected),
              e.off("accountChanged", this._accountChanged),
              (this._wallet = null),
              (this._publicKey = null);
            try {
              await e.disconnect();
            } catch (t) {
              this.emit(
                "error",
                new r.Y8(null === t || void 0 === t ? void 0 : t.message, t)
              );
            }
          }
          this.emit("disconnect");
        }
        async sendTransaction(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          try {
            const s = this._wallet;
            if (!s) throw new r.kW();
            try {
              const { signers: i, ...r } = n;
              (0, o.Y)(e)
                ? (null === i || void 0 === i ? void 0 : i.length) && e.sign(i)
                : ((e = await this.prepareTransaction(e, t, r)),
                  (null === i || void 0 === i ? void 0 : i.length) &&
                    e.partialSign(...i)),
                (r.preflightCommitment = r.preflightCommitment || t.commitment);
              const { signature: a } = await s.signAndSendTransaction(e, r);
              return a;
            } catch (i) {
              if (i instanceof r.m7) throw i;
              throw new r.UF(
                null === i || void 0 === i ? void 0 : i.message,
                i
              );
            }
          } catch (i) {
            throw (this.emit("error", i), i);
          }
        }
        async signTransaction(e) {
          try {
            const n = this._wallet;
            if (!n) throw new r.kW();
            try {
              return (await n.signTransaction(e)) || e;
            } catch (t) {
              throw new r.z4(
                null === t || void 0 === t ? void 0 : t.message,
                t
              );
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }
        async signAllTransactions(e) {
          try {
            const n = this._wallet;
            if (!n) throw new r.kW();
            try {
              return (await n.signAllTransactions(e)) || e;
            } catch (t) {
              throw new r.z4(
                null === t || void 0 === t ? void 0 : t.message,
                t
              );
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }
        async signMessage(e) {
          try {
            const n = this._wallet;
            if (!n) throw new r.kW();
            try {
              const { signature: t } = await n.signMessage(e);
              return t;
            } catch (t) {
              throw new r.K3(
                null === t || void 0 === t ? void 0 : t.message,
                t
              );
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }
      }
    },
    96564: (e, t, n) => {
      "use strict";
      n.d(t, { Br: () => l, Ce: () => o, Ok: () => i, qG: () => a });
      var i,
        s = n(27335),
        r = n(99020);
      !(function (e) {
        (e.Installed = "Installed"),
          (e.NotDetected = "NotDetected"),
          (e.Loadable = "Loadable"),
          (e.Unsupported = "Unsupported");
      })(i || (i = {}));
      class o extends s.A {
        get connected() {
          return !!this.publicKey;
        }
        async autoConnect() {
          await this.connect();
        }
        async prepareTransaction(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const i = this.publicKey;
          if (!i) throw new r.kW();
          return (
            (e.feePayer = e.feePayer || i),
            (e.recentBlockhash =
              e.recentBlockhash ||
              (
                await t.getLatestBlockhash({
                  commitment: n.preflightCommitment,
                  minContextSlot: n.minContextSlot,
                })
              ).blockhash),
            e
          );
        }
      }
      function a(e) {
        if ("undefined" === typeof window || "undefined" === typeof document)
          return;
        const t = [];
        function n() {
          if (e()) for (const e of t) e();
        }
        const i = setInterval(n, 1e3);
        t.push(() => clearInterval(i)),
          "loading" === document.readyState &&
            (document.addEventListener("DOMContentLoaded", n, { once: !0 }),
            t.push(() => document.removeEventListener("DOMContentLoaded", n))),
          "complete" !== document.readyState &&
            (window.addEventListener("load", n, { once: !0 }),
            t.push(() => window.removeEventListener("load", n))),
          n();
      }
      function l() {
        if (!navigator) return !1;
        const e = navigator.userAgent.toLowerCase(),
          t = e.includes("iphone") || e.includes("ipad"),
          n = e.includes("safari");
        return t && n;
      }
    },
    99020: (e, t, n) => {
      "use strict";
      n.d(t, {
        AE: () => s,
        Ez: () => o,
        K3: () => f,
        Kd: () => d,
        PQ: () => l,
        Sz: () => r,
        UF: () => p,
        Y6: () => a,
        Y8: () => c,
        fk: () => u,
        kW: () => h,
        m7: () => i,
        z4: () => g,
      });
      class i extends Error {
        constructor(e, t) {
          super(e), (this.error = t);
        }
      }
      class s extends i {
        constructor() {
          super(...arguments), (this.name = "WalletNotReadyError");
        }
      }
      class r extends i {
        constructor() {
          super(...arguments), (this.name = "WalletLoadError");
        }
      }
      class o extends i {
        constructor() {
          super(...arguments), (this.name = "WalletConfigError");
        }
      }
      class a extends i {
        constructor() {
          super(...arguments), (this.name = "WalletConnectionError");
        }
      }
      class l extends i {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectedError");
        }
      }
      class c extends i {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectionError");
        }
      }
      class u extends i {
        constructor() {
          super(...arguments), (this.name = "WalletAccountError");
        }
      }
      class d extends i {
        constructor() {
          super(...arguments), (this.name = "WalletPublicKeyError");
        }
      }
      class h extends i {
        constructor() {
          super(...arguments), (this.name = "WalletNotConnectedError");
        }
      }
      class p extends i {
        constructor() {
          super(...arguments), (this.name = "WalletSendTransactionError");
        }
      }
      class g extends i {
        constructor() {
          super(...arguments), (this.name = "WalletSignTransactionError");
        }
      }
      class f extends i {
        constructor() {
          super(...arguments), (this.name = "WalletSignMessageError");
        }
      }
    },
  },
]);
