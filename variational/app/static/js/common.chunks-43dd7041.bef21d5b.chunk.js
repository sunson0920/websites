(self.webpackChunknostr_assets = self.webpackChunknostr_assets || []).push([
  [6326],
  {
    60: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.TAP_LEAF_SCRIPT)
          throw new Error(
            "Decode Error: could not decode tapLeafScript with key 0x" +
              e.key.toString("hex")
          );
        if ((e.key.length - 2) % 32 !== 0)
          throw new Error(
            "Decode Error: tapLeafScript has invalid control block in key 0x" +
              e.key.toString("hex")
          );
        const t = e.value[e.value.length - 1];
        if ((254 & e.key[1]) !== t)
          throw new Error(
            "Decode Error: tapLeafScript bad leaf version in key 0x" +
              e.key.toString("hex")
          );
        const r = e.value.slice(0, -1);
        return { controlBlock: e.key.slice(1), script: r, leafVersion: t };
      }),
        (t.encode = function (e) {
          const t = n.from([i.InputTypes.TAP_LEAF_SCRIPT]),
            r = n.from([e.leafVersion]);
          return {
            key: n.concat([t, e.controlBlock]),
            value: n.concat([e.script, r]),
          };
        }),
        (t.expected =
          "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }"),
        (t.check = function (e) {
          return (
            n.isBuffer(e.controlBlock) &&
            (e.controlBlock.length - 1) % 32 === 0 &&
            (254 & e.controlBlock[0]) === e.leafVersion &&
            n.isBuffer(e.script)
          );
        }),
        (t.canAddToArray = function (e, t, r) {
          const n = t.controlBlock.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n),
            0 === e.filter((e) => e.controlBlock.equals(t.controlBlock)).length)
          );
        });
    },
    702: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.NON_WITNESS_UTXO)
          throw new Error(
            "Decode Error: could not decode nonWitnessUtxo with key 0x" +
              e.key.toString("hex")
          );
        return e.value;
      }),
        (t.encode = function (e) {
          return { key: n.from([i.InputTypes.NON_WITNESS_UTXO]), value: e };
        }),
        (t.expected = "Buffer"),
        (t.check = function (e) {
          return n.isBuffer(e);
        }),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.nonWitnessUtxo;
        });
    },
    5180: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = (e) =>
        (33 === e.length && [2, 3].includes(e[0])) ||
        (65 === e.length && 4 === e[0]);
      t.makeConverter = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        return {
          decode: function (r) {
            if (r.key[0] !== e)
              throw new Error(
                "Decode Error: could not decode bip32Derivation with key 0x" +
                  r.key.toString("hex")
              );
            const n = r.key.slice(1);
            if (!t(n))
              throw new Error(
                "Decode Error: bip32Derivation has invalid pubkey in key 0x" +
                  r.key.toString("hex")
              );
            if ((r.value.length / 4) % 1 !== 0)
              throw new Error(
                "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4"
              );
            const i = {
              masterFingerprint: r.value.slice(0, 4),
              pubkey: n,
              path: "m",
            };
            for (const e of ((o = r.value.length / 4 - 1),
            [...Array(o).keys()])) {
              const t = r.value.readUInt32LE(4 * e + 4),
                n = !!(2147483648 & t),
                o = 2147483647 & t;
              i.path += "/" + o.toString(10) + (n ? "'" : "");
            }
            var o;
            return i;
          },
          encode: function (t) {
            const r = n.from([e]),
              i = n.concat([r, t.pubkey]),
              o = t.path.split("/"),
              s = n.allocUnsafe(4 * o.length);
            t.masterFingerprint.copy(s, 0);
            let u = 4;
            return (
              o.slice(1).forEach((e) => {
                const t = "'" === e.slice(-1);
                let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                t && (r += 2147483648), s.writeUInt32LE(r, u), (u += 4);
              }),
              { key: i, value: s }
            );
          },
          check: function (e) {
            return (
              n.isBuffer(e.pubkey) &&
              n.isBuffer(e.masterFingerprint) &&
              "string" === typeof e.path &&
              t(e.pubkey) &&
              4 === e.masterFingerprint.length
            );
          },
          expected:
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }",
          canAddToArray: function (e, t, r) {
            const n = t.pubkey.toString("hex");
            return (
              !r.has(n) &&
              (r.add(n),
              0 === e.filter((e) => e.pubkey.equals(t.pubkey)).length)
            );
          },
        };
      };
    },
    5208: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REVERSE_OPS = t.OPS = void 0);
      const r = {
        OP_FALSE: 0,
        OP_0: 0,
        OP_PUSHDATA1: 76,
        OP_PUSHDATA2: 77,
        OP_PUSHDATA4: 78,
        OP_1NEGATE: 79,
        OP_RESERVED: 80,
        OP_TRUE: 81,
        OP_1: 81,
        OP_2: 82,
        OP_3: 83,
        OP_4: 84,
        OP_5: 85,
        OP_6: 86,
        OP_7: 87,
        OP_8: 88,
        OP_9: 89,
        OP_10: 90,
        OP_11: 91,
        OP_12: 92,
        OP_13: 93,
        OP_14: 94,
        OP_15: 95,
        OP_16: 96,
        OP_NOP: 97,
        OP_VER: 98,
        OP_IF: 99,
        OP_NOTIF: 100,
        OP_VERIF: 101,
        OP_VERNOTIF: 102,
        OP_ELSE: 103,
        OP_ENDIF: 104,
        OP_VERIFY: 105,
        OP_RETURN: 106,
        OP_TOALTSTACK: 107,
        OP_FROMALTSTACK: 108,
        OP_2DROP: 109,
        OP_2DUP: 110,
        OP_3DUP: 111,
        OP_2OVER: 112,
        OP_2ROT: 113,
        OP_2SWAP: 114,
        OP_IFDUP: 115,
        OP_DEPTH: 116,
        OP_DROP: 117,
        OP_DUP: 118,
        OP_NIP: 119,
        OP_OVER: 120,
        OP_PICK: 121,
        OP_ROLL: 122,
        OP_ROT: 123,
        OP_SWAP: 124,
        OP_TUCK: 125,
        OP_CAT: 126,
        OP_SUBSTR: 127,
        OP_LEFT: 128,
        OP_RIGHT: 129,
        OP_SIZE: 130,
        OP_INVERT: 131,
        OP_AND: 132,
        OP_OR: 133,
        OP_XOR: 134,
        OP_EQUAL: 135,
        OP_EQUALVERIFY: 136,
        OP_RESERVED1: 137,
        OP_RESERVED2: 138,
        OP_1ADD: 139,
        OP_1SUB: 140,
        OP_2MUL: 141,
        OP_2DIV: 142,
        OP_NEGATE: 143,
        OP_ABS: 144,
        OP_NOT: 145,
        OP_0NOTEQUAL: 146,
        OP_ADD: 147,
        OP_SUB: 148,
        OP_MUL: 149,
        OP_DIV: 150,
        OP_MOD: 151,
        OP_LSHIFT: 152,
        OP_RSHIFT: 153,
        OP_BOOLAND: 154,
        OP_BOOLOR: 155,
        OP_NUMEQUAL: 156,
        OP_NUMEQUALVERIFY: 157,
        OP_NUMNOTEQUAL: 158,
        OP_LESSTHAN: 159,
        OP_GREATERTHAN: 160,
        OP_LESSTHANOREQUAL: 161,
        OP_GREATERTHANOREQUAL: 162,
        OP_MIN: 163,
        OP_MAX: 164,
        OP_WITHIN: 165,
        OP_RIPEMD160: 166,
        OP_SHA1: 167,
        OP_SHA256: 168,
        OP_HASH160: 169,
        OP_HASH256: 170,
        OP_CODESEPARATOR: 171,
        OP_CHECKSIG: 172,
        OP_CHECKSIGVERIFY: 173,
        OP_CHECKMULTISIG: 174,
        OP_CHECKMULTISIGVERIFY: 175,
        OP_NOP1: 176,
        OP_NOP2: 177,
        OP_CHECKLOCKTIMEVERIFY: 177,
        OP_NOP3: 178,
        OP_CHECKSEQUENCEVERIFY: 178,
        OP_NOP4: 179,
        OP_NOP5: 180,
        OP_NOP6: 181,
        OP_NOP7: 182,
        OP_NOP8: 183,
        OP_NOP9: 184,
        OP_NOP10: 185,
        OP_CHECKSIGADD: 186,
        OP_PUBKEYHASH: 253,
        OP_PUBKEY: 254,
        OP_INVALIDOPCODE: 255,
      };
      t.OPS = r;
      const n = {};
      t.REVERSE_OPS = n;
      for (const i of Object.keys(r)) {
        n[r[i]] = i;
      }
    },
    5596: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeConverter = function (e) {
          return {
            decode: function (t) {
              if (t.key[0] !== e)
                throw new Error(
                  "Decode Error: could not decode redeemScript with key 0x" +
                    t.key.toString("hex")
                );
              return t.value;
            },
            encode: function (t) {
              return { key: n.from([e]), value: t };
            },
            check: function (e) {
              return n.isBuffer(e);
            },
            expected: "Buffer",
            canAdd: function (e, t) {
              return !!e && !!t && void 0 === e.redeemScript;
            },
          };
        });
    },
    7653: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.testnet = t.regtest = t.bitcoin = void 0),
        (t.bitcoin = {
          messagePrefix: "\x18Bitcoin Signed Message:\n",
          bech32: "bc",
          bip32: { public: 76067358, private: 76066276 },
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
        }),
        (t.regtest = {
          messagePrefix: "\x18Bitcoin Signed Message:\n",
          bech32: "bcrt",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        }),
        (t.testnet = {
          messagePrefix: "\x18Bitcoin Signed Message:\n",
          bech32: "tb",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        });
    },
    8228: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fastMerkleRoot = void 0),
        (t.fastMerkleRoot = function (e, t) {
          if (!Array.isArray(e)) throw TypeError("Expected values Array");
          if ("function" !== typeof t)
            throw TypeError("Expected digest Function");
          let r = e.length;
          const i = e.concat();
          for (; r > 1; ) {
            let e = 0;
            for (let o = 0; o < r; o += 2, ++e) {
              const s = i[o],
                u = o + 1 === r ? s : i[o + 1],
                a = n.concat([s, u]);
              i[e] = t(a);
            }
            r = e;
          }
          return i[0];
        });
    },
    11654: (e, t, r) => {
      "use strict";
      var n = r(46927),
        i = r(52208),
        o = r(58571);
      function s(e) {
        var t = Object.create(null);
        return (
          e &&
            Object.keys(e).forEach(function (r) {
              if ("default" !== r) {
                var n = Object.getOwnPropertyDescriptor(e, r);
                Object.defineProperty(
                  t,
                  r,
                  n.get
                    ? n
                    : {
                        enumerable: !0,
                        get: function () {
                          return e[r];
                        },
                      }
                );
              }
            }),
          (t.default = e),
          Object.freeze(t)
        );
      }
      var u = s(i),
        a = s(o);
      const c = n.secp256k1.ProjectivePoint,
        f = "Expected Private",
        p = "Expected Point",
        l = "Expected Tweak",
        h = "Expected Signature",
        d = "Expected Extra Data (32 bytes)",
        y = "Expected Scalar",
        _ = new Uint8Array([
          255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
          255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140,
          208, 54, 65, 65,
        ]),
        w = new Uint8Array(32),
        g = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 69, 81, 35, 25, 80,
          183, 95, 196, 64, 45, 161, 114, 47, 201, 186, 238,
        ]),
        m = BigInt(1);
      function E(e, t) {
        for (let r = 0; r < 32; ++r)
          if (e[r] !== t[r]) return e[r] < t[r] ? -1 : 1;
        return 0;
      }
      function b(e) {
        return 0 === E(e, w);
      }
      function S(e) {
        return e instanceof Uint8Array && 32 === e.length && !(E(e, _) >= 0);
      }
      function v(e) {
        return (
          e instanceof Uint8Array &&
          64 === e.length &&
          E(e.subarray(0, 32), _) < 0 &&
          E(e.subarray(32, 64), _) < 0
        );
      }
      function T(e) {
        return (
          e instanceof Uint8Array &&
          64 === e.length &&
          E(e.subarray(0, 32), g) < 0
        );
      }
      function I(e) {
        return e instanceof Uint8Array && 32 === e.length;
      }
      function k(e) {
        return void 0 === e || (e instanceof Uint8Array && 32 === e.length);
      }
      function P(e) {
        let t;
        if ("bigint" === typeof e) t = e;
        else if ("number" === typeof e && Number.isSafeInteger(e) && e >= 0)
          t = BigInt(e);
        else if ("string" === typeof e) {
          if (64 !== e.length)
            throw new Error("Expected 32 bytes of private scalar");
          t = a.hexToNumber(e);
        } else {
          if (!(e instanceof Uint8Array))
            throw new TypeError("Expected valid private scalar");
          if (32 !== e.length)
            throw new Error("Expected 32 bytes of private scalar");
          t = a.bytesToNumberBE(e);
        }
        if (t < 0) throw new Error("Expected private scalar >= 0");
        return t;
      }
      function O(e) {
        return n.secp256k1.utils.normPrivateKeyToScalar(e);
      }
      function A(e, t, r) {
        const n = U(e),
          i = P(t),
          o = c.BASE.multiplyAndAddUnsafe(n, i, m);
        if (!o) throw new Error("Tweaked point at infinity");
        return o.toRawBytes(r);
      }
      function N(e, t) {
        return void 0 === e ? void 0 === t || R(t) : !!e;
      }
      function H(e) {
        try {
          return e();
        } catch (t) {
          return null;
        }
      }
      function B(e) {
        return n.schnorr.utils.lift_x(a.bytesToNumberBE(e));
      }
      function U(e) {
        return 32 === e.length ? B(e) : c.fromHex(e);
      }
      function x(e, t) {
        if ((32 === e.length) !== t) return !1;
        try {
          return t ? !!B(e) : !!c.fromHex(e);
        } catch (r) {
          return !1;
        }
      }
      function C(e) {
        return x(e, !1);
      }
      function R(e) {
        return x(e, !1) && 33 === e.length;
      }
      function L(e) {
        return n.secp256k1.utils.isValidPrivateKey(e);
      }
      function D(e) {
        return x(e, !0);
      }
      function K(e) {
        if (!C(e)) throw new Error(p);
        return e.slice(1, 33);
      }
      function V(e, t) {
        if (!L(e)) throw new Error(f);
        return H(() => n.secp256k1.getPublicKey(e, N(t)));
      }
      (t.isPoint = C),
        (t.isPointCompressed = R),
        (t.isPrivate = L),
        (t.isXOnlyPoint = D),
        (t.pointAdd = function (e, t, r) {
          if (!C(e) || !C(t)) throw new Error(p);
          return H(() => {
            const n = U(e),
              i = U(t);
            return n.equals(i.negate()) ? null : n.add(i).toRawBytes(N(r, e));
          });
        }),
        (t.pointAddScalar = function (e, t, r) {
          if (!C(e)) throw new Error(p);
          if (!S(t)) throw new Error(l);
          return H(() => A(e, t, N(r, e)));
        }),
        (t.pointCompress = function (e, t) {
          if (!C(e)) throw new Error(p);
          return U(e).toRawBytes(N(t, e));
        }),
        (t.pointFromScalar = V),
        (t.pointMultiply = function (e, t, r) {
          if (!C(e)) throw new Error(p);
          if (!S(t)) throw new Error(l);
          return H(() =>
            (function (e, t, r) {
              const n = U(e),
                i = "string" === typeof t ? t : a.bytesToHex(t),
                o = a.hexToNumber(i);
              return n.multiply(o).toRawBytes(r);
            })(e, t, N(r, e))
          );
        }),
        (t.privateAdd = function (e, t) {
          if (!L(e)) throw new Error(f);
          if (!S(t)) throw new Error(l);
          return H(() =>
            (function (e, t) {
              const r = O(e),
                i = P(t),
                o = a.numberToBytesBE(u.mod(r + i, n.secp256k1.CURVE.n), 32);
              return n.secp256k1.utils.isValidPrivateKey(o) ? o : null;
            })(e, t)
          );
        }),
        (t.privateNegate = function (e) {
          if (!L(e)) throw new Error(f);
          return (function (e) {
            const t = O(e),
              r = a.numberToBytesBE(n.secp256k1.CURVE.n - t, 32);
            return n.secp256k1.utils.isValidPrivateKey(r) ? r : null;
          })(e);
        }),
        (t.privateSub = function (e, t) {
          if (!L(e)) throw new Error(f);
          if (!S(t)) throw new Error(l);
          return H(() =>
            (function (e, t) {
              const r = O(e),
                i = P(t),
                o = a.numberToBytesBE(u.mod(r - i, n.secp256k1.CURVE.n), 32);
              return n.secp256k1.utils.isValidPrivateKey(o) ? o : null;
            })(e, t)
          );
        }),
        (t.recover = function (e, t, r, i) {
          if (!I(e)) throw new Error("Expected Hash");
          if (
            !v(t) ||
            !(function (e) {
              return !(b(e.subarray(0, 32)) || b(e.subarray(32, 64)));
            })(t)
          )
            throw new Error(h);
          if (2 & r && !T(t)) throw new Error("Bad Recovery Id");
          if (!D(t.subarray(0, 32))) throw new Error(h);
          const o = n.secp256k1.Signature.fromCompact(t)
            .addRecoveryBit(r)
            .recoverPublicKey(e);
          if (!o) throw new Error(h);
          return o.toRawBytes(N(i));
        }),
        (t.sign = function (e, t, r) {
          if (!L(t)) throw new Error(f);
          if (!I(e)) throw new Error(y);
          if (!k(r)) throw new Error(d);
          return n.secp256k1
            .sign(e, t, { extraEntropy: r })
            .toCompactRawBytes();
        }),
        (t.signRecoverable = function (e, t, r) {
          if (!L(t)) throw new Error(f);
          if (!I(e)) throw new Error(y);
          if (!k(r)) throw new Error(d);
          const i = n.secp256k1.sign(e, t, { extraEntropy: r });
          return { signature: i.toCompactRawBytes(), recoveryId: i.recovery };
        }),
        (t.signSchnorr = function (e, t, r) {
          if (!L(t)) throw new Error(f);
          if (!I(e)) throw new Error(y);
          if (!k(r)) throw new Error(d);
          return n.schnorr.sign(e, t, r);
        }),
        (t.verify = function (e, t, r, i) {
          if (!C(t)) throw new Error(p);
          if (!v(r)) throw new Error(h);
          if (!I(e)) throw new Error(y);
          return n.secp256k1.verify(r, e, t, { lowS: i });
        }),
        (t.verifySchnorr = function (e, t, r) {
          if (!D(t)) throw new Error(p);
          if (!v(r)) throw new Error(h);
          if (!I(e)) throw new Error(y);
          return n.schnorr.verify(r, e, t);
        }),
        (t.xOnlyPointAddTweak = function (e, t) {
          if (!D(e)) throw new Error(p);
          if (!S(t)) throw new Error(l);
          return H(() => {
            const r = A(e, t, !0);
            return { parity: r[0] % 2 === 1 ? 1 : 0, xOnlyPubkey: r.slice(1) };
          });
        }),
        (t.xOnlyPointFromPoint = K),
        (t.xOnlyPointFromScalar = function (e) {
          if (!L(e)) throw new Error(f);
          return K(V(e));
        });
    },
    12536: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.checkTaprootInputForSigs =
          t.tapTreeFromList =
          t.tapTreeToList =
          t.tweakInternalPubKey =
          t.checkTaprootOutputFields =
          t.checkTaprootInputFields =
          t.isTaprootOutput =
          t.isTaprootInput =
          t.serializeTaprootSignature =
          t.tapScriptFinalizer =
          t.toXOnly =
            void 0);
      const i = r(24781),
        o = r(71296),
        s = r(50282),
        u = r(41443),
        a = r(20434),
        c = r(50282);
      function f(e) {
        return (
          e &&
          !!(
            e.tapInternalKey ||
            e.tapMerkleRoot ||
            (e.tapLeafScript && e.tapLeafScript.length) ||
            (e.tapBip32Derivation && e.tapBip32Derivation.length) ||
            (e.witnessUtxo && (0, s.isP2TR)(e.witnessUtxo.script))
          )
        );
      }
      function p(e, t) {
        return (
          e &&
          !!(
            e.tapInternalKey ||
            e.tapTree ||
            (e.tapBip32Derivation && e.tapBip32Derivation.length) ||
            (t && (0, s.isP2TR)(t))
          )
        );
      }
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return 1 === e.length && 0 === e[0].depth
          ? { output: e[0].script, version: e[0].leafVersion }
          : (function (e) {
              let t;
              for (const r of e)
                if (((t = y(r, t)), !t))
                  throw new Error("No room left to insert tapleaf in tree");
              return t;
            })(e);
      }
      function h(e) {
        return {
          signature: e.slice(0, 64),
          hashType: e.slice(64)[0] || o.Transaction.SIGHASH_DEFAULT,
        };
      }
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (r > u.MAX_TAPTREE_DEPTH)
          throw new Error("Max taptree depth exceeded.");
        return e
          ? (0, i.isTapleaf)(e)
            ? (t.push({
                depth: r,
                leafVersion: e.version || u.LEAF_VERSION_TAPSCRIPT,
                script: e.output,
              }),
              t)
            : (e[0] && d(e[0], t, r + 1), e[1] && d(e[1], t, r + 1), t)
          : [];
      }
      function y(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (r > u.MAX_TAPTREE_DEPTH)
          throw new Error("Max taptree depth exceeded.");
        if (e.depth === r)
          return t ? void 0 : { output: e.script, version: e.leafVersion };
        if ((0, i.isTapleaf)(t)) return;
        const n = y(e, t && t[0], r + 1);
        if (n) return [n, t && t[1]];
        const o = y(e, t && t[1], r + 1);
        return o ? [t && t[0], o] : void 0;
      }
      function _(e, t) {
        if (!t) return !0;
        const r = (0, u.tapleafHash)({
          output: e.script,
          version: e.leafVersion,
        });
        return (0, u.rootHashFromPath)(e.controlBlock, r).equals(t);
      }
      function w(e) {
        return (
          e &&
          !!(
            e.redeemScript ||
            e.witnessScript ||
            (e.bip32Derivation && e.bip32Derivation.length)
          )
        );
      }
      (t.toXOnly = (e) => (32 === e.length ? e : e.slice(1, 33))),
        (t.tapScriptFinalizer = function (e, t, r) {
          const n = (function (e, t, r) {
            if (!e.tapScriptSig || !e.tapScriptSig.length)
              throw new Error(
                `Can not finalize taproot input #${t}. No tapleaf script signature provided.`
              );
            const n = (e.tapLeafScript || [])
              .sort((e, t) => e.controlBlock.length - t.controlBlock.length)
              .find((t) =>
                (function (e, t, r) {
                  const n = (0, u.tapleafHash)({
                    output: e.script,
                    version: e.leafVersion,
                  });
                  return (
                    (!r || r.equals(n)) &&
                    void 0 !== t.find((e) => e.leafHash.equals(n))
                  );
                })(t, e.tapScriptSig, r)
              );
            if (!n)
              throw new Error(
                `Can not finalize taproot input #${t}. Signature for tapleaf script not found.`
              );
            return n;
          })(t, e, r);
          try {
            const e = (function (e, t) {
                const r = (0, u.tapleafHash)({
                  output: t.script,
                  version: t.leafVersion,
                });
                return (e.tapScriptSig || [])
                  .filter((e) => e.leafHash.equals(r))
                  .map((e) =>
                    (function (e, t) {
                      return Object.assign(
                        {
                          positionInScript: (0, s.pubkeyPositionInScript)(
                            t.pubkey,
                            e
                          ),
                        },
                        t
                      );
                    })(t.script, e)
                  )
                  .sort((e, t) => t.positionInScript - e.positionInScript)
                  .map((e) => e.signature);
              })(t, n),
              r = e.concat(n.script).concat(n.controlBlock);
            return {
              finalScriptWitness: (0, s.witnessStackToScriptWitness)(r),
            };
          } catch (i) {
            throw new Error(`Can not finalize taproot input #${e}: ${i}`);
          }
        }),
        (t.serializeTaprootSignature = function (e, t) {
          const r = t ? n.from([t]) : n.from([]);
          return n.concat([e, r]);
        }),
        (t.isTaprootInput = f),
        (t.isTaprootOutput = p),
        (t.checkTaprootInputFields = function (e, t, r) {
          !(function (e, t, r) {
            const n = f(e) && w(t),
              i = w(e) && f(t),
              o = e === t && f(t) && w(t);
            if (n || i || o)
              throw new Error(
                `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
              );
          })(e, t, r),
            (function (e, t, r) {
              if (t.tapMerkleRoot) {
                const n = (t.tapLeafScript || []).every((e) =>
                    _(e, t.tapMerkleRoot)
                  ),
                  i = (e.tapLeafScript || []).every((e) =>
                    _(e, t.tapMerkleRoot)
                  );
                if (!n || !i)
                  throw new Error(
                    `Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`
                  );
              } else if (e.tapMerkleRoot) {
                if (
                  !(t.tapLeafScript || []).every((t) => _(t, e.tapMerkleRoot))
                )
                  throw new Error(
                    `Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`
                  );
              }
            })(e, t, r);
        }),
        (t.checkTaprootOutputFields = function (e, t, r) {
          !(function (e, t, r) {
            const n = p(e) && w(t),
              i = w(e) && p(t),
              o = e === t && p(t) && w(t);
            if (n || i || o)
              throw new Error(
                `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
              );
          })(e, t, r),
            (function (e, t) {
              if (!t.tapTree && !t.tapInternalKey) return;
              const r = t.tapInternalKey || e.tapInternalKey,
                n = t.tapTree || e.tapTree;
              if (r) {
                const { script: t } = e,
                  i = (function (e, t) {
                    const r = t && l(t.leaves),
                      { output: n } = (0, a.p2tr)({
                        internalPubkey: e,
                        scriptTree: r,
                      });
                    return n;
                  })(r, n);
                if (t && !t.equals(i))
                  throw new Error(
                    "Error adding output. Script or address missmatch."
                  );
              }
            })(e, t);
        }),
        (t.tweakInternalPubKey = function (e, t) {
          const r = t.tapInternalKey,
            n = r && (0, u.tweakKey)(r, t.tapMerkleRoot);
          if (!n)
            throw new Error(
              `Cannot tweak tap internal key for input #${e}. Public key: ${
                r && r.toString("hex")
              }`
            );
          return n.x;
        }),
        (t.tapTreeToList = function (e) {
          if (!(0, i.isTaptree)(e))
            throw new Error(
              "Cannot convert taptree to tapleaf list. Expecting a tapree structure."
            );
          return d(e);
        }),
        (t.tapTreeFromList = l),
        (t.checkTaprootInputForSigs = function (e, t) {
          return (function (e) {
            const t = [];
            e.tapKeySig && t.push(e.tapKeySig);
            e.tapScriptSig && t.push(...e.tapScriptSig.map((e) => e.signature));
            if (!t.length) {
              const r = (function (e) {
                if (!e) return;
                const t = e.slice(2);
                if (64 === t.length || 65 === t.length) return t;
              })(e.finalScriptWitness);
              r && t.push(r);
            }
            return t;
          })(e).some((e) => (0, c.signatureBlocksAction)(e, h, t));
        });
    },
    13589: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.GlobalTypes.GLOBAL_XPUB)
          throw new Error(
            "Decode Error: could not decode globalXpub with key 0x" +
              e.key.toString("hex")
          );
        if (79 !== e.key.length || ![2, 3].includes(e.key[46]))
          throw new Error(
            "Decode Error: globalXpub has invalid extended pubkey in key 0x" +
              e.key.toString("hex")
          );
        if ((e.value.length / 4) % 1 !== 0)
          throw new Error(
            "Decode Error: Global GLOBAL_XPUB value length should be multiple of 4"
          );
        const t = e.key.slice(1),
          r = {
            masterFingerprint: e.value.slice(0, 4),
            extendedPubkey: t,
            path: "m",
          };
        for (const i of ((n = e.value.length / 4 - 1), [...Array(n).keys()])) {
          const t = e.value.readUInt32LE(4 * i + 4),
            n = !!(2147483648 & t),
            o = 2147483647 & t;
          r.path += "/" + o.toString(10) + (n ? "'" : "");
        }
        var n;
        return r;
      }),
        (t.encode = function (e) {
          const t = n.from([i.GlobalTypes.GLOBAL_XPUB]),
            r = n.concat([t, e.extendedPubkey]),
            o = e.path.split("/"),
            s = n.allocUnsafe(4 * o.length);
          e.masterFingerprint.copy(s, 0);
          let u = 4;
          return (
            o.slice(1).forEach((e) => {
              const t = "'" === e.slice(-1);
              let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
              t && (r += 2147483648), s.writeUInt32LE(r, u), (u += 4);
            }),
            { key: r, value: s }
          );
        }),
        (t.expected =
          "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }"),
        (t.check = function (e) {
          const t = e.extendedPubkey,
            r = e.masterFingerprint,
            i = e.path;
          return (
            n.isBuffer(t) &&
            78 === t.length &&
            [2, 3].indexOf(t[45]) > -1 &&
            n.isBuffer(r) &&
            4 === r.length &&
            "string" === typeof i &&
            !!i.match(/^m(\/\d+'?)*$/)
          );
        }),
        (t.canAddToArray = function (e, t, r) {
          const n = t.extendedPubkey.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n),
            0 ===
              e.filter((e) => e.extendedPubkey.equals(t.extendedPubkey)).length)
          );
        });
    },
    14667: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.SIGHASH_TYPE)
          throw new Error(
            "Decode Error: could not decode sighashType with key 0x" +
              e.key.toString("hex")
          );
        return e.value.readUInt32LE(0);
      }),
        (t.encode = function (e) {
          const t = n.from([i.InputTypes.SIGHASH_TYPE]),
            r = n.allocUnsafe(4);
          return r.writeUInt32LE(e, 0), { key: t, value: r };
        }),
        (t.expected = "number"),
        (t.check = function (e) {
          return "number" === typeof e;
        }),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.sighashType;
        });
    },
    15340: () => {},
    17479: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => u });
      var n = r(30746),
        i = r(51317),
        o = r(69381),
        s = r(93049);
      function u(e) {
        let t;
        if ("string" === typeof e) t = (0, s.uT)(e);
        else {
          const r = (0, o.e)(e),
            n = e.length;
          for (let o = 0; o < n; o++) {
            const n = e[o];
            if (!(0, i.WL)(n)) {
              t = (0, s.uT)(n, r);
              break;
            }
          }
        }
        if (!t) throw new n.xo({ signature: e });
        return t;
      }
    },
    20039: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.p2pkh = void 0);
      const i = r(88743),
        o = r(7653),
        s = r(47165),
        u = r(24781),
        a = r(63322),
        c = r(63925),
        f = s.OPS;
      t.p2pkh = function (e, t) {
        if (!e.address && !e.hash && !e.output && !e.pubkey && !e.input)
          throw new TypeError("Not enough data");
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, u.typeforce)(
            {
              network: u.typeforce.maybe(u.typeforce.Object),
              address: u.typeforce.maybe(u.typeforce.String),
              hash: u.typeforce.maybe(u.typeforce.BufferN(20)),
              output: u.typeforce.maybe(u.typeforce.BufferN(25)),
              pubkey: u.typeforce.maybe(u.isPoint),
              signature: u.typeforce.maybe(s.isCanonicalScriptSignature),
              input: u.typeforce.maybe(u.typeforce.Buffer),
            },
            e
          );
        const r = a.value(() => {
            const t = n.from(c.decode(e.address));
            return { version: t.readUInt8(0), hash: t.slice(1) };
          }),
          p = a.value(() => s.decompile(e.input)),
          l = e.network || o.bitcoin,
          h = { name: "p2pkh", network: l };
        if (
          (a.prop(h, "address", () => {
            if (!h.hash) return;
            const e = n.allocUnsafe(21);
            return (
              e.writeUInt8(l.pubKeyHash, 0), h.hash.copy(e, 1), c.encode(e)
            );
          }),
          a.prop(h, "hash", () =>
            e.output
              ? e.output.slice(3, 23)
              : e.address
              ? r().hash
              : e.pubkey || h.pubkey
              ? i.hash160(e.pubkey || h.pubkey)
              : void 0
          ),
          a.prop(h, "output", () => {
            if (h.hash)
              return s.compile([
                f.OP_DUP,
                f.OP_HASH160,
                h.hash,
                f.OP_EQUALVERIFY,
                f.OP_CHECKSIG,
              ]);
          }),
          a.prop(h, "pubkey", () => {
            if (e.input) return p()[1];
          }),
          a.prop(h, "signature", () => {
            if (e.input) return p()[0];
          }),
          a.prop(h, "input", () => {
            if (e.pubkey && e.signature)
              return s.compile([e.signature, e.pubkey]);
          }),
          a.prop(h, "witness", () => {
            if (h.input) return [];
          }),
          t.validate)
        ) {
          let t = n.from([]);
          if (e.address) {
            if (r().version !== l.pubKeyHash)
              throw new TypeError("Invalid version or Network mismatch");
            if (20 !== r().hash.length) throw new TypeError("Invalid address");
            t = r().hash;
          }
          if (e.hash) {
            if (t.length > 0 && !t.equals(e.hash))
              throw new TypeError("Hash mismatch");
            t = e.hash;
          }
          if (e.output) {
            if (
              25 !== e.output.length ||
              e.output[0] !== f.OP_DUP ||
              e.output[1] !== f.OP_HASH160 ||
              20 !== e.output[2] ||
              e.output[23] !== f.OP_EQUALVERIFY ||
              e.output[24] !== f.OP_CHECKSIG
            )
              throw new TypeError("Output is invalid");
            const r = e.output.slice(3, 23);
            if (t.length > 0 && !t.equals(r))
              throw new TypeError("Hash mismatch");
            t = r;
          }
          if (e.pubkey) {
            const r = i.hash160(e.pubkey);
            if (t.length > 0 && !t.equals(r))
              throw new TypeError("Hash mismatch");
            t = r;
          }
          if (e.input) {
            const r = p();
            if (2 !== r.length) throw new TypeError("Input is invalid");
            if (!s.isCanonicalScriptSignature(r[0]))
              throw new TypeError("Input has invalid signature");
            if (!(0, u.isPoint)(r[1]))
              throw new TypeError("Input has invalid pubkey");
            if (e.signature && !e.signature.equals(r[0]))
              throw new TypeError("Signature mismatch");
            if (e.pubkey && !e.pubkey.equals(r[1]))
              throw new TypeError("Pubkey mismatch");
            const n = i.hash160(r[1]);
            if (t.length > 0 && !t.equals(n))
              throw new TypeError("Hash mismatch");
          }
        }
        return Object.assign(h, e);
      };
    },
    20434: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.p2tr =
          t.p2wsh =
          t.p2wpkh =
          t.p2sh =
          t.p2pkh =
          t.p2pk =
          t.p2ms =
          t.embed =
            void 0);
      const n = r(62227);
      Object.defineProperty(t, "embed", {
        enumerable: !0,
        get: function () {
          return n.p2data;
        },
      });
      const i = r(24894);
      Object.defineProperty(t, "p2ms", {
        enumerable: !0,
        get: function () {
          return i.p2ms;
        },
      });
      const o = r(95047);
      Object.defineProperty(t, "p2pk", {
        enumerable: !0,
        get: function () {
          return o.p2pk;
        },
      });
      const s = r(20039);
      Object.defineProperty(t, "p2pkh", {
        enumerable: !0,
        get: function () {
          return s.p2pkh;
        },
      });
      const u = r(62813);
      Object.defineProperty(t, "p2sh", {
        enumerable: !0,
        get: function () {
          return u.p2sh;
        },
      });
      const a = r(68678);
      Object.defineProperty(t, "p2wpkh", {
        enumerable: !0,
        get: function () {
          return a.p2wpkh;
        },
      });
      const c = r(87258);
      Object.defineProperty(t, "p2wsh", {
        enumerable: !0,
        get: function () {
          return c.p2wsh;
        },
      });
      const f = r(37404);
      Object.defineProperty(t, "p2tr", {
        enumerable: !0,
        get: function () {
          return f.p2tr;
        },
      });
    },
    20454: (e, t, r) => {
      "use strict";
      function n(e) {
        if (null == e) throw new TypeError("Cannot destructure " + e);
      }
      r.d(t, { A: () => n });
    },
    20759: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encode = t.decode = t.check = void 0),
        (t.check = function (e) {
          if (e.length < 8) return !1;
          if (e.length > 72) return !1;
          if (48 !== e[0]) return !1;
          if (e[1] !== e.length - 2) return !1;
          if (2 !== e[2]) return !1;
          const t = e[3];
          if (0 === t) return !1;
          if (5 + t >= e.length) return !1;
          if (2 !== e[4 + t]) return !1;
          const r = e[5 + t];
          return (
            0 !== r &&
            6 + t + r === e.length &&
            !(128 & e[4]) &&
            !(t > 1 && 0 === e[4] && !(128 & e[5])) &&
            !(128 & e[t + 6]) &&
            !(r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
          );
        }),
        (t.decode = function (e) {
          if (e.length < 8) throw new Error("DER sequence length is too short");
          if (e.length > 72) throw new Error("DER sequence length is too long");
          if (48 !== e[0]) throw new Error("Expected DER sequence");
          if (e[1] !== e.length - 2)
            throw new Error("DER sequence length is invalid");
          if (2 !== e[2]) throw new Error("Expected DER integer");
          const t = e[3];
          if (0 === t) throw new Error("R length is zero");
          if (5 + t >= e.length) throw new Error("R length is too long");
          if (2 !== e[4 + t]) throw new Error("Expected DER integer (2)");
          const r = e[5 + t];
          if (0 === r) throw new Error("S length is zero");
          if (6 + t + r !== e.length) throw new Error("S length is invalid");
          if (128 & e[4]) throw new Error("R value is negative");
          if (t > 1 && 0 === e[4] && !(128 & e[5]))
            throw new Error("R value excessively padded");
          if (128 & e[t + 6]) throw new Error("S value is negative");
          if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
            throw new Error("S value excessively padded");
          return { r: e.slice(4, 4 + t), s: e.slice(6 + t) };
        }),
        (t.encode = function (e, t) {
          const r = e.length,
            i = t.length;
          if (0 === r) throw new Error("R length is zero");
          if (0 === i) throw new Error("S length is zero");
          if (r > 33) throw new Error("R length is too long");
          if (i > 33) throw new Error("S length is too long");
          if (128 & e[0]) throw new Error("R value is negative");
          if (128 & t[0]) throw new Error("S value is negative");
          if (r > 1 && 0 === e[0] && !(128 & e[1]))
            throw new Error("R value excessively padded");
          if (i > 1 && 0 === t[0] && !(128 & t[1]))
            throw new Error("S value excessively padded");
          const o = n.allocUnsafe(6 + r + i);
          return (
            (o[0] = 48),
            (o[1] = o.length - 2),
            (o[2] = 2),
            (o[3] = e.length),
            e.copy(o, 4),
            (o[4 + r] = 2),
            (o[5 + r] = t.length),
            t.copy(o, 6 + r),
            o
          );
        });
    },
    22838: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(40988);
      function i(e, t, r) {
        return (n) => {
          if (e.has(n)) return;
          const i = r.filter((e) => e.key.toString("hex") === n)[0];
          t.push(i), e.add(n);
        };
      }
      function o(e) {
        return e.globalMap.unsignedTx;
      }
      function s(e) {
        const t = new Set();
        return (
          e.forEach((e) => {
            const r = e.key.toString("hex");
            if (t.has(r))
              throw new Error("Combine: KeyValue Map keys should be unique");
            t.add(r);
          }),
          t
        );
      }
      t.combine = function (e) {
        const t = e[0],
          r = n.psbtToKeyVals(t),
          u = e.slice(1);
        if (0 === u.length) throw new Error("Combine: Nothing to combine");
        const a = o(t);
        if (void 0 === a) throw new Error("Combine: Self missing transaction");
        const c = s(r.globalKeyVals),
          f = r.inputKeyVals.map(s),
          p = r.outputKeyVals.map(s);
        for (const l of u) {
          const e = o(l);
          if (void 0 === e || !e.toBuffer().equals(a.toBuffer()))
            throw new Error(
              "Combine: One of the Psbts does not have the same transaction."
            );
          const t = n.psbtToKeyVals(l);
          s(t.globalKeyVals).forEach(i(c, r.globalKeyVals, t.globalKeyVals));
          t.inputKeyVals
            .map(s)
            .forEach((e, n) =>
              e.forEach(i(f[n], r.inputKeyVals[n], t.inputKeyVals[n]))
            );
          t.outputKeyVals
            .map(s)
            .forEach((e, n) =>
              e.forEach(i(p[n], r.outputKeyVals[n], t.outputKeyVals[n]))
            );
        }
        return n.psbtFromKeyVals(a, {
          globalMapKeyVals: r.globalKeyVals,
          inputKeyVals: r.inputKeyVals,
          outputKeyVals: r.outputKeyVals,
        });
      };
    },
    24765: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var n = r(27800);
      function i(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (0, n.A)(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var i = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return i >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var s,
          u = !0,
          a = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (a = !0), (s = e);
          },
          f: function () {
            try {
              u || null == r.return || r.return();
            } finally {
              if (a) throw s;
            }
          },
        };
      }
    },
    24781: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.oneOf =
          t.Null =
          t.BufferN =
          t.Function =
          t.UInt32 =
          t.UInt8 =
          t.tuple =
          t.maybe =
          t.Hex =
          t.Buffer =
          t.String =
          t.Boolean =
          t.Array =
          t.Number =
          t.Hash256bit =
          t.Hash160bit =
          t.Buffer256bit =
          t.isTaptree =
          t.isTapleaf =
          t.TAPLEAF_VERSION_MASK =
          t.Satoshi =
          t.isPoint =
          t.stacksEqual =
          t.typeforce =
            void 0);
      const n = r(13740);
      t.typeforce = r(45489);
      const i = n.Buffer.alloc(32, 0),
        o = n.Buffer.from(
          "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          "hex"
        );
      (t.stacksEqual = function (e, t) {
        return e.length === t.length && e.every((e, r) => e.equals(t[r]));
      }),
        (t.isPoint = function (e) {
          if (!n.Buffer.isBuffer(e)) return !1;
          if (e.length < 33) return !1;
          const t = e[0],
            r = e.slice(1, 33);
          if (0 === r.compare(i)) return !1;
          if (r.compare(o) >= 0) return !1;
          if ((2 === t || 3 === t) && 33 === e.length) return !0;
          const s = e.slice(33);
          return (
            0 !== s.compare(i) &&
            !(s.compare(o) >= 0) &&
            4 === t &&
            65 === e.length
          );
        });
      function s(e) {
        return (
          !(!e || !("output" in e)) &&
          !!n.Buffer.isBuffer(e.output) &&
          (void 0 === e.version ||
            (e.version & t.TAPLEAF_VERSION_MASK) === e.version)
        );
      }
      (t.Satoshi = function (e) {
        return t.typeforce.UInt53(e) && e <= 21e14;
      }),
        (t.TAPLEAF_VERSION_MASK = 254),
        (t.isTapleaf = s),
        (t.isTaptree = function e(r) {
          return (0, t.Array)(r)
            ? 2 === r.length && r.every((t) => e(t))
            : s(r);
        }),
        (t.Buffer256bit = t.typeforce.BufferN(32)),
        (t.Hash160bit = t.typeforce.BufferN(20)),
        (t.Hash256bit = t.typeforce.BufferN(32)),
        (t.Number = t.typeforce.Number),
        (t.Array = t.typeforce.Array),
        (t.Boolean = t.typeforce.Boolean),
        (t.String = t.typeforce.String),
        (t.Buffer = t.typeforce.Buffer),
        (t.Hex = t.typeforce.Hex),
        (t.maybe = t.typeforce.maybe),
        (t.tuple = t.typeforce.tuple),
        (t.UInt8 = t.typeforce.UInt8),
        (t.UInt32 = t.typeforce.UInt32),
        (t.Function = t.typeforce.Function),
        (t.BufferN = t.typeforce.BufferN),
        (t.Null = t.typeforce.Null),
        (t.oneOf = t.typeforce.oneOf);
    },
    24894: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.p2ms = void 0);
      const n = r(7653),
        i = r(47165),
        o = r(24781),
        s = r(63322),
        u = i.OPS,
        a = u.OP_RESERVED;
      t.p2ms = function (e, t) {
        if (
          !e.input &&
          !e.output &&
          (!e.pubkeys || void 0 === e.m) &&
          !e.signatures
        )
          throw new TypeError("Not enough data");
        function r(e) {
          return (
            i.isCanonicalScriptSignature(e) ||
            void 0 !== (t.allowIncomplete && e === u.OP_0)
          );
        }
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, o.typeforce)(
            {
              network: o.typeforce.maybe(o.typeforce.Object),
              m: o.typeforce.maybe(o.typeforce.Number),
              n: o.typeforce.maybe(o.typeforce.Number),
              output: o.typeforce.maybe(o.typeforce.Buffer),
              pubkeys: o.typeforce.maybe(o.typeforce.arrayOf(o.isPoint)),
              signatures: o.typeforce.maybe(o.typeforce.arrayOf(r)),
              input: o.typeforce.maybe(o.typeforce.Buffer),
            },
            e
          );
        const c = { network: e.network || n.bitcoin };
        let f = [],
          p = !1;
        function l(e) {
          p ||
            ((p = !0),
            (f = i.decompile(e)),
            (c.m = f[0] - a),
            (c.n = f[f.length - 2] - a),
            (c.pubkeys = f.slice(1, -2)));
        }
        if (
          (s.prop(c, "output", () => {
            if (e.m && c.n && e.pubkeys)
              return i.compile(
                [].concat(a + e.m, e.pubkeys, a + c.n, u.OP_CHECKMULTISIG)
              );
          }),
          s.prop(c, "m", () => {
            if (c.output) return l(c.output), c.m;
          }),
          s.prop(c, "n", () => {
            if (c.pubkeys) return c.pubkeys.length;
          }),
          s.prop(c, "pubkeys", () => {
            if (e.output) return l(e.output), c.pubkeys;
          }),
          s.prop(c, "signatures", () => {
            if (e.input) return i.decompile(e.input).slice(1);
          }),
          s.prop(c, "input", () => {
            if (e.signatures) return i.compile([u.OP_0].concat(e.signatures));
          }),
          s.prop(c, "witness", () => {
            if (c.input) return [];
          }),
          s.prop(c, "name", () => {
            if (c.m && c.n) return `p2ms(${c.m} of ${c.n})`;
          }),
          t.validate)
        ) {
          if (e.output) {
            if ((l(e.output), !o.typeforce.Number(f[0])))
              throw new TypeError("Output is invalid");
            if (!o.typeforce.Number(f[f.length - 2]))
              throw new TypeError("Output is invalid");
            if (f[f.length - 1] !== u.OP_CHECKMULTISIG)
              throw new TypeError("Output is invalid");
            if (c.m <= 0 || c.n > 16 || c.m > c.n || c.n !== f.length - 3)
              throw new TypeError("Output is invalid");
            if (!c.pubkeys.every((e) => (0, o.isPoint)(e)))
              throw new TypeError("Output is invalid");
            if (void 0 !== e.m && e.m !== c.m)
              throw new TypeError("m mismatch");
            if (void 0 !== e.n && e.n !== c.n)
              throw new TypeError("n mismatch");
            if (e.pubkeys && !(0, o.stacksEqual)(e.pubkeys, c.pubkeys))
              throw new TypeError("Pubkeys mismatch");
          }
          if (e.pubkeys) {
            if (void 0 !== e.n && e.n !== e.pubkeys.length)
              throw new TypeError("Pubkey count mismatch");
            if (((c.n = e.pubkeys.length), c.n < c.m))
              throw new TypeError("Pubkey count cannot be less than m");
          }
          if (e.signatures) {
            if (e.signatures.length < c.m)
              throw new TypeError("Not enough signatures provided");
            if (e.signatures.length > c.m)
              throw new TypeError("Too many signatures provided");
          }
          if (e.input) {
            if (e.input[0] !== u.OP_0) throw new TypeError("Input is invalid");
            if (0 === c.signatures.length || !c.signatures.every(r))
              throw new TypeError("Input has invalid signature(s)");
            if (e.signatures && !(0, o.stacksEqual)(e.signatures, c.signatures))
              throw new TypeError("Signature mismatch");
            if (void 0 !== e.m && e.m !== e.signatures.length)
              throw new TypeError("Signature count mismatch");
          }
        }
        return Object.assign(c, e);
      };
    },
    25495: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      function i(e) {
        if (e < 0 || e > 9007199254740991 || e % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function o(e) {
        return i(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
      }
      (t.encode = function e(t, r, s) {
        if ((i(t), r || (r = n.allocUnsafe(o(t))), !n.isBuffer(r)))
          throw new TypeError("buffer must be a Buffer instance");
        return (
          s || (s = 0),
          t < 253
            ? (r.writeUInt8(t, s), Object.assign(e, { bytes: 1 }))
            : t <= 65535
            ? (r.writeUInt8(253, s),
              r.writeUInt16LE(t, s + 1),
              Object.assign(e, { bytes: 3 }))
            : t <= 4294967295
            ? (r.writeUInt8(254, s),
              r.writeUInt32LE(t, s + 1),
              Object.assign(e, { bytes: 5 }))
            : (r.writeUInt8(255, s),
              r.writeUInt32LE(t >>> 0, s + 1),
              r.writeUInt32LE((t / 4294967296) | 0, s + 5),
              Object.assign(e, { bytes: 9 })),
          r
        );
      }),
        (t.decode = function e(t, r) {
          if (!n.isBuffer(t))
            throw new TypeError("buffer must be a Buffer instance");
          r || (r = 0);
          const o = t.readUInt8(r);
          if (o < 253) return Object.assign(e, { bytes: 1 }), o;
          if (253 === o)
            return Object.assign(e, { bytes: 3 }), t.readUInt16LE(r + 1);
          if (254 === o)
            return Object.assign(e, { bytes: 5 }), t.readUInt32LE(r + 1);
          {
            Object.assign(e, { bytes: 9 });
            const n = t.readUInt32LE(r + 1),
              o = 4294967296 * t.readUInt32LE(r + 5) + n;
            return i(o), o;
          }
        }),
        (t.encodingLength = o);
    },
    26265: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeChecker = function (e) {
          return function (t) {
            let r;
            if (
              e.includes(t.key[0]) &&
              ((r = t.key.slice(1)),
              (33 !== r.length && 65 !== r.length) || ![2, 3, 4].includes(r[0]))
            )
              throw new Error(
                "Format Error: invalid pubkey in key 0x" + t.key.toString("hex")
              );
            return r;
          };
        });
    },
    27224: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encode = t.decode = void 0);
      const i = r(20759),
        o = r(47165),
        s = r(24781),
        { typeforce: u } = s,
        a = n.alloc(1, 0);
      function c(e) {
        let t = 0;
        for (; 0 === e[t]; ) ++t;
        return t === e.length
          ? a
          : 128 & (e = e.slice(t))[0]
          ? n.concat([a, e], 1 + e.length)
          : e;
      }
      function f(e) {
        0 === e[0] && (e = e.slice(1));
        const t = n.alloc(32, 0),
          r = Math.max(0, 32 - e.length);
        return e.copy(t, r), t;
      }
      (t.decode = function (e) {
        const t = e.readUInt8(e.length - 1);
        if (!(0, o.isDefinedHashType)(t))
          throw new Error("Invalid hashType " + t);
        const r = i.decode(e.slice(0, -1)),
          s = f(r.r),
          u = f(r.s);
        return { signature: n.concat([s, u], 64), hashType: t };
      }),
        (t.encode = function (e, t) {
          if (
            (u(
              { signature: s.BufferN(64), hashType: s.UInt8 },
              { signature: e, hashType: t }
            ),
            !(0, o.isDefinedHashType)(t))
          )
            throw new Error("Invalid hashType " + t);
          const r = n.allocUnsafe(1);
          r.writeUInt8(t, 0);
          const a = c(e.slice(0, 32)),
            f = c(e.slice(32, 64));
          return n.concat([i.encode(a, f), r]);
        });
    },
    27949: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ay: () => n.b7,
        rQ: () => n.b8,
        ri: () => n.b9,
        s$: () => n.ba,
      });
      var n = r(27975);
      r(51477);
    },
    29814: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(25495);
      function o(e) {
        const t = e.key.length,
          r = e.value.length,
          o = i.encodingLength(t),
          s = i.encodingLength(r),
          u = n.allocUnsafe(o + t + s + r);
        return (
          i.encode(t, u, 0),
          e.key.copy(u, o),
          i.encode(r, u, o + t),
          e.value.copy(u, o + t + s),
          u
        );
      }
      function s(e, t) {
        if ("number" !== typeof e)
          throw new Error("cannot write a non-number as a number");
        if (e < 0)
          throw new Error(
            "specified a negative value for writing an unsigned value"
          );
        if (e > t) throw new Error("RangeError: value out of range");
        if (Math.floor(e) !== e)
          throw new Error("value has a fractional component");
      }
      (t.range = (e) => [...Array(e).keys()]),
        (t.reverseBuffer = function (e) {
          if (e.length < 1) return e;
          let t = e.length - 1,
            r = 0;
          for (let n = 0; n < e.length / 2; n++)
            (r = e[n]), (e[n] = e[t]), (e[t] = r), t--;
          return e;
        }),
        (t.keyValsToBuffer = function (e) {
          const t = e.map(o);
          return t.push(n.from([0])), n.concat(t);
        }),
        (t.keyValToBuffer = o),
        (t.readUInt64LE = function (e, t) {
          const r = e.readUInt32LE(t);
          let n = e.readUInt32LE(t + 4);
          return (n *= 4294967296), s(n + r, 9007199254740991), n + r;
        }),
        (t.writeUInt64LE = function (e, t, r) {
          return (
            s(t, 9007199254740991),
            e.writeInt32LE(-1 & t, r),
            e.writeUInt32LE(Math.floor(t / 4294967296), r + 4),
            r + 8
          );
        });
    },
    29932: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeConverter = function (e) {
          return {
            decode: function (t) {
              if (t.key[0] !== e || 1 !== t.key.length)
                throw new Error(
                  "Decode Error: could not decode tapInternalKey with key 0x" +
                    t.key.toString("hex")
                );
              if (32 !== t.value.length)
                throw new Error(
                  "Decode Error: tapInternalKey not a 32-byte x-only pubkey"
                );
              return t.value;
            },
            encode: function (t) {
              return { key: n.from([e]), value: t };
            },
            check: function (e) {
              return n.isBuffer(e) && 32 === e.length;
            },
            expected: "Buffer",
            canAdd: function (e, t) {
              return !!e && !!t && void 0 === e.tapInternalKey;
            },
          };
        });
    },
    30957: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          (e[(e.UNSIGNED_TX = 0)] = "UNSIGNED_TX"),
            (e[(e.GLOBAL_XPUB = 1)] = "GLOBAL_XPUB");
        })(t.GlobalTypes || (t.GlobalTypes = {})),
        (t.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"]),
        (function (e) {
          (e[(e.NON_WITNESS_UTXO = 0)] = "NON_WITNESS_UTXO"),
            (e[(e.WITNESS_UTXO = 1)] = "WITNESS_UTXO"),
            (e[(e.PARTIAL_SIG = 2)] = "PARTIAL_SIG"),
            (e[(e.SIGHASH_TYPE = 3)] = "SIGHASH_TYPE"),
            (e[(e.REDEEM_SCRIPT = 4)] = "REDEEM_SCRIPT"),
            (e[(e.WITNESS_SCRIPT = 5)] = "WITNESS_SCRIPT"),
            (e[(e.BIP32_DERIVATION = 6)] = "BIP32_DERIVATION"),
            (e[(e.FINAL_SCRIPTSIG = 7)] = "FINAL_SCRIPTSIG"),
            (e[(e.FINAL_SCRIPTWITNESS = 8)] = "FINAL_SCRIPTWITNESS"),
            (e[(e.POR_COMMITMENT = 9)] = "POR_COMMITMENT"),
            (e[(e.TAP_KEY_SIG = 19)] = "TAP_KEY_SIG"),
            (e[(e.TAP_SCRIPT_SIG = 20)] = "TAP_SCRIPT_SIG"),
            (e[(e.TAP_LEAF_SCRIPT = 21)] = "TAP_LEAF_SCRIPT"),
            (e[(e.TAP_BIP32_DERIVATION = 22)] = "TAP_BIP32_DERIVATION"),
            (e[(e.TAP_INTERNAL_KEY = 23)] = "TAP_INTERNAL_KEY"),
            (e[(e.TAP_MERKLE_ROOT = 24)] = "TAP_MERKLE_ROOT");
        })(t.InputTypes || (t.InputTypes = {})),
        (t.INPUT_TYPE_NAMES = [
          "nonWitnessUtxo",
          "witnessUtxo",
          "partialSig",
          "sighashType",
          "redeemScript",
          "witnessScript",
          "bip32Derivation",
          "finalScriptSig",
          "finalScriptWitness",
          "porCommitment",
          "tapKeySig",
          "tapScriptSig",
          "tapLeafScript",
          "tapBip32Derivation",
          "tapInternalKey",
          "tapMerkleRoot",
        ]),
        (function (e) {
          (e[(e.REDEEM_SCRIPT = 0)] = "REDEEM_SCRIPT"),
            (e[(e.WITNESS_SCRIPT = 1)] = "WITNESS_SCRIPT"),
            (e[(e.BIP32_DERIVATION = 2)] = "BIP32_DERIVATION"),
            (e[(e.TAP_INTERNAL_KEY = 5)] = "TAP_INTERNAL_KEY"),
            (e[(e.TAP_TREE = 6)] = "TAP_TREE"),
            (e[(e.TAP_BIP32_DERIVATION = 7)] = "TAP_BIP32_DERIVATION");
        })(t.OutputTypes || (t.OutputTypes = {})),
        (t.OUTPUT_TYPE_NAMES = [
          "redeemScript",
          "witnessScript",
          "bip32Derivation",
          "tapInternalKey",
          "tapTree",
          "tapBip32Derivation",
        ]);
    },
    34411: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(25495),
        o = r(5180),
        s = (e) => 32 === e.length;
      t.makeConverter = function (e) {
        const t = o.makeConverter(e, s);
        return {
          decode: function (e) {
            const r = i.decode(e.value),
              n = i.encodingLength(r),
              o = t.decode({ key: e.key, value: e.value.slice(n + 32 * r) }),
              s = new Array(r);
            for (let t = 0, i = n; t < r; t++, i += 32)
              s[t] = e.value.slice(i, i + 32);
            return Object.assign({}, o, { leafHashes: s });
          },
          encode: function (e) {
            const r = t.encode(e),
              o = i.encodingLength(e.leafHashes.length),
              s = n.allocUnsafe(o);
            i.encode(e.leafHashes.length, s);
            const u = n.concat([s, ...e.leafHashes, r.value]);
            return Object.assign({}, r, { value: u });
          },
          check: function (e) {
            return (
              Array.isArray(e.leafHashes) &&
              e.leafHashes.every((e) => n.isBuffer(e) && 32 === e.length) &&
              t.check(e)
            );
          },
          expected:
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }",
          canAddToArray: t.canAddToArray,
        };
      };
    },
    35699: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BufferReader =
          t.BufferWriter =
          t.cloneBuffer =
          t.reverseBuffer =
          t.writeUInt64LE =
          t.readUInt64LE =
          t.varuint =
            void 0);
      const i = r(24781),
        { typeforce: o } = i,
        s = r(80232);
      function u(e, t) {
        if ("number" !== typeof e)
          throw new Error("cannot write a non-number as a number");
        if (e < 0)
          throw new Error(
            "specified a negative value for writing an unsigned value"
          );
        if (e > t) throw new Error("RangeError: value out of range");
        if (Math.floor(e) !== e)
          throw new Error("value has a fractional component");
      }
      function a(e, t) {
        const r = e.readUInt32LE(t);
        let n = e.readUInt32LE(t + 4);
        return (n *= 4294967296), u(n + r, 9007199254740991), n + r;
      }
      function c(e, t, r) {
        return (
          u(t, 9007199254740991),
          e.writeInt32LE(-1 & t, r),
          e.writeUInt32LE(Math.floor(t / 4294967296), r + 4),
          r + 8
        );
      }
      (t.varuint = s),
        (t.readUInt64LE = a),
        (t.writeUInt64LE = c),
        (t.reverseBuffer = function (e) {
          if (e.length < 1) return e;
          let t = e.length - 1,
            r = 0;
          for (let n = 0; n < e.length / 2; n++)
            (r = e[n]), (e[n] = e[t]), (e[t] = r), t--;
          return e;
        }),
        (t.cloneBuffer = function (e) {
          const t = n.allocUnsafe(e.length);
          return e.copy(t), t;
        });
      class f {
        static withCapacity(e) {
          return new f(n.alloc(e));
        }
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          (this.buffer = e),
            (this.offset = t),
            o(i.tuple(i.Buffer, i.UInt32), [e, t]);
        }
        writeUInt8(e) {
          this.offset = this.buffer.writeUInt8(e, this.offset);
        }
        writeInt32(e) {
          this.offset = this.buffer.writeInt32LE(e, this.offset);
        }
        writeUInt32(e) {
          this.offset = this.buffer.writeUInt32LE(e, this.offset);
        }
        writeUInt64(e) {
          this.offset = c(this.buffer, e, this.offset);
        }
        writeVarInt(e) {
          s.encode(e, this.buffer, this.offset),
            (this.offset += s.encode.bytes);
        }
        writeSlice(e) {
          if (this.buffer.length < this.offset + e.length)
            throw new Error("Cannot write slice out of bounds");
          this.offset += e.copy(this.buffer, this.offset);
        }
        writeVarSlice(e) {
          this.writeVarInt(e.length), this.writeSlice(e);
        }
        writeVector(e) {
          this.writeVarInt(e.length), e.forEach((e) => this.writeVarSlice(e));
        }
        end() {
          if (this.buffer.length === this.offset) return this.buffer;
          throw new Error(
            `buffer size ${this.buffer.length}, offset ${this.offset}`
          );
        }
      }
      t.BufferWriter = f;
      t.BufferReader = class {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          (this.buffer = e),
            (this.offset = t),
            o(i.tuple(i.Buffer, i.UInt32), [e, t]);
        }
        readUInt8() {
          const e = this.buffer.readUInt8(this.offset);
          return this.offset++, e;
        }
        readInt32() {
          const e = this.buffer.readInt32LE(this.offset);
          return (this.offset += 4), e;
        }
        readUInt32() {
          const e = this.buffer.readUInt32LE(this.offset);
          return (this.offset += 4), e;
        }
        readUInt64() {
          const e = a(this.buffer, this.offset);
          return (this.offset += 8), e;
        }
        readVarInt() {
          const e = s.decode(this.buffer, this.offset);
          return (this.offset += s.decode.bytes), e;
        }
        readSlice(e) {
          if (this.buffer.length < this.offset + e)
            throw new Error("Cannot read slice out of bounds");
          const t = this.buffer.slice(this.offset, this.offset + e);
          return (this.offset += e), t;
        }
        readVarSlice() {
          return this.readSlice(this.readVarInt());
        }
        readVector() {
          const e = this.readVarInt(),
            t = [];
          for (let r = 0; r < e; r++) t.push(this.readVarSlice());
          return t;
        }
      };
    },
    37404: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.p2tr = void 0);
      const n = r(13740),
        i = r(7653),
        o = r(47165),
        s = r(24781),
        u = r(46789),
        a = r(41443),
        c = r(63322),
        f = r(63622),
        p = r(86720),
        l = o.OPS;
      t.p2tr = function (e, t) {
        if (
          !e.address &&
          !e.output &&
          !e.pubkey &&
          !e.internalPubkey &&
          !(e.witness && e.witness.length > 1)
        )
          throw new TypeError("Not enough data");
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, s.typeforce)(
            {
              address: s.typeforce.maybe(s.typeforce.String),
              input: s.typeforce.maybe(s.typeforce.BufferN(0)),
              network: s.typeforce.maybe(s.typeforce.Object),
              output: s.typeforce.maybe(s.typeforce.BufferN(34)),
              internalPubkey: s.typeforce.maybe(s.typeforce.BufferN(32)),
              hash: s.typeforce.maybe(s.typeforce.BufferN(32)),
              pubkey: s.typeforce.maybe(s.typeforce.BufferN(32)),
              signature: s.typeforce.maybe(
                s.typeforce.anyOf(
                  s.typeforce.BufferN(64),
                  s.typeforce.BufferN(65)
                )
              ),
              witness: s.typeforce.maybe(
                s.typeforce.arrayOf(s.typeforce.Buffer)
              ),
              scriptTree: s.typeforce.maybe(s.isTaptree),
              redeem: s.typeforce.maybe({
                output: s.typeforce.maybe(s.typeforce.Buffer),
                redeemVersion: s.typeforce.maybe(s.typeforce.Number),
                witness: s.typeforce.maybe(
                  s.typeforce.arrayOf(s.typeforce.Buffer)
                ),
              }),
              redeemVersion: s.typeforce.maybe(s.typeforce.Number),
            },
            e
          );
        const r = c.value(() => (0, p.fromBech32)(e.address)),
          h = c.value(() => {
            if (e.witness && e.witness.length)
              return e.witness.length >= 2 &&
                80 === e.witness[e.witness.length - 1][0]
                ? e.witness.slice(0, -1)
                : e.witness.slice();
          }),
          d = c.value(() =>
            e.scriptTree
              ? (0, a.toHashTree)(e.scriptTree)
              : e.hash
              ? { hash: e.hash }
              : void 0
          ),
          y = e.network || i.bitcoin,
          _ = { name: "p2tr", network: y };
        if (
          (c.prop(_, "address", () => {
            if (!_.pubkey) return;
            const e = f.bech32m.toWords(_.pubkey);
            return e.unshift(1), f.bech32m.encode(y.bech32, e);
          }),
          c.prop(_, "hash", () => {
            const e = d();
            if (e) return e.hash;
            const t = h();
            if (t && t.length > 1) {
              const e = t[t.length - 1],
                r = e[0] & s.TAPLEAF_VERSION_MASK,
                n = t[t.length - 2],
                i = (0, a.tapleafHash)({ output: n, version: r });
              return (0, a.rootHashFromPath)(e, i);
            }
            return null;
          }),
          c.prop(_, "output", () => {
            if (_.pubkey) return o.compile([l.OP_1, _.pubkey]);
          }),
          c.prop(_, "redeemVersion", () =>
            e.redeemVersion
              ? e.redeemVersion
              : e.redeem &&
                void 0 !== e.redeem.redeemVersion &&
                null !== e.redeem.redeemVersion
              ? e.redeem.redeemVersion
              : a.LEAF_VERSION_TAPSCRIPT
          ),
          c.prop(_, "redeem", () => {
            const e = h();
            if (e && !(e.length < 2))
              return {
                output: e[e.length - 2],
                witness: e.slice(0, -2),
                redeemVersion: e[e.length - 1][0] & s.TAPLEAF_VERSION_MASK,
              };
          }),
          c.prop(_, "pubkey", () => {
            if (e.pubkey) return e.pubkey;
            if (e.output) return e.output.slice(2);
            if (e.address) return r().data;
            if (_.internalPubkey) {
              const e = (0, a.tweakKey)(_.internalPubkey, _.hash);
              if (e) return e.x;
            }
          }),
          c.prop(_, "internalPubkey", () => {
            if (e.internalPubkey) return e.internalPubkey;
            const t = h();
            return t && t.length > 1 ? t[t.length - 1].slice(1, 33) : void 0;
          }),
          c.prop(_, "signature", () => {
            if (e.signature) return e.signature;
            const t = h();
            return t && 1 === t.length ? t[0] : void 0;
          }),
          c.prop(_, "witness", () => {
            if (e.witness) return e.witness;
            const t = d();
            if (t && e.redeem && e.redeem.output && e.internalPubkey) {
              const r = (0, a.tapleafHash)({
                  output: e.redeem.output,
                  version: _.redeemVersion,
                }),
                i = (0, a.findScriptPath)(t, r);
              if (!i) return;
              const o = (0, a.tweakKey)(e.internalPubkey, t.hash);
              if (!o) return;
              const s = n.Buffer.concat(
                [
                  n.Buffer.from([_.redeemVersion | o.parity]),
                  e.internalPubkey,
                ].concat(i)
              );
              return [e.redeem.output, s];
            }
            return e.signature ? [e.signature] : void 0;
          }),
          t.validate)
        ) {
          let t = n.Buffer.from([]);
          if (e.address) {
            if (y && y.bech32 !== r().prefix)
              throw new TypeError("Invalid prefix or Network mismatch");
            if (1 !== r().version)
              throw new TypeError("Invalid address version");
            if (32 !== r().data.length)
              throw new TypeError("Invalid address data");
            t = r().data;
          }
          if (e.pubkey) {
            if (t.length > 0 && !t.equals(e.pubkey))
              throw new TypeError("Pubkey mismatch");
            t = e.pubkey;
          }
          if (e.output) {
            if (
              34 !== e.output.length ||
              e.output[0] !== l.OP_1 ||
              32 !== e.output[1]
            )
              throw new TypeError("Output is invalid");
            if (t.length > 0 && !t.equals(e.output.slice(2)))
              throw new TypeError("Pubkey mismatch");
            t = e.output.slice(2);
          }
          if (e.internalPubkey) {
            const r = (0, a.tweakKey)(e.internalPubkey, _.hash);
            if (t.length > 0 && !t.equals(r.x))
              throw new TypeError("Pubkey mismatch");
            t = r.x;
          }
          if (t && t.length && !(0, u.getEccLib)().isXOnlyPoint(t))
            throw new TypeError("Invalid pubkey for p2tr");
          const i = d();
          if (e.hash && i && !e.hash.equals(i.hash))
            throw new TypeError("Hash mismatch");
          if (e.redeem && e.redeem.output && i) {
            const t = (0, a.tapleafHash)({
              output: e.redeem.output,
              version: _.redeemVersion,
            });
            if (!(0, a.findScriptPath)(i, t))
              throw new TypeError("Redeem script not in tree");
          }
          const c = h();
          if (e.redeem && _.redeem) {
            if (
              e.redeem.redeemVersion &&
              e.redeem.redeemVersion !== _.redeem.redeemVersion
            )
              throw new TypeError("Redeem.redeemVersion and witness mismatch");
            if (e.redeem.output) {
              if (0 === o.decompile(e.redeem.output).length)
                throw new TypeError("Redeem.output is invalid");
              if (_.redeem.output && !e.redeem.output.equals(_.redeem.output))
                throw new TypeError("Redeem.output and witness mismatch");
            }
            if (
              e.redeem.witness &&
              _.redeem.witness &&
              !(0, s.stacksEqual)(e.redeem.witness, _.redeem.witness)
            )
              throw new TypeError("Redeem.witness and witness mismatch");
          }
          if (c && c.length)
            if (1 === c.length) {
              if (e.signature && !e.signature.equals(c[0]))
                throw new TypeError("Signature mismatch");
            } else {
              const r = c[c.length - 1];
              if (r.length < 33)
                throw new TypeError(
                  `The control-block length is too small. Got ${r.length}, expected min 33.`
                );
              if ((r.length - 33) % 32 !== 0)
                throw new TypeError(
                  `The control-block length of ${r.length} is incorrect!`
                );
              const n = (r.length - 33) / 32;
              if (n > 128)
                throw new TypeError(
                  `The script path is too long. Got ${n}, expected max 128.`
                );
              const i = r.slice(1, 33);
              if (e.internalPubkey && !e.internalPubkey.equals(i))
                throw new TypeError("Internal pubkey mismatch");
              if (!(0, u.getEccLib)().isXOnlyPoint(i))
                throw new TypeError("Invalid internalPubkey for p2tr witness");
              const o = r[0] & s.TAPLEAF_VERSION_MASK,
                f = c[c.length - 2],
                p = (0, a.tapleafHash)({ output: f, version: o }),
                l = (0, a.rootHashFromPath)(r, p),
                h = (0, a.tweakKey)(i, l);
              if (!h) throw new TypeError("Invalid outputKey for p2tr witness");
              if (t.length && !t.equals(h.x))
                throw new TypeError("Pubkey mismatch for p2tr witness");
              if (h.parity !== (1 & r[0])) throw new Error("Incorrect parity");
            }
        }
        return Object.assign(_, e);
      };
    },
    38655: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(22838),
        o = r(40988),
        s = r(30957),
        u = r(55531);
      t.Psbt = class {
        constructor(e) {
          (this.inputs = []),
            (this.outputs = []),
            (this.globalMap = { unsignedTx: e });
        }
        static fromBase64(e, t) {
          const r = n.from(e, "base64");
          return this.fromBuffer(r, t);
        }
        static fromHex(e, t) {
          const r = n.from(e, "hex");
          return this.fromBuffer(r, t);
        }
        static fromBuffer(e, t) {
          const r = o.psbtFromBuffer(e, t),
            n = new this(r.globalMap.unsignedTx);
          return Object.assign(n, r), n;
        }
        toBase64() {
          return this.toBuffer().toString("base64");
        }
        toHex() {
          return this.toBuffer().toString("hex");
        }
        toBuffer() {
          return o.psbtToBuffer(this);
        }
        updateGlobal(e) {
          return u.updateGlobal(e, this.globalMap), this;
        }
        updateInput(e, t) {
          const r = u.checkForInput(this.inputs, e);
          return u.updateInput(t, r), this;
        }
        updateOutput(e, t) {
          const r = u.checkForOutput(this.outputs, e);
          return u.updateOutput(t, r), this;
        }
        addUnknownKeyValToGlobal(e) {
          return (
            u.checkHasKey(
              e,
              this.globalMap.unknownKeyVals,
              u.getEnumLength(s.GlobalTypes)
            ),
            this.globalMap.unknownKeyVals ||
              (this.globalMap.unknownKeyVals = []),
            this.globalMap.unknownKeyVals.push(e),
            this
          );
        }
        addUnknownKeyValToInput(e, t) {
          const r = u.checkForInput(this.inputs, e);
          return (
            u.checkHasKey(t, r.unknownKeyVals, u.getEnumLength(s.InputTypes)),
            r.unknownKeyVals || (r.unknownKeyVals = []),
            r.unknownKeyVals.push(t),
            this
          );
        }
        addUnknownKeyValToOutput(e, t) {
          const r = u.checkForOutput(this.outputs, e);
          return (
            u.checkHasKey(t, r.unknownKeyVals, u.getEnumLength(s.OutputTypes)),
            r.unknownKeyVals || (r.unknownKeyVals = []),
            r.unknownKeyVals.push(t),
            this
          );
        }
        addInput(e) {
          this.globalMap.unsignedTx.addInput(e),
            this.inputs.push({ unknownKeyVals: [] });
          const t = e.unknownKeyVals || [],
            r = this.inputs.length - 1;
          if (!Array.isArray(t))
            throw new Error("unknownKeyVals must be an Array");
          return (
            t.forEach((e) => this.addUnknownKeyValToInput(r, e)),
            u.addInputAttributes(this.inputs, e),
            this
          );
        }
        addOutput(e) {
          this.globalMap.unsignedTx.addOutput(e),
            this.outputs.push({ unknownKeyVals: [] });
          const t = e.unknownKeyVals || [],
            r = this.outputs.length - 1;
          if (!Array.isArray(t))
            throw new Error("unknownKeyVals must be an Array");
          return (
            t.forEach((e) => this.addUnknownKeyValToOutput(r, e)),
            u.addOutputAttributes(this.outputs, e),
            this
          );
        }
        clearFinalizedInput(e) {
          const t = u.checkForInput(this.inputs, e);
          u.inputCheckUncleanFinalized(e, t);
          for (const r of Object.keys(t))
            [
              "witnessUtxo",
              "nonWitnessUtxo",
              "finalScriptSig",
              "finalScriptWitness",
              "unknownKeyVals",
            ].includes(r) || delete t[r];
          return this;
        }
        combine() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          const n = i.combine([this].concat(t));
          return Object.assign(this, n), this;
        }
        getTransaction() {
          return this.globalMap.unsignedTx.toBuffer();
        }
      };
    },
    40138: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957),
        o = r(25495);
      (t.decode = function (e) {
        if (e.key[0] !== i.OutputTypes.TAP_TREE || 1 !== e.key.length)
          throw new Error(
            "Decode Error: could not decode tapTree with key 0x" +
              e.key.toString("hex")
          );
        let t = 0;
        const r = [];
        for (; t < e.value.length; ) {
          const n = e.value[t++],
            i = e.value[t++],
            s = o.decode(e.value, t);
          (t += o.encodingLength(s)),
            r.push({
              depth: n,
              leafVersion: i,
              script: e.value.slice(t, t + s),
            }),
            (t += s);
        }
        return { leaves: r };
      }),
        (t.encode = function (e) {
          const t = n.from([i.OutputTypes.TAP_TREE]),
            r = [].concat(
              ...e.leaves.map((e) => [
                n.of(e.depth, e.leafVersion),
                o.encode(e.script.length),
                e.script,
              ])
            );
          return { key: t, value: n.concat(r) };
        }),
        (t.expected =
          "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }"),
        (t.check = function (e) {
          return (
            Array.isArray(e.leaves) &&
            e.leaves.every(
              (e) =>
                e.depth >= 0 &&
                e.depth <= 128 &&
                (254 & e.leafVersion) === e.leafVersion &&
                n.isBuffer(e.script)
            )
          );
        }),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.tapTree;
        });
    },
    40988: (e, t, r) => {
      "use strict";
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        n(r(48412)),
        n(r(82821));
    },
    41443: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tweakKey =
          t.tapTweakHash =
          t.tapleafHash =
          t.findScriptPath =
          t.toHashTree =
          t.rootHashFromPath =
          t.MAX_TAPTREE_DEPTH =
          t.LEAF_VERSION_TAPSCRIPT =
            void 0);
      const n = r(13740),
        i = r(46789),
        o = r(88743),
        s = r(35699),
        u = r(24781);
      (t.LEAF_VERSION_TAPSCRIPT = 192), (t.MAX_TAPTREE_DEPTH = 128);
      function a(e) {
        const r = e.version || t.LEAF_VERSION_TAPSCRIPT;
        return o.taggedHash(
          "TapLeaf",
          n.Buffer.concat([n.Buffer.from([r]), p(e.output)])
        );
      }
      function c(e, t) {
        return o.taggedHash("TapTweak", n.Buffer.concat(t ? [e, t] : [e]));
      }
      function f(e, t) {
        return o.taggedHash("TapBranch", n.Buffer.concat([e, t]));
      }
      function p(e) {
        const t = s.varuint.encodingLength(e.length),
          r = n.Buffer.allocUnsafe(t);
        return s.varuint.encode(e.length, r), n.Buffer.concat([r, e]);
      }
      (t.rootHashFromPath = function (e, t) {
        if (e.length < 33)
          throw new TypeError(
            `The control-block length is too small. Got ${e.length}, expected min 33.`
          );
        const r = (e.length - 33) / 32;
        let n = t;
        for (let i = 0; i < r; i++) {
          const t = e.slice(33 + 32 * i, 65 + 32 * i);
          n = n.compare(t) < 0 ? f(n, t) : f(t, n);
        }
        return n;
      }),
        (t.toHashTree = function e(t) {
          if ((0, u.isTapleaf)(t)) return { hash: a(t) };
          const r = [e(t[0]), e(t[1])];
          r.sort((e, t) => e.hash.compare(t.hash));
          const [n, i] = r;
          return { hash: f(n.hash, i.hash), left: n, right: i };
        }),
        (t.findScriptPath = function e(t, r) {
          if ("left" in (n = t) && "right" in n) {
            const n = e(t.left, r);
            if (void 0 !== n) return [...n, t.right.hash];
            const i = e(t.right, r);
            if (void 0 !== i) return [...i, t.left.hash];
          } else if (t.hash.equals(r)) return [];
          var n;
        }),
        (t.tapleafHash = a),
        (t.tapTweakHash = c),
        (t.tweakKey = function (e, t) {
          if (!n.Buffer.isBuffer(e)) return null;
          if (32 !== e.length) return null;
          if (t && 32 !== t.length) return null;
          const r = c(e, t),
            o = (0, i.getEccLib)().xOnlyPointAddTweak(e, r);
          return o && null !== o.xOnlyPubkey
            ? { parity: o.parity, x: n.Buffer.from(o.xOnlyPubkey) }
            : null;
        });
    },
    42527: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.TAP_SCRIPT_SIG)
          throw new Error(
            "Decode Error: could not decode tapScriptSig with key 0x" +
              e.key.toString("hex")
          );
        if (65 !== e.key.length)
          throw new Error(
            "Decode Error: tapScriptSig has invalid key 0x" +
              e.key.toString("hex")
          );
        if (64 !== e.value.length && 65 !== e.value.length)
          throw new Error(
            "Decode Error: tapScriptSig has invalid signature in key 0x" +
              e.key.toString("hex")
          );
        return {
          pubkey: e.key.slice(1, 33),
          leafHash: e.key.slice(33),
          signature: e.value,
        };
      }),
        (t.encode = function (e) {
          const t = n.from([i.InputTypes.TAP_SCRIPT_SIG]);
          return {
            key: n.concat([t, e.pubkey, e.leafHash]),
            value: e.signature,
          };
        }),
        (t.expected =
          "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }"),
        (t.check = function (e) {
          return (
            n.isBuffer(e.pubkey) &&
            n.isBuffer(e.leafHash) &&
            n.isBuffer(e.signature) &&
            32 === e.pubkey.length &&
            32 === e.leafHash.length &&
            (64 === e.signature.length || 65 === e.signature.length)
          );
        }),
        (t.canAddToArray = function (e, t, r) {
          const n = t.pubkey.toString("hex") + t.leafHash.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n),
            0 ===
              e.filter(
                (e) =>
                  e.pubkey.equals(t.pubkey) && e.leafHash.equals(t.leafHash)
              ).length)
          );
        });
    },
    43693: (e, t, r) => {
      var n = r(77736);
      (e.exports = function (e, t, r) {
        return (
          (t = n(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    46789: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getEccLib = t.initEccLib = void 0);
      const i = {};
      (t.initEccLib = function (e, t) {
        var r;
        e
          ? e !== i.eccLib &&
            ((null !== t && void 0 !== t && t.DANGER_DO_NOT_VERIFY_ECCLIB) ||
              (s("function" === typeof (r = e).isXOnlyPoint),
              s(
                r.isXOnlyPoint(
                  o(
                    "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
                  )
                )
              ),
              s(
                r.isXOnlyPoint(
                  o(
                    "fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e"
                  )
                )
              ),
              s(
                r.isXOnlyPoint(
                  o(
                    "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9"
                  )
                )
              ),
              s(
                r.isXOnlyPoint(
                  o(
                    "0000000000000000000000000000000000000000000000000000000000000001"
                  )
                )
              ),
              s(
                !r.isXOnlyPoint(
                  o(
                    "0000000000000000000000000000000000000000000000000000000000000000"
                  )
                )
              ),
              s(
                !r.isXOnlyPoint(
                  o(
                    "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
                  )
                )
              ),
              s("function" === typeof r.xOnlyPointAddTweak),
              u.forEach((e) => {
                const t = r.xOnlyPointAddTweak(o(e.pubkey), o(e.tweak));
                null === e.result
                  ? s(null === t)
                  : (s(null !== t),
                    s(t.parity === e.parity),
                    s(n.from(t.xOnlyPubkey).equals(o(e.result))));
              })),
            (i.eccLib = e))
          : (i.eccLib = e);
      }),
        (t.getEccLib = function () {
          if (!i.eccLib)
            throw new Error(
              "No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance"
            );
          return i.eccLib;
        });
      const o = (e) => n.from(e, "hex");
      function s(e) {
        if (!e) throw new Error("ecc library invalid");
      }
      const u = [
        {
          pubkey:
            "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          tweak:
            "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
          parity: -1,
          result: null,
        },
        {
          pubkey:
            "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
          tweak:
            "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
          parity: 1,
          result:
            "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf",
        },
        {
          pubkey:
            "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
          tweak:
            "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
          parity: 0,
          result:
            "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c",
        },
      ];
    },
    47165: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.signature =
          t.number =
          t.isCanonicalScriptSignature =
          t.isDefinedHashType =
          t.isCanonicalPubKey =
          t.toStack =
          t.fromASM =
          t.toASM =
          t.decompile =
          t.compile =
          t.countNonPushOnlyOPs =
          t.isPushOnly =
          t.OPS =
            void 0);
      const i = r(20759),
        o = r(5208);
      Object.defineProperty(t, "OPS", {
        enumerable: !0,
        get: function () {
          return o.OPS;
        },
      });
      const s = r(71041),
        u = r(55318),
        a = r(27224),
        c = r(24781),
        { typeforce: f } = c,
        p = o.OPS.OP_RESERVED;
      function l(e) {
        return (
          c.Buffer(e) ||
          (function (e) {
            return (
              c.Number(e) &&
              (e === o.OPS.OP_0 ||
                (e >= o.OPS.OP_1 && e <= o.OPS.OP_16) ||
                e === o.OPS.OP_1NEGATE)
            );
          })(e)
        );
      }
      function h(e) {
        return c.Array(e) && e.every(l);
      }
      function d(e) {
        return 0 === e.length
          ? o.OPS.OP_0
          : 1 === e.length
          ? e[0] >= 1 && e[0] <= 16
            ? p + e[0]
            : 129 === e[0]
            ? o.OPS.OP_1NEGATE
            : void 0
          : void 0;
      }
      function y(e) {
        return n.isBuffer(e);
      }
      function _(e) {
        return n.isBuffer(e);
      }
      function w(e) {
        if (y(e)) return e;
        f(c.Array, e);
        const t = e.reduce(
            (e, t) =>
              _(t)
                ? 1 === t.length && void 0 !== d(t)
                  ? e + 1
                  : e + s.encodingLength(t.length) + t.length
                : e + 1,
            0
          ),
          r = n.allocUnsafe(t);
        let i = 0;
        if (
          (e.forEach((e) => {
            if (_(e)) {
              const t = d(e);
              if (void 0 !== t) return r.writeUInt8(t, i), void (i += 1);
              (i += s.encode(r, e.length, i)), e.copy(r, i), (i += e.length);
            } else r.writeUInt8(e, i), (i += 1);
          }),
          i !== r.length)
        )
          throw new Error("Could not decode chunks");
        return r;
      }
      function g(e) {
        if (((t = e), c.Array(t))) return e;
        var t;
        f(c.Buffer, e);
        const r = [];
        let n = 0;
        for (; n < e.length; ) {
          const t = e[n];
          if (t > o.OPS.OP_0 && t <= o.OPS.OP_PUSHDATA4) {
            const t = s.decode(e, n);
            if (null === t) return null;
            if (((n += t.size), n + t.number > e.length)) return null;
            const i = e.slice(n, n + t.number);
            n += t.number;
            const o = d(i);
            void 0 !== o ? r.push(o) : r.push(i);
          } else r.push(t), (n += 1);
        }
        return r;
      }
      function m(e) {
        const t = -129 & e;
        return t > 0 && t < 4;
      }
      (t.isPushOnly = h),
        (t.countNonPushOnlyOPs = function (e) {
          return e.length - e.filter(l).length;
        }),
        (t.compile = w),
        (t.decompile = g),
        (t.toASM = function (e) {
          if ((y(e) && (e = g(e)), !e))
            throw new Error("Could not convert invalid chunks to ASM");
          return e
            .map((e) => {
              if (_(e)) {
                const t = d(e);
                if (void 0 === t) return e.toString("hex");
                e = t;
              }
              return o.REVERSE_OPS[e];
            })
            .join(" ");
        }),
        (t.fromASM = function (e) {
          return (
            f(c.String, e),
            w(
              e
                .split(" ")
                .map((e) =>
                  void 0 !== o.OPS[e]
                    ? o.OPS[e]
                    : (f(c.Hex, e), n.from(e, "hex"))
                )
            )
          );
        }),
        (t.toStack = function (e) {
          return (
            (e = g(e)),
            f(h, e),
            e.map((e) =>
              _(e) ? e : e === o.OPS.OP_0 ? n.allocUnsafe(0) : u.encode(e - p)
            )
          );
        }),
        (t.isCanonicalPubKey = function (e) {
          return c.isPoint(e);
        }),
        (t.isDefinedHashType = m),
        (t.isCanonicalScriptSignature = function (e) {
          return (
            !!n.isBuffer(e) && !!m(e[e.length - 1]) && i.check(e.slice(0, -1))
          );
        }),
        (t.number = u),
        (t.signature = a);
    },
    48412: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(82289),
        o = r(29814),
        s = r(25495),
        u = r(30957);
      function a(e, t, r) {
        if (!t.equals(n.from([r])))
          throw new Error(
            `Format Error: Invalid ${e} key: ${t.toString("hex")}`
          );
      }
      function c(e, t) {
        let { globalMapKeyVals: r, inputKeyVals: n, outputKeyVals: s } = t;
        const c = { unsignedTx: e };
        let f = 0;
        for (const o of r)
          switch (o.key[0]) {
            case u.GlobalTypes.UNSIGNED_TX:
              if ((a("global", o.key, u.GlobalTypes.UNSIGNED_TX), f > 0))
                throw new Error(
                  "Format Error: GlobalMap has multiple UNSIGNED_TX"
                );
              f++;
              break;
            case u.GlobalTypes.GLOBAL_XPUB:
              void 0 === c.globalXpub && (c.globalXpub = []),
                c.globalXpub.push(i.globals.globalXpub.decode(o));
              break;
            default:
              c.unknownKeyVals || (c.unknownKeyVals = []),
                c.unknownKeyVals.push(o);
          }
        const p = n.length,
          l = s.length,
          h = [],
          d = [];
        for (const y of o.range(p)) {
          const e = {};
          for (const t of n[y])
            switch ((i.inputs.checkPubkey(t), t.key[0])) {
              case u.InputTypes.NON_WITNESS_UTXO:
                if (
                  (a("input", t.key, u.InputTypes.NON_WITNESS_UTXO),
                  void 0 !== e.nonWitnessUtxo)
                )
                  throw new Error(
                    "Format Error: Input has multiple NON_WITNESS_UTXO"
                  );
                e.nonWitnessUtxo = i.inputs.nonWitnessUtxo.decode(t);
                break;
              case u.InputTypes.WITNESS_UTXO:
                if (
                  (a("input", t.key, u.InputTypes.WITNESS_UTXO),
                  void 0 !== e.witnessUtxo)
                )
                  throw new Error(
                    "Format Error: Input has multiple WITNESS_UTXO"
                  );
                e.witnessUtxo = i.inputs.witnessUtxo.decode(t);
                break;
              case u.InputTypes.PARTIAL_SIG:
                void 0 === e.partialSig && (e.partialSig = []),
                  e.partialSig.push(i.inputs.partialSig.decode(t));
                break;
              case u.InputTypes.SIGHASH_TYPE:
                if (
                  (a("input", t.key, u.InputTypes.SIGHASH_TYPE),
                  void 0 !== e.sighashType)
                )
                  throw new Error(
                    "Format Error: Input has multiple SIGHASH_TYPE"
                  );
                e.sighashType = i.inputs.sighashType.decode(t);
                break;
              case u.InputTypes.REDEEM_SCRIPT:
                if (
                  (a("input", t.key, u.InputTypes.REDEEM_SCRIPT),
                  void 0 !== e.redeemScript)
                )
                  throw new Error(
                    "Format Error: Input has multiple REDEEM_SCRIPT"
                  );
                e.redeemScript = i.inputs.redeemScript.decode(t);
                break;
              case u.InputTypes.WITNESS_SCRIPT:
                if (
                  (a("input", t.key, u.InputTypes.WITNESS_SCRIPT),
                  void 0 !== e.witnessScript)
                )
                  throw new Error(
                    "Format Error: Input has multiple WITNESS_SCRIPT"
                  );
                e.witnessScript = i.inputs.witnessScript.decode(t);
                break;
              case u.InputTypes.BIP32_DERIVATION:
                void 0 === e.bip32Derivation && (e.bip32Derivation = []),
                  e.bip32Derivation.push(i.inputs.bip32Derivation.decode(t));
                break;
              case u.InputTypes.FINAL_SCRIPTSIG:
                a("input", t.key, u.InputTypes.FINAL_SCRIPTSIG),
                  (e.finalScriptSig = i.inputs.finalScriptSig.decode(t));
                break;
              case u.InputTypes.FINAL_SCRIPTWITNESS:
                a("input", t.key, u.InputTypes.FINAL_SCRIPTWITNESS),
                  (e.finalScriptWitness =
                    i.inputs.finalScriptWitness.decode(t));
                break;
              case u.InputTypes.POR_COMMITMENT:
                a("input", t.key, u.InputTypes.POR_COMMITMENT),
                  (e.porCommitment = i.inputs.porCommitment.decode(t));
                break;
              case u.InputTypes.TAP_KEY_SIG:
                a("input", t.key, u.InputTypes.TAP_KEY_SIG),
                  (e.tapKeySig = i.inputs.tapKeySig.decode(t));
                break;
              case u.InputTypes.TAP_SCRIPT_SIG:
                void 0 === e.tapScriptSig && (e.tapScriptSig = []),
                  e.tapScriptSig.push(i.inputs.tapScriptSig.decode(t));
                break;
              case u.InputTypes.TAP_LEAF_SCRIPT:
                void 0 === e.tapLeafScript && (e.tapLeafScript = []),
                  e.tapLeafScript.push(i.inputs.tapLeafScript.decode(t));
                break;
              case u.InputTypes.TAP_BIP32_DERIVATION:
                void 0 === e.tapBip32Derivation && (e.tapBip32Derivation = []),
                  e.tapBip32Derivation.push(
                    i.inputs.tapBip32Derivation.decode(t)
                  );
                break;
              case u.InputTypes.TAP_INTERNAL_KEY:
                a("input", t.key, u.InputTypes.TAP_INTERNAL_KEY),
                  (e.tapInternalKey = i.inputs.tapInternalKey.decode(t));
                break;
              case u.InputTypes.TAP_MERKLE_ROOT:
                a("input", t.key, u.InputTypes.TAP_MERKLE_ROOT),
                  (e.tapMerkleRoot = i.inputs.tapMerkleRoot.decode(t));
                break;
              default:
                e.unknownKeyVals || (e.unknownKeyVals = []),
                  e.unknownKeyVals.push(t);
            }
          h.push(e);
        }
        for (const y of o.range(l)) {
          const e = {};
          for (const t of s[y])
            switch ((i.outputs.checkPubkey(t), t.key[0])) {
              case u.OutputTypes.REDEEM_SCRIPT:
                if (
                  (a("output", t.key, u.OutputTypes.REDEEM_SCRIPT),
                  void 0 !== e.redeemScript)
                )
                  throw new Error(
                    "Format Error: Output has multiple REDEEM_SCRIPT"
                  );
                e.redeemScript = i.outputs.redeemScript.decode(t);
                break;
              case u.OutputTypes.WITNESS_SCRIPT:
                if (
                  (a("output", t.key, u.OutputTypes.WITNESS_SCRIPT),
                  void 0 !== e.witnessScript)
                )
                  throw new Error(
                    "Format Error: Output has multiple WITNESS_SCRIPT"
                  );
                e.witnessScript = i.outputs.witnessScript.decode(t);
                break;
              case u.OutputTypes.BIP32_DERIVATION:
                void 0 === e.bip32Derivation && (e.bip32Derivation = []),
                  e.bip32Derivation.push(i.outputs.bip32Derivation.decode(t));
                break;
              case u.OutputTypes.TAP_INTERNAL_KEY:
                a("output", t.key, u.OutputTypes.TAP_INTERNAL_KEY),
                  (e.tapInternalKey = i.outputs.tapInternalKey.decode(t));
                break;
              case u.OutputTypes.TAP_TREE:
                a("output", t.key, u.OutputTypes.TAP_TREE),
                  (e.tapTree = i.outputs.tapTree.decode(t));
                break;
              case u.OutputTypes.TAP_BIP32_DERIVATION:
                void 0 === e.tapBip32Derivation && (e.tapBip32Derivation = []),
                  e.tapBip32Derivation.push(
                    i.outputs.tapBip32Derivation.decode(t)
                  );
                break;
              default:
                e.unknownKeyVals || (e.unknownKeyVals = []),
                  e.unknownKeyVals.push(t);
            }
          d.push(e);
        }
        return { globalMap: c, inputs: h, outputs: d };
      }
      (t.psbtFromBuffer = function (e, t) {
        let r = 0;
        function n() {
          const t = s.decode(e, r);
          r += s.encodingLength(t);
          const n = e.slice(r, r + t);
          return (r += t), n;
        }
        function i() {
          return { key: n(), value: n() };
        }
        function a() {
          if (r >= e.length)
            throw new Error("Format Error: Unexpected End of PSBT");
          const t = 0 === e.readUInt8(r);
          return t && r++, t;
        }
        if (
          1886610036 !==
          (function () {
            const t = e.readUInt32BE(r);
            return (r += 4), t;
          })()
        )
          throw new Error("Format Error: Invalid Magic Number");
        if (
          255 !==
          (function () {
            const t = e.readUInt8(r);
            return (r += 1), t;
          })()
        )
          throw new Error(
            "Format Error: Magic Number must be followed by 0xff separator"
          );
        const f = [],
          p = {};
        for (; !a(); ) {
          const e = i(),
            t = e.key.toString("hex");
          if (p[t])
            throw new Error(
              "Format Error: Keys must be unique for global keymap: key " + t
            );
          (p[t] = 1), f.push(e);
        }
        const l = f.filter((e) => e.key[0] === u.GlobalTypes.UNSIGNED_TX);
        if (1 !== l.length)
          throw new Error("Format Error: Only one UNSIGNED_TX allowed");
        const h = t(l[0].value),
          { inputCount: d, outputCount: y } = h.getInputOutputCounts(),
          _ = [],
          w = [];
        for (const s of o.range(d)) {
          const e = {},
            t = [];
          for (; !a(); ) {
            const r = i(),
              n = r.key.toString("hex");
            if (e[n])
              throw new Error(
                "Format Error: Keys must be unique for each input: input index " +
                  s +
                  " key " +
                  n
              );
            (e[n] = 1), t.push(r);
          }
          _.push(t);
        }
        for (const s of o.range(y)) {
          const e = {},
            t = [];
          for (; !a(); ) {
            const r = i(),
              n = r.key.toString("hex");
            if (e[n])
              throw new Error(
                "Format Error: Keys must be unique for each output: output index " +
                  s +
                  " key " +
                  n
              );
            (e[n] = 1), t.push(r);
          }
          w.push(t);
        }
        return c(h, { globalMapKeyVals: f, inputKeyVals: _, outputKeyVals: w });
      }),
        (t.checkKeyBuffer = a),
        (t.psbtFromKeyVals = c);
    },
    50282: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.signatureBlocksAction =
          t.checkInputForSig =
          t.pubkeyInScript =
          t.pubkeyPositionInScript =
          t.witnessStackToScriptWitness =
          t.isP2TR =
          t.isP2SHScript =
          t.isP2WSHScript =
          t.isP2WPKH =
          t.isP2PKH =
          t.isP2PK =
          t.isP2MS =
            void 0);
      const i = r(25495),
        o = r(47165),
        s = r(71296),
        u = r(88743),
        a = r(20434);
      function c(e) {
        return (t) => {
          try {
            return e({ output: t }), !0;
          } catch (r) {
            return !1;
          }
        };
      }
      function f(e, t) {
        const r = (0, u.hash160)(e),
          n = e.slice(1, 33),
          i = o.decompile(t);
        if (null === i) throw new Error("Unknown script error");
        return i.findIndex(
          (t) =>
            "number" !== typeof t && (t.equals(e) || t.equals(r) || t.equals(n))
        );
      }
      function p(e, t, r) {
        const { hashType: n } = t(e),
          i = [];
        n & s.Transaction.SIGHASH_ANYONECANPAY && i.push("addInput");
        switch (31 & n) {
          case s.Transaction.SIGHASH_ALL:
            break;
          case s.Transaction.SIGHASH_SINGLE:
          case s.Transaction.SIGHASH_NONE:
            i.push("addOutput"), i.push("setInputSequence");
        }
        return -1 === i.indexOf(r);
      }
      (t.isP2MS = c(a.p2ms)),
        (t.isP2PK = c(a.p2pk)),
        (t.isP2PKH = c(a.p2pkh)),
        (t.isP2WPKH = c(a.p2wpkh)),
        (t.isP2WSHScript = c(a.p2wsh)),
        (t.isP2SHScript = c(a.p2sh)),
        (t.isP2TR = c(a.p2tr)),
        (t.witnessStackToScriptWitness = function (e) {
          let t = n.allocUnsafe(0);
          function r(e) {
            const r = t.length,
              o = i.encodingLength(e);
            (t = n.concat([t, n.allocUnsafe(o)])), i.encode(e, t, r);
          }
          function o(e) {
            r(e.length),
              (function (e) {
                t = n.concat([t, n.from(e)]);
              })(e);
          }
          var s;
          return r((s = e).length), s.forEach(o), t;
        }),
        (t.pubkeyPositionInScript = f),
        (t.pubkeyInScript = function (e, t) {
          return -1 !== f(e, t);
        }),
        (t.checkInputForSig = function (e, t) {
          return (function (e) {
            let t = [];
            if (0 === (e.partialSig || []).length) {
              if (!e.finalScriptSig && !e.finalScriptWitness) return [];
              t = (function (e) {
                const t =
                    (e.finalScriptSig && o.decompile(e.finalScriptSig)) || [],
                  r =
                    (e.finalScriptWitness &&
                      o.decompile(e.finalScriptWitness)) ||
                    [];
                return t
                  .concat(r)
                  .filter(
                    (e) => n.isBuffer(e) && o.isCanonicalScriptSignature(e)
                  )
                  .map((e) => ({ signature: e }));
              })(e);
            } else t = e.partialSig;
            return t.map((e) => e.signature);
          })(e).some((e) => p(e, o.signature.decode, t));
        }),
        (t.signatureBlocksAction = p);
    },
    54254: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.FINAL_SCRIPTWITNESS)
          throw new Error(
            "Decode Error: could not decode finalScriptWitness with key 0x" +
              e.key.toString("hex")
          );
        return e.value;
      }),
        (t.encode = function (e) {
          return { key: n.from([i.InputTypes.FINAL_SCRIPTWITNESS]), value: e };
        }),
        (t.expected = "Buffer"),
        (t.check = function (e) {
          return n.isBuffer(e);
        }),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.finalScriptWitness;
        });
    },
    55307: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeConverter = function (e) {
          return {
            decode: function (t) {
              if (t.key[0] !== e)
                throw new Error(
                  "Decode Error: could not decode witnessScript with key 0x" +
                    t.key.toString("hex")
                );
              return t.value;
            },
            encode: function (t) {
              return { key: n.from([e]), value: t };
            },
            check: function (e) {
              return n.isBuffer(e);
            },
            expected: "Buffer",
            canAdd: function (e, t) {
              return !!e && !!t && void 0 === e.witnessScript;
            },
          };
        });
    },
    55318: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encode = t.decode = void 0),
        (t.decode = function (e, t, r) {
          (t = t || 4), (r = void 0 === r || r);
          const n = e.length;
          if (0 === n) return 0;
          if (n > t) throw new TypeError("Script number overflow");
          if (r && 0 === (127 & e[n - 1]) && (n <= 1 || 0 === (128 & e[n - 2])))
            throw new Error("Non-minimally encoded script number");
          if (5 === n) {
            const t = e.readUInt32LE(0),
              r = e.readUInt8(4);
            return 128 & r
              ? -(4294967296 * (-129 & r) + t)
              : 4294967296 * r + t;
          }
          let i = 0;
          for (let o = 0; o < n; ++o) i |= e[o] << (8 * o);
          return 128 & e[n - 1] ? -(i & ~(128 << (8 * (n - 1)))) : i;
        }),
        (t.encode = function (e) {
          let t = Math.abs(e);
          const r =
            (i = t) > 2147483647
              ? 5
              : i > 8388607
              ? 4
              : i > 32767
              ? 3
              : i > 127
              ? 2
              : i > 0
              ? 1
              : 0;
          var i;
          const o = n.allocUnsafe(r),
            s = e < 0;
          for (let n = 0; n < r; ++n) o.writeUInt8(255 & t, n), (t >>= 8);
          return (
            128 & o[r - 1]
              ? o.writeUInt8(s ? 128 : 0, r - 1)
              : s && (o[r - 1] |= 128),
            o
          );
        });
    },
    55531: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(82289);
      function o(e, t) {
        const r = e[t];
        if (void 0 === r) throw new Error(`No input #${t}`);
        return r;
      }
      function s(e, t) {
        const r = e[t];
        if (void 0 === r) throw new Error(`No output #${t}`);
        return r;
      }
      function u(e, t, r, n) {
        throw new Error(
          `Data for ${e} key ${t} is incorrect: Expected ${r} and got ${JSON.stringify(
            n
          )}`
        );
      }
      function a(e) {
        return (t, r) => {
          for (const n of Object.keys(t)) {
            const o = t[n],
              {
                canAdd: s,
                canAddToArray: a,
                check: c,
                expected: f,
              } = i[e + "s"][n] || {};
            if (c)
              if (!!a) {
                if (!Array.isArray(o) || (r[n] && !Array.isArray(r[n])))
                  throw new Error(`Key type ${n} must be an array`);
                o.every(c) || u(e, n, f, o);
                const t = r[n] || [],
                  i = new Set();
                if (!o.every((e) => a(t, e, i)))
                  throw new Error("Can not add duplicate data to array");
                r[n] = t.concat(o);
              } else {
                if ((c(o) || u(e, n, f, o), !s(r, o)))
                  throw new Error(`Can not add duplicate data to ${e}`);
                r[n] = o;
              }
          }
        };
      }
      (t.checkForInput = o),
        (t.checkForOutput = s),
        (t.checkHasKey = function (e, t, r) {
          if (e.key[0] < r)
            throw new Error(
              "Use the method for your specific key instead of addUnknownKeyVal*"
            );
          if (t && 0 !== t.filter((t) => t.key.equals(e.key)).length)
            throw new Error(`Duplicate Key: ${e.key.toString("hex")}`);
        }),
        (t.getEnumLength = function (e) {
          let t = 0;
          return (
            Object.keys(e).forEach((e) => {
              Number(isNaN(Number(e))) && t++;
            }),
            t
          );
        }),
        (t.inputCheckUncleanFinalized = function (e, t) {
          let r = !1;
          if (t.nonWitnessUtxo || t.witnessUtxo) {
            const e = !!t.redeemScript,
              n = !!t.witnessScript,
              i = !e || !!t.finalScriptSig,
              o = !n || !!t.finalScriptWitness,
              s = !!t.finalScriptSig || !!t.finalScriptWitness;
            r = i && o && s;
          }
          if (!1 === r)
            throw new Error(
              `Input #${e} has too much or too little data to clean`
            );
        }),
        (t.updateGlobal = a("global")),
        (t.updateInput = a("input")),
        (t.updateOutput = a("output")),
        (t.addInputAttributes = function (e, r) {
          const n = o(e, e.length - 1);
          t.updateInput(r, n);
        }),
        (t.addOutputAttributes = function (e, r) {
          const n = s(e, e.length - 1);
          t.updateOutput(r, n);
        }),
        (t.defaultVersionSetter = function (e, t) {
          if (!n.isBuffer(t) || t.length < 4)
            throw new Error("Set Version: Invalid Transaction");
          return t.writeUInt32LE(e, 0), t;
        }),
        (t.defaultLocktimeSetter = function (e, t) {
          if (!n.isBuffer(t) || t.length < 4)
            throw new Error("Set Locktime: Invalid Transaction");
          return t.writeUInt32LE(e, t.length - 4), t;
        });
    },
    56557: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      function o(e) {
        return n.isBuffer(e) && 32 === e.length;
      }
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.TAP_MERKLE_ROOT || 1 !== e.key.length)
          throw new Error(
            "Decode Error: could not decode tapMerkleRoot with key 0x" +
              e.key.toString("hex")
          );
        if (!o(e.value))
          throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
        return e.value;
      }),
        (t.encode = function (e) {
          return { key: n.from([i.InputTypes.TAP_MERKLE_ROOT]), value: e };
        }),
        (t.expected = "Buffer"),
        (t.check = o),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.tapMerkleRoot;
        });
    },
    59119: (e, t, r) => {
      const n = r(72552);
      e.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    62227: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.p2data = void 0);
      const n = r(7653),
        i = r(47165),
        o = r(24781),
        s = r(63322),
        u = i.OPS;
      t.p2data = function (e, t) {
        if (!e.data && !e.output) throw new TypeError("Not enough data");
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, o.typeforce)(
            {
              network: o.typeforce.maybe(o.typeforce.Object),
              output: o.typeforce.maybe(o.typeforce.Buffer),
              data: o.typeforce.maybe(o.typeforce.arrayOf(o.typeforce.Buffer)),
            },
            e
          );
        const r = { name: "embed", network: e.network || n.bitcoin };
        if (
          (s.prop(r, "output", () => {
            if (e.data) return i.compile([u.OP_RETURN].concat(e.data));
          }),
          s.prop(r, "data", () => {
            if (e.output) return i.decompile(e.output).slice(1);
          }),
          t.validate && e.output)
        ) {
          const t = i.decompile(e.output);
          if (t[0] !== u.OP_RETURN) throw new TypeError("Output is invalid");
          if (!t.slice(1).every(o.typeforce.Buffer))
            throw new TypeError("Output is invalid");
          if (e.data && !(0, o.stacksEqual)(e.data, r.data))
            throw new TypeError("Data mismatch");
        }
        return Object.assign(r, e);
      };
    },
    62533: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Psbt = void 0);
      const i = r(38655),
        o = r(25495),
        s = r(55531),
        u = r(86720),
        a = r(35699),
        c = r(7653),
        f = r(20434),
        p = r(41443),
        l = r(47165),
        h = r(71296),
        d = r(12536),
        y = r(50282),
        _ = { network: c.bitcoin, maximumFeeRate: 5e3 };
      class w {
        static fromBase64(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = n.from(e, "base64");
          return this.fromBuffer(r, t);
        }
        static fromHex(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = n.from(e, "hex");
          return this.fromBuffer(r, t);
        }
        static fromBuffer(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = i.Psbt.fromBuffer(e, g),
            n = new w(t, r);
          var o, s;
          return (
            (o = n.__CACHE.__TX),
            (s = n.__CACHE),
            o.ins.forEach((e) => {
              P(s, e);
            }),
            n
          );
        }
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new i.Psbt(new m());
          (this.data = t),
            (this.opts = Object.assign({}, _, e)),
            (this.__CACHE = {
              __NON_WITNESS_UTXO_TX_CACHE: [],
              __NON_WITNESS_UTXO_BUF_CACHE: [],
              __TX_IN_CACHE: {},
              __TX: this.data.globalMap.unsignedTx.tx,
              __UNSAFE_SIGN_NONSEGWIT: !1,
            }),
            0 === this.data.inputs.length && this.setVersion(2);
          const r = (e, t, r, n) =>
            Object.defineProperty(e, t, { enumerable: r, writable: n });
          r(this, "__CACHE", !1, !0), r(this, "opts", !1, !0);
        }
        get inputCount() {
          return this.data.inputs.length;
        }
        get version() {
          return this.__CACHE.__TX.version;
        }
        set version(e) {
          this.setVersion(e);
        }
        get locktime() {
          return this.__CACHE.__TX.locktime;
        }
        set locktime(e) {
          this.setLocktime(e);
        }
        get txInputs() {
          return this.__CACHE.__TX.ins.map((e) => ({
            hash: (0, a.cloneBuffer)(e.hash),
            index: e.index,
            sequence: e.sequence,
          }));
        }
        get txOutputs() {
          return this.__CACHE.__TX.outs.map((e) => {
            let t;
            try {
              t = (0, u.fromOutputScript)(e.script, this.opts.network);
            } catch (r) {}
            return {
              script: (0, a.cloneBuffer)(e.script),
              value: e.value,
              address: t,
            };
          });
        }
        combine() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return this.data.combine(...t.map((e) => e.data)), this;
        }
        clone() {
          const e = w.fromBuffer(this.data.toBuffer());
          return (e.opts = JSON.parse(JSON.stringify(this.opts))), e;
        }
        setMaximumFeeRate(e) {
          T(e), (this.opts.maximumFeeRate = e);
        }
        setVersion(e) {
          T(e), I(this.data.inputs, "setVersion");
          const t = this.__CACHE;
          return (t.__TX.version = e), (t.__EXTRACTED_TX = void 0), this;
        }
        setLocktime(e) {
          T(e), I(this.data.inputs, "setLocktime");
          const t = this.__CACHE;
          return (t.__TX.locktime = e), (t.__EXTRACTED_TX = void 0), this;
        }
        setInputSequence(e, t) {
          T(t), I(this.data.inputs, "setInputSequence");
          const r = this.__CACHE;
          if (r.__TX.ins.length <= e) throw new Error("Input index too high");
          return (
            (r.__TX.ins[e].sequence = t), (r.__EXTRACTED_TX = void 0), this
          );
        }
        addInputs(e) {
          return e.forEach((e) => this.addInput(e)), this;
        }
        addInput(e) {
          if (
            arguments.length > 1 ||
            !e ||
            void 0 === e.hash ||
            void 0 === e.index
          )
            throw new Error(
              "Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]"
            );
          (0, d.checkTaprootInputFields)(e, e, "addInput"),
            I(this.data.inputs, "addInput"),
            e.witnessScript && $(e.witnessScript);
          const t = this.__CACHE;
          this.data.addInput(e);
          P(t, t.__TX.ins[t.__TX.ins.length - 1]);
          const r = this.data.inputs.length - 1,
            n = this.data.inputs[r];
          return (
            n.nonWitnessUtxo && M(this.__CACHE, n, r),
            (t.__FEE = void 0),
            (t.__FEE_RATE = void 0),
            (t.__EXTRACTED_TX = void 0),
            this
          );
        }
        addOutputs(e) {
          return e.forEach((e) => this.addOutput(e)), this;
        }
        addOutput(e) {
          if (
            arguments.length > 1 ||
            !e ||
            void 0 === e.value ||
            (void 0 === e.address && void 0 === e.script)
          )
            throw new Error(
              "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]"
            );
          I(this.data.inputs, "addOutput");
          const { address: t } = e;
          if ("string" === typeof t) {
            const { network: r } = this.opts,
              n = (0, u.toOutputScript)(t, r);
            e = Object.assign({}, e, { script: n });
          }
          (0, d.checkTaprootOutputFields)(e, e, "addOutput");
          const r = this.__CACHE;
          return (
            this.data.addOutput(e),
            (r.__FEE = void 0),
            (r.__FEE_RATE = void 0),
            (r.__EXTRACTED_TX = void 0),
            this
          );
        }
        extractTransaction(e) {
          if (!this.data.inputs.every(S)) throw new Error("Not finalized");
          const t = this.__CACHE;
          if (
            (e ||
              (function (e, t, r) {
                const n = t.__FEE_RATE || e.getFeeRate(),
                  i = t.__EXTRACTED_TX.virtualSize(),
                  o = n * i;
                if (n >= r.maximumFeeRate)
                  throw new Error(
                    `Warning: You are paying around ${(o / 1e8).toFixed(
                      8
                    )} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
                  );
              })(this, t, this.opts),
            t.__EXTRACTED_TX)
          )
            return t.__EXTRACTED_TX;
          const r = t.__TX.clone();
          return F(this.data.inputs, r, t, !0), r;
        }
        getFeeRate() {
          return H("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE);
        }
        getFee() {
          return H("__FEE", "fee", this.data.inputs, this.__CACHE);
        }
        finalizeAllInputs() {
          return (
            (0, s.checkForInput)(this.data.inputs, 0),
            Y(this.data.inputs.length).forEach((e) => this.finalizeInput(e)),
            this
          );
        }
        finalizeInput(e, t) {
          const r = (0, s.checkForInput)(this.data.inputs, e);
          return (0, d.isTaprootInput)(r)
            ? this._finalizeTaprootInput(e, r, void 0, t)
            : this._finalizeInput(e, r, t);
        }
        finalizeTaprootInput(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : d.tapScriptFinalizer;
          const n = (0, s.checkForInput)(this.data.inputs, e);
          if ((0, d.isTaprootInput)(n))
            return this._finalizeTaprootInput(e, n, t, r);
          throw new Error(`Cannot finalize input #${e}. Not Taproot.`);
        }
        _finalizeInput(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : B;
          const {
            script: n,
            isP2SH: i,
            isP2WSH: o,
            isSegwit: s,
          } = (function (e, t, r) {
            const n = r.__TX,
              i = { script: null, isSegwit: !1, isP2SH: !1, isP2WSH: !1 };
            if (
              ((i.isP2SH = !!t.redeemScript),
              (i.isP2WSH = !!t.witnessScript),
              t.witnessScript)
            )
              i.script = t.witnessScript;
            else if (t.redeemScript) i.script = t.redeemScript;
            else if (t.nonWitnessUtxo) {
              const o = W(r, t, e),
                s = n.ins[e].index;
              i.script = o.outs[s].script;
            } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
            (t.witnessScript || (0, y.isP2WPKH)(i.script)) && (i.isSegwit = !0);
            return i;
          })(e, t, this.__CACHE);
          if (!n) throw new Error(`No script found for input #${e}`);
          !(function (e) {
            if (!e.sighashType || !e.partialSig) return;
            const { partialSig: t, sighashType: r } = e;
            t.forEach((e) => {
              const { hashType: t } = l.signature.decode(e.signature);
              if (r !== t)
                throw new Error(
                  "Signature sighash does not match input sighash type"
                );
            });
          })(t);
          const { finalScriptSig: u, finalScriptWitness: a } = r(
            e,
            t,
            n,
            s,
            i,
            o
          );
          if (
            (u && this.data.updateInput(e, { finalScriptSig: u }),
            a && this.data.updateInput(e, { finalScriptWitness: a }),
            !u && !a)
          )
            throw new Error(`Unknown error finalizing input #${e}`);
          return this.data.clearFinalizedInput(e), this;
        }
        _finalizeTaprootInput(e, t, r) {
          let n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : d.tapScriptFinalizer;
          if (!t.witnessUtxo)
            throw new Error(
              `Cannot finalize input #${e}. Missing withness utxo.`
            );
          if (t.tapKeySig) {
            const r = f.p2tr({
                output: t.witnessUtxo.script,
                signature: t.tapKeySig,
              }),
              n = (0, y.witnessStackToScriptWitness)(r.witness);
            this.data.updateInput(e, { finalScriptWitness: n });
          } else {
            const { finalScriptWitness: i } = n(e, t, r);
            this.data.updateInput(e, { finalScriptWitness: i });
          }
          return this.data.clearFinalizedInput(e), this;
        }
        getInputType(e) {
          const t = (0, s.checkForInput)(this.data.inputs, e),
            r = q(
              G(e, t, this.__CACHE),
              e,
              "input",
              t.redeemScript ||
                (function (e) {
                  if (!e) return;
                  const t = l.decompile(e);
                  if (!t) return;
                  const r = t[t.length - 1];
                  if (
                    !n.isBuffer(r) ||
                    X(r) ||
                    ((i = r), l.isCanonicalScriptSignature(i))
                  )
                    return;
                  var i;
                  if (!l.decompile(r)) return;
                  return r;
                })(t.finalScriptSig),
              t.witnessScript ||
                (function (e) {
                  if (!e) return;
                  const t = V(e),
                    r = t[t.length - 1];
                  if (X(r)) return;
                  if (!l.decompile(r)) return;
                  return r;
                })(t.finalScriptWitness)
            );
          return ("raw" === r.type ? "" : r.type + "-") + z(r.meaningfulScript);
        }
        inputHasPubkey(e, t) {
          return (function (e, t, r, n) {
            const i = G(r, t, n),
              { meaningfulScript: o } = q(
                i,
                r,
                "input",
                t.redeemScript,
                t.witnessScript
              );
            return (0, y.pubkeyInScript)(e, o);
          })(t, (0, s.checkForInput)(this.data.inputs, e), e, this.__CACHE);
        }
        inputHasHDKey(e, t) {
          const r = (0, s.checkForInput)(this.data.inputs, e),
            n = v(t);
          return !!r.bip32Derivation && r.bip32Derivation.some(n);
        }
        outputHasPubkey(e, t) {
          return (function (e, t, r, n) {
            const i = n.__TX.outs[r].script,
              { meaningfulScript: o } = q(
                i,
                r,
                "output",
                t.redeemScript,
                t.witnessScript
              );
            return (0, y.pubkeyInScript)(e, o);
          })(t, (0, s.checkForOutput)(this.data.outputs, e), e, this.__CACHE);
        }
        outputHasHDKey(e, t) {
          const r = (0, s.checkForOutput)(this.data.outputs, e),
            n = v(t);
          return !!r.bip32Derivation && r.bip32Derivation.some(n);
        }
        validateSignaturesOfAllInputs(e) {
          (0, s.checkForInput)(this.data.inputs, 0);
          return Y(this.data.inputs.length)
            .map((t) => this.validateSignaturesOfInput(t, e))
            .reduce((e, t) => !0 === t && e, !0);
        }
        validateSignaturesOfInput(e, t, r) {
          const n = this.data.inputs[e];
          return (0, d.isTaprootInput)(n)
            ? this.validateSignaturesOfTaprootInput(e, t, r)
            : this._validateSignaturesOfInput(e, t, r);
        }
        _validateSignaturesOfInput(e, t, r) {
          const n = this.data.inputs[e],
            i = (n || {}).partialSig;
          if (!n || !i || i.length < 1)
            throw new Error("No signatures to validate");
          if ("function" !== typeof t)
            throw new Error("Need validator function to validate signatures");
          const o = r ? i.filter((e) => e.pubkey.equals(r)) : i;
          if (o.length < 1) throw new Error("No signatures for this pubkey");
          const s = [];
          let u, a, c;
          for (const f of o) {
            const r = l.signature.decode(f.signature),
              { hash: i, script: o } =
                c !== r.hashType
                  ? x(
                      e,
                      Object.assign({}, n, { sighashType: r.hashType }),
                      this.__CACHE,
                      !0
                    )
                  : { hash: u, script: a };
            (c = r.hashType),
              (u = i),
              (a = o),
              k(f.pubkey, o, "verify"),
              s.push(t(f.pubkey, i, r.signature));
          }
          return s.every((e) => !0 === e);
        }
        validateSignaturesOfTaprootInput(e, t, r) {
          const n = this.data.inputs[e],
            i = (n || {}).tapKeySig,
            o = (n || {}).tapScriptSig;
          if (!n && !i && (!o || o.length))
            throw new Error("No signatures to validate");
          if ("function" !== typeof t)
            throw new Error("Need validator function to validate signatures");
          const s = (r = r && (0, d.toXOnly)(r))
            ? L(e, n, this.data.inputs, r, this.__CACHE)
            : (function (e, t, r, n) {
                const i = [];
                if (t.tapInternalKey) {
                  const r = C(e, t, n);
                  r && i.push(r);
                }
                if (t.tapScriptSig) {
                  const e = t.tapScriptSig.map((e) => e.pubkey);
                  i.push(...e);
                }
                const o = i.map((i) => L(e, t, r, i, n));
                return o.flat();
              })(e, n, this.data.inputs, this.__CACHE);
          if (!s.length) throw new Error("No signatures for this pubkey");
          const u = s.find((e) => !e.leafHash);
          let a = 0;
          if (i && u) {
            if (!t(u.pubkey, u.hash, R(i))) return !1;
            a++;
          }
          if (o)
            for (const c of o) {
              const e = s.find((e) => c.pubkey.equals(e.pubkey));
              if (e) {
                if (!t(c.pubkey, e.hash, R(c.signature))) return !1;
                a++;
              }
            }
          return a > 0;
        }
        signAllInputsHD(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [h.Transaction.SIGHASH_ALL];
          if (!e || !e.publicKey || !e.fingerprint)
            throw new Error("Need HDSigner to sign input");
          const r = [];
          for (const i of Y(this.data.inputs.length))
            try {
              this.signInputHD(i, e, t), r.push(!0);
            } catch (n) {
              r.push(!1);
            }
          if (r.every((e) => !1 === e))
            throw new Error("No inputs were signed");
          return this;
        }
        signAllInputsHDAsync(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [h.Transaction.SIGHASH_ALL];
          return new Promise((r, n) => {
            if (!e || !e.publicKey || !e.fingerprint)
              return n(new Error("Need HDSigner to sign input"));
            const i = [],
              o = [];
            for (const s of Y(this.data.inputs.length))
              o.push(
                this.signInputHDAsync(s, e, t).then(
                  () => {
                    i.push(!0);
                  },
                  () => {
                    i.push(!1);
                  }
                )
              );
            return Promise.all(o).then(() => {
              if (i.every((e) => !1 === e))
                return n(new Error("No inputs were signed"));
              r();
            });
          });
        }
        signInputHD(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [h.Transaction.SIGHASH_ALL];
          if (!t || !t.publicKey || !t.fingerprint)
            throw new Error("Need HDSigner to sign input");
          return (
            K(e, this.data.inputs, t).forEach((t) => this.signInput(e, t, r)),
            this
          );
        }
        signInputHDAsync(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [h.Transaction.SIGHASH_ALL];
          return new Promise((n, i) => {
            if (!t || !t.publicKey || !t.fingerprint)
              return i(new Error("Need HDSigner to sign input"));
            const o = K(e, this.data.inputs, t).map((t) =>
              this.signInputAsync(e, t, r)
            );
            return Promise.all(o)
              .then(() => {
                n();
              })
              .catch(i);
          });
        }
        signAllInputs(e, t) {
          if (!e || !e.publicKey) throw new Error("Need Signer to sign input");
          const r = [];
          for (const i of Y(this.data.inputs.length))
            try {
              this.signInput(i, e, t), r.push(!0);
            } catch (n) {
              r.push(!1);
            }
          if (r.every((e) => !1 === e))
            throw new Error("No inputs were signed");
          return this;
        }
        signAllInputsAsync(e, t) {
          return new Promise((r, n) => {
            if (!e || !e.publicKey)
              return n(new Error("Need Signer to sign input"));
            const i = [],
              o = [];
            for (const [s] of this.data.inputs.entries())
              o.push(
                this.signInputAsync(s, e, t).then(
                  () => {
                    i.push(!0);
                  },
                  () => {
                    i.push(!1);
                  }
                )
              );
            return Promise.all(o).then(() => {
              if (i.every((e) => !1 === e))
                return n(new Error("No inputs were signed"));
              r();
            });
          });
        }
        signInput(e, t, r) {
          if (!t || !t.publicKey) throw new Error("Need Signer to sign input");
          const n = (0, s.checkForInput)(this.data.inputs, e);
          return (0, d.isTaprootInput)(n)
            ? this._signTaprootInput(e, n, t, void 0, r)
            : this._signInput(e, t, r);
        }
        signTaprootInput(e, t, r, n) {
          if (!t || !t.publicKey) throw new Error("Need Signer to sign input");
          const i = (0, s.checkForInput)(this.data.inputs, e);
          if ((0, d.isTaprootInput)(i))
            return this._signTaprootInput(e, i, t, r, n);
          throw new Error(`Input #${e} is not of type Taproot.`);
        }
        _signInput(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [h.Transaction.SIGHASH_ALL];
          const { hash: n, sighashType: i } = U(
              this.data.inputs,
              e,
              t.publicKey,
              this.__CACHE,
              r
            ),
            o = [
              {
                pubkey: t.publicKey,
                signature: l.signature.encode(t.sign(n), i),
              },
            ];
          return this.data.updateInput(e, { partialSig: o }), this;
        }
        _signTaprootInput(e, t, r, n) {
          let i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : [h.Transaction.SIGHASH_DEFAULT];
          const o = this.checkTaprootHashesForSig(e, t, r, n, i),
            s = o
              .filter((e) => !e.leafHash)
              .map((e) =>
                (0, d.serializeTaprootSignature)(
                  r.signSchnorr(e.hash),
                  t.sighashType
                )
              )[0],
            u = o
              .filter((e) => !!e.leafHash)
              .map((e) => ({
                pubkey: (0, d.toXOnly)(r.publicKey),
                signature: (0, d.serializeTaprootSignature)(
                  r.signSchnorr(e.hash),
                  t.sighashType
                ),
                leafHash: e.leafHash,
              }));
          return (
            s && this.data.updateInput(e, { tapKeySig: s }),
            u.length && this.data.updateInput(e, { tapScriptSig: u }),
            this
          );
        }
        signInputAsync(e, t, r) {
          return Promise.resolve().then(() => {
            if (!t || !t.publicKey)
              throw new Error("Need Signer to sign input");
            const n = (0, s.checkForInput)(this.data.inputs, e);
            return (0, d.isTaprootInput)(n)
              ? this._signTaprootInputAsync(e, n, t, void 0, r)
              : this._signInputAsync(e, t, r);
          });
        }
        signTaprootInputAsync(e, t, r, n) {
          return Promise.resolve().then(() => {
            if (!t || !t.publicKey)
              throw new Error("Need Signer to sign input");
            const i = (0, s.checkForInput)(this.data.inputs, e);
            if ((0, d.isTaprootInput)(i))
              return this._signTaprootInputAsync(e, i, t, r, n);
            throw new Error(`Input #${e} is not of type Taproot.`);
          });
        }
        _signInputAsync(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [h.Transaction.SIGHASH_ALL];
          const { hash: n, sighashType: i } = U(
            this.data.inputs,
            e,
            t.publicKey,
            this.__CACHE,
            r
          );
          return Promise.resolve(t.sign(n)).then((r) => {
            const n = [
              { pubkey: t.publicKey, signature: l.signature.encode(r, i) },
            ];
            this.data.updateInput(e, { partialSig: n });
          });
        }
        async _signTaprootInputAsync(e, t, r, n) {
          let i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : [h.Transaction.SIGHASH_DEFAULT];
          const o = this.checkTaprootHashesForSig(e, t, r, n, i),
            s = [],
            u = o.filter((e) => !e.leafHash)[0];
          if (u) {
            const e = Promise.resolve(r.signSchnorr(u.hash)).then((e) => ({
              tapKeySig: (0, d.serializeTaprootSignature)(e, t.sighashType),
            }));
            s.push(e);
          }
          const a = o.filter((e) => !!e.leafHash);
          if (a.length) {
            const e = a.map((e) =>
              Promise.resolve(r.signSchnorr(e.hash)).then((n) => ({
                tapScriptSig: [
                  {
                    pubkey: (0, d.toXOnly)(r.publicKey),
                    signature: (0, d.serializeTaprootSignature)(
                      n,
                      t.sighashType
                    ),
                    leafHash: e.leafHash,
                  },
                ],
              }))
            );
            s.push(...e);
          }
          return Promise.all(s).then((t) => {
            t.forEach((t) => this.data.updateInput(e, t));
          });
        }
        checkTaprootHashesForSig(e, t, r, n, i) {
          if ("function" !== typeof r.signSchnorr)
            throw new Error(`Need Schnorr Signer to sign taproot input #${e}.`);
          const o = L(e, t, this.data.inputs, r.publicKey, this.__CACHE, n, i);
          if (!o || !o.length)
            throw new Error(
              `Can not sign for input #${e} with the key ${r.publicKey.toString(
                "hex"
              )}`
            );
          return o;
        }
        toBuffer() {
          return E(this.__CACHE), this.data.toBuffer();
        }
        toHex() {
          return E(this.__CACHE), this.data.toHex();
        }
        toBase64() {
          return E(this.__CACHE), this.data.toBase64();
        }
        updateGlobal(e) {
          return this.data.updateGlobal(e), this;
        }
        updateInput(e, t) {
          return (
            t.witnessScript && $(t.witnessScript),
            (0, d.checkTaprootInputFields)(
              this.data.inputs[e],
              t,
              "updateInput"
            ),
            this.data.updateInput(e, t),
            t.nonWitnessUtxo && M(this.__CACHE, this.data.inputs[e], e),
            this
          );
        }
        updateOutput(e, t) {
          const r = this.data.outputs[e];
          return (
            (0, d.checkTaprootOutputFields)(r, t, "updateOutput"),
            this.data.updateOutput(e, t),
            this
          );
        }
        addUnknownKeyValToGlobal(e) {
          return this.data.addUnknownKeyValToGlobal(e), this;
        }
        addUnknownKeyValToInput(e, t) {
          return this.data.addUnknownKeyValToInput(e, t), this;
        }
        addUnknownKeyValToOutput(e, t) {
          return this.data.addUnknownKeyValToOutput(e, t), this;
        }
        clearFinalizedInput(e) {
          return this.data.clearFinalizedInput(e), this;
        }
      }
      t.Psbt = w;
      const g = (e) => new m(e);
      class m {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : n.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          (this.tx = h.Transaction.fromBuffer(e)),
            (function (e) {
              if (
                !e.ins.every(
                  (e) =>
                    e.script &&
                    0 === e.script.length &&
                    e.witness &&
                    0 === e.witness.length
                )
              )
                throw new Error(
                  "Format Error: Transaction ScriptSigs are not empty"
                );
            })(this.tx),
            Object.defineProperty(this, "tx", { enumerable: !1, writable: !0 });
        }
        getInputOutputCounts() {
          return {
            inputCount: this.tx.ins.length,
            outputCount: this.tx.outs.length,
          };
        }
        addInput(e) {
          if (
            void 0 === e.hash ||
            void 0 === e.index ||
            (!n.isBuffer(e.hash) && "string" !== typeof e.hash) ||
            "number" !== typeof e.index
          )
            throw new Error("Error adding input.");
          const t =
            "string" === typeof e.hash
              ? (0, a.reverseBuffer)(n.from(e.hash, "hex"))
              : e.hash;
          this.tx.addInput(t, e.index, e.sequence);
        }
        addOutput(e) {
          if (
            void 0 === e.script ||
            void 0 === e.value ||
            !n.isBuffer(e.script) ||
            "number" !== typeof e.value
          )
            throw new Error("Error adding output.");
          this.tx.addOutput(e.script, e.value);
        }
        toBuffer() {
          return this.tx.toBuffer();
        }
      }
      function E(e) {
        if (!1 !== e.__UNSAFE_SIGN_NONSEGWIT)
          throw new Error("Not BIP174 compliant, can not export");
      }
      function b(e, t, r) {
        if (!t) return !1;
        let n;
        if (
          ((n = r
            ? r
                .map((e) => {
                  const r = (function (e) {
                    if (65 === e.length) {
                      const t = 1 & e[64],
                        r = e.slice(0, 33);
                      return (r[0] = 2 | t), r;
                    }
                    return e.slice();
                  })(e);
                  return t.find((e) => e.pubkey.equals(r));
                })
                .filter((e) => !!e)
            : t),
          n.length > e)
        )
          throw new Error("Too many signatures");
        return n.length === e;
      }
      function S(e) {
        return !!e.finalScriptSig || !!e.finalScriptWitness;
      }
      function v(e) {
        return (t) =>
          !!t.masterFingerprint.equals(e.fingerprint) &&
          !!e.derivePath(t.path).publicKey.equals(t.pubkey);
      }
      function T(e) {
        if (
          "number" !== typeof e ||
          e !== Math.floor(e) ||
          e > 4294967295 ||
          e < 0
        )
          throw new Error("Invalid 32 bit integer");
      }
      function I(e, t) {
        e.forEach((e) => {
          if (
            (0, d.isTaprootInput)(e)
              ? (0, d.checkTaprootInputForSigs)(e, t)
              : (0, y.checkInputForSig)(e, t)
          )
            throw new Error("Can not modify transaction, signatures exist.");
        });
      }
      function k(e, t, r) {
        if (!(0, y.pubkeyInScript)(e, t))
          throw new Error(
            `Can not ${r} for this input with the key ${e.toString("hex")}`
          );
      }
      function P(e, t) {
        const r =
          (0, a.reverseBuffer)(n.from(t.hash)).toString("hex") + ":" + t.index;
        if (e.__TX_IN_CACHE[r]) throw new Error("Duplicate input detected.");
        e.__TX_IN_CACHE[r] = 1;
      }
      function O(e, t) {
        return (r, n, i, o) => {
          const s = e({ redeem: { output: i } }).output;
          if (!n.equals(s))
            throw new Error(
              `${t} for ${o} #${r} doesn't match the scriptPubKey in the prevout`
            );
        };
      }
      const A = O(f.p2sh, "Redeem script"),
        N = O(f.p2wsh, "Witness script");
      function H(e, t, r, n) {
        if (!r.every(S))
          throw new Error(`PSBT must be finalized to calculate ${t}`);
        if ("__FEE_RATE" === e && n.__FEE_RATE) return n.__FEE_RATE;
        if ("__FEE" === e && n.__FEE) return n.__FEE;
        let i,
          o = !0;
        return (
          n.__EXTRACTED_TX
            ? ((i = n.__EXTRACTED_TX), (o = !1))
            : (i = n.__TX.clone()),
          F(r, i, n, o),
          "__FEE_RATE" === e ? n.__FEE_RATE : "__FEE" === e ? n.__FEE : void 0
        );
      }
      function B(e, t, r, n, i, o) {
        const s = z(r);
        if (
          !(function (e, t, r) {
            switch (r) {
              case "pubkey":
              case "pubkeyhash":
              case "witnesspubkeyhash":
                return b(1, e.partialSig);
              case "multisig":
                const r = f.p2ms({ output: t });
                return b(r.m, e.partialSig, r.pubkeys);
              default:
                return !1;
            }
          })(t, r, s)
        )
          throw new Error(`Can not finalize input #${e}`);
        return (function (e, t, r, n, i, o) {
          let s, u;
          const a = (function (e, t, r) {
              let n;
              switch (t) {
                case "multisig":
                  const t = (function (e, t) {
                    const r = f.p2ms({ output: e });
                    return r.pubkeys
                      .map(
                        (e) =>
                          (t.filter((t) => t.pubkey.equals(e))[0] || {})
                            .signature
                      )
                      .filter((e) => !!e);
                  })(e, r);
                  n = f.p2ms({ output: e, signatures: t });
                  break;
                case "pubkey":
                  n = f.p2pk({ output: e, signature: r[0].signature });
                  break;
                case "pubkeyhash":
                  n = f.p2pkh({
                    output: e,
                    pubkey: r[0].pubkey,
                    signature: r[0].signature,
                  });
                  break;
                case "witnesspubkeyhash":
                  n = f.p2wpkh({
                    output: e,
                    pubkey: r[0].pubkey,
                    signature: r[0].signature,
                  });
              }
              return n;
            })(e, t, r),
            c = o ? f.p2wsh({ redeem: a }) : null,
            p = i ? f.p2sh({ redeem: c || a }) : null;
          n
            ? ((u = c
                ? (0, y.witnessStackToScriptWitness)(c.witness)
                : (0, y.witnessStackToScriptWitness)(a.witness)),
              p && (s = p.input))
            : (s = p ? p.input : a.input);
          return { finalScriptSig: s, finalScriptWitness: u };
        })(r, s, t.partialSig, n, i, o);
      }
      function U(e, t, r, n, i) {
        const o = (0, s.checkForInput)(e, t),
          { hash: u, sighashType: a, script: c } = x(t, o, n, !1, i);
        return k(r, c, "sign"), { hash: u, sighashType: a };
      }
      function x(e, t, r, n, i) {
        const o = r.__TX,
          s = t.sighashType || h.Transaction.SIGHASH_ALL;
        let u, a;
        if ((D(s, i), t.nonWitnessUtxo)) {
          const n = W(r, t, e),
            i = o.ins[e].hash,
            s = n.getHash();
          if (!i.equals(s))
            throw new Error(
              `Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`
            );
          const u = o.ins[e].index;
          a = n.outs[u];
        } else {
          if (!t.witnessUtxo)
            throw new Error("Need a Utxo input item for signing");
          a = t.witnessUtxo;
        }
        const { meaningfulScript: c, type: p } = q(
          a.script,
          e,
          "input",
          t.redeemScript,
          t.witnessScript
        );
        if (["p2sh-p2wsh", "p2wsh"].indexOf(p) >= 0)
          u = o.hashForWitnessV0(e, c, a.value, s);
        else if ((0, y.isP2WPKH)(c)) {
          const t = f.p2pkh({ hash: c.slice(2) }).output;
          u = o.hashForWitnessV0(e, t, a.value, s);
        } else {
          if (void 0 === t.nonWitnessUtxo && !1 === r.__UNSAFE_SIGN_NONSEGWIT)
            throw new Error(
              `Input #${e} has witnessUtxo but non-segwit script: ${c.toString(
                "hex"
              )}`
            );
          n ||
            !1 === r.__UNSAFE_SIGN_NONSEGWIT ||
            console.warn(
              "Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n*********************"
            ),
            (u = o.hashForSignature(e, c, s));
        }
        return { script: c, sighashType: s, hash: u };
      }
      function C(e, t, r) {
        const { script: n } = j(e, t, r);
        return (0, y.isP2TR)(n) ? n.subarray(2, 34) : null;
      }
      function R(e) {
        return 64 === e.length ? e : e.subarray(0, 64);
      }
      function L(e, t, r, i, o, s, u) {
        const a = o.__TX,
          c = t.sighashType || h.Transaction.SIGHASH_DEFAULT;
        D(c, u);
        const f = r.map((e, t) => j(t, e, o)),
          l = f.map((e) => e.script),
          _ = f.map((e) => e.value),
          w = [];
        if (t.tapInternalKey && !s) {
          const r = C(e, t, o) || n.from([]);
          if ((0, d.toXOnly)(i).equals(r)) {
            const t = a.hashForWitnessV1(e, l, _, c);
            w.push({ pubkey: i, hash: t });
          }
        }
        const g = (t.tapLeafScript || [])
          .filter((e) => (0, y.pubkeyInScript)(i, e.script))
          .map((e) => {
            const t = (0, p.tapleafHash)({
              output: e.script,
              version: e.leafVersion,
            });
            return Object.assign({ hash: t }, e);
          })
          .filter((e) => !s || s.equals(e.hash))
          .map((t) => {
            const r = a.hashForWitnessV1(e, l, _, c, t.hash);
            return { pubkey: i, hash: r, leafHash: t.hash };
          });
        return w.concat(g);
      }
      function D(e, t) {
        if (t && t.indexOf(e) < 0) {
          const t = (function (e) {
            let t =
              e & h.Transaction.SIGHASH_ANYONECANPAY
                ? "SIGHASH_ANYONECANPAY | "
                : "";
            switch (31 & e) {
              case h.Transaction.SIGHASH_ALL:
                t += "SIGHASH_ALL";
                break;
              case h.Transaction.SIGHASH_SINGLE:
                t += "SIGHASH_SINGLE";
                break;
              case h.Transaction.SIGHASH_NONE:
                t += "SIGHASH_NONE";
            }
            return t;
          })(e);
          throw new Error(
            `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${t}`
          );
        }
      }
      function K(e, t, r) {
        const n = (0, s.checkForInput)(t, e);
        if (!n.bip32Derivation || 0 === n.bip32Derivation.length)
          throw new Error("Need bip32Derivation to sign with HD");
        const i = n.bip32Derivation
          .map((e) => (e.masterFingerprint.equals(r.fingerprint) ? e : void 0))
          .filter((e) => !!e);
        if (0 === i.length)
          throw new Error(
            "Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint"
          );
        return i.map((e) => {
          const t = r.derivePath(e.path);
          if (!e.pubkey.equals(t.publicKey))
            throw new Error("pubkey did not match bip32Derivation");
          return t;
        });
      }
      function V(e) {
        let t = 0;
        function r() {
          const r = o.decode(e, t);
          return (t += o.decode.bytes), r;
        }
        function n() {
          return (n = r()), (t += n), e.slice(t - n, t);
          var n;
        }
        return (function () {
          const e = r(),
            t = [];
          for (let r = 0; r < e; r++) t.push(n());
          return t;
        })();
      }
      function M(e, t, r) {
        e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t.nonWitnessUtxo;
        const n = h.Transaction.fromBuffer(t.nonWitnessUtxo);
        e.__NON_WITNESS_UTXO_TX_CACHE[r] = n;
        const i = e,
          o = r;
        delete t.nonWitnessUtxo,
          Object.defineProperty(t, "nonWitnessUtxo", {
            enumerable: !0,
            get() {
              const e = i.__NON_WITNESS_UTXO_BUF_CACHE[o],
                t = i.__NON_WITNESS_UTXO_TX_CACHE[o];
              if (void 0 !== e) return e;
              {
                const e = t.toBuffer();
                return (i.__NON_WITNESS_UTXO_BUF_CACHE[o] = e), e;
              }
            },
            set(e) {
              i.__NON_WITNESS_UTXO_BUF_CACHE[o] = e;
            },
          });
      }
      function F(e, t, r, n) {
        let i = 0;
        e.forEach((e, o) => {
          if (
            (n && e.finalScriptSig && (t.ins[o].script = e.finalScriptSig),
            n &&
              e.finalScriptWitness &&
              (t.ins[o].witness = V(e.finalScriptWitness)),
            e.witnessUtxo)
          )
            i += e.witnessUtxo.value;
          else if (e.nonWitnessUtxo) {
            const n = W(r, e, o),
              s = t.ins[o].index,
              u = n.outs[s];
            i += u.value;
          }
        });
        const o = t.outs.reduce((e, t) => e + t.value, 0),
          s = i - o;
        if (s < 0) throw new Error("Outputs are spending more than Inputs");
        const u = t.virtualSize();
        (r.__FEE = s),
          (r.__EXTRACTED_TX = t),
          (r.__FEE_RATE = Math.floor(s / u));
      }
      function W(e, t, r) {
        const n = e.__NON_WITNESS_UTXO_TX_CACHE;
        return n[r] || M(e, t, r), n[r];
      }
      function G(e, t, r) {
        const { script: n } = j(e, t, r);
        return n;
      }
      function j(e, t, r) {
        if (void 0 !== t.witnessUtxo)
          return { script: t.witnessUtxo.script, value: t.witnessUtxo.value };
        if (void 0 !== t.nonWitnessUtxo) {
          const n = W(r, t, e).outs[r.__TX.ins[e].index];
          return { script: n.script, value: n.value };
        }
        throw new Error("Can't find pubkey in input without Utxo data");
      }
      function X(e) {
        return 33 === e.length && l.isCanonicalPubKey(e);
      }
      function q(e, t, r, n, i) {
        const o = (0, y.isP2SHScript)(e),
          s = o && n && (0, y.isP2WSHScript)(n),
          u = (0, y.isP2WSHScript)(e);
        if (o && void 0 === n)
          throw new Error("scriptPubkey is P2SH but redeemScript missing");
        if ((u || s) && void 0 === i)
          throw new Error(
            "scriptPubkey or redeemScript is P2WSH but witnessScript missing"
          );
        let a;
        return (
          s
            ? ((a = i), A(t, e, n, r), N(t, n, i, r), $(a))
            : u
            ? ((a = i), N(t, e, i, r), $(a))
            : o
            ? ((a = n), A(t, e, n, r))
            : (a = e),
          {
            meaningfulScript: a,
            type: s ? "p2sh-p2wsh" : o ? "p2sh" : u ? "p2wsh" : "raw",
          }
        );
      }
      function $(e) {
        if ((0, y.isP2WPKH)(e) || (0, y.isP2SHScript)(e))
          throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
      }
      function z(e) {
        return (0, y.isP2WPKH)(e)
          ? "witnesspubkeyhash"
          : (0, y.isP2PKH)(e)
          ? "pubkeyhash"
          : (0, y.isP2MS)(e)
          ? "multisig"
          : (0, y.isP2PK)(e)
          ? "pubkey"
          : "nonstandard";
      }
      function Y(e) {
        return [...Array(e).keys()];
      }
    },
    62813: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.p2sh = void 0);
      const i = r(88743),
        o = r(7653),
        s = r(47165),
        u = r(24781),
        a = r(63322),
        c = r(63925),
        f = s.OPS;
      t.p2sh = function (e, t) {
        if (!e.address && !e.hash && !e.output && !e.redeem && !e.input)
          throw new TypeError("Not enough data");
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, u.typeforce)(
            {
              network: u.typeforce.maybe(u.typeforce.Object),
              address: u.typeforce.maybe(u.typeforce.String),
              hash: u.typeforce.maybe(u.typeforce.BufferN(20)),
              output: u.typeforce.maybe(u.typeforce.BufferN(23)),
              redeem: u.typeforce.maybe({
                network: u.typeforce.maybe(u.typeforce.Object),
                output: u.typeforce.maybe(u.typeforce.Buffer),
                input: u.typeforce.maybe(u.typeforce.Buffer),
                witness: u.typeforce.maybe(
                  u.typeforce.arrayOf(u.typeforce.Buffer)
                ),
              }),
              input: u.typeforce.maybe(u.typeforce.Buffer),
              witness: u.typeforce.maybe(
                u.typeforce.arrayOf(u.typeforce.Buffer)
              ),
            },
            e
          );
        let r = e.network;
        r || (r = (e.redeem && e.redeem.network) || o.bitcoin);
        const p = { network: r },
          l = a.value(() => {
            const t = n.from(c.decode(e.address));
            return { version: t.readUInt8(0), hash: t.slice(1) };
          }),
          h = a.value(() => s.decompile(e.input)),
          d = a.value(() => {
            const t = h(),
              i = t[t.length - 1];
            return {
              network: r,
              output: i === f.OP_FALSE ? n.from([]) : i,
              input: s.compile(t.slice(0, -1)),
              witness: e.witness || [],
            };
          });
        if (
          (a.prop(p, "address", () => {
            if (!p.hash) return;
            const e = n.allocUnsafe(21);
            return (
              e.writeUInt8(p.network.scriptHash, 0),
              p.hash.copy(e, 1),
              c.encode(e)
            );
          }),
          a.prop(p, "hash", () =>
            e.output
              ? e.output.slice(2, 22)
              : e.address
              ? l().hash
              : p.redeem && p.redeem.output
              ? i.hash160(p.redeem.output)
              : void 0
          ),
          a.prop(p, "output", () => {
            if (p.hash) return s.compile([f.OP_HASH160, p.hash, f.OP_EQUAL]);
          }),
          a.prop(p, "redeem", () => {
            if (e.input) return d();
          }),
          a.prop(p, "input", () => {
            if (e.redeem && e.redeem.input && e.redeem.output)
              return s.compile(
                [].concat(s.decompile(e.redeem.input), e.redeem.output)
              );
          }),
          a.prop(p, "witness", () =>
            p.redeem && p.redeem.witness
              ? p.redeem.witness
              : p.input
              ? []
              : void 0
          ),
          a.prop(p, "name", () => {
            const e = ["p2sh"];
            return (
              void 0 !== p.redeem &&
                void 0 !== p.redeem.name &&
                e.push(p.redeem.name),
              e.join("-")
            );
          }),
          t.validate)
        ) {
          let t = n.from([]);
          if (e.address) {
            if (l().version !== r.scriptHash)
              throw new TypeError("Invalid version or Network mismatch");
            if (20 !== l().hash.length) throw new TypeError("Invalid address");
            t = l().hash;
          }
          if (e.hash) {
            if (t.length > 0 && !t.equals(e.hash))
              throw new TypeError("Hash mismatch");
            t = e.hash;
          }
          if (e.output) {
            if (
              23 !== e.output.length ||
              e.output[0] !== f.OP_HASH160 ||
              20 !== e.output[1] ||
              e.output[22] !== f.OP_EQUAL
            )
              throw new TypeError("Output is invalid");
            const r = e.output.slice(2, 22);
            if (t.length > 0 && !t.equals(r))
              throw new TypeError("Hash mismatch");
            t = r;
          }
          const o = (e) => {
            if (e.output) {
              const r = s.decompile(e.output);
              if (!r || r.length < 1)
                throw new TypeError("Redeem.output too short");
              if (e.output.byteLength > 520)
                throw new TypeError(
                  "Redeem.output unspendable if larger than 520 bytes"
                );
              if (s.countNonPushOnlyOPs(r) > 201)
                throw new TypeError(
                  "Redeem.output unspendable with more than 201 non-push ops"
                );
              const n = i.hash160(e.output);
              if (t.length > 0 && !t.equals(n))
                throw new TypeError("Hash mismatch");
              t = n;
            }
            if (e.input) {
              const t = e.input.length > 0,
                r = e.witness && e.witness.length > 0;
              if (!t && !r) throw new TypeError("Empty input");
              if (t && r) throw new TypeError("Input and witness provided");
              if (t) {
                const t = s.decompile(e.input);
                if (!s.isPushOnly(t))
                  throw new TypeError("Non push-only scriptSig");
              }
            }
          };
          if (e.input) {
            const e = h();
            if (!e || e.length < 1) throw new TypeError("Input too short");
            if (!n.isBuffer(d().output))
              throw new TypeError("Input is invalid");
            o(d());
          }
          if (e.redeem) {
            if (e.redeem.network && e.redeem.network !== r)
              throw new TypeError("Network mismatch");
            if (e.input) {
              const t = d();
              if (e.redeem.output && !e.redeem.output.equals(t.output))
                throw new TypeError("Redeem.output mismatch");
              if (e.redeem.input && !e.redeem.input.equals(t.input))
                throw new TypeError("Redeem.input mismatch");
            }
            o(e.redeem);
          }
          if (
            e.witness &&
            e.redeem &&
            e.redeem.witness &&
            !(0, u.stacksEqual)(e.redeem.witness, e.witness)
          )
            throw new TypeError("Witness and redeem.witness mismatch");
        }
        return Object.assign(p, e);
      };
    },
    63322: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.value = t.prop = void 0),
        (t.prop = function (e, t, r) {
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get() {
              const e = r.call(this);
              return (this[t] = e), e;
            },
            set(e) {
              Object.defineProperty(this, t, {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0,
              });
            },
          });
        }),
        (t.value = function (e) {
          let t;
          return () => (void 0 !== t || (t = e()), t);
        });
    },
    63622: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bech32m = t.bech32 = void 0);
      const r = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
        n = {};
      for (let p = 0; p < 32; p++) {
        const e = r.charAt(p);
        n[e] = p;
      }
      function i(e) {
        const t = e >> 25;
        return (
          ((33554431 & e) << 5) ^
          (996825010 & -(1 & t)) ^
          (642813549 & -((t >> 1) & 1)) ^
          (513874426 & -((t >> 2) & 1)) ^
          (1027748829 & -((t >> 3) & 1)) ^
          (705979059 & -((t >> 4) & 1))
        );
      }
      function o(e) {
        let t = 1;
        for (let r = 0; r < e.length; ++r) {
          const n = e.charCodeAt(r);
          if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
          t = i(t) ^ (n >> 5);
        }
        t = i(t);
        for (let r = 0; r < e.length; ++r) {
          const n = e.charCodeAt(r);
          t = i(t) ^ (31 & n);
        }
        return t;
      }
      function s(e, t, r, n) {
        let i = 0,
          o = 0;
        const s = (1 << r) - 1,
          u = [];
        for (let a = 0; a < e.length; ++a)
          for (i = (i << t) | e[a], o += t; o >= r; )
            (o -= r), u.push((i >> o) & s);
        if (n) o > 0 && u.push((i << (r - o)) & s);
        else {
          if (o >= t) return "Excess padding";
          if ((i << (r - o)) & s) return "Non-zero padding";
        }
        return u;
      }
      function u(e) {
        return s(e, 8, 5, !0);
      }
      function a(e) {
        const t = s(e, 5, 8, !1);
        if (Array.isArray(t)) return t;
      }
      function c(e) {
        const t = s(e, 5, 8, !1);
        if (Array.isArray(t)) return t;
        throw new Error(t);
      }
      function f(e) {
        let t;
        function s(e, r) {
          if (((r = r || 90), e.length < 8)) return e + " too short";
          if (e.length > r) return "Exceeds length limit";
          const s = e.toLowerCase(),
            u = e.toUpperCase();
          if (e !== s && e !== u) return "Mixed-case string " + e;
          const a = (e = s).lastIndexOf("1");
          if (-1 === a) return "No separator character for " + e;
          if (0 === a) return "Missing prefix for " + e;
          const c = e.slice(0, a),
            f = e.slice(a + 1);
          if (f.length < 6) return "Data too short";
          let p = o(c);
          if ("string" === typeof p) return p;
          const l = [];
          for (let t = 0; t < f.length; ++t) {
            const e = f.charAt(t),
              r = n[e];
            if (void 0 === r) return "Unknown character " + e;
            (p = i(p) ^ r), t + 6 >= f.length || l.push(r);
          }
          return p !== t
            ? "Invalid checksum for " + e
            : { prefix: c, words: l };
        }
        return (
          (t = "bech32" === e ? 1 : 734539939),
          {
            decodeUnsafe: function (e, t) {
              const r = s(e, t);
              if ("object" === typeof r) return r;
            },
            decode: function (e, t) {
              const r = s(e, t);
              if ("object" === typeof r) return r;
              throw new Error(r);
            },
            encode: function (e, n, s) {
              if (((s = s || 90), e.length + 7 + n.length > s))
                throw new TypeError("Exceeds length limit");
              let u = o((e = e.toLowerCase()));
              if ("string" === typeof u) throw new Error(u);
              let a = e + "1";
              for (let t = 0; t < n.length; ++t) {
                const e = n[t];
                if (e >> 5 !== 0) throw new Error("Non 5-bit word");
                (u = i(u) ^ e), (a += r.charAt(e));
              }
              for (let t = 0; t < 6; ++t) u = i(u);
              u ^= t;
              for (let t = 0; t < 6; ++t) {
                a += r.charAt((u >> (5 * (5 - t))) & 31);
              }
              return a;
            },
            toWords: u,
            fromWordsUnsafe: a,
            fromWords: c,
          }
        );
      }
      (t.bech32 = f("bech32")), (t.bech32m = f("bech32m"));
    },
    63925: (e, t, r) => {
      "use strict";
      var { sha256: n } = r(25796),
        i = r(75920);
      e.exports = i(function (e) {
        return n(n(e));
      });
    },
    64804: (e, t, r) => {
      "use strict";
      function n(e) {
        var t,
          r,
          i = "";
        if ("string" == typeof e || "number" == typeof e) i += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = n(e[t])) && (i && (i += " "), (i += r));
          else for (t in e) e[t] && (i && (i += " "), (i += t));
        return i;
      }
      function i() {
        for (var e, t, r = 0, i = ""; r < arguments.length; )
          (e = arguments[r++]) && (t = n(e)) && (i && (i += " "), (i += t));
        return i;
      }
      r.d(t, {
        D: () => G,
        a: () => o,
        b: () => ge,
        c: () => i,
        g: () => I,
        h: () => se,
        p: () => j,
        y: () => ae,
      });
      const o = Object.freeze(
        Object.defineProperty(
          { __proto__: null, clsx: i, default: i },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
      var s,
        u,
        a,
        c,
        f,
        p,
        l,
        h,
        d,
        y,
        _,
        w,
        g,
        m = {},
        E = [],
        b = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        S = Array.isArray;
      function v(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      }
      function T(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function I(e, t, r) {
        var n,
          i,
          o,
          u = {};
        for (o in t)
          "key" == o ? (n = t[o]) : "ref" == o ? (i = t[o]) : (u[o] = t[o]);
        if (
          (arguments.length > 2 &&
            (u.children = arguments.length > 3 ? s.call(arguments, 2) : r),
          "function" == typeof e && null != e.defaultProps)
        )
          for (o in e.defaultProps)
            void 0 === u[o] && (u[o] = e.defaultProps[o]);
        return k(e, u, n, i, null);
      }
      function k(e, t, r, n, i) {
        var o = {
          type: e,
          props: t,
          key: r,
          ref: n,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null !== i && void 0 !== i ? i : ++a,
          __i: -1,
          __u: 0,
        };
        return null == i && null != u.vnode && u.vnode(o), o;
      }
      function P(e) {
        return e.children;
      }
      function O(e, t) {
        (this.props = e), (this.context = t);
      }
      function A(e, t) {
        if (null == t) return e.__ ? A(e.__, e.__i + 1) : null;
        for (var r; t < e.__k.length; t++)
          if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
        return "function" == typeof e.type ? A(e) : null;
      }
      function N(e) {
        var t, r;
        if (null != (e = e.__) && null != e.__c) {
          for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (r = e.__k[t]) && null != r.__e) {
              e.__e = e.__c.base = r.__e;
              break;
            }
          return N(e);
        }
      }
      function H(e) {
        ((!e.__d && (e.__d = !0) && f.push(e) && !B.__r++) ||
          p !== u.debounceRendering) &&
          ((p = u.debounceRendering) || l)(B);
      }
      function B() {
        var e, t, r, n, i, o, s, a;
        for (f.sort(h); (e = f.shift()); )
          e.__d &&
            ((t = f.length),
            (n = void 0),
            (o = (i = (r = e).__v).__e),
            (s = []),
            (a = []),
            r.__P &&
              (((n = v({}, i)).__v = i.__v + 1),
              u.vnode && u.vnode(n),
              K(
                r.__P,
                n,
                i,
                r.__n,
                r.__P.namespaceURI,
                32 & i.__u ? [o] : null,
                s,
                null !== o && void 0 !== o ? o : A(i),
                !!(32 & i.__u),
                a
              ),
              (n.__v = i.__v),
              (n.__.__k[n.__i] = n),
              V(s, n, a),
              n.__e != o && N(n)),
            f.length > t && f.sort(h));
        B.__r = 0;
      }
      function U(e, t, r, n, i, o, s, u, a, c, f) {
        var p,
          l,
          h,
          d,
          y,
          _,
          w = (n && n.__k) || E,
          g = t.length;
        for (
          a = (function (e, t, r, n, i) {
            var o,
              s,
              u,
              a,
              c,
              f = r.length,
              p = f,
              l = 0;
            for (e.__k = new Array(i), o = 0; o < i; o++)
              null != (s = t[o]) &&
              "boolean" != typeof s &&
              "function" != typeof s
                ? ((a = o + l),
                  ((s = e.__k[o] =
                    "string" == typeof s ||
                    "number" == typeof s ||
                    "bigint" == typeof s ||
                    s.constructor == String
                      ? k(null, s, null, null, null)
                      : S(s)
                      ? k(P, { children: s }, null, null, null)
                      : void 0 === s.constructor && s.__b > 0
                      ? k(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
                      : s).__ = e),
                  (s.__b = e.__b + 1),
                  (u = null),
                  -1 !== (c = s.__i = C(s, r, a, p)) &&
                    (p--, (u = r[c]) && (u.__u |= 2)),
                  null == u || null === u.__v
                    ? (-1 == c && l--,
                      "function" != typeof s.type && (s.__u |= 4))
                    : c != a &&
                      (c == a - 1
                        ? l--
                        : c == a + 1
                        ? l++
                        : (c > a ? l-- : l++, (s.__u |= 4))))
                : (e.__k[o] = null);
            if (p)
              for (o = 0; o < f; o++)
                null != (u = r[o]) &&
                  !(2 & u.__u) &&
                  (u.__e == n && (n = A(u)), F(u, u));
            return n;
          })(r, t, w, a, g),
            p = 0;
          p < g;
          p++
        )
          null != (h = r.__k[p]) &&
            ((l = -1 === h.__i ? m : w[h.__i] || m),
            (h.__i = p),
            (_ = K(e, h, l, i, o, s, u, a, c, f)),
            (d = h.__e),
            h.ref &&
              l.ref != h.ref &&
              (l.ref && M(l.ref, null, h), f.push(h.ref, h.__c || d, h)),
            null == y && null != d && (y = d),
            4 & h.__u || l.__k === h.__k
              ? (a = x(h, a, e))
              : "function" == typeof h.type && void 0 !== _
              ? (a = _)
              : d && (a = d.nextSibling),
            (h.__u &= -7));
        return (r.__e = y), a;
      }
      function x(e, t, r) {
        var n, i;
        if ("function" == typeof e.type) {
          for (n = e.__k, i = 0; n && i < n.length; i++)
            n[i] && ((n[i].__ = e), (t = x(n[i], t, r)));
          return t;
        }
        e.__e != t &&
          (t && e.type && !r.contains(t) && (t = A(e)),
          r.insertBefore(e.__e, t || null),
          (t = e.__e));
        do {
          t = t && t.nextSibling;
        } while (null != t && 8 == t.nodeType);
        return t;
      }
      function C(e, t, r, n) {
        var i,
          o,
          s = e.key,
          u = e.type,
          a = t[r];
        if (null === a || (a && s == a.key && u === a.type && !(2 & a.__u)))
          return r;
        if (n > (null == a || 2 & a.__u ? 0 : 1))
          for (i = r - 1, o = r + 1; i >= 0 || o < t.length; ) {
            if (i >= 0) {
              if ((a = t[i]) && !(2 & a.__u) && s == a.key && u === a.type)
                return i;
              i--;
            }
            if (o < t.length) {
              if ((a = t[o]) && !(2 & a.__u) && s == a.key && u === a.type)
                return o;
              o++;
            }
          }
        return -1;
      }
      function R(e, t, r) {
        "-" == t[0]
          ? e.setProperty(t, null !== r && void 0 !== r ? r : "")
          : (e[t] =
              null == r
                ? ""
                : "number" != typeof r || b.test(t)
                ? r
                : r + "px");
      }
      function L(e, t, r, n, i) {
        var o;
        e: if ("style" == t)
          if ("string" == typeof r) e.style.cssText = r;
          else {
            if (("string" == typeof n && (e.style.cssText = n = ""), n))
              for (t in n) (r && t in r) || R(e.style, t, "");
            if (r) for (t in r) (n && r[t] === n[t]) || R(e.style, t, r[t]);
          }
        else if ("o" == t[0] && "n" == t[1])
          (o = t != (t = t.replace(d, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + o] = r),
            r
              ? n
                ? (r.u = n.u)
                : ((r.u = y), e.addEventListener(t, o ? w : _, o))
              : e.removeEventListener(t, o ? w : _, o);
        else {
          if ("http://www.w3.org/2000/svg" == i)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null !== r && void 0 !== r ? r : "";
              break e;
            } catch {}
          "function" == typeof r ||
            (null == r || (!1 === r && "-" != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == r ? "" : r));
        }
      }
      function D(e) {
        return function (t) {
          if (this.l) {
            var r = this.l[t.type + e];
            if (null == t.t) t.t = y++;
            else if (t.t < r.u) return;
            return r(u.event ? u.event(t) : t);
          }
        };
      }
      function K(e, t, r, n, i, o, a, c, f, p) {
        var l,
          h,
          d,
          y,
          _,
          w,
          g,
          E,
          b,
          I,
          k,
          N,
          H,
          B,
          x,
          C,
          R,
          D = t.type;
        if (void 0 !== t.constructor) return null;
        128 & r.__u && ((f = !!(32 & r.__u)), (o = [(c = t.__e = r.__e)])),
          (l = u.__b) && l(t);
        e: if ("function" == typeof D)
          try {
            if (
              ((E = t.props),
              (b = "prototype" in D && D.prototype.render),
              (I = (l = D.contextType) && n[l.__c]),
              (k = l ? (I ? I.props.value : l.__) : n),
              r.__c
                ? (g = (h = t.__c = r.__c).__ = h.__E)
                : (b
                    ? (t.__c = h = new D(E, k))
                    : ((t.__c = h = new O(E, k)),
                      (h.constructor = D),
                      (h.render = W)),
                  I && I.sub(h),
                  (h.props = E),
                  h.state || (h.state = {}),
                  (h.context = k),
                  (h.__n = n),
                  (d = h.__d = !0),
                  (h.__h = []),
                  (h._sb = [])),
              b && null == h.__s && (h.__s = h.state),
              b &&
                null != D.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = v({}, h.__s)),
                v(h.__s, D.getDerivedStateFromProps(E, h.__s))),
              (y = h.props),
              (_ = h.state),
              (h.__v = t),
              d)
            )
              b &&
                null == D.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                b &&
                  null != h.componentDidMount &&
                  h.__h.push(h.componentDidMount);
            else {
              if (
                (b &&
                  null == D.getDerivedStateFromProps &&
                  E !== y &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(E, k),
                !h.__e &&
                  ((null != h.shouldComponentUpdate &&
                    !1 === h.shouldComponentUpdate(E, h.__s, k)) ||
                    t.__v == r.__v))
              ) {
                for (
                  t.__v != r.__v &&
                    ((h.props = E), (h.state = h.__s), (h.__d = !1)),
                    t.__e = r.__e,
                    t.__k = r.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    N = 0;
                  N < h._sb.length;
                  N++
                )
                  h.__h.push(h._sb[N]);
                (h._sb = []), h.__h.length && a.push(h);
                break e;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(E, h.__s, k),
                b &&
                  null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(y, _, w);
                  });
            }
            if (
              ((h.context = k),
              (h.props = E),
              (h.__P = e),
              (h.__e = !1),
              (H = u.__r),
              (B = 0),
              b)
            ) {
              for (
                h.state = h.__s,
                  h.__d = !1,
                  H && H(t),
                  l = h.render(h.props, h.state, h.context),
                  x = 0;
                x < h._sb.length;
                x++
              )
                h.__h.push(h._sb[x]);
              h._sb = [];
            } else
              do {
                (h.__d = !1),
                  H && H(t),
                  (l = h.render(h.props, h.state, h.context)),
                  (h.state = h.__s);
              } while (h.__d && ++B < 25);
            (h.state = h.__s),
              null != h.getChildContext &&
                (n = v(v({}, n), h.getChildContext())),
              b &&
                !d &&
                null != h.getSnapshotBeforeUpdate &&
                (w = h.getSnapshotBeforeUpdate(y, _)),
              (c = U(
                e,
                S(
                  (C =
                    null != l && l.type === P && null == l.key
                      ? l.props.children
                      : l)
                )
                  ? C
                  : [C],
                t,
                r,
                n,
                i,
                o,
                a,
                c,
                f,
                p
              )),
              (h.base = t.__e),
              (t.__u &= -161),
              h.__h.length && a.push(h),
              g && (h.__E = h.__ = null);
          } catch (K) {
            if (((t.__v = null), f || null != o))
              if (K.then) {
                for (
                  t.__u |= f ? 160 : 128;
                  c && 8 == c.nodeType && c.nextSibling;

                )
                  c = c.nextSibling;
                (o[o.indexOf(c)] = null), (t.__e = c);
              } else for (R = o.length; R--; ) T(o[R]);
            else (t.__e = r.__e), (t.__k = r.__k);
            u.__e(K, t, r);
          }
        else
          null == o && t.__v == r.__v
            ? ((t.__k = r.__k), (t.__e = r.__e))
            : (c = t.__e =
                (function (e, t, r, n, i, o, a, c, f) {
                  var p,
                    l,
                    h,
                    d,
                    y,
                    _,
                    w,
                    g = r.props,
                    E = t.props,
                    b = t.type;
                  if (
                    ("svg" == b
                      ? (i = "http://www.w3.org/2000/svg")
                      : "math" == b
                      ? (i = "http://www.w3.org/1998/Math/MathML")
                      : i || (i = "http://www.w3.org/1999/xhtml"),
                    null != o)
                  )
                    for (p = 0; p < o.length; p++)
                      if (
                        (y = o[p]) &&
                        "setAttribute" in y == !!b &&
                        (b ? y.localName == b : 3 == y.nodeType)
                      ) {
                        (e = y), (o[p] = null);
                        break;
                      }
                  if (null == e) {
                    if (null == b) return document.createTextNode(E);
                    (e = document.createElementNS(i, b, E.is && E)),
                      c && (u.__m && u.__m(t, o), (c = !1)),
                      (o = null);
                  }
                  if (null === b)
                    g === E || (c && e.data === E) || (e.data = E);
                  else {
                    if (
                      ((o = o && s.call(e.childNodes)),
                      (g = r.props || m),
                      !c && null != o)
                    )
                      for (g = {}, p = 0; p < e.attributes.length; p++)
                        g[(y = e.attributes[p]).name] = y.value;
                    for (p in g)
                      if (((y = g[p]), "children" != p))
                        if ("dangerouslySetInnerHTML" == p) h = y;
                        else if (!(p in E)) {
                          if (
                            ("value" == p && "defaultValue" in E) ||
                            ("checked" == p && "defaultChecked" in E)
                          )
                            continue;
                          L(e, p, null, y, i);
                        }
                    for (p in E)
                      (y = E[p]),
                        "children" == p
                          ? (d = y)
                          : "dangerouslySetInnerHTML" == p
                          ? (l = y)
                          : "value" == p
                          ? (_ = y)
                          : "checked" == p
                          ? (w = y)
                          : (c && "function" != typeof y) ||
                            g[p] === y ||
                            L(e, p, y, g[p], i);
                    if (l)
                      c ||
                        (h &&
                          (l.__html === h.__html ||
                            l.__html === e.innerHTML)) ||
                        (e.innerHTML = l.__html),
                        (t.__k = []);
                    else if (
                      (h && (e.innerHTML = ""),
                      U(
                        e,
                        S(d) ? d : [d],
                        t,
                        r,
                        n,
                        "foreignObject" == b
                          ? "http://www.w3.org/1999/xhtml"
                          : i,
                        o,
                        a,
                        o ? o[0] : r.__k && A(r, 0),
                        c,
                        f
                      ),
                      null != o)
                    )
                      for (p = o.length; p--; ) T(o[p]);
                    c ||
                      ((p = "value"),
                      "progress" == b && null == _
                        ? e.removeAttribute("value")
                        : void 0 !== _ &&
                          (_ !== e[p] ||
                            ("progress" == b && !_) ||
                            ("option" == b && _ !== g[p])) &&
                          L(e, p, _, g[p], i),
                      (p = "checked"),
                      void 0 !== w && w !== e[p] && L(e, p, w, g[p], i));
                  }
                  return e;
                })(r.__e, t, r, n, i, o, a, f, p));
        return (l = u.diffed) && l(t), 128 & t.__u ? void 0 : c;
      }
      function V(e, t, r) {
        for (var n = 0; n < r.length; n++) M(r[n], r[++n], r[++n]);
        u.__c && u.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (r) {
              u.__e(r, t.__v);
            }
          });
      }
      function M(e, t, r) {
        try {
          if ("function" == typeof e) {
            var n = "function" == typeof e.__u;
            n && e.__u(), (n && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (i) {
          u.__e(i, r);
        }
      }
      function F(e, t, r) {
        var n, i;
        if (
          (u.unmount && u.unmount(e),
          (n = e.ref) && ((n.current && n.current !== e.__e) || M(n, null, t)),
          null != (n = e.__c))
        ) {
          if (n.componentWillUnmount)
            try {
              n.componentWillUnmount();
            } catch (o) {
              u.__e(o, t);
            }
          n.base = n.__P = null;
        }
        if ((n = e.__k))
          for (i = 0; i < n.length; i++)
            n[i] && F(n[i], t, r || "function" != typeof e.type);
        r || T(e.__e), (e.__c = e.__ = e.__e = void 0);
      }
      function W(e, t, r) {
        return this.constructor(e, r);
      }
      function G(e, t, r) {
        var n, i, o, a;
        t == document && (t = document.documentElement),
          u.__ && u.__(e, t),
          (i = (n = "function" == typeof r) ? null : (r && r.__k) || t.__k),
          (o = []),
          (a = []),
          K(
            t,
            (e = ((!n && r) || t).__k = I(P, null, [e])),
            i || m,
            m,
            t.namespaceURI,
            !n && r
              ? [r]
              : i
              ? null
              : t.firstChild
              ? s.call(t.childNodes)
              : null,
            o,
            !n && r ? r : i ? i.__e : t.firstChild,
            n,
            a
          ),
          V(o, e, a);
      }
      (s = E.slice),
        (u = {
          __e: function (e, t, r, n) {
            for (var i, o, s; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((o = i.constructor) &&
                      null != o.getDerivedStateFromError &&
                      (i.setState(o.getDerivedStateFromError(e)), (s = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(e, n || {}), (s = i.__d)),
                    s)
                  )
                    return (i.__E = i);
                } catch (u) {
                  e = u;
                }
            throw e;
          },
        }),
        (a = 0),
        (c = function (e) {
          return null != e && null == e.constructor;
        }),
        (O.prototype.setState = function (e, t) {
          var r;
          (r =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = v({}, this.state))),
            "function" == typeof e && (e = e(v({}, r), this.props)),
            e && v(r, e),
            null != e && this.__v && (t && this._sb.push(t), H(this));
        }),
        (O.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), H(this));
        }),
        (O.prototype.render = P),
        (f = []),
        (l =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (h = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (B.__r = 0),
        (d = /(PointerCapture)$|Capture$/i),
        (y = 0),
        (_ = D(!1)),
        (w = D(!0)),
        (g = 0);
      const j = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            Component: O,
            Fragment: P,
            cloneElement: function (e, t, r) {
              var n,
                i,
                o,
                u,
                a = v({}, e.props);
              for (o in (e.type &&
                e.type.defaultProps &&
                (u = e.type.defaultProps),
              t))
                "key" == o
                  ? (n = t[o])
                  : "ref" == o
                  ? (i = t[o])
                  : (a[o] = void 0 === t[o] && void 0 !== u ? u[o] : t[o]);
              return (
                arguments.length > 2 &&
                  (a.children =
                    arguments.length > 3 ? s.call(arguments, 2) : r),
                k(e.type, a, n || e.key, i || e.ref, null)
              );
            },
            createContext: function (e, t) {
              var r = {
                __c: (t = "__cC" + g++),
                __: e,
                Consumer: function (e, t) {
                  return e.children(t);
                },
                Provider: function (e) {
                  var r, n;
                  return (
                    this.getChildContext ||
                      ((r = new Set()),
                      ((n = {})[t] = this),
                      (this.getChildContext = function () {
                        return n;
                      }),
                      (this.componentWillUnmount = function () {
                        r = null;
                      }),
                      (this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value &&
                          r.forEach(function (e) {
                            (e.__e = !0), H(e);
                          });
                      }),
                      (this.sub = function (e) {
                        r.add(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                          r && r.delete(e), t && t.call(e);
                        };
                      })),
                    e.children
                  );
                },
              };
              return (r.Provider.__ = r.Consumer.contextType = r);
            },
            createElement: I,
            createRef: function () {
              return { current: null };
            },
            h: I,
            hydrate: function e(t, r) {
              G(t, r, e);
            },
            get isValidElement() {
              return c;
            },
            get options() {
              return u;
            },
            render: G,
            toChildArray: function e(t, r) {
              return (
                (r = r || []),
                null == t ||
                  "boolean" == typeof t ||
                  (S(t)
                    ? t.some(function (t) {
                        e(t, r);
                      })
                    : r.push(t)),
                r
              );
            },
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
      var X,
        q,
        $,
        z,
        Y = 0,
        Q = [],
        J = u,
        Z = J.__b,
        ee = J.__r,
        te = J.diffed,
        re = J.__c,
        ne = J.unmount,
        ie = J.__;
      function oe(e, t) {
        J.__h && J.__h(q, e, Y || t), (Y = 0);
        var r = q.__H || (q.__H = { __: [], __h: [] });
        return e >= r.__.length && r.__.push({}), r.__[e];
      }
      function se(e) {
        return (Y = 1), ue(we, e);
      }
      function ue(e, t, r) {
        var n = oe(X++, 2);
        if (
          ((n.t = e),
          !n.__c &&
            ((n.__ = [
              r ? r(t) : we(void 0, t),
              function (e) {
                var t = n.__N ? n.__N[0] : n.__[0],
                  r = n.t(t, e);
                t !== r && ((n.__N = [r, n.__[1]]), n.__c.setState({}));
              },
            ]),
            (n.__c = q),
            !q.u))
        ) {
          var i = function (e, t, r) {
            if (!n.__c.__H) return !0;
            var i = n.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              i.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, r);
            var s = n.__c.props !== e;
            return (
              i.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                }
              }),
              (o && o.call(this, e, t, r)) || s
            );
          };
          q.u = !0;
          var o = q.shouldComponentUpdate,
            s = q.componentWillUpdate;
          (q.componentWillUpdate = function (e, t, r) {
            if (this.__e) {
              var n = o;
              (o = void 0), i(e, t, r), (o = n);
            }
            s && s.call(this, e, t, r);
          }),
            (q.shouldComponentUpdate = i);
        }
        return n.__N || n.__;
      }
      function ae(e, t) {
        var r = oe(X++, 3);
        !J.__s && _e(r.__H, t) && ((r.__ = e), (r.i = t), q.__H.__h.push(r));
      }
      function ce(e, t) {
        var r = oe(X++, 4);
        !J.__s && _e(r.__H, t) && ((r.__ = e), (r.i = t), q.__h.push(r));
      }
      function fe(e, t) {
        var r = oe(X++, 7);
        return _e(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__;
      }
      function pe() {
        for (var e; (e = Q.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(de), e.__H.__h.forEach(ye), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), J.__e(t, e.__v);
            }
      }
      (J.__b = function (e) {
        (q = null), Z && Z(e);
      }),
        (J.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ie && ie(e, t);
        }),
        (J.__r = function (e) {
          ee && ee(e), (X = 0);
          var t = (q = e.__c).__H;
          t &&
            ($ === q
              ? ((t.__h = []),
                (q.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                }))
              : (t.__h.forEach(de), t.__h.forEach(ye), (t.__h = []), (X = 0))),
            ($ = q);
        }),
        (J.diffed = function (e) {
          te && te(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== Q.push(t) && z === J.requestAnimationFrame) ||
                ((z = J.requestAnimationFrame) || he)(pe)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i), (e.i = void 0);
            })),
            ($ = q = null);
        }),
        (J.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(de),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || ye(e);
                }));
            } catch (r) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                J.__e(r, e.__v);
            }
          }),
            re && re(e, t);
        }),
        (J.unmount = function (e) {
          ne && ne(e);
          var t,
            r = e.__c;
          r &&
            r.__H &&
            (r.__H.__.forEach(function (e) {
              try {
                de(e);
              } catch (r) {
                t = r;
              }
            }),
            (r.__H = void 0),
            t && J.__e(t, r.__v));
        });
      var le = "function" == typeof requestAnimationFrame;
      function he(e) {
        var t,
          r = function () {
            clearTimeout(n), le && cancelAnimationFrame(t), setTimeout(e);
          },
          n = setTimeout(r, 100);
        le && (t = requestAnimationFrame(r));
      }
      function de(e) {
        var t = q,
          r = e.__c;
        "function" == typeof r && ((e.__c = void 0), r()), (q = t);
      }
      function ye(e) {
        var t = q;
        (e.__c = e.__()), (q = t);
      }
      function _e(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, r) {
            return t !== e[r];
          })
        );
      }
      function we(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      const ge = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            useCallback: function (e, t) {
              return (
                (Y = 8),
                fe(function () {
                  return e;
                }, t)
              );
            },
            useContext: function (e) {
              var t = q.context[e.__c],
                r = oe(X++, 9);
              return (
                (r.c = e),
                t
                  ? (null == r.__ && ((r.__ = !0), t.sub(q)), t.props.value)
                  : e.__
              );
            },
            useDebugValue: function (e, t) {
              J.useDebugValue && J.useDebugValue(t ? t(e) : e);
            },
            useEffect: ae,
            useErrorBoundary: function (e) {
              var t = oe(X++, 10),
                r = se();
              return (
                (t.__ = e),
                q.componentDidCatch ||
                  (q.componentDidCatch = function (e, n) {
                    t.__ && t.__(e, n), r[1](e);
                  }),
                [
                  r[0],
                  function () {
                    r[1](void 0);
                  },
                ]
              );
            },
            useId: function () {
              var e = oe(X++, 11);
              if (!e.__) {
                for (var t = q.__v; null !== t && !t.__m && null !== t.__; )
                  t = t.__;
                var r = t.__m || (t.__m = [0, 0]);
                e.__ = "P" + r[0] + "-" + r[1]++;
              }
              return e.__;
            },
            useImperativeHandle: function (e, t, r) {
              (Y = 6),
                ce(
                  function () {
                    return "function" == typeof e
                      ? (e(t()),
                        function () {
                          return e(null);
                        })
                      : e
                      ? ((e.current = t()),
                        function () {
                          return (e.current = null);
                        })
                      : void 0;
                  },
                  null == r ? r : r.concat(e)
                );
            },
            useLayoutEffect: ce,
            useMemo: fe,
            useReducer: ue,
            useRef: function (e) {
              return (
                (Y = 5),
                fe(function () {
                  return { current: e };
                }, [])
              );
            },
            useState: se,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
    },
    65475: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      function o(e) {
        return n.isBuffer(e) && (64 === e.length || 65 === e.length);
      }
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.TAP_KEY_SIG || 1 !== e.key.length)
          throw new Error(
            "Decode Error: could not decode tapKeySig with key 0x" +
              e.key.toString("hex")
          );
        if (!o(e.value))
          throw new Error(
            "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature"
          );
        return e.value;
      }),
        (t.encode = function (e) {
          return { key: n.from([i.InputTypes.TAP_KEY_SIG]), value: e };
        }),
        (t.expected = "Buffer"),
        (t.check = o),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.tapKeySig;
        });
    },
    67148: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.FINAL_SCRIPTSIG)
          throw new Error(
            "Decode Error: could not decode finalScriptSig with key 0x" +
              e.key.toString("hex")
          );
        return e.value;
      }),
        (t.encode = function (e) {
          return { key: n.from([i.InputTypes.FINAL_SCRIPTSIG]), value: e };
        }),
        (t.expected = "Buffer"),
        (t.check = function (e) {
          return n.isBuffer(e);
        }),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.finalScriptSig;
        });
    },
    68678: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.p2wpkh = void 0);
      const i = r(88743),
        o = r(7653),
        s = r(47165),
        u = r(24781),
        a = r(63322),
        c = r(63622),
        f = s.OPS,
        p = n.alloc(0);
      t.p2wpkh = function (e, t) {
        if (!e.address && !e.hash && !e.output && !e.pubkey && !e.witness)
          throw new TypeError("Not enough data");
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, u.typeforce)(
            {
              address: u.typeforce.maybe(u.typeforce.String),
              hash: u.typeforce.maybe(u.typeforce.BufferN(20)),
              input: u.typeforce.maybe(u.typeforce.BufferN(0)),
              network: u.typeforce.maybe(u.typeforce.Object),
              output: u.typeforce.maybe(u.typeforce.BufferN(22)),
              pubkey: u.typeforce.maybe(u.isPoint),
              signature: u.typeforce.maybe(s.isCanonicalScriptSignature),
              witness: u.typeforce.maybe(
                u.typeforce.arrayOf(u.typeforce.Buffer)
              ),
            },
            e
          );
        const r = a.value(() => {
            const t = c.bech32.decode(e.address),
              r = t.words.shift(),
              i = c.bech32.fromWords(t.words);
            return { version: r, prefix: t.prefix, data: n.from(i) };
          }),
          l = e.network || o.bitcoin,
          h = { name: "p2wpkh", network: l };
        if (
          (a.prop(h, "address", () => {
            if (!h.hash) return;
            const e = c.bech32.toWords(h.hash);
            return e.unshift(0), c.bech32.encode(l.bech32, e);
          }),
          a.prop(h, "hash", () =>
            e.output
              ? e.output.slice(2, 22)
              : e.address
              ? r().data
              : e.pubkey || h.pubkey
              ? i.hash160(e.pubkey || h.pubkey)
              : void 0
          ),
          a.prop(h, "output", () => {
            if (h.hash) return s.compile([f.OP_0, h.hash]);
          }),
          a.prop(h, "pubkey", () =>
            e.pubkey ? e.pubkey : e.witness ? e.witness[1] : void 0
          ),
          a.prop(h, "signature", () => {
            if (e.witness) return e.witness[0];
          }),
          a.prop(h, "input", () => {
            if (h.witness) return p;
          }),
          a.prop(h, "witness", () => {
            if (e.pubkey && e.signature) return [e.signature, e.pubkey];
          }),
          t.validate)
        ) {
          let t = n.from([]);
          if (e.address) {
            if (l && l.bech32 !== r().prefix)
              throw new TypeError("Invalid prefix or Network mismatch");
            if (0 !== r().version)
              throw new TypeError("Invalid address version");
            if (20 !== r().data.length)
              throw new TypeError("Invalid address data");
            t = r().data;
          }
          if (e.hash) {
            if (t.length > 0 && !t.equals(e.hash))
              throw new TypeError("Hash mismatch");
            t = e.hash;
          }
          if (e.output) {
            if (
              22 !== e.output.length ||
              e.output[0] !== f.OP_0 ||
              20 !== e.output[1]
            )
              throw new TypeError("Output is invalid");
            if (t.length > 0 && !t.equals(e.output.slice(2)))
              throw new TypeError("Hash mismatch");
            t = e.output.slice(2);
          }
          if (e.pubkey) {
            const r = i.hash160(e.pubkey);
            if (t.length > 0 && !t.equals(r))
              throw new TypeError("Hash mismatch");
            if (((t = r), !(0, u.isPoint)(e.pubkey) || 33 !== e.pubkey.length))
              throw new TypeError("Invalid pubkey for p2wpkh");
          }
          if (e.witness) {
            if (2 !== e.witness.length)
              throw new TypeError("Witness is invalid");
            if (!s.isCanonicalScriptSignature(e.witness[0]))
              throw new TypeError("Witness has invalid signature");
            if (!(0, u.isPoint)(e.witness[1]) || 33 !== e.witness[1].length)
              throw new TypeError("Witness has invalid pubkey");
            if (e.signature && !e.signature.equals(e.witness[0]))
              throw new TypeError("Signature mismatch");
            if (e.pubkey && !e.pubkey.equals(e.witness[1]))
              throw new TypeError("Pubkey mismatch");
            const r = i.hash160(e.witness[1]);
            if (t.length > 0 && !t.equals(r))
              throw new TypeError("Hash mismatch");
          }
        }
        return Object.assign(h, e);
      };
    },
    69845: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Block = void 0);
      const i = r(35699),
        o = r(88743),
        s = r(8228),
        u = r(71296),
        a = r(24781),
        { typeforce: c } = a,
        f = new TypeError("Cannot compute merkle root for zero transactions"),
        p = new TypeError("Cannot compute witness commit for non-segwit block");
      class l {
        constructor() {
          (this.version = 1),
            (this.prevHash = void 0),
            (this.merkleRoot = void 0),
            (this.timestamp = 0),
            (this.witnessCommit = void 0),
            (this.bits = 0),
            (this.nonce = 0),
            (this.transactions = void 0);
        }
        static fromBuffer(e) {
          if (e.length < 80) throw new Error("Buffer too small (< 80 bytes)");
          const t = new i.BufferReader(e),
            r = new l();
          if (
            ((r.version = t.readInt32()),
            (r.prevHash = t.readSlice(32)),
            (r.merkleRoot = t.readSlice(32)),
            (r.timestamp = t.readUInt32()),
            (r.bits = t.readUInt32()),
            (r.nonce = t.readUInt32()),
            80 === e.length)
          )
            return r;
          const n = () => {
              const e = u.Transaction.fromBuffer(t.buffer.slice(t.offset), !0);
              return (t.offset += e.byteLength()), e;
            },
            o = t.readVarInt();
          r.transactions = [];
          for (let i = 0; i < o; ++i) {
            const e = n();
            r.transactions.push(e);
          }
          const s = r.getWitnessCommit();
          return s && (r.witnessCommit = s), r;
        }
        static fromHex(e) {
          return l.fromBuffer(n.from(e, "hex"));
        }
        static calculateTarget(e) {
          const t = ((4278190080 & e) >> 24) - 3,
            r = 8388607 & e,
            i = n.alloc(32, 0);
          return i.writeUIntBE(r, 29 - t, 3), i;
        }
        static calculateMerkleRoot(e, t) {
          if ((c([{ getHash: a.Function }], e), 0 === e.length)) throw f;
          if (t && !h(e)) throw p;
          const r = e.map((e) => e.getHash(t)),
            i = (0, s.fastMerkleRoot)(r, o.hash256);
          return t ? o.hash256(n.concat([i, e[0].ins[0].witness[0]])) : i;
        }
        getWitnessCommit() {
          if (!h(this.transactions)) return null;
          const e = this.transactions[0].outs
            .filter((e) =>
              e.script.slice(0, 6).equals(n.from("6a24aa21a9ed", "hex"))
            )
            .map((e) => e.script.slice(6, 38));
          if (0 === e.length) return null;
          const t = e[e.length - 1];
          return t instanceof n && 32 === t.length ? t : null;
        }
        hasWitnessCommit() {
          return (
            (this.witnessCommit instanceof n &&
              32 === this.witnessCommit.length) ||
            null !== this.getWitnessCommit()
          );
        }
        hasWitness() {
          return (
            (e = this.transactions) instanceof Array &&
            e.some(
              (e) =>
                "object" === typeof e &&
                e.ins instanceof Array &&
                e.ins.some(
                  (e) =>
                    "object" === typeof e &&
                    e.witness instanceof Array &&
                    e.witness.length > 0
                )
            )
          );
          var e;
        }
        weight() {
          return 3 * this.byteLength(!1, !1) + this.byteLength(!1, !0);
        }
        byteLength(e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return e || !this.transactions
            ? 80
            : 80 +
                i.varuint.encodingLength(this.transactions.length) +
                this.transactions.reduce((e, r) => e + r.byteLength(t), 0);
        }
        getHash() {
          return o.hash256(this.toBuffer(!0));
        }
        getId() {
          return (0, i.reverseBuffer)(this.getHash()).toString("hex");
        }
        getUTCDate() {
          const e = new Date(0);
          return e.setUTCSeconds(this.timestamp), e;
        }
        toBuffer(e) {
          const t = n.allocUnsafe(this.byteLength(e)),
            r = new i.BufferWriter(t);
          return (
            r.writeInt32(this.version),
            r.writeSlice(this.prevHash),
            r.writeSlice(this.merkleRoot),
            r.writeUInt32(this.timestamp),
            r.writeUInt32(this.bits),
            r.writeUInt32(this.nonce),
            e ||
              !this.transactions ||
              (i.varuint.encode(this.transactions.length, t, r.offset),
              (r.offset += i.varuint.encode.bytes),
              this.transactions.forEach((e) => {
                const n = e.byteLength();
                e.toBuffer(t, r.offset), (r.offset += n);
              })),
            t
          );
        }
        toHex(e) {
          return this.toBuffer(e).toString("hex");
        }
        checkTxRoots() {
          const e = this.hasWitnessCommit();
          return (
            !(!e && this.hasWitness()) &&
            this.__checkMerkleRoot() &&
            (!e || this.__checkWitnessCommit())
          );
        }
        checkProofOfWork() {
          const e = (0, i.reverseBuffer)(this.getHash()),
            t = l.calculateTarget(this.bits);
          return e.compare(t) <= 0;
        }
        __checkMerkleRoot() {
          if (!this.transactions) throw f;
          const e = l.calculateMerkleRoot(this.transactions);
          return 0 === this.merkleRoot.compare(e);
        }
        __checkWitnessCommit() {
          if (!this.transactions) throw f;
          if (!this.hasWitnessCommit()) throw p;
          const e = l.calculateMerkleRoot(this.transactions, !0);
          return 0 === this.witnessCommit.compare(e);
        }
      }
      function h(e) {
        return (
          e instanceof Array &&
          e[0] &&
          e[0].ins &&
          e[0].ins instanceof Array &&
          e[0].ins[0] &&
          e[0].ins[0].witness &&
          e[0].ins[0].witness instanceof Array &&
          e[0].ins[0].witness.length > 0
        );
      }
      t.Block = l;
    },
    71041: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = t.encode = t.encodingLength = void 0);
      const n = r(5208);
      function i(e) {
        return e < n.OPS.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
      }
      (t.encodingLength = i),
        (t.encode = function (e, t, r) {
          const o = i(t);
          return (
            1 === o
              ? e.writeUInt8(t, r)
              : 2 === o
              ? (e.writeUInt8(n.OPS.OP_PUSHDATA1, r), e.writeUInt8(t, r + 1))
              : 3 === o
              ? (e.writeUInt8(n.OPS.OP_PUSHDATA2, r), e.writeUInt16LE(t, r + 1))
              : (e.writeUInt8(n.OPS.OP_PUSHDATA4, r),
                e.writeUInt32LE(t, r + 1)),
            o
          );
        }),
        (t.decode = function (e, t) {
          const r = e.readUInt8(t);
          let i, o;
          if (r < n.OPS.OP_PUSHDATA1) (i = r), (o = 1);
          else if (r === n.OPS.OP_PUSHDATA1) {
            if (t + 2 > e.length) return null;
            (i = e.readUInt8(t + 1)), (o = 2);
          } else if (r === n.OPS.OP_PUSHDATA2) {
            if (t + 3 > e.length) return null;
            (i = e.readUInt16LE(t + 1)), (o = 3);
          } else {
            if (t + 5 > e.length) return null;
            if (r !== n.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
            (i = e.readUInt32LE(t + 1)), (o = 5);
          }
          return { opcode: r, number: i, size: o };
        });
    },
    71296: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Transaction = void 0);
      const i = r(35699),
        o = r(88743),
        s = r(47165),
        u = r(47165),
        a = r(24781),
        { typeforce: c } = a;
      function f(e) {
        const t = e.length;
        return i.varuint.encodingLength(t) + t;
      }
      const p = n.allocUnsafe(0),
        l = [],
        h = n.from(
          "0000000000000000000000000000000000000000000000000000000000000000",
          "hex"
        ),
        d = n.from(
          "0000000000000000000000000000000000000000000000000000000000000001",
          "hex"
        ),
        y = n.from("ffffffffffffffff", "hex"),
        _ = { script: p, valueBuffer: y };
      class w {
        constructor() {
          (this.version = 1),
            (this.locktime = 0),
            (this.ins = []),
            (this.outs = []);
        }
        static fromBuffer(e, t) {
          const r = new i.BufferReader(e),
            n = new w();
          n.version = r.readInt32();
          const o = r.readUInt8(),
            s = r.readUInt8();
          let u = !1;
          o === w.ADVANCED_TRANSACTION_MARKER &&
          s === w.ADVANCED_TRANSACTION_FLAG
            ? (u = !0)
            : (r.offset -= 2);
          const a = r.readVarInt();
          for (let i = 0; i < a; ++i)
            n.ins.push({
              hash: r.readSlice(32),
              index: r.readUInt32(),
              script: r.readVarSlice(),
              sequence: r.readUInt32(),
              witness: l,
            });
          const c = r.readVarInt();
          for (let i = 0; i < c; ++i)
            n.outs.push({ value: r.readUInt64(), script: r.readVarSlice() });
          if (u) {
            for (let e = 0; e < a; ++e) n.ins[e].witness = r.readVector();
            if (!n.hasWitnesses())
              throw new Error("Transaction has superfluous witness data");
          }
          if (((n.locktime = r.readUInt32()), t)) return n;
          if (r.offset !== e.length)
            throw new Error("Transaction has unexpected data");
          return n;
        }
        static fromHex(e) {
          return w.fromBuffer(n.from(e, "hex"), !1);
        }
        static isCoinbaseHash(e) {
          c(a.Hash256bit, e);
          for (let t = 0; t < 32; ++t) if (0 !== e[t]) return !1;
          return !0;
        }
        isCoinbase() {
          return 1 === this.ins.length && w.isCoinbaseHash(this.ins[0].hash);
        }
        addInput(e, t, r, n) {
          return (
            c(
              a.tuple(
                a.Hash256bit,
                a.UInt32,
                a.maybe(a.UInt32),
                a.maybe(a.Buffer)
              ),
              arguments
            ),
            a.Null(r) && (r = w.DEFAULT_SEQUENCE),
            this.ins.push({
              hash: e,
              index: t,
              script: n || p,
              sequence: r,
              witness: l,
            }) - 1
          );
        }
        addOutput(e, t) {
          return (
            c(a.tuple(a.Buffer, a.Satoshi), arguments),
            this.outs.push({ script: e, value: t }) - 1
          );
        }
        hasWitnesses() {
          return this.ins.some((e) => 0 !== e.witness.length);
        }
        stripWitnesses() {
          this.ins.forEach((e) => {
            e.witness = l;
          });
        }
        weight() {
          return 3 * this.byteLength(!1) + this.byteLength(!0);
        }
        virtualSize() {
          return Math.ceil(this.weight() / 4);
        }
        byteLength() {
          const e =
            (!(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0]) &&
            this.hasWitnesses();
          return (
            (e ? 10 : 8) +
            i.varuint.encodingLength(this.ins.length) +
            i.varuint.encodingLength(this.outs.length) +
            this.ins.reduce((e, t) => e + 40 + f(t.script), 0) +
            this.outs.reduce((e, t) => e + 8 + f(t.script), 0) +
            (e
              ? this.ins.reduce(
                  (e, t) =>
                    e +
                    (function (e) {
                      const t = e.length;
                      return (
                        i.varuint.encodingLength(t) +
                        e.reduce((e, t) => e + f(t), 0)
                      );
                    })(t.witness),
                  0
                )
              : 0)
          );
        }
        clone() {
          const e = new w();
          return (
            (e.version = this.version),
            (e.locktime = this.locktime),
            (e.ins = this.ins.map((e) => ({
              hash: e.hash,
              index: e.index,
              script: e.script,
              sequence: e.sequence,
              witness: e.witness,
            }))),
            (e.outs = this.outs.map((e) => ({
              script: e.script,
              value: e.value,
            }))),
            e
          );
        }
        hashForSignature(e, t, r) {
          if (
            (c(a.tuple(a.UInt32, a.Buffer, a.Number), arguments),
            e >= this.ins.length)
          )
            return d;
          const i = s.compile(
              s.decompile(t).filter((e) => e !== u.OPS.OP_CODESEPARATOR)
            ),
            f = this.clone();
          if ((31 & r) === w.SIGHASH_NONE)
            (f.outs = []),
              f.ins.forEach((t, r) => {
                r !== e && (t.sequence = 0);
              });
          else if ((31 & r) === w.SIGHASH_SINGLE) {
            if (e >= this.outs.length) return d;
            f.outs.length = e + 1;
            for (let t = 0; t < e; t++) f.outs[t] = _;
            f.ins.forEach((t, r) => {
              r !== e && (t.sequence = 0);
            });
          }
          r & w.SIGHASH_ANYONECANPAY
            ? ((f.ins = [f.ins[e]]), (f.ins[0].script = i))
            : (f.ins.forEach((e) => {
                e.script = p;
              }),
              (f.ins[e].script = i));
          const l = n.allocUnsafe(f.byteLength(!1) + 4);
          return (
            l.writeInt32LE(r, l.length - 4),
            f.__toBuffer(l, 0, !1),
            o.hash256(l)
          );
        }
        hashForWitnessV1(e, t, r, s, u, l) {
          if (
            (c(
              a.tuple(
                a.UInt32,
                c.arrayOf(a.Buffer),
                c.arrayOf(a.Satoshi),
                a.UInt32
              ),
              arguments
            ),
            r.length !== this.ins.length || t.length !== this.ins.length)
          )
            throw new Error(
              "Must supply prevout script and value for all inputs"
            );
          const h =
              s === w.SIGHASH_DEFAULT
                ? w.SIGHASH_ALL
                : s & w.SIGHASH_OUTPUT_MASK,
            d = (s & w.SIGHASH_INPUT_MASK) === w.SIGHASH_ANYONECANPAY,
            y = h === w.SIGHASH_NONE,
            _ = h === w.SIGHASH_SINGLE;
          let g = p,
            m = p,
            E = p,
            b = p,
            S = p;
          if (!d) {
            let e = i.BufferWriter.withCapacity(36 * this.ins.length);
            this.ins.forEach((t) => {
              e.writeSlice(t.hash), e.writeUInt32(t.index);
            }),
              (g = o.sha256(e.end())),
              (e = i.BufferWriter.withCapacity(8 * this.ins.length)),
              r.forEach((t) => e.writeUInt64(t)),
              (m = o.sha256(e.end())),
              (e = i.BufferWriter.withCapacity(
                t.map(f).reduce((e, t) => e + t)
              )),
              t.forEach((t) => e.writeVarSlice(t)),
              (E = o.sha256(e.end())),
              (e = i.BufferWriter.withCapacity(4 * this.ins.length)),
              this.ins.forEach((t) => e.writeUInt32(t.sequence)),
              (b = o.sha256(e.end()));
          }
          if (y || _) {
            if (_ && e < this.outs.length) {
              const t = this.outs[e],
                r = i.BufferWriter.withCapacity(8 + f(t.script));
              r.writeUInt64(t.value),
                r.writeVarSlice(t.script),
                (S = o.sha256(r.end()));
            }
          } else {
            const e = this.outs
                .map((e) => 8 + f(e.script))
                .reduce((e, t) => e + t),
              t = i.BufferWriter.withCapacity(e);
            this.outs.forEach((e) => {
              t.writeUInt64(e.value), t.writeVarSlice(e.script);
            }),
              (S = o.sha256(t.end()));
          }
          const v = (u ? 2 : 0) + (l ? 1 : 0),
            T = 174 - (d ? 49 : 0) - (y ? 32 : 0) + (l ? 32 : 0) + (u ? 37 : 0),
            I = i.BufferWriter.withCapacity(T);
          if (
            (I.writeUInt8(s),
            I.writeInt32(this.version),
            I.writeUInt32(this.locktime),
            I.writeSlice(g),
            I.writeSlice(m),
            I.writeSlice(E),
            I.writeSlice(b),
            y || _ || I.writeSlice(S),
            I.writeUInt8(v),
            d)
          ) {
            const n = this.ins[e];
            I.writeSlice(n.hash),
              I.writeUInt32(n.index),
              I.writeUInt64(r[e]),
              I.writeVarSlice(t[e]),
              I.writeUInt32(n.sequence);
          } else I.writeUInt32(e);
          if (l) {
            const e = i.BufferWriter.withCapacity(f(l));
            e.writeVarSlice(l), I.writeSlice(o.sha256(e.end()));
          }
          return (
            _ && I.writeSlice(S),
            u && (I.writeSlice(u), I.writeUInt8(0), I.writeUInt32(4294967295)),
            o.taggedHash("TapSighash", n.concat([n.from([0]), I.end()]))
          );
        }
        hashForWitnessV0(e, t, r, s) {
          c(a.tuple(a.UInt32, a.Buffer, a.Satoshi, a.UInt32), arguments);
          let u,
            p = n.from([]),
            l = h,
            d = h,
            y = h;
          if (
            (s & w.SIGHASH_ANYONECANPAY ||
              ((p = n.allocUnsafe(36 * this.ins.length)),
              (u = new i.BufferWriter(p, 0)),
              this.ins.forEach((e) => {
                u.writeSlice(e.hash), u.writeUInt32(e.index);
              }),
              (d = o.hash256(p))),
            s & w.SIGHASH_ANYONECANPAY ||
              (31 & s) === w.SIGHASH_SINGLE ||
              (31 & s) === w.SIGHASH_NONE ||
              ((p = n.allocUnsafe(4 * this.ins.length)),
              (u = new i.BufferWriter(p, 0)),
              this.ins.forEach((e) => {
                u.writeUInt32(e.sequence);
              }),
              (y = o.hash256(p))),
            (31 & s) !== w.SIGHASH_SINGLE && (31 & s) !== w.SIGHASH_NONE)
          ) {
            const e = this.outs.reduce((e, t) => e + 8 + f(t.script), 0);
            (p = n.allocUnsafe(e)),
              (u = new i.BufferWriter(p, 0)),
              this.outs.forEach((e) => {
                u.writeUInt64(e.value), u.writeVarSlice(e.script);
              }),
              (l = o.hash256(p));
          } else if ((31 & s) === w.SIGHASH_SINGLE && e < this.outs.length) {
            const t = this.outs[e];
            (p = n.allocUnsafe(8 + f(t.script))),
              (u = new i.BufferWriter(p, 0)),
              u.writeUInt64(t.value),
              u.writeVarSlice(t.script),
              (l = o.hash256(p));
          }
          (p = n.allocUnsafe(156 + f(t))), (u = new i.BufferWriter(p, 0));
          const _ = this.ins[e];
          return (
            u.writeInt32(this.version),
            u.writeSlice(d),
            u.writeSlice(y),
            u.writeSlice(_.hash),
            u.writeUInt32(_.index),
            u.writeVarSlice(t),
            u.writeUInt64(r),
            u.writeUInt32(_.sequence),
            u.writeSlice(l),
            u.writeUInt32(this.locktime),
            u.writeUInt32(s),
            o.hash256(p)
          );
        }
        getHash(e) {
          return e && this.isCoinbase()
            ? n.alloc(32, 0)
            : o.hash256(this.__toBuffer(void 0, void 0, e));
        }
        getId() {
          return (0, i.reverseBuffer)(this.getHash(!1)).toString("hex");
        }
        toBuffer(e, t) {
          return this.__toBuffer(e, t, !0);
        }
        toHex() {
          return this.toBuffer(void 0, void 0).toString("hex");
        }
        setInputScript(e, t) {
          c(a.tuple(a.Number, a.Buffer), arguments), (this.ins[e].script = t);
        }
        setWitness(e, t) {
          c(a.tuple(a.Number, [a.Buffer]), arguments),
            (this.ins[e].witness = t);
        }
        __toBuffer(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          e || (e = n.allocUnsafe(this.byteLength(r)));
          const o = new i.BufferWriter(e, t || 0);
          o.writeInt32(this.version);
          const s = r && this.hasWitnesses();
          return (
            s &&
              (o.writeUInt8(w.ADVANCED_TRANSACTION_MARKER),
              o.writeUInt8(w.ADVANCED_TRANSACTION_FLAG)),
            o.writeVarInt(this.ins.length),
            this.ins.forEach((e) => {
              o.writeSlice(e.hash),
                o.writeUInt32(e.index),
                o.writeVarSlice(e.script),
                o.writeUInt32(e.sequence);
            }),
            o.writeVarInt(this.outs.length),
            this.outs.forEach((e) => {
              void 0 !== e.value
                ? o.writeUInt64(e.value)
                : o.writeSlice(e.valueBuffer),
                o.writeVarSlice(e.script);
            }),
            s &&
              this.ins.forEach((e) => {
                o.writeVector(e.witness);
              }),
            o.writeUInt32(this.locktime),
            void 0 !== t ? e.slice(t, o.offset) : e
          );
        }
      }
      (t.Transaction = w),
        (w.DEFAULT_SEQUENCE = 4294967295),
        (w.SIGHASH_DEFAULT = 0),
        (w.SIGHASH_ALL = 1),
        (w.SIGHASH_NONE = 2),
        (w.SIGHASH_SINGLE = 3),
        (w.SIGHASH_ANYONECANPAY = 128),
        (w.SIGHASH_OUTPUT_MASK = 3),
        (w.SIGHASH_INPUT_MASK = 128),
        (w.ADVANCED_TRANSACTION_MARKER = 0),
        (w.ADVANCED_TRANSACTION_FLAG = 1);
    },
    72552: (e) => {
      "use strict";
      e.exports = function (e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var n = 0; n < e.length; n++) {
          var i = e.charAt(n),
            o = i.charCodeAt(0);
          if (255 !== t[o]) throw new TypeError(i + " is ambiguous");
          t[o] = n;
        }
        var s = e.length,
          u = e.charAt(0),
          a = Math.log(s) / Math.log(256),
          c = Math.log(256) / Math.log(s);
        function f(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          for (var r = 0, n = 0, i = 0; e[r] === u; ) n++, r++;
          for (
            var o = ((e.length - r) * a + 1) >>> 0, c = new Uint8Array(o);
            e[r];

          ) {
            var f = e.charCodeAt(r);
            if (f > 255) return;
            var p = t[f];
            if (255 === p) return;
            for (var l = 0, h = o - 1; (0 !== p || l < i) && -1 !== h; h--, l++)
              (p += (s * c[h]) >>> 0),
                (c[h] = p % 256 >>> 0),
                (p = (p / 256) >>> 0);
            if (0 !== p) throw new Error("Non-zero carry");
            (i = l), r++;
          }
          for (var d = o - i; d !== o && 0 === c[d]; ) d++;
          for (var y = new Uint8Array(n + (o - d)), _ = n; d !== o; )
            y[_++] = c[d++];
          return y;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw new TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, n = 0, i = 0, o = t.length; i !== o && 0 === t[i]; )
              i++, r++;
            for (
              var a = ((o - i) * c + 1) >>> 0, f = new Uint8Array(a);
              i !== o;

            ) {
              for (
                var p = t[i], l = 0, h = a - 1;
                (0 !== p || l < n) && -1 !== h;
                h--, l++
              )
                (p += (256 * f[h]) >>> 0),
                  (f[h] = p % s >>> 0),
                  (p = (p / s) >>> 0);
              if (0 !== p) throw new Error("Non-zero carry");
              (n = l), i++;
            }
            for (var d = a - n; d !== a && 0 === f[d]; ) d++;
            for (var y = u.repeat(r); d < a; ++d) y += e.charAt(f[d]);
            return y;
          },
          decodeUnsafe: f,
          decode: function (e) {
            var t = f(e);
            if (t) return t;
            throw new Error("Non-base" + s + " character");
          },
        };
      };
    },
    73738: (e) => {
      function t(r) {
        return (
          (e.exports = t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    75920: (e, t, r) => {
      "use strict";
      var n = r(59119);
      e.exports = function (e) {
        function t(t) {
          var r = t.slice(0, -4),
            n = t.slice(-4),
            i = e(r);
          if (!((n[0] ^ i[0]) | (n[1] ^ i[1]) | (n[2] ^ i[2]) | (n[3] ^ i[3])))
            return r;
        }
        return {
          encode: function (t) {
            var r = Uint8Array.from(t),
              i = e(r),
              o = r.length + 4,
              s = new Uint8Array(o);
            return (
              s.set(r, 0), s.set(i.subarray(0, 4), r.length), n.encode(s, o)
            );
          },
          decode: function (e) {
            var r = t(n.decode(e));
            if (!r) throw new Error("Invalid checksum");
            return r;
          },
          decodeUnsafe: function (e) {
            var r = n.decodeUnsafe(e);
            if (r) return t(r);
          },
        };
      };
    },
    77736: (e, t, r) => {
      var n = r(73738).default,
        i = r(89045);
      (e.exports = function (e) {
        var t = i(e, "string");
        return "symbol" == n(t) ? t : t + "";
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    77929: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957),
        o = r(29814),
        s = r(25495);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.WITNESS_UTXO)
          throw new Error(
            "Decode Error: could not decode witnessUtxo with key 0x" +
              e.key.toString("hex")
          );
        const t = o.readUInt64LE(e.value, 0);
        let r = 8;
        const n = s.decode(e.value, r);
        r += s.encodingLength(n);
        const u = e.value.slice(r);
        if (u.length !== n)
          throw new Error(
            "Decode Error: WITNESS_UTXO script is not proper length"
          );
        return { script: u, value: t };
      }),
        (t.encode = function (e) {
          const { script: t, value: r } = e,
            u = s.encodingLength(t.length),
            a = n.allocUnsafe(8 + u + t.length);
          return (
            o.writeUInt64LE(a, r, 0),
            s.encode(t.length, a, 8),
            t.copy(a, 8 + u),
            { key: n.from([i.InputTypes.WITNESS_UTXO]), value: a }
          );
        }),
        (t.expected = "{ script: Buffer; value: number; }"),
        (t.check = function (e) {
          return n.isBuffer(e.script) && "number" === typeof e.value;
        }),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.witnessUtxo;
        });
    },
    79490: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      t.encode = function (e) {
        return {
          key: n.from([i.GlobalTypes.UNSIGNED_TX]),
          value: e.toBuffer(),
        };
      };
    },
    79579: (e, t, r) => {
      "use strict";
      t.f0 = t.iL = t.KT = t.o8 = t.Et = void 0;
      r(86720);
      const n = r(88743);
      t.Et = n;
      const i = r(7653);
      t.o8 = i;
      const o = r(20434);
      t.KT = o;
      r(47165);
      var s = r(69845);
      var u = r(62533);
      Object.defineProperty(t, "iL", {
        enumerable: !0,
        get: function () {
          return u.Psbt;
        },
      });
      var a = r(5208);
      var c = r(71296);
      var f = r(46789);
      Object.defineProperty(t, "f0", {
        enumerable: !0,
        get: function () {
          return f.initEccLib;
        },
      });
    },
    79838: () => {},
    82289: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(30957),
        i = r(13589),
        o = r(79490),
        s = r(67148),
        u = r(54254),
        a = r(702),
        c = r(87766),
        f = r(97278),
        p = r(14667),
        l = r(65475),
        h = r(60),
        d = r(56557),
        y = r(42527),
        _ = r(77929),
        w = r(40138),
        g = r(5180),
        m = r(26265),
        E = r(5596),
        b = r(34411),
        S = r(29932),
        v = r(55307),
        T = { unsignedTx: o, globalXpub: i, checkPubkey: m.makeChecker([]) };
      t.globals = T;
      const I = {
        nonWitnessUtxo: a,
        partialSig: c,
        sighashType: p,
        finalScriptSig: s,
        finalScriptWitness: u,
        porCommitment: f,
        witnessUtxo: _,
        bip32Derivation: g.makeConverter(n.InputTypes.BIP32_DERIVATION),
        redeemScript: E.makeConverter(n.InputTypes.REDEEM_SCRIPT),
        witnessScript: v.makeConverter(n.InputTypes.WITNESS_SCRIPT),
        checkPubkey: m.makeChecker([
          n.InputTypes.PARTIAL_SIG,
          n.InputTypes.BIP32_DERIVATION,
        ]),
        tapKeySig: l,
        tapScriptSig: y,
        tapLeafScript: h,
        tapBip32Derivation: b.makeConverter(n.InputTypes.TAP_BIP32_DERIVATION),
        tapInternalKey: S.makeConverter(n.InputTypes.TAP_INTERNAL_KEY),
        tapMerkleRoot: d,
      };
      t.inputs = I;
      const k = {
        bip32Derivation: g.makeConverter(n.OutputTypes.BIP32_DERIVATION),
        redeemScript: E.makeConverter(n.OutputTypes.REDEEM_SCRIPT),
        witnessScript: v.makeConverter(n.OutputTypes.WITNESS_SCRIPT),
        checkPubkey: m.makeChecker([n.OutputTypes.BIP32_DERIVATION]),
        tapBip32Derivation: b.makeConverter(n.OutputTypes.TAP_BIP32_DERIVATION),
        tapTree: w,
        tapInternalKey: S.makeConverter(n.OutputTypes.TAP_INTERNAL_KEY),
      };
      t.outputs = k;
    },
    82821: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(82289),
        o = r(29814);
      t.psbtToBuffer = function (e) {
        let { globalMap: t, inputs: r, outputs: i } = e;
        const {
            globalKeyVals: s,
            inputKeyVals: u,
            outputKeyVals: c,
          } = a({ globalMap: t, inputs: r, outputs: i }),
          f = o.keyValsToBuffer(s),
          p = (e) =>
            0 === e.length ? [n.from([0])] : e.map(o.keyValsToBuffer),
          l = p(u),
          h = p(c),
          d = n.allocUnsafe(5);
        return d.writeUIntBE(482972169471, 0, 5), n.concat([d, f].concat(l, h));
      };
      const s = (e, t) => e.key.compare(t.key);
      function u(e, t) {
        const r = new Set(),
          n = Object.entries(e).reduce((e, n) => {
            let [i, o] = n;
            if ("unknownKeyVals" === i) return e;
            const s = t[i];
            if (void 0 === s) return e;
            const u = (Array.isArray(o) ? o : [o]).map(s.encode);
            return (
              u
                .map((e) => e.key.toString("hex"))
                .forEach((e) => {
                  if (r.has(e))
                    throw new Error("Serialize Error: Duplicate key: " + e);
                  r.add(e);
                }),
              e.concat(u)
            );
          }, []),
          i = e.unknownKeyVals
            ? e.unknownKeyVals.filter((e) => !r.has(e.key.toString("hex")))
            : [];
        return n.concat(i).sort(s);
      }
      function a(e) {
        let { globalMap: t, inputs: r, outputs: n } = e;
        return {
          globalKeyVals: u(t, i.globals),
          inputKeyVals: r.map((e) => u(e, i.inputs)),
          outputKeyVals: n.map((e) => u(e, i.outputs)),
        };
      }
      t.psbtToKeyVals = a;
    },
    86720: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toOutputScript =
          t.fromOutputScript =
          t.toBech32 =
          t.toBase58Check =
          t.fromBech32 =
          t.fromBase58Check =
            void 0);
      const i = r(7653),
        o = r(20434),
        s = r(47165),
        u = r(24781),
        a = r(63622),
        c = r(63925),
        f =
          "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
      function p(e) {
        const t = n.from(c.decode(e));
        if (t.length < 21) throw new TypeError(e + " is too short");
        if (t.length > 21) throw new TypeError(e + " is too long");
        return { version: t.readUInt8(0), hash: t.slice(1) };
      }
      function l(e) {
        let t, r;
        try {
          t = a.bech32.decode(e);
        } catch (o) {}
        if (t) {
          if (((r = t.words[0]), 0 !== r))
            throw new TypeError(e + " uses wrong encoding");
        } else if (((t = a.bech32m.decode(e)), (r = t.words[0]), 0 === r))
          throw new TypeError(e + " uses wrong encoding");
        const i = a.bech32.fromWords(t.words.slice(1));
        return { version: r, prefix: t.prefix, data: n.from(i) };
      }
      function h(e, t, r) {
        const n = a.bech32.toWords(e);
        return (
          n.unshift(t), 0 === t ? a.bech32.encode(r, n) : a.bech32m.encode(r, n)
        );
      }
      (t.fromBase58Check = p),
        (t.fromBech32 = l),
        (t.toBase58Check = function (e, t) {
          (0, u.typeforce)((0, u.tuple)(u.Hash160bit, u.UInt8), arguments);
          const r = n.allocUnsafe(21);
          return r.writeUInt8(t, 0), e.copy(r, 1), c.encode(r);
        }),
        (t.toBech32 = h),
        (t.fromOutputScript = function (e, t) {
          t = t || i.bitcoin;
          try {
            return o.p2pkh({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return o.p2sh({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return o.p2wpkh({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return o.p2wsh({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return o.p2tr({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return (function (e, t) {
              const r = e.slice(2);
              if (r.length < 2 || r.length > 40)
                throw new TypeError(
                  "Invalid program length for segwit address"
                );
              const n = e[0] - 80;
              if (n < 2 || n > 16)
                throw new TypeError("Invalid version for segwit address");
              if (e[1] !== r.length)
                throw new TypeError("Invalid script for segwit address");
              return console.warn(f), h(r, n, t.bech32);
            })(e, t);
          } catch (r) {}
          throw new Error(s.toASM(e) + " has no matching Address");
        }),
        (t.toOutputScript = function (e, t) {
          let r, n;
          t = t || i.bitcoin;
          try {
            r = p(e);
          } catch (u) {}
          if (r) {
            if (r.version === t.pubKeyHash)
              return o.p2pkh({ hash: r.hash }).output;
            if (r.version === t.scriptHash)
              return o.p2sh({ hash: r.hash }).output;
          } else {
            try {
              n = l(e);
            } catch (u) {}
            if (n) {
              if (n.prefix !== t.bech32)
                throw new Error(e + " has an invalid prefix");
              if (0 === n.version) {
                if (20 === n.data.length)
                  return o.p2wpkh({ hash: n.data }).output;
                if (32 === n.data.length)
                  return o.p2wsh({ hash: n.data }).output;
              } else if (1 === n.version) {
                if (32 === n.data.length)
                  return o.p2tr({ pubkey: n.data }).output;
              } else if (
                n.version >= 2 &&
                n.version <= 16 &&
                n.data.length >= 2 &&
                n.data.length <= 40
              )
                return console.warn(f), s.compile([n.version + 80, n.data]);
            }
          }
          throw new Error(e + " has no matching Script");
        });
    },
    87258: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.p2wsh = void 0);
      const i = r(88743),
        o = r(7653),
        s = r(47165),
        u = r(24781),
        a = r(63322),
        c = r(63622),
        f = s.OPS,
        p = n.alloc(0);
      function l(e) {
        return !(
          !n.isBuffer(e) ||
          65 !== e.length ||
          4 !== e[0] ||
          !(0, u.isPoint)(e)
        );
      }
      t.p2wsh = function (e, t) {
        if (!e.address && !e.hash && !e.output && !e.redeem && !e.witness)
          throw new TypeError("Not enough data");
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, u.typeforce)(
            {
              network: u.typeforce.maybe(u.typeforce.Object),
              address: u.typeforce.maybe(u.typeforce.String),
              hash: u.typeforce.maybe(u.typeforce.BufferN(32)),
              output: u.typeforce.maybe(u.typeforce.BufferN(34)),
              redeem: u.typeforce.maybe({
                input: u.typeforce.maybe(u.typeforce.Buffer),
                network: u.typeforce.maybe(u.typeforce.Object),
                output: u.typeforce.maybe(u.typeforce.Buffer),
                witness: u.typeforce.maybe(
                  u.typeforce.arrayOf(u.typeforce.Buffer)
                ),
              }),
              input: u.typeforce.maybe(u.typeforce.BufferN(0)),
              witness: u.typeforce.maybe(
                u.typeforce.arrayOf(u.typeforce.Buffer)
              ),
            },
            e
          );
        const r = a.value(() => {
            const t = c.bech32.decode(e.address),
              r = t.words.shift(),
              i = c.bech32.fromWords(t.words);
            return { version: r, prefix: t.prefix, data: n.from(i) };
          }),
          h = a.value(() => s.decompile(e.redeem.input));
        let d = e.network;
        d || (d = (e.redeem && e.redeem.network) || o.bitcoin);
        const y = { network: d };
        if (
          (a.prop(y, "address", () => {
            if (!y.hash) return;
            const e = c.bech32.toWords(y.hash);
            return e.unshift(0), c.bech32.encode(d.bech32, e);
          }),
          a.prop(y, "hash", () =>
            e.output
              ? e.output.slice(2)
              : e.address
              ? r().data
              : y.redeem && y.redeem.output
              ? i.sha256(y.redeem.output)
              : void 0
          ),
          a.prop(y, "output", () => {
            if (y.hash) return s.compile([f.OP_0, y.hash]);
          }),
          a.prop(y, "redeem", () => {
            if (e.witness)
              return {
                output: e.witness[e.witness.length - 1],
                input: p,
                witness: e.witness.slice(0, -1),
              };
          }),
          a.prop(y, "input", () => {
            if (y.witness) return p;
          }),
          a.prop(y, "witness", () => {
            if (
              e.redeem &&
              e.redeem.input &&
              e.redeem.input.length > 0 &&
              e.redeem.output &&
              e.redeem.output.length > 0
            ) {
              const t = s.toStack(h());
              return (
                (y.redeem = Object.assign({ witness: t }, e.redeem)),
                (y.redeem.input = p),
                [].concat(t, e.redeem.output)
              );
            }
            if (e.redeem && e.redeem.output && e.redeem.witness)
              return [].concat(e.redeem.witness, e.redeem.output);
          }),
          a.prop(y, "name", () => {
            const e = ["p2wsh"];
            return (
              void 0 !== y.redeem &&
                void 0 !== y.redeem.name &&
                e.push(y.redeem.name),
              e.join("-")
            );
          }),
          t.validate)
        ) {
          let t = n.from([]);
          if (e.address) {
            if (r().prefix !== d.bech32)
              throw new TypeError("Invalid prefix or Network mismatch");
            if (0 !== r().version)
              throw new TypeError("Invalid address version");
            if (32 !== r().data.length)
              throw new TypeError("Invalid address data");
            t = r().data;
          }
          if (e.hash) {
            if (t.length > 0 && !t.equals(e.hash))
              throw new TypeError("Hash mismatch");
            t = e.hash;
          }
          if (e.output) {
            if (
              34 !== e.output.length ||
              e.output[0] !== f.OP_0 ||
              32 !== e.output[1]
            )
              throw new TypeError("Output is invalid");
            const r = e.output.slice(2);
            if (t.length > 0 && !t.equals(r))
              throw new TypeError("Hash mismatch");
            t = r;
          }
          if (e.redeem) {
            if (e.redeem.network && e.redeem.network !== d)
              throw new TypeError("Network mismatch");
            if (
              e.redeem.input &&
              e.redeem.input.length > 0 &&
              e.redeem.witness &&
              e.redeem.witness.length > 0
            )
              throw new TypeError("Ambiguous witness source");
            if (e.redeem.output) {
              const r = s.decompile(e.redeem.output);
              if (!r || r.length < 1)
                throw new TypeError("Redeem.output is invalid");
              if (e.redeem.output.byteLength > 3600)
                throw new TypeError(
                  "Redeem.output unspendable if larger than 3600 bytes"
                );
              if (s.countNonPushOnlyOPs(r) > 201)
                throw new TypeError(
                  "Redeem.output unspendable with more than 201 non-push ops"
                );
              const n = i.sha256(e.redeem.output);
              if (t.length > 0 && !t.equals(n))
                throw new TypeError("Hash mismatch");
              t = n;
            }
            if (e.redeem.input && !s.isPushOnly(h()))
              throw new TypeError("Non push-only scriptSig");
            if (
              e.witness &&
              e.redeem.witness &&
              !(0, u.stacksEqual)(e.witness, e.redeem.witness)
            )
              throw new TypeError("Witness and redeem.witness mismatch");
            if (
              (e.redeem.input && h().some(l)) ||
              (e.redeem.output && (s.decompile(e.redeem.output) || []).some(l))
            )
              throw new TypeError(
                "redeem.input or redeem.output contains uncompressed pubkey"
              );
          }
          if (e.witness && e.witness.length > 0) {
            const t = e.witness[e.witness.length - 1];
            if (e.redeem && e.redeem.output && !e.redeem.output.equals(t))
              throw new TypeError("Witness and redeem.output mismatch");
            if (e.witness.some(l) || (s.decompile(t) || []).some(l))
              throw new TypeError("Witness contains uncompressed pubkey");
          }
        }
        return Object.assign(y, e);
      };
    },
    87766: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.PARTIAL_SIG)
          throw new Error(
            "Decode Error: could not decode partialSig with key 0x" +
              e.key.toString("hex")
          );
        if (
          (34 !== e.key.length && 66 !== e.key.length) ||
          ![2, 3, 4].includes(e.key[1])
        )
          throw new Error(
            "Decode Error: partialSig has invalid pubkey in key 0x" +
              e.key.toString("hex")
          );
        return { pubkey: e.key.slice(1), signature: e.value };
      }),
        (t.encode = function (e) {
          const t = n.from([i.InputTypes.PARTIAL_SIG]);
          return { key: n.concat([t, e.pubkey]), value: e.signature };
        }),
        (t.expected = "{ pubkey: Buffer; signature: Buffer; }"),
        (t.check = function (e) {
          return (
            n.isBuffer(e.pubkey) &&
            n.isBuffer(e.signature) &&
            [33, 65].includes(e.pubkey.length) &&
            [2, 3, 4].includes(e.pubkey[0]) &&
            (function (e) {
              if (!n.isBuffer(e) || e.length < 9) return !1;
              if (48 !== e[0]) return !1;
              if (e.length !== e[1] + 3) return !1;
              if (2 !== e[2]) return !1;
              const t = e[3];
              if (t > 33 || t < 1) return !1;
              if (2 !== e[3 + t + 1]) return !1;
              const r = e[3 + t + 2];
              return !(r > 33 || r < 1) && e.length === 3 + t + 2 + r + 2;
            })(e.signature)
          );
        }),
        (t.canAddToArray = function (e, t, r) {
          const n = t.pubkey.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n), 0 === e.filter((e) => e.pubkey.equals(t.pubkey)).length)
          );
        });
    },
    88743: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.taggedHash =
          t.TAGGED_HASH_PREFIXES =
          t.TAGS =
          t.hash256 =
          t.hash160 =
          t.sha256 =
          t.sha1 =
          t.ripemd160 =
            void 0);
      const i = r(54715),
        o = r(98374),
        s = r(25796);
      function u(e) {
        return n.from((0, s.sha256)(Uint8Array.from(e)));
      }
      (t.ripemd160 = function (e) {
        return n.from((0, i.ripemd160)(Uint8Array.from(e)));
      }),
        (t.sha1 = function (e) {
          return n.from((0, o.sha1)(Uint8Array.from(e)));
        }),
        (t.sha256 = u),
        (t.hash160 = function (e) {
          return n.from((0, i.ripemd160)((0, s.sha256)(Uint8Array.from(e))));
        }),
        (t.hash256 = function (e) {
          return n.from((0, s.sha256)((0, s.sha256)(Uint8Array.from(e))));
        }),
        (t.TAGS = [
          "BIP0340/challenge",
          "BIP0340/aux",
          "BIP0340/nonce",
          "TapLeaf",
          "TapBranch",
          "TapSighash",
          "TapTweak",
          "KeyAgg list",
          "KeyAgg coefficient",
        ]),
        (t.TAGGED_HASH_PREFIXES = {
          "BIP0340/challenge": n.from([
            123, 181, 45, 122, 159, 239, 88, 50, 62, 177, 191, 122, 64, 125,
            179, 130, 210, 243, 242, 216, 27, 177, 34, 79, 73, 254, 81, 143,
            109, 72, 211, 124, 123, 181, 45, 122, 159, 239, 88, 50, 62, 177,
            191, 122, 64, 125, 179, 130, 210, 243, 242, 216, 27, 177, 34, 79,
            73, 254, 81, 143, 109, 72, 211, 124,
          ]),
          "BIP0340/aux": n.from([
            241, 239, 78, 94, 192, 99, 202, 218, 109, 148, 202, 250, 157, 152,
            126, 160, 105, 38, 88, 57, 236, 193, 31, 151, 45, 119, 165, 46, 216,
            193, 204, 144, 241, 239, 78, 94, 192, 99, 202, 218, 109, 148, 202,
            250, 157, 152, 126, 160, 105, 38, 88, 57, 236, 193, 31, 151, 45,
            119, 165, 46, 216, 193, 204, 144,
          ]),
          "BIP0340/nonce": n.from([
            7, 73, 119, 52, 167, 155, 203, 53, 91, 155, 140, 125, 3, 79, 18, 28,
            244, 52, 215, 62, 247, 45, 218, 25, 135, 0, 97, 251, 82, 191, 235,
            47, 7, 73, 119, 52, 167, 155, 203, 53, 91, 155, 140, 125, 3, 79, 18,
            28, 244, 52, 215, 62, 247, 45, 218, 25, 135, 0, 97, 251, 82, 191,
            235, 47,
          ]),
          TapLeaf: n.from([
            174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30, 38,
            56, 211, 95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120, 233,
            238, 174, 234, 143, 220, 66, 8, 152, 49, 5, 115, 75, 88, 8, 29, 30,
            38, 56, 211, 95, 28, 181, 64, 8, 212, 211, 87, 202, 3, 190, 120,
            233, 238,
          ]),
          TapBranch: n.from([
            25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148, 190, 92, 1,
            247, 33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208, 91, 245, 22,
            160, 21, 25, 65, 161, 242, 229, 110, 185, 95, 162, 169, 241, 148,
            190, 92, 1, 247, 33, 111, 51, 237, 130, 176, 145, 70, 52, 144, 208,
            91, 245, 22, 160, 21,
          ]),
          TapSighash: n.from([
            244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242, 101, 70, 97,
            237, 61, 149, 253, 102, 163, 19, 235, 135, 35, 117, 151, 198, 40,
            228, 160, 49, 244, 10, 72, 223, 75, 42, 112, 200, 180, 146, 75, 242,
            101, 70, 97, 237, 61, 149, 253, 102, 163, 19, 235, 135, 35, 117,
            151, 198, 40, 228, 160, 49,
          ]),
          TapTweak: n.from([
            232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57, 193, 67, 198,
            62, 66, 156, 188, 235, 21, 217, 64, 251, 181, 197, 161, 244, 175,
            87, 197, 233, 232, 15, 225, 99, 156, 156, 160, 80, 227, 175, 27, 57,
            193, 67, 198, 62, 66, 156, 188, 235, 21, 217, 64, 251, 181, 197,
            161, 244, 175, 87, 197, 233,
          ]),
          "KeyAgg list": n.from([
            72, 28, 151, 28, 60, 11, 70, 215, 240, 178, 117, 174, 89, 141, 78,
            44, 126, 215, 49, 156, 89, 74, 92, 110, 199, 158, 160, 212, 153, 2,
            148, 240, 72, 28, 151, 28, 60, 11, 70, 215, 240, 178, 117, 174, 89,
            141, 78, 44, 126, 215, 49, 156, 89, 74, 92, 110, 199, 158, 160, 212,
            153, 2, 148, 240,
          ]),
          "KeyAgg coefficient": n.from([
            191, 201, 4, 3, 77, 28, 136, 232, 200, 14, 34, 229, 61, 36, 86, 109,
            100, 130, 78, 214, 66, 114, 129, 192, 145, 0, 249, 77, 205, 82, 201,
            129, 191, 201, 4, 3, 77, 28, 136, 232, 200, 14, 34, 229, 61, 36, 86,
            109, 100, 130, 78, 214, 66, 114, 129, 192, 145, 0, 249, 77, 205, 82,
            201, 129,
          ]),
        }),
        (t.taggedHash = function (e, r) {
          return u(n.concat([t.TAGGED_HASH_PREFIXES[e], r]));
        });
    },
    89045: (e, t, r) => {
      var n = r(73738).default;
      (e.exports = function (e, t) {
        if ("object" != n(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var i = r.call(e, t || "default");
          if ("object" != n(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    93802: (e, t, r) => {
      "use strict";
      function n(e, t) {
        return e
          .then(function (e) {
            return [null, e];
          })
          .catch(function (e) {
            return t && Object.assign(e, t), [e, void 0];
          });
      }
      r.d(t, { to: () => n });
    },
    95047: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.p2pk = void 0);
      const n = r(7653),
        i = r(47165),
        o = r(24781),
        s = r(63322),
        u = i.OPS;
      t.p2pk = function (e, t) {
        if (!e.input && !e.output && !e.pubkey && !e.input && !e.signature)
          throw new TypeError("Not enough data");
        (t = Object.assign({ validate: !0 }, t || {})),
          (0, o.typeforce)(
            {
              network: o.typeforce.maybe(o.typeforce.Object),
              output: o.typeforce.maybe(o.typeforce.Buffer),
              pubkey: o.typeforce.maybe(o.isPoint),
              signature: o.typeforce.maybe(i.isCanonicalScriptSignature),
              input: o.typeforce.maybe(o.typeforce.Buffer),
            },
            e
          );
        const r = s.value(() => i.decompile(e.input)),
          a = { name: "p2pk", network: e.network || n.bitcoin };
        if (
          (s.prop(a, "output", () => {
            if (e.pubkey) return i.compile([e.pubkey, u.OP_CHECKSIG]);
          }),
          s.prop(a, "pubkey", () => {
            if (e.output) return e.output.slice(1, -1);
          }),
          s.prop(a, "signature", () => {
            if (e.input) return r()[0];
          }),
          s.prop(a, "input", () => {
            if (e.signature) return i.compile([e.signature]);
          }),
          s.prop(a, "witness", () => {
            if (a.input) return [];
          }),
          t.validate)
        ) {
          if (e.output) {
            if (e.output[e.output.length - 1] !== u.OP_CHECKSIG)
              throw new TypeError("Output is invalid");
            if (!(0, o.isPoint)(a.pubkey))
              throw new TypeError("Output pubkey is invalid");
            if (e.pubkey && !e.pubkey.equals(a.pubkey))
              throw new TypeError("Pubkey mismatch");
          }
          if (e.signature && e.input && !e.input.equals(a.input))
            throw new TypeError("Signature mismatch");
          if (e.input) {
            if (1 !== r().length) throw new TypeError("Input is invalid");
            if (!i.isCanonicalScriptSignature(a.signature))
              throw new TypeError("Input has invalid signature");
          }
        }
        return Object.assign(a, e);
      };
    },
    97278: (e, t, r) => {
      "use strict";
      var n = r(13740).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(30957);
      (t.decode = function (e) {
        if (e.key[0] !== i.InputTypes.POR_COMMITMENT)
          throw new Error(
            "Decode Error: could not decode porCommitment with key 0x" +
              e.key.toString("hex")
          );
        return e.value.toString("utf8");
      }),
        (t.encode = function (e) {
          return {
            key: n.from([i.InputTypes.POR_COMMITMENT]),
            value: n.from(e, "utf8"),
          };
        }),
        (t.expected = "string"),
        (t.check = function (e) {
          return "string" === typeof e;
        }),
        (t.canAdd = function (e, t) {
          return !!e && !!t && void 0 === e.porCommitment;
        });
    },
  },
]);
