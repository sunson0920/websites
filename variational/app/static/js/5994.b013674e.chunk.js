"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [5994],
  {
    45994: (e, t, s) => {
      s.r(t), s.d(t, { W3mTransactionsView: () => o });
      var i = s(21579),
        r = s(15694);
      s(49986), s(43835);
      const l = i.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;
      var n = function (e, t, s, i) {
        var r,
          l = arguments.length,
          n =
            l < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, s))
              : i;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          n = Reflect.decorate(e, t, s, i);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (r = e[o]) &&
              (n = (l < 3 ? r(n) : l > 3 ? r(t, s, n) : r(t, s)) || n);
        return l > 3 && n && Object.defineProperty(t, s, n), n;
      };
      let o = class extends i.WF {
        render() {
          return i.qy`
      <wui-flex flexDirection="column" .padding=${["0", "m", "m", "m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `;
        }
      };
      (o.styles = l), (o = n([(0, r.EM)("w3m-transactions-view")], o));
    },
  },
]);
