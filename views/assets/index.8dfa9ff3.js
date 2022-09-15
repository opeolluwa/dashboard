(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const i of r.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerpolicy && (r.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = n(s);
    fetch(s.href, r);
  }
})();
function Ro(e, t) {
  const n = Object.create(null),
    o = e.split(",");
  for (let s = 0; s < o.length; s++) n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const Qi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Yi = Ro(Qi);
function mr(e) {
  return !!e || e === "";
}
function Mo(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        s = fe(o) ? Gi(o) : Mo(o);
      if (s) for (const r in s) t[r] = s[r];
    }
    return t;
  } else {
    if (fe(e)) return e;
    if (se(e)) return e;
  }
}
const Ji = /;(?![^(]*\))/g,
  Zi = /:(.+)/;
function Gi(e) {
  const t = {};
  return (
    e.split(Ji).forEach((n) => {
      if (n) {
        const o = n.split(Zi);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }),
    t
  );
}
function To(e) {
  let t = "";
  if (fe(e)) t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const o = To(e[n]);
      o && (t += o + " ");
    }
  else if (se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ao = (e) =>
    fe(e)
      ? e
      : e == null
      ? ""
      : B(e) || (se(e) && (e.toString === br || !j(e.toString)))
      ? JSON.stringify(e, gr, 2)
      : String(e),
  gr = (e, t) =>
    t && t.__v_isRef
      ? gr(e, t.value)
      : Mt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, s]) => ((n[`${o} =>`] = s), n),
            {}
          ),
        }
      : _r(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : se(t) && !B(t) && !wr(t)
      ? String(t)
      : t,
  X = {},
  Rt = [],
  He = () => {},
  Xi = () => !1,
  ec = /^on[^a-z]/,
  $n = (e) => ec.test(e),
  Oo = (e) => e.startsWith("onUpdate:"),
  be = Object.assign,
  $o = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  tc = Object.prototype.hasOwnProperty,
  U = (e, t) => tc.call(e, t),
  B = Array.isArray,
  Mt = (e) => Ln(e) === "[object Map]",
  _r = (e) => Ln(e) === "[object Set]",
  j = (e) => typeof e == "function",
  fe = (e) => typeof e == "string",
  Lo = (e) => typeof e == "symbol",
  se = (e) => e !== null && typeof e == "object",
  yr = (e) => se(e) && j(e.then) && j(e.catch),
  br = Object.prototype.toString,
  Ln = (e) => br.call(e),
  nc = (e) => Ln(e).slice(8, -1),
  wr = (e) => Ln(e) === "[object Object]",
  ko = (e) =>
    fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  gn = Ro(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  kn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  oc = /-(\w)/g,
  We = kn((e) => e.replace(oc, (t, n) => (n ? n.toUpperCase() : ""))),
  sc = /\B([A-Z])/g,
  Nt = kn((e) => e.replace(sc, "-$1").toLowerCase()),
  Hn = kn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Yn = kn((e) => (e ? `on${Hn(e)}` : "")),
  en = (e, t) => !Object.is(e, t),
  Jn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Cn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  rc = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let us;
const ic = () =>
  us ||
  (us =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Ue;
class vr {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Ue &&
        ((this.parent = Ue),
        (this.index = (Ue.scopes || (Ue.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = Ue;
      try {
        return (Ue = this), t();
      } finally {
        Ue = n;
      }
    }
  }
  on() {
    Ue = this;
  }
  off() {
    Ue = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.active = !1;
    }
  }
}
function cc(e) {
  return new vr(e);
}
function lc(e, t = Ue) {
  t && t.active && t.effects.push(e);
}
const Ho = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  xr = (e) => (e.w & lt) > 0,
  Cr = (e) => (e.n & lt) > 0,
  uc = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= lt;
  },
  ac = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let o = 0; o < t.length; o++) {
        const s = t[o];
        xr(s) && !Cr(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~lt),
          (s.n &= ~lt);
      }
      t.length = n;
    }
  },
  ro = new WeakMap();
let Qt = 0,
  lt = 1;
const io = 30;
let Le;
const mt = Symbol(""),
  co = Symbol("");
class Fo {
  constructor(t, n = null, o) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      lc(this, o);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Le,
      n = rt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Le),
        (Le = this),
        (rt = !0),
        (lt = 1 << ++Qt),
        Qt <= io ? uc(this) : as(this),
        this.fn()
      );
    } finally {
      Qt <= io && ac(this),
        (lt = 1 << --Qt),
        (Le = this.parent),
        (rt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Le === this
      ? (this.deferStop = !0)
      : this.active &&
        (as(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function as(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let rt = !0;
const Er = [];
function jt() {
  Er.push(rt), (rt = !1);
}
function Bt() {
  const e = Er.pop();
  rt = e === void 0 ? !0 : e;
}
function Pe(e, t, n) {
  if (rt && Le) {
    let o = ro.get(e);
    o || ro.set(e, (o = new Map()));
    let s = o.get(n);
    s || o.set(n, (s = Ho())), Ir(s);
  }
}
function Ir(e, t) {
  let n = !1;
  Qt <= io ? Cr(e) || ((e.n |= lt), (n = !xr(e))) : (n = !e.has(Le)),
    n && (e.add(Le), Le.deps.push(e));
}
function Ge(e, t, n, o, s, r) {
  const i = ro.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && B(e))
    i.forEach((l, a) => {
      (a === "length" || a >= o) && c.push(l);
    });
  else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        B(e)
          ? ko(n) && c.push(i.get("length"))
          : (c.push(i.get(mt)), Mt(e) && c.push(i.get(co)));
        break;
      case "delete":
        B(e) || (c.push(i.get(mt)), Mt(e) && c.push(i.get(co)));
        break;
      case "set":
        Mt(e) && c.push(i.get(mt));
        break;
    }
  if (c.length === 1) c[0] && lo(c[0]);
  else {
    const l = [];
    for (const a of c) a && l.push(...a);
    lo(Ho(l));
  }
}
function lo(e, t) {
  const n = B(e) ? e : [...e];
  for (const o of n) o.computed && fs(o);
  for (const o of n) o.computed || fs(o);
}
function fs(e, t) {
  (e !== Le || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const fc = Ro("__proto__,__v_isRef,__isVue"),
  Sr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Lo)
  ),
  dc = No(),
  hc = No(!1, !0),
  pc = No(!0),
  ds = mc();
function mc() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const o = z(this);
        for (let r = 0, i = this.length; r < i; r++) Pe(o, "get", r + "");
        const s = o[t](...n);
        return s === -1 || s === !1 ? o[t](...n.map(z)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        jt();
        const o = z(this)[t].apply(this, n);
        return Bt(), o;
      };
    }),
    e
  );
}
function No(e = !1, t = !1) {
  return function (o, s, r) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && r === (e ? (t ? Ac : Ar) : t ? Tr : Mr).get(o))
      return o;
    const i = B(o);
    if (!e && i && U(ds, s)) return Reflect.get(ds, s, r);
    const c = Reflect.get(o, s, r);
    return (Lo(s) ? Sr.has(s) : fc(s)) || (e || Pe(o, "get", s), t)
      ? c
      : me(c)
      ? i && ko(s)
        ? c
        : c.value
      : se(c)
      ? e
        ? Or(c)
        : un(c)
      : c;
  };
}
const gc = Pr(),
  _c = Pr(!0);
