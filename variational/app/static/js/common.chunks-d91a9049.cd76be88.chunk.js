(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [1256],
  {
    5332: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      var i = n(46941),
        r = n(20109),
        a = n(20907),
        o = n(42296),
        s = n(70481);
      function u(e) {
        let { ...t } = e;
        const n = (0, o.W6)();
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className: "nostr-page-nav",
            children: (0, s.jsx)(r.Ay, {
              className: "nostr-page-nav__btn",
              type: "link",
              icon: (0, s.jsx)(a.A, {}),
              onClick: () => {
                t.tourl ? n.push(t.tourl) : n.goBack(-1);
              },
              ...t,
              children: (0, s.jsx)(i.x6, { id: "iH8pgl" }),
            }),
          }),
        });
      }
    },
    6410: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => v });
      var i = n(46941),
        r = n(37209),
        a = n(51477),
        o = n(73741),
        s = n(9413),
        u = n(22233),
        l = n(22416),
        d = n(20109),
        c = n(34160),
        p = n(882),
        f = n.n(p),
        y = n(51656),
        m = (n(57433), n(70481));
      function v(e) {
        let {
          readOnly: t = !1,
          animateShake: n,
          giftEditModalFormItemValue: p,
          setGiftEditModalFormItemValue: v,
        } = e;
        const [h] = s.A.useForm(),
          [b, w] = (0, a.useState)(!1),
          [g, x] = (0, o.A)({ giftTitle: !1, description: !1, image: !1 }),
          T = (0, a.useCallback)(
            (e) => {
              const t = { ...p };
              v({ ...t, ...e }), w(!1);
            },
            [p, v]
          ),
          k = (0, a.useCallback)(
            (e) => {
              if (t) return !1;
              let n = { ...g };
              for (let t in n) n[t] = !1;
              "title" === e
                ? x({ ...n, giftTitle: !0 })
                : "description" === e
                ? x({ ...n, description: !0 })
                : "image" === e && x({ ...n, image: !0 }),
                w(!0);
            },
            [g, t, x]
          );
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)("div", {
              className: "tools-gift-create-giftshow",
              children: [
                (0, m.jsxs)("div", {
                  className: "tools-gift-create-giftshow__title",
                  children: [
                    (0, m.jsx)("h3", {
                      children: (0, m.jsxs)("span", {
                        className: f()({ "border-dashed heart": !t }),
                        onClick: () => {
                          k("title");
                        },
                        children: [
                          p.giftTitle,
                          !t &&
                            (0, m.jsx)("span", {
                              className: "tools-gift-create-giftshow__editicon",
                              children: (0, m.jsx)(y.A, {}),
                            }),
                        ],
                      }),
                    }),
                    (0, m.jsx)("p", {
                      children: (0, m.jsxs)("span", {
                        className: f()({ "border-dashed heart": !t }),
                        onClick: () => {
                          k("description");
                        },
                        children: [
                          p.description,
                          !t &&
                            (0, m.jsx)("span", {
                              className: "tools-gift-create-giftshow__editicon",
                              children: (0, m.jsx)(y.A, {}),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, m.jsx)("div", {
                  className: f()("tools-gift-create-giftshow__content", {
                    "animate-curstom": n,
                  }),
                  children: (0, m.jsx)("div", {
                    className: "create-giftshow-img-container__out",
                    children: (0, m.jsxs)("div", {
                      className: "create-giftshow-img-container__inner",
                      children: [
                        (0, m.jsx)("span", {
                          className: f()({ "border-dashed heart1": !t }),
                          onClick: () => {
                            k("image");
                          },
                          children: (0, m.jsx)("img", {
                            className: "tools-gift-create-giftshow__img",
                            src:
                              p.giftImage && "default" != p.giftImage
                                ? p.giftImage
                                : c,
                            alt: "",
                          }),
                        }),
                        !t &&
                          (0, m.jsx)("span", {
                            onClick: () => {
                              k("image");
                            },
                            className:
                              "tools-gift-create-giftshow__editicon gift-img",
                            children: (0, m.jsx)(y.A, {}),
                          }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, m.jsx)(m.Fragment, {
              children:
                b &&
                (0, m.jsx)(u.A, {
                  centered: !0,
                  open: b,
                  width: "400px",
                  title: null,
                  zIndex: 1002,
                  onCancel: () => {
                    h.resetFields(), w(!1);
                  },
                  footer: null,
                  children: (0, m.jsxs)(s.A, {
                    name: "giftEditForm",
                    className: "gift-modal-form",
                    onFinish: T,
                    autoComplete: "off",
                    form: h,
                    wrapperCol: { span: 24 },
                    style: { maxWidth: 400 },
                    layout: "vertical",
                    children: [
                      g.giftTitle &&
                        (0, m.jsx)(s.A.Item, {
                          name: "giftTitle",
                          label: r.Ru._({ id: "x7yeJL" }),
                          rules: [
                            { required: !0, message: r.Ru._({ id: "h9bSFg" }) },
                            { type: "string", min: 1, max: 40 },
                          ],
                          children: (0, m.jsx)(l.A, {}),
                        }),
                      g.description &&
                        (0, m.jsx)(s.A.Item, {
                          name: "description",
                          label: "Well-Wishing Words",
                          rules: [
                            { required: !0, message: r.Ru._({ id: "c2u1o3" }) },
                            { type: "string", min: 1, max: 100 },
                          ],
                          children: (0, m.jsx)(l.A, {
                            placeholder: r.Ru._({ id: "OlhjDE" }),
                          }),
                        }),
                      g.image &&
                        (0, m.jsx)(m.Fragment, {
                          children: (0, m.jsx)(s.A.Item, {
                            name: "giftImage",
                            label: r.Ru._({ id: "CMq56c" }),
                            extra: (0, m.jsx)("p", {
                              className: "gift-modal-form-desc",
                              children: (0, m.jsx)(i.x6, { id: "waJGl6" }),
                            }),
                            rules: [
                              {
                                required: !0,
                                message: r.Ru._({ id: "69uIXb" }),
                              },
                              {
                                type: "url",
                                message: r.Ru._({ id: "2Hxk2h" }),
                              },
                              { type: "string", min: 6 },
                            ],
                            children: (0, m.jsx)(l.A, {}),
                          }),
                        }),
                      (0, m.jsx)(s.A.Item, {
                        className: "flex justify-content-center",
                        children: (0, m.jsx)(d.Ay, {
                          type: "primary",
                          htmlType: "submit",
                          style: { width: "120px" },
                          children: (0, m.jsx)(i.x6, { id: "tfDRzk" }),
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
    },
    7763: () => {},
    8455: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l, h: () => u });
      var i,
        r,
        a = n(51477);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          o.apply(null, arguments)
        );
      }
      function s(e, t) {
        let { title: n, titleId: s, ...u } = e;
        return a.createElement(
          "svg",
          o(
            {
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": s,
            },
            u
          ),
          n ? a.createElement("title", { id: s }, n) : null,
          i ||
            (i = a.createElement(
              "g",
              { clipPath: "url(#clip0_311_1251)" },
              a.createElement("path", {
                d: "M18.3332 9.2333V9.99997C18.3321 11.797 17.7503 13.5455 16.6743 14.9848C15.5983 16.4241 14.0859 17.477 12.3626 17.9866C10.6394 18.4961 8.79755 18.4349 7.1119 17.8121C5.42624 17.1894 3.98705 16.0384 3.00897 14.5309C2.03089 13.0233 1.56633 11.24 1.68457 9.4469C1.80281 7.65377 2.49751 5.94691 3.66507 4.58086C4.83263 3.21482 6.41049 2.26279 8.16333 1.86676C9.91617 1.47073 11.7501 1.65192 13.3915 2.3833M18.3332 3.3333L9.99984 11.675L7.49984 9.17497",
                stroke: "#7DBC73",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            )),
          r ||
            (r = a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "clip0_311_1251" },
                a.createElement("rect", {
                  width: 20,
                  height: 20,
                  fill: "white",
                })
              )
            ))
        );
      }
      const u = a.forwardRef(s),
        l =
          n.p + "static/media/checkCircle.6abc5049b90425978cb8dc4bafc3afec.svg";
    },
    10760: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => b });
      var i = n(42471),
        r = n(35283),
        a = n(51477),
        o = n(18162),
        s = n(539),
        u = n(11403),
        l = n(43787),
        d = n(2418),
        c = n(45328),
        p = n(65189),
        f = n(94061),
        y = n(99609),
        m = n(12866);
      const v = () => {
          const e = (0, o.i)();
          return null === i.zW || void 0 === i.zW ? void 0 : i.zW[e];
        },
        h = Number((0, r.jr)("sale")) || 0;
      function b() {
        const e = v(),
          t = (0, o.i)(),
          { address: n, chainId: r } = (0, s.F)(),
          b = (0, u.e)(),
          w = (0, l.U)(),
          { writeContractAsync: g } = (0, d.x)(),
          { switchChain: x } = (0, c.R)(),
          T = (0, a.useMemo)(() => Object.keys(i.zW), []),
          k = (0, a.useMemo)(
            () => ({
              address: null === e || void 0 === e ? void 0 : e.address,
              abi: null === e || void 0 === e ? void 0 : e.abi,
              enabled: !!e && !!n,
            }),
            [e, n]
          ),
          {
            data: A,
            isFetching: _,
            refetch: C,
          } = (0, p.Q)({ ...k, functionName: "getNodeSales", args: [h] }),
          N = (0, a.useMemo)(
            () =>
              A
                ? {
                    id: A[0],
                    startTime: A[1],
                    title: A[2],
                    quoteToken: A[3],
                    price: A[4],
                    amount: A[5],
                    sold: A[6],
                    enabled: A[7],
                  }
                : null,
            [A]
          ),
          {
            refetch: j,
            isFetching: S,
            data: R,
          } = (0, p.Q)({ ...k, functionName: "getUser", args: [n] }),
          I = (0, a.useMemo)(
            () =>
              R
                ? { boughtCount: Number(R[0]), bindCount: Number(R[1]) }
                : { boughtCount: 0, bindCount: 0 },
            [R]
          ),
          M = (0, a.useMemo)(
            () => ({
              address: null === N || void 0 === N ? void 0 : N.quoteToken,
              abi: i.bx,
              enabled: !!e && !(null === N || void 0 === N || !N.quoteToken),
            }),
            [null === N || void 0 === N ? void 0 : N.quoteToken, e]
          ),
          {
            data: E,
            refetch: O,
            isLoading: P,
          } = (0, p.Q)({
            ...M,
            functionName: "allowance",
            args: [n, null === e || void 0 === e ? void 0 : e.address],
          }),
          { data: L, isLoading: B } = (0, p.Q)({
            ...M,
            queryKey: ["tokenName"],
            functionName: "name",
          }),
          { data: U, isLoading: F } = (0, p.Q)({
            ...M,
            functionName: "symbol",
          }),
          { data: q, isLoading: D } = (0, p.Q)({
            ...M,
            functionName: "decimals",
          }),
          {
            data: G,
            refetch: H,
            isLoading: $,
          } = (0, p.Q)({ ...M, functionName: "balanceOf", args: [n] }),
          z = (0, a.useMemo)(() => P || $ || B || F || D, [P, $, D, B, F]),
          W = (0, a.useMemo)(
            () => ({
              name: L,
              symbol: U,
              decimals: q,
              balance: G,
              formatBalance: G
                ? (0, y.A)(Number(G) || 0)
                    .div(10 ** Number(q))
                    .toFixed(q)
                : 0,
              allowance: E,
            }),
            [E, G, q, U, L]
          ),
          K = (0, a.useCallback)(
            async function (n) {
              let i =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              const r = await g({
                ...M,
                functionName: "approve",
                args: [
                  null === e || void 0 === e ? void 0 : e.address,
                  BigInt(n),
                ],
                chainId: t,
              });
              return (
                i && (await (0, f.n)(w, { hash: r }, 1), O && (await O())), r
              );
            },
            [t, null === e || void 0 === e ? void 0 : e.address, O, M, w, g]
          ),
          V = (0, a.useCallback)(
            async (e) => {
              let { count: i, code: r = 1e6 } = e;
              const a = Number(r) || 1e6,
                o = null === N || void 0 === N ? void 0 : N.price,
                s = null === N || void 0 === N ? void 0 : N.id,
                u = G;
              if (o * BigInt(i) > u) throw new Error("Insufficient balance");
              E < o * BigInt(i) && (await K(o * BigInt(i)));
              const l = await b.estimateContractGas({
                ...k,
                functionName: "buyNode",
                args: [s, i, BigInt(a)],
                account: n,
              });
              console.log("buyNode gas", l);
              return await g({
                ...k,
                functionName: "buyNode",
                args: [s, i, BigInt(a)],
                chainId: t,
              });
            },
            [
              null === N || void 0 === N ? void 0 : N.price,
              null === N || void 0 === N ? void 0 : N.id,
              G,
              E,
              b,
              k,
              n,
              g,
              t,
              K,
            ]
          ),
          J = (0, a.useCallback)(
            async (e) => (await (0, f.n)(w, { hash: e }, 1), O && O(), e),
            [O, w]
          );
        return (
          (0, m.A)(
            () => {
              r &&
                (T.includes(
                  null === r || void 0 === r ? void 0 : r.toString()
                ) ||
                  x({ chainId: Number(T[0]) }));
            },
            [t, k, T, x, r],
            { wait: 500 }
          ),
          {
            nodeSale: N,
            tokenInfo: W,
            loadingNodeSales: _,
            isLoading: z,
            refetchAllowance: O,
            refetchBalance: H,
            onApprove: K,
            onBuyNode: V,
            address: n,
            userNodeResult: I,
            reloadGetUser: j,
            onWaitingTxConfirm: J,
            chainId: t,
            supportChain: T,
            switchChain: x,
          }
        );
      }
    },
    13231: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var i = n(9567),
        r = n(70481);
      function a(e) {
        let { id: t, description: n, type: a = "success", ...o } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(i.A, {
            className: "form-alert",
            description: n,
            type: a,
            ...o,
          }),
        });
      }
    },
    16842: (e, t, n) => {
      var i = {
        "./Aquarius.png": 83822,
        "./Aries.png": 13275,
        "./Cancer.png": 45009,
        "./Capricorn.png": 69068,
        "./Gemini.png": 29780,
        "./Leo.png": 9469,
        "./Libra.png": 18663,
        "./Pisces.png": 62750,
        "./Sagittarius.png": 82583,
        "./Scorpio.png": 83330,
        "./Taurus.png": 9993,
        "./Virgo.png": 15080,
        "./Winner.png": 27876,
        "./fireworks.png": 95271,
        "./win.png": 81747,
      };
      function r(e) {
        var t = a(e);
        return n(t);
      }
      function a(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return i[e];
      }
      (r.keys = function () {
        return Object.keys(i);
      }),
        (r.resolve = a),
        (e.exports = r),
        (r.id = 16842);
    },
    18546: (e, t, n) => {
      "use strict";
      n.d(t, { D9: () => w, Gp: () => h, aZ: () => v, zH: () => b });
      var i = n(51477),
        r = n(12472),
        a = n(15928),
        o = n(35188),
        s = n(90364),
        u = n(73526),
        l = n(800),
        d = n(99609),
        c = n(17876),
        p = n.n(c);
      const f = n(64021);
      p().extend(f);
      const y =
          "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
        m = "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
        v =
          (o.Qe.npubEncode((0, o.lG)((0, s.gh)())),
          () => {
            const { execQueryNostrAsync: e } = (0, r.Ay)();
            return {
              handleLaunchMintActivityAsync: (0, i.useCallback)(
                async (t) => {
                  var n, i, r, a, o, s, u, l, d, c, f, y;
                  const v = p()().utcOffset(),
                    h = p()(t.timeRange[0]).subtract(v, "minute").unix(),
                    b = p()(t.timeRange[1]).subtract(v, "minute").unix(),
                    w =
                      null !== t &&
                      void 0 !== t &&
                      null !== (n = t.slogan) &&
                      void 0 !== n &&
                      n.trim()
                        ? encodeURIComponent(
                            null === t ||
                              void 0 === t ||
                              null === (i = t.slogan) ||
                              void 0 === i
                              ? void 0
                              : i.trim()
                          )
                        : "null",
                    g =
                      null !== t &&
                      void 0 !== t &&
                      null !== (r = t.description) &&
                      void 0 !== r &&
                      r.trim()
                        ? encodeURIComponent(
                            null === t ||
                              void 0 === t ||
                              null === (a = t.description) ||
                              void 0 === a
                              ? void 0
                              : a.trim()
                          )
                        : "null",
                    x =
                      null !== t &&
                      void 0 !== t &&
                      null !== (o = t.twitter) &&
                      void 0 !== o &&
                      o.trim()
                        ? encodeURIComponent(
                            null === t ||
                              void 0 === t ||
                              null === (s = t.twitter) ||
                              void 0 === s
                              ? void 0
                              : s.trim()
                          )
                        : "null",
                    T =
                      null !== t &&
                      void 0 !== t &&
                      null !== (u = t.discord) &&
                      void 0 !== u &&
                      u.trim()
                        ? encodeURIComponent(
                            null === t ||
                              void 0 === t ||
                              null === (l = t.discord) ||
                              void 0 === l
                              ? void 0
                              : l.trim()
                          )
                        : "null",
                    k =
                      null !== t &&
                      void 0 !== t &&
                      null !== (d = t.telegram) &&
                      void 0 !== d &&
                      d.trim()
                        ? encodeURIComponent(
                            null === t ||
                              void 0 === t ||
                              null === (c = t.telegram) ||
                              void 0 === c
                              ? void 0
                              : c.trim()
                          )
                        : "null",
                    A =
                      null !== t &&
                      void 0 !== t &&
                      null !== (f = t.website) &&
                      void 0 !== f &&
                      f.trim()
                        ? encodeURIComponent(
                            null === t ||
                              void 0 === t ||
                              null === (y = t.website) ||
                              void 0 === y
                              ? void 0
                              : y.trim()
                          )
                        : "null",
                    _ = `create activity ${
                      null === t || void 0 === t ? void 0 : t.asset
                    } amount ${
                      null === t || void 0 === t ? void 0 : t.amount
                    } number ${
                      null === t || void 0 === t ? void 0 : t.number
                    } address ${
                      null === t || void 0 === t ? void 0 : t.addressMints
                    } fee ${
                      null === t || void 0 === t ? void 0 : t.fee
                    } startTime ${h} endTime ${b} slogan ${w} description ${g} twitter ${x} discord ${T} telegram ${k} website ${A} isRefund ${
                      null === t || void 0 === t ? void 0 : t.isRefund
                    } mintFeeSymbol ${
                      null === t || void 0 === t ? void 0 : t.priceAsset
                    }`,
                    C = await e({
                      queryCommand: _,
                      sendToNostrAddress: m,
                      isUseLocalRobotToSend: !1,
                    });
                  return null === C || void 0 === C ? void 0 : C.result;
                },
                [e]
              ),
            };
          }),
        h = (e, t) => {
          const [n, r] = (0, i.useState)(0),
            [o, s] = (0, i.useState)(!1),
            { nostrAccount: c, npubNostrAccount: p } = (0, a.d4)((e) => {
              let { user: t } = e;
              return t;
            }),
            { tokenList: f } = (0, a.d4)((e) => {
              let { market: t } = e;
              return t;
            }),
            y = (0, i.useCallback)(
              async (n) => {
                if ((s(!0), c && n)) {
                  const i = await (0, u.TM)({
                    token: n,
                    owner: e || p,
                    spender: t || m,
                  }).catch((e) => (s(!1), null));
                  if (!i)
                    return (
                      r({ amount: 0, amountShow: "0.0000" }),
                      { amount: 0, amountShow: "0.0000" }
                    );
                  const a = f.find((e) => e.name == n),
                    o = i.data,
                    c = {
                      ...o,
                      amountShow: (0, l.yC)(
                        (0, d.A)(
                          Number(
                            null === o || void 0 === o ? void 0 : o.amount
                          ) || 0
                        )
                          .div(null === a || void 0 === a ? void 0 : a.decimals)
                          .toNumber(),
                        (null === a || void 0 === a ? void 0 : a.reserve) || 0,
                        "floor"
                      ),
                    };
                  return r(c), s(!1), { data: c };
                }
              },
              [c, e, p, t, f]
            );
          return {
            handleQueryAllowance: (0, i.useCallback)(
              async (e) => await y(e),
              [y]
            ),
            handleQueryAllowanceAsync: y,
            allowance: n,
            loading: o,
          };
        },
        b = () => {
          const { execQueryNostrAsync: e } = (0, r.Ay)();
          return {
            handleApproveAsync: (0, i.useCallback)(
              async function () {
                const t = `approve ${
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0
                  } ${arguments.length > 1 ? arguments[1] : void 0} to ${m}`,
                  n = await e({
                    queryCommand: t,
                    sendToNostrAddress: y,
                    isUseLocalRobotToSend: !1,
                  });
                return null === n || void 0 === n ? void 0 : n.result;
              },
              [e]
            ),
            handleApproveAsyncByCommand: (0, i.useCallback)(
              async (t) => {
                const n = t,
                  i = await e({
                    queryCommand: n,
                    sendToNostrAddress: y,
                    isUseLocalRobotToSend: !1,
                  });
                return null === i || void 0 === i ? void 0 : i.result;
              },
              [e]
            ),
          };
        },
        w = () => {
          const { execQueryNostrAsync: e } = (0, r.Ay)(),
            t = (0, i.useCallback)(
              async (t, n) => {
                const i = `mint activity ${t} share ${n}`,
                  r = await e({
                    queryCommand: i,
                    sendToNostrAddress: m,
                    isUseLocalRobotToSend: !1,
                  });
                return null === r || void 0 === r ? void 0 : r.result;
              },
              [e]
            );
          return {
            handleSend: (0, i.useCallback)(
              async (t) => {
                const n = await e({
                  queryCommand: t,
                  sendToNostrAddress: m,
                  isUseLocalRobotToSend: !1,
                });
                return null === n || void 0 === n ? void 0 : n.result;
              },
              [e]
            ),
            handleMintActivityAsync: t,
          };
        };
    },
    20050: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u, h: () => s });
      var i,
        r = n(51477);
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          a.apply(null, arguments)
        );
      }
      function o(e, t) {
        let { title: n, titleId: o, ...s } = e;
        return r.createElement(
          "svg",
          a(
            {
              width: 14,
              height: 14,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": o,
            },
            s
          ),
          n ? r.createElement("title", { id: o }, n) : null,
          i ||
            (i = r.createElement("path", {
              d: "M13.5621 1V10.75C13.5621 10.8992 13.5029 11.0423 13.3974 11.1477C13.2919 11.2532 13.1488 11.3125 12.9996 11.3125C12.8505 11.3125 12.7074 11.2532 12.6019 11.1477C12.4964 11.0423 12.4371 10.8992 12.4371 10.75V2.3575L1.39714 13.3975C1.29051 13.4969 1.14947 13.551 1.00375 13.5484C0.858023 13.5458 0.718984 13.4868 0.615924 13.3837C0.512864 13.2807 0.453831 13.1416 0.45126 12.9959C0.448688 12.8502 0.502781 12.7091 0.602141 12.6025L11.6421 1.5625H3.24964C3.10046 1.5625 2.95738 1.50324 2.85189 1.39775C2.7464 1.29226 2.68714 1.14918 2.68714 1C2.68714 0.850816 2.7464 0.707742 2.85189 0.602252C2.95738 0.496763 3.10046 0.4375 3.24964 0.4375H12.9996C13.1488 0.4375 13.2919 0.496763 13.3974 0.602252C13.5029 0.707742 13.5621 0.850816 13.5621 1Z",
              fill: "white",
            }))
        );
      }
      const s = r.forwardRef(o),
        u =
          n.p +
          "static/media/arrow_up_right.a1e19df9f324857ef79664608c2190b2.svg";
    },
    21902: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => w });
      var i = n(37209),
        r = n(2442),
        a = n(9413),
        o = n(3080),
        s = n(47039),
        u = n(22416),
        l = n(51477),
        d = n(60395),
        c = n(62401),
        p = n.n(c);
      const f = async () => {
          let e = null;
          e = p()().bitcoin.fees;
          return await e.getFeesRecommended();
        },
        y = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const {
            data: t,
            run: n,
            error: i,
            loading: r,
          } = (0, d.A)(f, { pollingInterval: 3e4, ready: e, manual: !0 });
          return (
            (0, l.useEffect)(() => {
              e && n();
            }, [e, n]),
            { feesRecommended: t, loading: r, error: i, run: n }
          );
        };
      var m = n(431),
        v = n(75584),
        h = n(70481);
      const b = {
        Slow: { feeKey: "hourFee", tips: "\u2248 1 hours" },
        Avg: { feeKey: "halfHourFee", tips: "\u2248 30 minutes" },
        Fast: { feeKey: "fastestFee", tips: "\u2248 10 minutes" },
        Custom: { feeKey: "custom" },
      };
      function w(e) {
        let { setFee: t, ready: n = !1, ratio: d = 0 } = e;
        const { feesRecommended: c, loading: p, error: f, run: w } = y(n),
          [g, x] = (0, l.useState)("Fast"),
          T = (0, l.useCallback)(
            (e) => {
              let {
                target: { value: n },
              } = e;
              x(n), "Custom" === n ? t("") : c && t(c[b[n].feeKey]);
            },
            [c, t, x]
          ),
          k = (0, l.useMemo)(
            () =>
              c
                ? Object.keys(b).map((e) => {
                    const t = e,
                      n =
                        "Custom" !== e
                          ? (c[b[e].feeKey] * (1 + d)).toFixed(0)
                          : "",
                      i = "Custom" === e ? "" : b[e].tips;
                    return {
                      label: (0, h.jsxs)("div", {
                        className: "nst-network-fee",
                        style: { height: "100%" },
                        children: [
                          (0, h.jsx)("div", {
                            align: "center",
                            className: "fee-title",
                            children: e,
                          }),
                          "Custom" !== e &&
                            (0, h.jsxs)(h.Fragment, {
                              children: [
                                (0, h.jsxs)("div", {
                                  align: "center",
                                  className: "fee-value",
                                  children: [
                                    n,
                                    " ",
                                    (0, h.jsx)("span", {
                                      className: "pl5",
                                      children: "sats/vB",
                                    }),
                                  ],
                                }),
                                (0, h.jsx)("div", {
                                  align: "center",
                                  className: "fee-tip",
                                  children: i,
                                }),
                              ],
                            }),
                        ],
                      }),
                      value: t,
                    };
                  })
                : [],
            [c, d]
          );
        return (
          (0, m.A)(() => {
            g && c && t(c[b[g].feeKey]);
          }, [g, c, t]),
          (0, h.jsx)(h.Fragment, {
            children: (0, h.jsxs)(r.A, {
              spinning: p,
              children: [
                (0, h.jsx)(a.A.Item, {
                  label: i.Ru._({ id: "KXkywD" }),
                  className: "nst-brc20-fee",
                  children:
                    c && !f
                      ? (0, h.jsx)(o.Ay.Group, {
                          className: "deposit-brc20-fees",
                          options: k,
                          onChange: T,
                          value: g,
                          optionType: "button",
                          buttonStyle: "solid",
                        })
                      : (0, h.jsxs)("div", {
                          className: "fee-empty",
                          children: [
                            (0, h.jsx)(s.A, {
                              description: "Network abnormal, click to refresh",
                            }),
                            (0, h.jsx)(v.A, {
                              className: "nst-brc20-fee-reload",
                              onClick: () => {
                                w();
                              },
                            }),
                          ],
                        }),
                }),
                "Custom" === g &&
                  (0, h.jsx)(a.A.Item, {
                    name: "fee",
                    label: i.Ru._({ id: "CA/vDw" }),
                    style: { marginTop: "10px" },
                    rules: [
                      (e) => {
                        let { getFieldValue: t } = e;
                        return {
                          validator: (e, t) =>
                            t
                              ? Number.isNaN(Number(t)) || Number(t) < 0
                                ? Promise.reject(
                                    new Error(i.Ru._({ id: "Kv/sFZ" }))
                                  )
                                : Number(t) <
                                  (
                                    Number(
                                      null === c || void 0 === c
                                        ? void 0
                                        : c.hourFee
                                    ) *
                                    (1 + d)
                                  ).toFixed(0)
                                ? Promise.reject(
                                    new Error(i.Ru._({ id: "SA+h6l" }))
                                  )
                                : Promise.resolve()
                              : Promise.resolve(),
                        };
                      },
                    ],
                    children: (0, h.jsx)(u.A, {
                      suffix: "sats/vb",
                      style: { maxWidth: "200px", height: "40px" },
                      onChange: (e) => {
                        let {
                          target: { value: n },
                        } = e;
                        t(n);
                      },
                    }),
                  }),
              ],
            }),
          })
        );
      }
    },
    24032: (e, t, n) => {
      "use strict";
      n.d(t, { g6: () => w });
      var i,
        r = n(3726),
        a = n(52332),
        o = n(90312),
        s = n(32833),
        u = n(64004),
        l = n(13084),
        d = (n(96964), n(90839)),
        c = n(27221),
        p = n(22666),
        f = (n(90292), n(70481));
      const y = new s.E(),
        m = "92461524d3cfcb3d78b38b5dbd6a6ce3",
        v = {
          name: "Variational",
          description: "Variational",
          url:
            (null === (i = location) || void 0 === i ? void 0 : i.origin) ||
            "https://variational.link/",
          icons: ["https://avatars.githubusercontent.com/u/37784886"],
        },
        h = [o.E3H],
        b =
          (null === o.E3H || void 0 === o.E3H || o.E3H.id,
          new l.D({ networks: h, projectId: m, ssr: !1 }));
      (0, d.Z)({ chains: h, transports: { [h[0].id]: (0, c.L)() } });
      function w(e) {
        let { children: t } = e;
        return (0, f.jsx)(a.x, {
          config: b.wagmiConfig,
          children: (0, f.jsx)(u.Ht, { client: y, children: t }),
        });
      }
      (0, r.sX)({
        adapters: [b],
        networks: h,
        projectId: m,
        metadata: v,
        showWallets: !0,
        featuredWalletIds: [
          "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
          "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
          "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
          "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66",
          "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
        ],
        features: {
          analytics: !1,
          swaps: !1,
          onramp: !1,
          socials: [],
          email: !1,
        },
      });
    },
    35283: (e, t, n) => {
      "use strict";
      function i(e) {
        const t = new URL(window.location.href);
        return new URLSearchParams(t.search).get(e);
      }
      function r(e) {
        var t = window.location.hash.split("?")[1];
        if (t)
          for (var n = t.split("&"), i = 0; i < n.length; i++) {
            var r = n[i].split("=");
            if (r[0] == e) return r[1];
          }
        return "";
      }
      n.d(t, { JE: () => r, jr: () => i });
    },
    40015: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var i = n(3726),
        r = n(31718),
        a = n(64956);
      const o = () => {
        const { open: e } = (0, i.JS)(),
          { connectAsync: t } = (0, r.e)();
        return {
          connectWallet: async (n) => {
            try {
              if (window.ethereum) {
                const e = await t({ connector: (0, a.b)() });
                if (null !== e && void 0 !== e && e.accounts) {
                  const t = e.accounts[0];
                  n && n(t);
                }
              } else await e({ view: "connect" });
            } catch (i) {
              console.error("connect error\uff1a", i);
            }
          },
        };
      };
    },
    42471: (e, t, n) => {
      "use strict";
      n.d(t, { bx: () => d, zW: () => f, Ub: () => y });
      const i = 1,
        r = 11155111,
        a = 8453,
        o = JSON.parse(
          '{"HV":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"to","type":"bytes"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"from","type":"bytes"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"aaveDepositAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aavePool","outputs":[{"internalType":"contract AavePool","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aaveWithdrawAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"to","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAPR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"account","type":"bytes"}],"name":"getCumulativeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"depositId","type":"uint256"}],"name":"getDeposit","outputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"to","type":"bytes"},{"internalType":"uint256","name":"height","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDepositCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"withdrawId","type":"uint256"}],"name":"getWithdraw","outputs":[{"internalType":"bytes","name":"from","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"time","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWithdrawCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_usdt","type":"address"},{"internalType":"contract AavePool","name":"_aavePool","type":"address"},{"internalType":"address","name":"_multiSig","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"uint256","name":"_minimumDeposit","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"interest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investmentAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiSig","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reInvestment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMinimumDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDepositAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"from","type":"bytes"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        s = JSON.parse(
          '{"HV":[{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}]}'
        ),
        u = JSON.parse(
          '{"HV":[{"inputs":[{"internalType":"address","name":"_receiver","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"bytes32","name":"npub","type":"bytes32"},{"indexed":false,"internalType":"address","name":"rewardAddress","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"}],"name":"NodeBinded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"nodeId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"inviteCode","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NodePurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NodeSaleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"string","name":"_title","type":"string"},{"internalType":"address","name":"_quoteToken","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addNodeSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_npub","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_reward","type":"address"}],"name":"bind","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"uint256","name":"_code","type":"uint256"}],"name":"buyNode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getBind","outputs":[{"internalType":"bytes32","name":"npub","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"rewardAddress","type":"address"},{"internalType":"address","name":"buyer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getNodeSales","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"sold","type":"uint256"},{"internalType":"bool","name":"enabled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNodeSalesLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getPurchase","outputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"nodeId","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"uint256","name":"inviteCode","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPurchaseCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUser","outputs":[{"internalType":"uint256","name":"boughtCount","type":"uint256"},{"internalType":"uint256","name":"bindCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchaseCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        l = JSON.parse(
          '{"HV":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AccessControlBadConfirmation","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ChannelMiningRewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"ChannelMiningRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"npub","type":"string"},{"indexed":false,"internalType":"address","name":"rewardAddress","type":"address"},{"indexed":true,"internalType":"address","name":"buyer","type":"address"}],"name":"NodeBinded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"rewardType","type":"uint8"}],"name":"NodeMiningRewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"rewardType","type":"uint8"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"NodeMiningRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"NodeMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"nodeNpub","type":"bytes32"}],"name":"NodeNpubBound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NodeSaleAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"rewards","type":"uint256"}],"name":"addChannelMiningRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes32","name":"nodeNpub","type":"bytes32"}],"name":"bindNpub","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"canBecomeOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimChannelMiningRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"staticAmount","type":"uint256"},{"internalType":"uint256","name":"dynamicAmount","type":"uint256"},{"internalType":"uint256","name":"airdropAmount","type":"uint256"}],"name":"claimNodeMiningRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"getBuyerAllocationCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChannelMiningRewards","outputs":[{"components":[{"internalType":"uint256","name":"rewards","type":"uint256"},{"internalType":"uint256","name":"claimedRewards","type":"uint256"}],"internalType":"struct LNNodeNFT.ChannelMiningRewards","name":"channelMiningReward","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"}],"name":"getMintAvailable","outputs":[{"internalType":"uint256","name":"totalCount","type":"uint256"},{"internalType":"uint256","name":"mintableCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getNode","outputs":[{"components":[{"internalType":"address","name":"ownerAddr","type":"address"},{"internalType":"bytes32","name":"nodeNpub","type":"bytes32"},{"internalType":"address","name":"buyer","type":"address"}],"internalType":"struct LNNodeNFT.LNNode","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getNodeMiningRewards","outputs":[{"components":[{"internalType":"uint256","name":"airdropRewards","type":"uint256"},{"internalType":"uint256","name":"airdropClaimedRewards","type":"uint256"},{"internalType":"uint256","name":"staticUnlockedRewards","type":"uint256"},{"internalType":"uint256","name":"staticTotalRewards","type":"uint256"},{"internalType":"uint256","name":"staticClaimedRewards","type":"uint256"},{"internalType":"uint256","name":"dynamicUnlockedRewards","type":"uint256"},{"internalType":"uint256","name":"dynamicTotalRewards","type":"uint256"},{"internalType":"uint256","name":"dynamicClaimedRewards","type":"uint256"}],"internalType":"struct LNNodeNFT.NodeMiningRewards","name":"nodeMiningReward","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNodeSaleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"nodeNpub","type":"bytes32"}],"name":"getTokenIdByNodeNpub","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getTokenIdByOwner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"rewards","type":"uint256"}],"name":"initChannelMiningRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"airdropAmount","type":"uint256"},{"internalType":"uint256","name":"staticAmount","type":"uint256"},{"internalType":"uint256","name":"dynamicAmount","type":"uint256"}],"name":"initNodeMiningRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32","name":"nodeNpub","type":"bytes32"}],"name":"mintNode","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"callerConfirmation","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nodeSaleAddress","type":"address"}],"name":"setNodeSaleAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateDynamicUnlockedRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateStaticUnlockedRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        d = s.HV,
        c =
          (o.HV,
          o.HV,
          {
            [a]: {
              address: "0xd2c2fea0Dee31C7F95004Fc8b15Ace8B2fb9eBb2",
              abi: u.HV,
            },
          }),
        p = {
          [a]: {
            address: "0xc3426c3BdDB1C41c5b2b793b7553667e94aB2669",
            abi: l.HV,
          },
        },
        f = c,
        y = p;
    },
    46614: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => w });
      var i = n(37209),
        r = n(15928),
        a = n(79579),
        o = n(62839);
      n(25495), n(13740).Buffer;
      const s = function (e) {
        return e.subarray(1, 33);
      };
      const u = new (n(3925).A.Axios)({ baseURL: "https://mempool.space/" });
      var l = n(11654),
        d = n(13740).Buffer;
      const c = (0, o.dg)(l);
      async function p(e, t, n, i, r, o) {
        let l = "testnet" === e ? a.o8.testnet : a.o8.bitcoin;
        const p = c.fromPublicKey(d.from(t, "hex"), { network: l }),
          f = p.tweak(a.Et.taggedHash("TapTweak", s(p.publicKey)));
        let y = 0;
        const m = a.KT.p2tr({ pubkey: s(f.publicKey), network: l }),
          v = new a.iL({ network: l });
        for (let s = 0; n && s < n.length; s++) {
          const e = d.from(n[s], "utf8"),
            t = a.KT.embed({ data: [e] });
          v.addOutput({ value: 0, script: t.output });
        }
        let h = 0;
        for (let a = 0; i && a < i.length; a++)
          (h += i[a].value),
            v.addOutput({ value: i[a].value, address: i[a].address });
        let b = await (async function (e, t) {
          return new Promise((n, i) => {
            let r;
            const a = async () => {
              try {
                let i = `${t}/api/address/${e}/utxo`;
                i =
                  "livenet" === t || "mainnet" === t
                    ? `api/address/${e}/utxo`
                    : `${t}4/api/address/${e}/utxo`;
                const a = await u.get(`${i}`),
                  o = a.data ? JSON.parse(a.data) : void 0;
                o.length > 0 && (n(o), clearInterval(r));
              } catch (a) {
                i(a), clearInterval(r);
              }
            };
            a(), (r = setInterval(a, 5e3));
          });
        })(m.address, e);
        b.sort((e, t) => t.value - e.value);
        let w = [];
        for (let a = 0; a < b.length; a++)
          if (b[a].status.confirmed) {
            let e = b[a].txid,
              t = b[a].vout,
              n = b[a].value;
            if (
              (v.addInput({
                hash: e,
                index: t,
                witnessUtxo: { value: n, script: m.output },
                tapInternalKey: s(p.publicKey),
              }),
              w.push({ index: v.inputCount - 1, address: m.address }),
              (y += n),
              y >= h + o)
            )
              break;
          }
        y > h + o && v.addOutput({ value: y - h - o, address: r });
        return {
          bytesize: v.toBuffer().byteLength,
          unsignedHex: v.toHex(),
          signList: w,
          utxos: b,
        };
      }
      a.f0(l);
      const f = a.Et.sha256;
      var y = n(90364),
        m = n(31418),
        v = n(51477),
        h = n(23388);
      const b = async (e, t, n, i, r, a) => {
          const o = [e],
            s = a || [
              {
                value: Number("100000"),
                address:
                  "bc1prz29tcyq926tvgpskdkd037jrxvjxzmxwu2apssxnhy6gs7cmr8q6kex7v",
              },
              {
                value: Number("100000"),
                address:
                  "bc1ppyhr8t9hh6s7h774aj9ruugyujd3e76lmw2s3mx33flak72vk06qvm2j82",
              },
            ];
          return await p(r, i, o, s, n, t);
        },
        w = () => {
          const {
              account: e,
              curBtcWalletName: t,
              btcPublicKey: n,
            } = (0, r.d4)((e) => {
              let { user: t } = e;
              return t;
            }),
            { signPsbt: o, sendPsbt: s, getBalance: l } = (0, h.A)(t);
          return {
            handleBRC20Pay: (0, v.useCallback)(
              async function (r) {
                let o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 5,
                  s =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  l = arguments.length > 3 ? arguments[3] : void 0,
                  d = "";
                const c = (0, m.t6)(e),
                  p = c.network;
                if ("testnet" === p && "okxbtc" === t)
                  throw new Error(
                    "Okxwallet testnet does not support sendPsbt."
                  );
                if ("p2tr" !== c.type)
                  throw new Error(i.Ru._({ id: "O+n9IM" }));
                if ("testnet" === p) throw new Error(i.Ru._({ id: "rakTlS" }));
                let v = 0,
                  h = null === t || void 0 === t ? void 0 : t.toLowerCase();
                try {
                  if (
                    "unisat" !== h ||
                    !window.unisat ||
                    !window.unisat.getBalance
                  )
                    throw new Error(i.Ru._({ id: "c7tFgA" }));
                  {
                    const e = await window.unisat.getBalance();
                    v = Number(e.total);
                  }
                } catch (N) {
                  throw new Error(i.Ru._({ id: "UPhvhw" }));
                }
                if (!v || v <= 0) throw new Error(i.Ru._({ id: "mEAD5V" }));
                const w = s ? f((0, y.Al)(r)) : r;
                let g = (await b(w, 5e3, e, n, p, l)).bytesize * o,
                  x = 0;
                if (
                  (Array.isArray(l) &&
                    (x = l.reduce((e, t) => e + Number(t.value || 0), 0)),
                  v < g + x)
                )
                  throw new Error(
                    i.Ru._({
                      id: "u74Ca0",
                      values: { 0: g + x, btcWalletBalance: v },
                    })
                  );
                const T = await b(w, g, e, n, p, l);
                if (!T) throw new Error("Create Psbt failed.");
                const { signList: k, unsignedHex: A } = T,
                  _ = await window.unisat.signPsbt(A, { toSignInputs: [...k] });
                if (_) {
                  var C;
                  const e = a.iL.fromHex(_).extractTransaction(!0).toHex();
                  if (
                    ((d = await (async function (e, t) {
                      let n = "testnet" === t ? "testnet4/api/tx" : "api/tx";
                      return (await u.post(`${n}`, e)).data;
                    })(e, p)),
                    console.log("\ud83d\ude80 ~ sendTx:", d),
                    null !== (C = d) && void 0 !== C && C.includes("error"))
                  )
                    throw new Error(d);
                  return d;
                }
                return "";
              },
              [e, n, t]
            ),
            calculateFeeOnly: (0, v.useCallback)(
              async function (t) {
                let i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 5,
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  a = arguments.length > 3 ? arguments[3] : void 0;
                if (!e)
                  return {
                    dummy: null,
                    estimateFee: 0,
                    byteSize: 0,
                    feeRate: i,
                    feeInBTC: "0",
                  };
                const o = (0, m.t6)(e),
                  s = o.network;
                if ("p2tr" !== o.type)
                  throw new Error(
                    "Invalid account,Please switch your address type to P2RT."
                  );
                const u = r ? f((0, y.Al)(t)) : t;
                let l = await b(u, 5e3, e, n, s, a),
                  d = l.bytesize * i;
                return {
                  dummy: l,
                  estimateFee: d,
                  byteSize: l.bytesize,
                  feeRate: i,
                  feeInBTC: (d / 1e8).toFixed(8),
                  feeCalculations: [
                    {
                      rate: 5,
                      fee: 5 * l.bytesize,
                      feeInBTC: ((5 * l.bytesize) / 1e8).toFixed(8),
                    },
                    {
                      rate: 10,
                      fee: 10 * l.bytesize,
                      feeInBTC: ((10 * l.bytesize) / 1e8).toFixed(8),
                    },
                    {
                      rate: 20,
                      fee: 20 * l.bytesize,
                      feeInBTC: ((20 * l.bytesize) / 1e8).toFixed(8),
                    },
                    {
                      rate: 50,
                      fee: 50 * l.bytesize,
                      feeInBTC: ((50 * l.bytesize) / 1e8).toFixed(8),
                    },
                  ],
                };
              },
              [e, n]
            ),
          };
        };
    },
    46721: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i });
      n(51477);
      const i =
        n.p + "static/media/zapOff.f91e853b10365d37e708a7c81006c8aa.svg";
    },
    47818: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var i = n(37209),
        r = n(51477),
        a = n(73696),
        o = n(42296),
        s = n(57752),
        u = n(70481);
      const l = (e) => {
        let { stakeActivity: t, step: n = 0 } = e;
        const l = (0, s.A)(),
          d = (0, o.W6)(),
          [c, p] = (0, r.useState)(n),
          f = (0, r.useMemo)(
            () =>
              [
                "IN_THE_DRAWING_OF_LOTS",
                "IN_THE_DRAWING_OF_LOTS_SUCCESS",
                "UNLOCK_REMAINING_PLEDGE",
                "UNLOCK_REMAINING_PLEDGE_SUCCESS",
              ].includes(null === t || void 0 === t ? void 0 : t.status)
                ? 2
                : [
                    "REWARD_DISTRIBUTION",
                    "REWARD_DISTRIBUTION_SUCCESS",
                    "SUCCESS",
                  ].includes(null === t || void 0 === t ? void 0 : t.status)
                ? 3
                : 1,
            [null === t || void 0 === t ? void 0 : t.status]
          );
        return (0, u.jsx)(u.Fragment, {
          children: (0, u.jsx)(a.A, {
            current: c,
            onChange: (e) => {
              p(e),
                1 == e
                  ? d.push("/ecosystem/lightning-starter/blocks")
                  : d.push("/ecosystem/lightning-starter/lottery");
            },
            items: [
              {
                status: 1 == f ? "process" : f > 1 ? "finish" : "wait",
                title: i.Ru._({ id: "JYKRJS" }),
              },
              {
                status: 2 == f ? "process" : f > 2 ? "finish" : "wait",
                title: i.Ru._({ id: "cja++6" }),
              },
              {
                status:
                  "SUCCESS" == (null === t || void 0 === t ? void 0 : t.status)
                    ? "finish"
                    : 3 == f
                    ? "process"
                    : "wait",
                title: l.isMobile
                  ? i.Ru._({ id: "hom7qf" })
                  : i.Ru._({ id: "zXCpR0" }),
              },
            ],
          }),
        });
      };
    },
    49145: (e, t, n) => {
      "use strict";
      n.d(t, { Mg: () => l, eG: () => d, qL: () => u });
      var i = n(51477),
        r = n(35188),
        a = n(12472),
        o = n(15928),
        s = n(35375);
      const u = () => {
          const { execQueryNostrAsync: e } = (0, a.Ay)();
          return {
            createLNDNode: (0, i.useCallback)(
              async (t) => {
                const n = await e({
                  queryCommand: `create micro ${t}`,
                  sendToNostrAddress:
                    "npub1dh7jwjrv9xvpw6a7wtsxpje7fequ7tmjzpendr594yjeuk9ckhasuljnc6",
                  isUseLocalRobotToSend: !1,
                });
                return null === n || void 0 === n ? void 0 : n.result;
              },
              [e]
            ),
          };
        },
        l = () => {
          const { execQueryNostrAsync: e } = (0, a.Ay)(),
            t = (0, o.d4)((e) => {
              let { node: t } = e;
              return null === t || void 0 === t ? void 0 : t.nodeConfig;
            }),
            n = (0, o.wA)();
          return {
            getNodeInfo: (0, i.useCallback)(async () => {
              var i, r;
              const a = await e({
                queryCommand: "lnd getnstinfo",
                sendToNostrAddress:
                  null === t || void 0 === t ? void 0 : t.npub,
                isUseLocalRobotToSend: !1,
              });
              var o;
              null !== a &&
              void 0 !== a &&
              null !== (i = a.result) &&
              void 0 !== i &&
              i.data &&
              "object" ===
                typeof (null === a ||
                void 0 === a ||
                null === (r = a.result) ||
                void 0 === r
                  ? void 0
                  : r.data)
                ? n(
                    (0, s.x9)(
                      null === a ||
                        void 0 === a ||
                        null === (o = a.result) ||
                        void 0 === o
                        ? void 0
                        : o.data
                    )
                  )
                : n((0, s.x9)(null));
              return null === a || void 0 === a ? void 0 : a.result;
            }, [n, e, null === t || void 0 === t ? void 0 : t.npub]),
            refreshNodeInfo: (0, i.useCallback)(
              function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                n((0, s.x9)(e));
              },
              [n]
            ),
            genSeed: (0, i.useCallback)(async () => {
              const n = await e({
                queryCommand: "lnd nstgenseed",
                sendToNostrAddress:
                  null === t || void 0 === t ? void 0 : t.npub,
                isUseLocalRobotToSend: !1,
              });
              return null === n || void 0 === n ? void 0 : n.result;
            }, [e, null === t || void 0 === t ? void 0 : t.npub]),
            activeMyLndNode: (0, i.useCallback)(
              async (i) => {
                var a, o;
                let { password: u, seed: l } = i;
                const d = r.Qe.decode(t.npub).data,
                  c = d,
                  p = await r.sh.encrypt(d, c, u),
                  f = await r.sh.encrypt(d, c, JSON.stringify(l)),
                  y = await e({
                    queryCommand: `lnd nstinitwallet --password ${p} --cipher_seed_mnemonic ${f} --withinfo true`,
                    sendToNostrAddress:
                      null === t || void 0 === t ? void 0 : t.npub,
                    isUseLocalRobotToSend: !1,
                  });
                var m, v;
                null !== y &&
                  void 0 !== y &&
                  null !== (a = y.result) &&
                  void 0 !== a &&
                  null !== (o = a.data) &&
                  void 0 !== o &&
                  o.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === y ||
                        void 0 === y ||
                        null === (m = y.result) ||
                        void 0 === m ||
                        null === (v = m.data) ||
                        void 0 === v
                        ? void 0
                        : v.nodeInfo
                    )
                  );
                return null === y || void 0 === y ? void 0 : y.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            unlockMyLndNode: (0, i.useCallback)(
              async (i) => {
                var a, o;
                const u = r.Qe.decode(t.npub).data,
                  l = u,
                  d = await r.sh.encrypt(u, l, i),
                  c = await e({
                    queryCommand: `lnd unlock --wallet_password ${d} --withinfo true`,
                    sendToNostrAddress:
                      null === t || void 0 === t ? void 0 : t.npub,
                    isUseLocalRobotToSend: !1,
                  });
                var p, f;
                null !== c &&
                  void 0 !== c &&
                  null !== (a = c.result) &&
                  void 0 !== a &&
                  null !== (o = a.data) &&
                  void 0 !== o &&
                  o.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === c ||
                        void 0 === c ||
                        null === (p = c.result) ||
                        void 0 === p ||
                        null === (f = p.data) ||
                        void 0 === f
                        ? void 0
                        : f.nodeInfo
                    )
                  );
                return null === c || void 0 === c ? void 0 : c.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            depositToNostrNode: (0, i.useCallback)(
              async (i) => {
                var r, a;
                const o = await e({
                  queryCommand: `lnd send --invoice ${i} --withinfo true`,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                var u, l;
                null !== o &&
                  void 0 !== o &&
                  null !== (r = o.result) &&
                  void 0 !== r &&
                  null !== (a = r.data) &&
                  void 0 !== a &&
                  a.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === o ||
                        void 0 === o ||
                        null === (u = o.result) ||
                        void 0 === u ||
                        null === (l = u.data) ||
                        void 0 === l
                        ? void 0
                        : l.nodeInfo
                    )
                  );
                return null === o || void 0 === o ? void 0 : o.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            withdrawFromNostrNode: (0, i.useCallback)(
              async (n) => {
                const i = await e({
                  queryCommand: `lnd receive --memo receive --value ${n}`,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                return null === i || void 0 === i ? void 0 : i.result;
              },
              [e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            generateBTCAddr: (0, i.useCallback)(async () => {
              const n = await e({
                queryCommand: "lnd newaddress --type 4",
                sendToNostrAddress:
                  null === t || void 0 === t ? void 0 : t.npub,
                isUseLocalRobotToSend: !1,
              });
              return null === n || void 0 === n ? void 0 : n.result;
            }, [e, null === t || void 0 === t ? void 0 : t.npub]),
            sendCoins: (0, i.useCallback)(
              async (i) => {
                var r, a;
                let { addr: o, amount: u, sendAll: l, fee: d } = i,
                  c = `lnd nstsendcoins --addr ${o}`;
                u && (c += ` --amount ${u}`),
                  l && (c += " --send_all true"),
                  d && (c += ` --sat_per_vbyte ${d}`),
                  (c += " --withinfo true");
                const p = await e({
                  queryCommand: c,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                var f, y;
                null !== p &&
                  void 0 !== p &&
                  null !== (r = p.result) &&
                  void 0 !== r &&
                  null !== (a = r.data) &&
                  void 0 !== a &&
                  a.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === p ||
                        void 0 === p ||
                        null === (f = p.result) ||
                        void 0 === f ||
                        null === (y = f.data) ||
                        void 0 === y
                        ? void 0
                        : y.nodeInfo
                    )
                  );
                return null === p || void 0 === p ? void 0 : p.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            getNWC: (0, i.useCallback)(async () => {
              const n = await e({
                queryCommand: "lnd nstgetnwcstr",
                sendToNostrAddress:
                  null === t || void 0 === t ? void 0 : t.npub,
                isUseLocalRobotToSend: !1,
              });
              return null === n || void 0 === n ? void 0 : n.result;
            }, [e, null === t || void 0 === t ? void 0 : t.npub]),
            getMulsignInfo: (0, i.useCallback)(
              async (i) => {
                var r, a;
                const o = await e({
                  queryCommand: `lnd nstgetchanneldepositaddr --capacity ${i} --withinfo true`,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                var u, l;
                null !== o &&
                  void 0 !== o &&
                  null !== (r = o.result) &&
                  void 0 !== r &&
                  null !== (a = r.data) &&
                  void 0 !== a &&
                  a.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === o ||
                        void 0 === o ||
                        null === (u = o.result) ||
                        void 0 === u ||
                        null === (l = u.data) ||
                        void 0 === l
                        ? void 0
                        : l.nodeInfo
                    )
                  );
                return null === o || void 0 === o ? void 0 : o.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            deletePendingPayChannel: (0, i.useCallback)(
              async (i) => {
                var r, a;
                const o = await e({
                  queryCommand: `lnd nstdeletependingpaychannel --channel_id ${i} --withinfo true`,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                var u, l;
                null !== o &&
                  void 0 !== o &&
                  null !== (r = o.result) &&
                  void 0 !== r &&
                  null !== (a = r.data) &&
                  void 0 !== a &&
                  a.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === o ||
                        void 0 === o ||
                        null === (u = o.result) ||
                        void 0 === u ||
                        null === (l = u.data) ||
                        void 0 === l
                        ? void 0
                        : l.nodeInfo
                    )
                  );
                return null === o || void 0 === o ? void 0 : o.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            bakeUpNode: (0, i.useCallback)(async () => {
              var i, r;
              const a = await e({
                queryCommand: "lnd nstbakenode --withinfo true",
                sendToNostrAddress:
                  null === t || void 0 === t ? void 0 : t.npub,
                isUseLocalRobotToSend: !1,
              });
              var o, u;
              null !== a &&
                void 0 !== a &&
                null !== (i = a.result) &&
                void 0 !== i &&
                null !== (r = i.data) &&
                void 0 !== r &&
                r.nodeInfo &&
                n(
                  (0, s.x9)(
                    null === a ||
                      void 0 === a ||
                      null === (o = a.result) ||
                      void 0 === o ||
                      null === (u = o.data) ||
                      void 0 === u
                      ? void 0
                      : u.nodeInfo
                  )
                );
              return null === a || void 0 === a ? void 0 : a.result;
            }, [n, e, null === t || void 0 === t ? void 0 : t.npub]),
            signature: (0, i.useCallback)(
              async (n) => {
                const i = await e({
                  queryCommand: `lnd nstsignmessage --msg ${n}`,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                return null === i || void 0 === i ? void 0 : i.result;
              },
              [e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            verify: (0, i.useCallback)(
              async (n, i) => {
                const r = await e({
                  queryCommand: `lnd nstverifymessage --msg ${n} --signature ${i}`,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                return null === r || void 0 === r ? void 0 : r.result;
              },
              [e, null === t || void 0 === t ? void 0 : t.npub]
            ),
          };
        },
        d = () => {
          const { execQueryNostrAsync: e } = (0, a.Ay)(),
            t = (0, o.d4)((e) => {
              let { node: t } = e;
              return null === t || void 0 === t ? void 0 : t.nodeConfig;
            }),
            n = (0, o.wA)(),
            r = (0, i.useCallback)(async () => {
              const n = await e({
                queryCommand: "lnd getnstchannels",
                sendToNostrAddress:
                  null === t || void 0 === t ? void 0 : t.npub,
                isUseLocalRobotToSend: !1,
              });
              return null === n || void 0 === n ? void 0 : n.result;
            }, [e, null === t || void 0 === t ? void 0 : t.npub]),
            u = (0, i.useCallback)(
              async (i) => {
                var r, a;
                let {
                    channelPointStr: o,
                    force: u,
                    deliveryAddress: l,
                    fee: d,
                  } = i,
                  c = `lnd closechannel --channel_point_str ${o} --force ${u} --no_wait true --sat_per_vbyte ${d} --withinfo true`;
                l && (c += ` --delivery_address ${l}`);
                const p = await e({
                  queryCommand: c,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                var f, y;
                null !== p &&
                  void 0 !== p &&
                  null !== (r = p.result) &&
                  void 0 !== r &&
                  null !== (a = r.data) &&
                  void 0 !== a &&
                  a.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === p ||
                        void 0 === p ||
                        null === (f = p.result) ||
                        void 0 === f ||
                        null === (y = f.data) ||
                        void 0 === y
                        ? void 0
                        : y.nodeInfo
                    )
                  );
                return null === p || void 0 === p ? void 0 : p.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            l = (0, i.useCallback)(async () => {
              var i, r;
              const a = await e({
                queryCommand: "lnd connectpeer --perm true --withinfo true",
                sendToNostrAddress:
                  null === t || void 0 === t ? void 0 : t.npub,
                isUseLocalRobotToSend: !1,
              });
              var o, u;
              null !== a &&
                void 0 !== a &&
                null !== (i = a.result) &&
                void 0 !== i &&
                null !== (r = i.data) &&
                void 0 !== r &&
                r.nodeInfo &&
                n(
                  (0, s.x9)(
                    null === a ||
                      void 0 === a ||
                      null === (o = a.result) ||
                      void 0 === o ||
                      null === (u = o.data) ||
                      void 0 === u
                      ? void 0
                      : u.nodeInfo
                  )
                );
              return null === a || void 0 === a ? void 0 : a.result;
            }, [n, e, null === t || void 0 === t ? void 0 : t.npub]);
          return {
            getChannels: r,
            closeChannel: u,
            openChannel: (0, i.useCallback)(
              async (i) => {
                var r, a;
                let { amount: o, fee: u, fundMax: l } = i,
                  d = "lnd nstopenchannel";
                o && (d += ` --amount ${o}`),
                  l && (d += " --fund_max true"),
                  u && (d += ` --sat_per_vbyte ${u}`),
                  (d += " --withinfo true");
                const c = await e({
                  queryCommand: d,
                  sendToNostrAddress:
                    null === t || void 0 === t ? void 0 : t.npub,
                  isUseLocalRobotToSend: !1,
                });
                var p, f;
                null !== c &&
                  void 0 !== c &&
                  null !== (r = c.result) &&
                  void 0 !== r &&
                  null !== (a = r.data) &&
                  void 0 !== a &&
                  a.nodeInfo &&
                  n(
                    (0, s.x9)(
                      null === c ||
                        void 0 === c ||
                        null === (p = c.result) ||
                        void 0 === p ||
                        null === (f = p.data) ||
                        void 0 === f
                        ? void 0
                        : f.nodeInfo
                    )
                  );
                return null === c || void 0 === c ? void 0 : c.result;
              },
              [n, e, null === t || void 0 === t ? void 0 : t.npub]
            ),
            reconnectPeer: l,
          };
        };
    },
    52677: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      var i = n(2552),
        r = n(91719),
        a = n(65941),
        o = n(70481);
      const s = { LIGHTNING: i, RGB: r, TAPROOT: a };
      function u(e) {
        let { assetType: t } = e;
        return (0, o.jsx)("img", {
          src: s[t],
          alt: t,
          style: { height: "20px" },
        });
      }
    },
    54140: (e, t, n) => {
      "use strict";
      n.d(t, {
        B$: () => g,
        F0: () => S,
        Hv: () => b,
        IA: () => N,
        JJ: () => I,
        M7: () => j,
        Tu: () => R,
        UF: () => k,
        nC: () => _,
        oO: () => A,
        rF: () => x,
        sm: () => w,
        xN: () => T,
        xs: () => C,
      });
      var i = n(46941),
        r = n(37209),
        a = n(69068),
        o = n(83822),
        s = n(62750),
        u = n(13275),
        l = n(9993),
        d = n(29780),
        c = n(45009),
        p = n(9469),
        f = n(15080),
        y = n(18663),
        m = n(83330),
        v = n(82583),
        h = n(70481);
      const b =
          "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
        w = {
          NEW: 0,
          PAIED_RECEIVED: 1,
          PAIED_CONFIRMING: 2,
          PENDING_BROADCAST: 3,
          BROADCASTING: 4,
          BROADCASTING_CONFIRM: 5,
          IMPORT_FINISHED: 6,
          SUCCESS: 9,
          FAILED: 99,
        },
        g = {
          0: (0, h.jsx)(i.x6, { id: "ZU3JQG" }),
          1: (0, h.jsx)(i.x6, { id: "cKauiE" }),
          2: (0, h.jsx)(i.x6, { id: "Xm22bZ" }),
          3: (0, h.jsx)(i.x6, { id: "n5y9Dt" }),
          4: (0, h.jsx)(i.x6, { id: "jfXqqy" }),
          5: (0, h.jsx)(i.x6, { id: "OSfDe2" }),
          6: (0, h.jsx)(i.x6, { id: "/AT+Mo" }),
          9: (0, h.jsx)(i.x6, { id: "zzDlyQ" }),
          99: (0, h.jsx)(i.x6, { id: "7Bj3x9" }),
        },
        x = [
          { label: "Capricorn", value: "0", imgUrl: a },
          { label: "Aquarius", value: "1", imgUrl: o },
          { label: "Pisces", value: "2", imgUrl: s },
          { label: "Aries", value: "3", imgUrl: u },
          { label: "Taurus", value: "4,c", imgUrl: l },
          { label: "Gemini", value: "5,d", imgUrl: d },
          { label: "Cancer", value: "6,e", imgUrl: c },
          { label: "Leo", value: "7,f", imgUrl: p },
          { label: "Virgo", value: "8", imgUrl: f },
          { label: "Libra", value: "9", imgUrl: y },
          { label: "Scorpio", value: "a", imgUrl: m },
          { label: "Sagittarius", value: "b", imgUrl: v },
        ],
        T = [
          {
            value:
              "INIT_PENDING,INIT,TAKE_LOCK,PART_SUCCESS,TRADE_PENDING,CANCEL_PENDING,SUCCESS,CANCEL,INIT_FAIL,TRADE_FAIL,CANCEL_FAIL",
            label: (0, h.jsx)(i.x6, { id: "qwHj/3" }),
          },
          {
            value:
              "INIT_PENDING,INIT,TAKE_LOCK,PART_SUCCESS,TRADE_PENDING,CANCEL_PENDING",
            label: (0, h.jsx)(i.x6, { id: "+hA/UM" }),
          },
          { value: "SUCCESS", label: (0, h.jsx)(i.x6, { id: "PFtkGc" }) },
          { value: "CANCEL", label: (0, h.jsx)(i.x6, { id: "vv7kpg" }) },
          {
            value: "INIT_FAIL,TRADE_FAIL,CANCEL_FAIL",
            label: (0, h.jsx)(i.x6, { id: "NuKR0h" }),
          },
        ],
        k = "SATS",
        A = 0,
        _ = "1000",
        C = "AIFI",
        N = {
          NON_EXISTING: {
            label: r.Ru._({ id: "DOfhYo" }),
            value: 0,
            text: "Non Existing",
          },
          LOCKED: { label: r.Ru._({ id: "G2fuEb" }), value: 1, text: "Locked" },
          UNLOCKED: {
            label: r.Ru._({ id: "hamW7u" }),
            value: 2,
            text: "Unlocked",
          },
          RPC_ACTIVE: {
            label: r.Ru._({ id: "+Vk0uC" }),
            value: 3,
            text: "RPC Active",
          },
          SERVER_ACTIVE: {
            label: r.Ru._({ id: "D5Wloy" }),
            value: 4,
            text: "Running",
          },
          WAITING_TO_START: { label: r.Ru._({ id: "s9bGNV" }), value: 255 },
        },
        j = {
          0: (0, h.jsx)(i.x6, { id: "isRobC" }),
          1: (0, h.jsx)(i.x6, { id: "UbRKMZ" }),
          9: (0, h.jsx)(i.x6, { id: "oXOSPE" }),
          99: (0, h.jsx)(i.x6, { id: "6Aih4U" }),
        },
        S = {
          0: (0, h.jsx)(i.x6, { id: "bP0Cbz" }),
          1: (0, h.jsx)(i.x6, { id: "y8L/+/" }),
          3: (0, h.jsx)(i.x6, { id: "TheasI" }),
          4: (0, h.jsx)(i.x6, { id: "pgmu1D" }),
        },
        R =
          (i.x6,
          i.x6,
          i.x6,
          i.x6,
          i.x6,
          i.x6,
          [
            {
              label: (0, h.jsx)(i.x6, { id: "x+GT5N" }),
              value: "LIGHTNING",
              id: "LIGHTNING",
            },
            {
              label: (0, h.jsx)(i.x6, { id: "OL6bdr" }),
              value: "TAPROOT",
              id: "TAPROOT",
            },
            {
              label: (0, h.jsx)(i.x6, { id: "j4vzTh" }),
              value: "OTHER",
              id: "OTHER",
              desc: r.Ru._({ id: "spsYgT" }),
            },
          ]),
        I = [
          { value: "no", rate: 2, month: 0, initialUnlock: 1 },
          { value: "six", rate: 1.5, month: 2, initialUnlock: 0.6 },
          { value: "twelve", rate: 1, month: 3, initialUnlock: 0.3 },
        ];
    },
    57433: () => {},
    58066: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => c });
      var i = n(46941),
        r = n(42006),
        a = n(51477);
      const o =
        n.p + "static/media/ic_wallet_24.a19a67584c37269adc2f86c359666ede.svg";
      n(52218);
      var s = n(15928),
        u = n(62160),
        l = n(70302),
        d = (n(14272), n(45016), n(70481));
      function c(e) {
        let {
          tokenPlatform: t = "",
          connectTip: n = "Connect your wallet to start trading.",
        } = e;
        const c = (0, s.wA)(),
          p = (0, a.useCallback)(() => {
            t && c((0, l.cb)(t)), c((0, u.LL)(!0));
          }, [c, t]);
        return (0, d.jsxs)("div", {
          className: "connect-wallet-common",
          children: [
            (0, d.jsx)("div", {
              className: "connect-wallet-text",
              children: n,
            }),
            (0, d.jsx)(r.A, {
              onClick: p,
              imgSrc: o,
              children: (0, d.jsx)(i.x6, { id: "CtByM7" }),
            }),
          ],
        });
      }
    },
    60393: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var i = n(46941),
        r = n(94867),
        a = n(800),
        o = n(70481);
      function s(e) {
        var t, n, s;
        let { assetToken: u, children: l } = e;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(r.A, {
            classNames: { root: "token-info-tooltip" },
            title: (0, o.jsxs)("div", {
              children: [
                (0, o.jsx)("div", {
                  className: "token-info-name",
                  children:
                    (null === u || void 0 === u ? void 0 : u.name) || "--",
                }),
                (0, o.jsx)("div", {
                  className: "token-info-desc",
                  children:
                    (null === u || void 0 === u ? void 0 : u.description) ||
                    "--",
                }),
                (0, o.jsxs)("div", {
                  className: "token-info-section",
                  children: [
                    (0, o.jsx)("span", {
                      children: (0, o.jsx)(i.x6, { id: "On0aF2" }),
                    }),
                    null !== u && void 0 !== u && u.website
                      ? (0, o.jsx)("a", {
                          className: "ellipsis",
                          href:
                            null !== u && void 0 !== u && u.website
                              ? decodeURIComponent(
                                  null === u || void 0 === u
                                    ? void 0
                                    : u.website
                                )
                              : "#",
                          target: "_blank",
                          children: decodeURIComponent(
                            null === u || void 0 === u ? void 0 : u.website
                          ),
                        })
                      : "--",
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "token-info-section",
                  children: [
                    (0, o.jsx)("span", {
                      children: (0, o.jsx)(i.x6, { id: "s+xImV" }),
                    }),
                    null !== u && void 0 !== u && u.token
                      ? (0, o.jsx)("a", {
                          href: `https://megalithic.me/taproot_assets_explorer?search=${
                            null === u || void 0 === u ? void 0 : u.token
                          }`,
                          target: "_blank",
                          children:
                            (null === u ||
                            void 0 === u ||
                            null === (t = u.token) ||
                            void 0 === t
                              ? void 0
                              : t.substring(0, 6)) +
                            "..." +
                            (null === u ||
                            void 0 === u ||
                            null === (n = u.token) ||
                            void 0 === n
                              ? void 0
                              : n.substring(
                                  (null === u ||
                                  void 0 === u ||
                                  null === (s = u.token) ||
                                  void 0 === s
                                    ? void 0
                                    : s.length) - 6
                                )),
                        })
                      : "--",
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "token-info-section",
                  children: [
                    (0, o.jsx)("span", {
                      children: (0, o.jsx)(i.x6, { id: "a2vOTj" }),
                    }),
                    (0, o.jsx)("span", {
                      children:
                        (null === u || void 0 === u
                          ? void 0
                          : u.assetTypeStr) || "--",
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "token-info-section",
                  children: [
                    (0, o.jsx)("span", {
                      children: (0, o.jsx)(i.x6, { id: "pzO3Xa" }),
                    }),
                    (0, o.jsx)("span", {
                      children:
                        null !== u && void 0 !== u && u.totalSupply
                          ? (0, a.qC)(
                              (0, a.yC)(
                                (null === u || void 0 === u
                                  ? void 0
                                  : u.totalSupply) /
                                  (null === u || void 0 === u
                                    ? void 0
                                    : u.decimals),
                                (null === u || void 0 === u
                                  ? void 0
                                  : u.reserve) || 0
                              )
                            )
                          : "--",
                    }),
                  ],
                }),
              ],
            }),
            children: l,
          }),
        });
      }
    },
    62401: (e) => {
      e.exports = (function () {
        var e = function (e) {
            var t;
            return function (n) {
              return (
                t || e((t = { exports: {}, parent: n }), t.exports), t.exports
              );
            };
          },
          t = e(function (e, t) {
            (function (t) {
              (function () {
                "use strict";
                var i = { "Content-Type": "application/x-www-form-urlencoded" };
                function r(e, t) {
                  !d.isUndefined(e) &&
                    d.isUndefined(e["Content-Type"]) &&
                    (e["Content-Type"] = t);
                }
                var a,
                  o = {
                    transitional: {
                      silentJSONParsing: !0,
                      forcedJSONParsing: !0,
                      clarifyTimeoutError: !1,
                    },
                    adapter:
                      (("undefined" != typeof XMLHttpRequest ||
                        (void 0 !== t &&
                          "[object process]" ===
                            Object.prototype.toString.call(t))) &&
                        (a = n({})),
                      a),
                    transformRequest: [
                      function (e, t) {
                        return (
                          m(t, "Accept"),
                          m(t, "Content-Type"),
                          d.isFormData(e) ||
                          d.isArrayBuffer(e) ||
                          d.isBuffer(e) ||
                          d.isStream(e) ||
                          d.isFile(e) ||
                          d.isBlob(e)
                            ? e
                            : d.isArrayBufferView(e)
                            ? e.buffer
                            : d.isURLSearchParams(e)
                            ? (r(
                                t,
                                "application/x-www-form-urlencoded;charset=utf-8"
                              ),
                              e.toString())
                            : d.isObject(e) ||
                              (t && "application/json" === t["Content-Type"])
                            ? (r(t, "application/json"),
                              (function (e) {
                                if (d.isString(e))
                                  try {
                                    return (0, JSON.parse)(e), d.trim(e);
                                  } catch (i) {
                                    if ("SyntaxError" !== i.name) throw i;
                                  }
                                return (0, JSON.stringify)(e);
                              })(e))
                            : e
                        );
                      },
                    ],
                    transformResponse: [
                      function (e) {
                        var t = this.transitional || o.transitional,
                          n = t && t.silentJSONParsing,
                          i = t && t.forcedJSONParsing,
                          r = !n && "json" === this.responseType;
                        if (r || (i && d.isString(e) && e.length))
                          try {
                            return JSON.parse(e);
                          } catch (a) {
                            if (r) {
                              if ("SyntaxError" === a.name)
                                throw v(a, this, "E_JSON_PARSE");
                              throw a;
                            }
                          }
                        return e;
                      },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function (e) {
                      return e >= 200 && e < 300;
                    },
                    headers: {
                      common: { Accept: "application/json, text/plain, */*" },
                    },
                  };
                d.forEach(["delete", "get", "head"], function (e) {
                  o.headers[e] = {};
                }),
                  d.forEach(["post", "put", "patch"], function (e) {
                    o.headers[e] = d.merge(i);
                  }),
                  (e.exports = o);
              }).call(this);
            }).call(this, j);
          }),
          n = e(function (e, n) {
            "use strict";
            var i = t({});
            e.exports = function (e) {
              return new Promise(function (t, n) {
                var r,
                  a = e.data,
                  o = e.headers,
                  s = e.responseType;
                function u() {
                  e.cancelToken && e.cancelToken.unsubscribe(r),
                    e.signal && e.signal.removeEventListener("abort", r);
                }
                d.isFormData(a) && delete o["Content-Type"];
                var l = new XMLHttpRequest();
                if (e.auth) {
                  var c = e.auth.username || "",
                    f = e.auth.password
                      ? unescape(encodeURIComponent(e.auth.password))
                      : "";
                  o.Authorization = "Basic " + btoa(c + ":" + f);
                }
                var y = g(e.baseURL, e.url);
                function m() {
                  if (l) {
                    var i =
                        "getAllResponseHeaders" in l
                          ? T(l.getAllResponseHeaders())
                          : null,
                      r = {
                        data:
                          s && "text" !== s && "json" !== s
                            ? l.response
                            : l.responseText,
                        status: l.status,
                        statusText: l.statusText,
                        headers: i,
                        config: e,
                        request: l,
                      };
                    b(
                      function (e) {
                        t(e), u();
                      },
                      function (e) {
                        n(e), u();
                      },
                      r
                    ),
                      (l = null);
                  }
                }
                if (
                  (l.open(
                    e.method.toUpperCase(),
                    p(y, e.params, e.paramsSerializer),
                    !0
                  ),
                  (l.timeout = e.timeout),
                  "onloadend" in l
                    ? (l.onloadend = m)
                    : (l.onreadystatechange = function () {
                        l &&
                          4 === l.readyState &&
                          (0 !== l.status ||
                            (l.responseURL &&
                              0 === l.responseURL.indexOf("file:"))) &&
                          setTimeout(m);
                      }),
                  (l.onabort = function () {
                    l &&
                      (n(h("Request aborted", e, "ECONNABORTED", l)),
                      (l = null));
                  }),
                  (l.onerror = function () {
                    n(h("Network Error", e, null, l)), (l = null);
                  }),
                  (l.ontimeout = function () {
                    var t = e.timeout
                        ? "timeout of " + e.timeout + "ms exceeded"
                        : "timeout exceeded",
                      r = e.transitional || i.transitional;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(
                        h(
                          t,
                          e,
                          r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                          l
                        )
                      ),
                      (l = null);
                  }),
                  d.isStandardBrowserEnv())
                ) {
                  var v =
                    (e.withCredentials || k(y)) && e.xsrfCookieName
                      ? w.read(e.xsrfCookieName)
                      : void 0;
                  v && (o[e.xsrfHeaderName] = v);
                }
                "setRequestHeader" in l &&
                  d.forEach(o, function (e, t) {
                    void 0 === a && "content-type" === t.toLowerCase()
                      ? delete o[t]
                      : l.setRequestHeader(t, e);
                  }),
                  d.isUndefined(e.withCredentials) ||
                    (l.withCredentials = !!e.withCredentials),
                  s && "json" !== s && (l.responseType = e.responseType),
                  "function" == typeof e.onDownloadProgress &&
                    l.addEventListener("progress", e.onDownloadProgress),
                  "function" == typeof e.onUploadProgress &&
                    l.upload &&
                    l.upload.addEventListener("progress", e.onUploadProgress),
                  (e.cancelToken || e.signal) &&
                    ((r = function (e) {
                      l &&
                        (n(!e || (e && e.type) ? new A("canceled") : e),
                        l.abort(),
                        (l = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(r),
                    e.signal &&
                      (e.signal.aborted
                        ? r()
                        : e.signal.addEventListener("abort", r))),
                  a || (a = null),
                  l.send(a);
              });
            };
          }),
          i = function (e, t) {
            return function () {
              for (
                var n = new Array(arguments.length), i = 0;
                i < n.length;
                i++
              )
                n[i] = arguments[i];
              return e.apply(t, n);
            };
          },
          r = Object.prototype.toString;
        function a(e) {
          return "[object Array]" === r.call(e);
        }
        function o(e) {
          return void 0 === e;
        }
        function s(e) {
          return null !== e && "object" == typeof e;
        }
        function u(e) {
          if ("[object Object]" !== r.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function l(e, t) {
          if (null != e)
            if (("object" != typeof e && (e = [e]), a(e)))
              for (var n = 0, i = e.length; n < i; n++)
                t.call(null, e[n], n, e);
            else
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.call(null, e[r], r, e);
        }
        var d = {
          isArray: a,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === r.call(e);
          },
          isBuffer: function (e) {
            return (
              null !== e &&
              !o(e) &&
              null !== e.constructor &&
              !o(e.constructor) &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isObject: s,
          isPlainObject: u,
          isUndefined: o,
          isDate: function (e) {
            return "[object Date]" === r.call(e);
          },
          isFile: function (e) {
            return "[object File]" === r.call(e);
          },
          isBlob: function (e) {
            return "[object Blob]" === r.call(e);
          },
          isStream: function (e) {
            return (
              s(e) &&
              (function (e) {
                return "[object Function]" === r.call(e);
              })(e.pipe)
            );
          },
          isURLSearchParams: function (e) {
            return (
              "undefined" != typeof URLSearchParams &&
              e instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: l,
          merge: function e() {
            var t = {};
            function n(n, i) {
              u(t[i]) && u(n)
                ? (t[i] = e(t[i], n))
                : u(n)
                ? (t[i] = e({}, n))
                : a(n)
                ? (t[i] = n.slice())
                : (t[i] = n);
            }
            for (var i = 0, r = arguments.length; i < r; i++)
              l(arguments[i], n);
            return t;
          },
          extend: function (e, t, n) {
            return (
              l(t, function (t, r) {
                e[r] = n && "function" == typeof t ? i(t, n) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
        };
        function c(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        var p = function (e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (d.isURLSearchParams(t)) i = t.toString();
            else {
              var r = [];
              d.forEach(t, function (e, t) {
                null != e &&
                  (d.isArray(e) ? (t += "[]") : (e = [e]),
                  d.forEach(e, function (e) {
                    d.isDate(e)
                      ? (e = e.toISOString())
                      : d.isObject(e) && (e = JSON.stringify(e)),
                      r.push(c(t) + "=" + c(e));
                  }));
              }),
                (i = r.join("&"));
            }
            if (i) {
              var a = e.indexOf("#");
              -1 !== a && (e = e.slice(0, a)),
                (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
            }
            return e;
          },
          f = {};
        function y() {
          this.handlers = [];
        }
        (y.prototype.use = function (e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (y.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (y.prototype.forEach = function (e) {
            d.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (f = y);
        var m = function (e, t) {
            d.forEach(e, function (n, i) {
              i !== t &&
                i.toUpperCase() === t.toUpperCase() &&
                ((e[t] = n), delete e[i]);
            });
          },
          v = function (e, t, n, i, r) {
            return (
              (e.config = t),
              n && (e.code = n),
              (e.request = i),
              (e.response = r),
              (e.isAxiosError = !0),
              (e.toJSON = function () {
                return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code,
                  status:
                    this.response && this.response.status
                      ? this.response.status
                      : null,
                };
              }),
              e
            );
          },
          h = function (e, t, n, i, r) {
            var a = new Error(e);
            return v(a, t, n, i, r);
          },
          b = function (e, t, n) {
            var i = n.config.validateStatus;
            n.status && i && !i(n.status)
              ? t(
                  h(
                    "Request failed with status code " + n.status,
                    n.config,
                    null,
                    n.request,
                    n
                  )
                )
              : e(n);
          },
          w = d.isStandardBrowserEnv()
            ? {
                write: function (e, t, n, i, r, a) {
                  var o = [];
                  o.push(e + "=" + encodeURIComponent(t)),
                    d.isNumber(n) &&
                      o.push("expires=" + new Date(n).toGMTString()),
                    d.isString(i) && o.push("path=" + i),
                    d.isString(r) && o.push("domain=" + r),
                    !0 === a && o.push("secure"),
                    (document.cookie = o.join("; "));
                },
                read: function (e) {
                  var t = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                  );
                  return t ? decodeURIComponent(t[3]) : null;
                },
                remove: function (e) {
                  this.write(e, "", Date.now() - 864e5);
                },
              }
            : {
                write: function () {},
                read: function () {
                  return null;
                },
                remove: function () {},
              },
          g = function (e, t) {
            return e && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
              ? (function (e, t) {
                  return t
                    ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                    : e;
                })(e, t)
              : t;
          },
          x = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ],
          T = function (e) {
            var t,
              n,
              i,
              r = {};
            return e
              ? (d.forEach(e.split("\n"), function (e) {
                  if (
                    ((i = e.indexOf(":")),
                    (t = d.trim(e.substr(0, i)).toLowerCase()),
                    (n = d.trim(e.substr(i + 1))),
                    t)
                  ) {
                    if (r[t] && x.indexOf(t) >= 0) return;
                    r[t] =
                      "set-cookie" === t
                        ? (r[t] ? r[t] : []).concat([n])
                        : r[t]
                        ? r[t] + ", " + n
                        : n;
                  }
                }),
                r)
              : r;
          },
          k = d.isStandardBrowserEnv()
            ? (function () {
                var e,
                  t = /(msie|trident)/i.test(navigator.userAgent),
                  n = document.createElement("a");
                function i(e) {
                  var i = e;
                  return (
                    t && (n.setAttribute("href", i), (i = n.href)),
                    n.setAttribute("href", i),
                    {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, "") : "",
                      hash: n.hash ? n.hash.replace(/^#/, "") : "",
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                        "/" === n.pathname.charAt(0)
                          ? n.pathname
                          : "/" + n.pathname,
                    }
                  );
                }
                return (
                  (e = i(window.location.href)),
                  function (t) {
                    var n = d.isString(t) ? i(t) : t;
                    return n.protocol === e.protocol && n.host === e.host;
                  }
                );
              })()
            : function () {
                return !0;
              },
          A = {};
        function _(e) {
          this.message = e;
        }
        (_.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (_.prototype.__CANCEL__ = !0),
          (A = _);
        var C,
          N,
          j = {},
          S = (j = {});
        function R() {
          throw new Error("setTimeout has not been defined");
        }
        function I() {
          throw new Error("clearTimeout has not been defined");
        }
        function M(e) {
          if (C === setTimeout) return setTimeout(e, 0);
          if ((C === R || !C) && setTimeout)
            return (C = setTimeout), setTimeout(e, 0);
          try {
            return C(e, 0);
          } catch (t) {
            try {
              return C.call(null, e, 0);
            } catch (t) {
              return C.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            C = "function" == typeof setTimeout ? setTimeout : R;
          } catch (e) {
            C = R;
          }
          try {
            N = "function" == typeof clearTimeout ? clearTimeout : I;
          } catch (e) {
            N = I;
          }
        })();
        var E,
          O = [],
          P = !1,
          L = -1;
        function B() {
          P &&
            E &&
            ((P = !1),
            E.length ? (O = E.concat(O)) : (L = -1),
            O.length && U());
        }
        function U() {
          if (!P) {
            var e = M(B);
            P = !0;
            for (var t = O.length; t; ) {
              for (E = O, O = []; ++L < t; ) E && E[L].run();
              (L = -1), (t = O.length);
            }
            (E = null),
              (P = !1),
              (function (e) {
                if (N === clearTimeout) return clearTimeout(e);
                if ((N === I || !N) && clearTimeout)
                  return (N = clearTimeout), clearTimeout(e);
                try {
                  N(e);
                } catch (t) {
                  try {
                    return N.call(null, e);
                  } catch (t) {
                    return N.call(this, e);
                  }
                }
              })(e);
          }
        }
        function F(e, t) {
          (this.fun = e), (this.array = t);
        }
        function q() {}
        (S.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          O.push(new F(e, t)), 1 !== O.length || P || M(U);
        }),
          (F.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (S.title = "browser"),
          (S.browser = !0),
          (S.env = {}),
          (S.argv = []),
          (S.version = ""),
          (S.versions = {}),
          (S.on = q),
          (S.addListener = q),
          (S.once = q),
          (S.off = q),
          (S.removeListener = q),
          (S.removeAllListeners = q),
          (S.emit = q),
          (S.prependListener = q),
          (S.prependOnceListener = q),
          (S.listeners = function (e) {
            return [];
          }),
          (S.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (S.cwd = function () {
            return "/";
          }),
          (S.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (S.umask = function () {
            return 0;
          });
        var D = t({}),
          G = function (e, t, n) {
            var i = this || D;
            return (
              d.forEach(n, function (n) {
                e = n.call(i, e, t);
              }),
              e
            );
          },
          H = function (e) {
            return !(!e || !e.__CANCEL__);
          },
          $ = t({});
        function z(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new A("canceled");
        }
        var W,
          K = function (e) {
            return (
              z(e),
              (e.headers = e.headers || {}),
              (e.data = G.call(e, e.data, e.headers, e.transformRequest)),
              (e.headers = d.merge(
                e.headers.common || {},
                e.headers[e.method] || {},
                e.headers
              )),
              d.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                function (t) {
                  delete e.headers[t];
                }
              ),
              (e.adapter || $.adapter)(e).then(
                function (t) {
                  return (
                    z(e),
                    (t.data = G.call(
                      e,
                      t.data,
                      t.headers,
                      e.transformResponse
                    )),
                    t
                  );
                },
                function (t) {
                  return (
                    H(t) ||
                      (z(e),
                      t &&
                        t.response &&
                        (t.response.data = G.call(
                          e,
                          t.response.data,
                          t.response.headers,
                          e.transformResponse
                        ))),
                    Promise.reject(t)
                  );
                }
              )
            );
          },
          V = function (e, t) {
            t = t || {};
            var n = {};
            function i(e, t) {
              return d.isPlainObject(e) && d.isPlainObject(t)
                ? d.merge(e, t)
                : d.isPlainObject(t)
                ? d.merge({}, t)
                : d.isArray(t)
                ? t.slice()
                : t;
            }
            function r(n) {
              return d.isUndefined(t[n])
                ? d.isUndefined(e[n])
                  ? void 0
                  : i(void 0, e[n])
                : i(e[n], t[n]);
            }
            function a(e) {
              if (!d.isUndefined(t[e])) return i(void 0, t[e]);
            }
            function o(n) {
              return d.isUndefined(t[n])
                ? d.isUndefined(e[n])
                  ? void 0
                  : i(void 0, e[n])
                : i(void 0, t[n]);
            }
            function s(n) {
              return n in t ? i(e[n], t[n]) : n in e ? i(void 0, e[n]) : void 0;
            }
            var u = {
              url: a,
              method: a,
              data: a,
              baseURL: o,
              transformRequest: o,
              transformResponse: o,
              paramsSerializer: o,
              timeout: o,
              timeoutMessage: o,
              withCredentials: o,
              adapter: o,
              responseType: o,
              xsrfCookieName: o,
              xsrfHeaderName: o,
              onUploadProgress: o,
              onDownloadProgress: o,
              decompress: o,
              maxContentLength: o,
              maxBodyLength: o,
              transport: o,
              httpAgent: o,
              httpsAgent: o,
              cancelToken: o,
              socketPath: o,
              responseEncoding: o,
              validateStatus: s,
            };
            return (
              d.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
                var t = u[e] || r,
                  i = t(e);
                (d.isUndefined(i) && t !== s) || (n[e] = i);
              }),
              n
            );
          },
          J = "0.24.0",
          Q = J,
          X = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            X[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        var Y = {};
        X.transitional = function (e, t, n) {
          function i(e, t) {
            return (
              "[Axios v" +
              Q +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return function (n, r, a) {
            if (!1 === e)
              throw new Error(
                i(r, " has been removed" + (t ? " in " + t : ""))
              );
            return (
              t &&
                !Y[r] &&
                ((Y[r] = !0),
                console.warn(
                  i(
                    r,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, r, a)
            );
          };
        };
        var Z,
          ee = {},
          te = (W = {
            assertOptions: function (e, t, n) {
              if ("object" != typeof e)
                throw new TypeError("options must be an object");
              for (var i = Object.keys(e), r = i.length; r-- > 0; ) {
                var a = i[r],
                  o = t[a];
                if (o) {
                  var s = e[a],
                    u = void 0 === s || o(s, a, e);
                  if (!0 !== u)
                    throw new TypeError("option " + a + " must be " + u);
                } else if (!0 !== n) throw Error("Unknown option " + a);
              }
            },
            validators: X,
          }).validators;
        function ne(e) {
          (this.defaults = e),
            (this.interceptors = { request: new f(), response: new f() });
        }
        function ie(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var n = this;
          this.promise.then(function (e) {
            if (n._listeners) {
              var t,
                i = n._listeners.length;
              for (t = 0; t < i; t++) n._listeners[t](e);
              n._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                i = new Promise(function (e) {
                  n.subscribe(e), (t = e);
                }).then(e);
              return (
                (i.cancel = function () {
                  n.unsubscribe(t);
                }),
                i
              );
            }),
            e(function (e) {
              n.reason || ((n.reason = new A(e)), t(n.reason));
            });
        }
        (ne.prototype.request = function (e) {
          "string" == typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = V(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var t = e.transitional;
          void 0 !== t &&
            W.assertOptions(
              t,
              {
                silentJSONParsing: te.transitional(te.boolean),
                forcedJSONParsing: te.transitional(te.boolean),
                clarifyTimeoutError: te.transitional(te.boolean),
              },
              !1
            );
          var n = [],
            i = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((i = i && t.synchronous), n.unshift(t.fulfilled, t.rejected));
          });
          var r,
            a = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              a.push(e.fulfilled, e.rejected);
            }),
            !i)
          ) {
            var o = [K, void 0];
            for (
              Array.prototype.unshift.apply(o, n),
                o = o.concat(a),
                r = Promise.resolve(e);
              o.length;

            )
              r = r.then(o.shift(), o.shift());
            return r;
          }
          for (var s = e; n.length; ) {
            var u = n.shift(),
              l = n.shift();
            try {
              s = u(s);
            } catch (d) {
              l(d);
              break;
            }
          }
          try {
            r = K(s);
          } catch (d) {
            return Promise.reject(d);
          }
          for (; a.length; ) r = r.then(a.shift(), a.shift());
          return r;
        }),
          (ne.prototype.getUri = function (e) {
            return (
              (e = V(this.defaults, e)),
              p(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          d.forEach(["delete", "get", "head", "options"], function (e) {
            ne.prototype[e] = function (t, n) {
              return this.request(
                V(n || {}, { method: e, url: t, data: (n || {}).data })
              );
            };
          }),
          d.forEach(["post", "put", "patch"], function (e) {
            ne.prototype[e] = function (t, n, i) {
              return this.request(V(i || {}, { method: e, url: t, data: n }));
            };
          }),
          (ee = ne),
          (ie.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
          }),
          (ie.prototype.subscribe = function (e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }),
          (ie.prototype.unsubscribe = function (e) {
            if (this._listeners) {
              var t = this._listeners.indexOf(e);
              -1 !== t && this._listeners.splice(t, 1);
            }
          }),
          (ie.source = function () {
            var e;
            return {
              token: new ie(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (Z = ie);
        var re = {},
          ae = (function e(t) {
            var n = new ee(t),
              r = i(ee.prototype.request, n);
            return (
              d.extend(r, ee.prototype, n),
              d.extend(r, n),
              (r.create = function (n) {
                return e(V(t, n));
              }),
              r
            );
          })(t({}));
        (ae.Axios = ee),
          (ae.Cancel = A),
          (ae.CancelToken = Z),
          (ae.isCancel = H),
          (ae.VERSION = J),
          (ae.all = function (e) {
            return Promise.all(e);
          }),
          (ae.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (ae.isAxiosError = function (e) {
            return "object" == typeof e && !0 === e.isAxiosError;
          }),
          ((re = ae).default = ae);
        var oe = re,
          se = {},
          ue =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(se, "__esModule", { value: !0 }),
          (se.makeLiquidAPI =
            se.makeBisqMarketsAPI =
            se.makeBisqAPI =
            se.makeBitcoinAPI =
              void 0);
        var le = ue(oe);
        (se.makeBitcoinAPI = function (e) {
          var t = e.hostname,
            n = e.network;
          return (
            (n = n && ["testnet", "signet"].includes(n) ? "/" + n : ""),
            (null == t ? void 0 : t.includes("localhost"))
              ? {
                  api: le.default.create({
                    baseURL: "http://" + t + n + "/api/",
                  }),
                }
              : {
                  api: le.default.create({
                    baseURL: "https://" + t + n + "/api/",
                  }),
                }
          );
        }),
          (se.makeBisqAPI = function (e) {
            return (null == e ? void 0 : e.includes("localhost"))
              ? {
                  api: le.default.create({
                    baseURL: "http://" + e + "/bisq/api/",
                  }),
                }
              : {
                  api: le.default.create({
                    baseURL: "https://" + e + "/bisq/api/",
                  }),
                };
          }),
          (se.makeBisqMarketsAPI = function () {
            return {
              api: le.default.create({
                baseURL: "https://bisq.markets/api/v1/markets/",
              }),
            };
          }),
          (se.makeLiquidAPI = function (e) {
            return (null == e ? void 0 : e.includes("localhost"))
              ? {
                  api: le.default.create({
                    baseURL: "http://" + e + "/liquid/api/",
                  }),
                }
              : {
                  api: le.default.create({
                    baseURL: "https://" + e + "/liquid/api/",
                  }),
                };
          }),
          se.makeBitcoinAPI,
          se.makeBisqAPI,
          se.makeBisqMarketsAPI,
          se.makeLiquidAPI;
        var de = {},
          ce =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          pe =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(de, "__esModule", { value: !0 }),
          (de.useAddresses = void 0),
          (de.useAddresses = function (e) {
            return {
              getAddress: function (t) {
                return ce(void 0, void 0, void 0, function () {
                  return pe(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/address/" + t.address)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxs: function (t) {
                return ce(void 0, void 0, void 0, function () {
                  return pe(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/address/" + t.address + "/txs")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxsChain: function (t) {
                return ce(void 0, void 0, void 0, function () {
                  return pe(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/address/" + t.address + "/txs/chain"),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxsMempool: function (t) {
                return ce(void 0, void 0, void 0, function () {
                  return pe(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/address/" + t.address + "/txs/mempool"),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxsUtxo: function (t) {
                return ce(void 0, void 0, void 0, function () {
                  return pe(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/address/" + t.address + "/utxo")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var fe = {},
          ye =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          me =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(fe, "__esModule", { value: !0 }),
          (fe.useBlocks = void 0),
          (fe.useBlocks = function (e) {
            return {
              getBlock: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlocks: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/blocks/" + t.start_height)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockStatus: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash + "/status")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockTxs: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/block/" + t.hash + "/txs/" + t.start_index),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockTxid: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/block/" + t.hash + "/txid/" + t.index),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockTxids: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash + "/txids")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockRaw: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash + "/raw")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockHeader: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash + "/header")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockHeight: function (t) {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block-height/" + t.height)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlocksTipHash: function () {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/blocks/tip/hash")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getBlocksTipHeight: function () {
                return ye(void 0, void 0, void 0, function () {
                  return me(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/blocks/tip/height")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var ve = {},
          he =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          be =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(ve, "__esModule", { value: !0 }),
          (ve.useDifficulty = void 0),
          (ve.useDifficulty = function (e) {
            return {
              getDifficultyAdjustment: function () {
                return he(void 0, void 0, void 0, function () {
                  return be(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/v1/difficulty-adjustment")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var we = {},
          ge =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          xe =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(we, "__esModule", { value: !0 }),
          (we.useFees = void 0),
          (we.useFees = function (e) {
            return {
              getFeesRecommended: function () {
                return ge(void 0, void 0, void 0, function () {
                  return xe(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/v1/fees/recommended")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getFeesMempoolBlocks: function () {
                return ge(void 0, void 0, void 0, function () {
                  return xe(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/v1/fees/mempool-blocks")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getCPFP: function (t) {
                return ge(void 0, void 0, void 0, function () {
                  return xe(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/v1/cpfp/" + t.txid)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var Te = {},
          ke =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          Ae =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(Te, "__esModule", { value: !0 }),
          (Te.useMempool = void 0),
          (Te.useMempool = function (e) {
            return {
              getMempool: function () {
                return ke(void 0, void 0, void 0, function () {
                  return Ae(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/mempool")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getMempoolTxids: function () {
                return ke(void 0, void 0, void 0, function () {
                  return Ae(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/mempool/txids")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getMempoolRecent: function () {
                return ke(void 0, void 0, void 0, function () {
                  return Ae(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/mempool/recent")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var _e = {},
          Ce =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          Ne =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(_e, "__esModule", { value: !0 }),
          (_e.useTransactions = void 0),
          (_e.useTransactions = function (e) {
            return {
              getTx: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxStatus: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/status")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxHex: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/hex")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxRaw: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/raw")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxMerkleBlockProof: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/tx/" + t.txid + "/merkleblock-proof"),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxMerkleProof: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/merkle-proof")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxOutspend: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/tx/" + t.txid + "/outspend/" + t.vout),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxOutspends: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/outspends")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              postTx: function (t) {
                return Ce(void 0, void 0, void 0, function () {
                  return Ne(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.post("/tx", { txhex: t.txhex })];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var je = {},
          Se =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          Re =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(je, "__esModule", { value: !0 });
        var Ie = function (e, t) {
            var n = new WebSocket(t);
            return (
              n.addEventListener("open", function () {
                n.send(JSON.stringify({ action: "want", data: e }));
              }),
              n.addEventListener("close", function () {
                return Se(this, void 0, void 0, function () {
                  return Re(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, Me(6e4)];
                      case 1:
                        return n.sent(), Ie(e, t), [2];
                    }
                  });
                });
              }),
              n
            );
          },
          Me = function (e) {
            return new Promise(function (t) {
              setTimeout(t, e);
            });
          };
        je.default = Ie;
        var Ee = {},
          Oe =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          Pe =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            },
          Le =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(Ee, "__esModule", { value: !0 });
        var Be = Le(function () {
            throw new Error(
              "ws does not work in the browser. Browser clients must use the native WebSocket object"
            );
          }),
          Ue = function (e, t) {
            var n = new Be.default(t),
              i = setInterval(function () {
                n.ping();
              }, 3e4);
            return (
              n.on("open", function () {
                n.send(JSON.stringify({ action: "want", data: e }));
              }),
              n.on("close", function () {
                return Oe(this, void 0, void 0, function () {
                  return Pe(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return clearInterval(i), n.terminate(), [4, Fe(6e4)];
                      case 1:
                        return r.sent(), Ue(e, t), [2];
                    }
                  });
                });
              }),
              n
            );
          },
          Fe = function (e) {
            return new Promise(function (t) {
              setTimeout(t, e);
            });
          };
        Ee.default = Ue;
        var qe = {},
          De =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(qe, "__esModule", { value: !0 }),
          (qe.useWebsocket = void 0);
        var Ge = De(je),
          He = De(Ee);
        qe.useWebsocket = function (e, t) {
          var n = "wss://" + e + ("main" === t ? "" : "/" + t) + "/api/v1/ws";
          return {
            initClient: function (e) {
              var t = e.options;
              return Ge.default(t, n);
            },
            initServer: function (e) {
              var t = e.options;
              return He.default(t, n);
            },
          };
        };
        var $e = {},
          ze =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          We =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty($e, "__esModule", { value: !0 }),
          ($e.useAddresses = void 0),
          ($e.useAddresses = function (e) {
            return {
              getAddress: function (t) {
                return ze(void 0, void 0, void 0, function () {
                  return We(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/address/" + t.address)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var Ke = {},
          Ve =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          Je =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(Ke, "__esModule", { value: !0 }),
          (Ke.useBlocks = void 0),
          (Ke.useBlocks = function (e) {
            return {
              getBlock: function (t) {
                return Ve(void 0, void 0, void 0, function () {
                  return Je(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlocks: function (t) {
                return Ve(void 0, void 0, void 0, function () {
                  return Je(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/blocks/" + t.index + "/" + t.length),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlocksTipHeight: function () {
                return Ve(void 0, void 0, void 0, function () {
                  return Je(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/blocks/tip/height")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var Qe = {},
          Xe =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          Ye =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(Qe, "__esModule", { value: !0 }),
          (Qe.useStatistics = void 0),
          (Qe.useStatistics = function (e) {
            return {
              getStats: function () {
                return Xe(void 0, void 0, void 0, function () {
                  return Ye(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/stats")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var Ze = {},
          et =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          tt =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(Ze, "__esModule", { value: !0 }),
          (Ze.useTransactions = void 0),
          (Ze.useTransactions = function (e) {
            return {
              getTx: function (t) {
                return et(void 0, void 0, void 0, function () {
                  return tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxs: function (t) {
                return et(void 0, void 0, void 0, function () {
                  return tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/txs/" + t.index + "/" + t.length)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var nt = {},
          it =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          rt =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(nt, "__esModule", { value: !0 }),
          (nt.useMarkets = void 0),
          (nt.useMarkets = function (e) {
            return {
              getCurrencies: function (t) {
                return (
                  void 0 === t &&
                    (t = {
                      basecurrency: "BTC",
                      type: "all",
                      format: "jsonpretty",
                    }),
                  it(void 0, void 0, void 0, function () {
                    return rt(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, e.get("/currencies", { params: t })];
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  })
                );
              },
              getDepth: function (t) {
                return (
                  void 0 === t &&
                    (t = { market: "xmr_btc", format: "jsonpretty" }),
                  it(void 0, void 0, void 0, function () {
                    return rt(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, e.get("/depth", { params: t })];
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  })
                );
              },
              getHloc: function (t) {
                return it(void 0, void 0, void 0, function () {
                  return rt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/hloc", { params: t })];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getMarkets: function (t) {
                return (
                  void 0 === t && (t = { format: "jsonpretty" }),
                  it(void 0, void 0, void 0, function () {
                    return rt(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, e.get("/markets", { params: t })];
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  })
                );
              },
              getOffers: function (t) {
                return (
                  void 0 === t &&
                    (t = { market: "xmr_btc", format: "jsonpretty" }),
                  it(void 0, void 0, void 0, function () {
                    return rt(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, e.get("/offers", { params: t })];
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  })
                );
              },
              getTicker: function (t) {
                return (
                  void 0 === t && (t = { format: "jsonpretty" }),
                  it(void 0, void 0, void 0, function () {
                    return rt(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, e.get("/ticker", { params: t })];
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  })
                );
              },
              getTrades: function (t) {
                return (
                  void 0 === t &&
                    (t = {
                      market: "all",
                      format: "jsonpretty",
                      timestamp_from: "2016-01-01",
                      timestamp_to: "now",
                      limit: 100,
                      sort: "desc",
                    }),
                  it(void 0, void 0, void 0, function () {
                    return rt(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, e.get("/trades", { params: t })];
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  })
                );
              },
              getVolumes: function (t) {
                return (
                  void 0 === t &&
                    (t = {
                      basecurrency: "",
                      market: "",
                      interval: "auto",
                      timestamp_from: "2016-01-01",
                      timestamp_to: "now",
                      format: "jsonpretty",
                    }),
                  it(void 0, void 0, void 0, function () {
                    return rt(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, e.get("/trades", { params: t })];
                        case 1:
                          return [2, n.sent().data];
                      }
                    });
                  })
                );
              },
            };
          });
        var at = {},
          ot =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          st =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(at, "__esModule", { value: !0 }),
          (at.useAssets = void 0),
          (at.useAssets = function (e) {
            return {
              getAsset: function (t) {
                return ot(void 0, void 0, void 0, function () {
                  return st(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/asset/" + t.asset_id)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAssetIcon: function (t) {
                return ot(void 0, void 0, void 0, function () {
                  return st(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/v1/asset/" + t.asset_id + "/icon")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAssetTxs: function (t) {
                return ot(void 0, void 0, void 0, function () {
                  var n;
                  return st(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (n = !0 === t.is_mempool ? "/mempool" : "/chain"),
                          [4, e.get("/asset/" + t.asset_id + "/txs" + n)]
                        );
                      case 1:
                        return [2, i.sent().data];
                    }
                  });
                });
              },
              getAssetSupply: function (t) {
                return ot(void 0, void 0, void 0, function () {
                  var n;
                  return st(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (n = !0 === t.decimal ? "/decimal" : ""),
                          [4, e.get("/asset/" + t.asset_id + "/supply" + n)]
                        );
                      case 1:
                        return [2, i.sent().data];
                    }
                  });
                });
              },
              getAssetsIcons: function () {
                return ot(void 0, void 0, void 0, function () {
                  return st(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/v1/assets/icons")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var ut = {},
          lt =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          dt =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(ut, "__esModule", { value: !0 }),
          (ut.useAddresses = void 0),
          (ut.useAddresses = function (e) {
            return {
              getAddress: function (t) {
                return lt(void 0, void 0, void 0, function () {
                  return dt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/address/" + t.address)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxs: function (t) {
                return lt(void 0, void 0, void 0, function () {
                  return dt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/address/" + t.address + "/txs")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxsChain: function (t) {
                return lt(void 0, void 0, void 0, function () {
                  return dt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/address/" + t.address + "/txs/chain"),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxsMempool: function (t) {
                return lt(void 0, void 0, void 0, function () {
                  return dt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/address/" + t.address + "/txs/mempool"),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getAddressTxsUtxo: function (t) {
                return lt(void 0, void 0, void 0, function () {
                  return dt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/address/" + t.address + "/utxo")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var ct = {},
          pt =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          ft =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(ct, "__esModule", { value: !0 }),
          (ct.useBlocks = void 0),
          (ct.useBlocks = function (e) {
            return {
              getBlock: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlocks: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/blocks/" + t.start_height)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockStatus: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash + "/status")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockTxs: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/block/" + t.hash + "/txs/" + t.start_index),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockTxid: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/block/" + t.hash + "/txid/" + t.index),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockTxids: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash + "/txids")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockRaw: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block/" + t.hash + "/raw")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlockHeight: function (t) {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/block-height/" + t.height)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getBlocksTipHash: function () {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/blocks/tip/hash")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getBlocksTipHeight: function () {
                return pt(void 0, void 0, void 0, function () {
                  return ft(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/blocks/tip/height")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var yt = {},
          mt =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          vt =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(yt, "__esModule", { value: !0 }),
          (yt.useFees = void 0),
          (yt.useFees = function (e) {
            return {
              getFeesRecommended: function () {
                return mt(void 0, void 0, void 0, function () {
                  return vt(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/v1/fees/recommended")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getFeesMempoolBlocks: function () {
                return mt(void 0, void 0, void 0, function () {
                  return vt(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/v1/fees/mempool-blocks")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getCPFP: function (t) {
                return mt(void 0, void 0, void 0, function () {
                  return vt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/v1/cpfp/" + t.txid)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var ht = {},
          bt =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          wt =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(ht, "__esModule", { value: !0 }),
          (ht.useMempool = void 0),
          (ht.useMempool = function (e) {
            return {
              getMempool: function () {
                return bt(void 0, void 0, void 0, function () {
                  return wt(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/mempool")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getMempoolTxids: function () {
                return bt(void 0, void 0, void 0, function () {
                  return wt(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/mempool/txids")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
              getMempoolRecent: function () {
                return bt(void 0, void 0, void 0, function () {
                  return wt(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.get("/mempool/recent")];
                      case 1:
                        return [2, t.sent().data];
                    }
                  });
                });
              },
            };
          });
        var gt = {},
          xt =
            (this && this.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, a) {
                function o(e) {
                  try {
                    u(i.next(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function s(e) {
                  try {
                    u(i.throw(e));
                  } catch (t) {
                    a(t);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                u((i = i.apply(e, t || [])).next());
              });
            },
          Tt =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, a[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (a = [2 & a[0], r.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            r = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (r =
                                  (r = o.trys).length > 0 && r[r.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!r || (a[1] > r[0] && a[1] < r[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < r[1]) {
                              (o.label = r[1]), (r = a);
                              break;
                            }
                            if (r && o.label < r[2]) {
                              (o.label = r[2]), o.ops.push(a);
                              break;
                            }
                            r[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (s) {
                        (a = [6, s]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            };
        Object.defineProperty(gt, "__esModule", { value: !0 }),
          (gt.useTransactions = void 0),
          (gt.useTransactions = function (e) {
            return {
              getTx: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid)];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxStatus: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/status")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxHex: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/hex")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxRaw: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/raw")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxMerkleBlockProof: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/tx/" + t.txid + "/merkleblock-proof"),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxMerkleProof: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/merkle-proof")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxOutspend: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          e.get("/tx/" + t.txid + "/outspend/" + t.vout),
                        ];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              getTxOutspends: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.get("/tx/" + t.txid + "/outspends")];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
              postTx: function (t) {
                return xt(void 0, void 0, void 0, function () {
                  return Tt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.post("/tx", { txid: t.txhex })];
                      case 1:
                        return [2, n.sent().data];
                    }
                  });
                });
              },
            };
          });
        var kt = {},
          At =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(kt, "__esModule", { value: !0 }),
          (kt.useWebsocket = void 0);
        var _t = At(je),
          Ct = At(Ee);
        kt.useWebsocket = function (e) {
          var t = "wss://" + e + "/liquid/api/v1/ws";
          return {
            initClient: function (e) {
              var n = e.options;
              return _t.default(n, t);
            },
            initServer: function (e) {
              var n = e.options;
              return Ct.default(n, t);
            },
          };
        };
        var Nt = function (e) {
          var t =
              void 0 === e ? { hostname: "mempool.space", network: "main" } : e,
            n = t.hostname,
            i = t.network;
          n || (n = "mempool.space"), i || (i = "main");
          var r = se.makeBitcoinAPI({ hostname: n, network: i }).api,
            a = se.makeBisqAPI(n).api,
            o = se.makeBisqMarketsAPI().api,
            s = se.makeLiquidAPI(n).api;
          return {
            bitcoin: {
              addresses: de.useAddresses(r),
              blocks: fe.useBlocks(r),
              difficulty: ve.useDifficulty(r),
              fees: we.useFees(r),
              mempool: Te.useMempool(r),
              transactions: _e.useTransactions(r),
              websocket: qe.useWebsocket(n, i),
            },
            bisq: {
              statistics: Qe.useStatistics(a),
              addresses: $e.useAddresses(a),
              blocks: Ke.useBlocks(a),
              transactions: Ze.useTransactions(a),
              markets: nt.useMarkets(o),
            },
            liquid: {
              addresses: ut.useAddresses(s),
              assets: at.useAssets(s),
              blocks: ct.useBlocks(s),
              fees: yt.useFees(s),
              mempool: ht.useMempool(s),
              transactions: gt.useTransactions(s),
              websocket: kt.useWebsocket(n),
            },
          };
        };
        return (Nt.default = Nt), Nt;
      })();
    },
    64211: (e, t, n) => {
      "use strict";
      n.d(t, { Nx: () => a });
      var i = n(17876);
      const r = n(64021);
      function a(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "YYYY-MM-DD HH:mm:ss";
        return e ? i.utc(e).local().format(t) : "--";
      }
      i.extend(r);
    },
    64601: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var i = n(44063),
        r = n(70481);
      function a(e) {
        return (0, r.jsx)("div", {
          className: "nostr-menu",
          children: (0, r.jsx)(i.A, { className: "dashborad-sub-menu", ...e }),
        });
      }
    },
    66759: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var i = n(78570),
        r = n(2442),
        a = n(70481);
      const o = (0, a.jsx)(i.A, { spin: !0 }),
        s = () => (0, a.jsx)(r.A, { size: "small", indicator: o });
    },
    76636: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var i = n(46941),
        r = n(70481);
      function a() {
        return (0, r.jsxs)("div", {
          className: "nostr-assets-container nostr-description",
          children: [
            (0, r.jsx)("h3", {
              className: "nostr-description-title",
              children: (0, r.jsx)(i.x6, { id: "NScCoj" }),
            }),
            (0, r.jsx)("div", { children: (0, r.jsx)(i.x6, { id: "YvErm6" }) }),
            (0, r.jsx)("h3", {
              className: "nostr-description-title mt20",
              children: (0, r.jsx)(i.x6, { id: "gYc0LU" }),
            }),
            (0, r.jsx)("div", { children: (0, r.jsx)(i.x6, { id: "LwcKVy" }) }),
            (0, r.jsx)("div", { children: (0, r.jsx)(i.x6, { id: "Af4YPM" }) }),
            (0, r.jsx)("h3", {
              className: "nostr-description-title mt20",
              children: (0, r.jsx)(i.x6, { id: "yXJ2Ai" }),
            }),
            (0, r.jsx)("div", { children: (0, r.jsx)(i.x6, { id: "/cr9Lu" }) }),
            (0, r.jsx)("div", { children: (0, r.jsx)(i.x6, { id: "rwr3iu" }) }),
          ],
        });
      }
    },
    76871: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      var i = n(70481);
      function r(e) {
        let { pageTitle: t = "", children: n } = e;
        return (0, i.jsxs)("div", {
          className: "nostr-container",
          children: [
            t &&
              (0, i.jsx)("div", { className: "nostr-page-title", children: t }),
            n,
          ],
        });
      }
    },
    77766: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i });
      n(51477);
      const i =
        n.p +
        "static/media/arrow_up_right_green.6e7a062494e0a7898fe8aa8c71c832dd.svg";
    },
    91061: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var i = n(51477),
        r = n(70481);
      function a(e) {
        let { children: t, enable: n = !1 } = e;
        const a = (0, i.useCallback)(() => {
            window._message.warning("Coming soon.");
          }, []),
          o = i.cloneElement(t, { onClick: a });
        return (0, r.jsx)(r.Fragment, { children: n ? t : o });
      }
    },
    91179: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => m });
      var i = n(46941),
        r = n(37209),
        a = n(76484),
        o = n(22233),
        s = n(1126),
        u = n(20109),
        l = n(40036),
        d = n.n(l),
        c = n(55635),
        p = n(51477),
        f = n(42296),
        y = n(70481);
      function m(e) {
        let {
          showShareGiftModal: t = !1,
          setShowShareGiftModal: n,
          detail: l,
        } = e;
        const m = (0, f.W6)(),
          v = (0, p.useMemo)(
            () =>
              `${location.origin}/?n#/products/gift/find?code=${l.password}`,
            [l.password]
          ),
          h = (0, p.useCallback)(
            (e) => {
              d()(e || v), a.Ay.success("Copied!"), n(!1);
            },
            [n, v]
          );
        return (0, y.jsx)(o.A, {
          className: "nostr-modal",
          width: 400,
          title: r.Ru._({ id: "SyRmWy" }),
          centered: !0,
          open: t,
          footer: null,
          closable: !0,
          onCancel: () => {
            n(!1),
              "create" == (null === l || void 0 === l ? void 0 : l.from) &&
                m.push(
                  `/products/gift/detail/${
                    null === l || void 0 === l ? void 0 : l.id
                  }`
                );
          },
          children: (0, y.jsx)(y.Fragment, {
            children: (0, y.jsxs)(s.A, {
              direction: "vertical",
              align: "center",
              style: { width: "100%", marginTop: "8px" },
              children: [
                (0, y.jsx)(c.r6, {
                  className: "gift-share-btn",
                  url: v,
                  title: r.Ru._({ id: "Eky0kS" }),
                  children: (0, y.jsx)(i.x6, { id: "uvt91Z" }),
                }),
                (0, y.jsx)(c.VI, {
                  className: "gift-share-btn",
                  url: v,
                  title:
                    "Ready for a Lightning Surprise? Claim your first Taproot Assets gift now.",
                  children: (0, y.jsx)(i.x6, { id: "on+mNS" }),
                }),
                (0, y.jsx)(u.Ay, {
                  type: "default",
                  className: "gift-share-btn",
                  onClick: () => h(l.password),
                  children: (0, y.jsx)(i.x6, { id: "JuGUa5" }),
                }),
                (0, y.jsx)(u.Ay, {
                  type: "default",
                  className: "gift-share-btn",
                  onClick: () => h(v),
                  children: (0, y.jsx)(i.x6, { id: "czssWF" }),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
