"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [400],
  {
    40725: (e, s, n) => {
      n.r(s), n.d(s, { default: () => he });
      var l = n(46941),
        i = n(37209),
        t = n(51477),
        d = n(94867),
        a = n(20109),
        o = n(2442),
        r = n(1217),
        c = n(15928),
        u = n(35188),
        x = n(23018),
        m = n(88636),
        h = n(9413),
        v = n(76484),
        j = n(22233),
        p = n(51880),
        C = n(22416),
        f = n(15585),
        b = n(96542),
        w = n(78660),
        g = n(800),
        N = n(54140),
        k = n(70481);
      const A = { labelCol: { span: 5 }, wrapperCol: { span: 19 } };
      function y(e) {
        let { detail: s, isTransferShow: n, setIsTransferShow: d } = e;
        const r = m.A.Option,
          { width: x } = (0, b.A)(document.querySelector("body")),
          [y] = h.A.useForm(),
          [R, L] = v.Ay.useMessage(),
          [F, S] = (0, t.useState)(null),
          [I, _] = (0, t.useState)([]),
          { handleTransferAsync: E } = (0, w.$)(),
          { handleQueryBalance: M } = (0, w.m)(),
          { handleQueryAddressBook: P } = (0, w.JS)(),
          [O, V] = (0, t.useState)(!1),
          { tokenList: T } = (0, c.d4)((e) => {
            let { market: s } = e;
            return s;
          }),
          { balanceList: q, nostrAccount: B } = (0, c.d4)((e) => {
            let { user: s } = e;
            return s;
          });
        (0, t.useEffect)(() => {
          if (B && n) {
            (async () => {
              const e = await P();
              if (0 == (null === e || void 0 === e ? void 0 : e.code)) {
                const s = (null === e || void 0 === e ? void 0 : e.data) || [];
                _(s);
              }
            })().catch(console.error);
          }
          return () => null;
        }, [P, n, B]),
          (0, t.useEffect)(() => {
            if (n)
              if ((y.resetFields(), s)) {
                y.setFieldValue("token", s.id);
                const e = T.find((e) => e.id === s.id);
                S(e);
              } else {
                var e;
                if (null !== T && void 0 !== T && T.length)
                  y.setFieldValue(
                    "token",
                    null === (e = T[0]) || void 0 === e ? void 0 : e.id
                  ),
                    S(T[0]);
              }
          }, [s, y, n, T]);
        const U = (0, t.useCallback)(
            (e) => {
              var s;
              return null === (s = q[e]) || void 0 === s
                ? void 0
                : s.balanceShow;
            },
            [q]
          ),
          z = (0, t.useMemo)(() => [...T], [T]),
          H = (0, t.useCallback)(() => {
            d(!1);
          }, [d]),
          Z = (0, t.useCallback)(() => {
            const e = U(null === F || void 0 === F ? void 0 : F.name);
            y.setFieldValue("amount", e), y.validateFields(["amount"]);
          }, [y, U, null === F || void 0 === F ? void 0 : F.name]),
          K = (0, t.useMemo)(
            () =>
              (0, k.jsx)(a.Ay, {
                type: "link",
                className: "suffix-btn",
                onClick: Z,
                children: (0, k.jsx)(l.x6, { id: "CK1KXz" }),
              }),
            [Z]
          ),
          G = (0, t.useMemo)(
            () =>
              null !== z && void 0 !== z && z.length
                ? null === z || void 0 === z
                  ? void 0
                  : z.map((e) => {
                      const s = Number(U(e.name)) || 0;
                      return (0, k.jsxs)(
                        m.A.Option,
                        {
                          value: e.id,
                          children: [
                            (0, k.jsx)("span", {
                              className: "select-token-name",
                              children: e.name,
                            }),
                            (0, k.jsxs)("span", {
                              className: "select-token-balance",
                              children: [
                                (0, k.jsx)(l.x6, { id: "fsBGk0" }),
                                ": (",
                                parseFloat((0, g.yC)(s, e.reserve)),
                                ")",
                              ],
                            }),
                          ],
                        },
                        e.id
                      );
                    })
                : (0, k.jsx)(
                    m.A.Option,
                    {
                      value: "",
                      style: { textAlign: "center" },
                      children: (0, k.jsx)(o.A, {}),
                    },
                    ""
                  ),
            [U, z]
          ),
          J = (0, t.useMemo)(
            () =>
              null === I || void 0 === I
                ? void 0
                : I.map((e) => {
                    const s = u.Qe.npubEncode(e.contacts);
                    return (0, k.jsxs)(
                      r,
                      {
                        value: s,
                        children: [
                          (0, k.jsxs)("div", {
                            children: [
                              (0, k.jsxs)("span", {
                                className: "b",
                                children: [
                                  (0, k.jsx)(l.x6, { id: "6YtxFj" }),
                                  ":",
                                ],
                              }),
                              " ",
                              e.description,
                            ],
                          }),
                          (0, k.jsxs)("div", {
                            title: s,
                            children: [
                              (0, k.jsxs)("span", {
                                className: "b",
                                children: [
                                  (0, k.jsx)(l.x6, { id: "yRxb/J" }),
                                  ":",
                                ],
                              }),
                              " ",
                              s,
                            ],
                          }),
                        ],
                      },
                      2
                    );
                  }),
            [I]
          ),
          Q = (0, t.useCallback)(
            (e) => {
              const s = T.find((s) => s.id === e);
              S(s), y.setFieldValue("amount", ""), y.setFieldValue("price", "");
            },
            [y, T]
          ),
          D = (0, t.useCallback)(async () => {
            try {
              await y.validateFields(), V(!0);
              const e = y.getFieldsValue(),
                s = e.amount,
                n = null === F || void 0 === F ? void 0 : F.name,
                l = e.nostrAddress;
              let t = await E({ amount: s, token: n, address: l });
              0 === (null === t || void 0 === t ? void 0 : t.code)
                ? (v.Ay.success(i.Ru._({ id: "0ckrVW" })),
                  await M(u.Qe.npubEncode(B)),
                  setTimeout(() => {
                    H();
                  }, 500))
                : R.open({ type: "error", content: t.data });
            } catch (e) {
              console.log(e),
                (null !== e && void 0 !== e && e.values) ||
                  R.error(null === e || void 0 === e ? void 0 : e.message);
            } finally {
              V(!1);
            }
          }, [y, null === F || void 0 === F ? void 0 : F.name, E, M, B, H, R]),
          W = (0, t.useCallback)(
            (e) => {
              let {
                target: { value: s },
              } = e;
              if (Number(s)) {
                const e = U(null === F || void 0 === F ? void 0 : F.name);
                if (Number(s) > e) y.setFieldValue("amount", e);
                else {
                  const e = (0, g.yC)(
                    Number(s),
                    (null === F || void 0 === F ? void 0 : F.reserve) || 0,
                    "floor"
                  );
                  e != Number(s) && y.setFieldValue("amount", e);
                }
              }
            },
            [
              y,
              U,
              null === F || void 0 === F ? void 0 : F.name,
              null === F || void 0 === F ? void 0 : F.reserve,
            ]
          ),
          X = (0, t.useMemo)(
            () =>
              (0, k.jsx)(a.Ay, {
                type: "primary",
                className: "transfer-submit-btn",
                loading: O,
                onClick: D,
                children: i.Ru._({ id: "zPGNJm" }),
              }),
            [O, D]
          );
        return (
          (0, t.useEffect)(() => {
            if (z.length > 0) {
              const e = F || z[0];
              F || S(e);
            }
          }, [z, z.length, F]),
          (0, k.jsxs)(k.Fragment, {
            children: [
              L,
              (0, k.jsx)(j.A, {
                className: "transfer-modal",
                open: n,
                width: "850px",
                title: i.Ru._({ id: "zPGNJm" }),
                footer: null,
                onCancel: H,
                children: (0, k.jsxs)(h.A, {
                  className: "transfer-form",
                  ...A,
                  form: y,
                  name: "transferForm",
                  autoComplete: "off",
                  initialValues: {
                    token: null === F || void 0 === F ? void 0 : F.id,
                  },
                  children: [
                    (0, k.jsx)(h.A.Item, {
                      label: "Token",
                      children: (0, k.jsx)(h.A.Item, {
                        noStyle: !0,
                        name: "token",
                        rules: [{ required: !0 }],
                        children: (0, k.jsx)(m.A, { onChange: Q, children: G }),
                      }),
                    }),
                    (0, k.jsx)(h.A.Item, {
                      label: i.Ru._({ id: "3ACert" }),
                      children: (0, k.jsx)(h.A.Item, {
                        name: "nostrAddress",
                        noStyle: !0,
                        rules: [
                          { required: !0, message: i.Ru._({ id: "Sga93U" }) },
                          (e) => {
                            let { getFieldValue: s } = e;
                            return {
                              validator: (e, s) =>
                                s
                                  ? -1 == s.indexOf("npub")
                                    ? Promise.reject(
                                        new Error(i.Ru._({ id: "Sga93U" }))
                                      )
                                    : s == u.Qe.npubEncode(B)
                                    ? Promise.reject(
                                        new Error(i.Ru._({ id: "MLCXH3" }))
                                      )
                                    : Promise.resolve()
                                  : Promise.resolve(),
                            };
                          },
                        ],
                        children: (0, k.jsx)(p.A, { children: J }),
                      }),
                    }),
                    (0, k.jsxs)(h.A.Item, {
                      label: i.Ru._({ id: "u9Kxre" }),
                      className: "amount-form-item",
                      children: [
                        (0, k.jsx)(h.A.Item, {
                          name: "amount",
                          noStyle: !0,
                          rules: [
                            { required: !0 },
                            (e) => {
                              let { getFieldValue: s } = e;
                              return {
                                validator: (e, s) =>
                                  s
                                    ? Number(s)
                                      ? N.UF !==
                                          (null === F || void 0 === F
                                            ? void 0
                                            : F.name) &&
                                        s <
                                          Math.pow(
                                            10,
                                            -Math.abs(
                                              (null === F || void 0 === F
                                                ? void 0
                                                : F.reserve) || 0
                                            )
                                          )
                                        ? Promise.reject(
                                            new Error(
                                              i.Ru._({
                                                id: "Z04ID1",
                                                values: {
                                                  0: Math.pow(
                                                    10,
                                                    -Math.abs(
                                                      (null === F ||
                                                      void 0 === F
                                                        ? void 0
                                                        : F.reserve) || 0
                                                    )
                                                  ),
                                                  1:
                                                    null === F || void 0 === F
                                                      ? void 0
                                                      : F.name,
                                                },
                                              })
                                            )
                                          )
                                        : N.UF ==
                                            (null === F || void 0 === F
                                              ? void 0
                                              : F.name) && s < 100
                                        ? Promise.reject(
                                            new Error(
                                              i.Ru._({
                                                id: "K/CW9O",
                                                values: {
                                                  0:
                                                    null === F || void 0 === F
                                                      ? void 0
                                                      : F.name,
                                                },
                                              })
                                            )
                                          )
                                        : Promise.resolve()
                                      : Promise.reject(
                                          new Error(i.Ru._({ id: "NxhRFl" }))
                                        )
                                    : Promise.resolve(),
                              };
                            },
                          ],
                          children: (0, k.jsx)(C.A, {
                            className: "transfer-input",
                            type: "text",
                            suffix: K,
                            placeholder: "",
                            onChange: W,
                          }),
                        }),
                        (0, k.jsx)("span", {
                          className: "transfer-form-usdt",
                          children:
                            null === F || void 0 === F ? void 0 : F.name,
                        }),
                      ],
                    }),
                    (0, k.jsx)(h.A.Item, {
                      wrapperCol: 24,
                      align: "middle",
                      className: "",
                      children: (0, k.jsx)(f.A, {
                        justify: "center",
                        style: { marginTop: "10px" },
                        children: X,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      const R = (0, t.memo)(y);
      var L = n(40744),
        F = n(7850);
      const S = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
      function I(e) {
        let {
          add: s,
          setAdd: n,
          addressBook: l,
          setAddressBook: d,
          handleQueryAddressBook: o,
        } = e;
        const [r, x] = v.Ay.useMessage(),
          [m, p] = (0, t.useState)(!1),
          { handleAddAddress: f } = (0, w.aq)(),
          { nostrAccount: b } = (0, c.d4)((e) => {
            let { user: s } = e;
            return s;
          }),
          g = (0, t.useCallback)(() => {
            n(!1);
          }, [n]),
          [N] = h.A.useForm();
        (0, t.useEffect)(() => {
          s && N.resetFields();
        }, [s, N]);
        const A = (0, t.useCallback)(async () => {
          try {
            await N.validateFields(), p(!0);
            const e = N.getFieldsValue(),
              s = e.remark,
              l = e.nostrAddress;
            let t = await f({ name: s, address: l });
            if (0 === (null === t || void 0 === t ? void 0 : t.code)) {
              v.Ay.success(i.Ru._({ id: "fZZgLI" })), n(!1);
              const e = await o();
              if (0 == (null === e || void 0 === e ? void 0 : e.code)) {
                const s = (null === e || void 0 === e ? void 0 : e.data) || [];
                d(s);
              } else d([]);
            } else r.open({ type: "error", content: t.data });
          } catch (e) {
            (null !== e && void 0 !== e && e.values) ||
              r.error(null === e || void 0 === e ? void 0 : e.message);
          } finally {
            p(!1);
          }
        }, [N, f, o, r, n, d]);
        return (0, k.jsxs)(k.Fragment, {
          children: [
            x,
            (0, k.jsx)(j.A, {
              className: "add-address-modal",
              open: s,
              width: "650px",
              title: i.Ru._({ id: "W0pjLr" }),
              footer: (0, k.jsxs)(k.Fragment, {
                children: [
                  " ",
                  (0, k.jsx)(a.Ay, {
                    type: "primary",
                    className: "add-address-submit-btn",
                    loading: m,
                    onClick: A,
                    children: i.Ru._({ id: "tfDRzk" }),
                  }),
                ],
              }),
              onCancel: g,
              children: (0, k.jsxs)(h.A, {
                className: "add-address-form",
                ...S,
                form: N,
                name: "addAddressForm",
                autoComplete: "off",
                children: [
                  (0, k.jsx)(h.A.Item, {
                    label: i.Ru._({ id: "3ACert" }),
                    children: (0, k.jsx)(h.A.Item, {
                      name: "nostrAddress",
                      noStyle: !0,
                      rules: [
                        { required: !0 },
                        (e) => {
                          let { getFieldValue: s } = e;
                          return {
                            validator: (e, s) =>
                              s
                                ? -1 == s.indexOf("npub")
                                  ? Promise.reject(
                                      new Error(i.Ru._({ id: "D4qWat" }))
                                    )
                                  : s == u.Qe.npubEncode(b)
                                  ? Promise.reject(
                                      new Error(i.Ru._({ id: "7VUeEp" }))
                                    )
                                  : l.some(
                                      (e) => s == u.Qe.npubEncode(e.contacts)
                                    )
                                  ? Promise.reject(
                                      new Error(i.Ru._({ id: "bS1MRR" }))
                                    )
                                  : Promise.resolve()
                                : Promise.resolve(),
                          };
                        },
                      ],
                      children: (0, k.jsx)(C.A, { type: "text" }),
                    }),
                  }),
                  (0, k.jsx)(h.A.Item, {
                    label: i.Ru._({ id: "wYVTKm" }),
                    className: "amount-form-item",
                    children: (0, k.jsx)(h.A.Item, {
                      name: "remark",
                      noStyle: !0,
                      rules: [
                        { required: !0 },
                        (e) => {
                          let { getFieldValue: s } = e;
                          return {
                            validator: (e, s) =>
                              s
                                ? null !== s && void 0 !== s && s.trim()
                                  ? l.some((e) => s == e.description)
                                    ? Promise.reject(
                                        new Error(i.Ru._({ id: "d8UaKJ" }))
                                      )
                                    : Promise.resolve()
                                  : Promise.reject(
                                      new Error(i.Ru._({ id: "wjG37K" }))
                                    )
                                : Promise.resolve(),
                          };
                        },
                      ],
                      children: (0, k.jsx)(C.A, {
                        type: "text",
                        placeholder: "",
                        maxLength: 20,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function _(e) {
        let { isAddressBookShow: s, setIsAddressBookShow: n } = e;
        const [d, r] = v.Ay.useMessage(),
          [x, m] = (0, t.useState)(!1),
          [h, p] = (0, t.useState)([]),
          { handleQueryAddressBook: C, fetching: f } = (0, w.JS)(),
          { handleRemoveAddress: b } = (0, w.aq)(),
          { nostrAccount: g } = (0, c.d4)((e) => {
            let { user: s } = e;
            return s;
          });
        (0, t.useEffect)(() => {
          if (g && s) {
            (async () => {
              const e = await C();
              if (0 == (null === e || void 0 === e ? void 0 : e.code)) {
                const s = (null === e || void 0 === e ? void 0 : e.data) || [];
                p(s);
              } else p([]);
            })().catch(console.error);
          }
          return () => null;
        }, [C, s, g]);
        const N = (0, t.useCallback)(() => {
            n(!1);
          }, [n]),
          A = (0, t.useCallback)(
            async (e) => {
              let s = await b({ name: e.description });
              if (0 === (null === s || void 0 === s ? void 0 : s.code)) {
                v.Ay.success(i.Ru._({ id: "fZZgLI" })), m(!1);
                const e = await C();
                if (0 == (null === e || void 0 === e ? void 0 : e.code)) {
                  const s =
                    (null === e || void 0 === e ? void 0 : e.data) || [];
                  p(s);
                } else p([]);
              } else d.open({ type: "error", content: s.data });
            },
            [C, b, d]
          ),
          y = (e) => {},
          R = (0, t.useMemo)(
            () =>
              null !== h && void 0 !== h && h.length
                ? null === h || void 0 === h
                  ? void 0
                  : h.map((e, s) => {
                      const n = u.Qe.npubEncode(e.contacts);
                      return (0, k.jsxs)(
                        "div",
                        {
                          className: "address-items",
                          children: [
                            (0, k.jsxs)("span", {
                              className: "b",
                              children: [
                                s + 1,
                                ". ",
                                decodeURIComponent(e.description),
                                ":",
                                " ",
                                n.substring(0, 12) +
                                  "..." +
                                  n.substring(n.length - 8),
                              ],
                            }),
                            (0, k.jsx)("span", {
                              className: "address-delete",
                              children: (0, k.jsx)(L.A, {
                                title: "Delete",
                                description:
                                  "Are you sure to delete this Address Book?",
                                onConfirm: () => A(e),
                                onCancel: y,
                                okText: i.Ru._({ id: "l75CjT" }),
                                cancelText: i.Ru._({ id: "1UzENP" }),
                                children: (0, k.jsx)(F.A, {}),
                              }),
                            }),
                          ],
                        },
                        null === e || void 0 === e ? void 0 : e.description
                      );
                    })
                : (0, k.jsx)("div", {
                    className: "addressBook-empty",
                    children: (0, k.jsx)(l.x6, { id: "VIsMMH" }),
                  }),
            [h, A]
          );
        return (0, k.jsxs)(k.Fragment, {
          children: [
            r,
            (0, k.jsxs)(j.A, {
              className: "addressBook-modal",
              open: s,
              width: "650px",
              title: i.Ru._({ id: "zQNgWc" }),
              footer: null,
              onCancel: N,
              children: [
                (0, k.jsx)("div", {
                  className: "addressBook-content",
                  children: (0, k.jsx)(o.A, { spinning: f, children: R }),
                }),
                (0, k.jsx)("div", {
                  className: "add-address-btn-box",
                  children: (0, k.jsx)(a.Ay, {
                    type: "primary",
                    className: "add-address-btn",
                    onClick: () => {
                      m(!0);
                    },
                    children: i.Ru._({ id: "W0pjLr" }),
                  }),
                }),
              ],
            }),
            (0, k.jsx)(I, {
              add: x,
              setAdd: m,
              addressBook: h,
              setAddressBook: p,
              handleQueryAddressBook: C,
            }),
          ],
        });
      }
      const E = (0, t.memo)(_);
      var M,
        P = n(60393),
        O = n(14639),
        V = n(22642),
        T = n(99609),
        q = n(42296);
      function B() {
        return (
          (B = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var n = arguments[s];
                  for (var l in n)
                    ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
                }
                return e;
              }),
          B.apply(null, arguments)
        );
      }
      function U(e, s) {
        let { title: n, titleId: l, ...i } = e;
        return t.createElement(
          "svg",
          B(
            {
              width: 24,
              height: 25,
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: s,
              "aria-labelledby": l,
            },
            i
          ),
          n ? t.createElement("title", { id: l }, n) : null,
          M ||
            (M = t.createElement("path", {
              d: "M20.0302 17.531L17.0302 20.531C16.8895 20.6718 16.6986 20.7508 16.4996 20.7508C16.3006 20.7508 16.1097 20.6718 15.969 20.531C15.8283 20.3903 15.7492 20.1994 15.7492 20.0004C15.7492 19.8014 15.8283 19.6105 15.969 19.4698L17.6893 17.7504H4.49961C4.3007 17.7504 4.10994 17.6714 3.96928 17.5307C3.82863 17.3901 3.74961 17.1993 3.74961 17.0004C3.74961 16.8015 3.82863 16.6107 3.96928 16.4701C4.10994 16.3294 4.3007 16.2504 4.49961 16.2504H17.6893L15.969 14.531C15.8283 14.3903 15.7492 14.1994 15.7492 14.0004C15.7492 13.8014 15.8283 13.6105 15.969 13.4698C16.1097 13.3291 16.3006 13.25 16.4996 13.25C16.6986 13.25 16.8895 13.3291 17.0302 13.4698L20.0302 16.4698C20.1 16.5394 20.1553 16.6222 20.193 16.7132C20.2308 16.8043 20.2502 16.9019 20.2502 17.0004C20.2502 17.099 20.2308 17.1966 20.193 17.2876C20.1553 17.3787 20.1 17.4614 20.0302 17.531ZM6.96899 11.531C7.10972 11.6718 7.30059 11.7508 7.49961 11.7508C7.69864 11.7508 7.88951 11.6718 8.03024 11.531C8.17097 11.3903 8.25003 11.1994 8.25003 11.0004C8.25003 10.8014 8.17097 10.6105 8.03024 10.4698L6.30993 8.75042H19.4996C19.6985 8.75042 19.8893 8.6714 20.0299 8.53075C20.1706 8.39009 20.2496 8.19933 20.2496 8.00042C20.2496 7.8015 20.1706 7.61074 20.0299 7.47009C19.8893 7.32943 19.6985 7.25042 19.4996 7.25042H6.30993L8.03024 5.53104C8.17097 5.39031 8.25003 5.19944 8.25003 5.00042C8.25003 4.80139 8.17097 4.61052 8.03024 4.46979C7.88951 4.32906 7.69864 4.25 7.49961 4.25C7.30059 4.25 7.10972 4.32906 6.96899 4.46979L3.96899 7.46979C3.89926 7.53945 3.84394 7.62216 3.80619 7.71321C3.76845 7.80426 3.74902 7.90186 3.74902 8.00042C3.74902 8.09898 3.76845 8.19657 3.80619 8.28762C3.84394 8.37867 3.89926 8.46139 3.96899 8.53104L6.96899 11.531Z",
              fill: "#041011",
            }))
        );
      }
      const z = t.forwardRef(U);
      n.p;
      var H;
      function Z() {
        return (
          (Z = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var n = arguments[s];
                  for (var l in n)
                    ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
                }
                return e;
              }),
          Z.apply(null, arguments)
        );
      }
      function K(e, s) {
        let { title: n, titleId: l, ...i } = e;
        return t.createElement(
          "svg",
          Z(
            {
              width: 24,
              height: 25,
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: s,
              "aria-labelledby": l,
            },
            i
          ),
          n ? t.createElement("title", { id: l }, n) : null,
          H ||
            (H = t.createElement("path", {
              d: "M4.71938 11.5306C4.57864 11.3899 4.49958 11.199 4.49958 11C4.49958 10.801 4.57864 10.6101 4.71938 10.4694C4.86011 10.3286 5.05098 10.2496 5.25 10.2496C5.44902 10.2496 5.63989 10.3286 5.78062 10.4694L11.25 15.9397V3.5C11.25 3.30109 11.329 3.11032 11.4697 2.96967C11.6103 2.82902 11.8011 2.75 12 2.75C12.1989 2.75 12.3897 2.82902 12.5303 2.96967C12.671 3.11032 12.75 3.30109 12.75 3.5V15.9397L18.2194 10.4694C18.2891 10.3997 18.3718 10.3444 18.4628 10.3067C18.5539 10.269 18.6515 10.2496 18.75 10.2496C18.8485 10.2496 18.9461 10.269 19.0372 10.3067C19.1282 10.3444 19.2109 10.3997 19.2806 10.4694C19.3503 10.5391 19.4056 10.6218 19.4433 10.7128C19.481 10.8039 19.5004 10.9015 19.5004 11C19.5004 11.0985 19.481 11.1961 19.4433 11.2872C19.4056 11.3782 19.3503 11.4609 19.2806 11.5306L12.5306 18.2806C12.461 18.3504 12.3783 18.4057 12.2872 18.4434C12.1962 18.4812 12.0986 18.5006 12 18.5006C11.9014 18.5006 11.8038 18.4812 11.7128 18.4434C11.6217 18.4057 11.539 18.3504 11.4694 18.2806L4.71938 11.5306ZM20.25 20H3.75C3.55109 20 3.36032 20.079 3.21967 20.2197C3.07902 20.3603 3 20.5511 3 20.75C3 20.9489 3.07902 21.1397 3.21967 21.2803C3.36032 21.421 3.55109 21.5 3.75 21.5H20.25C20.4489 21.5 20.6397 21.421 20.7803 21.2803C20.921 21.1397 21 20.9489 21 20.75C21 20.5511 20.921 20.3603 20.7803 20.2197C20.6397 20.079 20.4489 20 20.25 20Z",
              fill: "#FFFCE4",
            }))
        );
      }
      const G = t.forwardRef(K);
      n.p;
      var J, Q;
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var n = arguments[s];
                  for (var l in n)
                    ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
                }
                return e;
              }),
          D.apply(null, arguments)
        );
      }
      function W(e, s) {
        let { title: n, titleId: l, ...i } = e;
        return t.createElement(
          "svg",
          D(
            {
              width: 24,
              height: 25,
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: s,
              "aria-labelledby": l,
            },
            i
          ),
          n ? t.createElement("title", { id: l }, n) : null,
          J ||
            (J = t.createElement("path", {
              d: "M4.5 10.2506C4.5 10.0516 4.57906 9.86069 4.71979 9.71996L11.4698 2.96996C11.5394 2.90023 11.6222 2.84491 11.7132 2.80717C11.8043 2.76943 11.9019 2.75 12.0004 2.75C12.099 2.75 12.1966 2.76943 12.2876 2.80717C12.3787 2.84491 12.4614 2.90023 12.531 2.96996L19.281 9.71996C19.3507 9.78965 19.406 9.87237 19.4437 9.96342C19.4814 10.0545 19.5008 10.152 19.5008 10.2506C19.5008 10.3491 19.4814 10.4467 19.4437 10.5378C19.406 10.6288 19.3507 10.7115 19.281 10.7812C19.2114 10.8509 19.1286 10.9062 19.0376 10.9439C18.9465 10.9816 18.849 11.001 18.7504 11.001C18.6519 11.001 18.5543 10.9816 18.4632 10.9439C18.3722 10.9062 18.2895 10.8509 18.2198 10.7812L12.7504 5.3109V17.7506C12.7504 17.9495 12.6714 18.1403 12.5307 18.2809C12.3901 18.4216 12.1993 18.5006 12.0004 18.5006C11.8015 18.5006 11.6107 18.4216 11.4701 18.2809C11.3294 18.1403 11.2504 17.9495 11.2504 17.7506V5.3109L5.78104 10.7812C5.64031 10.9219 5.44944 11.001 5.25042 11.001C5.05139 11.001 4.86052 10.9219 4.71979 10.7812C4.57906 10.6405 4.5 10.4496 4.5 10.2506Z",
              fill: "#FFFCE4",
            })),
          Q ||
            (Q = t.createElement("path", {
              d: "M3.75 20.0001H20.25C20.4489 20.0001 20.6397 20.0791 20.7803 20.2198C20.921 20.3604 21 20.5512 21 20.7501C21 20.949 20.921 21.1398 20.7803 21.2804C20.6397 21.4211 20.4489 21.5001 20.25 21.5001H3.75C3.55109 21.5001 3.36032 21.4211 3.21967 21.2804C3.07902 21.1398 3 20.949 3 20.7501C3 20.5512 3.07902 20.3604 3.21967 20.2198C3.36032 20.0791 3.55109 20.0001 3.75 20.0001Z",
              fill: "#FFFCE4",
            }))
        );
      }
      const X = t.forwardRef(W);
      n.p;
      n.p;
      var $;
      function Y() {
        return (
          (Y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var s = 1; s < arguments.length; s++) {
                  var n = arguments[s];
                  for (var l in n)
                    ({}).hasOwnProperty.call(n, l) && (e[l] = n[l]);
                }
                return e;
              }),
          Y.apply(null, arguments)
        );
      }
      function ee(e, s) {
        let { title: n, titleId: l, ...i } = e;
        return t.createElement(
          "svg",
          Y(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: s,
              "aria-labelledby": l,
            },
            i
          ),
          n ? t.createElement("title", { id: l }, n) : null,
          $ ||
            ($ = t.createElement("path", {
              d: "M22.4995 5.25013V9.75013C22.4995 9.94905 22.4205 10.1398 22.2799 10.2805C22.1392 10.4211 21.9484 10.5001 21.7495 10.5001H17.2495C17.0506 10.5001 16.8598 10.4211 16.7192 10.2805C16.5785 10.1398 16.4995 9.94905 16.4995 9.75013C16.4995 9.55122 16.5785 9.36046 16.7192 9.2198C16.8598 9.07915 17.0506 9.00013 17.2495 9.00013H19.8183L17.3255 6.71638L17.302 6.69388C16.2596 5.65184 14.9332 4.94006 13.4886 4.64746C12.044 4.35485 10.5452 4.4944 9.17942 5.04866C7.81365 5.60293 6.64148 6.54734 5.80934 7.76391C4.97719 8.98048 4.52196 10.4153 4.50052 11.8891C4.47907 13.3629 4.89237 14.8103 5.68877 16.0506C6.48517 17.2908 7.62937 18.269 8.97843 18.8627C10.3275 19.4565 11.8216 19.6396 13.2741 19.3891C14.7266 19.1387 16.0731 18.4658 17.1455 17.4545C17.29 17.3178 17.483 17.244 17.682 17.2496C17.8809 17.2551 18.0695 17.3395 18.2062 17.484C18.343 17.6286 18.4167 17.8216 18.4112 18.0205C18.4056 18.2195 18.3213 18.4081 18.1767 18.5448C16.5093 20.1261 14.2975 21.0053 11.9995 21.0001H11.8758C10.4018 20.9799 8.9553 20.598 7.66349 19.8879C6.37167 19.1777 5.27406 18.1612 4.46714 16.9275C3.66021 15.6938 3.16866 14.2808 3.03571 12.8127C2.90275 11.3446 3.13245 9.86628 3.70462 8.50772C4.27679 7.14916 5.17391 5.95194 6.31714 5.02128C7.46036 4.09063 8.81468 3.45504 10.2611 3.17038C11.7075 2.88571 13.2016 2.96069 14.6122 3.38871C16.0229 3.81674 17.3068 4.58471 18.3511 5.62513L20.9995 8.04388V5.25013C20.9995 5.05122 21.0785 4.86046 21.2192 4.7198C21.3598 4.57915 21.5506 4.50013 21.7495 4.50013C21.9484 4.50013 22.1392 4.57915 22.2799 4.7198C22.4205 4.86046 22.4995 5.05122 22.4995 5.25013Z",
              fill: "#FFFCE4",
            }))
        );
      }
      const se = t.forwardRef(ee);
      n.p;
      var ne = n(72125),
        le = n(48708),
        ie = n(99483),
        te = n(14889),
        de = n(40678),
        ae = n(57752),
        oe = n(62160),
        re = n(68264);
      function ce() {
        const [e, s] = (0, t.useState)(!1),
          n = (0, t.useRef)(null),
          [i, d] = (0, t.useState)(!1),
          o = (0, t.useCallback)(() => {
            s(!1), re.hZ("isShowNoticeModal", !0);
          }, []);
        return (
          (0, t.useEffect)(() => {
            re.Jt("isShowNoticeModal") || s(!0);
            const l = n.current,
              i = () => {
                l.scrollTop + l.clientHeight >= l.scrollHeight - 150
                  ? d(!0)
                  : d(!1);
              };
            return (
              e &&
                (null === l || void 0 === l || l.addEventListener("scroll", i)),
              () => {
                e &&
                  (null === l ||
                    void 0 === l ||
                    l.removeEventListener("scroll", i));
              }
            );
          }, [e]),
          (0, k.jsx)(k.Fragment, {
            children: (0, k.jsxs)(j.A, {
              width: 500,
              title: null,
              centered: !0,
              open: e,
              footer: null,
              closable: !1,
              onCancel: o,
              maskClosable: !1,
              children: [
                (0, k.jsx)("h2", {
                  className: "nostrswap-modal-title",
                  children: (0, k.jsx)(l.x6, { id: "BqPNsl" }),
                }),
                (0, k.jsxs)("div", {
                  className: "nostrswap-modal nostrswap-modal-scroll",
                  ref: n,
                  children: [
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "iDGO1l" }),
                        }),
                        (0, k.jsx)("div", {
                          children: (0, k.jsx)(l.x6, { id: "k3Ejv2" }),
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "Gl05cS" }),
                        }),
                        (0, k.jsx)("div", {
                          children: (0, k.jsx)(l.x6, { id: "IZLyEa" }),
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "7nWq72" }),
                        }),
                        (0, k.jsxs)("div", {
                          children: [
                            (0, k.jsx)(l.x6, { id: "yImK+l" }),
                            (0, k.jsx)("p", {
                              children: (0, k.jsx)(l.x6, {
                                id: "IqbzQU",
                                components: {
                                  0: (0, k.jsx)("span", {
                                    className: "color-base",
                                  }),
                                },
                              }),
                            }),
                            (0, k.jsx)("p", {
                              children: (0, k.jsx)(l.x6, {
                                id: "1GbeZ6",
                                components: {
                                  0: (0, k.jsx)("span", {
                                    className: "color-base",
                                  }),
                                },
                              }),
                            }),
                            (0, k.jsxs)("p", {
                              children: [
                                (0, k.jsx)(l.x6, {
                                  id: "6e1W3Z",
                                  components: {
                                    0: (0, k.jsx)("span", {
                                      className: "color-base",
                                    }),
                                  },
                                }),
                                " ",
                              ],
                            }),
                            (0, k.jsx)("p", {
                              children: (0, k.jsx)(l.x6, {
                                id: "9RwU2s",
                                components: {
                                  0: (0, k.jsx)("span", {
                                    className: "color-base",
                                  }),
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "nKHSdE" }),
                        }),
                        (0, k.jsx)("div", {
                          children: (0, k.jsx)(l.x6, { id: "2UabuO" }),
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "/y5gc9" }),
                        }),
                        (0, k.jsxs)("div", {
                          children: [
                            (0, k.jsx)(l.x6, { id: "MF2TaZ" }),
                            (0, k.jsx)("p", {
                              children: (0, k.jsx)(l.x6, { id: "pomrHx" }),
                            }),
                            (0, k.jsx)("p", {
                              children: (0, k.jsx)(l.x6, { id: "XM9aCS" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "0ADVOG" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "xYUMib" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "cbZux0" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "Ew/Uo6" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "CO9Z3a" }),
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "vuKNpL" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "L86+Sn" }),
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "O6haqk" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "6MacAK" }),
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "/3aRI3" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "xYGxWu" }),
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "nostrswap-modal-description",
                      children: [
                        (0, k.jsx)("h3", {
                          className: "nostrswap-modal-subtitle",
                          children: (0, k.jsx)(l.x6, { id: "TdjCAM" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "/C6NPM" }),
                        }),
                        (0, k.jsx)("p", {
                          children: (0, k.jsx)(l.x6, { id: "AXf2Fp" }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsx)("div", {
                  className: "nostrswap-modal-footer",
                  children: (0, k.jsx)(a.Ay, {
                    size: "middle",
                    type: "primary",
                    onClick: () => {
                      o();
                    },
                    disabled: !i,
                    children: (0, k.jsx)(l.x6, { id: "PZNCwI" }),
                  }),
                }),
              ],
            }),
          })
        );
      }
      var ue = n(90364);
      const xe = {
        ETHEREUM: "ETH",
        BRC20: "BTC",
        LIGHTNING: "Plasma",
        TAPROOT: "Taproot",
      };
      function me() {
        var e;
        const { handleQueryTokenList: s } = (0, w.bi)(),
          n = (0, ae.A)(),
          m = (0, c.wA)(),
          [h, v] = (0, t.useState)(!1),
          [j, p] = (0, t.useState)(!1),
          [C, f] = (0, t.useState)(null),
          b = (0, q.W6)(),
          {
            nostrAccount: A,
            balanceList: y,
            npubNostrAccount: L,
          } = (0, c.d4)((e) => {
            let { user: s } = e;
            return s;
          }),
          {
            tokenList: F,
            marketPriceTokenList: S,
            isTokenSet: I,
            quote_pirce: _,
          } = (0, c.d4)((e) => {
            let { market: s } = e;
            return s;
          }),
          M = (0, t.useMemo)(
            () =>
              F.find(
                (e) => (null === e || void 0 === e ? void 0 : e.name) === N.UF
              ),
            [F]
          ),
          { handleQueryBalance: B, loading: U } = (0, w.m)(),
          [H, Z] = (0, t.useState)(!1),
          K = (0, t.useCallback)(async () => {
            Z(!0), await B(L), s(), Z(!1);
          }, [B, s, L]),
          J = (0, t.useMemo)(() => {
            let e = 0;
            return A
              ? (null !== F &&
                  void 0 !== F &&
                  F.length &&
                  F.forEach((s) => {
                    var n, l;
                    const i = S.find(
                        (e) =>
                          (null === e || void 0 === e ? void 0 : e.name) ==
                          (null === s || void 0 === s ? void 0 : s.name)
                      ),
                      t =
                        (null === y ||
                        void 0 === y ||
                        null ===
                          (n =
                            y[null === s || void 0 === s ? void 0 : s.name]) ||
                        void 0 === n
                          ? void 0
                          : n.balanceShow) || 0;
                    (null === s ||
                    void 0 === s ||
                    null === (l = s.name) ||
                    void 0 === l
                      ? void 0
                      : l.toLowerCase()) ==
                    (null === N.UF || void 0 === N.UF
                      ? void 0
                      : N.UF.toLowerCase())
                      ? (e += (0, T.A)(t).toNumber())
                      : null !== i &&
                        void 0 !== i &&
                        i.dealPrice &&
                        i &&
                        t &&
                        (e += (0, T.A)(i.dealPrice).times(t).toNumber());
                  }),
                e)
              : "--";
          }, [A, F, S, y]),
          Q = (0, t.useCallback)((e) => {
            f(e), v(!0);
          }, []),
          D = (0, t.useCallback)(
            (e) => {
              b.push(`/${e}`);
            },
            [b]
          ),
          W =
            ((0, t.useCallback)(() => {
              m((0, oe.Nm)(!0));
            }, [m]),
            (0, t.useMemo)(
              () =>
                (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)("span", {
                      style: { paddingRight: "5px" },
                      children: (0, k.jsx)(l.x6, { id: "fINLvw" }),
                    }),
                    (0, k.jsx)(d.A, {
                      title: (0, k.jsx)(l.x6, { id: "uBEkMx" }),
                      children: (0, k.jsx)(ne.A, {}),
                    }),
                  ],
                }),
              []
            )),
          $ = (0, t.useMemo)(() => {
            var e, s, t;
            return null !== n && void 0 !== n && n.isMobile
              ? [
                  {
                    title: i.Ru._({ id: "bUUVED" }),
                    dataIndex: "name",
                    fixed: "left",
                    render: (e, s) =>
                      e
                        ? (0, k.jsxs)("div", {
                            className: "flex",
                            children: [
                              (0, k.jsx)(P.A, {
                                assetToken: s,
                                children: (0, k.jsxs)("span", {
                                  className: "token-line-box",
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                  children: [
                                    e,
                                    " ",
                                    (0, k.jsx)(le.A, {
                                      style: {
                                        fontSize: "12px",
                                        marginLeft: "5px",
                                      },
                                    }),
                                    " ",
                                    (null === s || void 0 === s
                                      ? void 0
                                      : s.assetTypeStr) &&
                                      (0, k.jsx)("div", {
                                        className: "token-line-tag",
                                        children:
                                          null === s || void 0 === s
                                            ? void 0
                                            : s.assetTypeStr,
                                      }),
                                  ],
                                }),
                              }),
                              "TRICK" == e &&
                                (0, k.jsx)(d.A, {
                                  classNames: { root: "token-info-tooltip" },
                                  title: (0, k.jsxs)("div", {
                                    children: [
                                      (0, k.jsx)("div", {
                                        children: (0, k.jsx)(l.x6, {
                                          id: "9uNq8w",
                                        }),
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "mt10",
                                        children: [
                                          (0, k.jsx)(l.x6, { id: "zlJ5u+" }),
                                          ":",
                                        ],
                                      }),
                                      !1 && (0, k.jsx)("div", {
                                        children: (0, k.jsx)("a", {
                                          href: "https://lnfinetwork.medium.com/announcement-trick-to-merge-into-treat-not-the-official-token-1e6b04beaec7",
                                          target: "_blank",
                                          children:
                                            "https://lnfinetwork.medium.com/announcement-trick-to-merge-into-treat-not-the-official-token-1e6b04beaec7",
                                        }),
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "mt10",
                                        children: [
                                          (0, k.jsx)(l.x6, { id: "nriout" }),
                                          ":",
                                        ],
                                      }),
                                      (0, k.jsx)("div", {
                                        children: (0, k.jsx)("a", {
                                          href: "https://docs.google.com/spreadsheets/d/1LprVOhiVB1Wh6ILJMrqqOI8PRR4wwf_dMj2hPD6CIz8/edit?usp=sharing",
                                          target: "_blank",
                                          children:
                                            "https://docs.google.com/spreadsheets/d/1LprVOhiVB1Wh6ILJMrqqOI8PRR4wwf_dMj2hPD6CIz8/edit?usp=sharing",
                                        }),
                                      }),
                                    ],
                                  }),
                                  children: (0, k.jsx)(ie.A, {
                                    style: {
                                      fontSize: "14px",
                                      marginLeft: "5px",
                                    },
                                  }),
                                }),
                            ],
                          })
                        : "--",
                  },
                  {
                    title: i.Ru._({ id: "fsBGk0" }),
                    dataIndex: "name",
                    render: (e) => {
                      var s;
                      const n =
                        null === y ||
                        void 0 === y ||
                        null === (s = y[e]) ||
                        void 0 === s
                          ? void 0
                          : s.balanceShow;
                      return n
                        ? (0, k.jsx)("span", {
                            className: "color-light",
                            children: (0, g.qC)(n),
                          })
                        : "0";
                    },
                  },
                  {
                    title: i.Ru._({
                      id: "3Kw/Ui",
                      values: {
                        0:
                          (null === M ||
                          void 0 === M ||
                          null === (e = M.name) ||
                          void 0 === e
                            ? void 0
                            : e.toLowerCase()) || "--",
                      },
                    }),
                    dataIndex: "name",
                    render: (e, s) => {
                      var n;
                      if (!A) return "--";
                      const l =
                        (null === y ||
                        void 0 === y ||
                        null === (n = y[e]) ||
                        void 0 === n
                          ? void 0
                          : n.balanceShow) || 0;
                      if (
                        (null === e || void 0 === e
                          ? void 0
                          : e.toLowerCase()) ==
                        (null === N.UF || void 0 === N.UF
                          ? void 0
                          : N.UF.toLowerCase())
                      ) {
                        const e = M ? (0, T.A)(1).times(l).toNumber() : "";
                        return e
                          ? (0, k.jsxs)("span", {
                              className: "token-line-box",
                              children: [
                                (0, g.qC)(
                                  (0, g.yC)(
                                    e,
                                    (null === M || void 0 === M
                                      ? void 0
                                      : M.reserve) || 0
                                  )
                                ),
                                (0, k.jsx)("div", {
                                  className: "token-line-tag",
                                  children: (0, ue.nO)(e, _),
                                }),
                              ],
                            })
                          : "0";
                      }
                      const i = S.find(
                          (s) =>
                            (null === s || void 0 === s ? void 0 : s.name) == e
                        ),
                        t =
                          null !== i && void 0 !== i && i.dealPrice && M
                            ? (0, T.A)(i.dealPrice).times(l).toNumber()
                            : "";
                      return t
                        ? (0, k.jsxs)("span", {
                            className: "token-line-box",
                            children: [
                              (0, g.qC)(
                                (0, g.yC)(
                                  t,
                                  (null === M || void 0 === M
                                    ? void 0
                                    : M.reserve) || 0
                                )
                              ),
                              (0, k.jsx)("div", {
                                className: "token-line-tag",
                                children: (0, ue.nO)(t, _),
                              }),
                            ],
                          })
                        : "0";
                    },
                  },
                  {
                    title: W,
                    dataIndex: "name",
                    render: (e) => {
                      var s;
                      const n =
                        null === y ||
                        void 0 === y ||
                        null === (s = y[e]) ||
                        void 0 === s
                          ? void 0
                          : s.lockedShow;
                      return n
                        ? (0, k.jsx)("span", {
                            className: "color-light",
                            children: (0, g.qC)(n),
                          })
                        : "0";
                    },
                  },
                ]
              : [
                  {
                    title: i.Ru._({ id: "bUUVED" }),
                    dataIndex: "name",
                    render: (e, s) =>
                      e
                        ? (0, k.jsxs)("div", {
                            className: "flex",
                            children: [
                              (0, k.jsx)(P.A, {
                                assetToken: s,
                                children: (0, k.jsxs)("span", {
                                  className: "token-line-box",
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                  },
                                  children: [
                                    e,
                                    " ",
                                    (0, k.jsx)(le.A, {
                                      style: {
                                        fontSize: "12px",
                                        marginLeft: "5px",
                                      },
                                    }),
                                    " ",
                                    (null === s || void 0 === s
                                      ? void 0
                                      : s.assetTypeStr) &&
                                      (0, k.jsx)("div", {
                                        className: "token-line-tag",
                                        children:
                                          null === s || void 0 === s
                                            ? void 0
                                            : s.assetTypeStr,
                                      }),
                                  ],
                                }),
                              }),
                              "TRICK" == e &&
                                (0, k.jsx)(d.A, {
                                  classNames: { root: "token-info-tooltip" },
                                  title: (0, k.jsxs)("div", {
                                    children: [
                                      (0, k.jsx)("div", {
                                        children: (0, k.jsx)(l.x6, {
                                          id: "t+Rf/l",
                                        }),
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "mt10",
                                        children: [
                                          (0, k.jsx)(l.x6, { id: "zlJ5u+" }),
                                          ":",
                                        ],
                                      }),
                                      !1 && (0, k.jsx)("div", {
                                        children: (0, k.jsx)("a", {
                                          href: "https://lnfinetwork.medium.com/announcement-trick-to-merge-into-treat-not-the-official-token-1e6b04beaec7",
                                          target: "_blank",
                                          children:
                                            "https://lnfinetwork.medium.com/announcement-trick-to-merge-into-treat-not-the-official-token-1e6b04beaec7",
                                        }),
                                      }),
                                      (0, k.jsxs)("div", {
                                        className: "mt10",
                                        children: [
                                          (0, k.jsx)(l.x6, { id: "nriout" }),
                                          ":",
                                        ],
                                      }),
                                      (0, k.jsx)("div", {
                                        children: (0, k.jsx)("a", {
                                          href: "https://docs.google.com/spreadsheets/d/1LprVOhiVB1Wh6ILJMrqqOI8PRR4wwf_dMj2hPD6CIz8/edit?usp=sharing",
                                          target: "_blank",
                                          children:
                                            "https://docs.google.com/spreadsheets/d/1LprVOhiVB1Wh6ILJMrqqOI8PRR4wwf_dMj2hPD6CIz8/edit?usp=sharing",
                                        }),
                                      }),
                                    ],
                                  }),
                                  children: (0, k.jsx)(ie.A, {
                                    style: {
                                      fontSize: "14px",
                                      marginLeft: "5px",
                                    },
                                  }),
                                }),
                            ],
                          })
                        : "--",
                  },
                  {
                    title: i.Ru._({ id: "s+xImV" }),
                    dataIndex: "token",
                    render: (e, s) =>
                      e
                        ? (0, k.jsx)(x.A, { suffixCount: 5, children: e })
                        : "--",
                  },
                  {
                    title: i.Ru._({
                      id: "f1zqT/",
                      values: {
                        0:
                          (null === M ||
                          void 0 === M ||
                          null === (s = M.name) ||
                          void 0 === s
                            ? void 0
                            : s.toLowerCase()) || "--",
                      },
                    }),
                    dataIndex: "name",
                    render: (e, s) => {
                      if (e == N.UF) return "1";
                      const n = S.find(
                          (s) =>
                            (null === s || void 0 === s ? void 0 : s.name) == e
                        ),
                        l =
                          null !== n && void 0 !== n && n.dealPrice && M
                            ? (0, T.A)(n.dealPrice).toNumber()
                            : "--";
                      return "--" != l
                        ? (0, k.jsxs)("span", {
                            className: "token-line-box",
                            children: [
                              (0, g.qC)(
                                (0, g.yC)(
                                  l,
                                  (null === M || void 0 === M
                                    ? void 0
                                    : M.reserve) || 0
                                )
                              ),
                              (0, k.jsx)("div", {
                                className: "token-line-tag",
                                children: (0, ue.nO)(l, _),
                              }),
                            ],
                          })
                        : "--";
                    },
                  },
                  {
                    title: i.Ru._({ id: "fsBGk0" }),
                    dataIndex: "name",
                    render: (e) => {
                      var s;
                      const n =
                        null === y ||
                        void 0 === y ||
                        null === (s = y[e]) ||
                        void 0 === s
                          ? void 0
                          : s.balanceShow;
                      return n
                        ? (0, k.jsx)("span", {
                            className: "color-light",
                            children: (0, g.qC)(n),
                          })
                        : "0";
                    },
                  },
                  {
                    title: (0, k.jsx)(l.x6, {
                      id: "3Kw/Ui",
                      values: {
                        0:
                          (null === M ||
                          void 0 === M ||
                          null === (t = M.name) ||
                          void 0 === t
                            ? void 0
                            : t.toLowerCase()) || "--",
                      },
                    }),
                    dataIndex: "name",
                    render: (e, s) => {
                      var n;
                      if (!A) return "--";
                      const l =
                        (null === y ||
                        void 0 === y ||
                        null === (n = y[e]) ||
                        void 0 === n
                          ? void 0
                          : n.balanceShow) || 0;
                      if (
                        (null === e || void 0 === e
                          ? void 0
                          : e.toLowerCase()) ==
                        (null === N.UF || void 0 === N.UF
                          ? void 0
                          : N.UF.toLowerCase())
                      ) {
                        const e = M ? (0, T.A)(1).times(l).toNumber() : "";
                        return e
                          ? (0, k.jsxs)("span", {
                              className: "token-line-box",
                              children: [
                                (0, g.qC)(
                                  (0, g.yC)(
                                    e,
                                    (null === M || void 0 === M
                                      ? void 0
                                      : M.reserve) || 0
                                  )
                                ),
                                (0, k.jsx)("div", {
                                  className: "token-line-tag",
                                  children: (0, ue.nO)(e, _),
                                }),
                              ],
                            })
                          : "0";
                      }
                      const i = S.find(
                          (s) =>
                            (null === s || void 0 === s ? void 0 : s.name) == e
                        ),
                        t =
                          null !== i && void 0 !== i && i.dealPrice && M
                            ? (0, T.A)(i.dealPrice).times(l).toNumber()
                            : "";
                      return t
                        ? (0, k.jsxs)("span", {
                            className: "token-line-box",
                            children: [
                              (0, g.qC)(
                                (0, g.yC)(
                                  t,
                                  (null === M || void 0 === M
                                    ? void 0
                                    : M.reserve) || 0
                                )
                              ),
                              (0, k.jsx)("div", {
                                className: "token-line-tag",
                                children: (0, ue.nO)(t, _),
                              }),
                            ],
                          })
                        : "0";
                    },
                  },
                  {
                    title: W,
                    dataIndex: "name",
                    render: (e) => {
                      var s;
                      const n =
                        null === y ||
                        void 0 === y ||
                        null === (s = y[e]) ||
                        void 0 === s
                          ? void 0
                          : s.lockedShow;
                      return n
                        ? (0, k.jsx)("span", {
                            className: "color-light",
                            children: (0, g.qC)(Number(n)),
                          })
                        : "0";
                    },
                  },
                  {
                    title: i.Ru._({ id: "7L01XJ" }),
                    dataIndex: "status",
                    width: 200,
                    render: (e, s) =>
                      (0, k.jsxs)("div", {
                        className: "account-table-btns",
                        children: [
                          (0, k.jsx)(de.A, {
                            children: (0, k.jsx)(a.Ay, {
                              size: "small",
                              onClick: () => {
                                const e = xe[s.assetType];
                                D(
                                  `receive/${e}/${
                                    null === s || void 0 === s ? void 0 : s.name
                                  }`
                                );
                              },
                              children: i.Ru._({ id: "kj3M8S" }),
                            }),
                          }),
                          (0, k.jsx)(de.A, {
                            children: (0, k.jsx)(a.Ay, {
                              size: "small",
                              onClick: () => {
                                const e = xe[s.assetType];
                                D(
                                  `send/${e}/${
                                    null === s || void 0 === s ? void 0 : s.name
                                  }`
                                );
                              },
                              children: i.Ru._({ id: "OsyKSt" }),
                            }),
                          }),
                        ],
                      }),
                  },
                ];
          }, [
            null === n || void 0 === n ? void 0 : n.isMobile,
            M,
            W,
            S,
            _,
            y,
            A,
            D,
          ]);
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)(ce, {}),
            !A &&
              (0, k.jsx)("div", {
                className: "account-nologin",
                children: (0, k.jsxs)("div", {
                  className: "account-nologin-content",
                  children: [
                    (0, k.jsx)("div", {
                      className: "account-nologin-content-text",
                      children: i.Ru._({ id: "HgZHNE" }),
                    }),
                    (0, k.jsx)("div", {
                      className: "account-nologin-content-text",
                      children: i.Ru._({ id: "q4lrJ+" }),
                    }),
                    (0, k.jsx)("div", {
                      className: "account-nologin-content-text-sub",
                      children: i.Ru._({ id: "cV3fb1" }),
                    }),
                    (0, k.jsx)("div", {
                      className: "account-nologin-content-btns",
                      children: (0, k.jsx)(te.A, {}),
                    }),
                  ],
                }),
              }),
            (0, k.jsxs)("div", {
              className: "account",
              children: [
                !!A &&
                  (0, k.jsx)("div", {
                    className: "account-head",
                    children: (0, k.jsxs)("div", {
                      className: "account-head-left",
                      children: [
                        (0, k.jsx)("div", {
                          className: "account-head-left-logo",
                          children: (0, k.jsx)("img", { src: O, alt: "" }),
                        }),
                        (0, k.jsxs)("div", {
                          className: "account-head-left-nostr",
                          children: [
                            (0, k.jsx)("div", {
                              className: "f12 color-dark",
                              children: (0, k.jsx)(l.x6, { id: "VcHO1t" }),
                            }),
                            (0, k.jsx)("div", {
                              className: "account-head-left-nostr-text",
                              children: (0, k.jsx)(x.A, {
                                suffixCount: 8,
                                children: u.Qe.npubEncode(A),
                              }),
                            }),
                            (0, k.jsx)("div", {
                              className: "account-head-left-btns",
                              children: (0, k.jsx)(a.Ay, {
                                className: "account-head-left-btns-addressBook",
                                size: "small",
                                onClick: () => p(!0),
                                children: i.Ru._({ id: "ZODxt2" }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                (0, k.jsxs)("div", {
                  className: "account-table-box",
                  children: [
                    (0, k.jsxs)("div", {
                      className: "account-tokenList-title",
                      children: [
                        (0, k.jsxs)("div", {
                          className: "account-tokenList-title-left",
                          children: [
                            (0, k.jsx)("img", { src: V, alt: "" }),
                            (0, k.jsx)("span", {
                              children: i.Ru._({ id: "GX8GKD" }),
                            }),
                          ],
                        }),
                        (0, k.jsxs)("div", {
                          className: "account-tokenList-title-right",
                          children: [
                            (0, k.jsxs)("span", {
                              children: [
                                (0, k.jsx)(l.x6, { id: "wMF5n0" }),
                                ":",
                                " ",
                              ],
                            }),
                            (0, k.jsx)(x.A, {
                              suffixCount: 5,
                              suffixEnable: !!n.isMobile,
                              children: "universe.lnfi.network:10029",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)("div", {
                      className: "account-tokenList-actions",
                      children: [
                        (0, k.jsxs)("div", {
                          className: "account-tokenList-total",
                          children: [
                            (0, k.jsxs)("div", {
                              className: "account-tokenList-total-wrap",
                              children: [
                                J
                                  ? (0, g.qC)(
                                      (0, g.yC)(
                                        J,
                                        (null === M || void 0 === M
                                          ? void 0
                                          : M.reserve) || 0
                                      )
                                    )
                                  : "0",
                                " ",
                                (0, k.jsxs)("span", {
                                  className: "unit",
                                  children: [
                                    null === M ||
                                    void 0 === M ||
                                    null === (e = M.name) ||
                                    void 0 === e
                                      ? void 0
                                      : e.toLowerCase(),
                                    " ",
                                  ],
                                }),
                                (0, k.jsx)(de.A, {
                                  children: (0, k.jsx)("span", {
                                    className:
                                      "account-tokenList-title__reload",
                                    onClick: K,
                                    children: (0, k.jsx)(se, {}),
                                  }),
                                }),
                              ],
                            }),
                            (0, k.jsx)("div", {
                              className: "dollar mt5",
                              children: (0, ue.nO)(J, _),
                            }),
                          ],
                        }),
                        (0, k.jsx)("div", {
                          className: "account-tokenList-actions-btns",
                          children:
                            null !== n && void 0 !== n && n.isMobile
                              ? (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)(de.A, {
                                      children: (0, k.jsx)(a.Ay, {
                                        onClick: () => Q(null),
                                        children: i.Ru._({ id: "zPGNJm" }),
                                      }),
                                    }),
                                    (0, k.jsx)(de.A, {
                                      children: (0, k.jsx)(a.Ay, {
                                        onClick: () => {
                                          D("receive");
                                        },
                                        children: i.Ru._({ id: "kj3M8S" }),
                                      }),
                                    }),
                                    (0, k.jsx)(de.A, {
                                      children: (0, k.jsx)(a.Ay, {
                                        onClick: () => {
                                          D("send");
                                        },
                                        children: i.Ru._({ id: "OsyKSt" }),
                                      }),
                                    }),
                                  ],
                                })
                              : (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)(de.A, {
                                      children: (0, k.jsx)(a.Ay, {
                                        icon: (0, k.jsx)(z, {
                                          width: 22,
                                          height: 22,
                                        }),
                                        onClick: () => Q(null),
                                        children: i.Ru._({ id: "zPGNJm" }),
                                      }),
                                    }),
                                    (0, k.jsx)(de.A, {
                                      children: (0, k.jsx)(a.Ay, {
                                        icon: (0, k.jsx)(G, {
                                          width: 22,
                                          color: "#fff",
                                          height: 22,
                                        }),
                                        onClick: () => {
                                          D("receive");
                                        },
                                        children: i.Ru._({ id: "kj3M8S" }),
                                      }),
                                    }),
                                    (0, k.jsx)(de.A, {
                                      children: (0, k.jsx)(a.Ay, {
                                        icon: (0, k.jsx)(X, {
                                          width: 22,
                                          height: 22,
                                        }),
                                        onClick: () => {
                                          D("send");
                                        },
                                        children: i.Ru._({ id: "OsyKSt" }),
                                      }),
                                    }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    (0, k.jsx)(o.A, {
                      spinning: H,
                      children: (0, k.jsx)(r.A, {
                        className: "table-light account-table",
                        loading:
                          !(null !== F && void 0 !== F && F.length) && !I,
                        scroll: { x: "max-content" },
                        showSorterTooltip: !1,
                        rowKey: "name",
                        columns: $,
                        dataSource: F || [],
                        pagination: !1,
                      }),
                    }),
                  ],
                }),
                (0, k.jsx)(R, {
                  isTransferShow: h,
                  setIsTransferShow: v,
                  detail: C,
                }),
                (0, k.jsx)(E, {
                  isAddressBookShow: j,
                  setIsAddressBookShow: p,
                }),
              ],
            }),
          ],
        });
      }
      const he = (0, t.memo)(me);
    },
  },
]);
