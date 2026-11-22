"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [3510],
  {
    43510: (e, t, i) => {
      i.r(t),
        i.d(t, {
          W3mSendSelectTokenView: () => D,
          W3mWalletSendPreviewView: () => G,
          W3mWalletSendView: () => I,
        });
      var n = i(21579),
        r = i(4742),
        o = i(21702),
        s = i(39089),
        a = i(67415),
        l = i(16733),
        u = i(63157),
        c = i(15694),
        d = (i(61769), i(49986), i(83908), i(22557)),
        h = i(73082);
      i(38696), i(94110);
      const p = n.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;
      var w = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let g = class extends n.WF {
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, d._)()),
            (this.instructionElementRef = (0, d._)()),
            (this.instructionHidden = Boolean(this.value)),
            (this.pasting = !1),
            (this.onDebouncedSearch = l.w.debounce(async (e) => {
              const t = await h.x.getEnsAddress(e);
              if ((o.R.setLoading(!1), t)) {
                o.R.setReceiverProfileName(e), o.R.setReceiverAddress(t);
                const i = await h.x.getEnsAvatar(e);
                o.R.setReceiverProfileImageUrl(i || void 0);
              } else
                o.R.setReceiverAddress(e),
                  o.R.setReceiverProfileName(void 0),
                  o.R.setReceiverProfileImageUrl(void 0);
            }));
        }
        firstUpdated() {
          this.value && (this.instructionHidden = !0), this.checkHidden();
        }
        render() {
          var e, t;
          return n.qy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl", "l", "xl", "l"]}
    >
      <wui-text
        ${(0, d.K)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0, d.K)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${null !== (e = this.value) && void 0 !== e ? e : ""}
        autocomplete="off"
      >
${null !== (t = this.value) && void 0 !== t ? t : ""}</textarea
      >
    </wui-flex>`;
        }
        async focusInput() {
          var e;
          this.instructionElementRef.value &&
            ((this.instructionHidden = !0),
            await this.toggleInstructionFocus(!1),
            (this.instructionElementRef.value.style.pointerEvents = "none"),
            null === (e = this.inputElementRef.value) ||
              void 0 === e ||
              e.focus(),
            this.inputElementRef.value &&
              (this.inputElementRef.value.selectionStart =
                this.inputElementRef.value.selectionEnd =
                  this.inputElementRef.value.value.length));
        }
        async focusInstruction() {
          var e;
          this.instructionElementRef.value &&
            ((this.instructionHidden = !1),
            await this.toggleInstructionFocus(!0),
            (this.instructionElementRef.value.style.pointerEvents = "auto"),
            null === (e = this.inputElementRef.value) ||
              void 0 === e ||
              e.blur());
        }
        async toggleInstructionFocus(e) {
          this.instructionElementRef.value &&
            (await this.instructionElementRef.value.animate(
              [{ opacity: e ? 0 : 1 }, { opacity: e ? 1 : 0 }],
              { duration: 100, easing: "ease", fill: "forwards" }
            ).finished);
        }
        onBoxClick() {
          this.value || this.instructionHidden || this.focusInput();
        }
        onBlur() {
          this.value ||
            !this.instructionHidden ||
            this.pasting ||
            this.focusInstruction();
        }
        checkHidden() {
          this.instructionHidden && this.focusInput();
        }
        async onPasteClick() {
          this.pasting = !0;
          const e = await navigator.clipboard.readText();
          o.R.setReceiverAddress(e), this.focusInput();
        }
        onInputChange(e) {
          this.pasting = !1;
          const t = e.target;
          t.value && !this.instructionHidden && this.focusInput(),
            o.R.setLoading(!0),
            this.onDebouncedSearch(t.value);
        }
      };
      (g.styles = p),
        w([(0, r.MZ)()], g.prototype, "value", void 0),
        w([(0, r.wk)()], g.prototype, "instructionHidden", void 0),
        w([(0, r.wk)()], g.prototype, "pasting", void 0),
        (g = w([(0, c.EM)("w3m-input-address")], g));
      var v = i(23393),
        f = i(64066);
      const m = /[.*+?^${}()|[\]\\]/gu,
        k = /[0-9,.]/u;
      var x = i(58961),
        b = i(15986);
      const y = n.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;
      var $ = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let R = class extends n.WF {
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, d._)()),
            (this.disabled = !1),
            (this.value = ""),
            (this.placeholder = "0");
        }
        render() {
          var e, t;
          return (
            null !== (e = this.inputElementRef) &&
              void 0 !== e &&
              e.value &&
              this.value &&
              (this.inputElementRef.value.value = this.value),
            n.qy`<input
      ${(0, d.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${null !== (t = this.value) && void 0 !== t ? t : ""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `
          );
        }
        dispatchInputChangeEvent(e) {
          var t, i;
          const n = e.data;
          if (
            n &&
            null !== (t = this.inputElementRef) &&
            void 0 !== t &&
            t.value
          )
            if ("," === n) {
              const e = this.inputElementRef.value.value.replace(",", ".");
              (this.inputElementRef.value.value = e),
                (this.value = `${this.value}${e}`);
            } else
              k.test(n) ||
                (this.inputElementRef.value.value = this.value.replace(
                  new RegExp(n.replace(m, "\\$&"), "gu"),
                  ""
                ));
          this.dispatchEvent(
            new CustomEvent("inputChange", {
              detail:
                null === (i = this.inputElementRef.value) || void 0 === i
                  ? void 0
                  : i.value,
              bubbles: !0,
              composed: !0,
            })
          );
        }
      };
      (R.styles = [x.W5, x.fD, y]),
        $([(0, r.MZ)({ type: Boolean })], R.prototype, "disabled", void 0),
        $([(0, r.MZ)({ type: String })], R.prototype, "value", void 0),
        $([(0, r.MZ)({ type: String })], R.prototype, "placeholder", void 0),
        (R = $([(0, b.E)("wui-input-amount")], R));
      i(52770), i(2252);
      const P = n.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;
      var A = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let T = class extends n.WF {
        render() {
          return n.qy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl", "s", "l", "l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token && !0}
          .value=${this.sendTokenAmount ? String(this.sendTokenAmount) : ""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`;
        }
        buttonTemplate() {
          return this.token
            ? n.qy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`
            : n.qy`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`;
        }
        handleSelectButtonClick() {
          a.I.push("WalletSendSelectToken");
        }
        sendValueTemplate() {
          if (this.token && this.sendTokenAmount) {
            const e = this.token.price * this.sendTokenAmount;
            return n.qy`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${
          e ? `$${c.Zv.formatNumberToLocalString(e, 2)}` : "Incorrect value"
        }</wui-text
      >`;
          }
          return null;
        }
        maxAmountTemplate() {
          return this.token
            ? this.sendTokenAmount &&
              this.sendTokenAmount > Number(this.token.quantity.numeric)
              ? n.qy` <wui-text variant="small-400" color="error-100">
          ${c.Zv.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
        </wui-text>`
              : n.qy` <wui-text variant="small-400" color="fg-200">
        ${c.Zv.roundNumber(Number(this.token.quantity.numeric), 6, 5)}
      </wui-text>`
            : null;
        }
        actionTemplate() {
          return this.token
            ? this.sendTokenAmount &&
              this.sendTokenAmount > Number(this.token.quantity.numeric)
              ? n.qy`<wui-link @click=${this.onBuyClick.bind(
                  this
                )}>Buy</wui-link>`
              : n.qy`<wui-link @click=${this.onMaxClick.bind(
                  this
                )}>Max</wui-link>`
            : null;
        }
        onInputChange(e) {
          o.R.setTokenAmount(e.detail);
        }
        onMaxClick() {
          if (this.token && "undefined" !== typeof this.gasPrice) {
            const e =
                void 0 === this.token.address ||
                Object.values(f.oU.NATIVE_TOKEN_ADDRESS).some((e) => {
                  var t;
                  return (
                    (null === (t = this.token) || void 0 === t
                      ? void 0
                      : t.address) === e
                  );
                }),
              t = v.S.bigNumber(this.gasPrice).div(
                v.S.bigNumber(10).pow(Number(this.token.quantity.decimals))
              ),
              i = e
                ? v.S.bigNumber(this.token.quantity.numeric).minus(t)
                : v.S.bigNumber(this.token.quantity.numeric);
            o.R.setTokenAmount(Number(i.toFixed(20)));
          }
        }
        onBuyClick() {
          a.I.push("OnRampProviders");
        }
      };
      (T.styles = P),
        A([(0, r.MZ)({ type: Object })], T.prototype, "token", void 0),
        A(
          [(0, r.MZ)({ type: Number })],
          T.prototype,
          "sendTokenAmount",
          void 0
        ),
        A([(0, r.MZ)({ type: Number })], T.prototype, "gasPriceInUSD", void 0),
        A([(0, r.MZ)({ type: Number })], T.prototype, "gasPrice", void 0),
        (T = A([(0, c.EM)("w3m-input-token")], T));
      const S = n.AH`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;
      var C = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let I = class extends n.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.token = o.R.state.token),
            (this.sendTokenAmount = o.R.state.sendTokenAmount),
            (this.receiverAddress = o.R.state.receiverAddress),
            (this.receiverProfileName = o.R.state.receiverProfileName),
            (this.loading = o.R.state.loading),
            (this.gasPriceInUSD = o.R.state.gasPriceInUSD),
            (this.gasPrice = o.R.state.gasPrice),
            (this.message = "Preview Send"),
            this.fetchNetworkPrice(),
            this.fetchBalances(),
            this.unsubscribe.push(
              o.R.subscribe((e) => {
                (this.token = e.token),
                  (this.sendTokenAmount = e.sendTokenAmount),
                  (this.receiverAddress = e.receiverAddress),
                  (this.gasPriceInUSD = e.gasPriceInUSD),
                  (this.receiverProfileName = e.receiverProfileName),
                  (this.loading = e.loading);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return (
            this.getMessage(),
            n.qy` <wui-flex flexDirection="column" .padding=${[
              "0",
              "l",
              "l",
              "l",
            ]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${
            this.receiverProfileName
              ? this.receiverProfileName
              : this.receiverAddress
          }
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l", "0", "0", "0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`
          );
        }
        async fetchBalances() {
          await o.R.fetchTokenBalance(), o.R.fetchNetworkBalance();
        }
        async fetchNetworkPrice() {
          await s.GN.getNetworkTokenPrice();
          const e = await s.GN.getInitialGasPrice();
          null !== e &&
            void 0 !== e &&
            e.gasPrice &&
            null !== e &&
            void 0 !== e &&
            e.gasPriceInUSD &&
            (o.R.setGasPrice(e.gasPrice),
            o.R.setGasPriceInUsd(e.gasPriceInUSD));
        }
        onButtonClick() {
          a.I.push("WalletSendPreview");
        }
        getMessage() {
          var e;
          if (
            ((this.message = "Preview Send"),
            this.receiverAddress &&
              !l.w.isAddress(this.receiverAddress, u.W.state.activeChain) &&
              (this.message = "Invalid Address"),
            this.receiverAddress || (this.message = "Add Address"),
            o.R.hasInsufficientGasFunds() &&
              (this.message = "Insufficient Gas Funds"),
            this.sendTokenAmount &&
              this.token &&
              this.sendTokenAmount > Number(this.token.quantity.numeric) &&
              (this.message = "Insufficient Funds"),
            this.sendTokenAmount || (this.message = "Add Amount"),
            this.sendTokenAmount &&
              null !== (e = this.token) &&
              void 0 !== e &&
              e.price)
          ) {
            this.sendTokenAmount * this.token.price ||
              (this.message = "Incorrect Value");
          }
          this.token || (this.message = "Select Token");
        }
      };
      (I.styles = S),
        C([(0, r.wk)()], I.prototype, "token", void 0),
        C([(0, r.wk)()], I.prototype, "sendTokenAmount", void 0),
        C([(0, r.wk)()], I.prototype, "receiverAddress", void 0),
        C([(0, r.wk)()], I.prototype, "receiverProfileName", void 0),
        C([(0, r.wk)()], I.prototype, "loading", void 0),
        C([(0, r.wk)()], I.prototype, "gasPriceInUSD", void 0),
        C([(0, r.wk)()], I.prototype, "gasPrice", void 0),
        C([(0, r.wk)()], I.prototype, "message", void 0),
        (I = C([(0, c.EM)("w3m-wallet-send-view")], I));
      i(98625), i(92358), i(47340);
      const N = n.AH`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;
      var E = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let D = class extends n.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tokenBalances = o.R.state.tokenBalances),
            (this.search = ""),
            (this.onDebouncedSearch = l.w.debounce((e) => {
              this.search = e;
            })),
            this.unsubscribe.push(
              o.R.subscribe((e) => {
                this.tokenBalances = e.tokenBalances;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return n.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `;
        }
        templateSearchInput() {
          return n.qy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
        }
        templateTokens() {
          var e, t;
          ((this.tokens =
            null === (e = this.tokenBalances) || void 0 === e
              ? void 0
              : e.filter((e) => {
                  var t;
                  return (
                    e.chainId ===
                    (null === (t = u.W.state.activeCaipNetwork) || void 0 === t
                      ? void 0
                      : t.caipNetworkId)
                  );
                })),
          this.search)
            ? (this.filteredTokens =
                null === (t = this.tokenBalances) || void 0 === t
                  ? void 0
                  : t.filter((e) =>
                      e.name.toLowerCase().includes(this.search.toLowerCase())
                    ))
            : (this.filteredTokens = this.tokens);
          return n.qy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0", "s", "0", "s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m", "s", "s", "s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${
            this.filteredTokens && this.filteredTokens.length > 0
              ? this.filteredTokens.map(
                  (e) => n.qy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this, e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`
                )
              : n.qy`<wui-flex
                .padding=${["4xl", "0", "0", "0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
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
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`
          }
        </wui-flex>
      </wui-flex>
    `;
        }
        onBuyClick() {
          a.I.push("OnRampProviders");
        }
        onInputChange(e) {
          this.onDebouncedSearch(e.detail);
        }
        handleTokenClick(e) {
          o.R.setToken(e), o.R.setTokenAmount(void 0), a.I.goBack();
        }
      };
      (D.styles = N),
        E([(0, r.wk)()], D.prototype, "tokenBalances", void 0),
        E([(0, r.wk)()], D.prototype, "tokens", void 0),
        E([(0, r.wk)()], D.prototype, "filteredTokens", void 0),
        E([(0, r.wk)()], D.prototype, "search", void 0),
        (D = E([(0, c.EM)("w3m-wallet-send-select-token-view")], D));
      i(40893), i(32613), i(71543), i(76445), i(81609);
      const j = n.AH`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;
      var q = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let B = class extends n.WF {
        constructor() {
          super(...arguments),
            (this.text = ""),
            (this.address = ""),
            (this.isAddress = !1);
        }
        render() {
          return n.qy`<wui-text variant="large-500" color="fg-100">${
            this.text
          }</wui-text>
      ${this.imageTemplate()}`;
        }
        imageTemplate() {
          return this.isAddress
            ? n.qy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`
            : this.imageSrc
            ? n.qy`<wui-image src=${this.imageSrc}></wui-image>`
            : n.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
        }
      };
      (B.styles = [x.W5, x.fD, j]),
        q([(0, r.MZ)()], B.prototype, "text", void 0),
        q([(0, r.MZ)()], B.prototype, "address", void 0),
        q([(0, r.MZ)()], B.prototype, "imageSrc", void 0),
        q([(0, r.MZ)({ type: Boolean })], B.prototype, "isAddress", void 0),
        (B = q([(0, b.E)("wui-preview-item")], B));
      var O = i(71597),
        U = i(80240);
      const z = n.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;
      var M = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let Z = class extends n.WF {
        constructor() {
          super(...arguments),
            (this.imageSrc = void 0),
            (this.textTitle = ""),
            (this.textValue = void 0);
        }
        render() {
          return n.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${
          this.textValue ? "fg-200" : "fg-100"
        }>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `;
        }
        templateContent() {
          return this.imageSrc
            ? n.qy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`
            : this.textValue
            ? n.qy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`
            : n.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`;
        }
      };
      (Z.styles = [x.W5, x.fD, z]),
        M([(0, r.MZ)()], Z.prototype, "imageSrc", void 0),
        M([(0, r.MZ)()], Z.prototype, "textTitle", void 0),
        M([(0, r.MZ)()], Z.prototype, "textValue", void 0),
        (Z = M([(0, b.E)("wui-list-content")], Z));
      const W = n.AH`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;
      var H = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let F = class extends n.WF {
        render() {
          var e;
          return n.qy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${(0, O.J)(
          c.Zv.formatNumberToLocalString(this.networkFee, 2)
        )}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${c.Zv.getTruncateString({
            string:
              null !== (e = this.receiverAddress) && void 0 !== e ? e : "",
            charsStart: 4,
            charsEnd: 4,
            truncate: "middle",
          })}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`;
        }
        networkTemplate() {
          var e;
          return null !== (e = this.caipNetwork) && void 0 !== e && e.name
            ? n.qy` <wui-list-content
        @click=${() => this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0, O.J)(U.$.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`
            : null;
        }
        onNetworkClick(e) {
          e && a.I.push("Networks", { network: e });
        }
      };
      (F.styles = W),
        H([(0, r.MZ)()], F.prototype, "receiverAddress", void 0),
        H([(0, r.MZ)({ type: Object })], F.prototype, "caipNetwork", void 0),
        H([(0, r.MZ)({ type: Number })], F.prototype, "networkFee", void 0),
        (F = H([(0, c.EM)("w3m-wallet-send-details")], F));
      const V = n.AH`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;
      var L = function (e, t, i, n) {
        var r,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, i))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (r = e[a]) &&
              (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let G = class extends n.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.token = o.R.state.token),
            (this.sendTokenAmount = o.R.state.sendTokenAmount),
            (this.receiverAddress = o.R.state.receiverAddress),
            (this.receiverProfileName = o.R.state.receiverProfileName),
            (this.receiverProfileImageUrl = o.R.state.receiverProfileImageUrl),
            (this.gasPriceInUSD = o.R.state.gasPriceInUSD),
            (this.caipNetwork = u.W.state.activeCaipNetwork),
            this.unsubscribe.push(
              o.R.subscribe((e) => {
                (this.token = e.token),
                  (this.sendTokenAmount = e.sendTokenAmount),
                  (this.receiverAddress = e.receiverAddress),
                  (this.gasPriceInUSD = e.gasPriceInUSD),
                  (this.receiverProfileName = e.receiverProfileName),
                  (this.receiverProfileImageUrl = e.receiverProfileImageUrl);
              }),
              u.W.subscribeKey(
                "activeCaipNetwork",
                (e) => (this.caipNetwork = e)
              )
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e, t, i, r;
          return n.qy` <wui-flex flexDirection="column" .padding=${[
            "0",
            "l",
            "l",
            "l",
          ]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${[
        "0",
        "xs",
        "0",
        "xs",
      ]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${
              this.sendTokenAmount
                ? c.Zv.roundNumber(this.sendTokenAmount, 6, 5)
                : "unknown"
            } ${null === (e = this.token) || void 0 === e ? void 0 : e.symbol}"
            .imageSrc=${
              null === (t = this.token) || void 0 === t ? void 0 : t.iconUrl
            }
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${
              this.receiverProfileName
                ? c.Zv.getTruncateString({
                    string: this.receiverProfileName,
                    charsStart: 20,
                    charsEnd: 0,
                    truncate: "end",
                  })
                : c.Zv.getTruncateString({
                    string: this.receiverAddress ? this.receiverAddress : "",
                    charsStart: 4,
                    charsEnd: 4,
                    truncate: "middle",
                  })
            }"
            address=${
              null !== (i = this.receiverAddress) && void 0 !== i ? i : ""
            }
            .imageSrc=${
              null !== (r = this.receiverProfileImageUrl) && void 0 !== r
                ? r
                : void 0
            }
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl", "0", "0", "0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${[
          "s",
          "0",
          "0",
          "0",
        ]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${[
          "l",
          "0",
          "0",
          "0",
        ]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`;
        }
        sendValueTemplate() {
          if (this.token && this.sendTokenAmount) {
            const e = this.token.price * this.sendTokenAmount;
            return n.qy`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`;
          }
          return null;
        }
        onSendClick() {
          o.R.sendToken();
        }
        onCancelClick() {
          a.I.goBack();
        }
      };
      (G.styles = V),
        L([(0, r.wk)()], G.prototype, "token", void 0),
        L([(0, r.wk)()], G.prototype, "sendTokenAmount", void 0),
        L([(0, r.wk)()], G.prototype, "receiverAddress", void 0),
        L([(0, r.wk)()], G.prototype, "receiverProfileName", void 0),
        L([(0, r.wk)()], G.prototype, "receiverProfileImageUrl", void 0),
        L([(0, r.wk)()], G.prototype, "gasPriceInUSD", void 0),
        L([(0, r.wk)()], G.prototype, "caipNetwork", void 0),
        (G = L([(0, c.EM)("w3m-wallet-send-preview-view")], G));
    },
  },
]);
