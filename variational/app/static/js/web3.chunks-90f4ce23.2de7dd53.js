"use strict";
(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [4079],
  {
    21517: (e, t, r) => {
      r.d(t, { l: () => u, J: () => l });
      var n = r(63853),
        i = r(54334);
      var o = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const s = new i.Vy("abstract-signer/5.8.0"),
        a = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        c = [
          i.Vy.errors.INSUFFICIENT_FUNDS,
          i.Vy.errors.NONCE_EXPIRED,
          i.Vy.errors.REPLACEMENT_UNDERPRICED,
        ];
      class u {
        constructor() {
          s.checkAbstract(new.target, u), (0, n.yY)(this, "_isSigner", !0);
        }
        getBalance(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), e)
            );
          });
        }
        getTransactionCount(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), e)
            );
          });
        }
        estimateGas(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const t = yield (0, n.k_)(this.checkTransaction(e));
            return yield this.provider.estimateGas(t);
          });
        }
        call(e, t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const r = yield (0, n.k_)(this.checkTransaction(e));
            return yield this.provider.call(r, t);
          });
        }
        sendTransaction(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const t = yield this.populateTransaction(e),
              r = yield this.signTransaction(t);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            return (yield this.provider.getNetwork()).chainId;
          });
        }
        getGasPrice() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(e)
            );
          });
        }
        checkTransaction(e) {
          for (const r in e)
            -1 === a.indexOf(r) &&
              s.throwArgumentError(
                "invalid transaction key: " + r,
                "transaction",
                e
              );
          const t = (0, n.Ic)(e);
          return (
            null == t.from
              ? (t.from = this.getAddress())
              : (t.from = Promise.all([
                  Promise.resolve(t.from),
                  this.getAddress(),
                ]).then(
                  (t) => (
                    t[0].toLowerCase() !== t[1].toLowerCase() &&
                      s.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        e
                      ),
                    t[0]
                  )
                )),
            t
          );
        }
        populateTransaction(e) {
          return o(this, void 0, void 0, function* () {
            const t = yield (0, n.k_)(this.checkTransaction(e));
            null != t.to &&
              ((t.to = Promise.resolve(t.to).then((e) =>
                o(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  const t = yield this.resolveName(e);
                  return (
                    null == t &&
                      s.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e
                      ),
                    t
                  );
                })
              )),
              t.to.catch((e) => {}));
            const r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
            if (
              (null == t.gasPrice || (2 !== t.type && !r)
                ? (0 !== t.type && 1 !== t.type) ||
                  !r ||
                  s.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    e
                  )
                : s.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    e
                  ),
              (2 !== t.type && null != t.type) ||
                null == t.maxFeePerGas ||
                null == t.maxPriorityFeePerGas)
            )
              if (0 === t.type || 1 === t.type)
                null == t.gasPrice && (t.gasPrice = this.getGasPrice());
              else {
                const e = yield this.getFeeData();
                if (null == t.type)
                  if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                    if (((t.type = 2), null != t.gasPrice)) {
                      const e = t.gasPrice;
                      delete t.gasPrice,
                        (t.maxFeePerGas = e),
                        (t.maxPriorityFeePerGas = e);
                    } else
                      null == t.maxFeePerGas &&
                        (t.maxFeePerGas = e.maxFeePerGas),
                        null == t.maxPriorityFeePerGas &&
                          (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
                  else
                    null != e.gasPrice
                      ? (r &&
                          s.throwError(
                            "network does not support EIP-1559",
                            i.Vy.errors.UNSUPPORTED_OPERATION,
                            { operation: "populateTransaction" }
                          ),
                        null == t.gasPrice && (t.gasPrice = e.gasPrice),
                        (t.type = 0))
                      : s.throwError(
                          "failed to get consistent fee data",
                          i.Vy.errors.UNSUPPORTED_OPERATION,
                          { operation: "signer.getFeeData" }
                        );
                else
                  2 === t.type &&
                    (null == t.maxFeePerGas &&
                      (t.maxFeePerGas = e.maxFeePerGas),
                    null == t.maxPriorityFeePerGas &&
                      (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
              }
            else t.type = 2;
            return (
              null == t.nonce &&
                (t.nonce = this.getTransactionCount("pending")),
              null == t.gasLimit &&
                (t.gasLimit = this.estimateGas(t).catch((e) => {
                  if (c.indexOf(e.code) >= 0) throw e;
                  return s.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: e, tx: t }
                  );
                })),
              null == t.chainId
                ? (t.chainId = this.getChainId())
                : (t.chainId = Promise.all([
                    Promise.resolve(t.chainId),
                    this.getChainId(),
                  ]).then(
                    (t) => (
                      0 !== t[1] &&
                        t[0] !== t[1] &&
                        s.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          e
                        ),
                      t[0]
                    )
                  )),
              yield (0, n.k_)(t)
            );
          });
        }
        _checkProvider(e) {
          this.provider ||
            s.throwError(
              "missing provider",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: e || "_checkProvider" }
            );
        }
        static isSigner(e) {
          return !(!e || !e._isSigner);
        }
      }
      class l extends u {
        constructor(e, t) {
          super(),
            (0, n.yY)(this, "address", e),
            (0, n.yY)(this, "provider", t || null);
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(e, t) {
          return Promise.resolve().then(() => {
            s.throwError(e, i.Vy.errors.UNSUPPORTED_OPERATION, {
              operation: t,
            });
          });
        }
        signMessage(e) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(e) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction"
          );
        }
        _signTypedData(e, t, r) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData"
          );
        }
        connect(e) {
          return new l(this.address, e);
        }
      }
    },
    23321: (e, t, r) => {
      r.d(t, { So: () => m, qq: () => g, sc: () => y });
      var n = r(4099),
        i = r(66133),
        o = r(54573),
        s = r(44898),
        a = r(71454),
        c = r(54334);
      const u = new RegExp("^bytes([0-9]+)$"),
        l = new RegExp("^(u?int)([0-9]*)$"),
        f = new RegExp("^(.*)\\[([0-9]*)\\]$"),
        h = "0000000000000000000000000000000000000000000000000000000000000000",
        d = new c.Vy("solidity/5.6.1");
      function p(e, t, r) {
        switch (e) {
          case "address":
            return r ? (0, i.e8)(t, 32) : (0, i.k9)(t);
          case "string":
            return (0, a.YW)(t);
          case "bytes":
            return (0, i.k9)(t);
          case "bool":
            return (
              (t = t ? "0x01" : "0x00"), r ? (0, i.e8)(t, 32) : (0, i.k9)(t)
            );
        }
        let o = e.match(l);
        if (o) {
          let s = parseInt(o[2] || "256");
          return (
            ((o[2] && String(s) !== o[2]) ||
              s % 8 !== 0 ||
              0 === s ||
              s > 256) &&
              d.throwArgumentError("invalid number type", "type", e),
            r && (s = 256),
            (t = n.gH.from(t).toTwos(s)),
            (0, i.e8)(t, s / 8)
          );
        }
        if (((o = e.match(u)), o)) {
          const n = parseInt(o[1]);
          return (
            (String(n) !== o[1] || 0 === n || n > 32) &&
              d.throwArgumentError("invalid bytes type", "type", e),
            (0, i.k9)(t).byteLength !== n &&
              d.throwArgumentError(`invalid value for ${e}`, "value", t),
            r ? (0, i.k9)((t + h).substring(0, 66)) : t
          );
        }
        if (((o = e.match(f)), o && Array.isArray(t))) {
          const r = o[1];
          parseInt(o[2] || String(t.length)) != t.length &&
            d.throwArgumentError(`invalid array length for ${e}`, "value", t);
          const n = [];
          return (
            t.forEach(function (e) {
              n.push(p(r, e, !0));
            }),
            (0, i.xW)(n)
          );
        }
        return d.throwArgumentError("invalid type", "type", e);
      }
      function g(e, t) {
        e.length != t.length &&
          d.throwArgumentError(
            "wrong number of values; expected ${ types.length }",
            "values",
            t
          );
        const r = [];
        return (
          e.forEach(function (e, n) {
            r.push(p(e, t[n]));
          }),
          (0, i.c$)((0, i.xW)(r))
        );
      }
      function m(e, t) {
        return (0, o.S)(g(e, t));
      }
      function y(e, t) {
        return (0, s.sc)(g(e, t));
      }
    },
    32296: (e, t, r) => {
      r.d(t, { Uq: () => Ne, NZ: () => Oe, PM: () => Fe });
      var n = r(66133),
        i = r(4099),
        o = r(63853),
        s = r(54334);
      const a = "abi/5.8.0",
        c = new s.Vy(a);
      class u {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.type = t),
            (this.localName = r),
            (this.dynamic = n);
        }
        _throwError(e, t) {
          c.throwArgumentError(e, this.localName, t);
        }
      }
      class l {
        constructor(e) {
          (0, o.yY)(this, "wordSize", e || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(e));
        }
        get data() {
          return (0, n.qn)(this._data);
        }
        get length() {
          return this._dataLength;
        }
        _writeData(e) {
          return this._data.push(e), (this._dataLength += e.length), e.length;
        }
        appendWriter(e) {
          return this._writeData((0, n.xW)(e._data));
        }
        writeBytes(e) {
          let t = (0, n.k9)(e);
          const r = t.length % this.wordSize;
          return (
            r && (t = (0, n.xW)([t, this._padding.slice(r)])),
            this._writeData(t)
          );
        }
        _getValue(e) {
          let t = (0, n.k9)(i.gH.from(e));
          return (
            t.length > this.wordSize &&
              c.throwError("value out-of-bounds", s.Vy.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: t.length,
              }),
            t.length % this.wordSize &&
              (t = (0, n.xW)([
                this._padding.slice(t.length % this.wordSize),
                t,
              ])),
            t
          );
        }
        writeValue(e) {
          return this._writeData(this._getValue(e));
        }
        writeUpdatableValue() {
          const e = this._data.length;
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (t) => {
              this._data[e] = this._getValue(t);
            }
          );
        }
      }
      class f {
        constructor(e, t, r, i) {
          (0, o.yY)(this, "_data", (0, n.k9)(e)),
            (0, o.yY)(this, "wordSize", t || 32),
            (0, o.yY)(this, "_coerceFunc", r),
            (0, o.yY)(this, "allowLoose", i),
            (this._offset = 0);
        }
        get data() {
          return (0, n.c$)(this._data);
        }
        get consumed() {
          return this._offset;
        }
        static coerce(e, t) {
          let r = e.match("^u?int([0-9]+)$");
          return r && parseInt(r[1]) <= 48 && (t = t.toNumber()), t;
        }
        coerce(e, t) {
          return this._coerceFunc ? this._coerceFunc(e, t) : f.coerce(e, t);
        }
        _peekBytes(e, t, r) {
          let n = Math.ceil(t / this.wordSize) * this.wordSize;
          return (
            this._offset + n > this._data.length &&
              (this.allowLoose && r && this._offset + t <= this._data.length
                ? (n = t)
                : c.throwError(
                    "data out-of-bounds",
                    s.Vy.errors.BUFFER_OVERRUN,
                    { length: this._data.length, offset: this._offset + n }
                  )),
            this._data.slice(this._offset, this._offset + n)
          );
        }
        subReader(e) {
          return new f(
            this._data.slice(this._offset + e),
            this.wordSize,
            this._coerceFunc,
            this.allowLoose
          );
        }
        readBytes(e, t) {
          let r = this._peekBytes(0, e, !!t);
          return (this._offset += r.length), r.slice(0, e);
        }
        readValue() {
          return i.gH.from(this.readBytes(this.wordSize));
        }
      }
      var h = r(83404),
        d = r(62023),
        p = r(54573);
      class g extends u {
        constructor(e) {
          super("address", "address", e, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(e, t) {
          try {
            t = (0, h.bv)(t);
          } catch (r) {
            this._throwError(r.message, t);
          }
          return e.writeValue(t);
        }
        decode(e) {
          return (0, h.bv)((0, n.bj)(e.readValue().toHexString(), 20));
        }
      }
      class m extends u {
        constructor(e) {
          super(e.name, e.type, void 0, e.dynamic), (this.coder = e);
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(e, t) {
          return this.coder.encode(e, t);
        }
        decode(e) {
          return this.coder.decode(e);
        }
      }
      const y = new s.Vy(a);
      function v(e, t, r) {
        let n = null;
        if (Array.isArray(r)) n = r;
        else if (r && "object" === typeof r) {
          let e = {};
          n = t.map((t) => {
            const n = t.localName;
            return (
              n ||
                y.throwError(
                  "cannot encode object for signature with missing names",
                  s.Vy.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r }
                ),
              e[n] &&
                y.throwError(
                  "cannot encode object for signature with duplicate names",
                  s.Vy.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r }
                ),
              (e[n] = !0),
              r[n]
            );
          });
        } else y.throwArgumentError("invalid tuple value", "tuple", r);
        t.length !== n.length &&
          y.throwArgumentError("types/value length mismatch", "tuple", r);
        let i = new l(e.wordSize),
          o = new l(e.wordSize),
          a = [];
        t.forEach((e, t) => {
          let r = n[t];
          if (e.dynamic) {
            let t = o.length;
            e.encode(o, r);
            let n = i.writeUpdatableValue();
            a.push((e) => {
              n(e + t);
            });
          } else e.encode(i, r);
        }),
          a.forEach((e) => {
            e(i.length);
          });
        let c = e.appendWriter(i);
        return (c += e.appendWriter(o)), c;
      }
      function b(e, t) {
        let r = [],
          n = e.subReader(0);
        t.forEach((t) => {
          let i = null;
          if (t.dynamic) {
            let r = e.readValue(),
              a = n.subReader(r.toNumber());
            try {
              i = t.decode(a);
            } catch (o) {
              if (o.code === s.Vy.errors.BUFFER_OVERRUN) throw o;
              (i = o),
                (i.baseType = t.name),
                (i.name = t.localName),
                (i.type = t.type);
            }
          } else
            try {
              i = t.decode(e);
            } catch (o) {
              if (o.code === s.Vy.errors.BUFFER_OVERRUN) throw o;
              (i = o),
                (i.baseType = t.name),
                (i.name = t.localName),
                (i.type = t.type);
            }
          void 0 != i && r.push(i);
        });
        const i = t.reduce((e, t) => {
          const r = t.localName;
          return r && (e[r] || (e[r] = 0), e[r]++), e;
        }, {});
        t.forEach((e, t) => {
          let n = e.localName;
          if (!n || 1 !== i[n]) return;
          if (("length" === n && (n = "_length"), null != r[n])) return;
          const o = r[t];
          o instanceof Error
            ? Object.defineProperty(r, n, {
                enumerable: !0,
                get: () => {
                  throw o;
                },
              })
            : (r[n] = o);
        });
        for (let o = 0; o < r.length; o++) {
          const e = r[o];
          e instanceof Error &&
            Object.defineProperty(r, o, {
              enumerable: !0,
              get: () => {
                throw e;
              },
            });
        }
        return Object.freeze(r);
      }
      class w extends u {
        constructor(e, t, r) {
          super(
            "array",
            e.type + "[" + (t >= 0 ? t : "") + "]",
            r,
            -1 === t || e.dynamic
          ),
            (this.coder = e),
            (this.length = t);
        }
        defaultValue() {
          const e = this.coder.defaultValue(),
            t = [];
          for (let r = 0; r < this.length; r++) t.push(e);
          return t;
        }
        encode(e, t) {
          Array.isArray(t) || this._throwError("expected array value", t);
          let r = this.length;
          -1 === r && ((r = t.length), e.writeValue(t.length)),
            y.checkArgumentCount(
              t.length,
              r,
              "coder array" + (this.localName ? " " + this.localName : "")
            );
          let n = [];
          for (let i = 0; i < t.length; i++) n.push(this.coder);
          return v(e, n, t);
        }
        decode(e) {
          let t = this.length;
          -1 === t &&
            ((t = e.readValue().toNumber()),
            32 * t > e._data.length &&
              y.throwError(
                "insufficient data length",
                s.Vy.errors.BUFFER_OVERRUN,
                { length: e._data.length, count: t }
              ));
          let r = [];
          for (let n = 0; n < t; n++) r.push(new m(this.coder));
          return e.coerce(this.name, b(e, r));
        }
      }
      class E extends u {
        constructor(e) {
          super("bool", "bool", e, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(e, t) {
          return e.writeValue(t ? 1 : 0);
        }
        decode(e) {
          return e.coerce(this.type, !e.readValue().isZero());
        }
      }
      class A extends u {
        constructor(e, t) {
          super(e, e, t, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(e, t) {
          t = (0, n.k9)(t);
          let r = e.writeValue(t.length);
          return (r += e.writeBytes(t)), r;
        }
        decode(e) {
          return e.readBytes(e.readValue().toNumber(), !0);
        }
      }
      class S extends A {
        constructor(e) {
          super("bytes", e);
        }
        decode(e) {
          return e.coerce(this.name, (0, n.c$)(super.decode(e)));
        }
      }
      class P extends u {
        constructor(e, t) {
          let r = "bytes" + String(e);
          super(r, r, t, !1), (this.size = e);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(e, t) {
          let r = (0, n.k9)(t);
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", t),
            e.writeBytes(r)
          );
        }
        decode(e) {
          return e.coerce(this.name, (0, n.c$)(e.readBytes(this.size)));
        }
      }
      class _ extends u {
        constructor(e) {
          super("null", "", e, !1);
        }
        defaultValue() {
          return null;
        }
        encode(e, t) {
          return null != t && this._throwError("not null", t), e.writeBytes([]);
        }
        decode(e) {
          return e.readBytes(0), e.coerce(this.name, null);
        }
      }
      const x = i.gH.from(-1),
        I = i.gH.from(0),
        k = i.gH.from(1),
        C = i.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      class R extends u {
        constructor(e, t, r) {
          const n = (t ? "int" : "uint") + 8 * e;
          super(n, n, r, !1), (this.size = e), (this.signed = t);
        }
        defaultValue() {
          return 0;
        }
        encode(e, t) {
          let r = i.gH.from(t),
            n = C.mask(8 * e.wordSize);
          if (this.signed) {
            let e = n.mask(8 * this.size - 1);
            (r.gt(e) || r.lt(e.add(k).mul(x))) &&
              this._throwError("value out-of-bounds", t);
          } else
            (r.lt(I) || r.gt(n.mask(8 * this.size))) &&
              this._throwError("value out-of-bounds", t);
          return (
            (r = r.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed &&
              (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)),
            e.writeValue(r)
          );
        }
        decode(e) {
          let t = e.readValue().mask(8 * this.size);
          return (
            this.signed && (t = t.fromTwos(8 * this.size)),
            e.coerce(this.name, t)
          );
        }
      }
      var T = r(71454);
      class N extends A {
        constructor(e) {
          super("string", e);
        }
        defaultValue() {
          return "";
        }
        encode(e, t) {
          return super.encode(e, (0, T.YW)(t));
        }
        decode(e) {
          return (0, T._v)(super.decode(e));
        }
      }
      class O extends u {
        constructor(e, t) {
          let r = !1;
          const n = [];
          e.forEach((e) => {
            e.dynamic && (r = !0), n.push(e.type);
          });
          super("tuple", "tuple(" + n.join(",") + ")", t, r), (this.coders = e);
        }
        defaultValue() {
          const e = [];
          this.coders.forEach((t) => {
            e.push(t.defaultValue());
          });
          const t = this.coders.reduce((e, t) => {
            const r = t.localName;
            return r && (e[r] || (e[r] = 0), e[r]++), e;
          }, {});
          return (
            this.coders.forEach((r, n) => {
              let i = r.localName;
              i &&
                1 === t[i] &&
                ("length" === i && (i = "_length"),
                null == e[i] && (e[i] = e[n]));
            }),
            Object.freeze(e)
          );
        }
        encode(e, t) {
          return v(e, this.coders, t);
        }
        decode(e) {
          return e.coerce(this.name, b(e, this.coders));
        }
      }
      const F = new s.Vy(a),
        M = {};
      let D = { calldata: !0, memory: !0, storage: !0 },
        L = { calldata: !0, memory: !0 };
      function U(e, t) {
        if ("bytes" === e || "string" === e) {
          if (D[t]) return !0;
        } else if ("address" === e) {
          if ("payable" === t) return !0;
        } else if ((e.indexOf("[") >= 0 || "tuple" === e) && L[t]) return !0;
        return (
          (D[t] || "payable" === t) &&
            F.throwArgumentError("invalid modifier", "name", t),
          !1
        );
      }
      function V(e, t) {
        for (let r in t) (0, o.yY)(e, r, t[r]);
      }
      const G = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        }),
        j = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class B {
        constructor(e, t) {
          e !== M &&
            F.throwError("use fromString", s.Vy.errors.UNSUPPORTED_OPERATION, {
              operation: "new ParamType()",
            }),
            V(this, t);
          let r = this.type.match(j);
          V(
            this,
            r
              ? {
                  arrayLength: parseInt(r[2] || "-1"),
                  arrayChildren: B.fromObject({
                    type: r[1],
                    components: this.components,
                  }),
                  baseType: "array",
                }
              : {
                  arrayLength: null,
                  arrayChildren: null,
                  baseType: null != this.components ? "tuple" : this.type,
                }
          ),
            (this._isParamType = !0),
            Object.freeze(this);
        }
        format(e) {
          if (
            (e || (e = G.sighash),
            G[e] || F.throwArgumentError("invalid format type", "format", e),
            e === G.json)
          ) {
            let t = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" === typeof this.indexed && (t.indexed = this.indexed),
              this.components &&
                (t.components = this.components.map((t) =>
                  JSON.parse(t.format(e))
                )),
              JSON.stringify(t)
            );
          }
          let t = "";
          return (
            "array" === this.baseType
              ? ((t += this.arrayChildren.format(e)),
                (t +=
                  "[" +
                  (this.arrayLength < 0 ? "" : String(this.arrayLength)) +
                  "]"))
              : "tuple" === this.baseType
              ? (e !== G.sighash && (t += this.type),
                (t +=
                  "(" +
                  this.components
                    .map((t) => t.format(e))
                    .join(e === G.full ? ", " : ",") +
                  ")"))
              : (t += this.type),
            e !== G.sighash &&
              (!0 === this.indexed && (t += " indexed"),
              e === G.full && this.name && (t += " " + this.name)),
            t
          );
        }
        static from(e, t) {
          return "string" === typeof e ? B.fromString(e, t) : B.fromObject(e);
        }
        static fromObject(e) {
          return B.isParamType(e)
            ? e
            : new B(M, {
                name: e.name || null,
                type: Q(e.type),
                indexed: null == e.indexed ? null : !!e.indexed,
                components: e.components
                  ? e.components.map(B.fromObject)
                  : null,
              });
        }
        static fromString(e, t) {
          return (
            (r = (function (e, t) {
              let r = e;
              function n(t) {
                F.throwArgumentError(
                  `unexpected character at position ${t}`,
                  "param",
                  e
                );
              }
              function i(e) {
                let r = {
                  type: "",
                  name: "",
                  parent: e,
                  state: { allowType: !0 },
                };
                return t && (r.indexed = !1), r;
              }
              e = e.replace(/\s/g, " ");
              let o = { type: "", name: "", state: { allowType: !0 } },
                s = o;
              for (let a = 0; a < e.length; a++) {
                let r = e[a];
                switch (r) {
                  case "(":
                    s.state.allowType && "" === s.type
                      ? (s.type = "tuple")
                      : s.state.allowParams || n(a),
                      (s.state.allowType = !1),
                      (s.type = Q(s.type)),
                      (s.components = [i(s)]),
                      (s = s.components[0]);
                    break;
                  case ")":
                    delete s.state,
                      "indexed" === s.name &&
                        (t || n(a), (s.indexed = !0), (s.name = "")),
                      U(s.type, s.name) && (s.name = ""),
                      (s.type = Q(s.type));
                    let e = s;
                    (s = s.parent),
                      s || n(a),
                      delete e.parent,
                      (s.state.allowParams = !1),
                      (s.state.allowName = !0),
                      (s.state.allowArray = !0);
                    break;
                  case ",":
                    delete s.state,
                      "indexed" === s.name &&
                        (t || n(a), (s.indexed = !0), (s.name = "")),
                      U(s.type, s.name) && (s.name = ""),
                      (s.type = Q(s.type));
                    let o = i(s.parent);
                    s.parent.components.push(o), delete s.parent, (s = o);
                    break;
                  case " ":
                    s.state.allowType &&
                      "" !== s.type &&
                      ((s.type = Q(s.type)),
                      delete s.state.allowType,
                      (s.state.allowName = !0),
                      (s.state.allowParams = !0)),
                      s.state.allowName &&
                        "" !== s.name &&
                        ("indexed" === s.name
                          ? (t || n(a),
                            s.indexed && n(a),
                            (s.indexed = !0),
                            (s.name = ""))
                          : U(s.type, s.name)
                          ? (s.name = "")
                          : (s.state.allowName = !1));
                    break;
                  case "[":
                    s.state.allowArray || n(a),
                      (s.type += r),
                      (s.state.allowArray = !1),
                      (s.state.allowName = !1),
                      (s.state.readArray = !0);
                    break;
                  case "]":
                    s.state.readArray || n(a),
                      (s.type += r),
                      (s.state.readArray = !1),
                      (s.state.allowArray = !0),
                      (s.state.allowName = !0);
                    break;
                  default:
                    s.state.allowType
                      ? ((s.type += r),
                        (s.state.allowParams = !0),
                        (s.state.allowArray = !0))
                      : s.state.allowName
                      ? ((s.name += r), delete s.state.allowArray)
                      : s.state.readArray
                      ? (s.type += r)
                      : n(a);
                }
              }
              return (
                s.parent && F.throwArgumentError("unexpected eof", "param", e),
                delete o.state,
                "indexed" === s.name
                  ? (t || n(r.length - 7),
                    s.indexed && n(r.length - 7),
                    (s.indexed = !0),
                    (s.name = ""))
                  : U(s.type, s.name) && (s.name = ""),
                (o.type = Q(o.type)),
                o
              );
            })(e, !!t)),
            B.fromObject({
              name: r.name,
              type: r.type,
              indexed: r.indexed,
              components: r.components,
            })
          );
          var r;
        }
        static isParamType(e) {
          return !(null == e || !e._isParamType);
        }
      }
      function z(e, t) {
        return (function (e) {
          e = e.trim();
          let t = [],
            r = "",
            n = 0;
          for (let i = 0; i < e.length; i++) {
            let o = e[i];
            "," === o && 0 === n
              ? (t.push(r), (r = ""))
              : ((r += o),
                "(" === o
                  ? n++
                  : ")" === o &&
                    (n--,
                    -1 === n &&
                      F.throwArgumentError(
                        "unbalanced parenthesis",
                        "value",
                        e
                      )));
          }
          r && t.push(r);
          return t;
        })(e).map((e) => B.fromString(e, t));
      }
      class W {
        constructor(e, t) {
          e !== M &&
            F.throwError(
              "use a static from method",
              s.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" }
            ),
            V(this, t),
            (this._isFragment = !0),
            Object.freeze(this);
        }
        static from(e) {
          return W.isFragment(e)
            ? e
            : "string" === typeof e
            ? W.fromString(e)
            : W.fromObject(e);
        }
        static fromObject(e) {
          if (W.isFragment(e)) return e;
          switch (e.type) {
            case "function":
              return J.fromObject(e);
            case "event":
              return K.fromObject(e);
            case "constructor":
              return q.fromObject(e);
            case "error":
              return Z.fromObject(e);
            case "fallback":
            case "receive":
              return null;
          }
          return F.throwArgumentError("invalid fragment object", "value", e);
        }
        static fromString(e) {
          return "event" ===
            (e = (e = (e = e.replace(/\s/g, " "))
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")).trim()).split(" ")[0]
            ? K.fromString(e.substring(5).trim())
            : "function" === e.split(" ")[0]
            ? J.fromString(e.substring(8).trim())
            : "constructor" === e.split("(")[0].trim()
            ? q.fromString(e.trim())
            : "error" === e.split(" ")[0]
            ? Z.fromString(e.substring(5).trim())
            : F.throwArgumentError("unsupported fragment", "value", e);
        }
        static isFragment(e) {
          return !(!e || !e._isFragment);
        }
      }
      class K extends W {
        format(e) {
          if (
            (e || (e = G.sighash),
            G[e] || F.throwArgumentError("invalid format type", "format", e),
            e === G.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== G.sighash && (t += "event "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === G.full ? ", " : ",") +
              ") "),
            e !== G.sighash && this.anonymous && (t += "anonymous "),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e ? K.fromString(e) : K.fromObject(e);
        }
        static fromObject(e) {
          if (K.isEventFragment(e)) return e;
          "event" !== e.type &&
            F.throwArgumentError("invalid event object", "value", e);
          const t = {
            name: te(e.name),
            anonymous: e.anonymous,
            inputs: e.inputs ? e.inputs.map(B.fromObject) : [],
            type: "event",
          };
          return new K(M, t);
        }
        static fromString(e) {
          let t = e.match(re);
          t || F.throwArgumentError("invalid event string", "value", e);
          let r = !1;
          return (
            t[3].split(" ").forEach((e) => {
              switch (e.trim()) {
                case "anonymous":
                  r = !0;
                  break;
                case "":
                  break;
                default:
                  F.warn("unknown modifier: " + e);
              }
            }),
            K.fromObject({
              name: t[1].trim(),
              anonymous: r,
              inputs: z(t[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(e) {
          return e && e._isFragment && "event" === e.type;
        }
      }
      function Y(e, t) {
        t.gas = null;
        let r = e.split("@");
        return 1 !== r.length
          ? (r.length > 2 &&
              F.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                e
              ),
            r[1].match(/^[0-9]+$/) ||
              F.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                e
              ),
            (t.gas = i.gH.from(r[1])),
            r[0])
          : e;
      }
      function $(e, t) {
        (t.constant = !1),
          (t.payable = !1),
          (t.stateMutability = "nonpayable"),
          e.split(" ").forEach((e) => {
            switch (e.trim()) {
              case "constant":
                t.constant = !0;
                break;
              case "payable":
                (t.payable = !0), (t.stateMutability = "payable");
                break;
              case "nonpayable":
                (t.payable = !1), (t.stateMutability = "nonpayable");
                break;
              case "pure":
                (t.constant = !0), (t.stateMutability = "pure");
                break;
              case "view":
                (t.constant = !0), (t.stateMutability = "view");
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                console.log("unknown modifier: " + e);
            }
          });
      }
      function H(e) {
        let t = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != e.stateMutability
            ? ((t.stateMutability = e.stateMutability),
              (t.constant =
                "view" === t.stateMutability || "pure" === t.stateMutability),
              null != e.constant &&
                !!e.constant !== t.constant &&
                F.throwArgumentError(
                  "cannot have constant function with mutability " +
                    t.stateMutability,
                  "value",
                  e
                ),
              (t.payable = "payable" === t.stateMutability),
              null != e.payable &&
                !!e.payable !== t.payable &&
                F.throwArgumentError(
                  "cannot have payable function with mutability " +
                    t.stateMutability,
                  "value",
                  e
                ))
            : null != e.payable
            ? ((t.payable = !!e.payable),
              null != e.constant ||
                t.payable ||
                "constructor" === e.type ||
                F.throwArgumentError(
                  "unable to determine stateMutability",
                  "value",
                  e
                ),
              (t.constant = !!e.constant),
              t.constant
                ? (t.stateMutability = "view")
                : (t.stateMutability = t.payable ? "payable" : "nonpayable"),
              t.payable &&
                t.constant &&
                F.throwArgumentError(
                  "cannot have constant payable function",
                  "value",
                  e
                ))
            : null != e.constant
            ? ((t.constant = !!e.constant),
              (t.payable = !t.constant),
              (t.stateMutability = t.constant ? "view" : "payable"))
            : "constructor" !== e.type &&
              F.throwArgumentError(
                "unable to determine stateMutability",
                "value",
                e
              ),
          t
        );
      }
      class q extends W {
        format(e) {
          if (
            (e || (e = G.sighash),
            G[e] || F.throwArgumentError("invalid format type", "format", e),
            e === G.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          e === G.sighash &&
            F.throwError(
              "cannot format a constructor for sighash",
              s.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" }
            );
          let t =
            "constructor(" +
            this.inputs
              .map((t) => t.format(e))
              .join(e === G.full ? ", " : ",") +
            ") ";
          return (
            this.stateMutability &&
              "nonpayable" !== this.stateMutability &&
              (t += this.stateMutability + " "),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e ? q.fromString(e) : q.fromObject(e);
        }
        static fromObject(e) {
          if (q.isConstructorFragment(e)) return e;
          "constructor" !== e.type &&
            F.throwArgumentError("invalid constructor object", "value", e);
          let t = H(e);
          t.constant &&
            F.throwArgumentError("constructor cannot be constant", "value", e);
          const r = {
            name: null,
            type: e.type,
            inputs: e.inputs ? e.inputs.map(B.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? i.gH.from(e.gas) : null,
          };
          return new q(M, r);
        }
        static fromString(e) {
          let t = { type: "constructor" },
            r = (e = Y(e, t)).match(re);
          return (
            (r && "constructor" === r[1].trim()) ||
              F.throwArgumentError("invalid constructor string", "value", e),
            (t.inputs = z(r[2].trim(), !1)),
            $(r[3].trim(), t),
            q.fromObject(t)
          );
        }
        static isConstructorFragment(e) {
          return e && e._isFragment && "constructor" === e.type;
        }
      }
      class J extends q {
        format(e) {
          if (
            (e || (e = G.sighash),
            G[e] || F.throwArgumentError("invalid format type", "format", e),
            e === G.json)
          )
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
              outputs: this.outputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== G.sighash && (t += "function "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === G.full ? ", " : ",") +
              ") "),
            e !== G.sighash &&
              (this.stateMutability
                ? "nonpayable" !== this.stateMutability &&
                  (t += this.stateMutability + " ")
                : this.constant && (t += "view "),
              this.outputs &&
                this.outputs.length &&
                (t +=
                  "returns (" +
                  this.outputs.map((t) => t.format(e)).join(", ") +
                  ") "),
              null != this.gas && (t += "@" + this.gas.toString() + " ")),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e ? J.fromString(e) : J.fromObject(e);
        }
        static fromObject(e) {
          if (J.isFunctionFragment(e)) return e;
          "function" !== e.type &&
            F.throwArgumentError("invalid function object", "value", e);
          let t = H(e);
          const r = {
            type: e.type,
            name: te(e.name),
            constant: t.constant,
            inputs: e.inputs ? e.inputs.map(B.fromObject) : [],
            outputs: e.outputs ? e.outputs.map(B.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? i.gH.from(e.gas) : null,
          };
          return new J(M, r);
        }
        static fromString(e) {
          let t = { type: "function" },
            r = (e = Y(e, t)).split(" returns ");
          r.length > 2 &&
            F.throwArgumentError("invalid function string", "value", e);
          let n = r[0].match(re);
          if (
            (n ||
              F.throwArgumentError("invalid function signature", "value", e),
            (t.name = n[1].trim()),
            t.name && te(t.name),
            (t.inputs = z(n[2], !1)),
            $(n[3].trim(), t),
            r.length > 1)
          ) {
            let n = r[1].match(re);
            ("" == n[1].trim() && "" == n[3].trim()) ||
              F.throwArgumentError("unexpected tokens", "value", e),
              (t.outputs = z(n[2], !1));
          } else t.outputs = [];
          return J.fromObject(t);
        }
        static isFunctionFragment(e) {
          return e && e._isFragment && "function" === e.type;
        }
      }
      function X(e) {
        const t = e.format();
        return (
          ("Error(string)" !== t && "Panic(uint256)" !== t) ||
            F.throwArgumentError(
              `cannot specify user defined ${t} error`,
              "fragment",
              e
            ),
          e
        );
      }
      class Z extends W {
        format(e) {
          if (
            (e || (e = G.sighash),
            G[e] || F.throwArgumentError("invalid format type", "format", e),
            e === G.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== G.sighash && (t += "error "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === G.full ? ", " : ",") +
              ") "),
            t.trim()
          );
        }
        static from(e) {
          return "string" === typeof e ? Z.fromString(e) : Z.fromObject(e);
        }
        static fromObject(e) {
          if (Z.isErrorFragment(e)) return e;
          "error" !== e.type &&
            F.throwArgumentError("invalid error object", "value", e);
          const t = {
            type: e.type,
            name: te(e.name),
            inputs: e.inputs ? e.inputs.map(B.fromObject) : [],
          };
          return X(new Z(M, t));
        }
        static fromString(e) {
          let t = { type: "error" },
            r = e.match(re);
          return (
            r || F.throwArgumentError("invalid error signature", "value", e),
            (t.name = r[1].trim()),
            t.name && te(t.name),
            (t.inputs = z(r[2], !1)),
            X(Z.fromObject(t))
          );
        }
        static isErrorFragment(e) {
          return e && e._isFragment && "error" === e.type;
        }
      }
      function Q(e) {
        return (
          e.match(/^uint($|[^1-9])/)
            ? (e = "uint256" + e.substring(4))
            : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)),
          e
        );
      }
      const ee = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function te(e) {
        return (
          (e && e.match(ee)) ||
            F.throwArgumentError(`invalid identifier "${e}"`, "value", e),
          e
        );
      }
      const re = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
      const ne = new s.Vy(a),
        ie = new RegExp(/^bytes([0-9]*)$/),
        oe = new RegExp(/^(u?int)([0-9]*)$/);
      const se = new (class {
          constructor(e) {
            (0, o.yY)(this, "coerceFunc", e || null);
          }
          _getCoder(e) {
            switch (e.baseType) {
              case "address":
                return new g(e.name);
              case "bool":
                return new E(e.name);
              case "string":
                return new N(e.name);
              case "bytes":
                return new S(e.name);
              case "array":
                return new w(
                  this._getCoder(e.arrayChildren),
                  e.arrayLength,
                  e.name
                );
              case "tuple":
                return new O(
                  (e.components || []).map((e) => this._getCoder(e)),
                  e.name
                );
              case "":
                return new _(e.name);
            }
            let t = e.type.match(oe);
            if (t) {
              let r = parseInt(t[2] || "256");
              return (
                (0 === r || r > 256 || r % 8 !== 0) &&
                  ne.throwArgumentError(
                    "invalid " + t[1] + " bit length",
                    "param",
                    e
                  ),
                new R(r / 8, "int" === t[1], e.name)
              );
            }
            if (((t = e.type.match(ie)), t)) {
              let r = parseInt(t[1]);
              return (
                (0 === r || r > 32) &&
                  ne.throwArgumentError("invalid bytes length", "param", e),
                new P(r, e.name)
              );
            }
            return ne.throwArgumentError("invalid type", "type", e.type);
          }
          _getWordSize() {
            return 32;
          }
          _getReader(e, t) {
            return new f(e, this._getWordSize(), this.coerceFunc, t);
          }
          _getWriter() {
            return new l(this._getWordSize());
          }
          getDefaultValue(e) {
            const t = e.map((e) => this._getCoder(B.from(e)));
            return new O(t, "_").defaultValue();
          }
          encode(e, t) {
            e.length !== t.length &&
              ne.throwError(
                "types/values length mismatch",
                s.Vy.errors.INVALID_ARGUMENT,
                {
                  count: { types: e.length, values: t.length },
                  value: { types: e, values: t },
                }
              );
            const r = e.map((e) => this._getCoder(B.from(e))),
              n = new O(r, "_"),
              i = this._getWriter();
            return n.encode(i, t), i.data;
          }
          decode(e, t, r) {
            const i = e.map((e) => this._getCoder(B.from(e)));
            return new O(i, "_").decode(this._getReader((0, n.k9)(t), r));
          }
        })(),
        ae = new s.Vy(a);
      class ce extends o.VY {}
      class ue extends o.VY {}
      class le extends o.VY {}
      class fe extends o.VY {
        static isIndexed(e) {
          return !(!e || !e._isIndexed);
        }
      }
      const he = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0,
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"],
        },
      };
      function de(e, t) {
        const r = new Error(
          `deferred error during ABI decoding triggered accessing ${e}`
        );
        return (r.error = t), r;
      }
      class pe {
        constructor(e) {
          let t = [];
          (t = "string" === typeof e ? JSON.parse(e) : e),
            (0, o.yY)(
              this,
              "fragments",
              t.map((e) => W.from(e)).filter((e) => null != e)
            ),
            (0, o.yY)(
              this,
              "_abiCoder",
              (0, o.$J)(new.target, "getAbiCoder")()
            ),
            (0, o.yY)(this, "functions", {}),
            (0, o.yY)(this, "errors", {}),
            (0, o.yY)(this, "events", {}),
            (0, o.yY)(this, "structs", {}),
            this.fragments.forEach((e) => {
              let t = null;
              switch (e.type) {
                case "constructor":
                  return this.deploy
                    ? void ae.warn("duplicate definition - constructor")
                    : void (0, o.yY)(this, "deploy", e);
                case "function":
                  t = this.functions;
                  break;
                case "event":
                  t = this.events;
                  break;
                case "error":
                  t = this.errors;
                  break;
                default:
                  return;
              }
              let r = e.format();
              t[r] ? ae.warn("duplicate definition - " + r) : (t[r] = e);
            }),
            this.deploy ||
              (0, o.yY)(
                this,
                "deploy",
                q.from({ payable: !1, type: "constructor" })
              ),
            (0, o.yY)(this, "_isInterface", !0);
        }
        format(e) {
          e || (e = G.full),
            e === G.sighash &&
              ae.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                e
              );
          const t = this.fragments.map((t) => t.format(e));
          return e === G.json ? JSON.stringify(t.map((e) => JSON.parse(e))) : t;
        }
        static getAbiCoder() {
          return se;
        }
        static getAddress(e) {
          return (0, h.bv)(e);
        }
        static getSighash(e) {
          return (0, n.Ab)((0, d.id)(e.format()), 0, 4);
        }
        static getEventTopic(e) {
          return (0, d.id)(e.format());
        }
        getFunction(e) {
          if ((0, n.Lo)(e)) {
            for (const t in this.functions)
              if (e === this.getSighash(t)) return this.functions[t];
            ae.throwArgumentError("no matching function", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.functions).filter(
                (e) => e.split("(")[0] === t
              );
            return (
              0 === r.length
                ? ae.throwArgumentError("no matching function", "name", t)
                : r.length > 1 &&
                  ae.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    t
                  ),
              this.functions[r[0]]
            );
          }
          const t = this.functions[J.fromString(e).format()];
          return (
            t || ae.throwArgumentError("no matching function", "signature", e),
            t
          );
        }
        getEvent(e) {
          if ((0, n.Lo)(e)) {
            const t = e.toLowerCase();
            for (const e in this.events)
              if (t === this.getEventTopic(e)) return this.events[e];
            ae.throwArgumentError("no matching event", "topichash", t);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.events).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? ae.throwArgumentError("no matching event", "name", t)
                : r.length > 1 &&
                  ae.throwArgumentError("multiple matching events", "name", t),
              this.events[r[0]]
            );
          }
          const t = this.events[K.fromString(e).format()];
          return (
            t || ae.throwArgumentError("no matching event", "signature", e), t
          );
        }
        getError(e) {
          if ((0, n.Lo)(e)) {
            const t = (0, o.$J)(this.constructor, "getSighash");
            for (const r in this.errors) {
              if (e === t(this.errors[r])) return this.errors[r];
            }
            ae.throwArgumentError("no matching error", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            const t = e.trim(),
              r = Object.keys(this.errors).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? ae.throwArgumentError("no matching error", "name", t)
                : r.length > 1 &&
                  ae.throwArgumentError("multiple matching errors", "name", t),
              this.errors[r[0]]
            );
          }
          const t = this.errors[J.fromString(e).format()];
          return (
            t || ae.throwArgumentError("no matching error", "signature", e), t
          );
        }
        getSighash(e) {
          if ("string" === typeof e)
            try {
              e = this.getFunction(e);
            } catch (t) {
              try {
                e = this.getError(e);
              } catch (r) {
                throw t;
              }
            }
          return (0, o.$J)(this.constructor, "getSighash")(e);
        }
        getEventTopic(e) {
          return (
            "string" === typeof e && (e = this.getEvent(e)),
            (0, o.$J)(this.constructor, "getEventTopic")(e)
          );
        }
        _decodeParams(e, t) {
          return this._abiCoder.decode(e, t);
        }
        _encodeParams(e, t) {
          return this._abiCoder.encode(e, t);
        }
        encodeDeploy(e) {
          return this._encodeParams(this.deploy.inputs, e || []);
        }
        decodeErrorResult(e, t) {
          "string" === typeof e && (e = this.getError(e));
          const r = (0, n.k9)(t);
          return (
            (0, n.c$)(r.slice(0, 4)) !== this.getSighash(e) &&
              ae.throwArgumentError(
                `data signature does not match error ${e.name}.`,
                "data",
                (0, n.c$)(r)
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeErrorResult(e, t) {
          return (
            "string" === typeof e && (e = this.getError(e)),
            (0, n.c$)(
              (0, n.xW)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ])
            )
          );
        }
        decodeFunctionData(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          const r = (0, n.k9)(t);
          return (
            (0, n.c$)(r.slice(0, 4)) !== this.getSighash(e) &&
              ae.throwArgumentError(
                `data signature does not match function ${e.name}.`,
                "data",
                (0, n.c$)(r)
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeFunctionData(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, n.c$)(
              (0, n.xW)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ])
            )
          );
        }
        decodeFunctionResult(e, t) {
          "string" === typeof e && (e = this.getFunction(e));
          let r = (0, n.k9)(t),
            i = null,
            o = "",
            a = null,
            c = null,
            u = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(e.outputs, r);
              } catch (l) {}
              break;
            case 4: {
              const e = (0, n.c$)(r.slice(0, 4)),
                t = he[e];
              if (t)
                (a = this._abiCoder.decode(t.inputs, r.slice(4))),
                  (c = t.name),
                  (u = t.signature),
                  t.reason && (i = a[0]),
                  "Error" === c
                    ? (o = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(
                        a[0]
                      )}`)
                    : "Panic" === c &&
                      (o = `; VM Exception while processing transaction: reverted with panic code ${a[0]}`);
              else
                try {
                  const t = this.getError(e);
                  (a = this._abiCoder.decode(t.inputs, r.slice(4))),
                    (c = t.name),
                    (u = t.format());
                } catch (l) {}
              break;
            }
          }
          return ae.throwError(
            "call revert exception" + o,
            s.Vy.errors.CALL_EXCEPTION,
            {
              method: e.format(),
              data: (0, n.c$)(t),
              errorArgs: a,
              errorName: c,
              errorSignature: u,
              reason: i,
            }
          );
        }
        encodeFunctionResult(e, t) {
          return (
            "string" === typeof e && (e = this.getFunction(e)),
            (0, n.c$)(this._abiCoder.encode(e.outputs, t || []))
          );
        }
        encodeFilterTopics(e, t) {
          "string" === typeof e && (e = this.getEvent(e)),
            t.length > e.inputs.length &&
              ae.throwError(
                "too many arguments for " + e.format(),
                s.Vy.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: t }
              );
          let r = [];
          e.anonymous || r.push(this.getEventTopic(e));
          const o = (e, t) =>
            "string" === e.type
              ? (0, d.id)(t)
              : "bytes" === e.type
              ? (0, p.S)((0, n.c$)(t))
              : ("bool" === e.type &&
                  "boolean" === typeof t &&
                  (t = t ? "0x01" : "0x00"),
                e.type.match(/^u?int/) && (t = i.gH.from(t).toHexString()),
                "address" === e.type && this._abiCoder.encode(["address"], [t]),
                (0, n.bj)((0, n.c$)(t), 32));
          for (
            t.forEach((t, n) => {
              let i = e.inputs[n];
              i.indexed
                ? null == t
                  ? r.push(null)
                  : "array" === i.baseType || "tuple" === i.baseType
                  ? ae.throwArgumentError(
                      "filtering with tuples or arrays not supported",
                      "contract." + i.name,
                      t
                    )
                  : Array.isArray(t)
                  ? r.push(t.map((e) => o(i, e)))
                  : r.push(o(i, t))
                : null != t &&
                  ae.throwArgumentError(
                    "cannot filter non-indexed parameters; must be null",
                    "contract." + i.name,
                    t
                  );
            });
            r.length && null === r[r.length - 1];

          )
            r.pop();
          return r;
        }
        encodeEventLog(e, t) {
          "string" === typeof e && (e = this.getEvent(e));
          const r = [],
            n = [],
            i = [];
          return (
            e.anonymous || r.push(this.getEventTopic(e)),
            t.length !== e.inputs.length &&
              ae.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                t
              ),
            e.inputs.forEach((e, o) => {
              const s = t[o];
              if (e.indexed)
                if ("string" === e.type) r.push((0, d.id)(s));
                else if ("bytes" === e.type) r.push((0, p.S)(s));
                else {
                  if ("tuple" === e.baseType || "array" === e.baseType)
                    throw new Error("not implemented");
                  r.push(this._abiCoder.encode([e.type], [s]));
                }
              else n.push(e), i.push(s);
            }),
            { data: this._abiCoder.encode(n, i), topics: r }
          );
        }
        decodeEventLog(e, t, r) {
          if (
            ("string" === typeof e && (e = this.getEvent(e)),
            null != r && !e.anonymous)
          ) {
            let t = this.getEventTopic(e);
            ((0, n.Lo)(r[0], 32) && r[0].toLowerCase() === t) ||
              ae.throwError(
                "fragment/topic mismatch",
                s.Vy.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: t, value: r[0] }
              ),
              (r = r.slice(1));
          }
          let i = [],
            o = [],
            a = [];
          e.inputs.forEach((e, t) => {
            e.indexed
              ? "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.baseType ||
                "array" === e.baseType
                ? (i.push(B.fromObject({ type: "bytes32", name: e.name })),
                  a.push(!0))
                : (i.push(e), a.push(!1))
              : (o.push(e), a.push(!1));
          });
          let c = null != r ? this._abiCoder.decode(i, (0, n.xW)(r)) : null,
            u = this._abiCoder.decode(o, t, !0),
            l = [],
            f = 0,
            h = 0;
          e.inputs.forEach((e, t) => {
            if (e.indexed)
              if (null == c) l[t] = new fe({ _isIndexed: !0, hash: null });
              else if (a[t]) l[t] = new fe({ _isIndexed: !0, hash: c[h++] });
              else
                try {
                  l[t] = c[h++];
                } catch (r) {
                  l[t] = r;
                }
            else
              try {
                l[t] = u[f++];
              } catch (r) {
                l[t] = r;
              }
            if (e.name && null == l[e.name]) {
              const r = l[t];
              r instanceof Error
                ? Object.defineProperty(l, e.name, {
                    enumerable: !0,
                    get: () => {
                      throw de(`property ${JSON.stringify(e.name)}`, r);
                    },
                  })
                : (l[e.name] = r);
            }
          });
          for (let n = 0; n < l.length; n++) {
            const e = l[n];
            e instanceof Error &&
              Object.defineProperty(l, n, {
                enumerable: !0,
                get: () => {
                  throw de(`index ${n}`, e);
                },
              });
          }
          return Object.freeze(l);
        }
        parseTransaction(e) {
          let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
          return t
            ? new ue({
                args: this._abiCoder.decode(
                  t.inputs,
                  "0x" + e.data.substring(10)
                ),
                functionFragment: t,
                name: t.name,
                signature: t.format(),
                sighash: this.getSighash(t),
                value: i.gH.from(e.value || "0"),
              })
            : null;
        }
        parseLog(e) {
          let t = this.getEvent(e.topics[0]);
          return !t || t.anonymous
            ? null
            : new ce({
                eventFragment: t,
                name: t.name,
                signature: t.format(),
                topic: this.getEventTopic(t),
                args: this.decodeEventLog(t, e.data, e.topics),
              });
        }
        parseError(e) {
          const t = (0, n.c$)(e);
          let r = this.getError(t.substring(0, 10).toLowerCase());
          return r
            ? new le({
                args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
                errorFragment: r,
                name: r.name,
                signature: r.format(),
                sighash: this.getSighash(r),
              })
            : null;
        }
        static isInterface(e) {
          return !(!e || !e._isInterface);
        }
      }
      var ge = r(76168),
        me = r(21517),
        ye = r(54249);
      var ve = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const be = new s.Vy("contracts/5.6.2"),
        we = {
          chainId: !0,
          data: !0,
          from: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          value: !0,
          type: !0,
          accessList: !0,
          maxFeePerGas: !0,
          maxPriorityFeePerGas: !0,
          customData: !0,
          ccipReadEnabled: !0,
        };
      function Ee(e, t) {
        return ve(this, void 0, void 0, function* () {
          const r = yield t;
          "string" !== typeof r &&
            be.throwArgumentError("invalid address or ENS name", "name", r);
          try {
            return (0, h.bv)(r);
          } catch (i) {}
          e ||
            be.throwError(
              "a provider or signer is needed to resolve ENS names",
              s.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "resolveName" }
            );
          const n = yield e.resolveName(r);
          return (
            null == n &&
              be.throwArgumentError(
                "resolver or addr is not configured for ENS name",
                "name",
                r
              ),
            n
          );
        });
      }
      function Ae(e, t, r) {
        return ve(this, void 0, void 0, function* () {
          return Array.isArray(r)
            ? yield Promise.all(
                r.map((r, n) => Ae(e, Array.isArray(t) ? t[n] : t[r.name], r))
              )
            : "address" === r.type
            ? yield Ee(e, t)
            : "tuple" === r.type
            ? yield Ae(e, t, r.components)
            : "array" === r.baseType
            ? Array.isArray(t)
              ? yield Promise.all(t.map((t) => Ae(e, t, r.arrayChildren)))
              : Promise.reject(
                  be.makeError(
                    "invalid value for array",
                    s.Vy.errors.INVALID_ARGUMENT,
                    { argument: "value", value: t }
                  )
                )
            : t;
        });
      }
      function Se(e, t, r) {
        return ve(this, void 0, void 0, function* () {
          let a = {};
          r.length === t.inputs.length + 1 &&
            "object" === typeof r[r.length - 1] &&
            (a = (0, o.Ic)(r.pop())),
            be.checkArgumentCount(
              r.length,
              t.inputs.length,
              "passed to contract"
            ),
            e.signer
              ? a.from
                ? (a.from = (0, o.k_)({
                    override: Ee(e.signer, a.from),
                    signer: e.signer.getAddress(),
                  }).then((e) =>
                    ve(this, void 0, void 0, function* () {
                      return (
                        (0, h.bv)(e.signer) !== e.override &&
                          be.throwError(
                            "Contract with a Signer cannot override from",
                            s.Vy.errors.UNSUPPORTED_OPERATION,
                            { operation: "overrides.from" }
                          ),
                        e.override
                      );
                    })
                  ))
                : (a.from = e.signer.getAddress())
              : a.from && (a.from = Ee(e.provider, a.from));
          const c = yield (0, o.k_)({
              args: Ae(e.signer || e.provider, r, t.inputs),
              address: e.resolvedAddress,
              overrides: (0, o.k_)(a) || {},
            }),
            u = e.interface.encodeFunctionData(t, c.args),
            l = { data: u, to: c.address },
            f = c.overrides;
          if (
            (null != f.nonce && (l.nonce = i.gH.from(f.nonce).toNumber()),
            null != f.gasLimit && (l.gasLimit = i.gH.from(f.gasLimit)),
            null != f.gasPrice && (l.gasPrice = i.gH.from(f.gasPrice)),
            null != f.maxFeePerGas &&
              (l.maxFeePerGas = i.gH.from(f.maxFeePerGas)),
            null != f.maxPriorityFeePerGas &&
              (l.maxPriorityFeePerGas = i.gH.from(f.maxPriorityFeePerGas)),
            null != f.from && (l.from = f.from),
            null != f.type && (l.type = f.type),
            null != f.accessList && (l.accessList = (0, ye.$2)(f.accessList)),
            null == l.gasLimit && null != t.gas)
          ) {
            let e = 21e3;
            const r = (0, n.k9)(u);
            for (let t = 0; t < r.length; t++) (e += 4), r[t] && (e += 64);
            l.gasLimit = i.gH.from(t.gas).add(e);
          }
          if (f.value) {
            const e = i.gH.from(f.value);
            e.isZero() ||
              t.payable ||
              be.throwError(
                "non-payable method cannot override value",
                s.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: a.value }
              ),
              (l.value = e);
          }
          f.customData && (l.customData = (0, o.Ic)(f.customData)),
            f.ccipReadEnabled && (l.ccipReadEnabled = !!f.ccipReadEnabled),
            delete a.nonce,
            delete a.gasLimit,
            delete a.gasPrice,
            delete a.from,
            delete a.value,
            delete a.type,
            delete a.accessList,
            delete a.maxFeePerGas,
            delete a.maxPriorityFeePerGas,
            delete a.customData,
            delete a.ccipReadEnabled;
          const d = Object.keys(a).filter((e) => null != a[e]);
          return (
            d.length &&
              be.throwError(
                `cannot override ${d.map((e) => JSON.stringify(e)).join(",")}`,
                s.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides", overrides: d }
              ),
            l
          );
        });
      }
      function Pe(e, t) {
        const r = t.wait.bind(t);
        t.wait = (t) =>
          r(t).then(
            (t) => (
              (t.events = t.logs.map((r) => {
                let n = (0, o.A4)(r),
                  i = null;
                try {
                  i = e.interface.parseLog(r);
                } catch (s) {}
                return (
                  i &&
                    ((n.args = i.args),
                    (n.decode = (t, r) =>
                      e.interface.decodeEventLog(i.eventFragment, t, r)),
                    (n.event = i.name),
                    (n.eventSignature = i.signature)),
                  (n.removeListener = () => e.provider),
                  (n.getBlock = () => e.provider.getBlock(t.blockHash)),
                  (n.getTransaction = () =>
                    e.provider.getTransaction(t.transactionHash)),
                  (n.getTransactionReceipt = () => Promise.resolve(t)),
                  n
                );
              })),
              t
            )
          );
      }
      function _e(e, t, r) {
        const n = e.signer || e.provider;
        return function () {
          for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
            a[c] = arguments[c];
          return ve(this, void 0, void 0, function* () {
            let i;
            if (
              a.length === t.inputs.length + 1 &&
              "object" === typeof a[a.length - 1]
            ) {
              const e = (0, o.Ic)(a.pop());
              null != e.blockTag && (i = yield e.blockTag),
                delete e.blockTag,
                a.push(e);
            }
            null != e.deployTransaction && (yield e._deployed(i));
            const c = yield Se(e, t, a),
              u = yield n.call(c, i);
            try {
              let n = e.interface.decodeFunctionResult(t, u);
              return r && 1 === t.outputs.length && (n = n[0]), n;
            } catch (l) {
              throw (
                (l.code === s.Vy.errors.CALL_EXCEPTION &&
                  ((l.address = e.address), (l.args = a), (l.transaction = c)),
                l)
              );
            }
          });
        };
      }
      function xe(e, t, r) {
        return t.constant
          ? _e(e, t, r)
          : (function (e, t) {
              return function () {
                for (
                  var r = arguments.length, n = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  n[i] = arguments[i];
                return ve(this, void 0, void 0, function* () {
                  e.signer ||
                    be.throwError(
                      "sending a transaction requires a signer",
                      s.Vy.errors.UNSUPPORTED_OPERATION,
                      { operation: "sendTransaction" }
                    ),
                    null != e.deployTransaction && (yield e._deployed());
                  const r = yield Se(e, t, n),
                    i = yield e.signer.sendTransaction(r);
                  return Pe(e, i), i;
                });
              };
            })(e, t);
      }
      function Ie(e) {
        return !e.address || (null != e.topics && 0 !== e.topics.length)
          ? (e.address || "*") +
              "@" +
              (e.topics
                ? e.topics
                    .map((e) => (Array.isArray(e) ? e.join("|") : e))
                    .join(":")
                : "")
          : "*";
      }
      class ke {
        constructor(e, t) {
          (0, o.yY)(this, "tag", e),
            (0, o.yY)(this, "filter", t),
            (this._listeners = []);
        }
        addListener(e, t) {
          this._listeners.push({ listener: e, once: t });
        }
        removeListener(e) {
          let t = !1;
          this._listeners = this._listeners.filter(
            (r) => !(!t && r.listener === e) || ((t = !0), !1)
          );
        }
        removeAllListeners() {
          this._listeners = [];
        }
        listeners() {
          return this._listeners.map((e) => e.listener);
        }
        listenerCount() {
          return this._listeners.length;
        }
        run(e) {
          const t = this.listenerCount();
          return (
            (this._listeners = this._listeners.filter((t) => {
              const r = e.slice();
              return (
                setTimeout(() => {
                  t.listener.apply(this, r);
                }, 0),
                !t.once
              );
            })),
            t
          );
        }
        prepareEvent(e) {}
        getEmit(e) {
          return [e];
        }
      }
      class Ce extends ke {
        constructor() {
          super("error", null);
        }
      }
      class Re extends ke {
        constructor(e, t, r, n) {
          const i = { address: e };
          let s = t.getEventTopic(r);
          n
            ? (s !== n[0] &&
                be.throwArgumentError("topic mismatch", "topics", n),
              (i.topics = n.slice()))
            : (i.topics = [s]),
            super(Ie(i), i),
            (0, o.yY)(this, "address", e),
            (0, o.yY)(this, "interface", t),
            (0, o.yY)(this, "fragment", r);
        }
        prepareEvent(e) {
          super.prepareEvent(e),
            (e.event = this.fragment.name),
            (e.eventSignature = this.fragment.format()),
            (e.decode = (e, t) =>
              this.interface.decodeEventLog(this.fragment, e, t));
          try {
            e.args = this.interface.decodeEventLog(
              this.fragment,
              e.data,
              e.topics
            );
          } catch (t) {
            (e.args = null), (e.decodeError = t);
          }
        }
        getEmit(e) {
          const t = (function (e) {
            const t = [],
              r = function (e, n) {
                if (Array.isArray(n))
                  for (let o in n) {
                    const s = e.slice();
                    s.push(o);
                    try {
                      r(s, n[o]);
                    } catch (i) {
                      t.push({ path: s, error: i });
                    }
                  }
              };
            return r([], e), t;
          })(e.args);
          if (t.length) throw t[0].error;
          const r = (e.args || []).slice();
          return r.push(e), r;
        }
      }
      class Te extends ke {
        constructor(e, t) {
          super("*", { address: e }),
            (0, o.yY)(this, "address", e),
            (0, o.yY)(this, "interface", t);
        }
        prepareEvent(e) {
          super.prepareEvent(e);
          try {
            const t = this.interface.parseLog(e);
            (e.event = t.name),
              (e.eventSignature = t.signature),
              (e.decode = (e, r) =>
                this.interface.decodeEventLog(t.eventFragment, e, r)),
              (e.args = t.args);
          } catch (t) {}
        }
      }
      class Ne {
        constructor(e, t, r) {
          var n = this;
          (0, o.yY)(
            this,
            "interface",
            (0, o.$J)(new.target, "getInterface")(t)
          ),
            null == r
              ? ((0, o.yY)(this, "provider", null),
                (0, o.yY)(this, "signer", null))
              : me.l.isSigner(r)
              ? ((0, o.yY)(this, "provider", r.provider || null),
                (0, o.yY)(this, "signer", r))
              : ge.Kq.isProvider(r)
              ? ((0, o.yY)(this, "provider", r),
                (0, o.yY)(this, "signer", null))
              : be.throwArgumentError(
                  "invalid signer or provider",
                  "signerOrProvider",
                  r
                ),
            (0, o.yY)(this, "callStatic", {}),
            (0, o.yY)(this, "estimateGas", {}),
            (0, o.yY)(this, "functions", {}),
            (0, o.yY)(this, "populateTransaction", {}),
            (0, o.yY)(this, "filters", {});
          {
            const e = {};
            Object.keys(this.interface.events).forEach((t) => {
              const r = this.interface.events[t];
              (0, o.yY)(this.filters, t, function () {
                for (
                  var e = arguments.length, t = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  t[i] = arguments[i];
                return {
                  address: n.address,
                  topics: n.interface.encodeFilterTopics(r, t),
                };
              }),
                e[r.name] || (e[r.name] = []),
                e[r.name].push(t);
            }),
              Object.keys(e).forEach((t) => {
                const r = e[t];
                1 === r.length
                  ? (0, o.yY)(this.filters, t, this.filters[r[0]])
                  : be.warn(`Duplicate definition of ${t} (${r.join(", ")})`);
              });
          }
          if (
            ((0, o.yY)(this, "_runningEvents", {}),
            (0, o.yY)(this, "_wrappedEmits", {}),
            null == e &&
              be.throwArgumentError(
                "invalid contract address or ENS name",
                "addressOrName",
                e
              ),
            (0, o.yY)(this, "address", e),
            this.provider)
          )
            (0, o.yY)(this, "resolvedAddress", Ee(this.provider, e));
          else
            try {
              (0, o.yY)(this, "resolvedAddress", Promise.resolve((0, h.bv)(e)));
            } catch (c) {
              be.throwError(
                "provider is required to use ENS name as contract address",
                s.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: "new Contract" }
              );
            }
          this.resolvedAddress.catch((e) => {});
          const i = {},
            a = {};
          Object.keys(this.interface.functions).forEach((e) => {
            const t = this.interface.functions[e];
            if (a[e]) be.warn(`Duplicate ABI entry for ${JSON.stringify(e)}`);
            else {
              a[e] = !0;
              {
                const r = t.name;
                i[`%${r}`] || (i[`%${r}`] = []), i[`%${r}`].push(e);
              }
              null == this[e] && (0, o.yY)(this, e, xe(this, t, !0)),
                null == this.functions[e] &&
                  (0, o.yY)(this.functions, e, xe(this, t, !1)),
                null == this.callStatic[e] &&
                  (0, o.yY)(this.callStatic, e, _e(this, t, !0)),
                null == this.populateTransaction[e] &&
                  (0, o.yY)(
                    this.populateTransaction,
                    e,
                    (function (e, t) {
                      return function () {
                        for (
                          var r = arguments.length, n = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          n[i] = arguments[i];
                        return Se(e, t, n);
                      };
                    })(this, t)
                  ),
                null == this.estimateGas[e] &&
                  (0, o.yY)(
                    this.estimateGas,
                    e,
                    (function (e, t) {
                      const r = e.signer || e.provider;
                      return function () {
                        for (
                          var n = arguments.length, i = new Array(n), o = 0;
                          o < n;
                          o++
                        )
                          i[o] = arguments[o];
                        return ve(this, void 0, void 0, function* () {
                          r ||
                            be.throwError(
                              "estimate require a provider or signer",
                              s.Vy.errors.UNSUPPORTED_OPERATION,
                              { operation: "estimateGas" }
                            );
                          const n = yield Se(e, t, i);
                          return yield r.estimateGas(n);
                        });
                      };
                    })(this, t)
                  );
            }
          }),
            Object.keys(i).forEach((e) => {
              const t = i[e];
              if (t.length > 1) return;
              e = e.substring(1);
              const r = t[0];
              try {
                null == this[e] && (0, o.yY)(this, e, this[r]);
              } catch (n) {}
              null == this.functions[e] &&
                (0, o.yY)(this.functions, e, this.functions[r]),
                null == this.callStatic[e] &&
                  (0, o.yY)(this.callStatic, e, this.callStatic[r]),
                null == this.populateTransaction[e] &&
                  (0, o.yY)(
                    this.populateTransaction,
                    e,
                    this.populateTransaction[r]
                  ),
                null == this.estimateGas[e] &&
                  (0, o.yY)(this.estimateGas, e, this.estimateGas[r]);
            });
        }
        static getContractAddress(e) {
          return (0, h.RZ)(e);
        }
        static getInterface(e) {
          return pe.isInterface(e) ? e : new pe(e);
        }
        deployed() {
          return this._deployed();
        }
        _deployed(e) {
          return (
            this._deployedPromise ||
              (this.deployTransaction
                ? (this._deployedPromise = this.deployTransaction
                    .wait()
                    .then(() => this))
                : (this._deployedPromise = this.provider
                    .getCode(this.address, e)
                    .then(
                      (e) => (
                        "0x" === e &&
                          be.throwError(
                            "contract not deployed",
                            s.Vy.errors.UNSUPPORTED_OPERATION,
                            {
                              contractAddress: this.address,
                              operation: "getDeployed",
                            }
                          ),
                        this
                      )
                    ))),
            this._deployedPromise
          );
        }
        fallback(e) {
          this.signer ||
            be.throwError(
              "sending a transactions require a signer",
              s.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "sendTransaction(fallback)" }
            );
          const t = (0, o.Ic)(e || {});
          return (
            ["from", "to"].forEach(function (e) {
              null != t[e] &&
                be.throwError(
                  "cannot override " + e,
                  s.Vy.errors.UNSUPPORTED_OPERATION,
                  { operation: e }
                );
            }),
            (t.to = this.resolvedAddress),
            this.deployed().then(() => this.signer.sendTransaction(t))
          );
        }
        connect(e) {
          "string" === typeof e && (e = new me.J(e, this.provider));
          const t = new this.constructor(this.address, this.interface, e);
          return (
            this.deployTransaction &&
              (0, o.yY)(t, "deployTransaction", this.deployTransaction),
            t
          );
        }
        attach(e) {
          return new this.constructor(
            e,
            this.interface,
            this.signer || this.provider
          );
        }
        static isIndexed(e) {
          return fe.isIndexed(e);
        }
        _normalizeRunningEvent(e) {
          return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
        }
        _getRunningEvent(e) {
          if ("string" === typeof e) {
            if ("error" === e) return this._normalizeRunningEvent(new Ce());
            if ("event" === e)
              return this._normalizeRunningEvent(new ke("event", null));
            if ("*" === e)
              return this._normalizeRunningEvent(
                new Te(this.address, this.interface)
              );
            const t = this.interface.getEvent(e);
            return this._normalizeRunningEvent(
              new Re(this.address, this.interface, t)
            );
          }
          if (e.topics && e.topics.length > 0) {
            try {
              const t = e.topics[0];
              if ("string" !== typeof t) throw new Error("invalid topic");
              const r = this.interface.getEvent(t);
              return this._normalizeRunningEvent(
                new Re(this.address, this.interface, r, e.topics)
              );
            } catch (t) {}
            const r = { address: this.address, topics: e.topics };
            return this._normalizeRunningEvent(new ke(Ie(r), r));
          }
          return this._normalizeRunningEvent(
            new Te(this.address, this.interface)
          );
        }
        _checkRunningEvents(e) {
          if (0 === e.listenerCount()) {
            delete this._runningEvents[e.tag];
            const t = this._wrappedEmits[e.tag];
            t &&
              e.filter &&
              (this.provider.off(e.filter, t),
              delete this._wrappedEmits[e.tag]);
          }
        }
        _wrapEvent(e, t, r) {
          const n = (0, o.A4)(t);
          return (
            (n.removeListener = () => {
              r && (e.removeListener(r), this._checkRunningEvents(e));
            }),
            (n.getBlock = () => this.provider.getBlock(t.blockHash)),
            (n.getTransaction = () =>
              this.provider.getTransaction(t.transactionHash)),
            (n.getTransactionReceipt = () =>
              this.provider.getTransactionReceipt(t.transactionHash)),
            e.prepareEvent(n),
            n
          );
        }
        _addEventListener(e, t, r) {
          if (
            (this.provider ||
              be.throwError(
                "events require a provider or a signer with a provider",
                s.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: "once" }
              ),
            e.addListener(t, r),
            (this._runningEvents[e.tag] = e),
            !this._wrappedEmits[e.tag])
          ) {
            const r = (r) => {
              let n = this._wrapEvent(e, r, t);
              if (null == n.decodeError)
                try {
                  const t = e.getEmit(n);
                  this.emit(e.filter, ...t);
                } catch (i) {
                  n.decodeError = i.error;
                }
              null != e.filter && this.emit("event", n),
                null != n.decodeError && this.emit("error", n.decodeError, n);
            };
            (this._wrappedEmits[e.tag] = r),
              null != e.filter && this.provider.on(e.filter, r);
          }
        }
        queryFilter(e, t, r) {
          const i = this._getRunningEvent(e),
            s = (0, o.Ic)(i.filter);
          return (
            "string" === typeof t && (0, n.Lo)(t, 32)
              ? (null != r &&
                  be.throwArgumentError(
                    "cannot specify toBlock with blockhash",
                    "toBlock",
                    r
                  ),
                (s.blockHash = t))
              : ((s.fromBlock = null != t ? t : 0),
                (s.toBlock = null != r ? r : "latest")),
            this.provider
              .getLogs(s)
              .then((e) => e.map((e) => this._wrapEvent(i, e, null)))
          );
        }
        on(e, t) {
          return this._addEventListener(this._getRunningEvent(e), t, !1), this;
        }
        once(e, t) {
          return this._addEventListener(this._getRunningEvent(e), t, !0), this;
        }
        emit(e) {
          if (!this.provider) return !1;
          const t = this._getRunningEvent(e);
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          const o = t.run(n) > 0;
          return this._checkRunningEvents(t), o;
        }
        listenerCount(e) {
          return this.provider
            ? null == e
              ? Object.keys(this._runningEvents).reduce(
                  (e, t) => e + this._runningEvents[t].listenerCount(),
                  0
                )
              : this._getRunningEvent(e).listenerCount()
            : 0;
        }
        listeners(e) {
          if (!this.provider) return [];
          if (null == e) {
            const e = [];
            for (let t in this._runningEvents)
              this._runningEvents[t].listeners().forEach((t) => {
                e.push(t);
              });
            return e;
          }
          return this._getRunningEvent(e).listeners();
        }
        removeAllListeners(e) {
          if (!this.provider) return this;
          if (null == e) {
            for (const e in this._runningEvents) {
              const t = this._runningEvents[e];
              t.removeAllListeners(), this._checkRunningEvents(t);
            }
            return this;
          }
          const t = this._getRunningEvent(e);
          return t.removeAllListeners(), this._checkRunningEvents(t), this;
        }
        off(e, t) {
          if (!this.provider) return this;
          const r = this._getRunningEvent(e);
          return r.removeListener(t), this._checkRunningEvents(r), this;
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
      }
      class Oe extends Ne {}
      class Fe {
        constructor(e, t, r) {
          let i = null;
          (i =
            "string" === typeof t
              ? t
              : (0, n.aY)(t)
              ? (0, n.c$)(t)
              : t && "string" === typeof t.object
              ? t.object
              : "!"),
            "0x" !== i.substring(0, 2) && (i = "0x" + i),
            (!(0, n.Lo)(i) || i.length % 2) &&
              be.throwArgumentError("invalid bytecode", "bytecode", t),
            r &&
              !me.l.isSigner(r) &&
              be.throwArgumentError("invalid signer", "signer", r),
            (0, o.yY)(this, "bytecode", i),
            (0, o.yY)(
              this,
              "interface",
              (0, o.$J)(new.target, "getInterface")(e)
            ),
            (0, o.yY)(this, "signer", r || null);
        }
        getDeployTransaction() {
          let e = {};
          for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
            r[a] = arguments[a];
          if (
            r.length === this.interface.deploy.inputs.length + 1 &&
            "object" === typeof r[r.length - 1]
          ) {
            e = (0, o.Ic)(r.pop());
            for (const t in e)
              if (!we[t]) throw new Error("unknown transaction override " + t);
          }
          if (
            (["data", "from", "to"].forEach((t) => {
              null != e[t] &&
                be.throwError(
                  "cannot override " + t,
                  s.Vy.errors.UNSUPPORTED_OPERATION,
                  { operation: t }
                );
            }),
            e.value)
          ) {
            i.gH.from(e.value).isZero() ||
              this.interface.deploy.payable ||
              be.throwError(
                "non-payable constructor cannot override value",
                s.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: e.value }
              );
          }
          return (
            be.checkArgumentCount(
              r.length,
              this.interface.deploy.inputs.length,
              " in Contract constructor"
            ),
            (e.data = (0, n.c$)(
              (0, n.xW)([this.bytecode, this.interface.encodeDeploy(r)])
            )),
            e
          );
        }
        deploy() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return ve(this, void 0, void 0, function* () {
            let e = {};
            t.length === this.interface.deploy.inputs.length + 1 &&
              (e = t.pop()),
              be.checkArgumentCount(
                t.length,
                this.interface.deploy.inputs.length,
                " in Contract constructor"
              );
            const r = yield Ae(this.signer, t, this.interface.deploy.inputs);
            r.push(e);
            const n = this.getDeployTransaction(...r),
              i = yield this.signer.sendTransaction(n),
              s = (0, o.$J)(this.constructor, "getContractAddress")(i),
              a = (0, o.$J)(this.constructor, "getContract")(
                s,
                this.interface,
                this.signer
              );
            return Pe(a, i), (0, o.yY)(a, "deployTransaction", i), a;
          });
        }
        attach(e) {
          return this.constructor.getContract(e, this.interface, this.signer);
        }
        connect(e) {
          return new this.constructor(this.interface, this.bytecode, e);
        }
        static fromSolidity(e, t) {
          null == e &&
            be.throwError(
              "missing compiler output",
              s.Vy.errors.MISSING_ARGUMENT,
              { argument: "compilerOutput" }
            ),
            "string" === typeof e && (e = JSON.parse(e));
          const r = e.abi;
          let n = null;
          return (
            e.bytecode
              ? (n = e.bytecode)
              : e.evm && e.evm.bytecode && (n = e.evm.bytecode),
            new this(r, n, t)
          );
        }
        static getInterface(e) {
          return Oe.getInterface(e);
        }
        static getContractAddress(e) {
          return (0, h.RZ)(e);
        }
        static getContract(e, t, r) {
          return new Oe(e, t, r);
        }
      }
    },
    44898: (e, t, r) => {
      r.d(t, { L5: () => f, HE: () => u, sc: () => l });
      var n = r(16143),
        i = r.n(n),
        o = r(66133),
        s = r(91001),
        a = r(54334);
      const c = new a.Vy("sha2/5.8.0");
      function u(e) {
        return (
          "0x" +
          i()
            .ripemd160()
            .update((0, o.k9)(e))
            .digest("hex")
        );
      }
      function l(e) {
        return (
          "0x" +
          i()
            .sha256()
            .update((0, o.k9)(e))
            .digest("hex")
        );
      }
      function f(e, t, r) {
        return (
          s.q[e] ||
            c.throwError(
              "unsupported algorithm " + e,
              a.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: e }
            ),
          "0x" +
            i()
              .hmac(i()[e], (0, o.k9)(t))
              .update((0, o.k9)(r))
              .digest("hex")
        );
      }
    },
    51837: (e, t, r) => {
      r.d(t, { cZ: () => i });
      var n = r(83404);
      function i(e) {
        if (
          (function (e) {
            let t = null;
            try {
              t = JSON.parse(e);
            } catch (r) {
              return !1;
            }
            return t.encseed && t.ethaddr;
          })(e)
        )
          try {
            return (0, n.bv)(JSON.parse(e).ethaddr);
          } catch (t) {
            return null;
          }
        if (
          (function (e) {
            let r = null;
            try {
              r = JSON.parse(e);
            } catch (t) {
              return !1;
            }
            return !(
              !r.version ||
              parseInt(r.version) !== r.version ||
              3 !== parseInt(r.version)
            );
          })(e)
        )
          try {
            return (0, n.bv)(JSON.parse(e).address);
          } catch (t) {
            return null;
          }
        return null;
      }
    },
    54249: (e, t, r) => {
      r.d(t, { $2: () => b, Kt: () => g, x_: () => m, lK: () => S });
      var n = r(83404),
        i = r(4099),
        o = r(66133),
        s = r(54573),
        a = r(63853),
        c = r(94994),
        u = r(70801),
        l = r(54334);
      const f = new l.Vy("transactions/5.8.0");
      var h;
      !(function (e) {
        (e[(e.legacy = 0)] = "legacy"),
          (e[(e.eip2930 = 1)] = "eip2930"),
          (e[(e.eip1559 = 2)] = "eip1559");
      })(h || (h = {}));
      const d = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        p = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function g(e) {
        const t = (0, u.uN)(e);
        return (0, n.bv)((0, o.Ab)((0, s.S)((0, o.Ab)(t, 1)), 12));
      }
      function m(e, t) {
        return g((0, u.jL)((0, o.k9)(e), t));
      }
      function y(e, t) {
        const r = (0, o.gr)(i.gH.from(e).toHexString());
        return (
          r.length > 32 &&
            f.throwArgumentError(
              "invalid length for " + t,
              "transaction:" + t,
              e
            ),
          r
        );
      }
      function v(e, t) {
        return {
          address: (0, n.bv)(e),
          storageKeys: (t || []).map(
            (t, r) => (
              32 !== (0, o.cm)(t) &&
                f.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${e}:${r}]`,
                  t
                ),
              t.toLowerCase()
            )
          ),
        };
      }
      function b(e) {
        if (Array.isArray(e))
          return e.map((e, t) =>
            Array.isArray(e)
              ? (e.length > 2 &&
                  f.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${t}]`,
                    e
                  ),
                v(e[0], e[1]))
              : v(e.address, e.storageKeys)
          );
        const t = Object.keys(e).map((t) => {
          const r = e[t].reduce((e, t) => ((e[t] = !0), e), {});
          return v(t, Object.keys(r).sort());
        });
        return t.sort((e, t) => e.address.localeCompare(t.address)), t;
      }
      function w(e) {
        return b(e).map((e) => [e.address, e.storageKeys]);
      }
      function E(e, t) {
        if (null != e.gasPrice) {
          const t = i.gH.from(e.gasPrice),
            r = i.gH.from(e.maxFeePerGas || 0);
          t.eq(r) ||
            f.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: t, maxFeePerGas: r }
            );
        }
        const r = [
          y(e.chainId || 0, "chainId"),
          y(e.nonce || 0, "nonce"),
          y(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          y(e.maxFeePerGas || 0, "maxFeePerGas"),
          y(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, n.bv)(e.to) : "0x",
          y(e.value || 0, "value"),
          e.data || "0x",
          w(e.accessList || []),
        ];
        if (t) {
          const e = (0, o.Pc)(t);
          r.push(y(e.recoveryParam, "recoveryParam")),
            r.push((0, o.gr)(e.r)),
            r.push((0, o.gr)(e.s));
        }
        return (0, o.qn)(["0x02", c.l(r)]);
      }
      function A(e, t) {
        const r = [
          y(e.chainId || 0, "chainId"),
          y(e.nonce || 0, "nonce"),
          y(e.gasPrice || 0, "gasPrice"),
          y(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, n.bv)(e.to) : "0x",
          y(e.value || 0, "value"),
          e.data || "0x",
          w(e.accessList || []),
        ];
        if (t) {
          const e = (0, o.Pc)(t);
          r.push(y(e.recoveryParam, "recoveryParam")),
            r.push((0, o.gr)(e.r)),
            r.push((0, o.gr)(e.s));
        }
        return (0, o.qn)(["0x01", c.l(r)]);
      }
      function S(e, t) {
        if (null == e.type || 0 === e.type)
          return (
            null != e.accessList &&
              f.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                e
              ),
            (function (e, t) {
              (0, a.qN)(e, p);
              const r = [];
              d.forEach(function (t) {
                let n = e[t.name] || [];
                const i = {};
                t.numeric && (i.hexPad = "left"),
                  (n = (0, o.k9)((0, o.c$)(n, i))),
                  t.length &&
                    n.length !== t.length &&
                    n.length > 0 &&
                    f.throwArgumentError(
                      "invalid length for " + t.name,
                      "transaction:" + t.name,
                      n
                    ),
                  t.maxLength &&
                    ((n = (0, o.gr)(n)),
                    n.length > t.maxLength &&
                      f.throwArgumentError(
                        "invalid length for " + t.name,
                        "transaction:" + t.name,
                        n
                      )),
                  r.push((0, o.c$)(n));
              });
              let n = 0;
              if (
                (null != e.chainId
                  ? ((n = e.chainId),
                    "number" !== typeof n &&
                      f.throwArgumentError(
                        "invalid transaction.chainId",
                        "transaction",
                        e
                      ))
                  : t &&
                    !(0, o.f)(t) &&
                    t.v > 28 &&
                    (n = Math.floor((t.v - 35) / 2)),
                0 !== n && (r.push((0, o.c$)(n)), r.push("0x"), r.push("0x")),
                !t)
              )
                return c.l(r);
              const i = (0, o.Pc)(t);
              let s = 27 + i.recoveryParam;
              return (
                0 !== n
                  ? (r.pop(),
                    r.pop(),
                    r.pop(),
                    (s += 2 * n + 8),
                    i.v > 28 &&
                      i.v !== s &&
                      f.throwArgumentError(
                        "transaction.chainId/signature.v mismatch",
                        "signature",
                        t
                      ))
                  : i.v !== s &&
                    f.throwArgumentError(
                      "transaction.chainId/signature.v mismatch",
                      "signature",
                      t
                    ),
                r.push((0, o.c$)(s)),
                r.push((0, o.gr)((0, o.k9)(i.r))),
                r.push((0, o.gr)((0, o.k9)(i.s))),
                c.l(r)
              );
            })(e, t)
          );
        switch (e.type) {
          case 1:
            return A(e, t);
          case 2:
            return E(e, t);
        }
        return f.throwError(
          `unsupported transaction type: ${e.type}`,
          l.Vy.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: e.type }
        );
      }
    },
    54334: (e, t, r) => {
      r.d(t, { Vy: () => h });
      let n = !1,
        i = !1;
      const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = o.default,
        a = null;
      const c = (function () {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
              try {
                if ("test" !== "test".normalize(t))
                  throw new Error("bad normalize");
              } catch (r) {
                e.push(t);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      })();
      var u, l;
      !(function (e) {
        (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARNING = "WARNING"),
          (e.ERROR = "ERROR"),
          (e.OFF = "OFF");
      })(u || (u = {})),
        (function (e) {
          (e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (e.NETWORK_ERROR = "NETWORK_ERROR"),
            (e.SERVER_ERROR = "SERVER_ERROR"),
            (e.TIMEOUT = "TIMEOUT"),
            (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (e.MISSING_NEW = "MISSING_NEW"),
            (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (e.ACTION_REJECTED = "ACTION_REJECTED");
        })(l || (l = {}));
      const f = "0123456789abcdef";
      class h {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, t) {
          const r = e.toLowerCase();
          null == o[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            s > o[r] || console.log.apply(console, t);
        }
        debug() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this._log(h.levels.DEBUG, t);
        }
        info() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this._log(h.levels.INFO, t);
        }
        warn() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this._log(h.levels.WARNING, t);
        }
        makeError(e, t, r) {
          if (i) return this.makeError("censored error", t, {});
          t || (t = h.errors.UNKNOWN_ERROR), r || (r = {});
          const n = [];
          Object.keys(r).forEach((e) => {
            const t = r[e];
            try {
              if (t instanceof Uint8Array) {
                let r = "";
                for (let e = 0; e < t.length; e++)
                  (r += f[t[e] >> 4]), (r += f[15 & t[e]]);
                n.push(e + "=Uint8Array(0x" + r + ")");
              } else n.push(e + "=" + JSON.stringify(t));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(r[e].toString()));
            }
          }),
            n.push(`code=${t}`),
            n.push(`version=${this.version}`);
          const o = e;
          let s = "";
          switch (t) {
            case l.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const t = e;
              switch (t) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + t;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case l.CALL_EXCEPTION:
            case l.INSUFFICIENT_FUNDS:
            case l.MISSING_NEW:
            case l.NONCE_EXPIRED:
            case l.REPLACEMENT_UNDERPRICED:
            case l.TRANSACTION_REPLACED:
            case l.UNPREDICTABLE_GAS_LIMIT:
              s = t;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          const a = new Error(e);
          return (
            (a.reason = o),
            (a.code = t),
            Object.keys(r).forEach(function (e) {
              a[e] = r[e];
            }),
            a
          );
        }
        throwError(e, t, r) {
          throw this.makeError(e, t, r);
        }
        throwArgumentError(e, t, r) {
          return this.throwError(e, h.errors.INVALID_ARGUMENT, {
            argument: t,
            value: r,
          });
        }
        assert(e, t, r, n) {
          e || this.throwError(t, r, n);
        }
        assertArgument(e, t, r, n) {
          e || this.throwArgumentError(t, r, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            c &&
              this.throwError(
                "platform missing String.prototype.normalize",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: c }
              );
        }
        checkSafeUint53(e, t) {
          "number" === typeof e &&
            (null == t && (t = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(t, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(t, h.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, t, r) {
          (r = r ? ": " + r : ""),
            e < t &&
              this.throwError(
                "missing argument" + r,
                h.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: t }
              ),
            e > t &&
              this.throwError(
                "too many arguments" + r,
                h.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: t }
              );
        }
        checkNew(e, t) {
          (e !== Object && null != e) ||
            this.throwError("missing new", h.errors.MISSING_NEW, {
              name: t.name,
            });
        }
        checkAbstract(e, t) {
          e === t
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(t.name) +
                  " directly; use a sub-class",
                h.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", h.errors.MISSING_NEW, {
                name: t.name,
              });
        }
        static globalLogger() {
          return a || (a = new h("logger/5.8.0")), a;
        }
        static setCensorship(e, t) {
          if (
            (!e &&
              t &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                h.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            n)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              h.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (i = !!e), (n = !!t);
        }
        static setLogLevel(e) {
          const t = o[e.toLowerCase()];
          null != t
            ? (s = t)
            : h.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new h(e);
        }
      }
      (h.errors = l), (h.levels = u);
    },
    54573: (e, t, r) => {
      r.d(t, { S: () => s });
      var n = r(12379),
        i = r.n(n),
        o = r(66133);
      function s(e) {
        return "0x" + i().keccak_256((0, o.k9)(e));
      }
    },
    62023: (e, t, r) => {
      r.d(t, { id: () => o });
      var n = r(54573),
        i = r(71454);
      function o(e) {
        return (0, n.S)((0, i.YW)(e));
      }
    },
    63853: (e, t, r) => {
      r.d(t, {
        VY: () => g,
        qN: () => u,
        A4: () => p,
        yY: () => s,
        $J: () => a,
        k_: () => c,
        Ic: () => l,
      });
      var n = r(54334);
      var i = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const o = new n.Vy("properties/5.8.0");
      function s(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      function a(e, t) {
        for (let r = 0; r < 32; r++) {
          if (e[t]) return e[t];
          if (!e.prototype || "object" !== typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function c(e) {
        return i(this, void 0, void 0, function* () {
          const t = Object.keys(e).map((t) => {
            const r = e[t];
            return Promise.resolve(r).then((e) => ({ key: t, value: e }));
          });
          return (yield Promise.all(t)).reduce(
            (e, t) => ((e[t.key] = t.value), e),
            {}
          );
        });
      }
      function u(e, t) {
        (e && "object" === typeof e) ||
          o.throwArgumentError("invalid object", "object", e),
          Object.keys(e).forEach((r) => {
            t[r] ||
              o.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                e
              );
          });
      }
      function l(e) {
        const t = {};
        for (const r in e) t[r] = e[r];
        return t;
      }
      const f = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function h(e) {
        if (void 0 === e || null === e || f[typeof e]) return !0;
        if (Array.isArray(e) || "object" === typeof e) {
          if (!Object.isFrozen(e)) return !1;
          const r = Object.keys(e);
          for (let n = 0; n < r.length; n++) {
            let i = null;
            try {
              i = e[r[n]];
            } catch (t) {
              continue;
            }
            if (!h(i)) return !1;
          }
          return !0;
        }
        return o.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function d(e) {
        if (h(e)) return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => p(e)));
        if ("object" === typeof e) {
          const t = {};
          for (const r in e) {
            const n = e[r];
            void 0 !== n && s(t, r, p(n));
          }
          return t;
        }
        return o.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function p(e) {
        return d(e);
      }
      class g {
        constructor(e) {
          for (const t in e) this[t] = p(e[t]);
        }
      }
    },
    66133: (e, t, r) => {
      r.d(t, {
        k9: () => u,
        xW: () => l,
        qn: () => v,
        cm: () => m,
        Ab: () => y,
        bj: () => b,
        c$: () => g,
        aY: () => c,
        f: () => s,
        Lo: () => d,
        FU: () => E,
        Pc: () => w,
        gr: () => f,
        e8: () => h,
      });
      const n = new (r(54334).Vy)("bytes/5.8.0");
      function i(e) {
        return !!e.toHexString;
      }
      function o(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const t = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(e, t)));
            }),
          e
        );
      }
      function s(e) {
        return (d(e) && !(e.length % 2)) || c(e);
      }
      function a(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function c(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!a(e.length) || e.length < 0) return !1;
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function u(e, t) {
        if ((t || (t = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid arrayify value");
          const t = [];
          for (; e; ) t.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === t.length && t.push(0), o(new Uint8Array(t));
        }
        if (
          (t.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e) && (e = e.toHexString()),
          d(e))
        ) {
          let r = e.substring(2);
          r.length % 2 &&
            ("left" === t.hexPad
              ? (r = "0" + r)
              : "right" === t.hexPad
              ? (r += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          const i = [];
          for (let e = 0; e < r.length; e += 2)
            i.push(parseInt(r.substring(e, e + 2), 16));
          return o(new Uint8Array(i));
        }
        return c(e)
          ? o(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function l(e) {
        const t = e.map((e) => u(e)),
          r = t.reduce((e, t) => e + t.length, 0),
          n = new Uint8Array(r);
        return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), o(n);
      }
      function f(e) {
        let t = u(e);
        if (0 === t.length) return t;
        let r = 0;
        for (; r < t.length && 0 === t[r]; ) r++;
        return r && (t = t.slice(r)), t;
      }
      function h(e, t) {
        (e = u(e)).length > t &&
          n.throwArgumentError("value out of range", "value", arguments[0]);
        const r = new Uint8Array(t);
        return r.set(e, t - e.length), o(r);
      }
      function d(e, t) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!t || e.length === 2 + 2 * t)
        );
      }
      const p = "0123456789abcdef";
      function g(e, t) {
        if ((t || (t = {}), "number" === typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let t = "";
          for (; e; ) (t = p[15 & e] + t), (e = Math.floor(e / 16));
          return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
        }
        if ("bigint" === typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (t.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e))
        )
          return e.toHexString();
        if (d(e))
          return (
            e.length % 2 &&
              ("left" === t.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === t.hexPad
                ? (e += "0")
                : n.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (c(e)) {
          let t = "0x";
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            t += p[(240 & n) >> 4] + p[15 & n];
          }
          return t;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
      function m(e) {
        if ("string" !== typeof e) e = g(e);
        else if (!d(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function y(e, t, r) {
        return (
          "string" !== typeof e
            ? (e = g(e))
            : (!d(e) || e.length % 2) &&
              n.throwArgumentError("invalid hexData", "value", e),
          (t = 2 + 2 * t),
          null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
        );
      }
      function v(e) {
        let t = "0x";
        return (
          e.forEach((e) => {
            t += g(e).substring(2);
          }),
          t
        );
      }
      function b(e, t) {
        for (
          "string" !== typeof e
            ? (e = g(e))
            : d(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * t + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * t + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
      function w(e) {
        const t = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (s(e)) {
          let r = u(e);
          64 === r.length
            ? ((t.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (t.r = g(r.slice(0, 32))),
              (t.s = g(r.slice(32, 64))))
            : 65 === r.length
            ? ((t.r = g(r.slice(0, 32))),
              (t.s = g(r.slice(32, 64))),
              (t.v = r[64]))
            : n.throwArgumentError("invalid signature string", "signature", e),
            t.v < 27 &&
              (0 === t.v || 1 === t.v
                ? (t.v += 27)
                : n.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e
                  )),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.recoveryParam && (r[32] |= 128),
            (t._vs = g(r.slice(32, 64)));
        } else {
          if (
            ((t.r = e.r),
            (t.s = e.s),
            (t.v = e.v),
            (t.recoveryParam = e.recoveryParam),
            (t._vs = e._vs),
            null != t._vs)
          ) {
            const r = h(u(t._vs), 32);
            t._vs = g(r);
            const i = r[0] >= 128 ? 1 : 0;
            null == t.recoveryParam
              ? (t.recoveryParam = i)
              : t.recoveryParam !== i &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e
                ),
              (r[0] &= 127);
            const o = g(r);
            null == t.s
              ? (t.s = o)
              : t.s !== o &&
                n.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e
                );
          }
          if (null == t.recoveryParam)
            null == t.v
              ? n.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e
                )
              : 0 === t.v || 1 === t.v
              ? (t.recoveryParam = t.v)
              : (t.recoveryParam = 1 - (t.v % 2));
          else if (null == t.v) t.v = 27 + t.recoveryParam;
          else {
            const r = 0 === t.v || 1 === t.v ? t.v : 1 - (t.v % 2);
            t.recoveryParam !== r &&
              n.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e
              );
          }
          null != t.r && d(t.r)
            ? (t.r = b(t.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e
              ),
            null != t.s && d(t.s)
              ? (t.s = b(t.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e
                );
          const r = u(t.s);
          r[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", e),
            t.recoveryParam && (r[0] |= 128);
          const i = g(r);
          t._vs &&
            (d(t._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", e),
            (t._vs = b(t._vs, 32))),
            null == t._vs
              ? (t._vs = i)
              : t._vs !== i &&
                n.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e
                );
        }
        return (
          (t.yParityAndS = t._vs),
          (t.compact = t.r + t.yParityAndS.substring(2)),
          t
        );
      }
      function E(e) {
        return g(l([(e = w(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]));
      }
    },
    70801: (e, t, r) => {
      r.d(t, { hR: () => H, uN: () => J, jL: () => q });
      var n = r(68571),
        i = r.n(n),
        o = r(16143),
        s = r.n(o);
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof window
        ? window
        : "undefined" !== typeof r.g
        ? r.g
        : "undefined" !== typeof self && self;
      function a(e, t, r) {
        return (
          (r = {
            path: t,
            exports: {},
            require: function (e, t) {
              return (function () {
                throw new Error(
                  "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                );
              })((void 0 === t || null === t) && r.path);
            },
          }),
          e(r, r.exports),
          r.exports
        );
      }
      var c = u;
      function u(e, t) {
        if (!e) throw new Error(t || "Assertion failed");
      }
      u.equal = function (e, t, r) {
        if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t);
      };
      var l = a(function (e, t) {
          var r = t;
          function n(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function i(e) {
            for (var t = "", r = 0; r < e.length; r++)
              t += n(e[r].toString(16));
            return t;
          }
          (r.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" !== typeof e) {
              for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
              return r;
            }
            if ("hex" === t) {
              (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                (e = "0" + e);
              for (n = 0; n < e.length; n += 2)
                r.push(parseInt(e[n] + e[n + 1], 16));
            } else
              for (n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? r.push(o, s) : r.push(s);
              }
            return r;
          }),
            (r.zero2 = n),
            (r.toHex = i),
            (r.encode = function (e, t) {
              return "hex" === t ? i(e) : e;
            });
        }),
        f = a(function (e, t) {
          var r = t;
          (r.assert = c),
            (r.toArray = l.toArray),
            (r.zero2 = l.zero2),
            (r.toHex = l.toHex),
            (r.encode = l.encode),
            (r.getNAF = function (e, t, r) {
              var n,
                i = new Array(Math.max(e.bitLength(), r) + 1);
              for (n = 0; n < i.length; n += 1) i[n] = 0;
              var o = 1 << (t + 1),
                s = e.clone();
              for (n = 0; n < i.length; n++) {
                var a,
                  c = s.andln(o - 1);
                s.isOdd()
                  ? ((a = c > (o >> 1) - 1 ? (o >> 1) - c : c), s.isubn(a))
                  : (a = 0),
                  (i[n] = a),
                  s.iushrn(1);
              }
              return i;
            }),
            (r.getJSF = function (e, t) {
              var r = [[], []];
              (e = e.clone()), (t = t.clone());
              for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0; ) {
                var s,
                  a,
                  c = (e.andln(3) + i) & 3,
                  u = (t.andln(3) + o) & 3;
                3 === c && (c = -1),
                  3 === u && (u = -1),
                  (s =
                    0 === (1 & c)
                      ? 0
                      : (3 !== (n = (e.andln(7) + i) & 7) && 5 !== n) || 2 !== u
                      ? c
                      : -c),
                  r[0].push(s),
                  (a =
                    0 === (1 & u)
                      ? 0
                      : (3 !== (n = (t.andln(7) + o) & 7) && 5 !== n) || 2 !== c
                      ? u
                      : -u),
                  r[1].push(a),
                  2 * i === s + 1 && (i = 1 - i),
                  2 * o === a + 1 && (o = 1 - o),
                  e.iushrn(1),
                  t.iushrn(1);
              }
              return r;
            }),
            (r.cachedProperty = function (e, t, r) {
              var n = "_" + t;
              e.prototype[t] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (r.parseBytes = function (e) {
              return "string" === typeof e ? r.toArray(e, "hex") : e;
            }),
            (r.intFromLE = function (e) {
              return new (i())(e, "hex", "le");
            });
        }),
        h = f.getNAF,
        d = f.getJSF,
        p = f.assert;
      function g(e, t) {
        (this.type = e),
          (this.p = new (i())(t.p, 16)),
          (this.red = t.prime ? i().red(t.prime) : i().mont(this.p)),
          (this.zero = new (i())(0).toRed(this.red)),
          (this.one = new (i())(1).toRed(this.red)),
          (this.two = new (i())(2).toRed(this.red)),
          (this.n = t.n && new (i())(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      var m = g;
      function y(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (g.prototype.point = function () {
        throw new Error("Not implemented");
      }),
        (g.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (g.prototype._fixedNafMul = function (e, t) {
          p(e.precomputed);
          var r = e._getDoubles(),
            n = h(t, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
          i /= 3;
          var o,
            s,
            a = [];
          for (o = 0; o < n.length; o += r.step) {
            s = 0;
            for (var c = o + r.step - 1; c >= o; c--) s = (s << 1) + n[c];
            a.push(s);
          }
          for (
            var u = this.jpoint(null, null, null),
              l = this.jpoint(null, null, null),
              f = i;
            f > 0;
            f--
          ) {
            for (o = 0; o < a.length; o++)
              (s = a[o]) === f
                ? (l = l.mixedAdd(r.points[o]))
                : s === -f && (l = l.mixedAdd(r.points[o].neg()));
            u = u.add(l);
          }
          return u.toP();
        }),
        (g.prototype._wnafMul = function (e, t) {
          var r = 4,
            n = e._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              o = h(t, r, this._bitLength),
              s = this.jpoint(null, null, null),
              a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var c = 0; a >= 0 && 0 === o[a]; a--) c++;
            if ((a >= 0 && c++, (s = s.dblp(c)), a < 0)) break;
            var u = o[a];
            p(0 !== u),
              (s =
                "affine" === e.type
                  ? u > 0
                    ? s.mixedAdd(i[(u - 1) >> 1])
                    : s.mixedAdd(i[(-u - 1) >> 1].neg())
                  : u > 0
                  ? s.add(i[(u - 1) >> 1])
                  : s.add(i[(-u - 1) >> 1].neg()));
          }
          return "affine" === e.type ? s.toP() : s;
        }),
        (g.prototype._wnafMulAdd = function (e, t, r, n, i) {
          var o,
            s,
            a,
            c = this._wnafT1,
            u = this._wnafT2,
            l = this._wnafT3,
            f = 0;
          for (o = 0; o < n; o++) {
            var p = (a = t[o])._getNAFPoints(e);
            (c[o] = p.wnd), (u[o] = p.points);
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var g = o - 1,
              m = o;
            if (1 === c[g] && 1 === c[m]) {
              var y = [t[g], null, null, t[m]];
              0 === t[g].y.cmp(t[m].y)
                ? ((y[1] = t[g].add(t[m])),
                  (y[2] = t[g].toJ().mixedAdd(t[m].neg())))
                : 0 === t[g].y.cmp(t[m].y.redNeg())
                ? ((y[1] = t[g].toJ().mixedAdd(t[m])),
                  (y[2] = t[g].add(t[m].neg())))
                : ((y[1] = t[g].toJ().mixedAdd(t[m])),
                  (y[2] = t[g].toJ().mixedAdd(t[m].neg())));
              var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                b = d(r[g], r[m]);
              for (
                f = Math.max(b[0].length, f),
                  l[g] = new Array(f),
                  l[m] = new Array(f),
                  s = 0;
                s < f;
                s++
              ) {
                var w = 0 | b[0][s],
                  E = 0 | b[1][s];
                (l[g][s] = v[3 * (w + 1) + (E + 1)]), (l[m][s] = 0), (u[g] = y);
              }
            } else
              (l[g] = h(r[g], c[g], this._bitLength)),
                (l[m] = h(r[m], c[m], this._bitLength)),
                (f = Math.max(l[g].length, f)),
                (f = Math.max(l[m].length, f));
          }
          var A = this.jpoint(null, null, null),
            S = this._wnafT4;
          for (o = f; o >= 0; o--) {
            for (var P = 0; o >= 0; ) {
              var _ = !0;
              for (s = 0; s < n; s++)
                (S[s] = 0 | l[s][o]), 0 !== S[s] && (_ = !1);
              if (!_) break;
              P++, o--;
            }
            if ((o >= 0 && P++, (A = A.dblp(P)), o < 0)) break;
            for (s = 0; s < n; s++) {
              var x = S[s];
              0 !== x &&
                (x > 0
                  ? (a = u[s][(x - 1) >> 1])
                  : x < 0 && (a = u[s][(-x - 1) >> 1].neg()),
                (A = "affine" === a.type ? A.mixedAdd(a) : A.add(a)));
            }
          }
          for (o = 0; o < n; o++) u[o] = null;
          return i ? A : A.toP();
        }),
        (g.BasePoint = y),
        (y.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (y.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (g.prototype.decodePoint = function (e, t) {
          e = f.toArray(e, t);
          var r = this.p.byteLength();
          if (
            (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
            e.length - 1 === 2 * r
          )
            return (
              6 === e[0]
                ? p(e[e.length - 1] % 2 === 0)
                : 7 === e[0] && p(e[e.length - 1] % 2 === 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw new Error("Unknown point format");
        }),
        (y.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (y.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray("be", t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", t));
        }),
        (y.prototype.encode = function (e, t) {
          return f.encode(this._encode(t), e);
        }),
        (y.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (y.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          );
        }),
        (y.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++) n = n.dbl();
            r.push(n);
          }
          return { step: e, points: r };
        }),
        (y.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var t = [this],
              r = (1 << e) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            t[i] = t[i - 1].add(n);
          return { wnd: e, points: t };
        }),
        (y.prototype._getBeta = function () {
          return null;
        }),
        (y.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
      var v = a(function (e) {
          "function" === typeof Object.create
            ? (e.exports = function (e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  var r = function () {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
              });
        }),
        b = f.assert;
      function w(e) {
        m.call(this, "short", e),
          (this.a = new (i())(e.a, 16).toRed(this.red)),
          (this.b = new (i())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      v(w, m);
      var E = w;
      function A(e, t, r, n) {
        m.BasePoint.call(this, e, "affine"),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (i())(t, 16)),
              (this.y = new (i())(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function S(e, t, r, n) {
        m.BasePoint.call(this, e, "jacobian"),
          null === t && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (i())(0)))
            : ((this.x = new (i())(t, 16)),
              (this.y = new (i())(r, 16)),
              (this.z = new (i())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      (w.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var t, r;
          if (e.beta) t = new (i())(e.beta, 16).toRed(this.red);
          else {
            var n = this._getEndoRoots(this.p);
            t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (e.lambda) r = new (i())(e.lambda, 16);
          else {
            var o = this._getEndoRoots(this.n);
            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t))
              ? (r = o[0])
              : ((r = o[1]), b(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
          }
          return {
            beta: t,
            lambda: r,
            basis: e.basis
              ? e.basis.map(function (e) {
                  return { a: new (i())(e.a, 16), b: new (i())(e.b, 16) };
                })
              : this._getEndoBasis(r),
          };
        }
      }),
        (w.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : i().mont(e),
            r = new (i())(2).toRed(t).redInvm(),
            n = r.redNeg(),
            o = new (i())(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (w.prototype._getEndoBasis = function (e) {
          for (
            var t,
              r,
              n,
              o,
              s,
              a,
              c,
              u,
              l,
              f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              h = e,
              d = this.n.clone(),
              p = new (i())(1),
              g = new (i())(0),
              m = new (i())(0),
              y = new (i())(1),
              v = 0;
            0 !== h.cmpn(0);

          ) {
            var b = d.div(h);
            (u = d.sub(b.mul(h))), (l = m.sub(b.mul(p)));
            var w = y.sub(b.mul(g));
            if (!n && u.cmp(f) < 0)
              (t = c.neg()), (r = p), (n = u.neg()), (o = l);
            else if (n && 2 === ++v) break;
            (c = u), (d = h), (h = u), (m = p), (p = l), (y = g), (g = w);
          }
          (s = u.neg()), (a = l);
          var E = n.sqr().add(o.sqr());
          return (
            s.sqr().add(a.sqr()).cmp(E) >= 0 && ((s = t), (a = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            s.negative && ((s = s.neg()), (a = a.neg())),
            [
              { a: n, b: o },
              { a: s, b: a },
            ]
          );
        }),
        (w.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            n = t[1],
            i = n.b.mul(e).divRound(this.n),
            o = r.b.neg().mul(e).divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            c = i.mul(r.b),
            u = o.mul(n.b);
          return { k1: e.sub(s).sub(a), k2: c.add(u).neg() };
        }),
        (w.prototype.pointFromX = function (e, t) {
          (e = new (i())(e, 16)).red || (e = e.toRed(this.red));
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point");
          var o = n.fromRed().isOdd();
          return ((t && !o) || (!t && o)) && (n = n.redNeg()), this.point(e, n);
        }),
        (w.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            n = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (w.prototype._endoWnafMulAdd = function (e, t, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < e.length;
            o++
          ) {
            var s = this._endoSplit(t[o]),
              a = e[o],
              c = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (c = c.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = c),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * o, r), l = 0;
            l < 2 * o;
            l++
          )
            (n[l] = null), (i[l] = null);
          return u;
        }),
        v(A, m.BasePoint),
        (w.prototype.point = function (e, t, r) {
          return new A(this, e, t, r);
        }),
        (w.prototype.pointFromJSON = function (e, t) {
          return A.fromJSON(this, e, t);
        }),
        (A.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var r = this.curve,
                n = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n),
                  },
                });
            }
            return t;
          }
        }),
        (A.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (A.fromJSON = function (e, t, r) {
          "string" === typeof t && (t = JSON.parse(t));
          var n = e.point(t[0], t[1], r);
          if (!t[2]) return n;
          function i(t) {
            return e.point(t[0], t[1], r);
          }
          var o = t[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (A.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (A.prototype.isInfinity = function () {
          return this.inf;
        }),
        (A.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            n = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (A.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            n = e.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (A.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (A.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (A.prototype.mul = function (e) {
          return (
            (e = new (i())(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          );
        }),
        (A.prototype.mulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (A.prototype.jmulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (A.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (A.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              n = function (e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return t;
        }),
        (A.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        v(S, m.BasePoint),
        (w.prototype.jpoint = function (e, t, r) {
          return new S(this, e, t, r);
        }),
        (S.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            n = this.y.redMul(t).redMul(e);
          return this.curve.point(r, n);
        }),
        (S.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (S.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(t),
            i = e.x.redMul(r),
            o = this.y.redMul(t.redMul(e.z)),
            s = e.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            c = o.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== c.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = a.redSqr(),
            l = u.redMul(a),
            f = n.redMul(u),
            h = c.redSqr().redIAdd(l).redISub(f).redISub(f),
            d = c.redMul(f.redISub(h)).redISub(o.redMul(l)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(h, d, p);
        }),
        (S.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            n = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var c = s.redSqr(),
            u = c.redMul(s),
            l = r.redMul(c),
            f = a.redSqr().redIAdd(u).redISub(l).redISub(l),
            h = a.redMul(l.redISub(f)).redISub(i.redMul(u)),
            d = this.z.redMul(s);
          return this.curve.jpoint(f, h, d);
        }),
        (S.prototype.dblp = function (e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          var t;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (t = 0; t < e; t++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            c = a.redSqr().redSqr(),
            u = s.redAdd(s);
          for (t = 0; t < e; t++) {
            var l = o.redSqr(),
              f = u.redSqr(),
              h = f.redSqr(),
              d = l.redAdd(l).redIAdd(l).redIAdd(n.redMul(c)),
              p = o.redMul(f),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(h);
            var v = u.redMul(a);
            t + 1 < e && (c = c.redMul(h)), (o = g), (a = v), (u = y);
          }
          return this.curve.jpoint(o, u.redMul(i), a);
        }),
        (S.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (S.prototype._zeroDbl = function () {
          var e, t, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              c = a.redSqr().redISub(s).redISub(s),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = c),
              (t = a.redMul(s.redISub(c)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var l = this.x.redSqr(),
              f = this.y.redSqr(),
              h = f.redSqr(),
              d = this.x.redAdd(f).redSqr().redISub(l).redISub(h);
            d = d.redIAdd(d);
            var p = l.redAdd(l).redIAdd(l),
              g = p.redSqr(),
              m = h.redIAdd(h);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = g.redISub(d).redISub(d)),
              (t = p.redMul(d.redISub(e)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (S.prototype._threeDbl = function () {
          var e, t, r;
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              c = a.redSqr().redISub(s).redISub(s);
            e = c;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = a.redMul(s.redISub(c)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var l = this.z.redSqr(),
              f = this.y.redSqr(),
              h = this.x.redMul(f),
              d = this.x.redSub(l).redMul(this.x.redAdd(l));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = d.redSqr().redISub(g)),
              (r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(l));
            var m = f.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (t = d.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (S.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = t.redSqr(),
            s = r.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            c = t.redAdd(t),
            u = (c = c.redIAdd(c)).redMul(s),
            l = a.redSqr().redISub(u.redAdd(u)),
            f = u.redISub(l),
            h = s.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = a.redMul(f).redISub(h),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(l, d, p);
        }),
        (S.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            n = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            s = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o
            )).redSqr(),
            c = n.redIAdd(n);
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(c),
            l = t.redMul(u);
          l = (l = l.redIAdd(l)).redIAdd(l);
          var f = this.x.redMul(a).redISub(l);
          f = (f = f.redIAdd(f)).redIAdd(f);
          var h = this.y.redMul(u.redMul(c.redISub(u)).redISub(s.redMul(a)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(f, h, d);
        }),
        (S.prototype.mul = function (e, t) {
          return (e = new (i())(e, t)), this.curve._wnafMul(this, e);
        }),
        (S.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var n = t.redMul(this.z),
            i = r.redMul(e.z);
          return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (S.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (S.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (S.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var P = a(function (e, t) {
          var r = t;
          (r.base = m), (r.short = E), (r.mont = null), (r.edwards = null);
        }),
        _ = a(function (e, t) {
          var r,
            n = t,
            i = f.assert;
          function o(e) {
            "short" === e.type
              ? (this.curve = new P.short(e))
              : "edwards" === e.type
              ? (this.curve = new P.edwards(e))
              : (this.curve = new P.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              i(this.g.validate(), "Invalid curve"),
              i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function a(e, t) {
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var r = new o(t);
                return (
                  Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                  }),
                  r
                );
              },
            });
          }
          (n.PresetCurve = o),
            a("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: s().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            a("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: s().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            a("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: s().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            a("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: s().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            a("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: s().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            a("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: ["9"],
            }),
            a("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch (c) {
            r = void 0;
          }
          a("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: s().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function x(e) {
        if (!(this instanceof x)) return new x(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = l.toArray(e.entropy, e.entropyEnc || "hex"),
          r = l.toArray(e.nonce, e.nonceEnc || "hex"),
          n = l.toArray(e.pers, e.persEnc || "hex");
        c(
          t.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(t, r, n);
      }
      var I = x;
      (x.prototype._init = function (e, t, r) {
        var n = e.concat(t).concat(r);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++)
          (this.K[i] = 0), (this.V[i] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (x.prototype._hmac = function () {
          return new (s().hmac)(this.hash, this.K);
        }),
        (x.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (x.prototype.reseed = function (e, t, r, n) {
          "string" !== typeof t && ((n = r), (r = t), (t = null)),
            (e = l.toArray(e, t)),
            (r = l.toArray(r, n)),
            c(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (x.prototype.generate = function (e, t, r, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof t && ((n = r), (r = t), (t = null)),
            r && ((r = l.toArray(r, n || "hex")), this._update(r));
          for (var i = []; i.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (i = i.concat(this.V));
          var o = i.slice(0, e);
          return this._update(r), this._reseed++, l.encode(o, t);
        });
      var k = f.assert;
      function C(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      var R = C;
      (C.fromPublic = function (e, t, r) {
        return t instanceof C ? t : new C(e, { pub: t, pubEnc: r });
      }),
        (C.fromPrivate = function (e, t, r) {
          return t instanceof C ? t : new C(e, { priv: t, privEnc: r });
        }),
        (C.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (C.prototype.getPublic = function (e, t) {
          return (
            "string" === typeof e && ((t = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
          );
        }),
        (C.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (C.prototype._importPrivate = function (e, t) {
          (this.priv = new (i())(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (C.prototype._importPublic = function (e, t) {
          if (e.x || e.y)
            return (
              "mont" === this.ec.curve.type
                ? k(e.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  k(e.x && e.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            );
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (C.prototype.derive = function (e) {
          return (
            e.validate() || k(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (C.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (C.prototype.verify = function (e, t, r) {
          return this.ec.verify(e, t, this, void 0, r);
        }),
        (C.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var T = f.assert;
      function N(e, t) {
        if (e instanceof N) return e;
        this._importDER(e, t) ||
          (T(e.r && e.s, "Signature without r or s"),
          (this.r = new (i())(e.r, 16)),
          (this.s = new (i())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      var O = N;
      function F() {
        this.place = 0;
      }
      function M(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        if (0 === e[t.place]) return !1;
        for (var i = 0, o = 0, s = t.place; o < n; o++, s++)
          (i <<= 8), (i |= e[s]), (i >>>= 0);
        return !(i <= 127) && ((t.place = s), i);
      }
      function D(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
          t++;
        return 0 === t ? e : e.slice(t);
      }
      function L(e, t) {
        if (t < 128) e.push(t);
        else {
          var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
          for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
          e.push(t);
        }
      }
      (N.prototype._importDER = function (e, t) {
        e = f.toArray(e, t);
        var r = new F();
        if (48 !== e[r.place++]) return !1;
        var n = M(e, r);
        if (!1 === n) return !1;
        if (n + r.place !== e.length) return !1;
        if (2 !== e[r.place++]) return !1;
        var o = M(e, r);
        if (!1 === o) return !1;
        if (0 !== (128 & e[r.place])) return !1;
        var s = e.slice(r.place, o + r.place);
        if (((r.place += o), 2 !== e[r.place++])) return !1;
        var a = M(e, r);
        if (!1 === a) return !1;
        if (e.length !== a + r.place) return !1;
        if (0 !== (128 & e[r.place])) return !1;
        var c = e.slice(r.place, a + r.place);
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1;
          s = s.slice(1);
        }
        if (0 === c[0]) {
          if (!(128 & c[1])) return !1;
          c = c.slice(1);
        }
        return (
          (this.r = new (i())(s)),
          (this.s = new (i())(c)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (N.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = D(t),
              r = D(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          L(n, t.length), (n = n.concat(t)).push(2), L(n, r.length);
          var i = n.concat(r),
            o = [48];
          return L(o, i.length), (o = o.concat(i)), f.encode(o, e);
        });
      var U = function () {
          throw new Error("unsupported");
        },
        V = f.assert;
      function G(e) {
        if (!(this instanceof G)) return new G(e);
        "string" === typeof e &&
          (V(Object.prototype.hasOwnProperty.call(_, e), "Unknown curve " + e),
          (e = _[e])),
          e instanceof _.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      var j = G;
      (G.prototype.keyPair = function (e) {
        return new R(this, e);
      }),
        (G.prototype.keyFromPrivate = function (e, t) {
          return R.fromPrivate(this, e, t);
        }),
        (G.prototype.keyFromPublic = function (e, t) {
          return R.fromPublic(this, e, t);
        }),
        (G.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var t = new I({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || U(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new (i())(2));
            ;

          ) {
            var o = new (i())(t.generate(r));
            if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
          }
        }),
        (G.prototype._truncateToN = function (e, t, r) {
          var n;
          if (i().isBN(e) || "number" === typeof e)
            n = (e = new (i())(e, 16)).byteLength();
          else if ("object" === typeof e)
            (n = e.length), (e = new (i())(e, 16));
          else {
            var o = e.toString();
            (n = (o.length + 1) >>> 1), (e = new (i())(o, 16));
          }
          "number" !== typeof r && (r = 8 * n);
          var s = r - this.n.bitLength();
          return (
            s > 0 && (e = e.ushrn(s)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (G.prototype.sign = function (e, t, r, n) {
          if (
            ("object" === typeof r && ((n = r), (r = null)),
            n || (n = {}),
            "string" !== typeof e && "number" !== typeof e && !i().isBN(e))
          ) {
            V(
              "object" === typeof e && e && "number" === typeof e.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              V(e.length >>> 0 === e.length);
            for (var o = 0; o < e.length; o++) V((255 & e[o]) === e[o]);
          }
          (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(e, !1, n.msgBitLength)),
            V(!e.isNeg(), "Can not sign a negative message");
          var s = this.n.byteLength(),
            a = t.getPrivate().toArray("be", s),
            c = e.toArray("be", s);
          V(new (i())(c).eq(e), "Can not sign message");
          for (
            var u = new I({
                hash: this.hash,
                entropy: a,
                nonce: c,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              l = this.n.sub(new (i())(1)),
              f = 0;
            ;
            f++
          ) {
            var h = n.k ? n.k(f) : new (i())(u.generate(this.n.byteLength()));
            if (
              !((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(l) >= 0)
            ) {
              var d = this.g.mul(h);
              if (!d.isInfinity()) {
                var p = d.getX(),
                  g = p.umod(this.n);
                if (0 !== g.cmpn(0)) {
                  var m = h.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var y =
                      (d.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(g) ? 2 : 0);
                    return (
                      n.canonical &&
                        m.cmp(this.nh) > 0 &&
                        ((m = this.n.sub(m)), (y ^= 1)),
                      new O({ r: g, s: m, recoveryParam: y })
                    );
                  }
                }
              }
            }
          }
        }),
        (G.prototype.verify = function (e, t, r, n, i) {
          i || (i = {}),
            (e = this._truncateToN(e, !1, i.msgBitLength)),
            (r = this.keyFromPublic(r, n));
          var o = (t = new O(t, "hex")).r,
            s = t.s;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
          var a,
            c = s.invm(this.n),
            u = c.mul(e).umod(this.n),
            l = c.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(u, r.getPublic(), l)).isInfinity() &&
                a.eqXToP(o)
            : !(a = this.g.mulAdd(u, r.getPublic(), l)).isInfinity() &&
                0 === a.getX().umod(this.n).cmp(o);
        }),
        (G.prototype.recoverPubKey = function (e, t, r, n) {
          V((3 & r) === r, "The recovery param is more than two bits"),
            (t = new O(t, n));
          var o = this.n,
            s = new (i())(e),
            a = t.r,
            c = t.s,
            u = 1 & r,
            l = r >> 1;
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
            throw new Error("Unable to find sencond key candinate");
          a = l
            ? this.curve.pointFromX(a.add(this.curve.n), u)
            : this.curve.pointFromX(a, u);
          var f = t.r.invm(o),
            h = o.sub(s).mul(f).umod(o),
            d = c.mul(f).umod(o);
          return this.g.mulAdd(h, a, d);
        }),
        (G.prototype.getKeyRecoveryParam = function (e, t, r, n) {
          if (null !== (t = new O(t, n)).recoveryParam) return t.recoveryParam;
          for (var i = 0; i < 4; i++) {
            var o;
            try {
              o = this.recoverPubKey(e, t, i);
            } catch (e) {
              continue;
            }
            if (o.eq(r)) return i;
          }
          throw new Error("Unable to find valid recovery factor");
        });
      var B = a(function (e, t) {
          var r = t;
          (r.version = "6.6.1"),
            (r.utils = f),
            (r.rand = function () {
              throw new Error("unsupported");
            }),
            (r.curve = P),
            (r.curves = _),
            (r.ec = j),
            (r.eddsa = null);
        }).ec,
        z = r(66133),
        W = r(63853);
      const K = new (r(54334).Vy)("signing-key/5.8.0");
      let Y = null;
      function $() {
        return Y || (Y = new B("secp256k1")), Y;
      }
      class H {
        constructor(e) {
          (0, W.yY)(this, "curve", "secp256k1"),
            (0, W.yY)(this, "privateKey", (0, z.c$)(e)),
            32 !== (0, z.cm)(this.privateKey) &&
              K.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          const t = $().keyFromPrivate((0, z.k9)(this.privateKey));
          (0, W.yY)(this, "publicKey", "0x" + t.getPublic(!1, "hex")),
            (0, W.yY)(
              this,
              "compressedPublicKey",
              "0x" + t.getPublic(!0, "hex")
            ),
            (0, W.yY)(this, "_isSigningKey", !0);
        }
        _addPoint(e) {
          const t = $().keyFromPublic((0, z.k9)(this.publicKey)),
            r = $().keyFromPublic((0, z.k9)(e));
          return "0x" + t.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          const t = $().keyFromPrivate((0, z.k9)(this.privateKey)),
            r = (0, z.k9)(e);
          32 !== r.length &&
            K.throwArgumentError("bad digest length", "digest", e);
          const n = t.sign(r, { canonical: !0 });
          return (0, z.Pc)({
            recoveryParam: n.recoveryParam,
            r: (0, z.bj)("0x" + n.r.toString(16), 32),
            s: (0, z.bj)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          const t = $().keyFromPrivate((0, z.k9)(this.privateKey)),
            r = $().keyFromPublic((0, z.k9)(J(e)));
          return (0, z.bj)("0x" + t.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(e) {
          return !(!e || !e._isSigningKey);
        }
      }
      function q(e, t) {
        const r = (0, z.Pc)(t),
          n = { r: (0, z.k9)(r.r), s: (0, z.k9)(r.s) };
        return (
          "0x" +
          $()
            .recoverPubKey((0, z.k9)(e), n, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function J(e, t) {
        const r = (0, z.k9)(e);
        if (32 === r.length) {
          const e = new H(r);
          return t
            ? "0x" + $().keyFromPrivate(r).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === r.length
          ? t
            ? (0, z.c$)(r)
            : "0x" + $().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
          ? t
            ? "0x" + $().keyFromPublic(r).getPublic(!0, "hex")
            : (0, z.c$)(r)
          : K.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
    },
    71454: (e, t, r) => {
      r.d(t, { dz: () => o, YW: () => l, _v: () => f });
      var n = r(66133);
      const i = new (r(54334).Vy)("strings/5.8.0");
      var o, s;
      function a(e, t, r, n, i) {
        if (e === s.BAD_PREFIX || e === s.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = t + 1; n < r.length && r[n] >> 6 === 2; n++) e++;
          return e;
        }
        return e === s.OVERRUN ? r.length - t - 1 : 0;
      }
      !(function (e) {
        (e.current = ""),
          (e.NFC = "NFC"),
          (e.NFD = "NFD"),
          (e.NFKC = "NFKC"),
          (e.NFKD = "NFKD");
      })(o || (o = {})),
        (function (e) {
          (e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (e.BAD_PREFIX = "bad codepoint prefix"),
            (e.OVERRUN = "string overrun"),
            (e.MISSING_CONTINUE = "missing continuation byte"),
            (e.OUT_OF_RANGE = "out of UTF-8 range"),
            (e.UTF16_SURROGATE = "UTF-16 surrogate"),
            (e.OVERLONG = "overlong representation");
        })(s || (s = {}));
      const c = Object.freeze({
        error: function (e, t, r, n, o) {
          return i.throwArgumentError(
            `invalid codepoint at offset ${t}; ${e}`,
            "bytes",
            r
          );
        },
        ignore: a,
        replace: function (e, t, r, n, i) {
          return e === s.OVERLONG
            ? (n.push(i), 0)
            : (n.push(65533), a(e, t, r));
        },
      });
      function u(e, t) {
        null == t && (t = c.error), (e = (0, n.k9)(e));
        const r = [];
        let i = 0;
        for (; i < e.length; ) {
          const n = e[i++];
          if (n >> 7 === 0) {
            r.push(n);
            continue;
          }
          let o = null,
            a = null;
          if (192 === (224 & n)) (o = 1), (a = 127);
          else if (224 === (240 & n)) (o = 2), (a = 2047);
          else {
            if (240 !== (248 & n)) {
              i += t(
                128 === (192 & n) ? s.UNEXPECTED_CONTINUE : s.BAD_PREFIX,
                i - 1,
                e,
                r
              );
              continue;
            }
            (o = 3), (a = 65535);
          }
          if (i - 1 + o >= e.length) {
            i += t(s.OVERRUN, i - 1, e, r);
            continue;
          }
          let c = n & ((1 << (8 - o - 1)) - 1);
          for (let u = 0; u < o; u++) {
            let n = e[i];
            if (128 != (192 & n)) {
              (i += t(s.MISSING_CONTINUE, i, e, r)), (c = null);
              break;
            }
            (c = (c << 6) | (63 & n)), i++;
          }
          null !== c &&
            (c > 1114111
              ? (i += t(s.OUT_OF_RANGE, i - 1 - o, e, r, c))
              : c >= 55296 && c <= 57343
              ? (i += t(s.UTF16_SURROGATE, i - 1 - o, e, r, c))
              : c <= a
              ? (i += t(s.OVERLONG, i - 1 - o, e, r, c))
              : r.push(c));
        }
        return r;
      }
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : o.current;
        t != o.current && (i.checkNormalize(), (e = e.normalize(t)));
        let r = [];
        for (let n = 0; n < e.length; n++) {
          const t = e.charCodeAt(n);
          if (t < 128) r.push(t);
          else if (t < 2048) r.push((t >> 6) | 192), r.push((63 & t) | 128);
          else if (55296 == (64512 & t)) {
            n++;
            const i = e.charCodeAt(n);
            if (n >= e.length || 56320 !== (64512 & i))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & t) << 10) + (1023 & i);
            r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128);
          } else
            r.push((t >> 12) | 224),
              r.push(((t >> 6) & 63) | 128),
              r.push((63 & t) | 128);
        }
        return (0, n.k9)(r);
      }
      function f(e, t) {
        return u(e, t)
          .map((e) =>
            e <= 65535
              ? String.fromCharCode(e)
              : ((e -= 65536),
                String.fromCharCode(
                  55296 + ((e >> 10) & 1023),
                  56320 + (1023 & e)
                ))
          )
          .join("");
      }
    },
    76168: (e, t, r) => {
      r.d(t, { Kq: () => c });
      var n = r(4099),
        i = (r(66133), r(63853)),
        o = r(54334);
      var s = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const a = new o.Vy("abstract-provider/5.8.0");
      i.VY;
      class c {
        constructor() {
          a.checkAbstract(new.target, c), (0, i.yY)(this, "_isProvider", !0);
        }
        getFeeData() {
          return s(this, void 0, void 0, function* () {
            const { block: e, gasPrice: t } = yield (0, i.k_)({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch((e) => null),
            });
            let r = null,
              o = null,
              s = null;
            return (
              e &&
                e.baseFeePerGas &&
                ((r = e.baseFeePerGas),
                (s = n.gH.from("1500000000")),
                (o = e.baseFeePerGas.mul(2).add(s))),
              {
                lastBaseFeePerGas: r,
                maxFeePerGas: o,
                maxPriorityFeePerGas: s,
                gasPrice: t,
              }
            );
          });
        }
        addListener(e, t) {
          return this.on(e, t);
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
        static isProvider(e) {
          return !(!e || !e._isProvider);
        }
      }
    },
    83404: (e, t, r) => {
      r.d(t, { bv: () => d, RZ: () => p });
      var n = r(66133),
        i = r(4099),
        o = r(54573),
        s = r(94994);
      const a = new (r(54334).Vy)("address/5.8.0");
      function c(e) {
        (0, n.Lo)(e, 20) ||
          a.throwArgumentError("invalid address", "address", e);
        const t = (e = e.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
        const i = (0, n.k9)((0, o.S)(r));
        for (let n = 0; n < 40; n += 2)
          i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
        return "0x" + t.join("");
      }
      const u = {};
      for (let g = 0; g < 10; g++) u[String(g)] = String(g);
      for (let g = 0; g < 26; g++)
        u[String.fromCharCode(65 + g)] = String(10 + g);
      const l = Math.floor(
        ((f = 9007199254740991),
        Math.log10 ? Math.log10(f) : Math.log(f) / Math.LN10)
      );
      var f;
      function h(e) {
        let t = (e =
          (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00")
          .split("")
          .map((e) => u[e])
          .join("");
        for (; t.length >= l; ) {
          let e = t.substring(0, l);
          t = (parseInt(e, 10) % 97) + t.substring(e.length);
        }
        let r = String(98 - (parseInt(t, 10) % 97));
        for (; r.length < 2; ) r = "0" + r;
        return r;
      }
      function d(e) {
        let t = null;
        if (
          ("string" !== typeof e &&
            a.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== e.substring(0, 2) && (e = "0x" + e),
            (t = c(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              t !== e &&
              a.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            e.substring(2, 4) !== h(e) &&
              a.throwArgumentError("bad icap checksum", "address", e),
              t = (0, i.Os)(e.substring(4));
            t.length < 40;

          )
            t = "0" + t;
          t = c("0x" + t);
        } else a.throwArgumentError("invalid address", "address", e);
        return t;
      }
      function p(e) {
        let t = null;
        try {
          t = d(e.from);
        } catch (c) {
          a.throwArgumentError("missing from address", "transaction", e);
        }
        const r = (0, n.gr)((0, n.k9)(i.gH.from(e.nonce).toHexString()));
        return d((0, n.Ab)((0, o.S)((0, s.l)([t, r])), 12));
      }
    },
    83653: (e, t, r) => {
      r.d(t, { uW: () => Fe, lT: () => Me, wh: () => De });
      var n = r(83404),
        i = r(76168),
        o = r(21517),
        s = r(66133),
        a = r(54573),
        c = r(71454);
      const u = "\x19Ethereum Signed Message:\n";
      function l(e) {
        return (
          "string" === typeof e && (e = (0, c.YW)(e)),
          (0, a.S)((0, s.xW)([(0, c.YW)(u), (0, c.YW)(String(e.length)), e]))
        );
      }
      var f = r(4099),
        h = r(63853),
        d = r(54334);
      var p = r(62023),
        g = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                c(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                c(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, a);
            }
            c((n = n.apply(e, t || [])).next());
          });
        };
      const m = new d.Vy("hash/5.8.0"),
        y = new Uint8Array(32);
      y.fill(0);
      const v = f.gH.from(-1),
        b = f.gH.from(0),
        w = f.gH.from(1),
        E = f.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      const A = (0, s.bj)(w.toHexString(), 32),
        S = (0, s.bj)(b.toHexString(), 32),
        P = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        _ = ["name", "version", "chainId", "verifyingContract", "salt"];
      function x(e) {
        return function (t) {
          return (
            "string" !== typeof t &&
              m.throwArgumentError(
                `invalid domain value for ${JSON.stringify(e)}`,
                `domain.${e}`,
                t
              ),
            t
          );
        };
      }
      const I = {
        name: x("name"),
        version: x("version"),
        chainId: function (e) {
          try {
            return f.gH.from(e).toString();
          } catch (t) {}
          return m.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            e
          );
        },
        verifyingContract: function (e) {
          try {
            return (0, n.bv)(e).toLowerCase();
          } catch (t) {}
          return m.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            e
          );
        },
        salt: function (e) {
          try {
            const t = (0, s.k9)(e);
            if (32 !== t.length) throw new Error("bad length");
            return (0, s.c$)(t);
          } catch (t) {}
          return m.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            e
          );
        },
      };
      function k(e) {
        {
          const t = e.match(/^(u?)int(\d*)$/);
          if (t) {
            const r = "" === t[1],
              n = parseInt(t[2] || "256");
            (n % 8 !== 0 || n > 256 || (t[2] && t[2] !== String(n))) &&
              m.throwArgumentError("invalid numeric width", "type", e);
            const i = E.mask(r ? n - 1 : n),
              o = r ? i.add(w).mul(v) : b;
            return function (t) {
              const r = f.gH.from(t);
              return (
                (r.lt(o) || r.gt(i)) &&
                  m.throwArgumentError(
                    `value out-of-bounds for ${e}`,
                    "value",
                    t
                  ),
                (0, s.bj)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          const t = e.match(/^bytes(\d+)$/);
          if (t) {
            const r = parseInt(t[1]);
            return (
              (0 === r || r > 32 || t[1] !== String(r)) &&
                m.throwArgumentError("invalid bytes width", "type", e),
              function (t) {
                return (
                  (0, s.k9)(t).length !== r &&
                    m.throwArgumentError(`invalid length for ${e}`, "value", t),
                  (function (e) {
                    const t = (0, s.k9)(e),
                      r = t.length % 32;
                    return r ? (0, s.qn)([t, y.slice(r)]) : (0, s.c$)(t);
                  })(t)
                );
              }
            );
          }
        }
        switch (e) {
          case "address":
            return function (e) {
              return (0, s.bj)((0, n.bv)(e), 32);
            };
          case "bool":
            return function (e) {
              return e ? A : S;
            };
          case "bytes":
            return function (e) {
              return (0, a.S)(e);
            };
          case "string":
            return function (e) {
              return (0, p.id)(e);
            };
        }
        return null;
      }
      function C(e, t) {
        return `${e}(${t
          .map((e) => {
            let { name: t, type: r } = e;
            return r + " " + t;
          })
          .join(",")})`;
      }
      class R {
        constructor(e) {
          (0, h.yY)(this, "types", Object.freeze((0, h.A4)(e))),
            (0, h.yY)(this, "_encoderCache", {}),
            (0, h.yY)(this, "_types", {});
          const t = {},
            r = {},
            n = {};
          Object.keys(e).forEach((e) => {
            (t[e] = {}), (r[e] = []), (n[e] = {});
          });
          for (const o in e) {
            const n = {};
            e[o].forEach((i) => {
              n[i.name] &&
                m.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(
                    i.name
                  )} in ${JSON.stringify(o)}`,
                  "types",
                  e
                ),
                (n[i.name] = !0);
              const s = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === o &&
                m.throwArgumentError(
                  `circular type reference to ${JSON.stringify(s)}`,
                  "types",
                  e
                );
              k(s) ||
                (r[s] ||
                  m.throwArgumentError(
                    `unknown type ${JSON.stringify(s)}`,
                    "types",
                    e
                  ),
                r[s].push(o),
                (t[o][s] = !0));
            });
          }
          const i = Object.keys(r).filter((e) => 0 === r[e].length);
          0 === i.length
            ? m.throwArgumentError("missing primary type", "types", e)
            : i.length > 1 &&
              m.throwArgumentError(
                `ambiguous primary types or unused types: ${i
                  .map((e) => JSON.stringify(e))
                  .join(", ")}`,
                "types",
                e
              ),
            (0, h.yY)(this, "primaryType", i[0]),
            (function i(o, s) {
              s[o] &&
                m.throwArgumentError(
                  `circular type reference to ${JSON.stringify(o)}`,
                  "types",
                  e
                ),
                (s[o] = !0),
                Object.keys(t[o]).forEach((e) => {
                  r[e] &&
                    (i(e, s),
                    Object.keys(s).forEach((t) => {
                      n[t][e] = !0;
                    }));
                }),
                delete s[o];
            })(this.primaryType, {});
          for (const o in n) {
            const t = Object.keys(n[o]);
            t.sort(),
              (this._types[o] = C(o, e[o]) + t.map((t) => C(t, e[t])).join(""));
          }
        }
        getEncoder(e) {
          let t = this._encoderCache[e];
          return t || (t = this._encoderCache[e] = this._getEncoder(e)), t;
        }
        _getEncoder(e) {
          {
            const t = k(e);
            if (t) return t;
          }
          const t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (t) {
            const e = t[1],
              r = this.getEncoder(e),
              n = parseInt(t[3]);
            return (t) => {
              n >= 0 &&
                t.length !== n &&
                m.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  t
                );
              let i = t.map(r);
              return this._types[e] && (i = i.map(a.S)), (0, a.S)((0, s.qn)(i));
            };
          }
          const r = this.types[e];
          if (r) {
            const t = (0, p.id)(this._types[e]);
            return (e) => {
              const n = r.map((t) => {
                let { name: r, type: n } = t;
                const i = this.getEncoder(n)(e[r]);
                return this._types[n] ? (0, a.S)(i) : i;
              });
              return n.unshift(t), (0, s.qn)(n);
            };
          }
          return m.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        encodeType(e) {
          const t = this._types[e];
          return (
            t ||
              m.throwArgumentError(
                `unknown type: ${JSON.stringify(e)}`,
                "name",
                e
              ),
            t
          );
        }
        encodeData(e, t) {
          return this.getEncoder(e)(t);
        }
        hashStruct(e, t) {
          return (0, a.S)(this.encodeData(e, t));
        }
        encode(e) {
          return this.encodeData(this.primaryType, e);
        }
        hash(e) {
          return this.hashStruct(this.primaryType, e);
        }
        _visit(e, t, r) {
          if (k(e)) return r(e, t);
          const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const e = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                t.length !== i &&
                m.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  t
                ),
              t.map((t) => this._visit(e, t, r))
            );
          }
          const i = this.types[e];
          return i
            ? i.reduce((e, n) => {
                let { name: i, type: o } = n;
                return (e[i] = this._visit(o, t[i], r)), e;
              }, {})
            : m.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        visit(e, t) {
          return this._visit(this.primaryType, e, t);
        }
        static from(e) {
          return new R(e);
        }
        static getPrimaryType(e) {
          return R.from(e).primaryType;
        }
        static hashStruct(e, t, r) {
          return R.from(t).hashStruct(e, r);
        }
        static hashDomain(e) {
          const t = [];
          for (const r in e) {
            const n = P[r];
            n ||
              m.throwArgumentError(
                `invalid typed-data domain key: ${JSON.stringify(r)}`,
                "domain",
                e
              ),
              t.push({ name: r, type: n });
          }
          return (
            t.sort((e, t) => _.indexOf(e.name) - _.indexOf(t.name)),
            R.hashStruct("EIP712Domain", { EIP712Domain: t }, e)
          );
        }
        static encode(e, t, r) {
          return (0, s.qn)(["0x1901", R.hashDomain(e), R.from(t).hash(r)]);
        }
        static hash(e, t, r) {
          return (0, a.S)(R.encode(e, t, r));
        }
        static resolveNames(e, t, r, n) {
          return g(this, void 0, void 0, function* () {
            e = (0, h.Ic)(e);
            const i = {};
            e.verifyingContract &&
              !(0, s.Lo)(e.verifyingContract, 20) &&
              (i[e.verifyingContract] = "0x");
            const o = R.from(t);
            o.visit(
              r,
              (e, t) => (
                "address" !== e || (0, s.Lo)(t, 20) || (i[t] = "0x"), t
              )
            );
            for (const e in i) i[e] = yield n(e);
            return (
              e.verifyingContract &&
                i[e.verifyingContract] &&
                (e.verifyingContract = i[e.verifyingContract]),
              (r = o.visit(r, (e, t) => ("address" === e && i[t] ? i[t] : t))),
              { domain: e, value: r }
            );
          });
        }
        static getPayload(e, t, r) {
          R.hashDomain(e);
          const n = {},
            i = [];
          _.forEach((t) => {
            const r = e[t];
            null != r && ((n[t] = I[t](r)), i.push({ name: t, type: P[t] }));
          });
          const o = R.from(t),
            a = (0, h.Ic)(t);
          return (
            a.EIP712Domain
              ? m.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  t
                )
              : (a.EIP712Domain = i),
            o.encode(r),
            {
              types: a,
              domain: n,
              primaryType: o.primaryType,
              message: o.visit(r, (e, t) => {
                if (e.match(/^bytes(\d*)/)) return (0, s.c$)((0, s.k9)(t));
                if (e.match(/^u?int/)) return f.gH.from(t).toString();
                switch (e) {
                  case "address":
                    return t.toLowerCase();
                  case "bool":
                    return !!t;
                  case "string":
                    return (
                      "string" !== typeof t &&
                        m.throwArgumentError("invalid string", "value", t),
                      t
                    );
                }
                return m.throwArgumentError("unsupported type", "type", e);
              }),
            }
          );
        }
      }
      class T {
        constructor(e) {
          (0, h.yY)(this, "alphabet", e),
            (0, h.yY)(this, "base", e.length),
            (0, h.yY)(this, "_alphabetMap", {}),
            (0, h.yY)(this, "_leader", e.charAt(0));
          for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t;
        }
        encode(e) {
          let t = (0, s.k9)(e);
          if (0 === t.length) return "";
          let r = [0];
          for (let i = 0; i < t.length; ++i) {
            let e = t[i];
            for (let t = 0; t < r.length; ++t)
              (e += r[t] << 8),
                (r[t] = e % this.base),
                (e = (e / this.base) | 0);
            for (; e > 0; ) r.push(e % this.base), (e = (e / this.base) | 0);
          }
          let n = "";
          for (let i = 0; 0 === t[i] && i < t.length - 1; ++i)
            n += this._leader;
          for (let i = r.length - 1; i >= 0; --i) n += this.alphabet[r[i]];
          return n;
        }
        decode(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          let t = [];
          if (0 === e.length) return new Uint8Array(t);
          t.push(0);
          for (let r = 0; r < e.length; r++) {
            let n = this._alphabetMap[e[r]];
            if (void 0 === n)
              throw new Error("Non-base" + this.base + " character");
            let i = n;
            for (let e = 0; e < t.length; ++e)
              (i += t[e] * this.base), (t[e] = 255 & i), (i >>= 8);
            for (; i > 0; ) t.push(255 & i), (i >>= 8);
          }
          for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
            t.push(0);
          return (0, s.k9)(new Uint8Array(t.reverse()));
        }
      }
      new T("abcdefghijklmnopqrstuvwxyz234567");
      const N = new T(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
      var O = r(44898);
      function F(e, t, r, n, i) {
        let o;
        (e = (0, s.k9)(e)), (t = (0, s.k9)(t));
        let a = 1;
        const c = new Uint8Array(n),
          u = new Uint8Array(t.length + 4);
        let l, f;
        u.set(t);
        for (let h = 1; h <= a; h++) {
          (u[t.length] = (h >> 24) & 255),
            (u[t.length + 1] = (h >> 16) & 255),
            (u[t.length + 2] = (h >> 8) & 255),
            (u[t.length + 3] = 255 & h);
          let d = (0, s.k9)((0, O.L5)(i, e, u));
          o ||
            ((o = d.length),
            (f = new Uint8Array(o)),
            (a = Math.ceil(n / o)),
            (l = n - (a - 1) * o)),
            f.set(d);
          for (let t = 1; t < r; t++) {
            d = (0, s.k9)((0, O.L5)(i, e, d));
            for (let e = 0; e < o; e++) f[e] ^= d[e];
          }
          const p = (h - 1) * o,
            g = h === a ? l : o;
          c.set((0, s.k9)(f).slice(0, g), p);
        }
        return (0, s.c$)(c);
      }
      var M = r(70801),
        D = r(91001),
        L = r(54249);
      const U = new d.Vy("wordlists/5.8.0");
      class V {
        constructor(e) {
          U.checkAbstract(new.target, V), (0, h.yY)(this, "locale", e);
        }
        split(e) {
          return e.toLowerCase().split(/ +/g);
        }
        join(e) {
          return e.join(" ");
        }
        static check(e) {
          const t = [];
          for (let r = 0; r < 2048; r++) {
            const n = e.getWord(r);
            if (r !== e.getWordIndex(n)) return "0x";
            t.push(n);
          }
          return (0, p.id)(t.join("\n") + "\n");
        }
        static register(e, t) {
          t || (t = e.locale);
        }
      }
      let G = null;
      function j(e) {
        if (
          null == G &&
          ((G =
            "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo"
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()
              .substring(1)
              .split(" ")),
          "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !==
            V.check(e))
        )
          throw (
            ((G = null), new Error("BIP39 Wordlist for en (English) FAILED"))
          );
      }
      const B = new (class extends V {
        constructor() {
          super("en");
        }
        getWord(e) {
          return j(this), G[e];
        }
        getWordIndex(e) {
          return j(this), G.indexOf(e);
        }
      })();
      V.register(B);
      const z = { en: B },
        W = new d.Vy("hdnode/5.8.0"),
        K = f.gH.from(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        Y = (0, c.YW)("Bitcoin seed"),
        $ = 2147483648;
      function H(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function q(e) {
        return (0, s.bj)((0, s.c$)(e), 32);
      }
      function J(e) {
        return N.encode(
          (0, s.xW)([e, (0, s.Ab)((0, O.sc)((0, O.sc)(e)), 0, 4)])
        );
      }
      function X(e) {
        if (null == e) return z.en;
        if ("string" === typeof e) {
          const t = z[e];
          return (
            null == t && W.throwArgumentError("unknown locale", "wordlist", e),
            t
          );
        }
        return e;
      }
      const Z = {},
        Q = "m/44'/60'/0'/0/0";
      class ee {
        constructor(e, t, r, n, i, o, a, c) {
          if (e !== Z)
            throw new Error("HDNode constructor cannot be called directly");
          if (t) {
            const e = new M.hR(t);
            (0, h.yY)(this, "privateKey", e.privateKey),
              (0, h.yY)(this, "publicKey", e.compressedPublicKey);
          } else
            (0, h.yY)(this, "privateKey", null),
              (0, h.yY)(this, "publicKey", (0, s.c$)(r));
          (0, h.yY)(this, "parentFingerprint", n),
            (0, h.yY)(
              this,
              "fingerprint",
              (0, s.Ab)((0, O.HE)((0, O.sc)(this.publicKey)), 0, 4)
            ),
            (0, h.yY)(this, "address", (0, L.Kt)(this.publicKey)),
            (0, h.yY)(this, "chainCode", i),
            (0, h.yY)(this, "index", o),
            (0, h.yY)(this, "depth", a),
            null == c
              ? ((0, h.yY)(this, "mnemonic", null),
                (0, h.yY)(this, "path", null))
              : "string" === typeof c
              ? ((0, h.yY)(this, "mnemonic", null), (0, h.yY)(this, "path", c))
              : ((0, h.yY)(this, "mnemonic", c),
                (0, h.yY)(this, "path", c.path));
        }
        get extendedKey() {
          if (this.depth >= 256) throw new Error("Depth too large!");
          return J(
            (0, s.xW)([
              null != this.privateKey ? "0x0488ADE4" : "0x0488B21E",
              (0, s.c$)(this.depth),
              this.parentFingerprint,
              (0, s.bj)((0, s.c$)(this.index), 4),
              this.chainCode,
              null != this.privateKey
                ? (0, s.xW)(["0x00", this.privateKey])
                : this.publicKey,
            ])
          );
        }
        neuter() {
          return new ee(
            Z,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path
          );
        }
        _derive(e) {
          if (e > 4294967295) throw new Error("invalid index - " + String(e));
          let t = this.path;
          t && (t += "/" + (2147483647 & e));
          const r = new Uint8Array(37);
          if (e & $) {
            if (!this.privateKey)
              throw new Error("cannot derive child of neutered node");
            r.set((0, s.k9)(this.privateKey), 1), t && (t += "'");
          } else r.set((0, s.k9)(this.publicKey));
          for (let s = 24; s >= 0; s -= 8)
            r[33 + (s >> 3)] = (e >> (24 - s)) & 255;
          const n = (0, s.k9)((0, O.L5)(D.q.sha512, this.chainCode, r)),
            i = n.slice(0, 32),
            o = n.slice(32);
          let a = null,
            c = null;
          if (this.privateKey) a = q(f.gH.from(i).add(this.privateKey).mod(K));
          else {
            c = new M.hR((0, s.c$)(i))._addPoint(this.publicKey);
          }
          let u = t;
          const l = this.mnemonic;
          return (
            l &&
              (u = Object.freeze({
                phrase: l.phrase,
                path: t,
                locale: l.locale || "en",
              })),
            new ee(Z, a, c, this.fingerprint, q(o), e, this.depth + 1, u)
          );
        }
        derivePath(e) {
          const t = e.split("/");
          if (0 === t.length || ("m" === t[0] && 0 !== this.depth))
            throw new Error("invalid path - " + e);
          "m" === t[0] && t.shift();
          let r = this;
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            if (e.match(/^[0-9]+'$/)) {
              const t = parseInt(e.substring(0, e.length - 1));
              if (t >= $) throw new Error("invalid path index - " + e);
              r = r._derive($ + t);
            } else {
              if (!e.match(/^[0-9]+$/))
                throw new Error("invalid path component - " + e);
              {
                const t = parseInt(e);
                if (t >= $) throw new Error("invalid path index - " + e);
                r = r._derive(t);
              }
            }
          }
          return r;
        }
        static _fromSeed(e, t) {
          const r = (0, s.k9)(e);
          if (r.length < 16 || r.length > 64) throw new Error("invalid seed");
          const n = (0, s.k9)((0, O.L5)(D.q.sha512, Y, r));
          return new ee(
            Z,
            q(n.slice(0, 32)),
            null,
            "0x00000000",
            q(n.slice(32)),
            0,
            0,
            t
          );
        }
        static fromMnemonic(e, t, r) {
          return (
            (e = re(te(e, (r = X(r))), r)),
            ee._fromSeed(
              (function (e, t) {
                t || (t = "");
                const r = (0, c.YW)("mnemonic" + t, c.dz.NFKD);
                return F((0, c.YW)(e, c.dz.NFKD), r, 2048, 64, "sha512");
              })(e, t),
              { phrase: e, path: "m", locale: r.locale }
            )
          );
        }
        static fromSeed(e) {
          return ee._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          const t = N.decode(e);
          (82 === t.length && J(t.slice(0, 78)) === e) ||
            W.throwArgumentError(
              "invalid extended key",
              "extendedKey",
              "[REDACTED]"
            );
          const r = t[4],
            n = (0, s.c$)(t.slice(5, 9)),
            i = parseInt((0, s.c$)(t.slice(9, 13)).substring(2), 16),
            o = (0, s.c$)(t.slice(13, 45)),
            a = t.slice(45, 78);
          switch ((0, s.c$)(t.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf":
              return new ee(Z, null, (0, s.c$)(a), n, o, i, r, null);
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== a[0]) break;
              return new ee(Z, (0, s.c$)(a.slice(1)), null, n, o, i, r, null);
          }
          return W.throwArgumentError(
            "invalid extended key",
            "extendedKey",
            "[REDACTED]"
          );
        }
      }
      function te(e, t) {
        (t = X(t)), W.checkNormalize();
        const r = t.split(e);
        if (r.length % 3 !== 0) throw new Error("invalid mnemonic");
        const n = (0, s.k9)(new Uint8Array(Math.ceil((11 * r.length) / 8)));
        let i = 0;
        for (let s = 0; s < r.length; s++) {
          let e = t.getWordIndex(r[s].normalize("NFKD"));
          if (-1 === e) throw new Error("invalid mnemonic");
          for (let t = 0; t < 11; t++)
            e & (1 << (10 - t)) && (n[i >> 3] |= 1 << (7 - (i % 8))), i++;
        }
        const o = (32 * r.length) / 3,
          a = H(r.length / 3);
        if (
          ((0, s.k9)((0, O.sc)(n.slice(0, o / 8)))[0] & a) !==
          (n[n.length - 1] & a)
        )
          throw new Error("invalid checksum");
        return (0, s.c$)(n.slice(0, o / 8));
      }
      function re(e, t) {
        if (
          ((t = X(t)),
          (e = (0, s.k9)(e)).length % 4 !== 0 || e.length < 16 || e.length > 32)
        )
          throw new Error("invalid entropy");
        const r = [0];
        let n = 11;
        for (let s = 0; s < e.length; s++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[s]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= e[s] >> (8 - n)),
              r.push(e[s] & ((1 << (8 - n)) - 1)),
              (n += 3));
        const i = e.length / 4,
          o = (0, s.k9)((0, O.sc)(e))[0] & H(i);
        return (
          (r[r.length - 1] <<= i),
          (r[r.length - 1] |= o >> (8 - i)),
          t.join(r.map((e) => t.getWord(e)))
        );
      }
      const ne = new d.Vy("random/5.8.0");
      const ie = (function () {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof r.g) return r.g;
        throw new Error("unable to locate global object");
      })();
      let oe = ie.crypto || ie.msCrypto;
      function se(e) {
        (e <= 0 || e > 1024 || e % 1 || e != e) &&
          ne.throwArgumentError("invalid length", "length", e);
        const t = new Uint8Array(e);
        return oe.getRandomValues(t), (0, s.k9)(t);
      }
      (oe && oe.getRandomValues) ||
        (ne.warn("WARNING: Missing strong random number source"),
        (oe = {
          getRandomValues: function (e) {
            return ne.throwError(
              "no secure random source avaialble",
              d.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "crypto.getRandomValues" }
            );
          },
        }));
      var ae = r(71811),
        ce = r.n(ae),
        ue = r(35548),
        le = r.n(ue);
      function fe(e) {
        return (
          "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
          (0, s.k9)(e)
        );
      }
      function he(e, t) {
        for (e = String(e); e.length < t; ) e = "0" + e;
        return e;
      }
      function de(e) {
        return "string" === typeof e ? (0, c.YW)(e, c.dz.NFKC) : (0, s.k9)(e);
      }
      function pe(e, t) {
        let r = e;
        const n = t.toLowerCase().split("/");
        for (let i = 0; i < n.length; i++) {
          let e = null;
          for (const t in r)
            if (t.toLowerCase() === n[i]) {
              e = r[t];
              break;
            }
          if (null === e) return null;
          r = e;
        }
        return r;
      }
      function ge(e) {
        const t = (0, s.k9)(e);
        (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128);
        const r = (0, s.c$)(t);
        return [
          r.substring(2, 10),
          r.substring(10, 14),
          r.substring(14, 18),
          r.substring(18, 22),
          r.substring(22, 34),
        ].join("-");
      }
      const me = "json-wallets/5.8.0";
      var ye = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const ve = new d.Vy(me);
      function be(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase;
      }
      class we extends h.VY {
        isKeystoreAccount(e) {
          return !(!e || !e._isKeystoreAccount);
        }
      }
      function Ee(e, t) {
        const r = fe(pe(e, "crypto/ciphertext"));
        if (
          (0, s.c$)((0, a.S)((0, s.xW)([t.slice(16, 32), r]))).substring(2) !==
          pe(e, "crypto/mac").toLowerCase()
        )
          throw new Error("invalid password");
        const i = (function (e, t, r) {
          if ("aes-128-ctr" === pe(e, "crypto/cipher")) {
            const n = fe(pe(e, "crypto/cipherparams/iv")),
              i = new (ce().Counter)(n),
              o = new (ce().ModeOfOperation.ctr)(t, i);
            return (0, s.k9)(o.decrypt(r));
          }
          return null;
        })(e, t.slice(0, 16), r);
        i ||
          ve.throwError(
            "unsupported cipher",
            d.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "decrypt" }
          );
        const o = t.slice(32, 64),
          c = (0, L.Kt)(i);
        if (e.address) {
          let t = e.address.toLowerCase();
          if (
            ("0x" !== t.substring(0, 2) && (t = "0x" + t), (0, n.bv)(t) !== c)
          )
            throw new Error("address mismatch");
        }
        const u = {
          _isKeystoreAccount: !0,
          address: c,
          privateKey: (0, s.c$)(i),
        };
        if ("0.1" === pe(e, "x-ethers/version")) {
          const t = fe(pe(e, "x-ethers/mnemonicCiphertext")),
            r = fe(pe(e, "x-ethers/mnemonicCounter")),
            n = new (ce().Counter)(r),
            i = new (ce().ModeOfOperation.ctr)(o, n),
            a = pe(e, "x-ethers/path") || Q,
            c = pe(e, "x-ethers/locale") || "en",
            f = (0, s.k9)(i.decrypt(t));
          try {
            const e = re(f, c),
              t = ee.fromMnemonic(e, null, c).derivePath(a);
            if (t.privateKey != u.privateKey)
              throw new Error("mnemonic mismatch");
            u.mnemonic = t.mnemonic;
          } catch (l) {
            if (
              l.code !== d.Vy.errors.INVALID_ARGUMENT ||
              "wordlist" !== l.argument
            )
              throw l;
          }
        }
        return new we(u);
      }
      function Ae(e, t, r, n, i) {
        return (0, s.k9)(F(e, t, r, n, i));
      }
      function Se(e, t, r, n, i) {
        return Promise.resolve(Ae(e, t, r, n, i));
      }
      function Pe(e, t, r, n, i) {
        const o = de(t),
          s = pe(e, "crypto/kdf");
        if (s && "string" === typeof s) {
          const t = function (e, t) {
            return ve.throwArgumentError(
              "invalid key-derivation function parameters",
              e,
              t
            );
          };
          if ("scrypt" === s.toLowerCase()) {
            const r = fe(pe(e, "crypto/kdfparams/salt")),
              a = parseInt(pe(e, "crypto/kdfparams/n")),
              c = parseInt(pe(e, "crypto/kdfparams/r")),
              u = parseInt(pe(e, "crypto/kdfparams/p"));
            (a && c && u) || t("kdf", s), 0 !== (a & (a - 1)) && t("N", a);
            const l = parseInt(pe(e, "crypto/kdfparams/dklen"));
            return 32 !== l && t("dklen", l), n(o, r, a, c, u, 64, i);
          }
          if ("pbkdf2" === s.toLowerCase()) {
            const n = fe(pe(e, "crypto/kdfparams/salt"));
            let i = null;
            const s = pe(e, "crypto/kdfparams/prf");
            "hmac-sha256" === s
              ? (i = "sha256")
              : "hmac-sha512" === s
              ? (i = "sha512")
              : t("prf", s);
            const a = parseInt(pe(e, "crypto/kdfparams/c")),
              c = parseInt(pe(e, "crypto/kdfparams/dklen"));
            return 32 !== c && t("dklen", c), r(o, n, a, c, i);
          }
        }
        return ve.throwArgumentError(
          "unsupported key-derivation function",
          "kdf",
          s
        );
      }
      const _e = new d.Vy(me);
      class xe extends h.VY {
        isCrowdsaleAccount(e) {
          return !(!e || !e._isCrowdsaleAccount);
        }
      }
      function Ie(e, t) {
        const r = JSON.parse(e);
        t = de(t);
        const i = (0, n.bv)(pe(r, "ethaddr")),
          o = fe(pe(r, "encseed"));
        (o && o.length % 16 === 0) ||
          _e.throwArgumentError("invalid encseed", "json", e);
        const u = (0, s.k9)(F(t, t, 2e3, 32, "sha256")).slice(0, 16),
          l = o.slice(0, 16),
          f = o.slice(16),
          h = new (ce().ModeOfOperation.cbc)(u, l),
          d = ce().padding.pkcs7.strip((0, s.k9)(h.decrypt(f)));
        let p = "";
        for (let n = 0; n < d.length; n++) p += String.fromCharCode(d[n]);
        const g = (0, c.YW)(p),
          m = (0, a.S)(g);
        return new xe({ _isCrowdsaleAccount: !0, address: i, privateKey: m });
      }
      function ke(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (r) {
          return !1;
        }
        return t.encseed && t.ethaddr;
      }
      function Ce(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (r) {
          return !1;
        }
        return !(
          !t.version ||
          parseInt(t.version) !== t.version ||
          3 !== parseInt(t.version)
        );
      }
      function Re(e, t, r) {
        if (ke(e)) {
          r && r(0);
          const n = Ie(e, t);
          return r && r(1), Promise.resolve(n);
        }
        return Ce(e)
          ? (function (e, t, r) {
              return ye(this, void 0, void 0, function* () {
                const n = JSON.parse(e);
                return Ee(n, yield Pe(n, t, Se, le().scrypt, r));
              });
            })(e, t, r)
          : Promise.reject(new Error("invalid JSON wallet"));
      }
      function Te(e, t) {
        if (ke(e)) return Ie(e, t);
        if (Ce(e))
          return (function (e, t) {
            const r = JSON.parse(e);
            return Ee(r, Pe(r, t, Ae, le().syncScrypt));
          })(e, t);
        throw new Error("invalid JSON wallet");
      }
      var Ne = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              c(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(s, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
      const Oe = new d.Vy("wallet/5.6.2");
      class Fe extends o.l {
        constructor(e, t) {
          if (
            (super(),
            null != (r = e) && (0, s.Lo)(r.privateKey, 32) && null != r.address)
          ) {
            const t = new M.hR(e.privateKey);
            if (
              ((0, h.yY)(this, "_signingKey", () => t),
              (0, h.yY)(this, "address", (0, L.Kt)(this.publicKey)),
              this.address !== (0, n.bv)(e.address) &&
                Oe.throwArgumentError(
                  "privateKey/address mismatch",
                  "privateKey",
                  "[REDACTED]"
                ),
              (function (e) {
                const t = e.mnemonic;
                return t && t.phrase;
              })(e))
            ) {
              const t = e.mnemonic;
              (0, h.yY)(this, "_mnemonic", () => ({
                phrase: t.phrase,
                path: t.path || Q,
                locale: t.locale || "en",
              }));
              const r = this.mnemonic,
                n = ee
                  .fromMnemonic(r.phrase, null, r.locale)
                  .derivePath(r.path);
              (0, L.Kt)(n.privateKey) !== this.address &&
                Oe.throwArgumentError(
                  "mnemonic/address mismatch",
                  "privateKey",
                  "[REDACTED]"
                );
            } else (0, h.yY)(this, "_mnemonic", () => null);
          } else {
            if (M.hR.isSigningKey(e))
              "secp256k1" !== e.curve &&
                Oe.throwArgumentError(
                  "unsupported curve; must be secp256k1",
                  "privateKey",
                  "[REDACTED]"
                ),
                (0, h.yY)(this, "_signingKey", () => e);
            else {
              "string" === typeof e &&
                e.match(/^[0-9a-f]*$/i) &&
                64 === e.length &&
                (e = "0x" + e);
              const t = new M.hR(e);
              (0, h.yY)(this, "_signingKey", () => t);
            }
            (0, h.yY)(this, "_mnemonic", () => null),
              (0, h.yY)(this, "address", (0, L.Kt)(this.publicKey));
          }
          var r;
          t &&
            !i.Kq.isProvider(t) &&
            Oe.throwArgumentError("invalid provider", "provider", t),
            (0, h.yY)(this, "provider", t || null);
        }
        get mnemonic() {
          return this._mnemonic();
        }
        get privateKey() {
          return this._signingKey().privateKey;
        }
        get publicKey() {
          return this._signingKey().publicKey;
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        connect(e) {
          return new Fe(this, e);
        }
        signTransaction(e) {
          return (0, h.k_)(e).then((t) => {
            null != t.from &&
              ((0, n.bv)(t.from) !== this.address &&
                Oe.throwArgumentError(
                  "transaction from address mismatch",
                  "transaction.from",
                  e.from
                ),
              delete t.from);
            const r = this._signingKey().signDigest((0, a.S)((0, L.lK)(t)));
            return (0, L.lK)(t, r);
          });
        }
        signMessage(e) {
          return Ne(this, void 0, void 0, function* () {
            return (0, s.FU)(this._signingKey().signDigest(l(e)));
          });
        }
        _signTypedData(e, t, r) {
          return Ne(this, void 0, void 0, function* () {
            const n = yield R.resolveNames(
              e,
              t,
              r,
              (e) => (
                null == this.provider &&
                  Oe.throwError(
                    "cannot resolve ENS names without a provider",
                    d.Vy.errors.UNSUPPORTED_OPERATION,
                    { operation: "resolveName", value: e }
                  ),
                this.provider.resolveName(e)
              )
            );
            return (0,
            s.FU)(this._signingKey().signDigest(R.hash(n.domain, t, n.value)));
          });
        }
        encrypt(e, t, r) {
          if (
            ("function" !== typeof t || r || ((r = t), (t = {})),
            r && "function" !== typeof r)
          )
            throw new Error("invalid callback");
          return (
            t || (t = {}),
            (function (e, t, r, i) {
              try {
                if ((0, n.bv)(e.address) !== (0, L.Kt)(e.privateKey))
                  throw new Error("address/privateKey mismatch");
                if (be(e)) {
                  const t = e.mnemonic;
                  if (
                    ee
                      .fromMnemonic(t.phrase, null, t.locale)
                      .derivePath(t.path || Q).privateKey != e.privateKey
                  )
                    throw new Error("mnemonic mismatch");
                }
              } catch (b) {
                return Promise.reject(b);
              }
              "function" !== typeof r || i || ((i = r), (r = {})),
                r || (r = {});
              const o = (0, s.k9)(e.privateKey),
                c = de(t);
              let u = null,
                l = null,
                f = null;
              if (be(e)) {
                const t = e.mnemonic;
                (u = (0, s.k9)(te(t.phrase, t.locale || "en"))),
                  (l = t.path || Q),
                  (f = t.locale || "en");
              }
              let h = r.client;
              h || (h = "ethers.js");
              let d = null;
              d = r.salt ? (0, s.k9)(r.salt) : se(32);
              let p = null;
              if (r.iv) {
                if (((p = (0, s.k9)(r.iv)), 16 !== p.length))
                  throw new Error("invalid iv");
              } else p = se(16);
              let g = null;
              if (r.uuid) {
                if (((g = (0, s.k9)(r.uuid)), 16 !== g.length))
                  throw new Error("invalid uuid");
              } else g = se(16);
              let m = 1 << 17,
                y = 8,
                v = 1;
              return (
                r.scrypt &&
                  (r.scrypt.N && (m = r.scrypt.N),
                  r.scrypt.r && (y = r.scrypt.r),
                  r.scrypt.p && (v = r.scrypt.p)),
                le()
                  .scrypt(c, d, m, y, v, 64, i)
                  .then((t) => {
                    const r = (t = (0, s.k9)(t)).slice(0, 16),
                      n = t.slice(16, 32),
                      i = t.slice(32, 64),
                      c = new (ce().Counter)(p),
                      b = new (ce().ModeOfOperation.ctr)(r, c),
                      w = (0, s.k9)(b.encrypt(o)),
                      E = (0, a.S)((0, s.xW)([n, w])),
                      A = {
                        address: e.address.substring(2).toLowerCase(),
                        id: ge(g),
                        version: 3,
                        crypto: {
                          cipher: "aes-128-ctr",
                          cipherparams: { iv: (0, s.c$)(p).substring(2) },
                          ciphertext: (0, s.c$)(w).substring(2),
                          kdf: "scrypt",
                          kdfparams: {
                            salt: (0, s.c$)(d).substring(2),
                            n: m,
                            dklen: 32,
                            p: v,
                            r: y,
                          },
                          mac: E.substring(2),
                        },
                      };
                    if (u) {
                      const e = se(16),
                        t = new (ce().Counter)(e),
                        r = new (ce().ModeOfOperation.ctr)(i, t),
                        n = (0, s.k9)(r.encrypt(u)),
                        o = new Date(),
                        a =
                          o.getUTCFullYear() +
                          "-" +
                          he(o.getUTCMonth() + 1, 2) +
                          "-" +
                          he(o.getUTCDate(), 2) +
                          "T" +
                          he(o.getUTCHours(), 2) +
                          "-" +
                          he(o.getUTCMinutes(), 2) +
                          "-" +
                          he(o.getUTCSeconds(), 2) +
                          ".0Z";
                      A["x-ethers"] = {
                        client: h,
                        gethFilename: "UTC--" + a + "--" + A.address,
                        mnemonicCounter: (0, s.c$)(e).substring(2),
                        mnemonicCiphertext: (0, s.c$)(n).substring(2),
                        path: l,
                        locale: f,
                        version: "0.1",
                      };
                    }
                    return JSON.stringify(A);
                  })
              );
            })(this, e, t, r)
          );
        }
        static createRandom(e) {
          let t = se(16);
          e || (e = {}),
            e.extraEntropy &&
              (t = (0, s.k9)(
                (0, s.Ab)((0, a.S)((0, s.xW)([t, e.extraEntropy])), 0, 16)
              ));
          const r = re(t, e.locale);
          return Fe.fromMnemonic(r, e.path, e.locale);
        }
        static fromEncryptedJson(e, t, r) {
          return Re(e, t, r).then((e) => new Fe(e));
        }
        static fromEncryptedJsonSync(e, t) {
          return new Fe(Te(e, t));
        }
        static fromMnemonic(e, t, r) {
          return (
            t || (t = Q), new Fe(ee.fromMnemonic(e, null, r).derivePath(t))
          );
        }
      }
      function Me(e, t) {
        return (0, L.x_)(l(e), t);
      }
      function De(e, t, r, n) {
        return (0, L.x_)(R.hash(e, t, r), n);
      }
    },
    91001: (e, t, r) => {
      var n;
      r.d(t, { q: () => n }),
        (function (e) {
          (e.sha256 = "sha256"), (e.sha512 = "sha512");
        })(n || (n = {}));
    },
    94994: (e, t, r) => {
      r.d(t, { l: () => a });
      var n = r(66133);
      const i = new (r(54334).Vy)("rlp/5.8.0");
      function o(e) {
        const t = [];
        for (; e; ) t.unshift(255 & e), (e >>= 8);
        return t;
      }
      function s(e) {
        if (Array.isArray(e)) {
          let t = [];
          if (
            (e.forEach(function (e) {
              t = t.concat(s(e));
            }),
            t.length <= 55)
          )
            return t.unshift(192 + t.length), t;
          const r = o(t.length);
          return r.unshift(247 + r.length), r.concat(t);
        }
        (0, n.f)(e) ||
          i.throwArgumentError("RLP object must be BytesLike", "object", e);
        const t = Array.prototype.slice.call((0, n.k9)(e));
        if (1 === t.length && t[0] <= 127) return t;
        if (t.length <= 55) return t.unshift(128 + t.length), t;
        const r = o(t.length);
        return r.unshift(183 + r.length), r.concat(t);
      }
      function a(e) {
        return (0, n.c$)(s(e));
      }
    },
  },
]);
