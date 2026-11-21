"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [3253],
  {
    23253: (e, t, r) => {
      r.r(t), r.d(t, { W3mWalletReceiveView: () => x });
      var i = r(21579),
        o = r(4742),
        s = r(71597),
        a = r(23871),
        n = r(63157),
        c = r(83454),
        l = r(80240),
        d = r(75673),
        u = r(67415),
        w = r(16733),
        p = r(15694),
        h = (r(18805), r(40893), r(32613), r(71543), r(76445), r(58961)),
        f = r(15986);
      const v = i.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;
      var g = function (e, t, r, i) {
        var o,
          s = arguments.length,
          a =
            s < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, r, i);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (o = e[n]) &&
              (a = (s < 3 ? o(a) : s > 3 ? o(t, r, a) : o(t, r)) || a);
        return s > 3 && a && Object.defineProperty(t, r, a), a;
      };
      let m = class extends i.WF {
        constructor() {
          super(...arguments), (this.networkImages = [""]), (this.text = "");
        }
        render() {
          return i.qy`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `;
        }
        networksTemplate() {
          const e = this.networkImages.slice(0, 5);
          return i.qy` <wui-flex class="networks">
      ${
        null === e || void 0 === e
          ? void 0
          : e.map(
              (e) =>
                i.qy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`
            )
      }
    </wui-flex>`;
        }
      };
      (m.styles = [h.W5, h.fD, v]),
        g([(0, o.MZ)({ type: Array })], m.prototype, "networkImages", void 0),
        g([(0, o.MZ)()], m.prototype, "text", void 0),
        (m = g([(0, f.E)("wui-compatible-network")], m));
      r(49986), r(15478), r(94110);
      var k = r(45511);
      const y = i.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;
      var b = function (e, t, r, i) {
        var o,
          s = arguments.length,
          a =
            s < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, r, i);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (o = e[n]) &&
              (a = (s < 3 ? o(a) : s > 3 ? o(t, r, a) : o(t, r)) || a);
        return s > 3 && a && Object.defineProperty(t, r, a), a;
      };
      let x = class extends i.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.address = a.U.state.address),
            (this.profileName = a.U.state.profileName),
            (this.network = n.W.state.activeCaipNetwork),
            (this.preferredAccountTypes = a.U.state.preferredAccountTypes),
            this.unsubscribe.push(
              a.U.subscribe((e) => {
                e.address
                  ? ((this.address = e.address),
                    (this.profileName = e.profileName),
                    (this.preferredAccountTypes = e.preferredAccountTypes))
                  : c.P.showError("Account not found");
              }),
              n.W.subscribeKey("activeCaipNetwork", (e) => {
                null !== e && void 0 !== e && e.id && (this.network = e);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          if (!this.address)
            throw new Error("w3m-wallet-receive-view: No account provided");
          const e = l.$.getNetworkImage(this.network);
          return i.qy` <wui-flex
      flexDirection="column"
      .padding=${["0", "l", "l", "l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${p.Zv.getTruncateString({
          string: this.profileName || this.address || "",
          charsStart: this.profileName ? 18 : 4,
          charsEnd: this.profileName ? 0 : 4,
          truncate: this.profileName ? "end" : "middle",
        })}
        icon="copy"
        size="sm"
        imageSrc=${e || ""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l", "0", "0", "0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${d.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0, s.J)(d.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
        }
        networkTemplate() {
          var e, t;
          const r = n.W.getAllRequestedCaipNetworks(),
            o = n.W.checkIfSmartAccountEnabled(),
            s = n.W.state.activeCaipNetwork;
          var a;
          if (
            (null === (e = this.preferredAccountTypes) || void 0 === e
              ? void 0
              : e[null === s || void 0 === s ? void 0 : s.chainNamespace]) ===
              k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT &&
            o
          )
            return s
              ? i.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[
          null !== (a = l.$.getNetworkImage(s)) && void 0 !== a ? a : "",
        ]}
      ></wui-compatible-network>`
              : null;
          const c = (
            null === r ||
            void 0 === r ||
            null ===
              (t = r.filter((e) => {
                var t;
                return null === e ||
                  void 0 === e ||
                  null === (t = e.assets) ||
                  void 0 === t
                  ? void 0
                  : t.imageId;
              })) ||
            void 0 === t
              ? void 0
              : t.slice(0, 5)
          )
            .map(l.$.getNetworkImage)
            .filter(Boolean);
          return i.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${c}
    ></wui-compatible-network>`;
        }
        onReceiveClick() {
          u.I.push("WalletCompatibleNetworks");
        }
        onCopyClick() {
          try {
            this.address &&
              (w.w.copyToClopboard(this.address),
              c.P.showSuccess("Address copied"));
          } catch {
            c.P.showError("Failed to copy");
          }
        }
      };
      (x.styles = y),
        b([(0, o.wk)()], x.prototype, "address", void 0),
        b([(0, o.wk)()], x.prototype, "profileName", void 0),
        b([(0, o.wk)()], x.prototype, "network", void 0),
        b([(0, o.wk)()], x.prototype, "preferredAccountTypes", void 0),
        (x = b([(0, p.EM)("w3m-wallet-receive-view")], x));
    },
  },
]);
