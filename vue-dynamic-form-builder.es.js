var y_ = Object.defineProperty;
var p_ = (e, t, a) => t in e ? y_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var Ae = (e, t, a) => p_(e, typeof t != "symbol" ? t + "" : t, a);
import { getCurrentInstance as __, ref as se, onBeforeMount as Tm, watch as Rt, isRef as Wl, reactive as xn, onBeforeUnmount as Xd, computed as ee, unref as y, inject as sf, provide as lf, isReactive as g_, isReadonly as w_, nextTick as va, defineAsyncComponent as b_, createElementBlock as z, createCommentVNode as ue, openBlock as F, normalizeClass as fe, createTextVNode as an, toDisplayString as yt, createElementVNode as Se, defineComponent as la, useSlots as Ns, toRef as ql, onMounted as It, onUnmounted as Kl, createVNode as sa, createBlock as Ve, mergeProps as Zt, createSlots as ha, renderList as ut, withCtx as je, renderSlot as xe, normalizeProps as Jt, guardReactiveProps as Ra, resolveDynamicComponent as Xl, Teleport as k_, Transition as Ls, h as M_, render as of, withModifiers as ul, normalizeStyle as Ja, Fragment as We, useAttrs as D_, getCurrentScope as S_, onScopeDispose as T_, onBeforeUpdate as x_, withDirectives as Rs, vShow as Fl, withKeys as O_, vModelText as xm, shallowRef as A_ } from "vue";
function uf(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function Hn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uf(Object(a), !0).forEach(function(r) {
      C_(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : uf(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function C_(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function df(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((a, r) => (t.includes(r) || (a[r] = y(e[r])), a), {});
}
function Ji(e) {
  return typeof e == "function";
}
function Y_(e) {
  return g_(e) || w_(e);
}
function Om(e, t, a) {
  let r = e;
  const n = t.split(".");
  for (let i = 0; i < n.length; i++) {
    if (!r[n[i]]) return a;
    r = r[n[i]];
  }
  return r;
}
function No(e, t, a) {
  return ee(() => e.some((r) => Om(t, r, {
    [a]: !1
  })[a]));
}
function cf(e, t, a) {
  return ee(() => e.reduce((r, n) => {
    const i = Om(t, n, {
      [a]: !1
    })[a] || [];
    return r.concat(i);
  }, []));
}
function Am(e, t, a, r) {
  return e.call(r, y(t), y(a), r);
}
function Cm(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function P_(e, t, a, r, n, i, o) {
  let {
    $lazy: c,
    $rewardEarly: f
  } = n, m = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], v = arguments.length > 8 ? arguments[8] : void 0, p = arguments.length > 9 ? arguments[9] : void 0, g = arguments.length > 10 ? arguments[10] : void 0;
  const k = se(!!r.value), w = se(0);
  a.value = !1;
  const b = Rt([t, r].concat(m, g), () => {
    if (c && !r.value || f && !p.value && !a.value)
      return;
    let D;
    try {
      D = Am(e, t, v, o);
    } catch (T) {
      D = Promise.reject(T);
    }
    w.value++, a.value = !!w.value, k.value = !1, Promise.resolve(D).then((T) => {
      w.value--, a.value = !!w.value, i.value = T, k.value = Cm(T);
    }).catch((T) => {
      w.value--, a.value = !!w.value, i.value = T, k.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: k,
    $unwatch: b
  };
}
function $_(e, t, a, r, n, i, o, c) {
  let {
    $lazy: f,
    $rewardEarly: m
  } = r;
  const v = () => ({}), p = ee(() => {
    if (f && !a.value || m && !c.value)
      return !1;
    let g = !0;
    try {
      const k = Am(e, t, o, i);
      n.value = k, g = Cm(k);
    } catch (k) {
      n.value = k;
    }
    return g;
  });
  return {
    $unwatch: v,
    $invalid: p
  };
}
function R_(e, t, a, r, n, i, o, c, f, m, v) {
  const p = se(!1), g = e.$params || {}, k = se(null);
  let w, b;
  e.$async ? {
    $invalid: w,
    $unwatch: b
  } = P_(e.$validator, t, p, a, r, k, n, e.$watchTargets, f, m, v) : {
    $invalid: w,
    $unwatch: b
  } = $_(e.$validator, t, a, r, k, n, f, m);
  const D = e.$message;
  return {
    $message: Ji(D) ? ee(() => D(df({
      $pending: p,
      $invalid: w,
      $params: df(g),
      $model: t,
      $response: k,
      $validator: i,
      $propertyPath: c,
      $property: o
    }))) : D || "",
    $params: g,
    $pending: p,
    $invalid: w,
    $response: k,
    $unwatch: b
  };
}
function I_() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = y(e), a = Object.keys(t), r = {}, n = {}, i = {};
  let o = null;
  return a.forEach((c) => {
    const f = t[c];
    switch (!0) {
      case Ji(f.$validator):
        r[c] = f;
        break;
      case Ji(f):
        r[c] = {
          $validator: f
        };
        break;
      case c === "$validationGroups":
        o = f;
        break;
      case c.startsWith("$"):
        i[c] = f;
        break;
      default:
        n[c] = f;
    }
  }), {
    rules: r,
    nestedValidators: n,
    config: i,
    validationGroups: o
  };
}
const F_ = "__root";
function E_(e, t, a, r, n, i, o, c, f) {
  const m = Object.keys(e), v = r.get(n, e), p = se(!1), g = se(!1), k = se(0);
  if (v) {
    if (!v.$partial) return v;
    v.$unwatch(), p.value = v.$dirty.value;
  }
  const w = {
    $dirty: p,
    $path: n,
    $touch: () => {
      p.value || (p.value = !0);
    },
    $reset: () => {
      p.value && (p.value = !1);
    },
    $commit: () => {
    }
  };
  return m.length ? (m.forEach((b) => {
    w[b] = R_(e[b], t, w.$dirty, i, o, b, a, n, f, g, k);
  }), w.$externalResults = ee(() => c.value ? [].concat(c.value).map((b, D) => ({
    $propertyPath: n,
    $property: a,
    $validator: "$externalResults",
    $uid: `${n}-externalResult-${D}`,
    $message: b,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), w.$invalid = ee(() => {
    const b = m.some((D) => y(w[D].$invalid));
    return g.value = b, !!w.$externalResults.value.length || b;
  }), w.$pending = ee(() => m.some((b) => y(w[b].$pending))), w.$error = ee(() => w.$dirty.value ? w.$pending.value || w.$invalid.value : !1), w.$silentErrors = ee(() => m.filter((b) => y(w[b].$invalid)).map((b) => {
    const D = w[b];
    return xn({
      $propertyPath: n,
      $property: a,
      $validator: b,
      $uid: `${n}-${b}`,
      $message: D.$message,
      $params: D.$params,
      $response: D.$response,
      $pending: D.$pending
    });
  }).concat(w.$externalResults.value)), w.$errors = ee(() => w.$dirty.value ? w.$silentErrors.value : []), w.$unwatch = () => m.forEach((b) => {
    w[b].$unwatch();
  }), w.$commit = () => {
    g.value = !0, k.value = Date.now();
  }, r.set(n, e, w), w) : (v && r.set(n, e, w), w);
}
function N_(e, t, a, r, n, i, o) {
  const c = Object.keys(e);
  return c.length ? c.reduce((f, m) => (f[m] = Id({
    validations: e[m],
    state: t,
    key: m,
    parentKey: a,
    resultsCache: r,
    globalConfig: n,
    instance: i,
    externalResults: o
  }), f), {}) : {};
}
function L_(e, t, a) {
  const r = ee(() => [t, a].filter((w) => w).reduce((w, b) => w.concat(Object.values(y(b))), [])), n = ee({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((w) => w.$dirty) : !1);
    },
    set(w) {
      e.$dirty.value = w;
    }
  }), i = ee(() => {
    const w = y(e.$silentErrors) || [], b = r.value.filter((D) => (y(D).$silentErrors || []).length).reduce((D, T) => D.concat(...T.$silentErrors), []);
    return w.concat(b);
  }), o = ee(() => {
    const w = y(e.$errors) || [], b = r.value.filter((D) => (y(D).$errors || []).length).reduce((D, T) => D.concat(...T.$errors), []);
    return w.concat(b);
  }), c = ee(() => r.value.some((w) => w.$invalid) || y(e.$invalid) || !1), f = ee(() => r.value.some((w) => y(w.$pending)) || y(e.$pending) || !1), m = ee(() => r.value.some((w) => w.$dirty) || r.value.some((w) => w.$anyDirty) || n.value), v = ee(() => n.value ? f.value || c.value : !1), p = () => {
    e.$touch(), r.value.forEach((w) => {
      w.$touch();
    });
  }, g = () => {
    e.$commit(), r.value.forEach((w) => {
      w.$commit();
    });
  }, k = () => {
    e.$reset(), r.value.forEach((w) => {
      w.$reset();
    });
  };
  return r.value.length && r.value.every((w) => w.$dirty) && p(), {
    $dirty: n,
    $errors: o,
    $invalid: c,
    $anyDirty: m,
    $error: v,
    $pending: f,
    $touch: p,
    $reset: k,
    $silentErrors: i,
    $commit: g
  };
}
function Id(e) {
  let {
    validations: t,
    state: a,
    key: r,
    parentKey: n,
    childResults: i,
    resultsCache: o,
    globalConfig: c = {},
    instance: f,
    externalResults: m
  } = e;
  const v = n ? `${n}.${r}` : r, {
    rules: p,
    nestedValidators: g,
    config: k,
    validationGroups: w
  } = I_(t), b = Hn(Hn({}, c), k), D = r ? ee(() => {
    const Y = y(a);
    return Y ? y(Y[r]) : void 0;
  }) : a, T = Hn({}, y(m) || {}), C = ee(() => {
    const Y = y(m);
    return r ? Y ? y(Y[r]) : void 0 : Y;
  }), $ = E_(p, D, r, o, v, b, f, C, a), P = N_(g, D, v, o, b, f, C), G = {};
  w && Object.entries(w).forEach((Y) => {
    let [de, Q] = Y;
    G[de] = {
      $invalid: No(Q, P, "$invalid"),
      $error: No(Q, P, "$error"),
      $pending: No(Q, P, "$pending"),
      $errors: cf(Q, P, "$errors"),
      $silentErrors: cf(Q, P, "$silentErrors")
    };
  });
  const {
    $dirty: R,
    $errors: E,
    $invalid: U,
    $anyDirty: H,
    $error: q,
    $pending: J,
    $touch: ge,
    $reset: we,
    $silentErrors: I,
    $commit: V
  } = L_($, P, i), N = r ? ee({
    get: () => y(D),
    set: (Y) => {
      R.value = !0;
      const de = y(a), Q = y(m);
      Q && (Q[r] = T[r]), Wl(de[r]) ? de[r].value = Y : de[r] = Y;
    }
  }) : null;
  r && b.$autoDirty && Rt(D, () => {
    R.value || ge();
    const Y = y(m);
    Y && (Y[r] = T[r]);
  }, {
    flush: "sync"
  });
  async function te() {
    return ge(), b.$rewardEarly && (V(), await va()), await va(), new Promise((Y) => {
      if (!J.value) return Y(!U.value);
      const de = Rt(J, () => {
        Y(!U.value), de();
      });
    });
  }
  function me(Y) {
    return (i.value || {})[Y];
  }
  function K() {
    Wl(m) ? m.value = T : Object.keys(T).length === 0 ? Object.keys(m).forEach((Y) => {
      delete m[Y];
    }) : Object.assign(m, T);
  }
  return xn(Hn(Hn(Hn({}, $), {}, {
    $model: N,
    $dirty: R,
    $error: q,
    $errors: E,
    $invalid: U,
    $anyDirty: H,
    $pending: J,
    $touch: ge,
    $reset: we,
    $path: v || F_,
    $silentErrors: I,
    $validate: te,
    $commit: V
  }, i && {
    $getResultsForChild: me,
    $clearExternalResults: K,
    $validationGroups: G
  }), P));
}
class W_ {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(t, a, r) {
    this.storage.set(t, {
      rules: a,
      result: r
    });
  }
  checkRulesValidity(t, a, r) {
    const n = Object.keys(r), i = Object.keys(a);
    return i.length !== n.length || !i.every((c) => n.includes(c)) ? !1 : i.every((c) => a[c].$params ? Object.keys(a[c].$params).every((f) => y(r[c].$params[f]) === y(a[c].$params[f])) : !0);
  }
  get(t, a) {
    const r = this.storage.get(t);
    if (!r) return;
    const {
      rules: n,
      result: i
    } = r, o = this.checkRulesValidity(t, a, n), c = i.$unwatch ? i.$unwatch : () => ({});
    return o ? i : {
      $dirty: i.$dirty,
      $partial: !0,
      $unwatch: c
    };
  }
}
const zi = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, ff = Symbol("vuelidate#injectChildResults"), hf = Symbol("vuelidate#removeChildResults");
function q_(e) {
  let {
    $scope: t,
    instance: a
  } = e;
  const r = {}, n = se([]), i = ee(() => n.value.reduce((v, p) => (v[p] = y(r[p]), v), {}));
  function o(v, p) {
    let {
      $registerAs: g,
      $scope: k,
      $stopPropagation: w
    } = p;
    w || t === zi.COLLECT_NONE || k === zi.COLLECT_NONE || t !== zi.COLLECT_ALL && t !== k || (r[g] = v, n.value.push(g));
  }
  a.__vuelidateInjectInstances = [].concat(a.__vuelidateInjectInstances || [], o);
  function c(v) {
    n.value = n.value.filter((p) => p !== v), delete r[v];
  }
  a.__vuelidateRemoveInstances = [].concat(a.__vuelidateRemoveInstances || [], c);
  const f = sf(ff, []);
  lf(ff, a.__vuelidateInjectInstances);
  const m = sf(hf, []);
  return lf(hf, a.__vuelidateRemoveInstances), {
    childResults: i,
    sendValidationResultsToParent: f,
    removeValidationResultsFromParent: m
  };
}
function Ym(e) {
  return new Proxy(e, {
    get(t, a) {
      return typeof t[a] == "object" ? Ym(t[a]) : ee(() => t[a]);
    }
  });
}
let mf = 0;
function V_(e, t) {
  var a;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: n,
    $scope: i = zi.COLLECT_ALL,
    $stopPropagation: o,
    $externalResults: c,
    currentVueInstance: f
  } = r;
  const m = f || ((a = __()) === null || a === void 0 ? void 0 : a.proxy), v = m ? m.$options : {};
  n || (mf += 1, n = `_vuelidate_${mf}`);
  const p = se({}), g = new W_(), {
    childResults: k,
    sendValidationResultsToParent: w,
    removeValidationResultsFromParent: b
  } = m ? q_({
    $scope: i,
    instance: m
  }) : {
    childResults: se({})
  };
  if (!e && v.validations) {
    const D = v.validations;
    t = se({}), Tm(() => {
      t.value = m, Rt(() => Ji(D) ? D.call(t.value, new Ym(t.value)) : D, (T) => {
        p.value = Id({
          validations: T,
          state: t,
          childResults: k,
          resultsCache: g,
          globalConfig: r,
          instance: m,
          externalResults: c || m.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), r = v.validationsConfig || r;
  } else {
    const D = Wl(e) || Y_(e) ? e : xn(e || {});
    Rt(D, (T) => {
      p.value = Id({
        validations: T,
        state: t,
        childResults: k,
        resultsCache: g,
        globalConfig: r,
        instance: m ?? {},
        externalResults: c
      });
    }, {
      immediate: !0
    });
  }
  return m && (w.forEach((D) => D(p, {
    $registerAs: n,
    $scope: i,
    $stopPropagation: o
  })), Xd(() => b.forEach((D) => D(n)))), ee(() => Hn(Hn({}, y(p.value)), k.value));
}
const mt = {
  mainDiv: "textField__default__mainDiv",
  field: {
    mainDiv: "textField__default__field__mainDiv",
    wrapper: "textField__default__field__wrapper",
    container: "textField__default__field__container",
    label: {
      label: "textField__default__field__container__label",
      mandatory: "textField__default__field__container__label__mandatory"
    },
    password: {
      container: "textField__password__field__container",
      show: "textField__password__field__show"
    }
  },
  fieldAndError: {
    wrapper: "textField__default__field__container__fieldAndError__wrapper",
    fieldAndIcon: {
      wrapper: "textField__default__field__container__fieldAndError__fieldAndIcon__wrapper",
      fieldWithIcon: "textField__default__field__container__fieldAndError__fieldAndIcon__fieldWithIcon"
    },
    field: "textField__default__field__container__fieldAndError__field",
    fieldError: "textField__default__field__container__fieldAndError__field__error",
    radioField: {
      wrapper: "textField__default__field__container__fieldAndError__radioField__wrapper",
      container: "textField__default__field__container__fieldAndError__radioField__container",
      input: "textField__default__field__container__fieldAndError__radioField__input",
      label: "textField__default__field__container__fieldAndError__radioField__label"
    },
    selectField: {
      wrapper: "textField__default__field__container__fieldAndError__select__wrapper",
      field: "textField__default__field__container__fieldAndError__select__field",
      labelAndIcon: {
        wrapper: "textField__default__field__container__fieldAndError__select__labelAndIcon__wrapper",
        label: "textField__default__field__container__fieldAndError__select__labelAndIcon__label",
        icon: {
          icon: "textField__default__field__container__fieldAndError__select__labelAndIcon__icon__icon",
          path: "textField__default__field__container__fieldAndError__select__labelAndIcon__icon__path"
        }
      },
      dropdown: {
        wrapper: "textField__default__field__container__fieldAndError__select__dropdown__wrapper",
        input: "textField__default__field__container__fieldAndError__select__dropdown__input",
        list: "textField__default__field__container__fieldAndError__select__dropdown__list",
        item: "textField__default__field__container__fieldAndError__select__dropdown__item",
        itemSelected: "textField__default__field__container__fieldAndError__select__dropdown__item__selected"
      }
    },
    multiSelect: {
      mainWrapper: "textField__default__field__container__fieldAndError__multiSelect__mainWrapper",
      field: "textField__default__field__container__fieldAndError__multiSelect__field",
      labelAndIcon: {
        wrapper: "textField__default__field__container__fieldAndError__select__labelAndIcon__wrapper",
        label: "textField__default__field__container__fieldAndError__multiSelect__labelAndIcon__label",
        icon: {
          icon: "textField__default__field__container__fieldAndError__multiSelect__labelAndIcon__icon__icon",
          path: "textField__default__field__container__fieldAndError__multiSelect__labelAndIcon__icon__path"
        },
        tag: {
          view: {
            view: "textField__default__field__container__fieldAndError__multiSelect__tag__view",
            wrapper: "textField__default__field__container__fieldAndError__multiSelect__tag__view__wrapper",
            container: "textField__default__field__container__fieldAndError__multiSelect__tag__view__container",
            value: "textField__default__field__container__fieldAndError__multiSelect__tag__view__value",
            remove: {
              container: "textField__default__field__container__fieldAndError__multiSelect__tag__view__remove__container",
              value: "textField__default__field__container__fieldAndError__multiSelect__tag__view__remove__value"
            }
          }
        },
        dropdown: {
          wrapper: "textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__wrapper",
          input: "textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__input",
          container: {
            container: "textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container",
            box: "textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__box",
            icon: {
              icon: "textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__icon__icon",
              path: ["textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__icon__path1", "textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__icon__path2"]
            },
            item: "textField__default__field__container__fieldAndError__multiSelect__tag__dropdown__container__item"
          }
        }
      }
    },
    error: {
      wrapper: "textField__default__field__container__fieldAndError__error__wrapper",
      message: "textField__default__field__container__fieldAndError__error__message"
    },
    submit: {
      wrapper: "textField__default__submit__wrapper",
      button: "textField__default__submit__button"
    },
    insetIcon: {
      wrapper: "textField__default__field__insetIcon__wrapper",
      icon: "textField__default__field__insetIcon__icon",
      path: ["textField__default__field__insetIcon__path1", "textField__default__field__insetIcon__path2"]
    }
  }
}, vf = {
  iconSearch: () => import("./iconSearch-DGsb0rnI.js"),
  iconPlus: () => import("./iconPlus-7twkCtM_.js"),
  iconMinus: () => import("./iconMinus-DKQlBe4n.js"),
  iconEdit: () => import("./iconEdit-BX_gSNnX.js"),
  iconDestroy: () => import("./iconDestroy-D1o3FbuV.js"),
  iconDownload: () => import("./iconDownload-BoX4rG4Y.js"),
  iconList: () => import("./iconList-4S1mTkjt.js"),
  iconView: () => import("./iconView-CAbPhvqS.js"),
  iconEmail: () => import("./iconEmail-CJzwiVgg.js"),
  iconMessage: () => import("./iconMessage-BbQTxmHC.js"),
  iconSorting: () => import("./iconSorting-C8UtSG-K.js"),
  iconPresent: () => import("./iconPresent-B5S_heL2.js"),
  iconAddUser: () => import("./iconAddUser-BR-tMTgN.js"),
  iconPhoneText: () => import("./iconPhoneText-D8HyLHBU.js"),
  iconLock: () => import("./iconLock-5IARbknS.js")
}, Lo = {};
function H_(e, t, a) {
  if (!e) {
    console.error(`Missing component name or type for index ${t}`);
    return;
  }
  Lo[e] ? a.value[t] = Lo[e] : (a.value[t] = b_(
    vf[e] || vf.iconPlus
  ), Lo[e] = a.value[t]);
}
const j_ = ["for"], U_ = {
  __name: "FieldLabel",
  props: {
    label: { type: String, required: !0 },
    forId: { type: String, required: !0 },
    isMandatory: { type: Boolean, default: !1 },
    baseLabelClass: { type: String, default: "" },
    customLabelClass: { type: String, default: "" },
    uniqueLabelClass: { type: String, default: "" },
    baseMandatoryClass: { type: String, default: "" },
    customMandatoryClass: { type: String, default: "" },
    uniqueMandatoryClass: { type: String, default: "" }
  },
  setup(e) {
    return (t, a) => e.label ? (F(), z("label", {
      key: 0,
      for: e.forId,
      class: fe([
        e.baseLabelClass,
        e.customLabelClass,
        e.uniqueLabelClass
      ])
    }, [
      e.isMandatory ? (F(), z("span", {
        key: 0,
        class: fe([
          e.baseMandatoryClass,
          e.customMandatoryClass,
          e.uniqueMandatoryClass
        ])
      }, " * ", 2)) : ue("", !0),
      an(" " + yt(e.label), 1)
    ], 10, j_)) : ue("", !0);
  }
}, B_ = ["id", "type", "placeholder", "value"], G_ = {
  __name: "TextField",
  props: {
    id: { type: String, required: !0 },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    modelValue: { required: !0 },
    hasError: { type: Boolean, default: !1 },
    baseFieldClass: { type: String, default: "" },
    customFieldClass: { type: String, default: "" },
    uniqueFieldClass: { type: String, default: "" },
    baseIconPaddingClass: { type: String, default: "" },
    customIconPaddingClass: { type: String, default: "" },
    uniqueIconPaddingClass: { type: String, default: "" }
  },
  emits: ["blur", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t;
    function n() {
      r("blur", a.id);
    }
    function i(o) {
      r("update:modelValue", o.target.value);
    }
    return (o, c) => (F(), z("input", {
      id: e.id,
      type: e.type,
      placeholder: e.placeholder,
      value: e.modelValue,
      class: fe([
        e.baseFieldClass,
        e.customFieldClass,
        e.uniqueFieldClass,
        { textField__default__error: e.hasError },
        e.baseIconPaddingClass,
        e.customIconPaddingClass,
        e.uniqueIconPaddingClass
      ]),
      onBlur: n,
      onInput: i
    }, null, 42, B_));
  }
}, z_ = ["id", "type", "value", "placeholder"], Q_ = {
  __name: "PasswordField",
  props: {
    id: { type: String, required: !0 },
    placeholder: { type: String, default: "" },
    modelValue: { required: !0 },
    hasError: { type: Boolean, default: !1 },
    baseFieldClass: { type: String, default: "" },
    customFieldClass: { type: String, default: "" },
    uniqueFieldClass: { type: String, default: "" },
    baseIconPaddingClass: { type: String, default: "" },
    customIconPaddingClass: { type: String, default: "" },
    uniqueIconPaddingClass: { type: String, default: "" },
    containerClass: { type: Array, default: () => [] },
    toggleClass: { type: Array, default: () => [] }
  },
  emits: ["blur", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = se(!1);
    function i(f) {
      r("update:modelValue", f.target.value);
    }
    function o() {
      r("blur", a.id);
    }
    function c() {
      n.value = !n.value;
    }
    return (f, m) => (F(), z("div", {
      class: fe(e.containerClass)
    }, [
      Se("input", {
        id: e.id,
        type: n.value ? "text" : "password",
        value: e.modelValue,
        placeholder: e.placeholder,
        class: fe([
          e.baseFieldClass,
          e.customFieldClass,
          e.uniqueFieldClass,
          { textField__default__error: e.hasError },
          e.baseIconPaddingClass,
          e.customIconPaddingClass,
          e.uniqueIconPaddingClass
        ]),
        onBlur: o,
        onInput: i
      }, null, 42, z_),
      Se("div", {
        class: fe([
          e.toggleClass,
          { "password-visible": n.value, "password-hidden": !n.value }
        ]),
        onClick: c,
        style: { cursor: "pointer" }
      }, yt(n.value ? "Hide" : "Show"), 3)
    ], 2));
  }
}, Pm = 6048e5, K_ = 864e5, X_ = 6e4, $m = 36e5, Z_ = 1e3, yf = Symbol.for("constructDateFrom");
function dt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && yf in e ? e[yf](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ie(e, t) {
  return dt(t || e, e);
}
function cr(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in);
  return isNaN(t) ? dt((a == null ? void 0 : a.in) || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function mr(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in);
  if (isNaN(t)) return dt(e, NaN);
  if (!t)
    return r;
  const n = r.getDate(), i = dt(e, r.getTime());
  i.setMonth(r.getMonth() + t + 1, 0);
  const o = i.getDate();
  return n >= o ? i : (r.setFullYear(
    i.getFullYear(),
    i.getMonth(),
    n
  ), r);
}
function Rm(e, t, a) {
  const {
    years: r = 0,
    months: n = 0,
    weeks: i = 0,
    days: o = 0,
    hours: c = 0,
    minutes: f = 0,
    seconds: m = 0
  } = t, v = Ie(e, a == null ? void 0 : a.in), p = n || r ? mr(v, n + r * 12) : v, g = o || i ? cr(p, o + i * 7) : p, k = f + c * 60, b = (m + k * 60) * 1e3;
  return dt(e, +g + b);
}
function J_(e, t, a) {
  return dt(e, +Ie(e) + t);
}
function eg(e, t, a) {
  return J_(e, t * $m);
}
let tg = {};
function Ws() {
  return tg;
}
function vr(e, t) {
  var c, f, m, v;
  const a = Ws(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? a.weekStartsOn ?? ((v = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? 0, n = Ie(e, t == null ? void 0 : t.in), i = n.getDay(), o = (i < r ? 7 : 0) + i - r;
  return n.setDate(n.getDate() - o), n.setHours(0, 0, 0, 0), n;
}
function dl(e, t) {
  return vr(e, { ...t, weekStartsOn: 1 });
}
function Im(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in), r = a.getFullYear(), n = dt(a, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const i = dl(n), o = dt(a, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const c = dl(o);
  return a.getTime() >= i.getTime() ? r + 1 : a.getTime() >= c.getTime() ? r : r - 1;
}
function eo(e) {
  const t = Ie(e), a = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return a.setUTCFullYear(t.getFullYear()), +e - +a;
}
function Zl(e, ...t) {
  const a = dt.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(a);
}
function pf(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in);
  return a.setHours(0, 0, 0, 0), a;
}
function Fm(e, t, a) {
  const [r, n] = Zl(
    a == null ? void 0 : a.in,
    e,
    t
  ), i = pf(r), o = pf(n), c = +i - eo(i), f = +o - eo(o);
  return Math.round((c - f) / K_);
}
function ag(e, t) {
  const a = Im(e, t), r = dt(e, 0);
  return r.setFullYear(a, 0, 4), r.setHours(0, 0, 0, 0), dl(r);
}
function rg(e, t, a) {
  return mr(e, t * 3, a);
}
function Zd(e, t, a) {
  return mr(e, t * 12, a);
}
function _f(e, t) {
  const a = +Ie(e) - +Ie(t);
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Em(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function El(e) {
  return !(!Em(e) && typeof e != "number" || isNaN(+Ie(e)));
}
function gf(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in);
  return Math.trunc(a.getMonth() / 3) + 1;
}
function ng(e, t, a) {
  const [r, n] = Zl(
    a == null ? void 0 : a.in,
    e,
    t
  );
  return r.getFullYear() - n.getFullYear();
}
function sg(e, t, a) {
  const [r, n] = Zl(
    a == null ? void 0 : a.in,
    e,
    t
  ), i = _f(r, n), o = Math.abs(ng(r, n));
  r.setFullYear(1584), n.setFullYear(1584);
  const c = _f(r, n) === -i, f = i * (o - +c);
  return f === 0 ? 0 : f;
}
function Nm(e, t) {
  const [a, r] = Zl(e, t.start, t.end);
  return { start: a, end: r };
}
function Lm(e, t) {
  const { start: a, end: r } = Nm(t == null ? void 0 : t.in, e);
  let n = +a > +r;
  const i = n ? +a : +r, o = n ? r : a;
  o.setHours(0, 0, 0, 0);
  let c = 1;
  const f = [];
  for (; +o <= i; )
    f.push(dt(a, o)), o.setDate(o.getDate() + c), o.setHours(0, 0, 0, 0);
  return n ? f.reverse() : f;
}
function Ps(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in), r = a.getMonth(), n = r - r % 3;
  return a.setMonth(n, 1), a.setHours(0, 0, 0, 0), a;
}
function lg(e, t) {
  const { start: a, end: r } = Nm(t == null ? void 0 : t.in, e);
  let n = +a > +r;
  const i = n ? +Ps(a) : +Ps(r);
  let o = Ps(n ? r : a), c = 1;
  const f = [];
  for (; +o <= i; )
    f.push(dt(a, o)), o = rg(o, c);
  return n ? f.reverse() : f;
}
function ig(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in);
  return a.setDate(1), a.setHours(0, 0, 0, 0), a;
}
function Wm(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in), r = a.getFullYear();
  return a.setFullYear(r + 1, 0, 0), a.setHours(23, 59, 59, 999), a;
}
function Vl(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in);
  return a.setFullYear(a.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function qm(e, t) {
  var c, f, m, v;
  const a = Ws(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? a.weekStartsOn ?? ((v = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? 0, n = Ie(e, t == null ? void 0 : t.in), i = n.getDay(), o = (i < r ? -7 : 0) + 6 - (i - r);
  return n.setDate(n.getDate() + o), n.setHours(23, 59, 59, 999), n;
}
function wf(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in), r = a.getMonth(), n = r - r % 3 + 3;
  return a.setMonth(n, 0), a.setHours(23, 59, 59, 999), a;
}
const og = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, ug = (e, t, a) => {
  let r;
  const n = og[e];
  return typeof n == "string" ? r = n : t === 1 ? r = n.one : r = n.other.replace("{{count}}", t.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Wo(e) {
  return (t = {}) => {
    const a = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[a] || e.formats[e.defaultWidth];
  };
}
const dg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, cg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, fg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hg = {
  date: Wo({
    formats: dg,
    defaultWidth: "full"
  }),
  time: Wo({
    formats: cg,
    defaultWidth: "full"
  }),
  dateTime: Wo({
    formats: fg,
    defaultWidth: "full"
  })
}, mg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, vg = (e, t, a, r) => mg[e];
function Al(e) {
  return (t, a) => {
    const r = a != null && a.context ? String(a.context) : "standalone";
    let n;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, c = a != null && a.width ? String(a.width) : o;
      n = e.formattingValues[c] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, c = a != null && a.width ? String(a.width) : e.defaultWidth;
      n = e.values[c] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return n[i];
  };
}
const yg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, pg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, _g = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, gg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, wg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, bg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, kg = (e, t) => {
  const a = Number(e), r = a % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, Mg = {
  ordinalNumber: kg,
  era: Al({
    values: yg,
    defaultWidth: "wide"
  }),
  quarter: Al({
    values: pg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Al({
    values: _g,
    defaultWidth: "wide"
  }),
  day: Al({
    values: gg,
    defaultWidth: "wide"
  }),
  dayPeriod: Al({
    values: wg,
    defaultWidth: "wide",
    formattingValues: bg,
    defaultFormattingWidth: "wide"
  })
};
function Cl(e) {
  return (t, a = {}) => {
    const r = a.width, n = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    const o = i[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(c) ? Sg(c, (p) => p.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Dg(c, (p) => p.test(o))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(f) : f, m = a.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      a.valueCallback(m)
    ) : m;
    const v = t.slice(o.length);
    return { value: m, rest: v };
  };
}
function Dg(e, t) {
  for (const a in e)
    if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a]))
      return a;
}
function Sg(e, t) {
  for (let a = 0; a < e.length; a++)
    if (t(e[a]))
      return a;
}
function Tg(e) {
  return (t, a = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const n = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = a.valueCallback ? a.valueCallback(o) : o;
    const c = t.slice(n.length);
    return { value: o, rest: c };
  };
}
const xg = /^(\d+)(th|st|nd|rd)?/i, Og = /\d+/i, Ag = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Cg = {
  any: [/^b/i, /^(a|c)/i]
}, Yg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $g = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Rg = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ig = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Fg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Eg = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ng = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Lg = {
  ordinalNumber: Tg({
    matchPattern: xg,
    parsePattern: Og,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Cl({
    matchPatterns: Ag,
    defaultMatchWidth: "wide",
    parsePatterns: Cg,
    defaultParseWidth: "any"
  }),
  quarter: Cl({
    matchPatterns: Yg,
    defaultMatchWidth: "wide",
    parsePatterns: Pg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Cl({
    matchPatterns: $g,
    defaultMatchWidth: "wide",
    parsePatterns: Rg,
    defaultParseWidth: "any"
  }),
  day: Cl({
    matchPatterns: Ig,
    defaultMatchWidth: "wide",
    parsePatterns: Fg,
    defaultParseWidth: "any"
  }),
  dayPeriod: Cl({
    matchPatterns: Eg,
    defaultMatchWidth: "any",
    parsePatterns: Ng,
    defaultParseWidth: "any"
  })
}, Vm = {
  code: "en-US",
  formatDistance: ug,
  formatLong: hg,
  formatRelative: vg,
  localize: Mg,
  match: Lg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Wg(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in);
  return Fm(a, Vl(a)) + 1;
}
function Jd(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in), r = +dl(a) - +ag(a);
  return Math.round(r / Pm) + 1;
}
function ec(e, t) {
  var v, p, g, k;
  const a = Ie(e, t == null ? void 0 : t.in), r = a.getFullYear(), n = Ws(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (v = t == null ? void 0 : t.locale) == null ? void 0 : v.options) == null ? void 0 : p.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((k = (g = n.locale) == null ? void 0 : g.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, o = dt((t == null ? void 0 : t.in) || e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const c = vr(o, t), f = dt((t == null ? void 0 : t.in) || e, 0);
  f.setFullYear(r, 0, i), f.setHours(0, 0, 0, 0);
  const m = vr(f, t);
  return +a >= +c ? r + 1 : +a >= +m ? r : r - 1;
}
function qg(e, t) {
  var c, f, m, v;
  const a = Ws(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((v = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, n = ec(e, t), i = dt((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(n, 0, r), i.setHours(0, 0, 0, 0), vr(i, t);
}
function tc(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in), r = +vr(a, t) - +qg(a, t);
  return Math.round(r / Pm) + 1;
}
function ot(e, t) {
  const a = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return a + r;
}
const Wn = {
  // Year
  y(e, t) {
    const a = e.getFullYear(), r = a > 0 ? a : 1 - a;
    return ot(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const a = e.getMonth();
    return t === "M" ? String(a + 1) : ot(a + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ot(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ot(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ot(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ot(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ot(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const a = t.length, r = e.getMilliseconds(), n = Math.trunc(
      r * Math.pow(10, a - 3)
    );
    return ot(n, t.length);
  }
}, Js = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, bf = {
  // Era
  G: function(e, t, a) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return a.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return a.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return a.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, a) {
    if (t === "yo") {
      const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
      return a.ordinalNumber(n, { unit: "year" });
    }
    return Wn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, a, r) {
    const n = ec(e, r), i = n > 0 ? n : 1 - n;
    if (t === "YY") {
      const o = i % 100;
      return ot(o, 2);
    }
    return t === "Yo" ? a.ordinalNumber(i, { unit: "year" }) : ot(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const a = Im(e);
    return ot(a, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const a = e.getFullYear();
    return ot(a, t.length);
  },
  // Quarter
  Q: function(e, t, a) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return ot(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return a.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, a) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return ot(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return a.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, a) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Wn.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return a.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return a.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return a.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return a.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, a) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return ot(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return a.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return a.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return a.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return a.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, a, r) {
    const n = tc(e, r);
    return t === "wo" ? a.ordinalNumber(n, { unit: "week" }) : ot(n, t.length);
  },
  // ISO week of year
  I: function(e, t, a) {
    const r = Jd(e);
    return t === "Io" ? a.ordinalNumber(r, { unit: "week" }) : ot(r, t.length);
  },
  // Day of the month
  d: function(e, t, a) {
    return t === "do" ? a.ordinalNumber(e.getDate(), { unit: "date" }) : Wn.d(e, t);
  },
  // Day of year
  D: function(e, t, a) {
    const r = Wg(e);
    return t === "Do" ? a.ordinalNumber(r, { unit: "dayOfYear" }) : ot(r, t.length);
  },
  // Day of week
  E: function(e, t, a) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return a.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return a.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, a, r) {
    const n = e.getDay(), i = (n - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return ot(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return a.ordinalNumber(i, { unit: "day" });
      case "eee":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, a, r) {
    const n = e.getDay(), i = (n - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return ot(i, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return a.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return a.day(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return a.day(n, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return a.day(n, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return a.day(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, a) {
    const r = e.getDay(), n = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(n);
      // 02
      case "ii":
        return ot(n, t.length);
      // 2nd
      case "io":
        return a.ordinalNumber(n, { unit: "day" });
      // Tue
      case "iii":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return a.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return a.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, a) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, a) {
    const r = e.getHours();
    let n;
    switch (r === 12 ? n = Js.noon : r === 0 ? n = Js.midnight : n = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, a) {
    const r = e.getHours();
    let n;
    switch (r >= 17 ? n = Js.evening : r >= 12 ? n = Js.afternoon : r >= 4 ? n = Js.morning : n = Js.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, a) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), a.ordinalNumber(r, { unit: "hour" });
    }
    return Wn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, a) {
    return t === "Ho" ? a.ordinalNumber(e.getHours(), { unit: "hour" }) : Wn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, a) {
    const r = e.getHours() % 12;
    return t === "Ko" ? a.ordinalNumber(r, { unit: "hour" }) : ot(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, a) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? a.ordinalNumber(r, { unit: "hour" }) : ot(r, t.length);
  },
  // Minute
  m: function(e, t, a) {
    return t === "mo" ? a.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Wn.m(e, t);
  },
  // Second
  s: function(e, t, a) {
    return t === "so" ? a.ordinalNumber(e.getSeconds(), { unit: "second" }) : Wn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Wn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, a) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Mf(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ys(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ys(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, a) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Mf(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ys(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ys(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, a) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + kf(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Ys(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, a) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + kf(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Ys(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, a) {
    const r = Math.trunc(+e / 1e3);
    return ot(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, a) {
    return ot(+e, t.length);
  }
};
function kf(e, t = "") {
  const a = e > 0 ? "-" : "+", r = Math.abs(e), n = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? a + String(n) : a + String(n) + t + ot(i, 2);
}
function Mf(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ot(Math.abs(e) / 60, 2) : Ys(e, t);
}
function Ys(e, t = "") {
  const a = e > 0 ? "-" : "+", r = Math.abs(e), n = ot(Math.trunc(r / 60), 2), i = ot(r % 60, 2);
  return a + n + t + i;
}
const Df = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Hm = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Vg = (e, t) => {
  const a = e.match(/(P+)(p+)?/) || [], r = a[1], n = a[2];
  if (!n)
    return Df(e, t);
  let i;
  switch (r) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Df(r, t)).replace("{{time}}", Hm(n, t));
}, Fd = {
  p: Hm,
  P: Vg
}, Hg = /^D+$/, jg = /^Y+$/, Ug = ["D", "DD", "YY", "YYYY"];
function jm(e) {
  return Hg.test(e);
}
function Um(e) {
  return jg.test(e);
}
function Ed(e, t, a) {
  const r = Bg(e, t, a);
  if (console.warn(r), Ug.includes(e)) throw new RangeError(r);
}
function Bg(e, t, a) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Gg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Qg = /^'([^]*?)'?$/, Kg = /''/g, Xg = /[a-zA-Z]/;
function tn(e, t, a) {
  var v, p, g, k, w, b, D, T;
  const r = Ws(), n = (a == null ? void 0 : a.locale) ?? r.locale ?? Vm, i = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((p = (v = a == null ? void 0 : a.locale) == null ? void 0 : v.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((k = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, o = (a == null ? void 0 : a.weekStartsOn) ?? ((b = (w = a == null ? void 0 : a.locale) == null ? void 0 : w.options) == null ? void 0 : b.weekStartsOn) ?? r.weekStartsOn ?? ((T = (D = r.locale) == null ? void 0 : D.options) == null ? void 0 : T.weekStartsOn) ?? 0, c = Ie(e, a == null ? void 0 : a.in);
  if (!El(c))
    throw new RangeError("Invalid time value");
  let f = t.match(zg).map((C) => {
    const $ = C[0];
    if ($ === "p" || $ === "P") {
      const P = Fd[$];
      return P(C, n.formatLong);
    }
    return C;
  }).join("").match(Gg).map((C) => {
    if (C === "''")
      return { isToken: !1, value: "'" };
    const $ = C[0];
    if ($ === "'")
      return { isToken: !1, value: Zg(C) };
    if (bf[$])
      return { isToken: !0, value: C };
    if ($.match(Xg))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + $ + "`"
      );
    return { isToken: !1, value: C };
  });
  n.localize.preprocessor && (f = n.localize.preprocessor(c, f));
  const m = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: n
  };
  return f.map((C) => {
    if (!C.isToken) return C.value;
    const $ = C.value;
    (!(a != null && a.useAdditionalWeekYearTokens) && Um($) || !(a != null && a.useAdditionalDayOfYearTokens) && jm($)) && Ed($, t, String(e));
    const P = bf[$[0]];
    return P(c, $, n.localize, m);
  }).join("");
}
function Zg(e) {
  const t = e.match(Qg);
  return t ? t[1].replace(Kg, "'") : e;
}
function Jg(e, t) {
  return Ie(e, t == null ? void 0 : t.in).getDay();
}
function e0(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in), r = a.getFullYear(), n = a.getMonth(), i = dt(a, 0);
  return i.setFullYear(r, n + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
}
function t0() {
  return Object.assign({}, Ws());
}
function Sn(e, t) {
  return Ie(e, t == null ? void 0 : t.in).getHours();
}
function a0(e, t) {
  const a = Ie(e, t == null ? void 0 : t.in).getDay();
  return a === 0 ? 7 : a;
}
function Kn(e, t) {
  return Ie(e, t == null ? void 0 : t.in).getMinutes();
}
function Be(e, t) {
  return Ie(e, t == null ? void 0 : t.in).getMonth();
}
function cl(e) {
  return Ie(e).getSeconds();
}
function Ee(e, t) {
  return Ie(e, t == null ? void 0 : t.in).getFullYear();
}
function fl(e, t) {
  return +Ie(e) > +Ie(t);
}
function Hl(e, t) {
  return +Ie(e) < +Ie(t);
}
function nl(e, t) {
  return +Ie(e) == +Ie(t);
}
function r0(e, t) {
  const a = n0(t) ? new t(0) : dt(t, 0);
  return a.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), a.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), a;
}
function n0(e) {
  var t;
  return typeof e == "function" && ((t = e.prototype) == null ? void 0 : t.constructor) === e;
}
const s0 = 10;
class Bm {
  constructor() {
    Ae(this, "subPriority", 0);
  }
  validate(t, a) {
    return !0;
  }
}
class l0 extends Bm {
  constructor(t, a, r, n, i) {
    super(), this.value = t, this.validateValue = a, this.setValue = r, this.priority = n, i && (this.subPriority = i);
  }
  validate(t, a) {
    return this.validateValue(t, this.value, a);
  }
  set(t, a, r) {
    return this.setValue(t, a, this.value, r);
  }
}
class i0 extends Bm {
  constructor(a, r) {
    super();
    Ae(this, "priority", s0);
    Ae(this, "subPriority", -1);
    this.context = a || ((n) => dt(r, n));
  }
  set(a, r) {
    return r.timestampIsSet ? a : dt(a, r0(a, this.context));
  }
}
class nt {
  run(t, a, r, n) {
    const i = this.parse(t, a, r, n);
    return i ? {
      setter: new l0(
        i.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: i.rest
    } : null;
  }
  validate(t, a, r) {
    return !0;
  }
}
class o0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 140);
    Ae(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(a, { width: "abbreviated" }) || n.era(a, { width: "narrow" });
      // A, B
      case "GGGGG":
        return n.era(a, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(a, { width: "wide" }) || n.era(a, { width: "abbreviated" }) || n.era(a, { width: "narrow" });
    }
  }
  set(a, r, n) {
    return r.era = n, a.setFullYear(n, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
const Wt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Xr = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function qt(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function At(e, t) {
  const a = t.match(e);
  return a ? {
    value: parseInt(a[0], 10),
    rest: t.slice(a[0].length)
  } : null;
}
function Zr(e, t) {
  const a = t.match(e);
  if (!a)
    return null;
  if (a[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = a[1] === "+" ? 1 : -1, n = a[2] ? parseInt(a[2], 10) : 0, i = a[3] ? parseInt(a[3], 10) : 0, o = a[5] ? parseInt(a[5], 10) : 0;
  return {
    value: r * (n * $m + i * X_ + o * Z_),
    rest: t.slice(a[0].length)
  };
}
function Gm(e) {
  return At(Wt.anyDigitsSigned, e);
}
function Ft(e, t) {
  switch (e) {
    case 1:
      return At(Wt.singleDigit, t);
    case 2:
      return At(Wt.twoDigits, t);
    case 3:
      return At(Wt.threeDigits, t);
    case 4:
      return At(Wt.fourDigits, t);
    default:
      return At(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function to(e, t) {
  switch (e) {
    case 1:
      return At(Wt.singleDigitSigned, t);
    case 2:
      return At(Wt.twoDigitsSigned, t);
    case 3:
      return At(Wt.threeDigitsSigned, t);
    case 4:
      return At(Wt.fourDigitsSigned, t);
    default:
      return At(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function ac(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function zm(e, t) {
  const a = t > 0, r = a ? t : 1 - t;
  let n;
  if (r <= 50)
    n = e || 100;
  else {
    const i = r + 50, o = Math.trunc(i / 100) * 100, c = e >= i % 100;
    n = e + o - (c ? 100 : 0);
  }
  return a ? n : 1 - n;
}
function Qm(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class u0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 130);
    Ae(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(a, r, n) {
    const i = (o) => ({
      year: o,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return qt(Ft(4, a), i);
      case "yo":
        return qt(
          n.ordinalNumber(a, {
            unit: "year"
          }),
          i
        );
      default:
        return qt(Ft(r.length, a), i);
    }
  }
  validate(a, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(a, r, n) {
    const i = a.getFullYear();
    if (n.isTwoDigitYear) {
      const c = zm(
        n.year,
        i
      );
      return a.setFullYear(c, 0, 1), a.setHours(0, 0, 0, 0), a;
    }
    const o = !("era" in r) || r.era === 1 ? n.year : 1 - n.year;
    return a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class d0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 130);
    Ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    const i = (o) => ({
      year: o,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return qt(Ft(4, a), i);
      case "Yo":
        return qt(
          n.ordinalNumber(a, {
            unit: "year"
          }),
          i
        );
      default:
        return qt(Ft(r.length, a), i);
    }
  }
  validate(a, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(a, r, n, i) {
    const o = ec(a, i);
    if (n.isTwoDigitYear) {
      const f = zm(
        n.year,
        o
      );
      return a.setFullYear(
        f,
        0,
        i.firstWeekContainsDate
      ), a.setHours(0, 0, 0, 0), vr(a, i);
    }
    const c = !("era" in r) || r.era === 1 ? n.year : 1 - n.year;
    return a.setFullYear(c, 0, i.firstWeekContainsDate), a.setHours(0, 0, 0, 0), vr(a, i);
  }
}
class c0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 130);
    Ae(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r) {
    return to(r === "R" ? 4 : r.length, a);
  }
  set(a, r, n) {
    const i = dt(a, 0);
    return i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0), dl(i);
  }
}
class f0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 130);
    Ae(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(a, r) {
    return to(r === "u" ? 4 : r.length, a);
  }
  set(a, r, n) {
    return a.setFullYear(n, 0, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class h0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 120);
    Ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    switch (r) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return Ft(r.length, a);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "formatting"
        }) || n.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(a, r) {
    return r >= 1 && r <= 4;
  }
  set(a, r, n) {
    return a.setMonth((n - 1) * 3, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class m0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 120);
    Ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    switch (r) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return Ft(r.length, a);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        }) || n.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(a, {
          width: "wide",
          context: "standalone"
        }) || n.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        }) || n.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(a, r) {
    return r >= 1 && r <= 4;
  }
  set(a, r, n) {
    return a.setMonth((n - 1) * 3, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class v0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    Ae(this, "priority", 110);
  }
  parse(a, r, n) {
    const i = (o) => o - 1;
    switch (r) {
      // 1, 2, ..., 12
      case "M":
        return qt(
          At(Wt.month, a),
          i
        );
      // 01, 02, ..., 12
      case "MM":
        return qt(Ft(2, a), i);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return qt(
          n.ordinalNumber(a, {
            unit: "month"
          }),
          i
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.month(a, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return n.month(a, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(a, { width: "wide", context: "formatting" }) || n.month(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.month(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 11;
  }
  set(a, r, n) {
    return a.setMonth(n, 1), a.setHours(0, 0, 0, 0), a;
  }
}
class y0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 110);
    Ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    const i = (o) => o - 1;
    switch (r) {
      // 1, 2, ..., 12
      case "L":
        return qt(
          At(Wt.month, a),
          i
        );
      // 01, 02, ..., 12
      case "LL":
        return qt(Ft(2, a), i);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return qt(
          n.ordinalNumber(a, {
            unit: "month"
          }),
          i
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(a, {
          width: "abbreviated",
          context: "standalone"
        }) || n.month(a, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return n.month(a, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(a, { width: "wide", context: "standalone" }) || n.month(a, {
          width: "abbreviated",
          context: "standalone"
        }) || n.month(a, { width: "narrow", context: "standalone" });
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 11;
  }
  set(a, r, n) {
    return a.setMonth(n, 1), a.setHours(0, 0, 0, 0), a;
  }
}
function p0(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in), n = tc(r, a) - t;
  return r.setDate(r.getDate() - n * 7), Ie(r, a == null ? void 0 : a.in);
}
class _0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 100);
    Ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    switch (r) {
      case "w":
        return At(Wt.week, a);
      case "wo":
        return n.ordinalNumber(a, { unit: "week" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 1 && r <= 53;
  }
  set(a, r, n, i) {
    return vr(p0(a, n, i), i);
  }
}
function g0(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in), n = Jd(r, a) - t;
  return r.setDate(r.getDate() - n * 7), r;
}
class w0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 100);
    Ae(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    switch (r) {
      case "I":
        return At(Wt.week, a);
      case "Io":
        return n.ordinalNumber(a, { unit: "week" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 1 && r <= 53;
  }
  set(a, r, n) {
    return dl(g0(a, n));
  }
}
const b0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], k0 = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class M0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 90);
    Ae(this, "subPriority", 1);
    Ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    switch (r) {
      case "d":
        return At(Wt.date, a);
      case "do":
        return n.ordinalNumber(a, { unit: "date" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    const n = a.getFullYear(), i = Qm(n), o = a.getMonth();
    return i ? r >= 1 && r <= k0[o] : r >= 1 && r <= b0[o];
  }
  set(a, r, n) {
    return a.setDate(n), a.setHours(0, 0, 0, 0), a;
  }
}
class D0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 90);
    Ae(this, "subpriority", 1);
    Ae(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    switch (r) {
      case "D":
      case "DD":
        return At(Wt.dayOfYear, a);
      case "Do":
        return n.ordinalNumber(a, { unit: "date" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    const n = a.getFullYear();
    return Qm(n) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(a, r, n) {
    return a.setMonth(0, n), a.setHours(0, 0, 0, 0), a;
  }
}
function rc(e, t, a) {
  var p, g, k, w;
  const r = Ws(), n = (a == null ? void 0 : a.weekStartsOn) ?? ((g = (p = a == null ? void 0 : a.locale) == null ? void 0 : p.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((w = (k = r.locale) == null ? void 0 : k.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = Ie(e, a == null ? void 0 : a.in), o = i.getDay(), f = (t % 7 + 7) % 7, m = 7 - n, v = t < 0 || t > 6 ? t - (o + m) % 7 : (f + m) % 7 - (o + m) % 7;
  return cr(i, v, a);
}
class S0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 90);
    Ae(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(a, { width: "short", context: "formatting" }) || n.day(a, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(a, { width: "short", context: "formatting" }) || n.day(a, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return n.day(a, { width: "wide", context: "formatting" }) || n.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(a, { width: "short", context: "formatting" }) || n.day(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 6;
  }
  set(a, r, n, i) {
    return a = rc(a, n, i), a.setHours(0, 0, 0, 0), a;
  }
}
class T0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 90);
    Ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n, i) {
    const o = (c) => {
      const f = Math.floor((c - 1) / 7) * 7;
      return (c + i.weekStartsOn + 6) % 7 + f;
    };
    switch (r) {
      // 3
      case "e":
      case "ee":
        return qt(Ft(r.length, a), o);
      // 3rd
      case "eo":
        return qt(
          n.ordinalNumber(a, {
            unit: "day"
          }),
          o
        );
      // Tue
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(a, { width: "short", context: "formatting" }) || n.day(a, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, { width: "short", context: "formatting" }) || n.day(a, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, { width: "wide", context: "formatting" }) || n.day(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(a, { width: "short", context: "formatting" }) || n.day(a, { width: "narrow", context: "formatting" });
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 6;
  }
  set(a, r, n, i) {
    return a = rc(a, n, i), a.setHours(0, 0, 0, 0), a;
  }
}
class x0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 90);
    Ae(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(a, r, n, i) {
    const o = (c) => {
      const f = Math.floor((c - 1) / 7) * 7;
      return (c + i.weekStartsOn + 6) % 7 + f;
    };
    switch (r) {
      // 3
      case "c":
      case "cc":
        return qt(Ft(r.length, a), o);
      // 3rd
      case "co":
        return qt(
          n.ordinalNumber(a, {
            unit: "day"
          }),
          o
        );
      // Tue
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        }) || n.day(a, { width: "short", context: "standalone" }) || n.day(a, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, { width: "short", context: "standalone" }) || n.day(a, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, { width: "wide", context: "standalone" }) || n.day(a, {
          width: "abbreviated",
          context: "standalone"
        }) || n.day(a, { width: "short", context: "standalone" }) || n.day(a, { width: "narrow", context: "standalone" });
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 6;
  }
  set(a, r, n, i) {
    return a = rc(a, n, i), a.setHours(0, 0, 0, 0), a;
  }
}
function O0(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in), n = a0(r, a), i = t - n;
  return cr(r, i, a);
}
class A0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 90);
    Ae(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(a, r, n) {
    const i = (o) => o === 0 ? 7 : o;
    switch (r) {
      // 2
      case "i":
      case "ii":
        return Ft(r.length, a);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return qt(
          n.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(a, {
            width: "short",
            context: "formatting"
          }) || n.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // T
      case "iiiii":
        return qt(
          n.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // Tu
      case "iiiiii":
        return qt(
          n.day(a, {
            width: "short",
            context: "formatting"
          }) || n.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      // Tuesday
      case "iiii":
      default:
        return qt(
          n.day(a, {
            width: "wide",
            context: "formatting"
          }) || n.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(a, {
            width: "short",
            context: "formatting"
          }) || n.day(a, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
    }
  }
  validate(a, r) {
    return r >= 1 && r <= 7;
  }
  set(a, r, n) {
    return a = O0(a, n), a.setHours(0, 0, 0, 0), a;
  }
}
class C0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 80);
    Ae(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, r, n) {
    return a.setHours(ac(n), 0, 0, 0), a;
  }
}
class Y0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 80);
    Ae(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, r, n) {
    return a.setHours(ac(n), 0, 0, 0), a;
  }
}
class P0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 80);
    Ae(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(a, r, n) {
    return a.setHours(ac(n), 0, 0, 0), a;
  }
}
class $0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 70);
    Ae(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "h":
        return At(Wt.hour12h, a);
      case "ho":
        return n.ordinalNumber(a, { unit: "hour" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 1 && r <= 12;
  }
  set(a, r, n) {
    const i = a.getHours() >= 12;
    return i && n < 12 ? a.setHours(n + 12, 0, 0, 0) : !i && n === 12 ? a.setHours(0, 0, 0, 0) : a.setHours(n, 0, 0, 0), a;
  }
}
class R0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 70);
    Ae(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "H":
        return At(Wt.hour23h, a);
      case "Ho":
        return n.ordinalNumber(a, { unit: "hour" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 23;
  }
  set(a, r, n) {
    return a.setHours(n, 0, 0, 0), a;
  }
}
class I0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 70);
    Ae(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "K":
        return At(Wt.hour11h, a);
      case "Ko":
        return n.ordinalNumber(a, { unit: "hour" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 11;
  }
  set(a, r, n) {
    return a.getHours() >= 12 && n < 12 ? a.setHours(n + 12, 0, 0, 0) : a.setHours(n, 0, 0, 0), a;
  }
}
class F0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 70);
    Ae(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "k":
        return At(Wt.hour24h, a);
      case "ko":
        return n.ordinalNumber(a, { unit: "hour" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 1 && r <= 24;
  }
  set(a, r, n) {
    const i = n <= 24 ? n % 24 : n;
    return a.setHours(i, 0, 0, 0), a;
  }
}
class E0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 60);
    Ae(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "m":
        return At(Wt.minute, a);
      case "mo":
        return n.ordinalNumber(a, { unit: "minute" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 59;
  }
  set(a, r, n) {
    return a.setMinutes(n, 0, 0), a;
  }
}
class N0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 50);
    Ae(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(a, r, n) {
    switch (r) {
      case "s":
        return At(Wt.second, a);
      case "so":
        return n.ordinalNumber(a, { unit: "second" });
      default:
        return Ft(r.length, a);
    }
  }
  validate(a, r) {
    return r >= 0 && r <= 59;
  }
  set(a, r, n) {
    return a.setSeconds(n, 0), a;
  }
}
class L0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 30);
    Ae(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(a, r) {
    const n = (i) => Math.trunc(i * Math.pow(10, -r.length + 3));
    return qt(Ft(r.length, a), n);
  }
  set(a, r, n) {
    return a.setMilliseconds(n), a;
  }
}
class W0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 10);
    Ae(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(a, r) {
    switch (r) {
      case "X":
        return Zr(
          Xr.basicOptionalMinutes,
          a
        );
      case "XX":
        return Zr(Xr.basic, a);
      case "XXXX":
        return Zr(
          Xr.basicOptionalSeconds,
          a
        );
      case "XXXXX":
        return Zr(
          Xr.extendedOptionalSeconds,
          a
        );
      case "XXX":
      default:
        return Zr(Xr.extended, a);
    }
  }
  set(a, r, n) {
    return r.timestampIsSet ? a : dt(
      a,
      a.getTime() - eo(a) - n
    );
  }
}
class q0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 10);
    Ae(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(a, r) {
    switch (r) {
      case "x":
        return Zr(
          Xr.basicOptionalMinutes,
          a
        );
      case "xx":
        return Zr(Xr.basic, a);
      case "xxxx":
        return Zr(
          Xr.basicOptionalSeconds,
          a
        );
      case "xxxxx":
        return Zr(
          Xr.extendedOptionalSeconds,
          a
        );
      case "xxx":
      default:
        return Zr(Xr.extended, a);
    }
  }
  set(a, r, n) {
    return r.timestampIsSet ? a : dt(
      a,
      a.getTime() - eo(a) - n
    );
  }
}
class V0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 40);
    Ae(this, "incompatibleTokens", "*");
  }
  parse(a) {
    return Gm(a);
  }
  set(a, r, n) {
    return [dt(a, n * 1e3), { timestampIsSet: !0 }];
  }
}
class H0 extends nt {
  constructor() {
    super(...arguments);
    Ae(this, "priority", 20);
    Ae(this, "incompatibleTokens", "*");
  }
  parse(a) {
    return Gm(a);
  }
  set(a, r, n) {
    return [dt(a, n), { timestampIsSet: !0 }];
  }
}
const j0 = {
  G: new o0(),
  y: new u0(),
  Y: new d0(),
  R: new c0(),
  u: new f0(),
  Q: new h0(),
  q: new m0(),
  M: new v0(),
  L: new y0(),
  w: new _0(),
  I: new w0(),
  d: new M0(),
  D: new D0(),
  E: new S0(),
  e: new T0(),
  c: new x0(),
  i: new A0(),
  a: new C0(),
  b: new Y0(),
  B: new P0(),
  h: new $0(),
  H: new R0(),
  K: new I0(),
  k: new F0(),
  m: new E0(),
  s: new N0(),
  S: new L0(),
  X: new W0(),
  x: new q0(),
  t: new V0(),
  T: new H0()
}, U0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, B0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, G0 = /^'([^]*?)'?$/, z0 = /''/g, Q0 = /\S/, K0 = /[a-zA-Z]/;
function Nd(e, t, a, r) {
  var D, T, C, $, P, G, R, E;
  const n = () => dt((r == null ? void 0 : r.in) || a, NaN), i = t0(), o = (r == null ? void 0 : r.locale) ?? i.locale ?? Vm, c = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((T = (D = r == null ? void 0 : r.locale) == null ? void 0 : D.options) == null ? void 0 : T.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? (($ = (C = i.locale) == null ? void 0 : C.options) == null ? void 0 : $.firstWeekContainsDate) ?? 1, f = (r == null ? void 0 : r.weekStartsOn) ?? ((G = (P = r == null ? void 0 : r.locale) == null ? void 0 : P.options) == null ? void 0 : G.weekStartsOn) ?? i.weekStartsOn ?? ((E = (R = i.locale) == null ? void 0 : R.options) == null ? void 0 : E.weekStartsOn) ?? 0;
  if (!t)
    return e ? n() : Ie(a, r == null ? void 0 : r.in);
  const m = {
    firstWeekContainsDate: c,
    weekStartsOn: f,
    locale: o
  }, v = [new i0(r == null ? void 0 : r.in, a)], p = t.match(B0).map((U) => {
    const H = U[0];
    if (H in Fd) {
      const q = Fd[H];
      return q(U, o.formatLong);
    }
    return U;
  }).join("").match(U0), g = [];
  for (let U of p) {
    !(r != null && r.useAdditionalWeekYearTokens) && Um(U) && Ed(U, t, e), !(r != null && r.useAdditionalDayOfYearTokens) && jm(U) && Ed(U, t, e);
    const H = U[0], q = j0[H];
    if (q) {
      const { incompatibleTokens: J } = q;
      if (Array.isArray(J)) {
        const we = g.find(
          (I) => J.includes(I.token) || I.token === H
        );
        if (we)
          throw new RangeError(
            `The format string mustn't contain \`${we.fullToken}\` and \`${U}\` at the same time`
          );
      } else if (q.incompatibleTokens === "*" && g.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${U}\` and any other token at the same time`
        );
      g.push({ token: H, fullToken: U });
      const ge = q.run(
        e,
        U,
        o.match,
        m
      );
      if (!ge)
        return n();
      v.push(ge.setter), e = ge.rest;
    } else {
      if (H.match(K0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + H + "`"
        );
      if (U === "''" ? U = "'" : H === "'" && (U = X0(U)), e.indexOf(U) === 0)
        e = e.slice(U.length);
      else
        return n();
    }
  }
  if (e.length > 0 && Q0.test(e))
    return n();
  const k = v.map((U) => U.priority).sort((U, H) => H - U).filter((U, H, q) => q.indexOf(U) === H).map(
    (U) => v.filter((H) => H.priority === U).sort((H, q) => q.subPriority - H.subPriority)
  ).map((U) => U[0]);
  let w = Ie(a, r == null ? void 0 : r.in);
  if (isNaN(+w)) return n();
  const b = {};
  for (const U of k) {
    if (!U.validate(w, m))
      return n();
    const H = U.set(w, b, m);
    Array.isArray(H) ? (w = H[0], Object.assign(b, H[1])) : w = H;
  }
  return w;
}
function X0(e) {
  return e.match(G0)[1].replace(z0, "'");
}
function Sf(e, t, a) {
  const [r, n] = Zl(
    a == null ? void 0 : a.in,
    e,
    t
  );
  return +Ps(r) == +Ps(n);
}
function Z0(e, t, a) {
  return cr(e, -t, a);
}
function Km(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in), n = r.getFullYear(), i = r.getDate(), o = dt(e, 0);
  o.setFullYear(n, t, 15), o.setHours(0, 0, 0, 0);
  const c = e0(o);
  return r.setMonth(t, Math.min(i, c)), r;
}
function vt(e, t, a) {
  let r = Ie(e, a == null ? void 0 : a.in);
  return isNaN(+r) ? dt(e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = Km(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
function J0(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in);
  return r.setHours(t), r;
}
function Xm(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in);
  return r.setMilliseconds(t), r;
}
function ew(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in);
  return r.setMinutes(t), r;
}
function Zm(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in);
  return r.setSeconds(t), r;
}
function en(e, t, a) {
  const r = Ie(e, a == null ? void 0 : a.in);
  return isNaN(+r) ? dt(e, NaN) : (r.setFullYear(t), r);
}
function hl(e, t, a) {
  return mr(e, -t, a);
}
function tw(e, t, a) {
  const {
    years: r = 0,
    months: n = 0,
    weeks: i = 0,
    days: o = 0,
    hours: c = 0,
    minutes: f = 0,
    seconds: m = 0
  } = t, v = hl(e, n + r * 12, a), p = Z0(v, o + i * 7, a), g = f + c * 60, w = (m + g * 60) * 1e3;
  return dt(e, +p - w);
}
function Jm(e, t, a) {
  return Zd(e, -t, a);
}
function yl() {
  const e = D_();
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img",
      ...e
    },
    [
      Se("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Se("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Se("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Se("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
yl.compatConfig = {
  MODE: 3
};
function ev() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Se("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Se("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
ev.compatConfig = {
  MODE: 3
};
function nc() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Se("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
nc.compatConfig = {
  MODE: 3
};
function sc() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Se("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
sc.compatConfig = {
  MODE: 3
};
function lc() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Se("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Se("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
lc.compatConfig = {
  MODE: 3
};
function ic() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Se("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
ic.compatConfig = {
  MODE: 3
};
function oc() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Se("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
oc.compatConfig = {
  MODE: 3
};
const Ia = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), uc = (e, t, a) => Ld(e, t, a) || oe(), aw = (e, t, a) => {
  const r = t.dateInTz ? Ia(new Date(e), t.dateInTz) : oe(e);
  return a ? Ma(r, !0) : r;
}, Ld = (e, t, a) => {
  if (!e) return null;
  const r = a ? Ma(oe(e), !0) : oe(e);
  return t ? t.exactMatch ? aw(e, t, a) : Ia(r, t.timezone) : r;
}, rw = (e, t) => {
  if (!e) return 0;
  const a = /* @__PURE__ */ new Date(), r = new Date(a.toLocaleString("en-US", { timeZone: "UTC" })), n = new Date(a.toLocaleString("en-US", { timeZone: e })), i = (t ?? n).getTimezoneOffset() / 60;
  return (+r - +n) / (1e3 * 60 * 60) - i;
};
var ur = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(ur || {}), dr = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(dr || {}), Is = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Is || {}), fa = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(fa || {});
const nw = ["timestamp", "date", "iso"];
var wa = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(wa || {}), wt = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(wt || {});
function Tf(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function sw(e) {
  return (t) => tn(Ia(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const lw = (e, t, a) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = r.map(sw(e));
    } catch {
      n = r.map(Tf(t));
    }
  else
    n = r.map(Tf(t));
  const i = n.slice(0, a), o = n.slice(a + 1, n.length);
  return [n[a]].concat(...o).concat(...i);
}, dc = (e, t, a) => {
  const r = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    r.push({ value: +n, text: nv(n, t) });
  return a ? r.reverse() : r;
}, tv = (e, t, a) => {
  const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
    const o = i < 10 ? `0${i}` : i;
    return /* @__PURE__ */ new Date(`2017-${o}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const i = a === "long" ? "LLLL" : "LLL";
      return r.map((o, c) => {
        const f = tn(Ia(o, "UTC"), i, { locale: e });
        return {
          text: f.charAt(0).toUpperCase() + f.substring(1),
          value: c
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: a, timeZone: "UTC" });
  return r.map((i, o) => {
    const c = n.format(i);
    return {
      text: c.charAt(0).toUpperCase() + c.substring(1),
      value: o
    };
  });
}, iw = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Bt = (e) => {
  const t = y(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, ow = (e) => ({ type: "dot", ...e ?? {} }), av = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, cc = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Xt = (e) => e, xf = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Of = (e) => e === null, rv = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, uw = (e) => {
  const t = [], a = (r) => r.filter((n) => n);
  for (let r = 0; r < e.length; r += 3) {
    const n = [e[r], e[r + 1], e[r + 2]];
    t.push(a(n));
  }
  return t;
}, jl = (e, t, a) => {
  const r = a != null, n = t != null;
  if (!r && !n) return !1;
  const i = +a, o = +t;
  return r && n ? +e > i || +e < o : r ? +e > i : n ? +e < o : !1;
}, ml = (e, t) => uw(e).map((a) => a.map((r) => {
  const { active: n, disabled: i, isBetween: o, highlighted: c } = t(r);
  return {
    ...r,
    active: n,
    disabled: i,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: i,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: i && n,
      dp__cell_in_between: o,
      "dp--highlighted": c
    }
  };
})), Gn = (e, t, a = !1) => {
  e && t.allowStopPropagation && (a && e.stopImmediatePropagation(), e.stopPropagation());
}, dw = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function cw(e, t) {
  let a = [...document.querySelectorAll(dw())];
  a = a.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const r = a.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= a.length))
    return a[r + (t ? -1 : 1)];
}
const Wd = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), nv = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), fc = (e) => tn(e, "dd-MM-yyyy"), qo = (e) => Array.isArray(e), ao = (e, t) => t.get(fc(e)), fw = (e, t) => e ? t ? t instanceof Map ? !!ao(e, t) : t(oe(e)) : !1 : !0, ka = (e, t, a = !1, r) => {
  if (e.key === wt.enter || e.key === wt.space)
    return a && e.preventDefault(), t();
  if (r) return r(e);
}, Af = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].some(
  (e) => navigator.userAgent.includes(e)
) || navigator.userAgent.includes("Mac") && "ontouchend" in document, Cf = (e, t, a, r, n, i) => {
  const o = Nd(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: i });
  return El(o) && Em(o) ? r || n ? o : vt(o, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, hw = (e, t, a, r, n, i) => {
  const o = Array.isArray(a) ? a[0] : a;
  if (typeof t == "string")
    return Cf(e, t, o, r, n, i);
  if (Array.isArray(t)) {
    let c = null;
    for (const f of t)
      if (c = Cf(e, f, o, r, n, i), c)
        break;
    return c;
  }
  return typeof t == "function" ? t(e) : null;
}, oe = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), mw = (e, t, a) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), i = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), c = e.getMinutes().toString().padStart(2, "0"), f = a ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${i}T${o}:${c}:${f}.000Z`;
  }
  const r = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(r).toISOString();
}, Ma = (e, t) => {
  const a = oe(JSON.parse(JSON.stringify(e))), r = vt(a, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? ig(r) : r;
}, zn = (e, t, a, r) => {
  let n = e ? oe(e) : oe();
  return (t || t === 0) && (n = J0(n, +t)), (a || a === 0) && (n = ew(n, +a)), (r || r === 0) && (n = Zm(n, +r)), Xm(n, 0);
}, $t = (e, t) => !e || !t ? !1 : Hl(Ma(e), Ma(t)), ze = (e, t) => !e || !t ? !1 : nl(Ma(e), Ma(t)), Lt = (e, t) => !e || !t ? !1 : fl(Ma(e), Ma(t)), uo = (e, t, a) => e != null && e[0] && e != null && e[1] ? Lt(a, e[0]) && $t(a, e[1]) : e != null && e[0] && t ? Lt(a, e[0]) && $t(a, t) || $t(a, e[0]) && Lt(a, t) : !1, fr = (e) => {
  const t = vt(new Date(e), { date: 1 });
  return Ma(t);
}, Vo = (e, t, a) => t && (a || a === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, a] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Fs = (e) => ({
  hours: Sn(e),
  minutes: Kn(e),
  seconds: cl(e)
}), sv = (e, t) => {
  if (t) {
    const a = Ee(oe(t));
    if (a > e) return 12;
    if (a === e) return Be(oe(t));
  }
}, lv = (e, t) => {
  if (t) {
    const a = Ee(oe(t));
    return a < e ? -1 : a === e ? Be(oe(t)) : void 0;
  }
}, vl = (e) => {
  if (e) return Ee(oe(e));
}, iv = (e, t) => {
  const a = Lt(e, t) ? t : e, r = Lt(t, e) ? t : e;
  return Lm({ start: a, end: r });
}, vw = (e) => {
  const t = mr(e, 1);
  return { month: Be(t), year: Ee(t) };
}, gn = (e, t) => {
  const a = vr(e, { weekStartsOn: +t }), r = qm(e, { weekStartsOn: +t });
  return [a, r];
}, ov = (e, t) => {
  const a = {
    hours: Sn(oe()),
    minutes: Kn(oe()),
    seconds: t ? cl(oe()) : 0
  };
  return Object.assign(a, e);
}, jn = (e, t, a) => [vt(oe(e), { date: 1 }), vt(oe(), { month: t, year: a, date: 1 })], wn = (e, t, a) => {
  let r = e ? oe(e) : oe();
  return (t || t === 0) && (r = Km(r, t)), a && (r = en(r, a)), r;
}, uv = (e, t, a, r, n) => {
  if (!r || n && !t || !n && !a) return !1;
  const i = n ? mr(e, 1) : hl(e, 1), o = [Be(i), Ee(i)];
  return n ? !pw(...o, t) : !yw(...o, a);
}, yw = (e, t, a) => $t(...jn(a, e, t)) || ze(...jn(a, e, t)), pw = (e, t, a) => Lt(...jn(a, e, t)) || ze(...jn(a, e, t)), dv = (e, t, a, r, n, i, o) => {
  if (typeof t == "function" && !o) return t(e);
  const c = a ? { locale: a } : void 0;
  return Array.isArray(e) ? `${tn(e[0], i, c)}${n && !e[1] ? "" : r}${e[1] ? tn(e[1], i, c) : ""}` : tn(e, i, c);
}, el = (e) => {
  if (e) return null;
  throw new Error(cc.prop("partial-range"));
}, Hi = (e, t) => {
  if (t) return e();
  throw new Error(cc.prop("range"));
}, qd = (e) => Array.isArray(e) ? El(e[0]) && (e[1] ? El(e[1]) : !0) : e ? El(e) : !1, _w = (e, t) => vt(t ?? oe(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Ho = (e, t, a, r) => {
  if (!e) return !0;
  if (r) {
    const n = a === "max" ? Hl(e, t) : fl(e, t), i = { seconds: 0, milliseconds: 0 };
    return n || nl(vt(e, i), vt(t, i));
  }
  return a === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, jo = (e, t, a) => e ? _w(e, t) : oe(a ?? t), Yf = (e, t, a, r, n) => {
  if (Array.isArray(r)) {
    const o = jo(e, r[0], t), c = jo(e, r[1], t);
    return Ho(r[0], o, a, !!t) && Ho(r[1], c, a, !!t) && n;
  }
  const i = jo(e, r, t);
  return Ho(r, i, a, !!t) && n;
}, Uo = (e) => vt(oe(), Fs(e)), gw = (e, t) => e instanceof Map ? Array.from(e.values()).filter((a) => Ee(oe(a)) === t).map((a) => Be(a)) : [], ww = (e, t, a) => {
  if (e instanceof Map) {
    const r = Array.from(e.values()).filter((n) => Ee(oe(n)) === t).map((n) => Be(n));
    return r.length ? r.includes(a) : !0;
  }
  return !0;
}, cv = (e, t, a) => typeof e == "function" ? e({ month: t, year: a }) : !!e.months.find((r) => r.month === t && r.year === a), hc = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), fv = (e) => tn(e, "yyyy-MM-dd"), Yl = xn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), hv = () => {
  const e = (a) => {
    Yl.menuFocused = a;
  }, t = (a) => {
    Yl.shiftKeyInMenu !== a && (Yl.shiftKeyInMenu = a);
  };
  return {
    control: ee(() => ({ shiftKeyInMenu: Yl.shiftKeyInMenu, menuFocused: Yl.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, gt = xn({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Bo = se(null), ji = se(!1), Go = se(!1), zo = se(!1), Qo = se(!1), ca = se(0), Et = se(0), Xn = () => {
  const e = ee(() => ji.value ? [...gt.selectionGrid, gt.actionRow].filter((p) => p.length) : Go.value ? [
    ...gt.timePicker[0],
    ...gt.timePicker[1],
    Qo.value ? [] : [Bo.value],
    gt.actionRow
  ].filter((p) => p.length) : zo.value ? [...gt.monthPicker, gt.actionRow] : [gt.monthYear, ...gt.calendar, gt.time, gt.actionRow].filter((p) => p.length)), t = (p) => {
    ca.value = p ? ca.value + 1 : ca.value - 1;
    let g = null;
    e.value[Et.value] && (g = e.value[Et.value][ca.value]), !g && e.value[Et.value + (p ? 1 : -1)] ? (Et.value = Et.value + (p ? 1 : -1), ca.value = p ? 0 : e.value[Et.value].length - 1) : g || (ca.value = p ? ca.value - 1 : ca.value + 1);
  }, a = (p) => {
    Et.value === 0 && !p || Et.value === e.value.length && p || (Et.value = p ? Et.value + 1 : Et.value - 1, e.value[Et.value] ? e.value[Et.value] && !e.value[Et.value][ca.value] && ca.value !== 0 && (ca.value = e.value[Et.value].length - 1) : Et.value = p ? Et.value - 1 : Et.value + 1);
  }, r = (p) => {
    let g = null;
    e.value[Et.value] && (g = e.value[Et.value][ca.value]), g ? g.focus({ preventScroll: !ji.value }) : ca.value = p ? ca.value - 1 : ca.value + 1;
  }, n = () => {
    t(!0), r(!0);
  }, i = () => {
    t(!1), r(!1);
  }, o = () => {
    a(!1), r(!0);
  }, c = () => {
    a(!0), r(!0);
  }, f = (p, g) => {
    gt[g] = p;
  }, m = (p, g) => {
    gt[g] = p;
  }, v = () => {
    ca.value = 0, Et.value = 0;
  };
  return {
    buildMatrix: f,
    buildMultiLevelMatrix: m,
    setTimePickerBackRef: (p) => {
      Bo.value = p;
    },
    setSelectionGrid: (p) => {
      ji.value = p, v(), p || (gt.selectionGrid = []);
    },
    setTimePicker: (p, g = !1) => {
      Go.value = p, Qo.value = g, v(), p || (gt.timePicker[0] = [], gt.timePicker[1] = []);
    },
    setTimePickerElements: (p, g = 0) => {
      gt.timePicker[g] = p;
    },
    arrowRight: n,
    arrowLeft: i,
    arrowUp: o,
    arrowDown: c,
    clearArrowNav: () => {
      gt.monthYear = [], gt.calendar = [], gt.time = [], gt.actionRow = [], gt.selectionGrid = [], gt.timePicker[0] = [], gt.timePicker[1] = [], ji.value = !1, Go.value = !1, Qo.value = !1, zo.value = !1, v(), Bo.value = null;
    },
    setMonthPicker: (p) => {
      zo.value = p, v();
    },
    refSets: gt
    // exposed for testing
  };
}, Pf = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), bw = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (t) => `Month picker${t ? " overlay" : ""}`,
  yearPicker: (t) => `Year picker${t ? " overlay" : ""}`,
  timeOverlay: (t) => `${t} overlay`,
  ...e ?? {}
}), $f = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, kw = (e) => {
  const t = typeof e == "object" && e, a = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...a, count: $f(!1) };
  const r = t ? e : {}, n = t ? r.count ?? !0 : e, i = $f(n);
  return Object.assign(a, r, { count: i });
}, Mw = (e, t, a) => e || (typeof a == "string" ? a : t), Dw = (e) => typeof e == "boolean" ? e ? Pf({}) : !1 : Pf(e), Sw = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: "open",
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, Tw = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), xw = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Ow = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Aw = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, arrowLeft: void 0, keepViewOnOffsetClick: !1, timeArrowHoldThreshold: 0, shadowDom: !1, mobileBreakpoint: 600, setDateOnMenuClose: !1, ...e ?? {} }), Cw = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((a) => oe(a)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Yw = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Pw = (e) => {
  const t = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...t, ...e } : {
    enabled: e,
    ...t
  };
}, $w = (e) => e ? typeof e == "string" ? {
  timezone: e,
  exactMatch: !1,
  dateInTz: void 0,
  emitTimezone: void 0,
  convertModel: !0
} : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: e.emitTimezone ?? void 0,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: void 0 }, Ko = (e, t, a) => new Map(
  e.map((r) => {
    const n = uc(r, t, a);
    return [fc(n), n];
  })
), Rw = (e, t) => e.length ? new Map(
  e.map((a) => {
    const r = uc(a.date, t);
    return [fc(r), a];
  })
) : null, Iw = (e) => {
  var t;
  return {
    minDate: Ld(e.minDate, e.timezone, e.isSpecific),
    maxDate: Ld(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: qo(e.disabledDates) ? Ko(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: qo(e.allowedDates) ? Ko(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && qo((t = e.highlight) == null ? void 0 : t.dates) ? Ko(e.highlight.dates, e.timezone) : e.highlight,
    markers: Rw(e.markers, e.timezone)
  };
}, Fw = (e) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: null } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Ew = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((t) => {
      const a = t, r = e[a], n = typeof e[a] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((i) => [i, !0]));
      return [t, n];
    })
  )
}), Dt = (e) => {
  const t = () => {
    const R = e.enableSeconds ? ":ss" : "", E = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${E}${R}` : `hh${E}${R} aa`;
  }, a = () => {
    var R;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((R = D.value) == null ? void 0 : R.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (R) => ov(R, e.enableSeconds), n = () => P.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, i = ee(() => kw(e.multiCalendars)), o = ee(() => n()), c = ee(() => bw(e.ariaLabels)), f = ee(() => Tw(e.filters)), m = ee(() => Dw(e.transitions)), v = ee(() => xw(e.actionRow)), p = ee(
    () => Mw(e.previewFormat, e.format, a())
  ), g = ee(() => Sw(e.textInput)), k = ee(() => Ow(e.inline)), w = ee(() => Aw(e.config)), b = ee(() => Cw(e.highlight)), D = ee(() => Yw(e.weekNumbers)), T = ee(() => $w(e.timezone)), C = ee(() => Fw(e.multiDates)), $ = ee(
    () => Iw({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: b.value,
      markers: e.markers,
      timezone: T.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), P = ee(() => Pw(e.range)), G = ee(() => Ew(e.ui));
  return {
    defaultedTransitions: m,
    defaultedMultiCalendars: i,
    defaultedStartTime: o,
    defaultedAriaLabels: c,
    defaultedFilters: f,
    defaultedActionRow: v,
    defaultedPreviewFormat: p,
    defaultedTextInput: g,
    defaultedInline: k,
    defaultedConfig: w,
    defaultedHighlight: b,
    defaultedWeekNumbers: D,
    defaultedRange: P,
    propDates: $,
    defaultedTz: T,
    defaultedMultiDates: C,
    defaultedUI: G,
    getDefaultPattern: a,
    getDefaultStartTime: n
  };
}, Nw = (e, t, a) => {
  const r = se(), { defaultedTextInput: n, defaultedRange: i, defaultedTz: o, defaultedMultiDates: c, getDefaultPattern: f } = Dt(t), m = se(""), v = ql(t, "format"), p = ql(t, "formatLocale");
  Rt(
    r,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", r.value, ne(!0));
    },
    { deep: !0 }
  ), Rt(i, (x, ve) => {
    x.enabled !== ve.enabled && (r.value = null);
  }), Rt(v, () => {
    me();
  });
  const g = (x) => o.value.timezone && o.value.convertModel ? Ia(x, o.value.timezone) : x, k = (x) => {
    if (o.value.timezone && o.value.convertModel) {
      const ve = rw(o.value.timezone, x);
      return eg(x, ve);
    }
    return x;
  }, w = (x, ve, A = !1) => dv(
    x,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    ve ?? f(),
    A
  ), b = (x) => x ? t.modelType ? Y(x) : {
    hours: Sn(x),
    minutes: Kn(x),
    seconds: t.enableSeconds ? cl(x) : 0
  } : null, D = (x) => t.modelType ? Y(x) : { month: Be(x), year: Ee(x) }, T = (x) => Array.isArray(x) ? c.value.enabled ? x.map((ve) => C(ve, en(oe(), ve))) : Hi(
    () => [
      en(oe(), x[0]),
      x[1] ? en(oe(), x[1]) : el(i.value.partialRange)
    ],
    i.value.enabled
  ) : en(oe(), +x), C = (x, ve) => (typeof x == "string" || typeof x == "number") && t.modelType ? K(x) : ve, $ = (x) => Array.isArray(x) ? [
    C(
      x[0],
      zn(null, +x[0].hours, +x[0].minutes, x[0].seconds)
    ),
    C(
      x[1],
      zn(null, +x[1].hours, +x[1].minutes, x[1].seconds)
    )
  ] : C(x, zn(null, x.hours, x.minutes, x.seconds)), P = (x) => {
    const ve = vt(oe(), { date: 1 });
    return Array.isArray(x) ? c.value.enabled ? x.map((A) => C(A, wn(ve, +A.month, +A.year))) : Hi(
      () => [
        C(x[0], wn(ve, +x[0].month, +x[0].year)),
        C(
          x[1],
          x[1] ? wn(ve, +x[1].month, +x[1].year) : el(i.value.partialRange)
        )
      ],
      i.value.enabled
    ) : C(x, wn(ve, +x.month, +x.year));
  }, G = (x) => {
    if (Array.isArray(x))
      return x.map((ve) => K(ve));
    throw new Error(cc.dateArr("multi-dates"));
  }, R = (x) => {
    if (Array.isArray(x) && i.value.enabled) {
      const ve = x[0], A = x[1];
      return [
        oe(Array.isArray(ve) ? ve[0] : null),
        Array.isArray(A) && A.length ? oe(A[0]) : null
      ];
    }
    return oe(x[0]);
  }, E = (x) => t.modelAuto ? Array.isArray(x) ? [K(x[0]), K(x[1])] : t.autoApply ? [K(x)] : [K(x), null] : Array.isArray(x) ? Hi(
    () => x[1] ? [
      K(x[0]),
      x[1] ? K(x[1]) : el(i.value.partialRange)
    ] : [K(x[0])],
    i.value.enabled
  ) : K(x), U = () => {
    Array.isArray(r.value) && i.value.enabled && r.value.length === 1 && r.value.push(el(i.value.partialRange));
  }, H = () => {
    const x = r.value;
    return [
      Y(x[0]),
      x[1] ? Y(x[1]) : el(i.value.partialRange)
    ];
  }, q = () => r.value[1] ? H() : Y(Xt(r.value[0])), J = () => (r.value || []).map((x) => Y(x)), ge = (x = !1) => (x || U(), t.modelAuto ? q() : c.value.enabled ? J() : Array.isArray(r.value) ? Hi(() => H(), i.value.enabled) : Y(Xt(r.value))), we = (x) => !x || Array.isArray(x) && !x.length ? null : t.timePicker ? $(Xt(x)) : t.monthPicker ? P(Xt(x)) : t.yearPicker ? T(Xt(x)) : c.value.enabled ? G(Xt(x)) : t.weekPicker ? R(Xt(x)) : E(Xt(x)), I = (x) => {
    const ve = we(x);
    qd(Xt(ve)) ? (r.value = Xt(ve), me()) : (r.value = null, m.value = "");
  }, V = () => {
    const x = (ve) => tn(ve, n.value.format);
    return `${x(r.value[0])} ${n.value.rangeSeparator} ${r.value[1] ? x(r.value[1]) : ""}`;
  }, N = () => a.value && r.value ? Array.isArray(r.value) ? V() : tn(r.value, n.value.format) : w(r.value), te = () => r.value ? c.value.enabled ? r.value.map((x) => w(x)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? N() : w(r.value) : "", me = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? m.value = te() : m.value = t.format(r.value);
  }, K = (x) => {
    if (t.utc) {
      const ve = new Date(x);
      return t.utc === "preserve" ? new Date(ve.getTime() + ve.getTimezoneOffset() * 6e4) : ve;
    }
    return t.modelType ? nw.includes(t.modelType) ? g(new Date(x)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? g(
      Nd(x, f(), /* @__PURE__ */ new Date(), { locale: p.value })
    ) : g(
      Nd(x, t.modelType, /* @__PURE__ */ new Date(), { locale: p.value })
    ) : g(new Date(x));
  }, Y = (x) => x ? t.utc ? mw(x, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +k(x) : t.modelType === "iso" ? k(x).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? w(k(x)) : w(k(x), t.modelType, !0) : k(x) : "", de = (x, ve = !1, A = !1) => {
    if (A) return x;
    if (e("update:model-value", x), o.value.emitTimezone && ve) {
      const st = Array.isArray(x) ? x.map((B) => Ia(Xt(B), o.value.emitTimezone)) : Ia(Xt(x), o.value.emitTimezone);
      e("update:model-timezone-value", st);
    }
  }, Q = (x) => Array.isArray(r.value) ? c.value.enabled ? r.value.map((ve) => x(ve)) : [
    x(r.value[0]),
    r.value[1] ? x(r.value[1]) : el(i.value.partialRange)
  ] : x(Xt(r.value)), j = () => {
    if (Array.isArray(r.value)) {
      const x = gn(r.value[0], t.weekStart), ve = r.value[1] ? gn(r.value[1], t.weekStart) : [];
      return [x.map((A) => oe(A)), ve.map((A) => oe(A))];
    }
    return gn(r.value, t.weekStart).map((x) => oe(x));
  }, _ = (x, ve) => de(Xt(Q(x)), !1, ve), S = (x) => {
    const ve = j();
    return x ? ve : e("update:model-value", j());
  }, ne = (x = !1) => (x || me(), t.monthPicker ? _(D, x) : t.timePicker ? _(b, x) : t.yearPicker ? _(Ee, x) : t.weekPicker ? S(x) : de(ge(x), !0, x));
  return {
    inputValue: m,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? i.value.enabled ? i.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: I,
    formatInputValue: me,
    emitModelValue: ne
  };
}, Lw = (e, t) => {
  const { defaultedFilters: a, propDates: r } = Dt(e), { validateMonthYearInRange: n } = Zn(e), i = (v, p) => {
    let g = v;
    return a.value.months.includes(Be(g)) ? (g = p ? mr(v, 1) : hl(v, 1), i(g, p)) : g;
  }, o = (v, p) => {
    let g = v;
    return a.value.years.includes(Ee(g)) ? (g = p ? Zd(v, 1) : Jm(v, 1), o(g, p)) : g;
  }, c = (v, p = !1) => {
    const g = vt(oe(), { month: e.month, year: e.year });
    let k = v ? mr(g, 1) : hl(g, 1);
    e.disableYearSelect && (k = en(k, e.year));
    let w = Be(k), b = Ee(k);
    a.value.months.includes(w) && (k = i(k, v), w = Be(k), b = Ee(k)), a.value.years.includes(b) && (k = o(k, v), b = Ee(k)), n(w, b, v, e.preventMinMaxNavigation) && f(w, b, p);
  }, f = (v, p, g) => {
    t("update-month-year", { month: v, year: p, fromNav: g });
  }, m = ee(() => (v) => uv(
    vt(oe(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    v
  ));
  return { handleMonthYearChange: c, isDisabled: m, updateMonthYear: f };
}, co = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: [Boolean, String], default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, _r = {
  ...co,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 },
  isMobile: { type: Boolean, default: void 0 }
}, Ww = ["title"], qw = ["disabled"], Vw = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ..._r
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const a = t, r = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: i,
      defaultedMultiCalendars: o,
      defaultedTextInput: c,
      defaultedInline: f,
      defaultedRange: m,
      defaultedMultiDates: v
    } = Dt(r), { isTimeValid: p, isMonthValid: g } = Zn(r), { buildMatrix: k } = Xn(), w = se(null), b = se(null), D = se(!1), T = se({}), C = se(null), $ = se(null);
    It(() => {
      r.arrowNavigation && k([Bt(w), Bt(b)], "actionRow"), P(), window.addEventListener("resize", P);
    }), Kl(() => {
      window.removeEventListener("resize", P);
    });
    const P = () => {
      D.value = !1, setTimeout(() => {
        var I, V;
        const N = (I = C.value) == null ? void 0 : I.getBoundingClientRect(), te = (V = $.value) == null ? void 0 : V.getBoundingClientRect();
        N && te && (T.value.maxWidth = `${te.width - N.width - 20}px`), D.value = !0;
      }, 0);
    }, G = ee(() => m.value.enabled && !m.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), R = ee(
      () => !p.value(r.internalModelValue) || !g.value(r.internalModelValue) || !G.value
    ), E = () => {
      const I = i.value;
      return r.timePicker || r.monthPicker, I(Xt(r.internalModelValue));
    }, U = () => {
      const I = r.internalModelValue;
      return o.value.count > 0 ? `${H(I[0])} - ${H(I[1])}` : [H(I[0]), H(I[1])];
    }, H = (I) => dv(
      I,
      i.value,
      r.formatLocale,
      c.value.rangeSeparator,
      r.modelAuto,
      i.value
    ), q = ee(() => !r.internalModelValue || !r.menuMount ? "" : typeof i.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? U() : v.value.enabled ? r.internalModelValue.map((I) => `${H(I)}`) : r.modelAuto ? `${H(r.internalModelValue[0])}` : `${H(r.internalModelValue[0])} -` : H(r.internalModelValue) : E()), J = () => v.value.enabled ? "; " : " - ", ge = ee(
      () => Array.isArray(q.value) ? q.value.join(J()) : q.value
    ), we = () => {
      p.value(r.internalModelValue) && g.value(r.internalModelValue) && G.value ? a("select-date") : a("invalid-select");
    };
    return (I, V) => (F(), z("div", {
      ref_key: "actionRowRef",
      ref: $,
      class: "dp__action_row"
    }, [
      I.$slots["action-row"] ? xe(I.$slots, "action-row", Jt(Zt({ key: 0 }, {
        internalModelValue: I.internalModelValue,
        disabled: R.value,
        selectDate: () => I.$emit("select-date"),
        closePicker: () => I.$emit("close-picker")
      }))) : (F(), z(We, { key: 1 }, [
        y(n).showPreview ? (F(), z("div", {
          key: 0,
          class: "dp__selection_preview",
          title: ge.value,
          style: Ja(T.value)
        }, [
          I.$slots["action-preview"] && D.value ? xe(I.$slots, "action-preview", {
            key: 0,
            value: I.internalModelValue
          }) : ue("", !0),
          !I.$slots["action-preview"] && D.value ? (F(), z(We, { key: 1 }, [
            an(yt(ge.value), 1)
          ], 64)) : ue("", !0)
        ], 12, Ww)) : ue("", !0),
        Se("div", {
          ref_key: "actionBtnContainer",
          ref: C,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          I.$slots["action-buttons"] ? xe(I.$slots, "action-buttons", {
            key: 0,
            value: I.internalModelValue
          }) : ue("", !0),
          I.$slots["action-buttons"] ? ue("", !0) : (F(), z(We, { key: 1 }, [
            !y(f).enabled && y(n).showCancel ? (F(), z("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: w,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: V[0] || (V[0] = (N) => I.$emit("close-picker")),
              onKeydown: V[1] || (V[1] = (N) => y(ka)(N, () => I.$emit("close-picker")))
            }, yt(I.cancelText), 545)) : ue("", !0),
            y(n).showNow ? (F(), z("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: V[2] || (V[2] = (N) => I.$emit("select-now")),
              onKeydown: V[3] || (V[3] = (N) => y(ka)(N, () => I.$emit("select-now")))
            }, yt(I.nowButtonLabel), 33)) : ue("", !0),
            y(n).showSelect ? (F(), z("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: b,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: R.value,
              "data-test-id": "select-button",
              onKeydown: V[4] || (V[4] = (N) => y(ka)(N, () => we())),
              onClick: we
            }, yt(I.selectText), 41, qw)) : ue("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Hw = ["role", "aria-label", "tabindex"], jw = { class: "dp__selection_grid_header" }, Uw = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], Bw = ["aria-label"], Jl = /* @__PURE__ */ la({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: a }) {
    const { setSelectionGrid: r, buildMultiLevelMatrix: n, setMonthPicker: i } = Xn(), o = a, c = e, { defaultedAriaLabels: f, defaultedTextInput: m, defaultedConfig: v } = Dt(
      c
    ), { hideNavigationButtons: p } = mo(), g = se(!1), k = se(null), w = se(null), b = se([]), D = se(), T = se(null), C = se(0), $ = se(null);
    x_(() => {
      k.value = null;
    }), It(() => {
      va().then(() => J()), c.noOverlayFocus || G(), P(!0);
    }), Kl(() => P(!1));
    const P = (Q) => {
      var j;
      c.arrowNavigation && ((j = c.headerRefs) != null && j.length ? i(Q) : r(Q));
    }, G = () => {
      var Q;
      const j = Bt(w);
      j && (m.value.enabled || (k.value ? (Q = k.value) == null || Q.focus({ preventScroll: !0 }) : j.focus({ preventScroll: !0 })), g.value = j.clientHeight < j.scrollHeight);
    }, R = ee(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !c.useRelative,
        "dp--overlay-relative": c.useRelative
      })
    ), E = ee(
      () => c.useRelative ? { height: `${c.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), U = ee(() => ({
      dp__overlay_col: !0
    })), H = ee(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: g.value,
        dp__button_bottom: c.isLast
      })
    ), q = ee(() => {
      var Q, j;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((Q = c.items) == null ? void 0 : Q.length) <= 6,
        dp__container_block: ((j = c.items) == null ? void 0 : j.length) > 6
      };
    });
    Rt(
      () => c.items,
      () => J(!1),
      { deep: !0 }
    );
    const J = (Q = !0) => {
      va().then(() => {
        const j = Bt(k), _ = Bt(w), S = Bt(T), ne = Bt($), x = S ? S.getBoundingClientRect().height : 0;
        _ && (_.getBoundingClientRect().height ? C.value = _.getBoundingClientRect().height - x : C.value = v.value.modeHeight - x), j && ne && Q && (ne.scrollTop = j.offsetTop - ne.offsetTop - (C.value / 2 - j.getBoundingClientRect().height) - x);
      });
    }, ge = (Q) => {
      Q.disabled || o("selected", Q.value);
    }, we = () => {
      o("toggle"), o("reset-flow");
    }, I = () => {
      c.escClose && we();
    }, V = (Q, j, _, S) => {
      Q && ((j.active || j.value === c.focusValue) && (k.value = Q), c.arrowNavigation && (Array.isArray(b.value[_]) ? b.value[_][S] = Q : b.value[_] = [Q], N()));
    }, N = () => {
      var Q, j;
      const _ = (Q = c.headerRefs) != null && Q.length ? [c.headerRefs].concat(b.value) : b.value.concat([c.skipButtonRef ? [] : [T.value]]);
      n(Xt(_), (j = c.headerRefs) != null && j.length ? "monthPicker" : "selectionGrid");
    }, te = (Q) => {
      c.arrowNavigation || Gn(Q, v.value, !0);
    }, me = (Q) => {
      D.value = Q, o("hover-value", Q);
    }, K = () => {
      if (we(), !c.isLast) {
        const Q = Wd(c.menuWrapRef ?? null, "action-row");
        if (Q) {
          const j = rv(Q);
          j == null || j.focus();
        }
      }
    }, Y = (Q) => {
      switch (Q.key) {
        case wt.esc:
          return I();
        case wt.arrowLeft:
          return te(Q);
        case wt.arrowRight:
          return te(Q);
        case wt.arrowUp:
          return te(Q);
        case wt.arrowDown:
          return te(Q);
        default:
          return;
      }
    }, de = (Q) => {
      if (Q.key === wt.enter) return we();
      if (Q.key === wt.tab) return K();
    };
    return t({ focusGrid: G }), (Q, j) => {
      var _;
      return F(), z("div", {
        ref_key: "gridWrapRef",
        ref: w,
        class: fe(R.value),
        style: Ja(E.value),
        role: Q.useRelative ? void 0 : "dialog",
        "aria-label": Q.overlayLabel,
        tabindex: Q.useRelative ? void 0 : "0",
        onKeydown: Y,
        onClick: j[0] || (j[0] = ul(() => {
        }, ["prevent"]))
      }, [
        Se("div", {
          ref_key: "containerRef",
          ref: $,
          class: fe(q.value),
          style: Ja({ "--dp-overlay-height": `${C.value}px` }),
          role: "grid"
        }, [
          Se("div", jw, [
            xe(Q.$slots, "header")
          ]),
          Q.$slots.overlay ? xe(Q.$slots, "overlay", { key: 0 }) : (F(!0), z(We, { key: 1 }, ut(Q.items, (S, ne) => (F(), z("div", {
            key: ne,
            class: fe(["dp__overlay_row", { dp__flex_row: Q.items.length >= 3 }]),
            role: "row"
          }, [
            (F(!0), z(We, null, ut(S, (x, ve) => (F(), z("div", {
              key: x.value,
              ref_for: !0,
              ref: (A) => V(A, x, ne, ve),
              role: "gridcell",
              class: fe(U.value),
              "aria-selected": x.active || void 0,
              "aria-disabled": x.disabled || void 0,
              tabindex: "0",
              "data-test-id": x.text,
              onClick: ul((A) => ge(x), ["prevent"]),
              onKeydown: (A) => y(ka)(A, () => ge(x), !0),
              onMouseover: (A) => me(x.value)
            }, [
              Se("div", {
                class: fe(x.className)
              }, [
                Q.$slots.item ? xe(Q.$slots, "item", {
                  key: 0,
                  item: x
                }) : ue("", !0),
                Q.$slots.item ? ue("", !0) : (F(), z(We, { key: 1 }, [
                  an(yt(x.text), 1)
                ], 64))
              ], 2)
            ], 42, Uw))), 128))
          ], 2))), 128))
        ], 6),
        Q.$slots["button-icon"] ? Rs((F(), z("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: T,
          type: "button",
          "aria-label": (_ = y(f)) == null ? void 0 : _.toggleOverlay,
          class: fe(H.value),
          tabindex: "0",
          onClick: we,
          onKeydown: de
        }, [
          xe(Q.$slots, "button-icon")
        ], 42, Bw)), [
          [Fl, !y(p)(Q.hideNavigation, Q.type)]
        ]) : ue("", !0)
      ], 46, Hw);
    };
  }
}), Gw = ["data-dp-mobile"], fo = /* @__PURE__ */ la({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = e, a = ee(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = ee(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, i) => (F(), z("div", {
      class: fe({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      }),
      "data-dp-mobile": n.isMobile
    }, [
      (F(!0), z(We, null, ut(a.value, (o, c) => (F(), z("div", {
        key: o,
        class: fe(r.value)
      }, [
        xe(n.$slots, "default", {
          instance: o,
          index: c
        })
      ], 2))), 128))
    ], 10, Gw));
  }
}), zw = ["data-dp-element", "aria-label", "aria-disabled"], Nl = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const a = t, r = se(null);
    return It(() => a("set-ref", r)), (n, i) => (F(), z("button", {
      ref_key: "elRef",
      ref: r,
      type: "button",
      "data-dp-element": n.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: i[0] || (i[0] = (o) => n.$emit("activate")),
      onKeydown: i[1] || (i[1] = (o) => y(ka)(o, () => n.$emit("activate"), !0))
    }, [
      Se("span", {
        class: fe(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        xe(n.$slots, "default")
      ], 2)
    ], 40, zw));
  }
}), Qw = ["aria-label", "data-test-id"], mv = /* @__PURE__ */ la({
  __name: "YearModePicker",
  props: {
    ..._r,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const a = t, r = e, { showRightIcon: n, showLeftIcon: i } = mo(), { defaultedConfig: o, defaultedMultiCalendars: c, defaultedAriaLabels: f, defaultedTransitions: m, defaultedUI: v } = Dt(r), { showTransition: p, transitionName: g } = ei(m), k = se(!1), w = (T = !1, C) => {
      k.value = !k.value, a("toggle-year-picker", { flow: T, show: C });
    }, b = (T) => {
      k.value = !1, a("year-select", T);
    }, D = (T = !1) => {
      a("handle-year", T);
    };
    return (T, C) => {
      var $, P, G, R, E;
      return F(), z(We, null, [
        Se("div", {
          class: fe(["dp--year-mode-picker", { "dp--hidden-el": k.value }])
        }, [
          y(i)(y(c), e.instance) ? (F(), Ve(Nl, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": ($ = y(f)) == null ? void 0 : $.prevYear,
            disabled: e.isDisabled(!1),
            class: fe((P = y(v)) == null ? void 0 : P.navBtnPrev),
            onActivate: C[0] || (C[0] = (U) => D(!1))
          }, {
            default: je(() => [
              T.$slots["arrow-left"] ? xe(T.$slots, "arrow-left", { key: 0 }) : ue("", !0),
              T.$slots["arrow-left"] ? ue("", !0) : (F(), Ve(y(nc), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : ue("", !0),
          Se("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(G = y(f)) == null ? void 0 : G.openYearsOverlay}`,
            "data-test-id": `year-mode-btn-${e.instance}`,
            onClick: C[1] || (C[1] = () => w(!1)),
            onKeydown: C[2] || (C[2] = O_(() => w(!1), ["enter"]))
          }, [
            T.$slots.year ? xe(T.$slots, "year", {
              key: 0,
              year: e.year
            }) : ue("", !0),
            T.$slots.year ? ue("", !0) : (F(), z(We, { key: 1 }, [
              an(yt(e.year), 1)
            ], 64))
          ], 40, Qw),
          y(n)(y(c), e.instance) ? (F(), Ve(Nl, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (R = y(f)) == null ? void 0 : R.nextYear,
            disabled: e.isDisabled(!0),
            class: fe((E = y(v)) == null ? void 0 : E.navBtnNext),
            onActivate: C[3] || (C[3] = (U) => D(!0))
          }, {
            default: je(() => [
              T.$slots["arrow-right"] ? xe(T.$slots, "arrow-right", { key: 0 }) : ue("", !0),
              T.$slots["arrow-right"] ? ue("", !0) : (F(), Ve(y(sc), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : ue("", !0)
        ], 2),
        sa(Ls, {
          name: y(g)(e.showYearPicker),
          css: y(p)
        }, {
          default: je(() => {
            var U, H;
            return [
              e.showYearPicker ? (F(), Ve(Jl, {
                key: 0,
                items: e.items,
                "text-input": T.textInput,
                "esc-close": T.escClose,
                config: T.config,
                "is-last": T.autoApply && !y(o).keepActionRow,
                "hide-navigation": T.hideNavigation,
                "aria-labels": T.ariaLabels,
                "overlay-label": (H = (U = y(f)) == null ? void 0 : U.yearPicker) == null ? void 0 : H.call(U, !0),
                type: "year",
                onToggle: w,
                onSelected: C[4] || (C[4] = (q) => b(q))
              }, ha({
                "button-icon": je(() => [
                  T.$slots["calendar-icon"] ? xe(T.$slots, "calendar-icon", { key: 0 }) : ue("", !0),
                  T.$slots["calendar-icon"] ? ue("", !0) : (F(), Ve(y(yl), { key: 1 }))
                ]),
                _: 2
              }, [
                T.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: je(({ item: q }) => [
                    xe(T.$slots, "year-overlay-value", {
                      text: q.text,
                      value: q.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels", "overlay-label"])) : ue("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 64);
    };
  }
}), mc = (e, t, a) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => ze(e, r))) {
      const r = t.value.filter((n) => !ze(n, e));
      t.value = r.length ? r : null;
    } else (a && +a > t.value.length || !a) && t.value.push(e);
  else
    t.value = [e];
}, vc = (e, t, a) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? ($t(t, r[0]) ? r.unshift(t) : r[1] = t, a("range-end", t)) : (r = [t], a("range-start", t)), r;
}, ho = (e, t, a, r) => {
  e && (e[0] && e[1] && a && t("auto-apply"), e[0] && !e[1] && r && a && t("auto-apply"));
}, vv = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Ia(oe(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Ia(oe(e.value), e.timezone));
}, yv = (e, t, a, r) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && r.value.partialRange) ? r.value.fixedStart && (Lt(e, t.value[0]) || ze(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && ($t(e, t.value[1]) || ze(e, t.value[1])) ? [e, t.value[1]] : (a("invalid-fixed-range", e), t.value) : [], pv = ({
  multiCalendars: e,
  range: t,
  highlight: a,
  propDates: r,
  calendars: n,
  modelValue: i,
  props: o,
  filters: c,
  year: f,
  month: m,
  emit: v
}) => {
  const p = ee(() => dc(o.yearRange, o.locale, o.reverseYears)), g = se([!1]), k = ee(() => (q, J) => {
    const ge = vt(fr(/* @__PURE__ */ new Date()), {
      month: m.value(q),
      year: f.value(q)
    }), we = J ? Wm(ge) : Vl(ge);
    return uv(
      we,
      r.value.maxDate,
      r.value.minDate,
      o.preventMinMaxNavigation,
      J
    );
  }), w = () => Array.isArray(i.value) && e.value.solo && i.value[1], b = () => {
    for (let q = 0; q < e.value.count; q++)
      if (q === 0)
        n.value[q] = n.value[0];
      else if (q === e.value.count - 1 && w())
        n.value[q] = {
          month: Be(i.value[1]),
          year: Ee(i.value[1])
        };
      else {
        const J = vt(oe(), n.value[q - 1]);
        n.value[q] = { month: Be(J), year: Ee(Zd(J, 1)) };
      }
  }, D = (q) => {
    if (!q) return b();
    const J = vt(oe(), n.value[q]);
    return n.value[0].year = Ee(Jm(J, e.value.count - 1)), b();
  }, T = (q, J) => {
    const ge = sg(J, q);
    return t.value.showLastInRange && ge > 1 ? J : q;
  }, C = (q) => o.focusStartDate || e.value.solo ? q[0] : q[1] ? T(q[0], q[1]) : q[0], $ = () => {
    if (i.value) {
      const q = Array.isArray(i.value) ? C(i.value) : i.value;
      n.value[0] = { month: Be(q), year: Ee(q) };
    }
  }, P = () => {
    $(), e.value.count && b();
  };
  Rt(i, (q, J) => {
    o.isTextInputDate && JSON.stringify(q ?? {}) !== JSON.stringify(J ?? {}) && P();
  }), It(() => {
    P();
  });
  const G = (q, J) => {
    n.value[J].year = q, v("update-month-year", { instance: J, year: q, month: n.value[J].month }), e.value.count && !e.value.solo && D(J);
  }, R = ee(() => (q) => ml(p.value, (J) => {
    var ge;
    const we = f.value(q) === J.value, I = jl(
      J.value,
      vl(r.value.minDate),
      vl(r.value.maxDate)
    ) || ((ge = c.value.years) == null ? void 0 : ge.includes(f.value(q))), V = hc(a.value, J.value);
    return { active: we, disabled: I, highlighted: V };
  })), E = (q, J) => {
    G(q, J), H(J);
  }, U = (q, J = !1) => {
    if (!k.value(q, J)) {
      const ge = J ? f.value(q) + 1 : f.value(q) - 1;
      G(ge, q);
    }
  }, H = (q, J = !1, ge) => {
    J || v("reset-flow"), ge !== void 0 ? g.value[q] = ge : g.value[q] = !g.value[q], g.value[q] ? v("overlay-toggle", { open: !0, overlay: fa.year }) : (v("overlay-closed"), v("overlay-toggle", { open: !1, overlay: fa.year }));
  };
  return {
    isDisabled: k,
    groupedYears: R,
    showYearPicker: g,
    selectYear: G,
    toggleYearPicker: H,
    handleYearSelect: E,
    handleYear: U
  };
}, Kw = (e, t) => {
  const {
    defaultedMultiCalendars: a,
    defaultedAriaLabels: r,
    defaultedTransitions: n,
    defaultedConfig: i,
    defaultedRange: o,
    defaultedHighlight: c,
    propDates: f,
    defaultedTz: m,
    defaultedFilters: v,
    defaultedMultiDates: p
  } = Dt(e), g = () => {
    e.isTextInputDate && P(Ee(oe(e.startDate)), 0);
  }, { modelValue: k, year: w, month: b, calendars: D } = ti(e, t, g), T = ee(() => tv(e.formatLocale, e.locale, e.monthNameFormat)), C = se(null), { checkMinMaxRange: $ } = Zn(e), {
    selectYear: P,
    groupedYears: G,
    showYearPicker: R,
    toggleYearPicker: E,
    handleYearSelect: U,
    handleYear: H,
    isDisabled: q
  } = pv({
    modelValue: k,
    multiCalendars: a,
    range: o,
    highlight: c,
    calendars: D,
    year: w,
    propDates: f,
    month: b,
    filters: v,
    props: e,
    emit: t
  });
  It(() => {
    e.startDate && (k.value && e.focusStartDate || !k.value) && P(Ee(oe(e.startDate)), 0);
  });
  const J = (_) => _ ? { month: Be(_), year: Ee(_) } : { month: null, year: null }, ge = () => k.value ? Array.isArray(k.value) ? k.value.map((_) => J(_)) : J(k.value) : J(), we = (_, S) => {
    const ne = D.value[_], x = ge();
    return Array.isArray(x) ? x.some((ve) => ve.year === (ne == null ? void 0 : ne.year) && ve.month === S) : (ne == null ? void 0 : ne.year) === x.year && S === x.month;
  }, I = (_, S, ne) => {
    var x, ve;
    const A = ge();
    return Array.isArray(A) ? w.value(S) === ((x = A[ne]) == null ? void 0 : x.year) && _ === ((ve = A[ne]) == null ? void 0 : ve.month) : !1;
  }, V = (_, S) => {
    if (o.value.enabled) {
      const ne = ge();
      if (Array.isArray(k.value) && Array.isArray(ne)) {
        const x = I(_, S, 0) || I(_, S, 1), ve = wn(fr(oe()), _, w.value(S));
        return uo(k.value, C.value, ve) && !x;
      }
      return !1;
    }
    return !1;
  }, N = ee(() => (_) => ml(T.value, (S) => {
    var ne;
    const x = we(_, S.value), ve = jl(
      S.value,
      sv(w.value(_), f.value.minDate),
      lv(w.value(_), f.value.maxDate)
    ) || gw(f.value.disabledDates, w.value(_)).includes(S.value) || ((ne = v.value.months) == null ? void 0 : ne.includes(S.value)) || !ww(f.value.allowedDates, w.value(_), S.value), A = V(S.value, _), st = cv(c.value, S.value, w.value(_));
    return { active: x, disabled: ve, isBetween: A, highlighted: st };
  })), te = (_, S) => wn(fr(oe()), _, w.value(S)), me = (_, S) => {
    const ne = k.value ? k.value : fr(/* @__PURE__ */ new Date());
    k.value = wn(ne, _, w.value(S)), t("auto-apply"), t("update-flow-step");
  }, K = (_, S) => {
    const ne = te(_, S);
    o.value.fixedEnd || o.value.fixedStart ? k.value = yv(ne, k, t, o) : k.value ? $(ne, k.value) && (k.value = vc(k, te(_, S), t)) : k.value = [te(_, S)], va().then(() => {
      ho(k.value, t, e.autoApply, e.modelAuto);
    });
  }, Y = (_, S) => {
    mc(te(_, S), k, p.value.limit), t("auto-apply", !0);
  }, de = (_, S) => (D.value[S].month = _, j(S, D.value[S].year, _), p.value.enabled ? Y(_, S) : o.value.enabled ? K(_, S) : me(_, S)), Q = (_, S) => {
    P(_, S), j(S, _, null);
  }, j = (_, S, ne) => {
    let x = ne;
    if (!x && x !== 0) {
      const ve = ge();
      x = Array.isArray(ve) ? ve[_].month : ve.month;
    }
    t("update-month-year", { instance: _, year: S, month: x });
  };
  return {
    groupedMonths: N,
    groupedYears: G,
    year: w,
    isDisabled: q,
    defaultedMultiCalendars: a,
    defaultedAriaLabels: r,
    defaultedTransitions: n,
    defaultedConfig: i,
    showYearPicker: R,
    modelValue: k,
    presetDate: (_, S) => {
      vv({
        value: _,
        modelValue: k,
        range: o.value.enabled,
        timezone: S ? void 0 : m.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (_, S) => {
      C.value = te(_, S);
    },
    selectMonth: de,
    selectYear: Q,
    toggleYearPicker: E,
    handleYearSelect: U,
    handleYear: H,
    getModelMonthYear: ge
  };
}, Xw = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ..._r
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = Ns(), i = Ua(n, "yearMode"), o = e;
    It(() => {
      o.shadow || r("mount", null);
    });
    const {
      groupedMonths: c,
      groupedYears: f,
      year: m,
      isDisabled: v,
      defaultedMultiCalendars: p,
      defaultedConfig: g,
      showYearPicker: k,
      modelValue: w,
      presetDate: b,
      setHoverDate: D,
      selectMonth: T,
      selectYear: C,
      toggleYearPicker: $,
      handleYearSelect: P,
      handleYear: G,
      getModelMonthYear: R
    } = Kw(o, r);
    return t({ getSidebarProps: () => ({
      modelValue: w,
      year: m,
      getModelMonthYear: R,
      selectMonth: T,
      selectYear: C,
      handleYear: G
    }), presetDate: b, toggleYearPicker: (E) => $(0, E) }), (E, U) => (F(), Ve(fo, {
      "multi-calendars": y(p).count,
      collapse: E.collapse,
      stretch: "",
      "is-mobile": E.isMobile
    }, {
      default: je(({ instance: H }) => [
        E.$slots["top-extra"] ? xe(E.$slots, "top-extra", {
          key: 0,
          value: E.internalModelValue
        }) : ue("", !0),
        E.$slots["month-year"] ? xe(E.$slots, "month-year", Jt(Zt({ key: 1 }, {
          year: y(m),
          months: y(c)(H),
          years: y(f)(H),
          selectMonth: y(T),
          selectYear: y(C),
          instance: H
        }))) : (F(), Ve(Jl, {
          key: 2,
          items: y(c)(H),
          "arrow-navigation": E.arrowNavigation,
          "is-last": E.autoApply && !y(g).keepActionRow,
          "esc-close": E.escClose,
          height: y(g).modeHeight,
          config: E.config,
          "no-overlay-focus": !!(E.noOverlayFocus || E.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (q) => y(T)(q, H),
          onHoverValue: (q) => y(D)(q, H)
        }, ha({
          header: je(() => [
            sa(mv, Zt(E.$props, {
              items: y(f)(H),
              instance: H,
              "show-year-picker": y(k)[H],
              year: y(m)(H),
              "is-disabled": (q) => y(v)(H, q),
              onHandleYear: (q) => y(G)(H, q),
              onYearSelect: (q) => y(P)(q, H),
              onToggleYearPicker: (q) => y($)(H, q == null ? void 0 : q.flow, q == null ? void 0 : q.show)
            }), ha({ _: 2 }, [
              ut(y(i), (q, J) => ({
                name: q,
                fn: je((ge) => [
                  xe(E.$slots, q, Jt(Ra(ge)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          E.$slots["month-overlay-value"] ? {
            name: "item",
            fn: je(({ item: q }) => [
              xe(E.$slots, "month-overlay-value", {
                text: q.text,
                value: q.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), Zw = (e, t) => {
  const a = () => {
    e.isTextInputDate && (v.value = Ee(oe(e.startDate)));
  }, { modelValue: r } = ti(e, t, a), n = se(null), { defaultedHighlight: i, defaultedMultiDates: o, defaultedFilters: c, defaultedRange: f, propDates: m } = Dt(e), v = se();
  It(() => {
    e.startDate && (r.value && e.focusStartDate || !r.value) && (v.value = Ee(oe(e.startDate)));
  });
  const p = (b) => Array.isArray(r.value) ? r.value.some((D) => Ee(D) === b) : r.value ? Ee(r.value) === b : !1, g = (b) => f.value.enabled && Array.isArray(r.value) ? uo(r.value, n.value, w(b)) : !1, k = ee(() => ml(dc(e.yearRange, e.locale, e.reverseYears), (b) => {
    const D = p(b.value), T = jl(
      b.value,
      vl(m.value.minDate),
      vl(m.value.maxDate)
    ) || c.value.years.includes(b.value), C = g(b.value) && !D, $ = hc(i.value, b.value);
    return { active: D, disabled: T, isBetween: C, highlighted: $ };
  })), w = (b) => en(fr(Vl(/* @__PURE__ */ new Date())), b);
  return {
    groupedYears: k,
    modelValue: r,
    focusYear: v,
    setHoverValue: (b) => {
      n.value = en(fr(/* @__PURE__ */ new Date()), b);
    },
    selectYear: (b) => {
      var D;
      if (t("update-month-year", { instance: 0, year: b }), o.value.enabled)
        return r.value ? Array.isArray(r.value) && (((D = r.value) == null ? void 0 : D.map((T) => Ee(T))).includes(b) ? r.value = r.value.filter((T) => Ee(T) !== b) : r.value.push(en(Ma(oe()), b))) : r.value = [en(Ma(Vl(oe())), b)], t("auto-apply", !0);
      f.value.enabled ? (r.value = vc(r, w(b), t), va().then(() => {
        ho(r.value, t, e.autoApply, e.modelAuto);
      })) : (r.value = w(b), t("auto-apply"));
    }
  };
}, Jw = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ..._r
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, { groupedYears: i, modelValue: o, focusYear: c, selectYear: f, setHoverValue: m } = Zw(n, r), { defaultedConfig: v } = Dt(n);
    return t({ getSidebarProps: () => ({
      modelValue: o,
      selectYear: f
    }) }), (p, g) => (F(), z("div", null, [
      p.$slots["top-extra"] ? xe(p.$slots, "top-extra", {
        key: 0,
        value: p.internalModelValue
      }) : ue("", !0),
      p.$slots["month-year"] ? xe(p.$slots, "month-year", Jt(Zt({ key: 1 }, {
        years: y(i),
        selectYear: y(f)
      }))) : (F(), Ve(Jl, {
        key: 2,
        items: y(i),
        "is-last": p.autoApply && !y(v).keepActionRow,
        height: y(v).modeHeight,
        config: p.config,
        "no-overlay-focus": !!(p.noOverlayFocus || p.textInput),
        "focus-value": y(c),
        type: "year",
        "use-relative": "",
        onSelected: y(f),
        onHoverValue: y(m)
      }, ha({ _: 2 }, [
        p.$slots["year-overlay-value"] ? {
          name: "item",
          fn: je(({ item: k }) => [
            xe(p.$slots, "year-overlay-value", {
              text: k.text,
              value: k.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), eb = {
  key: 0,
  class: "dp__time_input"
}, tb = ["data-compact", "data-collapsed"], ab = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], rb = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], nb = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], sb = { key: 0 }, lb = ["aria-label", "data-compact"], ib = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ..._r
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, { setTimePickerElements: i, setTimePickerBackRef: o } = Xn(), {
      defaultedAriaLabels: c,
      defaultedTransitions: f,
      defaultedFilters: m,
      defaultedConfig: v,
      defaultedRange: p,
      defaultedMultiCalendars: g
    } = Dt(n), { transitionName: k, showTransition: w } = ei(f), b = xn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), D = se("AM"), T = se(null), C = se([]), $ = se(), P = se(!1);
    It(() => {
      r("mounted");
    });
    const G = (M) => vt(/* @__PURE__ */ new Date(), {
      hours: M.hours,
      minutes: M.minutes,
      seconds: n.enableSeconds ? M.seconds : 0,
      milliseconds: 0
    }), R = ee(
      () => (M) => K(M, n[M]) || U(M, n[M])
    ), E = ee(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), U = (M, ae) => p.value.enabled && !p.value.disableTimeRangeValidation ? !n.validateTime(M, ae) : !1, H = (M, ae) => {
      if (p.value.enabled && !p.value.disableTimeRangeValidation) {
        const $e = ae ? +n[`${M}Increment`] : -+n[`${M}Increment`], he = n[M] + $e;
        return !n.validateTime(M, he);
      }
      return !1;
    }, q = ee(() => (M) => !_(+n[M] + +n[`${M}Increment`], M) || H(M, !0)), J = ee(() => (M) => !_(+n[M] - +n[`${M}Increment`], M) || H(M, !1)), ge = (M, ae) => Rm(vt(oe(), M), ae), we = (M, ae) => tw(vt(oe(), M), ae), I = ee(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), V = ee(
      () => n.timePickerInline && p.value.enabled && !g.value.count
    ), N = ee(() => {
      const M = [{ type: "hours" }];
      return n.enableMinutes && M.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), n.enableSeconds && M.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), M;
    }), te = ee(() => N.value.filter((M) => !M.separator)), me = ee(() => (M) => {
      if (M === "hours") {
        const ae = st(+n.hours);
        return { text: ae < 10 ? `0${ae}` : `${ae}`, value: ae };
      }
      return { text: n[M] < 10 ? `0${n[M]}` : `${n[M]}`, value: n[M] };
    }), K = (M, ae) => {
      var $e;
      if (!n.disabledTimesConfig) return !1;
      const he = n.disabledTimesConfig(n.order, M === "hours" ? ae : void 0);
      return he[M] ? !!(($e = he[M]) != null && $e.includes(ae)) : !0;
    }, Y = (M, ae) => ae !== "hours" || D.value === "AM" ? M : M + 12, de = (M) => {
      const ae = n.is24 ? 24 : 12, $e = M === "hours" ? ae : 60, he = +n[`${M}GridIncrement`], qe = M === "hours" && !n.is24 ? he : 0, Fe = [];
      for (let L = qe; L < $e; L += he)
        Fe.push({ value: n.is24 ? L : Y(L, M), text: L < 10 ? `0${L}` : `${L}` });
      return M === "hours" && !n.is24 && Fe.unshift({ value: D.value === "PM" ? 12 : 0, text: "12" }), ml(Fe, (L) => ({ active: !1, disabled: m.value.times[M].includes(L.value) || !_(L.value, M) || K(M, L.value) || U(M, L.value) }));
    }, Q = (M) => M >= 0 ? M : 59, j = (M) => M >= 0 ? M : 23, _ = (M, ae) => {
      const $e = n.minTime ? G(Vo(n.minTime)) : null, he = n.maxTime ? G(Vo(n.maxTime)) : null, qe = G(
        Vo(
          E.value,
          ae,
          ae === "minutes" || ae === "seconds" ? Q(M) : j(M)
        )
      );
      return $e && he ? (Hl(qe, he) || nl(qe, he)) && (fl(qe, $e) || nl(qe, $e)) : $e ? fl(qe, $e) || nl(qe, $e) : he ? Hl(qe, he) || nl(qe, he) : !0;
    }, S = (M) => n[`no${M[0].toUpperCase() + M.slice(1)}Overlay`], ne = (M) => {
      S(M) || (b[M] = !b[M], b[M] ? (P.value = !0, r("overlay-opened", M)) : (P.value = !1, r("overlay-closed", M)));
    }, x = (M) => M === "hours" ? Sn : M === "minutes" ? Kn : cl, ve = () => {
      $.value && clearTimeout($.value);
    }, A = (M, ae = !0, $e) => {
      const he = ae ? ge : we, qe = ae ? +n[`${M}Increment`] : -+n[`${M}Increment`];
      _(+n[M] + qe, M) && r(
        `update:${M}`,
        x(M)(he({ [M]: +n[M] }, { [M]: +n[`${M}Increment`] }))
      ), !($e != null && $e.keyboard) && v.value.timeArrowHoldThreshold && ($.value = setTimeout(() => {
        A(M, ae);
      }, v.value.timeArrowHoldThreshold));
    }, st = (M) => n.is24 ? M : (M >= 12 ? D.value = "PM" : D.value = "AM", iw(M)), B = () => {
      D.value === "PM" ? (D.value = "AM", r("update:hours", n.hours - 12)) : (D.value = "PM", r("update:hours", n.hours + 12)), r("am-pm-change", D.value);
    }, le = (M) => {
      b[M] = !0;
    }, re = (M, ae, $e) => {
      if (M && n.arrowNavigation) {
        Array.isArray(C.value[ae]) ? C.value[ae][$e] = M : C.value[ae] = [M];
        const he = C.value.reduce(
          (qe, Fe) => Fe.map((L, ie) => [...qe[ie] || [], Fe[ie]]),
          []
        );
        o(n.closeTimePickerBtn), T.value && (he[1] = he[1].concat(T.value)), i(he, n.order);
      }
    }, ke = (M, ae) => (ne(M), r(`update:${M}`, ae));
    return t({ openChildCmp: le }), (M, ae) => {
      var $e;
      return M.disabled ? ue("", !0) : (F(), z("div", eb, [
        (F(!0), z(We, null, ut(N.value, (he, qe) => {
          var Fe, L, ie;
          return F(), z("div", {
            key: qe,
            class: fe(I.value),
            "data-compact": V.value && !M.enableSeconds,
            "data-collapsed": V.value && M.enableSeconds
          }, [
            he.separator ? (F(), z(We, { key: 0 }, [
              P.value ? ue("", !0) : (F(), z(We, { key: 0 }, [
                an(":")
              ], 64))
            ], 64)) : (F(), z(We, { key: 1 }, [
              Se("button", {
                ref_for: !0,
                ref: (Ye) => re(Ye, qe, 0),
                type: "button",
                class: fe({
                  dp__btn: !0,
                  dp__inc_dec_button: !M.timePickerInline,
                  dp__inc_dec_button_inline: M.timePickerInline,
                  dp__tp_inline_btn_top: M.timePickerInline,
                  dp__inc_dec_button_disabled: q.value(he.type),
                  "dp--hidden-el": P.value
                }),
                "data-test-id": `${he.type}-time-inc-btn-${n.order}`,
                "aria-label": (Fe = y(c)) == null ? void 0 : Fe.incrementValue(he.type),
                tabindex: "0",
                onKeydown: (Ye) => y(ka)(Ye, () => A(he.type, !0, { keyboard: !0 }), !0),
                onClick: (Ye) => y(v).timeArrowHoldThreshold ? void 0 : A(he.type, !0),
                onMousedown: (Ye) => y(v).timeArrowHoldThreshold ? A(he.type, !0) : void 0,
                onMouseup: ve
              }, [
                n.timePickerInline ? (F(), z(We, { key: 1 }, [
                  M.$slots["tp-inline-arrow-up"] ? xe(M.$slots, "tp-inline-arrow-up", { key: 0 }) : (F(), z(We, { key: 1 }, [
                    ae[2] || (ae[2] = Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    ae[3] || (ae[3] = Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (F(), z(We, { key: 0 }, [
                  M.$slots["arrow-up"] ? xe(M.$slots, "arrow-up", { key: 0 }) : ue("", !0),
                  M.$slots["arrow-up"] ? ue("", !0) : (F(), Ve(y(ic), { key: 1 }))
                ], 64))
              ], 42, ab),
              Se("button", {
                ref_for: !0,
                ref: (Ye) => re(Ye, qe, 1),
                type: "button",
                "aria-label": `${me.value(he.type).text}-${(L = y(c)) == null ? void 0 : L.openTpOverlay(he.type)}`,
                class: fe({
                  dp__time_display: !0,
                  dp__time_display_block: !M.timePickerInline,
                  dp__time_display_inline: M.timePickerInline,
                  "dp--time-invalid": R.value(he.type),
                  "dp--time-overlay-btn": !R.value(he.type),
                  "dp--hidden-el": P.value
                }),
                disabled: S(he.type),
                tabindex: "0",
                "data-test-id": `${he.type}-toggle-overlay-btn-${n.order}`,
                onKeydown: (Ye) => y(ka)(Ye, () => ne(he.type), !0),
                onClick: (Ye) => ne(he.type)
              }, [
                M.$slots[he.type] ? xe(M.$slots, he.type, {
                  key: 0,
                  text: me.value(he.type).text,
                  value: me.value(he.type).value
                }) : ue("", !0),
                M.$slots[he.type] ? ue("", !0) : (F(), z(We, { key: 1 }, [
                  an(yt(me.value(he.type).text), 1)
                ], 64))
              ], 42, rb),
              Se("button", {
                ref_for: !0,
                ref: (Ye) => re(Ye, qe, 2),
                type: "button",
                class: fe({
                  dp__btn: !0,
                  dp__inc_dec_button: !M.timePickerInline,
                  dp__inc_dec_button_inline: M.timePickerInline,
                  dp__tp_inline_btn_bottom: M.timePickerInline,
                  dp__inc_dec_button_disabled: J.value(he.type),
                  "dp--hidden-el": P.value
                }),
                "data-test-id": `${he.type}-time-dec-btn-${n.order}`,
                "aria-label": (ie = y(c)) == null ? void 0 : ie.decrementValue(he.type),
                tabindex: "0",
                onKeydown: (Ye) => y(ka)(Ye, () => A(he.type, !1, { keyboard: !0 }), !0),
                onClick: (Ye) => y(v).timeArrowHoldThreshold ? void 0 : A(he.type, !1),
                onMousedown: (Ye) => y(v).timeArrowHoldThreshold ? A(he.type, !1) : void 0,
                onMouseup: ve
              }, [
                n.timePickerInline ? (F(), z(We, { key: 1 }, [
                  M.$slots["tp-inline-arrow-down"] ? xe(M.$slots, "tp-inline-arrow-down", { key: 0 }) : (F(), z(We, { key: 1 }, [
                    ae[4] || (ae[4] = Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    ae[5] || (ae[5] = Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (F(), z(We, { key: 0 }, [
                  M.$slots["arrow-down"] ? xe(M.$slots, "arrow-down", { key: 0 }) : ue("", !0),
                  M.$slots["arrow-down"] ? ue("", !0) : (F(), Ve(y(oc), { key: 1 }))
                ], 64))
              ], 42, nb)
            ], 64))
          ], 10, tb);
        }), 128)),
        M.is24 ? ue("", !0) : (F(), z("div", sb, [
          M.$slots["am-pm-button"] ? xe(M.$slots, "am-pm-button", {
            key: 0,
            toggle: B,
            value: D.value
          }) : ue("", !0),
          M.$slots["am-pm-button"] ? ue("", !0) : (F(), z("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: T,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": ($e = y(c)) == null ? void 0 : $e.amPmButton,
            tabindex: "0",
            "data-compact": V.value,
            onClick: B,
            onKeydown: ae[0] || (ae[0] = (he) => y(ka)(he, () => B(), !0))
          }, yt(D.value), 41, lb))
        ])),
        (F(!0), z(We, null, ut(te.value, (he, qe) => (F(), Ve(Ls, {
          key: qe,
          name: y(k)(b[he.type]),
          css: y(w)
        }, {
          default: je(() => {
            var Fe, L;
            return [
              b[he.type] ? (F(), Ve(Jl, {
                key: 0,
                items: de(he.type),
                "is-last": M.autoApply && !y(v).keepActionRow,
                "esc-close": M.escClose,
                type: he.type,
                "text-input": M.textInput,
                config: M.config,
                "arrow-navigation": M.arrowNavigation,
                "aria-labels": M.ariaLabels,
                "overlay-label": (L = (Fe = y(c)).timeOverlay) == null ? void 0 : L.call(Fe, he.type),
                onSelected: (ie) => ke(he.type, ie),
                onToggle: (ie) => ne(he.type),
                onResetFlow: ae[1] || (ae[1] = (ie) => M.$emit("reset-flow"))
              }, ha({
                "button-icon": je(() => [
                  M.$slots["clock-icon"] ? xe(M.$slots, "clock-icon", { key: 0 }) : ue("", !0),
                  M.$slots["clock-icon"] ? ue("", !0) : (F(), Ve(Xl(M.timePickerInline ? y(yl) : y(lc)), { key: 1 }))
                ]),
                _: 2
              }, [
                M.$slots[`${he.type}-overlay-value`] ? {
                  name: "item",
                  fn: je(({ item: ie }) => [
                    xe(M.$slots, `${he.type}-overlay-value`, {
                      text: ie.text,
                      value: ie.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                M.$slots[`${he.type}-overlay-header`] ? {
                  name: "header",
                  fn: je(() => [
                    xe(M.$slots, `${he.type}-overlay-header`, {
                      toggle: () => ne(he.type)
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : ue("", !0)
            ];
          }),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), ob = ["data-dp-mobile"], ub = ["aria-label", "tabindex"], db = ["role", "aria-label", "tabindex"], cb = ["aria-label"], _v = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ..._r
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, { buildMatrix: i, setTimePicker: o } = Xn(), c = Ns(), { defaultedTransitions: f, defaultedAriaLabels: m, defaultedTextInput: v, defaultedConfig: p, defaultedRange: g } = Dt(n), { transitionName: k, showTransition: w } = ei(f), { hideNavigationButtons: b } = mo(), D = se(null), T = se(null), C = se([]), $ = se(null), P = se(!1);
    It(() => {
      r("mount"), !n.timePicker && n.arrowNavigation ? i([Bt(D.value)], "time") : o(!0, n.timePicker);
    });
    const G = ee(() => g.value.enabled && n.modelAuto ? av(n.internalModelValue) : !0), R = se(!1), E = (K) => ({
      hours: Array.isArray(n.hours) ? n.hours[K] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[K] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[K] : n.seconds
    }), U = ee(() => {
      const K = [];
      if (g.value.enabled)
        for (let Y = 0; Y < 2; Y++)
          K.push(E(Y));
      else
        K.push(E(0));
      return K;
    }), H = (K, Y = !1, de = "") => {
      Y || r("reset-flow"), R.value = K, r(K ? "overlay-opened" : "overlay-closed", fa.time), n.arrowNavigation && o(K), va(() => {
        de !== "" && C.value[0] && C.value[0].openChildCmp(de);
      });
    }, q = ee(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !p.value.keepActionRow
    })), J = Ua(c, "timePicker"), ge = (K, Y, de) => g.value.enabled ? Y === 0 ? [K, U.value[1][de]] : [U.value[0][de], K] : K, we = (K) => {
      r("update:hours", K);
    }, I = (K) => {
      r("update:minutes", K);
    }, V = (K) => {
      r("update:seconds", K);
    }, N = () => {
      if ($.value && !v.value.enabled && !n.noOverlayFocus) {
        const K = rv($.value);
        K && K.focus({ preventScroll: !0 });
      }
    }, te = (K) => {
      P.value = !1, r("overlay-closed", K);
    }, me = (K) => {
      P.value = !0, r("overlay-opened", K);
    };
    return t({ toggleTimePicker: H }), (K, Y) => {
      var de;
      return F(), z("div", {
        class: "dp--tp-wrap",
        "data-dp-mobile": K.isMobile
      }, [
        !K.timePicker && !K.timePickerInline ? Rs((F(), z("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: D,
          type: "button",
          class: fe({ ...q.value, "dp--hidden-el": R.value }),
          "aria-label": (de = y(m)) == null ? void 0 : de.openTimePicker,
          tabindex: K.noOverlayFocus ? void 0 : 0,
          "data-test-id": "open-time-picker-btn",
          onKeydown: Y[0] || (Y[0] = (Q) => y(ka)(Q, () => H(!0))),
          onClick: Y[1] || (Y[1] = (Q) => H(!0))
        }, [
          K.$slots["clock-icon"] ? xe(K.$slots, "clock-icon", { key: 0 }) : ue("", !0),
          K.$slots["clock-icon"] ? ue("", !0) : (F(), Ve(y(lc), { key: 1 }))
        ], 42, ub)), [
          [Fl, !y(b)(K.hideNavigation, "time")]
        ]) : ue("", !0),
        sa(Ls, {
          name: y(k)(R.value),
          css: y(w) && !K.timePickerInline
        }, {
          default: je(() => {
            var Q, j;
            return [
              R.value || K.timePicker || K.timePickerInline ? (F(), z("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: $,
                role: K.timePickerInline ? void 0 : "dialog",
                class: fe({
                  dp__overlay: !K.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !K.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: Ja(K.timePicker ? { height: `${y(p).modeHeight}px` } : void 0),
                "aria-label": (Q = y(m)) == null ? void 0 : Q.timePicker,
                tabindex: K.timePickerInline ? void 0 : 0
              }, [
                Se("div", {
                  class: fe(
                    K.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  K.$slots["time-picker-overlay"] ? xe(K.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: we,
                    setMinutes: I,
                    setSeconds: V
                  }) : ue("", !0),
                  K.$slots["time-picker-overlay"] ? ue("", !0) : (F(), z("div", {
                    key: 1,
                    class: fe(K.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (F(!0), z(We, null, ut(U.value, (_, S) => Rs((F(), Ve(ib, Zt({
                      key: S,
                      ref_for: !0
                    }, {
                      ...K.$props,
                      order: S,
                      hours: _.hours,
                      minutes: _.minutes,
                      seconds: _.seconds,
                      closeTimePickerBtn: T.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: S === 0 ? y(g).fixedStart : y(g).fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: C,
                      "validate-time": (ne, x) => e.validateTime(ne, ge(x, S, ne)),
                      "onUpdate:hours": (ne) => we(ge(ne, S, "hours")),
                      "onUpdate:minutes": (ne) => I(ge(ne, S, "minutes")),
                      "onUpdate:seconds": (ne) => V(ge(ne, S, "seconds")),
                      onMounted: N,
                      onOverlayClosed: te,
                      onOverlayOpened: me,
                      onAmPmChange: Y[2] || (Y[2] = (ne) => K.$emit("am-pm-change", ne))
                    }), ha({ _: 2 }, [
                      ut(y(J), (ne, x) => ({
                        name: ne,
                        fn: je((ve) => [
                          xe(K.$slots, ne, Zt({ ref_for: !0 }, ve))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Fl, S === 0 ? !0 : G.value]
                    ])), 128))
                  ], 2)),
                  !K.timePicker && !K.timePickerInline ? Rs((F(), z("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: T,
                    type: "button",
                    class: fe({ ...q.value, "dp--hidden-el": P.value }),
                    "aria-label": (j = y(m)) == null ? void 0 : j.closeTimePicker,
                    tabindex: "0",
                    onKeydown: Y[3] || (Y[3] = (_) => y(ka)(_, () => H(!1))),
                    onClick: Y[4] || (Y[4] = (_) => H(!1))
                  }, [
                    K.$slots["calendar-icon"] ? xe(K.$slots, "calendar-icon", { key: 0 }) : ue("", !0),
                    K.$slots["calendar-icon"] ? ue("", !0) : (F(), Ve(y(yl), { key: 1 }))
                  ], 42, cb)), [
                    [Fl, !y(b)(K.hideNavigation, "time")]
                  ]) : ue("", !0)
                ], 2)
              ], 14, db)) : ue("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 8, ob);
    };
  }
}), gv = (e, t, a, r) => {
  const { defaultedRange: n } = Dt(e), i = ($, P) => Array.isArray(t[$]) ? t[$][P] : t[$], o = ($) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[$] : t.seconds : 0, c = ($, P) => $ ? P !== void 0 ? zn($, i("hours", P), i("minutes", P), o(P)) : zn($, t.hours, t.minutes, o()) : Zm(oe(), o(P)), f = ($, P) => {
    t[$] = P;
  }, m = ee(() => e.modelAuto && n.value.enabled ? Array.isArray(a.value) ? a.value.length > 1 : !1 : n.value.enabled), v = ($, P) => {
    const G = Object.fromEntries(
      Object.keys(t).map((R) => R === $ ? [R, P] : [R, t[R]].slice())
    );
    if (m.value && !n.value.disableTimeRangeValidation) {
      const R = (U) => a.value ? zn(
        a.value[U],
        G.hours[U],
        G.minutes[U],
        G.seconds[U]
      ) : null, E = (U) => Xm(a.value[U], 0);
      return !(ze(R(0), R(1)) && (fl(R(0), E(1)) || Hl(R(1), E(0))));
    }
    return !0;
  }, p = ($, P) => {
    v($, P) && (f($, P), r && r());
  }, g = ($) => {
    p("hours", $);
  }, k = ($) => {
    p("minutes", $);
  }, w = ($) => {
    p("seconds", $);
  }, b = ($, P, G, R) => {
    P && g($), !P && !G && k($), G && w($), a.value && R(a.value);
  }, D = ($) => {
    if ($) {
      const P = Array.isArray($), G = P ? [+$[0].hours, +$[1].hours] : +$.hours, R = P ? [+$[0].minutes, +$[1].minutes] : +$.minutes, E = P ? [+$[0].seconds, +$[1].seconds] : +$.seconds;
      f("hours", G), f("minutes", R), e.enableSeconds && f("seconds", E);
    }
  }, T = ($, P) => {
    const G = {
      hours: Array.isArray(t.hours) ? t.hours[$] : t.hours,
      disabledArr: []
    };
    return (P || P === 0) && (G.hours = P), Array.isArray(e.disabledTimes) && (G.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[$]) ? e.disabledTimes[$] : e.disabledTimes), G;
  }, C = ee(() => ($, P) => {
    var G;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: R, hours: E } = T($, P), U = R.filter((H) => +H.hours === E);
      return ((G = U[0]) == null ? void 0 : G.minutes) === "*" ? { hours: [E], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (U == null ? void 0 : U.map((H) => +H.minutes)) ?? [],
        seconds: (U == null ? void 0 : U.map((H) => H.seconds ? +H.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: f,
    updateHours: g,
    updateMinutes: k,
    updateSeconds: w,
    getSetDateTime: c,
    updateTimeValues: b,
    getSecondsValue: o,
    assignStartTime: D,
    validateTime: v,
    disabledTimesConfig: C
  };
}, fb = (e, t) => {
  const a = () => {
    e.isTextInputDate && P();
  }, { modelValue: r, time: n } = ti(e, t, a), { defaultedStartTime: i, defaultedRange: o, defaultedTz: c } = Dt(e), { updateTimeValues: f, getSetDateTime: m, setTime: v, assignStartTime: p, disabledTimesConfig: g, validateTime: k } = gv(e, n, r, w);
  function w() {
    t("update-flow-step");
  }
  const b = (R) => {
    const { hours: E, minutes: U, seconds: H } = R;
    return { hours: +E, minutes: +U, seconds: H ? +H : 0 };
  }, D = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const E = b(e.startTime[0]), U = b(e.startTime[1]);
        return [vt(oe(), E), vt(oe(), U)];
      }
      const R = b(e.startTime);
      return vt(oe(), R);
    }
    return o.value.enabled ? [null, null] : null;
  }, T = () => {
    if (o.value.enabled) {
      const [R, E] = D();
      r.value = [
        Ia(m(R, 0), c.value.timezone),
        Ia(m(E, 1), c.value.timezone)
      ];
    } else
      r.value = Ia(m(D()), c.value.timezone);
  }, C = (R) => Array.isArray(R) ? [Fs(oe(R[0])), Fs(oe(R[1]))] : [Fs(R ?? oe())], $ = (R, E, U) => {
    v("hours", R), v("minutes", E), v("seconds", e.enableSeconds ? U : 0);
  }, P = () => {
    const [R, E] = C(r.value);
    return o.value.enabled ? $(
      [R.hours, E.hours],
      [R.minutes, E.minutes],
      [R.seconds, E.seconds]
    ) : $(R.hours, R.minutes, R.seconds);
  };
  It(() => {
    if (!e.shadow)
      return p(i.value), r.value ? P() : T();
  });
  const G = () => {
    Array.isArray(r.value) ? r.value = r.value.map((R, E) => R && m(R, E)) : r.value = m(r.value), t("time-update");
  };
  return {
    modelValue: r,
    time: n,
    disabledTimesConfig: g,
    updateTime: (R, E = !0, U = !1) => {
      f(R, E, U, G);
    },
    validateTime: k
  };
}, hb = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ..._r
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, i = Ns(), o = Ua(i, "timePicker"), c = se(null), { time: f, modelValue: m, disabledTimesConfig: v, updateTime: p, validateTime: g } = fb(n, r);
    return It(() => {
      n.shadow || r("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: m,
      time: f,
      updateTime: p
    }), toggleTimePicker: (k, w = !1, b = "") => {
      var D;
      (D = c.value) == null || D.toggleTimePicker(k, w, b);
    } }), (k, w) => (F(), Ve(fo, {
      "multi-calendars": 0,
      stretch: "",
      "is-mobile": k.isMobile
    }, {
      default: je(() => [
        sa(_v, Zt({
          ref_key: "tpRef",
          ref: c
        }, k.$props, {
          hours: y(f).hours,
          minutes: y(f).minutes,
          seconds: y(f).seconds,
          "internal-model-value": k.internalModelValue,
          "disabled-times-config": y(v),
          "validate-time": y(g),
          "onUpdate:hours": w[0] || (w[0] = (b) => y(p)(b)),
          "onUpdate:minutes": w[1] || (w[1] = (b) => y(p)(b, !1)),
          "onUpdate:seconds": w[2] || (w[2] = (b) => y(p)(b, !1, !0)),
          onAmPmChange: w[3] || (w[3] = (b) => k.$emit("am-pm-change", b)),
          onResetFlow: w[4] || (w[4] = (b) => k.$emit("reset-flow")),
          onOverlayClosed: w[5] || (w[5] = (b) => k.$emit("overlay-toggle", { open: !1, overlay: b })),
          onOverlayOpened: w[6] || (w[6] = (b) => k.$emit("overlay-toggle", { open: !0, overlay: b }))
        }), ha({ _: 2 }, [
          ut(y(o), (b, D) => ({
            name: b,
            fn: je((T) => [
              xe(k.$slots, b, Jt(Ra(T)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }, 8, ["is-mobile"]));
  }
}), mb = { class: "dp--header-wrap" }, vb = {
  key: 0,
  class: "dp__month_year_wrap"
}, yb = { key: 0 }, pb = { class: "dp__month_year_wrap" }, _b = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], gb = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ..._r
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, {
      defaultedTransitions: i,
      defaultedAriaLabels: o,
      defaultedMultiCalendars: c,
      defaultedFilters: f,
      defaultedConfig: m,
      defaultedHighlight: v,
      propDates: p,
      defaultedUI: g
    } = Dt(n), { transitionName: k, showTransition: w } = ei(i), { buildMatrix: b } = Xn(), { handleMonthYearChange: D, isDisabled: T, updateMonthYear: C } = Lw(n, r), { showLeftIcon: $, showRightIcon: P } = mo(), G = se(!1), R = se(!1), E = se(!1), U = se([null, null, null, null]);
    It(() => {
      r("mount");
    });
    const H = (j) => ({
      get: () => n[j],
      set: (_) => {
        const S = j === ur.month ? ur.year : ur.month;
        r("update-month-year", { [j]: _, [S]: n[S] }), j === ur.month ? te(!0) : me(!0);
      }
    }), q = ee(H(ur.month)), J = ee(H(ur.year)), ge = ee(() => (j) => ({
      month: n.month,
      year: n.year,
      items: j === ur.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: C,
      toggle: j === ur.month ? te : me
    })), we = ee(() => n.months.find((_) => _.value === n.month) || { text: "", value: 0 }), I = ee(() => ml(n.months, (j) => {
      const _ = n.month === j.value, S = jl(
        j.value,
        sv(n.year, p.value.minDate),
        lv(n.year, p.value.maxDate)
      ) || f.value.months.includes(j.value), ne = cv(v.value, j.value, n.year);
      return { active: _, disabled: S, highlighted: ne };
    })), V = ee(() => ml(n.years, (j) => {
      const _ = n.year === j.value, S = jl(
        j.value,
        vl(p.value.minDate),
        vl(p.value.maxDate)
      ) || f.value.years.includes(j.value), ne = hc(v.value, j.value);
      return { active: _, disabled: S, highlighted: ne };
    })), N = (j, _, S) => {
      S !== void 0 ? j.value = S : j.value = !j.value, j.value ? (E.value = !0, r("overlay-opened", _)) : (E.value = !1, r("overlay-closed", _));
    }, te = (j = !1, _) => {
      K(j), N(G, fa.month, _);
    }, me = (j = !1, _) => {
      K(j), N(R, fa.year, _);
    }, K = (j) => {
      j || r("reset-flow");
    }, Y = (j, _) => {
      n.arrowNavigation && (U.value[_] = Bt(j), b(U.value, "monthYear"));
    }, de = ee(() => {
      var j, _, S, ne, x, ve;
      return [
        {
          type: ur.month,
          index: 1,
          toggle: te,
          modelValue: q.value,
          updateModelValue: (A) => q.value = A,
          text: we.value.text,
          showSelectionGrid: G.value,
          items: I.value,
          ariaLabel: (j = o.value) == null ? void 0 : j.openMonthsOverlay,
          overlayLabel: ((S = (_ = o.value).monthPicker) == null ? void 0 : S.call(_, !0)) ?? void 0
        },
        {
          type: ur.year,
          index: 2,
          toggle: me,
          modelValue: J.value,
          updateModelValue: (A) => J.value = A,
          text: nv(n.year, n.locale),
          showSelectionGrid: R.value,
          items: V.value,
          ariaLabel: (ne = o.value) == null ? void 0 : ne.openYearsOverlay,
          overlayLabel: ((ve = (x = o.value).yearPicker) == null ? void 0 : ve.call(x, !0)) ?? void 0
        }
      ];
    }), Q = ee(() => n.disableYearSelect ? [de.value[0]] : n.yearFirst ? [...de.value].reverse() : de.value);
    return t({
      toggleMonthPicker: te,
      toggleYearPicker: me,
      handleMonthYearChange: D
    }), (j, _) => {
      var S, ne, x, ve, A, st;
      return F(), z("div", mb, [
        j.$slots["month-year"] ? (F(), z("div", vb, [
          xe(j.$slots, "month-year", Jt(Ra({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: y(C), handleMonthYearChange: y(D), instance: e.instance })))
        ])) : (F(), z(We, { key: 1 }, [
          j.$slots["top-extra"] ? (F(), z("div", yb, [
            xe(j.$slots, "top-extra", { value: j.internalModelValue })
          ])) : ue("", !0),
          Se("div", pb, [
            y($)(y(c), e.instance) && !j.vertical ? (F(), Ve(Nl, {
              key: 0,
              "aria-label": (S = y(o)) == null ? void 0 : S.prevMonth,
              disabled: y(T)(!1),
              class: fe((ne = y(g)) == null ? void 0 : ne.navBtnPrev),
              "el-name": "action-prev",
              onActivate: _[0] || (_[0] = (B) => y(D)(!1, !0)),
              onSetRef: _[1] || (_[1] = (B) => Y(B, 0))
            }, {
              default: je(() => [
                j.$slots["arrow-left"] ? xe(j.$slots, "arrow-left", { key: 0 }) : ue("", !0),
                j.$slots["arrow-left"] ? ue("", !0) : (F(), Ve(y(nc), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : ue("", !0),
            Se("div", {
              class: fe(["dp__month_year_wrap", {
                dp__year_disable_select: j.disableYearSelect
              }])
            }, [
              (F(!0), z(We, null, ut(Q.value, (B, le) => (F(), z(We, {
                key: B.type
              }, [
                Se("button", {
                  ref_for: !0,
                  ref: (re) => Y(re, le + 1),
                  type: "button",
                  "data-dp-element": `overlay-${B.type}`,
                  class: fe(["dp__btn dp__month_year_select", { "dp--hidden-el": E.value }]),
                  "aria-label": `${B.text}-${B.ariaLabel}`,
                  "data-test-id": `${B.type}-toggle-overlay-${e.instance}`,
                  onClick: B.toggle,
                  onKeydown: (re) => y(ka)(re, () => B.toggle(), !0)
                }, [
                  j.$slots[B.type] ? xe(j.$slots, B.type, {
                    key: 0,
                    text: B.text,
                    value: n[B.type]
                  }) : ue("", !0),
                  j.$slots[B.type] ? ue("", !0) : (F(), z(We, { key: 1 }, [
                    an(yt(B.text), 1)
                  ], 64))
                ], 42, _b),
                sa(Ls, {
                  name: y(k)(B.showSelectionGrid),
                  css: y(w)
                }, {
                  default: je(() => [
                    B.showSelectionGrid ? (F(), Ve(Jl, {
                      key: 0,
                      items: B.items,
                      "arrow-navigation": j.arrowNavigation,
                      "hide-navigation": j.hideNavigation,
                      "is-last": j.autoApply && !y(m).keepActionRow,
                      "skip-button-ref": !1,
                      config: j.config,
                      type: B.type,
                      "header-refs": [],
                      "esc-close": j.escClose,
                      "menu-wrap-ref": j.menuWrapRef,
                      "text-input": j.textInput,
                      "aria-labels": j.ariaLabels,
                      "overlay-label": B.overlayLabel,
                      onSelected: B.updateModelValue,
                      onToggle: B.toggle
                    }, ha({
                      "button-icon": je(() => [
                        j.$slots["calendar-icon"] ? xe(j.$slots, "calendar-icon", { key: 0 }) : ue("", !0),
                        j.$slots["calendar-icon"] ? ue("", !0) : (F(), Ve(y(yl), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      j.$slots[`${B.type}-overlay-value`] ? {
                        name: "item",
                        fn: je(({ item: re }) => [
                          xe(j.$slots, `${B.type}-overlay-value`, {
                            text: re.text,
                            value: re.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      j.$slots[`${B.type}-overlay`] ? {
                        name: "overlay",
                        fn: je(() => [
                          xe(j.$slots, `${B.type}-overlay`, Zt({ ref_for: !0 }, ge.value(B.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      j.$slots[`${B.type}-overlay-header`] ? {
                        name: "header",
                        fn: je(() => [
                          xe(j.$slots, `${B.type}-overlay-header`, {
                            toggle: B.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : ue("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            y($)(y(c), e.instance) && j.vertical ? (F(), Ve(Nl, {
              key: 1,
              "aria-label": (x = y(o)) == null ? void 0 : x.prevMonth,
              "el-name": "action-prev",
              disabled: y(T)(!1),
              class: fe((ve = y(g)) == null ? void 0 : ve.navBtnPrev),
              onActivate: _[2] || (_[2] = (B) => y(D)(!1, !0))
            }, {
              default: je(() => [
                j.$slots["arrow-up"] ? xe(j.$slots, "arrow-up", { key: 0 }) : ue("", !0),
                j.$slots["arrow-up"] ? ue("", !0) : (F(), Ve(y(ic), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : ue("", !0),
            y(P)(y(c), e.instance) ? (F(), Ve(Nl, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: y(T)(!0),
              "aria-label": (A = y(o)) == null ? void 0 : A.nextMonth,
              class: fe((st = y(g)) == null ? void 0 : st.navBtnNext),
              onActivate: _[3] || (_[3] = (B) => y(D)(!0, !0)),
              onSetRef: _[4] || (_[4] = (B) => Y(B, j.disableYearSelect ? 2 : 3))
            }, {
              default: je(() => [
                j.$slots[j.vertical ? "arrow-down" : "arrow-right"] ? xe(j.$slots, j.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : ue("", !0),
                j.$slots[j.vertical ? "arrow-down" : "arrow-right"] ? ue("", !0) : (F(), Ve(Xl(j.vertical ? y(oc) : y(sc)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : ue("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), wb = {
  class: "dp__calendar_header",
  role: "row"
}, bb = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, kb = ["aria-label"], Mb = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, Db = { class: "dp__cell_inner" }, Sb = ["id", "aria-pressed", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Tb = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ..._r
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, { buildMultiLevelMatrix: i } = Xn(), {
      defaultedTransitions: o,
      defaultedConfig: c,
      defaultedAriaLabels: f,
      defaultedMultiCalendars: m,
      defaultedWeekNumbers: v,
      defaultedMultiDates: p,
      defaultedUI: g
    } = Dt(n), k = se(null), w = se({
      bottom: "",
      left: "",
      transform: ""
    }), b = se([]), D = se(null), T = se(!0), C = se(""), $ = se({ startX: 0, endX: 0, startY: 0, endY: 0 }), P = se([]), G = se({ left: "50%" }), R = se(!1), E = ee(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), U = ee(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : lw(n.formatLocale, n.locale, +n.weekStart));
    It(() => {
      r("mount", { cmp: "calendar", refs: b }), c.value.noSwipe || D.value && (D.value.addEventListener("touchstart", Y, { passive: !1 }), D.value.addEventListener("touchend", de, { passive: !1 }), D.value.addEventListener("touchmove", Q, { passive: !1 })), n.monthChangeOnScroll && D.value && D.value.addEventListener("wheel", S, { passive: !1 });
    });
    const H = (B) => B ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", q = (B, le) => {
      if (n.transitions) {
        const re = Ma(wn(oe(), n.month, n.year));
        C.value = Lt(Ma(wn(oe(), B, le)), re) ? o.value[H(!0)] : o.value[H(!1)], T.value = !1, va(() => {
          T.value = !0;
        });
      }
    }, J = ee(
      () => ({
        ...g.value.calendar ?? {}
      })
    ), ge = ee(() => (B) => {
      const le = ow(B);
      return {
        dp__marker_dot: le.type === "dot",
        dp__marker_line: le.type === "line"
      };
    }), we = ee(() => (B) => ze(B, k.value)), I = ee(() => ({
      dp__calendar: !0,
      dp__calendar_next: m.value.count > 0 && n.instance !== 0
    })), V = ee(() => (B) => n.hideOffsetDates ? B.current : !0), N = async (B, le) => {
      const { width: re, height: ke } = B.getBoundingClientRect();
      k.value = le.value;
      let M = { left: `${re / 2}px` }, ae = -50;
      if (await va(), P.value[0]) {
        const { left: $e, width: he } = P.value[0].getBoundingClientRect();
        $e < 0 && (M = { left: "0" }, ae = 0, G.value.left = `${re / 2}px`), window.innerWidth < $e + he && (M = { right: "0" }, ae = 0, G.value.left = `${he - re / 2}px`);
      }
      w.value = {
        bottom: `${ke}px`,
        ...M,
        transform: `translateX(${ae}%)`
      };
    }, te = async (B, le, re) => {
      var ke, M, ae;
      const $e = Bt(b.value[le][re]);
      $e && ((ke = B.marker) != null && ke.customPosition && (ae = (M = B.marker) == null ? void 0 : M.tooltip) != null && ae.length ? w.value = B.marker.customPosition($e) : await N($e, B), r("tooltip-open", B.marker));
    }, me = async (B, le, re) => {
      var ke, M;
      if (R.value && p.value.enabled && p.value.dragSelect)
        return r("select-date", B);
      if (r("set-hover-date", B), (M = (ke = B.marker) == null ? void 0 : ke.tooltip) != null && M.length) {
        if (n.hideOffsetDates && !B.current) return;
        await te(B, le, re);
      }
    }, K = (B) => {
      k.value && (k.value = null, w.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", B.marker));
    }, Y = (B) => {
      $.value.startX = B.changedTouches[0].screenX, $.value.startY = B.changedTouches[0].screenY;
    }, de = (B) => {
      $.value.endX = B.changedTouches[0].screenX, $.value.endY = B.changedTouches[0].screenY, j();
    }, Q = (B) => {
      n.vertical && !n.inline && B.preventDefault();
    }, j = () => {
      const B = n.vertical ? "Y" : "X";
      Math.abs($.value[`start${B}`] - $.value[`end${B}`]) > 10 && r("handle-swipe", $.value[`start${B}`] > $.value[`end${B}`] ? "right" : "left");
    }, _ = (B, le, re) => {
      B && (Array.isArray(b.value[le]) ? b.value[le][re] = B : b.value[le] = [B]), n.arrowNavigation && i(b.value, "calendar");
    }, S = (B) => {
      n.monthChangeOnScroll && (B.preventDefault(), r("handle-scroll", B));
    }, ne = (B) => v.value.type === "local" ? tc(B.value, { weekStartsOn: +n.weekStart }) : v.value.type === "iso" ? Jd(B.value) : typeof v.value.type == "function" ? v.value.type(B.value) : "", x = (B) => {
      const le = B[0];
      return v.value.hideOnOffsetDates ? B.some((re) => re.current) ? ne(le) : "" : ne(le);
    }, ve = (B, le, re = !0) => {
      re && Af() || !re && !Af() || (!p.value.enabled || c.value.allowPreventDefault) && (Gn(B, c.value), r("select-date", le));
    }, A = (B) => {
      Gn(B, c.value);
    }, st = (B) => {
      p.value.enabled && p.value.dragSelect ? (R.value = !0, r("select-date", B)) : p.value.enabled && r("select-date", B);
    };
    return t({ triggerTransition: q }), (B, le) => (F(), z("div", {
      class: fe(I.value)
    }, [
      Se("div", {
        ref_key: "calendarWrapRef",
        ref: D,
        class: fe(J.value),
        role: "grid"
      }, [
        Se("div", wb, [
          B.weekNumbers ? (F(), z("div", bb, yt(B.weekNumName), 1)) : ue("", !0),
          (F(!0), z(We, null, ut(U.value, (re, ke) => {
            var M, ae;
            return F(), z("div", {
              key: ke,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test-id": "calendar-header",
              "aria-label": (ae = (M = y(f)) == null ? void 0 : M.weekDay) == null ? void 0 : ae.call(M, ke)
            }, [
              B.$slots["calendar-header"] ? xe(B.$slots, "calendar-header", {
                key: 0,
                day: re,
                index: ke
              }) : ue("", !0),
              B.$slots["calendar-header"] ? ue("", !0) : (F(), z(We, { key: 1 }, [
                an(yt(re), 1)
              ], 64))
            ], 8, kb);
          }), 128))
        ]),
        le[2] || (le[2] = Se("div", { class: "dp__calendar_header_separator" }, null, -1)),
        sa(Ls, {
          name: C.value,
          css: !!B.transitions
        }, {
          default: je(() => [
            T.value ? (F(), z("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: le[1] || (le[1] = (re) => R.value = !1)
            }, [
              (F(!0), z(We, null, ut(E.value, (re, ke) => (F(), z("div", {
                key: ke,
                class: "dp__calendar_row",
                role: "row"
              }, [
                B.weekNumbers ? (F(), z("div", Mb, [
                  Se("div", Db, yt(x(re.days)), 1)
                ])) : ue("", !0),
                (F(!0), z(We, null, ut(re.days, (M, ae) => {
                  var $e, he, qe;
                  return F(), z("div", {
                    id: y(fv)(M.value),
                    ref_for: !0,
                    ref: (Fe) => _(Fe, ke, ae),
                    key: ae + ke,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-pressed": (M.classData.dp__active_date || M.classData.dp__range_start || M.classData.dp__range_start) ?? void 0,
                    "aria-disabled": M.classData.dp__cell_disabled || void 0,
                    "aria-label": (he = ($e = y(f)) == null ? void 0 : $e.day) == null ? void 0 : he.call($e, M),
                    tabindex: !M.current && B.hideOffsetDates ? void 0 : 0,
                    "data-test-id": M.value,
                    onClick: ul((Fe) => ve(Fe, M), ["prevent"]),
                    onTouchend: (Fe) => ve(Fe, M, !1),
                    onKeydown: (Fe) => y(ka)(Fe, () => B.$emit("select-date", M)),
                    onMouseenter: (Fe) => me(M, ke, ae),
                    onMouseleave: (Fe) => K(M),
                    onMousedown: (Fe) => st(M),
                    onMouseup: le[0] || (le[0] = (Fe) => R.value = !1)
                  }, [
                    Se("div", {
                      class: fe(["dp__cell_inner", M.classData])
                    }, [
                      B.$slots.day && V.value(M) ? xe(B.$slots, "day", {
                        key: 0,
                        day: +M.text,
                        date: M.value
                      }) : ue("", !0),
                      B.$slots.day ? ue("", !0) : (F(), z(We, { key: 1 }, [
                        an(yt(M.text), 1)
                      ], 64)),
                      M.marker && V.value(M) ? (F(), z(We, { key: 2 }, [
                        B.$slots.marker ? xe(B.$slots, "marker", {
                          key: 0,
                          marker: M.marker,
                          day: +M.text,
                          date: M.value
                        }) : (F(), z("div", {
                          key: 1,
                          class: fe(ge.value(M.marker)),
                          style: Ja(M.marker.color ? { backgroundColor: M.marker.color } : {})
                        }, null, 6))
                      ], 64)) : ue("", !0),
                      we.value(M.value) ? (F(), z("div", {
                        key: 3,
                        ref_for: !0,
                        ref_key: "activeTooltip",
                        ref: P,
                        class: "dp__marker_tooltip",
                        style: Ja(w.value)
                      }, [
                        (qe = M.marker) != null && qe.tooltip ? (F(), z("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: A
                        }, [
                          (F(!0), z(We, null, ut(M.marker.tooltip, (Fe, L) => (F(), z("div", {
                            key: L,
                            class: "dp__tooltip_text"
                          }, [
                            B.$slots["marker-tooltip"] ? xe(B.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: Fe,
                              day: M.value
                            }) : ue("", !0),
                            B.$slots["marker-tooltip"] ? ue("", !0) : (F(), z(We, { key: 1 }, [
                              Se("div", {
                                class: "dp__tooltip_mark",
                                style: Ja(Fe.color ? { backgroundColor: Fe.color } : {})
                              }, null, 4),
                              Se("div", null, yt(Fe.text), 1)
                            ], 64))
                          ]))), 128)),
                          Se("div", {
                            class: "dp__arrow_bottom_tp",
                            style: Ja(G.value)
                          }, null, 4)
                        ])) : ue("", !0)
                      ], 4)) : ue("", !0)
                    ], 2)
                  ], 40, Sb);
                }), 128))
              ]))), 128))
            ], 32)) : ue("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Rf = (e) => Array.isArray(e), xb = (e, t, a, r) => {
  const n = se([]), i = se(/* @__PURE__ */ new Date()), o = se(), c = () => Y(e.isTextInputDate), { modelValue: f, calendars: m, time: v, today: p } = ti(e, t, c), {
    defaultedMultiCalendars: g,
    defaultedStartTime: k,
    defaultedRange: w,
    defaultedConfig: b,
    defaultedTz: D,
    propDates: T,
    defaultedMultiDates: C
  } = Dt(e), { validateMonthYearInRange: $, isDisabled: P, isDateRangeAllowed: G, checkMinMaxRange: R } = Zn(e), { updateTimeValues: E, getSetDateTime: U, setTime: H, assignStartTime: q, validateTime: J, disabledTimesConfig: ge } = gv(e, v, f, r), we = ee(
    () => (W) => m.value[W] ? m.value[W].month : 0
  ), I = ee(
    () => (W) => m.value[W] ? m.value[W].year : 0
  ), V = (W) => !b.value.keepViewOnOffsetClick || W ? !0 : !o.value, N = (W, ce, Pe, X = !1) => {
    var ye, Te;
    V(X) && (m.value[W] || (m.value[W] = { month: 0, year: 0 }), m.value[W].month = Of(ce) ? (ye = m.value[W]) == null ? void 0 : ye.month : ce, m.value[W].year = Of(Pe) ? (Te = m.value[W]) == null ? void 0 : Te.year : Pe);
  }, te = () => {
    e.autoApply && t("select-date");
  };
  It(() => {
    e.shadow || (f.value || (B(), k.value && q(k.value)), Y(!0), e.focusStartDate && e.startDate && B());
  });
  const me = ee(() => {
    var W;
    return (W = e.flow) != null && W.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), K = () => {
    e.autoApply && me.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
  }, Y = (W = !1) => {
    if (f.value)
      return Array.isArray(f.value) ? (n.value = f.value, x(W)) : j(f.value, W);
    if (g.value.count && W && !e.startDate)
      return Q(oe(), W);
  }, de = () => Array.isArray(f.value) && w.value.enabled ? Be(f.value[0]) === Be(f.value[1] ?? f.value[0]) : !1, Q = (W = /* @__PURE__ */ new Date(), ce = !1) => {
    if ((!g.value.count || !g.value.static || ce) && N(0, Be(W), Ee(W)), g.value.count && (!f.value || de() || !g.value.solo) && (!g.value.solo || ce))
      for (let Pe = 1; Pe < g.value.count; Pe++) {
        const X = vt(oe(), { month: we.value(Pe - 1), year: I.value(Pe - 1) }), ye = Rm(X, { months: 1 });
        m.value[Pe] = { month: Be(ye), year: Ee(ye) };
      }
  }, j = (W, ce) => {
    Q(W), H("hours", Sn(W)), H("minutes", Kn(W)), H("seconds", cl(W)), g.value.count && ce && st();
  }, _ = (W) => {
    if (g.value.count) {
      if (g.value.solo) return 0;
      const ce = Be(W[0]), Pe = Be(W[1]);
      return Math.abs(Pe - ce) < g.value.count ? 0 : 1;
    }
    return 1;
  }, S = (W, ce) => {
    W[1] && w.value.showLastInRange ? Q(W[_(W)], ce) : Q(W[0], ce);
    const Pe = (X, ye) => [
      X(W[0]),
      W[1] ? X(W[1]) : v[ye][1]
    ];
    H("hours", Pe(Sn, "hours")), H("minutes", Pe(Kn, "minutes")), H("seconds", Pe(cl, "seconds"));
  }, ne = (W, ce) => {
    if ((w.value.enabled || e.weekPicker) && !C.value.enabled)
      return S(W, ce);
    if (C.value.enabled && ce) {
      const Pe = W[W.length - 1];
      return j(Pe, ce);
    }
  }, x = (W) => {
    const ce = f.value;
    ne(ce, W), g.value.count && g.value.solo && st();
  }, ve = (W, ce) => {
    const Pe = vt(oe(), { month: we.value(ce), year: I.value(ce) }), X = W < 0 ? mr(Pe, 1) : hl(Pe, 1);
    $(Be(X), Ee(X), W < 0, e.preventMinMaxNavigation) && (N(ce, Be(X), Ee(X)), t("update-month-year", { instance: ce, month: Be(X), year: Ee(X) }), g.value.count && !g.value.solo && A(ce), a());
  }, A = (W) => {
    for (let ce = W - 1; ce >= 0; ce--) {
      const Pe = hl(vt(oe(), { month: we.value(ce + 1), year: I.value(ce + 1) }), 1);
      N(ce, Be(Pe), Ee(Pe));
    }
    for (let ce = W + 1; ce <= g.value.count - 1; ce++) {
      const Pe = mr(vt(oe(), { month: we.value(ce - 1), year: I.value(ce - 1) }), 1);
      N(ce, Be(Pe), Ee(Pe));
    }
  }, st = () => {
    if (Array.isArray(f.value) && f.value.length === 2) {
      const W = oe(
        oe(f.value[1] ? f.value[1] : mr(f.value[0], 1))
      ), [ce, Pe] = [Be(f.value[0]), Ee(f.value[0])], [X, ye] = [Be(f.value[1]), Ee(f.value[1])];
      (ce !== X || ce === X && Pe !== ye) && g.value.solo && N(1, Be(W), Ee(W));
    } else f.value && !Array.isArray(f.value) && (N(0, Be(f.value), Ee(f.value)), Q(oe()));
  }, B = () => {
    e.startDate && (N(0, Be(oe(e.startDate)), Ee(oe(e.startDate))), g.value.count && A(0));
  }, le = (W, ce) => {
    if (e.monthChangeOnScroll) {
      const Pe = (/* @__PURE__ */ new Date()).getTime() - i.value.getTime(), X = Math.abs(W.deltaY);
      let ye = 500;
      X > 1 && (ye = 100), X > 100 && (ye = 0), Pe > ye && (i.value = /* @__PURE__ */ new Date(), ve(e.monthChangeOnScroll !== "inverse" ? -W.deltaY : W.deltaY, ce));
    }
  }, re = (W, ce, Pe = !1) => {
    e.monthChangeOnArrows && e.vertical === Pe && ke(W, ce);
  }, ke = (W, ce) => {
    ve(W === "right" ? -1 : 1, ce);
  }, M = (W) => {
    if (T.value.markers)
      return ao(W.value, T.value.markers);
  }, ae = (W, ce) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [W == 0, !0];
      case "fair":
        return [W == 0 || ce > W, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, $e = (W, ce, Pe, X) => {
    if (e.sixWeeks && W.length < 6) {
      const ye = 6 - W.length, Te = (ce.getDay() + 7 - X) % 7, St = 6 - (Pe.getDay() + 7 - X) % 7, [pt, Me] = ae(Te, St);
      for (let ua = 1; ua <= ye; ua++)
        if (Me ? !!(ua % 2) == pt : pt) {
          const jt = W[0].days[0], Pt = he(cr(jt.value, -7), Be(ce));
          W.unshift({ days: Pt });
        } else {
          const jt = W[W.length - 1], Pt = jt.days[jt.days.length - 1], Tt = he(cr(Pt.value, 1), Be(ce));
          W.push({ days: Tt });
        }
    }
    return W;
  }, he = (W, ce) => {
    const Pe = oe(W), X = [];
    for (let ye = 0; ye < 7; ye++) {
      const Te = cr(Pe, ye), St = Be(Te) !== ce;
      X.push({
        text: e.hideOffsetDates && St ? "" : Te.getDate(),
        value: Te,
        current: !St,
        classData: {}
      });
    }
    return X;
  }, qe = (W, ce) => {
    const Pe = [], X = new Date(ce, W), ye = new Date(ce, W + 1, 0), Te = e.weekStart, St = vr(X, { weekStartsOn: Te }), pt = (Me) => {
      const ua = he(Me, W);
      if (Pe.push({ days: ua }), !Pe[Pe.length - 1].days.some(
        (jt) => ze(Ma(jt.value), Ma(ye))
      )) {
        const jt = cr(Me, 7);
        pt(jt);
      }
    };
    return pt(St), $e(Pe, X, ye, Te);
  }, Fe = (W) => {
    const ce = zn(oe(W.value), v.hours, v.minutes, Yt());
    t("date-update", ce), C.value.enabled ? mc(ce, f, C.value.limit) : f.value = ce, r(), va().then(() => {
      K();
    });
  }, L = (W) => w.value.noDisabledRange ? iv(n.value[0], W).some((ce) => P(ce)) : !1, ie = () => {
    n.value = f.value ? f.value.slice() : [], n.value.length === 2 && !(w.value.fixedStart || w.value.fixedEnd) && (n.value = []);
  }, Ye = (W, ce) => {
    const Pe = [
      oe(W.value),
      cr(oe(W.value), +w.value.autoRange)
    ];
    G(Pe) ? (ce && lt(W.value), n.value = Pe) : t("invalid-date", W.value);
  }, lt = (W) => {
    const ce = Be(oe(W)), Pe = Ee(oe(W));
    if (N(0, ce, Pe), g.value.count > 0)
      for (let X = 1; X < g.value.count; X++) {
        const ye = vw(
          vt(oe(W), { year: I.value(X - 1), month: we.value(X - 1) })
        );
        N(X, ye.month, ye.year);
      }
  }, Ct = (W) => {
    if (L(W.value) || !R(W.value, f.value, w.value.fixedStart ? 0 : 1))
      return t("invalid-date", W.value);
    n.value = yv(oe(W.value), f, t, w);
  }, De = (W, ce) => {
    if (ie(), w.value.autoRange) return Ye(W, ce);
    if (w.value.fixedStart || w.value.fixedEnd) return Ct(W);
    n.value[0] ? R(oe(W.value), f.value) && !L(W.value) ? $t(oe(W.value), oe(n.value[0])) ? (n.value.unshift(oe(W.value)), t("range-end", n.value[0])) : (n.value[1] = oe(W.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", W.value), t("invalid-date", W.value)) : (n.value[0] = oe(W.value), t("range-start", n.value[0]));
  }, Yt = (W = !0) => e.enableSeconds ? Array.isArray(v.seconds) ? W ? v.seconds[0] : v.seconds[1] : v.seconds : 0, Xe = (W) => {
    n.value[W] = zn(
      n.value[W],
      v.hours[W],
      v.minutes[W],
      Yt(W !== 1)
    );
  }, ea = () => {
    var W, ce;
    n.value[0] && n.value[1] && +((W = n.value) == null ? void 0 : W[0]) > +((ce = n.value) == null ? void 0 : ce[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, Ue = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Xe(0) : (Xe(0), Xe(1), r()), ea(), f.value = n.value.slice(), ho(n.value, t, e.autoApply, e.modelAuto));
  }, ia = (W, ce = !1) => {
    if (P(W.value) || !W.current && e.hideOffsetDates) return t("invalid-date", W.value);
    if (o.value = JSON.parse(JSON.stringify(W)), !w.value.enabled) return Fe(W);
    Rf(v.hours) && Rf(v.minutes) && !C.value.enabled && (De(W, ce), Ue());
  }, ya = (W, ce) => {
    var Pe;
    N(W, ce.month, ce.year, !0), g.value.count && !g.value.solo && A(W), t("update-month-year", { instance: W, month: ce.month, year: ce.year }), a(g.value.solo ? W : void 0);
    const X = (Pe = e.flow) != null && Pe.length ? e.flow[e.flowStep] : void 0;
    !ce.fromNav && (X === fa.month || X === fa.year) && r();
  }, ta = (W, ce) => {
    vv({
      value: W,
      modelValue: f,
      range: w.value.enabled,
      timezone: ce ? void 0 : D.value.timezone
    }), te(), e.multiCalendars && va().then(() => Y(!0));
  }, oa = () => {
    const W = uc(oe(), D.value);
    !w.value.enabled && !C.value.enabled ? f.value = W : f.value && Array.isArray(f.value) && f.value[0] ? C.value.enabled ? f.value = [...f.value, W] : f.value = $t(W, f.value[0]) ? [W, f.value[0]] : [f.value[0], W] : f.value = [W], te();
  }, aa = () => {
    if (Array.isArray(f.value))
      if (C.value.enabled) {
        const W = Ht();
        f.value[f.value.length - 1] = U(W);
      } else
        f.value = f.value.map((W, ce) => W && U(W, ce));
    else
      f.value = U(f.value);
    t("time-update");
  }, Ht = () => Array.isArray(f.value) && f.value.length ? f.value[f.value.length - 1] : null;
  return {
    calendars: m,
    modelValue: f,
    month: we,
    year: I,
    time: v,
    disabledTimesConfig: ge,
    today: p,
    validateTime: J,
    getCalendarDays: qe,
    getMarker: M,
    handleScroll: le,
    handleSwipe: ke,
    handleArrow: re,
    selectDate: ia,
    updateMonthYear: ya,
    presetDate: ta,
    selectCurrentDate: oa,
    updateTime: (W, ce = !0, Pe = !1) => {
      E(W, ce, Pe, aa);
    },
    assignMonthAndYear: Q
  };
}, Ob = { key: 0 }, Ab = /* @__PURE__ */ la({
  __name: "DatePicker",
  props: {
    ..._r
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, {
      calendars: i,
      month: o,
      year: c,
      modelValue: f,
      time: m,
      disabledTimesConfig: v,
      today: p,
      validateTime: g,
      getCalendarDays: k,
      getMarker: w,
      handleArrow: b,
      handleScroll: D,
      handleSwipe: T,
      selectDate: C,
      updateMonthYear: $,
      presetDate: P,
      selectCurrentDate: G,
      updateTime: R,
      assignMonthAndYear: E
    } = xb(n, r, de, Q), U = Ns(), { setHoverDate: H, getDayClassData: q, clearHoverDate: J } = Bb(f, n), { defaultedMultiCalendars: ge } = Dt(n), we = se([]), I = se([]), V = se(null), N = Ua(U, "calendar"), te = Ua(U, "monthYear"), me = Ua(U, "timePicker"), K = (le) => {
      n.shadow || r("mount", le);
    };
    Rt(
      i,
      () => {
        n.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), Rt(
      ge,
      (le, re) => {
        le.count - re.count > 0 && E();
      },
      { deep: !0 }
    );
    const Y = ee(() => (le) => k(o.value(le), c.value(le)).map((re) => ({
      ...re,
      days: re.days.map((ke) => (ke.marker = w(ke), ke.classData = q(ke), ke))
    })));
    function de(le) {
      var re;
      le || le === 0 ? (re = I.value[le]) == null || re.triggerTransition(o.value(le), c.value(le)) : I.value.forEach((ke, M) => ke.triggerTransition(o.value(M), c.value(M)));
    }
    function Q() {
      r("update-flow-step");
    }
    const j = (le, re = !1) => {
      C(le, re), n.spaceConfirm && r("select-date");
    }, _ = (le, re, ke = 0) => {
      var M;
      (M = we.value[ke]) == null || M.toggleMonthPicker(le, re);
    }, S = (le, re, ke = 0) => {
      var M;
      (M = we.value[ke]) == null || M.toggleYearPicker(le, re);
    }, ne = (le, re, ke) => {
      var M;
      (M = V.value) == null || M.toggleTimePicker(le, re, ke);
    }, x = (le, re) => {
      var ke;
      if (!n.range) {
        const M = f.value ? f.value : p, ae = re ? new Date(re) : M, $e = le ? vr(ae, { weekStartsOn: 1 }) : qm(ae, { weekStartsOn: 1 });
        C({
          value: $e,
          current: Be(ae) === o.value(0),
          text: "",
          classData: {}
        }), (ke = document.getElementById(fv($e))) == null || ke.focus();
      }
    }, ve = (le) => {
      var re;
      (re = we.value[0]) == null || re.handleMonthYearChange(le, !0);
    }, A = (le) => {
      $(0, { month: o.value(0), year: c.value(0) + (le ? 1 : -1), fromNav: !0 });
    }, st = (le, re) => {
      le === fa.time && r(`time-picker-${re ? "open" : "close"}`), r("overlay-toggle", { open: re, overlay: le });
    }, B = (le) => {
      r("overlay-toggle", { open: !1, overlay: le }), r("focus-menu");
    };
    return t({
      clearHoverDate: J,
      presetDate: P,
      selectCurrentDate: G,
      toggleMonthPicker: _,
      toggleYearPicker: S,
      toggleTimePicker: ne,
      handleArrow: b,
      updateMonthYear: $,
      getSidebarProps: () => ({
        modelValue: f,
        month: o,
        year: c,
        time: m,
        updateTime: R,
        updateMonthYear: $,
        selectDate: C,
        presetDate: P
      }),
      changeMonth: ve,
      changeYear: A,
      selectWeekDate: x
    }), (le, re) => (F(), z(We, null, [
      sa(fo, {
        "multi-calendars": y(ge).count,
        collapse: le.collapse,
        "is-mobile": le.isMobile
      }, {
        default: je(({ instance: ke, index: M }) => [
          le.disableMonthYearSelect ? ue("", !0) : (F(), Ve(gb, Zt({
            key: 0,
            ref: (ae) => {
              ae && (we.value[M] = ae);
            },
            months: y(tv)(le.formatLocale, le.locale, le.monthNameFormat),
            years: y(dc)(le.yearRange, le.locale, le.reverseYears),
            month: y(o)(ke),
            year: y(c)(ke),
            instance: ke
          }, le.$props, {
            onMount: re[0] || (re[0] = (ae) => K(y(Is).header)),
            onResetFlow: re[1] || (re[1] = (ae) => le.$emit("reset-flow")),
            onUpdateMonthYear: (ae) => y($)(ke, ae),
            onOverlayClosed: B,
            onOverlayOpened: re[2] || (re[2] = (ae) => le.$emit("overlay-toggle", { open: !0, overlay: ae }))
          }), ha({ _: 2 }, [
            ut(y(te), (ae, $e) => ({
              name: ae,
              fn: je((he) => [
                xe(le.$slots, ae, Jt(Ra(he)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          sa(Tb, Zt({
            ref: (ae) => {
              ae && (I.value[M] = ae);
            },
            "mapped-dates": Y.value(ke),
            month: y(o)(ke),
            year: y(c)(ke),
            instance: ke
          }, le.$props, {
            onSelectDate: (ae) => y(C)(ae, ke !== 1),
            onHandleSpace: (ae) => j(ae, ke !== 1),
            onSetHoverDate: re[3] || (re[3] = (ae) => y(H)(ae)),
            onHandleScroll: (ae) => y(D)(ae, ke),
            onHandleSwipe: (ae) => y(T)(ae, ke),
            onMount: re[4] || (re[4] = (ae) => K(y(Is).calendar)),
            onResetFlow: re[5] || (re[5] = (ae) => le.$emit("reset-flow")),
            onTooltipOpen: re[6] || (re[6] = (ae) => le.$emit("tooltip-open", ae)),
            onTooltipClose: re[7] || (re[7] = (ae) => le.$emit("tooltip-close", ae))
          }), ha({ _: 2 }, [
            ut(y(N), (ae, $e) => ({
              name: ae,
              fn: je((he) => [
                xe(le.$slots, ae, Jt(Ra({ ...he })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse", "is-mobile"]),
      le.enableTimePicker ? (F(), z("div", Ob, [
        le.$slots["time-picker"] ? xe(le.$slots, "time-picker", Jt(Zt({ key: 0 }, { time: y(m), updateTime: y(R) }))) : (F(), Ve(_v, Zt({
          key: 1,
          ref_key: "timePickerRef",
          ref: V
        }, le.$props, {
          hours: y(m).hours,
          minutes: y(m).minutes,
          seconds: y(m).seconds,
          "internal-model-value": le.internalModelValue,
          "disabled-times-config": y(v),
          "validate-time": y(g),
          onMount: re[8] || (re[8] = (ke) => K(y(Is).timePicker)),
          "onUpdate:hours": re[9] || (re[9] = (ke) => y(R)(ke)),
          "onUpdate:minutes": re[10] || (re[10] = (ke) => y(R)(ke, !1)),
          "onUpdate:seconds": re[11] || (re[11] = (ke) => y(R)(ke, !1, !0)),
          onResetFlow: re[12] || (re[12] = (ke) => le.$emit("reset-flow")),
          onOverlayClosed: re[13] || (re[13] = (ke) => st(ke, !1)),
          onOverlayOpened: re[14] || (re[14] = (ke) => st(ke, !0)),
          onAmPmChange: re[15] || (re[15] = (ke) => le.$emit("am-pm-change", ke))
        }), ha({ _: 2 }, [
          ut(y(me), (ke, M) => ({
            name: ke,
            fn: je((ae) => [
              xe(le.$slots, ke, Jt(Ra(ae)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : ue("", !0)
    ], 64));
  }
}), Cb = (e, t) => {
  const a = se(), {
    defaultedMultiCalendars: r,
    defaultedConfig: n,
    defaultedHighlight: i,
    defaultedRange: o,
    propDates: c,
    defaultedFilters: f,
    defaultedMultiDates: m
  } = Dt(e), { modelValue: v, year: p, month: g, calendars: k } = ti(e, t), { isDisabled: w } = Zn(e), { selectYear: b, groupedYears: D, showYearPicker: T, isDisabled: C, toggleYearPicker: $, handleYearSelect: P, handleYear: G } = pv({
    modelValue: v,
    multiCalendars: r,
    range: o,
    highlight: i,
    calendars: k,
    propDates: c,
    month: g,
    year: p,
    filters: f,
    props: e,
    emit: t
  }), R = (V, N) => [V, N].map((te) => tn(te, "MMMM", { locale: e.formatLocale })).join("-"), E = ee(() => (V) => v.value ? Array.isArray(v.value) ? v.value.some((N) => Sf(V, N)) : Sf(v.value, V) : !1), U = (V) => {
    if (o.value.enabled) {
      if (Array.isArray(v.value)) {
        const N = ze(V, v.value[0]) || ze(V, v.value[1]);
        return uo(v.value, a.value, V) && !N;
      }
      return !1;
    }
    return !1;
  }, H = (V, N) => V.quarter === gf(N) && V.year === Ee(N), q = (V) => typeof i.value == "function" ? i.value({ quarter: gf(V), year: Ee(V) }) : !!i.value.quarters.find((N) => H(N, V)), J = ee(() => (V) => {
    const N = vt(/* @__PURE__ */ new Date(), { year: p.value(V) });
    return lg({
      start: Vl(N),
      end: Wm(N)
    }).map((te) => {
      const me = Ps(te), K = wf(te), Y = w(te), de = U(me), Q = q(me);
      return {
        text: R(me, K),
        value: me,
        active: E.value(me),
        highlighted: Q,
        disabled: Y,
        isBetween: de
      };
    });
  }), ge = (V) => {
    mc(V, v, m.value.limit), t("auto-apply", !0);
  }, we = (V) => {
    v.value = vc(v, V, t), ho(v.value, t, e.autoApply, e.modelAuto);
  }, I = (V) => {
    v.value = V, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: r,
    groupedYears: D,
    year: p,
    isDisabled: C,
    quarters: J,
    showYearPicker: T,
    modelValue: v,
    setHoverDate: (V) => {
      a.value = V;
    },
    selectYear: b,
    selectQuarter: (V, N, te) => {
      if (!te)
        return k.value[N].month = Be(wf(V)), m.value.enabled ? ge(V) : o.value.enabled ? we(V) : I(V);
    },
    toggleYearPicker: $,
    handleYearSelect: P,
    handleYear: G
  };
}, Yb = { class: "dp--quarter-items" }, Pb = ["data-test-id", "disabled", "onClick", "onMouseover"], $b = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ..._r
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, i = Ns(), o = Ua(i, "yearMode"), {
      defaultedMultiCalendars: c,
      defaultedConfig: f,
      groupedYears: m,
      year: v,
      isDisabled: p,
      quarters: g,
      modelValue: k,
      showYearPicker: w,
      setHoverDate: b,
      selectQuarter: D,
      toggleYearPicker: T,
      handleYearSelect: C,
      handleYear: $
    } = Cb(n, r);
    return t({ getSidebarProps: () => ({
      modelValue: k,
      year: v,
      selectQuarter: D,
      handleYearSelect: C,
      handleYear: $
    }) }), (P, G) => (F(), Ve(fo, {
      "multi-calendars": y(c).count,
      collapse: P.collapse,
      stretch: "",
      "is-mobile": P.isMobile
    }, {
      default: je(({ instance: R }) => [
        Se("div", {
          class: "dp-quarter-picker-wrap",
          style: Ja({ minHeight: `${y(f).modeHeight}px` })
        }, [
          P.$slots["top-extra"] ? xe(P.$slots, "top-extra", {
            key: 0,
            value: P.internalModelValue
          }) : ue("", !0),
          Se("div", null, [
            sa(mv, Zt(P.$props, {
              items: y(m)(R),
              instance: R,
              "show-year-picker": y(w)[R],
              year: y(v)(R),
              "is-disabled": (E) => y(p)(R, E),
              onHandleYear: (E) => y($)(R, E),
              onYearSelect: (E) => y(C)(E, R),
              onToggleYearPicker: (E) => y(T)(R, E == null ? void 0 : E.flow, E == null ? void 0 : E.show)
            }), ha({ _: 2 }, [
              ut(y(o), (E, U) => ({
                name: E,
                fn: je((H) => [
                  xe(P.$slots, E, Jt(Ra(H)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          Se("div", Yb, [
            (F(!0), z(We, null, ut(y(g)(R), (E, U) => (F(), z("div", { key: U }, [
              Se("button", {
                type: "button",
                class: fe(["dp--qr-btn", {
                  "dp--qr-btn-active": E.active,
                  "dp--qr-btn-between": E.isBetween,
                  "dp--qr-btn-disabled": E.disabled,
                  "dp--highlighted": E.highlighted
                }]),
                "data-test-id": E.value,
                disabled: E.disabled,
                onClick: (H) => y(D)(E.value, R, E.disabled),
                onMouseover: (H) => y(b)(E.value)
              }, [
                P.$slots.quarter ? xe(P.$slots, "quarter", {
                  key: 0,
                  value: E.value,
                  text: E.text
                }) : (F(), z(We, { key: 1 }, [
                  an(yt(E.text), 1)
                ], 64))
              ], 42, Pb)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), wv = (e, t) => {
  const a = se(0);
  It(() => {
    r(), window.addEventListener("resize", r, { passive: !0 });
  }), Kl(() => {
    window.removeEventListener("resize", r);
  });
  const r = () => {
    a.value = window.document.documentElement.clientWidth;
  };
  return {
    isMobile: ee(
      () => a.value <= e.value.mobileBreakpoint && !t ? !0 : void 0
    )
  };
}, Rb = ["id", "tabindex", "role", "aria-label"], Ib = {
  key: 0,
  class: "dp--menu-load-container"
}, Fb = {
  key: 1,
  class: "dp--menu-header"
}, Eb = ["data-dp-mobile"], Nb = {
  key: 0,
  class: "dp__sidebar_left"
}, Lb = ["data-dp-mobile"], Wb = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], qb = {
  key: 2,
  class: "dp__sidebar_right"
}, Vb = {
  key: 3,
  class: "dp__action_extra"
}, If = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...co,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "menu-blur"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, i = se(null), o = ee(() => {
      const { openOnTop: L, ...ie } = n;
      return {
        ...ie,
        isMobile: b.value,
        flowStep: J.value,
        menuWrapRef: i.value
      };
    }), { setMenuFocused: c, setShiftKey: f, control: m } = hv(), v = Ns(), { defaultedTextInput: p, defaultedInline: g, defaultedConfig: k, defaultedUI: w } = Dt(n), { isMobile: b } = wv(k, n.shadow), D = se(null), T = se(0), C = se(null), $ = se(!1), P = se(null), G = se(!1);
    It(() => {
      if (!n.shadow) {
        $.value = !0, R(), window.addEventListener("resize", R);
        const L = Bt(i);
        if (L && !p.value.enabled && !g.value.enabled && (c(!0), me()), L) {
          const ie = (Ye) => {
            G.value = !0, k.value.allowPreventDefault && Ye.preventDefault(), Gn(Ye, k.value, !0);
          };
          L.addEventListener("pointerdown", ie), L.addEventListener("mousedown", ie);
        }
      }
      document.addEventListener("mousedown", Fe);
    }), Kl(() => {
      window.removeEventListener("resize", R), document.addEventListener("mousedown", Fe);
    });
    const R = () => {
      const L = Bt(C);
      L && (T.value = L.getBoundingClientRect().width);
    }, { arrowRight: E, arrowLeft: U, arrowDown: H, arrowUp: q } = Xn(), { flowStep: J, updateFlowStep: ge, childMount: we, resetFlow: I, handleFlow: V } = Gb(n, r, P), N = ee(() => n.monthPicker ? Xw : n.yearPicker ? Jw : n.timePicker ? hb : n.quarterPicker ? $b : Ab), te = ee(() => {
      var L;
      if (k.value.arrowLeft) return k.value.arrowLeft;
      const ie = (L = i.value) == null ? void 0 : L.getBoundingClientRect(), Ye = n.getInputRect();
      return (Ye == null ? void 0 : Ye.width) < (T == null ? void 0 : T.value) && (Ye == null ? void 0 : Ye.left) <= ((ie == null ? void 0 : ie.left) ?? 0) ? `${(Ye == null ? void 0 : Ye.width) / 2}px` : (Ye == null ? void 0 : Ye.right) >= ((ie == null ? void 0 : ie.right) ?? 0) && (Ye == null ? void 0 : Ye.width) < (T == null ? void 0 : T.value) ? `${(T == null ? void 0 : T.value) - (Ye == null ? void 0 : Ye.width) / 2}px` : "50%";
    }), me = () => {
      const L = Bt(i);
      L && L.focus({ preventScroll: !0 });
    }, K = ee(() => {
      var L;
      return ((L = P.value) == null ? void 0 : L.getSidebarProps()) || {};
    }), Y = () => {
      n.openOnTop && r("recalculate-position");
    }, de = Ua(v, "action"), Q = ee(() => n.monthPicker || n.yearPicker ? Ua(v, "monthYear") : n.timePicker ? Ua(v, "timePicker") : Ua(v, "shared")), j = ee(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), _ = ee(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), S = ee(
      () => ({
        dp__menu: !0,
        dp__menu_index: !g.value.enabled,
        dp__relative: g.value.enabled,
        ...w.value.menu ?? {}
      })
    ), ne = (L) => {
      Gn(L, k.value, !0);
    }, x = () => {
      n.escClose && r("close-picker");
    }, ve = (L) => {
      if (n.arrowNavigation) {
        if (L === wa.up) return q();
        if (L === wa.down) return H();
        if (L === wa.left) return U();
        if (L === wa.right) return E();
      } else L === wa.left || L === wa.up ? re("handleArrow", wa.left, 0, L === wa.up) : re("handleArrow", wa.right, 0, L === wa.down);
    }, A = (L) => {
      f(L.shiftKey), !n.disableMonthYearSelect && L.code === wt.tab && L.target.classList.contains("dp__menu") && m.value.shiftKeyInMenu && (L.preventDefault(), Gn(L, k.value, !0), r("close-picker"));
    }, st = () => {
      me(), r("time-picker-close");
    }, B = (L) => {
      var ie, Ye, lt;
      (ie = P.value) == null || ie.toggleTimePicker(!1, !1), (Ye = P.value) == null || Ye.toggleMonthPicker(!1, !1, L), (lt = P.value) == null || lt.toggleYearPicker(!1, !1, L);
    }, le = (L, ie = 0) => {
      var Ye, lt, Ct;
      return L === "month" ? (Ye = P.value) == null ? void 0 : Ye.toggleMonthPicker(!1, !0, ie) : L === "year" ? (lt = P.value) == null ? void 0 : lt.toggleYearPicker(!1, !0, ie) : L === "time" ? (Ct = P.value) == null ? void 0 : Ct.toggleTimePicker(!0, !1) : B(ie);
    }, re = (L, ...ie) => {
      var Ye, lt;
      (Ye = P.value) != null && Ye[L] && ((lt = P.value) == null || lt[L](...ie));
    }, ke = () => {
      re("selectCurrentDate");
    }, M = (L, ie) => {
      re("presetDate", L, ie);
    }, ae = () => {
      re("clearHoverDate");
    }, $e = (L, ie) => {
      re("updateMonthYear", L, ie);
    }, he = (L, ie) => {
      L.preventDefault(), ve(ie);
    }, qe = (L) => {
      var ie, Ye, lt;
      if (A(L), L.key === wt.home || L.key === wt.end)
        return re(
          "selectWeekDate",
          L.key === wt.home,
          L.target.getAttribute("id")
        );
      switch ((L.key === wt.pageUp || L.key === wt.pageDown) && (L.shiftKey ? (re("changeYear", L.key === wt.pageUp), (ie = Wd(i.value, "overlay-year")) == null || ie.focus()) : (re("changeMonth", L.key === wt.pageUp), (Ye = Wd(i.value, L.key === wt.pageUp ? "action-prev" : "action-next")) == null || Ye.focus()), L.target.getAttribute("id") && ((lt = i.value) == null || lt.focus({ preventScroll: !0 }))), L.key) {
        case wt.esc:
          return x();
        case wt.arrowLeft:
          return he(L, wa.left);
        case wt.arrowRight:
          return he(L, wa.right);
        case wt.arrowUp:
          return he(L, wa.up);
        case wt.arrowDown:
          return he(L, wa.down);
        default:
          return;
      }
    }, Fe = (L) => {
      var ie;
      g.value.enabled && !g.value.input && !((ie = i.value) != null && ie.contains(L.target)) && G.value && (G.value = !1, r("menu-blur"));
    };
    return t({
      updateMonthYear: $e,
      switchView: le,
      handleFlow: V
    }), (L, ie) => {
      var Ye, lt, Ct;
      return F(), z("div", {
        id: L.uid ? `dp-menu-${L.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: i,
        tabindex: y(g).enabled ? void 0 : "0",
        role: y(g).enabled ? void 0 : "dialog",
        "aria-label": (Ye = L.ariaLabels) == null ? void 0 : Ye.menu,
        class: fe(S.value),
        style: Ja({ "--dp-arrow-left": te.value }),
        onMouseleave: ae,
        onClick: ne,
        onKeydown: qe
      }, [
        (L.disabled || L.readonly) && y(g).enabled || L.loading ? (F(), z("div", {
          key: 0,
          class: fe(_.value)
        }, [
          L.loading ? (F(), z("div", Ib, ie[19] || (ie[19] = [
            Se("span", { class: "dp--menu-loader" }, null, -1)
          ]))) : ue("", !0)
        ], 2)) : ue("", !0),
        L.$slots["menu-header"] ? (F(), z("div", Fb, [
          xe(L.$slots, "menu-header")
        ])) : ue("", !0),
        !y(g).enabled && !L.teleportCenter ? (F(), z("div", {
          key: 2,
          class: fe(j.value)
        }, null, 2)) : ue("", !0),
        Se("div", {
          ref_key: "innerMenuRef",
          ref: C,
          class: fe({
            dp__menu_content_wrapper: ((lt = L.presetDates) == null ? void 0 : lt.length) || !!L.$slots["left-sidebar"] || !!L.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((Ct = L.presetDates) == null ? void 0 : Ct.length) || !!L.$slots["left-sidebar"] || !!L.$slots["right-sidebar"])
          }),
          "data-dp-mobile": y(b),
          style: Ja({ "--dp-menu-width": `${T.value}px` })
        }, [
          L.$slots["left-sidebar"] ? (F(), z("div", Nb, [
            xe(L.$slots, "left-sidebar", Jt(Ra(K.value)))
          ])) : ue("", !0),
          L.presetDates.length ? (F(), z("div", {
            key: 1,
            class: fe({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
            "data-dp-mobile": y(b)
          }, [
            (F(!0), z(We, null, ut(L.presetDates, (De, Yt) => (F(), z(We, { key: Yt }, [
              De.slot ? xe(L.$slots, De.slot, {
                key: 0,
                presetDate: M,
                label: De.label,
                value: De.value
              }) : (F(), z("button", {
                key: 1,
                type: "button",
                style: Ja(De.style || {}),
                class: fe(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test-id": De.testId ?? void 0,
                "data-dp-mobile": y(b),
                onClick: ul((Xe) => M(De.value, De.noTz), ["prevent"]),
                onKeydown: (Xe) => y(ka)(Xe, () => M(De.value, De.noTz), !0)
              }, yt(De.label), 47, Wb))
            ], 64))), 128))
          ], 10, Lb)) : ue("", !0),
          Se("div", {
            ref_key: "calendarWrapperRef",
            ref: D,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (F(), Ve(Xl(N.value), Zt({
              ref_key: "dynCmpRef",
              ref: P
            }, o.value, {
              "flow-step": y(J),
              onMount: y(we),
              onUpdateFlowStep: y(ge),
              onResetFlow: y(I),
              onFocusMenu: me,
              onSelectDate: ie[0] || (ie[0] = (De) => L.$emit("select-date")),
              onDateUpdate: ie[1] || (ie[1] = (De) => L.$emit("date-update", De)),
              onTooltipOpen: ie[2] || (ie[2] = (De) => L.$emit("tooltip-open", De)),
              onTooltipClose: ie[3] || (ie[3] = (De) => L.$emit("tooltip-close", De)),
              onAutoApply: ie[4] || (ie[4] = (De) => L.$emit("auto-apply", De)),
              onRangeStart: ie[5] || (ie[5] = (De) => L.$emit("range-start", De)),
              onRangeEnd: ie[6] || (ie[6] = (De) => L.$emit("range-end", De)),
              onInvalidFixedRange: ie[7] || (ie[7] = (De) => L.$emit("invalid-fixed-range", De)),
              onTimeUpdate: ie[8] || (ie[8] = (De) => L.$emit("time-update")),
              onAmPmChange: ie[9] || (ie[9] = (De) => L.$emit("am-pm-change", De)),
              onTimePickerOpen: ie[10] || (ie[10] = (De) => L.$emit("time-picker-open", De)),
              onTimePickerClose: st,
              onRecalculatePosition: Y,
              onUpdateMonthYear: ie[11] || (ie[11] = (De) => L.$emit("update-month-year", De)),
              onAutoApplyInvalid: ie[12] || (ie[12] = (De) => L.$emit("auto-apply-invalid", De)),
              onInvalidDate: ie[13] || (ie[13] = (De) => L.$emit("invalid-date", De)),
              onOverlayToggle: ie[14] || (ie[14] = (De) => L.$emit("overlay-toggle", De)),
              "onUpdate:internalModelValue": ie[15] || (ie[15] = (De) => L.$emit("update:internal-model-value", De))
            }), ha({ _: 2 }, [
              ut(Q.value, (De, Yt) => ({
                name: De,
                fn: je((Xe) => [
                  xe(L.$slots, De, Jt(Ra({ ...Xe })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          L.$slots["right-sidebar"] ? (F(), z("div", qb, [
            xe(L.$slots, "right-sidebar", Jt(Ra(K.value)))
          ])) : ue("", !0),
          L.$slots["action-extra"] ? (F(), z("div", Vb, [
            L.$slots["action-extra"] ? xe(L.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: ke
            }) : ue("", !0)
          ])) : ue("", !0)
        ], 14, Eb),
        !L.autoApply || y(k).keepActionRow ? (F(), Ve(Vw, Zt({
          key: 3,
          "menu-mount": $.value
        }, o.value, {
          "calendar-width": T.value,
          onClosePicker: ie[16] || (ie[16] = (De) => L.$emit("close-picker")),
          onSelectDate: ie[17] || (ie[17] = (De) => L.$emit("select-date")),
          onInvalidSelect: ie[18] || (ie[18] = (De) => L.$emit("invalid-select")),
          onSelectNow: ke
        }), ha({ _: 2 }, [
          ut(y(de), (De, Yt) => ({
            name: De,
            fn: je((Xe) => [
              xe(L.$slots, De, Jt(Ra({ ...Xe })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : ue("", !0)
      ], 46, Rb);
    };
  }
});
var al = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(al || {});
const Hb = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: a,
  pickerWrapperRef: r,
  inline: n,
  emit: i,
  props: o,
  slots: c
}) => {
  const { defaultedConfig: f } = Dt(o), m = se({}), v = se(!1), p = se({
    top: "0",
    left: "0"
  }), g = se(!1), k = ql(o, "teleportCenter");
  Rt(k, () => {
    p.value = JSON.parse(JSON.stringify({})), G();
  });
  const w = (N) => {
    if (o.teleport) {
      const te = N.getBoundingClientRect();
      return {
        left: te.left + window.scrollX,
        top: te.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, b = (N, te) => {
    p.value.left = `${N + te - m.value.width}px`;
  }, D = (N) => {
    p.value.left = `${N}px`;
  }, T = (N, te) => {
    o.position === al.left && D(N), o.position === al.right && b(N, te), o.position === al.center && (p.value.left = `${N + te / 2 - m.value.width / 2}px`);
  }, C = (N) => {
    const { width: te, height: me } = N.getBoundingClientRect(), { top: K, left: Y } = w(N);
    return { top: +K, left: +Y, width: te, height: me };
  }, $ = () => {
    p.value.left = "50%", p.value.top = "50%", p.value.transform = "translate(-50%, -50%)", p.value.position = "fixed", delete p.value.opacity;
  }, P = () => {
    const N = Bt(a);
    p.value = o.altPosition(N);
  }, G = (N = !0) => {
    var te;
    if (!n.value.enabled) {
      if (k.value) return $();
      if (o.altPosition !== null) return P();
      if (N) {
        const me = o.teleport ? (te = t.value) == null ? void 0 : te.$el : e.value;
        me && (m.value = me.getBoundingClientRect()), i("recalculate-position");
      }
      return ge();
    }
  }, R = ({ inputEl: N, left: te, width: me }) => {
    window.screen.width > 768 && !v.value && T(te, me), H(N);
  }, E = (N) => {
    const { top: te, left: me, height: K, width: Y } = C(N);
    p.value.top = `${K + te + +o.offset}px`, g.value = !1, v.value || (p.value.left = `${me + Y / 2 - m.value.width / 2}px`), R({ inputEl: N, left: me, width: Y });
  }, U = (N) => {
    const { top: te, left: me, width: K } = C(N);
    p.value.top = `${te - +o.offset - m.value.height}px`, g.value = !0, R({ inputEl: N, left: me, width: K });
  }, H = (N) => {
    if (o.autoPosition) {
      const { left: te, width: me } = C(N), { left: K, right: Y } = m.value;
      if (!v.value) {
        if (Math.abs(K) !== Math.abs(Y)) {
          if (K <= 0)
            return v.value = !0, D(te);
          if (Y >= document.documentElement.clientWidth)
            return v.value = !0, b(te, me);
        }
        return T(te, me);
      }
    }
  }, q = () => {
    const N = Bt(a);
    if (N) {
      if (o.autoPosition === dr.top) return dr.top;
      if (o.autoPosition === dr.bottom) return dr.bottom;
      const { height: te } = m.value, { top: me, height: K } = N.getBoundingClientRect(), Y = window.innerHeight - me - K, de = me;
      return te <= Y ? dr.bottom : te > Y && te <= de ? dr.top : Y >= de ? dr.bottom : dr.top;
    }
    return dr.bottom;
  }, J = (N) => q() === dr.bottom ? E(N) : U(N), ge = () => {
    const N = Bt(a);
    if (N)
      return o.autoPosition ? J(N) : E(N);
  }, we = function(N) {
    if (N) {
      const te = N.scrollHeight > N.clientHeight, me = window.getComputedStyle(N).overflowY.indexOf("hidden") !== -1;
      return te && !me;
    }
    return !0;
  }, I = function(N) {
    return !N || N === document.body || N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : we(N) ? N : I(
      N.assignedSlot && f.value.shadowDom ? N.assignedSlot.parentNode : N.parentNode
    );
  }, V = (N) => {
    if (N)
      switch (o.position) {
        case al.left:
          return { left: 0, transform: "translateX(0)" };
        case al.right:
          return { left: `${N.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${N.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: g,
    menuStyle: p,
    xCorrect: v,
    setMenuPosition: G,
    getScrollableParent: I,
    shadowRender: (N, te) => {
      var me, K, Y;
      const de = document.createElement("div"), Q = (me = Bt(a)) == null ? void 0 : me.getBoundingClientRect();
      de.setAttribute("id", "dp--temp-container");
      const j = (K = r.value) != null && K.clientWidth ? r.value : document.body;
      j.append(de);
      const _ = V(Q), S = f.value.shadowDom ? Object.keys(c).filter(
        (x) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(x)
      ) : Object.keys(c), ne = M_(
        N,
        {
          ...te,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ..._ }
        },
        Object.fromEntries(S.map((x) => [x, c[x]]))
      );
      of(ne, de), m.value = (Y = ne.el) == null ? void 0 : Y.getBoundingClientRect(), of(null, de), j.removeChild(de);
    }
  };
}, qn = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], jb = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Ub = {
  all: () => qn,
  monthYear: () => qn.filter((e) => e.use.includes("month-year")),
  input: () => jb,
  timePicker: () => qn.filter((e) => e.use.includes("time")),
  action: () => qn.filter((e) => e.use.includes("action")),
  calendar: () => qn.filter((e) => e.use.includes("calendar")),
  menu: () => qn.filter((e) => e.use.includes("menu")),
  shared: () => qn.filter((e) => e.use.includes("shared")),
  yearMode: () => qn.filter((e) => e.use.includes("year-mode"))
}, Ua = (e, t, a) => {
  const r = [];
  return Ub[t]().forEach((n) => {
    e[n.name] && r.push(n.name);
  }), a != null && a.length && a.forEach((n) => {
    n.slot && r.push(n.slot);
  }), r;
}, ei = (e) => {
  const t = ee(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), a = ee(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: a };
}, ti = (e, t, a) => {
  const { defaultedRange: r, defaultedTz: n } = Dt(e), i = oe(Ia(oe(), n.value.timezone)), o = se([{ month: Be(i), year: Ee(i) }]), c = (g) => {
    const k = {
      hours: Sn(i),
      minutes: Kn(i),
      seconds: 0
    };
    return r.value.enabled ? [k[g], k[g]] : k[g];
  }, f = xn({
    hours: c("hours"),
    minutes: c("minutes"),
    seconds: c("seconds")
  });
  Rt(
    r,
    (g, k) => {
      g.enabled !== k.enabled && (f.hours = c("hours"), f.minutes = c("minutes"), f.seconds = c("seconds"));
    },
    { deep: !0 }
  );
  const m = ee({
    get: () => e.internalModelValue,
    set: (g) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", g);
    }
  }), v = ee(
    () => (g) => o.value[g] ? o.value[g].month : 0
  ), p = ee(
    () => (g) => o.value[g] ? o.value[g].year : 0
  );
  return Rt(
    m,
    (g, k) => {
      a && JSON.stringify(g ?? {}) !== JSON.stringify(k ?? {}) && a();
    },
    { deep: !0 }
  ), {
    calendars: o,
    time: f,
    modelValue: m,
    month: v,
    year: p,
    today: i
  };
}, Bb = (e, t) => {
  const {
    defaultedMultiCalendars: a,
    defaultedMultiDates: r,
    defaultedUI: n,
    defaultedHighlight: i,
    defaultedTz: o,
    propDates: c,
    defaultedRange: f
  } = Dt(t), { isDisabled: m } = Zn(t), v = se(null), p = se(Ia(/* @__PURE__ */ new Date(), o.value.timezone)), g = (_) => {
    !_.current && t.hideOffsetDates || (v.value = _.value);
  }, k = () => {
    v.value = null;
  }, w = (_) => Array.isArray(e.value) && f.value.enabled && e.value[0] && v.value ? _ ? Lt(v.value, e.value[0]) : $t(v.value, e.value[0]) : !0, b = (_, S) => {
    const ne = () => e.value ? S ? e.value[0] || null : e.value[1] : null, x = e.value && Array.isArray(e.value) ? ne() : null;
    return ze(oe(_.value), x);
  }, D = (_) => {
    const S = Array.isArray(e.value) ? e.value[0] : null;
    return _ ? !$t(v.value ?? null, S) : !0;
  }, T = (_, S = !0) => (f.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !_.current ? !1 : ze(oe(_.value), e.value[S ? 0 : 1]) : f.value.enabled ? b(_, S) && D(S) || ze(_.value, Array.isArray(e.value) ? e.value[0] : null) && w(S) : !1, C = (_, S) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const ne = ze(_.value, v.value);
      return S ? Lt(e.value[0], _.value) && ne : $t(e.value[0], _.value) && ne;
    }
    return !1;
  }, $ = (_) => !e.value || t.hideOffsetDates && !_.current ? !1 : f.value.enabled ? t.modelAuto && Array.isArray(e.value) ? ze(_.value, e.value[0] ? e.value[0] : p.value) : !1 : r.value.enabled && Array.isArray(e.value) ? e.value.some((S) => ze(S, _.value)) : ze(_.value, e.value ? e.value : p.value), P = (_) => {
    if (f.value.autoRange || t.weekPicker) {
      if (v.value) {
        if (t.hideOffsetDates && !_.current) return !1;
        const S = cr(v.value, +f.value.autoRange), ne = gn(oe(v.value), t.weekStart);
        return t.weekPicker ? ze(ne[1], oe(_.value)) : ze(S, oe(_.value));
      }
      return !1;
    }
    return !1;
  }, G = (_) => {
    if (f.value.autoRange || t.weekPicker) {
      if (v.value) {
        const S = cr(v.value, +f.value.autoRange);
        if (t.hideOffsetDates && !_.current) return !1;
        const ne = gn(oe(v.value), t.weekStart);
        return t.weekPicker ? Lt(_.value, ne[0]) && $t(_.value, ne[1]) : Lt(_.value, v.value) && $t(_.value, S);
      }
      return !1;
    }
    return !1;
  }, R = (_) => {
    if (f.value.autoRange || t.weekPicker) {
      if (v.value) {
        if (t.hideOffsetDates && !_.current) return !1;
        const S = gn(oe(v.value), t.weekStart);
        return t.weekPicker ? ze(S[0], _.value) : ze(v.value, _.value);
      }
      return !1;
    }
    return !1;
  }, E = (_) => uo(e.value, v.value, _.value), U = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, H = () => t.modelAuto ? av(t.internalModelValue) : !0, q = (_) => {
    if (t.weekPicker) return !1;
    const S = f.value.enabled ? !T(_) && !T(_, !1) : !0;
    return !m(_.value) && !$(_) && !(!_.current && t.hideOffsetDates) && S;
  }, J = (_) => f.value.enabled ? t.modelAuto ? U() && $(_) : !1 : $(_), ge = (_) => i.value ? fw(_.value, c.value.highlight) : !1, we = (_) => {
    const S = m(_.value);
    return S && (typeof i.value == "function" ? !i.value(_.value, S) : !i.value.options.highlightDisabled);
  }, I = (_) => {
    var S;
    return typeof i.value == "function" ? i.value(_.value) : (S = i.value.weekdays) == null ? void 0 : S.includes(_.value.getDay());
  }, V = (_) => (f.value.enabled || t.weekPicker) && (!(a.value.count > 0) || _.current) && H() && !(!_.current && t.hideOffsetDates) && !$(_) ? E(_) : !1, N = (_) => {
    const { isRangeStart: S, isRangeEnd: ne } = Y(_), x = f.value.enabled ? S || ne : !1;
    return {
      dp__cell_offset: !_.current,
      dp__pointer: !t.disabled && !(!_.current && t.hideOffsetDates) && !m(_.value),
      dp__cell_disabled: m(_.value),
      dp__cell_highlight: !we(_) && (ge(_) || I(_)) && !J(_) && !x && !R(_) && !(V(_) && t.weekPicker) && !ne,
      dp__cell_highlight_active: !we(_) && (ge(_) || I(_)) && J(_),
      dp__today: !t.noToday && ze(_.value, p.value) && _.current,
      "dp--past": $t(_.value, p.value),
      "dp--future": Lt(_.value, p.value)
    };
  }, te = (_) => ({
    dp__active_date: J(_),
    dp__date_hover: q(_)
  }), me = (_) => {
    if (e.value && !Array.isArray(e.value)) {
      const S = gn(e.value, t.weekStart);
      return {
        ...Q(_),
        dp__range_start: ze(S[0], _.value),
        dp__range_end: ze(S[1], _.value),
        dp__range_between_week: Lt(_.value, S[0]) && $t(_.value, S[1])
      };
    }
    return {
      ...Q(_)
    };
  }, K = (_) => {
    if (e.value && Array.isArray(e.value)) {
      const S = gn(e.value[0], t.weekStart), ne = e.value[1] ? gn(e.value[1], t.weekStart) : [];
      return {
        ...Q(_),
        dp__range_start: ze(S[0], _.value) || ze(ne[0], _.value),
        dp__range_end: ze(S[1], _.value) || ze(ne[1], _.value),
        dp__range_between_week: Lt(_.value, S[0]) && $t(_.value, S[1]) || Lt(_.value, ne[0]) && $t(_.value, ne[1]),
        dp__range_between: Lt(_.value, S[1]) && $t(_.value, ne[0])
      };
    }
    return {
      ...Q(_)
    };
  }, Y = (_) => {
    const S = a.value.count > 0 ? _.current && T(_) && H() : T(_) && H(), ne = a.value.count > 0 ? _.current && T(_, !1) && H() : T(_, !1) && H();
    return { isRangeStart: S, isRangeEnd: ne };
  }, de = (_) => {
    const { isRangeStart: S, isRangeEnd: ne } = Y(_);
    return {
      dp__range_start: S,
      dp__range_end: ne,
      dp__range_between: V(_),
      dp__date_hover: ze(_.value, v.value) && !S && !ne && !t.weekPicker,
      dp__date_hover_start: C(_, !0),
      dp__date_hover_end: C(_, !1)
    };
  }, Q = (_) => ({
    ...de(_),
    dp__cell_auto_range: G(_),
    dp__cell_auto_range_start: R(_),
    dp__cell_auto_range_end: P(_)
  }), j = (_) => f.value.enabled ? f.value.autoRange ? Q(_) : t.modelAuto ? { ...te(_), ...de(_) } : t.weekPicker ? K(_) : de(_) : t.weekPicker ? me(_) : te(_);
  return {
    setHoverDate: g,
    clearHoverDate: k,
    getDayClassData: (_) => t.hideOffsetDates && !_.current ? {} : {
      ...N(_),
      ...j(_),
      [t.dayClass ? t.dayClass(_.value, t.internalModelValue) : ""]: !0,
      ...n.value.calendarCell ?? {}
    }
  };
}, Zn = (e) => {
  const { defaultedFilters: t, defaultedRange: a, propDates: r, defaultedMultiDates: n } = Dt(e), i = (I) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(oe(I)) : !!ao(I, r.value.disabledDates) : !1, o = (I) => r.value.maxDate ? e.yearPicker ? Ee(I) > Ee(r.value.maxDate) : Lt(I, r.value.maxDate) : !1, c = (I) => r.value.minDate ? e.yearPicker ? Ee(I) < Ee(r.value.minDate) : $t(I, r.value.minDate) : !1, f = (I) => {
    const V = o(I), N = c(I), te = i(I), me = t.value.months.map((j) => +j).includes(Be(I)), K = e.disabledWeekDays.length ? e.disabledWeekDays.some((j) => +j === Jg(I)) : !1, Y = k(I), de = Ee(I), Q = de < +e.yearRange[0] || de > +e.yearRange[1];
    return !(V || N || te || me || Q || K || Y);
  }, m = (I, V) => $t(...jn(r.value.minDate, I, V)) || ze(...jn(r.value.minDate, I, V)), v = (I, V) => Lt(...jn(r.value.maxDate, I, V)) || ze(...jn(r.value.maxDate, I, V)), p = (I, V, N) => {
    let te = !1;
    return r.value.maxDate && N && v(I, V) && (te = !0), r.value.minDate && !N && m(I, V) && (te = !0), te;
  }, g = (I, V, N, te) => {
    let me = !1;
    return te && (r.value.minDate || r.value.maxDate) ? r.value.minDate && r.value.maxDate ? me = p(I, V, N) : (r.value.minDate && m(I, V) || r.value.maxDate && v(I, V)) && (me = !0) : me = !0, me;
  }, k = (I) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !ao(I, r.value.allowedDates) : !1, w = (I) => !f(I), b = (I) => a.value.noDisabledRange ? !Lm({ start: I[0], end: I[1] }).some((V) => w(V)) : !0, D = (I) => {
    if (I) {
      const V = Ee(I);
      return V >= +e.yearRange[0] && V <= e.yearRange[1];
    }
    return !0;
  }, T = (I, V) => !!(Array.isArray(I) && I[V] && (a.value.maxRange || a.value.minRange) && D(I[V])), C = (I, V, N = 0) => {
    if (T(V, N) && D(I)) {
      const te = Fm(I, V[N]), me = iv(V[N], I), K = me.length === 1 ? 0 : me.filter((de) => w(de)).length, Y = Math.abs(te) - (a.value.minMaxRawRange ? 0 : K);
      if (a.value.minRange && a.value.maxRange)
        return Y >= +a.value.minRange && Y <= +a.value.maxRange;
      if (a.value.minRange) return Y >= +a.value.minRange;
      if (a.value.maxRange) return Y <= +a.value.maxRange;
    }
    return !0;
  }, $ = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, P = (I) => Array.isArray(I) ? [I[0] ? Uo(I[0]) : null, I[1] ? Uo(I[1]) : null] : Uo(I), G = (I, V, N) => I.find(
    (te) => +te.hours === Sn(V) && te.minutes === "*" ? !0 : +te.minutes === Kn(V) && +te.hours === Sn(V)
  ) && N, R = (I, V, N) => {
    const [te, me] = I, [K, Y] = V;
    return !G(te, K, N) && !G(me, Y, N) && N;
  }, E = (I, V) => {
    const N = Array.isArray(V) ? V : [V];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? R(e.disabledTimes, N, I) : !N.some((te) => G(e.disabledTimes, te, I)) : I;
  }, U = (I, V) => {
    const N = Array.isArray(V) ? [Fs(V[0]), V[1] ? Fs(V[1]) : void 0] : Fs(V), te = !e.disabledTimes(N);
    return I && te;
  }, H = (I, V) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? E(V, I) : U(V, I) : V, q = (I) => {
    let V = !0;
    if (!I || $()) return !0;
    const N = !r.value.minDate && !r.value.maxDate ? P(I) : I;
    return (e.maxTime || r.value.maxDate) && (V = Yf(
      e.maxTime,
      r.value.maxDate,
      "max",
      Xt(N),
      V
    )), (e.minTime || r.value.minDate) && (V = Yf(
      e.minTime,
      r.value.minDate,
      "min",
      Xt(N),
      V
    )), H(I, V);
  }, J = (I) => {
    if (!e.monthPicker) return !0;
    let V = !0;
    const N = oe(fr(I));
    if (r.value.minDate && r.value.maxDate) {
      const te = oe(fr(r.value.minDate)), me = oe(fr(r.value.maxDate));
      return Lt(N, te) && $t(N, me) || ze(N, te) || ze(N, me);
    }
    if (r.value.minDate) {
      const te = oe(fr(r.value.minDate));
      V = Lt(N, te) || ze(N, te);
    }
    if (r.value.maxDate) {
      const te = oe(fr(r.value.maxDate));
      V = $t(N, te) || ze(N, te);
    }
    return V;
  }, ge = ee(() => (I) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : q(I)), we = ee(() => (I) => e.monthPicker ? Array.isArray(I) && (a.value.enabled || n.value.enabled) ? !I.filter((V) => !J(V)).length : J(I) : !0);
  return {
    isDisabled: w,
    validateDate: f,
    validateMonthYearInRange: g,
    isDateRangeAllowed: b,
    checkMinMaxRange: C,
    isValidTime: q,
    isTimeValid: ge,
    isMonthValid: we
  };
}, mo = () => {
  const e = ee(() => (r, n) => r == null ? void 0 : r.includes(n)), t = ee(() => (r, n) => r.count ? r.solo ? !0 : n === 0 : !0), a = ee(() => (r, n) => r.count ? r.solo ? !0 : n === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: a };
}, Gb = (e, t, a) => {
  const r = se(0), n = xn({
    [Is.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Is.calendar]: !1,
    [Is.header]: !1
  }), i = ee(() => e.monthPicker || e.timePicker), o = (p) => {
    var g;
    if ((g = e.flow) != null && g.length) {
      if (!p && i.value) return v();
      n[p] = !0, Object.keys(n).filter((k) => !n[k]).length || v();
    }
  }, c = () => {
    var p, g;
    (p = e.flow) != null && p.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), v()), ((g = e.flow) == null ? void 0 : g.length) === r.value && va().then(() => f());
  }, f = () => {
    r.value = -1;
  }, m = (p, g, ...k) => {
    var w, b;
    e.flow[r.value] === p && a.value && ((b = (w = a.value)[g]) == null || b.call(w, ...k));
  }, v = (p = 0) => {
    p && (r.value += p), m(fa.month, "toggleMonthPicker", !0), m(fa.year, "toggleYearPicker", !0), m(fa.calendar, "toggleTimePicker", !1, !0), m(fa.time, "toggleTimePicker", !0, !0);
    const g = e.flow[r.value];
    (g === fa.hours || g === fa.minutes || g === fa.seconds) && m(g, "toggleTimePicker", !0, !0, g);
  };
  return { childMount: o, updateFlowStep: c, resetFlow: f, handleFlow: v, flowStep: r };
}, zb = {
  key: 1,
  class: "dp__input_wrap"
}, Qb = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Kb = {
  key: 2,
  class: "dp--clear-btn"
}, Xb = ["aria-label"], Zb = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...co
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur",
    "text-input"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, {
      defaultedTextInput: i,
      defaultedAriaLabels: o,
      defaultedInline: c,
      defaultedConfig: f,
      defaultedRange: m,
      defaultedMultiDates: v,
      defaultedUI: p,
      getDefaultPattern: g,
      getDefaultStartTime: k
    } = Dt(n), { checkMinMaxRange: w } = Zn(n), b = se(), D = se(null), T = se(!1), C = se(!1), $ = ee(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !i.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !i.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: typeof n.state == "boolean" ? n.state : !1,
        dp__input_invalid: typeof n.state == "boolean" ? !n.state : !1,
        dp__input_focus: T.value || n.isMenuOpen,
        dp__input_reg: !i.value.enabled,
        ...p.value.input ?? {}
      })
    ), P = () => {
      r("set-input-date", null), n.clearable && n.autoApply && (r("set-empty-date"), b.value = null);
    }, G = (Y) => {
      const de = k();
      return hw(
        Y,
        i.value.format ?? g(),
        de ?? ov({}, n.enableSeconds),
        n.inputValue,
        C.value,
        n.formatLocale
      );
    }, R = (Y) => {
      const { rangeSeparator: de } = i.value, [Q, j] = Y.split(`${de}`);
      if (Q) {
        const _ = G(Q.trim()), S = j ? G(j.trim()) : null;
        if (fl(_, S)) return;
        const ne = _ && S ? [_, S] : [_];
        w(S, ne, 0) && (b.value = _ ? ne : null);
      }
    }, E = () => {
      C.value = !0;
    }, U = (Y) => {
      if (m.value.enabled)
        R(Y);
      else if (v.value.enabled) {
        const de = Y.split(";");
        b.value = de.map((Q) => G(Q.trim())).filter((Q) => Q);
      } else
        b.value = G(Y);
    }, H = (Y) => {
      var de;
      const Q = typeof Y == "string" ? Y : (de = Y.target) == null ? void 0 : de.value;
      Q !== "" ? (i.value.openMenu && !n.isMenuOpen && r("open"), U(Q), r("set-input-date", b.value)) : P(), C.value = !1, r("update:input-value", Q), r("text-input", Y, b.value);
    }, q = (Y) => {
      i.value.enabled ? (U(Y.target.value), i.value.enterSubmit && qd(b.value) && n.inputValue !== "" ? (r("set-input-date", b.value, !0), b.value = null) : i.value.enterSubmit && n.inputValue === "" && (b.value = null, r("clear"))) : we(Y);
    }, J = (Y, de) => {
      i.value.enabled && i.value.tabSubmit && !de && U(Y.target.value), i.value.tabSubmit && qd(b.value) && n.inputValue !== "" ? (r("set-input-date", b.value, !0, !0), b.value = null) : i.value.tabSubmit && n.inputValue === "" && (b.value = null, r("clear", !0));
    }, ge = () => {
      T.value = !0, r("focus"), va().then(() => {
        var Y;
        i.value.enabled && i.value.selectOnFocus && ((Y = D.value) == null || Y.select());
      });
    }, we = (Y) => {
      if (Gn(Y, f.value, !0), i.value.enabled && i.value.openMenu && !c.value.input) {
        if (i.value.openMenu === "open" && !n.isMenuOpen) return r("open");
        if (i.value.openMenu === "toggle") return r("toggle");
      } else i.value.enabled || r("toggle");
    }, I = () => {
      r("real-blur"), T.value = !1, (!n.isMenuOpen || c.value.enabled && c.value.input) && r("blur"), n.autoApply && i.value.enabled && b.value && !n.isMenuOpen && (r("set-input-date", b.value), r("select-date"), b.value = null);
    }, V = (Y) => {
      Gn(Y, f.value, !0), r("clear");
    }, N = (Y) => {
      if (Y.key === "Tab" && J(Y), Y.key === "Enter" && q(Y), !i.value.enabled) {
        if (Y.code === "Tab") return;
        Y.preventDefault();
      }
    }, te = () => {
      var Y;
      (Y = D.value) == null || Y.focus({ preventScroll: !0 });
    }, me = (Y) => {
      b.value = Y;
    }, K = (Y) => {
      Y.key === wt.tab && J(Y, !0);
    };
    return t({
      focusInput: te,
      setParsedDate: me
    }), (Y, de) => {
      var Q, j, _;
      return F(), z("div", { onClick: we }, [
        Y.$slots.trigger && !Y.$slots["dp-input"] && !y(c).enabled ? xe(Y.$slots, "trigger", { key: 0 }) : ue("", !0),
        !Y.$slots.trigger && (!y(c).enabled || y(c).input) ? (F(), z("div", zb, [
          Y.$slots["dp-input"] && !Y.$slots.trigger && (!y(c).enabled || y(c).enabled && y(c).input) ? xe(Y.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: H,
            onEnter: q,
            onTab: J,
            onClear: V,
            onBlur: I,
            onKeypress: N,
            onPaste: E,
            onFocus: ge,
            openMenu: () => Y.$emit("open"),
            closeMenu: () => Y.$emit("close"),
            toggleMenu: () => Y.$emit("toggle")
          }) : ue("", !0),
          Y.$slots["dp-input"] ? ue("", !0) : (F(), z("input", {
            key: 1,
            id: Y.uid ? `dp-input-${Y.uid}` : void 0,
            ref_key: "inputRef",
            ref: D,
            "data-test-id": "dp-input",
            name: Y.name,
            class: fe($.value),
            inputmode: y(i).enabled ? "text" : "none",
            placeholder: Y.placeholder,
            disabled: Y.disabled,
            readonly: Y.readonly,
            required: Y.required,
            value: e.inputValue,
            autocomplete: Y.autocomplete,
            "aria-label": (Q = y(o)) == null ? void 0 : Q.input,
            "aria-disabled": Y.disabled || void 0,
            "aria-invalid": Y.state === !1 ? !0 : void 0,
            onInput: H,
            onBlur: I,
            onFocus: ge,
            onKeypress: N,
            onKeydown: de[0] || (de[0] = (S) => N(S)),
            onPaste: E
          }, null, 42, Qb)),
          Se("div", {
            onClick: de[3] || (de[3] = (S) => r("toggle"))
          }, [
            Y.$slots["input-icon"] && !Y.hideInputIcon ? (F(), z("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: de[1] || (de[1] = (S) => r("toggle"))
            }, [
              xe(Y.$slots, "input-icon")
            ])) : ue("", !0),
            !Y.$slots["input-icon"] && !Y.hideInputIcon && !Y.$slots["dp-input"] ? (F(), Ve(y(yl), {
              key: 1,
              "aria-label": (j = y(o)) == null ? void 0 : j.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: de[2] || (de[2] = (S) => r("toggle"))
            }, null, 8, ["aria-label"])) : ue("", !0)
          ]),
          Y.$slots["clear-icon"] && e.inputValue && Y.clearable && !Y.disabled && !Y.readonly ? (F(), z("span", Kb, [
            xe(Y.$slots, "clear-icon", { clear: V })
          ])) : ue("", !0),
          Y.clearable && !Y.$slots["clear-icon"] && e.inputValue && !Y.disabled && !Y.readonly ? (F(), z("button", {
            key: 3,
            "aria-label": (_ = y(o)) == null ? void 0 : _.clearInput,
            class: "dp--clear-btn",
            type: "button",
            onKeydown: de[4] || (de[4] = (S) => y(ka)(S, () => V(S), !0, K)),
            onClick: de[5] || (de[5] = ul((S) => V(S), ["prevent"]))
          }, [
            sa(y(ev), {
              class: "dp__input_icons",
              "data-test-id": "clear-icon"
            })
          ], 40, Xb)) : ue("", !0)
        ])) : ue("", !0)
      ]);
    };
  }
}), Jb = typeof window < "u" ? window : void 0, Xo = () => {
}, e1 = (e) => S_() ? (T_(e), !0) : !1, t1 = (e, t, a, r) => {
  if (!e) return Xo;
  let n = Xo;
  const i = Rt(
    () => y(e),
    (c) => {
      n(), c && (c.addEventListener(t, a, r), n = () => {
        c.removeEventListener(t, a, r), n = Xo;
      });
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    i(), n();
  };
  return e1(o), o;
}, a1 = (e, t, a, r = {}) => {
  const { window: n = Jb, event: i = "pointerdown" } = r;
  return n ? t1(n, i, (o) => {
    const c = Bt(e), f = Bt(t);
    !c || !f || c === o.target || o.composedPath().includes(c) || o.composedPath().includes(f) || a(o);
  }, { passive: !0 }) : void 0;
}, r1 = ["data-dp-mobile"], n1 = /* @__PURE__ */ la({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...co
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "text-input"
  ],
  setup(e, { expose: t, emit: a }) {
    const r = a, n = e, i = Ns(), o = se(!1), c = ql(n, "modelValue"), f = ql(n, "timezone"), m = se(null), v = se(null), p = se(null), g = se(!1), k = se(null), w = se(!1), b = se(!1), D = se(!1), T = se(!1), { setMenuFocused: C, setShiftKey: $ } = hv(), { clearArrowNav: P } = Xn(), { validateDate: G, isValidTime: R } = Zn(n), {
      defaultedTransitions: E,
      defaultedTextInput: U,
      defaultedInline: H,
      defaultedConfig: q,
      defaultedRange: J,
      defaultedMultiDates: ge
    } = Dt(n), { menuTransition: we, showTransition: I } = ei(E), { isMobile: V } = wv(q);
    It(() => {
      ne(n.modelValue), va().then(() => {
        if (!H.value.enabled) {
          const X = Q(k.value);
          X == null || X.addEventListener("scroll", ae), window == null || window.addEventListener("resize", $e);
        }
      }), H.value.enabled && (o.value = !0), window == null || window.addEventListener("keyup", he), window == null || window.addEventListener("keydown", qe);
    }), Kl(() => {
      if (!H.value.enabled) {
        const X = Q(k.value);
        X == null || X.removeEventListener("scroll", ae), window == null || window.removeEventListener("resize", $e);
      }
      window == null || window.removeEventListener("keyup", he), window == null || window.removeEventListener("keydown", qe);
    });
    const N = Ua(i, "all", n.presetDates), te = Ua(i, "input");
    Rt(
      [c, f],
      () => {
        ne(c.value);
      },
      { deep: !0 }
    );
    const { openOnTop: me, menuStyle: K, xCorrect: Y, setMenuPosition: de, getScrollableParent: Q, shadowRender: j } = Hb({
      menuRef: m,
      menuRefInner: v,
      inputRef: p,
      pickerWrapperRef: k,
      inline: H,
      emit: r,
      props: n,
      slots: i
    }), {
      inputValue: _,
      internalModelValue: S,
      parseExternalModelValue: ne,
      emitModelValue: x,
      formatInputValue: ve,
      checkBeforeEmit: A
    } = Nw(r, n, g), st = ee(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: H.value.enabled,
        "dp--flex-display-collapsed": D.value,
        dp__flex_display_with_input: H.value.input
      })
    ), B = ee(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), le = ee(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || H.value.enabled
    } : {}), re = ee(() => ({ class: "dp__outer_menu_wrap" })), ke = ee(() => H.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), M = () => {
      var X, ye;
      return ((ye = (X = p.value) == null ? void 0 : X.$el) == null ? void 0 : ye.getBoundingClientRect()) ?? { width: 0, left: 0, right: 0 };
    }, ae = () => {
      o.value && (q.value.closeOnScroll ? Xe() : de());
    }, $e = () => {
      var X;
      o.value && de();
      const ye = ((X = v.value) == null ? void 0 : X.$el.getBoundingClientRect().width) ?? 0;
      D.value = document.body.offsetWidth <= ye;
    }, he = (X) => {
      X.key === "Tab" && !H.value.enabled && !n.teleport && q.value.tabOutClosesMenu && (k.value.contains(document.activeElement) || Xe()), b.value = X.shiftKey;
    }, qe = (X) => {
      b.value = X.shiftKey;
    }, Fe = () => {
      !n.disabled && !n.readonly && (j(If, n), de(!1), o.value = !0, o.value && r("open"), o.value || Yt(), ne(n.modelValue));
    }, L = () => {
      var X;
      _.value = "", Yt(), (X = p.value) == null || X.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), q.value.closeOnClearValue && Xe();
    }, ie = () => {
      const X = S.value;
      return !X || !Array.isArray(X) && G(X) ? !0 : Array.isArray(X) ? ge.value.enabled || X.length === 2 && G(X[0]) && G(X[1]) ? !0 : J.value.partialRange && !n.timePicker ? G(X[0]) : !1 : !1;
    }, Ye = () => {
      A() && ie() ? (x(), Xe()) : r("invalid-select", S.value);
    }, lt = (X) => {
      Ct(), x(), q.value.closeOnAutoApply && !X && Xe();
    }, Ct = () => {
      p.value && U.value.enabled && p.value.setParsedDate(S.value);
    }, De = (X = !1) => {
      n.autoApply && R(S.value) && ie() && (J.value.enabled && Array.isArray(S.value) ? (J.value.partialRange || S.value.length === 2) && lt(X) : lt(X));
    }, Yt = () => {
      U.value.enabled || (S.value = null);
    }, Xe = (X = !1) => {
      X && S.value && q.value.setDateOnMenuClose && Ye(), H.value.enabled || (o.value && (o.value = !1, Y.value = !1, C(!1), $(!1), P(), r("closed"), _.value && ne(c.value)), Yt(), r("blur"));
    }, ea = (X, ye, Te = !1) => {
      if (!X) {
        S.value = null;
        return;
      }
      const St = Array.isArray(X) ? !X.some((Me) => !G(Me)) : G(X), pt = R(X);
      St && pt ? (T.value = !0, S.value = X, ye && (w.value = Te, Ye(), r("text-submit")), va().then(() => {
        T.value = !1;
      })) : r("invalid-date", X);
    }, Ue = () => {
      n.autoApply && R(S.value) && x(), Ct();
    }, ia = () => o.value ? Xe() : Fe(), ya = (X) => {
      S.value = X;
    }, ta = () => {
      U.value.enabled && (g.value = !0, ve()), r("focus");
    }, oa = () => {
      if (U.value.enabled && (g.value = !1, ne(n.modelValue), w.value)) {
        const X = cw(k.value, b.value);
        X == null || X.focus();
      }
      r("blur");
    }, aa = (X) => {
      v.value && v.value.updateMonthYear(0, {
        month: xf(X.month),
        year: xf(X.year)
      });
    }, Ht = (X) => {
      ne(X ?? n.modelValue);
    }, W = (X, ye) => {
      var Te;
      (Te = v.value) == null || Te.switchView(X, ye);
    }, ce = (X) => q.value.onClickOutside ? q.value.onClickOutside(X) : Xe(!0), Pe = (X = 0) => {
      var ye;
      (ye = v.value) == null || ye.handleFlow(X);
    };
    return a1(m, p, () => ce(ie)), t({
      closeMenu: Xe,
      selectDate: Ye,
      clearValue: L,
      openMenu: Fe,
      onScroll: ae,
      formatInputValue: ve,
      // exposed for testing purposes
      updateInternalModelValue: ya,
      // modify internal modelValue
      setMonthYear: aa,
      parseModel: Ht,
      switchView: W,
      toggleMenu: ia,
      handleFlow: Pe,
      dpWrapMenuRef: m
    }), (X, ye) => (F(), z("div", {
      ref_key: "pickerWrapperRef",
      ref: k,
      class: fe(st.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": y(V)
    }, [
      sa(Zb, Zt({
        ref_key: "inputRef",
        ref: p,
        "input-value": y(_),
        "onUpdate:inputValue": ye[0] || (ye[0] = (Te) => Wl(_) ? _.value = Te : null),
        "is-menu-open": o.value
      }, X.$props, {
        onClear: L,
        onOpen: Fe,
        onSetInputDate: ea,
        onSetEmptyDate: y(x),
        onSelectDate: Ye,
        onToggle: ia,
        onClose: Xe,
        onFocus: ta,
        onBlur: oa,
        onRealBlur: ye[1] || (ye[1] = (Te) => g.value = !1),
        onTextInput: ye[2] || (ye[2] = (Te) => X.$emit("text-input", Te))
      }), ha({ _: 2 }, [
        ut(y(te), (Te, St) => ({
          name: Te,
          fn: je((pt) => [
            xe(X.$slots, Te, Jt(Ra(pt)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (F(), Ve(Xl(X.teleport ? k_ : "div"), Jt(Ra(le.value)), {
        default: je(() => [
          sa(Ls, {
            name: y(we)(y(me)),
            css: y(I) && !y(H).enabled
          }, {
            default: je(() => [
              o.value ? (F(), z("div", Zt({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: m
              }, re.value, {
                class: { "dp--menu-wrapper": !y(H).enabled },
                style: y(H).enabled ? void 0 : y(K)
              }), [
                sa(If, Zt({
                  ref_key: "dpMenuRef",
                  ref: v
                }, X.$props, {
                  "internal-model-value": y(S),
                  "onUpdate:internalModelValue": ye[3] || (ye[3] = (Te) => Wl(S) ? S.value = Te : null),
                  class: { [B.value]: !0, "dp--menu-wrapper": X.teleport },
                  "open-on-top": y(me),
                  "no-overlay-focus": ke.value,
                  collapse: D.value,
                  "get-input-rect": M,
                  "is-text-input-date": T.value,
                  onClosePicker: Xe,
                  onSelectDate: Ye,
                  onAutoApply: De,
                  onTimeUpdate: Ue,
                  onFlowStep: ye[4] || (ye[4] = (Te) => X.$emit("flow-step", Te)),
                  onUpdateMonthYear: ye[5] || (ye[5] = (Te) => X.$emit("update-month-year", Te)),
                  onInvalidSelect: ye[6] || (ye[6] = (Te) => X.$emit("invalid-select", y(S))),
                  onAutoApplyInvalid: ye[7] || (ye[7] = (Te) => X.$emit("invalid-select", Te)),
                  onInvalidFixedRange: ye[8] || (ye[8] = (Te) => X.$emit("invalid-fixed-range", Te)),
                  onRecalculatePosition: y(de),
                  onTooltipOpen: ye[9] || (ye[9] = (Te) => X.$emit("tooltip-open", Te)),
                  onTooltipClose: ye[10] || (ye[10] = (Te) => X.$emit("tooltip-close", Te)),
                  onTimePickerOpen: ye[11] || (ye[11] = (Te) => X.$emit("time-picker-open", Te)),
                  onTimePickerClose: ye[12] || (ye[12] = (Te) => X.$emit("time-picker-close", Te)),
                  onAmPmChange: ye[13] || (ye[13] = (Te) => X.$emit("am-pm-change", Te)),
                  onRangeStart: ye[14] || (ye[14] = (Te) => X.$emit("range-start", Te)),
                  onRangeEnd: ye[15] || (ye[15] = (Te) => X.$emit("range-end", Te)),
                  onDateUpdate: ye[16] || (ye[16] = (Te) => X.$emit("date-update", Te)),
                  onInvalidDate: ye[17] || (ye[17] = (Te) => X.$emit("invalid-date", Te)),
                  onOverlayToggle: ye[18] || (ye[18] = (Te) => X.$emit("overlay-toggle", Te)),
                  onMenuBlur: ye[19] || (ye[19] = (Te) => X.$emit("blur"))
                }), ha({ _: 2 }, [
                  ut(y(N), (Te, St) => ({
                    name: Te,
                    fn: je((pt) => [
                      xe(X.$slots, Te, Jt(Ra({ ...pt })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : ue("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 10, r1));
  }
}), yc = /* @__PURE__ */ (() => {
  const e = n1;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), s1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yc
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(s1).forEach(([e, t]) => {
  e !== "default" && (yc[e] = t);
});
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var bv;
function be() {
  return bv.apply(null, arguments);
}
function l1(e) {
  bv = e;
}
function yr(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Es(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function at(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function pc(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (at(e, t))
      return !1;
  return !0;
}
function $a(e) {
  return e === void 0;
}
function Tn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ai(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function kv(e, t) {
  var a = [], r, n = e.length;
  for (r = 0; r < n; ++r)
    a.push(t(e[r], r));
  return a;
}
function Un(e, t) {
  for (var a in t)
    at(t, a) && (e[a] = t[a]);
  return at(t, "toString") && (e.toString = t.toString), at(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function nn(e, t, a, r) {
  return Uv(e, t, a, r, !0).utc();
}
function i1() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function He(e) {
  return e._pf == null && (e._pf = i1()), e._pf;
}
var Vd;
Array.prototype.some ? Vd = Array.prototype.some : Vd = function(e) {
  var t = Object(this), a = t.length >>> 0, r;
  for (r = 0; r < a; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function _c(e) {
  var t = null, a = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = He(e), a = Vd.call(t.parsedDateParts, function(n) {
    return n != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function vo(e) {
  var t = nn(NaN);
  return e != null ? Un(He(t), e) : He(t).userInvalidated = !0, t;
}
var Ff = be.momentProperties = [], Zo = !1;
function gc(e, t) {
  var a, r, n, i = Ff.length;
  if ($a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), $a(t._i) || (e._i = t._i), $a(t._f) || (e._f = t._f), $a(t._l) || (e._l = t._l), $a(t._strict) || (e._strict = t._strict), $a(t._tzm) || (e._tzm = t._tzm), $a(t._isUTC) || (e._isUTC = t._isUTC), $a(t._offset) || (e._offset = t._offset), $a(t._pf) || (e._pf = He(t)), $a(t._locale) || (e._locale = t._locale), i > 0)
    for (a = 0; a < i; a++)
      r = Ff[a], n = t[r], $a(n) || (e[r] = n);
  return e;
}
function ri(e) {
  gc(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Zo === !1 && (Zo = !0, be.updateOffset(this), Zo = !1);
}
function pr(e) {
  return e instanceof ri || e != null && e._isAMomentObject != null;
}
function Mv(e) {
  be.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function er(e, t) {
  var a = !0;
  return Un(function() {
    if (be.deprecationHandler != null && be.deprecationHandler(null, e), a) {
      var r = [], n, i, o, c = arguments.length;
      for (i = 0; i < c; i++) {
        if (n = "", typeof arguments[i] == "object") {
          n += `
[` + i + "] ";
          for (o in arguments[0])
            at(arguments[0], o) && (n += o + ": " + arguments[0][o] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[i];
        r.push(n);
      }
      Mv(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), a = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ef = {};
function Dv(e, t) {
  be.deprecationHandler != null && be.deprecationHandler(e, t), Ef[e] || (Mv(t), Ef[e] = !0);
}
be.suppressDeprecationWarnings = !1;
be.deprecationHandler = null;
function sn(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function o1(e) {
  var t, a;
  for (a in e)
    at(e, a) && (t = e[a], sn(t) ? this[a] = t : this["_" + a] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Hd(e, t) {
  var a = Un({}, e), r;
  for (r in t)
    at(t, r) && (Es(e[r]) && Es(t[r]) ? (a[r] = {}, Un(a[r], e[r]), Un(a[r], t[r])) : t[r] != null ? a[r] = t[r] : delete a[r]);
  for (r in e)
    at(e, r) && !at(t, r) && Es(e[r]) && (a[r] = Un({}, a[r]));
  return a;
}
function wc(e) {
  e != null && this.set(e);
}
var jd;
Object.keys ? jd = Object.keys : jd = function(e) {
  var t, a = [];
  for (t in e)
    at(e, t) && a.push(t);
  return a;
};
var u1 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function d1(e, t, a) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return sn(r) ? r.call(t, a) : r;
}
function rn(e, t, a) {
  var r = "" + Math.abs(e), n = t - r.length, i = e >= 0;
  return (i ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + r;
}
var bc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ui = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Jo = {}, ll = {};
function Re(e, t, a, r) {
  var n = r;
  typeof r == "string" && (n = function() {
    return this[r]();
  }), e && (ll[e] = n), t && (ll[t[0]] = function() {
    return rn(n.apply(this, arguments), t[1], t[2]);
  }), a && (ll[a] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function c1(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function f1(e) {
  var t = e.match(bc), a, r;
  for (a = 0, r = t.length; a < r; a++)
    ll[t[a]] ? t[a] = ll[t[a]] : t[a] = c1(t[a]);
  return function(n) {
    var i = "", o;
    for (o = 0; o < r; o++)
      i += sn(t[o]) ? t[o].call(n, e) : t[o];
    return i;
  };
}
function Qi(e, t) {
  return e.isValid() ? (t = Sv(t, e.localeData()), Jo[t] = Jo[t] || f1(t), Jo[t](e)) : e.localeData().invalidDate();
}
function Sv(e, t) {
  var a = 5;
  function r(n) {
    return t.longDateFormat(n) || n;
  }
  for (Ui.lastIndex = 0; a >= 0 && Ui.test(e); )
    e = e.replace(
      Ui,
      r
    ), Ui.lastIndex = 0, a -= 1;
  return e;
}
var h1 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function m1(e) {
  var t = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
  return t || !a ? t : (this._longDateFormat[e] = a.match(bc).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var v1 = "Invalid date";
function y1() {
  return this._invalidDate;
}
var p1 = "%d", _1 = /\d{1,2}/;
function g1(e) {
  return this._ordinal.replace("%d", e);
}
var w1 = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function b1(e, t, a, r) {
  var n = this._relativeTime[a];
  return sn(n) ? n(e, t, a, r) : n.replace(/%d/i, e);
}
function k1(e, t) {
  var a = this._relativeTime[e > 0 ? "future" : "past"];
  return sn(a) ? a(t) : a.replace(/%s/i, t);
}
var Nf = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function tr(e) {
  return typeof e == "string" ? Nf[e] || Nf[e.toLowerCase()] : void 0;
}
function kc(e) {
  var t = {}, a, r;
  for (r in e)
    at(e, r) && (a = tr(r), a && (t[a] = e[r]));
  return t;
}
var M1 = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function D1(e) {
  var t = [], a;
  for (a in e)
    at(e, a) && t.push({ unit: a, priority: M1[a] });
  return t.sort(function(r, n) {
    return r.priority - n.priority;
  }), t;
}
var Tv = /\d/, Ba = /\d\d/, xv = /\d{3}/, Mc = /\d{4}/, yo = /[+-]?\d{6}/, kt = /\d\d?/, Ov = /\d\d\d\d?/, Av = /\d\d\d\d\d\d?/, po = /\d{1,3}/, Dc = /\d{1,4}/, _o = /[+-]?\d{1,6}/, pl = /\d+/, go = /[+-]?\d+/, S1 = /Z|[+-]\d\d:?\d\d/gi, wo = /Z|[+-]\d\d(?::?\d\d)?/gi, T1 = /[+-]?\d+(\.\d{1,3})?/, ni = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _l = /^[1-9]\d?/, Sc = /^([1-9]\d|\d)/, ro;
ro = {};
function Ce(e, t, a) {
  ro[e] = sn(t) ? t : function(r, n) {
    return r && a ? a : t;
  };
}
function x1(e, t) {
  return at(ro, e) ? ro[e](t._strict, t._locale) : new RegExp(O1(e));
}
function O1(e) {
  return Mn(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, a, r, n, i) {
        return a || r || n || i;
      }
    )
  );
}
function Mn(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Za(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Qe(e) {
  var t = +e, a = 0;
  return t !== 0 && isFinite(t) && (a = Za(t)), a;
}
var Ud = {};
function ht(e, t) {
  var a, r = t, n;
  for (typeof e == "string" && (e = [e]), Tn(t) && (r = function(i, o) {
    o[t] = Qe(i);
  }), n = e.length, a = 0; a < n; a++)
    Ud[e[a]] = r;
}
function si(e, t) {
  ht(e, function(a, r, n, i) {
    n._w = n._w || {}, t(a, n._w, n, i);
  });
}
function A1(e, t, a) {
  t != null && at(Ud, e) && Ud[e](t, a._a, a, e);
}
function bo(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var ma = 0, bn = 1, Jr = 2, Gt = 3, hr = 4, kn = 5, $s = 6, C1 = 7, Y1 = 8;
Re("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? rn(e, 4) : "+" + e;
});
Re(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Re(0, ["YYYY", 4], 0, "year");
Re(0, ["YYYYY", 5], 0, "year");
Re(0, ["YYYYYY", 6, !0], 0, "year");
Ce("Y", go);
Ce("YY", kt, Ba);
Ce("YYYY", Dc, Mc);
Ce("YYYYY", _o, yo);
Ce("YYYYYY", _o, yo);
ht(["YYYYY", "YYYYYY"], ma);
ht("YYYY", function(e, t) {
  t[ma] = e.length === 2 ? be.parseTwoDigitYear(e) : Qe(e);
});
ht("YY", function(e, t) {
  t[ma] = be.parseTwoDigitYear(e);
});
ht("Y", function(e, t) {
  t[ma] = parseInt(e, 10);
});
function Ll(e) {
  return bo(e) ? 366 : 365;
}
be.parseTwoDigitYear = function(e) {
  return Qe(e) + (Qe(e) > 68 ? 1900 : 2e3);
};
var Cv = gl("FullYear", !0);
function P1() {
  return bo(this.year());
}
function gl(e, t) {
  return function(a) {
    return a != null ? (Yv(this, e, a), be.updateOffset(this, t), this) : Ul(this, e);
  };
}
function Ul(e, t) {
  if (!e.isValid())
    return NaN;
  var a = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? a.getUTCMilliseconds() : a.getMilliseconds();
    case "Seconds":
      return r ? a.getUTCSeconds() : a.getSeconds();
    case "Minutes":
      return r ? a.getUTCMinutes() : a.getMinutes();
    case "Hours":
      return r ? a.getUTCHours() : a.getHours();
    case "Date":
      return r ? a.getUTCDate() : a.getDate();
    case "Day":
      return r ? a.getUTCDay() : a.getDay();
    case "Month":
      return r ? a.getUTCMonth() : a.getMonth();
    case "FullYear":
      return r ? a.getUTCFullYear() : a.getFullYear();
    default:
      return NaN;
  }
}
function Yv(e, t, a) {
  var r, n, i, o, c;
  if (!(!e.isValid() || isNaN(a))) {
    switch (r = e._d, n = e._isUTC, t) {
      case "Milliseconds":
        return void (n ? r.setUTCMilliseconds(a) : r.setMilliseconds(a));
      case "Seconds":
        return void (n ? r.setUTCSeconds(a) : r.setSeconds(a));
      case "Minutes":
        return void (n ? r.setUTCMinutes(a) : r.setMinutes(a));
      case "Hours":
        return void (n ? r.setUTCHours(a) : r.setHours(a));
      case "Date":
        return void (n ? r.setUTCDate(a) : r.setDate(a));
      // case 'Day': // Not real
      //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
      // case 'Month': // Not used because we need to pass two variables
      //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
      case "FullYear":
        break;
      // See below ...
      default:
        return;
    }
    i = a, o = e.month(), c = e.date(), c = c === 29 && o === 1 && !bo(i) ? 28 : c, n ? r.setUTCFullYear(i, o, c) : r.setFullYear(i, o, c);
  }
}
function $1(e) {
  return e = tr(e), sn(this[e]) ? this[e]() : this;
}
function R1(e, t) {
  if (typeof e == "object") {
    e = kc(e);
    var a = D1(e), r, n = a.length;
    for (r = 0; r < n; r++)
      this[a[r].unit](e[a[r].unit]);
  } else if (e = tr(e), sn(this[e]))
    return this[e](t);
  return this;
}
function I1(e, t) {
  return (e % t + t) % t;
}
var Nt;
Array.prototype.indexOf ? Nt = Array.prototype.indexOf : Nt = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Tc(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var a = I1(t, 12);
  return e += (t - a) / 12, a === 1 ? bo(e) ? 29 : 28 : 31 - a % 7 % 2;
}
Re("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Re("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Re("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
Ce("M", kt, _l);
Ce("MM", kt, Ba);
Ce("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
Ce("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
ht(["M", "MM"], function(e, t) {
  t[bn] = Qe(e) - 1;
});
ht(["MMM", "MMMM"], function(e, t, a, r) {
  var n = a._locale.monthsParse(e, r, a._strict);
  n != null ? t[bn] = n : He(a).invalidMonth = e;
});
var F1 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Pv = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), $v = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, E1 = ni, N1 = ni;
function L1(e, t) {
  return e ? yr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || $v).test(t) ? "format" : "standalone"][e.month()] : yr(this._months) ? this._months : this._months.standalone;
}
function W1(e, t) {
  return e ? yr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[$v.test(t) ? "format" : "standalone"][e.month()] : yr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function q1(e, t, a) {
  var r, n, i, o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = nn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return a ? t === "MMM" ? (n = Nt.call(this._shortMonthsParse, o), n !== -1 ? n : null) : (n = Nt.call(this._longMonthsParse, o), n !== -1 ? n : null) : t === "MMM" ? (n = Nt.call(this._shortMonthsParse, o), n !== -1 ? n : (n = Nt.call(this._longMonthsParse, o), n !== -1 ? n : null)) : (n = Nt.call(this._longMonthsParse, o), n !== -1 ? n : (n = Nt.call(this._shortMonthsParse, o), n !== -1 ? n : null));
}
function V1(e, t, a) {
  var r, n, i;
  if (this._monthsParseExact)
    return q1.call(this, e, t, a);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (n = nn([2e3, r]), a && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !a && !this._monthsParse[r] && (i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), a && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (a && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!a && this._monthsParse[r].test(e))
      return r;
  }
}
function Rv(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Qe(t);
    else if (t = e.localeData().monthsParse(t), !Tn(t))
      return e;
  }
  var a = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Tc(e.year(), a)), e._isUTC ? e._d.setUTCMonth(a, r) : e._d.setMonth(a, r), e;
}
function Iv(e) {
  return e != null ? (Rv(this, e), be.updateOffset(this, !0), this) : Ul(this, "Month");
}
function H1() {
  return Tc(this.year(), this.month());
}
function j1(e) {
  return this._monthsParseExact ? (at(this, "_monthsRegex") || Fv.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (at(this, "_monthsShortRegex") || (this._monthsShortRegex = E1), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function U1(e) {
  return this._monthsParseExact ? (at(this, "_monthsRegex") || Fv.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (at(this, "_monthsRegex") || (this._monthsRegex = N1), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Fv() {
  function e(f, m) {
    return m.length - f.length;
  }
  var t = [], a = [], r = [], n, i, o, c;
  for (n = 0; n < 12; n++)
    i = nn([2e3, n]), o = Mn(this.monthsShort(i, "")), c = Mn(this.months(i, "")), t.push(o), a.push(c), r.push(c), r.push(o);
  t.sort(e), a.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function B1(e, t, a, r, n, i, o) {
  var c;
  return e < 100 && e >= 0 ? (c = new Date(e + 400, t, a, r, n, i, o), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, t, a, r, n, i, o), c;
}
function Bl(e) {
  var t, a;
  return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function no(e, t, a) {
  var r = 7 + t - a, n = (7 + Bl(e, 0, r).getUTCDay() - t) % 7;
  return -n + r - 1;
}
function Ev(e, t, a, r, n) {
  var i = (7 + a - r) % 7, o = no(e, r, n), c = 1 + 7 * (t - 1) + i + o, f, m;
  return c <= 0 ? (f = e - 1, m = Ll(f) + c) : c > Ll(e) ? (f = e + 1, m = c - Ll(e)) : (f = e, m = c), {
    year: f,
    dayOfYear: m
  };
}
function Gl(e, t, a) {
  var r = no(e.year(), t, a), n = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, o;
  return n < 1 ? (o = e.year() - 1, i = n + Dn(o, t, a)) : n > Dn(e.year(), t, a) ? (i = n - Dn(e.year(), t, a), o = e.year() + 1) : (o = e.year(), i = n), {
    week: i,
    year: o
  };
}
function Dn(e, t, a) {
  var r = no(e, t, a), n = no(e + 1, t, a);
  return (Ll(e) - r + n) / 7;
}
Re("w", ["ww", 2], "wo", "week");
Re("W", ["WW", 2], "Wo", "isoWeek");
Ce("w", kt, _l);
Ce("ww", kt, Ba);
Ce("W", kt, _l);
Ce("WW", kt, Ba);
si(
  ["w", "ww", "W", "WW"],
  function(e, t, a, r) {
    t[r.substr(0, 1)] = Qe(e);
  }
);
function G1(e) {
  return Gl(e, this._week.dow, this._week.doy).week;
}
var z1 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Q1() {
  return this._week.dow;
}
function K1() {
  return this._week.doy;
}
function X1(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Z1(e) {
  var t = Gl(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Re("d", 0, "do", "day");
Re("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Re("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Re("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Re("e", 0, 0, "weekday");
Re("E", 0, 0, "isoWeekday");
Ce("d", kt);
Ce("e", kt);
Ce("E", kt);
Ce("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
Ce("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
Ce("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
si(["dd", "ddd", "dddd"], function(e, t, a, r) {
  var n = a._locale.weekdaysParse(e, r, a._strict);
  n != null ? t.d = n : He(a).invalidWeekday = e;
});
si(["d", "e", "E"], function(e, t, a, r) {
  t[r] = Qe(e);
});
function J1(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function ek(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function xc(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var tk = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Nv = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ak = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), rk = ni, nk = ni, sk = ni;
function lk(e, t) {
  var a = yr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? xc(a, this._week.dow) : e ? a[e.day()] : a;
}
function ik(e) {
  return e === !0 ? xc(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ok(e) {
  return e === !0 ? xc(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function uk(e, t, a) {
  var r, n, i, o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = nn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return a ? t === "dddd" ? (n = Nt.call(this._weekdaysParse, o), n !== -1 ? n : null) : t === "ddd" ? (n = Nt.call(this._shortWeekdaysParse, o), n !== -1 ? n : null) : (n = Nt.call(this._minWeekdaysParse, o), n !== -1 ? n : null) : t === "dddd" ? (n = Nt.call(this._weekdaysParse, o), n !== -1 || (n = Nt.call(this._shortWeekdaysParse, o), n !== -1) ? n : (n = Nt.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : t === "ddd" ? (n = Nt.call(this._shortWeekdaysParse, o), n !== -1 || (n = Nt.call(this._weekdaysParse, o), n !== -1) ? n : (n = Nt.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : (n = Nt.call(this._minWeekdaysParse, o), n !== -1 || (n = Nt.call(this._weekdaysParse, o), n !== -1) ? n : (n = Nt.call(this._shortWeekdaysParse, o), n !== -1 ? n : null));
}
function dk(e, t, a) {
  var r, n, i;
  if (this._weekdaysParseExact)
    return uk.call(this, e, t, a);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (n = nn([2e3, 1]).day(r), a && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), a && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (a && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (a && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!a && this._weekdaysParse[r].test(e))
      return r;
  }
}
function ck(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Ul(this, "Day");
  return e != null ? (e = J1(e, this.localeData()), this.add(e - t, "d")) : t;
}
function fk(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function hk(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = ek(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function mk(e) {
  return this._weekdaysParseExact ? (at(this, "_weekdaysRegex") || Oc.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (at(this, "_weekdaysRegex") || (this._weekdaysRegex = rk), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function vk(e) {
  return this._weekdaysParseExact ? (at(this, "_weekdaysRegex") || Oc.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (at(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = nk), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function yk(e) {
  return this._weekdaysParseExact ? (at(this, "_weekdaysRegex") || Oc.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (at(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = sk), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Oc() {
  function e(v, p) {
    return p.length - v.length;
  }
  var t = [], a = [], r = [], n = [], i, o, c, f, m;
  for (i = 0; i < 7; i++)
    o = nn([2e3, 1]).day(i), c = Mn(this.weekdaysMin(o, "")), f = Mn(this.weekdaysShort(o, "")), m = Mn(this.weekdays(o, "")), t.push(c), a.push(f), r.push(m), n.push(c), n.push(f), n.push(m);
  t.sort(e), a.sort(e), r.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ac() {
  return this.hours() % 12 || 12;
}
function pk() {
  return this.hours() || 24;
}
Re("H", ["HH", 2], 0, "hour");
Re("h", ["hh", 2], 0, Ac);
Re("k", ["kk", 2], 0, pk);
Re("hmm", 0, 0, function() {
  return "" + Ac.apply(this) + rn(this.minutes(), 2);
});
Re("hmmss", 0, 0, function() {
  return "" + Ac.apply(this) + rn(this.minutes(), 2) + rn(this.seconds(), 2);
});
Re("Hmm", 0, 0, function() {
  return "" + this.hours() + rn(this.minutes(), 2);
});
Re("Hmmss", 0, 0, function() {
  return "" + this.hours() + rn(this.minutes(), 2) + rn(this.seconds(), 2);
});
function Lv(e, t) {
  Re(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Lv("a", !0);
Lv("A", !1);
function Wv(e, t) {
  return t._meridiemParse;
}
Ce("a", Wv);
Ce("A", Wv);
Ce("H", kt, Sc);
Ce("h", kt, _l);
Ce("k", kt, _l);
Ce("HH", kt, Ba);
Ce("hh", kt, Ba);
Ce("kk", kt, Ba);
Ce("hmm", Ov);
Ce("hmmss", Av);
Ce("Hmm", Ov);
Ce("Hmmss", Av);
ht(["H", "HH"], Gt);
ht(["k", "kk"], function(e, t, a) {
  var r = Qe(e);
  t[Gt] = r === 24 ? 0 : r;
});
ht(["a", "A"], function(e, t, a) {
  a._isPm = a._locale.isPM(e), a._meridiem = e;
});
ht(["h", "hh"], function(e, t, a) {
  t[Gt] = Qe(e), He(a).bigHour = !0;
});
ht("hmm", function(e, t, a) {
  var r = e.length - 2;
  t[Gt] = Qe(e.substr(0, r)), t[hr] = Qe(e.substr(r)), He(a).bigHour = !0;
});
ht("hmmss", function(e, t, a) {
  var r = e.length - 4, n = e.length - 2;
  t[Gt] = Qe(e.substr(0, r)), t[hr] = Qe(e.substr(r, 2)), t[kn] = Qe(e.substr(n)), He(a).bigHour = !0;
});
ht("Hmm", function(e, t, a) {
  var r = e.length - 2;
  t[Gt] = Qe(e.substr(0, r)), t[hr] = Qe(e.substr(r));
});
ht("Hmmss", function(e, t, a) {
  var r = e.length - 4, n = e.length - 2;
  t[Gt] = Qe(e.substr(0, r)), t[hr] = Qe(e.substr(r, 2)), t[kn] = Qe(e.substr(n));
});
function _k(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var gk = /[ap]\.?m?\.?/i, wk = gl("Hours", !0);
function bk(e, t, a) {
  return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM";
}
var qv = {
  calendar: u1,
  longDateFormat: h1,
  invalidDate: v1,
  ordinal: p1,
  dayOfMonthOrdinalParse: _1,
  relativeTime: w1,
  months: F1,
  monthsShort: Pv,
  week: z1,
  weekdays: tk,
  weekdaysMin: ak,
  weekdaysShort: Nv,
  meridiemParse: gk
}, Mt = {}, Pl = {}, zl;
function kk(e, t) {
  var a, r = Math.min(e.length, t.length);
  for (a = 0; a < r; a += 1)
    if (e[a] !== t[a])
      return a;
  return r;
}
function Lf(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Mk(e) {
  for (var t = 0, a, r, n, i; t < e.length; ) {
    for (i = Lf(e[t]).split("-"), a = i.length, r = Lf(e[t + 1]), r = r ? r.split("-") : null; a > 0; ) {
      if (n = ko(i.slice(0, a).join("-")), n)
        return n;
      if (r && r.length >= a && kk(i, r) >= a - 1)
        break;
      a--;
    }
    t++;
  }
  return zl;
}
function Dk(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ko(e) {
  var t = null, a;
  if (Mt[e] === void 0 && typeof module < "u" && module && module.exports && Dk(e))
    try {
      t = zl._abbr, a = require, a("./locale/" + e), Qn(t);
    } catch {
      Mt[e] = null;
    }
  return Mt[e];
}
function Qn(e, t) {
  var a;
  return e && ($a(t) ? a = On(e) : a = Cc(e, t), a ? zl = a : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), zl._abbr;
}
function Cc(e, t) {
  if (t !== null) {
    var a, r = qv;
    if (t.abbr = e, Mt[e] != null)
      Dv(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Mt[e]._config;
    else if (t.parentLocale != null)
      if (Mt[t.parentLocale] != null)
        r = Mt[t.parentLocale]._config;
      else if (a = ko(t.parentLocale), a != null)
        r = a._config;
      else
        return Pl[t.parentLocale] || (Pl[t.parentLocale] = []), Pl[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Mt[e] = new wc(Hd(r, t)), Pl[e] && Pl[e].forEach(function(n) {
      Cc(n.name, n.config);
    }), Qn(e), Mt[e];
  } else
    return delete Mt[e], null;
}
function Sk(e, t) {
  if (t != null) {
    var a, r, n = qv;
    Mt[e] != null && Mt[e].parentLocale != null ? Mt[e].set(Hd(Mt[e]._config, t)) : (r = ko(e), r != null && (n = r._config), t = Hd(n, t), r == null && (t.abbr = e), a = new wc(t), a.parentLocale = Mt[e], Mt[e] = a), Qn(e);
  } else
    Mt[e] != null && (Mt[e].parentLocale != null ? (Mt[e] = Mt[e].parentLocale, e === Qn() && Qn(e)) : Mt[e] != null && delete Mt[e]);
  return Mt[e];
}
function On(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return zl;
  if (!yr(e)) {
    if (t = ko(e), t)
      return t;
    e = [e];
  }
  return Mk(e);
}
function Tk() {
  return jd(Mt);
}
function Yc(e) {
  var t, a = e._a;
  return a && He(e).overflow === -2 && (t = a[bn] < 0 || a[bn] > 11 ? bn : a[Jr] < 1 || a[Jr] > Tc(a[ma], a[bn]) ? Jr : a[Gt] < 0 || a[Gt] > 24 || a[Gt] === 24 && (a[hr] !== 0 || a[kn] !== 0 || a[$s] !== 0) ? Gt : a[hr] < 0 || a[hr] > 59 ? hr : a[kn] < 0 || a[kn] > 59 ? kn : a[$s] < 0 || a[$s] > 999 ? $s : -1, He(e)._overflowDayOfYear && (t < ma || t > Jr) && (t = Jr), He(e)._overflowWeeks && t === -1 && (t = C1), He(e)._overflowWeekday && t === -1 && (t = Y1), He(e).overflow = t), e;
}
var xk = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ok = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ak = /Z|[+-]\d\d(?::?\d\d)?/, Bi = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], eu = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Ck = /^\/?Date\((-?\d+)/i, Yk = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Pk = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Vv(e) {
  var t, a, r = e._i, n = xk.exec(r) || Ok.exec(r), i, o, c, f, m = Bi.length, v = eu.length;
  if (n) {
    for (He(e).iso = !0, t = 0, a = m; t < a; t++)
      if (Bi[t][1].exec(n[1])) {
        o = Bi[t][0], i = Bi[t][2] !== !1;
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, a = v; t < a; t++)
        if (eu[t][1].exec(n[3])) {
          c = (n[2] || " ") + eu[t][0];
          break;
        }
      if (c == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && c != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (Ak.exec(n[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = o + (c || "") + (f || ""), $c(e);
  } else
    e._isValid = !1;
}
function $k(e, t, a, r, n, i) {
  var o = [
    Rk(e),
    Pv.indexOf(t),
    parseInt(a, 10),
    parseInt(r, 10),
    parseInt(n, 10)
  ];
  return i && o.push(parseInt(i, 10)), o;
}
function Rk(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Ik(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Fk(e, t, a) {
  if (e) {
    var r = Nv.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== n)
      return He(a).weekdayMismatch = !0, a._isValid = !1, !1;
  }
  return !0;
}
function Ek(e, t, a) {
  if (e)
    return Pk[e];
  if (t)
    return 0;
  var r = parseInt(a, 10), n = r % 100, i = (r - n) / 100;
  return i * 60 + n;
}
function Hv(e) {
  var t = Yk.exec(Ik(e._i)), a;
  if (t) {
    if (a = $k(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Fk(t[1], a, e))
      return;
    e._a = a, e._tzm = Ek(t[8], t[9], t[10]), e._d = Bl.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), He(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Nk(e) {
  var t = Ck.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Vv(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Hv(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : be.createFromInputFallback(e);
}
be.createFromInputFallback = er(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function rl(e, t, a) {
  return e ?? t ?? a;
}
function Lk(e) {
  var t = new Date(be.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Pc(e) {
  var t, a, r = [], n, i, o;
  if (!e._d) {
    for (n = Lk(e), e._w && e._a[Jr] == null && e._a[bn] == null && Wk(e), e._dayOfYear != null && (o = rl(e._a[ma], n[ma]), (e._dayOfYear > Ll(o) || e._dayOfYear === 0) && (He(e)._overflowDayOfYear = !0), a = Bl(o, 0, e._dayOfYear), e._a[bn] = a.getUTCMonth(), e._a[Jr] = a.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Gt] === 24 && e._a[hr] === 0 && e._a[kn] === 0 && e._a[$s] === 0 && (e._nextDay = !0, e._a[Gt] = 0), e._d = (e._useUTC ? Bl : B1).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Gt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (He(e).weekdayMismatch = !0);
  }
}
function Wk(e) {
  var t, a, r, n, i, o, c, f, m;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, o = 4, a = rl(
    t.GG,
    e._a[ma],
    Gl(bt(), 1, 4).year
  ), r = rl(t.W, 1), n = rl(t.E, 1), (n < 1 || n > 7) && (f = !0)) : (i = e._locale._week.dow, o = e._locale._week.doy, m = Gl(bt(), i, o), a = rl(t.gg, e._a[ma], m.year), r = rl(t.w, m.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (f = !0)) : t.e != null ? (n = t.e + i, (t.e < 0 || t.e > 6) && (f = !0)) : n = i), r < 1 || r > Dn(a, i, o) ? He(e)._overflowWeeks = !0 : f != null ? He(e)._overflowWeekday = !0 : (c = Ev(a, r, n, i, o), e._a[ma] = c.year, e._dayOfYear = c.dayOfYear);
}
be.ISO_8601 = function() {
};
be.RFC_2822 = function() {
};
function $c(e) {
  if (e._f === be.ISO_8601) {
    Vv(e);
    return;
  }
  if (e._f === be.RFC_2822) {
    Hv(e);
    return;
  }
  e._a = [], He(e).empty = !0;
  var t = "" + e._i, a, r, n, i, o, c = t.length, f = 0, m, v;
  for (n = Sv(e._f, e._locale).match(bc) || [], v = n.length, a = 0; a < v; a++)
    i = n[a], r = (t.match(x1(i, e)) || [])[0], r && (o = t.substr(0, t.indexOf(r)), o.length > 0 && He(e).unusedInput.push(o), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), ll[i] ? (r ? He(e).empty = !1 : He(e).unusedTokens.push(i), A1(i, r, e)) : e._strict && !r && He(e).unusedTokens.push(i);
  He(e).charsLeftOver = c - f, t.length > 0 && He(e).unusedInput.push(t), e._a[Gt] <= 12 && He(e).bigHour === !0 && e._a[Gt] > 0 && (He(e).bigHour = void 0), He(e).parsedDateParts = e._a.slice(0), He(e).meridiem = e._meridiem, e._a[Gt] = qk(
    e._locale,
    e._a[Gt],
    e._meridiem
  ), m = He(e).era, m !== null && (e._a[ma] = e._locale.erasConvertYear(m, e._a[ma])), Pc(e), Yc(e);
}
function qk(e, t, a) {
  var r;
  return a == null ? t : e.meridiemHour != null ? e.meridiemHour(t, a) : (e.isPM != null && (r = e.isPM(a), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Vk(e) {
  var t, a, r, n, i, o, c = !1, f = e._f.length;
  if (f === 0) {
    He(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (n = 0; n < f; n++)
    i = 0, o = !1, t = gc({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], $c(t), _c(t) && (o = !0), i += He(t).charsLeftOver, i += He(t).unusedTokens.length * 10, He(t).score = i, c ? i < r && (r = i, a = t) : (r == null || i < r || o) && (r = i, a = t, o && (c = !0));
  Un(e, a || t);
}
function Hk(e) {
  if (!e._d) {
    var t = kc(e._i), a = t.day === void 0 ? t.date : t.day;
    e._a = kv(
      [t.year, t.month, a, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Pc(e);
  }
}
function jk(e) {
  var t = new ri(Yc(jv(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function jv(e) {
  var t = e._i, a = e._f;
  return e._locale = e._locale || On(e._l), t === null || a === void 0 && t === "" ? vo({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), pr(t) ? new ri(Yc(t)) : (ai(t) ? e._d = t : yr(a) ? Vk(e) : a ? $c(e) : Uk(e), _c(e) || (e._d = null), e));
}
function Uk(e) {
  var t = e._i;
  $a(t) ? e._d = new Date(be.now()) : ai(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Nk(e) : yr(t) ? (e._a = kv(t.slice(0), function(a) {
    return parseInt(a, 10);
  }), Pc(e)) : Es(t) ? Hk(e) : Tn(t) ? e._d = new Date(t) : be.createFromInputFallback(e);
}
function Uv(e, t, a, r, n) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (a === !0 || a === !1) && (r = a, a = void 0), (Es(e) && pc(e) || yr(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = n, i._l = a, i._i = e, i._f = t, i._strict = r, jk(i);
}
function bt(e, t, a, r) {
  return Uv(e, t, a, r, !1);
}
var Bk = er(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = bt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : vo();
  }
), Gk = er(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = bt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : vo();
  }
);
function Bv(e, t) {
  var a, r;
  if (t.length === 1 && yr(t[0]) && (t = t[0]), !t.length)
    return bt();
  for (a = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](a)) && (a = t[r]);
  return a;
}
function zk() {
  var e = [].slice.call(arguments, 0);
  return Bv("isBefore", e);
}
function Qk() {
  var e = [].slice.call(arguments, 0);
  return Bv("isAfter", e);
}
var Kk = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, $l = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Xk(e) {
  var t, a = !1, r, n = $l.length;
  for (t in e)
    if (at(e, t) && !(Nt.call($l, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < n; ++r)
    if (e[$l[r]]) {
      if (a)
        return !1;
      parseFloat(e[$l[r]]) !== Qe(e[$l[r]]) && (a = !0);
    }
  return !0;
}
function Zk() {
  return this._isValid;
}
function Jk() {
  return gr(NaN);
}
function Mo(e) {
  var t = kc(e), a = t.year || 0, r = t.quarter || 0, n = t.month || 0, i = t.week || t.isoWeek || 0, o = t.day || 0, c = t.hour || 0, f = t.minute || 0, m = t.second || 0, v = t.millisecond || 0;
  this._isValid = Xk(t), this._milliseconds = +v + m * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  c * 1e3 * 60 * 60, this._days = +o + i * 7, this._months = +n + r * 3 + a * 12, this._data = {}, this._locale = On(), this._bubble();
}
function Ki(e) {
  return e instanceof Mo;
}
function Bd(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function eM(e, t, a) {
  var r = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), i = 0, o;
  for (o = 0; o < r; o++)
    Qe(e[o]) !== Qe(t[o]) && i++;
  return i + n;
}
function Gv(e, t) {
  Re(e, 0, 0, function() {
    var a = this.utcOffset(), r = "+";
    return a < 0 && (a = -a, r = "-"), r + rn(~~(a / 60), 2) + t + rn(~~a % 60, 2);
  });
}
Gv("Z", ":");
Gv("ZZ", "");
Ce("Z", wo);
Ce("ZZ", wo);
ht(["Z", "ZZ"], function(e, t, a) {
  a._useUTC = !0, a._tzm = Rc(wo, e);
});
var tM = /([\+\-]|\d\d)/gi;
function Rc(e, t) {
  var a = (t || "").match(e), r, n, i;
  return a === null ? null : (r = a[a.length - 1] || [], n = (r + "").match(tM) || ["-", 0, 0], i = +(n[1] * 60) + Qe(n[2]), i === 0 ? 0 : n[0] === "+" ? i : -i);
}
function Ic(e, t) {
  var a, r;
  return t._isUTC ? (a = t.clone(), r = (pr(e) || ai(e) ? e.valueOf() : bt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), be.updateOffset(a, !1), a) : bt(e).local();
}
function Gd(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
be.updateOffset = function() {
};
function aM(e, t, a) {
  var r = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Rc(wo, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !a && (e = e * 60);
    return !this._isUTC && t && (n = Gd(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), r !== e && (!t || this._changeInProgress ? Kv(
      this,
      gr(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, be.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Gd(this);
}
function rM(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function nM(e) {
  return this.utcOffset(0, e);
}
function sM(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gd(this), "m")), this;
}
function lM() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Rc(S1, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function iM(e) {
  return this.isValid() ? (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function oM() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function uM() {
  if (!$a(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return gc(e, this), e = jv(e), e._a ? (t = e._isUTC ? nn(e._a) : bt(e._a), this._isDSTShifted = this.isValid() && eM(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function dM() {
  return this.isValid() ? !this._isUTC : !1;
}
function cM() {
  return this.isValid() ? this._isUTC : !1;
}
function zv() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var fM = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, hM = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function gr(e, t) {
  var a = e, r = null, n, i, o;
  return Ki(e) ? a = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Tn(e) || !isNaN(+e) ? (a = {}, t ? a[t] = +e : a.milliseconds = +e) : (r = fM.exec(e)) ? (n = r[1] === "-" ? -1 : 1, a = {
    y: 0,
    d: Qe(r[Jr]) * n,
    h: Qe(r[Gt]) * n,
    m: Qe(r[hr]) * n,
    s: Qe(r[kn]) * n,
    ms: Qe(Bd(r[$s] * 1e3)) * n
    // the millisecond decimal point is included in the match
  }) : (r = hM.exec(e)) ? (n = r[1] === "-" ? -1 : 1, a = {
    y: Cs(r[2], n),
    M: Cs(r[3], n),
    w: Cs(r[4], n),
    d: Cs(r[5], n),
    h: Cs(r[6], n),
    m: Cs(r[7], n),
    s: Cs(r[8], n)
  }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (o = mM(
    bt(a.from),
    bt(a.to)
  ), a = {}, a.ms = o.milliseconds, a.M = o.months), i = new Mo(a), Ki(e) && at(e, "_locale") && (i._locale = e._locale), Ki(e) && at(e, "_isValid") && (i._isValid = e._isValid), i;
}
gr.fn = Mo.prototype;
gr.invalid = Jk;
function Cs(e, t) {
  var a = e && parseFloat(e.replace(",", "."));
  return (isNaN(a) ? 0 : a) * t;
}
function Wf(e, t) {
  var a = {};
  return a.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a;
}
function mM(e, t) {
  var a;
  return e.isValid() && t.isValid() ? (t = Ic(t, e), e.isBefore(t) ? a = Wf(e, t) : (a = Wf(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 };
}
function Qv(e, t) {
  return function(a, r) {
    var n, i;
    return r !== null && !isNaN(+r) && (Dv(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = a, a = r, r = i), n = gr(a, r), Kv(this, n, e), this;
  };
}
function Kv(e, t, a, r) {
  var n = t._milliseconds, i = Bd(t._days), o = Bd(t._months);
  e.isValid() && (r = r ?? !0, o && Rv(e, Ul(e, "Month") + o * a), i && Yv(e, "Date", Ul(e, "Date") + i * a), n && e._d.setTime(e._d.valueOf() + n * a), r && be.updateOffset(e, i || o));
}
var vM = Qv(1, "add"), yM = Qv(-1, "subtract");
function Xv(e) {
  return typeof e == "string" || e instanceof String;
}
function pM(e) {
  return pr(e) || ai(e) || Xv(e) || Tn(e) || gM(e) || _M(e) || e === null || e === void 0;
}
function _M(e) {
  var t = Es(e) && !pc(e), a = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], n, i, o = r.length;
  for (n = 0; n < o; n += 1)
    i = r[n], a = a || at(e, i);
  return t && a;
}
function gM(e) {
  var t = yr(e), a = !1;
  return t && (a = e.filter(function(r) {
    return !Tn(r) && Xv(e);
  }).length === 0), t && a;
}
function wM(e) {
  var t = Es(e) && !pc(e), a = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, i;
  for (n = 0; n < r.length; n += 1)
    i = r[n], a = a || at(e, i);
  return t && a;
}
function bM(e, t) {
  var a = e.diff(t, "days", !0);
  return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
}
function kM(e, t) {
  arguments.length === 1 && (arguments[0] ? pM(arguments[0]) ? (e = arguments[0], t = void 0) : wM(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var a = e || bt(), r = Ic(a, this).startOf("day"), n = be.calendarFormat(this, r) || "sameElse", i = t && (sn(t[n]) ? t[n].call(this, a) : t[n]);
  return this.format(
    i || this.localeData().calendar(n, this, bt(a))
  );
}
function MM() {
  return new ri(this);
}
function DM(e, t) {
  var a = pr(e) ? e : bt(e);
  return this.isValid() && a.isValid() ? (t = tr(t) || "millisecond", t === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function SM(e, t) {
  var a = pr(e) ? e : bt(e);
  return this.isValid() && a.isValid() ? (t = tr(t) || "millisecond", t === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf()) : !1;
}
function TM(e, t, a, r) {
  var n = pr(e) ? e : bt(e), i = pr(t) ? t : bt(t);
  return this.isValid() && n.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(n, a) : !this.isBefore(n, a)) && (r[1] === ")" ? this.isBefore(i, a) : !this.isAfter(i, a))) : !1;
}
function xM(e, t) {
  var a = pr(e) ? e : bt(e), r;
  return this.isValid() && a.isValid() ? (t = tr(t) || "millisecond", t === "millisecond" ? this.valueOf() === a.valueOf() : (r = a.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function OM(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function AM(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function CM(e, t, a) {
  var r, n, i;
  if (!this.isValid())
    return NaN;
  if (r = Ic(e, this), !r.isValid())
    return NaN;
  switch (n = (r.utcOffset() - this.utcOffset()) * 6e4, t = tr(t), t) {
    case "year":
      i = Xi(this, r) / 12;
      break;
    case "month":
      i = Xi(this, r);
      break;
    case "quarter":
      i = Xi(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    // 1000
    case "minute":
      i = (this - r) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      i = (this - r) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      i = (this - r - n) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      i = (this - r - n) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      i = this - r;
  }
  return a ? i : Za(i);
}
function Xi(e, t) {
  if (e.date() < t.date())
    return -Xi(t, e);
  var a = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(a, "months"), n, i;
  return t - r < 0 ? (n = e.clone().add(a - 1, "months"), i = (t - r) / (r - n)) : (n = e.clone().add(a + 1, "months"), i = (t - r) / (n - r)), -(a + i) || 0;
}
be.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
be.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function YM() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function PM(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, a = t ? this.clone().utc() : this;
  return a.year() < 0 || a.year() > 9999 ? Qi(
    a,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : sn(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Qi(a, "Z")) : Qi(
    a,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function $M() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", a, r, n, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), a = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(a + r + n + i);
}
function RM(e) {
  e || (e = this.isUtc() ? be.defaultFormatUtc : be.defaultFormat);
  var t = Qi(this, e);
  return this.localeData().postformat(t);
}
function IM(e, t) {
  return this.isValid() && (pr(e) && e.isValid() || bt(e).isValid()) ? gr({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function FM(e) {
  return this.from(bt(), e);
}
function EM(e, t) {
  return this.isValid() && (pr(e) && e.isValid() || bt(e).isValid()) ? gr({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function NM(e) {
  return this.to(bt(), e);
}
function Zv(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = On(e), t != null && (this._locale = t), this);
}
var Jv = er(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ey() {
  return this._locale;
}
var so = 1e3, il = 60 * so, lo = 60 * il, ty = (365 * 400 + 97) * 24 * lo;
function ol(e, t) {
  return (e % t + t) % t;
}
function ay(e, t, a) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, a) - ty : new Date(e, t, a).valueOf();
}
function ry(e, t, a) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - ty : Date.UTC(e, t, a);
}
function LM(e) {
  var t, a;
  if (e = tr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? ry : ay, e) {
    case "year":
      t = a(this.year(), 0, 1);
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = a(this.year(), this.month(), 1);
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ol(
        t + (this._isUTC ? 0 : this.utcOffset() * il),
        lo
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ol(t, il);
      break;
    case "second":
      t = this._d.valueOf(), t -= ol(t, so);
      break;
  }
  return this._d.setTime(t), be.updateOffset(this, !0), this;
}
function WM(e) {
  var t, a;
  if (e = tr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? ry : ay, e) {
    case "year":
      t = a(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = a(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += lo - ol(
        t + (this._isUTC ? 0 : this.utcOffset() * il),
        lo
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += il - ol(t, il) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += so - ol(t, so) - 1;
      break;
  }
  return this._d.setTime(t), be.updateOffset(this, !0), this;
}
function qM() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function VM() {
  return Math.floor(this.valueOf() / 1e3);
}
function HM() {
  return new Date(this.valueOf());
}
function jM() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function UM() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function BM() {
  return this.isValid() ? this.toISOString() : null;
}
function GM() {
  return _c(this);
}
function zM() {
  return Un({}, He(this));
}
function QM() {
  return He(this).overflow;
}
function KM() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Re("N", 0, 0, "eraAbbr");
Re("NN", 0, 0, "eraAbbr");
Re("NNN", 0, 0, "eraAbbr");
Re("NNNN", 0, 0, "eraName");
Re("NNNNN", 0, 0, "eraNarrow");
Re("y", ["y", 1], "yo", "eraYear");
Re("y", ["yy", 2], 0, "eraYear");
Re("y", ["yyy", 3], 0, "eraYear");
Re("y", ["yyyy", 4], 0, "eraYear");
Ce("N", Fc);
Ce("NN", Fc);
Ce("NNN", Fc);
Ce("NNNN", iD);
Ce("NNNNN", oD);
ht(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, a, r) {
    var n = a._locale.erasParse(e, r, a._strict);
    n ? He(a).era = n : He(a).invalidEra = e;
  }
);
Ce("y", pl);
Ce("yy", pl);
Ce("yyy", pl);
Ce("yyyy", pl);
Ce("yo", uD);
ht(["y", "yy", "yyy", "yyyy"], ma);
ht(["yo"], function(e, t, a, r) {
  var n;
  a._locale._eraYearOrdinalRegex && (n = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? t[ma] = a._locale.eraYearOrdinalParse(e, n) : t[ma] = parseInt(e, 10);
});
function XM(e, t) {
  var a, r, n, i = this._eras || On("en")._eras;
  for (a = 0, r = i.length; a < r; ++a) {
    switch (typeof i[a].since) {
      case "string":
        n = be(i[a].since).startOf("day"), i[a].since = n.valueOf();
        break;
    }
    switch (typeof i[a].until) {
      case "undefined":
        i[a].until = 1 / 0;
        break;
      case "string":
        n = be(i[a].until).startOf("day").valueOf(), i[a].until = n.valueOf();
        break;
    }
  }
  return i;
}
function ZM(e, t, a) {
  var r, n, i = this.eras(), o, c, f;
  for (e = e.toUpperCase(), r = 0, n = i.length; r < n; ++r)
    if (o = i[r].name.toUpperCase(), c = i[r].abbr.toUpperCase(), f = i[r].narrow.toUpperCase(), a)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (c === e)
            return i[r];
          break;
        case "NNNN":
          if (o === e)
            return i[r];
          break;
        case "NNNNN":
          if (f === e)
            return i[r];
          break;
      }
    else if ([o, c, f].indexOf(e) >= 0)
      return i[r];
}
function JM(e, t) {
  var a = e.since <= e.until ? 1 : -1;
  return t === void 0 ? be(e.since).year() : be(e.since).year() + (t - e.offset) * a;
}
function eD() {
  var e, t, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return r[e].name;
  return "";
}
function tD() {
  var e, t, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return r[e].narrow;
  return "";
}
function aD() {
  var e, t, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return r[e].abbr;
  return "";
}
function rD() {
  var e, t, a, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = n[e].since <= n[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return (this.year() - be(n[e].since).year()) * a + n[e].offset;
  return this.year();
}
function nD(e) {
  return at(this, "_erasNameRegex") || Ec.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function sD(e) {
  return at(this, "_erasAbbrRegex") || Ec.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function lD(e) {
  return at(this, "_erasNarrowRegex") || Ec.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Fc(e, t) {
  return t.erasAbbrRegex(e);
}
function iD(e, t) {
  return t.erasNameRegex(e);
}
function oD(e, t) {
  return t.erasNarrowRegex(e);
}
function uD(e, t) {
  return t._eraYearOrdinalRegex || pl;
}
function Ec() {
  var e = [], t = [], a = [], r = [], n, i, o, c, f, m = this.eras();
  for (n = 0, i = m.length; n < i; ++n)
    o = Mn(m[n].name), c = Mn(m[n].abbr), f = Mn(m[n].narrow), t.push(o), e.push(c), a.push(f), r.push(o), r.push(c), r.push(f);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  );
}
Re(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Re(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Do(e, t) {
  Re(0, [e, e.length], 0, t);
}
Do("gggg", "weekYear");
Do("ggggg", "weekYear");
Do("GGGG", "isoWeekYear");
Do("GGGGG", "isoWeekYear");
Ce("G", go);
Ce("g", go);
Ce("GG", kt, Ba);
Ce("gg", kt, Ba);
Ce("GGGG", Dc, Mc);
Ce("gggg", Dc, Mc);
Ce("GGGGG", _o, yo);
Ce("ggggg", _o, yo);
si(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, a, r) {
    t[r.substr(0, 2)] = Qe(e);
  }
);
si(["gg", "GG"], function(e, t, a, r) {
  t[r] = be.parseTwoDigitYear(e);
});
function dD(e) {
  return ny.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function cD(e) {
  return ny.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function fD() {
  return Dn(this.year(), 1, 4);
}
function hD() {
  return Dn(this.isoWeekYear(), 1, 4);
}
function mD() {
  var e = this.localeData()._week;
  return Dn(this.year(), e.dow, e.doy);
}
function vD() {
  var e = this.localeData()._week;
  return Dn(this.weekYear(), e.dow, e.doy);
}
function ny(e, t, a, r, n) {
  var i;
  return e == null ? Gl(this, r, n).year : (i = Dn(e, r, n), t > i && (t = i), yD.call(this, e, t, a, r, n));
}
function yD(e, t, a, r, n) {
  var i = Ev(e, t, a, r, n), o = Bl(i.year, 0, i.dayOfYear);
  return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
Re("Q", 0, "Qo", "quarter");
Ce("Q", Tv);
ht("Q", function(e, t) {
  t[bn] = (Qe(e) - 1) * 3;
});
function pD(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Re("D", ["DD", 2], "Do", "date");
Ce("D", kt, _l);
Ce("DD", kt, Ba);
Ce("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
ht(["D", "DD"], Jr);
ht("Do", function(e, t) {
  t[Jr] = Qe(e.match(kt)[0]);
});
var sy = gl("Date", !0);
Re("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Ce("DDD", po);
Ce("DDDD", xv);
ht(["DDD", "DDDD"], function(e, t, a) {
  a._dayOfYear = Qe(e);
});
function _D(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Re("m", ["mm", 2], 0, "minute");
Ce("m", kt, Sc);
Ce("mm", kt, Ba);
ht(["m", "mm"], hr);
var gD = gl("Minutes", !1);
Re("s", ["ss", 2], 0, "second");
Ce("s", kt, Sc);
Ce("ss", kt, Ba);
ht(["s", "ss"], kn);
var wD = gl("Seconds", !1);
Re("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Re(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Re(0, ["SSS", 3], 0, "millisecond");
Re(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Re(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Re(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Re(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Re(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Re(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Ce("S", po, Tv);
Ce("SS", po, Ba);
Ce("SSS", po, xv);
var Bn, ly;
for (Bn = "SSSS"; Bn.length <= 9; Bn += "S")
  Ce(Bn, pl);
function bD(e, t) {
  t[$s] = Qe(("0." + e) * 1e3);
}
for (Bn = "S"; Bn.length <= 9; Bn += "S")
  ht(Bn, bD);
ly = gl("Milliseconds", !1);
Re("z", 0, 0, "zoneAbbr");
Re("zz", 0, 0, "zoneName");
function kD() {
  return this._isUTC ? "UTC" : "";
}
function MD() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var _e = ri.prototype;
_e.add = vM;
_e.calendar = kM;
_e.clone = MM;
_e.diff = CM;
_e.endOf = WM;
_e.format = RM;
_e.from = IM;
_e.fromNow = FM;
_e.to = EM;
_e.toNow = NM;
_e.get = $1;
_e.invalidAt = QM;
_e.isAfter = DM;
_e.isBefore = SM;
_e.isBetween = TM;
_e.isSame = xM;
_e.isSameOrAfter = OM;
_e.isSameOrBefore = AM;
_e.isValid = GM;
_e.lang = Jv;
_e.locale = Zv;
_e.localeData = ey;
_e.max = Gk;
_e.min = Bk;
_e.parsingFlags = zM;
_e.set = R1;
_e.startOf = LM;
_e.subtract = yM;
_e.toArray = jM;
_e.toObject = UM;
_e.toDate = HM;
_e.toISOString = PM;
_e.inspect = $M;
typeof Symbol < "u" && Symbol.for != null && (_e[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
_e.toJSON = BM;
_e.toString = YM;
_e.unix = VM;
_e.valueOf = qM;
_e.creationData = KM;
_e.eraName = eD;
_e.eraNarrow = tD;
_e.eraAbbr = aD;
_e.eraYear = rD;
_e.year = Cv;
_e.isLeapYear = P1;
_e.weekYear = dD;
_e.isoWeekYear = cD;
_e.quarter = _e.quarters = pD;
_e.month = Iv;
_e.daysInMonth = H1;
_e.week = _e.weeks = X1;
_e.isoWeek = _e.isoWeeks = Z1;
_e.weeksInYear = mD;
_e.weeksInWeekYear = vD;
_e.isoWeeksInYear = fD;
_e.isoWeeksInISOWeekYear = hD;
_e.date = sy;
_e.day = _e.days = ck;
_e.weekday = fk;
_e.isoWeekday = hk;
_e.dayOfYear = _D;
_e.hour = _e.hours = wk;
_e.minute = _e.minutes = gD;
_e.second = _e.seconds = wD;
_e.millisecond = _e.milliseconds = ly;
_e.utcOffset = aM;
_e.utc = nM;
_e.local = sM;
_e.parseZone = lM;
_e.hasAlignedHourOffset = iM;
_e.isDST = oM;
_e.isLocal = dM;
_e.isUtcOffset = cM;
_e.isUtc = zv;
_e.isUTC = zv;
_e.zoneAbbr = kD;
_e.zoneName = MD;
_e.dates = er(
  "dates accessor is deprecated. Use date instead.",
  sy
);
_e.months = er(
  "months accessor is deprecated. Use month instead",
  Iv
);
_e.years = er(
  "years accessor is deprecated. Use year instead",
  Cv
);
_e.zone = er(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  rM
);
_e.isDSTShifted = er(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  uM
);
function DD(e) {
  return bt(e * 1e3);
}
function SD() {
  return bt.apply(null, arguments).parseZone();
}
function iy(e) {
  return e;
}
var rt = wc.prototype;
rt.calendar = d1;
rt.longDateFormat = m1;
rt.invalidDate = y1;
rt.ordinal = g1;
rt.preparse = iy;
rt.postformat = iy;
rt.relativeTime = b1;
rt.pastFuture = k1;
rt.set = o1;
rt.eras = XM;
rt.erasParse = ZM;
rt.erasConvertYear = JM;
rt.erasAbbrRegex = sD;
rt.erasNameRegex = nD;
rt.erasNarrowRegex = lD;
rt.months = L1;
rt.monthsShort = W1;
rt.monthsParse = V1;
rt.monthsRegex = U1;
rt.monthsShortRegex = j1;
rt.week = G1;
rt.firstDayOfYear = K1;
rt.firstDayOfWeek = Q1;
rt.weekdays = lk;
rt.weekdaysMin = ok;
rt.weekdaysShort = ik;
rt.weekdaysParse = dk;
rt.weekdaysRegex = mk;
rt.weekdaysShortRegex = vk;
rt.weekdaysMinRegex = yk;
rt.isPM = _k;
rt.meridiem = bk;
function io(e, t, a, r) {
  var n = On(), i = nn().set(r, t);
  return n[a](i, e);
}
function oy(e, t, a) {
  if (Tn(e) && (t = e, e = void 0), e = e || "", t != null)
    return io(e, t, a, "month");
  var r, n = [];
  for (r = 0; r < 12; r++)
    n[r] = io(e, r, a, "month");
  return n;
}
function Nc(e, t, a, r) {
  typeof e == "boolean" ? (Tn(t) && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, Tn(t) && (a = t, t = void 0), t = t || "");
  var n = On(), i = e ? n._week.dow : 0, o, c = [];
  if (a != null)
    return io(t, (a + i) % 7, r, "day");
  for (o = 0; o < 7; o++)
    c[o] = io(t, (o + i) % 7, r, "day");
  return c;
}
function TD(e, t) {
  return oy(e, t, "months");
}
function xD(e, t) {
  return oy(e, t, "monthsShort");
}
function OD(e, t, a) {
  return Nc(e, t, a, "weekdays");
}
function AD(e, t, a) {
  return Nc(e, t, a, "weekdaysShort");
}
function CD(e, t, a) {
  return Nc(e, t, a, "weekdaysMin");
}
Qn("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, a = Qe(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + a;
  }
});
be.lang = er(
  "moment.lang is deprecated. Use moment.locale instead.",
  Qn
);
be.langData = er(
  "moment.langData is deprecated. Use moment.localeData instead.",
  On
);
var pn = Math.abs;
function YD() {
  var e = this._data;
  return this._milliseconds = pn(this._milliseconds), this._days = pn(this._days), this._months = pn(this._months), e.milliseconds = pn(e.milliseconds), e.seconds = pn(e.seconds), e.minutes = pn(e.minutes), e.hours = pn(e.hours), e.months = pn(e.months), e.years = pn(e.years), this;
}
function uy(e, t, a, r) {
  var n = gr(t, a);
  return e._milliseconds += r * n._milliseconds, e._days += r * n._days, e._months += r * n._months, e._bubble();
}
function PD(e, t) {
  return uy(this, e, t, 1);
}
function $D(e, t) {
  return uy(this, e, t, -1);
}
function qf(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function RD() {
  var e = this._milliseconds, t = this._days, a = this._months, r = this._data, n, i, o, c, f;
  return e >= 0 && t >= 0 && a >= 0 || e <= 0 && t <= 0 && a <= 0 || (e += qf(zd(a) + t) * 864e5, t = 0, a = 0), r.milliseconds = e % 1e3, n = Za(e / 1e3), r.seconds = n % 60, i = Za(n / 60), r.minutes = i % 60, o = Za(i / 60), r.hours = o % 24, t += Za(o / 24), f = Za(dy(t)), a += f, t -= qf(zd(f)), c = Za(a / 12), a %= 12, r.days = t, r.months = a, r.years = c, this;
}
function dy(e) {
  return e * 4800 / 146097;
}
function zd(e) {
  return e * 146097 / 4800;
}
function ID(e) {
  if (!this.isValid())
    return NaN;
  var t, a, r = this._milliseconds;
  if (e = tr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, a = this._months + dy(t), e) {
      case "month":
        return a;
      case "quarter":
        return a / 3;
      case "year":
        return a / 12;
    }
  else
    switch (t = this._days + Math.round(zd(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      // Math.floor prevents floating point math errors here
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function An(e) {
  return function() {
    return this.as(e);
  };
}
var cy = An("ms"), FD = An("s"), ED = An("m"), ND = An("h"), LD = An("d"), WD = An("w"), qD = An("M"), VD = An("Q"), HD = An("y"), jD = cy;
function UD() {
  return gr(this);
}
function BD(e) {
  return e = tr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function qs(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var GD = qs("milliseconds"), zD = qs("seconds"), QD = qs("minutes"), KD = qs("hours"), XD = qs("days"), ZD = qs("months"), JD = qs("years");
function eS() {
  return Za(this.days() / 7);
}
var _n = Math.round, sl = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function tS(e, t, a, r, n) {
  return n.relativeTime(t || 1, !!a, e, r);
}
function aS(e, t, a, r) {
  var n = gr(e).abs(), i = _n(n.as("s")), o = _n(n.as("m")), c = _n(n.as("h")), f = _n(n.as("d")), m = _n(n.as("M")), v = _n(n.as("w")), p = _n(n.as("y")), g = i <= a.ss && ["s", i] || i < a.s && ["ss", i] || o <= 1 && ["m"] || o < a.m && ["mm", o] || c <= 1 && ["h"] || c < a.h && ["hh", c] || f <= 1 && ["d"] || f < a.d && ["dd", f];
  return a.w != null && (g = g || v <= 1 && ["w"] || v < a.w && ["ww", v]), g = g || m <= 1 && ["M"] || m < a.M && ["MM", m] || p <= 1 && ["y"] || ["yy", p], g[2] = t, g[3] = +e > 0, g[4] = r, tS.apply(null, g);
}
function rS(e) {
  return e === void 0 ? _n : typeof e == "function" ? (_n = e, !0) : !1;
}
function nS(e, t) {
  return sl[e] === void 0 ? !1 : t === void 0 ? sl[e] : (sl[e] = t, e === "s" && (sl.ss = t - 1), !0);
}
function sS(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var a = !1, r = sl, n, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (a = e), typeof t == "object" && (r = Object.assign({}, sl, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), n = this.localeData(), i = aS(this, !a, r, n), a && (i = n.pastFuture(+this, i)), n.postformat(i);
}
var tu = Math.abs;
function tl(e) {
  return (e > 0) - (e < 0) || +e;
}
function So() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = tu(this._milliseconds) / 1e3, t = tu(this._days), a = tu(this._months), r, n, i, o, c = this.asSeconds(), f, m, v, p;
  return c ? (r = Za(e / 60), n = Za(r / 60), e %= 60, r %= 60, i = Za(a / 12), a %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = c < 0 ? "-" : "", m = tl(this._months) !== tl(c) ? "-" : "", v = tl(this._days) !== tl(c) ? "-" : "", p = tl(this._milliseconds) !== tl(c) ? "-" : "", f + "P" + (i ? m + i + "Y" : "") + (a ? m + a + "M" : "") + (t ? v + t + "D" : "") + (n || r || e ? "T" : "") + (n ? p + n + "H" : "") + (r ? p + r + "M" : "") + (e ? p + o + "S" : "")) : "P0D";
}
var Je = Mo.prototype;
Je.isValid = Zk;
Je.abs = YD;
Je.add = PD;
Je.subtract = $D;
Je.as = ID;
Je.asMilliseconds = cy;
Je.asSeconds = FD;
Je.asMinutes = ED;
Je.asHours = ND;
Je.asDays = LD;
Je.asWeeks = WD;
Je.asMonths = qD;
Je.asQuarters = VD;
Je.asYears = HD;
Je.valueOf = jD;
Je._bubble = RD;
Je.clone = UD;
Je.get = BD;
Je.milliseconds = GD;
Je.seconds = zD;
Je.minutes = QD;
Je.hours = KD;
Je.days = XD;
Je.weeks = eS;
Je.months = ZD;
Je.years = JD;
Je.humanize = sS;
Je.toISOString = So;
Je.toString = So;
Je.toJSON = So;
Je.locale = Zv;
Je.localeData = ey;
Je.toIsoString = er(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  So
);
Je.lang = Jv;
Re("X", 0, 0, "unix");
Re("x", 0, 0, "valueOf");
Ce("x", go);
Ce("X", T1);
ht("X", function(e, t, a) {
  a._d = new Date(parseFloat(e) * 1e3);
});
ht("x", function(e, t, a) {
  a._d = new Date(Qe(e));
});
//! moment.js
be.version = "2.30.1";
l1(bt);
be.fn = _e;
be.min = zk;
be.max = Qk;
be.now = Kk;
be.utc = nn;
be.unix = DD;
be.months = TD;
be.isDate = ai;
be.locale = Qn;
be.invalid = vo;
be.duration = gr;
be.isMoment = pr;
be.weekdays = OD;
be.parseZone = SD;
be.localeData = On;
be.isDuration = Ki;
be.monthsShort = xD;
be.weekdaysMin = CD;
be.defineLocale = Cc;
be.updateLocale = Sk;
be.locales = Tk;
be.weekdaysShort = AD;
be.normalizeUnits = tr;
be.relativeTimeRounding = rS;
be.relativeTimeThreshold = nS;
be.calendarFormat = bM;
be.prototype = _e;
be.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
var Gi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fy(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Qd = { exports: {} }, Zi = { exports: {} }, iS = Zi.exports, Vf;
function oS() {
  return Vf || (Vf = 1, function(e, t) {
    (function(a, r) {
      e.exports = r();
    })(iS, function() {
      var a;
      function r() {
        return a.apply(null, arguments);
      }
      function n(s) {
        a = s;
      }
      function i(s) {
        return s instanceof Array || Object.prototype.toString.call(s) === "[object Array]";
      }
      function o(s) {
        return s != null && Object.prototype.toString.call(s) === "[object Object]";
      }
      function c(s, l) {
        return Object.prototype.hasOwnProperty.call(s, l);
      }
      function f(s) {
        if (Object.getOwnPropertyNames)
          return Object.getOwnPropertyNames(s).length === 0;
        var l;
        for (l in s)
          if (c(s, l))
            return !1;
        return !0;
      }
      function m(s) {
        return s === void 0;
      }
      function v(s) {
        return typeof s == "number" || Object.prototype.toString.call(s) === "[object Number]";
      }
      function p(s) {
        return s instanceof Date || Object.prototype.toString.call(s) === "[object Date]";
      }
      function g(s, l) {
        var u = [], d, h = s.length;
        for (d = 0; d < h; ++d)
          u.push(l(s[d], d));
        return u;
      }
      function k(s, l) {
        for (var u in l)
          c(l, u) && (s[u] = l[u]);
        return c(l, "toString") && (s.toString = l.toString), c(l, "valueOf") && (s.valueOf = l.valueOf), s;
      }
      function w(s, l, u, d) {
        return Ml(s, l, u, d, !0).utc();
      }
      function b() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        };
      }
      function D(s) {
        return s._pf == null && (s._pf = b()), s._pf;
      }
      var T;
      Array.prototype.some ? T = Array.prototype.some : T = function(s) {
        var l = Object(this), u = l.length >>> 0, d;
        for (d = 0; d < u; d++)
          if (d in l && s.call(this, l[d], d, l))
            return !0;
        return !1;
      };
      function C(s) {
        var l = null, u = !1, d = s._d && !isNaN(s._d.getTime());
        if (d && (l = D(s), u = T.call(l.parsedDateParts, function(h) {
          return h != null;
        }), d = l.overflow < 0 && !l.empty && !l.invalidEra && !l.invalidMonth && !l.invalidWeekday && !l.weekdayMismatch && !l.nullInput && !l.invalidFormat && !l.userInvalidated && (!l.meridiem || l.meridiem && u), s._strict && (d = d && l.charsLeftOver === 0 && l.unusedTokens.length === 0 && l.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(s))
          s._isValid = d;
        else
          return d;
        return s._isValid;
      }
      function $(s) {
        var l = w(NaN);
        return s != null ? k(D(l), s) : D(l).userInvalidated = !0, l;
      }
      var P = r.momentProperties = [], G = !1;
      function R(s, l) {
        var u, d, h, O = P.length;
        if (m(l._isAMomentObject) || (s._isAMomentObject = l._isAMomentObject), m(l._i) || (s._i = l._i), m(l._f) || (s._f = l._f), m(l._l) || (s._l = l._l), m(l._strict) || (s._strict = l._strict), m(l._tzm) || (s._tzm = l._tzm), m(l._isUTC) || (s._isUTC = l._isUTC), m(l._offset) || (s._offset = l._offset), m(l._pf) || (s._pf = D(l)), m(l._locale) || (s._locale = l._locale), O > 0)
          for (u = 0; u < O; u++)
            d = P[u], h = l[d], m(h) || (s[d] = h);
        return s;
      }
      function E(s) {
        R(this, s), this._d = new Date(s._d != null ? s._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), G === !1 && (G = !0, r.updateOffset(this), G = !1);
      }
      function U(s) {
        return s instanceof E || s != null && s._isAMomentObject != null;
      }
      function H(s) {
        r.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + s);
      }
      function q(s, l) {
        var u = !0;
        return k(function() {
          if (r.deprecationHandler != null && r.deprecationHandler(null, s), u) {
            var d = [], h, O, Z, Oe = arguments.length;
            for (O = 0; O < Oe; O++) {
              if (h = "", typeof arguments[O] == "object") {
                h += `
[` + O + "] ";
                for (Z in arguments[0])
                  c(arguments[0], Z) && (h += Z + ": " + arguments[0][Z] + ", ");
                h = h.slice(0, -2);
              } else
                h = arguments[O];
              d.push(h);
            }
            H(
              s + `
Arguments: ` + Array.prototype.slice.call(d).join("") + `
` + new Error().stack
            ), u = !1;
          }
          return l.apply(this, arguments);
        }, l);
      }
      var J = {};
      function ge(s, l) {
        r.deprecationHandler != null && r.deprecationHandler(s, l), J[s] || (H(l), J[s] = !0);
      }
      r.suppressDeprecationWarnings = !1, r.deprecationHandler = null;
      function we(s) {
        return typeof Function < "u" && s instanceof Function || Object.prototype.toString.call(s) === "[object Function]";
      }
      function I(s) {
        var l, u;
        for (u in s)
          c(s, u) && (l = s[u], we(l) ? this[u] = l : this["_" + u] = l);
        this._config = s, this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
        );
      }
      function V(s, l) {
        var u = k({}, s), d;
        for (d in l)
          c(l, d) && (o(s[d]) && o(l[d]) ? (u[d] = {}, k(u[d], s[d]), k(u[d], l[d])) : l[d] != null ? u[d] = l[d] : delete u[d]);
        for (d in s)
          c(s, d) && !c(l, d) && o(s[d]) && (u[d] = k({}, u[d]));
        return u;
      }
      function N(s) {
        s != null && this.set(s);
      }
      var te;
      Object.keys ? te = Object.keys : te = function(s) {
        var l, u = [];
        for (l in s)
          c(s, l) && u.push(l);
        return u;
      };
      var me = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function K(s, l, u) {
        var d = this._calendar[s] || this._calendar.sameElse;
        return we(d) ? d.call(l, u) : d;
      }
      function Y(s, l, u) {
        var d = "" + Math.abs(s), h = l - d.length, O = s >= 0;
        return (O ? u ? "+" : "" : "-") + Math.pow(10, Math.max(0, h)).toString().substr(1) + d;
      }
      var de = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, j = {}, _ = {};
      function S(s, l, u, d) {
        var h = d;
        typeof d == "string" && (h = function() {
          return this[d]();
        }), s && (_[s] = h), l && (_[l[0]] = function() {
          return Y(h.apply(this, arguments), l[1], l[2]);
        }), u && (_[u] = function() {
          return this.localeData().ordinal(
            h.apply(this, arguments),
            s
          );
        });
      }
      function ne(s) {
        return s.match(/\[[\s\S]/) ? s.replace(/^\[|\]$/g, "") : s.replace(/\\/g, "");
      }
      function x(s) {
        var l = s.match(de), u, d;
        for (u = 0, d = l.length; u < d; u++)
          _[l[u]] ? l[u] = _[l[u]] : l[u] = ne(l[u]);
        return function(h) {
          var O = "", Z;
          for (Z = 0; Z < d; Z++)
            O += we(l[Z]) ? l[Z].call(h, s) : l[Z];
          return O;
        };
      }
      function ve(s, l) {
        return s.isValid() ? (l = A(l, s.localeData()), j[l] = j[l] || x(l), j[l](s)) : s.localeData().invalidDate();
      }
      function A(s, l) {
        var u = 5;
        function d(h) {
          return l.longDateFormat(h) || h;
        }
        for (Q.lastIndex = 0; u >= 0 && Q.test(s); )
          s = s.replace(
            Q,
            d
          ), Q.lastIndex = 0, u -= 1;
        return s;
      }
      var st = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function B(s) {
        var l = this._longDateFormat[s], u = this._longDateFormat[s.toUpperCase()];
        return l || !u ? l : (this._longDateFormat[s] = u.match(de).map(function(d) {
          return d === "MMMM" || d === "MM" || d === "DD" || d === "dddd" ? d.slice(1) : d;
        }).join(""), this._longDateFormat[s]);
      }
      var le = "Invalid date";
      function re() {
        return this._invalidDate;
      }
      var ke = "%d", M = /\d{1,2}/;
      function ae(s) {
        return this._ordinal.replace("%d", s);
      }
      var $e = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function he(s, l, u, d) {
        var h = this._relativeTime[u];
        return we(h) ? h(s, l, u, d) : h.replace(/%d/i, s);
      }
      function qe(s, l) {
        var u = this._relativeTime[s > 0 ? "future" : "past"];
        return we(u) ? u(l) : u.replace(/%s/i, l);
      }
      var Fe = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
      };
      function L(s) {
        return typeof s == "string" ? Fe[s] || Fe[s.toLowerCase()] : void 0;
      }
      function ie(s) {
        var l = {}, u, d;
        for (d in s)
          c(s, d) && (u = L(d), u && (l[u] = s[d]));
        return l;
      }
      var Ye = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
      };
      function lt(s) {
        var l = [], u;
        for (u in s)
          c(s, u) && l.push({ unit: u, priority: Ye[u] });
        return l.sort(function(d, h) {
          return d.priority - h.priority;
        }), l;
      }
      var Ct = /\d/, De = /\d\d/, Yt = /\d{3}/, Xe = /\d{4}/, ea = /[+-]?\d{6}/, Ue = /\d\d?/, ia = /\d\d\d\d?/, ya = /\d\d\d\d\d\d?/, ta = /\d{1,3}/, oa = /\d{1,4}/, aa = /[+-]?\d{1,6}/, Ht = /\d+/, W = /[+-]?\d+/, ce = /Z|[+-]\d\d:?\d\d/gi, Pe = /Z|[+-]\d\d(?::?\d\d)?/gi, X = /[+-]?\d+(\.\d{1,3})?/, ye = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Te = /^[1-9]\d?/, St = /^([1-9]\d|\d)/, pt;
      pt = {};
      function Me(s, l, u) {
        pt[s] = we(l) ? l : function(d, h) {
          return d && u ? u : l;
        };
      }
      function ua(s, l) {
        return c(pt, s) ? pt[s](l._strict, l._locale) : new RegExp(jt(s));
      }
      function jt(s) {
        return Pt(
          s.replace("\\", "").replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(l, u, d, h, O) {
              return u || d || h || O;
            }
          )
        );
      }
      function Pt(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function Tt(s) {
        return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
      }
      function Le(s) {
        var l = +s, u = 0;
        return l !== 0 && isFinite(l) && (u = Tt(l)), u;
      }
      var Ga = {};
      function Ge(s, l) {
        var u, d = l, h;
        for (typeof s == "string" && (s = [s]), v(l) && (d = function(O, Z) {
          Z[l] = Le(O);
        }), h = s.length, u = 0; u < h; u++)
          Ga[s[u]] = d;
      }
      function Da(s, l) {
        Ge(s, function(u, d, h, O) {
          h._w = h._w || {}, l(u, h._w, h, O);
        });
      }
      function wr(s, l, u) {
        l != null && c(Ga, s) && Ga[s](l, u._a, u, s);
      }
      function Fa(s) {
        return s % 4 === 0 && s % 100 !== 0 || s % 400 === 0;
      }
      var _t = 0, zt = 1, Ut = 2, ct = 3, Vt = 4, xt = 5, ra = 6, Ea = 7, Na = 8;
      S("Y", 0, 0, function() {
        var s = this.year();
        return s <= 9999 ? Y(s, 4) : "+" + s;
      }), S(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      }), S(0, ["YYYY", 4], 0, "year"), S(0, ["YYYYY", 5], 0, "year"), S(0, ["YYYYYY", 6, !0], 0, "year"), Me("Y", W), Me("YY", Ue, De), Me("YYYY", oa, Xe), Me("YYYYY", aa, ea), Me("YYYYYY", aa, ea), Ge(["YYYYY", "YYYYYY"], _t), Ge("YYYY", function(s, l) {
        l[_t] = s.length === 2 ? r.parseTwoDigitYear(s) : Le(s);
      }), Ge("YY", function(s, l) {
        l[_t] = r.parseTwoDigitYear(s);
      }), Ge("Y", function(s, l) {
        l[_t] = parseInt(s, 10);
      });
      function Ot(s) {
        return Fa(s) ? 366 : 365;
      }
      r.parseTwoDigitYear = function(s) {
        return Le(s) + (Le(s) > 68 ? 1900 : 2e3);
      };
      var Sa = Qt("FullYear", !0);
      function La() {
        return Fa(this.year());
      }
      function Qt(s, l) {
        return function(u) {
          return u != null ? (Ta(this, s, u), r.updateOffset(this, l), this) : na(this, s);
        };
      }
      function na(s, l) {
        if (!s.isValid())
          return NaN;
        var u = s._d, d = s._isUTC;
        switch (l) {
          case "Milliseconds":
            return d ? u.getUTCMilliseconds() : u.getMilliseconds();
          case "Seconds":
            return d ? u.getUTCSeconds() : u.getSeconds();
          case "Minutes":
            return d ? u.getUTCMinutes() : u.getMinutes();
          case "Hours":
            return d ? u.getUTCHours() : u.getHours();
          case "Date":
            return d ? u.getUTCDate() : u.getDate();
          case "Day":
            return d ? u.getUTCDay() : u.getDay();
          case "Month":
            return d ? u.getUTCMonth() : u.getMonth();
          case "FullYear":
            return d ? u.getUTCFullYear() : u.getFullYear();
          default:
            return NaN;
        }
      }
      function Ta(s, l, u) {
        var d, h, O, Z, Oe;
        if (!(!s.isValid() || isNaN(u))) {
          switch (d = s._d, h = s._isUTC, l) {
            case "Milliseconds":
              return void (h ? d.setUTCMilliseconds(u) : d.setMilliseconds(u));
            case "Seconds":
              return void (h ? d.setUTCSeconds(u) : d.setSeconds(u));
            case "Minutes":
              return void (h ? d.setUTCMinutes(u) : d.setMinutes(u));
            case "Hours":
              return void (h ? d.setUTCHours(u) : d.setHours(u));
            case "Date":
              return void (h ? d.setUTCDate(u) : d.setDate(u));
            // case 'Day': // Not real
            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
            // case 'Month': // Not used because we need to pass two variables
            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
            case "FullYear":
              break;
            // See below ...
            default:
              return;
          }
          O = u, Z = s.month(), Oe = s.date(), Oe = Oe === 29 && Z === 1 && !Fa(O) ? 28 : Oe, h ? d.setUTCFullYear(O, Z, Oe) : d.setFullYear(O, Z, Oe);
        }
      }
      function Wa(s) {
        return s = L(s), we(this[s]) ? this[s]() : this;
      }
      function qa(s, l) {
        if (typeof s == "object") {
          s = ie(s);
          var u = lt(s), d, h = u.length;
          for (d = 0; d < h; d++)
            this[u[d].unit](s[u[d].unit]);
        } else if (s = L(s), we(this[s]))
          return this[s](l);
        return this;
      }
      function Va(s, l) {
        return (s % l + l) % l;
      }
      var et;
      Array.prototype.indexOf ? et = Array.prototype.indexOf : et = function(s) {
        var l;
        for (l = 0; l < this.length; ++l)
          if (this[l] === s)
            return l;
        return -1;
      };
      function pa(s, l) {
        if (isNaN(s) || isNaN(l))
          return NaN;
        var u = Va(l, 12);
        return s += (l - u) / 12, u === 1 ? Fa(s) ? 29 : 28 : 31 - u % 7 % 2;
      }
      S("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      }), S("MMM", 0, 0, function(s) {
        return this.localeData().monthsShort(this, s);
      }), S("MMMM", 0, 0, function(s) {
        return this.localeData().months(this, s);
      }), Me("M", Ue, Te), Me("MM", Ue, De), Me("MMM", function(s, l) {
        return l.monthsShortRegex(s);
      }), Me("MMMM", function(s, l) {
        return l.monthsRegex(s);
      }), Ge(["M", "MM"], function(s, l) {
        l[zt] = Le(s) - 1;
      }), Ge(["MMM", "MMMM"], function(s, l, u, d) {
        var h = u._locale.monthsParse(s, d, u._strict);
        h != null ? l[zt] = h : D(u).invalidMonth = s;
      });
      var Ha = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ), xa = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), za = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Oa = ye, br = ye;
      function kr(s, l) {
        return s ? i(this._months) ? this._months[s.month()] : this._months[(this._months.isFormat || za).test(l) ? "format" : "standalone"][s.month()] : i(this._months) ? this._months : this._months.standalone;
      }
      function Mr(s, l) {
        return s ? i(this._monthsShort) ? this._monthsShort[s.month()] : this._monthsShort[za.test(l) ? "format" : "standalone"][s.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
      }
      function Dr(s, l, u) {
        var d, h, O, Z = s.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d)
            O = w([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(
              O,
              ""
            ).toLocaleLowerCase(), this._longMonthsParse[d] = this.months(O, "").toLocaleLowerCase();
        return u ? l === "MMM" ? (h = et.call(this._shortMonthsParse, Z), h !== -1 ? h : null) : (h = et.call(this._longMonthsParse, Z), h !== -1 ? h : null) : l === "MMM" ? (h = et.call(this._shortMonthsParse, Z), h !== -1 ? h : (h = et.call(this._longMonthsParse, Z), h !== -1 ? h : null)) : (h = et.call(this._longMonthsParse, Z), h !== -1 ? h : (h = et.call(this._shortMonthsParse, Z), h !== -1 ? h : null));
      }
      function Sr(s, l, u) {
        var d, h, O;
        if (this._monthsParseExact)
          return Dr.call(this, s, l, u);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
          if (h = w([2e3, d]), u && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp(
            "^" + this.months(h, "").replace(".", "") + "$",
            "i"
          ), this._shortMonthsParse[d] = new RegExp(
            "^" + this.monthsShort(h, "").replace(".", "") + "$",
            "i"
          )), !u && !this._monthsParse[d] && (O = "^" + this.months(h, "") + "|^" + this.monthsShort(h, ""), this._monthsParse[d] = new RegExp(O.replace(".", ""), "i")), u && l === "MMMM" && this._longMonthsParse[d].test(s))
            return d;
          if (u && l === "MMM" && this._shortMonthsParse[d].test(s))
            return d;
          if (!u && this._monthsParse[d].test(s))
            return d;
        }
      }
      function ar(s, l) {
        if (!s.isValid())
          return s;
        if (typeof l == "string") {
          if (/^\d+$/.test(l))
            l = Le(l);
          else if (l = s.localeData().monthsParse(l), !v(l))
            return s;
        }
        var u = l, d = s.date();
        return d = d < 29 ? d : Math.min(d, pa(s.year(), u)), s._isUTC ? s._d.setUTCMonth(u, d) : s._d.setMonth(u, d), s;
      }
      function rr(s) {
        return s != null ? (ar(this, s), r.updateOffset(this, !0), this) : na(this, "Month");
      }
      function Tr() {
        return pa(this.year(), this.month());
      }
      function xr(s) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || nr.call(this), s ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Oa), this._monthsShortStrictRegex && s ? this._monthsShortStrictRegex : this._monthsShortRegex);
      }
      function Or(s) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || nr.call(this), s ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = br), this._monthsStrictRegex && s ? this._monthsStrictRegex : this._monthsRegex);
      }
      function nr() {
        function s(Ne, Ke) {
          return Ke.length - Ne.length;
        }
        var l = [], u = [], d = [], h, O, Z, Oe;
        for (h = 0; h < 12; h++)
          O = w([2e3, h]), Z = Pt(this.monthsShort(O, "")), Oe = Pt(this.months(O, "")), l.push(Z), u.push(Oe), d.push(Oe), d.push(Z);
        l.sort(s), u.sort(s), d.sort(s), this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
          "^(" + u.join("|") + ")",
          "i"
        ), this._monthsShortStrictRegex = new RegExp(
          "^(" + l.join("|") + ")",
          "i"
        );
      }
      function Ar(s, l, u, d, h, O, Z) {
        var Oe;
        return s < 100 && s >= 0 ? (Oe = new Date(s + 400, l, u, d, h, O, Z), isFinite(Oe.getFullYear()) && Oe.setFullYear(s)) : Oe = new Date(s, l, u, d, h, O, Z), Oe;
      }
      function Aa(s) {
        var l, u;
        return s < 100 && s >= 0 ? (u = Array.prototype.slice.call(arguments), u[0] = s + 400, l = new Date(Date.UTC.apply(null, u)), isFinite(l.getUTCFullYear()) && l.setUTCFullYear(s)) : l = new Date(Date.UTC.apply(null, arguments)), l;
      }
      function ja(s, l, u) {
        var d = 7 + l - u, h = (7 + Aa(s, 0, d).getUTCDay() - l) % 7;
        return -h + d - 1;
      }
      function sr(s, l, u, d, h) {
        var O = (7 + u - d) % 7, Z = ja(s, d, h), Oe = 1 + 7 * (l - 1) + O + Z, Ne, Ke;
        return Oe <= 0 ? (Ne = s - 1, Ke = Ot(Ne) + Oe) : Oe > Ot(s) ? (Ne = s + 1, Ke = Oe - Ot(s)) : (Ne = s, Ke = Oe), {
          year: Ne,
          dayOfYear: Ke
        };
      }
      function Ca(s, l, u) {
        var d = ja(s.year(), l, u), h = Math.floor((s.dayOfYear() - d - 1) / 7) + 1, O, Z;
        return h < 1 ? (Z = s.year() - 1, O = h + Kt(Z, l, u)) : h > Kt(s.year(), l, u) ? (O = h - Kt(s.year(), l, u), Z = s.year() + 1) : (Z = s.year(), O = h), {
          week: O,
          year: Z
        };
      }
      function Kt(s, l, u) {
        var d = ja(s, l, u), h = ja(s + 1, l, u);
        return (Ot(s) - d + h) / 7;
      }
      S("w", ["ww", 2], "wo", "week"), S("W", ["WW", 2], "Wo", "isoWeek"), Me("w", Ue, Te), Me("ww", Ue, De), Me("W", Ue, Te), Me("WW", Ue, De), Da(
        ["w", "ww", "W", "WW"],
        function(s, l, u, d) {
          l[d.substr(0, 1)] = Le(s);
        }
      );
      function Cr(s) {
        return Ca(s, this._week.dow, this._week.doy).week;
      }
      var Yr = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6
        // The week that contains Jan 6th is the first week of the year.
      };
      function Pr() {
        return this._week.dow;
      }
      function $r() {
        return this._week.doy;
      }
      function Rr(s) {
        var l = this.localeData().week(this);
        return s == null ? l : this.add((s - l) * 7, "d");
      }
      function Ir(s) {
        var l = Ca(this, 1, 4).week;
        return s == null ? l : this.add((s - l) * 7, "d");
      }
      S("d", 0, "do", "day"), S("dd", 0, 0, function(s) {
        return this.localeData().weekdaysMin(this, s);
      }), S("ddd", 0, 0, function(s) {
        return this.localeData().weekdaysShort(this, s);
      }), S("dddd", 0, 0, function(s) {
        return this.localeData().weekdays(this, s);
      }), S("e", 0, 0, "weekday"), S("E", 0, 0, "isoWeekday"), Me("d", Ue), Me("e", Ue), Me("E", Ue), Me("dd", function(s, l) {
        return l.weekdaysMinRegex(s);
      }), Me("ddd", function(s, l) {
        return l.weekdaysShortRegex(s);
      }), Me("dddd", function(s, l) {
        return l.weekdaysRegex(s);
      }), Da(["dd", "ddd", "dddd"], function(s, l, u, d) {
        var h = u._locale.weekdaysParse(s, d, u._strict);
        h != null ? l.d = h : D(u).invalidWeekday = s;
      }), Da(["d", "e", "E"], function(s, l, u, d) {
        l[d] = Le(s);
      });
      function Fr(s, l) {
        return typeof s != "string" ? s : isNaN(s) ? (s = l.weekdaysParse(s), typeof s == "number" ? s : null) : parseInt(s, 10);
      }
      function Er(s, l) {
        return typeof s == "string" ? l.weekdaysParse(s) % 7 || 7 : isNaN(s) ? null : s;
      }
      function Qa(s, l) {
        return s.slice(l, 7).concat(s.slice(0, l));
      }
      var Nr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), lr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Lr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Wr = ye, qr = ye, Vr = ye;
      function Hr(s, l) {
        var u = i(this._weekdays) ? this._weekdays : this._weekdays[s && s !== !0 && this._weekdays.isFormat.test(l) ? "format" : "standalone"];
        return s === !0 ? Qa(u, this._week.dow) : s ? u[s.day()] : u;
      }
      function jr(s) {
        return s === !0 ? Qa(this._weekdaysShort, this._week.dow) : s ? this._weekdaysShort[s.day()] : this._weekdaysShort;
      }
      function Ur(s) {
        return s === !0 ? Qa(this._weekdaysMin, this._week.dow) : s ? this._weekdaysMin[s.day()] : this._weekdaysMin;
      }
      function Br(s, l, u) {
        var d, h, O, Z = s.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d)
            O = w([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(
              O,
              ""
            ).toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(
              O,
              ""
            ).toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(O, "").toLocaleLowerCase();
        return u ? l === "dddd" ? (h = et.call(this._weekdaysParse, Z), h !== -1 ? h : null) : l === "ddd" ? (h = et.call(this._shortWeekdaysParse, Z), h !== -1 ? h : null) : (h = et.call(this._minWeekdaysParse, Z), h !== -1 ? h : null) : l === "dddd" ? (h = et.call(this._weekdaysParse, Z), h !== -1 || (h = et.call(this._shortWeekdaysParse, Z), h !== -1) ? h : (h = et.call(this._minWeekdaysParse, Z), h !== -1 ? h : null)) : l === "ddd" ? (h = et.call(this._shortWeekdaysParse, Z), h !== -1 || (h = et.call(this._weekdaysParse, Z), h !== -1) ? h : (h = et.call(this._minWeekdaysParse, Z), h !== -1 ? h : null)) : (h = et.call(this._minWeekdaysParse, Z), h !== -1 || (h = et.call(this._weekdaysParse, Z), h !== -1) ? h : (h = et.call(this._shortWeekdaysParse, Z), h !== -1 ? h : null));
      }
      function Gr(s, l, u) {
        var d, h, O;
        if (this._weekdaysParseExact)
          return Br.call(this, s, l, u);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
          if (h = w([2e3, 1]).day(d), u && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp(
            "^" + this.weekdays(h, "").replace(".", "\\.?") + "$",
            "i"
          ), this._shortWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysShort(h, "").replace(".", "\\.?") + "$",
            "i"
          ), this._minWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysMin(h, "").replace(".", "\\.?") + "$",
            "i"
          )), this._weekdaysParse[d] || (O = "^" + this.weekdays(h, "") + "|^" + this.weekdaysShort(h, "") + "|^" + this.weekdaysMin(h, ""), this._weekdaysParse[d] = new RegExp(O.replace(".", ""), "i")), u && l === "dddd" && this._fullWeekdaysParse[d].test(s))
            return d;
          if (u && l === "ddd" && this._shortWeekdaysParse[d].test(s))
            return d;
          if (u && l === "dd" && this._minWeekdaysParse[d].test(s))
            return d;
          if (!u && this._weekdaysParse[d].test(s))
            return d;
        }
      }
      function Yn(s) {
        if (!this.isValid())
          return s != null ? this : NaN;
        var l = na(this, "Day");
        return s != null ? (s = Fr(s, this.localeData()), this.add(s - l, "d")) : l;
      }
      function ts(s) {
        if (!this.isValid())
          return s != null ? this : NaN;
        var l = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return s == null ? l : this.add(s - l, "d");
      }
      function as(s) {
        if (!this.isValid())
          return s != null ? this : NaN;
        if (s != null) {
          var l = Er(s, this.localeData());
          return this.day(this.day() % 7 ? l : l - 7);
        } else
          return this.day() || 7;
      }
      function rs(s) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || ln.call(this), s ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Wr), this._weekdaysStrictRegex && s ? this._weekdaysStrictRegex : this._weekdaysRegex);
      }
      function ns(s) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || ln.call(this), s ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qr), this._weekdaysShortStrictRegex && s ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
      }
      function ss(s) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || ln.call(this), s ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Vr), this._weekdaysMinStrictRegex && s ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
      }
      function ln() {
        function s(ga, yn) {
          return yn.length - ga.length;
        }
        var l = [], u = [], d = [], h = [], O, Z, Oe, Ne, Ke;
        for (O = 0; O < 7; O++)
          Z = w([2e3, 1]).day(O), Oe = Pt(this.weekdaysMin(Z, "")), Ne = Pt(this.weekdaysShort(Z, "")), Ke = Pt(this.weekdays(Z, "")), l.push(Oe), u.push(Ne), d.push(Ke), h.push(Oe), h.push(Ne), h.push(Ke);
        l.sort(s), u.sort(s), d.sort(s), h.sort(s), this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
          "^(" + d.join("|") + ")",
          "i"
        ), this._weekdaysShortStrictRegex = new RegExp(
          "^(" + u.join("|") + ")",
          "i"
        ), this._weekdaysMinStrictRegex = new RegExp(
          "^(" + l.join("|") + ")",
          "i"
        );
      }
      function on() {
        return this.hours() % 12 || 12;
      }
      function ls() {
        return this.hours() || 24;
      }
      S("H", ["HH", 2], 0, "hour"), S("h", ["hh", 2], 0, on), S("k", ["kk", 2], 0, ls), S("hmm", 0, 0, function() {
        return "" + on.apply(this) + Y(this.minutes(), 2);
      }), S("hmmss", 0, 0, function() {
        return "" + on.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2);
      }), S("Hmm", 0, 0, function() {
        return "" + this.hours() + Y(this.minutes(), 2);
      }), S("Hmmss", 0, 0, function() {
        return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2);
      });
      function Pn(s, l) {
        S(s, 0, 0, function() {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            l
          );
        });
      }
      Pn("a", !0), Pn("A", !1);
      function $n(s, l) {
        return l._meridiemParse;
      }
      Me("a", $n), Me("A", $n), Me("H", Ue, St), Me("h", Ue, Te), Me("k", Ue, Te), Me("HH", Ue, De), Me("hh", Ue, De), Me("kk", Ue, De), Me("hmm", ia), Me("hmmss", ya), Me("Hmm", ia), Me("Hmmss", ya), Ge(["H", "HH"], ct), Ge(["k", "kk"], function(s, l, u) {
        var d = Le(s);
        l[ct] = d === 24 ? 0 : d;
      }), Ge(["a", "A"], function(s, l, u) {
        u._isPm = u._locale.isPM(s), u._meridiem = s;
      }), Ge(["h", "hh"], function(s, l, u) {
        l[ct] = Le(s), D(u).bigHour = !0;
      }), Ge("hmm", function(s, l, u) {
        var d = s.length - 2;
        l[ct] = Le(s.substr(0, d)), l[Vt] = Le(s.substr(d)), D(u).bigHour = !0;
      }), Ge("hmmss", function(s, l, u) {
        var d = s.length - 4, h = s.length - 2;
        l[ct] = Le(s.substr(0, d)), l[Vt] = Le(s.substr(d, 2)), l[xt] = Le(s.substr(h)), D(u).bigHour = !0;
      }), Ge("Hmm", function(s, l, u) {
        var d = s.length - 2;
        l[ct] = Le(s.substr(0, d)), l[Vt] = Le(s.substr(d));
      }), Ge("Hmmss", function(s, l, u) {
        var d = s.length - 4, h = s.length - 2;
        l[ct] = Le(s.substr(0, d)), l[Vt] = Le(s.substr(d, 2)), l[xt] = Le(s.substr(h));
      });
      function is(s) {
        return (s + "").toLowerCase().charAt(0) === "p";
      }
      var os = /[ap]\.?m?\.?/i, us = Qt("Hours", !0);
      function ds(s, l, u) {
        return s > 11 ? u ? "pm" : "PM" : u ? "am" : "AM";
      }
      var Rn = {
        calendar: me,
        longDateFormat: st,
        invalidDate: le,
        ordinal: ke,
        dayOfMonthOrdinalParse: M,
        relativeTime: $e,
        months: Ha,
        monthsShort: xa,
        week: Yr,
        weekdays: Nr,
        weekdaysMin: Lr,
        weekdaysShort: lr,
        meridiemParse: os
      }, it = {}, ir = {}, or;
      function cs(s, l) {
        var u, d = Math.min(s.length, l.length);
        for (u = 0; u < d; u += 1)
          if (s[u] !== l[u])
            return u;
        return d;
      }
      function In(s) {
        return s && s.toLowerCase().replace("_", "-");
      }
      function fs(s) {
        for (var l = 0, u, d, h, O; l < s.length; ) {
          for (O = In(s[l]).split("-"), u = O.length, d = In(s[l + 1]), d = d ? d.split("-") : null; u > 0; ) {
            if (h = zr(O.slice(0, u).join("-")), h)
              return h;
            if (d && d.length >= u && cs(O, d) >= u - 1)
              break;
            u--;
          }
          l++;
        }
        return or;
      }
      function hs(s) {
        return !!(s && s.match("^[^/\\\\]*$"));
      }
      function zr(s) {
        var l = null, u;
        if (it[s] === void 0 && e && e.exports && hs(s))
          try {
            l = or._abbr, u = fy, u("./locale/" + s), Ya(l);
          } catch {
            it[s] = null;
          }
        return it[s];
      }
      function Ya(s, l) {
        var u;
        return s && (m(l) ? u = _a(s) : u = un(s, l), u ? or = u : typeof console < "u" && console.warn && console.warn(
          "Locale " + s + " not found. Did you forget to load it?"
        )), or._abbr;
      }
      function un(s, l) {
        if (l !== null) {
          var u, d = Rn;
          if (l.abbr = s, it[s] != null)
            ge(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ), d = it[s]._config;
          else if (l.parentLocale != null)
            if (it[l.parentLocale] != null)
              d = it[l.parentLocale]._config;
            else if (u = zr(l.parentLocale), u != null)
              d = u._config;
            else
              return ir[l.parentLocale] || (ir[l.parentLocale] = []), ir[l.parentLocale].push({
                name: s,
                config: l
              }), null;
          return it[s] = new N(V(d, l)), ir[s] && ir[s].forEach(function(h) {
            un(h.name, h.config);
          }), Ya(s), it[s];
        } else
          return delete it[s], null;
      }
      function ms(s, l) {
        if (l != null) {
          var u, d, h = Rn;
          it[s] != null && it[s].parentLocale != null ? it[s].set(V(it[s]._config, l)) : (d = zr(s), d != null && (h = d._config), l = V(h, l), d == null && (l.abbr = s), u = new N(l), u.parentLocale = it[s], it[s] = u), Ya(s);
        } else
          it[s] != null && (it[s].parentLocale != null ? (it[s] = it[s].parentLocale, s === Ya() && Ya(s)) : it[s] != null && delete it[s]);
        return it[s];
      }
      function _a(s) {
        var l;
        if (s && s._locale && s._locale._abbr && (s = s._locale._abbr), !s)
          return or;
        if (!i(s)) {
          if (l = zr(s), l)
            return l;
          s = [s];
        }
        return fs(s);
      }
      function vs() {
        return te(it);
      }
      function dn(s) {
        var l, u = s._a;
        return u && D(s).overflow === -2 && (l = u[zt] < 0 || u[zt] > 11 ? zt : u[Ut] < 1 || u[Ut] > pa(u[_t], u[zt]) ? Ut : u[ct] < 0 || u[ct] > 24 || u[ct] === 24 && (u[Vt] !== 0 || u[xt] !== 0 || u[ra] !== 0) ? ct : u[Vt] < 0 || u[Vt] > 59 ? Vt : u[xt] < 0 || u[xt] > 59 ? xt : u[ra] < 0 || u[ra] > 999 ? ra : -1, D(s)._overflowDayOfYear && (l < _t || l > Ut) && (l = Ut), D(s)._overflowWeeks && l === -1 && (l = Ea), D(s)._overflowWeekday && l === -1 && (l = Na), D(s).overflow = l), s;
      }
      var ys = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ps = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, _s = /Z|[+-]\d\d(?::?\d\d)?/, Qr = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1]
      ], cn = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], gs = /^\/?Date\((-?\d+)/i, ws = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, bs = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function Fn(s) {
        var l, u, d = s._i, h = ys.exec(d) || ps.exec(d), O, Z, Oe, Ne, Ke = Qr.length, ga = cn.length;
        if (h) {
          for (D(s).iso = !0, l = 0, u = Ke; l < u; l++)
            if (Qr[l][1].exec(h[1])) {
              Z = Qr[l][0], O = Qr[l][2] !== !1;
              break;
            }
          if (Z == null) {
            s._isValid = !1;
            return;
          }
          if (h[3]) {
            for (l = 0, u = ga; l < u; l++)
              if (cn[l][1].exec(h[3])) {
                Oe = (h[2] || " ") + cn[l][0];
                break;
              }
            if (Oe == null) {
              s._isValid = !1;
              return;
            }
          }
          if (!O && Oe != null) {
            s._isValid = !1;
            return;
          }
          if (h[4])
            if (_s.exec(h[4]))
              Ne = "Z";
            else {
              s._isValid = !1;
              return;
            }
          s._f = Z + (Oe || "") + (Ne || ""), js(s);
        } else
          s._isValid = !1;
      }
      function ks(s, l, u, d, h, O) {
        var Z = [
          Ms(s),
          xa.indexOf(l),
          parseInt(u, 10),
          parseInt(d, 10),
          parseInt(h, 10)
        ];
        return O && Z.push(parseInt(O, 10)), Z;
      }
      function Ms(s) {
        var l = parseInt(s, 10);
        return l <= 49 ? 2e3 + l : l <= 999 ? 1900 + l : l;
      }
      function Ds(s) {
        return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function Ss(s, l, u) {
        if (s) {
          var d = lr.indexOf(s), h = new Date(
            l[0],
            l[1],
            l[2]
          ).getDay();
          if (d !== h)
            return D(u).weekdayMismatch = !0, u._isValid = !1, !1;
        }
        return !0;
      }
      function Ts(s, l, u) {
        if (s)
          return bs[s];
        if (l)
          return 0;
        var d = parseInt(u, 10), h = d % 100, O = (d - h) / 100;
        return O * 60 + h;
      }
      function Vs(s) {
        var l = ws.exec(Ds(s._i)), u;
        if (l) {
          if (u = ks(
            l[4],
            l[3],
            l[2],
            l[5],
            l[6],
            l[7]
          ), !Ss(l[1], u, s))
            return;
          s._a = u, s._tzm = Ts(l[8], l[9], l[10]), s._d = Aa.apply(null, s._a), s._d.setUTCMinutes(s._d.getUTCMinutes() - s._tzm), D(s).rfc2822 = !0;
        } else
          s._isValid = !1;
      }
      function li(s) {
        var l = gs.exec(s._i);
        if (l !== null) {
          s._d = /* @__PURE__ */ new Date(+l[1]);
          return;
        }
        if (Fn(s), s._isValid === !1)
          delete s._isValid;
        else
          return;
        if (Vs(s), s._isValid === !1)
          delete s._isValid;
        else
          return;
        s._strict ? s._isValid = !1 : r.createFromInputFallback(s);
      }
      r.createFromInputFallback = q(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(s) {
          s._d = /* @__PURE__ */ new Date(s._i + (s._useUTC ? " UTC" : ""));
        }
      );
      function fn(s, l, u) {
        return s ?? l ?? u;
      }
      function ii(s) {
        var l = new Date(r.now());
        return s._useUTC ? [
          l.getUTCFullYear(),
          l.getUTCMonth(),
          l.getUTCDate()
        ] : [l.getFullYear(), l.getMonth(), l.getDate()];
      }
      function Hs(s) {
        var l, u, d = [], h, O, Z;
        if (!s._d) {
          for (h = ii(s), s._w && s._a[Ut] == null && s._a[zt] == null && oi(s), s._dayOfYear != null && (Z = fn(s._a[_t], h[_t]), (s._dayOfYear > Ot(Z) || s._dayOfYear === 0) && (D(s)._overflowDayOfYear = !0), u = Aa(Z, 0, s._dayOfYear), s._a[zt] = u.getUTCMonth(), s._a[Ut] = u.getUTCDate()), l = 0; l < 3 && s._a[l] == null; ++l)
            s._a[l] = d[l] = h[l];
          for (; l < 7; l++)
            s._a[l] = d[l] = s._a[l] == null ? l === 2 ? 1 : 0 : s._a[l];
          s._a[ct] === 24 && s._a[Vt] === 0 && s._a[xt] === 0 && s._a[ra] === 0 && (s._nextDay = !0, s._a[ct] = 0), s._d = (s._useUTC ? Aa : Ar).apply(
            null,
            d
          ), O = s._useUTC ? s._d.getUTCDay() : s._d.getDay(), s._tzm != null && s._d.setUTCMinutes(s._d.getUTCMinutes() - s._tzm), s._nextDay && (s._a[ct] = 24), s._w && typeof s._w.d < "u" && s._w.d !== O && (D(s).weekdayMismatch = !0);
        }
      }
      function oi(s) {
        var l, u, d, h, O, Z, Oe, Ne, Ke;
        l = s._w, l.GG != null || l.W != null || l.E != null ? (O = 1, Z = 4, u = fn(
          l.GG,
          s._a[_t],
          Ca(ft(), 1, 4).year
        ), d = fn(l.W, 1), h = fn(l.E, 1), (h < 1 || h > 7) && (Ne = !0)) : (O = s._locale._week.dow, Z = s._locale._week.doy, Ke = Ca(ft(), O, Z), u = fn(l.gg, s._a[_t], Ke.year), d = fn(l.w, Ke.week), l.d != null ? (h = l.d, (h < 0 || h > 6) && (Ne = !0)) : l.e != null ? (h = l.e + O, (l.e < 0 || l.e > 6) && (Ne = !0)) : h = O), d < 1 || d > Kt(u, O, Z) ? D(s)._overflowWeeks = !0 : Ne != null ? D(s)._overflowWeekday = !0 : (Oe = sr(u, d, h, O, Z), s._a[_t] = Oe.year, s._dayOfYear = Oe.dayOfYear);
      }
      r.ISO_8601 = function() {
      }, r.RFC_2822 = function() {
      };
      function js(s) {
        if (s._f === r.ISO_8601) {
          Fn(s);
          return;
        }
        if (s._f === r.RFC_2822) {
          Vs(s);
          return;
        }
        s._a = [], D(s).empty = !0;
        var l = "" + s._i, u, d, h, O, Z, Oe = l.length, Ne = 0, Ke, ga;
        for (h = A(s._f, s._locale).match(de) || [], ga = h.length, u = 0; u < ga; u++)
          O = h[u], d = (l.match(ua(O, s)) || [])[0], d && (Z = l.substr(0, l.indexOf(d)), Z.length > 0 && D(s).unusedInput.push(Z), l = l.slice(
            l.indexOf(d) + d.length
          ), Ne += d.length), _[O] ? (d ? D(s).empty = !1 : D(s).unusedTokens.push(O), wr(O, d, s)) : s._strict && !d && D(s).unusedTokens.push(O);
        D(s).charsLeftOver = Oe - Ne, l.length > 0 && D(s).unusedInput.push(l), s._a[ct] <= 12 && D(s).bigHour === !0 && s._a[ct] > 0 && (D(s).bigHour = void 0), D(s).parsedDateParts = s._a.slice(0), D(s).meridiem = s._meridiem, s._a[ct] = ui(
          s._locale,
          s._a[ct],
          s._meridiem
        ), Ke = D(s).era, Ke !== null && (s._a[_t] = s._locale.erasConvertYear(Ke, s._a[_t])), Hs(s), dn(s);
      }
      function ui(s, l, u) {
        var d;
        return u == null ? l : s.meridiemHour != null ? s.meridiemHour(l, u) : (s.isPM != null && (d = s.isPM(u), d && l < 12 && (l += 12), !d && l === 12 && (l = 0)), l);
      }
      function di(s) {
        var l, u, d, h, O, Z, Oe = !1, Ne = s._f.length;
        if (Ne === 0) {
          D(s).invalidFormat = !0, s._d = /* @__PURE__ */ new Date(NaN);
          return;
        }
        for (h = 0; h < Ne; h++)
          O = 0, Z = !1, l = R({}, s), s._useUTC != null && (l._useUTC = s._useUTC), l._f = s._f[h], js(l), C(l) && (Z = !0), O += D(l).charsLeftOver, O += D(l).unusedTokens.length * 10, D(l).score = O, Oe ? O < d && (d = O, u = l) : (d == null || O < d || Z) && (d = O, u = l, Z && (Oe = !0));
        k(s, u || l);
      }
      function ci(s) {
        if (!s._d) {
          var l = ie(s._i), u = l.day === void 0 ? l.date : l.day;
          s._a = g(
            [l.year, l.month, u, l.hour, l.minute, l.second, l.millisecond],
            function(d) {
              return d && parseInt(d, 10);
            }
          ), Hs(s);
        }
      }
      function fi(s) {
        var l = new E(dn(kl(s)));
        return l._nextDay && (l.add(1, "d"), l._nextDay = void 0), l;
      }
      function kl(s) {
        var l = s._i, u = s._f;
        return s._locale = s._locale || _a(s._l), l === null || u === void 0 && l === "" ? $({ nullInput: !0 }) : (typeof l == "string" && (s._i = l = s._locale.preparse(l)), U(l) ? new E(dn(l)) : (p(l) ? s._d = l : i(u) ? di(s) : u ? js(s) : hi(s), C(s) || (s._d = null), s));
      }
      function hi(s) {
        var l = s._i;
        m(l) ? s._d = new Date(r.now()) : p(l) ? s._d = new Date(l.valueOf()) : typeof l == "string" ? li(s) : i(l) ? (s._a = g(l.slice(0), function(u) {
          return parseInt(u, 10);
        }), Hs(s)) : o(l) ? ci(s) : v(l) ? s._d = new Date(l) : r.createFromInputFallback(s);
      }
      function Ml(s, l, u, d, h) {
        var O = {};
        return (l === !0 || l === !1) && (d = l, l = void 0), (u === !0 || u === !1) && (d = u, u = void 0), (o(s) && f(s) || i(s) && s.length === 0) && (s = void 0), O._isAMomentObject = !0, O._useUTC = O._isUTC = h, O._l = u, O._i = s, O._f = l, O._strict = d, fi(O);
      }
      function ft(s, l, u, d) {
        return Ml(s, l, u, d, !1);
      }
      var mi = q(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var s = ft.apply(null, arguments);
          return this.isValid() && s.isValid() ? s < this ? this : s : $();
        }
      ), vi = q(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var s = ft.apply(null, arguments);
          return this.isValid() && s.isValid() ? s > this ? this : s : $();
        }
      );
      function Dl(s, l) {
        var u, d;
        if (l.length === 1 && i(l[0]) && (l = l[0]), !l.length)
          return ft();
        for (u = l[0], d = 1; d < l.length; ++d)
          (!l[d].isValid() || l[d][s](u)) && (u = l[d]);
        return u;
      }
      function yi() {
        var s = [].slice.call(arguments, 0);
        return Dl("isBefore", s);
      }
      function pi() {
        var s = [].slice.call(arguments, 0);
        return Dl("isAfter", s);
      }
      var _i = function() {
        return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
      }, En = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function gi(s) {
        var l, u = !1, d, h = En.length;
        for (l in s)
          if (c(s, l) && !(et.call(En, l) !== -1 && (s[l] == null || !isNaN(s[l]))))
            return !1;
        for (d = 0; d < h; ++d)
          if (s[En[d]]) {
            if (u)
              return !1;
            parseFloat(s[En[d]]) !== Le(s[En[d]]) && (u = !0);
          }
        return !0;
      }
      function wi() {
        return this._isValid;
      }
      function bi() {
        return Pa(NaN);
      }
      function xs(s) {
        var l = ie(s), u = l.year || 0, d = l.quarter || 0, h = l.month || 0, O = l.week || l.isoWeek || 0, Z = l.day || 0, Oe = l.hour || 0, Ne = l.minute || 0, Ke = l.second || 0, ga = l.millisecond || 0;
        this._isValid = gi(l), this._milliseconds = +ga + Ke * 1e3 + // 1000
        Ne * 6e4 + // 1000 * 60
        Oe * 1e3 * 60 * 60, this._days = +Z + O * 7, this._months = +h + d * 3 + u * 12, this._data = {}, this._locale = _a(), this._bubble();
      }
      function Os(s) {
        return s instanceof xs;
      }
      function Us(s) {
        return s < 0 ? Math.round(-1 * s) * -1 : Math.round(s);
      }
      function ki(s, l, u) {
        var d = Math.min(s.length, l.length), h = Math.abs(s.length - l.length), O = 0, Z;
        for (Z = 0; Z < d; Z++)
          Le(s[Z]) !== Le(l[Z]) && O++;
        return O + h;
      }
      function Sl(s, l) {
        S(s, 0, 0, function() {
          var u = this.utcOffset(), d = "+";
          return u < 0 && (u = -u, d = "-"), d + Y(~~(u / 60), 2) + l + Y(~~u % 60, 2);
        });
      }
      Sl("Z", ":"), Sl("ZZ", ""), Me("Z", Pe), Me("ZZ", Pe), Ge(["Z", "ZZ"], function(s, l, u) {
        u._useUTC = !0, u._tzm = Bs(Pe, s);
      });
      var Mi = /([\+\-]|\d\d)/gi;
      function Bs(s, l) {
        var u = (l || "").match(s), d, h, O;
        return u === null ? null : (d = u[u.length - 1] || [], h = (d + "").match(Mi) || ["-", 0, 0], O = +(h[1] * 60) + Le(h[2]), O === 0 ? 0 : h[0] === "+" ? O : -O);
      }
      function Gs(s, l) {
        var u, d;
        return l._isUTC ? (u = l.clone(), d = (U(s) || p(s) ? s.valueOf() : ft(s).valueOf()) - u.valueOf(), u._d.setTime(u._d.valueOf() + d), r.updateOffset(u, !1), u) : ft(s).local();
      }
      function zs(s) {
        return -Math.round(s._d.getTimezoneOffset());
      }
      r.updateOffset = function() {
      };
      function Di(s, l, u) {
        var d = this._offset || 0, h;
        if (!this.isValid())
          return s != null ? this : NaN;
        if (s != null) {
          if (typeof s == "string") {
            if (s = Bs(Pe, s), s === null)
              return this;
          } else Math.abs(s) < 16 && !u && (s = s * 60);
          return !this._isUTC && l && (h = zs(this)), this._offset = s, this._isUTC = !0, h != null && this.add(h, "m"), d !== s && (!l || this._changeInProgress ? da(
            this,
            Pa(s - d, "m"),
            1,
            !1
          ) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this;
        } else
          return this._isUTC ? d : zs(this);
      }
      function Si(s, l) {
        return s != null ? (typeof s != "string" && (s = -s), this.utcOffset(s, l), this) : -this.utcOffset();
      }
      function Ti(s) {
        return this.utcOffset(0, s);
      }
      function xi(s) {
        return this._isUTC && (this.utcOffset(0, s), this._isUTC = !1, s && this.subtract(zs(this), "m")), this;
      }
      function Oi() {
        if (this._tzm != null)
          this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
          var s = Bs(ce, this._i);
          s != null ? this.utcOffset(s) : this.utcOffset(0, !0);
        }
        return this;
      }
      function Ai(s) {
        return this.isValid() ? (s = s ? ft(s).utcOffset() : 0, (this.utcOffset() - s) % 60 === 0) : !1;
      }
      function Ci() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function Yi() {
        if (!m(this._isDSTShifted))
          return this._isDSTShifted;
        var s = {}, l;
        return R(s, this), s = kl(s), s._a ? (l = s._isUTC ? w(s._a) : ft(s._a), this._isDSTShifted = this.isValid() && ki(s._a, l.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
      }
      function Pi() {
        return this.isValid() ? !this._isUTC : !1;
      }
      function $i() {
        return this.isValid() ? this._isUTC : !1;
      }
      function Tl() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1;
      }
      var Ri = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ii = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function Pa(s, l) {
        var u = s, d = null, h, O, Z;
        return Os(s) ? u = {
          ms: s._milliseconds,
          d: s._days,
          M: s._months
        } : v(s) || !isNaN(+s) ? (u = {}, l ? u[l] = +s : u.milliseconds = +s) : (d = Ri.exec(s)) ? (h = d[1] === "-" ? -1 : 1, u = {
          y: 0,
          d: Le(d[Ut]) * h,
          h: Le(d[ct]) * h,
          m: Le(d[Vt]) * h,
          s: Le(d[xt]) * h,
          ms: Le(Us(d[ra] * 1e3)) * h
          // the millisecond decimal point is included in the match
        }) : (d = Ii.exec(s)) ? (h = d[1] === "-" ? -1 : 1, u = {
          y: Kr(d[2], h),
          M: Kr(d[3], h),
          w: Kr(d[4], h),
          d: Kr(d[5], h),
          h: Kr(d[6], h),
          m: Kr(d[7], h),
          s: Kr(d[8], h)
        }) : u == null ? u = {} : typeof u == "object" && ("from" in u || "to" in u) && (Z = Fi(
          ft(u.from),
          ft(u.to)
        ), u = {}, u.ms = Z.milliseconds, u.M = Z.months), O = new xs(u), Os(s) && c(s, "_locale") && (O._locale = s._locale), Os(s) && c(s, "_isValid") && (O._isValid = s._isValid), O;
      }
      Pa.fn = xs.prototype, Pa.invalid = bi;
      function Kr(s, l) {
        var u = s && parseFloat(s.replace(",", "."));
        return (isNaN(u) ? 0 : u) * l;
      }
      function xl(s, l) {
        var u = {};
        return u.months = l.month() - s.month() + (l.year() - s.year()) * 12, s.clone().add(u.months, "M").isAfter(l) && --u.months, u.milliseconds = +l - +s.clone().add(u.months, "M"), u;
      }
      function Fi(s, l) {
        var u;
        return s.isValid() && l.isValid() ? (l = Gs(l, s), s.isBefore(l) ? u = xl(s, l) : (u = xl(l, s), u.milliseconds = -u.milliseconds, u.months = -u.months), u) : { milliseconds: 0, months: 0 };
      }
      function Ol(s, l) {
        return function(u, d) {
          var h, O;
          return d !== null && !isNaN(+d) && (ge(
            l,
            "moment()." + l + "(period, number) is deprecated. Please use moment()." + l + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ), O = u, u = d, d = O), h = Pa(u, d), da(this, h, s), this;
        };
      }
      function da(s, l, u, d) {
        var h = l._milliseconds, O = Us(l._days), Z = Us(l._months);
        s.isValid() && (d = d ?? !0, Z && ar(s, na(s, "Month") + Z * u), O && Ta(s, "Date", na(s, "Date") + O * u), h && s._d.setTime(s._d.valueOf() + h * u), d && r.updateOffset(s, O || Z));
      }
      var Sy = Ol(1, "add"), Ty = Ol(-1, "subtract");
      function Hc(s) {
        return typeof s == "string" || s instanceof String;
      }
      function xy(s) {
        return U(s) || p(s) || Hc(s) || v(s) || Ay(s) || Oy(s) || s === null || s === void 0;
      }
      function Oy(s) {
        var l = o(s) && !f(s), u = !1, d = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], h, O, Z = d.length;
        for (h = 0; h < Z; h += 1)
          O = d[h], u = u || c(s, O);
        return l && u;
      }
      function Ay(s) {
        var l = i(s), u = !1;
        return l && (u = s.filter(function(d) {
          return !v(d) && Hc(s);
        }).length === 0), l && u;
      }
      function Cy(s) {
        var l = o(s) && !f(s), u = !1, d = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], h, O;
        for (h = 0; h < d.length; h += 1)
          O = d[h], u = u || c(s, O);
        return l && u;
      }
      function Yy(s, l) {
        var u = s.diff(l, "days", !0);
        return u < -6 ? "sameElse" : u < -1 ? "lastWeek" : u < 0 ? "lastDay" : u < 1 ? "sameDay" : u < 2 ? "nextDay" : u < 7 ? "nextWeek" : "sameElse";
      }
      function Py(s, l) {
        arguments.length === 1 && (arguments[0] ? xy(arguments[0]) ? (s = arguments[0], l = void 0) : Cy(arguments[0]) && (l = arguments[0], s = void 0) : (s = void 0, l = void 0));
        var u = s || ft(), d = Gs(u, this).startOf("day"), h = r.calendarFormat(this, d) || "sameElse", O = l && (we(l[h]) ? l[h].call(this, u) : l[h]);
        return this.format(
          O || this.localeData().calendar(h, this, ft(u))
        );
      }
      function $y() {
        return new E(this);
      }
      function Ry(s, l) {
        var u = U(s) ? s : ft(s);
        return this.isValid() && u.isValid() ? (l = L(l) || "millisecond", l === "millisecond" ? this.valueOf() > u.valueOf() : u.valueOf() < this.clone().startOf(l).valueOf()) : !1;
      }
      function Iy(s, l) {
        var u = U(s) ? s : ft(s);
        return this.isValid() && u.isValid() ? (l = L(l) || "millisecond", l === "millisecond" ? this.valueOf() < u.valueOf() : this.clone().endOf(l).valueOf() < u.valueOf()) : !1;
      }
      function Fy(s, l, u, d) {
        var h = U(s) ? s : ft(s), O = U(l) ? l : ft(l);
        return this.isValid() && h.isValid() && O.isValid() ? (d = d || "()", (d[0] === "(" ? this.isAfter(h, u) : !this.isBefore(h, u)) && (d[1] === ")" ? this.isBefore(O, u) : !this.isAfter(O, u))) : !1;
      }
      function Ey(s, l) {
        var u = U(s) ? s : ft(s), d;
        return this.isValid() && u.isValid() ? (l = L(l) || "millisecond", l === "millisecond" ? this.valueOf() === u.valueOf() : (d = u.valueOf(), this.clone().startOf(l).valueOf() <= d && d <= this.clone().endOf(l).valueOf())) : !1;
      }
      function Ny(s, l) {
        return this.isSame(s, l) || this.isAfter(s, l);
      }
      function Ly(s, l) {
        return this.isSame(s, l) || this.isBefore(s, l);
      }
      function Wy(s, l, u) {
        var d, h, O;
        if (!this.isValid())
          return NaN;
        if (d = Gs(s, this), !d.isValid())
          return NaN;
        switch (h = (d.utcOffset() - this.utcOffset()) * 6e4, l = L(l), l) {
          case "year":
            O = Ei(this, d) / 12;
            break;
          case "month":
            O = Ei(this, d);
            break;
          case "quarter":
            O = Ei(this, d) / 3;
            break;
          case "second":
            O = (this - d) / 1e3;
            break;
          // 1000
          case "minute":
            O = (this - d) / 6e4;
            break;
          // 1000 * 60
          case "hour":
            O = (this - d) / 36e5;
            break;
          // 1000 * 60 * 60
          case "day":
            O = (this - d - h) / 864e5;
            break;
          // 1000 * 60 * 60 * 24, negate dst
          case "week":
            O = (this - d - h) / 6048e5;
            break;
          // 1000 * 60 * 60 * 24 * 7, negate dst
          default:
            O = this - d;
        }
        return u ? O : Tt(O);
      }
      function Ei(s, l) {
        if (s.date() < l.date())
          return -Ei(l, s);
        var u = (l.year() - s.year()) * 12 + (l.month() - s.month()), d = s.clone().add(u, "months"), h, O;
        return l - d < 0 ? (h = s.clone().add(u - 1, "months"), O = (l - d) / (d - h)) : (h = s.clone().add(u + 1, "months"), O = (l - d) / (h - d)), -(u + O) || 0;
      }
      r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function qy() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function Vy(s) {
        if (!this.isValid())
          return null;
        var l = s !== !0, u = l ? this.clone().utc() : this;
        return u.year() < 0 || u.year() > 9999 ? ve(
          u,
          l ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        ) : we(Date.prototype.toISOString) ? l ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ve(u, "Z")) : ve(
          u,
          l ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      function Hy() {
        if (!this.isValid())
          return "moment.invalid(/* " + this._i + " */)";
        var s = "moment", l = "", u, d, h, O;
        return this.isLocal() || (s = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", l = "Z"), u = "[" + s + '("]', d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", h = "-MM-DD[T]HH:mm:ss.SSS", O = l + '[")]', this.format(u + d + h + O);
      }
      function jy(s) {
        s || (s = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
        var l = ve(this, s);
        return this.localeData().postformat(l);
      }
      function Uy(s, l) {
        return this.isValid() && (U(s) && s.isValid() || ft(s).isValid()) ? Pa({ to: this, from: s }).locale(this.locale()).humanize(!l) : this.localeData().invalidDate();
      }
      function By(s) {
        return this.from(ft(), s);
      }
      function Gy(s, l) {
        return this.isValid() && (U(s) && s.isValid() || ft(s).isValid()) ? Pa({ from: this, to: s }).locale(this.locale()).humanize(!l) : this.localeData().invalidDate();
      }
      function zy(s) {
        return this.to(ft(), s);
      }
      function jc(s) {
        var l;
        return s === void 0 ? this._locale._abbr : (l = _a(s), l != null && (this._locale = l), this);
      }
      var Uc = q(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(s) {
          return s === void 0 ? this.localeData() : this.locale(s);
        }
      );
      function Bc() {
        return this._locale;
      }
      var Ni = 1e3, Qs = 60 * Ni, Li = 60 * Qs, Gc = (365 * 400 + 97) * 24 * Li;
      function Ks(s, l) {
        return (s % l + l) % l;
      }
      function zc(s, l, u) {
        return s < 100 && s >= 0 ? new Date(s + 400, l, u) - Gc : new Date(s, l, u).valueOf();
      }
      function Qc(s, l, u) {
        return s < 100 && s >= 0 ? Date.UTC(s + 400, l, u) - Gc : Date.UTC(s, l, u);
      }
      function Qy(s) {
        var l, u;
        if (s = L(s), s === void 0 || s === "millisecond" || !this.isValid())
          return this;
        switch (u = this._isUTC ? Qc : zc, s) {
          case "year":
            l = u(this.year(), 0, 1);
            break;
          case "quarter":
            l = u(
              this.year(),
              this.month() - this.month() % 3,
              1
            );
            break;
          case "month":
            l = u(this.year(), this.month(), 1);
            break;
          case "week":
            l = u(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            );
            break;
          case "isoWeek":
            l = u(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            l = u(this.year(), this.month(), this.date());
            break;
          case "hour":
            l = this._d.valueOf(), l -= Ks(
              l + (this._isUTC ? 0 : this.utcOffset() * Qs),
              Li
            );
            break;
          case "minute":
            l = this._d.valueOf(), l -= Ks(l, Qs);
            break;
          case "second":
            l = this._d.valueOf(), l -= Ks(l, Ni);
            break;
        }
        return this._d.setTime(l), r.updateOffset(this, !0), this;
      }
      function Ky(s) {
        var l, u;
        if (s = L(s), s === void 0 || s === "millisecond" || !this.isValid())
          return this;
        switch (u = this._isUTC ? Qc : zc, s) {
          case "year":
            l = u(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            l = u(
              this.year(),
              this.month() - this.month() % 3 + 3,
              1
            ) - 1;
            break;
          case "month":
            l = u(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            l = u(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
            break;
          case "isoWeek":
            l = u(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
            break;
          case "day":
          case "date":
            l = u(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            l = this._d.valueOf(), l += Li - Ks(
              l + (this._isUTC ? 0 : this.utcOffset() * Qs),
              Li
            ) - 1;
            break;
          case "minute":
            l = this._d.valueOf(), l += Qs - Ks(l, Qs) - 1;
            break;
          case "second":
            l = this._d.valueOf(), l += Ni - Ks(l, Ni) - 1;
            break;
        }
        return this._d.setTime(l), r.updateOffset(this, !0), this;
      }
      function Xy() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function Zy() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function Jy() {
        return new Date(this.valueOf());
      }
      function ep() {
        var s = this;
        return [
          s.year(),
          s.month(),
          s.date(),
          s.hour(),
          s.minute(),
          s.second(),
          s.millisecond()
        ];
      }
      function tp() {
        var s = this;
        return {
          years: s.year(),
          months: s.month(),
          date: s.date(),
          hours: s.hours(),
          minutes: s.minutes(),
          seconds: s.seconds(),
          milliseconds: s.milliseconds()
        };
      }
      function ap() {
        return this.isValid() ? this.toISOString() : null;
      }
      function rp() {
        return C(this);
      }
      function np() {
        return k({}, D(this));
      }
      function sp() {
        return D(this).overflow;
      }
      function lp() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      S("N", 0, 0, "eraAbbr"), S("NN", 0, 0, "eraAbbr"), S("NNN", 0, 0, "eraAbbr"), S("NNNN", 0, 0, "eraName"), S("NNNNN", 0, 0, "eraNarrow"), S("y", ["y", 1], "yo", "eraYear"), S("y", ["yy", 2], 0, "eraYear"), S("y", ["yyy", 3], 0, "eraYear"), S("y", ["yyyy", 4], 0, "eraYear"), Me("N", $o), Me("NN", $o), Me("NNN", $o), Me("NNNN", pp), Me("NNNNN", _p), Ge(
        ["N", "NN", "NNN", "NNNN", "NNNNN"],
        function(s, l, u, d) {
          var h = u._locale.erasParse(s, d, u._strict);
          h ? D(u).era = h : D(u).invalidEra = s;
        }
      ), Me("y", Ht), Me("yy", Ht), Me("yyy", Ht), Me("yyyy", Ht), Me("yo", gp), Ge(["y", "yy", "yyy", "yyyy"], _t), Ge(["yo"], function(s, l, u, d) {
        var h;
        u._locale._eraYearOrdinalRegex && (h = s.match(u._locale._eraYearOrdinalRegex)), u._locale.eraYearOrdinalParse ? l[_t] = u._locale.eraYearOrdinalParse(s, h) : l[_t] = parseInt(s, 10);
      });
      function ip(s, l) {
        var u, d, h, O = this._eras || _a("en")._eras;
        for (u = 0, d = O.length; u < d; ++u) {
          switch (typeof O[u].since) {
            case "string":
              h = r(O[u].since).startOf("day"), O[u].since = h.valueOf();
              break;
          }
          switch (typeof O[u].until) {
            case "undefined":
              O[u].until = 1 / 0;
              break;
            case "string":
              h = r(O[u].until).startOf("day").valueOf(), O[u].until = h.valueOf();
              break;
          }
        }
        return O;
      }
      function op(s, l, u) {
        var d, h, O = this.eras(), Z, Oe, Ne;
        for (s = s.toUpperCase(), d = 0, h = O.length; d < h; ++d)
          if (Z = O[d].name.toUpperCase(), Oe = O[d].abbr.toUpperCase(), Ne = O[d].narrow.toUpperCase(), u)
            switch (l) {
              case "N":
              case "NN":
              case "NNN":
                if (Oe === s)
                  return O[d];
                break;
              case "NNNN":
                if (Z === s)
                  return O[d];
                break;
              case "NNNNN":
                if (Ne === s)
                  return O[d];
                break;
            }
          else if ([Z, Oe, Ne].indexOf(s) >= 0)
            return O[d];
      }
      function up(s, l) {
        var u = s.since <= s.until ? 1 : -1;
        return l === void 0 ? r(s.since).year() : r(s.since).year() + (l - s.offset) * u;
      }
      function dp() {
        var s, l, u, d = this.localeData().eras();
        for (s = 0, l = d.length; s < l; ++s)
          if (u = this.clone().startOf("day").valueOf(), d[s].since <= u && u <= d[s].until || d[s].until <= u && u <= d[s].since)
            return d[s].name;
        return "";
      }
      function cp() {
        var s, l, u, d = this.localeData().eras();
        for (s = 0, l = d.length; s < l; ++s)
          if (u = this.clone().startOf("day").valueOf(), d[s].since <= u && u <= d[s].until || d[s].until <= u && u <= d[s].since)
            return d[s].narrow;
        return "";
      }
      function fp() {
        var s, l, u, d = this.localeData().eras();
        for (s = 0, l = d.length; s < l; ++s)
          if (u = this.clone().startOf("day").valueOf(), d[s].since <= u && u <= d[s].until || d[s].until <= u && u <= d[s].since)
            return d[s].abbr;
        return "";
      }
      function hp() {
        var s, l, u, d, h = this.localeData().eras();
        for (s = 0, l = h.length; s < l; ++s)
          if (u = h[s].since <= h[s].until ? 1 : -1, d = this.clone().startOf("day").valueOf(), h[s].since <= d && d <= h[s].until || h[s].until <= d && d <= h[s].since)
            return (this.year() - r(h[s].since).year()) * u + h[s].offset;
        return this.year();
      }
      function mp(s) {
        return c(this, "_erasNameRegex") || Ro.call(this), s ? this._erasNameRegex : this._erasRegex;
      }
      function vp(s) {
        return c(this, "_erasAbbrRegex") || Ro.call(this), s ? this._erasAbbrRegex : this._erasRegex;
      }
      function yp(s) {
        return c(this, "_erasNarrowRegex") || Ro.call(this), s ? this._erasNarrowRegex : this._erasRegex;
      }
      function $o(s, l) {
        return l.erasAbbrRegex(s);
      }
      function pp(s, l) {
        return l.erasNameRegex(s);
      }
      function _p(s, l) {
        return l.erasNarrowRegex(s);
      }
      function gp(s, l) {
        return l._eraYearOrdinalRegex || Ht;
      }
      function Ro() {
        var s = [], l = [], u = [], d = [], h, O, Z, Oe, Ne, Ke = this.eras();
        for (h = 0, O = Ke.length; h < O; ++h)
          Z = Pt(Ke[h].name), Oe = Pt(Ke[h].abbr), Ne = Pt(Ke[h].narrow), l.push(Z), s.push(Oe), u.push(Ne), d.push(Z), d.push(Oe), d.push(Ne);
        this._erasRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
          "^(" + u.join("|") + ")",
          "i"
        );
      }
      S(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      }), S(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function Wi(s, l) {
        S(0, [s, s.length], 0, l);
      }
      Wi("gggg", "weekYear"), Wi("ggggg", "weekYear"), Wi("GGGG", "isoWeekYear"), Wi("GGGGG", "isoWeekYear"), Me("G", W), Me("g", W), Me("GG", Ue, De), Me("gg", Ue, De), Me("GGGG", oa, Xe), Me("gggg", oa, Xe), Me("GGGGG", aa, ea), Me("ggggg", aa, ea), Da(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function(s, l, u, d) {
          l[d.substr(0, 2)] = Le(s);
        }
      ), Da(["gg", "GG"], function(s, l, u, d) {
        l[d] = r.parseTwoDigitYear(s);
      });
      function wp(s) {
        return Kc.call(
          this,
          s,
          this.week(),
          this.weekday() + this.localeData()._week.dow,
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function bp(s) {
        return Kc.call(
          this,
          s,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        );
      }
      function kp() {
        return Kt(this.year(), 1, 4);
      }
      function Mp() {
        return Kt(this.isoWeekYear(), 1, 4);
      }
      function Dp() {
        var s = this.localeData()._week;
        return Kt(this.year(), s.dow, s.doy);
      }
      function Sp() {
        var s = this.localeData()._week;
        return Kt(this.weekYear(), s.dow, s.doy);
      }
      function Kc(s, l, u, d, h) {
        var O;
        return s == null ? Ca(this, d, h).year : (O = Kt(s, d, h), l > O && (l = O), Tp.call(this, s, l, u, d, h));
      }
      function Tp(s, l, u, d, h) {
        var O = sr(s, l, u, d, h), Z = Aa(O.year, 0, O.dayOfYear);
        return this.year(Z.getUTCFullYear()), this.month(Z.getUTCMonth()), this.date(Z.getUTCDate()), this;
      }
      S("Q", 0, "Qo", "quarter"), Me("Q", Ct), Ge("Q", function(s, l) {
        l[zt] = (Le(s) - 1) * 3;
      });
      function xp(s) {
        return s == null ? Math.ceil((this.month() + 1) / 3) : this.month((s - 1) * 3 + this.month() % 3);
      }
      S("D", ["DD", 2], "Do", "date"), Me("D", Ue, Te), Me("DD", Ue, De), Me("Do", function(s, l) {
        return s ? l._dayOfMonthOrdinalParse || l._ordinalParse : l._dayOfMonthOrdinalParseLenient;
      }), Ge(["D", "DD"], Ut), Ge("Do", function(s, l) {
        l[Ut] = Le(s.match(Ue)[0]);
      });
      var Xc = Qt("Date", !0);
      S("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), Me("DDD", ta), Me("DDDD", Yt), Ge(["DDD", "DDDD"], function(s, l, u) {
        u._dayOfYear = Le(s);
      });
      function Op(s) {
        var l = Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
        return s == null ? l : this.add(s - l, "d");
      }
      S("m", ["mm", 2], 0, "minute"), Me("m", Ue, St), Me("mm", Ue, De), Ge(["m", "mm"], Vt);
      var Ap = Qt("Minutes", !1);
      S("s", ["ss", 2], 0, "second"), Me("s", Ue, St), Me("ss", Ue, De), Ge(["s", "ss"], xt);
      var Cp = Qt("Seconds", !1);
      S("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      }), S(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      }), S(0, ["SSS", 3], 0, "millisecond"), S(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      }), S(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      }), S(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      }), S(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      }), S(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      }), S(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      }), Me("S", ta, Ct), Me("SS", ta, De), Me("SSS", ta, Yt);
      var Nn, Zc;
      for (Nn = "SSSS"; Nn.length <= 9; Nn += "S")
        Me(Nn, Ht);
      function Yp(s, l) {
        l[ra] = Le(("0." + s) * 1e3);
      }
      for (Nn = "S"; Nn.length <= 9; Nn += "S")
        Ge(Nn, Yp);
      Zc = Qt("Milliseconds", !1), S("z", 0, 0, "zoneAbbr"), S("zz", 0, 0, "zoneName");
      function Pp() {
        return this._isUTC ? "UTC" : "";
      }
      function $p() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var pe = E.prototype;
      pe.add = Sy, pe.calendar = Py, pe.clone = $y, pe.diff = Wy, pe.endOf = Ky, pe.format = jy, pe.from = Uy, pe.fromNow = By, pe.to = Gy, pe.toNow = zy, pe.get = Wa, pe.invalidAt = sp, pe.isAfter = Ry, pe.isBefore = Iy, pe.isBetween = Fy, pe.isSame = Ey, pe.isSameOrAfter = Ny, pe.isSameOrBefore = Ly, pe.isValid = rp, pe.lang = Uc, pe.locale = jc, pe.localeData = Bc, pe.max = vi, pe.min = mi, pe.parsingFlags = np, pe.set = qa, pe.startOf = Qy, pe.subtract = Ty, pe.toArray = ep, pe.toObject = tp, pe.toDate = Jy, pe.toISOString = Vy, pe.inspect = Hy, typeof Symbol < "u" && Symbol.for != null && (pe[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      }), pe.toJSON = ap, pe.toString = qy, pe.unix = Zy, pe.valueOf = Xy, pe.creationData = lp, pe.eraName = dp, pe.eraNarrow = cp, pe.eraAbbr = fp, pe.eraYear = hp, pe.year = Sa, pe.isLeapYear = La, pe.weekYear = wp, pe.isoWeekYear = bp, pe.quarter = pe.quarters = xp, pe.month = rr, pe.daysInMonth = Tr, pe.week = pe.weeks = Rr, pe.isoWeek = pe.isoWeeks = Ir, pe.weeksInYear = Dp, pe.weeksInWeekYear = Sp, pe.isoWeeksInYear = kp, pe.isoWeeksInISOWeekYear = Mp, pe.date = Xc, pe.day = pe.days = Yn, pe.weekday = ts, pe.isoWeekday = as, pe.dayOfYear = Op, pe.hour = pe.hours = us, pe.minute = pe.minutes = Ap, pe.second = pe.seconds = Cp, pe.millisecond = pe.milliseconds = Zc, pe.utcOffset = Di, pe.utc = Ti, pe.local = xi, pe.parseZone = Oi, pe.hasAlignedHourOffset = Ai, pe.isDST = Ci, pe.isLocal = Pi, pe.isUtcOffset = $i, pe.isUtc = Tl, pe.isUTC = Tl, pe.zoneAbbr = Pp, pe.zoneName = $p, pe.dates = q(
        "dates accessor is deprecated. Use date instead.",
        Xc
      ), pe.months = q(
        "months accessor is deprecated. Use month instead",
        rr
      ), pe.years = q(
        "years accessor is deprecated. Use year instead",
        Sa
      ), pe.zone = q(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        Si
      ), pe.isDSTShifted = q(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        Yi
      );
      function Rp(s) {
        return ft(s * 1e3);
      }
      function Ip() {
        return ft.apply(null, arguments).parseZone();
      }
      function Jc(s) {
        return s;
      }
      var tt = N.prototype;
      tt.calendar = K, tt.longDateFormat = B, tt.invalidDate = re, tt.ordinal = ae, tt.preparse = Jc, tt.postformat = Jc, tt.relativeTime = he, tt.pastFuture = qe, tt.set = I, tt.eras = ip, tt.erasParse = op, tt.erasConvertYear = up, tt.erasAbbrRegex = vp, tt.erasNameRegex = mp, tt.erasNarrowRegex = yp, tt.months = kr, tt.monthsShort = Mr, tt.monthsParse = Sr, tt.monthsRegex = Or, tt.monthsShortRegex = xr, tt.week = Cr, tt.firstDayOfYear = $r, tt.firstDayOfWeek = Pr, tt.weekdays = Hr, tt.weekdaysMin = Ur, tt.weekdaysShort = jr, tt.weekdaysParse = Gr, tt.weekdaysRegex = rs, tt.weekdaysShortRegex = ns, tt.weekdaysMinRegex = ss, tt.isPM = is, tt.meridiem = ds;
      function qi(s, l, u, d) {
        var h = _a(), O = w().set(d, l);
        return h[u](O, s);
      }
      function ef(s, l, u) {
        if (v(s) && (l = s, s = void 0), s = s || "", l != null)
          return qi(s, l, u, "month");
        var d, h = [];
        for (d = 0; d < 12; d++)
          h[d] = qi(s, d, u, "month");
        return h;
      }
      function Io(s, l, u, d) {
        typeof s == "boolean" ? (v(l) && (u = l, l = void 0), l = l || "") : (l = s, u = l, s = !1, v(l) && (u = l, l = void 0), l = l || "");
        var h = _a(), O = s ? h._week.dow : 0, Z, Oe = [];
        if (u != null)
          return qi(l, (u + O) % 7, d, "day");
        for (Z = 0; Z < 7; Z++)
          Oe[Z] = qi(l, (Z + O) % 7, d, "day");
        return Oe;
      }
      function Fp(s, l) {
        return ef(s, l, "months");
      }
      function Ep(s, l) {
        return ef(s, l, "monthsShort");
      }
      function Np(s, l, u) {
        return Io(s, l, u, "weekdays");
      }
      function Lp(s, l, u) {
        return Io(s, l, u, "weekdaysShort");
      }
      function Wp(s, l, u) {
        return Io(s, l, u, "weekdaysMin");
      }
      Ya("en", {
        eras: [
          {
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(s) {
          var l = s % 10, u = Le(s % 100 / 10) === 1 ? "th" : l === 1 ? "st" : l === 2 ? "nd" : l === 3 ? "rd" : "th";
          return s + u;
        }
      }), r.lang = q(
        "moment.lang is deprecated. Use moment.locale instead.",
        Ya
      ), r.langData = q(
        "moment.langData is deprecated. Use moment.localeData instead.",
        _a
      );
      var hn = Math.abs;
      function qp() {
        var s = this._data;
        return this._milliseconds = hn(this._milliseconds), this._days = hn(this._days), this._months = hn(this._months), s.milliseconds = hn(s.milliseconds), s.seconds = hn(s.seconds), s.minutes = hn(s.minutes), s.hours = hn(s.hours), s.months = hn(s.months), s.years = hn(s.years), this;
      }
      function tf(s, l, u, d) {
        var h = Pa(l, u);
        return s._milliseconds += d * h._milliseconds, s._days += d * h._days, s._months += d * h._months, s._bubble();
      }
      function Vp(s, l) {
        return tf(this, s, l, 1);
      }
      function Hp(s, l) {
        return tf(this, s, l, -1);
      }
      function af(s) {
        return s < 0 ? Math.floor(s) : Math.ceil(s);
      }
      function jp() {
        var s = this._milliseconds, l = this._days, u = this._months, d = this._data, h, O, Z, Oe, Ne;
        return s >= 0 && l >= 0 && u >= 0 || s <= 0 && l <= 0 && u <= 0 || (s += af(Fo(u) + l) * 864e5, l = 0, u = 0), d.milliseconds = s % 1e3, h = Tt(s / 1e3), d.seconds = h % 60, O = Tt(h / 60), d.minutes = O % 60, Z = Tt(O / 60), d.hours = Z % 24, l += Tt(Z / 24), Ne = Tt(rf(l)), u += Ne, l -= af(Fo(Ne)), Oe = Tt(u / 12), u %= 12, d.days = l, d.months = u, d.years = Oe, this;
      }
      function rf(s) {
        return s * 4800 / 146097;
      }
      function Fo(s) {
        return s * 146097 / 4800;
      }
      function Up(s) {
        if (!this.isValid())
          return NaN;
        var l, u, d = this._milliseconds;
        if (s = L(s), s === "month" || s === "quarter" || s === "year")
          switch (l = this._days + d / 864e5, u = this._months + rf(l), s) {
            case "month":
              return u;
            case "quarter":
              return u / 3;
            case "year":
              return u / 12;
          }
        else
          switch (l = this._days + Math.round(Fo(this._months)), s) {
            case "week":
              return l / 7 + d / 6048e5;
            case "day":
              return l + d / 864e5;
            case "hour":
              return l * 24 + d / 36e5;
            case "minute":
              return l * 1440 + d / 6e4;
            case "second":
              return l * 86400 + d / 1e3;
            // Math.floor prevents floating point math errors here
            case "millisecond":
              return Math.floor(l * 864e5) + d;
            default:
              throw new Error("Unknown unit " + s);
          }
      }
      function mn(s) {
        return function() {
          return this.as(s);
        };
      }
      var nf = mn("ms"), Bp = mn("s"), Gp = mn("m"), zp = mn("h"), Qp = mn("d"), Kp = mn("w"), Xp = mn("M"), Zp = mn("Q"), Jp = mn("y"), e_ = nf;
      function t_() {
        return Pa(this);
      }
      function a_(s) {
        return s = L(s), this.isValid() ? this[s + "s"]() : NaN;
      }
      function As(s) {
        return function() {
          return this.isValid() ? this._data[s] : NaN;
        };
      }
      var r_ = As("milliseconds"), n_ = As("seconds"), s_ = As("minutes"), l_ = As("hours"), i_ = As("days"), o_ = As("months"), u_ = As("years");
      function d_() {
        return Tt(this.days() / 7);
      }
      var vn = Math.round, Xs = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month/week
        w: null,
        // weeks to month
        M: 11
        // months to year
      };
      function c_(s, l, u, d, h) {
        return h.relativeTime(l || 1, !!u, s, d);
      }
      function f_(s, l, u, d) {
        var h = Pa(s).abs(), O = vn(h.as("s")), Z = vn(h.as("m")), Oe = vn(h.as("h")), Ne = vn(h.as("d")), Ke = vn(h.as("M")), ga = vn(h.as("w")), yn = vn(h.as("y")), Ln = O <= u.ss && ["s", O] || O < u.s && ["ss", O] || Z <= 1 && ["m"] || Z < u.m && ["mm", Z] || Oe <= 1 && ["h"] || Oe < u.h && ["hh", Oe] || Ne <= 1 && ["d"] || Ne < u.d && ["dd", Ne];
        return u.w != null && (Ln = Ln || ga <= 1 && ["w"] || ga < u.w && ["ww", ga]), Ln = Ln || Ke <= 1 && ["M"] || Ke < u.M && ["MM", Ke] || yn <= 1 && ["y"] || ["yy", yn], Ln[2] = l, Ln[3] = +s > 0, Ln[4] = d, c_.apply(null, Ln);
      }
      function h_(s) {
        return s === void 0 ? vn : typeof s == "function" ? (vn = s, !0) : !1;
      }
      function m_(s, l) {
        return Xs[s] === void 0 ? !1 : l === void 0 ? Xs[s] : (Xs[s] = l, s === "s" && (Xs.ss = l - 1), !0);
      }
      function v_(s, l) {
        if (!this.isValid())
          return this.localeData().invalidDate();
        var u = !1, d = Xs, h, O;
        return typeof s == "object" && (l = s, s = !1), typeof s == "boolean" && (u = s), typeof l == "object" && (d = Object.assign({}, Xs, l), l.s != null && l.ss == null && (d.ss = l.s - 1)), h = this.localeData(), O = f_(this, !u, d, h), u && (O = h.pastFuture(+this, O)), h.postformat(O);
      }
      var Eo = Math.abs;
      function Zs(s) {
        return (s > 0) - (s < 0) || +s;
      }
      function Vi() {
        if (!this.isValid())
          return this.localeData().invalidDate();
        var s = Eo(this._milliseconds) / 1e3, l = Eo(this._days), u = Eo(this._months), d, h, O, Z, Oe = this.asSeconds(), Ne, Ke, ga, yn;
        return Oe ? (d = Tt(s / 60), h = Tt(d / 60), s %= 60, d %= 60, O = Tt(u / 12), u %= 12, Z = s ? s.toFixed(3).replace(/\.?0+$/, "") : "", Ne = Oe < 0 ? "-" : "", Ke = Zs(this._months) !== Zs(Oe) ? "-" : "", ga = Zs(this._days) !== Zs(Oe) ? "-" : "", yn = Zs(this._milliseconds) !== Zs(Oe) ? "-" : "", Ne + "P" + (O ? Ke + O + "Y" : "") + (u ? Ke + u + "M" : "") + (l ? ga + l + "D" : "") + (h || d || s ? "T" : "") + (h ? yn + h + "H" : "") + (d ? yn + d + "M" : "") + (s ? yn + Z + "S" : "")) : "P0D";
      }
      var Ze = xs.prototype;
      Ze.isValid = wi, Ze.abs = qp, Ze.add = Vp, Ze.subtract = Hp, Ze.as = Up, Ze.asMilliseconds = nf, Ze.asSeconds = Bp, Ze.asMinutes = Gp, Ze.asHours = zp, Ze.asDays = Qp, Ze.asWeeks = Kp, Ze.asMonths = Xp, Ze.asQuarters = Zp, Ze.asYears = Jp, Ze.valueOf = e_, Ze._bubble = jp, Ze.clone = t_, Ze.get = a_, Ze.milliseconds = r_, Ze.seconds = n_, Ze.minutes = s_, Ze.hours = l_, Ze.days = i_, Ze.weeks = d_, Ze.months = o_, Ze.years = u_, Ze.humanize = v_, Ze.toISOString = Vi, Ze.toString = Vi, Ze.toJSON = Vi, Ze.locale = jc, Ze.localeData = Bc, Ze.toIsoString = q(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        Vi
      ), Ze.lang = Uc, S("X", 0, 0, "unix"), S("x", 0, 0, "valueOf"), Me("x", W), Me("X", X), Ge("X", function(s, l, u) {
        u._d = new Date(parseFloat(s) * 1e3);
      }), Ge("x", function(s, l, u) {
        u._d = new Date(Le(s));
      });
      //! moment.js
      return r.version = "2.30.1", n(ft), r.fn = pe, r.min = yi, r.max = pi, r.now = _i, r.utc = w, r.unix = Rp, r.months = Fp, r.isDate = p, r.locale = Ya, r.invalid = $, r.duration = Pa, r.isMoment = U, r.weekdays = Np, r.parseZone = Ip, r.localeData = _a, r.isDuration = Os, r.monthsShort = Ep, r.weekdaysMin = Wp, r.defineLocale = un, r.updateLocale = ms, r.locales = vs, r.weekdaysShort = Lp, r.normalizeUnits = L, r.relativeTimeRounding = h_, r.relativeTimeThreshold = m_, r.calendarFormat = Yy, r.prototype = pe, r.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        // <input type="datetime-local" step="0.001" />
        DATE: "YYYY-MM-DD",
        // <input type="date" />
        TIME: "HH:mm",
        // <input type="time" />
        TIME_SECONDS: "HH:mm:ss",
        // <input type="time" step="1" />
        TIME_MS: "HH:mm:ss.SSS",
        // <input type="time" step="0.001" />
        WEEK: "GGGG-[W]WW",
        // <input type="week" />
        MONTH: "YYYY-MM"
        // <input type="month" />
      }, r;
    });
  }(Zi)), Zi.exports;
}
var uS = Qd.exports, Hf;
function dS() {
  return Hf || (Hf = 1, function(e, t) {
    (function(a, r) {
      r(typeof fy == "function" ? oS() : a.moment);
    })(uS, function(a) {
      //! moment.js locale configuration
      var r = a.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
          "_"
        ),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(n) {
          var i = n % 10, o = ~~(n % 100 / 10) === 1 ? "th" : i === 1 ? "st" : i === 2 ? "nd" : i === 3 ? "rd" : "th";
          return n + o;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4
          // The week that contains Jan 4th is the first week of the year.
        }
      });
      return r;
    });
  }()), Qd.exports;
}
dS();
be.locale("en-gb");
be.updateLocale("en", {
  week: {
    dow: 1,
    // Set Monday as the first day of the week
    doy: 4
    // The week containing Jan 4th is the first week of the year
  }
});
const wl = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, n] of t)
    a[r] = n;
  return a;
}, cS = {
  __name: "DatePickerField",
  props: {
    id: { type: String, required: !0 },
    modelValue: { required: !0 },
    placeholder: { type: String, default: "" },
    hasError: { type: Boolean, default: !1 },
    baseFieldClass: { type: String, default: "" },
    customFieldClass: { type: String, default: "" },
    uniqueFieldClass: { type: String, default: "" },
    pickerType: { type: String, default: "date" },
    is24Hour: { type: Boolean, default: !1 }
  },
  emits: ["blur", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = se(null);
    It(() => {
      n.value = c(a.modelValue, a.pickerType);
    });
    function i(m) {
      if (!m) return "";
      const v = String(m.getDate()).padStart(2, "0"), p = String(m.getMonth() + 1).padStart(2, "0"), g = m.getFullYear(), k = a.is24Hour ? String(m.getHours()).padStart(2, "0") : m.getHours() % 12 || 12, w = String(m.getMinutes()).padStart(2, "0"), b = m.getHours() >= 12 ? "PM" : "AM";
      switch (a.pickerType) {
        case "time":
          return a.is24Hour ? `${k}:${w}` : `${k}:${w} ${b}`;
        case "dateTime":
          return a.is24Hour ? `${v}/${p}/${g} ${k}:${w}` : `${v}/${p}/${g} ${k}:${w} ${b}`;
        case "date":
          return `${v}/${p}/${g}`;
        case "month":
          return `${p}/${g}`;
        case "year":
          return `${g}`;
        case "week": {
          const D = be(m).isoWeek(), T = be(m).isoWeekYear();
          return `${D}-${T}`;
        }
        default:
          return `${v}/${p}/${g}`;
      }
    }
    function o(m, v) {
      if (!m) return null;
      switch (v) {
        case "time":
          return be(m).format("HH:mm");
        case "dateTime":
          return be(m).format("DD/MM/YYYY HH:mm");
        case "date":
          return be(m).format("DD/MM/YYYY");
        case "month":
          return be(m).format("MM/YYYY");
        case "year":
          return be(m).format("YYYY");
        case "week": {
          const p = be(m).isoWeek(), g = be(m).isoWeekYear();
          return `${p}-${g}`;
        }
        default:
          return be(m).format("DD/MM/YYYY");
      }
    }
    function c(m, v) {
      if (!m) return null;
      const p = (g) => be(m, g, !0);
      switch (v) {
        case "time": {
          const g = p("HH:mm");
          return g.isValid() ? { hours: g.hour(), minutes: g.minute(), seconds: 0 } : null;
        }
        case "dateTime":
          return be(m, "DD/MM/YYYY HH:mm", !0).isValid() ? be(m, "DD/MM/YYYY HH:mm").toDate() : null;
        case "date":
          return be(m, "DD/MM/YYYY", !0).isValid() ? be(m, "DD/MM/YYYY").toDate() : null;
        case "month": {
          const g = p("MM/YYYY");
          return g.isValid() ? { month: g.month(), year: g.year() } : null;
        }
        case "year": {
          const g = p("YYYY");
          return g.isValid() ? g.year() : null;
        }
        case "week": {
          const [g, k] = m.split("-");
          return g && k ? be().year(parseInt(k)).isoWeek(parseInt(g)).startOf("isoWeek").toDate() : null;
        }
        default: {
          const g = p("DD/MM/YYYY");
          return g.isValid() ? { day: g.date(), month: g.month() + 1, year: g.year() } : null;
        }
      }
    }
    Rt(
      () => a.modelValue,
      (m) => {
        const v = c(m, a.pickerType);
        n.value !== v && (n.value = v);
      }
    ), Rt(
      () => n.value,
      (m) => {
        const v = o(m, a.pickerType);
        a.modelValue !== v && r("update:modelValue", v);
      }
    );
    function f() {
      r("blur", a.id);
    }
    return (m, v) => (F(), Ve(y(yc), {
      modelValue: n.value,
      "onUpdate:modelValue": v[0] || (v[0] = (p) => n.value = p),
      id: e.id,
      class: fe([
        e.baseFieldClass,
        e.customFieldClass,
        e.uniqueFieldClass,
        { textField__default__error: e.hasError }
      ]),
      type: e.pickerType,
      placeholder: e.placeholder,
      "month-picker": e.pickerType === "month",
      "time-picker": e.pickerType === "time",
      "year-picker": e.pickerType === "year",
      "week-picker": e.pickerType === "week",
      "enable-time-picker": e.pickerType === "dateTime",
      format: i,
      "is-24": e.is24Hour,
      onBlur: f
    }, null, 8, ["modelValue", "id", "class", "type", "placeholder", "month-picker", "time-picker", "year-picker", "week-picker", "enable-time-picker", "is-24"]));
  }
}, fS = /* @__PURE__ */ wl(cS, [["__scopeId", "data-v-f7903551"]]), hS = ["value", "id", "placeholder"], mS = {
  __name: "TextAreaField",
  props: {
    id: { type: String, required: !0 },
    modelValue: { required: !0 },
    placeholder: { type: String, default: "" },
    hasError: { type: Boolean, default: !1 },
    baseFieldClass: { type: String, default: "" },
    customFieldClass: { type: String, default: "" },
    uniqueFieldClass: { type: String, default: "" }
  },
  emits: ["blur", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = t, r = e;
    function n(o) {
      a("update:modelValue", o.target.value);
    }
    function i() {
      a("blur", r.id);
    }
    return (o, c) => (F(), z("textarea", {
      value: e.modelValue,
      id: e.id,
      class: fe([
        e.baseFieldClass,
        e.customFieldClass,
        e.uniqueFieldClass,
        { textField__default__error: e.hasError }
      ]),
      placeholder: e.placeholder,
      onBlur: i,
      onInput: n
    }, null, 42, hS));
  }
}, vS = ["onClick"], yS = {
  __name: "SelectField",
  props: {
    id: { type: String, required: !0 },
    modelValue: { required: !0 },
    placeholder: { type: String, default: "Select an option" },
    tagItems: { type: Array, default: () => [] },
    baseFieldClass: { type: Object, default: () => ({}) },
    customFieldClass: { type: Object, default: () => ({}) },
    uniqueFieldClass: { type: Object, default: () => ({}) },
    hasError: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = se(!1), i = se(""), o = se(""), c = se({}), f = se(null);
    It(() => {
      m();
    });
    const m = () => {
      if (typeof a.modelValue == "number" || typeof a.modelValue == "string") {
        const b = a.tagItems.find((D) => D.id === a.modelValue);
        b && (c.value = b, i.value = b.name, r("update:modelValue", b));
      } else if (typeof a.modelValue == "object" && a.modelValue.id !== void 0) {
        const b = a.tagItems.find((D) => D.id === a.modelValue.id);
        b && (c.value = b, i.value = b.name, r("update:modelValue", b));
      }
    };
    Rt(
      () => a.modelValue,
      () => {
        m();
      },
      { immediate: !0 }
    );
    function v() {
      n.value = !n.value;
    }
    const p = ee(() => o.value ? a.tagItems.filter(
      (b) => b.name.toLowerCase().includes(o.value.toLowerCase())
    ) : a.tagItems);
    function g(b) {
      c.value = b, r("update:modelValue", b), i.value = b.name, n.value = !1, r("blur", a.id);
    }
    function k() {
      c.value = "", r("update:modelValue", ""), i.value = null, n.value = !1, r("blur", a.id);
    }
    function w(b) {
      f.value && !f.value.contains(b.target) && (n.value = !1);
    }
    return It(() => {
      document.addEventListener("click", w);
    }), Xd(() => {
      document.removeEventListener("click", w);
    }), (b, D) => {
      var T, C, $, P, G, R, E, U, H, q, J, ge, we, I, V, N, te, me, K, Y, de, Q, j, _, S, ne, x, ve, A, st, B, le, re, ke, M, ae, $e, he, qe, Fe, L, ie, Ye, lt, Ct, De, Yt, Xe, ea, Ue, ia, ya, ta, oa, aa, Ht, W, ce, Pe, X, ye, Te, St, pt, Me, ua, jt, Pt, Tt, Le, Ga, Ge, Da, wr, Fa, _t, zt, Ut, ct, Vt, xt, ra, Ea, Na;
      return F(), z("div", {
        class: fe([
          (T = e.baseFieldClass) == null ? void 0 : T.wrapper,
          (C = e.customFieldClass) == null ? void 0 : C.wrapper,
          ($ = e.uniqueFieldClass) == null ? void 0 : $.wrapper
        ]),
        ref_key: "selectWrapper",
        ref: f
      }, [
        Se("div", {
          class: fe([
            (P = e.baseFieldClass) == null ? void 0 : P.field,
            (G = e.customFieldClass) == null ? void 0 : G.field,
            (R = e.uniqueFieldClass) == null ? void 0 : R.field
          ]),
          onClick: v,
          tabindex: "0"
        }, [
          Se("div", {
            class: fe([
              (U = (E = e.baseFieldClass) == null ? void 0 : E.labelAndIcon) == null ? void 0 : U.wrapper,
              (q = (H = e.customFieldClass) == null ? void 0 : H.labelAndIcon) == null ? void 0 : q.wrapper,
              (ge = (J = e.uniqueFieldClass) == null ? void 0 : J.labelAndIcon) == null ? void 0 : ge.wrapper
            ])
          }, [
            Se("div", {
              class: fe([
                (I = (we = e.baseFieldClass) == null ? void 0 : we.labelAndIcon) == null ? void 0 : I.label,
                (N = (V = e.customFieldClass) == null ? void 0 : V.labelAndIcon) == null ? void 0 : N.label,
                (me = (te = e.uniqueFieldClass) == null ? void 0 : te.labelAndIcon) == null ? void 0 : me.label
              ])
            }, yt(i.value || e.placeholder), 3),
            n.value ? (F(), z("svg", {
              key: 0,
              class: fe([
                (de = (Y = (K = e.baseFieldClass) == null ? void 0 : K.labelAndIcon) == null ? void 0 : Y.icon) == null ? void 0 : de.icon,
                (_ = (j = (Q = e.customFieldClass) == null ? void 0 : Q.labelAndIcon) == null ? void 0 : j.icon) == null ? void 0 : _.icon,
                (x = (ne = (S = e.uniqueFieldClass) == null ? void 0 : S.labelAndIcon) == null ? void 0 : ne.icon) == null ? void 0 : x.icon
              ]),
              viewBox: "0 0 16 16",
              fill: "none"
            }, [
              Se("path", {
                class: fe([
                  (st = (A = (ve = e.baseFieldClass) == null ? void 0 : ve.labelAndIcon) == null ? void 0 : A.icon) == null ? void 0 : st.path,
                  (re = (le = (B = e.customFieldClass) == null ? void 0 : B.labelAndIcon) == null ? void 0 : le.icon) == null ? void 0 : re.path,
                  (ae = (M = (ke = e.uniqueFieldClass) == null ? void 0 : ke.labelAndIcon) == null ? void 0 : M.icon) == null ? void 0 : ae.path
                ]),
                d: "M3 10L8 5L13 10",
                stroke: "#2E90FA",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, null, 2)
            ], 2)) : (F(), z("svg", {
              key: 1,
              class: fe([
                (qe = (he = ($e = e.baseFieldClass) == null ? void 0 : $e.labelAndIcon) == null ? void 0 : he.icon) == null ? void 0 : qe.icon,
                (ie = (L = (Fe = e.customFieldClass) == null ? void 0 : Fe.labelAndIcon) == null ? void 0 : L.icon) == null ? void 0 : ie.icon,
                (Ct = (lt = (Ye = e.uniqueFieldClass) == null ? void 0 : Ye.labelAndIcon) == null ? void 0 : lt.icon) == null ? void 0 : Ct.icon
              ]),
              viewBox: "0 0 20 20",
              fill: "none"
            }, [
              Se("path", {
                class: fe([
                  (Xe = (Yt = (De = e.baseFieldClass) == null ? void 0 : De.labelAndIcon) == null ? void 0 : Yt.icon) == null ? void 0 : Xe.path,
                  (ia = (Ue = (ea = e.customFieldClass) == null ? void 0 : ea.labelAndIcon) == null ? void 0 : Ue.icon) == null ? void 0 : ia.path,
                  (oa = (ta = (ya = e.uniqueFieldClass) == null ? void 0 : ya.labelAndIcon) == null ? void 0 : ta.icon) == null ? void 0 : oa.path
                ]),
                d: "M16.25 7.5L10 13.75L3.75 7.5",
                stroke: "#2E90FA",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, null, 2)
            ], 2))
          ], 2)
        ], 2),
        n.value ? (F(), z("div", {
          key: 0,
          class: fe([
            (Ht = (aa = e.baseFieldClass) == null ? void 0 : aa.dropdown) == null ? void 0 : Ht.wrapper,
            (ce = (W = e.customFieldClass) == null ? void 0 : W.dropdown) == null ? void 0 : ce.wrapper,
            (X = (Pe = e.uniqueFieldClass) == null ? void 0 : Pe.dropdown) == null ? void 0 : X.wrapper
          ])
        }, [
          Rs(Se("input", {
            class: fe([
              (Te = (ye = e.baseFieldClass) == null ? void 0 : ye.dropdown) == null ? void 0 : Te.input,
              (pt = (St = e.customFieldClass) == null ? void 0 : St.dropdown) == null ? void 0 : pt.input,
              (ua = (Me = e.uniqueFieldClass) == null ? void 0 : Me.dropdown) == null ? void 0 : ua.input
            ]),
            "onUpdate:modelValue": D[0] || (D[0] = (Ot) => o.value = Ot),
            type: "text",
            name: "search",
            placeholder: "search item here"
          }, null, 2), [
            [xm, o.value]
          ]),
          Se("ul", {
            class: fe([
              (Pt = (jt = e.baseFieldClass) == null ? void 0 : jt.dropdown) == null ? void 0 : Pt.list,
              (Le = (Tt = e.customFieldClass) == null ? void 0 : Tt.dropdown) == null ? void 0 : Le.list,
              (Ge = (Ga = e.uniqueFieldClass) == null ? void 0 : Ga.dropdown) == null ? void 0 : Ge.list
            ])
          }, [
            Se("li", {
              class: fe([
                (wr = (Da = e.baseFieldClass) == null ? void 0 : Da.dropdown) == null ? void 0 : wr.item,
                (_t = (Fa = e.customFieldClass) == null ? void 0 : Fa.dropdown) == null ? void 0 : _t.item,
                (Ut = (zt = e.uniqueFieldClass) == null ? void 0 : zt.dropdown) == null ? void 0 : Ut.item,
                {
                  [(Vt = (ct = e.baseFieldClass) == null ? void 0 : ct.dropdown) == null ? void 0 : Vt.itemSelected]: c.value.value === "",
                  [(ra = (xt = e.customFieldClass) == null ? void 0 : xt.dropdown) == null ? void 0 : ra.itemSelected]: c.value.value === "",
                  [(Na = (Ea = e.uniqueFieldClass) == null ? void 0 : Ea.dropdown) == null ? void 0 : Na.itemSelected]: c.value.value === ""
                }
              ]),
              onClick: k
            }, " None ", 2),
            (F(!0), z(We, null, ut(p.value, (Ot) => {
              var Sa, La, Qt, na, Ta, Wa, qa, Va, et, pa, Ha, xa;
              return F(), z("li", {
                key: Ot.id,
                class: fe([
                  (La = (Sa = e.baseFieldClass) == null ? void 0 : Sa.dropdown) == null ? void 0 : La.item,
                  (na = (Qt = e.customFieldClass) == null ? void 0 : Qt.dropdown) == null ? void 0 : na.item,
                  (Wa = (Ta = e.uniqueFieldClass) == null ? void 0 : Ta.dropdown) == null ? void 0 : Wa.item,
                  {
                    [(Va = (qa = e.baseFieldClass) == null ? void 0 : qa.dropdown) == null ? void 0 : Va.itemSelected]: Ot.id === e.modelValue.id,
                    [(pa = (et = e.customFieldClass) == null ? void 0 : et.dropdown) == null ? void 0 : pa.itemSelected]: Ot.id === e.modelValue.id,
                    [(xa = (Ha = e.uniqueFieldClass) == null ? void 0 : Ha.dropdown) == null ? void 0 : xa.itemSelected]: Ot.id === e.modelValue.id
                  }
                ]),
                onClick: (za) => g(Ot)
              }, yt(Ot.name), 11, vS);
            }), 128))
          ], 2)
        ], 2)) : ue("", !0)
      ], 2);
    };
  }
}, pS = /* @__PURE__ */ wl(yS, [["__scopeId", "data-v-5139e650"]]), _S = ["id"], gS = ["id", "type", "value", "checked", "onChange"], wS = ["for"], bS = {
  __name: "RadioField",
  props: {
    modelValue: { required: !0 },
    id: { type: String, required: !0 },
    tagItems: { type: Array, required: !0 },
    type: { type: String, default: "radio" },
    wrapperClass: { type: Array, default: () => [] },
    containerClass: { type: Array, default: () => [] },
    inputClass: { type: Array, default: () => [] },
    labelClass: { type: Array, default: () => [] }
  },
  emits: ["blur", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = (o) => {
      r("update:modelValue", o);
    };
    function i() {
      r("blur", a.id);
    }
    return (o, c) => (F(), z("div", {
      id: e.id,
      class: fe(e.wrapperClass),
      tabindex: "0"
    }, [
      (F(!0), z(We, null, ut(e.tagItems, (f, m) => (F(), z("div", {
        key: f.id,
        class: fe(e.containerClass)
      }, [
        Se("input", {
          id: f.id,
          type: e.type,
          value: f.id,
          checked: e.modelValue === f.id,
          class: fe([e.inputClass, "custom-radio"]),
          onChange: (v) => n(f.id),
          onBlur: i
        }, null, 42, gS),
        Se("label", {
          for: f.id,
          class: fe(e.labelClass)
        }, yt(f.name), 11, wS)
      ], 2))), 128))
    ], 10, _S));
  }
}, kS = /* @__PURE__ */ wl(bS, [["__scopeId", "data-v-9ab70f6d"]]);
function MS(e = null, t = null, a) {
  if (e === null && t === null) return;
  const r = (n) => {
    let i = !1, o = !1;
    e !== null && (i = DS(e, n)), t !== null && (o = SS(t, n)), i === !1 && o === !1 && typeof a == "function" && a();
  };
  return It(() => {
    window.addEventListener("click", r);
  }), Xd(() => {
    window.removeEventListener("click", r);
  }), { listener: r };
}
const DS = (e, t) => {
  for (let a = 0; a < e.length; a++)
    if (e[a].value && e[a].value.contains(t.target))
      return !0;
  return !1;
}, SS = (e, t) => {
  for (let a = 0; a < e.length; a++)
    if (t.target.closest("." + e[a]) !== null)
      return !0;
  return !1;
};
var au, jf;
function TS() {
  if (jf) return au;
  jf = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return au = e, au;
}
var ru, Uf;
function hy() {
  if (Uf) return ru;
  Uf = 1;
  function e(t, a) {
    return t === a || t !== t && a !== a;
  }
  return ru = e, ru;
}
var nu, Bf;
function To() {
  if (Bf) return nu;
  Bf = 1;
  var e = hy();
  function t(a, r) {
    for (var n = a.length; n--; )
      if (e(a[n][0], r))
        return n;
    return -1;
  }
  return nu = t, nu;
}
var su, Gf;
function xS() {
  if (Gf) return su;
  Gf = 1;
  var e = To(), t = Array.prototype, a = t.splice;
  function r(n) {
    var i = this.__data__, o = e(i, n);
    if (o < 0)
      return !1;
    var c = i.length - 1;
    return o == c ? i.pop() : a.call(i, o, 1), --this.size, !0;
  }
  return su = r, su;
}
var lu, zf;
function OS() {
  if (zf) return lu;
  zf = 1;
  var e = To();
  function t(a) {
    var r = this.__data__, n = e(r, a);
    return n < 0 ? void 0 : r[n][1];
  }
  return lu = t, lu;
}
var iu, Qf;
function AS() {
  if (Qf) return iu;
  Qf = 1;
  var e = To();
  function t(a) {
    return e(this.__data__, a) > -1;
  }
  return iu = t, iu;
}
var ou, Kf;
function CS() {
  if (Kf) return ou;
  Kf = 1;
  var e = To();
  function t(a, r) {
    var n = this.__data__, i = e(n, a);
    return i < 0 ? (++this.size, n.push([a, r])) : n[i][1] = r, this;
  }
  return ou = t, ou;
}
var uu, Xf;
function xo() {
  if (Xf) return uu;
  Xf = 1;
  var e = TS(), t = xS(), a = OS(), r = AS(), n = CS();
  function i(o) {
    var c = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++c < f; ) {
      var m = o[c];
      this.set(m[0], m[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = a, i.prototype.has = r, i.prototype.set = n, uu = i, uu;
}
var du, Zf;
function YS() {
  if (Zf) return du;
  Zf = 1;
  var e = xo();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return du = t, du;
}
var cu, Jf;
function PS() {
  if (Jf) return cu;
  Jf = 1;
  function e(t) {
    var a = this.__data__, r = a.delete(t);
    return this.size = a.size, r;
  }
  return cu = e, cu;
}
var fu, eh;
function $S() {
  if (eh) return fu;
  eh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return fu = e, fu;
}
var hu, th;
function RS() {
  if (th) return hu;
  th = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return hu = e, hu;
}
var mu, ah;
function my() {
  if (ah) return mu;
  ah = 1;
  var e = typeof Gi == "object" && Gi && Gi.Object === Object && Gi;
  return mu = e, mu;
}
var vu, rh;
function Cn() {
  if (rh) return vu;
  rh = 1;
  var e = my(), t = typeof self == "object" && self && self.Object === Object && self, a = e || t || Function("return this")();
  return vu = a, vu;
}
var yu, nh;
function Lc() {
  if (nh) return yu;
  nh = 1;
  var e = Cn(), t = e.Symbol;
  return yu = t, yu;
}
var pu, sh;
function IS() {
  if (sh) return pu;
  sh = 1;
  var e = Lc(), t = Object.prototype, a = t.hasOwnProperty, r = t.toString, n = e ? e.toStringTag : void 0;
  function i(o) {
    var c = a.call(o, n), f = o[n];
    try {
      o[n] = void 0;
      var m = !0;
    } catch {
    }
    var v = r.call(o);
    return m && (c ? o[n] = f : delete o[n]), v;
  }
  return pu = i, pu;
}
var _u, lh;
function FS() {
  if (lh) return _u;
  lh = 1;
  var e = Object.prototype, t = e.toString;
  function a(r) {
    return t.call(r);
  }
  return _u = a, _u;
}
var gu, ih;
function Oo() {
  if (ih) return gu;
  ih = 1;
  var e = Lc(), t = IS(), a = FS(), r = "[object Null]", n = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(c) {
    return c == null ? c === void 0 ? n : r : i && i in Object(c) ? t(c) : a(c);
  }
  return gu = o, gu;
}
var wu, oh;
function vy() {
  if (oh) return wu;
  oh = 1;
  function e(t) {
    var a = typeof t;
    return t != null && (a == "object" || a == "function");
  }
  return wu = e, wu;
}
var bu, uh;
function yy() {
  if (uh) return bu;
  uh = 1;
  var e = Oo(), t = vy(), a = "[object AsyncFunction]", r = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(c) {
    if (!t(c))
      return !1;
    var f = e(c);
    return f == r || f == n || f == a || f == i;
  }
  return bu = o, bu;
}
var ku, dh;
function ES() {
  if (dh) return ku;
  dh = 1;
  var e = Cn(), t = e["__core-js_shared__"];
  return ku = t, ku;
}
var Mu, ch;
function NS() {
  if (ch) return Mu;
  ch = 1;
  var e = ES(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function a(r) {
    return !!t && t in r;
  }
  return Mu = a, Mu;
}
var Du, fh;
function py() {
  if (fh) return Du;
  fh = 1;
  var e = Function.prototype, t = e.toString;
  function a(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return Du = a, Du;
}
var Su, hh;
function LS() {
  if (hh) return Su;
  hh = 1;
  var e = yy(), t = NS(), a = vy(), r = py(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, c = Object.prototype, f = o.toString, m = c.hasOwnProperty, v = RegExp(
    "^" + f.call(m).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(g) {
    if (!a(g) || t(g))
      return !1;
    var k = e(g) ? v : i;
    return k.test(r(g));
  }
  return Su = p, Su;
}
var Tu, mh;
function WS() {
  if (mh) return Tu;
  mh = 1;
  function e(t, a) {
    return t == null ? void 0 : t[a];
  }
  return Tu = e, Tu;
}
var xu, vh;
function bl() {
  if (vh) return xu;
  vh = 1;
  var e = LS(), t = WS();
  function a(r, n) {
    var i = t(r, n);
    return e(i) ? i : void 0;
  }
  return xu = a, xu;
}
var Ou, yh;
function Wc() {
  if (yh) return Ou;
  yh = 1;
  var e = bl(), t = Cn(), a = e(t, "Map");
  return Ou = a, Ou;
}
var Au, ph;
function Ao() {
  if (ph) return Au;
  ph = 1;
  var e = bl(), t = e(Object, "create");
  return Au = t, Au;
}
var Cu, _h;
function qS() {
  if (_h) return Cu;
  _h = 1;
  var e = Ao();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Cu = t, Cu;
}
var Yu, gh;
function VS() {
  if (gh) return Yu;
  gh = 1;
  function e(t) {
    var a = this.has(t) && delete this.__data__[t];
    return this.size -= a ? 1 : 0, a;
  }
  return Yu = e, Yu;
}
var Pu, wh;
function HS() {
  if (wh) return Pu;
  wh = 1;
  var e = Ao(), t = "__lodash_hash_undefined__", a = Object.prototype, r = a.hasOwnProperty;
  function n(i) {
    var o = this.__data__;
    if (e) {
      var c = o[i];
      return c === t ? void 0 : c;
    }
    return r.call(o, i) ? o[i] : void 0;
  }
  return Pu = n, Pu;
}
var $u, bh;
function jS() {
  if (bh) return $u;
  bh = 1;
  var e = Ao(), t = Object.prototype, a = t.hasOwnProperty;
  function r(n) {
    var i = this.__data__;
    return e ? i[n] !== void 0 : a.call(i, n);
  }
  return $u = r, $u;
}
var Ru, kh;
function US() {
  if (kh) return Ru;
  kh = 1;
  var e = Ao(), t = "__lodash_hash_undefined__";
  function a(r, n) {
    var i = this.__data__;
    return this.size += this.has(r) ? 0 : 1, i[r] = e && n === void 0 ? t : n, this;
  }
  return Ru = a, Ru;
}
var Iu, Mh;
function BS() {
  if (Mh) return Iu;
  Mh = 1;
  var e = qS(), t = VS(), a = HS(), r = jS(), n = US();
  function i(o) {
    var c = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++c < f; ) {
      var m = o[c];
      this.set(m[0], m[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = a, i.prototype.has = r, i.prototype.set = n, Iu = i, Iu;
}
var Fu, Dh;
function GS() {
  if (Dh) return Fu;
  Dh = 1;
  var e = BS(), t = xo(), a = Wc();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (a || t)(),
      string: new e()
    };
  }
  return Fu = r, Fu;
}
var Eu, Sh;
function zS() {
  if (Sh) return Eu;
  Sh = 1;
  function e(t) {
    var a = typeof t;
    return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? t !== "__proto__" : t === null;
  }
  return Eu = e, Eu;
}
var Nu, Th;
function Co() {
  if (Th) return Nu;
  Th = 1;
  var e = zS();
  function t(a, r) {
    var n = a.__data__;
    return e(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
  }
  return Nu = t, Nu;
}
var Lu, xh;
function QS() {
  if (xh) return Lu;
  xh = 1;
  var e = Co();
  function t(a) {
    var r = e(this, a).delete(a);
    return this.size -= r ? 1 : 0, r;
  }
  return Lu = t, Lu;
}
var Wu, Oh;
function KS() {
  if (Oh) return Wu;
  Oh = 1;
  var e = Co();
  function t(a) {
    return e(this, a).get(a);
  }
  return Wu = t, Wu;
}
var qu, Ah;
function XS() {
  if (Ah) return qu;
  Ah = 1;
  var e = Co();
  function t(a) {
    return e(this, a).has(a);
  }
  return qu = t, qu;
}
var Vu, Ch;
function ZS() {
  if (Ch) return Vu;
  Ch = 1;
  var e = Co();
  function t(a, r) {
    var n = e(this, a), i = n.size;
    return n.set(a, r), this.size += n.size == i ? 0 : 1, this;
  }
  return Vu = t, Vu;
}
var Hu, Yh;
function _y() {
  if (Yh) return Hu;
  Yh = 1;
  var e = GS(), t = QS(), a = KS(), r = XS(), n = ZS();
  function i(o) {
    var c = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++c < f; ) {
      var m = o[c];
      this.set(m[0], m[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = a, i.prototype.has = r, i.prototype.set = n, Hu = i, Hu;
}
var ju, Ph;
function JS() {
  if (Ph) return ju;
  Ph = 1;
  var e = xo(), t = Wc(), a = _y(), r = 200;
  function n(i, o) {
    var c = this.__data__;
    if (c instanceof e) {
      var f = c.__data__;
      if (!t || f.length < r - 1)
        return f.push([i, o]), this.size = ++c.size, this;
      c = this.__data__ = new a(f);
    }
    return c.set(i, o), this.size = c.size, this;
  }
  return ju = n, ju;
}
var Uu, $h;
function eT() {
  if ($h) return Uu;
  $h = 1;
  var e = xo(), t = YS(), a = PS(), r = $S(), n = RS(), i = JS();
  function o(c) {
    var f = this.__data__ = new e(c);
    this.size = f.size;
  }
  return o.prototype.clear = t, o.prototype.delete = a, o.prototype.get = r, o.prototype.has = n, o.prototype.set = i, Uu = o, Uu;
}
var Bu, Rh;
function tT() {
  if (Rh) return Bu;
  Rh = 1;
  var e = "__lodash_hash_undefined__";
  function t(a) {
    return this.__data__.set(a, e), this;
  }
  return Bu = t, Bu;
}
var Gu, Ih;
function aT() {
  if (Ih) return Gu;
  Ih = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Gu = e, Gu;
}
var zu, Fh;
function rT() {
  if (Fh) return zu;
  Fh = 1;
  var e = _y(), t = tT(), a = aT();
  function r(n) {
    var i = -1, o = n == null ? 0 : n.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(n[i]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = a, zu = r, zu;
}
var Qu, Eh;
function nT() {
  if (Eh) return Qu;
  Eh = 1;
  function e(t, a) {
    for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
      if (a(t[r], r, t))
        return !0;
    return !1;
  }
  return Qu = e, Qu;
}
var Ku, Nh;
function sT() {
  if (Nh) return Ku;
  Nh = 1;
  function e(t, a) {
    return t.has(a);
  }
  return Ku = e, Ku;
}
var Xu, Lh;
function gy() {
  if (Lh) return Xu;
  Lh = 1;
  var e = rT(), t = nT(), a = sT(), r = 1, n = 2;
  function i(o, c, f, m, v, p) {
    var g = f & r, k = o.length, w = c.length;
    if (k != w && !(g && w > k))
      return !1;
    var b = p.get(o), D = p.get(c);
    if (b && D)
      return b == c && D == o;
    var T = -1, C = !0, $ = f & n ? new e() : void 0;
    for (p.set(o, c), p.set(c, o); ++T < k; ) {
      var P = o[T], G = c[T];
      if (m)
        var R = g ? m(G, P, T, c, o, p) : m(P, G, T, o, c, p);
      if (R !== void 0) {
        if (R)
          continue;
        C = !1;
        break;
      }
      if ($) {
        if (!t(c, function(E, U) {
          if (!a($, U) && (P === E || v(P, E, f, m, p)))
            return $.push(U);
        })) {
          C = !1;
          break;
        }
      } else if (!(P === G || v(P, G, f, m, p))) {
        C = !1;
        break;
      }
    }
    return p.delete(o), p.delete(c), C;
  }
  return Xu = i, Xu;
}
var Zu, Wh;
function lT() {
  if (Wh) return Zu;
  Wh = 1;
  var e = Cn(), t = e.Uint8Array;
  return Zu = t, Zu;
}
var Ju, qh;
function iT() {
  if (qh) return Ju;
  qh = 1;
  function e(t) {
    var a = -1, r = Array(t.size);
    return t.forEach(function(n, i) {
      r[++a] = [i, n];
    }), r;
  }
  return Ju = e, Ju;
}
var ed, Vh;
function oT() {
  if (Vh) return ed;
  Vh = 1;
  function e(t) {
    var a = -1, r = Array(t.size);
    return t.forEach(function(n) {
      r[++a] = n;
    }), r;
  }
  return ed = e, ed;
}
var td, Hh;
function uT() {
  if (Hh) return td;
  Hh = 1;
  var e = Lc(), t = lT(), a = hy(), r = gy(), n = iT(), i = oT(), o = 1, c = 2, f = "[object Boolean]", m = "[object Date]", v = "[object Error]", p = "[object Map]", g = "[object Number]", k = "[object RegExp]", w = "[object Set]", b = "[object String]", D = "[object Symbol]", T = "[object ArrayBuffer]", C = "[object DataView]", $ = e ? e.prototype : void 0, P = $ ? $.valueOf : void 0;
  function G(R, E, U, H, q, J, ge) {
    switch (U) {
      case C:
        if (R.byteLength != E.byteLength || R.byteOffset != E.byteOffset)
          return !1;
        R = R.buffer, E = E.buffer;
      case T:
        return !(R.byteLength != E.byteLength || !J(new t(R), new t(E)));
      case f:
      case m:
      case g:
        return a(+R, +E);
      case v:
        return R.name == E.name && R.message == E.message;
      case k:
      case b:
        return R == E + "";
      case p:
        var we = n;
      case w:
        var I = H & o;
        if (we || (we = i), R.size != E.size && !I)
          return !1;
        var V = ge.get(R);
        if (V)
          return V == E;
        H |= c, ge.set(R, E);
        var N = r(we(R), we(E), H, q, J, ge);
        return ge.delete(R), N;
      case D:
        if (P)
          return P.call(R) == P.call(E);
    }
    return !1;
  }
  return td = G, td;
}
var ad, jh;
function dT() {
  if (jh) return ad;
  jh = 1;
  function e(t, a) {
    for (var r = -1, n = a.length, i = t.length; ++r < n; )
      t[i + r] = a[r];
    return t;
  }
  return ad = e, ad;
}
var rd, Uh;
function qc() {
  if (Uh) return rd;
  Uh = 1;
  var e = Array.isArray;
  return rd = e, rd;
}
var nd, Bh;
function cT() {
  if (Bh) return nd;
  Bh = 1;
  var e = dT(), t = qc();
  function a(r, n, i) {
    var o = n(r);
    return t(r) ? o : e(o, i(r));
  }
  return nd = a, nd;
}
var sd, Gh;
function fT() {
  if (Gh) return sd;
  Gh = 1;
  function e(t, a) {
    for (var r = -1, n = t == null ? 0 : t.length, i = 0, o = []; ++r < n; ) {
      var c = t[r];
      a(c, r, t) && (o[i++] = c);
    }
    return o;
  }
  return sd = e, sd;
}
var ld, zh;
function hT() {
  if (zh) return ld;
  zh = 1;
  function e() {
    return [];
  }
  return ld = e, ld;
}
var id, Qh;
function mT() {
  if (Qh) return id;
  Qh = 1;
  var e = fT(), t = hT(), a = Object.prototype, r = a.propertyIsEnumerable, n = Object.getOwnPropertySymbols, i = n ? function(o) {
    return o == null ? [] : (o = Object(o), e(n(o), function(c) {
      return r.call(o, c);
    }));
  } : t;
  return id = i, id;
}
var od, Kh;
function vT() {
  if (Kh) return od;
  Kh = 1;
  function e(t, a) {
    for (var r = -1, n = Array(t); ++r < t; )
      n[r] = a(r);
    return n;
  }
  return od = e, od;
}
var ud, Xh;
function Yo() {
  if (Xh) return ud;
  Xh = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ud = e, ud;
}
var dd, Zh;
function yT() {
  if (Zh) return dd;
  Zh = 1;
  var e = Oo(), t = Yo(), a = "[object Arguments]";
  function r(n) {
    return t(n) && e(n) == a;
  }
  return dd = r, dd;
}
var cd, Jh;
function pT() {
  if (Jh) return cd;
  Jh = 1;
  var e = yT(), t = Yo(), a = Object.prototype, r = a.hasOwnProperty, n = a.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && r.call(o, "callee") && !n.call(o, "callee");
  };
  return cd = i, cd;
}
var Rl = { exports: {} }, fd, em;
function _T() {
  if (em) return fd;
  em = 1;
  function e() {
    return !1;
  }
  return fd = e, fd;
}
Rl.exports;
var tm;
function wy() {
  return tm || (tm = 1, function(e, t) {
    var a = Cn(), r = _T(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, o = i && i.exports === n, c = o ? a.Buffer : void 0, f = c ? c.isBuffer : void 0, m = f || r;
    e.exports = m;
  }(Rl, Rl.exports)), Rl.exports;
}
var hd, am;
function gT() {
  if (am) return hd;
  am = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function a(r, n) {
    var i = typeof r;
    return n = n ?? e, !!n && (i == "number" || i != "symbol" && t.test(r)) && r > -1 && r % 1 == 0 && r < n;
  }
  return hd = a, hd;
}
var md, rm;
function by() {
  if (rm) return md;
  rm = 1;
  var e = 9007199254740991;
  function t(a) {
    return typeof a == "number" && a > -1 && a % 1 == 0 && a <= e;
  }
  return md = t, md;
}
var vd, nm;
function wT() {
  if (nm) return vd;
  nm = 1;
  var e = Oo(), t = by(), a = Yo(), r = "[object Arguments]", n = "[object Array]", i = "[object Boolean]", o = "[object Date]", c = "[object Error]", f = "[object Function]", m = "[object Map]", v = "[object Number]", p = "[object Object]", g = "[object RegExp]", k = "[object Set]", w = "[object String]", b = "[object WeakMap]", D = "[object ArrayBuffer]", T = "[object DataView]", C = "[object Float32Array]", $ = "[object Float64Array]", P = "[object Int8Array]", G = "[object Int16Array]", R = "[object Int32Array]", E = "[object Uint8Array]", U = "[object Uint8ClampedArray]", H = "[object Uint16Array]", q = "[object Uint32Array]", J = {};
  J[C] = J[$] = J[P] = J[G] = J[R] = J[E] = J[U] = J[H] = J[q] = !0, J[r] = J[n] = J[D] = J[i] = J[T] = J[o] = J[c] = J[f] = J[m] = J[v] = J[p] = J[g] = J[k] = J[w] = J[b] = !1;
  function ge(we) {
    return a(we) && t(we.length) && !!J[e(we)];
  }
  return vd = ge, vd;
}
var yd, sm;
function bT() {
  if (sm) return yd;
  sm = 1;
  function e(t) {
    return function(a) {
      return t(a);
    };
  }
  return yd = e, yd;
}
var Il = { exports: {} };
Il.exports;
var lm;
function kT() {
  return lm || (lm = 1, function(e, t) {
    var a = my(), r = t && !t.nodeType && t, n = r && !0 && e && !e.nodeType && e, i = n && n.exports === r, o = i && a.process, c = function() {
      try {
        var f = n && n.require && n.require("util").types;
        return f || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = c;
  }(Il, Il.exports)), Il.exports;
}
var pd, im;
function ky() {
  if (im) return pd;
  im = 1;
  var e = wT(), t = bT(), a = kT(), r = a && a.isTypedArray, n = r ? t(r) : e;
  return pd = n, pd;
}
var _d, om;
function MT() {
  if (om) return _d;
  om = 1;
  var e = vT(), t = pT(), a = qc(), r = wy(), n = gT(), i = ky(), o = Object.prototype, c = o.hasOwnProperty;
  function f(m, v) {
    var p = a(m), g = !p && t(m), k = !p && !g && r(m), w = !p && !g && !k && i(m), b = p || g || k || w, D = b ? e(m.length, String) : [], T = D.length;
    for (var C in m)
      (v || c.call(m, C)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      k && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      w && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      n(C, T))) && D.push(C);
    return D;
  }
  return _d = f, _d;
}
var gd, um;
function DT() {
  if (um) return gd;
  um = 1;
  var e = Object.prototype;
  function t(a) {
    var r = a && a.constructor, n = typeof r == "function" && r.prototype || e;
    return a === n;
  }
  return gd = t, gd;
}
var wd, dm;
function ST() {
  if (dm) return wd;
  dm = 1;
  function e(t, a) {
    return function(r) {
      return t(a(r));
    };
  }
  return wd = e, wd;
}
var bd, cm;
function TT() {
  if (cm) return bd;
  cm = 1;
  var e = ST(), t = e(Object.keys, Object);
  return bd = t, bd;
}
var kd, fm;
function xT() {
  if (fm) return kd;
  fm = 1;
  var e = DT(), t = TT(), a = Object.prototype, r = a.hasOwnProperty;
  function n(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var c in Object(i))
      r.call(i, c) && c != "constructor" && o.push(c);
    return o;
  }
  return kd = n, kd;
}
var Md, hm;
function OT() {
  if (hm) return Md;
  hm = 1;
  var e = yy(), t = by();
  function a(r) {
    return r != null && t(r.length) && !e(r);
  }
  return Md = a, Md;
}
var Dd, mm;
function AT() {
  if (mm) return Dd;
  mm = 1;
  var e = MT(), t = xT(), a = OT();
  function r(n) {
    return a(n) ? e(n) : t(n);
  }
  return Dd = r, Dd;
}
var Sd, vm;
function CT() {
  if (vm) return Sd;
  vm = 1;
  var e = cT(), t = mT(), a = AT();
  function r(n) {
    return e(n, a, t);
  }
  return Sd = r, Sd;
}
var Td, ym;
function YT() {
  if (ym) return Td;
  ym = 1;
  var e = CT(), t = 1, a = Object.prototype, r = a.hasOwnProperty;
  function n(i, o, c, f, m, v) {
    var p = c & t, g = e(i), k = g.length, w = e(o), b = w.length;
    if (k != b && !p)
      return !1;
    for (var D = k; D--; ) {
      var T = g[D];
      if (!(p ? T in o : r.call(o, T)))
        return !1;
    }
    var C = v.get(i), $ = v.get(o);
    if (C && $)
      return C == o && $ == i;
    var P = !0;
    v.set(i, o), v.set(o, i);
    for (var G = p; ++D < k; ) {
      T = g[D];
      var R = i[T], E = o[T];
      if (f)
        var U = p ? f(E, R, T, o, i, v) : f(R, E, T, i, o, v);
      if (!(U === void 0 ? R === E || m(R, E, c, f, v) : U)) {
        P = !1;
        break;
      }
      G || (G = T == "constructor");
    }
    if (P && !G) {
      var H = i.constructor, q = o.constructor;
      H != q && "constructor" in i && "constructor" in o && !(typeof H == "function" && H instanceof H && typeof q == "function" && q instanceof q) && (P = !1);
    }
    return v.delete(i), v.delete(o), P;
  }
  return Td = n, Td;
}
var xd, pm;
function PT() {
  if (pm) return xd;
  pm = 1;
  var e = bl(), t = Cn(), a = e(t, "DataView");
  return xd = a, xd;
}
var Od, _m;
function $T() {
  if (_m) return Od;
  _m = 1;
  var e = bl(), t = Cn(), a = e(t, "Promise");
  return Od = a, Od;
}
var Ad, gm;
function RT() {
  if (gm) return Ad;
  gm = 1;
  var e = bl(), t = Cn(), a = e(t, "Set");
  return Ad = a, Ad;
}
var Cd, wm;
function IT() {
  if (wm) return Cd;
  wm = 1;
  var e = bl(), t = Cn(), a = e(t, "WeakMap");
  return Cd = a, Cd;
}
var Yd, bm;
function FT() {
  if (bm) return Yd;
  bm = 1;
  var e = PT(), t = Wc(), a = $T(), r = RT(), n = IT(), i = Oo(), o = py(), c = "[object Map]", f = "[object Object]", m = "[object Promise]", v = "[object Set]", p = "[object WeakMap]", g = "[object DataView]", k = o(e), w = o(t), b = o(a), D = o(r), T = o(n), C = i;
  return (e && C(new e(new ArrayBuffer(1))) != g || t && C(new t()) != c || a && C(a.resolve()) != m || r && C(new r()) != v || n && C(new n()) != p) && (C = function($) {
    var P = i($), G = P == f ? $.constructor : void 0, R = G ? o(G) : "";
    if (R)
      switch (R) {
        case k:
          return g;
        case w:
          return c;
        case b:
          return m;
        case D:
          return v;
        case T:
          return p;
      }
    return P;
  }), Yd = C, Yd;
}
var Pd, km;
function ET() {
  if (km) return Pd;
  km = 1;
  var e = eT(), t = gy(), a = uT(), r = YT(), n = FT(), i = qc(), o = wy(), c = ky(), f = 1, m = "[object Arguments]", v = "[object Array]", p = "[object Object]", g = Object.prototype, k = g.hasOwnProperty;
  function w(b, D, T, C, $, P) {
    var G = i(b), R = i(D), E = G ? v : n(b), U = R ? v : n(D);
    E = E == m ? p : E, U = U == m ? p : U;
    var H = E == p, q = U == p, J = E == U;
    if (J && o(b)) {
      if (!o(D))
        return !1;
      G = !0, H = !1;
    }
    if (J && !H)
      return P || (P = new e()), G || c(b) ? t(b, D, T, C, $, P) : a(b, D, E, T, C, $, P);
    if (!(T & f)) {
      var ge = H && k.call(b, "__wrapped__"), we = q && k.call(D, "__wrapped__");
      if (ge || we) {
        var I = ge ? b.value() : b, V = we ? D.value() : D;
        return P || (P = new e()), $(I, V, T, C, P);
      }
    }
    return J ? (P || (P = new e()), r(b, D, T, C, $, P)) : !1;
  }
  return Pd = w, Pd;
}
var $d, Mm;
function NT() {
  if (Mm) return $d;
  Mm = 1;
  var e = ET(), t = Yo();
  function a(r, n, i, o, c) {
    return r === n ? !0 : r == null || n == null || !t(r) && !t(n) ? r !== r && n !== n : e(r, n, i, o, a, c);
  }
  return $d = a, $d;
}
var Rd, Dm;
function LT() {
  if (Dm) return Rd;
  Dm = 1;
  var e = NT();
  function t(a, r) {
    return e(a, r);
  }
  return Rd = t, Rd;
}
var WT = LT();
const qT = /* @__PURE__ */ lS(WT), VT = ["onClick"], HT = ["onClick"], jT = {
  key: 0,
  class: "multiselect__selected__check"
}, UT = {
  __name: "MultiSelect",
  props: {
    id: { type: String, required: !0 },
    modelValue: { type: Array, default: () => [] },
    items: { type: Array, required: !0, default: () => [] },
    label: { type: String, required: !0, default: null },
    multiSelectClass: { type: Object, default: () => ({}) },
    customMultiSelectClass: { type: Object, default: () => ({}) },
    uniqueStyle: { type: Object, default: () => ({}) },
    hasError: { type: Boolean, default: !1 }
  },
  emits: ["blur", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, r = t, n = se(!1), i = se([]), o = se(), c = se({}), f = se("");
    function m(T) {
      const C = {};
      return T.filter(($) => !$ || C[$.id] ? !1 : (C[$.id] = !0, !0));
    }
    function v() {
      const T = i.value.map((C) => C.id);
      T.forEach((C) => {
        c.value[C] = !0;
      }), a.items.forEach((C) => {
        T.includes(C.id) || (c.value[C.id] = !1);
      });
    }
    It(() => {
      p();
    });
    const p = () => {
      a.items.forEach((T) => {
        c.value[T.id] = !1;
      }), Array.isArray(a.modelValue) && a.modelValue.forEach((T) => {
        const C = g(T);
        C && !i.value.some(($) => $.id === C.id) && i.value.push(C);
      }), i.value = m(i.value), v(), r("update:modelValue", i.value);
    }, g = (T) => typeof T == "number" || typeof T == "string" ? a.items.find((C) => C.id === T) : typeof T == "object" && (T == null ? void 0 : T.id) !== void 0 ? a.items.find((C) => C.id === T.id) : null;
    Rt(
      () => a.modelValue,
      (T) => {
        const C = m(Array.isArray(T) ? T : []);
        C.length === i.value.length && C.every((P, G) => qT(P, i.value[G])) || (i.value = [], Object.keys(c.value).forEach((P) => {
          c.value[P] = !1;
        }), Array.isArray(T) && T.forEach((P) => {
          const G = g(P);
          G && !i.value.some((R) => R.id === G.id) && i.value.push(G);
        }), i.value = m(i.value), v(), r("update:modelValue", i.value));
      },
      { immediate: !0 }
    );
    const k = ee(() => f.value ? a.items.filter(
      (T) => T.name.toLowerCase().includes(f.value.toLowerCase())
    ) : a.items);
    MS([o], ["multiselect__outside__click__action", "multiselect__selected__check", "textField__default__multiSelect__icon"], () => {
      n.value = !1;
    });
    const w = () => {
      n.value = !n.value;
    };
    function b(T) {
      i.value.some((C) => C.id === T.id) ? i.value = i.value.filter((C) => C.id !== T.id) : i.value.push(T), i.value = m(i.value), v(), r("blur", a.id), r("update:modelValue", i.value);
    }
    function D(T) {
      n.value = !1, i.value = i.value.filter((C) => C.id !== T.id), i.value = m(i.value), v(), r("blur", a.id), r("update:modelValue", i.value);
    }
    return (T, C) => {
      var $, P, G, R, E, U, H, q, J, ge, we, I, V, N, te, me, K, Y, de, Q, j, _, S, ne, x, ve, A, st, B, le, re, ke, M, ae, $e, he, qe, Fe, L, ie, Ye, lt, Ct, De, Yt, Xe, ea, Ue, ia, ya, ta, oa, aa, Ht, W, ce, Pe, X, ye, Te, St, pt, Me, ua, jt, Pt, Tt, Le, Ga, Ge, Da, wr, Fa, _t, zt, Ut, ct, Vt;
      return F(), z("div", {
        ref_key: "multiselectRef",
        ref: o,
        class: fe([
          ($ = e.multiSelectClass) == null ? void 0 : $.mainWrapper,
          (P = e.customMultiSelectClass) == null ? void 0 : P.mainWrapper,
          (G = e.uniqueStyle) == null ? void 0 : G.mainWrapper
        ])
      }, [
        Se("div", {
          onClick: w,
          class: fe([
            (R = e.multiSelectClass) == null ? void 0 : R.field,
            (E = e.customMultiSelectClass) == null ? void 0 : E.field,
            (U = e.uniqueStyle) == null ? void 0 : U.field,
            { textField__default__error: e.hasError }
          ]),
          tabindex: "0"
        }, [
          Se("div", {
            class: fe([
              (q = (H = e.multiSelectClass) == null ? void 0 : H.labelAndIcon) == null ? void 0 : q.wrapper,
              (ge = (J = e.customMultiSelectClass) == null ? void 0 : J.labelAndIcon) == null ? void 0 : ge.wrapper,
              (I = (we = e.uniqueStyle) == null ? void 0 : we.labelAndIcon) == null ? void 0 : I.wrapper
            ])
          }, [
            i.value.length === 0 ? (F(), z("div", {
              key: 0,
              class: fe([
                (N = (V = e.multiSelectClass) == null ? void 0 : V.labelAndIcon) == null ? void 0 : N.label,
                (me = (te = e.customMultiSelectClass) == null ? void 0 : te.labelAndIcon) == null ? void 0 : me.label,
                (Y = (K = e.uniqueStyle) == null ? void 0 : K.labelAndIcon) == null ? void 0 : Y.label
              ])
            }, yt(e.label), 3)) : (F(), z("div", {
              key: 1,
              class: fe([
                (_ = (j = (Q = (de = e.multiSelectClass) == null ? void 0 : de.labelAndIcon) == null ? void 0 : Q.tag) == null ? void 0 : j.view) == null ? void 0 : _.view,
                (ve = (x = (ne = (S = e.customMultiSelectClass) == null ? void 0 : S.labelAndIcon) == null ? void 0 : ne.tag) == null ? void 0 : x.view) == null ? void 0 : ve.view,
                (le = (B = (st = (A = e.uniqueStyle) == null ? void 0 : A.labelAndIcon) == null ? void 0 : st.tag) == null ? void 0 : B.view) == null ? void 0 : le.view
              ])
            }, [
              Se("div", {
                id: "multiselect",
                class: fe([
                  (ae = (M = (ke = (re = e.multiSelectClass) == null ? void 0 : re.labelAndIcon) == null ? void 0 : ke.tag) == null ? void 0 : M.view) == null ? void 0 : ae.wrapper,
                  (Fe = (qe = (he = ($e = e.customMultiSelectClass) == null ? void 0 : $e.labelAndIcon) == null ? void 0 : he.tag) == null ? void 0 : qe.view) == null ? void 0 : Fe.wrapper,
                  (lt = (Ye = (ie = (L = e.uniqueStyle) == null ? void 0 : L.labelAndIcon) == null ? void 0 : ie.tag) == null ? void 0 : Ye.view) == null ? void 0 : lt.wrapper
                ])
              }, [
                (F(!0), z(We, null, ut(i.value, (xt, ra) => {
                  var Ea, Na, Ot, Sa, La, Qt, na, Ta, Wa, qa, Va, et, pa, Ha, xa, za, Oa, br, kr, Mr, Dr, Sr, ar, rr, Tr, xr, Or, nr, Ar, Aa, ja, sr, Ca, Kt, Cr, Yr, Pr, $r, Rr, Ir, Fr, Er, Qa, Nr, lr, Lr, Wr, qr, Vr, Hr, jr, Ur, Br, Gr;
                  return F(), z("div", {
                    key: xt.id,
                    class: fe([
                      (Sa = (Ot = (Na = (Ea = e.multiSelectClass) == null ? void 0 : Ea.labelAndIcon) == null ? void 0 : Na.tag) == null ? void 0 : Ot.view) == null ? void 0 : Sa.container,
                      (Ta = (na = (Qt = (La = e.customMultiSelectClass) == null ? void 0 : La.labelAndIcon) == null ? void 0 : Qt.tag) == null ? void 0 : na.view) == null ? void 0 : Ta.container,
                      (et = (Va = (qa = (Wa = e.uniqueStyle) == null ? void 0 : Wa.labelAndIcon) == null ? void 0 : qa.tag) == null ? void 0 : Va.view) == null ? void 0 : et.container
                    ])
                  }, [
                    Se("span", {
                      class: fe([
                        (za = (xa = (Ha = (pa = e.multiSelectClass) == null ? void 0 : pa.labelAndIcon) == null ? void 0 : Ha.tag) == null ? void 0 : xa.view) == null ? void 0 : za.value,
                        (Mr = (kr = (br = (Oa = e.customMultiSelectClass) == null ? void 0 : Oa.labelAndIcon) == null ? void 0 : br.tag) == null ? void 0 : kr.view) == null ? void 0 : Mr.value,
                        (rr = (ar = (Sr = (Dr = e.uniqueStyle) == null ? void 0 : Dr.labelAndIcon) == null ? void 0 : Sr.tag) == null ? void 0 : ar.view) == null ? void 0 : rr.value
                      ])
                    }, yt(xt.name), 3),
                    Se("span", {
                      onClick: ul((Yn) => D(xt), ["stop"]),
                      class: fe([
                        (Ar = (nr = (Or = (xr = (Tr = e.multiSelectClass) == null ? void 0 : Tr.labelAndIcon) == null ? void 0 : xr.tag) == null ? void 0 : Or.view) == null ? void 0 : nr.remove) == null ? void 0 : Ar.container,
                        (Kt = (Ca = (sr = (ja = (Aa = e.customMultiSelectClass) == null ? void 0 : Aa.labelAndIcon) == null ? void 0 : ja.tag) == null ? void 0 : sr.view) == null ? void 0 : Ca.remove) == null ? void 0 : Kt.container,
                        (Rr = ($r = (Pr = (Yr = (Cr = e.uniqueStyle) == null ? void 0 : Cr.labelAndIcon) == null ? void 0 : Yr.tag) == null ? void 0 : Pr.view) == null ? void 0 : $r.remove) == null ? void 0 : Rr.container
                      ])
                    }, [
                      Se("span", {
                        class: fe([
                          (Nr = (Qa = (Er = (Fr = (Ir = e.multiSelectClass) == null ? void 0 : Ir.labelAndIcon) == null ? void 0 : Fr.tag) == null ? void 0 : Er.view) == null ? void 0 : Qa.remove) == null ? void 0 : Nr.value,
                          (Vr = (qr = (Wr = (Lr = (lr = e.customMultiSelectClass) == null ? void 0 : lr.labelAndIcon) == null ? void 0 : Lr.tag) == null ? void 0 : Wr.view) == null ? void 0 : qr.remove) == null ? void 0 : Vr.value,
                          (Gr = (Br = (Ur = (jr = (Hr = e.uniqueStyle) == null ? void 0 : Hr.labelAndIcon) == null ? void 0 : jr.tag) == null ? void 0 : Ur.view) == null ? void 0 : Br.remove) == null ? void 0 : Gr.value
                        ])
                      }, "X", 2)
                    ], 10, VT)
                  ], 2);
                }), 128))
              ], 2)
            ], 2)),
            Se("span", {
              onClick: C[0] || (C[0] = (xt) => n.value = !n.value),
              class: "textField__default__multiSelect__icon"
            }, [
              n.value ? (F(), z("svg", {
                key: 1,
                class: fe([
                  (Me = (pt = (St = e.multiSelectClass) == null ? void 0 : St.labelAndIcon) == null ? void 0 : pt.icon) == null ? void 0 : Me.icon,
                  (Pt = (jt = (ua = e.customMultiSelectClass) == null ? void 0 : ua.labelAndIcon) == null ? void 0 : jt.icon) == null ? void 0 : Pt.icon,
                  (Ga = (Le = (Tt = e.uniqueStyle) == null ? void 0 : Tt.labelAndIcon) == null ? void 0 : Le.icon) == null ? void 0 : Ga.icon
                ]),
                viewBox: "0 0 16 16",
                fill: "none"
              }, [
                Se("path", {
                  class: fe([
                    (wr = (Da = (Ge = e.multiSelectClass) == null ? void 0 : Ge.labelAndIcon) == null ? void 0 : Da.icon) == null ? void 0 : wr.path,
                    (zt = (_t = (Fa = e.customMultiSelectClass) == null ? void 0 : Fa.labelAndIcon) == null ? void 0 : _t.icon) == null ? void 0 : zt.path,
                    (Vt = (ct = (Ut = e.uniqueStyle) == null ? void 0 : Ut.labelAndIcon) == null ? void 0 : ct.icon) == null ? void 0 : Vt.path
                  ]),
                  d: "M3 10L8 5L13 10",
                  stroke: "#2E90FA",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, null, 2)
              ], 2)) : (F(), z("svg", {
                key: 0,
                class: fe([
                  (Yt = (De = (Ct = e.multiSelectClass) == null ? void 0 : Ct.labelAndIcon) == null ? void 0 : De.icon) == null ? void 0 : Yt.icon,
                  (Ue = (ea = (Xe = e.customMultiSelectClass) == null ? void 0 : Xe.labelAndIcon) == null ? void 0 : ea.icon) == null ? void 0 : Ue.icon,
                  (ta = (ya = (ia = e.uniqueStyle) == null ? void 0 : ia.labelAndIcon) == null ? void 0 : ya.icon) == null ? void 0 : ta.icon
                ]),
                viewBox: "0 0 20 20",
                fill: "none"
              }, [
                Se("path", {
                  class: fe([
                    (Ht = (aa = (oa = e.multiSelectClass) == null ? void 0 : oa.labelAndIcon) == null ? void 0 : aa.icon) == null ? void 0 : Ht.path,
                    (Pe = (ce = (W = e.customMultiSelectClass) == null ? void 0 : W.labelAndIcon) == null ? void 0 : ce.icon) == null ? void 0 : Pe.path,
                    (Te = (ye = (X = e.uniqueStyle) == null ? void 0 : X.labelAndIcon) == null ? void 0 : ye.icon) == null ? void 0 : Te.path
                  ]),
                  d: "M16.25 7.5L10 13.75L3.75 7.5",
                  stroke: "#2E90FA",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, null, 2)
              ], 2))
            ])
          ], 2)
        ], 2),
        sa(Ls, {
          name: "slide",
          mode: "out-in"
        }, {
          default: je(() => {
            var xt, ra, Ea, Na, Ot, Sa, La, Qt, na, Ta, Wa, qa, Va, et, pa, Ha, xa, za;
            return [
              n.value ? (F(), z("div", {
                key: 0,
                class: fe(["multiselect__dropdown-list", [
                  (Ea = (ra = (xt = e.multiSelectClass) == null ? void 0 : xt.labelAndIcon) == null ? void 0 : ra.dropdown) == null ? void 0 : Ea.wrapper,
                  (Sa = (Ot = (Na = e.customMultiSelectClass) == null ? void 0 : Na.labelAndIcon) == null ? void 0 : Ot.dropdown) == null ? void 0 : Sa.wrapper,
                  (na = (Qt = (La = e.uniqueStyle) == null ? void 0 : La.labelAndIcon) == null ? void 0 : Qt.dropdown) == null ? void 0 : na.wrapper
                ]])
              }, [
                Rs(Se("input", {
                  class: fe([
                    (qa = (Wa = (Ta = e.multiSelectClass) == null ? void 0 : Ta.labelAndIcon) == null ? void 0 : Wa.dropdown) == null ? void 0 : qa.input,
                    (pa = (et = (Va = e.customMultiSelectClass) == null ? void 0 : Va.labelAndIcon) == null ? void 0 : et.dropdown) == null ? void 0 : pa.input,
                    (za = (xa = (Ha = e.uniqueStyle) == null ? void 0 : Ha.labelAndIcon) == null ? void 0 : xa.dropdown) == null ? void 0 : za.input
                  ]),
                  "onUpdate:modelValue": C[1] || (C[1] = (Oa) => f.value = Oa),
                  type: "text",
                  name: "search",
                  placeholder: "search item here"
                }, null, 2), [
                  [xm, f.value]
                ]),
                (F(!0), z(We, null, ut(k.value, (Oa) => {
                  var br, kr, Mr, Dr, Sr, ar, rr, Tr, xr, Or, nr, Ar, Aa, ja, sr, Ca, Kt, Cr, Yr, Pr, $r, Rr, Ir, Fr, Er, Qa, Nr, lr, Lr, Wr, qr, Vr, Hr, jr, Ur, Br, Gr, Yn, ts, as, rs, ns, ss, ln, on, ls, Pn, $n, is, os, us, ds, Rn, it, ir, or, cs, In, fs, hs, zr, Ya, un, ms, _a, vs, dn, ys, ps, _s, Qr, cn, gs, ws, bs, Fn, ks, Ms, Ds, Ss, Ts;
                  return F(), z("div", {
                    key: Oa.id,
                    onClick: (Vs) => b(Oa),
                    class: fe([
                      (Dr = (Mr = (kr = (br = e.multiSelectClass) == null ? void 0 : br.labelAndIcon) == null ? void 0 : kr.dropdown) == null ? void 0 : Mr.container) == null ? void 0 : Dr.container,
                      (Tr = (rr = (ar = (Sr = e.customMultiSelectClass) == null ? void 0 : Sr.labelAndIcon) == null ? void 0 : ar.dropdown) == null ? void 0 : rr.container) == null ? void 0 : Tr.container,
                      (Ar = (nr = (Or = (xr = e.uniqueStyle) == null ? void 0 : xr.labelAndIcon) == null ? void 0 : Or.dropdown) == null ? void 0 : nr.container) == null ? void 0 : Ar.container
                    ])
                  }, [
                    c.value[Oa.id] === !0 ? (F(), z("span", jT, [
                      (F(), z("svg", {
                        class: fe([
                          (Kt = (Ca = (sr = (ja = (Aa = e.multiSelectClass) == null ? void 0 : Aa.labelAndIcon) == null ? void 0 : ja.dropdown) == null ? void 0 : sr.container) == null ? void 0 : Ca.icon) == null ? void 0 : Kt.icon,
                          (Rr = ($r = (Pr = (Yr = (Cr = e.customMultiSelectClass) == null ? void 0 : Cr.labelAndIcon) == null ? void 0 : Yr.dropdown) == null ? void 0 : Pr.container) == null ? void 0 : $r.icon) == null ? void 0 : Rr.icon,
                          (Nr = (Qa = (Er = (Fr = (Ir = e.uniqueStyle) == null ? void 0 : Ir.labelAndIcon) == null ? void 0 : Fr.dropdown) == null ? void 0 : Er.container) == null ? void 0 : Qa.icon) == null ? void 0 : Nr.icon
                        ]),
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        Se("path", {
                          class: fe([
                            (Vr = (qr = (Wr = (Lr = (lr = e.multiSelectClass) == null ? void 0 : lr.labelAndIcon) == null ? void 0 : Lr.dropdown) == null ? void 0 : Wr.container) == null ? void 0 : qr.icon) == null ? void 0 : Vr.path[0],
                            (Gr = (Br = (Ur = (jr = (Hr = e.customMultiSelectClass) == null ? void 0 : Hr.labelAndIcon) == null ? void 0 : jr.dropdown) == null ? void 0 : Ur.container) == null ? void 0 : Br.icon) == null ? void 0 : Gr.path[0],
                            (ns = (rs = (as = (ts = (Yn = e.uniqueStyle) == null ? void 0 : Yn.labelAndIcon) == null ? void 0 : ts.dropdown) == null ? void 0 : as.container) == null ? void 0 : rs.icon) == null ? void 0 : ns.path[0]
                          ]),
                          d: "M2 2h12v12H2V2z",
                          fill: "blue",
                          stroke: "white",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, null, 2),
                        Se("path", {
                          class: fe([
                            (Pn = (ls = (on = (ln = (ss = e.multiSelectClass) == null ? void 0 : ss.labelAndIcon) == null ? void 0 : ln.dropdown) == null ? void 0 : on.container) == null ? void 0 : ls.icon) == null ? void 0 : Pn.path[1],
                            (ds = (us = (os = (is = ($n = e.customMultiSelectClass) == null ? void 0 : $n.labelAndIcon) == null ? void 0 : is.dropdown) == null ? void 0 : os.container) == null ? void 0 : us.icon) == null ? void 0 : ds.path[1],
                            (cs = (or = (ir = (it = (Rn = e.uniqueStyle) == null ? void 0 : Rn.labelAndIcon) == null ? void 0 : it.dropdown) == null ? void 0 : ir.container) == null ? void 0 : or.icon) == null ? void 0 : cs.path[1]
                          ]),
                          d: "M4 7.94922L6.47487 10.4241L11.4246 5.47435",
                          stroke: "white",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, null, 2)
                      ], 2))
                    ])) : (F(), z("span", {
                      key: 1,
                      class: fe([[
                        (zr = (hs = (fs = (In = e.multiSelectClass) == null ? void 0 : In.labelAndIcon) == null ? void 0 : fs.dropdown) == null ? void 0 : hs.container) == null ? void 0 : zr.box,
                        (_a = (ms = (un = (Ya = e.customMultiSelectClass) == null ? void 0 : Ya.labelAndIcon) == null ? void 0 : un.dropdown) == null ? void 0 : ms.container) == null ? void 0 : _a.box,
                        (ps = (ys = (dn = (vs = e.uniqueStyle) == null ? void 0 : vs.labelAndIcon) == null ? void 0 : dn.dropdown) == null ? void 0 : ys.container) == null ? void 0 : ps.box
                      ], "multiselect__selected__check"])
                    }, null, 2)),
                    Se("span", {
                      class: fe([
                        (gs = (cn = (Qr = (_s = e.multiSelectClass) == null ? void 0 : _s.labelAndIcon) == null ? void 0 : Qr.dropdown) == null ? void 0 : cn.container) == null ? void 0 : gs.item,
                        (ks = (Fn = (bs = (ws = e.customMultiSelectClass) == null ? void 0 : ws.labelAndIcon) == null ? void 0 : bs.dropdown) == null ? void 0 : Fn.container) == null ? void 0 : ks.item,
                        (Ts = (Ss = (Ds = (Ms = e.uniqueStyle) == null ? void 0 : Ms.labelAndIcon) == null ? void 0 : Ds.dropdown) == null ? void 0 : Ss.container) == null ? void 0 : Ts.item
                      ])
                    }, yt(Oa.name), 3)
                  ], 10, HT);
                }), 128))
              ], 2)) : ue("", !0)
            ];
          }),
          _: 1
        })
      ], 2);
    };
  }
}, BT = /* @__PURE__ */ wl(UT, [["__scopeId", "data-v-ec32f3d7"]]), GT = ["type"], zT = {
  __name: "SubmitButton",
  props: {
    content: { type: String, required: !0 },
    type: { type: String, default: "button" },
    wrapperClass: { type: Array, default: "" },
    buttonClass: { type: Array, default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = t;
    function r(n) {
      a("click", n);
    }
    return (n, i) => (F(), z("div", {
      class: fe(e.wrapperClass)
    }, [
      Se("button", {
        class: fe(e.buttonClass),
        type: e.type,
        onClick: r
      }, yt(e.content), 11, GT)
    ], 2));
  }
}, QT = /* @__PURE__ */ wl(zT, [["__scopeId", "data-v-4a4021cf"]]), KT = {
  required: ({ fieldName: e }) => `${e || "This field"} is required.`,
  email: ({ fieldName: e }) => `Please enter a valid email address for ${e || "this field"}.`,
  minLength: ({ fieldName: e, value: t }) => `${e || "This field"} must be at least ${t} characters long.`,
  maxLength: ({ fieldName: e, value: t }) => `${e || "This field"} cannot exceed ${t} characters.`,
  minValue: ({ fieldName: e, value: t }) => `${e || "This field"} must be at least ${t}.`,
  maxValue: ({ fieldName: e, value: t }) => `${e || "This field"} cannot exceed ${t}.`,
  sameAs: ({ fieldName: e, value: t }) => `${e || "This field"} does not match ${t}`,
  between: ({ fieldName: e, value: t }) => {
    const [a, r] = t || [];
    return `${e || "This field"} must be between ${a} and ${r}.`;
  },
  url: ({ fieldName: e }) => `Please enter a valid URL for ${e || "this field"}.`,
  pattern: ({ fieldName: e }) => `${e || "This field"} does not match the required pattern.`,
  integer: ({ fieldName: e }) => `${e || "This field"} must be an integer.`,
  decimal: ({ fieldName: e }) => `${e || "This field"} must be a decimal number.`,
  // Add more as you implement additional rules
  custom: ({ message: e }) => e || "This field is invalid."
  // Default for custom validators
};
function Ka(e, t = {}, a = null) {
  if (a) return a;
  const r = KT[e];
  return typeof r == "function" ? r(t) : "Invalid field.";
}
function Sm(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function Ql(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(a), !0).forEach(function(r) {
      XT(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Sm(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function XT(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function oo(e) {
  return typeof e == "function";
}
function Kd(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Po(e) {
  return oo(e.$validator) ? Ql({}, e) : {
    $validator: e
  };
}
function My(e) {
  return typeof e == "object" ? e.$valid : e;
}
function Dy(e) {
  return e.$validator || e;
}
function ZT(e, t) {
  if (!Kd(e)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);
  if (!Kd(t) && !oo(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Po(t);
  return a.$params = Ql(Ql({}, a.$params || {}), e), a;
}
function JT(e, t) {
  if (!oo(e) && typeof y(e) != "string") throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);
  if (!Kd(t) && !oo(t)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  const a = Po(t);
  return a.$message = e, a;
}
function ex(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  const a = Po(e);
  return Ql(Ql({}, a), {}, {
    $async: !0,
    $watchTargets: t
  });
}
function tx(e) {
  return {
    $validator(t) {
      for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
        r[n - 1] = arguments[n];
      return y(t).reduce((i, o, c) => {
        const f = Object.entries(o).reduce((m, v) => {
          let [p, g] = v;
          const k = e[p] || {}, w = Object.entries(k).reduce((b, D) => {
            let [T, C] = D;
            const P = Dy(C).call(this, g, o, c, ...r), G = My(P);
            if (b.$data[T] = P, b.$data.$invalid = !G || !!b.$data.$invalid, b.$data.$error = b.$data.$invalid, !G) {
              let R = C.$message || "";
              const E = C.$params || {};
              typeof R == "function" && (R = R({
                $pending: !1,
                $invalid: !G,
                $params: E,
                $model: g,
                $response: P
              })), b.$errors.push({
                $property: p,
                $message: R,
                $params: E,
                $response: P,
                $model: g,
                $pending: !1,
                $validator: T
              });
            }
            return {
              $valid: b.$valid && G,
              $data: b.$data,
              $errors: b.$errors
            };
          }, {
            $valid: !0,
            $data: {},
            $errors: []
          });
          return m.$data[p] = w.$data, m.$errors[p] = w.$errors, {
            $valid: m.$valid && w.$valid,
            $data: m.$data,
            $errors: m.$errors
          };
        }, {
          $valid: !0,
          $data: {},
          $errors: {}
        });
        return {
          $valid: i.$valid && f.$valid,
          $data: i.$data.concat(f.$data),
          $errors: i.$errors.concat(f.$errors)
        };
      }, {
        $valid: !0,
        $data: [],
        $errors: []
      });
    },
    $message: (t) => {
      let {
        $response: a
      } = t;
      return a ? a.$errors.map((r) => Object.values(r).map((n) => n.map((i) => i.$message)).reduce((n, i) => n.concat(i), [])) : [];
    }
  };
}
const Jn = (e) => {
  if (e = y(e), Array.isArray(e)) return !!e.length;
  if (e == null)
    return !1;
  if (e === !1)
    return !0;
  if (e instanceof Date)
    return !isNaN(e.getTime());
  if (typeof e == "object") {
    for (let t in e) return !0;
    return !1;
  }
  return !!String(e).length;
}, Vc = (e) => (e = y(e), Array.isArray(e) ? e.length : typeof e == "object" ? Object.keys(e).length : String(e).length);
function es() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return (r) => (r = y(r), !Jn(r) || t.every((n) => (n.lastIndex = 0, n.test(r))));
}
var Xa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  forEach: tx,
  len: Vc,
  normalizeValidatorObject: Po,
  regex: es,
  req: Jn,
  unwrap: y,
  unwrapNormalizedValidator: Dy,
  unwrapValidatorResponse: My,
  withAsync: ex,
  withMessage: JT,
  withParams: ZT
});
es(/^[a-zA-Z]*$/);
es(/^[a-zA-Z0-9]*$/);
es(/^\d*(\.\d+)?$/);
function ax(e, t) {
  return (a) => !Jn(a) || (!/\s/.test(a) || a instanceof Date) && +y(e) <= +a && +y(t) >= +a;
}
function rx(e, t) {
  return {
    $validator: ax(e, t),
    $message: (a) => {
      let {
        $params: r
      } = a;
      return `The value must be between ${r.min} and ${r.max}`;
    },
    $params: {
      min: e,
      max: t,
      type: "between"
    }
  };
}
const nx = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
var sx = es(nx), lx = {
  $validator: sx,
  $message: "Value is not a valid email address",
  $params: {
    type: "email"
  }
};
function ix(e) {
  return (t) => !Jn(t) || Vc(t) <= y(e);
}
function ox(e) {
  return {
    $validator: ix(e),
    $message: (t) => {
      let {
        $params: a
      } = t;
      return `The maximum length allowed is ${a.max}`;
    },
    $params: {
      max: e,
      type: "maxLength"
    }
  };
}
function ux(e) {
  return (t) => !Jn(t) || Vc(t) >= y(e);
}
function dx(e) {
  return {
    $validator: ux(e),
    $message: (t) => {
      let {
        $params: a
      } = t;
      return `This field should be at least ${a.min} characters long`;
    },
    $params: {
      min: e,
      type: "minLength"
    }
  };
}
function cx(e) {
  return typeof e == "string" && (e = e.trim()), Jn(e);
}
var fx = {
  $validator: cx,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
function hx(e) {
  return (t) => y(t) === y(e);
}
function mx(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "other";
  return {
    $validator: hx(e),
    $message: (a) => `The value must be equal to the ${t} value`,
    $params: {
      equalTo: e,
      otherName: t,
      type: "sameAs"
    }
  };
}
const vx = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
var yx = es(vx), px = {
  $validator: yx,
  $message: "The value is not a valid URL address",
  $params: {
    type: "url"
  }
};
function _x(e) {
  return (t) => !Jn(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +y(e);
}
function gx(e) {
  return {
    $validator: _x(e),
    $message: (t) => {
      let {
        $params: a
      } = t;
      return `The minimum value allowed is ${a.min}`;
    },
    $params: {
      min: e,
      type: "minValue"
    }
  };
}
function wx(e) {
  return (t) => !Jn(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +y(e);
}
var bx = (e) => ({
  $validator: wx(e),
  $message: (t) => {
    let {
      $params: a
    } = t;
    return `The maximum value allowed is ${a.max}`;
  },
  $params: {
    max: e,
    type: "maxValue"
  }
}), kx = es(/(^[0-9]*$)|(^-[0-9]+$)/), Mx = {
  $validator: kx,
  $message: "Value is not an integer",
  $params: {
    type: "integer"
  }
}, Dx = es(/^[-]?\d*(\.\d+)?$/), Sx = {
  $validator: Dx,
  $message: "Value must be decimal",
  $params: {
    type: "decimal"
  }
};
function Tx(e, t) {
  const a = {};
  return e.forEach((r) => {
    var i;
    const n = r.fieldName || r.label;
    a[r.forType] = {}, (i = r.validations) == null || i.forEach((o) => {
      const c = {
        fieldName: n,
        value: o.value,
        message: o.message
      };
      switch (o.type) {
        case "required":
          a[r.forType].required = Xa.withMessage(
            () => Ka("required", c, o.message),
            fx
          );
          break;
        case "email":
          a[r.forType].email = Xa.withMessage(
            () => Ka("email", c, o.message),
            lx
          );
          break;
        case "minLength":
          a[r.forType].minLength = Xa.withMessage(
            () => Ka("minLength", c, o.message),
            dx(o.value)
          );
          break;
        case "maxLength":
          a[r.forType].maxLength = Xa.withMessage(
            () => Ka("maxLength", c, o.message),
            ox(o.value)
          );
          break;
        case "minValue":
          a[r.forType].minValue = Xa.withMessage(
            () => Ka("minValue", c, o.message),
            gx(o.value)
          );
          break;
        case "maxValue":
          a[r.forType].maxValue = Xa.withMessage(
            () => Ka("maxValue", c, o.message),
            bx(o.value)
          );
          break;
        case "sameAs":
          a[r.forType].sameAs = Xa.withMessage(
            () => Ka("sameAs", c, o.message),
            mx(ee(() => t[o.value]))
          );
          break;
        case "integer":
          a[r.forType].integer = Xa.withMessage(
            () => Ka("integer", c, o.message),
            Mx
          );
          break;
        case "decimal":
          console.log("just checking"), a[r.forType].decimal = Xa.withMessage(
            () => Ka("decimal", c, o.message),
            Sx
          );
          break;
        case "between":
          Array.isArray(o.value) && o.value.length === 2 && (a[r.forType].between = Xa.withMessage(
            () => Ka("between", c, o.message),
            rx(o.value[0], o.value[1])
          ));
          break;
        case "url":
          a[r.forType].url = Xa.withMessage(
            () => Ka("url", c, o.message),
            px
          );
          break;
        case "custom":
          a[r.forType].custom = Xa.withMessage(
            () => Ka("custom", c, o.message),
            (f) => o.customValidator(f, t)
          );
          break;
        default:
          console.warn(`Unsupported validation type: ${o.type}`);
      }
    });
  }), a;
}
const xx = {
  __name: "FieldErrorMessages",
  props: {
    wrapperStyle: {
      type: Array,
      default: () => []
    },
    messageStyle: {
      type: Array,
      default: () => []
    },
    errors: {
      type: Array,
      // Vuelidate $errors is always array
      default: () => []
    },
    backendError: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, a) => {
      var r;
      return F(), z("div", {
        class: fe(e.wrapperStyle)
      }, [
        Se("div", {
          class: fe(e.messageStyle)
        }, yt(((r = e.errors[0]) == null ? void 0 : r.$message) || e.backendError || " "), 3)
      ], 2);
    };
  }
}, Ox = /* @__PURE__ */ wl(xx, [["__scopeId", "data-v-d236b454"]]), Vn = {
  textField: "textField",
  // Standard single-line input (text, email, number, etc.)
  textArea: "textArea",
  // Multi-line text input
  selectField: "selectField",
  // Single-select dropdown
  radioField: "radioField",
  // Radio group input
  multiSelect: "multiSelect",
  // Multi-select input
  passwordTextField: "passwordTextField",
  // Password input (masked)
  datePickerField: "datePickerField"
  // Date/time picker
}, Px = {
  __name: "index",
  props: {
    /**
     * Form schema object describing fields and configuration.
     * @type {Object}
     * @required
     */
    schema: {
      type: Object,
      required: !0
    },
    /**
     * Form model data (used with v-model).
     * @type {Object}
     * @required
     */
    modelValue: { type: Object, required: !0 }
  },
  emits: ["update:modelValue", "submit"],
  setup(e, { expose: t, emit: a }) {
    const r = e, n = xn({ ...r.modelValue });
    t({
      handleSubmit: v
    }), Rt(
      () => r.modelValue,
      (w) => {
        Object.assign(n, w);
      },
      { deep: !0 }
    );
    const i = a, o = A_({});
    Tm(() => {
      c();
    });
    function c() {
      var w, b, D;
      for (let T = 0; T < ((w = r.schema) == null ? void 0 : w.fields.length); T++)
        ((b = r.schema) == null ? void 0 : b.fields[T].insetIconType) !== null && H_((D = r.schema) == null ? void 0 : D.fields[T].insetIconType, T, o);
    }
    const f = (w, b) => {
      n[w] = b, i("update:modelValue", { ...n });
    }, m = async (w) => {
      var b;
      await va(), (b = k.value[w]) == null || b.$touch(), await k.value.$validate();
    };
    async function v() {
      console.log("check after", n), await k.value.$validate() ? i("submit", { ...n }) : k.value.$touch(), console.log("check after", n);
    }
    function p(w) {
      return w.fieldType === Vn.textField && ["text", "number", "email", "url", "password", "tel"].includes(w.type);
    }
    const g = ee(() => Tx(r.schema.fields, n)), k = V_(g, n);
    return (w, b) => {
      var D, T, C, $, P, G, R, E, U, H, q, J, ge, we, I, V, N, te, me, K, Y, de, Q, j, _, S, ne, x, ve;
      return F(), z("div", {
        class: fe([
          (D = y(mt)) == null ? void 0 : D.mainDiv,
          (C = (T = e.schema) == null ? void 0 : T.style) == null ? void 0 : C.mainDiv
        ])
      }, [
        Se("div", {
          class: fe([
            (P = ($ = y(mt)) == null ? void 0 : $.field) == null ? void 0 : P.mainDiv,
            (E = (R = (G = e.schema) == null ? void 0 : G.style) == null ? void 0 : R.field) == null ? void 0 : E.mainDiv
          ])
        }, [
          (F(!0), z(We, null, ut((U = e.schema) == null ? void 0 : U.fields, (A, st) => {
            var B, le, re, ke, M, ae, $e, he, qe, Fe, L, ie, Ye, lt, Ct, De, Yt, Xe, ea, Ue, ia, ya, ta, oa, aa, Ht, W, ce, Pe, X, ye, Te, St, pt, Me, ua, jt, Pt, Tt, Le, Ga, Ge, Da, wr, Fa, _t, zt, Ut, ct, Vt, xt, ra, Ea, Na, Ot, Sa, La, Qt, na, Ta, Wa, qa, Va, et, pa, Ha, xa, za, Oa, br, kr, Mr, Dr, Sr, ar, rr, Tr, xr, Or, nr, Ar, Aa, ja, sr, Ca, Kt, Cr, Yr, Pr, $r, Rr, Ir, Fr, Er, Qa, Nr, lr, Lr, Wr, qr, Vr, Hr, jr, Ur, Br, Gr, Yn, ts, as, rs, ns, ss, ln, on, ls, Pn, $n, is, os, us, ds, Rn, it, ir, or, cs, In, fs, hs, zr, Ya, un, ms, _a, vs, dn, ys, ps, _s, Qr, cn, gs, ws, bs, Fn, ks, Ms, Ds, Ss, Ts, Vs, li, fn, ii, Hs, oi, js, ui, di, ci, fi, kl, hi, Ml, ft, mi, vi, Dl, yi, pi, _i, En, gi, wi, bi, xs, Os, Us, ki, Sl, Mi, Bs, Gs, zs, Di, Si, Ti, xi, Oi, Ai, Ci, Yi, Pi, $i, Tl, Ri, Ii, Pa, Kr, xl, Fi, Ol;
            return F(), z("div", {
              class: fe([
                (le = (B = y(mt)) == null ? void 0 : B.field) == null ? void 0 : le.wrapper,
                (M = (ke = (re = e.schema) == null ? void 0 : re.style) == null ? void 0 : ke.field) == null ? void 0 : M.wrapper,
                (ae = A == null ? void 0 : A.customStyle) == null ? void 0 : ae.wrapper
              ]),
              key: A.forType
            }, [
              Se("div", {
                class: fe([
                  (he = ($e = y(mt)) == null ? void 0 : $e.field) == null ? void 0 : he.container,
                  (L = (Fe = (qe = e.schema) == null ? void 0 : qe.style) == null ? void 0 : Fe.field) == null ? void 0 : L.container,
                  (ie = A == null ? void 0 : A.customStyle) == null ? void 0 : ie.container
                ])
              }, [
                sa(U_, {
                  label: A.label,
                  forId: A.forType,
                  isMandatory: A.isMandatory,
                  baseLabelClass: (Ct = (lt = (Ye = y(mt)) == null ? void 0 : Ye.field) == null ? void 0 : lt.label) == null ? void 0 : Ct.label,
                  customLabelClass: (ea = (Xe = (Yt = (De = e.schema) == null ? void 0 : De.style) == null ? void 0 : Yt.field) == null ? void 0 : Xe.label) == null ? void 0 : ea.label,
                  uniqueLabelClass: (ia = (Ue = A == null ? void 0 : A.customStyle) == null ? void 0 : Ue.label) == null ? void 0 : ia.label,
                  baseMandatoryClass: (oa = (ta = (ya = y(mt)) == null ? void 0 : ya.field) == null ? void 0 : ta.label) == null ? void 0 : oa.mandatory,
                  customMandatoryClass: (ce = (W = (Ht = (aa = e.schema) == null ? void 0 : aa.style) == null ? void 0 : Ht.field) == null ? void 0 : W.label) == null ? void 0 : ce.mandatory,
                  uniqueMandatoryClass: (X = (Pe = A == null ? void 0 : A.customStyle) == null ? void 0 : Pe.label) == null ? void 0 : X.mandatory
                }, null, 8, ["label", "forId", "isMandatory", "baseLabelClass", "customLabelClass", "uniqueLabelClass", "baseMandatoryClass", "customMandatoryClass", "uniqueMandatoryClass"]),
                Se("div", {
                  class: fe([
                    (Te = (ye = y(mt)) == null ? void 0 : ye.fieldAndError) == null ? void 0 : Te.wrapper,
                    (Me = (pt = (St = e.schema) == null ? void 0 : St.style) == null ? void 0 : pt.fieldAndError) == null ? void 0 : Me.wrapper,
                    (jt = (ua = A == null ? void 0 : A.customStyle) == null ? void 0 : ua.fieldAndError) == null ? void 0 : jt.wrapper
                  ])
                }, [
                  Se("div", {
                    class: fe([
                      (Tt = (Pt = y(mt)) == null ? void 0 : Pt.fieldAndError) == null ? void 0 : Tt.fieldAndIcon.wrapper,
                      (Ge = (Ga = (Le = e.schema) == null ? void 0 : Le.style) == null ? void 0 : Ga.fieldAndError) == null ? void 0 : Ge.fieldAndIcon.wrapper,
                      (wr = (Da = A == null ? void 0 : A.customStyle) == null ? void 0 : Da.fieldAndError) == null ? void 0 : wr.fieldAndIcon.wrapper
                    ])
                  }, [
                    p(A) ? (F(), Ve(G_, {
                      key: 0,
                      id: A.forType,
                      modelValue: n[A.forType],
                      placeholder: A.placeholder,
                      type: A.type,
                      hasError: y(k)[A.forType].$error,
                      baseFieldClass: (_t = (Fa = y(mt)) == null ? void 0 : Fa.fieldAndError) == null ? void 0 : _t.field,
                      customFieldClass: (ct = (Ut = (zt = e.schema) == null ? void 0 : zt.style) == null ? void 0 : Ut.fieldAndError) == null ? void 0 : ct.field,
                      uniqueFieldClass: (xt = (Vt = A == null ? void 0 : A.customStyle) == null ? void 0 : Vt.fieldAndError) == null ? void 0 : xt.field,
                      baseIconPaddingClass: A.insetIconType ? (Na = (Ea = (ra = y(mt)) == null ? void 0 : ra.fieldAndError) == null ? void 0 : Ea.fieldAndIcon) == null ? void 0 : Na.fieldWithIcon : "",
                      customIconPaddingClass: A.insetIconType ? (Qt = (La = (Sa = (Ot = e.schema) == null ? void 0 : Ot.style) == null ? void 0 : Sa.fieldAndError) == null ? void 0 : La.fieldAndIcon) == null ? void 0 : Qt.fieldWithIcon : "",
                      uniqueIconPaddingClass: A.insetIconType ? (Wa = (Ta = (na = A == null ? void 0 : A.customStyle) == null ? void 0 : na.fieldAndError) == null ? void 0 : Ta.fieldAndIcon) == null ? void 0 : Wa.fieldWithIcon : "",
                      onBlur: m,
                      "onUpdate:modelValue": (da) => f(A.forType, da)
                    }, null, 8, ["id", "modelValue", "placeholder", "type", "hasError", "baseFieldClass", "customFieldClass", "uniqueFieldClass", "baseIconPaddingClass", "customIconPaddingClass", "uniqueIconPaddingClass", "onUpdate:modelValue"])) : A.fieldType === y(Vn).passwordTextField ? (F(), Ve(Q_, {
                      key: 1,
                      id: A.forType,
                      modelValue: n[A.forType],
                      placeholder: A.placeholder,
                      hasError: y(k)[A.forType].$error,
                      baseFieldClass: (Va = (qa = y(mt)) == null ? void 0 : qa.fieldAndError) == null ? void 0 : Va.field,
                      customFieldClass: (Ha = (pa = (et = e.schema) == null ? void 0 : et.style) == null ? void 0 : pa.fieldAndError) == null ? void 0 : Ha.field,
                      uniqueFieldClass: (za = (xa = A == null ? void 0 : A.customStyle) == null ? void 0 : xa.fieldAndError) == null ? void 0 : za.field,
                      baseIconPaddingClass: A.insetIconType ? (kr = (br = (Oa = y(mt)) == null ? void 0 : Oa.fieldAndError) == null ? void 0 : br.fieldAndIcon) == null ? void 0 : kr.fieldWithIcon : "",
                      customIconPaddingClass: A.insetIconType ? (ar = (Sr = (Dr = (Mr = e.schema) == null ? void 0 : Mr.style) == null ? void 0 : Dr.fieldAndError) == null ? void 0 : Sr.fieldAndIcon) == null ? void 0 : ar.fieldWithIcon : "",
                      uniqueIconPaddingClass: A.insetIconType ? (xr = (Tr = (rr = A == null ? void 0 : A.customStyle) == null ? void 0 : rr.fieldAndError) == null ? void 0 : Tr.fieldAndIcon) == null ? void 0 : xr.fieldWithIcon : "",
                      containerClass: [
                        (Ar = (nr = (Or = y(mt)) == null ? void 0 : Or.field) == null ? void 0 : nr.password) == null ? void 0 : Ar.container,
                        (Ca = (sr = (ja = (Aa = e.schema) == null ? void 0 : Aa.style) == null ? void 0 : ja.field) == null ? void 0 : sr.password) == null ? void 0 : Ca.container,
                        (Cr = (Kt = A == null ? void 0 : A.customStyle) == null ? void 0 : Kt.password) == null ? void 0 : Cr.container
                      ],
                      toggleClass: [
                        ($r = (Pr = (Yr = y(mt)) == null ? void 0 : Yr.field) == null ? void 0 : Pr.password) == null ? void 0 : $r.show,
                        (Er = (Fr = (Ir = (Rr = e.schema) == null ? void 0 : Rr.style) == null ? void 0 : Ir.field) == null ? void 0 : Fr.password) == null ? void 0 : Er.show,
                        (Nr = (Qa = A == null ? void 0 : A.customStyle) == null ? void 0 : Qa.password) == null ? void 0 : Nr.show
                      ],
                      onBlur: m,
                      "onUpdate:modelValue": (da) => f(A.forType, da)
                    }, null, 8, ["id", "modelValue", "placeholder", "hasError", "baseFieldClass", "customFieldClass", "uniqueFieldClass", "baseIconPaddingClass", "customIconPaddingClass", "uniqueIconPaddingClass", "containerClass", "toggleClass", "onUpdate:modelValue"])) : A.fieldType === y(Vn).datePickerField ? (F(), Ve(fS, {
                      key: 2,
                      id: A.forType,
                      modelValue: n[A.forType],
                      placeholder: A.placeholder,
                      pickerType: A.type,
                      hasError: y(k)[A.forType].$error,
                      baseFieldClass: (Lr = (lr = y(mt)) == null ? void 0 : lr.fieldAndError) == null ? void 0 : Lr.field,
                      customFieldClass: (Vr = (qr = (Wr = e.schema) == null ? void 0 : Wr.style) == null ? void 0 : qr.fieldAndError) == null ? void 0 : Vr.field,
                      uniqueFieldClass: (jr = (Hr = A == null ? void 0 : A.customStyle) == null ? void 0 : Hr.fieldAndError) == null ? void 0 : jr.field,
                      onBlur: m,
                      "onUpdate:modelValue": (da) => f(A.forType, da)
                    }, null, 8, ["id", "modelValue", "placeholder", "pickerType", "hasError", "baseFieldClass", "customFieldClass", "uniqueFieldClass", "onUpdate:modelValue"])) : A.fieldType === y(Vn).textArea ? (F(), Ve(mS, {
                      key: 3,
                      id: A.forType,
                      modelValue: n[A.forType],
                      placeholder: A.placeholder,
                      hasError: y(k)[A.forType].$error,
                      baseFieldClass: (Br = (Ur = y(mt)) == null ? void 0 : Ur.fieldAndError) == null ? void 0 : Br.field,
                      customFieldClass: (ts = (Yn = (Gr = e.schema) == null ? void 0 : Gr.style) == null ? void 0 : Yn.fieldAndError) == null ? void 0 : ts.field,
                      uniqueFieldClass: (rs = (as = A == null ? void 0 : A.customStyle) == null ? void 0 : as.fieldAndError) == null ? void 0 : rs.field,
                      onBlur: m,
                      "onUpdate:modelValue": (da) => f(A.forType, da)
                    }, null, 8, ["id", "modelValue", "placeholder", "hasError", "baseFieldClass", "customFieldClass", "uniqueFieldClass", "onUpdate:modelValue"])) : A.fieldType === y(Vn).selectField && A.tagItems.length > 0 ? (F(), Ve(pS, {
                      key: 4,
                      id: A.forType,
                      modelValue: n[A.forType],
                      placeholder: A.placeholder,
                      tagItems: A.tagItems,
                      baseFieldClass: (ss = (ns = y(mt)) == null ? void 0 : ns.fieldAndError) == null ? void 0 : ss.selectField,
                      customFieldClass: (ls = (on = (ln = e.schema) == null ? void 0 : ln.style) == null ? void 0 : on.fieldAndError) == null ? void 0 : ls.selectField,
                      uniqueFieldClass: ($n = (Pn = A == null ? void 0 : A.customStyle) == null ? void 0 : Pn.fieldAndError) == null ? void 0 : $n.selectField,
                      hasError: y(k)[A.forType].$error,
                      "onUpdate:modelValue": (da) => f(A.forType, da),
                      onBlur: m
                    }, null, 8, ["id", "modelValue", "placeholder", "tagItems", "baseFieldClass", "customFieldClass", "uniqueFieldClass", "hasError", "onUpdate:modelValue"])) : A.fieldType === y(Vn).radioField ? (F(), Ve(kS, {
                      key: 5,
                      id: A.forType,
                      modelValue: n[A.forType],
                      tagItems: A.tagItems,
                      wrapperClass: [
                        (us = (os = (is = y(mt)) == null ? void 0 : is.fieldAndError) == null ? void 0 : os.radioField) == null ? void 0 : us.wrapper,
                        (ir = (it = (Rn = (ds = e.schema) == null ? void 0 : ds.style) == null ? void 0 : Rn.fieldAndError) == null ? void 0 : it.radioField) == null ? void 0 : ir.wrapper,
                        (In = (cs = (or = A == null ? void 0 : A.customStyle) == null ? void 0 : or.fieldAndError) == null ? void 0 : cs.radioField) == null ? void 0 : In.wrapper,
                        { textField__default__error: y(k)[A.forType].$error }
                      ],
                      containerClass: [
                        (zr = (hs = (fs = y(mt)) == null ? void 0 : fs.fieldAndError) == null ? void 0 : hs.radioField) == null ? void 0 : zr.container,
                        (_a = (ms = (un = (Ya = e.schema) == null ? void 0 : Ya.style) == null ? void 0 : un.fieldAndError) == null ? void 0 : ms.radioField) == null ? void 0 : _a.container,
                        (ys = (dn = (vs = A == null ? void 0 : A.customStyle) == null ? void 0 : vs.fieldAndError) == null ? void 0 : dn.radioField) == null ? void 0 : ys.container
                      ],
                      inputClass: [
                        (Qr = (_s = (ps = y(mt)) == null ? void 0 : ps.fieldAndError) == null ? void 0 : _s.radioField) == null ? void 0 : Qr.input,
                        (bs = (ws = (gs = (cn = e.schema) == null ? void 0 : cn.style) == null ? void 0 : gs.fieldAndError) == null ? void 0 : ws.radioField) == null ? void 0 : bs.input,
                        (Ms = (ks = (Fn = A == null ? void 0 : A.customStyle) == null ? void 0 : Fn.fieldAndError) == null ? void 0 : ks.radioField) == null ? void 0 : Ms.input
                      ],
                      labelClass: [
                        (Ts = (Ss = (Ds = y(mt)) == null ? void 0 : Ds.fieldAndError) == null ? void 0 : Ss.radioField) == null ? void 0 : Ts.label,
                        (ii = (fn = (li = (Vs = e.schema) == null ? void 0 : Vs.style) == null ? void 0 : li.fieldAndError) == null ? void 0 : fn.radioField) == null ? void 0 : ii.label,
                        (js = (oi = (Hs = A == null ? void 0 : A.customStyle) == null ? void 0 : Hs.fieldAndError) == null ? void 0 : oi.radioField) == null ? void 0 : js.label
                      ],
                      "onUpdate:modelValue": (da) => f(A.forType, da),
                      onBlur: m
                    }, null, 8, ["id", "modelValue", "tagItems", "wrapperClass", "containerClass", "inputClass", "labelClass", "onUpdate:modelValue"])) : A.fieldType === y(Vn).multiSelect ? (F(), Ve(BT, {
                      key: 6,
                      multiSelectClass: (di = (ui = y(mt)) == null ? void 0 : ui.fieldAndError) == null ? void 0 : di.multiSelect,
                      customMultiSelectClass: (kl = (fi = (ci = e.schema) == null ? void 0 : ci.style) == null ? void 0 : fi.fieldAndError) == null ? void 0 : kl.multiSelect,
                      uniqueStyle: (Ml = (hi = A == null ? void 0 : A.customStyle) == null ? void 0 : hi.fieldAndError) == null ? void 0 : Ml.multiSelect,
                      id: A.forType,
                      items: A.tagItems,
                      label: A.placeholder,
                      hasError: y(k)[A.forType].$error,
                      modelValue: n[A.forType],
                      "onUpdate:modelValue": (da) => f(A.forType, da),
                      onBlur: m
                    }, null, 8, ["multiSelectClass", "customMultiSelectClass", "uniqueStyle", "id", "items", "label", "hasError", "modelValue", "onUpdate:modelValue"])) : ue("", !0),
                    (A == null ? void 0 : A.insetIconType) !== null ? (F(), Ve(Xl(o.value[st]), {
                      key: 7,
                      class: fe([
                        (vi = (mi = (ft = y(mt)) == null ? void 0 : ft.fieldAndError) == null ? void 0 : mi.insetIcon) == null ? void 0 : vi.wrapper,
                        (_i = (pi = (yi = (Dl = e.schema) == null ? void 0 : Dl.style) == null ? void 0 : yi.fieldAndError) == null ? void 0 : pi.insetIcon) == null ? void 0 : _i.wrapper,
                        (wi = (gi = (En = A == null ? void 0 : A.customStyle) == null ? void 0 : En.fieldAndError) == null ? void 0 : gi.insetIcon) == null ? void 0 : wi.wrapper
                      ]),
                      icon: (Os = (xs = (bi = A == null ? void 0 : A.customStyle) == null ? void 0 : bi.fieldAndError) == null ? void 0 : xs.insetIcon) == null ? void 0 : Os.icon,
                      path: (Sl = (ki = (Us = A == null ? void 0 : A.customStyle) == null ? void 0 : Us.fieldAndError) == null ? void 0 : ki.insetIcon) == null ? void 0 : Sl.path
                    }, null, 8, ["class", "icon", "path"])) : ue("", !0)
                  ], 2),
                  sa(Ox, {
                    backendError: (Bs = (Mi = e.schema) == null ? void 0 : Mi.errorField) == null ? void 0 : Bs[A.forType],
                    wrapperStyle: [
                      (Di = (zs = (Gs = y(mt)) == null ? void 0 : Gs.fieldAndError) == null ? void 0 : zs.error) == null ? void 0 : Di.wrapper,
                      (Oi = (xi = (Ti = (Si = e.schema) == null ? void 0 : Si.style) == null ? void 0 : Ti.fieldAndError) == null ? void 0 : xi.error) == null ? void 0 : Oi.wrapper,
                      (Yi = (Ci = (Ai = A == null ? void 0 : A.customStyle) == null ? void 0 : Ai.fieldAndError) == null ? void 0 : Ci.error) == null ? void 0 : Yi.wrapper
                    ],
                    messageStyle: [
                      (Tl = ($i = (Pi = y(mt)) == null ? void 0 : Pi.fieldAndError) == null ? void 0 : $i.error) == null ? void 0 : Tl.message,
                      (Kr = (Pa = (Ii = (Ri = e.schema) == null ? void 0 : Ri.style) == null ? void 0 : Ii.fieldAndError) == null ? void 0 : Pa.error) == null ? void 0 : Kr.message,
                      (Ol = (Fi = (xl = A == null ? void 0 : A.customStyle) == null ? void 0 : xl.fieldAndError) == null ? void 0 : Fi.error) == null ? void 0 : Ol.message
                    ],
                    errors: y(k)[A.forType].$errors
                  }, null, 8, ["backendError", "wrapperStyle", "messageStyle", "errors"])
                ], 2)
              ], 2)
            ], 2);
          }), 128))
        ], 2),
        Rs(sa(QT, {
          content: (q = (H = e.schema) == null ? void 0 : H.submitButton) == null ? void 0 : q.content,
          type: (ge = (J = e.schema) == null ? void 0 : J.submitButton) == null ? void 0 : ge.type,
          wrapperClass: [
            (V = (I = (we = y(mt)) == null ? void 0 : we.fieldAndError) == null ? void 0 : I.submit) == null ? void 0 : V.wrapper,
            (K = (me = (te = (N = e.schema) == null ? void 0 : N.style) == null ? void 0 : te.fieldAndError) == null ? void 0 : me.submit) == null ? void 0 : K.wrapper
          ],
          buttonClass: [
            (Q = (de = (Y = y(mt)) == null ? void 0 : Y.fieldAndError) == null ? void 0 : de.submit) == null ? void 0 : Q.button,
            (ne = (S = (_ = (j = e.schema) == null ? void 0 : j.style) == null ? void 0 : _.fieldAndError) == null ? void 0 : S.submit) == null ? void 0 : ne.button
          ],
          onClick: v
        }, null, 8, ["content", "type", "wrapperClass", "buttonClass"]), [
          [Fl, (ve = (x = e.schema) == null ? void 0 : x.submitButton) == null ? void 0 : ve.isSubmitButton]
        ])
      ], 2);
    };
  }
};
class ba {
  /**
   * @param {string} type - The validation rule type, e.g. 'required', 'minLength', 'pattern', etc.
   * @param {any} value - Additional parameter for the rule (length, value to match, regex, etc).
   * @param {string|null} message - Optional custom error message.
   * @param {function|null} customValidator - Custom validation function (for 'custom' rule).
   */
  constructor(t, a = null, r = null, n = null) {
    this.type = t, this.value = a, this.message = r, this.customValidator = n;
  }
  /** Field is required (not empty). */
  static required(t = null) {
    return new ba("required", null, t);
  }
  /** Value must be a valid email address. */
  static email(t = null) {
    return new ba("email", null, t);
  }
  /** Value must have at least the given string length. */
  static minLength(t, a = null) {
    return new ba("minLength", t, a);
  }
  /** Value must not exceed the given string length. */
  static maxLength(t, a = null) {
    return new ba("maxLength", t, a);
  }
  /** Value must be at least the given numeric value. */
  static minValue(t, a = null) {
    return new ba("minValue", t, a);
  }
  /** Value must not exceed the given numeric value. */
  static maxValue(t, a = null) {
    return new ba("maxValue", t, a);
  }
  /** Value must be equal to another field's value (forType of that field). */
  static sameAs(t, a = null) {
    return new ba("sameAs", t, a);
  }
  /**
   * Value must be between min and max (inclusive).
   * @param {[number, number]} range - Array of [min, max].
   * @param {string|null} message
   */
  static between(t, a = null) {
    return new ba("between", t, a);
  }
  /**
   * Value must be a valid URL.
   * @param {string|null} message
   */
  static url(t = null) {
    return new ba("url", null, t);
  }
  /**
   * Value must be an integer.
   * @param {string|null} message
   */
  static integer(t = null) {
    return new ba("integer", null, t);
  }
  /**
   * Value must be a decimal (float).
   * @param {string|null} message
   */
  static decimal(t = null) {
    return new ba("decimal", null, t);
  }
  /** Custom validation function. */
  static custom(t, a = null) {
    return new ba("custom", null, a, t);
  }
}
class Ax {
  /**
   * @param {Object} options - Field configuration object
   * @param {string} options.fieldType - Field type identifier (e.g., 'textField', 'selectField')
   * @param {string} options.label - Display label for the field
   * @param {string} [options.placeholder] - Placeholder text
   * @param {string} [options.type='text'] - Input type (text, number, etc.)
   * @param {string} options.forType - Key name in form data
   * @param {boolean} [options.mandatory=false] - If true, marks field as required
   * @param {Array} [options.tagItems=[]] - Items for select/multi/radio fields
   * @param {string|null} [options.insetIconType=null] - Type of icon, if any
   * @param {Array<ValidationSetup>} [options.validation=[]] - Array of validation rules
   * @param {*} [options.defaultValue=null] - Default value for the field
   */
  constructor({
    fieldType: t,
    label: a,
    placeholder: r = "",
    type: n = "text",
    forType: i,
    mandatory: o = !1,
    tagItems: c = [],
    insetIconType: f = null,
    validation: m = [],
    defaultValue: v = null
  }) {
    this.fieldType = t, this.label = a, this.placeholder = r, this.type = n, this.forType = i, this.isMandatory = o, this.tagItems = c, this.validations = m || [], this.defaultValue = v, this.insetIconType = f, this.customStyle = {
      wrapper: "",
      container: "",
      label: {
        label: "",
        mandatory: ""
      },
      password: {
        container: "",
        show: ""
      },
      fieldAndError: {
        wrapper: "",
        fieldAndIcon: {
          wrapper: "",
          fieldWithIcon: ""
        },
        field: "",
        radioField: {
          wrapper: "",
          container: "",
          input: "",
          label: ""
        },
        selectField: {
          wrapper: "",
          field: "",
          labelAndIcon: {
            wrapper: "",
            label: "",
            icon: {
              icon: "",
              path: ""
            }
          },
          dropdown: {
            wrapper: "",
            input: "",
            list: "",
            item: "",
            itemSelected: ""
          }
        },
        multiSelect: {
          mainWrapper: "",
          field: "",
          labelAndIcon: {
            wrapper: "",
            label: "",
            icon: {
              icon: "",
              path: ""
            },
            tag: {
              view: {
                view: "",
                wrapper: "",
                container: "",
                value: "",
                remove: {
                  container: "",
                  value: ""
                }
              }
            },
            dropdown: {
              wrapper: "",
              input: "",
              container: {
                container: "",
                box: "",
                icon: {
                  icon: "",
                  path: ""
                },
                item: ""
              }
            }
          }
        },
        insetIcon: {
          wrapper: "textField__default__field__insetIcon__wrapper",
          icon: "textField__default__field__insetIcon__icon",
          path: ["textField__default__field__insetIcon__path1", "textField__default__field__insetIcon__path2"]
        },
        error: {
          wrapper: "",
          message: ""
        }
      }
    };
  }
  // --- Value Methods ---
  /**
   * Set the default value of the field.
   * @param {*} value
   */
  setDefaultValue(t) {
    this.defaultValue = t;
  }
  /**
   * Get the default value.
   * @returns {*}
   */
  getDefaultValue() {
    return this.defaultValue;
  }
  // --- Validation Methods ---
  /**
   * Add a single validation rule.
   * @param {ValidationSetup} value
   */
  addValidations(t) {
    if (!(t instanceof ba))
      throw new Error("Invalid validation rule. Must be an instance of ValidationSetup.");
    this.validations.push(t);
  }
  /**
   * Add multiple validation rules at once.
   * @param {Array<ValidationSetup>} values
   */
  addValidationsArray(t) {
    if (!Array.isArray(t))
      throw new Error("Invalid input. Must be an array of ValidationSetup instances.");
    t.forEach((a) => {
      if (!(a instanceof ba))
        throw new Error("Invalid validation rule. Each item must be an instance of ValidationSetup.");
      this.validations.push(a);
    });
  }
  // --- Icon Methods ---
  /**
   * Set the type of inset icon for this field.
   * @param {string|null} value
   */
  setInsetIconType(t) {
    this.insetIconType = t;
  }
  // --- Style Methods ---
  /**
   * Update a deeply nested style property via dot notation.
   * @param {string} property - Dot-notated path (e.g., 'fieldAndError.field')
   * @param {string|Array} value - New style class or object
   * @param {Object} [obj=this.customStyle] - For internal use
   */
  updateStyle(t, a, r = this.customStyle) {
    const n = t.split("."), i = n.pop();
    let o = r;
    for (const c of n) {
      if (!(c in o))
        throw new Error(`${t} Property ${c} does not exist.`);
      o = o[c];
    }
    if (!(i in o))
      throw new Error(`Property ${i} does not exist.`);
    o[i] = a;
  }
}
class $x {
  constructor() {
    this.fields = [], this.style = "", this.submitButton = {
      isSubmitButton: !1,
      content: "",
      type: "submit"
    }, this.errorField = {};
  }
  /**
   * Add a new FieldType to the schema.
   * @param {FieldType} field
   */
  addField(t) {
    t instanceof Ax && this.fields.push(t);
  }
  /**
   * Set backend validation errors for the form (for error display).
   * @param {Object} backendErrors
   */
  setErrors(t) {
    this.errorField = t;
  }
  /**
   * Returns an initial data object for the form with all fields and their default values.
   * @returns {Object}
   */
  createInitialDataObject() {
    const t = {};
    for (const a of this.fields)
      a.fieldType === Vn.multiSelect ? t[a.forType] = a.getDefaultValue() || [] : t[a.forType] = a.getDefaultValue() || "";
    return t;
  }
  /**
   * Update form-level style config.
   * @param {*} value
   */
  updateStyle(t) {
    this.style = t;
  }
  /**
   * Configure submit button appearance.
   * @param {boolean} isTrue
   * @param {string} content
   * @param {string} [type='submit']
   */
  updateSubmitButton(t, a, r = "submit") {
    this.submitButton.isSubmitButton = t, this.submitButton.content = a, this.submitButton.type = r;
  }
  // -----------------------------------------------------------------------
  // The following are only for advanced/rare usage—leave commented out
  // -----------------------------------------------------------------------
  // /**
  //  * Replace all fields in the schema (rarely needed).
  //  * @param {Array<FieldType>} items
  //  */
  // setField(items) {
  //     this.fields = items;
  // }
  // /**
  //  * Update a field's defaultValue in the schema.
  //  * Not needed for ordinary v-model-based forms.
  //  */
  // updateFieldValue(fieldName, value) {
  //     const field = this.fields.find(f => f.forType === fieldName);
  //     if (field) {
  //         field.setDefaultValue(value);
  //     }
  //     this.fields = [...this.fields];
  //     // console.log(this.fields);
  // }
}
export {
  $x as CustomizableTextField,
  Ax as FieldType,
  ba as ValidationSetup,
  Px as default
};
