"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [6548],
  {
    6548: (e, t, i) => {
      i.r(t),
        i.d(t, {
          W3mConnectSocialsView: () => f,
          W3mConnectingFarcasterView: () => L,
          W3mConnectingSocialView: () => O,
        });
      var o = i(21579),
        r = i(4742),
        a = i(71597),
        s = i(39965),
        n = i(458),
        c = i(15694),
        l = (i(49986), i(168), i(24544), i(71898)),
        u = i(67415),
        d = i(64066),
        h = i(48376);
      i(29991);
      const p = o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
      var w = function (e, t, i, o) {
        var r,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, o);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (r = e[n]) &&
              (s = (a < 3 ? r(s) : a > 3 ? r(t, i, s) : r(t, i)) || s);
        return a > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let v = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = l.a.state.connectors),
            (this.authConnector = this.connectors.find(
              (e) => "AUTH" === e.type
            )),
            (this.features = n.H.state.features),
            this.unsubscribe.push(
              l.a.subscribeKey("connectors", (e) => {
                (this.connectors = e),
                  (this.authConnector = this.connectors.find(
                    (e) => "AUTH" === e.type
                  ));
              }),
              n.H.subscribeKey("features", (e) => (this.features = e))
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e, t;
          let i =
            (null === (e = this.features) || void 0 === e
              ? void 0
              : e.socials) || [];
          const r = Boolean(this.authConnector),
            s = null === (t = i) || void 0 === t ? void 0 : t.length,
            n = "ConnectSocials" === u.I.state.view;
          return (r && s) || n
            ? (n && !s && (i = d.oU.DEFAULT_FEATURES.socials),
              o.qy` <wui-flex flexDirection="column" gap="xs">
      ${i.map(
        (e) => o.qy`<wui-list-social
            @click=${() => {
              this.onSocialClick(e);
            }}
            name=${e}
            logo=${e}
            tabIdx=${(0, a.J)(this.tabIdx)}
          ></wui-list-social>`
      )}
    </wui-flex>`)
            : null;
        }
        async onSocialClick(e) {
          e && (await (0, h.Up)(e));
        }
      };
      (v.styles = p),
        w([(0, r.MZ)()], v.prototype, "tabIdx", void 0),
        w([(0, r.wk)()], v.prototype, "connectors", void 0),
        w([(0, r.wk)()], v.prototype, "authConnector", void 0),
        w([(0, r.wk)()], v.prototype, "features", void 0),
        (v = w([(0, c.EM)("w3m-social-login-list")], v));
      const g = o.AH`
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
      var m = function (e, t, i, o) {
        var r,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, o);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (r = e[n]) &&
              (s = (a < 3 ? r(s) : a > 3 ? r(t, i, s) : r(t, i)) || s);
        return a > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let f = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.checked = s.o.state.isLegalCheckboxChecked),
            this.unsubscribe.push(
              s.o.subscribeKey("isLegalCheckboxChecked", (e) => {
                this.checked = e;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e;
          const { termsConditionsUrl: t, privacyPolicyUrl: i } = n.H.state,
            r =
              null === (e = n.H.state.features) || void 0 === e
                ? void 0
                : e.legalCheckbox,
            s = Boolean(t || i) && Boolean(r),
            c = s && !this.checked,
            l = c ? -1 : void 0;
          return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${s ? ["0", "s", "s", "s"] : "s"}
        gap="xs"
        class=${(0, a.J)(c ? "disabled" : void 0)}
      >
        <w3m-social-login-list tabIdx=${(0, a.J)(l)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
        }
      };
      (f.styles = g),
        m([(0, r.wk)()], f.prototype, "checked", void 0),
        (f = m([(0, c.EM)("w3m-connect-socials-view")], f));
      var b = i(23871),
        x = i(63157),
        y = i(37687),
        C = i(21369),
        k = i(73082),
        E = i(83454),
        P = i(18933),
        I = i(75673),
        S = (i(83908), i(67029), i(29755), i(94110), i(2195));
      const $ = o.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`;
      var U = function (e, t, i, o) {
        var r,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, o);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (r = e[n]) &&
              (s = (a < 3 ? r(s) : a > 3 ? r(t, i, s) : r(t, i)) || s);
        return a > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let O = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.socialProvider = b.U.state.socialProvider),
            (this.socialWindow = b.U.state.socialWindow),
            (this.error = !1),
            (this.connecting = !1),
            (this.message = "Connect in the provider window"),
            (this.authConnector = l.a.getAuthConnector()),
            (this.handleSocialConnection = async (e) => {
              var t;
              if (null !== (t = e.data) && void 0 !== t && t.resultUri)
                if (e.origin === S.o.SECURE_SITE_ORIGIN) {
                  window.removeEventListener(
                    "message",
                    this.handleSocialConnection,
                    !1
                  );
                  try {
                    if (this.authConnector && !this.connecting) {
                      this.socialWindow &&
                        (this.socialWindow.close(),
                        b.U.setSocialWindow(void 0, x.W.state.activeChain)),
                        (this.connecting = !0),
                        this.updateMessage();
                      const t = e.data.resultUri;
                      this.socialProvider &&
                        y.E.sendEvent({
                          type: "track",
                          event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                          properties: { provider: this.socialProvider },
                        }),
                        await this.authConnector.provider.connectSocial(t),
                        this.socialProvider &&
                          (C.i.setConnectedSocialProvider(this.socialProvider),
                          await k.x.connectExternal(
                            this.authConnector,
                            this.authConnector.chain
                          ),
                          y.E.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_SUCCESS",
                            properties: { provider: this.socialProvider },
                          }));
                    }
                  } catch (i) {
                    (this.error = !0),
                      this.updateMessage(),
                      this.socialProvider &&
                        y.E.sendEvent({
                          type: "track",
                          event: "SOCIAL_LOGIN_ERROR",
                          properties: { provider: this.socialProvider },
                        });
                  }
                } else
                  u.I.goBack(),
                    E.P.showError("Untrusted Origin"),
                    this.socialProvider &&
                      y.E.sendEvent({
                        type: "track",
                        event: "SOCIAL_LOGIN_ERROR",
                        properties: { provider: this.socialProvider },
                      });
            }),
            this.unsubscribe.push(
              b.U.subscribe((e) => {
                e.socialProvider && (this.socialProvider = e.socialProvider),
                  e.socialWindow && (this.socialWindow = e.socialWindow),
                  e.address &&
                    (P.W.state.open || n.H.state.enableEmbedded) &&
                    P.W.close();
              })
            ),
            this.authConnector && this.connectSocial();
        }
        disconnectedCallback() {
          var e;
          this.unsubscribe.forEach((e) => e()),
            window.removeEventListener(
              "message",
              this.handleSocialConnection,
              !1
            ),
            null === (e = this.socialWindow) || void 0 === e || e.close(),
            b.U.setSocialWindow(void 0, x.W.state.activeChain);
        }
        render() {
          var e;
          return o.qy`
      <wui-flex
        data-error=${(0, a.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0, a.J)(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${
              null !== (e = this.socialProvider) && void 0 !== e ? e : "Social"
            }</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${
            this.error ? "error-100" : "fg-200"
          }
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `;
        }
        loaderTemplate() {
          const e = I.W.state.themeVariables["--w3m-border-radius-master"],
            t = e ? parseInt(e.replace("px", ""), 10) : 4;
          return o.qy`<wui-loading-thumbnail radius=${
            9 * t
          }></wui-loading-thumbnail>`;
        }
        connectSocial() {
          const e = setInterval(() => {
            var t;
            null !== (t = this.socialWindow) &&
              void 0 !== t &&
              t.closed &&
              (this.connecting ||
                "ConnectingSocial" !== u.I.state.view ||
                (this.socialProvider &&
                  y.E.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_CANCELED",
                    properties: { provider: this.socialProvider },
                  }),
                u.I.goBack()),
              clearInterval(e));
          }, 1e3);
          window.addEventListener("message", this.handleSocialConnection, !1);
        }
        updateMessage() {
          this.error
            ? (this.message = "Something went wrong")
            : this.connecting
            ? (this.message = "Retrieving user data")
            : (this.message = "Connect in the provider window");
        }
      };
      (O.styles = $),
        U([(0, r.wk)()], O.prototype, "socialProvider", void 0),
        U([(0, r.wk)()], O.prototype, "socialWindow", void 0),
        U([(0, r.wk)()], O.prototype, "error", void 0),
        U([(0, r.wk)()], O.prototype, "connecting", void 0),
        U([(0, r.wk)()], O.prototype, "message", void 0),
        (O = U([(0, c.EM)("w3m-connecting-social-view")], O));
      var R = i(16733);
      i(61769), i(38696), i(52770), i(15478), i(65046);
      const T = o.AH`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;
      var q = function (e, t, i, o) {
        var r,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, i))
              : o;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, o);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (r = e[n]) &&
              (s = (a < 3 ? r(s) : a > 3 ? r(t, i, s) : r(t, i)) || s);
        return a > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let L = class extends o.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.timeout = void 0),
            (this.socialProvider = b.U.state.socialProvider),
            (this.uri = b.U.state.farcasterUrl),
            (this.ready = !1),
            (this.loading = !1),
            (this.authConnector = l.a.getAuthConnector()),
            (this.forceUpdate = () => {
              this.requestUpdate();
            }),
            this.unsubscribe.push(
              b.U.subscribeKey("farcasterUrl", (e) => {
                e && ((this.uri = e), this.connectFarcaster());
              }),
              b.U.subscribeKey("socialProvider", (e) => {
                e && (this.socialProvider = e);
              })
            ),
            window.addEventListener("resize", this.forceUpdate);
        }
        disconnectedCallback() {
          super.disconnectedCallback(),
            clearTimeout(this.timeout),
            window.removeEventListener("resize", this.forceUpdate);
        }
        render() {
          return this.onRenderProxy(), o.qy`${this.platformTemplate()}`;
        }
        platformTemplate() {
          return R.w.isMobile()
            ? o.qy`${this.mobileTemplate()}`
            : o.qy`${this.desktopTemplate()}`;
        }
        desktopTemplate() {
          return this.loading
            ? o.qy`${this.loadingTemplate()}`
            : o.qy`${this.qrTemplate()}`;
        }
        qrTemplate() {
          return o.qy` <wui-flex
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
    </wui-flex>`;
        }
        loadingTemplate() {
          return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `;
        }
        mobileTemplate() {
          return o.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl", "xl", "xl", "xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`;
        }
        loaderTemplate() {
          const e = I.W.state.themeVariables["--w3m-border-radius-master"],
            t = e ? parseInt(e.replace("px", ""), 10) : 4;
          return o.qy`<wui-loading-thumbnail radius=${
            9 * t
          }></wui-loading-thumbnail>`;
        }
        async connectFarcaster() {
          if (this.authConnector)
            try {
              var e;
              await (null === (e = this.authConnector) || void 0 === e
                ? void 0
                : e.provider.connectFarcaster()),
                this.socialProvider &&
                  (C.i.setConnectedSocialProvider(this.socialProvider),
                  y.E.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                    properties: { provider: this.socialProvider },
                  })),
                (this.loading = !0),
                await k.x.connectExternal(
                  this.authConnector,
                  this.authConnector.chain
                ),
                this.socialProvider &&
                  y.E.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_SUCCESS",
                    properties: { provider: this.socialProvider },
                  }),
                (this.loading = !1),
                P.W.close();
            } catch (t) {
              this.socialProvider &&
                y.E.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_ERROR",
                  properties: { provider: this.socialProvider },
                }),
                u.I.goBack(),
                E.P.showError(t);
            }
        }
        mobileLinkTemplate() {
          return o.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri || this.loading}
      @click=${() => {
        this.uri && R.w.openHref(this.uri, "_blank");
      }}
    >
      Open farcaster</wui-button
    >`;
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
          const e = this.getBoundingClientRect().width - 40;
          return o.qy` <wui-qr-code
      size=${e}
      theme=${I.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0, a.J)(I.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`;
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
        onCopyUri() {
          try {
            this.uri &&
              (R.w.copyToClopboard(this.uri), E.P.showSuccess("Link copied"));
          } catch {
            E.P.showError("Failed to copy");
          }
        }
      };
      (L.styles = T),
        q([(0, r.wk)()], L.prototype, "socialProvider", void 0),
        q([(0, r.wk)()], L.prototype, "uri", void 0),
        q([(0, r.wk)()], L.prototype, "ready", void 0),
        q([(0, r.wk)()], L.prototype, "loading", void 0),
        (L = q([(0, c.EM)("w3m-connecting-farcaster-view")], L));
    },
  },
]);
