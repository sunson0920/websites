/*! For license information please see web3.chunks-cb2d071c.b69c7103.js.LICENSE.txt */
"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [8377],
  {
    539: (e, n, t) => {
      t.d(n, { F: () => d });
      var r = t(27635),
        i = t(80758),
        o = t(43787),
        s = t(23841),
        a = t(51477),
        c = t(79450);
      const l = (e) => "object" === typeof e && !Array.isArray(e);
      function d() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = (0, o.U)(e);
        return (function (e, n) {
          let t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : n,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : s.b;
          const i = (0, a.useRef)([]),
            o = (0, c.useSyncExternalStoreWithSelector)(
              e,
              n,
              t,
              (e) => e,
              (e, n) => {
                if (l(e) && l(n) && i.current.length) {
                  for (const t of i.current) if (!r(e[t], n[t])) return !1;
                  return !0;
                }
                return r(e, n);
              }
            );
          return (0, a.useMemo)(() => {
            if (l(o)) {
              const e = { ...o };
              let n = {};
              for (const [t, r] of Object.entries(e))
                n = {
                  ...n,
                  [t]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (i.current.includes(t) || i.current.push(t), r),
                  },
                };
              return Object.defineProperties(e, n), e;
            }
            return o;
          }, [o]);
        })(
          (e) => (0, r.F)(n, { onChange: e }),
          () => (0, i.s)(n)
        );
      }
    },
    2309: (e, n, t) => {
      t.d(n, { l: () => s });
      var r = t(23569),
        i = t(79333),
        o = t(80569);
      async function s(e, n) {
        const { account: t, connector: s, ...a } = n;
        let c;
        c =
          "object" === typeof t && "local" === t.type
            ? e.getClient()
            : await (0, o.r)(e, { account: t, connector: s });
        return (0, i.T)(
          c,
          r.l,
          "signMessage"
        )({ ...a, ...(t ? { account: t } : {}) });
      }
    },
    2418: (e, n, t) => {
      t.d(n, { x: () => s });
      var r = t(87162),
        i = t(44844);
      var o = t(43787);
      function s() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { mutation: n } = e,
          t = (function (e) {
            return {
              mutationFn: (n) => (0, i.E)(e, n),
              mutationKey: ["writeContract"],
            };
          })((0, o.U)(e)),
          { mutate: s, mutateAsync: a, ...c } = (0, r.n)({ ...n, ...t });
        return { ...c, writeContract: s, writeContractAsync: a };
      }
    },
    5043: (e, n, t) => {
      t.d(n, { h: () => o });
      var r = t(23841);
      let i = [];
      function o(e) {
        const n = e.chains;
        return (0, r.b)(i, n) ? i : ((i = n), n);
      }
    },
    10851: (e, n, t) => {
      t.d(n, { e: () => m });
      var r = t(54002),
        i = t(42821),
        o = t(39107),
        s = t(80312),
        a = t(13083),
        c = t(90995),
        l = t(42449),
        d = t(80888),
        u = t(70502),
        h = t(18085),
        f = t(26498),
        g = t(10719),
        p = t(59402),
        w = t(91073),
        v = t(29265),
        y = t(91125);
      class m extends y.Y {
        constructor(e) {
          let { wallet: n, getActiveChain: t, requestedChains: r } = e;
          super(),
            (this.chain = g.o.CHAIN.SOLANA),
            (this.provider = this),
            (this.wallet = n),
            (this.getActiveChain = t),
            (this.requestedChains = r),
            this.bindEvents();
        }
        get id() {
          const e = this.name;
          return p.L.ConnectorExplorerIds[e] || e;
        }
        get name() {
          return "Trust" === this.wallet.name
            ? "Trust Wallet"
            : this.wallet.name;
        }
        get type() {
          return "ANNOUNCED";
        }
        get explorerId() {
          return p.L.ConnectorExplorerIds[this.name];
        }
        get publicKey() {
          const e = this.getAccount(!1);
          if (e) return new l.J3(e.publicKey);
        }
        get imageUrl() {
          return this.wallet.icon;
        }
        get chains() {
          return this.wallet.chains
            .map((e) =>
              this.requestedChains.find((n) => {
                var t;
                return (
                  n.id === e ||
                  n.id ===
                    (null === (t = w.N[e]) || void 0 === t ? void 0 : t.id)
                );
              })
            )
            .filter(Boolean);
        }
        async connect() {
          const e = this.getWalletFeature(d.u);
          await e.connect();
          const n = this.getAccount(!0),
            t = new l.J3(n.publicKey);
          return this.emit("connect", t), n.address;
        }
        async disconnect() {
          const e = this.getWalletFeature(u.w);
          await e.disconnect(), this.emit("disconnect", void 0);
        }
        async signMessage(e) {
          const n = this.getWalletFeature(o.F),
            t = this.getAccount(!0),
            [i] = await n.signMessage({ message: e, account: t });
          if (!i) throw new r.K3("Empty result");
          return i.signature;
        }
        async signTransaction(e) {
          const n = this.getWalletFeature(s.q),
            t = this.getAccount(!0),
            o = this.serializeTransaction(e),
            [a] = await n.signTransaction({
              account: t,
              transaction: new Uint8Array(o),
              chain: this.getActiveChainName(),
            });
          if (!a) throw new r.z4("Empty result");
          return (
            this.emit("pendingTransaction", void 0),
            (0, i.Y)(e)
              ? l.Kt.deserialize(a.signedTransaction)
              : l.ZX.from(a.signedTransaction)
          );
        }
        async signAndSendTransaction(e, n) {
          const t = this.getWalletFeature(a.R),
            i = this.getAccount(!0),
            [o] = await t.signAndSendTransaction({
              account: i,
              transaction: new Uint8Array(this.serializeTransaction(e)),
              options: {
                ...n,
                preflightCommitment: (0, c.i)(
                  null === n || void 0 === n ? void 0 : n.preflightCommitment
                ),
              },
              chain: this.getActiveChainName(),
            });
          if (!o) throw new r.UF("Empty result");
          return (
            this.emit("pendingTransaction", void 0), f.A.encode(o.signature)
          );
        }
        async sendTransaction(e, n, t) {
          const r = await this.signTransaction(e);
          return await n.sendRawTransaction(r.serialize(), t);
        }
        async signAllTransactions(e) {
          const n = this.getWalletFeature(s.q),
            t = this.getAccount(!0),
            o = this.getActiveChainName();
          return (
            await n.signTransaction(
              ...e.map((e) => ({
                transaction: new Uint8Array(this.serializeTransaction(e)),
                account: t,
                chain: o,
              }))
            )
          ).map((n, t) => {
            let { signedTransaction: o } = n;
            const s = e[t];
            if (!s) throw new r.z4("Invalid transaction signature response");
            return (
              this.emit("pendingTransaction", void 0),
              (0, i.Y)(s) ? l.Kt.deserialize(o) : l.ZX.from(o)
            );
          });
        }
        async request(e) {
          return Promise.reject(new v.a("request"));
        }
        async getAccounts() {
          return Promise.resolve(
            this.wallet.accounts.map((e) => ({
              namespace: this.chain,
              address: e.address,
              type: "eoa",
            }))
          );
        }
        serializeTransaction(e) {
          return e.serialize({ verifySignatures: !1 });
        }
        getAccount(e) {
          const n = this.wallet.accounts[0];
          if (e && !n) throw new r.fk();
          return n;
        }
        getWalletFeature(e) {
          if (!(e in this.wallet.features)) throw new v.a(e);
          return this.wallet.features[e];
        }
        getActiveChainName() {
          const e = Object.entries(w.N).find((e) => {
            var n;
            let [, t] = e;
            return (
              t.id ===
              (null === (n = this.getActiveChain()) || void 0 === n
                ? void 0
                : n.id)
            );
          });
          if (!e) throw new Error("Invalid chain id");
          return e[0];
        }
        bindEvents() {
          this.getWalletFeature(h.j).on("change", (e) => {
            if (e.accounts) {
              const n = e.accounts[0];
              n && this.emit("accountsChanged", new l.J3(n.publicKey));
            }
          });
        }
      }
    },
    11403: (e, n, t) => {
      t.d(n, { e: () => a });
      var r = t(3403);
      function i(e) {
        const n = (function (e) {
          let n,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          try {
            n = e.getClient(t);
          } catch {}
          return n;
        })(
          e,
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        );
        return null === n || void 0 === n ? void 0 : n.extend(r.$);
      }
      var o = t(79450),
        s = t(43787);
      function a() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = (0, s.U)(e);
        return (0, o.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, n) {
              const { onChange: t } = n;
              return e.subscribe(() => i(e), t, {
                equalityFn: (e, n) =>
                  (null === e || void 0 === e ? void 0 : e.uid) ===
                  (null === n || void 0 === n ? void 0 : n.uid),
              });
            })(n, { onChange: e }),
          () => i(n, e),
          () => i(n, e),
          (e) => e,
          (e, n) =>
            (null === e || void 0 === e ? void 0 : e.uid) ===
            (null === n || void 0 === n ? void 0 : n.uid)
        );
      }
    },
    13084: (e, n, t) => {
      t.d(n, { D: () => we });
      var r = t(80758),
        i = t(90839),
        o = t(36206),
        s = t(79333);
      var a = t(27635),
        c = t(64956),
        l = t(2309),
        d = t(95463);
      var u = t(65921),
        h = t(80569);
      var f = t(94061),
        g = t(44844),
        p = t(58512);
      var w = t(87538);
      var v = t(97338),
        y = t(23841);
      let m = [];
      function b(e) {
        const n = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, y.b)(m, n)
          ? m
          : ((m = n), n);
      }
      var E = t(57595),
        C = t(79280),
        A = t(54996),
        I = t(33910),
        x = t(49440),
        k = t(25966),
        S = t(66089),
        N = t(35607);
      function T(e) {
        return "number" === typeof e ? e : "wei" === e ? 0 : Math.abs(N.pj[e]);
      }
      var U = t(17999),
        _ = t(38060);
      var P = t(85011);
      async function L(e, n) {
        const { allowFailure: t = !0, blockNumber: r, blockTag: i, ...o } = n,
          a = n.contracts;
        try {
          const n = {};
          for (const [t, r] of a.entries()) {
            var c, l;
            const i =
              null !== (c = r.chainId) && void 0 !== c ? c : e.state.chainId;
            n[i] || (n[i] = []),
              null === (l = n[i]) ||
                void 0 === l ||
                l.push({ contract: r, index: t });
          }
          const d = () =>
              Object.entries(n).map((n) => {
                let [a, c] = n;
                return (async function (e, n) {
                  const {
                      allowFailure: t = !0,
                      chainId: r,
                      contracts: i,
                      ...o
                    } = n,
                    a = e.getClient({ chainId: r });
                  return (0, s.T)(
                    a,
                    _.C,
                    "multicall"
                  )({ allowFailure: t, contracts: i, ...o });
                })(e, {
                  ...o,
                  allowFailure: t,
                  blockNumber: r,
                  blockTag: i,
                  chainId: Number.parseInt(a),
                  contracts: c.map((e) => {
                    let { contract: n } = e;
                    return n;
                  }),
                });
              }),
            u = (await Promise.all(d())).flat(),
            h = Object.values(n).flatMap((e) =>
              e.map((e) => {
                let { index: n } = e;
                return n;
              })
            );
          return u.reduce((e, n, t) => (e && (e[h[t]] = n), e), []);
        } catch (d) {
          if (d instanceof U.bG) throw d;
          const n = () =>
            a.map((n) => (0, P.J)(e, { ...n, blockNumber: r, blockTag: i }));
          return t
            ? (await Promise.allSettled(n())).map((e) =>
                "fulfilled" === e.status
                  ? { result: e.value, status: "success" }
                  : { error: e.reason, result: void 0, status: "failure" }
              )
            : await Promise.all(n());
        }
      }
      async function O(e, n) {
        const {
            balanceAddress: t,
            chainId: r,
            symbolType: i,
            tokenAddress: o,
            unit: s,
          } = n,
          a = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: o,
          },
          [c, l, d] = await L(e, {
            allowFailure: !1,
            contracts: [
              { ...a, functionName: "balanceOf", args: [t], chainId: r },
              { ...a, functionName: "decimals", chainId: r },
              { ...a, functionName: "symbol", chainId: r },
            ],
          });
        return {
          decimals: l,
          formatted: (0, k.J)(
            null !== c && void 0 !== c ? c : "0",
            T(null !== s && void 0 !== s ? s : l)
          ),
          symbol: d,
          value: c,
        };
      }
      var B = t(74913);
      var R = t(76577);
      var H = t(86455),
        M = t(7806),
        j = t(90773),
        D = t(39103),
        $ = t(10719),
        q = t(74364),
        K = t(8062),
        z = t(16733),
        W = t(21369),
        F = t(64066),
        V = t(60963),
        G = t(59402),
        J = t(75003),
        Z = t(52590),
        Y = t(85545),
        Q = t(72040),
        X = t(1960),
        ee = t(24026),
        ne = t(23871),
        te = t(62028),
        re = t(43437);
      function ie(e) {
        let n,
          t,
          r = [];
        function i(e) {
          return q.L.parseEvmChainId(e) || 1;
        }
        async function o() {
          var t;
          let o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const s =
            (n ||
              (n = re.v.getInstance({
                projectId: e.options.projectId,
                enableLogger: e.options.enableAuthLogger,
                onTimeout: () => {
                  ee.h.open(te.R.ALERT_ERRORS.SOCIALS_TIMEOUT, "error");
                },
              })),
            n);
          let a = o.chainId;
          if (o.isReconnecting) {
            var c;
            const n = q.L.parseEvmChainId(s.getLastUsedChainId() || ""),
              t = null === (c = e.chains) || void 0 === c ? void 0 : c[0].id;
            if (((a = n || t), !a))
              throw new Error("ChainId not found in provider");
          }
          const l =
              null === (t = ne.U.state.preferredAccountTypes) || void 0 === t
                ? void 0
                : t.eip155,
            {
              address: d,
              chainId: u,
              accounts: h,
            } = await s.connect({ chainId: a, preferredAccountType: l });
          r = (null === h || void 0 === h
            ? void 0
            : h.map((e) => e.address)) || [d];
          const f = i(u);
          return {
            accounts: r,
            account: d,
            chainId: f,
            chain: { id: f, unsuported: !1 },
          };
        }
        return (0, Y.U)((n) => ({
          id: $.o.CONNECTOR_ID.AUTH,
          name: $.o.CONNECTOR_NAMES.AUTH,
          type: "AUTH",
          chain: $.o.CHAIN.EVM,
          async connect() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (t) return t;
            t ||
              (t = new Promise((n) => {
                n(o(e));
              }));
            const n = await t;
            return (t = void 0), n;
          },
          async disconnect() {
            const e = await this.getProvider();
            await e.disconnect();
          },
          getAccounts() {
            var e;
            return null !== (e = r) && void 0 !== e && e.length
              ? (n.emitter.emit("change", { accounts: r }), Promise.resolve(r))
              : Promise.resolve([]);
          },
          async getProvider() {
            return (
              this.provider ||
                (this.provider = re.v.getInstance({
                  projectId: e.options.projectId,
                  enableLogger: e.options.enableAuthLogger,
                  onTimeout: () => {
                    ee.h.open(te.R.ALERT_ERRORS.SOCIALS_TIMEOUT, "error");
                  },
                })),
              Promise.resolve(this.provider)
            );
          },
          async getChainId() {
            const e = await this.getProvider(),
              { chainId: n } = await e.getChainId();
            return i(n);
          },
          async isAuthorized() {
            const e = await this.getProvider();
            return Promise.resolve(e.getLoginEmailUsed());
          },
          async switchChain(e) {
            let { chainId: t } = e;
            try {
              var i, o;
              const e = n.chains.find((e) => e.id === t);
              if (!e)
                throw new Q.ch(new Error("chain not found on connector."));
              const s = await this.getProvider(),
                a =
                  null === (i = ne.U.state.preferredAccountTypes) ||
                  void 0 === i
                    ? void 0
                    : i.eip155,
                c = await s.connect({ chainId: t, preferredAccountType: a });
              return (
                (r = (null === c ||
                void 0 === c ||
                null === (o = c.accounts) ||
                void 0 === o
                  ? void 0
                  : o.map((e) => e.address)) || [c.address]),
                n.emitter.emit("change", { chainId: Number(t), accounts: r }),
                e
              );
            } catch (s) {
              if (s instanceof Error) throw new Q.ch(s);
              throw s;
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : n.emitter.emit("change", { accounts: e.map(X.b) });
          },
          onChainChanged(e) {
            const t = Number(e);
            n.emitter.emit("change", { chainId: t });
          },
          async onDisconnect(e) {
            const n = await this.getProvider();
            await n.disconnect();
          },
        }));
      }
      var oe = t(90278),
        se = t(35827),
        ae = (t(99296), t(60713)),
        ce = t(63157),
        le = t(458);
      function de(e, n) {
        var t;
        const r = null === (t = e.isNewChainsStale) || void 0 === t || t;
        let i, o, s, a, c, l, d;
        return (0, Y.U)((e) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: de.type,
          async setup() {
            const e = await this.getProvider().catch(() => null);
            e &&
              (a || ((a = this.onConnect.bind(this)), e.on("connect", a)),
              l ||
                ((l = this.onSessionDelete.bind(this)),
                e.on("session_delete", l)));
          },
          async connect() {
            let { ...e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            try {
              var n;
              const t = ce.W.getCaipNetworks(),
                r = await this.getProvider();
              if (!r) throw new oe.N();
              c || ((c = this.onDisplayUri), r.on("display_uri", c));
              const i = await this.isChainsStale();
              r.session && i && (await r.disconnect());
              const u = le.H.state.universalProviderConfigOverride;
              if (!r.session || i) {
                const n = D.kl.createNamespaces(t, u);
                await r.connect({
                  optionalNamespaces: n,
                  ...("pairingTopic" in e
                    ? { pairingTopic: e.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(t.map((e) => Number(e.id)));
              }
              const h = await this.getAccounts(),
                f = await this.getChainId(),
                g =
                  null === (n = r.session) ||
                  void 0 === n ||
                  null === (n = n.namespaces) ||
                  void 0 === n ||
                  null === (n = n.eip155) ||
                  void 0 === n
                    ? void 0
                    : n.chains,
                p =
                  null === g || void 0 === g
                    ? void 0
                    : g.some((e) => Number(e.split(":")[1]) === f);
              let w = 1;
              p
                ? (w = f)
                : null !== g &&
                  void 0 !== g &&
                  g[0] &&
                  (w = Number(g[0].split(":")[1])),
                c && (r.removeListener("display_uri", c), (c = void 0)),
                a && (r.removeListener("connect", a), (a = void 0)),
                o ||
                  ((o = this.onAccountsChanged.bind(this)),
                  r.on("accountsChanged", o)),
                s ||
                  ((s = this.onChainChanged.bind(this)),
                  r.on("chainChanged", s)),
                d ||
                  ((d = this.onDisconnect.bind(this)), r.on("disconnect", d)),
                l ||
                  ((l = this.onSessionDelete.bind(this)),
                  r.on("session_delete", l));
              const v = null === u || void 0 === u ? void 0 : u.defaultChain;
              return (
                r.setDefaultChain(
                  null !== v && void 0 !== v ? v : `eip155:${w}`
                ),
                { accounts: h, chainId: w }
              );
            } catch (t) {
              if (
                /(user rejected|connection request reset)/i.test(
                  null === t || void 0 === t ? void 0 : t.message
                )
              )
                throw new Q.vx(t);
              throw t;
            }
          },
          async disconnect() {
            const e = await this.getProvider();
            try {
              await (null === e || void 0 === e ? void 0 : e.disconnect());
            } catch (n) {
              if (!/No matching key/i.test(n.message)) throw n;
            } finally {
              s &&
                (null === e ||
                  void 0 === e ||
                  e.removeListener("chainChanged", s),
                (s = void 0)),
                d &&
                  (null === e ||
                    void 0 === e ||
                    e.removeListener("disconnect", d),
                  (d = void 0)),
                a ||
                  ((a = this.onConnect.bind(this)),
                  null === e || void 0 === e || e.on("connect", a)),
                o &&
                  (null === e ||
                    void 0 === e ||
                    e.removeListener("accountsChanged", o),
                  (o = void 0)),
                l &&
                  (null === e ||
                    void 0 === e ||
                    e.removeListener("session_delete", l),
                  (l = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            var e, n, t;
            const r = await this.getProvider();
            if (
              null === r ||
              void 0 === r ||
              null === (e = r.session) ||
              void 0 === e ||
              !e.namespaces
            )
              return [];
            const i =
              null === r ||
              void 0 === r ||
              null === (n = r.session) ||
              void 0 === n ||
              null === (n = n.namespaces[$.o.CHAIN.EVM]) ||
              void 0 === n
                ? void 0
                : n.accounts;
            return null !==
              (t =
                null === i || void 0 === i
                  ? void 0
                  : i.map((e) => e.split(":")[2])) && void 0 !== t
              ? t
              : [];
          },
          async getProvider() {
            var e;
            let { chainId: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            var r;
            i ||
              ((i = await n.getUniversalProvider()),
              null === (r = i) ||
                void 0 === r ||
                r.events.setMaxListeners(Number.POSITIVE_INFINITY));
            const o = W.i.getActiveNamespace(),
              s =
                null === (e = n.getCaipNetwork()) || void 0 === e
                  ? void 0
                  : e.id;
            if (t && s !== t && o) {
              const e = W.i.getStoredActiveCaipNetworkId(),
                t = n.getCaipNetworks(o),
                r =
                  null === t || void 0 === t
                    ? void 0
                    : t.find((n) => n.id === e);
              var a;
              if (r && r.chainNamespace === $.o.CHAIN.EVM)
                await (null === (a = this.switchChain) || void 0 === a
                  ? void 0
                  : a.call(this, { chainId: Number(r.id) }));
            }
            return i;
          },
          async getChainId() {
            var e, t;
            const r =
              null === (e = n.getCaipNetwork($.o.CHAIN.EVM)) || void 0 === e
                ? void 0
                : e.id;
            if (r) return r;
            const i =
                null === (t = (await this.getProvider()).session) ||
                void 0 === t ||
                null === (t = t.namespaces[$.o.CHAIN.EVM]) ||
                void 0 === t ||
                null === (t = t.chains) ||
                void 0 === t
                  ? void 0
                  : t[0],
              o = ce.W.getCaipNetworks().find((e) => e.id === i);
            return null === o || void 0 === o ? void 0 : o.id;
          },
          async isAuthorized() {
            try {
              const [e, n] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              return (
                !(await this.isChainsStale()) ||
                !n.session ||
                (await n.disconnect().catch(() => {}), !1)
              );
            } catch {
              return !1;
            }
          },
          async switchChain(n) {
            let { addEthereumChainParameter: t, chainId: r } = n;
            const i = await this.getProvider();
            if (!i) throw new oe.N();
            const o = ce.W.getCaipNetworks().find((e) => e.id === r);
            if (!o) throw new Q.ch(new se.nk());
            try {
              await i.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: (0, ae.cK)(r) }],
              }),
                null !== o &&
                  void 0 !== o &&
                  o.caipNetworkId &&
                  i.setDefaultChain(
                    null === o || void 0 === o ? void 0 : o.caipNetworkId
                  ),
                e.emitter.emit("change", { chainId: Number(r) });
              const n = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...n, r]), { ...o, id: o.id };
            } catch (l) {
              const e = l;
              if (/(?:user rejected)/iu.test(e.message)) throw new Q.vx(e);
              try {
                var s;
                let e;
                var a, c;
                if (null !== t && void 0 !== t && t.blockExplorerUrls)
                  e = t.blockExplorerUrls;
                else
                  e =
                    null !== (a = o.blockExplorers) &&
                    void 0 !== a &&
                    a.default.url
                      ? [
                          null === (c = o.blockExplorers) || void 0 === c
                            ? void 0
                            : c.default.url,
                        ]
                      : [];
                const n =
                    (null === (s = o.rpcUrls) ||
                    void 0 === s ||
                    null === (s = s.chainDefault) ||
                    void 0 === s
                      ? void 0
                      : s.http) || [],
                  l = {
                    blockExplorerUrls: e,
                    chainId: (0, ae.cK)(r),
                    chainName: o.name,
                    iconUrls: null === t || void 0 === t ? void 0 : t.iconUrls,
                    nativeCurrency: o.nativeCurrency,
                    rpcUrls: n,
                  };
                await i.request({
                  method: "wallet_addEthereumChain",
                  params: [l],
                });
                const d = await this.getRequestedChainsIds();
                return (
                  this.setRequestedChainsIds([...d, r]), { ...o, id: o.id }
                );
              } catch (d) {
                throw new Q.vx(d);
              }
            }
          },
          onAccountsChanged(n) {
            0 === n.length
              ? this.onDisconnect()
              : e.emitter.emit("change", {
                  accounts: n.map((e) => (0, X.b)(e)),
                });
          },
          onChainChanged(n) {
            const t = Number(n);
            e.emitter.emit("change", { chainId: t });
          },
          onConnect(e) {
            this.setRequestedChainsIds(
              ce.W.getCaipNetworks().map((e) => Number(e.id))
            );
          },
          async onDisconnect(n) {
            this.setRequestedChainsIds([]), e.emitter.emit("disconnect");
            const t = await this.getProvider();
            o && (t.removeListener("accountsChanged", o), (o = void 0)),
              s && (t.removeListener("chainChanged", s), (s = void 0)),
              d && (t.removeListener("disconnect", d), (d = void 0)),
              l && (t.removeListener("session_delete", l), (l = void 0)),
              a || ((a = this.onConnect.bind(this)), t.on("connect", a));
          },
          onDisplayUri(n) {
            e.emitter.emit("message", { type: "display_uri", data: n });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds() {
            var e, n, t;
            if (
              null === (e = i) ||
              void 0 === e ||
              null === (e = e.session) ||
              void 0 === e ||
              !e.namespaces
            )
              return [];
            const r =
              null === (n = i) ||
              void 0 === n ||
              null === (n = n.session) ||
              void 0 === n ||
              null === (n = n.namespaces[$.o.CHAIN.EVM]) ||
              void 0 === n
                ? void 0
                : n.accounts;
            return null !==
              (t =
                null === r || void 0 === r
                  ? void 0
                  : r.map((e) => {
                      var n;
                      return Number.parseInt(
                        null !== (n = e.split(":")[1]) && void 0 !== n ? n : ""
                      );
                    })) && void 0 !== t
              ? t
              : [];
          },
          async getRequestedChainsIds() {
            var n, t;
            const r =
              null !==
                (n = await (null === (t = e.storage) || void 0 === t
                  ? void 0
                  : t.getItem(this.requestedChainsStorageKey))) && void 0 !== n
                ? n
                : [];
            return [...new Set(r)];
          },
          async isChainsStale() {
            if (!r) return !1;
            const n = e.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((e) => n.includes(e))) return !1;
            const i = await this.getRequestedChainsIds();
            return !n.every((e) => i.includes(Number(e)));
          },
          async setRequestedChainsIds(n) {
            var t;
            await (null === (t = e.storage) || void 0 === t
              ? void 0
              : t.setItem(this.requestedChainsStorageKey, n));
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      de.type = "walletConnect";
      var ue = t(59586),
        he = t(86992);
      const fe = (0, ue.BX)({ pendingTransactions: 0 }),
        ge = {
          state: fe,
          subscribeKey: (e, n) => (0, he.u$)(fe, e, n),
          increase(e) {
            fe[e] += 1;
          },
          decrease(e) {
            fe[e] -= 1;
          },
          reset(e) {
            fe[e] = 0;
          },
        };
      const pe = { enable: !1, pollingInterval: 3e4 };
      class we extends J.X {
        constructor(e) {
          var n;
          const t = V.R.extendCaipNetworks(e.networks, {
            projectId: e.projectId,
            customNetworkImageUrls: {},
            customRpcUrls: e.customRpcUrls,
          });
          super({
            projectId: e.projectId,
            adapterType: $.o.ADAPTER_TYPES.WAGMI,
            namespace: $.o.CHAIN.EVM,
          }),
            (this.balancePromises = {}),
            (this.pendingTransactionsFilter = {
              ...pe,
              ...(null !== (n = e.pendingTransactionsFilter) && void 0 !== n
                ? n
                : {}),
            }),
            this.createConfig({ ...e, networks: t }),
            this.setupWatchers();
        }
        async getAccounts(e) {
          var n;
          const t = this.getWagmiConnector(e.id);
          if (!t) return { accounts: [] };
          if (t.id === $.o.CONNECTOR_ID.AUTH) {
            const e = t.provider;
            if (!e.user) return { accounts: [] };
            const { address: n, accounts: r } = e.user;
            return Promise.resolve({
              accounts: (r || [{ address: n, type: "eoa" }]).map((e) =>
                z.w.createAccount("eip155", e.address, e.type)
              ),
            });
          }
          const { addresses: i, address: o } = (0, r.s)(this.wagmiConfig);
          return Promise.resolve({
            accounts:
              null === (n = i || [o]) || void 0 === n
                ? void 0
                : n.map((e) => z.w.createAccount("eip155", e || "", "eoa")),
          });
        }
        getWagmiConnector(e) {
          return this.wagmiConfig.connectors.find((n) => n.id === e);
        }
        createConfig(e) {
          var n;
          this.wagmiChains = e.networks.filter(
            (e) => e.chainNamespace === $.o.CHAIN.EVM
          );
          const t = {},
            r = [...(null !== (n = e.connectors) && void 0 !== n ? n : [])];
          this.wagmiChains.forEach((n) => {
            var r;
            const i =
                null === (r = e.transports) || void 0 === r ? void 0 : r[n.id],
              o = V.R.getCaipNetworkId(n);
            var s;
            i
              ? (t[n.id] = V.R.extendWagmiTransports(n, e.projectId, i))
              : (t[n.id] = V.R.getViemTransport(
                  n,
                  e.projectId,
                  null === (s = e.customRpcUrls) || void 0 === s ? void 0 : s[o]
                ));
          }),
            (this.wagmiConfig = (0, i.Z)({
              ...e,
              chains: this.wagmiChains,
              connectors: r,
              transports: t,
            }));
        }
        setupWatchPendingTransactions() {
          if (
            !this.pendingTransactionsFilter.enable ||
            this.unwatchPendingTransactions
          )
            return;
          this.unwatchPendingTransactions = (function (e, n) {
            const {
              syncConnectedChain: t = e._internal.syncConnectedChain,
              ...r
            } = n;
            let i;
            const a = (n) => {
                i && i();
                const t = e.getClient({ chainId: n }),
                  a = (0, s.T)(t, o.u, "watchPendingTransactions");
                return (i = a(r)), i;
              },
              c = a(n.chainId);
            let l;
            return (
              t &&
                !n.chainId &&
                (l = e.subscribe(
                  (e) => {
                    let { chainId: n } = e;
                    return n;
                  },
                  async (e) => a(e)
                )),
              () => {
                var e;
                null === c || void 0 === c || c(),
                  null === (e = l) || void 0 === e || e();
              }
            );
          })(this.wagmiConfig, {
            pollingInterval: this.pendingTransactionsFilter.pollingInterval,
            onError: () => {},
            onTransactions: () => {
              this.emit("pendingTransactions"),
                ge.increase("pendingTransactions");
            },
          });
          const e = ge.subscribeKey("pendingTransactions", (n) => {
            var t;
            n >= $.o.LIMITS.PENDING_TRANSACTIONS &&
              (null === (t = this.unwatchPendingTransactions) ||
                void 0 === t ||
                t.call(this),
              e());
          });
        }
        setupWatchers() {
          (0, a.F)(this.wagmiConfig, {
            onChange: (e, n) => {
              "disconnected" === e.status &&
                n.address &&
                this.emit("disconnect"),
                "connected" === e.status &&
                  ((e.address ===
                    (null === n || void 0 === n ? void 0 : n.address) &&
                    "connected" === n.status) ||
                    (this.setupWatchPendingTransactions(),
                    this.emit("accountChanged", {
                      address: e.address,
                      chainId: e.chainId,
                    })),
                  e.chainId !==
                    (null === n || void 0 === n ? void 0 : n.chainId) &&
                    this.emit("switchNetwork", {
                      address: e.address,
                      chainId: e.chainId,
                    }));
            },
          });
        }
        async addThirdPartyConnectors(e) {
          const n = [];
          if (!1 !== e.enableCoinbase)
            try {
              const { coinbaseWallet: c } = await Promise.all([
                t.e(41),
                t.e(3069),
                t.e(764),
                t.e(3416),
                t.e(4079),
                t.e(8377),
              ]).then(t.bind(t, 58941));
              var r, i, o, s, a;
              if (c)
                n.push(
                  c({
                    version: "4",
                    appName:
                      null !==
                        (r =
                          null === (i = e.metadata) || void 0 === i
                            ? void 0
                            : i.name) && void 0 !== r
                        ? r
                        : "Unknown",
                    appLogoUrl:
                      null !==
                        (o =
                          null === (s = e.metadata) || void 0 === s
                            ? void 0
                            : s.icons[0]) && void 0 !== o
                        ? o
                        : "Unknown",
                    preference:
                      null !== (a = e.coinbasePreference) && void 0 !== a
                        ? a
                        : "all",
                  })
                );
            } catch (c) {
              console.error("Failed to import Coinbase Wallet SDK:", c);
            }
          n.forEach((e) => {
            const n = this.wagmiConfig._internal.connectors.setup(e);
            this.wagmiConfig._internal.connectors.setState((e) => [...e, n]);
          });
        }
        addWagmiConnectors(e, n) {
          var t, r, i, o;
          const s = [];
          !1 !== e.enableWalletConnect && s.push(de(e, n)),
            !1 !== e.enableInjected && s.push((0, c.b)({ shimDisconnect: !0 }));
          const a =
              void 0 ===
              (null === (t = e.features) || void 0 === t ? void 0 : t.email)
                ? F.oU.DEFAULT_FEATURES.email
                : null === (r = e.features) || void 0 === r
                ? void 0
                : r.email,
            l =
              null !== (i = e.features) && void 0 !== i && i.socials
                ? (null === (o = e.features) ||
                  void 0 === o ||
                  null === (o = o.socials) ||
                  void 0 === o
                    ? void 0
                    : o.length) > 0
                : F.oU.DEFAULT_FEATURES.socials;
          (a || l) &&
            s.push(
              ie({
                chains: this.wagmiChains,
                options: {
                  projectId: e.projectId,
                  enableAuthLogger: e.enableAuthLogger,
                },
              })
            ),
            s.forEach((e) => {
              const n = this.wagmiConfig._internal.connectors.setup(e);
              this.wagmiConfig._internal.connectors.setState((e) => [...e, n]);
            });
        }
        async signMessage(e) {
          try {
            return {
              signature: await (0, l.l)(this.wagmiConfig, {
                message: e.message,
                account: e.address,
              }),
            };
          } catch (n) {
            throw new Error("WagmiAdapter:signMessage - Sign message failed");
          }
        }
        async sendTransaction(e) {
          const { chainId: n } = (0, r.s)(this.wagmiConfig),
            t = {
              account: e.address,
              to: e.to,
              value: e.value,
              gas: e.gas,
              gasPrice: e.gasPrice,
              data: e.data,
              chainId: n,
              type: "legacy",
              parameters: ["nonce"],
            };
          await (async function (e, n) {
            const { account: t, chainId: i, ...o } = n,
              a = null !== t && void 0 !== t ? t : (0, r.s)(e).address,
              c = e.getClient({ chainId: i });
            return (0, s.T)(
              c,
              d.ft,
              "prepareTransactionRequest"
            )({ ...o, ...(a ? { account: a } : {}) });
          })(this.wagmiConfig, t);
          const i = await (async function (e, n) {
            var t;
            const { account: r, chainId: i, connector: o, ...a } = n;
            let c;
            c =
              "object" === typeof r &&
              "local" === (null === r || void 0 === r ? void 0 : r.type)
                ? e.getClient({ chainId: i })
                : await (0, h.r)(e, {
                    account: null !== r && void 0 !== r ? r : void 0,
                    chainId: i,
                    connector: o,
                  });
            const l = (0, s.T)(c, u.v, "sendTransaction");
            return await l({
              ...a,
              ...(r ? { account: r } : {}),
              chain: i ? { id: i } : null,
              gas: null !== (t = a.gas) && void 0 !== t ? t : void 0,
            });
          })(this.wagmiConfig, t);
          return (
            await (0, f.n)(this.wagmiConfig, { hash: i, timeout: 25e3 }),
            { hash: i }
          );
        }
        async writeContract(e) {
          var n;
          const { caipNetwork: t, ...r } = e,
            i = Number(q.L.caipNetworkIdToNumber(t.caipNetworkId));
          return {
            hash: await (0, g.E)(this.wagmiConfig, {
              chain:
                null === (n = this.wagmiChains) || void 0 === n ? void 0 : n[i],
              chainId: i,
              address: r.tokenAddress,
              account: r.fromAddress,
              abi: r.abi,
              functionName: r.method,
              args: r.args,
              __mode: "prepared",
            }),
          };
        }
        async getEnsAddress(e) {
          const { name: n, caipNetwork: t } = e;
          try {
            if (!this.wagmiConfig)
              throw new Error(
                "networkControllerClient:getApprovedCaipNetworksData - wagmiConfig is undefined"
              );
            let e = !1,
              r = !1;
            return (
              (0, K.T)(n) && (r = (await D.kl.resolveReownName(n)) || !1),
              1 === t.id &&
                (e = await (function (e, n) {
                  const { chainId: t, ...r } = n,
                    i = e.getClient({ chainId: t });
                  return (0, s.T)(i, p.B, "getEnsAddress")(r);
                })(this.wagmiConfig, { name: (0, j.S)(n), chainId: t.id })),
              { address: e || r || !1 }
            );
          } catch {
            return { address: !1 };
          }
        }
        async estimateGas(e) {
          try {
            const n = await (async function (e, n) {
              const { chainId: t, connector: r, ...i } = n;
              let o;
              o = n.account
                ? n.account
                : (
                    await (0, h.r)(e, {
                      account: n.account,
                      chainId: t,
                      connector: r,
                    })
                  ).account;
              const a = e.getClient({ chainId: t });
              return (0, s.T)(a, w.Q, "estimateGas")({ ...i, account: o });
            })(this.wagmiConfig, {
              account: e.address,
              to: e.to,
              data: e.data,
              type: "legacy",
            });
            return { gas: n };
          } catch (n) {
            throw new Error("WagmiAdapter:estimateGas - error estimating gas");
          }
        }
        parseUnits(e) {
          return (0, M.X)(e.value, e.decimals);
        }
        formatUnits(e) {
          return (0, k.J)(e.value, e.decimals);
        }
        async addWagmiConnector(e, n) {
          var t, r, i, o;
          if (
            e.id === $.o.CONNECTOR_ID.AUTH ||
            e.id === $.o.CONNECTOR_ID.WALLET_CONNECT
          )
            return;
          const s = await e.getProvider().catch(() => {});
          this.addConnector({
            id: e.id,
            explorerId: G.L.ConnectorExplorerIds[e.id],
            imageUrl:
              null !==
                (t =
                  null === n ||
                  void 0 === n ||
                  null === (r = n.connectorImages) ||
                  void 0 === r
                    ? void 0
                    : r[e.id]) && void 0 !== t
                ? t
                : e.icon,
            name:
              null !== (i = G.L.ConnectorNamesMap[e.id]) && void 0 !== i
                ? i
                : e.name,
            imageId: G.L.ConnectorImageIds[e.id],
            type:
              null !== (o = G.L.ConnectorTypesMap[e.type]) && void 0 !== o
                ? o
                : "EXTERNAL",
            info: e.id === $.o.CONNECTOR_ID.INJECTED ? void 0 : { rdns: e.id },
            provider: s,
            chain: this.namespace,
            chains: [],
          });
        }
        async syncConnectors(e, n) {
          (0, v.O)(this.wagmiConfig, {
            onChange: (n) => n.forEach((n) => this.addWagmiConnector(n, e)),
          }),
            await Promise.all(
              this.wagmiConfig.connectors.map((n) =>
                this.addWagmiConnector(n, e)
              )
            ),
            this.addWagmiConnectors(e, n),
            await this.addThirdPartyConnectors(e);
        }
        async syncConnection(e) {
          const { id: n } = e,
            t = b(this.wagmiConfig).find((e) => e.connector.id === n),
            r = this.getWagmiConnector(n),
            i = await (null === r || void 0 === r ? void 0 : r.getProvider());
          return {
            chainId: Number(null === t || void 0 === t ? void 0 : t.chainId),
            address: null === t || void 0 === t ? void 0 : t.accounts[0],
            provider: i,
            type: null === t || void 0 === t ? void 0 : t.connector.type,
            id: null === t || void 0 === t ? void 0 : t.connector.id,
          };
        }
        async connectWalletConnect(e) {
          const n = this.getWalletConnectConnector();
          await n.authenticate();
          const t = this.getWagmiConnector("walletConnect");
          if (!t)
            throw new Error(
              "UniversalAdapter:connectWalletConnect - connector not found"
            );
          const r = await (0, E.N)(this.wagmiConfig, {
            connector: t,
            chainId: e ? Number(e) : void 0,
          });
          return (
            r.chainId !== Number(e) &&
              (await (0, C.S)(this.wagmiConfig, { chainId: r.chainId })),
            { clientId: await n.provider.client.core.crypto.getClientId() }
          );
        }
        async connect(e) {
          var n;
          const { id: t, provider: r, type: i, info: o, chainId: s } = e,
            a = this.getWagmiConnector(t);
          if (!a)
            throw new Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          var c;
          r &&
            o &&
            a.id === $.o.CONNECTOR_ID.EIP6963 &&
            (null === (c = a.setEip6963Wallet) ||
              void 0 === c ||
              c.call(a, { provider: r, info: o }));
          if (
            a.uid ===
            (null === (n = this.wagmiConfig) ||
            void 0 === n ||
            null === (n = n.state) ||
            void 0 === n
              ? void 0
              : n.current)
          ) {
            var l;
            const e =
              null === (l = this.wagmiConfig.state) ||
              void 0 === l ||
              null === (l = l.connections) ||
              void 0 === l
                ? void 0
                : l.get(a.uid);
            if (e)
              return {
                address: null === e || void 0 === e ? void 0 : e.accounts[0],
                chainId: null === e || void 0 === e ? void 0 : e.chainId,
                provider: r,
                type: i,
                id: t,
              };
          }
          const d = await (0, E.N)(this.wagmiConfig, {
            connector: a,
            chainId: s ? Number(s) : void 0,
          });
          return {
            address: d.accounts[0],
            chainId: d.chainId,
            provider: r,
            type: i,
            id: t,
          };
        }
        async reconnect(e) {
          const { id: n } = e,
            t = this.getWagmiConnector(n);
          if (!t)
            throw new Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          await (0, A.M)(this.wagmiConfig, { connectors: [t] });
        }
        async getBalance(e) {
          const n = e.address,
            t = this.getCaipNetworks().find((n) => n.id === e.chainId);
          if (!n) return Promise.resolve({ balance: "0.00", symbol: "ETH" });
          if (t && this.wagmiConfig) {
            const n = `${t.caipNetworkId}:${e.address}`,
              r = this.balancePromises[n];
            if (r) return r;
            const i = W.i.getNativeBalanceCacheForCaipAddress(n);
            return i
              ? { balance: i.balance, symbol: i.symbol }
              : ((this.balancePromises[n] = new Promise(async (r) => {
                  try {
                    var i;
                    const o = Number(e.chainId),
                      a = await (async function (e, n) {
                        var t;
                        const {
                          address: r,
                          blockNumber: i,
                          blockTag: o,
                          chainId: a,
                          token: c,
                          unit: l = "ether",
                        } = n;
                        if (c)
                          try {
                            return await O(e, {
                              balanceAddress: r,
                              chainId: a,
                              symbolType: "string",
                              tokenAddress: c,
                            });
                          } catch (g) {
                            if ("ContractFunctionExecutionError" === g.name) {
                              const n = await O(e, {
                                  balanceAddress: r,
                                  chainId: a,
                                  symbolType: "bytes32",
                                  tokenAddress: c,
                                }),
                                t = (0, I.IQ)(
                                  (0, x.B)(n.symbol, { dir: "right" })
                                );
                              return { ...n, symbol: t };
                            }
                            throw g;
                          }
                        const d = e.getClient({ chainId: a }),
                          u = (0, s.T)(d, S.r, "getBalance"),
                          h = await u(
                            i
                              ? { address: r, blockNumber: i }
                              : { address: r, blockTag: o }
                          ),
                          f =
                            null !== (t = e.chains.find((e) => e.id === a)) &&
                            void 0 !== t
                              ? t
                              : d.chain;
                        return {
                          decimals: f.nativeCurrency.decimals,
                          formatted: (0, k.J)(h, T(l)),
                          symbol: f.nativeCurrency.symbol,
                          value: h,
                        };
                      })(this.wagmiConfig, {
                        address: e.address,
                        chainId: o,
                        token:
                          null === (i = e.tokens) ||
                          void 0 === i ||
                          null === (i = i[t.caipNetworkId]) ||
                          void 0 === i
                            ? void 0
                            : i.address,
                      });
                    W.i.updateNativeBalanceCache({
                      caipAddress: n,
                      balance: a.formatted,
                      symbol: a.symbol,
                      timestamp: Date.now(),
                    }),
                      r({ balance: a.formatted, symbol: a.symbol });
                  } catch (o) {
                    console.warn(
                      "Appkit:WagmiAdapter:getBalance - Error getting balance",
                      o
                    ),
                      r({ balance: "0.00", symbol: "ETH" });
                  }
                }).finally(() => {
                  delete this.balancePromises[n];
                })),
                this.balancePromises[n] || { balance: "0.00", symbol: "ETH" });
          }
          return { balance: "", symbol: "" };
        }
        async getProfile(e) {
          const n = e.chainId,
            t = await (function (e, n) {
              const { chainId: t, ...r } = n,
                i = e.getClient({ chainId: t });
              return (0, s.T)(i, B.s, "getEnsName")(r);
            })(this.wagmiConfig, { address: e.address, chainId: n });
          if (t) {
            const e = await (function (e, n) {
              const { chainId: t, ...r } = n,
                i = e.getClient({ chainId: t });
              return (0, s.T)(i, R.i, "getEnsAvatar")(r);
            })(this.wagmiConfig, { name: t, chainId: n });
            return {
              profileName: t,
              profileImage: null !== e && void 0 !== e ? e : void 0,
            };
          }
          return { profileName: void 0, profileImage: void 0 };
        }
        getWalletConnectProvider() {
          var e;
          return null === (e = this.getWagmiConnector("walletConnect")) ||
            void 0 === e
            ? void 0
            : e.provider;
        }
        async disconnect() {
          const e = b(this.wagmiConfig);
          await Promise.all(
            e.map(async (e) => {
              const n = this.getWagmiConnector(e.connector.id);
              n && (await (0, H.Z)(this.wagmiConfig, { connector: n }));
            })
          );
        }
        async switchNetwork(e) {
          await (0, C.S)(this.wagmiConfig, { chainId: e.caipNetwork.id }),
            await super.switchNetwork(e);
        }
        async getCapabilities(e) {
          var n;
          if (!this.wagmiConfig)
            throw new Error(
              "connectionControllerClient:getCapabilities - wagmiConfig is undefined"
            );
          const t = b(this.wagmiConfig)[0],
            r = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!r)
            throw new Error(
              "connectionControllerClient:getCapabilities - connector is undefined"
            );
          const i = await r.getProvider();
          if (!i)
            throw new Error(
              "connectionControllerClient:getCapabilities - provider is undefined"
            );
          const o =
            null === (n = i.session) ||
            void 0 === n ||
            null === (n = n.sessionProperties) ||
            void 0 === n
              ? void 0
              : n.capabilities;
          if (o) {
            const n = (function (e) {
              try {
                return JSON.parse(e);
              } catch (n) {
                throw new Error("Error parsing wallet capabilities");
              }
            })(o)[e];
            if (n) return n;
          }
          return await i.request({
            method: "wallet_getCapabilities",
            params: [e],
          });
        }
        async grantPermissions(e) {
          if (!this.wagmiConfig)
            throw new Error(
              "connectionControllerClient:grantPermissions - wagmiConfig is undefined"
            );
          const n = b(this.wagmiConfig)[0],
            t = n ? this.getWagmiConnector(n.connector.id) : null;
          if (!t)
            throw new Error(
              "connectionControllerClient:grantPermissions - connector is undefined"
            );
          const r = await t.getProvider();
          if (!r)
            throw new Error(
              "connectionControllerClient:grantPermissions - provider is undefined"
            );
          return r.request({ method: "wallet_grantPermissions", params: e });
        }
        async revokePermissions(e) {
          if (!this.wagmiConfig)
            throw new Error(
              "connectionControllerClient:revokePermissions - wagmiConfig is undefined"
            );
          const n = b(this.wagmiConfig)[0],
            t = n ? this.getWagmiConnector(n.connector.id) : null;
          if (!t)
            throw new Error(
              "connectionControllerClient:revokePermissions - connector is undefined"
            );
          const r = await t.getProvider();
          if (!r)
            throw new Error(
              "connectionControllerClient:revokePermissions - provider is undefined"
            );
          return r.request({ method: "wallet_revokePermissions", params: e });
        }
        async walletGetAssets(e) {
          if (!this.wagmiConfig)
            throw new Error(
              "connectionControllerClient:walletGetAssets - wagmiConfig is undefined"
            );
          const n = b(this.wagmiConfig)[0],
            t = n ? this.getWagmiConnector(n.connector.id) : null;
          if (!t)
            throw new Error(
              "connectionControllerClient:walletGetAssets - connector is undefined"
            );
          const r = await t.getProvider();
          if (!r)
            throw new Error(
              "connectionControllerClient:walletGetAssets - provider is undefined"
            );
          return r.request({ method: "wallet_getAssets", params: [e] });
        }
        setUniversalProvider(e) {
          this.addConnector(
            new Z.F({
              provider: e,
              caipNetworks: this.getCaipNetworks(),
              namespace: "eip155",
            })
          );
        }
      }
    },
    17808: (e, n, t) => {
      e.exports = t(78173);
    },
    18162: (e, n, t) => {
      t.d(n, { i: () => s });
      var r = t(83117),
        i = t(51477),
        o = t(43787);
      function s() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = (0, o.U)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, n) {
              const { onChange: t } = n;
              return e.subscribe((e) => e.chainId, t);
            })(n, { onChange: e }),
          () => (0, r.T)(n),
          () => (0, r.T)(n)
        );
      }
    },
    23477: (e, n, t) => {
      t.d(n, { O: () => d });
      var r = t(42821),
        i = t(42449),
        o = t(26498),
        s = t(10719),
        a = t(23871),
        c = t(70760),
        l = t(91125);
      class d extends l.Y {
        constructor(e) {
          super(),
            (this.id = s.o.CONNECTOR_ID.AUTH),
            (this.name = s.o.CONNECTOR_NAMES.AUTH),
            (this.type = "AUTH"),
            (this.chain = s.o.CHAIN.SOLANA),
            (this.provider = e.w3mFrameProvider),
            (this.requestedChains = e.chains),
            (this.getActiveChain = e.getActiveChain);
        }
        get publicKey() {
          var e;
          const n =
            null === (e = this.provider.user) || void 0 === e
              ? void 0
              : e.address;
          return n ? new i.J3(n) : void 0;
        }
        get chains() {
          const e = this.provider.getAvailableChainIds();
          return this.requestedChains.filter((n) =>
            e.includes(n.caipNetworkId)
          );
        }
        async connect() {
          var e, n;
          const t =
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).chainId ||
              (null === (e = this.getActiveChain()) || void 0 === e
                ? void 0
                : e.id),
            r =
              null === (n = a.U.state.preferredAccountTypes) || void 0 === n
                ? void 0
                : n.solana;
          if (
            (await this.provider.connect({
              chainId: (0, c.o)(t),
              preferredAccountType: r,
            }),
            !this.publicKey)
          )
            throw new Error("Failed to connect to the wallet");
          return (
            this.emit("connect", this.publicKey), this.publicKey.toBase58()
          );
        }
        async disconnect() {
          await this.provider.disconnect(), this.emit("disconnect", void 0);
        }
        async signMessage(e) {
          if (!this.publicKey) throw new Error("Wallet not connected");
          const n = await this.provider.request({
            method: "solana_signMessage",
            params: {
              message: o.A.encode(e),
              pubkey: this.publicKey.toBase58(),
            },
          });
          return o.A.decode(n.signature);
        }
        async signTransaction(e) {
          const n = await this.provider.request({
              method: "solana_signTransaction",
              params: { transaction: this.serializeTransaction(e) },
            }),
            t = o.A.decode(n.transaction);
          return (0, r.Y)(e) ? i.Kt.deserialize(t) : i.ZX.from(t);
        }
        async signAndSendTransaction(e, n) {
          const t = this.serializeTransaction(e);
          return (
            await this.provider.request({
              method: "solana_signAndSendTransaction",
              params: { transaction: t, options: n },
            })
          ).signature;
        }
        async sendTransaction(e, n, t) {
          const r = await this.signTransaction(e);
          return await n.sendRawTransaction(r.serialize(), t);
        }
        async signAllTransactions(e) {
          return (
            await this.provider.request({
              method: "solana_signAllTransactions",
              params: {
                transactions: e.map((e) => this.serializeTransaction(e)),
              },
            })
          ).transactions.map((n, t) => {
            const s = e[t];
            if (!s)
              throw new Error("Invalid solana_signAllTransactions response");
            const a = o.A.decode(n);
            return (0, r.Y)(s) ? i.Kt.deserialize(a) : i.ZX.from(a);
          });
        }
        async request(e) {
          return this.provider.request({ method: e.method, params: e.params });
        }
        async getAccounts() {
          return this.publicKey
            ? Promise.resolve([
                {
                  namespace: this.chain,
                  address: this.publicKey.toBase58(),
                  type: "eoa",
                },
              ])
            : Promise.resolve([]);
        }
        serializeTransaction(e) {
          return o.A.encode(
            new Uint8Array(e.serialize({ verifySignatures: !1 }))
          );
        }
      }
    },
    23841: (e, n, t) => {
      function r(e, n) {
        if (e === n) return !0;
        if (e && n && "object" === typeof e && "object" === typeof n) {
          if (e.constructor !== n.constructor) return !1;
          let t, i;
          if (Array.isArray(e) && Array.isArray(n)) {
            if (((t = e.length), t !== n.length)) return !1;
            for (i = t; 0 !== i--; ) if (!r(e[i], n[i])) return !1;
            return !0;
          }
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === n.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === n.toString();
          const o = Object.keys(e);
          if (((t = o.length), t !== Object.keys(n).length)) return !1;
          for (i = t; 0 !== i--; )
            if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
          for (i = t; 0 !== i--; ) {
            const t = o[i];
            if (t && !r(e[t], n[t])) return !1;
          }
          return !0;
        }
        return e !== e && n !== n;
      }
      t.d(n, { b: () => r });
    },
    27635: (e, n, t) => {
      t.d(n, { F: () => o });
      var r = t(23841),
        i = t(80758);
      function o(e, n) {
        const { onChange: t } = n;
        return e.subscribe(() => (0, i.s)(e), t, {
          equalityFn(e, n) {
            const { connector: t, ...i } = e,
              { connector: o, ...s } = n;
            return (
              (0, r.b)(i, s) &&
              (null === t || void 0 === t ? void 0 : t.id) ===
                (null === o || void 0 === o ? void 0 : o.id) &&
              (null === t || void 0 === t ? void 0 : t.uid) ===
                (null === o || void 0 === o ? void 0 : o.uid)
            );
          },
        });
      }
    },
    28453: (e, n, t) => {
      t.d(n, { r: () => r });
      const r = "2.16.7";
    },
    29265: (e, n, t) => {
      t.d(n, { a: () => r, y: () => i });
      class r extends Error {
        constructor(e) {
          super(`The wallet does not support the "${e}" feature`);
        }
      }
      class i extends Error {
        constructor(e) {
          super(`The method "${e}" is not supported by the wallet`);
        }
      }
    },
    31718: (e, n, t) => {
      t.d(n, { e: () => h });
      var r = t(87162),
        i = t(57595);
      var o = t(51477),
        s = t(43787),
        a = t(97338),
        c = t(23841);
      let l = [];
      function d(e) {
        const n = e.connectors;
        return (0, c.b)(l, n) ? l : ((l = n), n);
      }
      function u() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = (0, s.U)(e);
        return (0, o.useSyncExternalStore)(
          (e) => (0, a.O)(n, { onChange: e }),
          () => d(n),
          () => d(n)
        );
      }
      function h() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { mutation: n } = e,
          t = (0, s.U)(e),
          a = (function (e) {
            return {
              mutationFn: (n) => (0, i.N)(e, n),
              mutationKey: ["connect"],
            };
          })(t),
          { mutate: c, mutateAsync: l, ...d } = (0, r.n)({ ...n, ...a });
        return (
          (0, o.useEffect)(
            () =>
              t.subscribe(
                (e) => {
                  let { status: n } = e;
                  return n;
                },
                (e, n) => {
                  "connected" === n && "disconnected" === e && d.reset();
                }
              ),
            [t, d.reset]
          ),
          { ...d, connect: c, connectAsync: l, connectors: u({ config: t }) }
        );
      }
    },
    35188: (e, n, t) => {
      t.d(n, {
        lo: () => po,
        An: () => $i,
        dq: () => Qi,
        lG: () => qi,
        dD: () => to,
        sh: () => _o,
        Qe: () => wo,
      });
      var r = {};
      t.r(r),
        t.d(r, {
          OG: () => q,
          My: () => L,
          Ph: () => R,
          lX: () => H,
          Id: () => $,
          fg: () => W,
          qj: () => D,
          aT: () => B,
          lq: () => M,
          z: () => j,
          Q5: () => V,
        });
      var i = t(64467);
      function o(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error(`Wrong positive integer: ${e}`);
      }
      function s(e) {
        if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
        for (
          var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          t[r - 1] = arguments[r];
        if (t.length > 0 && !t.includes(e.length))
          throw new Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`
          );
      }
      const a = {
          number: o,
          bool: function (e) {
            if ("boolean" !== typeof e)
              throw new Error(`Expected boolean, not ${e}`);
          },
          bytes: s,
          hash: function (e) {
            if ("function" !== typeof e || "function" !== typeof e.create)
              throw new Error(
                "Hash should be wrapped by utils.wrapConstructor"
              );
            o(e.outputLen), o(e.blockLen);
          },
          exists: function (e) {
            let n =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            if (e.destroyed)
              throw new Error("Hash instance has been destroyed");
            if (n && e.finished)
              throw new Error("Hash#digest() has already been called");
          },
          output: function (e, n) {
            s(e);
            const t = n.outputLen;
            if (e.length < t)
              throw new Error(
                `digestInto() expects output buffer of length at least ${t}`
              );
          },
        },
        c = a,
        l =
          "object" === typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        d = (e) => e instanceof Uint8Array,
        u = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        h = (e, n) => (e << (32 - n)) | (e >>> n);
      if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
        throw new Error("Non little-endian hardware is not supported");
      const f = Array.from({ length: 256 }, (e, n) =>
        n.toString(16).padStart(2, "0")
      );
      function g(e) {
        if (!d(e)) throw new Error("Uint8Array expected");
        let n = "";
        for (let t = 0; t < e.length; t++) n += f[e[t]];
        return n;
      }
      function p(e) {
        if ("string" !== typeof e)
          throw new Error("hex string expected, got " + typeof e);
        const n = e.length;
        if (n % 2)
          throw new Error(
            "padded hex string expected, got unpadded hex of length " + n
          );
        const t = new Uint8Array(n / 2);
        for (let r = 0; r < t.length; r++) {
          const n = 2 * r,
            i = e.slice(n, n + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
          t[r] = o;
        }
        return t;
      }
      function w(e) {
        if (
          ("string" === typeof e &&
            (e = (function (e) {
              if ("string" !== typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !d(e))
        )
          throw new Error("expected Uint8Array, got " + typeof e);
        return e;
      }
      function v() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        const r = new Uint8Array(n.reduce((e, n) => e + n.length, 0));
        let i = 0;
        return (
          n.forEach((e) => {
            if (!d(e)) throw new Error("Uint8Array expected");
            r.set(e, i), (i += e.length);
          }),
          r
        );
      }
      class y {
        clone() {
          return this._cloneInto();
        }
      }
      function m(e) {
        const n = (n) => e().update(w(n)).digest(),
          t = e();
        return (
          (n.outputLen = t.outputLen),
          (n.blockLen = t.blockLen),
          (n.create = () => e()),
          n
        );
      }
      function b() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
        if (l && "function" === typeof l.getRandomValues)
          return l.getRandomValues(new Uint8Array(e));
        throw new Error("crypto.getRandomValues must be defined");
      }
      class E extends y {
        constructor(e, n, t, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = n),
            (this.padOffset = t),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = u(this.buffer));
        }
        update(e) {
          c.exists(this);
          const { view: n, buffer: t, blockLen: r } = this,
            i = (e = w(e)).length;
          for (let o = 0; o < i; ) {
            const s = Math.min(r - this.pos, i - o);
            if (s !== r)
              t.set(e.subarray(o, o + s), this.pos),
                (this.pos += s),
                (o += s),
                this.pos === r && (this.process(n, 0), (this.pos = 0));
            else {
              const n = u(e);
              for (; r <= i - o; o += r) this.process(n, o);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          c.exists(this), c.output(e, this), (this.finished = !0);
          const { buffer: n, view: t, blockLen: r, isLE: i } = this;
          let { pos: o } = this;
          (n[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > r - o && (this.process(t, 0), (o = 0));
          for (let c = o; c < r; c++) n[c] = 0;
          !(function (e, n, t, r) {
            if ("function" === typeof e.setBigUint64)
              return e.setBigUint64(n, t, r);
            const i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((t >> i) & o),
              a = Number(t & o),
              c = r ? 4 : 0,
              l = r ? 0 : 4;
            e.setUint32(n + c, s, r), e.setUint32(n + l, a, r);
          })(t, r - 8, BigInt(8 * this.length), i),
            this.process(t, 0);
          const s = u(e),
            a = this.outputLen;
          if (a % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const l = a / 4,
            d = this.get();
          if (l > d.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let c = 0; c < l; c++) s.setUint32(4 * c, d[c], i);
        }
        digest() {
          const { buffer: e, outputLen: n } = this;
          this.digestInto(e);
          const t = e.slice(0, n);
          return this.destroy(), t;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const {
            blockLen: n,
            buffer: t,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = i),
            (e.destroyed = o),
            r % n && e.buffer.set(t),
            e
          );
        }
      }
      const C = (e, n, t) => (e & n) ^ (e & t) ^ (n & t),
        A = new Uint32Array([
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
        I = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        x = new Uint32Array(64);
      class k extends E {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | I[0]),
            (this.B = 0 | I[1]),
            (this.C = 0 | I[2]),
            (this.D = 0 | I[3]),
            (this.E = 0 | I[4]),
            (this.F = 0 | I[5]),
            (this.G = 0 | I[6]),
            (this.H = 0 | I[7]);
        }
        get() {
          const { A: e, B: n, C: t, D: r, E: i, F: o, G: s, H: a } = this;
          return [e, n, t, r, i, o, s, a];
        }
        set(e, n, t, r, i, o, s, a) {
          (this.A = 0 | e),
            (this.B = 0 | n),
            (this.C = 0 | t),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(e, n) {
          for (let u = 0; u < 16; u++, n += 4) x[u] = e.getUint32(n, !1);
          for (let u = 16; u < 64; u++) {
            const e = x[u - 15],
              n = x[u - 2],
              t = h(e, 7) ^ h(e, 18) ^ (e >>> 3),
              r = h(n, 17) ^ h(n, 19) ^ (n >>> 10);
            x[u] = (r + x[u - 7] + t + x[u - 16]) | 0;
          }
          let { A: t, B: r, C: i, D: o, E: s, F: a, G: c, H: l } = this;
          for (let u = 0; u < 64; u++) {
            const e =
                (l +
                  (h(s, 6) ^ h(s, 11) ^ h(s, 25)) +
                  (((d = s) & a) ^ (~d & c)) +
                  A[u] +
                  x[u]) |
                0,
              n = ((h(t, 2) ^ h(t, 13) ^ h(t, 22)) + C(t, r, i)) | 0;
            (l = c),
              (c = a),
              (a = s),
              (s = (o + e) | 0),
              (o = i),
              (i = r),
              (r = t),
              (t = (e + n) | 0);
          }
          var d;
          (t = (t + this.A) | 0),
            (r = (r + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (s = (s + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(t, r, i, o, s, a, c, l);
        }
        roundClean() {
          x.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      class S extends k {
        constructor() {
          super(),
            (this.A = -1056596264),
            (this.B = 914150663),
            (this.C = 812702999),
            (this.D = -150054599),
            (this.E = -4191439),
            (this.F = 1750603025),
            (this.G = 1694076839),
            (this.H = -1090891868),
            (this.outputLen = 28);
        }
      }
      const N = m(() => new k()),
        T = (m(() => new S()), BigInt(0), BigInt(1)),
        U = BigInt(2),
        _ = (e) => e instanceof Uint8Array,
        P = Array.from({ length: 256 }, (e, n) =>
          n.toString(16).padStart(2, "0")
        );
      function L(e) {
        if (!_(e)) throw new Error("Uint8Array expected");
        let n = "";
        for (let t = 0; t < e.length; t++) n += P[e[t]];
        return n;
      }
      function O(e) {
        if ("string" !== typeof e)
          throw new Error("hex string expected, got " + typeof e);
        return BigInt("" === e ? "0" : `0x${e}`);
      }
      function B(e) {
        if ("string" !== typeof e)
          throw new Error("hex string expected, got " + typeof e);
        const n = e.length;
        if (n % 2)
          throw new Error(
            "padded hex string expected, got unpadded hex of length " + n
          );
        const t = new Uint8Array(n / 2);
        for (let r = 0; r < t.length; r++) {
          const n = 2 * r,
            i = e.slice(n, n + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
          t[r] = o;
        }
        return t;
      }
      function R(e) {
        return O(L(e));
      }
      function H(e) {
        if (!_(e)) throw new Error("Uint8Array expected");
        return O(L(Uint8Array.from(e).reverse()));
      }
      function M(e, n) {
        return B(e.toString(16).padStart(2 * n, "0"));
      }
      function j(e, n) {
        return M(e, n).reverse();
      }
      function D(e, n, t) {
        let r;
        if ("string" === typeof n)
          try {
            r = B(n);
          } catch (o) {
            throw new Error(
              `${e} must be valid hex string, got "${n}". Cause: ${o}`
            );
          }
        else {
          if (!_(n)) throw new Error(`${e} must be hex string or Uint8Array`);
          r = Uint8Array.from(n);
        }
        const i = r.length;
        if ("number" === typeof t && i !== t)
          throw new Error(`${e} expected ${t} bytes, got ${i}`);
        return r;
      }
      function $() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        const r = new Uint8Array(n.reduce((e, n) => e + n.length, 0));
        let i = 0;
        return (
          n.forEach((e) => {
            if (!_(e)) throw new Error("Uint8Array expected");
            r.set(e, i), (i += e.length);
          }),
          r
        );
      }
      const q = (e) => (U << BigInt(e - 1)) - T,
        K = (e) => new Uint8Array(e),
        z = (e) => Uint8Array.from(e);
      function W(e, n, t) {
        if ("number" !== typeof e || e < 2)
          throw new Error("hashLen must be a number");
        if ("number" !== typeof n || n < 2)
          throw new Error("qByteLen must be a number");
        if ("function" !== typeof t)
          throw new Error("hmacFn must be a function");
        let r = K(e),
          i = K(e),
          o = 0;
        const s = () => {
            r.fill(1), i.fill(0), (o = 0);
          },
          a = function () {
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return t(i, r, ...n);
          },
          c = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : K();
            (i = a(z([0]), e)),
              (r = a()),
              0 !== e.length && ((i = a(z([1]), e)), (r = a()));
          },
          l = () => {
            if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let e = 0;
            const t = [];
            for (; e < n; ) {
              r = a();
              const n = r.slice();
              t.push(n), (e += r.length);
            }
            return $(...t);
          };
        return (e, n) => {
          let t;
          for (s(), c(e); !(t = n(l())); ) c();
          return s(), t;
        };
      }
      const F = {
        bigint: (e) => "bigint" === typeof e,
        function: (e) => "function" === typeof e,
        boolean: (e) => "boolean" === typeof e,
        string: (e) => "string" === typeof e,
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, n) => n.Fp.isValid(e),
        hash: (e) =>
          "function" === typeof e && Number.isSafeInteger(e.outputLen),
      };
      function V(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const r = (n, t, r) => {
          const i = F[t];
          if ("function" !== typeof i)
            throw new Error(`Invalid validator "${t}", expected function`);
          const o = e[n];
          if ((!r || void 0 !== o) && !i(o, e))
            throw new Error(
              `Invalid param ${String(n)}=${o} (${typeof o}), expected ${t}`
            );
        };
        for (const [i, o] of Object.entries(n)) r(i, o, !1);
        for (const [i, o] of Object.entries(t)) r(i, o, !0);
        return e;
      }
      const G = BigInt(0),
        J = BigInt(1),
        Z = BigInt(2),
        Y = BigInt(3),
        Q = BigInt(4),
        X = BigInt(5),
        ee = BigInt(8);
      BigInt(9), BigInt(16);
      function ne(e, n) {
        const t = e % n;
        return t >= G ? t : n + t;
      }
      function te(e, n, t) {
        if (t <= G || n < G) throw new Error("Expected power/modulo > 0");
        if (t === J) return G;
        let r = J;
        for (; n > G; )
          n & J && (r = (r * e) % t), (e = (e * e) % t), (n >>= J);
        return r;
      }
      function re(e, n, t) {
        let r = e;
        for (; n-- > G; ) (r *= r), (r %= t);
        return r;
      }
      function ie(e, n) {
        if (e === G || n <= G)
          throw new Error(
            `invert: expected positive integers, got n=${e} mod=${n}`
          );
        let t = ne(e, n),
          r = n,
          i = G,
          o = J,
          s = J,
          a = G;
        for (; t !== G; ) {
          const e = r / t,
            n = r % t,
            c = i - s * e,
            l = o - a * e;
          (r = t), (t = n), (i = s), (o = a), (s = c), (a = l);
        }
        if (r !== J) throw new Error("invert: does not exist");
        return ne(i, n);
      }
      function oe(e) {
        if (e % Q === Y) {
          const n = (e + J) / Q;
          return function (e, t) {
            const r = e.pow(t, n);
            if (!e.eql(e.sqr(r), t)) throw new Error("Cannot find square root");
            return r;
          };
        }
        if (e % ee === X) {
          const n = (e - X) / ee;
          return function (e, t) {
            const r = e.mul(t, Z),
              i = e.pow(r, n),
              o = e.mul(t, i),
              s = e.mul(e.mul(o, Z), i),
              a = e.mul(o, e.sub(s, e.ONE));
            if (!e.eql(e.sqr(a), t)) throw new Error("Cannot find square root");
            return a;
          };
        }
        return (function (e) {
          const n = (e - J) / Z;
          let t, r, i;
          for (t = e - J, r = 0; t % Z === G; t /= Z, r++);
          for (i = Z; i < e && te(i, n, e) !== e - J; i++);
          if (1 === r) {
            const n = (e + J) / Q;
            return function (e, t) {
              const r = e.pow(t, n);
              if (!e.eql(e.sqr(r), t))
                throw new Error("Cannot find square root");
              return r;
            };
          }
          const o = (t + J) / Z;
          return function (e, s) {
            if (e.pow(s, n) === e.neg(e.ONE))
              throw new Error("Cannot find square root");
            let a = r,
              c = e.pow(e.mul(e.ONE, i), t),
              l = e.pow(s, o),
              d = e.pow(s, t);
            for (; !e.eql(d, e.ONE); ) {
              if (e.eql(d, e.ZERO)) return e.ZERO;
              let n = 1;
              for (let r = e.sqr(d); n < a && !e.eql(r, e.ONE); n++)
                r = e.sqr(r);
              const t = e.pow(c, J << BigInt(a - n - 1));
              (c = e.sqr(t)), (l = e.mul(l, t)), (d = e.mul(d, c)), (a = n);
            }
            return l;
          };
        })(e);
      }
      const se = [
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
      function ae(e, n) {
        const t = void 0 !== n ? n : e.toString(2).length;
        return { nBitLength: t, nByteLength: Math.ceil(t / 8) };
      }
      const ce = BigInt(0),
        le = BigInt(1);
      function de(e) {
        return (
          V(
            e.Fp,
            se.reduce((e, n) => ((e[n] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          V(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...ae(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      const { Ph: ue, aT: he } = r,
        fe = {
          Err: class extends Error {
            constructor() {
              super(
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ""
              );
            }
          },
          _parseInt(e) {
            const { Err: n } = fe;
            if (e.length < 2 || 2 !== e[0])
              throw new n("Invalid signature integer tag");
            const t = e[1],
              r = e.subarray(2, t + 2);
            if (!t || r.length !== t)
              throw new n("Invalid signature integer: wrong length");
            if (128 & r[0]) throw new n("Invalid signature integer: negative");
            if (0 === r[0] && !(128 & r[1]))
              throw new n(
                "Invalid signature integer: unnecessary leading zero"
              );
            return { d: ue(r), l: e.subarray(t + 2) };
          },
          toSig(e) {
            const { Err: n } = fe,
              t = "string" === typeof e ? he(e) : e;
            if (!(t instanceof Uint8Array)) throw new Error("ui8a expected");
            let r = t.length;
            if (r < 2 || 48 != t[0]) throw new n("Invalid signature tag");
            if (t[1] !== r - 2)
              throw new n("Invalid signature: incorrect length");
            const { d: i, l: o } = fe._parseInt(t.subarray(2)),
              { d: s, l: a } = fe._parseInt(o);
            if (a.length)
              throw new n("Invalid signature: left bytes after parsing");
            return { r: i, s: s };
          },
          hexFromSig(e) {
            const n = (e) => (8 & Number.parseInt(e[0], 16) ? "00" + e : e),
              t = (e) => {
                const n = e.toString(16);
                return 1 & n.length ? `0${n}` : n;
              },
              r = n(t(e.s)),
              i = n(t(e.r)),
              o = r.length / 2,
              s = i.length / 2,
              a = t(o),
              c = t(s);
            return `30${t(s + o + 4)}02${c}${i}02${a}${r}`;
          },
        },
        ge = BigInt(0),
        pe = BigInt(1),
        we = (BigInt(2), BigInt(3));
      BigInt(4);
      function ve(e) {
        const n = (function (e) {
            const n = de(e);
            V(
              n,
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
            const { endo: t, Fp: r, a: i } = n;
            if (t) {
              if (!r.eql(i, r.ZERO))
                throw new Error(
                  "Endomorphism can only be defined for Koblitz curves that have a=0"
                );
              if (
                "object" !== typeof t ||
                "bigint" !== typeof t.beta ||
                "function" !== typeof t.splitScalar
              )
                throw new Error(
                  "Expected endomorphism with beta: bigint and splitScalar: function"
                );
            }
            return Object.freeze({ ...n });
          })(e),
          { Fp: t } = n,
          r =
            n.toBytes ||
            ((e, n, r) => {
              const i = n.toAffine();
              return $(Uint8Array.from([4]), t.toBytes(i.x), t.toBytes(i.y));
            }),
          i =
            n.fromBytes ||
            ((e) => {
              const n = e.subarray(1);
              return {
                x: t.fromBytes(n.subarray(0, t.BYTES)),
                y: t.fromBytes(n.subarray(t.BYTES, 2 * t.BYTES)),
              };
            });
        function o(e) {
          const { a: r, b: i } = n,
            o = t.sqr(e),
            s = t.mul(o, e);
          return t.add(t.add(s, t.mul(e, r)), i);
        }
        if (!t.eql(t.sqr(n.Gy), o(n.Gx)))
          throw new Error("bad generator point: equation left != right");
        function s(e) {
          return "bigint" === typeof e && ge < e && e < n.n;
        }
        function a(e) {
          if (!s(e))
            throw new Error("Expected valid bigint: 0 < bigint < curve.n");
        }
        function c(e) {
          const {
            allowedPrivateKeyLengths: t,
            nByteLength: r,
            wrapPrivateKey: i,
            n: o,
          } = n;
          if (t && "bigint" !== typeof e) {
            if (
              (e instanceof Uint8Array && (e = L(e)),
              "string" !== typeof e || !t.includes(e.length))
            )
              throw new Error("Invalid key");
            e = e.padStart(2 * r, "0");
          }
          let s;
          try {
            s = "bigint" === typeof e ? e : R(D("private key", e, r));
          } catch (c) {
            throw new Error(
              `private key must be ${r} bytes, hex or bigint, not ${typeof e}`
            );
          }
          return i && (s = ne(s, o)), a(s), s;
        }
        const l = new Map();
        function d(e) {
          if (!(e instanceof u)) throw new Error("ProjectivePoint expected");
        }
        class u {
          constructor(e, n, r) {
            if (
              ((this.px = e),
              (this.py = n),
              (this.pz = r),
              null == e || !t.isValid(e))
            )
              throw new Error("x required");
            if (null == n || !t.isValid(n)) throw new Error("y required");
            if (null == r || !t.isValid(r)) throw new Error("z required");
          }
          static fromAffine(e) {
            const { x: n, y: r } = e || {};
            if (!e || !t.isValid(n) || !t.isValid(r))
              throw new Error("invalid affine point");
            if (e instanceof u) throw new Error("projective point not allowed");
            const i = (e) => t.eql(e, t.ZERO);
            return i(n) && i(r) ? u.ZERO : new u(n, r, t.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(e) {
            const n = t.invertBatch(e.map((e) => e.pz));
            return e.map((e, t) => e.toAffine(n[t])).map(u.fromAffine);
          }
          static fromHex(e) {
            const n = u.fromAffine(i(D("pointHex", e)));
            return n.assertValidity(), n;
          }
          static fromPrivateKey(e) {
            return u.BASE.multiply(c(e));
          }
          _setWindowSize(e) {
            (this._WINDOW_SIZE = e), l.delete(this);
          }
          assertValidity() {
            if (this.is0()) {
              if (n.allowInfinityPoint) return;
              throw new Error("bad point: ZERO");
            }
            const { x: e, y: r } = this.toAffine();
            if (!t.isValid(e) || !t.isValid(r))
              throw new Error("bad point: x or y not FE");
            const i = t.sqr(r),
              s = o(e);
            if (!t.eql(i, s))
              throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree())
              throw new Error("bad point: not in prime-order subgroup");
          }
          hasEvenY() {
            const { y: e } = this.toAffine();
            if (t.isOdd) return !t.isOdd(e);
            throw new Error("Field doesn't support isOdd");
          }
          equals(e) {
            d(e);
            const { px: n, py: r, pz: i } = this,
              { px: o, py: s, pz: a } = e,
              c = t.eql(t.mul(n, a), t.mul(o, i)),
              l = t.eql(t.mul(r, a), t.mul(s, i));
            return c && l;
          }
          negate() {
            return new u(this.px, t.neg(this.py), this.pz);
          }
          double() {
            const { a: e, b: r } = n,
              i = t.mul(r, we),
              { px: o, py: s, pz: a } = this;
            let c = t.ZERO,
              l = t.ZERO,
              d = t.ZERO,
              h = t.mul(o, o),
              f = t.mul(s, s),
              g = t.mul(a, a),
              p = t.mul(o, s);
            return (
              (p = t.add(p, p)),
              (d = t.mul(o, a)),
              (d = t.add(d, d)),
              (c = t.mul(e, d)),
              (l = t.mul(i, g)),
              (l = t.add(c, l)),
              (c = t.sub(f, l)),
              (l = t.add(f, l)),
              (l = t.mul(c, l)),
              (c = t.mul(p, c)),
              (d = t.mul(i, d)),
              (g = t.mul(e, g)),
              (p = t.sub(h, g)),
              (p = t.mul(e, p)),
              (p = t.add(p, d)),
              (d = t.add(h, h)),
              (h = t.add(d, h)),
              (h = t.add(h, g)),
              (h = t.mul(h, p)),
              (l = t.add(l, h)),
              (g = t.mul(s, a)),
              (g = t.add(g, g)),
              (h = t.mul(g, p)),
              (c = t.sub(c, h)),
              (d = t.mul(g, f)),
              (d = t.add(d, d)),
              (d = t.add(d, d)),
              new u(c, l, d)
            );
          }
          add(e) {
            d(e);
            const { px: r, py: i, pz: o } = this,
              { px: s, py: a, pz: c } = e;
            let l = t.ZERO,
              h = t.ZERO,
              f = t.ZERO;
            const g = n.a,
              p = t.mul(n.b, we);
            let w = t.mul(r, s),
              v = t.mul(i, a),
              y = t.mul(o, c),
              m = t.add(r, i),
              b = t.add(s, a);
            (m = t.mul(m, b)),
              (b = t.add(w, v)),
              (m = t.sub(m, b)),
              (b = t.add(r, o));
            let E = t.add(s, c);
            return (
              (b = t.mul(b, E)),
              (E = t.add(w, y)),
              (b = t.sub(b, E)),
              (E = t.add(i, o)),
              (l = t.add(a, c)),
              (E = t.mul(E, l)),
              (l = t.add(v, y)),
              (E = t.sub(E, l)),
              (f = t.mul(g, b)),
              (l = t.mul(p, y)),
              (f = t.add(l, f)),
              (l = t.sub(v, f)),
              (f = t.add(v, f)),
              (h = t.mul(l, f)),
              (v = t.add(w, w)),
              (v = t.add(v, w)),
              (y = t.mul(g, y)),
              (b = t.mul(p, b)),
              (v = t.add(v, y)),
              (y = t.sub(w, y)),
              (y = t.mul(g, y)),
              (b = t.add(b, y)),
              (w = t.mul(v, b)),
              (h = t.add(h, w)),
              (w = t.mul(E, b)),
              (l = t.mul(m, l)),
              (l = t.sub(l, w)),
              (w = t.mul(m, v)),
              (f = t.mul(E, f)),
              (f = t.add(f, w)),
              new u(l, h, f)
            );
          }
          subtract(e) {
            return this.add(e.negate());
          }
          is0() {
            return this.equals(u.ZERO);
          }
          wNAF(e) {
            return f.wNAFCached(this, l, e, (e) => {
              const n = t.invertBatch(e.map((e) => e.pz));
              return e.map((e, t) => e.toAffine(n[t])).map(u.fromAffine);
            });
          }
          multiplyUnsafe(e) {
            const r = u.ZERO;
            if (e === ge) return r;
            if ((a(e), e === pe)) return this;
            const { endo: i } = n;
            if (!i) return f.unsafeLadder(this, e);
            let { k1neg: o, k1: s, k2neg: c, k2: l } = i.splitScalar(e),
              d = r,
              h = r,
              g = this;
            for (; s > ge || l > ge; )
              s & pe && (d = d.add(g)),
                l & pe && (h = h.add(g)),
                (g = g.double()),
                (s >>= pe),
                (l >>= pe);
            return (
              o && (d = d.negate()),
              c && (h = h.negate()),
              (h = new u(t.mul(h.px, i.beta), h.py, h.pz)),
              d.add(h)
            );
          }
          multiply(e) {
            a(e);
            let r,
              i,
              o = e;
            const { endo: s } = n;
            if (s) {
              const { k1neg: e, k1: n, k2neg: a, k2: c } = s.splitScalar(o);
              let { p: l, f: d } = this.wNAF(n),
                { p: h, f: g } = this.wNAF(c);
              (l = f.constTimeNegate(e, l)),
                (h = f.constTimeNegate(a, h)),
                (h = new u(t.mul(h.px, s.beta), h.py, h.pz)),
                (r = l.add(h)),
                (i = d.add(g));
            } else {
              const { p: e, f: n } = this.wNAF(o);
              (r = e), (i = n);
            }
            return u.normalizeZ([r, i])[0];
          }
          multiplyAndAddUnsafe(e, n, t) {
            const r = u.BASE,
              i = (e, n) =>
                n !== ge && n !== pe && e.equals(r)
                  ? e.multiply(n)
                  : e.multiplyUnsafe(n),
              o = i(this, n).add(i(e, t));
            return o.is0() ? void 0 : o;
          }
          toAffine(e) {
            const { px: n, py: r, pz: i } = this,
              o = this.is0();
            null == e && (e = o ? t.ONE : t.inv(i));
            const s = t.mul(n, e),
              a = t.mul(r, e),
              c = t.mul(i, e);
            if (o) return { x: t.ZERO, y: t.ZERO };
            if (!t.eql(c, t.ONE)) throw new Error("invZ was invalid");
            return { x: s, y: a };
          }
          isTorsionFree() {
            const { h: e, isTorsionFree: t } = n;
            if (e === pe) return !0;
            if (t) return t(u, this);
            throw new Error(
              "isTorsionFree() has not been declared for the elliptic curve"
            );
          }
          clearCofactor() {
            const { h: e, clearCofactor: t } = n;
            return e === pe ? this : t ? t(u, this) : this.multiplyUnsafe(n.h);
          }
          toRawBytes() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return this.assertValidity(), r(u, this, e);
          }
          toHex() {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return L(this.toRawBytes(e));
          }
        }
        (u.BASE = new u(n.Gx, n.Gy, t.ONE)),
          (u.ZERO = new u(t.ZERO, t.ONE, t.ZERO));
        const h = n.nBitLength,
          f = (function (e, n) {
            const t = (e, n) => {
                const t = n.negate();
                return e ? t : n;
              },
              r = (e) => ({
                windows: Math.ceil(n / e) + 1,
                windowSize: 2 ** (e - 1),
              });
            return {
              constTimeNegate: t,
              unsafeLadder(n, t) {
                let r = e.ZERO,
                  i = n;
                for (; t > ce; )
                  t & le && (r = r.add(i)), (i = i.double()), (t >>= le);
                return r;
              },
              precomputeWindow(e, n) {
                const { windows: t, windowSize: i } = r(n),
                  o = [];
                let s = e,
                  a = s;
                for (let r = 0; r < t; r++) {
                  (a = s), o.push(a);
                  for (let e = 1; e < i; e++) (a = a.add(s)), o.push(a);
                  s = a.double();
                }
                return o;
              },
              wNAF(n, i, o) {
                const { windows: s, windowSize: a } = r(n);
                let c = e.ZERO,
                  l = e.BASE;
                const d = BigInt(2 ** n - 1),
                  u = 2 ** n,
                  h = BigInt(n);
                for (let e = 0; e < s; e++) {
                  const n = e * a;
                  let r = Number(o & d);
                  (o >>= h), r > a && ((r -= u), (o += le));
                  const s = n,
                    f = n + Math.abs(r) - 1,
                    g = e % 2 !== 0,
                    p = r < 0;
                  0 === r ? (l = l.add(t(g, i[s]))) : (c = c.add(t(p, i[f])));
                }
                return { p: c, f: l };
              },
              wNAFCached(e, n, t, r) {
                const i = e._WINDOW_SIZE || 1;
                let o = n.get(e);
                return (
                  o ||
                    ((o = this.precomputeWindow(e, i)),
                    1 !== i && n.set(e, r(o))),
                  this.wNAF(i, o, t)
                );
              },
            };
          })(u, n.endo ? Math.ceil(h / 2) : h);
        return {
          CURVE: n,
          ProjectivePoint: u,
          normPrivateKeyToScalar: c,
          weierstrassEquation: o,
          isWithinCurveOrder: s,
        };
      }
      function ye(e) {
        const n = (function (e) {
            const n = de(e);
            return (
              V(
                n,
                { hash: "hash", hmac: "function", randomBytes: "function" },
                {
                  bits2int: "function",
                  bits2int_modN: "function",
                  lowS: "boolean",
                }
              ),
              Object.freeze({ lowS: !0, ...n })
            );
          })(e),
          { Fp: t, n: r } = n,
          i = t.BYTES + 1,
          o = 2 * t.BYTES + 1;
        function s(e) {
          return ne(e, r);
        }
        function a(e) {
          return ie(e, r);
        }
        const {
            ProjectivePoint: c,
            normPrivateKeyToScalar: l,
            weierstrassEquation: d,
            isWithinCurveOrder: u,
          } = ve({
            ...n,
            toBytes(e, n, r) {
              const i = n.toAffine(),
                o = t.toBytes(i.x),
                s = $;
              return r
                ? s(Uint8Array.from([n.hasEvenY() ? 2 : 3]), o)
                : s(Uint8Array.from([4]), o, t.toBytes(i.y));
            },
            fromBytes(e) {
              const n = e.length,
                r = e[0],
                s = e.subarray(1);
              if (n !== i || (2 !== r && 3 !== r)) {
                if (n === o && 4 === r) {
                  return {
                    x: t.fromBytes(s.subarray(0, t.BYTES)),
                    y: t.fromBytes(s.subarray(t.BYTES, 2 * t.BYTES)),
                  };
                }
                throw new Error(
                  `Point of length ${n} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`
                );
              }
              {
                const e = R(s);
                if (!(ge < (a = e) && a < t.ORDER))
                  throw new Error("Point is not on curve");
                const n = d(e);
                let i = t.sqrt(n);
                return (
                  (1 === (1 & r)) !== ((i & pe) === pe) && (i = t.neg(i)),
                  { x: e, y: i }
                );
              }
              var a;
            },
          }),
          h = (e) => L(M(e, n.nByteLength));
        function f(e) {
          return e > r >> pe;
        }
        const g = (e, n, t) => R(e.slice(n, t));
        class p {
          constructor(e, n, t) {
            (this.r = e),
              (this.s = n),
              (this.recovery = t),
              this.assertValidity();
          }
          static fromCompact(e) {
            const t = n.nByteLength;
            return (
              (e = D("compactSignature", e, 2 * t)),
              new p(g(e, 0, t), g(e, t, 2 * t))
            );
          }
          static fromDER(e) {
            const { r: n, s: t } = fe.toSig(D("DER", e));
            return new p(n, t);
          }
          assertValidity() {
            if (!u(this.r)) throw new Error("r must be 0 < r < CURVE.n");
            if (!u(this.s)) throw new Error("s must be 0 < s < CURVE.n");
          }
          addRecoveryBit(e) {
            return new p(this.r, this.s, e);
          }
          recoverPublicKey(e) {
            const { r: r, s: i, recovery: o } = this,
              l = m(D("msgHash", e));
            if (null == o || ![0, 1, 2, 3].includes(o))
              throw new Error("recovery id invalid");
            const d = 2 === o || 3 === o ? r + n.n : r;
            if (d >= t.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const u = 0 === (1 & o) ? "02" : "03",
              f = c.fromHex(u + h(d)),
              g = a(d),
              p = s(-l * g),
              w = s(i * g),
              v = c.BASE.multiplyAndAddUnsafe(f, p, w);
            if (!v) throw new Error("point at infinify");
            return v.assertValidity(), v;
          }
          hasHighS() {
            return f(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new p(this.r, s(-this.s), this.recovery)
              : this;
          }
          toDERRawBytes() {
            return B(this.toDERHex());
          }
          toDERHex() {
            return fe.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return B(this.toCompactHex());
          }
          toCompactHex() {
            return h(this.r) + h(this.s);
          }
        }
        const w = {
          isValidPrivateKey(e) {
            try {
              return l(e), !0;
            } catch (n) {
              return !1;
            }
          },
          normPrivateKeyToScalar: l,
          randomPrivateKey: () => {
            const e = (function (e, n) {
              let t =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              const r = (e = D("privateHash", e)).length,
                i = ae(n).nByteLength + 8;
              if (i < 24 || r < i || r > 1024)
                throw new Error(
                  `hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${r}`
                );
              return ne(t ? H(e) : R(e), n - J) + J;
            })(n.randomBytes(t.BYTES + 8), r);
            return M(e, n.nByteLength);
          },
          precompute() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 8,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : c.BASE;
            return n._setWindowSize(e), n.multiply(BigInt(3)), n;
          },
        };
        function v(e) {
          const n = e instanceof Uint8Array,
            t = "string" === typeof e,
            r = (n || t) && e.length;
          return n
            ? r === i || r === o
            : t
            ? r === 2 * i || r === 2 * o
            : e instanceof c;
        }
        const y =
            n.bits2int ||
            function (e) {
              const t = R(e),
                r = 8 * e.length - n.nBitLength;
              return r > 0 ? t >> BigInt(r) : t;
            },
          m =
            n.bits2int_modN ||
            function (e) {
              return s(y(e));
            },
          b = q(n.nBitLength);
        function E(e) {
          if ("bigint" !== typeof e) throw new Error("bigint expected");
          if (!(ge <= e && e < b))
            throw new Error(`bigint expected < 2^${n.nBitLength}`);
          return M(e, n.nByteLength);
        }
        function C(e, r) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A;
          if (["recovered", "canonical"].some((e) => e in i))
            throw new Error("sign() legacy options not supported");
          const { hash: o, randomBytes: d } = n;
          let { lowS: h, prehash: g, extraEntropy: w } = i;
          null == h && (h = !0),
            (e = D("msgHash", e)),
            g && (e = D("prehashed msgHash", o(e)));
          const v = m(e),
            b = l(r),
            C = [E(b), E(v)];
          if (null != w) {
            const e = !0 === w ? d(t.BYTES) : w;
            C.push(D("extraEntropy", e, t.BYTES));
          }
          const I = $(...C),
            x = v;
          return {
            seed: I,
            k2sig: function (e) {
              const n = y(e);
              if (!u(n)) return;
              const t = a(n),
                r = c.BASE.multiply(n).toAffine(),
                i = s(r.x);
              if (i === ge) return;
              const o = s(t * s(x + i * b));
              if (o === ge) return;
              let l = (r.x === i ? 0 : 2) | Number(r.y & pe),
                d = o;
              return (
                h &&
                  f(o) &&
                  ((d = (function (e) {
                    return f(e) ? s(-e) : e;
                  })(o)),
                  (l ^= 1)),
                new p(i, d, l)
              );
            },
          };
        }
        const A = { lowS: n.lowS, prehash: !1 },
          I = { lowS: n.lowS, prehash: !1 };
        return (
          c.BASE._setWindowSize(8),
          {
            CURVE: n,
            getPublicKey: function (e) {
              let n =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return c.fromPrivateKey(e).toRawBytes(n);
            },
            getSharedSecret: function (e, n) {
              let t =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              if (v(e)) throw new Error("first arg must be private key");
              if (!v(n)) throw new Error("second arg must be public key");
              return c.fromHex(n).multiply(l(e)).toRawBytes(t);
            },
            sign: function (e, t) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : A;
              const { seed: i, k2sig: o } = C(e, t, r),
                s = n;
              return W(s.hash.outputLen, s.nByteLength, s.hmac)(i, o);
            },
            verify: function (e, t, r) {
              var i;
              let o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : I;
              const l = e;
              if (
                ((t = D("msgHash", t)), (r = D("publicKey", r)), "strict" in o)
              )
                throw new Error("options.strict was renamed to lowS");
              const { lowS: d, prehash: u } = o;
              let h, f;
              try {
                if ("string" === typeof l || l instanceof Uint8Array)
                  try {
                    h = p.fromDER(l);
                  } catch (A) {
                    if (!(A instanceof fe.Err)) throw A;
                    h = p.fromCompact(l);
                  }
                else {
                  if (
                    "object" !== typeof l ||
                    "bigint" !== typeof l.r ||
                    "bigint" !== typeof l.s
                  )
                    throw new Error("PARSE");
                  {
                    const { r: e, s: n } = l;
                    h = new p(e, n);
                  }
                }
                f = c.fromHex(r);
              } catch (x) {
                if ("PARSE" === x.message)
                  throw new Error(
                    "signature must be Signature instance, Uint8Array or hex string"
                  );
                return !1;
              }
              if (d && h.hasHighS()) return !1;
              u && (t = n.hash(t));
              const { r: g, s: w } = h,
                v = m(t),
                y = a(w),
                b = s(v * y),
                E = s(g * y),
                C =
                  null === (i = c.BASE.multiplyAndAddUnsafe(f, b, E)) ||
                  void 0 === i
                    ? void 0
                    : i.toAffine();
              return !!C && s(C.x) === g;
            },
            ProjectivePoint: c,
            Signature: p,
            utils: w,
          }
        );
      }
      class me extends y {
        constructor(e, n) {
          super(), (this.finished = !1), (this.destroyed = !1), c.hash(e);
          const t = w(n);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new Error(
              "Expected instance of class which extends utils.Hash"
            );
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const r = this.blockLen,
            i = new Uint8Array(r);
          i.set(t.length > r ? e.create().update(t).digest() : t);
          for (let o = 0; o < i.length; o++) i[o] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let o = 0; o < i.length; o++) i[o] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return c.exists(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          c.exists(this),
            c.bytes(e, this.outputLen),
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
            oHash: n,
            iHash: t,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = s),
            (e.oHash = n._cloneInto(e.oHash)),
            (e.iHash = t._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      const be = (e, n, t) => new me(e, n).update(t).digest();
      function Ee(e) {
        return {
          hash: e,
          hmac: function (n) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            return be(e, n, v(...r));
          },
          randomBytes: b,
        };
      }
      be.create = (e, n) => new me(e, n);
      const Ce = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        Ae = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        Ie = BigInt(1),
        xe = BigInt(2),
        ke = (e, n) => (e + n / xe) / n;
      function Se(e) {
        const n = Ce,
          t = BigInt(3),
          r = BigInt(6),
          i = BigInt(11),
          o = BigInt(22),
          s = BigInt(23),
          a = BigInt(44),
          c = BigInt(88),
          l = (e * e * e) % n,
          d = (l * l * e) % n,
          u = (re(d, t, n) * d) % n,
          h = (re(u, t, n) * d) % n,
          f = (re(h, xe, n) * l) % n,
          g = (re(f, i, n) * f) % n,
          p = (re(g, o, n) * g) % n,
          w = (re(p, a, n) * p) % n,
          v = (re(w, c, n) * w) % n,
          y = (re(v, a, n) * p) % n,
          m = (re(y, t, n) * d) % n,
          b = (re(m, s, n) * g) % n,
          E = (re(b, r, n) * l) % n,
          C = re(E, xe, n);
        if (!Ne.eql(Ne.sqr(C), e)) throw new Error("Cannot find square root");
        return C;
      }
      const Ne = (function (e, n) {
          let t =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (e <= G) throw new Error(`Expected Fp ORDER > 0, got ${e}`);
          const { nBitLength: i, nByteLength: o } = ae(e, n);
          if (o > 2048)
            throw new Error("Field lengths over 2048 bytes are not supported");
          const s = oe(e),
            a = Object.freeze({
              ORDER: e,
              BITS: i,
              BYTES: o,
              MASK: q(i),
              ZERO: G,
              ONE: J,
              create: (n) => ne(n, e),
              isValid: (n) => {
                if ("bigint" !== typeof n)
                  throw new Error(
                    "Invalid field element: expected bigint, got " + typeof n
                  );
                return G <= n && n < e;
              },
              is0: (e) => e === G,
              isOdd: (e) => (e & J) === J,
              neg: (n) => ne(-n, e),
              eql: (e, n) => e === n,
              sqr: (n) => ne(n * n, e),
              add: (n, t) => ne(n + t, e),
              sub: (n, t) => ne(n - t, e),
              mul: (n, t) => ne(n * t, e),
              pow: (e, n) =>
                (function (e, n, t) {
                  if (t < G) throw new Error("Expected power > 0");
                  if (t === G) return e.ONE;
                  if (t === J) return n;
                  let r = e.ONE,
                    i = n;
                  for (; t > G; )
                    t & J && (r = e.mul(r, i)), (i = e.sqr(i)), (t >>= J);
                  return r;
                })(a, e, n),
              div: (n, t) => ne(n * ie(t, e), e),
              sqrN: (e) => e * e,
              addN: (e, n) => e + n,
              subN: (e, n) => e - n,
              mulN: (e, n) => e * n,
              inv: (n) => ie(n, e),
              sqrt: r.sqrt || ((e) => s(a, e)),
              invertBatch: (e) =>
                (function (e, n) {
                  const t = new Array(n.length),
                    r = n.reduce(
                      (n, r, i) => (e.is0(r) ? n : ((t[i] = n), e.mul(n, r))),
                      e.ONE
                    ),
                    i = e.inv(r);
                  return (
                    n.reduceRight(
                      (n, r, i) =>
                        e.is0(r) ? n : ((t[i] = e.mul(n, t[i])), e.mul(n, r)),
                      i
                    ),
                    t
                  );
                })(a, e),
              cmov: (e, n, t) => (t ? n : e),
              toBytes: (e) => (t ? j(e, o) : M(e, o)),
              fromBytes: (e) => {
                if (e.length !== o)
                  throw new Error(
                    `Fp.fromBytes: expected ${o}, got ${e.length}`
                  );
                return t ? H(e) : R(e);
              },
            });
          return Object.freeze(a);
        })(Ce, void 0, void 0, { sqrt: Se }),
        Te = (function (e, n) {
          const t = (n) => ye({ ...e, ...Ee(n) });
          return Object.freeze({ ...t(n), create: t });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: Ne,
            n: Ae,
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
                const n = Ae,
                  t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -Ie * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  o = t,
                  s = BigInt("0x100000000000000000000000000000000"),
                  a = ke(o * e, n),
                  c = ke(-r * e, n);
                let l = ne(e - a * t - c * i, n),
                  d = ne(-a * r - c * o, n);
                const u = l > s,
                  h = d > s;
                if ((u && (l = n - l), h && (d = n - d), l > s || d > s))
                  throw new Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: u, k1: l, k2neg: h, k2: d };
              },
            },
          },
          N
        ),
        Ue = BigInt(0),
        _e = (e) => "bigint" === typeof e && Ue < e && e < Ce,
        Pe = {};
      function Le(e) {
        let n = Pe[e];
        if (void 0 === n) {
          const t = N(Uint8Array.from(e, (e) => e.charCodeAt(0)));
          (n = $(t, t)), (Pe[e] = n);
        }
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        return N($(n, ...r));
      }
      const Oe = (e) => e.toRawBytes(!0).slice(1),
        Be = (e) => M(e, 32),
        Re = (e) => ne(e, Ce),
        He = (e) => ne(e, Ae),
        Me = Te.ProjectivePoint;
      function je(e) {
        let n = Te.utils.normPrivateKeyToScalar(e),
          t = Me.fromPrivateKey(n);
        return { scalar: t.hasEvenY() ? n : He(-n), bytes: Oe(t) };
      }
      function De(e) {
        if (!_e(e)) throw new Error("bad x: need 0 < x < p");
        const n = Re(e * e);
        let t = Se(Re(n * e + BigInt(7)));
        t % xe !== Ue && (t = Re(-t));
        const r = new Me(e, t, Ie);
        return r.assertValidity(), r;
      }
      function $e() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return He(R(Le("BIP0340/challenge", ...n)));
      }
      function qe(e) {
        return je(e).bytes;
      }
      function Ke(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : b(32);
        const r = D("message", e),
          { bytes: i, scalar: o } = je(n),
          s = D("auxRand", t, 32),
          a = Be(o ^ R(Le("BIP0340/aux", s))),
          c = Le("BIP0340/nonce", a, i, r),
          l = He(R(c));
        if (l === Ue) throw new Error("sign failed: k is zero");
        const { bytes: d, scalar: u } = je(l),
          h = $e(d, i, r),
          f = new Uint8Array(64);
        if ((f.set(d, 0), f.set(Be(He(u + h * o)), 32), !ze(f, r, i)))
          throw new Error("sign: Invalid signature produced");
        return f;
      }
      function ze(e, n, t) {
        const r = D("signature", e, 64),
          i = D("message", n),
          o = D("publicKey", t, 32);
        try {
          const e = De(R(o)),
            n = R(r.subarray(0, 32));
          if (!_e(n)) return !1;
          const t = R(r.subarray(32, 64));
          if (!("bigint" === typeof (l = t) && Ue < l && l < Ae)) return !1;
          const d = $e(Be(n), Oe(e), i),
            u =
              ((s = e),
              (a = t),
              (c = He(-d)),
              Me.BASE.multiplyAndAddUnsafe(s, a, c));
          return !(!u || !u.hasEvenY() || u.toAffine().x !== n);
        } catch (d) {
          return !1;
        }
        var s, a, c, l;
      }
      const We = (() => ({
        getPublicKey: qe,
        sign: Ke,
        verify: ze,
        utils: {
          randomPrivateKey: Te.utils.randomPrivateKey,
          lift_x: De,
          pointToBytes: Oe,
          numberToBytesBE: M,
          bytesToNumberBE: R,
          taggedHash: Le,
          mod: ne,
        },
      }))();
      function Fe(e) {
        if (!Number.isSafeInteger(e)) throw new Error(`Wrong integer: ${e}`);
      }
      function Ve() {
        const e = (e, n) => (t) => e(n(t));
        for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
          t[r] = arguments[r];
        return {
          encode: Array.from(t)
            .reverse()
            .reduce((n, t) => (n ? e(n, t.encode) : t.encode), void 0),
          decode: t.reduce((n, t) => (n ? e(n, t.decode) : t.decode), void 0),
        };
      }
      function Ge(e) {
        return {
          encode: (n) => {
            if (!Array.isArray(n) || (n.length && "number" !== typeof n[0]))
              throw new Error(
                "alphabet.encode input should be an array of numbers"
              );
            return n.map((n) => {
              if ((Fe(n), n < 0 || n >= e.length))
                throw new Error(
                  `Digit index outside alphabet: ${n} (alphabet: ${e.length})`
                );
              return e[n];
            });
          },
          decode: (n) => {
            if (!Array.isArray(n) || (n.length && "string" !== typeof n[0]))
              throw new Error(
                "alphabet.decode input should be array of strings"
              );
            return n.map((n) => {
              if ("string" !== typeof n)
                throw new Error(`alphabet.decode: not string element=${n}`);
              const t = e.indexOf(n);
              if (-1 === t)
                throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);
              return t;
            });
          },
        };
      }
      function Je() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if ("string" !== typeof e)
          throw new Error("join separator should be string");
        return {
          encode: (n) => {
            if (!Array.isArray(n) || (n.length && "string" !== typeof n[0]))
              throw new Error("join.encode input should be array of strings");
            for (let e of n)
              if ("string" !== typeof e)
                throw new Error(`join.encode: non-string input=${e}`);
            return n.join(e);
          },
          decode: (n) => {
            if ("string" !== typeof n)
              throw new Error("join.decode input should be string");
            return n.split(e);
          },
        };
      }
      function Ze(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "=";
        if ((Fe(e), "string" !== typeof n))
          throw new Error("padding chr should be string");
        return {
          encode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings"
              );
            for (let e of t)
              if ("string" !== typeof e)
                throw new Error(`padding.encode: non-string input=${e}`);
            for (; (t.length * e) % 8; ) t.push(n);
            return t;
          },
          decode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings"
              );
            for (let e of t)
              if ("string" !== typeof e)
                throw new Error(`padding.decode: non-string input=${e}`);
            let r = t.length;
            if ((r * e) % 8)
              throw new Error(
                "Invalid padding: string should have whole number of bytes"
              );
            for (; r > 0 && t[r - 1] === n; r--)
              if (!(((r - 1) * e) % 8))
                throw new Error("Invalid padding: string has too much padding");
            return t.slice(0, r);
          },
        };
      }
      function Ye(e) {
        if ("function" !== typeof e)
          throw new Error("normalize fn should be function");
        return { encode: (e) => e, decode: (n) => e(n) };
      }
      function Qe(e, n, t) {
        if (n < 2)
          throw new Error(
            `convertRadix: wrong from=${n}, base cannot be less than 2`
          );
        if (t < 2)
          throw new Error(
            `convertRadix: wrong to=${t}, base cannot be less than 2`
          );
        if (!Array.isArray(e))
          throw new Error("convertRadix: data should be array");
        if (!e.length) return [];
        let r = 0;
        const i = [],
          o = Array.from(e);
        for (
          o.forEach((e) => {
            if ((Fe(e), e < 0 || e >= n))
              throw new Error(`Wrong integer: ${e}`);
          });
          ;

        ) {
          let e = 0,
            s = !0;
          for (let i = r; i < o.length; i++) {
            const a = o[i],
              c = n * e + a;
            if (
              !Number.isSafeInteger(c) ||
              (n * e) / n !== e ||
              c - a !== n * e
            )
              throw new Error("convertRadix: carry overflow");
            if (
              ((e = c % t),
              (o[i] = Math.floor(c / t)),
              !Number.isSafeInteger(o[i]) || o[i] * t + e !== c)
            )
              throw new Error("convertRadix: carry overflow");
            s && (o[i] ? (s = !1) : (r = i));
          }
          if ((i.push(e), s)) break;
        }
        for (let s = 0; s < e.length - 1 && 0 === e[s]; s++) i.push(0);
        return i.reverse();
      }
      const Xe = (e, n) => (n ? Xe(n, e % n) : e),
        en = (e, n) => e + (n - Xe(e, n));
      function nn(e, n, t, r) {
        if (!Array.isArray(e))
          throw new Error("convertRadix2: data should be array");
        if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong from=${n}`);
        if (t <= 0 || t > 32) throw new Error(`convertRadix2: wrong to=${t}`);
        if (en(n, t) > 32)
          throw new Error(
            `convertRadix2: carry overflow from=${n} to=${t} carryBits=${en(
              n,
              t
            )}`
          );
        let i = 0,
          o = 0;
        const s = 2 ** t - 1,
          a = [];
        for (const c of e) {
          if ((Fe(c), c >= 2 ** n))
            throw new Error(`convertRadix2: invalid data word=${c} from=${n}`);
          if (((i = (i << n) | c), o + n > 32))
            throw new Error(`convertRadix2: carry overflow pos=${o} from=${n}`);
          for (o += n; o >= t; o -= t) a.push(((i >> (o - t)) & s) >>> 0);
          i &= 2 ** o - 1;
        }
        if (((i = (i << (t - o)) & s), !r && o >= n))
          throw new Error("Excess padding");
        if (!r && i) throw new Error(`Non-zero padding: ${i}`);
        return r && o > 0 && a.push(i >>> 0), a;
      }
      function tn(e) {
        return (
          Fe(e),
          {
            encode: (n) => {
              if (!(n instanceof Uint8Array))
                throw new Error("radix.encode input should be Uint8Array");
              return Qe(Array.from(n), 256, e);
            },
            decode: (n) => {
              if (!Array.isArray(n) || (n.length && "number" !== typeof n[0]))
                throw new Error(
                  "radix.decode input should be array of strings"
                );
              return Uint8Array.from(Qe(n, e, 256));
            },
          }
        );
      }
      function rn(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((Fe(e), e <= 0 || e > 32))
          throw new Error("radix2: bits should be in (0..32]");
        if (en(8, e) > 32 || en(e, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (t) => {
            if (!(t instanceof Uint8Array))
              throw new Error("radix2.encode input should be Uint8Array");
            return nn(Array.from(t), 8, e, !n);
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" !== typeof t[0]))
              throw new Error("radix2.decode input should be array of strings");
            return Uint8Array.from(nn(t, e, 8, n));
          },
        };
      }
      function on(e) {
        if ("function" !== typeof e)
          throw new Error("unsafeWrapper fn should be function");
        return function () {
          try {
            for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
              t[r] = arguments[r];
            return e.apply(null, t);
          } catch (i) {}
        };
      }
      const sn = Ve(rn(4), Ge("0123456789ABCDEF"), Je("")),
        an = Ve(rn(5), Ge("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), Ze(5), Je("")),
        cn =
          (Ve(rn(5), Ge("0123456789ABCDEFGHIJKLMNOPQRSTUV"), Ze(5), Je("")),
          Ve(
            rn(5),
            Ge("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
            Je(""),
            Ye((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))
          ),
          Ve(
            rn(6),
            Ge(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            ),
            Ze(6),
            Je("")
          )),
        ln = Ve(
          rn(6),
          Ge(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
          ),
          Ze(6),
          Je("")
        ),
        dn = (e) => Ve(tn(58), Ge(e), Je("")),
        un = dn("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
        hn =
          (dn("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),
          dn("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),
          [0, 2, 3, 5, 6, 7, 9, 10, 11]),
        fn = {
          encode(e) {
            let n = "";
            for (let t = 0; t < e.length; t += 8) {
              const r = e.subarray(t, t + 8);
              n += un.encode(r).padStart(hn[r.length], "1");
            }
            return n;
          },
          decode(e) {
            let n = [];
            for (let t = 0; t < e.length; t += 11) {
              const r = e.slice(t, t + 11),
                i = hn.indexOf(r.length),
                o = un.decode(r);
              for (let e = 0; e < o.length - i; e++)
                if (0 !== o[e]) throw new Error("base58xmr: wrong padding");
              n = n.concat(Array.from(o.slice(o.length - i)));
            }
            return Uint8Array.from(n);
          },
        },
        gn = Ve(Ge("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), Je("")),
        pn = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function wn(e) {
        const n = e >> 25;
        let t = (33554431 & e) << 5;
        for (let r = 0; r < pn.length; r++)
          1 === ((n >> r) & 1) && (t ^= pn[r]);
        return t;
      }
      function vn(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        const r = e.length;
        let i = 1;
        for (let o = 0; o < r; o++) {
          const n = e.charCodeAt(o);
          if (n < 33 || n > 126) throw new Error(`Invalid prefix (${e})`);
          i = wn(i) ^ (n >> 5);
        }
        i = wn(i);
        for (let o = 0; o < r; o++) i = wn(i) ^ (31 & e.charCodeAt(o));
        for (let o of n) i = wn(i) ^ o;
        for (let o = 0; o < 6; o++) i = wn(i);
        return (i ^= t), gn.encode(nn([i % 2 ** 30], 30, 5, !1));
      }
      function yn(e) {
        const n = "bech32" === e ? 1 : 734539939,
          t = rn(5),
          r = t.decode,
          i = t.encode,
          o = on(r);
        function s(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 90;
          if ("string" !== typeof e)
            throw new Error(
              "bech32.decode input should be string, not " + typeof e
            );
          if (e.length < 8 || (!1 !== t && e.length > t))
            throw new TypeError(
              `Wrong string length: ${e.length} (${e}). Expected (8..${t})`
            );
          const r = e.toLowerCase();
          if (e !== r && e !== e.toUpperCase())
            throw new Error("String must be lowercase or uppercase");
          const i = (e = r).lastIndexOf("1");
          if (0 === i || -1 === i)
            throw new Error(
              'Letter "1" must be present between prefix and data only'
            );
          const o = e.slice(0, i),
            s = e.slice(i + 1);
          if (s.length < 6)
            throw new Error("Data must be at least 6 characters long");
          const a = gn.decode(s).slice(0, -6),
            c = vn(o, a, n);
          if (!s.endsWith(c))
            throw new Error(`Invalid checksum in ${e}: expected "${c}"`);
          return { prefix: o, words: a };
        }
        return {
          encode: function (e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 90;
            if ("string" !== typeof e)
              throw new Error(
                "bech32.encode prefix should be string, not " + typeof e
              );
            if (!Array.isArray(t) || (t.length && "number" !== typeof t[0]))
              throw new Error(
                "bech32.encode words should be array of numbers, not " +
                  typeof t
              );
            const i = e.length + 7 + t.length;
            if (!1 !== r && i > r)
              throw new TypeError(`Length ${i} exceeds limit ${r}`);
            return `${(e = e.toLowerCase())}1${gn.encode(t)}${vn(e, t, n)}`;
          },
          decode: s,
          decodeToBytes: function (e) {
            const { prefix: n, words: t } = s(e, !1);
            return { prefix: n, words: t, bytes: r(t) };
          },
          decodeUnsafe: on(s),
          fromWords: r,
          fromWordsUnsafe: o,
          toWords: i,
        };
      }
      const mn = yn("bech32"),
        bn =
          (yn("bech32m"),
          {
            encode: (e) => new TextDecoder().decode(e),
            decode: (e) => new TextEncoder().encode(e),
          }),
        En =
          (Ve(
            rn(4),
            Ge("0123456789abcdef"),
            Je(""),
            Ye((e) => {
              if ("string" !== typeof e || e.length % 2)
                throw new TypeError(
                  `hex.decode: expected string, got ${typeof e} with length ${
                    e.length
                  }`
                );
              return e.toLowerCase();
            })
          ),
          "abandon\nability\nable\nabout\nabove\nabsent\nabsorb\nabstract\nabsurd\nabuse\naccess\naccident\naccount\naccuse\nachieve\nacid\nacoustic\nacquire\nacross\nact\naction\nactor\nactress\nactual\nadapt\nadd\naddict\naddress\nadjust\nadmit\nadult\nadvance\nadvice\naerobic\naffair\nafford\nafraid\nagain\nage\nagent\nagree\nahead\naim\nair\nairport\naisle\nalarm\nalbum\nalcohol\nalert\nalien\nall\nalley\nallow\nalmost\nalone\nalpha\nalready\nalso\nalter\nalways\namateur\namazing\namong\namount\namused\nanalyst\nanchor\nancient\nanger\nangle\nangry\nanimal\nankle\nannounce\nannual\nanother\nanswer\nantenna\nantique\nanxiety\nany\napart\napology\nappear\napple\napprove\napril\narch\narctic\narea\narena\nargue\narm\narmed\narmor\narmy\naround\narrange\narrest\narrive\narrow\nart\nartefact\nartist\nartwork\nask\naspect\nassault\nasset\nassist\nassume\nasthma\nathlete\natom\nattack\nattend\nattitude\nattract\nauction\naudit\naugust\naunt\nauthor\nauto\nautumn\naverage\navocado\navoid\nawake\naware\naway\nawesome\nawful\nawkward\naxis\nbaby\nbachelor\nbacon\nbadge\nbag\nbalance\nbalcony\nball\nbamboo\nbanana\nbanner\nbar\nbarely\nbargain\nbarrel\nbase\nbasic\nbasket\nbattle\nbeach\nbean\nbeauty\nbecause\nbecome\nbeef\nbefore\nbegin\nbehave\nbehind\nbelieve\nbelow\nbelt\nbench\nbenefit\nbest\nbetray\nbetter\nbetween\nbeyond\nbicycle\nbid\nbike\nbind\nbiology\nbird\nbirth\nbitter\nblack\nblade\nblame\nblanket\nblast\nbleak\nbless\nblind\nblood\nblossom\nblouse\nblue\nblur\nblush\nboard\nboat\nbody\nboil\nbomb\nbone\nbonus\nbook\nboost\nborder\nboring\nborrow\nboss\nbottom\nbounce\nbox\nboy\nbracket\nbrain\nbrand\nbrass\nbrave\nbread\nbreeze\nbrick\nbridge\nbrief\nbright\nbring\nbrisk\nbroccoli\nbroken\nbronze\nbroom\nbrother\nbrown\nbrush\nbubble\nbuddy\nbudget\nbuffalo\nbuild\nbulb\nbulk\nbullet\nbundle\nbunker\nburden\nburger\nburst\nbus\nbusiness\nbusy\nbutter\nbuyer\nbuzz\ncabbage\ncabin\ncable\ncactus\ncage\ncake\ncall\ncalm\ncamera\ncamp\ncan\ncanal\ncancel\ncandy\ncannon\ncanoe\ncanvas\ncanyon\ncapable\ncapital\ncaptain\ncar\ncarbon\ncard\ncargo\ncarpet\ncarry\ncart\ncase\ncash\ncasino\ncastle\ncasual\ncat\ncatalog\ncatch\ncategory\ncattle\ncaught\ncause\ncaution\ncave\nceiling\ncelery\ncement\ncensus\ncentury\ncereal\ncertain\nchair\nchalk\nchampion\nchange\nchaos\nchapter\ncharge\nchase\nchat\ncheap\ncheck\ncheese\nchef\ncherry\nchest\nchicken\nchief\nchild\nchimney\nchoice\nchoose\nchronic\nchuckle\nchunk\nchurn\ncigar\ncinnamon\ncircle\ncitizen\ncity\ncivil\nclaim\nclap\nclarify\nclaw\nclay\nclean\nclerk\nclever\nclick\nclient\ncliff\nclimb\nclinic\nclip\nclock\nclog\nclose\ncloth\ncloud\nclown\nclub\nclump\ncluster\nclutch\ncoach\ncoast\ncoconut\ncode\ncoffee\ncoil\ncoin\ncollect\ncolor\ncolumn\ncombine\ncome\ncomfort\ncomic\ncommon\ncompany\nconcert\nconduct\nconfirm\ncongress\nconnect\nconsider\ncontrol\nconvince\ncook\ncool\ncopper\ncopy\ncoral\ncore\ncorn\ncorrect\ncost\ncotton\ncouch\ncountry\ncouple\ncourse\ncousin\ncover\ncoyote\ncrack\ncradle\ncraft\ncram\ncrane\ncrash\ncrater\ncrawl\ncrazy\ncream\ncredit\ncreek\ncrew\ncricket\ncrime\ncrisp\ncritic\ncrop\ncross\ncrouch\ncrowd\ncrucial\ncruel\ncruise\ncrumble\ncrunch\ncrush\ncry\ncrystal\ncube\nculture\ncup\ncupboard\ncurious\ncurrent\ncurtain\ncurve\ncushion\ncustom\ncute\ncycle\ndad\ndamage\ndamp\ndance\ndanger\ndaring\ndash\ndaughter\ndawn\nday\ndeal\ndebate\ndebris\ndecade\ndecember\ndecide\ndecline\ndecorate\ndecrease\ndeer\ndefense\ndefine\ndefy\ndegree\ndelay\ndeliver\ndemand\ndemise\ndenial\ndentist\ndeny\ndepart\ndepend\ndeposit\ndepth\ndeputy\nderive\ndescribe\ndesert\ndesign\ndesk\ndespair\ndestroy\ndetail\ndetect\ndevelop\ndevice\ndevote\ndiagram\ndial\ndiamond\ndiary\ndice\ndiesel\ndiet\ndiffer\ndigital\ndignity\ndilemma\ndinner\ndinosaur\ndirect\ndirt\ndisagree\ndiscover\ndisease\ndish\ndismiss\ndisorder\ndisplay\ndistance\ndivert\ndivide\ndivorce\ndizzy\ndoctor\ndocument\ndog\ndoll\ndolphin\ndomain\ndonate\ndonkey\ndonor\ndoor\ndose\ndouble\ndove\ndraft\ndragon\ndrama\ndrastic\ndraw\ndream\ndress\ndrift\ndrill\ndrink\ndrip\ndrive\ndrop\ndrum\ndry\nduck\ndumb\ndune\nduring\ndust\ndutch\nduty\ndwarf\ndynamic\neager\neagle\nearly\nearn\nearth\neasily\neast\neasy\necho\necology\neconomy\nedge\nedit\neducate\neffort\negg\neight\neither\nelbow\nelder\nelectric\nelegant\nelement\nelephant\nelevator\nelite\nelse\nembark\nembody\nembrace\nemerge\nemotion\nemploy\nempower\nempty\nenable\nenact\nend\nendless\nendorse\nenemy\nenergy\nenforce\nengage\nengine\nenhance\nenjoy\nenlist\nenough\nenrich\nenroll\nensure\nenter\nentire\nentry\nenvelope\nepisode\nequal\nequip\nera\nerase\nerode\nerosion\nerror\nerupt\nescape\nessay\nessence\nestate\neternal\nethics\nevidence\nevil\nevoke\nevolve\nexact\nexample\nexcess\nexchange\nexcite\nexclude\nexcuse\nexecute\nexercise\nexhaust\nexhibit\nexile\nexist\nexit\nexotic\nexpand\nexpect\nexpire\nexplain\nexpose\nexpress\nextend\nextra\neye\neyebrow\nfabric\nface\nfaculty\nfade\nfaint\nfaith\nfall\nfalse\nfame\nfamily\nfamous\nfan\nfancy\nfantasy\nfarm\nfashion\nfat\nfatal\nfather\nfatigue\nfault\nfavorite\nfeature\nfebruary\nfederal\nfee\nfeed\nfeel\nfemale\nfence\nfestival\nfetch\nfever\nfew\nfiber\nfiction\nfield\nfigure\nfile\nfilm\nfilter\nfinal\nfind\nfine\nfinger\nfinish\nfire\nfirm\nfirst\nfiscal\nfish\nfit\nfitness\nfix\nflag\nflame\nflash\nflat\nflavor\nflee\nflight\nflip\nfloat\nflock\nfloor\nflower\nfluid\nflush\nfly\nfoam\nfocus\nfog\nfoil\nfold\nfollow\nfood\nfoot\nforce\nforest\nforget\nfork\nfortune\nforum\nforward\nfossil\nfoster\nfound\nfox\nfragile\nframe\nfrequent\nfresh\nfriend\nfringe\nfrog\nfront\nfrost\nfrown\nfrozen\nfruit\nfuel\nfun\nfunny\nfurnace\nfury\nfuture\ngadget\ngain\ngalaxy\ngallery\ngame\ngap\ngarage\ngarbage\ngarden\ngarlic\ngarment\ngas\ngasp\ngate\ngather\ngauge\ngaze\ngeneral\ngenius\ngenre\ngentle\ngenuine\ngesture\nghost\ngiant\ngift\ngiggle\nginger\ngiraffe\ngirl\ngive\nglad\nglance\nglare\nglass\nglide\nglimpse\nglobe\ngloom\nglory\nglove\nglow\nglue\ngoat\ngoddess\ngold\ngood\ngoose\ngorilla\ngospel\ngossip\ngovern\ngown\ngrab\ngrace\ngrain\ngrant\ngrape\ngrass\ngravity\ngreat\ngreen\ngrid\ngrief\ngrit\ngrocery\ngroup\ngrow\ngrunt\nguard\nguess\nguide\nguilt\nguitar\ngun\ngym\nhabit\nhair\nhalf\nhammer\nhamster\nhand\nhappy\nharbor\nhard\nharsh\nharvest\nhat\nhave\nhawk\nhazard\nhead\nhealth\nheart\nheavy\nhedgehog\nheight\nhello\nhelmet\nhelp\nhen\nhero\nhidden\nhigh\nhill\nhint\nhip\nhire\nhistory\nhobby\nhockey\nhold\nhole\nholiday\nhollow\nhome\nhoney\nhood\nhope\nhorn\nhorror\nhorse\nhospital\nhost\nhotel\nhour\nhover\nhub\nhuge\nhuman\nhumble\nhumor\nhundred\nhungry\nhunt\nhurdle\nhurry\nhurt\nhusband\nhybrid\nice\nicon\nidea\nidentify\nidle\nignore\nill\nillegal\nillness\nimage\nimitate\nimmense\nimmune\nimpact\nimpose\nimprove\nimpulse\ninch\ninclude\nincome\nincrease\nindex\nindicate\nindoor\nindustry\ninfant\ninflict\ninform\ninhale\ninherit\ninitial\ninject\ninjury\ninmate\ninner\ninnocent\ninput\ninquiry\ninsane\ninsect\ninside\ninspire\ninstall\nintact\ninterest\ninto\ninvest\ninvite\ninvolve\niron\nisland\nisolate\nissue\nitem\nivory\njacket\njaguar\njar\njazz\njealous\njeans\njelly\njewel\njob\njoin\njoke\njourney\njoy\njudge\njuice\njump\njungle\njunior\njunk\njust\nkangaroo\nkeen\nkeep\nketchup\nkey\nkick\nkid\nkidney\nkind\nkingdom\nkiss\nkit\nkitchen\nkite\nkitten\nkiwi\nknee\nknife\nknock\nknow\nlab\nlabel\nlabor\nladder\nlady\nlake\nlamp\nlanguage\nlaptop\nlarge\nlater\nlatin\nlaugh\nlaundry\nlava\nlaw\nlawn\nlawsuit\nlayer\nlazy\nleader\nleaf\nlearn\nleave\nlecture\nleft\nleg\nlegal\nlegend\nleisure\nlemon\nlend\nlength\nlens\nleopard\nlesson\nletter\nlevel\nliar\nliberty\nlibrary\nlicense\nlife\nlift\nlight\nlike\nlimb\nlimit\nlink\nlion\nliquid\nlist\nlittle\nlive\nlizard\nload\nloan\nlobster\nlocal\nlock\nlogic\nlonely\nlong\nloop\nlottery\nloud\nlounge\nlove\nloyal\nlucky\nluggage\nlumber\nlunar\nlunch\nluxury\nlyrics\nmachine\nmad\nmagic\nmagnet\nmaid\nmail\nmain\nmajor\nmake\nmammal\nman\nmanage\nmandate\nmango\nmansion\nmanual\nmaple\nmarble\nmarch\nmargin\nmarine\nmarket\nmarriage\nmask\nmass\nmaster\nmatch\nmaterial\nmath\nmatrix\nmatter\nmaximum\nmaze\nmeadow\nmean\nmeasure\nmeat\nmechanic\nmedal\nmedia\nmelody\nmelt\nmember\nmemory\nmention\nmenu\nmercy\nmerge\nmerit\nmerry\nmesh\nmessage\nmetal\nmethod\nmiddle\nmidnight\nmilk\nmillion\nmimic\nmind\nminimum\nminor\nminute\nmiracle\nmirror\nmisery\nmiss\nmistake\nmix\nmixed\nmixture\nmobile\nmodel\nmodify\nmom\nmoment\nmonitor\nmonkey\nmonster\nmonth\nmoon\nmoral\nmore\nmorning\nmosquito\nmother\nmotion\nmotor\nmountain\nmouse\nmove\nmovie\nmuch\nmuffin\nmule\nmultiply\nmuscle\nmuseum\nmushroom\nmusic\nmust\nmutual\nmyself\nmystery\nmyth\nnaive\nname\nnapkin\nnarrow\nnasty\nnation\nnature\nnear\nneck\nneed\nnegative\nneglect\nneither\nnephew\nnerve\nnest\nnet\nnetwork\nneutral\nnever\nnews\nnext\nnice\nnight\nnoble\nnoise\nnominee\nnoodle\nnormal\nnorth\nnose\nnotable\nnote\nnothing\nnotice\nnovel\nnow\nnuclear\nnumber\nnurse\nnut\noak\nobey\nobject\noblige\nobscure\nobserve\nobtain\nobvious\noccur\nocean\noctober\nodor\noff\noffer\noffice\noften\noil\nokay\nold\nolive\nolympic\nomit\nonce\none\nonion\nonline\nonly\nopen\nopera\nopinion\noppose\noption\norange\norbit\norchard\norder\nordinary\norgan\norient\noriginal\norphan\nostrich\nother\noutdoor\nouter\noutput\noutside\noval\noven\nover\nown\nowner\noxygen\noyster\nozone\npact\npaddle\npage\npair\npalace\npalm\npanda\npanel\npanic\npanther\npaper\nparade\nparent\npark\nparrot\nparty\npass\npatch\npath\npatient\npatrol\npattern\npause\npave\npayment\npeace\npeanut\npear\npeasant\npelican\npen\npenalty\npencil\npeople\npepper\nperfect\npermit\nperson\npet\nphone\nphoto\nphrase\nphysical\npiano\npicnic\npicture\npiece\npig\npigeon\npill\npilot\npink\npioneer\npipe\npistol\npitch\npizza\nplace\nplanet\nplastic\nplate\nplay\nplease\npledge\npluck\nplug\nplunge\npoem\npoet\npoint\npolar\npole\npolice\npond\npony\npool\npopular\nportion\nposition\npossible\npost\npotato\npottery\npoverty\npowder\npower\npractice\npraise\npredict\nprefer\nprepare\npresent\npretty\nprevent\nprice\npride\nprimary\nprint\npriority\nprison\nprivate\nprize\nproblem\nprocess\nproduce\nprofit\nprogram\nproject\npromote\nproof\nproperty\nprosper\nprotect\nproud\nprovide\npublic\npudding\npull\npulp\npulse\npumpkin\npunch\npupil\npuppy\npurchase\npurity\npurpose\npurse\npush\nput\npuzzle\npyramid\nquality\nquantum\nquarter\nquestion\nquick\nquit\nquiz\nquote\nrabbit\nraccoon\nrace\nrack\nradar\nradio\nrail\nrain\nraise\nrally\nramp\nranch\nrandom\nrange\nrapid\nrare\nrate\nrather\nraven\nraw\nrazor\nready\nreal\nreason\nrebel\nrebuild\nrecall\nreceive\nrecipe\nrecord\nrecycle\nreduce\nreflect\nreform\nrefuse\nregion\nregret\nregular\nreject\nrelax\nrelease\nrelief\nrely\nremain\nremember\nremind\nremove\nrender\nrenew\nrent\nreopen\nrepair\nrepeat\nreplace\nreport\nrequire\nrescue\nresemble\nresist\nresource\nresponse\nresult\nretire\nretreat\nreturn\nreunion\nreveal\nreview\nreward\nrhythm\nrib\nribbon\nrice\nrich\nride\nridge\nrifle\nright\nrigid\nring\nriot\nripple\nrisk\nritual\nrival\nriver\nroad\nroast\nrobot\nrobust\nrocket\nromance\nroof\nrookie\nroom\nrose\nrotate\nrough\nround\nroute\nroyal\nrubber\nrude\nrug\nrule\nrun\nrunway\nrural\nsad\nsaddle\nsadness\nsafe\nsail\nsalad\nsalmon\nsalon\nsalt\nsalute\nsame\nsample\nsand\nsatisfy\nsatoshi\nsauce\nsausage\nsave\nsay\nscale\nscan\nscare\nscatter\nscene\nscheme\nschool\nscience\nscissors\nscorpion\nscout\nscrap\nscreen\nscript\nscrub\nsea\nsearch\nseason\nseat\nsecond\nsecret\nsection\nsecurity\nseed\nseek\nsegment\nselect\nsell\nseminar\nsenior\nsense\nsentence\nseries\nservice\nsession\nsettle\nsetup\nseven\nshadow\nshaft\nshallow\nshare\nshed\nshell\nsheriff\nshield\nshift\nshine\nship\nshiver\nshock\nshoe\nshoot\nshop\nshort\nshoulder\nshove\nshrimp\nshrug\nshuffle\nshy\nsibling\nsick\nside\nsiege\nsight\nsign\nsilent\nsilk\nsilly\nsilver\nsimilar\nsimple\nsince\nsing\nsiren\nsister\nsituate\nsix\nsize\nskate\nsketch\nski\nskill\nskin\nskirt\nskull\nslab\nslam\nsleep\nslender\nslice\nslide\nslight\nslim\nslogan\nslot\nslow\nslush\nsmall\nsmart\nsmile\nsmoke\nsmooth\nsnack\nsnake\nsnap\nsniff\nsnow\nsoap\nsoccer\nsocial\nsock\nsoda\nsoft\nsolar\nsoldier\nsolid\nsolution\nsolve\nsomeone\nsong\nsoon\nsorry\nsort\nsoul\nsound\nsoup\nsource\nsouth\nspace\nspare\nspatial\nspawn\nspeak\nspecial\nspeed\nspell\nspend\nsphere\nspice\nspider\nspike\nspin\nspirit\nsplit\nspoil\nsponsor\nspoon\nsport\nspot\nspray\nspread\nspring\nspy\nsquare\nsqueeze\nsquirrel\nstable\nstadium\nstaff\nstage\nstairs\nstamp\nstand\nstart\nstate\nstay\nsteak\nsteel\nstem\nstep\nstereo\nstick\nstill\nsting\nstock\nstomach\nstone\nstool\nstory\nstove\nstrategy\nstreet\nstrike\nstrong\nstruggle\nstudent\nstuff\nstumble\nstyle\nsubject\nsubmit\nsubway\nsuccess\nsuch\nsudden\nsuffer\nsugar\nsuggest\nsuit\nsummer\nsun\nsunny\nsunset\nsuper\nsupply\nsupreme\nsure\nsurface\nsurge\nsurprise\nsurround\nsurvey\nsuspect\nsustain\nswallow\nswamp\nswap\nswarm\nswear\nsweet\nswift\nswim\nswing\nswitch\nsword\nsymbol\nsymptom\nsyrup\nsystem\ntable\ntackle\ntag\ntail\ntalent\ntalk\ntank\ntape\ntarget\ntask\ntaste\ntattoo\ntaxi\nteach\nteam\ntell\nten\ntenant\ntennis\ntent\nterm\ntest\ntext\nthank\nthat\ntheme\nthen\ntheory\nthere\nthey\nthing\nthis\nthought\nthree\nthrive\nthrow\nthumb\nthunder\nticket\ntide\ntiger\ntilt\ntimber\ntime\ntiny\ntip\ntired\ntissue\ntitle\ntoast\ntobacco\ntoday\ntoddler\ntoe\ntogether\ntoilet\ntoken\ntomato\ntomorrow\ntone\ntongue\ntonight\ntool\ntooth\ntop\ntopic\ntopple\ntorch\ntornado\ntortoise\ntoss\ntotal\ntourist\ntoward\ntower\ntown\ntoy\ntrack\ntrade\ntraffic\ntragic\ntrain\ntransfer\ntrap\ntrash\ntravel\ntray\ntreat\ntree\ntrend\ntrial\ntribe\ntrick\ntrigger\ntrim\ntrip\ntrophy\ntrouble\ntruck\ntrue\ntruly\ntrumpet\ntrust\ntruth\ntry\ntube\ntuition\ntumble\ntuna\ntunnel\nturkey\nturn\nturtle\ntwelve\ntwenty\ntwice\ntwin\ntwist\ntwo\ntype\ntypical\nugly\numbrella\nunable\nunaware\nuncle\nuncover\nunder\nundo\nunfair\nunfold\nunhappy\nuniform\nunique\nunit\nuniverse\nunknown\nunlock\nuntil\nunusual\nunveil\nupdate\nupgrade\nuphold\nupon\nupper\nupset\nurban\nurge\nusage\nuse\nused\nuseful\nuseless\nusual\nutility\nvacant\nvacuum\nvague\nvalid\nvalley\nvalve\nvan\nvanish\nvapor\nvarious\nvast\nvault\nvehicle\nvelvet\nvendor\nventure\nvenue\nverb\nverify\nversion\nvery\nvessel\nveteran\nviable\nvibrant\nvicious\nvictory\nvideo\nview\nvillage\nvintage\nviolin\nvirtual\nvirus\nvisa\nvisit\nvisual\nvital\nvivid\nvocal\nvoice\nvoid\nvolcano\nvolume\nvote\nvoyage\nwage\nwagon\nwait\nwalk\nwall\nwalnut\nwant\nwarfare\nwarm\nwarrior\nwash\nwasp\nwaste\nwater\nwave\nway\nwealth\nweapon\nwear\nweasel\nweather\nweb\nwedding\nweekend\nweird\nwelcome\nwest\nwet\nwhale\nwhat\nwheat\nwheel\nwhen\nwhere\nwhip\nwhisper\nwide\nwidth\nwife\nwild\nwill\nwin\nwindow\nwine\nwing\nwink\nwinner\nwinter\nwire\nwisdom\nwise\nwish\nwitness\nwolf\nwoman\nwonder\nwood\nwool\nword\nwork\nworld\nworry\nworth\nwrap\nwreck\nwrestle\nwrist\nwrite\nwrong\nyard\nyear\nyellow\nyou\nyoung\nyouth\nzebra\nzero\nzone\nzoo".split(
            "\n"
          ));
      function Cn(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error(`Wrong positive integer: ${e}`);
      }
      function An(e) {
        if (
          !(
            (n = e) instanceof Uint8Array ||
            (null != n &&
              "object" === typeof n &&
              "Uint8Array" === n.constructor.name)
          )
        )
          throw new Error("Expected Uint8Array");
        for (
          var n, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            `Expected Uint8Array of length ${r}, not of length=${e.length}`
          );
      }
      function In(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        Cn(e.outputLen), Cn(e.blockLen);
      }
      function xn(e) {
        let n =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (n && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function kn(e, n) {
        An(e);
        const t = n.outputLen;
        if (e.length < t)
          throw new Error(
            `digestInto() expects output buffer of length at least ${t}`
          );
      }
      const Sn = {
          number: Cn,
          bool: function (e) {
            if ("boolean" !== typeof e)
              throw new Error(`Expected boolean, not ${e}`);
          },
          bytes: An,
          hash: In,
          exists: xn,
          output: kn,
        },
        Nn =
          "object" === typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0;
      function Tn(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" === typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      const Un = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        _n = (e, n) => (e << (32 - n)) | (e >>> n);
      if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
        throw new Error("Non little-endian hardware is not supported");
      function Pn(e) {
        if (
          ("string" === typeof e &&
            (e = (function (e) {
              if ("string" !== typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !Tn(e))
        )
          throw new Error("expected Uint8Array, got " + typeof e);
        return e;
      }
      class Ln {
        clone() {
          return this._cloneInto();
        }
      }
      const On = {}.toString;
      function Bn(e) {
        const n = (n) => e().update(Pn(n)).digest(),
          t = e();
        return (
          (n.outputLen = t.outputLen),
          (n.blockLen = t.blockLen),
          (n.create = () => e()),
          n
        );
      }
      class Rn extends Ln {
        constructor(e, n) {
          super(), (this.finished = !1), (this.destroyed = !1), In(e);
          const t = Pn(n);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new Error(
              "Expected instance of class which extends utils.Hash"
            );
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const r = this.blockLen,
            i = new Uint8Array(r);
          i.set(t.length > r ? e.create().update(t).digest() : t);
          for (let o = 0; o < i.length; o++) i[o] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let o = 0; o < i.length; o++) i[o] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return xn(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          xn(this),
            An(e, this.outputLen),
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
            oHash: n,
            iHash: t,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = s),
            (e.oHash = n._cloneInto(e.oHash)),
            (e.iHash = t._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      const Hn = (e, n, t) => new Rn(e, n).update(t).digest();
      function Mn(e, n, t, r) {
        In(e);
        const i = (function (e, n) {
            if (void 0 !== n && "[object Object]" !== On.call(n))
              throw new Error("Options should be object or undefined");
            return Object.assign(e, n);
          })({ dkLen: 32, asyncTick: 10 }, r),
          { c: o, dkLen: s, asyncTick: a } = i;
        if ((Cn(o), Cn(s), Cn(a), o < 1))
          throw new Error("PBKDF2: iterations (c) should be >= 1");
        const c = Pn(n),
          l = Pn(t),
          d = new Uint8Array(s),
          u = Hn.create(e, c),
          h = u._cloneInto().update(l);
        return { c: o, dkLen: s, asyncTick: a, DK: d, PRF: u, PRFSalt: h };
      }
      function jn(e, n, t, r, i) {
        return e.destroy(), n.destroy(), r && r.destroy(), i.fill(0), t;
      }
      Hn.create = (e, n) => new Rn(e, n);
      class Dn extends Ln {
        constructor(e, n, t, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = n),
            (this.padOffset = t),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = Un(this.buffer));
        }
        update(e) {
          xn(this);
          const { view: n, buffer: t, blockLen: r } = this,
            i = (e = Pn(e)).length;
          for (let o = 0; o < i; ) {
            const s = Math.min(r - this.pos, i - o);
            if (s !== r)
              t.set(e.subarray(o, o + s), this.pos),
                (this.pos += s),
                (o += s),
                this.pos === r && (this.process(n, 0), (this.pos = 0));
            else {
              const n = Un(e);
              for (; r <= i - o; o += r) this.process(n, o);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          xn(this), kn(e, this), (this.finished = !0);
          const { buffer: n, view: t, blockLen: r, isLE: i } = this;
          let { pos: o } = this;
          (n[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > r - o && (this.process(t, 0), (o = 0));
          for (let d = o; d < r; d++) n[d] = 0;
          !(function (e, n, t, r) {
            if ("function" === typeof e.setBigUint64)
              return e.setBigUint64(n, t, r);
            const i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((t >> i) & o),
              a = Number(t & o),
              c = r ? 4 : 0,
              l = r ? 0 : 4;
            e.setUint32(n + c, s, r), e.setUint32(n + l, a, r);
          })(t, r - 8, BigInt(8 * this.length), i),
            this.process(t, 0);
          const s = Un(e),
            a = this.outputLen;
          if (a % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const c = a / 4,
            l = this.get();
          if (c > l.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let d = 0; d < c; d++) s.setUint32(4 * d, l[d], i);
        }
        digest() {
          const { buffer: e, outputLen: n } = this;
          this.digestInto(e);
          const t = e.slice(0, n);
          return this.destroy(), t;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const {
            blockLen: n,
            buffer: t,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = i),
            (e.destroyed = o),
            r % n && e.buffer.set(t),
            e
          );
        }
      }
      const $n = (e, n, t) => (e & n) ^ (e & t) ^ (n & t),
        qn = new Uint32Array([
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
        Kn = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        zn = new Uint32Array(64);
      class Wn extends Dn {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | Kn[0]),
            (this.B = 0 | Kn[1]),
            (this.C = 0 | Kn[2]),
            (this.D = 0 | Kn[3]),
            (this.E = 0 | Kn[4]),
            (this.F = 0 | Kn[5]),
            (this.G = 0 | Kn[6]),
            (this.H = 0 | Kn[7]);
        }
        get() {
          const { A: e, B: n, C: t, D: r, E: i, F: o, G: s, H: a } = this;
          return [e, n, t, r, i, o, s, a];
        }
        set(e, n, t, r, i, o, s, a) {
          (this.A = 0 | e),
            (this.B = 0 | n),
            (this.C = 0 | t),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(e, n) {
          for (let u = 0; u < 16; u++, n += 4) zn[u] = e.getUint32(n, !1);
          for (let u = 16; u < 64; u++) {
            const e = zn[u - 15],
              n = zn[u - 2],
              t = _n(e, 7) ^ _n(e, 18) ^ (e >>> 3),
              r = _n(n, 17) ^ _n(n, 19) ^ (n >>> 10);
            zn[u] = (r + zn[u - 7] + t + zn[u - 16]) | 0;
          }
          let { A: t, B: r, C: i, D: o, E: s, F: a, G: c, H: l } = this;
          for (let u = 0; u < 64; u++) {
            const e =
                (l +
                  (_n(s, 6) ^ _n(s, 11) ^ _n(s, 25)) +
                  (((d = s) & a) ^ (~d & c)) +
                  qn[u] +
                  zn[u]) |
                0,
              n = ((_n(t, 2) ^ _n(t, 13) ^ _n(t, 22)) + $n(t, r, i)) | 0;
            (l = c),
              (c = a),
              (a = s),
              (s = (o + e) | 0),
              (o = i),
              (i = r),
              (r = t),
              (t = (e + n) | 0);
          }
          var d;
          (t = (t + this.A) | 0),
            (r = (r + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (s = (s + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(t, r, i, o, s, a, c, l);
        }
        roundClean() {
          zn.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const Fn = Bn(() => new Wn()),
        Vn = BigInt(2 ** 32 - 1),
        Gn = BigInt(32);
      function Jn(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & Vn), l: Number((e >> Gn) & Vn) }
          : { h: 0 | Number((e >> Gn) & Vn), l: 0 | Number(e & Vn) };
      }
      const Zn = {
          fromBig: Jn,
          split: function (e) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = new Uint32Array(e.length),
              r = new Uint32Array(e.length);
            for (let i = 0; i < e.length; i++) {
              const { h: o, l: s } = Jn(e[i], n);
              [t[i], r[i]] = [o, s];
            }
            return [t, r];
          },
          toBig: (e, n) => (BigInt(e >>> 0) << Gn) | BigInt(n >>> 0),
          shrSH: (e, n, t) => e >>> t,
          shrSL: (e, n, t) => (e << (32 - t)) | (n >>> t),
          rotrSH: (e, n, t) => (e >>> t) | (n << (32 - t)),
          rotrSL: (e, n, t) => (e << (32 - t)) | (n >>> t),
          rotrBH: (e, n, t) => (e << (64 - t)) | (n >>> (t - 32)),
          rotrBL: (e, n, t) => (e >>> (t - 32)) | (n << (64 - t)),
          rotr32H: (e, n) => n,
          rotr32L: (e, n) => e,
          rotlSH: (e, n, t) => (e << t) | (n >>> (32 - t)),
          rotlSL: (e, n, t) => (n << t) | (e >>> (32 - t)),
          rotlBH: (e, n, t) => (n << (t - 32)) | (e >>> (64 - t)),
          rotlBL: (e, n, t) => (e << (t - 32)) | (n >>> (64 - t)),
          add: function (e, n, t, r) {
            const i = (n >>> 0) + (r >>> 0);
            return { h: (e + t + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
          },
          add3L: (e, n, t) => (e >>> 0) + (n >>> 0) + (t >>> 0),
          add3H: (e, n, t, r) => (n + t + r + ((e / 2 ** 32) | 0)) | 0,
          add4L: (e, n, t, r) => (e >>> 0) + (n >>> 0) + (t >>> 0) + (r >>> 0),
          add4H: (e, n, t, r, i) => (n + t + r + i + ((e / 2 ** 32) | 0)) | 0,
          add5H: (e, n, t, r, i, o) =>
            (n + t + r + i + o + ((e / 2 ** 32) | 0)) | 0,
          add5L: (e, n, t, r, i) =>
            (e >>> 0) + (n >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
        },
        [Yn, Qn] = (() =>
          Zn.split(
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
        Xn = new Uint32Array(80),
        et = new Uint32Array(80);
      class nt extends Dn {
        constructor() {
          super(128, 64, 16, !1),
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
            Al: n,
            Bh: t,
            Bl: r,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: c,
            El: l,
            Fh: d,
            Fl: u,
            Gh: h,
            Gl: f,
            Hh: g,
            Hl: p,
          } = this;
          return [e, n, t, r, i, o, s, a, c, l, d, u, h, f, g, p];
        }
        set(e, n, t, r, i, o, s, a, c, l, d, u, h, f, g, p) {
          (this.Ah = 0 | e),
            (this.Al = 0 | n),
            (this.Bh = 0 | t),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | d),
            (this.Fl = 0 | u),
            (this.Gh = 0 | h),
            (this.Gl = 0 | f),
            (this.Hh = 0 | g),
            (this.Hl = 0 | p);
        }
        process(e, n) {
          for (let y = 0; y < 16; y++, n += 4)
            (Xn[y] = e.getUint32(n)), (et[y] = e.getUint32((n += 4)));
          for (let y = 16; y < 80; y++) {
            const e = 0 | Xn[y - 15],
              n = 0 | et[y - 15],
              t = Zn.rotrSH(e, n, 1) ^ Zn.rotrSH(e, n, 8) ^ Zn.shrSH(e, n, 7),
              r = Zn.rotrSL(e, n, 1) ^ Zn.rotrSL(e, n, 8) ^ Zn.shrSL(e, n, 7),
              i = 0 | Xn[y - 2],
              o = 0 | et[y - 2],
              s = Zn.rotrSH(i, o, 19) ^ Zn.rotrBH(i, o, 61) ^ Zn.shrSH(i, o, 6),
              a = Zn.rotrSL(i, o, 19) ^ Zn.rotrBL(i, o, 61) ^ Zn.shrSL(i, o, 6),
              c = Zn.add4L(r, a, et[y - 7], et[y - 16]),
              l = Zn.add4H(c, t, s, Xn[y - 7], Xn[y - 16]);
            (Xn[y] = 0 | l), (et[y] = 0 | c);
          }
          let {
            Ah: t,
            Al: r,
            Bh: i,
            Bl: o,
            Ch: s,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: d,
            El: u,
            Fh: h,
            Fl: f,
            Gh: g,
            Gl: p,
            Hh: w,
            Hl: v,
          } = this;
          for (let y = 0; y < 80; y++) {
            const e =
                Zn.rotrSH(d, u, 14) ^ Zn.rotrSH(d, u, 18) ^ Zn.rotrBH(d, u, 41),
              n =
                Zn.rotrSL(d, u, 14) ^ Zn.rotrSL(d, u, 18) ^ Zn.rotrBL(d, u, 41),
              m = (d & h) ^ (~d & g),
              b = (u & f) ^ (~u & p),
              E = Zn.add5L(v, n, b, Qn[y], et[y]),
              C = Zn.add5H(E, w, e, m, Yn[y], Xn[y]),
              A = 0 | E,
              I =
                Zn.rotrSH(t, r, 28) ^ Zn.rotrBH(t, r, 34) ^ Zn.rotrBH(t, r, 39),
              x =
                Zn.rotrSL(t, r, 28) ^ Zn.rotrBL(t, r, 34) ^ Zn.rotrBL(t, r, 39),
              k = (t & i) ^ (t & s) ^ (i & s),
              S = (r & o) ^ (r & a) ^ (o & a);
            (w = 0 | g),
              (v = 0 | p),
              (g = 0 | h),
              (p = 0 | f),
              (h = 0 | d),
              (f = 0 | u),
              ({ h: d, l: u } = Zn.add(0 | c, 0 | l, 0 | C, 0 | A)),
              (c = 0 | s),
              (l = 0 | a),
              (s = 0 | i),
              (a = 0 | o),
              (i = 0 | t),
              (o = 0 | r);
            const N = Zn.add3L(A, x, S);
            (t = Zn.add3H(N, C, I, k)), (r = 0 | N);
          }
          ({ h: t, l: r } = Zn.add(0 | this.Ah, 0 | this.Al, 0 | t, 0 | r)),
            ({ h: i, l: o } = Zn.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: s, l: a } = Zn.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | a)),
            ({ h: c, l: l } = Zn.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: d, l: u } = Zn.add(0 | this.Eh, 0 | this.El, 0 | d, 0 | u)),
            ({ h: h, l: f } = Zn.add(0 | this.Fh, 0 | this.Fl, 0 | h, 0 | f)),
            ({ h: g, l: p } = Zn.add(0 | this.Gh, 0 | this.Gl, 0 | g, 0 | p)),
            ({ h: w, l: v } = Zn.add(0 | this.Hh, 0 | this.Hl, 0 | w, 0 | v)),
            this.set(t, r, i, o, s, a, c, l, d, u, h, f, g, p, w, v);
        }
        roundClean() {
          Xn.fill(0), et.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      const tt = Bn(() => new nt());
      function rt(e) {
        if (!Number.isSafeInteger(e)) throw new Error(`Wrong integer: ${e}`);
      }
      function it(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" === typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function ot() {
        const e = (e) => e,
          n = (e, n) => (t) => e(n(t));
        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
          r[i] = arguments[i];
        return {
          encode: r.map((e) => e.encode).reduceRight(n, e),
          decode: r.map((e) => e.decode).reduce(n, e),
        };
      }
      function st(e) {
        return {
          encode: (n) => {
            if (!Array.isArray(n) || (n.length && "number" !== typeof n[0]))
              throw new Error(
                "alphabet.encode input should be an array of numbers"
              );
            return n.map((n) => {
              if ((rt(n), n < 0 || n >= e.length))
                throw new Error(
                  `Digit index outside alphabet: ${n} (alphabet: ${e.length})`
                );
              return e[n];
            });
          },
          decode: (n) => {
            if (!Array.isArray(n) || (n.length && "string" !== typeof n[0]))
              throw new Error(
                "alphabet.decode input should be array of strings"
              );
            return n.map((n) => {
              if ("string" !== typeof n)
                throw new Error(`alphabet.decode: not string element=${n}`);
              const t = e.indexOf(n);
              if (-1 === t)
                throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);
              return t;
            });
          },
        };
      }
      function at() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if ("string" !== typeof e)
          throw new Error("join separator should be string");
        return {
          encode: (n) => {
            if (!Array.isArray(n) || (n.length && "string" !== typeof n[0]))
              throw new Error("join.encode input should be array of strings");
            for (let e of n)
              if ("string" !== typeof e)
                throw new Error(`join.encode: non-string input=${e}`);
            return n.join(e);
          },
          decode: (n) => {
            if ("string" !== typeof n)
              throw new Error("join.decode input should be string");
            return n.split(e);
          },
        };
      }
      function ct(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "=";
        if ((rt(e), "string" !== typeof n))
          throw new Error("padding chr should be string");
        return {
          encode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings"
              );
            for (let e of t)
              if ("string" !== typeof e)
                throw new Error(`padding.encode: non-string input=${e}`);
            for (; (t.length * e) % 8; ) t.push(n);
            return t;
          },
          decode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings"
              );
            for (let e of t)
              if ("string" !== typeof e)
                throw new Error(`padding.decode: non-string input=${e}`);
            let r = t.length;
            if ((r * e) % 8)
              throw new Error(
                "Invalid padding: string should have whole number of bytes"
              );
            for (; r > 0 && t[r - 1] === n; r--)
              if (!(((r - 1) * e) % 8))
                throw new Error("Invalid padding: string has too much padding");
            return t.slice(0, r);
          },
        };
      }
      function lt(e) {
        if ("function" !== typeof e)
          throw new Error("normalize fn should be function");
        return { encode: (e) => e, decode: (n) => e(n) };
      }
      function dt(e, n, t) {
        if (n < 2)
          throw new Error(
            `convertRadix: wrong from=${n}, base cannot be less than 2`
          );
        if (t < 2)
          throw new Error(
            `convertRadix: wrong to=${t}, base cannot be less than 2`
          );
        if (!Array.isArray(e))
          throw new Error("convertRadix: data should be array");
        if (!e.length) return [];
        let r = 0;
        const i = [],
          o = Array.from(e);
        for (
          o.forEach((e) => {
            if ((rt(e), e < 0 || e >= n))
              throw new Error(`Wrong integer: ${e}`);
          });
          ;

        ) {
          let e = 0,
            s = !0;
          for (let i = r; i < o.length; i++) {
            const a = o[i],
              c = n * e + a;
            if (
              !Number.isSafeInteger(c) ||
              (n * e) / n !== e ||
              c - a !== n * e
            )
              throw new Error("convertRadix: carry overflow");
            e = c % t;
            const l = Math.floor(c / t);
            if (((o[i] = l), !Number.isSafeInteger(l) || l * t + e !== c))
              throw new Error("convertRadix: carry overflow");
            s && (l ? (s = !1) : (r = i));
          }
          if ((i.push(e), s)) break;
        }
        for (let s = 0; s < e.length - 1 && 0 === e[s]; s++) i.push(0);
        return i.reverse();
      }
      const ut = (e, n) => (n ? ut(n, e % n) : e),
        ht = (e, n) => e + (n - ut(e, n));
      function ft(e, n, t, r) {
        if (!Array.isArray(e))
          throw new Error("convertRadix2: data should be array");
        if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong from=${n}`);
        if (t <= 0 || t > 32) throw new Error(`convertRadix2: wrong to=${t}`);
        if (ht(n, t) > 32)
          throw new Error(
            `convertRadix2: carry overflow from=${n} to=${t} carryBits=${ht(
              n,
              t
            )}`
          );
        let i = 0,
          o = 0;
        const s = 2 ** t - 1,
          a = [];
        for (const c of e) {
          if ((rt(c), c >= 2 ** n))
            throw new Error(`convertRadix2: invalid data word=${c} from=${n}`);
          if (((i = (i << n) | c), o + n > 32))
            throw new Error(`convertRadix2: carry overflow pos=${o} from=${n}`);
          for (o += n; o >= t; o -= t) a.push(((i >> (o - t)) & s) >>> 0);
          i &= 2 ** o - 1;
        }
        if (((i = (i << (t - o)) & s), !r && o >= n))
          throw new Error("Excess padding");
        if (!r && i) throw new Error(`Non-zero padding: ${i}`);
        return r && o > 0 && a.push(i >>> 0), a;
      }
      function gt(e) {
        return (
          rt(e),
          {
            encode: (n) => {
              if (!it(n))
                throw new Error("radix.encode input should be Uint8Array");
              return dt(Array.from(n), 256, e);
            },
            decode: (n) => {
              if (!Array.isArray(n) || (n.length && "number" !== typeof n[0]))
                throw new Error(
                  "radix.decode input should be array of numbers"
                );
              return Uint8Array.from(dt(n, e, 256));
            },
          }
        );
      }
      function pt(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((rt(e), e <= 0 || e > 32))
          throw new Error("radix2: bits should be in (0..32]");
        if (ht(8, e) > 32 || ht(e, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (t) => {
            if (!it(t))
              throw new Error("radix2.encode input should be Uint8Array");
            return ft(Array.from(t), 8, e, !n);
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" !== typeof t[0]))
              throw new Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(ft(t, e, 8, n));
          },
        };
      }
      function wt(e, n) {
        if ((rt(e), "function" !== typeof n))
          throw new Error("checksum fn should be function");
        return {
          encode(t) {
            if (!it(t))
              throw new Error("checksum.encode: input should be Uint8Array");
            const r = n(t).slice(0, e),
              i = new Uint8Array(t.length + e);
            return i.set(t), i.set(r, t.length), i;
          },
          decode(t) {
            if (!it(t))
              throw new Error("checksum.decode: input should be Uint8Array");
            const r = t.slice(0, -e),
              i = n(r).slice(0, e),
              o = t.slice(-e);
            for (let n = 0; n < e; n++)
              if (i[n] !== o[n]) throw new Error("Invalid checksum");
            return r;
          },
        };
      }
      const vt = {
          alphabet: st,
          chain: ot,
          checksum: wt,
          convertRadix: dt,
          convertRadix2: ft,
          radix: gt,
          radix2: pt,
          join: at,
          padding: ct,
        },
        yt = ot(pt(4), st("0123456789ABCDEF"), at("")),
        mt = ot(pt(5), st("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), ct(5), at("")),
        bt =
          (pt(5),
          st("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
          at(""),
          pt(5),
          st("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
          ct(5),
          at(""),
          pt(5),
          st("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
          at(""),
          pt(5),
          st("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
          at(""),
          lt((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")),
          ot(
            pt(6),
            st(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            ),
            ct(6),
            at("")
          )),
        Et =
          (pt(6),
          st(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ),
          at(""),
          ot(
            pt(6),
            st(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
            ),
            ct(6),
            at("")
          )),
        Ct =
          (pt(6),
          st(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
          ),
          at(""),
          (e) => ot(gt(58), st(e), at(""))),
        At = Ct("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
        It = [0, 2, 3, 5, 6, 7, 9, 10, 11],
        xt = {
          encode(e) {
            let n = "";
            for (let t = 0; t < e.length; t += 8) {
              const r = e.subarray(t, t + 8);
              n += At.encode(r).padStart(It[r.length], "1");
            }
            return n;
          },
          decode(e) {
            let n = [];
            for (let t = 0; t < e.length; t += 11) {
              const r = e.slice(t, t + 11),
                i = It.indexOf(r.length),
                o = At.decode(r);
              for (let e = 0; e < o.length - i; e++)
                if (0 !== o[e]) throw new Error("base58xmr: wrong padding");
              n = n.concat(Array.from(o.slice(o.length - i)));
            }
            return Uint8Array.from(n);
          },
        };
      st("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), at("");
      const kt = {
        encode: (e) => new TextDecoder().decode(e),
        decode: (e) => new TextEncoder().encode(e),
      };
      pt(4),
        st("0123456789abcdef"),
        at(""),
        lt((e) => {
          if ("string" !== typeof e || e.length % 2)
            throw new TypeError(
              `hex.decode: expected string, got ${typeof e} with length ${
                e.length
              }`
            );
          return e.toLowerCase();
        });
      function St(e) {
        if ("string" !== typeof e)
          throw new TypeError("Invalid mnemonic type: " + typeof e);
        return e.normalize("NFKD");
      }
      function Nt(e) {
        const n = St(e),
          t = n.split(" ");
        if (![12, 15, 18, 21, 24].includes(t.length))
          throw new Error("Invalid mnemonic");
        return { nfkd: n, words: t };
      }
      function Tt(e) {
        Sn.bytes(e, 16, 20, 24, 28, 32);
      }
      function Ut(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 128;
        if ((Sn.number(n), n % 32 !== 0 || n > 256))
          throw new TypeError("Invalid entropy");
        return (function (e, n) {
          Tt(e);
          const t = Pt(n).encode(e);
          return t.join(
            ((e) => "\u3042\u3044\u3053\u304f\u3057\u3093" === e[0])(n)
              ? "\u3000"
              : " "
          );
        })(
          (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 32;
            if (Nn && "function" === typeof Nn.getRandomValues)
              return Nn.getRandomValues(new Uint8Array(e));
            throw new Error("crypto.getRandomValues must be defined");
          })(n / 8),
          e
        );
      }
      const _t = (e) => {
        const n = 8 - e.length / 4;
        return new Uint8Array([(Fn(e)[0] >> n) << n]);
      };
      function Pt(e) {
        if (!Array.isArray(e) || 2048 !== e.length || "string" !== typeof e[0])
          throw new Error("Worlist: expected array of 2048 strings");
        return (
          e.forEach((e) => {
            if ("string" !== typeof e)
              throw new Error(`Wordlist: non-string element: ${e}`);
          }),
          vt.chain(vt.checksum(1, _t), vt.radix2(11, !0), vt.alphabet(e))
        );
      }
      function Lt(e, n) {
        try {
          !(function (e, n) {
            const { words: t } = Nt(e),
              r = Pt(n).decode(t);
            Tt(r);
          })(e, n);
        } catch (t) {
          return !1;
        }
        return !0;
      }
      const Ot = (e) => St(`mnemonic${e}`);
      function Bt(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return (function (e, n, t, r) {
          const { c: i, dkLen: o, DK: s, PRF: a, PRFSalt: c } = Mn(e, n, t, r);
          let l;
          const d = new Uint8Array(4),
            u = Un(d),
            h = new Uint8Array(a.outputLen);
          for (let f = 1, g = 0; g < o; f++, g += a.outputLen) {
            const e = s.subarray(g, g + a.outputLen);
            u.setInt32(0, f, !1),
              (l = c._cloneInto(l)).update(d).digestInto(h),
              e.set(h.subarray(0, e.length));
            for (let n = 1; n < i; n++) {
              a._cloneInto(l).update(h).digestInto(h);
              for (let n = 0; n < e.length; n++) e[n] ^= h[n];
            }
          }
          return jn(a, c, s, l, h);
        })(tt, Nt(e).nfkd, Ot(n), { c: 2048, dkLen: 64 });
      }
      function Rt(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error(`Wrong positive integer: ${e}`);
      }
      function Ht(e) {
        if (
          !(
            (n = e) instanceof Uint8Array ||
            (null != n &&
              "object" === typeof n &&
              "Uint8Array" === n.constructor.name)
          )
        )
          throw new Error("Expected Uint8Array");
        for (
          var n, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            `Expected Uint8Array of length ${r}, not of length=${e.length}`
          );
      }
      function Mt(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        Rt(e.outputLen), Rt(e.blockLen);
      }
      function jt(e) {
        let n =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (n && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function Dt(e, n) {
        Ht(e);
        const t = n.outputLen;
        if (e.length < t)
          throw new Error(
            `digestInto() expects output buffer of length at least ${t}`
          );
      }
      function $t(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" === typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      const qt = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        Kt = (e, n) => (e << (32 - n)) | (e >>> n);
      if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
        throw new Error("Non little-endian hardware is not supported");
      const zt = Array.from({ length: 256 }, (e, n) =>
        n.toString(16).padStart(2, "0")
      );
      const Wt = 48,
        Ft = 57,
        Vt = 65,
        Gt = 70,
        Jt = 97,
        Zt = 102;
      function Yt(e) {
        return e >= Wt && e <= Ft
          ? e - Wt
          : e >= Vt && e <= Gt
          ? e - (Vt - 10)
          : e >= Jt && e <= Zt
          ? e - (Jt - 10)
          : void 0;
      }
      function Qt(e) {
        if ("string" !== typeof e)
          throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function Xt(e) {
        if (("string" === typeof e && (e = Qt(e)), !$t(e)))
          throw new Error("expected Uint8Array, got " + typeof e);
        return e;
      }
      function er() {
        let e = 0;
        for (let t = 0; t < arguments.length; t++) {
          const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
          if (!$t(n)) throw new Error("Uint8Array expected");
          e += n.length;
        }
        const n = new Uint8Array(e);
        for (let t = 0, r = 0; t < arguments.length; t++) {
          const e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
          n.set(e, r), (r += e.length);
        }
        return n;
      }
      class nr {
        clone() {
          return this._cloneInto();
        }
      }
      function tr(e) {
        const n = (n) => e().update(Xt(n)).digest(),
          t = e();
        return (
          (n.outputLen = t.outputLen),
          (n.blockLen = t.blockLen),
          (n.create = () => e()),
          n
        );
      }
      class rr extends nr {
        constructor(e, n) {
          super(), (this.finished = !1), (this.destroyed = !1), Mt(e);
          const t = Xt(n);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new Error(
              "Expected instance of class which extends utils.Hash"
            );
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const r = this.blockLen,
            i = new Uint8Array(r);
          i.set(t.length > r ? e.create().update(t).digest() : t);
          for (let o = 0; o < i.length; o++) i[o] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let o = 0; o < i.length; o++) i[o] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return jt(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          jt(this),
            Ht(e, this.outputLen),
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
            oHash: n,
            iHash: t,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = s),
            (e.oHash = n._cloneInto(e.oHash)),
            (e.iHash = t._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      const ir = (e, n, t) => new rr(e, n).update(t).digest();
      ir.create = (e, n) => new rr(e, n);
      class or extends nr {
        constructor(e, n, t, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = n),
            (this.padOffset = t),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = qt(this.buffer));
        }
        update(e) {
          jt(this);
          const { view: n, buffer: t, blockLen: r } = this,
            i = (e = Xt(e)).length;
          for (let o = 0; o < i; ) {
            const s = Math.min(r - this.pos, i - o);
            if (s !== r)
              t.set(e.subarray(o, o + s), this.pos),
                (this.pos += s),
                (o += s),
                this.pos === r && (this.process(n, 0), (this.pos = 0));
            else {
              const n = qt(e);
              for (; r <= i - o; o += r) this.process(n, o);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          jt(this), Dt(e, this), (this.finished = !0);
          const { buffer: n, view: t, blockLen: r, isLE: i } = this;
          let { pos: o } = this;
          (n[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > r - o && (this.process(t, 0), (o = 0));
          for (let d = o; d < r; d++) n[d] = 0;
          !(function (e, n, t, r) {
            if ("function" === typeof e.setBigUint64)
              return e.setBigUint64(n, t, r);
            const i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((t >> i) & o),
              a = Number(t & o),
              c = r ? 4 : 0,
              l = r ? 0 : 4;
            e.setUint32(n + c, s, r), e.setUint32(n + l, a, r);
          })(t, r - 8, BigInt(8 * this.length), i),
            this.process(t, 0);
          const s = qt(e),
            a = this.outputLen;
          if (a % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const c = a / 4,
            l = this.get();
          if (c > l.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let d = 0; d < c; d++) s.setUint32(4 * d, l[d], i);
        }
        digest() {
          const { buffer: e, outputLen: n } = this;
          this.digestInto(e);
          const t = e.slice(0, n);
          return this.destroy(), t;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const {
            blockLen: n,
            buffer: t,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = i),
            (e.destroyed = o),
            r % n && e.buffer.set(t),
            e
          );
        }
      }
      const sr = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        ar = Uint8Array.from({ length: 16 }, (e, n) => n);
      let cr = [ar],
        lr = [ar.map((e) => (9 * e + 5) % 16)];
      for (let Us = 0; Us < 4; Us++)
        for (let e of [cr, lr]) e.push(e[Us].map((e) => sr[e]));
      const dr = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        ur = cr.map((e, n) => e.map((e) => dr[n][e])),
        hr = lr.map((e, n) => e.map((e) => dr[n][e])),
        fr = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        gr = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        pr = (e, n) => (e << n) | (e >>> (32 - n));
      function wr(e, n, t, r) {
        return 0 === e
          ? n ^ t ^ r
          : 1 === e
          ? (n & t) | (~n & r)
          : 2 === e
          ? (n | ~t) ^ r
          : 3 === e
          ? (n & r) | (t & ~r)
          : n ^ (t | ~r);
      }
      const vr = new Uint32Array(16);
      class yr extends or {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776);
        }
        get() {
          const { h0: e, h1: n, h2: t, h3: r, h4: i } = this;
          return [e, n, t, r, i];
        }
        set(e, n, t, r, i) {
          (this.h0 = 0 | e),
            (this.h1 = 0 | n),
            (this.h2 = 0 | t),
            (this.h3 = 0 | r),
            (this.h4 = 0 | i);
        }
        process(e, n) {
          for (let h = 0; h < 16; h++, n += 4) vr[h] = e.getUint32(n, !0);
          let t = 0 | this.h0,
            r = t,
            i = 0 | this.h1,
            o = i,
            s = 0 | this.h2,
            a = s,
            c = 0 | this.h3,
            l = c,
            d = 0 | this.h4,
            u = d;
          for (let h = 0; h < 5; h++) {
            const e = 4 - h,
              n = fr[h],
              f = gr[h],
              g = cr[h],
              p = lr[h],
              w = ur[h],
              v = hr[h];
            for (let r = 0; r < 16; r++) {
              const e = (pr(t + wr(h, i, s, c) + vr[g[r]] + n, w[r]) + d) | 0;
              (t = d), (d = c), (c = 0 | pr(s, 10)), (s = i), (i = e);
            }
            for (let t = 0; t < 16; t++) {
              const n = (pr(r + wr(e, o, a, l) + vr[p[t]] + f, v[t]) + u) | 0;
              (r = u), (u = l), (l = 0 | pr(a, 10)), (a = o), (o = n);
            }
          }
          this.set(
            (this.h1 + s + l) | 0,
            (this.h2 + c + u) | 0,
            (this.h3 + d + r) | 0,
            (this.h4 + t + o) | 0,
            (this.h0 + i + a) | 0
          );
        }
        roundClean() {
          vr.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      const mr = tr(() => new yr()),
        br = (e, n, t) => (e & n) ^ (e & t) ^ (n & t),
        Er = new Uint32Array([
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
        Cr = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        Ar = new Uint32Array(64);
      class Ir extends or {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | Cr[0]),
            (this.B = 0 | Cr[1]),
            (this.C = 0 | Cr[2]),
            (this.D = 0 | Cr[3]),
            (this.E = 0 | Cr[4]),
            (this.F = 0 | Cr[5]),
            (this.G = 0 | Cr[6]),
            (this.H = 0 | Cr[7]);
        }
        get() {
          const { A: e, B: n, C: t, D: r, E: i, F: o, G: s, H: a } = this;
          return [e, n, t, r, i, o, s, a];
        }
        set(e, n, t, r, i, o, s, a) {
          (this.A = 0 | e),
            (this.B = 0 | n),
            (this.C = 0 | t),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(e, n) {
          for (let u = 0; u < 16; u++, n += 4) Ar[u] = e.getUint32(n, !1);
          for (let u = 16; u < 64; u++) {
            const e = Ar[u - 15],
              n = Ar[u - 2],
              t = Kt(e, 7) ^ Kt(e, 18) ^ (e >>> 3),
              r = Kt(n, 17) ^ Kt(n, 19) ^ (n >>> 10);
            Ar[u] = (r + Ar[u - 7] + t + Ar[u - 16]) | 0;
          }
          let { A: t, B: r, C: i, D: o, E: s, F: a, G: c, H: l } = this;
          for (let u = 0; u < 64; u++) {
            const e =
                (l +
                  (Kt(s, 6) ^ Kt(s, 11) ^ Kt(s, 25)) +
                  (((d = s) & a) ^ (~d & c)) +
                  Er[u] +
                  Ar[u]) |
                0,
              n = ((Kt(t, 2) ^ Kt(t, 13) ^ Kt(t, 22)) + br(t, r, i)) | 0;
            (l = c),
              (c = a),
              (a = s),
              (s = (o + e) | 0),
              (o = i),
              (i = r),
              (r = t),
              (t = (e + n) | 0);
          }
          var d;
          (t = (t + this.A) | 0),
            (r = (r + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (s = (s + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(t, r, i, o, s, a, c, l);
        }
        roundClean() {
          Ar.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const xr = tr(() => new Ir()),
        kr = BigInt(2 ** 32 - 1),
        Sr = BigInt(32);
      function Nr(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & kr), l: Number((e >> Sr) & kr) }
          : { h: 0 | Number((e >> Sr) & kr), l: 0 | Number(e & kr) };
      }
      const Tr = {
          fromBig: Nr,
          split: function (e) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = new Uint32Array(e.length),
              r = new Uint32Array(e.length);
            for (let i = 0; i < e.length; i++) {
              const { h: o, l: s } = Nr(e[i], n);
              [t[i], r[i]] = [o, s];
            }
            return [t, r];
          },
          toBig: (e, n) => (BigInt(e >>> 0) << Sr) | BigInt(n >>> 0),
          shrSH: (e, n, t) => e >>> t,
          shrSL: (e, n, t) => (e << (32 - t)) | (n >>> t),
          rotrSH: (e, n, t) => (e >>> t) | (n << (32 - t)),
          rotrSL: (e, n, t) => (e << (32 - t)) | (n >>> t),
          rotrBH: (e, n, t) => (e << (64 - t)) | (n >>> (t - 32)),
          rotrBL: (e, n, t) => (e >>> (t - 32)) | (n << (64 - t)),
          rotr32H: (e, n) => n,
          rotr32L: (e, n) => e,
          rotlSH: (e, n, t) => (e << t) | (n >>> (32 - t)),
          rotlSL: (e, n, t) => (n << t) | (e >>> (32 - t)),
          rotlBH: (e, n, t) => (n << (t - 32)) | (e >>> (64 - t)),
          rotlBL: (e, n, t) => (e << (t - 32)) | (n >>> (64 - t)),
          add: function (e, n, t, r) {
            const i = (n >>> 0) + (r >>> 0);
            return { h: (e + t + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
          },
          add3L: (e, n, t) => (e >>> 0) + (n >>> 0) + (t >>> 0),
          add3H: (e, n, t, r) => (n + t + r + ((e / 2 ** 32) | 0)) | 0,
          add4L: (e, n, t, r) => (e >>> 0) + (n >>> 0) + (t >>> 0) + (r >>> 0),
          add4H: (e, n, t, r, i) => (n + t + r + i + ((e / 2 ** 32) | 0)) | 0,
          add5H: (e, n, t, r, i, o) =>
            (n + t + r + i + o + ((e / 2 ** 32) | 0)) | 0,
          add5L: (e, n, t, r, i) =>
            (e >>> 0) + (n >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
        },
        [Ur, _r] = (() =>
          Tr.split(
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
        Pr = new Uint32Array(80),
        Lr = new Uint32Array(80);
      class Or extends or {
        constructor() {
          super(128, 64, 16, !1),
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
            Al: n,
            Bh: t,
            Bl: r,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: c,
            El: l,
            Fh: d,
            Fl: u,
            Gh: h,
            Gl: f,
            Hh: g,
            Hl: p,
          } = this;
          return [e, n, t, r, i, o, s, a, c, l, d, u, h, f, g, p];
        }
        set(e, n, t, r, i, o, s, a, c, l, d, u, h, f, g, p) {
          (this.Ah = 0 | e),
            (this.Al = 0 | n),
            (this.Bh = 0 | t),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | d),
            (this.Fl = 0 | u),
            (this.Gh = 0 | h),
            (this.Gl = 0 | f),
            (this.Hh = 0 | g),
            (this.Hl = 0 | p);
        }
        process(e, n) {
          for (let y = 0; y < 16; y++, n += 4)
            (Pr[y] = e.getUint32(n)), (Lr[y] = e.getUint32((n += 4)));
          for (let y = 16; y < 80; y++) {
            const e = 0 | Pr[y - 15],
              n = 0 | Lr[y - 15],
              t = Tr.rotrSH(e, n, 1) ^ Tr.rotrSH(e, n, 8) ^ Tr.shrSH(e, n, 7),
              r = Tr.rotrSL(e, n, 1) ^ Tr.rotrSL(e, n, 8) ^ Tr.shrSL(e, n, 7),
              i = 0 | Pr[y - 2],
              o = 0 | Lr[y - 2],
              s = Tr.rotrSH(i, o, 19) ^ Tr.rotrBH(i, o, 61) ^ Tr.shrSH(i, o, 6),
              a = Tr.rotrSL(i, o, 19) ^ Tr.rotrBL(i, o, 61) ^ Tr.shrSL(i, o, 6),
              c = Tr.add4L(r, a, Lr[y - 7], Lr[y - 16]),
              l = Tr.add4H(c, t, s, Pr[y - 7], Pr[y - 16]);
            (Pr[y] = 0 | l), (Lr[y] = 0 | c);
          }
          let {
            Ah: t,
            Al: r,
            Bh: i,
            Bl: o,
            Ch: s,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: d,
            El: u,
            Fh: h,
            Fl: f,
            Gh: g,
            Gl: p,
            Hh: w,
            Hl: v,
          } = this;
          for (let y = 0; y < 80; y++) {
            const e =
                Tr.rotrSH(d, u, 14) ^ Tr.rotrSH(d, u, 18) ^ Tr.rotrBH(d, u, 41),
              n =
                Tr.rotrSL(d, u, 14) ^ Tr.rotrSL(d, u, 18) ^ Tr.rotrBL(d, u, 41),
              m = (d & h) ^ (~d & g),
              b = (u & f) ^ (~u & p),
              E = Tr.add5L(v, n, b, _r[y], Lr[y]),
              C = Tr.add5H(E, w, e, m, Ur[y], Pr[y]),
              A = 0 | E,
              I =
                Tr.rotrSH(t, r, 28) ^ Tr.rotrBH(t, r, 34) ^ Tr.rotrBH(t, r, 39),
              x =
                Tr.rotrSL(t, r, 28) ^ Tr.rotrBL(t, r, 34) ^ Tr.rotrBL(t, r, 39),
              k = (t & i) ^ (t & s) ^ (i & s),
              S = (r & o) ^ (r & a) ^ (o & a);
            (w = 0 | g),
              (v = 0 | p),
              (g = 0 | h),
              (p = 0 | f),
              (h = 0 | d),
              (f = 0 | u),
              ({ h: d, l: u } = Tr.add(0 | c, 0 | l, 0 | C, 0 | A)),
              (c = 0 | s),
              (l = 0 | a),
              (s = 0 | i),
              (a = 0 | o),
              (i = 0 | t),
              (o = 0 | r);
            const N = Tr.add3L(A, x, S);
            (t = Tr.add3H(N, C, I, k)), (r = 0 | N);
          }
          ({ h: t, l: r } = Tr.add(0 | this.Ah, 0 | this.Al, 0 | t, 0 | r)),
            ({ h: i, l: o } = Tr.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: s, l: a } = Tr.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | a)),
            ({ h: c, l: l } = Tr.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: d, l: u } = Tr.add(0 | this.Eh, 0 | this.El, 0 | d, 0 | u)),
            ({ h: h, l: f } = Tr.add(0 | this.Fh, 0 | this.Fl, 0 | h, 0 | f)),
            ({ h: g, l: p } = Tr.add(0 | this.Gh, 0 | this.Gl, 0 | g, 0 | p)),
            ({ h: w, l: v } = Tr.add(0 | this.Hh, 0 | this.Hl, 0 | w, 0 | v)),
            this.set(t, r, i, o, s, a, c, l, d, u, h, f, g, p, w, v);
        }
        roundClean() {
          Pr.fill(0), Lr.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      const Br = tr(() => new Or());
      function Rr(e) {
        if (!Number.isSafeInteger(e)) throw new Error(`Wrong integer: ${e}`);
      }
      function Hr(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" === typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function Mr() {
        const e = (e) => e,
          n = (e, n) => (t) => e(n(t));
        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
          r[i] = arguments[i];
        return {
          encode: r.map((e) => e.encode).reduceRight(n, e),
          decode: r.map((e) => e.decode).reduce(n, e),
        };
      }
      function jr(e) {
        return {
          encode: (n) => {
            if (!Array.isArray(n) || (n.length && "number" !== typeof n[0]))
              throw new Error(
                "alphabet.encode input should be an array of numbers"
              );
            return n.map((n) => {
              if ((Rr(n), n < 0 || n >= e.length))
                throw new Error(
                  `Digit index outside alphabet: ${n} (alphabet: ${e.length})`
                );
              return e[n];
            });
          },
          decode: (n) => {
            if (!Array.isArray(n) || (n.length && "string" !== typeof n[0]))
              throw new Error(
                "alphabet.decode input should be array of strings"
              );
            return n.map((n) => {
              if ("string" !== typeof n)
                throw new Error(`alphabet.decode: not string element=${n}`);
              const t = e.indexOf(n);
              if (-1 === t)
                throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);
              return t;
            });
          },
        };
      }
      function Dr() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if ("string" !== typeof e)
          throw new Error("join separator should be string");
        return {
          encode: (n) => {
            if (!Array.isArray(n) || (n.length && "string" !== typeof n[0]))
              throw new Error("join.encode input should be array of strings");
            for (let e of n)
              if ("string" !== typeof e)
                throw new Error(`join.encode: non-string input=${e}`);
            return n.join(e);
          },
          decode: (n) => {
            if ("string" !== typeof n)
              throw new Error("join.decode input should be string");
            return n.split(e);
          },
        };
      }
      function $r(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "=";
        if ((Rr(e), "string" !== typeof n))
          throw new Error("padding chr should be string");
        return {
          encode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings"
              );
            for (let e of t)
              if ("string" !== typeof e)
                throw new Error(`padding.encode: non-string input=${e}`);
            for (; (t.length * e) % 8; ) t.push(n);
            return t;
          },
          decode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings"
              );
            for (let e of t)
              if ("string" !== typeof e)
                throw new Error(`padding.decode: non-string input=${e}`);
            let r = t.length;
            if ((r * e) % 8)
              throw new Error(
                "Invalid padding: string should have whole number of bytes"
              );
            for (; r > 0 && t[r - 1] === n; r--)
              if (!(((r - 1) * e) % 8))
                throw new Error("Invalid padding: string has too much padding");
            return t.slice(0, r);
          },
        };
      }
      function qr(e) {
        if ("function" !== typeof e)
          throw new Error("normalize fn should be function");
        return { encode: (e) => e, decode: (n) => e(n) };
      }
      function Kr(e, n, t) {
        if (n < 2)
          throw new Error(
            `convertRadix: wrong from=${n}, base cannot be less than 2`
          );
        if (t < 2)
          throw new Error(
            `convertRadix: wrong to=${t}, base cannot be less than 2`
          );
        if (!Array.isArray(e))
          throw new Error("convertRadix: data should be array");
        if (!e.length) return [];
        let r = 0;
        const i = [],
          o = Array.from(e);
        for (
          o.forEach((e) => {
            if ((Rr(e), e < 0 || e >= n))
              throw new Error(`Wrong integer: ${e}`);
          });
          ;

        ) {
          let e = 0,
            s = !0;
          for (let i = r; i < o.length; i++) {
            const a = o[i],
              c = n * e + a;
            if (
              !Number.isSafeInteger(c) ||
              (n * e) / n !== e ||
              c - a !== n * e
            )
              throw new Error("convertRadix: carry overflow");
            e = c % t;
            const l = Math.floor(c / t);
            if (((o[i] = l), !Number.isSafeInteger(l) || l * t + e !== c))
              throw new Error("convertRadix: carry overflow");
            s && (l ? (s = !1) : (r = i));
          }
          if ((i.push(e), s)) break;
        }
        for (let s = 0; s < e.length - 1 && 0 === e[s]; s++) i.push(0);
        return i.reverse();
      }
      const zr = (e, n) => (n ? zr(n, e % n) : e),
        Wr = (e, n) => e + (n - zr(e, n));
      function Fr(e, n, t, r) {
        if (!Array.isArray(e))
          throw new Error("convertRadix2: data should be array");
        if (n <= 0 || n > 32) throw new Error(`convertRadix2: wrong from=${n}`);
        if (t <= 0 || t > 32) throw new Error(`convertRadix2: wrong to=${t}`);
        if (Wr(n, t) > 32)
          throw new Error(
            `convertRadix2: carry overflow from=${n} to=${t} carryBits=${Wr(
              n,
              t
            )}`
          );
        let i = 0,
          o = 0;
        const s = 2 ** t - 1,
          a = [];
        for (const c of e) {
          if ((Rr(c), c >= 2 ** n))
            throw new Error(`convertRadix2: invalid data word=${c} from=${n}`);
          if (((i = (i << n) | c), o + n > 32))
            throw new Error(`convertRadix2: carry overflow pos=${o} from=${n}`);
          for (o += n; o >= t; o -= t) a.push(((i >> (o - t)) & s) >>> 0);
          i &= 2 ** o - 1;
        }
        if (((i = (i << (t - o)) & s), !r && o >= n))
          throw new Error("Excess padding");
        if (!r && i) throw new Error(`Non-zero padding: ${i}`);
        return r && o > 0 && a.push(i >>> 0), a;
      }
      function Vr(e) {
        return (
          Rr(e),
          {
            encode: (n) => {
              if (!Hr(n))
                throw new Error("radix.encode input should be Uint8Array");
              return Kr(Array.from(n), 256, e);
            },
            decode: (n) => {
              if (!Array.isArray(n) || (n.length && "number" !== typeof n[0]))
                throw new Error(
                  "radix.decode input should be array of numbers"
                );
              return Uint8Array.from(Kr(n, e, 256));
            },
          }
        );
      }
      function Gr(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((Rr(e), e <= 0 || e > 32))
          throw new Error("radix2: bits should be in (0..32]");
        if (Wr(8, e) > 32 || Wr(e, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (t) => {
            if (!Hr(t))
              throw new Error("radix2.encode input should be Uint8Array");
            return Fr(Array.from(t), 8, e, !n);
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" !== typeof t[0]))
              throw new Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(Fr(t, e, 8, n));
          },
        };
      }
      function Jr(e, n) {
        if ((Rr(e), "function" !== typeof n))
          throw new Error("checksum fn should be function");
        return {
          encode(t) {
            if (!Hr(t))
              throw new Error("checksum.encode: input should be Uint8Array");
            const r = n(t).slice(0, e),
              i = new Uint8Array(t.length + e);
            return i.set(t), i.set(r, t.length), i;
          },
          decode(t) {
            if (!Hr(t))
              throw new Error("checksum.decode: input should be Uint8Array");
            const r = t.slice(0, -e),
              i = n(r).slice(0, e),
              o = t.slice(-e);
            for (let n = 0; n < e; n++)
              if (i[n] !== o[n]) throw new Error("Invalid checksum");
            return r;
          },
        };
      }
      const Zr = Mr(Gr(4), jr("0123456789ABCDEF"), Dr("")),
        Yr = Mr(Gr(5), jr("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), $r(5), Dr("")),
        Qr =
          (Gr(5),
          jr("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
          Dr(""),
          Gr(5),
          jr("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
          $r(5),
          Dr(""),
          Gr(5),
          jr("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
          Dr(""),
          Gr(5),
          jr("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
          Dr(""),
          qr((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")),
          Mr(
            Gr(6),
            jr(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            ),
            $r(6),
            Dr("")
          )),
        Xr =
          (Gr(6),
          jr(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ),
          Dr(""),
          Mr(
            Gr(6),
            jr(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
            ),
            $r(6),
            Dr("")
          )),
        ei =
          (Gr(6),
          jr(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
          ),
          Dr(""),
          (e) => Mr(Vr(58), jr(e), Dr(""))),
        ni = ei("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
        ti = [0, 2, 3, 5, 6, 7, 9, 10, 11],
        ri = {
          encode(e) {
            let n = "";
            for (let t = 0; t < e.length; t += 8) {
              const r = e.subarray(t, t + 8);
              n += ni.encode(r).padStart(ti[r.length], "1");
            }
            return n;
          },
          decode(e) {
            let n = [];
            for (let t = 0; t < e.length; t += 11) {
              const r = e.slice(t, t + 11),
                i = ti.indexOf(r.length),
                o = ni.decode(r);
              for (let e = 0; e < o.length - i; e++)
                if (0 !== o[e]) throw new Error("base58xmr: wrong padding");
              n = n.concat(Array.from(o.slice(o.length - i)));
            }
            return Uint8Array.from(n);
          },
        },
        ii = (e) =>
          Mr(
            Jr(4, (n) => e(e(n))),
            ni
          );
      jr("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), Dr("");
      const oi = {
          encode: (e) => new TextDecoder().decode(e),
          decode: (e) => new TextEncoder().encode(e),
        },
        si =
          (Gr(4),
          jr("0123456789abcdef"),
          Dr(""),
          qr((e) => {
            if ("string" !== typeof e || e.length % 2)
              throw new TypeError(
                `hex.decode: expected string, got ${typeof e} with length ${
                  e.length
                }`
              );
            return e.toLowerCase();
          }),
          Te.ProjectivePoint),
        ai = ii(xr);
      function ci(e) {
        return BigInt(
          `0x${(function (e) {
            if (!$t(e)) throw new Error("Uint8Array expected");
            let n = "";
            for (let t = 0; t < e.length; t++) n += zt[e[t]];
            return n;
          })(e)}`
        );
      }
      function li(e) {
        return (function (e) {
          if ("string" !== typeof e)
            throw new Error("hex string expected, got " + typeof e);
          const n = e.length,
            t = n / 2;
          if (n % 2)
            throw new Error(
              "padded hex string expected, got unpadded hex of length " + n
            );
          const r = new Uint8Array(t);
          for (let i = 0, o = 0; i < t; i++, o += 2) {
            const n = Yt(e.charCodeAt(o)),
              t = Yt(e.charCodeAt(o + 1));
            if (void 0 === n || void 0 === t) {
              const n = e[o] + e[o + 1];
              throw new Error(
                'hex string expected, got non-hex character "' +
                  n +
                  '" at index ' +
                  o
              );
            }
            r[i] = 16 * n + t;
          }
          return r;
        })(e.toString(16).padStart(64, "0"));
      }
      const di = Qt("Bitcoin seed"),
        ui = { private: 76066276, public: 76067358 },
        hi = 2147483648,
        fi = (e) => {
          if (!Number.isSafeInteger(e) || e < 0 || e > 2 ** 32 - 1)
            throw new Error(
              `Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`
            );
          const n = new Uint8Array(4);
          return qt(n).setUint32(0, e, !1), n;
        };
      class gi {
        get fingerprint() {
          if (!this.pubHash) throw new Error("No publicKey set!");
          return (e = this.pubHash), qt(e).getUint32(0, !1);
          var e;
        }
        get identifier() {
          return this.pubHash;
        }
        get pubKeyHash() {
          return this.pubHash;
        }
        get privateKey() {
          return this.privKeyBytes || null;
        }
        get publicKey() {
          return this.pubKey || null;
        }
        get privateExtendedKey() {
          const e = this.privateKey;
          if (!e) throw new Error("No private key");
          return ai.encode(
            this.serialize(this.versions.private, er(new Uint8Array([0]), e))
          );
        }
        get publicExtendedKey() {
          if (!this.pubKey) throw new Error("No public key");
          return ai.encode(this.serialize(this.versions.public, this.pubKey));
        }
        static fromMasterSeed(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ui;
          if ((Ht(e), 8 * e.length < 128 || 8 * e.length > 512))
            throw new Error(
              `HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`
            );
          const t = ir(Br, di, e);
          return new gi({
            versions: n,
            chainCode: t.slice(32),
            privateKey: t.slice(0, 32),
          });
        }
        static fromExtendedKey(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ui;
          const t = ai.decode(e),
            r = qt(t),
            i = r.getUint32(0, !1),
            o = {
              versions: n,
              depth: t[4],
              parentFingerprint: r.getUint32(5, !1),
              index: r.getUint32(9, !1),
              chainCode: t.slice(13, 45),
            },
            s = t.slice(45),
            a = 0 === s[0];
          if (i !== n[a ? "private" : "public"])
            throw new Error("Version mismatch");
          return new gi(
            a ? { ...o, privateKey: s.slice(1) } : { ...o, publicKey: s }
          );
        }
        static fromJSON(e) {
          return gi.fromExtendedKey(e.xpriv);
        }
        constructor(e) {
          if (
            ((this.depth = 0),
            (this.index = 0),
            (this.chainCode = null),
            (this.parentFingerprint = 0),
            !e || "object" !== typeof e)
          )
            throw new Error("HDKey.constructor must not be called directly");
          if (
            ((this.versions = e.versions || ui),
            (this.depth = e.depth || 0),
            (this.chainCode = e.chainCode),
            (this.index = e.index || 0),
            (this.parentFingerprint = e.parentFingerprint || 0),
            !this.depth && (this.parentFingerprint || this.index))
          )
            throw new Error(
              "HDKey: zero depth with non-zero index/parent fingerprint"
            );
          if (e.publicKey && e.privateKey)
            throw new Error("HDKey: publicKey and privateKey at same time.");
          if (e.privateKey) {
            if (!Te.utils.isValidPrivateKey(e.privateKey))
              throw new Error("Invalid private key");
            (this.privKey =
              "bigint" === typeof e.privateKey
                ? e.privateKey
                : ci(e.privateKey)),
              (this.privKeyBytes = li(this.privKey)),
              (this.pubKey = Te.getPublicKey(e.privateKey, !0));
          } else {
            if (!e.publicKey)
              throw new Error("HDKey: no public or private key provided");
            this.pubKey = si.fromHex(e.publicKey).toRawBytes(!0);
          }
          var n;
          this.pubHash = ((n = this.pubKey), mr(xr(n)));
        }
        derive(e) {
          if (!/^[mM]'?/.test(e))
            throw new Error('Path must start with "m" or "M"');
          if (/^[mM]'?$/.test(e)) return this;
          const n = e.replace(/^[mM]'?\//, "").split("/");
          let t = this;
          for (const r of n) {
            const e = /^(\d+)('?)$/.exec(r);
            if (!e || 3 !== e.length)
              throw new Error(`Invalid child index: ${r}`);
            let n = +e[1];
            if (!Number.isSafeInteger(n) || n >= hi)
              throw new Error("Invalid index");
            "'" === e[2] && (n += hi), (t = t.deriveChild(n));
          }
          return t;
        }
        deriveChild(e) {
          if (!this.pubKey || !this.chainCode)
            throw new Error("No publicKey or chainCode set");
          let n = fi(e);
          if (e >= hi) {
            const e = this.privateKey;
            if (!e) throw new Error("Could not derive hardened child key");
            n = er(new Uint8Array([0]), e, n);
          } else n = er(this.pubKey, n);
          const t = ir(Br, this.chainCode, n),
            r = ci(t.slice(0, 32)),
            i = t.slice(32);
          if (!Te.utils.isValidPrivateKey(r))
            throw new Error("Tweak bigger than curve order");
          const o = {
            versions: this.versions,
            chainCode: i,
            depth: this.depth + 1,
            parentFingerprint: this.fingerprint,
            index: e,
          };
          try {
            if (this.privateKey) {
              const e = ne(this.privKey + r, Te.CURVE.n);
              if (!Te.utils.isValidPrivateKey(e))
                throw new Error(
                  "The tweak was out of range or the resulted private key is invalid"
                );
              o.privateKey = e;
            } else {
              const e = si.fromHex(this.pubKey).add(si.fromPrivateKey(r));
              if (e.equals(si.ZERO))
                throw new Error(
                  "The tweak was equal to negative P, which made the result key invalid"
                );
              o.publicKey = e.toRawBytes(!0);
            }
            return new gi(o);
          } catch (s) {
            return this.deriveChild(e + 1);
          }
        }
        sign(e) {
          if (!this.privateKey) throw new Error("No privateKey set!");
          return Ht(e, 32), Te.sign(e, this.privKey).toCompactRawBytes();
        }
        verify(e, n) {
          if ((Ht(e, 32), Ht(n, 64), !this.publicKey))
            throw new Error("No publicKey set!");
          let t;
          try {
            t = Te.Signature.fromCompact(n);
          } catch (r) {
            return !1;
          }
          return Te.verify(t, e, this.publicKey);
        }
        wipePrivateData() {
          return (
            (this.privKey = void 0),
            this.privKeyBytes &&
              (this.privKeyBytes.fill(0), (this.privKeyBytes = void 0)),
            this
          );
        }
        toJSON() {
          return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey,
          };
        }
        serialize(e, n) {
          if (!this.chainCode) throw new Error("No chainCode set");
          return (
            Ht(n, 33),
            er(
              fi(e),
              new Uint8Array([this.depth]),
              fi(this.parentFingerprint),
              fi(this.index),
              this.chainCode,
              n
            )
          );
        }
      }
      const pi = (e) => e instanceof Uint8Array,
        wi = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
        throw new Error("Non little-endian hardware is not supported");
      function vi(e) {
        if ("string" !== typeof e)
          throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function yi(e) {
        if (("string" === typeof e && (e = vi(e)), !pi(e)))
          throw new Error("expected Uint8Array, got " + typeof e);
        return e;
      }
      function mi(e, n) {
        if (
          void 0 !== n &&
          ("object" !== typeof n ||
            ((t = n),
            "[object Object]" !== Object.prototype.toString.call(t) ||
              t.constructor !== Object))
        )
          throw new Error("options must be object or undefined");
        var t;
        return Object.assign(e, n);
      }
      function bi(e, n) {
        if (!(e instanceof Uint8Array)) throw new Error("Uint8Array expected");
        if ("number" === typeof n && e.length !== n)
          throw new Error(`Uint8Array length ${n} expected`);
      }
      function Ei(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error(`Wrong positive integer: ${e}`);
      }
      function Ci(e) {
        if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
        for (
          var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          t[r - 1] = arguments[r];
        if (t.length > 0 && !t.includes(e.length))
          throw new Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`
          );
      }
      const Ai = {
          number: Ei,
          bool: function (e) {
            if ("boolean" !== typeof e)
              throw new Error(`Expected boolean, not ${e}`);
          },
          bytes: Ci,
          hash: function (e) {
            if ("function" !== typeof e || "function" !== typeof e.create)
              throw new Error("hash must be wrapped by utils.wrapConstructor");
            Ei(e.outputLen), Ei(e.blockLen);
          },
          exists: function (e) {
            let n =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            if (e.destroyed)
              throw new Error("Hash instance has been destroyed");
            if (n && e.finished)
              throw new Error("Hash#digest() has already been called");
          },
          output: function (e, n) {
            Ci(e);
            const t = n.outputLen;
            if (e.length < t)
              throw new Error(
                `digestInto() expects output buffer of length at least ${t}`
              );
          },
        },
        Ii = Ai,
        xi = (e, n) => (255 & e[n++]) | ((255 & e[n++]) << 8);
      class ki {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            bi((e = yi(e)), 32);
          const n = xi(e, 0),
            t = xi(e, 2),
            r = xi(e, 4),
            i = xi(e, 6),
            o = xi(e, 8),
            s = xi(e, 10),
            a = xi(e, 12),
            c = xi(e, 14);
          (this.r[0] = 8191 & n),
            (this.r[1] = 8191 & ((n >>> 13) | (t << 3))),
            (this.r[2] = 7939 & ((t >>> 10) | (r << 6))),
            (this.r[3] = 8191 & ((r >>> 7) | (i << 9))),
            (this.r[4] = 255 & ((i >>> 4) | (o << 12))),
            (this.r[5] = (o >>> 1) & 8190),
            (this.r[6] = 8191 & ((o >>> 14) | (s << 2))),
            (this.r[7] = 8065 & ((s >>> 11) | (a << 5))),
            (this.r[8] = 8191 & ((a >>> 8) | (c << 8))),
            (this.r[9] = (c >>> 5) & 127);
          for (let l = 0; l < 8; l++) this.pad[l] = xi(e, 16 + 2 * l);
        }
        process(e, n) {
          const t =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                ? 0
                : 2048,
            { h: r, r: i } = this,
            o = i[0],
            s = i[1],
            a = i[2],
            c = i[3],
            l = i[4],
            d = i[5],
            u = i[6],
            h = i[7],
            f = i[8],
            g = i[9],
            p = xi(e, n + 0),
            w = xi(e, n + 2),
            v = xi(e, n + 4),
            y = xi(e, n + 6),
            m = xi(e, n + 8),
            b = xi(e, n + 10),
            E = xi(e, n + 12),
            C = xi(e, n + 14);
          let A = r[0] + (8191 & p),
            I = r[1] + (8191 & ((p >>> 13) | (w << 3))),
            x = r[2] + (8191 & ((w >>> 10) | (v << 6))),
            k = r[3] + (8191 & ((v >>> 7) | (y << 9))),
            S = r[4] + (8191 & ((y >>> 4) | (m << 12))),
            N = r[5] + ((m >>> 1) & 8191),
            T = r[6] + (8191 & ((m >>> 14) | (b << 2))),
            U = r[7] + (8191 & ((b >>> 11) | (E << 5))),
            _ = r[8] + (8191 & ((E >>> 8) | (C << 8))),
            P = r[9] + ((C >>> 5) | t),
            L = 0,
            O =
              L + A * o + I * (5 * g) + x * (5 * f) + k * (5 * h) + S * (5 * u);
          (L = O >>> 13),
            (O &= 8191),
            (O +=
              N * (5 * d) +
              T * (5 * l) +
              U * (5 * c) +
              _ * (5 * a) +
              P * (5 * s)),
            (L += O >>> 13),
            (O &= 8191);
          let B = L + A * s + I * o + x * (5 * g) + k * (5 * f) + S * (5 * h);
          (L = B >>> 13),
            (B &= 8191),
            (B +=
              N * (5 * u) +
              T * (5 * d) +
              U * (5 * l) +
              _ * (5 * c) +
              P * (5 * a)),
            (L += B >>> 13),
            (B &= 8191);
          let R = L + A * a + I * s + x * o + k * (5 * g) + S * (5 * f);
          (L = R >>> 13),
            (R &= 8191),
            (R +=
              N * (5 * h) +
              T * (5 * u) +
              U * (5 * d) +
              _ * (5 * l) +
              P * (5 * c)),
            (L += R >>> 13),
            (R &= 8191);
          let H = L + A * c + I * a + x * s + k * o + S * (5 * g);
          (L = H >>> 13),
            (H &= 8191),
            (H +=
              N * (5 * f) +
              T * (5 * h) +
              U * (5 * u) +
              _ * (5 * d) +
              P * (5 * l)),
            (L += H >>> 13),
            (H &= 8191);
          let M = L + A * l + I * c + x * a + k * s + S * o;
          (L = M >>> 13),
            (M &= 8191),
            (M +=
              N * (5 * g) +
              T * (5 * f) +
              U * (5 * h) +
              _ * (5 * u) +
              P * (5 * d)),
            (L += M >>> 13),
            (M &= 8191);
          let j = L + A * d + I * l + x * c + k * a + S * s;
          (L = j >>> 13),
            (j &= 8191),
            (j +=
              N * o + T * (5 * g) + U * (5 * f) + _ * (5 * h) + P * (5 * u)),
            (L += j >>> 13),
            (j &= 8191);
          let D = L + A * u + I * d + x * l + k * c + S * a;
          (L = D >>> 13),
            (D &= 8191),
            (D += N * s + T * o + U * (5 * g) + _ * (5 * f) + P * (5 * h)),
            (L += D >>> 13),
            (D &= 8191);
          let $ = L + A * h + I * u + x * d + k * l + S * c;
          (L = $ >>> 13),
            ($ &= 8191),
            ($ += N * a + T * s + U * o + _ * (5 * g) + P * (5 * f)),
            (L += $ >>> 13),
            ($ &= 8191);
          let q = L + A * f + I * h + x * u + k * d + S * l;
          (L = q >>> 13),
            (q &= 8191),
            (q += N * c + T * a + U * s + _ * o + P * (5 * g)),
            (L += q >>> 13),
            (q &= 8191);
          let K = L + A * g + I * f + x * h + k * u + S * d;
          (L = K >>> 13),
            (K &= 8191),
            (K += N * l + T * c + U * a + _ * s + P * o),
            (L += K >>> 13),
            (K &= 8191),
            (L = ((L << 2) + L) | 0),
            (L = (L + O) | 0),
            (O = 8191 & L),
            (L >>>= 13),
            (B += L),
            (r[0] = O),
            (r[1] = B),
            (r[2] = R),
            (r[3] = H),
            (r[4] = M),
            (r[5] = j),
            (r[6] = D),
            (r[7] = $),
            (r[8] = q),
            (r[9] = K);
        }
        finalize() {
          const { h: e, pad: n } = this,
            t = new Uint16Array(10);
          let r = e[1] >>> 13;
          e[1] &= 8191;
          for (let s = 2; s < 10; s++)
            (e[s] += r), (r = e[s] >>> 13), (e[s] &= 8191);
          (e[0] += 5 * r),
            (r = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += r),
            (r = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += r),
            (t[0] = e[0] + 5),
            (r = t[0] >>> 13),
            (t[0] &= 8191);
          for (let s = 1; s < 10; s++)
            (t[s] = e[s] + r), (r = t[s] >>> 13), (t[s] &= 8191);
          t[9] -= 8192;
          let i = (1 ^ r) - 1;
          for (let s = 0; s < 10; s++) t[s] &= i;
          i = ~i;
          for (let s = 0; s < 10; s++) e[s] = (e[s] & i) | t[s];
          (e[0] = 65535 & (e[0] | (e[1] << 13))),
            (e[1] = 65535 & ((e[1] >>> 3) | (e[2] << 10))),
            (e[2] = 65535 & ((e[2] >>> 6) | (e[3] << 7))),
            (e[3] = 65535 & ((e[3] >>> 9) | (e[4] << 4))),
            (e[4] = 65535 & ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14))),
            (e[5] = 65535 & ((e[6] >>> 2) | (e[7] << 11))),
            (e[6] = 65535 & ((e[7] >>> 5) | (e[8] << 8))),
            (e[7] = 65535 & ((e[8] >>> 8) | (e[9] << 5)));
          let o = e[0] + n[0];
          e[0] = 65535 & o;
          for (let s = 1; s < 8; s++)
            (o = (((e[s] + n[s]) | 0) + (o >>> 16)) | 0), (e[s] = 65535 & o);
        }
        update(e) {
          Ii.exists(this);
          const { buffer: n, blockLen: t } = this,
            r = (e = yi(e)).length;
          for (let i = 0; i < r; ) {
            const o = Math.min(t - this.pos, r - i);
            if (o !== t)
              n.set(e.subarray(i, i + o), this.pos),
                (this.pos += o),
                (i += o),
                this.pos === t && (this.process(n, 0, !1), (this.pos = 0));
            else for (; t <= r - i; i += t) this.process(e, i);
          }
          return this;
        }
        destroy() {
          this.h.fill(0), this.r.fill(0), this.buffer.fill(0), this.pad.fill(0);
        }
        digestInto(e) {
          Ii.exists(this), Ii.output(e, this), (this.finished = !0);
          const { buffer: n, h: t } = this;
          let { pos: r } = this;
          if (r) {
            for (n[r++] = 1; r < 16; r++) n[r] = 0;
            this.process(n, 0, !0);
          }
          this.finalize();
          let i = 0;
          for (let o = 0; o < 8; o++)
            (e[i++] = t[o] >>> 0), (e[i++] = t[o] >>> 8);
          return e;
        }
        digest() {
          const { buffer: e, outputLen: n } = this;
          this.digestInto(e);
          const t = e.slice(0, n);
          return this.destroy(), t;
        }
      }
      !(function (e) {
        const n = (n, t) => e(t).update(yi(n)).digest(),
          t = e(new Uint8Array(32));
        (n.outputLen = t.outputLen),
          (n.blockLen = t.blockLen),
          (n.create = (n) => e(n));
      })((e) => new ki(e));
      const Si = vi("expand 16-byte k"),
        Ni = vi("expand 32-byte k"),
        Ti = wi(Si),
        Ui = wi(Ni),
        _i = (e) => !(e.byteOffset % 4),
        Pi = (e) => {
          const {
            core: n,
            rounds: t,
            counterRight: r,
            counterLen: i,
            allow128bitKeys: o,
            extendNonceFn: s,
            blockLen: a,
          } = mi(
            {
              rounds: 20,
              counterRight: !1,
              counterLen: 8,
              allow128bitKeys: !0,
              blockLen: 64,
            },
            e
          );
          Ii.number(i), Ii.number(t), Ii.number(a), Ii.bool(r), Ii.bool(o);
          const c = a / 4;
          if (a % 4 !== 0)
            throw new Error(
              "Salsa/ChaCha: blockLen must be aligned to 4 bytes"
            );
          return function (e, l, d, u) {
            let h =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
            if (
              (Ii.bytes(e),
              Ii.bytes(l),
              Ii.bytes(d),
              u || (u = new Uint8Array(d.length)),
              Ii.bytes(u),
              Ii.number(h),
              h < 0 || h >= 2 ** 32 - 1)
            )
              throw new Error("Salsa/ChaCha: counter overflow");
            if (u.length < d.length)
              throw new Error(
                `Salsa/ChaCha: output (${u.length}) is shorter than data (${d.length})`
              );
            const f = [];
            let g, p;
            if (32 === e.length) (g = e), (p = Ui);
            else {
              if (16 !== e.length || !o)
                throw new Error(
                  `Salsa/ChaCha: invalid 32-byte key, got length=${e.length}`
                );
              (g = new Uint8Array(32)),
                g.set(e),
                g.set(e, 16),
                (p = Ti),
                f.push(g);
            }
            if (s) {
              if (l.length <= 16)
                throw new Error(
                  "Salsa/ChaCha: extended nonce must be bigger than 16 bytes"
                );
              (g = s(p, g, l.subarray(0, 16), new Uint8Array(32))),
                f.push(g),
                (l = l.subarray(16));
            }
            const w = 16 - i;
            if (l.length !== w)
              throw new Error(`Salsa/ChaCha: nonce must be ${w} or 16 bytes`);
            if (12 !== w) {
              const e = new Uint8Array(12);
              e.set(l, r ? 0 : 12 - l.length), f.push((l = e));
            }
            const v = new Uint8Array(a),
              y = wi(v),
              m = wi(g),
              b = wi(l),
              E = _i(d) && wi(d),
              C = _i(u) && wi(u);
            f.push(y);
            const A = d.length;
            for (let r = 0, i = h; r < A; i++) {
              if ((n(p, m, b, y, i, t), i >= 2 ** 32 - 1))
                throw new Error("Salsa/ChaCha: counter overflow");
              const e = Math.min(a, A - r);
              if (e === a && C && E) {
                const e = r / 4;
                if (r % 4 !== 0)
                  throw new Error("Salsa/ChaCha: invalid block position");
                for (let n = 0; n < c; n++) C[e + n] = E[e + n] ^ y[n];
                r += a;
              } else {
                for (let n = 0; n < e; n++) u[r + n] = d[r + n] ^ v[n];
                r += e;
              }
            }
            for (let n = 0; n < f.length; n++) f[n].fill(0);
            return u;
          };
        },
        Li = (e, n) => (e << n) | (e >>> (32 - n));
      function Oi(e, n, t, r, i) {
        let o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 20,
          s = e[0],
          a = e[1],
          c = e[2],
          l = e[3],
          d = n[0],
          u = n[1],
          h = n[2],
          f = n[3],
          g = n[4],
          p = n[5],
          w = n[6],
          v = n[7],
          y = i,
          m = t[0],
          b = t[1],
          E = t[2],
          C = s,
          A = a,
          I = c,
          x = l,
          k = d,
          S = u,
          N = h,
          T = f,
          U = g,
          _ = p,
          P = w,
          L = v,
          O = y,
          B = m,
          R = b,
          H = E;
        for (let j = 0; j < o; j += 2)
          (C = (C + k) | 0),
            (O = Li(O ^ C, 16)),
            (U = (U + O) | 0),
            (k = Li(k ^ U, 12)),
            (C = (C + k) | 0),
            (O = Li(O ^ C, 8)),
            (U = (U + O) | 0),
            (k = Li(k ^ U, 7)),
            (A = (A + S) | 0),
            (B = Li(B ^ A, 16)),
            (_ = (_ + B) | 0),
            (S = Li(S ^ _, 12)),
            (A = (A + S) | 0),
            (B = Li(B ^ A, 8)),
            (_ = (_ + B) | 0),
            (S = Li(S ^ _, 7)),
            (I = (I + N) | 0),
            (R = Li(R ^ I, 16)),
            (P = (P + R) | 0),
            (N = Li(N ^ P, 12)),
            (I = (I + N) | 0),
            (R = Li(R ^ I, 8)),
            (P = (P + R) | 0),
            (N = Li(N ^ P, 7)),
            (x = (x + T) | 0),
            (H = Li(H ^ x, 16)),
            (L = (L + H) | 0),
            (T = Li(T ^ L, 12)),
            (x = (x + T) | 0),
            (H = Li(H ^ x, 8)),
            (L = (L + H) | 0),
            (T = Li(T ^ L, 7)),
            (C = (C + S) | 0),
            (H = Li(H ^ C, 16)),
            (P = (P + H) | 0),
            (S = Li(S ^ P, 12)),
            (C = (C + S) | 0),
            (H = Li(H ^ C, 8)),
            (P = (P + H) | 0),
            (S = Li(S ^ P, 7)),
            (A = (A + N) | 0),
            (O = Li(O ^ A, 16)),
            (L = (L + O) | 0),
            (N = Li(N ^ L, 12)),
            (A = (A + N) | 0),
            (O = Li(O ^ A, 8)),
            (L = (L + O) | 0),
            (N = Li(N ^ L, 7)),
            (I = (I + T) | 0),
            (B = Li(B ^ I, 16)),
            (U = (U + B) | 0),
            (T = Li(T ^ U, 12)),
            (I = (I + T) | 0),
            (B = Li(B ^ I, 8)),
            (U = (U + B) | 0),
            (T = Li(T ^ U, 7)),
            (x = (x + k) | 0),
            (R = Li(R ^ x, 16)),
            (_ = (_ + R) | 0),
            (k = Li(k ^ _, 12)),
            (x = (x + k) | 0),
            (R = Li(R ^ x, 8)),
            (_ = (_ + R) | 0),
            (k = Li(k ^ _, 7));
        let M = 0;
        (r[M++] = (s + C) | 0),
          (r[M++] = (a + A) | 0),
          (r[M++] = (c + I) | 0),
          (r[M++] = (l + x) | 0),
          (r[M++] = (d + k) | 0),
          (r[M++] = (u + S) | 0),
          (r[M++] = (h + N) | 0),
          (r[M++] = (f + T) | 0),
          (r[M++] = (g + U) | 0),
          (r[M++] = (p + _) | 0),
          (r[M++] = (w + P) | 0),
          (r[M++] = (v + L) | 0),
          (r[M++] = (y + O) | 0),
          (r[M++] = (m + B) | 0),
          (r[M++] = (b + R) | 0),
          (r[M++] = (E + H) | 0);
      }
      const Bi = Pi({
        core: Oi,
        counterRight: !1,
        counterLen: 4,
        allow128bitKeys: !1,
      });
      const Ri = new Uint8Array([0]),
        Hi = new Uint8Array();
      const Mi = (e, n, t, r, i) =>
        (function (e, n, t) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32;
          if ((c.hash(e), c.number(r), r > 255 * e.outputLen))
            throw new Error("Length should be <= 255*HashLen");
          const i = Math.ceil(r / e.outputLen);
          void 0 === t && (t = Hi);
          const o = new Uint8Array(i * e.outputLen),
            s = be.create(e, n),
            a = s._cloneInto(),
            l = new Uint8Array(s.outputLen);
          for (let c = 0; c < i; c++)
            (Ri[0] = c + 1),
              a
                .update(0 === c ? Hi : l)
                .update(t)
                .update(Ri)
                .digestInto(l),
              o.set(l, e.outputLen * c),
              s._cloneInto(a);
          return s.destroy(), a.destroy(), l.fill(0), Ri.fill(0), o.slice(0, r);
        })(
          e,
          (function (e, n, t) {
            return (
              c.hash(e),
              void 0 === t && (t = new Uint8Array(e.outputLen)),
              be(e, w(t), w(n))
            );
          })(e, n, t),
          r,
          i
        );
      var ji = Object.defineProperty,
        Di = (e, n) => {
          for (var t in n) ji(e, t, { get: n[t], enumerable: !0 });
        };
      function $i() {
        return g(We.utils.randomPrivateKey());
      }
      function qi(e) {
        return g(We.getPublicKey(e));
      }
      Di(
        {},
        {
          MessageNode: () => Gi,
          MessageQueue: () => Ji,
          insertEventIntoAscendingList: () => Vi,
          insertEventIntoDescendingList: () => Fi,
          normalizeURL: () => Wi,
          utf8Decoder: () => Ki,
          utf8Encoder: () => zi,
        }
      );
      var Ki = new TextDecoder("utf-8"),
        zi = new TextEncoder();
      function Wi(e) {
        let n = new URL(e);
        return (
          (n.pathname = n.pathname.replace(/\/+/g, "/")),
          n.pathname.endsWith("/") && (n.pathname = n.pathname.slice(0, -1)),
          (("80" === n.port && "ws:" === n.protocol) ||
            ("443" === n.port && "wss:" === n.protocol)) &&
            (n.port = ""),
          n.searchParams.sort(),
          (n.hash = ""),
          n.toString()
        );
      }
      function Fi(e, n) {
        var t;
        let r,
          i = 0,
          o = e.length - 1,
          s = i;
        if (o < 0) s = 0;
        else if (n.created_at < e[o].created_at) s = o + 1;
        else if (n.created_at >= e[i].created_at) s = i;
        else
          for (;;) {
            if (o <= i + 1) {
              s = o;
              break;
            }
            if (
              ((r = Math.floor(i + (o - i) / 2)),
              e[r].created_at > n.created_at)
            )
              i = r;
            else {
              if (!(e[r].created_at < n.created_at)) {
                s = r;
                break;
              }
              o = r;
            }
          }
        return (null === (t = e[s]) || void 0 === t ? void 0 : t.id) !== n.id
          ? [...e.slice(0, s), n, ...e.slice(s)]
          : e;
      }
      function Vi(e, n) {
        var t;
        let r,
          i = 0,
          o = e.length - 1,
          s = i;
        if (o < 0) s = 0;
        else if (n.created_at > e[o].created_at) s = o + 1;
        else if (n.created_at <= e[i].created_at) s = i;
        else
          for (;;) {
            if (o <= i + 1) {
              s = o;
              break;
            }
            if (
              ((r = Math.floor(i + (o - i) / 2)),
              e[r].created_at < n.created_at)
            )
              i = r;
            else {
              if (!(e[r].created_at > n.created_at)) {
                s = r;
                break;
              }
              o = r;
            }
          }
        return (null === (t = e[s]) || void 0 === t ? void 0 : t.id) !== n.id
          ? [...e.slice(0, s), n, ...e.slice(s)]
          : e;
      }
      var Gi = class {
          get value() {
            return this._value;
          }
          set value(e) {
            this._value = e;
          }
          get next() {
            return this._next;
          }
          set next(e) {
            this._next = e;
          }
          constructor(e) {
            (0, i.A)(this, "_value", void 0),
              (0, i.A)(this, "_next", void 0),
              (this._value = e),
              (this._next = null);
          }
        },
        Ji = class {
          get first() {
            return this._first;
          }
          set first(e) {
            this._first = e;
          }
          get last() {
            return this._last;
          }
          set last(e) {
            this._last = e;
          }
          get size() {
            return this._size;
          }
          set size(e) {
            this._size = e;
          }
          constructor() {
            (0, i.A)(this, "_first", void 0),
              (0, i.A)(this, "_last", void 0),
              (0, i.A)(this, "_size", void 0),
              (this._first = null),
              (this._last = null),
              (this._size = 0);
          }
          enqueue(e) {
            const n = new Gi(e);
            return (
              0 !== this._size && this._last
                ? ((this._last.next = n), (this._last = n))
                : ((this._first = n), (this._last = n)),
              this._size++,
              !0
            );
          }
          dequeue() {
            if (0 === this._size || !this._first) return null;
            let e = this._first;
            return (
              (this._first = e.next), (e.next = null), this._size--, e.value
            );
          }
        },
        Zi = Symbol("verified");
      function Yi(e, n) {
        const t = e;
        return (
          (t.pubkey = qi(n)),
          (t.id = Qi(t)),
          (t.sig = to(t, n)),
          (t[Zi] = !0),
          t
        );
      }
      function Qi(e) {
        return g(
          N(
            zi.encode(
              (function (e) {
                if (!eo(e))
                  throw new Error(
                    "can't serialize event with wrong or missing properties"
                  );
                return JSON.stringify([
                  0,
                  e.pubkey,
                  e.created_at,
                  e.kind,
                  e.tags,
                  e.content,
                ]);
              })(e)
            )
          )
        );
      }
      var Xi = (e) => e instanceof Object;
      function eo(e) {
        if (!Xi(e)) return !1;
        if ("number" !== typeof e.kind) return !1;
        if ("string" !== typeof e.content) return !1;
        if ("number" !== typeof e.created_at) return !1;
        if ("string" !== typeof e.pubkey) return !1;
        if (!e.pubkey.match(/^[a-f0-9]{64}$/)) return !1;
        if (!Array.isArray(e.tags)) return !1;
        for (let n = 0; n < e.tags.length; n++) {
          let t = e.tags[n];
          if (!Array.isArray(t)) return !1;
          for (let e = 0; e < t.length; e++)
            if ("object" === typeof t[e]) return !1;
        }
        return !0;
      }
      function no(e) {
        if ("boolean" === typeof e[Zi]) return e[Zi];
        const n = Qi(e);
        if (n !== e.id) return (e[Zi] = !1);
        try {
          return (e[Zi] = We.verify(e.sig, n, e.pubkey));
        } catch (t) {
          return (e[Zi] = !1);
        }
      }
      function to(e, n) {
        return g(We.sign(Qi(e), n));
      }
      function ro(e, n) {
        if (
          e.ids &&
          -1 === e.ids.indexOf(n.id) &&
          !e.ids.some((e) => n.id.startsWith(e))
        )
          return !1;
        if (e.kinds && -1 === e.kinds.indexOf(n.kind)) return !1;
        if (
          e.authors &&
          -1 === e.authors.indexOf(n.pubkey) &&
          !e.authors.some((e) => n.pubkey.startsWith(e))
        )
          return !1;
        for (let t in e)
          if ("#" === t[0]) {
            let r = e[`#${t.slice(1)}`];
            if (
              r &&
              !n.tags.find((e) => {
                let [n, i] = e;
                return n === t.slice(1) && -1 !== r.indexOf(i);
              })
            )
              return !1;
          }
        return (
          !(e.since && n.created_at < e.since) &&
          !(e.until && n.created_at > e.until)
        );
      }
      function io(e, n) {
        for (let t = 0; t < e.length; t++) if (ro(e[t], n)) return !0;
        return !1;
      }
      function oo() {
        let e = {};
        for (let n = 0; n < arguments.length; n++) {
          let t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          Object.entries(t).forEach((n) => {
            let [t, r] = n;
            if (
              "kinds" === t ||
              "ids" === t ||
              "authors" === t ||
              "#" === t[0]
            ) {
              e[t] = e[t] || [];
              for (let n = 0; n < r.length; n++) {
                let i = r[n];
                e[t].includes(i) || e[t].push(i);
              }
            }
          }),
            t.limit && (!e.limit || t.limit > e.limit) && (e.limit = t.limit),
            t.until && (!e.until || t.until > e.until) && (e.until = t.until),
            t.since && (!e.since || t.since < e.since) && (e.since = t.since);
        }
        return e;
      }
      function so(e, n) {
        let t = n.length + 3,
          r = e.indexOf(`"${n}":`) + t,
          i = e.slice(r).indexOf('"') + r + 1;
        return e.slice(i, i + 64);
      }
      function ao(e, n) {
        let t = n.length,
          r = e.indexOf(`"${n}":`) + t + 3,
          i = e.slice(r),
          o = Math.min(i.indexOf(","), i.indexOf("}"));
        return parseInt(i.slice(0, o), 10);
      }
      function co(e) {
        let n = e.slice(0, 22).indexOf('"EVENT"');
        if (-1 === n) return null;
        let t = e.slice(n + 7 + 1).indexOf('"');
        if (-1 === t) return null;
        let r = n + 7 + 1 + t,
          i = e.slice(r + 1, 80).indexOf('"');
        if (-1 === i) return null;
        let o = r + 1 + i;
        return e.slice(r + 1, o);
      }
      function lo(e, n) {
        return n === so(e, "id");
      }
      function uo(e, n) {
        return n === so(e, "pubkey");
      }
      function ho(e, n) {
        return n === ao(e, "kind");
      }
      Di(
        {},
        {
          getHex64: () => so,
          getInt: () => ao,
          getSubscriptionId: () => co,
          matchEventId: () => lo,
          matchEventKind: () => ho,
          matchEventPubkey: () => uo,
        }
      );
      function fo(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            listTimeout: t = 3e3,
            getTimeout: r = 3e3,
            countTimeout: i = 3e3,
          } = n;
        var o,
          s,
          a = {},
          c = { connect: [], disconnect: [], error: [], notice: [], auth: [] },
          l = {},
          d = {};
        function u() {
          var e;
          return (
            1 === (null === (e = o) || void 0 === e ? void 0 : e.readyState)
          );
        }
        async function h(e) {
          let n = JSON.stringify(e);
          if (u() || (await new Promise((e) => setTimeout(e, 1e3)), u()))
            try {
              o.send(n);
            } catch (t) {
              console.log(t);
            }
        }
        const f = function (e) {
          let {
              verb: n = "REQ",
              skipVerification: t = !1,
              alreadyHaveEvent: r = null,
              id: i = Math.random().toString().slice(2),
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            o = i;
          (a[o] = {
            id: o,
            filters: e,
            skipVerification: t,
            alreadyHaveEvent: r,
          }),
            h([n, o, ...e]);
          let s = {
            sub: function (n) {
              let i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return f(n || e, {
                skipVerification: i.skipVerification || t,
                alreadyHaveEvent: i.alreadyHaveEvent || r,
                id: o,
              });
            },
            unsub: () => {
              delete a[o], delete l[o], h(["CLOSE", o]);
            },
            on: (e, n) => {
              (l[o] = l[o] || { event: [], count: [], eose: [] }),
                l[o][e].push(n);
            },
            off: (e, n) => {
              let t = l[o],
                r = t[e].indexOf(n);
              r >= 0 && t[e].splice(r, 1);
            },
            get events() {
              return go(s);
            },
          };
          return s;
        };
        function g(e, n) {
          return new Promise((t, r) => {
            if (!e.id) return void r(new Error(`event ${e} has no id`));
            let i = e.id;
            h([n, e]), (d[i] = { resolve: t, reject: r });
          });
        }
        return {
          url: e,
          sub: f,
          on: (e, n) => {
            var t;
            c[e].push(n),
              "connect" === e &&
                1 ===
                  (null === (t = o) || void 0 === t ? void 0 : t.readyState) &&
                n();
          },
          off: (e, n) => {
            let t = c[e].indexOf(n);
            -1 !== t && c[e].splice(t, 1);
          },
          list: (e, n) =>
            new Promise((r) => {
              let i = f(e, n),
                o = [],
                s = setTimeout(() => {
                  i.unsub(), r(o);
                }, t);
              i.on("eose", () => {
                i.unsub(), clearTimeout(s), r(o);
              }),
                i.on("event", (e) => {
                  o.push(e);
                });
            }),
          get: (e, n) =>
            new Promise((t) => {
              let i = f([e], n),
                o = setTimeout(() => {
                  i.unsub(), t(null);
                }, r);
              i.on("event", (e) => {
                i.unsub(), clearTimeout(o), t(e);
              });
            }),
          count: (e) =>
            new Promise((n) => {
              let t = f(e, { ...f, verb: "COUNT" }),
                r = setTimeout(() => {
                  t.unsub(), n(null);
                }, i);
              t.on("count", (e) => {
                t.unsub(), clearTimeout(r), n(e);
              });
            }),
          async publish(e) {
            await g(e, "EVENT");
          },
          async auth(e) {
            await g(e, "AUTH");
          },
          connect: async function () {
            u() ||
              (await (async function () {
                return (
                  s ||
                  ((s = new Promise((n, t) => {
                    try {
                      o = new WebSocket(e);
                    } catch (h) {
                      t(h);
                    }
                    (o.onopen = () => {
                      c.connect.forEach((e) => e()), n();
                    }),
                      (o.onerror = () => {
                        (s = void 0), c.error.forEach((e) => e()), t();
                      }),
                      (o.onclose = async () => {
                        (s = void 0), c.disconnect.forEach((e) => e());
                      });
                    let r,
                      i = new Ji();
                    function u() {
                      if (0 === i.size)
                        return clearInterval(r), void (r = null);
                      var n = i.dequeue();
                      if (!n) return;
                      let t = co(n);
                      if (t) {
                        let r = a[t];
                        if (
                          r &&
                          r.alreadyHaveEvent &&
                          r.alreadyHaveEvent(so(n, "id"), e)
                        )
                          return;
                      }
                      try {
                        let e = JSON.parse(n);
                        switch (e[0]) {
                          case "EVENT": {
                            let n = e[1],
                              t = e[2];
                            var o;
                            return void (
                              eo(t) &&
                              a[n] &&
                              (a[n].skipVerification || no(t)) &&
                              io(a[n].filters, t) &&
                              (a[n],
                              (
                                (null === (o = l[n]) || void 0 === o
                                  ? void 0
                                  : o.event) || []
                              ).forEach((e) => e(t)))
                            );
                          }
                          case "COUNT":
                            let n = e[1],
                              t = e[2];
                            var s;
                            return void (
                              a[n] &&
                              (
                                (null === (s = l[n]) || void 0 === s
                                  ? void 0
                                  : s.count) || []
                              ).forEach((e) => e(t))
                            );
                          case "EOSE": {
                            let n = e[1];
                            return void (
                              n in l &&
                              (l[n].eose.forEach((e) => e()), (l[n].eose = []))
                            );
                          }
                          case "OK": {
                            let n = e[1],
                              t = e[2],
                              r = e[3] || "";
                            if (n in d) {
                              let { resolve: e, reject: i } = d[n];
                              t ? e(null) : i(new Error(r));
                            }
                            return;
                          }
                          case "NOTICE":
                            let r = e[1];
                            return void c.notice.forEach((e) => e(r));
                          case "AUTH": {
                            var u;
                            let n = e[1];
                            return void (
                              null === (u = c.auth) ||
                              void 0 === u ||
                              u.forEach((e) => e(n))
                            );
                          }
                        }
                      } catch (h) {
                        return;
                      }
                    }
                    o.onmessage = (e) => {
                      i.enqueue(e.data), r || (r = setInterval(u, 0));
                    };
                  })),
                  s)
                );
              })());
          },
          close() {
            var e;
            (c = {
              connect: [],
              disconnect: [],
              error: [],
              notice: [],
              auth: [],
            }),
              (l = {}),
              (d = {}),
              (null === (e = o) || void 0 === e ? void 0 : e.readyState) ===
                WebSocket.OPEN && o.close();
          },
          get status() {
            var e, n;
            return null !==
              (e = null === (n = o) || void 0 === n ? void 0 : n.readyState) &&
              void 0 !== e
              ? e
              : 3;
          },
        };
      }
      async function* go(e) {
        let n;
        const t = [],
          r = (e) => {
            n ? (n(e), (n = void 0)) : t.push(e);
          };
        e.on("event", r);
        try {
          for (;;)
            if (t.length > 0) yield t.shift();
            else {
              const e = await new Promise((e) => {
                n = e;
              });
              yield e;
            }
        } finally {
          e.off("event", r);
        }
      }
      var po = class {
          constructor() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            (0, i.A)(this, "_conn", void 0),
              (0, i.A)(this, "_seenOn", {}),
              (0, i.A)(this, "batchedByKey", {}),
              (0, i.A)(this, "eoseSubTimeout", void 0),
              (0, i.A)(this, "getTimeout", void 0),
              (0, i.A)(this, "seenOnEnabled", !0),
              (0, i.A)(this, "batchInterval", 100),
              (this._conn = {}),
              (this.eoseSubTimeout = e.eoseSubTimeout || 3400),
              (this.getTimeout = e.getTimeout || 3400),
              (this.seenOnEnabled = !1 !== e.seenOnEnabled),
              (this.batchInterval = e.batchInterval || 100);
          }
          close(e) {
            e.forEach((e) => {
              let n = this._conn[Wi(e)];
              n && n.close();
            });
          }
          async ensureRelay(e) {
            const n = Wi(e);
            this._conn[n] ||
              (this._conn[n] = fo(n, {
                getTimeout: 0.9 * this.getTimeout,
                listTimeout: 0.9 * this.getTimeout,
              }));
            const t = this._conn[n];
            return await t.connect(), t;
          }
          sub(e, n, t) {
            let r = new Set(),
              i = { ...(t || {}) };
            i.alreadyHaveEvent = (e, n) => {
              var i;
              if (
                null !== t &&
                void 0 !== t &&
                null !== (i = t.alreadyHaveEvent) &&
                void 0 !== i &&
                i.call(t, e, n)
              )
                return !0;
              if (this.seenOnEnabled) {
                let t = this._seenOn[e] || new Set();
                t.add(n), (this._seenOn[e] = t);
              }
              return r.has(e);
            };
            let o = [],
              s = new Set(),
              a = new Set(),
              c = e.length,
              l = !1,
              d = setTimeout(() => {
                l = !0;
                for (let e of a.values()) e();
              }, (null === t || void 0 === t ? void 0 : t.eoseSubTimeout) || this.eoseSubTimeout);
            e.filter((e, n, t) => t.indexOf(e) === n).forEach(async (e) => {
              let t;
              try {
                t = await this.ensureRelay(e);
              } catch (f) {
                return void h();
              }
              if (!t) return;
              let u = t.sub(n, i);
              function h() {
                if ((c--, 0 === c)) {
                  clearTimeout(d);
                  for (let e of a.values()) e();
                }
              }
              u.on("event", (e) => {
                r.add(e.id);
                for (let n of s.values()) n(e);
              }),
                u.on("eose", () => {
                  l || h();
                }),
                o.push(u);
            });
            let u = {
              sub: (e, n) => (o.forEach((t) => t.sub(e, n)), u),
              unsub() {
                o.forEach((e) => e.unsub());
              },
              on(e, n) {
                "event" === e ? s.add(n) : "eose" === e && a.add(n);
              },
              off(e, n) {
                "event" === e ? s.delete(n) : "eose" === e && a.delete(n);
              },
              get events() {
                return go(u);
              },
            };
            return u;
          }
          get(e, n, t) {
            return new Promise((r) => {
              let i = this.sub(e, [n], t),
                o = setTimeout(() => {
                  i.unsub(), r(null);
                }, this.getTimeout);
              i.on("event", (e) => {
                r(e), clearTimeout(o), i.unsub();
              });
            });
          }
          list(e, n, t) {
            return new Promise((r) => {
              let i = [],
                o = this.sub(e, n, t);
              o.on("event", (e) => {
                i.push(e);
              }),
                o.on("eose", () => {
                  o.unsub(), r(i);
                });
            });
          }
          batchedList(e, n, t) {
            return new Promise((r) => {
              this.batchedByKey[e]
                ? this.batchedByKey[e].push({
                    filters: t,
                    relays: n,
                    resolve: r,
                    events: [],
                  })
                : ((this.batchedByKey[e] = [
                    { filters: t, relays: n, resolve: r, events: [] },
                  ]),
                  setTimeout(() => {
                    Object.keys(this.batchedByKey).forEach(async (e) => {
                      const n = this.batchedByKey[e],
                        t = [],
                        r = [];
                      n.forEach((e) => {
                        t.push(...e.filters), r.push(...e.relays);
                      });
                      const i = this.sub(r, [oo(...t)]);
                      i.on("event", (e) => {
                        n.forEach((n) => io(n.filters, e) && n.events.push(e));
                      }),
                        i.on("eose", () => {
                          i.unsub(), n.forEach((e) => e.resolve(e.events));
                        }),
                        delete this.batchedByKey[e];
                    });
                  }, this.batchInterval));
            });
          }
          publish(e, n) {
            return e.map(async (e) => (await this.ensureRelay(e)).publish(n));
          }
          seenOn(e) {
            var n, t;
            return Array.from(
              (null === (n = this._seenOn[e]) ||
              void 0 === n ||
              null === (t = n.values) ||
              void 0 === t
                ? void 0
                : t.call(n)) || []
            );
          }
        },
        wo = {};
      Di(wo, {
        BECH32_REGEX: () => yo,
        decode: () => mo,
        naddrEncode: () => No,
        neventEncode: () => So,
        noteEncode: () => Ao,
        nprofileEncode: () => ko,
        npubEncode: () => Co,
        nrelayEncode: () => To,
        nsecEncode: () => Eo,
      });
      var vo = 5e3,
        yo = /[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;
      function mo(e) {
        let { prefix: n, words: t } = mn.decode(e, vo),
          r = new Uint8Array(mn.fromWords(t));
        switch (n) {
          case "nprofile": {
            var i;
            let e = bo(r);
            if (null === (i = e[0]) || void 0 === i || !i[0])
              throw new Error("missing TLV 0 for nprofile");
            if (32 !== e[0][0].length)
              throw new Error("TLV 0 should be 32 bytes");
            return {
              type: "nprofile",
              data: {
                pubkey: g(e[0][0]),
                relays: e[1] ? e[1].map((e) => Ki.decode(e)) : [],
              },
            };
          }
          case "nevent": {
            var o, s, a;
            let e = bo(r);
            if (null === (o = e[0]) || void 0 === o || !o[0])
              throw new Error("missing TLV 0 for nevent");
            if (32 !== e[0][0].length)
              throw new Error("TLV 0 should be 32 bytes");
            if (e[2] && 32 !== e[2][0].length)
              throw new Error("TLV 2 should be 32 bytes");
            if (e[3] && 4 !== e[3][0].length)
              throw new Error("TLV 3 should be 4 bytes");
            return {
              type: "nevent",
              data: {
                id: g(e[0][0]),
                relays: e[1] ? e[1].map((e) => Ki.decode(e)) : [],
                author:
                  null !== (s = e[2]) && void 0 !== s && s[0]
                    ? g(e[2][0])
                    : void 0,
                kind:
                  null !== (a = e[3]) && void 0 !== a && a[0]
                    ? parseInt(g(e[3][0]), 16)
                    : void 0,
              },
            };
          }
          case "naddr": {
            var c, l, d;
            let e = bo(r);
            if (null === (c = e[0]) || void 0 === c || !c[0])
              throw new Error("missing TLV 0 for naddr");
            if (null === (l = e[2]) || void 0 === l || !l[0])
              throw new Error("missing TLV 2 for naddr");
            if (32 !== e[2][0].length)
              throw new Error("TLV 2 should be 32 bytes");
            if (null === (d = e[3]) || void 0 === d || !d[0])
              throw new Error("missing TLV 3 for naddr");
            if (4 !== e[3][0].length)
              throw new Error("TLV 3 should be 4 bytes");
            return {
              type: "naddr",
              data: {
                identifier: Ki.decode(e[0][0]),
                pubkey: g(e[2][0]),
                kind: parseInt(g(e[3][0]), 16),
                relays: e[1] ? e[1].map((e) => Ki.decode(e)) : [],
              },
            };
          }
          case "nrelay": {
            var u;
            let e = bo(r);
            if (null === (u = e[0]) || void 0 === u || !u[0])
              throw new Error("missing TLV 0 for nrelay");
            return { type: "nrelay", data: Ki.decode(e[0][0]) };
          }
          case "nsec":
          case "npub":
          case "note":
            return { type: n, data: g(r) };
          default:
            throw new Error(`unknown prefix ${n}`);
        }
      }
      function bo(e) {
        let n = {},
          t = e;
        for (; t.length > 0; ) {
          let e = t[0],
            r = t[1];
          if (!r) throw new Error(`malformed TLV ${e}`);
          let i = t.slice(2, 2 + r);
          if (((t = t.slice(2 + r)), i.length < r))
            throw new Error(`not enough data to read on TLV ${e}`);
          (n[e] = n[e] || []), n[e].push(i);
        }
        return n;
      }
      function Eo(e) {
        return xo("nsec", e);
      }
      function Co(e) {
        return xo("npub", e);
      }
      function Ao(e) {
        return xo("note", e);
      }
      function Io(e, n) {
        let t = mn.toWords(n);
        return mn.encode(e, t, vo);
      }
      function xo(e, n) {
        return Io(e, p(n));
      }
      function ko(e) {
        return Io(
          "nprofile",
          Uo({ 0: [p(e.pubkey)], 1: (e.relays || []).map((e) => zi.encode(e)) })
        );
      }
      function So(e) {
        let n;
        return (
          void 0 != e.kind &&
            (n = (function (e) {
              const n = new Uint8Array(4);
              return (
                (n[0] = (e >> 24) & 255),
                (n[1] = (e >> 16) & 255),
                (n[2] = (e >> 8) & 255),
                (n[3] = 255 & e),
                n
              );
            })(e.kind)),
          Io(
            "nevent",
            Uo({
              0: [p(e.id)],
              1: (e.relays || []).map((e) => zi.encode(e)),
              2: e.author ? [p(e.author)] : [],
              3: n ? [new Uint8Array(n)] : [],
            })
          )
        );
      }
      function No(e) {
        let n = new ArrayBuffer(4);
        return (
          new DataView(n).setUint32(0, e.kind, !1),
          Io(
            "naddr",
            Uo({
              0: [zi.encode(e.identifier)],
              1: (e.relays || []).map((e) => zi.encode(e)),
              2: [p(e.pubkey)],
              3: [new Uint8Array(n)],
            })
          )
        );
      }
      function To(e) {
        return Io("nrelay", Uo({ 0: [zi.encode(e)] }));
      }
      function Uo(e) {
        let n = [];
        return (
          Object.entries(e).forEach((e) => {
            let [t, r] = e;
            r.forEach((e) => {
              let r = new Uint8Array(e.length + 2);
              r.set([parseInt(t)], 0),
                r.set([e.length], 1),
                r.set(e, 2),
                n.push(r);
            });
          }),
          v(...n)
        );
      }
      var _o = {};
      async function Po(e, n, t) {
        const r = Oo(Te.getSharedSecret(e, "02" + n));
        let i = Uint8Array.from(b(16)),
          o = zi.encode(t),
          s = await crypto.subtle.importKey("raw", r, { name: "AES-CBC" }, !1, [
            "encrypt",
          ]),
          a = await crypto.subtle.encrypt({ name: "AES-CBC", iv: i }, s, o);
        return `${cn.encode(new Uint8Array(a))}?iv=${cn.encode(
          new Uint8Array(i.buffer)
        )}`;
      }
      async function Lo(e, n, t) {
        let [r, i] = t.split("?iv="),
          o = Oo(Te.getSharedSecret(e, "02" + n)),
          s = await crypto.subtle.importKey("raw", o, { name: "AES-CBC" }, !1, [
            "decrypt",
          ]),
          a = cn.decode(r),
          c = cn.decode(i),
          l = await crypto.subtle.decrypt({ name: "AES-CBC", iv: c }, s, a);
        return Ki.decode(l);
      }
      function Oo(e) {
        return e.slice(1, 33);
      }
      Di(_o, { decrypt: () => Lo, encrypt: () => Po }),
        "undefined" !== typeof crypto &&
          !crypto.subtle &&
          crypto.webcrypto &&
          (crypto.subtle = crypto.webcrypto.subtle);
      Di(
        {},
        {
          NIP05_REGEX: () => Ro,
          queryProfile: () => jo,
          searchDomain: () => Mo,
          useFetchImplementation: () => Ho,
        }
      );
      var Bo,
        Ro = /^(?:([\w.+-]+)@)?([\w.-]+)$/;
      try {
        Bo = fetch;
      } catch {}
      function Ho(e) {
        Bo = e;
      }
      async function Mo(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        try {
          return (
            await (
              await Bo(`https://${e}/.well-known/nostr.json?name=${n}`)
            ).json()
          ).names;
        } catch (t) {
          return {};
        }
      }
      async function jo(e) {
        const n = e.match(Ro);
        if (!n) return null;
        const [t, r = "_", i] = n;
        try {
          const e = await Bo(`https://${i}/.well-known/nostr.json?name=${r}`),
            { names: n, relays: t } = (function (e) {
              const n = { names: {} };
              for (const [t, r] of Object.entries(e.names))
                "string" === typeof t &&
                  "string" === typeof r &&
                  (n.names[t] = r);
              if (e.relays) {
                n.relays = {};
                for (const [t, r] of Object.entries(e.relays))
                  "string" === typeof t &&
                    Array.isArray(r) &&
                    (n.relays[t] = r.filter((e) => "string" === typeof e));
              }
              return n;
            })(await e.json()),
            o = n[r];
          return o
            ? { pubkey: o, relays: null === t || void 0 === t ? void 0 : t[o] }
            : null;
        } catch (o) {
          return null;
        }
      }
      function Do(e, n) {
        let t = gi
          .fromMasterSeed(Bt(e, n))
          .derive("m/44'/1237'/0'/0/0").privateKey;
        if (!t) throw new Error("could not derive private key");
        return g(t);
      }
      function $o() {
        return Ut(En);
      }
      function qo(e) {
        return Lt(e, En);
      }
      Di(
        {},
        {
          generateSeedWords: () => $o,
          privateKeyFromSeedWords: () => Do,
          validateWords: () => qo,
        }
      );
      function Ko(e) {
        const n = { reply: void 0, root: void 0, mentions: [], profiles: [] },
          t = [];
        for (const r of e.tags)
          "e" === r[0] && r[1] && t.push(r),
            "p" === r[0] &&
              r[1] &&
              n.profiles.push({ pubkey: r[1], relays: r[2] ? [r[2]] : [] });
        for (let r = 0; r < t.length; r++) {
          const e = t[r],
            [i, o, s, a] = e,
            c = { id: o, relays: s ? [s] : [] },
            l = 0 === r,
            d = r === t.length - 1;
          "root" !== a
            ? "reply" !== a
              ? "mention" !== a
                ? l
                  ? (n.root = c)
                  : d
                  ? (n.reply = c)
                  : n.mentions.push(c)
                : n.mentions.push(c)
              : (n.reply = c)
            : (n.root = c);
        }
        return n;
      }
      Di({}, { parse: () => Ko });
      function zo(e) {
        let n = 0;
        for (let t = 0; t < e.length; t++) {
          const r = parseInt(e[t], 16);
          if (0 !== r) {
            n += Math.clz32(r) - 28;
            break;
          }
          n += 4;
        }
        return n;
      }
      function Wo(e, n) {
        let t = 0;
        const r = e,
          i = ["nonce", t.toString(), n.toString()];
        for (r.tags.push(i); ; ) {
          const e = Math.floor(new Date().getTime() / 1e3);
          if (
            (e !== r.created_at && ((t = 0), (r.created_at = e)),
            (i[1] = (++t).toString()),
            (r.id = Qi(r)),
            zo(r.id) >= n)
          )
            break;
        }
        return r;
      }
      Di({}, { getPow: () => zo, minePow: () => Wo });
      function Fo(e, n, t, r) {
        var i;
        return Yi(
          {
            kind: 6,
            tags: [
              ...(null !== (i = e.tags) && void 0 !== i ? i : []),
              ["e", n.id, t],
              ["p", n.pubkey],
            ],
            content: "" === e.content ? "" : JSON.stringify(n),
            created_at: e.created_at,
          },
          r
        );
      }
      function Vo(e) {
        var n, t;
        if (6 !== e.kind) return;
        let r, i;
        for (
          let o = e.tags.length - 1;
          o >= 0 && (void 0 === r || void 0 === i);
          o--
        ) {
          const n = e.tags[o];
          n.length >= 2 &&
            ("e" === n[0] && void 0 === r
              ? (r = n)
              : "p" === n[0] && void 0 === i && (i = n));
        }
        return void 0 !== r
          ? {
              id: r[1],
              relays: [
                r[2],
                null === (n = i) || void 0 === n ? void 0 : n[2],
              ].filter((e) => "string" === typeof e),
              author: null === (t = i) || void 0 === t ? void 0 : t[1],
            }
          : void 0;
      }
      function Go(e) {
        let { skipVerification: n } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const t = Vo(e);
        if (void 0 === t || "" === e.content) return;
        let r;
        try {
          r = JSON.parse(e.content);
        } catch (i) {
          return;
        }
        return r.id === t.id && (n || no(r)) ? r : void 0;
      }
      Di(
        {},
        {
          finishRepostEvent: () => Fo,
          getRepostedEvent: () => Go,
          getRepostedEventPointer: () => Vo,
        }
      );
      Di({}, { NOSTR_URI_REGEX: () => Jo, parse: () => Yo, test: () => Zo });
      var Jo = new RegExp(`nostr:(${yo.source})`);
      function Zo(e) {
        return "string" === typeof e && new RegExp(`^${Jo.source}$`).test(e);
      }
      function Yo(e) {
        const n = e.match(new RegExp(`^${Jo.source}$`));
        if (!n) throw new Error(`Invalid Nostr URI: ${e}`);
        return { uri: n[0], value: n[1], decoded: mo(n[1]) };
      }
      function Qo(e, n, t) {
        var r, i;
        const o = n.tags.filter(
          (e) => e.length >= 2 && ("e" === e[0] || "p" === e[0])
        );
        return Yi(
          {
            ...e,
            kind: 7,
            tags: [
              ...(null !== (r = e.tags) && void 0 !== r ? r : []),
              ...o,
              ["e", n.id],
              ["p", n.pubkey],
            ],
            content: null !== (i = e.content) && void 0 !== i ? i : "+",
          },
          t
        );
      }
      function Xo(e) {
        if (7 !== e.kind) return;
        let n, t;
        for (
          let r = e.tags.length - 1;
          r >= 0 && (void 0 === n || void 0 === t);
          r--
        ) {
          const i = e.tags[r];
          i.length >= 2 &&
            ("e" === i[0] && void 0 === n
              ? (n = i)
              : "p" === i[0] && void 0 === t && (t = i));
        }
        return void 0 !== n && void 0 !== t
          ? {
              id: n[1],
              relays: [n[2], t[2]].filter((e) => void 0 !== e),
              author: t[1],
            }
          : void 0;
      }
      Di(
        {},
        { finishReactionEvent: () => Qo, getReactedEventPointer: () => Xo }
      );
      function es(e, n) {
        let t = [];
        (n.kind || -1) >= 0 && t.push(`kind=${n.kind}`),
          n.until && t.push(`created_at<${n.until}`),
          n.since && t.push(`created_at>${n.since}`);
        let r = t.join("&");
        if ("" === r)
          throw new Error(
            "refusing to create a delegation without any conditions"
          );
        let i = N(zi.encode(`nostr:delegation:${n.pubkey}:${r}`)),
          o = g(We.sign(i, e));
        return { from: qi(e), to: n.pubkey, cond: r, sig: o };
      }
      function ns(e) {
        let n = e.tags.find((e) => "delegation" === e[0] && e.length >= 4);
        if (!n) return null;
        let t = n[1],
          r = n[2],
          i = n[3],
          o = r.split("&");
        for (let a = 0; a < o.length; a++) {
          let [n, t, r] = o[a].split(/\b/);
          if (
            ("kind" !== n || "=" !== t || e.kind !== parseInt(r)) &&
            !("created_at" === n && "<" === t && e.created_at < parseInt(r)) &&
            !("created_at" === n && ">" === t && e.created_at > parseInt(r))
          )
            return null;
        }
        let s = N(zi.encode(`nostr:delegation:${e.pubkey}:${r}`));
        return We.verify(i, s, t) ? t : null;
      }
      Di({}, { createDelegation: () => es, getDelegator: () => ns });
      Di({}, { matchAll: () => rs, regex: () => ts, replaceAll: () => is });
      var ts = () => new RegExp(`\\b${Jo.source}\\b`, "g");
      function* rs(e) {
        const n = e.matchAll(ts());
        for (const r of n)
          try {
            const [e, n] = r;
            yield {
              uri: e,
              value: n,
              decoded: mo(n),
              start: r.index,
              end: r.index + e.length,
            };
          } catch (t) {}
      }
      function is(e, n) {
        return e.replaceAll(ts(), (e, t) =>
          n({ uri: e, value: t, decoded: mo(t) })
        );
      }
      Di(
        {},
        {
          channelCreateEvent: () => ss,
          channelHideMessageEvent: () => ls,
          channelMessageEvent: () => cs,
          channelMetadataEvent: () => as,
          channelMuteUserEvent: () => ds,
        }
      );
      var os,
        ss = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return Yi(
            {
              kind: 40,
              tags: [...(null !== (t = e.tags) && void 0 !== t ? t : [])],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        },
        as = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return Yi(
            {
              kind: 41,
              tags: [
                ["e", e.channel_create_event_id],
                ...(null !== (t = e.tags) && void 0 !== t ? t : []),
              ],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        },
        cs = (e, n) => {
          var t;
          const r = [["e", e.channel_create_event_id, e.relay_url, "root"]];
          return (
            e.reply_to_channel_message_event_id &&
              r.push([
                "e",
                e.reply_to_channel_message_event_id,
                e.relay_url,
                "reply",
              ]),
            Yi(
              {
                kind: 42,
                tags: [
                  ...r,
                  ...(null !== (t = e.tags) && void 0 !== t ? t : []),
                ],
                content: e.content,
                created_at: e.created_at,
              },
              n
            )
          );
        },
        ls = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return Yi(
            {
              kind: 43,
              tags: [
                ["e", e.channel_message_event_id],
                ...(null !== (t = e.tags) && void 0 !== t ? t : []),
              ],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        },
        ds = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return Yi(
            {
              kind: 44,
              tags: [
                ["p", e.pubkey_to_mute],
                ...(null !== (t = e.tags) && void 0 !== t ? t : []),
              ],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        };
      Di({}, { useFetchImplementation: () => us, validateGithub: () => hs });
      try {
        os = fetch;
      } catch {}
      function us(e) {
        os = e;
      }
      async function hs(e, n, t) {
        try {
          return (
            (await (
              await os(`https://gist.github.com/${n}/${t}/raw`)
            ).text()) ===
            `Verifying that I control the following Nostr public key: ${e}`
          );
        } catch (r) {
          return !1;
        }
      }
      Di({}, { authenticate: () => fs });
      var fs = async (e) => {
        let { challenge: n, relay: t, sign: r } = e;
        const i = {
          kind: 22242,
          created_at: Math.floor(Date.now() / 1e3),
          tags: [
            ["relay", t.url],
            ["challenge", n],
          ],
          content: "",
        };
        return t.auth(await r(i));
      };
      Di({}, { decrypt: () => ws, encrypt: () => ps, utils: () => gs });
      var gs = {
        v2: {
          maxPlaintextSize: 65408,
          minCiphertextSize: 100,
          maxCiphertextSize: 102400,
          getConversationKey: (e, n) =>
            Te.getSharedSecret(e, "02" + n).subarray(1, 33),
          getMessageKeys(e, n) {
            const t = Mi(N, e, n, "nip44-v2", 76);
            return {
              encryption: t.subarray(0, 32),
              nonce: t.subarray(32, 44),
              auth: t.subarray(44, 76),
            };
          },
          calcPadding(e) {
            if (!Number.isSafeInteger(e) || e < 0)
              throw new Error("expected positive integer");
            if (e <= 32) return 32;
            const n = 1 << (Math.floor(Math.log2(e - 1)) + 1),
              t = n <= 256 ? 32 : n / 8;
            return t * (Math.floor((e - 1) / t) + 1);
          },
          pad(e) {
            const n = zi.encode(e),
              t = n.length;
            if (t < 1 || t >= gs.v2.maxPlaintextSize)
              throw new Error(
                "invalid plaintext length: must be between 1b and 64KB"
              );
            const r = gs.v2.calcPadding(t),
              i = new Uint8Array(r - t),
              o = new Uint8Array(2);
            return new DataView(o.buffer).setUint16(0, t), v(o, n, i);
          },
          unpad(e) {
            const n = new DataView(e.buffer).getUint16(0),
              t = e.subarray(2, 2 + n);
            if (
              0 === n ||
              t.length !== n ||
              e.length !== 2 + gs.v2.calcPadding(n)
            )
              throw new Error("invalid padding");
            return Ki.decode(t);
          },
        },
      };
      function ps(e, n) {
        var t, r;
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const o = null !== (t = i.version) && void 0 !== t ? t : 2;
        if (2 !== o) throw new Error("unknown encryption version " + o);
        const s = null !== (r = i.salt) && void 0 !== r ? r : b(32);
        bi(s, 32);
        const a = gs.v2.getMessageKeys(e, s),
          c = gs.v2.pad(n),
          l = Bi(a.encryption, a.nonce, c),
          d = be(N, a.auth, l);
        return cn.encode(v(new Uint8Array([o]), s, l, d));
      }
      function ws(e, n) {
        const t = gs.v2;
        bi(e, 32);
        const r = n.length;
        if (r < t.minCiphertextSize || r >= t.maxCiphertextSize)
          throw new Error("invalid ciphertext length: " + r);
        if ("#" === n[0]) throw new Error("unknown encryption version");
        let i;
        try {
          i = cn.decode(n);
        } catch (u) {
          throw new Error("invalid base64: " + u.message);
        }
        const o = i.subarray(0, 1)[0];
        if (2 !== o) throw new Error("unknown encryption version " + o);
        const s = i.subarray(1, 33),
          a = i.subarray(33, -32),
          c = i.subarray(-32),
          l = t.getMessageKeys(e, s);
        if (
          !(function (e, n) {
            if (e.length !== n.length)
              throw new Error("equalBytes: Different size of Uint8Arrays");
            let t = !0;
            for (let r = 0; r < e.length; r++) t && (t = e[r] === n[r]);
            return t;
          })(be(N, l.auth, a), c)
        )
          throw new Error("invalid MAC");
        const d = Bi(l.encryption, l.nonce, a);
        return t.unpad(d);
      }
      function vs(e) {
        const { pathname: n, searchParams: t } = new URL(e),
          r = n,
          i = t.get("relay"),
          o = t.get("secret");
        if (!r || !i || !o) throw new Error("invalid connection string");
        return { pubkey: r, relay: i, secret: o };
      }
      async function ys(e) {
        let { pubkey: n, secret: t, invoice: r } = e;
        const i = { method: "pay_invoice", params: { invoice: r } },
          o = await Po(t, n, JSON.stringify(i));
        return Yi(
          {
            kind: 23194,
            created_at: Math.round(Date.now() / 1e3),
            content: o,
            tags: [["p", n]],
          },
          t
        );
      }
      Di(
        {},
        { makeNwcRequestEvent: () => ys, parseConnectionString: () => vs }
      );
      var ms;
      Di(
        {},
        {
          getZapEndpoint: () => Es,
          makeZapReceipt: () => Is,
          makeZapRequest: () => Cs,
          useFetchImplementation: () => bs,
          validateZapRequest: () => As,
        }
      );
      try {
        ms = fetch;
      } catch {}
      function bs(e) {
        ms = e;
      }
      async function Es(e) {
        try {
          let n = "",
            { lud06: t, lud16: r } = JSON.parse(e.content);
          if (t) {
            let { words: e } = mn.decode(t, 1e3),
              r = mn.fromWords(e);
            n = Ki.decode(r);
          } else {
            if (!r) return null;
            {
              let [e, t] = r.split("@");
              n = `https://${t}/.well-known/lnurlp/${e}`;
            }
          }
          let i = await ms(n),
            o = await i.json();
          if (o.allowsNostr && o.nostrPubkey) return o.callback;
        } catch (n) {}
        return null;
      }
      function Cs(e) {
        let { profile: n, event: t, amount: r, relays: i, comment: o = "" } = e;
        if (!r) throw new Error("amount not given");
        if (!n) throw new Error("profile not given");
        let s = {
          kind: 9734,
          created_at: Math.round(Date.now() / 1e3),
          content: o,
          tags: [
            ["p", n],
            ["amount", r.toString()],
            ["relays", ...i],
          ],
        };
        return t && s.tags.push(["e", t]), s;
      }
      function As(e) {
        let n;
        try {
          n = JSON.parse(e);
        } catch (i) {
          return "Invalid zap request JSON.";
        }
        if (!eo(n)) return "Zap request is not a valid Nostr event.";
        if (!no(n)) return "Invalid signature on zap request.";
        let t = n.tags.find((e) => {
          let [n, t] = e;
          return "p" === n && t;
        });
        if (!t) return "Zap request doesn't have a 'p' tag.";
        if (!t[1].match(/^[a-f0-9]{64}$/))
          return "Zap request 'p' tag is not valid hex.";
        let r = n.tags.find((e) => {
          let [n, t] = e;
          return "e" === n && t;
        });
        return r && !r[1].match(/^[a-f0-9]{64}$/)
          ? "Zap request 'e' tag is not valid hex."
          : n.tags.find((e) => {
              let [n, t] = e;
              return "relays" === n && t;
            })
          ? null
          : "Zap request doesn't have a 'relays' tag.";
      }
      function Is(e) {
        let { zapRequest: n, preimage: t, bolt11: r, paidAt: i } = e,
          o = JSON.parse(n).tags.filter((e) => {
            let [n] = e;
            return "e" === n || "p" === n || "a" === n;
          }),
          s = {
            kind: 9735,
            created_at: Math.round(i.getTime() / 1e3),
            content: "",
            tags: [...o, ["bolt11", r], ["description", n]],
          };
        return t && s.tags.push(["preimage", t]), s;
      }
      Di(
        {},
        {
          getToken: () => ks,
          unpackEventFromToken: () => Ns,
          validateEvent: () => Ts,
          validateToken: () => Ss,
        }
      );
      var xs = "Nostr ";
      async function ks(e, n, t) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!e || !n) throw new Error("Missing loginUrl or httpMethod");
        const i = (function () {
          return {
            kind:
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 255,
            content: "",
            tags: [],
            created_at: 0,
          };
        })(27235);
        (i.tags = [
          ["u", e],
          ["method", n],
        ]),
          (i.created_at = Math.round(new Date().getTime() / 1e3));
        const o = await t(i);
        return (r ? xs : "") + cn.encode(zi.encode(JSON.stringify(o)));
      }
      async function Ss(e, n, t) {
        const r = await Ns(e).catch((e) => {
          throw e;
        });
        return await Ts(r, n, t).catch((e) => {
          throw e;
        });
      }
      async function Ns(e) {
        if (!e) throw new Error("Missing token");
        e = e.replace(xs, "");
        const n = Ki.decode(cn.decode(e));
        if (!n || 0 === n.length || !n.startsWith("{"))
          throw new Error("Invalid token");
        return JSON.parse(n);
      }
      async function Ts(e, n, t) {
        if (!e) throw new Error("Invalid nostr event");
        if (!no(e)) throw new Error("Invalid nostr event, signature invalid");
        if (27235 !== e.kind)
          throw new Error("Invalid nostr event, kind invalid");
        if (!e.created_at)
          throw new Error("Invalid nostr event, created_at invalid");
        if (Math.round(new Date().getTime() / 1e3) - e.created_at > 60)
          throw new Error("Invalid nostr event, expired");
        const r = e.tags.find((e) => "u" === e[0]);
        if (
          1 !== (null === r || void 0 === r ? void 0 : r.length) &&
          (null === r || void 0 === r ? void 0 : r[1]) !== n
        )
          throw new Error("Invalid nostr event, url tag invalid");
        const i = e.tags.find((e) => "method" === e[0]);
        if (
          1 !== (null === i || void 0 === i ? void 0 : i.length) &&
          (null === i || void 0 === i ? void 0 : i[1].toLowerCase()) !==
            t.toLowerCase()
        )
          throw new Error("Invalid nostr event, method tag invalid");
        return !0;
      }
    },
    35827: (e, n, t) => {
      t.d(n, {
        HF: () => l,
        aj: () => a,
        gC: () => s,
        nM: () => o,
        nk: () => i,
        xU: () => c,
      });
      var r = t(89980);
      class i extends r.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class o extends r.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class s extends r.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      r.C;
      class a extends r.C {
        constructor(e) {
          let { address: n, connector: t } = e;
          super(`Account "${n}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends r.C {
        constructor(e) {
          let { connectionChainId: n, connectorChainId: t } = e;
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${n}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${n}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class l extends r.C {
        constructor(e) {
          let { connector: n } = e;
          super(`Connector "${n.name}" unavailable while reconnecting.`, {
            details: [
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.",
              "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.",
              "This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
            ].join(" "),
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    42251: (e, n, t) => {
      t.d(n, { Y: () => s });
      var r = t(87162),
        i = t(2309);
      var o = t(43787);
      function s() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { mutation: n } = e,
          t = (function (e) {
            return {
              mutationFn: (n) => (0, i.l)(e, n),
              mutationKey: ["signMessage"],
            };
          })((0, o.U)(e)),
          { mutate: s, mutateAsync: a, ...c } = (0, r.n)({ ...n, ...t });
        return { ...c, signMessage: s, signMessageAsync: a };
      }
    },
    43787: (e, n, t) => {
      t.d(n, { U: () => c });
      var r = t(51477),
        i = t(52332),
        o = t(89980);
      class s extends o.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return "wagmi@2.14.16";
        }
      }
      class a extends s {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function c() {
        var e;
        const n =
          null !==
            (e = (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ).config) && void 0 !== e
            ? e
            : (0, r.useContext)(i.R);
        if (!n) throw new a();
        return n;
      }
    },
    44844: (e, n, t) => {
      t.d(n, { E: () => s });
      var r = t(73200),
        i = t(79333),
        o = t(80569);
      async function s(e, n) {
        const { account: t, chainId: s, connector: a, ...c } = n;
        let l;
        l =
          "object" === typeof t &&
          "local" === (null === t || void 0 === t ? void 0 : t.type)
            ? e.getClient({ chainId: s })
            : await (0, o.r)(e, {
                account: null !== t && void 0 !== t ? t : void 0,
                chainId: s,
                connector: a,
              });
        const d = (0, i.T)(l, r.E, "writeContract");
        return await d({
          ...c,
          ...(t ? { account: t } : {}),
          chain: s ? { id: s } : null,
        });
      }
    },
    45328: (e, n, t) => {
      t.d(n, { R: () => l });
      var r = t(87162),
        i = t(79280);
      var o = t(5043);
      var s = t(51477),
        a = t(43787);
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = (0, a.U)(e);
        return (0, s.useSyncExternalStore)(
          (e) =>
            (function (e, n) {
              const { onChange: t } = n;
              return e._internal.chains.subscribe((e, n) => {
                t(e, n);
              });
            })(n, { onChange: e }),
          () => (0, o.h)(n),
          () => (0, o.h)(n)
        );
      }
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { mutation: n } = e,
          t = (0, a.U)(e),
          o = (function (e) {
            return {
              mutationFn: (n) => (0, i.S)(e, n),
              mutationKey: ["switchChain"],
            };
          })(t),
          { mutate: s, mutateAsync: l, ...d } = (0, r.n)({ ...n, ...o });
        return {
          ...d,
          chains: c({ config: t }),
          switchChain: s,
          switchChainAsync: l,
        };
      }
    },
    50818: (e, n, t) => {
      t.d(n, { V: () => a });
      var r = t(10719),
        i = t(59402),
        o = t(90312),
        s = t(91125);
      class a extends s.Y {
        constructor(e) {
          super(),
            (this.name = "Coinbase Wallet"),
            (this.id =
              i.L.ConnectorExplorerIds[r.o.CONNECTOR_ID.COINBASE_SDK] ||
              this.name),
            (this.explorerId =
              i.L.ConnectorExplorerIds[r.o.CONNECTOR_ID.COINBASE_SDK]),
            (this.type = "ANNOUNCED"),
            (this.imageUrl =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="),
            (this.chain = r.o.CHAIN.SOLANA),
            (this.provider = this),
            (this.coinbase = e.provider),
            (this.requestedChains = e.chains);
        }
        get chains() {
          return this.requestedChains.filter((e) => e.id === o.tWt.id);
        }
        get publicKey() {
          return this.coinbase.publicKey;
        }
        get imageId() {
          return i.L.ConnectorImageIds[r.o.CONNECTOR_ID.COINBASE];
        }
        async connect() {
          try {
            await this.coinbase.connect();
            const e = this.getAccount(!0);
            return (
              this.coinbase.emit("connect", this.coinbase.publicKey),
              this.emit("connect", e),
              e.toBase58()
            );
          } catch (e) {
            throw (this.coinbase.emit("error", e), e);
          }
        }
        async disconnect() {
          await this.coinbase.disconnect(),
            this.coinbase.emit("disconnect", void 0),
            this.emit("disconnect", void 0);
        }
        async signMessage(e) {
          return (await this.coinbase.signMessage(e)).signature;
        }
        async signTransaction(e) {
          return this.coinbase.signTransaction(e);
        }
        async signAndSendTransaction(e, n) {
          return (await this.coinbase.signAndSendTransaction(e, n)).signature;
        }
        async sendTransaction(e, n, t) {
          const r = await this.signTransaction(e);
          return await n.sendRawTransaction(r.serialize(), t);
        }
        async signAllTransactions(e) {
          return await this.coinbase.signAllTransactions(e);
        }
        async request(e) {
          return Promise.reject(
            new Error(
              'The "request" method is not supported on Coinbase Wallet'
            )
          );
        }
        async getAccounts() {
          const e = this.getAccount();
          return e
            ? Promise.resolve([
                { namespace: this.chain, address: e.toBase58(), type: "eoa" },
              ])
            : Promise.resolve([]);
        }
        getAccount(e) {
          const n = this.coinbase.publicKey;
          if (e && !n) throw new Error("Not connected");
          return n;
        }
      }
    },
    52332: (e, n, t) => {
      t.d(n, { R: () => s, x: () => a });
      var r = t(51477),
        i = t(54996);
      function o(e) {
        const {
            children: n,
            config: t,
            initialState: o,
            reconnectOnMount: s = !0,
          } = e,
          { onMount: a } = (function (e, n) {
            const { initialState: t, reconnectOnMount: r } = n;
            return (
              t &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...t,
                  chainId: e.chains.some((e) => e.id === t.chainId)
                    ? t.chainId
                    : e.chains[0].id,
                  connections: r ? t.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((n) => {
                        var t, r;
                        const i = new Set();
                        for (const e of null !== n && void 0 !== n ? n : [])
                          if (e.rdns) {
                            const n = Array.isArray(e.rdns) ? e.rdns : [e.rdns];
                            for (const e of n) i.add(e);
                          }
                        const o = [],
                          s =
                            null !==
                              (t =
                                null === (r = e._internal.mipd) || void 0 === r
                                  ? void 0
                                  : r.getProviders()) && void 0 !== t
                              ? t
                              : [];
                        for (const a of s) {
                          if (i.has(a.info.rdns)) continue;
                          const n =
                              e._internal.connectors.providerDetailToConnector(
                                a
                              ),
                            t = e._internal.connectors.setup(n);
                          o.push(t);
                        }
                        return [...n, ...o];
                      })),
                    r
                      ? (0, i.M)(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(t, { initialState: o, reconnectOnMount: s });
        t._internal.ssr || a();
        const c = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (c.current && t._internal.ssr)
              return (
                a(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          n
        );
      }
      const s = (0, r.createContext)(void 0);
      function a(e) {
        const { children: n, config: t } = e,
          i = { value: t };
        return (0, r.createElement)(
          o,
          e,
          (0, r.createElement)(s.Provider, i, n)
        );
      }
    },
    54996: (e, n, t) => {
      t.d(n, { M: () => i });
      let r = !1;
      async function i(e) {
        var n;
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (r) return [];
        (r = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        const i = [];
        if (null !== (n = t.connectors) && void 0 !== n && n.length)
          for (const r of t.connectors) {
            let n;
            (n = "function" === typeof r ? e._internal.connectors.setup(r) : r),
              i.push(n);
          }
        else i.push(...e.connectors);
        let o;
        try {
          var s;
          o = await (null === (s = e.storage) || void 0 === s
            ? void 0
            : s.getItem("recentConnectorId"));
        } catch {}
        const a = {};
        for (const [, r] of e.state.connections) a[r.connector.id] = 1;
        o && (a[o] = 0);
        const c =
          Object.keys(a).length > 0
            ? [...i].sort((e, n) => {
                var t, r;
                return (
                  (null !== (t = a[e.id]) && void 0 !== t ? t : 10) -
                  (null !== (r = a[n.id]) && void 0 !== r ? r : 10)
                );
              })
            : i;
        let l = !1;
        const d = [],
          u = [];
        for (const r of c) {
          const n = await r.getProvider().catch(() => {});
          if (!n) continue;
          if (u.some((e) => e === n)) continue;
          if (!(await r.isAuthorized())) continue;
          const t = await r.connect({ isReconnecting: !0 }).catch(() => null);
          t &&
            (r.emitter.off("connect", e._internal.events.connect),
            r.emitter.on("change", e._internal.events.change),
            r.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              const n = new Map(l ? e.connections : new Map()).set(r.uid, {
                accounts: t.accounts,
                chainId: t.chainId,
                connector: r,
              });
              return { ...e, current: l ? e.current : r.uid, connections: n };
            }),
            d.push({ accounts: t.accounts, chainId: t.chainId, connector: r }),
            u.push(n),
            (l = !0));
        }
        return (
          ("reconnecting" !== e.state.status &&
            "connecting" !== e.state.status) ||
            (l
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (r = !1),
          d
        );
      }
    },
    57595: (e, n, t) => {
      t.d(n, { N: () => i });
      var r = t(35827);
      async function i(e, n) {
        let t;
        if (
          ((t =
            "function" === typeof n.connector
              ? e._internal.connectors.setup(n.connector)
              : n.connector),
          t.uid === e.state.current)
        )
          throw new r.nM();
        try {
          var i;
          e.setState((e) => ({ ...e, status: "connecting" })),
            t.emitter.emit("message", { type: "connecting" });
          const { connector: r, ...o } = n,
            s = await t.connect(o),
            a = s.accounts;
          return (
            t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            await (null === (i = e.storage) || void 0 === i
              ? void 0
              : i.setItem("recentConnectorId", t.id)),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(t.uid, {
                accounts: a,
                chainId: s.chainId,
                connector: t,
              }),
              current: t.uid,
              status: "connected",
            })),
            { accounts: a, chainId: s.chainId }
          );
        } catch (o) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            o)
          );
        }
      }
    },
    58941: (e, n, t) => {
      t.d(n, { coinbaseWallet: () => c });
      var r = t(85545),
        i = t(35827),
        o = t(1960),
        s = t(72040),
        a = t(60713);
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return "3" === e.version || e.headlessMode
          ? (function (e) {
              const n = !1;
              let l, d, u, h, f;
              return (0, r.U)((r) => ({
                id: "coinbaseWalletSDK",
                name: "Coinbase Wallet",
                type: c.type,
                async connect() {
                  let { chainId: e } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  try {
                    const t = await this.getProvider(),
                      r = (
                        await t.request({ method: "eth_requestAccounts" })
                      ).map((e) => (0, o.b)(e));
                    u ||
                      ((u = this.onAccountsChanged.bind(this)),
                      t.on("accountsChanged", u)),
                      h ||
                        ((h = this.onChainChanged.bind(this)),
                        t.on("chainChanged", h)),
                      f ||
                        ((f = this.onDisconnect.bind(this)),
                        t.on("disconnect", f));
                    let i = await this.getChainId();
                    if (e && i !== e) {
                      var n;
                      const t = await this.switchChain({ chainId: e }).catch(
                        (e) => {
                          if (e.code === s.vx.code) throw e;
                          return { id: i };
                        }
                      );
                      i =
                        null !==
                          (n = null === t || void 0 === t ? void 0 : t.id) &&
                        void 0 !== n
                          ? n
                          : i;
                    }
                    return { accounts: r, chainId: i };
                  } catch (t) {
                    if (
                      /(user closed modal|accounts received is empty|user denied account)/i.test(
                        t.message
                      )
                    )
                      throw new s.vx(t);
                    throw t;
                  }
                },
                async disconnect() {
                  const e = await this.getProvider();
                  u && (e.removeListener("accountsChanged", u), (u = void 0)),
                    h && (e.removeListener("chainChanged", h), (h = void 0)),
                    f && (e.removeListener("disconnect", f), (f = void 0)),
                    e.disconnect(),
                    e.close();
                },
                async getAccounts() {
                  const e = await this.getProvider();
                  return (await e.request({ method: "eth_accounts" })).map(
                    (e) => (0, o.b)(e)
                  );
                },
                async getChainId() {
                  const e = await this.getProvider(),
                    n = await e.request({ method: "eth_chainId" });
                  return Number(n);
                },
                async getProvider() {
                  if (!d) {
                    var i;
                    const o = await (async () => {
                      const { default: e } = await Promise.all([
                        t.e(5065),
                        t.e(8846),
                        t.e(1852),
                        t.e(6326),
                        t.e(6417),
                        t.e(1161),
                        t.e(2876),
                        t.e(6366),
                        t.e(1),
                        t.e(8329),
                        t.e(1256),
                        t.e(9566),
                      ]).then(t.t.bind(t, 29566, 19));
                      return "function" !== typeof e &&
                        "function" === typeof e.default
                        ? e.default
                        : e;
                    })();
                    l = new o({ ...e, reloadOnDisconnect: n });
                    const s =
                        null === (i = l.walletExtension) || void 0 === i
                          ? void 0
                          : i.getChainId(),
                      a =
                        r.chains.find((n) =>
                          e.chainId ? n.id === e.chainId : n.id === s
                        ) || r.chains[0],
                      c =
                        e.chainId ||
                        (null === a || void 0 === a ? void 0 : a.id),
                      u =
                        e.jsonRpcUrl ||
                        (null === a || void 0 === a
                          ? void 0
                          : a.rpcUrls.default.http[0]);
                    d = l.makeWeb3Provider(u, c);
                  }
                  return d;
                },
                async isAuthorized() {
                  try {
                    return !!(await this.getAccounts()).length;
                  } catch {
                    return !1;
                  }
                },
                async switchChain(e) {
                  let { addEthereumChainParameter: n, chainId: t } = e;
                  const o = r.chains.find((e) => e.id === t);
                  if (!o) throw new s.ch(new i.nk());
                  const c = await this.getProvider();
                  try {
                    return (
                      await c.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: (0, a.cK)(o.id) }],
                      }),
                      o
                    );
                  } catch (w) {
                    if (4902 === w.code)
                      try {
                        var l, d, u, h, f, g, p;
                        let e, r;
                        (e =
                          null !== n && void 0 !== n && n.blockExplorerUrls
                            ? n.blockExplorerUrls
                            : null !== (l = o.blockExplorers) &&
                              void 0 !== l &&
                              l.default.url
                            ? [
                                null === (d = o.blockExplorers) || void 0 === d
                                  ? void 0
                                  : d.default.url,
                              ]
                            : []),
                          (r =
                            null !== n &&
                            void 0 !== n &&
                            null !== (u = n.rpcUrls) &&
                            void 0 !== u &&
                            u.length
                              ? n.rpcUrls
                              : [
                                  null !==
                                    (h =
                                      null === (f = o.rpcUrls.default) ||
                                      void 0 === f
                                        ? void 0
                                        : f.http[0]) && void 0 !== h
                                    ? h
                                    : "",
                                ]);
                        const i = {
                          blockExplorerUrls: e,
                          chainId: (0, a.cK)(t),
                          chainName:
                            null !==
                              (g =
                                null === n || void 0 === n
                                  ? void 0
                                  : n.chainName) && void 0 !== g
                              ? g
                              : o.name,
                          iconUrls:
                            null === n || void 0 === n ? void 0 : n.iconUrls,
                          nativeCurrency:
                            null !==
                              (p =
                                null === n || void 0 === n
                                  ? void 0
                                  : n.nativeCurrency) && void 0 !== p
                              ? p
                              : o.nativeCurrency,
                          rpcUrls: r,
                        };
                        return (
                          await c.request({
                            method: "wallet_addEthereumChain",
                            params: [i],
                          }),
                          o
                        );
                      } catch (w) {
                        throw new s.vx(w);
                      }
                    throw new s.ch(w);
                  }
                },
                onAccountsChanged(e) {
                  0 === e.length
                    ? this.onDisconnect()
                    : r.emitter.emit("change", {
                        accounts: e.map((e) => (0, o.b)(e)),
                      });
                },
                onChainChanged(e) {
                  const n = Number(e);
                  r.emitter.emit("change", { chainId: n });
                },
                async onDisconnect(e) {
                  r.emitter.emit("disconnect");
                  const n = await this.getProvider();
                  u && (n.removeListener("accountsChanged", u), (u = void 0)),
                    h && (n.removeListener("chainChanged", h), (h = void 0)),
                    f && (n.removeListener("disconnect", f), (f = void 0));
                },
              }));
            })(e)
          : (function (e) {
              let n, l, d, u;
              return (0, r.U)((r) => ({
                id: "coinbaseWalletSDK",
                name: "Coinbase Wallet",
                rdns: "com.coinbase.wallet",
                type: c.type,
                async connect() {
                  let { chainId: e, ...n } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  try {
                    const r = await this.getProvider(),
                      i = (
                        await r.request({
                          method: "eth_requestAccounts",
                          params:
                            "instantOnboarding" in n && n.instantOnboarding
                              ? [{ onboarding: "instant" }]
                              : [],
                        })
                      ).map((e) => (0, o.b)(e));
                    l ||
                      ((l = this.onAccountsChanged.bind(this)),
                      r.on("accountsChanged", l)),
                      d ||
                        ((d = this.onChainChanged.bind(this)),
                        r.on("chainChanged", d)),
                      u ||
                        ((u = this.onDisconnect.bind(this)),
                        r.on("disconnect", u));
                    let a = await this.getChainId();
                    if (e && a !== e) {
                      var t;
                      const n = await this.switchChain({ chainId: e }).catch(
                        (e) => {
                          if (e.code === s.vx.code) throw e;
                          return { id: a };
                        }
                      );
                      a =
                        null !==
                          (t = null === n || void 0 === n ? void 0 : n.id) &&
                        void 0 !== t
                          ? t
                          : a;
                    }
                    return { accounts: i, chainId: a };
                  } catch (r) {
                    if (
                      /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                        r.message
                      )
                    )
                      throw new s.vx(r);
                    throw r;
                  }
                },
                async disconnect() {
                  var e;
                  const n = await this.getProvider();
                  l && (n.removeListener("accountsChanged", l), (l = void 0)),
                    d && (n.removeListener("chainChanged", d), (d = void 0)),
                    u && (n.removeListener("disconnect", u), (u = void 0)),
                    n.disconnect(),
                    null === (e = n.close) || void 0 === e || e.call(n);
                },
                async getAccounts() {
                  const e = await this.getProvider();
                  return (await e.request({ method: "eth_accounts" })).map(
                    (e) => (0, o.b)(e)
                  );
                },
                async getChainId() {
                  const e = await this.getProvider(),
                    n = await e.request({ method: "eth_chainId" });
                  return Number(n);
                },
                async getProvider() {
                  if (!n) {
                    const s =
                        "string" === typeof e.preference
                          ? { options: e.preference }
                          : {
                              ...e.preference,
                              options:
                                null !==
                                  (i =
                                    null === (o = e.preference) || void 0 === o
                                      ? void 0
                                      : o.options) && void 0 !== i
                                  ? i
                                  : "all",
                            },
                      { createCoinbaseWalletSDK: a } = await Promise.all([
                        t.e(5065),
                        t.e(8846),
                        t.e(1852),
                        t.e(6326),
                        t.e(6417),
                        t.e(1161),
                        t.e(2876),
                        t.e(6366),
                        t.e(1),
                        t.e(8329),
                        t.e(1256),
                        t.e(6622),
                      ]).then(t.bind(t, 83781)),
                      c = a({
                        ...e,
                        appChainIds: r.chains.map((e) => e.id),
                        preference: s,
                      });
                    n = c.getProvider();
                  }
                  var i, o;
                  return n;
                },
                async isAuthorized() {
                  try {
                    return !!(await this.getAccounts()).length;
                  } catch {
                    return !1;
                  }
                },
                async switchChain(e) {
                  let { addEthereumChainParameter: n, chainId: t } = e;
                  const o = r.chains.find((e) => e.id === t);
                  if (!o) throw new s.ch(new i.nk());
                  const c = await this.getProvider();
                  try {
                    return (
                      await c.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: (0, a.cK)(o.id) }],
                      }),
                      o
                    );
                  } catch (w) {
                    if (4902 === w.code)
                      try {
                        var l, d, u, h, f, g, p;
                        let e, r;
                        (e =
                          null !== n && void 0 !== n && n.blockExplorerUrls
                            ? n.blockExplorerUrls
                            : null !== (l = o.blockExplorers) &&
                              void 0 !== l &&
                              l.default.url
                            ? [
                                null === (d = o.blockExplorers) || void 0 === d
                                  ? void 0
                                  : d.default.url,
                              ]
                            : []),
                          (r =
                            null !== n &&
                            void 0 !== n &&
                            null !== (u = n.rpcUrls) &&
                            void 0 !== u &&
                            u.length
                              ? n.rpcUrls
                              : [
                                  null !==
                                    (h =
                                      null === (f = o.rpcUrls.default) ||
                                      void 0 === f
                                        ? void 0
                                        : f.http[0]) && void 0 !== h
                                    ? h
                                    : "",
                                ]);
                        const i = {
                          blockExplorerUrls: e,
                          chainId: (0, a.cK)(t),
                          chainName:
                            null !==
                              (g =
                                null === n || void 0 === n
                                  ? void 0
                                  : n.chainName) && void 0 !== g
                              ? g
                              : o.name,
                          iconUrls:
                            null === n || void 0 === n ? void 0 : n.iconUrls,
                          nativeCurrency:
                            null !==
                              (p =
                                null === n || void 0 === n
                                  ? void 0
                                  : n.nativeCurrency) && void 0 !== p
                              ? p
                              : o.nativeCurrency,
                          rpcUrls: r,
                        };
                        return (
                          await c.request({
                            method: "wallet_addEthereumChain",
                            params: [i],
                          }),
                          o
                        );
                      } catch (w) {
                        throw new s.vx(w);
                      }
                    throw new s.ch(w);
                  }
                },
                onAccountsChanged(e) {
                  0 === e.length
                    ? this.onDisconnect()
                    : r.emitter.emit("change", {
                        accounts: e.map((e) => (0, o.b)(e)),
                      });
                },
                onChainChanged(e) {
                  const n = Number(e);
                  r.emitter.emit("change", { chainId: n });
                },
                async onDisconnect(e) {
                  r.emitter.emit("disconnect");
                  const n = await this.getProvider();
                  l && (n.removeListener("accountsChanged", l), (l = void 0)),
                    d && (n.removeListener("chainChanged", d), (d = void 0)),
                    u && (n.removeListener("disconnect", u), (u = void 0));
                },
              }));
            })(e);
      }
      c.type = "coinbaseWallet";
    },
    64956: (e, n, t) => {
      t.d(n, { b: () => u });
      var r = t(1960),
        i = t(72040),
        o = t(27752),
        s = t(58629),
        a = t(60713),
        c = t(35827),
        l = t(90278),
        d = t(85545);
      function u() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { shimDisconnect: n = !0, unstable_shimAsyncInject: t } = e;
        function g() {
          var n;
          const t = e.target;
          if ("function" === typeof t) {
            const e = t();
            if (e) return e;
          }
          return "object" === typeof t
            ? t
            : "string" === typeof t
            ? {
                ...(null !== (n = h[t]) && void 0 !== n
                  ? n
                  : {
                      id: t,
                      name: `${t[0].toUpperCase()}${t.slice(1)}`,
                      provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                    }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) =>
                  null === e || void 0 === e ? void 0 : e.ethereum,
              };
        }
        let p, w, v, y;
        return (0, d.U)((d) => ({
          get icon() {
            return g().icon;
          },
          get id() {
            return g().id;
          },
          get name() {
            return g().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: u.type,
          async setup() {
            const n = await this.getProvider();
            null !== n &&
              void 0 !== n &&
              n.on &&
              e.target &&
              (v || ((v = this.onConnect.bind(this)), n.on("connect", v)),
              p ||
                ((p = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", p)));
          },
          async connect() {
            let { chainId: t, isReconnecting: o } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const s = await this.getProvider();
            if (!s) throw new l.N();
            let a = [];
            if (o) a = await this.getAccounts().catch(() => []);
            else if (n)
              try {
                var c;
                if (
                  ((a =
                    null ===
                      (c = (
                        await s.request({
                          method: "wallet_requestPermissions",
                          params: [{ eth_accounts: {} }],
                        })
                      )[0]) ||
                    void 0 === c ||
                    null === (c = c.caveats) ||
                    void 0 === c ||
                    null === (c = c[0]) ||
                    void 0 === c ||
                    null === (c = c.value) ||
                    void 0 === c
                      ? void 0
                      : c.map((e) => (0, r.b)(e))),
                  a.length > 0)
                ) {
                  a = await this.getAccounts();
                }
              } catch (m) {
                const e = m;
                if (e.code === i.vx.code) throw new i.vx(e);
                if (e.code === i.qZ.code) throw e;
              }
            try {
              var u, h, f;
              if ((null === (u = a) || void 0 === u || !u.length) && !o) {
                a = (await s.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.b)(e)
                );
              }
              v && (s.removeListener("connect", v), (v = void 0)),
                p ||
                  ((p = this.onAccountsChanged.bind(this)),
                  s.on("accountsChanged", p)),
                w ||
                  ((w = this.onChainChanged.bind(this)),
                  s.on("chainChanged", w)),
                y ||
                  ((y = this.onDisconnect.bind(this)), s.on("disconnect", y));
              let c = await this.getChainId();
              if (t && c !== t) {
                var g;
                const e = await this.switchChain({ chainId: t }).catch((e) => {
                  if (e.code === i.vx.code) throw e;
                  return { id: c };
                });
                c =
                  null !== (g = null === e || void 0 === e ? void 0 : e.id) &&
                  void 0 !== g
                    ? g
                    : c;
              }
              return (
                n &&
                  (await (null === (h = d.storage) || void 0 === h
                    ? void 0
                    : h.removeItem(`${this.id}.disconnected`))),
                e.target ||
                  (await (null === (f = d.storage) || void 0 === f
                    ? void 0
                    : f.setItem("injected.connected", !0))),
                { accounts: a, chainId: c }
              );
            } catch (m) {
              const e = m;
              if (e.code === i.vx.code) throw new i.vx(e);
              if (e.code === i.qZ.code) throw new i.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            var t;
            const r = await this.getProvider();
            if (!r) throw new l.N();
            w && (r.removeListener("chainChanged", w), (w = void 0)),
              y && (r.removeListener("disconnect", y), (y = void 0)),
              v || ((v = this.onConnect.bind(this)), r.on("connect", v));
            try {
              await (0, o.w)(
                () =>
                  r.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            var i;
            n &&
              (await (null === (i = d.storage) || void 0 === i
                ? void 0
                : i.setItem(`${this.id}.disconnected`, !0)));
            e.target ||
              (await (null === (t = d.storage) || void 0 === t
                ? void 0
                : t.removeItem("injected.connected")));
          },
          async getAccounts() {
            const e = await this.getProvider();
            if (!e) throw new l.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, r.b)(e)
            );
          },
          async getChainId() {
            const e = await this.getProvider();
            if (!e) throw new l.N();
            const n = await e.request({ method: "eth_chainId" });
            return Number(n);
          },
          async getProvider() {
            if ("undefined" === typeof window) return;
            let e;
            const n = g();
            return (
              (e =
                "function" === typeof n.provider
                  ? n.provider(window)
                  : "string" === typeof n.provider
                  ? f(window, n.provider)
                  : n.provider),
              e &&
                !e.removeListener &&
                ("off" in e && "function" === typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              var r;
              if (
                n &&
                (await (null === (r = d.storage) || void 0 === r
                  ? void 0
                  : r.getItem(`${this.id}.disconnected`)))
              )
                return !1;
              if (!e.target) {
                var i;
                if (
                  !(await (null === (i = d.storage) || void 0 === i
                    ? void 0
                    : i.getItem("injected.connected")))
                )
                  return !1;
              }
              if (!(await this.getProvider())) {
                if (void 0 !== t && !1 !== t) {
                  const e = async () => {
                      "undefined" !== typeof window &&
                        window.removeEventListener("ethereum#initialized", e);
                      return !!(await this.getProvider());
                    },
                    n = "number" === typeof t ? t : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" !== typeof window
                        ? [
                            new Promise((n) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => n(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((t) => setTimeout(() => t(e()), n)),
                    ])
                  )
                    return !0;
                }
                throw new l.N();
              }
              return !!(await (0, s.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain(e) {
            let { addEthereumChainParameter: n, chainId: t } = e;
            const r = await this.getProvider();
            if (!r) throw new l.N();
            const o = d.chains.find((e) => e.id === t);
            if (!o) throw new i.ch(new c.nk());
            const s = new Promise((e) => {
              const n = (r) => {
                "chainId" in r &&
                  r.chainId === t &&
                  (d.emitter.off("change", n), e());
              };
              d.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  r
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, a.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        d.emitter.emit("change", { chainId: t });
                    }),
                  s,
                ]),
                o
              );
            } catch (y) {
              var u;
              const e = y;
              if (
                4902 === e.code ||
                4902 ===
                  (null === e ||
                  void 0 === e ||
                  null === (u = e.data) ||
                  void 0 === u ||
                  null === (u = u.originalError) ||
                  void 0 === u
                    ? void 0
                    : u.code)
              )
                try {
                  var h, f, g, p, w, v;
                  const { default: e, ...c } =
                    null !== (h = o.blockExplorers) && void 0 !== h ? h : {};
                  let l, u;
                  null !== n && void 0 !== n && n.blockExplorerUrls
                    ? (l = n.blockExplorerUrls)
                    : e && (l = [e.url, ...Object.values(c).map((e) => e.url)]),
                    (u =
                      null !== n &&
                      void 0 !== n &&
                      null !== (f = n.rpcUrls) &&
                      void 0 !== f &&
                      f.length
                        ? n.rpcUrls
                        : [
                            null !==
                              (g =
                                null === (p = o.rpcUrls.default) || void 0 === p
                                  ? void 0
                                  : p.http[0]) && void 0 !== g
                              ? g
                              : "",
                          ]);
                  const y = {
                    blockExplorerUrls: l,
                    chainId: (0, a.cK)(t),
                    chainName:
                      null !==
                        (w =
                          null === n || void 0 === n ? void 0 : n.chainName) &&
                      void 0 !== w
                        ? w
                        : o.name,
                    iconUrls: null === n || void 0 === n ? void 0 : n.iconUrls,
                    nativeCurrency:
                      null !==
                        (v =
                          null === n || void 0 === n
                            ? void 0
                            : n.nativeCurrency) && void 0 !== v
                        ? v
                        : o.nativeCurrency,
                    rpcUrls: u,
                  };
                  return (
                    await Promise.all([
                      r
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [y],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) !== t)
                            throw new i.vx(
                              new Error(
                                "User rejected switch after adding network."
                              )
                            );
                          d.emitter.emit("change", { chainId: t });
                        }),
                      s,
                    ]),
                    o
                  );
                } catch (m) {
                  throw new i.vx(m);
                }
              if (e.code === i.vx.code) throw new i.vx(e);
              throw new i.ch(e);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (d.emitter.listenerCount("connect")) {
              var t;
              const e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                n &&
                  (await (null === (t = d.storage) || void 0 === t
                    ? void 0
                    : t.removeItem(`${this.id}.disconnected`)));
            } else
              d.emitter.emit("change", { accounts: e.map((e) => (0, r.b)(e)) });
          },
          onChainChanged(e) {
            const n = Number(e);
            d.emitter.emit("change", { chainId: n });
          },
          async onConnect(e) {
            const n = await this.getAccounts();
            if (0 === n.length) return;
            const t = Number(e.chainId);
            d.emitter.emit("connect", { accounts: n, chainId: t });
            const r = await this.getProvider();
            r &&
              (v && (r.removeListener("connect", v), (v = void 0)),
              p ||
                ((p = this.onAccountsChanged.bind(this)),
                r.on("accountsChanged", p)),
              w ||
                ((w = this.onChainChanged.bind(this)), r.on("chainChanged", w)),
              y || ((y = this.onDisconnect.bind(this)), r.on("disconnect", y)));
          },
          async onDisconnect(e) {
            const n = await this.getProvider();
            (e && 1013 === e.code && n && (await this.getAccounts()).length) ||
              (d.emitter.emit("disconnect"),
              n &&
                (w && (n.removeListener("chainChanged", w), (w = void 0)),
                y && (n.removeListener("disconnect", y), (y = void 0)),
                v || ((v = this.onConnect.bind(this)), n.on("connect", v))));
          },
        }));
      }
      u.type = "injected";
      const h = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            null !== e && void 0 !== e && e.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : f(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            f(e, (e) => {
              if (!e.isMetaMask) return !1;
              if (e.isBraveWallet && !e._events && !e._state) return !1;
              const n = [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ];
              for (const t of n) if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider(e) {
            var n, t;
            return null !== e &&
              void 0 !== e &&
              null !== (n = e.phantom) &&
              void 0 !== n &&
              n.ethereum
              ? null === (t = e.phantom) || void 0 === t
                ? void 0
                : t.ethereum
              : f(e, "isPhantom");
          },
        },
      };
      function f(e, n) {
        function t(e) {
          return "function" === typeof n ? n(e) : "string" !== typeof n || e[n];
        }
        const r = e.ethereum;
        return null !== r && void 0 !== r && r.providers
          ? r.providers.find((e) => t(e))
          : r && t(r)
          ? r
          : void 0;
      }
    },
    65189: (e, n, t) => {
      t.d(n, { Q: () => f });
      var r = t(85011),
        i = t(51983);
      function o(e, n) {
        return (0, i.BH)(e, n);
      }
      function s(e) {
        return JSON.stringify(e, (e, n) =>
          (function (e) {
            if (!a(e)) return !1;
            const n = e.constructor;
            if ("undefined" === typeof n) return !0;
            const t = n.prototype;
            return !!a(t) && !!t.hasOwnProperty("isPrototypeOf");
          })(n)
            ? Object.keys(n)
                .sort()
                .reduce((e, t) => ((e[t] = n[t]), e), {})
            : "bigint" === typeof n
            ? n.toString()
            : n
        );
      }
      function a(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function c(e) {
        const {
          _defaulted: n,
          behavior: t,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: o,
          maxPages: s,
          meta: a,
          networkMode: c,
          queryFn: l,
          queryHash: d,
          queryKey: u,
          queryKeyHashFn: h,
          retry: f,
          retryDelay: g,
          structuralSharing: p,
          getPreviousPageParam: w,
          getNextPageParam: v,
          initialPageParam: y,
          _optimisticResults: m,
          enabled: b,
          notifyOnChangeProps: E,
          placeholderData: C,
          refetchInterval: A,
          refetchIntervalInBackground: I,
          refetchOnMount: x,
          refetchOnReconnect: k,
          refetchOnWindowFocus: S,
          retryOnMount: N,
          select: T,
          staleTime: U,
          suspense: _,
          throwOnError: P,
          config: L,
          connector: O,
          query: B,
          ...R
        } = e;
        return R;
      }
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { abi: n, ...t } = e;
        return ["readContract", c(t)];
      }
      var d = t(95713);
      var u = t(18162),
        h = t(43787);
      function f() {
        var e, n, t;
        let i =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { abi: a, address: c, functionName: f, query: g = {} } = i,
          p = i.code,
          w = (0, h.U)(i),
          v = (0, u.i)({ config: w }),
          y = (function (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: i } = t;
                const o = n.abi;
                if (!o) throw new Error("abi is required");
                const { functionName: s, scopeKey: a, ...c } = i[1],
                  l = (() => {
                    const e = i[1];
                    if (e.address) return { address: e.address };
                    if (e.code) return { code: e.code };
                    throw new Error("address or code is required");
                  })();
                if (!s) throw new Error("functionName is required");
                return (0, r.J)(e, {
                  abi: o,
                  functionName: s,
                  args: c.args,
                  ...l,
                  ...c,
                });
              },
              queryKey: l(n),
            };
          })(w, {
            ...i,
            chainId: null !== (e = i.chainId) && void 0 !== e ? e : v,
          }),
          m = Boolean(
            (c || p) &&
              a &&
              f &&
              (null === (n = g.enabled) || void 0 === n || n)
          );
        return (function (e) {
          const n = (0, d.I)({ ...e, queryKeyHashFn: s });
          return (n.queryKey = e.queryKey), n;
        })({
          ...g,
          ...y,
          enabled: m,
          structuralSharing:
            null !== (t = g.structuralSharing) && void 0 !== t ? t : o,
        });
      }
    },
    69910: (e, n, t) => {
      t.d(n, {
        Bq: () => N,
        Q5: () => Ct,
        Qe: () => En,
        Wj: () => bn,
        dq: () => k,
        lG: () => T,
        pC: () => U,
        sh: () => Rn,
      });
      var r = t(64467),
        i = t(31876),
        o = t(44448),
        s = t(8638),
        a = t(5190),
        c = t(33971),
        l = t(14511),
        d = t(68092),
        u = t(26940),
        h = t(55332),
        f = Object.defineProperty,
        g = (e, n) => {
          for (var t in n) f(e, t, { get: n[t], enumerable: !0 });
        },
        p = Symbol("verified"),
        w = (e) => e instanceof Object;
      function v(e) {
        if (!w(e)) return !1;
        if ("number" !== typeof e.kind) return !1;
        if ("string" !== typeof e.content) return !1;
        if ("number" !== typeof e.created_at) return !1;
        if ("string" !== typeof e.pubkey) return !1;
        if (!e.pubkey.match(/^[a-f0-9]{64}$/)) return !1;
        if (!Array.isArray(e.tags)) return !1;
        for (let n = 0; n < e.tags.length; n++) {
          let t = e.tags[n];
          if (!Array.isArray(t)) return !1;
          for (let e = 0; e < t.length; e++)
            if ("object" === typeof t[e]) return !1;
        }
        return !0;
      }
      g(
        {},
        {
          Queue: () => x,
          QueueNode: () => I,
          binarySearch: () => A,
          insertEventIntoAscendingList: () => C,
          insertEventIntoDescendingList: () => E,
          normalizeURL: () => b,
          utf8Decoder: () => y,
          utf8Encoder: () => m,
        }
      );
      var y = new TextDecoder("utf-8"),
        m = new TextEncoder();
      function b(e) {
        -1 === e.indexOf("://") && (e = "wss://" + e);
        let n = new URL(e);
        return (
          (n.pathname = n.pathname.replace(/\/+/g, "/")),
          n.pathname.endsWith("/") && (n.pathname = n.pathname.slice(0, -1)),
          (("80" === n.port && "ws:" === n.protocol) ||
            ("443" === n.port && "wss:" === n.protocol)) &&
            (n.port = ""),
          n.searchParams.sort(),
          (n.hash = ""),
          n.toString()
        );
      }
      function E(e, n) {
        const [t, r] = A(e, (e) =>
          n.id === e.id
            ? 0
            : n.created_at === e.created_at
            ? -1
            : e.created_at - n.created_at
        );
        return r || e.splice(t, 0, n), e;
      }
      function C(e, n) {
        const [t, r] = A(e, (e) =>
          n.id === e.id
            ? 0
            : n.created_at === e.created_at
            ? -1
            : n.created_at - e.created_at
        );
        return r || e.splice(t, 0, n), e;
      }
      function A(e, n) {
        let t = 0,
          r = e.length - 1;
        for (; t <= r; ) {
          const i = Math.floor((t + r) / 2),
            o = n(e[i]);
          if (0 === o) return [i, !0];
          o < 0 ? (r = i - 1) : (t = i + 1);
        }
        return [t, !1];
      }
      var I = class {
          constructor(e) {
            (0, r.A)(this, "value", void 0),
              (0, r.A)(this, "next", null),
              (0, r.A)(this, "prev", null),
              (this.value = e);
          }
        },
        x = class {
          constructor() {
            (0, r.A)(this, "first", void 0),
              (0, r.A)(this, "last", void 0),
              (this.first = null),
              (this.last = null);
          }
          enqueue(e) {
            const n = new I(e);
            return (
              this.last
                ? this.last === this.first
                  ? ((this.last = n),
                    (this.last.prev = this.first),
                    (this.first.next = n))
                  : ((n.prev = this.last),
                    (this.last.next = n),
                    (this.last = n))
                : ((this.first = n), (this.last = n)),
              !0
            );
          }
          dequeue() {
            if (!this.first) return null;
            if (this.first === this.last) {
              const e = this.first;
              return (this.first = null), (this.last = null), e.value;
            }
            const e = this.first;
            return (this.first = e.next), e.value;
          }
        };
      function k(e) {
        let n = (0, s.s)(
          m.encode(
            (function (e) {
              if (!v(e))
                throw new Error(
                  "can't serialize event with wrong or missing properties"
                );
              return JSON.stringify([
                0,
                e.pubkey,
                e.created_at,
                e.kind,
                e.tags,
                e.content,
              ]);
            })(e)
          )
        );
        return (0, o.My)(n);
      }
      var S = new (class {
          generateSecretKey() {
            return i.ko.utils.randomPrivateKey();
          }
          getPublicKey(e) {
            return (0, o.My)(i.ko.getPublicKey(e));
          }
          finalizeEvent(e, n) {
            const t = e;
            return (
              (t.pubkey = (0, o.My)(i.ko.getPublicKey(n))),
              (t.id = k(t)),
              (t.sig = (0, o.My)(i.ko.sign(k(t), n))),
              (t[p] = !0),
              t
            );
          }
          verifyEvent(e) {
            if ("boolean" === typeof e[p]) return e[p];
            const n = k(e);
            if (n !== e.id) return (e[p] = !1), !1;
            try {
              const t = i.ko.verify(e.sig, n, e.pubkey);
              return (e[p] = t), t;
            } catch (t) {
              return (e[p] = !1), !1;
            }
          }
        })(),
        N = S.generateSecretKey,
        T = S.getPublicKey,
        U = S.finalizeEvent,
        _ = S.verifyEvent;
      function P(e) {
        return (
          (1e3 <= e && e < 1e4) ||
          [1, 2, 4, 5, 6, 7, 8, 16, 40, 41, 42, 43, 44].includes(e)
        );
      }
      function L(e) {
        return [0, 3].includes(e) || (1e4 <= e && e < 2e4);
      }
      function O(e) {
        return 2e4 <= e && e < 3e4;
      }
      function B(e) {
        return 3e4 <= e && e < 4e4;
      }
      function R(e) {
        return P(e)
          ? "regular"
          : L(e)
          ? "replaceable"
          : O(e)
          ? "ephemeral"
          : B(e)
          ? "parameterized"
          : "unknown";
      }
      function H(e, n) {
        const t = n instanceof Array ? n : [n];
        return (v(e) && t.includes(e.kind)) || !1;
      }
      g(
        {},
        {
          Application: () => Je,
          BadgeAward: () => F,
          BadgeDefinition: () => qe,
          BlockedRelaysList: () => Ae,
          BookmarkList: () => be,
          Bookmarksets: () => je,
          Calendar: () => tn,
          CalendarEventRSVP: () => rn,
          ChannelCreation: () => Z,
          ChannelHideMessage: () => X,
          ChannelMessage: () => Q,
          ChannelMetadata: () => Y,
          ChannelMuteUser: () => ee,
          ClassifiedListing: () => Qe,
          ClientAuth: () => _e,
          CommunitiesList: () => Ee,
          CommunityDefinition: () => an,
          CommunityPostApproval: () => le,
          Contacts: () => $,
          CreateOrUpdateProduct: () => We,
          CreateOrUpdateStall: () => ze,
          Curationsets: () => De,
          Date: () => en,
          DirectMessageRelaysList: () => Se,
          DraftClassifiedListing: () => Xe,
          DraftLong: () => Ve,
          Emojisets: () => Ge,
          EncryptedDirectMessage: () => q,
          EventDeletion: () => K,
          FileMetadata: () => re,
          FileServerPreference: () => Ne,
          Followsets: () => Re,
          GenericRepost: () => J,
          Genericlists: () => He,
          GiftWrap: () => te,
          HTTPAuth: () => Be,
          Handlerinformation: () => sn,
          Handlerrecommendation: () => on,
          Highlights: () => we,
          InterestsList: () => xe,
          Interestsets: () => Ke,
          JobFeedback: () => he,
          JobRequest: () => de,
          JobResult: () => ue,
          Label: () => ce,
          LightningPubRPC: () => Ue,
          LiveChatMessage: () => ie,
          LiveEvent: () => Ze,
          LongFormArticle: () => Fe,
          Metadata: () => M,
          Mutelist: () => ve,
          NWCWalletInfo: () => Te,
          NWCWalletRequest: () => Pe,
          NWCWalletResponse: () => Le,
          NostrConnect: () => Oe,
          OpenTimestamps: () => ne,
          Pinlist: () => ye,
          PrivateDirectMessage: () => G,
          ProblemTracker: () => oe,
          ProfileBadges: () => $e,
          PublicChatsList: () => Ce,
          Reaction: () => W,
          RecommendRelay: () => D,
          RelayList: () => me,
          Relaysets: () => Me,
          Report: () => se,
          Reporting: () => ae,
          Repost: () => z,
          Seal: () => V,
          SearchRelaysList: () => Ie,
          ShortTextNote: () => j,
          Time: () => nn,
          UserEmojiList: () => ke,
          UserStatuses: () => Ye,
          Zap: () => pe,
          ZapGoal: () => fe,
          ZapRequest: () => ge,
          classifyKind: () => R,
          isEphemeralKind: () => O,
          isKind: () => H,
          isParameterizedReplaceableKind: () => B,
          isRegularKind: () => P,
          isReplaceableKind: () => L,
        }
      );
      var M = 0,
        j = 1,
        D = 2,
        $ = 3,
        q = 4,
        K = 5,
        z = 6,
        W = 7,
        F = 8,
        V = 13,
        G = 14,
        J = 16,
        Z = 40,
        Y = 41,
        Q = 42,
        X = 43,
        ee = 44,
        ne = 1040,
        te = 1059,
        re = 1063,
        ie = 1311,
        oe = 1971,
        se = 1984,
        ae = 1984,
        ce = 1985,
        le = 4550,
        de = 5999,
        ue = 6999,
        he = 7e3,
        fe = 9041,
        ge = 9734,
        pe = 9735,
        we = 9802,
        ve = 1e4,
        ye = 10001,
        me = 10002,
        be = 10003,
        Ee = 10004,
        Ce = 10005,
        Ae = 10006,
        Ie = 10007,
        xe = 10015,
        ke = 10030,
        Se = 10050,
        Ne = 10096,
        Te = 13194,
        Ue = 21e3,
        _e = 22242,
        Pe = 23194,
        Le = 23195,
        Oe = 24133,
        Be = 27235,
        Re = 3e4,
        He = 30001,
        Me = 30002,
        je = 30003,
        De = 30004,
        $e = 30008,
        qe = 30009,
        Ke = 30015,
        ze = 30017,
        We = 30018,
        Fe = 30023,
        Ve = 30024,
        Ge = 30030,
        Je = 30078,
        Ze = 30311,
        Ye = 30315,
        Qe = 30402,
        Xe = 30403,
        en = 31922,
        nn = 31923,
        tn = 31924,
        rn = 31925,
        on = 31989,
        sn = 31990,
        an = 34550;
      function cn(e, n) {
        if (e.ids && -1 === e.ids.indexOf(n.id)) return !1;
        if (e.kinds && -1 === e.kinds.indexOf(n.kind)) return !1;
        if (e.authors && -1 === e.authors.indexOf(n.pubkey)) return !1;
        for (let t in e)
          if ("#" === t[0]) {
            let r = e[`#${t.slice(1)}`];
            if (
              r &&
              !n.tags.find((e) => {
                let [n, i] = e;
                return n === t.slice(1) && -1 !== r.indexOf(i);
              })
            )
              return !1;
          }
        return (
          !(e.since && n.created_at < e.since) &&
          !(e.until && n.created_at > e.until)
        );
      }
      function ln(e, n) {
        let t = n.length + 3,
          r = e.indexOf(`"${n}":`) + t,
          i = e.slice(r).indexOf('"') + r + 1;
        return e.slice(i, i + 64);
      }
      function dn(e, n) {
        let t = n.length,
          r = e.indexOf(`"${n}":`) + t + 3,
          i = e.slice(r),
          o = Math.min(i.indexOf(","), i.indexOf("}"));
        return parseInt(i.slice(0, o), 10);
      }
      function un(e) {
        let n = e.slice(0, 22).indexOf('"EVENT"');
        if (-1 === n) return null;
        let t = e.slice(n + 7 + 1).indexOf('"');
        if (-1 === t) return null;
        let r = n + 7 + 1 + t,
          i = e.slice(r + 1, 80).indexOf('"');
        if (-1 === i) return null;
        let o = r + 1 + i;
        return e.slice(r + 1, o);
      }
      function hn(e, n) {
        return n === ln(e, "id");
      }
      function fn(e, n) {
        return n === ln(e, "pubkey");
      }
      function gn(e, n) {
        return n === dn(e, "kind");
      }
      g(
        {},
        {
          getHex64: () => ln,
          getInt: () => dn,
          getSubscriptionId: () => un,
          matchEventId: () => hn,
          matchEventKind: () => gn,
          matchEventPubkey: () => fn,
        }
      );
      function pn(e, n) {
        return {
          kind: _e,
          created_at: Math.floor(Date.now() / 1e3),
          tags: [
            ["relay", e],
            ["challenge", n],
          ],
          content: "",
        };
      }
      async function wn() {
        return new Promise((e) => {
          const n = new MessageChannel(),
            t = () => {
              n.port1.removeEventListener("message", t), e();
            };
          n.port1.addEventListener("message", t),
            n.port2.postMessage(0),
            n.port1.start();
        });
      }
      g({}, { makeAuthEvent: () => pn });
      var vn,
        yn = class {
          constructor(e, n) {
            (0, r.A)(this, "url", void 0),
              (0, r.A)(this, "_connected", !1),
              (0, r.A)(this, "onclose", null),
              (0, r.A)(this, "onnotice", (e) =>
                console.debug(`NOTICE from ${this.url}: ${e}`)
              ),
              (0, r.A)(this, "_onauth", null),
              (0, r.A)(this, "baseEoseTimeout", 4400),
              (0, r.A)(this, "connectionTimeout", 4400),
              (0, r.A)(this, "openSubs", new Map()),
              (0, r.A)(this, "connectionTimeoutHandle", void 0),
              (0, r.A)(this, "connectionPromise", void 0),
              (0, r.A)(this, "openCountRequests", new Map()),
              (0, r.A)(this, "openEventPublishes", new Map()),
              (0, r.A)(this, "ws", void 0),
              (0, r.A)(this, "incomingMessageQueue", new x()),
              (0, r.A)(this, "queueRunning", !1),
              (0, r.A)(this, "challenge", void 0),
              (0, r.A)(this, "serial", 0),
              (0, r.A)(this, "verifyEvent", void 0),
              (0, r.A)(this, "_WebSocket", void 0),
              (this.url = b(e)),
              (this.verifyEvent = n.verifyEvent),
              (this._WebSocket = n.websocketImplementation || WebSocket);
          }
          static async connect(e, n) {
            const t = new yn(e, n);
            return await t.connect(), t;
          }
          closeAllSubscriptions(e) {
            for (let [n, t] of this.openSubs) t.close(e);
            this.openSubs.clear();
            for (let [n, t] of this.openEventPublishes) t.reject(new Error(e));
            this.openEventPublishes.clear();
            for (let [n, t] of this.openCountRequests) t.reject(new Error(e));
            this.openCountRequests.clear();
          }
          get connected() {
            return this._connected;
          }
          async connect() {
            return (
              this.connectionPromise ||
                ((this.challenge = void 0),
                (this.connectionPromise = new Promise((e, n) => {
                  this.connectionTimeoutHandle = setTimeout(() => {
                    var e;
                    n("connection timed out"),
                      (this.connectionPromise = void 0),
                      null === (e = this.onclose) ||
                        void 0 === e ||
                        e.call(this),
                      this.closeAllSubscriptions("relay connection timed out");
                  }, this.connectionTimeout);
                  try {
                    this.ws = new this._WebSocket(this.url);
                  } catch (t) {
                    return void n(t);
                  }
                  (this.ws.onopen = () => {
                    clearTimeout(this.connectionTimeoutHandle),
                      (this._connected = !0),
                      e();
                  }),
                    (this.ws.onerror = (e) => {
                      var t;
                      (n(e.message || "websocket error"), this._connected) &&
                        ((this._connected = !1),
                        (this.connectionPromise = void 0),
                        null === (t = this.onclose) ||
                          void 0 === t ||
                          t.call(this),
                        this.closeAllSubscriptions("relay connection errored"));
                    }),
                    (this.ws.onclose = async () => {
                      var e;
                      this._connected &&
                        ((this._connected = !1),
                        (this.connectionPromise = void 0),
                        null === (e = this.onclose) ||
                          void 0 === e ||
                          e.call(this),
                        this.closeAllSubscriptions("relay connection closed"));
                    }),
                    (this.ws.onmessage = this._onmessage.bind(this));
                }))),
              this.connectionPromise
            );
          }
          async runQueue() {
            for (this.queueRunning = !0; !1 !== this.handleNext(); ) await wn();
            this.queueRunning = !1;
          }
          handleNext() {
            const e = this.incomingMessageQueue.dequeue();
            if (!e) return !1;
            const n = un(e);
            if (n) {
              var t, r;
              const i = this.openSubs.get(n);
              if (!i) return;
              const o = ln(e, "id"),
                s =
                  null === (t = i.alreadyHaveEvent) || void 0 === t
                    ? void 0
                    : t.call(i, o);
              if (
                (null === (r = i.receivedEvent) ||
                  void 0 === r ||
                  r.call(i, this, o),
                s)
              )
                return;
            }
            try {
              let n = JSON.parse(e);
              switch (n[0]) {
                case "EVENT": {
                  const e = this.openSubs.get(n[1]),
                    t = n[2];
                  return void (
                    this.verifyEvent(t) &&
                    (function (e, n) {
                      for (let t = 0; t < e.length; t++)
                        if (cn(e[t], n)) return !0;
                      return !1;
                    })(e.filters, t) &&
                    e.onevent(t)
                  );
                }
                case "COUNT": {
                  const e = n[1],
                    t = n[2],
                    r = this.openCountRequests.get(e);
                  return void (
                    r && (r.resolve(t.count), this.openCountRequests.delete(e))
                  );
                }
                case "EOSE": {
                  const e = this.openSubs.get(n[1]);
                  if (!e) return;
                  return void e.receivedEose();
                }
                case "OK": {
                  const e = n[1],
                    t = n[2],
                    r = n[3],
                    i = this.openEventPublishes.get(e);
                  return (
                    t ? i.resolve(r) : i.reject(new Error(r)),
                    void this.openEventPublishes.delete(e)
                  );
                }
                case "CLOSED": {
                  const e = n[1],
                    t = this.openSubs.get(e);
                  if (!t) return;
                  return (t.closed = !0), void t.close(n[2]);
                }
                case "NOTICE":
                  return void this.onnotice(n[1]);
                case "AUTH":
                  var i;
                  return (
                    (this.challenge = n[1]),
                    void (
                      null === (i = this._onauth) ||
                      void 0 === i ||
                      i.call(this, n[1])
                    )
                  );
              }
            } catch (o) {
              return;
            }
          }
          async send(e) {
            if (!this.connectionPromise)
              throw new Error("sending on closed connection");
            this.connectionPromise.then(() => {
              var n;
              null === (n = this.ws) || void 0 === n || n.send(e);
            });
          }
          async auth(e) {
            if (!this.challenge)
              throw new Error("can't perform auth, no challenge was received");
            const n = await e(pn(this.url, this.challenge)),
              t = new Promise((e, t) => {
                this.openEventPublishes.set(n.id, { resolve: e, reject: t });
              });
            return this.send('["AUTH",' + JSON.stringify(n) + "]"), t;
          }
          async publish(e) {
            const n = new Promise((n, t) => {
              this.openEventPublishes.set(e.id, { resolve: n, reject: t });
            });
            return this.send('["EVENT",' + JSON.stringify(e) + "]"), n;
          }
          async count(e, n) {
            this.serial++;
            const t =
                (null === n || void 0 === n ? void 0 : n.id) ||
                "count:" + this.serial,
              r = new Promise((e, n) => {
                this.openCountRequests.set(t, { resolve: e, reject: n });
              });
            return (
              this.send(
                '["COUNT","' + t + '",' + JSON.stringify(e).substring(1)
              ),
              r
            );
          }
          subscribe(e, n) {
            const t = this.prepareSubscription(e, n);
            return t.fire(), t;
          }
          prepareSubscription(e, n) {
            this.serial++;
            const t = n.id || "sub:" + this.serial,
              r = new mn(this, t, e, n);
            return this.openSubs.set(t, r), r;
          }
          close() {
            var e;
            this.closeAllSubscriptions("relay connection closed by us"),
              (this._connected = !1),
              null === (e = this.ws) || void 0 === e || e.close();
          }
          _onmessage(e) {
            this.incomingMessageQueue.enqueue(e.data),
              this.queueRunning || this.runQueue();
          }
        },
        mn = class {
          constructor(e, n, t, i) {
            (0, r.A)(this, "relay", void 0),
              (0, r.A)(this, "id", void 0),
              (0, r.A)(this, "closed", !1),
              (0, r.A)(this, "eosed", !1),
              (0, r.A)(this, "filters", void 0),
              (0, r.A)(this, "alreadyHaveEvent", void 0),
              (0, r.A)(this, "receivedEvent", void 0),
              (0, r.A)(this, "onevent", void 0),
              (0, r.A)(this, "oneose", void 0),
              (0, r.A)(this, "onclose", void 0),
              (0, r.A)(this, "eoseTimeout", void 0),
              (0, r.A)(this, "eoseTimeoutHandle", void 0),
              (this.relay = e),
              (this.filters = t),
              (this.id = n),
              (this.alreadyHaveEvent = i.alreadyHaveEvent),
              (this.receivedEvent = i.receivedEvent),
              (this.eoseTimeout = i.eoseTimeout || e.baseEoseTimeout),
              (this.oneose = i.oneose),
              (this.onclose = i.onclose),
              (this.onevent =
                i.onevent ||
                ((e) => {
                  console.warn(
                    `onevent() callback not defined for subscription '${this.id}' in relay ${this.relay.url}. event received:`,
                    e
                  );
                }));
          }
          fire() {
            this.relay.send(
              '["REQ","' +
                this.id +
                '",' +
                JSON.stringify(this.filters).substring(1)
            ),
              (this.eoseTimeoutHandle = setTimeout(
                this.receivedEose.bind(this),
                this.eoseTimeout
              ));
          }
          receivedEose() {
            var e;
            this.eosed ||
              (clearTimeout(this.eoseTimeoutHandle),
              (this.eosed = !0),
              null === (e = this.oneose) || void 0 === e || e.call(this));
          }
          close() {
            var e;
            let n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "closed by caller";
            !this.closed &&
              this.relay.connected &&
              (this.relay.send('["CLOSE",' + JSON.stringify(this.id) + "]"),
              (this.closed = !0)),
              this.relay.openSubs.delete(this.id),
              null === (e = this.onclose) || void 0 === e || e.call(this, n);
          }
        };
      try {
        vn = WebSocket;
      } catch {}
      var bn = class extends yn {
        constructor(e) {
          super(e, { verifyEvent: _, websocketImplementation: vn });
        }
        static async connect(e) {
          const n = new bn(e);
          return await n.connect(), n;
        }
      };
      try {
        WebSocket;
      } catch {}
      var En = {};
      g(En, {
        BECH32_REGEX: () => In,
        Bech32MaxSize: () => An,
        NostrTypeGuard: () => Cn,
        decode: () => xn,
        encodeBytes: () => _n,
        naddrEncode: () => On,
        neventEncode: () => Ln,
        noteEncode: () => Tn,
        nprofileEncode: () => Pn,
        npubEncode: () => Nn,
        nsecEncode: () => Sn,
      });
      var Cn = {
          isNProfile: (e) => /^nprofile1[a-z\d]+$/.test(e || ""),
          isNEvent: (e) => /^nevent1[a-z\d]+$/.test(e || ""),
          isNAddr: (e) => /^naddr1[a-z\d]+$/.test(e || ""),
          isNSec: (e) => /^nsec1[a-z\d]{58}$/.test(e || ""),
          isNPub: (e) => /^npub1[a-z\d]{58}$/.test(e || ""),
          isNote: (e) => /^note1[a-z\d]+$/.test(e || ""),
          isNcryptsec: (e) => /^ncryptsec1[a-z\d]+$/.test(e || ""),
        },
        An = 5e3,
        In = /[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;
      function xn(e) {
        let { prefix: n, words: t } = a.I.decode(e, An),
          r = new Uint8Array(a.I.fromWords(t));
        switch (n) {
          case "nprofile": {
            var i;
            let e = kn(r);
            if (null === (i = e[0]) || void 0 === i || !i[0])
              throw new Error("missing TLV 0 for nprofile");
            if (32 !== e[0][0].length)
              throw new Error("TLV 0 should be 32 bytes");
            return {
              type: "nprofile",
              data: {
                pubkey: (0, o.My)(e[0][0]),
                relays: e[1] ? e[1].map((e) => y.decode(e)) : [],
              },
            };
          }
          case "nevent": {
            var s, c, l;
            let e = kn(r);
            if (null === (s = e[0]) || void 0 === s || !s[0])
              throw new Error("missing TLV 0 for nevent");
            if (32 !== e[0][0].length)
              throw new Error("TLV 0 should be 32 bytes");
            if (e[2] && 32 !== e[2][0].length)
              throw new Error("TLV 2 should be 32 bytes");
            if (e[3] && 4 !== e[3][0].length)
              throw new Error("TLV 3 should be 4 bytes");
            return {
              type: "nevent",
              data: {
                id: (0, o.My)(e[0][0]),
                relays: e[1] ? e[1].map((e) => y.decode(e)) : [],
                author:
                  null !== (c = e[2]) && void 0 !== c && c[0]
                    ? (0, o.My)(e[2][0])
                    : void 0,
                kind:
                  null !== (l = e[3]) && void 0 !== l && l[0]
                    ? parseInt((0, o.My)(e[3][0]), 16)
                    : void 0,
              },
            };
          }
          case "naddr": {
            var d, u, h;
            let e = kn(r);
            if (null === (d = e[0]) || void 0 === d || !d[0])
              throw new Error("missing TLV 0 for naddr");
            if (null === (u = e[2]) || void 0 === u || !u[0])
              throw new Error("missing TLV 2 for naddr");
            if (32 !== e[2][0].length)
              throw new Error("TLV 2 should be 32 bytes");
            if (null === (h = e[3]) || void 0 === h || !h[0])
              throw new Error("missing TLV 3 for naddr");
            if (4 !== e[3][0].length)
              throw new Error("TLV 3 should be 4 bytes");
            return {
              type: "naddr",
              data: {
                identifier: y.decode(e[0][0]),
                pubkey: (0, o.My)(e[2][0]),
                kind: parseInt((0, o.My)(e[3][0]), 16),
                relays: e[1] ? e[1].map((e) => y.decode(e)) : [],
              },
            };
          }
          case "nsec":
            return { type: n, data: r };
          case "npub":
          case "note":
            return { type: n, data: (0, o.My)(r) };
          default:
            throw new Error(`unknown prefix ${n}`);
        }
      }
      function kn(e) {
        let n = {},
          t = e;
        for (; t.length > 0; ) {
          let e = t[0],
            r = t[1],
            i = t.slice(2, 2 + r);
          if (((t = t.slice(2 + r)), i.length < r))
            throw new Error(`not enough data to read on TLV ${e}`);
          (n[e] = n[e] || []), n[e].push(i);
        }
        return n;
      }
      function Sn(e) {
        return _n("nsec", e);
      }
      function Nn(e) {
        return _n("npub", (0, o.aT)(e));
      }
      function Tn(e) {
        return _n("note", (0, o.aT)(e));
      }
      function Un(e, n) {
        let t = a.I.toWords(n);
        return a.I.encode(e, t, An);
      }
      function _n(e, n) {
        return Un(e, n);
      }
      function Pn(e) {
        return Un(
          "nprofile",
          Bn({
            0: [(0, o.aT)(e.pubkey)],
            1: (e.relays || []).map((e) => m.encode(e)),
          })
        );
      }
      function Ln(e) {
        let n;
        return (
          void 0 !== e.kind &&
            (n = (function (e) {
              const n = new Uint8Array(4);
              return (
                (n[0] = (e >> 24) & 255),
                (n[1] = (e >> 16) & 255),
                (n[2] = (e >> 8) & 255),
                (n[3] = 255 & e),
                n
              );
            })(e.kind)),
          Un(
            "nevent",
            Bn({
              0: [(0, o.aT)(e.id)],
              1: (e.relays || []).map((e) => m.encode(e)),
              2: e.author ? [(0, o.aT)(e.author)] : [],
              3: n ? [new Uint8Array(n)] : [],
            })
          )
        );
      }
      function On(e) {
        let n = new ArrayBuffer(4);
        return (
          new DataView(n).setUint32(0, e.kind, !1),
          Un(
            "naddr",
            Bn({
              0: [m.encode(e.identifier)],
              1: (e.relays || []).map((e) => m.encode(e)),
              2: [(0, o.aT)(e.pubkey)],
              3: [new Uint8Array(n)],
            })
          )
        );
      }
      function Bn(e) {
        let n = [];
        return (
          Object.entries(e)
            .reverse()
            .forEach((e) => {
              let [t, r] = e;
              r.forEach((e) => {
                let r = new Uint8Array(e.length + 2);
                r.set([parseInt(t)], 0),
                  r.set([e.length], 1),
                  r.set(e, 2),
                  n.push(r);
              });
            }),
          (0, o.Id)(...n)
        );
      }
      var Rn = {};
      async function Hn(e, n, t) {
        const r = e instanceof Uint8Array ? (0, o.My)(e) : e,
          s = jn(i.bI.getSharedSecret(r, "02" + n));
        let l = Uint8Array.from((0, o.po)(16)),
          d = m.encode(t),
          u = (0, c.zd)(s, l).encrypt(d);
        return `${a.K3.encode(new Uint8Array(u))}?iv=${a.K3.encode(
          new Uint8Array(l.buffer)
        )}`;
      }
      async function Mn(e, n, t) {
        const r = e instanceof Uint8Array ? (0, o.My)(e) : e;
        let [s, l] = t.split("?iv="),
          d = jn(i.bI.getSharedSecret(r, "02" + n)),
          u = a.K3.decode(l),
          h = a.K3.decode(s),
          f = (0, c.zd)(d, u).decrypt(h);
        return y.decode(f);
      }
      function jn(e) {
        return e.slice(1, 33);
      }
      g(Rn, { decrypt: () => Mn, encrypt: () => Hn });
      g(
        {},
        {
          NIP05_REGEX: () => $n,
          isNip05: () => qn,
          isValid: () => Fn,
          queryProfile: () => Wn,
          searchDomain: () => zn,
          useFetchImplementation: () => Kn,
        }
      );
      var Dn,
        $n = /^(?:([\w.+-]+)@)?([\w_-]+(\.[\w_-]+)+)$/,
        qn = (e) => $n.test(e || "");
      try {
        Dn = fetch;
      } catch {}
      function Kn(e) {
        Dn = e;
      }
      async function zn(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        try {
          const t = `https://${e}/.well-known/nostr.json?name=${n}`,
            r = await Dn(t, { redirect: "error" });
          return (await r.json()).names;
        } catch (t) {
          return {};
        }
      }
      async function Wn(e) {
        const n = e.match($n);
        if (!n) return null;
        const [t, r = "_", i] = n;
        try {
          var o;
          const e = `https://${i}/.well-known/nostr.json?name=${r}`,
            n = await (await Dn(e, { redirect: "error" })).json();
          let t = n.names[r];
          return t
            ? {
                pubkey: t,
                relays: null === (o = n.relays) || void 0 === o ? void 0 : o[t],
              }
            : null;
        } catch (s) {
          return null;
        }
      }
      async function Fn(e, n) {
        let t = await Wn(n);
        return !!t && t.pubkey === e;
      }
      function Vn(e) {
        const n = { reply: void 0, root: void 0, mentions: [], profiles: [] },
          t = [];
        for (const r of e.tags)
          "e" === r[0] && r[1] && t.push(r),
            "p" === r[0] &&
              r[1] &&
              n.profiles.push({ pubkey: r[1], relays: r[2] ? [r[2]] : [] });
        for (let r = 0; r < t.length; r++) {
          const e = t[r],
            [i, o, s, a] = e,
            c = { id: o, relays: s ? [s] : [] },
            l = 0 === r,
            d = r === t.length - 1;
          "root" !== a
            ? "reply" !== a
              ? "mention" !== a
                ? l
                  ? (n.root = c)
                  : d
                  ? (n.reply = c)
                  : n.mentions.push(c)
                : n.mentions.push(c)
              : (n.reply = c)
            : (n.root = c);
        }
        return n;
      }
      g({}, { parse: () => Vn });
      g(
        {},
        { fetchRelayInformation: () => Jn, useFetchImplementation: () => Gn }
      );
      try {
        fetch;
      } catch {}
      function Gn(e) {
        0;
      }
      async function Jn(e) {
        return await (
          await fetch(
            e.replace("ws://", "http://").replace("wss://", "https://"),
            { headers: { Accept: "application/nostr+json" } }
          )
        ).json();
      }
      function Zn(e) {
        let n = 0;
        for (let t = 0; t < 64; t += 8) {
          const r = parseInt(e.substring(t, t + 8), 16);
          if (0 !== r) {
            n += Math.clz32(r);
            break;
          }
          n += 32;
        }
        return n;
      }
      function Yn(e, n) {
        let t = 0;
        const r = e,
          i = ["nonce", t.toString(), n.toString()];
        for (r.tags.push(i); ; ) {
          const e = Math.floor(new Date().getTime() / 1e3);
          if (
            (e !== r.created_at && ((t = 0), (r.created_at = e)),
            (i[1] = (++t).toString()),
            (r.id = Qn(r)),
            Zn(r.id) >= n)
          )
            break;
        }
        return r;
      }
      function Qn(e) {
        return (0, o.My)(
          (0, s.s)(
            m.encode(
              JSON.stringify([
                0,
                e.pubkey,
                e.created_at,
                e.kind,
                e.tags,
                e.content,
              ])
            )
          )
        );
      }
      g({}, { fastEventHash: () => Qn, getPow: () => Zn, minePow: () => Yn });
      function Xn(e, n, t, r) {
        var i;
        return U(
          {
            kind: z,
            tags: [
              ...(null !== (i = e.tags) && void 0 !== i ? i : []),
              ["e", n.id, t],
              ["p", n.pubkey],
            ],
            content: "" === e.content ? "" : JSON.stringify(n),
            created_at: e.created_at,
          },
          r
        );
      }
      function et(e) {
        var n, t;
        if (e.kind !== z) return;
        let r, i;
        for (
          let o = e.tags.length - 1;
          o >= 0 && (void 0 === r || void 0 === i);
          o--
        ) {
          const n = e.tags[o];
          n.length >= 2 &&
            ("e" === n[0] && void 0 === r
              ? (r = n)
              : "p" === n[0] && void 0 === i && (i = n));
        }
        return void 0 !== r
          ? {
              id: r[1],
              relays: [
                r[2],
                null === (n = i) || void 0 === n ? void 0 : n[2],
              ].filter((e) => "string" === typeof e),
              author: null === (t = i) || void 0 === t ? void 0 : t[1],
            }
          : void 0;
      }
      function nt(e) {
        let { skipVerification: n } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const t = et(e);
        if (void 0 === t || "" === e.content) return;
        let r;
        try {
          r = JSON.parse(e.content);
        } catch (i) {
          return;
        }
        return r.id === t.id && (n || _(r)) ? r : void 0;
      }
      g(
        {},
        {
          finishRepostEvent: () => Xn,
          getRepostedEvent: () => nt,
          getRepostedEventPointer: () => et,
        }
      );
      g({}, { NOSTR_URI_REGEX: () => tt, parse: () => it, test: () => rt });
      var tt = new RegExp(`nostr:(${In.source})`);
      function rt(e) {
        return "string" === typeof e && new RegExp(`^${tt.source}$`).test(e);
      }
      function it(e) {
        const n = e.match(new RegExp(`^${tt.source}$`));
        if (!n) throw new Error(`Invalid Nostr URI: ${e}`);
        return { uri: n[0], value: n[1], decoded: xn(n[1]) };
      }
      function ot(e, n, t) {
        var r, i;
        const o = n.tags.filter(
          (e) => e.length >= 2 && ("e" === e[0] || "p" === e[0])
        );
        return U(
          {
            ...e,
            kind: W,
            tags: [
              ...(null !== (r = e.tags) && void 0 !== r ? r : []),
              ...o,
              ["e", n.id],
              ["p", n.pubkey],
            ],
            content: null !== (i = e.content) && void 0 !== i ? i : "+",
          },
          t
        );
      }
      function st(e) {
        if (e.kind !== W) return;
        let n, t;
        for (
          let r = e.tags.length - 1;
          r >= 0 && (void 0 === n || void 0 === t);
          r--
        ) {
          const i = e.tags[r];
          i.length >= 2 &&
            ("e" === i[0] && void 0 === n
              ? (n = i)
              : "p" === i[0] && void 0 === t && (t = i));
        }
        return void 0 !== n && void 0 !== t
          ? {
              id: n[1],
              relays: [n[2], t[2]].filter((e) => void 0 !== e),
              author: t[1],
            }
          : void 0;
      }
      g(
        {},
        { finishReactionEvent: () => ot, getReactedEventPointer: () => st }
      );
      g({}, { matchAll: () => ct, regex: () => at, replaceAll: () => lt });
      var at = () => new RegExp(`\\b${tt.source}\\b`, "g");
      function* ct(e) {
        const n = e.matchAll(at());
        for (const r of n)
          try {
            const [e, n] = r;
            yield {
              uri: e,
              value: n,
              decoded: xn(n),
              start: r.index,
              end: r.index + e.length,
            };
          } catch (t) {}
      }
      function lt(e, n) {
        return e.replaceAll(at(), (e, t) =>
          n({ uri: e, value: t, decoded: xn(t) })
        );
      }
      g(
        {},
        {
          channelCreateEvent: () => dt,
          channelHideMessageEvent: () => ft,
          channelMessageEvent: () => ht,
          channelMetadataEvent: () => ut,
          channelMuteUserEvent: () => gt,
        }
      );
      var dt = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return U(
            {
              kind: Z,
              tags: [...(null !== (t = e.tags) && void 0 !== t ? t : [])],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        },
        ut = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return U(
            {
              kind: Y,
              tags: [
                ["e", e.channel_create_event_id],
                ...(null !== (t = e.tags) && void 0 !== t ? t : []),
              ],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        },
        ht = (e, n) => {
          var t;
          const r = [["e", e.channel_create_event_id, e.relay_url, "root"]];
          return (
            e.reply_to_channel_message_event_id &&
              r.push([
                "e",
                e.reply_to_channel_message_event_id,
                e.relay_url,
                "reply",
              ]),
            U(
              {
                kind: Q,
                tags: [
                  ...r,
                  ...(null !== (t = e.tags) && void 0 !== t ? t : []),
                ],
                content: e.content,
                created_at: e.created_at,
              },
              n
            )
          );
        },
        ft = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return U(
            {
              kind: X,
              tags: [
                ["e", e.channel_message_event_id],
                ...(null !== (t = e.tags) && void 0 !== t ? t : []),
              ],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        },
        gt = (e, n) => {
          var t;
          let r;
          if ("object" === typeof e.content) r = JSON.stringify(e.content);
          else {
            if ("string" !== typeof e.content) return;
            r = e.content;
          }
          return U(
            {
              kind: ee,
              tags: [
                ["p", e.pubkey_to_mute],
                ...(null !== (t = e.tags) && void 0 !== t ? t : []),
              ],
              content: r,
              created_at: e.created_at,
            },
            n
          );
        };
      g(
        {},
        {
          EMOJI_SHORTCODE_REGEX: () => pt,
          matchAll: () => vt,
          regex: () => wt,
          replaceAll: () => yt,
        }
      );
      var pt = /:(\w+):/,
        wt = () => new RegExp(`\\B${pt.source}\\B`, "g");
      function* vt(e) {
        const n = e.matchAll(wt());
        for (const r of n)
          try {
            const [e, n] = r;
            yield {
              shortcode: e,
              name: n,
              start: r.index,
              end: r.index + e.length,
            };
          } catch (t) {}
      }
      function yt(e, n) {
        return e.replaceAll(wt(), (e, t) => n({ shortcode: e, name: t }));
      }
      var mt;
      g({}, { useFetchImplementation: () => bt, validateGithub: () => Et });
      try {
        mt = fetch;
      } catch {}
      function bt(e) {
        mt = e;
      }
      async function Et(e, n, t) {
        try {
          return (
            (await (
              await mt(`https://gist.github.com/${n}/${t}/raw`)
            ).text()) ===
            `Verifying that I control the following Nostr public key: ${e}`
          );
        } catch (r) {
          return !1;
        }
      }
      var Ct = {};
      g(Ct, {
        decrypt: () => _t,
        encrypt: () => Ut,
        getConversationKey: () => xt,
        v2: () => Pt,
      });
      var At = 1,
        It = 65535;
      function xt(e, n) {
        const t = i.bI.getSharedSecret(e, "02" + n).subarray(1, 33);
        return (0, u.o6)(s.s, t, "nip44-v2");
      }
      function kt(e, n) {
        const t = (0, u.fT)(s.s, e, n, 76);
        return {
          chacha_key: t.subarray(0, 32),
          chacha_nonce: t.subarray(32, 44),
          hmac_key: t.subarray(44, 76),
        };
      }
      function St(e) {
        if (!Number.isSafeInteger(e) || e < 1)
          throw new Error("expected positive integer");
        if (e <= 32) return 32;
        const n = 1 << (Math.floor(Math.log2(e - 1)) + 1),
          t = n <= 256 ? 32 : n / 8;
        return t * (Math.floor((e - 1) / t) + 1);
      }
      function Nt(e) {
        const n = m.encode(e),
          t = n.length,
          r = (function (e) {
            if (!Number.isSafeInteger(e) || e < At || e > It)
              throw new Error(
                "invalid plaintext size: must be between 1 and 65535 bytes"
              );
            const n = new Uint8Array(2);
            return new DataView(n.buffer).setUint16(0, e, !1), n;
          })(t),
          i = new Uint8Array(St(t) - t);
        return (0, o.Id)(r, n, i);
      }
      function Tt(e, n, t) {
        if (32 !== t.length)
          throw new Error("AAD associated data must be 32 bytes");
        const r = (0, o.Id)(t, n);
        return (0, h.w)(s.s, e, r);
      }
      function Ut(e, n) {
        let t =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : (0, o.po)(32);
        const { chacha_key: r, chacha_nonce: i, hmac_key: s } = kt(n, t),
          c = Nt(e),
          d = (0, l.vK)(r, i, c),
          u = Tt(s, d, t);
        return a.K3.encode((0, o.Id)(new Uint8Array([2]), t, d, u));
      }
      function _t(e, n) {
        const {
            nonce: t,
            ciphertext: r,
            mac: i,
          } = (function (e) {
            if ("string" !== typeof e)
              throw new Error("payload must be a valid string");
            const n = e.length;
            if (n < 132 || n > 87472)
              throw new Error("invalid payload length: " + n);
            if ("#" === e[0]) throw new Error("unknown encryption version");
            let t;
            try {
              t = a.K3.decode(e);
            } catch (o) {
              throw new Error("invalid base64: " + o.message);
            }
            const r = t.length;
            if (r < 99 || r > 65603)
              throw new Error("invalid data length: " + r);
            const i = t[0];
            if (2 !== i) throw new Error("unknown encryption version " + i);
            return {
              nonce: t.subarray(1, 33),
              ciphertext: t.subarray(33, -32),
              mac: t.subarray(-32),
            };
          })(e),
          { chacha_key: o, chacha_nonce: s, hmac_key: c } = kt(n, t),
          u = Tt(c, r, t);
        if (!(0, d.ex)(u, i)) throw new Error("invalid MAC");
        return (function (e) {
          const n = new DataView(e.buffer).getUint16(0),
            t = e.subarray(2, 2 + n);
          if (n < At || n > It || t.length !== n || e.length !== 2 + St(n))
            throw new Error("invalid padding");
          return y.decode(t);
        })((0, l.vK)(o, s, r));
      }
      var Pt = {
        utils: { getConversationKey: xt, calcPaddedLen: St },
        encrypt: Ut,
        decrypt: _t,
      };
      function Lt(e) {
        const { pathname: n, searchParams: t } = new URL(e),
          r = n,
          i = t.get("relay"),
          o = t.get("secret");
        if (!r || !i || !o) throw new Error("invalid connection string");
        return { pubkey: r, relay: i, secret: o };
      }
      async function Ot(e, n, t) {
        const r = { method: "pay_invoice", params: { invoice: t } },
          i = await Hn(n, e, JSON.stringify(r)),
          o = {
            kind: Pe,
            created_at: Math.round(Date.now() / 1e3),
            content: i,
            tags: [["p", e]],
          };
        return U(o, n);
      }
      g({}, { makeNwcRequestEvent: () => Ot, parseConnectionString: () => Lt });
      var Bt;
      g(
        {},
        {
          getZapEndpoint: () => Ht,
          makeZapReceipt: () => Dt,
          makeZapRequest: () => Mt,
          useFetchImplementation: () => Rt,
          validateZapRequest: () => jt,
        }
      );
      try {
        Bt = fetch;
      } catch {}
      function Rt(e) {
        Bt = e;
      }
      async function Ht(e) {
        try {
          let n = "",
            { lud06: t, lud16: r } = JSON.parse(e.content);
          if (t) {
            let { words: e } = a.I.decode(t, 1e3),
              r = a.I.fromWords(e);
            n = y.decode(r);
          } else {
            if (!r) return null;
            {
              let [e, t] = r.split("@");
              n = new URL(
                `/.well-known/lnurlp/${e}`,
                `https://${t}`
              ).toString();
            }
          }
          let i = await Bt(n),
            o = await i.json();
          if (o.allowsNostr && o.nostrPubkey) return o.callback;
        } catch (n) {}
        return null;
      }
      function Mt(e) {
        let { profile: n, event: t, amount: r, relays: i, comment: o = "" } = e;
        if (!r) throw new Error("amount not given");
        if (!n) throw new Error("profile not given");
        let s = {
          kind: 9734,
          created_at: Math.round(Date.now() / 1e3),
          content: o,
          tags: [
            ["p", n],
            ["amount", r.toString()],
            ["relays", ...i],
          ],
        };
        return t && s.tags.push(["e", t]), s;
      }
      function jt(e) {
        let n;
        try {
          n = JSON.parse(e);
        } catch (i) {
          return "Invalid zap request JSON.";
        }
        if (!v(n)) return "Zap request is not a valid Nostr event.";
        if (!_(n)) return "Invalid signature on zap request.";
        let t = n.tags.find((e) => {
          let [n, t] = e;
          return "p" === n && t;
        });
        if (!t) return "Zap request doesn't have a 'p' tag.";
        if (!t[1].match(/^[a-f0-9]{64}$/))
          return "Zap request 'p' tag is not valid hex.";
        let r = n.tags.find((e) => {
          let [n, t] = e;
          return "e" === n && t;
        });
        return r && !r[1].match(/^[a-f0-9]{64}$/)
          ? "Zap request 'e' tag is not valid hex."
          : n.tags.find((e) => {
              let [n, t] = e;
              return "relays" === n && t;
            })
          ? null
          : "Zap request doesn't have a 'relays' tag.";
      }
      function Dt(e) {
        let { zapRequest: n, preimage: t, bolt11: r, paidAt: i } = e,
          o = JSON.parse(n),
          s = o.tags.filter((e) => {
            let [n] = e;
            return "e" === n || "p" === n || "a" === n;
          }),
          a = {
            kind: 9735,
            created_at: Math.round(i.getTime() / 1e3),
            content: "",
            tags: [...s, ["P", o.pubkey], ["bolt11", r], ["description", n]],
          };
        return t && a.tags.push(["preimage", t]), a;
      }
      g(
        {},
        {
          createRumor: () => Ft,
          createSeal: () => Vt,
          createWrap: () => Gt,
          unwrapEvent: () => Yt,
          unwrapManyEvents: () => Qt,
          wrapEvent: () => Jt,
          wrapManyEvents: () => Zt,
        }
      );
      var $t = () => Math.round(Date.now() / 1e3),
        qt = () => Math.round($t() - 172800 * Math.random()),
        Kt = (e, n) => xt(e, n),
        zt = (e, n, t) => Ut(JSON.stringify(e), Kt(n, t)),
        Wt = (e, n) => JSON.parse(_t(e.content, Kt(n, e.pubkey)));
      function Ft(e, n) {
        const t = {
          created_at: $t(),
          content: "",
          tags: [],
          ...e,
          pubkey: T(n),
        };
        return (t.id = k(t)), t;
      }
      function Vt(e, n, t) {
        return U(
          { kind: V, content: zt(e, n, t), created_at: qt(), tags: [] },
          n
        );
      }
      function Gt(e, n) {
        const t = N();
        return U(
          {
            kind: te,
            content: zt(e, t, n),
            created_at: qt(),
            tags: [["p", n]],
          },
          t
        );
      }
      function Jt(e, n, t) {
        return Gt(Vt(Ft(e, n), n, t), t);
      }
      function Zt(e, n, t) {
        if (!t || 0 === t.length)
          throw new Error("At least one recipient is required.");
        const r = T(n),
          i = [Jt(e, n, r)];
        return (
          t.forEach((t) => {
            i.push(Jt(e, n, t));
          }),
          i
        );
      }
      function Yt(e, n) {
        const t = Wt(e, n);
        return Wt(t, n);
      }
      function Qt(e, n) {
        let t = [];
        return (
          e.forEach((e) => {
            t.push(Yt(e, n));
          }),
          t.sort((e, n) => e.created_at - n.created_at),
          t
        );
      }
      g(
        {},
        {
          getToken: () => er,
          hashPayload: () => ar,
          unpackEventFromToken: () => tr,
          validateEvent: () => lr,
          validateEventKind: () => ir,
          validateEventMethodTag: () => sr,
          validateEventPayloadTag: () => cr,
          validateEventTimestamp: () => rr,
          validateEventUrlTag: () => or,
          validateToken: () => nr,
        }
      );
      var Xt = "Nostr ";
      async function er(e, n, t) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = arguments.length > 4 ? arguments[4] : void 0;
        const o = {
          kind: Be,
          tags: [
            ["u", e],
            ["method", n],
          ],
          created_at: Math.round(new Date().getTime() / 1e3),
          content: "",
        };
        i && o.tags.push(["payload", ar(i)]);
        const s = await t(o);
        return (r ? Xt : "") + a.K3.encode(m.encode(JSON.stringify(s)));
      }
      async function nr(e, n, t) {
        const r = await tr(e).catch((e) => {
          throw e;
        });
        return await lr(r, n, t).catch((e) => {
          throw e;
        });
      }
      async function tr(e) {
        if (!e) throw new Error("Missing token");
        e = e.replace(Xt, "");
        const n = y.decode(a.K3.decode(e));
        if (!n || 0 === n.length || !n.startsWith("{"))
          throw new Error("Invalid token");
        return JSON.parse(n);
      }
      function rr(e) {
        return (
          !!e.created_at &&
          Math.round(new Date().getTime() / 1e3) - e.created_at < 60
        );
      }
      function ir(e) {
        return e.kind === Be;
      }
      function or(e, n) {
        const t = e.tags.find((e) => "u" === e[0]);
        return !!t && t.length > 0 && t[1] === n;
      }
      function sr(e, n) {
        const t = e.tags.find((e) => "method" === e[0]);
        return !!t && t.length > 0 && t[1].toLowerCase() === n.toLowerCase();
      }
      function ar(e) {
        const n = (0, s.s)(m.encode(JSON.stringify(e)));
        return (0, o.My)(n);
      }
      function cr(e, n) {
        const t = e.tags.find((e) => "payload" === e[0]);
        if (!t) return !1;
        const r = ar(n);
        return t.length > 0 && t[1] === r;
      }
      async function lr(e, n, t, r) {
        if (!_(e)) throw new Error("Invalid nostr event, signature invalid");
        if (!ir(e)) throw new Error("Invalid nostr event, kind invalid");
        if (!rr(e))
          throw new Error("Invalid nostr event, created_at timestamp invalid");
        if (!or(e, n)) throw new Error("Invalid nostr event, url tag invalid");
        if (!sr(e, t))
          throw new Error("Invalid nostr event, method tag invalid");
        if (
          Boolean(r) &&
          "object" === typeof r &&
          Object.keys(r).length > 0 &&
          !cr(e, r)
        )
          throw new Error(
            "Invalid nostr event, payload tag does not match request body hash"
          );
        return !0;
      }
    },
    78173: (e, n, t) => {
      var r = t(51477);
      var i =
          "function" === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e === 1 / n)) ||
                  (e !== e && n !== n)
                );
              },
        o = r.useState,
        s = r.useEffect,
        a = r.useLayoutEffect,
        c = r.useDebugValue;
      function l(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
          var t = n();
          return !i(e, t);
        } catch (r) {
          return !0;
        }
      }
      var d =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? function (e, n) {
              return n();
            }
          : function (e, n) {
              var t = n(),
                r = o({ inst: { value: t, getSnapshot: n } }),
                i = r[0].inst,
                d = r[1];
              return (
                a(
                  function () {
                    (i.value = t), (i.getSnapshot = n), l(i) && d({ inst: i });
                  },
                  [e, t, n]
                ),
                s(
                  function () {
                    return (
                      l(i) && d({ inst: i }),
                      e(function () {
                        l(i) && d({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                c(t),
                t
              );
            };
      n.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : d;
    },
    79280: (e, n, t) => {
      t.d(n, { S: () => o });
      var r = t(35827),
        i = t(90278);
      async function o(e, n) {
        var t, o;
        const { addEthereumChainParameter: s, chainId: a } = n,
          c = e.state.connections.get(
            null !==
              (t =
                null === (o = n.connector) || void 0 === o ? void 0 : o.uid) &&
              void 0 !== t
              ? t
              : e.state.current
          );
        if (c) {
          const e = c.connector;
          if (!e.switchChain) throw new i.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: s,
            chainId: a,
          });
        }
        const l = e.chains.find((e) => e.id === a);
        if (!l) throw new r.nk();
        return e.setState((e) => ({ ...e, chainId: a })), l;
      }
    },
    79333: (e, n, t) => {
      function r(e, n, t) {
        const r = e[n.name];
        if ("function" === typeof r) return r;
        const i = e[t];
        return "function" === typeof i ? i : (t) => n(e, t);
      }
      t.d(n, { T: () => r });
    },
    79450: (e, n, t) => {
      e.exports = t(86610);
    },
    80569: (e, n, t) => {
      t.d(n, { r: () => c });
      var r = t(63877),
        i = t(15856),
        o = t(38302),
        s = t(1960),
        a = t(35827);
      async function c(e) {
        var n, t;
        let c,
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (l.connector) {
          const { connector: n } = l;
          if (
            "reconnecting" === e.state.status &&
            !n.getAccounts &&
            !n.getChainId
          )
            throw new a.HF({ connector: n });
          const [t, r] = await Promise.all([
            n.getAccounts().catch((e) => {
              if (null === l.account) return [];
              throw e;
            }),
            n.getChainId(),
          ]);
          c = { accounts: t, chainId: r, connector: n };
        } else c = e.state.connections.get(e.state.current);
        if (!c) throw new a.gC();
        const d = null !== (n = l.chainId) && void 0 !== n ? n : c.chainId,
          u = await c.connector.getChainId();
        if (u !== c.chainId)
          throw new a.xU({ connectionChainId: c.chainId, connectorChainId: u });
        const h = c.connector;
        if (h.getClient) return h.getClient({ chainId: d });
        const f = (0, o.J)(
          null !== (t = l.account) && void 0 !== t ? t : c.accounts[0]
        );
        if (
          (f && (f.address = (0, s.b)(f.address)),
          l.account &&
            !c.accounts.some(
              (e) => e.toLowerCase() === f.address.toLowerCase()
            ))
        )
          throw new a.aj({ address: f.address, connector: h });
        const g = e.chains.find((e) => e.id === d),
          p = await c.connector.getProvider({ chainId: d });
        return (0, r.U)({
          account: f,
          chain: g,
          name: "Connector Client",
          transport: (e) => (0, i.I)(p)({ ...e, retryCount: 0 }),
        });
      }
    },
    80758: (e, n, t) => {
      function r(e) {
        const n = e.state.current,
          t = e.state.connections.get(n),
          r = null === t || void 0 === t ? void 0 : t.accounts,
          i = null === r || void 0 === r ? void 0 : r[0],
          o = e.chains.find(
            (e) => e.id === (null === t || void 0 === t ? void 0 : t.chainId)
          ),
          s = e.state.status;
        switch (s) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: null === t || void 0 === t ? void 0 : t.chainId,
              connector: null === t || void 0 === t ? void 0 : t.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: null === t || void 0 === t ? void 0 : t.chainId,
              connector: null === t || void 0 === t ? void 0 : t.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: s,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: null === t || void 0 === t ? void 0 : t.chainId,
              connector: null === t || void 0 === t ? void 0 : t.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: s,
            };
        }
      }
      t.d(n, { s: () => r });
    },
    83117: (e, n, t) => {
      function r(e) {
        return e.state.chainId;
      }
      t.d(n, { T: () => r });
    },
    83275: (e, n, t) => {
      t.d(n, { G: () => b });
      var r = t(21579),
        i = t(4742),
        o = t(68779),
        s = t(63157),
        a = t(67415),
        c = t(16733),
        l = t(37687),
        d = t(23871),
        u = t(64066),
        h = t(62550),
        f = t(15694),
        g = (t(49986), t(45511)),
        p = (t(91064), t(458));
      t(38696), t(52770), t(94110);
      const w = r.AH`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;
      var v = function (e, n, t, r) {
        var i,
          o = arguments.length,
          s =
            o < 3
              ? n
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(n, t))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, n, t, r);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (s = (o < 3 ? i(s) : o > 3 ? i(n, t, s) : i(n, t)) || s);
        return o > 3 && s && Object.defineProperty(n, t, s), s;
      };
      let y = class extends r.WF {
        render() {
          const { termsConditionsUrl: e, privacyPolicyUrl: n } = p.H.state;
          return e || n
            ? r.qy`
      <wui-flex
        .padding=${["m", "s", "s", "s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `
            : null;
        }
        howDoesItWorkTemplate() {
          return r.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`;
        }
        onWhatIsBuy() {
          var e;
          const n = s.W.state.activeChain;
          l.E.sendEvent({
            type: "track",
            event: "SELECT_WHAT_IS_A_BUY",
            properties: {
              isSmartAccount:
                (null === (e = d.U.state.preferredAccountTypes) || void 0 === e
                  ? void 0
                  : e[n]) === g.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            a.I.push("WhatIsABuy");
        }
      };
      (y.styles = [w]), (y = v([(0, f.EM)("w3m-onramp-providers-footer")], y));
      var m = function (e, n, t, r) {
        var i,
          o = arguments.length,
          s =
            o < 3
              ? n
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(n, t))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, n, t, r);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (s = (o < 3 ? i(s) : o > 3 ? i(n, t, s) : i(n, t)) || s);
        return o > 3 && s && Object.defineProperty(n, t, s), s;
      };
      let b = class extends r.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.providers = o.aG.state.providers),
            this.unsubscribe.push(
              o.aG.subscribeKey("providers", (e) => {
                this.providers = e;
              })
            );
        }
        firstUpdated() {
          const e = this.providers.map(async (e) =>
            "coinbase" === e.name
              ? await this.getCoinbaseOnRampURL()
              : Promise.resolve(null === e || void 0 === e ? void 0 : e.url)
          );
          Promise.all(e).then((e) => {
            this.providers = this.providers.map((n, t) => ({
              ...n,
              url: e[t] || "",
            }));
          });
        }
        render() {
          return r.qy`
      <wui-flex flexDirection="column" .padding=${[
        "0",
        "s",
        "s",
        "s",
      ]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `;
        }
        onRampProvidersTemplate() {
          return this.providers
            .filter((e) => {
              var n;
              return e.supportedChains.includes(
                null !== (n = s.W.state.activeChain) && void 0 !== n
                  ? n
                  : "eip155"
              );
            })
            .map(
              (e) => r.qy`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${() => {
              this.onClickProvider(e);
            }}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `
            );
        }
        onClickProvider(e) {
          var n;
          const t = s.W.state.activeChain;
          o.aG.setSelectedProvider(e),
            a.I.push("BuyInProgress"),
            c.w.openHref(
              e.url,
              "popupWindow",
              "width=600,height=800,scrollbars=yes"
            ),
            l.E.sendEvent({
              type: "track",
              event: "SELECT_BUY_PROVIDER",
              properties: {
                provider: e.name,
                isSmartAccount:
                  (null === (n = d.U.state.preferredAccountTypes) ||
                  void 0 === n
                    ? void 0
                    : n[t]) === g.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
              },
            });
        }
        async getCoinbaseOnRampURL() {
          var e;
          const n = d.U.state.address,
            t = s.W.state.activeCaipNetwork;
          if (!n) throw new Error("No address found");
          if (null === t || void 0 === t || !t.name)
            throw new Error("No network found");
          const r =
              null !== (e = u.oU.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]) &&
              void 0 !== e
                ? e
                : u.oU.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,
            i = o.aG.state.purchaseCurrency,
            a = i
              ? [i.symbol]
              : o.aG.state.purchaseCurrencies.map((e) => e.symbol);
          return await h.T.generateOnRampURL({
            defaultNetwork: r,
            destinationWallets: [
              {
                address: n,
                blockchains: u.oU.WC_COINBASE_PAY_SDK_CHAINS,
                assets: a,
              },
            ],
            partnerUserId: n,
            purchaseAmount: o.aG.state.purchaseAmount,
          });
        }
      };
      m([(0, i.wk)()], b.prototype, "providers", void 0),
        (b = m([(0, f.EM)("w3m-onramp-providers-view")], b));
    },
    85011: (e, n, t) => {
      t.d(n, { J: () => o });
      var r = t(34795),
        i = t(79333);
      function o(e, n) {
        const { chainId: t, ...o } = n,
          s = e.getClient({ chainId: t });
        return (0, i.T)(s, r.J, "readContract")(o);
      }
    },
    85545: (e, n, t) => {
      function r(e) {
        return e;
      }
      t.d(n, { U: () => r });
    },
    86455: (e, n, t) => {
      async function r(e) {
        let n,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t.connector) n = t.connector;
        else {
          const { connections: t, current: r } = e.state,
            i = t.get(r);
          n = null === i || void 0 === i ? void 0 : i.connector;
        }
        const r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            const n = r.values().next().value;
            return { ...e, connections: new Map(r), current: n.connector.uid };
          });
        {
          var i, o;
          const n = e.state.current;
          if (!n) return;
          const t =
            null === (i = e.state.connections.get(n)) || void 0 === i
              ? void 0
              : i.connector;
          if (!t) return;
          await (null === (o = e.storage) || void 0 === o
            ? void 0
            : o.setItem("recentConnectorId", t.id));
        }
      }
      t.d(n, { Z: () => r });
    },
    86610: (e, n, t) => {
      var r = t(51477),
        i = t(17808);
      var o =
          "function" === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e === 1 / n)) ||
                  (e !== e && n !== n)
                );
              },
        s = i.useSyncExternalStore,
        a = r.useRef,
        c = r.useEffect,
        l = r.useMemo,
        d = r.useDebugValue;
      n.useSyncExternalStoreWithSelector = function (e, n, t, r, i) {
        var u = a(null);
        if (null === u.current) {
          var h = { hasValue: !1, value: null };
          u.current = h;
        } else h = u.current;
        u = l(
          function () {
            function e(e) {
              if (!c) {
                if (
                  ((c = !0), (s = e), (e = r(e)), void 0 !== i && h.hasValue)
                ) {
                  var n = h.value;
                  if (i(n, e)) return (a = n);
                }
                return (a = e);
              }
              if (((n = a), o(s, e))) return n;
              var t = r(e);
              return void 0 !== i && i(n, t)
                ? ((s = e), n)
                : ((s = e), (a = t));
            }
            var s,
              a,
              c = !1,
              l = void 0 === t ? null : t;
            return [
              function () {
                return e(n());
              },
              null === l
                ? void 0
                : function () {
                    return e(l());
                  },
            ];
          },
          [n, t, r, i]
        );
        var f = s(e, u[0], u[1]);
        return (
          c(
            function () {
              (h.hasValue = !0), (h.value = f);
            },
            [f]
          ),
          d(f),
          f
        );
      };
    },
    88452: (e, n, t) => {
      t.d(n, { j: () => f });
      var r = t(42821),
        i = t(42449),
        o = (t(99296), t(26498)),
        s = t(39103),
        a = t(29269),
        c = t(658),
        l = t(52590),
        d = t(29265),
        u = t(91125),
        h = t(13740).Buffer;
      class f extends l.F {
        constructor(e) {
          let { provider: n, chains: t, getActiveChain: r } = e;
          super({ caipNetworks: t, namespace: "solana", provider: n }),
            (this.eventEmitter = new u.Y()),
            (this.emit = this.eventEmitter.emit.bind(this.eventEmitter)),
            (this.on = this.eventEmitter.on.bind(this.eventEmitter)),
            (this.removeListener = this.eventEmitter.removeListener.bind(
              this.eventEmitter
            )),
            (this.getActiveChain = r);
        }
        get session() {
          return this.provider.session;
        }
        get chains() {
          return this.sessionChains
            .map((e) => {
              let n = e;
              return (
                n === c.w.CHAIN_IDS.Deprecated_Mainnet
                  ? (n = c.w.CHAIN_IDS.Mainnet)
                  : n === c.w.CHAIN_IDS.Deprecated_Devnet &&
                    (n = c.w.CHAIN_IDS.Devnet),
                this.caipNetworks.find((e) => e.caipNetworkId === n)
              );
            })
            .filter(Boolean);
        }
        get publicKey() {
          const e = this.getAccount(!1);
          if (e) return new i.J3(e.publicKey);
        }
        async connect() {
          await super.connectWalletConnect();
          const e = this.getAccount(!0);
          return this.emit("connect", new i.J3(e.publicKey)), e.address;
        }
        async disconnect() {
          await super.disconnect(), this.emit("disconnect", void 0);
        }
        async signMessage(e) {
          this.checkIfMethodIsSupported("solana_signMessage");
          const n = await this.internalRequest("solana_signMessage", {
            message: o.A.encode(e),
            pubkey: this.getAccount(!0).address,
          });
          return o.A.decode(n.signature);
        }
        async signTransaction(e) {
          this.checkIfMethodIsSupported("solana_signTransaction");
          const n = this.serializeTransaction(e),
            t = await this.internalRequest("solana_signTransaction", {
              transaction: n,
              pubkey: this.getAccount(!0).address,
              ...this.getRawRPCParams(e),
            });
          if ("signature" in t) {
            const n = o.A.decode(t.signature);
            return (
              e.addSignature(
                new i.J3(this.getAccount(!0).publicKey),
                h.from(n)
              ),
              e
            );
          }
          const s = h.from(t.transaction, "base64");
          return (0, r.Y)(e)
            ? i.Kt.deserialize(new Uint8Array(s))
            : i.ZX.from(s);
        }
        async signAndSendTransaction(e, n) {
          this.checkIfMethodIsSupported("solana_signAndSendTransaction");
          const t = this.serializeTransaction(e),
            r = await this.internalRequest("solana_signAndSendTransaction", {
              transaction: t,
              pubkey: this.getAccount(!0).address,
              sendOptions: n,
            });
          return this.emit("pendingTransaction", void 0), r.signature;
        }
        async sendTransaction(e, n, t) {
          const r = await this.signTransaction(e),
            i = await n.sendRawTransaction(r.serialize(), t);
          return this.emit("pendingTransaction", void 0), i;
        }
        async signAllTransactions(e) {
          try {
            this.checkIfMethodIsSupported("solana_signAllTransactions");
            return (
              await this.internalRequest("solana_signAllTransactions", {
                transactions: e.map((e) => this.serializeTransaction(e)),
              })
            ).transactions.map((n, t) => {
              const o = e[t];
              if (!o) throw new Error("Invalid transactions response");
              const s = h.from(n, "base64");
              return (0, r.Y)(o)
                ? i.Kt.deserialize(new Uint8Array(s))
                : (this.emit("pendingTransaction", void 0), i.ZX.from(s));
            });
          } catch (n) {
            if (n instanceof d.y) {
              const n = [];
              for (const t of e) n.push(await this.signTransaction(t));
              return n;
            }
            throw n;
          }
        }
        request(e) {
          return this.internalRequest(e.method, e.params);
        }
        async getAccounts() {
          var e;
          const n =
            (null === (e = this.session) ||
            void 0 === e ||
            null === (e = e.namespaces.solana) ||
            void 0 === e
              ? void 0
              : e.accounts) || [];
          return Promise.resolve(
            n.map((e) => ({
              namespace: this.chain,
              address: a.C.parseCaipAddress(e).address,
              type: "eoa",
            }))
          );
        }
        internalRequest(e, n) {
          var t;
          const r = this.chains.find((e) => {
            var n;
            return (
              (null === (n = this.getActiveChain()) || void 0 === n
                ? void 0
                : n.id) === e.id
            );
          });
          let i = null === r || void 0 === r ? void 0 : r.caipNetworkId;
          switch (i) {
            case c.w.CHAIN_IDS.Mainnet:
              this.sessionChains.includes(c.w.CHAIN_IDS.Mainnet) ||
                (i = c.w.CHAIN_IDS.Deprecated_Mainnet);
              break;
            case c.w.CHAIN_IDS.Devnet:
              this.sessionChains.includes(c.w.CHAIN_IDS.Devnet) ||
                (i = c.w.CHAIN_IDS.Deprecated_Devnet);
          }
          return null === (t = this.provider) || void 0 === t
            ? void 0
            : t.request({ method: e, params: n }, i);
        }
        get sessionChains() {
          var e;
          return s.kl.getChainsFromNamespaces(
            null === (e = this.session) || void 0 === e ? void 0 : e.namespaces
          );
        }
        serializeTransaction(e) {
          return h
            .from(new Uint8Array(e.serialize({ verifySignatures: !1 })))
            .toString("base64");
        }
        getAccount(e) {
          var n;
          const t =
            null === (n = this.session) ||
            void 0 === n ||
            null === (n = n.namespaces.solana) ||
            void 0 === n
              ? void 0
              : n.accounts[0];
          if (!t) {
            if (e) throw new Error("Account not found");
            return;
          }
          const r = t.split(":")[2];
          if (r) return { address: r, publicKey: o.A.decode(r) };
          if (e) throw new Error("Address not found");
        }
        getRawRPCParams(e) {
          var n, t, i;
          return (0, r.Y)(e)
            ? {}
            : {
                feePayer:
                  null !==
                    (n =
                      null === (t = e.feePayer) || void 0 === t
                        ? void 0
                        : t.toBase58()) && void 0 !== n
                    ? n
                    : "",
                instructions: e.instructions.map((e) => ({
                  data: o.A.encode(new Uint8Array(e.data)),
                  keys: e.keys.map((e) => ({
                    isWritable: e.isWritable,
                    isSigner: e.isSigner,
                    pubkey: e.pubkey.toBase58(),
                  })),
                  programId: e.programId.toBase58(),
                })),
                recentBlockhash:
                  null !== (i = e.recentBlockhash) && void 0 !== i ? i : "",
              };
        }
        checkIfMethodIsSupported(e) {
          var n;
          if (
            null === (n = this.session) ||
            void 0 === n ||
            null === (n = n.namespaces.solana) ||
            void 0 === n ||
            !n.methods.includes(e)
          )
            throw new d.y(e);
        }
      }
    },
    89980: (e, n, t) => {
      t.d(n, { C: () => a });
      var r = t(28453);
      var i,
        o,
        s = function (e, n, t, r) {
          if ("a" === t && !r)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" === typeof n ? e !== n || !r : !n.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === t ? r : "a" === t ? r.call(e) : r ? r.value : n.get(e);
        };
      class a extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return `@wagmi/core@${r.r}`;
        }
        constructor(e) {
          var n;
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            i.add(this),
            Object.defineProperty(this, "details", {
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
            Object.defineProperty(this, "metaMessages", {
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          const r =
              t.cause instanceof a
                ? t.cause.details
                : null !== (n = t.cause) && void 0 !== n && n.message
                ? t.cause.message
                : t.details,
            o = (t.cause instanceof a && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(o
              ? [
                  `Docs: ${this.docsBaseUrl}${o}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(r ? [`Details: ${r}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = o),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return s(this, i, "m", o).call(this, this, e);
        }
      }
      (i = new WeakSet()),
        (o = function e(n, t) {
          return null !== t && void 0 !== t && t(n)
            ? n
            : n.cause
            ? s(this, i, "m", e).call(this, n.cause, t)
            : n;
        });
    },
    90278: (e, n, t) => {
      t.d(n, { N: () => i, V: () => o });
      var r = t(89980);
      class i extends r.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class o extends r.C {
        constructor(e) {
          let { connector: n } = e;
          super(`"${n.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    90839: (e, n, t) => {
      t.d(n, { Z: () => k });
      var r = t(72932),
        i = t(63877);
      const o = (e) => (n, t, r) => {
        const i = r.subscribe;
        r.subscribe = (e, n, t) => {
          let o = e;
          if (n) {
            const i = (null == t ? void 0 : t.equalityFn) || Object.is;
            let s = e(r.getState());
            (o = (t) => {
              const r = e(t);
              if (!i(s, r)) {
                const e = s;
                n((s = r), e);
              }
            }),
              (null == t ? void 0 : t.fireImmediately) && n(s, s);
          }
          return i(o);
        };
        return e(n, t, r);
      };
      function s(e, n) {
        let t;
        try {
          t = e();
        } catch (r) {
          return;
        }
        return {
          getItem: (e) => {
            var r;
            const i = (e) =>
                null === e
                  ? null
                  : JSON.parse(e, null == n ? void 0 : n.reviver),
              o = null != (r = t.getItem(e)) ? r : null;
            return o instanceof Promise ? o.then(i) : i(o);
          },
          setItem: (e, r) =>
            t.setItem(e, JSON.stringify(r, null == n ? void 0 : n.replacer)),
          removeItem: (e) => t.removeItem(e),
        };
      }
      const a = (e) => (n) => {
          try {
            const t = e(n);
            return t instanceof Promise
              ? t
              : {
                  then: (e) => a(e)(t),
                  catch(e) {
                    return this;
                  },
                };
          } catch (t) {
            return {
              then(e) {
                return this;
              },
              catch: (e) => a(e)(t),
            };
          }
        },
        c = (e, n) => (t, r, i) => {
          let o = {
              storage: s(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, n) => ({ ...n, ...e }),
              ...n,
            },
            c = !1;
          const l = new Set(),
            d = new Set();
          let u = o.storage;
          if (!u)
            return e(
              function () {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`
                ),
                  t(...arguments);
              },
              r,
              i
            );
          const h = () => {
              const e = o.partialize({ ...r() });
              return u.setItem(o.name, { state: e, version: o.version });
            },
            f = i.setState;
          i.setState = (e, n) => {
            f(e, n), h();
          };
          const g = e(
            function () {
              t(...arguments), h();
            },
            r,
            i
          );
          let p;
          i.getInitialState = () => g;
          const w = () => {
            var e, n;
            if (!u) return;
            (c = !1),
              l.forEach((e) => {
                var n;
                return e(null != (n = r()) ? n : g);
              });
            const i =
              (null == (n = o.onRehydrateStorage)
                ? void 0
                : n.call(o, null != (e = r()) ? e : g)) || void 0;
            return a(u.getItem.bind(u))(o.name)
              .then((e) => {
                if (e) {
                  if ("number" !== typeof e.version || e.version === o.version)
                    return [!1, e.state];
                  if (o.migrate) return [!0, o.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then((e) => {
                var n;
                const [i, s] = e;
                if (((p = o.merge(s, null != (n = r()) ? n : g)), t(p, !0), i))
                  return h();
              })
              .then(() => {
                null == i || i(p, void 0),
                  (p = r()),
                  (c = !0),
                  d.forEach((e) => e(p));
              })
              .catch((e) => {
                null == i || i(void 0, e);
              });
          };
          return (
            (i.persist = {
              setOptions: (e) => {
                (o = { ...o, ...e }), e.storage && (u = e.storage);
              },
              clearStorage: () => {
                null == u || u.removeItem(o.name);
              },
              getOptions: () => o,
              rehydrate: () => w(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
            }),
            o.skipHydration || w(),
            p || g
          );
        },
        l = (e) => {
          let n;
          const t = new Set(),
            r = (e, r) => {
              const i = "function" === typeof e ? e(n) : e;
              if (!Object.is(i, n)) {
                const e = n;
                (n = (null != r ? r : "object" !== typeof i || null === i)
                  ? i
                  : Object.assign({}, n, i)),
                  t.forEach((t) => t(n, e));
              }
            },
            i = () => n,
            o = {
              setState: r,
              getState: i,
              getInitialState: () => s,
              subscribe: (e) => (t.add(e), () => t.delete(e)),
            },
            s = (n = e(r, i, o));
          return o;
        },
        d = (e) => (e ? l(e) : l);
      var u = t(64956),
        h = t(27335);
      class f {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new h.b(),
            });
        }
        on(e, n) {
          this._emitter.on(e, n);
        }
        once(e, n) {
          this._emitter.once(e, n);
        }
        off(e, n) {
          this._emitter.off(e, n);
        }
        emit(e) {
          const n = arguments.length <= 1 ? void 0 : arguments[1];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function g(e, n) {
        return JSON.parse(e, (e, t) => {
          var r, i, o;
          let s = t;
          return (
            "bigint" ===
              (null === (r = s) || void 0 === r ? void 0 : r.__type) &&
              (s = BigInt(s.value)),
            "Map" === (null === (i = s) || void 0 === i ? void 0 : i.__type) &&
              (s = new Map(s.value)),
            null !== (o = null === n || void 0 === n ? void 0 : n(e, s)) &&
            void 0 !== o
              ? o
              : s
          );
        });
      }
      function p(e, n) {
        return e.slice(0, n).join(".") || ".";
      }
      function w(e, n) {
        const { length: t } = e;
        for (let r = 0; r < t; ++r) if (e[r] === n) return r + 1;
        return 0;
      }
      function v(e, n, t, r) {
        return JSON.stringify(
          e,
          (function (e, n) {
            const t = "function" === typeof e,
              r = "function" === typeof n,
              i = [],
              o = [];
            return function (s, a) {
              if ("object" === typeof a)
                if (i.length) {
                  const e = w(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), o.splice(e)),
                    (o[o.length] = s);
                  const t = w(i, a);
                  if (0 !== t)
                    return r ? n.call(this, s, a, p(o, t)) : `[ref=${p(o, t)}]`;
                } else (i[0] = a), (o[0] = s);
              return t ? e.call(this, s, a) : a;
            };
          })((e, t) => {
            var r;
            let i = t;
            return (
              "bigint" === typeof i &&
                (i = { __type: "bigint", value: t.toString() }),
              i instanceof Map &&
                (i = { __type: "Map", value: Array.from(t.entries()) }),
              null !== (r = null === n || void 0 === n ? void 0 : n(e, i)) &&
              void 0 !== r
                ? r
                : i
            );
          }, r),
          null !== t && void 0 !== t ? t : void 0
        );
      }
      function y(e) {
        const {
          deserialize: n = g,
          key: t = "wagmi",
          serialize: r = v,
          storage: i = m,
        } = e;
        function o(e) {
          return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
        }
        return {
          ...i,
          key: t,
          async getItem(e, r) {
            var s;
            const a = i.getItem(`${t}.${e}`),
              c = await o(a);
            return c
              ? null !== (s = n(c)) && void 0 !== s
                ? s
                : null
              : null !== r && void 0 !== r
              ? r
              : null;
          },
          async setItem(e, n) {
            const s = `${t}.${e}`;
            null === n ? await o(i.removeItem(s)) : await o(i.setItem(s, r(n)));
          },
          async removeItem(e) {
            await o(i.removeItem(`${t}.${e}`));
          },
        };
      }
      const m = {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
      };
      function b() {
        const e =
          "undefined" !== typeof window && window.localStorage
            ? window.localStorage
            : m;
        return {
          getItem: (n) => e.getItem(n),
          removeItem(n) {
            e.removeItem(n);
          },
          setItem(n, t) {
            try {
              e.setItem(n, t);
            } catch {}
          },
        };
      }
      var E = t(35827);
      const C = 256;
      let A,
        I = C;
      var x = t(28453);
      function k(e) {
        var n;
        const {
            multiInjectedProviderDiscovery: t = !0,
            storage: s = y({ storage: b() }),
            syncConnectedChain: a = !0,
            ssr: l = !1,
            ...h
          } = e,
          g = "undefined" !== typeof window && t ? (0, r.y)() : void 0,
          p = d(() => h.chains),
          w = d(() => {
            const e = [],
              n = new Set();
            for (const r of null !== (t = h.connectors) && void 0 !== t
              ? t
              : []) {
              var t;
              const i = v(r);
              if ((e.push(i), !l && i.rdns)) {
                const e = "string" === typeof i.rdns ? [i.rdns] : i.rdns;
                for (const t of e) n.add(t);
              }
            }
            if (!l && g) {
              const t = g.getProviders();
              for (const r of t) n.has(r.info.rdns) || e.push(v(m(r)));
            }
            return e;
          });
        function v(e) {
          var n;
          const t = (function (e) {
              return new f(e);
            })(
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 11;
                if (!A || I + e > 2 * C) {
                  (A = ""), (I = 0);
                  for (let e = 0; e < C; e++)
                    A += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return A.substring(I, I++ + e);
              })()
            ),
            r = {
              ...e({
                emitter: t,
                chains: p.getState(),
                storage: s,
                transports: h.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return (
            t.on("connect", L),
            null === (n = r.setup) || void 0 === n || n.call(r),
            r
          );
        }
        function m(e) {
          const { info: n } = e,
            t = e.provider;
          return (0, u.b)({ target: { ...n, id: n.rdns, provider: t } });
        }
        const k = new Map();
        function S() {
          return {
            chainId: p.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let N;
        const T = "0.0.0-canary-";
        N = x.r.startsWith(T)
          ? Number.parseInt(x.r.replace(T, ""))
          : Number.parseInt(
              null !== (n = x.r.split(".")[0]) && void 0 !== n ? n : "0"
            );
        const U = d(
          o(
            s
              ? c(S, {
                  migrate(e, n) {
                    if (n === N) return e;
                    const t = S(),
                      r = _(e, t.chainId);
                    return { ...t, chainId: r };
                  },
                  name: "store",
                  partialize: (e) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(e.connections.entries()).map((e) => {
                        let [n, t] = e;
                        const { id: r, name: i, type: o, uid: s } = t.connector,
                          a = { id: r, name: i, type: o, uid: s };
                        return [n, { ...t, connector: a }];
                      }),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  merge(e, n) {
                    "object" === typeof e &&
                      e &&
                      "status" in e &&
                      delete e.status;
                    const t = _(e, n.chainId);
                    return { ...n, ...e, chainId: t };
                  },
                  skipHydration: l,
                  storage: s,
                  version: N,
                })
              : S
          )
        );
        function _(e, n) {
          return e &&
            "object" === typeof e &&
            "chainId" in e &&
            "number" === typeof e.chainId &&
            p.getState().some((n) => n.id === e.chainId)
            ? e.chainId
            : n;
        }
        function P(e) {
          U.setState((n) => {
            var t, r;
            const i = n.connections.get(e.uid);
            return i
              ? {
                  ...n,
                  connections: new Map(n.connections).set(e.uid, {
                    accounts:
                      null !== (t = e.accounts) && void 0 !== t
                        ? t
                        : i.accounts,
                    chainId:
                      null !== (r = e.chainId) && void 0 !== r ? r : i.chainId,
                    connector: i.connector,
                  }),
                }
              : n;
          });
        }
        function L(e) {
          "connecting" !== U.getState().status &&
            "reconnecting" !== U.getState().status &&
            U.setState((n) => {
              const t = w.getState().find((n) => n.uid === e.uid);
              return t
                ? (t.emitter.listenerCount("connect") &&
                    t.emitter.off("connect", P),
                  t.emitter.listenerCount("change") ||
                    t.emitter.on("change", P),
                  t.emitter.listenerCount("disconnect") ||
                    t.emitter.on("disconnect", O),
                  {
                    ...n,
                    connections: new Map(n.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: t,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : n;
            });
        }
        function O(e) {
          U.setState((n) => {
            const t = n.connections.get(e.uid);
            if (t) {
              const e = t.connector;
              e.emitter.listenerCount("change") &&
                t.connector.emitter.off("change", P),
                e.emitter.listenerCount("disconnect") &&
                  t.connector.emitter.off("disconnect", O),
                e.emitter.listenerCount("connect") ||
                  t.connector.emitter.on("connect", L);
            }
            if ((n.connections.delete(e.uid), 0 === n.connections.size))
              return {
                ...n,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            const r = n.connections.values().next().value;
            return {
              ...n,
              connections: new Map(n.connections),
              current: r.connector.uid,
            };
          });
        }
        return (
          U.setState(S()),
          a &&
            U.subscribe(
              (e) => {
                var n;
                let { connections: t, current: r } = e;
                return r
                  ? null === (n = t.get(r)) || void 0 === n
                    ? void 0
                    : n.chainId
                  : void 0;
              },
              (e) => {
                if (p.getState().some((n) => n.id === e))
                  return U.setState((n) => ({
                    ...n,
                    chainId: null !== e && void 0 !== e ? e : n.chainId,
                  }));
              }
            ),
          null === g ||
            void 0 === g ||
            g.subscribe((e) => {
              const n = new Set(),
                t = new Set();
              for (const i of w.getState())
                if ((n.add(i.id), i.rdns)) {
                  const e = "string" === typeof i.rdns ? [i.rdns] : i.rdns;
                  for (const n of e) t.add(n);
                }
              const r = [];
              for (const i of e) {
                if (t.has(i.info.rdns)) continue;
                const e = v(m(i));
                n.has(e.id) || r.push(e);
              }
              (s && !U.persist.hasHydrated()) ||
                w.setState((e) => [...e, ...r], !0);
            }),
          {
            get chains() {
              return p.getState();
            },
            get connectors() {
              return w.getState();
            },
            storage: s,
            getClient: function () {
              var e;
              let n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              const t =
                  null !== (e = n.chainId) && void 0 !== e
                    ? e
                    : U.getState().chainId,
                r = p.getState().find((e) => e.id === t);
              if (n.chainId && !r) throw new E.nk();
              {
                const e = k.get(U.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new E.nk();
              }
              {
                const e = k.get(t);
                if (e) return e;
              }
              let o;
              if (h.client) o = h.client({ chain: r });
              else {
                var s;
                const e = r.id,
                  n = p.getState().map((e) => e.id),
                  t = {},
                  a = Object.entries(h);
                for (const [r, i] of a)
                  if (
                    "chains" !== r &&
                    "client" !== r &&
                    "connectors" !== r &&
                    "transports" !== r
                  )
                    if ("object" === typeof i)
                      if (e in i) t[r] = i[e];
                      else {
                        if (n.some((e) => e in i)) continue;
                        t[r] = i;
                      }
                    else t[r] = i;
                o = (0, i.U)({
                  ...t,
                  chain: r,
                  batch:
                    null !== (s = t.batch) && void 0 !== s
                      ? s
                      : { multicall: !0 },
                  transport: (n) => h.transports[e]({ ...n, connectors: w }),
                });
              }
              return k.set(t, o), o;
            },
            get state() {
              return U.getState();
            },
            setState(e) {
              let n;
              n = "function" === typeof e ? e(U.getState()) : e;
              const t = S();
              "object" !== typeof n && (n = t);
              Object.keys(t).some((e) => !(e in n)) && (n = t),
                U.setState(n, !0);
            },
            subscribe: (e, n, t) =>
              U.subscribe(
                e,
                n,
                t ? { ...t, fireImmediately: t.emitImmediately } : void 0
              ),
            _internal: {
              mipd: g,
              store: U,
              ssr: Boolean(l),
              syncConnectedChain: a,
              transports: h.transports,
              chains: {
                setState(e) {
                  const n = "function" === typeof e ? e(p.getState()) : e;
                  if (0 !== n.length) return p.setState(n, !0);
                },
                subscribe: (e) => p.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: m,
                setup: v,
                setState: (e) =>
                  w.setState("function" === typeof e ? e(w.getState()) : e, !0),
                subscribe: (e) => w.subscribe(e),
              },
              events: { change: P, connect: L, disconnect: O },
            },
          }
        );
      }
    },
    91125: (e, n, t) => {
      t.d(n, { Y: () => r });
      class r {
        constructor() {
          this.listeners = {
            accountsChanged: [],
            chainChanged: [],
            connect: [],
            disconnect: [],
            pendingTransaction: [],
            auth_rpcRequest: [],
            auth_rpcSuccess: [],
            auth_rpcError: [],
          };
        }
        on(e, n) {
          this.listeners[e].push(n);
        }
        removeListener(e, n) {
          this.listeners[e] = this.listeners[e].filter((e) => e !== n);
        }
        emit(e, n) {
          this.listeners[e].forEach((e) => e(n));
        }
      }
    },
    94061: (e, n, t) => {
      t.d(n, { n: () => c });
      var r = t(33910),
        i = t(62917),
        o = t(56737),
        s = t(86182),
        a = t(79333);
      async function c(e, n) {
        const { chainId: t, timeout: c = 0, ...l } = n,
          d = e.getClient({ chainId: t }),
          u = (0, a.T)(d, i.n, "waitForTransactionReceipt"),
          h = await u({ ...l, timeout: c });
        if ("reverted" === h.status) {
          const e = (0, a.T)(d, o.x, "getTransaction"),
            n = await e({ hash: h.transactionHash }),
            t = (0, a.T)(d, s.T, "call"),
            i = await t({
              ...n,
              data: n.input,
              gasPrice: "eip1559" !== n.type ? n.gasPrice : void 0,
              maxFeePerGas: "eip1559" === n.type ? n.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === n.type ? n.maxPriorityFeePerGas : void 0,
            }),
            c =
              null !== i && void 0 !== i && i.data
                ? (0, r.IQ)(`0x${i.data.substring(138)}`)
                : "unknown reason";
          throw new Error(c);
        }
        return { ...h, chainId: d.chain.id };
      }
    },
    97338: (e, n, t) => {
      function r(e, n) {
        const { onChange: t } = n;
        return e._internal.connectors.subscribe((e, n) => {
          t(Object.values(e), n);
        });
      }
      t.d(n, { O: () => r });
    },
  },
]);
