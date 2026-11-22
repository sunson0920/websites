"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [374],
  {
    70374: (e, t, o) => {
      o.r(t), o.d(t, { W3mModal: () => te });
      var i = o(21579),
        a = o(4742),
        r = o(71597),
        n = o(10719),
        s = o(458),
        l = o(18933),
        c = o(63157),
        d = o(71898),
        u = o(69084),
        p = o(67415),
        h = o(44753),
        w = o(75673),
        m = o(83454),
        v = o(16733),
        g = o(15694),
        b = o(58961),
        f = o(15986);
      const y = i.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;
      var k = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      let x = class extends i.WF {
        render() {
          return i.qy`<slot></slot>`;
        }
      };
      (x.styles = [b.W5, y]), (x = k([(0, f.E)("wui-card")], x));
      o(49986);
      var C = o(24026);
      o(40893), o(71543), o(76445);
      const W = i.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;
      var S = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      let I = class extends i.WF {
        constructor() {
          super(...arguments),
            (this.message = ""),
            (this.backgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.icon = "info");
        }
        render() {
          return (
            (this.style.cssText = `\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `),
            i.qy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `
          );
        }
        onClose() {
          C.h.close();
        }
      };
      (I.styles = [b.W5, W]),
        S([(0, a.MZ)()], I.prototype, "message", void 0),
        S([(0, a.MZ)()], I.prototype, "backgroundColor", void 0),
        S([(0, a.MZ)()], I.prototype, "iconColor", void 0),
        S([(0, a.MZ)()], I.prototype, "icon", void 0),
        (I = S([(0, f.E)("wui-alertbar")], I));
      const N = i.AH`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;
      var A = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      const E = {
        info: { backgroundColor: "fg-350", iconColor: "fg-325", icon: "info" },
        success: {
          backgroundColor: "success-glass-reown-020",
          iconColor: "success-125",
          icon: "checkmark",
        },
        warning: {
          backgroundColor: "warning-glass-reown-020",
          iconColor: "warning-100",
          icon: "warningCircle",
        },
        error: {
          backgroundColor: "error-glass-reown-020",
          iconColor: "error-125",
          icon: "exclamationTriangle",
        },
      };
      let T = class extends i.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.open = C.h.state.open),
            this.onOpen(!0),
            this.unsubscribe.push(
              C.h.subscribeKey("open", (e) => {
                (this.open = e), this.onOpen(!1);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const { message: e, variant: t } = C.h.state,
            o = E[t];
          return i.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${
          null === o || void 0 === o ? void 0 : o.backgroundColor
        }
        iconColor=${null === o || void 0 === o ? void 0 : o.iconColor}
        icon=${null === o || void 0 === o ? void 0 : o.icon}
      ></wui-alertbar>
    `;
        }
        onOpen(e) {
          this.open
            ? (this.animate(
                [
                  { opacity: 0, transform: "scale(0.85)" },
                  { opacity: 1, transform: "scale(1)" },
                ],
                { duration: 150, fill: "forwards", easing: "ease" }
              ),
              (this.style.cssText = "pointer-events: auto"))
            : e ||
              (this.animate(
                [
                  { opacity: 1, transform: "scale(1)" },
                  { opacity: 0, transform: "scale(0.85)" },
                ],
                { duration: 150, fill: "forwards", easing: "ease" }
              ),
              (this.style.cssText = "pointer-events: none"));
        }
      };
      (T.styles = N),
        A([(0, a.wk)()], T.prototype, "open", void 0),
        (T = A([(0, g.EM)("w3m-alertbar")], T));
      var $ = o(23871),
        O = o(80240),
        R = o(43136),
        P = o(73082),
        j = o(37687);
      o(43155), o(32613), o(64009);
      const B = i.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
      var H = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      let q = class extends i.WF {
        constructor() {
          super(...arguments), (this.imageSrc = "");
        }
        render() {
          return i.qy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`;
        }
        imageTemplate() {
          return this.imageSrc
            ? i.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`
            : i.qy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`;
        }
      };
      (q.styles = [b.W5, b.fD, b.ck, B]),
        H([(0, a.MZ)()], q.prototype, "imageSrc", void 0),
        (q = H([(0, f.E)("wui-select")], q));
      o(64345), o(94110);
      var D = o(2195);
      const L = i.AH`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
      var M = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      const U = ["SmartSessionList"];
      function K() {
        var e, t, o, i;
        const a =
            null === (e = p.I.state.data) ||
            void 0 === e ||
            null === (e = e.connector) ||
            void 0 === e
              ? void 0
              : e.name,
          r =
            null === (t = p.I.state.data) ||
            void 0 === t ||
            null === (t = t.wallet) ||
            void 0 === t
              ? void 0
              : t.name,
          n =
            null === (o = p.I.state.data) ||
            void 0 === o ||
            null === (o = o.network) ||
            void 0 === o
              ? void 0
              : o.name,
          s = null !== r && void 0 !== r ? r : a,
          l = d.a.getConnectors();
        return {
          Connect: `Connect ${
            1 === l.length &&
            "w3m-email" ===
              (null === (i = l[0]) || void 0 === i ? void 0 : i.id)
              ? "Email"
              : ""
          } Wallet`,
          Create: "Create Wallet",
          ChooseAccountName: void 0,
          Account: void 0,
          AccountSettings: void 0,
          AllWallets: "All Wallets",
          ApproveTransaction: "Approve Transaction",
          BuyInProgress: "Buy",
          ConnectingExternal: null !== s && void 0 !== s ? s : "Connect Wallet",
          ConnectingWalletConnect:
            null !== s && void 0 !== s ? s : "WalletConnect",
          ConnectingWalletConnectBasic: "WalletConnect",
          ConnectingSiwe: "Sign In",
          Convert: "Convert",
          ConvertSelectToken: "Select token",
          ConvertPreview: "Preview convert",
          Downloads: s ? `Get ${s}` : "Downloads",
          EmailLogin: "Email Login",
          EmailVerifyOtp: "Confirm Email",
          EmailVerifyDevice: "Register Device",
          GetWallet: "Get a wallet",
          Networks: "Choose Network",
          OnRampProviders: "Choose Provider",
          OnRampActivity: "Activity",
          OnRampTokenSelect: "Select Token",
          OnRampFiatSelect: "Select Currency",
          Profile: void 0,
          SwitchNetwork: null !== n && void 0 !== n ? n : "Switch Network",
          SwitchAddress: "Switch Address",
          Transactions: "Activity",
          UnsupportedChain: "Switch Network",
          UpgradeEmailWallet: "Upgrade your Wallet",
          UpdateEmailWallet: "Edit Email",
          UpdateEmailPrimaryOtp: "Confirm Current Email",
          UpdateEmailSecondaryOtp: "Confirm New Email",
          WhatIsABuy: "What is Buy?",
          RegisterAccountName: "Choose name",
          RegisterAccountNameSuccess: "",
          WalletReceive: "Receive",
          WalletCompatibleNetworks: "Compatible Networks",
          Swap: "Swap",
          SwapSelectToken: "Select token",
          SwapPreview: "Preview swap",
          WalletSend: "Send",
          WalletSendPreview: "Review send",
          WalletSendSelectToken: "Select Token",
          WhatIsANetwork: "What is a network?",
          WhatIsAWallet: "What is a wallet?",
          ConnectWallets: "Connect wallet",
          ConnectSocials: "All socials",
          ConnectingSocial: $.U.state.socialProvider
            ? $.U.state.socialProvider
            : "Connect Social",
          ConnectingMultiChain: "Select chain",
          ConnectingFarcaster: "Farcaster",
          SwitchActiveChain: "Switch chain",
          SmartSessionCreated: void 0,
          SmartSessionList: "Smart Sessions",
          SIWXSignMessage: "Sign In",
        };
      }
      let z = class extends i.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.heading = K()[p.I.state.view]),
            (this.network = c.W.state.activeCaipNetwork),
            (this.networkImage = O.$.getNetworkImage(this.network)),
            (this.buffering = !1),
            (this.showBack = !1),
            (this.prevHistoryLength = 1),
            (this.view = p.I.state.view),
            (this.viewDirection = ""),
            (this.headerText = K()[p.I.state.view]),
            this.unsubscribe.push(
              R.j.subscribeNetworkImages(() => {
                this.networkImage = O.$.getNetworkImage(this.network);
              }),
              p.I.subscribeKey("view", (e) => {
                setTimeout(() => {
                  (this.view = e), (this.headerText = K()[e]);
                }, D.o.ANIMATION_DURATIONS.HeaderText),
                  this.onViewChange(),
                  this.onHistoryChange();
              }),
              P.x.subscribeKey("buffering", (e) => (this.buffering = e)),
              c.W.subscribeKey("activeCaipNetwork", (e) => {
                (this.network = e),
                  (this.networkImage = O.$.getNetworkImage(this.network));
              })
            );
        }
        disconnectCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return i.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
        }
        onWalletHelp() {
          j.E.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" }),
            p.I.push("WhatIsAWallet");
        }
        async onClose() {
          "UnsupportedChain" === p.I.state.view ||
          (await h.U.isSIWXCloseDisabled())
            ? l.W.shake()
            : l.W.close();
        }
        rightHeaderTemplate() {
          var e;
          const t =
            null === s.H ||
            void 0 === s.H ||
            null === (e = s.H.state) ||
            void 0 === e ||
            null === (e = e.features) ||
            void 0 === e
              ? void 0
              : e.smartSessions;
          return "Account" === p.I.state.view && t
            ? i.qy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => p.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `
            : this.closeButtonTemplate();
        }
        closeButtonTemplate() {
          return i.qy`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `;
        }
        titleTemplate() {
          const e = U.includes(this.view);
          return i.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e ? i.qy`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
        }
        leftHeaderTemplate() {
          const { view: e } = p.I.state,
            t = "Connect" === e,
            o = s.H.state.enableEmbedded,
            a = "ApproveTransaction" === e,
            n = "ConnectingSiwe" === e,
            l = "Account" === e,
            c = s.H.state.enableNetworkSwitch,
            d = a || n || (t && o);
          var u;
          return l && c
            ? i.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0, r.J)(
          null === (u = this.network) || void 0 === u ? void 0 : u.name
        )}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0, r.J)(this.networkImage)}
      ></wui-select>`
            : this.showBack && !d
            ? i.qy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`
            : i.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
        }
        onNetworks() {
          this.isAllowedNetworkSwitch() &&
            (j.E.sendEvent({ type: "track", event: "CLICK_NETWORKS" }),
            p.I.push("Networks"));
        }
        isAllowedNetworkSwitch() {
          const e = c.W.getAllRequestedCaipNetworks(),
            t = !!e && e.length > 1,
            o =
              null === e || void 0 === e
                ? void 0
                : e.find((e) => {
                    var t;
                    let { id: o } = e;
                    return (
                      o ===
                      (null === (t = this.network) || void 0 === t
                        ? void 0
                        : t.id)
                    );
                  });
          return t || !o;
        }
        getPadding() {
          return this.heading ? ["l", "2l", "l", "2l"] : ["0", "2l", "0", "2l"];
        }
        onViewChange() {
          const { history: e } = p.I.state;
          let t = D.o.VIEW_DIRECTION.Next;
          e.length < this.prevHistoryLength && (t = D.o.VIEW_DIRECTION.Prev),
            (this.prevHistoryLength = e.length),
            (this.viewDirection = t);
        }
        async onHistoryChange() {
          var e;
          const { history: t } = p.I.state,
            o =
              null === (e = this.shadowRoot) || void 0 === e
                ? void 0
                : e.querySelector("#dynamic");
          t.length > 1 && !this.showBack && o
            ? (await o.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }).finished,
              (this.showBack = !0),
              o.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }))
            : t.length <= 1 &&
              this.showBack &&
              o &&
              (await o.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }).finished,
              (this.showBack = !1),
              o.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }));
        }
        onGoBack() {
          p.I.goBack();
        }
      };
      (z.styles = L),
        M([(0, a.wk)()], z.prototype, "heading", void 0),
        M([(0, a.wk)()], z.prototype, "network", void 0),
        M([(0, a.wk)()], z.prototype, "networkImage", void 0),
        M([(0, a.wk)()], z.prototype, "buffering", void 0),
        M([(0, a.wk)()], z.prototype, "showBack", void 0),
        M([(0, a.wk)()], z.prototype, "prevHistoryLength", void 0),
        M([(0, a.wk)()], z.prototype, "view", void 0),
        M([(0, a.wk)()], z.prototype, "viewDirection", void 0),
        M([(0, a.wk)()], z.prototype, "headerText", void 0),
        (z = M([(0, g.EM)("w3m-header")], z));
      o(46062);
      const Y = i.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;
      var Z = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      let F = class extends i.WF {
        constructor() {
          super(...arguments),
            (this.backgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.icon = "checkmark"),
            (this.message = ""),
            (this.loading = !1),
            (this.iconType = "default");
        }
        render() {
          return i.qy`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
        }
        templateIcon() {
          return this.loading
            ? i.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
            : "default" === this.iconType
            ? i.qy`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`
            : i.qy`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`;
        }
      };
      (F.styles = [b.W5, Y]),
        Z([(0, a.MZ)()], F.prototype, "backgroundColor", void 0),
        Z([(0, a.MZ)()], F.prototype, "iconColor", void 0),
        Z([(0, a.MZ)()], F.prototype, "icon", void 0),
        Z([(0, a.MZ)()], F.prototype, "message", void 0),
        Z([(0, a.MZ)()], F.prototype, "loading", void 0),
        Z([(0, a.MZ)()], F.prototype, "iconType", void 0),
        (F = Z([(0, f.E)("wui-snackbar")], F));
      const _ = i.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;
      var X = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      const V = {
        loading: void 0,
        success: {
          backgroundColor: "success-100",
          iconColor: "success-100",
          icon: "checkmark",
        },
        error: {
          backgroundColor: "error-100",
          iconColor: "error-100",
          icon: "close",
        },
      };
      let G = class extends i.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.timeout = void 0),
            (this.open = m.P.state.open),
            this.unsubscribe.push(
              m.P.subscribeKey("open", (e) => {
                (this.open = e), this.onOpen();
              })
            );
        }
        disconnectedCallback() {
          clearTimeout(this.timeout), this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e;
          const { message: t, variant: o, svg: a } = m.P.state,
            r = V[o],
            { icon: n, iconColor: s } =
              null !== (e = null !== a && void 0 !== a ? a : r) && void 0 !== e
                ? e
                : {};
          return i.qy`
      <wui-snackbar
        message=${t}
        backgroundColor=${
          null === r || void 0 === r ? void 0 : r.backgroundColor
        }
        iconColor=${s}
        icon=${n}
        .loading=${"loading" === o}
      ></wui-snackbar>
    `;
        }
        onOpen() {
          clearTimeout(this.timeout),
            this.open
              ? (this.animate(
                  [
                    { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
                    { opacity: 1, transform: "translateX(-50%) scale(1)" },
                  ],
                  { duration: 150, fill: "forwards", easing: "ease" }
                ),
                this.timeout && clearTimeout(this.timeout),
                m.P.state.autoClose &&
                  (this.timeout = setTimeout(() => m.P.hide(), 2500)))
              : this.animate(
                  [
                    { opacity: 1, transform: "translateX(-50%) scale(1)" },
                    { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
                  ],
                  { duration: 150, fill: "forwards", easing: "ease" }
                );
        }
      };
      (G.styles = _),
        X([(0, a.wk)()], G.prototype, "open", void 0),
        (G = X([(0, g.EM)("w3m-snackbar")], G));
      o(57540), o(6319);
      const J = i.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

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

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;
      var Q = function (e, t, o, i) {
        var a,
          r = arguments.length,
          n =
            r < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, o))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, o, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (n = (r < 3 ? a(n) : r > 3 ? a(t, o, n) : a(t, o)) || n);
        return r > 3 && n && Object.defineProperty(t, o, n), n;
      };
      const ee = "scroll-lock";
      let te = class extends i.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.abortController = void 0),
            (this.hasPrefetched = !1),
            (this.enableEmbedded = s.H.state.enableEmbedded),
            (this.open = l.W.state.open),
            (this.caipAddress = c.W.state.activeCaipAddress),
            (this.caipNetwork = c.W.state.activeCaipNetwork),
            (this.shake = l.W.state.shake),
            (this.filterByNamespace = d.a.state.filterByNamespace),
            this.initializeTheming(),
            u.N.prefetchAnalyticsConfig(),
            this.unsubscribe.push(
              l.W.subscribeKey("open", (e) =>
                e ? this.onOpen() : this.onClose()
              ),
              l.W.subscribeKey("shake", (e) => (this.shake = e)),
              c.W.subscribeKey("activeCaipNetwork", (e) =>
                this.onNewNetwork(e)
              ),
              c.W.subscribeKey("activeCaipAddress", (e) =>
                this.onNewAddress(e)
              ),
              s.H.subscribeKey(
                "enableEmbedded",
                (e) => (this.enableEmbedded = e)
              ),
              d.a.subscribeKey("filterByNamespace", (e) => {
                var t;
                this.filterByNamespace === e ||
                  (null !== (t = c.W.getAccountData(e)) &&
                    void 0 !== t &&
                    t.caipAddress) ||
                  (u.N.fetchRecommendedWallets(), (this.filterByNamespace = e));
              })
            );
        }
        firstUpdated() {
          if (this.caipAddress) {
            if (this.enableEmbedded) return l.W.close(), void this.prefetch();
            this.onNewAddress(this.caipAddress);
          }
          this.open && this.onOpen(), this.enableEmbedded && this.prefetch();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
        }
        render() {
          return (
            (this.style.cssText = `\n      --local-border-bottom-mobile-radius: ${
              this.enableEmbedded
                ? "clamp(0px, var(--wui-border-radius-l), 44px)"
                : "0px"
            };\n    `),
            this.enableEmbedded
              ? i.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `
              : this.open
              ? i.qy`
          <wui-flex @click=${this.onOverlayClick.bind(
            this
          )} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
              : null
          );
        }
        contentTemplate() {
          return i.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0, r.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
        }
        async onOverlayClick(e) {
          e.target === e.currentTarget && (await this.handleClose());
        }
        async handleClose() {
          "UnsupportedChain" === p.I.state.view ||
          (await h.U.isSIWXCloseDisabled())
            ? l.W.shake()
            : l.W.close();
        }
        initializeTheming() {
          const { themeVariables: e, themeMode: t } = w.W.state,
            o = g.Zv.getColorTheme(t);
          (0, g.RF)(e, o);
        }
        onClose() {
          (this.open = !1),
            this.classList.remove("open"),
            this.onScrollUnlock(),
            m.P.hide(),
            this.onRemoveKeyboardListener();
        }
        onOpen() {
          (this.open = !0),
            this.classList.add("open"),
            this.onScrollLock(),
            this.onAddKeyboardListener();
        }
        onScrollLock() {
          const e = document.createElement("style");
          (e.dataset.w3m = ee),
            (e.textContent =
              "\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    "),
            document.head.appendChild(e);
        }
        onScrollUnlock() {
          const e = document.head.querySelector(`style[data-w3m="${ee}"]`);
          e && e.remove();
        }
        onAddKeyboardListener() {
          var e;
          this.abortController = new AbortController();
          const t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector("wui-card");
          null === t || void 0 === t || t.focus(),
            window.addEventListener(
              "keydown",
              (e) => {
                if ("Escape" === e.key) this.handleClose();
                else if ("Tab" === e.key) {
                  const { tagName: o } = e.target;
                  !o ||
                    o.includes("W3M-") ||
                    o.includes("WUI-") ||
                    null === t ||
                    void 0 === t ||
                    t.focus();
                }
              },
              this.abortController
            );
        }
        onRemoveKeyboardListener() {
          var e;
          null === (e = this.abortController) || void 0 === e || e.abort(),
            (this.abortController = void 0);
        }
        async onNewAddress(e) {
          const t = c.W.state.isSwitchingNamespace,
            o = v.w.getPlainAddress(e),
            i = t && o;
          !o && !t ? l.W.close() : i && p.I.goBack(),
            await h.U.initializeIfEnabled(),
            (this.caipAddress = e),
            c.W.setIsSwitchingNamespace(!1);
        }
        onNewNetwork(e) {
          var t, o;
          const i = this.caipNetwork,
            a =
              null === i ||
              void 0 === i ||
              null === (t = i.caipNetworkId) ||
              void 0 === t
                ? void 0
                : t.toString(),
            r = null === i || void 0 === i ? void 0 : i.chainNamespace,
            s =
              null === e ||
              void 0 === e ||
              null === (o = e.caipNetworkId) ||
              void 0 === o
                ? void 0
                : o.toString(),
            c = null === e || void 0 === e ? void 0 : e.chainNamespace,
            d = a !== s,
            u = d && !(r !== c),
            h =
              (null === i || void 0 === i ? void 0 : i.name) ===
              n.o.UNSUPPORTED_NETWORK_NAME,
            w = "ConnectingExternal" === p.I.state.view,
            m = !this.caipAddress,
            v = "UnsupportedChain" === p.I.state.view;
          let g = !1;
          l.W.state.open &&
            !w &&
            (m ? d && (g = !0) : (v || (u && !h)) && (g = !0)),
            g && "SIWXSignMessage" !== p.I.state.view && p.I.goBack(),
            (this.caipNetwork = e);
        }
        prefetch() {
          this.hasPrefetched ||
            (u.N.prefetch(),
            u.N.fetchWalletsByPage({ page: 1 }),
            (this.hasPrefetched = !0));
        }
      };
      (te.styles = J),
        Q(
          [(0, a.MZ)({ type: Boolean })],
          te.prototype,
          "enableEmbedded",
          void 0
        ),
        Q([(0, a.wk)()], te.prototype, "open", void 0),
        Q([(0, a.wk)()], te.prototype, "caipAddress", void 0),
        Q([(0, a.wk)()], te.prototype, "caipNetwork", void 0),
        Q([(0, a.wk)()], te.prototype, "shake", void 0),
        Q([(0, a.wk)()], te.prototype, "filterByNamespace", void 0),
        (te = Q([(0, g.EM)("w3m-modal")], te));
    },
  },
]);
