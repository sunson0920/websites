"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [4496],
  {
    74496: (e, t, i) => {
      i.r(t),
        i.d(t, {
          AppKitAccountButton: () => C,
          AppKitButton: () => S,
          AppKitConnectButton: () => P,
          AppKitNetworkButton: () => B,
          W3mAccountButton: () => k,
          W3mAccountSettingsView: () => se,
          W3mAccountView: () => Ve,
          W3mAllWalletsView: () => _t,
          W3mButton: () => T,
          W3mChooseAccountNameView: () => Ao,
          W3mConnectButton: () => j,
          W3mConnectView: () => Bi,
          W3mConnectWalletsView: () => zo,
          W3mConnectingExternalView: () => io,
          W3mConnectingMultiChainView: () => no,
          W3mConnectingWcBasicView: () => Io,
          W3mConnectingWcView: () => Co,
          W3mDownloadsView: () => Wo,
          W3mGetWalletView: () => No,
          W3mNetworkButton: () => _,
          W3mNetworkSwitchView: () => Xo,
          W3mNetworksView: () => aa,
          W3mProfileView: () => et,
          W3mRouter: () => H.J,
          W3mSIWXSignMessageView: () => Aa,
          W3mSwitchActiveChainView: () => la,
          W3mSwitchAddressView: () => rt,
          W3mUnsupportedChainView: () => wa,
          W3mWalletCompatibleNetworksView: () => ya,
          W3mWhatIsANetworkView: () => ua,
          W3mWhatIsAWalletView: () => Do,
        });
      var o = i(21579),
        a = i(4742),
        n = i(71597),
        r = i(63157),
        s = i(80240),
        l = i(458),
        c = i(43136),
        d = i(23871),
        u = i(16733),
        p = i(18933),
        h = i(15694),
        w = (i(32613), i(46062), i(71543), i(76445), i(58961)),
        g = i(52408),
        f = i(15986);
      i(81609), i(64009);
      const b = o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;
      var v = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let m = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.networkSrc = void 0),
            (this.avatarSrc = void 0),
            (this.balance = void 0),
            (this.isUnsupportedChain = void 0),
            (this.disabled = !1),
            (this.loading = !1),
            (this.address = ""),
            (this.profileName = ""),
            (this.charsStart = 4),
            (this.charsEnd = 6);
        }
        render() {
          return o.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0, n.J)(this.balance ? void 0 : "local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${
              this.address
                ? g.Z.getTruncateString({
                    string: this.profileName || this.address,
                    charsStart: this.profileName ? 18 : this.charsStart,
                    charsEnd: this.profileName ? 0 : this.charsEnd,
                    truncate: this.profileName ? "end" : "middle",
                  })
                : null
            }
          </wui-text>
        </wui-flex>
      </button>
    `;
        }
        balanceTemplate() {
          if (this.isUnsupportedChain)
            return o.qy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;
          if (this.balance) {
            const e = this.networkSrc
                ? o.qy`<wui-image src=${this.networkSrc}></wui-image>`
                : o.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,
              t = this.loading
                ? o.qy`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`
                : o.qy`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;
            return o.qy`${e} ${t}`;
          }
          return null;
        }
      };
      (m.styles = [w.W5, w.fD, b]),
        v([(0, a.MZ)()], m.prototype, "networkSrc", void 0),
        v([(0, a.MZ)()], m.prototype, "avatarSrc", void 0),
        v([(0, a.MZ)()], m.prototype, "balance", void 0),
        v(
          [(0, a.MZ)({ type: Boolean })],
          m.prototype,
          "isUnsupportedChain",
          void 0
        ),
        v([(0, a.MZ)({ type: Boolean })], m.prototype, "disabled", void 0),
        v([(0, a.MZ)({ type: Boolean })], m.prototype, "loading", void 0),
        v([(0, a.MZ)()], m.prototype, "address", void 0),
        v([(0, a.MZ)()], m.prototype, "profileName", void 0),
        v([(0, a.MZ)()], m.prototype, "charsStart", void 0),
        v([(0, a.MZ)()], m.prototype, "charsEnd", void 0),
        (m = v([(0, f.E)("wui-account-button")], m));
      var y = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      class x extends o.WF {
        constructor() {
          var e, t, i, o, a, n;
          super(...arguments),
            (this.unsubscribe = []),
            (this.disabled = !1),
            (this.balance = "show"),
            (this.charsStart = 4),
            (this.charsEnd = 6),
            (this.namespace = void 0),
            (this.caipAddress =
              null === (e = r.W.getAccountData(this.namespace)) || void 0 === e
                ? void 0
                : e.caipAddress),
            (this.balanceVal =
              null === (t = r.W.getAccountData(this.namespace)) || void 0 === t
                ? void 0
                : t.balance),
            (this.balanceSymbol =
              null === (i = r.W.getAccountData(this.namespace)) || void 0 === i
                ? void 0
                : i.balanceSymbol),
            (this.profileName =
              null === (o = r.W.getAccountData(this.namespace)) || void 0 === o
                ? void 0
                : o.profileName),
            (this.profileImage =
              null === (a = r.W.getAccountData(this.namespace)) || void 0 === a
                ? void 0
                : a.profileImage),
            (this.network =
              null === (n = r.W.getNetworkData(this.namespace)) || void 0 === n
                ? void 0
                : n.caipNetwork),
            (this.networkImage = s.$.getNetworkImage(this.network)),
            (this.isSupported =
              !!l.H.state.allowUnsupportedChain ||
              !r.W.state.activeChain ||
              r.W.checkIfSupportedNetwork(r.W.state.activeChain));
        }
        firstUpdated() {
          const e = this.namespace;
          e
            ? this.unsubscribe.push(
                r.W.subscribeChainProp(
                  "accountState",
                  (e) => {
                    (this.caipAddress =
                      null === e || void 0 === e ? void 0 : e.caipAddress),
                      (this.balanceVal =
                        null === e || void 0 === e ? void 0 : e.balance),
                      (this.balanceSymbol =
                        null === e || void 0 === e ? void 0 : e.balanceSymbol),
                      (this.profileName =
                        null === e || void 0 === e ? void 0 : e.profileName),
                      (this.profileImage =
                        null === e || void 0 === e ? void 0 : e.profileImage);
                  },
                  e
                ),
                r.W.subscribeChainProp(
                  "networkState",
                  (t) => {
                    (this.network =
                      null === t || void 0 === t ? void 0 : t.caipNetwork),
                      (this.isSupported = r.W.checkIfSupportedNetwork(
                        e,
                        null === t || void 0 === t ? void 0 : t.caipNetwork
                      )),
                      (this.networkImage = s.$.getNetworkImage(
                        null === t || void 0 === t ? void 0 : t.caipNetwork
                      ));
                  },
                  e
                )
              )
            : this.unsubscribe.push(
                c.j.subscribeNetworkImages(() => {
                  this.networkImage = s.$.getNetworkImage(this.network);
                }),
                r.W.subscribeKey("activeCaipAddress", (e) => {
                  this.caipAddress = e;
                }),
                d.U.subscribeKey("balance", (e) => (this.balanceVal = e)),
                d.U.subscribeKey(
                  "balanceSymbol",
                  (e) => (this.balanceSymbol = e)
                ),
                d.U.subscribeKey("profileName", (e) => (this.profileName = e)),
                d.U.subscribeKey(
                  "profileImage",
                  (e) => (this.profileImage = e)
                ),
                r.W.subscribeKey("activeCaipNetwork", (e) => {
                  (this.network = e),
                    (this.networkImage = s.$.getNetworkImage(e)),
                    (this.isSupported =
                      null === e ||
                      void 0 === e ||
                      !e.chainNamespace ||
                      r.W.checkIfSupportedNetwork(
                        null === e || void 0 === e ? void 0 : e.chainNamespace
                      )),
                    this.fetchNetworkImage(e);
                })
              );
        }
        updated() {
          this.fetchNetworkImage(this.network);
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          if (!r.W.state.activeChain) return null;
          const e = "show" === this.balance,
            t = "string" !== typeof this.balanceVal;
          return o.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${
          !l.H.state.allowUnsupportedChain && !this.isSupported
        }
        address=${(0, n.J)(u.w.getPlainAddress(this.caipAddress))}
        profileName=${(0, n.J)(this.profileName)}
        networkSrc=${(0, n.J)(this.networkImage)}
        avatarSrc=${(0, n.J)(this.profileImage)}
        balance=${
          e ? u.w.formatBalance(this.balanceVal, this.balanceSymbol) : ""
        }
        @click=${this.onClick.bind(this)}
        data-testid=${
          "account-button" + (this.namespace ? `-${this.namespace}` : "")
        }
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `;
        }
        async onClick() {
          await r.W.switchActiveNamespace(this.namespace),
            this.isSupported || l.H.state.allowUnsupportedChain
              ? p.W.open()
              : p.W.open({ view: "UnsupportedChain" });
        }
        async fetchNetworkImage(e) {
          var t, i;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.assets) &&
            void 0 !== t &&
            t.imageId &&
            (this.networkImage = await s.$.fetchNetworkImage(
              null === e ||
                void 0 === e ||
                null === (i = e.assets) ||
                void 0 === i
                ? void 0
                : i.imageId
            ));
        }
      }
      y([(0, a.MZ)({ type: Boolean })], x.prototype, "disabled", void 0),
        y([(0, a.MZ)()], x.prototype, "balance", void 0),
        y([(0, a.MZ)()], x.prototype, "charsStart", void 0),
        y([(0, a.MZ)()], x.prototype, "charsEnd", void 0),
        y([(0, a.MZ)()], x.prototype, "namespace", void 0),
        y([(0, a.wk)()], x.prototype, "caipAddress", void 0),
        y([(0, a.wk)()], x.prototype, "balanceVal", void 0),
        y([(0, a.wk)()], x.prototype, "balanceSymbol", void 0),
        y([(0, a.wk)()], x.prototype, "profileName", void 0),
        y([(0, a.wk)()], x.prototype, "profileImage", void 0),
        y([(0, a.wk)()], x.prototype, "network", void 0),
        y([(0, a.wk)()], x.prototype, "networkImage", void 0),
        y([(0, a.wk)()], x.prototype, "isSupported", void 0);
      let k = class extends x {};
      k = y([(0, h.EM)("w3m-account-button")], k);
      let C = class extends x {};
      C = y([(0, h.EM)("appkit-account-button")], C);
      const $ = o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;
      var I = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      class E extends o.WF {
        constructor() {
          super(...arguments),
            (this.unsubscribe = []),
            (this.disabled = !1),
            (this.balance = void 0),
            (this.size = void 0),
            (this.label = void 0),
            (this.loadingLabel = void 0),
            (this.charsStart = 4),
            (this.charsEnd = 6),
            (this.namespace = void 0),
            (this.caipAddress = r.W.state.activeCaipAddress);
        }
        firstUpdated() {
          this.namespace
            ? this.unsubscribe.push(
                r.W.subscribeChainProp(
                  "accountState",
                  (e) => {
                    this.caipAddress =
                      null === e || void 0 === e ? void 0 : e.caipAddress;
                  },
                  this.namespace
                )
              )
            : this.unsubscribe.push(
                r.W.subscribeKey(
                  "activeCaipAddress",
                  (e) => (this.caipAddress = e)
                )
              );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return this.caipAddress
            ? o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0, n.J)(this.balance)}
            .charsStart=${(0, n.J)(this.charsStart)}
            .charsEnd=${(0, n.J)(this.charsEnd)}
            namespace=${(0, n.J)(this.namespace)}
          >
          </appkit-account-button>
        `
            : o.qy`
          <appkit-connect-button
            size=${(0, n.J)(this.size)}
            label=${(0, n.J)(this.label)}
            loadingLabel=${(0, n.J)(this.loadingLabel)}
            namespace=${(0, n.J)(this.namespace)}
          ></appkit-connect-button>
        `;
        }
      }
      (E.styles = $),
        I([(0, a.MZ)({ type: Boolean })], E.prototype, "disabled", void 0),
        I([(0, a.MZ)()], E.prototype, "balance", void 0),
        I([(0, a.MZ)()], E.prototype, "size", void 0),
        I([(0, a.MZ)()], E.prototype, "label", void 0),
        I([(0, a.MZ)()], E.prototype, "loadingLabel", void 0),
        I([(0, a.MZ)()], E.prototype, "charsStart", void 0),
        I([(0, a.MZ)()], E.prototype, "charsEnd", void 0),
        I([(0, a.MZ)()], E.prototype, "namespace", void 0),
        I([(0, a.wk)()], E.prototype, "caipAddress", void 0);
      let T = class extends E {};
      T = I([(0, h.EM)("w3m-button")], T);
      let S = class extends E {};
      S = I([(0, h.EM)("appkit-button")], S);
      const A = o.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;
      var R = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let W = class extends o.WF {
        constructor() {
          super(...arguments), (this.size = "md"), (this.loading = !1);
        }
        render() {
          const e = "md" === this.size ? "paragraph-600" : "small-600";
          return o.qy`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading ? "accent-100" : "inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `;
        }
        loadingTemplate() {
          return this.loading
            ? o.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`
            : null;
        }
      };
      (W.styles = [w.W5, w.fD, A]),
        R([(0, a.MZ)()], W.prototype, "size", void 0),
        R([(0, a.MZ)({ type: Boolean })], W.prototype, "loading", void 0),
        (W = R([(0, f.E)("wui-connect-button")], W));
      var O = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      class N extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.size = "md"),
            (this.label = "Connect Wallet"),
            (this.loadingLabel = "Connecting..."),
            (this.open = p.W.state.open),
            (this.loading = this.namespace
              ? p.W.state.loadingNamespaceMap.get(this.namespace)
              : p.W.state.loading),
            this.unsubscribe.push(
              p.W.subscribe((e) => {
                (this.open = e.open),
                  (this.loading = this.namespace
                    ? e.loadingNamespaceMap.get(this.namespace)
                    : e.loading);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return o.qy`
      <wui-connect-button
        size=${(0, n.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${
          "connect-button" + (this.namespace ? `-${this.namespace}` : "")
        }
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
        }
        onClick() {
          this.open
            ? p.W.close()
            : this.loading ||
              p.W.open({ view: "Connect", namespace: this.namespace });
        }
      }
      O([(0, a.MZ)()], N.prototype, "size", void 0),
        O([(0, a.MZ)()], N.prototype, "label", void 0),
        O([(0, a.MZ)()], N.prototype, "loadingLabel", void 0),
        O([(0, a.MZ)()], N.prototype, "namespace", void 0),
        O([(0, a.wk)()], N.prototype, "open", void 0),
        O([(0, a.wk)()], N.prototype, "loading", void 0);
      let j = class extends N {};
      j = O([(0, h.EM)("w3m-connect-button")], j);
      let P = class extends N {};
      P = O([(0, h.EM)("appkit-connect-button")], P);
      var q = i(37687);
      const M = o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;
      var D = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let U = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.imageSrc = void 0),
            (this.isUnsupportedChain = void 0),
            (this.disabled = !1);
        }
        render() {
          return o.qy`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `;
        }
        visualTemplate() {
          return this.isUnsupportedChain
            ? o.qy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `
            : this.imageSrc
            ? o.qy`<wui-image src=${this.imageSrc}></wui-image>`
            : o.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
        }
      };
      (U.styles = [w.W5, w.fD, M]),
        D([(0, a.MZ)()], U.prototype, "imageSrc", void 0),
        D(
          [(0, a.MZ)({ type: Boolean })],
          U.prototype,
          "isUnsupportedChain",
          void 0
        ),
        D([(0, a.MZ)({ type: Boolean })], U.prototype, "disabled", void 0),
        (U = D([(0, f.E)("wui-network-button")], U));
      const L = o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;
      var z = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      class Z extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.disabled = !1),
            (this.network = r.W.state.activeCaipNetwork),
            (this.networkImage = s.$.getNetworkImage(this.network)),
            (this.caipAddress = r.W.state.activeCaipAddress),
            (this.loading = p.W.state.loading),
            (this.isSupported =
              !!l.H.state.allowUnsupportedChain ||
              !r.W.state.activeChain ||
              r.W.checkIfSupportedNetwork(r.W.state.activeChain)),
            this.unsubscribe.push(
              c.j.subscribeNetworkImages(() => {
                this.networkImage = s.$.getNetworkImage(this.network);
              }),
              r.W.subscribeKey("activeCaipAddress", (e) => {
                this.caipAddress = e;
              }),
              r.W.subscribeKey("activeCaipNetwork", (e) => {
                var t;
                (this.network = e),
                  (this.networkImage = s.$.getNetworkImage(e)),
                  (this.isSupported =
                    null === e ||
                    void 0 === e ||
                    !e.chainNamespace ||
                    r.W.checkIfSupportedNetwork(e.chainNamespace)),
                  s.$.fetchNetworkImage(
                    null === e ||
                      void 0 === e ||
                      null === (t = e.assets) ||
                      void 0 === t
                      ? void 0
                      : t.imageId
                  );
              }),
              p.W.subscribeKey("loading", (e) => (this.loading = e))
            );
        }
        firstUpdated() {
          var e;
          s.$.fetchNetworkImage(
            null === (e = this.network) ||
              void 0 === e ||
              null === (e = e.assets) ||
              void 0 === e
              ? void 0
              : e.imageId
          );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e =
            !this.network ||
            r.W.checkIfSupportedNetwork(this.network.chainNamespace);
          return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled || this.loading)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain && !e}
        imageSrc=${(0, n.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
        }
        getLabel() {
          return this.network
            ? this.isSupported || l.H.state.allowUnsupportedChain
              ? this.network.name
              : "Switch Network"
            : this.label
            ? this.label
            : this.caipAddress
            ? "Unknown Network"
            : "Select Network";
        }
        onClick() {
          this.loading ||
            (q.E.sendEvent({ type: "track", event: "CLICK_NETWORKS" }),
            p.W.open({ view: "Networks" }));
        }
      }
      (Z.styles = L),
        z([(0, a.MZ)({ type: Boolean })], Z.prototype, "disabled", void 0),
        z([(0, a.MZ)({ type: String })], Z.prototype, "label", void 0),
        z([(0, a.wk)()], Z.prototype, "network", void 0),
        z([(0, a.wk)()], Z.prototype, "networkImage", void 0),
        z([(0, a.wk)()], Z.prototype, "caipAddress", void 0),
        z([(0, a.wk)()], Z.prototype, "loading", void 0),
        z([(0, a.wk)()], Z.prototype, "isSupported", void 0);
      let _ = class extends Z {};
      _ = z([(0, h.EM)("w3m-network-button")], _);
      let B = class extends Z {};
      B = z([(0, h.EM)("appkit-network-button")], B);
      var H = i(6319),
        F = i(10719),
        V = i(71898),
        J = i(64066),
        K = i(83454),
        G = i(67415),
        Y = i(73082),
        X = i(21702);
      i(49986), i(43155), i(30858), i(40893), i(58910);
      const Q = o.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;
      var ee = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let te = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.label = ""),
            (this.description = ""),
            (this.icon = "wallet");
        }
        render() {
          return o.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `;
        }
      };
      (te.styles = [w.W5, w.fD, Q]),
        ee([(0, a.MZ)()], te.prototype, "label", void 0),
        ee([(0, a.MZ)()], te.prototype, "description", void 0),
        ee([(0, a.MZ)()], te.prototype, "icon", void 0),
        (te = ee([(0, f.E)("wui-notice-card")], te));
      i(94110);
      var ie = i(45511),
        oe = i(21369),
        ae = function (e, t, i, o) {
          var a,
            n = arguments.length,
            r =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            r = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (a = e[s]) &&
                (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
          return n > 3 && r && Object.defineProperty(t, i, r), r;
        };
      let ne = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.socialProvider = oe.i.getConnectedSocialProvider()),
            (this.socialUsername = oe.i.getConnectedSocialUsername()),
            (this.namespace = r.W.state.activeChain),
            this.unsubscribe.push(
              r.W.subscribeKey("activeChain", (e) => {
                this.namespace = e;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e, t;
          const i = V.a.getConnectorId(this.namespace),
            a = V.a.getAuthConnector();
          if (!a || i !== F.o.CONNECTOR_ID.AUTH)
            return (this.style.cssText = "display: none"), null;
          const n =
            null !== (e = a.provider.getEmail()) && void 0 !== e ? e : "";
          return n || this.socialUsername
            ? o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${null !== (t = this.socialProvider) && void 0 !== t ? t : "mail"}
        iconSize=${this.socialProvider ? "xxl" : "sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
          this.onGoToUpdateEmail(n, this.socialProvider);
        }}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(
          n
        )}</wui-text>
      </wui-list-item>
    `
            : ((this.style.cssText = "display: none"), null);
        }
        onGoToUpdateEmail(e, t) {
          t ||
            G.I.push("UpdateEmailWallet", {
              email: e,
              redirectView: "Account",
            });
        }
        getAuthName(e) {
          return this.socialUsername
            ? "discord" === this.socialProvider &&
              this.socialUsername.endsWith("0")
              ? this.socialUsername.slice(0, -1)
              : this.socialUsername
            : e.length > 30
            ? `${e.slice(0, -3)}...`
            : e;
        }
      };
      ae([(0, a.wk)()], ne.prototype, "namespace", void 0),
        (ne = ae([(0, h.EM)("w3m-account-auth-button")], ne));
      var re = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let se = class extends o.WF {
        constructor() {
          super(),
            (this.usubscribe = []),
            (this.networkImages = c.j.state.networkImages),
            (this.address = d.U.state.address),
            (this.profileImage = d.U.state.profileImage),
            (this.profileName = d.U.state.profileName),
            (this.network = r.W.state.activeCaipNetwork),
            (this.preferredAccountTypes = d.U.state.preferredAccountTypes),
            (this.disconnecting = !1),
            (this.loading = !1),
            (this.switched = !1),
            (this.text = ""),
            this.usubscribe.push(
              d.U.subscribe((e) => {
                e.address
                  ? ((this.address = e.address),
                    (this.profileImage = e.profileImage),
                    (this.profileName = e.profileName),
                    (this.preferredAccountTypes = e.preferredAccountTypes))
                  : p.W.close();
              }),
              d.U.subscribeKey(
                "preferredAccountTypes",
                (e) => (this.preferredAccountTypes = e)
              ),
              r.W.subscribeKey("activeCaipNetwork", (e) => {
                null !== e && void 0 !== e && e.id && (this.network = e);
              })
            );
        }
        disconnectedCallback() {
          this.usubscribe.forEach((e) => e());
        }
        render() {
          var e, t, i, a;
          if (!this.address)
            throw new Error("w3m-account-settings-view: No account provided");
          const r =
            this.networkImages[
              null !==
                (e =
                  null === (t = this.network) ||
                  void 0 === t ||
                  null === (t = t.assets) ||
                  void 0 === t
                    ? void 0
                    : t.imageId) && void 0 !== e
                ? e
                : ""
            ];
          return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0", "xl", "m", "xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0, n.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Zv.getTruncateString({
                string: this.address,
                charsStart: 4,
                charsEnd: 6,
                truncate: "middle",
              })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${[
          "0",
          "l",
          "m",
          "l",
        ]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${r ? "image" : "icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0, n.J)(r)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${
                null !==
                  (i =
                    null === (a = this.network) || void 0 === a
                      ? void 0
                      : a.name) && void 0 !== i
                  ? i
                  : "Unknown"
              }
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
        }
        chooseNameButtonTemplate() {
          var e;
          const t =
              null === (e = this.network) || void 0 === e
                ? void 0
                : e.chainNamespace,
            i = V.a.getConnectorId(t),
            a = V.a.getAuthConnector();
          return r.W.checkIfNamesSupported() &&
            a &&
            i === F.o.CONNECTOR_ID.AUTH &&
            !this.profileName
            ? o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `
            : null;
        }
        authCardTemplate() {
          var e;
          const t =
              null === (e = this.network) || void 0 === e
                ? void 0
                : e.chainNamespace,
            i = V.a.getConnectorId(t),
            a = V.a.getAuthConnector(),
            { origin: n } = location;
          return !a ||
            i !== F.o.CONNECTOR_ID.AUTH ||
            n.includes(J.oU.SECURE_SITE)
            ? null
            : o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
        }
        isAllowedNetworkSwitch() {
          const e = r.W.getAllRequestedCaipNetworks(),
            t = !!e && e.length > 1,
            i =
              null === e || void 0 === e
                ? void 0
                : e.find((e) => {
                    var t;
                    let { id: i } = e;
                    return (
                      i ===
                      (null === (t = this.network) || void 0 === t
                        ? void 0
                        : t.id)
                    );
                  });
          return t || !i;
        }
        onCopyAddress() {
          try {
            this.address &&
              (u.w.copyToClopboard(this.address),
              K.P.showSuccess("Address copied"));
          } catch {
            K.P.showError("Failed to copy");
          }
        }
        togglePreferredAccountBtnTemplate() {
          var e;
          const t =
              null === (e = this.network) || void 0 === e
                ? void 0
                : e.chainNamespace,
            i = r.W.checkIfSmartAccountEnabled(),
            a = V.a.getConnectorId(t);
          if (!V.a.getAuthConnector() || a !== F.o.CONNECTOR_ID.AUTH || !i)
            return null;
          var n;
          this.switched ||
            (this.text =
              (null === (n = this.preferredAccountTypes) || void 0 === n
                ? void 0
                : n[t]) === ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                ? "Switch to your EOA"
                : "Switch to your smart account");
          return o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `;
        }
        onChooseName() {
          G.I.push("ChooseAccountName");
        }
        async changePreferredAccountType() {
          var e, t;
          const i =
              null === (e = this.network) || void 0 === e
                ? void 0
                : e.chainNamespace,
            o = r.W.checkIfSmartAccountEnabled(),
            a =
              (null === (t = this.preferredAccountTypes) || void 0 === t
                ? void 0
                : t[i]) !== ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT && o
                ? ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                : ie.Vl.ACCOUNT_TYPES.EOA;
          V.a.getAuthConnector() &&
            ((this.loading = !0),
            await Y.x.setPreferredAccountType(a, i),
            (this.text =
              a === ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
                ? "Switch to your EOA"
                : "Switch to your smart account"),
            (this.switched = !0),
            X.R.resetSend(),
            (this.loading = !1),
            this.requestUpdate());
        }
        onNetworks() {
          this.isAllowedNetworkSwitch() && G.I.push("Networks");
        }
        async onDisconnect() {
          try {
            (this.disconnecting = !0), await Y.x.disconnect(), p.W.close();
          } catch {
            q.E.sendEvent({ type: "track", event: "DISCONNECT_ERROR" }),
              K.P.showError("Failed to disconnect");
          } finally {
            this.disconnecting = !1;
          }
        }
        onGoToUpgradeView() {
          q.E.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" }),
            G.I.push("UpgradeEmailWallet");
        }
      };
      re([(0, a.wk)()], se.prototype, "address", void 0),
        re([(0, a.wk)()], se.prototype, "profileImage", void 0),
        re([(0, a.wk)()], se.prototype, "profileName", void 0),
        re([(0, a.wk)()], se.prototype, "network", void 0),
        re([(0, a.wk)()], se.prototype, "preferredAccountTypes", void 0),
        re([(0, a.wk)()], se.prototype, "disconnecting", void 0),
        re([(0, a.wk)()], se.prototype, "loading", void 0),
        re([(0, a.wk)()], se.prototype, "switched", void 0),
        re([(0, a.wk)()], se.prototype, "text", void 0),
        (se = re([(0, h.EM)("w3m-account-settings-view")], se));
      i(61769), i(38696);
      const le = o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;
      var ce = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let de = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.avatarSrc = void 0),
            (this.profileName = ""),
            (this.address = ""),
            (this.icon = "mail");
        }
        render() {
          const e = r.W.state.activeChain,
            t = V.a.getConnectorId(e) === F.o.CONNECTOR_ID.AUTH;
          return o.qy`<button data-testid="wui-profile-button" @click=${
            this.handleClick
          }>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${t ? this.getIconTemplate(this.icon) : ""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({
              string: this.profileName || this.address,
              charsStart: this.profileName ? 18 : 4,
              charsEnd: this.profileName ? 0 : 4,
              truncate: this.profileName ? "end" : "middle",
            })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`;
        }
        handleClick(e) {
          var t, i;
          e.target instanceof HTMLElement && "copy-address" === e.target.id
            ? null === (i = this.onCopyClick) || void 0 === i || i.call(this, e)
            : null === (t = this.onProfileClick) ||
              void 0 === t ||
              t.call(this, e);
        }
        getIconTemplate(e) {
          return o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e || "networkPlaceholder"}"
      ></wui-icon-box>
    `;
        }
      };
      (de.styles = [w.W5, w.fD, le]),
        ce([(0, a.MZ)()], de.prototype, "avatarSrc", void 0),
        ce([(0, a.MZ)()], de.prototype, "profileName", void 0),
        ce([(0, a.MZ)()], de.prototype, "address", void 0),
        ce([(0, a.MZ)()], de.prototype, "icon", void 0),
        ce([(0, a.MZ)()], de.prototype, "onProfileClick", void 0),
        ce([(0, a.MZ)()], de.prototype, "onCopyClick", void 0),
        (de = ce([(0, f.E)("wui-profile-button-v2")], de));
      const ue = o.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;
      var pe = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let he = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.tabs = []),
            (this.onTabChange = () => null),
            (this.buttons = []),
            (this.disabled = !1),
            (this.localTabWidth = "100px"),
            (this.activeTab = 0),
            (this.isDense = !1);
        }
        render() {
          return (
            (this.isDense = this.tabs.length > 3),
            (this.style.cssText = `\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `),
            (this.dataset.type = this.isDense ? "flex" : "block"),
            this.tabs.map((e, t) => {
              var i;
              const a = t === this.activeTab;
              return o.qy`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(t)}
          data-active=${a}
          data-testid="tab-${
            null === (i = e.label) || void 0 === i ? void 0 : i.toLowerCase()
          }"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `;
            })
          );
        }
        firstUpdated() {
          this.shadowRoot &&
            this.isDense &&
            ((this.buttons = [...this.shadowRoot.querySelectorAll("button")]),
            setTimeout(() => {
              this.animateTabs(0, !0);
            }, 0));
        }
        iconTemplate(e) {
          return e.icon
            ? o.qy`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`
            : null;
        }
        onTabClick(e) {
          this.buttons && this.animateTabs(e, !1),
            (this.activeTab = e),
            this.onTabChange(e);
        }
        animateTabs(e, t) {
          const i = this.buttons[this.activeTab],
            o = this.buttons[e],
            a =
              null === i || void 0 === i ? void 0 : i.querySelector("wui-text"),
            n =
              null === o || void 0 === o ? void 0 : o.querySelector("wui-text"),
            r = null === o || void 0 === o ? void 0 : o.getBoundingClientRect(),
            s = null === n || void 0 === n ? void 0 : n.getBoundingClientRect();
          i &&
            a &&
            !t &&
            e !== this.activeTab &&
            (a.animate([{ opacity: 0 }], {
              duration: 50,
              easing: "ease",
              fill: "forwards",
            }),
            i.animate([{ width: "34px" }], {
              duration: 500,
              easing: "ease",
              fill: "forwards",
            })),
            o &&
              r &&
              s &&
              n &&
              (e !== this.activeTab || t) &&
              ((this.localTabWidth = `${Math.round(r.width + s.width) + 6}px`),
              o.animate([{ width: `${r.width + s.width}px` }], {
                duration: t ? 0 : 500,
                fill: "forwards",
                easing: "ease",
              }),
              n.animate([{ opacity: 1 }], {
                duration: t ? 0 : 125,
                delay: t ? 0 : 200,
                fill: "forwards",
                easing: "ease",
              }));
        }
      };
      (he.styles = [w.W5, w.fD, ue]),
        pe([(0, a.MZ)({ type: Array })], he.prototype, "tabs", void 0),
        pe([(0, a.MZ)()], he.prototype, "onTabChange", void 0),
        pe([(0, a.MZ)({ type: Array })], he.prototype, "buttons", void 0),
        pe([(0, a.MZ)({ type: Boolean })], he.prototype, "disabled", void 0),
        pe([(0, a.MZ)()], he.prototype, "localTabWidth", void 0),
        pe([(0, a.wk)()], he.prototype, "activeTab", void 0),
        pe([(0, a.wk)()], he.prototype, "isDense", void 0),
        (he = pe([(0, f.E)("wui-tabs")], he));
      i(64345);
      const we = o.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;
      var ge = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let fe = class extends o.WF {
        constructor() {
          var e;
          super(),
            (this.unsubscribe = []),
            (this.caipAddress = d.U.state.caipAddress),
            (this.address = u.w.getPlainAddress(d.U.state.caipAddress)),
            (this.allAccounts = d.U.state.allAccounts),
            (this.profileImage = d.U.state.profileImage),
            (this.profileName = d.U.state.profileName),
            (this.disconnecting = !1),
            (this.balance = d.U.state.balance),
            (this.balanceSymbol = d.U.state.balanceSymbol),
            (this.features = l.H.state.features),
            (this.namespace = r.W.state.activeChain),
            (this.chainId =
              null === (e = r.W.state.activeCaipNetwork) || void 0 === e
                ? void 0
                : e.id),
            this.unsubscribe.push(
              d.U.subscribeKey("caipAddress", (e) => {
                (this.address = u.w.getPlainAddress(e)), (this.caipAddress = e);
              }),
              d.U.subscribeKey("balance", (e) => (this.balance = e)),
              d.U.subscribeKey(
                "balanceSymbol",
                (e) => (this.balanceSymbol = e)
              ),
              d.U.subscribeKey("profileName", (e) => (this.profileName = e)),
              d.U.subscribeKey("profileImage", (e) => (this.profileImage = e)),
              l.H.subscribeKey("features", (e) => (this.features = e)),
              d.U.subscribeKey("allAccounts", (e) => {
                this.allAccounts = e;
              }),
              r.W.subscribeKey("activeChain", (e) => (this.namespace = e)),
              r.W.subscribeKey("activeCaipNetwork", (e) => {
                if (e) {
                  var t;
                  const [i, o] =
                    (null === e ||
                    void 0 === e ||
                    null === (t = e.caipNetworkId) ||
                    void 0 === t
                      ? void 0
                      : t.split(":")) || [];
                  i && o && ((this.namespace = i), (this.chainId = o));
                }
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          if (!this.caipAddress) return null;
          const e =
            r.W.state.activeChain !== F.o.CHAIN.SOLANA &&
            this.allAccounts.length > 1;
          return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0", "xl", "m", "xl"]}
        alignItems="center"
        gap="l"
      >
        ${e ? this.multiAccountTemplate() : this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${u.w.formatBalance(this.balance, this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${[
        "0",
        "s",
        "s",
        "s",
      ]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
        }
        onrampTemplate() {
          var e;
          if (!this.namespace) return null;
          const t =
              null === (e = this.features) || void 0 === e ? void 0 : e.onramp,
            i = J.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);
          return t && i
            ? o.qy`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `
            : null;
        }
        orderedFeaturesTemplate() {
          var e;
          return (
            (null === (e = this.features) || void 0 === e
              ? void 0
              : e.walletFeaturesOrder) ||
            J.oU.DEFAULT_FEATURES.walletFeaturesOrder
          ).map((e) => {
            switch (e) {
              case "onramp":
                return this.onrampTemplate();
              case "swaps":
                return this.swapsTemplate();
              case "send":
                return this.sendTemplate();
              default:
                return null;
            }
          });
        }
        activityTemplate() {
          var e;
          if (!this.namespace) return null;
          return (null === (e = this.features) || void 0 === e
            ? void 0
            : e.history) &&
            J.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)
            ? o.qy` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`
            : null;
        }
        swapsTemplate() {
          var e;
          const t =
              null === (e = this.features) || void 0 === e ? void 0 : e.swaps,
            i = r.W.state.activeChain === F.o.CHAIN.EVM;
          return t && i
            ? o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `
            : null;
        }
        sendTemplate() {
          var e;
          const t =
              null === (e = this.features) || void 0 === e ? void 0 : e.send,
            i = r.W.state.activeChain === F.o.CHAIN.EVM;
          return t && i
            ? o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `
            : null;
        }
        authCardTemplate() {
          const e = r.W.state.activeChain,
            t = V.a.getConnectorId(e),
            i = V.a.getAuthConnector(),
            { origin: a } = location;
          return !i ||
            t !== F.o.CONNECTOR_ID.AUTH ||
            a.includes(J.oU.SECURE_SITE)
            ? null
            : o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
        }
        handleSwitchAccountsView() {
          G.I.push("SwitchAddress");
        }
        handleClickPay() {
          G.I.push("OnRampProviders");
        }
        handleClickSwap() {
          G.I.push("Swap");
        }
        handleClickSend() {
          G.I.push("WalletSend");
        }
        explorerBtnTemplate() {
          return d.U.state.addressExplorerUrl
            ? o.qy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(
        this
      )}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `
            : null;
        }
        singleAccountTemplate() {
          return o.qy`
      <wui-avatar
        alt=${(0, n.J)(this.caipAddress)}
        address=${(0, n.J)(u.w.getPlainAddress(this.caipAddress))}
        imageSrc=${(0, n.J)(
          null === this.profileImage ? void 0 : this.profileImage
        )}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${
              this.profileName
                ? h.Zv.getTruncateString({
                    string: this.profileName,
                    charsStart: 20,
                    charsEnd: 0,
                    truncate: "end",
                  })
                : h.Zv.getTruncateString({
                    string: this.address || "",
                    charsStart: 4,
                    charsEnd: 4,
                    truncate: "middle",
                  })
            }
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `;
        }
        multiAccountTemplate() {
          if (!this.address)
            throw new Error("w3m-account-view: No account provided");
          const e = this.allAccounts.find((e) => e.address === this.address),
            t = d.U.state.addressLabels.get(this.address);
          return "bip122" === this.namespace
            ? this.btcAccountsTemplate()
            : o.qy`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0, n.J)(this.address)}
        icon="${
          (null === e || void 0 === e ? void 0 : e.type) ===
            ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT &&
          r.W.state.activeChain === F.o.CHAIN.EVM
            ? "lightbulb"
            : "mail"
        }"
        avatarSrc=${(0, n.J)(this.profileImage ? this.profileImage : void 0)}
        profileName=${(0, n.J)(t || this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `;
        }
        btcAccountsTemplate() {
          return o.qy`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0, n.J)(this.profileImage ? this.profileImage : void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{ label: "Payment" }, { label: "Ordinals" }]}
        .onTabChange=${(e) => {
          var t;
          return d.U.setCaipAddress(
            `bip122:${this.chainId}:${
              (null === (t = this.allAccounts[e]) || void 0 === t
                ? void 0
                : t.address) || ""
            }`,
            this.namespace
          );
        }}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${h.Zv.getTruncateString({
            string: this.profileName || this.address || "",
            charsStart: this.profileName ? 18 : 4,
            charsEnd: this.profileName ? 0 : 4,
            truncate: this.profileName ? "end" : "middle",
          })}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`;
        }
        onCopyAddress() {
          try {
            this.address &&
              (u.w.copyToClopboard(this.address),
              K.P.showSuccess("Address copied"));
          } catch {
            K.P.showError("Failed to copy");
          }
        }
        onTransactions() {
          var e;
          const t = r.W.state.activeChain;
          q.E.sendEvent({
            type: "track",
            event: "CLICK_TRANSACTIONS",
            properties: {
              isSmartAccount:
                (null === (e = d.U.state.preferredAccountTypes) || void 0 === e
                  ? void 0
                  : e[t]) === ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            G.I.push("Transactions");
        }
        async onDisconnect() {
          try {
            (this.disconnecting = !0), await Y.x.disconnect(), p.W.close();
          } catch {
            q.E.sendEvent({ type: "track", event: "DISCONNECT_ERROR" }),
              K.P.showError("Failed to disconnect");
          } finally {
            this.disconnecting = !1;
          }
        }
        onExplorer() {
          const e = d.U.state.addressExplorerUrl;
          e && u.w.openHref(e, "_blank");
        }
        onGoToUpgradeView() {
          q.E.sendEvent({ type: "track", event: "EMAIL_UPGRADE_FROM_MODAL" }),
            G.I.push("UpgradeEmailWallet");
        }
      };
      (fe.styles = we),
        ge([(0, a.wk)()], fe.prototype, "caipAddress", void 0),
        ge([(0, a.wk)()], fe.prototype, "address", void 0),
        ge([(0, a.wk)()], fe.prototype, "allAccounts", void 0),
        ge([(0, a.wk)()], fe.prototype, "profileImage", void 0),
        ge([(0, a.wk)()], fe.prototype, "profileName", void 0),
        ge([(0, a.wk)()], fe.prototype, "disconnecting", void 0),
        ge([(0, a.wk)()], fe.prototype, "balance", void 0),
        ge([(0, a.wk)()], fe.prototype, "balanceSymbol", void 0),
        ge([(0, a.wk)()], fe.prototype, "features", void 0),
        ge([(0, a.wk)()], fe.prototype, "namespace", void 0),
        ge([(0, a.wk)()], fe.prototype, "chainId", void 0),
        (fe = ge([(0, h.EM)("w3m-account-default-widget")], fe));
      const be = o.AH`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;
      var ve = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let me = class extends o.WF {
        constructor() {
          super(...arguments), (this.dollars = "0"), (this.pennies = "00");
        }
        render() {
          return o.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`;
        }
      };
      (me.styles = [w.W5, be]),
        ve([(0, a.MZ)()], me.prototype, "dollars", void 0),
        ve([(0, a.MZ)()], me.prototype, "pennies", void 0),
        (me = ve([(0, f.E)("wui-balance")], me));
      const ye = o.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;
      var xe = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ke = class extends o.WF {
        constructor() {
          super(...arguments), (this.text = ""), (this.icon = "card");
        }
        render() {
          return o.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`;
        }
      };
      (ke.styles = [w.W5, w.fD, ye]),
        xe([(0, a.MZ)()], ke.prototype, "text", void 0),
        xe([(0, a.MZ)()], ke.prototype, "icon", void 0),
        (ke = xe([(0, f.E)("wui-icon-button")], ke));
      const Ce = o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;
      var $e = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ie = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.networkSrc = void 0),
            (this.avatarSrc = void 0),
            (this.profileName = ""),
            (this.address = ""),
            (this.icon = "chevronBottom");
        }
        render() {
          return o.qy`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({
              string: this.profileName || this.address,
              charsStart: this.profileName ? 18 : 4,
              charsEnd: this.profileName ? 0 : 4,
              truncate: this.profileName ? "end" : "middle",
            })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`;
        }
        networkImageTemplate() {
          return this.networkSrc
            ? o.qy`<wui-image src=${this.networkSrc}></wui-image>`
            : o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
        }
      };
      (Ie.styles = [w.W5, w.fD, Ce]),
        $e([(0, a.MZ)()], Ie.prototype, "networkSrc", void 0),
        $e([(0, a.MZ)()], Ie.prototype, "avatarSrc", void 0),
        $e([(0, a.MZ)()], Ie.prototype, "profileName", void 0),
        $e([(0, a.MZ)()], Ie.prototype, "address", void 0),
        $e([(0, a.MZ)()], Ie.prototype, "icon", void 0),
        (Ie = $e([(0, f.E)("wui-profile-button")], Ie));
      const Ee = o.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;
      var Te = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Se = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.placement = "top"),
            (this.variant = "fill"),
            (this.message = "");
        }
        render() {
          return (
            (this.dataset.variant = this.variant),
            o.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill" === this.variant ? "cursor" : "cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`
          );
        }
      };
      (Se.styles = [w.W5, w.fD, Ee]),
        Te([(0, a.MZ)()], Se.prototype, "placement", void 0),
        Te([(0, a.MZ)()], Se.prototype, "variant", void 0),
        Te([(0, a.MZ)()], Se.prototype, "message", void 0),
        (Se = Te([(0, f.E)("wui-tooltip")], Se));
      var Ae = i(2195);
      const Re = {
        getTabsByNamespace: (e) =>
          Boolean(e) && e === F.o.CHAIN.EVM ? Ae.o.ACCOUNT_TABS : [],
      };
      i(43835);
      const We = o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;
      var Oe = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ne = class extends o.WF {
        render() {
          return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`;
        }
      };
      (Ne.styles = We),
        (Ne = Oe([(0, h.EM)("w3m-account-activity-widget")], Ne));
      i(83908), i(52770);
      const je = o.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;
      var Pe = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let qe = class extends o.WF {
        render() {
          return o.qy`${this.nftTemplate()}`;
        }
        nftTemplate() {
          return o.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(
        this
      )} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`;
        }
        onReceiveClick() {
          G.I.push("WalletReceive");
        }
      };
      (qe.styles = je), (qe = Pe([(0, h.EM)("w3m-account-nfts-widget")], qe));
      i(48446);
      const Me = o.AH`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;
      var De = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ue = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.icon = "card"),
            (this.text = ""),
            (this.description = ""),
            (this.tag = void 0),
            (this.iconBackgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.disabled = !1);
        }
        render() {
          return o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${
            this.description
          }</wui-text></wui-flex
        >
      </button>
    `;
        }
        titleTemplate() {
          return this.tag
            ? o.qy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`
            : o.qy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`;
        }
      };
      (Ue.styles = [w.W5, w.fD, Me]),
        De([(0, a.MZ)()], Ue.prototype, "icon", void 0),
        De([(0, a.MZ)()], Ue.prototype, "text", void 0),
        De([(0, a.MZ)()], Ue.prototype, "description", void 0),
        De([(0, a.MZ)()], Ue.prototype, "tag", void 0),
        De([(0, a.MZ)()], Ue.prototype, "iconBackgroundColor", void 0),
        De([(0, a.MZ)()], Ue.prototype, "iconColor", void 0),
        De([(0, a.MZ)({ type: Boolean })], Ue.prototype, "disabled", void 0),
        (Ue = De([(0, f.E)("wui-list-description")], Ue));
      i(92358);
      const Le = o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;
      var ze = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ze = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tokenBalance = d.U.state.tokenBalance),
            this.unsubscribe.push(
              d.U.subscribe((e) => {
                this.tokenBalance = e.tokenBalance;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return o.qy`${this.tokenTemplate()}`;
        }
        tokenTemplate() {
          var e;
          return this.tokenBalance &&
            (null === (e = this.tokenBalance) || void 0 === e
              ? void 0
              : e.length) > 0
            ? o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`
            : o.qy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`;
        }
        tokenItemTemplate() {
          var e;
          return null === (e = this.tokenBalance) || void 0 === e
            ? void 0
            : e.map(
                (e) => o.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`
              );
        }
        onReceiveClick() {
          G.I.push("WalletReceive");
        }
        onBuyClick() {
          var e;
          const t = r.W.state.activeChain;
          q.E.sendEvent({
            type: "track",
            event: "SELECT_BUY_CRYPTO",
            properties: {
              isSmartAccount:
                (null === (e = d.U.state.preferredAccountTypes) || void 0 === e
                  ? void 0
                  : e[t]) === ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            G.I.push("OnRampProviders");
        }
      };
      (Ze.styles = Le),
        ze([(0, a.wk)()], Ze.prototype, "tokenBalance", void 0),
        (Ze = ze([(0, h.EM)("w3m-account-tokens-widget")], Ze));
      i(75595), i(57540);
      const _e = o.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;
      var Be = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let He = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.address = d.U.state.address),
            (this.profileImage = d.U.state.profileImage),
            (this.profileName = d.U.state.profileName),
            (this.network = r.W.state.activeCaipNetwork),
            (this.currentTab = d.U.state.currentTab),
            (this.tokenBalance = d.U.state.tokenBalance),
            (this.features = l.H.state.features),
            (this.networkImage = s.$.getNetworkImage(this.network)),
            this.unsubscribe.push(
              c.j.subscribeNetworkImages(() => {
                this.networkImage = s.$.getNetworkImage(this.network);
              }),
              d.U.subscribe((e) => {
                e.address
                  ? ((this.address = e.address),
                    (this.profileImage = e.profileImage),
                    (this.profileName = e.profileName),
                    (this.currentTab = e.currentTab),
                    (this.tokenBalance = e.tokenBalance))
                  : p.W.close();
              }),
              r.W.subscribeKey("activeCaipNetwork", (e) => (this.network = e)),
              l.H.subscribeKey("features", (e) => (this.features = e))
            ),
            this.watchSwapValues();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()),
            clearInterval(this.watchTokenBalance);
        }
        firstUpdated() {
          d.U.fetchTokenBalance();
        }
        render() {
          var e;
          if (!this.address)
            throw new Error("w3m-account-view: No account provided");
          return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0", "xl", "m", "xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0, n.J)(this.address)}
        networkSrc=${(0, n.J)(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${(0, n.J)(this.profileImage ? this.profileImage : void 0)}
        profileName=${(0, n.J)(
          null !== (e = this.profileName) && void 0 !== e ? e : void 0
        )}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`;
        }
        orderedWalletFeatures() {
          var e;
          const t =
            (null === (e = this.features) || void 0 === e
              ? void 0
              : e.walletFeaturesOrder) ||
            J.oU.DEFAULT_FEATURES.walletFeaturesOrder;
          return t.every((e) => {
            var t;
            return !(null !== (t = this.features) && void 0 !== t && t[e]);
          })
            ? null
            : o.qy`<wui-flex gap="s">
      ${t.map((e) => {
        switch (e) {
          case "onramp":
            return this.onrampTemplate();
          case "swaps":
            return this.swapsTemplate();
          case "receive":
            return this.receiveTemplate();
          case "send":
            return this.sendTemplate();
          default:
            return null;
        }
      })}
    </wui-flex>`;
        }
        onrampTemplate() {
          var e;
          return (
            null === (e = this.features) || void 0 === e ? void 0 : e.onramp
          )
            ? o.qy`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `
            : null;
        }
        swapsTemplate() {
          var e;
          const t =
              null === (e = this.features) || void 0 === e ? void 0 : e.swaps,
            i = r.W.state.activeChain === F.o.CHAIN.EVM;
          return t && i
            ? o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `
            : null;
        }
        receiveTemplate() {
          var e;
          return (
            null === (e = this.features) || void 0 === e ? void 0 : e.receive
          )
            ? o.qy`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `
            : null;
        }
        sendTemplate() {
          var e;
          const t =
              null === (e = this.features) || void 0 === e ? void 0 : e.send,
            i = r.W.state.activeChain === F.o.CHAIN.EVM;
          return t && i
            ? o.qy`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `
            : null;
        }
        watchSwapValues() {
          this.watchTokenBalance = setInterval(
            () => d.U.fetchTokenBalance((e) => this.onTokenBalanceError(e)),
            1e4
          );
        }
        onTokenBalanceError(e) {
          if (e instanceof Error && e.cause instanceof Response) {
            e.cause.status === F.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE &&
              clearInterval(this.watchTokenBalance);
          }
        }
        listContentTemplate() {
          return 0 === this.currentTab
            ? o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`
            : 1 === this.currentTab
            ? o.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`
            : 2 === this.currentTab
            ? o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`
            : o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
        }
        tokenBalanceTemplate() {
          var e;
          if (
            this.tokenBalance &&
            (null === (e = this.tokenBalance) || void 0 === e
              ? void 0
              : e.length) >= 0
          ) {
            const e = u.w.calculateBalance(this.tokenBalance),
              { dollars: t = "0", pennies: i = "00" } =
                u.w.formatTokenBalance(e);
            return o.qy`<wui-balance dollars=${t} pennies=${i}></wui-balance>`;
          }
          return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`;
        }
        tabsTemplate() {
          const e = Re.getTabsByNamespace(r.W.state.activeChain);
          return 0 === e.length
            ? null
            : o.qy`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${
        u.w.isMobile() && window.innerWidth < 430
          ? (window.innerWidth - 48) / 3 + "px"
          : "104px"
      }
      .tabs=${e}
    ></wui-tabs>`;
        }
        onTabChange(e) {
          d.U.setCurrentTab(e);
        }
        onProfileButtonClick() {
          const { allAccounts: e } = d.U.state;
          e.length > 1 ? G.I.push("Profile") : G.I.push("AccountSettings");
        }
        onBuyClick() {
          G.I.push("OnRampProviders");
        }
        onSwapClick() {
          var e, t;
          const i = r.W.state.activeChain;
          var o, a;
          null !== (e = this.network) &&
          void 0 !== e &&
          e.caipNetworkId &&
          !J.oU.SWAP_SUPPORTED_NETWORKS.includes(
            null === (t = this.network) || void 0 === t
              ? void 0
              : t.caipNetworkId
          )
            ? G.I.push("UnsupportedChain", { swapUnsupportedChain: !0 })
            : (q.E.sendEvent({
                type: "track",
                event: "OPEN_SWAP",
                properties: {
                  network:
                    (null === (o = this.network) || void 0 === o
                      ? void 0
                      : o.caipNetworkId) || "",
                  isSmartAccount:
                    (null === (a = d.U.state.preferredAccountTypes) ||
                    void 0 === a
                      ? void 0
                      : a[i]) === ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
                },
              }),
              G.I.push("Swap"));
        }
        onReceiveClick() {
          G.I.push("WalletReceive");
        }
        onSendClick() {
          var e, t;
          const i = r.W.state.activeChain;
          q.E.sendEvent({
            type: "track",
            event: "OPEN_SEND",
            properties: {
              network:
                (null === (e = this.network) || void 0 === e
                  ? void 0
                  : e.caipNetworkId) || "",
              isSmartAccount:
                (null === (t = d.U.state.preferredAccountTypes) || void 0 === t
                  ? void 0
                  : t[i]) === ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            G.I.push("WalletSend");
        }
      };
      (He.styles = _e),
        Be([(0, a.wk)()], He.prototype, "watchTokenBalance", void 0),
        Be([(0, a.wk)()], He.prototype, "address", void 0),
        Be([(0, a.wk)()], He.prototype, "profileImage", void 0),
        Be([(0, a.wk)()], He.prototype, "profileName", void 0),
        Be([(0, a.wk)()], He.prototype, "network", void 0),
        Be([(0, a.wk)()], He.prototype, "currentTab", void 0),
        Be([(0, a.wk)()], He.prototype, "tokenBalance", void 0),
        Be([(0, a.wk)()], He.prototype, "features", void 0),
        Be([(0, a.wk)()], He.prototype, "networkImage", void 0),
        (He = Be([(0, h.EM)("w3m-account-wallet-features-widget")], He));
      var Fe = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ve = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.namespace = r.W.state.activeChain),
            this.unsubscribe.push(
              r.W.subscribeKey("activeChain", (e) => {
                this.namespace = e;
              })
            );
        }
        render() {
          if (!this.namespace) return null;
          const e = V.a.getConnectorId(this.namespace),
            t = V.a.getAuthConnector();
          return o.qy`
      ${
        t && e === F.o.CONNECTOR_ID.AUTH
          ? this.walletFeaturesTemplate()
          : this.defaultTemplate()
      }
    `;
        }
        walletFeaturesTemplate() {
          return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
        }
        defaultTemplate() {
          return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`;
        }
      };
      Fe([(0, a.wk)()], Ve.prototype, "namespace", void 0),
        (Ve = Fe([(0, h.EM)("w3m-account-view")], Ve));
      var Je = i(62550);
      const Ke = o.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;
      var Ge = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ye = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.accountAddress = ""),
            (this.accountType = ""),
            (this.labels = d.U.state.addressLabels),
            (this.caipNetwork = r.W.state.activeCaipNetwork),
            (this.socialProvider = oe.i.getConnectedSocialProvider()),
            (this.balance = 0),
            (this.fetchingBalance = !0),
            (this.shouldShowIcon = !1),
            (this.selected = !1);
        }
        connectedCallback() {
          var e;
          super.connectedCallback(),
            Je.T.getBalance(
              this.accountAddress,
              null === (e = this.caipNetwork) || void 0 === e
                ? void 0
                : e.caipNetworkId
            )
              .then((e) => {
                let t = this.balance;
                e.balances.length > 0 &&
                  (t = e.balances.reduce(
                    (e, t) =>
                      e +
                      ((null === t || void 0 === t ? void 0 : t.value) || 0),
                    0
                  )),
                  (this.balance = t),
                  (this.fetchingBalance = !1),
                  this.requestUpdate();
              })
              .catch(() => {
                (this.fetchingBalance = !1), this.requestUpdate();
              });
        }
        render() {
          var e;
          const t = this.getLabel(),
            i = r.W.state.activeChain,
            a = V.a.getConnectorId(i);
          return (
            (this.shouldShowIcon = a === F.o.CONNECTOR_ID.AUTH),
            o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0", "0", "s", "1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${
            this.shouldShowIcon
              ? o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${
                  this.accountType === ie.Vl.ACCOUNT_TYPES.EOA
                    ? null !== (e = this.socialProvider) && void 0 !== e
                      ? e
                      : "mail"
                    : "lightbulb"
                }
                background="fg-300"
              ></wui-icon-box>`
              : o.qy`<wui-flex .padding="${["0", "0", "0", "s"]}"></wui-flex>`
          }
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${g.Z.getTruncateString({
                string: this.accountAddress,
                charsStart: 4,
                charsEnd: 6,
                truncate: "middle",
              })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${
            this.fetchingBalance
              ? o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`
              : o.qy` <wui-text variant="small-400">$${this.balance.toFixed(
                  2
                )}</wui-text>`
          }
        </wui-flex>
      </wui-flex>
    `
          );
        }
        getLabel() {
          var e;
          let t =
            null === (e = this.labels) || void 0 === e
              ? void 0
              : e.get(this.accountAddress);
          const i = r.W.state.activeChain,
            o = V.a.getConnectorId(i);
          var a;
          t || o !== F.o.CONNECTOR_ID.AUTH
            ? t || (t = "EOA")
            : (t = `${
                "eoa" === this.accountType
                  ? null !== (a = this.socialProvider) && void 0 !== a
                    ? a
                    : "Email"
                  : "Smart"
              } Account`);
          return t;
        }
      };
      (Ye.styles = [w.W5, w.fD, Ke]),
        Ge([(0, a.MZ)()], Ye.prototype, "accountAddress", void 0),
        Ge([(0, a.MZ)()], Ye.prototype, "accountType", void 0),
        Ge([(0, a.MZ)({ type: Boolean })], Ye.prototype, "selected", void 0),
        Ge([(0, a.MZ)({ type: Function })], Ye.prototype, "onSelect", void 0),
        (Ye = Ge([(0, f.E)("wui-list-account")], Ye));
      const Xe = o.AH`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;
      var Qe = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let et = class extends o.WF {
        constructor() {
          super(),
            (this.usubscribe = []),
            (this.address = d.U.state.address),
            (this.profileImage = d.U.state.profileImage),
            (this.profileName = d.U.state.profileName),
            (this.accounts = d.U.state.allAccounts),
            (this.loading = !1),
            this.usubscribe.push(
              d.U.subscribeKey("address", (e) => {
                e ? (this.address = e) : p.W.close();
              })
            ),
            this.usubscribe.push(
              d.U.subscribeKey("profileImage", (e) => {
                this.profileImage = e;
              })
            ),
            this.usubscribe.push(
              d.U.subscribeKey("profileName", (e) => {
                this.profileName = e;
              })
            );
        }
        disconnectedCallback() {
          this.usubscribe.forEach((e) => e());
        }
        render() {
          if (!this.address)
            throw new Error("w3m-profile-view: No account provided");
          return o.qy`
      <wui-flex flexDirection="column" gap="l" .padding=${[
        "0",
        "xl",
        "m",
        "xl",
      ]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0, n.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${
                  this.profileName
                    ? h.Zv.getTruncateString({
                        string: this.profileName,
                        charsStart: 20,
                        charsEnd: 0,
                        truncate: "end",
                      })
                    : h.Zv.getTruncateString({
                        string: this.address,
                        charsStart: 4,
                        charsEnd: 6,
                        truncate: "middle",
                      })
                }
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${() => G.I.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `;
        }
        accountsTemplate() {
          return o.qy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs", "m", "s", "s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e) => this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`;
        }
        async onSwitchAccount(e) {
          var t;
          const i =
            null === (t = r.W.state.activeCaipNetwork) || void 0 === t
              ? void 0
              : t.chainNamespace;
          this.loading = !0;
          if (V.a.getAuthConnector()) {
            const t = e.type;
            await Y.x.setPreferredAccountType(t, i);
          }
          d.U.setShouldUpdateToAddress(e.address, i), (this.loading = !1);
        }
        accountTemplate(e) {
          return o.qy`<wui-list-account accountAddress=${
            e.address
          } accountType=${e.type}>
      ${
        e.address === this.address
          ? ""
          : o.qy`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${() => this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`
      }
    </wui-list-account>`;
        }
        onCopyAddress() {
          try {
            this.address &&
              (u.w.copyToClopboard(this.address),
              K.P.showSuccess("Address copied"));
          } catch {
            K.P.showError("Failed to copy");
          }
        }
      };
      (et.styles = Xe),
        Qe([(0, a.wk)()], et.prototype, "address", void 0),
        Qe([(0, a.wk)()], et.prototype, "profileImage", void 0),
        Qe([(0, a.wk)()], et.prototype, "profileName", void 0),
        Qe([(0, a.wk)()], et.prototype, "accounts", void 0),
        Qe([(0, a.wk)()], et.prototype, "loading", void 0),
        (et = Qe([(0, h.EM)("w3m-profile-view")], et));
      const tt = o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;
      var it = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ot = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.imageSrc = ""),
            (this.text = ""),
            (this.size = "");
        }
        render() {
          return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `;
        }
      };
      (ot.styles = [w.W5, w.fD, tt]),
        it([(0, a.MZ)()], ot.prototype, "imageSrc", void 0),
        it([(0, a.MZ)()], ot.prototype, "text", void 0),
        it([(0, a.MZ)()], ot.prototype, "size", void 0),
        (ot = it([(0, f.E)("wui-banner-img")], ot));
      const at = o.AH`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;
      var nt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let rt = class extends o.WF {
        constructor() {
          super(),
            (this.metadata = l.H.state.metadata),
            (this.allAccounts = d.U.state.allAccounts || []),
            (this.balances = {}),
            (this.labels = d.U.state.addressLabels),
            (this.currentAddress = d.U.state.address || ""),
            (this.caipNetwork = r.W.state.activeCaipNetwork),
            d.U.subscribeKey("allAccounts", (e) => {
              this.allAccounts = e;
            });
        }
        connectedCallback() {
          super.connectedCallback(),
            this.allAccounts.forEach((e) => {
              var t;
              Je.T.getBalance(
                e.address,
                null === (t = this.caipNetwork) || void 0 === t
                  ? void 0
                  : t.caipNetworkId
              ).then((t) => {
                let i = this.balances[e.address] || 0;
                t.balances.length > 0 &&
                  (i = t.balances.reduce(
                    (e, t) =>
                      e +
                      ((null === t || void 0 === t ? void 0 : t.value) || 0),
                    0
                  )),
                  (this.balances[e.address] = i),
                  this.requestUpdate();
              });
            });
        }
        getAddressIcon(e) {
          return "smartAccount" === e ? "lightbulb" : "mail";
        }
        render() {
          var e, t;
          return o.qy`
      <wui-flex justifyContent="center" .padding=${["xl", "0", "xl", "0"]}>
        <wui-banner-img
          imageSrc=${(0, n.J)(
            null === (e = this.metadata) || void 0 === e ? void 0 : e.icons[0]
          )}
          text=${(0, n.J)(
            null === (t = this.metadata) || void 0 === t ? void 0 : t.url
          )}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${[
        "l",
        "xl",
        "xl",
        "xl",
      ]}>
        ${this.allAccounts.map((e, t) => this.getAddressTemplate(e, t))}
      </wui-flex>
    `;
        }
        getAddressTemplate(e, t) {
          var i, a, n, s;
          const l =
              null === (i = this.labels) || void 0 === i
                ? void 0
                : i.get(e.address),
            c = r.W.state.activeChain,
            d = V.a.getConnectorId(c) === F.o.CONNECTOR_ID.AUTH;
          return o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${
            d
              ? o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`
              : o.qy`<wui-flex .padding="${["0", "0", "0", "s"]}"></wui-flex>`
          }
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${
                l ||
                h.Zv.getTruncateString({
                  string: e.address,
                  charsStart: 4,
                  charsEnd: 6,
                  truncate: "middle",
                })
              }</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${
                "number" === typeof this.balances[e.address]
                  ? `$${
                      null === (a = this.balances[e.address]) || void 0 === a
                        ? void 0
                        : a.toFixed(2)
                    }`
                  : o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`
              }
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${
            (null === (n = e.address) || void 0 === n
              ? void 0
              : n.toLowerCase()) ===
            (null === (s = this.currentAddress) || void 0 === s
              ? void 0
              : s.toLowerCase())
              ? ""
              : o.qy`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${() => this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `
          }
        </wui-flex>
      </wui-flex>
    `;
        }
        onSwitchAddress(e) {
          const t = r.W.state.activeCaipNetwork,
            i = null === t || void 0 === t ? void 0 : t.chainNamespace,
            o = `${i}:${null === t || void 0 === t ? void 0 : t.id}:${e}`;
          d.U.setCaipAddress(o, i), p.W.close();
        }
      };
      (rt.styles = at),
        nt([(0, a.wk)()], rt.prototype, "allAccounts", void 0),
        nt([(0, a.wk)()], rt.prototype, "balances", void 0),
        (rt = nt([(0, h.EM)("w3m-switch-address-view")], rt));
      var st = i(22557);
      const lt = o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;
      var ct = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let dt = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, st._)()),
            (this.checked = void 0);
        }
        render() {
          return o.qy`
      <label>
        <input
          ${(0, st.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0, n.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
        }
        dispatchChangeEvent() {
          var e;
          this.dispatchEvent(
            new CustomEvent("switchChange", {
              detail:
                null === (e = this.inputElementRef.value) || void 0 === e
                  ? void 0
                  : e.checked,
              bubbles: !0,
              composed: !0,
            })
          );
        }
      };
      (dt.styles = [w.W5, w.fD, w.ck, lt]),
        ct([(0, a.MZ)({ type: Boolean })], dt.prototype, "checked", void 0),
        (dt = ct([(0, f.E)("wui-switch")], dt));
      const ut = o.AH`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
      var pt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ht = class extends o.WF {
        constructor() {
          super(...arguments), (this.checked = void 0);
        }
        render() {
          return o.qy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0, n.J)(this.checked)}></wui-switch>
      </button>
    `;
        }
      };
      (ht.styles = [w.W5, w.fD, ut]),
        pt([(0, a.MZ)({ type: Boolean })], ht.prototype, "checked", void 0),
        (ht = pt([(0, f.E)("wui-certified-switch")], ht));
      const wt = o.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;
      var gt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ft = class extends o.WF {
        constructor() {
          super(...arguments), (this.icon = "copy");
        }
        render() {
          return o.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
        }
      };
      (ft.styles = [w.W5, w.fD, wt]),
        gt([(0, a.MZ)()], ft.prototype, "icon", void 0),
        (ft = gt([(0, f.E)("wui-input-element")], ft));
      i(55926);
      const bt = o.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
      var vt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let mt = class extends o.WF {
        constructor() {
          super(...arguments), (this.inputComponentRef = (0, st._)());
        }
        render() {
          return o.qy`
      <wui-input-text
        ${(0, st.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${
          this.clearValue
        } icon="close"></wui-input-element>
      </wui-input-text>
    `;
        }
        clearValue() {
          const e = this.inputComponentRef.value,
            t = null === e || void 0 === e ? void 0 : e.inputElementRef.value;
          t && ((t.value = ""), t.focus(), t.dispatchEvent(new Event("input")));
        }
      };
      (mt.styles = [w.W5, bt]), (mt = vt([(0, f.E)("wui-search-bar")], mt));
      var yt = i(69084);
      const xt = o.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
      i(58223);
      const kt = o.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
      var Ct = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let $t = class extends o.WF {
        constructor() {
          super(...arguments), (this.type = "wallet");
        }
        render() {
          return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
        }
        shimmerTemplate() {
          return "network" === this.type
            ? o.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${xt}`
            : o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
        }
      };
      ($t.styles = [w.W5, w.fD, kt]),
        Ct([(0, a.MZ)()], $t.prototype, "type", void 0),
        ($t = Ct([(0, f.E)("wui-card-select-loader")], $t));
      const It = o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
      var Et = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Tt = class extends o.WF {
        render() {
          return (
            (this.style.cssText = `\n      grid-template-rows: ${
              this.gridTemplateRows
            };\n      grid-template-columns: ${
              this.gridTemplateColumns
            };\n      justify-items: ${
              this.justifyItems
            };\n      align-items: ${
              this.alignItems
            };\n      justify-content: ${
              this.justifyContent
            };\n      align-content: ${this.alignContent};\n      column-gap: ${
              this.columnGap && `var(--wui-spacing-${this.columnGap})`
            };\n      row-gap: ${
              this.rowGap && `var(--wui-spacing-${this.rowGap})`
            };\n      gap: ${
              this.gap && `var(--wui-spacing-${this.gap})`
            };\n      padding-top: ${
              this.padding && g.Z.getSpacingStyles(this.padding, 0)
            };\n      padding-right: ${
              this.padding && g.Z.getSpacingStyles(this.padding, 1)
            };\n      padding-bottom: ${
              this.padding && g.Z.getSpacingStyles(this.padding, 2)
            };\n      padding-left: ${
              this.padding && g.Z.getSpacingStyles(this.padding, 3)
            };\n      margin-top: ${
              this.margin && g.Z.getSpacingStyles(this.margin, 0)
            };\n      margin-right: ${
              this.margin && g.Z.getSpacingStyles(this.margin, 1)
            };\n      margin-bottom: ${
              this.margin && g.Z.getSpacingStyles(this.margin, 2)
            };\n      margin-left: ${
              this.margin && g.Z.getSpacingStyles(this.margin, 3)
            };\n    `),
            o.qy`<slot></slot>`
          );
        }
      };
      (Tt.styles = [w.W5, It]),
        Et([(0, a.MZ)()], Tt.prototype, "gridTemplateRows", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "gridTemplateColumns", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "justifyItems", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "alignItems", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "justifyContent", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "alignContent", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "columnGap", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "rowGap", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "gap", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "padding", void 0),
        Et([(0, a.MZ)()], Tt.prototype, "margin", void 0),
        (Tt = Et([(0, f.E)("wui-grid")], Tt));
      var St = i(40777);
      i(65046);
      const At = o.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;
      var Rt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Wt = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.size = "md"),
            (this.name = ""),
            (this.installed = !1),
            (this.badgeSize = "xs");
        }
        render() {
          let e = "xxs";
          return (
            (e = "lg" === this.size ? "m" : "md" === this.size ? "xs" : "xxs"),
            (this.style.cssText = `\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `),
            this.walletIcon && (this.dataset.walletIcon = this.walletIcon),
            o.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `
          );
        }
        templateVisual() {
          return this.imageSrc
            ? o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
            : this.walletIcon
            ? o.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`
            : o.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
        }
      };
      (Wt.styles = [w.fD, w.W5, At]),
        Rt([(0, a.MZ)()], Wt.prototype, "size", void 0),
        Rt([(0, a.MZ)()], Wt.prototype, "name", void 0),
        Rt([(0, a.MZ)()], Wt.prototype, "imageSrc", void 0),
        Rt([(0, a.MZ)()], Wt.prototype, "walletIcon", void 0),
        Rt([(0, a.MZ)({ type: Boolean })], Wt.prototype, "installed", void 0),
        Rt([(0, a.MZ)()], Wt.prototype, "badgeSize", void 0),
        (Wt = Rt([(0, f.E)("wui-wallet-image")], Wt));
      const Ot = o.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
      var Nt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let jt = class extends o.WF {
        constructor() {
          super(),
            (this.observer = new IntersectionObserver(() => {})),
            (this.visible = !1),
            (this.imageSrc = void 0),
            (this.imageLoading = !1),
            (this.wallet = void 0),
            (this.observer = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting
                    ? ((this.visible = !0), this.fetchImageSrc())
                    : (this.visible = !1);
                });
              },
              { threshold: 0.01 }
            ));
        }
        firstUpdated() {
          this.observer.observe(this);
        }
        disconnectedCallback() {
          this.observer.disconnect();
        }
        render() {
          var e, t;
          const i =
            "certified" ===
            (null === (e = this.wallet) || void 0 === e
              ? void 0
              : e.badge_type);
          return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0, n.J)(i ? "certified" : void 0)}
            >${
              null === (t = this.wallet) || void 0 === t ? void 0 : t.name
            }</wui-text
          >
          ${
            i
              ? o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`
              : null
          }
        </wui-flex>
      </button>
    `;
        }
        imageTemplate() {
          var e, t;
          return (!this.visible && !this.imageSrc) || this.imageLoading
            ? this.shimmerTemplate()
            : o.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0, n.J)(this.imageSrc)}
        name=${null === (e = this.wallet) || void 0 === e ? void 0 : e.name}
        .installed=${
          null === (t = this.wallet) || void 0 === t ? void 0 : t.installed
        }
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
        }
        shimmerTemplate() {
          return o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
        }
        async fetchImageSrc() {
          this.wallet &&
            ((this.imageSrc = s.$.getWalletImage(this.wallet)),
            this.imageSrc ||
              ((this.imageLoading = !0),
              (this.imageSrc = await s.$.fetchWalletImage(
                this.wallet.image_id
              )),
              (this.imageLoading = !1)));
        }
      };
      (jt.styles = Ot),
        Nt([(0, a.wk)()], jt.prototype, "visible", void 0),
        Nt([(0, a.wk)()], jt.prototype, "imageSrc", void 0),
        Nt([(0, a.wk)()], jt.prototype, "imageLoading", void 0),
        Nt([(0, a.MZ)()], jt.prototype, "wallet", void 0),
        (jt = Nt([(0, h.EM)("w3m-all-wallets-list-item")], jt));
      const Pt = o.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
      var qt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      const Mt = "local-paginator";
      let Dt = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.paginationObserver = void 0),
            (this.loading = !yt.N.state.wallets.length),
            (this.wallets = yt.N.state.wallets),
            (this.recommended = yt.N.state.recommended),
            (this.featured = yt.N.state.featured),
            this.unsubscribe.push(
              yt.N.subscribeKey("wallets", (e) => (this.wallets = e)),
              yt.N.subscribeKey("recommended", (e) => (this.recommended = e)),
              yt.N.subscribeKey("featured", (e) => (this.featured = e))
            );
        }
        firstUpdated() {
          this.initialFetch(), this.createPaginationObserver();
        }
        disconnectedCallback() {
          var e;
          this.unsubscribe.forEach((e) => e()),
            null === (e = this.paginationObserver) ||
              void 0 === e ||
              e.disconnect();
        }
        render() {
          return o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
        }
        async initialFetch() {
          var e;
          this.loading = !0;
          const t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector("wui-grid");
          t &&
            (await yt.N.fetchWalletsByPage({ page: 1 }),
            await t.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 200,
              fill: "forwards",
              easing: "ease",
            }).finished,
            (this.loading = !1),
            t.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 200,
              fill: "forwards",
              easing: "ease",
            }));
        }
        shimmerTemplate(e, t) {
          return [...Array(e)].map(
            () => o.qy`
        <wui-card-select-loader type="wallet" id=${(0, n.J)(
          t
        )}></wui-card-select-loader>
      `
          );
        }
        walletsTemplate() {
          const e = u.w.uniqueBy(
            [...this.featured, ...this.recommended, ...this.wallets],
            "id"
          );
          return St.A.markWalletsAsInstalled(e).map(
            (e) => o.qy`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `
          );
        }
        paginationLoaderTemplate() {
          const {
              wallets: e,
              recommended: t,
              featured: i,
              count: o,
            } = yt.N.state,
            a = window.innerWidth < 352 ? 3 : 4,
            n = e.length + t.length;
          let r = Math.ceil(n / a) * a - n + a;
          return (
            (r -= e.length ? i.length % a : 0),
            0 === o && i.length > 0
              ? null
              : 0 === o || [...i, ...e, ...t].length < o
              ? this.shimmerTemplate(r, Mt)
              : null
          );
        }
        createPaginationObserver() {
          var e;
          const t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector(`#${Mt}`);
          t &&
            ((this.paginationObserver = new IntersectionObserver((e) => {
              let [t] = e;
              if (
                null !== t &&
                void 0 !== t &&
                t.isIntersecting &&
                !this.loading
              ) {
                const { page: e, count: t, wallets: i } = yt.N.state;
                i.length < t && yt.N.fetchWalletsByPage({ page: e + 1 });
              }
            })),
            this.paginationObserver.observe(t));
        }
        onConnectWallet(e) {
          V.a.selectWalletConnector(e);
        }
      };
      (Dt.styles = Pt),
        qt([(0, a.wk)()], Dt.prototype, "loading", void 0),
        qt([(0, a.wk)()], Dt.prototype, "wallets", void 0),
        qt([(0, a.wk)()], Dt.prototype, "recommended", void 0),
        qt([(0, a.wk)()], Dt.prototype, "featured", void 0),
        (Dt = qt([(0, h.EM)("w3m-all-wallets-list")], Dt));
      i(47633);
      const Ut = o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
      var Lt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let zt = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.prevQuery = ""),
            (this.prevBadge = void 0),
            (this.loading = !0),
            (this.query = "");
        }
        render() {
          return (
            this.onSearch(),
            this.loading
              ? o.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`
              : this.walletsTemplate()
          );
        }
        async onSearch() {
          (this.query.trim() === this.prevQuery.trim() &&
            this.badge === this.prevBadge) ||
            ((this.prevQuery = this.query),
            (this.prevBadge = this.badge),
            (this.loading = !0),
            await yt.N.searchWallet({ search: this.query, badge: this.badge }),
            (this.loading = !1));
        }
        walletsTemplate() {
          const { search: e } = yt.N.state,
            t = St.A.markWalletsAsInstalled(e);
          return e.length
            ? o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0", "s", "s", "s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(
          (e) => o.qy`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
            : o.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
        }
        onConnectWallet(e) {
          V.a.selectWalletConnector(e);
        }
      };
      (zt.styles = Ut),
        Lt([(0, a.wk)()], zt.prototype, "loading", void 0),
        Lt([(0, a.MZ)()], zt.prototype, "query", void 0),
        Lt([(0, a.MZ)()], zt.prototype, "badge", void 0),
        (zt = Lt([(0, h.EM)("w3m-all-wallets-search")], zt));
      var Zt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let _t = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.search = ""),
            (this.onDebouncedSearch = u.w.debounce((e) => {
              this.search = e;
            }));
        }
        render() {
          const e = this.search.length >= 2;
          return o.qy`
      <wui-flex .padding=${["0", "s", "s", "s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(
          this
        )}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${
        e || this.badge
          ? o.qy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0, n.J)(this.badge)}
          ></w3m-all-wallets-search>`
          : o.qy`<w3m-all-wallets-list badge=${(0, n.J)(
              this.badge
            )}></w3m-all-wallets-list>`
      }
    `;
        }
        onInputChange(e) {
          this.onDebouncedSearch(e.detail);
        }
        onClick() {
          "certified" !== this.badge
            ? ((this.badge = "certified"),
              K.P.showSvg("Only WalletConnect certified", {
                icon: "walletConnectBrown",
                iconColor: "accent-100",
              }))
            : (this.badge = void 0);
        }
        qrButtonTemplate() {
          return u.w.isMobile()
            ? o.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `
            : null;
        }
        onWalletConnectQr() {
          G.I.push("ConnectingWalletConnect");
        }
      };
      Zt([(0, a.wk)()], _t.prototype, "search", void 0),
        Zt([(0, a.wk)()], _t.prototype, "badge", void 0),
        (_t = Zt([(0, h.EM)("w3m-all-wallets-view")], _t));
      var Bt = i(34564),
        Ht = i(13261),
        Ft = i(39965);
      const Vt = o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;
      var Jt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Kt = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.text = ""),
            (this.disabled = !1),
            (this.tabIdx = void 0);
        }
        render() {
          return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0, n.J)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${
          this.text
        }</wui-text>
      </button>
    `;
        }
      };
      (Kt.styles = [w.W5, w.fD, Vt]),
        Jt([(0, a.MZ)()], Kt.prototype, "text", void 0),
        Jt([(0, a.MZ)({ type: Boolean })], Kt.prototype, "disabled", void 0),
        Jt([(0, a.MZ)()], Kt.prototype, "tabIdx", void 0),
        (Kt = Jt([(0, f.E)("wui-list-button")], Kt));
      i(47340);
      var Gt = i(89623);
      i(29521);
      const Yt = o.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;
      var Xt = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Qt = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.unsubscribe = []),
            (this.formRef = (0, st._)()),
            (this.email = ""),
            (this.loading = !1),
            (this.error = "");
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        firstUpdated() {
          var e;
          null === (e = this.formRef.value) ||
            void 0 === e ||
            e.addEventListener("keydown", (e) => {
              "Enter" === e.key && this.onSubmitEmail(e);
            });
        }
        render() {
          return o.qy`
      <form ${(0, st.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0, n.J)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `;
        }
        submitButtonTemplate() {
          return !this.loading && this.email.length > 3
            ? o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `
            : null;
        }
        loadingTemplate() {
          return this.loading
            ? o.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
            : null;
        }
        templateError() {
          return this.error
            ? o.qy`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`
            : null;
        }
        onEmailInputChange(e) {
          (this.email = e.detail.trim()), (this.error = "");
        }
        async onSubmitEmail(e) {
          if (
            !F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (e) => e === r.W.state.activeChain
            )
          ) {
            const e = r.W.getFirstCaipNetworkSupportsAuthConnector();
            if (e) return void G.I.push("SwitchNetwork", { network: e });
          }
          try {
            if (this.loading) return;
            (this.loading = !0), e.preventDefault();
            const t = V.a.getAuthConnector();
            if (!t)
              throw new Error(
                "w3m-email-login-widget: Auth connector not found"
              );
            const { action: i } = await t.provider.connectEmail({
              email: this.email,
            });
            q.E.sendEvent({ type: "track", event: "EMAIL_SUBMITTED" }),
              "VERIFY_OTP" === i
                ? (q.E.sendEvent({
                    type: "track",
                    event: "EMAIL_VERIFICATION_CODE_SENT",
                  }),
                  G.I.push("EmailVerifyOtp", { email: this.email }))
                : "VERIFY_DEVICE" === i
                ? G.I.push("EmailVerifyDevice", { email: this.email })
                : "CONNECT" === i &&
                  (await Y.x.connectExternal(t, r.W.state.activeChain),
                  G.I.replace("Account"));
          } catch (t) {
            const e = u.w.parseError(t);
            null !== e && void 0 !== e && e.includes("Invalid email")
              ? (this.error = "Invalid email. Try again.")
              : K.P.showError(t);
          } finally {
            this.loading = !1;
          }
        }
        onFocusEvent() {
          q.E.sendEvent({ type: "track", event: "EMAIL_LOGIN_SELECTED" });
        }
      };
      (Qt.styles = Yt),
        Xt([(0, a.MZ)()], Qt.prototype, "tabIdx", void 0),
        Xt([(0, a.wk)()], Qt.prototype, "email", void 0),
        Xt([(0, a.wk)()], Qt.prototype, "loading", void 0),
        Xt([(0, a.wk)()], Qt.prototype, "error", void 0),
        (Qt = Xt([(0, h.EM)("w3m-email-login-widget")], Qt));
      i(168), i(24544);
      var ei = i(48376);
      i(29991), i(29755);
      const ti = o.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
      var ii = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let oi = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.logo = "google"),
            (this.disabled = !1),
            (this.tabIdx = void 0);
        }
        render() {
          return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0, n.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `;
        }
      };
      (oi.styles = [w.W5, w.fD, ti]),
        ii([(0, a.MZ)()], oi.prototype, "logo", void 0),
        ii([(0, a.MZ)({ type: Boolean })], oi.prototype, "disabled", void 0),
        ii([(0, a.MZ)()], oi.prototype, "tabIdx", void 0),
        (oi = ii([(0, f.E)("wui-logo-select")], oi));
      const ai = o.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
      var ni = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ri = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.walletGuide = "get-started"),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            (this.features = l.H.state.features),
            (this.authConnector = this.connectors.find(
              (e) => "AUTH" === e.type
            )),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => {
                (this.connectors = e),
                  (this.authConnector = this.connectors.find(
                    (e) => "AUTH" === e.type
                  ));
              }),
              l.H.subscribeKey("features", (e) => (this.features = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `;
        }
        topViewTemplate() {
          var e;
          const t = "explore" === this.walletGuide;
          let i =
            null === (e = this.features) || void 0 === e ? void 0 : e.socials;
          return !i && t
            ? ((i = J.oU.DEFAULT_FEATURES.socials),
              this.renderTopViewContent(i))
            : i
            ? this.renderTopViewContent(i)
            : null;
        }
        renderTopViewContent(e) {
          return 2 === e.length
            ? o.qy` <wui-flex gap="xs">
        ${e.slice(0, 2).map(
          (e) => o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${() => {
                this.onSocialClick(e);
              }}
              logo=${e}
              tabIdx=${(0, n.J)(this.tabIdx)}
            ></wui-logo-select>`
        )}
      </wui-flex>`
            : o.qy` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${() => {
        this.onSocialClick(e[0]);
      }}
      logo=${(0, n.J)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0, n.J)(this.tabIdx)}
    ></wui-list-social>`;
        }
        bottomViewTemplate() {
          var e, t;
          let i =
            null === (e = this.features) || void 0 === e ? void 0 : e.socials;
          const a = "explore" === this.walletGuide;
          return (
            (!this.authConnector ||
              !i ||
              !(null !== (t = i) && void 0 !== t && t.length)) &&
              a &&
              (i = J.oU.DEFAULT_FEATURES.socials),
            i
              ? i.length <= 2
                ? null
                : i && i.length > 6
                ? o.qy`<wui-flex gap="xs">
        ${i.slice(1, 5).map(
          (e) => o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${() => {
                this.onSocialClick(e);
              }}
              logo=${e}
              tabIdx=${(0, n.J)(this.tabIdx)}
            ></wui-logo-select>`
        )}
        <wui-logo-select
          logo="more"
          tabIdx=${(0, n.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`
                : i
                ? o.qy`<wui-flex gap="xs">
      ${i.slice(1, i.length).map(
        (e) => o.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${() => {
              this.onSocialClick(e);
            }}
            logo=${e}
            tabIdx=${(0, n.J)(this.tabIdx)}
          ></wui-logo-select>`
      )}
    </wui-flex>`
                : null
              : null
          );
        }
        onMoreSocialsClick() {
          G.I.push("ConnectSocials");
        }
        async onSocialClick(e) {
          if (
            !F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (e) => e === r.W.state.activeChain
            )
          ) {
            const e = r.W.getFirstCaipNetworkSupportsAuthConnector();
            if (e) return void G.I.push("SwitchNetwork", { network: e });
          }
          e && (await (0, ei.Up)(e));
        }
      };
      (ri.styles = ai),
        ni([(0, a.MZ)()], ri.prototype, "walletGuide", void 0),
        ni([(0, a.MZ)()], ri.prototype, "tabIdx", void 0),
        ni([(0, a.wk)()], ri.prototype, "connectors", void 0),
        ni([(0, a.wk)()], ri.prototype, "features", void 0),
        ni([(0, a.wk)()], ri.prototype, "authConnector", void 0),
        (ri = ni([(0, h.EM)("w3m-social-login-widget")], ri));
      i(27910);
      const si = o.AH`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;
      var li = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ci = class extends o.WF {
        constructor() {
          super(...arguments), (this.walletGuide = "get-started");
        }
        render() {
          return "explore" === this.walletGuide
            ? o.qy`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`
            : o.qy`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s", "0", "s", "0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0, n.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`;
        }
        onGetStarted() {
          G.I.push("Create");
        }
      };
      (ci.styles = si),
        li([(0, a.MZ)()], ci.prototype, "tabIdx", void 0),
        li([(0, a.MZ)()], ci.prototype, "walletGuide", void 0),
        (ci = li([(0, h.EM)("w3m-wallet-guide")], ci));
      const di = o.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;
      var ui = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let pi = class extends o.WF {
        constructor() {
          super(...arguments), (this.walletImages = []);
        }
        render() {
          const e = this.walletImages.length < 4;
          return o.qy`${this.walletImages.slice(0, 4).map((e) => {
            let { src: t, walletName: i } = e;
            return o.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${(0, n.J)(i)}
            ></wui-wallet-image>
          `;
          })}
      ${
        e
          ? [...Array(4 - this.walletImages.length)].map(
              () =>
                o.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`
            )
          : null
      }
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`;
        }
      };
      (pi.styles = [w.W5, di]),
        ui([(0, a.MZ)({ type: Array })], pi.prototype, "walletImages", void 0),
        (pi = ui([(0, f.E)("wui-all-wallets-image")], pi));
      const hi = o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;
      var wi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let gi = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.walletImages = []),
            (this.imageSrc = ""),
            (this.name = ""),
            (this.tabIdx = void 0),
            (this.installed = !1),
            (this.disabled = !1),
            (this.showAllWallets = !1),
            (this.loading = !1),
            (this.loadingSpinnerColor = "accent-100");
        }
        render() {
          return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0, n.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${
          this.name
        }</wui-text>
        ${this.templateStatus()}
      </button>
    `;
        }
        templateAllWallets() {
          return this.showAllWallets && this.imageSrc
            ? o.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `
            : this.showAllWallets && this.walletIcon
            ? o.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `
            : null;
        }
        templateWalletImage() {
          return !this.showAllWallets && this.imageSrc
            ? o.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`
            : this.showAllWallets || this.imageSrc
            ? null
            : o.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`;
        }
        templateStatus() {
          return this.loading
            ? o.qy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`
            : this.tagLabel && this.tagVariant
            ? o.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`
            : this.icon
            ? o.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`
            : null;
        }
      };
      (gi.styles = [w.W5, w.fD, hi]),
        wi([(0, a.MZ)({ type: Array })], gi.prototype, "walletImages", void 0),
        wi([(0, a.MZ)()], gi.prototype, "imageSrc", void 0),
        wi([(0, a.MZ)()], gi.prototype, "name", void 0),
        wi([(0, a.MZ)()], gi.prototype, "tagLabel", void 0),
        wi([(0, a.MZ)()], gi.prototype, "tagVariant", void 0),
        wi([(0, a.MZ)()], gi.prototype, "icon", void 0),
        wi([(0, a.MZ)()], gi.prototype, "walletIcon", void 0),
        wi([(0, a.MZ)()], gi.prototype, "tabIdx", void 0),
        wi([(0, a.MZ)({ type: Boolean })], gi.prototype, "installed", void 0),
        wi([(0, a.MZ)({ type: Boolean })], gi.prototype, "disabled", void 0),
        wi(
          [(0, a.MZ)({ type: Boolean })],
          gi.prototype,
          "showAllWallets",
          void 0
        ),
        wi([(0, a.MZ)({ type: Boolean })], gi.prototype, "loading", void 0),
        wi(
          [(0, a.MZ)({ type: String })],
          gi.prototype,
          "loadingSpinnerColor",
          void 0
        ),
        (gi = wi([(0, f.E)("wui-list-wallet")], gi));
      var fi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let bi = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            (this.count = yt.N.state.count),
            (this.isFetchingRecommendedWallets =
              yt.N.state.isFetchingRecommendedWallets),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e)),
              yt.N.subscribeKey("count", (e) => (this.count = e)),
              yt.N.subscribeKey(
                "isFetchingRecommendedWallets",
                (e) => (this.isFetchingRecommendedWallets = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors.find((e) => "walletConnect" === e.id),
            { allWallets: t } = l.H.state;
          if (!e || "HIDE" === t) return null;
          if ("ONLY_MOBILE" === t && !u.w.isMobile()) return null;
          const i = yt.N.state.featured.length,
            a = this.count + i,
            r = a < 10 ? a : 10 * Math.floor(a / 10),
            s = r < a ? `${r}+` : `${r}`;
          return o.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0, n.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${
          this.isFetchingRecommendedWallets ? "fg-300" : "accent-100"
        }
      ></wui-list-wallet>
    `;
        }
        onAllWallets() {
          q.E.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" }),
            G.I.push("AllWallets");
        }
      };
      fi([(0, a.MZ)()], bi.prototype, "tabIdx", void 0),
        fi([(0, a.wk)()], bi.prototype, "connectors", void 0),
        fi([(0, a.wk)()], bi.prototype, "count", void 0),
        fi([(0, a.wk)()], bi.prototype, "isFetchingRecommendedWallets", void 0),
        (bi = fi([(0, h.EM)("w3m-all-wallets-widget")], bi));
      var vi = i(71377),
        mi = function (e, t, i, o) {
          var a,
            n = arguments.length,
            r =
              n < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, i))
                : o;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            r = Reflect.decorate(e, t, i, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (a = e[s]) &&
                (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
          return n > 3 && r && Object.defineProperty(t, i, r), r;
        };
      let yi = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors.filter((e) => "ANNOUNCED" === e.type);
          return null !== e && void 0 !== e && e.length
            ? o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(vi.g.showConnector).map((e) => {
          var t;
          return o.qy`
              <wui-list-wallet
                imageSrc=${(0, n.J)(s.$.getConnectorImage(e))}
                name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
                @click=${() => this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${(0, n.J)(this.tabIdx)}
              >
              </wui-list-wallet>
            `;
        })}
      </wui-flex>
    `
            : ((this.style.cssText = "display: none"), null);
        }
        onConnector(e) {
          "walletConnect" === e.id
            ? u.w.isMobile()
              ? G.I.push("AllWallets")
              : G.I.push("ConnectingWalletConnect")
            : G.I.push("ConnectingExternal", { connector: e });
        }
      };
      mi([(0, a.MZ)()], yi.prototype, "tabIdx", void 0),
        mi([(0, a.wk)()], yi.prototype, "connectors", void 0),
        (yi = mi([(0, h.EM)("w3m-connect-announced-widget")], yi));
      var xi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ki = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            (this.loading = !1),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e))
            ),
            u.w.isTelegram() &&
              u.w.isIos() &&
              ((this.loading = !Y.x.state.wcUri),
              this.unsubscribe.push(
                Y.x.subscribeKey("wcUri", (e) => (this.loading = !e))
              ));
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const { customWallets: e } = l.H.state;
          if (null === e || void 0 === e || !e.length)
            return (this.style.cssText = "display: none"), null;
          const t = this.filterOutDuplicateWallets(e);
          return o.qy`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e) => {
        var t;
        return o.qy`
          <wui-list-wallet
            imageSrc=${(0, n.J)(s.$.getWalletImage(e))}
            name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
            @click=${() => this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0, n.J)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `;
      })}
    </wui-flex>`;
        }
        filterOutDuplicateWallets(e) {
          const t = oe.i.getRecentWallets(),
            i = this.connectors
              .map((e) => {
                var t;
                return null === (t = e.info) || void 0 === t ? void 0 : t.rdns;
              })
              .filter(Boolean),
            o = t.map((e) => e.rdns).filter(Boolean),
            a = i.concat(o);
          if (a.includes("io.metamask.mobile") && u.w.isMobile()) {
            const e = a.indexOf("io.metamask.mobile");
            a[e] = "io.metamask";
          }
          return e.filter(
            (e) =>
              !a.includes(String(null === e || void 0 === e ? void 0 : e.rdns))
          );
        }
        onConnectWallet(e) {
          this.loading || G.I.push("ConnectingWalletConnect", { wallet: e });
        }
      };
      xi([(0, a.MZ)()], ki.prototype, "tabIdx", void 0),
        xi([(0, a.wk)()], ki.prototype, "connectors", void 0),
        xi([(0, a.wk)()], ki.prototype, "loading", void 0),
        (ki = xi([(0, h.EM)("w3m-connect-custom-widget")], ki));
      var Ci = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let $i = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors
            .filter((e) => "EXTERNAL" === e.type)
            .filter(vi.g.showConnector)
            .filter((e) => e.id !== F.o.CONNECTOR_ID.COINBASE_SDK);
          return null !== e && void 0 !== e && e.length
            ? o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e) => {
          var t;
          return o.qy`
            <wui-list-wallet
              imageSrc=${(0, n.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${() => this.onConnector(e)}
              tabIdx=${(0, n.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `;
        })}
      </wui-flex>
    `
            : ((this.style.cssText = "display: none"), null);
        }
        onConnector(e) {
          G.I.push("ConnectingExternal", { connector: e });
        }
      };
      Ci([(0, a.MZ)()], $i.prototype, "tabIdx", void 0),
        Ci([(0, a.wk)()], $i.prototype, "connectors", void 0),
        ($i = Ci([(0, h.EM)("w3m-connect-external-widget")], $i));
      var Ii = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ei = class extends o.WF {
        constructor() {
          super(...arguments), (this.tabIdx = void 0), (this.wallets = []);
        }
        render() {
          return this.wallets.length
            ? o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((e) => {
          var t;
          return o.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${(0, n.J)(s.$.getWalletImage(e))}
              name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
              @click=${() => this.onConnectWallet(e)}
              tabIdx=${(0, n.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `;
        })}
      </wui-flex>
    `
            : ((this.style.cssText = "display: none"), null);
        }
        onConnectWallet(e) {
          V.a.selectWalletConnector(e);
        }
      };
      Ii([(0, a.MZ)()], Ei.prototype, "tabIdx", void 0),
        Ii([(0, a.MZ)()], Ei.prototype, "wallets", void 0),
        (Ei = Ii([(0, h.EM)("w3m-connect-featured-widget")], Ei));
      var Ti = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Si = class extends o.WF {
        constructor() {
          super(...arguments), (this.tabIdx = void 0), (this.connectors = []);
        }
        render() {
          var e;
          const t = this.connectors;
          return null === t ||
            void 0 === t ||
            !t.length ||
            (1 === t.length &&
              "Browser Wallet" ===
                (null === (e = t[0]) || void 0 === e ? void 0 : e.name) &&
              !u.w.isMobile())
            ? ((this.style.cssText = "display: none"), null)
            : o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((e) => {
          var t, i;
          const a = null === (t = e.info) || void 0 === t ? void 0 : t.rdns;
          return u.w.isMobile() || "Browser Wallet" !== e.name
            ? a || Y.x.checkInstalled()
              ? vi.g.showConnector(e)
                ? o.qy`
            <wui-list-wallet
              imageSrc=${(0, n.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${null !== (i = e.name) && void 0 !== i ? i : "Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${() => this.onConnector(e)}
              tabIdx=${(0, n.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `
                : null
              : ((this.style.cssText = "display: none"), null)
            : null;
        })}
      </wui-flex>
    `;
        }
        onConnector(e) {
          V.a.setActiveConnector(e),
            G.I.push("ConnectingExternal", { connector: e });
        }
      };
      Ti([(0, a.MZ)()], Si.prototype, "tabIdx", void 0),
        Ti([(0, a.MZ)()], Si.prototype, "connectors", void 0),
        (Si = Ti([(0, h.EM)("w3m-connect-injected-widget")], Si));
      var Ai = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ri = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.connectors.filter(
            (e) => "MULTI_CHAIN" === e.type && "WalletConnect" !== e.name
          );
          return null !== e && void 0 !== e && e.length
            ? o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e) => {
          var t;
          return o.qy`
            <wui-list-wallet
              imageSrc=${(0, n.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${() => this.onConnector(e)}
              tabIdx=${(0, n.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `;
        })}
      </wui-flex>
    `
            : ((this.style.cssText = "display: none"), null);
        }
        onConnector(e) {
          V.a.setActiveConnector(e), G.I.push("ConnectingMultiChain");
        }
      };
      Ai([(0, a.MZ)()], Ri.prototype, "tabIdx", void 0),
        Ai([(0, a.wk)()], Ri.prototype, "connectors", void 0),
        (Ri = Ai([(0, h.EM)("w3m-connect-multi-chain-widget")], Ri));
      var Wi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Oi = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            (this.loading = !1),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e))
            ),
            u.w.isTelegram() &&
              u.w.isIos() &&
              ((this.loading = !Y.x.state.wcUri),
              this.unsubscribe.push(
                Y.x.subscribeKey("wcUri", (e) => (this.loading = !e))
              ));
        }
        render() {
          const e = oe.i
            .getRecentWallets()
            .filter((e) => !St.A.isExcluded(e))
            .filter((e) => !this.hasWalletConnector(e))
            .filter((e) => this.isWalletCompatibleWithCurrentChain(e));
          return e.length
            ? o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e) => {
          var t;
          return o.qy`
            <wui-list-wallet
              imageSrc=${(0, n.J)(s.$.getWalletImage(e))}
              name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
              @click=${() => this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0, n.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `;
        })}
      </wui-flex>
    `
            : ((this.style.cssText = "display: none"), null);
        }
        onConnectWallet(e) {
          this.loading || V.a.selectWalletConnector(e);
        }
        hasWalletConnector(e) {
          return this.connectors.some(
            (t) => t.id === e.id || t.name === e.name
          );
        }
        isWalletCompatibleWithCurrentChain(e) {
          const t = r.W.state.activeChain;
          return (
            !t ||
            !e.chains ||
            e.chains.some((e) => {
              const i = e.split(":")[0];
              return t === i;
            })
          );
        }
      };
      Wi([(0, a.MZ)()], Oi.prototype, "tabIdx", void 0),
        Wi([(0, a.wk)()], Oi.prototype, "connectors", void 0),
        Wi([(0, a.wk)()], Oi.prototype, "loading", void 0),
        (Oi = Wi([(0, h.EM)("w3m-connect-recent-widget")], Oi));
      var Ni = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ji = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.wallets = []),
            (this.loading = !1),
            u.w.isTelegram() &&
              u.w.isIos() &&
              ((this.loading = !Y.x.state.wcUri),
              this.unsubscribe.push(
                Y.x.subscribeKey("wcUri", (e) => (this.loading = !e))
              ));
        }
        render() {
          const { connectors: e } = V.a.state,
            { customWallets: t, featuredWalletIds: i } = l.H.state,
            a = oe.i.getRecentWallets(),
            r = e.find((e) => "walletConnect" === e.id),
            c = e
              .filter(
                (e) =>
                  "INJECTED" === e.type ||
                  "ANNOUNCED" === e.type ||
                  "MULTI_CHAIN" === e.type
              )
              .filter((e) => "Browser Wallet" !== e.name);
          if (!r) return null;
          if (i || t || !this.wallets.length)
            return (this.style.cssText = "display: none"), null;
          const d = c.length + a.length,
            u = Math.max(0, 2 - d),
            p = St.A.filterOutDuplicateWallets(this.wallets).slice(0, u);
          return p.length
            ? o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${p.map((e) => {
          var t;
          return o.qy`
            <wui-list-wallet
              imageSrc=${(0, n.J)(s.$.getWalletImage(e))}
              name=${
                null !== (t = null === e || void 0 === e ? void 0 : e.name) &&
                void 0 !== t
                  ? t
                  : "Unknown"
              }
              @click=${() => this.onConnectWallet(e)}
              tabIdx=${(0, n.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `;
        })}
      </wui-flex>
    `
            : ((this.style.cssText = "display: none"), null);
        }
        onConnectWallet(e) {
          if (this.loading) return;
          const t = V.a.getConnector(e.id, e.rdns);
          t
            ? G.I.push("ConnectingExternal", { connector: t })
            : G.I.push("ConnectingWalletConnect", { wallet: e });
        }
      };
      Ni([(0, a.MZ)()], ji.prototype, "tabIdx", void 0),
        Ni([(0, a.MZ)()], ji.prototype, "wallets", void 0),
        Ni([(0, a.wk)()], ji.prototype, "loading", void 0),
        (ji = Ni([(0, h.EM)("w3m-connect-recommended-widget")], ji));
      var Pi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let qi = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            (this.connectorImages = c.j.state.connectorImages),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e)),
              c.j.subscribeKey(
                "connectorImages",
                (e) => (this.connectorImages = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e, t;
          if (u.w.isMobile())
            return (this.style.cssText = "display: none"), null;
          const i = this.connectors.find((e) => "walletConnect" === e.id);
          if (!i) return (this.style.cssText = "display: none"), null;
          const a =
            i.imageUrl ||
            this.connectorImages[
              null !== (e = null === i || void 0 === i ? void 0 : i.imageId) &&
              void 0 !== e
                ? e
                : ""
            ];
          return o.qy`
      <wui-list-wallet
        imageSrc=${(0, n.J)(a)}
        name=${null !== (t = i.name) && void 0 !== t ? t : "Unknown"}
        @click=${() => this.onConnector(i)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0, n.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
        }
        onConnector(e) {
          V.a.setActiveConnector(e), G.I.push("ConnectingWalletConnect");
        }
      };
      Pi([(0, a.MZ)()], qi.prototype, "tabIdx", void 0),
        Pi([(0, a.wk)()], qi.prototype, "connectors", void 0),
        Pi([(0, a.wk)()], qi.prototype, "connectorImages", void 0),
        (qi = Pi([(0, h.EM)("w3m-connect-walletconnect-widget")], qi));
      const Mi = o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
      var Di = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ui = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = V.a.state.connectors),
            (this.recommended = yt.N.state.recommended),
            (this.featured = yt.N.state.featured),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => (this.connectors = e)),
              yt.N.subscribeKey("recommended", (e) => (this.recommended = e)),
              yt.N.subscribeKey("featured", (e) => (this.featured = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return o.qy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `;
        }
        connectorListTemplate() {
          const {
            custom: e,
            recent: t,
            announced: i,
            injected: a,
            multiChain: r,
            recommended: s,
            featured: l,
            external: c,
          } = vi.g.getConnectorsByType(
            this.connectors,
            this.recommended,
            this.featured
          );
          return vi.g
            .getConnectorTypeOrder({
              custom: e,
              recent: t,
              announced: i,
              injected: a,
              multiChain: r,
              recommended: s,
              featured: l,
              external: c,
            })
            .map((e) => {
              switch (e) {
                case "injected":
                  return o.qy`
            ${
              r.length
                ? o.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0, n.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`
                : null
            }
            ${
              i.length
                ? o.qy`<w3m-connect-announced-widget
                  tabIdx=${(0, n.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`
                : null
            }
            ${
              a.length
                ? o.qy`<w3m-connect-injected-widget
                  .connectors=${a}
                  tabIdx=${(0, n.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`
                : null
            }
          `;
                case "walletConnect":
                  return o.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0, n.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
                case "recent":
                  return o.qy`<w3m-connect-recent-widget
            tabIdx=${(0, n.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
                case "featured":
                  return o.qy`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0, n.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
                case "custom":
                  return o.qy`<w3m-connect-custom-widget
            tabIdx=${(0, n.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
                case "external":
                  return o.qy`<w3m-connect-external-widget
            tabIdx=${(0, n.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;
                case "recommended":
                  return o.qy`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0, n.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
                default:
                  return console.warn(`Unknown connector type: ${e}`), null;
              }
            });
        }
      };
      (Ui.styles = Mi),
        Di([(0, a.MZ)()], Ui.prototype, "tabIdx", void 0),
        Di([(0, a.wk)()], Ui.prototype, "connectors", void 0),
        Di([(0, a.wk)()], Ui.prototype, "recommended", void 0),
        Di([(0, a.wk)()], Ui.prototype, "featured", void 0),
        (Ui = Di([(0, h.EM)("w3m-connector-list")], Ui));
      var Li = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let zi = class extends o.WF {
        constructor() {
          super(...arguments), (this.tabIdx = void 0);
        }
        render() {
          return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0, n.J)(
          this.tabIdx
        )}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0, n.J)(
          this.tabIdx
        )}></w3m-all-wallets-widget>
      </wui-flex>
    `;
        }
      };
      Li([(0, a.MZ)()], zi.prototype, "tabIdx", void 0),
        (zi = Li([(0, h.EM)("w3m-wallet-login-list")], zi));
      const Zi = o.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
      var _i = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Bi = class extends o.WF {
        constructor() {
          var e, t;
          super(),
            (this.unsubscribe = []),
            (this.connectors = V.a.state.connectors),
            (this.authConnector = this.connectors.find(
              (e) => "AUTH" === e.type
            )),
            (this.features = l.H.state.features),
            (this.enableWallets = l.H.state.enableWallets),
            (this.noAdapters = r.W.state.noAdapters),
            (this.walletGuide = "get-started"),
            (this.checked = Ft.o.state.isLegalCheckboxChecked),
            (this.isEmailEnabled =
              (null === (e = this.features) || void 0 === e
                ? void 0
                : e.email) && !r.W.state.noAdapters),
            (this.isSocialEnabled =
              (null === (t = this.features) || void 0 === t
                ? void 0
                : t.socials) &&
              this.features.socials.length > 0 &&
              !r.W.state.noAdapters),
            (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors)),
            this.unsubscribe.push(
              V.a.subscribeKey("connectors", (e) => {
                (this.connectors = e),
                  (this.authConnector = this.connectors.find(
                    (e) => "AUTH" === e.type
                  )),
                  (this.isAuthEnabled = this.checkIfAuthEnabled(
                    this.connectors
                  ));
              }),
              l.H.subscribeKey("features", (e) =>
                this.setEmailAndSocialEnableCheck(e, this.noAdapters)
              ),
              l.H.subscribeKey(
                "enableWallets",
                (e) => (this.enableWallets = e)
              ),
              r.W.subscribeKey("noAdapters", (e) =>
                this.setEmailAndSocialEnableCheck(this.features, e)
              ),
              Ft.o.subscribeKey(
                "isLegalCheckboxChecked",
                (e) => (this.checked = e)
              )
            );
        }
        disconnectedCallback() {
          var e, t;
          this.unsubscribe.forEach((e) => e()),
            null === (e = this.resizeObserver) ||
              void 0 === e ||
              e.disconnect();
          const i =
            null === (t = this.shadowRoot) || void 0 === t
              ? void 0
              : t.querySelector(".connect");
          null === i ||
            void 0 === i ||
            i.removeEventListener(
              "scroll",
              this.handleConnectListScroll.bind(this)
            );
        }
        firstUpdated() {
          var e;
          const t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector(".connect");
          var i;
          t &&
            (requestAnimationFrame(this.handleConnectListScroll.bind(this)),
            null === t ||
              void 0 === t ||
              t.addEventListener(
                "scroll",
                this.handleConnectListScroll.bind(this)
              ),
            (this.resizeObserver = new ResizeObserver(() => {
              this.handleConnectListScroll();
            })),
            null === (i = this.resizeObserver) || void 0 === i || i.observe(t),
            this.handleConnectListScroll());
        }
        render() {
          var e;
          const { termsConditionsUrl: t, privacyPolicyUrl: i } = l.H.state,
            a =
              null === (e = l.H.state.features) || void 0 === e
                ? void 0
                : e.legalCheckbox,
            n =
              Boolean(t || i) &&
              Boolean(a) &&
              "get-started" === this.walletGuide &&
              !this.checked,
            r = { connect: !0, disabled: n },
            s = l.H.state.enableWalletGuide,
            c = this.enableWallets,
            d = this.isSocialEnabled || this.authConnector,
            u = n ? -1 : void 0;
          return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0, Ht.H)(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${
              d && c && s && "get-started" === this.walletGuide
                ? ["3xs", "s", "0", "s"]
                : ["3xs", "s", "s", "s"]
            }
          >
            ${this.renderConnectMethod(u)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(n)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `;
        }
        setEmailAndSocialEnableCheck(e, t) {
          (this.isEmailEnabled =
            (null === e || void 0 === e ? void 0 : e.email) && !t),
            (this.isSocialEnabled =
              (null === e || void 0 === e ? void 0 : e.socials) &&
              e.socials.length > 0 &&
              !t),
            (this.features = e),
            (this.noAdapters = t);
        }
        checkIfAuthEnabled(e) {
          const t = e
            .filter((e) => e.type === Gt.o.CONNECTOR_TYPE_AUTH)
            .map((e) => e.chain);
          return F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e) => t.includes(e));
        }
        renderConnectMethod(e) {
          const t = St.A.getConnectOrderMethod(this.features, this.connectors);
          return o.qy`${t.map((t, i) => {
            switch (t) {
              case "email":
                return o.qy`${this.emailTemplate(e)} ${this.separatorTemplate(
                  i,
                  "email"
                )}`;
              case "social":
                return o.qy`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i, "social")}`;
              case "wallet":
                return o.qy`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i, "wallet")}`;
              default:
                return null;
            }
          })}`;
        }
        checkMethodEnabled(e) {
          switch (e) {
            case "wallet":
              return this.enableWallets;
            case "social":
              return this.isSocialEnabled && this.isAuthEnabled;
            case "email":
              return this.isEmailEnabled && this.isAuthEnabled;
            default:
              return null;
          }
        }
        checkIsThereNextMethod(e) {
          const t = St.A.getConnectOrderMethod(this.features, this.connectors)[
            e + 1
          ];
          if (!t) return;
          return this.checkMethodEnabled(t)
            ? t
            : this.checkIsThereNextMethod(e + 1);
        }
        separatorTemplate(e, t) {
          const i = this.checkIsThereNextMethod(e),
            a = "explore" === this.walletGuide;
          switch (t) {
            case "wallet":
              return this.enableWallets && i && !a
                ? o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
                : null;
            case "email": {
              const e = "social" === i;
              return this.isAuthEnabled && this.isEmailEnabled && !e && i
                ? o.qy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`
                : null;
            }
            case "social": {
              const e = "email" === i;
              return this.isAuthEnabled && this.isSocialEnabled && !e && i
                ? o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
                : null;
            }
            default:
              return null;
          }
        }
        emailTemplate(e) {
          return this.isEmailEnabled && this.isAuthEnabled
            ? o.qy`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0, n.J)(e)}
    ></w3m-email-login-widget>`
            : null;
        }
        socialListTemplate(e) {
          return this.isSocialEnabled && this.isAuthEnabled
            ? o.qy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0, n.J)(e)}
    ></w3m-social-login-widget>`
            : null;
        }
        walletListTemplate(e) {
          var t, i;
          const a = this.enableWallets,
            r =
              !1 ===
              (null === (t = this.features) || void 0 === t
                ? void 0
                : t.emailShowWallets),
            s =
              null === (i = this.features) || void 0 === i
                ? void 0
                : i.collapseWallets,
            l = r || s;
          if (!a) return null;
          if (
            ((u.w.isTelegram() || u.w.isSafari()) &&
              u.w.isIos() &&
              Y.x.connectWalletConnect().catch((e) => ({})),
            "explore" === this.walletGuide)
          )
            return null;
          return this.isAuthEnabled &&
            (this.isEmailEnabled || this.isSocialEnabled) &&
            l
            ? o.qy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0, n.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`
            : o.qy`<w3m-wallet-login-list tabIdx=${(0, n.J)(
                e
              )}></w3m-wallet-login-list>`;
        }
        guideTemplate() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!l.H.state.enableWalletGuide) return null;
          const t = { guide: !0, disabled: e },
            i = e ? -1 : void 0;
          return this.authConnector || this.isSocialEnabled
            ? o.qy`
      ${
        "explore" !== this.walletGuide || r.W.state.noAdapters
          ? null
          : o.qy`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`
      }
      <wui-flex flexDirection="column" .padding=${[
        "l",
        "0",
        "0",
        "0",
      ]} class=${(0, Ht.H)(t)}>
        <w3m-wallet-guide
          tabIdx=${(0, n.J)(i)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `
            : null;
        }
        legalCheckboxTemplate() {
          return "explore" === this.walletGuide
            ? null
            : o.qy`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
        }
        handleConnectListScroll() {
          var e;
          const t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector(".connect");
          if (!t) return;
          t.scrollHeight > 470
            ? (t.style.setProperty(
                "--connect-mask-image",
                "linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"
              ),
              t.style.setProperty(
                "--connect-scroll--top-opacity",
                h.z8.interpolate([0, 50], [0, 1], t.scrollTop).toString()
              ),
              t.style.setProperty(
                "--connect-scroll--bottom-opacity",
                h.z8
                  .interpolate(
                    [0, 50],
                    [0, 1],
                    t.scrollHeight - t.scrollTop - t.offsetHeight
                  )
                  .toString()
              ))
            : (t.style.setProperty("--connect-mask-image", "none"),
              t.style.setProperty("--connect-scroll--top-opacity", "0"),
              t.style.setProperty("--connect-scroll--bottom-opacity", "0"));
        }
        onContinueWalletClick() {
          G.I.push("ConnectWallets");
        }
      };
      (Bi.styles = Zi),
        _i([(0, Bt.w)()], Bi.prototype, "connectors", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "authConnector", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "features", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "enableWallets", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "noAdapters", void 0),
        _i([(0, a.MZ)()], Bi.prototype, "walletGuide", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "checked", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "isEmailEnabled", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "isSocialEnabled", void 0),
        _i([(0, Bt.w)()], Bi.prototype, "isAuthEnabled", void 0),
        (Bi = _i([(0, h.EM)("w3m-connect-view")], Bi));
      var Hi = i(75673);
      i(67029), i(18805);
      const Fi = o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
      var Vi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ji = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.label = ""),
            (this.buttonLabel = "");
        }
        render() {
          return o.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs", "2l", "1xs", "2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${
          this.label
        }</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${
          this.buttonLabel
        } icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `;
        }
      };
      (Ji.styles = [w.W5, w.fD, Fi]),
        Vi([(0, a.MZ)({ type: Boolean })], Ji.prototype, "disabled", void 0),
        Vi([(0, a.MZ)()], Ji.prototype, "label", void 0),
        Vi([(0, a.MZ)()], Ji.prototype, "buttonLabel", void 0),
        (Ji = Vi([(0, f.E)("wui-cta-button")], Ji));
      const Ki = o.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;
      var Gi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Yi = class extends o.WF {
        constructor() {
          super(...arguments), (this.wallet = void 0);
        }
        render() {
          if (!this.wallet) return (this.style.display = "none"), null;
          const {
              name: e,
              app_store: t,
              play_store: i,
              chrome_store: a,
              homepage: n,
            } = this.wallet,
            r = u.w.isMobile(),
            s = u.w.isIos(),
            l = u.w.isAndroid(),
            c = [t, i, n, a].filter(Boolean).length > 1,
            d = h.Zv.getTruncateString({
              string: e,
              charsStart: 12,
              charsEnd: 0,
              truncate: "end",
            });
          return c && !r
            ? o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${() => G.I.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `
            : !c && n
            ? o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `
            : t && s
            ? o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `
            : i && l
            ? o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `
            : ((this.style.display = "none"), null);
        }
        onAppStore() {
          var e;
          null !== (e = this.wallet) &&
            void 0 !== e &&
            e.app_store &&
            u.w.openHref(this.wallet.app_store, "_blank");
        }
        onPlayStore() {
          var e;
          null !== (e = this.wallet) &&
            void 0 !== e &&
            e.play_store &&
            u.w.openHref(this.wallet.play_store, "_blank");
        }
        onHomePage() {
          var e;
          null !== (e = this.wallet) &&
            void 0 !== e &&
            e.homepage &&
            u.w.openHref(this.wallet.homepage, "_blank");
        }
      };
      (Yi.styles = [Ki]),
        Gi([(0, a.MZ)({ type: Object })], Yi.prototype, "wallet", void 0),
        (Yi = Gi([(0, h.EM)("w3m-mobile-download-links")], Yi));
      const Xi = o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
      var Qi = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      class eo extends o.WF {
        constructor() {
          var e, t, i, o, a, n, r, l;
          (super(),
          (this.wallet =
            null === (e = G.I.state.data) || void 0 === e ? void 0 : e.wallet),
          (this.connector =
            null === (t = G.I.state.data) || void 0 === t
              ? void 0
              : t.connector),
          (this.timeout = void 0),
          (this.secondaryBtnIcon = "refresh"),
          (this.onConnect = void 0),
          (this.onRender = void 0),
          (this.onAutoConnect = void 0),
          (this.isWalletConnect = !0),
          (this.unsubscribe = []),
          (this.imageSrc =
            null !== (i = s.$.getWalletImage(this.wallet)) && void 0 !== i
              ? i
              : s.$.getConnectorImage(this.connector)),
          (this.name =
            null !==
              (o =
                null !==
                  (a =
                    null === (n = this.wallet) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== a
                  ? a
                  : null === (r = this.connector) || void 0 === r
                  ? void 0
                  : r.name) && void 0 !== o
              ? o
              : "Wallet"),
          (this.isRetrying = !1),
          (this.uri = Y.x.state.wcUri),
          (this.error = Y.x.state.wcError),
          (this.ready = !1),
          (this.showRetry = !1),
          (this.secondaryBtnLabel = "Try again"),
          (this.secondaryLabel = "Accept connection request in the wallet"),
          (this.buffering = !1),
          (this.isLoading = !1),
          (this.isMobile = !1),
          (this.onRetry = void 0),
          this.unsubscribe.push(
            Y.x.subscribeKey("wcUri", (e) => {
              var t;
              ((this.uri = e), this.isRetrying && this.onRetry) &&
                ((this.isRetrying = !1),
                null === (t = this.onConnect) || void 0 === t || t.call(this));
            }),
            Y.x.subscribeKey("wcError", (e) => (this.error = e)),
            Y.x.subscribeKey("buffering", (e) => (this.buffering = e))
          ),
          (u.w.isTelegram() || u.w.isSafari()) &&
            u.w.isIos() &&
            Y.x.state.wcUri) &&
            (null === (l = this.onConnect) || void 0 === l || l.call(this));
        }
        firstUpdated() {
          var e;
          null === (e = this.onAutoConnect) || void 0 === e || e.call(this),
            (this.showRetry = !this.onAutoConnect);
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()), clearTimeout(this.timeout);
        }
        render() {
          var e;
          null === (e = this.onRender) || void 0 === e || e.call(this),
            this.onShowRetry();
          const t = this.error
            ? "Connection can be declined if a previous request is still active"
            : this.secondaryLabel;
          let i = `Continue in ${this.name}`;
          return (
            this.buffering && (i = "Connecting..."),
            this.error && (i = "Connection declined"),
            o.qy`
      <wui-flex
        data-error=${(0, n.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0, n.J)(
            this.imageSrc
          )}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${
            this.error ? "error-100" : "fg-100"
          }>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${
          this.secondaryBtnLabel
            ? o.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${
                  this.isRetrying ||
                  (!this.error && this.buffering) ||
                  this.isLoading
                }
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${
                  this.secondaryBtnIcon
                }></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `
            : null
        }
      </wui-flex>

      ${
        this.isWalletConnect
          ? o.qy`
            <wui-flex .padding=${[
              "0",
              "xl",
              "xl",
              "xl",
            ]} justifyContent="center">
              <wui-link @click=${
                this.onCopyUri
              } color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `
          : null
      }

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `
          );
        }
        onShowRetry() {
          if (this.error && !this.showRetry) {
            var e;
            this.showRetry = !0;
            const t =
              null === (e = this.shadowRoot) || void 0 === e
                ? void 0
                : e.querySelector("wui-button");
            null === t ||
              void 0 === t ||
              t.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: "forwards",
                easing: "ease",
              });
          }
        }
        onTryAgain() {
          var e, t;
          this.buffering ||
            (Y.x.setWcError(!1),
            this.onRetry
              ? ((this.isRetrying = !0),
                null === (e = this.onRetry) || void 0 === e || e.call(this))
              : null === (t = this.onConnect) || void 0 === t || t.call(this));
        }
        loaderTemplate() {
          const e = Hi.W.state.themeVariables["--w3m-border-radius-master"],
            t = e ? parseInt(e.replace("px", ""), 10) : 4;
          return o.qy`<wui-loading-thumbnail radius=${
            9 * t
          }></wui-loading-thumbnail>`;
        }
        onCopyUri() {
          try {
            this.uri &&
              (u.w.copyToClopboard(this.uri), K.P.showSuccess("Link copied"));
          } catch {
            K.P.showError("Failed to copy");
          }
        }
      }
      (eo.styles = Xi),
        Qi([(0, a.wk)()], eo.prototype, "isRetrying", void 0),
        Qi([(0, a.wk)()], eo.prototype, "uri", void 0),
        Qi([(0, a.wk)()], eo.prototype, "error", void 0),
        Qi([(0, a.wk)()], eo.prototype, "ready", void 0),
        Qi([(0, a.wk)()], eo.prototype, "showRetry", void 0),
        Qi([(0, a.wk)()], eo.prototype, "secondaryBtnLabel", void 0),
        Qi([(0, a.wk)()], eo.prototype, "secondaryLabel", void 0),
        Qi([(0, a.wk)()], eo.prototype, "buffering", void 0),
        Qi([(0, a.wk)()], eo.prototype, "isLoading", void 0),
        Qi([(0, a.MZ)({ type: Boolean })], eo.prototype, "isMobile", void 0),
        Qi([(0, a.MZ)()], eo.prototype, "onRetry", void 0);
      var to = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let io = class extends eo {
        constructor() {
          var e;
          if ((super(), (this.externalViewUnsubscribe = []), !this.connector))
            throw new Error("w3m-connecting-view: No connector provided");
          q.E.sendEvent({
            type: "track",
            event: "SELECT_WALLET",
            properties: {
              name:
                null !== (e = this.connector.name) && void 0 !== e
                  ? e
                  : "Unknown",
              platform: "browser",
            },
          }),
            (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onAutoConnect = this.onConnectProxy.bind(this)),
            (this.isWalletConnect = !1),
            this.externalViewUnsubscribe.push(
              r.W.subscribeKey("activeCaipAddress", (e) => {
                e && p.W.close();
              })
            );
        }
        disconnectedCallback() {
          this.externalViewUnsubscribe.forEach((e) => e());
        }
        async onConnectProxy() {
          try {
            (this.error = !1),
              this.connector &&
                ((this.connector.id === F.o.CONNECTOR_ID.COINBASE_SDK &&
                  this.error) ||
                  (await Y.x.connectExternal(
                    this.connector,
                    this.connector.chain
                  ),
                  q.E.sendEvent({
                    type: "track",
                    event: "CONNECT_SUCCESS",
                    properties: {
                      method: "browser",
                      name: this.connector.name || "Unknown",
                    },
                  })));
          } catch (t) {
            var e;
            q.E.sendEvent({
              type: "track",
              event: "CONNECT_ERROR",
              properties: {
                message:
                  null !==
                    (e = null === t || void 0 === t ? void 0 : t.message) &&
                  void 0 !== e
                    ? e
                    : "Unknown",
              },
            }),
              (this.error = !0);
          }
        }
      };
      io = to([(0, h.EM)("w3m-connecting-external-view")], io);
      const oo = o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;
      var ao = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let no = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.activeConnector = V.a.state.activeConnector),
            this.unsubscribe.push(
              V.a.subscribeKey(
                "activeConnector",
                (e) => (this.activeConnector = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e;
          return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0, n.J)(s.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0", "s", "0", "s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${
              null === (e = this.activeConnector) || void 0 === e
                ? void 0
                : e.name
            }
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs", "0", "xs", "0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
        }
        networksTemplate() {
          var e;
          return null === (e = this.activeConnector) ||
            void 0 === e ||
            null === (e = e.connectors) ||
            void 0 === e
            ? void 0
            : e.map((e) =>
                e.name
                  ? o.qy`
            <wui-list-wallet
              imageSrc=${(0, n.J)(s.$.getChainImage(e.chain))}
              name=${F.o.CHAIN_NAME_MAP[e.chain]}
              @click=${() => this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `
                  : null
              );
        }
        onConnector(e) {
          var t;
          const i =
            null === (t = this.activeConnector) ||
            void 0 === t ||
            null === (t = t.connectors) ||
            void 0 === t
              ? void 0
              : t.find((t) => t.chain === e.chain);
          i
            ? "walletConnect" === i.id
              ? u.w.isMobile()
                ? G.I.push("AllWallets")
                : G.I.push("ConnectingWalletConnect")
              : G.I.push("ConnectingExternal", { connector: i })
            : K.P.showError("Failed to find connector");
        }
      };
      (no.styles = oo),
        ao([(0, a.wk)()], no.prototype, "activeConnector", void 0),
        (no = ao([(0, h.EM)("w3m-connecting-multi-chain-view")], no));
      var ro = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let so = class extends o.WF {
        constructor() {
          super(),
            (this.platformTabs = []),
            (this.unsubscribe = []),
            (this.platforms = []),
            (this.onSelectPlatfrom = void 0),
            (this.buffering = !1),
            this.unsubscribe.push(
              Y.x.subscribeKey("buffering", (e) => (this.buffering = e))
            );
        }
        disconnectCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.generateTabs();
          return o.qy`
      <wui-flex justifyContent="center" .padding=${["0", "0", "l", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
        }
        generateTabs() {
          const e = this.platforms.map((e) =>
            "browser" === e
              ? { label: "Browser", icon: "extension", platform: "browser" }
              : "mobile" === e
              ? { label: "Mobile", icon: "mobile", platform: "mobile" }
              : "qrcode" === e
              ? { label: "Mobile", icon: "mobile", platform: "qrcode" }
              : "web" === e
              ? { label: "Webapp", icon: "browser", platform: "web" }
              : "desktop" === e
              ? { label: "Desktop", icon: "desktop", platform: "desktop" }
              : { label: "Browser", icon: "extension", platform: "unsupported" }
          );
          return (
            (this.platformTabs = e.map((e) => {
              let { platform: t } = e;
              return t;
            })),
            e
          );
        }
        onTabChange(e) {
          const t = this.platformTabs[e];
          var i;
          t &&
            (null === (i = this.onSelectPlatfrom) ||
              void 0 === i ||
              i.call(this, t));
        }
      };
      ro([(0, a.MZ)({ type: Array })], so.prototype, "platforms", void 0),
        ro([(0, a.MZ)()], so.prototype, "onSelectPlatfrom", void 0),
        ro([(0, a.wk)()], so.prototype, "buffering", void 0),
        (so = ro([(0, h.EM)("w3m-connecting-header")], so));
      var lo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let co = class extends eo {
        constructor() {
          if ((super(), !this.wallet))
            throw new Error("w3m-connecting-wc-browser: No wallet provided");
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onAutoConnect = this.onConnectProxy.bind(this)),
            q.E.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "browser" },
            });
        }
        async onConnectProxy() {
          try {
            var e;
            this.error = !1;
            const { connectors: t } = V.a.state,
              i = t.find((e) => {
                var t, i, o;
                return (
                  ("ANNOUNCED" === e.type &&
                    (null === (t = e.info) || void 0 === t
                      ? void 0
                      : t.rdns) ===
                      (null === (i = this.wallet) || void 0 === i
                        ? void 0
                        : i.rdns)) ||
                  "INJECTED" === e.type ||
                  e.name ===
                    (null === (o = this.wallet) || void 0 === o
                      ? void 0
                      : o.name)
                );
              });
            if (!i)
              throw new Error("w3m-connecting-wc-browser: No connector found");
            await Y.x.connectExternal(i, i.chain),
              p.W.close(),
              q.E.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                properties: {
                  method: "browser",
                  name:
                    (null === (e = this.wallet) || void 0 === e
                      ? void 0
                      : e.name) || "Unknown",
                },
              });
          } catch (i) {
            var t;
            q.E.sendEvent({
              type: "track",
              event: "CONNECT_ERROR",
              properties: {
                message:
                  null !==
                    (t = null === i || void 0 === i ? void 0 : i.message) &&
                  void 0 !== t
                    ? t
                    : "Unknown",
              },
            }),
              (this.error = !0);
          }
        }
      };
      co = lo([(0, h.EM)("w3m-connecting-wc-browser")], co);
      var uo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let po = class extends eo {
        constructor() {
          if ((super(), !this.wallet))
            throw new Error("w3m-connecting-wc-desktop: No wallet provided");
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onRender = this.onRenderProxy.bind(this)),
            q.E.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "desktop" },
            });
        }
        onRenderProxy() {
          var e;
          !this.ready &&
            this.uri &&
            ((this.ready = !0),
            null === (e = this.onConnect) || void 0 === e || e.call(this));
        }
        onConnectProxy() {
          var e;
          if (
            null !== (e = this.wallet) &&
            void 0 !== e &&
            e.desktop_link &&
            this.uri
          )
            try {
              this.error = !1;
              const { desktop_link: e, name: t } = this.wallet,
                { redirect: i, href: o } = u.w.formatNativeUrl(e, this.uri);
              Y.x.setWcLinking({ name: t, href: o }),
                Y.x.setRecentWallet(this.wallet),
                u.w.openHref(i, "_blank");
            } catch {
              this.error = !0;
            }
        }
      };
      po = uo([(0, h.EM)("w3m-connecting-wc-desktop")], po);
      var ho = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let wo = class extends eo {
        constructor() {
          if (
            (super(),
            (this.btnLabelTimeout = void 0),
            (this.labelTimeout = void 0),
            (this.onRender = () => {
              var e;
              !this.ready &&
                this.uri &&
                ((this.ready = !0),
                null === (e = this.onConnect) || void 0 === e || e.call(this));
            }),
            (this.onConnect = () => {
              var e;
              if (
                null !== (e = this.wallet) &&
                void 0 !== e &&
                e.mobile_link &&
                this.uri
              )
                try {
                  this.error = !1;
                  const { mobile_link: e, name: t } = this.wallet,
                    { redirect: i, href: o } = u.w.formatNativeUrl(e, this.uri);
                  Y.x.setWcLinking({ name: t, href: o }),
                    Y.x.setRecentWallet(this.wallet);
                  const a = u.w.isIframe() ? "_top" : "_self";
                  u.w.openHref(i, a),
                    clearTimeout(this.labelTimeout),
                    (this.secondaryLabel = J.oU.CONNECT_LABELS.MOBILE);
                } catch (t) {
                  q.E.sendEvent({
                    type: "track",
                    event: "CONNECT_PROXY_ERROR",
                    properties: {
                      message:
                        t instanceof Error
                          ? t.message
                          : "Error parsing the deeplink",
                      uri: this.uri,
                      mobile_link: this.wallet.mobile_link,
                      name: this.wallet.name,
                    },
                  }),
                    (this.error = !0);
                }
            }),
            !this.wallet)
          )
            throw new Error("w3m-connecting-wc-mobile: No wallet provided");
          this.initializeStateAndTimers(),
            document.addEventListener(
              "visibilitychange",
              this.onBuffering.bind(this)
            ),
            q.E.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "mobile" },
            });
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            document.removeEventListener(
              "visibilitychange",
              this.onBuffering.bind(this)
            ),
            clearTimeout(this.btnLabelTimeout),
            clearTimeout(this.labelTimeout);
        }
        initializeStateAndTimers() {
          (this.secondaryBtnLabel = void 0),
            (this.secondaryLabel = J.oU.CONNECT_LABELS.MOBILE),
            (this.btnLabelTimeout = setTimeout(() => {
              (this.secondaryBtnLabel = "Try again"),
                (this.secondaryLabel = J.oU.CONNECT_LABELS.MOBILE);
            }, J.oU.FIVE_SEC_MS)),
            (this.labelTimeout = setTimeout(() => {
              this.secondaryLabel =
                "Hold tight... it's taking longer than expected";
            }, J.oU.THREE_SEC_MS));
        }
        onBuffering() {
          var e;
          const t = u.w.isIos();
          "visible" ===
            (null === (e = document) || void 0 === e
              ? void 0
              : e.visibilityState) &&
            !this.error &&
            t &&
            (Y.x.setBuffering(!0),
            setTimeout(() => {
              Y.x.setBuffering(!1);
            }, 5e3));
        }
        onTryAgain() {
          this.buffering ||
            (clearTimeout(this.btnLabelTimeout),
            clearTimeout(this.labelTimeout),
            this.initializeStateAndTimers(),
            Y.x.setWcError(!1),
            this.onConnect());
        }
      };
      wo = ho([(0, h.EM)("w3m-connecting-wc-mobile")], wo);
      i(15478), i(84954);
      const go = o.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;
      var fo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let bo = class extends eo {
        constructor() {
          var e, t;
          super(),
            (this.forceUpdate = () => {
              this.requestUpdate();
            }),
            window.addEventListener("resize", this.forceUpdate),
            q.E.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: {
                name:
                  null !==
                    (e =
                      null === (t = this.wallet) || void 0 === t
                        ? void 0
                        : t.name) && void 0 !== e
                    ? e
                    : "WalletConnect",
                platform: "qrcode",
              },
            });
        }
        disconnectedCallback() {
          var e;
          super.disconnectedCallback(),
            null === (e = this.unsubscribe) ||
              void 0 === e ||
              e.forEach((e) => e()),
            window.removeEventListener("resize", this.forceUpdate);
        }
        render() {
          return (
            this.onRenderProxy(),
            o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `
          );
        }
        onRenderProxy() {
          !this.ready &&
            this.uri &&
            (this.timeout = setTimeout(() => {
              this.ready = !0;
            }, 200));
        }
        qrCodeTemplate() {
          if (!this.uri || !this.ready) return null;
          const e = this.getBoundingClientRect().width - 40,
            t = this.wallet ? this.wallet.name : void 0;
          return (
            Y.x.setWcLinking(void 0),
            Y.x.setRecentWallet(this.wallet),
            o.qy` <wui-qr-code
      size=${e}
      theme=${Hi.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0, n.J)(s.$.getWalletImage(this.wallet))}
      color=${(0, n.J)(Hi.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0, n.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`
          );
        }
        copyTemplate() {
          const e = !this.uri || !this.ready;
          return o.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
        }
      };
      (bo.styles = go), (bo = fo([(0, h.EM)("w3m-connecting-wc-qrcode")], bo));
      var vo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let mo = class extends o.WF {
        constructor() {
          var e;
          if (
            (super(),
            (this.wallet =
              null === (e = G.I.state.data) || void 0 === e
                ? void 0
                : e.wallet),
            !this.wallet)
          )
            throw new Error(
              "w3m-connecting-wc-unsupported: No wallet provided"
            );
          q.E.sendEvent({
            type: "track",
            event: "SELECT_WALLET",
            properties: { name: this.wallet.name, platform: "browser" },
          });
        }
        render() {
          return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0, n.J)(s.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${
        this.wallet
      }></w3m-mobile-download-links>
    `;
        }
      };
      mo = vo([(0, h.EM)("w3m-connecting-wc-unsupported")], mo);
      var yo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let xo = class extends eo {
        constructor() {
          if ((super(), (this.isLoading = !0), !this.wallet))
            throw new Error("w3m-connecting-wc-web: No wallet provided");
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.secondaryBtnLabel = "Open"),
            (this.secondaryLabel = "Open and continue in a new browser tab"),
            (this.secondaryBtnIcon = "externalLink"),
            this.updateLoadingState(),
            this.unsubscribe.push(
              Y.x.subscribeKey("wcUri", () => {
                this.updateLoadingState();
              })
            ),
            q.E.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "web" },
            });
        }
        updateLoadingState() {
          this.isLoading = !this.uri;
        }
        onConnectProxy() {
          var e;
          if (
            null !== (e = this.wallet) &&
            void 0 !== e &&
            e.webapp_link &&
            this.uri
          )
            try {
              this.error = !1;
              const { webapp_link: e, name: t } = this.wallet,
                { redirect: i, href: o } = u.w.formatUniversalUrl(e, this.uri);
              Y.x.setWcLinking({ name: t, href: o }),
                Y.x.setRecentWallet(this.wallet),
                u.w.openHref(i, "_blank");
            } catch {
              this.error = !0;
            }
        }
      };
      yo([(0, a.wk)()], xo.prototype, "isLoading", void 0),
        (xo = yo([(0, h.EM)("w3m-connecting-wc-web")], xo));
      var ko = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Co = class extends o.WF {
        constructor() {
          var e;
          super(),
            (this.wallet =
              null === (e = G.I.state.data) || void 0 === e
                ? void 0
                : e.wallet),
            (this.platform = void 0),
            (this.platforms = []),
            (this.isSiwxEnabled = Boolean(l.H.state.siwx)),
            this.determinePlatforms(),
            this.initializeConnection();
        }
        render() {
          return o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `;
        }
        async initializeConnection() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ("browser" !== this.platform && (!l.H.state.manualWCControl || e))
            try {
              const { wcPairingExpiry: t, status: i } = Y.x.state;
              (e ||
                l.H.state.enableEmbedded ||
                u.w.isPairingExpired(t) ||
                "connecting" === i) &&
                (await Y.x.connectWalletConnect(),
                this.isSiwxEnabled || p.W.close());
            } catch (o) {
              var t, i;
              q.E.sendEvent({
                type: "track",
                event: "CONNECT_ERROR",
                properties: {
                  message:
                    null !==
                      (t = null === o || void 0 === o ? void 0 : o.message) &&
                    void 0 !== t
                      ? t
                      : "Unknown",
                },
              }),
                Y.x.setWcError(!0),
                K.P.showError(
                  null !== (i = o.message) && void 0 !== i
                    ? i
                    : "Connection error"
                ),
                Y.x.resetWcConnection(),
                G.I.goBack();
            }
        }
        determinePlatforms() {
          if (!this.wallet)
            return (
              this.platforms.push("qrcode"), void (this.platform = "qrcode")
            );
          if (this.platform) return;
          const {
              mobile_link: e,
              desktop_link: t,
              webapp_link: i,
              injected: o,
              rdns: a,
            } = this.wallet,
            n =
              null === o || void 0 === o
                ? void 0
                : o
                    .map((e) => {
                      let { injected_id: t } = e;
                      return t;
                    })
                    .filter(Boolean),
            s = [...(a ? [a] : null !== n && void 0 !== n ? n : [])],
            c = !l.H.state.isUniversalProvider && s.length,
            d = e,
            p = i,
            h = Y.x.checkInstalled(s),
            w = c && h,
            g = t && !u.w.isMobile();
          w && !r.W.state.noAdapters && this.platforms.push("browser"),
            d && this.platforms.push(u.w.isMobile() ? "mobile" : "qrcode"),
            p && this.platforms.push("web"),
            g && this.platforms.push("desktop"),
            w ||
              !c ||
              r.W.state.noAdapters ||
              this.platforms.push("unsupported"),
            (this.platform = this.platforms[0]);
        }
        platformTemplate() {
          switch (this.platform) {
            case "browser":
              return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
            case "web":
              return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
            case "desktop":
              return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
            case "mobile":
              return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() =>
            this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
            case "qrcode":
              return o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
            default:
              return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
          }
        }
        headerTemplate() {
          return this.platforms.length > 1
            ? o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `
            : null;
        }
        async onSelectPlatform(e) {
          var t;
          const i =
            null === (t = this.shadowRoot) || void 0 === t
              ? void 0
              : t.querySelector("div");
          i &&
            (await i.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 200,
              fill: "forwards",
              easing: "ease",
            }).finished,
            (this.platform = e),
            i.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 200,
              fill: "forwards",
              easing: "ease",
            }));
        }
      };
      ko([(0, a.wk)()], Co.prototype, "platform", void 0),
        ko([(0, a.wk)()], Co.prototype, "platforms", void 0),
        ko([(0, a.wk)()], Co.prototype, "isSiwxEnabled", void 0),
        (Co = ko([(0, h.EM)("w3m-connecting-wc-view")], Co));
      var $o = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Io = class extends o.WF {
        constructor() {
          super(...arguments), (this.isMobile = u.w.isMobile());
        }
        render() {
          if (this.isMobile) {
            const { featured: e, recommended: t } = yt.N.state,
              { customWallets: i } = l.H.state,
              a = oe.i.getRecentWallets(),
              n =
                e.length ||
                t.length ||
                (null === i || void 0 === i ? void 0 : i.length) ||
                a.length;
            return o.qy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs", "s", "s", "s"]}
      >
        ${n ? o.qy`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
          }
          return o.qy`<wui-flex flexDirection="column" .padding=${[
            "0",
            "0",
            "l",
            "0",
          ]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0", "m", "0", "m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`;
        }
      };
      $o([(0, a.wk)()], Io.prototype, "isMobile", void 0),
        (Io = $o([(0, h.EM)("w3m-connecting-wc-basic-view")], Io));
      var Eo = i(15522);
      const To = o.AH`
  .continue-button-container {
    width: 100%;
  }
`;
      var So = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ao = class extends o.WF {
        constructor() {
          super(...arguments), (this.loading = !1);
        }
        render() {
          return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0", "0", "l", "0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
            u.w.openHref(Eo.T.URLS.FAQ, "_blank");
          }}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
        }
        onboardingTemplate() {
          return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0", "xxl", "0", "xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`;
        }
        buttonsTemplate() {
          return o.qy`<wui-flex
      .padding=${["0", "2l", "0", "2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
        }
        handleContinue() {
          var e;
          const t = r.W.state.activeChain;
          G.I.push("RegisterAccountName"),
            q.E.sendEvent({
              type: "track",
              event: "OPEN_ENS_FLOW",
              properties: {
                isSmartAccount:
                  (null === (e = d.U.state.preferredAccountTypes) ||
                  void 0 === e
                    ? void 0
                    : e[t]) === ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,
              },
            });
        }
      };
      (Ao.styles = To),
        So([(0, a.wk)()], Ao.prototype, "loading", void 0),
        (Ao = So([(0, h.EM)("w3m-choose-account-name-view")], Ao));
      var Ro = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Wo = class extends o.WF {
        constructor() {
          var e;
          super(...arguments),
            (this.wallet =
              null === (e = G.I.state.data) || void 0 === e
                ? void 0
                : e.wallet);
        }
        render() {
          if (!this.wallet) throw new Error("w3m-downloads-view");
          return o.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${[
        "s",
        "s",
        "l",
        "s",
      ]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
        }
        chromeTemplate() {
          var e;
          return null !== (e = this.wallet) && void 0 !== e && e.chrome_store
            ? o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`
            : null;
        }
        iosTemplate() {
          var e;
          return null !== (e = this.wallet) && void 0 !== e && e.app_store
            ? o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`
            : null;
        }
        androidTemplate() {
          var e;
          return null !== (e = this.wallet) && void 0 !== e && e.play_store
            ? o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`
            : null;
        }
        homepageTemplate() {
          var e;
          return null !== (e = this.wallet) && void 0 !== e && e.homepage
            ? o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `
            : null;
        }
        onChromeStore() {
          var e;
          null !== (e = this.wallet) &&
            void 0 !== e &&
            e.chrome_store &&
            u.w.openHref(this.wallet.chrome_store, "_blank");
        }
        onAppStore() {
          var e;
          null !== (e = this.wallet) &&
            void 0 !== e &&
            e.app_store &&
            u.w.openHref(this.wallet.app_store, "_blank");
        }
        onPlayStore() {
          var e;
          null !== (e = this.wallet) &&
            void 0 !== e &&
            e.play_store &&
            u.w.openHref(this.wallet.play_store, "_blank");
        }
        onHomePage() {
          var e;
          null !== (e = this.wallet) &&
            void 0 !== e &&
            e.homepage &&
            u.w.openHref(this.wallet.homepage, "_blank");
        }
      };
      Wo = Ro([(0, h.EM)("w3m-downloads-view")], Wo);
      var Oo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let No = class extends o.WF {
        render() {
          return o.qy`
      <wui-flex flexDirection="column" .padding=${[
        "0",
        "s",
        "s",
        "s",
      ]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
            u.w.openHref(
              "https://walletconnect.com/explorer?type=wallet",
              "_blank"
            );
          }}
        ></wui-list-wallet>
      </wui-flex>
    `;
        }
        recommendedWalletsTemplate() {
          const { recommended: e, featured: t } = yt.N.state,
            { customWallets: i } = l.H.state;
          return [...t, ...(null !== i && void 0 !== i ? i : []), ...e]
            .slice(0, 4)
            .map((e) => {
              var t;
              return o.qy`
        <wui-list-wallet
          name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
          tagVariant="main"
          imageSrc=${(0, n.J)(s.$.getWalletImage(e))}
          @click=${() => {
            var t;
            u.w.openHref(
              null !== (t = e.homepage) && void 0 !== t
                ? t
                : "https://walletconnect.com/explorer",
              "_blank"
            );
          }}
        ></wui-list-wallet>
      `;
            });
        }
      };
      No = Oo([(0, h.EM)("w3m-get-wallet-view")], No);
      i(28183);
      var jo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Po = class extends o.WF {
        constructor() {
          super(...arguments), (this.data = []);
        }
        render() {
          return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(
          (e) => o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(
                  (e) => o.qy`<wui-visual name=${e}></wui-visual>`
                )}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${
                e.text
              }</wui-text>
            </wui-flex>
          `
        )}
      </wui-flex>
    `;
        }
      };
      jo([(0, a.MZ)({ type: Array })], Po.prototype, "data", void 0),
        (Po = jo([(0, h.EM)("w3m-help-widget")], Po));
      var qo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      const Mo = [
        {
          images: ["login", "profile", "lock"],
          title: "One login for all of web3",
          text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!",
        },
        {
          images: ["defi", "nft", "eth"],
          title: "A home for your digital assets",
          text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.",
        },
        {
          images: ["browser", "noun", "dao"],
          title: "Your gateway to a new web",
          text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.",
        },
      ];
      let Do = class extends o.WF {
        render() {
          return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Mo}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(
          this
        )}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
        }
        onGetWallet() {
          q.E.sendEvent({ type: "track", event: "CLICK_GET_WALLET" }),
            G.I.push("GetWallet");
        }
      };
      Do = qo([(0, h.EM)("w3m-what-is-a-wallet-view")], Do);
      const Uo = o.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;
      var Lo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let zo = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.checked = Ft.o.state.isLegalCheckboxChecked),
            this.unsubscribe.push(
              Ft.o.subscribeKey("isLegalCheckboxChecked", (e) => {
                this.checked = e;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e;
          const { termsConditionsUrl: t, privacyPolicyUrl: i } = l.H.state,
            a =
              null === (e = l.H.state.features) || void 0 === e
                ? void 0
                : e.legalCheckbox,
            r = Boolean(t || i) && Boolean(a),
            s = r && !this.checked,
            c = s ? -1 : void 0;
          return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r ? ["0", "s", "s", "s"] : "s"}
        gap="xs"
        class=${(0, n.J)(s ? "disabled" : void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0, n.J)(c)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
        }
      };
      (zo.styles = Uo),
        Lo([(0, a.wk)()], zo.prototype, "checked", void 0),
        (zo = Lo([(0, h.EM)("w3m-connect-wallets-view")], zo));
      const Zo = o.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
      var _o = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Bo = class extends o.WF {
        render() {
          return o.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
        }
      };
      (Bo.styles = [w.W5, Zo]),
        (Bo = _o([(0, f.E)("wui-loading-hexagon")], Bo));
      const Ho = o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,
        Fo = o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,
        Vo = o.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;
      var Jo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ko = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.size = "md"),
            (this.name = "uknown"),
            (this.networkImagesBySize = { sm: Fo, md: xt, lg: Ho }),
            (this.selected = !1),
            (this.round = !1);
        }
        render() {
          return (
            this.round
              ? ((this.dataset.round = "true"),
                (this.style.cssText =
                  "\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "))
              : (this.style.cssText = `\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `),
            o.qy`${this.templateVisual()} ${this.svgTemplate()} `
          );
        }
        svgTemplate() {
          return this.round ? null : this.networkImagesBySize[this.size];
        }
        templateVisual() {
          return this.imageSrc
            ? o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
            : o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
        }
      };
      (Ko.styles = [w.W5, Vo]),
        Jo([(0, a.MZ)()], Ko.prototype, "size", void 0),
        Jo([(0, a.MZ)()], Ko.prototype, "name", void 0),
        Jo(
          [(0, a.MZ)({ type: Object })],
          Ko.prototype,
          "networkImagesBySize",
          void 0
        ),
        Jo([(0, a.MZ)()], Ko.prototype, "imageSrc", void 0),
        Jo([(0, a.MZ)({ type: Boolean })], Ko.prototype, "selected", void 0),
        Jo([(0, a.MZ)({ type: Boolean })], Ko.prototype, "round", void 0),
        (Ko = Jo([(0, f.E)("wui-network-image")], Ko));
      const Go = o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;
      var Yo = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Xo = class extends o.WF {
        constructor() {
          var e;
          super(),
            (this.network =
              null === (e = G.I.state.data) || void 0 === e
                ? void 0
                : e.network),
            (this.unsubscribe = []),
            (this.showRetry = !1),
            (this.error = !1);
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        firstUpdated() {
          this.onSwitchNetwork();
        }
        render() {
          if (!this.network)
            throw new Error("w3m-network-switch-view: No network provided");
          this.onShowRetry();
          const e = this.getLabel(),
            t = this.getSubLabel();
          return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0, n.J)(s.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${
            this.error
              ? null
              : o.qy`<wui-loading-hexagon></wui-loading-hexagon>`
          }

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
        }
        getSubLabel() {
          const e = r.W.state.activeChain,
            t = V.a.getConnectorId(e);
          return V.a.getAuthConnector() && t === F.o.CONNECTOR_ID.AUTH
            ? ""
            : this.error
            ? "Switch can be declined if chain is not supported by a wallet or previous request is still active"
            : "Accept connection request in your wallet";
        }
        getLabel() {
          const e = r.W.state.activeChain,
            t = V.a.getConnectorId(e);
          var i, o;
          return V.a.getAuthConnector() && t === F.o.CONNECTOR_ID.AUTH
            ? `Switching to ${
                null !==
                  (i =
                    null === (o = this.network) || void 0 === o
                      ? void 0
                      : o.name) && void 0 !== i
                  ? i
                  : "Unknown"
              } network...`
            : this.error
            ? "Switch declined"
            : "Approve in wallet";
        }
        onShowRetry() {
          if (this.error && !this.showRetry) {
            var e;
            this.showRetry = !0;
            const t =
              null === (e = this.shadowRoot) || void 0 === e
                ? void 0
                : e.querySelector("wui-button");
            null === t ||
              void 0 === t ||
              t.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: "forwards",
                easing: "ease",
              });
          }
        }
        async onSwitchNetwork() {
          try {
            var e;
            (this.error = !1),
              r.W.state.activeChain !==
                (null === (e = this.network) || void 0 === e
                  ? void 0
                  : e.chainNamespace) && r.W.setIsSwitchingNamespace(!0),
              this.network && (await r.W.switchActiveNetwork(this.network));
          } catch (t) {
            this.error = !0;
          }
        }
      };
      (Xo.styles = Go),
        Yo([(0, a.wk)()], Xo.prototype, "showRetry", void 0),
        Yo([(0, a.wk)()], Xo.prototype, "error", void 0),
        (Xo = Yo([(0, h.EM)("w3m-network-switch-view")], Xo));
      i(98625);
      const Qo = o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;
      var ea = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ta = class extends o.WF {
        constructor() {
          super(...arguments),
            (this.imageSrc = ""),
            (this.name = ""),
            (this.disabled = !1),
            (this.selected = !1),
            (this.transparent = !1);
        }
        render() {
          return o.qy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${
            this.name
          }</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `;
        }
        checkmarkTemplate() {
          return this.selected
            ? o.qy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`
            : null;
        }
        templateNetworkImage() {
          return this.imageSrc
            ? o.qy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`
            : this.imageSrc
            ? null
            : o.qy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`;
        }
      };
      (ta.styles = [w.W5, w.fD, Qo]),
        ea([(0, a.MZ)()], ta.prototype, "imageSrc", void 0),
        ea([(0, a.MZ)()], ta.prototype, "name", void 0),
        ea([(0, a.MZ)({ type: Boolean })], ta.prototype, "disabled", void 0),
        ea([(0, a.MZ)({ type: Boolean })], ta.prototype, "selected", void 0),
        ea([(0, a.MZ)({ type: Boolean })], ta.prototype, "transparent", void 0),
        (ta = ea([(0, f.E)("wui-list-network")], ta));
      const ia = o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;
      var oa = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let aa = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.network = r.W.state.activeCaipNetwork),
            (this.requestedCaipNetworks = r.W.getAllRequestedCaipNetworks()),
            (this.search = ""),
            (this.onDebouncedSearch = u.w.debounce((e) => {
              this.search = e;
            }, 100)),
            this.unsubscribe.push(
              c.j.subscribeNetworkImages(() => this.requestUpdate()),
              r.W.subscribeKey("activeCaipNetwork", (e) => (this.network = e)),
              r.W.subscribeKey(
                "chains",
                () =>
                  (this.requestedCaipNetworks =
                    r.W.getAllRequestedCaipNetworks())
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0", "s", "s", "s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
        }
        templateSearchInput() {
          return o.qy`
      <wui-flex gap="xs" .padding=${["0", "s", "s", "s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
        }
        onInputChange(e) {
          this.onDebouncedSearch(e.detail);
        }
        onNetworkHelp() {
          q.E.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" }),
            G.I.push("WhatIsANetwork");
        }
        networksTemplate() {
          var e;
          const t = r.W.getAllRequestedCaipNetworks(),
            i = r.W.getAllApprovedCaipNetworkIds(),
            a = u.w.sortRequestedNetworks(i, t);
          return (
            this.search
              ? (this.filteredNetworks =
                  null === a || void 0 === a
                    ? void 0
                    : a.filter((e) => {
                        var t;
                        return null === e ||
                          void 0 === e ||
                          null === (t = e.name) ||
                          void 0 === t
                          ? void 0
                          : t.toLowerCase().includes(this.search.toLowerCase());
                      }))
              : (this.filteredNetworks = a),
            null === (e = this.filteredNetworks) || void 0 === e
              ? void 0
              : e.map((e) => {
                  var t, i, a;
                  return o.qy`
        <wui-list-network
          .selected=${
            (null === (t = this.network) || void 0 === t ? void 0 : t.id) ===
            e.id
          }
          imageSrc=${(0, n.J)(s.$.getNetworkImage(e))}
          type="network"
          name=${null !== (i = e.name) && void 0 !== i ? i : e.id}
          @click=${() => this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${
            null !== (a = e.name) && void 0 !== a ? a : e.id
          }`}
        ></wui-list-network>
      `;
                })
          );
        }
        getNetworkDisabled(e) {
          const t = e.chainNamespace,
            i = d.U.getCaipAddress(t),
            o = r.W.getAllApprovedCaipNetworkIds(),
            a = !1 !== r.W.getNetworkProp("supportsAllNetworks", t),
            n = V.a.getConnectorId(t),
            s = V.a.getAuthConnector(),
            l = n === F.o.CONNECTOR_ID.AUTH && s;
          return (
            !(!i || a || l) &&
            !(null !== o && void 0 !== o && o.includes(e.caipNetworkId))
          );
        }
        onSwitchNetwork(e) {
          var t;
          const i = G.I.state.data;
          if (
            e.id ===
            (null === (t = this.network) || void 0 === t ? void 0 : t.id)
          )
            return;
          const o = e.chainNamespace !== r.W.state.activeChain,
            a = d.U.state.caipAddress,
            n = d.U.getCaipAddress(e.chainNamespace),
            s =
              V.a.getConnectorId(r.W.state.activeChain) ===
              F.o.CONNECTOR_ID.AUTH,
            l = F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (t) => t === e.chainNamespace
            );
          a
            ? s && l
              ? G.I.push("SwitchNetwork", { ...i, network: e })
              : (s && !l) || (o && !n)
              ? G.I.push("SwitchActiveChain", {
                  switchToChain: e.chainNamespace,
                  navigateTo: "Connect",
                  navigateWithReplace: !0,
                  network: e,
                })
              : G.I.push("SwitchNetwork", { ...i, network: e })
            : G.I.push("SwitchNetwork", { ...i, network: e });
        }
      };
      (aa.styles = ia),
        oa([(0, a.wk)()], aa.prototype, "network", void 0),
        oa([(0, a.wk)()], aa.prototype, "requestedCaipNetworks", void 0),
        oa([(0, a.wk)()], aa.prototype, "filteredNetworks", void 0),
        oa([(0, a.wk)()], aa.prototype, "search", void 0),
        (aa = oa([(0, h.EM)("w3m-networks-view")], aa));
      const na = o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;
      var ra = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      const sa = {
        eip155: "eth",
        solana: "solana",
        bip122: "bitcoin",
        polkadot: void 0,
      };
      let la = class extends o.WF {
        constructor() {
          var e, t;
          super(...arguments),
            (this.unsubscribe = []),
            (this.switchToChain =
              null === (e = G.I.state.data) || void 0 === e
                ? void 0
                : e.switchToChain),
            (this.caipNetwork =
              null === (t = G.I.state.data) || void 0 === t
                ? void 0
                : t.network),
            (this.activeChain = r.W.state.activeChain);
        }
        firstUpdated() {
          this.unsubscribe.push(
            r.W.subscribeKey("activeChain", (e) => (this.activeChain = e))
          );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          const e = this.switchToChain
            ? F.o.CHAIN_NAME_MAP[this.switchToChain]
            : "supported";
          if (!this.switchToChain) return null;
          const t = F.o.CHAIN_NAME_MAP[this.switchToChain];
          return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0, n.J)(sa[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
        }
        async switchActiveChain() {
          this.switchToChain &&
            (r.W.setIsSwitchingNamespace(!0),
            V.a.setFilterByNamespace(this.switchToChain),
            this.caipNetwork
              ? await r.W.switchActiveNetwork(this.caipNetwork)
              : r.W.setActiveNamespace(this.switchToChain),
            G.I.reset("Connect"));
        }
      };
      (la.styles = na),
        ra([(0, a.MZ)()], la.prototype, "activeChain", void 0),
        (la = ra([(0, h.EM)("w3m-switch-active-chain-view")], la));
      var ca = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      const da = [
        {
          images: ["network", "layers", "system"],
          title: "The system\u2019s nuts and bolts",
          text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.",
        },
        {
          images: ["noun", "defiAlt", "dao"],
          title: "Designed for different uses",
          text: "Each network is designed differently, and may therefore suit certain apps and experiences.",
        },
      ];
      let ua = class extends o.WF {
        render() {
          return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${da}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${() => {
            u.w.openHref(
              "https://ethereum.org/en/developers/docs/networks/",
              "_blank"
            );
          }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
        }
      };
      ua = ca([(0, h.EM)("w3m-what-is-a-network-view")], ua);
      const pa = o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
      var ha = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let wa = class extends o.WF {
        constructor() {
          var e;
          super(),
            (this.swapUnsupportedChain =
              null === (e = G.I.state.data) || void 0 === e
                ? void 0
                : e.swapUnsupportedChain),
            (this.unsubscribe = []),
            (this.disconecting = !1),
            this.unsubscribe.push(
              c.j.subscribeNetworkImages(() => this.requestUpdate())
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m", "xl", "xs", "xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
        }
        descriptionTemplate() {
          return this.swapUnsupportedChain
            ? o.qy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `
            : o.qy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
        }
        networksTemplate() {
          const e = r.W.getAllRequestedCaipNetworks(),
            t = r.W.getAllApprovedCaipNetworkIds(),
            i = u.w.sortRequestedNetworks(t, e);
          return (
            this.swapUnsupportedChain
              ? i.filter((e) =>
                  J.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)
                )
              : i
          ).map((e) => {
            var t;
            return o.qy`
        <wui-list-network
          imageSrc=${(0, n.J)(s.$.getNetworkImage(e))}
          name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
          @click=${() => this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `;
          });
        }
        async onDisconnect() {
          try {
            (this.disconecting = !0), await Y.x.disconnect(), p.W.close();
          } catch {
            q.E.sendEvent({ type: "track", event: "DISCONNECT_ERROR" }),
              K.P.showError("Failed to disconnect");
          } finally {
            this.disconecting = !1;
          }
        }
        async onSwitchNetwork(e) {
          const t = d.U.state.caipAddress,
            i = r.W.getAllApprovedCaipNetworkIds(),
            o =
              (r.W.getNetworkProp("supportsAllNetworks", e.chainNamespace),
              G.I.state.data);
          t
            ? null !== i && void 0 !== i && i.includes(e.caipNetworkId)
              ? await r.W.switchActiveNetwork(e)
              : G.I.push("SwitchNetwork", { ...o, network: e })
            : t || (r.W.setActiveCaipNetwork(e), G.I.push("Connect"));
        }
      };
      (wa.styles = pa),
        ha([(0, a.wk)()], wa.prototype, "disconecting", void 0),
        (wa = ha([(0, h.EM)("w3m-unsupported-chain-view")], wa));
      const ga = o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;
      var fa = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ba = class extends o.WF {
        constructor() {
          super(...arguments), (this.icon = "externalLink"), (this.text = "");
        }
        render() {
          return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `;
        }
      };
      (ba.styles = [w.W5, w.fD, ga]),
        fa([(0, a.MZ)()], ba.prototype, "icon", void 0),
        fa([(0, a.MZ)()], ba.prototype, "text", void 0),
        (ba = fa([(0, f.E)("wui-banner")], ba));
      const va = o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
      var ma = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let ya = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.preferredAccountTypes = d.U.state.preferredAccountTypes),
            this.unsubscribe.push(
              d.U.subscribeKey("preferredAccountTypes", (e) => {
                this.preferredAccountTypes = e;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return o.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs", "s", "m", "s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
        }
        networkTemplate() {
          var e;
          const t = r.W.getAllRequestedCaipNetworks(),
            i = r.W.getAllApprovedCaipNetworkIds(),
            a = r.W.state.activeCaipNetwork,
            l = r.W.checkIfSmartAccountEnabled();
          let c = u.w.sortRequestedNetworks(i, t);
          if (
            l &&
            (null === (e = this.preferredAccountTypes) || void 0 === e
              ? void 0
              : e[null === a || void 0 === a ? void 0 : a.chainNamespace]) ===
              ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT
          ) {
            if (!a) return null;
            c = [a];
          }
          return c.map((e) => {
            var t;
            return o.qy`
        <wui-list-network
          imageSrc=${(0, n.J)(s.$.getNetworkImage(e))}
          name=${null !== (t = e.name) && void 0 !== t ? t : "Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `;
          });
        }
      };
      (ya.styles = va),
        ma([(0, a.wk)()], ya.prototype, "preferredAccountTypes", void 0),
        (ya = ma([(0, h.EM)("w3m-wallet-compatible-networks-view")], ya));
      var xa = i(44753);
      const ka = o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;
      var Ca = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let $a = class extends o.WF {
        render() {
          return (
            (this.style.cssText = `--local-border-radius: ${
              this.borderRadiusFull ? "1000px" : "20px"
            }; background-color: var(--wui-color-modal-bg);`),
            o.qy`${this.templateVisual()}`
          );
        }
        templateVisual() {
          var e;
          return this.imageSrc
            ? o.qy`<wui-image src=${this.imageSrc} alt=${
                null !== (e = this.alt) && void 0 !== e ? e : ""
              }></wui-image>`
            : o.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
        }
      };
      ($a.styles = [w.W5, ka]),
        Ca([(0, a.MZ)()], $a.prototype, "imageSrc", void 0),
        Ca([(0, a.MZ)()], $a.prototype, "alt", void 0),
        Ca(
          [(0, a.MZ)({ type: Boolean })],
          $a.prototype,
          "borderRadiusFull",
          void 0
        ),
        ($a = Ca([(0, f.E)("wui-visual-thumbnail")], $a));
      const Ia = o.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
      var Ea = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Ta = class extends o.WF {
        constructor() {
          var e, t;
          super(...arguments),
            (this.dappImageUrl =
              null === (e = l.H.state.metadata) || void 0 === e
                ? void 0
                : e.icons),
            (this.walletImageUrl =
              null === (t = d.U.state.connectedWalletInfo) || void 0 === t
                ? void 0
                : t.icon);
        }
        firstUpdated() {
          var e;
          const t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelectorAll("wui-visual-thumbnail");
          null !== t &&
            void 0 !== t &&
            t[0] &&
            this.createAnimation(t[0], "translate(18px)"),
            null !== t &&
              void 0 !== t &&
              t[1] &&
              this.createAnimation(t[1], "translate(-18px)");
        }
        render() {
          var e;
          return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${
          null === (e = this.dappImageUrl) || void 0 === e ? void 0 : e[0]
        }
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${
        this.walletImageUrl
      }></wui-visual-thumbnail>
    `;
        }
        createAnimation(e, t) {
          e.animate([{ transform: "translateX(0px)" }, { transform: t }], {
            duration: 1600,
            easing: "cubic-bezier(0.56, 0, 0.48, 1)",
            direction: "alternate",
            iterations: 1 / 0,
          });
        }
      };
      (Ta.styles = Ia),
        (Ta = Ea([(0, h.EM)("w3m-siwx-sign-message-thumbnails")], Ta));
      var Sa = function (e, t, i, o) {
        var a,
          n = arguments.length,
          r =
            n < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          r = Reflect.decorate(e, t, i, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
        return n > 3 && r && Object.defineProperty(t, i, r), r;
      };
      let Aa = class extends o.WF {
        constructor() {
          var e;
          super(...arguments),
            (this.dappName =
              null === (e = l.H.state.metadata) || void 0 === e
                ? void 0
                : e.name),
            (this.isCancelling = !1),
            (this.isSigning = !1);
        }
        render() {
          var e;
          return o.qy`
      <wui-flex justifyContent="center" .padding=${["2xl", "0", "xxl", "0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0", "4xl", "l", "4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${
            null !== (e = this.dappName) && void 0 !== e ? e : "Dapp"
          } needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0", "3xl", "l", "3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[
        "l",
        "xl",
        "xl",
        "xl",
      ]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? "Cancelling..." : "Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? "Signing..." : "Sign"}
        </wui-button>
      </wui-flex>
    `;
        }
        async onSign() {
          (this.isSigning = !0),
            await xa.U.requestSignMessage().finally(
              () => (this.isSigning = !1)
            );
        }
        async onCancel() {
          (this.isCancelling = !0),
            await xa.U.cancelSignMessage().finally(
              () => (this.isCancelling = !1)
            );
        }
      };
      Sa([(0, a.wk)()], Aa.prototype, "isCancelling", void 0),
        Sa([(0, a.wk)()], Aa.prototype, "isSigning", void 0),
        (Aa = Sa([(0, h.EM)("w3m-siwx-sign-message-view")], Aa));
    },
  },
]);
