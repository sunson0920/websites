/*! For license information please see lib.chunks-27545368.0e809e7f.js.LICENSE.txt */
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [1705],
  {
    285: (e, t, n) => {
      "use strict";
      n.d(t, { B4: () => o, SK: () => s, hX: () => a });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { offset: t } = e;
          super(`Offset \`${t}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class s extends r.C {
        constructor(e) {
          let { length: t, position: n } = e;
          super(
            `Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class a extends r.C {
        constructor(e) {
          let { count: t, limit: n } = e;
          super(
            `Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    302: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => i });
      var r = n(91384),
        o = n(1960);
      const s = /^0x[a-fA-F0-9]{40}$/,
        a = new r.A(8192);
      function i(e, t) {
        const { strict: n = !0 } = null !== t && void 0 !== t ? t : {},
          r = `${e}.${n}`;
        if (a.has(r)) return a.get(r);
        const i =
          !!s.test(e) && (e.toLowerCase() === e || !n || (0, o.o)(e) === e);
        return a.set(r, i), i;
      }
    },
    556: (e, t, n) => {
      "use strict";
      n.d(t, { J9: () => s, Mc: () => o, fD: () => r });
      const r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        o = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        s = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    1960: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => l, o: () => u });
      var r = n(39815),
        o = n(66119),
        s = n(68113),
        a = n(91384),
        i = n(302);
      const c = new a.A(8192);
      function u(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = (0, s.S)((0, o.Af)(n), "bytes"),
          a = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let o = 0; o < 40; o += 2)
          r[o >> 1] >> 4 >= 8 && a[o] && (a[o] = a[o].toUpperCase()),
            (15 & r[o >> 1]) >= 8 &&
              a[o + 1] &&
              (a[o + 1] = a[o + 1].toUpperCase());
        const i = `0x${a.join("")}`;
        return c.set(`${e}.${t}`, i), i;
      }
      function l(e, t) {
        if (!(0, i.P)(e, { strict: !1 })) throw new r.M({ address: e });
        return u(e, t);
      }
    },
    3028: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => o });
      var r = n(23800);
      function o(e, t) {
        let { emitOnBegin: n, initialWaitTime: o, interval: s } = t,
          a = !0;
        const i = () => (a = !1);
        return (
          (async () => {
            var t;
            let c;
            n && (c = await e({ unpoll: i }));
            const u =
              null !==
                (t = await (null === o || void 0 === o ? void 0 : o(c))) &&
              void 0 !== t
                ? t
                : s;
            await (0, r.u)(u);
            const l = async () => {
              a && (await e({ unpoll: i }), await (0, r.u)(s), l());
            };
            l();
          })(),
          i
        );
      }
    },
    3403: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => ut });
      var r = n(58512),
        o = n(76577),
        s = n(74913),
        a = n(84846),
        i = n(60713),
        c = n(89594),
        u = n(55903),
        l = n(34795);
      var d = n(49897),
        f = n(86182),
        h = n(38302),
        p = n(66091),
        m = n(18220),
        b = n(63976),
        g = n(10201);
      async function y(e, t) {
        const {
            account: n = e.account,
            blockNumber: r,
            blockTag: o = "latest",
            blobs: s,
            data: a,
            gas: c,
            gasPrice: u,
            maxFeePerBlobGas: l,
            maxFeePerGas: d,
            maxPriorityFeePerGas: f,
            to: y,
            value: v,
            ...w
          } = t,
          x = n ? (0, h.J)(n) : void 0;
        try {
          var P;
          (0, g.c)(t);
          const n = (r ? (0, i.cK)(r) : void 0) || o,
            h =
              null === (P = e.chain) ||
              void 0 === P ||
              null === (P = P.formatters) ||
              void 0 === P ||
              null === (P = P.transactionRequest) ||
              void 0 === P
                ? void 0
                : P.format,
            p = (h || b.Bv)({
              ...(0, m.o)(w, { format: h }),
              from: null === x || void 0 === x ? void 0 : x.address,
              blobs: s,
              data: a,
              gas: c,
              gasPrice: u,
              maxFeePerBlobGas: l,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: y,
              value: v,
            }),
            E = await e.request({
              method: "eth_createAccessList",
              params: [p, n],
            });
          return { accessList: E.accessList, gasUsed: BigInt(E.gasUsed) };
        } catch (E) {
          throw (0, p.d)(E, { ...t, account: x, chain: e.chain });
        }
      }
      var v = n(22884);
      var w = n(37193),
        x = n(82636);
      class P extends x.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var E = n(66119),
        k = n(68113),
        B = n(34504),
        I = n(9292),
        T = n(44696),
        C = n(64807);
      const $ = "/docs/contract/encodeEventTopics";
      function N(e) {
        const { abi: t, eventName: n, args: r } = e;
        let o = t[0];
        if (n) {
          const e = (0, C.iY)({ abi: t, name: n });
          if (!e) throw new w.M_(n, { docsPath: $ });
          o = e;
        }
        if ("event" !== o.type) throw new w.M_(void 0, { docsPath: $ });
        const s = (0, T.B)(o),
          a = (0, B.h)(s);
        let i = [];
        if (r && "inputs" in o) {
          var c, u;
          const e =
              null === (c = o.inputs) || void 0 === c
                ? void 0
                : c.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(r)
              ? r
              : Object.values(r).length > 0 &&
                null !==
                  (u =
                    null === e || void 0 === e
                      ? void 0
                      : e.map((e) => r[e.name])) &&
                void 0 !== u
              ? u
              : [];
          var l;
          if (t.length > 0)
            i =
              null !==
                (l =
                  null === e || void 0 === e
                    ? void 0
                    : e.map((e, n) =>
                        Array.isArray(t[n])
                          ? t[n].map((r, o) => A({ param: e, value: t[n][o] }))
                          : "undefined" !== typeof t[n] && null !== t[n]
                          ? A({ param: e, value: t[n] })
                          : null
                      )) && void 0 !== l
                ? l
                : [];
        }
        return [a, ...i];
      }
      function A(e) {
        let { param: t, value: n } = e;
        if ("string" === t.type || "bytes" === t.type)
          return (0, k.S)((0, E.ZJ)(n));
        if ("tuple" === t.type || t.type.match(/^(.*)\[(\d+)?\]$/))
          throw new P(t.type);
        return (0, I.h)([t], [n]);
      }
      async function F(e, t) {
        const {
            address: n,
            abi: r,
            args: o,
            eventName: s,
            fromBlock: a,
            strict: c,
            toBlock: u,
          } = t,
          l = (0, v.g)(e, { method: "eth_newFilter" }),
          d = s ? N({ abi: r, args: o, eventName: s }) : void 0,
          f = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" === typeof a ? (0, i.cK)(a) : a,
                toBlock: "bigint" === typeof u ? (0, i.cK)(u) : u,
                topics: d,
              },
            ],
          });
        return {
          abi: r,
          args: o,
          eventName: s,
          id: f,
          request: l(f),
          strict: Boolean(c),
          type: "event",
        };
      }
      async function M(e) {
        let {
          address: t,
          args: n,
          event: r,
          events: o,
          fromBlock: s,
          strict: a,
          toBlock: c,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const u = null !== o && void 0 !== o ? o : r ? [r] : void 0,
          l = (0, v.g)(e, { method: "eth_newFilter" });
        let d = [];
        if (u) {
          const e = u.flatMap((e) =>
            N({ abi: [e], eventName: e.name, args: n })
          );
          (d = [e]), r && (d = d[0]);
        }
        const f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" === typeof s ? (0, i.cK)(s) : s,
              toBlock: "bigint" === typeof c ? (0, i.cK)(c) : c,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: u,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: s,
          id: f,
          request: l(f),
          strict: Boolean(a),
          toBlock: c,
          type: "event",
        };
      }
      var O = n(27630),
        S = n(19538),
        j = n(94093),
        z = n(87538);
      var R = n(75974),
        L = n(82089),
        G = n(66089);
      var U = n(67284),
        D = n(24166),
        q = n(33910);
      var _ = n(35909);
      async function H(e, t) {
        let { address: n, blockNumber: r, blockTag: o = "latest" } = t;
        const s = void 0 !== r ? (0, i.cK)(r) : void 0,
          a = await e.request(
            { method: "eth_getCode", params: [n, s || o] },
            { dedupe: Boolean(s) }
          );
        if ("0x" !== a) return a;
      }
      var V = n(43664),
        W = n(46735);
      async function K(e) {
        let {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: o,
          event: s,
          events: a,
          args: c,
          strict: u,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const l = null !== u && void 0 !== u && u,
          d = null !== a && void 0 !== a ? a : s ? [s] : void 0;
        let f,
          h = [];
        if (d) {
          const e = d.flatMap((e) =>
            N({ abi: [e], eventName: e.name, args: a ? void 0 : c })
          );
          (h = [e]), s && (h = h[0]);
        }
        f = n
          ? await e.request({
              method: "eth_getLogs",
              params: [{ address: t, topics: h, blockHash: n }],
            })
          : await e.request({
              method: "eth_getLogs",
              params: [
                {
                  address: t,
                  topics: h,
                  fromBlock: "bigint" === typeof r ? (0, i.cK)(r) : r,
                  toBlock: "bigint" === typeof o ? (0, i.cK)(o) : o,
                },
              ],
            });
        const p = f.map((e) => (0, W.e)(e));
        return d ? (0, V.p)({ abi: d, args: c, logs: p, strict: l }) : p;
      }
      async function J(e, t) {
        const {
            abi: n,
            address: r,
            args: o,
            blockHash: s,
            eventName: a,
            fromBlock: i,
            toBlock: c,
            strict: l,
          } = t,
          d = a ? (0, C.iY)({ abi: n, name: a }) : void 0,
          f = d ? void 0 : n.filter((e) => "event" === e.type);
        return (0, u.T)(
          e,
          K,
          "getLogs"
        )({
          address: r,
          args: o,
          blockHash: s,
          event: d,
          events: f,
          fromBlock: i,
          toBlock: c,
          strict: l,
        });
      }
      class Z extends x.C {
        constructor(e) {
          let { address: t } = e;
          super(`No EIP-712 domain found on contract "${t}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${t}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      const Y = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function Q(e, t) {
        let {
          blockCount: n,
          blockNumber: r,
          blockTag: o = "latest",
          rewardPercentiles: s,
        } = t;
        const a = r ? (0, i.cK)(r) : void 0;
        return (function (e) {
          var t;
          return {
            baseFeePerGas: e.baseFeePerGas.map((e) => BigInt(e)),
            gasUsedRatio: e.gasUsedRatio,
            oldestBlock: BigInt(e.oldestBlock),
            reward:
              null === (t = e.reward) || void 0 === t
                ? void 0
                : t.map((e) => e.map((e) => BigInt(e))),
          };
        })(
          await e.request(
            { method: "eth_feeHistory", params: [(0, i.cK)(n), a || o, s] },
            { dedupe: Boolean(a) }
          )
        );
      }
      var X = n(6662);
      var ee = n(99939);
      async function te(e, t) {
        let { address: n, blockNumber: r, blockTag: o, storageKeys: s } = t;
        const a = null !== o && void 0 !== o ? o : "latest",
          c = void 0 !== r ? (0, i.cK)(r) : void 0;
        return (function (e) {
          return {
            ...e,
            balance: e.balance ? BigInt(e.balance) : void 0,
            nonce: e.nonce ? (0, q.ME)(e.nonce) : void 0,
            storageProof: e.storageProof
              ? ((t = e.storageProof),
                t.map((e) => ({ ...e, value: BigInt(e.value) })))
              : void 0,
          };
          var t;
        })(await e.request({ method: "eth_getProof", params: [n, s, c || a] }));
      }
      var ne = n(56737);
      var re = n(62462),
        oe = n(63017),
        se = n(38060),
        ae = n(66993),
        ie = n(17999),
        ce = n(11307),
        ue = n(52773),
        le = n(93027),
        de = n(89620),
        fe = n(66296);
      async function he(e, t) {
        const {
          blockNumber: n,
          blockTag: r = "latest",
          blocks: o,
          returnFullTransactions: s,
          traceTransfers: a,
          validation: c,
        } = t;
        try {
          const t = [];
          for (const e of o) {
            const n = e.blockOverrides ? ae.J(e.blockOverrides) : void 0,
              r = e.calls.map((e) => {
                var t;
                const n = e,
                  r = n.account ? (0, h.J)(n.account) : void 0,
                  o = {
                    ...n,
                    data: n.abi ? (0, S.p)(n) : n.data,
                    from:
                      null !== (t = n.from) && void 0 !== t
                        ? t
                        : null === r || void 0 === r
                        ? void 0
                        : r.address,
                  };
                return (0, g.c)(o), (0, b.Bv)(o);
              }),
              o = e.stateOverrides ? (0, fe.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: o });
          }
          const u = (n ? (0, i.cK)(n) : void 0) || r;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: a,
                  validation: c,
                },
                u,
              ],
            })
          ).map((e, t) => ({
            ...(0, de.$)(e),
            calls: e.calls.map((e, n) => {
              var r, s, a;
              const { abi: i, args: c, functionName: u, to: l } = o[t].calls[n],
                d =
                  null !==
                    (r =
                      null === (s = e.error) || void 0 === s
                        ? void 0
                        : s.data) && void 0 !== r
                    ? r
                    : e.returnData,
                f = BigInt(e.gasUsed),
                h =
                  null === (a = e.logs) || void 0 === a
                    ? void 0
                    : a.map((e) => (0, W.e)(e)),
                p = "0x1" === e.status ? "success" : "failure",
                m =
                  i && "success" === p && "0x" !== d
                    ? (0, ue.e)({ abi: i, data: d, functionName: u })
                    : null,
                b = ((t) => {
                  if ("success" === p) return;
                  let n;
                  return (
                    "0x" ===
                    (null === (t = e.error) || void 0 === t ? void 0 : t.data)
                      ? (n = new w.O())
                      : e.error && (n = new ie.$S(e.error)),
                    n
                      ? (0, j.j)(n, {
                          abi: null !== i && void 0 !== i ? i : [],
                          address: l,
                          args: c,
                          functionName:
                            null !== u && void 0 !== u ? u : "<unknown>",
                        })
                      : void 0
                  );
                })();
              return {
                data: d,
                gasUsed: f,
                logs: h,
                status: p,
                ...("success" === p ? { result: m } : { error: b }),
              };
            }),
          }));
        } catch (u) {
          const e = u,
            t = (0, le.l)(e, {});
          if (t instanceof ce.RM) throw e;
          throw t;
        }
      }
      var pe = n(76749),
        me = n(90009);
      const be = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        ge = "0x0000000000000000000000000000000000000000";
      var ye = n(38718);
      const ve =
        "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
      var we = n(6693);
      const xe = "\x19Ethereum Signed Message:\n";
      var Pe = n(70248),
        Ee = n(88925);
      function ke(e, t) {
        return (0, k.S)(
          (function (e) {
            const t =
                "string" === typeof e
                  ? (0, i.i3)(e)
                  : "string" === typeof e.raw
                  ? e.raw
                  : (0, i.My)(e.raw),
              n = (0, i.i3)(`${xe}${(0, Ee.E)(t)}`);
            return (0, Pe.xW)([n, t]);
          })(e),
          t
        );
      }
      var Be = n(28406),
        Ie = n(83375),
        Te = n(1960),
        Ce = n(6980),
        $e = n(93935);
      const Ne =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var Ae = n(46744);
      var Fe = n(14698);
      var Me = n(85236);
      async function Oe(e, t) {
        var n;
        const {
            address: r,
            factory: o,
            factoryData: s,
            hash: a,
            signature: c,
            universalSignatureVerifierAddress: l = null === (n = e.chain) ||
            void 0 === n ||
            null === (n = n.contracts) ||
            void 0 === n ||
            null === (n = n.universalSignatureVerifier) ||
            void 0 === n
              ? void 0
              : n.address,
            ...d
          } = t,
          h = (0, $e.q)(c)
            ? c
            : "object" === typeof c && "r" in c && "s" in c
            ? (function (e) {
                let { r: t, s: n, to: r = "hex", v: o, yParity: s } = e;
                const a = (() => {
                    if (0 === s || 1 === s) return s;
                    if (o && (27n === o || 28n === o || o >= 35n))
                      return o % 2n === 0n ? 1 : 0;
                    throw new Error("Invalid `v` or `yParity` value");
                  })(),
                  i = `0x${new Me.secp256k1.Signature(
                    (0, q.uU)(t),
                    (0, q.uU)(n)
                  ).toCompactHex()}${0 === a ? "1b" : "1c"}`;
                return "hex" === r ? i : (0, E.aT)(i);
              })(c)
            : (0, i.My)(c),
          p = await (async () =>
            o || s
              ? (function (e) {
                  return (0, Ae.iN)(e, -32) === Ne;
                })(h)
                ? h
                : (function (e) {
                    const {
                        address: t,
                        data: n,
                        signature: r,
                        to: o = "hex",
                      } = e,
                      s = (0, Pe.aP)([
                        (0, I.h)(
                          [
                            { type: "address" },
                            { type: "bytes" },
                            { type: "bytes" },
                          ],
                          [t, n, r]
                        ),
                        Ne,
                      ]);
                    return "hex" === o ? s : (0, E.aT)(s);
                  })({ address: o, data: s, signature: h })
              : h)();
        try {
          const t = l
              ? {
                  to: l,
                  data: (0, S.p)({
                    abi: Be._,
                    functionName: "isValidSig",
                    args: [r, a, p],
                  }),
                  ...d,
                }
              : {
                  data: (0, Ie.m)({
                    abi: Be._,
                    args: [r, a, p],
                    bytecode: ye.nP,
                  }),
                  ...d,
                },
            { data: n } = await (0, u.T)(e, f.T, "call")(t);
          return (0, q.Nx)(null !== n && void 0 !== n ? n : "0x0");
        } catch (m) {
          try {
            if (
              (0, Ce.h)(
                (0, Te.b)(r),
                await (0, Fe.x)({ hash: a, signature: c })
              )
            )
              return !0;
          } catch {}
          if (m instanceof ie.zX) return !1;
          throw m;
        }
      }
      var Se = n(39815),
        je = n(84356);
      class ze extends x.C {
        constructor(e) {
          let { domain: t } = e;
          super(`Invalid domain "${(0, je.A)(t)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class Re extends x.C {
        constructor(e) {
          let { primaryType: t, types: n } = e;
          super(
            `Invalid primary type \`${t}\` must be one of \`${JSON.stringify(
              Object.keys(n)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class Le extends x.C {
        constructor(e) {
          let { type: t } = e;
          super(`Struct type "${t}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var Ge = n(302),
        Ue = n(66178);
      function De(e) {
        let { domain: t } = e;
        return [
          "string" ===
            typeof (null === t || void 0 === t ? void 0 : t.name) && {
            name: "name",
            type: "string",
          },
          (null === t || void 0 === t ? void 0 : t.version) && {
            name: "version",
            type: "string",
          },
          ("number" ===
            typeof (null === t || void 0 === t ? void 0 : t.chainId) ||
            "bigint" ===
              typeof (null === t || void 0 === t ? void 0 : t.chainId)) && {
            name: "chainId",
            type: "uint256",
          },
          (null === t || void 0 === t ? void 0 : t.verifyingContract) && {
            name: "verifyingContract",
            type: "address",
          },
          (null === t || void 0 === t ? void 0 : t.salt) && {
            name: "salt",
            type: "bytes32",
          },
        ].filter(Boolean);
      }
      function qe(e) {
        if (
          "address" === e ||
          "bool" === e ||
          "string" === e ||
          e.startsWith("bytes") ||
          e.startsWith("uint") ||
          e.startsWith("int")
        )
          throw new Le({ type: e });
      }
      function _e(e) {
        const { domain: t = {}, message: n, primaryType: r } = e,
          o = { EIP712Domain: De({ domain: t }), ...e.types };
        !(function (e) {
          const { domain: t, message: n, primaryType: r, types: o } = e,
            s = (e, t) => {
              for (const n of e) {
                const { name: e, type: r } = n,
                  a = t[e],
                  c = r.match(Ue.Ge);
                if (c && ("number" === typeof a || "bigint" === typeof a)) {
                  const [e, t, n] = c;
                  (0, i.cK)(a, {
                    signed: "int" === t,
                    size: Number.parseInt(n) / 8,
                  });
                }
                if ("address" === r && "string" === typeof a && !(0, Ge.P)(a))
                  throw new Se.M({ address: a });
                const u = r.match(Ue.BD);
                if (u) {
                  const [e, t] = u;
                  if (t && (0, Ee.E)(a) !== Number.parseInt(t))
                    throw new w.BI({
                      expectedSize: Number.parseInt(t),
                      givenSize: (0, Ee.E)(a),
                    });
                }
                const l = o[r];
                l && (qe(r), s(l, a));
              }
            };
          if (o.EIP712Domain && t) {
            if ("object" !== typeof t) throw new ze({ domain: t });
            s(o.EIP712Domain, t);
          }
          if ("EIP712Domain" !== r) {
            if (!o[r]) throw new Re({ primaryType: r, types: o });
            s(o[r], n);
          }
        })({ domain: t, message: n, primaryType: r, types: o });
        const s = ["0x1901"];
        return (
          t &&
            s.push(
              (function (e) {
                let { domain: t, types: n } = e;
                return He({ data: t, primaryType: "EIP712Domain", types: n });
              })({ domain: t, types: o })
            ),
          "EIP712Domain" !== r &&
            s.push(He({ data: n, primaryType: r, types: o })),
          (0, k.S)((0, Pe.xW)(s))
        );
      }
      function He(e) {
        let { data: t, primaryType: n, types: r } = e;
        const o = Ve({ data: t, primaryType: n, types: r });
        return (0, k.S)(o);
      }
      function Ve(e) {
        let { data: t, primaryType: n, types: r } = e;
        const o = [{ type: "bytes32" }],
          s = [We({ primaryType: n, types: r })];
        for (const a of r[n]) {
          const [e, n] = Je({
            types: r,
            name: a.name,
            type: a.type,
            value: t[a.name],
          });
          o.push(e), s.push(n);
        }
        return (0, I.h)(o, s);
      }
      function We(e) {
        let { primaryType: t, types: n } = e;
        const r = (0, i.nj)(
          (function (e) {
            let { primaryType: t, types: n } = e,
              r = "";
            const o = Ke({ primaryType: t, types: n });
            o.delete(t);
            const s = [t, ...Array.from(o).sort()];
            for (const a of s)
              r += `${a}(${n[a]
                .map((e) => {
                  let { name: t, type: n } = e;
                  return `${n} ${t}`;
                })
                .join(",")})`;
            return r;
          })({ primaryType: t, types: n })
        );
        return (0, k.S)(r);
      }
      function Ke(e) {
        let { primaryType: t, types: n } = e,
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new Set();
        const o = t.match(/^\w*/u),
          s = null === o || void 0 === o ? void 0 : o[0];
        if (r.has(s) || void 0 === n[s]) return r;
        r.add(s);
        for (const a of n[s]) Ke({ primaryType: a.type, types: n }, r);
        return r;
      }
      function Je(e) {
        let { types: t, name: n, type: r, value: o } = e;
        if (void 0 !== t[r])
          return [
            { type: "bytes32" },
            (0, k.S)(Ve({ data: o, primaryType: r, types: t })),
          ];
        if ("bytes" === r) {
          return (
            (o = `0x${(o.length % 2 ? "0" : "") + o.slice(2)}`),
            [{ type: "bytes32" }, (0, k.S)(o)]
          );
        }
        if ("string" === r)
          return [{ type: "bytes32" }, (0, k.S)((0, i.nj)(o))];
        if (r.lastIndexOf("]") === r.length - 1) {
          const e = r.slice(0, r.lastIndexOf("[")),
            s = o.map((r) => Je({ name: n, type: e, types: t, value: r }));
          return [
            { type: "bytes32" },
            (0, k.S)(
              (0, I.h)(
                s.map((e) => {
                  let [t] = e;
                  return t;
                }),
                s.map((e) => {
                  let [, t] = e;
                  return t;
                })
              )
            ),
          ];
        }
        return [{ type: r }, o];
      }
      var Ze = n(62917),
        Ye = n(63108),
        Qe = n(77885),
        Xe = n(3028);
      var et = n(72040),
        tt = n(41542);
      var nt = n(36206),
        rt = n(36140);
      const ot = (0, rt.A)(
          /^(?:([a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?([a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(0x[a-fA-F0-9]{40})\n\n(?:(.*)\n\n)?/,
          { scheme: 1, domain: 2, address: 3, statement: 4 }
        ),
        st = (0, rt.A)(
          /(?:URI: (.+))\n(?:Version: (.+))\n(?:Chain ID: (\d+))\n(?:Nonce: ([a-zA-Z0-9]+))\n(?:Issued At: (.+))(?:\nExpiration Time: (.+))?(?:\nNot Before: (.+))?(?:\nRequest ID: (.+))?/,
          {
            uri: 1,
            version: 2,
            chainId: 3,
            nonce: 4,
            issuedAt: 5,
            expirationTime: 6,
            notBefore: 7,
            requestId: 8,
          }
        );
      async function at(e, t) {
        const {
            address: n,
            domain: r,
            message: o,
            nonce: s,
            scheme: a,
            signature: i,
            time: c = new Date(),
            ...u
          } = t,
          l = (function (e) {
            var t, n, r, o, s;
            const {
                scheme: a,
                statement: i,
                ...c
              } = null !==
                (t =
                  null === (n = e.match(ot)) || void 0 === n
                    ? void 0
                    : n.groups) && void 0 !== t
                ? t
                : {},
              {
                chainId: u,
                expirationTime: l,
                issuedAt: d,
                notBefore: f,
                requestId: h,
                ...p
              } = null !==
                (r =
                  null === (o = e.match(st)) || void 0 === o
                    ? void 0
                    : o.groups) && void 0 !== r
                ? r
                : {},
              m =
                null === (s = e.split("Resources:")[1]) || void 0 === s
                  ? void 0
                  : s.split("\n- ").slice(1);
            return {
              ...c,
              ...p,
              ...(u ? { chainId: Number(u) } : {}),
              ...(l ? { expirationTime: new Date(l) } : {}),
              ...(d ? { issuedAt: new Date(d) } : {}),
              ...(f ? { notBefore: new Date(f) } : {}),
              ...(h ? { requestId: h } : {}),
              ...(m ? { resources: m } : {}),
              ...(a ? { scheme: a } : {}),
              ...(i ? { statement: i } : {}),
            };
          })(o);
        if (!l.address) return !1;
        const d = (function (e) {
          const {
            address: t,
            domain: n,
            message: r,
            nonce: o,
            scheme: s,
            time: a = new Date(),
          } = e;
          if (n && r.domain !== n) return !1;
          if (o && r.nonce !== o) return !1;
          if (s && r.scheme !== s) return !1;
          if (r.expirationTime && a >= r.expirationTime) return !1;
          if (r.notBefore && a < r.notBefore) return !1;
          try {
            if (!r.address) return !1;
            if (t && !(0, Ce.h)(r.address, t)) return !1;
          } catch {
            return !1;
          }
          return !0;
        })({ address: n, domain: r, message: l, nonce: s, scheme: a, time: c });
        if (!d) return !1;
        const f = ke(o);
        return Oe(e, { address: l.address, hash: f, signature: i, ...u });
      }
      var it = n(95463),
        ct = n(25085);
      function ut(e) {
        return {
          call: (t) => (0, f.T)(e, t),
          createAccessList: (t) => y(e, t),
          createBlockFilter: () =>
            (async function (e) {
              const t = (0, v.g)(e, { method: "eth_newBlockFilter" }),
                n = await e.request({ method: "eth_newBlockFilter" });
              return { id: n, request: t(n), type: "block" };
            })(e),
          createContractEventFilter: (t) => F(e, t),
          createEventFilter: (t) => M(e, t),
          createPendingTransactionFilter: () => (0, O.O)(e),
          estimateContractGas: (t) =>
            (async function (e, t) {
              const {
                  abi: n,
                  address: r,
                  args: o,
                  functionName: s,
                  dataSuffix: a,
                  ...i
                } = t,
                c = (0, S.p)({ abi: n, args: o, functionName: s });
              try {
                return await (0, u.T)(
                  e,
                  z.Q,
                  "estimateGas"
                )({ data: `${c}${a ? a.replace("0x", "") : ""}`, to: r, ...i });
              } catch (l) {
                const e = i.account ? (0, h.J)(i.account) : void 0;
                throw (0, j.j)(l, {
                  abi: n,
                  address: r,
                  args: o,
                  docsPath: "/docs/contract/estimateContractGas",
                  functionName: s,
                  sender: null === e || void 0 === e ? void 0 : e.address,
                });
              }
            })(e, t),
          estimateGas: (t) => (0, z.Q)(e, t),
          getBalance: (t) => (0, G.r)(e, t),
          getBlobBaseFee: () =>
            (async function (e) {
              const t = await e.request({ method: "eth_blobBaseFee" });
              return BigInt(t);
            })(e),
          getBlock: (t) => (0, U.g)(e, t),
          getBlockNumber: (t) => (0, D.G)(e, t),
          getBlockTransactionCount: (t) =>
            (async function (e) {
              let {
                blockHash: t,
                blockNumber: n,
                blockTag: r = "latest",
              } = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
              const o = void 0 !== n ? (0, i.cK)(n) : void 0;
              let s;
              return (
                (s = t
                  ? await e.request(
                      {
                        method: "eth_getBlockTransactionCountByHash",
                        params: [t],
                      },
                      { dedupe: !0 }
                    )
                  : await e.request(
                      {
                        method: "eth_getBlockTransactionCountByNumber",
                        params: [o || r],
                      },
                      { dedupe: Boolean(o) }
                    )),
                (0, q.ME)(s)
              );
            })(e, t),
          getBytecode: (t) => H(e, t),
          getChainId: () => (0, _.T)(e),
          getCode: (t) => H(e, t),
          getContractEvents: (t) => J(e, t),
          getEip712Domain: (t) =>
            (async function (e, t) {
              const { address: n, factory: r, factoryData: o } = t;
              try {
                const [t, s, a, i, c, d, f] = await (0, u.T)(
                  e,
                  l.J,
                  "readContract"
                )({
                  abi: Y,
                  address: n,
                  functionName: "eip712Domain",
                  factory: r,
                  factoryData: o,
                });
                return {
                  domain: {
                    name: s,
                    version: a,
                    chainId: Number(i),
                    verifyingContract: c,
                    salt: d,
                  },
                  extensions: f,
                  fields: t,
                };
              } catch (s) {
                const e = s;
                if (
                  "ContractFunctionExecutionError" === e.name &&
                  "ContractFunctionZeroDataError" === e.cause.name
                )
                  throw new Z({ address: n });
                throw e;
              }
            })(e, t),
          getEnsAddress: (t) => (0, r.B)(e, t),
          getEnsAvatar: (t) => (0, o.i)(e, t),
          getEnsName: (t) => (0, s.s)(e, t),
          getEnsResolver: (t) =>
            (async function (e, t) {
              const { blockNumber: n, blockTag: r, name: o } = t,
                { chain: s } = e,
                d = (() => {
                  if (t.universalResolverAddress)
                    return t.universalResolverAddress;
                  if (!s)
                    throw new Error(
                      "client chain not configured. universalResolverAddress is required."
                    );
                  return (0, a.M)({
                    blockNumber: n,
                    chain: s,
                    contract: "ensUniversalResolver",
                  });
                })(),
                f = null === s || void 0 === s ? void 0 : s.ensTlds;
              if (f && !f.some((e) => o.endsWith(e)))
                throw new Error(
                  `${o} is not a valid ENS TLD (${
                    null === f || void 0 === f ? void 0 : f.join(", ")
                  }) for chain "${s.name}" (id: ${s.id}).`
                );
              const [h] = await (0, u.T)(
                e,
                l.J,
                "readContract"
              )({
                address: d,
                abi: [
                  {
                    inputs: [{ type: "bytes" }],
                    name: "findResolver",
                    outputs: [{ type: "address" }, { type: "bytes32" }],
                    stateMutability: "view",
                    type: "function",
                  },
                ],
                functionName: "findResolver",
                args: [(0, i.nj)((0, c.F)(o))],
                blockNumber: n,
                blockTag: r,
              });
              return h;
            })(e, t),
          getEnsText: (t) => (0, d.m)(e, t),
          getFeeHistory: (t) => Q(e, t),
          estimateFeesPerGas: (t) => (0, R._)(e, t),
          getFilterChanges: (t) => (0, X.I)(e, t),
          getFilterLogs: (e) =>
            (async function (e, t) {
              var n;
              let { filter: r } = t;
              const o = null !== (n = r.strict) && void 0 !== n && n,
                s = (
                  await r.request({
                    method: "eth_getFilterLogs",
                    params: [r.id],
                  })
                ).map((e) => (0, W.e)(e));
              return r.abi ? (0, V.p)({ abi: r.abi, logs: s, strict: o }) : s;
            })(0, e),
          getGasPrice: () => (0, ee.L)(e),
          getLogs: (t) => K(e, t),
          getProof: (t) => te(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, L.b)(e, t),
          getStorageAt: (t) =>
            (async function (e, t) {
              let {
                address: n,
                blockNumber: r,
                blockTag: o = "latest",
                slot: s,
              } = t;
              const a = void 0 !== r ? (0, i.cK)(r) : void 0;
              return await e.request({
                method: "eth_getStorageAt",
                params: [n, s, a || o],
              });
            })(e, t),
          getTransaction: (t) => (0, ne.x)(e, t),
          getTransactionConfirmations: (t) =>
            (async function (e, t) {
              let { hash: n, transactionReceipt: r } = t;
              const [o, s] = await Promise.all([
                  (0, u.T)(e, D.G, "getBlockNumber")({}),
                  n ? (0, u.T)(e, ne.x, "getTransaction")({ hash: n }) : void 0,
                ]),
                a =
                  (null === r || void 0 === r ? void 0 : r.blockNumber) ||
                  (null === s || void 0 === s ? void 0 : s.blockNumber);
              return a ? o - a + 1n : 0n;
            })(e, t),
          getTransactionCount: (t) => (0, re.y)(e, t),
          getTransactionReceipt: (t) => (0, oe.h)(e, t),
          multicall: (t) => (0, se.C)(e, t),
          prepareTransactionRequest: (t) => (0, it.ft)(e, t),
          readContract: (t) => (0, l.J)(e, t),
          sendRawTransaction: (t) => (0, ct.L)(e, t),
          simulate: (t) => he(e, t),
          simulateBlocks: (t) => he(e, t),
          simulateCalls: (t) =>
            (async function (e, t) {
              var n, r, o, s, a, i, c, u;
              const {
                  blockNumber: l,
                  blockTag: d,
                  calls: f,
                  stateOverrides: p,
                  traceAssetChanges: m,
                  traceTransfers: b,
                  validation: g,
                } = t,
                v = t.account ? (0, h.J)(t.account) : void 0;
              if (m && !v)
                throw new x.C(
                  "`account` is required when `traceAssetChanges` is true"
                );
              const w = v
                  ? pe.lF(pe.HT("constructor(bytes, bytes)"), {
                      bytecode: ye.LX,
                      args: [
                        ve,
                        me.Rt(me.HT("function getBalance(address)"), [
                          v.address,
                        ]),
                      ],
                    })
                  : void 0,
                P = m
                  ? await Promise.all(
                      t.calls.map(async (t) => {
                        if (!t.data && !t.abi) return;
                        const { accessList: n } = await y(e, {
                          account: v.address,
                          ...t,
                          data: t.abi ? (0, S.p)(t) : t.data,
                        });
                        return n.map((e) => {
                          let { address: t, storageKeys: n } = e;
                          return n.length > 0 ? t : null;
                        });
                      })
                    ).then((e) => e.flat().filter(Boolean))
                  : [],
                E =
                  null === p || void 0 === p
                    ? void 0
                    : p.map((e) =>
                        e.address ===
                        (null === v || void 0 === v ? void 0 : v.address)
                          ? { ...e, nonce: 0 }
                          : e
                      ),
                k = await he(e, {
                  blockNumber: l,
                  blockTag: d,
                  blocks: [
                    ...(m
                      ? [
                          { calls: [{ data: w }], stateOverrides: p },
                          {
                            calls: P.map((e, t) => ({
                              abi: [
                                me.HT(
                                  "function balanceOf(address) returns (uint256)"
                                ),
                              ],
                              functionName: "balanceOf",
                              args: [v.address],
                              to: e,
                              from: ge,
                              nonce: t,
                            })),
                            stateOverrides: [{ address: ge, nonce: 0 }],
                          },
                        ]
                      : []),
                    {
                      calls: [...f, {}].map((e, t) => ({
                        ...e,
                        from: null === v || void 0 === v ? void 0 : v.address,
                        nonce: t,
                      })),
                      stateOverrides: E,
                    },
                    ...(m
                      ? [
                          { calls: [{ data: w }] },
                          {
                            calls: P.map((e, t) => ({
                              abi: [
                                me.HT(
                                  "function balanceOf(address) returns (uint256)"
                                ),
                              ],
                              functionName: "balanceOf",
                              args: [v.address],
                              to: e,
                              from: ge,
                              nonce: t,
                            })),
                            stateOverrides: [{ address: ge, nonce: 0 }],
                          },
                          {
                            calls: P.map((e, t) => ({
                              to: e,
                              abi: [
                                me.HT("function decimals() returns (uint256)"),
                              ],
                              functionName: "decimals",
                              from: ge,
                              nonce: t,
                            })),
                            stateOverrides: [{ address: ge, nonce: 0 }],
                          },
                          {
                            calls: P.map((e, t) => ({
                              to: e,
                              abi: [
                                me.HT(
                                  "function tokenURI(uint256) returns (string)"
                                ),
                              ],
                              functionName: "tokenURI",
                              args: [0n],
                              from: ge,
                              nonce: t,
                            })),
                            stateOverrides: [{ address: ge, nonce: 0 }],
                          },
                          {
                            calls: P.map((e, t) => ({
                              to: e,
                              abi: [
                                me.HT("function symbol() returns (string)"),
                              ],
                              functionName: "symbol",
                              from: ge,
                              nonce: t,
                            })),
                            stateOverrides: [{ address: ge, nonce: 0 }],
                          },
                        ]
                      : []),
                  ],
                  traceTransfers: b,
                  validation: g,
                }),
                B = m ? k[2] : k[0],
                [I, T, , C, $, N, A, F] = m ? k : [],
                { calls: M, ...O } = B,
                j = null !== (n = M.slice(0, -1)) && void 0 !== n ? n : [],
                z = [
                  ...(null !==
                    (r = null === I || void 0 === I ? void 0 : I.calls) &&
                  void 0 !== r
                    ? r
                    : []),
                  ...(null !==
                    (o = null === T || void 0 === T ? void 0 : T.calls) &&
                  void 0 !== o
                    ? o
                    : []),
                ].map((e) =>
                  "success" === e.status ? (0, q.uU)(e.data) : null
                ),
                R = [
                  ...(null !==
                    (s = null === C || void 0 === C ? void 0 : C.calls) &&
                  void 0 !== s
                    ? s
                    : []),
                  ...(null !==
                    (a = null === $ || void 0 === $ ? void 0 : $.calls) &&
                  void 0 !== a
                    ? a
                    : []),
                ].map((e) =>
                  "success" === e.status ? (0, q.uU)(e.data) : null
                ),
                L = (
                  null !==
                    (i = null === N || void 0 === N ? void 0 : N.calls) &&
                  void 0 !== i
                    ? i
                    : []
                ).map((e) => ("success" === e.status ? e.result : null)),
                G = (
                  null !==
                    (c = null === F || void 0 === F ? void 0 : F.calls) &&
                  void 0 !== c
                    ? c
                    : []
                ).map((e) => ("success" === e.status ? e.result : null)),
                U = (
                  null !==
                    (u = null === A || void 0 === A ? void 0 : A.calls) &&
                  void 0 !== u
                    ? u
                    : []
                ).map((e) => ("success" === e.status ? e.result : null)),
                D = [];
              for (const [h, y] of R.entries()) {
                const e = z[h];
                if ("bigint" !== typeof y) continue;
                if ("bigint" !== typeof e) continue;
                const t = L[h - 1],
                  n = G[h - 1],
                  r = U[h - 1],
                  o =
                    0 === h
                      ? { address: be, decimals: 18, symbol: "ETH" }
                      : {
                          address: P[h - 1],
                          decimals:
                            r || t
                              ? Number(null !== t && void 0 !== t ? t : 1)
                              : void 0,
                          symbol: null !== n && void 0 !== n ? n : void 0,
                        };
                D.some((e) => e.token.address === o.address) ||
                  D.push({ token: o, value: { pre: e, post: y, diff: y - e } });
              }
              return { assetChanges: D, block: O, results: j };
            })(e, t),
          simulateContract: (t) =>
            (async function (e, t) {
              const {
                  abi: n,
                  address: r,
                  args: o,
                  dataSuffix: s,
                  functionName: a,
                  ...i
                } = t,
                c = i.account ? (0, h.J)(i.account) : e.account,
                l = (0, S.p)({ abi: n, args: o, functionName: a });
              try {
                const { data: d } = await (0, u.T)(
                  e,
                  f.T,
                  "call"
                )({
                  batch: !1,
                  data: `${l}${s ? s.replace("0x", "") : ""}`,
                  to: r,
                  ...i,
                  account: c,
                });
                return {
                  result: (0, ue.e)({
                    abi: n,
                    args: o,
                    functionName: a,
                    data: d || "0x",
                  }),
                  request: {
                    abi: n.filter(
                      (e) => "name" in e && e.name === t.functionName
                    ),
                    address: r,
                    args: o,
                    dataSuffix: s,
                    functionName: a,
                    ...i,
                    account: c,
                  },
                };
              } catch (d) {
                throw (0, j.j)(d, {
                  abi: n,
                  address: r,
                  args: o,
                  docsPath: "/docs/contract/simulateContract",
                  functionName: a,
                  sender: null === c || void 0 === c ? void 0 : c.address,
                });
              }
            })(e, t),
          verifyMessage: (t) =>
            (async function (e, t) {
              let {
                address: n,
                message: r,
                factory: o,
                factoryData: s,
                signature: a,
                ...i
              } = t;
              return Oe(e, {
                address: n,
                factory: o,
                factoryData: s,
                hash: ke(r),
                signature: a,
                ...i,
              });
            })(e, t),
          verifySiweMessage: (t) => at(e, t),
          verifyTypedData: (t) =>
            (async function (e, t) {
              const {
                address: n,
                factory: r,
                factoryData: o,
                signature: s,
                message: a,
                primaryType: i,
                types: c,
                domain: u,
                ...l
              } = t;
              return Oe(e, {
                address: n,
                factory: r,
                factoryData: o,
                hash: _e({ message: a, primaryType: i, types: c, domain: u }),
                signature: s,
                ...l,
              });
            })(e, t),
          uninstallFilter: (t) => (0, we.Z)(e, t),
          waitForTransactionReceipt: (t) => (0, Ze.n)(e, t),
          watchBlocks: (t) =>
            (function (e, t) {
              let {
                blockTag: n = "latest",
                emitMissed: r = !1,
                emitOnBegin: o = !1,
                onBlock: s,
                onError: a,
                includeTransactions: i,
                poll: c,
                pollingInterval: l = e.pollingInterval,
              } = t;
              const d =
                  "undefined" !== typeof c
                    ? c
                    : "webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type),
                f = null !== i && void 0 !== i && i;
              let h;
              return d
                ? (() => {
                    const t = (0, je.A)(["watchBlocks", e.uid, n, r, o, f, l]);
                    return (0, Qe.lB)(t, { onBlock: s, onError: a }, (t) =>
                      (0, Xe.w)(
                        async () => {
                          try {
                            var o, s;
                            const i = await (0, u.T)(
                              e,
                              U.g,
                              "getBlock"
                            )({ blockTag: n, includeTransactions: f });
                            if (
                              i.number &&
                              null !== (o = h) &&
                              void 0 !== o &&
                              o.number
                            ) {
                              if (i.number === h.number) return;
                              if (i.number - h.number > 1 && r)
                                for (
                                  let n =
                                    (null === (a = h) || void 0 === a
                                      ? void 0
                                      : a.number) + 1n;
                                  n < i.number;
                                  n++
                                ) {
                                  var a;
                                  const r = await (0, u.T)(
                                    e,
                                    U.g,
                                    "getBlock"
                                  )({ blockNumber: n, includeTransactions: f });
                                  t.onBlock(r, h), (h = r);
                                }
                            }
                            (null === (s = h) ||
                              void 0 === s ||
                              !s.number ||
                              ("pending" === n &&
                                (null === i || void 0 === i || !i.number)) ||
                              (i.number && i.number > h.number)) &&
                              (t.onBlock(i, h), (h = i));
                          } catch (c) {
                            var i;
                            null === (i = t.onError) ||
                              void 0 === i ||
                              i.call(t, c);
                          }
                        },
                        { emitOnBegin: o, interval: l }
                      )
                    );
                  })()
                : (() => {
                    let t = !0,
                      r = !0,
                      i = () => (t = !1);
                    return (
                      (async () => {
                        try {
                          o &&
                            (0, u.T)(
                              e,
                              U.g,
                              "getBlock"
                            )({ blockTag: n, includeTransactions: f }).then(
                              (e) => {
                                t && r && (s(e, void 0), (r = !1));
                              }
                            );
                          const c = (() => {
                              if ("fallback" === e.transport.type) {
                                const t = e.transport.transports.find(
                                  (e) => "webSocket" === e.config.type
                                );
                                return t ? t.value : e.transport;
                              }
                              return e.transport;
                            })(),
                            { unsubscribe: l } = await c.subscribe({
                              params: ["newHeads"],
                              async onData(n) {
                                if (!t) return;
                                const o = await (0, u.T)(
                                  e,
                                  U.g,
                                  "getBlock"
                                )({
                                  blockNumber: n.blockNumber,
                                  includeTransactions: f,
                                }).catch(() => {});
                                t && (s(o, h), (r = !1), (h = o));
                              },
                              onError(e) {
                                null === a || void 0 === a || a(e);
                              },
                            });
                          (i = l), t || i();
                        } catch (c) {
                          null === a || void 0 === a || a(c);
                        }
                      })(),
                      () => i()
                    );
                  })();
            })(e, t),
          watchBlockNumber: (t) => (0, Ye.q)(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              const {
                abi: n,
                address: r,
                args: o,
                batch: s = !0,
                eventName: a,
                fromBlock: i,
                onError: c,
                onLogs: l,
                poll: d,
                pollingInterval: f = e.pollingInterval,
                strict: h,
              } = t;
              return (
                "undefined" !== typeof d
                  ? d
                  : "bigint" === typeof i ||
                    ("webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type))
              )
                ? (() => {
                    const t = null !== h && void 0 !== h && h,
                      d = (0, je.A)([
                        "watchContractEvent",
                        r,
                        o,
                        s,
                        e.uid,
                        a,
                        f,
                        t,
                        i,
                      ]);
                    return (0, Qe.lB)(d, { onLogs: l, onError: c }, (c) => {
                      let l, d;
                      void 0 !== i && (l = i - 1n);
                      let h = !1;
                      const p = (0, Xe.w)(
                        async () => {
                          if (h)
                            try {
                              let i;
                              if (d)
                                i = await (0, u.T)(
                                  e,
                                  X.I,
                                  "getFilterChanges"
                                )({ filter: d });
                              else {
                                const s = await (0, u.T)(
                                  e,
                                  D.G,
                                  "getBlockNumber"
                                )({});
                                (i =
                                  l && l < s
                                    ? await (0, u.T)(
                                        e,
                                        J,
                                        "getContractEvents"
                                      )({
                                        abi: n,
                                        address: r,
                                        args: o,
                                        eventName: a,
                                        fromBlock: l + 1n,
                                        toBlock: s,
                                        strict: t,
                                      })
                                    : []),
                                  (l = s);
                              }
                              if (0 === i.length) return;
                              if (s) c.onLogs(i);
                              else for (const e of i) c.onLogs([e]);
                            } catch (p) {
                              var f;
                              d && p instanceof et.Di && (h = !1),
                                null === (f = c.onError) ||
                                  void 0 === f ||
                                  f.call(c, p);
                            }
                          else {
                            try {
                              d = await (0, u.T)(
                                e,
                                F,
                                "createContractEventFilter"
                              )({
                                abi: n,
                                address: r,
                                args: o,
                                eventName: a,
                                strict: t,
                                fromBlock: i,
                              });
                            } catch {}
                            h = !0;
                          }
                        },
                        { emitOnBegin: !0, interval: f }
                      );
                      return async () => {
                        d &&
                          (await (0, u.T)(
                            e,
                            we.Z,
                            "uninstallFilter"
                          )({ filter: d })),
                          p();
                      };
                    });
                  })()
                : (() => {
                    const t = null !== h && void 0 !== h && h,
                      i = (0, je.A)([
                        "watchContractEvent",
                        r,
                        o,
                        s,
                        e.uid,
                        a,
                        f,
                        t,
                      ]);
                    let u = !0,
                      d = () => (u = !1);
                    return (0, Qe.lB)(
                      i,
                      { onLogs: l, onError: c },
                      (t) => (
                        (async () => {
                          try {
                            const s = (() => {
                                if ("fallback" === e.transport.type) {
                                  const t = e.transport.transports.find(
                                    (e) => "webSocket" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              i = a ? N({ abi: n, eventName: a, args: o }) : [],
                              { unsubscribe: c } = await s.subscribe({
                                params: ["logs", { address: r, topics: i }],
                                onData(e) {
                                  if (!u) return;
                                  const r = e.result;
                                  try {
                                    const { eventName: e, args: o } = (0, tt.j)(
                                        {
                                          abi: n,
                                          data: r.data,
                                          topics: r.topics,
                                          strict: h,
                                        }
                                      ),
                                      s = (0, W.e)(r, {
                                        args: o,
                                        eventName: e,
                                      });
                                    t.onLogs([s]);
                                  } catch (s) {
                                    let e, n;
                                    if (
                                      s instanceof w.fo ||
                                      s instanceof w.l3
                                    ) {
                                      var o;
                                      if (h) return;
                                      (e = s.abiItem.name),
                                        (n =
                                          null === (o = s.abiItem.inputs) ||
                                          void 0 === o
                                            ? void 0
                                            : o.some(
                                                (e) => !("name" in e && e.name)
                                              ));
                                    }
                                    const a = (0, W.e)(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([a]);
                                  }
                                },
                                onError(e) {
                                  var n;
                                  null === (n = t.onError) ||
                                    void 0 === n ||
                                    n.call(t, e);
                                },
                              });
                            (d = c), u || d();
                          } catch (s) {
                            null === c || void 0 === c || c(s);
                          }
                        })(),
                        () => d()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (e, t) {
              let {
                address: n,
                args: r,
                batch: o = !0,
                event: s,
                events: a,
                fromBlock: i,
                onError: c,
                onLogs: l,
                poll: d,
                pollingInterval: f = e.pollingInterval,
                strict: h,
              } = t;
              const p =
                  "undefined" !== typeof d
                    ? d
                    : "bigint" === typeof i ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                m = null !== h && void 0 !== h && h;
              return p
                ? (() => {
                    const t = (0, je.A)([
                      "watchEvent",
                      n,
                      r,
                      o,
                      e.uid,
                      s,
                      f,
                      i,
                    ]);
                    return (0, Qe.lB)(t, { onLogs: l, onError: c }, (t) => {
                      let c, l;
                      void 0 !== i && (c = i - 1n);
                      let d = !1;
                      const h = (0, Xe.w)(
                        async () => {
                          if (d)
                            try {
                              let i;
                              if (l)
                                i = await (0, u.T)(
                                  e,
                                  X.I,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                const t = await (0, u.T)(
                                  e,
                                  D.G,
                                  "getBlockNumber"
                                )({});
                                (i =
                                  c && c !== t
                                    ? await (0, u.T)(
                                        e,
                                        K,
                                        "getLogs"
                                      )({
                                        address: n,
                                        args: r,
                                        event: s,
                                        events: a,
                                        fromBlock: c + 1n,
                                        toBlock: t,
                                      })
                                    : []),
                                  (c = t);
                              }
                              if (0 === i.length) return;
                              if (o) t.onLogs(i);
                              else for (const e of i) t.onLogs([e]);
                            } catch (h) {
                              var f;
                              l && h instanceof et.Di && (d = !1),
                                null === (f = t.onError) ||
                                  void 0 === f ||
                                  f.call(t, h);
                            }
                          else {
                            try {
                              l = await (0, u.T)(
                                e,
                                M,
                                "createEventFilter"
                              )({
                                address: n,
                                args: r,
                                event: s,
                                events: a,
                                strict: m,
                                fromBlock: i,
                              });
                            } catch {}
                            d = !0;
                          }
                        },
                        { emitOnBegin: !0, interval: f }
                      );
                      return async () => {
                        l &&
                          (await (0, u.T)(
                            e,
                            we.Z,
                            "uninstallFilter"
                          )({ filter: l })),
                          h();
                      };
                    });
                  })()
                : (() => {
                    let t = !0,
                      o = () => (t = !1);
                    return (
                      (async () => {
                        try {
                          const i = (() => {
                              if ("fallback" === e.transport.type) {
                                const t = e.transport.transports.find(
                                  (e) => "webSocket" === e.config.type
                                );
                                return t ? t.value : e.transport;
                              }
                              return e.transport;
                            })(),
                            u =
                              null !== a && void 0 !== a ? a : s ? [s] : void 0;
                          let d = [];
                          if (u) {
                            const e = u.flatMap((e) =>
                              N({ abi: [e], eventName: e.name, args: r })
                            );
                            (d = [e]), s && (d = d[0]);
                          }
                          const { unsubscribe: f } = await i.subscribe({
                            params: ["logs", { address: n, topics: d }],
                            onData(e) {
                              if (!t) return;
                              const n = e.result;
                              try {
                                const { eventName: e, args: t } = (0, tt.j)({
                                    abi: null !== u && void 0 !== u ? u : [],
                                    data: n.data,
                                    topics: n.topics,
                                    strict: m,
                                  }),
                                  r = (0, W.e)(n, { args: t, eventName: e });
                                l([r]);
                              } catch (o) {
                                let e, t;
                                if (o instanceof w.fo || o instanceof w.l3) {
                                  var r;
                                  if (h) return;
                                  (e = o.abiItem.name),
                                    (t =
                                      null === (r = o.abiItem.inputs) ||
                                      void 0 === r
                                        ? void 0
                                        : r.some(
                                            (e) => !("name" in e && e.name)
                                          ));
                                }
                                const s = (0, W.e)(n, {
                                  args: t ? [] : {},
                                  eventName: e,
                                });
                                l([s]);
                              }
                            },
                            onError(e) {
                              null === c || void 0 === c || c(e);
                            },
                          });
                          (o = f), t || o();
                        } catch (i) {
                          null === c || void 0 === c || c(i);
                        }
                      })(),
                      () => o()
                    );
                  })();
            })(e, t),
          watchPendingTransactions: (t) => (0, nt.u)(e, t),
        };
      }
    },
    3446: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => o, R: () => r });
      const r = (e) => e,
        o = (e) => e;
    },
    6662: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => s });
      var r = n(43664),
        o = n(46735);
      async function s(e, t) {
        let { filter: n } = t;
        const s = "strict" in n && n.strict,
          a = await n.request({
            method: "eth_getFilterChanges",
            params: [n.id],
          });
        if ("string" === typeof a[0]) return a;
        const i = a.map((e) => (0, o.e)(e));
        return "abi" in n && n.abi
          ? (0, r.p)({ abi: n.abi, logs: i, strict: s })
          : i;
      }
    },
    6693: (e, t, n) => {
      "use strict";
      async function r(e, t) {
        let { filter: n } = t;
        return n.request({ method: "eth_uninstallFilter", params: [n.id] });
      }
      n.d(t, { Z: () => r });
    },
    6980: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => s });
      var r = n(39815),
        o = n(302);
      function s(e, t) {
        if (!(0, o.P)(e, { strict: !1 })) throw new r.M({ address: e });
        if (!(0, o.P)(t, { strict: !1 })) throw new r.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    7806: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => s });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { value: t } = e;
          super(`Number \`${t}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      function s(e, t) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new o({ value: e });
        let [n, r = "0"] = e.split(".");
        const s = n.startsWith("-");
        if ((s && (n = n.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(`.${r}`)) && (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > t) {
          const [e, o, s] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
            a = Math.round(Number(`${o}.${s}`));
          (r =
            a > 9
              ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
              : `${e}${a}`),
            r.length > t && ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (r = r.slice(0, t));
        } else r = r.padEnd(t, "0");
        return BigInt(`${s ? "-" : ""}${n}${r}`);
      }
    },
    8237: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => s });
      var r = n(35607),
        o = n(25966);
      function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "wei";
        return (0, o.J)(e, r.sz[t]);
      }
    },
    9292: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => p, k: () => g });
      var r = n(37193),
        o = n(39815),
        s = n(82636),
        a = n(74118),
        i = n(302),
        c = n(70248),
        u = n(69787),
        l = n(88925),
        d = n(46744),
        f = n(60713),
        h = n(66178);
      function p(e, t) {
        if (e.length !== t.length)
          throw new r.YE({ expectedLength: e.length, givenLength: t.length });
        const n = (function (e) {
            let { params: t, values: n } = e;
            const r = [];
            for (let o = 0; o < t.length; o++)
              r.push(m({ param: t[o], value: n[o] }));
            return r;
          })({ params: e, values: t }),
          o = b(n);
        return 0 === o.length ? "0x" : o;
      }
      function m(e) {
        let { param: t, value: n } = e;
        const p = g(t.type);
        if (p) {
          const [e, o] = p;
          return (function (e, t) {
            let { length: n, param: o } = t;
            const s = null === n;
            if (!Array.isArray(e)) throw new r.dm(e);
            if (!s && e.length !== n)
              throw new r.Nc({
                expectedLength: n,
                givenLength: e.length,
                type: `${o.type}[${n}]`,
              });
            let a = !1;
            const i = [];
            for (let r = 0; r < e.length; r++) {
              const t = m({ param: o, value: e[r] });
              t.dynamic && (a = !0), i.push(t);
            }
            if (s || a) {
              const e = b(i);
              if (s) {
                const t = (0, f.cK)(i.length, { size: 32 });
                return {
                  dynamic: !0,
                  encoded: i.length > 0 ? (0, c.xW)([t, e]) : t,
                };
              }
              if (a) return { dynamic: !0, encoded: e };
            }
            return {
              dynamic: !1,
              encoded: (0, c.xW)(
                i.map((e) => {
                  let { encoded: t } = e;
                  return t;
                })
              ),
            };
          })(n, { length: e, param: { ...t, type: o } });
        }
        if ("tuple" === t.type)
          return (function (e, t) {
            let { param: n } = t,
              r = !1;
            const o = [];
            for (let s = 0; s < n.components.length; s++) {
              const t = n.components[s],
                a = m({ param: t, value: e[Array.isArray(e) ? s : t.name] });
              o.push(a), a.dynamic && (r = !0);
            }
            return {
              dynamic: r,
              encoded: r
                ? b(o)
                : (0, c.xW)(
                    o.map((e) => {
                      let { encoded: t } = e;
                      return t;
                    })
                  ),
            };
          })(n, { param: t });
        if ("address" === t.type)
          return (function (e) {
            if (!(0, i.P)(e)) throw new o.M({ address: e });
            return { dynamic: !1, encoded: (0, u.db)(e.toLowerCase()) };
          })(n);
        if ("bool" === t.type)
          return (function (e) {
            if ("boolean" !== typeof e)
              throw new s.C(
                `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
              );
            return { dynamic: !1, encoded: (0, u.db)((0, f.$P)(e)) };
          })(n);
        if (t.type.startsWith("uint") || t.type.startsWith("int")) {
          var y;
          const e = t.type.startsWith("int"),
            [, , r = "256"] =
              null !== (y = h.Ge.exec(t.type)) && void 0 !== y ? y : [];
          return (function (e, t) {
            let { signed: n, size: r = 256 } = t;
            if ("number" === typeof r) {
              const t = 2n ** (BigInt(r) - (n ? 1n : 0n)) - 1n,
                o = n ? -t - 1n : 0n;
              if (e > t || e < o)
                throw new a.Ty({
                  max: t.toString(),
                  min: o.toString(),
                  signed: n,
                  size: r / 8,
                  value: e.toString(),
                });
            }
            return {
              dynamic: !1,
              encoded: (0, f.cK)(e, { size: 32, signed: n }),
            };
          })(n, { signed: e, size: Number(r) });
        }
        if (t.type.startsWith("bytes"))
          return (function (e, t) {
            let { param: n } = t;
            const [, o] = n.type.split("bytes"),
              s = (0, l.E)(e);
            if (!o) {
              let t = e;
              return (
                s % 32 !== 0 &&
                  (t = (0, u.db)(t, {
                    dir: "right",
                    size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                  })),
                {
                  dynamic: !0,
                  encoded: (0, c.xW)([
                    (0, u.db)((0, f.cK)(s, { size: 32 })),
                    t,
                  ]),
                }
              );
            }
            if (s !== Number.parseInt(o))
              throw new r.gH({ expectedSize: Number.parseInt(o), value: e });
            return { dynamic: !1, encoded: (0, u.db)(e, { dir: "right" }) };
          })(n, { param: t });
        if ("string" === t.type)
          return (function (e) {
            const t = (0, f.i3)(e),
              n = Math.ceil((0, l.E)(t) / 32),
              r = [];
            for (let o = 0; o < n; o++)
              r.push(
                (0, u.db)((0, d.di)(t, 32 * o, 32 * (o + 1)), { dir: "right" })
              );
            return {
              dynamic: !0,
              encoded: (0, c.xW)([
                (0, u.db)((0, f.cK)((0, l.E)(t), { size: 32 })),
                ...r,
              ]),
            };
          })(n);
        throw new r.nK(t.type, {
          docsPath: "/docs/contract/encodeAbiParameters",
        });
      }
      function b(e) {
        let t = 0;
        for (let s = 0; s < e.length; s++) {
          const { dynamic: n, encoded: r } = e[s];
          t += n ? 32 : (0, l.E)(r);
        }
        const n = [],
          r = [];
        let o = 0;
        for (let s = 0; s < e.length; s++) {
          const { dynamic: a, encoded: i } = e[s];
          a
            ? (n.push((0, f.cK)(t + o, { size: 32 })),
              r.push(i),
              (o += (0, l.E)(i)))
            : n.push(i);
        }
        return (0, c.xW)([...n, ...r]);
      }
      function g(e) {
        const t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    10201: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => u });
      var r = n(38302),
        o = n(47448),
        s = n(39815),
        a = n(11307),
        i = n(66127),
        c = n(302);
      function u(e) {
        const {
            account: t,
            gasPrice: n,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            to: d,
          } = e,
          f = t ? (0, r.J)(t) : void 0;
        if (f && !(0, c.P)(f.address)) throw new s.M({ address: f.address });
        if (d && !(0, c.P)(d)) throw new s.M({ address: d });
        if (
          "undefined" !== typeof n &&
          ("undefined" !== typeof u || "undefined" !== typeof l)
        )
          throw new i.n3();
        if (u && u > o.Ao) throw new a.BG({ maxFeePerGas: u });
        if (l && u && l > u)
          throw new a.lN({ maxFeePerGas: u, maxPriorityFeePerGas: l });
      }
    },
    10726: (e, t, n) => {
      "use strict";
      n.d(t, { EQ: () => i });
      var r = n(82636),
        o = n(60371),
        s = n(66119),
        a = n(60713);
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "hex";
        const n = c(e),
          r = (0, o.l)(new Uint8Array(n.length));
        return n.encode(r), "hex" === t ? (0, a.My)(r.bytes) : r.bytes;
      }
      function c(e) {
        return Array.isArray(e)
          ? (function (e) {
              const t = e.reduce((e, t) => e + t.length, 0),
                n = u(t);
              return {
                length: t <= 55 ? 1 + t : 1 + n + t,
                encode(r) {
                  t <= 55
                    ? r.pushByte(192 + t)
                    : (r.pushByte(247 + n),
                      1 === n
                        ? r.pushUint8(t)
                        : 2 === n
                        ? r.pushUint16(t)
                        : 3 === n
                        ? r.pushUint24(t)
                        : r.pushUint32(t));
                  for (const { encode: t } of e) t(r);
                },
              };
            })(e.map((e) => c(e)))
          : (function (e) {
              const t = "string" === typeof e ? (0, s.aT)(e) : e,
                n = u(t.length),
                r =
                  1 === t.length && t[0] < 128
                    ? 1
                    : t.length <= 55
                    ? 1 + t.length
                    : 1 + n + t.length;
              return {
                length: r,
                encode(e) {
                  1 === t.length && t[0] < 128
                    ? e.pushBytes(t)
                    : t.length <= 55
                    ? (e.pushByte(128 + t.length), e.pushBytes(t))
                    : (e.pushByte(183 + n),
                      1 === n
                        ? e.pushUint8(t.length)
                        : 2 === n
                        ? e.pushUint16(t.length)
                        : 3 === n
                        ? e.pushUint24(t.length)
                        : e.pushUint32(t.length),
                      e.pushBytes(t));
                },
              };
            })(e);
      }
      function u(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 2 ** 24) return 3;
        if (e < 2 ** 32) return 4;
        throw new r.C("Length is too large.");
      }
    },
    11307: (e, t, n) => {
      "use strict";
      n.d(t, {
        A7: () => s,
        BG: () => a,
        Fo: () => h,
        K0: () => c,
        Oh: () => u,
        RM: () => b,
        jj: () => i,
        k5: () => d,
        lN: () => m,
        lY: () => f,
        uC: () => p,
        vW: () => l,
      });
      var r = n(8237),
        o = n(82636);
      class s extends o.C {
        constructor() {
          var e;
          let { cause: t, message: n } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const r =
            null === n ||
            void 0 === n ||
            null === (e = n.replace("execution reverted: ", "")) ||
            void 0 === e
              ? void 0
              : e.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: t, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(s, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends o.C {
        constructor() {
          let { cause: e, maxFeePerGas: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class i extends o.C {
        constructor() {
          let { cause: e, maxFeePerGas: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(i, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends o.C {
        constructor() {
          let { cause: e, nonce: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends o.C {
        constructor() {
          let { cause: e, nonce: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            [
              `Nonce provided for the transaction ${
                t ? `(${t}) ` : ""
              }is lower than the current nonce of the account.`,
              "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
            ].join("\n"),
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends o.C {
        constructor() {
          let { cause: e, nonce: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends o.C {
        constructor() {
          let { cause: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            [
              "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            ].join("\n"),
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class f extends o.C {
        constructor() {
          let { cause: e, gas: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class h extends o.C {
        constructor() {
          let { cause: e, gas: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends o.C {
        constructor(e) {
          let { cause: t } = e;
          super("The transaction type is not supported for this chain.", {
            cause: t,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class m extends o.C {
        constructor() {
          let {
            cause: e,
            maxPriorityFeePerGas: t,
            maxFeePerGas: n,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          super(
            [
              `The provided tip (\`maxPriorityFeePerGas\`${
                t ? ` = ${(0, r.Q)(t)} gwei` : ""
              }) cannot be higher than the fee cap (\`maxFeePerGas\`${
                n ? ` = ${(0, r.Q)(n)} gwei` : ""
              }).`,
            ].join("\n"),
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(m, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class b extends o.C {
        constructor(e) {
          let { cause: t } = e;
          super(
            `An error occurred while executing: ${
              null === t || void 0 === t ? void 0 : t.shortMessage
            }`,
            { cause: t, name: "UnknownNodeError" }
          );
        }
      }
    },
    11607: (e, t, n) => {
      "use strict";
      n.d(t, { RR: () => i, pw: () => a, sM: () => s });
      var r = n(8237),
        o = n(82636);
      class s extends o.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class a extends o.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class i extends o.C {
        constructor(e) {
          let { maxPriorityFeePerGas: t } = e;
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            r.Q)(t)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    14335: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => r });
      const r = 1;
    },
    14459: (e, t, n) => {
      "use strict";
      function r(e, t) {
        return (n) => {
          let { exclude: r, format: o } = n;
          return {
            exclude: r,
            format: (e) => {
              const n = t(e);
              if (r) for (const t of r) delete n[t];
              return { ...n, ...o(e) };
            },
            type: e,
          };
        };
      }
      n.d(t, { q: () => r });
    },
    14611: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => a });
      var r = n(556),
        o = n(82636),
        s = n(17999);
      function a(e, t) {
        var n, a, i, c, u, l;
        if (!(e instanceof o.C)) return !1;
        const d = e.walk((e) => e instanceof s.M);
        return (
          d instanceof s.M &&
          ("ResolverNotFound" ===
            (null === (n = d.data) || void 0 === n ? void 0 : n.errorName) ||
            "ResolverWildcardNotSupported" ===
              (null === (a = d.data) || void 0 === a ? void 0 : a.errorName) ||
            "ResolverNotContract" ===
              (null === (i = d.data) || void 0 === i ? void 0 : i.errorName) ||
            "ResolverError" ===
              (null === (c = d.data) || void 0 === c ? void 0 : c.errorName) ||
            "HttpError" ===
              (null === (u = d.data) || void 0 === u ? void 0 : u.errorName) ||
            !(
              null === (l = d.reason) ||
              void 0 === l ||
              !l.includes("Wildcard on non-extended resolvers is not supported")
            ) ||
            ("reverse" === t && d.reason === r.fD[50]))
        );
      }
    },
    14698: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => u });
      var r = n(1960),
        o = n(68113);
      var s = n(93935),
        a = n(33910),
        i = n(60713);
      function c(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw new Error("Invalid yParityOrV value");
      }
      async function u(e) {
        let { hash: t, signature: u } = e;
        return (function (e) {
          const t = (0, o.S)(`0x${e.substring(4)}`).substring(26);
          return (0, r.o)(`0x${t}`);
        })(
          await (async function (e) {
            let { hash: t, signature: r } = e;
            const o = (0, s.q)(t) ? t : (0, i.nj)(t),
              { secp256k1: u } = await Promise.resolve().then(n.bind(n, 85236));
            return `0x${(() => {
              if ("object" === typeof r && "r" in r && "s" in r) {
                const { r: e, s: t, v: n, yParity: o } = r,
                  s = c(Number(null !== o && void 0 !== o ? o : n));
                return new u.Signature(
                  (0, a.uU)(e),
                  (0, a.uU)(t)
                ).addRecoveryBit(s);
              }
              const e = (0, s.q)(r) ? r : (0, i.nj)(r),
                t = c((0, a.ME)(`0x${e.slice(130)}`));
              return u.Signature.fromCompact(
                e.substring(2, 130)
              ).addRecoveryBit(t);
            })()
              .recoverPublicKey(o.substring(2))
              .toHex(!1)}`;
          })({ hash: t, signature: u })
        );
      }
    },
    14718: (e, t, n) => {
      "use strict";
      n.d(t, { Hi: () => o, ft: () => s, uj: () => i });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { address: t } = e;
          super(`State for account "${t}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class s extends r.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function a(e) {
        return e.reduce((e, t) => {
          let { slot: n, value: r } = t;
          return `${e}        ${n}: ${r}\n`;
        }, "");
      }
      function i(e) {
        return e
          .reduce((e, t) => {
            let { address: n, ...r } = t,
              o = `${e}    ${n}:\n`;
            return (
              r.nonce && (o += `      nonce: ${r.nonce}\n`),
              r.balance && (o += `      balance: ${r.balance}\n`),
              r.code && (o += `      code: ${r.code}\n`),
              r.state && ((o += "      state:\n"), (o += a(r.state))),
              r.stateDiff &&
                ((o += "      stateDiff:\n"), (o += a(r.stateDiff))),
              o
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    15856: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => o });
      var r = n(34343);
      function o(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          key: n = "custom",
          methods: o,
          name: s = "Custom Provider",
          retryDelay: a,
        } = t;
        return (i) => {
          var c;
          let { retryCount: u } = i;
          return (0, r.o)({
            key: n,
            methods: o,
            name: s,
            request: e.request.bind(e),
            retryCount: null !== (c = t.retryCount) && void 0 !== c ? c : u,
            retryDelay: a,
            type: "custom",
          });
        };
      }
    },
    17999: (e, t, n) => {
      "use strict";
      n.d(t, {
        zX: () => g,
        bG: () => y,
        M: () => v,
        rR: () => w,
        Po: () => x,
        $S: () => P,
      });
      var r = n(38302),
        o = n(556),
        s = n(53749),
        a = n(44696),
        i = n(84356);
      function c(e) {
        let {
          abiItem: t,
          args: n,
          includeFunctionName: r = !0,
          includeName: o = !1,
        } = e;
        if ("name" in t && "inputs" in t && t.inputs)
          return `${r ? t.name : ""}(${t.inputs
            .map(
              (e, t) =>
                `${o && e.name ? `${e.name}: ` : ""}${
                  "object" === typeof n[t] ? (0, i.A)(n[t]) : n[t]
                }`
            )
            .join(", ")})`;
      }
      var u = n(64807),
        l = n(84677),
        d = n(8237),
        f = n(37193),
        h = n(82636),
        p = n(14718),
        m = n(66127),
        b = n(3446);
      class g extends h.C {
        constructor(e, t) {
          var n;
          let {
            account: o,
            docsPath: s,
            chain: a,
            data: i,
            gas: c,
            gasPrice: u,
            maxFeePerGas: f,
            maxPriorityFeePerGas: h,
            nonce: b,
            to: g,
            value: y,
            stateOverride: v,
          } = t;
          const w = o ? (0, r.J)(o) : void 0;
          let x = (0, m.aO)({
            from: null === w || void 0 === w ? void 0 : w.address,
            to: g,
            value:
              "undefined" !== typeof y &&
              `${(0, l.c)(y)} ${
                (null === a ||
                void 0 === a ||
                null === (n = a.nativeCurrency) ||
                void 0 === n
                  ? void 0
                  : n.symbol) || "ETH"
              }`,
            data: i,
            gas: c,
            gasPrice: "undefined" !== typeof u && `${(0, d.Q)(u)} gwei`,
            maxFeePerGas: "undefined" !== typeof f && `${(0, d.Q)(f)} gwei`,
            maxPriorityFeePerGas:
              "undefined" !== typeof h && `${(0, d.Q)(h)} gwei`,
            nonce: b,
          });
          v && (x += `\n${(0, p.uj)(v)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: s,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                x,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class y extends h.C {
        constructor(e, t) {
          var n;
          let {
            abi: r,
            args: o,
            contractAddress: s,
            docsPath: i,
            functionName: l,
            sender: d,
          } = t;
          const f = (0, u.iY)({ abi: r, args: o, name: l }),
            h = f
              ? c({
                  abiItem: f,
                  args: o,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            p = f ? (0, a.B)(f, { includeName: !0 }) : void 0,
            g = (0, m.aO)({
              address: s && (0, b.R)(s),
              function: p,
              args:
                h &&
                "()" !== h &&
                `${[
                  ...Array(
                    null !==
                      (n = null === l || void 0 === l ? void 0 : l.length) &&
                      void 0 !== n
                      ? n
                      : 0
                  ).keys(),
                ]
                  .map(() => " ")
                  .join("")}${h}`,
              sender: d,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${l}".`,
            {
              cause: e,
              docsPath: i,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                g && "Contract Call:",
                g,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = r),
            (this.args = o),
            (this.cause = e),
            (this.contractAddress = s),
            (this.functionName = l),
            (this.sender = d);
        }
      }
      class v extends h.C {
        constructor(e) {
          let t,
            n,
            r,
            i,
            u,
            { abi: l, data: d, functionName: h, message: p } = e;
          if (d && "0x" !== d)
            try {
              n = (0, s.W)({ abi: l, data: d });
              const { abiItem: e, errorName: t, args: u } = n;
              if ("Error" === t) i = u[0];
              else if ("Panic" === t) {
                const [e] = u;
                i = o.fD[e];
              } else {
                var m;
                const n = e ? (0, a.B)(e, { includeName: !0 }) : void 0,
                  o =
                    e && u
                      ? c({
                          abiItem: e,
                          args: u,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                r = [
                  n ? `Error: ${n}` : "",
                  o && "()" !== o
                    ? `       ${[
                        ...Array(
                          null !==
                            (m =
                              null === t || void 0 === t ? void 0 : t.length) &&
                            void 0 !== m
                            ? m
                            : 0
                        ).keys(),
                      ]
                        .map(() => " ")
                        .join("")}${o}`
                    : "",
                ];
              }
            } catch (b) {
              t = b;
            }
          else p && (i = p);
          t instanceof f.Wq &&
            ((u = t.signature),
            (r = [
              `Unable to decode signature "${u}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`,
            ])),
            super(
              (i && "execution reverted" !== i) || u
                ? [
                    `The contract function "${h}" reverted with the following ${
                      u ? "signature" : "reason"
                    }:`,
                    i || u,
                  ].join("\n")
                : `The contract function "${h}" reverted.`,
              {
                cause: t,
                metaMessages: r,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = n),
            (this.raw = d),
            (this.reason = i),
            (this.signature = u);
        }
      }
      class w extends h.C {
        constructor(e) {
          let { functionName: t } = e;
          super(`The contract function "${t}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${t}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends h.C {
        constructor(e) {
          let { factory: t } = e;
          super(
            "Deployment for counterfactual contract call failed" +
              (t ? ` for factory "${t}".` : ""),
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class P extends h.C {
        constructor(e) {
          let { data: t, message: n } = e;
          super(n || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t);
        }
      }
    },
    18220: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let { format: n } = t;
        if (!n) return {};
        const r = {};
        return (
          (function t(n) {
            const o = Object.keys(n);
            for (const s of o)
              s in e && (r[s] = e[s]),
                n[s] &&
                  "object" === typeof n[s] &&
                  !Array.isArray(n[s]) &&
                  t(n[s]);
          })(n(e || {})),
          r
        );
      }
      n.d(t, { o: () => r });
    },
    19538: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var r = n(70248),
        o = n(9292),
        s = n(37193),
        a = n(46928),
        i = n(44696),
        c = n(64807);
      const u = "/docs/contract/encodeFunctionData";
      function l(e) {
        const { args: t } = e,
          { abi: n, functionName: l } =
            1 === e.abi.length &&
            null !== (d = e.functionName) &&
            void 0 !== d &&
            d.startsWith("0x")
              ? e
              : (function (e) {
                  const { abi: t, args: n, functionName: r } = e;
                  let o = t[0];
                  if (r) {
                    const e = (0, c.iY)({ abi: t, args: n, name: r });
                    if (!e) throw new s.Iz(r, { docsPath: u });
                    o = e;
                  }
                  if ("function" !== o.type)
                    throw new s.Iz(void 0, { docsPath: u });
                  return { abi: [o], functionName: (0, a.V)((0, i.B)(o)) };
                })(e);
        var d;
        const f = n[0],
          h = l,
          p =
            "inputs" in f && f.inputs
              ? (0, o.h)(f.inputs, null !== t && void 0 !== t ? t : [])
              : void 0;
        return (0, r.aP)([h, null !== p && void 0 !== p ? p : "0x"]);
      }
    },
    22884: (e, t, n) => {
      "use strict";
      function r(e, t) {
        var n, r;
        let { method: o } = t;
        const s = {};
        return (
          "fallback" === e.transport.type &&
            (null === (n = (r = e.transport).onResponse) ||
              void 0 === n ||
              n.call(r, (e) => {
                let { method: t, response: n, status: r, transport: a } = e;
                "success" === r && o === t && (s[n] = a.request);
              })),
          (t) => s[t] || e.request
        );
      }
      n.d(t, { g: () => r });
    },
    22895: (e, t, n) => {
      "use strict";
      n.d(t, { Fl: () => s, NV: () => a, ii: () => o });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { offset: t, position: n, size: r } = e;
          super(
            `Slice ${
              "start" === n ? "starting" : "ending"
            } at offset "${t}" is out-of-bounds (size: ${r}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class s extends r.C {
        constructor(e) {
          let { size: t, targetSize: n, type: r } = e;
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${t}) exceeds padding size (${n}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class a extends r.C {
        constructor(e) {
          let { size: t, targetSize: n, type: r } = e;
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    23569: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      var r = n(38302),
        o = n(69372),
        s = n(60713);
      async function a(e, t) {
        let { account: n = e.account, message: a } = t;
        if (!n) throw new o.T({ docsPath: "/docs/actions/wallet/signMessage" });
        const i = (0, r.J)(n);
        if (i.signMessage) return i.signMessage({ message: a });
        const c =
          "string" === typeof a
            ? (0, s.i3)(a)
            : a.raw instanceof Uint8Array
            ? (0, s.nj)(a.raw)
            : a.raw;
        return e.request(
          { method: "personal_sign", params: [c, i.address] },
          { retryCount: 0 }
        );
      }
    },
    23800: (e, t, n) => {
      "use strict";
      async function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      n.d(t, { u: () => r });
    },
    24166: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => i });
      const r = new Map(),
        o = new Map();
      async function s(e, t) {
        let { cacheKey: n, cacheTime: s = Number.POSITIVE_INFINITY } = t;
        const a = (function (e) {
            const t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, r),
              s = t(e, o);
            return {
              clear: () => {
                n.clear(), s.clear();
              },
              promise: n,
              response: s,
            };
          })(n),
          i = a.response.get();
        if (i && s > 0) {
          if (new Date().getTime() - i.created.getTime() < s) return i.data;
        }
        let c = a.promise.get();
        c || ((c = e()), a.promise.set(c));
        try {
          const e = await c;
          return a.response.set({ created: new Date(), data: e }), e;
        } finally {
          a.promise.clear();
        }
      }
      const a = (e) => `blockNumber.${e}`;
      async function i(e) {
        let { cacheTime: t = e.cacheTime } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = await s(() => e.request({ method: "eth_blockNumber" }), {
          cacheKey: a(e.uid),
          cacheTime: t,
        });
        return BigInt(n);
      }
    },
    24649: (e, t, n) => {
      "use strict";
      n.d(t, { Np: () => i });
      var r = n(11307),
        o = n(72040),
        s = n(23800),
        a = n(34343);
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          key: n = "fallback",
          name: r = "Fallback",
          rank: o = !1,
          shouldThrow: i = c,
          retryCount: u,
          retryDelay: l,
        } = t;
        return (t) => {
          let { chain: c, pollingInterval: d = 4e3, timeout: f, ...h } = t,
            p = e,
            m = () => {};
          const b = (0, a.o)(
            {
              key: n,
              name: r,
              async request(e) {
                let t,
                  { method: n, params: r } = e;
                const o = async function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  const s = p[e]({ ...h, chain: c, retryCount: 0, timeout: f });
                  try {
                    const e = await s.request({ method: n, params: r });
                    return (
                      m({
                        method: n,
                        params: r,
                        response: e,
                        transport: s,
                        status: "success",
                      }),
                      e
                    );
                  } catch (a) {
                    if (
                      (m({
                        error: a,
                        method: n,
                        params: r,
                        transport: s,
                        status: "error",
                      }),
                      i(a))
                    )
                      throw a;
                    if (e === p.length - 1) throw a;
                    if (
                      ((null !== t && void 0 !== t) ||
                        (t = p.slice(e + 1).some((e) => {
                          const { include: t, exclude: r } =
                            e({ chain: c }).config.methods || {};
                          return t ? t.includes(n) : !r || !r.includes(n);
                        })),
                      !t)
                    )
                      throw a;
                    return o(e + 1);
                  }
                };
                return o();
              },
              retryCount: u,
              retryDelay: l,
              type: "fallback",
            },
            {
              onResponse: (e) => (m = e),
              transports: p.map((e) => e({ chain: c, retryCount: 0 })),
            }
          );
          if (o) {
            var g;
            const e = "object" === typeof o ? o : {};
            !(function (e) {
              let {
                chain: t,
                interval: n = 4e3,
                onTransports: r,
                ping: o,
                sampleCount: a = 10,
                timeout: i = 1e3,
                transports: c,
                weights: u = {},
              } = e;
              const { stability: l = 0.7, latency: d = 0.3 } = u,
                f = [],
                h = async () => {
                  const e = await Promise.all(
                    c.map(async (e) => {
                      const n = e({ chain: t, retryCount: 0, timeout: i }),
                        r = Date.now();
                      let s, a;
                      try {
                        await (o
                          ? o({ transport: n })
                          : n.request({ method: "net_listening" })),
                          (a = 1);
                      } catch {
                        a = 0;
                      } finally {
                        s = Date.now();
                      }
                      return { latency: s - r, success: a };
                    })
                  );
                  f.push(e), f.length > a && f.shift();
                  const u = Math.max(
                      ...f.map((e) =>
                        Math.max(
                          ...e.map((e) => {
                            let { latency: t } = e;
                            return t;
                          })
                        )
                      )
                    ),
                    p = c
                      .map((e, t) => {
                        const n = f.map((e) => e[t].latency),
                          r = 1 - n.reduce((e, t) => e + t, 0) / n.length / u,
                          o = f.map((e) => e[t].success),
                          s = o.reduce((e, t) => e + t, 0) / o.length;
                        return 0 === s ? [0, t] : [d * r + l * s, t];
                      })
                      .sort((e, t) => t[0] - e[0]);
                  r(
                    p.map((e) => {
                      let [, t] = e;
                      return c[t];
                    })
                  ),
                    await (0, s.u)(n),
                    h();
                };
              h();
            })({
              chain: c,
              interval: null !== (g = e.interval) && void 0 !== g ? g : d,
              onTransports: (e) => (p = e),
              ping: e.ping,
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: p,
              weights: e.weights,
            });
          }
          return b;
        };
      }
      function c(e) {
        return !(
          !("code" in e) ||
          "number" !== typeof e.code ||
          (e.code !== o.YW.code &&
            e.code !== o.vx.code &&
            !r.A7.nodeMessage.test(e.message) &&
            5e3 !== e.code)
        );
      }
    },
    25085: (e, t, n) => {
      "use strict";
      async function r(e, t) {
        let { serializedTransaction: n } = t;
        return e.request(
          { method: "eth_sendRawTransaction", params: [n] },
          { retryCount: 0 }
        );
      }
      n.d(t, { L: () => r });
    },
    25966: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let n = e.toString();
        const r = n.startsWith("-");
        r && (n = n.slice(1)), (n = n.padStart(t, "0"));
        let [o, s] = [n.slice(0, n.length - t), n.slice(n.length - t)];
        return (
          (s = s.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${o || "0"}${s ? `.${s}` : ""}`
        );
      }
      n.d(t, { J: () => r });
    },
    27221: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => f });
      var r = n(94906),
        o = n(82636);
      class s extends o.C {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = n(72746),
        i = n(27752),
        c = n(84356);
      function u() {
        return {
          current: 0,
          take() {
            return this.current++;
          },
          reset() {
            this.current = 0;
          },
        };
      }
      const l = u();
      var d = n(34343);
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          batch: n,
          fetchOptions: o,
          key: u = "http",
          methods: f,
          name: h = "HTTP JSON-RPC",
          onFetchRequest: p,
          onFetchResponse: m,
          retryDelay: b,
          raw: g,
        } = t;
        return (y) => {
          var v, w;
          let { chain: x, retryCount: P, timeout: E } = y;
          const { batchSize: k = 1e3, wait: B = 0 } =
              "object" === typeof n ? n : {},
            I = null !== (v = t.retryCount) && void 0 !== v ? v : P,
            T =
              null !== (w = null !== E && void 0 !== E ? E : t.timeout) &&
              void 0 !== w
                ? w
                : 1e4,
            C =
              e ||
              (null === x || void 0 === x ? void 0 : x.rpcUrls.default.http[0]);
          if (!C) throw new s();
          const $ = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async request(n) {
                var o, s, a;
                const {
                    body: u,
                    onRequest: d = t.onRequest,
                    onResponse: f = t.onResponse,
                    timeout: h = null !== (o = t.timeout) && void 0 !== o
                      ? o
                      : 1e4,
                  } = n,
                  p = {
                    ...(null !== (s = t.fetchOptions) && void 0 !== s ? s : {}),
                    ...(null !== (a = n.fetchOptions) && void 0 !== a ? a : {}),
                  },
                  { headers: m, method: b, signal: g } = p;
                try {
                  var y;
                  const t = await (0, i.w)(
                    async (t) => {
                      var n, r, o;
                      let { signal: s } = t;
                      const a = {
                          ...p,
                          body: Array.isArray(u)
                            ? (0, c.A)(
                                u.map((e) => {
                                  var t;
                                  return {
                                    jsonrpc: "2.0",
                                    id:
                                      null !== (t = e.id) && void 0 !== t
                                        ? t
                                        : l.take(),
                                    ...e,
                                  };
                                })
                              )
                            : (0, c.A)({
                                jsonrpc: "2.0",
                                id:
                                  null !== (n = u.id) && void 0 !== n
                                    ? n
                                    : l.take(),
                                ...u,
                              }),
                          headers: { "Content-Type": "application/json", ...m },
                          method: b || "POST",
                          signal: g || (h > 0 ? s : null),
                        },
                        i = new Request(e, a),
                        f =
                          null !==
                            (r = await (null === d || void 0 === d
                              ? void 0
                              : d(i, a))) && void 0 !== r
                            ? r
                            : { ...a, url: e };
                      return await fetch(
                        null !== (o = f.url) && void 0 !== o ? o : e,
                        f
                      );
                    },
                    {
                      errorInstance: new r.MU({ body: u, url: e }),
                      timeout: h,
                      signal: !0,
                    }
                  );
                  let n;
                  if (
                    (f && (await f(t)),
                    null !== (y = t.headers.get("Content-Type")) &&
                      void 0 !== y &&
                      y.startsWith("application/json"))
                  )
                    n = await t.json();
                  else {
                    n = await t.text();
                    try {
                      n = JSON.parse(n || "{}");
                    } catch (v) {
                      if (t.ok) throw v;
                      n = { error: n };
                    }
                  }
                  if (!t.ok)
                    throw new r.Ci({
                      body: u,
                      details: (0, c.A)(n.error) || t.statusText,
                      headers: t.headers,
                      status: t.status,
                      url: e,
                    });
                  return n;
                } catch (v) {
                  if (v instanceof r.Ci) throw v;
                  if (v instanceof r.MU) throw v;
                  throw new r.Ci({ body: u, cause: v, url: e });
                }
              },
            };
          })(C, { fetchOptions: o, onRequest: p, onResponse: m, timeout: T });
          return (0, d.o)(
            {
              key: u,
              methods: f,
              name: h,
              async request(e) {
                let { method: t, params: o } = e;
                const s = { method: t, params: o },
                  { schedule: i } = (0, a.u)({
                    id: C,
                    wait: B,
                    shouldSplitBatch: (e) => e.length > k,
                    fn: (e) => $.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  [{ error: c, result: u }] = await (async (e) =>
                    n ? i(e) : [await $.request({ body: e })])(s);
                if (g) return { error: c, result: u };
                if (c) throw new r.J8({ body: s, error: c, url: C });
                return u;
              },
              retryCount: I,
              retryDelay: b,
              timeout: T,
              type: "http",
            },
            { fetchOptions: o, url: C }
          );
        };
      }
    },
    27630: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => o });
      var r = n(22884);
      async function o(e) {
        const t = (0, r.g)(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
    },
    27752: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let {
          errorInstance: n = new Error("timed out"),
          timeout: r,
          signal: o,
        } = t;
        return new Promise((t, s) => {
          (async () => {
            let a;
            try {
              const i = new AbortController();
              r > 0 &&
                (a = setTimeout(() => {
                  o ? i.abort() : s(n);
                }, r)),
                t(
                  await e({
                    signal:
                      (null === i || void 0 === i ? void 0 : i.signal) || null,
                  })
                );
            } catch (i) {
              "AbortError" === (null === i || void 0 === i ? void 0 : i.name) &&
                s(n),
                s(i);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      n.d(t, { w: () => r });
    },
    28406: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ag: () => a,
        Rm: () => u,
        SJ: () => c,
        _: () => l,
        b2: () => o,
        oX: () => i,
        v2: () => r,
      });
      const r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        o = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        s = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        a = [
          ...s,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        i = [
          ...s,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        c = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        u = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        l = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ];
    },
    29043: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => a });
      const r = 256;
      let o,
        s = r;
      function a() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 11;
        if (!o || s + e > 2 * r) {
          (o = ""), (s = 0);
          for (let e = 0; e < r; e++)
            o += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return o.substring(s, s++ + e);
      }
    },
    30569: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => l });
      var r = n(14698),
        o = n(70248),
        s = n(66119),
        a = n(60713),
        i = n(10726),
        c = n(68113);
      function u(e) {
        var t;
        const { chainId: n, nonce: r, to: u } = e,
          l = null !== (t = e.contractAddress) && void 0 !== t ? t : e.address,
          d = (0, c.S)(
            (0, o.aP)([
              "0x05",
              (0, i.EQ)([n ? (0, a.cK)(n) : "0x", l, r ? (0, a.cK)(r) : "0x"]),
            ])
          );
        return "bytes" === u ? (0, s.aT)(d) : d;
      }
      async function l(e) {
        const { authorization: t, signature: n } = e;
        return (0, r.x)({
          hash: u(t),
          signature: null !== n && void 0 !== n ? n : t,
        });
      }
    },
    31294: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => p });
      var r = n(57556),
        o = n(31323);
      const s = 32,
        a = 4096,
        i = s * a,
        c = 6 * i - 1 - 1 * a * 6;
      var u = n(43952),
        l = n(60371),
        d = n(88925),
        f = n(66119),
        h = n(60713);
      function p(e) {
        var t, n, p;
        const { data: m, kzg: b, to: g } = e,
          y =
            null !== (t = e.blobs) && void 0 !== t
              ? t
              : (function (e) {
                  var t;
                  const n =
                      null !== (t = e.to) && void 0 !== t
                        ? t
                        : "string" === typeof e.data
                        ? "hex"
                        : "bytes",
                    r = "string" === typeof e.data ? (0, f.aT)(e.data) : e.data,
                    o = (0, d.E)(r);
                  if (!o) throw new u.zF();
                  if (o > c) throw new u.iq({ maxSize: c, size: o });
                  const p = [];
                  let m = !0,
                    b = 0;
                  for (; m; ) {
                    const e = (0, l.l)(new Uint8Array(i));
                    let t = 0;
                    for (; t < a; ) {
                      const n = r.slice(b, b + (s - 1));
                      if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                        e.pushByte(128), (m = !1);
                        break;
                      }
                      t++, (b += 31);
                    }
                    p.push(e);
                  }
                  return "bytes" === n
                    ? p.map((e) => e.bytes)
                    : p.map((e) => (0, h.My)(e.bytes));
                })({ data: m, to: g }),
          v =
            null !== (n = e.commitments) && void 0 !== n
              ? n
              : (0, r.S)({ blobs: y, kzg: b, to: g }),
          w =
            null !== (p = e.proofs) && void 0 !== p
              ? p
              : (0, o.t)({ blobs: y, commitments: v, kzg: b, to: g }),
          x = [];
        for (let r = 0; r < y.length; r++)
          x.push({ blob: y[r], commitment: v[r], proof: w[r] });
        return x;
      }
    },
    31323: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => s });
      var r = n(66119),
        o = n(60713);
      function s(e) {
        var t;
        const { kzg: n } = e,
          s =
            null !== (t = e.to) && void 0 !== t
              ? t
              : "string" === typeof e.blobs[0]
              ? "hex"
              : "bytes",
          a =
            "string" === typeof e.blobs[0]
              ? e.blobs.map((e) => (0, r.aT)(e))
              : e.blobs,
          i =
            "string" === typeof e.commitments[0]
              ? e.commitments.map((e) => (0, r.aT)(e))
              : e.commitments,
          c = [];
        for (let r = 0; r < a.length; r++) {
          const e = a[r],
            t = i[r];
          c.push(Uint8Array.from(n.computeBlobKzgProof(e, t)));
        }
        return "bytes" === s ? c : c.map((e) => (0, o.My)(e));
      }
    },
    33910: (e, t, n) => {
      "use strict";
      n.d(t, {
        IQ: () => d,
        ME: () => l,
        Nx: () => u,
        Sl: () => i,
        uU: () => c,
      });
      var r = n(74118),
        o = n(88925),
        s = n(49440),
        a = n(66119);
      function i(e, t) {
        let { size: n } = t;
        if ((0, o.E)(e) > n)
          throw new r.u({ givenSize: (0, o.E)(e), maxSize: n });
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { signed: n } = t;
        t.size && i(e, { size: t.size });
        const r = BigInt(e);
        if (!n) return r;
        const o = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(o) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * o, "f")}`) - 1n;
      }
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e;
        if (
          (t.size && (i(n, { size: t.size }), (n = (0, s.B)(n))),
          "0x00" === (0, s.B)(n))
        )
          return !1;
        if ("0x01" === (0, s.B)(n)) return !0;
        throw new r.H2(n);
      }
      function l(e) {
        return Number(
          c(
            e,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          )
        );
      }
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = (0, a.aT)(e);
        return (
          t.size &&
            (i(n, { size: t.size }), (n = (0, s.B)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    34343: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => f });
      var r = n(82636),
        o = n(94906),
        s = n(72040),
        a = n(60713);
      const i = new (n(91384).A)(8192);
      var c = n(58629),
        u = n(84356);
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return async function (n) {
          var l;
          let d =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
              dedupe: f = !1,
              methods: h,
              retryDelay: p = 150,
              retryCount: m = 3,
              uid: b,
            } = { ...t, ...d },
            { method: g } = n;
          if (
            null !== h &&
            void 0 !== h &&
            null !== (l = h.exclude) &&
            void 0 !== l &&
            l.includes(g)
          )
            throw new s.ab(new Error("method not supported"), { method: g });
          if (null !== h && void 0 !== h && h.include && !h.include.includes(g))
            throw new s.ab(new Error("method not supported"), { method: g });
          return (function (e, t) {
            let { enabled: n = !0, id: r } = t;
            if (!n || !r) return e();
            if (i.get(r)) return i.get(r);
            const o = e().finally(() => i.delete(r));
            return i.set(r, o), o;
          })(
            () =>
              (0, c.b)(
                async () => {
                  try {
                    return await e(n);
                  } catch (t) {
                    const e = t;
                    switch (e.code) {
                      case s.XU.code:
                        throw new s.XU(e);
                      case s.CL.code:
                        throw new s.CL(e);
                      case s.Gi.code:
                        throw new s.Gi(e, { method: n.method });
                      case s.D5.code:
                        throw new s.D5(e);
                      case s.bq.code:
                        throw new s.bq(e);
                      case s.Di.code:
                        throw new s.Di(e);
                      case s.hA.code:
                        throw new s.hA(e);
                      case s.qZ.code:
                        throw new s.qZ(e);
                      case s.YW.code:
                        throw new s.YW(e);
                      case s.ab.code:
                        throw new s.ab(e, { method: n.method });
                      case s.s0.code:
                        throw new s.s0(e);
                      case s.xQ.code:
                        throw new s.xQ(e);
                      case s.vx.code:
                        throw new s.vx(e);
                      case s.sV.code:
                        throw new s.sV(e);
                      case s.Sf.code:
                        throw new s.Sf(e);
                      case s.RV.code:
                        throw new s.RV(e);
                      case s.xq.code:
                        throw new s.xq(e);
                      case s.ch.code:
                        throw new s.ch(e);
                      case s.L5.code:
                        throw new s.L5(e);
                      case s.WT.code:
                        throw new s.WT(e);
                      case s.hl.code:
                        throw new s.hl(e);
                      case s.cg.code:
                        throw new s.cg(e);
                      case s.uL.code:
                        throw new s.uL(e);
                      case s.G1.code:
                        throw new s.G1(e);
                      case s.jz.code:
                        throw new s.jz(e);
                      case 5e3:
                        throw new s.vx(e);
                      default:
                        if (t instanceof r.C) throw t;
                        throw new s.MI(e);
                    }
                  }
                },
                {
                  delay: (e) => {
                    let { count: t, error: n } = e;
                    if (n && n instanceof o.Ci) {
                      var r;
                      const e =
                        null === n ||
                        void 0 === n ||
                        null === (r = n.headers) ||
                        void 0 === r
                          ? void 0
                          : r.get("Retry-After");
                      if (null !== e && void 0 !== e && e.match(/\d/))
                        return 1e3 * Number.parseInt(e);
                    }
                    return (1 << t) * p;
                  },
                  retryCount: m,
                  shouldRetry: (e) => {
                    let { error: t } = e;
                    return (function (e) {
                      if ("code" in e && "number" === typeof e.code)
                        return (
                          -1 === e.code ||
                          e.code === s.s0.code ||
                          e.code === s.bq.code
                        );
                      if (e instanceof o.Ci && e.status)
                        return (
                          403 === e.status ||
                          408 === e.status ||
                          413 === e.status ||
                          429 === e.status ||
                          500 === e.status ||
                          502 === e.status ||
                          503 === e.status ||
                          504 === e.status
                        );
                      return !0;
                    })(t);
                  },
                }
              ),
            { enabled: f, id: f ? (0, a.i3)(`${b}.${(0, u.A)(n)}`) : void 0 }
          );
        };
      }
      var d = n(29043);
      function f(e, t) {
        let {
          key: n,
          methods: r,
          name: o,
          request: s,
          retryCount: a = 3,
          retryDelay: i = 150,
          timeout: c,
          type: u,
        } = e;
        return {
          config: {
            key: n,
            methods: r,
            name: o,
            request: s,
            retryCount: a,
            retryDelay: i,
            timeout: c,
            type: u,
          },
          request: l(s, {
            methods: r,
            retryCount: a,
            retryDelay: i,
            uid: (0, d.L)(),
          }),
          value: t,
        };
      }
    },
    34504: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => r });
      const r = n(69608).k;
    },
    34795: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => c });
      var r = n(52773),
        o = n(19538),
        s = n(94093),
        a = n(55903),
        i = n(86182);
      async function c(e, t) {
        const { abi: n, address: c, args: u, functionName: l, ...d } = t,
          f = (0, o.p)({ abi: n, args: u, functionName: l });
        try {
          const { data: t } = await (0, a.T)(
            e,
            i.T,
            "call"
          )({ ...d, data: f, to: c });
          return (0, r.e)({
            abi: n,
            args: u,
            functionName: l,
            data: t || "0x",
          });
        } catch (h) {
          throw (0, s.j)(h, {
            abi: n,
            address: c,
            args: u,
            docsPath: "/docs/contract/readContract",
            functionName: l,
          });
        }
      }
    },
    35607: (e, t, n) => {
      "use strict";
      n.d(t, { eL: () => r, pj: () => s, sz: () => o });
      const r = { gwei: 9, wei: 18 },
        o = { ether: -9, wei: 9 },
        s = { ether: -18, gwei: -9 };
    },
    35909: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => o });
      var r = n(33910);
      async function o(e) {
        const t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, r.ME)(t);
      }
    },
    36206: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => l });
      var r = n(55903),
        o = n(77885),
        s = n(3028),
        a = n(84356),
        i = n(27630),
        c = n(6662),
        u = n(6693);
      function l(e, t) {
        let {
          batch: n = !0,
          onError: l,
          onTransactions: d,
          poll: f,
          pollingInterval: h = e.pollingInterval,
        } = t;
        return ("undefined" !== typeof f ? f : "webSocket" !== e.transport.type)
          ? (() => {
              const t = (0, a.A)(["watchPendingTransactions", e.uid, n, h]);
              return (0, o.lB)(t, { onTransactions: d, onError: l }, (t) => {
                let o;
                const a = (0, s.w)(
                  async () => {
                    try {
                      if (!o)
                        try {
                          return void (o = await (0, r.T)(
                            e,
                            i.O,
                            "createPendingTransactionFilter"
                          )({}));
                        } catch (u) {
                          throw (a(), u);
                        }
                      const s = await (0, r.T)(
                        e,
                        c.I,
                        "getFilterChanges"
                      )({ filter: o });
                      if (0 === s.length) return;
                      if (n) t.onTransactions(s);
                      else for (const e of s) t.onTransactions([e]);
                    } catch (u) {
                      var s;
                      null === (s = t.onError) || void 0 === s || s.call(t, u);
                    }
                  },
                  { emitOnBegin: !0, interval: h }
                );
                return async () => {
                  o &&
                    (await (0, r.T)(e, u.Z, "uninstallFilter")({ filter: o })),
                    a();
                };
              });
            })()
          : (() => {
              let t = !0,
                n = () => (t = !1);
              return (
                (async () => {
                  try {
                    const { unsubscribe: r } = await e.transport.subscribe({
                      params: ["newPendingTransactions"],
                      onData(e) {
                        if (!t) return;
                        const n = e.result;
                        d([n]);
                      },
                      onError(e) {
                        null === l || void 0 === l || l(e);
                      },
                    });
                    (n = r), t || n();
                  } catch (r) {
                    null === l || void 0 === l || l(r);
                  }
                })(),
                () => n()
              );
            })();
      }
    },
    37193: (e, t, n) => {
      "use strict";
      n.d(t, {
        BI: () => E,
        EB: () => x,
        Iy: () => c,
        Iz: () => v,
        MR: () => w,
        M_: () => y,
        Nc: () => l,
        O: () => u,
        Wq: () => m,
        YE: () => f,
        YF: () => i,
        YW: () => a,
        ZP: () => h,
        _z: () => b,
        d_: () => $,
        dm: () => C,
        fo: () => k,
        gH: () => d,
        j: () => T,
        kE: () => g,
        l3: () => B,
        nK: () => I,
        nM: () => P,
        yy: () => p,
      });
      var r = n(44696),
        o = n(88925),
        s = n(82636);
      class a extends s.C {
        constructor(e) {
          let { docsPath: t } = e;
          super(
            [
              "A constructor was not found on the ABI.",
              "Make sure you are using the correct ABI and that the constructor exists on it.",
            ].join("\n"),
            { docsPath: t, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class i extends s.C {
        constructor(e) {
          let { docsPath: t } = e;
          super(
            [
              "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
              "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            ].join("\n"),
            { docsPath: t, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      s.C;
      class c extends s.C {
        constructor(e) {
          let { data: t, params: n, size: o } = e;
          super(
            [`Data size of ${o} bytes is too small for given parameters.`].join(
              "\n"
            ),
            {
              metaMessages: [
                `Params: (${(0, r.A)(n, { includeName: !0 })})`,
                `Data:   ${t} (${o} bytes)`,
              ],
              name: "AbiDecodingDataSizeTooSmallError",
            }
          ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t),
            (this.params = n),
            (this.size = o);
        }
      }
      class u extends s.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class l extends s.C {
        constructor(e) {
          let { expectedLength: t, givenLength: n, type: r } = e;
          super(
            [
              `ABI encoding array length mismatch for type ${r}.`,
              `Expected length: ${t}`,
              `Given length: ${n}`,
            ].join("\n"),
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends s.C {
        constructor(e) {
          let { expectedSize: t, value: n } = e;
          super(
            `Size of bytes "${n}" (bytes${(0, o.E)(
              n
            )}) does not match expected size (bytes${t}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class f extends s.C {
        constructor(e) {
          let { expectedLength: t, givenLength: n } = e;
          super(
            [
              "ABI encoding params/values length mismatch.",
              `Expected length (params): ${t}`,
              `Given length (values): ${n}`,
            ].join("\n"),
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class h extends s.C {
        constructor(e, t) {
          let { docsPath: n } = t;
          super(
            [
              `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).`,
              "Cannot encode error result without knowing what the parameter types are.",
              "Make sure you are using the correct ABI and that the inputs exist on it.",
            ].join("\n"),
            { docsPath: n, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class p extends s.C {
        constructor(e) {
          let { docsPath: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(
            [
              `Error ${e ? `"${e}" ` : ""}not found on ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
            ].join("\n"),
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class m extends s.C {
        constructor(e, t) {
          let { docsPath: n } = t;
          super(
            [
              `Encoded error signature "${e}" not found on ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            ].join("\n"),
            { docsPath: n, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class b extends s.C {
        constructor(e) {
          let { docsPath: t } = e;
          super("Cannot extract event signature from empty topics.", {
            docsPath: t,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class g extends s.C {
        constructor(e, t) {
          let { docsPath: n } = t;
          super(
            [
              `Encoded event signature "${e}" not found on ABI.`,
              "Make sure you are using the correct ABI and that the event exists on it.",
              `You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            ].join("\n"),
            { docsPath: n, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class y extends s.C {
        constructor(e) {
          let { docsPath: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(
            [
              `Event ${e ? `"${e}" ` : ""}not found on ABI.`,
              "Make sure you are using the correct ABI and that the event exists on it.",
            ].join("\n"),
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class v extends s.C {
        constructor(e) {
          let { docsPath: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(
            [
              `Function ${e ? `"${e}" ` : ""}not found on ABI.`,
              "Make sure you are using the correct ABI and that the function exists on it.",
            ].join("\n"),
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class w extends s.C {
        constructor(e, t) {
          let { docsPath: n } = t;
          super(
            [
              `Function "${e}" does not contain any \`outputs\` on ABI.`,
              "Cannot decode function result without knowing what the parameter types are.",
              "Make sure you are using the correct ABI and that the function exists on it.",
            ].join("\n"),
            { docsPath: n, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class x extends s.C {
        constructor(e, t) {
          let { docsPath: n } = t;
          super(
            [
              `Encoded function signature "${e}" not found on ABI.`,
              "Make sure you are using the correct ABI and that the function exists on it.",
              `You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            ].join("\n"),
            { docsPath: n, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class P extends s.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class E extends s.C {
        constructor(e) {
          let { expectedSize: t, givenSize: n } = e;
          super(`Expected bytes${t}, got bytes${n}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class k extends s.C {
        constructor(e) {
          let { abiItem: t, data: n, params: o, size: s } = e;
          super(
            [
              `Data size of ${s} bytes is too small for non-indexed event parameters.`,
            ].join("\n"),
            {
              metaMessages: [
                `Params: (${(0, r.A)(o, { includeName: !0 })})`,
                `Data:   ${n} (${s} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = t),
            (this.data = n),
            (this.params = o),
            (this.size = s);
        }
      }
      class B extends s.C {
        constructor(e) {
          let { abiItem: t, param: n } = e;
          super(
            [
              `Expected a topic for indexed event parameter${
                n.name ? ` "${n.name}"` : ""
              } on event "${(0, r.B)(t, { includeName: !0 })}".`,
            ].join("\n"),
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = t);
        }
      }
      class I extends s.C {
        constructor(e, t) {
          let { docsPath: n } = t;
          super(
            [
              `Type "${e}" is not a valid encoding type.`,
              "Please provide a valid ABI type.",
            ].join("\n"),
            { docsPath: n, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class T extends s.C {
        constructor(e, t) {
          let { docsPath: n } = t;
          super(
            [
              `Type "${e}" is not a valid decoding type.`,
              "Please provide a valid ABI type.",
            ].join("\n"),
            { docsPath: n, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class C extends s.C {
        constructor(e) {
          super([`Value "${e}" is not a valid array.`].join("\n"), {
            name: "InvalidArrayError",
          });
        }
      }
      class $ extends s.C {
        constructor(e) {
          super(
            [
              `"${e}" is not a valid definition type.`,
              'Valid types: "function", "event", "error"',
            ].join("\n"),
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      s.C;
    },
    37702: (e, t, n) => {
      "use strict";
      n.d(t, {
        DH: () => o,
        Fc: () => u,
        O8: () => s,
        Ow: () => a,
        Vw: () => d,
        ZJ: () => l,
        ld: () => f,
        qv: () => i,
      });
      var r = n(94656);
      function o(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function s(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function a(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      const i = (() =>
        68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])();
      function c(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function u(e) {
        for (let t = 0; t < e.length; t++) e[t] = c(e[t]);
      }
      "function" === typeof Uint8Array.from([]).toHex && Uint8Array.fromHex;
      function l(e) {
        return (
          "string" === typeof e &&
            (e = (function (e) {
              if ("string" !== typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, r.DO)(e),
          e
        );
      }
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      function f(e) {
        const t = (t) => e().update(l(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
    },
    38057: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => g, J: () => b });
      var r = n(28406),
        o = n(556),
        s = n(37193),
        a = n(46744),
        i = n(46928),
        c = n(85517),
        u = n(44696);
      var l = n(70248),
        d = n(9292),
        f = n(64807);
      const h = "/docs/contract/encodeErrorResult";
      function p(e) {
        const { abi: t, errorName: n, args: r } = e;
        let o = t[0];
        if (n) {
          const e = (0, f.iY)({ abi: t, args: r, name: n });
          if (!e) throw new s.yy(n, { docsPath: h });
          o = e;
        }
        if ("error" !== o.type) throw new s.yy(void 0, { docsPath: h });
        const a = (0, u.B)(o),
          c = (0, i.V)(a);
        let p = "0x";
        if (r && r.length > 0) {
          if (!o.inputs) throw new s.ZP(o.name, { docsPath: h });
          p = (0, d.h)(o.inputs, r);
        }
        return (0, l.aP)([c, p]);
      }
      const m = "/docs/contract/encodeFunctionResult";
      const b = "x-batch-gateway:true";
      async function g(e) {
        const { data: t, ccipRequest: n } = e,
          {
            args: [l],
          } = (function (e) {
            const { abi: t, data: n } = e,
              r = (0, a.di)(n, 0, 4),
              o = t.find(
                (e) => "function" === e.type && r === (0, i.V)((0, u.B)(e))
              );
            if (!o)
              throw new s.EB(r, {
                docsPath: "/docs/contract/decodeFunctionData",
              });
            return {
              functionName: o.name,
              args:
                "inputs" in o && o.inputs && o.inputs.length > 0
                  ? (0, c.n)(o.inputs, (0, a.di)(n, 4))
                  : void 0,
            };
          })({ abi: r.b2, data: t }),
          h = [],
          b = [];
        return (
          await Promise.all(
            l.map(async (e, t) => {
              try {
                (b[t] = await n(e)), (h[t] = !1);
              } catch (a) {
                (h[t] = !0),
                  (b[t] =
                    "HttpRequestError" === (s = a).name && s.status
                      ? p({
                          abi: r.b2,
                          errorName: "HttpError",
                          args: [s.status, s.shortMessage],
                        })
                      : p({
                          abi: [o.Mc],
                          errorName: "Error",
                          args: [
                            "shortMessage" in s ? s.shortMessage : s.message,
                          ],
                        }));
              }
              var s;
            })
          ),
          (function (e) {
            const { abi: t, functionName: n, result: r } = e;
            let o = t[0];
            if (n) {
              const e = (0, f.iY)({ abi: t, name: n });
              if (!e) throw new s.Iz(n, { docsPath: m });
              o = e;
            }
            if ("function" !== o.type) throw new s.Iz(void 0, { docsPath: m });
            if (!o.outputs) throw new s.MR(o.name, { docsPath: m });
            const a = (() => {
              if (0 === o.outputs.length) return [];
              if (1 === o.outputs.length) return [r];
              if (Array.isArray(r)) return r;
              throw new s.dm(r);
            })();
            return (0, d.h)(o.outputs, a);
          })({ abi: r.b2, functionName: "query", result: [h, b] })
        );
      }
    },
    38060: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => h });
      var r = n(28406),
        o = n(37193),
        s = n(82636),
        a = n(17999),
        i = n(52773),
        c = n(19538),
        u = n(84846),
        l = n(94093),
        d = n(55903),
        f = n(34795);
      async function h(e, t) {
        var n;
        const {
            allowFailure: h = !0,
            batchSize: p,
            blockNumber: m,
            blockTag: b,
            multicallAddress: g,
            stateOverride: y,
          } = t,
          v = t.contracts,
          w =
            null !== p && void 0 !== p
              ? p
              : ("object" ===
                  typeof (null === (n = e.batch) || void 0 === n
                    ? void 0
                    : n.multicall) &&
                  e.batch.multicall.batchSize) ||
                1024;
        let x = g;
        if (!x) {
          if (!e.chain)
            throw new Error(
              "client chain not configured. multicallAddress is required."
            );
          x = (0, u.M)({
            blockNumber: m,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        const P = [[]];
        let E = 0,
          k = 0;
        for (let r = 0; r < v.length; r++) {
          const { abi: e, address: t, args: n, functionName: o } = v[r];
          try {
            const r = (0, c.p)({ abi: e, args: n, functionName: o });
            (k += (r.length - 2) / 2),
              w > 0 &&
                k > w &&
                P[E].length > 0 &&
                (E++, (k = (r.length - 2) / 2), (P[E] = [])),
              (P[E] = [...P[E], { allowFailure: !0, callData: r, target: t }]);
          } catch (T) {
            const r = (0, l.j)(T, {
              abi: e,
              address: t,
              args: n,
              docsPath: "/docs/contract/multicall",
              functionName: o,
            });
            if (!h) throw r;
            P[E] = [...P[E], { allowFailure: !0, callData: "0x", target: t }];
          }
        }
        const B = await Promise.allSettled(
            P.map((t) =>
              (0, d.T)(
                e,
                f.J,
                "readContract"
              )({
                abi: r.v2,
                address: x,
                args: [t],
                blockNumber: m,
                blockTag: b,
                functionName: "aggregate3",
                stateOverride: y,
              })
            )
          ),
          I = [];
        for (let r = 0; r < B.length; r++) {
          const e = B[r];
          if ("rejected" === e.status) {
            if (!h) throw e.reason;
            for (let t = 0; t < P[r].length; t++)
              I.push({ status: "failure", error: e.reason, result: void 0 });
            continue;
          }
          const t = e.value;
          for (let n = 0; n < t.length; n++) {
            const { returnData: e, success: s } = t[n],
              { callData: c } = P[r][n],
              { abi: u, address: d, functionName: f, args: p } = v[I.length];
            try {
              if ("0x" === c) throw new o.O();
              if (!s) throw new a.$S({ data: e });
              const t = (0, i.e)({ abi: u, args: p, data: e, functionName: f });
              I.push(h ? { result: t, status: "success" } : t);
            } catch (T) {
              const e = (0, l.j)(T, {
                abi: u,
                address: d,
                args: p,
                docsPath: "/docs/contract/multicall",
                functionName: f,
              });
              if (!h) throw e;
              I.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (I.length !== v.length) throw new s.C("multicall results mismatch");
        return I;
      }
    },
    38302: (e, t, n) => {
      "use strict";
      function r(e) {
        return "string" === typeof e ? { address: e, type: "json-rpc" } : e;
      }
      n.d(t, { J: () => r });
    },
    38718: (e, t, n) => {
      "use strict";
      n.d(t, { LX: () => r, WN: () => o, nP: () => s });
      const r =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        o =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        s =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    39386: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => o });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { blockHash: t, blockNumber: n } = e,
            r = "Block";
          t && (r = `Block at hash "${t}"`),
            n && (r = `Block at number "${n}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    39815: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => o });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { address: t } = e;
          super(`Address "${t}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    41542: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => l });
      var r = n(37193),
        o = n(88925),
        s = n(34504),
        a = n(285),
        i = n(85517),
        c = n(44696);
      const u = "/docs/contract/decodeEventLog";
      function l(e) {
        const { abi: t, data: n, strict: l, topics: f } = e,
          h = null === l || void 0 === l || l,
          [p, ...m] = f;
        if (!p) throw new r._z({ docsPath: u });
        const b =
          1 === t.length
            ? t[0]
            : t.find((e) => "event" === e.type && p === (0, s.h)((0, c.B)(e)));
        if (!b || !("name" in b) || "event" !== b.type)
          throw new r.kE(p, { docsPath: u });
        const { name: g, inputs: y } = b,
          v =
            null === y || void 0 === y
              ? void 0
              : y.some((e) => !("name" in e && e.name));
        let w = v ? [] : {};
        const x = y.filter((e) => "indexed" in e && e.indexed);
        for (let o = 0; o < x.length; o++) {
          const e = x[o],
            t = m[o];
          if (!t) throw new r.l3({ abiItem: b, param: e });
          w[v ? o : e.name || o] = d({ param: e, value: t });
        }
        const P = y.filter((e) => !("indexed" in e && e.indexed));
        if (P.length > 0)
          if (n && "0x" !== n)
            try {
              const e = (0, i.n)(P, n);
              if (e)
                if (v) w = [...w, ...e];
                else for (let t = 0; t < P.length; t++) w[P[t].name] = e[t];
            } catch (E) {
              if (h) {
                if (E instanceof r.Iy || E instanceof a.SK)
                  throw new r.fo({
                    abiItem: b,
                    data: n,
                    params: P,
                    size: (0, o.E)(n),
                  });
                throw E;
              }
            }
          else if (h)
            throw new r.fo({ abiItem: b, data: "0x", params: P, size: 0 });
        return { eventName: g, args: Object.values(w).length > 0 ? w : void 0 };
      }
      function d(e) {
        let { param: t, value: n } = e;
        if (
          "string" === t.type ||
          "bytes" === t.type ||
          "tuple" === t.type ||
          t.type.match(/^(.*)\[(\d+)?\]$/)
        )
          return n;
        return ((0, i.n)([t], n) || [])[0];
      }
    },
    41912: (e, t, n) => {
      "use strict";
      function r() {
        let e = () => {},
          t = () => {};
        return {
          promise: new Promise((n, r) => {
            (e = n), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
      n.d(t, { Y: () => r });
    },
    43664: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => u });
      var r = n(37193),
        o = n(6980),
        s = n(66119),
        a = n(68113),
        i = n(34504),
        c = n(41542);
      function u(e) {
        const { abi: t, args: n, logs: u, strict: l = !0 } = e,
          d = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return u
          .map((e) => {
            try {
              const r = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, i.h)(t)
              );
              if (!r) return null;
              const u = (0, c.j)({ ...e, abi: [r], strict: l });
              return d && !d.includes(u.eventName)
                ? null
                : (function (e) {
                    const { args: t, inputs: n, matchArgs: r } = e;
                    if (!r) return !0;
                    if (!t) return !1;
                    function i(e, t, n) {
                      try {
                        return "address" === e.type
                          ? (0, o.h)(t, n)
                          : "string" === e.type || "bytes" === e.type
                          ? (0, a.S)((0, s.ZJ)(t)) === n
                          : t === n;
                      } catch {
                        return !1;
                      }
                    }
                    if (Array.isArray(t) && Array.isArray(r))
                      return r.every((e, r) => {
                        if (null === e || void 0 === e) return !0;
                        const o = n[r];
                        if (!o) return !1;
                        return (Array.isArray(e) ? e : [e]).some((e) =>
                          i(o, e, t[r])
                        );
                      });
                    return (
                      "object" === typeof t &&
                      !Array.isArray(t) &&
                      "object" === typeof r &&
                      !Array.isArray(r) &&
                      Object.entries(r).every((e) => {
                        let [r, o] = e;
                        if (null === o || void 0 === o) return !0;
                        const s = n.find((e) => e.name === r);
                        if (!s) return !1;
                        return (Array.isArray(o) ? o : [o]).some((e) =>
                          i(s, e, t[r])
                        );
                      })
                    );
                  })({ args: u.args, inputs: r.inputs, matchArgs: n })
                ? { ...u, ...e }
                : null;
            } catch (f) {
              let t, n;
              if (f instanceof r.kE) return null;
              if (f instanceof r.fo || f instanceof r.l3) {
                var u;
                if (l) return null;
                (t = f.abiItem.name),
                  (n =
                    null === (u = f.abiItem.inputs) || void 0 === u
                      ? void 0
                      : u.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
    },
    43952: (e, t, n) => {
      "use strict";
      n.d(t, { PK: () => c, iq: () => s, uP: () => i, zF: () => a });
      var r = n(14335),
        o = n(82636);
      class s extends o.C {
        constructor(e) {
          let { maxSize: t, size: n } = e;
          super("Blob size is too large.", {
            metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class a extends o.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      class i extends o.C {
        constructor(e) {
          let { hash: t, size: n } = e;
          super(`Versioned hash "${t}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${n}`],
            name: "InvalidVersionedHashSizeError",
          });
        }
      }
      class c extends o.C {
        constructor(e) {
          let { hash: t, version: n } = e;
          super(`Versioned hash "${t}" version is invalid.`, {
            metaMessages: [`Expected: ${r.E}`, `Received: ${n}`],
            name: "InvalidVersionedHashVersionError",
          });
        }
      }
    },
    44696: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s, B: () => o });
      var r = n(37193);
      function o(e) {
        let { includeName: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.d_(e.type);
        return `${e.name}(${s(e.inputs, { includeName: t })})`;
      }
      function s(e) {
        let { includeName: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e
          ? e
              .map((e) =>
                (function (e, t) {
                  let { includeName: n } = t;
                  if (e.type.startsWith("tuple"))
                    return `(${s(e.components, {
                      includeName: n,
                    })})${e.type.slice(5)}`;
                  return e.type + (n && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    45682: (e, t, n) => {
      "use strict";
      n.d(t, { E3H: () => S, NBY: () => j });
      var r = n(33910),
        o = n(89620),
        s = n(57825),
        a = n(84425);
      const i = {
        block: (0, o.R)({
          format(e) {
            var t;
            return {
              transactions:
                null === (t = e.transactions) || void 0 === t
                  ? void 0
                  : t.map((e) => {
                      if ("string" === typeof e) return e;
                      const t = (0, s.uP)(e);
                      return (
                        "0x7e" === t.typeHex &&
                          ((t.isSystemTx = e.isSystemTx),
                          (t.mint = e.mint ? (0, r.uU)(e.mint) : void 0),
                          (t.sourceHash = e.sourceHash),
                          (t.type = "deposit")),
                        t
                      );
                    }),
              stateRoot: e.stateRoot,
            };
          },
        }),
        transaction: (0, s.gU)({
          format(e) {
            const t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, r.uU)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, a.WB)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, r.uU)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, r.uU)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, r.uU)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var c = n(39815),
        u = n(302),
        l = n(70248),
        d = n(60713),
        f = n(10726),
        h = n(66127);
      var p = n(57556),
        m = n(31323),
        b = n(79108),
        g = n(31294),
        y = n(49440),
        v = n(14335),
        w = n(47448),
        x = n(82636),
        P = n(43952),
        E = n(92490),
        k = n(11307),
        B = n(88925),
        I = n(46744);
      function T(e) {
        const {
          chainId: t,
          maxPriorityFeePerGas: n,
          maxFeePerGas: r,
          to: o,
        } = e;
        if (t <= 0) throw new E.qD({ chainId: t });
        if (o && !(0, u.P)(o)) throw new c.M({ address: o });
        if (r && r > w.Ao) throw new k.BG({ maxFeePerGas: r });
        if (n && r && n > r)
          throw new k.lN({ maxFeePerGas: r, maxPriorityFeePerGas: n });
      }
      var C = n(55660);
      function $(e) {
        if (!e || 0 === e.length) return [];
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const { address: r, storageKeys: o } = e[n];
          for (let e = 0; e < o.length; e++)
            if (o[e].length - 2 !== 64) throw new h.fZ({ storageKey: o[e] });
          if (!(0, u.P)(r, { strict: !1 })) throw new c.M({ address: r });
          t.push([r, o]);
        }
        return t;
      }
      function N(e, t) {
        const n = (0, C.L)(e);
        return "eip1559" === n
          ? (function (e, t) {
              const {
                chainId: n,
                gas: r,
                nonce: o,
                to: s,
                value: a,
                maxFeePerGas: i,
                maxPriorityFeePerGas: c,
                accessList: u,
                data: h,
              } = e;
              T(e);
              const p = $(u),
                m = [
                  (0, d.nj)(n),
                  o ? (0, d.nj)(o) : "0x",
                  c ? (0, d.nj)(c) : "0x",
                  i ? (0, d.nj)(i) : "0x",
                  r ? (0, d.nj)(r) : "0x",
                  null !== s && void 0 !== s ? s : "0x",
                  a ? (0, d.nj)(a) : "0x",
                  null !== h && void 0 !== h ? h : "0x",
                  p,
                  ...A(e, t),
                ];
              return (0, l.aP)(["0x02", (0, f.EQ)(m)]);
            })(e, t)
          : "eip2930" === n
          ? (function (e, t) {
              const {
                chainId: n,
                gas: r,
                data: o,
                nonce: s,
                to: a,
                value: i,
                accessList: h,
                gasPrice: p,
              } = e;
              !(function (e) {
                const {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: o,
                  to: s,
                } = e;
                if (t <= 0) throw new E.qD({ chainId: t });
                if (s && !(0, u.P)(s)) throw new c.M({ address: s });
                if (n || o)
                  throw new x.C(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                  );
                if (r && r > w.Ao) throw new k.BG({ maxFeePerGas: r });
              })(e);
              const m = $(h),
                b = [
                  (0, d.nj)(n),
                  s ? (0, d.nj)(s) : "0x",
                  p ? (0, d.nj)(p) : "0x",
                  r ? (0, d.nj)(r) : "0x",
                  null !== a && void 0 !== a ? a : "0x",
                  i ? (0, d.nj)(i) : "0x",
                  null !== o && void 0 !== o ? o : "0x",
                  m,
                  ...A(e, t),
                ];
              return (0, l.aP)(["0x01", (0, f.EQ)(b)]);
            })(e, t)
          : "eip4844" === n
          ? (function (e, t) {
              const {
                chainId: n,
                gas: o,
                nonce: s,
                to: a,
                value: i,
                maxFeePerBlobGas: c,
                maxFeePerGas: u,
                maxPriorityFeePerGas: h,
                accessList: y,
                data: w,
              } = e;
              !(function (e) {
                const { blobVersionedHashes: t } = e;
                if (t) {
                  if (0 === t.length) throw new P.zF();
                  for (const e of t) {
                    const t = (0, B.E)(e),
                      n = (0, r.ME)((0, I.di)(e, 0, 1));
                    if (32 !== t) throw new P.uP({ hash: e, size: t });
                    if (n !== v.E) throw new P.PK({ hash: e, version: n });
                  }
                }
                T(e);
              })(e);
              let x = e.blobVersionedHashes,
                E = e.sidecars;
              if (
                e.blobs &&
                ("undefined" === typeof x || "undefined" === typeof E)
              ) {
                const t =
                    "string" === typeof e.blobs[0]
                      ? e.blobs
                      : e.blobs.map((e) => (0, d.My)(e)),
                  n = e.kzg,
                  r = (0, p.S)({ blobs: t, kzg: n });
                if (
                  ("undefined" === typeof x &&
                    (x = (0, b.d)({ commitments: r })),
                  "undefined" === typeof E)
                ) {
                  const e = (0, m.t)({ blobs: t, commitments: r, kzg: n });
                  E = (0, g.T)({ blobs: t, commitments: r, proofs: e });
                }
              }
              const k = $(y),
                C = [
                  (0, d.nj)(n),
                  s ? (0, d.nj)(s) : "0x",
                  h ? (0, d.nj)(h) : "0x",
                  u ? (0, d.nj)(u) : "0x",
                  o ? (0, d.nj)(o) : "0x",
                  null !== a && void 0 !== a ? a : "0x",
                  i ? (0, d.nj)(i) : "0x",
                  null !== w && void 0 !== w ? w : "0x",
                  k,
                  c ? (0, d.nj)(c) : "0x",
                  null !== x && void 0 !== x ? x : [],
                  ...A(e, t),
                ],
                N = [],
                F = [],
                M = [];
              if (E)
                for (let r = 0; r < E.length; r++) {
                  const { blob: e, commitment: t, proof: n } = E[r];
                  N.push(e), F.push(t), M.push(n);
                }
              return (0, l.aP)([
                "0x03",
                E ? (0, f.EQ)([C, N, F, M]) : (0, f.EQ)(C),
              ]);
            })(e, t)
          : "eip7702" === n
          ? (function (e, t) {
              const {
                authorizationList: n,
                chainId: r,
                gas: o,
                nonce: s,
                to: a,
                value: i,
                maxFeePerGas: h,
                maxPriorityFeePerGas: p,
                accessList: m,
                data: b,
              } = e;
              !(function (e) {
                const { authorizationList: t } = e;
                if (t)
                  for (const n of t) {
                    const { chainId: e } = n,
                      t = n.address;
                    if (!(0, u.P)(t)) throw new c.M({ address: t });
                    if (e < 0) throw new E.qD({ chainId: e });
                  }
                T(e);
              })(e);
              const g = $(m),
                y = (function (e) {
                  if (!e || 0 === e.length) return [];
                  const t = [];
                  for (const n of e) {
                    const { chainId: e, nonce: r, ...o } = n,
                      s = n.address;
                    t.push([
                      e ? (0, d.nj)(e) : "0x",
                      s,
                      r ? (0, d.nj)(r) : "0x",
                      ...A({}, o),
                    ]);
                  }
                  return t;
                })(n);
              return (0, l.aP)([
                "0x04",
                (0, f.EQ)([
                  (0, d.nj)(r),
                  s ? (0, d.nj)(s) : "0x",
                  p ? (0, d.nj)(p) : "0x",
                  h ? (0, d.nj)(h) : "0x",
                  o ? (0, d.nj)(o) : "0x",
                  null !== a && void 0 !== a ? a : "0x",
                  i ? (0, d.nj)(i) : "0x",
                  null !== b && void 0 !== b ? b : "0x",
                  g,
                  y,
                  ...A(e, t),
                ]),
              ]);
            })(e, t)
          : (function (e, t) {
              const {
                chainId: n = 0,
                gas: r,
                data: o,
                nonce: s,
                to: a,
                value: i,
                gasPrice: l,
              } = e;
              !(function (e) {
                const {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: o,
                  to: s,
                } = e;
                if (s && !(0, u.P)(s)) throw new c.M({ address: s });
                if ("undefined" !== typeof t && t <= 0)
                  throw new E.qD({ chainId: t });
                if (n || o)
                  throw new x.C(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                  );
                if (r && r > w.Ao) throw new k.BG({ maxFeePerGas: r });
              })(e);
              let p = [
                s ? (0, d.nj)(s) : "0x",
                l ? (0, d.nj)(l) : "0x",
                r ? (0, d.nj)(r) : "0x",
                null !== a && void 0 !== a ? a : "0x",
                i ? (0, d.nj)(i) : "0x",
                null !== o && void 0 !== o ? o : "0x",
              ];
              if (t) {
                const e = (() => {
                    if (t.v >= 35n) {
                      return (t.v - 35n) / 2n > 0
                        ? t.v
                        : 27n + (35n === t.v ? 0n : 1n);
                    }
                    if (n > 0) return BigInt(2 * n) + BigInt(35n + t.v - 27n);
                    const e = 27n + (27n === t.v ? 0n : 1n);
                    if (t.v !== e) throw new h.zW({ v: t.v });
                    return e;
                  })(),
                  r = (0, y.B)(t.r),
                  o = (0, y.B)(t.s);
                p = [
                  ...p,
                  (0, d.nj)(e),
                  "0x00" === r ? "0x" : r,
                  "0x00" === o ? "0x" : o,
                ];
              } else n > 0 && (p = [...p, (0, d.nj)(n), "0x", "0x"]);
              return (0, f.EQ)(p);
            })(e, t);
      }
      function A(e, t) {
        const n = null !== t && void 0 !== t ? t : e,
          { v: r, yParity: o } = n;
        if ("undefined" === typeof n.r) return [];
        if ("undefined" === typeof n.s) return [];
        if ("undefined" === typeof r && "undefined" === typeof o) return [];
        const s = (0, y.B)(n.r),
          a = (0, y.B)(n.s);
        return [
          "number" === typeof o
            ? o
              ? (0, d.nj)(1)
              : "0x"
            : 0n === r
            ? "0x"
            : 1n === r
            ? (0, d.nj)(1)
            : 27n === r
            ? "0x"
            : (0, d.nj)(1),
          "0x00" === s ? "0x" : s,
          "0x00" === a ? "0x" : a,
        ];
      }
      const F = {
        contracts: {
          gasPriceOracle: {
            address: "0x420000000000000000000000000000000000000F",
          },
          l1Block: { address: "0x4200000000000000000000000000000000000015" },
          l2CrossDomainMessenger: {
            address: "0x4200000000000000000000000000000000000007",
          },
          l2Erc721Bridge: {
            address: "0x4200000000000000000000000000000000000014",
          },
          l2StandardBridge: {
            address: "0x4200000000000000000000000000000000000010",
          },
          l2ToL1MessagePasser: {
            address: "0x4200000000000000000000000000000000000016",
          },
        },
        formatters: i,
        serializers: {
          transaction: function (e, t) {
            return (function (e) {
              return (
                "deposit" === e.type || "undefined" !== typeof e.sourceHash
              );
            })(e)
              ? (function (e) {
                  !(function (e) {
                    const { from: t, to: n } = e;
                    if (t && !(0, u.P)(t)) throw new c.M({ address: t });
                    if (n && !(0, u.P)(n)) throw new c.M({ address: n });
                  })(e);
                  const {
                      sourceHash: t,
                      data: n,
                      from: r,
                      gas: o,
                      isSystemTx: s,
                      mint: a,
                      to: i,
                      value: h,
                    } = e,
                    p = [
                      t,
                      r,
                      null !== i && void 0 !== i ? i : "0x",
                      a ? (0, d.nj)(a) : "0x",
                      h ? (0, d.nj)(h) : "0x",
                      o ? (0, d.nj)(o) : "0x",
                      s ? "0x1" : "0x",
                      null !== n && void 0 !== n ? n : "0x",
                    ];
                  return (0, l.aP)(["0x7e", (0, f.EQ)(p)]);
                })(e)
              : N(e, t);
          },
        },
      };
      function M(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      const O = 1,
        S = M({
          ...F,
          id: 8453,
          name: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://basescan.org",
              apiUrl: "https://api.basescan.org/api",
            },
          },
          contracts: {
            ...F.contracts,
            disputeGameFactory: {
              [O]: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
            },
            l2OutputOracle: {
              [O]: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 5022,
            },
            portal: {
              [O]: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 17482143,
              },
            },
            l1StandardBridge: {
              [O]: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 17482143,
              },
            },
          },
          sourceId: 1,
        }),
        j = M({
          id: 56,
          name: "BNB Smart Chain",
          nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
          rpcUrls: { default: { http: ["https://56.rpc.thirdweb.com"] } },
          blockExplorers: {
            default: {
              name: "BscScan",
              url: "https://bscscan.com",
              apiUrl: "https://api.bscscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 15921452,
            },
          },
        });
    },
    46735: (e, t, n) => {
      "use strict";
      function r(e) {
        let { args: t, eventName: n } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      n.d(t, { e: () => r });
    },
    46744: (e, t, n) => {
      "use strict";
      n.d(t, { A1: () => u, di: () => a, iN: () => l });
      var r = n(22895),
        o = n(93935),
        s = n(88925);
      function a(e, t, n) {
        let { strict: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (0, o.q)(e, { strict: !1 })
          ? l(e, t, n, { strict: r })
          : u(e, t, n, { strict: r });
      }
      function i(e, t) {
        if ("number" === typeof t && t > 0 && t > (0, s.E)(e) - 1)
          throw new r.ii({ offset: t, position: "start", size: (0, s.E)(e) });
      }
      function c(e, t, n) {
        if (
          "number" === typeof t &&
          "number" === typeof n &&
          (0, s.E)(e) !== n - t
        )
          throw new r.ii({ offset: n, position: "end", size: (0, s.E)(e) });
      }
      function u(e, t, n) {
        let { strict: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        i(e, t);
        const o = e.slice(t, n);
        return r && c(o, t, n), o;
      }
      function l(e, t, n) {
        let { strict: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        i(e, t);
        const o = `0x${e
          .replace("0x", "")
          .slice(
            2 * (null !== t && void 0 !== t ? t : 0),
            2 * (null !== n && void 0 !== n ? n : e.length)
          )}`;
        return r && c(o, t, n), o;
      }
    },
    46928: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => s });
      var r = n(46744),
        o = n(69608);
      const s = (e) => (0, r.di)((0, o.k)(e), 0, 4);
    },
    47448: (e, t, n) => {
      "use strict";
      n.d(t, { Ao: () => r });
      const r = 2n ** 256n - 1n;
    },
    49440: (e, t, n) => {
      "use strict";
      function r(e) {
        let { dir: t = "left" } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = "string" === typeof e ? e.replace("0x", "") : e,
          r = 0;
        for (
          let o = 0;
          o < n.length - 1 &&
          "0" === n["left" === t ? o : n.length - o - 1].toString();
          o++
        )
          r++;
        return (
          (n = "left" === t ? n.slice(r) : n.slice(0, n.length - r)),
          "string" === typeof e
            ? (1 === n.length && "right" === t && (n = `${n}0`),
              `0x${n.length % 2 === 1 ? `0${n}` : n}`)
            : n
        );
      }
      n.d(t, { B: () => r });
    },
    49897: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => p });
      var r = n(28406),
        o = n(52773),
        s = n(19538),
        a = n(84846),
        i = n(60713),
        c = n(14611),
        u = n(38057),
        l = n(79971),
        d = n(89594),
        f = n(55903),
        h = n(34795);
      async function p(e, t) {
        const {
            blockNumber: n,
            blockTag: p,
            key: m,
            name: b,
            gatewayUrls: g,
            strict: y,
          } = t,
          { chain: v } = e,
          w = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!v)
              throw new Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: v,
              contract: "ensUniversalResolver",
            });
          })(),
          x = null === v || void 0 === v ? void 0 : v.ensTlds;
        if (x && !x.some((e) => b.endsWith(e))) return null;
        try {
          const t = {
              address: w,
              abi: r.Ag,
              functionName: "resolve",
              args: [
                (0, i.nj)((0, d.F)(b)),
                (0, s.p)({
                  abi: r.SJ,
                  functionName: "text",
                  args: [(0, l.k)(b), m],
                }),
                null !== g && void 0 !== g ? g : [u.J],
              ],
              blockNumber: n,
              blockTag: p,
            },
            a = (0, f.T)(e, h.J, "readContract"),
            c = await a(t);
          if ("0x" === c[0]) return null;
          const y = (0, o.e)({ abi: r.SJ, functionName: "text", data: c[0] });
          return "" === y ? null : y;
        } catch (P) {
          if (y) throw P;
          if ((0, c.J)(P, "resolve")) return null;
          throw P;
        }
      }
    },
    52773: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => i });
      var r = n(37193),
        o = n(85517),
        s = n(64807);
      const a = "/docs/contract/decodeFunctionResult";
      function i(e) {
        const { abi: t, args: n, functionName: i, data: c } = e;
        let u = t[0];
        if (i) {
          const e = (0, s.iY)({ abi: t, args: n, name: i });
          if (!e) throw new r.Iz(i, { docsPath: a });
          u = e;
        }
        if ("function" !== u.type) throw new r.Iz(void 0, { docsPath: a });
        if (!u.outputs) throw new r.MR(u.name, { docsPath: a });
        const l = (0, o.n)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    53635: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => o });
      var r = n(93935);
      function o(e) {
        if (66 !== e.length) return null;
        if (0 !== e.indexOf("[")) return null;
        if (65 !== e.indexOf("]")) return null;
        const t = `0x${e.slice(1, 65)}`;
        return (0, r.q)(t) ? t : null;
      }
    },
    53749: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => u });
      var r = n(556),
        o = n(37193),
        s = n(46744),
        a = n(46928),
        i = n(85517),
        c = n(44696);
      function u(e) {
        const { abi: t, data: n } = e,
          u = (0, s.di)(n, 0, 4);
        if ("0x" === u) throw new o.O();
        const l = [...(t || []), r.Mc, r.J9].find(
          (e) => "error" === e.type && u === (0, a.V)((0, c.B)(e))
        );
        if (!l)
          throw new o.Wq(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, i.n)(l.inputs, (0, s.di)(n, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    55660: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => o });
      var r = n(66127);
      function o(e) {
        if (e.type) return e.type;
        if ("undefined" !== typeof e.authorizationList) return "eip7702";
        if (
          "undefined" !== typeof e.blobs ||
          "undefined" !== typeof e.blobVersionedHashes ||
          "undefined" !== typeof e.maxFeePerBlobGas ||
          "undefined" !== typeof e.sidecars
        )
          return "eip4844";
        if (
          "undefined" !== typeof e.maxFeePerGas ||
          "undefined" !== typeof e.maxPriorityFeePerGas
        )
          return "eip1559";
        if ("undefined" !== typeof e.gasPrice)
          return "undefined" !== typeof e.accessList ? "eip2930" : "legacy";
        throw new r.Vg({ transaction: e });
      }
    },
    55903: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        const r = e[t.name];
        if ("function" === typeof r) return r;
        const o = e[n];
        return "function" === typeof o ? o : (n) => t(e, n);
      }
      n.d(t, { T: () => r });
    },
    56737: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => a });
      var r = n(66127),
        o = n(60713),
        s = n(57825);
      async function a(e, t) {
        var n;
        let {
          blockHash: a,
          blockNumber: i,
          blockTag: c,
          hash: u,
          index: l,
        } = t;
        const d = c || "latest",
          f = void 0 !== i ? (0, o.cK)(i) : void 0;
        let h = null;
        if (
          (u
            ? (h = await e.request(
                { method: "eth_getTransactionByHash", params: [u] },
                { dedupe: !0 }
              ))
            : a
            ? (h = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [a, (0, o.cK)(l)],
                },
                { dedupe: !0 }
              ))
            : (f || d) &&
              (h = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [f || d, (0, o.cK)(l)],
                },
                { dedupe: Boolean(f) }
              )),
          !h)
        )
          throw new r.Kz({
            blockHash: a,
            blockNumber: i,
            blockTag: d,
            hash: u,
            index: l,
          });
        return (
          (null === (n = e.chain) ||
          void 0 === n ||
          null === (n = n.formatters) ||
          void 0 === n ||
          null === (n = n.transaction) ||
          void 0 === n
            ? void 0
            : n.format) || s.uP
        )(h);
      }
    },
    57556: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => s });
      var r = n(66119),
        o = n(60713);
      function s(e) {
        var t;
        const { kzg: n } = e,
          s =
            null !== (t = e.to) && void 0 !== t
              ? t
              : "string" === typeof e.blobs[0]
              ? "hex"
              : "bytes",
          a =
            "string" === typeof e.blobs[0]
              ? e.blobs.map((e) => (0, r.aT)(e))
              : e.blobs,
          i = [];
        for (const r of a) i.push(Uint8Array.from(n.blobToKzgCommitment(r)));
        return "bytes" === s ? i : i.map((e) => (0, o.My)(e));
      }
    },
    57825: (e, t, n) => {
      "use strict";
      n.d(t, { b4: () => s, gU: () => i, uP: () => a });
      var r = n(33910),
        o = n(14459);
      const s = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function a(e) {
        const t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, r.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, r.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? s[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" === typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
      const i = (0, o.q)("transaction", a);
    },
    58223: (e, t, n) => {
      "use strict";
      var r = n(21579),
        o = n(4742),
        s = n(15986);
      const a = r.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;
      var i = function (e, t, n, r) {
        var o,
          s = arguments.length,
          a =
            s < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, n, r);
        else
          for (var i = e.length - 1; i >= 0; i--)
            (o = e[i]) &&
              (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
        return s > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let c = class extends r.WF {
        constructor() {
          super(...arguments),
            (this.width = ""),
            (this.height = ""),
            (this.borderRadius = "m"),
            (this.variant = "default");
        }
        render() {
          return (
            (this.style.cssText = `\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `),
            r.qy`<slot></slot>`
          );
        }
      };
      (c.styles = [a]),
        i([(0, o.MZ)()], c.prototype, "width", void 0),
        i([(0, o.MZ)()], c.prototype, "height", void 0),
        i([(0, o.MZ)()], c.prototype, "borderRadius", void 0),
        i([(0, o.MZ)()], c.prototype, "variant", void 0),
        (c = i([(0, s.E)("wui-shimmer")], c));
    },
    58512: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => m });
      var r = n(28406),
        o = n(52773),
        s = n(19538),
        a = n(84846),
        i = n(49440),
        c = n(60713),
        u = n(14611),
        l = n(38057),
        d = n(79971),
        f = n(89594),
        h = n(55903),
        p = n(34795);
      async function m(e, t) {
        const {
            blockNumber: n,
            blockTag: m,
            coinType: b,
            name: g,
            gatewayUrls: y,
            strict: v,
          } = t,
          { chain: w } = e,
          x = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!w)
              throw new Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: w,
              contract: "ensUniversalResolver",
            });
          })(),
          P = null === w || void 0 === w ? void 0 : w.ensTlds;
        if (P && !P.some((e) => g.endsWith(e))) return null;
        try {
          const t = (0, s.p)({
              abi: r.Rm,
              functionName: "addr",
              ...(null != b
                ? { args: [(0, d.k)(g), BigInt(b)] }
                : { args: [(0, d.k)(g)] }),
            }),
            a = {
              address: x,
              abi: r.Ag,
              functionName: "resolve",
              args: [
                (0, c.nj)((0, f.F)(g)),
                t,
                null !== y && void 0 !== y ? y : [l.J],
              ],
              blockNumber: n,
              blockTag: m,
            },
            u = (0, h.T)(e, p.J, "readContract"),
            v = await u(a);
          if ("0x" === v[0]) return null;
          const w = (0, o.e)({
            abi: r.Rm,
            args: null != b ? [(0, d.k)(g), BigInt(b)] : void 0,
            functionName: "addr",
            data: v[0],
          });
          return "0x" === w || "0x00" === (0, i.B)(w) ? null : w;
        } catch (E) {
          if (v) throw E;
          if ((0, u.J)(E, "resolve")) return null;
          throw E;
        }
      }
    },
    58629: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => o });
      var r = n(23800);
      function o(e) {
        let {
          delay: t = 100,
          retryCount: n = 2,
          shouldRetry: o = () => !0,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((s, a) => {
          const i = async function () {
            let { count: c = 0 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            try {
              const t = await e();
              s(t);
            } catch (u) {
              if (c < n && (await o({ count: c, error: u })))
                return (async (e) => {
                  let { error: n } = e;
                  const o =
                    "function" === typeof t ? t({ count: c, error: n }) : t;
                  o && (await (0, r.u)(o)), i({ count: c + 1 });
                })({ error: u });
              a(u);
            }
          };
          i();
        });
      }
    },
    60371: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => s });
      var r = n(285);
      const o = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          const t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          const t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          const t = null !== e && void 0 !== e ? e : this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          const n = null !== t && void 0 !== t ? t : this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          const t = null !== e && void 0 !== e ? e : this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          const t = null !== e && void 0 !== e ? e : this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          const t = null !== e && void 0 !== e ? e : this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          const t = null !== e && void 0 !== e ? e : this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          const n = this.inspectBytes(e);
          return (this.position += null !== t && void 0 !== t ? t : e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          const e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          const t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          const e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function s(e) {
        let { recursiveReadLimit: t = 8192 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = Object.create(o);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    60651: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => M });
      const r = "2.23.2";
      let o = {
        getDocsUrl: (e) => {
          let { docsBaseUrl: t, docsPath: n = "", docsSlug: r } = e;
          return n
            ? `${null !== t && void 0 !== t ? t : "https://viem.sh"}${n}${
                r ? `#${r}` : ""
              }`
            : void 0;
        },
        version: `viem@${r}`,
      };
      class s extends Error {
        constructor(e) {
          var t, n, a;
          let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const c =
            i.cause instanceof s
              ? i.cause.details
              : null !== (u = i.cause) && void 0 !== u && u.message
              ? i.cause.message
              : i.details;
          var u;
          const l = (i.cause instanceof s && i.cause.docsPath) || i.docsPath,
            d =
              null === (t = (n = o).getDocsUrl) || void 0 === t
                ? void 0
                : t.call(n, { ...i, docsPath: l });
          super(
            [
              e || "An error occurred.",
              "",
              ...(i.metaMessages ? [...i.metaMessages, ""] : []),
              ...(d ? [`Docs: ${d}`] : []),
              ...(c ? [`Details: ${c}`] : []),
              ...(o.version ? [`Version: ${o.version}`] : []),
            ].join("\n"),
            i.cause ? { cause: i.cause } : void 0
          ),
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
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = c),
            (this.docsPath = l),
            (this.metaMessages = i.metaMessages),
            (this.name = null !== (a = i.name) && void 0 !== a ? a : this.name),
            (this.shortMessage = e),
            (this.version = r);
        }
        walk(e) {
          return a(this, e);
        }
      }
      function a(e, t) {
        return null !== t && void 0 !== t && t(e)
          ? e
          : e && "object" === typeof e && "cause" in e && void 0 !== e.cause
          ? a(e.cause, t)
          : t
          ? null
          : e;
      }
      function i(e) {
        let { strict: t = !0 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          !!e &&
          "string" === typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      class c extends s {
        constructor(e) {
          let { size: t, targetSize: n, type: r } = e;
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${t}) exceeds padding size (${n}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      function u(e) {
        let { dir: t, size: n = 32 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" === typeof e
          ? (function (e) {
              let { dir: t, size: n = 32 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (null === n) return e;
              const r = e.replace("0x", "");
              if (r.length > 2 * n)
                throw new c({
                  size: Math.ceil(r.length / 2),
                  targetSize: n,
                  type: "hex",
                });
              return `0x${r["right" === t ? "padEnd" : "padStart"](
                2 * n,
                "0"
              )}`;
            })(e, { dir: t, size: n })
          : (function (e) {
              let { dir: t, size: n = 32 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (null === n) return e;
              if (e.length > n)
                throw new c({ size: e.length, targetSize: n, type: "bytes" });
              const r = new Uint8Array(n);
              for (let o = 0; o < n; o++) {
                const s = "right" === t;
                r[s ? o : n - o - 1] = e[s ? o : e.length - o - 1];
              }
              return r;
            })(e, { dir: t, size: n });
      }
      class l extends s {
        constructor(e) {
          let { max: t, min: n, signed: r, size: o, value: s } = e;
          super(
            `Number "${s}" is not in safe ${
              o ? `${8 * o}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class d extends s {
        constructor(e) {
          let { givenSize: t, maxSize: n } = e;
          super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
      function f(e) {
        return i(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function h(e, t) {
        let { size: n } = t;
        if (f(e) > n) throw new d({ givenSize: f(e), maxSize: n });
      }
      function p(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { signed: n } = t;
        t.size && h(e, { size: t.size });
        const r = BigInt(e);
        if (!n) return r;
        const o = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(o) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * o, "f")}`) - 1n;
      }
      function m(e) {
        return Number(
          p(
            e,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          )
        );
      }
      const b = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function g(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "number" === typeof e || "bigint" === typeof e
          ? v(e, t)
          : "string" === typeof e
          ? (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const n = w.encode(e);
              return y(n, t);
            })(e, t)
          : "boolean" === typeof e
          ? (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const n = `0x${Number(e)}`;
              if ("number" === typeof t.size)
                return h(n, { size: t.size }), u(n, { size: t.size });
              return n;
            })(e, t)
          : y(e, t);
      }
      function y(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = "";
        for (let o = 0; o < e.length; o++) n += b[e[o]];
        const r = `0x${n}`;
        return "number" === typeof t.size
          ? (h(r, { size: t.size }), u(r, { dir: "right", size: t.size }))
          : r;
      }
      function v(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { signed: n, size: r } = t,
          o = BigInt(e);
        let s;
        r
          ? (s = n
              ? (1n << (8n * BigInt(r) - 1n)) - 1n
              : 2n ** (8n * BigInt(r)) - 1n)
          : "number" === typeof e && (s = BigInt(Number.MAX_SAFE_INTEGER));
        const a = "bigint" === typeof s && n ? -s - 1n : 0;
        if ((s && o > s) || o < a) {
          const t = "bigint" === typeof e ? "n" : "";
          throw new l({
            max: s ? `${s}${t}` : void 0,
            min: `${a}${t}`,
            signed: n,
            size: r,
            value: `${e}${t}`,
          });
        }
        const i = `0x${(n && o < 0
          ? (1n << BigInt(8 * r)) + BigInt(o)
          : o
        ).toString(16)}`;
        return r ? u(i, { size: r }) : i;
      }
      const w = new TextEncoder();
      const x = new TextEncoder();
      function P(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "number" === typeof e || "bigint" === typeof e
          ? (function (e, t) {
              const n = v(e, t);
              return B(n);
            })(e, t)
          : "boolean" === typeof e
          ? (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const n = new Uint8Array(1);
              if (((n[0] = Number(e)), "number" === typeof t.size))
                return h(n, { size: t.size }), u(n, { size: t.size });
              return n;
            })(e, t)
          : i(e)
          ? B(e, t)
          : I(e, t);
      }
      const E = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function k(e) {
        return e >= E.zero && e <= E.nine
          ? e - E.zero
          : e >= E.A && e <= E.F
          ? e - (E.A - 10)
          : e >= E.a && e <= E.f
          ? e - (E.a - 10)
          : void 0;
      }
      function B(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e;
        t.size &&
          (h(n, { size: t.size }), (n = u(n, { dir: "right", size: t.size })));
        let r = n.slice(2);
        r.length % 2 && (r = `0${r}`);
        const o = r.length / 2,
          a = new Uint8Array(o);
        for (let i = 0, c = 0; i < o; i++) {
          const e = k(r.charCodeAt(c++)),
            t = k(r.charCodeAt(c++));
          if (void 0 === e || void 0 === t)
            throw new s(
              `Invalid byte sequence ("${r[c - 2]}${r[c - 1]}" in "${r}").`
            );
          a[i] = 16 * e + t;
        }
        return a;
      }
      function I(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = x.encode(e);
        return "number" === typeof t.size
          ? (h(n, { size: t.size }), u(n, { dir: "right", size: t.size }))
          : n;
      }
      var T = n(25742);
      function C(e, t) {
        const n = t || "hex",
          r = (0, T.lY)(i(e, { strict: !1 }) ? P(e) : e);
        return "bytes" === n ? r : g(r);
      }
      class $ extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          const t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            const e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      const N = new $(8192);
      function A(e, t) {
        if (N.has(`${e}.${t}`)) return N.get(`${e}.${t}`);
        const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = C(I(n), "bytes"),
          o = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let a = 0; a < 40; a += 2)
          r[a >> 1] >> 4 >= 8 && o[a] && (o[a] = o[a].toUpperCase()),
            (15 & r[a >> 1]) >= 8 &&
              o[a + 1] &&
              (o[a + 1] = o[a + 1].toUpperCase());
        const s = `0x${o.join("")}`;
        return N.set(`${e}.${t}`, s), s;
      }
      function F(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw new Error("Invalid yParityOrV value");
      }
      async function M(e) {
        let { hash: t, signature: r } = e;
        return (
          (o = await (async function (e) {
            let { hash: t, signature: r } = e;
            const o = i(t) ? t : g(t),
              { secp256k1: s } = await n.e(4895).then(n.bind(n, 84895));
            return `0x${(() => {
              if ("object" === typeof r && "r" in r && "s" in r) {
                const { r: e, s: t, v: n, yParity: o } = r,
                  a = F(Number(null !== o && void 0 !== o ? o : n));
                return new s.Signature(p(e), p(t)).addRecoveryBit(a);
              }
              const e = i(r) ? r : g(r),
                t = F(m(`0x${e.slice(130)}`));
              return s.Signature.fromCompact(
                e.substring(2, 130)
              ).addRecoveryBit(t);
            })()
              .recoverPublicKey(o.substring(2))
              .toHex(!1)}`;
          })({ hash: t, signature: r })),
          A(`0x${C(`0x${o.substring(4)}`).substring(26)}`)
        );
        var o;
      }
    },
    60713: (e, t, n) => {
      "use strict";
      n.d(t, {
        $P: () => c,
        My: () => u,
        cK: () => l,
        i3: () => f,
        nj: () => i,
      });
      var r = n(74118),
        o = n(69787),
        s = n(33910);
      const a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "number" === typeof e || "bigint" === typeof e
          ? l(e, t)
          : "string" === typeof e
          ? f(e, t)
          : "boolean" === typeof e
          ? c(e, t)
          : u(e, t);
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = `0x${Number(e)}`;
        return "number" === typeof t.size
          ? ((0, s.Sl)(n, { size: t.size }), (0, o.eV)(n, { size: t.size }))
          : n;
      }
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = "";
        for (let o = 0; o < e.length; o++) n += a[e[o]];
        const r = `0x${n}`;
        return "number" === typeof t.size
          ? ((0, s.Sl)(r, { size: t.size }),
            (0, o.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { signed: n, size: s } = t,
          a = BigInt(e);
        let i;
        s
          ? (i = n
              ? (1n << (8n * BigInt(s) - 1n)) - 1n
              : 2n ** (8n * BigInt(s)) - 1n)
          : "number" === typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
        const c = "bigint" === typeof i && n ? -i - 1n : 0;
        if ((i && a > i) || a < c) {
          const t = "bigint" === typeof e ? "n" : "";
          throw new r.Ty({
            max: i ? `${i}${t}` : void 0,
            min: `${c}${t}`,
            signed: n,
            size: s,
            value: `${e}${t}`,
          });
        }
        const u = `0x${(n && a < 0
          ? (1n << BigInt(8 * s)) + BigInt(a)
          : a
        ).toString(16)}`;
        return s ? (0, o.eV)(u, { size: s }) : u;
      }
      const d = new TextEncoder();
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return u(d.encode(e), t);
      }
    },
    62462: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => s });
      var r = n(33910),
        o = n(60713);
      async function s(e, t) {
        let { address: n, blockTag: s = "latest", blockNumber: a } = t;
        const i = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [n, a ? (0, o.cK)(a) : s],
          },
          { dedupe: Boolean(a) }
        );
        return (0, r.ME)(i);
      }
    },
    62917: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => p });
      var r = n(39386),
        o = n(66127),
        s = n(55903),
        a = n(77885),
        i = n(41912),
        c = n(58629),
        u = n(84356),
        l = n(67284),
        d = n(56737),
        f = n(63017),
        h = n(63108);
      async function p(e, t) {
        let {
          confirmations: n = 1,
          hash: p,
          onReplaced: m,
          pollingInterval: b = e.pollingInterval,
          retryCount: g = 6,
          retryDelay: y = (e) => {
            let { count: t } = e;
            return 200 * (1 << t);
          },
          timeout: v = 18e4,
        } = t;
        const w = (0, u.A)(["waitForTransactionReceipt", e.uid, p]);
        let x,
          P,
          E,
          k = !1;
        const { promise: B, resolve: I, reject: T } = (0, i.Y)(),
          C = v ? setTimeout(() => T(new o.WA({ hash: p })), v) : void 0,
          $ = (0, a.lB)(w, { onReplaced: m, resolve: I, reject: T }, (t) => {
            const a = (0, s.T)(
              e,
              h.q,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: b,
              async onBlockNumber(i) {
                const u = (e) => {
                  clearTimeout(C), a(), e(), $();
                };
                let h = i;
                if (!k)
                  try {
                    if (E) {
                      if (
                        n > 1 &&
                        (!E.blockNumber || h - E.blockNumber + 1n < n)
                      )
                        return;
                      return void u(() => t.resolve(E));
                    }
                    if (
                      (x ||
                        ((k = !0),
                        await (0, c.b)(
                          async () => {
                            (x = await (0, s.T)(
                              e,
                              d.x,
                              "getTransaction"
                            )({ hash: p })),
                              x.blockNumber && (h = x.blockNumber);
                          },
                          { delay: y, retryCount: g }
                        ),
                        (k = !1)),
                      (E = await (0, s.T)(
                        e,
                        f.h,
                        "getTransactionReceipt"
                      )({ hash: p })),
                      n > 1 && (!E.blockNumber || h - E.blockNumber + 1n < n))
                    )
                      return;
                    u(() => t.resolve(E));
                  } catch (m) {
                    if (m instanceof o.Kz || m instanceof o.Kc) {
                      if (!x) return void (k = !1);
                      try {
                        (P = x), (k = !0);
                        const o = await (0, c.b)(
                          () =>
                            (0, s.T)(
                              e,
                              l.g,
                              "getBlock"
                            )({ blockNumber: h, includeTransactions: !0 }),
                          {
                            delay: y,
                            retryCount: g,
                            shouldRetry: (e) => {
                              let { error: t } = e;
                              return t instanceof r.l;
                            },
                          }
                        );
                        k = !1;
                        const a = o.transactions.find((e) => {
                          let { from: t, nonce: n } = e;
                          return t === P.from && n === P.nonce;
                        });
                        if (!a) return;
                        if (
                          ((E = await (0, s.T)(
                            e,
                            f.h,
                            "getTransactionReceipt"
                          )({ hash: a.hash })),
                          n > 1 &&
                            (!E.blockNumber || h - E.blockNumber + 1n < n))
                        )
                          return;
                        let i = "replaced";
                        a.to === P.to &&
                        a.value === P.value &&
                        a.input === P.input
                          ? (i = "repriced")
                          : a.from === a.to &&
                            0n === a.value &&
                            (i = "cancelled"),
                          u(() => {
                            var e;
                            null === (e = t.onReplaced) ||
                              void 0 === e ||
                              e.call(t, {
                                reason: i,
                                replacedTransaction: P,
                                transaction: a,
                                transactionReceipt: E,
                              }),
                              t.resolve(E);
                          });
                      } catch (b) {
                        u(() => t.reject(b));
                      }
                    } else u(() => t.reject(m));
                  }
              },
            });
          });
        return B;
      }
    },
    63017: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => s });
      var r = n(66127),
        o = n(84425);
      async function s(e, t) {
        var n;
        let { hash: s } = t;
        const a = await e.request(
          { method: "eth_getTransactionReceipt", params: [s] },
          { dedupe: !0 }
        );
        if (!a) throw new r.Kc({ hash: s });
        return (
          (null === (n = e.chain) ||
          void 0 === n ||
          null === (n = n.formatters) ||
          void 0 === n ||
          null === (n = n.transactionReceipt) ||
          void 0 === n
            ? void 0
            : n.format) || o.uL
        )(a);
      }
    },
    63108: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => u });
      var r = n(33910),
        o = n(55903),
        s = n(77885),
        a = n(3028),
        i = n(84356),
        c = n(24166);
      function u(e, t) {
        let {
          emitOnBegin: n = !1,
          emitMissed: u = !1,
          onBlockNumber: l,
          onError: d,
          poll: f,
          pollingInterval: h = e.pollingInterval,
        } = t;
        let p;
        return (
          "undefined" !== typeof f
            ? f
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? (() => {
              const t = (0, i.A)(["watchBlockNumber", e.uid, n, u, h]);
              return (0, s.lB)(t, { onBlockNumber: l, onError: d }, (t) =>
                (0, a.w)(
                  async () => {
                    try {
                      const n = await (0, o.T)(
                        e,
                        c.G,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (p) {
                        if (n === p) return;
                        if (n - p > 1 && u)
                          for (let e = p + 1n; e < n; e++)
                            t.onBlockNumber(e, p), (p = e);
                      }
                      (!p || n > p) && (t.onBlockNumber(n, p), (p = n));
                    } catch (r) {
                      var n;
                      null === (n = t.onError) || void 0 === n || n.call(t, r);
                    }
                  },
                  { emitOnBegin: n, interval: h }
                )
              );
            })()
          : (() => {
              const t = (0, i.A)(["watchBlockNumber", e.uid, n, u]);
              return (0, s.lB)(t, { onBlockNumber: l, onError: d }, (t) => {
                let n = !0,
                  o = () => (n = !1);
                return (
                  (async () => {
                    try {
                      const s = (() => {
                          if ("fallback" === e.transport.type) {
                            const t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await s.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            var o;
                            if (!n) return;
                            const s = (0, r.uU)(
                              null === (o = e.result) || void 0 === o
                                ? void 0
                                : o.number
                            );
                            t.onBlockNumber(s, p), (p = s);
                          },
                          onError(e) {
                            var n;
                            null === (n = t.onError) ||
                              void 0 === n ||
                              n.call(t, e);
                          },
                        });
                      (o = a), n || o();
                    } catch (s) {
                      null === d || void 0 === d || d(s);
                    }
                  })(),
                  () => o()
                );
              });
            })();
      }
    },
    63386: (e, t, n) => {
      "use strict";
      (t.I0 = t.DH = t.NX = t.u8 = t.cY = void 0),
        (t.av = t.O6 = t.w3 = t.Wg = void 0);
      const r = n(13740);
      function o(e) {
        if (!(e instanceof Uint8Array))
          throw new TypeError("b must be a Uint8Array");
      }
      function s(e) {
        return o(e), r.Buffer.from(e.buffer, e.byteOffset, e.length);
      }
      class a {
        constructor(e, t) {
          if (!Number.isInteger(e))
            throw new TypeError("span must be an integer");
          (this.span = e), (this.property = t);
        }
        makeDestinationObject() {
          return {};
        }
        getSpan(e, t) {
          if (0 > this.span) throw new RangeError("indeterminate span");
          return this.span;
        }
        replicate(e) {
          const t = Object.create(this.constructor.prototype);
          return Object.assign(t, this), (t.property = e), t;
        }
        fromArray(e) {}
      }
      function i(e, t) {
        return t.property ? e + "[" + t.property + "]" : e;
      }
      class c extends a {
        isCount() {
          throw new Error("ExternalLayout is abstract");
        }
      }
      class u extends c {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (!Number.isInteger(e) || 0 >= e)
            throw new TypeError("elementSpan must be a (positive) integer");
          super(-1, t), (this.elementSpan = e);
        }
        isCount() {
          return !0;
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          o(e);
          const n = e.length - t;
          return Math.floor(n / this.elementSpan);
        }
        encode(e, t, n) {
          return 0;
        }
      }
      class l extends c {
        constructor(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (!(e instanceof a)) throw new TypeError("layout must be a Layout");
          if (!Number.isInteger(t))
            throw new TypeError("offset must be integer or undefined");
          super(e.span, n || e.property), (this.layout = e), (this.offset = t);
        }
        isCount() {
          return this.layout instanceof d || this.layout instanceof f;
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return this.layout.decode(e, t + this.offset);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.layout.encode(e, t, n + this.offset);
        }
      }
      class d extends a {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readUIntLE(t, this.span);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeUIntLE(e, n, this.span), this.span;
        }
      }
      class f extends a {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readUIntBE(t, this.span);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeUIntBE(e, n, this.span), this.span;
        }
      }
      class h extends a {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readIntLE(t, this.span);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeIntLE(e, n, this.span), this.span;
        }
      }
      class p extends a {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readIntBE(t, this.span);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeIntBE(e, n, this.span), this.span;
        }
      }
      const m = Math.pow(2, 32);
      function b(e) {
        const t = Math.floor(e / m);
        return { hi32: t, lo32: e - t * m };
      }
      function g(e, t) {
        return e * m + t;
      }
      class y extends a {
        constructor(e) {
          super(8, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = s(e),
            r = n.readUInt32LE(t);
          return g(n.readUInt32LE(t + 4), r);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = b(e),
            o = s(t);
          return o.writeUInt32LE(r.lo32, n), o.writeUInt32LE(r.hi32, n + 4), 8;
        }
      }
      class v extends a {
        constructor(e) {
          super(8, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = s(e);
          return g(n.readUInt32BE(t), n.readUInt32BE(t + 4));
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = b(e),
            o = s(t);
          return o.writeUInt32BE(r.hi32, n), o.writeUInt32BE(r.lo32, n + 4), 8;
        }
      }
      class w extends a {
        constructor(e) {
          super(8, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = s(e),
            r = n.readUInt32LE(t);
          return g(n.readInt32LE(t + 4), r);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = b(e),
            o = s(t);
          return o.writeUInt32LE(r.lo32, n), o.writeInt32LE(r.hi32, n + 4), 8;
        }
      }
      class x extends a {
        constructor(e) {
          super(8, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = s(e);
          return g(n.readInt32BE(t), n.readUInt32BE(t + 4));
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = b(e),
            o = s(t);
          return o.writeInt32BE(r.hi32, n), o.writeUInt32BE(r.lo32, n + 4), 8;
        }
      }
      class P extends a {
        constructor(e) {
          super(4, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readFloatLE(t);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeFloatLE(e, n), 4;
        }
      }
      class E extends a {
        constructor(e) {
          super(4, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readFloatBE(t);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeFloatBE(e, n), 4;
        }
      }
      class k extends a {
        constructor(e) {
          super(8, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readDoubleLE(t);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeDoubleLE(e, n), 8;
        }
      }
      class B extends a {
        constructor(e) {
          super(8, e);
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return s(e).readDoubleBE(t);
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return s(t).writeDoubleBE(e, n), 8;
        }
      }
      class I extends a {
        constructor(e, t, n) {
          if (!(e instanceof a))
            throw new TypeError("elementLayout must be a Layout");
          if (
            !(
              (t instanceof c && t.isCount()) ||
              (Number.isInteger(t) && 0 <= t)
            )
          )
            throw new TypeError(
              "count must be non-negative integer or an unsigned integer ExternalLayout"
            );
          let r = -1;
          !(t instanceof c) && 0 < e.span && (r = t * e.span),
            super(r, n),
            (this.elementLayout = e),
            (this.count = t);
        }
        getSpan(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (0 <= this.span) return this.span;
          let n = 0,
            r = this.count;
          if (
            (r instanceof c && (r = r.decode(e, t)),
            0 < this.elementLayout.span)
          )
            n = r * this.elementLayout.span;
          else {
            let o = 0;
            for (; o < r; ) (n += this.elementLayout.getSpan(e, t + n)), ++o;
          }
          return n;
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = [];
          let r = 0,
            o = this.count;
          for (o instanceof c && (o = o.decode(e, t)); r < o; )
            n.push(this.elementLayout.decode(e, t)),
              (t += this.elementLayout.getSpan(e, t)),
              (r += 1);
          return n;
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = this.elementLayout,
            o = e.reduce((e, o) => e + r.encode(o, t, n + e), 0);
          return (
            this.count instanceof c && this.count.encode(e.length, t, n), o
          );
        }
      }
      class T extends a {
        constructor(e, t, n) {
          if (!Array.isArray(e) || !e.reduce((e, t) => e && t instanceof a, !0))
            throw new TypeError("fields must be array of Layout instances");
          "boolean" === typeof t && void 0 === n && ((n = t), (t = void 0));
          for (const s of e)
            if (0 > s.span && void 0 === s.property)
              throw new Error(
                "fields cannot contain unnamed variable-length layout"
              );
          let r = -1;
          try {
            r = e.reduce((e, t) => e + t.getSpan(), 0);
          } catch (o) {}
          super(r, t), (this.fields = e), (this.decodePrefixes = !!n);
        }
        getSpan(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (0 <= this.span) return this.span;
          let n = 0;
          try {
            n = this.fields.reduce((n, r) => {
              const o = r.getSpan(e, t);
              return (t += o), n + o;
            }, 0);
          } catch (r) {
            throw new RangeError("indeterminate span");
          }
          return n;
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          o(e);
          const n = this.makeDestinationObject();
          for (const r of this.fields)
            if (
              (void 0 !== r.property && (n[r.property] = r.decode(e, t)),
              (t += r.getSpan(e, t)),
              this.decodePrefixes && e.length === t)
            )
              break;
          return n;
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = n;
          let o = 0,
            s = 0;
          for (const a of this.fields) {
            let r = a.span;
            if (((s = 0 < r ? r : 0), void 0 !== a.property)) {
              const o = e[a.property];
              void 0 !== o &&
                ((s = a.encode(o, t, n)), 0 > r && (r = a.getSpan(t, n)));
            }
            (o = n), (n += r);
          }
          return o + s - r;
        }
        fromArray(e) {
          const t = this.makeDestinationObject();
          for (const n of this.fields)
            void 0 !== n.property &&
              0 < e.length &&
              (t[n.property] = e.shift());
          return t;
        }
        layoutFor(e) {
          if ("string" !== typeof e)
            throw new TypeError("property must be string");
          for (const t of this.fields) if (t.property === e) return t;
        }
        offsetOf(e) {
          if ("string" !== typeof e)
            throw new TypeError("property must be string");
          let t = 0;
          for (const n of this.fields) {
            if (n.property === e) return t;
            0 > n.span ? (t = -1) : 0 <= t && (t += n.span);
          }
        }
      }
      class C {
        constructor(e) {
          this.property = e;
        }
        decode(e, t) {
          throw new Error("UnionDiscriminator is abstract");
        }
        encode(e, t, n) {
          throw new Error("UnionDiscriminator is abstract");
        }
      }
      class $ extends C {
        constructor(e, t) {
          if (!(e instanceof c && e.isCount()))
            throw new TypeError(
              "layout must be an unsigned integer ExternalLayout"
            );
          super(t || e.property || "variant"), (this.layout = e);
        }
        decode(e, t) {
          return this.layout.decode(e, t);
        }
        encode(e, t, n) {
          return this.layout.encode(e, t, n);
        }
      }
      class N extends a {
        constructor(e, t, n) {
          let r;
          if (e instanceof d || e instanceof f) r = new $(new l(e));
          else if (e instanceof c && e.isCount()) r = new $(e);
          else {
            if (!(e instanceof C))
              throw new TypeError(
                "discr must be a UnionDiscriminator or an unsigned integer layout"
              );
            r = e;
          }
          if ((void 0 === t && (t = null), !(null === t || t instanceof a)))
            throw new TypeError("defaultLayout must be null or a Layout");
          if (null !== t) {
            if (0 > t.span)
              throw new Error("defaultLayout must have constant span");
            void 0 === t.property && (t = t.replicate("content"));
          }
          let o = -1;
          t &&
            ((o = t.span),
            0 <= o &&
              (e instanceof d || e instanceof f) &&
              (o += r.layout.span)),
            super(o, n),
            (this.discriminator = r),
            (this.usesPrefixDiscriminator = e instanceof d || e instanceof f),
            (this.defaultLayout = t),
            (this.registry = {});
          let s = this.defaultGetSourceVariant.bind(this);
          (this.getSourceVariant = function (e) {
            return s(e);
          }),
            (this.configGetSourceVariant = function (e) {
              s = e.bind(this);
            });
        }
        getSpan(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (0 <= this.span) return this.span;
          const n = this.getVariant(e, t);
          if (!n)
            throw new Error(
              "unable to determine span for unrecognized variant"
            );
          return n.getSpan(e, t);
        }
        defaultGetSourceVariant(e) {
          if (
            Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
          ) {
            if (
              this.defaultLayout &&
              this.defaultLayout.property &&
              Object.prototype.hasOwnProperty.call(
                e,
                this.defaultLayout.property
              )
            )
              return;
            const t = this.registry[e[this.discriminator.property]];
            if (
              t &&
              (!t.layout ||
                (t.property &&
                  Object.prototype.hasOwnProperty.call(e, t.property)))
            )
              return t;
          } else
            for (const t in this.registry) {
              const n = this.registry[t];
              if (
                n.property &&
                Object.prototype.hasOwnProperty.call(e, n.property)
              )
                return n;
            }
          throw new Error("unable to infer src variant");
        }
        decode(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
          const r = this.discriminator,
            o = r.decode(e, n),
            s = this.registry[o];
          if (void 0 === s) {
            const s = this.defaultLayout;
            let a = 0;
            this.usesPrefixDiscriminator && (a = r.layout.span),
              (t = this.makeDestinationObject()),
              (t[r.property] = o),
              (t[s.property] = s.decode(e, n + a));
          } else t = s.decode(e, n);
          return t;
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = this.getSourceVariant(e);
          if (void 0 === r) {
            const r = this.discriminator,
              o = this.defaultLayout;
            let s = 0;
            return (
              this.usesPrefixDiscriminator && (s = r.layout.span),
              r.encode(e[r.property], t, n),
              s + o.encode(e[o.property], t, n + s)
            );
          }
          return r.encode(e, t, n);
        }
        addVariant(e, t, n) {
          const r = new A(this, e, t, n);
          return (this.registry[e] = r), r;
        }
        getVariant(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
          return (
            (t = e instanceof Uint8Array ? this.discriminator.decode(e, n) : e),
            this.registry[t]
          );
        }
      }
      class A extends a {
        constructor(e, t, n, r) {
          if (!(e instanceof N)) throw new TypeError("union must be a Union");
          if (!Number.isInteger(t) || 0 > t)
            throw new TypeError("variant must be a (non-negative) integer");
          if (
            ("string" === typeof n && void 0 === r && ((r = n), (n = null)), n)
          ) {
            if (!(n instanceof a))
              throw new TypeError("layout must be a Layout");
            if (
              null !== e.defaultLayout &&
              0 <= n.span &&
              n.span > e.defaultLayout.span
            )
              throw new Error("variant span exceeds span of containing union");
            if ("string" !== typeof r)
              throw new TypeError("variant must have a String property");
          }
          let o = e.span;
          0 > e.span &&
            ((o = n ? n.span : 0),
            0 <= o &&
              e.usesPrefixDiscriminator &&
              (o += e.discriminator.layout.span)),
            super(o, r),
            (this.union = e),
            (this.variant = t),
            (this.layout = n || null);
        }
        getSpan(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (0 <= this.span) return this.span;
          let n = 0;
          this.union.usesPrefixDiscriminator &&
            (n = this.union.discriminator.layout.span);
          let r = 0;
          return this.layout && (r = this.layout.getSpan(e, t + n)), n + r;
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.makeDestinationObject();
          if (this !== this.union.getVariant(e, t))
            throw new Error("variant mismatch");
          let r = 0;
          return (
            this.union.usesPrefixDiscriminator &&
              (r = this.union.discriminator.layout.span),
            this.layout
              ? (n[this.property] = this.layout.decode(e, t + r))
              : this.property
              ? (n[this.property] = !0)
              : this.union.usesPrefixDiscriminator &&
                (n[this.union.discriminator.property] = this.variant),
            n
          );
        }
        encode(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r = 0;
          if (
            (this.union.usesPrefixDiscriminator &&
              (r = this.union.discriminator.layout.span),
            this.layout &&
              !Object.prototype.hasOwnProperty.call(e, this.property))
          )
            throw new TypeError("variant lacks property " + this.property);
          this.union.discriminator.encode(this.variant, t, n);
          let o = r;
          if (
            this.layout &&
            (this.layout.encode(e[this.property], t, n + r),
            (o += this.layout.getSpan(t, n + r)),
            0 <= this.union.span && o > this.union.span)
          )
            throw new Error("encoded variant overruns containing union");
          return o;
        }
        fromArray(e) {
          if (this.layout) return this.layout.fromArray(e);
        }
      }
      function F(e) {
        return 0 > e && (e += 4294967296), e;
      }
      class M extends a {
        constructor(e, t, n) {
          if (!(e instanceof d || e instanceof f))
            throw new TypeError("word must be a UInt or UIntBE layout");
          if (
            ("string" === typeof t && void 0 === n && ((n = t), (t = !1)),
            4 < e.span)
          )
            throw new RangeError("word cannot exceed 32 bits");
          super(e.span, n),
            (this.word = e),
            (this.msb = !!t),
            (this.fields = []);
          let r = 0;
          (this._packedSetValue = function (e) {
            return (r = F(e)), this;
          }),
            (this._packedGetValue = function () {
              return r;
            });
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.makeDestinationObject(),
            r = this.word.decode(e, t);
          this._packedSetValue(r);
          for (const o of this.fields)
            void 0 !== o.property && (n[o.property] = o.decode(e));
          return n;
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const r = this.word.decode(t, n);
          this._packedSetValue(r);
          for (const o of this.fields)
            if (void 0 !== o.property) {
              const t = e[o.property];
              void 0 !== t && o.encode(t);
            }
          return this.word.encode(this._packedGetValue(), t, n);
        }
        addField(e, t) {
          const n = new O(this, e, t);
          return this.fields.push(n), n;
        }
        addBoolean(e) {
          const t = new S(this, e);
          return this.fields.push(t), t;
        }
        fieldFor(e) {
          if ("string" !== typeof e)
            throw new TypeError("property must be string");
          for (const t of this.fields) if (t.property === e) return t;
        }
      }
      class O {
        constructor(e, t, n) {
          if (!(e instanceof M))
            throw new TypeError("container must be a BitStructure");
          if (!Number.isInteger(t) || 0 >= t)
            throw new TypeError("bits must be positive integer");
          const r = 8 * e.span,
            o = e.fields.reduce((e, t) => e + t.bits, 0);
          if (t + o > r)
            throw new Error(
              "bits too long for span remainder (" +
                (r - o) +
                " of " +
                r +
                " remain)"
            );
          (this.container = e),
            (this.bits = t),
            (this.valueMask = (1 << t) - 1),
            32 === t && (this.valueMask = 4294967295),
            (this.start = o),
            this.container.msb && (this.start = r - o - t),
            (this.wordMask = F(this.valueMask << this.start)),
            (this.property = n);
        }
        decode(e, t) {
          return (
            F(this.container._packedGetValue() & this.wordMask) >>> this.start
          );
        }
        encode(e) {
          if (
            "number" !== typeof e ||
            !Number.isInteger(e) ||
            e !== F(e & this.valueMask)
          )
            throw new TypeError(
              i("BitField.encode", this) +
                " value must be integer not exceeding " +
                this.valueMask
            );
          const t = this.container._packedGetValue(),
            n = F(e << this.start);
          this.container._packedSetValue(F(t & ~this.wordMask) | n);
        }
      }
      class S extends O {
        constructor(e, t) {
          super(e, 1, t);
        }
        decode(e, t) {
          return !!super.decode(e, t);
        }
        encode(e) {
          "boolean" === typeof e && (e = +e), super.encode(e);
        }
      }
      class j extends a {
        constructor(e, t) {
          if (
            !(
              (e instanceof c && e.isCount()) ||
              (Number.isInteger(e) && 0 <= e)
            )
          )
            throw new TypeError(
              "length must be positive integer or an unsigned integer ExternalLayout"
            );
          let n = -1;
          e instanceof c || (n = e), super(n, t), (this.length = e);
        }
        getSpan(e, t) {
          let n = this.span;
          return 0 > n && (n = this.length.decode(e, t)), n;
        }
        decode(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = this.span;
          return 0 > n && (n = this.length.decode(e, t)), s(e).slice(t, t + n);
        }
        encode(e, t, n) {
          let r = this.length;
          if (
            (this.length instanceof c && (r = e.length),
            !(e instanceof Uint8Array && r === e.length))
          )
            throw new TypeError(
              i("Blob.encode", this) +
                " requires (length " +
                r +
                ") Uint8Array as src"
            );
          if (n + r > t.length)
            throw new RangeError("encoding overruns Uint8Array");
          const o = s(e);
          return (
            s(t).write(o.toString("hex"), n, r, "hex"),
            this.length instanceof c && this.length.encode(r, t, n),
            r
          );
        }
      }
      class z extends a {
        constructor(e) {
          super(-1, e);
        }
        getSpan(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          o(e);
          let n = t;
          for (; n < e.length && 0 !== e[n]; ) n += 1;
          return 1 + n - t;
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.getSpan(e, t);
          return s(e)
            .slice(t, t + n - 1)
            .toString("utf-8");
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          "string" !== typeof e && (e = String(e));
          const o = r.Buffer.from(e, "utf8"),
            a = o.length;
          if (n + a > t.length)
            throw new RangeError("encoding overruns Buffer");
          const i = s(t);
          return o.copy(i, n), (i[n + a] = 0), a + 1;
        }
      }
      class R extends a {
        constructor(e, t) {
          if (
            ("string" === typeof e && void 0 === t && ((t = e), (e = void 0)),
            void 0 === e)
          )
            e = -1;
          else if (!Number.isInteger(e))
            throw new TypeError("maxSpan must be an integer");
          super(-1, t), (this.maxSpan = e);
        }
        getSpan(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o(e), e.length - t;
        }
        decode(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n = this.getSpan(e, t);
          if (0 <= this.maxSpan && this.maxSpan < n)
            throw new RangeError("text length exceeds maxSpan");
          return s(e)
            .slice(t, t + n)
            .toString("utf-8");
        }
        encode(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          "string" !== typeof e && (e = String(e));
          const o = r.Buffer.from(e, "utf8"),
            a = o.length;
          if (0 <= this.maxSpan && this.maxSpan < a)
            throw new RangeError("text length exceeds maxSpan");
          if (n + a > t.length)
            throw new RangeError("encoding overruns Buffer");
          return o.copy(s(t), n), a;
        }
      }
      class L extends a {
        constructor(e, t) {
          super(0, t), (this.value = e);
        }
        decode(e, t) {
          return this.value;
        }
        encode(e, t, n) {
          return 0;
        }
      }
      (t.cY = (e, t, n) => new l(e, t, n)),
        (t.u8 = (e) => new d(1, e)),
        (t.NX = (e) => new d(2, e)),
        (t.DH = (e) => new d(4, e)),
        (t.I0 = (e) => new y(e)),
        (t.Wg = (e) => new w(e)),
        (t.w3 = (e, t, n) => new T(e, t, n)),
        (t.O6 = (e, t, n) => new I(e, t, n)),
        (t.av = (e, t) => new j(e, t));
    },
    63877: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => s });
      var r = n(38302),
        o = n(29043);
      function s(e) {
        var t;
        const {
            batch: n,
            cacheTime: s = null !== (t = e.pollingInterval) && void 0 !== t
              ? t
              : 4e3,
            ccipRead: a,
            key: i = "base",
            name: c = "Base Client",
            pollingInterval: u = 4e3,
            type: l = "base",
          } = e,
          d = e.chain,
          f = e.account ? (0, r.J)(e.account) : void 0,
          {
            config: h,
            request: p,
            value: m,
          } = e.transport({ chain: d, pollingInterval: u }),
          b = {
            account: f,
            batch: n,
            cacheTime: s,
            ccipRead: a,
            chain: d,
            key: i,
            name: c,
            pollingInterval: u,
            request: p,
            transport: { ...h, ...m },
            type: l,
            uid: (0, o.L)(),
          };
        return Object.assign(b, {
          extend: (function e(t) {
            return (n) => {
              const r = n(t);
              for (const e in b) delete r[e];
              const o = { ...t, ...r };
              return Object.assign(o, { extend: e(o) });
            };
          })(b),
        });
      }
    },
    63976: (e, t, n) => {
      "use strict";
      n.d(t, { Bv: () => s });
      var r = n(60713);
      const o = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function s(e) {
        const t = {};
        return (
          "undefined" !== typeof e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, r.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, r.cK)(BigInt(e.s)) : e.s,
              chainId: (0, r.cK)(e.chainId),
              nonce: (0, r.cK)(e.nonce),
              ...("undefined" !== typeof e.yParity
                ? { yParity: (0, r.cK)(e.yParity) }
                : {}),
              ...("undefined" !== typeof e.v && "undefined" === typeof e.yParity
                ? { v: (0, r.cK)(e.v) }
                : {}),
            }))),
          "undefined" !== typeof e.accessList && (t.accessList = e.accessList),
          "undefined" !== typeof e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          "undefined" !== typeof e.blobs &&
            ("string" !== typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, r.My)(e)))
              : (t.blobs = e.blobs)),
          "undefined" !== typeof e.data && (t.data = e.data),
          "undefined" !== typeof e.from && (t.from = e.from),
          "undefined" !== typeof e.gas && (t.gas = (0, r.cK)(e.gas)),
          "undefined" !== typeof e.gasPrice &&
            (t.gasPrice = (0, r.cK)(e.gasPrice)),
          "undefined" !== typeof e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, r.cK)(e.maxFeePerBlobGas)),
          "undefined" !== typeof e.maxFeePerGas &&
            (t.maxFeePerGas = (0, r.cK)(e.maxFeePerGas)),
          "undefined" !== typeof e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, r.cK)(e.maxPriorityFeePerGas)),
          "undefined" !== typeof e.nonce && (t.nonce = (0, r.cK)(e.nonce)),
          "undefined" !== typeof e.to && (t.to = e.to),
          "undefined" !== typeof e.type && (t.type = o[e.type]),
          "undefined" !== typeof e.value && (t.value = (0, r.cK)(e.value)),
          t
        );
      }
    },
    64807: (e, t, n) => {
      "use strict";
      n.d(t, { iY: () => c });
      var r = n(37193),
        o = n(93935),
        s = n(302),
        a = n(34504),
        i = n(46928);
      function c(e) {
        const { abi: t, args: n = [], name: s } = e,
          c = (0, o.q)(s, { strict: !1 }),
          d = t.filter((e) =>
            c
              ? "function" === e.type
                ? (0, i.V)(e) === s
                : "event" === e.type && (0, a.h)(e) === s
              : "name" in e && e.name === s
          );
        if (0 === d.length) return;
        if (1 === d.length) return d[0];
        let f;
        for (const o of d) {
          if (!("inputs" in o)) continue;
          if (!n || 0 === n.length) {
            if (!o.inputs || 0 === o.inputs.length) return o;
            continue;
          }
          if (!o.inputs) continue;
          if (0 === o.inputs.length) continue;
          if (o.inputs.length !== n.length) continue;
          if (
            n.every((e, t) => {
              const n = "inputs" in o && o.inputs[t];
              return !!n && u(e, n);
            })
          ) {
            if (f && "inputs" in f && f.inputs) {
              const e = l(o.inputs, f.inputs, n);
              if (e)
                throw new r.nM(
                  { abiItem: o, type: e[0] },
                  { abiItem: f, type: e[1] }
                );
            }
            f = o;
          }
        }
        return f || d[0];
      }
      function u(e, t) {
        const n = typeof e,
          r = t.type;
        switch (r) {
          case "address":
            return (0, s.P)(e, { strict: !1 });
          case "bool":
            return "boolean" === n;
          case "function":
          case "string":
            return "string" === n;
          default:
            return "tuple" === r && "components" in t
              ? Object.values(t.components).every((t, n) =>
                  u(Object.values(e)[n], t)
                )
              : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                  r
                )
              ? "number" === n || "bigint" === n
              : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)
              ? "string" === n || e instanceof Uint8Array
              : !!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) &&
                Array.isArray(e) &&
                e.every((e) =>
                  u(e, { ...t, type: r.replace(/(\[[0-9]{0,}\])$/, "") })
                );
        }
      }
      function l(e, t, n) {
        for (const r in e) {
          const o = e[r],
            a = t[r];
          if (
            "tuple" === o.type &&
            "tuple" === a.type &&
            "components" in o &&
            "components" in a
          )
            return l(o.components, a.components, n[r]);
          const i = [o.type, a.type];
          if (
            !(!i.includes("address") || !i.includes("bytes20")) ||
            (((i.includes("address") && i.includes("string")) ||
              !(!i.includes("address") || !i.includes("bytes"))) &&
              (0, s.P)(n[r], { strict: !1 }))
          )
            return i;
        }
      }
    },
    65921: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => w });
      var r = n(38302),
        o = n(69372),
        s = n(82636),
        a = n(30569),
        i = n(92490);
      var c = n(11307),
        u = n(66127),
        l = n(93027);
      var d = n(18220),
        f = n(63976),
        h = n(55903),
        p = n(91384),
        m = n(10201),
        b = n(35909),
        g = n(95463),
        y = n(25085);
      const v = new p.A(128);
      async function w(e, t) {
        const {
          account: n = e.account,
          chain: p = e.chain,
          accessList: w,
          authorizationList: x,
          blobs: P,
          data: E,
          gas: k,
          gasPrice: B,
          maxFeePerBlobGas: I,
          maxFeePerGas: T,
          maxPriorityFeePerGas: C,
          nonce: $,
          value: N,
          ...A
        } = t;
        if ("undefined" === typeof n)
          throw new o.T({ docsPath: "/docs/actions/wallet/sendTransaction" });
        const F = n ? (0, r.J)(n) : null;
        try {
          (0, m.c)(t);
          const n = await (async () =>
            t.to
              ? t.to
              : null !== t.to && x && x.length > 0
              ? await (0, a.g)({ authorization: x[0] }).catch(() => {
                  throw new s.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (
            "json-rpc" === (null === F || void 0 === F ? void 0 : F.type) ||
            null === F
          ) {
            var M;
            let t;
            null !== p &&
              ((t = await (0, h.T)(e, b.T, "getChainId")({})),
              (function (e) {
                let { chain: t, currentChainId: n } = e;
                if (!t) throw new i.jF();
                if (n !== t.id) throw new i.EH({ chain: t, currentChainId: n });
              })({ currentChainId: t, chain: p }));
            const r =
                null === (M = e.chain) ||
                void 0 === M ||
                null === (M = M.formatters) ||
                void 0 === M ||
                null === (M = M.transactionRequest) ||
                void 0 === M
                  ? void 0
                  : M.format,
              o = (r || f.Bv)({
                ...(0, d.o)(A, { format: r }),
                accessList: w,
                authorizationList: x,
                blobs: P,
                chainId: t,
                data: E,
                from: null === F || void 0 === F ? void 0 : F.address,
                gas: k,
                gasPrice: B,
                maxFeePerBlobGas: I,
                maxFeePerGas: T,
                maxPriorityFeePerGas: C,
                nonce: $,
                to: n,
                value: N,
              }),
              s = v.get(e.uid),
              a = s ? "wallet_sendTransaction" : "eth_sendTransaction";
            try {
              return await e.request(
                { method: a, params: [o] },
                { retryCount: 0 }
              );
            } catch (S) {
              if (!1 === s) throw S;
              const t = S;
              if (
                "InvalidInputRpcError" === t.name ||
                "InvalidParamsRpcError" === t.name ||
                "MethodNotFoundRpcError" === t.name ||
                "MethodNotSupportedRpcError" === t.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [o] },
                    { retryCount: 0 }
                  )
                  .then((t) => (v.set(e.uid, !0), t))
                  .catch((n) => {
                    const r = n;
                    if (
                      "MethodNotFoundRpcError" === r.name ||
                      "MethodNotSupportedRpcError" === r.name
                    )
                      throw (v.set(e.uid, !1), t);
                    throw r;
                  });
              throw t;
            }
          }
          if ("local" === (null === F || void 0 === F ? void 0 : F.type)) {
            var O;
            const t = await (0, h.T)(
                e,
                g.ft,
                "prepareTransactionRequest"
              )({
                account: F,
                accessList: w,
                authorizationList: x,
                blobs: P,
                chain: p,
                data: E,
                gas: k,
                gasPrice: B,
                maxFeePerBlobGas: I,
                maxFeePerGas: T,
                maxPriorityFeePerGas: C,
                nonce: $,
                nonceManager: F.nonceManager,
                parameters: [...g.MM, "sidecars"],
                value: N,
                ...A,
                to: n,
              }),
              r =
                null === p ||
                void 0 === p ||
                null === (O = p.serializers) ||
                void 0 === O
                  ? void 0
                  : O.transaction,
              o = await F.signTransaction(t, { serializer: r });
            return await (0, h.T)(
              e,
              y.L,
              "sendRawTransaction"
            )({ serializedTransaction: o });
          }
          if ("smart" === (null === F || void 0 === F ? void 0 : F.type))
            throw new o.Z({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new o.Z({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: null === F || void 0 === F ? void 0 : F.type,
          });
        } catch (j) {
          if (j instanceof o.Z) throw j;
          throw (function (e, t) {
            let { docsPath: n, ...r } = t;
            const o = (() => {
              const t = (0, l.l)(e, r);
              return t instanceof c.RM ? e : t;
            })();
            return new u.$s(o, { docsPath: n, ...r });
          })(j, { ...t, account: F, chain: t.chain || void 0 });
        }
      }
    },
    66089: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => o });
      var r = n(60713);
      async function o(e, t) {
        let { address: n, blockNumber: o, blockTag: s = "latest" } = t;
        const a = o ? (0, r.cK)(o) : void 0,
          i = await e.request({
            method: "eth_getBalance",
            params: [n, a || s],
          });
        return BigInt(i);
      }
    },
    66091: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => a });
      var r = n(17999),
        o = n(11307),
        s = n(93027);
      function a(e, t) {
        let { docsPath: n, ...a } = t;
        const i = (() => {
          const t = (0, s.l)(e, a);
          return t instanceof o.RM ? e : t;
        })();
        return new r.zX(i, { docsPath: n, ...a });
      }
    },
    66119: (e, t, n) => {
      "use strict";
      n.d(t, { Af: () => h, ZJ: () => u, aT: () => f });
      var r = n(82636),
        o = n(93935),
        s = n(69787),
        a = n(33910),
        i = n(60713);
      const c = new TextEncoder();
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "number" === typeof e || "bigint" === typeof e
          ? (function (e, t) {
              const n = (0, i.cK)(e, t);
              return f(n);
            })(e, t)
          : "boolean" === typeof e
          ? (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const n = new Uint8Array(1);
              if (((n[0] = Number(e)), "number" === typeof t.size))
                return (
                  (0, a.Sl)(n, { size: t.size }), (0, s.eV)(n, { size: t.size })
                );
              return n;
            })(e, t)
          : (0, o.q)(e)
          ? f(e, t)
          : h(e, t);
      }
      const l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e;
        t.size &&
          ((0, a.Sl)(n, { size: t.size }),
          (n = (0, s.eV)(n, { dir: "right", size: t.size })));
        let o = n.slice(2);
        o.length % 2 && (o = `0${o}`);
        const i = o.length / 2,
          c = new Uint8Array(i);
        for (let s = 0, a = 0; s < i; s++) {
          const e = d(o.charCodeAt(a++)),
            t = d(o.charCodeAt(a++));
          if (void 0 === e || void 0 === t)
            throw new r.C(
              `Invalid byte sequence ("${o[a - 2]}${o[a - 1]}" in "${o}").`
            );
          c[s] = 16 * e + t;
        }
        return c;
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = c.encode(e);
        return "number" === typeof t.size
          ? ((0, a.Sl)(n, { size: t.size }),
            (0, s.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    66127: (e, t, n) => {
      "use strict";
      n.d(t, {
        $s: () => d,
        Kc: () => h,
        Kz: () => f,
        Vg: () => u,
        WA: () => p,
        aO: () => a,
        fZ: () => l,
        n3: () => i,
        zW: () => c,
      });
      var r = n(84677),
        o = n(8237),
        s = n(82636);
      function a(e) {
        const t = Object.entries(e)
            .map((e) => {
              let [t, n] = e;
              return void 0 === n || !1 === n ? null : [t, n];
            })
            .filter(Boolean),
          n = t.reduce((e, t) => {
            let [n] = t;
            return Math.max(e, n.length);
          }, 0);
        return t
          .map((e) => {
            let [t, r] = e;
            return `  ${`${t}:`.padEnd(n + 1)}  ${r}`;
          })
          .join("\n");
      }
      class i extends s.C {
        constructor() {
          super(
            [
              "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
              "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            ].join("\n"),
            { name: "FeeConflictError" }
          );
        }
      }
      class c extends s.C {
        constructor(e) {
          let { v: t } = e;
          super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError",
          });
        }
      }
      class u extends s.C {
        constructor(e) {
          let { transaction: t } = e;
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(t),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      s.C;
      s.C;
      class l extends s.C {
        constructor(e) {
          let { storageKey: t } = e;
          super(
            `Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (t.length - 2) / 2
            )} bytes.`,
            { name: "InvalidStorageKeySizeError" }
          );
        }
      }
      class d extends s.C {
        constructor(e, t) {
          var n;
          let {
            account: s,
            docsPath: i,
            chain: c,
            data: u,
            gas: l,
            gasPrice: d,
            maxFeePerGas: f,
            maxPriorityFeePerGas: h,
            nonce: p,
            to: m,
            value: b,
          } = t;
          const g = a({
            chain:
              c &&
              `${null === c || void 0 === c ? void 0 : c.name} (id: ${
                null === c || void 0 === c ? void 0 : c.id
              })`,
            from: null === s || void 0 === s ? void 0 : s.address,
            to: m,
            value:
              "undefined" !== typeof b &&
              `${(0, r.c)(b)} ${
                (null === c ||
                void 0 === c ||
                null === (n = c.nativeCurrency) ||
                void 0 === n
                  ? void 0
                  : n.symbol) || "ETH"
              }`,
            data: u,
            gas: l,
            gasPrice: "undefined" !== typeof d && `${(0, o.Q)(d)} gwei`,
            maxFeePerGas: "undefined" !== typeof f && `${(0, o.Q)(f)} gwei`,
            maxPriorityFeePerGas:
              "undefined" !== typeof h && `${(0, o.Q)(h)} gwei`,
            nonce: p,
          });
          super(e.shortMessage, {
            cause: e,
            docsPath: i,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              g,
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class f extends s.C {
        constructor(e) {
          let {
              blockHash: t,
              blockNumber: n,
              blockTag: r,
              hash: o,
              index: s,
            } = e,
            a = "Transaction";
          r &&
            void 0 !== s &&
            (a = `Transaction at block time "${r}" at index "${s}"`),
            t &&
              void 0 !== s &&
              (a = `Transaction at block hash "${t}" at index "${s}"`),
            n &&
              void 0 !== s &&
              (a = `Transaction at block number "${n}" at index "${s}"`),
            o && (a = `Transaction with hash "${o}"`),
            super(`${a} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class h extends s.C {
        constructor(e) {
          let { hash: t } = e;
          super(
            `Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class p extends s.C {
        constructor(e) {
          let { hash: t } = e;
          super(
            `Timed out while waiting for transaction with hash "${t}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    66178: (e, t, n) => {
      "use strict";
      n.d(t, { BD: () => r, Ge: () => o });
      const r = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    66296: (e, t, n) => {
      "use strict";
      n.d(t, { yH: () => l });
      var r = n(39815),
        o = n(22895),
        s = n(14718),
        a = n(302),
        i = n(60713);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, t) => {
            let { slot: n, value: r } = t;
            if (66 !== n.length)
              throw new o.NV({ size: n.length, targetSize: 66, type: "hex" });
            if (66 !== r.length)
              throw new o.NV({ size: r.length, targetSize: 66, type: "hex" });
            return (e[n] = r), e;
          }, {});
      }
      function u(e) {
        const { balance: t, nonce: n, state: r, stateDiff: o, code: a } = e,
          u = {};
        if (
          (void 0 !== a && (u.code = a),
          void 0 !== t && (u.balance = (0, i.cK)(t)),
          void 0 !== n && (u.nonce = (0, i.cK)(n)),
          void 0 !== r && (u.state = c(r)),
          void 0 !== o)
        ) {
          if (u.state) throw new s.ft();
          u.stateDiff = c(o);
        }
        return u;
      }
      function l(e) {
        if (!e) return;
        const t = {};
        for (const { address: n, ...o } of e) {
          if (!(0, a.P)(n, { strict: !1 })) throw new r.M({ address: n });
          if (t[n]) throw new s.Hi({ address: n });
          t[n] = u(o);
        }
        return t;
      }
    },
    67284: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => a });
      var r = n(39386),
        o = n(60713),
        s = n(89620);
      async function a(e) {
        var t;
        let {
          blockHash: n,
          blockNumber: a,
          blockTag: i,
          includeTransactions: c,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const u = null !== i && void 0 !== i ? i : "latest",
          l = null !== c && void 0 !== c && c,
          d = void 0 !== a ? (0, o.cK)(a) : void 0;
        let f = null;
        if (
          ((f = n
            ? await e.request(
                { method: "eth_getBlockByHash", params: [n, l] },
                { dedupe: !0 }
              )
            : await e.request(
                { method: "eth_getBlockByNumber", params: [d || u, l] },
                { dedupe: Boolean(d) }
              )),
          !f)
        )
          throw new r.l({ blockHash: n, blockNumber: a });
        return (
          (null === (t = e.chain) ||
          void 0 === t ||
          null === (t = t.formatters) ||
          void 0 === t ||
          null === (t = t.block) ||
          void 0 === t
            ? void 0
            : t.format) || s.$
        )(f);
      }
    },
    68113: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => F });
      var r = n(94656);
      const o = BigInt(2 ** 32 - 1),
        s = BigInt(32);
      function a(e) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(e & o), l: Number((e >> s) & o) }
          : { h: 0 | Number((e >> s) & o), l: 0 | Number(e & o) };
      }
      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let o = 0; o < e.length; o++) {
          const { h: s, l: i } = a(e[o], t);
          [n[o], r[o]] = [s, i];
        }
        return [n, r];
      }
      const c = (e, t, n) => (e << n) | (t >>> (32 - n)),
        u = (e, t, n) => (t << n) | (e >>> (32 - n)),
        l = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        d = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      var f = n(37702);
      const h = [],
        p = [],
        m = [],
        b = BigInt(0),
        g = BigInt(1),
        y = BigInt(2),
        v = BigInt(7),
        w = BigInt(256),
        x = BigInt(113);
      for (let M = 0, O = g, S = 1, j = 0; M < 24; M++) {
        ([S, j] = [j, (2 * S + 3 * j) % 5]),
          h.push(2 * (5 * j + S)),
          p.push((((M + 1) * (M + 2)) / 2) % 64);
        let e = b;
        for (let t = 0; t < 7; t++)
          (O = ((O << g) ^ ((O >> v) * x)) % w),
            O & y && (e ^= g << ((g << BigInt(t)) - g));
        m.push(e);
      }
      const [P, E] = i(m, !0),
        k = (e, t, n) => (n > 32 ? l(e, t, n) : c(e, t, n)),
        B = (e, t, n) => (n > 32 ? d(e, t, n) : u(e, t, n));
      class I extends f.Vw {
        constructor(e, t, n) {
          let o =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 24;
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = o),
            (this.rounds = s),
            (0, r.Fe)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, f.DH)(this.state));
        }
        keccak() {
          f.qv || (0, f.Fc)(this.state32),
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 24;
              const n = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let r = 0; r < 10; r++)
                  n[r] = e[r] ^ e[r + 10] ^ e[r + 20] ^ e[r + 30] ^ e[r + 40];
                for (let r = 0; r < 10; r += 2) {
                  const t = (r + 8) % 10,
                    o = (r + 2) % 10,
                    s = n[o],
                    a = n[o + 1],
                    i = k(s, a, 1) ^ n[t],
                    c = B(s, a, 1) ^ n[t + 1];
                  for (let n = 0; n < 50; n += 10)
                    (e[r + n] ^= i), (e[r + n + 1] ^= c);
                }
                let t = e[2],
                  o = e[3];
                for (let n = 0; n < 24; n++) {
                  const r = p[n],
                    s = k(t, o, r),
                    a = B(t, o, r),
                    i = h[n];
                  (t = e[i]), (o = e[i + 1]), (e[i] = s), (e[i + 1] = a);
                }
                for (let r = 0; r < 50; r += 10) {
                  for (let t = 0; t < 10; t++) n[t] = e[r + t];
                  for (let t = 0; t < 10; t++)
                    e[r + t] ^= ~n[(t + 2) % 10] & n[(t + 4) % 10];
                }
                (e[0] ^= P[r]), (e[1] ^= E[r]);
              }
              n.fill(0);
            })(this.state32, this.rounds),
            f.qv || (0, f.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.CC)(this);
          const { blockLen: t, state: n } = this,
            o = (e = (0, f.ZJ)(e)).length;
          for (let r = 0; r < o; ) {
            const s = Math.min(t - this.pos, o - r);
            for (let t = 0; t < s; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            0 !== (128 & t) && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.CC)(this, !1), (0, r.DO)(e), this.finish();
          const t = this.state,
            { blockLen: n } = this;
          for (let r = 0, o = e.length; r < o; ) {
            this.posOut >= n && this.keccak();
            const s = Math.min(n - this.posOut, o - r);
            e.set(t.subarray(this.posOut, this.posOut + s), r),
              (this.posOut += s),
              (r += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.Ht)(e, this), this.finished))
            throw new Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          const {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: o,
            enableXOF: s,
          } = this;
          return (
            e || (e = new I(t, n, r, s, o)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = o),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      const T = (e, t, n) => (0, f.ld)(() => new I(t, e, n)),
        C = T(1, 136, 32);
      var $ = n(93935),
        N = n(66119),
        A = n(60713);
      function F(e, t) {
        const n = t || "hex",
          r = C((0, $.q)(e, { strict: !1 }) ? (0, N.ZJ)(e) : e);
        return "bytes" === n ? r : (0, A.nj)(r);
      }
    },
    68584: (e, t, n) => {
      var r = n(13740),
        o = r.Buffer;
      function s(e, t) {
        for (var n in e) t[n] = e[n];
      }
      function a(e, t, n) {
        return o(e, t, n);
      }
      o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
        ? (e.exports = r)
        : (s(r, t), (t.Buffer = a)),
        (a.prototype = Object.create(o.prototype)),
        s(o, a),
        (a.from = function (e, t, n) {
          if ("number" === typeof e)
            throw new TypeError("Argument must not be a number");
          return o(e, t, n);
        }),
        (a.alloc = function (e, t, n) {
          if ("number" !== typeof e)
            throw new TypeError("Argument must be a number");
          var r = o(e);
          return (
            void 0 !== t
              ? "string" === typeof n
                ? r.fill(t, n)
                : r.fill(t)
              : r.fill(0),
            r
          );
        }),
        (a.allocUnsafe = function (e) {
          if ("number" !== typeof e)
            throw new TypeError("Argument must be a number");
          return o(e);
        }),
        (a.allocUnsafeSlow = function (e) {
          if ("number" !== typeof e)
            throw new TypeError("Argument must be a number");
          return r.SlowBuffer(e);
        });
    },
    69372: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => o, Z: () => s });
      var r = n(82636);
      class o extends r.C {
        constructor() {
          let { docsPath: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(
            [
              "Could not find an Account to execute with this Action.",
              "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            ].join("\n"),
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class s extends r.C {
        constructor(e) {
          let { docsPath: t, metaMessages: n, type: r } = e;
          super(`Account type "${r}" is not supported.`, {
            docsPath: t,
            metaMessages: n,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    69608: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => u });
      var r = n(66119),
        o = n(68113);
      const s = (e) => (0, o.S)((0, r.ZJ)(e));
      var a = n(29123),
        i = n(82636);
      const c = (e) =>
        (function (e) {
          let t = !0,
            n = "",
            r = 0,
            o = "",
            s = !1;
          for (let a = 0; a < e.length; a++) {
            const i = e[a];
            if (
              (["(", ")", ","].includes(i) && (t = !0),
              "(" === i && r++,
              ")" === i && r--,
              t)
            )
              if (0 !== r)
                " " !== i
                  ? ((o += i), (n += i))
                  : "," !== e[a - 1] &&
                    "," !== n &&
                    ",(" !== n &&
                    ((n = ""), (t = !1));
              else if (" " === i && ["event", "function", ""].includes(o))
                o = "";
              else if (((o += i), ")" === i)) {
                s = !0;
                break;
              }
          }
          if (!s) throw new i.C("Unable to normalize signature.");
          return o;
        })("string" === typeof e ? e : (0, a.B)(e));
      function u(e) {
        return (t = c(e)), s(t);
        var t;
      }
    },
    69787: (e, t, n) => {
      "use strict";
      n.d(t, { db: () => s, eV: () => o });
      var r = n(22895);
      function o(e) {
        let { dir: t, size: n = 32 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" === typeof e
          ? s(e, { dir: t, size: n })
          : (function (e) {
              let { dir: t, size: n = 32 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (null === n) return e;
              if (e.length > n)
                throw new r.Fl({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              const o = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                const s = "right" === t;
                o[s ? r : n - r - 1] = e[s ? r : e.length - r - 1];
              }
              return o;
            })(e, { dir: t, size: n });
      }
      function s(e) {
        let { dir: t, size: n = 32 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null === n) return e;
        const o = e.replace("0x", "");
        if (o.length > 2 * n)
          throw new r.Fl({
            size: Math.ceil(o.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${o["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    70248: (e, t, n) => {
      "use strict";
      function r(e) {
        return "string" === typeof e[0]
          ? o(e)
          : (function (e) {
              let t = 0;
              for (const o of e) t += o.length;
              const n = new Uint8Array(t);
              let r = 0;
              for (const o of e) n.set(o, r), (r += o.length);
              return n;
            })(e);
      }
      function o(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, { aP: () => o, xW: () => r });
    },
    71391: (e, t, n) => {
      "use strict";
      n.d(t, { U1: () => T, Z0: () => $ });
      var r = n(19900),
        o = n(67295),
        s = n(15062),
        a =
          (n(52143),
          (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" !== typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })()),
        i = function (e, t) {
          var n,
            r,
            o,
            s,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: i(0), throw: i(1), return: i(2) }),
            "function" === typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function i(s) {
            return function (i) {
              return (function (s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & s[0]
                            ? r.return
                            : s[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, s[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                      case 0:
                      case 1:
                        o = s;
                        break;
                      case 4:
                        return a.label++, { value: s[1], done: !1 };
                      case 5:
                        a.label++, (r = s[1]), (s = [0]);
                        continue;
                      case 7:
                        (s = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                          (6 === s[0] || 2 === s[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === s[0] &&
                          (!o || (s[1] > o[0] && s[1] < o[3]))
                        ) {
                          a.label = s[1];
                          break;
                        }
                        if (6 === s[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = s);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(s);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    s = t.call(e, a);
                  } catch (i) {
                    (s = [6, i]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & s[0]) throw s[1];
                return { value: s[0] ? s[1] : void 0, done: !0 };
              })([s, i]);
            };
          }
        },
        c = function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n];
          return e;
        },
        u = Object.defineProperty,
        l = Object.defineProperties,
        d = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        m = function (e, t, n) {
          return t in e
            ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
        },
        b = function (e, t) {
          for (var n in t || (t = {})) h.call(t, n) && m(e, n, t[n]);
          if (f)
            for (var r = 0, o = f(t); r < o.length; r++) {
              n = o[r];
              p.call(t, n) && m(e, n, t[n]);
            }
          return e;
        },
        g = function (e, t) {
          return l(e, d(t));
        },
        y = function (e, t, n) {
          return new Promise(function (r, o) {
            var s = function (e) {
                try {
                  i(n.next(e));
                } catch (t) {
                  o(t);
                }
              },
              a = function (e) {
                try {
                  i(n.throw(e));
                } catch (t) {
                  o(t);
                }
              },
              i = function (e) {
                return e.done
                  ? r(e.value)
                  : Promise.resolve(e.value).then(s, a);
              };
            i((n = n.apply(e, t)).next());
          });
        },
        v =
          "undefined" !== typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return "object" === typeof arguments[0]
                    ? o.Zz
                    : o.Zz.apply(null, arguments);
              };
      "undefined" !== typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function w(e) {
        if ("object" !== typeof e || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return t === n;
      }
      function x(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (t) {
            var o = t.apply(void 0, n);
            if (!o) throw new Error("prepareAction did not return an object");
            return b(
              b(
                { type: e, payload: o.payload },
                "meta" in o && { meta: o.meta }
              ),
              "error" in o && { error: o.error }
            );
          }
          return { type: e, payload: n[0] };
        }
        return (
          (n.toString = function () {
            return "" + e;
          }),
          (n.type = e),
          (n.match = function (t) {
            return t.type === e;
          }),
          n
        );
      }
      var P = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var o = e.apply(this, n) || this;
            return Object.setPrototypeOf(o, t.prototype), o;
          }
          return (
            a(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.prototype.concat.apply(this, t);
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, c([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, c([void 0], e.concat(this))))();
            }),
            t
          );
        })(Array),
        E = (function (e) {
          function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var o = e.apply(this, n) || this;
            return Object.setPrototypeOf(o, t.prototype), o;
          }
          return (
            a(t, e),
            Object.defineProperty(t, Symbol.species, {
              get: function () {
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.concat = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.prototype.concat.apply(this, t);
            }),
            (t.prototype.prepend = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return 1 === e.length && Array.isArray(e[0])
                ? new (t.bind.apply(t, c([void 0], e[0].concat(this))))()
                : new (t.bind.apply(t, c([void 0], e.concat(this))))();
            }),
            t
          );
        })(Array);
      function k(e) {
        return (0, r.a6)(e) ? (0, r.Ay)(e, function () {}) : e;
      }
      function B() {
        return function (e) {
          return (function (e) {
            void 0 === e && (e = {});
            var t = e.thunk,
              n = void 0 === t || t,
              r =
                (e.immutableCheck,
                e.serializableCheck,
                e.actionCreatorCheck,
                new P());
            n &&
              ("boolean" === typeof n
                ? r.push(s.A)
                : r.push(s.A.withExtraArgument(n.extraArgument)));
            0;
            return r;
          })(e);
        };
      }
      var I = !0;
      function T(e) {
        var t,
          n = B(),
          r = e || {},
          s = r.reducer,
          a = void 0 === s ? void 0 : s,
          i = r.middleware,
          u = void 0 === i ? n() : i,
          l = r.devTools,
          d = void 0 === l || l,
          f = r.preloadedState,
          h = void 0 === f ? void 0 : f,
          p = r.enhancers,
          m = void 0 === p ? void 0 : p;
        if ("function" === typeof a) t = a;
        else {
          if (!w(a))
            throw new Error(
              '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
            );
          t = (0, o.HY)(a);
        }
        var g = u;
        if ("function" === typeof g && ((g = g(n)), !I && !Array.isArray(g)))
          throw new Error(
            "when using a middleware builder function, an array of middleware must be returned"
          );
        if (
          !I &&
          g.some(function (e) {
            return "function" !== typeof e;
          })
        )
          throw new Error(
            "each middleware provided to configureStore must be a function"
          );
        var y = o.Tw.apply(void 0, g),
          x = o.Zz;
        d && (x = v(b({ trace: !I }, "object" === typeof d && d)));
        var P = new E(y),
          k = P;
        Array.isArray(m)
          ? (k = c([y], m))
          : "function" === typeof m && (k = m(P));
        var T = x.apply(void 0, k);
        return (0, o.y$)(t, h, T);
      }
      function C(e) {
        var t,
          n = {},
          r = [],
          o = {
            addCase: function (e, t) {
              var r = "string" === typeof e ? e : e.type;
              if (!r)
                throw new Error(
                  "`builder.addCase` cannot be called with an empty action type"
                );
              if (r in n)
                throw new Error(
                  "`builder.addCase` cannot be called with two reducers for the same action type"
                );
              return (n[r] = t), o;
            },
            addMatcher: function (e, t) {
              return r.push({ matcher: e, reducer: t }), o;
            },
            addDefaultCase: function (e) {
              return (t = e), o;
            },
          };
        return e(o), [n, r, t];
      }
      function $(e) {
        var t = e.name;
        if (!t) throw new Error("`name` is a required option for createSlice");
        var n,
          o =
            "function" == typeof e.initialState
              ? e.initialState
              : k(e.initialState),
          s = e.reducers || {},
          a = Object.keys(s),
          i = {},
          u = {},
          l = {};
        function d() {
          var t =
              "function" === typeof e.extraReducers
                ? C(e.extraReducers)
                : [e.extraReducers],
            n = t[0],
            s = void 0 === n ? {} : n,
            a = t[1],
            i = void 0 === a ? [] : a,
            l = t[2],
            d = void 0 === l ? void 0 : l,
            f = b(b({}, s), u);
          return (function (e, t, n, o) {
            void 0 === n && (n = []);
            var s,
              a = "function" === typeof t ? C(t) : [t, n, o],
              i = a[0],
              u = a[1],
              l = a[2];
            if ("function" === typeof e)
              s = function () {
                return k(e());
              };
            else {
              var d = k(e);
              s = function () {
                return d;
              };
            }
            function f(e, t) {
              void 0 === e && (e = s());
              var n = c(
                [i[t.type]],
                u
                  .filter(function (e) {
                    return (0, e.matcher)(t);
                  })
                  .map(function (e) {
                    return e.reducer;
                  })
              );
              return (
                0 ===
                  n.filter(function (e) {
                    return !!e;
                  }).length && (n = [l]),
                n.reduce(function (e, n) {
                  if (n) {
                    var o;
                    if ((0, r.Qx)(e)) return void 0 === (o = n(e, t)) ? e : o;
                    if ((0, r.a6)(e))
                      return (0, r.Ay)(e, function (e) {
                        return n(e, t);
                      });
                    if (void 0 === (o = n(e, t))) {
                      if (null === e) return e;
                      throw Error(
                        "A case reducer on a non-draftable value must not return undefined"
                      );
                    }
                    return o;
                  }
                  return e;
                }, e)
              );
            }
            return (f.getInitialState = s), f;
          })(o, function (e) {
            for (var t in f) e.addCase(t, f[t]);
            for (var n = 0, r = i; n < r.length; n++) {
              var o = r[n];
              e.addMatcher(o.matcher, o.reducer);
            }
            d && e.addDefaultCase(d);
          });
        }
        return (
          a.forEach(function (e) {
            var n,
              r,
              o = s[e],
              a = t + "/" + e;
            "reducer" in o ? ((n = o.reducer), (r = o.prepare)) : (n = o),
              (i[e] = n),
              (u[a] = n),
              (l[e] = r ? x(a, r) : x(a));
          }),
          {
            name: t,
            reducer: function (e, t) {
              return n || (n = d()), n(e, t);
            },
            actions: l,
            caseReducers: i,
            getInitialState: function () {
              return n || (n = d()), n.getInitialState();
            },
          }
        );
      }
      var N = function (e) {
          void 0 === e && (e = 21);
          for (var t = "", n = e; n--; )
            t +=
              "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                (64 * Math.random()) | 0
              ];
          return t;
        },
        A = ["name", "message", "stack", "code"],
        F = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        M = function (e, t) {
          (this.payload = e), (this.meta = t);
        },
        O = function (e) {
          if ("object" === typeof e && null !== e) {
            for (var t = {}, n = 0, r = A; n < r.length; n++) {
              var o = r[n];
              "string" === typeof e[o] && (t[o] = e[o]);
            }
            return t;
          }
          return { message: String(e) };
        };
      !(function () {
        function e(e, t, n) {
          var r = x(e + "/fulfilled", function (e, t, n, r) {
              return {
                payload: e,
                meta: g(b({}, r || {}), {
                  arg: n,
                  requestId: t,
                  requestStatus: "fulfilled",
                }),
              };
            }),
            o = x(e + "/pending", function (e, t, n) {
              return {
                payload: void 0,
                meta: g(b({}, n || {}), {
                  arg: t,
                  requestId: e,
                  requestStatus: "pending",
                }),
              };
            }),
            s = x(e + "/rejected", function (e, t, r, o, s) {
              return {
                payload: o,
                error: ((n && n.serializeError) || O)(e || "Rejected"),
                meta: g(b({}, s || {}), {
                  arg: r,
                  requestId: t,
                  rejectedWithValue: !!o,
                  requestStatus: "rejected",
                  aborted: "AbortError" === (null == e ? void 0 : e.name),
                  condition: "ConditionError" === (null == e ? void 0 : e.name),
                }),
              };
            }),
            a =
              "undefined" !== typeof AbortController
                ? AbortController
                : (function () {
                    function e() {
                      this.signal = {
                        aborted: !1,
                        addEventListener: function () {},
                        dispatchEvent: function () {
                          return !1;
                        },
                        onabort: function () {},
                        removeEventListener: function () {},
                        reason: void 0,
                        throwIfAborted: function () {},
                      };
                    }
                    return (
                      (e.prototype.abort = function () {
                        0;
                      }),
                      e
                    );
                  })();
          return Object.assign(
            function (e) {
              return function (c, u, l) {
                var d,
                  f = (null == n ? void 0 : n.idGenerator)
                    ? n.idGenerator(e)
                    : N(),
                  h = new a();
                function p(e) {
                  (d = e), h.abort();
                }
                var m = (function () {
                  return y(this, null, function () {
                    var a, m, b, g, y, v;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            i.trys.push([0, 4, , 5]),
                            (g =
                              null == (a = null == n ? void 0 : n.condition)
                                ? void 0
                                : a.call(n, e, { getState: u, extra: l })),
                            null === (w = g) ||
                            "object" !== typeof w ||
                            "function" !== typeof w.then
                              ? [3, 2]
                              : [4, g]
                          );
                        case 1:
                          (g = i.sent()), (i.label = 2);
                        case 2:
                          if (!1 === g || h.signal.aborted)
                            throw {
                              name: "ConditionError",
                              message:
                                "Aborted due to condition callback returning false.",
                            };
                          return (
                            (y = new Promise(function (e, t) {
                              return h.signal.addEventListener(
                                "abort",
                                function () {
                                  return t({
                                    name: "AbortError",
                                    message: d || "Aborted",
                                  });
                                }
                              );
                            })),
                            c(
                              o(
                                f,
                                e,
                                null ==
                                  (m = null == n ? void 0 : n.getPendingMeta)
                                  ? void 0
                                  : m.call(
                                      n,
                                      { requestId: f, arg: e },
                                      { getState: u, extra: l }
                                    )
                              )
                            ),
                            [
                              4,
                              Promise.race([
                                y,
                                Promise.resolve(
                                  t(e, {
                                    dispatch: c,
                                    getState: u,
                                    extra: l,
                                    requestId: f,
                                    signal: h.signal,
                                    abort: p,
                                    rejectWithValue: function (e, t) {
                                      return new F(e, t);
                                    },
                                    fulfillWithValue: function (e, t) {
                                      return new M(e, t);
                                    },
                                  })
                                ).then(function (t) {
                                  if (t instanceof F) throw t;
                                  return t instanceof M
                                    ? r(t.payload, f, e, t.meta)
                                    : r(t, f, e);
                                }),
                              ]),
                            ]
                          );
                        case 3:
                          return (b = i.sent()), [3, 5];
                        case 4:
                          return (
                            (v = i.sent()),
                            (b =
                              v instanceof F
                                ? s(null, f, e, v.payload, v.meta)
                                : s(v, f, e)),
                            [3, 5]
                          );
                        case 5:
                          return (
                            (n &&
                              !n.dispatchConditionRejection &&
                              s.match(b) &&
                              b.meta.condition) ||
                              c(b),
                            [2, b]
                          );
                      }
                      var w;
                    });
                  });
                })();
                return Object.assign(m, {
                  abort: p,
                  requestId: f,
                  arg: e,
                  unwrap: function () {
                    return m.then(S);
                  },
                });
              };
            },
            { pending: o, rejected: s, fulfilled: r, typePrefix: e }
          );
        }
        e.withTypes = function () {
          return e;
        };
      })();
      function S(e) {
        if (e.meta && e.meta.rejectedWithValue) throw e.payload;
        if (e.error) throw e.error;
        return e.payload;
      }
      Object.assign;
      var j = "listenerMiddleware";
      x(j + "/add"), x(j + "/removeAll"), x(j + "/remove");
      "function" === typeof queueMicrotask &&
        queueMicrotask.bind(
          "undefined" !== typeof window
            ? window
            : "undefined" !== typeof n.g
            ? n.g
            : globalThis
        );
      var z,
        R = function (e) {
          return function (t) {
            setTimeout(t, e);
          };
        };
      "undefined" !== typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : R(10);
      (0, r.rF)();
    },
    72040: (e, t, n) => {
      "use strict";
      n.d(t, {
        CL: () => c,
        D5: () => l,
        Di: () => f,
        G1: () => N,
        Gi: () => u,
        L5: () => B,
        MI: () => F,
        RV: () => P,
        Sf: () => x,
        WT: () => I,
        XU: () => i,
        YW: () => m,
        ab: () => b,
        bq: () => d,
        cg: () => C,
        ch: () => k,
        hA: () => h,
        hl: () => T,
        jz: () => A,
        qZ: () => p,
        s0: () => g,
        sV: () => w,
        uL: () => $,
        vx: () => v,
        xQ: () => y,
        xq: () => E,
      });
      var r = n(82636),
        o = n(94906);
      class s extends r.C {
        constructor(e, t) {
          let {
            code: n,
            docsPath: r,
            metaMessages: s,
            name: a,
            shortMessage: i,
          } = t;
          super(i, {
            cause: e,
            docsPath: r,
            metaMessages:
              s || (null === e || void 0 === e ? void 0 : e.metaMessages),
            name: a || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = a || e.name),
            (this.code =
              e instanceof o.J8 ? e.code : null !== n && void 0 !== n ? n : -1);
        }
      }
      class a extends s {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class i extends s {
        constructor(e) {
          super(e, {
            code: i.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(i, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends s {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends s {
        constructor(e) {
          let { method: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(e, {
            code: u.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends s {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InvalidParamsRpcError",
            shortMessage: [
              "Invalid parameters were provided to the RPC method.",
              "Double check you have provided the correct parameters.",
            ].join("\n"),
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends s {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class f extends s {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "InvalidInputRpcError",
            shortMessage: [
              "Missing or invalid parameters.",
              "Double check you have provided the correct parameters.",
            ].join("\n"),
          });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class h extends s {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends s {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class m extends s {
        constructor(e) {
          super(e, {
            code: m.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class b extends s {
        constructor(e) {
          let { method: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(e, {
            code: b.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class g extends s {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class y extends s {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends a {
        constructor(e) {
          let { method: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class k extends a {
        constructor(e) {
          super(e, {
            code: k.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(k, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class B extends a {
        constructor(e) {
          super(e, {
            code: B.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage:
              "This Wallet does not support a capability that was not marked as optional.",
          });
        }
      }
      Object.defineProperty(B, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class I extends a {
        constructor(e) {
          super(e, {
            code: I.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(I, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class T extends a {
        constructor(e) {
          super(e, {
            code: T.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty(T, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class C extends a {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class $ extends a {
        constructor(e) {
          super(e, {
            code: $.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty($, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class N extends a {
        constructor(e) {
          super(e, {
            code: N.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(N, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class A extends a {
        constructor(e) {
          super(e, {
            code: A.code,
            name: "AtomicityNotSupportedError",
            shortMessage:
              "The wallet does not support atomic execution but the request requires it.",
          });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class F extends s {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    72746: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => s });
      var r = n(41912);
      const o = new Map();
      function s(e) {
        let { fn: t, id: n, shouldSplitBatch: s, wait: a = 0, sort: i } = e;
        const c = async () => {
            const e = l();
            u();
            const n = e.map((e) => {
              let { args: t } = e;
              return t;
            });
            0 !== n.length &&
              t(n)
                .then((t) => {
                  i && Array.isArray(t) && t.sort(i);
                  for (let n = 0; n < e.length; n++) {
                    const { resolve: r } = e[n];
                    null === r || void 0 === r || r([t[n], t]);
                  }
                })
                .catch((t) => {
                  for (let n = 0; n < e.length; n++) {
                    const { reject: r } = e[n];
                    null === r || void 0 === r || r(t);
                  }
                });
          },
          u = () => o.delete(n),
          l = () => o.get(n) || [],
          d = (e) => o.set(n, [...l(), e]);
        return {
          flush: u,
          async schedule(e) {
            const { promise: t, resolve: n, reject: o } = (0, r.Y)();
            (null === s || void 0 === s
              ? void 0
              : s([
                  ...l().map((e) => {
                    let { args: t } = e;
                    return t;
                  }),
                  e,
                ])) && c();
            return l().length > 0
              ? (d({ args: e, resolve: n, reject: o }), t)
              : (d({ args: e, resolve: n, reject: o }), setTimeout(c, a), t);
          },
        };
      }
    },
    73200: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => u });
      var r = n(38302),
        o = n(69372),
        s = n(19538),
        a = n(94093),
        i = n(55903),
        c = n(65921);
      async function u(e, t) {
        const {
          abi: n,
          account: u = e.account,
          address: l,
          args: d,
          dataSuffix: f,
          functionName: h,
          ...p
        } = t;
        if ("undefined" === typeof u)
          throw new o.T({ docsPath: "/docs/contract/writeContract" });
        const m = u ? (0, r.J)(u) : null,
          b = (0, s.p)({ abi: n, args: d, functionName: h });
        try {
          return await (0, i.T)(
            e,
            c.v,
            "sendTransaction"
          )({
            data: `${b}${f ? f.replace("0x", "") : ""}`,
            to: l,
            account: m,
            ...p,
          });
        } catch (g) {
          throw (0, a.j)(g, {
            abi: n,
            address: l,
            args: d,
            docsPath: "/docs/contract/writeContract",
            functionName: h,
            sender: null === m || void 0 === m ? void 0 : m.address,
          });
        }
      }
    },
    74118: (e, t, n) => {
      "use strict";
      n.d(t, { H2: () => a, Ty: () => o, u: () => i, xO: () => s });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { max: t, min: n, signed: r, size: o, value: s } = e;
          super(
            `Number "${s}" is not in safe ${
              o ? `${8 * o}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class s extends r.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class a extends r.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      r.C;
      class i extends r.C {
        constructor(e) {
          let { givenSize: t, maxSize: n } = e;
          super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    74913: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => l });
      var r = n(28406),
        o = n(84846),
        s = n(60713),
        a = n(14611),
        i = n(89594),
        c = n(55903),
        u = n(34795);
      async function l(e, t) {
        let {
            address: n,
            blockNumber: l,
            blockTag: d,
            gatewayUrls: f,
            strict: h,
            universalResolverAddress: p,
          } = t,
          m = p;
        if (!m) {
          if (!e.chain)
            throw new Error(
              "client chain not configured. universalResolverAddress is required."
            );
          m = (0, o.M)({
            blockNumber: l,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        const b = `${n.toLowerCase().substring(2)}.addr.reverse`;
        try {
          const t = {
              address: m,
              abi: r.oX,
              functionName: "reverse",
              args: [(0, s.nj)((0, i.F)(b))],
              blockNumber: l,
              blockTag: d,
            },
            o = (0, c.T)(e, u.J, "readContract"),
            [a, h] = f ? await o({ ...t, args: [...t.args, f] }) : await o(t);
          return n.toLowerCase() !== h.toLowerCase() ? null : a;
        } catch (g) {
          if (h) throw g;
          if ((0, a.J)(g, "reverse")) return null;
          throw g;
        }
      }
    },
    75974: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => u, _: () => c });
      var r = n(11607),
        o = n(55903),
        s = n(82089),
        a = n(67284),
        i = n(99939);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        var n, c, u, l;
        const {
            block: d,
            chain: f = e.chain,
            request: h,
            type: p = "eip1559",
          } = t || {},
          m = await (async (t, n, r) =>
            "function" ===
            typeof (null === f ||
            void 0 === f ||
            null === (t = f.fees) ||
            void 0 === t
              ? void 0
              : t.baseFeeMultiplier)
              ? f.fees.baseFeeMultiplier({ block: d, client: e, request: h })
              : null !==
                  (n =
                    null === f ||
                    void 0 === f ||
                    null === (r = f.fees) ||
                    void 0 === r
                      ? void 0
                      : r.baseFeeMultiplier) && void 0 !== n
              ? n
              : 1.2)();
        if (m < 1) throw new r.sM();
        const b =
            10 **
            (null !==
              (n =
                null === (c = m.toString().split(".")[1]) || void 0 === c
                  ? void 0
                  : c.length) && void 0 !== n
              ? n
              : 0),
          g = (e) => (e * BigInt(Math.ceil(m * b))) / BigInt(b),
          y = d || (await (0, o.T)(e, a.g, "getBlock")({}));
        if (
          "function" ===
          typeof (null === f ||
          void 0 === f ||
          null === (u = f.fees) ||
          void 0 === u
            ? void 0
            : u.estimateFeesPerGas)
        ) {
          const t = await f.fees.estimateFeesPerGas({
            block: d,
            client: e,
            multiply: g,
            request: h,
            type: p,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === p) {
          var v;
          if ("bigint" !== typeof y.baseFeePerGas) throw new r.pw();
          const t =
              "bigint" ===
              typeof (null === h || void 0 === h
                ? void 0
                : h.maxPriorityFeePerGas)
                ? h.maxPriorityFeePerGas
                : await (0, s.N)(e, { block: y, chain: f, request: h }),
            n = g(y.baseFeePerGas);
          return {
            maxFeePerGas:
              null !==
                (v = null === h || void 0 === h ? void 0 : h.maxFeePerGas) &&
              void 0 !== v
                ? v
                : n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice:
            null !== (l = null === h || void 0 === h ? void 0 : h.gasPrice) &&
            void 0 !== l
              ? l
              : g(await (0, o.T)(e, i.L, "getGasPrice")({})),
        };
      }
    },
    76577: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => x });
      var r = n(36140),
        o = n(34795),
        s = n(82636);
      class a extends s.C {
        constructor(e) {
          let { data: t } = e;
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(t)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class i extends s.C {
        constructor(e) {
          let { reason: t } = e;
          super(`ENS NFT avatar URI is invalid. ${t}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class c extends s.C {
        constructor(e) {
          let { uri: t } = e;
          super(
            `Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class u extends s.C {
        constructor(e) {
          let { namespace: t } = e;
          super(
            `ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      const l = (0, r.A)(
          /(https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(\/)?(ipfs\/|ipns\/)?([\w\-.]+)(\/.*)?/,
          { protocol: 1, root: 2, subpath: 3, target: 4, subtarget: 5 }
        ),
        d = (0, r.A)(
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/([\w\-.]+))?(\/.*)?$/,
          { target: 3, subtarget: 4 }
        ),
        f = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        h = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      function p(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function m(e) {
        let { uri: t, gatewayUrls: n } = e;
        const r = f.test(t);
        if (r) return { uri: t, isOnChain: !0, isEncoded: r };
        const o = p(
            null === n || void 0 === n ? void 0 : n.ipfs,
            "https://ipfs.io"
          ),
          s = p(
            null === n || void 0 === n ? void 0 : n.arweave,
            "https://arweave.net"
          ),
          a = t.match(l),
          {
            protocol: i,
            subpath: u,
            target: m,
            subtarget: b = "",
          } = (null === a || void 0 === a ? void 0 : a.groups) || {},
          g = "ipns:/" === i || "ipns/" === u,
          y = "ipfs:/" === i || "ipfs/" === u || d.test(t);
        if (t.startsWith("http") && !g && !y) {
          let e = t;
          return (
            null !== n &&
              void 0 !== n &&
              n.arweave &&
              (e = t.replace(
                /https:\/\/arweave.net/g,
                null === n || void 0 === n ? void 0 : n.arweave
              )),
            { uri: e, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((g || y) && m)
          return {
            uri: `${o}/${g ? "ipns" : "ipfs"}/${m}${b}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === i && m)
          return { uri: `${s}/${m}${b || ""}`, isOnChain: !1, isEncoded: !1 };
        let v = t.replace(h, "");
        if (
          (v.startsWith("<svg") && (v = `data:image/svg+xml;base64,${btoa(v)}`),
          v.startsWith("data:") || v.startsWith("{"))
        )
          return { uri: v, isOnChain: !0, isEncoded: !1 };
        throw new c({ uri: t });
      }
      function b(e) {
        if (
          "object" !== typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new a({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function g(e) {
        let { gatewayUrls: t, uri: n } = e;
        const { uri: r, isOnChain: o } = m({ uri: n, gatewayUrls: t });
        if (o) return r;
        const s = await (async function (e) {
          try {
            const t = await fetch(e, { method: "HEAD" });
            if (200 === t.status) {
              const e = t.headers.get("content-type");
              return null === e || void 0 === e
                ? void 0
                : e.startsWith("image/");
            }
            return !1;
          } catch (t) {
            return (
              ("object" !== typeof t || "undefined" === typeof t.response) &&
              !!globalThis.hasOwnProperty("Image") &&
              new Promise((t) => {
                const n = new Image();
                (n.onload = () => {
                  t(!0);
                }),
                  (n.onerror = () => {
                    t(!1);
                  }),
                  (n.src = e);
              })
            );
          }
        })(r);
        if (s) return r;
        throw new c({ uri: n });
      }
      async function y(e, t) {
        let { gatewayUrls: n, record: r } = t;
        return /eip155:/i.test(r)
          ? (async function (e, t) {
              let { gatewayUrls: n, record: r } = t;
              const s = (function (e) {
                  let t = e;
                  t.startsWith("did:nft:") &&
                    (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                  const [n, r, o] = t.split("/"),
                    [s, a] = n.split(":"),
                    [c, u] = r.split(":");
                  if (!s || "eip155" !== s.toLowerCase())
                    throw new i({ reason: "Only EIP-155 supported" });
                  if (!a) throw new i({ reason: "Chain ID not found" });
                  if (!u) throw new i({ reason: "Contract address not found" });
                  if (!o) throw new i({ reason: "Token ID not found" });
                  if (!c) throw new i({ reason: "ERC namespace not found" });
                  return {
                    chainID: Number.parseInt(a),
                    namespace: c.toLowerCase(),
                    contractAddress: u,
                    tokenID: o,
                  };
                })(r),
                a = await (async function (e, t) {
                  let { nft: n } = t;
                  if ("erc721" === n.namespace)
                    return (0, o.J)(e, {
                      address: n.contractAddress,
                      abi: [
                        {
                          name: "tokenURI",
                          type: "function",
                          stateMutability: "view",
                          inputs: [{ name: "tokenId", type: "uint256" }],
                          outputs: [{ name: "", type: "string" }],
                        },
                      ],
                      functionName: "tokenURI",
                      args: [BigInt(n.tokenID)],
                    });
                  if ("erc1155" === n.namespace)
                    return (0, o.J)(e, {
                      address: n.contractAddress,
                      abi: [
                        {
                          name: "uri",
                          type: "function",
                          stateMutability: "view",
                          inputs: [{ name: "_id", type: "uint256" }],
                          outputs: [{ name: "", type: "string" }],
                        },
                      ],
                      functionName: "uri",
                      args: [BigInt(n.tokenID)],
                    });
                  throw new u({ namespace: n.namespace });
                })(e, { nft: s }),
                {
                  uri: l,
                  isOnChain: d,
                  isEncoded: f,
                } = m({ uri: a, gatewayUrls: n });
              if (
                d &&
                (l.includes("data:application/json;base64,") ||
                  l.startsWith("{"))
              ) {
                const e = f
                  ? atob(l.replace("data:application/json;base64,", ""))
                  : l;
                return g({ uri: b(JSON.parse(e)), gatewayUrls: n });
              }
              let h = s.tokenID;
              "erc1155" === s.namespace &&
                (h = h.replace("0x", "").padStart(64, "0"));
              return (async function (e) {
                let { gatewayUrls: t, uri: n } = e;
                try {
                  const e = await fetch(n).then((e) => e.json());
                  return await g({ gatewayUrls: t, uri: b(e) });
                } catch {
                  throw new c({ uri: n });
                }
              })({ gatewayUrls: n, uri: l.replace(/(?:0x)?{id}/, h) });
            })(e, { gatewayUrls: n, record: r })
          : g({ uri: r, gatewayUrls: n });
      }
      var v = n(55903),
        w = n(49897);
      async function x(e, t) {
        let {
          blockNumber: n,
          blockTag: r,
          assetGatewayUrls: o,
          name: s,
          gatewayUrls: a,
          strict: i,
          universalResolverAddress: c,
        } = t;
        const u = await (0, v.T)(
          e,
          w.m,
          "getEnsText"
        )({
          blockNumber: n,
          blockTag: r,
          key: "avatar",
          name: s,
          universalResolverAddress: c,
          gatewayUrls: a,
          strict: i,
        });
        if (!u) return null;
        try {
          return await y(e, { record: u, gatewayUrls: o });
        } catch {
          return null;
        }
      }
    },
    77885: (e, t, n) => {
      "use strict";
      n.d(t, { lB: () => a });
      const r = new Map(),
        o = new Map();
      let s = 0;
      function a(e, t, n) {
        const a = ++s,
          i = () => r.get(e) || [],
          c = () => {
            const t = i();
            if (!t.some((e) => e.id === a)) return;
            const n = o.get(e);
            1 === t.length && n && n(),
              (() => {
                const t = i();
                r.set(
                  e,
                  t.filter((e) => e.id !== a)
                );
              })();
          },
          u = i();
        if ((r.set(e, [...u, { id: a, fns: t }]), u && u.length > 0)) return c;
        const l = {};
        for (const r in t)
          l[r] = function () {
            const e = i();
            if (0 !== e.length) {
              for (
                var t = arguments.length, n = new Array(t), o = 0;
                o < t;
                o++
              )
                n[o] = arguments[o];
              for (const t of e) {
                var s, a;
                null === (s = (a = t.fns)[r]) ||
                  void 0 === s ||
                  s.call(a, ...n);
              }
            }
          };
        const d = n(l);
        return "function" === typeof d && o.set(e, d), c;
      }
    },
    79108: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => b });
      var r = n(60713),
        o = n(94656),
        s = n(37702);
      function a(e, t, n) {
        return (e & t) ^ (e & n) ^ (t & n);
      }
      class i extends s.Vw {
        constructor(e, t, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, s.O8)(this.buffer));
        }
        update(e) {
          (0, o.CC)(this);
          const { view: t, buffer: n, blockLen: r } = this,
            a = (e = (0, s.ZJ)(e)).length;
          for (let o = 0; o < a; ) {
            const i = Math.min(r - this.pos, a - o);
            if (i !== r)
              n.set(e.subarray(o, o + i), this.pos),
                (this.pos += i),
                (o += i),
                this.pos === r && (this.process(t, 0), (this.pos = 0));
            else {
              const t = (0, s.O8)(e);
              for (; r <= a - o; o += r) this.process(t, o);
            }
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, o.CC)(this), (0, o.Ht)(e, this), (this.finished = !0);
          const { buffer: t, view: n, blockLen: r, isLE: a } = this;
          let { pos: i } = this;
          (t[i++] = 128),
            this.buffer.subarray(i).fill(0),
            this.padOffset > r - i && (this.process(n, 0), (i = 0));
          for (let o = i; o < r; o++) t[o] = 0;
          !(function (e, t, n, r) {
            if ("function" === typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            const o = BigInt(32),
              s = BigInt(4294967295),
              a = Number((n >> o) & s),
              i = Number(n & s),
              c = r ? 4 : 0,
              u = r ? 0 : 4;
            e.setUint32(t + c, a, r), e.setUint32(t + u, i, r);
          })(n, r - 8, BigInt(8 * this.length), a),
            this.process(n, 0);
          const c = (0, s.O8)(e),
            u = this.outputLen;
          if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const l = u / 4,
            d = this.get();
          if (l > d.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let o = 0; o < l; o++) c.setUint32(4 * o, d[o], a);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          const {
            blockLen: t,
            buffer: n,
            length: r,
            finished: o,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.length = r),
            (e.pos = a),
            (e.finished = o),
            (e.destroyed = s),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      const c = new Uint32Array([
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
        u = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        l = new Uint32Array(64);
      class d extends i {
        constructor() {
          super(
            64,
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
            8,
            !1
          ),
            (this.A = 0 | u[0]),
            (this.B = 0 | u[1]),
            (this.C = 0 | u[2]),
            (this.D = 0 | u[3]),
            (this.E = 0 | u[4]),
            (this.F = 0 | u[5]),
            (this.G = 0 | u[6]),
            (this.H = 0 | u[7]);
        }
        get() {
          const { A: e, B: t, C: n, D: r, E: o, F: s, G: a, H: i } = this;
          return [e, t, n, r, o, s, a, i];
        }
        set(e, t, n, r, o, s, a, i) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | o),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | i);
        }
        process(e, t) {
          for (let s = 0; s < 16; s++, t += 4) l[s] = e.getUint32(t, !1);
          for (let a = 16; a < 64; a++) {
            const e = l[a - 15],
              t = l[a - 2],
              n = (0, s.Ow)(e, 7) ^ (0, s.Ow)(e, 18) ^ (e >>> 3),
              r = (0, s.Ow)(t, 17) ^ (0, s.Ow)(t, 19) ^ (t >>> 10);
            l[a] = (r + l[a - 7] + n + l[a - 16]) | 0;
          }
          let { A: n, B: r, C: o, D: i, E: u, F: d, G: f, H: h } = this;
          for (let m = 0; m < 64; m++) {
            const e =
                (h +
                  ((0, s.Ow)(u, 6) ^ (0, s.Ow)(u, 11) ^ (0, s.Ow)(u, 25)) +
                  (((p = u) & d) ^ (~p & f)) +
                  c[m] +
                  l[m]) |
                0,
              t =
                (((0, s.Ow)(n, 2) ^ (0, s.Ow)(n, 13) ^ (0, s.Ow)(n, 22)) +
                  a(n, r, o)) |
                0;
            (h = f),
              (f = d),
              (d = u),
              (u = (i + e) | 0),
              (i = o),
              (o = r),
              (r = n),
              (n = (e + t) | 0);
          }
          var p;
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (o = (o + this.C) | 0),
            (i = (i + this.D) | 0),
            (u = (u + this.E) | 0),
            (d = (d + this.F) | 0),
            (f = (f + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(n, r, o, i, u, d, f, h);
        }
        roundClean() {
          l.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const f = (0, s.ld)(() => new d());
      var h = n(93935),
        p = n(66119);
      function m(e) {
        var t;
        const { commitment: n, version: o = 1 } = e,
          s =
            null !== (t = e.to) && void 0 !== t
              ? t
              : "string" === typeof n
              ? "hex"
              : "bytes",
          a = (function (e, t) {
            const n = t || "hex",
              o = f((0, h.q)(e, { strict: !1 }) ? (0, p.ZJ)(e) : e);
            return "bytes" === n ? o : (0, r.nj)(o);
          })(n, "bytes");
        return a.set([o], 0), "bytes" === s ? a : (0, r.My)(a);
      }
      function b(e) {
        var t;
        const { commitments: n, version: r } = e,
          o =
            null !== (t = e.to) && void 0 !== t
              ? t
              : "string" === typeof n[0]
              ? "hex"
              : "bytes",
          s = [];
        for (const a of n) s.push(m({ commitment: a, to: o, version: r }));
        return s;
      }
    },
    79971: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => c });
      var r = n(70248),
        o = n(66119),
        s = n(60713),
        a = n(68113),
        i = n(53635);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, s.My)(t);
        const n = e.split(".");
        for (let s = n.length - 1; s >= 0; s -= 1) {
          const e = (0, i.q)(n[s]),
            c = e ? (0, o.ZJ)(e) : (0, a.S)((0, o.Af)(n[s]), "bytes");
          t = (0, a.S)((0, r.xW)([t, c]), "bytes");
        }
        return (0, s.My)(t);
      }
    },
    82089: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => u, b: () => c });
      var r = n(11607),
        o = n(33910),
        s = n(55903),
        a = n(67284),
        i = n(99939);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        const { block: n, chain: c = e.chain, request: u } = t || {};
        try {
          var l, d, f;
          const t =
            null !==
              (l =
                null === c ||
                void 0 === c ||
                null === (d = c.fees) ||
                void 0 === d
                  ? void 0
                  : d.maxPriorityFeePerGas) && void 0 !== l
              ? l
              : null === c ||
                void 0 === c ||
                null === (f = c.fees) ||
                void 0 === f
              ? void 0
              : f.defaultPriorityFee;
          if ("function" === typeof t) {
            const r = n || (await (0, s.T)(e, a.g, "getBlock")({})),
              o = await t({ block: r, client: e, request: u });
            if (null === o) throw new Error();
            return o;
          }
          if ("undefined" !== typeof t) return t;
          const r = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, o.uU)(r);
        } catch {
          const [t, o] = await Promise.all([
            n ? Promise.resolve(n) : (0, s.T)(e, a.g, "getBlock")({}),
            (0, s.T)(e, i.L, "getGasPrice")({}),
          ]);
          if ("bigint" !== typeof t.baseFeePerGas) throw new r.pw();
          const c = o - t.baseFeePerGas;
          return c < 0n ? 0n : c;
        }
      }
    },
    82636: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => s });
      const r = "2.27.3";
      let o = {
        getDocsUrl: (e) => {
          let { docsBaseUrl: t, docsPath: n = "", docsSlug: r } = e;
          return n
            ? `${null !== t && void 0 !== t ? t : "https://viem.sh"}${n}${
                r ? `#${r}` : ""
              }`
            : void 0;
        },
        version: `viem@${r}`,
      };
      class s extends Error {
        constructor(e) {
          var t, n, a;
          let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const c =
            i.cause instanceof s
              ? i.cause.details
              : null !== (u = i.cause) && void 0 !== u && u.message
              ? i.cause.message
              : i.details;
          var u;
          const l = (i.cause instanceof s && i.cause.docsPath) || i.docsPath,
            d =
              null === (t = (n = o).getDocsUrl) || void 0 === t
                ? void 0
                : t.call(n, { ...i, docsPath: l });
          super(
            [
              e || "An error occurred.",
              "",
              ...(i.metaMessages ? [...i.metaMessages, ""] : []),
              ...(d ? [`Docs: ${d}`] : []),
              ...(c ? [`Details: ${c}`] : []),
              ...(o.version ? [`Version: ${o.version}`] : []),
            ].join("\n"),
            i.cause ? { cause: i.cause } : void 0
          ),
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
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = c),
            (this.docsPath = l),
            (this.metaMessages = i.metaMessages),
            (this.name = null !== (a = i.name) && void 0 !== a ? a : this.name),
            (this.shortMessage = e),
            (this.version = r);
        }
        walk(e) {
          return a(this, e);
        }
      }
      function a(e, t) {
        return null !== t && void 0 !== t && t(e)
          ? e
          : e && "object" === typeof e && "cause" in e && void 0 !== e.cause
          ? a(e.cause, t)
          : t
          ? null
          : e;
      }
    },
    83375: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => i });
      var r = n(37193),
        o = n(70248),
        s = n(9292);
      const a = "/docs/contract/encodeDeployData";
      function i(e) {
        const { abi: t, args: n, bytecode: i } = e;
        if (!n || 0 === n.length) return i;
        const c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new r.YW({ docsPath: a });
        if (!("inputs" in c)) throw new r.YF({ docsPath: a });
        if (!c.inputs || 0 === c.inputs.length) throw new r.YF({ docsPath: a });
        const u = (0, s.h)(c.inputs, n);
        return (0, o.aP)([i, u]);
      }
    },
    84356: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            const r = "bigint" === typeof n ? n.toString() : n;
            return "function" === typeof t ? t(e, r) : r;
          },
          n
        );
    },
    84425: (e, t, n) => {
      "use strict";
      n.d(t, { WB: () => u, uL: () => c });
      var r = n(33910),
        o = n(14459),
        s = n(46735),
        a = n(57825);
      const i = { "0x0": "reverted", "0x1": "success" };
      function c(e) {
        const t = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, s.e)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, r.ME)(e.transactionIndex)
            : null,
          status: e.status ? i[e.status] : null,
          type: e.type ? a.b4[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
          t
        );
      }
      const u = (0, o.q)("transactionReceipt", c);
    },
    84677: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => s });
      var r = n(35607),
        o = n(25966);
      function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "wei";
        return (0, o.J)(e, r.eL[t]);
      }
    },
    84846: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => o });
      var r = n(92490);
      function o(e) {
        var t;
        let { blockNumber: n, chain: o, contract: s } = e;
        const a =
          null === o ||
          void 0 === o ||
          null === (t = o.contracts) ||
          void 0 === t
            ? void 0
            : t[s];
        if (!a) throw new r.rj({ chain: o, contract: { name: s } });
        if (n && a.blockCreated && a.blockCreated > n)
          throw new r.rj({
            blockNumber: n,
            chain: o,
            contract: { name: s, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    85517: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => y });
      var r = n(37193),
        o = n(1960),
        s = n(60371),
        a = n(88925),
        i = n(46744),
        c = n(49440),
        u = n(74118),
        l = n(33910),
        d = n(60713);
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "undefined" !== typeof t.size && (0, l.Sl)(e, { size: t.size });
        const n = (0, d.My)(e, t);
        return (0, l.uU)(n, t);
      }
      function h(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e;
        if (
          ("undefined" !== typeof t.size &&
            ((0, l.Sl)(n, { size: t.size }), (n = (0, c.B)(n))),
          n.length > 1 || n[0] > 1)
        )
          throw new u.xO(n);
        return Boolean(n[0]);
      }
      function p(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        "undefined" !== typeof t.size && (0, l.Sl)(e, { size: t.size });
        const n = (0, d.My)(e, t);
        return (0, l.ME)(n, t);
      }
      function m(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e;
        return (
          "undefined" !== typeof t.size &&
            ((0, l.Sl)(n, { size: t.size }),
            (n = (0, c.B)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
      var b = n(66119),
        g = n(9292);
      function y(e, t) {
        const n = "string" === typeof t ? (0, b.aT)(t) : t,
          o = (0, s.l)(n);
        if (0 === (0, a.E)(n) && e.length > 0) throw new r.O();
        if ((0, a.E)(t) && (0, a.E)(t) < 32)
          throw new r.Iy({
            data: "string" === typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, a.E)(t),
          });
        let i = 0;
        const c = [];
        for (let r = 0; r < e.length; ++r) {
          const t = e[r];
          o.setPosition(i);
          const [n, s] = v(o, t, { staticPosition: 0 });
          (i += s), c.push(n);
        }
        return c;
      }
      function v(e, t, n) {
        let { staticPosition: s } = n;
        const a = (0, g.k)(t.type);
        if (a) {
          const [n, r] = a;
          return (function (e, t, n) {
            let { length: r, staticPosition: o } = n;
            if (!r) {
              const n = o + p(e.readBytes(x)),
                r = n + w;
              e.setPosition(n);
              const s = p(e.readBytes(w)),
                a = P(t);
              let i = 0;
              const c = [];
              for (let o = 0; o < s; ++o) {
                e.setPosition(r + (a ? 32 * o : i));
                const [n, s] = v(e, t, { staticPosition: r });
                (i += s), c.push(n);
              }
              return e.setPosition(o + 32), [c, 32];
            }
            if (P(t)) {
              const n = o + p(e.readBytes(x)),
                s = [];
              for (let o = 0; o < r; ++o) {
                e.setPosition(n + 32 * o);
                const [r] = v(e, t, { staticPosition: n });
                s.push(r);
              }
              return e.setPosition(o + 32), [s, 32];
            }
            let s = 0;
            const a = [];
            for (let i = 0; i < r; ++i) {
              const [n, r] = v(e, t, { staticPosition: o + s });
              (s += r), a.push(n);
            }
            return [a, s];
          })(e, { ...t, type: r }, { length: n, staticPosition: s });
        }
        if ("tuple" === t.type)
          return (function (e, t, n) {
            let { staticPosition: r } = n;
            const o =
                0 === t.components.length ||
                t.components.some((e) => {
                  let { name: t } = e;
                  return !t;
                }),
              s = o ? [] : {};
            let a = 0;
            if (P(t)) {
              const n = r + p(e.readBytes(x));
              for (let r = 0; r < t.components.length; ++r) {
                const i = t.components[r];
                e.setPosition(n + a);
                const [c, u] = v(e, i, { staticPosition: n });
                (a += u),
                  (s[o ? r : null === i || void 0 === i ? void 0 : i.name] = c);
              }
              return e.setPosition(r + 32), [s, 32];
            }
            for (let i = 0; i < t.components.length; ++i) {
              const n = t.components[i],
                [c, u] = v(e, n, { staticPosition: r });
              (s[o ? i : null === n || void 0 === n ? void 0 : n.name] = c),
                (a += u);
            }
            return [s, a];
          })(e, t, { staticPosition: s });
        if ("address" === t.type)
          return (function (e) {
            const t = e.readBytes(32);
            return [(0, o.o)((0, d.My)((0, i.A1)(t, -20))), 32];
          })(e);
        if ("bool" === t.type)
          return (function (e) {
            return [h(e.readBytes(32), { size: 32 }), 32];
          })(e);
        if (t.type.startsWith("bytes"))
          return (function (e, t, n) {
            let { staticPosition: r } = n;
            const [o, s] = t.type.split("bytes");
            if (!s) {
              const t = p(e.readBytes(32));
              e.setPosition(r + t);
              const n = p(e.readBytes(32));
              if (0 === n) return e.setPosition(r + 32), ["0x", 32];
              const o = e.readBytes(n);
              return e.setPosition(r + 32), [(0, d.My)(o), 32];
            }
            const a = (0, d.My)(e.readBytes(Number.parseInt(s), 32));
            return [a, 32];
          })(e, t, { staticPosition: s });
        if (t.type.startsWith("uint") || t.type.startsWith("int"))
          return (function (e, t) {
            const n = t.type.startsWith("int"),
              r = Number.parseInt(t.type.split("int")[1] || "256"),
              o = e.readBytes(32);
            return [r > 48 ? f(o, { signed: n }) : p(o, { signed: n }), 32];
          })(e, t);
        if ("string" === t.type)
          return (function (e, t) {
            let { staticPosition: n } = t;
            const r = p(e.readBytes(32)),
              o = n + r;
            e.setPosition(o);
            const s = p(e.readBytes(32));
            if (0 === s) return e.setPosition(n + 32), ["", 32];
            const a = e.readBytes(s, 32),
              i = m((0, c.B)(a));
            return e.setPosition(n + 32), [i, 32];
          })(e, { staticPosition: s });
        throw new r.j(t.type, {
          docsPath: "/docs/contract/decodeAbiParameters",
        });
      }
      const w = 32,
        x = 32;
      function P(e) {
        var t;
        const { type: n } = e;
        if ("string" === n) return !0;
        if ("bytes" === n) return !0;
        if (n.endsWith("[]")) return !0;
        if ("tuple" === n)
          return null === (t = e.components) || void 0 === t
            ? void 0
            : t.some(P);
        const r = (0, g.k)(e.type);
        return !(!r || !P({ ...e, type: r[1] }));
      }
    },
    86182: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => P });
      var r = n(22196),
        o = n(38302),
        s = n(28406);
      const a = "0x82ad56cb";
      var i = n(38718),
        c = n(82636),
        u = n(92490),
        l = n(17999),
        d = n(52773),
        f = n(83375),
        h = n(19538),
        p = n(84846),
        m = n(60713),
        b = n(66091),
        g = n(18220),
        y = n(63976),
        v = n(72746),
        w = n(66296),
        x = n(10201);
      async function P(e, t) {
        var P;
        const {
            account: E = e.account,
            batch: k = Boolean(
              null === (P = e.batch) || void 0 === P ? void 0 : P.multicall
            ),
            blockNumber: B,
            blockTag: I = "latest",
            accessList: T,
            blobs: C,
            code: $,
            data: N,
            factory: A,
            factoryData: F,
            gas: M,
            gasPrice: O,
            maxFeePerBlobGas: S,
            maxFeePerGas: j,
            maxPriorityFeePerGas: z,
            nonce: R,
            to: L,
            value: G,
            stateOverride: U,
            ...D
          } = t,
          q = E ? (0, o.J)(E) : void 0;
        if ($ && (A || F))
          throw new c.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if ($ && L)
          throw new c.C("Cannot provide both `code` & `to` as parameters.");
        const _ = $ && N,
          H = A && F && L && N,
          V = _ || H,
          W = _
            ? (function (e) {
                const { code: t, data: n } = e;
                return (0, f.m)({
                  abi: (0, r.U)(["constructor(bytes, bytes)"]),
                  bytecode: i.LX,
                  args: [t, n],
                });
              })({ code: $, data: N })
            : H
            ? (function (e) {
                const { data: t, factory: n, factoryData: o, to: s } = e;
                return (0, f.m)({
                  abi: (0, r.U)([
                    "constructor(address, bytes, address, bytes)",
                  ]),
                  bytecode: i.WN,
                  args: [s, t, n, o],
                });
              })({ data: N, factory: A, factoryData: F, to: L })
            : N;
        try {
          var K;
          (0, x.c)(t);
          const n = (B ? (0, m.cK)(B) : void 0) || I,
            r = (0, w.yH)(U),
            o =
              null === (K = e.chain) ||
              void 0 === K ||
              null === (K = K.formatters) ||
              void 0 === K ||
              null === (K = K.transactionRequest) ||
              void 0 === K
                ? void 0
                : K.format,
            i = (o || y.Bv)({
              ...(0, g.o)(D, { format: o }),
              from: null === q || void 0 === q ? void 0 : q.address,
              accessList: T,
              blobs: C,
              data: W,
              gas: M,
              gasPrice: O,
              maxFeePerBlobGas: S,
              maxFeePerGas: j,
              maxPriorityFeePerGas: z,
              nonce: R,
              to: V ? void 0 : L,
              value: G,
            });
          if (
            k &&
            (function (e) {
              let { request: t } = e;
              const { data: n, to: r, ...o } = t;
              return (
                !!n &&
                !n.startsWith(a) &&
                !!r &&
                !(
                  Object.values(o).filter((e) => "undefined" !== typeof e)
                    .length > 0
                )
              );
            })({ request: i }) &&
            !r
          )
            try {
              return await (async function (e, t) {
                var n;
                const { batchSize: r = 1024, wait: o = 0 } =
                    "object" ===
                    typeof (null === (n = e.batch) || void 0 === n
                      ? void 0
                      : n.multicall)
                      ? e.batch.multicall
                      : {},
                  {
                    blockNumber: a,
                    blockTag: i = "latest",
                    data: c,
                    multicallAddress: f,
                    to: b,
                  } = t;
                let g = f;
                if (!g) {
                  if (!e.chain) throw new u.YE();
                  g = (0, p.M)({
                    blockNumber: a,
                    chain: e.chain,
                    contract: "multicall3",
                  });
                }
                const y = a ? (0, m.cK)(a) : void 0,
                  w = y || i,
                  { schedule: x } = (0, v.u)({
                    id: `${e.uid}.${w}`,
                    wait: o,
                    shouldSplitBatch(e) {
                      const t = e.reduce((e, t) => {
                        let { data: n } = t;
                        return e + (n.length - 2);
                      }, 0);
                      return t > 2 * r;
                    },
                    fn: async (t) => {
                      const n = t.map((e) => ({
                          allowFailure: !0,
                          callData: e.data,
                          target: e.to,
                        })),
                        r = (0, h.p)({
                          abi: s.v2,
                          args: [n],
                          functionName: "aggregate3",
                        }),
                        o = await e.request({
                          method: "eth_call",
                          params: [{ data: r, to: g }, w],
                        });
                      return (0, d.e)({
                        abi: s.v2,
                        args: [n],
                        functionName: "aggregate3",
                        data: o || "0x",
                      });
                    },
                  }),
                  [{ returnData: P, success: E }] = await x({ data: c, to: b });
                if (!E) throw new l.$S({ data: P });
                return "0x" === P ? { data: void 0 } : { data: P };
              })(e, { ...i, blockNumber: B, blockTag: I });
            } catch (J) {
              if (!(J instanceof u.YE) && !(J instanceof u.rj)) throw J;
            }
          const c = await e.request({
            method: "eth_call",
            params: r ? [i, n, r] : [i, n],
          });
          return "0x" === c ? { data: void 0 } : { data: c };
        } catch (J) {
          const r = (function (e) {
              var t;
              if (!(e instanceof c.C)) return;
              const n = e.walk();
              return "object" ===
                typeof (null === n || void 0 === n ? void 0 : n.data)
                ? null === (t = n.data) || void 0 === t
                  ? void 0
                  : t.data
                : n.data;
            })(J),
            { offchainLookup: o, offchainLookupSignature: s } =
              await Promise.all([
                n.e(9644),
                n.e(5409),
                n.e(7120),
                n.e(1705),
              ]).then(n.bind(n, 87387));
          if (
            !1 !== e.ccipRead &&
            (null === r || void 0 === r ? void 0 : r.slice(0, 10)) === s &&
            L
          )
            return { data: await o(e, { data: r, to: L }) };
          if (
            V &&
            "0x101bb98d" ===
              (null === r || void 0 === r ? void 0 : r.slice(0, 10))
          )
            throw new l.Po({ factory: A });
          throw (0, b.d)(J, { ...t, account: q, chain: e.chain });
        }
      }
    },
    87387: (e, t, n) => {
      "use strict";
      n.d(t, { offchainLookup: () => v, offchainLookupSignature: () => g });
      var r = n(86182),
        o = n(84356),
        s = n(82636),
        a = n(3446);
      class i extends s.C {
        constructor(e) {
          var t;
          let {
            callbackSelector: n,
            cause: r,
            data: o,
            extraData: s,
            sender: i,
            urls: c,
          } = e;
          super(
            r.shortMessage ||
              "An error occurred while fetching for an offchain result.",
            {
              cause: r,
              metaMessages: [
                ...(r.metaMessages || []),
                null !== (t = r.metaMessages) && void 0 !== t && t.length
                  ? ""
                  : [],
                "Offchain Gateway Call:",
                c && [
                  "  Gateway URL(s):",
                  ...c.map((e) => `    ${(0, a.I)(e)}`),
                ],
                `  Sender: ${i}`,
                `  Data: ${o}`,
                `  Callback selector: ${n}`,
                `  Extra data: ${s}`,
              ].flat(),
              name: "OffchainLookupError",
            }
          );
        }
      }
      class c extends s.C {
        constructor(e) {
          let { result: t, url: n } = e;
          super(
            "Offchain gateway response is malformed. Response data must be a hex value.",
            {
              metaMessages: [
                `Gateway URL: ${(0, a.I)(n)}`,
                `Response: ${(0, o.A)(t)}`,
              ],
              name: "OffchainLookupResponseMalformedError",
            }
          );
        }
      }
      class u extends s.C {
        constructor(e) {
          let { sender: t, to: n } = e;
          super(
            "Reverted sender address does not match target contract address (`to`).",
            {
              metaMessages: [
                `Contract address: ${n}`,
                `OffchainLookup sender address: ${t}`,
              ],
              name: "OffchainLookupSenderMismatchError",
            }
          );
        }
      }
      var l = n(94906),
        d = n(53749),
        f = n(9292),
        h = n(6980),
        p = n(70248),
        m = n(93935),
        b = n(38057);
      const g = "0x556f1830",
        y = {
          name: "OffchainLookup",
          type: "error",
          inputs: [
            { name: "sender", type: "address" },
            { name: "urls", type: "string[]" },
            { name: "callData", type: "bytes" },
            { name: "callbackFunction", type: "bytes4" },
            { name: "extraData", type: "bytes" },
          ],
        };
      async function v(e, t) {
        let { blockNumber: n, blockTag: o, data: s, to: a } = t;
        const { args: c } = (0, d.W)({ data: s, abi: [y] }),
          [l, m, g, v, x] = c,
          { ccipRead: P } = e,
          E =
            P &&
            "function" ===
              typeof (null === P || void 0 === P ? void 0 : P.request)
              ? P.request
              : w;
        try {
          if (!(0, h.h)(a, l)) throw new u({ sender: l, to: a });
          const t = m.includes(b.J)
              ? await (0, b.X)({ data: g, ccipRequest: E })
              : await E({ data: g, sender: l, urls: m }),
            { data: s } = await (0, r.T)(e, {
              blockNumber: n,
              blockTag: o,
              data: (0, p.xW)([
                v,
                (0, f.h)([{ type: "bytes" }, { type: "bytes" }], [t, x]),
              ]),
              to: a,
            });
          return s;
        } catch (k) {
          throw new i({
            callbackSelector: v,
            cause: k,
            data: s,
            extraData: x,
            sender: l,
            urls: m,
          });
        }
      }
      async function w(e) {
        let { data: t, sender: n, urls: r } = e,
          s = new Error("An unknown error occurred.");
        for (let d = 0; d < r.length; d++) {
          const e = r[d],
            f = e.includes("{data}") ? "GET" : "POST",
            h = "POST" === f ? { data: t, sender: n } : void 0,
            p = "POST" === f ? { "Content-Type": "application/json" } : {};
          try {
            var a;
            const r = await fetch(
              e.replace("{sender}", n.toLowerCase()).replace("{data}", t),
              { body: JSON.stringify(h), headers: p, method: f }
            );
            let u;
            if (
              ((u =
                null !== (a = r.headers.get("Content-Type")) &&
                void 0 !== a &&
                a.startsWith("application/json")
                  ? (await r.json()).data
                  : await r.text()),
              !r.ok)
            ) {
              var i;
              s = new l.Ci({
                body: h,
                details:
                  null !== (i = u) && void 0 !== i && i.error
                    ? (0, o.A)(u.error)
                    : r.statusText,
                headers: r.headers,
                status: r.status,
                url: e,
              });
              continue;
            }
            if (!(0, m.q)(u)) {
              s = new c({ result: u, url: e });
              continue;
            }
            return u;
          } catch (u) {
            s = new l.Ci({ body: h, details: u.message, url: e });
          }
        }
        throw s;
      }
    },
    87538: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => v });
      var r = n(38302),
        o = n(82636),
        s = n(30569),
        a = n(60713),
        i = n(84677),
        c = n(8237),
        u = n(66127);
      class l extends o.C {
        constructor(e, t) {
          var n;
          let {
            account: r,
            docsPath: o,
            chain: s,
            data: a,
            gas: l,
            gasPrice: d,
            maxFeePerGas: f,
            maxPriorityFeePerGas: h,
            nonce: p,
            to: m,
            value: b,
          } = t;
          const g = (0, u.aO)({
            from: null === r || void 0 === r ? void 0 : r.address,
            to: m,
            value:
              "undefined" !== typeof b &&
              `${(0, i.c)(b)} ${
                (null === s ||
                void 0 === s ||
                null === (n = s.nativeCurrency) ||
                void 0 === n
                  ? void 0
                  : n.symbol) || "ETH"
              }`,
            data: a,
            gas: l,
            gasPrice: "undefined" !== typeof d && `${(0, c.Q)(d)} gwei`,
            maxFeePerGas: "undefined" !== typeof f && `${(0, c.Q)(f)} gwei`,
            maxPriorityFeePerGas:
              "undefined" !== typeof h && `${(0, c.Q)(h)} gwei`,
            nonce: p,
          });
          super(e.shortMessage, {
            cause: e,
            docsPath: o,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              g,
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var d = n(11307),
        f = n(93027);
      var h = n(18220),
        p = n(63976),
        m = n(66296),
        b = n(10201),
        g = n(95463),
        y = n(66089);
      async function v(e, t) {
        const { account: n = e.account } = t,
          i = n ? (0, r.J)(n) : void 0;
        try {
          var c;
          const {
              accessList: v,
              authorizationList: w,
              blobs: x,
              blobVersionedHashes: P,
              blockNumber: E,
              blockTag: k,
              data: B,
              gas: I,
              gasPrice: T,
              maxFeePerBlobGas: C,
              maxFeePerGas: $,
              maxPriorityFeePerGas: N,
              nonce: A,
              value: F,
              stateOverride: M,
              ...O
            } = await (0, g.ft)(e, {
              ...t,
              parameters:
                "local" === (null === i || void 0 === i ? void 0 : i.type)
                  ? void 0
                  : ["blobVersionedHashes"],
            }),
            S = (E ? (0, a.cK)(E) : void 0) || k,
            j = (0, m.yH)(M),
            z = await (async () =>
              O.to
                ? O.to
                : w && w.length > 0
                ? await (0, s.g)({ authorization: w[0] }).catch(() => {
                    throw new o.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, b.c)(t);
          const R =
              null === (c = e.chain) ||
              void 0 === c ||
              null === (c = c.formatters) ||
              void 0 === c ||
              null === (c = c.transactionRequest) ||
              void 0 === c
                ? void 0
                : c.format,
            L = (R || p.Bv)({
              ...(0, h.o)(O, { format: R }),
              from: null === i || void 0 === i ? void 0 : i.address,
              accessList: v,
              authorizationList: w,
              blobs: x,
              blobVersionedHashes: P,
              data: B,
              gas: I,
              gasPrice: T,
              maxFeePerBlobGas: C,
              maxFeePerGas: $,
              maxPriorityFeePerGas: N,
              nonce: A,
              to: z,
              value: F,
            });
          function G(t) {
            const { block: n, request: r, rpcStateOverride: o } = t;
            return e.request({
              method: "eth_estimateGas",
              params: o
                ? [r, null !== n && void 0 !== n ? n : "latest", o]
                : n
                ? [r, n]
                : [r],
            });
          }
          let U = BigInt(
            await G({ block: S, request: L, rpcStateOverride: j })
          );
          if (w) {
            const D = await (0, y.r)(e, { address: L.from }),
              q = await Promise.all(
                w.map(async (e) => {
                  const { address: t } = e,
                    n = await G({
                      block: S,
                      request: {
                        authorizationList: void 0,
                        data: B,
                        from: null === i || void 0 === i ? void 0 : i.address,
                        to: t,
                        value: (0, a.cK)(D),
                      },
                      rpcStateOverride: j,
                    }).catch(() => 100000n);
                  return 2n * BigInt(n);
                })
              );
            U += q.reduce((e, t) => e + t, 0n);
          }
          return U;
        } catch (u) {
          throw (function (e, t) {
            let { docsPath: n, ...r } = t;
            const o = (() => {
              const t = (0, f.l)(e, r);
              return t instanceof d.RM ? e : t;
            })();
            return new l(o, { docsPath: n, ...r });
          })(u, { ...t, account: i, chain: e.chain });
        }
      }
    },
    88925: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => o });
      var r = n(93935);
      function o(e) {
        return (0, r.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    89594: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => c });
      var r = n(66119);
      var o = n(60713),
        s = n(68113),
        a = n(53635);
      function i(e) {
        const t = new Uint8Array(32).fill(0);
        return e ? (0, a.q)(e) || (0, s.S)((0, r.Af)(e)) : (0, o.My)(t);
      }
      function c(e) {
        const t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        const n = new Uint8Array((0, r.Af)(t).byteLength + 2);
        let o = 0;
        const s = t.split(".");
        for (let a = 0; a < s.length; a++) {
          let e = (0, r.Af)(s[a]);
          e.byteLength > 255 && (e = (0, r.Af)(`[${i(s[a]).slice(2)}]`)),
            (n[o] = e.length),
            n.set(e, o + 1),
            (o += e.length + 1);
        }
        return n.byteLength !== o + 1 ? n.slice(0, o + 1) : n;
      }
    },
    89620: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => s, R: () => a });
      var r = n(14459),
        o = n(57825);
      function s(e) {
        var t;
        const n = (null !== (t = e.transactions) && void 0 !== t ? t : []).map(
          (e) => ("string" === typeof e ? e : (0, o.uP)(e))
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: n,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
      const a = (0, r.q)("block", s);
    },
    90773: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => o });
      var r = n(55587);
      function o(e) {
        return r.S8(e);
      }
    },
    91384: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      class r extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          const t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            const e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
    },
    92490: (e, t, n) => {
      "use strict";
      n.d(t, {
        EH: () => s,
        YE: () => i,
        jF: () => a,
        qD: () => c,
        rj: () => o,
      });
      var r = n(82636);
      class o extends r.C {
        constructor(e) {
          let { blockNumber: t, chain: n, contract: r } = e;
          super(`Chain "${n.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(t && r.blockCreated && r.blockCreated > t
                ? [
                    `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`,
                  ]
                : [
                    `- The chain does not have the contract "${r.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class s extends r.C {
        constructor(e) {
          let { chain: t, currentChainId: n } = e;
          super(
            `The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} \u2013 ${t.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${n}`,
                `Expected Chain ID: ${t.id} \u2013 ${t.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class a extends r.C {
        constructor() {
          super(
            [
              "No chain was provided to the request.",
              "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            ].join("\n"),
            { name: "ChainNotFoundError" }
          );
        }
      }
      class i extends r.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      class c extends r.C {
        constructor(e) {
          let { chainId: t } = e;
          super(
            "number" === typeof t
              ? `Chain ID "${t}" is invalid.`
              : "Chain ID is invalid.",
            { name: "InvalidChainIdError" }
          );
        }
      }
    },
    93027: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => s });
      var r = n(82636),
        o = n(11307);
      function s(e, t) {
        const n = (e.details || "").toLowerCase(),
          s =
            e instanceof r.C
              ? e.walk(
                  (e) =>
                    (null === e || void 0 === e ? void 0 : e.code) === o.A7.code
                )
              : e;
        return s instanceof r.C
          ? new o.A7({ cause: e, message: s.details })
          : o.A7.nodeMessage.test(n)
          ? new o.A7({ cause: e, message: e.details })
          : o.BG.nodeMessage.test(n)
          ? new o.BG({
              cause: e,
              maxFeePerGas:
                null === t || void 0 === t ? void 0 : t.maxFeePerGas,
            })
          : o.jj.nodeMessage.test(n)
          ? new o.jj({
              cause: e,
              maxFeePerGas:
                null === t || void 0 === t ? void 0 : t.maxFeePerGas,
            })
          : o.K0.nodeMessage.test(n)
          ? new o.K0({
              cause: e,
              nonce: null === t || void 0 === t ? void 0 : t.nonce,
            })
          : o.Oh.nodeMessage.test(n)
          ? new o.Oh({
              cause: e,
              nonce: null === t || void 0 === t ? void 0 : t.nonce,
            })
          : o.vW.nodeMessage.test(n)
          ? new o.vW({
              cause: e,
              nonce: null === t || void 0 === t ? void 0 : t.nonce,
            })
          : o.k5.nodeMessage.test(n)
          ? new o.k5({ cause: e })
          : o.lY.nodeMessage.test(n)
          ? new o.lY({
              cause: e,
              gas: null === t || void 0 === t ? void 0 : t.gas,
            })
          : o.Fo.nodeMessage.test(n)
          ? new o.Fo({
              cause: e,
              gas: null === t || void 0 === t ? void 0 : t.gas,
            })
          : o.uC.nodeMessage.test(n)
          ? new o.uC({ cause: e })
          : o.lN.nodeMessage.test(n)
          ? new o.lN({
              cause: e,
              maxFeePerGas:
                null === t || void 0 === t ? void 0 : t.maxFeePerGas,
              maxPriorityFeePerGas:
                null === t || void 0 === t ? void 0 : t.maxPriorityFeePerGas,
            })
          : new o.RM({ cause: e });
      }
    },
    93935: (e, t, n) => {
      "use strict";
      function r(e) {
        let { strict: t = !0 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          !!e &&
          "string" === typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      n.d(t, { q: () => r });
    },
    94093: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => u });
      var r = n(37193),
        o = n(82636),
        s = n(17999),
        a = n(94906),
        i = n(72040);
      const c = 3;
      function u(e, t) {
        let {
          abi: n,
          address: u,
          args: l,
          docsPath: d,
          functionName: f,
          sender: h,
        } = t;
        const p =
            e instanceof s.$S
              ? e
              : e instanceof o.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: m, data: b, details: g, message: y, shortMessage: v } = p,
          w =
            e instanceof r.O
              ? new s.rR({ functionName: f })
              : [c, i.bq.code].includes(m) && (b || g || y || v)
              ? new s.M({
                  abi: n,
                  data: "object" === typeof b ? b.data : b,
                  functionName: f,
                  message:
                    p instanceof a.J8 ? g : null !== v && void 0 !== v ? v : y,
                })
              : e;
        return new s.bG(w, {
          abi: n,
          args: l,
          contractAddress: u,
          docsPath: d,
          functionName: f,
          sender: h,
        });
      }
    },
    94656: (e, t, n) => {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("positive integer expected, got " + e);
      }
      function o(e) {
        if (
          !(
            (t = e) instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
          )
        )
          throw new Error("Uint8Array expected");
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          r[o - 1] = arguments[o];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + e.length
          );
      }
      function s(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        o(e);
        const n = t.outputLen;
        if (e.length < n)
          throw new Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      n.d(t, { CC: () => s, DO: () => o, Fe: () => r, Ht: () => a });
    },
    94906: (e, t, n) => {
      "use strict";
      n.d(t, { Ci: () => a, J8: () => i, MU: () => c });
      var r = n(84356),
        o = n(82636),
        s = n(3446);
      class a extends o.C {
        constructor(e) {
          let {
            body: t,
            cause: n,
            details: o,
            headers: a,
            status: i,
            url: c,
          } = e;
          super("HTTP request failed.", {
            cause: n,
            details: o,
            metaMessages: [
              i && `Status: ${i}`,
              `URL: ${(0, s.I)(c)}`,
              t && `Request body: ${(0, r.A)(t)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = t),
            (this.headers = a),
            (this.status = i),
            (this.url = c);
        }
      }
      o.C;
      class i extends o.C {
        constructor(e) {
          let { body: t, error: n, url: o } = e;
          super("RPC Request failed.", {
            cause: n,
            details: n.message,
            metaMessages: [
              `URL: ${(0, s.I)(o)}`,
              `Request body: ${(0, r.A)(t)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = n.code),
            (this.data = n.data);
        }
      }
      o.C;
      class c extends o.C {
        constructor(e) {
          let { body: t, url: n } = e;
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, s.I)(n)}`,
              `Request body: ${(0, r.A)(t)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    95463: (e, t, n) => {
      "use strict";
      n.d(t, { MM: () => g, ft: () => v });
      var r = n(38302),
        o = n(75974),
        s = n(87538),
        a = n(67284),
        i = n(62462),
        c = n(11607),
        u = n(57556),
        l = n(31323),
        d = n(79108),
        f = n(31294),
        h = n(55903),
        p = n(10201),
        m = n(55660),
        b = n(35909);
      const g = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        y = new Map();
      async function v(e, t) {
        const {
            account: n = e.account,
            blobs: v,
            chain: w,
            gas: x,
            kzg: P,
            nonce: E,
            nonceManager: k,
            parameters: B = g,
            type: I,
          } = t,
          T = n ? (0, r.J)(n) : n,
          C = {
            ...t,
            ...(T
              ? { from: null === T || void 0 === T ? void 0 : T.address }
              : {}),
          };
        let $, N;
        async function A() {
          return (
            $ ||
            (($ = await (0, h.T)(e, a.g, "getBlock")({ blockTag: "latest" })),
            $)
          );
        }
        async function F() {
          if (N) return N;
          if (w) return w.id;
          if ("undefined" !== typeof t.chainId) return t.chainId;
          const n = await (0, h.T)(e, b.T, "getChainId")({});
          return (N = n), N;
        }
        if (B.includes("nonce") && "undefined" === typeof E && T)
          if (k) {
            const t = await F();
            C.nonce = await k.consume({
              address: T.address,
              chainId: t,
              client: e,
            });
          } else
            C.nonce = await (0, h.T)(
              e,
              i.y,
              "getTransactionCount"
            )({ address: T.address, blockTag: "pending" });
        if (
          (B.includes("blobVersionedHashes") || B.includes("sidecars")) &&
          v &&
          P
        ) {
          const e = (0, u.S)({ blobs: v, kzg: P });
          if (B.includes("blobVersionedHashes")) {
            const t = (0, d.d)({ commitments: e, to: "hex" });
            C.blobVersionedHashes = t;
          }
          if (B.includes("sidecars")) {
            const t = (0, l.t)({ blobs: v, commitments: e, kzg: P }),
              n = (0, f.T)({ blobs: v, commitments: e, proofs: t, to: "hex" });
            C.sidecars = n;
          }
        }
        if (
          (B.includes("chainId") && (C.chainId = await F()),
          (B.includes("fees") || B.includes("type")) &&
            "undefined" === typeof I)
        )
          try {
            C.type = (0, m.L)(C);
          } catch {
            let t = y.get(e.uid);
            if ("undefined" === typeof t) {
              const n = await A();
              (t =
                "bigint" ===
                typeof (null === n || void 0 === n ? void 0 : n.baseFeePerGas)),
                y.set(e.uid, t);
            }
            C.type = t ? "eip1559" : "legacy";
          }
        if (B.includes("fees"))
          if ("legacy" !== C.type && "eip2930" !== C.type) {
            if (
              "undefined" === typeof C.maxFeePerGas ||
              "undefined" === typeof C.maxPriorityFeePerGas
            ) {
              const n = await A(),
                { maxFeePerGas: r, maxPriorityFeePerGas: s } = await (0, o.O)(
                  e,
                  { block: n, chain: w, request: C }
                );
              if (
                "undefined" === typeof t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < s
              )
                throw new c.RR({ maxPriorityFeePerGas: s });
              (C.maxPriorityFeePerGas = s), (C.maxFeePerGas = r);
            }
          } else {
            if (
              "undefined" !== typeof t.maxFeePerGas ||
              "undefined" !== typeof t.maxPriorityFeePerGas
            )
              throw new c.pw();
            if ("undefined" === typeof t.gasPrice) {
              const t = await A(),
                { gasPrice: n } = await (0, o.O)(e, {
                  block: t,
                  chain: w,
                  request: C,
                  type: "legacy",
                });
              C.gasPrice = n;
            }
          }
        return (
          B.includes("gas") &&
            "undefined" === typeof x &&
            (C.gas = await (0, h.T)(
              e,
              s.Q,
              "estimateGas"
            )({
              ...C,
              account: T ? { address: T.address, type: "json-rpc" } : T,
            })),
          (0, p.c)(C),
          delete C.parameters,
          C
        );
      }
    },
    99939: (e, t, n) => {
      "use strict";
      async function r(e) {
        const t = await e.request({ method: "eth_gasPrice" });
        return BigInt(t);
      }
      n.d(t, { L: () => r });
    },
  },
]);
