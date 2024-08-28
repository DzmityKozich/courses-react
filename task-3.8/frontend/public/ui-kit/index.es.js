import xe, { useRef as Hn, useDebugValue as yt, createElement as Wn, useContext as Ht, forwardRef as Yn } from "react";
var Mr = { exports: {} }, Ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Bn() {
  if (vt) return Ge;
  vt = 1;
  var e = xe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, b) {
    var g, h = {}, m = null, v = null;
    b !== void 0 && (m = "" + b), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (g in l) n.call(l, g) && !i.hasOwnProperty(g) && (h[g] = l[g]);
    if (u && u.defaultProps) for (g in l = u.defaultProps, l) h[g] === void 0 && (h[g] = l[g]);
    return { $$typeof: r, type: u, key: m, ref: v, props: h, _owner: o.current };
  }
  return Ge.Fragment = t, Ge.jsx = s, Ge.jsxs = s, Ge;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function qn() {
  return wt || (wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), T = Symbol.iterator, j = "@@iterator";
    function M(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = T && a[T] || a[j];
      return typeof c == "function" ? c : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(a) {
      {
        for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), y = 1; y < c; y++)
          f[y - 1] = arguments[y];
        O("error", a, f);
      }
    }
    function O(a, c, f) {
      {
        var y = R.ReactDebugCurrentFrame, P = y.getStackAddendum();
        P !== "" && (c += "%s", f = f.concat([P]));
        var I = f.map(function(E) {
          return String(E);
        });
        I.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, I);
      }
    }
    var A = !1, D = !1, k = !1, w = !1, ae = !1, oe;
    oe = Symbol.for("react.module.reference");
    function kr(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || ae || a === o || a === b || a === g || w || a === v || A || D || k || typeof a == "object" && a !== null && (a.$$typeof === m || a.$$typeof === h || a.$$typeof === s || a.$$typeof === u || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === oe || a.getModuleId !== void 0));
    }
    function Er(a, c, f) {
      var y = a.displayName;
      if (y)
        return y;
      var P = c.displayName || c.name || "";
      return P !== "" ? f + "(" + P + ")" : f;
    }
    function Qe(a) {
      return a.displayName || "Context";
    }
    function G(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var c = a;
            return Qe(c) + ".Consumer";
          case s:
            var f = a;
            return Qe(f._context) + ".Provider";
          case l:
            return Er(a, a.render, "ForwardRef");
          case h:
            var y = a.displayName || null;
            return y !== null ? y : G(a.type) || "Memo";
          case m: {
            var P = a, I = P._payload, E = P._init;
            try {
              return G(E(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, me = 0, er, Ee, We, V, le, ue, H;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ye() {
      {
        if (me === 0) {
          er = console.log, Ee = console.info, We = console.warn, V = console.error, le = console.group, ue = console.groupCollapsed, H = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        me++;
      }
    }
    function Pe() {
      {
        if (me--, me === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, a, {
              value: er
            }),
            info: ie({}, a, {
              value: Ee
            }),
            warn: ie({}, a, {
              value: We
            }),
            error: ie({}, a, {
              value: V
            }),
            group: ie({}, a, {
              value: le
            }),
            groupCollapsed: ie({}, a, {
              value: ue
            }),
            groupEnd: ie({}, a, {
              value: H
            })
          });
        }
        me < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = R.ReactCurrentDispatcher, fe;
    function J(a, c, f) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (P) {
            var y = P.stack.trim().match(/\n( *(at )?)/);
            fe = y && y[1] || "";
          }
        return `
` + fe + a;
      }
    }
    var Z = !1, de;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      de = new _e();
    }
    function Q(a, c) {
      if (!a || Z)
        return "";
      {
        var f = de.get(a);
        if (f !== void 0)
          return f;
      }
      var y;
      Z = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = se.current, se.current = null, Ye();
      try {
        if (c) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (Y) {
              y = Y;
            }
            Reflect.construct(a, [], E);
          } else {
            try {
              E.call();
            } catch (Y) {
              y = Y;
            }
            a.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            y = Y;
          }
          a();
        }
      } catch (Y) {
        if (Y && y && typeof Y.stack == "string") {
          for (var x = Y.stack.split(`
`), W = y.stack.split(`
`), N = x.length - 1, $ = W.length - 1; N >= 1 && $ >= 0 && x[N] !== W[$]; )
            $--;
          for (; N >= 1 && $ >= 0; N--, $--)
            if (x[N] !== W[$]) {
              if (N !== 1 || $ !== 1)
                do
                  if (N--, $--, $ < 0 || x[N] !== W[$]) {
                    var K = `
` + x[N].replace(" at new ", " at ");
                    return a.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", a.displayName)), typeof a == "function" && de.set(a, K), K;
                  }
                while (N >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        Z = !1, se.current = I, Pe(), Error.prepareStackTrace = P;
      }
      var Oe = a ? a.displayName || a.name : "", be = Oe ? J(Oe) : "";
      return typeof a == "function" && de.set(a, be), be;
    }
    function bn(a, c, f) {
      return Q(a, !1);
    }
    function yn(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function rr(a, c, f) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Q(a, yn(a));
      if (typeof a == "string")
        return J(a);
      switch (a) {
        case b:
          return J("Suspense");
        case g:
          return J("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return bn(a.render);
          case h:
            return rr(a.type, c, f);
          case m: {
            var y = a, P = y._payload, I = y._init;
            try {
              return rr(I(P), c, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, ot = {}, it = R.ReactDebugCurrentFrame;
    function tr(a) {
      if (a) {
        var c = a._owner, f = rr(a.type, a._source, c ? c.type : null);
        it.setExtraStackFrame(f);
      } else
        it.setExtraStackFrame(null);
    }
    function vn(a, c, f, y, P) {
      {
        var I = Function.call.bind(Be);
        for (var E in a)
          if (I(a, E)) {
            var x = void 0;
            try {
              if (typeof a[E] != "function") {
                var W = Error((y || "React class") + ": " + f + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              x = a[E](c, E, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              x = N;
            }
            x && !(x instanceof Error) && (tr(P), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, E, typeof x), tr(null)), x instanceof Error && !(x.message in ot) && (ot[x.message] = !0, tr(P), S("Failed %s type: %s", f, x.message), tr(null));
          }
      }
    }
    var wn = Array.isArray;
    function Rr(a) {
      return wn(a);
    }
    function Cn(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, f = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return f;
      }
    }
    function Sn(a) {
      try {
        return st(a), !1;
      } catch {
        return !0;
      }
    }
    function st(a) {
      return "" + a;
    }
    function ct(a) {
      if (Sn(a))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(a)), st(a);
    }
    var qe = R.ReactCurrentOwner, xn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ut, Pr;
    Pr = {};
    function kn(a) {
      if (Be.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function En(a) {
      if (Be.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Rn(a, c) {
      if (typeof a.ref == "string" && qe.current && c && qe.current.stateNode !== c) {
        var f = G(qe.current.type);
        Pr[f] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(qe.current.type), a.ref), Pr[f] = !0);
      }
    }
    function Pn(a, c) {
      {
        var f = function() {
          lt || (lt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        f.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function _n(a, c) {
      {
        var f = function() {
          ut || (ut = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        f.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Tn = function(a, c, f, y, P, I, E) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: f,
        props: E,
        // Record the component responsible for creating this element.
        _owner: I
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function On(a, c, f, y, P) {
      {
        var I, E = {}, x = null, W = null;
        f !== void 0 && (ct(f), x = "" + f), En(c) && (ct(c.key), x = "" + c.key), kn(c) && (W = c.ref, Rn(c, P));
        for (I in c)
          Be.call(c, I) && !xn.hasOwnProperty(I) && (E[I] = c[I]);
        if (a && a.defaultProps) {
          var N = a.defaultProps;
          for (I in N)
            E[I] === void 0 && (E[I] = N[I]);
        }
        if (x || W) {
          var $ = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          x && Pn(E, $), W && _n(E, $);
        }
        return Tn(a, x, W, P, y, qe.current, E);
      }
    }
    var _r = R.ReactCurrentOwner, ft = R.ReactDebugCurrentFrame;
    function Te(a) {
      if (a) {
        var c = a._owner, f = rr(a.type, a._source, c ? c.type : null);
        ft.setExtraStackFrame(f);
      } else
        ft.setExtraStackFrame(null);
    }
    var Tr;
    Tr = !1;
    function Or(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function dt() {
      {
        if (_r.current) {
          var a = G(_r.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function In(a) {
      return "";
    }
    var pt = {};
    function An(a) {
      {
        var c = dt();
        if (!c) {
          var f = typeof a == "string" ? a : a.displayName || a.name;
          f && (c = `

Check the top-level render call using <` + f + ">.");
        }
        return c;
      }
    }
    function ht(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var f = An(c);
        if (pt[f])
          return;
        pt[f] = !0;
        var y = "";
        a && a._owner && a._owner !== _r.current && (y = " It was passed a child from " + G(a._owner.type) + "."), Te(a), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), Te(null);
      }
    }
    function gt(a, c) {
      {
        if (typeof a != "object")
          return;
        if (Rr(a))
          for (var f = 0; f < a.length; f++) {
            var y = a[f];
            Or(y) && ht(y, c);
          }
        else if (Or(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var P = M(a);
          if (typeof P == "function" && P !== a.entries)
            for (var I = P.call(a), E; !(E = I.next()).done; )
              Or(E.value) && ht(E.value, c);
        }
      }
    }
    function jn(a) {
      {
        var c = a.type;
        if (c == null || typeof c == "string")
          return;
        var f;
        if (typeof c == "function")
          f = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === h))
          f = c.propTypes;
        else
          return;
        if (f) {
          var y = G(c);
          vn(f, a.props, "prop", y, a);
        } else if (c.PropTypes !== void 0 && !Tr) {
          Tr = !0;
          var P = G(c);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fn(a) {
      {
        for (var c = Object.keys(a.props), f = 0; f < c.length; f++) {
          var y = c[f];
          if (y !== "children" && y !== "key") {
            Te(a), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Te(null);
            break;
          }
        }
        a.ref !== null && (Te(a), S("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var mt = {};
    function bt(a, c, f, y, P, I) {
      {
        var E = kr(a);
        if (!E) {
          var x = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = In();
          W ? x += W : x += dt();
          var N;
          a === null ? N = "null" : Rr(a) ? N = "array" : a !== void 0 && a.$$typeof === r ? (N = "<" + (G(a.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : N = typeof a, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, x);
        }
        var $ = On(a, c, f, P, I);
        if ($ == null)
          return $;
        if (E) {
          var K = c.children;
          if (K !== void 0)
            if (y)
              if (Rr(K)) {
                for (var Oe = 0; Oe < K.length; Oe++)
                  gt(K[Oe], a);
                Object.freeze && Object.freeze(K);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt(K, a);
        }
        if (Be.call(c, "key")) {
          var be = G(a), Y = Object.keys(c).filter(function(Ln) {
            return Ln !== "key";
          }), Ir = Y.length > 0 ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mt[be + Ir]) {
            var Mn = Y.length > 0 ? "{" + Y.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ir, be, Mn, be), mt[be + Ir] = !0;
          }
        }
        return a === n ? Fn($) : jn($), $;
      }
    }
    function Dn(a, c, f) {
      return bt(a, c, f, !0);
    }
    function Nn(a, c, f) {
      return bt(a, c, f, !1);
    }
    var $n = Nn, zn = Dn;
    Ue.Fragment = n, Ue.jsx = $n, Ue.jsxs = zn;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Mr.exports = Bn() : Mr.exports = qn();
var Ct = Mr.exports, B = function() {
  return B = Object.assign || function(r) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, B.apply(this, arguments);
};
function Ae(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, o = r.length, i; n < o; n++)
    (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return e.concat(i || Array.prototype.slice.call(r));
}
function Gn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Un = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vn = /* @__PURE__ */ Gn(
  function(e) {
    return Un.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), F = "-ms-", Xe = "-moz-", _ = "-webkit-", Wt = "comm", br = "rule", Zr = "decl", Kn = "@import", Yt = "@keyframes", Xn = "@layer", Bt = Math.abs, Qr = String.fromCharCode, Lr = Object.assign;
function Jn(e, r) {
  return L(e, 0) ^ 45 ? (((r << 2 ^ L(e, 0)) << 2 ^ L(e, 1)) << 2 ^ L(e, 2)) << 2 ^ L(e, 3) : 0;
}
function qt(e) {
  return e.trim();
}
function ce(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function C(e, r, t) {
  return e.replace(r, t);
}
function cr(e, r, t) {
  return e.indexOf(r, t);
}
function L(e, r) {
  return e.charCodeAt(r) | 0;
}
function je(e, r, t) {
  return e.slice(r, t);
}
function re(e) {
  return e.length;
}
function Gt(e) {
  return e.length;
}
function Ke(e, r) {
  return r.push(e), e;
}
function Zn(e, r) {
  return e.map(r).join("");
}
function St(e, r) {
  return e.filter(function(t) {
    return !ce(t, r);
  });
}
var yr = 1, Fe = 1, Ut = 0, X = 0, z = 0, Me = "";
function vr(e, r, t, n, o, i, s, u) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: yr, column: Fe, length: s, return: "", siblings: u };
}
function pe(e, r) {
  return Lr(vr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Ie(e) {
  for (; e.root; )
    e = pe(e.root, { children: [e] });
  Ke(e, e.siblings);
}
function Qn() {
  return z;
}
function ea() {
  return z = X > 0 ? L(Me, --X) : 0, Fe--, z === 10 && (Fe = 1, yr--), z;
}
function ee() {
  return z = X < Ut ? L(Me, X++) : 0, Fe++, z === 10 && (Fe = 1, yr++), z;
}
function Ce() {
  return L(Me, X);
}
function lr() {
  return X;
}
function wr(e, r) {
  return je(Me, e, r);
}
function Hr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ra(e) {
  return yr = Fe = 1, Ut = re(Me = e), X = 0, [];
}
function ta(e) {
  return Me = "", e;
}
function Ar(e) {
  return qt(wr(X - 1, Wr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function na(e) {
  for (; (z = Ce()) && z < 33; )
    ee();
  return Hr(e) > 2 || Hr(z) > 3 ? "" : " ";
}
function aa(e, r) {
  for (; --r && ee() && !(z < 48 || z > 102 || z > 57 && z < 65 || z > 70 && z < 97); )
    ;
  return wr(e, lr() + (r < 6 && Ce() == 32 && ee() == 32));
}
function Wr(e) {
  for (; ee(); )
    switch (z) {
      case e:
        return X;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wr(z);
        break;
      case 40:
        e === 41 && Wr(e);
        break;
      case 92:
        ee();
        break;
    }
  return X;
}
function oa(e, r) {
  for (; ee() && e + z !== 57; )
    if (e + z === 84 && Ce() === 47)
      break;
  return "/*" + wr(r, X - 1) + "*" + Qr(e === 47 ? e : ee());
}
function ia(e) {
  for (; !Hr(Ce()); )
    ee();
  return wr(e, X);
}
function sa(e) {
  return ta(ur("", null, null, null, [""], e = ra(e), 0, [0], e));
}
function ur(e, r, t, n, o, i, s, u, l) {
  for (var b = 0, g = 0, h = s, m = 0, v = 0, T = 0, j = 1, M = 1, R = 1, S = 0, O = "", A = o, D = i, k = n, w = O; M; )
    switch (T = S, S = ee()) {
      case 40:
        if (T != 108 && L(w, h - 1) == 58) {
          cr(w += C(Ar(S), "&", "&\f"), "&\f", Bt(b ? u[b - 1] : 0)) != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Ar(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += na(T);
        break;
      case 92:
        w += aa(lr() - 1, 7);
        continue;
      case 47:
        switch (Ce()) {
          case 42:
          case 47:
            Ke(ca(oa(ee(), lr()), r, t, l), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * j:
        u[b++] = re(w) * R;
      case 125 * j:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            M = 0;
          case 59 + g:
            R == -1 && (w = C(w, /\f/g, "")), v > 0 && re(w) - h && Ke(v > 32 ? kt(w + ";", n, t, h - 1, l) : kt(C(w, " ", "") + ";", n, t, h - 2, l), l);
            break;
          case 59:
            w += ";";
          default:
            if (Ke(k = xt(w, r, t, b, g, o, u, O, A = [], D = [], h, i), i), S === 123)
              if (g === 0)
                ur(w, r, k, k, A, i, h, u, D);
              else
                switch (m === 99 && L(w, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ur(e, k, k, n && Ke(xt(e, k, k, 0, 0, o, u, O, o, A = [], h, D), D), o, D, h, u, n ? A : D);
                    break;
                  default:
                    ur(w, k, k, k, [""], D, 0, u, D);
                }
        }
        b = g = v = 0, j = R = 1, O = w = "", h = s;
        break;
      case 58:
        h = 1 + re(w), v = T;
      default:
        if (j < 1) {
          if (S == 123)
            --j;
          else if (S == 125 && j++ == 0 && ea() == 125)
            continue;
        }
        switch (w += Qr(S), S * j) {
          case 38:
            R = g > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            u[b++] = (re(w) - 1) * R, R = 1;
            break;
          case 64:
            Ce() === 45 && (w += Ar(ee())), m = Ce(), g = h = re(O = w += ia(lr())), S++;
            break;
          case 45:
            T === 45 && re(w) == 2 && (j = 0);
        }
    }
  return i;
}
function xt(e, r, t, n, o, i, s, u, l, b, g, h) {
  for (var m = o - 1, v = o === 0 ? i : [""], T = Gt(v), j = 0, M = 0, R = 0; j < n; ++j)
    for (var S = 0, O = je(e, m + 1, m = Bt(M = s[j])), A = e; S < T; ++S)
      (A = qt(M > 0 ? v[S] + " " + O : C(O, /&\f/g, v[S]))) && (l[R++] = A);
  return vr(e, r, t, o === 0 ? br : u, l, b, g, h);
}
function ca(e, r, t, n) {
  return vr(e, r, t, Wt, Qr(Qn()), je(e, 2, -2), 0, n);
}
function kt(e, r, t, n, o) {
  return vr(e, r, t, Zr, je(e, 0, n), je(e, n + 1, -1), n, o);
}
function Vt(e, r, t) {
  switch (Jn(e, r)) {
    case 5103:
      return _ + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _ + e + e;
    case 4789:
      return Xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _ + e + Xe + e + F + e + e;
    case 5936:
      switch (L(e, r + 11)) {
        case 114:
          return _ + e + F + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return _ + e + F + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return _ + e + F + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return _ + e + F + e + e;
    case 6165:
      return _ + e + F + "flex-" + e + e;
    case 5187:
      return _ + e + C(e, /(\w+).+(:[^]+)/, _ + "box-$1$2" + F + "flex-$1$2") + e;
    case 5443:
      return _ + e + F + "flex-item-" + C(e, /flex-|-self/g, "") + (ce(e, /flex-|baseline/) ? "" : F + "grid-row-" + C(e, /flex-|-self/g, "")) + e;
    case 4675:
      return _ + e + F + "flex-line-pack" + C(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return _ + e + F + C(e, "shrink", "negative") + e;
    case 5292:
      return _ + e + F + C(e, "basis", "preferred-size") + e;
    case 6060:
      return _ + "box-" + C(e, "-grow", "") + _ + e + F + C(e, "grow", "positive") + e;
    case 4554:
      return _ + C(e, /([^-])(transform)/g, "$1" + _ + "$2") + e;
    case 6187:
      return C(C(C(e, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return C(e, /(image-set\([^]*)/, _ + "$1$`$1");
    case 4968:
      return C(C(e, /(.+:)(flex-)?(.*)/, _ + "box-pack:$3" + F + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _ + e + e;
    case 4200:
      if (!ce(e, /flex-|baseline/)) return F + "grid-column-align" + je(e, r) + e;
      break;
    case 2592:
    case 3360:
      return F + C(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, ce(n.props, /grid-\w+-end/);
      }) ? ~cr(e + (t = t[r].value), "span", 0) ? e : F + C(e, "-start", "") + e + F + "grid-row-span:" + (~cr(t, "span", 0) ? ce(t, /\d+/) : +ce(t, /\d+/) - +ce(e, /\d+/)) + ";" : F + C(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return ce(n.props, /grid-\w+-start/);
      }) ? e : F + C(C(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return C(e, /(.+)-inline(.+)/, _ + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (re(e) - 1 - r > 6)
        switch (L(e, r + 1)) {
          case 109:
            if (L(e, r + 4) !== 45)
              break;
          case 102:
            return C(e, /(.+:)(.+)-([^]+)/, "$1" + _ + "$2-$3$1" + Xe + (L(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~cr(e, "stretch", 0) ? Vt(C(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return C(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, s, u, l, b) {
        return F + o + ":" + i + b + (s ? F + o + "-span:" + (u ? l : +l - +i) + b : "") + e;
      });
    case 4949:
      if (L(e, r + 6) === 121)
        return C(e, ":", ":" + _) + e;
      break;
    case 6444:
      switch (L(e, L(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return C(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + _ + (L(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _ + "$2$3$1" + F + "$2box$3") + e;
        case 100:
          return C(e, ":", ":" + F) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return C(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function pr(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function la(e, r, t, n) {
  switch (e.type) {
    case Xn:
      if (e.children.length) break;
    case Kn:
    case Zr:
      return e.return = e.return || e.value;
    case Wt:
      return "";
    case Yt:
      return e.return = e.value + "{" + pr(e.children, n) + "}";
    case br:
      if (!re(e.value = e.props.join(","))) return "";
  }
  return re(t = pr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function ua(e) {
  var r = Gt(e);
  return function(t, n, o, i) {
    for (var s = "", u = 0; u < r; u++)
      s += e[u](t, n, o, i) || "";
    return s;
  };
}
function fa(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function da(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Zr:
        e.return = Vt(e.value, e.length, t);
        return;
      case Yt:
        return pr([pe(e, { value: C(e.value, "@", "@" + _) })], n);
      case br:
        if (e.length)
          return Zn(t = e.props, function(o) {
            switch (ce(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ie(pe(e, { props: [C(o, /:(read-\w+)/, ":" + Xe + "$1")] })), Ie(pe(e, { props: [o] })), Lr(e, { props: St(t, n) });
                break;
              case "::placeholder":
                Ie(pe(e, { props: [C(o, /:(plac\w+)/, ":" + _ + "input-$1")] })), Ie(pe(e, { props: [C(o, /:(plac\w+)/, ":" + Xe + "$1")] })), Ie(pe(e, { props: [C(o, /:(plac\w+)/, F + "input-$1")] })), Ie(pe(e, { props: [o] })), Lr(e, { props: St(t, n) });
                break;
            }
            return "";
          });
    }
}
var pa = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ke = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Kt = "active", Xt = "data-styled-version", Cr = "6.1.12", et = `/*!sc*/
`, hr = typeof window < "u" && "HTMLElement" in window, ha = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Et = /invalid hook call/i, nr = /* @__PURE__ */ new Set(), ga = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", n = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var u = [], l = 1; l < arguments.length; l++) u[l - 1] = arguments[l];
        Et.test(s) ? (i = !1, nr.delete(n)) : o.apply(void 0, Ae([s], u, !1));
      }, Hn(), i && !nr.has(n) && (console.warn(n), nr.add(n));
    } catch (s) {
      Et.test(s.message) && nr.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Sr = Object.freeze([]), De = Object.freeze({});
function ma(e, r, t) {
  return t === void 0 && (t = De), e.theme !== t.theme && e.theme || r || t.theme;
}
var Yr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ba = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ya = /(^-|-$)/g;
function Rt(e) {
  return e.replace(ba, "-").replace(ya, "");
}
var va = /(a)(d)/gi, ar = 52, Pt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Br(e) {
  var r, t = "";
  for (r = Math.abs(e); r > ar; r = r / ar | 0) t = Pt(r % ar) + t;
  return (Pt(r % ar) + t).replace(va, "$1-$2");
}
var jr, Jt = 5381, ve = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Zt = function(e) {
  return ve(Jt, e);
};
function wa(e) {
  return Br(Zt(e) >>> 0);
}
function Qt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Fr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var en = typeof Symbol == "function" && Symbol.for, rn = en ? Symbol.for("react.memo") : 60115, Ca = en ? Symbol.for("react.forward_ref") : 60112, Sa = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, xa = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, tn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ka = ((jr = {})[Ca] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, jr[rn] = tn, jr);
function _t(e) {
  return ("type" in (r = e) && r.type.$$typeof) === rn ? tn : "$$typeof" in e ? ka[e.$$typeof] : Sa;
  var r;
}
var Ea = Object.defineProperty, Ra = Object.getOwnPropertyNames, Tt = Object.getOwnPropertySymbols, Pa = Object.getOwnPropertyDescriptor, _a = Object.getPrototypeOf, Ot = Object.prototype;
function nn(e, r, t) {
  if (typeof r != "string") {
    if (Ot) {
      var n = _a(r);
      n && n !== Ot && nn(e, n, t);
    }
    var o = Ra(r);
    Tt && (o = o.concat(Tt(r)));
    for (var i = _t(e), s = _t(r), u = 0; u < o.length; ++u) {
      var l = o[u];
      if (!(l in xa || t && t[l] || s && l in s || i && l in i)) {
        var b = Pa(r, l);
        try {
          Ea(e, l, b);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ne(e) {
  return typeof e == "function";
}
function rt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function we(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function It(e, r) {
  if (e.length === 0) return "";
  for (var t = e[0], n = 1; n < e.length; n++) t += e[n];
  return t;
}
function $e(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function qr(e, r, t) {
  if (t === void 0 && (t = !1), !t && !$e(e) && !Array.isArray(e)) return r;
  if (Array.isArray(r)) for (var n = 0; n < r.length; n++) e[n] = qr(e[n], r[n]);
  else if ($e(r)) for (var n in r) e[n] = qr(e[n], r[n]);
  return e;
}
function tt(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Ta = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Oa() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  for (var t = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function Le(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Oa.apply(void 0, Ae([Ta[e]], r, !1)).trim());
}
var Ia = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, n = 0; n < r; n++) t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; r >= i; ) if ((i <<= 1) < 0) throw Le(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), l = (s = 0, t.length); s < l; s++) this.tag.insertRule(u, t[s]) && (this.groupSizes[r]++, u++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], n = this.indexOfGroup(r), o = n + t;
      this.groupSizes[r] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0) return t;
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(et);
    return t;
  }, e;
}(), Aa = 1 << 30, fr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), dr = 1, or = function(e) {
  if (fr.has(e)) return fr.get(e);
  for (; gr.has(dr); ) dr++;
  var r = dr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > Aa)) throw Le(16, "".concat(r));
  return fr.set(e, r), gr.set(r, e), r;
}, ja = function(e, r) {
  dr = r + 1, fr.set(e, r), gr.set(r, e);
}, Fa = "style[".concat(ke, "][").concat(Xt, '="').concat(Cr, '"]'), Da = new RegExp("^".concat(ke, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Na = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, s = o.length; i < s; i++) (n = o[i]) && e.registerName(r, n);
}, $a = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(et), o = [], i = 0, s = n.length; i < s; i++) {
    var u = n[i].trim();
    if (u) {
      var l = u.match(Da);
      if (l) {
        var b = 0 | parseInt(l[1], 10), g = l[2];
        b !== 0 && (ja(g, b), Na(e, g, l[3]), e.getTag().insertRules(b, o)), o.length = 0;
      } else o.push(u);
    }
  }
}, At = function(e) {
  for (var r = document.querySelectorAll(Fa), t = 0, n = r.length; t < n; t++) {
    var o = r[t];
    o && o.getAttribute(ke) !== Kt && ($a(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function za() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var an = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(u) {
    var l = Array.from(u.querySelectorAll("style[".concat(ke, "]")));
    return l[l.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ke, Kt), n.setAttribute(Xt, Cr);
  var s = za();
  return s && n.setAttribute("nonce", s), t.insertBefore(n, i), n;
}, Ma = function() {
  function e(r) {
    this.element = an(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === t) return s;
      }
      throw Le(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), La = function() {
  function e(r) {
    this.element = an(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Ha = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), jt = hr, Wa = { isServer: !hr, useCSSOMInjection: !ha }, on = function() {
  function e(r, t, n) {
    r === void 0 && (r = De), t === void 0 && (t = {});
    var o = this;
    this.options = B(B({}, Wa), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && hr && jt && (jt = !1, At(this)), tt(this, function() {
      return function(i) {
        for (var s = i.getTag(), u = s.length, l = "", b = function(h) {
          var m = function(R) {
            return gr.get(R);
          }(h);
          if (m === void 0) return "continue";
          var v = i.names.get(m), T = s.getGroup(h);
          if (v === void 0 || !v.size || T.length === 0) return "continue";
          var j = "".concat(ke, ".g").concat(h, '[id="').concat(m, '"]'), M = "";
          v !== void 0 && v.forEach(function(R) {
            R.length > 0 && (M += "".concat(R, ","));
          }), l += "".concat(T).concat(j, '{content:"').concat(M, '"}').concat(et);
        }, g = 0; g < u; g++) b(g);
        return l;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return or(r);
  }, e.prototype.rehydrate = function() {
    !this.server && hr && At(this);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(B(B({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Ha(o) : n ? new Ma(o) : new La(o);
    }(this.options), new Ia(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (or(r), this.names.has(r)) this.names.get(r).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(r, n);
    }
  }, e.prototype.insertRules = function(r, t, n) {
    this.registerName(r, t), this.getTag().insertRules(or(r), n);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(or(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Ya = /&/g, Ba = /^\s*\/\/.*$/gm;
function sn(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(n) {
      return "".concat(r, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = sn(t.children, r)), t;
  });
}
function qa(e) {
  var r, t, n, o = De, i = o.options, s = i === void 0 ? De : i, u = o.plugins, l = u === void 0 ? Sr : u, b = function(m, v, T) {
    return T.startsWith(t) && T.endsWith(t) && T.replaceAll(t, "").length > 0 ? ".".concat(r) : m;
  }, g = l.slice();
  g.push(function(m) {
    m.type === br && m.value.includes("&") && (m.props[0] = m.props[0].replace(Ya, t).replace(n, b));
  }), s.prefix && g.push(da), g.push(la);
  var h = function(m, v, T, j) {
    v === void 0 && (v = ""), T === void 0 && (T = ""), j === void 0 && (j = "&"), r = j, t = v, n = new RegExp("\\".concat(t, "\\b"), "g");
    var M = m.replace(Ba, ""), R = sa(T || v ? "".concat(T, " ").concat(v, " { ").concat(M, " }") : M);
    s.namespace && (R = sn(R, s.namespace));
    var S = [];
    return pr(R, ua(g.concat(fa(function(O) {
      return S.push(O);
    })))), S;
  };
  return h.hash = l.length ? l.reduce(function(m, v) {
    return v.name || Le(15), ve(m, v.name);
  }, Jt).toString() : "", h;
}
var Ga = new on(), Gr = qa(), cn = xe.createContext({ shouldForwardProp: void 0, styleSheet: Ga, stylis: Gr });
cn.Consumer;
xe.createContext(void 0);
function Ft() {
  return Ht(cn);
}
var Dt = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Gr);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, tt(this, function() {
      throw Le(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Gr), this.name + r.hash;
  }, e;
}(), Ua = function(e) {
  return e >= "A" && e <= "Z";
};
function Nt(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === "-" && e[0] === "-") return e;
    Ua(n) ? r += "-" + n.toLowerCase() : r += n;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var ln = function(e) {
  return e == null || e === !1 || e === "";
}, un = function(e) {
  var r, t, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ln(i) && (Array.isArray(i) && i.isCss || Ne(i) ? n.push("".concat(Nt(o), ":"), i, ";") : $e(i) ? n.push.apply(n, Ae(Ae(["".concat(o, " {")], un(i), !1), ["}"], !1)) : n.push("".concat(Nt(o), ": ").concat((r = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in pa || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function Se(e, r, t, n) {
  if (ln(e)) return [];
  if (rt(e)) return [".".concat(e.styledComponentId)];
  if (Ne(e)) {
    if (!Ne(i = e) || i.prototype && i.prototype.isReactComponent || !r) return [e];
    var o = e(r);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Dt || $e(o) || o === null || console.error("".concat(Qt(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Se(o, r, t, n);
  }
  var i;
  return e instanceof Dt ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : $e(e) ? un(e) : Array.isArray(e) ? Array.prototype.concat.apply(Sr, e.map(function(s) {
    return Se(s, r, t, n);
  })) : [e.toString()];
}
function Va(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ne(t) && !rt(t)) return !1;
  }
  return !0;
}
var Ka = Zt(Cr), Xa = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Va(r), this.componentId = t, this.baseHash = ve(Ka, t), this.baseStyle = n, on.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = we(o, this.staticRulesId);
    else {
      var i = It(Se(this.rules, r, t, n)), s = Br(ve(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var u = n(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, u);
      }
      o = we(o, s), this.staticRulesId = s;
    }
    else {
      for (var l = ve(this.baseHash, n.hash), b = "", g = 0; g < this.rules.length; g++) {
        var h = this.rules[g];
        if (typeof h == "string") b += h, process.env.NODE_ENV !== "production" && (l = ve(l, h));
        else if (h) {
          var m = It(Se(h, r, t, n));
          l = ve(l, m + g), b += m;
        }
      }
      if (b) {
        var v = Br(l >>> 0);
        t.hasNameForId(this.componentId, v) || t.insertRules(this.componentId, v, n(b, ".".concat(v), void 0, this.componentId)), o = we(o, v);
      }
    }
    return o;
  }, e;
}(), nt = xe.createContext(void 0);
nt.Consumer;
var Dr = {}, $t = /* @__PURE__ */ new Set();
function Ja(e, r, t) {
  var n = rt(e), o = e, i = !Fr(e), s = r.attrs, u = s === void 0 ? Sr : s, l = r.componentId, b = l === void 0 ? function(A, D) {
    var k = typeof A != "string" ? "sc" : Rt(A);
    Dr[k] = (Dr[k] || 0) + 1;
    var w = "".concat(k, "-").concat(wa(Cr + k + Dr[k]));
    return D ? "".concat(D, "-").concat(w) : w;
  }(r.displayName, r.parentComponentId) : l, g = r.displayName, h = g === void 0 ? function(A) {
    return Fr(A) ? "styled.".concat(A) : "Styled(".concat(Qt(A), ")");
  }(e) : g, m = r.displayName && r.componentId ? "".concat(Rt(r.displayName), "-").concat(r.componentId) : r.componentId || b, v = n && o.attrs ? o.attrs.concat(u).filter(Boolean) : u, T = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var j = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var M = r.shouldForwardProp;
      T = function(A, D) {
        return j(A, D) && M(A, D);
      };
    } else T = j;
  }
  var R = new Xa(t, m, n ? o.componentStyle : void 0);
  function S(A, D) {
    return function(k, w, ae) {
      var oe = k.attrs, kr = k.componentStyle, Er = k.defaultProps, Qe = k.foldedComponentIds, G = k.styledComponentId, ie = k.target, me = xe.useContext(nt), er = Ft(), Ee = k.shouldForwardProp || er.shouldForwardProp;
      process.env.NODE_ENV !== "production" && yt(G);
      var We = ma(w, me, Er) || De, V = function(Pe, se, fe) {
        for (var J, Z = B(B({}, se), { className: void 0, theme: fe }), de = 0; de < Pe.length; de += 1) {
          var _e = Ne(J = Pe[de]) ? J(Z) : J;
          for (var Q in _e) Z[Q] = Q === "className" ? we(Z[Q], _e[Q]) : Q === "style" ? B(B({}, Z[Q]), _e[Q]) : _e[Q];
        }
        return se.className && (Z.className = we(Z.className, se.className)), Z;
      }(oe, w, We), le = V.as || ie, ue = {};
      for (var H in V) V[H] === void 0 || H[0] === "$" || H === "as" || H === "theme" && V.theme === We || (H === "forwardedAs" ? ue.as = V.forwardedAs : Ee && !Ee(H, le) || (ue[H] = V[H], Ee || process.env.NODE_ENV !== "development" || Vn(H) || $t.has(H) || !Yr.has(le) || ($t.add(H), console.warn('styled-components: it looks like an unknown prop "'.concat(H, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Re = function(Pe, se) {
        var fe = Ft(), J = Pe.generateAndInjectStyles(se, fe.styleSheet, fe.stylis);
        return process.env.NODE_ENV !== "production" && yt(J), J;
      }(kr, V);
      process.env.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Re);
      var Ye = we(Qe, G);
      return Re && (Ye += " " + Re), V.className && (Ye += " " + V.className), ue[Fr(le) && !Yr.has(le) ? "class" : "className"] = Ye, ue.ref = ae, Wn(le, ue);
    }(O, A, D);
  }
  S.displayName = h;
  var O = xe.forwardRef(S);
  return O.attrs = v, O.componentStyle = R, O.displayName = h, O.shouldForwardProp = T, O.foldedComponentIds = n ? we(o.foldedComponentIds, o.styledComponentId) : "", O.styledComponentId = m, O.target = n ? o.target : e, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = n ? function(D) {
      for (var k = [], w = 1; w < arguments.length; w++) k[w - 1] = arguments[w];
      for (var ae = 0, oe = k; ae < oe.length; ae++) qr(D, oe[ae], !0);
      return D;
    }({}, o.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (ga(h, m), O.warnTooManyClasses = /* @__PURE__ */ function(A, D) {
    var k = {}, w = !1;
    return function(ae) {
      if (!w && (k[ae] = !0, Object.keys(k).length >= 200)) {
        var oe = D ? ' with the id of "'.concat(D, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(A).concat(oe, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), w = !0, k = {};
      }
    };
  }(h, m)), tt(O, function() {
    return ".".concat(O.styledComponentId);
  }), i && nn(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), O;
}
function zt(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}
var Mt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function fn(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  if (Ne(e) || $e(e)) return Mt(Se(zt(Sr, Ae([e], r, !0))));
  var n = e;
  return r.length === 0 && n.length === 1 && typeof n[0] == "string" ? Se(n) : Mt(Se(zt(n, r)));
}
function Ur(e, r, t) {
  if (t === void 0 && (t = De), !r) throw Le(1, r);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(r, t, fn.apply(void 0, Ae([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Ur(e, r, B(B({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Ur(e, r, B(B({}, t), o));
  }, n;
}
var dn = function(e) {
  return Ur(Ja, e);
}, pn = dn;
Yr.forEach(function(e) {
  pn[e] = dn(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ir = "__sc-".concat(ke, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ir] || (window[ir] = 0), window[ir] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ir] += 1);
const Za = pn.button`
	padding: 0.5rem 0.75rem;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;
	width: fit-content;
	height: fit-content;

	${({ color: e, theme: r }) => fn`
		background-color: ${r.buttons[e].bgColor};
		border-color: ${r.buttons[e].borderColor};
		color: ${r.buttons[e].textColor};

		&:hover {
			background-color: ${r.buttons[e].hover.bgColor};
			border-color: ${r.buttons[e].hover.borderColor};
			color: ${r.buttons[e].hover.textColor};
		}

		&:active {
			background-color: ${r.buttons[e].active.bgColor};
			border-color: ${r.buttons[e].active.borderColor};
			color: ${r.buttons[e].active.textColor};
		}

		&:disabled {
			background-color: ${r.buttons[e].disabled.bgColor};
			border-color: ${r.buttons[e].disabled.borderColor};
			color: ${r.buttons[e].disabled.textColor};
		}
	`}
`, Yo = Yn((e, r) => {
  const { color: t, startIcon: n, children: o, endIcon: i, ...s } = e, u = Ht(nt);
  return /* @__PURE__ */ Ct.jsx(Za, { color: t, ...s, theme: u, ref: r, children: /* @__PURE__ */ Ct.jsxs("div", { className: "flex flex-row justify-center items-center gap-1", children: [
    n,
    o,
    i
  ] }) });
});
var at = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(at || {});
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, q.apply(null, arguments);
}
function Qa(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Je(e, r) {
  return Je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Je(e, r);
}
function eo(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Je(e, r);
}
function Vr(e) {
  return Vr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vr(e);
}
function ro(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function hn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hn = function() {
    return !!e;
  })();
}
function to(e, r, t) {
  if (hn()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var o = new (e.bind.apply(e, n))();
  return t && Je(o, t.prototype), o;
}
function Kr(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Kr = function(n) {
    if (n === null || !ro(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, o);
    }
    function o() {
      return to(n, arguments, Vr(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Je(o, n);
  }, Kr(e);
}
var no = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function ao() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n = r[0], o = [], i;
  for (i = 1; i < r.length; i += 1)
    o.push(r[i]);
  return o.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
var ne = /* @__PURE__ */ function(e) {
  eo(r, e);
  function r(t) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this;
    else {
      for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
        i[s - 1] = arguments[s];
      n = e.call(this, ao.apply(void 0, [no[t]].concat(i))) || this;
    }
    return Qa(n);
  }
  return r;
}(/* @__PURE__ */ Kr(Error));
function Nr(e) {
  return Math.round(e * 255);
}
function oo(e, r, t) {
  return Nr(e) + "," + Nr(r) + "," + Nr(t);
}
function Ze(e, r, t, n) {
  if (n === void 0 && (n = oo), r === 0)
    return n(t, t, t);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * t - 1)) * r, s = i * (1 - Math.abs(o % 2 - 1)), u = 0, l = 0, b = 0;
  o >= 0 && o < 1 ? (u = i, l = s) : o >= 1 && o < 2 ? (u = s, l = i) : o >= 2 && o < 3 ? (l = i, b = s) : o >= 3 && o < 4 ? (l = s, b = i) : o >= 4 && o < 5 ? (u = s, b = i) : o >= 5 && o < 6 && (u = i, b = s);
  var g = t - i / 2, h = u + g, m = l + g, v = b + g;
  return n(h, m, v);
}
var Lt = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function io(e) {
  if (typeof e != "string") return e;
  var r = e.toLowerCase();
  return Lt[r] ? "#" + Lt[r] : e;
}
var so = /^#[a-fA-F0-9]{6}$/, co = /^#[a-fA-F0-9]{8}$/, lo = /^#[a-fA-F0-9]{3}$/, uo = /^#[a-fA-F0-9]{4}$/, $r = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, fo = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, po = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, ho = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function ze(e) {
  if (typeof e != "string")
    throw new ne(3);
  var r = io(e);
  if (r.match(so))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(co)) {
    var t = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: t
    };
  }
  if (r.match(lo))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(uo)) {
    var n = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: n
    };
  }
  var o = $r.exec(r);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = fo.exec(r.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var s = po.exec(r);
  if (s) {
    var u = parseInt("" + s[1], 10), l = parseInt("" + s[2], 10) / 100, b = parseInt("" + s[3], 10) / 100, g = "rgb(" + Ze(u, l, b) + ")", h = $r.exec(g);
    if (!h)
      throw new ne(4, r, g);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10)
    };
  }
  var m = ho.exec(r.substring(0, 50));
  if (m) {
    var v = parseInt("" + m[1], 10), T = parseInt("" + m[2], 10) / 100, j = parseInt("" + m[3], 10) / 100, M = "rgb(" + Ze(v, T, j) + ")", R = $r.exec(M);
    if (!R)
      throw new ne(4, r, M);
    return {
      red: parseInt("" + R[1], 10),
      green: parseInt("" + R[2], 10),
      blue: parseInt("" + R[3], 10),
      alpha: parseFloat("" + m[4]) > 1 ? parseFloat("" + m[4]) / 100 : parseFloat("" + m[4])
    };
  }
  throw new ne(5);
}
function go(e) {
  var r = e.red / 255, t = e.green / 255, n = e.blue / 255, o = Math.max(r, t, n), i = Math.min(r, t, n), s = (o + i) / 2;
  if (o === i)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: s,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: s
    };
  var u, l = o - i, b = s > 0.5 ? l / (2 - o - i) : l / (o + i);
  switch (o) {
    case r:
      u = (t - n) / l + (t < n ? 6 : 0);
      break;
    case t:
      u = (n - r) / l + 2;
      break;
    default:
      u = (r - t) / l + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
    saturation: b,
    lightness: s,
    alpha: e.alpha
  } : {
    hue: u,
    saturation: b,
    lightness: s
  };
}
function he(e) {
  return go(ze(e));
}
var mo = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, Xr = mo;
function ye(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function zr(e) {
  return ye(Math.round(e * 255));
}
function bo(e, r, t) {
  return Xr("#" + zr(e) + zr(r) + zr(t));
}
function mr(e, r, t) {
  return Ze(e, r, t, bo);
}
function yo(e, r, t) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number")
    return mr(e, r, t);
  if (typeof e == "object" && r === void 0 && t === void 0)
    return mr(e.hue, e.saturation, e.lightness);
  throw new ne(1);
}
function vo(e, r, t, n) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
    return n >= 1 ? mr(e, r, t) : "rgba(" + Ze(e, r, t) + "," + n + ")";
  if (typeof e == "object" && r === void 0 && t === void 0 && n === void 0)
    return e.alpha >= 1 ? mr(e.hue, e.saturation, e.lightness) : "rgba(" + Ze(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new ne(2);
}
function Jr(e, r, t) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number")
    return Xr("#" + ye(e) + ye(r) + ye(t));
  if (typeof e == "object" && r === void 0 && t === void 0)
    return Xr("#" + ye(e.red) + ye(e.green) + ye(e.blue));
  throw new ne(6);
}
function xr(e, r, t, n) {
  if (typeof e == "string" && typeof r == "number") {
    var o = ze(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
      return n >= 1 ? Jr(e, r, t) : "rgba(" + e + "," + r + "," + t + "," + n + ")";
    if (typeof e == "object" && r === void 0 && t === void 0 && n === void 0)
      return e.alpha >= 1 ? Jr(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new ne(7);
}
var wo = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, Co = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, So = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, xo = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
};
function ge(e) {
  if (typeof e != "object") throw new ne(8);
  if (Co(e)) return xr(e);
  if (wo(e)) return Jr(e);
  if (xo(e)) return vo(e);
  if (So(e)) return yo(e);
  throw new ne(8);
}
function gn(e, r, t) {
  return function() {
    var o = t.concat(Array.prototype.slice.call(arguments));
    return o.length >= r ? e.apply(this, o) : gn(e, r, o);
  };
}
function U(e) {
  return gn(e, e.length, []);
}
function ko(e, r) {
  if (r === "transparent") return r;
  var t = he(r);
  return ge(q({}, t, {
    hue: t.hue + parseFloat(e)
  }));
}
U(ko);
function He(e, r, t) {
  return Math.max(e, Math.min(r, t));
}
function Eo(e, r) {
  if (r === "transparent") return r;
  var t = he(r);
  return ge(q({}, t, {
    lightness: He(0, 1, t.lightness - parseFloat(e))
  }));
}
var Ro = U(Eo), sr = Ro;
function Po(e, r) {
  if (r === "transparent") return r;
  var t = he(r);
  return ge(q({}, t, {
    saturation: He(0, 1, t.saturation - parseFloat(e))
  }));
}
U(Po);
function _o(e, r) {
  if (r === "transparent") return r;
  var t = he(r);
  return ge(q({}, t, {
    lightness: He(0, 1, t.lightness + parseFloat(e))
  }));
}
var To = U(_o), Ve = To;
function Oo(e, r, t) {
  if (r === "transparent") return t;
  if (t === "transparent") return r;
  if (e === 0) return t;
  var n = ze(r), o = q({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), i = ze(t), s = q({}, i, {
    alpha: typeof i.alpha == "number" ? i.alpha : 1
  }), u = o.alpha - s.alpha, l = parseFloat(e) * 2 - 1, b = l * u === -1 ? l : l + u, g = 1 + l * u, h = (b / g + 1) / 2, m = 1 - h, v = {
    red: Math.floor(o.red * h + s.red * m),
    green: Math.floor(o.green * h + s.green * m),
    blue: Math.floor(o.blue * h + s.blue * m),
    alpha: o.alpha * parseFloat(e) + s.alpha * (1 - parseFloat(e))
  };
  return xr(v);
}
var Io = U(Oo), mn = Io;
function Ao(e, r) {
  if (r === "transparent") return r;
  var t = ze(r), n = typeof t.alpha == "number" ? t.alpha : 1, o = q({}, t, {
    alpha: He(0, 1, (n * 100 + parseFloat(e) * 100) / 100)
  });
  return xr(o);
}
U(Ao);
function jo(e, r) {
  if (r === "transparent") return r;
  var t = he(r);
  return ge(q({}, t, {
    saturation: He(0, 1, t.saturation + parseFloat(e))
  }));
}
U(jo);
function Fo(e, r) {
  return r === "transparent" ? r : ge(q({}, he(r), {
    hue: parseFloat(e)
  }));
}
U(Fo);
function Do(e, r) {
  return r === "transparent" ? r : ge(q({}, he(r), {
    lightness: parseFloat(e)
  }));
}
U(Do);
function No(e, r) {
  return r === "transparent" ? r : ge(q({}, he(r), {
    saturation: parseFloat(e)
  }));
}
U(No);
function $o(e, r) {
  return r === "transparent" ? r : mn(parseFloat(e), "rgb(0, 0, 0)", r);
}
U($o);
function zo(e, r) {
  return r === "transparent" ? r : mn(parseFloat(e), "rgb(255, 255, 255)", r);
}
U(zo);
function Mo(e, r) {
  if (r === "transparent") return r;
  var t = ze(r), n = typeof t.alpha == "number" ? t.alpha : 1, o = q({}, t, {
    alpha: He(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return xr(o);
}
U(Mo);
function te(e) {
  return {
    50: Ve(0.9, e),
    100: Ve(0.7, e),
    200: Ve(0.5, e),
    300: Ve(0.3, e),
    400: Ve(0.1, e),
    500: e,
    600: sr(0.1, e),
    700: sr(0.3, e),
    800: sr(0.5, e),
    900: sr(0.7, e)
  };
}
const d = {
  gray: { ...te("#EFEFEF") },
  green: { ...te("#00AE1C") },
  white: { ...te("#FFFFFF") },
  black: { ...te("#000000") },
  blue: { ...te("#0000FF") }
}, Lo = {
  themeName: at.DARK,
  defaultStyles: {
    bgColor: d.black[400],
    textColor: d.white[500],
    listItemActiveColor: d.black[300],
    listItemHoverColor: d.black[200]
  },
  themeColors: {
    primary: d.green[500],
    secondary: d.gray[700]
  },
  defaultColors: d,
  buttons: {
    primary: {
      bgColor: d.green[500],
      borderColor: d.green[500],
      textColor: d.white[500],
      active: {
        bgColor: d.green[400],
        borderColor: d.green[400],
        textColor: d.white[500]
      },
      disabled: {
        bgColor: d.green[600],
        borderColor: d.green[600],
        textColor: d.gray[600]
      },
      hover: {
        bgColor: d.green[500],
        borderColor: d.green[300],
        textColor: d.white[500]
      }
    },
    secondary: {
      bgColor: d.gray[700],
      borderColor: d.gray[600],
      textColor: d.white[500],
      active: {
        bgColor: d.gray[600],
        borderColor: d.gray[500],
        textColor: d.white[500]
      },
      disabled: {
        bgColor: d.gray[800],
        borderColor: d.gray[700],
        textColor: d.gray[700]
      },
      hover: {
        bgColor: d.gray[700],
        borderColor: d.white[500],
        textColor: d.white[500]
      }
    }
  },
  inputs: {
    color: d.white[500],
    borderColor: d.gray[600],
    labelColor: d.white[500],
    placeholderColor: d.white[600],
    disbled: {
      borderColor: d.gray[700],
      color: d.gray[700],
      labelColor: d.gray[700]
    },
    focused: {
      borderColor: d.blue[500]
    }
  },
  checkbox: {
    borderColor: d.white[500],
    labelColor: d.white[500],
    checked: {
      bgColor: d.green[500],
      borderColor: d.green[500],
      markerColor: d.white[500]
    },
    disabled: {
      borderColor: d.gray[700],
      labelColor: d.gray[700],
      checked: {
        bgColor: d.green[600],
        borderColor: d.green[600],
        markerColor: d.gray[500]
      }
    }
  },
  toast: {
    color: d.white[500],
    bgColor: d.black[500],
    borderColor: d.gray[500]
  },
  datepicker: {
    bgColor: d.black[300],
    color: d.white[500],
    availableDate: {
      bgColor: "transparent",
      color: d.black[500]
    },
    disabledDate: {
      bgColor: "transparent",
      color: d.gray[700]
    },
    selectedDate: {
      bgColor: d.green[500],
      color: d.white[500]
    },
    shadow: "none"
  }
}, p = {
  gray: { ...te("#EFEFEF") },
  green: { ...te("#00AE1C") },
  white: { ...te("#FFFFFF") },
  black: { ...te("#000000") },
  blue: { ...te("#0000FF") }
}, Ho = {
  themeName: at.LIGHT,
  defaultStyles: {
    bgColor: p.white[500],
    textColor: p.black[500],
    listItemActiveColor: p.gray[600],
    listItemHoverColor: p.gray[500]
  },
  themeColors: {
    primary: p.green[500],
    secondary: p.gray[500]
  },
  defaultColors: p,
  buttons: {
    primary: {
      bgColor: p.green[500],
      borderColor: p.green[500],
      textColor: p.white[500],
      active: {
        bgColor: p.green[400],
        borderColor: p.green[400],
        textColor: p.white[500]
      },
      disabled: {
        bgColor: p.green[600],
        borderColor: p.green[600],
        textColor: p.gray[600]
      },
      hover: {
        bgColor: p.green[500],
        borderColor: p.green[300],
        textColor: p.white[500]
      }
    },
    secondary: {
      bgColor: p.white[500],
      borderColor: p.gray[600],
      textColor: p.black[500],
      active: {
        bgColor: p.gray[600],
        borderColor: p.gray[600],
        textColor: p.black[500]
      },
      disabled: {
        bgColor: p.gray[600],
        borderColor: p.gray[700],
        textColor: p.gray[700]
      },
      hover: {
        bgColor: p.gray[500],
        borderColor: p.gray[400],
        textColor: p.black[500]
      }
    }
  },
  inputs: {
    color: p.black[500],
    borderColor: p.gray[700],
    labelColor: p.black[500],
    placeholderColor: p.black[300],
    disbled: {
      borderColor: p.gray[700],
      color: p.gray[700],
      labelColor: p.gray[700]
    },
    focused: {
      borderColor: p.blue[500]
    }
  },
  checkbox: {
    borderColor: p.black[500],
    labelColor: p.black[500],
    checked: {
      bgColor: p.green[500],
      borderColor: p.green[500],
      markerColor: p.white[500]
    },
    disabled: {
      labelColor: p.gray[700],
      borderColor: p.gray[600],
      checked: {
        bgColor: p.green[600],
        borderColor: p.green[600],
        markerColor: p.gray[500]
      }
    }
  },
  toast: {
    color: p.black[500],
    bgColor: p.white[500],
    borderColor: p.white[500]
  },
  datepicker: {
    bgColor: p.white[500],
    color: p.black[500],
    availableDate: {
      bgColor: "transparent",
      color: p.black[500]
    },
    disabledDate: {
      bgColor: "transparent",
      color: p.gray[700]
    },
    selectedDate: {
      bgColor: p.green[500],
      color: p.white[500]
    },
    shadow: "0px 4px 4px 0px #0000001a"
  }
}, Bo = {
  light: Ho,
  dark: Lo
};
export {
  Yo as Button,
  nt as ThemeContext,
  Lo as darkTheme,
  Ho as lightTheme,
  Bo as themes
};
//# sourceMappingURL=index.es.js.map
