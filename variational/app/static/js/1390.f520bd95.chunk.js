"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [1390],
  {
    31390: (e, l, s) => {
      s.r(l), s.d(l, { default: () => V });
      var i = s(37209),
        d = s(51477),
        t = s(86275),
        a = s(44063),
        n = s(42296),
        r = s(75612),
        o = s(29942),
        c = s.n(o),
        u = s(42337),
        m = s(9413),
        x = s(15585),
        h = s(30415),
        v = s(94867),
        p = s(88636),
        j = s(22416),
        A = s(20109),
        b = s(1217),
        k = s(17876),
        N = s(23018),
        f = s(66759),
        _ = s(44352),
        y = s(800),
        C = s(15928),
        g = s(35188),
        R = s(99609),
        I = s(70481);
      function w(e) {
        var l, s, t, a, n;
        let { detail: r, onClose: o, open: c = !1 } = e;
        const { tokenList: u } = (0, C.d4)((e) => {
            let { market: l } = e;
            return l;
          }),
          m = (0, d.useMemo)(
            () =>
              u.find(
                (e) => e.name == (null === r || void 0 === r ? void 0 : r.token)
              ),
            [null === r || void 0 === r ? void 0 : r.token, u]
          ),
          x = [
            { value: "", label: "All" },
            { value: "deposit", label: "Deposit" },
            { value: "withdraw", label: "Withdraw" },
            { value: "approve", label: "Approve" },
            { value: "transfer", label: "Transfer" },
            { value: "transferFrom", label: "Transfer From" },
            { value: "openPro", label: "Open Pro" },
            { value: "closePro", label: "Close Pro" },
            { value: "deleteAddressBook", label: "Delete AddressBook" },
            { value: "addressBookAdd", label: "Add AddressBook" },
          ],
          h = (0, d.useMemo)(() => {
            let e, l;
            switch (null === r || void 0 === r ? void 0 : r.status) {
              case 0:
                (e = "color-green"), (l = "Success");
                break;
              case 1:
                (e = "color-red"), (l = "Failed");
                break;
              default:
                (e = ""), (l = "");
            }
            return "Success" !== l
              ? (0, I.jsx)(v.A, {
                  color: "#6f6e84",
                  title: null === r || void 0 === r ? void 0 : r.error,
                  children: (0, I.jsx)("span", {
                    className: e,
                    children:
                      l ||
                      (null === r || void 0 === r ? void 0 : r.status) ||
                      "--",
                  }),
                })
              : (0, I.jsx)("span", {
                  className: e,
                  children:
                    l ||
                    (null === r || void 0 === r ? void 0 : r.status) ||
                    "--",
                });
          }, [
            null === r || void 0 === r ? void 0 : r.error,
            null === r || void 0 === r ? void 0 : r.status,
          ]);
        return (0, I.jsx)(_.A, {
          className: "explore-detail-drawer",
          title: i.Ru._({ id: "rRDi3Y" }),
          placement: "right",
          onClose: o,
          open: c,
          children: (0, I.jsxs)("div", {
            className: "explore-detail-list",
            children: [
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "aZJLAR" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      null !== r && void 0 !== r && r.eventId
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 6,
                            children: g.Qe.noteEncode(
                              null === r || void 0 === r ? void 0 : r.eventId
                            ),
                          })
                        : "--",
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "LhMjLm" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      null !== r && void 0 !== r && r.createAt
                        ? k
                            .unix(
                              null === r || void 0 === r ? void 0 : r.createAt
                            )
                            .format("YYYY-MM-DD HH:mm:ss")
                        : "--",
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "TP9/K5" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      (null === r || void 0 === r ? void 0 : r.token) || "--",
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "+zy2Nq" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      (null ===
                        (l = x.find(
                          (e) =>
                            e.value ==
                            (null === r || void 0 === r ? void 0 : r.type)
                        )) || void 0 === l
                        ? void 0
                        : l.label) ||
                      (null === r || void 0 === r ? void 0 : r.type) ||
                      "--",
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "2ELp0L" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    title: null === r || void 0 === r ? void 0 : r.eventContent,
                    children:
                      null !== r &&
                      void 0 !== r &&
                      r.eventContent &&
                      (null === r ||
                      void 0 === r ||
                      null === (s = r.eventContent) ||
                      void 0 === s
                        ? void 0
                        : s.length) > 20
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 8,
                            children:
                              (null === r || void 0 === r
                                ? void 0
                                : r.eventContent) || "--",
                          })
                        : null === r || void 0 === r
                        ? void 0
                        : r.eventContent,
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "cwpln1" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    title:
                      null === r || void 0 === r ? void 0 : r.plaintextContent,
                    children:
                      null !== r &&
                      void 0 !== r &&
                      r.plaintextContent &&
                      (null === r ||
                      void 0 === r ||
                      null === (t = r.plaintextContent) ||
                      void 0 === t
                        ? void 0
                        : t.length) > 20
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 8,
                            children:
                              (null === r || void 0 === r
                                ? void 0
                                : r.plaintextContent) || "--",
                          })
                        : null === r || void 0 === r
                        ? void 0
                        : r.plaintextContent,
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "Du6bPw" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      (null === r || void 0 === r ? void 0 : r.senderAddress) &&
                      (0, I.jsx)(N.A, {
                        suffixCount: 6,
                        children:
                          g.Qe.npubEncode(
                            null === r || void 0 === r
                              ? void 0
                              : r.senderAddress
                          ) || "--",
                      }),
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "uAQUqI" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children: h,
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "hehnjM" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      null !== r && void 0 !== r && r.amount
                        ? m && null !== r && void 0 !== r && r.token
                          ? (0, y.qC)(
                              (0, y.yC)(
                                (0, R.A)(
                                  null === r || void 0 === r ? void 0 : r.amount
                                )
                                  .div(
                                    null === m || void 0 === m
                                      ? void 0
                                      : m.decimals
                                  )
                                  .toNumber(),
                                null === m || void 0 === m ? void 0 : m.reserve
                              )
                            )
                          : (0, I.jsx)(f.A, {})
                        : "--",
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "ejVYRQ" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      null !== r && void 0 !== r && r.fromAddress
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 6,
                            children:
                              (null === r ||
                              void 0 === r ||
                              null === (a = r.fromAddress) ||
                              void 0 === a
                                ? void 0
                                : a.indexOf("npub")) < 0
                                ? g.Qe.npubEncode(
                                    null === r || void 0 === r
                                      ? void 0
                                      : r.fromAddress
                                  )
                                : null === r || void 0 === r
                                ? void 0
                                : r.fromAddress,
                          })
                        : "--",
                  }),
                ],
              }),
              (0, I.jsxs)("div", {
                className: "explore-detail-list-item",
                children: [
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__label",
                    children: i.Ru._({ id: "/jQctM" }),
                  }),
                  (0, I.jsx)("span", {
                    className: "explore-detail-list-item__text",
                    children:
                      null !== r && void 0 !== r && r.toAddress
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 6,
                            children:
                              (null === r ||
                              void 0 === r ||
                              null === (n = r.toAddress) ||
                              void 0 === n
                                ? void 0
                                : n.indexOf("npub")) < 0
                                ? g.Qe.npubEncode(
                                    null === r || void 0 === r
                                      ? void 0
                                      : r.toAddress
                                  )
                                : null === r || void 0 === r
                                ? void 0
                                : r.toAddress,
                          })
                        : "--",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var M = s(85652),
        S = s(35283),
        E = s(57752);
      const { Panel: P } = u.A;
      function F() {
        const e = (0, E.A)(),
          [l, s] = (0, d.useState)(null),
          [t, a] = (0, d.useState)(!1),
          { nostrAccount: n } = (0, C.d4)((e) => {
            let { user: l } = e;
            return l;
          }),
          [r] = m.A.useForm(),
          [o, u] = (0, d.useState)(1),
          [f, _] = (0, d.useState)(20),
          [P, F] = (0, d.useState)((0, S.JE)("type") || ""),
          [q, T] = (0, d.useState)(""),
          [Q, W] = (0, d.useState)(""),
          [D, B] = (0, d.useState)(""),
          [L, O] = (0, d.useState)((0, S.JE)("nostrAddress") || ""),
          { tokenList: J, marketTokenList: z } = (0, C.d4)((e) => {
            let { market: l } = e;
            return l;
          }),
          {
            list: Y,
            total: H,
            loading: U,
            run: K,
          } = (0, M.Ql)({
            count: f,
            page: o,
            type: P,
            token: q,
            eventId: D,
            address: Q,
          }),
          $ = [
            { value: "", label: "All Type" },
            { value: "approve", label: "Approve" },
            { value: "transfer", label: "Transfer" },
            { value: "transferFrom", label: "Transfer From" },
            { value: "openPro", label: "Open Pro" },
            { value: "closePro", label: "Close Pro" },
            { value: "deleteAddressBook", label: "Delete AddressBook" },
            { value: "addressBookAdd", label: "Add AddressBook" },
          ],
          V = (0, d.useMemo)(() => {
            var e = [{ label: "All Assets", value: "" }];
            return (
              J.forEach((l) => {
                e.push({ ...l, label: l.name, value: l.name });
              }),
              e
            );
          }, [J]),
          G = (0, d.useMemo)(
            () => [
              {
                title: i.Ru._({ id: "aZJLAR" }),
                dataIndex: "eventId",
                render: (e, l) =>
                  e
                    ? (0, I.jsx)(N.A, {
                        suffixCount: 6,
                        children: g.Qe.noteEncode(e),
                      })
                    : "--",
              },
              {
                title: i.Ru._({ id: "LhMjLm" }),
                dataIndex: "createAt",
                render: (e) =>
                  e ? k.unix(e).format("YYYY-MM-DD HH:mm:ss") : "--",
              },
              {
                title: i.Ru._({ id: "+zy2Nq" }),
                dataIndex: "type",
                render: (e) => {
                  const l = $.find((l) => l.value == e);
                  return null !== l && void 0 !== l && l.label
                    ? null === l || void 0 === l
                      ? void 0
                      : l.label
                    : e || "--";
                },
              },
              {
                title: i.Ru._({ id: "hehnjM" }),
                dataIndex: "amount",
                render(e, l) {
                  const s = J.find(
                      (e) =>
                        (null === e || void 0 === e ? void 0 : e.name) ===
                        (null === l || void 0 === l ? void 0 : l.token)
                    ),
                    i = Number(e)
                      ? (0, R.A)(e)
                          .div(null === s || void 0 === s ? void 0 : s.decimals)
                          .toNumber()
                      : 0;
                  return (0, I.jsx)(x.A, {
                    children: (0, I.jsx)(h.A, {
                      className: "f12 Poppins",
                      children: (0, y.qC)(i),
                    }),
                  });
                },
              },
              {
                title: i.Ru._({ id: "TP9/K5" }),
                dataIndex: "token",
                render: (e) =>
                  "--" == e
                    ? (0, I.jsx)(v.A, {
                        color: "#6f6e84",
                        title: i.Ru._({ id: "t/p0yo" }),
                        children: (0, I.jsx)("span", { children: e }),
                      })
                    : e || "--",
              },
              {
                title: i.Ru._({ id: "ejVYRQ" }),
                dataIndex: "fromAddress",
                render: (e) =>
                  (0, I.jsx)(x.A, {
                    children: (0, I.jsx)(h.A, {
                      className: "f12 Poppins",
                      children: e
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 6,
                            children: g.Qe.npubEncode(e),
                          })
                        : e || "--",
                    }),
                  }),
              },
              {
                title: i.Ru._({ id: "/jQctM" }),
                dataIndex: "toAddress",
                render: (e) =>
                  (0, I.jsx)(x.A, {
                    children: (0, I.jsx)(h.A, {
                      className: "f12 Poppins",
                      children: e
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 6,
                            children: g.Qe.npubEncode(e),
                          })
                        : e || "--",
                    }),
                  }),
              },
              {
                title: i.Ru._({ id: "uAQUqI" }),
                dataIndex: "status",
                render: (e, l) => {
                  let s, d;
                  switch (e) {
                    case 0:
                      (s = "color-green"), (d = i.Ru._({ id: "zzDlyQ" }));
                      break;
                    case 1:
                      (s = "color-red"), (d = i.Ru._({ id: "7Bj3x9" }));
                      break;
                    default:
                      (s = ""), (d = "");
                  }
                  return (0, I.jsx)(v.A, {
                    color: "#6f6e84",
                    title:
                      (null === l || void 0 === l ? void 0 : l.error) || "",
                    children: (0, I.jsx)("span", {
                      className: s,
                      children: d || e || "--",
                    }),
                  });
                },
              },
              {
                title: i.Ru._({ id: "rRDi3Y" }),
                dataIndex: "detail",
                render: (e, l) =>
                  (0, I.jsx)("span", {
                    className: "detail",
                    onClick: () => {
                      s({ ...l }), a(!0);
                    },
                    children: i.Ru._({ id: "rRDi3Y" }),
                  }),
              },
            ],
            [J, $]
          ),
          Z = (0, d.useCallback)((e, l) => {
            u(e), _(l);
          }, []),
          X = (0, d.useCallback)(() => {
            a(!1), s(null);
          }, []),
          ee = (0, d.useCallback)((e) => {
            u(1), T(e);
          }, []),
          le = (0, d.useCallback)((e) => {
            u(1), F(e);
          }, []),
          se = (0, d.useCallback)((e) => {
            const l = e.target.value.trim();
            u(1), O(l);
          }, []),
          ie = (0, d.useCallback)(() => {
            u(1), _(20), F(""), T(""), O(""), r.resetFields();
          }, [r]),
          de = (0, d.useMemo)(() => {
            const l = (0, I.jsxs)(m.A, {
              form: r,
              initialValues: {
                token: "",
                nostrAddress: (0, S.JE)("nostrAddress").trim(),
                type: (0, S.JE)("type") || "",
              },
              children: [
                (0, I.jsx)(m.A.Item, {
                  label: i.Ru._({ id: "+zy2Nq" }),
                  name: "type",
                  className: "token-item",
                  children: (0, I.jsx)(p.A, {
                    className: "select",
                    options: $,
                    style: { width: "100%", minWidth: "140px" },
                    onChange: le,
                  }),
                }),
                (0, I.jsx)(m.A.Item, {
                  label: i.Ru._({ id: "TP9/K5" }),
                  name: "token",
                  className: "token-item",
                  children: (0, I.jsx)(p.A, {
                    className: "select",
                    options: V,
                    style: { width: "100%", minWidth: "140px" },
                    onChange: ee,
                  }),
                }),
                (0, I.jsx)(m.A.Item, {
                  label: "",
                  name: "nostrAddress",
                  children: (0, I.jsx)(j.A, {
                    className: "input address",
                    style: { maxWidth: "100%", width: "240px" },
                    onChange: c().debounce(se, 600),
                    placeholder: i.Ru._({ id: "MwA9de" }),
                  }),
                }),
                (0, I.jsxs)(m.A.Item, {
                  className: "search-btn-item",
                  children: [
                    (0, I.jsx)(A.Ay, {
                      type: "primary",
                      onClick: K,
                      children: i.Ru._({ id: "A1taO8" }),
                    }),
                    (0, I.jsx)(A.Ay, {
                      type: "default",
                      onClick: ie,
                      children: i.Ru._({ id: "OfhWJH" }),
                    }),
                  ],
                }),
              ],
            });
            return null !== e && void 0 !== e && e.isMobile
              ? (0, I.jsxs)(m.A, {
                  form: r,
                  initialValues: {
                    token: "",
                    nostrAddress: (0, S.JE)("nostrAddress").trim(),
                    type: (0, S.JE)("type") || "",
                  },
                  children: [
                    (0, I.jsxs)(x.A, {
                      children: [
                        (0, I.jsx)(h.A, {
                          span: 12,
                          children: (0, I.jsx)(m.A.Item, {
                            label: "",
                            name: "type",
                            className: "token-item",
                            children: (0, I.jsx)(p.A, {
                              className: "select",
                              options: $,
                              style: { width: "100%" },
                              onChange: le,
                            }),
                          }),
                        }),
                        (0, I.jsx)(h.A, {
                          span: 12,
                          children: (0, I.jsx)(m.A.Item, {
                            label: "",
                            name: "token",
                            className: "token-item",
                            children: (0, I.jsx)(p.A, {
                              className: "select",
                              options: V,
                              style: { width: "100%" },
                              onChange: ee,
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, I.jsx)(m.A.Item, {
                      label: "",
                      name: "nostrAddress",
                      className: "mt5",
                      children: (0, I.jsx)(j.A, {
                        className: "input address",
                        style: { maxWidth: "100%", width: "100%" },
                        onChange: c().debounce(se, 600),
                        placeholder: i.Ru._({ id: "MwA9de" }),
                      }),
                    }),
                  ],
                })
              : l;
          }, [
            null === e || void 0 === e ? void 0 : e.isMobile,
            r,
            se,
            ie,
            ee,
            le,
            V,
            K,
            $,
          ]);
        (0, d.useEffect)(() => {
          if (L)
            if (L.indexOf("npub") > -1)
              try {
                const e = g.Qe.decode(L);
                W(null === e || void 0 === e ? void 0 : e.data), B("");
              } catch (e) {
                W(L), B("");
              }
            else
              try {
                const e = g.Qe.decode(L);
                W(""), B(null === e || void 0 === e ? void 0 : e.data);
              } catch (e) {
                W(""), B(L);
              }
          else W(""), B("");
        }, [L]);
        const te = (0, d.useMemo)(
          () =>
            Y.map((e, l) => {
              var s;
              return {
                ...e,
                id:
                  (null !==
                    (s = null === e || void 0 === e ? void 0 : e.eventId) &&
                  void 0 !== s
                    ? s
                    : "") + l,
              };
            }),
          [Y]
        );
        return (0, I.jsx)(I.Fragment, {
          children: (0, I.jsxs)("div", {
            className: "market-explore",
            children: [
              (0, I.jsx)("div", {
                className: "market-explore-filters",
                children: de,
              }),
              (0, I.jsx)(b.A, {
                className: "table-light explore-table",
                loading: U,
                scroll: { x: 1100 },
                showSorterTooltip: !1,
                rowKey: "id",
                columns: G,
                dataSource: te,
                pagination: {
                  current: o,
                  total: H,
                  pageSize: f,
                  position: ["bottomCenter"],
                  onChange: (e, l) => {
                    Z(e, l);
                  },
                },
              }),
              (0, I.jsx)(w, { detail: l, open: t, onClose: X }),
            ],
          }),
        });
      }
      var q = s(46941),
        T = s(47039),
        Q = s(64211),
        W = s(14889);
      const { Panel: D } = u.A;
      function B() {
        const e = (0, E.A)(),
          [l] = m.A.useForm(),
          [s, t] = (0, d.useState)(20),
          [a, n] = (0, d.useState)(1),
          [r, o] = (0, d.useState)("deposit"),
          [c, u] = (0, d.useState)(""),
          [v, j] = (0, d.useState)(-1),
          { tokenList: k } = (0, C.d4)((e) => {
            let { market: l } = e;
            return l;
          }),
          { nostrAccount: f } = (0, C.d4)((e) => {
            let { user: l } = e;
            return l;
          }),
          {
            list: _,
            total: w,
            run: P,
            fetching: F,
            refresh: D,
            cancel: B,
          } = (0, M.ty)({
            page: a - 1,
            count: s,
            type: r,
            tokenAddress: c,
            address: f,
            status: v,
          });
        (0, d.useEffect)(() => {
          f && P();
        }, [P, a, s, r, c, v, f]);
        const L = [
            { value: "deposit", label: i.Ru._({ id: "kj3M8S" }) },
            { value: "withdraw", label: i.Ru._({ id: "OsyKSt" }) },
          ],
          O = (0, d.useMemo)(
            () => [
              { value: -1, label: i.Ru._({ id: "qwHj/3" }) },
              { value: 9, label: i.Ru._({ id: "zzDlyQ" }) },
              { value: 99, label: i.Ru._({ id: "7Bj3x9" }) },
            ],
            []
          ),
          J = (0, d.useMemo)(
            () => [
              { value: -1, label: i.Ru._({ id: "qwHj/3" }) },
              { value: 0, label: i.Ru._({ id: "ZU3JQG" }) },
              { value: 1, label: i.Ru._({ id: "bl9677" }) },
              { value: 2, label: i.Ru._({ id: "LppKEH" }) },
              { value: 3, label: i.Ru._({ id: "EyE8E6" }) },
              { value: 9, label: i.Ru._({ id: "zzDlyQ" }) },
              { value: 99, label: i.Ru._({ id: "7Bj3x9" }) },
              { value: 100, label: i.Ru._({ id: "/BI0y9" }) },
            ],
            []
          ),
          z = (0, d.useMemo)(() => {
            var e = [{ label: i.Ru._({ id: "u3HiCr" }), value: "" }];
            return (
              k.forEach((l) => {
                e.push({ ...l, label: l.name, value: l.token });
              }),
              e
            );
          }, [k]),
          Y = (0, d.useMemo)(
            () => [
              {
                title: i.Ru._({ id: "LhMjLm" }),
                dataIndex: "createTime",
                render: (e) => (0, Q.Nx)(e),
              },
              {
                title: i.Ru._({ id: "+zy2Nq" }),
                dataIndex: "createTime",
                render: (e) => {
                  const l = L.find((e) => e.value == r);
                  return F ? "" : l.label;
                },
              },
              {
                title: i.Ru._({ id: "TP9/K5" }),
                dataIndex: "token",
                render: (e) => {
                  const l = k.find((l) => l.token == e);
                  return (null === l || void 0 === l ? void 0 : l.name) || "--";
                },
              },
              {
                title: i.Ru._({ id: "hehnjM" }),
                dataIndex: "amount",
                render: (e, l) => {
                  const s = k.find((e) => e.token == l.token);
                  return (0, I.jsx)("span", {
                    children: e
                      ? (0, y.qC)(
                          (0, R.A)(e)
                            .div(
                              null === s || void 0 === s ? void 0 : s.decimals
                            )
                            .toNumber()
                        )
                      : "--",
                  });
                },
              },
              {
                title: i.Ru._({ id: "OR475H" }),
                dataIndex: "assetType",
                render: (e, l) => (l.isMainnet ? "Mainnet" : "Plasma"),
              },
              {
                title: i.Ru._({ id: "Du6bPw" }),
                dataIndex: "fromAddress",
                render: (e) =>
                  (0, I.jsx)(x.A, {
                    children: (0, I.jsx)(h.A, {
                      className: "f12 Poppins",
                      children: e
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 6,
                            children: g.Qe.npubEncode(e),
                          })
                        : e || "--",
                    }),
                  }),
              },
              {
                title:
                  "deposit" == r
                    ? i.Ru._({ id: "IuMGvq" })
                    : (0, I.jsxs)(I.Fragment, {
                        children: [
                          (0, I.jsx)(q.x6, { id: "IuMGvq" }),
                          " / Txid",
                        ],
                      }),
                dataIndex: "fromAddress",
                render(e, l) {
                  if ("deposit" == r) {
                    let e =
                      (null === l || void 0 === l ? void 0 : l.invoice) || "--";
                    return (0, I.jsx)(x.A, {
                      children: (0, I.jsx)(h.A, {
                        className: "f12 Poppins",
                        children:
                          "--" !== e
                            ? (0, I.jsx)(N.A, { suffixCount: 6, children: e })
                            : e,
                      }),
                    });
                  }
                  return (0, I.jsxs)(I.Fragment, {
                    children: [
                      (0, I.jsx)(x.A, {
                        children: (0, I.jsx)(h.A, {
                          className: "f12 Poppins",
                          children:
                            null !== l && void 0 !== l && l.toAddress
                              ? (0, I.jsx)(N.A, {
                                  suffixCount: 6,
                                  children:
                                    null === l || void 0 === l
                                      ? void 0
                                      : l.toAddress,
                                })
                              : "--",
                        }),
                      }),
                      (null === l || void 0 === l ? void 0 : l.withdrawTx) &&
                        0 !=
                          (null === l || void 0 === l
                            ? void 0
                            : l.withdrawTx) &&
                        (0, I.jsx)(x.A, {
                          children: (0, I.jsx)(h.A, {
                            className: "f12 Poppins",
                            children: (0, I.jsx)("a", {
                              href:
                                "https://mempool.space/tx/" +
                                (null === l || void 0 === l
                                  ? void 0
                                  : l.withdrawTx),
                              target: "_blank",
                              children: (0, I.jsx)(N.A, {
                                suffixCount: 6,
                                children:
                                  null === l || void 0 === l
                                    ? void 0
                                    : l.withdrawTx,
                              }),
                            }),
                          }),
                        }),
                    ],
                  });
                },
              },
              {
                title: i.Ru._({ id: "uAQUqI" }),
                dataIndex: "status",
                render: (e, l) => {
                  if (F) return "";
                  if ("deposit" == r) {
                    let l, s;
                    switch (e) {
                      case 0:
                        s = (0, I.jsx)(q.x6, { id: "depositInitial" });
                        break;
                      case 1:
                        s = (0, I.jsx)(q.x6, { id: "depositCreated" });
                        break;
                      case 2:
                        s = (0, I.jsx)(q.x6, { id: "depositConfirming" });
                        break;
                      case 3:
                        s = (0, I.jsx)(q.x6, { id: "depositReceived" });
                        break;
                      case 9:
                        (l = "color-green"),
                          (s = (0, I.jsx)(q.x6, { id: "depositSuccess" }));
                        break;
                      case 98:
                        (l = "color-yellow"),
                          (s = (0, I.jsx)(q.x6, { id: "depositExpired" }));
                        break;
                      case 99:
                        (l = "color-red"),
                          (s = (0, I.jsx)(q.x6, { id: "depositFailed" }));
                        break;
                      default:
                        (l = ""), (s = "");
                    }
                    return (0, I.jsx)("span", {
                      className: l,
                      children: s || e || "--",
                    });
                  }
                  {
                    let l, s;
                    switch (e) {
                      case 0:
                        s = i.Ru._({ id: "ZU3JQG" });
                        break;
                      case 1:
                        s = i.Ru._({ id: "bl9677" });
                        break;
                      case 2:
                        s = i.Ru._({ id: "LppKEH" });
                        break;
                      case 3:
                        s = i.Ru._({ id: "EyE8E6" });
                        break;
                      case 9:
                        (l = "color-green"), (s = i.Ru._({ id: "zzDlyQ" }));
                        break;
                      case 99:
                        (l = "color-red"), (s = i.Ru._({ id: "7Bj3x9" }));
                        break;
                      case 100:
                        (l = "color-yellow"), (s = i.Ru._({ id: "/BI0y9" }));
                        break;
                      default:
                        (l = ""), (s = "");
                    }
                    return (0, I.jsx)("span", {
                      className: l,
                      children: s || e || "--",
                    });
                  }
                },
              },
            ],
            [F, k, r, L]
          ),
          H = (0, d.useCallback)((e, l) => {
            n(e), t(l);
          }, []),
          U = (0, d.useCallback)(
            (e) => {
              f && P();
            },
            [f, P]
          ),
          K = (0, d.useCallback)(() => {
            l.resetFields(), o("deposit"), u(""), j(-1), H(1, 100);
          }, [l, H]),
          $ = (0, d.useCallback)(
            (e) => {
              o(e), j(-1), l.setFieldValue("status", -1), n(1);
            },
            [l]
          ),
          V = (0, d.useCallback)((e) => {
            u(e), n(1);
          }, []),
          G = (0, d.useCallback)((e) => {
            j(e), n(1);
          }, []),
          Z = (0, d.useMemo)(() => {
            const s = (0, I.jsxs)(m.A, {
              onFinish: U,
              form: l,
              initialValues: {
                type: "deposit",
                token: "",
                status: -1,
                nostrAddress: (0, S.JE)("nostrAddress").trim(),
              },
              children: [
                (0, I.jsx)(m.A.Item, {
                  label: i.Ru._({ id: "+zy2Nq" }),
                  name: "type",
                  className: "token-item",
                  children: (0, I.jsx)(p.A, {
                    className: "select",
                    options: L,
                    style: { width: "100%", minWidth: "160px" },
                    onChange: $,
                  }),
                }),
                (0, I.jsx)(m.A.Item, {
                  label: i.Ru._({ id: "TP9/K5" }),
                  name: "token",
                  className: "token-item",
                  children: (0, I.jsx)(p.A, {
                    className: "select",
                    options: z,
                    style: { width: "100%", minWidth: "160px" },
                    onChange: V,
                  }),
                }),
                (0, I.jsx)(m.A.Item, {
                  label: i.Ru._({ id: "uAQUqI" }),
                  name: "status",
                  className: "token-item",
                  children: (0, I.jsx)(p.A, {
                    className: "select",
                    options: "deposit" == r ? O : J,
                    style: { width: "100%", minWidth: "160px" },
                    onChange: G,
                  }),
                }),
                !(null !== e && void 0 !== e && e.isMobile) &&
                  (0, I.jsxs)(m.A.Item, {
                    className: "search-btn-item",
                    children: [
                      (0, I.jsx)(A.Ay, {
                        htmlType: "submit",
                        type: "primary",
                        disabled: !f,
                        children: i.Ru._({ id: "A1taO8" }),
                      }),
                      (0, I.jsx)(A.Ay, {
                        type: "default",
                        onClick: K,
                        disabled: !f,
                        children: i.Ru._({ id: "OfhWJH" }),
                      }),
                    ],
                  }),
              ],
            });
            return null !== e && void 0 !== e && e.isMobile
              ? (0, I.jsx)(m.A, {
                  onFinish: U,
                  form: l,
                  initialValues: {
                    type: "deposit",
                    token: "",
                    status: -1,
                    nostrAddress: (0, S.JE)("nostrAddress").trim(),
                  },
                  children: (0, I.jsxs)(x.A, {
                    children: [
                      (0, I.jsx)(h.A, {
                        span: 8,
                        children: (0, I.jsx)(m.A.Item, {
                          label: "",
                          name: "type",
                          className: "token-item",
                          children: (0, I.jsx)(p.A, {
                            className: "select",
                            options: L,
                            style: { width: "100%" },
                            onChange: $,
                          }),
                        }),
                      }),
                      (0, I.jsx)(h.A, {
                        span: 8,
                        children: (0, I.jsx)(m.A.Item, {
                          label: "",
                          name: "token",
                          className: "token-item",
                          children: (0, I.jsx)(p.A, {
                            className: "select",
                            options: z,
                            style: { width: "100%" },
                            onChange: V,
                          }),
                        }),
                      }),
                      (0, I.jsx)(h.A, {
                        span: 8,
                        children: (0, I.jsx)(m.A.Item, {
                          label: "",
                          name: "status",
                          className: "token-item",
                          children: (0, I.jsx)(p.A, {
                            className: "select",
                            options: "deposit" == r ? O : J,
                            style: { width: "100%" },
                            onChange: G,
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : s;
          }, [
            O,
            null === e || void 0 === e ? void 0 : e.isMobile,
            l,
            K,
            z,
            f,
            U,
            J,
            G,
            V,
            r,
            $,
            L,
          ]);
        return (0, I.jsx)(I.Fragment, {
          children: (0, I.jsxs)("div", {
            className: "market-explore",
            children: [
              (0, I.jsx)("div", {
                className: "market-explore-filters",
                children: Z,
              }),
              f
                ? (0, I.jsx)(b.A, {
                    className: "table-light explore-table",
                    loading: F,
                    scroll: { x: 850 },
                    showSorterTooltip: !1,
                    rowKey: "id",
                    columns: Y,
                    dataSource: _,
                    pagination: {
                      current: a,
                      total: w,
                      pageSize: s,
                      position: ["bottomCenter"],
                      onChange: (e, l) => {
                        H(e, l);
                      },
                    },
                  })
                : (0, I.jsx)(I.Fragment, {
                    children: (0, I.jsx)(T.A, {
                      image: T.A.PRESENTED_IMAGE_SIMPLE,
                      imageStyle: { color: "#fff" },
                      className: "funding-records-nologin",
                      description: (0, I.jsxs)(I.Fragment, {
                        children: [
                          (0, I.jsx)("div", {
                            className: "color-dark f16 mb20",
                            children: (0, I.jsx)(q.x6, { id: "Uu2Weu" }),
                          }),
                          (0, I.jsx)("div", {
                            children: (0, I.jsx)(W.A, { className: "mt20" }),
                          }),
                        ],
                      }),
                    }),
                  }),
            ],
          }),
        });
      }
      var L = s(90364),
        O = s(54140);
      const { Panel: J } = u.A;
      function z() {
        const e = (0, E.A)(),
          [l] = m.A.useForm(),
          [s, t] = (0, d.useState)(1),
          [a, r] = (0, d.useState)(20),
          [o, u] = (0, d.useState)(""),
          [k, f] = (0, d.useState)(""),
          {
            tokenList: _,
            marketPriceTokenList: w,
            quote_pirce: P,
          } = (0, C.d4)((e) => {
            let { market: l } = e;
            return l;
          }),
          F = (0, n.W6)(),
          T = (0, d.useMemo)(
            () =>
              w.find(
                (e) => (null === e || void 0 === e ? void 0 : e.name) === o
              ),
            [w, o]
          ),
          Q = (0, d.useMemo)(
            () =>
              _.find(
                (e) => (null === e || void 0 === e ? void 0 : e.name) === O.UF
              ),
            [_]
          ),
          W = (0, d.useMemo)(
            () =>
              _.find(
                (e) => (null === e || void 0 === e ? void 0 : e.name) === o
              ),
            [o, _]
          ),
          D = (0, d.useMemo)(() => {
            const e = _.find(
              (e) => (null === e || void 0 === e ? void 0 : e.name) === o
            );
            return `https://mempool.space/tx/${
              null !== e && void 0 !== e && e.genesisPoint
                ? e.genesisPoint.split(":")[0]
                : ""
            }`;
          }, [o, _]),
          { summary: B } = (0, M.UW)({
            assetId: null === W || void 0 === W ? void 0 : W.token,
          }),
          {
            holderList: J,
            loading: z,
            run: Y,
          } = (0, M.W$)({
            count: a,
            page: s,
            assetId: null === W || void 0 === W ? void 0 : W.token,
            owner: k,
          }),
          H = (0, d.useMemo)(() => {
            var e = [];
            return (
              _.forEach((l) => {
                (null === l || void 0 === l ? void 0 : l.name) !== O.UF &&
                  e.push({ ...l, label: l.name, value: l.name });
              }),
              e
            );
          }, [_]),
          U = (0, d.useMemo)(
            () => [
              {
                title: i.Ru._({ id: "3awOET" }),
                dataIndex: "owner",
                render: (e, l, i) =>
                  (0, I.jsx)("span", {
                    style: { paddingLeft: "10px" },
                    children: (s - 1) * a + i + 1,
                  }),
              },
              {
                title: i.Ru._({ id: "Du6bPw" }),
                dataIndex: "owner",
                render(e) {
                  let l = "";
                  try {
                    l = g.Qe.npubEncode(e);
                  } catch (s) {
                    l = e;
                  }
                  return (0, I.jsx)(x.A, {
                    children: (0, I.jsx)(h.A, {
                      className: "f12 Poppins",
                      children: e
                        ? (0, I.jsx)(N.A, {
                            suffixCount: 4,
                            copyable: !0,
                            children: l,
                          })
                        : e || "--",
                    }),
                  });
                },
              },
              {
                title: i.Ru._({ id: "fsBGk0" }),
                dataIndex: "balance",
                render: (e, l) => {
                  const s = Number(e)
                      ? (0, R.A)(e)
                          .plus(l.lockBalance)
                          .div(null === W || void 0 === W ? void 0 : W.decimals)
                      : 0,
                    i = (0, y.yC)(
                      (0, R.A)(e)
                        .div(null === W || void 0 === W ? void 0 : W.decimals)
                        .toNumber(),
                      null === W || void 0 === W ? void 0 : W.reserve
                    ),
                    d = (0, y.yC)(
                      (0, R.A)(l.lockBalance)
                        .div(null === W || void 0 === W ? void 0 : W.decimals)
                        .toNumber(),
                      null === W || void 0 === W ? void 0 : W.reserve
                    );
                  return (0, I.jsx)("div", {
                    children: (0, I.jsx)(v.A, {
                      title: () =>
                        (0, I.jsxs)(I.Fragment, {
                          children: [
                            (0, I.jsxs)("div", {
                              children: [
                                (0, I.jsx)(q.x6, { id: "cN0qlW" }),
                                ":",
                                (0, y.qC)(i),
                              ],
                            }),
                            (0, I.jsxs)("div", {
                              children: [
                                (0, I.jsx)(q.x6, { id: "tO1aNB" }),
                                ":",
                                d,
                              ],
                            }),
                          ],
                        }),
                      children: (0, I.jsx)("div", {
                        className: "color-light",
                        children: (0, y.qC)(
                          (0, y.yC)(
                            s,
                            (null === W || void 0 === W ? void 0 : W.reserve) ||
                              0
                          )
                        ),
                      }),
                    }),
                  });
                },
              },
              {
                title: i.Ru._({ id: "wMHvYH" }),
                dataIndex: "balance",
                render: (e, l) => {
                  const s = Number(e)
                      ? (0, R.A)(e)
                          .plus(l.lockBalance)
                          .div(null === W || void 0 === W ? void 0 : W.decimals)
                      : 0,
                    i =
                      null !== T && void 0 !== T && T.dealPrice
                        ? (0, R.A)(
                            null === T || void 0 === T ? void 0 : T.dealPrice
                          )
                            .times(s)
                            .toNumber()
                        : "";
                  return (0, I.jsx)("div", {
                    children: (0, I.jsx)("div", {
                      className: "color-light",
                      children: (0, L.nO)(i, P),
                    }),
                  });
                },
              },
              {
                title: i.Ru._({ id: "/roQKz" }),
                dataIndex: "balance",
                render(e, l) {
                  const s = Number(e)
                      ? (0, R.A)(e)
                          .plus(l.lockBalance)
                          .div(null === W || void 0 === W ? void 0 : W.decimals)
                      : 0,
                    i =
                      null !== B && void 0 !== B && B.totalSupply
                        ? (0, R.A)(s)
                            .div(
                              (null === B || void 0 === B
                                ? void 0
                                : B.totalSupply) /
                                (null === W || void 0 === W
                                  ? void 0
                                  : W.decimals)
                            )
                            .times(100)
                            .toNumber()
                        : 0;
                  return (0, I.jsx)(x.A, {
                    children: (0, I.jsxs)(h.A, {
                      className: "f12 Poppins",
                      children: [i.toFixed(4), "%"],
                    }),
                  });
                },
              },
              {
                title: i.Ru._({ id: "0caMy7" }),
                dataIndex: "detail",
                render: (e, l) =>
                  (0, I.jsx)("span", {
                    className: "detail",
                    onClick: () => {
                      F.push(
                        `/explore/token-events?nostrAddress=${g.Qe.npubEncode(
                          l.owner
                        )}`
                      );
                    },
                    children: i.Ru._({ id: "rRDi3Y" }),
                  }),
              },
            ],
            [
              null === W || void 0 === W ? void 0 : W.decimals,
              null === W || void 0 === W ? void 0 : W.reserve,
              F,
              s,
              a,
              null === T || void 0 === T ? void 0 : T.dealPrice,
              P,
              null === B || void 0 === B ? void 0 : B.totalSupply,
            ]
          ),
          K = (0, d.useCallback)((e, l) => {
            t(e), r(l);
          }, []),
          $ = (0, d.useCallback)((e) => {
            t(1), u(e);
          }, []),
          V = (0, d.useCallback)((e) => {
            const l = e.target.value.trim();
            t(1);
            try {
              f(l ? g.Qe.decode(l).data : "");
            } catch (e) {
              f("");
            }
          }, []),
          G = (0, d.useCallback)(() => {
            var e;
            t(1), r(20), f("");
            const s = null === (e = H[0]) || void 0 === e ? void 0 : e.name;
            l.resetFields(), l.setFieldValue("token", s), u(s);
          }, [l, H]),
          Z = (0, d.useMemo)(() => {
            const s = (0, I.jsx)("div", {
              className: "market-holder-form",
              children: (0, I.jsxs)(m.A, {
                form: l,
                initialValues: {
                  token: o,
                  nostrAddress: (0, S.JE)("nostrAddress").trim(),
                  type: (0, S.JE)("type") || "",
                },
                children: [
                  (0, I.jsx)(m.A.Item, {
                    label: i.Ru._({ id: "bUUVED" }),
                    name: "token",
                    className: "token-item",
                    children: (0, I.jsx)(p.A, {
                      className: "select",
                      options: H,
                      value: o,
                      style: { width: "100%", minWidth: "140px" },
                      onChange: $,
                    }),
                  }),
                  (0, I.jsx)(m.A.Item, {
                    label: "",
                    name: "nostrAddress",
                    children: (0, I.jsx)(j.A, {
                      className: "input address",
                      style: { maxWidth: "100%", minWidth: "240px" },
                      onChange: c().debounce(V, 600),
                      placeholder: i.Ru._({ id: "qoUPnb" }),
                    }),
                  }),
                  (0, I.jsxs)(m.A.Item, {
                    className: "search-btn-item",
                    children: [
                      (0, I.jsx)(A.Ay, {
                        type: "primary",
                        onClick: Y,
                        children: i.Ru._({ id: "A1taO8" }),
                      }),
                      (0, I.jsx)(A.Ay, {
                        type: "default",
                        onClick: G,
                        children: i.Ru._({ id: "OfhWJH" }),
                      }),
                    ],
                  }),
                ],
              }),
            });
            return null !== e && void 0 !== e && e.isMobile
              ? (0, I.jsx)("div", {
                  className: "market-holder-form",
                  children: (0, I.jsx)(m.A, {
                    form: l,
                    initialValues: {
                      token: o,
                      nostrAddress: (0, S.JE)("nostrAddress").trim(),
                      type: (0, S.JE)("type") || "",
                    },
                    children: (0, I.jsxs)(x.A, {
                      children: [
                        (0, I.jsx)(h.A, {
                          span: 8,
                          children: (0, I.jsx)(m.A.Item, {
                            label: "",
                            name: "token",
                            className: "token-item",
                            children: (0, I.jsx)(p.A, {
                              className: "select",
                              options: H,
                              value: o,
                              style: { width: "100%" },
                              onChange: $,
                            }),
                          }),
                        }),
                        (0, I.jsx)(h.A, {
                          span: 16,
                          children: (0, I.jsx)(m.A.Item, {
                            label: "",
                            name: "nostrAddress",
                            children: (0, I.jsx)(j.A, {
                              className: "input address",
                              style: { maxWidth: "100%", minWidth: "100%" },
                              onChange: c().debounce(V, 600),
                              placeholder: i.Ru._({ id: "qoUPnb" }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : s;
          }, [
            null === e || void 0 === e ? void 0 : e.isMobile,
            l,
            V,
            G,
            $,
            H,
            Y,
            o,
          ]);
        (0, d.useEffect)(() => {
          var e;
          H.length > 0 &&
            (u(H[0].name),
            l.setFieldValue(
              "token",
              null === (e = H[0]) || void 0 === e ? void 0 : e.name
            ));
        }, [l, H]);
        const X = (0, d.useMemo)(() => {
          const e = w.find(
              (e) => (null === e || void 0 === e ? void 0 : e.name) == o
            ),
            l =
              null !== e && void 0 !== e && e.dealPrice && Q
                ? (0, R.A)(
                    null === e || void 0 === e ? void 0 : e.dealPrice
                  ).toNumber()
                : "--";
          return "--" != l
            ? (0, I.jsxs)(I.Fragment, {
                children: [
                  (0, I.jsxs)("span", {
                    className: "color-light",
                    children: [
                      (0, y.qC)(
                        (0, y.yC)(
                          l,
                          (null === Q || void 0 === Q ? void 0 : Q.reserve) || 0
                        )
                      ),
                      " ",
                      (0, I.jsx)("span", { children: O.UF }),
                      " ",
                    ],
                  }),
                  (0, I.jsx)("span", {
                    className: "color-dark",
                    children: (0, L.nO)(l, P),
                  }),
                ],
              })
            : "--";
        }, [w, P, Q, o]);
        return (0, I.jsx)(I.Fragment, {
          children: (0, I.jsxs)("div", {
            className: "market-explore",
            children: [
              (0, I.jsx)("div", {
                className: "market-explore-filters",
                children: Z,
              }),
              (0, I.jsxs)("div", {
                className: "market-holder-summary",
                children: [
                  (0, I.jsxs)("div", {
                    className: "market-holder-summary-item",
                    children: [
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-title",
                        children: (0, I.jsx)(q.x6, { id: "pzO3Xa" }),
                      }),
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-value",
                        children: (0, y.qC)(
                          (0, R.A)(
                            null === B || void 0 === B ? void 0 : B.totalSupply
                          )
                            .div(
                              null === W || void 0 === W ? void 0 : W.decimals
                            )
                            .toNumber() || 0
                        ),
                      }),
                    ],
                  }),
                  (0, I.jsxs)("div", {
                    className: "market-holder-summary-item",
                    children: [
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-title",
                        children: (0, I.jsx)(q.x6, { id: "a7u1N9" }),
                      }),
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-value",
                        children: X,
                      }),
                    ],
                  }),
                  (0, I.jsxs)("div", {
                    className: "market-holder-summary-item",
                    children: [
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-title",
                        children: (0, I.jsx)(q.x6, { id: "CI4Km7" }),
                      }),
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-value",
                        children: (0, y.qC)(
                          (null === B || void 0 === B
                            ? void 0
                            : B.holderCount) || 0
                        ),
                      }),
                    ],
                  }),
                  (0, I.jsxs)("div", {
                    className: "market-holder-summary-item",
                    children: [
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-title",
                        children: (0, I.jsx)(q.x6, { id: "d1SBbs" }),
                      }),
                      (0, I.jsx)("div", {
                        className: "market-holder-summary-item-value",
                        children: (0, I.jsx)("a", {
                          className: "link",
                          href: D,
                          target: "_blank",
                          children: (0, I.jsx)(N.A, {
                            suffixCount: 4,
                            children: D,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, I.jsx)(b.A, {
                className: "table-light explore-table",
                loading: z,
                scroll: { x: 750 },
                showSorterTooltip: !1,
                rowKey: "owner",
                columns: U,
                dataSource: J,
                pagination: {
                  current: s,
                  total: k
                    ? J.length
                    : null === B || void 0 === B
                    ? void 0
                    : B.holderCount,
                  pageSize: a,
                  position: ["bottomCenter"],
                  onChange: (e, l) => {
                    K(e, l);
                  },
                },
              }),
            ],
          }),
        });
      }
      const { Panel: Y } = u.A;
      function H() {
        const e = (0, E.A)(),
          [l] = m.A.useForm(),
          [s, t] = (0, d.useState)(1),
          [a, r] = (0, d.useState)(20),
          [o, u] = (0, d.useState)((0, S.JE)("nostrAddress")),
          {
            list: x,
            total: h,
            run: p,
            loading: k,
            refresh: f,
            cancel: _,
          } = ((0, n.W6)(), (0, M.vJ)({ page: s, count: a, npubOrEth: o })),
          C = (0, d.useMemo)(
            () => [
              {
                title: (0, I.jsx)(q.x6, { id: "HbIug0" }),
                dataIndex: "ethAddress",
                render: (e, l) =>
                  e ? (0, I.jsx)(N.A, { suffixCount: 5, children: e }) : "--",
              },
              {
                title: (0, I.jsx)(q.x6, { id: "mYGY3B" }),
                dataIndex: "createTime",
                render: (e, l) =>
                  (0, I.jsxs)(I.Fragment, {
                    children: [
                      (0, I.jsx)("div", {
                        children: (0, Q.Nx)(e, "YYYY-MM-DD"),
                      }),
                      (0, I.jsx)("div", { children: (0, Q.Nx)(e, "HH:mm:ss") }),
                    ],
                  }),
              },
              {
                title: (0, I.jsx)(q.x6, { id: "p4vkdC" }),
                dataIndex: "depositMoney",
                render: (e, l) =>
                  `${(0, y.qC)(
                    (0, y.yC)(
                      new R.A(e)
                        .dividedBy(
                          null === l || void 0 === l ? void 0 : l.decimals
                        )
                        .toNumber(),
                      (null === l || void 0 === l ? void 0 : l.reserve) || 0,
                      "floor"
                    )
                  )} ${
                    (null === l || void 0 === l
                      ? void 0
                      : l.depositTokenName) || ""
                  }`,
              },
              {
                title: (0, I.jsx)(q.x6, { id: "CD62KU" }),
                dataIndex: "npubAddress",
                render: (e, l) =>
                  e ? (0, I.jsx)(N.A, { suffixCount: 5, children: e }) : "--",
              },
              {
                title: (0, I.jsx)(q.x6, { id: "W8exxw" }),
                dataIndex: "bridgeToken",
                render: (e, l) =>
                  `${(0, y.qC)(e)} ${
                    (null === l || void 0 === l ? void 0 : l.bridgeTokenName) ||
                    ""
                  }`,
              },
              {
                title: (0, I.jsx)(q.x6, { id: "uAQUqI" }),
                dataIndex: "status",
                render: (e, l) =>
                  "BLOCK_PENDING" == e || "ASSETS_PENDING" == e
                    ? (0, I.jsx)("span", {
                        children: (0, I.jsx)(q.x6, { id: "UbRKMZ" }),
                      })
                    : "ASSETS_SUCCESS" == e
                    ? (0, I.jsx)("span", {
                        className: "color-green",
                        children: (0, I.jsx)(q.x6, { id: "zzDlyQ" }),
                      })
                    : "ASSETS_FAIL" == e
                    ? (0, I.jsx)(v.A, {
                        title:
                          (null === l || void 0 === l
                            ? void 0
                            : l.assetsCallEvent) || "",
                        children: (0, I.jsx)("span", {
                          className: "color-red",
                          children: (0, I.jsx)(q.x6, { id: "7Bj3x9" }),
                        }),
                      })
                    : void 0,
              },
            ],
            []
          ),
          g = (0, d.useCallback)((e, l) => {
            t(e), r(l);
          }, []),
          w =
            ((0, d.useCallback)((e) => {
              t(1), setToken(e);
            }, []),
            (0, d.useCallback)((e) => {
              const l = e.target.value.trim();
              t(1), u(l);
            }, [])),
          P = (0, d.useCallback)(() => {
            t(1), r(20), u(""), l.resetFields(), p();
          }, [l, p]),
          F = (0, d.useMemo)(
            () =>
              (0, I.jsx)("div", {
                className: "market-holder-form",
                children: (0, I.jsxs)(m.A, {
                  form: l,
                  initialValues: {
                    nostrAddress: (0, S.JE)("nostrAddress").trim(),
                  },
                  children: [
                    (0, I.jsx)(m.A.Item, {
                      label: "",
                      name: "nostrAddress",
                      children: (0, I.jsx)(j.A, {
                        className: "input address",
                        style: { maxWidth: "100%", minWidth: "280px" },
                        allowClear: !0,
                        onChange: c().debounce(w, 600),
                        placeholder: i.Ru._({ id: "F9qqaO" }),
                      }),
                    }),
                    !(null !== e && void 0 !== e && e.isMobile) &&
                      (0, I.jsx)(I.Fragment, {
                        children: (0, I.jsxs)(m.A.Item, {
                          className: "search-btn-item",
                          children: [
                            (0, I.jsx)(A.Ay, {
                              type: "primary",
                              onClick: () => {
                                p();
                              },
                              children: i.Ru._({ id: "A1taO8" }),
                            }),
                            (0, I.jsx)(A.Ay, {
                              type: "default",
                              onClick: P,
                              children: i.Ru._({ id: "OfhWJH" }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              }),
            [null === e || void 0 === e ? void 0 : e.isMobile, l, w, P, p]
          );
        return (0, I.jsx)(I.Fragment, {
          children: (0, I.jsxs)("div", {
            className: "market-holder",
            children: [
              (0, I.jsx)("div", {
                className: "market-explore-filters bridge-filter",
                children: F,
              }),
              (0, I.jsx)(b.A, {
                className: "table-light explore-table mt10",
                loading: k,
                scroll: { x: 850 },
                showSorterTooltip: !1,
                rowKey: "id",
                columns: C,
                dataSource: x,
                pagination: {
                  current: s,
                  total: h,
                  pageSize: a,
                  position: ["bottomCenter"],
                  onChange: (e, l) => {
                    g(e, l);
                  },
                },
              }),
            ],
          }),
        });
      }
      const { Header: U, Content: K } = t.A;
      function $(e, l, s, i) {
        return { label: e, key: l, icon: s, children: i };
      }
      function V() {
        const e = (0, E.A)(),
          [l, s] = (0, d.useState)([]),
          o = (0, n.W5)(),
          c = (0, n.W6)(),
          u = (0, d.useMemo)(
            () => [
              $(
                (0, I.jsx)(r.N_, {
                  to: `${o.url}/funding-records`,
                  children: i.Ru._({ id: "AghQvm" }),
                }),
                "fundingrecords"
              ),
              $(
                (0, I.jsx)(r.N_, {
                  to: `${o.url}/token-events`,
                  children: i.Ru._({ id: "Wv7jXN" }),
                }),
                "tokenevents"
              ),
              $(
                (0, I.jsx)(r.N_, {
                  to: `${o.url}/holding-list`,
                  children: i.Ru._({ id: "pxDf0X" }),
                }),
                "holdinglist"
              ),
            ],
            [o.url]
          ),
          m = (0, d.useMemo)(
            () => ({
              [o.url]: ["tokenevents"],
              [o.url + "/token-events"]: ["tokenevents"],
              [o.url + "/market-events"]: ["marketevents"],
              [o.url + "/funding-records"]: ["fundingrecords"],
              [o.url + "/holding-list"]: ["holdinglist"],
            }),
            [o.url]
          ),
          x = (0, d.useMemo)(
            () =>
              (0, I.jsxs)(n.dO, {
                children: [
                  (0, I.jsx)(n.qh, {
                    exact: !0,
                    path: "/explore",
                    children: (0, I.jsx)(n.rd, {
                      to: "/explore/funding-records",
                    }),
                  }),
                  (0, I.jsx)(n.qh, {
                    exact: !0,
                    path: `${o.url}/token-events`,
                    children: (0, I.jsx)(F, {}),
                  }),
                  (0, I.jsx)(n.qh, {
                    exact: !0,
                    path: `${o.url}/funding-records`,
                    children: (0, I.jsx)(B, {}),
                  }),
                  (0, I.jsx)(n.qh, {
                    exact: !0,
                    path: `${o.url}/holding-list`,
                    children: (0, I.jsx)(z, {}),
                  }),
                  (0, I.jsx)(n.qh, {
                    exact: !0,
                    path: `${o.url}/bridge-records`,
                    children: (0, I.jsx)(H, {}),
                  }),
                  (0, I.jsx)(n.qh, {
                    exact: !0,
                    path: "/explore/*",
                    children: (0, I.jsx)(n.rd, {
                      to: "/explore/funding-records",
                    }),
                  }),
                ],
              }),
            [o.url]
          );
        (0, d.useEffect)(() => {
          s(m[c.location.pathname]);
        }, [c.location.pathname, m]);
        const h = (0, d.useCallback)((e) => {
          let { key: l } = e;
          s(l);
        }, []);
        (0, d.useCallback)(() => {
          c.push(`${o.url}/markets`), s([]);
        }, [c, o.url]);
        return (0, I.jsx)("div", {
          className: "market-dashborad",
          children: (0, I.jsxs)(t.A, {
            children: [
              (0, I.jsx)("div", {
                className: "dashborad-sub-menu-box",
                children: (0, I.jsx)(a.A, {
                  theme: "dark",
                  mode:
                    null !== e && void 0 !== e && e.isMobile
                      ? "inline"
                      : "horizontal",
                  selectedKeys: l,
                  onClick: h,
                  items: u,
                  className: "dashborad-sub-menu",
                }),
              }),
              (0, I.jsx)(K, {
                className: "site-layout",
                children: (0, I.jsx)("div", {
                  className: "market-content",
                  children: x,
                }),
              }),
            ],
          }),
        });
      }
    },
  },
]);
