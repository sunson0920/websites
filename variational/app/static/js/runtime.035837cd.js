(() => {
  "use strict";
  var e = {},
    t = {};
  function r(a) {
    var d = t[a];
    if (void 0 !== d) return d.exports;
    var c = (t[a] = { id: a, loaded: !1, exports: {} });
    return e[a].call(c.exports, c, c.exports, r), (c.loaded = !0), c.exports;
  }
  (r.m = e),
    (r.amdO = {}),
    (() => {
      var e = [];
      r.O = (t, a, d, c) => {
        if (!a) {
          var n = 1 / 0;
          for (i = 0; i < e.length; i++) {
            for (var [a, d, c] = e[i], f = !0, o = 0; o < a.length; o++)
              (!1 & c || n >= c) && Object.keys(r.O).every((e) => r.O[e](a[o]))
                ? a.splice(o--, 1)
                : ((f = !1), c < n && (n = c));
            if (f) {
              e.splice(i--, 1);
              var b = d();
              void 0 !== b && (t = b);
            }
          }
          return t;
        }
        c = c || 0;
        for (var i = e.length; i > 0 && e[i - 1][2] > c; i--) e[i] = e[i - 1];
        e[i] = [a, d, c];
      };
    })(),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      r.t = function (a, d) {
        if ((1 & d && (a = this(a)), 8 & d)) return a;
        if ("object" === typeof a && a) {
          if (4 & d && a.__esModule) return a;
          if (16 & d && "function" === typeof a.then) return a;
        }
        var c = Object.create(null);
        r.r(c);
        var n = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var f = 2 & d && a;
          "object" == typeof f && !~e.indexOf(f);
          f = t(f)
        )
          Object.getOwnPropertyNames(f).forEach((e) => (n[e] = () => a[e]));
        return (n.default = () => a), r.d(c, n), c;
      };
    })(),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) &&
          !r.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
    (r.u = (e) =>
      "static/js/" +
      ({
        1: "common.chunks-27545368",
        1161: "common.chunks-49d0a293",
        1256: "common.chunks-d91a9049",
        2876: "common.chunks-386b9151",
        6326: "common.chunks-43dd7041",
        6366: "common.chunks-bcc0128f",
        6417: "common.chunks-36f19dd7",
        8329: "common.chunks-229eafb5",
      }[e] || e) +
      "." +
      {
        1: "ede915f0",
        110: "3dfbf2fd",
        163: "383d5eb1",
        191: "b9c71a5b",
        299: "2147fb78",
        374: "eb09f5d2",
        400: "4ff5d227",
        433: "b43057ff",
        473: "b7d70cd9",
        735: "b9dead38",
        862: "62a8881f",
        985: "92d7da4e",
        1049: "d6a514c2",
        1129: "27ce1c11",
        1161: "424ace0e",
        1241: "702627a0",
        1244: "d12163ea",
        1256: "cd76be88",
        1316: "09a6f979",
        1343: "bc0be048",
        1390: "f520bd95",
        1428: "79f311a9",
        1549: "8fdb28cf",
        1615: "7c6d0ab0",
        1682: "97fe2547",
        1718: "e88b0aab",
        1748: "3f47afbb",
        1814: "7f3dd1c0",
        1839: "906e0f79",
        1854: "003f2e01",
        1914: "e6085f45",
        2113: "57c96dd0",
        2150: "e7f2783e",
        2169: "0193a4a2",
        2272: "29c62f41",
        2440: "8d2046dc",
        2521: "813bb298",
        2562: "a05c7c92",
        2876: "e9053b45",
        2880: "6f011eff",
        2885: "0d4286ac",
        2901: "120447d2",
        2955: "691a507b",
        3141: "a41f22cb",
        3177: "4de6555e",
        3208: "e9218198",
        3253: "95097c70",
        3271: "0206c2c0",
        3279: "804a44cc",
        3284: "03c8bc01",
        3336: "e13b8a66",
        3395: "c14f3070",
        3473: "0a6df125",
        3510: "8a83ef16",
        3587: "607ee9bb",
        3661: "f0bee291",
        3678: "d6fae4f5",
        3692: "fc2ac2a0",
        3778: "dbcc7754",
        4037: "e4eacb02",
        4059: "fb65657d",
        4140: "985396fb",
        4415: "69f24809",
        4456: "7d63688f",
        4496: "64d981c3",
        4585: "f33e6a8d",
        4599: "41d0ffba",
        4870: "91292776",
        4895: "c2ff2b7b",
        4903: "cc7bf105",
        5010: "835cb6ce",
        5034: "8cd72a07",
        5117: "8c18988a",
        5132: "8deaf843",
        5277: "3f00e867",
        5312: "17daecf4",
        5382: "021c9c69",
        5404: "bb5dee42",
        5487: "9f6a658c",
        5612: "00471090",
        5618: "e8943f38",
        5682: "97fd50c4",
        5706: "f3a4e117",
        5864: "36fe8447",
        5898: "407bbe78",
        5994: "b013674e",
        6009: "68aab3a9",
        6024: "2cb08064",
        6326: "bef21d5b",
        6366: "1532c09e",
        6417: "f6efe5e4",
        6486: "24bc5910",
        6531: "0a00c83c",
        6548: "32a9c43b",
        6622: "3a96d1ed",
        6724: "2915952e",
        6725: "f6367e7c",
        6735: "a6c1e226",
        6743: "8d81338c",
        6887: "93006f32",
        6910: "ff6e4120",
        6915: "faa8885f",
        6967: "478428d2",
        7008: "05f63edf",
        7010: "58e3d275",
        7104: "334619e0",
        7117: "e9176869",
        7258: "e68f235b",
        7271: "54b5bbbb",
        7338: "acbc5920",
        7427: "2c490337",
        7551: "80fc44f7",
        7582: "1826d9fa",
        7588: "872a4299",
        7622: "997046d2",
        7676: "66dcb402",
        7787: "6ac6c3aa",
        7892: "225ac48f",
        7925: "a3ca1ddc",
        7959: "f49e13bd",
        8010: "97c33522",
        8075: "1f4f2f73",
        8102: "d0d5fb61",
        8190: "44d0a619",
        8254: "429e417e",
        8273: "7f4126b2",
        8329: "9e6cacc9",
        8367: "f119834e",
        8477: "cacaa001",
        8610: "1e5852de",
        8638: "52e451f2",
        8711: "d23fb651",
        8742: "3ccd526e",
        8821: "796dcf63",
        8951: "ed54ea51",
        9092: "6d100c88",
        9322: "b763b779",
        9402: "5e9b0cac",
        9489: "673810d4",
        9566: "88216ed8",
        9622: "46d03f6f",
        9728: "9ac41ce7",
        9758: "79f9f3f0",
        9777: "48533c18",
        9912: "7497aa19",
      }[e] +
      ".chunk.js"),
    (r.miniCssF = (e) =>
      "static/css/" +
      e +
      "." +
      {
        110: "95828af5",
        299: "d33952a9",
        400: "c2fbb057",
        1390: "e668d6c9",
        1549: "bc05763d",
        1615: "d3f79060",
        1718: "1bca4aea",
        1748: "70ee269f",
        2113: "7c2dc66a",
        2901: "c3537b59",
        3271: "4e4ebc5a",
        3395: "03443f68",
        3661: "6c705120",
        4140: "f1766fb0",
        4903: "3e344aa7",
        5277: "2e990481",
        5682: "9ecef0cd",
        5898: "bafd0633",
        6009: "39813727",
        6967: "4b3a1a0a",
        7010: "2d0380de",
        7787: "a7c49ec3",
        8075: "a5bb20a6",
        8102: "a4caedca",
        8254: "0b3d5044",
        8367: "1170095e",
        8610: "fc646da9",
        8951: "4b3a1a0a",
        9489: "0a7ae7d9",
        9622: "ac26dce4",
        9728: "38679b51",
      }[e] +
      ".chunk.css"),
    (r.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "nostr-assets:";
      r.l = (a, d, c, n) => {
        if (e[a]) e[a].push(d);
        else {
          var f, o;
          if (void 0 !== c)
            for (
              var b = document.getElementsByTagName("script"), i = 0;
              i < b.length;
              i++
            ) {
              var s = b[i];
              if (
                s.getAttribute("src") == a ||
                s.getAttribute("data-webpack") == t + c
              ) {
                f = s;
                break;
              }
            }
          f ||
            ((o = !0),
            ((f = document.createElement("script")).charset = "utf-8"),
            (f.timeout = 120),
            r.nc && f.setAttribute("nonce", r.nc),
            f.setAttribute("data-webpack", t + c),
            (f.src = a)),
            (e[a] = [d]);
          var u = (t, r) => {
              (f.onerror = f.onload = null), clearTimeout(l);
              var d = e[a];
              if (
                (delete e[a],
                f.parentNode && f.parentNode.removeChild(f),
                d && d.forEach((e) => e(r)),
                t)
              )
                return t(r);
            },
            l = setTimeout(
              u.bind(null, void 0, { type: "timeout", target: f }),
              12e4
            );
          (f.onerror = u.bind(null, f.onerror)),
            (f.onload = u.bind(null, f.onload)),
            o && document.head.appendChild(f);
        }
      };
    })(),
    (r.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (r.p = "/app/"),
    (() => {
      if ("undefined" !== typeof document) {
        var e = (e) =>
            new Promise((t, a) => {
              var d = r.miniCssF(e),
                c = r.p + d;
              if (
                ((e, t) => {
                  for (
                    var r = document.getElementsByTagName("link"), a = 0;
                    a < r.length;
                    a++
                  ) {
                    var d =
                      (n = r[a]).getAttribute("data-href") ||
                      n.getAttribute("href");
                    if ("stylesheet" === n.rel && (d === e || d === t))
                      return n;
                  }
                  var c = document.getElementsByTagName("style");
                  for (a = 0; a < c.length; a++) {
                    var n;
                    if (
                      (d = (n = c[a]).getAttribute("data-href")) === e ||
                      d === t
                    )
                      return n;
                  }
                })(d, c)
              )
                return t();
              ((e, t, a, d, c) => {
                var n = document.createElement("link");
                (n.rel = "stylesheet"),
                  (n.type = "text/css"),
                  r.nc && (n.nonce = r.nc),
                  (n.onerror = n.onload =
                    (r) => {
                      if (((n.onerror = n.onload = null), "load" === r.type))
                        d();
                      else {
                        var a = r && r.type,
                          f = (r && r.target && r.target.href) || t,
                          o = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              a +
                              ": " +
                              f +
                              ")"
                          );
                        (o.name = "ChunkLoadError"),
                          (o.code = "CSS_CHUNK_LOAD_FAILED"),
                          (o.type = a),
                          (o.request = f),
                          n.parentNode && n.parentNode.removeChild(n),
                          c(o);
                      }
                    }),
                  (n.href = t),
                  a
                    ? a.parentNode.insertBefore(n, a.nextSibling)
                    : document.head.appendChild(n);
              })(e, c, null, t, a);
            }),
          t = { 9121: 0 };
        r.f.miniCss = (r, a) => {
          t[r]
            ? a.push(t[r])
            : 0 !== t[r] &&
              {
                110: 1,
                299: 1,
                400: 1,
                1390: 1,
                1549: 1,
                1615: 1,
                1718: 1,
                1748: 1,
                2113: 1,
                2901: 1,
                3271: 1,
                3395: 1,
                3661: 1,
                4140: 1,
                4903: 1,
                5277: 1,
                5682: 1,
                5898: 1,
                6009: 1,
                6967: 1,
                7010: 1,
                7787: 1,
                8075: 1,
                8102: 1,
                8254: 1,
                8367: 1,
                8610: 1,
                8951: 1,
                9489: 1,
                9622: 1,
                9728: 1,
              }[r] &&
              a.push(
                (t[r] = e(r).then(
                  () => {
                    t[r] = 0;
                  },
                  (e) => {
                    throw (delete t[r], e);
                  }
                ))
              );
        };
      }
    })(),
    (() => {
      var e = { 9121: 0 };
      (r.f.j = (t, a) => {
        var d = r.o(e, t) ? e[t] : void 0;
        if (0 !== d)
          if (d) a.push(d[2]);
          else if (9121 != t) {
            var c = new Promise((r, a) => (d = e[t] = [r, a]));
            a.push((d[2] = c));
            var n = r.p + r.u(t),
              f = new Error();
            r.l(
              n,
              (a) => {
                if (r.o(e, t) && (0 !== (d = e[t]) && (e[t] = void 0), d)) {
                  var c = a && ("load" === a.type ? "missing" : a.type),
                    n = a && a.target && a.target.src;
                  (f.message =
                    "Loading chunk " + t + " failed.\n(" + c + ": " + n + ")"),
                    (f.name = "ChunkLoadError"),
                    (f.type = c),
                    (f.request = n),
                    d[1](f);
                }
              },
              "chunk-" + t,
              t
            );
          } else e[t] = 0;
      }),
        (r.O.j = (t) => 0 === e[t]);
      var t = (t, a) => {
          var d,
            c,
            [n, f, o] = a,
            b = 0;
          if (n.some((t) => 0 !== e[t])) {
            for (d in f) r.o(f, d) && (r.m[d] = f[d]);
            if (o) var i = o(r);
          }
          for (t && t(a); b < n.length; b++)
            (c = n[b]), r.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return r.O(i);
        },
        a = (self.webpackChunknostr_assets =
          self.webpackChunknostr_assets || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (r.nc = void 0);
})();
