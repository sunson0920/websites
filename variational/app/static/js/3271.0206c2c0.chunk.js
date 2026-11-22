"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [3271],
  {
    93271: (e, i, l) => {
      l.r(i), l.d(i, { default: () => W });
      var s = l(46941),
        a = l(37209),
        n = l(51477),
        t = l(22233),
        o = l(76484),
        d = l(20109),
        r = l(1217),
        c = l(2442),
        u = l(77766),
        v = l(21723),
        m = l(9413),
        x = l(22416),
        h = l(3080),
        p = l(1126),
        j = l(882),
        N = l.n(j),
        w = l(15928),
        b = l(42296),
        y = l(800),
        A = l(17876),
        g = l.n(A),
        f = l(90364),
        R = l(57752),
        k = l(99609),
        C = l(78660),
        _ = (l(14272), l(54140)),
        T = l(70481);
      const S = l(64021);
      g().extend(S);
      const M = { labelCol: { span: 8 }, wrapperCol: { span: 16 } },
        I = { labelCol: { span: 24 }, wrapperCol: { span: 24 } },
        E = "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
        Y = "AIFI";
      function F(e) {
        let {
          isFormShow: i,
          setIsFormShow: l,
          defaultType: c,
          listRun: u,
          defaultAsset: v = "tt",
        } = e;
        (0, b.W6)();
        const { tokenList: j } = (0, w.d4)((e) => {
            let { market: i } = e;
            return i;
          }),
          A = (0, R.A)(),
          [S] = m.A.useForm(),
          [F, P] = (0, n.useState)(!1),
          [q, O] = (0, n.useState)(!1),
          [z, D] = (0, n.useState)(0),
          [U, $] = (0, n.useState)(0),
          [W, K] = (0, n.useState)(0),
          [B, L] = (0, n.useState)(0),
          [H, V] = (0, n.useState)(""),
          { balanceList: J, npubNostrAccount: Q } = (0, w.d4)((e) => {
            let { user: i } = e;
            return i;
          }),
          { handleQueryAllowanceAsync: Z } = (0, C.Gp)("", E),
          { handleSwap: G } = (0, C.jE)(),
          { handleApproveAsyncByCommand: X } = (0, C.zH)(E),
          { handleQueryBalance: ee } = (0, C.m)(),
          ie = (0, n.useMemo)(() => {
            const e = j.find((e) => e.symbol == Y);
            return (null === e || void 0 === e ? void 0 : e.reserve) || 0;
          }, [j]),
          le = (0, n.useCallback)(async () => {
            const e = await Z("TREAT");
            D(null === e || void 0 === e ? void 0 : e.data);
          }, [Z]);
        (0, n.useEffect)(
          () => (
            i &&
              (K(0), L(0), V(c), S.resetFields(), S.setFieldValue("type", c)),
            () => null
          ),
          [c, S, i]
        ),
          (0, n.useEffect)(() => (i && le(), () => null), [le, i]);
        const se = (0, n.useMemo)(() => {
            var e;
            return (
              (null === (e = J.TREAT) || void 0 === e
                ? void 0
                : e.balanceShow) || 0
            );
          }, [J]),
          ae =
            ((0, n.useMemo)(() => {
              var e;
              return (
                (null === (e = J.TRICK) || void 0 === e
                  ? void 0
                  : e.balanceShow) || 0
              );
            }, [J]),
            (0, n.useMemo)(() => _.JJ.find((e) => e.value == H), [H])),
          ne = (0, n.useMemo)(
            () =>
              _.JJ.reduce(
                (e, i) => (
                  "no" === i.value &&
                    (e[i.value] = (0, T.jsx)(s.x6, { id: "cgH/lO" })),
                  "six" === i.value &&
                    (e[i.value] = (0, T.jsx)(s.x6, {
                      id: "glu4cg",
                      values: { 0: i.month },
                    })),
                  "twelve" === i.value &&
                    (e[i.value] = (0, T.jsx)(s.x6, {
                      id: "glu4cg",
                      values: { 0: i.month },
                    })),
                  e
                ),
                {}
              ),
            []
          ),
          te = (0, n.useMemo)(() => {
            const e = new k.A(W).plus(B);
            if (H && e) {
              const i = e
                .dividedBy(null === ae || void 0 === ae ? void 0 : ae.rate)
                .toNumber();
              return (0, y.yC)(i, ie, "floor");
            }
            return 0;
          }, [W, B, ie, H, null === ae || void 0 === ae ? void 0 : ae.rate]),
          oe = (0, n.useCallback)(
            () =>
              te <= 0
                ? (o.Ay.error(
                    a.Ru._({ id: "k961Ap", values: { SWAPCOIN: Y } })
                  ),
                  !1)
                : !(W + B < 100) || (o.Ay.error(a.Ru._({ id: "d+xnHn" })), !1),
            [W, B, te]
          ),
          de = (0, n.useCallback)(async () => {
            try {
              if ((await S.validateFields(), !oe())) return !1;
              O(!0);
            } catch (e) {}
          }, [S, oe]),
          re = (0, n.useCallback)(async () => {
            try {
              if ((await S.validateFields(), !oe())) return !1;
              const e = S.getFieldsValue();
              P(!0);
              const i = { no: "option1", six: "option2", twelve: "option3" },
                s = `exchange TREAT ${
                  (null === e || void 0 === e ? void 0 : e.amount1) || 0
                } type ${i[null === e || void 0 === e ? void 0 : e.type]}`,
                n = await G(s);
              if (0 !== (null === n || void 0 === n ? void 0 : n.code))
                throw new Error(n.data);
              t.A.success({
                wrapClassName: "modal-success",
                title: a.Ru._({ id: "zzDlyQ" }),
                content: a.Ru._({
                  id: "j1PLHm",
                  values: {
                    0: (null === e || void 0 === e ? void 0 : e.amount1) || 0,
                    receive: te,
                    SWAPCOIN: Y,
                  },
                }),
              }),
                await (0, f.yy)(500),
                l(!1),
                O(!1),
                u && u(),
                P(!1);
            } catch (e) {
              window._message.error(e.message || a.Ru._({ id: "qcloGZ" })),
                P(!1);
            } finally {
              ee(Q);
            }
          }, [oe, S, G, te, l, u, ee, Q]),
          ce = (0, n.useCallback)(async () => {
            try {
              if ((await S.validateFields(), !oe())) return !1;
              if (!Number(W) && !Number(B))
                return void window._message.error(a.Ru._({ id: "Z39PmY" }));
              P(!0);
              var e = [];
              W && e.push(`approve ${W} TREAT to ${E}`),
                B && e.push(`approve ${B} TRICK to ${E}`);
              let i = await X(e.join(";"));
              if (!i) return;
              0 === (null === i || void 0 === i ? void 0 : i.code)
                ? (window._message.success(a.Ru._({ id: "xsfQ4r" })),
                  await le())
                : window._message.error(i.data),
                P(!1);
            } catch (l) {
              var i;
              (null !== l &&
                void 0 !== l &&
                null !== (i = l.errorFields) &&
                void 0 !== i &&
                i.length) ||
                window._message.error(l.message);
            } finally {
              P(!1);
            }
          }, [oe, S, W, B, X, le]),
          ue = (0, n.useCallback)(() => {
            l(!1);
          }, [l]),
          ve = (0, n.useMemo)(
            () =>
              Number(W) > Number(se)
                ? (0, T.jsx)(T.Fragment, {
                    children: (0, T.jsx)(d.Ay, {
                      type: "primary",
                      className: N()("nostr-swap-submit-btn"),
                      loading: F,
                      onClick: de,
                      disabled: !0,
                      children: a.Ru._({ id: "znqB4T" }),
                    }),
                  })
                : Number(W) >
                  Number(null === z || void 0 === z ? void 0 : z.amountShow)
                ? (0, T.jsx)(T.Fragment, {
                    children: (0, T.jsx)(d.Ay, {
                      type: "primary",
                      className: N()("nostr-swap-submit-btn btn-yellow"),
                      loading: F,
                      onClick: ce,
                      children: a.Ru._({ id: "Z7ZXbT" }),
                    }),
                  })
                : (0, T.jsx)(T.Fragment, {
                    children: (0, T.jsx)(d.Ay, {
                      type: "primary",
                      className: N()("nostr-swap-submit-btn btn-yellow"),
                      loading: F,
                      onClick: de,
                      children: a.Ru._({ id: "vH2C/2" }),
                    }),
                  }),
            [
              W,
              se,
              null === z || void 0 === z ? void 0 : z.amountShow,
              F,
              de,
              ce,
            ]
          ),
          me = (0, n.useCallback)(
            (e) => {
              let {
                target: { value: i },
              } = e;
              if (Number(i)) {
                const e = j.find((e) => "TREAT" == e.name),
                  l = (0, y.yC)(
                    Number(i),
                    (null === e || void 0 === e ? void 0 : e.reserve) || 0,
                    "floor"
                  );
                l != Number(i)
                  ? (S.setFieldValue("amount1", l), K(l))
                  : K(Number(i));
              } else K(0);
            },
            [S, j]
          ),
          xe = (0, n.useCallback)((e) => {
            let {
              target: { value: i },
            } = e;
            V(i);
          }, []);
        (0, n.useEffect)(() => {
          i && Q && ee(Q);
        }, [ee, i, Q]);
        const he = (0, n.useMemo)(
            () =>
              H
                ? (0, y.yC)(
                    te *
                      (null === ae || void 0 === ae
                        ? void 0
                        : ae.initialUnlock),
                    ie,
                    "floor"
                  )
                : "--",
            [
              te,
              ie,
              H,
              null === ae || void 0 === ae ? void 0 : ae.initialUnlock,
            ]
          ),
          pe = (0, n.useMemo)(() => {
            const e = [
              { title: a.Ru._({ id: "8Waykz" }), dataIndex: "No" },
              { title: a.Ru._({ id: "zsmhKv" }), dataIndex: "date" },
              { title: a.Ru._({ id: "o2oMZe" }), dataIndex: "amount" },
            ];
            let i = [];
            if (null !== ae && void 0 !== ae && ae.month) {
              const e = new k.A(W)
                .plus(B)
                .dividedBy(null === ae || void 0 === ae ? void 0 : ae.rate)
                .minus(he);
              let l = g()();
              i.push({
                No: "#1",
                date: l.format("YYYY/MM/DD"),
                amount: (0, y.yC)(he, ie, "floor"),
              });
              for (
                let s = 1;
                s <= (null === ae || void 0 === ae ? void 0 : ae.month);
                s++
              ) {
                let a = l.add(s, "month");
                a.date() !== l.date() && (a = a.add(1, "day"));
                let n = 0;
                if (s == (null === ae || void 0 === ae ? void 0 : ae.month)) {
                  const i =
                      (null === ae || void 0 === ae ? void 0 : ae.month) - 1,
                    l = (0, y.yC)(
                      e
                        .dividedBy(
                          null === ae || void 0 === ae ? void 0 : ae.month
                        )
                        .toNumber(),
                      ie,
                      "floor"
                    ),
                    s = new k.A(l).times(i);
                  n = e.minus(s).toNumber();
                } else
                  n = e
                    .dividedBy(null === ae || void 0 === ae ? void 0 : ae.month)
                    .toNumber();
                i.push({
                  No: "#" + (s + 1),
                  date: a.format("YYYY/MM/DD"),
                  amount: (0, y.yC)(n, ie, "floor"),
                });
              }
            }
            return (null === ae || void 0 === ae ? void 0 : ae.month) > 0
              ? (0, T.jsx)(r.A, {
                  className: "mt20 table-transparent",
                  showSorterTooltip: !1,
                  rowKey: "No",
                  columns: e,
                  dataSource: i,
                  pagination: !1,
                })
              : (0, T.jsx)(T.Fragment, {});
          }, [
            W,
            B,
            he,
            ie,
            null === ae || void 0 === ae ? void 0 : ae.month,
            null === ae || void 0 === ae ? void 0 : ae.rate,
          ]),
          je = (0, n.useCallback)(
            (e) => {
              "TREAT" == e &&
                (K(se),
                S.setFieldValue("amount1", se),
                S.validateFields(["amount1"]));
            },
            [S, se]
          );
        return (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsx)(t.A, {
              className: "nostr-modal-large",
              open: i,
              width: "650px",
              zIndex: 999,
              title: (0, T.jsx)(s.x6, {
                id: "HTn3sc",
                values: { SWAPCOIN: Y },
              }),
              footer: null,
              onCancel: ue,
              children: (0, T.jsxs)(m.A, {
                className: "nostr-swap-form",
                ...M,
                form: S,
                name: "stakeForm",
                autoComplete: "off",
                initialValues: {},
                children: [
                  (0, T.jsx)(m.A.Item, {
                    name: "amount1",
                    className: "nostr-swap-select-value",
                    label: (0, T.jsxs)(T.Fragment, {
                      children: [
                        a.Ru._({ id: "hehnjM" }),
                        (0, T.jsx)("span", {
                          className: "color-pink ml5",
                          children: "(TREAT)",
                        }),
                      ],
                    }),
                    rules: [
                      (e) => {
                        let { getFieldValue: i } = e;
                        return {
                          validator(e, i) {
                            const l = S.getFieldValue("amount2");
                            return i
                              ? Number(i)
                                ? Number(i) > se
                                  ? Promise.reject(
                                      new Error(
                                        a.Ru._({
                                          id: "ivF1CY",
                                          values: { TREAT: "TREAT" },
                                        })
                                      )
                                    )
                                  : Number(i) || Number(l)
                                  ? Promise.resolve()
                                  : Promise.reject(
                                      new Error(a.Ru._({ id: "7CQuBz" }))
                                    )
                                : Promise.reject(
                                    new Error(a.Ru._({ id: "D4qWat" }))
                                  )
                              : Number(i) || Number(l)
                              ? Promise.resolve()
                              : Promise.reject(
                                  new Error(a.Ru._({ id: "7CQuBz" }))
                                );
                          },
                        };
                      },
                    ],
                    children: (0, T.jsx)(x.A, {
                      className: "nostr-swap-input",
                      inputMode: "decimal",
                      suffix: (0, T.jsx)(d.Ay, {
                        type: "link",
                        className: "suffix-btn",
                        onClick: () => je("TREAT"),
                        children: (0, T.jsx)(s.x6, { id: "CK1KXz" }),
                      }),
                      onChange: me,
                      placeholder: a.Ru._({ id: "7CQuBz" }),
                    }),
                  }),
                  (0, T.jsx)(m.A.Item, {
                    wrapperCol: { offset: A.isMobile ? 0 : 8, span: 24 },
                    style: { marginTop: A.isMobile ? "-8px" : "-20px" },
                    children: (0, T.jsxs)("div", {
                      className: "f14",
                      children: [
                        (0, T.jsxs)("span", {
                          className: "color-dark",
                          children: [(0, T.jsx)(s.x6, { id: "fsBGk0" }), ":"],
                        }),
                        (0, T.jsxs)("span", {
                          className: "color-base ml5",
                          children: [(0, y.qC)(se), " TREAT"],
                        }),
                      ],
                    }),
                  }),
                  (0, T.jsx)(m.A.Item, {
                    name: "type",
                    label: a.Ru._({ id: "0KBaTp", values: { SWAPCOIN: Y } }),
                    ...I,
                    rules: [
                      { required: !0, message: a.Ru._({ id: "4pCXip" }) },
                    ],
                    children: (0, T.jsx)(h.Ay.Group, {
                      onChange: xe,
                      optionType: "button",
                      buttonStyle: "solid",
                      children: (0, T.jsx)(p.A, {
                        direction:
                          null !== A && void 0 !== A && A.isMobile
                            ? "vertical"
                            : "horizontal",
                        children: _.JJ.map((e) =>
                          "no" == e.value
                            ? (0, T.jsx)(
                                h.Ay,
                                {
                                  value: "no",
                                  children: (0, T.jsx)(s.x6, {
                                    id: "3pvKas",
                                    values: { 0: e.rate },
                                  }),
                                },
                                e.value
                              )
                            : (0, T.jsx)(
                                h.Ay,
                                {
                                  value: e.value,
                                  children: (0, T.jsx)(s.x6, {
                                    id: "1kmdLE",
                                    values: { 0: e.rate, 1: e.month },
                                  }),
                                },
                                e.value
                              )
                        ),
                      }),
                    }),
                  }),
                  (0, T.jsxs)("div", {
                    className: "receive-item",
                    children: [
                      (0, T.jsx)("div", {
                        className: "receive-item-label",
                        children: (0, T.jsx)(s.x6, { id: "EgK3fH" }),
                      }),
                      (0, T.jsxs)("div", {
                        className: "receive-item-value total-receivable",
                        children: [(0, y.qC)(te || 0), " ", Y],
                      }),
                    ],
                  }),
                  (0, T.jsxs)("div", {
                    className: "receive-item",
                    children: [
                      (0, T.jsx)("div", {
                        className: "receive-item-label",
                        children: (0, T.jsx)(s.x6, { id: "6Lblc0" }),
                      }),
                      (0, T.jsxs)("div", {
                        className: "receive-item-value",
                        children: [
                          (0, y.qC)(he),
                          " ",
                          Y,
                          " ",
                          (null === ae || void 0 === ae
                            ? void 0
                            : ae.initialUnlock) &&
                            (0, T.jsx)("span", {
                              className: "ml10",
                              style: { fontWeight: 400 },
                              children: `(${
                                100 *
                                (null === ae || void 0 === ae
                                  ? void 0
                                  : ae.initialUnlock)
                              }%)`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, T.jsxs)("div", {
                    className: "receive-item",
                    children: [
                      (0, T.jsxs)("div", {
                        className: "receive-item-label",
                        children: [
                          (0, T.jsx)(s.x6, { id: "VestingAmount" }),
                          " ",
                        ],
                      }),
                      (0, T.jsxs)("div", {
                        className: "receive-item-value",
                        children: [
                          te && he
                            ? `${(0, y.qC)(
                                (0, k.A)(te || 0)
                                  .minus(he)
                                  .toNumber()
                              )} ${Y}`
                            : "--",
                          " ",
                          (null === ae || void 0 === ae
                            ? void 0
                            : ae.initialUnlock) &&
                            1 !=
                              (null === ae || void 0 === ae
                                ? void 0
                                : ae.initialUnlock) &&
                            (0, T.jsx)("span", {
                              className: "ml10",
                              style: { fontWeight: 400 },
                              children: `(${(0, k.A)(1)
                                .minus(
                                  null === ae || void 0 === ae
                                    ? void 0
                                    : ae.initialUnlock
                                )
                                .times(100)
                                .toNumber()}%)`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, T.jsxs)("div", {
                    className: "receive-item",
                    children: [
                      (0, T.jsx)("div", {
                        className: "receive-item-label rule-label",
                        children: (0, T.jsx)(s.x6, { id: "7ajwF0" }),
                      }),
                      (0, T.jsx)("div", {
                        className: "receive-item-value rule",
                        children:
                          (null === ne || void 0 === ne ? void 0 : ne[H]) ||
                          "--",
                      }),
                    ],
                  }),
                  (0, T.jsx)(m.A.Item, {
                    className: "flex justify-content-center mt15 btn-box",
                    children: ve,
                  }),
                ],
              }),
            }),
            (0, T.jsx)(t.A, {
              className: "nostr-modal-large ant-modal-swap",
              open: q,
              width: "500px",
              zIndex: 999,
              title: a.Ru._({ id: "DdK2nW" }),
              footer: null,
              onCancel: () => O(!1),
              children: (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsxs)("div", {
                    className: "confirm-content",
                    children: [
                      (0, T.jsxs)("div", {
                        className: "confirm-content-item",
                        children: [
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-label",
                            children: a.Ru._({ id: "UUqtxB" }),
                          }),
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-value",
                            children: W,
                          }),
                        ],
                      }),
                      (0, T.jsxs)("div", {
                        className: "confirm-content-item",
                        children: [
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-label",
                            children: a.Ru._({ id: "DZULmp" }),
                          }),
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-value",
                            children: `${
                              null === ae || void 0 === ae ? void 0 : ae.rate
                            } : 1`,
                          }),
                        ],
                      }),
                      (0, T.jsxs)("div", {
                        className: "confirm-content-item",
                        children: [
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-label",
                            children: a.Ru._({ id: "/2nCkP" }),
                          }),
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-value",
                            children: `${
                              null === ae || void 0 === ae ? void 0 : ae.month
                            } Months`,
                          }),
                        ],
                      }),
                      (0, T.jsxs)("div", {
                        className: "confirm-content-item",
                        children: [
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-label",
                            children: a.Ru._({ id: "EgK3fH" }),
                          }),
                          (0, T.jsx)("div", {
                            className: "confirm-content-item-value Receive",
                            children: `${(0, y.qC)(te || 0)} ${Y}`,
                          }),
                        ],
                      }),
                      (0, T.jsx)("div", { children: pe }),
                    ],
                  }),
                  (0, T.jsx)("div", {
                    className: "tc btn-box mt20",
                    children: (0, T.jsx)(d.Ay, {
                      type: "primary",
                      className: "nostr-swap-submit-btn btn-yellow",
                      loading: F,
                      onClick: re,
                      children: a.Ru._({ id: "7VpPHA" }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      const P = (0, n.memo)(F);
      var q = l(40678),
        O = l(51835),
        z = l(85652),
        D = l(64211);
      const U = "AIFI";
      function $(e) {
        let { run: i, row: l } = e;
        const [s, r] = (0, n.useState)(!1),
          { handleClaim: c } = (0, C.jE)(),
          u = (0, n.useCallback)(async () => {
            r(!0);
            try {
              const e = await c(
                `exchangeclaim ${
                  null === l || void 0 === l ? void 0 : l.exchangeActivityId
                } ${null === l || void 0 === l ? void 0 : l.id}`
              );
              0 == (null === e || void 0 === e ? void 0 : e.code)
                ? (await (0, f.yy)(1e3),
                  t.A.success({
                    wrapClassName: "modal-success",
                    title: a.Ru._({ id: "zzDlyQ" }),
                    content: a.Ru._({
                      id: "vqYnyD",
                      values: {
                        0:
                          null === l || void 0 === l ? void 0 : l.exchangeToken,
                        SWAPCOIN: U,
                      },
                    }),
                  }),
                  r(!1),
                  close && close(),
                  i && i())
                : (r(!1), o.Ay.error(e.data || a.Ru._({ id: "qcloGZ" })));
            } catch (e) {
              r(!1);
            }
          }, [
            c,
            null === l || void 0 === l ? void 0 : l.exchangeActivityId,
            null === l || void 0 === l ? void 0 : l.exchangeToken,
            null === l || void 0 === l ? void 0 : l.id,
            i,
          ]);
        return (0, T.jsx)(d.Ay, {
          size: "small",
          loading: s,
          className: "btn-yellow",
          style: { width: "120px" },
          disabled: !(
            "INIT" == (null === l || void 0 === l ? void 0 : l.status) &&
            g()().isAfter(
              g()(
                (0, D.Nx)(
                  null === l || void 0 === l ? void 0 : l.startTime,
                  "YYYY/MM/DD"
                )
              )
            )
          ),
          onClick: () => {
            t.A.info({
              className: "nostrswap-modal",
              title: a.Ru._({ id: "hom7qf" }),
              width: 300,
              centered: !0,
              closable: !0,
              content: (0, T.jsxs)("p", {
                style: { padding: "10px 10x 0" },
                children: [
                  a.Ru._({ id: "fiXyft" }),
                  " ",
                  null === l || void 0 === l ? void 0 : l.exchangeToken,
                  " ",
                  U,
                ],
              }),
              onOk: async (e) => {
                await u(l.id, e);
              },
              okButtonProps: { size: "small", className: "btn-yellow" },
              okText: a.Ru._({ id: "hom7qf" }),
            });
          },
          children:
            "ASSETS_SUCCESS" == (null === l || void 0 === l ? void 0 : l.status)
              ? a.Ru._({ id: "hRWvpI" })
              : a.Ru._({ id: "hom7qf" }),
        });
      }
      function W() {
        const e = (0, R.A)(),
          { balanceList: i, npubNostrAccount: l } = (0, w.d4)((e) => {
            let { user: i } = e;
            return i;
          }),
          [t, o] = (0, n.useState)(""),
          [m, x] = (0, n.useState)(1),
          [h, p] = (0, n.useState)(20),
          [j, b] = (0, n.useState)(!1),
          { data: A, loading: f, run: C, fetched: S } = (0, z.lx)({}),
          {
            list: M,
            total: I,
            loading: E,
            run: Y,
          } = (0, z.KK)({ page: m, count: h, npubAddressOrNoteEventId: l }),
          F = (0, n.useMemo)(() => {
            var e;
            return (
              (null === (e = i.TREAT) || void 0 === e
                ? void 0
                : e.balanceShow) || 0
            );
          }, [i]),
          W = (0, n.useCallback)((e, i) => {
            x(e), p(i);
          }, []),
          K = (0, n.useMemo)(
            () =>
              null === M || void 0 === M
                ? void 0
                : M.map((e) => ({ ...e, ...e.exchangeActivityPO })),
            [M]
          ),
          B = (0, n.useCallback)(
            (e) => {
              const i = [
                {
                  title: a.Ru._({ id: "8Waykz" }),
                  dataIndex: "date",
                  render: (e, i, l) => `#${l + 1}`,
                },
                {
                  title: a.Ru._({ id: "zsmhKv" }),
                  dataIndex: "startTime",
                  render: (e, i) =>
                    (0, D.Nx)(
                      null === i || void 0 === i ? void 0 : i.startTime,
                      "YYYY/MM/DD"
                    ),
                },
                { title: a.Ru._({ id: "o2oMZe" }), dataIndex: "exchangeToken" },
                {
                  title: a.Ru._({ id: "uAQUqI" }),
                  dataIndex: "status",
                  render: (e, i) =>
                    "INIT" == e &&
                    g()().isBefore(
                      g()(
                        (0, D.Nx)(
                          null === i || void 0 === i ? void 0 : i.startTime,
                          "YYYY/MM/DD"
                        )
                      )
                    )
                      ? a.Ru._({ id: "UbRKMZ" })
                      : "INIT" == e &&
                        g()().isAfter(
                          g()(
                            (0, D.Nx)(
                              null === i || void 0 === i ? void 0 : i.startTime,
                              "YYYY/MM/DD"
                            )
                          )
                        )
                      ? (0, T.jsx)("span", {
                          className: "color-teal",
                          children: a.Ru._({ id: "jGIMRd" }),
                        })
                      : "ASSETS_SUCCESS" == e
                      ? a.Ru._({ id: "hRWvpI" })
                      : "ASSETS_FAIL" == e
                      ? (0, T.jsx)("span", {
                          className: "color-red",
                          children: a.Ru._({ id: "SJQXyt" }),
                        })
                      : "ASSETS_PENDING" == e
                      ? a.Ru._({ id: "pFltYq" })
                      : void 0,
                },
                {
                  title: a.Ru._({ id: "FZg3wM" }),
                  key: "operation",
                  render: (e, i) => (0, T.jsx)($, { row: i, run: Y }),
                },
              ];
              return (0, T.jsx)(r.A, {
                columns: i,
                rowKey: "id",
                dataSource:
                  (null === e || void 0 === e
                    ? void 0
                    : e.exchangeActivityDetailPOS) || [],
                pagination: !1,
              });
            },
            [Y]
          ),
          L = (0, n.useMemo)(
            () => [
              {
                title: a.Ru._({ id: "BY0HPq" }),
                dataIndex: "createTime",
                key: "Swap Date",
                render(e, i) {
                  var l, s;
                  return (0, T.jsxs)("div", {
                    children: [
                      (0, T.jsx)("div", {
                        className: "f12",
                        children: (0, D.Nx)(
                          null === i ||
                            void 0 === i ||
                            null === (l = i.exchangeActivityPO) ||
                            void 0 === l
                            ? void 0
                            : l.createTime,
                          "YYYY/MM/DD"
                        ),
                      }),
                      (0, T.jsx)("div", {
                        className: "f12",
                        children: (0, D.Nx)(
                          null === i ||
                            void 0 === i ||
                            null === (s = i.exchangeActivityPO) ||
                            void 0 === s
                            ? void 0
                            : s.createTime,
                          "HH:mm:ss"
                        ),
                      }),
                    ],
                  });
                },
              },
              {
                title: a.Ru._({ id: "w1ep3M" }),
                dataIndex: "tokenOne",
                key: "Swap Assets",
                render(e, i) {
                  var l, s, a, n, t, o;
                  return (0, T.jsxs)("div", {
                    children: [
                      (null === i ||
                      void 0 === i ||
                      null === (l = i.exchangeActivityPO) ||
                      void 0 === l
                        ? void 0
                        : l.tokenOne) > 0 &&
                        (0, T.jsxs)("div", {
                          children: [
                            (0, y.qC)(
                              null === i ||
                                void 0 === i ||
                                null === (s = i.exchangeActivityPO) ||
                                void 0 === s
                                ? void 0
                                : s.tokenOne
                            ),
                            " ",
                            null === i ||
                            void 0 === i ||
                            null === (a = i.exchangeActivityPO) ||
                            void 0 === a
                              ? void 0
                              : a.tokenOneName,
                          ],
                        }),
                      (null === i ||
                      void 0 === i ||
                      null === (n = i.exchangeActivityPO) ||
                      void 0 === n
                        ? void 0
                        : n.tokenTwo) > 0 &&
                        (0, T.jsxs)("div", {
                          children: [
                            (0, y.qC)(
                              null === i ||
                                void 0 === i ||
                                null === (t = i.exchangeActivityPO) ||
                                void 0 === t
                                ? void 0
                                : t.tokenTwo
                            ),
                            " ",
                            null === i ||
                            void 0 === i ||
                            null === (o = i.exchangeActivityPO) ||
                            void 0 === o
                              ? void 0
                              : o.tokenTwoName,
                          ],
                        }),
                    ],
                  });
                },
              },
              {
                title: a.Ru._({ id: "DZULmp" }),
                dataIndex: "proportion",
                key: "Swap Rate",
                render(e, i) {
                  var l;
                  return `${
                    null === i ||
                    void 0 === i ||
                    null === (l = i.exchangeActivityPO) ||
                    void 0 === l
                      ? void 0
                      : l.proportion
                  }:1`;
                },
              },
              {
                title: a.Ru._({ id: "XWk2B+" }),
                dataIndex: "proportion",
                key: "Vesting",
                render(e, i) {
                  var l;
                  const s =
                      null === i ||
                      void 0 === i ||
                      null === (l = i.exchangeActivityPO) ||
                      void 0 === l
                        ? void 0
                        : l.proportion,
                    n = _.JJ.find((e) => e.rate == s);
                  return (null === n || void 0 === n ? void 0 : n.month) > 0
                    ? `${null === n || void 0 === n ? void 0 : n.month} Months`
                    : a.Ru._({ id: "1UzENP" });
                },
              },
              {
                title: a.Ru._({ id: "EgK3fH" }),
                dataIndex: "exchangeToken",
                key: "Expected Amount",
                render(e, i) {
                  var l;
                  return `${(0, y.qC)(
                    (null === i ||
                    void 0 === i ||
                    null === (l = i.exchangeActivityPO) ||
                    void 0 === l
                      ? void 0
                      : l.exchangeToken) || 0
                  )}`;
                },
              },
              {
                title: a.Ru._({ id: "VpDIWY" }),
                dataIndex: "unlockedAmount",
                key: "Unlocked Amount",
              },
              {
                title: a.Ru._({ id: "+rlQ37" }),
                dataIndex: "claimable",
                key: "Claimable/Claimed",
                render(e, i) {
                  var l;
                  return (0, T.jsxs)(T.Fragment, {
                    children: [
                      (0, T.jsx)("span", {
                        className: "color-green",
                        children: (0, y.qC)(e || 0),
                      }),
                      "/",
                      (0, y.qC)(
                        null === i ||
                          void 0 === i ||
                          null === (l = i.exchangeActivityPO) ||
                          void 0 === l
                          ? void 0
                          : l.receivedToken
                      ),
                    ],
                  });
                },
              },
              {
                title: a.Ru._({ id: "FZg3wM" }),
                key: "operation",
                render: (e, i) =>
                  (0, T.jsxs)("span", {
                    className: "color-yellow pointer",
                    children: [
                      a.Ru._({ id: "hom7qf" }),
                      " ",
                      (0, T.jsx)(v.A, {}),
                    ],
                  }),
              },
            ],
            []
          ),
          H = (0, n.useMemo)(
            () =>
              _.JJ.reduce(
                (e, i) => (
                  "no" === i.value &&
                    (e[i.value] =
                      (null === A || void 0 === A ? void 0 : A.noLockVesting) ||
                      0),
                  "six" === i.value &&
                    (e[i.value] =
                      (null === A || void 0 === A
                        ? void 0
                        : A.sixMonthVesting) || 0),
                  "twelve" === i.value &&
                    (e[i.value] =
                      (null === A || void 0 === A
                        ? void 0
                        : A.twelveMonthVesting) || 0),
                  e
                ),
                {}
              ),
            [
              null === A || void 0 === A ? void 0 : A.noLockVesting,
              null === A || void 0 === A ? void 0 : A.sixMonthVesting,
              null === A || void 0 === A ? void 0 : A.twelveMonthVesting,
            ]
          ),
          V = (0, n.useMemo)(
            () =>
              _.JJ.map((e) =>
                (0, T.jsxs)(
                  "div",
                  {
                    className: N()("tt-swap-options-type-item", {
                      cur: t == e.value,
                    }),
                    onClick: () => o(e.value),
                    children: [
                      (0, T.jsxs)("div", {
                        className: "tt-swap-options-type-item-label",
                        children: [
                          (0, T.jsx)("div", {
                            className: "tag-box",
                            children: (0, T.jsxs)("span", {
                              className: "tag",
                              children: [
                                e.rate,
                                " ",
                                (0, T.jsx)("span", {
                                  className: "unit",
                                  children: "TREAT",
                                }),
                                " : 1 ",
                                (0, T.jsx)("span", {
                                  className: "unit",
                                  children: "AIFI",
                                }),
                              ],
                            }),
                          }),
                          (0, T.jsx)("span", {
                            className: "title",
                            children: (0, T.jsx)(s.x6, {
                              id: "LW6OQq",
                              values: { 0: 100 * e.initialUnlock + "%" },
                            }),
                          }),
                          "no" !== e.value &&
                            (0, T.jsx)("span", {
                              className: "title",
                              children: (0, T.jsx)(s.x6, {
                                id: "nwfelU",
                                values: {
                                  0:
                                    (0, k.A)(1)
                                      .minus(e.initialUnlock)
                                      .times(100) + "%",
                                  1: e.month,
                                },
                              }),
                            }),
                        ],
                      }),
                      (0, T.jsx)("div", {
                        className: "tt-swap-options-type-item-value",
                        children: `(${(0, y.yC)(
                          (0, k.A)(H[e.value]).times(100).toNumber(),
                          2,
                          "floor"
                        )}% Selected)`,
                      }),
                    ],
                  },
                  e.value
                )
              ),
            [H, t]
          ),
          J = (0, n.useMemo)(
            () =>
              (0, T.jsxs)("div", {
                className: "tt-swap-options",
                children: [
                  (0, T.jsxs)("div", {
                    className: "tt-swap-options-title",
                    children: [
                      (0, T.jsx)("div", {
                        className: "tt-swap-options-title-text",
                        children: a.Ru._({ id: "zs+ocr" }),
                      }),
                      (0, T.jsx)("span", {
                        className: "tt-swap-options-title-endtime",
                        children: (0, T.jsx)(s.x6, {
                          id: "ioLorG",
                          components: {
                            0: (0, T.jsx)("span", { className: "color-green" }),
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, T.jsx)("div", {
                    className: "tt-swap-options-type",
                    children: V,
                  }),
                  (0, T.jsxs)("div", {
                    className: "tt-swap-options-balance",
                    children: [
                      (0, T.jsxs)("div", {
                        className: "label",
                        children: [a.Ru._({ id: "aDz0Qi" }), ":"],
                      }),
                      (0, T.jsx)("div", {
                        className: "value",
                        children: (0, T.jsxs)("span", {
                          children: [
                            (0, T.jsx)("span", {
                              className: l ? "color-green" : "color-light",
                              children: l ? (0, y.qC)(F) : "--",
                            }),
                            " ",
                            "TREAT",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, T.jsx)("div", {
                    className: "tt-swap-options-action",
                    children: (0, T.jsx)(q.A, {
                      children: (0, T.jsx)(d.Ay, {
                        className: "btn-yellow",
                        onClick: () => b(!0),
                        children: a.Ru._({ id: "vH2C/2" }),
                      }),
                    }),
                  }),
                ],
              }),
            [l, V, F]
          ),
          Q = (0, n.useMemo)(
            () =>
              (0, T.jsxs)("div", {
                className: "tt-swap-table-box",
                children: [
                  (0, T.jsx)("div", {
                    className: "tt-swap-table-box-title",
                    children: (0, T.jsx)("div", {
                      className: "tt-swap-table-box-title-text",
                      children: a.Ru._({ id: "0aHAUy" }),
                    }),
                  }),
                  (0, T.jsx)(r.A, {
                    className: "table-light table-swaps",
                    loading: E,
                    scroll: { x: 950 },
                    expandable: { expandedRowRender: B, expandRowByClick: !0 },
                    rowKey: "noteEventId",
                    showSorterTooltip: !1,
                    columns: L,
                    dataSource: K || [],
                    pagination: {
                      current: m,
                      total: 0,
                      pageSize: h,
                      position: ["bottomCenter"],
                      onChange: (e, i) => {
                        W(e, i);
                      },
                    },
                  }),
                ],
              }),
            [L, B, K, E, W, m, h]
          ),
          Z = (0, n.useMemo)(
            () => [
              { label: a.Ru._({ id: "vH2C/2" }), key: "Swap", children: J },
              { label: a.Ru._({ id: "bSRtUw" }), key: "Records", children: Q },
            ],
            [J, Q]
          );
        return (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsxs)("div", {
              className: "tt-swap",
              children: [
                (0, T.jsxs)("div", {
                  className: "tt-swap-head",
                  children: [
                    (0, T.jsxs)("div", {
                      className: "tt-swap-title",
                      children: [
                        (0, T.jsxs)("span", {
                          children: [a.Ru._({ id: "eAbW7a" }), " ", U],
                        }),
                        !1 && (0, T.jsxs)("a", {
                          className: "tt-swap-head-more",
                          href: "https://docs.aifioft.pro",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            (0, T.jsx)("span", {
                              children: a.Ru._({ id: "zwWKhA" }),
                            }),
                            (0, T.jsx)("img", { src: u.A, alt: "" }),
                          ],
                        }),
                      ],
                    }),
                    (0, T.jsx)("div", {
                      className: "tt-swap-statistics-box",
                      children: (0, T.jsx)(c.A, {
                        spinning: f && !S,
                        children: (0, T.jsxs)("div", {
                          className: "tt-swap-statistics",
                          children: [
                            (0, T.jsxs)("div", {
                              className: "tt-swap-statistic-item",
                              children: [
                                (0, T.jsx)("div", {
                                  className: "label",
                                  children: a.Ru._({ id: "Lr4bmZ" }),
                                }),
                                (0, T.jsxs)("div", {
                                  className: "value",
                                  children: [
                                    `${(0, y.qC)(
                                      ((null === A || void 0 === A
                                        ? void 0
                                        : A.tokenOneSum) || 0) +
                                        ((null === A || void 0 === A
                                          ? void 0
                                          : A.tokenTwoSum) || 0)
                                    )}`,
                                    (0, T.jsx)("span", { children: "TREAT" }),
                                  ],
                                }),
                              ],
                            }),
                            (0, T.jsxs)("div", {
                              className: "tt-swap-statistic-item",
                              children: [
                                (0, T.jsx)("div", {
                                  className: "label",
                                  children: a.Ru._({ id: "NiYWJH" }),
                                }),
                                (0, T.jsxs)("div", {
                                  className: "value",
                                  children: [
                                    (0, y.qC)(
                                      (null === A || void 0 === A
                                        ? void 0
                                        : A.exchangeTokenSum) || 0
                                    ),
                                    (0, T.jsx)("span", { children: U }),
                                  ],
                                }),
                              ],
                            }),
                            (0, T.jsxs)("div", {
                              className: "tt-swap-statistic-item",
                              children: [
                                (0, T.jsx)("div", {
                                  className: "label",
                                  children: a.Ru._({ id: "iW9++L" }),
                                }),
                                (0, T.jsxs)("div", {
                                  className: "value",
                                  children: [
                                    (0, y.qC)(
                                      (null === A || void 0 === A
                                        ? void 0
                                        : A.receivedTokenSum) || 0
                                    ),
                                    (0, T.jsx)("span", { children: U }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (null === e || void 0 === e ? void 0 : e.isMobile) &&
                  (0, T.jsx)(O.A, { items: Z }),
                !(null !== e && void 0 !== e && e.isMobile) && J,
                !(null !== e && void 0 !== e && e.isMobile) && Q,
              ],
            }),
            (0, T.jsx)(P, {
              isFormShow: j,
              setIsFormShow: b,
              defaultType: t,
              listRun: () => {
                Y(), C();
              },
            }),
          ],
        });
      }
    },
  },
]);
