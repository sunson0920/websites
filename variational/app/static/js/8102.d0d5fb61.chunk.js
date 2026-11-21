"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [8102],
  {
    8102: (e, s, i) => {
      i.r(s), i.d(s, { default: () => q });
      var l = i(46941),
        t = i(37209),
        n = i(51477),
        a = i(20109),
        d = i(22233),
        r = i(76484),
        c = i(3080),
        o = i(1126),
        m = i(42296),
        x = i(57752),
        h = i(22416),
        u = i(47039),
        j = i(1217),
        v = i(70583),
        p = i(15928),
        g = i(800),
        y = i(99609),
        N = i(20863),
        f = i(85652),
        A = i(64211),
        b = (i(40678), i(60688)),
        C = i(71330),
        w = i(48708),
        k = (i(78660), i(88224)),
        R = (i(90364), i(65941), i(70481));
      function M(e) {
        let { setOpen: s } = e;
        const i = (0, x.A)(),
          [d, r] = ((0, p.wA)(), (0, n.useState)("All")),
          [c, o] = (0, n.useState)(""),
          [M, D] = (0, n.useState)("startTime"),
          [F, _] = (0, n.useState)("Desc"),
          I = (0, N.A)(c, { wait: 500 }),
          [S, T] = (0, n.useState)(100),
          [z, P] = (0, n.useState)(1),
          q = (0, m.W6)(),
          {
            nostrAccount: H,
            balanceList: Q,
            npubNostrAccount: W,
          } = (0, p.d4)((e) => {
            let { user: s } = e;
            return s;
          }),
          { tokenList: $ } = (0, p.d4)((e) => {
            let { market: s } = e;
            return s;
          }),
          {
            list: B,
            fetching: U,
            total: L,
            reexcuteQuery: V,
          } = ((0, n.useMemo)(
            () =>
              $.find((e) => {
                var s;
                return (
                  "USDT" ==
                  (null === e ||
                  void 0 === e ||
                  null === (s = e.name) ||
                  void 0 === s
                    ? void 0
                    : s.toUpperCase())
                );
              }),
            [$]
          ),
          (0, f.DZ)({
            tokenNameOrtokenAddress: I,
            type: d,
            count: S,
            page: z,
            owner: "My" == d ? H : "",
            orderBy: M + F,
          })),
          E =
            ((0, n.useCallback)(
              (e) => {
                q.push(`/${e}`);
              },
              [q]
            ),
            (0, n.useCallback)((e, s) => {
              P(e), T(s);
            }, [])),
          G = (0, n.useCallback)((e) => {
            o(e.target.value);
          }, []),
          O = (0, n.useCallback)((e, s) => {
            D(e), _(s);
          }, []),
          K = (0, n.useMemo)(
            () => [
              {
                title: t.Ru._({ id: "e0NrBM" }),
                dataIndex: "tokenName",
                render: (e, s) => {
                  const i = $.find((s) => {
                    var i;
                    return (
                      (null === s ||
                      void 0 === s ||
                      null === (i = s.name) ||
                      void 0 === i
                        ? void 0
                        : i.toUpperCase()) ==
                      (null === e || void 0 === e ? void 0 : e.toUpperCase())
                    );
                  });
                  return (0, R.jsxs)("span", {
                    className: "token-tag-box",
                    children: [
                      e,
                      (null === i || void 0 === i ? void 0 : i.assetTypeStr) &&
                        (0, R.jsx)("div", {
                          className: "token-name-tag",
                          children:
                            null === i || void 0 === i
                              ? void 0
                              : i.assetTypeStr,
                        }),
                    ],
                  });
                },
              },
              {
                title: t.Ru._({ id: "wNFmNE" }),
                dataIndex: "maxAmount",
                render: (e) => (0, g.qC)(e),
              },
              {
                title: t.Ru._({ id: "WHbjF2" }),
                dataIndex: "number",
                render: (e) => (e ? (0, g.qC)(e) : "--"),
              },
              {
                title: t.Ru._({ id: "EQQRc5" }),
                dataIndex: "singleAmount",
                render: (e, s) => (e ? `${(0, g.qC)(e)} ${s.tokenName}` : "--"),
              },
              {
                title: (0, R.jsx)("span", {
                  children: (0, R.jsx)(l.x6, { id: "VW4WBK" }),
                }),
                dataIndex: "mintFee",
                render: (e, s) =>
                  e ? `${(0, g.qC)(e)} ${s.mintFeeSymbol}` : "--",
              },
              {
                title: (0, R.jsxs)(R.Fragment, {
                  children: [
                    (0, R.jsx)("span", { children: t.Ru._({ id: "CP3D8G" }) }),
                    (0, R.jsxs)("span", {
                      style: {
                        display: "inline-flex",
                        flexDirection: "column",
                        marginLeft: "3px",
                      },
                      children: [
                        (0, R.jsx)(b.A, {
                          className:
                            "progress" == M && "Asc" == F && "color-yellow",
                          onClick: () => O("progress", "Asc"),
                          style: { height: "14px" },
                        }),
                        (0, R.jsx)(C.A, {
                          className:
                            "progress" == M && "Desc" == F && "color-yellow",
                          onClick: () => O("progress", "Desc"),
                          style: { height: "14px", marginTop: "-4px" },
                        }),
                      ],
                    }),
                  ],
                }),
                dataIndex: "receivedAmount",
                render: (e, s) =>
                  `${(0, g.yC)(
                    new y.A(e).div(s.maxAmount).times(100).toNumber(),
                    2,
                    "floor"
                  )}%`,
              },
              {
                title: (0, R.jsxs)(R.Fragment, {
                  children: [
                    (0, R.jsx)("span", { children: t.Ru._({ id: "MZHPuB" }) }),
                    (0, R.jsxs)("span", {
                      style: {
                        display: "inline-flex",
                        flexDirection: "column",
                        marginLeft: "3px",
                      },
                      children: [
                        (0, R.jsx)(b.A, {
                          className:
                            "minters" == M && "Asc" == F && "color-yellow",
                          onClick: () => O("minters", "Asc"),
                          style: { height: "14px" },
                        }),
                        (0, R.jsx)(C.A, {
                          className:
                            "minters" == M && "Desc" == F && "color-yellow",
                          onClick: () => O("minters", "Desc"),
                          style: { height: "14px", marginTop: "-4px" },
                        }),
                      ],
                    }),
                  ],
                }),
                dataIndex: "minters",
              },
              {
                title: t.Ru._({ id: "VFv2ZC" }),
                dataIndex: "endTime",
                render: (e) =>
                  (0, R.jsxs)("div", {
                    children: [
                      (0, R.jsx)("div", {
                        className: "f13",
                        children: (0, A.Nx)(e, "YYYY/MM/DD"),
                      }),
                      (0, R.jsx)("div", {
                        className: "f13",
                        children: (0, A.Nx)(e, "HH:mm:ss"),
                      }),
                    ],
                  }),
              },
              {
                title: "",
                dataIndex: "status",
                render: (e, s) =>
                  (0, R.jsxs)("div", {
                    children: [
                      (0, R.jsxs)("span", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        },
                        onClick: () =>
                          q.push(
                            `/ecosystem/lightning-starter/mint-detail/${s.id}`
                          ),
                        children: [
                          (0, R.jsx)(a.Ay, {
                            type: "primary",
                            size: "small",
                            disabled:
                              "INIT" !== s.status ||
                              s.maxAmount == s.receivedAmount ||
                              new Date(
                                (0, A.Nx)(
                                  null === s || void 0 === s
                                    ? void 0
                                    : s.endTime
                                )
                              ).getTime() < Date.now(),
                            children: t.Ru._({ id: "lyPpvz" }),
                          }),
                          (0, R.jsx)(w.A, {
                            style: {
                              marginLeft: "10px",
                              fontSize:
                                null !== i && void 0 !== i && i.isMobile
                                  ? "12px"
                                  : "16px",
                              cursor: "pointer",
                            },
                          }),
                        ],
                      }),
                      new Date(
                        (0, A.Nx)(
                          null === s || void 0 === s ? void 0 : s.startTime
                        )
                      ).getTime() > Date.now() &&
                        (0, R.jsx)("div", {
                          className: "mt5",
                          style: { textAlign: "right" },
                          children: `Start at ${(0, A.Nx)(
                            null === s || void 0 === s ? void 0 : s.startTime,
                            "MM/DD HH:mm"
                          )}`,
                        }),
                    ],
                  }),
              },
            ],
            [null === i || void 0 === i ? void 0 : i.isMobile, q, O, F, M, $]
          ),
          J = (0, n.useMemo)(
            () =>
              0 == (null === B || void 0 === B ? void 0 : B.length)
                ? (0, R.jsx)(k.A, {})
                : B.map((e) => {
                    const s = (0, g.yC)(
                      new y.A(
                        null === e || void 0 === e ? void 0 : e.receivedAmount
                      )
                        .div(null === e || void 0 === e ? void 0 : e.maxAmount)
                        .times(100)
                        .toNumber(),
                      2,
                      "floor"
                    );
                    return (0, R.jsxs)(
                      "div",
                      {
                        className: "h5-mint-list",
                        onClick: () =>
                          q.push(
                            `/ecosystem/lightning-starter/mint-detail/${e.id}`
                          ),
                        children: [
                          (0, R.jsxs)("div", {
                            className: "h5-mint-list-item",
                            children: [
                              (0, R.jsx)("div", {
                                className: "f16",
                                children: e.tokenName,
                              }),
                              (0, R.jsx)("div", {
                                className: "f12 color-dark",
                                children: `${(0, A.Nx)(
                                  e.startTime,
                                  "MM/DD HH:mm:ss"
                                )}~${(0, A.Nx)(e.endTime, "MM/DD HH:mm:ss")}`,
                              }),
                            ],
                          }),
                          (0, R.jsxs)("div", {
                            className: "h5-mint-list-item mint-left",
                            children: [
                              (0, R.jsxs)("div", {
                                className: "h5-mint-list-item-section",
                                children: [
                                  (0, R.jsx)("div", {
                                    className:
                                      "h5-mint-list-item-section-label",
                                    children: (0, R.jsx)(l.x6, {
                                      id: "wNFmNE",
                                    }),
                                  }),
                                  (0, R.jsx)("div", {
                                    children: (0, g.qC)(e.maxAmount),
                                  }),
                                  (0, R.jsx)("div", {
                                    className:
                                      "h5-mint-list-item-section-label",
                                    children: (0, R.jsx)(l.x6, {
                                      id: "VW4WBK",
                                    }),
                                  }),
                                  (0, R.jsx)("div", {
                                    children:
                                      null !== e && void 0 !== e && e.mintFee
                                        ? `${(0, g.qC)(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.mintFee
                                          )} ${
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.mintFeeSymbol
                                          }`
                                        : "--",
                                  }),
                                ],
                              }),
                              (0, R.jsxs)("div", {
                                className:
                                  "h5-mint-list-item-section mint-center",
                                children: [
                                  (0, R.jsx)("div", {
                                    className:
                                      "h5-mint-list-item-section-label",
                                    children: (0, R.jsx)(l.x6, {
                                      id: "WHbjF2",
                                    }),
                                  }),
                                  (0, R.jsx)("div", {
                                    children:
                                      null !== e && void 0 !== e && e.number
                                        ? (0, g.qC)(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.number
                                          )
                                        : "--",
                                  }),
                                  (0, R.jsx)("div", {
                                    className:
                                      "h5-mint-list-item-section-label",
                                    children: (0, R.jsx)(l.x6, {
                                      id: "CP3D8G",
                                    }),
                                  }),
                                  (0, R.jsx)("div", { children: `${s}%` }),
                                ],
                              }),
                              (0, R.jsxs)("div", {
                                className:
                                  "h5-mint-list-item-section mint-right",
                                children: [
                                  (0, R.jsx)("div", {
                                    className:
                                      "h5-mint-list-item-section-label",
                                    children: (0, R.jsx)(l.x6, {
                                      id: "EQQRc5",
                                    }),
                                  }),
                                  (0, R.jsx)("div", {
                                    children:
                                      null !== e &&
                                      void 0 !== e &&
                                      e.singleAmount
                                        ? `${(0, g.qC)(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.singleAmount
                                          )} ${
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.tokenName
                                          }`
                                        : "--",
                                  }),
                                  (0, R.jsx)("div", {
                                    className:
                                      "h5-mint-list-item-section-label",
                                    children: (0, R.jsx)(l.x6, {
                                      id: "MZHPuB",
                                    }),
                                  }),
                                  (0, R.jsx)("div", {
                                    children: (0, g.qC)(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.minters
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, R.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: "10px",
                              flexDirection: "column",
                            },
                            children: [
                              (0, R.jsx)("span", {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                },
                                children: (0, R.jsx)(a.Ay, {
                                  type: "primary",
                                  size: "small",
                                  style: { width: "140px" },
                                  disabled:
                                    "INIT" !== e.status ||
                                    e.maxAmount == e.receivedAmount ||
                                    new Date(
                                      (0, A.Nx)(
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.endTime
                                      )
                                    ).getTime() < Date.now(),
                                  children: t.Ru._({ id: "lyPpvz" }),
                                }),
                              }),
                              new Date(
                                (0, A.Nx)(
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.startTime
                                )
                              ).getTime() > Date.now() &&
                                (0, R.jsx)("div", {
                                  className: "mt5",
                                  children: t.Ru._({
                                    id: "Qm4Vr1",
                                    values: {
                                      0: (0, A.Nx)(
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.startTime,
                                        "MM/DD HH:mm"
                                      ),
                                    },
                                  }),
                                }),
                            ],
                          }),
                        ],
                      },
                      e.id
                    );
                  }),
            [q, B]
          );
        return (0, R.jsx)(R.Fragment, {
          children: (0, R.jsx)("div", {
            className: "launch-mint",
            children: (0, R.jsxs)("div", {
              className: "mint-list-content",
              children: [
                (0, R.jsxs)("div", {
                  className: "mint-list-tabs",
                  children: [
                    (0, R.jsx)("div", {
                      className: "mint-list-tabs-btns",
                      children:
                        null !== i && void 0 !== i && i.isMobile
                          ? (0, R.jsxs)("div", {
                              style: {
                                display: "flex",
                                overflowX: "auto",
                                justifyContent: "space-between",
                                width: "100%",
                              },
                              children: [
                                (0, R.jsxs)("span", {
                                  children: [
                                    (0, R.jsx)(a.Ay, {
                                      type: "All" == d ? "primary" : "default",
                                      style: t.Ru.locale.startsWith("zh")
                                        ? { padding: "0 16px" }
                                        : {},
                                      onClick: () => r("All"),
                                      children: t.Ru._({ id: "N40H+G" }),
                                    }),
                                    (0, R.jsx)(a.Ay, {
                                      type:
                                        "In-Progress" == d
                                          ? "primary"
                                          : "default",
                                      style: t.Ru.locale.startsWith("zh")
                                        ? { padding: "0 16px" }
                                        : {},
                                      onClick: () => r("In-Progress"),
                                      children: t.Ru._({ id: "J6n7sl" }),
                                    }),
                                    (0, R.jsx)(a.Ay, {
                                      type:
                                        "Completed" == d
                                          ? "primary"
                                          : "default",
                                      style: t.Ru.locale.startsWith("zh")
                                        ? { padding: "0 16px" }
                                        : {},
                                      onClick: () => r("Completed"),
                                      children: t.Ru._({ id: "qqWcBV" }),
                                    }),
                                  ],
                                }),
                                !1,
                              ],
                            })
                          : (0, R.jsxs)(R.Fragment, {
                              children: [
                                (0, R.jsx)(a.Ay, {
                                  type: "All" == d ? "primary" : "default",
                                  onClick: () => r("All"),
                                  children: t.Ru._({ id: "N40H+G" }),
                                }),
                                (0, R.jsx)(a.Ay, {
                                  type:
                                    "In-Progress" == d ? "primary" : "default",
                                  onClick: () => r("In-Progress"),
                                  children: t.Ru._({ id: "J6n7sl" }),
                                }),
                                (0, R.jsx)(a.Ay, {
                                  type:
                                    "Completed" == d ? "primary" : "default",
                                  onClick: () => r("Completed"),
                                  children: t.Ru._({ id: "qqWcBV" }),
                                }),
                                (0, R.jsx)(h.A, {
                                  onChange: G,
                                  style: {
                                    width: "350px",
                                    maxWidth: "100%",
                                    marginLeft: "20px",
                                  },
                                  placeholder: t.Ru._({ id: "hRC7RQ" }),
                                }),
                              ],
                            }),
                    }),
                    (null === i || void 0 === i ? void 0 : i.isMobile) &&
                      (0, R.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                          gap: "6px",
                        },
                        children: [
                          (0, R.jsx)(h.A, {
                            onChange: G,
                            style: { flex: 1, marginTop: 0 },
                            placeholder: t.Ru._({ id: "hRC7RQ" }),
                          }),
                          !1,
                        ],
                      }),
                    !1,
                  ],
                }),
                "My" != d || U || (null !== B && void 0 !== B && B.length)
                  ? null !== i && void 0 !== i && i.isMobile
                    ? (0, R.jsxs)(R.Fragment, {
                        children: [
                          J,
                          (0, R.jsx)("div", {
                            className: "center mt20 mb20",
                            children: (0, R.jsx)(v.A, {
                              current: z,
                              pageSize: S,
                              total: L,
                              onChange: E,
                            }),
                          }),
                        ],
                      })
                    : (0, R.jsx)(j.A, {
                        className: "table-light",
                        loading: U,
                        showSorterTooltip: !1,
                        rowKey: "id",
                        scroll: { x: "max-content" },
                        columns: K,
                        dataSource: B || [],
                        pagination: {
                          current: z,
                          total: L,
                          pageSize: S,
                          position: ["bottomCenter"],
                          onChange: (e, s) => {
                            E(e, s);
                          },
                        },
                      })
                  : (0, R.jsx)("div", {
                      className: "my-empty",
                      children: (0, R.jsx)(u.A, {
                        image: u.A.PRESENTED_IMAGE_SIMPLE,
                        imageStyle: { color: "#fff" },
                        description: (0, R.jsxs)(R.Fragment, {
                          children: [
                            (0, R.jsx)("div", {
                              className: "color-base",
                              children: (0, R.jsx)(l.x6, { id: "RwSAC1" }),
                            }),
                            (0, R.jsx)("div", {
                              className: "mt5 color-base",
                              children: (0, R.jsx)(l.x6, { id: "0CX/rF" }),
                            }),
                          ],
                        }),
                      }),
                    }),
              ],
            }),
          }),
        });
      }
      const D = (0, n.memo)(M);
      var F = i(20050),
        _ = i(40822),
        I = i(25124),
        S = i(34469),
        T = i(57672),
        z = i(38754),
        P = i(9145);
      function q() {
        const e = (0, x.A)(),
          s = (0, m.W6)(),
          [i, h] = (0, n.useState)(!1),
          [u, j] = (0, n.useState)(!1),
          [v, p] = (0, n.useState)(!1),
          [g, y] = (0, n.useState)(1),
          N = (0, n.useCallback)(() => {
            h(!1), j(!1), p(!1);
          }, []);
        return (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsxs)("div", {
              className: "lightning-starter",
              children: [
                (0, R.jsxs)("div", {
                  className: "lightning-starter-head",
                  children: [
                    (0, R.jsx)("div", {
                      className: "lightning-starter-head-title",
                      children: (0, R.jsx)(l.x6, {
                        id: "f7beP1",
                        components: { 0: (0, R.jsx)("br", {}) },
                      }),
                    }),
                    (0, R.jsxs)("div", {
                      className: "lightning-starter-head-tags-box",
                      children: [
                        (0, R.jsxs)("div", {
                          className: "lightning-starter-head-tags",
                          children: [
                            (0, R.jsx)("div", {
                              className: "lightning-starter-head-tags-item",
                              children: (0, R.jsx)(l.x6, { id: "F7dRcr" }),
                            }),
                            (0, R.jsx)("div", {
                              className: "lightning-starter-head-tags-item",
                              children: (0, R.jsx)(l.x6, { id: "sQyiWm" }),
                            }),
                            (0, R.jsx)("div", {
                              className: "lightning-starter-head-tags-item",
                              children: (0, R.jsx)(l.x6, { id: "cKeMKy" }),
                            }),
                          ],
                        }),
                        !1 && (0, R.jsxs)("div", {
                          className: "lightning-starter-head-more",
                          onClick: () =>
                            window.open("https://docs.aifioft.pro"),
                          children: [
                            (0, R.jsx)("span", {
                              children: (0, R.jsx)(l.x6, { id: "zwWKhA" }),
                            }),
                            (0, R.jsx)("img", { src: F.A, alt: "" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, R.jsxs)("div", {
                  className: "lightning-starter-campaigns",
                  children: [
                    (0, R.jsx)("div", {
                      className: "lightning-starter-campaigns-subtitle",
                      children: (0, R.jsxs)("span", {
                        className:
                          "lightning-starter-campaigns-subtitle-text color-yellow",
                        children: [
                          (0, R.jsx)(l.x6, { id: "iHtclg" }),
                          " -",
                          " ",
                          (0, R.jsx)("span", {
                            className: "color-light",
                            children: (0, R.jsx)(l.x6, { id: "nrM61m" }),
                          }),
                        ],
                      }),
                    }),
                    (0, R.jsxs)("div", {
                      className: "lightning-starter-campaigns-banner",
                      children: [
                        (0, R.jsx)("img", {
                          className: "banner-bot-line",
                          src: null !== e && void 0 !== e && e.isMobile ? P : S,
                          alt: "",
                        }),
                        (0, R.jsxs)("div", {
                          className:
                            "lightning-starter-campaigns-banner-content",
                          children: [
                            (0, R.jsxs)("div", {
                              className: "content-left",
                              children: [
                                (0, R.jsx)("img", {
                                  className: "content-logo",
                                  src:
                                    null !== e && void 0 !== e && e.isMobile
                                      ? z
                                      : I,
                                  alt: "",
                                }),
                                (0, R.jsxs)("div", {
                                  className: "content-title",
                                  children: [
                                    (0, R.jsxs)("div", {
                                      className: "b",
                                      children: [
                                        "Astra ",
                                        (0, R.jsx)("span", {
                                          style: { color: "#caff32" },
                                          children: "$PAY",
                                        }),
                                      ],
                                    }),
                                    (0, R.jsx)("div", {
                                      className: "content-desc",
                                      children: (0, R.jsx)(l.x6, {
                                        id: "ibj4qO",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, R.jsxs)("div", {
                              className: "content-right",
                              children: [
                                (0, R.jsx)("img", {
                                  className: "content-arrow",
                                  src:
                                    null !== e && void 0 !== e && e.isMobile
                                      ? T
                                      : _,
                                  alt: "",
                                }),
                                (0, R.jsx)(a.Ay, {
                                  className: "btn-participate",
                                  onClick: () =>
                                    s.push(
                                      "/ecosystem/lightning-starter/mint-detail/1746065259759"
                                    ),
                                  children: (0, R.jsx)(l.x6, { id: "GMkcBB" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, R.jsx)(D, { setOpen: p }),
              ],
            }),
            (0, R.jsx)(d.A, {
              className: "base-modal activity-modal",
              open: i,
              width: "440px",
              title: t.Ru._({ id: "nRVFPr" }),
              zIndex: 1002,
              footer: (0, R.jsx)(R.Fragment, {
                children: (0, R.jsx)(a.Ay, {
                  type: "primary",
                  size: "middle",
                  style: { width: "120px", marginTop: "10px" },
                  onClick: () => {
                    if (1 == g) {
                      if (null !== e && void 0 !== e && e.isMobile)
                        return void r.Ay.info(t.Ru._({ id: "8hO3Nb" }));
                      s.push("/ecosystem/lightning-starter/mint-create");
                    } else h(!1);
                  },
                  children:
                    1 == g
                      ? t.Ru._({ id: "hXzOVo" })
                      : t.Ru._({ id: "aP3N/0" }),
                }),
              }),
              destroyOnClose: !0,
              onCancel: () => {
                N();
              },
              children: (0, R.jsx)(c.Ay.Group, {
                onChange: (e) => {
                  console.log("radio checked", e.target.value),
                    y(e.target.value);
                },
                value: g,
                children: (0, R.jsxs)(o.A, {
                  direction: "vertical",
                  children: [
                    (0, R.jsx)(c.Ay, {
                      value: 1,
                      children: (0, R.jsxs)("div", {
                        children: [
                          (0, R.jsx)("div", {
                            className: "color-light",
                            children: (0, R.jsx)(l.x6, { id: "iHtclg" }),
                          }),
                          (0, R.jsx)("div", {
                            className: "color-base f12",
                            children: (0, R.jsx)(l.x6, { id: "iofGE9" }),
                          }),
                        ],
                      }),
                    }),
                    (0, R.jsx)(c.Ay, {
                      value: 2,
                      children: (0, R.jsxs)("div", {
                        children: [
                          (0, R.jsx)("div", {
                            className: "color-light",
                            children: (0, R.jsx)(l.x6, { id: "XblXVL" }),
                          }),
                          (0, R.jsx)("div", {
                            className: "color-base f12",
                            children: (0, R.jsx)(l.x6, { id: "qxYQtV" }),
                          }),
                          (0, R.jsx)("div", {
                            className: "color-base f12",
                            children: (0, R.jsx)(l.x6, {
                              id: "OQOEti",
                              components: {
                                0: (0, R.jsx)("a", {
                                  href: "https://docs.google.com/forms/d/e/1FAIpQLSfA0s0MJ9FraUNB8fJRl9rob94Q3cpiPnazbGUezAuzUNqF_g/viewform",
                                  target: "_blank",
                                }),
                              },
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, R.jsxs)(d.A, {
              className: "base-modal activity-modal",
              open: u,
              width: "440px",
              title: t.Ru._({ id: "BuXlgo" }),
              zIndex: 1002,
              footer: (0, R.jsx)(R.Fragment, {
                children: (0, R.jsx)(a.Ay, {
                  type: "primary",
                  className: "mt10",
                  onClick: () => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfA0s0MJ9FraUNB8fJRl9rob94Q3cpiPnazbGUezAuzUNqF_g/viewform"
                    );
                  },
                  children: (0, R.jsx)(l.x6, { id: "DB8zMK" }),
                }),
              }),
              destroyOnClose: !0,
              onCancel: () => {
                N();
              },
              children: [
                (0, R.jsx)("div", {
                  className: "f16 mt10",
                  style: { textDecoration: "underline" },
                  children: (0, R.jsx)(l.x6, { id: "XblXVL" }),
                }),
                (0, R.jsx)("div", {
                  className: "mt10",
                  children: (0, R.jsx)(l.x6, {
                    id: "MKEm34",
                    components: {
                      0: (0, R.jsx)("a", {
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSfA0s0MJ9FraUNB8fJRl9rob94Q3cpiPnazbGUezAuzUNqF_g/viewform",
                        target: "_blank",
                      }),
                    },
                  }),
                }),
              ],
            }),
            (0, R.jsxs)(d.A, {
              className: "base-modal activity-modal",
              open: v,
              width: "440px",
              title: t.Ru._({ id: "DLlAgf" }),
              zIndex: 1002,
              footer: (0, R.jsx)(R.Fragment, {
                children: (0, R.jsx)(a.Ay, {
                  type: "primary",
                  className: "mt10",
                  onClick: () => {
                    s.push("/ecosystem/lightning-starter/mint-create");
                  },
                  children: (0, R.jsx)(l.x6, { id: "xGVfLh" }),
                }),
              }),
              destroyOnClose: !0,
              onCancel: () => {
                N();
              },
              children: [
                (0, R.jsx)("div", {
                  className: "f16 mt20",
                  style: { textDecoration: "underline" },
                  children: (0, R.jsx)(l.x6, { id: "l43fwQ" }),
                }),
                (0, R.jsx)("div", {
                  className: "mt10",
                  children: (0, R.jsx)(l.x6, { id: "ehppmh" }),
                }),
                (0, R.jsx)("div", {
                  className: "mt10",
                  children: (0, R.jsx)(l.x6, { id: "k2FASy" }),
                }),
                (0, R.jsxs)("div", {
                  children: [
                    (0, R.jsx)(l.x6, { id: "zwWKhA" }),
                    ":",
                    " ",
                    (0, R.jsx)("a", {
                      href: "https://forms.gle/mb8T9gyurMUVohFp8",
                      target: "_blank",
                      style: { textDecoration: "underline" },
                      children: "https://forms.gle/mb8T9gyurMUVohFp8",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
