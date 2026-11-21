/*! For license information please see 7208.3db2e080.js.LICENSE.txt */
"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [7208],
  {
    458: (e, t, a) => {
      a.d(t, { H: () => l });
      var r = a(59586),
        o = a(86992),
        n = a(64066),
        i = a(16733);
      const s = {
          getFeatureValue(e, t) {
            const a = null === t || void 0 === t ? void 0 : t[e];
            return void 0 === a ? n.oU.DEFAULT_FEATURES[e] : a;
          },
          filterSocialsByPlatform(e) {
            if (!e || !e.length) return e;
            if (i.w.isTelegram()) {
              if (i.w.isIos()) return e.filter((e) => "google" !== e);
              if (i.w.isMac()) return e.filter((e) => "x" !== e);
              if (i.w.isAndroid())
                return e.filter((e) => !["facebook", "x"].includes(e));
            }
            return e;
          },
        },
        c = (0, r.BX)({
          features: n.oU.DEFAULT_FEATURES,
          projectId: "",
          sdkType: "appkit",
          sdkVersion: "html-wagmi-undefined",
          defaultAccountTypes: {
            solana: "eoa",
            bip122: "payment",
            polkadot: "eoa",
            eip155: "smartAccount",
          },
          enableNetworkSwitch: !0,
        }),
        l = {
          state: c,
          subscribeKey: (e, t) => (0, o.u$)(c, e, t),
          setOptions(e) {
            Object.assign(c, e);
          },
          setFeatures(e) {
            if (!e) return;
            c.features || (c.features = n.oU.DEFAULT_FEATURES);
            const t = { ...c.features, ...e };
            (c.features = t),
              c.features.socials &&
                (c.features.socials = s.filterSocialsByPlatform(
                  c.features.socials
                ));
          },
          setProjectId(e) {
            c.projectId = e;
          },
          setCustomRpcUrls(e) {
            c.customRpcUrls = e;
          },
          setAllWallets(e) {
            c.allWallets = e;
          },
          setIncludeWalletIds(e) {
            c.includeWalletIds = e;
          },
          setExcludeWalletIds(e) {
            c.excludeWalletIds = e;
          },
          setFeaturedWalletIds(e) {
            c.featuredWalletIds = e;
          },
          setTokens(e) {
            c.tokens = e;
          },
          setTermsConditionsUrl(e) {
            c.termsConditionsUrl = e;
          },
          setPrivacyPolicyUrl(e) {
            c.privacyPolicyUrl = e;
          },
          setCustomWallets(e) {
            c.customWallets = e;
          },
          setIsSiweEnabled(e) {
            c.isSiweEnabled = e;
          },
          setIsUniversalProvider(e) {
            c.isUniversalProvider = e;
          },
          setSdkVersion(e) {
            c.sdkVersion = e;
          },
          setMetadata(e) {
            c.metadata = e;
          },
          setDisableAppend(e) {
            c.disableAppend = e;
          },
          setEIP6963Enabled(e) {
            c.enableEIP6963 = e;
          },
          setDebug(e) {
            c.debug = e;
          },
          setEnableWalletConnect(e) {
            c.enableWalletConnect = e;
          },
          setEnableWalletGuide(e) {
            c.enableWalletGuide = e;
          },
          setEnableAuthLogger(e) {
            c.enableAuthLogger = e;
          },
          setEnableWallets(e) {
            c.enableWallets = e;
          },
          setHasMultipleAddresses(e) {
            c.hasMultipleAddresses = e;
          },
          setSIWX(e) {
            c.siwx = e;
          },
          setConnectMethodsOrder(e) {
            c.features = { ...c.features, connectMethodsOrder: e };
          },
          setWalletFeaturesOrder(e) {
            c.features = { ...c.features, walletFeaturesOrder: e };
          },
          setSocialsOrder(e) {
            c.features = { ...c.features, socials: e };
          },
          setCollapseWallets(e) {
            c.features = { ...c.features, collapseWallets: e };
          },
          setEnableEmbedded(e) {
            c.enableEmbedded = e;
          },
          setAllowUnsupportedChain(e) {
            c.allowUnsupportedChain = e;
          },
          setManualWCControl(e) {
            c.manualWCControl = e;
          },
          setEnableNetworkSwitch(e) {
            c.enableNetworkSwitch = e;
          },
          setDefaultAccountTypes() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            Object.entries(e).forEach((e) => {
              let [t, a] = e;
              a && (c.defaultAccountTypes[t] = a);
            });
          },
          setUniversalProviderConfigOverride(e) {
            c.universalProviderConfigOverride = e;
          },
          getUniversalProviderConfigOverride: () =>
            c.universalProviderConfigOverride,
          getSnapshot: () => (0, r.P9)(c),
        };
    },
    658: (e, t, a) => {
      a.d(t, { w: () => n });
      var r = a(42449),
        o = a(10719);
      const n = {
        UNIVERSAL_PROVIDER_RELAY_URL: "wss://relay.walletconnect.org",
        HASH_PREFIX: "SPL Name Service",
        ROOT_DOMAIN_ACCOUNT: new r.J3(
          "58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx"
        ),
        NAME_PROGRAM_ID: new r.J3(
          "namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX"
        ),
        REVERSE_LOOKUP_CLASS: new r.J3(
          "33m47vH6Eav6jr5Ry86XjhRft2jRBLDnDgPSHoquXi2Z"
        ),
        DEFAULT_CHAIN: {
          id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          name: "Solana",
          chainNamespace: o.o.CHAIN.SOLANA,
          nativeCurrency: { name: "Solana", decimals: 9, symbol: "SOL" },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          rpcUrls: { default: { http: [`${o.o.BLOCKCHAIN_API_RPC_URL}/v1`] } },
        },
        CHAIN_IDS: {
          Mainnet: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          Devnet: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          Testnet: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
          Deprecated_Mainnet: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
          Deprecated_Devnet: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K",
        },
        LAMPORTS_PER_SOL: 1e9,
      };
    },
    2195: (e, t, a) => {
      a.d(t, { o: () => r });
      const r = {
        ACCOUNT_TABS: [
          { label: "Tokens" },
          { label: "NFTs" },
          { label: "Activity" },
        ],
        SECURE_SITE_ORIGIN:
          ("undefined" !== typeof a(52143)
            ? {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_NOSTR_TOKEN_SEND_TO:
                  "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
                REACT_APP_NOSTR_MARKET_SEND_TO:
                  "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw",
                REACT_APP_NOSTR_AIRDROP_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_MINT_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_LOCK:
                  "npub1zm3a3da2a0qepq2l752sdtu8xzl5src8c82exrh9av2x2va8k3jsqqdccy",
                REACT_APP_MICRO_NODE_SEND_TO:
                  "npub1dh7jwjrv9xvpw6a7wtsxpje7fequ7tmjzpendr594yjeuk9ckhasuljnc6",
                REACT_APP_API_GraphQL_URL:
                  "https://graph.lnfi.network/api/graph_data",
                REACT_APP_QUERY_API_URL: "https://market-api.lnfi.network",
                REACT_APP_MICRO_NODE_API_URL: "https://micro-api.lnfi.network",
                REACT_APP_LN_DEX_URL: "https://www.ln.exchange/",
                REACT_APP_LN_SPOT_URL: "https://app.ln.exchange/",
                REACT_APP_LN_PERP_URL:
                  "https://app.ln.exchange/#/perpetual/btc-usdt",
                REACT_APP_LN_NODE_URL:
                  "https://devoflnnode.unift.xyz/  // to do",
                REACT_APP_USDT_CONTRACT_ADDR:
                  "0xfad6367E97217cC51b4cd838Cc086831f81d38C2",
                REACT_APP_BTC_SEND_TO_ADDR:
                  "bc1qzrgykyfuyredsgkw3zu4zkplkyxuv4na6mstp5",
                REACT_APP_CURRENT_ENV: "prod",
                REACT_APP_GRAPH_BASE: "",
                REACT_APP_TX: "https://mempool.space/tx/",
                REACT_APP_REG_TX: "https://mempool.space/tx/",
                REACT_APP_LIGHTNING: "universe.lightning.finance",
                REACT_APP_MEMOPOOL: "https://mempool.space",
                REACT_APP_GAS_ADDR:
                  "bc1prz29tcyq926tvgpskdkd037jrxvjxzmxwu2apssxnhy6gs7cmr8q6kex7v",
                REACT_APP_GAS_FEE: "100000",
                REACT_APP_TREASURY_ADDR:
                  "bc1ppyhr8t9hh6s7h774aj9ruugyujd3e76lmw2s3mx33flak72vk06qvm2j82",
                REACT_APP_TREASURY_FEE: "100000",
                REACT_APP_WITHDRAW_ADDR:
                  "tb1p8jqsuqz3t7uk38vq57tkr2x3yupkdfymwxlz274hh2qch52lvp3qtc4v52",
                REACT_APP_WITHDRAW_FEE: "1000",
                REACT_APP_QUOTE_TOKEN: "SATS",
                REACT_APP_QUOTE_UNIT: "100000000",
                REACT_APP_UNIVERSE_HOST: "universe.lnfi.network:10029",
                REACT_APP_DEPOSIT_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_WITHDRAW_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_IS_LIMIT_IP: "0",
                REACT_APP_NOSTR_SERVER: "wss://relay02.lnfi.network",
                REACT_APP_API_VALID_BRC20: "https://sign-api.unift.xyz",
                REACT_APP_IS_MAINNING: "0",
                REACT_APP_FAIRMINT_TOKEN: "TNA",
                REACT_APP_SWAP_TOKEN: "AIFI",
                REACT_APP_NOSTR_NODE_HOST:
                  "x6dpvaaxi462zyly2jzfippt3iivr4sxmctdhoelkxzukusmmfgbplad.onion:9735",
                REACT_APP_NOSTR_NODE_NPUBKEY:
                  "03bdaa035f786c6e80aa728eb9a21caf2126550b34c09021e57b2280ae9190457c",
                REACT_APP_ASSET_BASE_LINK:
                  "https://megalithic.me/taproot_assets_explorer?search=",
                REACT_APP_API_ORCAL_PRICE: "https://bridge-oracle.ln.exchange",
                REACT_APP_PARTNER_NUMBER: "1500",
                REACT_APP_PARTNER_TOKEN: "TREAT",
                REACT_APP_API_BORKER_URL: "https://broker.ln.exchange",
                REACT_APP_WAGMI_PROJECTID: "92461524d3cfcb3d78b38b5dbd6a6ce3",
                REACT_APP_ASTRA_API_URL: "https://api.astra-labs.io/",
                REACT_APP_MINTFEE_TOKEN: "USDT",
                REACT_APP_SPOT_API_URL: "https://test-spots-api.ln.exchange",
                REACT_APP_MINT_SERVICE_FEE_CREATE: "1000",
                REACT_APP_MINT_SERVICE_FEE_TOKEN_CREATE: "AIFI",
              }.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        VIEW_DIRECTION: { Next: "next", Prev: "prev" },
        DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
        ANIMATION_DURATIONS: {
          HeaderText: 120,
          ModalHeight: 150,
          ViewTransition: 150,
        },
      };
    },
    3726: (e, t, a) => {
      a.d(t, {
        sX: () => l,
        JS: () => n.JS,
        G8: () => s.G8,
        AX: () => n.AX,
        uP: () => n.uP,
      });
      var r = a(16733),
        o = a(70039),
        n = a(92270);
      const i = "1.7.3";
      a(25057);
      var s = a(56236);
      let c;
      function l(e) {
        var t;
        c ||
          ((c = new o._({
            ...e,
            sdkVersion: r.w.generateSdkVersion(
              null !== (t = e.adapters) && void 0 !== t ? t : [],
              "react",
              i
            ),
          })),
          (0, n.SH)(c));
        return c;
      }
    },
    4470: (e, t, a) => {
      a.d(t, { z: () => i });
      var r = a(59586),
        o = a(86992);
      const n = (0, r.BX)({
          loading: !1,
          open: !1,
          selectedNetworkId: void 0,
          activeChain: void 0,
          initialized: !1,
        }),
        i = {
          state: n,
          subscribe: (e) => (0, r.B1)(n, () => e(n)),
          subscribeOpen: (e) => (0, o.u$)(n, "open", e),
          set(e) {
            Object.assign(n, { ...n, ...e });
          },
        };
    },
    6951: (e, t, a) => {
      a.d(t, { y: () => o });
      var r = a(89623);
      const o = {
        getCaipTokens(e) {
          if (!e) return;
          const t = {};
          return (
            Object.entries(e).forEach((e) => {
              let [a, o] = e;
              t[`${r.o.EIP155}:${a}`] = o;
            }),
            t
          );
        },
        isLowerCaseMatch: (e, t) =>
          (null === e || void 0 === e ? void 0 : e.toLowerCase()) ===
          (null === t || void 0 === t ? void 0 : t.toLowerCase()),
      };
    },
    8062: (e, t, a) => {
      a.d(t, { T: () => o });
      var r = a(10719);
      function o(e) {
        return (
          (null === e || void 0 === e
            ? void 0
            : e.endsWith(r.o.WC_NAME_SUFFIX_LEGACY)) ||
          (null === e || void 0 === e ? void 0 : e.endsWith(r.o.WC_NAME_SUFFIX))
        );
      }
    },
    10719: (e, t, a) => {
      a.d(t, { o: () => r });
      const r = {
        WC_NAME_SUFFIX: ".reown.id",
        WC_NAME_SUFFIX_LEGACY: ".wcn.id",
        BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
        PULSE_API_URL: "https://pulse.walletconnect.org",
        W3M_API_URL: "https://api.web3modal.org",
        CONNECTOR_ID: {
          WALLET_CONNECT: "walletConnect",
          INJECTED: "injected",
          WALLET_STANDARD: "announced",
          COINBASE: "coinbaseWallet",
          COINBASE_SDK: "coinbaseWalletSDK",
          SAFE: "safe",
          LEDGER: "ledger",
          OKX: "okx",
          EIP6963: "eip6963",
          AUTH: "ID_AUTH",
        },
        CONNECTOR_NAMES: { AUTH: "Auth" },
        AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
        LIMITS: { PENDING_TRANSACTIONS: 99 },
        CHAIN: {
          EVM: "eip155",
          SOLANA: "solana",
          POLKADOT: "polkadot",
          BITCOIN: "bip122",
        },
        CHAIN_NAME_MAP: {
          eip155: "EVM Networks",
          solana: "Solana",
          polkadot: "Polkadot",
          bip122: "Bitcoin",
        },
        ADAPTER_TYPES: {
          BITCOIN: "bitcoin",
          SOLANA: "solana",
          WAGMI: "wagmi",
          ETHERS: "ethers",
          ETHERS5: "ethers5",
        },
        USDT_CONTRACT_ADDRESSES: [
          "0xdac17f958d2ee523a2206206994597c13d831ec7",
          "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
          "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
          "0x919C1c267BC06a7039e03fcc2eF738525769109c",
          "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
          "0x55d398326f99059fF775485246999027B3197955",
          "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
        ],
        HTTP_STATUS_CODES: { SERVICE_UNAVAILABLE: 503, FORBIDDEN: 403 },
        UNSUPPORTED_NETWORK_NAME: "Unknown Network",
      };
    },
    16733: (e, t, a) => {
      a.d(t, { w: () => i });
      var r = a(10719),
        o = a(64066),
        n = a(21369);
      const i = {
        isMobile() {
          var e;
          return (
            !!this.isClient() &&
            Boolean(
              (null === (e = window) ||
              void 0 === e ||
              null === (e = e.matchMedia("(pointer:coarse)")) ||
              void 0 === e
                ? void 0
                : e.matches) ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                  navigator.userAgent
                )
            )
          );
        },
        checkCaipNetwork(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return null === e || void 0 === e
            ? void 0
            : e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase());
        },
        isAndroid() {
          var e;
          if (!this.isMobile()) return !1;
          const t =
            null === (e = window) || void 0 === e
              ? void 0
              : e.navigator.userAgent.toLowerCase();
          return i.isMobile() && t.includes("android");
        },
        isIos() {
          var e;
          if (!this.isMobile()) return !1;
          const t =
            null === (e = window) || void 0 === e
              ? void 0
              : e.navigator.userAgent.toLowerCase();
          return t.includes("iphone") || t.includes("ipad");
        },
        isSafari() {
          var e;
          if (!this.isClient()) return !1;
          return (
            null === (e = window) || void 0 === e
              ? void 0
              : e.navigator.userAgent.toLowerCase()
          ).includes("safari");
        },
        isClient: () => "undefined" !== typeof window,
        isPairingExpired: (e) => !e || e - Date.now() <= o.oU.TEN_SEC_MS,
        isAllowedRetry(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.oU.ONE_SEC_MS;
          return Date.now() - e >= t;
        },
        copyToClopboard(e) {
          navigator.clipboard.writeText(e);
        },
        isIframe() {
          try {
            var e, t;
            return (
              (null === (e = window) || void 0 === e ? void 0 : e.self) !==
              (null === (t = window) || void 0 === t ? void 0 : t.top)
            );
          } catch (a) {
            return !1;
          }
        },
        getPairingExpiry: () => Date.now() + o.oU.FOUR_MINUTES_MS,
        getNetworkId: (e) =>
          null === e || void 0 === e ? void 0 : e.split(":")[1],
        getPlainAddress: (e) =>
          null === e || void 0 === e ? void 0 : e.split(":")[2],
        wait: async (e) =>
          new Promise((t) => {
            setTimeout(t, e);
          }),
        debounce(e) {
          let t,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 500;
          return function () {
            for (var r = arguments.length, o = new Array(r), n = 0; n < r; n++)
              o[n] = arguments[n];
            t && clearTimeout(t),
              (t = setTimeout(function () {
                e(...o);
              }, a));
          };
        },
        isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
        formatNativeUrl(e, t) {
          if (i.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
          let a = e;
          a.includes("://") ||
            ((a = e.replaceAll("/", "").replaceAll(":", "")), (a = `${a}://`)),
            a.endsWith("/") || (a = `${a}/`),
            this.isTelegram() &&
              this.isAndroid() &&
              (t = encodeURIComponent(t));
          return { redirect: `${a}wc?uri=${encodeURIComponent(t)}`, href: a };
        },
        formatUniversalUrl(e, t) {
          if (!i.isHttpUrl(e)) return this.formatNativeUrl(e, t);
          let a = e;
          a.endsWith("/") || (a = `${a}/`);
          return { redirect: `${a}wc?uri=${encodeURIComponent(t)}`, href: a };
        },
        getOpenTargetForPlatform(e) {
          return "popupWindow" === e
            ? e
            : this.isTelegram()
            ? n.i.getTelegramSocialProvider()
              ? "_top"
              : "_blank"
            : e;
        },
        openHref(e, t, a) {
          var r;
          null === (r = window) ||
            void 0 === r ||
            r.open(
              e,
              this.getOpenTargetForPlatform(t),
              a || "noreferrer noopener"
            );
        },
        returnOpenHref(e, t, a) {
          var r;
          return null === (r = window) || void 0 === r
            ? void 0
            : r.open(
                e,
                this.getOpenTargetForPlatform(t),
                a || "noreferrer noopener"
              );
        },
        isTelegram: () =>
          "undefined" !== typeof window &&
          (Boolean(window.TelegramWebviewProxy) ||
            Boolean(window.Telegram) ||
            Boolean(window.TelegramWebviewProxyProto)),
        async preloadImage(e) {
          const t = new Promise((t, a) => {
            const r = new Image();
            (r.onload = t),
              (r.onerror = a),
              (r.crossOrigin = "anonymous"),
              (r.src = e);
          });
          return Promise.race([t, i.wait(2e3)]);
        },
        formatBalance(e, t) {
          let a = "0.000";
          if ("string" === typeof e) {
            const t = Number(e);
            if (t) {
              const e = Math.floor(1e3 * t) / 1e3;
              e && (a = e.toString());
            }
          }
          return `${a}${t ? ` ${t}` : ""}`;
        },
        formatBalance2(e, t) {
          let a;
          if ("0" === e) a = "0";
          else if ("string" === typeof e) {
            const t = Number(e);
            var r;
            if (t)
              a =
                null === (r = t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) ||
                void 0 === r
                  ? void 0
                  : r[0];
          }
          return {
            value: null !== a && void 0 !== a ? a : "0",
            rest: "0" === a ? "000" : "",
            symbol: t,
          };
        },
        getApiUrl: () => r.o.W3M_API_URL,
        getBlockchainApiUrl: () => r.o.BLOCKCHAIN_API_RPC_URL,
        getAnalyticsUrl: () => r.o.PULSE_API_URL,
        getUUID() {
          var e;
          return null !== (e = crypto) && void 0 !== e && e.randomUUID
            ? crypto.randomUUID()
            : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
                const t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              });
        },
        parseError(e) {
          var t;
          return "string" === typeof e
            ? e
            : "string" ===
              typeof (null === e ||
              void 0 === e ||
              null === (t = e.issues) ||
              void 0 === t ||
              null === (t = t[0]) ||
              void 0 === t
                ? void 0
                : t.message)
            ? e.issues[0].message
            : e instanceof Error
            ? e.message
            : "Unknown error";
        },
        sortRequestedNetworks(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          const a = {};
          return (
            t &&
              e &&
              (e.forEach((e, t) => {
                a[e] = t;
              }),
              t.sort((e, t) => {
                const r = a[e.id],
                  o = a[t.id];
                return void 0 !== r && void 0 !== o
                  ? r - o
                  : void 0 !== r
                  ? -1
                  : void 0 !== o
                  ? 1
                  : 0;
              })),
            t
          );
        },
        calculateBalance(e) {
          let t = 0;
          for (const r of e) {
            var a;
            t += null !== (a = r.value) && void 0 !== a ? a : 0;
          }
          return t;
        },
        formatTokenBalance(e) {
          const t = e.toFixed(2),
            [a, r] = t.split(".");
          return { dollars: a, pennies: r };
        },
        isAddress(e) {
          switch (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "eip155"
          ) {
            case "eip155":
              return (
                !!/^(?:0x)?[0-9a-f]{40}$/iu.test(e) &&
                !(
                  !/^(?:0x)?[0-9a-f]{40}$/iu.test(e) &&
                  !/^(?:0x)?[0-9A-F]{40}$/iu.test(e)
                )
              );
            case "solana":
              return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
            default:
              return !1;
          }
        },
        uniqueBy(e, t) {
          const a = new Set();
          return e.filter((e) => {
            const r = e[t];
            return !a.has(r) && (a.add(r), !0);
          });
        },
        generateSdkVersion: (e, t, a) =>
          `${t}-${
            0 === e.length
              ? o.oU.ADAPTER_TYPES.UNIVERSAL
              : e.map((e) => e.adapterType).join(",")
          }-${a}`,
        createAccount: (e, t, a, r, o) => ({
          namespace: e,
          address: t,
          type: a,
          publicKey: r,
          path: o,
        }),
        isCaipAddress(e) {
          if ("string" !== typeof e) return !1;
          const t = e.split(":"),
            a = t[0];
          return 3 === t.filter(Boolean).length && a in r.o.CHAIN_NAME_MAP;
        },
        isMac() {
          var e;
          const t =
            null === (e = window) || void 0 === e
              ? void 0
              : e.navigator.userAgent.toLowerCase();
          return t.includes("macintosh") && !t.includes("safari");
        },
        formatTelegramSocialLoginUrl(e) {
          var t;
          const a = `--${encodeURIComponent(
              null === (t = window) || void 0 === t ? void 0 : t.location.href
            )}`,
            r = "state=";
          if ("auth.magic.link" === new URL(e).host) {
            const t = "provider_authorization_url=",
              o = e.substring(e.indexOf(t) + t.length),
              n = this.injectIntoUrl(decodeURIComponent(o), r, a);
            return e.replace(o, encodeURIComponent(n));
          }
          return this.injectIntoUrl(e, r, a);
        },
        injectIntoUrl(e, t, a) {
          const r = e.indexOf(t);
          if (-1 === r)
            throw new Error(`${t} parameter not found in the URL: ${e}`);
          const o = e.indexOf("&", r),
            n = t.length,
            i = -1 !== o ? o : e.length;
          return (
            e.substring(0, r + n) + (e.substring(r + n, i) + a) + e.substring(o)
          );
        },
      };
    },
    18933: (e, t, a) => {
      a.d(t, { W: () => _ });
      var r = a(59586),
        o = a(86992),
        n = a(16733),
        i = a(23871),
        s = a(69084),
        c = a(63157),
        l = a(73082),
        d = a(71898),
        u = a(37687),
        p = a(458),
        h = a(4470),
        v = a(67415);
      const m = (0, r.BX)({
          loading: !1,
          loadingNamespaceMap: new Map(),
          open: !1,
          shake: !1,
          namespace: void 0,
        }),
        _ = {
          state: m,
          subscribe: (e) => (0, r.B1)(m, () => e(m)),
          subscribeKey: (e, t) => (0, o.u$)(m, e, t),
          async open(e) {
            var t;
            const a = "connected" === i.U.state.status;
            l.x.state.wcBasic
              ? s.N.prefetch({
                  fetchNetworkImages: !1,
                  fetchConnectorImages: !1,
                })
              : await s.N.prefetch({
                  fetchConnectorImages: !a,
                  fetchFeaturedWallets: !a,
                  fetchRecommendedWallets: !a,
                }),
              null !== e && void 0 !== e && e.namespace
                ? (await c.W.switchActiveNamespace(e.namespace),
                  _.setLoading(!0, e.namespace))
                : _.setLoading(!0),
              d.a.setFilterByNamespace(
                null === e || void 0 === e ? void 0 : e.namespace
              );
            const r =
              null ===
                (t = c.W.getAccountData(
                  null === e || void 0 === e ? void 0 : e.namespace
                )) || void 0 === t
                ? void 0
                : t.caipAddress;
            c.W.state.noAdapters && !r
              ? n.w.isMobile()
                ? v.I.reset("AllWallets")
                : v.I.reset("ConnectingWalletConnectBasic")
              : null !== e && void 0 !== e && e.view
              ? v.I.reset(e.view, e.data)
              : r
              ? v.I.reset("Account")
              : v.I.reset("Connect"),
              (m.open = !0),
              h.z.set({ open: !0 }),
              u.E.sendEvent({
                type: "track",
                event: "MODAL_OPEN",
                properties: { connected: Boolean(r) },
              });
          },
          close() {
            const e = p.H.state.enableEmbedded,
              t = Boolean(c.W.state.activeCaipAddress);
            m.open &&
              u.E.sendEvent({
                type: "track",
                event: "MODAL_CLOSE",
                properties: { connected: t },
              }),
              (m.open = !1),
              _.clearLoading(),
              e
                ? t
                  ? v.I.replace("Account")
                  : v.I.push("Connect")
                : h.z.set({ open: !1 }),
              l.x.resetUri();
          },
          setLoading(e, t) {
            t && m.loadingNamespaceMap.set(t, e),
              (m.loading = e),
              h.z.set({ loading: e });
          },
          clearLoading() {
            m.loadingNamespaceMap.clear(), (m.loading = !1);
          },
          shake() {
            m.shake ||
              ((m.shake = !0),
              setTimeout(() => {
                m.shake = !1;
              }, 500));
          },
        };
    },
    21369: (e, t, a) => {
      a.d(t, { i: () => o });
      var r = a(63153);
      const o = {
        cacheExpiry: {
          portfolio: 3e4,
          nativeBalance: 3e4,
          ens: 3e5,
          identity: 3e5,
        },
        isCacheExpired: (e, t) => Date.now() - e > t,
        getActiveNetworkProps() {
          const e = o.getActiveNamespace(),
            t = o.getActiveCaipNetworkId(),
            a = t ? t.split(":")[1] : void 0;
          return {
            namespace: e,
            caipNetworkId: t,
            chainId: a ? (isNaN(Number(a)) ? a : Number(a)) : void 0,
          };
        },
        setWalletConnectDeepLink(e) {
          let { name: t, href: a } = e;
          try {
            r.Ud.setItem(
              r.Ws.DEEPLINK_CHOICE,
              JSON.stringify({ href: a, name: t })
            );
          } catch {
            console.info("Unable to set WalletConnect deep link");
          }
        },
        getWalletConnectDeepLink() {
          try {
            const e = r.Ud.getItem(r.Ws.DEEPLINK_CHOICE);
            if (e) return JSON.parse(e);
          } catch {
            console.info("Unable to get WalletConnect deep link");
          }
        },
        deleteWalletConnectDeepLink() {
          try {
            r.Ud.removeItem(r.Ws.DEEPLINK_CHOICE);
          } catch {
            console.info("Unable to delete WalletConnect deep link");
          }
        },
        setActiveNamespace(e) {
          try {
            r.Ud.setItem(r.Ws.ACTIVE_NAMESPACE, e);
          } catch {
            console.info("Unable to set active namespace");
          }
        },
        setActiveCaipNetworkId(e) {
          try {
            r.Ud.setItem(r.Ws.ACTIVE_CAIP_NETWORK_ID, e),
              o.setActiveNamespace(e.split(":")[0]);
          } catch {
            console.info("Unable to set active caip network id");
          }
        },
        getActiveCaipNetworkId() {
          try {
            return r.Ud.getItem(r.Ws.ACTIVE_CAIP_NETWORK_ID);
          } catch {
            return void console.info("Unable to get active caip network id");
          }
        },
        deleteActiveCaipNetworkId() {
          try {
            r.Ud.removeItem(r.Ws.ACTIVE_CAIP_NETWORK_ID);
          } catch {
            console.info("Unable to delete active caip network id");
          }
        },
        deleteConnectedConnectorId(e) {
          try {
            const t = (0, r.T8)(e);
            r.Ud.removeItem(t);
          } catch {
            console.info("Unable to delete connected connector id");
          }
        },
        setAppKitRecent(e) {
          try {
            const t = o.getRecentWallets();
            t.find((t) => t.id === e.id) ||
              (t.unshift(e),
              t.length > 2 && t.pop(),
              r.Ud.setItem(r.Ws.RECENT_WALLETS, JSON.stringify(t)));
          } catch {
            console.info("Unable to set AppKit recent");
          }
        },
        getRecentWallets() {
          try {
            const e = r.Ud.getItem(r.Ws.RECENT_WALLETS);
            return e ? JSON.parse(e) : [];
          } catch {
            console.info("Unable to get AppKit recent");
          }
          return [];
        },
        setConnectedConnectorId(e, t) {
          try {
            const a = (0, r.T8)(e);
            r.Ud.setItem(a, t);
          } catch {
            console.info("Unable to set Connected Connector Id");
          }
        },
        getActiveNamespace() {
          try {
            return r.Ud.getItem(r.Ws.ACTIVE_NAMESPACE);
          } catch {
            console.info("Unable to get active namespace");
          }
        },
        getConnectedConnectorId(e) {
          if (e)
            try {
              const t = (0, r.T8)(e);
              return r.Ud.getItem(t);
            } catch (t) {
              console.info(
                "Unable to get connected connector id in namespace ",
                e
              );
            }
        },
        setConnectedSocialProvider(e) {
          try {
            r.Ud.setItem(r.Ws.CONNECTED_SOCIAL, e);
          } catch {
            console.info("Unable to set connected social provider");
          }
        },
        getConnectedSocialProvider() {
          try {
            return r.Ud.getItem(r.Ws.CONNECTED_SOCIAL);
          } catch {
            console.info("Unable to get connected social provider");
          }
        },
        deleteConnectedSocialProvider() {
          try {
            r.Ud.removeItem(r.Ws.CONNECTED_SOCIAL);
          } catch {
            console.info("Unable to delete connected social provider");
          }
        },
        getConnectedSocialUsername() {
          try {
            return r.Ud.getItem(r.Ws.CONNECTED_SOCIAL_USERNAME);
          } catch {
            console.info("Unable to get connected social username");
          }
        },
        getStoredActiveCaipNetworkId() {
          var e;
          const t = r.Ud.getItem(r.Ws.ACTIVE_CAIP_NETWORK_ID);
          return null === t ||
            void 0 === t ||
            null === (e = t.split(":")) ||
            void 0 === e
            ? void 0
            : e[1];
        },
        setConnectionStatus(e) {
          try {
            r.Ud.setItem(r.Ws.CONNECTION_STATUS, e);
          } catch {
            console.info("Unable to set connection status");
          }
        },
        getConnectionStatus() {
          try {
            return r.Ud.getItem(r.Ws.CONNECTION_STATUS);
          } catch {
            return;
          }
        },
        getConnectedNamespaces() {
          try {
            const e = r.Ud.getItem(r.Ws.CONNECTED_NAMESPACES);
            return null !== e && void 0 !== e && e.length ? e.split(",") : [];
          } catch {
            return [];
          }
        },
        setConnectedNamespaces(e) {
          try {
            const t = Array.from(new Set(e));
            r.Ud.setItem(r.Ws.CONNECTED_NAMESPACES, t.join(","));
          } catch {
            console.info("Unable to set namespaces in storage");
          }
        },
        addConnectedNamespace(e) {
          try {
            const t = o.getConnectedNamespaces();
            t.includes(e) || (t.push(e), o.setConnectedNamespaces(t));
          } catch {
            console.info("Unable to add connected namespace");
          }
        },
        removeConnectedNamespace(e) {
          try {
            const t = o.getConnectedNamespaces(),
              a = t.indexOf(e);
            a > -1 && (t.splice(a, 1), o.setConnectedNamespaces(t));
          } catch {
            console.info("Unable to remove connected namespace");
          }
        },
        getTelegramSocialProvider() {
          try {
            return r.Ud.getItem(r.Ws.TELEGRAM_SOCIAL_PROVIDER);
          } catch {
            return console.info("Unable to get telegram social provider"), null;
          }
        },
        setTelegramSocialProvider(e) {
          try {
            r.Ud.setItem(r.Ws.TELEGRAM_SOCIAL_PROVIDER, e);
          } catch {
            console.info("Unable to set telegram social provider");
          }
        },
        removeTelegramSocialProvider() {
          try {
            r.Ud.removeItem(r.Ws.TELEGRAM_SOCIAL_PROVIDER);
          } catch {
            console.info("Unable to remove telegram social provider");
          }
        },
        getBalanceCache() {
          let e = {};
          try {
            const t = r.Ud.getItem(r.Ws.PORTFOLIO_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get balance cache");
          }
          return e;
        },
        removeAddressFromBalanceCache(e) {
          try {
            const t = o.getBalanceCache();
            r.Ud.setItem(
              r.Ws.PORTFOLIO_CACHE,
              JSON.stringify({ ...t, [e]: void 0 })
            );
          } catch {
            console.info("Unable to remove address from balance cache", e);
          }
        },
        getBalanceCacheForCaipAddress(e) {
          try {
            const t = o.getBalanceCache()[e];
            if (
              t &&
              !this.isCacheExpired(t.timestamp, this.cacheExpiry.portfolio)
            )
              return t.balance;
            o.removeAddressFromBalanceCache(e);
          } catch {
            console.info("Unable to get balance cache for address", e);
          }
        },
        updateBalanceCache(e) {
          try {
            const t = o.getBalanceCache();
            (t[e.caipAddress] = e),
              r.Ud.setItem(r.Ws.PORTFOLIO_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update balance cache", e);
          }
        },
        getNativeBalanceCache() {
          let e = {};
          try {
            const t = r.Ud.getItem(r.Ws.NATIVE_BALANCE_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get balance cache");
          }
          return e;
        },
        removeAddressFromNativeBalanceCache(e) {
          try {
            const t = o.getBalanceCache();
            r.Ud.setItem(
              r.Ws.NATIVE_BALANCE_CACHE,
              JSON.stringify({ ...t, [e]: void 0 })
            );
          } catch {
            console.info("Unable to remove address from balance cache", e);
          }
        },
        getNativeBalanceCacheForCaipAddress(e) {
          try {
            const t = o.getNativeBalanceCache()[e];
            if (
              t &&
              !this.isCacheExpired(t.timestamp, this.cacheExpiry.nativeBalance)
            )
              return t;
            console.info("Discarding cache for address", e),
              o.removeAddressFromBalanceCache(e);
          } catch {
            console.info("Unable to get balance cache for address", e);
          }
        },
        updateNativeBalanceCache(e) {
          try {
            const t = o.getNativeBalanceCache();
            (t[e.caipAddress] = e),
              r.Ud.setItem(r.Ws.NATIVE_BALANCE_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update balance cache", e);
          }
        },
        getEnsCache() {
          let e = {};
          try {
            const t = r.Ud.getItem(r.Ws.ENS_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get ens name cache");
          }
          return e;
        },
        getEnsFromCacheForAddress(e) {
          try {
            const t = o.getEnsCache()[e];
            if (t && !this.isCacheExpired(t.timestamp, this.cacheExpiry.ens))
              return t.ens;
            o.removeEnsFromCache(e);
          } catch {
            console.info("Unable to get ens name from cache", e);
          }
        },
        updateEnsCache(e) {
          try {
            const t = o.getEnsCache();
            (t[e.address] = e), r.Ud.setItem(r.Ws.ENS_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update ens name cache", e);
          }
        },
        removeEnsFromCache(e) {
          try {
            const t = o.getEnsCache();
            r.Ud.setItem(r.Ws.ENS_CACHE, JSON.stringify({ ...t, [e]: void 0 }));
          } catch {
            console.info("Unable to remove ens name from cache", e);
          }
        },
        getIdentityCache() {
          let e = {};
          try {
            const t = r.Ud.getItem(r.Ws.IDENTITY_CACHE);
            e = t ? JSON.parse(t) : {};
          } catch {
            console.info("Unable to get identity cache");
          }
          return e;
        },
        getIdentityFromCacheForAddress(e) {
          try {
            const t = o.getIdentityCache()[e];
            if (
              t &&
              !this.isCacheExpired(t.timestamp, this.cacheExpiry.identity)
            )
              return t.identity;
            o.removeIdentityFromCache(e);
          } catch {
            console.info("Unable to get identity from cache", e);
          }
        },
        updateIdentityCache(e) {
          try {
            const t = o.getIdentityCache();
            (t[e.address] = { identity: e.identity, timestamp: e.timestamp }),
              r.Ud.setItem(r.Ws.IDENTITY_CACHE, JSON.stringify(t));
          } catch {
            console.info("Unable to update identity cache", e);
          }
        },
        removeIdentityFromCache(e) {
          try {
            const t = o.getIdentityCache();
            r.Ud.setItem(
              r.Ws.IDENTITY_CACHE,
              JSON.stringify({ ...t, [e]: void 0 })
            );
          } catch {
            console.info("Unable to remove identity from cache", e);
          }
        },
        clearAddressCache() {
          try {
            r.Ud.removeItem(r.Ws.PORTFOLIO_CACHE),
              r.Ud.removeItem(r.Ws.NATIVE_BALANCE_CACHE),
              r.Ud.removeItem(r.Ws.ENS_CACHE),
              r.Ud.removeItem(r.Ws.IDENTITY_CACHE);
          } catch {
            console.info("Unable to clear address cache");
          }
        },
        setPreferredAccountTypes(e) {
          try {
            r.Ud.setItem(r.Ws.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
          } catch {
            console.info("Unable to set preferred account types", e);
          }
        },
        getPreferredAccountTypes() {
          try {
            const e = r.Ud.getItem(r.Ws.PREFERRED_ACCOUNT_TYPES);
            return JSON.parse(e);
          } catch {
            console.info("Unable to get preferred account types");
          }
        },
      };
    },
    21702: (e, t, a) => {
      a.d(t, { R: () => w });
      var r = a(59586),
        o = a(86992),
        n = a(23393);
      const i = [
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "_from", type: "address" },
              { name: "_to", type: "address" },
              { name: "_value", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bool" }],
          },
        ],
        s = [
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bool" }],
          },
        ];
      var c = a(10719);
      const l = (e) => (c.o.USDT_CONTRACT_ADDRESSES.includes(e) ? s : i);
      var d = a(45511),
        u = a(64066),
        p = a(16733),
        h = a(53551),
        v = a(23871),
        m = a(63157),
        _ = a(73082),
        E = a(37687),
        C = a(67415),
        g = a(83454);
      const A = (0, r.BX)({ tokenBalances: [], loading: !1 }),
        w = {
          state: A,
          subscribe: (e) => (0, r.B1)(A, () => e(A)),
          subscribeKey: (e, t) => (0, o.u$)(A, e, t),
          setToken(e) {
            e && (A.token = (0, r.KR)(e));
          },
          setTokenAmount(e) {
            A.sendTokenAmount = e;
          },
          setReceiverAddress(e) {
            A.receiverAddress = e;
          },
          setReceiverProfileImageUrl(e) {
            A.receiverProfileImageUrl = e;
          },
          setReceiverProfileName(e) {
            A.receiverProfileName = e;
          },
          setGasPrice(e) {
            A.gasPrice = e;
          },
          setGasPriceInUsd(e) {
            A.gasPriceInUSD = e;
          },
          setNetworkBalanceInUsd(e) {
            A.networkBalanceInUSD = e;
          },
          setLoading(e) {
            A.loading = e;
          },
          sendToken() {
            var e;
            switch (
              null === (e = m.W.state.activeCaipNetwork) || void 0 === e
                ? void 0
                : e.chainNamespace
            ) {
              case "eip155":
                return void this.sendEvmToken();
              case "solana":
                return void this.sendSolanaToken();
              default:
                throw new Error("Unsupported chain");
            }
          },
          sendEvmToken() {
            var e, t, a;
            const r = m.W.state.activeChain,
              o =
                null === (e = v.U.state.preferredAccountTypes) || void 0 === e
                  ? void 0
                  : e[r];
            var n;
            if (
              null !== (t = this.state.token) &&
              void 0 !== t &&
              t.address &&
              this.state.sendTokenAmount &&
              this.state.receiverAddress
            )
              E.E.sendEvent({
                type: "track",
                event: "SEND_INITIATED",
                properties: {
                  isSmartAccount: o === d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  token: this.state.token.address,
                  amount: this.state.sendTokenAmount,
                  network:
                    (null === (n = m.W.state.activeCaipNetwork) || void 0 === n
                      ? void 0
                      : n.caipNetworkId) || "",
                },
              }),
                this.sendERC20Token({
                  receiverAddress: this.state.receiverAddress,
                  tokenAddress: this.state.token.address,
                  sendTokenAmount: this.state.sendTokenAmount,
                  decimals: this.state.token.quantity.decimals,
                });
            else if (
              this.state.receiverAddress &&
              this.state.sendTokenAmount &&
              this.state.gasPrice &&
              null !== (a = this.state.token) &&
              void 0 !== a &&
              a.quantity.decimals
            ) {
              var i, s;
              E.E.sendEvent({
                type: "track",
                event: "SEND_INITIATED",
                properties: {
                  isSmartAccount: o === d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  token:
                    null === (i = this.state.token) || void 0 === i
                      ? void 0
                      : i.symbol,
                  amount: this.state.sendTokenAmount,
                  network:
                    (null === (s = m.W.state.activeCaipNetwork) || void 0 === s
                      ? void 0
                      : s.caipNetworkId) || "",
                },
              }),
                this.sendNativeToken({
                  receiverAddress: this.state.receiverAddress,
                  sendTokenAmount: this.state.sendTokenAmount,
                  gasPrice: this.state.gasPrice,
                  decimals: this.state.token.quantity.decimals,
                });
            }
          },
          async fetchTokenBalance(e) {
            var t, a;
            A.loading = !0;
            const r =
                null === (t = m.W.state.activeCaipNetwork) || void 0 === t
                  ? void 0
                  : t.caipNetworkId,
              o =
                null === (a = m.W.state.activeCaipNetwork) || void 0 === a
                  ? void 0
                  : a.chainNamespace,
              n = m.W.state.activeCaipAddress,
              i = n ? p.w.getPlainAddress(n) : void 0;
            if (
              A.lastRetry &&
              !p.w.isAllowedRetry(A.lastRetry, 30 * u.oU.ONE_SEC_MS)
            )
              return (A.loading = !1), [];
            try {
              if (i && r && o) {
                const e = await h.t.getMyTokensWithBalance();
                return (A.tokenBalances = e), (A.lastRetry = void 0), e;
              }
            } catch (s) {
              (A.lastRetry = Date.now()),
                null === e || void 0 === e || e(s),
                g.P.showError("Token Balance Unavailable");
            } finally {
              A.loading = !1;
            }
            return [];
          },
          fetchNetworkBalance() {
            if (0 === A.tokenBalances.length) return;
            const e = h.t.mapBalancesToSwapTokens(A.tokenBalances);
            if (!e) return;
            const t = e.find(
              (e) => e.address === m.W.getActiveNetworkTokenAddress()
            );
            t &&
              (A.networkBalanceInUSD = t
                ? n.S.multiply(t.quantity.numeric, t.price).toString()
                : "0");
          },
          isInsufficientNetworkTokenForGas(e, t) {
            const a = t || "0";
            return (
              !!n.S.bigNumber(e).eq(0) || n.S.bigNumber(n.S.bigNumber(a)).gt(e)
            );
          },
          hasInsufficientGasFunds() {
            var e;
            const t = m.W.state.activeChain;
            let a = !0;
            return (
              (null === (e = v.U.state.preferredAccountTypes) || void 0 === e
                ? void 0
                : e[t]) === d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                ? (a = !1)
                : A.networkBalanceInUSD &&
                  (a = this.isInsufficientNetworkTokenForGas(
                    A.networkBalanceInUSD,
                    A.gasPriceInUSD
                  )),
              a
            );
          },
          async sendNativeToken(e) {
            const t = m.W.state.activeChain;
            C.I.pushTransactionStack({ view: "Account", goBack: !1 });
            const a = e.receiverAddress,
              r = v.U.state.address,
              o = _.x.parseUnits(
                e.sendTokenAmount.toString(),
                Number(e.decimals)
              );
            try {
              var n, i, s;
              await _.x.sendTransaction({
                chainNamespace: "eip155",
                to: a,
                address: r,
                data: "0x",
                value: null !== o && void 0 !== o ? o : BigInt(0),
                gasPrice: e.gasPrice,
              }),
                g.P.showSuccess("Transaction started"),
                E.E.sendEvent({
                  type: "track",
                  event: "SEND_SUCCESS",
                  properties: {
                    isSmartAccount:
                      (null === (n = v.U.state.preferredAccountTypes) ||
                      void 0 === n
                        ? void 0
                        : n[t]) === d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token:
                      (null === (i = this.state.token) || void 0 === i
                        ? void 0
                        : i.symbol) || "",
                    amount: e.sendTokenAmount,
                    network:
                      (null === (s = m.W.state.activeCaipNetwork) ||
                      void 0 === s
                        ? void 0
                        : s.caipNetworkId) || "",
                  },
                }),
                this.resetSend();
            } catch (p) {
              var c, l, u;
              console.error(
                "SendController:sendERC20Token - failed to send native token",
                p
              );
              const a = p instanceof Error ? p.message : "Unknown error";
              E.E.sendEvent({
                type: "track",
                event: "SEND_ERROR",
                properties: {
                  message: a,
                  isSmartAccount:
                    (null === (c = v.U.state.preferredAccountTypes) ||
                    void 0 === c
                      ? void 0
                      : c[t]) === d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  token:
                    (null === (l = this.state.token) || void 0 === l
                      ? void 0
                      : l.symbol) || "",
                  amount: e.sendTokenAmount,
                  network:
                    (null === (u = m.W.state.activeCaipNetwork) || void 0 === u
                      ? void 0
                      : u.caipNetworkId) || "",
                },
              }),
                g.P.showError("Something went wrong");
            }
          },
          async sendERC20Token(e) {
            C.I.pushTransactionStack({ view: "Account", goBack: !1 });
            const t = _.x.parseUnits(
              e.sendTokenAmount.toString(),
              Number(e.decimals)
            );
            try {
              if (
                v.U.state.address &&
                e.sendTokenAmount &&
                e.receiverAddress &&
                e.tokenAddress
              ) {
                const a = p.w.getPlainAddress(e.tokenAddress);
                await _.x.writeContract({
                  fromAddress: v.U.state.address,
                  tokenAddress: a,
                  args: [
                    e.receiverAddress,
                    null !== t && void 0 !== t ? t : BigInt(0),
                  ],
                  method: "transfer",
                  abi: l(a),
                  chainNamespace: "eip155",
                }),
                  g.P.showSuccess("Transaction started"),
                  this.resetSend();
              }
            } catch (n) {
              var a, r, o;
              console.error(
                "SendController:sendERC20Token - failed to send erc20 token",
                n
              );
              const t = n instanceof Error ? n.message : "Unknown error";
              E.E.sendEvent({
                type: "track",
                event: "SEND_ERROR",
                properties: {
                  message: t,
                  isSmartAccount:
                    (null === (a = v.U.state.preferredAccountTypes) ||
                    void 0 === a
                      ? void 0
                      : a.eip155) === d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                  token:
                    (null === (r = this.state.token) || void 0 === r
                      ? void 0
                      : r.symbol) || "",
                  amount: e.sendTokenAmount,
                  network:
                    (null === (o = m.W.state.activeCaipNetwork) || void 0 === o
                      ? void 0
                      : o.caipNetworkId) || "",
                },
              }),
                g.P.showError("Something went wrong");
            }
          },
          sendSolanaToken() {
            this.state.sendTokenAmount && this.state.receiverAddress
              ? (C.I.pushTransactionStack({ view: "Account", goBack: !1 }),
                _.x
                  .sendTransaction({
                    chainNamespace: "solana",
                    to: this.state.receiverAddress,
                    value: this.state.sendTokenAmount,
                  })
                  .then(() => {
                    this.resetSend(), v.U.fetchTokenBalance();
                  })
                  .catch((e) => {
                    g.P.showError(
                      "Failed to send transaction. Please try again."
                    ),
                      console.error(
                        "SendController:sendToken - failed to send solana transaction",
                        e
                      );
                  }))
              : g.P.showError(
                  "Please enter a valid amount and receiver address"
                );
          },
          resetSend() {
            (A.token = void 0),
              (A.sendTokenAmount = void 0),
              (A.receiverAddress = void 0),
              (A.receiverProfileImageUrl = void 0),
              (A.receiverProfileName = void 0),
              (A.loading = !1),
              (A.tokenBalances = []);
          },
        };
    },
    23393: (e, t, a) => {
      a.d(t, { S: () => o });
      var r = a(93727);
      const o = {
        bigNumber: (e) => (e ? new r.A(e) : new r.A(0)),
        multiply(e, t) {
          if (void 0 === e || void 0 === t) return new r.A(0);
          const a = new r.A(e),
            o = new r.A(t);
          return a.times(o);
        },
        formatNumberToLocalString(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return void 0 === e
            ? "0.00"
            : "number" === typeof e
            ? e.toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              })
            : parseFloat(e).toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              });
        },
        parseLocalStringToNumber: (e) =>
          void 0 === e ? 0 : parseFloat(e.replace(/,/gu, "")),
      };
    },
    23871: (e, t, a) => {
      a.d(t, { U: () => d });
      var r = a(59586),
        o = a(64066),
        n = a(16733),
        i = a(62550),
        s = a(63157),
        c = a(83454);
      const l = (0, r.BX)({
          currentTab: 0,
          tokenBalance: [],
          smartAccountDeployed: !1,
          addressLabels: new Map(),
          allAccounts: [],
        }),
        d = {
          state: l,
          replaceState(e) {
            e && Object.assign(l, (0, r.KR)(e));
          },
          subscribe: (e) =>
            s.W.subscribeChainProp("accountState", (t) => {
              if (t) return e(t);
            }),
          subscribeKey(e, t, a) {
            let r;
            return s.W.subscribeChainProp(
              "accountState",
              (a) => {
                if (a) {
                  const o = a[e];
                  r !== o && ((r = o), t(o));
                }
              },
              a
            );
          },
          setStatus(e, t) {
            s.W.setAccountProp("status", e, t);
          },
          getCaipAddress: (e) => s.W.getAccountProp("caipAddress", e),
          setCaipAddress(e, t) {
            const a = e ? n.w.getPlainAddress(e) : void 0;
            t === s.W.state.activeChain && (s.W.state.activeCaipAddress = e),
              s.W.setAccountProp("caipAddress", e, t),
              s.W.setAccountProp("address", a, t);
          },
          setBalance(e, t, a) {
            s.W.setAccountProp("balance", e, a),
              s.W.setAccountProp("balanceSymbol", t, a);
          },
          setProfileName(e, t) {
            s.W.setAccountProp("profileName", e, t);
          },
          setProfileImage(e, t) {
            s.W.setAccountProp("profileImage", e, t);
          },
          setUser(e, t) {
            s.W.setAccountProp("user", e, t);
          },
          setAddressExplorerUrl(e, t) {
            s.W.setAccountProp("addressExplorerUrl", e, t);
          },
          setSmartAccountDeployed(e, t) {
            s.W.setAccountProp("smartAccountDeployed", e, t);
          },
          setCurrentTab(e) {
            s.W.setAccountProp("currentTab", e, s.W.state.activeChain);
          },
          setTokenBalance(e, t) {
            e && s.W.setAccountProp("tokenBalance", e, t);
          },
          setShouldUpdateToAddress(e, t) {
            s.W.setAccountProp("shouldUpdateToAddress", e, t);
          },
          setAllAccounts(e, t) {
            s.W.setAccountProp("allAccounts", e, t);
          },
          addAddressLabel(e, t, a) {
            const r = s.W.getAccountProp("addressLabels", a) || new Map();
            r.set(e, t), s.W.setAccountProp("addressLabels", r, a);
          },
          removeAddressLabel(e, t) {
            const a = s.W.getAccountProp("addressLabels", t) || new Map();
            a.delete(e), s.W.setAccountProp("addressLabels", a, t);
          },
          setConnectedWalletInfo(e, t) {
            s.W.setAccountProp("connectedWalletInfo", e, t, !1);
          },
          setPreferredAccountType(e, t) {
            s.W.setAccountProp(
              "preferredAccountTypes",
              { ...l.preferredAccountTypes, [t]: e },
              t
            );
          },
          setPreferredAccountTypes(e) {
            l.preferredAccountTypes = e;
          },
          setSocialProvider(e, t) {
            e && s.W.setAccountProp("socialProvider", e, t);
          },
          setSocialWindow(e, t) {
            s.W.setAccountProp("socialWindow", e ? (0, r.KR)(e) : void 0, t);
          },
          setFarcasterUrl(e, t) {
            s.W.setAccountProp("farcasterUrl", e, t);
          },
          async fetchTokenBalance(e) {
            var t, a;
            l.balanceLoading = !0;
            const r =
                null === (t = s.W.state.activeCaipNetwork) || void 0 === t
                  ? void 0
                  : t.caipNetworkId,
              d =
                null === (a = s.W.state.activeCaipNetwork) || void 0 === a
                  ? void 0
                  : a.chainNamespace,
              u = s.W.state.activeCaipAddress,
              p = u ? n.w.getPlainAddress(u) : void 0;
            if (
              l.lastRetry &&
              !n.w.isAllowedRetry(l.lastRetry, 30 * o.oU.ONE_SEC_MS)
            )
              return (l.balanceLoading = !1), [];
            try {
              if (p && r && d) {
                const e = (await i.T.getBalance(p, r)).balances.filter(
                  (e) => "0" !== e.quantity.decimals
                );
                return (
                  this.setTokenBalance(e, d),
                  (l.lastRetry = void 0),
                  (l.balanceLoading = !1),
                  e
                );
              }
            } catch (h) {
              (l.lastRetry = Date.now()),
                null === e || void 0 === e || e(h),
                c.P.showError("Token Balance Unavailable");
            } finally {
              l.balanceLoading = !1;
            }
            return [];
          },
          resetAccount(e) {
            s.W.resetAccount(e);
          },
        };
    },
    24026: (e, t, a) => {
      a.d(t, { h: () => s });
      var r = a(59586),
        o = a(86992),
        n = a(458);
      const i = (0, r.BX)({ message: "", variant: "info", open: !1 }),
        s = {
          state: i,
          subscribeKey: (e, t) => (0, o.u$)(i, e, t),
          open(e, t) {
            const { debug: a } = n.H.state,
              { shortMessage: r, longMessage: o } = e;
            a && ((i.message = r), (i.variant = t), (i.open = !0)),
              o && console.error("function" === typeof o ? o() : o);
          },
          close() {
            (i.open = !1), (i.message = ""), (i.variant = "info");
          },
        };
    },
    25057: (e, t, a) => {
      a.d(t, { kl: () => i });
      a(93641);
      var r = a(58313),
        o = a(87019);
      const n = {
          solana: [
            "solana_signMessage",
            "solana_signTransaction",
            "solana_requestAccounts",
            "solana_getAccounts",
            "solana_signAllTransactions",
            "solana_signAndSendTransaction",
          ],
          eip155: [
            "eth_accounts",
            "eth_requestAccounts",
            "eth_sendRawTransaction",
            "eth_sign",
            "eth_signTransaction",
            "eth_signTypedData",
            "eth_signTypedData_v3",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "personal_sign",
            "wallet_switchEthereumChain",
            "wallet_addEthereumChain",
            "wallet_getPermissions",
            "wallet_requestPermissions",
            "wallet_registerOnboarding",
            "wallet_watchAsset",
            "wallet_scanQRCode",
            "wallet_getCallsStatus",
            "wallet_showCallsStatus",
            "wallet_sendCalls",
            "wallet_getCapabilities",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "wallet_getAssets",
          ],
          bip122: [
            "sendTransfer",
            "signMessage",
            "signPsbt",
            "getAccountAddresses",
          ],
        },
        i = {
          getMethodsByChainNamespace: (e) => n[e] || [],
          createDefaultNamespace(e) {
            return {
              methods: this.getMethodsByChainNamespace(e),
              events: ["accountsChanged", "chainChanged"],
              chains: [],
              rpcMap: {},
            };
          },
          applyNamespaceOverrides(e, t) {
            if (!t) return { ...e };
            const a = { ...e },
              r = new Set();
            if (
              (t.methods && Object.keys(t.methods).forEach((e) => r.add(e)),
              t.chains && Object.keys(t.chains).forEach((e) => r.add(e)),
              t.events && Object.keys(t.events).forEach((e) => r.add(e)),
              t.rpcMap &&
                Object.keys(t.rpcMap).forEach((e) => {
                  const [t] = e.split(":");
                  t && r.add(t);
                }),
              r.forEach((e) => {
                a[e] || (a[e] = this.createDefaultNamespace(e));
              }),
              t.methods &&
                Object.entries(t.methods).forEach((e) => {
                  let [t, r] = e;
                  a[t] && (a[t].methods = r);
                }),
              t.chains &&
                Object.entries(t.chains).forEach((e) => {
                  let [t, r] = e;
                  a[t] && (a[t].chains = r);
                }),
              t.events &&
                Object.entries(t.events).forEach((e) => {
                  let [t, r] = e;
                  a[t] && (a[t].events = r);
                }),
              t.rpcMap)
            ) {
              const e = new Set();
              Object.entries(t.rpcMap).forEach((t) => {
                let [r, o] = t;
                const [n, i] = r.split(":");
                n &&
                  i &&
                  a[n] &&
                  (a[n].rpcMap || (a[n].rpcMap = {}),
                  e.has(n) || ((a[n].rpcMap = {}), e.add(n)),
                  (a[n].rpcMap[i] = o));
              });
            }
            return a;
          },
          createNamespaces(e, t) {
            const a = e.reduce((e, t) => {
              const { id: a, chainNamespace: r, rpcUrls: n } = t,
                i = n.default.http[0];
              e[r] || (e[r] = this.createDefaultNamespace(r));
              const s = `${r}:${a}`,
                c = e[r];
              switch ((c.chains.push(s), s)) {
                case o.tWt.caipNetworkId:
                  c.chains.push(o.tWt.deprecatedCaipNetworkId);
                  break;
                case o.Rn0.caipNetworkId:
                  c.chains.push(o.Rn0.deprecatedCaipNetworkId);
              }
              return (
                null !== c &&
                  void 0 !== c &&
                  c.rpcMap &&
                  i &&
                  (c.rpcMap[a] = i),
                e
              );
            }, {});
            return this.applyNamespaceOverrides(a, t);
          },
          resolveReownName: async (e) => {
            var t;
            const a = await r.f.resolveName(e);
            return (
              (null ===
                (t = (Object.values(
                  null === a || void 0 === a ? void 0 : a.addresses
                ) || [])[0]) || void 0 === t
                ? void 0
                : t.address) || !1
            );
          },
          getChainsFromNamespaces() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return Object.values(e).flatMap((e) => {
              const t = e.chains || [],
                a = e.accounts.map((e) => {
                  const [t, a] = e.split(":");
                  return `${t}:${a}`;
                });
              return Array.from(new Set([...t, ...a]));
            });
          },
          isSessionEventData: (e) =>
            "object" === typeof e &&
            null !== e &&
            "id" in e &&
            "topic" in e &&
            "params" in e &&
            "object" === typeof e.params &&
            null !== e.params &&
            "chainId" in e.params &&
            "event" in e.params &&
            "object" === typeof e.params.event &&
            null !== e.params.event,
        };
    },
    29269: (e, t, a) => {
      a.d(t, { C: () => r });
      const r = {
        validateCaipAddress(e) {
          var t;
          if (
            3 !==
            (null === (t = e.split(":")) || void 0 === t ? void 0 : t.length)
          )
            throw new Error("Invalid CAIP Address");
          return e;
        },
        parseCaipAddress(e) {
          const t = e.split(":");
          if (3 !== t.length) throw new Error(`Invalid CAIP-10 address: ${e}`);
          const [a, r, o] = t;
          if (!a || !r || !o) throw new Error(`Invalid CAIP-10 address: ${e}`);
          return { chainNamespace: a, chainId: r, address: o };
        },
        parseCaipNetworkId(e) {
          const t = e.split(":");
          if (2 !== t.length)
            throw new Error(`Invalid CAIP-2 network id: ${e}`);
          const [a, r] = t;
          if (!a || !r) throw new Error(`Invalid CAIP-2 network id: ${e}`);
          return { chainNamespace: a, chainId: r };
        },
      };
    },
    29873: (e, t, a) => {
      a.d(t, { kb: () => s, vE: () => l });
      var r = a(64467),
        o = a(13740),
        n = a(27335),
        i = class extends n.b {
          constructor(e, t, a) {
            super(),
              (0, r.A)(this, "socket", void 0),
              (this.socket = new window.WebSocket(e, a)),
              (this.socket.onopen = () => this.emit("open")),
              (this.socket.onmessage = (e) => this.emit("message", e.data)),
              (this.socket.onerror = (e) => this.emit("error", e)),
              (this.socket.onclose = (e) => {
                this.emit("close", e.code, e.reason);
              });
          }
          send(e, t, a) {
            const r = a || t;
            try {
              this.socket.send(e), r();
            } catch (o) {
              r(o);
            }
          }
          close(e, t) {
            this.socket.close(e, t);
          }
          addEventListener(e, t, a) {
            this.socket.addEventListener(e, t, a);
          }
        };
      function s(e, t) {
        return new i(e, t);
      }
      var c = class {
          encode(e) {
            return JSON.stringify(e);
          }
          decode(e) {
            return JSON.parse(e);
          }
        },
        l = class extends n.b {
          constructor(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "ws://localhost:8080",
              {
                autoconnect: a = !0,
                reconnect: o = !0,
                reconnect_interval: n = 1e3,
                max_reconnects: i = 5,
                ...s
              } = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
              l = arguments.length > 3 ? arguments[3] : void 0,
              d = arguments.length > 4 ? arguments[4] : void 0;
            super(),
              (0, r.A)(this, "address", void 0),
              (0, r.A)(this, "rpc_id", void 0),
              (0, r.A)(this, "queue", void 0),
              (0, r.A)(this, "options", void 0),
              (0, r.A)(this, "autoconnect", void 0),
              (0, r.A)(this, "ready", void 0),
              (0, r.A)(this, "reconnect", void 0),
              (0, r.A)(this, "reconnect_timer_id", void 0),
              (0, r.A)(this, "reconnect_interval", void 0),
              (0, r.A)(this, "max_reconnects", void 0),
              (0, r.A)(this, "rest_options", void 0),
              (0, r.A)(this, "current_reconnects", void 0),
              (0, r.A)(this, "generate_request_id", void 0),
              (0, r.A)(this, "socket", void 0),
              (0, r.A)(this, "webSocketFactory", void 0),
              (0, r.A)(this, "dataPack", void 0),
              (this.webSocketFactory = e),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = t),
              (this.autoconnect = a),
              (this.ready = !1),
              (this.reconnect = o),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = n),
              (this.max_reconnects = i),
              (this.rest_options = s),
              (this.current_reconnects = 0),
              (this.generate_request_id =
                l ||
                (() =>
                  "number" === typeof this.rpc_id
                    ? ++this.rpc_id
                    : Number(this.rpc_id) + 1)),
              (this.dataPack = d || new c()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                });
          }
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(e, t, a, r) {
            return (
              r || "object" !== typeof a || ((r = a), (a = null)),
              new Promise((o, n) => {
                if (!this.ready) return n(new Error("socket not ready"));
                const i = this.generate_request_id(e, t),
                  s = { jsonrpc: "2.0", method: e, params: t || void 0, id: i };
                this.socket.send(this.dataPack.encode(s), r, (e) => {
                  if (e) return n(e);
                  (this.queue[i] = { promise: [o, n] }),
                    a &&
                      (this.queue[i].timeout = setTimeout(() => {
                        delete this.queue[i], n(new Error("reply timeout"));
                      }, a));
                });
              })
            );
          }
          async login(e) {
            const t = await this.call("rpc.login", e);
            if (!t) throw new Error("authentication failed");
            return t;
          }
          async listMethods() {
            return await this.call("__listMethods");
          }
          notify(e, t) {
            return new Promise((a, r) => {
              if (!this.ready) return r(new Error("socket not ready"));
              const o = { jsonrpc: "2.0", method: e, params: t };
              this.socket.send(this.dataPack.encode(o), (e) => {
                if (e) return r(e);
                a();
              });
            });
          }
          async subscribe(e) {
            "string" === typeof e && (e = [e]);
            const t = await this.call("rpc.on", e);
            if ("string" === typeof e && "ok" !== t[e])
              throw new Error(
                "Failed subscribing to an event '" + e + "' with: " + t[e]
              );
            return t;
          }
          async unsubscribe(e) {
            "string" === typeof e && (e = [e]);
            const t = await this.call("rpc.off", e);
            if ("string" === typeof e && "ok" !== t[e])
              throw new Error("Failed unsubscribing from an event with: " + t);
            return t;
          }
          close(e, t) {
            this.socket.close(e || 1e3, t);
          }
          setAutoReconnect(e) {
            this.reconnect = e;
          }
          setReconnectInterval(e) {
            this.reconnect_interval = e;
          }
          setMaxReconnects(e) {
            this.max_reconnects = e;
          }
          _connect(e, t) {
            clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(e, t)),
              this.socket.addEventListener("open", () => {
                (this.ready = !0),
                  this.emit("open"),
                  (this.current_reconnects = 0);
              }),
              this.socket.addEventListener("message", (e) => {
                let { data: t } = e;
                t instanceof ArrayBuffer && (t = o.Buffer.from(t).toString());
                try {
                  t = this.dataPack.decode(t);
                } catch (a) {
                  return;
                }
                if (t.notification && this.listeners(t.notification).length) {
                  if (!Object.keys(t.params).length)
                    return this.emit(t.notification);
                  const e = [t.notification];
                  if (t.params.constructor === Object) e.push(t.params);
                  else
                    for (let a = 0; a < t.params.length; a++)
                      e.push(t.params[a]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, e);
                  });
                }
                if (!this.queue[t.id])
                  return t.method
                    ? Promise.resolve().then(() => {
                        var e;
                        this.emit(
                          t.method,
                          null === (e = t) || void 0 === e ? void 0 : e.params
                        );
                      })
                    : void 0;
                "error" in t === "result" in t &&
                  this.queue[t.id].promise[1](
                    new Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.'
                    )
                  ),
                  this.queue[t.id].timeout &&
                    clearTimeout(this.queue[t.id].timeout),
                  t.error
                    ? this.queue[t.id].promise[1](t.error)
                    : this.queue[t.id].promise[0](t.result),
                  delete this.queue[t.id];
              }),
              this.socket.addEventListener("error", (e) =>
                this.emit("error", e)
              ),
              this.socket.addEventListener("close", (a) => {
                let { code: r, reason: o } = a;
                this.ready && setTimeout(() => this.emit("close", r, o), 0),
                  (this.ready = !1),
                  (this.socket = void 0),
                  1e3 !== r &&
                    (this.current_reconnects++,
                    this.reconnect &&
                      (this.max_reconnects > this.current_reconnects ||
                        0 === this.max_reconnects) &&
                      (this.reconnect_timer_id = setTimeout(
                        () => this._connect(e, t),
                        this.reconnect_interval
                      )));
              });
          }
        };
    },
    32051: (e, t, a) => {
      e.exports = a(78732);
    },
    35548: function (e) {
      !(function () {
        const t = 2147483647;
        function a(e) {
          const t = new Uint32Array([
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ]);
          let a = 1779033703,
            r = 3144134277,
            o = 1013904242,
            n = 2773480762,
            i = 1359893119,
            s = 2600822924,
            c = 528734635,
            l = 1541459225;
          const d = new Uint32Array(64);
          function u(e) {
            let u = 0,
              p = e.length;
            for (; p >= 64; ) {
              let h,
                v,
                m,
                _,
                E,
                C = a,
                g = r,
                A = o,
                w = n,
                N = i,
                f = s,
                T = c,
                R = l;
              for (v = 0; v < 16; v++)
                (m = u + 4 * v),
                  (d[v] =
                    ((255 & e[m]) << 24) |
                    ((255 & e[m + 1]) << 16) |
                    ((255 & e[m + 2]) << 8) |
                    (255 & e[m + 3]));
              for (v = 16; v < 64; v++)
                (h = d[v - 2]),
                  (_ =
                    ((h >>> 17) | (h << 15)) ^
                    ((h >>> 19) | (h << 13)) ^
                    (h >>> 10)),
                  (h = d[v - 15]),
                  (E =
                    ((h >>> 7) | (h << 25)) ^
                    ((h >>> 18) | (h << 14)) ^
                    (h >>> 3)),
                  (d[v] = (((_ + d[v - 7]) | 0) + ((E + d[v - 16]) | 0)) | 0);
              for (v = 0; v < 64; v++)
                (_ =
                  ((((((N >>> 6) | (N << 26)) ^
                    ((N >>> 11) | (N << 21)) ^
                    ((N >>> 25) | (N << 7))) +
                    ((N & f) ^ (~N & T))) |
                    0) +
                    ((R + ((t[v] + d[v]) | 0)) | 0)) |
                  0),
                  (E =
                    ((((C >>> 2) | (C << 30)) ^
                      ((C >>> 13) | (C << 19)) ^
                      ((C >>> 22) | (C << 10))) +
                      ((C & g) ^ (C & A) ^ (g & A))) |
                    0),
                  (R = T),
                  (T = f),
                  (f = N),
                  (N = (w + _) | 0),
                  (w = A),
                  (A = g),
                  (g = C),
                  (C = (_ + E) | 0);
              (a = (a + C) | 0),
                (r = (r + g) | 0),
                (o = (o + A) | 0),
                (n = (n + w) | 0),
                (i = (i + N) | 0),
                (s = (s + f) | 0),
                (c = (c + T) | 0),
                (l = (l + R) | 0),
                (u += 64),
                (p -= 64);
            }
          }
          u(e);
          let p,
            h = e.length % 64,
            v = (e.length / 536870912) | 0,
            m = e.length << 3,
            _ = h < 56 ? 56 : 120,
            E = e.slice(e.length - h, e.length);
          for (E.push(128), p = h + 1; p < _; p++) E.push(0);
          return (
            E.push((v >>> 24) & 255),
            E.push((v >>> 16) & 255),
            E.push((v >>> 8) & 255),
            E.push((v >>> 0) & 255),
            E.push((m >>> 24) & 255),
            E.push((m >>> 16) & 255),
            E.push((m >>> 8) & 255),
            E.push((m >>> 0) & 255),
            u(E),
            [
              (a >>> 24) & 255,
              (a >>> 16) & 255,
              (a >>> 8) & 255,
              (a >>> 0) & 255,
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              (r >>> 0) & 255,
              (o >>> 24) & 255,
              (o >>> 16) & 255,
              (o >>> 8) & 255,
              (o >>> 0) & 255,
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              (n >>> 0) & 255,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              (i >>> 0) & 255,
              (s >>> 24) & 255,
              (s >>> 16) & 255,
              (s >>> 8) & 255,
              (s >>> 0) & 255,
              (c >>> 24) & 255,
              (c >>> 16) & 255,
              (c >>> 8) & 255,
              (c >>> 0) & 255,
              (l >>> 24) & 255,
              (l >>> 16) & 255,
              (l >>> 8) & 255,
              (l >>> 0) & 255,
            ]
          );
        }
        function r(e, t, r) {
          e = e.length <= 64 ? e : a(e);
          const o = 64 + t.length + 4,
            n = new Array(o),
            i = new Array(64);
          let s,
            c = [];
          for (s = 0; s < 64; s++) n[s] = 54;
          for (s = 0; s < e.length; s++) n[s] ^= e[s];
          for (s = 0; s < t.length; s++) n[64 + s] = t[s];
          for (s = o - 4; s < o; s++) n[s] = 0;
          for (s = 0; s < 64; s++) i[s] = 92;
          for (s = 0; s < e.length; s++) i[s] ^= e[s];
          function l() {
            for (let e = o - 1; e >= o - 4; e--) {
              if ((n[e]++, n[e] <= 255)) return;
              n[e] = 0;
            }
          }
          for (; r >= 32; ) l(), (c = c.concat(a(i.concat(a(n))))), (r -= 32);
          return (
            r > 0 && (l(), (c = c.concat(a(i.concat(a(n))).slice(0, r)))), c
          );
        }
        function o(e, t, a, r, o) {
          let n;
          for (c(e, 16 * (2 * a - 1), o, 0, 16), n = 0; n < 2 * a; n++)
            s(e, 16 * n, o, 16), i(o, r), c(o, 0, e, t + 16 * n, 16);
          for (n = 0; n < a; n++) c(e, t + 2 * n * 16, e, 16 * n, 16);
          for (n = 0; n < a; n++)
            c(e, t + 16 * (2 * n + 1), e, 16 * (n + a), 16);
        }
        function n(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function i(e, t) {
          c(e, 0, t, 0, 16);
          for (let a = 8; a > 0; a -= 2)
            (t[4] ^= n(t[0] + t[12], 7)),
              (t[8] ^= n(t[4] + t[0], 9)),
              (t[12] ^= n(t[8] + t[4], 13)),
              (t[0] ^= n(t[12] + t[8], 18)),
              (t[9] ^= n(t[5] + t[1], 7)),
              (t[13] ^= n(t[9] + t[5], 9)),
              (t[1] ^= n(t[13] + t[9], 13)),
              (t[5] ^= n(t[1] + t[13], 18)),
              (t[14] ^= n(t[10] + t[6], 7)),
              (t[2] ^= n(t[14] + t[10], 9)),
              (t[6] ^= n(t[2] + t[14], 13)),
              (t[10] ^= n(t[6] + t[2], 18)),
              (t[3] ^= n(t[15] + t[11], 7)),
              (t[7] ^= n(t[3] + t[15], 9)),
              (t[11] ^= n(t[7] + t[3], 13)),
              (t[15] ^= n(t[11] + t[7], 18)),
              (t[1] ^= n(t[0] + t[3], 7)),
              (t[2] ^= n(t[1] + t[0], 9)),
              (t[3] ^= n(t[2] + t[1], 13)),
              (t[0] ^= n(t[3] + t[2], 18)),
              (t[6] ^= n(t[5] + t[4], 7)),
              (t[7] ^= n(t[6] + t[5], 9)),
              (t[4] ^= n(t[7] + t[6], 13)),
              (t[5] ^= n(t[4] + t[7], 18)),
              (t[11] ^= n(t[10] + t[9], 7)),
              (t[8] ^= n(t[11] + t[10], 9)),
              (t[9] ^= n(t[8] + t[11], 13)),
              (t[10] ^= n(t[9] + t[8], 18)),
              (t[12] ^= n(t[15] + t[14], 7)),
              (t[13] ^= n(t[12] + t[15], 9)),
              (t[14] ^= n(t[13] + t[12], 13)),
              (t[15] ^= n(t[14] + t[13], 18));
          for (let a = 0; a < 16; ++a) e[a] += t[a];
        }
        function s(e, t, a, r) {
          for (let o = 0; o < r; o++) a[o] ^= e[t + o];
        }
        function c(e, t, a, r, o) {
          for (; o--; ) a[r++] = e[t++];
        }
        function l(e) {
          if (!e || "number" !== typeof e.length) return !1;
          for (let t = 0; t < e.length; t++) {
            const a = e[t];
            if ("number" !== typeof a || a % 1 || a < 0 || a >= 256) return !1;
          }
          return !0;
        }
        function d(e, t) {
          if ("number" !== typeof e || e % 1) throw new Error("invalid " + t);
          return e;
        }
        function u(e, a, n, i, u, p, h) {
          if (
            ((n = d(n, "N")),
            (i = d(i, "r")),
            (u = d(u, "p")),
            (p = d(p, "dkLen")),
            0 === n || 0 !== (n & (n - 1)))
          )
            throw new Error("N must be power of 2");
          if (n > t / 128 / i) throw new Error("N too large");
          if (i > t / 128 / u) throw new Error("r too large");
          if (!l(e)) throw new Error("password must be an array or buffer");
          if (((e = Array.prototype.slice.call(e)), !l(a)))
            throw new Error("salt must be an array or buffer");
          a = Array.prototype.slice.call(a);
          let v = r(e, a, 128 * u * i);
          const m = new Uint32Array(32 * u * i);
          for (let t = 0; t < m.length; t++) {
            const e = 4 * t;
            m[t] =
              ((255 & v[e + 3]) << 24) |
              ((255 & v[e + 2]) << 16) |
              ((255 & v[e + 1]) << 8) |
              (255 & v[e + 0]);
          }
          const _ = new Uint32Array(64 * i),
            E = new Uint32Array(32 * i * n),
            C = 32 * i,
            g = new Uint32Array(16),
            A = new Uint32Array(16),
            w = u * n * 2;
          let N,
            f,
            T = 0,
            R = null,
            b = !1,
            I = 0,
            y = 0;
          const P = h ? parseInt(1e3 / i) : 4294967295,
            S = "undefined" !== typeof setImmediate ? setImmediate : setTimeout,
            k = function () {
              if (b) return h(new Error("cancelled"), T / w);
              let t;
              switch (I) {
                case 0:
                  (f = 32 * y * i), c(m, f, _, 0, C), (I = 1), (N = 0);
                case 1:
                  (t = n - N), t > P && (t = P);
                  for (let e = 0; e < t; e++)
                    c(_, 0, E, (N + e) * C, C), o(_, C, i, g, A);
                  if (((N += t), (T += t), h)) {
                    const e = parseInt((1e3 * T) / w);
                    if (e !== R) {
                      if (((b = h(null, T / w)), b)) break;
                      R = e;
                    }
                  }
                  if (N < n) break;
                  (N = 0), (I = 2);
                case 2:
                  (t = n - N), t > P && (t = P);
                  for (let e = 0; e < t; e++) {
                    const e = _[16 * (2 * i - 1)] & (n - 1);
                    s(E, e * C, _, C), o(_, C, i, g, A);
                  }
                  if (((N += t), (T += t), h)) {
                    const e = parseInt((1e3 * T) / w);
                    if (e !== R) {
                      if (((b = h(null, T / w)), b)) break;
                      R = e;
                    }
                  }
                  if (N < n) break;
                  if ((c(_, 0, m, f, C), y++, y < u)) {
                    I = 0;
                    break;
                  }
                  v = [];
                  for (let e = 0; e < m.length; e++)
                    v.push(255 & m[e]),
                      v.push((m[e] >> 8) & 255),
                      v.push((m[e] >> 16) & 255),
                      v.push((m[e] >> 24) & 255);
                  const a = r(e, v, p);
                  return h && h(null, 1, a), a;
              }
              h && S(k);
            };
          if (!h)
            for (;;) {
              const e = k();
              if (void 0 != e) return e;
            }
          k();
        }
        const p = {
          scrypt: function (e, t, a, r, o, n, i) {
            return new Promise(function (s, c) {
              let l = 0;
              i && i(0),
                u(e, t, a, r, o, n, function (e, t, a) {
                  if (e) c(e);
                  else if (a) i && 1 !== l && i(1), s(new Uint8Array(a));
                  else if (i && t !== l) return (l = t), i(t);
                });
            });
          },
          syncScrypt: function (e, t, a, r, o, n) {
            return new Uint8Array(u(e, t, a, r, o, n));
          },
        };
        e.exports = p;
      })();
    },
    37687: (e, t, a) => {
      a.d(t, { E: () => m });
      var r = a(59586),
        o = a(10719),
        n = a(63153),
        i = a(16733),
        s = a(78344),
        c = a(23871),
        l = a(24026),
        d = a(458);
      const u = i.w.getAnalyticsUrl(),
        p = new s.Z({ baseUrl: u, clientId: null }),
        h = ["MODAL_CREATED"],
        v = (0, r.BX)({
          timestamp: Date.now(),
          reportedErrors: {},
          data: { type: "track", event: "MODAL_CREATED" },
        }),
        m = {
          state: v,
          subscribe: (e) => (0, r.B1)(v, () => e(v)),
          getSdkProperties() {
            const { projectId: e, sdkType: t, sdkVersion: a } = d.H.state;
            return { projectId: e, st: t, sv: a || "html-wagmi-4.2.2" };
          },
          async _sendAnalyticsEvent(e) {
            try {
              const t = c.U.state.address;
              if (h.includes(e.data.event) || "undefined" === typeof window)
                return;
              await p.post({
                path: "/e",
                params: m.getSdkProperties(),
                body: {
                  eventId: i.w.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: e.timestamp,
                  props: { ...e.data, address: t },
                },
              }),
                (v.reportedErrors.FORBIDDEN = !1);
            } catch (t) {
              t instanceof Error &&
                t.cause instanceof Response &&
                t.cause.status === o.o.HTTP_STATUS_CODES.FORBIDDEN &&
                !v.reportedErrors.FORBIDDEN &&
                (l.h.open(
                  {
                    shortMessage: "Invalid App Configuration",
                    longMessage: `Origin ${
                      (0, n.IP)() ? window.origin : "uknown"
                    } not found on Allowlist - update configuration on cloud.reown.com`,
                  },
                  "error"
                ),
                (v.reportedErrors.FORBIDDEN = !0));
            }
          },
          sendEvent(e) {
            var t;
            (v.timestamp = Date.now()),
              (v.data = e),
              null !== (t = d.H.state.features) &&
                void 0 !== t &&
                t.analytics &&
                m._sendAnalyticsEvent(v);
          },
        };
    },
    37769: (e, t, a) => {
      a.d(t, { Q: () => c });
      const r = /^0x(?:[A-Fa-f0-9]{64})$/u,
        o = /^0x(?:[a-fA-F0-9]{62,})$/u;
      var n = a(45511),
        i = a(54147);
      const s = 3e4,
        c = {
          checkIfAllowedToTriggerEmail() {
            const e = i.o.get(n.s1.LAST_EMAIL_LOGIN_TIME);
            if (e) {
              const t = Date.now() - Number(e);
              if (t < s) {
                const e = Math.ceil((s - t) / 1e3);
                throw new Error(`Please try again after ${e} seconds`);
              }
            }
          },
          getTimeToNextEmailLogin() {
            const e = i.o.get(n.s1.LAST_EMAIL_LOGIN_TIME);
            if (e) {
              const t = Date.now() - Number(e);
              if (t < s) return Math.ceil((s - t) / 1e3);
            }
            return 0;
          },
          checkIfRequestExists: (e) =>
            n.Vl.NOT_SAFE_RPC_METHODS.includes(e.method) ||
            n.Vl.SAFE_RPC_METHODS.includes(e.method),
          getResponseType: (e) =>
            "string" === typeof e &&
            ((null === e || void 0 === e ? void 0 : e.match(r)) ||
              (null === e || void 0 === e ? void 0 : e.match(o)))
              ? n.s1.RPC_RESPONSE_TYPE_TX
              : n.s1.RPC_RESPONSE_TYPE_OBJECT,
          checkIfRequestIsSafe: (e) => n.Vl.SAFE_RPC_METHODS.includes(e.method),
          isClient: "undefined" !== typeof window,
        };
    },
    39103: (e, t, a) => {
      a.d(t, { kl: () => r.kl });
      a(70039);
      var r = a(25057);
    },
    40777: (e, t, a) => {
      a.d(t, { A: () => u });
      var r = a(458),
        o = a(71898),
        n = a(21369),
        i = a(16733),
        s = a(69084),
        c = a(6951),
        l = a(71377),
        d = a(2195);
      const u = {
        filterOutDuplicatesByRDNS(e) {
          const t = r.H.state.enableEIP6963 ? o.a.state.connectors : [],
            a = n.i.getRecentWallets(),
            s = t
              .map((e) => {
                var t;
                return null === (t = e.info) || void 0 === t ? void 0 : t.rdns;
              })
              .filter(Boolean),
            c = a.map((e) => e.rdns).filter(Boolean),
            l = s.concat(c);
          if (l.includes("io.metamask.mobile") && i.w.isMobile()) {
            const e = l.indexOf("io.metamask.mobile");
            l[e] = "io.metamask";
          }
          return e.filter(
            (e) =>
              !l.includes(String(null === e || void 0 === e ? void 0 : e.rdns))
          );
        },
        filterOutDuplicatesByIds(e) {
          const t = o.a.state.connectors.filter(
              (e) => "ANNOUNCED" === e.type || "INJECTED" === e.type
            ),
            a = n.i.getRecentWallets(),
            r = t.map((e) => e.explorerId),
            i = a.map((e) => e.id),
            s = r.concat(i);
          return e.filter(
            (e) => !s.includes(null === e || void 0 === e ? void 0 : e.id)
          );
        },
        filterOutDuplicateWallets(e) {
          const t = this.filterOutDuplicatesByRDNS(e);
          return this.filterOutDuplicatesByIds(t);
        },
        markWalletsAsInstalled(e) {
          const { connectors: t } = o.a.state,
            a = t
              .filter((e) => "ANNOUNCED" === e.type)
              .reduce((e, t) => {
                var a;
                return null !== (a = t.info) && void 0 !== a && a.rdns
                  ? ((e[t.info.rdns] = !0), e)
                  : e;
              }, {});
          return e
            .map((e) => {
              var t;
              return {
                ...e,
                installed:
                  Boolean(e.rdns) &&
                  Boolean(a[null !== (t = e.rdns) && void 0 !== t ? t : ""]),
              };
            })
            .sort((e, t) => Number(t.installed) - Number(e.installed));
        },
        getConnectOrderMethod(e, t) {
          var a;
          const n =
              (null === e || void 0 === e ? void 0 : e.connectMethodsOrder) ||
              (null === (a = r.H.state.features) || void 0 === a
                ? void 0
                : a.connectMethodsOrder),
            i = t || o.a.state.connectors;
          if (n) return n;
          const { injected: c, announced: u } = l.g.getConnectorsByType(
              i,
              s.N.state.recommended,
              s.N.state.featured
            ),
            p = c.filter(l.g.showConnector),
            h = u.filter(l.g.showConnector);
          return p.length || h.length
            ? ["wallet", "email", "social"]
            : d.o.DEFAULT_CONNECT_METHOD_ORDER;
        },
        isExcluded(e) {
          const t =
              Boolean(e.rdns) &&
              s.N.state.excludedWallets.some((t) => t.rdns === e.rdns),
            a =
              Boolean(e.name) &&
              s.N.state.excludedWallets.some((t) =>
                c.y.isLowerCaseMatch(t.name, e.name)
              );
          return t || a;
        },
      };
    },
    42821: (e, t, a) => {
      function r(e) {
        return "version" in e;
      }
      a.d(t, { Y: () => r });
    },
    43126: (e, t, a) => {
      function r(e) {
        return "/" === e.charAt(0);
      }
      function o(e, t) {
        for (var a = t, r = a + 1, o = e.length; r < o; a += 1, r += 1)
          e[a] = e[r];
        e.pop();
      }
      a.d(t, { A: () => n });
      const n = function (e, t) {
        void 0 === t && (t = "");
        var a,
          n = (e && e.split("/")) || [],
          i = (t && t.split("/")) || [],
          s = e && r(e),
          c = t && r(t),
          l = s || c;
        if (
          (e && r(e) ? (i = n) : n.length && (i.pop(), (i = i.concat(n))),
          !i.length)
        )
          return "/";
        if (i.length) {
          var d = i[i.length - 1];
          a = "." === d || ".." === d || "" === d;
        } else a = !1;
        for (var u = 0, p = i.length; p >= 0; p--) {
          var h = i[p];
          "." === h
            ? o(i, p)
            : ".." === h
            ? (o(i, p), u++)
            : u && (o(i, p), u--);
        }
        if (!l) for (; u--; u) i.unshift("..");
        !l || "" === i[0] || (i[0] && r(i[0])) || i.unshift("");
        var v = i.join("/");
        return a && "/" !== v.substr(-1) && (v += "/"), v;
      };
    },
    43136: (e, t, a) => {
      a.d(t, { j: () => i });
      var r = a(59586),
        o = a(86992);
      const n = (0, r.BX)({
          walletImages: {},
          networkImages: {},
          chainImages: {},
          connectorImages: {},
          tokenImages: {},
          currencyImages: {},
        }),
        i = {
          state: n,
          subscribeNetworkImages: (e) =>
            (0, r.B1)(n.networkImages, () => e(n.networkImages)),
          subscribeKey: (e, t) => (0, o.u$)(n, e, t),
          subscribe: (e) => (0, r.B1)(n, () => e(n)),
          setWalletImage(e, t) {
            n.walletImages[e] = t;
          },
          setNetworkImage(e, t) {
            n.networkImages[e] = t;
          },
          setChainImage(e, t) {
            n.chainImages[e] = t;
          },
          setConnectorImage(e, t) {
            n.connectorImages = { ...n.connectorImages, [e]: t };
          },
          setTokenImage(e, t) {
            n.tokenImages[e] = t;
          },
          setCurrencyImage(e, t) {
            n.currencyImages[e] = t;
          },
        };
    },
    43437: (e, t, a) => {
      a.d(t, { v: () => Me });
      var r = a(10719),
        o = a(45511),
        n = a(37769),
        i = a(99181);
      const s = i.z.object({ message: i.z.string() });
      function c(e) {
        return i.z.literal(o.s1[e]);
      }
      i.z.object({
        accessList: i.z.array(i.z.string()),
        blockHash: i.z.string().nullable(),
        blockNumber: i.z.string().nullable(),
        chainId: i.z.string().or(i.z.number()),
        from: i.z.string(),
        gas: i.z.string(),
        hash: i.z.string(),
        input: i.z.string().nullable(),
        maxFeePerGas: i.z.string(),
        maxPriorityFeePerGas: i.z.string(),
        nonce: i.z.string(),
        r: i.z.string(),
        s: i.z.string(),
        to: i.z.string(),
        transactionIndex: i.z.string().nullable(),
        type: i.z.string(),
        v: i.z.string(),
        value: i.z.string(),
      });
      const l = i.z.object({ chainId: i.z.string().or(i.z.number()) }),
        d = i.z.object({ email: i.z.string().email() }),
        u = i.z.object({ otp: i.z.string() }),
        p = i.z.object({ uri: i.z.string() }),
        h = i.z.object({
          chainId: i.z.optional(i.z.string().or(i.z.number())),
          preferredAccountType: i.z.optional(i.z.string()),
        }),
        v = i.z.object({
          provider: i.z.enum([
            "google",
            "github",
            "apple",
            "facebook",
            "x",
            "discord",
          ]),
        }),
        m = i.z.object({ email: i.z.string().email() }),
        _ = i.z.object({ otp: i.z.string() }),
        E = i.z.object({ otp: i.z.string() }),
        C = i.z.object({
          themeMode: i.z.optional(i.z.enum(["light", "dark"])),
          themeVariables: i.z.optional(
            i.z.record(i.z.string(), i.z.string().or(i.z.number()))
          ),
          w3mThemeVariables: i.z.optional(
            i.z.record(i.z.string(), i.z.string())
          ),
        }),
        g = i.z.object({
          metadata: i.z
            .object({
              name: i.z.string(),
              description: i.z.string(),
              url: i.z.string(),
              icons: i.z.array(i.z.string()),
            })
            .optional(),
          sdkVersion: i.z.string().optional(),
          sdkType: i.z.string().optional(),
          projectId: i.z.string(),
        }),
        A = i.z.object({ type: i.z.string() }),
        w = i.z.object({
          action: i.z.enum(["VERIFY_DEVICE", "VERIFY_OTP", "CONNECT"]),
        }),
        N = i.z.object({ url: i.z.string() }),
        f = i.z.object({ userName: i.z.string() }),
        T = i.z.object({
          email: i.z.string().optional().nullable(),
          address: i.z.string(),
          chainId: i.z.string().or(i.z.number()),
          accounts: i.z
            .array(
              i.z.object({
                address: i.z.string(),
                type: i.z.enum([
                  o.Vl.ACCOUNT_TYPES.EOA,
                  o.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                ]),
              })
            )
            .optional(),
          userName: i.z.string().optional().nullable(),
        }),
        R = i.z.object({
          action: i.z.enum(["VERIFY_PRIMARY_OTP", "VERIFY_SECONDARY_OTP"]),
        }),
        b = i.z.object({
          email: i.z.string().email().optional().nullable(),
          address: i.z.string(),
          chainId: i.z.string().or(i.z.number()),
          smartAccountDeployed: i.z.optional(i.z.boolean()),
          accounts: i.z
            .array(
              i.z.object({
                address: i.z.string(),
                type: i.z.enum([
                  o.Vl.ACCOUNT_TYPES.EOA,
                  o.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                ]),
              })
            )
            .optional(),
          preferredAccountType: i.z.optional(i.z.string()),
        }),
        I = i.z.object({ uri: i.z.string() }),
        y = i.z.object({ isConnected: i.z.boolean() }),
        P = i.z.object({ chainId: i.z.string().or(i.z.number()) }),
        S = i.z.object({ chainId: i.z.string().or(i.z.number()) }),
        k = i.z.object({ newEmail: i.z.string().email() }),
        O = i.z.object({
          smartAccountEnabledNetworks: i.z.array(i.z.number()),
        }),
        U =
          (i.z.object({ address: i.z.string(), isDeployed: i.z.boolean() }),
          i.z.object({ version: i.z.string().optional() })),
        x = i.z.object({ type: i.z.string(), address: i.z.string() }),
        D = i.z.any(),
        L = i.z.object({ method: i.z.literal("eth_accounts") }),
        W = i.z.object({ method: i.z.literal("eth_blockNumber") }),
        M = i.z.object({
          method: i.z.literal("eth_call"),
          params: i.z.array(i.z.any()),
        }),
        z = i.z.object({ method: i.z.literal("eth_chainId") }),
        B = i.z.object({
          method: i.z.literal("eth_estimateGas"),
          params: i.z.array(i.z.any()),
        }),
        F = i.z.object({
          method: i.z.literal("eth_feeHistory"),
          params: i.z.array(i.z.any()),
        }),
        H = i.z.object({ method: i.z.literal("eth_gasPrice") }),
        j = i.z.object({
          method: i.z.literal("eth_getAccount"),
          params: i.z.array(i.z.any()),
        }),
        K = i.z.object({
          method: i.z.literal("eth_getBalance"),
          params: i.z.array(i.z.any()),
        }),
        G = i.z.object({
          method: i.z.literal("eth_getBlockByHash"),
          params: i.z.array(i.z.any()),
        }),
        q = i.z.object({
          method: i.z.literal("eth_getBlockByNumber"),
          params: i.z.array(i.z.any()),
        }),
        V = i.z.object({
          method: i.z.literal("eth_getBlockReceipts"),
          params: i.z.array(i.z.any()),
        }),
        Y = i.z.object({
          method: i.z.literal("eth_getBlockTransactionCountByHash"),
          params: i.z.array(i.z.any()),
        }),
        $ = i.z.object({
          method: i.z.literal("eth_getBlockTransactionCountByNumber"),
          params: i.z.array(i.z.any()),
        }),
        X = i.z.object({
          method: i.z.literal("eth_getCode"),
          params: i.z.array(i.z.any()),
        }),
        J = i.z.object({
          method: i.z.literal("eth_getFilterChanges"),
          params: i.z.array(i.z.any()),
        }),
        Q = i.z.object({
          method: i.z.literal("eth_getFilterLogs"),
          params: i.z.array(i.z.any()),
        }),
        Z = i.z.object({
          method: i.z.literal("eth_getLogs"),
          params: i.z.array(i.z.any()),
        }),
        ee = i.z.object({
          method: i.z.literal("eth_getProof"),
          params: i.z.array(i.z.any()),
        }),
        te = i.z.object({
          method: i.z.literal("eth_getStorageAt"),
          params: i.z.array(i.z.any()),
        }),
        ae = i.z.object({
          method: i.z.literal("eth_getTransactionByBlockHashAndIndex"),
          params: i.z.array(i.z.any()),
        }),
        re = i.z.object({
          method: i.z.literal("eth_getTransactionByBlockNumberAndIndex"),
          params: i.z.array(i.z.any()),
        }),
        oe = i.z.object({
          method: i.z.literal("eth_getTransactionByHash"),
          params: i.z.array(i.z.any()),
        }),
        ne = i.z.object({
          method: i.z.literal("eth_getTransactionCount"),
          params: i.z.array(i.z.any()),
        }),
        ie = i.z.object({
          method: i.z.literal("eth_getTransactionReceipt"),
          params: i.z.array(i.z.any()),
        }),
        se = i.z.object({
          method: i.z.literal("eth_getUncleCountByBlockHash"),
          params: i.z.array(i.z.any()),
        }),
        ce = i.z.object({
          method: i.z.literal("eth_getUncleCountByBlockNumber"),
          params: i.z.array(i.z.any()),
        }),
        le = i.z.object({ method: i.z.literal("eth_maxPriorityFeePerGas") }),
        de = i.z.object({ method: i.z.literal("eth_newBlockFilter") }),
        ue = i.z.object({
          method: i.z.literal("eth_newFilter"),
          params: i.z.array(i.z.any()),
        }),
        pe = i.z.object({
          method: i.z.literal("eth_newPendingTransactionFilter"),
        }),
        he = i.z.object({
          method: i.z.literal("eth_sendRawTransaction"),
          params: i.z.array(i.z.any()),
        }),
        ve = i.z.object({
          method: i.z.literal("eth_syncing"),
          params: i.z.array(i.z.any()),
        }),
        me = i.z.object({
          method: i.z.literal("eth_uninstallFilter"),
          params: i.z.array(i.z.any()),
        }),
        _e = i.z.object({
          method: i.z.literal("personal_sign"),
          params: i.z.array(i.z.any()),
        }),
        Ee = i.z.object({
          method: i.z.literal("eth_signTypedData_v4"),
          params: i.z.array(i.z.any()),
        }),
        Ce = i.z.object({
          method: i.z.literal("eth_sendTransaction"),
          params: i.z.array(i.z.any()),
        }),
        ge = i.z.object({
          method: i.z.literal("solana_signMessage"),
          params: i.z.object({ message: i.z.string(), pubkey: i.z.string() }),
        }),
        Ae = i.z.object({
          method: i.z.literal("solana_signTransaction"),
          params: i.z.object({ transaction: i.z.string() }),
        }),
        we = i.z.object({
          method: i.z.literal("solana_signAllTransactions"),
          params: i.z.object({ transactions: i.z.array(i.z.string()) }),
        }),
        Ne = i.z.object({
          method: i.z.literal("solana_signAndSendTransaction"),
          params: i.z.object({
            transaction: i.z.string(),
            options: i.z
              .object({
                skipPreflight: i.z.boolean().optional(),
                preflightCommitment: i.z
                  .enum([
                    "processed",
                    "confirmed",
                    "finalized",
                    "recent",
                    "single",
                    "singleGossip",
                    "root",
                    "max",
                  ])
                  .optional(),
                maxRetries: i.z.number().optional(),
                minContextSlot: i.z.number().optional(),
              })
              .optional(),
          }),
        }),
        fe = i.z.object({
          method: i.z.literal("wallet_sendCalls"),
          params: i.z.array(
            i.z.object({
              chainId: i.z.string().or(i.z.number()).optional(),
              from: i.z.string().optional(),
              version: i.z.string().optional(),
              capabilities: i.z.any().optional(),
              calls: i.z.array(
                i.z.object({
                  to: i.z.string().startsWith("0x"),
                  data: i.z.string().startsWith("0x").optional(),
                  value: i.z.string().optional(),
                })
              ),
            })
          ),
        }),
        Te = i.z.object({
          method: i.z.literal("wallet_getCallsStatus"),
          params: i.z.array(i.z.string()),
        }),
        Re = i.z.object({ method: i.z.literal("wallet_getCapabilities") }),
        be = i.z.object({
          method: i.z.literal("wallet_grantPermissions"),
          params: i.z.array(i.z.any()),
        }),
        Ie = i.z.object({
          method: i.z.literal("wallet_revokePermissions"),
          params: i.z.any(),
        }),
        ye = i.z.object({
          method: i.z.literal("wallet_getAssets"),
          params: i.z.any(),
        }),
        Pe = i.z.object({ token: i.z.string() }),
        Se = i.z.object({ id: i.z.string().optional() }),
        ke = {
          appEvent: Se.extend({ type: c("APP_SWITCH_NETWORK"), payload: l })
            .or(Se.extend({ type: c("APP_CONNECT_EMAIL"), payload: d }))
            .or(Se.extend({ type: c("APP_CONNECT_DEVICE") }))
            .or(Se.extend({ type: c("APP_CONNECT_OTP"), payload: u }))
            .or(Se.extend({ type: c("APP_CONNECT_SOCIAL"), payload: p }))
            .or(Se.extend({ type: c("APP_GET_FARCASTER_URI") }))
            .or(Se.extend({ type: c("APP_CONNECT_FARCASTER") }))
            .or(
              Se.extend({ type: c("APP_GET_USER"), payload: i.z.optional(h) })
            )
            .or(
              Se.extend({ type: c("APP_GET_SOCIAL_REDIRECT_URI"), payload: v })
            )
            .or(Se.extend({ type: c("APP_SIGN_OUT") }))
            .or(
              Se.extend({
                type: c("APP_IS_CONNECTED"),
                payload: i.z.optional(Pe),
              })
            )
            .or(Se.extend({ type: c("APP_GET_CHAIN_ID") }))
            .or(
              Se.extend({ type: c("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS") })
            )
            .or(Se.extend({ type: c("APP_INIT_SMART_ACCOUNT") }))
            .or(Se.extend({ type: c("APP_SET_PREFERRED_ACCOUNT"), payload: A }))
            .or(
              Se.extend({
                type: c("APP_RPC_REQUEST"),
                payload: _e
                  .or(ye)
                  .or(L)
                  .or(W)
                  .or(M)
                  .or(z)
                  .or(B)
                  .or(F)
                  .or(H)
                  .or(j)
                  .or(K)
                  .or(G)
                  .or(q)
                  .or(V)
                  .or(Y)
                  .or($)
                  .or(X)
                  .or(J)
                  .or(Q)
                  .or(Z)
                  .or(ee)
                  .or(te)
                  .or(ae)
                  .or(re)
                  .or(oe)
                  .or(ne)
                  .or(ie)
                  .or(se)
                  .or(ce)
                  .or(le)
                  .or(de)
                  .or(ue)
                  .or(pe)
                  .or(he)
                  .or(ve)
                  .or(me)
                  .or(_e)
                  .or(Ee)
                  .or(Ce)
                  .or(ge)
                  .or(Ae)
                  .or(we)
                  .or(Ne)
                  .or(Te)
                  .or(fe)
                  .or(Re)
                  .or(be)
                  .or(Ie),
              })
            )
            .or(Se.extend({ type: c("APP_UPDATE_EMAIL"), payload: m }))
            .or(
              Se.extend({ type: c("APP_UPDATE_EMAIL_PRIMARY_OTP"), payload: _ })
            )
            .or(
              Se.extend({
                type: c("APP_UPDATE_EMAIL_SECONDARY_OTP"),
                payload: E,
              })
            )
            .or(Se.extend({ type: c("APP_SYNC_THEME"), payload: C }))
            .or(Se.extend({ type: c("APP_SYNC_DAPP_DATA"), payload: g }))
            .or(Se.extend({ type: c("APP_RELOAD") })),
          frameEvent: Se.extend({
            type: c("FRAME_SWITCH_NETWORK_ERROR"),
            payload: s,
          })
            .or(
              Se.extend({ type: c("FRAME_SWITCH_NETWORK_SUCCESS"), payload: S })
            )
            .or(
              Se.extend({ type: c("FRAME_CONNECT_EMAIL_SUCCESS"), payload: w })
            )
            .or(Se.extend({ type: c("FRAME_CONNECT_EMAIL_ERROR"), payload: s }))
            .or(
              Se.extend({
                type: c("FRAME_GET_FARCASTER_URI_SUCCESS"),
                payload: N,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_GET_FARCASTER_URI_ERROR"),
                payload: s,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_CONNECT_FARCASTER_SUCCESS"),
                payload: f,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_CONNECT_FARCASTER_ERROR"),
                payload: s,
              })
            )
            .or(Se.extend({ type: c("FRAME_CONNECT_OTP_ERROR"), payload: s }))
            .or(Se.extend({ type: c("FRAME_CONNECT_OTP_SUCCESS") }))
            .or(
              Se.extend({ type: c("FRAME_CONNECT_DEVICE_ERROR"), payload: s })
            )
            .or(Se.extend({ type: c("FRAME_CONNECT_DEVICE_SUCCESS") }))
            .or(
              Se.extend({ type: c("FRAME_CONNECT_SOCIAL_SUCCESS"), payload: T })
            )
            .or(
              Se.extend({ type: c("FRAME_CONNECT_SOCIAL_ERROR"), payload: s })
            )
            .or(Se.extend({ type: c("FRAME_GET_USER_ERROR"), payload: s }))
            .or(Se.extend({ type: c("FRAME_GET_USER_SUCCESS"), payload: b }))
            .or(
              Se.extend({
                type: c("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),
                payload: s,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),
                payload: I,
              })
            )
            .or(Se.extend({ type: c("FRAME_SIGN_OUT_ERROR"), payload: s }))
            .or(Se.extend({ type: c("FRAME_SIGN_OUT_SUCCESS") }))
            .or(Se.extend({ type: c("FRAME_IS_CONNECTED_ERROR"), payload: s }))
            .or(
              Se.extend({ type: c("FRAME_IS_CONNECTED_SUCCESS"), payload: y })
            )
            .or(Se.extend({ type: c("FRAME_GET_CHAIN_ID_ERROR"), payload: s }))
            .or(
              Se.extend({ type: c("FRAME_GET_CHAIN_ID_SUCCESS"), payload: P })
            )
            .or(Se.extend({ type: c("FRAME_RPC_REQUEST_ERROR"), payload: s }))
            .or(Se.extend({ type: c("FRAME_RPC_REQUEST_SUCCESS"), payload: D }))
            .or(Se.extend({ type: c("FRAME_SESSION_UPDATE"), payload: Pe }))
            .or(Se.extend({ type: c("FRAME_UPDATE_EMAIL_ERROR"), payload: s }))
            .or(
              Se.extend({ type: c("FRAME_UPDATE_EMAIL_SUCCESS"), payload: R })
            )
            .or(
              Se.extend({
                type: c("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),
                payload: s,
              })
            )
            .or(
              Se.extend({ type: c("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS") })
            )
            .or(
              Se.extend({
                type: c("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),
                payload: s,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
                payload: k,
              })
            )
            .or(Se.extend({ type: c("FRAME_SYNC_THEME_ERROR"), payload: s }))
            .or(Se.extend({ type: c("FRAME_SYNC_THEME_SUCCESS") }))
            .or(
              Se.extend({ type: c("FRAME_SYNC_DAPP_DATA_ERROR"), payload: s })
            )
            .or(Se.extend({ type: c("FRAME_SYNC_DAPP_DATA_SUCCESS") }))
            .or(
              Se.extend({
                type: c("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
                payload: O,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
                payload: s,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_INIT_SMART_ACCOUNT_ERROR"),
                payload: s,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
                payload: x,
              })
            )
            .or(
              Se.extend({
                type: c("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),
                payload: s,
              })
            )
            .or(Se.extend({ type: c("FRAME_READY"), payload: U }))
            .or(Se.extend({ type: c("FRAME_RELOAD_ERROR"), payload: s }))
            .or(Se.extend({ type: c("FRAME_RELOAD_SUCCESS") })),
        };
      function Oe(e) {
        var t;
        let a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          "string" === typeof (null === a || void 0 === a ? void 0 : a.type) &&
          (null === a || void 0 === a || null === (t = a.type) || void 0 === t
            ? void 0
            : t.includes(e))
        );
      }
      class Ue {
        constructor(e) {
          let {
            projectId: t,
            isAppClient: a = !1,
            chainId: i = "eip155:1",
            enableLogger: s = !0,
          } = e;
          if (
            ((this.iframe = null),
            (this.rpcUrl = r.o.BLOCKCHAIN_API_RPC_URL),
            (this.initFrame = () => {
              const e = document.getElementById("w3m-iframe");
              this.iframe && !e && document.body.appendChild(this.iframe);
            }),
            (this.events = {
              registerFrameEventHandler: (e, t, a) => {
                function r(a) {
                  let { data: n } = a;
                  if (!Oe(o.s1.FRAME_EVENT_KEY, n)) return;
                  const i = ke.frameEvent.parse(n);
                  i.id === e &&
                    (t(i), window.removeEventListener("message", r));
                }
                n.Q.isClient &&
                  (window.addEventListener("message", r),
                  a.addEventListener("abort", () => {
                    window.removeEventListener("message", r);
                  }));
              },
              onFrameEvent: (e) => {
                n.Q.isClient &&
                  window.addEventListener("message", (t) => {
                    let { data: a } = t;
                    if (!Oe(o.s1.FRAME_EVENT_KEY, a)) return;
                    const r = ke.frameEvent.parse(a);
                    e(r);
                  });
              },
              onAppEvent: (e) => {
                n.Q.isClient &&
                  window.addEventListener("message", (t) => {
                    let { data: a } = t;
                    if (!Oe(o.s1.APP_EVENT_KEY, a)) return;
                    const r = ke.appEvent.parse(a);
                    e(r);
                  });
              },
              postAppEvent: (e) => {
                if (n.Q.isClient) {
                  var t;
                  if (
                    null === (t = this.iframe) ||
                    void 0 === t ||
                    !t.contentWindow
                  )
                    throw new Error("W3mFrame: iframe is not set");
                  ke.appEvent.parse(e),
                    this.iframe.contentWindow.postMessage(e, "*");
                }
              },
              postFrameEvent: (e) => {
                if (n.Q.isClient) {
                  if (!parent) throw new Error("W3mFrame: parent is not set");
                  ke.frameEvent.parse(e), parent.postMessage(e, "*");
                }
              },
            }),
            (this.projectId = t),
            (this.frameLoadPromise = new Promise((e, t) => {
              this.frameLoadPromiseResolver = { resolve: e, reject: t };
            })),
            a &&
              ((this.frameLoadPromise = new Promise((e, t) => {
                this.frameLoadPromiseResolver = { resolve: e, reject: t };
              })),
              n.Q.isClient))
          ) {
            const e = document.createElement("iframe");
            (e.id = "w3m-iframe"),
              (e.src = `${o.hy}?projectId=${t}&chainId=${i}&version=${o.gS}&enableLogger=${s}`),
              (e.name = "w3m-secure-iframe"),
              (e.style.position = "fixed"),
              (e.style.zIndex = "999999"),
              (e.style.display = "none"),
              (e.style.animationDelay = "0s, 50ms"),
              (e.style.borderBottomLeftRadius =
                "clamp(0px, var(--wui-border-radius-l), 44px)"),
              (e.style.borderBottomRightRadius =
                "clamp(0px, var(--wui-border-radius-l), 44px)"),
              (this.iframe = e),
              (this.iframe.onerror = () => {
                var e;
                null === (e = this.frameLoadPromiseResolver) ||
                  void 0 === e ||
                  e.reject("Unable to load email login dependency");
              }),
              this.events.onFrameEvent((e) => {
                var t;
                "@w3m-frame/READY" === e.type &&
                  (null === (t = this.frameLoadPromiseResolver) ||
                    void 0 === t ||
                    t.resolve(void 0));
              });
          }
        }
        get networks() {
          const e = [
            "eip155:1",
            "eip155:5",
            "eip155:11155111",
            "eip155:10",
            "eip155:420",
            "eip155:42161",
            "eip155:421613",
            "eip155:137",
            "eip155:80001",
            "eip155:42220",
            "eip155:1313161554",
            "eip155:1313161555",
            "eip155:56",
            "eip155:97",
            "eip155:43114",
            "eip155:43113",
            "eip155:324",
            "eip155:280",
            "eip155:100",
            "eip155:8453",
            "eip155:84531",
            "eip155:84532",
            "eip155:7777777",
            "eip155:999",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          ].map((e) => ({
            [e]: {
              rpcUrl: `${this.rpcUrl}/v1/?chainId=${e}&projectId=${this.projectId}`,
              chainId: e,
            },
          }));
          return Object.assign({}, ...e);
        }
      }
      var xe = a(50771);
      class De {
        constructor(e) {
          var t;
          const a = (0, xe.iP)({ level: o.OH }),
            { logger: r, chunkLoggerController: n } = (0, xe.D5)({ opts: a });
          (this.logger = (0, xe.U5)(r, this.constructor.name)),
            (this.chunkLoggerController = n),
            "undefined" !== typeof window &&
              null !== (t = this.chunkLoggerController) &&
              void 0 !== t &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadAppKitLogsBlob ||
                (window.downloadAppKitLogsBlob = {}),
              (window.downloadAppKitLogsBlob.sdk = () => {
                var t;
                null !== (t = this.chunkLoggerController) &&
                  void 0 !== t &&
                  t.downloadLogsBlobInBrowser &&
                  this.chunkLoggerController.downloadLogsBlobInBrowser({
                    projectId: e,
                  });
              }));
        }
      }
      var Le = a(54147);
      class We {
        constructor(e) {
          let {
            projectId: t,
            chainId: a,
            enableLogger: r = !0,
            onTimeout: n,
          } = e;
          (this.openRpcRequests = []),
            r && (this.w3mLogger = new De(t)),
            (this.w3mFrame = new Ue({
              projectId: t,
              isAppClient: !0,
              chainId: a,
              enableLogger: r,
            })),
            (this.onTimeout = n),
            this.getLoginEmailUsed() && this.w3mFrame.initFrame(),
            (this.initPromise = new Promise((e) => {
              this.w3mFrame.events.onFrameEvent(async (t) => {
                t.type === o.s1.FRAME_READY &&
                  ((this.initPromise = void 0),
                  await new Promise((e) => {
                    setTimeout(e, 500);
                  }),
                  e());
              });
            }));
        }
        async init() {
          this.w3mFrame.initFrame(),
            this.initPromise && (await this.initPromise);
        }
        getLoginEmailUsed() {
          return Boolean(Le.o.get(o.s1.EMAIL_LOGIN_USED_KEY));
        }
        getEmail() {
          return Le.o.get(o.s1.EMAIL);
        }
        getUsername() {
          return Le.o.get(o.s1.SOCIAL_USERNAME);
        }
        async reload() {
          try {
            this.w3mFrame.initFrame(),
              await this.appEvent({ type: o.s1.APP_RELOAD });
          } catch (t) {
            var e;
            throw (
              (null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error({ error: t }, "Error reloading iframe"),
              t)
            );
          }
        }
        async connectEmail(e) {
          try {
            n.Q.checkIfAllowedToTriggerEmail(), this.w3mFrame.initFrame();
            const t = await this.appEvent({
              type: o.s1.APP_CONNECT_EMAIL,
              payload: e,
            });
            return this.setNewLastEmailLoginTime(), t;
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error connecting email"),
              a)
            );
          }
        }
        async connectDevice() {
          try {
            return this.appEvent({ type: o.s1.APP_CONNECT_DEVICE });
          } catch (t) {
            var e;
            throw (
              (null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error({ error: t }, "Error connecting device"),
              t)
            );
          }
        }
        async connectOtp(e) {
          try {
            return this.appEvent({ type: o.s1.APP_CONNECT_OTP, payload: e });
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error connecting otp"),
              a)
            );
          }
        }
        async isConnected() {
          try {
            if (!this.getLoginEmailUsed()) return { isConnected: !1 };
            const e = await this.appEvent({ type: o.s1.APP_IS_CONNECTED });
            return (
              (null !== e && void 0 !== e && e.isConnected) ||
                this.deleteAuthLoginCache(),
              e
            );
          } catch (t) {
            var e;
            throw (
              (this.deleteAuthLoginCache(),
              null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error({ error: t }, "Error checking connection"),
              t)
            );
          }
        }
        async getChainId() {
          try {
            const e = await this.appEvent({ type: o.s1.APP_GET_CHAIN_ID });
            return this.setLastUsedChainId(e.chainId), e;
          } catch (t) {
            var e;
            throw (
              (null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error({ error: t }, "Error getting chain id"),
              t)
            );
          }
        }
        async getSocialRedirectUri(e) {
          try {
            return (
              this.w3mFrame.initFrame(),
              this.appEvent({
                type: o.s1.APP_GET_SOCIAL_REDIRECT_URI,
                payload: e,
              })
            );
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error(
                  { error: a },
                  "Error getting social redirect uri"
                ),
              a)
            );
          }
        }
        async updateEmail(e) {
          try {
            const t = await this.appEvent({
              type: o.s1.APP_UPDATE_EMAIL,
              payload: e,
            });
            return this.setNewLastEmailLoginTime(), t;
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error updating email"),
              a)
            );
          }
        }
        async updateEmailPrimaryOtp(e) {
          try {
            return this.appEvent({
              type: o.s1.APP_UPDATE_EMAIL_PRIMARY_OTP,
              payload: e,
            });
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error(
                  { error: a },
                  "Error updating email primary otp"
                ),
              a)
            );
          }
        }
        async updateEmailSecondaryOtp(e) {
          try {
            const t = await this.appEvent({
              type: o.s1.APP_UPDATE_EMAIL_SECONDARY_OTP,
              payload: e,
            });
            return this.setLoginSuccess(t.newEmail), t;
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error(
                  { error: a },
                  "Error updating email secondary otp"
                ),
              a)
            );
          }
        }
        async syncTheme(e) {
          try {
            return this.appEvent({ type: o.s1.APP_SYNC_THEME, payload: e });
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error syncing theme"),
              a)
            );
          }
        }
        async syncDappData(e) {
          try {
            return this.appEvent({ type: o.s1.APP_SYNC_DAPP_DATA, payload: e });
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error syncing dapp data"),
              a)
            );
          }
        }
        async getSmartAccountEnabledNetworks() {
          try {
            const e = await this.appEvent({
              type: o.s1.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS,
            });
            return (
              this.persistSmartAccountEnabledNetworks(
                e.smartAccountEnabledNetworks
              ),
              e
            );
          } catch (t) {
            var e;
            throw (
              (this.persistSmartAccountEnabledNetworks([]),
              null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error(
                  { error: t },
                  "Error getting smart account enabled networks"
                ),
              t)
            );
          }
        }
        async setPreferredAccount(e) {
          try {
            return this.appEvent({
              type: o.s1.APP_SET_PREFERRED_ACCOUNT,
              payload: { type: e },
            });
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error setting preferred account"),
              a)
            );
          }
        }
        async connect(e) {
          try {
            const t =
                (null === e || void 0 === e ? void 0 : e.chainId) ||
                this.getLastUsedChainId() ||
                1,
              a = await this.getUser({
                chainId: t,
                preferredAccountType:
                  null === e || void 0 === e ? void 0 : e.preferredAccountType,
              });
            return (
              this.setLoginSuccess(a.email),
              this.setLastUsedChainId(a.chainId),
              (this.user = a),
              a
            );
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error connecting"),
              a)
            );
          }
        }
        async getUser(e) {
          try {
            const t =
                (null === e || void 0 === e ? void 0 : e.chainId) ||
                this.getLastUsedChainId() ||
                1,
              a = await this.appEvent({
                type: o.s1.APP_GET_USER,
                payload: { ...e, chainId: t },
              });
            return (this.user = a), a;
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error connecting"),
              a)
            );
          }
        }
        async connectSocial(e) {
          try {
            this.w3mFrame.initFrame();
            const t = await this.appEvent({
              type: o.s1.APP_CONNECT_SOCIAL,
              payload: { uri: e },
            });
            return t.userName && this.setSocialLoginSuccess(t.userName), t;
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error connecting social"),
              a)
            );
          }
        }
        async getFarcasterUri() {
          try {
            this.w3mFrame.initFrame();
            return await this.appEvent({ type: o.s1.APP_GET_FARCASTER_URI });
          } catch (t) {
            var e;
            throw (
              (null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error({ error: t }, "Error getting farcaster uri"),
              t)
            );
          }
        }
        async connectFarcaster() {
          try {
            const e = await this.appEvent({ type: o.s1.APP_CONNECT_FARCASTER });
            return e.userName && this.setSocialLoginSuccess(e.userName), e;
          } catch (t) {
            var e;
            throw (
              (null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error({ error: t }, "Error connecting farcaster"),
              t)
            );
          }
        }
        async switchNetwork(e) {
          try {
            const t = await this.appEvent({
              type: o.s1.APP_SWITCH_NETWORK,
              payload: { chainId: e },
            });
            return this.setLastUsedChainId(t.chainId), t;
          } catch (a) {
            var t;
            throw (
              (null === (t = this.w3mLogger) ||
                void 0 === t ||
                t.logger.error({ error: a }, "Error switching network"),
              a)
            );
          }
        }
        async disconnect() {
          try {
            const e = await this.appEvent({ type: o.s1.APP_SIGN_OUT });
            return this.deleteAuthLoginCache(), e;
          } catch (t) {
            var e;
            throw (
              (null === (e = this.w3mLogger) ||
                void 0 === e ||
                e.logger.error({ error: t }, "Error disconnecting"),
              t)
            );
          }
        }
        async request(e) {
          try {
            var t, a;
            if (o.Vl.GET_CHAIN_ID === e.method)
              return this.getLastUsedChainId();
            null === (t = this.rpcRequestHandler) ||
              void 0 === t ||
              t.call(this, e);
            const r = await this.appEvent({
              type: o.s1.APP_RPC_REQUEST,
              payload: e,
            });
            return (
              null === (a = this.rpcSuccessHandler) ||
                void 0 === a ||
                a.call(this, r, e),
              r
            );
          } catch (i) {
            var r, n;
            throw (
              (null === (r = this.rpcErrorHandler) ||
                void 0 === r ||
                r.call(this, i, e),
              null === (n = this.w3mLogger) ||
                void 0 === n ||
                n.logger.error({ error: i }, "Error requesting"),
              i)
            );
          }
        }
        onRpcRequest(e) {
          this.rpcRequestHandler = e;
        }
        onRpcSuccess(e) {
          this.rpcSuccessHandler = e;
        }
        onRpcError(e) {
          this.rpcErrorHandler = e;
        }
        onIsConnected(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === o.s1.FRAME_IS_CONNECTED_SUCCESS &&
              t.payload.isConnected &&
              e();
          });
        }
        onNotConnected(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === o.s1.FRAME_IS_CONNECTED_ERROR && e(),
              t.type !== o.s1.FRAME_IS_CONNECTED_SUCCESS ||
                t.payload.isConnected ||
                e();
          });
        }
        onConnect(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === o.s1.FRAME_GET_USER_SUCCESS && e(t.payload);
          });
        }
        onSocialConnected(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === o.s1.FRAME_CONNECT_SOCIAL_SUCCESS && e(t.payload);
          });
        }
        async getCapabilities() {
          try {
            return (
              (await this.request({ method: "wallet_getCapabilities" })) || {}
            );
          } catch {
            return {};
          }
        }
        onSetPreferredAccount(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === o.s1.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS
              ? e(t.payload)
              : t.type === o.s1.FRAME_SET_PREFERRED_ACCOUNT_ERROR &&
                e({ type: o.Vl.ACCOUNT_TYPES.EOA });
          });
        }
        onGetSmartAccountEnabledNetworks(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === o.s1.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS
              ? e(t.payload.smartAccountEnabledNetworks)
              : t.type ===
                  o.s1.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR && e([]);
          });
        }
        getAvailableChainIds() {
          return Object.keys(this.w3mFrame.networks);
        }
        rejectRpcRequests() {
          try {
            this.openRpcRequests.forEach((e) => {
              let { abortController: t, method: a } = e;
              o.Vl.SAFE_RPC_METHODS.includes(a) || t.abort();
            }),
              (this.openRpcRequests = []);
          } catch (t) {
            var e;
            null === (e = this.w3mLogger) ||
              void 0 === e ||
              e.logger.error({ error: t }, "Error aborting RPC request");
          }
        }
        async appEvent(e) {
          let t;
          function a(e) {
            return e.replace("@w3m-app/", "");
          }
          await this.w3mFrame.frameLoadPromise;
          const r = new AbortController(),
            n = a(e.type);
          return (
            [
              o.s1.APP_CONNECT_EMAIL,
              o.s1.APP_CONNECT_DEVICE,
              o.s1.APP_CONNECT_OTP,
              o.s1.APP_CONNECT_SOCIAL,
              o.s1.APP_GET_SOCIAL_REDIRECT_URI,
            ]
              .map(a)
              .includes(n) &&
              (t = setTimeout(() => {
                var e;
                null === (e = this.onTimeout) || void 0 === e || e.call(this),
                  r.abort();
              }, 3e4)),
            new Promise((a, o) => {
              var i, s, c;
              const l = Math.random().toString(36).substring(7);
              if (
                (null === (i = this.w3mLogger) ||
                  void 0 === i ||
                  null === (s = (c = i.logger).info) ||
                  void 0 === s ||
                  s.call(c, { event: e, id: l }, "Sending app event"),
                this.w3mFrame.events.postAppEvent({ ...e, id: l }),
                "RPC_REQUEST" === n)
              ) {
                const t = e;
                this.openRpcRequests = [
                  ...this.openRpcRequests,
                  { ...t.payload, abortController: r },
                ];
              }
              r.signal.addEventListener("abort", () => {
                "RPC_REQUEST" === n
                  ? o(new Error("Request was aborted"))
                  : "GET_FARCASTER_URI" !== n &&
                    o(new Error("Something went wrong"));
              }),
                this.w3mFrame.events.registerFrameEventHandler(
                  l,
                  (e) =>
                    (function (e, r) {
                      var i, s;
                      if (e.id === l)
                        if (
                          (null === r ||
                            void 0 === r ||
                            null === (i = (s = r.logger).info) ||
                            void 0 === i ||
                            i.call(
                              s,
                              { framEvent: e, id: l },
                              "Received frame response"
                            ),
                          e.type === `@w3m-frame/${n}_SUCCESS`)
                        )
                          t && clearTimeout(t),
                            "payload" in e && a(e.payload),
                            a(void 0);
                        else if (e.type === `@w3m-frame/${n}_ERROR`) {
                          var c;
                          t && clearTimeout(t),
                            "payload" in e &&
                              o(
                                new Error(
                                  (null === (c = e.payload) || void 0 === c
                                    ? void 0
                                    : c.message) || "An error occurred"
                                )
                              ),
                            o(new Error("An error occurred"));
                        }
                    })(e, this.w3mLogger),
                  r.signal
                );
            })
          );
        }
        setNewLastEmailLoginTime() {
          Le.o.set(o.s1.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
        }
        setSocialLoginSuccess(e) {
          Le.o.set(o.s1.SOCIAL_USERNAME, e);
        }
        setLoginSuccess(e) {
          e && Le.o.set(o.s1.EMAIL, e),
            Le.o.set(o.s1.EMAIL_LOGIN_USED_KEY, "true"),
            Le.o.delete(o.s1.LAST_EMAIL_LOGIN_TIME);
        }
        deleteAuthLoginCache() {
          Le.o.delete(o.s1.EMAIL_LOGIN_USED_KEY),
            Le.o.delete(o.s1.EMAIL),
            Le.o.delete(o.s1.LAST_USED_CHAIN_KEY),
            Le.o.delete(o.s1.SOCIAL_USERNAME);
        }
        setLastUsedChainId(e) {
          e && Le.o.set(o.s1.LAST_USED_CHAIN_KEY, String(e));
        }
        getLastUsedChainId() {
          var e;
          const t =
              null !== (e = Le.o.get(o.s1.LAST_USED_CHAIN_KEY)) && void 0 !== e
                ? e
                : void 0,
            a = Number(t);
          return isNaN(a) ? t : a;
        }
        persistSmartAccountEnabledNetworks(e) {
          Le.o.set(o.s1.SMART_ACCOUNT_ENABLED_NETWORKS, e.join(","));
        }
      }
      class Me {
        constructor() {}
        static getInstance(e) {
          let { projectId: t, chainId: a, enableLogger: r, onTimeout: o } = e;
          return (
            Me.instance ||
              (Me.instance = new We({
                projectId: t,
                chainId: a,
                enableLogger: r,
                onTimeout: o,
              })),
            Me.instance
          );
        }
      }
    },
    44753: (e, t, a) => {
      a.d(t, { U: () => m });
      a(99296);
      var r = a(10719),
        o = a(45511),
        n = a(23871),
        i = a(63157),
        s = a(73082),
        c = a(71898),
        l = a(37687),
        d = a(18933),
        u = a(458),
        p = a(67415),
        h = a(83454),
        v = a(16733);
      const m = {
        getSIWX: () => u.H.state.siwx,
        async initializeIfEnabled() {
          const e = u.H.state.siwx,
            t = i.W.getActiveCaipAddress();
          if (!e || !t) return;
          const [a, r, o] = t.split(":");
          if (i.W.checkIfSupportedNetwork(a))
            try {
              if ((await e.getSessions(`${a}:${r}`, o)).length) return;
              await d.W.open({ view: "SIWXSignMessage" });
            } catch (c) {
              var n;
              console.error("SIWXUtil:initializeIfEnabled", c),
                l.E.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_ERROR",
                  properties: this.getSIWXEventProperties(),
                }),
                await (null === (n = s.x._getClient()) || void 0 === n
                  ? void 0
                  : n.disconnect().catch(console.error)),
                p.I.reset("Connect"),
                h.P.showError(
                  "A problem occurred while trying initialize authentication"
                );
            }
        },
        async requestSignMessage() {
          const e = u.H.state.siwx,
            t = v.w.getPlainAddress(i.W.getActiveCaipAddress()),
            a = i.W.getActiveCaipNetwork(),
            o = s.x._getClient();
          if (!e) throw new Error("SIWX is not enabled");
          if (!t) throw new Error("No ActiveCaipAddress found");
          if (!a) throw new Error("No ActiveCaipNetwork or client found");
          if (!o) throw new Error("No ConnectionController client found");
          try {
            const n = await e.createMessage({
                chainId: a.caipNetworkId,
                accountAddress: t,
              }),
              i = n.toString();
            c.a.getConnectorId(a.chainNamespace) === r.o.CONNECTOR_ID.AUTH &&
              p.I.pushTransactionStack({ view: null, goBack: !1, replace: !0 });
            const s = await o.signMessage(i);
            await e.addSession({ data: n, message: i, signature: s }),
              d.W.close(),
              l.E.sendEvent({
                type: "track",
                event: "SIWX_AUTH_SUCCESS",
                properties: this.getSIWXEventProperties(),
              });
          } catch (n) {
            const e = this.getSIWXEventProperties();
            (d.W.state.open && "ApproveTransaction" !== p.I.state.view) ||
              (await d.W.open({ view: "SIWXSignMessage" })),
              e.isSmartAccount
                ? h.P.showError(
                    "This application might not support Smart Accounts"
                  )
                : h.P.showError("Signature declined"),
              l.E.sendEvent({
                type: "track",
                event: "SIWX_AUTH_ERROR",
                properties: e,
              }),
              console.error("SWIXUtil:requestSignMessage", n);
          }
        },
        async cancelSignMessage() {
          try {
            var e;
            const t = this.getSIWX();
            (
              null === t ||
              void 0 === t ||
              null === (e = t.getRequired) ||
              void 0 === e
                ? void 0
                : e.call(t)
            )
              ? await s.x.disconnect()
              : d.W.close(),
              p.I.reset("Connect"),
              l.E.sendEvent({
                event: "CLICK_CANCEL_SIWX",
                type: "track",
                properties: this.getSIWXEventProperties(),
              });
          } catch (t) {
            console.error("SIWXUtil:cancelSignMessage", t);
          }
        },
        async getSessions() {
          const e = u.H.state.siwx,
            t = v.w.getPlainAddress(i.W.getActiveCaipAddress()),
            a = i.W.getActiveCaipNetwork();
          return e && t && a ? e.getSessions(a.caipNetworkId, t) : [];
        },
        async isSIWXCloseDisabled() {
          const e = this.getSIWX();
          if (e) {
            const a = "ApproveTransaction" === p.I.state.view,
              r = "SIWXSignMessage" === p.I.state.view;
            var t;
            if (a || r)
              return (
                (null === (t = e.getRequired) || void 0 === t
                  ? void 0
                  : t.call(e)) && 0 === (await this.getSessions()).length
              );
          }
          return !1;
        },
        async universalProviderAuthenticate(e) {
          var t, a, r;
          let { universalProvider: o, chains: s, methods: c } = e;
          const d = m.getSIWX(),
            u = new Set(s.map((e) => e.split(":")[0]));
          if (!d || 1 !== u.size || !u.has("eip155")) return !1;
          const p = await d.createMessage({
              chainId:
                (null === (t = i.W.getActiveCaipNetwork()) || void 0 === t
                  ? void 0
                  : t.caipNetworkId) || "",
              accountAddress: "",
            }),
            v = await o.authenticate({
              nonce: p.nonce,
              domain: p.domain,
              uri: p.uri,
              exp: p.expirationTime,
              iat: p.issuedAt,
              nbf: p.notBefore,
              requestId: p.requestId,
              version: p.version,
              resources: p.resources,
              statement: p.statement,
              chainId: p.chainId,
              methods: c,
              chains: [p.chainId, ...s.filter((e) => e !== p.chainId)],
            });
          if (
            (h.P.showLoading("Authenticating...", { autoClose: !1 }),
            n.U.setConnectedWalletInfo(
              {
                ...v.session.peer.metadata,
                name: v.session.peer.metadata.name,
                icon:
                  null === (a = v.session.peer.metadata.icons) || void 0 === a
                    ? void 0
                    : a[0],
                type: "WALLET_CONNECT",
              },
              Array.from(u)[0]
            ),
            null !== v &&
              void 0 !== v &&
              null !== (r = v.auths) &&
              void 0 !== r &&
              r.length)
          ) {
            const e = v.auths.map((e) => {
              const t = o.client.formatAuthMessage({
                request: e.p,
                iss: e.p.iss,
              });
              return {
                data: {
                  ...e.p,
                  accountAddress: e.p.iss.split(":").slice(-1).join(""),
                  chainId: e.p.iss.split(":").slice(2, 4).join(":"),
                  uri: e.p.aud,
                  version: e.p.version || p.version,
                  expirationTime: e.p.exp,
                  issuedAt: e.p.iat,
                  notBefore: e.p.nbf,
                },
                message: t,
                signature: e.s.s,
                cacao: e,
              };
            });
            try {
              await d.setSessions(e),
                l.E.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_SUCCESS",
                  properties: m.getSIWXEventProperties(),
                });
            } catch (_) {
              throw (
                (console.error(
                  "SIWX:universalProviderAuth - failed to set sessions",
                  _
                ),
                l.E.sendEvent({
                  type: "track",
                  event: "SIWX_AUTH_ERROR",
                  properties: m.getSIWXEventProperties(),
                }),
                await o.disconnect().catch(console.error),
                _)
              );
            } finally {
              h.P.hide();
            }
          }
          return !0;
        },
        getSIWXEventProperties() {
          var e, t;
          const a = i.W.state.activeChain;
          return {
            network:
              (null === (e = i.W.state.activeCaipNetwork) || void 0 === e
                ? void 0
                : e.caipNetworkId) || "",
            isSmartAccount:
              (null === (t = n.U.state.preferredAccountTypes) || void 0 === t
                ? void 0
                : t[a]) === o.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
          };
        },
        async clearSessions() {
          const e = this.getSIWX();
          e && (await e.setSessions([]));
        },
      };
    },
    45511: (e, t, a) => {
      a.d(t, {
        OH: () => n,
        Vl: () => c,
        gS: () => i,
        hy: () => o,
        s1: () => s,
      });
      var r = a(52143);
      const o =
          ("undefined" !== typeof r
            ? {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_NOSTR_TOKEN_SEND_TO:
                  "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
                REACT_APP_NOSTR_MARKET_SEND_TO:
                  "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw",
                REACT_APP_NOSTR_AIRDROP_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_MINT_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_LOCK:
                  "npub1zm3a3da2a0qepq2l752sdtu8xzl5src8c82exrh9av2x2va8k3jsqqdccy",
                REACT_APP_MICRO_NODE_SEND_TO:
                  "npub1dh7jwjrv9xvpw6a7wtsxpje7fequ7tmjzpendr594yjeuk9ckhasuljnc6",
                REACT_APP_API_GraphQL_URL:
                  "https://graph.lnfi.network/api/graph_data",
                REACT_APP_QUERY_API_URL: "https://market-api.lnfi.network",
                REACT_APP_MICRO_NODE_API_URL: "https://micro-api.lnfi.network",
                REACT_APP_LN_DEX_URL: "https://www.ln.exchange/",
                REACT_APP_LN_SPOT_URL: "https://app.ln.exchange/",
                REACT_APP_LN_PERP_URL:
                  "https://app.ln.exchange/#/perpetual/btc-usdt",
                REACT_APP_LN_NODE_URL:
                  "https://devoflnnode.unift.xyz/  // to do",
                REACT_APP_USDT_CONTRACT_ADDR:
                  "0xfad6367E97217cC51b4cd838Cc086831f81d38C2",
                REACT_APP_BTC_SEND_TO_ADDR:
                  "bc1qzrgykyfuyredsgkw3zu4zkplkyxuv4na6mstp5",
                REACT_APP_CURRENT_ENV: "prod",
                REACT_APP_GRAPH_BASE: "",
                REACT_APP_TX: "https://mempool.space/tx/",
                REACT_APP_REG_TX: "https://mempool.space/tx/",
                REACT_APP_LIGHTNING: "universe.lightning.finance",
                REACT_APP_MEMOPOOL: "https://mempool.space",
                REACT_APP_GAS_ADDR:
                  "bc1prz29tcyq926tvgpskdkd037jrxvjxzmxwu2apssxnhy6gs7cmr8q6kex7v",
                REACT_APP_GAS_FEE: "100000",
                REACT_APP_TREASURY_ADDR:
                  "bc1ppyhr8t9hh6s7h774aj9ruugyujd3e76lmw2s3mx33flak72vk06qvm2j82",
                REACT_APP_TREASURY_FEE: "100000",
                REACT_APP_WITHDRAW_ADDR:
                  "tb1p8jqsuqz3t7uk38vq57tkr2x3yupkdfymwxlz274hh2qch52lvp3qtc4v52",
                REACT_APP_WITHDRAW_FEE: "1000",
                REACT_APP_QUOTE_TOKEN: "SATS",
                REACT_APP_QUOTE_UNIT: "100000000",
                REACT_APP_UNIVERSE_HOST: "universe.lnfi.network:10029",
                REACT_APP_DEPOSIT_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_WITHDRAW_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_IS_LIMIT_IP: "0",
                REACT_APP_NOSTR_SERVER: "wss://relay02.lnfi.network",
                REACT_APP_API_VALID_BRC20: "https://sign-api.unift.xyz",
                REACT_APP_IS_MAINNING: "0",
                REACT_APP_FAIRMINT_TOKEN: "TNA",
                REACT_APP_SWAP_TOKEN: "AIFI",
                REACT_APP_NOSTR_NODE_HOST:
                  "x6dpvaaxi462zyly2jzfippt3iivr4sxmctdhoelkxzukusmmfgbplad.onion:9735",
                REACT_APP_NOSTR_NODE_NPUBKEY:
                  "03bdaa035f786c6e80aa728eb9a21caf2126550b34c09021e57b2280ae9190457c",
                REACT_APP_ASSET_BASE_LINK:
                  "https://megalithic.me/taproot_assets_explorer?search=",
                REACT_APP_API_ORCAL_PRICE: "https://bridge-oracle.ln.exchange",
                REACT_APP_PARTNER_NUMBER: "1500",
                REACT_APP_PARTNER_TOKEN: "TREAT",
                REACT_APP_API_BORKER_URL: "https://broker.ln.exchange",
                REACT_APP_WAGMI_PROJECTID: "92461524d3cfcb3d78b38b5dbd6a6ce3",
                REACT_APP_ASTRA_API_URL: "https://api.astra-labs.io/",
                REACT_APP_MINTFEE_TOKEN: "USDT",
                REACT_APP_SPOT_API_URL: "https://test-spots-api.ln.exchange",
                REACT_APP_MINT_SERVICE_FEE_CREATE: "1000",
                REACT_APP_MINT_SERVICE_FEE_TOKEN_CREATE: "AIFI",
              }.NEXT_PUBLIC_SECURE_SITE_SDK_URL
            : void 0) || "https://secure.walletconnect.org/sdk",
        n =
          ("undefined" !== typeof r
            ? {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_NOSTR_TOKEN_SEND_TO:
                  "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
                REACT_APP_NOSTR_MARKET_SEND_TO:
                  "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw",
                REACT_APP_NOSTR_AIRDROP_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_MINT_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_LOCK:
                  "npub1zm3a3da2a0qepq2l752sdtu8xzl5src8c82exrh9av2x2va8k3jsqqdccy",
                REACT_APP_MICRO_NODE_SEND_TO:
                  "npub1dh7jwjrv9xvpw6a7wtsxpje7fequ7tmjzpendr594yjeuk9ckhasuljnc6",
                REACT_APP_API_GraphQL_URL:
                  "https://graph.lnfi.network/api/graph_data",
                REACT_APP_QUERY_API_URL: "https://market-api.lnfi.network",
                REACT_APP_MICRO_NODE_API_URL: "https://micro-api.lnfi.network",
                REACT_APP_LN_DEX_URL: "https://www.ln.exchange/",
                REACT_APP_LN_SPOT_URL: "https://app.ln.exchange/",
                REACT_APP_LN_PERP_URL:
                  "https://app.ln.exchange/#/perpetual/btc-usdt",
                REACT_APP_LN_NODE_URL:
                  "https://devoflnnode.unift.xyz/  // to do",
                REACT_APP_USDT_CONTRACT_ADDR:
                  "0xfad6367E97217cC51b4cd838Cc086831f81d38C2",
                REACT_APP_BTC_SEND_TO_ADDR:
                  "bc1qzrgykyfuyredsgkw3zu4zkplkyxuv4na6mstp5",
                REACT_APP_CURRENT_ENV: "prod",
                REACT_APP_GRAPH_BASE: "",
                REACT_APP_TX: "https://mempool.space/tx/",
                REACT_APP_REG_TX: "https://mempool.space/tx/",
                REACT_APP_LIGHTNING: "universe.lightning.finance",
                REACT_APP_MEMOPOOL: "https://mempool.space",
                REACT_APP_GAS_ADDR:
                  "bc1prz29tcyq926tvgpskdkd037jrxvjxzmxwu2apssxnhy6gs7cmr8q6kex7v",
                REACT_APP_GAS_FEE: "100000",
                REACT_APP_TREASURY_ADDR:
                  "bc1ppyhr8t9hh6s7h774aj9ruugyujd3e76lmw2s3mx33flak72vk06qvm2j82",
                REACT_APP_TREASURY_FEE: "100000",
                REACT_APP_WITHDRAW_ADDR:
                  "tb1p8jqsuqz3t7uk38vq57tkr2x3yupkdfymwxlz274hh2qch52lvp3qtc4v52",
                REACT_APP_WITHDRAW_FEE: "1000",
                REACT_APP_QUOTE_TOKEN: "SATS",
                REACT_APP_QUOTE_UNIT: "100000000",
                REACT_APP_UNIVERSE_HOST: "universe.lnfi.network:10029",
                REACT_APP_DEPOSIT_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_WITHDRAW_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_IS_LIMIT_IP: "0",
                REACT_APP_NOSTR_SERVER: "wss://relay02.lnfi.network",
                REACT_APP_API_VALID_BRC20: "https://sign-api.unift.xyz",
                REACT_APP_IS_MAINNING: "0",
                REACT_APP_FAIRMINT_TOKEN: "TNA",
                REACT_APP_SWAP_TOKEN: "AIFI",
                REACT_APP_NOSTR_NODE_HOST:
                  "x6dpvaaxi462zyly2jzfippt3iivr4sxmctdhoelkxzukusmmfgbplad.onion:9735",
                REACT_APP_NOSTR_NODE_NPUBKEY:
                  "03bdaa035f786c6e80aa728eb9a21caf2126550b34c09021e57b2280ae9190457c",
                REACT_APP_ASSET_BASE_LINK:
                  "https://megalithic.me/taproot_assets_explorer?search=",
                REACT_APP_API_ORCAL_PRICE: "https://bridge-oracle.ln.exchange",
                REACT_APP_PARTNER_NUMBER: "1500",
                REACT_APP_PARTNER_TOKEN: "TREAT",
                REACT_APP_API_BORKER_URL: "https://broker.ln.exchange",
                REACT_APP_WAGMI_PROJECTID: "92461524d3cfcb3d78b38b5dbd6a6ce3",
                REACT_APP_ASTRA_API_URL: "https://api.astra-labs.io/",
                REACT_APP_MINTFEE_TOKEN: "USDT",
                REACT_APP_SPOT_API_URL: "https://test-spots-api.ln.exchange",
                REACT_APP_MINT_SERVICE_FEE_CREATE: "1000",
                REACT_APP_MINT_SERVICE_FEE_TOKEN_CREATE: "AIFI",
              }.NEXT_PUBLIC_DEFAULT_LOG_LEVEL
            : void 0) || "error",
        i =
          ("undefined" !== typeof r
            ? {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_NOSTR_TOKEN_SEND_TO:
                  "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
                REACT_APP_NOSTR_MARKET_SEND_TO:
                  "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw",
                REACT_APP_NOSTR_AIRDROP_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_MINT_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_LOCK:
                  "npub1zm3a3da2a0qepq2l752sdtu8xzl5src8c82exrh9av2x2va8k3jsqqdccy",
                REACT_APP_MICRO_NODE_SEND_TO:
                  "npub1dh7jwjrv9xvpw6a7wtsxpje7fequ7tmjzpendr594yjeuk9ckhasuljnc6",
                REACT_APP_API_GraphQL_URL:
                  "https://graph.lnfi.network/api/graph_data",
                REACT_APP_QUERY_API_URL: "https://market-api.lnfi.network",
                REACT_APP_MICRO_NODE_API_URL: "https://micro-api.lnfi.network",
                REACT_APP_LN_DEX_URL: "https://www.ln.exchange/",
                REACT_APP_LN_SPOT_URL: "https://app.ln.exchange/",
                REACT_APP_LN_PERP_URL:
                  "https://app.ln.exchange/#/perpetual/btc-usdt",
                REACT_APP_LN_NODE_URL:
                  "https://devoflnnode.unift.xyz/  // to do",
                REACT_APP_USDT_CONTRACT_ADDR:
                  "0xfad6367E97217cC51b4cd838Cc086831f81d38C2",
                REACT_APP_BTC_SEND_TO_ADDR:
                  "bc1qzrgykyfuyredsgkw3zu4zkplkyxuv4na6mstp5",
                REACT_APP_CURRENT_ENV: "prod",
                REACT_APP_GRAPH_BASE: "",
                REACT_APP_TX: "https://mempool.space/tx/",
                REACT_APP_REG_TX: "https://mempool.space/tx/",
                REACT_APP_LIGHTNING: "universe.lightning.finance",
                REACT_APP_MEMOPOOL: "https://mempool.space",
                REACT_APP_GAS_ADDR:
                  "bc1prz29tcyq926tvgpskdkd037jrxvjxzmxwu2apssxnhy6gs7cmr8q6kex7v",
                REACT_APP_GAS_FEE: "100000",
                REACT_APP_TREASURY_ADDR:
                  "bc1ppyhr8t9hh6s7h774aj9ruugyujd3e76lmw2s3mx33flak72vk06qvm2j82",
                REACT_APP_TREASURY_FEE: "100000",
                REACT_APP_WITHDRAW_ADDR:
                  "tb1p8jqsuqz3t7uk38vq57tkr2x3yupkdfymwxlz274hh2qch52lvp3qtc4v52",
                REACT_APP_WITHDRAW_FEE: "1000",
                REACT_APP_QUOTE_TOKEN: "SATS",
                REACT_APP_QUOTE_UNIT: "100000000",
                REACT_APP_UNIVERSE_HOST: "universe.lnfi.network:10029",
                REACT_APP_DEPOSIT_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_WITHDRAW_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_IS_LIMIT_IP: "0",
                REACT_APP_NOSTR_SERVER: "wss://relay02.lnfi.network",
                REACT_APP_API_VALID_BRC20: "https://sign-api.unift.xyz",
                REACT_APP_IS_MAINNING: "0",
                REACT_APP_FAIRMINT_TOKEN: "TNA",
                REACT_APP_SWAP_TOKEN: "AIFI",
                REACT_APP_NOSTR_NODE_HOST:
                  "x6dpvaaxi462zyly2jzfippt3iivr4sxmctdhoelkxzukusmmfgbplad.onion:9735",
                REACT_APP_NOSTR_NODE_NPUBKEY:
                  "03bdaa035f786c6e80aa728eb9a21caf2126550b34c09021e57b2280ae9190457c",
                REACT_APP_ASSET_BASE_LINK:
                  "https://megalithic.me/taproot_assets_explorer?search=",
                REACT_APP_API_ORCAL_PRICE: "https://bridge-oracle.ln.exchange",
                REACT_APP_PARTNER_NUMBER: "1500",
                REACT_APP_PARTNER_TOKEN: "TREAT",
                REACT_APP_API_BORKER_URL: "https://broker.ln.exchange",
                REACT_APP_WAGMI_PROJECTID: "92461524d3cfcb3d78b38b5dbd6a6ce3",
                REACT_APP_ASTRA_API_URL: "https://api.astra-labs.io/",
                REACT_APP_MINTFEE_TOKEN: "USDT",
                REACT_APP_SPOT_API_URL: "https://test-spots-api.ln.exchange",
                REACT_APP_MINT_SERVICE_FEE_CREATE: "1000",
                REACT_APP_MINT_SERVICE_FEE_TOKEN_CREATE: "AIFI",
              }.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION
            : void 0) || "4",
        s = {
          APP_EVENT_KEY: "@w3m-app/",
          FRAME_EVENT_KEY: "@w3m-frame/",
          RPC_METHOD_KEY: "RPC_",
          STORAGE_KEY: "@appkit-wallet/",
          SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
          EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
          LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
          LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
          EMAIL: "EMAIL",
          PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
          SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
          SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
          SOCIAL_USERNAME: "SOCIAL_USERNAME",
          APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
          APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
          APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
          APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
          APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
          APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
          APP_GET_USER: "@w3m-app/GET_USER",
          APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
          APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
          APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
          APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
          APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
          APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
          APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
          APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
          APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
          APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
          APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:
            "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
          APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
          APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
          APP_CONNECT_FARCASTER: "@w3m-app/CONNECT_FARCASTER",
          APP_GET_FARCASTER_URI: "@w3m-app/GET_FARCASTER_URI",
          APP_RELOAD: "@w3m-app/RELOAD",
          FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
          FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
          FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
          FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
          FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
          FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
          FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
          FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
          FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
          FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
          FRAME_CONNECT_FARCASTER_SUCCESS:
            "@w3m-frame/CONNECT_FARCASTER_SUCCESS",
          FRAME_CONNECT_FARCASTER_ERROR: "@w3m-frame/CONNECT_FARCASTER_ERROR",
          FRAME_GET_FARCASTER_URI_SUCCESS:
            "@w3m-frame/GET_FARCASTER_URI_SUCCESS",
          FRAME_GET_FARCASTER_URI_ERROR: "@w3m-frame/GET_FARCASTER_URI_ERROR",
          FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:
            "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
          FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:
            "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
          FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
          FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
          FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
          FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
          FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
          FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
          FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
          FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
          FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
          FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
          FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
          FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
          FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
          FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
            "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
          FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
            "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
          FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
            "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
          FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
            "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
          FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
          FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
          FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
          FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
          FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
            "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
          FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
            "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
          FRAME_INIT_SMART_ACCOUNT_SUCCESS:
            "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
          FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
          FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
            "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
          FRAME_SET_PREFERRED_ACCOUNT_ERROR:
            "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
          FRAME_READY: "@w3m-frame/READY",
          FRAME_RELOAD_SUCCESS: "@w3m-frame/RELOAD_SUCCESS",
          FRAME_RELOAD_ERROR: "@w3m-frame/RELOAD_ERROR",
          RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
          RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
          RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT",
        },
        c = {
          SAFE_RPC_METHODS: [
            "eth_accounts",
            "eth_blockNumber",
            "eth_call",
            "eth_chainId",
            "eth_estimateGas",
            "eth_feeHistory",
            "eth_gasPrice",
            "eth_getAccount",
            "eth_getBalance",
            "eth_getBlockByHash",
            "eth_getBlockByNumber",
            "eth_getBlockReceipts",
            "eth_getBlockTransactionCountByHash",
            "eth_getBlockTransactionCountByNumber",
            "eth_getCode",
            "eth_getFilterChanges",
            "eth_getFilterLogs",
            "eth_getLogs",
            "eth_getProof",
            "eth_getStorageAt",
            "eth_getTransactionByBlockHashAndIndex",
            "eth_getTransactionByBlockNumberAndIndex",
            "eth_getTransactionByHash",
            "eth_getTransactionCount",
            "eth_getTransactionReceipt",
            "eth_getUncleCountByBlockHash",
            "eth_getUncleCountByBlockNumber",
            "eth_maxPriorityFeePerGas",
            "eth_newBlockFilter",
            "eth_newFilter",
            "eth_newPendingTransactionFilter",
            "eth_sendRawTransaction",
            "eth_syncing",
            "eth_uninstallFilter",
            "wallet_getCapabilities",
            "wallet_getCallsStatus",
            "eth_getUserOperationReceipt",
            "eth_estimateUserOperationGas",
            "eth_getUserOperationByHash",
            "eth_supportedEntryPoints",
            "wallet_getAssets",
          ],
          NOT_SAFE_RPC_METHODS: [
            "personal_sign",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "solana_signMessage",
            "solana_signTransaction",
            "solana_signAllTransactions",
            "solana_signAndSendTransaction",
            "wallet_sendCalls",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "eth_sendUserOperation",
          ],
          GET_CHAIN_ID: "eth_chainId",
          RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
          RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
          ACCOUNT_TYPES: { EOA: "eoa", SMART_ACCOUNT: "smartAccount" },
        };
    },
    52467: (e, t, a) => {
      a.d(t, { W: () => p });
      var r = a(59586),
        o = a(45511),
        n = a(23871),
        i = a(62550),
        s = a(63157),
        c = a(37687),
        l = a(458),
        d = a(83454);
      const u = (0, r.BX)({
          transactions: [],
          coinbaseTransactions: {},
          transactionsByYear: {},
          lastNetworkInView: void 0,
          loading: !1,
          empty: !1,
          next: void 0,
        }),
        p = {
          state: u,
          subscribe: (e) => (0, r.B1)(u, () => e(u)),
          setLastNetworkInView(e) {
            u.lastNetworkInView = e;
          },
          async fetchTransactions(e, t) {
            if (!e)
              throw new Error(
                "Transactions can't be fetched without an accountAddress"
              );
            u.loading = !0;
            try {
              var a;
              const r = await i.T.fetchTransactions({
                  account: e,
                  cursor: u.next,
                  onramp: t,
                  cache: "coinbase" === t ? "no-cache" : void 0,
                  chainId:
                    null === (a = s.W.state.activeCaipNetwork) || void 0 === a
                      ? void 0
                      : a.caipNetworkId,
                }),
                o = this.filterSpamTransactions(r.data),
                n = this.filterByConnectedChain(o),
                c = [...u.transactions, ...n];
              (u.loading = !1),
                "coinbase" === t
                  ? (u.coinbaseTransactions =
                      this.groupTransactionsByYearAndMonth(
                        u.coinbaseTransactions,
                        r.data
                      ))
                  : ((u.transactions = c),
                    (u.transactionsByYear =
                      this.groupTransactionsByYearAndMonth(
                        u.transactionsByYear,
                        n
                      ))),
                (u.empty = 0 === c.length),
                (u.next = r.next ? r.next : void 0);
            } catch (p) {
              var r;
              const t = s.W.state.activeChain;
              c.E.sendEvent({
                type: "track",
                event: "ERROR_FETCH_TRANSACTIONS",
                properties: {
                  address: e,
                  projectId: l.H.state.projectId,
                  cursor: u.next,
                  isSmartAccount:
                    (null === (r = n.U.state.preferredAccountTypes) ||
                    void 0 === r
                      ? void 0
                      : r[t]) === o.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                },
              }),
                d.P.showError("Failed to fetch transactions"),
                (u.loading = !1),
                (u.empty = !0),
                (u.next = void 0);
            }
          },
          groupTransactionsByYearAndMonth() {
            const e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : []
              ).forEach((t) => {
                var a, r;
                const o = new Date(t.metadata.minedAt).getFullYear(),
                  n = new Date(t.metadata.minedAt).getMonth(),
                  i = null !== (a = e[o]) && void 0 !== a ? a : {},
                  s = (null !== (r = i[n]) && void 0 !== r ? r : []).filter(
                    (e) => e.id !== t.id
                  );
                e[o] = {
                  ...i,
                  [n]: [...s, t].sort(
                    (e, t) =>
                      new Date(t.metadata.minedAt).getTime() -
                      new Date(e.metadata.minedAt).getTime()
                  ),
                };
              }),
              e
            );
          },
          filterSpamTransactions: (e) =>
            e.filter(
              (e) =>
                !e.transfers.every((e) => {
                  var t;
                  return (
                    !0 ===
                    (null === (t = e.nft_info) || void 0 === t
                      ? void 0
                      : t.flags.is_spam)
                  );
                })
            ),
          filterByConnectedChain(e) {
            var t;
            const a =
              null === (t = s.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId;
            return e.filter((e) => e.metadata.chain === a);
          },
          clearCursor() {
            u.next = void 0;
          },
          resetTransactions() {
            (u.transactions = []),
              (u.transactionsByYear = {}),
              (u.lastNetworkInView = void 0),
              (u.loading = !1),
              (u.empty = !1),
              (u.next = void 0);
          },
        };
    },
    52590: (e, t, a) => {
      a.d(t, { F: () => r.F });
      var r = a(79631);
    },
    53551: (e, t, a) => {
      a.d(t, { t: () => l });
      var r = a(23871),
        o = a(62550),
        n = a(63157),
        i = a(73082),
        s = a(25966);
      const c = {
          createBalance(e, t) {
            const a = {
              name: e.metadata.name || "",
              symbol: e.metadata.symbol || "",
              decimals: e.metadata.decimals || 0,
              value: e.metadata.value || 0,
              price: e.metadata.price || 0,
              iconUrl: e.metadata.iconUrl || "",
            };
            return {
              name: a.name,
              symbol: a.symbol,
              chainId: t,
              address:
                "native" === e.address
                  ? void 0
                  : this.convertAddressToCAIP10Address(e.address, t),
              value: a.value,
              price: a.price,
              quantity: {
                decimals: a.decimals.toString(),
                numeric: this.convertHexToBalance({
                  hex: e.balance,
                  decimals: a.decimals,
                }),
              },
              iconUrl: a.iconUrl,
            };
          },
          convertHexToBalance(e) {
            let { hex: t, decimals: a } = e;
            return (0, s.J)(BigInt(t), a);
          },
          convertAddressToCAIP10Address: (e, t) => `${t}:${e}`,
          createCAIP2ChainId: (e, t) => `${t}:${parseInt(e, 16)}`,
          getChainIdHexFromCAIP2ChainId(e) {
            const t = e.split(":");
            if (t.length < 2 || !t[1]) return "0x0";
            const a = t[1],
              r = parseInt(a, 10);
            return isNaN(r) ? "0x0" : `0x${r.toString(16)}`;
          },
          isWalletGetAssetsResponse(e) {
            return (
              "object" === typeof e &&
              null !== e &&
              Object.values(e).every(
                (e) => Array.isArray(e) && e.every((e) => this.isValidAsset(e))
              )
            );
          },
          isValidAsset: (e) =>
            "object" === typeof e &&
            null !== e &&
            "string" === typeof e.address &&
            "string" === typeof e.balance &&
            ("ERC20" === e.type || "NATIVE" === e.type) &&
            "object" === typeof e.metadata &&
            null !== e.metadata &&
            "string" === typeof e.metadata.name &&
            "string" === typeof e.metadata.symbol &&
            "number" === typeof e.metadata.decimals &&
            "number" === typeof e.metadata.price &&
            "string" === typeof e.metadata.iconUrl,
        },
        l = {
          async getMyTokensWithBalance(e) {
            const t = r.U.state.address,
              a = n.W.state.activeCaipNetwork;
            if (!t || !a) return [];
            if ("eip155" === a.chainNamespace) {
              const e = await this.getEIP155Balances(t, a);
              if (e) return this.filterLowQualityTokens(e);
            }
            const i = await o.T.getBalance(t, a.caipNetworkId, e);
            return this.filterLowQualityTokens(i.balances);
          },
          async getEIP155Balances(e, t) {
            try {
              var a;
              const r = c.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),
                o = await i.x.getCapabilities(e);
              if (
                null === o ||
                void 0 === o ||
                null === (a = o[r]) ||
                void 0 === a ||
                null === (a = a.assetDiscovery) ||
                void 0 === a ||
                !a.supported
              )
                return null;
              const n = await i.x.walletGetAssets({
                account: e,
                chainFilter: [r],
              });
              if (!c.isWalletGetAssetsResponse(n)) return null;
              return (n[r] || []).map((e) =>
                c.createBalance(e, t.caipNetworkId)
              );
            } catch (r) {
              return null;
            }
          },
          filterLowQualityTokens: (e) =>
            e.filter((e) => "0" !== e.quantity.decimals),
          mapBalancesToSwapTokens: (e) =>
            (null === e || void 0 === e
              ? void 0
              : e.map((e) => ({
                  ...e,
                  address:
                    null !== e && void 0 !== e && e.address
                      ? e.address
                      : n.W.getActiveNetworkTokenAddress(),
                  decimals: parseInt(e.quantity.decimals, 10),
                  logoUri: e.iconUrl,
                  eip2612: !1,
                }))) || [],
        };
    },
    54002: (e, t, a) => {
      a.d(t, { K3: () => s, UF: () => n, fk: () => o, z4: () => i });
      class r extends Error {
        constructor(e, t) {
          super(e), (this.error = t);
        }
      }
      class o extends r {
        constructor() {
          super(...arguments), (this.name = "WalletAccountError");
        }
      }
      class n extends r {
        constructor() {
          super(...arguments), (this.name = "WalletSendTransactionError");
        }
      }
      class i extends r {
        constructor() {
          super(...arguments), (this.name = "WalletSignTransactionError");
        }
      }
      class s extends r {
        constructor() {
          super(...arguments), (this.name = "WalletSignMessageError");
        }
      }
    },
    54147: (e, t, a) => {
      a.d(t, { o: () => n });
      var r = a(45511),
        o = a(37769);
      const n = {
        set(e, t) {
          o.Q.isClient && localStorage.setItem(`${r.s1.STORAGE_KEY}${e}`, t);
        },
        get: (e) =>
          o.Q.isClient ? localStorage.getItem(`${r.s1.STORAGE_KEY}${e}`) : null,
        delete(e, t) {
          o.Q.isClient &&
            (t
              ? localStorage.removeItem(e)
              : localStorage.removeItem(`${r.s1.STORAGE_KEY}${e}`));
        },
      };
    },
    55639: (e, t, a) => {
      function r(e, t) {
        return "light" === t
          ? {
              "--w3m-accent":
                (null === e || void 0 === e ? void 0 : e["--w3m-accent"]) ||
                "hsla(231, 100%, 70%, 1)",
              "--w3m-background": "#fff",
            }
          : {
              "--w3m-accent":
                (null === e || void 0 === e ? void 0 : e["--w3m-accent"]) ||
                "hsla(230, 100%, 67%, 1)",
              "--w3m-background": "#121313",
            };
      }
      a.d(t, { o: () => r });
    },
    56236: (e, t, a) => {
      a.d(t, { G8: () => l, uP: () => d });
      var r = a(4198),
        o = a(63157),
        n = a(73082),
        i = a(71898),
        s = a(16733),
        c = a(21369);
      function l(e) {
        var t, a;
        const n = (0, r.s)(o.W.state),
          l =
            (null === e || void 0 === e ? void 0 : e.namespace) ||
            n.activeChain;
        if (!l)
          return {
            allAccounts: [],
            address: void 0,
            caipAddress: void 0,
            status: void 0,
            isConnected: !1,
            embeddedWalletInfo: void 0,
          };
        const d =
            null === (t = n.chains.get(l)) || void 0 === t
              ? void 0
              : t.accountState,
          u = i.a.getAuthConnector(l);
        return {
          allAccounts:
            (null === d || void 0 === d ? void 0 : d.allAccounts) || [],
          caipAddress: null === d || void 0 === d ? void 0 : d.caipAddress,
          address: s.w.getPlainAddress(
            null === d || void 0 === d ? void 0 : d.caipAddress
          ),
          isConnected: Boolean(
            null === d || void 0 === d ? void 0 : d.caipAddress
          ),
          status: null === d || void 0 === d ? void 0 : d.status,
          embeddedWalletInfo: u
            ? {
                user:
                  null !== d && void 0 !== d && d.user
                    ? { ...d.user, username: c.i.getConnectedSocialUsername() }
                    : void 0,
                authProvider:
                  (null === d || void 0 === d ? void 0 : d.socialProvider) ||
                  "email",
                accountType:
                  null === d ||
                  void 0 === d ||
                  null === (a = d.preferredAccountTypes) ||
                  void 0 === a
                    ? void 0
                    : a[l],
                isSmartAccountDeployed: Boolean(
                  null === d || void 0 === d ? void 0 : d.smartAccountDeployed
                ),
              }
            : void 0,
        };
      }
      function d() {
        return {
          disconnect: async function (e) {
            await n.x.disconnect(
              null === e || void 0 === e ? void 0 : e.namespace
            );
          },
        };
      }
    },
    57456: (e, t, a) => {
      a.d(t, { X: () => c });
      a(99296);
      var r = a(10719),
        o = a(63157),
        n = a(23871),
        i = a(59402),
        s = a(79631);
      class c {
        constructor(e) {
          (this.availableConnectors = []),
            (this.eventListeners = new Map()),
            (this.getCaipNetworks = (e) => o.W.getCaipNetworks(e)),
            e && this.construct(e);
        }
        construct(e) {
          (this.projectId = e.projectId),
            (this.namespace = e.namespace),
            (this.adapterType = e.adapterType);
        }
        get connectors() {
          return this.availableConnectors;
        }
        get networks() {
          return this.getCaipNetworks(this.namespace);
        }
        setAuthProvider(e) {
          this.addConnector({
            id: r.o.CONNECTOR_ID.AUTH,
            type: "AUTH",
            name: r.o.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId: i.L.ConnectorImageIds[r.o.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: [],
          });
        }
        addConnector() {
          const e = new Set();
          for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++)
            a[r] = arguments[r];
          (this.availableConnectors = [
            ...a,
            ...this.availableConnectors,
          ].filter((t) => !e.has(t.id) && (e.add(t.id), !0))),
            this.emit("connectors", this.availableConnectors);
        }
        setStatus(e, t) {
          n.U.setStatus(e, t);
        }
        on(e, t) {
          var a;
          this.eventListeners.has(e) || this.eventListeners.set(e, new Set()),
            null === (a = this.eventListeners.get(e)) ||
              void 0 === a ||
              a.add(t);
        }
        off(e, t) {
          const a = this.eventListeners.get(e);
          a && a.delete(t);
        }
        removeAllEventListeners() {
          this.eventListeners.forEach((e) => {
            e.clear();
          });
        }
        emit(e, t) {
          const a = this.eventListeners.get(e);
          a && a.forEach((e) => e(t));
        }
        async connectWalletConnect(e) {
          const t = this.getWalletConnectConnector();
          return { clientId: (await t.connectWalletConnect()).clientId };
        }
        async switchNetwork(e) {
          const { caipNetwork: t, providerType: a } = e;
          if (!e.provider) return;
          const r = "provider" in e.provider ? e.provider.provider : e.provider;
          if ("WALLET_CONNECT" !== a) {
            if (r && "AUTH" === a) {
              var o;
              const e = r,
                a =
                  null === (o = n.U.state.preferredAccountTypes) || void 0 === o
                    ? void 0
                    : o[t.chainNamespace];
              await e.switchNetwork(t.caipNetworkId);
              const i = await e.getUser({
                chainId: t.caipNetworkId,
                preferredAccountType: a,
              });
              this.emit("switchNetwork", i);
            }
          } else r.setDefaultChain(t.caipNetworkId);
        }
        getWalletConnectConnector() {
          const e = this.connectors.find((e) => e instanceof s.F);
          if (!e) throw new Error("WalletConnectConnector not found");
          return e;
        }
      }
    },
    58313: (e, t, a) => {
      a.d(t, { f: () => m });
      var r = a(59586),
        o = a(86992);
      const n = 2147483648,
        i = {
          convertEVMChainIdToCoinType(e) {
            if (e >= n) throw new Error("Invalid chainId");
            return (n | e) >>> 0;
          },
        };
      var s = a(21369),
        c = a(23871),
        l = a(62550),
        d = a(63157),
        u = a(73082),
        p = a(71898),
        h = a(67415);
      const v = (0, r.BX)({ suggestions: [], loading: !1 }),
        m = {
          state: v,
          subscribe: (e) => (0, r.B1)(v, () => e(v)),
          subscribeKey: (e, t) => (0, o.u$)(v, e, t),
          async resolveName(e) {
            try {
              return await l.T.lookupEnsName(e);
            } catch (a) {
              var t;
              throw new Error(
                (null === a ||
                void 0 === a ||
                null === (t = a.reasons) ||
                void 0 === t ||
                null === (t = t[0]) ||
                void 0 === t
                  ? void 0
                  : t.description) || "Error resolving name"
              );
            }
          },
          async isNameRegistered(e) {
            try {
              return await l.T.lookupEnsName(e), !0;
            } catch {
              return !1;
            }
          },
          async getSuggestions(e) {
            try {
              (v.loading = !0), (v.suggestions = []);
              const t = await l.T.getEnsNameSuggestions(e);
              return (
                (v.suggestions =
                  t.suggestions.map((e) => ({ ...e, name: e.name })) || []),
                v.suggestions
              );
            } catch (t) {
              const e = this.parseEnsApiError(
                t,
                "Error fetching name suggestions"
              );
              throw new Error(e);
            } finally {
              v.loading = !1;
            }
          },
          async getNamesForAddress(e) {
            try {
              if (!d.W.state.activeCaipNetwork) return [];
              const t = s.i.getEnsFromCacheForAddress(e);
              if (t) return t;
              const a = await l.T.reverseLookupEnsName({ address: e });
              return (
                s.i.updateEnsCache({
                  address: e,
                  ens: a,
                  timestamp: Date.now(),
                }),
                a
              );
            } catch (t) {
              const e = this.parseEnsApiError(
                t,
                "Error fetching names for address"
              );
              throw new Error(e);
            }
          },
          async registerName(e) {
            const t = d.W.state.activeCaipNetwork;
            if (!t) throw new Error("Network not found");
            const a = c.U.state.address,
              r = p.a.getAuthConnector();
            if (!a || !r)
              throw new Error("Address or auth connector not found");
            v.loading = !0;
            try {
              const r = JSON.stringify({
                name: e,
                attributes: {},
                timestamp: Math.floor(Date.now() / 1e3),
              });
              h.I.pushTransactionStack({
                view: "RegisterAccountNameSuccess",
                goBack: !1,
                replace: !0,
                onCancel() {
                  v.loading = !1;
                },
              });
              const o = await u.x.signMessage(r),
                n = t.id;
              if (!n) throw new Error("Network not found");
              const s = i.convertEVMChainIdToCoinType(Number(n));
              await l.T.registerEnsName({
                coinType: s,
                address: a,
                signature: o,
                message: r,
              }),
                c.U.setProfileName(e, t.chainNamespace),
                h.I.replace("RegisterAccountNameSuccess");
            } catch (o) {
              const t = this.parseEnsApiError(o, `Error registering name ${e}`);
              throw (h.I.replace("RegisterAccountName"), new Error(t));
            } finally {
              v.loading = !1;
            }
          },
          validateName: (e) => /^[a-zA-Z0-9-]{4,}$/u.test(e),
          parseEnsApiError(e, t) {
            var a;
            return (
              (null === e ||
              void 0 === e ||
              null === (a = e.reasons) ||
              void 0 === a ||
              null === (a = a[0]) ||
              void 0 === a
                ? void 0
                : a.description) || t
            );
          },
        };
    },
    59402: (e, t, a) => {
      a.d(t, { L: () => n });
      var r = a(10719),
        o = a(89623);
      const n = {
        ConnectorExplorerIds: {
          [r.o.CONNECTOR_ID.COINBASE]:
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          [r.o.CONNECTOR_ID.COINBASE_SDK]:
            "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          [r.o.CONNECTOR_ID.SAFE]:
            "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
          [r.o.CONNECTOR_ID.LEDGER]:
            "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
          [r.o.CONNECTOR_ID.OKX]:
            "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
          [o.o.METMASK_CONNECTOR_NAME]:
            "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
          [o.o.TRUST_CONNECTOR_NAME]:
            "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
          [o.o.SOLFLARE_CONNECTOR_NAME]:
            "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
          [o.o.PHANTOM_CONNECTOR_NAME]:
            "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
          [o.o.COIN98_CONNECTOR_NAME]:
            "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
          [o.o.MAGIC_EDEN_CONNECTOR_NAME]:
            "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
          [o.o.BACKPACK_CONNECTOR_NAME]:
            "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
          [o.o.BITGET_CONNECTOR_NAME]:
            "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
          [o.o.FRONTIER_CONNECTOR_NAME]:
            "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
          [o.o.XVERSE_CONNECTOR_NAME]:
            "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
          [o.o.LEATHER_CONNECTOR_NAME]:
            "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
        },
        NetworkImageIds: {
          1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
          42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
          43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
          56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
          250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
          10: "ab9c186a-c52f-464b-2906-ca59d760a400",
          137: "41d04d42-da3b-4453-8506-668cc0727900",
          5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
          295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
          11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
          84532: "a18a7ecd-e307-4360-4746-283182228e00",
          1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
          130: "2257980a-3463-48c6-cbac-a42d2a956e00",
          10143: "0a728e83-bacb-46db-7844-948f05434900",
          100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
          9001: "f926ff41-260d-4028-635e-91913fc28e00",
          324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
          314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
          4689: "34e68754-e536-40da-c153-6ef2e7188a00",
          1088: "3897a66d-40b9-4833-162f-a2c90531c900",
          1284: "161038da-44ae-4ec7-1208-0ea569454b00",
          1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
          7777777: "845c60df-d429-4991-e687-91ae45791600",
          42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
          8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
          1313161554: "3ff73439-a619-4894-9262-4470c773a100",
          2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
          2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
          80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
          2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
          "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
            "a1b58899-f671-4276-6a5e-56ca5bd59700",
          "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":
            "a1b58899-f671-4276-6a5e-56ca5bd59700",
          EtWTRABZaYq6iMfeYKouRu166VU2xqa1:
            "a1b58899-f671-4276-6a5e-56ca5bd59700",
          "000000000019d6689c085ae165831e93":
            "0b4838db-0161-4ffe-022d-532bf03dba00",
          "000000000933ea01ad0ee984209779ba":
            "39354064-d79b-420b-065d-f980c4b78200",
        },
        ConnectorImageIds: {
          [r.o.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
          [r.o.CONNECTOR_ID.COINBASE_SDK]:
            "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
          [r.o.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
          [r.o.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
          [r.o.CONNECTOR_ID.WALLET_CONNECT]:
            "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
          [r.o.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00",
        },
        ConnectorNamesMap: {
          [r.o.CONNECTOR_ID.INJECTED]: "Browser Wallet",
          [r.o.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
          [r.o.CONNECTOR_ID.COINBASE]: "Coinbase",
          [r.o.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
          [r.o.CONNECTOR_ID.LEDGER]: "Ledger",
          [r.o.CONNECTOR_ID.SAFE]: "Safe",
        },
        ConnectorTypesMap: {
          [r.o.CONNECTOR_ID.INJECTED]: "INJECTED",
          [r.o.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT",
          [r.o.CONNECTOR_ID.EIP6963]: "ANNOUNCED",
          [r.o.CONNECTOR_ID.AUTH]: "AUTH",
        },
        WalletConnectRpcChainIds: [
          1, 5, 11155111, 10, 420, 42161, 421613, 137, 80001, 42220, 1313161554,
          1313161555, 56, 97, 43114, 43113, 100, 8453, 84531, 7777777, 999, 324,
          280,
        ],
      };
    },
    60963: (e, t, a) => {
      a.d(t, { R: () => u });
      var r = a(27221),
        o = a(24649),
        n = a(10719),
        i = a(21369),
        s = a(63157),
        c = a(59402);
      function l(e, t) {
        const a = new URL("https://rpc.walletconnect.org/v1/");
        return (
          a.searchParams.set("chainId", e),
          a.searchParams.set("projectId", t),
          a.toString()
        );
      }
      const d = [
          "near:mainnet",
          "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          "eip155:1101",
          "eip155:56",
          "eip155:42161",
          "eip155:7777777",
          "eip155:59144",
          "eip155:324",
          "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          "eip155:5000",
          "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
          "eip155:80084",
          "eip155:5003",
          "eip155:100",
          "eip155:8453",
          "eip155:42220",
          "eip155:1313161555",
          "eip155:17000",
          "eip155:1",
          "eip155:300",
          "eip155:1313161554",
          "eip155:1329",
          "eip155:84532",
          "eip155:421614",
          "eip155:11155111",
          "eip155:8217",
          "eip155:43114",
          "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
          "eip155:999999999",
          "eip155:11155420",
          "eip155:80002",
          "eip155:97",
          "eip155:43113",
          "eip155:137",
          "eip155:10",
          "eip155:1301",
          "bip122:000000000019d6689c085ae165831e93",
          "bip122:000000000933ea01ad0ee984209779ba",
        ],
        u = {
          extendRpcUrlWithProjectId(e, t) {
            let a = !1;
            try {
              a = "rpc.walletconnect.org" === new URL(e).host;
            } catch (r) {
              a = !1;
            }
            if (a) {
              const a = new URL(e);
              return (
                a.searchParams.has("projectId") ||
                  a.searchParams.set("projectId", t),
                a.toString()
              );
            }
            return e;
          },
          isCaipNetwork: (e) => "chainNamespace" in e && "caipNetworkId" in e,
          getChainNamespace(e) {
            return this.isCaipNetwork(e) ? e.chainNamespace : n.o.CHAIN.EVM;
          },
          getCaipNetworkId(e) {
            return this.isCaipNetwork(e)
              ? e.caipNetworkId
              : `${n.o.CHAIN.EVM}:${e.id}`;
          },
          getDefaultRpcUrl(e, t, a) {
            var r;
            const o =
              null === (r = e.rpcUrls) ||
              void 0 === r ||
              null === (r = r.default) ||
              void 0 === r ||
              null === (r = r.http) ||
              void 0 === r
                ? void 0
                : r[0];
            return d.includes(t) ? l(t, a) : o || "";
          },
          extendCaipNetwork(e, t) {
            var a, r, o;
            let {
              customNetworkImageUrls: n,
              projectId: i,
              customRpcUrls: s,
            } = t;
            const l = this.getChainNamespace(e),
              d = this.getCaipNetworkId(e),
              u =
                null === (a = e.rpcUrls.default.http) || void 0 === a
                  ? void 0
                  : a[0],
              p = this.getDefaultRpcUrl(e, d, i),
              h =
                (null === e ||
                void 0 === e ||
                null === (r = e.rpcUrls) ||
                void 0 === r ||
                null === (r = r.chainDefault) ||
                void 0 === r ||
                null === (r = r.http) ||
                void 0 === r
                  ? void 0
                  : r[0]) || u,
              v =
                (null === s ||
                void 0 === s ||
                null === (o = s[d]) ||
                void 0 === o
                  ? void 0
                  : o.map((e) => e.url)) || [],
              m = [...v, p],
              _ = [...v];
            return (
              h && !_.includes(h) && _.push(h),
              {
                ...e,
                chainNamespace: l,
                caipNetworkId: d,
                assets: {
                  imageId: c.L.NetworkImageIds[e.id],
                  imageUrl: null === n || void 0 === n ? void 0 : n[e.id],
                },
                rpcUrls: {
                  ...e.rpcUrls,
                  default: { http: m },
                  chainDefault: { http: _ },
                },
              }
            );
          },
          extendCaipNetworks(e, t) {
            let {
              customNetworkImageUrls: a,
              projectId: r,
              customRpcUrls: o,
            } = t;
            return e.map((e) =>
              u.extendCaipNetwork(e, {
                customNetworkImageUrls: a,
                customRpcUrls: o,
                projectId: r,
              })
            );
          },
          getViemTransport(e, t, a) {
            var n;
            const i = [];
            return (
              null === a ||
                void 0 === a ||
                a.forEach((e) => {
                  i.push((0, r.L)(e.url, e.config));
                }),
              d.includes(e.caipNetworkId) &&
                i.push(
                  (0, r.L)(l(e.caipNetworkId, t), {
                    fetchOptions: { headers: { "Content-Type": "text/plain" } },
                  })
                ),
              null === e ||
                void 0 === e ||
                null === (n = e.rpcUrls) ||
                void 0 === n ||
                null === (n = n.default) ||
                void 0 === n ||
                null === (n = n.http) ||
                void 0 === n ||
                n.forEach((e) => {
                  i.push((0, r.L)(e));
                }),
              (0, o.Np)(i)
            );
          },
          extendWagmiTransports(e, t, a) {
            if (d.includes(e.caipNetworkId)) {
              const n = this.getDefaultRpcUrl(e, e.caipNetworkId, t);
              return (0, o.Np)([a, (0, r.L)(n)]);
            }
            return a;
          },
          getUnsupportedNetwork: (e) => ({
            id: e.split(":")[1],
            caipNetworkId: e,
            name: n.o.UNSUPPORTED_NETWORK_NAME,
            chainNamespace: e.split(":")[0],
            nativeCurrency: { name: "", decimals: 0, symbol: "" },
            rpcUrls: { default: { http: [] } },
          }),
          getCaipNetworkFromStorage(e) {
            var t;
            const a = i.i.getActiveCaipNetworkId(),
              r = s.W.getAllRequestedCaipNetworks(),
              o = Array.from(
                (null === (t = s.W.state.chains) || void 0 === t
                  ? void 0
                  : t.keys()) || []
              ),
              n = null === a || void 0 === a ? void 0 : a.split(":")[0],
              c = !!n && o.includes(n),
              l =
                null === r || void 0 === r
                  ? void 0
                  : r.find((e) => e.caipNetworkId === a);
            return c && !l && a
              ? this.getUnsupportedNetwork(a)
              : l || e || (null === r || void 0 === r ? void 0 : r[0]);
          },
        };
    },
    62028: (e, t, a) => {
      a.d(t, { R: () => r });
      const r = {
        UniversalProviderErrors: {
          UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: "Unauthorized: origin not allowed",
            alertErrorKey: "INVALID_APP_CONFIGURATION",
          },
          JWT_VALIDATION_ERROR: {
            message: "JWT validation error: JWT Token is not yet valid",
            alertErrorKey: "JWT_TOKEN_NOT_VALID",
          },
          INVALID_KEY: {
            message: "Unauthorized: invalid key",
            alertErrorKey: "INVALID_PROJECT_ID",
          },
        },
        ALERT_ERRORS: {
          SWITCH_NETWORK_NOT_FOUND: {
            shortMessage: "Network Not Found",
            longMessage:
              "Network not found - please make sure it is included in 'networks' array in createAppKit function",
          },
          INVALID_APP_CONFIGURATION: {
            shortMessage: "Invalid App Configuration",
            longMessage: () =>
              `Origin ${
                "undefined" !== typeof window ? window.origin : "unknown"
              } not found on Allowlist - update configuration on cloud.reown.com`,
          },
          SOCIALS_TIMEOUT: {
            shortMessage: "Invalid App Configuration",
            longMessage: () =>
              "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com",
          },
          JWT_TOKEN_NOT_VALID: {
            shortMessage: "Session Expired",
            longMessage:
              "Invalid session found on UniversalProvider - please check your time settings and connect again",
          },
          INVALID_PROJECT_ID: {
            shortMessage: "Invalid App Configuration",
            longMessage: "Invalid Project ID - update configuration",
          },
          PROJECT_ID_NOT_CONFIGURED: {
            shortMessage: "Project ID Not Configured",
            longMessage:
              "Project ID Not Configured - update configuration on cloud.reown.com",
          },
        },
      };
    },
    62550: (e, t, a) => {
      a.d(t, { T: () => m });
      var r = a(59586),
        o = a(64066),
        n = a(16733),
        i = a(78344),
        s = a(21369),
        c = a(23871),
        l = a(63157),
        d = a(458),
        u = a(83454);
      const p = {
          purchaseCurrencies: [
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "USD Coin",
              symbol: "USDC",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "Ether",
              symbol: "ETH",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
          ],
          paymentCurrencies: [
            {
              id: "USD",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
            {
              id: "EUR",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
          ],
        },
        h = n.w.getBlockchainApiUrl(),
        v = (0, r.BX)({
          clientId: null,
          api: new i.Z({ baseUrl: h, clientId: null }),
          supportedChains: { http: [], ws: [] },
        }),
        m = {
          state: v,
          async get(e) {
            const { st: t, sv: a } = m.getSdkProperties(),
              r = d.H.state.projectId,
              o = { ...(e.params || {}), st: t, sv: a, projectId: r };
            return v.api.get({ ...e, params: o });
          },
          getSdkProperties() {
            const { sdkType: e, sdkVersion: t } = d.H.state;
            return { st: e || "unknown", sv: t || "unknown" };
          },
          async isNetworkSupported(e) {
            if (!e) return !1;
            try {
              v.supportedChains.http.length || (await m.getSupportedNetworks());
            } catch (t) {
              return !1;
            }
            return v.supportedChains.http.includes(e);
          },
          async getSupportedNetworks() {
            const e = await m.get({ path: "v1/supported-chains" });
            return (v.supportedChains = e), e;
          },
          async fetchIdentity(e) {
            let { address: t, caipNetworkId: a } = e;
            if (!(await m.isNetworkSupported(a)))
              return { avatar: "", name: "" };
            const r = s.i.getIdentityFromCacheForAddress(t);
            if (r) return r;
            const o = await m.get({
              path: `/v1/identity/${t}`,
              params: {
                sender: l.W.state.activeCaipAddress
                  ? n.w.getPlainAddress(l.W.state.activeCaipAddress)
                  : void 0,
              },
            });
            return (
              s.i.updateIdentityCache({
                address: t,
                identity: o,
                timestamp: Date.now(),
              }),
              o
            );
          },
          async fetchTransactions(e) {
            var t;
            let {
              account: a,
              cursor: r,
              onramp: o,
              signal: n,
              cache: i,
              chainId: s,
            } = e;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({
                  path: `/v1/account/${a}/history`,
                  params: { cursor: r, onramp: o, chainId: s },
                  signal: n,
                  cache: i,
                })
              : { data: [], next: void 0 };
          },
          async fetchSwapQuote(e) {
            var t;
            let { amount: a, userAddress: r, from: o, to: n, gasPrice: i } = e;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({
                  path: "/v1/convert/quotes",
                  headers: { "Content-Type": "application/json" },
                  params: {
                    amount: a,
                    userAddress: r,
                    from: o,
                    to: n,
                    gasPrice: i,
                  },
                })
              : { quotes: [] };
          },
          async fetchSwapTokens(e) {
            var t;
            let { chainId: a } = e;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({ path: "/v1/convert/tokens", params: { chainId: a } })
              : { tokens: [] };
          },
          async fetchTokenPrice(e) {
            var t;
            let { addresses: a } = e;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? v.api.post({
                  path: "/v1/fungible/price",
                  body: {
                    currency: "usd",
                    addresses: a,
                    projectId: d.H.state.projectId,
                  },
                  headers: { "Content-Type": "application/json" },
                })
              : { fungibles: [] };
          },
          async fetchSwapAllowance(e) {
            var t;
            let { tokenAddress: a, userAddress: r } = e;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({
                  path: "/v1/convert/allowance",
                  params: { tokenAddress: a, userAddress: r },
                  headers: { "Content-Type": "application/json" },
                })
              : { allowance: "0" };
          },
          async fetchGasPrice(e) {
            var t;
            let { chainId: a } = e;
            const { st: r, sv: o } = m.getSdkProperties();
            if (
              !(await m.isNetworkSupported(
                null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw new Error("Network not supported for Gas Price");
            return m.get({
              path: "/v1/convert/gas-price",
              headers: { "Content-Type": "application/json" },
              params: { chainId: a, st: r, sv: o },
            });
          },
          async generateSwapCalldata(e) {
            var t;
            let {
              amount: a,
              from: r,
              to: n,
              userAddress: i,
              disableEstimate: s,
            } = e;
            if (
              !(await m.isNetworkSupported(
                null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw new Error("Network not supported for Swaps");
            return v.api.post({
              path: "/v1/convert/build-transaction",
              headers: { "Content-Type": "application/json" },
              body: {
                amount: a,
                eip155: { slippage: o.oU.CONVERT_SLIPPAGE_TOLERANCE },
                projectId: d.H.state.projectId,
                from: r,
                to: n,
                userAddress: i,
                disableEstimate: s,
              },
            });
          },
          async generateApproveCalldata(e) {
            var t;
            let { from: a, to: r, userAddress: o } = e;
            const { st: n, sv: i } = m.getSdkProperties();
            if (
              !(await m.isNetworkSupported(
                null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw new Error("Network not supported for Swaps");
            return m.get({
              path: "/v1/convert/build-approve",
              headers: { "Content-Type": "application/json" },
              params: { userAddress: o, from: a, to: r, st: n, sv: i },
            });
          },
          async getBalance(e, t, a) {
            var r;
            const { st: o, sv: n } = m.getSdkProperties();
            if (
              !(await m.isNetworkSupported(
                null === (r = l.W.state.activeCaipNetwork) || void 0 === r
                  ? void 0
                  : r.caipNetworkId
              ))
            )
              return (
                u.P.showError("Token Balance Unavailable"), { balances: [] }
              );
            const i = `${t}:${e}`,
              c = s.i.getBalanceCacheForCaipAddress(i);
            if (c) return c;
            const d = await m.get({
              path: `/v1/account/${e}/balance`,
              params: {
                currency: "usd",
                chainId: t,
                forceUpdate: a,
                st: o,
                sv: n,
              },
            });
            return (
              s.i.updateBalanceCache({
                caipAddress: i,
                balance: d,
                timestamp: Date.now(),
              }),
              d
            );
          },
          async lookupEnsName(e) {
            var t;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({
                  path: `/v1/profile/account/${e}`,
                  params: { apiVersion: "2" },
                })
              : { addresses: {}, attributes: [] };
          },
          async reverseLookupEnsName(e) {
            var t;
            let { address: a } = e;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({
                  path: `/v1/profile/reverse/${a}`,
                  params: { sender: c.U.state.address, apiVersion: "2" },
                })
              : [];
          },
          async getEnsNameSuggestions(e) {
            var t;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({
                  path: `/v1/profile/suggestions/${e}`,
                  params: { zone: "reown.id" },
                })
              : { suggestions: [] };
          },
          async registerEnsName(e) {
            var t;
            let { coinType: a, address: r, message: o, signature: n } = e;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? v.api.post({
                  path: "/v1/profile/account",
                  body: { coin_type: a, address: r, message: o, signature: n },
                  headers: { "Content-Type": "application/json" },
                })
              : { success: !1 };
          },
          async generateOnRampURL(e) {
            var t;
            let {
              destinationWallets: a,
              partnerUserId: r,
              defaultNetwork: o,
              purchaseAmount: n,
              paymentAmount: i,
            } = e;
            if (
              !(await m.isNetworkSupported(
                null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              return "";
            return (
              await v.api.post({
                path: "/v1/generators/onrampurl",
                params: { projectId: d.H.state.projectId },
                body: {
                  destinationWallets: a,
                  defaultNetwork: o,
                  partnerUserId: r,
                  defaultExperience: "buy",
                  presetCryptoAmount: n,
                  presetFiatAmount: i,
                },
              })
            ).url;
          },
          async getOnrampOptions() {
            var e;
            if (
              !(await m.isNetworkSupported(
                null === (e = l.W.state.activeCaipNetwork) || void 0 === e
                  ? void 0
                  : e.caipNetworkId
              ))
            )
              return { paymentCurrencies: [], purchaseCurrencies: [] };
            try {
              return await m.get({ path: "/v1/onramp/options" });
            } catch (t) {
              return p;
            }
          },
          async getOnrampQuote(e) {
            let {
              purchaseCurrency: t,
              paymentCurrency: a,
              amount: r,
              network: o,
            } = e;
            try {
              var n;
              if (
                !(await m.isNetworkSupported(
                  null === (n = l.W.state.activeCaipNetwork) || void 0 === n
                    ? void 0
                    : n.caipNetworkId
                ))
              )
                return null;
              return await v.api.post({
                path: "/v1/onramp/quote",
                params: { projectId: d.H.state.projectId },
                body: {
                  purchaseCurrency: t,
                  paymentCurrency: a,
                  amount: r,
                  network: o,
                },
              });
            } catch (i) {
              return {
                coinbaseFee: { amount: r, currency: a.id },
                networkFee: { amount: r, currency: a.id },
                paymentSubtotal: { amount: r, currency: a.id },
                paymentTotal: { amount: r, currency: a.id },
                purchaseAmount: { amount: r, currency: a.id },
                quoteId: "mocked-quote-id",
              };
            }
          },
          async getSmartSessions(e) {
            var t;
            return (await m.isNetworkSupported(
              null === (t = l.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.caipNetworkId
            ))
              ? m.get({ path: `/v1/sessions/${e}` })
              : [];
          },
          async revokeSmartSession(e, t, a) {
            var r;
            return (await m.isNetworkSupported(
              null === (r = l.W.state.activeCaipNetwork) || void 0 === r
                ? void 0
                : r.caipNetworkId
            ))
              ? v.api.post({
                  path: `/v1/sessions/${e}/revoke`,
                  params: { projectId: d.H.state.projectId },
                  body: { pci: t, signature: a },
                })
              : { success: !1 };
          },
          setClientId(e) {
            (v.clientId = e), (v.api = new i.Z({ baseUrl: h, clientId: e }));
          },
        };
    },
    63153: (e, t, a) => {
      a.d(t, { IP: () => i, T8: () => o, Ud: () => n, Ws: () => r });
      const r = {
        WALLET_ID: "@appkit/wallet_id",
        WALLET_NAME: "@appkit/wallet_name",
        SOLANA_WALLET: "@appkit/solana_wallet",
        SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
        ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
        CONNECTED_SOCIAL: "@appkit/connected_social",
        CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
        RECENT_WALLETS: "@appkit/recent_wallets",
        DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        ACTIVE_NAMESPACE: "@appkit/active_namespace",
        CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
        CONNECTION_STATUS: "@appkit/connection_status",
        SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
        SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
        TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
        NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
        PORTFOLIO_CACHE: "@appkit/portfolio_cache",
        ENS_CACHE: "@appkit/ens_cache",
        IDENTITY_CACHE: "@appkit/identity_cache",
        PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
      };
      function o(e) {
        if (!e)
          throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");
        return `@appkit/${e}:connected_connector_id`;
      }
      const n = {
        setItem(e, t) {
          i() && void 0 !== t && localStorage.setItem(e, t);
        },
        getItem(e) {
          if (i()) return localStorage.getItem(e) || void 0;
        },
        removeItem(e) {
          i() && localStorage.removeItem(e);
        },
        clear() {
          i() && localStorage.clear();
        },
      };
      function i() {
        return (
          "undefined" !== typeof window && "undefined" !== typeof localStorage
        );
      }
    },
    63157: (e, t, a) => {
      a.d(t, { W: () => f });
      var r = a(59586),
        o = a(86992),
        n = a(74364),
        i = a(10719),
        s = a(71898);
      function c(e, t) {
        return s.a.getConnectorId(e) === t;
      }
      var l = a(64066),
        d = a(16733),
        u = a(21369),
        p = a(23871),
        h = a(73082),
        v = a(37687),
        m = a(18933),
        _ = a(458),
        E = a(4470),
        C = a(67415),
        g = a(21702);
      const A = {
          currentTab: 0,
          tokenBalance: [],
          smartAccountDeployed: !1,
          addressLabels: new Map(),
          allAccounts: [],
          user: void 0,
        },
        w = {
          caipNetwork: void 0,
          supportsAllNetworks: !0,
          smartAccountEnabledNetworks: [],
        },
        N = (0, r.BX)({
          chains: (0, o.zC)(),
          activeCaipAddress: void 0,
          activeChain: void 0,
          activeCaipNetwork: void 0,
          noAdapters: !1,
          universalAdapter: {
            networkControllerClient: void 0,
            connectionControllerClient: void 0,
          },
          isSwitchingNamespace: !1,
        }),
        f = {
          state: N,
          subscribe: (e) =>
            (0, r.B1)(N, () => {
              e(N);
            }),
          subscribeKey: (e, t) => (0, o.u$)(N, e, t),
          subscribeChainProp(e, t, a) {
            let o;
            return (0, r.B1)(N.chains, () => {
              const r = a || N.activeChain;
              if (r) {
                var n;
                const a =
                  null === (n = N.chains.get(r)) || void 0 === n
                    ? void 0
                    : n[e];
                o !== a && ((o = a), t(a));
              }
            });
          },
          initialize(e, t, a) {
            var o;
            const { chainId: n, namespace: i } = u.i.getActiveNetworkProps(),
              s =
                null === t || void 0 === t
                  ? void 0
                  : t.find(
                      (e) =>
                        e.id.toString() ===
                        (null === n || void 0 === n ? void 0 : n.toString())
                    ),
              c =
                e.find(
                  (e) =>
                    (null === e || void 0 === e ? void 0 : e.namespace) === i
                ) || (null === e || void 0 === e ? void 0 : e[0]),
              l = new Set([
                ...(null !==
                  (o =
                    null === t || void 0 === t
                      ? void 0
                      : t.map((e) => e.chainNamespace)) && void 0 !== o
                  ? o
                  : []),
              ]);
            (0 !== (null === e || void 0 === e ? void 0 : e.length) && c) ||
              (N.noAdapters = !0),
              N.noAdapters ||
                ((N.activeChain =
                  null === c || void 0 === c ? void 0 : c.namespace),
                (N.activeCaipNetwork = s),
                this.setChainNetworkData(
                  null === c || void 0 === c ? void 0 : c.namespace,
                  { caipNetwork: s }
                ),
                N.activeChain &&
                  E.z.set({
                    activeChain:
                      null === c || void 0 === c ? void 0 : c.namespace,
                  })),
              l.forEach((e) => {
                const o =
                  null === t || void 0 === t
                    ? void 0
                    : t.filter((t) => t.chainNamespace === e);
                f.state.chains.set(e, {
                  namespace: e,
                  networkState: (0, r.BX)({
                    ...w,
                    caipNetwork: null === o || void 0 === o ? void 0 : o[0],
                  }),
                  accountState: (0, r.BX)(A),
                  caipNetworks: null !== o && void 0 !== o ? o : [],
                  ...a,
                }),
                  this.setRequestedCaipNetworks(
                    null !== o && void 0 !== o ? o : [],
                    e
                  );
              });
          },
          removeAdapter(e) {
            if (N.activeChain === e) {
              const a = Array.from(N.chains.entries()).find((t) => {
                let [a] = t;
                return a !== e;
              });
              if (a) {
                var t;
                const e =
                  null === (t = a[1]) ||
                  void 0 === t ||
                  null === (t = t.caipNetworks) ||
                  void 0 === t
                    ? void 0
                    : t[0];
                e && this.setActiveCaipNetwork(e);
              }
            }
            N.chains.delete(e);
          },
          addAdapter(e, t, a) {
            var r;
            let { networkControllerClient: o, connectionControllerClient: n } =
              t;
            N.chains.set(e.namespace, {
              namespace: e.namespace,
              networkState: { ...w, caipNetwork: a[0] },
              accountState: A,
              caipNetworks: a,
              connectionControllerClient: n,
              networkControllerClient: o,
            }),
              this.setRequestedCaipNetworks(
                null !==
                  (r =
                    null === a || void 0 === a
                      ? void 0
                      : a.filter((t) => t.chainNamespace === e.namespace)) &&
                  void 0 !== r
                  ? r
                  : [],
                e.namespace
              );
          },
          addNetwork(e) {
            const t = N.chains.get(e.chainNamespace);
            if (t) {
              var a;
              const r = [...(t.caipNetworks || [])];
              (null !== (a = t.caipNetworks) &&
                void 0 !== a &&
                a.find((t) => t.id === e.id)) ||
                r.push(e),
                N.chains.set(e.chainNamespace, { ...t, caipNetworks: r }),
                this.setRequestedCaipNetworks(r, e.chainNamespace);
            }
          },
          removeNetwork(e, t) {
            const a = N.chains.get(e);
            if (a) {
              var r, o, n;
              const i =
                  (null === (r = N.activeCaipNetwork) || void 0 === r
                    ? void 0
                    : r.id) === t,
                s = [
                  ...((null === (o = a.caipNetworks) || void 0 === o
                    ? void 0
                    : o.filter((e) => e.id !== t)) || []),
                ];
              i &&
                null !== a &&
                void 0 !== a &&
                null !== (n = a.caipNetworks) &&
                void 0 !== n &&
                n[0] &&
                this.setActiveCaipNetwork(a.caipNetworks[0]),
                N.chains.set(e, { ...a, caipNetworks: s }),
                this.setRequestedCaipNetworks(s || [], e);
            }
          },
          setAdapterNetworkState(e, t) {
            const a = N.chains.get(e);
            a &&
              ((a.networkState = { ...(a.networkState || w), ...t }),
              N.chains.set(e, a));
          },
          setChainAccountData(e, t) {
            if (!e)
              throw new Error("Chain is required to update chain account data");
            const a = N.chains.get(e);
            if (a) {
              const r = { ...(a.accountState || A), ...t };
              N.chains.set(e, { ...a, accountState: r }),
                (1 !== N.chains.size && N.activeChain !== e) ||
                  (t.caipAddress && (N.activeCaipAddress = t.caipAddress),
                  p.U.replaceState(r));
            }
          },
          setChainNetworkData(e, t) {
            if (!e) return;
            const a = N.chains.get(e);
            if (a) {
              const r = { ...(a.networkState || w), ...t };
              N.chains.set(e, { ...a, networkState: r });
            }
          },
          setAccountProp(e, t, a) {
            let r =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3];
            this.setChainAccountData(a, { [e]: t }, r),
              "status" === e &&
                "disconnected" === t &&
                a &&
                s.a.removeConnectorId(a);
          },
          setActiveNamespace(e) {
            var t;
            N.activeChain = e;
            const a = e ? N.chains.get(e) : void 0,
              r =
                null === a ||
                void 0 === a ||
                null === (t = a.networkState) ||
                void 0 === t
                  ? void 0
                  : t.caipNetwork;
            var o;
            null !== r &&
              void 0 !== r &&
              r.id &&
              e &&
              ((N.activeCaipAddress =
                null === a ||
                void 0 === a ||
                null === (o = a.accountState) ||
                void 0 === o
                  ? void 0
                  : o.caipAddress),
              (N.activeCaipNetwork = r),
              this.setChainNetworkData(e, { caipNetwork: r }),
              u.i.setActiveCaipNetworkId(
                null === r || void 0 === r ? void 0 : r.caipNetworkId
              ),
              E.z.set({
                activeChain: e,
                selectedNetworkId:
                  null === r || void 0 === r ? void 0 : r.caipNetworkId,
              }));
          },
          setActiveCaipNetwork(e) {
            var t, a;
            if (!e) return;
            N.activeChain !== e.chainNamespace &&
              this.setIsSwitchingNamespace(!0);
            const r = N.chains.get(e.chainNamespace);
            var o;
            ((N.activeChain = e.chainNamespace),
            (N.activeCaipNetwork = e),
            this.setChainNetworkData(e.chainNamespace, { caipNetwork: e }),
            null !== r &&
              void 0 !== r &&
              null !== (t = r.accountState) &&
              void 0 !== t &&
              t.address)
              ? (N.activeCaipAddress = `${e.chainNamespace}:${e.id}:${
                  null === r ||
                  void 0 === r ||
                  null === (o = r.accountState) ||
                  void 0 === o
                    ? void 0
                    : o.address
                }`)
              : (N.activeCaipAddress = void 0);
            this.setAccountProp(
              "caipAddress",
              N.activeCaipAddress,
              e.chainNamespace
            ),
              r && p.U.replaceState(r.accountState),
              g.R.resetSend(),
              E.z.set({
                activeChain: N.activeChain,
                selectedNetworkId:
                  null === (a = N.activeCaipNetwork) || void 0 === a
                    ? void 0
                    : a.caipNetworkId,
              }),
              u.i.setActiveCaipNetworkId(e.caipNetworkId);
            this.checkIfSupportedNetwork(e.chainNamespace) ||
              !_.H.state.enableNetworkSwitch ||
              _.H.state.allowUnsupportedChain ||
              h.x.state.wcBasic ||
              this.showUnsupportedChainUI();
          },
          addCaipNetwork(e) {
            if (!e) return;
            const t = N.chains.get(e.chainNamespace);
            var a;
            t &&
              (null === t ||
                void 0 === t ||
                null === (a = t.caipNetworks) ||
                void 0 === a ||
                a.push(e));
          },
          async switchActiveNamespace(e) {
            var t;
            if (!e) return;
            const a = e !== f.state.activeChain,
              r =
                null === (t = f.getNetworkData(e)) || void 0 === t
                  ? void 0
                  : t.caipNetwork,
              o = f.getCaipNetworkByNamespace(
                e,
                null === r || void 0 === r ? void 0 : r.id
              );
            a && o && (await f.switchActiveNetwork(o));
          },
          async switchActiveNetwork(e) {
            var t;
            const a = f.state.chains.get(f.state.activeChain);
            !(
              null !== a &&
              void 0 !== a &&
              null !== (t = a.caipNetworks) &&
              void 0 !== t &&
              t.some((e) => {
                var t;
                return (
                  e.id ===
                  (null === (t = N.activeCaipNetwork) || void 0 === t
                    ? void 0
                    : t.id)
                );
              })
            ) && C.I.goBack();
            const r = this.getNetworkControllerClient(e.chainNamespace);
            r &&
              (await r.switchCaipNetwork(e),
              v.E.sendEvent({
                type: "track",
                event: "SWITCH_NETWORK",
                properties: { network: e.caipNetworkId },
              }));
          },
          getNetworkControllerClient(e) {
            const t = e || N.activeChain,
              a = N.chains.get(t);
            if (!a) throw new Error("Chain adapter not found");
            if (!a.networkControllerClient)
              throw new Error("NetworkController client not set");
            return a.networkControllerClient;
          },
          getConnectionControllerClient(e) {
            const t = e || N.activeChain;
            if (!t)
              throw new Error(
                "Chain is required to get connection controller client"
              );
            const a = N.chains.get(t);
            if (null === a || void 0 === a || !a.connectionControllerClient)
              throw new Error("ConnectionController client not set");
            return a.connectionControllerClient;
          },
          getAccountProp(e, t) {
            var a;
            let r = N.activeChain;
            if ((t && (r = t), !r)) return;
            const o =
              null === (a = N.chains.get(r)) || void 0 === a
                ? void 0
                : a.accountState;
            return o ? o[e] : void 0;
          },
          getNetworkProp(e, t) {
            var a;
            const r =
              null === (a = N.chains.get(t)) || void 0 === a
                ? void 0
                : a.networkState;
            if (r) return r[e];
          },
          getRequestedCaipNetworks(e) {
            const t = N.chains.get(e),
              {
                approvedCaipNetworkIds: a = [],
                requestedCaipNetworks: r = [],
              } = (null === t || void 0 === t ? void 0 : t.networkState) || {};
            return d.w.sortRequestedNetworks(a, r);
          },
          getAllRequestedCaipNetworks() {
            const e = [];
            return (
              N.chains.forEach((t) => {
                const a = this.getRequestedCaipNetworks(t.namespace);
                e.push(...a);
              }),
              e
            );
          },
          setRequestedCaipNetworks(e, t) {
            this.setAdapterNetworkState(t, { requestedCaipNetworks: e });
          },
          getAllApprovedCaipNetworkIds() {
            const e = [];
            return (
              N.chains.forEach((t) => {
                const a = this.getApprovedCaipNetworkIds(t.namespace);
                e.push(...a);
              }),
              e
            );
          },
          getActiveCaipNetwork: () => N.activeCaipNetwork,
          getActiveCaipAddress: () => N.activeCaipAddress,
          getApprovedCaipNetworkIds(e) {
            var t;
            const a = N.chains.get(e);
            return (
              (null === a ||
              void 0 === a ||
              null === (t = a.networkState) ||
              void 0 === t
                ? void 0
                : t.approvedCaipNetworkIds) || []
            );
          },
          async setApprovedCaipNetworksData(e) {
            const t = this.getNetworkControllerClient(),
              a = await (null === t || void 0 === t
                ? void 0
                : t.getApprovedCaipNetworksData());
            this.setAdapterNetworkState(e, {
              approvedCaipNetworkIds:
                null === a || void 0 === a ? void 0 : a.approvedCaipNetworkIds,
              supportsAllNetworks:
                null === a || void 0 === a ? void 0 : a.supportsAllNetworks,
            });
          },
          checkIfSupportedNetwork(e, t) {
            const a = t || N.activeCaipNetwork,
              r = this.getRequestedCaipNetworks(e);
            return (
              !r.length ||
              (null === r || void 0 === r
                ? void 0
                : r.some(
                    (e) => e.id === (null === a || void 0 === a ? void 0 : a.id)
                  ))
            );
          },
          checkIfSupportedChainId(e) {
            if (!N.activeChain) return !0;
            const t = this.getRequestedCaipNetworks(N.activeChain);
            return null === t || void 0 === t
              ? void 0
              : t.some((t) => t.id === e);
          },
          setSmartAccountEnabledNetworks(e, t) {
            this.setAdapterNetworkState(t, { smartAccountEnabledNetworks: e });
          },
          checkIfSmartAccountEnabled() {
            var e;
            const t = n.L.caipNetworkIdToNumber(
                null === (e = N.activeCaipNetwork) || void 0 === e
                  ? void 0
                  : e.caipNetworkId
              ),
              a = N.activeChain;
            if (!a || !t) return !1;
            const r = this.getNetworkProp("smartAccountEnabledNetworks", a);
            return Boolean(
              null === r || void 0 === r ? void 0 : r.includes(Number(t))
            );
          },
          getActiveNetworkTokenAddress() {
            var e, t;
            const a =
              (null === (e = N.activeCaipNetwork) || void 0 === e
                ? void 0
                : e.chainNamespace) || "eip155";
            return `${a}:${
              (null === (t = N.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.id) || 1
            }:${l.oU.NATIVE_TOKEN_ADDRESS[a]}`;
          },
          showUnsupportedChainUI() {
            m.W.open({ view: "UnsupportedChain" });
          },
          checkIfNamesSupported() {
            const e = N.activeCaipNetwork;
            return Boolean(
              (null === e || void 0 === e ? void 0 : e.chainNamespace) &&
                l.oU.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace)
            );
          },
          resetNetwork(e) {
            this.setAdapterNetworkState(e, {
              approvedCaipNetworkIds: void 0,
              supportsAllNetworks: !0,
              smartAccountEnabledNetworks: [],
            });
          },
          resetAccount(e) {
            const t = e;
            if (!t) throw new Error("Chain is required to set account prop");
            (N.activeCaipAddress = void 0),
              this.setChainAccountData(t, {
                smartAccountDeployed: !1,
                currentTab: 0,
                caipAddress: void 0,
                address: void 0,
                balance: void 0,
                balanceSymbol: void 0,
                profileName: void 0,
                profileImage: void 0,
                addressExplorerUrl: void 0,
                tokenBalance: [],
                connectedWalletInfo: void 0,
                preferredAccountTypes: void 0,
                socialProvider: void 0,
                socialWindow: void 0,
                farcasterUrl: void 0,
                allAccounts: [],
                user: void 0,
                status: "disconnected",
              }),
              s.a.removeConnectorId(t);
          },
          async disconnect(e) {
            const t = (function (e) {
              const t = Array.from(f.state.chains.keys());
              let a = [];
              return (
                e
                  ? (a.push([e, f.state.chains.get(e)]),
                    c(e, i.o.CONNECTOR_ID.WALLET_CONNECT)
                      ? t.forEach((t) => {
                          t !== e &&
                            c(t, i.o.CONNECTOR_ID.WALLET_CONNECT) &&
                            a.push([t, f.state.chains.get(t)]);
                        })
                      : c(e, i.o.CONNECTOR_ID.AUTH) &&
                        t.forEach((t) => {
                          t !== e &&
                            c(t, i.o.CONNECTOR_ID.AUTH) &&
                            a.push([t, f.state.chains.get(t)]);
                        }))
                  : (a = Array.from(f.state.chains.entries())),
                a
              );
            })(e);
            try {
              g.R.resetSend();
              const a = await Promise.allSettled(
                t.map(async (e) => {
                  let [t, a] = e;
                  try {
                    var r;
                    const { caipAddress: e } = this.getAccountData(t) || {};
                    e &&
                      null !== (r = a.connectionControllerClient) &&
                      void 0 !== r &&
                      r.disconnect &&
                      (await a.connectionControllerClient.disconnect(t)),
                      this.resetAccount(t),
                      this.resetNetwork(t);
                  } catch (o) {
                    throw new Error(
                      `Failed to disconnect chain ${t}: ${o.message}`
                    );
                  }
                })
              );
              h.x.resetWcConnection();
              const r = a.filter((e) => "rejected" === e.status);
              if (r.length > 0)
                throw new Error(r.map((e) => e.reason.message).join(", "));
              u.i.deleteConnectedSocialProvider(),
                e ? s.a.removeConnectorId(e) : s.a.resetConnectorIds(),
                v.E.sendEvent({
                  type: "track",
                  event: "DISCONNECT_SUCCESS",
                  properties: { namespace: e || "all" },
                });
            } catch (a) {
              console.error(a.message || "Failed to disconnect chains"),
                v.E.sendEvent({
                  type: "track",
                  event: "DISCONNECT_ERROR",
                  properties: {
                    message: a.message || "Failed to disconnect chains",
                  },
                });
            }
          },
          setIsSwitchingNamespace(e) {
            N.isSwitchingNamespace = e;
          },
          getFirstCaipNetworkSupportsAuthConnector() {
            const e = [];
            let t;
            if (
              (N.chains.forEach((t) => {
                i.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
                  (e) => e === t.namespace
                ) &&
                  t.namespace &&
                  e.push(t.namespace);
              }),
              e.length > 0)
            ) {
              var a;
              const r = e[0];
              return (
                (t = r
                  ? null === (a = N.chains.get(r)) ||
                    void 0 === a ||
                    null === (a = a.caipNetworks) ||
                    void 0 === a
                    ? void 0
                    : a[0]
                  : void 0),
                t
              );
            }
          },
          getAccountData(e) {
            var t;
            return e
              ? null === (t = f.state.chains.get(e)) || void 0 === t
                ? void 0
                : t.accountState
              : p.U.state;
          },
          getNetworkData(e) {
            var t;
            const a = e || N.activeChain;
            if (a)
              return null === (t = f.state.chains.get(a)) || void 0 === t
                ? void 0
                : t.networkState;
          },
          getCaipNetworkByNamespace(e, t) {
            var a, r, o;
            if (!e) return;
            const n = f.state.chains.get(e),
              i =
                null === n ||
                void 0 === n ||
                null === (a = n.caipNetworks) ||
                void 0 === a
                  ? void 0
                  : a.find((e) => e.id === t);
            return (
              i ||
              (null === n ||
              void 0 === n ||
              null === (r = n.networkState) ||
              void 0 === r
                ? void 0
                : r.caipNetwork) ||
              (null === n ||
              void 0 === n ||
              null === (o = n.caipNetworks) ||
              void 0 === o
                ? void 0
                : o[0])
            );
          },
          getRequestedCaipNetworkIds() {
            const e = s.a.state.filterByNamespace;
            return (e ? [N.chains.get(e)] : Array.from(N.chains.values()))
              .flatMap(
                (e) =>
                  (null === e || void 0 === e ? void 0 : e.caipNetworks) || []
              )
              .map((e) => e.caipNetworkId);
          },
          getCaipNetworks: (e) =>
            e ? f.getRequestedCaipNetworks(e) : f.getAllRequestedCaipNetworks(),
        };
    },
    64066: (e, t, a) => {
      a.d(t, { Db: () => n, oU: () => i, tM: () => o });
      const r =
          ("undefined" !== typeof a(52143)
            ? {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_NOSTR_TOKEN_SEND_TO:
                  "npub1dy7n73dcrs0n24ec87u4tuagevkpjnzyl7aput69vmn8saemgnuq0a4n6y",
                REACT_APP_NOSTR_MARKET_SEND_TO:
                  "npub1zl7exeul3py65wt9ux243r0e3pukt8jza28xmpu844mj5wqpncaq0s2tyw",
                REACT_APP_NOSTR_AIRDROP_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_MINT_SEND_TO:
                  "npub1k25978k8ftux6swtt8pn7gy5ll28a7ugu65ymggt4xhfmgwzuvfszp3lhv",
                REACT_APP_NOSTR_LOCK:
                  "npub1zm3a3da2a0qepq2l752sdtu8xzl5src8c82exrh9av2x2va8k3jsqqdccy",
                REACT_APP_MICRO_NODE_SEND_TO:
                  "npub1dh7jwjrv9xvpw6a7wtsxpje7fequ7tmjzpendr594yjeuk9ckhasuljnc6",
                REACT_APP_API_GraphQL_URL:
                  "https://graph.lnfi.network/api/graph_data",
                REACT_APP_QUERY_API_URL: "https://market-api.lnfi.network",
                REACT_APP_MICRO_NODE_API_URL: "https://micro-api.lnfi.network",
                REACT_APP_LN_DEX_URL: "https://www.ln.exchange/",
                REACT_APP_LN_SPOT_URL: "https://app.ln.exchange/",
                REACT_APP_LN_PERP_URL:
                  "https://app.ln.exchange/#/perpetual/btc-usdt",
                REACT_APP_LN_NODE_URL:
                  "https://devoflnnode.unift.xyz/  // to do",
                REACT_APP_USDT_CONTRACT_ADDR:
                  "0xfad6367E97217cC51b4cd838Cc086831f81d38C2",
                REACT_APP_BTC_SEND_TO_ADDR:
                  "bc1qzrgykyfuyredsgkw3zu4zkplkyxuv4na6mstp5",
                REACT_APP_CURRENT_ENV: "prod",
                REACT_APP_GRAPH_BASE: "",
                REACT_APP_TX: "https://mempool.space/tx/",
                REACT_APP_REG_TX: "https://mempool.space/tx/",
                REACT_APP_LIGHTNING: "universe.lightning.finance",
                REACT_APP_MEMOPOOL: "https://mempool.space",
                REACT_APP_GAS_ADDR:
                  "bc1prz29tcyq926tvgpskdkd037jrxvjxzmxwu2apssxnhy6gs7cmr8q6kex7v",
                REACT_APP_GAS_FEE: "100000",
                REACT_APP_TREASURY_ADDR:
                  "bc1ppyhr8t9hh6s7h774aj9ruugyujd3e76lmw2s3mx33flak72vk06qvm2j82",
                REACT_APP_TREASURY_FEE: "100000",
                REACT_APP_WITHDRAW_ADDR:
                  "tb1p8jqsuqz3t7uk38vq57tkr2x3yupkdfymwxlz274hh2qch52lvp3qtc4v52",
                REACT_APP_WITHDRAW_FEE: "1000",
                REACT_APP_QUOTE_TOKEN: "SATS",
                REACT_APP_QUOTE_UNIT: "100000000",
                REACT_APP_UNIVERSE_HOST: "universe.lnfi.network:10029",
                REACT_APP_DEPOSIT_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_WITHDRAW_LIGHTNING_LIMIT: "10000|10000000",
                REACT_APP_IS_LIMIT_IP: "0",
                REACT_APP_NOSTR_SERVER: "wss://relay02.lnfi.network",
                REACT_APP_API_VALID_BRC20: "https://sign-api.unift.xyz",
                REACT_APP_IS_MAINNING: "0",
                REACT_APP_FAIRMINT_TOKEN: "TNA",
                REACT_APP_SWAP_TOKEN: "AIFI",
                REACT_APP_NOSTR_NODE_HOST:
                  "x6dpvaaxi462zyly2jzfippt3iivr4sxmctdhoelkxzukusmmfgbplad.onion:9735",
                REACT_APP_NOSTR_NODE_NPUBKEY:
                  "03bdaa035f786c6e80aa728eb9a21caf2126550b34c09021e57b2280ae9190457c",
                REACT_APP_ASSET_BASE_LINK:
                  "https://megalithic.me/taproot_assets_explorer?search=",
                REACT_APP_API_ORCAL_PRICE: "https://bridge-oracle.ln.exchange",
                REACT_APP_PARTNER_NUMBER: "1500",
                REACT_APP_PARTNER_TOKEN: "TREAT",
                REACT_APP_API_BORKER_URL: "https://broker.ln.exchange",
                REACT_APP_WAGMI_PROJECTID: "92461524d3cfcb3d78b38b5dbd6a6ce3",
                REACT_APP_ASTRA_API_URL: "https://api.astra-labs.io/",
                REACT_APP_MINTFEE_TOKEN: "USDT",
                REACT_APP_SPOT_API_URL: "https://test-spots-api.ln.exchange",
                REACT_APP_MINT_SERVICE_FEE_CREATE: "1000",
                REACT_APP_MINT_SERVICE_FEE_TOKEN_CREATE: "AIFI",
              }.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        o = [
          {
            label: "Coinbase",
            name: "coinbase",
            feeRange: "1-2%",
            url: "",
            supportedChains: ["eip155"],
          },
          {
            label: "Meld.io",
            name: "meld",
            feeRange: "1-2%",
            url: "https://meldcrypto.com",
            supportedChains: ["eip155", "solana"],
          },
        ],
        n = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",
        i = {
          FOUR_MINUTES_MS: 24e4,
          TEN_SEC_MS: 1e4,
          FIVE_SEC_MS: 5e3,
          THREE_SEC_MS: 3e3,
          ONE_SEC_MS: 1e3,
          SECURE_SITE: r,
          SECURE_SITE_DASHBOARD: `${r}/dashboard`,
          SECURE_SITE_FAVICON: `${r}/images/favicon.png`,
          RESTRICTED_TIMEZONES: [
            "ASIA/SHANGHAI",
            "ASIA/URUMQI",
            "ASIA/CHONGQING",
            "ASIA/HARBIN",
            "ASIA/KASHGAR",
            "ASIA/MACAU",
            "ASIA/HONG_KONG",
            "ASIA/MACAO",
            "ASIA/BEIJING",
            "ASIA/HARBIN",
          ],
          WC_COINBASE_PAY_SDK_CHAINS: [
            "ethereum",
            "arbitrum",
            "polygon",
            "berachain",
            "avalanche-c-chain",
            "optimism",
            "celo",
            "base",
          ],
          WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum",
          WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
            Ethereum: "ethereum",
            "Arbitrum One": "arbitrum",
            Polygon: "polygon",
            Berachain: "berachain",
            Avalanche: "avalanche-c-chain",
            "OP Mainnet": "optimism",
            Celo: "celo",
            Base: "base",
          },
          WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e",
          SWAP_SUGGESTED_TOKENS: [
            "ETH",
            "UNI",
            "1INCH",
            "AAVE",
            "SOL",
            "ADA",
            "AVAX",
            "DOT",
            "LINK",
            "NITRO",
            "GAIA",
            "MILK",
            "TRX",
            "NEAR",
            "GNO",
            "WBTC",
            "DAI",
            "WETH",
            "USDC",
            "USDT",
            "ARB",
            "BAL",
            "BICO",
            "CRV",
            "ENS",
            "MATIC",
            "OP",
          ],
          SWAP_POPULAR_TOKENS: [
            "ETH",
            "UNI",
            "1INCH",
            "AAVE",
            "SOL",
            "ADA",
            "AVAX",
            "DOT",
            "LINK",
            "NITRO",
            "GAIA",
            "MILK",
            "TRX",
            "NEAR",
            "GNO",
            "WBTC",
            "DAI",
            "WETH",
            "USDC",
            "USDT",
            "ARB",
            "BAL",
            "BICO",
            "CRV",
            "ENS",
            "MATIC",
            "OP",
            "METAL",
            "DAI",
            "CHAMP",
            "WOLF",
            "SALE",
            "BAL",
            "BUSD",
            "MUST",
            "BTCpx",
            "ROUTE",
            "HEX",
            "WELT",
            "amDAI",
            "VSQ",
            "VISION",
            "AURUM",
            "pSP",
            "SNX",
            "VC",
            "LINK",
            "CHP",
            "amUSDT",
            "SPHERE",
            "FOX",
            "GIDDY",
            "GFC",
            "OMEN",
            "OX_OLD",
            "DE",
            "WNT",
          ],
          BALANCE_SUPPORTED_CHAINS: ["eip155", "solana"],
          SWAP_SUPPORTED_NETWORKS: [
            "eip155:1",
            "eip155:42161",
            "eip155:10",
            "eip155:324",
            "eip155:8453",
            "eip155:56",
            "eip155:137",
            "eip155:100",
            "eip155:43114",
            "eip155:250",
            "eip155:8217",
            "eip155:1313161554",
          ],
          NAMES_SUPPORTED_CHAIN_NAMESPACES: ["eip155"],
          ONRAMP_SUPPORTED_CHAIN_NAMESPACES: ["eip155", "solana"],
          ACTIVITY_ENABLED_CHAIN_NAMESPACES: ["eip155"],
          NATIVE_TOKEN_ADDRESS: {
            eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            solana: "So11111111111111111111111111111111111111111",
            polkadot: "0x",
            bip122: "0x",
          },
          CONVERT_SLIPPAGE_TOLERANCE: 1,
          CONNECT_LABELS: { MOBILE: "Open and continue in a new browser tab" },
          DEFAULT_FEATURES: {
            swaps: !0,
            onramp: !0,
            receive: !0,
            send: !0,
            email: !0,
            emailShowWallets: !0,
            socials: [
              "google",
              "x",
              "discord",
              "farcaster",
              "github",
              "apple",
              "facebook",
            ],
            connectorTypeOrder: [
              "walletConnect",
              "recent",
              "injected",
              "featured",
              "custom",
              "external",
              "recommended",
            ],
            history: !0,
            analytics: !0,
            allWallets: !0,
            legalCheckbox: !1,
            smartSessions: !1,
            collapseWallets: !1,
            walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
            connectMethodsOrder: void 0,
          },
          DEFAULT_ACCOUNT_TYPES: {
            bip122: "payment",
            eip155: "smartAccount",
            polkadot: "eoa",
            solana: "eoa",
          },
          ADAPTER_TYPES: {
            UNIVERSAL: "universal",
            SOLANA: "solana",
            WAGMI: "wagmi",
            ETHERS: "ethers",
            ETHERS5: "ethers5",
            BITCOIN: "bitcoin",
          },
        };
    },
    67415: (e, t, a) => {
      a.d(t, { I: () => u });
      var r = a(59586),
        o = a(86992),
        n = a(23871),
        i = a(63157),
        s = a(71898),
        c = a(18933),
        l = a(458);
      const d = (0, r.BX)({
          view: "Connect",
          history: ["Connect"],
          transactionStack: [],
        }),
        u = {
          state: d,
          subscribeKey: (e, t) => (0, o.u$)(d, e, t),
          pushTransactionStack(e) {
            d.transactionStack.push(e);
          },
          popTransactionStack(e) {
            const t = d.transactionStack.pop();
            if (t)
              if (e) {
                var a;
                this.goBack(),
                  null === t ||
                    void 0 === t ||
                    null === (a = t.onCancel) ||
                    void 0 === a ||
                    a.call(t);
              } else {
                var r;
                if (t.goBack) this.goBack();
                else if (t.replace) {
                  const e = d.history.indexOf("ConnectingSiwe");
                  e > 0
                    ? this.goBackToIndex(e - 1)
                    : (c.W.close(), (d.history = []));
                } else t.view && this.reset(t.view);
                null === t ||
                  void 0 === t ||
                  null === (r = t.onSuccess) ||
                  void 0 === r ||
                  r.call(t);
              }
          },
          push(e, t) {
            e !== d.view && ((d.view = e), d.history.push(e), (d.data = t));
          },
          reset(e, t) {
            (d.view = e), (d.history = [e]), (d.data = t);
          },
          replace(e, t) {
            d.history.at(-1) === e ||
              ((d.view = e),
              (d.history[d.history.length - 1] = e),
              (d.data = t));
          },
          goBack() {
            var e;
            const t =
              !i.W.state.activeCaipAddress &&
              "ConnectingFarcaster" === this.state.view;
            if (
              d.history.length > 1 &&
              !d.history.includes("UnsupportedChain")
            ) {
              d.history.pop();
              const [e] = d.history.slice(-1);
              e && (d.view = e);
            } else c.W.close();
            null !== (e = d.data) &&
              void 0 !== e &&
              e.wallet &&
              (d.data.wallet = void 0),
              setTimeout(() => {
                if (t) {
                  var e, a, o;
                  n.U.setFarcasterUrl(void 0, i.W.state.activeChain);
                  const t = s.a.getAuthConnector();
                  null === t ||
                    void 0 === t ||
                    null === (e = t.provider) ||
                    void 0 === e ||
                    e.reload();
                  const c = (0, r.P9)(l.H.state);
                  null === t ||
                    void 0 === t ||
                    null === (a = t.provider) ||
                    void 0 === a ||
                    null === (o = a.syncDappData) ||
                    void 0 === o ||
                    o.call(a, {
                      metadata: c.metadata,
                      sdkVersion: c.sdkVersion,
                      projectId: c.projectId,
                      sdkType: c.sdkType,
                    });
                }
              }, 100);
          },
          goBackToIndex(e) {
            if (d.history.length > 1) {
              d.history = d.history.slice(0, e + 1);
              const [t] = d.history.slice(-1);
              t && (d.view = t);
            }
          },
        };
    },
    69084: (e, t, a) => {
      a.d(t, { N: () => C });
      var r = a(59586),
        o = a(86992),
        n = a(80240),
        i = a(16733),
        s = a(78344),
        c = a(21369),
        l = a(43136),
        d = a(63157),
        u = a(71898),
        p = a(37687),
        h = a(458);
      const v = [
          "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
          "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
          "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
        ],
        m = i.w.getApiUrl(),
        _ = new s.Z({ baseUrl: m, clientId: null }),
        E = (0, r.BX)({
          promises: {},
          page: 1,
          count: 0,
          featured: [],
          allFeatured: [],
          recommended: [],
          allRecommended: [],
          wallets: [],
          search: [],
          isAnalyticsEnabled: !1,
          excludedWallets: [],
          isFetchingRecommendedWallets: !1,
        }),
        C = {
          state: E,
          subscribeKey: (e, t) => (0, o.u$)(E, e, t),
          _getSdkProperties() {
            const { projectId: e, sdkType: t, sdkVersion: a } = h.H.state;
            return {
              projectId: e,
              st: t || "appkit",
              sv: a || "html-wagmi-4.2.2",
            };
          },
          _filterOutExtensions: (e) =>
            h.H.state.isUniversalProvider
              ? e.filter((e) =>
                  Boolean(e.mobile_link || e.desktop_link || e.webapp_link)
                )
              : e,
          async _fetchWalletImage(e) {
            const t = `${_.baseUrl}/getWalletImage/${e}`,
              a = await _.getBlob({ path: t, params: C._getSdkProperties() });
            l.j.setWalletImage(e, URL.createObjectURL(a));
          },
          async _fetchNetworkImage(e) {
            const t = `${_.baseUrl}/public/getAssetImage/${e}`,
              a = await _.getBlob({ path: t, params: C._getSdkProperties() });
            l.j.setNetworkImage(e, URL.createObjectURL(a));
          },
          async _fetchConnectorImage(e) {
            const t = `${_.baseUrl}/public/getAssetImage/${e}`,
              a = await _.getBlob({ path: t, params: C._getSdkProperties() });
            l.j.setConnectorImage(e, URL.createObjectURL(a));
          },
          async _fetchCurrencyImage(e) {
            const t = `${_.baseUrl}/public/getCurrencyImage/${e}`,
              a = await _.getBlob({ path: t, params: C._getSdkProperties() });
            l.j.setCurrencyImage(e, URL.createObjectURL(a));
          },
          async _fetchTokenImage(e) {
            const t = `${_.baseUrl}/public/getTokenImage/${e}`,
              a = await _.getBlob({ path: t, params: C._getSdkProperties() });
            l.j.setTokenImage(e, URL.createObjectURL(a));
          },
          async fetchNetworkImages() {
            const e = d.W.getAllRequestedCaipNetworks(),
              t =
                null === e || void 0 === e
                  ? void 0
                  : e
                      .map((e) => {
                        let { assets: t } = e;
                        return null === t || void 0 === t ? void 0 : t.imageId;
                      })
                      .filter(Boolean)
                      .filter((e) => !n.$.getNetworkImageById(e));
            t &&
              (await Promise.allSettled(t.map((e) => C._fetchNetworkImage(e))));
          },
          async fetchConnectorImages() {
            const { connectors: e } = u.a.state,
              t = e
                .map((e) => {
                  let { imageId: t } = e;
                  return t;
                })
                .filter(Boolean);
            await Promise.allSettled(t.map((e) => C._fetchConnectorImage(e)));
          },
          async fetchCurrencyImages() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            await Promise.allSettled(e.map((e) => C._fetchCurrencyImage(e)));
          },
          async fetchTokenImages() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            await Promise.allSettled(e.map((e) => C._fetchTokenImage(e)));
          },
          async fetchWallets(e) {
            var t, a, r;
            const o = null !== (t = e.exclude) && void 0 !== t ? t : [];
            return (
              C._getSdkProperties().sv.startsWith("html-core-") && o.push(...v),
              await _.get({
                path: "/getWallets",
                params: {
                  ...C._getSdkProperties(),
                  ...e,
                  page: String(e.page),
                  entries: String(e.entries),
                  include:
                    null === (a = e.include) || void 0 === a
                      ? void 0
                      : a.join(","),
                  exclude:
                    null === (r = e.exclude) || void 0 === r
                      ? void 0
                      : r.join(","),
                },
              })
            );
          },
          async fetchFeaturedWallets() {
            const { featuredWalletIds: e } = h.H.state;
            if (null !== e && void 0 !== e && e.length) {
              var t;
              const a = {
                  ...C._getSdkProperties(),
                  page: 1,
                  entries:
                    null !==
                      (t = null === e || void 0 === e ? void 0 : e.length) &&
                    void 0 !== t
                      ? t
                      : 4,
                  include: e,
                },
                { data: r } = await C.fetchWallets(a);
              r.sort((t, a) => e.indexOf(t.id) - e.indexOf(a.id));
              const o = r.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(o.map((e) => C._fetchWalletImage(e))),
                (E.featured = r),
                (E.allFeatured = r);
            }
          },
          async fetchRecommendedWallets() {
            try {
              E.isFetchingRecommendedWallets = !0;
              const {
                  includeWalletIds: e,
                  excludeWalletIds: t,
                  featuredWalletIds: a,
                } = h.H.state,
                r = [
                  ...(null !== t && void 0 !== t ? t : []),
                  ...(null !== a && void 0 !== a ? a : []),
                ].filter(Boolean),
                o = {
                  page: 1,
                  entries: 4,
                  include: e,
                  exclude: r,
                  chains: d.W.getRequestedCaipNetworkIds().join(","),
                },
                { data: n, count: i } = await C.fetchWallets(o),
                s = c.i.getRecentWallets(),
                l = n.map((e) => e.image_id).filter(Boolean),
                u = s.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(
                [...l, ...u].map((e) => C._fetchWalletImage(e))
              ),
                (E.recommended = n),
                (E.allRecommended = n),
                (E.count = null !== i && void 0 !== i ? i : 0);
            } catch {
            } finally {
              E.isFetchingRecommendedWallets = !1;
            }
          },
          async fetchWalletsByPage(e) {
            let { page: t } = e;
            const {
                includeWalletIds: a,
                excludeWalletIds: r,
                featuredWalletIds: o,
              } = h.H.state,
              n = d.W.getRequestedCaipNetworkIds().join(","),
              s = {
                page: t,
                entries: 40,
                include: a,
                exclude: [
                  ...E.recommended.map((e) => {
                    let { id: t } = e;
                    return t;
                  }),
                  ...(null !== r && void 0 !== r ? r : []),
                  ...(null !== o && void 0 !== o ? o : []),
                ].filter(Boolean),
                chains: n,
              },
              { data: c, count: l } = await C.fetchWallets(s),
              u = c
                .slice(0, 20)
                .map((e) => e.image_id)
                .filter(Boolean);
            await Promise.allSettled(u.map((e) => C._fetchWalletImage(e))),
              (E.wallets = i.w.uniqueBy(
                [...E.wallets, ...C._filterOutExtensions(c)],
                "id"
              )),
              (E.count = l > E.count ? l : E.count),
              (E.page = t);
          },
          async initializeExcludedWallets(e) {
            let { ids: t } = e;
            const a = d.W.getRequestedCaipNetworkIds().join(","),
              r = { page: 1, entries: t.length, include: t, chains: a },
              { data: o } = await C.fetchWallets(r);
            o &&
              o.forEach((e) => {
                E.excludedWallets.push({ rdns: e.rdns, name: e.name });
              });
          },
          async searchWallet(e) {
            let { search: t, badge: a } = e;
            const { includeWalletIds: r, excludeWalletIds: o } = h.H.state,
              n = d.W.getRequestedCaipNetworkIds().join(",");
            E.search = [];
            const s = {
                page: 1,
                entries: 100,
                search: null === t || void 0 === t ? void 0 : t.trim(),
                badge_type: a,
                include: r,
                exclude: o,
                chains: n,
              },
              { data: c } = await C.fetchWallets(s);
            p.E.sendEvent({
              type: "track",
              event: "SEARCH_WALLET",
              properties: {
                badge: null !== a && void 0 !== a ? a : "",
                search: null !== t && void 0 !== t ? t : "",
              },
            });
            const l = c.map((e) => e.image_id).filter(Boolean);
            await Promise.allSettled([
              ...l.map((e) => C._fetchWalletImage(e)),
              i.w.wait(300),
            ]),
              (E.search = C._filterOutExtensions(c));
          },
          initPromise(e, t) {
            const a = E.promises[e];
            return a || (E.promises[e] = t());
          },
          prefetch() {
            let {
              fetchConnectorImages: e = !0,
              fetchFeaturedWallets: t = !0,
              fetchRecommendedWallets: a = !0,
              fetchNetworkImages: r = !0,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            const o = [
              e && C.initPromise("connectorImages", C.fetchConnectorImages),
              t && C.initPromise("featuredWallets", C.fetchFeaturedWallets),
              a &&
                C.initPromise("recommendedWallets", C.fetchRecommendedWallets),
              r && C.initPromise("networkImages", C.fetchNetworkImages),
            ].filter(Boolean);
            return Promise.allSettled(o);
          },
          prefetchAnalyticsConfig() {
            var e;
            null !== (e = h.H.state.features) &&
              void 0 !== e &&
              e.analytics &&
              C.fetchAnalyticsConfig();
          },
          async fetchAnalyticsConfig() {
            try {
              const { isAnalyticsEnabled: e } = await _.get({
                path: "/getAnalyticsConfig",
                params: C._getSdkProperties(),
              });
              h.H.setFeatures({ analytics: e });
            } catch (e) {
              h.H.setFeatures({ analytics: !1 });
            }
          },
          setFilterByNamespace(e) {
            if (!e)
              return (
                (E.featured = E.allFeatured),
                void (E.recommended = E.allRecommended)
              );
            const t = d.W.getRequestedCaipNetworkIds().join(",");
            (E.featured = E.allFeatured.filter((e) => {
              var a;
              return null === (a = e.chains) || void 0 === a
                ? void 0
                : a.some((e) => t.includes(e));
            })),
              (E.recommended = E.allRecommended.filter((e) => {
                var a;
                return null === (a = e.chains) || void 0 === a
                  ? void 0
                  : a.some((e) => t.includes(e));
              }));
          },
        };
    },
    70039: (e, t, a) => {
      a.d(t, { _: () => Z });
      var r = a(10719),
        o = a(55639),
        n = a(71898),
        i = a(73082),
        s = a(37687),
        c = a(64066),
        l = a(4470),
        d = a(69084),
        u = a(23871),
        p = a(63157),
        h = a(458),
        v = a(16733),
        m = a(75673),
        _ = a(21369),
        E = a(24026),
        C = a(6951),
        g = a(89623),
        A = a(62028),
        w = a(88361),
        N = a(37769),
        f = a(45511),
        T = a(43437),
        R = a(99296),
        b = a(29269),
        I = a(74364),
        y = a(62550),
        P = a(18933),
        S = a(58313),
        k = a(80240),
        O = a(83454),
        U = a(67415),
        x = (a(71377), a(2195), a(40777));
      var D = a(21579);
      let L, W, M;
      function z(e) {
        W &&
          M &&
          ("light" === e
            ? (W.removeAttribute("media"), (M.media = "enabled"))
            : (M.removeAttribute("media"), (W.media = "enabled")));
      }
      function B(e) {
        return {
          core: D.AH`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0, D.iz)(
          null !== e && void 0 !== e && e["--w3m-color-mix-strength"]
            ? `${e["--w3m-color-mix-strength"]}%`
            : "0%"
        )};
        --w3m-font-family: ${(0, D.iz)(
          (null === e || void 0 === e ? void 0 : e["--w3m-font-family"]) ||
            "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;"
        )};
        --w3m-font-size-master: ${(0, D.iz)(
          (null === e || void 0 === e ? void 0 : e["--w3m-font-size-master"]) ||
            "10px"
        )};
        --w3m-border-radius-master: ${(0, D.iz)(
          (null === e || void 0 === e
            ? void 0
            : e["--w3m-border-radius-master"]) || "4px"
        )};
        --w3m-z-index: ${(0, D.iz)(
          (null === e || void 0 === e ? void 0 : e["--w3m-z-index"]) || 999
        )};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,
          light: D.AH`
      :root {
        --w3m-color-mix: ${(0, D.iz)(
          (null === e || void 0 === e ? void 0 : e["--w3m-color-mix"]) || "#fff"
        )};
        --w3m-accent: ${(0, D.iz)((0, o.o)(e, "dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0, D.iz)(
          (0, o.o)(e, "dark")["--w3m-background"]
        )};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,
          dark: D.AH`
      :root {
        --w3m-color-mix: ${(0, D.iz)(
          (null === e || void 0 === e ? void 0 : e["--w3m-color-mix"]) || "#000"
        )};
        --w3m-accent: ${(0, D.iz)((0, o.o)(e, "light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0, D.iz)(
          (0, o.o)(e, "light")["--w3m-background"]
        )};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `,
        };
      }
      D.AH`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,
        D.AH`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,
        D.AH`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;
      a(88112);
      var F = a(60963),
        H = a(50771);
      const j = {
        createLogger(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "error";
          const a = (0, H.iP)({ level: t }),
            { logger: r } = (0, H.D5)({ opts: a });
          return (
            (r.error = function () {
              for (
                var t = arguments.length, a = new Array(t), r = 0;
                r < t;
                r++
              )
                a[r] = arguments[r];
              for (const o of a) if (o instanceof Error) return void e(o, ...a);
              e(void 0, ...a);
            }),
            r
          );
        },
      };
      var K = a(26498),
        G = a(60713),
        q = a(57456),
        V = a(79631),
        Y = a(93641);
      class $ extends q.X {
        setUniversalProvider(e) {
          this.addConnector(
            new V.F({
              provider: e,
              caipNetworks: this.getCaipNetworks(),
              namespace: this.namespace,
            })
          );
        }
        async connect(e) {
          return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: Number(e.chainId),
            provider: this.provider,
            address: "",
          });
        }
        async disconnect() {
          try {
            const e = this.getWalletConnectConnector();
            await e.disconnect();
          } catch (e) {
            console.warn("UniversalAdapter:disconnect - error", e);
          }
        }
        async getAccounts(e) {
          var t;
          let { namespace: a } = e;
          const r = this.provider,
            o =
              (null === r ||
              void 0 === r ||
              null === (t = r.session) ||
              void 0 === t ||
              null === (t = t.namespaces) ||
              void 0 === t ||
              null === (t = t[a]) ||
              void 0 === t ||
              null === (t = t.accounts) ||
              void 0 === t
                ? void 0
                : t
                    .map((e) => {
                      const [, , t] = e.split(":");
                      return t;
                    })
                    .filter((e, t, a) => a.indexOf(e) === t)) || [];
          return Promise.resolve({
            accounts: o.map((e) =>
              v.w.createAccount(a, e, "bip122" === a ? "payment" : "eoa")
            ),
          });
        }
        async syncConnectors() {
          return Promise.resolve();
        }
        async getBalance(e) {
          var t, a, r, o;
          var n;
          if (
            !(
              e.caipNetwork &&
              c.oU.BALANCE_SUPPORTED_CHAINS.includes(
                null === (t = e.caipNetwork) || void 0 === t
                  ? void 0
                  : t.chainNamespace
              )
            ) ||
            (null !== (a = e.caipNetwork) && void 0 !== a && a.testnet)
          )
            return {
              balance: "0.00",
              symbol:
                (null === (n = e.caipNetwork) || void 0 === n
                  ? void 0
                  : n.nativeCurrency.symbol) || "",
            };
          if (
            u.U.state.balanceLoading &&
            e.chainId ===
              (null === (r = p.W.state.activeCaipNetwork) || void 0 === r
                ? void 0
                : r.id)
          )
            return {
              balance: u.U.state.balance || "0.00",
              symbol: u.U.state.balanceSymbol || "",
            };
          const i = (await u.U.fetchTokenBalance()).find((t) => {
            var a, r;
            return (
              t.chainId ===
                `${
                  null === (a = e.caipNetwork) || void 0 === a
                    ? void 0
                    : a.chainNamespace
                }:${e.chainId}` &&
              t.symbol ===
                (null === (r = e.caipNetwork) || void 0 === r
                  ? void 0
                  : r.nativeCurrency.symbol)
            );
          });
          return {
            balance:
              (null === i || void 0 === i ? void 0 : i.quantity.numeric) ||
              "0.00",
            symbol:
              (null === i || void 0 === i ? void 0 : i.symbol) ||
              (null === (o = e.caipNetwork) || void 0 === o
                ? void 0
                : o.nativeCurrency.symbol) ||
              "",
          };
        }
        async signMessage(e) {
          var t;
          const { provider: a, message: o, address: n } = e;
          if (!a)
            throw new Error(
              "UniversalAdapter:signMessage - provider is undefined"
            );
          let i = "";
          if (
            (null === (t = p.W.state.activeCaipNetwork) || void 0 === t
              ? void 0
              : t.chainNamespace) === r.o.CHAIN.SOLANA
          ) {
            var s;
            i = (
              await a.request(
                {
                  method: "solana_signMessage",
                  params: {
                    message: K.A.encode(new TextEncoder().encode(o)),
                    pubkey: n,
                  },
                },
                null === (s = p.W.state.activeCaipNetwork) || void 0 === s
                  ? void 0
                  : s.caipNetworkId
              )
            ).signature;
          } else {
            var c;
            i = await a.request(
              { method: "personal_sign", params: [o, n] },
              null === (c = p.W.state.activeCaipNetwork) || void 0 === c
                ? void 0
                : c.caipNetworkId
            );
          }
          return { signature: i };
        }
        async estimateGas() {
          return Promise.resolve({ gas: BigInt(0) });
        }
        async getProfile() {
          return Promise.resolve({ profileImage: "", profileName: "" });
        }
        async sendTransaction() {
          return Promise.resolve({ hash: "" });
        }
        walletGetAssets(e) {
          return Promise.resolve({});
        }
        async writeContract() {
          return Promise.resolve({ hash: "" });
        }
        async getEnsAddress() {
          return Promise.resolve({ address: !1 });
        }
        parseUnits() {
          return 0n;
        }
        formatUnits() {
          return "0";
        }
        async getCapabilities() {
          return Promise.resolve({});
        }
        async grantPermissions() {
          return Promise.resolve({});
        }
        async revokePermissions() {
          return Promise.resolve("0x");
        }
        async syncConnection() {
          return Promise.resolve({
            id: "WALLET_CONNECT",
            type: "WALLET_CONNECT",
            chainId: 1,
            provider: this.provider,
            address: "",
          });
        }
        async switchNetwork(e) {
          const { caipNetwork: t } = e,
            a = this.getWalletConnectConnector();
          if (t.chainNamespace === r.o.CHAIN.EVM)
            try {
              var o;
              await (null === (o = a.provider) || void 0 === o
                ? void 0
                : o.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: (0, G.nj)(t.id) }],
                  }));
            } catch (l) {
              var n;
              if (
                l.code === Y.E.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
                l.code === Y.E.ERROR_INVALID_CHAIN_ID ||
                l.code === Y.E.ERROR_CODE_DEFAULT ||
                (null === l ||
                void 0 === l ||
                null === (n = l.data) ||
                void 0 === n ||
                null === (n = n.originalError) ||
                void 0 === n
                  ? void 0
                  : n.code) === Y.E.ERROR_CODE_UNRECOGNIZED_CHAIN_ID
              )
                try {
                  var i, s, c;
                  await (null === (i = a.provider) || void 0 === i
                    ? void 0
                    : i.request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: (0, G.nj)(t.id),
                            rpcUrls: [
                              null === t ||
                              void 0 === t ||
                              null === (s = t.rpcUrls.chainDefault) ||
                              void 0 === s
                                ? void 0
                                : s.http,
                            ],
                            chainName: t.name,
                            nativeCurrency: t.nativeCurrency,
                            blockExplorerUrls: [
                              null === (c = t.blockExplorers) || void 0 === c
                                ? void 0
                                : c.default.url,
                            ],
                          },
                        ],
                      }));
                } catch (d) {
                  throw new Error("Chain is not supported");
                }
            }
          a.provider.setDefaultChain(t.caipNetworkId);
        }
        getWalletConnectProvider() {
          const e = this.connectors.find((e) => "WALLET_CONNECT" === e.type);
          return null === e || void 0 === e ? void 0 : e.provider;
        }
      }
      var X = a(25057);
      class J {
        constructor(e) {
          (this.chainNamespaces = []),
            (this.reportedAlertErrors = {}),
            (this.getCaipNetwork = (e, t) => {
              if (e) {
                var a, r, o;
                const n =
                  null === (a = p.W.getNetworkData(e)) ||
                  void 0 === a ||
                  null === (a = a.requestedCaipNetworks) ||
                  void 0 === a
                    ? void 0
                    : a.find((e) => e.id === t);
                if (n) return n;
                const i =
                  null === (r = p.W.getNetworkData(e)) || void 0 === r
                    ? void 0
                    : r.caipNetwork;
                return (
                  i ||
                  (null ===
                    (o = p.W.getRequestedCaipNetworks(e).filter(
                      (t) => t.chainNamespace === e
                    )) || void 0 === o
                    ? void 0
                    : o[0])
                );
              }
              return p.W.state.activeCaipNetwork || this.defaultCaipNetwork;
            }),
            (this.getCaipNetworkId = () => {
              const e = this.getCaipNetwork();
              if (e) return e.id;
            }),
            (this.getCaipNetworks = (e) => p.W.getCaipNetworks(e)),
            (this.getActiveChainNamespace = () => p.W.state.activeChain),
            (this.setRequestedCaipNetworks = (e, t) => {
              p.W.setRequestedCaipNetworks(e, t);
            }),
            (this.getApprovedCaipNetworkIds = () =>
              p.W.getAllApprovedCaipNetworkIds()),
            (this.getCaipAddress = (e) =>
              p.W.state.activeChain !== e && e
                ? p.W.getAccountProp("caipAddress", e)
                : p.W.state.activeCaipAddress),
            (this.setClientId = (e) => {
              y.T.setClientId(e);
            }),
            (this.getProvider = (e) => w.A.getProvider(e)),
            (this.getProviderType = (e) => w.A.getProviderId(e)),
            (this.getPreferredAccountType = (e) => {
              var t;
              return null === (t = u.U.state.preferredAccountTypes) ||
                void 0 === t
                ? void 0
                : t[e];
            }),
            (this.setCaipAddress = (e, t) => {
              u.U.setCaipAddress(e, t);
            }),
            (this.setBalance = (e, t, a) => {
              u.U.setBalance(e, t, a);
            }),
            (this.setProfileName = (e, t) => {
              u.U.setProfileName(e, t);
            }),
            (this.setProfileImage = (e, t) => {
              u.U.setProfileImage(e, t);
            }),
            (this.setUser = (e, t) => {
              u.U.setUser(e, t), h.H.state.enableEmbedded && P.W.close();
            }),
            (this.resetAccount = (e) => {
              u.U.resetAccount(e);
            }),
            (this.setCaipNetwork = (e) => {
              p.W.setActiveCaipNetwork(e);
            }),
            (this.setCaipNetworkOfNamespace = (e, t) => {
              p.W.setChainNetworkData(t, { caipNetwork: e });
            }),
            (this.setAllAccounts = (e, t) => {
              u.U.setAllAccounts(e, t),
                h.H.setHasMultipleAddresses(
                  (null === e || void 0 === e ? void 0 : e.length) > 1
                );
            }),
            (this.setStatus = (e, t) => {
              u.U.setStatus(e, t),
                n.a.isConnected()
                  ? _.i.setConnectionStatus("connected")
                  : _.i.setConnectionStatus("disconnected");
            }),
            (this.getAddressByChainNamespace = (e) =>
              p.W.getAccountProp("address", e)),
            (this.setConnectors = (e) => {
              const t = [...n.a.state.allConnectors, ...e];
              n.a.setConnectors(t);
            }),
            (this.fetchIdentity = (e) => y.T.fetchIdentity(e)),
            (this.getReownName = (e) => S.f.getNamesForAddress(e)),
            (this.getConnectors = () => n.a.getConnectors()),
            (this.getConnectorImage = (e) => k.$.getConnectorImage(e)),
            (this.setConnectedWalletInfo = (e, t) => {
              const a = w.A.getProviderId(t),
                r = e ? { ...e, type: a } : void 0;
              u.U.setConnectedWalletInfo(r, t);
            }),
            (this.getIsConnectedState = () =>
              Boolean(p.W.state.activeCaipAddress)),
            (this.addAddressLabel = (e, t, a) => {
              u.U.addAddressLabel(e, t, a);
            }),
            (this.removeAddressLabel = (e, t) => {
              u.U.removeAddressLabel(e, t);
            }),
            (this.getAddress = (e) =>
              p.W.state.activeChain !== e && e
                ? p.W.getAccountProp("address", e)
                : u.U.state.address),
            (this.setApprovedCaipNetworksData = (e) =>
              p.W.setApprovedCaipNetworksData(e)),
            (this.resetNetwork = (e) => {
              p.W.resetNetwork(e);
            }),
            (this.addConnector = (e) => {
              n.a.addConnector(e);
            }),
            (this.resetWcConnection = () => {
              i.x.resetWcConnection();
            }),
            (this.setAddressExplorerUrl = (e, t) => {
              u.U.setAddressExplorerUrl(e, t);
            }),
            (this.setSmartAccountDeployed = (e, t) => {
              u.U.setSmartAccountDeployed(e, t);
            }),
            (this.setSmartAccountEnabledNetworks = (e, t) => {
              p.W.setSmartAccountEnabledNetworks(e, t);
            }),
            (this.setPreferredAccountType = (e, t) => {
              u.U.setPreferredAccountType(e, t);
            }),
            (this.setEIP6963Enabled = (e) => {
              h.H.setEIP6963Enabled(e);
            }),
            (this.handleUnsafeRPCRequest = () => {
              if (this.isOpen()) {
                if (this.isTransactionStackEmpty()) return;
                this.redirect("ApproveTransaction");
              } else this.open({ view: "ApproveTransaction" });
            }),
            (this.options = e),
            (this.version = e.sdkVersion),
            (this.caipNetworks = this.extendCaipNetworks(e)),
            (this.chainNamespaces = this.getChainNamespacesSet(
              e.adapters,
              this.caipNetworks
            )),
            (this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e)),
            (this.chainAdapters = this.createAdapters(e.adapters)),
            this.initialize(e);
        }
        getChainNamespacesSet(e, t) {
          const a =
            null === e || void 0 === e
              ? void 0
              : e.map((e) => e.namespace).filter((e) => Boolean(e));
          if (null !== a && void 0 !== a && a.length) return [...new Set(a)];
          const r =
            null === t || void 0 === t
              ? void 0
              : t.map((e) => e.chainNamespace);
          return [...new Set(r)];
        }
        async initialize(e) {
          this.initControllers(e),
            await this.initChainAdapters(),
            await this.injectModalUi(),
            this.sendInitializeEvent(e),
            l.z.set({ initialized: !0 }),
            await this.syncExistingConnection();
        }
        sendInitializeEvent(e) {
          var t;
          const { ...a } = e;
          delete a.adapters,
            delete a.universalProvider,
            s.E.sendEvent({
              type: "track",
              event: "INITIALIZE",
              properties: {
                ...a,
                networks: e.networks.map((e) => e.id),
                siweConfig: {
                  options:
                    (null === (t = e.siweConfig) || void 0 === t
                      ? void 0
                      : t.options) || {},
                },
              },
            });
        }
        initControllers(e) {
          this.initializeOptionsController(e),
            this.initializeChainController(e),
            this.initializeThemeController(e),
            this.initializeConnectionController(e),
            this.initializeConnectorController();
        }
        initializeThemeController(e) {
          e.themeMode && m.W.setThemeMode(e.themeMode),
            e.themeVariables && m.W.setThemeVariables(e.themeVariables);
        }
        initializeChainController(e) {
          var t;
          if (!this.connectionControllerClient || !this.networkControllerClient)
            throw new Error(
              "ConnectionControllerClient and NetworkControllerClient must be set"
            );
          p.W.initialize(
            null !== (t = e.adapters) && void 0 !== t ? t : [],
            this.caipNetworks,
            {
              connectionControllerClient: this.connectionControllerClient,
              networkControllerClient: this.networkControllerClient,
            }
          );
          const a = this.getDefaultNetwork();
          a && p.W.setActiveCaipNetwork(a);
        }
        initializeConnectionController(e) {
          var t;
          i.x.setWcBasic(null !== (t = e.basic) && void 0 !== t && t);
        }
        initializeConnectorController() {
          n.a.initialize(this.chainNamespaces);
        }
        initializeOptionsController(e) {
          var t;
          h.H.setDebug(!1 !== e.debug),
            h.H.setEnableWalletConnect(!1 !== e.enableWalletConnect),
            h.H.setEnableWalletGuide(!1 !== e.enableWalletGuide),
            h.H.setEnableWallets(!1 !== e.enableWallets),
            h.H.setEIP6963Enabled(!1 !== e.enableEIP6963),
            h.H.setEnableNetworkSwitch(!1 !== e.enableNetworkSwitch),
            h.H.setEnableAuthLogger(!1 !== e.enableAuthLogger),
            h.H.setCustomRpcUrls(e.customRpcUrls),
            h.H.setSdkVersion(e.sdkVersion),
            h.H.setProjectId(e.projectId),
            h.H.setEnableEmbedded(e.enableEmbedded),
            h.H.setAllWallets(e.allWallets),
            h.H.setIncludeWalletIds(e.includeWalletIds),
            h.H.setExcludeWalletIds(e.excludeWalletIds),
            h.H.setFeaturedWalletIds(e.featuredWalletIds),
            h.H.setTokens(e.tokens),
            h.H.setTermsConditionsUrl(e.termsConditionsUrl),
            h.H.setPrivacyPolicyUrl(e.privacyPolicyUrl),
            h.H.setCustomWallets(e.customWallets),
            h.H.setFeatures(e.features),
            h.H.setAllowUnsupportedChain(e.allowUnsupportedChain),
            h.H.setUniversalProviderConfigOverride(
              e.universalProviderConfigOverride
            ),
            h.H.setDefaultAccountTypes(e.defaultAccountTypes);
          const a = _.i.getPreferredAccountTypes(),
            o = { ...h.H.state.defaultAccountTypes, ...a };
          u.U.setPreferredAccountTypes(o);
          const n = this.getDefaultMetaData();
          if (
            (!e.metadata && n && (e.metadata = n),
            h.H.setMetadata(e.metadata),
            h.H.setDisableAppend(e.disableAppend),
            h.H.setEnableEmbedded(e.enableEmbedded),
            h.H.setSIWX(e.siwx),
            !e.projectId)
          )
            return void E.h.open(
              A.R.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,
              "error"
            );
          if (
            (null === (t = e.adapters) || void 0 === t
              ? void 0
              : t.find((e) => e.namespace === r.o.CHAIN.EVM)) &&
            e.siweConfig
          ) {
            if (e.siwx)
              throw new Error(
                "Cannot set both `siweConfig` and `siwx` options"
              );
            h.H.setSIWX(e.siweConfig.mapToSIWX());
          }
        }
        getDefaultMetaData() {
          var e, t, a;
          return "undefined" !== typeof window &&
            "undefined" !== typeof document
            ? {
                name:
                  (null === (e = document.getElementsByTagName("title")) ||
                  void 0 === e ||
                  null === (e = e[0]) ||
                  void 0 === e
                    ? void 0
                    : e.textContent) || "",
                description:
                  (null ===
                    (t = document.querySelector(
                      'meta[property="og:description"]'
                    )) || void 0 === t
                    ? void 0
                    : t.content) || "",
                url: window.location.origin,
                icons: [
                  (null === (a = document.querySelector('link[rel~="icon"]')) ||
                  void 0 === a
                    ? void 0
                    : a.href) || "",
                ],
              }
            : null;
        }
        setUnsupportedNetwork(e) {
          const t = this.getActiveChainNamespace();
          if (t) {
            const a = F.R.getUnsupportedNetwork(`${t}:${e}`);
            p.W.setActiveCaipNetwork(a);
          }
        }
        getDefaultNetwork() {
          return F.R.getCaipNetworkFromStorage(this.defaultCaipNetwork);
        }
        extendCaipNetwork(e, t) {
          return F.R.extendCaipNetwork(e, {
            customNetworkImageUrls: t.chainImages,
            projectId: t.projectId,
          });
        }
        extendCaipNetworks(e) {
          return F.R.extendCaipNetworks(e.networks, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId,
          });
        }
        extendDefaultCaipNetwork(e) {
          const t = e.networks.find((t) => {
            var a;
            return (
              t.id ===
              (null === (a = e.defaultNetwork) || void 0 === a ? void 0 : a.id)
            );
          });
          return t
            ? F.R.extendCaipNetwork(t, {
                customNetworkImageUrls: e.chainImages,
                customRpcUrls: e.customRpcUrls,
                projectId: e.projectId,
              })
            : void 0;
        }
        createClients() {
          (this.connectionControllerClient = {
            connectWalletConnect: async () => {
              var e;
              const t = p.W.state.activeChain,
                a = this.getAdapter(t),
                r =
                  null === (e = this.getCaipNetwork(t)) || void 0 === e
                    ? void 0
                    : e.id;
              if (!a) throw new Error("Adapter not found");
              const o = await a.connectWalletConnect(r);
              this.close(),
                this.setClientId(
                  (null === o || void 0 === o ? void 0 : o.clientId) || null
                ),
                _.i.setConnectedNamespaces([...p.W.state.chains.keys()]),
                this.chainNamespaces.forEach((e) => {
                  n.a.setConnectorId(g.o.CONNECTOR_TYPE_WALLET_CONNECT, e);
                }),
                await this.syncWalletConnectAccount();
            },
            connectExternal: async (e) => {
              var t, a;
              let {
                id: r,
                info: o,
                type: n,
                provider: i,
                chain: s,
                caipNetwork: c,
              } = e;
              const l = p.W.state.activeChain,
                d = s || l,
                u = this.getAdapter(d);
              if (s && s !== l && !c) {
                const e = this.getCaipNetworks().find(
                  (e) => e.chainNamespace === s
                );
                e && this.setCaipNetwork(e);
              }
              if (!u) throw new Error("Adapter not found");
              const h = this.getCaipNetwork(d),
                v = await u.connect({
                  id: r,
                  info: o,
                  type: n,
                  provider: i,
                  chainId:
                    (null === c || void 0 === c ? void 0 : c.id) ||
                    (null === h || void 0 === h ? void 0 : h.id),
                  rpcUrl:
                    (null === c ||
                    void 0 === c ||
                    null === (t = c.rpcUrls) ||
                    void 0 === t ||
                    null === (t = t.default) ||
                    void 0 === t ||
                    null === (t = t.http) ||
                    void 0 === t
                      ? void 0
                      : t[0]) ||
                    (null === h ||
                    void 0 === h ||
                    null === (a = h.rpcUrls) ||
                    void 0 === a ||
                    null === (a = a.default) ||
                    void 0 === a ||
                    null === (a = a.http) ||
                    void 0 === a
                      ? void 0
                      : a[0]),
                });
              if (!v) return;
              _.i.addConnectedNamespace(d),
                this.syncProvider({ ...v, chainNamespace: d });
              const { accounts: m } = await u.getAccounts({
                namespace: d,
                id: r,
              });
              this.setAllAccounts(m, d), this.setStatus("connected", d);
            },
            reconnectExternal: async (e) => {
              let { id: t, info: a, type: r, provider: o } = e;
              const n = p.W.state.activeChain,
                i = this.getAdapter(n);
              var s;
              null !== i &&
                void 0 !== i &&
                i.reconnect &&
                (await (null === i || void 0 === i
                  ? void 0
                  : i.reconnect({
                      id: t,
                      info: a,
                      type: r,
                      provider: o,
                      chainId:
                        null === (s = this.getCaipNetwork()) || void 0 === s
                          ? void 0
                          : s.id,
                    })),
                _.i.addConnectedNamespace(n));
            },
            disconnect: async (e) => {
              const t = e || p.W.state.activeChain,
                a = this.getAdapter(t),
                r = w.A.getProvider(t),
                o = w.A.getProviderId(t);
              await (null === a || void 0 === a
                ? void 0
                : a.disconnect({ provider: r, providerType: o })),
                _.i.removeConnectedNamespace(t),
                w.A.resetChain(t),
                this.setUser(void 0, t),
                this.setStatus("disconnected", t);
            },
            checkInstalled: (e) =>
              e
                ? e.some((e) => {
                    var t;
                    return Boolean(
                      null === (t = window.ethereum) || void 0 === t
                        ? void 0
                        : t[String(e)]
                    );
                  })
                : Boolean(window.ethereum),
            signMessage: async (e) => {
              const t = this.getAdapter(p.W.state.activeChain),
                a = await (null === t || void 0 === t
                  ? void 0
                  : t.signMessage({
                      message: e,
                      address: u.U.state.address,
                      provider: w.A.getProvider(p.W.state.activeChain),
                    }));
              return (null === a || void 0 === a ? void 0 : a.signature) || "";
            },
            sendTransaction: async (e) => {
              if (e.chainNamespace === r.o.CHAIN.EVM) {
                const t = this.getAdapter(p.W.state.activeChain),
                  a = w.A.getProvider(p.W.state.activeChain),
                  r = await (null === t || void 0 === t
                    ? void 0
                    : t.sendTransaction({
                        ...e,
                        caipNetwork: this.getCaipNetwork(),
                        provider: a,
                      }));
                return (null === r || void 0 === r ? void 0 : r.hash) || "";
              }
              return "";
            },
            estimateGas: async (e) => {
              if (e.chainNamespace === r.o.CHAIN.EVM) {
                const t = this.getAdapter(p.W.state.activeChain),
                  a = w.A.getProvider(p.W.state.activeChain),
                  r = this.getCaipNetwork();
                if (!r) throw new Error("CaipNetwork is undefined");
                const o = await (null === t || void 0 === t
                  ? void 0
                  : t.estimateGas({ ...e, provider: a, caipNetwork: r }));
                return (null === o || void 0 === o ? void 0 : o.gas) || 0n;
              }
              return 0n;
            },
            getEnsAvatar: async () => {
              var e;
              const t = this.getAdapter(p.W.state.activeChain),
                a = await (null === t || void 0 === t
                  ? void 0
                  : t.getProfile({
                      address: u.U.state.address,
                      chainId: Number(
                        null === (e = this.getCaipNetwork()) || void 0 === e
                          ? void 0
                          : e.id
                      ),
                    }));
              return (
                (null === a || void 0 === a ? void 0 : a.profileImage) || !1
              );
            },
            getEnsAddress: async (e) => {
              const t = this.getAdapter(p.W.state.activeChain),
                a = this.getCaipNetwork();
              if (!a) return !1;
              const r = await (null === t || void 0 === t
                ? void 0
                : t.getEnsAddress({ name: e, caipNetwork: a }));
              return (null === r || void 0 === r ? void 0 : r.address) || !1;
            },
            writeContract: async (e) => {
              const t = this.getAdapter(p.W.state.activeChain),
                a = this.getCaipNetwork(),
                r = this.getCaipAddress(),
                o = w.A.getProvider(p.W.state.activeChain);
              if (!a || !r)
                throw new Error("CaipNetwork or CaipAddress is undefined");
              const n = await (null === t || void 0 === t
                ? void 0
                : t.writeContract({
                    ...e,
                    caipNetwork: a,
                    provider: o,
                    caipAddress: r,
                  }));
              return null === n || void 0 === n ? void 0 : n.hash;
            },
            parseUnits: (e, t) => {
              var a;
              const r = this.getAdapter(p.W.state.activeChain);
              return null !==
                (a =
                  null === r || void 0 === r
                    ? void 0
                    : r.parseUnits({ value: e, decimals: t })) && void 0 !== a
                ? a
                : 0n;
            },
            formatUnits: (e, t) => {
              var a;
              const r = this.getAdapter(p.W.state.activeChain);
              return null !==
                (a =
                  null === r || void 0 === r
                    ? void 0
                    : r.formatUnits({ value: e, decimals: t })) && void 0 !== a
                ? a
                : "0";
            },
            getCapabilities: async (e) => {
              const t = this.getAdapter(p.W.state.activeChain);
              return await (null === t || void 0 === t
                ? void 0
                : t.getCapabilities(e));
            },
            grantPermissions: async (e) => {
              const t = this.getAdapter(p.W.state.activeChain);
              return await (null === t || void 0 === t
                ? void 0
                : t.grantPermissions(e));
            },
            revokePermissions: async (e) => {
              const t = this.getAdapter(p.W.state.activeChain);
              return null !== t && void 0 !== t && t.revokePermissions
                ? await t.revokePermissions(e)
                : "0x";
            },
            walletGetAssets: async (e) => {
              var t;
              const a = this.getAdapter(p.W.state.activeChain);
              return null !==
                (t = await (null === a || void 0 === a
                  ? void 0
                  : a.walletGetAssets(e))) && void 0 !== t
                ? t
                : {};
            },
          }),
            (this.networkControllerClient = {
              switchCaipNetwork: async (e) => await this.switchCaipNetwork(e),
              getApprovedCaipNetworksData: async () =>
                this.getApprovedCaipNetworksData(),
            }),
            i.x.setClient(this.connectionControllerClient);
        }
        getApprovedCaipNetworksData() {
          if (
            w.A.getProviderId(p.W.state.activeChain) ===
            g.o.CONNECTOR_TYPE_WALLET_CONNECT
          ) {
            var e, t;
            const a =
              null === (e = this.universalProvider) ||
              void 0 === e ||
              null === (e = e.session) ||
              void 0 === e
                ? void 0
                : e.namespaces;
            return {
              supportsAllNetworks:
                "MetaMask Wallet" ===
                (null === (t = this.universalProvider) ||
                void 0 === t ||
                null === (t = t.session) ||
                void 0 === t ||
                null === (t = t.peer) ||
                void 0 === t
                  ? void 0
                  : t.metadata.name),
              approvedCaipNetworkIds: this.getChainsFromNamespaces(a),
            };
          }
          return { supportsAllNetworks: !0, approvedCaipNetworkIds: [] };
        }
        async switchCaipNetwork(e) {
          if (!e) return;
          const t = e.chainNamespace;
          if (this.getAddressByChainNamespace(e.chainNamespace)) {
            const a = w.A.getProvider(t),
              r = w.A.getProviderId(t);
            if (e.chainNamespace === p.W.state.activeChain) {
              const o = this.getAdapter(t);
              await (null === o || void 0 === o
                ? void 0
                : o.switchNetwork({
                    caipNetwork: e,
                    provider: a,
                    providerType: r,
                  }));
            } else if (
              (this.setCaipNetwork(e), r === g.o.CONNECTOR_TYPE_WALLET_CONNECT)
            )
              this.syncWalletConnectAccount();
            else {
              const a = this.getAddressByChainNamespace(t);
              a &&
                this.syncAccount({
                  address: a,
                  chainId: e.id,
                  chainNamespace: t,
                });
            }
          } else this.setCaipNetwork(e);
        }
        getChainsFromNamespaces() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.values(e).flatMap((e) => {
            const t = e.chains || [],
              a = e.accounts.map((e) => {
                const { chainId: t, chainNamespace: a } =
                  b.C.parseCaipAddress(e);
                return `${a}:${t}`;
              });
            return Array.from(new Set([...t, ...a]));
          });
        }
        createAdapters(e) {
          return (
            this.createClients(),
            this.chainNamespaces.reduce((t, a) => {
              const r =
                null === e || void 0 === e
                  ? void 0
                  : e.find((e) => e.namespace === a);
              var o;
              r
                ? (r.construct({
                    namespace: a,
                    projectId:
                      null === (o = this.options) || void 0 === o
                        ? void 0
                        : o.projectId,
                    networks: this.getCaipNetworks(),
                  }),
                  (t[a] = r))
                : (t[a] = new $({
                    namespace: a,
                    networks: this.getCaipNetworks(),
                  }));
              return t;
            }, {})
          );
        }
        async initChainAdapter(e) {
          var t;
          this.onConnectors(e),
            this.listenAdapter(e),
            null === (t = this.chainAdapters) ||
              void 0 === t ||
              t[e].syncConnectors(this.options, this),
            await this.createUniversalProviderForAdapter(e);
        }
        async initChainAdapters() {
          await Promise.all(
            this.chainNamespaces.map(async (e) => {
              await this.initChainAdapter(e);
            })
          );
        }
        onConnectors(e) {
          const t = this.getAdapter(e);
          null === t ||
            void 0 === t ||
            t.on("connectors", this.setConnectors.bind(this));
        }
        listenAdapter(e) {
          const t = this.getAdapter(e);
          if (!t) return;
          const a = _.i.getConnectionStatus();
          "connected" === a
            ? this.setStatus("connecting", e)
            : "disconnected" === a
            ? (_.i.clearAddressCache(), this.setStatus(a, e))
            : this.setStatus(a, e),
            t.on("switchNetwork", (t) => {
              let { address: a, chainId: r } = t;
              const o = this.getCaipNetworks().find(
                  (e) => e.id === r || e.caipNetworkId === r
                ),
                n = p.W.state.activeChain === e,
                i = p.W.getAccountProp("address", e);
              if (o) {
                const t = n && a ? a : i;
                t &&
                  this.syncAccount({
                    address: t,
                    chainId: o.id,
                    chainNamespace: e,
                  });
              } else this.setUnsupportedNetwork(r);
            }),
            t.on("disconnect", this.disconnect.bind(this, e)),
            t.on("pendingTransactions", () => {
              const e = u.U.state.address,
                t = p.W.state.activeCaipNetwork;
              e &&
                null !== t &&
                void 0 !== t &&
                t.id &&
                this.updateNativeBalance(e, t.id, t.chainNamespace);
            }),
            t.on("accountChanged", (t) => {
              var a;
              let { address: r, chainId: o } = t;
              const n = p.W.state.activeChain === e;
              if (n && o)
                this.syncAccount({ address: r, chainId: o, chainNamespace: e });
              else if (
                n &&
                null !== (a = p.W.state.activeCaipNetwork) &&
                void 0 !== a &&
                a.id
              ) {
                var i;
                this.syncAccount({
                  address: r,
                  chainId:
                    null === (i = p.W.state.activeCaipNetwork) || void 0 === i
                      ? void 0
                      : i.id,
                  chainNamespace: e,
                });
              } else this.syncAccountInfo(r, o, e);
            });
        }
        async createUniversalProviderForAdapter(e) {
          var t, a;
          (await this.getUniversalProvider(), this.universalProvider) &&
            (null === (t = this.chainAdapters) ||
              void 0 === t ||
              null === (t = t[e]) ||
              void 0 === t ||
              null === (a = t.setUniversalProvider) ||
              void 0 === a ||
              a.call(t, this.universalProvider));
        }
        async syncExistingConnection() {
          await Promise.allSettled(
            this.chainNamespaces.map((e) => this.syncNamespaceConnection(e))
          );
        }
        async syncNamespaceConnection(e) {
          try {
            const t = n.a.getConnectorId(e);
            switch ((this.setStatus("connecting", e), t)) {
              case r.o.CONNECTOR_ID.WALLET_CONNECT:
                await this.syncWalletConnectAccount();
                break;
              case r.o.CONNECTOR_ID.AUTH:
                break;
              default:
                await this.syncAdapterConnection(e);
            }
          } catch (t) {
            console.warn("AppKit couldn't sync existing connection", t),
              this.setStatus("disconnected", e);
          }
        }
        async syncAdapterConnection(e) {
          const t = this.getAdapter(e),
            a = n.a.getConnectorId(e),
            r = this.getCaipNetwork(e),
            o = n.a.getConnectors(e).find((e) => e.id === a);
          try {
            var i;
            if (!t || !o)
              throw new Error(
                `Adapter or connector not found for namespace ${e}`
              );
            if (null === r || void 0 === r || !r.id)
              throw new Error("CaipNetwork not found");
            const a = await (null === t || void 0 === t
              ? void 0
              : t.syncConnection({
                  namespace: e,
                  id: o.id,
                  chainId: r.id,
                  rpcUrl:
                    null === r ||
                    void 0 === r ||
                    null === (i = r.rpcUrls) ||
                    void 0 === i ||
                    null === (i = i.default) ||
                    void 0 === i ||
                    null === (i = i.http) ||
                    void 0 === i
                      ? void 0
                      : i[0],
                }));
            if (a) {
              const r = await (null === t || void 0 === t
                ? void 0
                : t.getAccounts({ namespace: e, id: o.id }));
              r && r.accounts.length > 0
                ? this.setAllAccounts(r.accounts, e)
                : this.setAllAccounts(
                    [v.w.createAccount(e, a.address, "eoa")],
                    e
                  ),
                this.syncProvider({ ...a, chainNamespace: e }),
                await this.syncAccount({ ...a, chainNamespace: e }),
                this.setStatus("connected", e);
            } else this.setStatus("disconnected", e);
          } catch (s) {
            this.setStatus("disconnected", e);
          }
        }
        async syncWalletConnectAccount() {
          const e = this.chainNamespaces.map(async (e) => {
            var t, a;
            const o = this.getAdapter(e),
              i =
                (null === (t = this.universalProvider) ||
                void 0 === t ||
                null === (t = t.session) ||
                void 0 === t ||
                null === (t = t.namespaces) ||
                void 0 === t ||
                null === (t = t[e]) ||
                void 0 === t
                  ? void 0
                  : t.accounts) || [],
              s =
                null === (a = p.W.state.activeCaipNetwork) || void 0 === a
                  ? void 0
                  : a.id,
              c =
                i.find((e) => {
                  const { chainId: t } = b.C.parseCaipAddress(e);
                  return (
                    t === (null === s || void 0 === s ? void 0 : s.toString())
                  );
                }) || i[0];
            if (c) {
              const t = b.C.validateCaipAddress(c),
                { chainId: a, address: i } = b.C.parseCaipAddress(t);
              if (
                (w.A.setProviderId(e, g.o.CONNECTOR_TYPE_WALLET_CONNECT),
                this.caipNetworks &&
                  p.W.state.activeCaipNetwork &&
                  (null === o || void 0 === o ? void 0 : o.namespace) !==
                    r.o.CHAIN.EVM)
              ) {
                const t =
                  null === o || void 0 === o
                    ? void 0
                    : o.getWalletConnectProvider({
                        caipNetworks: this.getCaipNetworks(),
                        provider: this.universalProvider,
                        activeCaipNetwork: p.W.state.activeCaipNetwork,
                      });
                w.A.setProvider(e, t);
              } else w.A.setProvider(e, this.universalProvider);
              n.a.setConnectorId(r.o.CONNECTOR_ID.WALLET_CONNECT, e),
                _.i.addConnectedNamespace(e),
                this.syncWalletConnectAccounts(e),
                await this.syncAccount({
                  address: i,
                  chainId: a,
                  chainNamespace: e,
                });
            } else this.setStatus("disconnected", e);
            await p.W.setApprovedCaipNetworksData(e);
          });
          await Promise.all(e);
        }
        syncWalletConnectAccounts(e) {
          var t;
          const a =
            null === (t = this.universalProvider) ||
            void 0 === t ||
            null === (t = t.session) ||
            void 0 === t ||
            null === (t = t.namespaces) ||
            void 0 === t ||
            null === (t = t[e]) ||
            void 0 === t ||
            null === (t = t.accounts) ||
            void 0 === t
              ? void 0
              : t
                  .map((e) => {
                    const { address: t } = b.C.parseCaipAddress(e);
                    return t;
                  })
                  .filter((e, t, a) => a.indexOf(e) === t);
          a &&
            this.setAllAccounts(
              a.map((t) =>
                v.w.createAccount(e, t, "bip122" === e ? "payment" : "eoa")
              ),
              e
            );
        }
        syncProvider(e) {
          let { type: t, provider: a, id: r, chainNamespace: o } = e;
          w.A.setProviderId(o, t),
            w.A.setProvider(o, a),
            n.a.setConnectorId(r, o);
        }
        async syncAccount(e) {
          var t;
          const a = e.chainNamespace === p.W.state.activeChain,
            o = p.W.getCaipNetworkByNamespace(e.chainNamespace, e.chainId),
            { address: n, chainId: i, chainNamespace: s } = e,
            { chainId: c } = _.i.getActiveNetworkProps(),
            l = i || c,
            d =
              (null === (t = p.W.state.activeCaipNetwork) || void 0 === t
                ? void 0
                : t.name) === r.o.UNSUPPORTED_NETWORK_NAME,
            v = p.W.getNetworkProp("supportsAllNetworks", s);
          if ((this.setStatus("connected", s), (!d || v) && l)) {
            let e = this.getCaipNetworks().find(
                (e) => e.id.toString() === l.toString()
              ),
              t = this.getCaipNetworks().find((e) => e.chainNamespace === s);
            if (!v && !e && !t) {
              const a = this.getApprovedCaipNetworkIds() || [],
                r = a.find((e) => {
                  var t;
                  return (
                    (null === (t = b.C.parseCaipNetworkId(e)) || void 0 === t
                      ? void 0
                      : t.chainId) === l.toString()
                  );
                }),
                o = a.find((e) => {
                  var t;
                  return (
                    (null === (t = b.C.parseCaipNetworkId(e)) || void 0 === t
                      ? void 0
                      : t.chainNamespace) === s
                  );
                });
              (e = this.getCaipNetworks().find((e) => e.caipNetworkId === r)),
                (t = this.getCaipNetworks().find(
                  (e) =>
                    e.caipNetworkId === o ||
                    ("deprecatedCaipNetworkId" in e &&
                      e.deprecatedCaipNetworkId === o)
                ));
            }
            const i = e || t;
            var m;
            if (
              (null === i || void 0 === i ? void 0 : i.chainNamespace) ===
              p.W.state.activeChain
            )
              h.H.state.enableNetworkSwitch &&
              !h.H.state.allowUnsupportedChain &&
              (null === (m = p.W.state.activeCaipNetwork) || void 0 === m
                ? void 0
                : m.name) === r.o.UNSUPPORTED_NETWORK_NAME
                ? p.W.showUnsupportedChainUI()
                : this.setCaipNetwork(i);
            else a || (o && this.setCaipNetworkOfNamespace(o, s));
            this.syncConnectedWalletInfo(s),
              C.y.isLowerCaseMatch(n, u.U.state.address) ||
                this.syncAccountInfo(
                  n,
                  null === i || void 0 === i ? void 0 : i.id,
                  s
                ),
              a
                ? await this.syncBalance({
                    address: n,
                    chainId: null === i || void 0 === i ? void 0 : i.id,
                    chainNamespace: s,
                  })
                : await this.syncBalance({
                    address: n,
                    chainId: null === o || void 0 === o ? void 0 : o.id,
                    chainNamespace: s,
                  });
          }
        }
        async syncAccountInfo(e, t, a) {
          const r = this.getCaipAddress(a),
            o = t || (null === r || void 0 === r ? void 0 : r.split(":")[1]);
          if (!o) return;
          const n = `${a}:${o}:${e}`;
          this.setCaipAddress(n, a),
            await this.syncIdentity({
              address: e,
              chainId: o,
              chainNamespace: a,
            });
        }
        async syncReownName(e, t) {
          try {
            const a = await this.getReownName(e);
            if (a[0]) {
              const e = a[0];
              this.setProfileName(e.name, t);
            } else this.setProfileName(null, t);
          } catch {
            this.setProfileName(null, t);
          }
        }
        syncConnectedWalletInfo(e) {
          const t = n.a.getConnectorId(e),
            a = w.A.getProviderId(e);
          if (
            a === g.o.CONNECTOR_TYPE_ANNOUNCED ||
            a === g.o.CONNECTOR_TYPE_INJECTED
          ) {
            if (t) {
              const a = this.getConnectors().find((e) => e.id === t);
              if (a) {
                const { info: t, name: r, imageUrl: o } = a,
                  n = o || this.getConnectorImage(a);
                this.setConnectedWalletInfo({ name: r, icon: n, ...t }, e);
              }
            }
          } else if (a === g.o.CONNECTOR_TYPE_WALLET_CONNECT) {
            const t = w.A.getProvider(e);
            var o;
            if (null !== t && void 0 !== t && t.session)
              this.setConnectedWalletInfo(
                {
                  ...t.session.peer.metadata,
                  name: t.session.peer.metadata.name,
                  icon:
                    null === (o = t.session.peer.metadata.icons) || void 0 === o
                      ? void 0
                      : o[0],
                },
                e
              );
          } else if (t)
            if (t === r.o.CONNECTOR_ID.COINBASE) {
              const t = this.getConnectors().find(
                (e) => e.id === r.o.CONNECTOR_ID.COINBASE
              );
              this.setConnectedWalletInfo(
                { name: "Coinbase Wallet", icon: this.getConnectorImage(t) },
                e
              );
            } else this.setConnectedWalletInfo({ name: t }, e);
        }
        async syncBalance(e) {
          I.L.getNetworksByNamespace(
            this.getCaipNetworks(),
            e.chainNamespace
          ).find((t) => {
            var a;
            return (
              t.id.toString() ===
              (null === (a = e.chainId) || void 0 === a ? void 0 : a.toString())
            );
          }) &&
            e.chainId &&
            (await this.updateNativeBalance(
              e.address,
              e.chainId,
              e.chainNamespace
            ));
        }
        async updateNativeBalance(e, t, a) {
          const r = this.getAdapter(a),
            o = p.W.getCaipNetworkByNamespace(a, t);
          if (r) {
            const n = await r.getBalance({
              address: e,
              chainId: t,
              caipNetwork: o,
              tokens: this.options.tokens,
            });
            this.setBalance(n.balance, n.symbol, a);
          }
        }
        async initializeUniversalAdapter() {
          var e,
            t,
            a,
            r,
            o,
            n,
            i,
            s,
            c,
            l,
            d,
            u = this;
          const p = j.createLogger(function (e) {
              e && u.handleAlertError(e);
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                a[r - 1] = arguments[r];
              console.error(...a);
            }),
            v = {
              projectId:
                null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.projectId,
              metadata: {
                name:
                  null !== (t = this.options) && void 0 !== t && t.metadata
                    ? null === (a = this.options) || void 0 === a
                      ? void 0
                      : a.metadata.name
                    : "",
                description:
                  null !== (r = this.options) && void 0 !== r && r.metadata
                    ? null === (o = this.options) || void 0 === o
                      ? void 0
                      : o.metadata.description
                    : "",
                url:
                  null !== (n = this.options) && void 0 !== n && n.metadata
                    ? null === (i = this.options) || void 0 === i
                      ? void 0
                      : i.metadata.url
                    : "",
                icons:
                  null !== (s = this.options) && void 0 !== s && s.metadata
                    ? null === (c = this.options) || void 0 === c
                      ? void 0
                      : c.metadata.icons
                    : [""],
              },
              logger: p,
            };
          h.H.setManualWCControl(
            Boolean(
              null === (l = this.options) || void 0 === l
                ? void 0
                : l.manualWCControl
            )
          ),
            (this.universalProvider =
              null !== (d = this.options.universalProvider) && void 0 !== d
                ? d
                : await R.A.init(v)),
            this.listenWalletConnect();
        }
        listenWalletConnect() {
          this.universalProvider &&
            (this.universalProvider.on("display_uri", (e) => {
              i.x.setUri(e);
            }),
            this.universalProvider.on("connect", i.x.finalizeWcConnection),
            this.universalProvider.on("disconnect", () => {
              this.chainNamespaces.forEach((e) => {
                this.resetAccount(e);
              }),
                i.x.resetWcConnection();
            }),
            this.universalProvider.on("chainChanged", (e) => {
              const t = this.getCaipNetworks().find((t) => t.id == e),
                a = this.getCaipNetwork();
              t
                ? (null === a || void 0 === a ? void 0 : a.id) !==
                    (null === t || void 0 === t ? void 0 : t.id) &&
                  this.setCaipNetwork(t)
                : this.setUnsupportedNetwork(e);
            }),
            this.universalProvider.on("session_event", (e) => {
              if (X.kl.isSessionEventData(e)) {
                const { name: t, data: a } = e.params.event;
                "accountsChanged" === t &&
                  Array.isArray(a) &&
                  v.w.isCaipAddress(a[0]) &&
                  this.syncAccount(b.C.parseCaipAddress(a[0]));
              }
            }));
        }
        createUniversalProvider() {
          var e;
          return (
            !this.universalProviderInitPromise &&
              v.w.isClient() &&
              null !== (e = this.options) &&
              void 0 !== e &&
              e.projectId &&
              (this.universalProviderInitPromise =
                this.initializeUniversalAdapter()),
            this.universalProviderInitPromise
          );
        }
        async getUniversalProvider() {
          if (!this.universalProvider)
            try {
              await this.createUniversalProvider();
            } catch (e) {
              s.E.sendEvent({
                type: "error",
                event: "INTERNAL_SDK_ERROR",
                properties: {
                  errorType: "UniversalProviderInitError",
                  errorMessage: e instanceof Error ? e.message : "Unknown",
                  uncaught: !1,
                },
              }),
                console.error(
                  "AppKit:getUniversalProvider - Cannot create provider",
                  e
                );
            }
          return this.universalProvider;
        }
        handleAlertError(e) {
          const t = Object.entries(A.R.UniversalProviderErrors).find((t) => {
              let [, { message: a }] = t;
              return e.message.includes(a);
            }),
            [a, r] = null !== t && void 0 !== t ? t : [],
            { message: o, alertErrorKey: n } =
              null !== r && void 0 !== r ? r : {};
          if (a && o && !this.reportedAlertErrors[a]) {
            const e = A.R.ALERT_ERRORS[n];
            e && (E.h.open(e, "error"), (this.reportedAlertErrors[a] = !0));
          }
        }
        getAdapter(e) {
          var t;
          if (e)
            return null === (t = this.chainAdapters) || void 0 === t
              ? void 0
              : t[e];
        }
        createAdapter(e) {
          var t;
          if (!e) return;
          const a = e.namespace;
          if (!a) return;
          this.createClients();
          const r = e;
          (r.namespace = a),
            r.construct({
              namespace: a,
              projectId:
                null === (t = this.options) || void 0 === t
                  ? void 0
                  : t.projectId,
              networks: this.getCaipNetworks(),
            }),
            this.chainNamespaces.includes(a) || this.chainNamespaces.push(a),
            this.chainAdapters && (this.chainAdapters[a] = r);
        }
        async open(e) {
          return (
            await this.injectModalUi(),
            null !== e && void 0 !== e && e.uri && i.x.setUri(e.uri),
            null !== e &&
            void 0 !== e &&
            e.arguments &&
            "Swap" === (null === e || void 0 === e ? void 0 : e.view)
              ? P.W.open({ ...e, data: { swap: e.arguments } })
              : P.W.open(e)
          );
        }
        async close() {
          await this.injectModalUi(), P.W.close();
        }
        setLoading(e, t) {
          P.W.setLoading(e, t);
        }
        async disconnect(e) {
          await i.x.disconnect(e);
        }
        getError() {
          return "";
        }
        getChainId() {
          var e;
          return null === (e = p.W.state.activeCaipNetwork) || void 0 === e
            ? void 0
            : e.id;
        }
        async switchNetwork(e) {
          const t = this.getCaipNetworks().find((t) => t.id === e.id);
          t
            ? await p.W.switchActiveNetwork(t)
            : E.h.open(A.R.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
        }
        getWalletProvider() {
          return p.W.state.activeChain
            ? w.A.state.providers[p.W.state.activeChain]
            : null;
        }
        getWalletProviderType() {
          return w.A.getProviderId(p.W.state.activeChain);
        }
        subscribeProviders(e) {
          return w.A.subscribeProviders(e);
        }
        getThemeMode() {
          return m.W.state.themeMode;
        }
        getThemeVariables() {
          return m.W.state.themeVariables;
        }
        setThemeMode(e) {
          m.W.setThemeMode(e), z(m.W.state.themeMode);
        }
        setTermsConditionsUrl(e) {
          h.H.setTermsConditionsUrl(e);
        }
        setPrivacyPolicyUrl(e) {
          h.H.setPrivacyPolicyUrl(e);
        }
        setThemeVariables(e) {
          m.W.setThemeVariables(e),
            (function (e) {
              L &&
                W &&
                M &&
                ((L.textContent = B(e).core.cssText),
                (W.textContent = B(e).dark.cssText),
                (M.textContent = B(e).light.cssText));
            })(m.W.state.themeVariables);
        }
        subscribeTheme(e) {
          return m.W.subscribe(e);
        }
        getWalletInfo() {
          return u.U.state.connectedWalletInfo;
        }
        getAccount(e) {
          var t;
          const a = n.a.getAuthConnector(e),
            r = p.W.getAccountData(e),
            o = p.W.state.activeChain;
          if (r)
            return {
              allAccounts: r.allAccounts,
              caipAddress: r.caipAddress,
              address: v.w.getPlainAddress(r.caipAddress),
              isConnected: Boolean(r.caipAddress),
              status: r.status,
              embeddedWalletInfo: a
                ? {
                    user: r.user
                      ? {
                          ...r.user,
                          username: _.i.getConnectedSocialUsername(),
                        }
                      : void 0,
                    authProvider: r.socialProvider || "email",
                    accountType:
                      null === (t = r.preferredAccountTypes) || void 0 === t
                        ? void 0
                        : t[e || o],
                    isSmartAccountDeployed: Boolean(r.smartAccountDeployed),
                  }
                : void 0,
            };
        }
        subscribeAccount(e, t) {
          const a = () => {
            const a = this.getAccount(t);
            a && e(a);
          };
          t ? p.W.subscribeChainProp("accountState", a, t) : p.W.subscribe(a),
            n.a.subscribe(a);
        }
        subscribeNetwork(e) {
          return p.W.subscribe((t) => {
            let { activeCaipNetwork: a } = t;
            e({
              caipNetwork: a,
              chainId: null === a || void 0 === a ? void 0 : a.id,
              caipNetworkId:
                null === a || void 0 === a ? void 0 : a.caipNetworkId,
            });
          });
        }
        subscribeWalletInfo(e) {
          return u.U.subscribeKey("connectedWalletInfo", e);
        }
        subscribeShouldUpdateToAddress(e) {
          u.U.subscribeKey("shouldUpdateToAddress", e);
        }
        subscribeCaipNetworkChange(e) {
          p.W.subscribeKey("activeCaipNetwork", e);
        }
        getState() {
          return l.z.state;
        }
        subscribeState(e) {
          return l.z.subscribe(e);
        }
        showErrorMessage(e) {
          O.P.showError(e);
        }
        showSuccessMessage(e) {
          O.P.showSuccess(e);
        }
        getEvent() {
          return { ...s.E.state };
        }
        subscribeEvents(e) {
          return s.E.subscribe(e);
        }
        replace(e) {
          U.I.replace(e);
        }
        redirect(e) {
          U.I.push(e);
        }
        popTransactionStack(e) {
          U.I.popTransactionStack(e);
        }
        isOpen() {
          return P.W.state.open;
        }
        isTransactionStackEmpty() {
          return 0 === U.I.state.transactionStack.length;
        }
        isTransactionShouldReplaceView() {
          var e;
          return null ===
            (e =
              U.I.state.transactionStack[
                U.I.state.transactionStack.length - 1
              ]) || void 0 === e
            ? void 0
            : e.replace;
        }
        static getInstance() {
          return this.instance;
        }
        updateFeatures(e) {
          h.H.setFeatures(e);
        }
        updateOptions(e) {
          const t = { ...(h.H.state || {}), ...e };
          h.H.setOptions(t);
        }
        setConnectMethodsOrder(e) {
          h.H.setConnectMethodsOrder(e);
        }
        setWalletFeaturesOrder(e) {
          h.H.setWalletFeaturesOrder(e);
        }
        setCollapseWallets(e) {
          h.H.setCollapseWallets(e);
        }
        setSocialsOrder(e) {
          h.H.setSocialsOrder(e);
        }
        getConnectMethodsOrder() {
          return x.A.getConnectOrderMethod(
            h.H.state.features,
            n.a.getConnectors()
          );
        }
        addNetwork(e, t) {
          if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
          const a = this.extendCaipNetwork(t, this.options);
          this.getCaipNetworks().find((e) => e.id === a.id) ||
            p.W.addNetwork(a);
        }
        removeNetwork(e, t) {
          if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
          this.getCaipNetworks().find((e) => e.id === t) &&
            p.W.removeNetwork(e, t);
        }
      }
      let Q = !1;
      class Z extends J {
        setupAuthConnectorListeners(e) {
          e.onRpcRequest((t) => {
            N.Q.checkIfRequestExists(t)
              ? N.Q.checkIfRequestIsSafe(t) || this.handleUnsafeRPCRequest()
              : (this.open(),
                console.error(f.Vl.RPC_METHOD_NOT_ALLOWED_MESSAGE, {
                  method: t.method,
                }),
                setTimeout(() => {
                  this.showErrorMessage(f.Vl.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE);
                }, 300),
                e.rejectRpcRequests());
          }),
            e.onRpcError(() => {
              this.isOpen() &&
                (this.isTransactionStackEmpty()
                  ? this.close()
                  : this.popTransactionStack(!0));
            }),
            e.onRpcSuccess((e, t) => {
              const a = N.Q.checkIfRequestIsSafe(t),
                r = u.U.state.address,
                o = p.W.state.activeCaipNetwork;
              a ||
                (this.isTransactionStackEmpty()
                  ? (this.close(),
                    r &&
                      null !== o &&
                      void 0 !== o &&
                      o.id &&
                      this.updateNativeBalance(r, o.id, o.chainNamespace))
                  : (this.popTransactionStack(),
                    r &&
                      null !== o &&
                      void 0 !== o &&
                      o.id &&
                      this.updateNativeBalance(r, o.id, o.chainNamespace)));
            }),
            e.onNotConnected(() => {
              const e = p.W.state.activeChain;
              n.a.getConnectorId(e) === r.o.CONNECTOR_ID.AUTH &&
                (this.setCaipAddress(void 0, e), this.setLoading(!1, e));
            }),
            e.onConnect(async (t) => {
              var a, o;
              const n = p.W.state.activeChain,
                i =
                  n === r.o.CHAIN.EVM
                    ? `eip155:${t.chainId}:${t.address}`
                    : `${t.chainId}:${t.address}`,
                s =
                  t.preferredAccountType ||
                  (null === (a = u.U.state.preferredAccountTypes) ||
                  void 0 === a
                    ? void 0
                    : a[n]) ||
                  h.H.state.defaultAccountTypes[n];
              C.y.isLowerCaseMatch(t.address, u.U.state.address) ||
                this.syncIdentity({
                  address: t.address,
                  chainId: t.chainId,
                  chainNamespace: n,
                }),
                this.setCaipAddress(i, n),
                this.setUser({ ...(u.U.state.user || {}), ...t }, n),
                this.setSmartAccountDeployed(
                  Boolean(t.smartAccountDeployed),
                  n
                ),
                this.setPreferredAccountType(s, n);
              const c =
                null === (o = t.accounts) || void 0 === o
                  ? void 0
                  : o.map((e) => {
                      var t;
                      return v.w.createAccount(
                        n,
                        e.address,
                        e.type ||
                          (null === (t = u.U.state.preferredAccountTypes) ||
                          void 0 === t
                            ? void 0
                            : t[n]) ||
                          h.H.state.defaultAccountTypes[n]
                      );
                    });
              this.setAllAccounts(
                c || [
                  v.w.createAccount(n, t.address, t.preferredAccountType || s),
                ],
                n
              ),
                await e.getSmartAccountEnabledNetworks(),
                this.setLoading(!1, n);
            }),
            e.onSocialConnected((e) => {
              let { userName: t } = e;
              this.setUser(
                { ...(u.U.state.user || {}), username: t },
                p.W.state.activeChain
              );
            }),
            e.onGetSmartAccountEnabledNetworks((e) => {
              this.setSmartAccountEnabledNetworks(e, p.W.state.activeChain);
            }),
            e.onSetPreferredAccount((e) => {
              let { address: t, type: a } = e;
              t && this.setPreferredAccountType(a, p.W.state.activeChain);
            });
        }
        async syncAuthConnector(e, t) {
          var a;
          const i = r.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t);
          if (!i) return;
          this.setLoading(!0, t);
          const s = e.getLoginEmailUsed();
          this.setLoading(s, t), s && this.setStatus("connecting", t);
          const c = e.getEmail(),
            l = e.getUsername();
          this.setUser(
            {
              ...((null === (a = u.U.state) || void 0 === a
                ? void 0
                : a.user) || {}),
              username: l,
              email: c,
            },
            p.W.state.activeChain
          ),
            this.setupAuthConnectorListeners(e);
          const { isConnected: d } = await e.isConnected(),
            v = m.W.getSnapshot(),
            E = h.H.getSnapshot();
          var C, A, w;
          (e.syncDappData({
            metadata: E.metadata,
            sdkVersion: E.sdkVersion,
            projectId: E.projectId,
            sdkType: E.sdkType,
          }),
          e.syncTheme({
            themeMode: v.themeMode,
            themeVariables: v.themeVariables,
            w3mThemeVariables: (0, o.o)(v.themeVariables, v.themeMode),
          }),
          t && i) &&
            (d &&
            null !== (C = this.connectionControllerClient) &&
            void 0 !== C &&
            C.connectExternal
              ? (await (null === (A = this.connectionControllerClient) ||
                void 0 === A
                  ? void 0
                  : A.connectExternal({
                      id: r.o.CONNECTOR_ID.AUTH,
                      info: { name: r.o.CONNECTOR_ID.AUTH },
                      type: g.o.CONNECTOR_TYPE_AUTH,
                      provider: e,
                      chainId:
                        null === (w = p.W.state.activeCaipNetwork) ||
                        void 0 === w
                          ? void 0
                          : w.id,
                      chain: t,
                    })),
                this.setStatus("connected", t))
              : n.a.getConnectorId(t) === r.o.CONNECTOR_ID.AUTH &&
                (this.setStatus("disconnected", t),
                _.i.removeConnectedNamespace(t)));
          this.setLoading(!1, t);
        }
        async checkExistingTelegramSocialConnection(e) {
          try {
            var t;
            if (!v.w.isTelegram()) return;
            const a = _.i.getTelegramSocialProvider();
            if (!a) return;
            if (
              "undefined" === typeof window ||
              "undefined" === typeof document
            )
              return;
            const r = new URL(window.location.href).searchParams.get(
              "result_uri"
            );
            if (!r) return;
            u.U.setSocialProvider(a, e),
              await (null === (t = this.authProvider) || void 0 === t
                ? void 0
                : t.init());
            const o = n.a.getAuthConnector();
            a &&
              o &&
              (this.setLoading(!0, e),
              await o.provider.connectSocial(r),
              await i.x.connectExternal(o, o.chain),
              _.i.setConnectedSocialProvider(a),
              _.i.removeTelegramSocialProvider(),
              s.E.sendEvent({
                type: "track",
                event: "SOCIAL_LOGIN_SUCCESS",
                properties: { provider: a },
              }));
          } catch (a) {
            this.setLoading(!1, e),
              console.error("checkExistingSTelegramocialConnection error", a);
          }
          try {
            const e = new URL(window.location.href);
            e.searchParams.delete("result_uri"),
              window.history.replaceState({}, document.title, e.toString());
          } catch (a) {
            console.error("tma social login failed", a);
          }
        }
        createAuthProvider(e) {
          var t, a, o, n, i;
          if (!r.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e)) return;
          const s =
              void 0 ===
              (null === (t = this.options) ||
              void 0 === t ||
              null === (t = t.features) ||
              void 0 === t
                ? void 0
                : t.email)
                ? c.oU.DEFAULT_FEATURES.email
                : null === (a = this.options) ||
                  void 0 === a ||
                  null === (a = a.features) ||
                  void 0 === a
                ? void 0
                : a.email,
            d =
              null !== (o = this.options) &&
              void 0 !== o &&
              null !== (o = o.features) &&
              void 0 !== o &&
              o.socials
                ? (null === (n = this.options) ||
                  void 0 === n ||
                  null === (n = n.features) ||
                  void 0 === n ||
                  null === (n = n.socials) ||
                  void 0 === n
                    ? void 0
                    : n.length) > 0
                : c.oU.DEFAULT_FEATURES.socials,
            p = s || d;
          if (
            !this.authProvider &&
            null !== (i = this.options) &&
            void 0 !== i &&
            i.projectId &&
            p
          ) {
            var h, v, m;
            if (
              ((this.authProvider = T.v.getInstance({
                projectId: this.options.projectId,
                enableLogger: this.options.enableAuthLogger,
                chainId:
                  null === (h = this.getCaipNetwork(e)) || void 0 === h
                    ? void 0
                    : h.caipNetworkId,
                onTimeout: () => {
                  E.h.open(A.R.ALERT_ERRORS.SOCIALS_TIMEOUT, "error");
                },
              })),
              l.z.subscribeOpen((e) => {
                var t;
                !e &&
                  this.isTransactionStackEmpty() &&
                  (null === (t = this.authProvider) ||
                    void 0 === t ||
                    t.rejectRpcRequests());
              }),
              e === r.o.CHAIN.EVM &&
                null !== (v = u.U.state.preferredAccountTypes) &&
                void 0 !== v &&
                v.eip155)
            )
              this.authProvider.setPreferredAccount(
                null === (m = u.U.state.preferredAccountTypes) || void 0 === m
                  ? void 0
                  : m.eip155
              );
            this.syncAuthConnector(this.authProvider, e),
              this.checkExistingTelegramSocialConnection(e);
          }
        }
        createAuthProviderForAdapter(e) {
          var t, a;
          (this.createAuthProvider(e), this.authProvider) &&
            (null === (t = this.chainAdapters) ||
              void 0 === t ||
              null === (t = t[e]) ||
              void 0 === t ||
              null === (a = t.setAuthProvider) ||
              void 0 === a ||
              a.call(t, this.authProvider));
        }
        initControllers(e) {
          super.initControllers(e),
            this.options.excludeWalletIds &&
              d.N.initializeExcludedWallets({
                ids: this.options.excludeWalletIds,
              });
        }
        async switchCaipNetwork(e) {
          if (!e) return;
          const t = p.W.state.activeChain,
            a = e.chainNamespace,
            o = this.getAddressByChainNamespace(e.chainNamespace);
          if (e.chainNamespace === p.W.state.activeChain && o) {
            const t = this.getAdapter(a),
              r = w.A.getProvider(a),
              o = w.A.getProviderId(a);
            await (null === t || void 0 === t
              ? void 0
              : t.switchNetwork({
                  caipNetwork: e,
                  provider: r,
                  providerType: o,
                })),
              this.setCaipNetwork(e);
          } else {
            const c = w.A.getProviderId(t) === g.o.CONNECTOR_TYPE_AUTH,
              l = w.A.getProviderId(a),
              d = l === g.o.CONNECTOR_TYPE_AUTH,
              u = r.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(a);
            if ((c || d) && u)
              try {
                var n, i;
                (p.W.state.activeChain = e.chainNamespace),
                  await (null === (n = this.connectionControllerClient) ||
                  void 0 === n ||
                  null === (i = n.connectExternal) ||
                  void 0 === i
                    ? void 0
                    : i.call(n, {
                        id: r.o.CONNECTOR_ID.AUTH,
                        provider: this.authProvider,
                        chain: a,
                        chainId: e.id,
                        type: g.o.CONNECTOR_TYPE_AUTH,
                        caipNetwork: e,
                      })),
                  this.setCaipNetwork(e);
              } catch (s) {
                const t = this.getAdapter(a);
                await (null === t || void 0 === t
                  ? void 0
                  : t.switchNetwork({
                      caipNetwork: e,
                      provider: this.authProvider,
                      providerType: l,
                    }));
              }
            else
              l === g.o.CONNECTOR_TYPE_WALLET_CONNECT
                ? (this.setCaipNetwork(e), this.syncWalletConnectAccount())
                : (this.setCaipNetwork(e),
                  o &&
                    this.syncAccount({
                      address: o,
                      chainId: e.id,
                      chainNamespace: a,
                    }));
          }
        }
        async initChainAdapter(e) {
          await super.initChainAdapter(e), this.createAuthProviderForAdapter(e);
        }
        async syncIdentity(e) {
          var t;
          let { address: a, chainId: o, chainNamespace: n } = e;
          const i = `${n}:${o}`,
            s =
              null === (t = this.caipNetworks) || void 0 === t
                ? void 0
                : t.find((e) => e.caipNetworkId === i);
          if (n !== r.o.CHAIN.EVM || (null !== s && void 0 !== s && s.testnet))
            return (
              this.setProfileName(null, n), void this.setProfileImage(null, n)
            );
          try {
            const { name: e, avatar: t } = await this.fetchIdentity({
              address: a,
              caipNetworkId: i,
            });
            if ((this.setProfileName(e, n), this.setProfileImage(t, n), !e)) {
              const e = this.getAdapter(n),
                t = await (null === e || void 0 === e
                  ? void 0
                  : e.getProfile({ address: a, chainId: Number(o) }));
              null !== t && void 0 !== t && t.profileName
                ? (this.setProfileName(t.profileName, n),
                  t.profileImage && this.setProfileImage(t.profileImage, n))
                : (await this.syncReownName(a, n),
                  this.setProfileImage(null, n));
            }
          } catch {
            await this.syncReownName(a, n),
              1 !== o && this.setProfileImage(null, n);
          }
        }
        syncConnectedWalletInfo(e) {
          const t = w.A.getProviderId(e);
          if (t === g.o.CONNECTOR_TYPE_AUTH) {
            const o = this.authProvider;
            if (o) {
              var a, r;
              const n =
                  null !== (a = _.i.getConnectedSocialProvider()) &&
                  void 0 !== a
                    ? a
                    : "email",
                i =
                  null !== (r = o.getEmail()) && void 0 !== r
                    ? r
                    : o.getUsername();
              this.setConnectedWalletInfo(
                { name: t, identifier: i, social: n },
                e
              );
            }
          } else super.syncConnectedWalletInfo(e);
        }
        async injectModalUi() {
          if (!Q && v.w.isClient()) {
            const e = { ...c.oU.DEFAULT_FEATURES, ...this.options.features },
              t = [];
            if (e) {
              (e.email || (e.socials && e.socials.length)) &&
                t.push(
                  Promise.all([
                    a.e(5065),
                    a.e(8846),
                    a.e(1852),
                    a.e(6326),
                    a.e(6417),
                    a.e(1161),
                    a.e(2876),
                    a.e(6366),
                    a.e(1),
                    a.e(8329),
                    a.e(1256),
                    a.e(8010),
                  ]).then(a.bind(a, 88010))
                ),
                e.email &&
                  t.push(
                    Promise.all([
                      a.e(5065),
                      a.e(8846),
                      a.e(1852),
                      a.e(6326),
                      a.e(6417),
                      a.e(1161),
                      a.e(2876),
                      a.e(6366),
                      a.e(1),
                      a.e(8329),
                      a.e(1256),
                      a.e(4870),
                    ]).then(a.bind(a, 34870))
                  ),
                e.socials &&
                  t.push(
                    Promise.all([
                      a.e(5065),
                      a.e(8846),
                      a.e(1852),
                      a.e(9644),
                      a.e(5409),
                      a.e(7120),
                      a.e(1705),
                      a.e(6326),
                      a.e(6417),
                      a.e(1161),
                      a.e(2876),
                      a.e(6366),
                      a.e(1),
                      a.e(8329),
                      a.e(1256),
                      a.e(6548),
                    ]).then(a.bind(a, 6548))
                  ),
                e.swaps &&
                  t.push(
                    Promise.all([
                      a.e(5065),
                      a.e(8846),
                      a.e(1852),
                      a.e(9644),
                      a.e(5409),
                      a.e(7120),
                      a.e(1705),
                      a.e(6326),
                      a.e(6417),
                      a.e(1161),
                      a.e(2876),
                      a.e(6366),
                      a.e(1),
                      a.e(8329),
                      a.e(1256),
                      a.e(3141),
                    ]).then(a.bind(a, 13141))
                  ),
                e.send &&
                  t.push(
                    Promise.all([
                      a.e(5065),
                      a.e(8846),
                      a.e(1852),
                      a.e(6326),
                      a.e(6417),
                      a.e(1161),
                      a.e(2876),
                      a.e(6366),
                      a.e(1),
                      a.e(8329),
                      a.e(1256),
                      a.e(3510),
                    ]).then(a.bind(a, 43510))
                  ),
                e.receive &&
                  t.push(
                    Promise.all([
                      a.e(5065),
                      a.e(8846),
                      a.e(1852),
                      a.e(6326),
                      a.e(6417),
                      a.e(1161),
                      a.e(2876),
                      a.e(6366),
                      a.e(1),
                      a.e(8329),
                      a.e(1256),
                      a.e(3253),
                    ]).then(a.bind(a, 23253))
                  ),
                e.onramp &&
                  t.push(
                    Promise.all([
                      a.e(5065),
                      a.e(8846),
                      a.e(1852),
                      a.e(9644),
                      a.e(5409),
                      a.e(7120),
                      a.e(1705),
                      a.e(41),
                      a.e(3069),
                      a.e(764),
                      a.e(3416),
                      a.e(4079),
                      a.e(8377),
                      a.e(6326),
                      a.e(6417),
                      a.e(1161),
                      a.e(2876),
                      a.e(6366),
                      a.e(1),
                      a.e(8329),
                      a.e(1256),
                      a.e(2955),
                    ]).then(a.bind(a, 44170))
                  ),
                e.history &&
                  t.push(
                    Promise.all([
                      a.e(5065),
                      a.e(8846),
                      a.e(1852),
                      a.e(9644),
                      a.e(5409),
                      a.e(7120),
                      a.e(1705),
                      a.e(6326),
                      a.e(6417),
                      a.e(1161),
                      a.e(2876),
                      a.e(6366),
                      a.e(1),
                      a.e(8329),
                      a.e(1256),
                      a.e(5994),
                    ]).then(a.bind(a, 45994))
                  );
            }
            await Promise.all([
              ...t,
              Promise.all([
                a.e(5065),
                a.e(8846),
                a.e(1852),
                a.e(9644),
                a.e(5409),
                a.e(7120),
                a.e(1705),
                a.e(6326),
                a.e(6417),
                a.e(1161),
                a.e(2876),
                a.e(6366),
                a.e(1),
                a.e(8329),
                a.e(1256),
                a.e(4496),
              ]).then(a.bind(a, 74496)),
              Promise.all([
                a.e(5065),
                a.e(8846),
                a.e(1852),
                a.e(6326),
                a.e(6417),
                a.e(1161),
                a.e(2876),
                a.e(6366),
                a.e(1),
                a.e(8329),
                a.e(1256),
                a.e(374),
              ]).then(a.bind(a, 70374)),
            ]);
            if (!document.querySelector("w3m-modal")) {
              const e = document.createElement("w3m-modal");
              h.H.state.disableAppend ||
                h.H.state.enableEmbedded ||
                document.body.insertAdjacentElement("beforeend", e);
            }
            Q = !0;
          }
        }
      }
    },
    70760: (e, t, a) => {
      function r(e) {
        if ("string" === typeof e) return `solana:${e}`;
      }
      a.d(t, { o: () => r });
    },
    71377: (e, t, a) => {
      a.d(t, { g: () => h });
      var r = a(10719),
        o = a(458),
        n = a(21369),
        i = a(69084),
        s = a(16733),
        c = a(73082),
        l = a(63157),
        d = a(71898),
        u = a(6951),
        p = a(40777);
      const h = {
        getConnectorsByType(e, t, a) {
          const { customWallets: r } = o.H.state,
            i = n.i.getRecentWallets(),
            s = p.A.filterOutDuplicateWallets(t),
            c = p.A.filterOutDuplicateWallets(a),
            l = e.filter((e) => "MULTI_CHAIN" === e.type),
            d = e.filter((e) => "ANNOUNCED" === e.type),
            u = e.filter((e) => "INJECTED" === e.type);
          return {
            custom: r,
            recent: i,
            external: e.filter((e) => "EXTERNAL" === e.type),
            multiChain: l,
            announced: d,
            injected: u,
            recommended: s,
            featured: c,
          };
        },
        showConnector(e) {
          var t;
          const a = null === (t = e.info) || void 0 === t ? void 0 : t.rdns,
            r =
              Boolean(a) &&
              i.N.state.excludedWallets.some(
                (e) => Boolean(e.rdns) && e.rdns === a
              ),
            o =
              Boolean(e.name) &&
              i.N.state.excludedWallets.some((t) =>
                u.y.isLowerCaseMatch(t.name, e.name)
              );
          if ("INJECTED" === e.type) {
            if (!s.w.isMobile() && "Browser Wallet" === e.name) return !1;
            if (!a && !c.x.checkInstalled()) return !1;
            if (r || o) return !1;
          }
          return (
            ("ANNOUNCED" !== e.type && "EXTERNAL" !== e.type) || (!r && !o)
          );
        },
        getIsConnectedWithWC: () =>
          Array.from(l.W.state.chains.values()).some(
            (e) =>
              d.a.getConnectorId(e.namespace) ===
              r.o.CONNECTOR_ID.WALLET_CONNECT
          ),
        getConnectorTypeOrder(e) {
          var t, a;
          let {
            recommended: r,
            featured: n,
            custom: i,
            recent: s,
            announced: c,
            injected: l,
            multiChain: d,
            external: u,
            overriddenConnectors: p = null !==
              (t =
                null === (a = o.H.state.features) || void 0 === a
                  ? void 0
                  : a.connectorTypeOrder) && void 0 !== t
              ? t
              : [],
          } = e;
          const v = h.getIsConnectedWithWC(),
            m = [
              {
                type: "walletConnect",
                isEnabled: o.H.state.enableWalletConnect && !v,
              },
              { type: "recent", isEnabled: s.length > 0 },
              { type: "injected", isEnabled: [...l, ...c, ...d].length > 0 },
              { type: "featured", isEnabled: n.length > 0 },
              { type: "custom", isEnabled: i && i.length > 0 },
              { type: "external", isEnabled: u.length > 0 },
              { type: "recommended", isEnabled: r.length > 0 },
            ].filter((e) => e.isEnabled),
            _ = new Set(m.map((e) => e.type)),
            E = p
              .filter((e) => _.has(e))
              .map((e) => ({ type: e, isEnabled: !0 })),
            C = m.filter((e) => {
              let { type: t } = e;
              return !E.some((e) => {
                let { type: a } = e;
                return a === t;
              });
            });
          return Array.from(
            new Set(
              [...E, ...C].map((e) => {
                let { type: t } = e;
                return t;
              })
            )
          );
        },
      };
    },
    71898: (e, t, a) => {
      a.d(t, { a: () => _ });
      var r = a(59586),
        o = a(86992),
        n = a(10719),
        i = a(55639),
        s = a(63157);
      const c = {
        handleSolanaDeeplinkRedirect(e) {
          if (s.W.state.activeChain === n.o.CHAIN.SOLANA) {
            const t = window.location.href,
              a = encodeURIComponent(t);
            if ("Phantom" === e && !("phantom" in window)) {
              const e = t.startsWith("https") ? "https" : "http",
                r = t.split("/")[2],
                o = encodeURIComponent(`${e}://${r}`);
              window.location.href = `https://phantom.app/ul/browse/${a}?ref=${o}`;
            }
            "Coinbase Wallet" !== e ||
              "coinbaseSolana" in window ||
              (window.location.href = `https://go.cb-w.com/dapp?cb_url=${a}`);
          }
        },
      };
      var l = a(21369),
        d = a(69084),
        u = a(458),
        p = a(67415),
        h = a(75673);
      const v = {
          eip155: void 0,
          solana: void 0,
          polkadot: void 0,
          bip122: void 0,
        },
        m = (0, r.BX)({
          allConnectors: [],
          connectors: [],
          activeConnector: void 0,
          filterByNamespace: void 0,
          activeConnectorIds: { ...v },
        }),
        _ = {
          state: m,
          subscribe: (e) =>
            (0, r.B1)(m, () => {
              e(m);
            }),
          subscribeKey: (e, t) => (0, o.u$)(m, e, t),
          initialize(e) {
            e.forEach((e) => {
              const t = l.i.getConnectedConnectorId(e);
              t && this.setConnectorId(t, e);
            });
          },
          setActiveConnector(e) {
            e && (m.activeConnector = (0, r.KR)(e));
          },
          setConnectors(e) {
            e
              .filter(
                (e) =>
                  !m.allConnectors.some(
                    (t) =>
                      t.id === e.id &&
                      this.getConnectorName(t.name) ===
                        this.getConnectorName(e.name) &&
                      t.chain === e.chain
                  )
              )
              .forEach((e) => {
                "MULTI_CHAIN" !== e.type && m.allConnectors.push((0, r.KR)(e));
              }),
              (m.connectors = this.mergeMultiChainConnectors(m.allConnectors));
          },
          removeAdapter(e) {
            (m.allConnectors = m.allConnectors.filter((t) => t.chain !== e)),
              (m.connectors = this.mergeMultiChainConnectors(m.allConnectors));
          },
          mergeMultiChainConnectors(e) {
            const t = this.generateConnectorMapByName(e),
              a = [];
            return (
              t.forEach((e) => {
                const t = e[0],
                  r =
                    (null === t || void 0 === t ? void 0 : t.id) ===
                    n.o.CONNECTOR_ID.AUTH;
                e.length > 1 && t
                  ? a.push({
                      name: t.name,
                      imageUrl: t.imageUrl,
                      imageId: t.imageId,
                      connectors: [...e],
                      type: r ? "AUTH" : "MULTI_CHAIN",
                      chain: "eip155",
                      id: (null === t || void 0 === t ? void 0 : t.id) || "",
                    })
                  : t && a.push(t);
              }),
              a
            );
          },
          generateConnectorMapByName(e) {
            const t = new Map();
            return (
              e.forEach((e) => {
                const { name: a } = e,
                  r = this.getConnectorName(a);
                if (!r) return;
                const o = t.get(r) || [];
                o.find((t) => t.chain === e.chain) || o.push(e), t.set(r, o);
              }),
              t
            );
          },
          getConnectorName(e) {
            if (!e) return e;
            return { "Trust Wallet": "Trust" }[e] || e;
          },
          getUniqueConnectorsByName(e) {
            const t = [];
            return (
              e.forEach((e) => {
                t.find((t) => t.chain === e.chain) || t.push(e);
              }),
              t
            );
          },
          addConnector(e) {
            if (e.id === n.o.CONNECTOR_ID.AUTH) {
              var t, a, o;
              const n = e,
                s = (0, r.P9)(u.H.state),
                c = h.W.getSnapshot().themeMode,
                l = h.W.getSnapshot().themeVariables;
              null === n ||
                void 0 === n ||
                null === (t = n.provider) ||
                void 0 === t ||
                null === (a = t.syncDappData) ||
                void 0 === a ||
                a.call(t, {
                  metadata: s.metadata,
                  sdkVersion: s.sdkVersion,
                  projectId: s.projectId,
                  sdkType: s.sdkType,
                }),
                null === n ||
                  void 0 === n ||
                  null === (o = n.provider) ||
                  void 0 === o ||
                  o.syncTheme({
                    themeMode: c,
                    themeVariables: l,
                    w3mThemeVariables: (0, i.o)(l, c),
                  }),
                this.setConnectors([e]);
            } else this.setConnectors([e]);
          },
          getAuthConnector(e) {
            var t;
            const a = e || s.W.state.activeChain,
              r = m.connectors.find((e) => e.id === n.o.CONNECTOR_ID.AUTH);
            if (r) {
              if (
                null !== r &&
                void 0 !== r &&
                null !== (t = r.connectors) &&
                void 0 !== t &&
                t.length
              ) {
                return r.connectors.find((e) => e.chain === a);
              }
              return r;
            }
          },
          getAnnouncedConnectorRdns: () =>
            m.connectors
              .filter((e) => "ANNOUNCED" === e.type)
              .map((e) => {
                var t;
                return null === (t = e.info) || void 0 === t ? void 0 : t.rdns;
              }),
          getConnectorById: (e) => m.allConnectors.find((t) => t.id === e),
          getConnector: (e, t) =>
            m.allConnectors
              .filter((e) => e.chain === s.W.state.activeChain)
              .find((a) => {
                var r;
                return (
                  a.explorerId === e ||
                  (null === (r = a.info) || void 0 === r ? void 0 : r.rdns) ===
                    t
                );
              }),
          syncIfAuthConnector(e) {
            var t, a;
            if ("ID_AUTH" !== e.id) return;
            const o = e,
              n = (0, r.P9)(u.H.state),
              s = h.W.getSnapshot().themeMode,
              c = h.W.getSnapshot().themeVariables;
            null === o ||
              void 0 === o ||
              null === (t = o.provider) ||
              void 0 === t ||
              null === (a = t.syncDappData) ||
              void 0 === a ||
              a.call(t, {
                metadata: n.metadata,
                sdkVersion: n.sdkVersion,
                sdkType: n.sdkType,
                projectId: n.projectId,
              }),
              o.provider.syncTheme({
                themeMode: s,
                themeVariables: c,
                w3mThemeVariables: (0, i.o)(c, s),
              });
          },
          getConnectorsByNamespace(e) {
            const t = m.allConnectors.filter((t) => t.chain === e);
            return this.mergeMultiChainConnectors(t);
          },
          selectWalletConnector(e) {
            const t = _.getConnector(e.id, e.rdns);
            s.W.state.activeChain === n.o.CHAIN.SOLANA &&
              c.handleSolanaDeeplinkRedirect(
                (null === t || void 0 === t ? void 0 : t.name) || e.name || ""
              ),
              t
                ? p.I.push("ConnectingExternal", { connector: t })
                : p.I.push("ConnectingWalletConnect", { wallet: e });
          },
          getConnectors(e) {
            return e
              ? this.getConnectorsByNamespace(e)
              : this.mergeMultiChainConnectors(m.allConnectors);
          },
          setFilterByNamespace(e) {
            (m.filterByNamespace = e),
              (m.connectors = this.getConnectors(e)),
              d.N.setFilterByNamespace(e);
          },
          setConnectorId(e, t) {
            e &&
              ((m.activeConnectorIds = { ...m.activeConnectorIds, [t]: e }),
              l.i.setConnectedConnectorId(t, e));
          },
          removeConnectorId(e) {
            (m.activeConnectorIds = { ...m.activeConnectorIds, [e]: void 0 }),
              l.i.deleteConnectedConnectorId(e);
          },
          getConnectorId(e) {
            if (e) return m.activeConnectorIds[e];
          },
          isConnected: (e) =>
            e
              ? Boolean(m.activeConnectorIds[e])
              : Object.values(m.activeConnectorIds).some((e) => Boolean(e)),
          resetConnectorIds() {
            m.activeConnectorIds = { ...v };
          },
        };
    },
    72902: (e, t, a) => {
      a.d(t, { S: () => x });
      var r = a(42449),
        o = (a(99296), a(26498)),
        n = (a(39103), a(10719)),
        i = a(21369),
        s = a(63157),
        c = a(24026),
        l = a(16733),
        d = a(62028),
        u = a(658),
        p = a(75003),
        h = a(23477),
        v = a(50818),
        m = a(88452),
        _ = a(59586),
        E = a(86992);
      const C = (0, _.BX)({ connection: null }),
        g = {
          state: C,
          subscribeKey: (e, t) => (0, E.u$)(C, e, t),
          subscribe: (e) => (0, _.B1)(C, () => e(C)),
          setConnection(e) {
            C.connection = (0, _.KR)(e);
          },
        },
        A = 2e7,
        w = 500;
      async function N(e) {
        let { provider: t, to: a, value: o, connection: n } = e;
        if (!t.publicKey) throw Error("No public key found");
        const i = new r.J3(a),
          s = Math.floor(o * r.Sr),
          { blockhash: c, lastValidBlockHeight: l } =
            await n.getLatestBlockhash(),
          d = [
            r.d_.setComputeUnitPrice({ microLamports: A }),
            r.d_.setComputeUnitLimit({ units: w }),
            r.yq.transfer({
              fromPubkey: t.publicKey,
              toPubkey: i,
              lamports: s,
            }),
          ];
        return new r.ZX({
          feePayer: t.publicKey,
          blockhash: c,
          lastValidBlockHeight: l,
        }).add(...d);
      }
      var f = a(13083),
        T = a(80312),
        R = a(80888),
        b = a(18085);
      function I(e) {
        return (
          R.u in e.features &&
          b.j in e.features &&
          (f.R in e.features || T.q in e.features)
        );
      }
      var y = a(81226),
        P = a(10851);
      const { get: S, on: k } = (0, y.d)();
      let O = [];
      function U(e, t, a) {
        return e
          .filter(I)
          .map(
            (e) => new P.e({ wallet: e, requestedChains: t, getActiveChain: a })
          );
      }
      class x extends p.X {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super({
            adapterType: n.o.ADAPTER_TYPES.SOLANA,
            namespace: n.o.CHAIN.SOLANA,
          }),
            (this.balancePromises = {}),
            (this.providerHandlers = null),
            (this.connectionSettings = e.connectionSettings || "confirmed"),
            (this.wallets = e.wallets);
        }
        construct(e) {
          var t, a;
          super.construct(e);
          const o = i.i.getActiveCaipNetworkId(),
            n =
              (null === (t = e.networks) || void 0 === t
                ? void 0
                : t.find((e) => e.caipNetworkId === o)) ||
              (null === (a = e.networks) || void 0 === a ? void 0 : a[0]),
            s = null === n || void 0 === n ? void 0 : n.rpcUrls.default.http[0];
          s && g.setConnection(new r.Ng(s, this.connectionSettings));
        }
        setAuthProvider(e) {
          this.addConnector(
            new h.O({
              w3mFrameProvider: e,
              getActiveChain: () =>
                s.W.getCaipNetworkByNamespace(this.namespace),
              chains: this.getCaipNetworks(),
            })
          );
        }
        syncConnectors(e, t) {
          e.projectId ||
            c.h.open(d.R.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
          const a = () => t.getCaipNetwork(this.namespace);
          l.w.isClient() &&
            "coinbaseSolana" in window &&
            this.addConnector(
              new v.V({
                provider: window.coinbaseSolana,
                chains: this.getCaipNetworks(),
                getActiveChain: a,
              })
            ),
            (function (e, t, a) {
              const r = [
                k("register", function () {
                  for (
                    var r = arguments.length, o = new Array(r), n = 0;
                    n < r;
                    n++
                  )
                    o[n] = arguments[n];
                  (O = [...O, ...U(o, e, t)]), a(...O);
                }),
                k("unregister", function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  (O = O.filter((e) =>
                    t.some((t) => t.name === e.wallet.name)
                  )),
                    a(...O);
                }),
              ];
              (O = U(S(), e, t)), a(...O);
            })(this.getCaipNetworks(), a, this.addConnector.bind(this));
        }
        async getEnsAddress(e) {
          return { address: e.name };
        }
        async writeContract() {
          return Promise.resolve({ hash: "" });
        }
        async getCapabilities() {
          return Promise.resolve({});
        }
        async grantPermissions() {
          return Promise.resolve({});
        }
        async revokePermissions() {
          return Promise.resolve("0x");
        }
        async walletGetAssets(e) {
          return Promise.resolve({});
        }
        async getAccounts(e) {
          const t = this.connectors.find((t) => t.id === e.id);
          return t ? { accounts: await t.getAccounts() } : { accounts: [] };
        }
        async signMessage(e) {
          const t = e.provider;
          if (!t)
            throw new Error(
              "connectionControllerClient:signMessage - provider is undefined"
            );
          const a = await t.signMessage(new TextEncoder().encode(e.message));
          return { signature: o.A.encode(a) };
        }
        async estimateGas(e) {
          const t = g.state.connection;
          if (!t || !e.provider) throw new Error("Connection is not set");
          const a = await N({
              provider: e.provider,
              connection: t,
              to: "11111111111111111111111111111111",
              value: 1,
            }),
            r = await a.getEstimatedFee(t);
          return { gas: BigInt(r || 0) };
        }
        async sendTransaction(e) {
          const t = g.state.connection;
          if (!t || !e.address || !e.provider)
            throw new Error("Connection is not set");
          const a = e.provider,
            r = await N({
              provider: a,
              connection: t,
              to: e.to,
              value: e.value,
            }),
            o = await a.sendTransaction(r, t);
          return (
            await new Promise((e) => {
              const a = setInterval(async () => {
                const r = await t.getSignatureStatus(o);
                null !== r &&
                  void 0 !== r &&
                  r.value &&
                  (clearInterval(a), e());
              }, 1e3);
            }),
            { hash: o }
          );
        }
        parseUnits() {
          return 0n;
        }
        formatUnits() {
          return "";
        }
        async connect(e) {
          var t;
          const a = this.connectors.find((t) => t.id === e.id);
          if (!a) throw new Error("Provider not found");
          const o =
            e.rpcUrl ||
            (null === (t = this.getCaipNetworks()) ||
            void 0 === t ||
            null === (t = t.find((t) => t.id === e.chainId)) ||
            void 0 === t
              ? void 0
              : t.rpcUrls.default.http[0]);
          if (!o)
            throw new Error(`RPC URL not found for chainId: ${e.chainId}`);
          const n = await a.connect({ chainId: e.chainId });
          return (
            this.listenProviderEvents(a),
            g.setConnection(new r.Ng(o, this.connectionSettings)),
            this.emit("accountChanged", { address: n, chainId: e.chainId }),
            {
              id: a.id,
              address: n,
              chainId: e.chainId,
              provider: a,
              type: a.type,
            }
          );
        }
        async getBalance(e) {
          var t, a;
          const o = e.address,
            n =
              null === (t = this.getCaipNetworks()) || void 0 === t
                ? void 0
                : t.find((t) => t.id === e.chainId);
          if (!o) return Promise.resolve({ balance: "0.00", symbol: "SOL" });
          const s = new r.Ng(
              null === n ||
              void 0 === n ||
              null === (a = n.rpcUrls) ||
              void 0 === a ||
              null === (a = a.default) ||
              void 0 === a ||
              null === (a = a.http) ||
              void 0 === a
                ? void 0
                : a[0],
              this.connectionSettings
            ),
            c = `${null === n || void 0 === n ? void 0 : n.caipNetworkId}:${
              e.address
            }`,
            l = this.balancePromises[c];
          if (l) return l;
          const d = i.i.getNativeBalanceCacheForCaipAddress(c);
          return d
            ? { balance: d.balance, symbol: d.symbol }
            : ((this.balancePromises[c] = new Promise(async (t) => {
                try {
                  var a, n;
                  const l = (
                    (await s.getBalance(new r.J3(o))) / u.w.LAMPORTS_PER_SOL
                  ).toString();
                  if (
                    (i.i.updateNativeBalanceCache({
                      caipAddress: c,
                      balance: l,
                      symbol:
                        (null === (a = e.caipNetwork) || void 0 === a
                          ? void 0
                          : a.nativeCurrency.symbol) || "SOL",
                      timestamp: Date.now(),
                    }),
                    !e.caipNetwork)
                  )
                    throw new Error("caipNetwork is required");
                  t({
                    balance: l,
                    symbol:
                      null === (n = e.caipNetwork) || void 0 === n
                        ? void 0
                        : n.nativeCurrency.symbol,
                  });
                } catch (l) {
                  t({ balance: "0.00", symbol: "SOL" });
                }
              }).finally(() => {
                delete this.balancePromises[c];
              })),
              this.balancePromises[c] || { balance: "0.00", symbol: "SOL" });
        }
        async switchNetwork(e) {
          var t;
          await super.switchNetwork(e);
          const { caipNetwork: a } = e;
          null !== a &&
            void 0 !== a &&
            null !== (t = a.rpcUrls) &&
            void 0 !== t &&
            null !== (t = t.default) &&
            void 0 !== t &&
            null !== (t = t.http) &&
            void 0 !== t &&
            t[0] &&
            g.setConnection(
              new r.Ng(a.rpcUrls.default.http[0], this.connectionSettings)
            );
        }
        listenProviderEvents(e) {
          const t = () => {
              this.removeProviderListeners(e), this.emit("disconnect");
            },
            a = (e) => {
              const t = e.toBase58();
              t && this.emit("accountChanged", { address: t });
            };
          e.on("disconnect", t),
            e.on("accountsChanged", a),
            e.on("connect", a),
            e.on("pendingTransaction", () => {
              this.emit("pendingTransactions");
            }),
            (this.providerHandlers = { disconnect: t, accountsChanged: a });
        }
        removeProviderListeners(e) {
          this.providerHandlers &&
            (e.removeListener("disconnect", this.providerHandlers.disconnect),
            e.removeListener(
              "accountsChanged",
              this.providerHandlers.accountsChanged
            ),
            e.removeListener("connect", this.providerHandlers.accountsChanged),
            (this.providerHandlers = null));
        }
        setUniversalProvider(e) {
          this.addConnector(
            new m.j({
              provider: e,
              chains: this.getCaipNetworks(),
              getActiveChain: () =>
                s.W.getCaipNetworkByNamespace(this.namespace),
            })
          );
        }
        async connectWalletConnect(e) {
          var t;
          const a = await super.connectWalletConnect(e),
            o =
              null === (t = this.getCaipNetworks()) ||
              void 0 === t ||
              null === (t = t.find((t) => t.id === e)) ||
              void 0 === t
                ? void 0
                : t.rpcUrls.default.http[0],
            n = new r.Ng(o, this.connectionSettings);
          return g.setConnection(n), a;
        }
        async disconnect(e) {
          if (!e.provider || !e.providerType)
            throw new Error("Provider or providerType not provided");
          await e.provider.disconnect();
        }
        async getProfile() {
          return Promise.resolve({ profileName: void 0, profileImage: void 0 });
        }
        async syncConnection(e) {
          return this.connect({ ...e, type: "" });
        }
        getWalletConnectProvider(e) {
          return new m.j({
            provider: e.provider,
            chains: e.caipNetworks,
            getActiveChain: () => s.W.getCaipNetworkByNamespace(this.namespace),
          });
        }
      }
    },
    73082: (e, t, a) => {
      a.d(t, { x: () => E });
      var r = a(59586),
        o = a(86992),
        n = a(16733),
        i = a(44753),
        s = a(21369),
        c = a(23871),
        l = a(63157),
        d = a(71898),
        u = a(37687),
        p = a(18933),
        h = a(67415),
        v = a(52467);
      const m = (0, r.BX)({
        wcError: !1,
        buffering: !1,
        status: "disconnected",
      });
      let _;
      const E = {
        state: m,
        subscribeKey: (e, t) => (0, o.u$)(m, e, t),
        _getClient: () => m._client,
        setClient(e) {
          m._client = (0, r.KR)(e);
        },
        async connectWalletConnect() {
          if (n.w.isTelegram() || (n.w.isSafari() && n.w.isIos())) {
            var e, t;
            if (_) return await _, void (_ = void 0);
            if (
              !n.w.isPairingExpired(
                null === m || void 0 === m ? void 0 : m.wcPairingExpiry
              )
            ) {
              const e = m.wcUri;
              return void (m.wcUri = e);
            }
            (_ =
              null === (e = this._getClient()) ||
              void 0 === e ||
              null === (t = e.connectWalletConnect) ||
              void 0 === t
                ? void 0
                : t.call(e).catch(() => {})),
              (this.state.status = "connecting"),
              await _,
              (_ = void 0),
              (m.wcPairingExpiry = void 0),
              (this.state.status = "connected");
          } else {
            var a, r;
            await (null === (a = this._getClient()) ||
            void 0 === a ||
            null === (r = a.connectWalletConnect) ||
            void 0 === r
              ? void 0
              : r.call(a));
          }
        },
        async connectExternal(e, t) {
          var a, r;
          let o =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          await (null === (a = this._getClient()) ||
          void 0 === a ||
          null === (r = a.connectExternal) ||
          void 0 === r
            ? void 0
            : r.call(a, e)),
            o && l.W.setActiveNamespace(t);
        },
        async reconnectExternal(e) {
          var t, a;
          await (null === (t = this._getClient()) ||
          void 0 === t ||
          null === (a = t.reconnectExternal) ||
          void 0 === a
            ? void 0
            : a.call(t, e));
          const r = e.chain || l.W.state.activeChain;
          r && d.a.setConnectorId(e.id, r);
        },
        async setPreferredAccountType(e, t) {
          var a, r;
          p.W.setLoading(!0, l.W.state.activeChain);
          const o = d.a.getAuthConnector();
          o &&
            (c.U.setPreferredAccountType(e, t),
            await o.provider.setPreferredAccount(e),
            s.i.setPreferredAccountTypes(
              null !== (a = c.U.state.preferredAccountTypes) && void 0 !== a
                ? a
                : { [t]: e }
            ),
            await this.reconnectExternal(o),
            p.W.setLoading(!1, l.W.state.activeChain),
            u.E.sendEvent({
              type: "track",
              event: "SET_PREFERRED_ACCOUNT_TYPE",
              properties: {
                accountType: e,
                network:
                  (null === (r = l.W.state.activeCaipNetwork) || void 0 === r
                    ? void 0
                    : r.caipNetworkId) || "",
              },
            }));
        },
        async signMessage(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.signMessage(e);
        },
        parseUnits(e, t) {
          var a;
          return null === (a = this._getClient()) || void 0 === a
            ? void 0
            : a.parseUnits(e, t);
        },
        formatUnits(e, t) {
          var a;
          return null === (a = this._getClient()) || void 0 === a
            ? void 0
            : a.formatUnits(e, t);
        },
        async sendTransaction(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.sendTransaction(e);
        },
        async getCapabilities(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.getCapabilities(e);
        },
        async grantPermissions(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.grantPermissions(e);
        },
        async walletGetAssets(e) {
          var t, a;
          return null !==
            (t =
              null === (a = this._getClient()) || void 0 === a
                ? void 0
                : a.walletGetAssets(e)) && void 0 !== t
            ? t
            : {};
        },
        async estimateGas(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.estimateGas(e);
        },
        async writeContract(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.writeContract(e);
        },
        async getEnsAddress(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.getEnsAddress(e);
        },
        async getEnsAvatar(e) {
          var t;
          return null === (t = this._getClient()) || void 0 === t
            ? void 0
            : t.getEnsAvatar(e);
        },
        checkInstalled(e) {
          var t, a;
          return (
            (null === (t = this._getClient()) ||
            void 0 === t ||
            null === (a = t.checkInstalled) ||
            void 0 === a
              ? void 0
              : a.call(t, e)) || !1
          );
        },
        resetWcConnection() {
          (m.wcUri = void 0),
            (m.wcPairingExpiry = void 0),
            (m.wcLinking = void 0),
            (m.recentWallet = void 0),
            (m.status = "disconnected"),
            v.W.resetTransactions(),
            s.i.deleteWalletConnectDeepLink();
        },
        resetUri() {
          (m.wcUri = void 0), (m.wcPairingExpiry = void 0);
        },
        finalizeWcConnection() {
          var e;
          const { wcLinking: t, recentWallet: a } = E.state;
          t && s.i.setWalletConnectDeepLink(t),
            a && s.i.setAppKitRecent(a),
            u.E.sendEvent({
              type: "track",
              event: "CONNECT_SUCCESS",
              properties: {
                method: t ? "mobile" : "qrcode",
                name:
                  (null === (e = h.I.state.data) ||
                  void 0 === e ||
                  null === (e = e.wallet) ||
                  void 0 === e
                    ? void 0
                    : e.name) || "Unknown",
              },
            });
        },
        setWcBasic(e) {
          m.wcBasic = e;
        },
        setUri(e) {
          (m.wcUri = e), (m.wcPairingExpiry = n.w.getPairingExpiry());
        },
        setWcLinking(e) {
          m.wcLinking = e;
        },
        setWcError(e) {
          (m.wcError = e), (m.buffering = !1);
        },
        setRecentWallet(e) {
          m.recentWallet = e;
        },
        setBuffering(e) {
          m.buffering = e;
        },
        setStatus(e) {
          m.status = e;
        },
        async disconnect(e) {
          try {
            p.W.setLoading(!0, e),
              await i.U.clearSessions(),
              await l.W.disconnect(e),
              p.W.setLoading(!1, e),
              d.a.setFilterByNamespace(void 0);
          } catch (t) {
            throw new Error("Failed to disconnect");
          }
        },
      };
    },
    74364: (e, t, a) => {
      a.d(t, { L: () => r });
      const r = {
        caipNetworkIdToNumber: (e) => (e ? Number(e.split(":")[1]) : void 0),
        parseEvmChainId(e) {
          return "string" === typeof e ? this.caipNetworkIdToNumber(e) : e;
        },
        getNetworksByNamespace: (e, t) =>
          (null === e || void 0 === e
            ? void 0
            : e.filter((e) => e.chainNamespace === t)) || [],
        getFirstNetworkByNamespace(e, t) {
          return this.getNetworksByNamespace(e, t)[0];
        },
      };
    },
    75003: (e, t, a) => {
      a.d(t, { X: () => r.X });
      var r = a(57456);
    },
    75673: (e, t, a) => {
      a.d(t, { W: () => s });
      var r = a(59586),
        o = a(55639),
        n = a(71898);
      const i = (0, r.BX)({
          themeMode: "dark",
          themeVariables: {},
          w3mThemeVariables: void 0,
        }),
        s = {
          state: i,
          subscribe: (e) => (0, r.B1)(i, () => e(i)),
          setThemeMode(e) {
            i.themeMode = e;
            try {
              const t = n.a.getAuthConnector();
              if (t) {
                const a = s.getSnapshot().themeVariables;
                t.provider.syncTheme({
                  themeMode: e,
                  themeVariables: a,
                  w3mThemeVariables: (0, o.o)(a, e),
                });
              }
            } catch {
              console.info("Unable to sync theme to auth connector");
            }
          },
          setThemeVariables(e) {
            i.themeVariables = { ...i.themeVariables, ...e };
            try {
              const e = n.a.getAuthConnector();
              if (e) {
                const t = s.getSnapshot().themeVariables;
                e.provider.syncTheme({
                  themeVariables: t,
                  w3mThemeVariables: (0, o.o)(i.themeVariables, i.themeMode),
                });
              }
            } catch {
              console.info("Unable to sync theme to auth connector");
            }
          },
          getSnapshot: () => (0, r.P9)(i),
        };
    },
    78344: (e, t, a) => {
      async function r() {
        const e = await fetch(...arguments);
        if (!e.ok) {
          throw new Error(`HTTP status code: ${e.status}`, { cause: e });
        }
        return e;
      }
      a.d(t, { Z: () => o });
      class o {
        constructor(e) {
          let { baseUrl: t, clientId: a } = e;
          (this.baseUrl = t), (this.clientId = a);
        }
        async get(e) {
          let { headers: t, signal: a, cache: o, ...n } = e;
          const i = this.createUrl(n);
          return (
            await r(i, { method: "GET", headers: t, signal: a, cache: o })
          ).json();
        }
        async getBlob(e) {
          let { headers: t, signal: a, ...o } = e;
          const n = this.createUrl(o);
          return (await r(n, { method: "GET", headers: t, signal: a })).blob();
        }
        async post(e) {
          let { body: t, headers: a, signal: o, ...n } = e;
          const i = this.createUrl(n);
          return (
            await r(i, {
              method: "POST",
              headers: a,
              body: t ? JSON.stringify(t) : void 0,
              signal: o,
            })
          ).json();
        }
        async put(e) {
          let { body: t, headers: a, signal: o, ...n } = e;
          const i = this.createUrl(n);
          return (
            await r(i, {
              method: "PUT",
              headers: a,
              body: t ? JSON.stringify(t) : void 0,
              signal: o,
            })
          ).json();
        }
        async delete(e) {
          let { body: t, headers: a, signal: o, ...n } = e;
          const i = this.createUrl(n);
          return (
            await r(i, {
              method: "DELETE",
              headers: a,
              body: t ? JSON.stringify(t) : void 0,
              signal: o,
            })
          ).json();
        }
        createUrl(e) {
          let { path: t, params: a } = e;
          const r = new URL(t, this.baseUrl);
          return (
            a &&
              Object.entries(a).forEach((e) => {
                let [t, a] = e;
                a && r.searchParams.append(t, a);
              }),
            this.clientId && r.searchParams.append("clientId", this.clientId),
            r
          );
        }
      }
    },
    78732: (e, t) => {
      function a(e, t) {
        var a = e.length;
        e.push(t);
        e: for (; 0 < a; ) {
          var r = (a - 1) >>> 1,
            o = e[r];
          if (!(0 < n(o, t))) break e;
          (e[r] = t), (e[a] = o), (a = r);
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function o(e) {
        if (0 === e.length) return null;
        var t = e[0],
          a = e.pop();
        if (a !== t) {
          e[0] = a;
          e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
            var s = 2 * (r + 1) - 1,
              c = e[s],
              l = s + 1,
              d = e[l];
            if (0 > n(c, a))
              l < o && 0 > n(d, c)
                ? ((e[r] = d), (e[l] = a), (r = l))
                : ((e[r] = c), (e[s] = a), (r = s));
            else {
              if (!(l < o && 0 > n(d, a))) break e;
              (e[r] = d), (e[l] = a), (r = l);
            }
          }
        }
        return t;
      }
      function n(e, t) {
        var a = e.sortIndex - t.sortIndex;
        return 0 !== a ? a : e.id - t.id;
      }
      if (
        "object" === typeof performance &&
        "function" === typeof performance.now
      ) {
        var i = performance;
        t.unstable_now = function () {
          return i.now();
        };
      } else {
        var s = Date,
          c = s.now();
        t.unstable_now = function () {
          return s.now() - c;
        };
      }
      var l = [],
        d = [],
        u = 1,
        p = null,
        h = 3,
        v = !1,
        m = !1,
        _ = !1,
        E = "function" === typeof setTimeout ? setTimeout : null,
        C = "function" === typeof clearTimeout ? clearTimeout : null,
        g = "undefined" !== typeof setImmediate ? setImmediate : null;
      function A(e) {
        for (var t = r(d); null !== t; ) {
          if (null === t.callback) o(d);
          else {
            if (!(t.startTime <= e)) break;
            o(d), (t.sortIndex = t.expirationTime), a(l, t);
          }
          t = r(d);
        }
      }
      function w(e) {
        if (((_ = !1), A(e), !m))
          if (null !== r(l)) (m = !0), U(N);
          else {
            var t = r(d);
            null !== t && x(w, t.startTime - e);
          }
      }
      function N(e, a) {
        (m = !1), _ && ((_ = !1), C(b), (b = -1)), (v = !0);
        var n = h;
        try {
          for (
            A(a), p = r(l);
            null !== p && (!(p.expirationTime > a) || (e && !P()));

          ) {
            var i = p.callback;
            if ("function" === typeof i) {
              (p.callback = null), (h = p.priorityLevel);
              var s = i(p.expirationTime <= a);
              (a = t.unstable_now()),
                "function" === typeof s ? (p.callback = s) : p === r(l) && o(l),
                A(a);
            } else o(l);
            p = r(l);
          }
          if (null !== p) var c = !0;
          else {
            var u = r(d);
            null !== u && x(w, u.startTime - a), (c = !1);
          }
          return c;
        } finally {
          (p = null), (h = n), (v = !1);
        }
      }
      "undefined" !== typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var f,
        T = !1,
        R = null,
        b = -1,
        I = 5,
        y = -1;
      function P() {
        return !(t.unstable_now() - y < I);
      }
      function S() {
        if (null !== R) {
          var e = t.unstable_now();
          y = e;
          var a = !0;
          try {
            a = R(!0, e);
          } finally {
            a ? f() : ((T = !1), (R = null));
          }
        } else T = !1;
      }
      if ("function" === typeof g)
        f = function () {
          g(S);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var k = new MessageChannel(),
          O = k.port2;
        (k.port1.onmessage = S),
          (f = function () {
            O.postMessage(null);
          });
      } else
        f = function () {
          E(S, 0);
        };
      function U(e) {
        (R = e), T || ((T = !0), f());
      }
      function x(e, a) {
        b = E(function () {
          e(t.unstable_now());
        }, a);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          m || v || ((m = !0), U(N));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (I = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return h;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(l);
        }),
        (t.unstable_next = function (e) {
          switch (h) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = h;
          }
          var a = h;
          h = t;
          try {
            return e();
          } finally {
            h = a;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var a = h;
          h = e;
          try {
            return t();
          } finally {
            h = a;
          }
        }),
        (t.unstable_scheduleCallback = function (e, o, n) {
          var i = t.unstable_now();
          switch (
            ("object" === typeof n && null !== n
              ? (n = "number" === typeof (n = n.delay) && 0 < n ? i + n : i)
              : (n = i),
            e)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (e = {
              id: u++,
              callback: o,
              priorityLevel: e,
              startTime: n,
              expirationTime: (s = n + s),
              sortIndex: -1,
            }),
            n > i
              ? ((e.sortIndex = n),
                a(d, e),
                null === r(l) &&
                  e === r(d) &&
                  (_ ? (C(b), (b = -1)) : (_ = !0), x(w, n - i)))
              : ((e.sortIndex = s), a(l, e), m || v || ((m = !0), U(N))),
            e
          );
        }),
        (t.unstable_shouldYield = P),
        (t.unstable_wrapCallback = function (e) {
          var t = h;
          return function () {
            var a = h;
            h = t;
            try {
              return e.apply(this, arguments);
            } finally {
              h = a;
            }
          };
        });
    },
    79242: (e, t, a) => {
      a.d(t, { A: () => T });
      var r = (function () {
          if ("undefined" !== typeof Map) return Map;
          function e(e, t) {
            var a = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((a = r), !0);
              }),
              a
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var a = e(this.__entries__, t),
                  r = this.__entries__[a];
                return r && r[1];
              }),
              (t.prototype.set = function (t, a) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = a)
                  : this.__entries__.push([t, a]);
              }),
              (t.prototype.delete = function (t) {
                var a = this.__entries__,
                  r = e(a, t);
                ~r && a.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var a = 0, r = this.__entries__; a < r.length; a++) {
                  var o = r[a];
                  e.call(t, o[1], o[0]);
                }
              }),
              t
            );
          })();
        })(),
        o =
          "undefined" !== typeof window &&
          "undefined" !== typeof document &&
          window.document === document,
        n =
          "undefined" !== typeof a.g && a.g.Math === Math
            ? a.g
            : "undefined" !== typeof self && self.Math === Math
            ? self
            : "undefined" !== typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        i =
          "function" === typeof requestAnimationFrame
            ? requestAnimationFrame.bind(n)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
      var s = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        c = "undefined" !== typeof MutationObserver,
        l = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var a = !1,
                  r = !1,
                  o = 0;
                function n() {
                  a && ((a = !1), e()), r && c();
                }
                function s() {
                  i(n);
                }
                function c() {
                  var e = Date.now();
                  if (a) {
                    if (e - o < 2) return;
                    r = !0;
                  } else (a = !0), (r = !1), setTimeout(s, t);
                  o = e;
                }
                return c;
              })(this.refresh.bind(this), 20));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                a = t.indexOf(e);
              ~a && t.splice(a, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              o &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                c
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              o &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                a = void 0 === t ? "" : t;
              s.some(function (e) {
                return !!~a.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        d = function (e, t) {
          for (var a = 0, r = Object.keys(t); a < r.length; a++) {
            var o = r[a];
            Object.defineProperty(e, o, {
              value: t[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        u = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || n;
        },
        p = C(0, 0, 0, 0);
      function h(e) {
        return parseFloat(e) || 0;
      }
      function v(e) {
        for (var t = [], a = 1; a < arguments.length; a++)
          t[a - 1] = arguments[a];
        return t.reduce(function (t, a) {
          return t + h(e["border-" + a + "-width"]);
        }, 0);
      }
      function m(e) {
        var t = e.clientWidth,
          a = e.clientHeight;
        if (!t && !a) return p;
        var r = u(e).getComputedStyle(e),
          o = (function (e) {
            for (
              var t = {}, a = 0, r = ["top", "right", "bottom", "left"];
              a < r.length;
              a++
            ) {
              var o = r[a],
                n = e["padding-" + o];
              t[o] = h(n);
            }
            return t;
          })(r),
          n = o.left + o.right,
          i = o.top + o.bottom,
          s = h(r.width),
          c = h(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(s + n) !== t && (s -= v(r, "left", "right") + n),
            Math.round(c + i) !== a && (c -= v(r, "top", "bottom") + i)),
          !(function (e) {
            return e === u(e).document.documentElement;
          })(e))
        ) {
          var l = Math.round(s + n) - t,
            d = Math.round(c + i) - a;
          1 !== Math.abs(l) && (s -= l), 1 !== Math.abs(d) && (c -= d);
        }
        return C(o.left, o.top, s, c);
      }
      var _ =
        "undefined" !== typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof u(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof u(e).SVGElement && "function" === typeof e.getBBox
              );
            };
      function E(e) {
        return o
          ? _(e)
            ? (function (e) {
                var t = e.getBBox();
                return C(0, 0, t.width, t.height);
              })(e)
            : m(e)
          : p;
      }
      function C(e, t, a, r) {
        return { x: e, y: t, width: a, height: r };
      }
      var g = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = C(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = E(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        A = function (e, t) {
          var a = (function (e) {
            var t = e.x,
              a = e.y,
              r = e.width,
              o = e.height,
              n =
                "undefined" !== typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object,
              i = Object.create(n.prototype);
            return (
              d(i, {
                x: t,
                y: a,
                width: r,
                height: o,
                top: a,
                right: t + r,
                bottom: o + a,
                left: t,
              }),
              i
            );
          })(t);
          d(this, { target: e, contentRect: a });
        },
        w = (function () {
          function e(e, t, a) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new r()),
              "function" !== typeof e)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = a);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof u(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new g(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof u(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new A(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        N = "undefined" !== typeof WeakMap ? new WeakMap() : new r(),
        f = function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var a = l.getInstance(),
            r = new w(t, a, this);
          N.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        f.prototype[e] = function () {
          var t;
          return (t = N.get(this))[e].apply(t, arguments);
        };
      });
      const T = "undefined" !== typeof n.ResizeObserver ? n.ResizeObserver : f;
    },
    79631: (e, t, a) => {
      a.d(t, { F: () => l });
      a(99296);
      var r = a(10719),
        o = a(63157),
        n = a(458),
        i = a(44753),
        s = a(59402),
        c = a(25057);
      class l {
        constructor(e) {
          let { provider: t, namespace: a } = e;
          (this.id = r.o.CONNECTOR_ID.WALLET_CONNECT),
            (this.name =
              s.L.ConnectorNamesMap[r.o.CONNECTOR_ID.WALLET_CONNECT]),
            (this.type = "WALLET_CONNECT"),
            (this.imageId =
              s.L.ConnectorImageIds[r.o.CONNECTOR_ID.WALLET_CONNECT]),
            (this.getCaipNetworks = o.W.getCaipNetworks.bind(o.W)),
            (this.caipNetworks = this.getCaipNetworks()),
            (this.provider = t),
            (this.chain = a);
        }
        get chains() {
          return this.getCaipNetworks();
        }
        async connectWalletConnect() {
          if (!(await this.authenticate())) {
            const e = this.getCaipNetworks(),
              t = n.H.state.universalProviderConfigOverride,
              a = c.kl.createNamespaces(e, t);
            await this.provider.connect({ optionalNamespaces: a });
          }
          return {
            clientId: await this.provider.client.core.crypto.getClientId(),
            session: this.provider.session,
          };
        }
        async disconnect() {
          await this.provider.disconnect();
        }
        async authenticate() {
          const e = this.chains.map((e) => e.caipNetworkId);
          return i.U.universalProviderAuthenticate({
            universalProvider: this.provider,
            chains: e,
            methods: d,
          });
        }
      }
      const d = [
        "eth_accounts",
        "eth_requestAccounts",
        "eth_sendRawTransaction",
        "eth_sign",
        "eth_signTransaction",
        "eth_signTypedData",
        "eth_signTypedData_v3",
        "eth_signTypedData_v4",
        "eth_sendTransaction",
        "personal_sign",
        "wallet_switchEthereumChain",
        "wallet_addEthereumChain",
        "wallet_getPermissions",
        "wallet_requestPermissions",
        "wallet_registerOnboarding",
        "wallet_watchAsset",
        "wallet_scanQRCode",
        "wallet_getCallsStatus",
        "wallet_sendCalls",
        "wallet_getCapabilities",
        "wallet_grantPermissions",
        "wallet_revokePermissions",
        "wallet_getAssets",
      ];
    },
    80054: (e, t, a) => {
      a.d(t, { Mz: () => s });
      var r = "NOT_FOUND";
      var o = function (e, t) {
        return e === t;
      };
      function n(e, t) {
        var a = "object" === typeof t ? t : { equalityCheck: t },
          n = a.equalityCheck,
          i = void 0 === n ? o : n,
          s = a.maxSize,
          c = void 0 === s ? 1 : s,
          l = a.resultEqualityCheck,
          d = (function (e) {
            return function (t, a) {
              if (null === t || null === a || t.length !== a.length) return !1;
              for (var r = t.length, o = 0; o < r; o++)
                if (!e(t[o], a[o])) return !1;
              return !0;
            };
          })(i),
          u =
            1 === c
              ? (function (e) {
                  var t;
                  return {
                    get: function (a) {
                      return t && e(t.key, a) ? t.value : r;
                    },
                    put: function (e, a) {
                      t = { key: e, value: a };
                    },
                    getEntries: function () {
                      return t ? [t] : [];
                    },
                    clear: function () {
                      t = void 0;
                    },
                  };
                })(d)
              : (function (e, t) {
                  var a = [];
                  function o(e) {
                    var o = a.findIndex(function (a) {
                      return t(e, a.key);
                    });
                    if (o > -1) {
                      var n = a[o];
                      return o > 0 && (a.splice(o, 1), a.unshift(n)), n.value;
                    }
                    return r;
                  }
                  return {
                    get: o,
                    put: function (t, n) {
                      o(t) === r &&
                        (a.unshift({ key: t, value: n }),
                        a.length > e && a.pop());
                    },
                    getEntries: function () {
                      return a;
                    },
                    clear: function () {
                      a = [];
                    },
                  };
                })(c, d);
        function p() {
          var t = u.get(arguments);
          if (t === r) {
            if (((t = e.apply(null, arguments)), l)) {
              var a = u.getEntries().find(function (e) {
                return l(e.value, t);
              });
              a && (t = a.value);
            }
            u.put(arguments, t);
          }
          return t;
        }
        return (
          (p.clearCache = function () {
            return u.clear();
          }),
          p
        );
      }
      function i(e) {
        for (
          var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          a[r - 1] = arguments[r];
        return function () {
          for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          var n,
            i = 0,
            s = { memoizeOptions: void 0 },
            c = r.pop();
          if (
            ("object" === typeof c && ((s = c), (c = r.pop())),
            "function" !== typeof c)
          )
            throw new Error(
              "createSelector expects an output function after the inputs, but received: [" +
                typeof c +
                "]"
            );
          var l = s.memoizeOptions,
            d = void 0 === l ? a : l,
            u = Array.isArray(d) ? d : [d],
            p = (function (e) {
              var t = Array.isArray(e[0]) ? e[0] : e;
              if (
                !t.every(function (e) {
                  return "function" === typeof e;
                })
              ) {
                var a = t
                  .map(function (e) {
                    return "function" === typeof e
                      ? "function " + (e.name || "unnamed") + "()"
                      : typeof e;
                  })
                  .join(", ");
                throw new Error(
                  "createSelector expects all input-selectors to be functions, but received the following types: [" +
                    a +
                    "]"
                );
              }
              return t;
            })(r),
            h = e.apply(
              void 0,
              [
                function () {
                  return i++, c.apply(null, arguments);
                },
              ].concat(u)
            ),
            v = e(function () {
              for (var e = [], t = p.length, a = 0; a < t; a++)
                e.push(p[a].apply(null, arguments));
              return (n = h.apply(null, e));
            });
          return (
            Object.assign(v, {
              resultFunc: c,
              memoizedResultFunc: h,
              dependencies: p,
              lastResult: function () {
                return n;
              },
              recomputations: function () {
                return i;
              },
              resetRecomputations: function () {
                return (i = 0);
              },
            }),
            v
          );
        };
      }
      var s = i(n);
    },
    80240: (e, t, a) => {
      a.d(t, { $: () => c });
      var r = a(59586),
        o = a(69084),
        n = a(43136);
      const i = {
          eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
          solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
          polkadot: "",
          bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
        },
        s = (0, r.BX)({ networkImagePromises: {} }),
        c = {
          async fetchWalletImage(e) {
            if (e)
              return await o.N._fetchWalletImage(e), this.getWalletImageById(e);
          },
          async fetchNetworkImage(e) {
            if (!e) return;
            const t = this.getNetworkImageById(e);
            return (
              t ||
              (s.networkImagePromises[e] ||
                (s.networkImagePromises[e] = o.N._fetchNetworkImage(e)),
              await s.networkImagePromises[e],
              this.getNetworkImageById(e))
            );
          },
          getWalletImageById(e) {
            if (e) return n.j.state.walletImages[e];
          },
          getWalletImage: (e) =>
            null !== e && void 0 !== e && e.image_url
              ? null === e || void 0 === e
                ? void 0
                : e.image_url
              : null !== e && void 0 !== e && e.image_id
              ? n.j.state.walletImages[e.image_id]
              : void 0,
          getNetworkImage(e) {
            var t, a, r;
            return null !== e &&
              void 0 !== e &&
              null !== (t = e.assets) &&
              void 0 !== t &&
              t.imageUrl
              ? null === e ||
                void 0 === e ||
                null === (r = e.assets) ||
                void 0 === r
                ? void 0
                : r.imageUrl
              : null !== e &&
                void 0 !== e &&
                null !== (a = e.assets) &&
                void 0 !== a &&
                a.imageId
              ? n.j.state.networkImages[e.assets.imageId]
              : void 0;
          },
          getNetworkImageById(e) {
            if (e) return n.j.state.networkImages[e];
          },
          getConnectorImage: (e) =>
            null !== e && void 0 !== e && e.imageUrl
              ? e.imageUrl
              : null !== e && void 0 !== e && e.imageId
              ? n.j.state.connectorImages[e.imageId]
              : void 0,
          getChainImage: (e) => n.j.state.networkImages[i[e]],
        };
    },
    83163: (e, t, a) => {
      a.d(t, { A: () => n });
      var r = a(68702);
      const o = (e) =>
        !1 === e
          ? { block: "end", inline: "nearest" }
          : ((e) => e === Object(e) && 0 !== Object.keys(e).length)(e)
          ? e
          : { block: "start", inline: "nearest" };
      function n(e, t) {
        if (
          !e.isConnected ||
          !((e) => {
            let t = e;
            for (; t && t.parentNode; ) {
              if (t.parentNode === document) return !0;
              t =
                t.parentNode instanceof ShadowRoot
                  ? t.parentNode.host
                  : t.parentNode;
            }
            return !1;
          })(e)
        )
          return;
        const a = ((e) => {
          const t = window.getComputedStyle(e);
          return {
            top: parseFloat(t.scrollMarginTop) || 0,
            right: parseFloat(t.scrollMarginRight) || 0,
            bottom: parseFloat(t.scrollMarginBottom) || 0,
            left: parseFloat(t.scrollMarginLeft) || 0,
          };
        })(e);
        if ("object" == typeof (n = t) && "function" == typeof n.behavior)
          return t.behavior((0, r.O)(e, t));
        var n;
        const i = "boolean" == typeof t || null == t ? void 0 : t.behavior;
        for (const { el: s, top: c, left: l } of (0, r.O)(e, o(t))) {
          const e = c - a.top + a.bottom,
            t = l - a.left + a.right;
          s.scroll({ top: e, left: t, behavior: i });
        }
      }
    },
    83454: (e, t, a) => {
      a.d(t, { P: () => c });
      var r = a(59586),
        o = a(86992),
        n = a(16733);
      const i = Object.freeze({
          message: "",
          variant: "success",
          svg: void 0,
          open: !1,
          autoClose: !0,
        }),
        s = (0, r.BX)({ ...i }),
        c = {
          state: s,
          subscribeKey: (e, t) => (0, o.u$)(s, e, t),
          showLoading(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            this._showMessage({ message: e, variant: "loading", ...t });
          },
          showSuccess(e) {
            this._showMessage({ message: e, variant: "success" });
          },
          showSvg(e, t) {
            this._showMessage({ message: e, svg: t });
          },
          showError(e) {
            const t = n.w.parseError(e);
            this._showMessage({ message: t, variant: "error" });
          },
          hide() {
            (s.message = i.message),
              (s.variant = i.variant),
              (s.svg = i.svg),
              (s.open = i.open),
              (s.autoClose = i.autoClose);
          },
          _showMessage(e) {
            let {
              message: t,
              svg: a,
              variant: r = "success",
              autoClose: o = i.autoClose,
            } = e;
            s.open
              ? ((s.open = !1),
                setTimeout(() => {
                  (s.message = t),
                    (s.variant = r),
                    (s.svg = a),
                    (s.open = !0),
                    (s.autoClose = o);
                }, 150))
              : ((s.message = t),
                (s.variant = r),
                (s.svg = a),
                (s.open = !0),
                (s.autoClose = o));
          },
        };
    },
    87019: (e, t, a) => {
      a.d(t, {
        E3H: () => r.E3H,
        NBY: () => r.NBY,
        tWt: () => n,
        Rn0: () => i,
        gTy: () => s,
      });
      var r = a(45682);
      function o(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      const n = o({
          id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          name: "Solana",
          network: "solana-mainnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !1,
          chainNamespace: "solana",
          caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
        }),
        i = o({
          id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          name: "Solana Devnet",
          network: "solana-devnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K",
        }),
        s = o({
          id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
          name: "Solana Testnet",
          network: "solana-testnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
        });
      o({
        id: "000000000019d6689c085ae165831e93",
        caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
        chainNamespace: "bip122",
        name: "Bitcoin",
        nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 },
        rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
      }),
        o({
          id: "000000000933ea01ad0ee984209779ba",
          caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
          chainNamespace: "bip122",
          name: "Bitcoin Testnet",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          testnet: !0,
        });
    },
    88112: (e, t, a) => {
      a.d(t, { r: () => l });
      var r = a(17876),
        o = a(85495),
        n = a(75054),
        i = a(12156);
      r.extend(n), r.extend(i);
      const s = {
          ...o,
          name: "en-web3-modal",
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "%d sec",
            m: "1 min",
            mm: "%d min",
            h: "1 hr",
            hh: "%d hrs",
            d: "1 d",
            dd: "%d d",
            M: "1 mo",
            MM: "%d mo",
            y: "1 yr",
            yy: "%d yr",
          },
        },
        c = [
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
        ];
      r.locale("en-web3-modal", s);
      const l = {
        getMonthNameByIndex: (e) => c[e],
        getYear() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Date().toISOString();
          return r(e).year();
        },
        getRelativeDateFromNow: (e) => r(e).locale("en-web3-modal").fromNow(!0),
        formatDate(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "DD MMM";
          return r(e).format(t);
        },
      };
    },
    88361: (e, t, a) => {
      a.d(t, { A: () => s });
      var r = a(59586),
        o = a(86992);
      const n = {
          eip155: void 0,
          solana: void 0,
          polkadot: void 0,
          bip122: void 0,
        },
        i = (0, r.BX)({ providers: { ...n }, providerIds: { ...n } }),
        s = {
          state: i,
          subscribeKey: (e, t) => (0, o.u$)(i, e, t),
          subscribe: (e) =>
            (0, r.B1)(i, () => {
              e(i);
            }),
          subscribeProviders: (e) =>
            (0, r.B1)(i.providers, () => e(i.providers)),
          setProvider(e, t) {
            t && (i.providers[e] = (0, r.KR)(t));
          },
          getProvider: (e) => i.providers[e],
          setProviderId(e, t) {
            t && (i.providerIds[e] = t);
          },
          getProviderId(e) {
            if (e) return i.providerIds[e];
          },
          reset() {
            (i.providers = { ...n }), (i.providerIds = { ...n });
          },
          resetChain(e) {
            (i.providers[e] = void 0), (i.providerIds[e] = void 0);
          },
        };
    },
    89623: (e, t, a) => {
      a.d(t, { o: () => r });
      const r = {
        METMASK_CONNECTOR_NAME: "MetaMask",
        TRUST_CONNECTOR_NAME: "Trust Wallet",
        SOLFLARE_CONNECTOR_NAME: "Solflare",
        PHANTOM_CONNECTOR_NAME: "Phantom",
        COIN98_CONNECTOR_NAME: "Coin98",
        MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
        BACKPACK_CONNECTOR_NAME: "Backpack",
        BITGET_CONNECTOR_NAME: "Bitget Wallet",
        FRONTIER_CONNECTOR_NAME: "Frontier",
        XVERSE_CONNECTOR_NAME: "Xverse Wallet",
        LEATHER_CONNECTOR_NAME: "Leather",
        EIP155: "eip155",
        ADD_CHAIN_METHOD: "wallet_addEthereumChain",
        EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
        EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
        CONNECTOR_RDNS_MAP: {
          coinbaseWallet: "com.coinbase.wallet",
          coinbaseWalletSDK: "com.coinbase.wallet",
        },
        CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH",
        CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
        CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH",
      };
    },
    90312: (e, t, a) => {
      a.d(t, {
        E3H: () => r.E3H,
        NBY: () => r.NBY,
        Rn0: () => r.Rn0,
        gTy: () => r.gTy,
        tWt: () => r.tWt,
      });
      var r = a(87019);
    },
    91073: (e, t, a) => {
      a.d(t, { N: () => o });
      var r = a(90312);
      const o = {
        "solana:mainnet": r.tWt,
        "solana:testnet": r.gTy,
        "solana:devnet": r.Rn0,
      };
    },
    93641: (e, t, a) => {
      a.d(t, { E: () => r });
      const r = {
        ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
        ERROR_CODE_DEFAULT: 5e3,
        ERROR_INVALID_CHAIN_ID: 32603,
      };
    },
  },
]);