function Pr(e = !1) {
  return function (n, o, s, r) {
    let i = n[o];
    if (Ot(i) && me(i) && !me(s)) return !1;
    if (
      !e &&
      (!En(s) && !Ot(s) && ((i = z(i)), (s = z(s))), !B(n) && me(i) && !me(s))
    )
      return (i.value = s), !0;
    const c = B(n) && ko(o) ? Number(o) < n.length : U(n, o),
      l = Reflect.set(n, o, s, r);
    return (
      n === z(r) && (c ? en(s, i) && Ge(n, "set", o, s) : Ge(n, "add", o, s)), l
    );
  };
}
function yc(e, t) {
  const n = U(e, t);
  e[t];
  const o = Reflect.deleteProperty(e, t);
  return o && n && Ge(e, "delete", t, void 0), o;
}
function bc(e, t) {
  const n = Reflect.has(e, t);
  return (!Lo(t) || !Sr.has(t)) && Pe(e, "has", t), n;
}
function wc(e) {
  return Pe(e, "iterate", B(e) ? "length" : mt), Reflect.ownKeys(e);
}
const Rr = { get: dc, set: gc, deleteProperty: yc, has: bc, ownKeys: wc },
  vc = {
    get: pc,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  xc = be({}, Rr, { get: hc, set: _c }),
  jo = (e) => e,
  Fn = (e) => Reflect.getPrototypeOf(e);
function an(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = z(e),
    r = z(t);
  n || (t !== r && Pe(s, "get", t), Pe(s, "get", r));
  const { has: i } = Fn(s),
    c = o ? jo : n ? Uo : tn;
  if (i.call(s, t)) return c(e.get(t));
  if (i.call(s, r)) return c(e.get(r));
  e !== s && e.get(t);
}
function fn(e, t = !1) {
  const n = this.__v_raw,
    o = z(n),
    s = z(e);
  return (
    t || (e !== s && Pe(o, "has", e), Pe(o, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function dn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Pe(z(e), "iterate", mt), Reflect.get(e, "size", e)
  );
}
function hs(e) {
  e = z(e);
  const t = z(this);
  return Fn(t).has.call(t, e) || (t.add(e), Ge(t, "add", e, e)), this;
}
function ps(e, t) {
  t = z(t);
  const n = z(this),
    { has: o, get: s } = Fn(n);
  let r = o.call(n, e);
  r || ((e = z(e)), (r = o.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), r ? en(t, i) && Ge(n, "set", e, t) : Ge(n, "add", e, t), this
  );
}
function ms(e) {
  const t = z(this),
    { has: n, get: o } = Fn(t);
  let s = n.call(t, e);
  s || ((e = z(e)), (s = n.call(t, e))), o && o.call(t, e);
  const r = t.delete(e);
  return s && Ge(t, "delete", e, void 0), r;
}
function gs() {
  const e = z(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ge(e, "clear", void 0, void 0), n;
}
function hn(e, t) {
  return function (o, s) {
    const r = this,
      i = r.__v_raw,
      c = z(i),
      l = t ? jo : e ? Uo : tn;
    return (
      !e && Pe(c, "iterate", mt), i.forEach((a, u) => o.call(s, l(a), l(u), r))
    );
  };
}
function pn(e, t, n) {
  return function (...o) {
    const s = this.__v_raw,
      r = z(s),
      i = Mt(r),
      c = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      a = s[e](...o),
      u = n ? jo : t ? Uo : tn;
    return (
      !t && Pe(r, "iterate", l ? co : mt),
      {
        next() {
          const { value: h, done: p } = a.next();
          return p
            ? { value: h, done: p }
            : { value: c ? [u(h[0]), u(h[1])] : u(h), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function tt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Cc() {
  const e = {
      get(r) {
        return an(this, r);
      },
      get size() {
        return dn(this);
      },
      has: fn,
      add: hs,
      set: ps,
      delete: ms,
      clear: gs,
      forEach: hn(!1, !1),
    },
    t = {
      get(r) {
        return an(this, r, !1, !0);
      },
      get size() {
        return dn(this);
      },
      has: fn,
      add: hs,
      set: ps,
      delete: ms,
      clear: gs,
      forEach: hn(!1, !0),
    },
    n = {
      get(r) {
        return an(this, r, !0);
      },
      get size() {
        return dn(this, !0);
      },
      has(r) {
        return fn.call(this, r, !0);
      },
      add: tt("add"),
      set: tt("set"),
      delete: tt("delete"),
      clear: tt("clear"),
      forEach: hn(!0, !1),
    },
    o = {
      get(r) {
        return an(this, r, !0, !0);
      },
      get size() {
        return dn(this, !0);
      },
      has(r) {
        return fn.call(this, r, !0);
      },
      add: tt("add"),
      set: tt("set"),
      delete: tt("delete"),
      clear: tt("clear"),
      forEach: hn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = pn(r, !1, !1)),
        (n[r] = pn(r, !0, !1)),
        (t[r] = pn(r, !1, !0)),
        (o[r] = pn(r, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [Ec, Ic, Sc, Pc] = Cc();
function Bo(e, t) {
  const n = t ? (e ? Pc : Sc) : e ? Ic : Ec;
  return (o, s, r) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? o
      : Reflect.get(U(n, s) && s in o ? n : o, s, r);
}
const Rc = { get: Bo(!1, !1) },
  Mc = { get: Bo(!1, !0) },
  Tc = { get: Bo(!0, !1) },
  Mr = new WeakMap(),
  Tr = new WeakMap(),
  Ar = new WeakMap(),
  Ac = new WeakMap();
function Oc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function $c(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Oc(nc(e));
}
function un(e) {
  return Ot(e) ? e : Do(e, !1, Rr, Rc, Mr);
}
function Lc(e) {
  return Do(e, !1, xc, Mc, Tr);
}
function Or(e) {
  return Do(e, !0, vc, Tc, Ar);
}
function Do(e, t, n, o, s) {
  if (!se(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = s.get(e);
  if (r) return r;
  const i = $c(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return s.set(e, c), c;
}
function Tt(e) {
  return Ot(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ot(e) {
  return !!(e && e.__v_isReadonly);
}
function En(e) {
  return !!(e && e.__v_isShallow);
}
function $r(e) {
  return Tt(e) || Ot(e);
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function Vo(e) {
  return Cn(e, "__v_skip", !0), e;
}
const tn = (e) => (se(e) ? un(e) : e),
  Uo = (e) => (se(e) ? Or(e) : e);
function Lr(e) {
  rt && Le && ((e = z(e)), Ir(e.dep || (e.dep = Ho())));
}
function kr(e, t) {
  (e = z(e)), e.dep && lo(e.dep);
}
function me(e) {
  return !!(e && e.__v_isRef === !0);
}
function Hr(e) {
  return Fr(e, !1);
}
function kc(e) {
  return Fr(e, !0);
}
function Fr(e, t) {
  return me(e) ? e : new Hc(e, t);
}
class Hc {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : z(t)),
      (this._value = n ? t : tn(t));
  }
  get value() {
    return Lr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || En(t) || Ot(t);
    (t = n ? t : z(t)),
      en(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : tn(t)), kr(this));
  }
}
function gt(e) {
  return me(e) ? e.value : e;
}
const Fc = {
  get: (e, t, n) => gt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return me(s) && !me(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function Nr(e) {
  return Tt(e) ? e : new Proxy(e, Fc);
}
var jr;
class Nc {
  constructor(t, n, o, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[jr] = !1),
      (this._dirty = !0),
      (this.effect = new Fo(t, () => {
        this._dirty || ((this._dirty = !0), kr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = o);
  }
  get value() {
    const t = z(this);
    return (
      Lr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
jr = "__v_isReadonly";
function jc(e, t, n = !1) {
  let o, s;
  const r = j(e);
  return (
    r ? ((o = e), (s = He)) : ((o = e.get), (s = e.set)),
    new Nc(o, s, r || !s, n)
  );
}
function it(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    Nn(r, t, n);
  }
  return s;
}
function Fe(e, t, n, o) {
  if (j(e)) {
    const r = it(e, t, n, o);
    return (
      r &&
        yr(r) &&
        r.catch((i) => {
          Nn(i, t, n);
        }),
      r
    );
  }
  const s = [];
  for (let r = 0; r < e.length; r++) s.push(Fe(e[r], t, n, o));
  return s;
}
function Nn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy,
      c = n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let u = 0; u < a.length; u++) if (a[u](e, i, c) === !1) return;
      }
      r = r.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      it(l, null, 10, [e, i, c]);
      return;
    }
  }
  Bc(e, n, s, o);
}
function Bc(e, t, n, o = !0) {
  console.error(e);
}
let In = !1,
  uo = !1;
const pe = [];
let ze = 0;
const At = [];
let Ze = null,
  dt = 0;
const Br = Promise.resolve();
let Ko = null;
function Dr(e) {
  const t = Ko || Br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dc(e) {
  let t = ze + 1,
    n = pe.length;
  for (; t < n; ) {
    const o = (t + n) >>> 1;
    nn(pe[o]) < e ? (t = o + 1) : (n = o);
  }
  return t;
}
function qo(e) {
  (!pe.length || !pe.includes(e, In && e.allowRecurse ? ze + 1 : ze)) &&
    (e.id == null ? pe.push(e) : pe.splice(Dc(e.id), 0, e), Vr());
}
function Vr() {
  !In && !uo && ((uo = !0), (Ko = Br.then(Kr)));
}
function Vc(e) {
  const t = pe.indexOf(e);
  t > ze && pe.splice(t, 1);
}
function Uc(e) {
  B(e)
    ? At.push(...e)
    : (!Ze || !Ze.includes(e, e.allowRecurse ? dt + 1 : dt)) && At.push(e),
    Vr();
}
function _s(e, t = ze) {
  for (; t < pe.length; t++) {
    const n = pe[t];
    n && n.pre && (pe.splice(t, 1), t--, n());
  }
}
function Ur(e) {
  if (At.length) {
    const t = [...new Set(At)];
    if (((At.length = 0), Ze)) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, Ze.sort((n, o) => nn(n) - nn(o)), dt = 0; dt < Ze.length; dt++)
      Ze[dt]();
    (Ze = null), (dt = 0);
  }
}
const nn = (e) => (e.id == null ? 1 / 0 : e.id),
  Kc = (e, t) => {
    const n = nn(e) - nn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Kr(e) {
  (uo = !1), (In = !0), pe.sort(Kc);
  const t = He;
  try {
    for (ze = 0; ze < pe.length; ze++) {
      const n = pe[ze];
      n && n.active !== !1 && it(n, null, 14);
    }
  } finally {
    (ze = 0),
      (pe.length = 0),
      Ur(),
      (In = !1),
      (Ko = null),
      (pe.length || At.length) && Kr();
  }
}
function qc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || X;
  let s = n;
  const r = t.startsWith("update:"),
    i = r && t.slice(7);
  if (i && i in o) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: h, trim: p } = o[u] || X;
    p && (s = n.map((g) => g.trim())), h && (s = n.map(rc));
  }
  let c,
    l = o[(c = Yn(t))] || o[(c = Yn(We(t)))];
  !l && r && (l = o[(c = Yn(Nt(t)))]), l && Fe(l, e, 6, s);
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), Fe(a, e, 6, s);
  }
}
function qr(e, t, n = !1) {
  const o = t.emitsCache,
    s = o.get(e);
  if (s !== void 0) return s;
  const r = e.emits;
  let i = {},
    c = !1;
  if (!j(e)) {
    const l = (a) => {
      const u = qr(a, t, !0);
      u && ((c = !0), be(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !r && !c
    ? (se(e) && o.set(e, null), null)
    : (B(r) ? r.forEach((l) => (i[l] = null)) : be(i, r),
      se(e) && o.set(e, i),
      i);
}
function jn(e, t) {
  return !e || !$n(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Nt(t)) || U(e, t));
}
let ye = null,
  Bn = null;
function Sn(e) {
  const t = ye;
  return (ye = e), (Bn = (e && e.type.__scopeId) || null), t;
}
function zr(e) {
  Bn = e;
}
function Wr() {
  Bn = null;
}
function Ke(e, t = ye, n) {
  if (!t || e._n) return e;
  const o = (...s) => {
    o._d && Ps(-1);
    const r = Sn(t),
      i = e(...s);
    return Sn(r), o._d && Ps(1), i;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Zn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    props: r,
    propsOptions: [i],
    slots: c,
    attrs: l,
    emit: a,
    render: u,
    renderCache: h,
    data: p,
    setupState: g,
    ctx: E,
    inheritAttrs: $,
  } = e;
  let v, P;
  const A = Sn(e);
  try {
    if (n.shapeFlag & 4) {
      const W = s || o;
      (v = qe(u.call(W, W, h, r, g, p, E))), (P = l);
    } else {
      const W = t;
      (v = qe(
        W.length > 1 ? W(r, { attrs: l, slots: c, emit: a }) : W(r, null)
      )),
        (P = t.props ? l : zc(l));
    }
  } catch (W) {
    (Jt.length = 0), Nn(W, e, 1), (v = N($t));
  }
  let K = v;
  if (P && $ !== !1) {
    const W = Object.keys(P),
      { shapeFlag: ce } = K;
    W.length && ce & 7 && (i && W.some(Oo) && (P = Wc(P, i)), (K = Lt(K, P)));
  }
  return (
    n.dirs && ((K = Lt(K)), (K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (K.transition = n.transition),
    (v = K),
    Sn(A),
    v
  );
}
const zc = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || $n(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Wc = (e, t) => {
    const n = {};
    for (const o in e) (!Oo(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
function Qc(e, t, n) {
  const { props: o, children: s, component: r } = e,
    { props: i, children: c, patchFlag: l } = t,
    a = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return o ? ys(o, i, a) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const p = u[h];
        if (i[p] !== o[p] && !jn(a, p)) return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable)
      ? !0
      : o === i
      ? !1
      : o
      ? i
        ? ys(o, i, a)
        : !0
      : !!i;
  return !1;
}
function ys(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !jn(n, r)) return !0;
  }
  return !1;
}
function Yc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Jc = (e) => e.__isSuspense;
function Zc(e, t) {
  t && t.pendingBranch
    ? B(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Uc(e);
}
function _n(e, t) {
  if (ae) {
    let n = ae.provides;
    const o = ae.parent && ae.parent.provides;
    o === n && (n = ae.provides = Object.create(o)), (n[e] = t);
  }
}
function ct(e, t, n = !1) {
  const o = ae || ye;
  if (o) {
    const s =
      o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && j(t) ? t.call(o.proxy) : t;
  }
}
const bs = {};
function yn(e, t, n) {
  return Qr(e, t, n);
}
function Qr(
  e,
  t,
  { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = X
) {
  const c = ae;
  let l,
    a = !1,
    u = !1;
  if (
    (me(e)
      ? ((l = () => e.value), (a = En(e)))
      : Tt(e)
      ? ((l = () => e), (o = !0))
      : B(e)
      ? ((u = !0),
        (a = e.some((P) => Tt(P) || En(P))),
        (l = () =>
          e.map((P) => {
            if (me(P)) return P.value;
            if (Tt(P)) return pt(P);
            if (j(P)) return it(P, c, 2);
          })))
      : j(e)
      ? t
        ? (l = () => it(e, c, 2))
        : (l = () => {
            if (!(c && c.isUnmounted)) return h && h(), Fe(e, c, 3, [p]);
          })
      : (l = He),
    t && o)
  ) {
    const P = l;
    l = () => pt(P());
  }
  let h,
    p = (P) => {
      h = v.onStop = () => {
        it(P, c, 4);
      };
    };
  if (sn)
    return (p = He), t ? n && Fe(t, c, 3, [l(), u ? [] : void 0, p]) : l(), He;
  let g = u ? [] : bs;
  const E = () => {
    if (v.active)
      if (t) {
        const P = v.run();
        (o || a || (u ? P.some((A, K) => en(A, g[K])) : en(P, g))) &&
          (h && h(), Fe(t, c, 3, [P, g === bs ? void 0 : g, p]), (g = P));
      } else v.run();
  };
  E.allowRecurse = !!t;
  let $;
  s === "sync"
    ? ($ = E)
    : s === "post"
    ? ($ = () => xe(E, c && c.suspense))
    : ((E.pre = !0), c && (E.id = c.uid), ($ = () => qo(E)));
  const v = new Fo(l, $);
  return (
    t
      ? n
        ? E()
        : (g = v.run())
      : s === "post"
      ? xe(v.run.bind(v), c && c.suspense)
      : v.run(),
    () => {
      v.stop(), c && c.scope && $o(c.scope.effects, v);
    }
  );
}
function Gc(e, t, n) {
  const o = this.proxy,
    s = fe(e) ? (e.includes(".") ? Yr(o, e) : () => o[e]) : e.bind(o, o);
  let r;
  j(t) ? (r = t) : ((r = t.handler), (n = t));
  const i = ae;
  kt(this);
  const c = Qr(s, r.bind(o), n);
  return i ? kt(i) : _t(), c;
}
function Yr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++) o = o[n[s]];
    return o;
  };
}
function pt(e, t) {
  if (!se(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), me(e))) pt(e.value, t);
  else if (B(e)) for (let n = 0; n < e.length; n++) pt(e[n], t);
  else if (_r(e) || Mt(e))
    e.forEach((n) => {
      pt(n, t);
    });
  else if (wr(e)) for (const n in e) pt(e[n], t);
  return e;
}
function Dt(e) {
  return j(e) ? { setup: e, name: e.name } : e;
}
const Yt = (e) => !!e.type.__asyncLoader,
  Jr = (e) => e.type.__isKeepAlive;
function Xc(e, t) {
  Zr(e, "a", t);
}
function el(e, t) {
  Zr(e, "da", t);
}
function Zr(e, t, n = ae) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Dn(t, o, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Jr(s.parent.vnode) && tl(o, t, n, s), (s = s.parent);
  }
}
function tl(e, t, n, o) {
  const s = Dn(t, e, o, !0);
  Gr(() => {
    $o(o[t], s);
  }, n);
}
function Dn(e, t, n = ae, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          jt(), kt(n);
          const c = Fe(t, n, e, i);
          return _t(), Bt(), c;
        });
    return o ? s.unshift(r) : s.push(r), r;
  }
}
const Xe =
    (e) =>
    (t, n = ae) =>
      (!sn || e === "sp") && Dn(e, t, n),
  nl = Xe("bm"),
  ol = Xe("m"),
  sl = Xe("bu"),
  rl = Xe("u"),
  il = Xe("bum"),
  Gr = Xe("um"),
  cl = Xe("sp"),
  ll = Xe("rtg"),
  ul = Xe("rtc");
function al(e, t = ae) {
  Dn("ec", e, t);
}
function fl(e, t) {
  const n = ye;
  if (n === null) return e;
  const o = Un(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, c, l, a = X] = t[r];
    j(i) && (i = { mounted: i, updated: i }),
      i.deep && pt(c),
      s.push({
        dir: i,
        instance: o,
        value: c,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      });
  }
  return e;
}
function ut(e, t, n, o) {
  const s = e.dirs,
    r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    r && (c.oldValue = r[i].value);
    let l = c.dir[o];
    l && (jt(), Fe(l, n, 8, [e.el, c, e, t]), Bt());
  }
}
const Xr = "components";
function le(e, t) {
  return hl(Xr, e, !0, t) || e;
}
const dl = Symbol();
function hl(e, t, n = !0, o = !1) {
  const s = ye || ae;
  if (s) {
    const r = s.type;
    if (e === Xr) {
      const c = Vl(r, !1);
      if (c && (c === t || c === We(t) || c === Hn(We(t)))) return r;
    }
    const i = ws(s[e] || r[e], t) || ws(s.appContext[e], t);
    return !i && o ? r : i;
  }
}
function ws(e, t) {
  return e && (e[t] || e[We(t)] || e[Hn(We(t))]);
}
function zo(e, t, n = {}, o, s) {
  if (ye.isCE || (ye.parent && Yt(ye.parent) && ye.parent.isCE))
    return N("slot", t === "default" ? null : { name: t }, o && o());
  let r = e[t];
  r && r._c && (r._d = !1), de();
  const i = r && ei(r(n)),
    c = fi(
      $e,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (o ? o() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    c
  );
}
function ei(e) {
  return e.some((t) =>
    Mn(t) ? !(t.type === $t || (t.type === $e && !ei(t.children))) : !0
  )
    ? e
    : null;
}
const ao = (e) => (e ? (hi(e) ? Un(e) || e.proxy : ao(e.parent)) : null),
  Pn = be(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ao(e.parent),
    $root: (e) => ao(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ni(e),
    $forceUpdate: (e) => e.f || (e.f = () => qo(e.update)),
    $nextTick: (e) => e.n || (e.n = Dr.bind(e.proxy)),
    $watch: (e) => Gc.bind(e),
  }),
  pl = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: o,
        data: s,
        props: r,
        accessCache: i,
        type: c,
        appContext: l,
      } = e;
      let a;
      if (t[0] !== "$") {
        const g = i[t];
        if (g !== void 0)
          switch (g) {
            case 1:
              return o[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (o !== X && U(o, t)) return (i[t] = 1), o[t];
          if (s !== X && U(s, t)) return (i[t] = 2), s[t];
          if ((a = e.propsOptions[0]) && U(a, t)) return (i[t] = 3), r[t];
          if (n !== X && U(n, t)) return (i[t] = 4), n[t];
          fo && (i[t] = 0);
        }
      }
      const u = Pn[t];
      let h, p;
      if (u) return t === "$attrs" && Pe(e, "get", t), u(e);
      if ((h = c.__cssModules) && (h = h[t])) return h;
      if (n !== X && U(n, t)) return (i[t] = 4), n[t];
      if (((p = l.config.globalProperties), U(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: s, ctx: r } = e;
      return s !== X && U(s, t)
        ? ((s[t] = n), !0)
        : o !== X && U(o, t)
        ? ((o[t] = n), !0)
        : U(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: s,
          propsOptions: r,
        },
      },
      i
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== X && U(e, i)) ||
        (t !== X && U(t, i)) ||
        ((c = r[0]) && U(c, i)) ||
        U(o, i) ||
        U(Pn, i) ||
        U(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : U(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let fo = !0;
function ml(e) {
  const t = ni(e),
    n = e.proxy,
    o = e.ctx;
  (fo = !1), t.beforeCreate && vs(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: l,
    inject: a,
    created: u,
    beforeMount: h,
    mounted: p,
    beforeUpdate: g,
    updated: E,
    activated: $,
    deactivated: v,
    beforeDestroy: P,
    beforeUnmount: A,
    destroyed: K,
    unmounted: W,
    render: ce,
    renderTracked: D,
    renderTriggered: re,
    errorCaptured: Re,
    serverPrefetch: ge,
    expose: he,
    inheritAttrs: Qe,
    components: Ae,
    directives: wt,
    filters: vt,
  } = t;
  if ((a && gl(a, o, null, e.appContext.config.unwrapInjectedRef), i))
    for (const ee in i) {
      const J = i[ee];
      j(J) && (o[ee] = J.bind(n));
    }
  if (s) {
    const ee = s.call(n, n);
    se(ee) && (e.data = un(ee));
  }
  if (((fo = !0), r))
    for (const ee in r) {
      const J = r[ee],
        Ie = j(J) ? J.bind(n, n) : j(J.get) ? J.get.bind(n, n) : He,
        Ct = !j(J) && j(J.set) ? J.set.bind(n) : He,
        Ye = Te({ get: Ie, set: Ct });
      Object.defineProperty(o, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (je) => (Ye.value = je),
      });
    }
  if (c) for (const ee in c) ti(c[ee], o, n, ee);
  if (l) {
    const ee = j(l) ? l.call(n) : l;
    Reflect.ownKeys(ee).forEach((J) => {
      _n(J, ee[J]);
    });
  }
  u && vs(u, e, "c");
  function ie(ee, J) {
    B(J) ? J.forEach((Ie) => ee(Ie.bind(n))) : J && ee(J.bind(n));
  }
  if (
    (ie(nl, h),
    ie(ol, p),
    ie(sl, g),
    ie(rl, E),
    ie(Xc, $),
    ie(el, v),
    ie(al, Re),
    ie(ul, D),
    ie(ll, re),
    ie(il, A),
    ie(Gr, W),
    ie(cl, ge),
    B(he))
  )
    if (he.length) {
      const ee = e.exposed || (e.exposed = {});
      he.forEach((J) => {
        Object.defineProperty(ee, J, {
          get: () => n[J],
          set: (Ie) => (n[J] = Ie),
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === He && (e.render = ce),
    Qe != null && (e.inheritAttrs = Qe),
    Ae && (e.components = Ae),
    wt && (e.directives = wt);
}
function gl(e, t, n = He, o = !1) {
  B(e) && (e = ho(e));
  for (const s in e) {
    const r = e[s];
    let i;
    se(r)
      ? "default" in r
        ? (i = ct(r.from || s, r.default, !0))
        : (i = ct(r.from || s))
      : (i = ct(r)),
      me(i) && o
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (c) => (i.value = c),
          })
        : (t[s] = i);
  }
}
function vs(e, t, n) {
  Fe(B(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ti(e, t, n, o) {
  const s = o.includes(".") ? Yr(n, o) : () => n[o];
  if (fe(e)) {
    const r = t[e];
    j(r) && yn(s, r);
  } else if (j(e)) yn(s, e.bind(n));
  else if (se(e))
    if (B(e)) e.forEach((r) => ti(r, t, n, o));
    else {
      const r = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(r) && yn(s, r, e);
    }
}
function ni(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = r.get(t);
  let l;
  return (
    c
      ? (l = c)
      : !s.length && !n && !o
      ? (l = t)
      : ((l = {}), s.length && s.forEach((a) => Rn(l, a, i, !0)), Rn(l, t, i)),
    se(t) && r.set(t, l),
    l
  );
}
function Rn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Rn(e, r, n, !0), s && s.forEach((i) => Rn(e, i, n, !0));
  for (const i in t)
    if (!(o && i === "expose")) {
      const c = _l[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const _l = {
  data: xs,
  props: ft,
  emits: ft,
  methods: ft,
  computed: ft,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: ft,
  directives: ft,
  watch: bl,
  provide: xs,
  inject: yl,
};
function xs(e, t) {
  return t
    ? e
      ? function () {
          return be(
            j(e) ? e.call(this, this) : e,
            j(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function yl(e, t) {
  return ft(ho(e), ho(t));
}
function ho(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ft(e, t) {
  return e ? be(be(Object.create(null), e), t) : t;
}
function bl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = be(Object.create(null), e);
  for (const o in t) n[o] = _e(e[o], t[o]);
  return n;
}
function wl(e, t, n, o = !1) {
  const s = {},
    r = {};
  Cn(r, Vn, 1), (e.propsDefaults = Object.create(null)), oi(e, t, s, r);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = o ? s : Lc(s)) : e.type.props ? (e.props = s) : (e.props = r),
    (e.attrs = r);
}
function vl(e, t, n, o) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: i },
    } = e,
    c = z(s),
    [l] = e.propsOptions;
  let a = !1;
  if ((o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let p = u[h];
        if (jn(e.emitsOptions, p)) continue;
        const g = t[p];
        if (l)
          if (U(r, p)) g !== r[p] && ((r[p] = g), (a = !0));
          else {
            const E = We(p);
            s[E] = po(l, c, E, g, e, !1);
          }
        else g !== r[p] && ((r[p] = g), (a = !0));
      }
    }
  } else {
    oi(e, t, s, r) && (a = !0);
    let u;
    for (const h in c)
      (!t || (!U(t, h) && ((u = Nt(h)) === h || !U(t, u)))) &&
        (l
          ? n &&
            (n[h] !== void 0 || n[u] !== void 0) &&
            (s[h] = po(l, c, h, void 0, e, !0))
          : delete s[h]);
    if (r !== c)
      for (const h in r) (!t || (!U(t, h) && !0)) && (delete r[h], (a = !0));
  }
  a && Ge(e, "set", "$attrs");
}
function oi(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let l in t) {
      if (gn(l)) continue;
      const a = t[l];
      let u;
      s && U(s, (u = We(l)))
        ? !r || !r.includes(u)
          ? (n[u] = a)
          : ((c || (c = {}))[u] = a)
        : jn(e.emitsOptions, l) ||
          ((!(l in o) || a !== o[l]) && ((o[l] = a), (i = !0)));
    }
  if (r) {
    const l = z(n),
      a = c || X;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = po(s, l, h, a[h], e, !U(a, h));
    }
  }
  return i;
}
function po(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const c = U(i, "default");
    if (c && o === void 0) {
      const l = i.default;
      if (i.type !== Function && j(l)) {
        const { propsDefaults: a } = s;
        n in a ? (o = a[n]) : (kt(s), (o = a[n] = l.call(null, t)), _t());
      } else o = l;
    }
    i[0] &&
      (r && !c ? (o = !1) : i[1] && (o === "" || o === Nt(n)) && (o = !0));
  }
  return o;
}
function si(e, t, n = !1) {
  const o = t.propsCache,
    s = o.get(e);
  if (s) return s;
  const r = e.props,
    i = {},
    c = [];
  let l = !1;
  if (!j(e)) {
    const u = (h) => {
      l = !0;
      const [p, g] = si(h, t, !0);
      be(i, p), g && c.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l) return se(e) && o.set(e, Rt), Rt;
  if (B(r))
    for (let u = 0; u < r.length; u++) {
      const h = We(r[u]);
      Cs(h) && (i[h] = X);
    }
  else if (r)
    for (const u in r) {
      const h = We(u);
      if (Cs(h)) {
        const p = r[u],
          g = (i[h] = B(p) || j(p) ? { type: p } : p);
        if (g) {
          const E = Ss(Boolean, g.type),
            $ = Ss(String, g.type);
          (g[0] = E > -1),
            (g[1] = $ < 0 || E < $),
            (E > -1 || U(g, "default")) && c.push(h);
        }
      }
    }
  const a = [i, c];
  return se(e) && o.set(e, a), a;
}
function Cs(e) {
  return e[0] !== "$";
}
function Es(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Is(e, t) {
  return Es(e) === Es(t);
}
function Ss(e, t) {
  return B(t) ? t.findIndex((n) => Is(n, e)) : j(t) && Is(t, e) ? 0 : -1;
}
const ri = (e) => e[0] === "_" || e === "$stable",
  Wo = (e) => (B(e) ? e.map(qe) : [qe(e)]),
  xl = (e, t, n) => {
    if (t._n) return t;
    const o = Ke((...s) => Wo(t(...s)), n);
    return (o._c = !1), o;
  },
  ii = (e, t, n) => {
    const o = e._ctx;
    for (const s in e) {
      if (ri(s)) continue;
      const r = e[s];
      if (j(r)) t[s] = xl(s, r, o);
      else if (r != null) {
        const i = Wo(r);
        t[s] = () => i;
      }
    }
  },
  ci = (e, t) => {
    const n = Wo(t);
    e.slots.default = () => n;
  },
  Cl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = z(t)), Cn(t, "_", n)) : ii(t, (e.slots = {}));
    } else (e.slots = {}), t && ci(e, t);
    Cn(e.slots, Vn, 1);
  },
  El = (e, t, n) => {
    const { vnode: o, slots: s } = e;
    let r = !0,
      i = X;
    if (o.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (r = !1)
          : (be(s, t), !n && c === 1 && delete s._)
        : ((r = !t.$stable), ii(t, s)),
        (i = t);
    } else t && (ci(e, t), (i = { default: 1 }));
    if (r) for (const c in s) !ri(c) && !(c in i) && delete s[c];
  };
function li() {
  return {
    app: null,
    config: {
      isNativeTag: Xi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Il = 0;
function Sl(e, t) {
  return function (o, s = null) {
    j(o) || (o = Object.assign({}, o)), s != null && !se(s) && (s = null);
    const r = li(),
      i = new Set();
    let c = !1;
    const l = (r.app = {
      _uid: Il++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Kl,
      get config() {
        return r.config;
      },
      set config(a) {},
      use(a, ...u) {
        return (
          i.has(a) ||
            (a && j(a.install)
              ? (i.add(a), a.install(l, ...u))
              : j(a) && (i.add(a), a(l, ...u))),
          l
        );
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), l;
      },
      component(a, u) {
        return u ? ((r.components[a] = u), l) : r.components[a];
      },
      directive(a, u) {
        return u ? ((r.directives[a] = u), l) : r.directives[a];
      },
      mount(a, u, h) {
        if (!c) {
          const p = N(o, s);
          return (
            (p.appContext = r),
            u && t ? t(p, a) : e(p, a, h),
            (c = !0),
            (l._container = a),
            (a.__vue_app__ = l),
            Un(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(a, u) {
        return (r.provides[a] = u), l;
      },
    });
    return l;
  };
}
function mo(e, t, n, o, s = !1) {
  if (B(e)) {
    e.forEach((p, g) => mo(p, t && (B(t) ? t[g] : t), n, o, s));
    return;
  }
  if (Yt(o) && !s) return;
  const r = o.shapeFlag & 4 ? Un(o.component) || o.component.proxy : o.el,
    i = s ? null : r,
    { i: c, r: l } = e,
    a = t && t.r,
    u = c.refs === X ? (c.refs = {}) : c.refs,
    h = c.setupState;
  if (
    (a != null &&
      a !== l &&
      (fe(a)
        ? ((u[a] = null), U(h, a) && (h[a] = null))
        : me(a) && (a.value = null)),
    j(l))
  )
    it(l, c, 12, [i, u]);
  else {
    const p = fe(l),
      g = me(l);
    if (p || g) {
      const E = () => {
        if (e.f) {
          const $ = p ? u[l] : l.value;
          s
            ? B($) && $o($, r)
            : B($)
            ? $.includes(r) || $.push(r)
            : p
            ? ((u[l] = [r]), U(h, l) && (h[l] = u[l]))
            : ((l.value = [r]), e.k && (u[e.k] = l.value));
        } else
          p
            ? ((u[l] = i), U(h, l) && (h[l] = i))
            : g && ((l.value = i), e.k && (u[e.k] = i));
      };
      i ? ((E.id = -1), xe(E, n)) : E();
    }
  }
}
const xe = Zc;
function Pl(e) {
  return Rl(e);
}
function Rl(e, t) {
  const n = ic();
  n.__VUE__ = !0;
  const {
      insert: o,
      remove: s,
      patchProp: r,
      createElement: i,
      createText: c,
      createComment: l,
      setText: a,
      setElementText: u,
      parentNode: h,
      nextSibling: p,
      setScopeId: g = He,
      cloneNode: E,
      insertStaticContent: $,
    } = e,
    v = (
      f,
      d,
      m,
      b = null,
      y = null,
      C = null,
      R = !1,
      x = null,
      I = !!d.dynamicChildren
    ) => {
      if (f === d) return;
      f && !Kt(f, d) && ((b = O(f)), Me(f, y, C, !0), (f = null)),
        d.patchFlag === -2 && ((I = !1), (d.dynamicChildren = null));
      const { type: w, ref: L, shapeFlag: M } = d;
      switch (w) {
        case Qo:
          P(f, d, m, b);
          break;
        case $t:
          A(f, d, m, b);
          break;
        case Gn:
          f == null && K(d, m, b, R);
          break;
        case $e:
          wt(f, d, m, b, y, C, R, x, I);
          break;
        default:
          M & 1
            ? D(f, d, m, b, y, C, R, x, I)
            : M & 6
            ? vt(f, d, m, b, y, C, R, x, I)
            : (M & 64 || M & 128) && w.process(f, d, m, b, y, C, R, x, I, te);
      }
      L != null && y && mo(L, f && f.ref, C, d || f, !d);
    },
    P = (f, d, m, b) => {
      if (f == null) o((d.el = c(d.children)), m, b);
      else {
        const y = (d.el = f.el);
        d.children !== f.children && a(y, d.children);
      }
    },
    A = (f, d, m, b) => {
      f == null ? o((d.el = l(d.children || "")), m, b) : (d.el = f.el);
    },
    K = (f, d, m, b) => {
      [f.el, f.anchor] = $(f.children, d, m, b, f.el, f.anchor);
    },
    W = ({ el: f, anchor: d }, m, b) => {
      let y;
      for (; f && f !== d; ) (y = p(f)), o(f, m, b), (f = y);
      o(d, m, b);
    },
    ce = ({ el: f, anchor: d }) => {
      let m;
      for (; f && f !== d; ) (m = p(f)), s(f), (f = m);
      s(d);
    },
    D = (f, d, m, b, y, C, R, x, I) => {
      (R = R || d.type === "svg"),
        f == null ? re(d, m, b, y, C, R, x, I) : he(f, d, y, C, R, x, I);
    },
    re = (f, d, m, b, y, C, R, x) => {
      let I, w;
      const {
        type: L,
        props: M,
        shapeFlag: k,
        transition: H,
        patchFlag: q,
        dirs: Z,
      } = f;
      if (f.el && E !== void 0 && q === -1) I = f.el = E(f.el);
      else {
        if (
          ((I = f.el = i(f.type, C, M && M.is, M)),
          k & 8
            ? u(I, f.children)
            : k & 16 &&
              ge(f.children, I, null, b, y, C && L !== "foreignObject", R, x),
          Z && ut(f, null, b, "created"),
          M)
        ) {
          for (const oe in M)
            oe !== "value" &&
              !gn(oe) &&
              r(I, oe, null, M[oe], C, f.children, b, y, S);
          "value" in M && r(I, "value", null, M.value),
            (w = M.onVnodeBeforeMount) && De(w, b, f);
        }
        Re(I, f, f.scopeId, R, b);
      }
      Z && ut(f, null, b, "beforeMount");
      const G = (!y || (y && !y.pendingBranch)) && H && !H.persisted;
      G && H.beforeEnter(I),
        o(I, d, m),
        ((w = M && M.onVnodeMounted) || G || Z) &&
          xe(() => {
            w && De(w, b, f), G && H.enter(I), Z && ut(f, null, b, "mounted");
          }, y);
    },
    Re = (f, d, m, b, y) => {
      if ((m && g(f, m), b)) for (let C = 0; C < b.length; C++) g(f, b[C]);
      if (y) {
        let C = y.subTree;
        if (d === C) {
          const R = y.vnode;
          Re(f, R, R.scopeId, R.slotScopeIds, y.parent);
        }
      }
    },
    ge = (f, d, m, b, y, C, R, x, I = 0) => {
      for (let w = I; w < f.length; w++) {
        const L = (f[w] = x ? ot(f[w]) : qe(f[w]));
        v(null, L, d, m, b, y, C, R, x);
      }
    },
    he = (f, d, m, b, y, C, R) => {
      const x = (d.el = f.el);
      let { patchFlag: I, dynamicChildren: w, dirs: L } = d;
      I |= f.patchFlag & 16;
      const M = f.props || X,
        k = d.props || X;
      let H;
      m && at(m, !1),
        (H = k.onVnodeBeforeUpdate) && De(H, m, d, f),
        L && ut(d, f, m, "beforeUpdate"),
        m && at(m, !0);
      const q = y && d.type !== "foreignObject";
      if (
        (w
          ? Qe(f.dynamicChildren, w, x, m, b, q, C)
          : R || Ie(f, d, x, null, m, b, q, C, !1),
        I > 0)
      ) {
        if (I & 16) Ae(x, d, M, k, m, b, y);
        else if (
          (I & 2 && M.class !== k.class && r(x, "class", null, k.class, y),
          I & 4 && r(x, "style", M.style, k.style, y),
          I & 8)
        ) {
          const Z = d.dynamicProps;
          for (let G = 0; G < Z.length; G++) {
            const oe = Z[G],
              Oe = M[oe],
              Et = k[oe];
            (Et !== Oe || oe === "value") &&
              r(x, oe, Oe, Et, y, f.children, m, b, S);
          }
        }
        I & 1 && f.children !== d.children && u(x, d.children);
      } else !R && w == null && Ae(x, d, M, k, m, b, y);
      ((H = k.onVnodeUpdated) || L) &&
        xe(() => {
          H && De(H, m, d, f), L && ut(d, f, m, "updated");
        }, b);
    },
    Qe = (f, d, m, b, y, C, R) => {
      for (let x = 0; x < d.length; x++) {
        const I = f[x],
          w = d[x],
          L =
            I.el && (I.type === $e || !Kt(I, w) || I.shapeFlag & 70)
              ? h(I.el)
              : m;
        v(I, w, L, null, b, y, C, R, !0);
      }
    },
    Ae = (f, d, m, b, y, C, R) => {
      if (m !== b) {
        for (const x in b) {
          if (gn(x)) continue;
          const I = b[x],
            w = m[x];
          I !== w && x !== "value" && r(f, x, w, I, R, d.children, y, C, S);
        }
        if (m !== X)
          for (const x in m)
            !gn(x) && !(x in b) && r(f, x, m[x], null, R, d.children, y, C, S);
        "value" in b && r(f, "value", m.value, b.value);
      }
    },
    wt = (f, d, m, b, y, C, R, x, I) => {
      const w = (d.el = f ? f.el : c("")),
        L = (d.anchor = f ? f.anchor : c(""));
      let { patchFlag: M, dynamicChildren: k, slotScopeIds: H } = d;
      H && (x = x ? x.concat(H) : H),
        f == null
          ? (o(w, m, b), o(L, m, b), ge(d.children, m, L, y, C, R, x, I))
          : M > 0 && M & 64 && k && f.dynamicChildren
          ? (Qe(f.dynamicChildren, k, m, y, C, R, x),
            (d.key != null || (y && d === y.subTree)) && ui(f, d, !0))
          : Ie(f, d, m, L, y, C, R, x, I);
    },
    vt = (f, d, m, b, y, C, R, x, I) => {
      (d.slotScopeIds = x),
        f == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, m, b, R, I)
            : xt(d, m, b, y, C, R, I)
          : ie(f, d, I);
    },
    xt = (f, d, m, b, y, C, R) => {
      const x = (f.component = Fl(f, b, y));
      if ((Jr(f) && (x.ctx.renderer = te), Nl(x), x.asyncDep)) {
        if ((y && y.registerDep(x, ee), !f.el)) {
          const I = (x.subTree = N($t));
          A(null, I, d, m);
        }
        return;
      }
      ee(x, f, d, m, y, C, R);
    },
    ie = (f, d, m) => {
      const b = (d.component = f.component);
      if (Qc(f, d, m))
        if (b.asyncDep && !b.asyncResolved) {
          J(b, d, m);
          return;
        } else (b.next = d), Vc(b.update), b.update();
      else (d.el = f.el), (b.vnode = d);
    },
    ee = (f, d, m, b, y, C, R) => {
      const x = () => {
          if (f.isMounted) {
            let { next: L, bu: M, u: k, parent: H, vnode: q } = f,
              Z = L,
              G;
            at(f, !1),
              L ? ((L.el = q.el), J(f, L, R)) : (L = q),
              M && Jn(M),
              (G = L.props && L.props.onVnodeBeforeUpdate) && De(G, H, L, q),
              at(f, !0);
            const oe = Zn(f),
              Oe = f.subTree;
            (f.subTree = oe),
              v(Oe, oe, h(Oe.el), O(Oe), f, y, C),
              (L.el = oe.el),
              Z === null && Yc(f, oe.el),
              k && xe(k, y),
              (G = L.props && L.props.onVnodeUpdated) &&
                xe(() => De(G, H, L, q), y);
          } else {
            let L;
            const { el: M, props: k } = d,
              { bm: H, m: q, parent: Z } = f,
              G = Yt(d);
            if (
              (at(f, !1),
              H && Jn(H),
              !G && (L = k && k.onVnodeBeforeMount) && De(L, Z, d),
              at(f, !0),
              M && F)
            ) {
              const oe = () => {
                (f.subTree = Zn(f)), F(M, f.subTree, f, y, null);
              };
              G
                ? d.type.__asyncLoader().then(() => !f.isUnmounted && oe())
                : oe();
            } else {
              const oe = (f.subTree = Zn(f));
              v(null, oe, m, b, f, y, C), (d.el = oe.el);
            }
            if ((q && xe(q, y), !G && (L = k && k.onVnodeMounted))) {
              const oe = d;
              xe(() => De(L, Z, oe), y);
            }
            (d.shapeFlag & 256 ||
              (Z && Yt(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
              f.a &&
              xe(f.a, y),
              (f.isMounted = !0),
              (d = m = b = null);
          }
        },
        I = (f.effect = new Fo(x, () => qo(w), f.scope)),
        w = (f.update = () => I.run());
      (w.id = f.uid), at(f, !0), w();
    },
    J = (f, d, m) => {
      d.component = f;
      const b = f.vnode.props;
      (f.vnode = d),
        (f.next = null),
        vl(f, d.props, b, m),
        El(f, d.children, m),
        jt(),
        _s(),
        Bt();
    },
    Ie = (f, d, m, b, y, C, R, x, I = !1) => {
      const w = f && f.children,
        L = f ? f.shapeFlag : 0,
        M = d.children,
        { patchFlag: k, shapeFlag: H } = d;
      if (k > 0) {
        if (k & 128) {
          Ye(w, M, m, b, y, C, R, x, I);
          return;
        } else if (k & 256) {
          Ct(w, M, m, b, y, C, R, x, I);
          return;
        }
      }
      H & 8
        ? (L & 16 && S(w, y, C), M !== w && u(m, M))
        : L & 16
        ? H & 16
          ? Ye(w, M, m, b, y, C, R, x, I)
          : S(w, y, C, !0)
        : (L & 8 && u(m, ""), H & 16 && ge(M, m, b, y, C, R, x, I));
    },
    Ct = (f, d, m, b, y, C, R, x, I) => {
      (f = f || Rt), (d = d || Rt);
      const w = f.length,
        L = d.length,
        M = Math.min(w, L);
      let k;
      for (k = 0; k < M; k++) {
        const H = (d[k] = I ? ot(d[k]) : qe(d[k]));
        v(f[k], H, m, null, y, C, R, x, I);
      }
      w > L ? S(f, y, C, !0, !1, M) : ge(d, m, b, y, C, R, x, I, M);
    },
    Ye = (f, d, m, b, y, C, R, x, I) => {
      let w = 0;
      const L = d.length;
      let M = f.length - 1,
        k = L - 1;
      for (; w <= M && w <= k; ) {
        const H = f[w],
          q = (d[w] = I ? ot(d[w]) : qe(d[w]));
        if (Kt(H, q)) v(H, q, m, null, y, C, R, x, I);
        else break;
        w++;
      }
      for (; w <= M && w <= k; ) {
        const H = f[M],
          q = (d[k] = I ? ot(d[k]) : qe(d[k]));
        if (Kt(H, q)) v(H, q, m, null, y, C, R, x, I);
        else break;
        M--, k--;
      }
      if (w > M) {
        if (w <= k) {
          const H = k + 1,
            q = H < L ? d[H].el : b;
          for (; w <= k; )
            v(null, (d[w] = I ? ot(d[w]) : qe(d[w])), m, q, y, C, R, x, I), w++;
        }
      } else if (w > k) for (; w <= M; ) Me(f[w], y, C, !0), w++;
      else {
        const H = w,
          q = w,
          Z = new Map();
        for (w = q; w <= k; w++) {
          const Se = (d[w] = I ? ot(d[w]) : qe(d[w]));
          Se.key != null && Z.set(Se.key, w);
        }
        let G,
          oe = 0;
        const Oe = k - q + 1;
        let Et = !1,
          is = 0;
        const Ut = new Array(Oe);
        for (w = 0; w < Oe; w++) Ut[w] = 0;
        for (w = H; w <= M; w++) {
          const Se = f[w];
          if (oe >= Oe) {
            Me(Se, y, C, !0);
            continue;
          }
          let Be;
          if (Se.key != null) Be = Z.get(Se.key);
          else
            for (G = q; G <= k; G++)
              if (Ut[G - q] === 0 && Kt(Se, d[G])) {
                Be = G;
                break;
              }
          Be === void 0
            ? Me(Se, y, C, !0)
            : ((Ut[Be - q] = w + 1),
              Be >= is ? (is = Be) : (Et = !0),
              v(Se, d[Be], m, null, y, C, R, x, I),
              oe++);
        }
        const cs = Et ? Ml(Ut) : Rt;
        for (G = cs.length - 1, w = Oe - 1; w >= 0; w--) {
          const Se = q + w,
            Be = d[Se],
            ls = Se + 1 < L ? d[Se + 1].el : b;
          Ut[w] === 0
            ? v(null, Be, m, ls, y, C, R, x, I)
            : Et && (G < 0 || w !== cs[G] ? je(Be, m, ls, 2) : G--);
        }
      }
    },
    je = (f, d, m, b, y = null) => {
      const { el: C, type: R, transition: x, children: I, shapeFlag: w } = f;
      if (w & 6) {
        je(f.component.subTree, d, m, b);
        return;
      }
      if (w & 128) {
        f.suspense.move(d, m, b);
        return;
      }
      if (w & 64) {
        R.move(f, d, m, te);
        return;
      }
      if (R === $e) {
        o(C, d, m);
        for (let M = 0; M < I.length; M++) je(I[M], d, m, b);
        o(f.anchor, d, m);
        return;
      }
      if (R === Gn) {
        W(f, d, m);
        return;
      }
      if (b !== 2 && w & 1 && x)
        if (b === 0) x.beforeEnter(C), o(C, d, m), xe(() => x.enter(C), y);
        else {
          const { leave: M, delayLeave: k, afterLeave: H } = x,
            q = () => o(C, d, m),
            Z = () => {
              M(C, () => {
                q(), H && H();
              });
            };
          k ? k(C, q, Z) : Z();
        }
      else o(C, d, m);
    },
    Me = (f, d, m, b = !1, y = !1) => {
      const {
        type: C,
        props: R,
        ref: x,
        children: I,
        dynamicChildren: w,
        shapeFlag: L,
        patchFlag: M,
        dirs: k,
      } = f;
      if ((x != null && mo(x, null, m, f, !0), L & 256)) {
        d.ctx.deactivate(f);
        return;
      }
      const H = L & 1 && k,
        q = !Yt(f);
      let Z;
      if ((q && (Z = R && R.onVnodeBeforeUnmount) && De(Z, d, f), L & 6))
        T(f.component, m, b);
      else {
        if (L & 128) {
          f.suspense.unmount(m, b);
          return;
        }
        H && ut(f, null, d, "beforeUnmount"),
          L & 64
            ? f.type.remove(f, d, m, y, te, b)
            : w && (C !== $e || (M > 0 && M & 64))
            ? S(w, d, m, !1, !0)
            : ((C === $e && M & 384) || (!y && L & 16)) && S(I, d, m),
          b && Vt(f);
      }
      ((q && (Z = R && R.onVnodeUnmounted)) || H) &&
        xe(() => {
          Z && De(Z, d, f), H && ut(f, null, d, "unmounted");
        }, m);
    },
    Vt = (f) => {
      const { type: d, el: m, anchor: b, transition: y } = f;
      if (d === $e) {
        _(m, b);
        return;
      }
      if (d === Gn) {
        ce(f);
        return;
      }
      const C = () => {
        s(m), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (f.shapeFlag & 1 && y && !y.persisted) {
        const { leave: R, delayLeave: x } = y,
          I = () => R(m, C);
        x ? x(f.el, C, I) : I();
      } else C();
    },
    _ = (f, d) => {
      let m;
      for (; f !== d; ) (m = p(f)), s(f), (f = m);
      s(d);
    },
    T = (f, d, m) => {
      const { bum: b, scope: y, update: C, subTree: R, um: x } = f;
      b && Jn(b),
        y.stop(),
        C && ((C.active = !1), Me(R, f, d, m)),
        x && xe(x, d),
        xe(() => {
          f.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    S = (f, d, m, b = !1, y = !1, C = 0) => {
      for (let R = C; R < f.length; R++) Me(f[R], d, m, b, y);
    },
    O = (f) =>
      f.shapeFlag & 6
        ? O(f.component.subTree)
        : f.shapeFlag & 128
        ? f.suspense.next()
        : p(f.anchor || f.el),
    Q = (f, d, m) => {
      f == null
        ? d._vnode && Me(d._vnode, null, null, !0)
        : v(d._vnode || null, f, d, null, null, null, m),
        _s(),
        Ur(),
        (d._vnode = f);
    },
    te = {
      p: v,
      um: Me,
      m: je,
      r: Vt,
      mt: xt,
      mc: ge,
      pc: Ie,
      pbc: Qe,
      n: O,
      o: e,
    };
  let V, F;
  return t && ([V, F] = t(te)), { render: Q, hydrate: V, createApp: Sl(Q, V) };
}
function at({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ui(e, t, n = !1) {
  const o = e.children,
    s = t.children;
  if (B(o) && B(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let c = s[r];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = s[r] = ot(s[r])), (c.el = i.el)),
        n || ui(i, c));
    }
}
function Ml(e) {
  const t = e.slice(),
    n = [0];
  let o, s, r, i, c;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const a = e[o];
    if (a !== 0) {
      if (((s = n[n.length - 1]), e[s] < a)) {
        (t[o] = s), n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        (c = (r + i) >> 1), e[n[c]] < a ? (r = c + 1) : (i = c);
      a < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), (n[r] = o));
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; ) (n[r] = i), (i = t[i]);
  return n;
}
const Tl = (e) => e.__isTeleport,
  $e = Symbol(void 0),
  Qo = Symbol(void 0),
  $t = Symbol(void 0),
  Gn = Symbol(void 0),
  Jt = [];
let ke = null;
function de(e = !1) {
  Jt.push((ke = e ? null : []));
}
function Al() {
  Jt.pop(), (ke = Jt[Jt.length - 1] || null);
}
let on = 1;
function Ps(e) {
  on += e;
}
function ai(e) {
  return (
    (e.dynamicChildren = on > 0 ? ke || Rt : null),
    Al(),
    on > 0 && ke && ke.push(e),
    e
  );
}
function we(e, t, n, o, s, r) {
  return ai(ne(e, t, n, o, s, r, !0));
}
function fi(e, t, n, o, s) {
  return ai(N(e, t, n, o, s, !0));
}
function Mn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Kt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vn = "__vInternal",
  di = ({ key: e }) => (e != null ? e : null),
  bn = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? fe(e) || me(e) || j(e)
        ? { i: ye, r: e, k: t, f: !!n }
        : e
      : null;
function ne(
  e,
  t = null,
  n = null,
  o = 0,
  s = null,
  r = e === $e ? 0 : 1,
  i = !1,
  c = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && di(t),
    ref: t && bn(t),
    scopeId: Bn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    c
      ? (Yo(l, n), r & 128 && e.normalize(l))
      : n && (l.shapeFlag |= fe(n) ? 8 : 16),
    on > 0 &&
      !i &&
      ke &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      ke.push(l),
    l
  );
}
const N = Ol;
function Ol(e, t = null, n = null, o = 0, s = null, r = !1) {
  if (((!e || e === dl) && (e = $t), Mn(e))) {
    const c = Lt(e, t, !0);
    return (
      n && Yo(c, n),
      on > 0 &&
        !r &&
        ke &&
        (c.shapeFlag & 6 ? (ke[ke.indexOf(e)] = c) : ke.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if ((Ul(e) && (e = e.__vccOpts), t)) {
    t = $l(t);
    let { class: c, style: l } = t;
    c && !fe(c) && (t.class = To(c)),
      se(l) && ($r(l) && !B(l) && (l = be({}, l)), (t.style = Mo(l)));
  }
  const i = fe(e) ? 1 : Jc(e) ? 128 : Tl(e) ? 64 : se(e) ? 4 : j(e) ? 2 : 0;
  return ne(e, t, n, o, s, i, r, !0);
}
function $l(e) {
  return e ? ($r(e) || Vn in e ? be({}, e) : e) : null;
}
function Lt(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e,
    c = t ? Ll(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && di(c),
    ref:
      t && t.ref ? (n && s ? (B(s) ? s.concat(bn(t)) : [s, bn(t)]) : bn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== $e ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Lt(e.ssContent),
    ssFallback: e.ssFallback && Lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function et(e = " ", t = 0) {
  return N(Qo, null, e, t);
}
function qe(e) {
  return e == null || typeof e == "boolean"
    ? N($t)
    : B(e)
    ? N($e, null, e.slice())
    : typeof e == "object"
    ? ot(e)
    : N(Qo, null, String(e));
}
function ot(e) {
  return e.el === null || e.memo ? e : Lt(e);
}
function Yo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (B(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Yo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Vn in t)
        ? (t._ctx = ye)
        : s === 3 &&
          ye &&
          (ye.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: ye }), (n = 32))
      : ((t = String(t)), o & 64 ? ((n = 16), (t = [et(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ll(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = To([t.class, o.class]));
      else if (s === "style") t.style = Mo([t.style, o.style]);
      else if ($n(s)) {
        const r = t[s],
          i = o[s];
        i &&
          r !== i &&
          !(B(r) && r.includes(i)) &&
          (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function De(e, t, n, o = null) {
  Fe(e, t, 7, [n, o]);
}
const kl = li();
let Hl = 0;
function Fl(e, t, n) {
  const o = e.type,
    s = (t ? t.appContext : e.appContext) || kl,
    r = {
      uid: Hl++,
      vnode: e,
      type: o,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new vr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: si(o, s),
      emitsOptions: qr(o, s),
      emit: null,
      emitted: null,
      propsDefaults: X,
      inheritAttrs: o.inheritAttrs,
      ctx: X,
      data: X,
      props: X,
      attrs: X,
      slots: X,
      refs: X,
      setupState: X,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = qc.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let ae = null;
const kt = (e) => {
    (ae = e), e.scope.on();
  },
  _t = () => {
    ae && ae.scope.off(), (ae = null);
  };
function hi(e) {
  return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Nl(e, t = !1) {
  sn = t;
  const { props: n, children: o } = e.vnode,
    s = hi(e);
  wl(e, n, s, t), Cl(e, o);
  const r = s ? jl(e, t) : void 0;
  return (sn = !1), r;
}
function jl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Vo(new Proxy(e.ctx, pl)));
  const { setup: o } = n;
  if (o) {
    const s = (e.setupContext = o.length > 1 ? Dl(e) : null);
    kt(e), jt();
    const r = it(o, e, 0, [e.props, s]);
    if ((Bt(), _t(), yr(r))) {
      if ((r.then(_t, _t), t))
        return r
          .then((i) => {
            Rs(e, i, t);
          })
          .catch((i) => {
            Nn(i, e, 0);
          });
      e.asyncDep = r;
    } else Rs(e, r, t);
  } else pi(e, t);
}
function Rs(e, t, n) {
  j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : se(t) && (e.setupState = Nr(t)),
    pi(e, n);
}
let Ms;
function pi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Ms && !o.render) {
      const s = o.template;
      if (s) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = o,
          a = be(be({ isCustomElement: r, delimiters: c }, i), l);
        o.render = Ms(s, a);
      }
    }
    e.render = o.render || He;
  }
  kt(e), jt(), ml(e), Bt(), _t();
}
function Bl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Pe(e, "get", "$attrs"), t[n];
    },
  });
}
function Dl(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Bl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Un(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Nr(Vo(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Pn) return Pn[n](e);
        },
      }))
    );
}
function Vl(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Ul(e) {
  return j(e) && "__vccOpts" in e;
}
const Te = (e, t) => jc(e, t, sn);
function Tn(e, t, n) {
  const o = arguments.length;
  return o === 2
    ? se(t) && !B(t)
      ? Mn(t)
        ? N(e, null, [t])
        : N(e, t)
      : N(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : o === 3 && Mn(n) && (n = [n]),
      N(e, t, n));
}
const Kl = "3.2.38",
  ql = "http://www.w3.org/2000/svg",
  ht = typeof document < "u" ? document : null,
  Ts = ht && ht.createElement("template"),
  zl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const s = t
        ? ht.createElementNS(ql, e)
        : ht.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          o &&
          o.multiple != null &&
          s.setAttribute("multiple", o.multiple),
        s
      );
    },
    createText: (e) => ht.createTextNode(e),
    createComment: (e) => ht.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ht.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, o, s, r) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === r || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === r || !(s = s.nextSibling));

        );
      else {
        Ts.innerHTML = o ? `<svg>${e}</svg>` : e;
        const c = Ts.content;
        if (o) {
          const l = c.firstChild;
          for (; l.firstChild; ) c.appendChild(l.firstChild);
          c.removeChild(l);
        }
        t.insertBefore(c, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Wl(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Ql(e, t, n) {
  const o = e.style,
    s = fe(n);
  if (n && !s) {
    for (const r in n) go(o, r, n[r]);
    if (t && !fe(t)) for (const r in t) n[r] == null && go(o, r, "");
  } else {
    const r = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (o.display = r);
  }
}
const As = /\s*!important$/;
function go(e, t, n) {
  if (B(n)) n.forEach((o) => go(e, t, o));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const o = Yl(e, t);
    As.test(n)
      ? e.setProperty(Nt(o), n.replace(As, ""), "important")
      : (e[o] = n);
  }
}
const Os = ["Webkit", "Moz", "ms"],
  Xn = {};
function Yl(e, t) {
  const n = Xn[t];
  if (n) return n;
  let o = We(t);
  if (o !== "filter" && o in e) return (Xn[t] = o);
  o = Hn(o);
  for (let s = 0; s < Os.length; s++) {
    const r = Os[s] + o;
    if (r in e) return (Xn[t] = r);
  }
  return t;
}
const $s = "http://www.w3.org/1999/xlink";
function Jl(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS($s, t.slice(6, t.length))
      : e.setAttributeNS($s, t, n);
  else {
    const r = Yi(t);
    n == null || (r && !mr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function Zl(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n == null ? "" : n;
    (e.value !== l || e.tagName === "OPTION") && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = mr(n))
      : n == null && l === "string"
      ? ((n = ""), (c = !0))
      : l === "number" && ((n = 0), (c = !0));
  }
  try {
    e[t] = n;
  } catch {}
  c && e.removeAttribute(t);
}
const [mi, Gl] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp &&
      (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let _o = 0;
const Xl = Promise.resolve(),
  eu = () => {
    _o = 0;
  },
  tu = () => _o || (Xl.then(eu), (_o = mi()));
function nu(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ou(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function su(e, t, n, o, s = null) {
  const r = e._vei || (e._vei = {}),
    i = r[t];
  if (o && i) i.value = o;
  else {
    const [c, l] = ru(t);
    if (o) {
      const a = (r[t] = iu(o, s));
      nu(e, c, a, l);
    } else i && (ou(e, c, i, l), (r[t] = void 0));
  }
}
const Ls = /(?:Once|Passive|Capture)$/;
function ru(e) {
  let t;
  if (Ls.test(e)) {
    t = {};
    let o;
    for (; (o = e.match(Ls)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Nt(e.slice(2)), t];
}
function iu(e, t) {
  const n = (o) => {
    const s = o.timeStamp || mi();
    (Gl || s >= n.attached - 1) && Fe(cu(o, n.value), t, 5, [o]);
  };
  return (n.value = e), (n.attached = tu()), n;
}
function cu(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((o) => (s) => !s._stopped && o && o(s))
    );
  } else return t;
}
const ks = /^on[a-z]/,
  lu = (e, t, n, o, s = !1, r, i, c, l) => {
    t === "class"
      ? Wl(e, o, s)
      : t === "style"
      ? Ql(e, n, o)
      : $n(t)
      ? Oo(t) || su(e, t, n, o, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : uu(e, t, o, s)
        )
      ? Zl(e, t, o, r, i, c, l)
      : (t === "true-value"
          ? (e._trueValue = o)
          : t === "false-value" && (e._falseValue = o),
        Jl(e, t, o, s));
  };
function uu(e, t, n, o) {
  return o
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && ks.test(t) && j(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (ks.test(t) && fe(n))
    ? !1
    : t in e;
}
const au = ["ctrl", "shift", "alt", "meta"],
  fu = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => au.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  du =
    (e, t) =>
    (n, ...o) => {
      for (let s = 0; s < t.length; s++) {
        const r = fu[t[s]];
        if (r && r(n, t)) return;
      }
      return e(n, ...o);
    },
  hu = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : qt(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n &&
        (o
          ? t
            ? (o.beforeEnter(e), qt(e, !0), o.enter(e))
            : o.leave(e, () => {
                qt(e, !1);
              })
          : qt(e, t));
    },
    beforeUnmount(e, { value: t }) {
      qt(e, t);
    },
  };
function qt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const pu = be({ patchProp: lu }, zl);
let Hs;
function mu() {
  return Hs || (Hs = Pl(pu));
}
const gu = (...e) => {
  const t = mu().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (o) => {
      const s = _u(o);
      if (!s) return;
      const r = t._component;
      !j(r) && !r.render && !r.template && (r.template = s.innerHTML),
        (s.innerHTML = "");
      const i = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function _u(e) {
  return fe(e) ? document.querySelector(e) : e;
}
var yu = !1;
/*!
 * pinia v2.0.22
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const bu = Symbol();
var Fs;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Fs || (Fs = {}));
function wu() {
  const e = cc(!0),
    t = e.run(() => Hr({}));
  let n = [],
    o = [];
  const s = Vo({
    install(r) {
      (s._a = r),
        r.provide(bu, s),
        (r.config.globalProperties.$pinia = s),
        o.forEach((i) => n.push(i)),
        (o = []);
    },
    use(r) {
      return !this._a && !yu ? o.push(r) : n.push(r), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
/*!
 * vue-router v4.1.5
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Pt = typeof window < "u";
function vu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function eo(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Ne(s) ? s.map(e) : e(s);
  }
  return n;
}
const Zt = () => {},
  Ne = Array.isArray,
  xu = /\/$/,
  Cu = (e) => e.replace(xu, "");
function to(e, t, n = "/") {
  let o,
    s = {},
    r = "",
    i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 &&
      ((o = t.slice(0, l)),
      (r = t.slice(l + 1, c > -1 ? c : t.length)),
      (s = e(r))),
    c > -1 && ((o = o || t.slice(0, c)), (i = t.slice(c, t.length))),
    (o = Pu(o != null ? o : t, n)),
    { fullPath: o + (r && "?") + r + i, path: o, query: s, hash: i }
  );
}
function Eu(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ns(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Iu(e, t, n) {
  const o = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    o > -1 &&
    o === s &&
    Ht(t.matched[o], n.matched[s]) &&
    gi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Ht(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function gi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Su(e[n], t[n])) return !1;
  return !0;
}
function Su(e, t) {
  return Ne(e) ? js(e, t) : Ne(t) ? js(t, e) : e === t;
}
function js(e, t) {
  return Ne(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t;
}
function Pu(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    o = e.split("/");
  let s = n.length - 1,
    r,
    i;
  for (r = 0; r < o.length; r++)
    if (((i = o[r]), i !== "."))
      if (i === "..") s > 1 && s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    o.slice(r - (r === o.length ? 1 : 0)).join("/")
  );
}
var rn;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(rn || (rn = {}));
var Gt;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Gt || (Gt = {}));
function Ru(e) {
  if (!e)
    if (Pt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cu(e);
}
const Mu = /^[^#]+#/;
function Tu(e, t) {
  return e.replace(Mu, "#") + t;
}
function Au(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0),
  };
}
const Kn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Ou(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = Au(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Bs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const yo = new Map();
function $u(e, t) {
  yo.set(e, t);
}
function Lu(e) {
  const t = yo.get(e);
  return yo.delete(e), t;
}
let ku = () => location.protocol + "//" + location.host;
function _i(e, t) {
  const { pathname: n, search: o, hash: s } = t,
    r = e.indexOf("#");
  if (r > -1) {
    let c = s.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = s.slice(c);
    return l[0] !== "/" && (l = "/" + l), Ns(l, "");
  }
  return Ns(n, e) + o + s;
}
function Hu(e, t, n, o) {
  let s = [],
    r = [],
    i = null;
  const c = ({ state: p }) => {
    const g = _i(e, location),
      E = n.value,
      $ = t.value;
    let v = 0;
    if (p) {
      if (((n.value = g), (t.value = p), i && i === E)) {
        i = null;
        return;
      }
      v = $ ? p.position - $.position : 0;
    } else o(g);
    s.forEach((P) => {
      P(n.value, E, {
        delta: v,
        type: rn.pop,
        direction: v ? (v > 0 ? Gt.forward : Gt.back) : Gt.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function a(p) {
    s.push(p);
    const g = () => {
      const E = s.indexOf(p);
      E > -1 && s.splice(E, 1);
    };
    return r.push(g), g;
  }
  function u() {
    const { history: p } = window;
    !p.state || p.replaceState(Y({}, p.state, { scroll: Kn() }), "");
  }
  function h() {
    for (const p of r) p();
    (r = []),
      window.removeEventListener("popstate", c),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", c),
    window.addEventListener("beforeunload", u),
    { pauseListeners: l, listen: a, destroy: h }
  );
}
function Ds(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Kn() : null,
  };
}
function Fu(e) {
  const { history: t, location: n } = window,
    o = { value: _i(e, n) },
    s = { value: t.state };
  s.value ||
    r(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function r(l, a, u) {
    const h = e.indexOf("#"),
      p =
        h > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l
          : ku() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](a, "", p), (s.value = a);
    } catch (g) {
      console.error(g), n[u ? "replace" : "assign"](p);
    }
  }
  function i(l, a) {
    const u = Y({}, t.state, Ds(s.value.back, l, s.value.forward, !0), a, {
      position: s.value.position,
    });
    r(l, u, !0), (o.value = l);
  }
  function c(l, a) {
    const u = Y({}, s.value, t.state, { forward: l, scroll: Kn() });
    r(u.current, u, !0);
    const h = Y({}, Ds(o.value, l, null), { position: u.position + 1 }, a);
    r(l, h, !1), (o.value = l);
  }
  return { location: o, state: s, push: c, replace: i };
}
function Nu(e) {
  e = Ru(e);
  const t = Fu(e),
    n = Hu(e, t.state, t.location, t.replace);
  function o(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const s = Y(
    { location: "", base: e, go: o, createHref: Tu.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function ju(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function yi(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const nt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  bi = Symbol("");
var Vs;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Vs || (Vs = {}));
function Ft(e, t) {
  return Y(new Error(), { type: e, [bi]: !0 }, t);
}
function Je(e, t) {
  return e instanceof Error && bi in e && (t == null || !!(e.type & t));
}
const Us = "[^/]+?",
  Bu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Du = /[.+*?^${}()[\]/\\]/g;
function Vu(e, t) {
  const n = Y({}, Bu, t),
    o = [];
  let s = n.start ? "^" : "";
  const r = [];
  for (const a of e) {
    const u = a.length ? [] : [90];
    n.strict && !a.length && (s += "/");
    for (let h = 0; h < a.length; h++) {
      const p = a[h];
      let g = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        h || (s += "/"), (s += p.value.replace(Du, "\\$&")), (g += 40);
      else if (p.type === 1) {
        const { value: E, repeatable: $, optional: v, regexp: P } = p;
        r.push({ name: E, repeatable: $, optional: v });
        const A = P || Us;
        if (A !== Us) {
          g += 10;
          try {
            new RegExp(`(${A})`);
          } catch (W) {
            throw new Error(
              `Invalid custom RegExp for param "${E}" (${A}): ` + W.message
            );
          }
        }
        let K = $ ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        h || (K = v && a.length < 2 ? `(?:/${K})` : "/" + K),
          v && (K += "?"),
          (s += K),
          (g += 20),
          v && (g += -8),
          $ && (g += -20),
          A === ".*" && (g += -50);
      }
      u.push(g);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const a = o.length - 1;
    o[a][o[a].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function c(a) {
    const u = a.match(i),
      h = {};
    if (!u) return null;
    for (let p = 1; p < u.length; p++) {
      const g = u[p] || "",
        E = r[p - 1];
      h[E.name] = g && E.repeatable ? g.split("/") : g;
    }
    return h;
  }
  function l(a) {
    let u = "",
      h = !1;
    for (const p of e) {
      (!h || !u.endsWith("/")) && (u += "/"), (h = !1);
      for (const g of p)
        if (g.type === 0) u += g.value;
        else if (g.type === 1) {
          const { value: E, repeatable: $, optional: v } = g,
            P = E in a ? a[E] : "";
          if (Ne(P) && !$)
            throw new Error(
              `Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`
            );
          const A = Ne(P) ? P.join("/") : P;
          if (!A)
            if (v)
              p.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${E}"`);
          u += A;
        }
    }
    return u || "/";
  }
  return { re: i, score: o, keys: r, parse: c, stringify: l };
}
function Uu(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Ku(e, t) {
  let n = 0;
  const o = e.score,
    s = t.score;
  for (; n < o.length && n < s.length; ) {
    const r = Uu(o[n], s[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Ks(o)) return 1;
    if (Ks(s)) return -1;
  }
  return s.length - o.length;
}
function Ks(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const qu = { type: 0, value: "" },
  zu = /[a-zA-Z0-9_]/;
function Wu(e) {
  if (!e) return [[]];
  if (e === "/") return [[qu]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(g) {
    throw new Error(`ERR (${n})/"${a}": ${g}`);
  }
  let n = 0,
    o = n;
  const s = [];
  let r;
  function i() {
    r && s.push(r), (r = []);
  }
  let c = 0,
    l,
    a = "",
    u = "";
  function h() {
    !a ||
      (n === 0
        ? r.push({ type: 0, value: a })
        : n === 1 || n === 2 || n === 3
        ? (r.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`
            ),
          r.push({
            type: 1,
            value: a,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (a = ""));
  }
  function p() {
    a += l;
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === "\\" && n !== 2)) {
      (o = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (a && h(), i()) : l === ":" ? (h(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = o);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : zu.test(l)
          ? p()
          : (h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), h(), i(), s;
}
function Qu(e, t, n) {
  const o = Vu(Wu(e.path), n),
    s = Y(o, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Yu(e, t) {
  const n = [],
    o = new Map();
  t = Ws({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(u) {
    return o.get(u);
  }
  function r(u, h, p) {
    const g = !p,
      E = Ju(u);
    E.aliasOf = p && p.record;
    const $ = Ws(t, u),
      v = [E];
    if ("alias" in u) {
      const K = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const W of K)
        v.push(
          Y({}, E, {
            components: p ? p.record.components : E.components,
            path: W,
            aliasOf: p ? p.record : E,
          })
        );
    }
    let P, A;
    for (const K of v) {
      const { path: W } = K;
      if (h && W[0] !== "/") {
        const ce = h.record.path,
          D = ce[ce.length - 1] === "/" ? "" : "/";
        K.path = h.record.path + (W && D + W);
      }
      if (
        ((P = Qu(K, h, $)),
        p
          ? p.alias.push(P)
          : ((A = A || P),
            A !== P && A.alias.push(P),
            g && u.name && !zs(P) && i(u.name)),
        E.children)
      ) {
        const ce = E.children;
        for (let D = 0; D < ce.length; D++) r(ce[D], P, p && p.children[D]);
      }
      (p = p || P), l(P);
    }
    return A
      ? () => {
          i(A);
        }
      : Zt;
  }
  function i(u) {
    if (yi(u)) {
      const h = o.get(u);
      h &&
        (o.delete(u),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(u);
      h > -1 &&
        (n.splice(h, 1),
        u.record.name && o.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function l(u) {
    let h = 0;
    for (
      ;
      h < n.length &&
      Ku(u, n[h]) >= 0 &&
      (u.record.path !== n[h].record.path || !wi(u, n[h]));

    )
      h++;
    n.splice(h, 0, u), u.record.name && !zs(u) && o.set(u.record.name, u);
  }
  function a(u, h) {
    let p,
      g = {},
      E,
      $;
    if ("name" in u && u.name) {
      if (((p = o.get(u.name)), !p)) throw Ft(1, { location: u });
      ($ = p.record.name),
        (g = Y(
          qs(
            h.params,
            p.keys.filter((A) => !A.optional).map((A) => A.name)
          ),
          u.params &&
            qs(
              u.params,
              p.keys.map((A) => A.name)
            )
        )),
        (E = p.stringify(g));
    } else if ("path" in u)
      (E = u.path),
        (p = n.find((A) => A.re.test(E))),
        p && ((g = p.parse(E)), ($ = p.record.name));
    else {
      if (((p = h.name ? o.get(h.name) : n.find((A) => A.re.test(h.path))), !p))
        throw Ft(1, { location: u, currentLocation: h });
      ($ = p.record.name),
        (g = Y({}, h.params, u.params)),
        (E = p.stringify(g));
    }
    const v = [];
    let P = p;
    for (; P; ) v.unshift(P.record), (P = P.parent);
    return { name: $, path: E, params: g, matched: v, meta: Gu(v) };
  }
  return (
    e.forEach((u) => r(u)),
    {
      addRoute: r,
      resolve: a,
      removeRoute: i,
      getRoutes: c,
      getRecordMatcher: s,
    }
  );
}
function qs(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function Ju(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Zu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Zu(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "boolean" ? n : n[o];
  return t;
}
function zs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Gu(e) {
  return e.reduce((t, n) => Y(t, n.meta), {});
}
function Ws(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function wi(e, t) {
  return t.children.some((n) => n === e || wi(e, n));
}
const vi = /#/g,
  Xu = /&/g,
  ea = /\//g,
  ta = /=/g,
  na = /\?/g,
  xi = /\+/g,
  oa = /%5B/g,
  sa = /%5D/g,
  Ci = /%5E/g,
  ra = /%60/g,
  Ei = /%7B/g,
  ia = /%7C/g,
  Ii = /%7D/g,
  ca = /%20/g;
function Jo(e) {
  return encodeURI("" + e)
    .replace(ia, "|")
    .replace(oa, "[")
    .replace(sa, "]");
}
function la(e) {
  return Jo(e).replace(Ei, "{").replace(Ii, "}").replace(Ci, "^");
}
function bo(e) {
  return Jo(e)
    .replace(xi, "%2B")
    .replace(ca, "+")
    .replace(vi, "%23")
    .replace(Xu, "%26")
    .replace(ra, "`")
    .replace(Ei, "{")
    .replace(Ii, "}")
    .replace(Ci, "^");
}
function ua(e) {
  return bo(e).replace(ta, "%3D");
}
function aa(e) {
  return Jo(e).replace(vi, "%23").replace(na, "%3F");
}
function fa(e) {
  return e == null ? "" : aa(e).replace(ea, "%2F");
}
function An(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function da(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const r = o[s].replace(xi, " "),
      i = r.indexOf("="),
      c = An(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : An(r.slice(i + 1));
    if (c in t) {
      let a = t[c];
      Ne(a) || (a = t[c] = [a]), a.push(l);
    } else t[c] = l;
  }
  return t;
}
function Qs(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (((n = ua(n)), o == null)) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ne(o) ? o.map((r) => r && bo(r)) : [o && bo(o)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
    });
  }
  return t;
}
function ha(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 &&
      (t[n] = Ne(o)
        ? o.map((s) => (s == null ? null : "" + s))
        : o == null
        ? o
        : "" + o);
  }
  return t;
}
const pa = Symbol(""),
  Ys = Symbol(""),
  Zo = Symbol(""),
  Si = Symbol(""),
  wo = Symbol("");
function zt() {
  let e = [];
  function t(o) {
    return (
      e.push(o),
      () => {
        const s = e.indexOf(o);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function st(e, t, n, o, s) {
  const r = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () =>
    new Promise((i, c) => {
      const l = (h) => {
          h === !1
            ? c(Ft(4, { from: n, to: t }))
            : h instanceof Error
            ? c(h)
            : ju(h)
            ? c(Ft(2, { from: t, to: h }))
            : (r &&
                o.enterCallbacks[s] === r &&
                typeof h == "function" &&
                r.push(h),
              i());
        },
        a = e.call(o && o.instances[s], t, n, l);
      let u = Promise.resolve(a);
      e.length < 3 && (u = u.then(l)), u.catch((h) => c(h));
    });
}
function no(e, t, n, o) {
  const s = [];
  for (const r of e)
    for (const i in r.components) {
      let c = r.components[i];
      if (!(t !== "beforeRouteEnter" && !r.instances[i]))
        if (ma(c)) {
          const a = (c.__vccOpts || c)[t];
          a && s.push(st(a, n, o, r, i));
        } else {
          let l = c();
          s.push(() =>
            l.then((a) => {
              if (!a)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${r.path}"`)
                );
              const u = vu(a) ? a.default : a;
              r.components[i] = u;
              const p = (u.__vccOpts || u)[t];
              return p && st(p, n, o, r, i)();
            })
          );
        }
    }
  return s;
}
function ma(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Js(e) {
  const t = ct(Zo),
    n = ct(Si),
    o = Te(() => t.resolve(gt(e.to))),
    s = Te(() => {
      const { matched: l } = o.value,
        { length: a } = l,
        u = l[a - 1],
        h = n.matched;
      if (!u || !h.length) return -1;
      const p = h.findIndex(Ht.bind(null, u));
      if (p > -1) return p;
      const g = Zs(l[a - 2]);
      return a > 1 && Zs(u) === g && h[h.length - 1].path !== g
        ? h.findIndex(Ht.bind(null, l[a - 2]))
        : p;
    }),
    r = Te(() => s.value > -1 && ba(n.params, o.value.params)),
    i = Te(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        gi(n.params, o.value.params)
    );
  function c(l = {}) {
    return ya(l)
      ? t[gt(e.replace) ? "replace" : "push"](gt(e.to)).catch(Zt)
      : Promise.resolve();
  }
  return {
    route: o,
    href: Te(() => o.value.href),
    isActive: r,
    isExactActive: i,
    navigate: c,
  };
}
const ga = Dt({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Js,
    setup(e, { slots: t }) {
      const n = un(Js(e)),
        { options: o } = ct(Zo),
        s = Te(() => ({
          [Gs(e.activeClass, o.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Gs(
            e.exactActiveClass,
            o.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : Tn(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              r
            );
      };
    },
  }),
  _a = ga;
function ya(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ba(e, t) {
  for (const n in t) {
    const o = t[n],
      s = e[n];
    if (typeof o == "string") {
      if (o !== s) return !1;
    } else if (!Ne(s) || s.length !== o.length || o.some((r, i) => r !== s[i]))
      return !1;
  }
  return !0;
}
function Zs(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Gs = (e, t, n) => (e != null ? e : t != null ? t : n),
  wa = Dt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const o = ct(wo),
        s = Te(() => e.route || o.value),
        r = ct(Ys, 0),
        i = Te(() => {
          let a = gt(r);
          const { matched: u } = s.value;
          let h;
          for (; (h = u[a]) && !h.components; ) a++;
          return a;
        }),
        c = Te(() => s.value.matched[i.value]);
      _n(
        Ys,
        Te(() => i.value + 1)
      ),
        _n(pa, c),
        _n(wo, s);
      const l = Hr();
      return (
        yn(
          () => [l.value, c.value, e.name],
          ([a, u, h], [p, g, E]) => {
            u &&
              ((u.instances[h] = a),
              g &&
                g !== u &&
                a &&
                a === p &&
                (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
                u.updateGuards.size || (u.updateGuards = g.updateGuards))),
              a &&
                u &&
                (!g || !Ht(u, g) || !p) &&
                (u.enterCallbacks[h] || []).forEach(($) => $(a));
          },
          { flush: "post" }
        ),
        () => {
          const a = s.value,
            u = e.name,
            h = c.value,
            p = h && h.components[u];
          if (!p) return Xs(n.default, { Component: p, route: a });
          const g = h.props[u],
            E = g
              ? g === !0
                ? a.params
                : typeof g == "function"
                ? g(a)
                : g
              : null,
            v = Tn(
              p,
              Y({}, E, t, {
                onVnodeUnmounted: (P) => {
                  P.component.isUnmounted && (h.instances[u] = null);
                },
                ref: l,
              })
            );
          return Xs(n.default, { Component: v, route: a }) || v;
        }
      );
    },
  });
function Xs(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Pi = wa;
function va(e) {
  const t = Yu(e.routes, e),
    n = e.parseQuery || da,
    o = e.stringifyQuery || Qs,
    s = e.history,
    r = zt(),
    i = zt(),
    c = zt(),
    l = kc(nt);
  let a = nt;
  Pt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = eo.bind(null, (_) => "" + _),
    h = eo.bind(null, fa),
    p = eo.bind(null, An);
  function g(_, T) {
    let S, O;
    return (
      yi(_) ? ((S = t.getRecordMatcher(_)), (O = T)) : (O = _), t.addRoute(O, S)
    );
  }
  function E(_) {
    const T = t.getRecordMatcher(_);
    T && t.removeRoute(T);
  }
  function $() {
    return t.getRoutes().map((_) => _.record);
  }
  function v(_) {
    return !!t.getRecordMatcher(_);
  }
  function P(_, T) {
    if (((T = Y({}, T || l.value)), typeof _ == "string")) {
      const F = to(n, _, T.path),
        f = t.resolve({ path: F.path }, T),
        d = s.createHref(F.fullPath);
      return Y(F, f, {
        params: p(f.params),
        hash: An(F.hash),
        redirectedFrom: void 0,
        href: d,
      });
    }
    let S;
    if ("path" in _) S = Y({}, _, { path: to(n, _.path, T.path).path });
    else {
      const F = Y({}, _.params);
      for (const f in F) F[f] == null && delete F[f];
      (S = Y({}, _, { params: h(_.params) })), (T.params = h(T.params));
    }
    const O = t.resolve(S, T),
      Q = _.hash || "";
    O.params = u(p(O.params));
    const te = Eu(o, Y({}, _, { hash: la(Q), path: O.path })),
      V = s.createHref(te);
    return Y(
      { fullPath: te, hash: Q, query: o === Qs ? ha(_.query) : _.query || {} },
      O,
      { redirectedFrom: void 0, href: V }
    );
  }
  function A(_) {
    return typeof _ == "string" ? to(n, _, l.value.path) : Y({}, _);
  }
  function K(_, T) {
    if (a !== _) return Ft(8, { from: T, to: _ });
  }
  function W(_) {
    return re(_);
  }
  function ce(_) {
    return W(Y(A(_), { replace: !0 }));
  }
  function D(_) {
    const T = _.matched[_.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: S } = T;
      let O = typeof S == "function" ? S(_) : S;
      return (
        typeof O == "string" &&
          ((O = O.includes("?") || O.includes("#") ? (O = A(O)) : { path: O }),
          (O.params = {})),
        Y(
          { query: _.query, hash: _.hash, params: "path" in O ? {} : _.params },
          O
        )
      );
    }
  }
  function re(_, T) {
    const S = (a = P(_)),
      O = l.value,
      Q = _.state,
      te = _.force,
      V = _.replace === !0,
      F = D(S);
    if (F)
      return re(
        Y(A(F), {
          state: typeof F == "object" ? Y({}, Q, F.state) : Q,
          force: te,
          replace: V,
        }),
        T || S
      );
    const f = S;
    f.redirectedFrom = T;
    let d;
    return (
      !te &&
        Iu(o, O, S) &&
        ((d = Ft(16, { to: f, from: O })), Ct(O, O, !0, !1)),
      (d ? Promise.resolve(d) : ge(f, O))
        .catch((m) => (Je(m) ? (Je(m, 2) ? m : Ie(m)) : ee(m, f, O)))
        .then((m) => {
          if (m) {
            if (Je(m, 2))
              return re(
                Y({ replace: V }, A(m.to), {
                  state: typeof m.to == "object" ? Y({}, Q, m.to.state) : Q,
                  force: te,
                }),
                T || f
              );
          } else m = Qe(f, O, !0, V, Q);
          return he(f, O, m), m;
        })
    );
  }
  function Re(_, T) {
    const S = K(_, T);
    return S ? Promise.reject(S) : Promise.resolve();
  }
  function ge(_, T) {
    let S;
    const [O, Q, te] = xa(_, T);
    S = no(O.reverse(), "beforeRouteLeave", _, T);
    for (const F of O)
      F.leaveGuards.forEach((f) => {
        S.push(st(f, _, T));
      });
    const V = Re.bind(null, _, T);
    return (
      S.push(V),
      It(S)
        .then(() => {
          S = [];
          for (const F of r.list()) S.push(st(F, _, T));
          return S.push(V), It(S);
        })
        .then(() => {
          S = no(Q, "beforeRouteUpdate", _, T);
          for (const F of Q)
            F.updateGuards.forEach((f) => {
              S.push(st(f, _, T));
            });
          return S.push(V), It(S);
        })
        .then(() => {
          S = [];
          for (const F of _.matched)
            if (F.beforeEnter && !T.matched.includes(F))
              if (Ne(F.beforeEnter))
                for (const f of F.beforeEnter) S.push(st(f, _, T));
              else S.push(st(F.beforeEnter, _, T));
          return S.push(V), It(S);
        })
        .then(
          () => (
            _.matched.forEach((F) => (F.enterCallbacks = {})),
            (S = no(te, "beforeRouteEnter", _, T)),
            S.push(V),
            It(S)
          )
        )
        .then(() => {
          S = [];
          for (const F of i.list()) S.push(st(F, _, T));
          return S.push(V), It(S);
        })
        .catch((F) => (Je(F, 8) ? F : Promise.reject(F)))
    );
  }
  function he(_, T, S) {
    for (const O of c.list()) O(_, T, S);
  }
  function Qe(_, T, S, O, Q) {
    const te = K(_, T);
    if (te) return te;
    const V = T === nt,
      F = Pt ? history.state : {};
    S &&
      (O || V
        ? s.replace(_.fullPath, Y({ scroll: V && F && F.scroll }, Q))
        : s.push(_.fullPath, Q)),
      (l.value = _),
      Ct(_, T, S, V),
      Ie();
  }
  let Ae;
  function wt() {
    Ae ||
      (Ae = s.listen((_, T, S) => {
        if (!Vt.listening) return;
        const O = P(_),
          Q = D(O);
        if (Q) {
          re(Y(Q, { replace: !0 }), O).catch(Zt);
          return;
        }
        a = O;
        const te = l.value;
        Pt && $u(Bs(te.fullPath, S.delta), Kn()),
          ge(O, te)
            .catch((V) =>
              Je(V, 12)
                ? V
                : Je(V, 2)
                ? (re(V.to, O)
                    .then((F) => {
                      Je(F, 20) &&
                        !S.delta &&
                        S.type === rn.pop &&
                        s.go(-1, !1);
                    })
                    .catch(Zt),
                  Promise.reject())
                : (S.delta && s.go(-S.delta, !1), ee(V, O, te))
            )
            .then((V) => {
              (V = V || Qe(O, te, !1)),
                V &&
                  (S.delta && !Je(V, 8)
                    ? s.go(-S.delta, !1)
                    : S.type === rn.pop && Je(V, 20) && s.go(-1, !1)),
                he(O, te, V);
            })
            .catch(Zt);
      }));
  }
  let vt = zt(),
    xt = zt(),
    ie;
  function ee(_, T, S) {
    Ie(_);
    const O = xt.list();
    return (
      O.length ? O.forEach((Q) => Q(_, T, S)) : console.error(_),
      Promise.reject(_)
    );
  }
  function J() {
    return ie && l.value !== nt
      ? Promise.resolve()
      : new Promise((_, T) => {
          vt.add([_, T]);
        });
  }
  function Ie(_) {
    return (
      ie ||
        ((ie = !_),
        wt(),
        vt.list().forEach(([T, S]) => (_ ? S(_) : T())),
        vt.reset()),
      _
    );
  }
  function Ct(_, T, S, O) {
    const { scrollBehavior: Q } = e;
    if (!Pt || !Q) return Promise.resolve();
    const te =
      (!S && Lu(Bs(_.fullPath, 0))) ||
      ((O || !S) && history.state && history.state.scroll) ||
      null;
    return Dr()
      .then(() => Q(_, T, te))
      .then((V) => V && Ou(V))
      .catch((V) => ee(V, _, T));
  }
  const Ye = (_) => s.go(_);
  let je;
  const Me = new Set(),
    Vt = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: E,
      hasRoute: v,
      getRoutes: $,
      resolve: P,
      options: e,
      push: W,
      replace: ce,
      go: Ye,
      back: () => Ye(-1),
      forward: () => Ye(1),
      beforeEach: r.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: xt.add,
      isReady: J,
      install(_) {
        const T = this;
        _.component("RouterLink", _a),
          _.component("RouterView", Pi),
          (_.config.globalProperties.$router = T),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => gt(l),
          }),
          Pt &&
            !je &&
            l.value === nt &&
            ((je = !0), W(s.location).catch((Q) => {}));
        const S = {};
        for (const Q in nt) S[Q] = Te(() => l.value[Q]);
        _.provide(Zo, T), _.provide(Si, un(S)), _.provide(wo, l);
        const O = _.unmount;
        Me.add(_),
          (_.unmount = function () {
            Me.delete(_),
              Me.size < 1 &&
                ((a = nt),
                Ae && Ae(),
                (Ae = null),
                (l.value = nt),
                (je = !1),
                (ie = !1)),
              O();
          });
      },
    };
  return Vt;
}
function It(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function xa(e, t) {
  const n = [],
    o = [],
    s = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const c = t.matched[i];
    c && (e.matched.find((a) => Ht(a, c)) ? o.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((a) => Ht(a, l)) || s.push(l));
  }
  return [n, o, s];
}
const Ca = Dt({
  __name: "App",
  setup(e) {
    return (t, n) => (de(), fi(gt(Pi)));
  },
});
const Ea = "modulepreload",
  Ia = function (e) {
    return "/" + e;
  },
  er = {},
  St = function (t, n, o) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((s) => {
            if (((s = Ia(s)), s in er)) return;
            er[s] = !0;
            const r = s.endsWith(".css"),
              i = r ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${s}"]${i}`)) return;
            const c = document.createElement("link");
            if (
              ((c.rel = r ? "stylesheet" : Ea),
              r || ((c.as = "script"), (c.crossOrigin = "")),
              (c.href = s),
              document.head.appendChild(c),
              r)
            )
              return new Promise((l, a) => {
                c.addEventListener("load", l),
                  c.addEventListener("error", () =>
                    a(new Error(`Unable to preload CSS for ${s}`))
                  );
              });
          })
        ).then(() => t());
  },
  Sa = {
    name: "BaseTextInput",
    props: {
      label: { type: String, required: !0 },
      placeholder: { type: String, required: !0 },
      model: { type: String, required: !0 },
      type: { type: String, required: !0, default: "text" },
    },
  };
const ve = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t) n[o] = s;
    return n;
  },
  Pa = { class: "form-field" },
  Ra = ["for"],
  Ma = ["type", "id", "placeholder", "v-model"];
function Ta(e, t, n, o, s, r) {
  return (
    de(),
    we("div", Pa, [
      ne("label", { for: n.label }, Ao(n.label), 9, Ra),
      ne(
        "input",
        {
          type: n.type,
          id: n.label,
          placeholder: "-- " + n.placeholder + " --",
          "v-model": n.model,
        },
        null,
        8,
        Ma
      ),
    ])
  );
}
const Aa = ve(Sa, [
    ["render", Ta],
    ["__scopeId", "data-v-737f28ba"],
  ]),
  Oa = {
    name: "BaseButton",
    props: {
      color: { type: String },
      style: { type: Object },
      text: { type: String, required: !0 },
    },
  };
function $a(e, t, n, o, s, r) {
  return (
    de(),
    we("button", null, [
      zo(e.$slots, "default", {}, void 0, !0),
      et(" " + Ao(n.text), 1),
    ])
  );
}
const Ri = ve(Oa, [
    ["render", $a],
    ["__scopeId", "data-v-92c16323"],
  ]),
  La = {
    name: "AuthView",
    components: { BaseTextInput: Aa, BaseButton: Ri },
    data: () => ({ form: { email: null, password: null } }),
    methods: {
      login() {
        console.log("login"), ss.push({ name: "home" });
      },
    },
  };
const Mi = (e) => (zr("data-v-d338aabb"), (e = e()), Wr(), e),
  ka = { class: "container" },
  Ha = Mi(() => ne("div", null, null, -1)),
  Fa = Mi(() => ne("h1", null, "Login", -1));
function Na(e, t, n, o, s, r) {
  const i = le("BaseTextInput"),
    c = le("BaseButton");
  return (
    de(),
    we("main", null, [
      ne("div", ka, [
        Ha,
        ne("div", null, [
          Fa,
          ne(
            "form",
            {
              action: "",
              method: "post",
              onSubmit:
                t[0] ||
                (t[0] = du((...l) => r.login && r.login(...l), ["prevent"])),
            },
            [
              N(
                i,
                { placeholder: "email", label: "email", model: e.form.email },
                null,
                8,
                ["model"]
              ),
              N(
                i,
                {
                  placeholder: "password",
                  type: "password",
                  label: "password",
                  model: e.form.password,
                },
                null,
                8,
                ["model"]
              ),
              N(c, { onClick: r.login, text: "login" }, null, 8, ["onClick"]),
            ],
            32
          ),
        ]),
      ]),
    ])
  );
}
const ja = ve(La, [
    ["render", Na],
    ["__scopeId", "data-v-d338aabb"],
  ]),
  Xt = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  qn = (e, t, n, o = "") => {
    const s = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (s.length < 2 || s.length > 3) return null;
      o = s.shift().slice(1);
    }
    if (s.length > 3 || !s.length) return null;
    if (s.length > 1) {
      const c = s.pop(),
        l = s.pop(),
        a = { provider: s.length > 0 ? s[0] : o, prefix: l, name: c };
      return t && !wn(a) ? null : a;
    }
    const r = s[0],
      i = r.split("-");
    if (i.length > 1) {
      const c = { provider: o, prefix: i.shift(), name: i.join("-") };
      return t && !wn(c) ? null : c;
    }
    if (n && o === "") {
      const c = { provider: o, prefix: "", name: r };
      return t && !wn(c, n) ? null : c;
    }
    return null;
  },
  wn = (e, t) =>
    e
      ? !!(
          (e.provider === "" || e.provider.match(Xt)) &&
          ((t && e.prefix === "") || e.prefix.match(Xt)) &&
          e.name.match(Xt)
        )
      : !1,
  Ti = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  On = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  zn = Object.freeze({ ...Ti, ...On }),
  vo = Object.freeze({ ...zn, body: "", hidden: !1 });
function Ba(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const o = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return o && (n.rotate = o), n;
}
function tr(e, t) {
  const n = Ba(e, t);
  for (const o in vo)
    o in On
      ? o in e && !(o in n) && (n[o] = On[o])
      : o in t
      ? (n[o] = t[o])
      : o in e && (n[o] = e[o]);
  return n;
}
function Da(e, t) {
  const n = e.icons,
    o = e.aliases || {},
    s = Object.create(null);
  function r(i) {
    if (n[i]) return (s[i] = []);
    if (!(i in s)) {
      s[i] = null;
      const c = o[i] && o[i].parent,
        l = c && r(c);
      l && (s[i] = [c].concat(l));
    }
    return s[i];
  }
  return (t || Object.keys(n).concat(Object.keys(o))).forEach(r), s;
}
function Va(e, t, n) {
  const o = e.icons,
    s = e.aliases || {};
  let r = {};
  function i(c) {
    r = tr(o[c] || s[c], r);
  }
  return i(t), n.forEach(i), tr(e, r);
}
function Ai(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object") return n;
  e.not_found instanceof Array &&
    e.not_found.forEach((s) => {
      t(s, null), n.push(s);
    });
  const o = Da(e);
  for (const s in o) {
    const r = o[s];
    r && (t(s, Va(e, s, r)), n.push(s));
  }
  return n;
}
const Ua = { provider: "", aliases: {}, not_found: {}, ...Ti };
function oo(e, t) {
  for (const n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
  return !0;
}
function Oi(e) {
  if (typeof e != "object" || e === null) return null;
  const t = e;
  if (
    typeof t.prefix != "string" ||
    !e.icons ||
    typeof e.icons != "object" ||
    !oo(e, Ua)
  )
    return null;
  const n = t.icons;
  for (const s in n) {
    const r = n[s];
    if (!s.match(Xt) || typeof r.body != "string" || !oo(r, vo)) return null;
  }
  const o = t.aliases || {};
  for (const s in o) {
    const r = o[s],
      i = r.parent;
    if (!s.match(Xt) || typeof i != "string" || (!n[i] && !o[i]) || !oo(r, vo))
      return null;
  }
  return t;
}
const nr = Object.create(null);
function Ka(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function yt(e, t) {
  const n = nr[e] || (nr[e] = Object.create(null));
  return n[t] || (n[t] = Ka(e, t));
}
function Go(e, t) {
  return Oi(t)
    ? Ai(t, (n, o) => {
        o ? (e.icons[n] = o) : e.missing.add(n);
      })
    : [];
}
function qa(e, t, n) {
  try {
    if (typeof n.body == "string") return (e.icons[t] = { ...n }), !0;
  } catch {}
  return !1;
}
let cn = !1;
function $i(e) {
  return typeof e == "boolean" && (cn = e), cn;
}
function za(e) {
  const t = typeof e == "string" ? qn(e, !0, cn) : e;
  if (t) {
    const n = yt(t.provider, t.prefix),
      o = t.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function Wa(e, t) {
  const n = qn(e, !0, cn);
  if (!n) return !1;
  const o = yt(n.provider, n.prefix);
  return qa(o, n.name, t);
}
function Qa(e, t) {
  if (typeof e != "object") return !1;
  if ((typeof t != "string" && (t = e.provider || ""), cn && !t && !e.prefix)) {
    let s = !1;
    return (
      Oi(e) &&
        ((e.prefix = ""),
        Ai(e, (r, i) => {
          i && Wa(r, i) && (s = !0);
        })),
      s
    );
  }
  const n = e.prefix;
  if (!wn({ provider: t, prefix: n, name: "a" })) return !1;
  const o = yt(t, n);
  return !!Go(o, e);
}
const Li = Object.freeze({ width: null, height: null }),
  ki = Object.freeze({ ...Li, ...On }),
  Ya = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  Ja = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function or(e, t, n) {
  if (t === 1) return e;
  if (((n = n || 100), typeof e == "number")) return Math.ceil(e * t * n) / n;
  if (typeof e != "string") return e;
  const o = e.split(Ya);
  if (o === null || !o.length) return e;
  const s = [];
  let r = o.shift(),
    i = Ja.test(r);
  for (;;) {
    if (i) {
      const c = parseFloat(r);
      isNaN(c) ? s.push(r) : s.push(Math.ceil(c * t * n) / n);
    } else s.push(r);
    if (((r = o.shift()), r === void 0)) return s.join("");
    i = !i;
  }
}
function Za(e, t) {
  const n = { ...zn, ...e },
    o = { ...ki, ...t },
    s = { left: n.left, top: n.top, width: n.width, height: n.height };
  let r = n.body;
  [n, o].forEach((g) => {
    const E = [],
      $ = g.hFlip,
      v = g.vFlip;
    let P = g.rotate;
    $
      ? v
        ? (P += 2)
        : (E.push(
            "translate(" +
              (s.width + s.left).toString() +
              " " +
              (0 - s.top).toString() +
              ")"
          ),
          E.push("scale(-1 1)"),
          (s.top = s.left = 0))
      : v &&
        (E.push(
          "translate(" +
            (0 - s.left).toString() +
            " " +
            (s.height + s.top).toString() +
            ")"
        ),
        E.push("scale(1 -1)"),
        (s.top = s.left = 0));
    let A;
    switch ((P < 0 && (P -= Math.floor(P / 4) * 4), (P = P % 4), P)) {
      case 1:
        (A = s.height / 2 + s.top),
          E.unshift("rotate(90 " + A.toString() + " " + A.toString() + ")");
        break;
      case 2:
        E.unshift(
          "rotate(180 " +
            (s.width / 2 + s.left).toString() +
            " " +
            (s.height / 2 + s.top).toString() +
            ")"
        );
        break;
      case 3:
        (A = s.width / 2 + s.left),
          E.unshift("rotate(-90 " + A.toString() + " " + A.toString() + ")");
        break;
    }
    P % 2 === 1 &&
      (s.left !== s.top && ((A = s.left), (s.left = s.top), (s.top = A)),
      s.width !== s.height &&
        ((A = s.width), (s.width = s.height), (s.height = A))),
      E.length && (r = '<g transform="' + E.join(" ") + '">' + r + "</g>");
  });
  const i = o.width,
    c = o.height,
    l = s.width,
    a = s.height;
  let u, h;
  return (
    i === null
      ? ((h = c === null ? "1em" : c === "auto" ? a : c), (u = or(h, l / a)))
      : ((u = i === "auto" ? l : i),
        (h = c === null ? or(u, a / l) : c === "auto" ? a : c)),
    {
      attributes: {
        width: u.toString(),
        height: h.toString(),
        viewBox:
          s.left.toString() +
          " " +
          s.top.toString() +
          " " +
          l.toString() +
          " " +
          a.toString(),
      },
      body: r,
    }
  );
}
const Ga = /\sid="(\S+)"/g,
  Xa =
    "IconifyId" +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let ef = 0;
function tf(e, t = Xa) {
  const n = [];
  let o;
  for (; (o = Ga.exec(e)); ) n.push(o[1]);
  return (
    n.length &&
      n.forEach((s) => {
        const r = typeof t == "function" ? t(s) : t + (ef++).toString(),
          i = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(
          new RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', "g"),
          "$1" + r + "$3"
        );
      }),
    e
  );
}
const xo = Object.create(null);
function nf(e, t) {
  xo[e] = t;
}
function Co(e) {
  return xo[e] || xo[""];
}
function Xo(e) {
  let t;
  if (typeof e.resources == "string") t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path || "/",
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const es = Object.create(null),
  Wt = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  vn = [];
for (; Wt.length > 0; )
  Wt.length === 1 || Math.random() > 0.5
    ? vn.push(Wt.shift())
    : vn.push(Wt.pop());
es[""] = Xo({ resources: ["https://api.iconify.design"].concat(vn) });
function of(e, t) {
  const n = Xo(t);
  return n === null ? !1 : ((es[e] = n), !0);
}
function ts(e) {
  return es[e];
}
const sf = () => {
  let e;
  try {
    if (((e = fetch), typeof e == "function")) return e;
  } catch {}
};
let sr = sf();
function rf(e, t) {
  const n = ts(e);
  if (!n) return 0;
  let o;
  if (!n.maxURL) o = 0;
  else {
    let s = 0;
    n.resources.forEach((i) => {
      s = Math.max(s, i.length);
    });
    const r = t + ".json?icons=";
    o = n.maxURL - s - n.path.length - r.length;
  }
  return o;
}
function cf(e) {
  return e === 404;
}
const lf = (e, t, n) => {
  const o = [],
    s = rf(e, t),
    r = "icons";
  let i = { type: r, provider: e, prefix: t, icons: [] },
    c = 0;
  return (
    n.forEach((l, a) => {
      (c += l.length + 1),
        c >= s &&
          a > 0 &&
          (o.push(i),
          (i = { type: r, provider: e, prefix: t, icons: [] }),
          (c = l.length)),
        i.icons.push(l);
    }),
    o.push(i),
    o
  );
};
function uf(e) {
  if (typeof e == "string") {
    const t = ts(e);
    if (t) return t.path;
  }
  return "/";
}
const af = (e, t, n) => {
    if (!sr) {
      n("abort", 424);
      return;
    }
    let o = uf(t.provider);
    switch (t.type) {
      case "icons": {
        const r = t.prefix,
          c = t.icons.join(","),
          l = new URLSearchParams({ icons: c });
        o += r + ".json?" + l.toString();
        break;
      }
      case "custom": {
        const r = t.uri;
        o += r.slice(0, 1) === "/" ? r.slice(1) : r;
        break;
      }
      default:
        n("abort", 400);
        return;
    }
    let s = 503;
    sr(e + o)
      .then((r) => {
        const i = r.status;
        if (i !== 200) {
          setTimeout(() => {
            n(cf(i) ? "abort" : "next", i);
          });
          return;
        }
        return (s = 501), r.json();
      })
      .then((r) => {
        if (typeof r != "object" || r === null) {
          setTimeout(() => {
            n("next", s);
          });
          return;
        }
        setTimeout(() => {
          n("success", r);
        });
      })
      .catch(() => {
        n("next", s);
      });
  },
  ff = { prepare: lf, send: af };
function df(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((s, r) =>
    s.provider !== r.provider
      ? s.provider.localeCompare(r.provider)
      : s.prefix !== r.prefix
      ? s.prefix.localeCompare(r.prefix)
      : s.name.localeCompare(r.name)
  );
  let o = { provider: "", prefix: "", name: "" };
  return (
    e.forEach((s) => {
      if (
        o.name === s.name &&
        o.prefix === s.prefix &&
        o.provider === s.provider
      )
        return;
      o = s;
      const r = s.provider,
        i = s.prefix,
        c = s.name,
        l = n[r] || (n[r] = Object.create(null)),
        a = l[i] || (l[i] = yt(r, i));
      let u;
      c in a.icons
        ? (u = t.loaded)
        : i === "" || a.missing.has(c)
        ? (u = t.missing)
        : (u = t.pending);
      const h = { provider: r, prefix: i, name: c };
      u.push(h);
    }),
    t
  );
}
function Hi(e, t) {
  e.forEach((n) => {
    const o = n.loaderCallbacks;
    o && (n.loaderCallbacks = o.filter((s) => s.id !== t));
  });
}
function hf(e) {
  e.pendingCallbacksFlag ||
    ((e.pendingCallbacksFlag = !0),
    setTimeout(() => {
      e.pendingCallbacksFlag = !1;
      const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
      if (!t.length) return;
      let n = !1;
      const o = e.provider,
        s = e.prefix;
      t.forEach((r) => {
        const i = r.icons,
          c = i.pending.length;
        (i.pending = i.pending.filter((l) => {
          if (l.prefix !== s) return !0;
          const a = l.name;
          if (e.icons[a]) i.loaded.push({ provider: o, prefix: s, name: a });
          else if (e.missing.has(a))
            i.missing.push({ provider: o, prefix: s, name: a });
          else return (n = !0), !0;
          return !1;
        })),
          i.pending.length !== c &&
            (n || Hi([e], r.id),
            r.callback(
              i.loaded.slice(0),
              i.missing.slice(0),
              i.pending.slice(0),
              r.abort
            ));
      });
    }));
}
let pf = 0;
function mf(e, t, n) {
  const o = pf++,
    s = Hi.bind(null, n, o);
  if (!t.pending.length) return s;
  const r = { id: o, icons: t, callback: e, abort: s };
  return (
    n.forEach((i) => {
      (i.loaderCallbacks || (i.loaderCallbacks = [])).push(r);
    }),
    s
  );
}
function gf(e, t = !0, n = !1) {
  const o = [];
  return (
    e.forEach((s) => {
      const r = typeof s == "string" ? qn(s, t, n) : s;
      r && o.push(r);
    }),
    o
  );
}
var _f = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function yf(e, t, n, o) {
  const s = e.resources.length,
    r = e.random ? Math.floor(Math.random() * s) : e.index;
  let i;
  if (e.random) {
    let D = e.resources.slice(0);
    for (i = []; D.length > 1; ) {
      const re = Math.floor(Math.random() * D.length);
      i.push(D[re]), (D = D.slice(0, re).concat(D.slice(re + 1)));
    }
    i = i.concat(D);
  } else i = e.resources.slice(r).concat(e.resources.slice(0, r));
  const c = Date.now();
  let l = "pending",
    a = 0,
    u,
    h = null,
    p = [],
    g = [];
  typeof o == "function" && g.push(o);
  function E() {
    h && (clearTimeout(h), (h = null));
  }
  function $() {
    l === "pending" && (l = "aborted"),
      E(),
      p.forEach((D) => {
        D.status === "pending" && (D.status = "aborted");
      }),
      (p = []);
  }
  function v(D, re) {
    re && (g = []), typeof D == "function" && g.push(D);
  }
  function P() {
    return {
      startTime: c,
      payload: t,
      status: l,
      queriesSent: a,
      queriesPending: p.length,
      subscribe: v,
      abort: $,
    };
  }
  function A() {
    (l = "failed"),
      g.forEach((D) => {
        D(void 0, u);
      });
  }
  function K() {
    p.forEach((D) => {
      D.status === "pending" && (D.status = "aborted");
    }),
      (p = []);
  }
  function W(D, re, Re) {
    const ge = re !== "success";
    switch (((p = p.filter((he) => he !== D)), l)) {
      case "pending":
        break;
      case "failed":
        if (ge || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (re === "abort") {
      (u = Re), A();
      return;
    }
    if (ge) {
      (u = Re), p.length || (i.length ? ce() : A());
      return;
    }
    if ((E(), K(), !e.random)) {
      const he = e.resources.indexOf(D.resource);
      he !== -1 && he !== e.index && (e.index = he);
    }
    (l = "completed"),
      g.forEach((he) => {
        he(Re);
      });
  }
  function ce() {
    if (l !== "pending") return;
    E();
    const D = i.shift();
    if (D === void 0) {
      if (p.length) {
        h = setTimeout(() => {
          E(), l === "pending" && (K(), A());
        }, e.timeout);
        return;
      }
      A();
      return;
    }
    const re = {
      status: "pending",
      resource: D,
      callback: (Re, ge) => {
        W(re, Re, ge);
      },
    };
    p.push(re), a++, (h = setTimeout(ce, e.rotate)), n(D, t, re.callback);
  }
  return setTimeout(ce), P;
}
function Fi(e) {
  const t = { ..._f, ...e };
  let n = [];
  function o() {
    n = n.filter((c) => c().status === "pending");
  }
  function s(c, l, a) {
    const u = yf(t, c, l, (h, p) => {
      o(), a && a(h, p);
    });
    return n.push(u), u;
  }
  function r(c) {
    return n.find((l) => c(l)) || null;
  }
  return {
    query: s,
    find: r,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: o,
  };
}
function rr() {}
const so = Object.create(null);
function bf(e) {
  if (!so[e]) {
    const t = ts(e);
    if (!t) return;
    const n = Fi(t),
      o = { config: t, redundancy: n };
    so[e] = o;
  }
  return so[e];
}
function wf(e, t, n) {
  let o, s;
  if (typeof e == "string") {
    const r = Co(e);
    if (!r) return n(void 0, 424), rr;
    s = r.send;
    const i = bf(e);
    i && (o = i.redundancy);
  } else {
    const r = Xo(e);
    if (r) {
      o = Fi(r);
      const i = e.resources ? e.resources[0] : "",
        c = Co(i);
      c && (s = c.send);
    }
  }
  return !o || !s ? (n(void 0, 424), rr) : o.query(t, s, n)().abort;
}
const ir = "iconify2",
  ln = "iconify",
  Ni = ln + "-count",
  cr = ln + "-version",
  ji = 36e5,
  vf = 168;
function Eo(e, t) {
  try {
    return e.getItem(t);
  } catch {}
}
function ns(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {}
}
function lr(e, t) {
  try {
    e.removeItem(t);
  } catch {}
}
function Io(e, t) {
  return ns(e, Ni, t.toString());
}
function So(e) {
  return parseInt(Eo(e, Ni)) || 0;
}
const Wn = { local: !0, session: !0 },
  Bi = { local: new Set(), session: new Set() };
let os = !1;
function xf(e) {
  os = e;
}
let mn = typeof window > "u" ? {} : window;
function Di(e) {
  const t = e + "Storage";
  try {
    if (mn && mn[t] && typeof mn[t].length == "number") return mn[t];
  } catch {}
  Wn[e] = !1;
}
function Vi(e, t) {
  const n = Di(e);
  if (!n) return;
  const o = Eo(n, cr);
  if (o !== ir) {
    if (o) {
      const c = So(n);
      for (let l = 0; l < c; l++) lr(n, ln + l.toString());
    }
    ns(n, cr, ir), Io(n, 0);
    return;
  }
  const s = Math.floor(Date.now() / ji) - vf,
    r = (c) => {
      const l = ln + c.toString(),
        a = Eo(n, l);
      if (typeof a == "string") {
        try {
          const u = JSON.parse(a);
          if (
            typeof u == "object" &&
            typeof u.cached == "number" &&
            u.cached > s &&
            typeof u.provider == "string" &&
            typeof u.data == "object" &&
            typeof u.data.prefix == "string" &&
            t(u, c)
          )
            return !0;
        } catch {}
        lr(n, l);
      }
    };
  let i = So(n);
  for (let c = i - 1; c >= 0; c--)
    r(c) || (c === i - 1 ? (i--, Io(n, i)) : Bi[e].add(c));
}
function Ui() {
  if (!os) {
    xf(!0);
    for (const e in Wn)
      Vi(e, (t) => {
        const n = t.data,
          o = t.provider,
          s = n.prefix,
          r = yt(o, s);
        if (!Go(r, n).length) return !1;
        const i = n.lastModified || -1;
        return (
          (r.lastModifiedCached = r.lastModifiedCached
            ? Math.min(r.lastModifiedCached, i)
            : i),
          !0
        );
      });
  }
}
function Cf(e, t) {
  const n = e.lastModifiedCached;
  if (n && n >= t) return n === t;
  if (((e.lastModifiedCached = t), n))
    for (const o in Wn)
      Vi(o, (s) => {
        const r = s.data;
        return (
          s.provider !== e.provider ||
          r.prefix !== e.prefix ||
          r.lastModified === t
        );
      });
  return !0;
}
function Ef(e, t) {
  os || Ui();
  function n(o) {
    let s;
    if (!Wn[o] || !(s = Di(o))) return;
    const r = Bi[o];
    let i;
    if (r.size) r.delete((i = Array.from(r).shift()));
    else if (((i = So(s)), !Io(s, i + 1))) return;
    const c = {
      cached: Math.floor(Date.now() / ji),
      provider: e.provider,
      data: t,
    };
    return ns(s, ln + i.toString(), JSON.stringify(c));
  }
  (t.lastModified && !Cf(e, t.lastModified)) ||
    !Object.keys(t.icons).length ||
    (t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
    n("local") || n("session"));
}
function ur() {}
function If(e) {
  e.iconsLoaderFlag ||
    ((e.iconsLoaderFlag = !0),
    setTimeout(() => {
      (e.iconsLoaderFlag = !1), hf(e);
    }));
}
function Sf(e, t) {
  e.iconsToLoad
    ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort())
    : (e.iconsToLoad = t),
    e.iconsQueueFlag ||
      ((e.iconsQueueFlag = !0),
      setTimeout(() => {
        e.iconsQueueFlag = !1;
        const { provider: n, prefix: o } = e,
          s = e.iconsToLoad;
        delete e.iconsToLoad;
        let r;
        if (!s || !(r = Co(n))) return;
        r.prepare(n, o, s).forEach((c) => {
          wf(n, c, (l, a) => {
            if (typeof l != "object") {
              if (a !== 404) return;
              c.icons.forEach((u) => {
                e.missing.add(u);
              });
            } else
              try {
                const u = Go(e, l);
                if (!u.length) return;
                const h = e.pendingIcons;
                h &&
                  u.forEach((p) => {
                    h.delete(p);
                  }),
                  Ef(e, l);
              } catch (u) {
                console.error(u);
              }
            If(e);
          });
        });
      }));
}
const Pf = (e, t) => {
  const n = gf(e, !0, $i()),
    o = df(n);
  if (!o.pending.length) {
    let l = !0;
    return (
      t &&
        setTimeout(() => {
          l && t(o.loaded, o.missing, o.pending, ur);
        }),
      () => {
        l = !1;
      }
    );
  }
  const s = Object.create(null),
    r = [];
  let i, c;
  return (
    o.pending.forEach((l) => {
      const { provider: a, prefix: u } = l;
      if (u === c && a === i) return;
      (i = a), (c = u), r.push(yt(a, u));
      const h = s[a] || (s[a] = Object.create(null));
      h[u] || (h[u] = []);
    }),
    o.pending.forEach((l) => {
      const { provider: a, prefix: u, name: h } = l,
        p = yt(a, u),
        g = p.pendingIcons || (p.pendingIcons = new Set());
      g.has(h) || (g.add(h), s[a][u].push(h));
    }),
    r.forEach((l) => {
      const { provider: a, prefix: u } = l;
      s[a][u].length && Sf(l, s[a][u]);
    }),
    t ? mf(t, o, r) : ur
  );
};
function Rf(e, t) {
  const n = { ...e };
  for (const o in t) {
    const s = t[o],
      r = typeof s;
    o in Li
      ? (s === null || (s && (r === "string" || r === "number"))) && (n[o] = s)
      : r === typeof n[o] && (n[o] = o === "rotate" ? s % 4 : s);
  }
  return n;
}
const Mf = /[\s,]+/;
function Tf(e, t) {
  t.split(Mf).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Af(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function o(s) {
    for (; s < 0; ) s += 4;
    return s % 4;
  }
  if (n === "") {
    const s = parseInt(e);
    return isNaN(s) ? 0 : o(s);
  } else if (n !== e) {
    let s = 0;
    switch (n) {
      case "%":
        s = 25;
        break;
      case "deg":
        s = 90;
    }
    if (s) {
      let r = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(r) ? 0 : ((r = r / s), r % 1 === 0 ? o(r) : 0);
    }
  }
  return t;
}
function Of(e, t) {
  let n =
    e.indexOf("xlink:") === -1
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const o in t) n += " " + o + '="' + t[o] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function $f(e) {
  return e
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function Lf(e) {
  return 'url("data:image/svg+xml,' + $f(e) + '")';
}
const ar = { ...ki, inline: !1 },
  kf = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  Hf = { display: "inline-block" },
  Po = { backgroundColor: "currentColor" },
  Ki = { backgroundColor: "transparent" },
  fr = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
  dr = { webkitMask: Po, mask: Po, background: Ki };
for (const e in dr) {
  const t = dr[e];
  for (const n in fr) t[e + n] = fr[n];
}
const xn = {};
["horizontal", "vertical"].forEach((e) => {
  const t = e.slice(0, 1) + "Flip";
  (xn[e + "-flip"] = t),
    (xn[e.slice(0, 1) + "-flip"] = t),
    (xn[e + "Flip"] = t);
});
function hr(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const pr = (e, t) => {
  const n = Rf(ar, t),
    o = { ...kf },
    s = t.mode || "svg",
    r = {},
    i = t.style,
    c = typeof i == "object" && !(i instanceof Array) ? i : {};
  for (let $ in t) {
    const v = t[$];
    if (v !== void 0)
      switch ($) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[$] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && Tf(n, v);
          break;
        case "color":
          r.color = v;
          break;
        case "rotate":
          typeof v == "string"
            ? (n[$] = Af(v))
            : typeof v == "number" && (n[$] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete o["aria-hidden"];
          break;
        default: {
          const P = xn[$];
          P
            ? (v === !0 || v === "true" || v === 1) && (n[P] = !0)
            : ar[$] === void 0 && (o[$] = v);
        }
      }
  }
  const l = Za(e, n),
    a = l.attributes;
  if ((n.inline && (r.verticalAlign = "-0.125em"), s === "svg")) {
    (o.style = { ...r, ...c }), Object.assign(o, a);
    let $ = 0,
      v = t.id;
    return (
      typeof v == "string" && (v = v.replace(/-/g, "_")),
      (o.innerHTML = tf(l.body, v ? () => v + "ID" + $++ : "iconifyVue")),
      Tn("svg", o)
    );
  }
  const { body: u, width: h, height: p } = e,
    g = s === "mask" || (s === "bg" ? !1 : u.indexOf("currentColor") !== -1),
    E = Of(u, { ...a, width: h + "", height: p + "" });
  return (
    (o.style = {
      ...r,
      "--svg": Lf(E),
      width: hr(a.width),
      height: hr(a.height),
      ...Hf,
      ...(g ? Po : Ki),
      ...c,
    }),
    Tn("span", o)
  );
};
$i(!0);
nf("", ff);
if (typeof document < "u" && typeof window < "u") {
  Ui();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    typeof t == "object" &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((o) => {
        try {
          (typeof o != "object" ||
            o === null ||
            o instanceof Array ||
            typeof o.icons != "object" ||
            typeof o.prefix != "string" ||
            !Qa(o)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const o = "IconifyProviders[" + n + "] is invalid.";
        try {
          const s = t[n];
          if (typeof s != "object" || !s || s.resources === void 0) continue;
          of(n, s) || console.error(o);
        } catch {
          console.error(o);
        }
      }
  }
}
const Ff = { ...zn, body: "" },
  Nf = Dt({
    inheritAttrs: !1,
    data() {
      return { iconMounted: !1, counter: 0 };
    },
    mounted() {
      (this._name = ""), (this._loadingIcon = null), (this.iconMounted = !0);
    },
    unmounted() {
      this.abortLoading();
    },
    methods: {
      abortLoading() {
        this._loadingIcon &&
          (this._loadingIcon.abort(), (this._loadingIcon = null));
      },
      getIcon(e, t) {
        if (typeof e == "object" && e !== null && typeof e.body == "string")
          return (this._name = ""), this.abortLoading(), { data: e };
        let n;
        if (typeof e != "string" || (n = qn(e, !1, !0)) === null)
          return this.abortLoading(), null;
        const o = za(n);
        if (!o)
          return (
            (!this._loadingIcon || this._loadingIcon.name !== e) &&
              (this.abortLoading(),
              (this._name = ""),
              o !== null &&
                (this._loadingIcon = {
                  name: e,
                  abort: Pf([n], () => {
                    this.counter++;
                  }),
                })),
            null
          );
        this.abortLoading(), this._name !== e && ((this._name = e), t && t(e));
        const s = ["iconify"];
        return (
          n.prefix !== "" && s.push("iconify--" + n.prefix),
          n.provider !== "" && s.push("iconify--" + n.provider),
          { data: o, classes: s }
        );
      },
    },
    render() {
      this.counter;
      const e = this.$attrs,
        t = this.iconMounted ? this.getIcon(e.icon, e.onLoad) : null;
      if (!t) return pr(Ff, e);
      let n = e;
      return (
        t.classes &&
          (n = {
            ...e,
            class:
              (typeof e.class == "string" ? e.class + " " : "") +
              t.classes.join(" "),
          }),
        pr({ ...zn, ...t.data }, n)
      );
    },
  }),
  jf = {},
  Bf = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  Df = ne(
    "path",
    {
      fill: "currentColor",
      d: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z",
    },
    null,
    -1
  ),
  Vf = [Df];
function Uf(e, t) {
  return de(), we("svg", Bf, Vf);
}
const qi = ve(jf, [["render", Uf]]),
  Kf = {},
  qf = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  zf = ne(
    "path",
    {
      fill: "currentColor",
      d: "M7 5.6L5.6 7L3.5 4.9L4.9 3.5L7 5.6M1 13H4V11H1V13M13 1H11V4H13V1M18 12C18 14.2 16.8 16.2 15 17.2V19C15 19.6 14.6 20 14 20H10C9.4 20 9 19.6 9 19V17.2C7.2 16.2 6 14.2 6 12C6 8.7 8.7 6 12 6S18 8.7 18 12M16 12C16 9.79 14.21 8 12 8S8 9.79 8 12C8 13.2 8.54 14.27 9.38 15H14.62C15.46 14.27 16 13.2 16 12M10 22C10 22.6 10.4 23 11 23H13C13.6 23 14 22.6 14 22V21H10V22M20 11V13H23V11H20M19.1 3.5L17 5.6L18.4 7L20.5 4.9L19.1 3.5Z",
    },
    null,
    -1
  ),
  Wf = [zf];
function Qf(e, t) {
  return de(), we("svg", qf, Wf);
}
const Yf = ve(Kf, [["render", Qf]]),
  Jf = {},
  Zf = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  Gf = ne(
    "path",
    {
      fill: "currentColor",
      d: "M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",
    },
    null,
    -1
  ),
  Xf = [Gf];
function ed(e, t) {
  return de(), we("svg", Zf, Xf);
}
const td = ve(Jf, [["render", ed]]),
  nd = {},
  od = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  sd = ne(
    "path",
    {
      fill: "currentColor",
      d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z",
    },
    null,
    -1
  ),
  rd = [sd];
function id(e, t) {
  return de(), we("svg", od, rd);
}
const cd = ve(nd, [["render", id]]),
  ld = {},
  ud = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
  },
  ad = ne(
    "path",
    {
      fill: "currentColor",
      d: "M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z",
    },
    null,
    -1
  ),
  fd = [ad];
function dd(e, t) {
  return de(), we("svg", ud, fd);
}
const zi = ve(ld, [["render", dd]]),
  hd = Dt({
    name: "AppNavigation",
    components: {
      IconEmail: qi,
      IconProjects: Yf,
      IconSettings: td,
      IconTodo: cd,
      BaseButton: Ri,
      IconNotification: zi,
      Icon: Nf,
    },
    data: () => ({ showMobileMenu: !0 }),
    methods: {
      logout() {
        ss.push({ name: "auth" });
      },
      closeSidebar() {
        window.matchMedia("(max-width: 400px)").matches &&
          this.$emit("close-sidebar");
      },
    },
  });
const pd = et(" Home "),
  md = et(" Emails "),
  gd = et(" Projects "),
  _d = et(" Todo "),
  yd = et(" Notifications "),
  bd = et(" Settings ");
function wd(e, t, n, o, s, r) {
  const i = le("Icon"),
    c = le("router-link"),
    l = le("IconProjects"),
    a = le("IconTodo"),
    u = le("IconNotification"),
    h = le("IconSettings"),
    p = le("BaseButton");
  return (
    de(),
    we("nav", null, [
      ne("div", null, [
        N(
          c,
          { class: "link-item", to: { name: "home" }, onClick: e.closeSidebar },
          {
            default: Ke(() => [N(i, { icon: "mdi:home-variant-outline" }), pd]),
            _: 1,
          },
          8,
          ["onClick"]
        ),
        N(
          c,
          {
            class: "link-item",
            to: { name: "emails" },
            onClick: e.closeSidebar,
          },
          {
            default: Ke(() => [N(i, { icon: "mdi:email-outline" }), md]),
            _: 1,
          },
          8,
          ["onClick"]
        ),
        N(
          c,
          {
            class: "link-item",
            to: { name: "projects" },
            onClick: e.closeSidebar,
          },
          { default: Ke(() => [N(l), gd]), _: 1 },
          8,
          ["onClick"]
        ),
        N(
          c,
          { class: "link-item", to: { name: "todo" }, onClick: e.closeSidebar },
          { default: Ke(() => [N(a), _d]), _: 1 },
          8,
          ["onClick"]
        ),
        N(
          c,
          {
            class: "link-item",
            to: { name: "notification" },
            onClick: e.closeSidebar,
          },
          { default: Ke(() => [N(u), yd]), _: 1 },
          8,
          ["onClick"]
        ),
        N(
          c,
          {
            class: "link-item",
            to: { name: "settings" },
            onClick: e.closeSidebar,
          },
          { default: Ke(() => [N(h), bd]), _: 1 },
          8,
          ["onClick"]
        ),
      ]),
      N(
        p,
        { onClick: e.logout, class: "logout-button", text: "Logout" },
        null,
        8,
        ["onClick"]
      ),
    ])
  );
}
const vd = ve(hd, [
    ["render", wd],
    ["__scopeId", "data-v-51ae97c7"],
  ]),
  bt = new Date(),
  xd = bt.getDay(),
  Ve = bt.getHours(),
  Cd = bt.getDate() == 1,
  Ed = bt.getMonth() == 11 && bt.getDate() == 25,
  Id = bt.getMonth() == 1 && bt.getDate() == 14;
function Ce(e) {
  const t = Math.round(Math.random() * (e.length - 1));
  return e[t];
}
const Ee = {
    monday: [
      "Hello Monday!",
      "Monday is here!",
      "Show some Monday love",
      "Another fresh start",
    ],
    tuesday: ["Hello"],
    wednesday: ["Welcome Back"],
    thursday: [
      "#TBT",
      "Throwback Thursday\u{1F60B}",
      "Time for throwback",
      "let's do some throwback",
      "Hectic week, huh? ",
    ],
    friday: [
      "#TGIF",
      "Weekend is here!",
      "Have a nice weekend",
      "How has the week been?",
      "Thank God It's Friday",
      "It's weekend",
      "Hello",
      "Weekend is near",
    ],
    saturday: [
      "You deserve some break",
      "Take timeout, enjoy",
      "Hangout! It's saturday",
      "#Owanbe Saturday\u{1F60B}",
      "Still indoor? Hangout!",
      "You deserve a great time",
      "How about some treats?",
    ],
    sunday: [
      "Happy New Week!",
      "Happy Sunday!",
      "It's a new week\u{1F483}\u{1F483}",
      "New week wishes",
    ],
    morning: [
      "Blessed morning",
      "Good Morning",
      "Trust you slept well",
      "Beautiful morning",
      "A new day",
      "Have a fruitful day",
    ],
    day_break: [
      "How is your day going",
      "How has the day being",
      "A fresh motning, huh?",
      "How's the weather?",
      "Howdy?",
    ],
    afternoon: [
      "Good afternoon!",
      "How's the weather outside",
      "How is your day going",
      "How has work been?",
      "How has your day been?",
      "How is your day going",
      "How has the day been",
      "How's the weather?",
      "Howdy?",
    ],
    evening: ["Good evening", "How was your day", "How did your day go"],
    midnight: [
      "You up so late ?",
      "You should probably be in bed",
      "You should probably be in bed by now",
      "Surprised to see you up so late",
      "Up so early, huh?",
      "Up so early?",
      "Working Late",
      "Hi there!",
      "Aren't you sleeping?",
    ],
    new_month: [
      "Happy new month!",
      "Blessed new Month",
      "Have a Happy new month!",
      "It's a new month!",
    ],
    new_year: ["Happy new year", "Happy Holidays"],
    christmas: ["Merry Christmas", "Season greetings"],
    valentine: ["It's Valentine", "Happy Valentine"],
    other: ["Holla!", "Hello!", "Welcome", "Howdy?", "Ciao!"],
  },
  ue = { time: "", other: "", occasion: "", day: "" };
switch (xd) {
  case 0:
    ue.day = Ce(Ee.sunday);
    break;
  case 1:
    ue.day = Ce(Ee.monday);
    break;
  case 4:
    ue.day = Ce(Ee.thursday);
    break;
  case 5:
    ue.day = Ce(Ee.friday);
    break;
  case 6:
    ue.day = Ce(Ee.saturday);
    break;
  default:
    ue.day = "";
    break;
}
Number(Ve) >= 6 && Number(Ve) <= 8
  ? (ue.time = Ce(Ee.morning))
  : Ve >= 8 && Ve <= 10
  ? (ue.time = Ce(Ee.day_break))
  : Ve >= 12 && Ve <= 15
  ? (ue.time = Ce(Ee.afternoon))
  : Ve >= 16 && Ve <= 20
  ? (ue.time = Ce(Ee.evening))
  : Ve >= 1 && Ve <= 3
  ? (ue.time = Ce(Ee.midnight))
  : (ue.time = "");
ue.occasion = Cd
  ? Ce(Ee.new_month)
  : Ed
  ? Ce(Ee.christmas)
  : Id
  ? Ce(Ee.valentine)
  : "";
ue.other = Ce(Ee.other);
const Wi = ue.occasion || ue.time || ue.day || ue.other;
console.log(Wi);
const Sd = {},
  Pd = {
    style: { width: "24px", height: "24px" },
    viewBox: "0 0 24 24",
    fill: "currentColor",
  },
  Rd = ne(
    "path",
    {
      fill: "currentColor",
      d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
    },
    null,
    -1
  ),
  Md = [Rd];
function Td(e, t) {
  return de(), we("svg", Pd, Md);
}
const Ad = ve(Sd, [["render", Td]]),
  Od = {
    name: "DashboardHeader",
    data: () => ({ greetings: Wi }),
    components: { IconEmail: qi, IconNotification: zi, IconMenu: Ad },
    methods: { toggleSidebar() {} },
  };
const Qn = (e) => (zr("data-v-21acff84"), (e = e()), Wr(), e),
  $d = { class: "view" },
  Ld = { class: "header__nav__mobile" },
  kd = Qn(() => ne("h1", null, "Opeoluwa", -1)),
  Hd = { class: "header__nav__desktop" },
  Fd = Qn(() => ne("h1", null, "Hi Opeoluwa \u{1F60A}", -1)),
  Nd = { class: "icons" },
  jd = Qn(() => ne("sup", null, null, -1)),
  Bd = et(),
  Dd = Qn(() => ne("sup", null, null, -1));
function Vd(e, t, n, o, s, r) {
  const i = le("IconMenu"),
    c = le("IconEmail"),
    l = le("RouterLink"),
    a = le("IconNotification");
  return (
    de(),
    we("header", $d, [
      ne("div", Ld, [
        N(i, { onClick: t[0] || (t[0] = (u) => e.$emit("open-sidebar")) }),
        kd,
      ]),
      ne("div", Hd, [Fd, ne("small", null, Ao(e.greetings), 1)]),
      ne("div", Nd, [
        N(
          l,
          { to: { name: "emails" } },
          { default: Ke(() => [N(c), jd]), _: 1 }
        ),
        N(
          l,
          { to: { name: "notification" } },
          { default: Ke(() => [N(a), Bd, Dd]), _: 1 }
        ),
      ]),
    ])
  );
}
const Ud = ve(Od, [
    ["render", Vd],
    ["__scopeId", "data-v-21acff84"],
  ]),
  Kd = { name: "ViewLayout" };
const qd = { class: "view" };
function zd(e, t, n, o, s, r) {
  return de(), we("div", qd, [zo(e.$slots, "content", {}, void 0, !0)]);
}
const Wd = ve(Kd, [
    ["render", zd],
    ["__scopeId", "data-v-6357785e"],
  ]),
  Qd = Dt({
    components: { DashboardSidebar: vd, DashboardHeader: Ud, ViewLayout: Wd },
    data: () => ({ showSidebar: !1 }),
    computed: {},
    mounted() {
      this.showSidebar = !window.matchMedia("(max-width: 400px)").matches;
    },
    methods: {
      isDeviceMobile() {
        if (!window.matchMedia("(max-width: 400px)").matches) return !0;
      },
    },
  });
const Yd = { class: "container" };
function Jd(e, t, n, o, s, r) {
  const i = le("DashboardSidebar"),
    c = le("DashboardHeader"),
    l = le("RouterView"),
    a = le("ViewLayout");
  return (
    de(),
    we("div", Yd, [
      fl(
        N(
          i,
          { onCloseSidebar: t[0] || (t[0] = (u) => (e.showSidebar = !1)) },
          null,
          512
        ),
        [[hu, e.showSidebar]]
      ),
      ne("main", null, [
        N(c, {
          onOpenSidebar:
            t[1] || (t[1] = (u) => (e.showSidebar = !e.showSidebar)),
        }),
        ne("div", null, [N(a, null, { content: Ke(() => [N(l)]), _: 1 })]),
      ]),
    ])
  );
}
const Zd = ve(Qd, [
    ["render", Jd],
    ["__scopeId", "data-v-9edae4c6"],
  ]),
  Gd = { name: "AppCard" };
const Xd = { class: "card" };
function eh(e, t, n, o, s, r) {
  return de(), we("div", Xd, [zo(e.$slots, "default", {}, void 0, !0)]);
}
const th = ve(Gd, [
    ["render", eh],
    ["__scopeId", "data-v-9f57f93e"],
  ]),
  nh = {
    name: "HomeView",
    components: { Card: th },
    data: () => ({ showModal: !1 }),
  };
const oh = { class: "analytics" };
function sh(e, t, n, o, s, r) {
  const i = le("Card");
  return de(), we("div", oh, [N(i), N(i), N(i)]);
}
const rh = ve(nh, [
    ["render", sh],
    ["__scopeId", "data-v-a74ea295"],
  ]),
  ss = va({
    history: Nu("/"),
    routes: [
      { path: "/", name: "auth", component: ja },
      {
        path: "/u",
        component: Zd,
        children: [
          { path: "", name: "home", component: rh },
          {
            path: "emails",
            name: "emails",
            component: () =>
              St(
                () => import("./EmailView.68af9660.js"),
                [
                  "assets/EmailView.68af9660.js",
                  "assets/EmailView.e294e0ee.css",
                ]
              ),
          },
          {
            path: "projects",
            name: "projects",
            component: () =>
              St(
                () => import("./ProjectsView.ebf1df98.js"),
                [
                  "assets/ProjectsView.ebf1df98.js",
                  "assets/ProjectsView.33bacfe2.css",
                ]
              ),
          },
          {
            path: "settings",
            name: "settings",
            component: () => St(() => import("./SettingsView.4bad085f.js"), []),
          },
          {
            path: "notification",
            name: "notification",
            component: () =>
              St(() => import("./NotificationView.8eb80c53.js"), []),
          },
          {
            path: "todo",
            name: "todo",
            component: () => St(() => import("./TodoView.6b3342c9.js"), []),
          },
        ],
      },
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () =>
          St(
            () => import("./NotFoundView.0bbcb3cf.js"),
            [
              "assets/NotFoundView.0bbcb3cf.js",
              "assets/NotFoundView.56e125dd.css",
            ]
          ),
      },
    ],
  });
const rs = gu(Ca);
rs.use(wu());
rs.use(ss);
rs.mount("#app");
export {
  Ri as B,
  $e as F,
  Nf as I,
  ve as _,
  ne as a,
  N as b,
  we as c,
  zo as d,
  Wr as e,
  Aa as f,
  fl as g,
  Dt as h,
  et as i,
  de as o,
  zr as p,
  le as r,
  Ao as t,
  hu as v,
  Ke as w,
};
