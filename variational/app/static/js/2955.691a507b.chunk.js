"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [2955],
  {
    44170: (e, t, i) => {
      i.r(t),
        i.d(t, {
          W3mBuyInProgressView: () => G,
          W3mOnRampActivityView: () => f,
          W3mOnRampProvidersView: () => P.G,
          W3mOnrampFiatSelectView: () => T,
          W3mOnrampTokensView: () => $,
          W3mOnrampWidget: () => J,
          W3mWhatIsABuyView: () => N,
        });
      var r = i(21579),
        a = i(4742),
        o = i(71597),
        s = i(88112),
        n = i(68779),
        c = i(52467),
        l = i(43136),
        u = i(23871),
        d = i(458),
        p = i(15694),
        h = (i(49986), i(94110), i(72444), i(69084));
      i(83908), i(84160), i(47633);
      const m = r.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;
      var w = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let y = class extends r.WF {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.color = "inherit"),
            (this.label = "Bought"),
            (this.purchaseValue = ""),
            (this.purchaseCurrency = ""),
            (this.date = ""),
            (this.completed = !1),
            (this.inProgress = !1),
            (this.failed = !1),
            (this.onClick = null),
            (this.symbol = "");
        }
        firstUpdated() {
          this.icon || this.fetchTokenImage();
        }
        render() {
          return r.qy`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${
              this.label
            }</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${
          this.inProgress
            ? r.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`
            : r.qy`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`
        }
      </wui-flex>
    `;
        }
        async fetchTokenImage() {
          await h.N._fetchTokenImage(this.purchaseCurrency);
        }
        statusIconTemplate() {
          return this.inProgress
            ? null
            : this.completed
            ? this.boughtIconTemplate()
            : this.errorIconTemplate();
        }
        errorIconTemplate() {
          return r.qy`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
        }
        imageTemplate() {
          const e =
            this.icon ||
            `https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;
          return r.qy`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`;
        }
        boughtIconTemplate() {
          return r.qy`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`;
        }
      };
      (y.styles = [m]),
        w([(0, a.MZ)({ type: Boolean })], y.prototype, "disabled", void 0),
        w([(0, a.MZ)()], y.prototype, "color", void 0),
        w([(0, a.MZ)()], y.prototype, "label", void 0),
        w([(0, a.MZ)()], y.prototype, "purchaseValue", void 0),
        w([(0, a.MZ)()], y.prototype, "purchaseCurrency", void 0),
        w([(0, a.MZ)()], y.prototype, "date", void 0),
        w([(0, a.MZ)({ type: Boolean })], y.prototype, "completed", void 0),
        w([(0, a.MZ)({ type: Boolean })], y.prototype, "inProgress", void 0),
        w([(0, a.MZ)({ type: Boolean })], y.prototype, "failed", void 0),
        w([(0, a.MZ)()], y.prototype, "onClick", void 0),
        w([(0, a.MZ)()], y.prototype, "symbol", void 0),
        w([(0, a.MZ)()], y.prototype, "icon", void 0),
        (y = w([(0, p.EM)("w3m-onramp-activity-item")], y));
      const g = r.AH`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;
      var v = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let f = class extends r.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedOnRampProvider = n.aG.state.selectedProvider),
            (this.loading = !1),
            (this.coinbaseTransactions = c.W.state.coinbaseTransactions),
            (this.tokenImages = l.j.state.tokenImages),
            this.unsubscribe.push(
              n.aG.subscribeKey("selectedProvider", (e) => {
                this.selectedOnRampProvider = e;
              }),
              l.j.subscribeKey("tokenImages", (e) => (this.tokenImages = e)),
              () => {
                clearTimeout(this.refetchTimeout);
              },
              c.W.subscribe((e) => {
                this.coinbaseTransactions = { ...e.coinbaseTransactions };
              })
            ),
            c.W.clearCursor(),
            this.fetchTransactions();
        }
        render() {
          return r.qy`
      <wui-flex flexDirection="column" .padding=${[
        "0",
        "s",
        "s",
        "s",
      ]} gap="xs">
        ${
          this.loading
            ? this.templateLoading()
            : this.templateTransactionsByYear()
        }
      </wui-flex>
    `;
        }
        templateTransactions(e) {
          return null === e || void 0 === e
            ? void 0
            : e.map((e) => {
                var t, i, a;
                const n = s.r.formatDate(
                    null === e ||
                      void 0 === e ||
                      null === (t = e.metadata) ||
                      void 0 === t
                      ? void 0
                      : t.minedAt
                  ),
                  c = e.transfers[0],
                  l = null === c || void 0 === c ? void 0 : c.fungible_info;
                if (!l) return null;
                const u =
                  (null === l ||
                  void 0 === l ||
                  null === (i = l.icon) ||
                  void 0 === i
                    ? void 0
                    : i.url) ||
                  (null === (a = this.tokenImages) || void 0 === a
                    ? void 0
                    : a[l.symbol || ""]);
                return r.qy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${
            "ONRAMP_TRANSACTION_STATUS_SUCCESS" === e.metadata.status
          }
          .inProgress=${
            "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS" === e.metadata.status
          }
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED" === e.metadata.status}
          purchaseCurrency=${(0, o.J)(l.symbol)}
          purchaseValue=${c.quantity.numeric}
          date=${n}
          icon=${(0, o.J)(u)}
          symbol=${(0, o.J)(l.symbol)}
        ></w3m-onramp-activity-item>
      `;
              });
        }
        templateTransactionsByYear() {
          return Object.keys(this.coinbaseTransactions)
            .sort()
            .reverse()
            .map((e) => {
              const t = parseInt(e, 10);
              return new Array(12)
                .fill(null)
                .map((e, t) => t)
                .reverse()
                .map((e) => {
                  var i;
                  const a = p.tt.getTransactionGroupTitle(t, e),
                    o =
                      null === (i = this.coinbaseTransactions[t]) ||
                      void 0 === i
                        ? void 0
                        : i[e];
                  return o
                    ? r.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs", "s", "s", "s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${a}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(o)}
            </wui-flex>
          </wui-flex>
        `
                    : null;
                });
            });
        }
        async fetchTransactions() {
          await this.fetchCoinbaseTransactions();
        }
        async fetchCoinbaseTransactions() {
          const e = u.U.state.address,
            t = d.H.state.projectId;
          if (!e) throw new Error("No address found");
          if (!t) throw new Error("No projectId found");
          (this.loading = !0),
            await c.W.fetchTransactions(e, "coinbase"),
            (this.loading = !1),
            this.refetchLoadingTransactions();
        }
        refetchLoadingTransactions() {
          var e;
          const t = new Date();
          0 !==
          (
            (null === (e = this.coinbaseTransactions[t.getFullYear()]) ||
            void 0 === e
              ? void 0
              : e[t.getMonth()]) || []
          ).filter(
            (e) => "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS" === e.metadata.status
          ).length
            ? (this.refetchTimeout = setTimeout(async () => {
                const e = u.U.state.address;
                await c.W.fetchTransactions(e, "coinbase"),
                  this.refetchLoadingTransactions();
              }, 3e3))
            : clearTimeout(this.refetchTimeout);
        }
        templateLoading() {
          return Array(7)
            .fill(
              r.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `
            )
            .map((e) => e);
        }
      };
      (f.styles = g),
        v([(0, a.wk)()], f.prototype, "selectedOnRampProvider", void 0),
        v([(0, a.wk)()], f.prototype, "loading", void 0),
        v([(0, a.wk)()], f.prototype, "coinbaseTransactions", void 0),
        v([(0, a.wk)()], f.prototype, "tokenImages", void 0),
        (f = v([(0, p.EM)("w3m-onramp-activity-view")], f));
      var b = i(39965),
        x = i(18933);
      i(30858), i(168), i(24544);
      const k = r.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;
      var C = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let T = class extends r.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedCurrency = n.aG.state.paymentCurrency),
            (this.currencies = n.aG.state.paymentCurrencies),
            (this.currencyImages = l.j.state.currencyImages),
            (this.checked = b.o.state.isLegalCheckboxChecked),
            this.unsubscribe.push(
              n.aG.subscribe((e) => {
                (this.selectedCurrency = e.paymentCurrency),
                  (this.currencies = e.paymentCurrencies);
              }),
              l.j.subscribeKey(
                "currencyImages",
                (e) => (this.currencyImages = e)
              ),
              b.o.subscribeKey("isLegalCheckboxChecked", (e) => {
                this.checked = e;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e;
          const { termsConditionsUrl: t, privacyPolicyUrl: i } = d.H.state,
            a =
              null === (e = d.H.state.features) || void 0 === e
                ? void 0
                : e.legalCheckbox,
            s = Boolean(t || i) && Boolean(a) && !this.checked;
          return r.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "s", "s"]}
        gap="xs"
        class=${(0, o.J)(s ? "disabled" : void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
        }
        currenciesTemplate() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.currencies.map((t) => {
            var i;
            return r.qy`
        <wui-list-item
          imageSrc=${(0, o.J)(
            null === (i = this.currencyImages) || void 0 === i
              ? void 0
              : i[t.id]
          )}
          @click=${() => this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0, o.J)(e ? -1 : void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `;
          });
        }
        selectCurrency(e) {
          e && (n.aG.setPaymentCurrency(e), x.W.close());
        }
      };
      (T.styles = k),
        C([(0, a.wk)()], T.prototype, "selectedCurrency", void 0),
        C([(0, a.wk)()], T.prototype, "currencies", void 0),
        C([(0, a.wk)()], T.prototype, "currencyImages", void 0),
        C([(0, a.wk)()], T.prototype, "checked", void 0),
        (T = C([(0, p.EM)("w3m-onramp-fiat-select-view")], T));
      var P = i(83275);
      const I = r.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;
      var A = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let $ = class extends r.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedCurrency = n.aG.state.purchaseCurrencies),
            (this.tokens = n.aG.state.purchaseCurrencies),
            (this.tokenImages = l.j.state.tokenImages),
            (this.checked = b.o.state.isLegalCheckboxChecked),
            this.unsubscribe.push(
              n.aG.subscribe((e) => {
                (this.selectedCurrency = e.purchaseCurrencies),
                  (this.tokens = e.purchaseCurrencies);
              }),
              l.j.subscribeKey("tokenImages", (e) => (this.tokenImages = e)),
              b.o.subscribeKey("isLegalCheckboxChecked", (e) => {
                this.checked = e;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e;
          const { termsConditionsUrl: t, privacyPolicyUrl: i } = d.H.state,
            a =
              null === (e = d.H.state.features) || void 0 === e
                ? void 0
                : e.legalCheckbox,
            s = Boolean(t || i) && Boolean(a) && !this.checked;
          return r.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "s", "s"]}
        gap="xs"
        class=${(0, o.J)(s ? "disabled" : void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
        }
        currenciesTemplate() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.tokens.map((t) => {
            var i;
            return r.qy`
        <wui-list-item
          imageSrc=${(0, o.J)(
            null === (i = this.tokenImages) || void 0 === i
              ? void 0
              : i[t.symbol]
          )}
          @click=${() => this.selectToken(t)}
          variant="image"
          tabIdx=${(0, o.J)(e ? -1 : void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${
              t.name
            }</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `;
          });
        }
        selectToken(e) {
          e && (n.aG.setPurchaseCurrency(e), x.W.close());
        }
      };
      ($.styles = I),
        A([(0, a.wk)()], $.prototype, "selectedCurrency", void 0),
        A([(0, a.wk)()], $.prototype, "tokens", void 0),
        A([(0, a.wk)()], $.prototype, "tokenImages", void 0),
        A([(0, a.wk)()], $.prototype, "checked", void 0),
        ($ = A([(0, p.EM)("w3m-onramp-token-select-view")], $));
      var R = i(73082),
        O = i(62550),
        j = i(67415),
        q = i(83454),
        M = i(16733),
        S = i(75673);
      i(61769), i(38696), i(52770), i(67029), i(28183);
      const W = r.AH`
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
`;
      var D = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let G = class extends r.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.selectedOnRampProvider = n.aG.state.selectedProvider),
            (this.uri = R.x.state.wcUri),
            (this.ready = !1),
            (this.showRetry = !1),
            (this.buffering = !1),
            (this.error = !1),
            (this.startTime = null),
            (this.isMobile = !1),
            (this.onRetry = void 0),
            this.unsubscribe.push(
              n.aG.subscribeKey("selectedProvider", (e) => {
                this.selectedOnRampProvider = e;
              })
            ),
            this.watchTransactions();
        }
        disconnectedCallback() {
          this.intervalId && clearInterval(this.intervalId);
        }
        render() {
          var e;
          let t = "Continue in external window";
          if (this.error) t = "Buy failed";
          else if (this.selectedOnRampProvider) {
            var i;
            t = `Buy in ${
              null === (i = this.selectedOnRampProvider) || void 0 === i
                ? void 0
                : i.label
            }`;
          }
          const a = this.error
            ? "Buy can be declined from your side or due to and error on the provider app"
            : "We\u2019ll notify you once your Buy is processed";
          return r.qy`
      <wui-flex
        data-error=${(0, o.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0, o.J)(
              null === (e = this.selectedOnRampProvider) || void 0 === e
                ? void 0
                : e.name
            )}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${a}</wui-text>
        </wui-flex>

        ${this.error ? this.tryAgainTemplate() : null}
      </wui-flex>

      <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `;
        }
        watchTransactions() {
          if (
            this.selectedOnRampProvider &&
            "coinbase" === this.selectedOnRampProvider.name
          )
            (this.startTime = Date.now()),
              this.initializeCoinbaseTransactions();
        }
        async initializeCoinbaseTransactions() {
          await this.watchCoinbaseTransactions(),
            (this.intervalId = setInterval(
              () => this.watchCoinbaseTransactions(),
              4e3
            ));
        }
        async watchCoinbaseTransactions() {
          try {
            const e = u.U.state.address;
            if (!e) throw new Error("No address found");
            const t = await O.T.fetchTransactions({
              account: e,
              onramp: "coinbase",
            });
            t.data.filter(
              (e) =>
                new Date(e.metadata.minedAt) > new Date(this.startTime) ||
                "ONRAMP_TRANSACTION_STATUS_IN_PROGRESS" === e.metadata.status
            ).length
              ? (clearInterval(this.intervalId), j.I.replace("OnRampActivity"))
              : this.startTime &&
                Date.now() - this.startTime >= 18e4 &&
                (clearInterval(this.intervalId), (this.error = !0));
          } catch (e) {
            q.P.showError(e);
          }
        }
        onTryAgain() {
          this.selectedOnRampProvider &&
            ((this.error = !1),
            M.w.openHref(
              this.selectedOnRampProvider.url,
              "popupWindow",
              "width=600,height=800,scrollbars=yes"
            ));
        }
        tryAgainTemplate() {
          var e;
          return null !== (e = this.selectedOnRampProvider) &&
            void 0 !== e &&
            e.url
            ? r.qy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(
                this
              )}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`
            : null;
        }
        loaderTemplate() {
          const e = S.W.state.themeVariables["--w3m-border-radius-master"],
            t = e ? parseInt(e.replace("px", ""), 10) : 4;
          return r.qy`<wui-loading-thumbnail radius=${
            9 * t
          }></wui-loading-thumbnail>`;
        }
        onCopyUri() {
          var e;
          if (
            null === (e = this.selectedOnRampProvider) ||
            void 0 === e ||
            !e.url
          )
            return q.P.showError("No link found"), void j.I.goBack();
          try {
            M.w.copyToClopboard(this.selectedOnRampProvider.url),
              q.P.showSuccess("Link copied");
          } catch {
            q.P.showError("Failed to copy");
          }
        }
      };
      (G.styles = W),
        D([(0, a.wk)()], G.prototype, "intervalId", void 0),
        D([(0, a.wk)()], G.prototype, "selectedOnRampProvider", void 0),
        D([(0, a.wk)()], G.prototype, "uri", void 0),
        D([(0, a.wk)()], G.prototype, "ready", void 0),
        D([(0, a.wk)()], G.prototype, "showRetry", void 0),
        D([(0, a.wk)()], G.prototype, "buffering", void 0),
        D([(0, a.wk)()], G.prototype, "error", void 0),
        D([(0, a.wk)()], G.prototype, "startTime", void 0),
        D([(0, a.MZ)({ type: Boolean })], G.prototype, "isMobile", void 0),
        D([(0, a.MZ)()], G.prototype, "onRetry", void 0),
        (G = D([(0, p.EM)("w3m-buy-in-progress-view")], G));
      var B = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let N = class extends r.WF {
        render() {
          return r.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "3xl", "xl", "3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${j.I.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `;
        }
      };
      N = B([(0, p.EM)("w3m-what-is-a-buy-view")], N);
      var _ = i(63157);
      i(98625);
      const L = r.AH`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;
      var E = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let U = class extends r.WF {
        constructor() {
          var e;
          super(),
            (this.unsubscribe = []),
            (this.type = "Token"),
            (this.value = 0),
            (this.currencies = []),
            (this.selectedCurrency =
              null === (e = this.currencies) || void 0 === e ? void 0 : e[0]),
            (this.currencyImages = l.j.state.currencyImages),
            (this.tokenImages = l.j.state.tokenImages),
            this.unsubscribe.push(
              n.aG.subscribeKey("purchaseCurrency", (e) => {
                e &&
                  "Fiat" !== this.type &&
                  (this.selectedCurrency = this.formatPurchaseCurrency(e));
              }),
              n.aG.subscribeKey("paymentCurrency", (e) => {
                e &&
                  "Token" !== this.type &&
                  (this.selectedCurrency = this.formatPaymentCurrency(e));
              }),
              n.aG.subscribe((e) => {
                "Fiat" === this.type
                  ? (this.currencies = e.purchaseCurrencies.map(
                      this.formatPurchaseCurrency
                    ))
                  : (this.currencies = e.paymentCurrencies.map(
                      this.formatPaymentCurrency
                    ));
              }),
              l.j.subscribe((e) => {
                (this.currencyImages = { ...e.currencyImages }),
                  (this.tokenImages = { ...e.tokenImages });
              })
            );
        }
        firstUpdated() {
          n.aG.getAvailableCurrencies();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e;
          const t =
              (null === (e = this.selectedCurrency) || void 0 === e
                ? void 0
                : e.symbol) || "",
            i = this.currencyImages[t] || this.tokenImages[t];
          return r.qy`<wui-input-text type="number" size="lg" value=${
            this.value
          }>
      ${
        this.selectedCurrency
          ? r.qy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${() => x.W.open({ view: `OnRamp${this.type}Select` })}
          >
            <wui-image src=${(0, o.J)(i)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`
          : r.qy`<wui-loading-spinner></wui-loading-spinner>`
      }
    </wui-input-text>`;
        }
        formatPaymentCurrency(e) {
          return { name: e.id, symbol: e.id };
        }
        formatPurchaseCurrency(e) {
          return { name: e.name, symbol: e.symbol };
        }
      };
      (U.styles = L),
        E([(0, a.MZ)({ type: String })], U.prototype, "type", void 0),
        E([(0, a.MZ)({ type: Number })], U.prototype, "value", void 0),
        E([(0, a.wk)()], U.prototype, "currencies", void 0),
        E([(0, a.wk)()], U.prototype, "selectedCurrency", void 0),
        E([(0, a.wk)()], U.prototype, "currencyImages", void 0),
        E([(0, a.wk)()], U.prototype, "tokenImages", void 0),
        (U = E([(0, p.EM)("w3m-onramp-input")], U));
      const z = r.AH`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;
      var Z = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      const F = { USD: "$", EUR: "\u20ac", GBP: "\xa3" },
        H = [100, 250, 500, 1e3];
      let J = class extends r.WF {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.disabled = !1),
            (this.caipAddress = _.W.state.activeCaipAddress),
            (this.loading = x.W.state.loading),
            (this.paymentCurrency = n.aG.state.paymentCurrency),
            (this.paymentAmount = n.aG.state.paymentAmount),
            (this.purchaseAmount = n.aG.state.purchaseAmount),
            (this.quoteLoading = n.aG.state.quotesLoading),
            this.unsubscribe.push(
              _.W.subscribeKey(
                "activeCaipAddress",
                (e) => (this.caipAddress = e)
              ),
              x.W.subscribeKey("loading", (e) => {
                this.loading = e;
              }),
              n.aG.subscribe((e) => {
                (this.paymentCurrency = e.paymentCurrency),
                  (this.paymentAmount = e.paymentAmount),
                  (this.purchaseAmount = e.purchaseAmount),
                  (this.quoteLoading = e.quotesLoading);
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return r.qy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${H.map((e) => {
              var t;
              return r.qy`<wui-button
                  variant=${this.paymentAmount === e ? "accent" : "neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${() => this.selectPresetAmount(e)}
                  >${`${
                    F[
                      (null === (t = this.paymentCurrency) || void 0 === t
                        ? void 0
                        : t.id) || "USD"
                    ]
                  } ${e}`}</wui-button
                >`;
            })}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
        }
        templateButton() {
          return this.caipAddress
            ? r.qy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`
            : r.qy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
        }
        getQuotes() {
          this.loading || x.W.open({ view: "OnRampProviders" });
        }
        openModal() {
          x.W.open({ view: "Connect" });
        }
        async onPaymentAmountChange(e) {
          n.aG.setPaymentAmount(Number(e.detail)), await n.aG.getQuote();
        }
        async selectPresetAmount(e) {
          n.aG.setPaymentAmount(e), await n.aG.getQuote();
        }
      };
      (J.styles = z),
        Z([(0, a.MZ)({ type: Boolean })], J.prototype, "disabled", void 0),
        Z([(0, a.wk)()], J.prototype, "caipAddress", void 0),
        Z([(0, a.wk)()], J.prototype, "loading", void 0),
        Z([(0, a.wk)()], J.prototype, "paymentCurrency", void 0),
        Z([(0, a.wk)()], J.prototype, "paymentAmount", void 0),
        Z([(0, a.wk)()], J.prototype, "purchaseAmount", void 0),
        Z([(0, a.wk)()], J.prototype, "quoteLoading", void 0),
        (J = Z([(0, p.EM)("w3m-onramp-widget")], J));
    },
    68779: (e, t, i) => {
      i.d(t, { aG: () => w });
      var r = i(59586),
        a = i(86992),
        o = i(10719),
        s = i(64066),
        n = i(23871),
        c = i(69084),
        l = i(62550),
        u = i(63157);
      const d = {
          id: "2b92315d-eab7-5bef-84fa-089a131333f5",
          name: "USD Coin",
          symbol: "USDC",
          networks: [
            {
              name: "ethereum-mainnet",
              display_name: "Ethereum",
              chain_id: "1",
              contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            },
            {
              name: "polygon-mainnet",
              display_name: "Polygon",
              chain_id: "137",
              contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            },
          ],
        },
        p = {
          id: "USD",
          payment_method_limits: [
            { id: "card", min: "10.00", max: "7500.00" },
            { id: "ach_bank_account", min: "10.00", max: "25000.00" },
          ],
        },
        h = {
          providers: s.tM,
          selectedProvider: null,
          error: null,
          purchaseCurrency: d,
          paymentCurrency: p,
          purchaseCurrencies: [d],
          paymentCurrencies: [],
          quotesLoading: !1,
        },
        m = (0, r.BX)(h),
        w = {
          state: m,
          subscribe: (e) => (0, r.B1)(m, () => e(m)),
          subscribeKey: (e, t) => (0, a.u$)(m, e, t),
          setSelectedProvider(e) {
            if (e && "meld" === e.name) {
              var t;
              const i =
                  u.W.state.activeChain === o.o.CHAIN.SOLANA ? "SOL" : "USDC",
                r = null !== (t = n.U.state.address) && void 0 !== t ? t : "",
                a = new URL(e.url);
              a.searchParams.append("publicKey", s.Db),
                a.searchParams.append("destinationCurrencyCode", i),
                a.searchParams.append("walletAddress", r),
                (e.url = a.toString());
            }
            m.selectedProvider = e;
          },
          setPurchaseCurrency(e) {
            m.purchaseCurrency = e;
          },
          setPaymentCurrency(e) {
            m.paymentCurrency = e;
          },
          setPurchaseAmount(e) {
            this.state.purchaseAmount = e;
          },
          setPaymentAmount(e) {
            this.state.paymentAmount = e;
          },
          async getAvailableCurrencies() {
            const e = await l.T.getOnrampOptions();
            (m.purchaseCurrencies = e.purchaseCurrencies),
              (m.paymentCurrencies = e.paymentCurrencies),
              (m.paymentCurrency = e.paymentCurrencies[0] || p),
              (m.purchaseCurrency = e.purchaseCurrencies[0] || d),
              await c.N.fetchCurrencyImages(
                e.paymentCurrencies.map((e) => e.id)
              ),
              await c.N.fetchTokenImages(
                e.purchaseCurrencies.map((e) => e.symbol)
              );
          },
          async getQuote() {
            m.quotesLoading = !0;
            try {
              var e, t;
              const i = await l.T.getOnrampQuote({
                purchaseCurrency: m.purchaseCurrency,
                paymentCurrency: m.paymentCurrency,
                amount:
                  (null === (e = m.paymentAmount) || void 0 === e
                    ? void 0
                    : e.toString()) || "0",
                network:
                  null === (t = m.purchaseCurrency) || void 0 === t
                    ? void 0
                    : t.symbol,
              });
              return (
                (m.quotesLoading = !1),
                (m.purchaseAmount = Number(
                  null === i || void 0 === i ? void 0 : i.purchaseAmount.amount
                )),
                i
              );
            } catch (i) {
              return (m.error = i.message), (m.quotesLoading = !1), null;
            } finally {
              m.quotesLoading = !1;
            }
          },
          resetState() {
            (m.providers = s.tM),
              (m.selectedProvider = null),
              (m.error = null),
              (m.purchaseCurrency = d),
              (m.paymentCurrency = p),
              (m.purchaseCurrencies = [d]),
              (m.paymentCurrencies = []),
              (m.paymentAmount = void 0),
              (m.purchaseAmount = void 0),
              (m.quotesLoading = !1);
          },
        };
    },
    84160: (e, t, i) => {
      i(32613);
    },
    91064: (e, t, i) => {
      var r = i(21579),
        a = i(4742),
        o = i(71597),
        s = i(63157),
        n = i(80240),
        c = i(15694);
      i(49986), i(38696), i(84160), i(47633), i(94110), i(28183);
      const l = r.AH`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;
      var u = function (e, t, i, r) {
        var a,
          o = arguments.length,
          s =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, i, r);
        else
          for (var n = e.length - 1; n >= 0; n--)
            (a = e[n]) &&
              (s = (o < 3 ? a(s) : o > 3 ? a(t, i, s) : a(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
      };
      let d = class extends r.WF {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.color = "inherit"),
            (this.label = ""),
            (this.feeRange = ""),
            (this.loading = !1),
            (this.onClick = null);
        }
        render() {
          return r.qy`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0, o.J)(
          this.name
        )} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${
            this.label
          }</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${
          this.loading
            ? r.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`
            : r.qy`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`
        }
      </button>
    `;
        }
        networksTemplate() {
          var e;
          const t = s.W.getAllRequestedCaipNetworks(),
            i =
              null === t ||
              void 0 === t ||
              null ===
                (e = t.filter((e) => {
                  var t;
                  return null === e ||
                    void 0 === e ||
                    null === (t = e.assets) ||
                    void 0 === t
                    ? void 0
                    : t.imageId;
                })) ||
              void 0 === e
                ? void 0
                : e.slice(0, 5);
          return r.qy`
      <wui-flex class="networks">
        ${
          null === i || void 0 === i
            ? void 0
            : i.map(
                (e) => r.qy`
            <wui-flex class="network-icon">
              <wui-image src=${(0, o.J)(n.$.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `
              )
        }
      </wui-flex>
    `;
        }
      };
      (d.styles = [l]),
        u([(0, a.MZ)({ type: Boolean })], d.prototype, "disabled", void 0),
        u([(0, a.MZ)()], d.prototype, "color", void 0),
        u([(0, a.MZ)()], d.prototype, "name", void 0),
        u([(0, a.MZ)()], d.prototype, "label", void 0),
        u([(0, a.MZ)()], d.prototype, "feeRange", void 0),
        u([(0, a.MZ)({ type: Boolean })], d.prototype, "loading", void 0),
        u([(0, a.MZ)()], d.prototype, "onClick", void 0),
        (d = u([(0, c.EM)("w3m-onramp-provider-item")], d));
    },
  },
]);
