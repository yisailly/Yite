(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key2) => onRE.test(key2);
const isModelListener = (key2) => key2.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$b = Object.prototype.hasOwnProperty;
const hasOwn = (val, key2) => hasOwnProperty$b.call(val, key2);
const isArray$a = Array.isArray;
const isMap$2 = (val) => toTypeString(val) === "[object Map]";
const isSet$2 = (val) => toTypeString(val) === "[object Set]";
const isFunction$4 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$5 = (val) => typeof val === "symbol";
const isObject$9 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$9(val) && isFunction$4(val.then) && isFunction$4(val.catch);
};
const objectToString$2 = Object.prototype.toString;
const toTypeString = (value) => objectToString$2.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$3 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key2) => isString$1(key2) && key2 !== "NaN" && key2[0] !== "-" && "" + parseInt(key2, 10) === key2;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn2) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn2(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize$2 = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
const toHandlerKey = cacheStringFunction(
  (str) => str ? `on${capitalize$2(str)}` : ``
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key2, value) => {
  Object.defineProperty(obj, key2, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber$2 = (val) => {
  const n = isString$1(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray$a(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key2 in normalized) {
          res[key2] = normalized[key2];
        }
      }
    }
    return res;
  } else if (isString$1(value)) {
    return value;
  } else if (isObject$9(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray$a(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$9(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$a(val) || isObject$9(val) && (val.toString === objectToString$2 || !isFunction$4(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap$2(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key2, val2]) => {
        entries[`${key2} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet$2(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$9(val) && !isArray$a(val) && !isPlainObject$3(val)) {
    return String(val);
  }
  return val;
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn2) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn2();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last2 = this.parent.scopes.pop();
        if (last2 && last2 !== this) {
          this.parent.scopes[this.index] = last2;
          last2.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function recordEffectScope(effect2, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn2) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn2);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect2) => {
  const { deps } = effect2;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect2);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn2, scheduler = null, scope) {
    this.fn = fn2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent2 = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent2) {
      if (parent2 === this) {
        return;
      }
      parent2 = parent2.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect2) {
  const { deps } = effect2;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect2);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last2 = trackStack.pop();
  shouldTrack = last2 === void 0 ? true : last2;
}
function track(target, type, key2) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key2);
    if (!dep) {
      depsMap.set(key2, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key2, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key2 === "length" && isArray$a(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key22) => {
      if (key22 === "length" || key22 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key2 !== void 0) {
      deps.push(depsMap.get(key2));
    }
    switch (type) {
      case "add":
        if (!isArray$a(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap$2(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key2)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$a(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap$2(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap$2(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray$a(dep) ? dep : [...dep];
  for (const effect2 of effects) {
    if (effect2.computed) {
      triggerEffect(effect2);
    }
  }
  for (const effect2 of effects) {
    if (!effect2.computed) {
      triggerEffect(effect2);
    }
  }
}
function triggerEffect(effect2, debuggerEventExtraInfo) {
  if (effect2 !== activeEffect || effect2.allowRecurse) {
    if (effect2.scheduler) {
      effect2.scheduler();
    } else {
      effect2.run();
    }
  }
}
function getDepFromReactive(object, key2) {
  var _a;
  return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key2);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key2) => key2 !== "arguments" && key2 !== "caller").map((key2) => Symbol[key2]).filter(isSymbol$5)
);
const get$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key2) => {
    instrumentations[key2] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key2](...args);
      if (res === -1 || res === false) {
        return arr[key2](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key2) => {
    instrumentations[key2] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key2].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty$a(key2) {
  const obj = toRaw(this);
  track(obj, "has", key2);
  return obj.hasOwnProperty(key2);
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key2, receiver) {
    if (key2 === "__v_isReactive") {
      return !isReadonly2;
    } else if (key2 === "__v_isReadonly") {
      return isReadonly2;
    } else if (key2 === "__v_isShallow") {
      return shallow;
    } else if (key2 === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$a(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key2)) {
        return Reflect.get(arrayInstrumentations, key2, receiver);
      }
      if (key2 === "hasOwnProperty") {
        return hasOwnProperty$a;
      }
    }
    const res = Reflect.get(target, key2, receiver);
    if (isSymbol$5(key2) ? builtInSymbols.has(key2) : isNonTrackableKeys(key2)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key2);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key2) ? res : res.value;
    }
    if (isObject$9(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set$1 = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key2, value, receiver) {
    let oldValue = target[key2];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$a(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$a(target) && isIntegerKey(key2) ? Number(key2) < target.length : hasOwn(target, key2);
    const result = Reflect.set(target, key2, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key2, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key2, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key2) {
  const hadKey = hasOwn(target, key2);
  target[key2];
  const result = Reflect.deleteProperty(target, key2);
  if (result && hadKey) {
    trigger(target, "delete", key2, void 0);
  }
  return result;
}
function has$1(target, key2) {
  const result = Reflect.has(target, key2);
  if (!isSymbol$5(key2) || !builtInSymbols.has(key2)) {
    track(target, "has", key2);
  }
  return result;
}
function ownKeys$w(target) {
  track(target, "iterate", isArray$a(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set: set$1,
  deleteProperty,
  has: has$1,
  ownKeys: ownKeys$w
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key2) {
    return true;
  },
  deleteProperty(target, key2) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend(
  {},
  mutableHandlers,
  {
    get: shallowGet,
    set: shallowSet
  }
);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key2, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key2);
  if (!isReadonly2) {
    if (key2 !== rawKey) {
      track(rawTarget, "get", key2);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key2)) {
    return wrap(target.get(key2));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key2);
  }
}
function has(key2, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key2);
  if (!isReadonly2) {
    if (key2 !== rawKey) {
      track(rawTarget, "has", key2);
    }
    track(rawTarget, "has", rawKey);
  }
  return key2 === rawKey ? target.has(key2) : target.has(key2) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add$1(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key2, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key2);
  if (!hadKey) {
    key2 = toRaw(key2);
    hadKey = has2.call(target, key2);
  }
  const oldValue = get2.call(target, key2);
  target.set(key2, value);
  if (!hadKey) {
    trigger(target, "add", key2, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key2, value);
  }
  return this;
}
function deleteEntry(key2) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key2);
  if (!hadKey) {
    key2 = toRaw(key2);
    hadKey = has2.call(target, key2);
  }
  get2 ? get2.call(target, key2) : void 0;
  const result = target.delete(key2);
  if (hadKey) {
    trigger(target, "delete", key2, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key2) => {
      return callback.call(thisArg, wrap(value), wrap(key2), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap$2(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key2) {
      return get(this, key2);
    },
    get size() {
      return size(this);
    },
    has,
    add: add$1,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key2) {
      return get(this, key2, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add: add$1,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key2) {
      return get(this, key2, true);
    },
    get size() {
      return size(this, true);
    },
    has(key2) {
      return has.call(this, key2, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key2) {
      return get(this, key2, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key2) {
      return has.call(this, key2, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      false,
      false
    );
    readonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      false
    );
    shallowInstrumentations2[method] = createIterableMethod(
      method,
      false,
      true
    );
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key2, receiver) => {
    if (key2 === "__v_isReactive") {
      return !isReadonly2;
    } else if (key2 === "__v_isReadonly") {
      return isReadonly2;
    } else if (key2 === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key2) && key2 in target ? instrumentations : target,
      key2,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
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
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$9(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$9(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$9(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    {
      triggerEffects(dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key2, receiver) => unref(Reflect.get(target, key2, receiver)),
  set: (target, key2, value, receiver) => {
    const oldValue = target[key2];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key2, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray$a(object) ? new Array(object.length) : {};
  for (const key2 in object) {
    ret[key2] = propertyToRef(object, key2);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
}
function toRef(source, key2, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction$4(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$9(source) && arguments.length > 1) {
    return propertyToRef(source, key2, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key2, defaultValue) {
  const val = source[key2];
  return isRef(val) ? val : new ObjectRefImpl(
    source,
    key2,
    defaultValue
  );
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$4(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function warn(msg, ...args) {
  return;
}
function callWithErrorHandling(fn2, instance, type, args) {
  let res;
  try {
    res = args ? fn2(...args) : fn2();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn2, instance, type, args) {
  if (isFunction$4(fn2)) {
    const res = callWithErrorHandling(fn2, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn2.length; i++) {
    values.push(callWithAsyncErrorHandling(fn2[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue$1 = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn2) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn2 ? p2.then(this ? fn2.bind(this) : fn2) : p2;
}
function findInsertionIndex(id) {
  let start2 = flushIndex + 1;
  let end2 = queue$1.length;
  while (start2 < end2) {
    const middle = start2 + end2 >>> 1;
    const middleJobId = getId(queue$1[middle]);
    middleJobId < id ? start2 = middle + 1 : end2 = middle;
  }
  return start2;
}
function queueJob(job) {
  if (!queue$1.length || !queue$1.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue$1.indexOf(job);
  if (i > flushIndex) {
    queue$1.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$a(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(seen2, i = isFlushing ? flushIndex + 1 : 0) {
  for (; i < queue$1.length; i++) {
    const cb = queue$1[i];
    if (cb && cb.pre) {
      queue$1.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  queue$1.sort(comparator);
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue$1.length; flushIndex++) {
      const job = queue$1[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue$1.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue$1.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props2 = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props2) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim: trim3 } = props2[modifiersKey] || EMPTY_OBJ;
    if (trim3) {
      args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props2[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props2[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props2[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props2[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$9(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$a(raw)) {
    raw.forEach((key2) => normalized[key2] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$9(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key2) {
  if (!options || !isOn(key2)) {
    return false;
  }
  key2 = key2.slice(2).replace(/Once$/, "");
  return hasOwn(options, key2[0].toLowerCase() + key2.slice(1)) || hasOwn(options, hyphenate(key2)) || hasOwn(options, key2);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn2, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn2;
  if (fn2._n) {
    return fn2;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn2(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props: props2,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render8,
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(
        render8.call(
          proxyToUse,
          proxyToUse,
          renderCache,
          props2,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false)
        ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          props2,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return attrs;
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          props2,
          null
          /* we know it doesn't need it */
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys2 = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys2.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys2.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root2 = cloneVNode(root2, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root2 = cloneVNode(root2);
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root2.transition = vnode.transition;
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key2 in attrs) {
    if (key2 === "class" || key2 === "style" || isOn(key2)) {
      (res || (res = {}))[key2] = attrs[key2];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props2) => {
  const res = {};
  for (const key2 in attrs) {
    if (!isModelListener(key2) || !(key2.slice(9) in props2)) {
      res[key2] = attrs[key2];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key2 = dynamicProps[i];
        if (nextProps[key2] !== prevProps[key2] && !isEmitListener(emits, key2)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key2 = nextKeys[i];
    if (nextProps[key2] !== prevProps[key2] && !isEmitListener(emitsOptions, key2)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent: parent2 }, el) {
  while (parent2 && parent2.subTree === vnode) {
    (vnode = parent2.vnode).el = el;
    parent2 = parent2.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn2, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$a(fn2)) {
      suspense.effects.push(...fn2);
    } else {
      suspense.effects.push(fn2);
    }
  } else {
    queuePostFlushCb(fn2);
  }
}
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  var _a;
  const instance = getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray$a(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction$4(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction$4(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn2) => {
    cleanup = effect2.onStop = () => {
      callWithErrorHandling(fn2, instance, 4);
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect2.active) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some(
        (v, i) => hasChanged(v, oldValue[i])
      ) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect2.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect2 = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect2.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect2.run.bind(effect2),
      instance && instance.suspense
    );
  } else {
    effect2.run();
  }
  const unwatch = () => {
    effect2.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect2);
    }
  };
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$4(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject$9(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray$a(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen2);
    }
  } else if (isSet$2(value) || isMap$2(value)) {
    value.forEach((v) => {
      traverse(v, seen2);
    });
  } else if (isPlainObject$3(value)) {
    for (const key2 in value) {
      traverse(value[key2], seen2);
    }
  }
  return value;
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction$4(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props2, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        for (const c of children) {
          if (c.type !== Comment) {
            child = c;
            break;
          }
        }
      }
      const rawProps = toRaw(props2);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance
      );
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key2 = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key2;
        } else if (key2 !== prevTransitionKey) {
          prevTransitionKey = key2;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (instance.update.active !== false) {
              instance.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props2, state, instance) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props2;
  const key2 = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$a(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key2];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key22 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key22] === vnode) {
          delete leavingVNodesCache[key22];
        }
      };
      leavingVNodesCache[key22] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props2, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey2) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key2 = parentKey2 == null ? child.key : String(parentKey2) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key2)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key2 != null ? cloneVNode(child, { key: key2 }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options, extraOptions) {
  return isFunction$4(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
        /* do not include inferred name to avoid breaking existing code */
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize$2(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize$2(camelize(name))]);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  if (isArray$a(source) || isString$1(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject$9(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys2 = Object.keys(source);
      ret = new Array(keys2.length);
      for (let i = 0, l = keys2.length; i < l; i++) {
        const key2 = keys2[i];
        ret[i] = renderItem(source[key2], key2, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props2 = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default")
      props2.name = name;
    return createVNode("slot", props2, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props2));
  const rendered = createBlock(
    Fragment,
    {
      key: props2.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const hasSetupBinding = (state, key2) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key2);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key2) {
    const { ctx, setupState, data, props: props2, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key2[0] !== "$") {
      const n = accessCache[key2];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key2];
          case 2:
            return data[key2];
          case 4:
            return ctx[key2];
          case 3:
            return props2[key2];
        }
      } else if (hasSetupBinding(setupState, key2)) {
        accessCache[key2] = 1;
        return setupState[key2];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key2)) {
        accessCache[key2] = 2;
        return data[key2];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key2)
      ) {
        accessCache[key2] = 3;
        return props2[key2];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key2)) {
        accessCache[key2] = 4;
        return ctx[key2];
      } else if (shouldCacheAccess) {
        accessCache[key2] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key2];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key2 === "$attrs") {
        track(instance, "get", key2);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key2])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key2)) {
      accessCache[key2] = 4;
      return ctx[key2];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key2)
    ) {
      {
        return globalProperties[key2];
      }
    } else
      ;
  },
  set({ _: instance }, key2, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key2)) {
      setupState[key2] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key2)) {
      data[key2] = value;
      return true;
    } else if (hasOwn(instance.props, key2)) {
      return false;
    }
    if (key2[0] === "$" && key2.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key2] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key2) {
    let normalizedProps;
    return !!accessCache[key2] || data !== EMPTY_OBJ && hasOwn(data, key2) || hasSetupBinding(setupState, key2) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key2) || hasOwn(ctx, key2) || hasOwn(publicPropertiesMap, key2) || hasOwn(appContext.config.globalProperties, key2);
  },
  defineProperty(target, key2, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key2] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key2, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key2, descriptor);
  }
};
function normalizePropsOrEmits(props2) {
  return isArray$a(props2) ? props2.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props2;
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted: mounted2,
    beforeUpdate,
    updated: updated2,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted: unmounted2,
    render: render8,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key2 in methods) {
      const methodHandler = methods[key2];
      if (isFunction$4(methodHandler)) {
        {
          ctx[key2] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$9(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key2 in computedOptions) {
      const opt = computedOptions[key2];
      const get2 = isFunction$4(opt) ? opt.bind(publicThis, publicThis) : isFunction$4(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction$4(opt) && isFunction$4(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key2 in watchOptions) {
      createWatcher(watchOptions[key2], ctx, publicThis, key2);
    }
  }
  if (provideOptions) {
    const provides = isFunction$4(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key2) => {
      provide(key2, provides[key2]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$a(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted2);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated2);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted2);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$a(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key2) => {
        Object.defineProperty(exposed, key2, {
          get: () => publicThis[key2],
          set: (val) => publicThis[key2] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render8 && instance.render === NOOP) {
    instance.render = render8;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$a(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key2 in injectOptions) {
    const opt = injectOptions[key2];
    let injected;
    if (isObject$9(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key2,
          opt.default,
          true
          /* treat default function as factory */
        );
      } else {
        injected = inject(opt.from || key2);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key2, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key2] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$a(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key2) {
  const getter = key2.includes(".") ? createPathGetter(publicThis, key2) : () => publicThis[key2];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction$4(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction$4(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$9(raw)) {
    if (isArray$a(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key2));
    } else {
      const handler = isFunction$4(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$4(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base2 = instance.type;
  const { mixins, extends: extendsOptions } = base2;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions$1(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  if (isObject$9(base2)) {
    cache.set(base2, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions$1(to, m, strats, true)
    );
  }
  for (const key2 in from) {
    if (asMixin && key2 === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key2] || strats && strats[key2];
      to[key2] = strat ? strat(to[key2], from[key2]) : from[key2];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction$4(to) ? to.call(this, this) : to,
      isFunction$4(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$a(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$a(to) && isArray$a(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key2 in from) {
    merged[key2] = mergeAsArray(to[key2], from[key2]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render8, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$4(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$9(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction$4(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction$4(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        } else
          ;
        return app2;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app2;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(
            rootComponent,
            rootProps
          );
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render8(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render8(null, app2._container);
          delete app2._container.__vue_app__;
        }
      },
      provide(key2, value) {
        context.provides[key2] = value;
        return app2;
      },
      runWithContext(fn2) {
        currentApp = app2;
        try {
          return fn2();
        } finally {
          currentApp = null;
        }
      }
    };
    return app2;
  };
}
let currentApp = null;
function provide(key2, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key2] = value;
  }
}
function inject(key2, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key2 in provides) {
      return provides[key2];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$4(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else
      ;
  }
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props2 = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props2, attrs);
  for (const key2 in instance.propsOptions[0]) {
    if (!(key2 in props2)) {
      props2[key2] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props2 : shallowReactive(props2);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props2;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props: props2,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props2);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key2 = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key2)) {
          continue;
        }
        const value = rawProps[key2];
        if (options) {
          if (hasOwn(attrs, key2)) {
            if (value !== attrs[key2]) {
              attrs[key2] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key2);
            props2[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
              /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key2]) {
            attrs[key2] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props2, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key2 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key2) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key2)) === key2 || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key2] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props2[key2] = resolvePropValue(
              options,
              rawCurrentProps,
              key2,
              void 0,
              instance,
              true
              /* isAbsent */
            );
          }
        } else {
          delete props2[key2];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key2 in attrs) {
        if (!rawProps || !hasOwn(rawProps, key2) && true) {
          delete attrs[key2];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props2, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key2 in rawProps) {
      if (isReservedProp(key2)) {
        continue;
      }
      const value = rawProps[key2];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key2))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props2[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key2)) {
        if (!(key2 in attrs) || value !== attrs[key2]) {
          attrs[key2] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props2);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key2 = needCastKeys[i];
      props2[key2] = resolvePropValue(
        options,
        rawCurrentProps,
        key2,
        castValues[key2],
        instance,
        !hasOwn(castValues, key2)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props2, key2, value, instance, isAbsent) {
  const opt = options[key2];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$4(defaultValue)) {
        const { propsDefaults } = instance;
        if (key2 in propsDefaults) {
          value = propsDefaults[key2];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key2] = defaultValue.call(
            null,
            props2
          );
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key2))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props2, keys2] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props2);
      if (keys2)
        needCastKeys.push(...keys2);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$9(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$a(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key2 in raw) {
      const normalizedKey = camelize(key2);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key2];
        const prop = normalized[normalizedKey] = isArray$a(opt) || isFunction$4(opt) ? { type: opt } : extend({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$9(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key2) {
  if (key2[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$a(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction$4(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key2) => key2[0] === "_" || key2 === "$stable";
const normalizeSlotValue = (value) => isArray$a(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key2, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false)
      ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key2 in rawSlots) {
    if (isInternalKey(key2))
      continue;
    const value = rawSlots[key2];
    if (isFunction$4(value)) {
      slots[key2] = normalizeSlot$1(key2, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key2] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(
        children,
        instance.slots = {}
      );
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key2 in slots) {
      if (!isInternalKey(key2) && !(key2 in deletionComparisonTarget)) {
        delete slots[key2];
      }
    }
  }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$a(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray$a(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction$4(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray$a(existing) && remove(existing, refValue);
          } else {
            if (!isArray$a(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          );
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      isSVG,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props: props2, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      isSVG,
      props2 && props2.is,
      props2
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        isSVG && type !== "foreignObject",
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props2) {
      for (const key2 in props2) {
        if (key2 !== "value" && !isReservedProp(key2)) {
          hostPatchProp(
            el,
            key2,
            null,
            props2[key2],
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in props2) {
        hostPatchProp(el, "value", null, props2.value);
      }
      if (vnodeHook = props2.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props2 && props2.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start2 = 0) => {
    for (let i = start2; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          isSVG
        );
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key2 = propsToUpdate[i];
            const prev = oldProps[key2];
            const next = newProps[key2];
            if (next !== prev || key2 === "value") {
              hostPatchProp(
                el,
                key2,
                prev,
                next,
                isSVG,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        isSVG
      );
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key2 in oldProps) {
          if (!isReservedProp(key2) && !(key2 in newProps)) {
            hostPatchProp(
              el,
              key2,
              oldProps[key2],
              null,
              isSVG,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
      }
      for (const key2 in newProps) {
        if (isReservedProp(key2))
          continue;
        const next = newProps[key2];
        const prev = oldProps[key2];
        if (next !== prev && key2 !== "value") {
          hostPatchProp(
            el,
            key2,
            prev,
            next,
            isSVG,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        n2.children,
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          isSVG,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      isSVG,
      optimized
    );
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props: props2 } = initialVNode;
        const { bm, m, parent: parent2 } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props2 && props2.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent2, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            isSVG
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props2 && props2.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent2, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent2 && isAsyncWrapper(parent2.vnode) && parent2.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent: parent2, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent2, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent2, next, vnode),
            parentSuspense
          );
        }
      }
    };
    const effect2 = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope
      // track it in component's effect scope
    );
    const update = instance.update = () => effect2.run();
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs();
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props: props2,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end2) => {
    let next;
    while (cur !== end2) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end2);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start2 = 0) => {
    for (let i = start2; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render8 = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render8,
    hydrate,
    createApp: createAppAPI(render8, hydrate)
  };
}
function toggleRecurse({ effect: effect2, update }, allowed) {
  effect2.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$a(ch1) && isArray$a(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props2) => props2 && (props2.disabled || props2.disabled === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props2, select) => {
  const targetSelector = props2 && props2.to;
  if (isString$1(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target) {
        insert(targetAnchor, target);
        isSVG = isSVG || isTargetSVG(target);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          );
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      isSVG = isSVG || isTargetSVG(target);
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
    }
    updateCssVars(n2);
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props: props2 } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    if (doRemove || !isTeleportDisabled(props2)) {
      hostRemove(anchor);
      if (shapeFlag & 16) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          unmount(
            child,
            parentComponent,
            parentSuspense,
            true,
            !!child.dynamicChildren
          );
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props: props2 } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props2)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);
          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }
        hydrateChildren(
          targetNode,
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node = vnode.children[0].el;
    while (node !== vnode.targetAnchor) {
      if (node.nodeType === 1)
        node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props2, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props2,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
      /* isBlock */
    )
  );
}
function createBlock(type, props2, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props2,
      children,
      patchFlag,
      dynamicProps,
      true
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key: key2 }) => key2 != null ? key2 : null;
const normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString$1(ref2) || isRef(ref2) || isFunction$4(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props2 = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props: props2,
    key: props2 && normalizeKey(props2),
    ref: props2 && normalizeRef(props2),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
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
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props2 = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props2,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props2) {
    props2 = guardReactiveProps(props2);
    let { class: klass, style } = props2;
    if (klass && !isString$1(klass)) {
      props2.class = normalizeClass(klass);
    }
    if (isObject$9(style)) {
      if (isProxy(style) && !isArray$a(style)) {
        style = extend({}, style);
      }
      props2.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$9(type) ? 4 : isFunction$4(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props2,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props2) {
  if (!props2)
    return null;
  return isProxy(props2) || InternalObjectKey in props2 ? extend({}, props2) : props2;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props: props2, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props2 || {}, extraProps) : props2;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray$a(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$a(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$a(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$4(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key2 in toMerge) {
      if (key2 === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key2 === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key2)) {
        const existing = ret[key2];
        const incoming = toMerge[key2];
        if (incoming && existing !== incoming && !(isArray$a(existing) && existing.includes(incoming))) {
          ret[key2] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key2 !== "") {
        ret[key2] = toMerge[key2];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent2, suspense) {
  const type = vnode.type;
  const appContext = (parent2 ? parent2.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent: parent2,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent2 ? parent2.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
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
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent2 ? parent2.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let globalCurrentInstanceSetters;
let settersKey = "__VUE_INSTANCE_SETTERS__";
{
  if (!(globalCurrentInstanceSetters = getGlobalThis()[settersKey])) {
    globalCurrentInstanceSetters = getGlobalThis()[settersKey] = [];
  }
  globalCurrentInstanceSetters.push((i) => currentInstance = i);
  internalSetCurrentInstance = (instance) => {
    if (globalCurrentInstanceSetters.length > 1) {
      globalCurrentInstanceSetters.forEach((s) => s(instance));
    } else {
      globalCurrentInstanceSetters[0](instance);
    }
  };
}
const setCurrentInstance = (instance) => {
  internalSetCurrentInstance(instance);
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props: props2, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props2, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup: setup32 } = Component;
  if (setup32) {
    const setupContext = instance.setupContext = setup32.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup32,
      instance,
      0,
      [instance.props, setupContext]
    );
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$4(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$9(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key2) {
        track(instance, "get", "$attrs");
        return target[key2];
      }
    }
  ));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      get attrs() {
        return getAttrsProxy(instance);
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key2) {
        if (key2 in target) {
          return target[key2];
        } else if (key2 in publicPropertiesMap) {
          return publicPropertiesMap[key2](instance);
        }
      },
      has(target, key2) {
        return key2 in target || key2 in publicPropertiesMap;
      }
    }));
  }
}
function getComponentName(Component, includeInferred = true) {
  return isFunction$4(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
  return isFunction$4(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$9(propsOrChildren) && !isArray$a(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
const version = "3.3.4";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent2, anchor) => {
    parent2.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent2 = child.parentNode;
    if (parent2) {
      parent2.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props2) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props2 && props2.multiple != null) {
      el.setAttribute("multiple", props2.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent2, anchor, isSVG, start2, end2) {
    const before = anchor ? anchor.previousSibling : parent2.lastChild;
    if (start2 && (start2 === end2 || start2.nextSibling)) {
      while (true) {
        parent2.insertBefore(start2.cloneNode(true), anchor);
        if (start2 === end2 || !(start2 = start2.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent2.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent2.firstChild,
      // last
      anchor ? anchor.previousSibling : parent2.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  if (next && !isCssString) {
    if (prev && !isString$1(prev)) {
      for (const key2 in prev) {
        if (next[key2] == null) {
          setStyle$2(style, key2, "");
        }
      }
    }
    for (const key2 in next) {
      setStyle$2(style, key2, next[key2]);
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle$2(style, name, val) {
  if (isArray$a(val)) {
    val.forEach((v) => setStyle$2(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize$2(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key2, value, isSVG, instance) {
  if (isSVG && key2.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key2.slice(6, key2.length));
    } else {
      el.setAttributeNS(xlinkNS, key2, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key2);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key2);
    } else {
      el.setAttribute(key2, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key2, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key2 === "innerHTML" || key2 === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key2] = value == null ? "" : value;
    return;
  }
  const tag = el.tagName;
  if (key2 === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    el._value = value;
    const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
    const newValue = value == null ? "" : value;
    if (oldValue !== newValue) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key2);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key2];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key2] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(key2);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$a(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn2) => (e2) => !e2._stopped && fn2 && fn2(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key2, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key2 === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key2 === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key2)) {
    if (!isModelListener(key2)) {
      patchEvent(el, key2, prevValue, nextValue, parentComponent);
    }
  } else if (key2[0] === "." ? (key2 = key2.slice(1), true) : key2[0] === "^" ? (key2 = key2.slice(1), false) : shouldSetAsProp(el, key2, nextValue, isSVG)) {
    patchDOMProp(
      el,
      key2,
      nextValue,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren
    );
  } else {
    if (key2 === "true-value") {
      el._trueValue = nextValue;
    } else if (key2 === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key2, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key2, value, isSVG) {
  if (isSVG) {
    if (key2 === "innerHTML" || key2 === "textContent") {
      return true;
    }
    if (key2 in el && nativeOnRE.test(key2) && isFunction$4(value)) {
      return true;
    }
    return false;
  }
  if (key2 === "spellcheck" || key2 === "draggable" || key2 === "translate") {
    return false;
  }
  if (key2 === "form") {
    return false;
  }
  if (key2 === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key2 === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key2) && isString$1(value)) {
    return false;
  }
  return key2 in el;
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props2, { slots }) => h(BaseTransition, resolveTransitionProps(props2), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const callHook = (hook, args = []) => {
  if (isArray$a(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$a(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key2 in rawProps) {
    if (!(key2 in DOMTransitionPropsValidators)) {
      baseProps[key2] = rawProps[key2];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$9(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber$2(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end2 = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end2();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end2();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key2) => (styles[key2] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app2 = ensureRenderer().createApp(...args);
  const { mount } = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app2._component;
    if (!isFunction$4(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app2;
};
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
const border = "";
const reset = "";
const base = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key2 = _toPrimitive(arg, "string");
  return _typeof(key2) === "symbol" ? key2 : String(key2);
}
function _defineProperty$2(obj, key2, value) {
  key2 = _toPropertyKey(key2);
  if (key2 in obj) {
    Object.defineProperty(obj, key2, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key2] = value;
  }
  return obj;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function setStyle$1(el, styles) {
  var keys2 = Object.keys(styles);
  keys2.forEach(function(key2) {
    el.style[key2] = styles[key2];
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key2))
        continue;
      target[key2] = source[key2];
    }
  }
  return target;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var freeGlobal$1 = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
var root$1$3 = freeGlobal || freeSelf || Function("return this")();
var _root = root$1$3;
var root$7 = _root;
var _Symbol2 = root$7.Symbol;
var _Symbol$2$1 = _Symbol2;
var _Symbol$1$1 = _Symbol$2$1;
var objectProto$1$4 = Object.prototype;
var hasOwnProperty$9 = objectProto$1$4.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1$4.toString;
var symToStringTag$1 = _Symbol$1$1 ? _Symbol$1$1.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var _Symbol$3 = _Symbol$2$1, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = _Symbol$3 ? _Symbol$3.toStringTag : void 0;
function baseGetTag$9(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$9;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var isArray$9 = Array.isArray;
var isArray_1 = isArray$9;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function isObjectLike$9(value) {
  return value != null && _typeof(value) == "object";
}
var isObjectLike_1 = isObjectLike$9;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGetTag$8 = _baseGetTag, isArray$8 = isArray_1, isObjectLike$8 = isObjectLike_1;
var stringTag$3 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$8(value) && isObjectLike$8(value) && baseGetTag$8(value) == stringTag$3;
}
var isString_1 = isString;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_1 = isUndefined;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGetTag$7 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
var numberTag$3 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike$7(value) && baseGetTag$7(value) == numberTag$3;
}
var isNumber_1 = isNumber;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function getIEVersion() {
  if (typeof navigator === "undefined" || !navigator)
    return Number.MAX_SAFE_INTEGER;
  var _navigator = navigator, userAgent = _navigator.userAgent;
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
  var isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    var match = userAgent.match(reIE);
    if (!match)
      return -1;
    var fIEVersion = parseFloat(match[1]);
    return fIEVersion < 7 ? 6 : fIEVersion;
  }
  if (isIE11) {
    return 11;
  }
  return Number.MAX_SAFE_INTEGER;
}
function getCharacterLength$1(str, maxCharacter) {
  var hasMaxCharacter = isNumber_1(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str
      };
    }
    return 0;
  }
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var currentStringLength = 0;
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i)
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str
    };
  }
  return len;
}
function getUnicodeLength(str) {
  return _toConsumableArray(str !== null && str !== void 0 ? str : "").length;
}
function limitUnicodeMaxLength(str, maxLength, oldStr) {
  if (_toConsumableArray(oldStr !== null && oldStr !== void 0 ? oldStr : "").slice().length === maxLength)
    return oldStr || "";
  return _toConsumableArray(str !== null && str !== void 0 ? str : "").slice(0, maxLength).join("");
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$v(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$v(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$v(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$v(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function circleAdapter(circleElem) {
  var _window, _window$getComputedSt2, _window2;
  var basicStyle = {};
  if (!circleElem || typeof window === "undefined") {
    return;
  }
  var _window$getComputedSt = (_window = window) === null || _window === void 0 || (_window$getComputedSt2 = _window.getComputedStyle) === null || _window$getComputedSt2 === void 0 ? void 0 : _window$getComputedSt2.call(_window, circleElem), color = _window$getComputedSt.color, fontSize = _window$getComputedSt.fontSize;
  var ua = (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.userAgent;
  var isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
  var isIosWechat = /(?=.*iPhone)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  if (isSafari || isIosWechat) {
    basicStyle = {
      transformOrigin: "0px 0px",
      transform: "scale(".concat(parseInt(fontSize, 10) / 12, ")")
    };
  }
  if (color && getIEVersion() > 11) {
    var matched = color.match(/[\d.]+/g);
    var endColor = matched ? "rgba(".concat(matched[0], ", ").concat(matched[1], ", ").concat(matched[2], ", 0)") : "";
    setStyle$1(circleElem, _objectSpread$v(_objectSpread$v({}, basicStyle), {}, {
      background: "conic-gradient(from 90deg at 50% 50%,".concat(endColor, " 0deg, ").concat(color, " 360deg)")
    }));
  } else {
    setStyle$1(circleElem, _objectSpread$v(_objectSpread$v({}, basicStyle), {}, {
      background: ""
    }));
  }
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function isObject$8(value) {
  var type = _typeof(value);
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$8;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGetTag$6 = _baseGetTag, isObject$7 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$7(value)) {
    return false;
  }
  var tag = baseGetTag$6(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var root$1$2 = _root;
var coreJsData$1 = root$1$2["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$6 = isObject_1, toSource$2 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$2 = Function.prototype, objectProto$9 = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$2.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$6(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$2(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key2) {
  return object == null ? void 0 : object[key2];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$1$1(object, key2) {
  var value = getValue(object, key2);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$1$1;
var getNative$6 = _getNative, root$6 = _root;
var Map$4 = getNative$6(root$6, "Map");
var _Map = Map$4;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
var eq$3 = eq_1;
function assocIndexOf$4(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key2) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key2);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key2) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key2);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key2) {
  return assocIndexOf$1(this.__data__, key2) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key2, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key2);
  if (index2 < 0) {
    ++this.size;
    data.push([key2, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$1$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$1$1.prototype.clear = listCacheClear;
ListCache$1$1.prototype["delete"] = listCacheDelete;
ListCache$1$1.prototype.get = listCacheGet;
ListCache$1$1.prototype.has = listCacheHas;
ListCache$1$1.prototype.set = listCacheSet;
var _ListCache = ListCache$1$1;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key2) {
  var result = this.has(key2) && delete this.__data__[key2];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1$3 = Object.prototype;
var hasOwnProperty$1$2 = objectProto$1$3.hasOwnProperty;
function hashGet$1(key2) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key2];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$1$2.call(data, key2) ? data[key2] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function hashHas$1(key2) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key2] !== void 0 : hasOwnProperty$7.call(data, key2);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key2, value) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$3 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = _typeof(value);
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key2) {
  var data = map.__data__;
  return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key2) {
  var result = getMapData$3(this, key2)["delete"](key2);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key2) {
  return getMapData$2(this, key2).get(key2);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key2) {
  return getMapData$1(this, key2).has(key2);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key2, value) {
  var data = getMapData(this, key2), size2 = data.size;
  data.set(key2, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype["delete"] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;
var _MapCache = MapCache$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$1 = defineProperty$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var defineProperty$1 = _defineProperty$1;
function baseAssignValue$1$1(object, key2, value) {
  if (key2 == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key2, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key2] = value;
  }
}
var _baseAssignValue = baseAssignValue$1$1;
var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function assignValue$2(object, key2, value) {
  var objValue = object[key2];
  if (!(hasOwnProperty$6.call(object, key2) && eq$2(objValue, value)) || value === void 0 && !(key2 in object)) {
    baseAssignValue$2(object, key2, value);
  }
}
var _assignValue = assignValue$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGetTag$5 = _baseGetTag, isObjectLike$1$2 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$1$2(value) && baseGetTag$5(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$6 = isObjectLike_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments$4 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$6(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$4;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$3;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var isBuffer$4 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$4, isBuffer$4.exports);
isBuffer$4.exports;
var baseGetTag$4 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$5 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$2 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$5(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$4(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
var _nodeUtil$1 = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil$1, _nodeUtil$1.exports);
_nodeUtil$1.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil$1.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var objectProto$5 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = _typeof(value);
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex = isIndex$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var isFunction$1 = isFunction_1, isLength = isLength_1;
function isArrayLike$5(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$5;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key2) {
  var data = this.__data__, result = data["delete"](key2);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key2) {
  return this.__data__.get(key2);
}
var _stackGet = stackGet$1;
function stackHas$1(key2) {
  return this.__data__.has(key2);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key2, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key2, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key2, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var assignValue$1 = _assignValue, baseAssignValue$1 = _baseAssignValue;
function copyObject$5(source, props2, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props2.length;
  while (++index2 < length) {
    var key2 = props2[index2];
    var newValue = customizer ? customizer(object[key2], source[key2], key2, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key2];
    }
    if (isNew) {
      baseAssignValue$1(object, key2, newValue);
    } else {
      assignValue$1(object, key2, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var baseTimes = _baseTimes, isArguments$3 = isArguments_1, isArray$7 = isArray_1, isBuffer$3 = isBuffer$4.exports, isIndex$1 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$1$2 = Object.prototype;
var hasOwnProperty$1$1 = objectProto$1$2.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$7(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$3(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key2 in value) {
    if ((inherited || hasOwnProperty$1$1.call(value, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
    isIndex$1(key2, length)))) {
      result.push(key2);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key2 in Object(object)) {
      result.push(key2);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$1$2 = isObject_1, isPrototype$1$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$1$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1$1(object), result = [];
  for (var key2 in object) {
    if (!(key2 == "constructor" && (isProto || !hasOwnProperty$4.call(object, key2)))) {
      result.push(key2);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys$2 = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$4 = isArrayLike_1;
function keysIn$4(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$2(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$4;
var _cloneBuffer$1 = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer$1, _cloneBuffer$1.exports);
_cloneBuffer$1.exports;
function copyArray$2(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$2;
var overArg$1 = _overArg;
var getPrototype$1$1 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$1$1;
var root$5 = _root;
var Uint8Array$1 = root$5.Uint8Array;
var _Uint8Array = Uint8Array$1;
var Uint8Array = _Uint8Array;
function cloneArrayBuffer$1$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$1$1;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
var isObject$5 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$5(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$2 = _isPrototype;
function initCloneObject$2(object) {
  return typeof object.constructor == "function" && !isPrototype$2(object) ? baseCreate(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var getNative$3 = _getNative, root$4 = _root;
var Set$2 = getNative$3(root$4, "Set");
var _Set = Set$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$1 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseKeys$2(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$3.call(object, key2) && key2 != "constructor") {
      result.push(key2);
    }
  }
  return result;
}
var _baseKeys = baseKeys$2;
var getNative$2 = _getNative, root$2 = _root;
var DataView$1 = getNative$2(root$2, "DataView");
var _DataView = DataView$1;
var getNative$1 = _getNative, root$1$1 = _root;
var Promise$2 = getNative$1(root$1$1, "Promise");
var _Promise = Promise$2;
var getNative = _getNative, root$3 = _root;
var WeakMap$1 = getNative(root$3, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$2 = _WeakMap, baseGetTag$3 = _baseGetTag, toSource = _toSource;
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$2);
var getTag$4 = baseGetTag$3;
if (DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$4(new Map$1()) != mapTag$4 || Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag || Set$1 && getTag$4(new Set$1()) != setTag$4 || WeakMap$2 && getTag$4(new WeakMap$2()) != weakMapTag$1) {
  getTag$4 = function getTag2(value) {
    var result = baseGetTag$3(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$4;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset2 = array.length;
  while (++index2 < length) {
    array[offset2 + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function arrayEach$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys$1 = _baseKeys, isArrayLike$3 = isArrayLike_1;
function keys$3(object) {
  return isArrayLike$3(object) ? arrayLikeKeys(object) : baseKeys$1(object);
}
var keys_1 = keys$3;
var copyObject$3 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$1$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$1$1 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$1$1(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush$1 = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$4 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$4(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush$2 = _arrayPush, isArray$1$2 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1$2(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1$1 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var _Symbol$2 = _Symbol$2$1;
var symbolProto$1 = _Symbol$2 ? _Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray$1 = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray$1(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var getTag$2 = _getTag, isObjectLike$1$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil$1.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike$4 = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$4(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil$1.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack$1 = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer$1 = _cloneBuffer$1.exports, copyArray$1 = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn$2 = _getAllKeysIn, getTag$3 = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject$1 = _initCloneObject, isArray$6 = isArray_1, isBuffer$2 = isBuffer$4.exports, isMap = isMap_1, isObject$4 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn$3 = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag$2 = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag$3 = "[object Set]", stringTag = "[object String]", symbolTag$2 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag$2] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$3] = cloneableTags[numberTag] = cloneableTags[objectTag$1] = cloneableTags[regexpTag] = cloneableTags[setTag$3] = cloneableTags[stringTag] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key2, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key2, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$4(value)) {
    return value;
  }
  var isArr = isArray$6(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$1(value, result);
    }
  } else {
    var tag = getTag$3(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$2(value)) {
      return cloneBuffer$1(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject$1(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$1());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key3) {
      result.set(key3, baseClone$1(subValue, bitmask, customizer, key3, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn$2 : getAllKeys : isFlat ? keysIn$3 : keys;
  var props2 = isArr ? void 0 : keysFunc(value);
  arrayEach(props2 || value, function(subValue, key3) {
    if (props2) {
      key3 = subValue;
      subValue = value[key3];
    }
    assignValue(result, key3, baseClone$1(subValue, bitmask, customizer, key3, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax$1 = Math.max;
function overRest$2(func, start2, transform) {
  start2 = nativeMax$1(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$1(args.length - start2, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start2 + index2];
    }
    index2 = -1;
    var otherArgs = Array(start2 + 1);
    while (++index2 < start2) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start2] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$2;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty$1, identity$2 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$2 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$2 = shortOut(baseSetToString);
var _setToString = setToString$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var isArrayLike$2 = isArrayLike_1, isObjectLike$3 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$3(value) && isArrayLike$2(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var identity = identity_1, overRest$1 = _overRest, setToString$1 = _setToString;
function baseRest$1(func, start2) {
  return setToString$1(overRest$1(func, start2, identity), func + "");
}
var _baseRest = baseRest$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGetTag$2 = _baseGetTag, getPrototype = _getPrototype, isObjectLike$2 = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto$1 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
  if (!isObjectLike$2(value) || baseGetTag$2(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var eq$1 = eq_1, isArrayLike$1 = isArrayLike_1, isIndex = _isIndex, isObject$3 = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject$3(object)) {
    return false;
  }
  var type = _typeof(index2);
  if (type == "number" ? isArrayLike$1(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq$1(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var defaultConfig = {
  classPrefix: "t",
  animation: {
    include: ["ripple", "expand", "fade"],
    exclude: []
  },
  calendar: {
    firstDayOfWeek: 1,
    fillWithZero: true,
    controllerConfig: void 0
  },
  icon: {},
  input: {
    autocomplete: ""
  },
  dialog: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    confirmBtnTheme: {
      "default": "primary",
      info: "primary",
      warning: "primary",
      danger: "primary",
      success: "primary"
    }
  },
  message: {},
  popconfirm: {
    confirmBtnTheme: {
      "default": "primary",
      warning: "primary",
      danger: "primary"
    }
  },
  table: {
    expandIcon: void 0,
    sortIcon: void 0,
    filterIcon: void 0,
    treeExpandAndFoldIcon: void 0,
    hideSortTips: false
  },
  select: {
    clearIcon: void 0,
    filterable: false
  },
  drawer: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    size: "small"
  },
  tree: {
    folderIcon: void 0
  },
  datePicker: {
    firstDayOfWeek: 1
  },
  steps: {
    errorIcon: void 0
  },
  tag: {
    closeIcon: void 0
  },
  form: {
    requiredMark: void 0
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function ordinal(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      }
    }, m = function m2(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = {
      s: m,
      z: function z(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      },
      m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      },
      a: function a2(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      },
      p: function p3(t2) {
        return {
          M: c,
          y: h2,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      },
      u: function u2(t2) {
        return void 0 === t2;
      }
    }, g = "en", D = {};
    D[g] = M;
    var p2 = function p3(t2) {
      return t2 instanceof b;
    }, S = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, w = function w2(t2, e2) {
      if (p2(t2))
        return t2.clone();
      var n2 = "object" == _typeof(e2) ? e2 : {};
      return n2.date = t2, n2.args = arguments, new b(n2);
    }, O = v;
    O.l = S, O.i = p2, O.w = function(t2, e2) {
      return w(t2, {
        locale: e2.$L,
        utc: e2.$u,
        x: e2.$x,
        $offset: e2.$offset
      });
    };
    var b = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return /* @__PURE__ */ new Date(NaN);
          if (O.u(e2))
            return /* @__PURE__ */ new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, f2 = O.p(t2), l2 = function l3(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function $3(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (f2) {
          case h2:
            return r2 ? l2(1, 0) : l2(31, 11);
          case c:
            return r2 ? l2(1, M3) : l2(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h2] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === c || o2 === h2) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, f2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $2 = O.p(f2), y2 = function y3(t2) {
          var e2 = w(l2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
        };
        if ($2 === c)
          return this.set(c, this.$M + r2);
        if ($2 === h2)
          return this.set(h2, this.$y + r2);
        if ($2 === a)
          return y2(1);
        if ($2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function h4(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, d2 = function d3(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, $2 = f2 || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        };
        return r2.replace(y, function(t3, r3) {
          return r3 || function(t4) {
            switch (t4) {
              case "YY":
                return String(e2.$y).slice(-2);
              case "YYYY":
                return O.s(e2.$y, 4, "0");
              case "M":
                return a2 + 1;
              case "MM":
                return O.s(a2 + 1, 2, "0");
              case "MMM":
                return h3(n2.monthsShort, a2, c2, 3);
              case "MMMM":
                return h3(c2, a2);
              case "D":
                return e2.$D;
              case "DD":
                return O.s(e2.$D, 2, "0");
              case "d":
                return String(e2.$W);
              case "dd":
                return h3(n2.weekdaysMin, e2.$W, o2, 2);
              case "ddd":
                return h3(n2.weekdaysShort, e2.$W, o2, 3);
              case "dddd":
                return o2[e2.$W];
              case "H":
                return String(s2);
              case "HH":
                return O.s(s2, 2, "0");
              case "h":
                return d2(1);
              case "hh":
                return d2(2);
              case "a":
                return $2(s2, u2, true);
              case "A":
                return $2(s2, u2, false);
              case "m":
                return String(u2);
              case "mm":
                return O.s(u2, 2, "0");
              case "s":
                return String(e2.$s);
              case "ss":
                return O.s(e2.$s, 2, "0");
              case "SSS":
                return O.s(e2.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t3) || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $2, y2 = this, M3 = O.p(d2), m3 = w(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function D3() {
          return O.m(y2, m3);
        };
        switch (M3) {
          case h2:
            $2 = D2() / 12;
            break;
          case c:
            $2 = D2();
            break;
          case f:
            $2 = D2() / 3;
            break;
          case o:
            $2 = (g2 - v2) / 6048e5;
            break;
          case a:
            $2 = (g2 - v2) / 864e5;
            break;
          case u:
            $2 = g2 / n;
            break;
          case s:
            $2 = g2 / e;
            break;
          case i:
            $2 = g2 / t;
            break;
          default:
            $2 = g2;
        }
        return l2 ? $2 : O.a($2);
      }, m2.daysInMonth = function() {
        return this.endOf(c).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), _ = b.prototype;
    return w.prototype = _, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h2], ["$D", d]].forEach(function(t2) {
      _[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, b, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p2, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var zhCn$2 = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(dayjs_min.exports);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && "object" == _typeof(e2) && "default" in e2 ? e2 : {
        "default": e2
      };
    }
    var t = _(e), d = {
      name: "zh-cn",
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      ordinal: function ordinal(e2, _2) {
        return "W" === _2 ? e2 + "周" : e2 + "日";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah点mm分",
        LLLL: "YYYY年M月D日ddddAh点mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "几秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      meridiem: function meridiem(e2, _2) {
        var t2 = 100 * e2 + _2;
        return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
      }
    };
    return t["default"].locale(d, null, true), d;
  });
})(zhCn$2);
var zhCn = {
  pagination: {
    itemsPerPage: "{size} 条/页",
    jumpTo: "跳至",
    page: "页",
    total: "共 {total} 项数据"
  },
  cascader: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  calendar: {
    yearSelection: "{year} 年",
    monthSelection: "{month} 月",
    yearRadio: "年",
    monthRadio: "月",
    hideWeekend: "隐藏周末",
    showWeekend: "显示周末",
    today: "今天",
    thisMonth: "本月",
    week: "一,二,三,四,五,六,日",
    cellMonth: "1 月,2 月,3 月,4 月,5 月,6 月,7 月,8 月,9 月,10 月,11 月,12 月"
  },
  transfer: {
    title: "{checked} / {total} 项",
    empty: "暂无数据",
    placeholder: "请输入关键词搜索"
  },
  timePicker: {
    dayjsLocale: "zh-cn",
    now: "此刻",
    confirm: "确定",
    anteMeridiem: "上午",
    postMeridiem: "下午",
    placeholder: "选择时间"
  },
  dialog: {
    confirm: "确认",
    cancel: "取消"
  },
  drawer: {
    confirm: "确认",
    cancel: "取消"
  },
  popconfirm: {
    confirm: {
      content: "确定"
    },
    cancel: {
      content: "取消"
    }
  },
  table: {
    empty: "暂无数据",
    loadingText: "正在加载中，请稍后",
    loadingMoreText: "点击加载更多",
    filterInputPlaceholder: "请输入内容（无默认值）",
    sortAscendingOperationText: "点击升序",
    sortCancelOperationText: "点击取消排序",
    sortDescendingOperationText: "点击降序",
    clearFilterResultButtonText: "清空筛选",
    columnConfigButtonText: "列配置",
    columnConfigTitleText: "表格列配置",
    columnConfigDescriptionText: "请选择需要在表格中显示的数据列",
    confirmText: "确认",
    cancelText: "取消",
    resetText: "重置",
    selectAllText: "全选",
    searchResultText: "搜索“{result}”，找到 {count} 条结果"
  },
  select: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  tree: {
    empty: "暂无数据"
  },
  treeSelect: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  datePicker: {
    dayjsLocale: "zh-cn",
    placeholder: {
      date: "请选择日期",
      month: "请选择月份",
      year: "请选择年份"
    },
    weekdays: ["一", "二", "三", "四", "五", "六", "日"],
    months: ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
    quarters: ["一季度", "二季度", "三季度", "四季度"],
    rangeSeparator: " - ",
    direction: "ltr",
    format: "YYYY-MM-DD",
    dayAriaLabel: "日",
    weekAbbreviation: "周",
    yearAriaLabel: "年",
    monthAriaLabel: "月",
    confirm: "确定",
    selectTime: "选择时间",
    selectDate: "选择日期",
    nextYear: "下一年",
    preYear: "上一年",
    nextMonth: "下个月",
    preMonth: "上个月",
    preDecade: "上个十年",
    nextDecade: "下个十年",
    now: "当前"
  },
  upload: {
    sizeLimitMessage: "文件大小不能超过 {sizeLimit}",
    cancelUploadText: "取消上传",
    triggerUploadText: {
      fileInput: "选择文件",
      image: "点击上传图片",
      normal: "点击上传",
      reupload: "重新选择",
      continueUpload: "继续选择",
      "delete": "删除",
      uploading: "上传中"
    },
    dragger: {
      dragDropText: "释放鼠标",
      draggingText: "拖拽到此区域",
      clickAndDragText: "点击上方“选择文件”或将文件拖拽到此区域"
    },
    file: {
      fileNameText: "文件名",
      fileSizeText: "文件大小",
      fileStatusText: "状态",
      fileOperationText: "操作",
      fileOperationDateText: "上传日期"
    },
    progress: {
      uploadingText: "上传中",
      waitingText: "待上传",
      failText: "上传失败",
      successText: "上传成功"
    }
  },
  form: {
    errorMessage: {
      date: "请输入正确的${name}",
      url: "请输入正确的${name}",
      required: "${name}必填",
      max: "${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符",
      min: "${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符",
      len: "${name}字符长度必须是 ${validate}",
      "enum": "${name}只能是${validate}等",
      idcard: "请输入正确的${name}",
      telnumber: "请输入正确的${name}",
      pattern: "请输入正确的${name}",
      validator: "${name}不符合要求",
      "boolean": "${name}数据类型必须是布尔类型",
      number: "${name}必须是数字"
    }
  },
  input: {
    placeholder: "请输入"
  },
  list: {
    loadingText: "正在加载中，请稍等",
    loadingMoreText: "点击加载更多"
  },
  alert: {
    expandText: "展开更多",
    collapseText: "收起"
  },
  anchor: {
    copySuccessText: "链接复制成功",
    copyText: "复制链接"
  },
  colorPicker: {
    swatchColorTitle: "系统预设颜色",
    recentColorTitle: "最近使用颜色",
    clearConfirmText: "确定清空最近使用的颜色吗？"
  },
  guide: {
    finishButtonProps: {
      content: "完成",
      theme: "primary"
    },
    nextButtonProps: {
      content: "下一步",
      theme: "primary"
    },
    skipButtonProps: {
      content: "跳过",
      theme: "default"
    },
    prevButtonProps: {
      content: "上一步",
      theme: "default"
    }
  },
  image: {
    errorText: "图片无法显示",
    loadingText: "图片加载中"
  },
  imageViewer: {
    errorText: "图片加载失败，可尝试重新加载",
    mirrorTipText: "镜像",
    rotateTipText: "旋转",
    originalSizeTipText: "原始大小"
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseAssignValue = _baseAssignValue, eq = eq_1;
function assignMergeValue$2(object, key2, value) {
  if (value !== void 0 && !eq(object[key2], value) || value === void 0 && !(key2 in object)) {
    baseAssignValue(object, key2, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props2 = keysFunc(object), length = props2.length;
    while (length--) {
      var key2 = props2[fromRight ? length : ++index2];
      if (iteratee(iterable[key2], key2, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
function safeGet$2(object, key2) {
  if (key2 === "constructor" && typeof object[key2] === "function") {
    return;
  }
  if (key2 == "__proto__") {
    return;
  }
  return object[key2];
}
var _safeGet = safeGet$2;
var copyObject$1 = _copyObject, keysIn$1 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject$1(value, keysIn$1(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBuffer$1.exports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments$2 = isArguments_1, isArray$5 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer$1 = isBuffer$4.exports, isFunction = isFunction_1, isObject$1$1 = isObject_1, isPlainObject$1 = isPlainObject_1, isTypedArray$1 = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key2, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key2), srcValue = safeGet$1(source, key2), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key2, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key2 + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$5(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$5(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject$1(srcValue) || isArguments$2(srcValue)) {
      newValue = objValue;
      if (isArguments$2(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$1$1(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key2, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$2 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
function baseMerge$2(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key2) {
    stack || (stack = new Stack());
    if (isObject$2(srcValue)) {
      baseMergeDeep(object, source, key2, srcIndex, baseMerge$2, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key2), srcValue, key2 + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key2, newValue);
    }
  }, keysIn);
}
var _baseMerge = baseMerge$2;
var baseRest = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$2(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$2;
var baseMerge$1 = _baseMerge, createAssigner$1 = _createAssigner;
createAssigner$1(function(object, source, srcIndex, customizer) {
  baseMerge$1(object, source, srcIndex, customizer);
});
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge_1 = merge;
var EAnimationType = /* @__PURE__ */ function(EAnimationType2) {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["expand"] = "expand";
  EAnimationType2["fade"] = "fade";
  return EAnimationType2;
}(EAnimationType || {});
var defaultGlobalConfig = merge_1(defaultConfig, zhCn);
var configProviderInjectKey = Symbol("configProvide");
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var globalConfigCopy = ref();
function useConfig(componentName) {
  var injectGlobalConfig = getCurrentInstance() ? inject(configProviderInjectKey, null) : globalConfigCopy;
  var mergedGlobalConfig = computed(function() {
    return (injectGlobalConfig === null || injectGlobalConfig === void 0 ? void 0 : injectGlobalConfig.value) || defaultGlobalConfig;
  });
  var globalConfig = computed(function() {
    return mergedGlobalConfig.value[componentName];
  });
  var classPrefix2 = computed(function() {
    return mergedGlobalConfig.value.classPrefix;
  });
  var t = function t2(pattern) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var data = args[0];
    if (isString_1(pattern)) {
      if (!data)
        return pattern;
      var regular = /\{\s*([\w-]+)\s*\}/g;
      var translated = pattern.replace(regular, function(match, key2) {
        if (data) {
          return String(data[key2]);
        }
        return "";
      });
      return translated;
    }
    if (isFunction_1(pattern)) {
      if (!args.length)
        return pattern(h);
      return pattern.apply(void 0, args);
    }
    return "";
  };
  return {
    t,
    global: globalConfig,
    globalConfig,
    classPrefix: classPrefix2
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function usePrefixClass(componentName) {
  var _useConfig = useConfig("classPrefix"), classPrefix2 = _useConfig.classPrefix;
  return computed(function() {
    return componentName ? "".concat(classPrefix2.value, "-").concat(componentName) : classPrefix2.value;
  });
}
function useCommonClassName$1() {
  var _useConfig2 = useConfig("classPrefix"), classPrefix2 = _useConfig2.classPrefix;
  return {
    SIZE: computed(function() {
      return {
        small: "".concat(classPrefix2.value, "-size-s"),
        medium: "".concat(classPrefix2.value, "-size-m"),
        large: "".concat(classPrefix2.value, "-size-l"),
        "default": "",
        xs: "".concat(classPrefix2.value, "-size-xs"),
        xl: "".concat(classPrefix2.value, "-size-xl"),
        block: "".concat(classPrefix2.value, "-size-full-width")
      };
    }),
    STATUS: computed(function() {
      return {
        loading: "".concat(classPrefix2.value, "-is-loading"),
        loadMore: "".concat(classPrefix2.value, "-is-load-more"),
        disabled: "".concat(classPrefix2.value, "-is-disabled"),
        focused: "".concat(classPrefix2.value, "-is-focused"),
        success: "".concat(classPrefix2.value, "-is-success"),
        error: "".concat(classPrefix2.value, "-is-error"),
        warning: "".concat(classPrefix2.value, "-is-warning"),
        selected: "".concat(classPrefix2.value, "-is-selected"),
        active: "".concat(classPrefix2.value, "-is-active"),
        checked: "".concat(classPrefix2.value, "-is-checked"),
        current: "".concat(classPrefix2.value, "-is-current"),
        hidden: "".concat(classPrefix2.value, "-is-hidden"),
        visible: "".concat(classPrefix2.value, "-is-visible"),
        expanded: "".concat(classPrefix2.value, "-is-expanded"),
        indeterminate: "".concat(classPrefix2.value, "-is-indeterminate")
      };
    })
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var GradientIcon = defineComponent({
  name: "TLoadingGradient",
  setup: function setup() {
    var classPrefix2 = usePrefixClass();
    onMounted(function() {
      var circleElem = getCurrentInstance().refs.circle;
      nextTick(function() {
        circleAdapter(circleElem);
      });
    });
    return {
      classPrefix: classPrefix2
    };
  },
  render: function render() {
    var classPrefix2 = this.classPrefix;
    var name = "".concat(classPrefix2, "-loading__gradient");
    var classes = [name, "".concat(classPrefix2, "-icon-loading")];
    return createVNode("svg", {
      "class": classes,
      "viewBox": "0 0 12 12",
      "version": "1.1",
      "width": "1em",
      "height": "1em",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("foreignObject", {
      "x": "0",
      "y": "0",
      "width": "12",
      "height": "12"
    }, [createVNode("div", {
      "class": "".concat(name, "-conic"),
      "ref": "circle"
    }, null)])]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var raf$2 = { exports: {} };
var performanceNow$1 = { exports: {} };
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    performanceNow$1.exports = function() {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    performanceNow$1.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds2() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    performanceNow$1.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    performanceNow$1.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - loadTime;
    };
    loadTime = (/* @__PURE__ */ new Date()).getTime();
  }
}).call(commonjsGlobal);
var now$2 = performanceNow$1.exports, root$1 = typeof window === "undefined" ? commonjsGlobal : window, vendors = ["moz", "webkit"], suffix = "AnimationFrame", raf = root$1["request" + suffix], caf = root$1["cancel" + suffix] || root$1["cancelRequest" + suffix];
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root$1[vendors[i] + "Request" + suffix];
  caf = root$1[vendors[i] + "Cancel" + suffix] || root$1[vendors[i] + "CancelRequest" + suffix];
}
if (!raf || !caf) {
  var last$2 = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
  raf = function raf2(callback) {
    if (queue.length === 0) {
      var _now = now$2(), next = Math.max(0, frameDuration - (_now - last$2));
      last$2 = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        queue.length = 0;
        var _loop = function _loop2() {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last$2);
            } catch (e) {
              setTimeout(function() {
                throw e;
              }, 0);
            }
          }
        };
        for (var i = 0; i < cp.length; i++) {
          _loop();
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback,
      cancelled: false
    });
    return id;
  };
  caf = function caf2(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}
raf$2.exports = function(fn2) {
  return raf.call(root$1, fn2);
};
raf$2.exports.cancel = function() {
  caf.apply(root$1, arguments);
};
raf$2.exports.polyfill = function(object) {
  if (!object) {
    object = root$1;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
var isServer$1 = typeof window === "undefined";
var trim = function trim2(str) {
  return (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
var on = function() {
  if (!isServer$1 && document.addEventListener) {
    return function(element2, event, handler, options) {
      if (element2 && event && handler) {
        element2.addEventListener(event, handler, options);
      }
    };
  }
  return function(element2, event, handler) {
    if (element2 && event && handler) {
      element2.attachEvent("on".concat(event), handler);
    }
  };
}();
var off = function() {
  if (!isServer$1 && document.removeEventListener) {
    return function(element2, event, handler, options) {
      if (element2 && event) {
        element2.removeEventListener(event, handler, options);
      }
    };
  }
  return function(element2, event, handler) {
    if (element2 && event) {
      element2.detachEvent("on".concat(event), handler);
    }
  };
}();
function once(element2, event, handler, options) {
  var handlerFn = isFunction_1(handler) ? handler : handler.handleEvent;
  var callback = function callback2(evt) {
    handlerFn(evt);
    off(element2, event, callback2, options);
  };
  on(element2, event, callback, options);
}
function hasClass(el, cls) {
  if (!el || !cls)
    return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return " ".concat(el.className, " ").indexOf(" ".concat(cls, " ")) > -1;
}
function addClass(el, cls) {
  if (!el)
    return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " ".concat(clsName);
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  var classes = cls.split(" ");
  var curClass = " ".concat(el.className, " ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" ".concat(clsName, " "), " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
var getAttach = function getAttach2(node, triggerNode) {
  var attachNode = isFunction_1(node) ? node(triggerNode) : node;
  if (!attachNode) {
    return document.body;
  }
  if (isString_1(attachNode)) {
    return document.querySelector(attachNode);
  }
  if (attachNode instanceof HTMLElement) {
    return attachNode;
  }
  return document.body;
};
var getSSRAttach = function getSSRAttach2() {
};
var getScrollContainer = function getScrollContainer2() {
  var container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "body";
  if (isString_1(container)) {
    return document.querySelector(container);
  }
  if (isFunction_1(container)) {
    return container();
  }
  return container;
};
var isNodeOverflow = function isNodeOverflow2(ele) {
  var _ele$clientWidth = ele.clientWidth, clientWidth = _ele$clientWidth === void 0 ? 0 : _ele$clientWidth, _ele$scrollWidth = ele.scrollWidth, scrollWidth = _ele$scrollWidth === void 0 ? 0 : _ele$scrollWidth;
  return scrollWidth > clientWidth;
};
var requestSubmit = function requestSubmit2(target) {
  if (!(target instanceof HTMLFormElement)) {
    throw new Error("target must be HTMLFormElement");
  }
  var submitter = document.createElement("input");
  submitter.type = "submit";
  submitter.hidden = true;
  target.appendChild(submitter);
  submitter.click();
  target.removeChild(submitter);
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseKeys = _baseKeys, getTag = _getTag, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isArrayLike = isArrayLike_1, isBuffer = isBuffer$4.exports, isPrototype = _isPrototype, isTypedArray = isTypedArray_1;
var mapTag = "[object Map]", setTag = "[object Set]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray$4(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments$1(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key2 in value) {
    if (hasOwnProperty.call(value, key2)) {
      return false;
    }
  }
  return true;
}
var isEmpty_1 = isEmpty;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGetTag$1 = _baseGetTag, isObjectLike$1 = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$4(value) {
  return _typeof(value) == "symbol" || isObjectLike$1(value) && baseGetTag$1(value) == symbolTag;
}
var isSymbol_1 = isSymbol$4;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function arrayMap$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var _Symbol$1 = _Symbol$2$1, arrayMap$2 = _arrayMap, isArray$3 = isArray_1, isSymbol$3 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = _Symbol$1 ? _Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$3(value)) {
    return arrayMap$2(value, baseToString$1) + "";
  }
  if (isSymbol$3(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$4(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$4;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function baseSlice$2(array, start2, end2) {
  var index2 = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end2 = end2 > length ? length : end2;
  if (end2 < 0) {
    end2 += length;
  }
  length = start2 > end2 ? 0 : end2 - start2 >>> 0;
  start2 >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start2];
  }
  return result;
}
var _baseSlice = baseSlice$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseSlice$1 = _baseSlice;
function castSlice$1(array, start2, end2) {
  var length = array.length;
  end2 = end2 === void 0 ? length : end2;
  return !start2 && end2 >= length ? array : baseSlice$1(array, start2, end2);
}
var _castSlice = castSlice$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1$1 = "\\u20d0-\\u20ff", rsComboRange$1$1 = rsComboMarksRange$1$1 + reComboHalfMarksRange$1$1 + rsComboSymbolsRange$1$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1$1 + rsVarRange$1 + "]");
function hasUnicode$1(string) {
  return reHasUnicode.test(string);
}
var _hasUnicode = hasUnicode$1;
function asciiToArray$1(string) {
  return string.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsVarRange$2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange$2 + "]", rsCombo$2 = "[" + rsComboRange$2 + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$2 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$2 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ$2 = "\\u200d";
var reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$2 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$2 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsSymbol = "(?:" + [rsNonAstral$1 + rsCombo$2 + "?", rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz$1 + "(?=" + rsFitz$1 + ")|" + rsSymbol + rsSeq$1, "g");
function unicodeToArray$1(string) {
  return string.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode$2 = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$1(string) {
  return hasUnicode$2(string) ? unicodeToArray(string) : asciiToArray(string);
}
var _stringToArray = stringToArray$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var castSlice = _castSlice, hasUnicode = _hasUnicode, stringToArray = _stringToArray, toString$3 = toString_1;
function createCaseFirst$1(methodName) {
  return function(string) {
    string = toString$3(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var _createCaseFirst = createCaseFirst$1;
var createCaseFirst = _createCaseFirst;
var upperFirst$1 = createCaseFirst("toUpperCase");
var upperFirst_1 = upperFirst$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index2 = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index2];
  }
  while (++index2 < length) {
    accumulator = iteratee(accumulator, array[index2], index2, array);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$1(object) {
  return function(key2) {
    return object == null ? void 0 : object[key2];
  };
}
var _basePropertyOf = basePropertyOf$1;
var basePropertyOf = _basePropertyOf;
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter$1 = basePropertyOf(deburredLetters);
var _deburrLetter = deburrLetter$1;
var deburrLetter = _deburrLetter, toString$1$1 = toString_1;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsCombo$1 = "[" + rsComboRange$1 + "]";
var reComboMark = RegExp(rsCombo$1, "g");
function deburr$1(string) {
  string = toString$1$1(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var deburr_1 = deburr$1;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(string) {
  return string.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1;
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(string) {
  return reHasUnicodeWord.test(string);
}
var _hasUnicodeWord = hasUnicodeWord$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
var reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");
function unicodeWords$1(string) {
  return string.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1;
var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString$2 = toString_1, unicodeWords = _unicodeWords;
function words$1(string, pattern, guard) {
  string = toString$2(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
var words_1 = words$1;
var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
var rsApos = "['’]";
var reApos = RegExp(rsApos, "g");
function createCompounder$2(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}
var _createCompounder = createCompounder$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var toString$1 = toString_1, upperFirst = upperFirst_1;
function capitalize$1(string) {
  return upperFirst(toString$1(string).toLowerCase());
}
var capitalize_1 = capitalize$1;
var capitalize = capitalize_1, createCompounder$1 = _createCompounder;
var camelCase = createCompounder$1(function(result, word, index2) {
  word = word.toLowerCase();
  return result + (index2 ? capitalize(word) : word);
});
var camelCase_1 = camelCase;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var createCompounder = _createCompounder;
var kebabCase = createCompounder(function(result, word, index2) {
  return result + (index2 ? "-" : "") + word.toLowerCase();
});
var kebabCase_1 = kebabCase;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function getDefaultNode(options) {
  var defaultNode;
  if (isObject_1(options) && "defaultNode" in options) {
    defaultNode = options.defaultNode;
  } else if (isVNode(options) || isString_1(options)) {
    defaultNode = options;
  }
  return defaultNode;
}
function getParams(options) {
  return isObject_1(options) && "params" in options ? options.params : {};
}
function getSlotFirst(options) {
  return isObject_1(options) && "slotFirst" in options ? options.slotFirst : {};
}
function handleSlots$1(instance, params, name) {
  var _instance$$slots$came, _instance$$slots, _instance$$slots$keba, _instance$$slots2;
  var node = (_instance$$slots$came = (_instance$$slots = instance.$slots)[camelCase_1(name)]) === null || _instance$$slots$came === void 0 ? void 0 : _instance$$slots$came.call(_instance$$slots, params);
  if (node)
    return node;
  node = (_instance$$slots$keba = (_instance$$slots2 = instance.$slots)[kebabCase_1(name)]) === null || _instance$$slots$keba === void 0 ? void 0 : _instance$$slots$keba.call(_instance$$slots2, params);
  if (node)
    return node;
  return null;
}
var renderTNodeJSX = function renderTNodeJSX2(instance, name, options) {
  var params = getParams(options);
  var defaultNode = getDefaultNode(options);
  var propsNode;
  if (name in instance) {
    propsNode = instance[name];
  }
  if (propsNode === false)
    return;
  if (propsNode === true && defaultNode) {
    return handleSlots$1(instance, params, name) || defaultNode;
  }
  if (isFunction_1(propsNode))
    return propsNode(h, params);
  var isPropsEmpty = [void 0, params, ""].includes(propsNode);
  if (isPropsEmpty && (instance.$slots[camelCase_1(name)] || instance.$slots[kebabCase_1(name)])) {
    return handleSlots$1(instance, params, name);
  }
  return propsNode;
};
var renderContent = function renderContent2(vm, name1, name2, options) {
  var params = getParams(options);
  var defaultNode = getDefaultNode(options);
  var toParams = params ? {
    params
  } : void 0;
  var node1 = renderTNodeJSX(vm, name1, toParams);
  var node2 = renderTNodeJSX(vm, name2, toParams);
  var res = isEmpty_1(node1) ? node2 : node1;
  return isEmpty_1(res) ? defaultNode : res;
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$j = {
  attach: {
    type: [String, Function],
    "default": ""
  },
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  delay: {
    type: Number,
    "default": 0
  },
  fullscreen: Boolean,
  indicator: {
    type: [Boolean, Function],
    "default": true
  },
  inheritColor: Boolean,
  loading: {
    type: Boolean,
    "default": true
  },
  preventScrollThrough: {
    type: Boolean,
    "default": true
  },
  showOverlay: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    "default": "medium"
  },
  text: {
    type: [String, Function]
  },
  zIndex: {
    type: Number
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var useTeleport = function useTeleport2(attach, triggerNode) {
  var to = isFunction_1(attach) ? computed(attach) : ref(attach);
  var innerTriggerNode = isFunction_1(triggerNode) ? computed(triggerNode) : ref(triggerNode);
  var element2 = ref();
  var getElement = function getElement2() {
    element2.value = getSSRAttach() || getAttach(to.value, innerTriggerNode.value);
  };
  onMounted(function() {
    return getElement();
  });
  watch([to, innerTriggerNode], function() {
    return getElement();
  });
  return element2;
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var useComponentClassName = function useComponentClassName2() {
  return {
    name: usePrefixClass("loading"),
    centerClass: usePrefixClass("loading--center"),
    fullscreenClass: usePrefixClass("loading__fullscreen"),
    lockClass: usePrefixClass("loading--lock"),
    overlayClass: usePrefixClass("loading__overlay"),
    relativeClass: usePrefixClass("loading__parent"),
    fullClass: usePrefixClass("loading--full"),
    inheritColorClass: usePrefixClass("loading--inherit-color")
  };
};
var _Loading = defineComponent({
  name: "TLoading",
  inheritAttrs: false,
  props: props$j,
  setup: function setup2(props2, _ref) {
    var slots = _ref.slots;
    var delayShowLoading = ref(false);
    var _useComponentClassNam = useComponentClassName(), name = _useComponentClassNam.name, centerClass = _useComponentClassNam.centerClass, fullscreenClass = _useComponentClassNam.fullscreenClass, lockClass = _useComponentClassNam.lockClass, overlayClass = _useComponentClassNam.overlayClass, relativeClass = _useComponentClassNam.relativeClass, fullClass = _useComponentClassNam.fullClass, inheritColorClass = _useComponentClassNam.inheritColorClass;
    var classPrefix2 = usePrefixClass();
    var _useCommonClassName = useCommonClassName$1(), SIZE = _useCommonClassName.SIZE;
    var countDelay = function countDelay2() {
      delayShowLoading.value = false;
      var timer = setTimeout(function() {
        delayShowLoading.value = true;
        clearTimeout(timer);
      }, props2.delay);
    };
    var teleportElement = useTeleport(function() {
      return props2.attach;
    });
    var delayCounted = computed(function() {
      return Boolean(!props2.delay || props2.delay && delayShowLoading.value);
    });
    var styles = computed(function() {
      var styles2 = {};
      if (props2.zIndex !== void 0) {
        styles2.zIndex = props2.zIndex;
      }
      if (!["small", "medium", "large"].includes(props2.size)) {
        styles2["font-size"] = props2.size;
      }
      return styles2;
    });
    var hasContent = computed(function() {
      return Boolean(props2["default"] || slots["default"] || props2.content || slots.content);
    });
    var lockFullscreen = computed(function() {
      return props2.preventScrollThrough && props2.fullscreen;
    });
    var showText = computed(function() {
      return Boolean(props2.text || slots.text);
    });
    var showWrapLoading = computed(function() {
      return hasContent.value && props2.loading && delayCounted.value;
    });
    var showFullScreenLoading = computed(function() {
      return props2.fullscreen && props2.loading && delayCounted.value;
    });
    var showNormalLoading = computed(function() {
      return props2.attach && props2.loading && delayCounted.value;
    });
    var showAttachedLoading = computed(function() {
      return props2.attach && props2.loading && delayCounted.value;
    });
    var classes = computed(function() {
      var baseClasses = [centerClass.value, SIZE.value[props2.size], _defineProperty$2({}, inheritColorClass.value, props2.inheritColor)];
      var fullScreenClasses = [name.value, fullscreenClass.value, centerClass.value, overlayClass.value];
      return {
        baseClasses,
        attachClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty$2({}, overlayClass.value, props2.showOverlay)]),
        withContentClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty$2({}, overlayClass.value, props2.showOverlay)]),
        fullScreenClasses,
        normalClasses: baseClasses.concat([name.value])
      };
    });
    var _toRefs = toRefs(props2), loading = _toRefs.loading;
    watch([loading], function(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1), isLoading = _ref6[0];
      if (isLoading) {
        countDelay();
        lockFullscreen.value && addClass(document.body, lockClass.value);
      } else {
        lockFullscreen.value && removeClass(document.body, lockClass.value);
      }
    });
    onMounted(function() {
      props2.delay && countDelay();
    });
    return {
      classPrefix: classPrefix2,
      relativeClass,
      delayShowLoading,
      styles,
      showText,
      hasContent,
      classes,
      lockFullscreen,
      showWrapLoading,
      showNormalLoading,
      showFullScreenLoading,
      showAttachedLoading,
      teleportElement
    };
  },
  render: function render2() {
    var _this = this;
    var _this$classes = this.classes, fullScreenClasses = _this$classes.fullScreenClasses, baseClasses = _this$classes.baseClasses, withContentClasses = _this$classes.withContentClasses, attachClasses = _this$classes.attachClasses, normalClasses = _this$classes.normalClasses;
    var defaultIndicator = createVNode(GradientIcon, {
      "size": this.size
    }, null);
    var indicator = this.loading && renderTNodeJSX(this, "indicator", defaultIndicator);
    var text = this.showText && createVNode("div", {
      "class": "".concat(this.classPrefix, "-loading__text")
    }, [renderTNodeJSX(this, "text")]);
    if (this.fullscreen) {
      if (!this.showFullScreenLoading || !this.loading)
        return null;
      return createVNode(Teleport, {
        "disabled": !this.attach || !this.teleportElement,
        "to": this.teleportElement
      }, {
        "default": function _default3() {
          return [createVNode("div", mergeProps({
            "class": fullScreenClasses,
            "style": _this.styles
          }, _this.$attrs), [createVNode("div", {
            "class": baseClasses
          }, [indicator, text])])];
        }
      });
    }
    if (this.hasContent) {
      return createVNode("div", mergeProps({
        "class": this.relativeClass
      }, this.$attrs), [renderContent(this, "default", "content"), this.showWrapLoading && createVNode("div", {
        "class": withContentClasses,
        "style": this.styles
      }, [indicator, text])]);
    }
    if (this.attach) {
      if (!this.showAttachedLoading || !this.loading)
        return null;
      return createVNode(Teleport, {
        "disabled": !this.attach || !this.teleportElement,
        "to": this.teleportElement
      }, {
        "default": function _default3() {
          return [createVNode("div", mergeProps({
            "class": attachClasses,
            "style": _this.styles
          }, _this.$attrs), [indicator, text])];
        }
      });
    }
    return this.loading ? createVNode("div", mergeProps({
      "class": normalClasses,
      "style": this.styles
    }, this.$attrs), [indicator, text]) : null;
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$u(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$u(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$u(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$u(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var fullScreenLoadingInstance = null;
function createLoading(props2) {
  var component = defineComponent({
    setup: function setup32() {
      var loadingOptions = reactive(props2);
      return {
        loadingOptions
      };
    },
    render: function render8() {
      return h(_Loading, _objectSpread$u({}, this.loadingOptions));
    }
  });
  var attach = getAttach(props2.attach);
  var loading = createApp(component).mount(document.createElement("div"));
  var parentRelativeClass = usePrefixClass("loading__parent--relative").value;
  var prefixClass = usePrefixClass("loading");
  if (attach) {
    addClass(attach, parentRelativeClass);
  } else {
    console.error("attach is not exist");
  }
  var loadingInstance = {
    hide: function hide2() {
      var _attach$querySelector;
      loading.loading = false;
      (_attach$querySelector = attach.querySelectorAll(".".concat(prefixClass.value))) === null || _attach$querySelector === void 0 ? void 0 : _attach$querySelector.forEach(function(item) {
        item.remove();
      });
      removeClass(attach, parentRelativeClass);
    }
  };
  return loadingInstance;
}
function produceLoading(props2) {
  var lockClass = usePrefixClass("loading--lock");
  if (props2 === true) {
    fullScreenLoadingInstance = createLoading({
      fullscreen: true,
      loading: true,
      attach: "body"
    });
    return fullScreenLoadingInstance;
  }
  removeClass(document.body, lockClass.value);
  if (props2 === false) {
    removeClass(document.body, lockClass.value);
    fullScreenLoadingInstance.hide();
    fullScreenLoadingInstance = null;
    return;
  }
  return createLoading(props2);
}
var LoadingPlugin = produceLoading;
LoadingPlugin.install = function(app2) {
  app2.config.globalProperties.$loading = produceLoading;
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var INSTANCE_KEY = Symbol("TdLoading");
var createInstance = function createInstance2(el, binding) {
  var _binding$modifiers = binding.modifiers, fullscreen = _binding$modifiers.fullscreen, inheritColor = _binding$modifiers.inheritColor;
  var options = {
    attach: function attach() {
      return el;
    },
    fullscreen: fullscreen !== null && fullscreen !== void 0 ? fullscreen : false,
    inheritColor: inheritColor !== null && inheritColor !== void 0 ? inheritColor : false,
    loading: binding.value
  };
  el[INSTANCE_KEY] = {
    options,
    instance: LoadingPlugin(options)
  };
};
var vLoading = {
  mounted: function mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated: function updated(el, binding) {
    var instance = el[INSTANCE_KEY];
    var value = binding.value, oldValue = binding.oldValue;
    if (!!oldValue !== !!value) {
      if (value) {
        createInstance(el, binding);
      } else {
        instance === null || instance === void 0 ? void 0 : instance.instance.hide();
      }
    }
  },
  unmounted: function unmounted(el) {
    var _el$INSTANCE_KEY;
    (_el$INSTANCE_KEY = el[INSTANCE_KEY]) === null || _el$INSTANCE_KEY === void 0 ? void 0 : _el$INSTANCE_KEY.instance.hide();
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function withInstall(comp, alias, directive) {
  var componentPlugin = comp;
  componentPlugin.install = function(app2, name) {
    app2.component(alias || name || componentPlugin.name, comp);
    directive && app2.directive(directive.name, directive.comp);
  };
  return componentPlugin;
}
const index$g = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Loading = withInstall(_Loading, _Loading.name, {
  name: "loading",
  comp: vLoading
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$i = {
  block: Boolean,
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
  ghost: Boolean,
  href: {
    type: String,
    "default": ""
  },
  icon: {
    type: Function
  },
  loading: Boolean,
  shape: {
    type: String,
    "default": "rectangle",
    validator: function validator(val) {
      if (!val)
        return true;
      return ["rectangle", "square", "round", "circle"].includes(val);
    }
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator2(val) {
      if (!val)
        return true;
      return ["extra-small", "small", "medium", "large"].includes(val);
    }
  },
  suffix: {
    type: Function
  },
  tag: {
    type: String,
    validator: function validator3(val) {
      if (!val)
        return true;
      return ["button", "a", "div"].includes(val);
    }
  },
  theme: {
    type: String,
    validator: function validator4(val) {
      if (!val)
        return true;
      return ["default", "primary", "danger", "warning", "success"].includes(val);
    }
  },
  type: {
    type: String,
    "default": "button",
    validator: function validator5(val) {
      if (!val)
        return true;
      return ["submit", "reset", "button"].includes(val);
    }
  },
  variant: {
    type: String,
    "default": "base",
    validator: function validator6(val) {
      if (!val)
        return true;
      return ["base", "outline", "dashed", "text"].includes(val);
    }
  },
  onClick: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var expand = EAnimationType.expand, ripple = EAnimationType.ripple, fade = EAnimationType.fade;
function useKeepAnimation() {
  var _useConfig = useConfig("animation"), globalConfig = _useConfig.globalConfig;
  var keepAnimation = function keepAnimation2(type) {
    var _animationConfig$excl, _animationConfig$incl;
    var animationConfig = globalConfig.value;
    return animationConfig && !((_animationConfig$excl = animationConfig.exclude) !== null && _animationConfig$excl !== void 0 && _animationConfig$excl.includes(type)) && ((_animationConfig$incl = animationConfig.include) === null || _animationConfig$incl === void 0 ? void 0 : _animationConfig$incl.includes(type));
  };
  return {
    keepExpand: keepAnimation(expand),
    keepRipple: keepAnimation(ripple),
    keepFade: keepAnimation(fade)
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function setStyle(el, styles) {
  var keys2 = Object.keys(styles);
  keys2.forEach(function(key2) {
    el.style[key2] = styles[key2];
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var period = 200;
var noneRippleBg = "rgba(0, 0, 0, 0)";
var defaultRippleColor = "rgba(0, 0, 0, 0.35)";
var getRippleColor = function getRippleColor2(el, fixedRippleColor) {
  var _el$dataset;
  if (fixedRippleColor) {
    return fixedRippleColor;
  }
  if (el !== null && el !== void 0 && (_el$dataset = el.dataset) !== null && _el$dataset !== void 0 && _el$dataset.ripple) {
    var rippleColor = el.dataset.ripple;
    return rippleColor;
  }
  var cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
  if (cssVariable) {
    return cssVariable;
  }
  return defaultRippleColor;
};
function useRipple(el, fixedRippleColor) {
  var rippleContainer = ref(null);
  var classPrefix2 = usePrefixClass();
  var _useKeepAnimation = useKeepAnimation(), keepRipple = _useKeepAnimation.keepRipple;
  var handleAddRipple = function handleAddRipple2(e) {
    var dom = el.value;
    var rippleColor = getRippleColor(dom, fixedRippleColor === null || fixedRippleColor === void 0 ? void 0 : fixedRippleColor.value);
    if (e.button !== 0 || !el || !keepRipple)
      return;
    if (dom.classList.contains("".concat(classPrefix2.value, "-is-active")) || dom.classList.contains("".concat(classPrefix2.value, "-is-disabled")) || dom.classList.contains("".concat(classPrefix2.value, "-is-checked")) || dom.classList.contains("".concat(classPrefix2.value, "-is-loading")))
      return;
    var elStyle = getComputedStyle(dom);
    var elBorder = parseInt(elStyle.borderWidth, 10);
    var border2 = elBorder > 0 ? elBorder : 0;
    var width = dom.offsetWidth;
    var height = dom.offsetHeight;
    if (rippleContainer.value.parentNode === null) {
      setStyle(rippleContainer.value, {
        position: "absolute",
        left: "".concat(0 - border2, "px"),
        top: "".concat(0 - border2, "px"),
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        borderRadius: elStyle.borderRadius,
        pointerEvents: "none",
        overflow: "hidden"
      });
      dom.appendChild(rippleContainer.value);
    }
    var ripple2 = document.createElement("div");
    setStyle(ripple2, {
      marginTop: "0",
      marginLeft: "0",
      right: "".concat(width, "px"),
      width: "".concat(width + 20, "px"),
      height: "100%",
      transition: "transform ".concat(period, "ms cubic-bezier(.38, 0, .24, 1), background ").concat(period * 2, "ms linear"),
      transform: "skewX(-8deg)",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      backgroundColor: rippleColor,
      opacity: "0.9"
    });
    var elMap = /* @__PURE__ */ new WeakMap();
    for (var n = dom.children.length, i = 0; i < n; ++i) {
      var child = dom.children[i];
      if (child.style.zIndex === "" && child !== rippleContainer.value) {
        child.style.zIndex = "1";
        elMap.set(child, true);
      }
    }
    var initPosition = dom.style.position ? dom.style.position : getComputedStyle(dom).position;
    if (initPosition === "" || initPosition === "static") {
      dom.style.position = "relative";
    }
    rippleContainer.value.insertBefore(ripple2, rippleContainer.value.firstChild);
    setTimeout(function() {
      ripple2.style.transform = "translateX(".concat(width, "px)");
    }, 0);
    var handleClearRipple = function handleClearRipple2() {
      ripple2.style.backgroundColor = noneRippleBg;
      if (!el.value)
        return;
      el.value.removeEventListener("pointerup", handleClearRipple2, false);
      el.value.removeEventListener("pointerleave", handleClearRipple2, false);
      setTimeout(function() {
        ripple2.remove();
        if (rippleContainer.value.children.length === 0)
          rippleContainer.value.remove();
      }, period * 2 + 100);
    };
    el.value.addEventListener("pointerup", handleClearRipple, false);
    el.value.addEventListener("pointerleave", handleClearRipple, false);
  };
  onMounted(function() {
    var dom = el === null || el === void 0 ? void 0 : el.value;
    if (!dom)
      return;
    rippleContainer.value = document.createElement("div");
    dom.addEventListener("pointerdown", handleAddRipple, false);
  });
  onUnmounted(function() {
    var _el$value;
    el === null || el === void 0 || (_el$value = el.value) === null || _el$value === void 0 ? void 0 : _el$value.removeEventListener("pointerdown", handleAddRipple, false);
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function handleSlots(instance, name, params) {
  var _instance$slots$camel, _instance$slots, _instance$slots$kebab, _instance$slots2;
  var finalParams = new Function("return " + h.toString())();
  if (params) {
    Object.assign(finalParams, params);
  }
  var node = (_instance$slots$camel = (_instance$slots = instance.slots)[camelCase_1(name)]) === null || _instance$slots$camel === void 0 ? void 0 : _instance$slots$camel.call(_instance$slots, finalParams);
  if (node && node.filter(function(t) {
    return t.type.toString() !== "Symbol(v-cmt)";
  }).length)
    return node;
  node = (_instance$slots$kebab = (_instance$slots2 = instance.slots)[kebabCase_1(name)]) === null || _instance$slots$kebab === void 0 ? void 0 : _instance$slots$kebab.call(_instance$slots2, finalParams);
  if (node && node.filter(function(t) {
    return t.type.toString() !== "Symbol(v-cmt)";
  }).length)
    return node;
  return null;
}
function isEmptyNode(node) {
  if ([void 0, null, ""].includes(node))
    return true;
  var innerNodes = node instanceof Array ? node : [node];
  var r = innerNodes.filter(function(node2) {
    var _node2$type;
    return (node2 === null || node2 === void 0 || (_node2$type = node2.type) === null || _node2$type === void 0 ? void 0 : _node2$type.toString()) !== "Symbol(Comment)";
  });
  return !r.length;
}
var useTNodeJSX = function useTNodeJSX2() {
  var instance = getCurrentInstance();
  return function(name, options) {
    var params = getParams(options);
    var defaultNode = getDefaultNode(options);
    var slotFirst = getSlotFirst(options);
    var propsNode;
    if (Object.keys(instance.props).includes(name)) {
      propsNode = instance.props[name];
    }
    if (propsNode === false)
      return;
    if (propsNode === true) {
      return handleSlots(instance, name, params) || defaultNode;
    }
    if (isFunction_1(propsNode))
      return propsNode(h, params);
    var isPropsEmpty = [void 0, params, ""].includes(propsNode);
    if ((isPropsEmpty || slotFirst) && (instance.slots[camelCase_1(name)] || instance.slots[kebabCase_1(name)])) {
      return handleSlots(instance, name, params);
    }
    return propsNode;
  };
};
var useTNodeDefault = function useTNodeDefault2() {
  var renderTNodeJSX3 = useTNodeJSX();
  return function(name, options) {
    var defaultNode = getDefaultNode(options);
    return renderTNodeJSX3(name, options) || defaultNode;
  };
};
var useContent = function useContent2() {
  var renderTNodeJSX3 = useTNodeJSX();
  return function(name1, name2, options) {
    var params = getParams(options);
    var defaultNode = getDefaultNode(options);
    var toParams = params ? {
      params
    } : void 0;
    var node1 = renderTNodeJSX3(name1, toParams);
    var node2 = renderTNodeJSX3(name2, toParams);
    var res = isEmptyNode(node1) ? node2 : node1;
    return isEmptyNode(res) ? defaultNode : res;
  };
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var boolTag = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
}
var isBoolean_1 = isBoolean;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useDisabled(context) {
  var currentInstance2 = getCurrentInstance();
  var componentDisabled = computed(function() {
    return currentInstance2.props.disabled;
  });
  var formDisabled = inject("formDisabled", /* @__PURE__ */ Object.create(null));
  return computed(function() {
    var _formDisabled$disable;
    if (isBoolean_1(context === null || context === void 0 ? void 0 : context.beforeDisabled.value))
      return context.beforeDisabled.value;
    if (isBoolean_1(componentDisabled.value))
      return componentDisabled.value;
    if (isBoolean_1(context === null || context === void 0 ? void 0 : context.afterDisabled.value))
      return context.afterDisabled.value;
    if (isBoolean_1((_formDisabled$disable = formDisabled.disabled) === null || _formDisabled$disable === void 0 ? void 0 : _formDisabled$disable.value))
      return formDisabled.disabled.value;
    return false;
  });
}
const index$f = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$t(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$t(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$t(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$t(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var TButton = defineComponent({
  name: "TButton",
  props: props$i,
  setup: function setup3(props2, _ref) {
    var attrs = _ref.attrs, slots = _ref.slots;
    var renderTNodeJSX3 = useTNodeJSX();
    var renderContent3 = useContent();
    var COMPONENT_NAME = usePrefixClass("button");
    var _useCommonClassName = useCommonClassName$1(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
    var btnRef = ref();
    useRipple(btnRef);
    var isDisabled = useDisabled();
    var mergeTheme = computed(function() {
      var theme = props2.theme, variant = props2.variant;
      if (theme)
        return theme;
      if (variant === "base")
        return "primary";
      return "default";
    });
    var buttonClass = computed(function() {
      var _ref2;
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--variant-").concat(props2.variant), "".concat(COMPONENT_NAME.value, "--theme-").concat(mergeTheme.value), (_ref2 = {}, _defineProperty$2(_ref2, SIZE.value[props2.size], props2.size !== "medium"), _defineProperty$2(_ref2, STATUS.value.disabled, isDisabled.value), _defineProperty$2(_ref2, STATUS.value.loading, props2.loading), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--shape-").concat(props2.shape), props2.shape !== "rectangle"), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--ghost"), props2.ghost), _defineProperty$2(_ref2, SIZE.value.block, props2.block), _ref2)];
    });
    return function() {
      var buttonContent = renderContent3("default", "content");
      var icon = props2.loading ? createVNode(Loading, {
        "inheritColor": true
      }, null) : renderTNodeJSX3("icon");
      var iconOnly = icon && !buttonContent;
      var suffix2 = props2.suffix || slots.suffix ? createVNode("span", {
        "className": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [renderTNodeJSX3("suffix")]) : null;
      buttonContent = buttonContent ? createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__text")
      }, [buttonContent]) : "";
      if (icon) {
        buttonContent = [icon, buttonContent];
      }
      if (suffix2) {
        buttonContent = [buttonContent].concat(suffix2);
      }
      var renderTag = function renderTag2() {
        if (!props2.tag && props2.href)
          return "a";
        return props2.tag || "button";
      };
      var buttonAttrs = {
        "class": [].concat(_toConsumableArray(buttonClass.value), [_defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--icon-only"), iconOnly)]),
        type: props2.type,
        disabled: isDisabled.value,
        href: props2.href
      };
      return h(renderTag(), _objectSpread$t(_objectSpread$t(_objectSpread$t({
        ref: btnRef
      }, attrs), buttonAttrs), {}, {
        onClick: props2.onClick
      }), [buttonContent]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Button = withInstall(TButton);
function _defineProperty(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key2] = value;
  }
  return obj;
}
function ownKeys$s(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$s(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$s(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$s(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function camel2Kebab(camelString) {
  var covertArr = ["fillOpacity", "fillRule", "clipRule"];
  if (covertArr.includes(camelString)) {
    return camelString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }
  return camelString;
}
function renderFn(node, props2) {
  var kebabAttrs = Object.keys(node.attrs).reduce((result, key2) => {
    result[camel2Kebab(key2)] = node.attrs[key2];
    return result;
  }, {});
  return h(node.tag, _objectSpread$s(_objectSpread$s({}, kebabAttrs), props2), (node.children || []).map((child) => renderFn(child, {})));
}
var DEFAULT_CLASS_PREFIX = "t";
var DEFAULT_LOCALE = "zh-CN";
var ConfigContext = {
  classPrefix: DEFAULT_CLASS_PREFIX,
  locale: DEFAULT_LOCALE
};
function useCommonClassName() {
  var {
    classPrefix: classPrefix2
  } = ConfigContext;
  return {
    SIZE: {
      default: "",
      xs: "".concat(classPrefix2, "-size-xs"),
      small: "".concat(classPrefix2, "-size-s"),
      medium: "".concat(classPrefix2, "-size-m"),
      large: "".concat(classPrefix2, "-size-l"),
      xl: "".concat(classPrefix2, "-size-xl"),
      block: "".concat(classPrefix2, "-size-full-width")
    },
    STATUS: {
      loading: "".concat(classPrefix2, "-is-loading"),
      disabled: "".concat(classPrefix2, "-is-disabled"),
      focused: "".concat(classPrefix2, "-is-focused"),
      success: "".concat(classPrefix2, "-is-success"),
      error: "".concat(classPrefix2, "-is-error"),
      warning: "".concat(classPrefix2, "-is-warning"),
      selected: "".concat(classPrefix2, "-is-selected"),
      active: "".concat(classPrefix2, "-is-active"),
      checked: "".concat(classPrefix2, "-is-checked"),
      current: "".concat(classPrefix2, "-is-current"),
      hidden: "".concat(classPrefix2, "-is-hidden"),
      visible: "".concat(classPrefix2, "-is-visible"),
      expanded: "".concat(classPrefix2, "-is-expanded"),
      indeterminate: "".concat(classPrefix2, "-is-indeterminate")
    }
  };
}
function useSizeProps(size2) {
  var COMMON_SIZE_CLASS_NAMES = useCommonClassName().SIZE;
  var className = computed(() => {
    if (size2.value in COMMON_SIZE_CLASS_NAMES) {
      return COMMON_SIZE_CLASS_NAMES[size2.value];
    }
    return "";
  });
  var style = computed(() => {
    if (size2.value === void 0 || size2.value in COMMON_SIZE_CLASS_NAMES) {
      return {};
    }
    return {
      fontSize: size2.value
    };
  });
  return {
    style,
    className
  };
}
const index$e = "";
function ownKeys$r(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$r(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$r(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$r(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$6 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M7.35 8.65v3.85h1.3V8.65h3.85v-1.3H8.65V3.5h-1.3v3.85H3.5v1.3h3.85z",
      "fillOpacity": 0.9
    }
  }]
};
var add = defineComponent({
  name: "AddIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-add", className.value]);
    var finalStyle = computed(() => _objectSpread$r(_objectSpread$r({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
          e
        });
      }
    }));
    return () => renderFn(element$6, finalProps.value);
  }
});
function ownKeys$q(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$q(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$q(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$q(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$5 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M14 3H5v1h9V3zM3.5 3H2v1h1.5V3zM5 7.5h9v1H5v-1zM2 7.5h1.5v1H2v-1zM5 12h9v1H5v-1zM2 12h1.5v1H2v-1z",
      "fillOpacity": 0.9
    }
  }]
};
var bulletpoint = defineComponent({
  name: "BulletpointIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-bulletpoint", className.value]);
    var finalStyle = computed(() => _objectSpread$q(_objectSpread$q({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
          e
        });
      }
    }));
    return () => renderFn(element$5, finalProps.value);
  }
});
function ownKeys$p(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$p(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$p(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$p(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$4 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M9.54 3.54l.92.92L6.92 8l3.54 3.54-.92.92L5.08 8l4.46-4.46z",
      "fillOpacity": 0.9
    }
  }]
};
var chevronLeft = defineComponent({
  name: "ChevronLeftIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-chevron-left", className.value]);
    var finalStyle = computed(() => _objectSpread$p(_objectSpread$p({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
          e
        });
      }
    }));
    return () => renderFn(element$4, finalProps.value);
  }
});
function ownKeys$o(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$o(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$o(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$o(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$3 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M6.46 12.46l-.92-.92L9.08 8 5.54 4.46l.92-.92L10.92 8l-4.46 4.46z",
      "fillOpacity": 0.9
    }
  }]
};
var chevronRight = defineComponent({
  name: "ChevronRightIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-chevron-right", className.value]);
    var finalStyle = computed(() => _objectSpread$o(_objectSpread$o({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
          e
        });
      }
    }));
    return () => renderFn(element$3, finalProps.value);
  }
});
function ownKeys$n(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$n(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$n(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$n(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$2 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8 8.92L11.08 12l.92-.92L8.92 8 12 4.92 11.08 4 8 7.08 4.92 4 4 4.92 7.08 8 4 11.08l.92.92L8 8.92z",
      "fillOpacity": 0.9
    }
  }]
};
var close = defineComponent({
  name: "CloseIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-close", className.value]);
    var finalStyle = computed(() => _objectSpread$n(_objectSpread$n({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
          e
        });
      }
    }));
    return () => renderFn(element$2, finalProps.value);
  }
});
function ownKeys$m(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$m(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$m(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$m(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$1 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M2 13V8h1v2.3l3-3 5.7 5.7H13V3H8V2h5a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1zm4-4.3l-3 3V13h7.3L6 8.7z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M12 6a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 10-2 0 1 1 0 002 0zM6.28 5.56l-.7.7-1.42-1.4-1.41 1.4-.71-.7 1.41-1.41-1.41-1.42.7-.7 1.42 1.4 1.41-1.4.71.7-1.41 1.42 1.41 1.4z",
      "fillOpacity": 0.9
    }
  }]
};
var imageError = defineComponent({
  name: "ImageErrorIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-image-error", className.value]);
    var finalStyle = computed(() => _objectSpread$m(_objectSpread$m({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
          e
        });
      }
    }));
    return () => renderFn(element$1, finalProps.value);
  }
});
function ownKeys$l(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$l(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$l(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$l(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M10 8a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z",
      "fillOpacity": 0.9,
      "fillRule": "evenodd",
      "clipRule": "evenodd"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M2 13a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v10zm1-1.3l3-3 4.3 4.3H3v-1.3zm0-1.4V3h10v10h-1.3L6 7.3l-3 3z",
      "fillOpacity": 0.9
    }
  }]
};
var image = defineComponent({
  name: "ImageIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-image", className.value]);
    var finalStyle = computed(() => _objectSpread$l(_objectSpread$l({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
          e
        });
      }
    }));
    return () => renderFn(element, finalProps.value);
  }
});
var isServer = typeof window === "undefined";
function checkScriptAndLoad(url, className) {
  if (isServer) {
    return;
  }
  if (!document || !url || typeof url !== "string")
    return;
  if (document.querySelectorAll(".".concat(className, '[src="').concat(url, '"]')).length > 0) {
    return;
  }
  var svg = document.createElement("script");
  svg.setAttribute("class", className);
  svg.setAttribute("src", url);
  document.body.appendChild(svg);
}
var props$h = {
  name: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: void 0
  },
  url: {
    type: [String, Array],
    default: void 0
  },
  loadDefaultIcons: {
    type: Boolean,
    default: true
  },
  onClick: Function
};
function ownKeys$k(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$k(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$k(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$k(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var {
  classPrefix
} = ConfigContext;
var CDN_ICONFONT_URL = "https://tdesign.gtimg.com/icon/0.1.4/fonts/index.js";
var _Icon = defineComponent({
  name: "Icon",
  props: props$h,
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var name = computed(() => props2.name || "");
    var {
      className: sizeClassName,
      style: sizeStyle
    } = useSizeProps(propsSize);
    var finalUrl = computed(() => {
      var url = [];
      url = props2.url instanceof Array ? props2.url.concat() : [props2.url];
      if (props2.loadDefaultIcons)
        url.push(CDN_ICONFONT_URL);
      return url;
    });
    var classNames = computed(() => ["".concat(classPrefix, "-icon"), "".concat(classPrefix, "-icon-").concat(name.value), sizeClassName.value]);
    var finalStyle = computed(() => _objectSpread$k(_objectSpread$k({}, sizeStyle.value), attrs.style));
    onMounted(() => {
      Array.from(new Set(finalUrl.value)).forEach((url) => {
        checkScriptAndLoad(url, "".concat(classPrefix, "-svg-js-stylesheet--unique-class"));
      });
    });
    var finalProps = computed(() => ({
      class: classNames.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props2$onClick;
        return (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 ? void 0 : _props2$onClick.call(props2, {
          e
        });
      }
    }));
    return () => h("svg", finalProps.value, h("use", {
      href: props2.url ? "#".concat(name.value) : "#t-icon-".concat(name.value)
    }));
  }
});
var Icon$1 = _Icon;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Icon = withInstall(Icon$1, "TIcon");
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$g = {
  align: {
    type: String,
    "default": "top",
    validator: function validator7(val) {
      if (!val)
        return true;
      return ["start", "end", "center", "stretch", "baseline", "top", "middle", "bottom"].includes(val);
    }
  },
  gutter: {
    type: [Number, Object, Array],
    "default": 0
  },
  justify: {
    type: String,
    "default": "start",
    validator: function validator8(val) {
      if (!val)
        return true;
      return ["start", "end", "center", "space-around", "space-between"].includes(val);
    }
  },
  tag: {
    type: String,
    "default": "div"
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var calcSize = function calcSize2(width) {
  var size2 = "xs";
  if (width < 768) {
    size2 = "xs";
  } else if (width >= 768 && width < 992) {
    size2 = "sm";
  } else if (width >= 992 && width < 1200) {
    size2 = "md";
  } else if (width >= 1200 && width < 1400) {
    size2 = "lg";
  } else if (width >= 1400 && width < 1880) {
    size2 = "xl";
  } else {
    size2 = "xxl";
  }
  return size2;
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useListener(type, listener) {
  onMounted(function() {
    window.addEventListener(type, listener);
  });
  onBeforeUnmount(function() {
    window.removeEventListener(type, listener);
  });
}
function useResize(listener, observer) {
  useListener("resize", listener);
  var resizeObserver = null;
  onMounted(function() {
    if (!window.ResizeObserver || !observer)
      return;
    resizeObserver = new window.ResizeObserver(listener);
    resizeObserver.observe(observer);
  });
  onBeforeUnmount(function() {
    var _resizeObserver;
    (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 ? void 0 : _resizeObserver.disconnect();
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$j(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$j(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$j(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$j(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function useRowSize() {
  var size2 = ref(calcSize(isServer$1 ? 0 : window.innerWidth));
  var updateSize = function updateSize2() {
    size2.value = calcSize(isServer$1 ? 0 : window.innerWidth);
  };
  useListener("resize", updateSize);
  return size2;
}
function getRowClasses(name, props2) {
  var _ref;
  var justify = props2.justify, align = props2.align;
  return [name, (_ref = {}, _defineProperty$2(_ref, "".concat(name, "--").concat(justify), justify), _defineProperty$2(_ref, "".concat(name, "--align-").concat(align), align), _ref)];
}
function calcRowStyle(gutter, currentSize) {
  var rowStyle = {};
  var getMarginStyle = function getMarginStyle2(gutter2) {
    return Object.assign(rowStyle, {
      marginLeft: "".concat(gutter2 / -2, "px"),
      marginRight: "".concat(gutter2 / -2, "px")
    });
  };
  var getRowGapStyle = function getRowGapStyle2(gutter2) {
    return Object.assign(rowStyle, {
      rowGap: "".concat(gutter2, "px")
    });
  };
  var strategyMap = {
    isNumber: function isNumber2(gutter2) {
      if (isNumber_1(gutter2)) {
        getMarginStyle(gutter2);
      }
    },
    isArray: function isArray2(gutter2) {
      if (isArray_1(gutter2) && gutter2.length) {
        strategyMap.isNumber(gutter2[0]);
        if (isNumber_1(gutter2[1])) {
          getRowGapStyle(gutter2[1]);
        }
        if (isObject_1(gutter2[0]) && !isUndefined_1(gutter2[0][currentSize])) {
          getMarginStyle(gutter2[0][currentSize]);
        }
        if (isObject_1(gutter2[1]) && !isUndefined_1(gutter2[1][currentSize])) {
          getRowGapStyle(gutter2[1][currentSize]);
        }
      }
    },
    isObject: function isObject2(gutter2) {
      if (isObject_1(gutter2) && gutter2[currentSize]) {
        if (isArray_1(gutter2) && gutter2.length) {
          getMarginStyle(gutter2[currentSize][0]);
          getRowGapStyle(gutter2[currentSize][1]);
        } else {
          getMarginStyle(gutter2[currentSize]);
        }
      }
    }
  };
  Object.keys(strategyMap).forEach(function(item) {
    strategyMap[item](gutter);
  });
  return rowStyle;
}
function parseFlex(flex) {
  if (isNumber_1(flex)) {
    return "".concat(flex, " ").concat(flex, " 0");
  }
  if (/^\d+(\.\d+)?(px|r?em|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }
  return flex;
}
function calcColPadding(gutter, currentSize) {
  var paddingObj = {};
  var getPaddingStyle = function getPaddingStyle2(gutter2) {
    return Object.assign(paddingObj, {
      paddingLeft: "".concat(gutter2 / 2, "px"),
      paddingRight: "".concat(gutter2 / 2, "px")
    });
  };
  var strategyMap = {
    isNumber: function isNumber2(gutter2) {
      if (isNumber_1(gutter2)) {
        getPaddingStyle(gutter2);
      }
    },
    isArray: function isArray2(gutter2) {
      if (isArray_1(gutter2) && gutter2.length) {
        if (isNumber_1(gutter2[0])) {
          getPaddingStyle(gutter2[0]);
        }
        if (isObject_1(gutter2[0]) && gutter2[0][currentSize]) {
          getPaddingStyle(gutter2[0][currentSize]);
        }
      }
    },
    isObject: function isObject2(gutter2) {
      if (isObject_1(gutter2) && gutter2[currentSize]) {
        getPaddingStyle(gutter2[currentSize]);
      }
    }
  };
  Object.keys(strategyMap).forEach(function(item) {
    strategyMap[item](gutter);
  });
  return paddingObj;
}
function getColClasses(name, props2) {
  var _objectSpread3;
  var span = props2.span, order2 = props2.order, offset2 = props2.offset, push = props2.push, pull = props2.pull;
  var allSizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
  var ColSizeClasses = allSizes.reduce(function(acc, currSize) {
    var _objectSpread2;
    var sizeProp = props2[currSize];
    var sizeObject = {};
    if (isNumber_1(sizeProp)) {
      sizeObject.span = sizeProp;
    } else if (isObject_1(sizeProp)) {
      sizeObject = sizeProp || {};
    }
    return _objectSpread$j(_objectSpread$j({}, acc), {}, (_objectSpread2 = {}, _defineProperty$2(_objectSpread2, "".concat(name, "-").concat(currSize, "-").concat(sizeObject.span), !isUndefined_1(sizeObject.span)), _defineProperty$2(_objectSpread2, "".concat(name, "-").concat(currSize, "-order-").concat(sizeObject.order), parseInt(sizeObject.order, 10) >= 0), _defineProperty$2(_objectSpread2, "".concat(name, "-").concat(currSize, "-offset-").concat(sizeObject.offset), parseInt(sizeObject.offset, 10) >= 0), _defineProperty$2(_objectSpread2, "".concat(name, "-").concat(currSize, "-push-").concat(sizeObject.push), parseInt(sizeObject.push, 10) >= 0), _defineProperty$2(_objectSpread2, "".concat(name, "-").concat(currSize, "-pull-").concat(sizeObject.pull), parseInt(sizeObject.pull, 10) >= 0), _objectSpread2));
  }, {});
  return _objectSpread$j((_objectSpread3 = {}, _defineProperty$2(_objectSpread3, "".concat(name), true), _defineProperty$2(_objectSpread3, "".concat(name, "-").concat(span), !isUndefined_1(span)), _defineProperty$2(_objectSpread3, "".concat(name, "-order-").concat(order2), order2), _defineProperty$2(_objectSpread3, "".concat(name, "-offset-").concat(offset2), offset2), _defineProperty$2(_objectSpread3, "".concat(name, "-push-").concat(push), push), _defineProperty$2(_objectSpread3, "".concat(name, "-pull-").concat(pull), pull), _objectSpread3), ColSizeClasses);
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$i(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$i(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$i(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$i(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$7(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _Row = defineComponent({
  name: "TRow",
  props: _objectSpread$i({}, props$g),
  setup: function setup4(props2) {
    var _toRefs = toRefs(props2), gutter = _toRefs.gutter;
    var renderTNodeJSX3 = useTNodeJSX();
    provide("rowContext", reactive({
      gutter
    }));
    var size2 = useRowSize();
    var COMPONENT_NAME = usePrefixClass("row");
    var rowClasses = computed(function() {
      return getRowClasses(COMPONENT_NAME.value, props2);
    });
    var rowStyle = computed(function() {
      return calcRowStyle(props2.gutter, size2.value);
    });
    return function() {
      var _slot;
      var TAG = props2.tag;
      return createVNode(TAG, {
        "class": rowClasses.value,
        "style": rowStyle.value
      }, _isSlot$7(_slot = renderTNodeJSX3("default")) ? _slot : {
        "default": function _default3() {
          return [_slot];
        }
      });
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$f = {
  flex: {
    type: [String, Number]
  },
  lg: {
    type: [Number, Object]
  },
  md: {
    type: [Number, Object]
  },
  offset: {
    type: Number,
    "default": 0
  },
  order: {
    type: Number,
    "default": 0
  },
  pull: {
    type: Number,
    "default": 0
  },
  push: {
    type: Number,
    "default": 0
  },
  sm: {
    type: [Number, Object]
  },
  span: {
    type: Number
  },
  tag: {
    type: String,
    "default": "div"
  },
  xl: {
    type: [Number, Object]
  },
  xs: {
    type: [Number, Object]
  },
  xxl: {
    type: [Number, Object]
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$h(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$h(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$h(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$h(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$6(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _Col = defineComponent({
  name: "TCol",
  inject: ["rowContext"],
  props: _objectSpread$h({}, props$f),
  setup: function setup5(props2) {
    var COMPONENT_NAME = usePrefixClass("col");
    var renderTNodeJSX3 = useTNodeJSX();
    var rowContext = inject("rowContext", /* @__PURE__ */ Object.create(null));
    var size2 = useRowSize();
    var colClasses = computed(function() {
      return getColClasses(COMPONENT_NAME.value, props2);
    });
    var colStyle = computed(function() {
      var colStyle2 = {};
      var flex = props2.flex;
      flex && (colStyle2.flex = parseFlex(flex));
      if (rowContext) {
        var rowGutter = rowContext.gutter;
        Object.assign(colStyle2, calcColPadding(rowGutter, size2.value));
      }
      return colStyle2;
    });
    return function() {
      var _slot;
      var TAG = props2.tag;
      return createVNode(TAG, {
        "class": colClasses.value,
        "style": colStyle.value
      }, _isSlot$6(_slot = renderTNodeJSX3("default")) ? _slot : {
        "default": function _default3() {
          return [_slot];
        }
      });
    };
  }
});
const index$d = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Row = withInstall(_Row);
var Col = withInstall(_Col);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$e = {
  align: {
    type: String,
    "default": "center",
    validator: function validator9(val) {
      if (!val)
        return true;
      return ["left", "right", "center"].includes(val);
    }
  },
  content: {
    type: [String, Function]
  },
  dashed: Boolean,
  "default": {
    type: [String, Function]
  },
  layout: {
    type: String,
    "default": "horizontal",
    validator: function validator10(val) {
      if (!val)
        return true;
      return ["horizontal", "vertical"].includes(val);
    }
  },
  theme: {
    type: String,
    validator: function validator11(val) {
      if (!val)
        return true;
      return ["horizontal", "vertical"].includes(val);
    }
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$g(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$g(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$g(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Divider = defineComponent({
  name: "TDivider",
  props: _objectSpread$g({}, props$e),
  setup: function setup6(props2) {
    var COMPONENT_NAME = usePrefixClass("divider");
    var renderContent3 = useContent();
    return function() {
      var _ref;
      var layout = props2.layout, dashed = props2.dashed, align = props2.align;
      var children = renderContent3("default", "content");
      var dividerClassNames = ["".concat(COMPONENT_NAME.value), ["".concat(COMPONENT_NAME.value, "--").concat(layout)], (_ref = {}, _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--dashed"), !!dashed), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--with-text"), !!children), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--with-text-").concat(align), !!children), _ref)];
      return createVNode("div", {
        "class": dividerClassNames
      }, [children && createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__inner-text")
      }, [children])]);
    };
  }
});
const index$c = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Divider = withInstall(_Divider);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$d = {
  align: {
    type: String,
    validator: function validator12(val) {
      if (!val)
        return true;
      return ["start", "end", "center", "baseline"].includes(val);
    }
  },
  breakLine: Boolean,
  direction: {
    type: String,
    "default": "horizontal",
    validator: function validator13(val) {
      if (!val)
        return true;
      return ["vertical", "horizontal"].includes(val);
    }
  },
  separator: {
    type: [String, Function]
  },
  size: {
    type: [String, Number, Array],
    "default": "medium"
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useChildComponentSlots() {
  var instance = getCurrentInstance();
  return function(childComponentName, slots) {
    var _slots, _slots$default;
    if (!slots) {
      slots = instance.slots;
    }
    var content = ((_slots = slots) === null || _slots === void 0 || (_slots$default = _slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(_slots)) || [];
    var childList = [];
    var getChildren = function getChildren2(content2) {
      if (!isArray_1(content2))
        return;
      content2.forEach(function(item) {
        if (item.children && isArray_1(item.children)) {
          if (item.type !== Fragment)
            return;
          getChildren2(item.children);
        } else {
          childList.push(item);
        }
      });
      return childList;
    };
    return getChildren(content).filter(function(item) {
      var _item$type$name;
      return (_item$type$name = item.type.name) === null || _item$type$name === void 0 ? void 0 : _item$type$name.endsWith(childComponentName);
    });
  };
}
function useChildSlots() {
  var instance = getCurrentInstance();
  return function() {
    var _slots$default2;
    var slots = instance.slots;
    var content = (slots === null || slots === void 0 || (_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)) || [];
    return content.filter(function(item) {
      if (_typeof(item.type) === "symbol" && !item.children) {
        return false;
      }
      return item.type !== Comment;
    }).map(function(item) {
      if (item.children && isArray_1(item.children) && item.type === Fragment)
        return item.children;
      return item;
    }).flat();
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$f(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$f(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$f(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Space = defineComponent({
  name: "TSpace",
  props: _objectSpread$f({}, props$d),
  setup: function setup7(props2) {
    var COMPONENT_NAME = usePrefixClass("space");
    var renderTNodeJSX3 = useTNodeJSX();
    var getChildSlots = useChildSlots();
    var renderStyle = computed(function() {
      var sizeMap = {
        small: "8px",
        medium: "16px",
        large: "24px"
      };
      var renderGap = "";
      if (isArray_1(props2.size)) {
        renderGap = props2.size.map(function(s) {
          if (isNumber_1(s))
            return "".concat(s, "px");
          if (isString_1(s))
            return sizeMap[s] || s;
          return s;
        }).join(" ");
      } else if (isString_1(props2.size)) {
        renderGap = sizeMap[props2.size] || props2.size;
      } else if (isNumber_1(props2.size)) {
        renderGap = "".concat(props2.size, "px");
      }
      return _objectSpread$f({
        gap: renderGap
      }, props2.breakLine ? {
        "flex-wrap": "wrap"
      } : {});
    });
    function renderChildren() {
      var children = getChildSlots();
      var separatorContent = renderTNodeJSX3("separator");
      return children.map(function(child, index2) {
        var showSeparator = index2 + 1 !== children.length && separatorContent;
        return createVNode(Fragment, null, [createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-item")
        }, [child]), showSeparator && createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-item-separator")
        }, [separatorContent])]);
      });
    }
    return function() {
      var _ref;
      var spaceClassNames = ["".concat(COMPONENT_NAME.value), (_ref = {}, _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "-align-").concat(props2.align), props2.align), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "-").concat(props2.direction), props2.direction), _ref)];
      return createVNode("div", {
        "class": spaceClassNames,
        "style": renderStyle.value
      }, [renderChildren()]);
    };
  }
});
const index$b = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Space = withInstall(_Space);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useGlobalIcon(tdIcon) {
  var _useConfig = useConfig("icon"), globalConfig = _useConfig.globalConfig;
  var resultIcon = {};
  Object.keys(tdIcon).forEach(function(key2) {
    var _globalConfig$value;
    resultIcon[key2] = ((_globalConfig$value = globalConfig.value) === null || _globalConfig$value === void 0 ? void 0 : _globalConfig$value[key2]) || tdIcon[key2];
  });
  return resultIcon;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element2) {
  return element2 ? (element2.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element2 = state.elements[name];
    if (!isHTMLElement(element2) || !getNodeName(element2)) {
      return;
    }
    Object.assign(element2.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element2.removeAttribute(name2);
      } else {
        element2.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element2 = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element2) || !getNodeName(element2)) {
        return;
      }
      Object.assign(element2.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element2.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element2.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element2)) {
    scaleX = element2.offsetWidth > 0 ? round(clientRect.width) / element2.offsetWidth || 1 : 1;
    scaleY = element2.offsetHeight > 0 ? round(clientRect.height) / element2.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element2) ? getWindow(element2) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element2) {
  var clientRect = getBoundingClientRect(element2);
  var width = element2.offsetWidth;
  var height = element2.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element2.offsetLeft,
    y: element2.offsetTop,
    width,
    height
  };
}
function contains(parent2, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent2.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent2.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function isTableElement(element2) {
  return ["table", "td", "th"].indexOf(getNodeName(element2)) >= 0;
}
function getDocumentElement(element2) {
  return ((isElement(element2) ? element2.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element2.document
  )) || window.document).documentElement;
}
function getParentNode(element2) {
  if (getNodeName(element2) === "html") {
    return element2;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element2.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element2.parentNode || // DOM Element detected
    (isShadowRoot(element2) ? element2.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element2)
  );
}
function getTrueOffsetParent(element2) {
  if (!isHTMLElement(element2) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  return element2.offsetParent;
}
function getContainingBlock(element2) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element2)) {
    var elementCss = getComputedStyle$1(element2);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element2);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element2) {
  var window2 = getWindow(element2);
  var offsetParent = getTrueOffsetParent(element2);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element2) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key2) {
    hashMap[key2] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element2) {
  return getBoundingClientRect(getDocumentElement(element2)).left + getWindowScroll(element2).scrollLeft;
}
function getViewportRect(element2, strategy) {
  var win = getWindow(element2);
  var html = getDocumentElement(element2);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element2),
    y
  };
}
function getDocumentRect(element2) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element2);
  var winScroll = getWindowScroll(element2);
  var body = (_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element2);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element2) {
  var _getComputedStyle = getComputedStyle$1(element2), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element2, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element2);
  var isBody = scrollParent === ((_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element2, strategy) {
  var rect = getBoundingClientRect(element2, false, strategy === "fixed");
  rect.top = rect.top + element2.clientTop;
  rect.left = rect.left + element2.clientLeft;
  rect.bottom = rect.top + element2.clientHeight;
  rect.right = rect.left + element2.clientWidth;
  rect.width = element2.clientWidth;
  rect.height = element2.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element2, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element2, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element2)));
}
function getClippingParents(element2) {
  var clippingParents2 = listScrollParents(getParentNode(element2));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element2).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element2) ? getOffsetParent(element2) : element2;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element2, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element2) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element2, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element2, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element2 = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element2.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element2.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element2.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element2.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element2[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element2[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element2 = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element2) ? element2 : element2.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key2) {
      var multiply = [right, bottom].indexOf(key2) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key2) >= 0 ? "y" : "x";
      overflowOffsets[key2] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element2) {
  return {
    scrollLeft: element2.scrollLeft,
    scrollTop: element2.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element2) {
  var rect = element2.getBoundingClientRect();
  var scaleX = round(rect.width) / element2.offsetWidth || 1;
  var scaleY = round(rect.height) / element2.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce$1(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve2) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve2(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key2) {
    return merged[key2];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element2) {
    return !(element2 && typeof element2.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function() {
        return new Promise(function(resolve2) {
          instance.forceUpdate();
          resolve2(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var baseTrim = _baseTrim, isObject$1 = isObject_1, isSymbol$2 = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$2(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var root = _root;
var now$1 = function now() {
  return root.Date.now();
};
var now_1 = now$1;
var isObject = isObject_1, now2 = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now2();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now2());
  }
  function debounced() {
    var time = now2(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useDefaultValue(value, defaultValue, onChange, propsName) {
  var _getCurrentInstance = getCurrentInstance(), emit2 = _getCurrentInstance.emit, vnode = _getCurrentInstance.vnode;
  var internalValue = ref();
  var vProps = vnode.props || {};
  var isVMP = Object.prototype.hasOwnProperty.call(vProps, propsName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase_1(propsName));
  if (isVMP) {
    return [value, function(newValue) {
      emit2("update:".concat(propsName), newValue);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  internalValue.value = defaultValue;
  return [internalValue, function(newValue) {
    internalValue.value = newValue;
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, [newValue].concat(args));
  }];
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var TDisplayNoneElementRefresh = "t-display-none-element-refresh";
function useDestroyOnClose() {
  var refresh = ref(0);
  provide(TDisplayNoneElementRefresh, refresh);
  onUpdated(function() {
    refresh.value += 1;
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useVModel(value, modelValue, defaultValue, onChange) {
  var propName = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "value";
  var _getCurrentInstance = getCurrentInstance(), emit2 = _getCurrentInstance.emit, vnode = _getCurrentInstance.vnode;
  var internalValue = ref();
  var vProps = vnode.props || {};
  var isVM = Object.prototype.hasOwnProperty.call(vProps, "modelValue") || Object.prototype.hasOwnProperty.call(vProps, "model-value");
  var isVMP = Object.prototype.hasOwnProperty.call(vProps, propName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase_1(propName));
  if (isVM) {
    return [modelValue, function(newValue) {
      emit2("update:modelValue", newValue);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  if (isVMP) {
    return [value, function(newValue) {
      emit2("update:".concat(propName), newValue);
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  internalValue.value = defaultValue;
  return [internalValue, function(newValue) {
    internalValue.value = newValue;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    onChange === null || onChange === void 0 ? void 0 : onChange.apply(void 0, [newValue].concat(args));
  }];
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var logSet = /* @__PURE__ */ new Set();
var log = {
  warn: function warn2(componentName, message) {
    console.warn("TDesign ".concat(componentName, " Warn: ").concat(message));
  },
  warnOnce: function warnOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Warn: ").concat(message);
    if (logSet.has(msgContent))
      return;
    logSet.add(msgContent);
    console.warn(msgContent);
  },
  error: function error(componentName, message) {
    console.error("TDesign ".concat(componentName, " Error: ").concat(message));
  },
  errorOnce: function errorOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Error: ").concat(message);
    if (logSet.has(msgContent))
      return;
    logSet.add(msgContent);
    console.error(msgContent);
  },
  info: function info(componentName, message) {
    console.info("TDesign ".concat(componentName, " Info: ").concat(message));
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function getFileUrlByFileRaw(fileRaw) {
  return new Promise(function(resolve2) {
    if (!fileRaw) {
      resolve2("");
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(fileRaw);
    reader.onload = function(event) {
      var _event$target;
      resolve2((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result);
    };
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useImagePreviewUrl(imgUrl) {
  var previewUrl = ref("");
  watch([imgUrl], function(_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1), imgUrl2 = _ref3[0];
    var _ref4 = _slicedToArray(_ref2, 1), preImgUrl = _ref4[0];
    if (preImgUrl === imgUrl2)
      return;
    if (typeof imgUrl2 === "string") {
      previewUrl.value = imgUrl2;
      return;
    }
    getFileUrlByFileRaw(imgUrl2).then(function(url) {
      previewUrl.value = url;
    });
  }, {
    immediate: true
  });
  return {
    previewUrl
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var popupProps = {
  attach: {
    type: [String, Function],
    "default": "body"
  },
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  delay: {
    type: [Number, Array]
  },
  destroyOnClose: Boolean,
  disabled: Boolean,
  hideEmptyPopup: Boolean,
  overlayClassName: {
    type: [String, Object, Array]
  },
  overlayInnerClassName: {
    type: [String, Object, Array]
  },
  overlayInnerStyle: {
    type: [Boolean, Object, Function]
  },
  overlayStyle: {
    type: [Boolean, Object, Function]
  },
  placement: {
    type: String,
    "default": "top"
  },
  popperOptions: {
    type: Object
  },
  showArrow: Boolean,
  trigger: {
    type: String,
    "default": "hover",
    validator: function validator14(val) {
      if (!val)
        return true;
      return ["hover", "click", "focus", "mousedown", "context-menu"].includes(val);
    }
  },
  triggerElement: {
    type: [String, Function]
  },
  visible: {
    type: Boolean,
    "default": void 0
  },
  modelValue: {
    type: Boolean,
    "default": void 0
  },
  defaultVisible: Boolean,
  zIndex: {
    type: Number
  },
  onScroll: Function,
  onScrollToBottom: Function,
  onVisibleChange: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useResizeObserver(container, callback) {
  if (typeof window === "undefined")
    return;
  var isSupport = window && window.ResizeObserver;
  if (!isSupport)
    return;
  var containerObserver = null;
  var cleanupObserver = function cleanupObserver2() {
    if (!containerObserver)
      return;
    containerObserver.unobserve(container.value);
    containerObserver.disconnect();
    containerObserver = null;
  };
  var addObserver = function addObserver2(el) {
    containerObserver = new ResizeObserver(callback);
    containerObserver.observe(el);
  };
  if (container) {
    watch(container, function(el) {
      cleanupObserver();
      el && addObserver(el);
    }, {
      immediate: true,
      flush: "post"
    });
  }
  onBeforeUnmount(function() {
    cleanupObserver();
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _isSlot$5(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var vnodes = [];
  children.forEach(function(child) {
    if (isArray_1(child)) {
      vnodes.push.apply(vnodes, _toConsumableArray(child));
    } else if (child.type === Fragment) {
      vnodes.push.apply(vnodes, _toConsumableArray(filterEmpty(child.children)));
    } else {
      vnodes.push(child);
    }
  });
  return vnodes.filter(function(c) {
    return !(c && (c.type === Comment || c.type === Fragment && c.children.length === 0 || c.type === Text && c.children.trim() === ""));
  });
}
function isRectChanged(rect1, rect2) {
  if (!rect1 && !rect2)
    return false;
  if (!rect1 || !rect2)
    return true;
  if (["width", "height", "x", "y"].some(function(k) {
    return rect1[k] !== rect2[k];
  })) {
    return true;
  }
  return false;
}
function useElement(getter) {
  var instance = getCurrentInstance();
  var el = ref();
  onMounted(function() {
    el.value = getter(instance);
  });
  onUpdated(function() {
    var newEl = getter(instance);
    if (el.value !== newEl) {
      el.value = newEl;
    }
  });
  return el;
}
var Trigger = defineComponent({
  name: "TPopupTrigger",
  props: {
    forwardRef: Function
  },
  emits: ["resize"],
  setup: function setup8(props2, _ref) {
    var emit2 = _ref.emit, slots = _ref.slots;
    var el = useElement(function(vm) {
      var containerNode = vm.parent.vnode;
      return containerNode.el.nextElementSibling;
    });
    var contentRect = ref();
    watch(el, function() {
      var _props2$forwardRef;
      (_props2$forwardRef = props2.forwardRef) === null || _props2$forwardRef === void 0 ? void 0 : _props2$forwardRef.call(props2, el.value);
    });
    useResizeObserver(el, function(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1), newContentRect = _ref3[0].contentRect;
      contentRect.value = newContentRect;
    });
    watch(contentRect, function(newRect, oldRect) {
      if (isRectChanged(newRect, oldRect)) {
        emit2("resize");
      }
    });
    return function() {
      var _slots$default, _children$;
      var children = filterEmpty((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      if (children.length > 1 || ((_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.type) === Text) {
        return createVNode("span", null, [children]);
      }
      return children[0];
    };
  }
});
var Content$1 = defineComponent({
  name: "TPopupContent",
  emits: ["resize"],
  setup: function setup9(props2, _ref4) {
    var emit2 = _ref4.emit, slots = _ref4.slots;
    var contentEl = useElement(function(vm) {
      return vm.vnode.el.children[0];
    });
    useResizeObserver(contentEl, function() {
      emit2("resize");
    });
    return function() {
      return createVNode("div", {
        "style": "position: absolute; top: 0px; left: 0px; width: 100%"
      }, [slots["default"]()]);
    };
  }
});
var Container = defineComponent({
  name: "TPopupContainer",
  inheritAttrs: false,
  props: {
    parent: Object,
    visible: Boolean,
    attach: popupProps.attach,
    forwardRef: Function
  },
  emits: ["resize", "contentMounted"],
  setup: function setup10(props2, _ref5) {
    var emit2 = _ref5.emit, attrs = _ref5.attrs, slots = _ref5.slots, expose = _ref5.expose;
    var triggerEl = ref();
    var mountContent = ref(false);
    function emitResize() {
      emit2("resize");
    }
    onMounted(function() {
      requestAnimationFrame(function() {
        mountContent.value = props2.visible;
      });
    });
    watch(function() {
      return props2.visible;
    }, function(visible) {
      if (visible) {
        mountContent.value = props2.visible;
      }
    });
    expose({
      unmountContent: function unmountContent() {
        mountContent.value = false;
      }
    });
    return function() {
      var _slot;
      var getElement = function getElement2() {
        return getSSRAttach() || getAttach(props2.attach, triggerEl.value);
      };
      return createVNode(Fragment, null, [createVNode(Trigger, {
        "class": attrs["class"],
        "forwardRef": function forwardRef(el) {
          props2.forwardRef(el);
          triggerEl.value = el;
        },
        "onResize": emitResize
      }, _isSlot$5(_slot = slots["default"]()) ? _slot : {
        "default": function _default3() {
          return [_slot];
        }
      }), mountContent.value && createVNode(Teleport, {
        "disabled": !getElement(),
        "to": getElement()
      }, {
        "default": function _default3() {
          return [createVNode(Content$1, {
            "onResize": emitResize,
            "onVnodeMounted": function onVnodeMounted() {
              return emit2("contentMounted");
            }
          }, {
            "default": function _default4() {
              return [slots.content && slots.content()];
            }
          })];
        }
      })]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$e(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$e(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$e(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$4(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var POPUP_ATTR_NAME = "data-td-popup";
var POPUP_PARENT_ATTR_NAME = "data-td-popup-parent";
function getPopperTree(id, upwards) {
  var list = [];
  var selectors = [POPUP_PARENT_ATTR_NAME, POPUP_ATTR_NAME];
  if (!id)
    return list;
  if (upwards) {
    selectors.unshift(selectors.pop());
  }
  recurse(id);
  return list;
  function recurse(id2) {
    var children = document.querySelectorAll("[".concat(selectors[0], '="').concat(id2, '"]'));
    children.forEach(function(el) {
      list.push(el);
      var childId = el.getAttribute(selectors[1]);
      if (childId && childId !== id2) {
        recurse(childId);
      }
    });
  }
}
var parentKey = Symbol();
function getPopperPlacement(placement) {
  return placement.replace(/-(left|top)$/, "-start").replace(/-(right|bottom)$/, "-end");
}
function attachListeners(elm) {
  var offs = [];
  return {
    add: function add2(type, listener) {
      if (!type)
        return;
      on(elm.value, type, listener);
      offs.push(function() {
        off(elm.value, type, listener);
      });
    },
    clean: function clean() {
      offs.forEach(function(handler) {
        return handler === null || handler === void 0 ? void 0 : handler();
      });
      offs.length = 0;
    }
  };
}
var _Popup = defineComponent({
  name: "TPopup",
  props: _objectSpread$e(_objectSpread$e({}, popupProps), {}, {
    expandAnimation: {
      type: Boolean
    }
  }),
  setup: function setup11(props2, _ref) {
    var _process$env;
    var expose = _ref.expose;
    var _toRefs = toRefs(props2), propVisible = _toRefs.visible, modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(propVisible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"), _useVModel2 = _slicedToArray(_useVModel, 2), visible = _useVModel2[0], setVisible = _useVModel2[1];
    var renderTNodeJSX3 = useTNodeJSX();
    var renderContent3 = useContent();
    var popper2;
    var showTimeout;
    var hideTimeout;
    var triggerEl = ref(null);
    var overlayEl = ref(null);
    var popperEl = ref(null);
    var containerRef = ref(null);
    var id = typeof process !== "undefined" && (_process$env = process.env) !== null && _process$env !== void 0 && _process$env.TEST ? "" : Date.now().toString(36);
    var parent2 = inject(parentKey, void 0);
    provide(parentKey, {
      id,
      assertMouseLeave: onMouseLeave
    });
    var prefixCls = usePrefixClass("popup");
    var _useCommonClassName = useCommonClassName$1(), commonCls = _useCommonClassName.STATUS;
    var delay = computed(function() {
      var _props2$delay, _delay2$;
      var delay2 = props2.trigger !== "hover" ? [0, 0] : [].concat((_props2$delay = props2.delay) !== null && _props2$delay !== void 0 ? _props2$delay : [250, 150]);
      return {
        show: delay2[0],
        hide: (_delay2$ = delay2[1]) !== null && _delay2$ !== void 0 ? _delay2$ : delay2[0]
      };
    });
    var trigger2 = attachListeners(triggerEl);
    watch(function() {
      return [props2.trigger, triggerEl.value];
    }, function() {
      if (!triggerEl.value)
        return;
      trigger2.clean();
      trigger2.add({
        hover: "mouseenter",
        focus: "focusin",
        "context-menu": "contextmenu",
        click: "click"
      }[props2.trigger], function(ev) {
        if (props2.disabled)
          return;
        if (ev.type === "contextmenu") {
          ev.preventDefault();
        }
        if ((ev.type === "click" || ev.type === "contextmenu") && visible.value) {
          hide2(ev);
          return;
        }
        show(ev);
      });
      trigger2.add({
        hover: "mouseleave",
        focus: "focusout"
      }[props2.trigger], hide2);
    });
    watch(function() {
      return [props2.overlayStyle, props2.overlayInnerStyle, overlayEl.value];
    }, function() {
      updateOverlayInnerStyle();
      updatePopper();
    });
    watch(function() {
      return props2.placement;
    }, function() {
      destroyPopper();
      updatePopper();
    });
    watch(function() {
      return visible.value;
    }, function(visible2) {
      if (visible2) {
        on(document, "mousedown", onDocumentMouseDown, true);
        if (props2.trigger === "focus") {
          once(triggerEl.value, "keydown", function(ev) {
            var _process$env2;
            var code = typeof process !== "undefined" && (_process$env2 = process.env) !== null && _process$env2 !== void 0 && _process$env2.TEST ? "27" : "Escape";
            if (ev.code === code) {
              hide2(ev);
            }
          });
        }
        return;
      }
      off(document, "mousedown", onDocumentMouseDown, true);
    });
    onUnmounted(function() {
      destroyPopper();
      clearAllTimeout();
      off(document, "mousedown", onDocumentMouseDown, true);
    });
    expose({
      update: updatePopper,
      close: function close2() {
        return hide2();
      },
      getOverlay: function getOverlay() {
        return overlayEl.value;
      }
    });
    function getOverlayStyle() {
      var overlayStyle = props2.overlayStyle;
      if (!triggerEl.value || !overlayEl.value)
        return;
      if (isFunction_1(overlayStyle)) {
        return overlayStyle(triggerEl.value, overlayEl.value);
      }
      if (isObject_1(overlayStyle)) {
        return overlayStyle;
      }
    }
    function updateOverlayInnerStyle() {
      var overlayInnerStyle = props2.overlayInnerStyle;
      if (!triggerEl.value || !overlayEl.value)
        return;
      if (isFunction_1(overlayInnerStyle)) {
        setStyle$1(overlayEl.value, overlayInnerStyle(triggerEl.value, overlayEl.value));
      } else if (isObject_1(overlayInnerStyle)) {
        setStyle$1(overlayEl.value, overlayInnerStyle);
      }
    }
    function updatePopper() {
      if (!popperEl.value || !visible.value)
        return;
      if (popper2) {
        var rect = triggerEl.value.getBoundingClientRect();
        var parent22 = triggerEl.value;
        while (parent22 && parent22 !== document.body) {
          parent22 = parent22.parentElement;
        }
        var isHidden = parent22 !== document.body || rect.width === 0 && rect.height === 0;
        if (!isHidden) {
          popper2.state.elements.reference = triggerEl.value;
          popper2.update();
        } else {
          setVisible(false, {
            trigger: getTriggerType({
              type: "mouseenter"
            })
          });
        }
        return;
      }
      popper2 = createPopper(triggerEl.value, popperEl.value, _objectSpread$e({
        placement: getPopperPlacement(props2.placement),
        onFirstUpdate: function onFirstUpdate() {
          nextTick(updatePopper);
        }
      }, props2.popperOptions));
    }
    function destroyPopper() {
      if (popper2) {
        var _popper;
        (_popper = popper2) === null || _popper === void 0 ? void 0 : _popper.destroy();
        popper2 = null;
      }
      if (props2.destroyOnClose) {
        var _containerRef$value;
        (_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 ? void 0 : _containerRef$value.unmountContent();
      }
    }
    function show(ev) {
      clearAllTimeout();
      showTimeout = setTimeout(function() {
        setVisible(true, {
          trigger: getTriggerType(ev)
        });
      }, delay.value.show);
    }
    function hide2(ev) {
      clearAllTimeout();
      hideTimeout = setTimeout(function() {
        setVisible(false, {
          trigger: getTriggerType(ev)
        });
      }, delay.value.hide);
    }
    function clearAllTimeout() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    }
    function getTriggerType(ev) {
      switch (ev === null || ev === void 0 ? void 0 : ev.type) {
        case "mouseenter":
        case "mouseleave":
          return "trigger-element-hover";
        case "focusin":
          return "trigger-element-focus";
        case "focusout":
          return "trigger-element-blur";
        case "click":
          return "trigger-element-click";
        case "context-menu":
        case "keydown":
          return "keydown-esc";
        case "mousedown":
          return "document";
        default:
          return "trigger-element-close";
      }
    }
    function onDocumentMouseDown(ev) {
      if (popperEl.value.contains(ev.target)) {
        return;
      }
      if (triggerEl.value.contains(ev.target)) {
        return;
      }
      var activedPopper = getPopperTree(id).find(function(el) {
        return el.contains(ev.target);
      });
      if (activedPopper && getPopperTree(activedPopper.getAttribute(POPUP_PARENT_ATTR_NAME), true).some(function(el) {
        return el === popperEl.value;
      })) {
        return;
      }
      hide2(ev);
    }
    function onMouseLeave(ev) {
      if (props2.trigger !== "hover" || triggerEl.value.contains(ev.target))
        return;
      var isCursorOverlaps = getPopperTree(id).some(function(el) {
        var rect = el.getBoundingClientRect();
        return ev.x > rect.x && ev.x < rect.x + rect.width && ev.y > rect.y && ev.y < rect.y + rect.height;
      });
      if (!isCursorOverlaps) {
        hide2(ev);
        parent2 === null || parent2 === void 0 ? void 0 : parent2.assertMouseLeave(ev);
      }
    }
    var updateScrollTop = inject("updateScrollTop", void 0);
    function handleOnScroll(e) {
      var _props2$onScroll;
      var _e$target = e.target, scrollTop = _e$target.scrollTop, clientHeight = _e$target.clientHeight, scrollHeight = _e$target.scrollHeight;
      var debounceOnScrollBottom = debounce_1(function(e2) {
        var _props2$onScrollToBot;
        return (_props2$onScrollToBot = props2.onScrollToBottom) === null || _props2$onScrollToBot === void 0 ? void 0 : _props2$onScrollToBot.call(props2, {
          e: e2
        });
      }, 100);
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        debounceOnScrollBottom(e);
      }
      (_props2$onScroll = props2.onScroll) === null || _props2$onScroll === void 0 ? void 0 : _props2$onScroll.call(props2, {
        e
      });
    }
    watch(function() {
      return [visible.value, overlayEl.value];
    }, function() {
      if (visible.value && overlayEl.value && updateScrollTop) {
        updateScrollTop === null || updateScrollTop === void 0 ? void 0 : updateScrollTop(overlayEl.value);
      }
    });
    return function() {
      var _ref2, _ref3;
      var content = renderTNodeJSX3("content");
      var hidePopup = props2.hideEmptyPopup && ["", void 0, null].includes(content);
      var overlay = visible.value || !props2.destroyOnClose ? withDirectives(createVNode("div", mergeProps((_ref2 = {}, _defineProperty$2(_ref2, POPUP_ATTR_NAME, id), _defineProperty$2(_ref2, POPUP_PARENT_ATTR_NAME, parent2 === null || parent2 === void 0 ? void 0 : parent2.id), _ref2), {
        "class": [prefixCls.value, props2.overlayClassName],
        "ref": function ref2(ref22) {
          return popperEl.value = ref22;
        },
        "style": [{
          zIndex: props2.zIndex
        }, getOverlayStyle(), hidePopup && {
          visibility: "hidden"
        }]
      }, props2.trigger === "hover" && {
        onMouseenter: function onMouseenter() {
          if (visible.value) {
            clearAllTimeout();
          }
        },
        onMouseleave: onMouseLeave
      }), [createVNode("div", {
        "class": ["".concat(prefixCls.value, "__content"), (_ref3 = {}, _defineProperty$2(_ref3, "".concat(prefixCls.value, "__content--text"), isString_1(props2.content)), _defineProperty$2(_ref3, "".concat(prefixCls.value, "__content--arrow"), props2.showArrow), _defineProperty$2(_ref3, commonCls.value.disabled, props2.disabled), _ref3), props2.overlayInnerClassName],
        "ref": function ref2(ref22) {
          return overlayEl.value = ref22;
        },
        "onScroll": handleOnScroll
      }, [content, props2.showArrow && createVNode("div", {
        "class": "".concat(prefixCls.value, "__arrow")
      }, null)])]), [[vShow, visible.value]]) : null;
      return createVNode(Container, {
        "ref": function ref2(ref22) {
          return containerRef.value = ref22;
        },
        "forwardRef": function forwardRef(ref2) {
          return triggerEl.value = ref2;
        },
        "onContentMounted": function onContentMounted() {
          if (visible.value) {
            updatePopper();
            updateOverlayInnerStyle();
          }
        },
        "onResize": function onResize() {
          if (visible.value) {
            updatePopper();
          }
        },
        "visible": visible.value,
        "attach": props2.attach
      }, {
        content: function content2() {
          return createVNode(Transition, {
            "name": "".concat(prefixCls.value, "--animation").concat(props2.expandAnimation ? "-expand" : ""),
            "appear": true,
            "onEnter": updatePopper,
            "onAfterLeave": destroyPopper
          }, _isSlot$4(overlay) ? overlay : {
            "default": function _default3() {
              return [overlay];
            }
          });
        },
        "default": function _default3() {
          return renderContent3("default", "triggerElement");
        }
      });
    };
  }
});
const index$a = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Popup = withInstall(_Popup);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var isArray$1$1 = isArray_1, isSymbol$1 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$1(value, object) {
  if (isArray$1$1(value)) {
    return false;
  }
  var type = _typeof(value);
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$1;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized2() {
    var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized2.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result = func.apply(this, args);
    memoized2.cache = cache.set(key2, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
var isArray$2 = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$1$1(value, object) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$1$1;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$1(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$1;
var castPath$2 = _castPath, toKey$2 = _toKey;
function baseGet$1(object, path) {
  path = castPath$2(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$2(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _Symbol = _Symbol$2$1, isArguments = isArguments_1, isArray$1 = isArray_1;
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$1(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$1(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGet = _baseGet, baseSlice = _baseSlice;
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var _parent = parent$1;
var castPath$1 = _castPath, last = last_1, parent = _parent, toKey = _toKey;
function baseUnset$1(object, path) {
  path = castPath$1(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
var _baseUnset = baseUnset$1;
var isPlainObject = isPlainObject_1;
function customOmitClone$1(value) {
  return isPlainObject(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var arrayMap = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit$1 = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$c = {
  delay: {
    type: Number
  },
  destroyOnClose: {
    type: Boolean,
    "default": true
  },
  duration: {
    type: Number
  },
  placement: {
    type: String,
    "default": "top"
  },
  showArrow: {
    type: Boolean,
    "default": true
  },
  theme: {
    type: String,
    "default": "default",
    validator: function validator15(val) {
      if (!val)
        return true;
      return ["default", "primary", "success", "danger", "warning", "light"].includes(val);
    }
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var useMouse = function useMouse2() {
  var x = ref(0);
  var y = ref(0);
  var onMouseMove = function onMouseMove2(e) {
    x.value = e.clientX;
    y.value = e.clientY;
  };
  if (!isServer$1) {
    onMounted(function() {
      window.addEventListener("mousemove", onMouseMove, {
        passive: true
      });
    });
    onUnmounted(function() {
      window.removeEventListener("mousemove", onMouseMove);
    });
  }
  return {
    x,
    y
  };
};
const index$9 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$d(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$d(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$d(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Tooltip = defineComponent({
  name: "TTooltip",
  props: _objectSpread$d(_objectSpread$d({}, popupProps), props$c),
  setup: function setup12(props2, ctx) {
    var timer = ref(null);
    var popupRef = ref(null);
    var _toRefs = toRefs(props2), visible = _toRefs.visible, modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(visible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"), _useVModel2 = _slicedToArray(_useVModel, 2), innerVisible = _useVModel2[0], setInnerVisible = _useVModel2[1];
    var vm = getCurrentInstance();
    var innerTooltipVisible = ref(props2.visible || props2.defaultVisible);
    var classPrefix2 = usePrefixClass();
    var renderTNodeJSX3 = useTNodeJSX();
    var renderContent3 = useContent();
    var _useMouse = useMouse(), x = _useMouse.x;
    var offsetX = ref(x.value);
    onMounted(function() {
      if (props2.duration && innerTooltipVisible.value) {
        timer.value = setTimeout(function() {
          setInnerVisible(false, {});
          clearTimeout(timer.value);
          timer.value = null;
        }, props2.duration);
      }
    });
    var onTipVisibleChange = function onTipVisibleChange2(val, ctx2) {
      if (timer.value && (ctx2 === null || ctx2 === void 0 ? void 0 : ctx2.trigger) !== "document")
        return;
      if (val) {
        offsetX.value = x.value;
      }
      setInnerVisible(val, ctx2);
    };
    var tooltipOverlayClassName = computed(function() {
      return ["".concat(classPrefix2.value, "-tooltip"), _defineProperty$2({}, "".concat(classPrefix2.value, "-tooltip--").concat(props2.theme), props2.theme), props2.overlayClassName];
    });
    var popupProps2 = computed(function() {
      return _objectSpread$d(_objectSpread$d({}, (vm === null || vm === void 0 ? void 0 : vm.vnode.props) || {}), {}, {
        placement: props2.placement === "mouse" ? "bottom-left" : props2.placement,
        showArrow: props2.placement === "mouse" ? false : props2.showArrow,
        overlayClassName: tooltipOverlayClassName.value,
        onVisibleChange: onTipVisibleChange,
        disabled: props2.disabled
      });
    });
    var overlayInnerStyle = computed(function() {
      if (props2.placement !== "mouse" || offsetX.value === 0) {
        return props2.overlayInnerStyle;
      }
      var offsetStyle = function offsetStyle2(triggerEl) {
        return {
          transform: "translateX(".concat(offsetX.value - triggerEl.getBoundingClientRect().left, "px)")
        };
      };
      if (props2.overlayInnerStyle) {
        return function(triggerEl, popupEl) {
          return _objectSpread$d(_objectSpread$d({}, offsetStyle(triggerEl)), isFunction_1(props2.overlayInnerStyle) ? props2.overlayInnerStyle(triggerEl, popupEl) : props2.overlayInnerStyle);
        };
      }
      return offsetStyle;
    });
    watch(function() {
      return innerTooltipVisible.value;
    }, function() {
      if (timer.value && !innerTooltipVisible.value) {
        clearTimeout(timer.value);
        timer.value = null;
      }
    });
    var onPopupUpdate = function onPopupUpdate2() {
      var _popupRef$value, _popupRef$value$updat;
      (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 || (_popupRef$value$updat = _popupRef$value.update) === null || _popupRef$value$updat === void 0 ? void 0 : _popupRef$value$updat.call(_popupRef$value);
    };
    ctx.expose({
      updatePopper: onPopupUpdate
    });
    return function() {
      var _content = renderTNodeJSX3("content");
      if (!_content && !props2.content) {
        return renderContent3("default", "triggerElement");
      }
      return createVNode(Popup, mergeProps(omit_1(popupProps2.value, ["content", "default"]), {
        "ref": popupRef,
        "overlayInnerStyle": overlayInnerStyle.value,
        "visible": innerVisible.value
      }), {
        "default": function _default3() {
          return [renderContent3("default", "triggerElement")];
        },
        content: function content() {
          return _content;
        }
      });
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Tooltip = withInstall(_Tooltip);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var dropdownItemProps = {
  active: Boolean,
  content: {
    type: [String, Function],
    "default": ""
  },
  disabled: Boolean,
  divider: Boolean,
  prefixIcon: {
    type: Function
  },
  theme: {
    type: String,
    "default": "default",
    validator: function validator16(val) {
      if (!val)
        return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  value: {
    type: [String, Number, Object]
  },
  onClick: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _excluded = ["from", "to", "direction"];
function ownKeys$c(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$c(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$c(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function omit(obj, fields) {
  var shallowCopy = _objectSpread$c({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key2 = fields[i];
    delete shallowCopy[key2];
  }
  return shallowCopy;
}
function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function(_char) {
    return _char.toUpperCase();
  });
}
function getBackgroundColor(color) {
  if (isString_1(color)) {
    return color;
  }
  if (isArray_1(color)) {
    if (color[0] && color[0][0] === "#") {
      color.unshift("90deg");
    }
    return "linear-gradient( ".concat(color.join(","), " )");
  }
  var from = color.from, to = color.to, _color$direction = color.direction, direction = _color$direction === void 0 ? "to right" : _color$direction, rest = _objectWithoutProperties(color, _excluded);
  var keys2 = Object.keys(rest);
  if (keys2.length) {
    keys2 = keys2.sort(function(a, b) {
      return parseFloat(a.substr(0, a.length - 1)) - parseFloat(b.substr(0, b.length - 1));
    });
    var tempArr = keys2.map(function(key2) {
      return "".concat(rest[key2], " ").concat(key2);
    });
    return "linear-gradient(".concat(direction, ", ").concat(tempArr.join(","), ")");
  }
  return "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")");
}
function getPropsApiByEvent(eventName) {
  return camelCase_1("on-".concat(eventName));
}
function getCharacterLength(str, maxCharacter) {
  var hasMaxCharacter = isNumber_1(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str
      };
    }
    return 0;
  }
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var currentStringLength = 0;
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i)
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str
    };
  }
  return len;
}
function pxCompat(param) {
  return isNumber_1(param) ? "".concat(param, "px") : param;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$b(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$b(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$b(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _DropdownItem = defineComponent({
  name: "TDropdownItem",
  props: _objectSpread$b(_objectSpread$b({}, dropdownItemProps), {}, {
    maxColumnWidth: {
      type: [String, Number],
      "default": 100
    },
    minColumnWidth: {
      type: [String, Number],
      "default": 10
    },
    isSubmenu: Boolean
  }),
  setup: function setup13(props2) {
    var renderTNodeJSX3 = useTNodeJSX();
    var renderContent3 = useContent();
    var itemRef = ref();
    useRipple(props2.isSubmenu ? null : itemRef);
    var prefixIcon = renderTNodeJSX3("prefixIcon");
    var dropdownItemClass = usePrefixClass("dropdown__item");
    var handleItemClick = function handleItemClick2(e) {
      var _props$onClick;
      (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, props2.value, {
        e
      });
    };
    return function() {
      var _ref;
      var content = renderContent3("default", "content");
      var classes = [dropdownItemClass.value, "".concat(dropdownItemClass.value, "--theme-").concat(props2.theme), (_ref = {}, _defineProperty$2(_ref, "".concat(dropdownItemClass.value, "--active"), props2.active), _defineProperty$2(_ref, "".concat(dropdownItemClass.value, "--disabled"), props2.disabled), _ref)];
      return createVNode("li", {
        "class": classes,
        "onClick": handleItemClick,
        "style": {
          maxWidth: pxCompat(props2.maxColumnWidth),
          minWidth: pxCompat(props2.minColumnWidth)
        },
        "ref": itemRef
      }, [props2.prefixIcon ? createVNode("div", {
        "class": "".concat(dropdownItemClass.value, "-icon")
      }, [prefixIcon]) : null, content]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$b = {
  direction: {
    type: String,
    "default": "right",
    validator: function validator17(val) {
      if (!val)
        return true;
      return ["left", "right"].includes(val);
    }
  },
  disabled: Boolean,
  hideAfterItemClick: {
    type: Boolean,
    "default": true
  },
  maxColumnWidth: {
    type: [String, Number],
    "default": 100
  },
  maxHeight: {
    type: Number,
    "default": 300
  },
  minColumnWidth: {
    type: [String, Number],
    "default": 10
  },
  options: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  placement: {
    type: String,
    "default": "bottom-left",
    validator: function validator18(val) {
      if (!val)
        return true;
      return ["top", "left", "right", "bottom", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"].includes(val);
    }
  },
  popupProps: {
    type: Object
  },
  trigger: {
    type: String,
    "default": "hover",
    validator: function validator19(val) {
      if (!val)
        return true;
      return ["hover", "click", "focus", "context-menu"].includes(val);
    }
  },
  onClick: Function
};
const index$8 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$a(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$a(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$a(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _DropdownMenu = defineComponent({
  name: "TDropdownMenu",
  props: _objectSpread$a({}, props$b),
  setup: function setup14(props2) {
    var dropdownClass = usePrefixClass("dropdown");
    var dropdownMenuClass = usePrefixClass("dropdown__menu");
    var scrollTopMap = reactive({});
    var menuRef = ref();
    var isOverMaxHeight = ref(false);
    var _useGlobalIcon = useGlobalIcon({
      ChevronRightIcon: chevronRight,
      ChevronLeftIcon: chevronLeft
    }), ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon, ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon;
    var handleItemClick = function handleItemClick2(options) {
      var _data$onClick, _props$onClick;
      var data = options.data, context = options.context;
      data === null || data === void 0 || (_data$onClick = data.onClick) === null || _data$onClick === void 0 ? void 0 : _data$onClick.call(data, data, context);
      (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, data, context);
    };
    var handleScroll = function handleScroll2(e, deep) {
      var scrollTop = e.target.scrollTop;
      scrollTopMap[deep] = scrollTop;
    };
    onMounted(function() {
      if (menuRef.value) {
        var _window;
        var menuHeight = parseInt((_window = window) === null || _window === void 0 ? void 0 : _window.getComputedStyle(menuRef.value).height, 10);
        if (menuHeight >= props2.maxHeight)
          isOverMaxHeight.value = true;
      }
    });
    var getContent = function getContent2(content) {
      if (isFunction_1(content)) {
        return content(h);
      }
      return content;
    };
    var renderOptions = function renderOptions2(data, deep) {
      var _data$forEach;
      var arr = [];
      var renderContent3;
      (_data$forEach = data.forEach) === null || _data$forEach === void 0 ? void 0 : _data$forEach.call(data, function(menu, idx) {
        var optionItem = _objectSpread$a({}, menu);
        var onViewIdx = idx - Math.ceil(scrollTopMap[deep] / 30);
        var renderIdx = onViewIdx >= 0 ? onViewIdx : idx;
        if (optionItem.children) {
          optionItem.children = renderOptions2(optionItem.children, deep + 1);
          renderContent3 = createVNode("div", {
            "key": idx
          }, [createVNode(_DropdownItem, {
            "style": optionItem.style,
            "class": ["".concat(dropdownClass.value, "__item"), "".concat(dropdownClass.value, "__item--suffix"), optionItem["class"]],
            "value": optionItem.value,
            "theme": optionItem.theme,
            "active": optionItem.active,
            "prefixIcon": optionItem.prefixIcon,
            "disabled": optionItem.disabled,
            "minColumnWidth": props2.minColumnWidth,
            "maxColumnWidth": props2.maxColumnWidth,
            "isSubmenu": true
          }, {
            "default": function _default3() {
              return [createVNode("div", {
                "class": "".concat(dropdownClass.value, "__item-content")
              }, [props2.direction === "right" ? createVNode(Fragment, null, [createVNode("span", {
                "class": "".concat(dropdownClass.value, "__item-text")
              }, [getContent(optionItem.content)]), createVNode(ChevronRightIcon$1, {
                "class": "".concat(dropdownClass.value, "__item-direction"),
                "size": "16"
              }, null)]) : createVNode(Fragment, null, [createVNode(ChevronLeftIcon$1, {
                "class": "".concat(dropdownClass.value, "__item-direction"),
                "size": "16"
              }, null), createVNode("span", {
                "class": "".concat(dropdownClass.value, "__item-text")
              }, [getContent(optionItem.content)])])]), createVNode("div", {
                "class": ["".concat(dropdownClass.value, "__submenu-wrapper"), _defineProperty$2({}, "".concat(dropdownClass.value, "__submenu-wrapper--").concat(props2.direction), props2.direction)],
                "style": {
                  position: "absolute",
                  top: "".concat(renderIdx * 30, "px")
                }
              }, [createVNode("div", {
                "class": ["".concat(dropdownClass.value, "__submenu"), _defineProperty$2({}, "".concat(dropdownClass.value, "__submenu--disabled"), optionItem.disabled)],
                "style": {
                  position: "static",
                  maxHeight: "".concat(props2.maxHeight, "px")
                },
                "onScroll": function onScroll(e) {
                  return handleScroll(e, deep + 1);
                }
              }, [createVNode("ul", null, [optionItem.children])])])];
            }
          }), optionItem.divider ? createVNode(Divider, null, null) : null]);
        } else {
          renderContent3 = createVNode("div", {
            "key": idx
          }, [createVNode(_DropdownItem, {
            "style": optionItem.style,
            "class": ["".concat(dropdownClass.value, "__item"), optionItem["class"]],
            "value": optionItem.value,
            "theme": optionItem.theme,
            "active": optionItem.active,
            "prefixIcon": optionItem.prefixIcon,
            "disabled": optionItem.disabled,
            "minColumnWidth": props2.minColumnWidth,
            "maxColumnWidth": props2.maxColumnWidth,
            "onClick": optionItem.disabled || optionItem.children ? function() {
              return null;
            } : function(value, context) {
              return handleItemClick({
                data: optionItem,
                context
              });
            }
          }, {
            "default": function _default3() {
              return [createVNode("span", {
                "class": "".concat(dropdownClass.value, "__item-text")
              }, [getContent(optionItem.content)])];
            }
          }), optionItem.divider ? createVNode(Divider, null, null) : null]);
        }
        arr.push(renderContent3);
      });
      return arr;
    };
    return function() {
      return createVNode("div", {
        "class": [dropdownMenuClass.value, "".concat(dropdownMenuClass.value, "--").concat(props2.direction), _defineProperty$2({}, "".concat(dropdownMenuClass.value, "--overflow"), isOverMaxHeight.value)],
        "style": {
          maxHeight: "".concat(props2.maxHeight, "px")
        },
        "ref": menuRef,
        "onScroll": function onScroll(e) {
          return handleScroll(e, 0);
        }
      }, [renderOptions(props2.options, 0)]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$9(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$9(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var getOptionsFromChildren = function getOptionsFromChildren2(menuNode) {
  var _menuNode$, _menuNode$3, _menuNode$4;
  if (!menuNode)
    return [];
  if (((_menuNode$ = menuNode[0]) === null || _menuNode$ === void 0 || (_menuNode$ = _menuNode$.type) === null || _menuNode$ === void 0 ? void 0 : _menuNode$.name) === "TDropdownMenu") {
    var _menuNode$2, _menuNode$2$default;
    var groupChildren = (_menuNode$2 = menuNode[0]) === null || _menuNode$2 === void 0 || (_menuNode$2 = _menuNode$2.children) === null || _menuNode$2 === void 0 || (_menuNode$2$default = _menuNode$2["default"]) === null || _menuNode$2$default === void 0 ? void 0 : _menuNode$2$default.call(_menuNode$2);
    if (isArray_1(groupChildren)) {
      return getOptionsFromChildren2(groupChildren);
    }
  }
  if (isArray_1(menuNode)) {
    menuNode = menuNode.reduce(function(acc, item) {
      acc = acc.concat(isArray_1(item.children) ? item.children : item);
      return acc;
    }, []);
    return menuNode.map(function(item) {
      var _item$children, _item$children$conten, _item$children2, _item$children2$prefi, _item$children3, _item$children3$prefi, _item$children4, _item$children4$defau, _groupChildren$filter, _groupChildren$filter2;
      var slotContent = (_item$children = item.children) === null || _item$children === void 0 || (_item$children$conten = _item$children.content) === null || _item$children$conten === void 0 ? void 0 : _item$children$conten.call(_item$children);
      var slotPrefixIcon = ((_item$children2 = item.children) === null || _item$children2 === void 0 || (_item$children2$prefi = _item$children2.prefixIcon) === null || _item$children2$prefi === void 0 ? void 0 : _item$children2$prefi.call(_item$children2)) || ((_item$children3 = item.children) === null || _item$children3 === void 0 || (_item$children3$prefi = _item$children3["prefix-icon"]) === null || _item$children3$prefi === void 0 ? void 0 : _item$children3$prefi.call(_item$children3));
      var groupChildren2 = (_item$children4 = item.children) === null || _item$children4 === void 0 || (_item$children4$defau = _item$children4["default"]) === null || _item$children4$defau === void 0 ? void 0 : _item$children4$defau.call(_item$children4);
      var contentCtx = groupChildren2 === null || groupChildren2 === void 0 || (_groupChildren$filter = groupChildren2.filter) === null || _groupChildren$filter === void 0 ? void 0 : _groupChildren$filter.call(groupChildren2, function(v) {
        var _v$type;
        return !["TDropdownMenu", "TDropdownItem"].includes((_v$type = v.type) === null || _v$type === void 0 ? void 0 : _v$type.name);
      });
      var childrenCtx = groupChildren2 === null || groupChildren2 === void 0 || (_groupChildren$filter2 = groupChildren2.filter) === null || _groupChildren$filter2 === void 0 ? void 0 : _groupChildren$filter2.call(groupChildren2, function(v) {
        var _v$type2;
        return !isString_1(v.children) && ["TDropdownMenu", "TDropdownItem"].includes((_v$type2 = v.type) === null || _v$type2 === void 0 ? void 0 : _v$type2.name);
      });
      var itemProps = Object.keys(item.props || {}).reduce(function(props2, propName) {
        props2[camelCase_1(propName)] = item.props[propName];
        return props2;
      }, {});
      return _objectSpread$9(_objectSpread$9(_objectSpread$9({
        content: slotContent || contentCtx || groupChildren2
      }, itemProps), slotPrefixIcon ? {
        prefixIcon: function prefixIcon() {
          return slotPrefixIcon;
        }
      } : {}), {}, {
        children: (childrenCtx === null || childrenCtx === void 0 ? void 0 : childrenCtx.length) > 0 ? getOptionsFromChildren2(childrenCtx) : null
      });
    }).filter(function(v) {
      return !!v.content;
    });
  }
  if (isArray_1((_menuNode$3 = menuNode[0]) === null || _menuNode$3 === void 0 ? void 0 : _menuNode$3.children))
    return getOptionsFromChildren2((_menuNode$4 = menuNode[0]) === null || _menuNode$4 === void 0 ? void 0 : _menuNode$4.children);
  return [];
};
function useDropdownOptions(props2) {
  var _getChildComponentSlo, _getChildComponentSlo2, _instance$slots, _instance$slots$dropd;
  var getChildComponentSlots = useChildComponentSlots();
  var instance = getCurrentInstance();
  var menuSlot = ((_getChildComponentSlo = getChildComponentSlots("DropdownMenu")) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo = _getChildComponentSlo[0]) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo = _getChildComponentSlo.children) === null || _getChildComponentSlo === void 0 || (_getChildComponentSlo2 = _getChildComponentSlo["default"]) === null || _getChildComponentSlo2 === void 0 ? void 0 : _getChildComponentSlo2.call(_getChildComponentSlo)) || ((_instance$slots = instance.slots) === null || _instance$slots === void 0 || (_instance$slots$dropd = _instance$slots.dropdown) === null || _instance$slots$dropd === void 0 ? void 0 : _instance$slots$dropd.call(_instance$slots));
  var dropdownOptions = computed(function() {
    if (props2.options && props2.options.length > 0)
      return props2.options;
    return getOptionsFromChildren(menuSlot);
  });
  return dropdownOptions;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$8(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$8(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Dropdown = defineComponent({
  name: "TDropdown",
  props: props$b,
  setup: function setup15(props2, _ref) {
    var attrs = _ref.attrs;
    var renderTNodeJSX3 = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("dropdown");
    var popupElem = ref(null);
    var isPopupVisible = ref(false);
    var manualCloseTimeout = computed(function() {
      var _props2$popupProps;
      var delay = (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.delay;
      if (isNumber_1(delay))
        return delay + 10;
      if (isArray_1(delay))
        return delay[1] + 10;
      return 160;
    });
    var handleMenuClick = function handleMenuClick2(data, context) {
      var _props2$onClick;
      if (props2.hideAfterItemClick) {
        var _props2$popupProps2, _props2$popupProps2$o, _props2$popupProps3, _props2$popupProps3$o;
        setTimeout(function() {
          return isPopupVisible.value = false;
        }, manualCloseTimeout.value);
        (_props2$popupProps2 = props2.popupProps) === null || _props2$popupProps2 === void 0 || (_props2$popupProps2$o = _props2$popupProps2.onVisibleChange) === null || _props2$popupProps2$o === void 0 ? void 0 : _props2$popupProps2$o.call(_props2$popupProps2, false, context);
        (_props2$popupProps3 = props2.popupProps) === null || _props2$popupProps3 === void 0 || (_props2$popupProps3$o = _props2$popupProps3["on-visible-change"]) === null || _props2$popupProps3$o === void 0 ? void 0 : _props2$popupProps3$o.call(_props2$popupProps3, false, context);
      }
      props2 === null || props2 === void 0 || (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 ? void 0 : _props2$onClick.call(props2, data, context);
    };
    var handleVisibleChange = function handleVisibleChange2(visible, context) {
      var _props2$popupProps4, _props2$popupProps4$o, _props2$popupProps5, _props2$popupProps5$o;
      isPopupVisible.value = visible;
      (_props2$popupProps4 = props2.popupProps) === null || _props2$popupProps4 === void 0 || (_props2$popupProps4$o = _props2$popupProps4.onVisibleChange) === null || _props2$popupProps4$o === void 0 ? void 0 : _props2$popupProps4$o.call(_props2$popupProps4, visible, context);
      (_props2$popupProps5 = props2.popupProps) === null || _props2$popupProps5 === void 0 || (_props2$popupProps5$o = _props2$popupProps5["on-visible-change"]) === null || _props2$popupProps5$o === void 0 ? void 0 : _props2$popupProps5$o.call(_props2$popupProps5, visible, context);
    };
    return function() {
      var _renderTNodeJSX, _props2$popupProps6;
      var trigger2 = (_renderTNodeJSX = renderTNodeJSX3("default")) === null || _renderTNodeJSX === void 0 ? void 0 : _renderTNodeJSX[0];
      var options = useDropdownOptions(props2);
      var popupParams = _objectSpread$8(_objectSpread$8(_objectSpread$8({}, attrs), {}, {
        disabled: props2.disabled,
        placement: props2.placement,
        trigger: props2.trigger
      }, omit_1(props2.popupProps, ["onVisibleChange", "on-visible-change"])), {}, {
        overlayInnerClassName: [COMPONENT_NAME.value, (_props2$popupProps6 = props2.popupProps) === null || _props2$popupProps6 === void 0 ? void 0 : _props2$popupProps6.overlayInnerClassName]
      });
      return createVNode(Popup, mergeProps({
        "destroyOnClose": true,
        "ref": popupElem,
        "visible": isPopupVisible.value,
        "onVisibleChange": handleVisibleChange,
        "expandAnimation": true
      }, popupParams), {
        "default": function _default3() {
          return [trigger2];
        },
        content: function content() {
          return createVNode(_DropdownMenu, mergeProps(omit_1(props2, "onClick"), {
            "options": options.value,
            "onClick": handleMenuClick
          }), null);
        }
      });
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Dropdown = withInstall(_Dropdown);
withInstall(_DropdownItem);
withInstall(_DropdownMenu);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$a = {
  collapsed: Boolean,
  expanded: {
    type: Array,
    "default": void 0
  },
  defaultExpanded: {
    type: Array,
    "default": []
  },
  expandMutex: Boolean,
  expandType: {
    type: String,
    "default": "normal",
    validator: function validator20(val) {
      if (!val)
        return true;
      return ["normal", "popup"].includes(val);
    }
  },
  logo: {
    type: Function
  },
  operations: {
    type: Function
  },
  theme: {
    type: String,
    "default": "light",
    validator: function validator21(val) {
      if (!val)
        return true;
      return ["light", "dark"].includes(val);
    }
  },
  value: {
    type: [String, Number],
    "default": void 0
  },
  modelValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number]
  },
  width: {
    type: [String, Number, Array],
    "default": "232px"
  },
  onChange: Function,
  onExpand: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var getTreePaths = function getTreePaths2(node, val, ans) {
  if (!node)
    return;
  for (var i = 0; i < node.children.length; ++i) {
    var child = node.children[i];
    if (child.value === val)
      return [].concat(_toConsumableArray(ans), [node.value]);
    var target = getTreePaths2(child, val, [].concat(_toConsumableArray(ans), [node.value]));
    if (target)
      return target;
  }
};
var getTreeSameParentNodes = function getTreeSameParentNodes2(node, val) {
  if (!node)
    return [];
  for (var i = 0; i < node.children.length; ++i) {
    var child = node.children[i];
    if (child.value === val)
      return node.children;
    var target = getTreeSameParentNodes2(child, val);
    if (target)
      return target;
  }
};
var DFS = function DFS2(root2, val) {
  if (root2.value === val)
    return root2;
  if (root2.children.length > 0) {
    for (var i = 0, len = root2.children.length; i < len; i++) {
      var res = DFS2(root2.children[i], val);
      if (res)
        return res;
    }
  }
};
var VMenu = /* @__PURE__ */ function() {
  function VMenu2(options) {
    _classCallCheck(this, VMenu2);
    _defineProperty$2(this, "data", null);
    _defineProperty$2(this, "cache", /* @__PURE__ */ new Set());
    _defineProperty$2(this, "isMutex", ref(false));
    _defineProperty$2(this, "expandValues", null);
    var root2 = {
      value: null,
      parent: null,
      children: []
    };
    this.data = root2;
    this.isMutex = options === null || options === void 0 ? void 0 : options.isMutex;
    this.expandValues = new Set(options === null || options === void 0 ? void 0 : options.expandValues);
  }
  _createClass(VMenu2, [{
    key: "add",
    value: function add2(item) {
      var value = item.value, parent2 = item.parent, vnode = item.vnode;
      var node = {
        value,
        parent: parent2,
        children: [],
        vnode
      };
      this.cache.forEach(function(data, v2, set2) {
        if (item.value === data.parent) {
          node.children.push(data);
          set2["delete"](data);
        }
      });
      if (item.parent == null) {
        this.data.children.push(node);
        node.parent = this.data;
      } else if (this.data.children.length > 0) {
        var pNode = DFS(this.data, parent2);
        if (pNode && !pNode.children.some(function(child) {
          return child.value === node.value;
        })) {
          pNode.children.push(node);
        } else {
          this.cache.add(node);
        }
      } else {
        this.cache.add(node);
      }
    }
  }, {
    key: "select",
    value: function select(val) {
      var activeValues = getTreePaths(this.data, val, []) || [];
      activeValues.push(val);
      return activeValues.filter(function(val2) {
        return val2 != null;
      });
    }
  }, {
    key: "expand",
    value: function expand2(val) {
      var _this = this;
      if (this.expandValues.has(val)) {
        this.expandValues["delete"](val);
        return _toConsumableArray(this.expandValues);
      }
      this.expandValues.add(val);
      if (!this.isMutex.value) {
        return _toConsumableArray(this.expandValues);
      }
      var sameParentNodes = getTreeSameParentNodes(this.data, val) || [];
      var sameLevelSubmenuValues = new Set(sameParentNodes.filter(function(node) {
        var _node$children;
        return ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.length) > 0 && node.value !== val;
      }).map(function(child) {
        return child.value;
      }));
      this.expandValues.forEach(function(val2) {
        var isHit = sameLevelSubmenuValues.has(val2);
        if (isHit) {
          _this.expandValues["delete"](val2);
        }
      });
      return _toConsumableArray(this.expandValues);
    }
  }, {
    key: "getChild",
    value: function getChild(value) {
      var target = DFS(this.data, value);
      return target ? target.children : [];
    }
  }]);
  return VMenu2;
}();
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$7(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$7(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Menu = defineComponent({
  name: "TMenu",
  props: _objectSpread$7(_objectSpread$7({}, props$a), {}, {
    onCollapsed: Function
  }),
  setup: function setup16(props2, ctx) {
    var classPrefix2 = usePrefixClass();
    watchEffect(function() {
      if (ctx.slots.options) {
        log.warnOnce("TMenu", "`options` slot is going to be deprecated, please use `operations` for slot instead.");
      }
    });
    var mode = ref(props2.expandType);
    var theme = computed(function() {
      return props2.theme;
    });
    var isMutex = computed(function() {
      return props2.expandMutex;
    });
    var collapsed = computed(function() {
      return props2.collapsed;
    });
    var menuClass = computed(function() {
      return ["".concat(classPrefix2.value, "-default-menu"), "".concat(classPrefix2.value, "-menu--").concat(props2.theme), _defineProperty$2({}, "".concat(classPrefix2.value, "-is-collapsed"), props2.collapsed)];
    });
    var innerClasses = computed(function() {
      return ["".concat(classPrefix2.value, "-menu"), "".concat(classPrefix2.value, "-menu--scroll")];
    });
    var expandWidth = computed(function() {
      var width = props2.width;
      var format = function format2(val) {
        return isNumber_1(val) ? "".concat(val, "px") : val;
      };
      if (isArray_1(width))
        return width.map(function(item) {
          return format(item);
        });
      return [format(width), "64px"];
    });
    var styles = computed(function() {
      return {
        height: "100%",
        width: props2.collapsed ? expandWidth.value[1] : expandWidth.value[0]
      };
    });
    var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue, expanded = _toRefs.expanded;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), activeValue = _useVModel2[0], setActiveValue = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(expanded, props2.defaultExpanded, props2.onExpand, "expanded"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), expandValues = _useDefaultValue2[0], setExpand = _useDefaultValue2[1];
    var activeValues = ref([]);
    watchEffect(function() {
      var _props2$onCollapsed;
      mode.value = props2.collapsed ? "popup" : props2.expandType;
      (_props2$onCollapsed = props2.onCollapsed) === null || _props2$onCollapsed === void 0 ? void 0 : _props2$onCollapsed.call(props2, {
        collapsed: props2.collapsed
      });
    });
    var vMenu = new VMenu({
      isMutex,
      expandValues: expandValues.value ? _toConsumableArray(expandValues.value) : []
    });
    provide("TdMenu", {
      activeValue,
      activeValues,
      expandValues,
      mode,
      theme,
      isHead: false,
      vMenu,
      collapsed,
      select: function select(value2) {
        setActiveValue(value2);
      },
      open: function open(value2, type) {
        if (mode.value === "normal") {
          setExpand(vMenu.expand(value2));
        } else if (type === "add") {
          if (expandValues.value.indexOf(value2) === -1) {
            setExpand([].concat(_toConsumableArray(expandValues.value), [value2]));
          }
        } else if (type === "remove") {
          var index2 = expandValues.value.indexOf(value2);
          var tmp = _toConsumableArray(expandValues.value);
          tmp.splice(index2, 1);
          setExpand(tmp);
        }
      }
    });
    watch(function() {
      return props2.expanded;
    }, function(value2) {
      vMenu.expandValues = new Set(value2);
    });
    watch(function() {
      return props2.collapsed;
    }, function(newValue, oldValue) {
      if (!newValue && oldValue) {
        setExpand(_toConsumableArray(vMenu.expandValues));
      }
    });
    var updateActiveValues = function updateActiveValues2(value2) {
      activeValues.value = vMenu.select(value2);
    };
    watch(activeValue, updateActiveValues);
    onMounted(function() {
      activeValues.value = vMenu.select(activeValue.value);
    });
    return {
      styles,
      classPrefix: classPrefix2,
      menuClass,
      innerClasses,
      activeValue,
      activeValues,
      expandValues
    };
  },
  render: function render3() {
    var operations = renderContent(this, "operations", "options");
    var logo = renderTNodeJSX(this, "logo");
    return createVNode("div", {
      "class": this.menuClass,
      "style": this.styles
    }, [createVNode("div", {
      "class": "".concat(this.classPrefix, "-default-menu__inner")
    }, [logo && createVNode("div", {
      "class": "".concat(this.classPrefix, "-menu__logo")
    }, [logo]), createVNode("ul", {
      "class": this.innerClasses
    }, [renderContent(this, "default", "content")]), operations && createVNode("div", {
      "class": "".concat(this.classPrefix, "-menu__operations")
    }, [operations])])]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$9 = {
  expanded: {
    type: Array,
    "default": void 0
  },
  defaultExpanded: {
    type: Array,
    "default": []
  },
  expandType: {
    type: String,
    "default": "normal",
    validator: function validator22(val) {
      if (!val)
        return true;
      return ["normal", "popup"].includes(val);
    }
  },
  logo: {
    type: Function
  },
  operations: {
    type: Function
  },
  theme: {
    type: String,
    "default": "light",
    validator: function validator23(val) {
      if (!val)
        return true;
      return ["light", "dark"].includes(val);
    }
  },
  value: {
    type: [String, Number],
    "default": void 0
  },
  modelValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number]
  },
  onChange: Function,
  onExpand: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var tabPanelProps = {
  "default": {
    type: Function
  },
  destroyOnHide: {
    type: Boolean,
    "default": true
  },
  disabled: Boolean,
  draggable: {
    type: Boolean,
    "default": true
  },
  label: {
    type: [String, Function]
  },
  panel: {
    type: [String, Function]
  },
  removable: Boolean,
  value: {
    type: [String, Number]
  },
  onRemove: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$6(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$6(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _TabPanel = defineComponent({
  name: "TTabPanel",
  props: _objectSpread$6({}, tabPanelProps),
  setup: function setup17(props2) {
    var COMPONENT_NAME = usePrefixClass("tab-panel");
    var renderTNodeContent = useContent();
    useDestroyOnClose();
    var tabs = inject("tabs");
    return function() {
      var isActive = props2.value === tabs.value.value;
      if (props2.destroyOnHide && !isActive)
        return null;
      return withDirectives(createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [renderTNodeContent("default", "panel")]), [[vShow, isActive]]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$8 = {
  action: {
    type: [String, Function]
  },
  addable: Boolean,
  disabled: Boolean,
  dragSort: Boolean,
  list: {
    type: Array
  },
  placement: {
    type: String,
    "default": "top",
    validator: function validator24(val) {
      if (!val)
        return true;
      return ["left", "top", "bottom", "right"].includes(val);
    }
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator25(val) {
      if (!val)
        return true;
      return ["medium", "large"].includes(val);
    }
  },
  theme: {
    type: String,
    "default": "normal",
    validator: function validator26(val) {
      if (!val)
        return true;
      return ["normal", "card"].includes(val);
    }
  },
  value: {
    type: [String, Number],
    "default": void 0
  },
  modelValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number]
  },
  onAdd: Function,
  onChange: Function,
  onDragSort: Function,
  onRemove: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var getDomWidth = function getDomWidth2(dom) {
  return (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
};
var tabBase = {
  calcScrollLeft: function calcScrollLeft(elements, scrollLeft) {
    var container = elements.navsContainer;
    var wrap = elements.navsWrap;
    var rightOperations = elements.rightOperations;
    var rightOperationsZoneWidth = getDomWidth(rightOperations);
    if (!wrap || !container)
      return scrollLeft;
    var containerWidth = getDomWidth(container);
    var wrapWidth = getDomWidth(wrap);
    if (wrapWidth <= containerWidth) {
      return 0;
    }
    if (scrollLeft + containerWidth - rightOperationsZoneWidth > wrapWidth) {
      return wrapWidth + rightOperationsZoneWidth - containerWidth;
    }
    return scrollLeft;
  },
  calculateCanToLeft: function calculateCanToLeft(depElement, scrollLeft, placement) {
    if (["left", "right"].includes(placement.toLowerCase())) {
      return false;
    }
    var container = depElement.navsContainer, wrap = depElement.navsWrap, leftOperations = depElement.leftOperations, toLeftBtn = depElement.toLeftBtn;
    if (!wrap || !container) {
      return false;
    }
    var leftOperationsZoneWidth = getDomWidth(leftOperations);
    var leftIconWidth = getDomWidth(toLeftBtn);
    return scrollLeft + Math.round(leftOperationsZoneWidth - leftIconWidth) > 0;
  },
  calculateCanToRight: function calculateCanToRight(depElement, scrollLeft, placement) {
    if (["left", "right"].includes(placement.toLowerCase())) {
      return false;
    }
    var container = depElement.navsContainer, wrap = depElement.navsWrap, rightOperations = depElement.rightOperations, toRightBtn = depElement.toRightBtn;
    if (!wrap || !container) {
      return false;
    }
    var rightOperationsZoneWidth = getDomWidth(rightOperations);
    var rightIconWidth = getDomWidth(toRightBtn);
    return scrollLeft + getDomWidth(container) - (rightOperationsZoneWidth - rightIconWidth) - getDomWidth(wrap) < -1;
  },
  moveActiveTabIntoView: function moveActiveTabIntoView(depElement, scrollLeft) {
    var activeTab = depElement.activeTab, container = depElement.navsContainer, navsWrap = depElement.navsWrap, leftOperations = depElement.leftOperations, toLeftBtn = depElement.toLeftBtn, rightOperations = depElement.rightOperations, toRightBtn = depElement.toRightBtn;
    if (!activeTab)
      return scrollLeft;
    var totalWidthBeforeActiveTab = activeTab.offsetLeft;
    if (!container)
      return scrollLeft;
    var _getLeftCoverWidth = function _getLeftCoverWidth2() {
      var leftOperationsZoneWidth = getDomWidth(leftOperations);
      var leftIconWidth = getDomWidth(toLeftBtn);
      if (totalWidthBeforeActiveTab === 0) {
        return leftOperationsZoneWidth - leftIconWidth;
      }
      return leftOperationsZoneWidth;
    };
    var leftCoverWidth = _getLeftCoverWidth();
    var isCurrentTabHiddenInLeftZone = scrollLeft + leftCoverWidth > totalWidthBeforeActiveTab;
    if (isCurrentTabHiddenInLeftZone) {
      return totalWidthBeforeActiveTab - leftCoverWidth;
    }
    var activeTabWidth = activeTab.offsetWidth;
    if (!container || !navsWrap)
      return scrollLeft;
    var containerWidth = getDomWidth(container);
    var _getRightCoverWidth = function _getRightCoverWidth2() {
      var rightOperationsZoneWidth = getDomWidth(rightOperations);
      var rightIconWidth = getDomWidth(toRightBtn);
      var wrapWidth = getDomWidth(navsWrap);
      if (Math.abs(totalWidthBeforeActiveTab + activeTabWidth - wrapWidth) < 1) {
        return rightOperationsZoneWidth - rightIconWidth;
      }
      return rightOperationsZoneWidth;
    };
    var rightCoverWidth = _getRightCoverWidth();
    var isHiddenInRightZone = scrollLeft + containerWidth - rightCoverWidth < totalWidthBeforeActiveTab + activeTabWidth;
    if (isHiddenInRightZone) {
      return totalWidthBeforeActiveTab + activeTabWidth - containerWidth + rightCoverWidth;
    }
    return scrollLeft;
  },
  scrollToLeft: function scrollToLeft(depElement, scrollLeft) {
    var container = depElement.navsContainer, leftOperations = depElement.leftOperations, toLeftBtn = depElement.toLeftBtn;
    if (!container)
      return 0;
    var leftOperationsZoneWidth = getDomWidth(leftOperations);
    var leftIconWidth = getDomWidth(toLeftBtn);
    var containerWidth = getDomWidth(container);
    return Math.max(-(leftOperationsZoneWidth - leftIconWidth), scrollLeft - containerWidth);
  },
  scrollToRight: function scrollToRight(depElement, scrollLeft) {
    var container = depElement.navsContainer, wrap = depElement.navsWrap, rightOperations = depElement.rightOperations, toRightBtn = depElement.toRightBtn;
    var rightOperationsZoneWidth = getDomWidth(rightOperations);
    var rightIconWidth = getDomWidth(toRightBtn);
    var containerWidth = getDomWidth(container);
    var wrapWidth = getDomWidth(wrap);
    return Math.min(scrollLeft + containerWidth - rightOperationsZoneWidth - rightIconWidth, wrapWidth - containerWidth + rightOperationsZoneWidth - rightIconWidth);
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var TTabNavItem = defineComponent({
  name: "TTabNavItem",
  props: {
    index: Number,
    active: {
      type: Boolean
    },
    theme: props$8.theme,
    size: props$8.size,
    placement: props$8.placement,
    label: {
      type: null
    },
    disabled: tabPanelProps.disabled,
    removable: tabPanelProps.removable,
    value: tabPanelProps.value,
    onClick: Function,
    onRemove: Function
  },
  setup: function setup18(props2) {
    var itemRef = ref();
    useRipple(itemRef);
    var COMPONENT_NAME = usePrefixClass("tabs__nav-item");
    var _useGlobalIcon = useGlobalIcon({
      CloseIcon: close
    }), CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var classPrefix2 = usePrefixClass();
    var _useCommonClassName = useCommonClassName$1(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
    var removeBtnClick = function removeBtnClick2(_ref) {
      var e = _ref.e;
      e.stopPropagation();
      props2.onRemove({
        e,
        value: props2.value,
        index: props2.index
      });
    };
    var onClickNav = function onClickNav2(e) {
      if (props2.disabled)
        return;
      props2.onClick(e);
    };
    var navItemClass = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty$2(_ref2, COMPONENT_NAME.value, true), _defineProperty$2(_ref2, "".concat(classPrefix2.value, "-tabs__nav--card"), props2.theme === "card"), _defineProperty$2(_ref2, STATUS.value.disabled, props2.disabled), _defineProperty$2(_ref2, STATUS.value.active, props2.active), _defineProperty$2(_ref2, "".concat(classPrefix2.value, "-is-left"), props2.placement === "left"), _defineProperty$2(_ref2, "".concat(classPrefix2.value, "-is-right"), props2.placement === "right"), _defineProperty$2(_ref2, SIZE.value.medium, props2.size === "medium"), _defineProperty$2(_ref2, SIZE.value.large, props2.size === "large"), _ref2;
    });
    var renderCardItem = function renderCardItem2() {
      return createVNode("div", {
        "class": navItemClass.value,
        "onClick": onClickNav,
        "ref": itemRef
      }, [createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-text-wrapper")
      }, [props2.label]), props2.removable && !props2.disabled ? createVNode(CloseIcon$1, {
        "class": "remove-btn",
        "onClick": removeBtnClick
      }, null) : null]);
    };
    var renderNormalItem = function renderNormalItem2() {
      var _ref3;
      return createVNode("div", {
        "class": navItemClass.value,
        "onClick": onClickNav
      }, [createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "-wrapper"), (_ref3 = {}, _defineProperty$2(_ref3, STATUS.value.disabled, props2.disabled), _defineProperty$2(_ref3, STATUS.value.active, props2.active), _ref3)],
        "ref": itemRef
      }, [createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-text-wrapper")
      }, [props2.label])]), props2.removable && !props2.disabled ? createVNode(CloseIcon$1, {
        "class": "remove-btn",
        "onClick": removeBtnClick
      }, null) : null]);
    };
    return function() {
      return props2.theme === "card" ? renderCardItem() : renderNormalItem();
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var TTabNavBar = defineComponent({
  props: {
    navs: {
      type: Array
    },
    placement: props$8.placement,
    value: props$8.value
  },
  setup: function setup19(props2) {
    var COMPONENT_NAME = usePrefixClass("tabs");
    var classPrefix2 = usePrefixClass();
    var navBarClass = computed(function() {
      return ["".concat(COMPONENT_NAME.value, "__bar"), "".concat(classPrefix2.value, "-is-").concat(props2.placement)];
    });
    var navBarStyle = ref(null);
    var getStyle = function getStyle2() {
      var _props$navs$i$el, _ref3;
      var isVertical = ["left", "right"].includes(props2.placement.toLowerCase());
      var _ref = isVertical ? ["height", "top"] : ["width", "left"], _ref2 = _slicedToArray(_ref, 2), sizePropName = _ref2[0], offsetPropName = _ref2[1];
      var offset2 = 0;
      var i = 0;
      for (; i < props2.navs.length; i++) {
        var _props$navs$i;
        if (props2.navs[i].props.value === props2.value) {
          break;
        }
        offset2 += ((_props$navs$i = props2.navs[i]) === null || _props$navs$i === void 0 || (_props$navs$i = _props$navs$i.el) === null || _props$navs$i === void 0 ? void 0 : _props$navs$i["client".concat(firstUpperCase(sizePropName))]) || 0;
      }
      if (!props2.navs[i])
        return {};
      return _ref3 = {}, _defineProperty$2(_ref3, offsetPropName, "".concat(offset2, "px")), _defineProperty$2(_ref3, sizePropName, "".concat(((_props$navs$i$el = props2.navs[i].el) === null || _props$navs$i$el === void 0 ? void 0 : _props$navs$i$el["client".concat(firstUpperCase(sizePropName))]) || 0, "px")), _ref3;
    };
    onMounted(function() {
      nextTick(function() {
        navBarStyle.value = getStyle();
      });
    });
    watch([function() {
      return props2.navs;
    }, function() {
      return props2.value;
    }, function() {
      return props2.placement;
    }], function() {
      nextTick(function() {
        navBarStyle.value = getStyle();
      });
    });
    return function() {
      return createVNode("div", {
        "class": navBarClass.value,
        "style": navBarStyle.value
      }, null);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null)
        it["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var traversalTabNavs = function traversalTabNavs2(tabNavs, fn2) {
  var _iterator = _createForOfIteratorHelper(tabNavs), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var itemNode = _step.value;
      if (itemNode.getAttribute("draggable")) {
        fn2(itemNode);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var handleTarget = function handleTarget2(target, tabNavs) {
  var resultTarget;
  traversalTabNavs(tabNavs, function(itemNode) {
    if (itemNode.contains(target)) {
      resultTarget = itemNode;
    }
  });
  return resultTarget;
};
function useDragSort(props2) {
  var navsWrap = null;
  var dragged;
  var enterTargets = [];
  var dragstart = function dragstart2(event) {
    var target = event.target;
    dragged = target;
    target.style.opacity = "0.5";
  };
  var dragend = function dragend2(event) {
    event.target.style.opacity = "";
  };
  var dragover = function dragover2(event) {
    event.preventDefault();
  };
  var dragenter = function dragenter2(event) {
    var target = handleTarget(event.target, navsWrap.children);
    if (target && target !== dragged && target.draggable) {
      target.firstChild.style.outline = "1px dashed #0052d9";
      if (!enterTargets.includes(target)) {
        enterTargets.push(target);
      }
    }
  };
  var dragleave = function dragleave2(event) {
    var target = event.target;
    for (var _i = 0, _enterTargets = enterTargets; _i < _enterTargets.length; _i++) {
      var enterTarget = _enterTargets[_i];
      if (!enterTarget.contains(target)) {
        enterTarget.firstChild.style.outline = "none";
      }
    }
  };
  var drop = function drop2(event) {
    event.preventDefault();
    traversalTabNavs(navsWrap.children, function(tabNav) {
      tabNav.firstChild.style.outline = "none";
    });
    var target = handleTarget(event.target, navsWrap.children);
    if (target && target.parentNode !== dragged && target.draggable) {
      var dragIndex = [].indexOf.call(navsWrap.children, dragged);
      var targetIndex = [].indexOf.call(navsWrap.children, target);
      if (targetIndex > dragIndex) {
        target = navsWrap.children[targetIndex + 1];
      }
      navsWrap.insertBefore(dragged, target);
      var currentIndex = props2.theme === "card" ? dragIndex : dragIndex - 1;
      var endIndex = props2.theme === "card" ? targetIndex : targetIndex - 1;
      props2.onDragSort({
        currentIndex,
        current: props2.panels[currentIndex].value,
        targetIndex: endIndex,
        target: props2.panels[endIndex].value
      });
    }
  };
  function setNavsWrap(val) {
    navsWrap = val;
    navsWrap.addEventListener("dragstart", dragstart, false);
    navsWrap.addEventListener("dragend", dragend, false);
    navsWrap.addEventListener("dragover", dragover, false);
    navsWrap.addEventListener("dragenter", dragenter, false);
    document.addEventListener("dragleave", dragleave, false);
    document.addEventListener("mousemove", dragleave, false);
    navsWrap.addEventListener("drop", drop, false);
  }
  onUnmounted(function() {
    navsWrap.removeEventListener("dragstart", dragstart);
    navsWrap.removeEventListener("dragend", dragend);
    navsWrap.removeEventListener("dragover", dragover);
    navsWrap.removeEventListener("dragenter", dragenter);
    document.removeEventListener("dragleave", dragleave);
    document.removeEventListener("mousemove", dragleave);
    navsWrap.removeEventListener("drop", drop);
  });
  return {
    setNavsWrap
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$5(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var calculateCanToLeft2 = tabBase.calculateCanToLeft, calculateCanToRight2 = tabBase.calculateCanToRight, calcScrollLeft2 = tabBase.calcScrollLeft, scrollToLeft2 = tabBase.scrollToLeft, scrollToRight2 = tabBase.scrollToRight, moveActiveTabIntoView2 = tabBase.moveActiveTabIntoView;
var TTabNav = defineComponent(_objectSpread$5(_objectSpread$5({
  name: "TTabNav"
}, {
  resizeObserver: null
}), {}, {
  props: {
    theme: props$8.theme,
    panels: {
      type: Array,
      "default": function _default2() {
        return [];
      }
    },
    value: props$8.value,
    placement: props$8.placement,
    size: props$8.size,
    disabled: props$8.disabled,
    addable: props$8.addable,
    onChange: props$8.onChange,
    onAdd: props$8.onAdd,
    onRemove: props$8.onRemove,
    dragSort: props$8.dragSort,
    onDragSort: props$8.onDragSort
  },
  setup: function setup20(props2) {
    var COMPONENT_NAME = usePrefixClass("tabs");
    var _useGlobalIcon = useGlobalIcon({
      ChevronLeftIcon: chevronLeft,
      ChevronRightIcon: chevronRight,
      AddIcon: add
    }), ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon, ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon, AddIcon$1 = _useGlobalIcon.AddIcon;
    var classPrefix2 = usePrefixClass();
    var _useCommonClassName = useCommonClassName$1(), SIZE = _useCommonClassName.SIZE;
    var scrollLeft = ref(0);
    var canToLeft = ref(false);
    var canToRight = ref(false);
    var navsContainerRef = ref();
    var navsWrapRef = ref();
    var leftOperationsRef = ref();
    var toLeftBtnRef = ref();
    var rightOperationsRef = ref();
    var toRightBtnRef = ref();
    var activeTabRef = ref();
    var getRefs = function getRefs2() {
      return {
        navsContainer: navsContainerRef.value,
        navsWrap: navsWrapRef.value,
        leftOperations: leftOperationsRef.value,
        toLeftBtn: toLeftBtnRef.value,
        rightOperations: rightOperationsRef.value,
        toRightBtn: toRightBtnRef.value
      };
    };
    var wrapTransformStyle = computed(function() {
      if (["left", "right"].includes(props2.placement.toLowerCase()))
        return {};
      return {
        transform: "translate3d(".concat(-scrollLeft.value, "px, 0, 0)")
      };
    });
    var navsContainerStyle = computed(function() {
      return props2.addable ? {
        "min-height": "48px"
      } : null;
    });
    var iconBaseClass = computed(function() {
      var _ref;
      return _ref = {}, _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "__btn"), true), _defineProperty$2(_ref, SIZE.value.medium, props2.size === "medium"), _defineProperty$2(_ref, SIZE.value.large, props2.size === "large"), _ref;
    });
    var leftIconClass = computed(function() {
      return _objectSpread$5(_defineProperty$2({}, "".concat(COMPONENT_NAME.value, "__btn--left"), true), iconBaseClass.value);
    });
    var rightIconClass = computed(function() {
      return _objectSpread$5(_defineProperty$2({}, "".concat(COMPONENT_NAME.value, "__btn--right"), true), iconBaseClass.value);
    });
    var addIconClass = computed(function() {
      return _objectSpread$5(_defineProperty$2({}, "".concat(COMPONENT_NAME.value, "__add-btn"), true), iconBaseClass.value);
    });
    var navContainerClass = computed(function() {
      var _ref2;
      return _ref2 = {}, _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "__nav-container"), true), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "__nav--card"), props2.theme === "card"), _defineProperty$2(_ref2, "".concat(classPrefix2.value, "-is-").concat(props2.placement), true), _defineProperty$2(_ref2, "".concat(classPrefix2.value, "-is-addable"), props2.addable), _ref2;
    });
    var navScrollContainerClass = computed(function() {
      var _ref3;
      return _ref3 = {}, _defineProperty$2(_ref3, "".concat(COMPONENT_NAME.value, "__nav-scroll"), true), _defineProperty$2(_ref3, "".concat(classPrefix2.value, "-is-scrollable"), canToLeft.value || canToRight.value), _ref3;
    });
    var navsWrapClass = computed(function() {
      return ["".concat(COMPONENT_NAME.value, "__nav-wrap"), "".concat(classPrefix2.value, "-is-smooth"), _defineProperty$2({}, "".concat(classPrefix2.value, "-is-vertical"), props2.placement === "left" || props2.placement === "right")];
    });
    var totalAdjust = function totalAdjust2() {
      adjustArrowDisplay();
      adjustScrollLeft();
    };
    watch([scrollLeft, function() {
      return props2.placement;
    }, function() {
      return props2.panels;
    }], totalAdjust);
    useResize(debounce_1(totalAdjust), navsContainerRef.value);
    onMounted(totalAdjust);
    var adjustScrollLeft = function adjustScrollLeft2() {
      scrollLeft.value = calcScrollLeft2(getRefs(), scrollLeft.value);
    };
    var adjustArrowDisplay = function adjustArrowDisplay2() {
      canToLeft.value = calculateCanToLeft2(getRefs(), scrollLeft.value, props2.placement);
      canToRight.value = calculateCanToRight2(getRefs(), scrollLeft.value, props2.placement);
    };
    var handleScroll = function handleScroll2(direction) {
      if (direction === "left") {
        scrollLeft.value = scrollToLeft2(getRefs(), scrollLeft.value);
      } else {
        scrollLeft.value = scrollToRight2(getRefs(), scrollLeft.value);
      }
    };
    var handleAddTab = function handleAddTab2(e) {
      var _props$onAdd;
      (_props$onAdd = props2.onAdd) === null || _props$onAdd === void 0 ? void 0 : _props$onAdd.call(props2, {
        e
      });
    };
    var tabClick = function tabClick2(event, nav) {
      var value = nav.value, disabled = nav.disabled;
      if (disabled || props2.value === value) {
        return false;
      }
      props2.onChange(value);
    };
    var removeBtnClick = function removeBtnClick2(_ref5) {
      var e = _ref5.e, value = _ref5.value, index2 = _ref5.index;
      props2.onRemove({
        e,
        value,
        index: index2
      });
    };
    var setActiveTab = function setActiveTab2(ref2) {
      if ((ref2 === null || ref2 === void 0 ? void 0 : ref2.value) === props2.value && activeTabRef.value !== ref2.$el) {
        activeTabRef.value = ref2.$el;
        scrollLeft.value = moveActiveTabIntoView2(_objectSpread$5({
          activeTab: activeTabRef.value
        }, getRefs()), scrollLeft.value);
      }
    };
    var _useDragSort = useDragSort(props2), setNavsWrap = _useDragSort.setNavsWrap;
    onMounted(function() {
      setNavsWrap(navsWrapRef.value);
    });
    var navs = computed(function() {
      return props2.panels.map(function(panel, index2) {
        var _panel$children;
        var label;
        if (panel !== null && panel !== void 0 && (_panel$children = panel.children) !== null && _panel$children !== void 0 && _panel$children.label) {
          label = panel.children.label();
        } else if (isFunction_1(panel.label)) {
          label = panel.label(h);
        } else {
          label = panel.label || "选项卡".concat(index2 + 1);
        }
        var draggable = props2.dragSort;
        if (draggable && panel.draggable === false) {
          draggable = panel.draggable;
        }
        return createVNode(TTabNavItem, {
          "ref": setActiveTab,
          "draggable": draggable,
          "key": panel.value,
          "index": index2,
          "theme": props2.theme,
          "size": props2.size,
          "placement": props2.placement,
          "label": label,
          "active": panel.value === props2.value,
          "disabled": props2.disabled || panel.disabled,
          "removable": panel.removable,
          "value": panel.value,
          "onClick": function onClick(e) {
            return tabClick(e, panel);
          },
          "onRemove": removeBtnClick
        }, null);
      });
    });
    var renderArrows = function renderArrows2() {
      return [createVNode("div", {
        "ref": leftOperationsRef,
        "class": ["".concat(COMPONENT_NAME.value, "__operations"), "".concat(COMPONENT_NAME.value, "__operations--left")]
      }, [createVNode(Transition, {
        "name": "fade",
        "mode": "out-in",
        "appear": true
      }, {
        "default": function _default3() {
          return [canToLeft.value ? createVNode("div", {
            "ref": toLeftBtnRef,
            "class": leftIconClass.value,
            "onClick": function onClick() {
              return handleScroll("left");
            }
          }, [createVNode(ChevronLeftIcon$1, null, null)]) : null];
        }
      })]), createVNode("div", {
        "ref": rightOperationsRef,
        "class": ["".concat(COMPONENT_NAME.value, "__operations"), "".concat(COMPONENT_NAME.value, "__operations--right")]
      }, [createVNode(Transition, {
        "name": "fade",
        "mode": "out-in",
        "appear": true
      }, {
        "default": function _default3() {
          return [canToRight.value ? createVNode("div", {
            "ref": toRightBtnRef,
            "class": rightIconClass.value,
            "onClick": function onClick() {
              return handleScroll("right");
            }
          }, [createVNode(ChevronRightIcon$1, null, null)]) : null];
        }
      }), props2.addable ? createVNode("div", {
        "class": addIconClass.value,
        "onClick": handleAddTab
      }, [createVNode(AddIcon$1, null, null)]) : null])];
    };
    var renderNavs = function renderNavs2() {
      return createVNode("div", {
        "class": navContainerClass.value
      }, [createVNode("div", {
        "class": navScrollContainerClass.value
      }, [createVNode("div", {
        "ref": navsWrapRef,
        "class": navsWrapClass.value,
        "style": wrapTransformStyle.value
      }, [props2.theme !== "card" && createVNode(TTabNavBar, {
        "placement": props2.placement,
        "value": props2.value,
        "navs": navs.value
      }, null), navs.value])])]);
    };
    return function() {
      return createVNode("div", {
        "ref": navsContainerRef,
        "class": ["".concat(COMPONENT_NAME.value, "__nav")],
        "style": navsContainerStyle.value
      }, [renderArrows(), renderNavs()]);
    };
  }
}));
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _Tabs = defineComponent({
  name: "TTabs",
  props: props$8,
  setup: function setup21(props2) {
    var COMPONENT_NAME = usePrefixClass("tabs");
    var classPrefix2 = usePrefixClass();
    var renderTNodeJSX3 = useTNodeJSX();
    var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue || "", props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), tabValue = _useVModel2[0], setTabValue = _useVModel2[1];
    provide("tabs", {
      value: tabValue
    });
    var onTabAdd = function onTabAdd2(context) {
      var _props2$onAdd;
      (_props2$onAdd = props2.onAdd) === null || _props2$onAdd === void 0 ? void 0 : _props2$onAdd.call(props2, {
        e: context.e
      });
    };
    var onTabChange = function onTabChange2(value2) {
      setTabValue(value2);
    };
    var onTabRemove = function onTabRemove2(_ref) {
      var e = _ref.e, value2 = _ref.value, index2 = _ref.index;
      props2.onRemove({
        value: value2,
        index: index2,
        e
      });
    };
    var getSlotPanels = function getSlotPanels2() {
      var content = renderTNodeJSX3("default");
      if (!content)
        return [];
      content = content.map(function(item) {
        if (item.children && isArray_1(item.children))
          return item.children;
        return item;
      }).flat().filter(function(item) {
        return item.type.name === "TTabPanel";
      });
      return content;
    };
    var renderHeader = function renderHeader2() {
      var _props2$list, _ref2;
      var panels = ((_props2$list = props2.list) !== null && _props2$list !== void 0 && _props2$list.length ? props2.list : getSlotPanels()) || [];
      var panelsData = panels.map(function(item) {
        var selfItem = item;
        if (item.props) {
          Object.keys(item.props).forEach(function(key2) {
            selfItem[key2] = item.props[key2];
          });
        }
        return selfItem;
      });
      var tabNavProps = {
        theme: props2.theme,
        value: tabValue.value,
        size: props2.size,
        disabled: props2.disabled,
        placement: props2.placement,
        addable: props2.addable,
        panels: panelsData,
        dragSort: props2.dragSort
      };
      return createVNode("div", {
        "class": (_ref2 = {}, _defineProperty$2(_ref2, "".concat(classPrefix2.value, "-tabs__header"), true), _defineProperty$2(_ref2, "".concat(classPrefix2.value, "-is-").concat(props2.placement), true), _ref2)
      }, [createVNode(TTabNav, mergeProps(tabNavProps, {
        "onDragSort": props2.onDragSort,
        "onChange": onTabChange,
        "onAdd": onTabAdd,
        "onRemove": onTabRemove
      }), null)]);
    };
    var renderContent3 = function renderContent4() {
      var _props2$list2;
      var panels = getSlotPanels();
      if ((_props2$list2 = props2.list) !== null && _props2$list2 !== void 0 && _props2$list2.length) {
        return props2.list.map(function(item) {
          return createVNode(_TabPanel, mergeProps(item, {
            "onRemove": onTabRemove
          }), null);
        });
      }
      if (panels && panels.length) {
        return createVNode("div", {
          "class": ["".concat(classPrefix2.value, "-tabs__content")]
        }, [panels]);
      }
    };
    return function() {
      return createVNode("div", {
        "class": [COMPONENT_NAME.value]
      }, [props2.placement !== "bottom" ? [renderHeader(), renderContent3()] : [renderContent3(), renderHeader()]]);
    };
  }
});
const index$7 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Tabs = withInstall(_Tabs);
var TabPanel = withInstall(_TabPanel);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$7 = {
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  disabled: Boolean,
  icon: {
    type: Function
  },
  popupProps: {
    type: Object
  },
  title: {
    type: [String, Function]
  },
  value: {
    type: [String, Number]
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var FakeArrow = defineComponent({
  name: "TFakeArrow",
  props: {
    isActive: {
      type: Boolean
    },
    overlayClassName: {
      type: [String, Object, Array]
    },
    overlayStyle: {
      type: Object || String
    }
  },
  setup: function setup22(props2) {
    var COMPONENT_NAME = usePrefixClass("fake-arrow");
    var classes = computed(function() {
      return [COMPONENT_NAME.value, _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--active"), props2.isActive), props2.overlayClassName];
    });
    return {
      classes
    };
  },
  render: function render4() {
    return createVNode("svg", {
      "class": this.classes,
      "width": "16",
      "height": "16",
      "viewBox": "0 0 16 16",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg",
      "style": this.overlayStyle
    }, [createVNode("path", {
      "d": "M3.75 5.7998L7.99274 10.0425L12.2361 5.79921",
      "stroke": "black",
      "stroke-opacity": "0.9",
      "stroke-width": "1.3"
    }, null)]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useCollapseAnimation() {
  var beforeEnter = function beforeEnter2(el) {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.style.height = "0";
    el.style.paddingTop = "0";
    el.style.paddingBottom = "0";
  };
  var enter = function enter2(el) {
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = "".concat(el.scrollHeight, "px");
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
    el.style.overflow = "hidden";
  };
  var afterEnter = function afterEnter2(el) {
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
  };
  var beforeLeave = function beforeLeave2(el) {
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = "".concat(el.scrollHeight, "px");
    el.style.overflow = "hidden";
  };
  var leave = function leave2(el) {
    if (el.scrollHeight !== 0) {
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    }
  };
  var afterLeave = function afterLeave2(el) {
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  };
  return {
    beforeEnter,
    enter,
    afterEnter,
    beforeLeave,
    leave,
    afterLeave
  };
}
const index$6 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$4(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Submenu = defineComponent({
  name: "TSubmenu",
  props: props$7,
  setup: function setup23(props2, ctx) {
    var classPrefix2 = usePrefixClass();
    var menu = inject("TdMenu");
    var theme = menu.theme, activeValues = menu.activeValues, expandValues = menu.expandValues, isHead = menu.isHead, open = menu.open;
    var submenu = inject("TdSubmenu", {});
    var setSubPopup = submenu.setSubPopup, closeParentPopup = submenu.closeParentPopup;
    var mode = computed(function() {
      return ctx.attrs.expandType || menu.mode.value;
    });
    var menuItems = ref([]);
    var isActive = computed(function() {
      return activeValues.value.indexOf(props2.value) > -1;
    });
    var popupVisible = ref(false);
    var isCursorInPopup = ref(false);
    var rippleColor = computed(function() {
      return theme.value === "light" ? "#E7E7E7" : "#383838";
    });
    var isOpen = computed(function() {
      var _expandValues$value;
      if (mode.value === "popup") {
        return popupVisible.value;
      }
      return expandValues ? (_expandValues$value = expandValues.value) === null || _expandValues$value === void 0 ? void 0 : _expandValues$value.includes(props2.value) : false;
    });
    var isNested = ref(false);
    var popupWrapperRef = ref();
    var subPopupRef = ref();
    var submenuRef = ref();
    var transitionClass = usePrefixClass("slide-down");
    useRipple(submenuRef, rippleColor);
    var classes = computed(function() {
      var _ref;
      return ["".concat(classPrefix2.value, "-submenu"), (_ref = {}, _defineProperty$2(_ref, "".concat(classPrefix2.value, "-is-disabled"), props2.disabled), _defineProperty$2(_ref, "".concat(classPrefix2.value, "-is-opened"), isOpen.value), _ref)];
    });
    var overlayInnerClassName = computed(function() {
      var _props2$popupProps;
      return ["".concat(classPrefix2.value, "-menu__popup"), "".concat(classPrefix2.value, "-is-").concat(isHead ? "horizontal" : "vertical"), _defineProperty$2({}, "".concat(classPrefix2.value, "-is-opened"), popupVisible.value), (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.overlayInnerClassName];
    });
    var overlayClassName = computed(function() {
      var _props2$popupProps2;
      return ["".concat(classPrefix2.value, "-menu--").concat(theme.value), isHead && "".concat(classPrefix2.value, "-is-head-menu"), _defineProperty$2({}, "".concat(classPrefix2.value, "-menu-is-nested"), isNested.value), (_props2$popupProps2 = props2.popupProps) === null || _props2$popupProps2 === void 0 ? void 0 : _props2$popupProps2.overlayClassName];
    });
    var submenuClass = computed(function() {
      var _ref4;
      return ["".concat(classPrefix2.value, "-menu__item"), "".concat(classPrefix2.value, "-menu__item-spacer"), "".concat(classPrefix2.value, "-menu__item-spacer--").concat(isHead && !isNested.value ? "bottom" : "right"), (_ref4 = {}, _defineProperty$2(_ref4, "".concat(classPrefix2.value, "-is-disabled"), props2.disabled), _defineProperty$2(_ref4, "".concat(classPrefix2.value, "-is-opened"), isOpen.value), _defineProperty$2(_ref4, "".concat(classPrefix2.value, "-is-active"), isActive.value), _ref4)];
    });
    var subClass = computed(function() {
      return ["".concat(classPrefix2.value, "-menu__sub"), _defineProperty$2({}, "".concat(classPrefix2.value, "-is-opened"), isOpen.value)];
    });
    var arrowClass = computed(function() {
      return [_defineProperty$2({}, "".concat(classPrefix2.value, "-fake-arrow--active"), isOpen.value)];
    });
    var passSubPopupRefToParent = function passSubPopupRefToParent2(val) {
      if (isFunction_1(setSubPopup)) {
        setSubPopup(val);
      }
    };
    var handleMouseEnter = function handleMouseEnter2() {
      if (props2.disabled)
        return;
      setTimeout(function() {
        if (!popupVisible.value) {
          open(props2.value);
          nextTick().then(function() {
            passSubPopupRefToParent(popupWrapperRef.value);
          });
        }
        popupVisible.value = true;
      }, 0);
    };
    var targetInPopup = function targetInPopup2(el) {
      return el === null || el === void 0 ? void 0 : el.classList.contains("".concat(classPrefix2.value, "-menu__popup"));
    };
    var loopInPopup = function loopInPopup2(el) {
      if (!el)
        return false;
      return targetInPopup(el) || loopInPopup2(el.parentElement);
    };
    var handleMouseLeave = function handleMouseLeave2(e) {
      setTimeout(function() {
        var inPopup = targetInPopup(e.relatedTarget);
        if (isCursorInPopup.value || inPopup)
          return;
        popupVisible.value = false;
      }, 0);
    };
    var handleMouseLeavePopup = function handleMouseLeavePopup2(e) {
      var toElement = e.toElement, relatedTarget = e.relatedTarget;
      var target = toElement || relatedTarget;
      if (target === subPopupRef.value)
        return;
      var isSubmenu = function isSubmenu2(el) {
        return el === submenuRef.value;
      };
      while (target !== null && target !== document && !isSubmenu(target)) {
        target = target.parentNode;
      }
      isCursorInPopup.value = false;
      if (!isSubmenu(target)) {
        popupVisible.value = false;
      }
      closeParentPopup === null || closeParentPopup === void 0 ? void 0 : closeParentPopup(e);
    };
    var handleEnterPopup = function handleEnterPopup2() {
      isCursorInPopup.value = true;
    };
    var handleSubmenuItemClick = function handleSubmenuItemClick2() {
      if (props2.disabled)
        return;
      open(props2.value);
    };
    watch(popupVisible, function(visible) {
      menu.open(props2.value, visible ? "add" : "remove");
    });
    var _toRefs = toRefs(props2), value = _toRefs.value;
    provide("TdSubmenu", reactive({
      value,
      addMenuItem: function addMenuItem(item) {
        menuItems.value.push(item);
        if (submenu) {
          submenu.addMenuItem(item);
        }
      },
      setSubPopup: function setSubPopup2(ref2) {
        subPopupRef.value = ref2;
      },
      closeParentPopup: function closeParentPopup2(e) {
        var related = e.relatedTarget;
        if (loopInPopup(related))
          return;
        handleMouseLeavePopup(e);
      }
    }));
    watch(popupWrapperRef, function() {
      passSubPopupRefToParent(popupWrapperRef.value);
    });
    onMounted(function() {
      var _menu$vMenu;
      menu === null || menu === void 0 || (_menu$vMenu = menu.vMenu) === null || _menu$vMenu === void 0 ? void 0 : _menu$vMenu.add({
        value: props2.value,
        parent: submenu === null || submenu === void 0 ? void 0 : submenu.value,
        vnode: ctx.slots["default"]
      });
      var instance = getCurrentInstance();
      var node = instance.parent;
      while (node && !/^t(head)?menu/i.test((_node = node) === null || _node === void 0 ? void 0 : _node.type.name)) {
        var _node, _node2, _node3;
        if (/submenu/i.test((_node2 = node) === null || _node2 === void 0 ? void 0 : _node2.type.name)) {
          isNested.value = true;
          break;
        }
        node = (_node3 = node) === null || _node3 === void 0 ? void 0 : _node3.parent;
      }
    });
    return {
      classPrefix: classPrefix2,
      menuItems,
      mode,
      theme,
      isHead,
      isNested,
      classes,
      subClass,
      isOpen,
      transitionClass,
      arrowClass,
      overlayInnerClassName,
      overlayClassName,
      submenuClass,
      submenuRef,
      popupWrapperRef,
      popupVisible,
      isCursorInPopup,
      handleEnterPopup,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseLeavePopup,
      handleSubmenuItemClick
    };
  },
  methods: {
    renderPopup: function renderPopup(triggerElement) {
      var _this$popupProps, _this = this;
      var placement = "right-top";
      if (!this.isNested && this.isHead) {
        placement = "bottom-left";
      }
      var popupWrapper = createVNode("div", {
        "ref": "popupWrapperRef",
        "class": ["".concat(this.classPrefix, "-menu__spacer"), "".concat(this.classPrefix, "-menu__spacer--").concat(!this.isNested && this.isHead ? "top" : "left")],
        "onMouseenter": this.handleEnterPopup,
        "onMouseleave": this.handleMouseLeavePopup
      }, [createVNode("ul", {
        "class": "".concat(this.classPrefix, "-menu__popup-wrapper")
      }, [renderContent(this, "default", "content")])]);
      var slots = {
        content: function content() {
          return popupWrapper;
        }
      };
      var realPopup = createVNode(Popup, mergeProps((_this$popupProps = this.popupProps) !== null && _this$popupProps !== void 0 ? _this$popupProps : {}, {
        "overlayInnerClassName": _toConsumableArray(this.overlayInnerClassName),
        "overlayClassName": _toConsumableArray(this.overlayClassName),
        "visible": this.popupVisible,
        "placement": placement
      }), _objectSpread$4({
        "default": function _default3() {
          return [createVNode("div", {
            "ref": "submenuRef",
            "class": _this.submenuClass
          }, [triggerElement])];
        }
      }, slots));
      return realPopup;
    },
    renderHeadSubmenu: function renderHeadSubmenu() {
      var icon = renderTNodeJSX(this, "icon");
      var normalSubmenu = [createVNode("div", {
        "ref": "submenuRef",
        "class": this.submenuClass,
        "onClick": this.handleSubmenuItemClick
      }, [icon, createVNode("span", {
        "class": ["".concat(this.classPrefix, "-menu__content")]
      }, [renderTNodeJSX(this, "title", {
        silent: true
      })])]), createVNode("ul", {
        "style": "opacity: 0; width: 0; height: 0; overflow: hidden"
      }, [renderContent(this, "default", "content")])];
      var needRotate = this.mode === "popup" && this.isNested;
      var triggerElement = [icon, createVNode("span", {
        "class": ["".concat(this.classPrefix, "-menu__content")]
      }, [renderTNodeJSX(this, "title", {
        silent: true
      })]), createVNode(FakeArrow, {
        "overlayClassName": /menu/i.test(this.$parent.$options.name) ? this.arrowClass : null,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)")
        }
      }, null)];
      return this.mode === "normal" ? normalSubmenu : this.renderPopup(triggerElement);
    },
    renderSubmenu: function renderSubmenu() {
      var _this2 = this;
      var hasContent = this.$slots.content || this.$slots["default"];
      var icon = renderTNodeJSX(this, "icon");
      var child = renderContent(this, "default", "content");
      var _getCurrentInstance = getCurrentInstance(), parent2 = _getCurrentInstance.parent;
      var paddingLeft = 44;
      while (parent2 && parent2.type.name !== "TMenu") {
        if (parent2.type.name === "TSubmenu") {
          paddingLeft += 16;
        }
        parent2 = parent2.parent;
      }
      var _useCollapseAnimation = useCollapseAnimation(), beforeEnter = _useCollapseAnimation.beforeEnter, enter = _useCollapseAnimation.enter, afterEnter = _useCollapseAnimation.afterEnter, beforeLeave = _useCollapseAnimation.beforeLeave, leave = _useCollapseAnimation.leave, afterLeave = _useCollapseAnimation.afterLeave;
      var needRotate = this.mode === "popup" && this.isNested;
      var normalSubmenu = [createVNode("div", {
        "ref": "submenuRef",
        "class": this.submenuClass,
        "onClick": this.handleSubmenuItemClick
      }, [icon, createVNode("span", {
        "class": ["".concat(this.classPrefix, "-menu__content")]
      }, [renderTNodeJSX(this, "title", {
        silent: true
      })]), hasContent && createVNode(FakeArrow, {
        "overlayClassName": this.arrowClass,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)")
        }
      }, null)]), createVNode(Transition, {
        "name": this.transitionClass,
        "onBeforeEnter": beforeEnter,
        "onEnter": enter,
        "onAfterEnter": afterEnter,
        "onBeforeLeave": beforeLeave,
        "onLeave": leave,
        "onAfterLeave": afterLeave
      }, {
        "default": function _default3() {
          return [withDirectives(createVNode("ul", {
            "class": _this2.subClass,
            "style": {
              "--padding-left": "".concat(paddingLeft, "px")
            }
          }, [child]), [[vShow, _this2.isOpen]])];
        }
      })];
      var triggerElement = [icon, createVNode("span", {
        "class": ["".concat(this.classPrefix, "-menu__content")]
      }, [renderTNodeJSX(this, "title", {
        silent: true
      })]), createVNode(FakeArrow, {
        "overlayClassName": /menu/i.test(this.$parent.$options.name) ? this.arrowClass : null,
        "overlayStyle": {
          transform: "rotate(".concat(needRotate ? -90 : 0, "deg)"),
          "margin-left": "auto"
        }
      }, null)];
      return this.mode === "normal" ? normalSubmenu : this.renderPopup(triggerElement);
    }
  },
  render: function render5() {
    var child = null;
    var events = {};
    if (this.mode === "popup") {
      events = {
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave
      };
    }
    if (Object.keys(this.$slots).length > 0) {
      child = this.isHead ? this.renderHeadSubmenu() : this.renderSubmenu();
    }
    return createVNode("li", mergeProps({
      "class": this.classes
    }, events), [child]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$3(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$3(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _HeadMenu = defineComponent({
  name: "THeadMenu",
  props: _objectSpread$3({}, props$9),
  setup: function setup24(props2, ctx) {
    var _ctx$slots$default2, _ctx$slots3, _ctx$slots$content2, _ctx$slots4;
    var classPrefix2 = usePrefixClass();
    watchEffect(function() {
      if (ctx.slots.options) {
        log.warnOnce("TMenu", "`options` slot is going to be deprecated, please use `operations` for slot instead.");
      }
    });
    var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue, expanded = _toRefs.expanded;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), activeValue = _useVModel2[0], setActiveValue = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(expanded, props2.defaultExpanded, props2.onExpand, "expanded"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), expandValues = _useDefaultValue2[0], setExpanded = _useDefaultValue2[1];
    var activeValues = ref([]);
    var theme = computed(function() {
      return props2.theme;
    });
    var menuClass = computed(function() {
      return ["".concat(classPrefix2.value, "-menu"), "".concat(classPrefix2.value, "-head-menu"), "".concat(classPrefix2.value, "-menu--").concat(props2.theme)];
    });
    var mode = ref(props2.expandType);
    var submenu = reactive([]);
    var vMenu = new VMenu({
      isMutex: true,
      expandValues: expandValues.value
    });
    provide("TdMenu", {
      mode,
      theme,
      vMenu,
      isHead: true,
      expandValues,
      activeValue,
      activeValues,
      select: function select(value2) {
        setActiveValue(value2);
      },
      open: function open(value2, type) {
        var expanded2 = _toConsumableArray(expandValues.value);
        var index2 = expanded2.indexOf(value2);
        if (mode.value === "popup") {
          if (type === "add") {
            if (index2 === -1) {
              expanded2.push(value2);
            }
          } else if (type === "remove") {
            expanded2.splice(index2, 1);
          }
        } else if (mode.value === "normal" && value2 !== void 0) {
          expanded2.splice(0, 1);
          if (index2 === -1) {
            expanded2.push(value2);
          }
        }
        setExpanded(expanded2);
      }
    });
    var handleTabChange = function handleTabChange2(value2) {
      setActiveValue(value2);
    };
    var handleSubmenuExpand = function handleSubmenuExpand2(value2) {
      var ans = vMenu.getChild(value2);
      submenu.length = 0;
      submenu.push.apply(submenu, _toConsumableArray(ans));
    };
    watch(expandValues, function(value2) {
      if (mode.value === "normal") {
        handleSubmenuExpand(value2[0]);
      }
    });
    var updateActiveValues = function updateActiveValues2(value2) {
      activeValues.value = vMenu.select(value2);
    };
    watch(activeValue, updateActiveValues);
    watch(function() {
      return props2.expandType;
    }, function(value2) {
      mode.value = value2;
    });
    onMounted(function() {
      var _expandValues$value;
      activeValues.value = vMenu.select(activeValue.value);
      if (((_expandValues$value = expandValues.value) === null || _expandValues$value === void 0 ? void 0 : _expandValues$value.length) > 0) {
        handleSubmenuExpand(expandValues.value[0]);
      }
    });
    var renderNormalSubmenu = function renderNormalSubmenu2() {
      var _slot;
      if (submenu.length === 0)
        return null;
      return createVNode("ul", {
        "class": ["".concat(classPrefix2.value, "-head-menu__submenu"), "".concat(classPrefix2.value, "-submenu")]
      }, [createVNode(Tabs, {
        "value": activeValue.value,
        "onChange": handleTabChange
      }, _isSlot$3(_slot = submenu.map(function(item) {
        var _item$vnode$;
        return createVNode(TabPanel, {
          "value": item.value,
          "label": (_item$vnode$ = item.vnode()[0]) === null || _item$vnode$ === void 0 ? void 0 : _item$vnode$.children
        }, null);
      })) ? _slot : {
        "default": function _default3() {
          return [_slot];
        }
      })]);
    };
    var menuRef = ref();
    var innerRef = ref();
    var logoRef = ref();
    var operationRef = ref();
    var initVMenu = function initVMenu2(slots, parentValue) {
      slots.forEach(function(node) {
        var _node$props, _node$type, _node$type2, _node$children;
        var nodeValue = (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props.value;
        if (((_node$type = node.type) === null || _node$type === void 0 ? void 0 : _node$type.name) === "TSubmenu" || ((_node$type2 = node.type) === null || _node$type2 === void 0 ? void 0 : _node$type2.name) === "TMenuItem") {
          vMenu.add({
            value: nodeValue,
            parent: parentValue,
            vnode: node.children["default"]
          });
        }
        if (isFunction_1((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children["default"])) {
          initVMenu2(node.children["default"](), nodeValue);
          return;
        }
        if (isArray_1(node.children)) {
          initVMenu2(node.children, nodeValue);
        }
      });
    };
    initVMenu(((_ctx$slots$default2 = (_ctx$slots3 = ctx.slots)["default"]) === null || _ctx$slots$default2 === void 0 ? void 0 : _ctx$slots$default2.call(_ctx$slots3)) || ((_ctx$slots$content2 = (_ctx$slots4 = ctx.slots).content) === null || _ctx$slots$content2 === void 0 ? void 0 : _ctx$slots$content2.call(_ctx$slots4)) || []);
    return function() {
      var _props2$logo, _ctx$slots$logo, _ctx$slots5, _props2$operations, _ctx$slots$operations, _ctx$slots6, _ctx$slots$options, _ctx$slots7, _ctx$slots$default3, _ctx$slots8, _ctx$slots$content3, _ctx$slots9;
      var logo = ((_props2$logo = props2.logo) === null || _props2$logo === void 0 ? void 0 : _props2$logo.call(props2, h)) || ((_ctx$slots$logo = (_ctx$slots5 = ctx.slots).logo) === null || _ctx$slots$logo === void 0 ? void 0 : _ctx$slots$logo.call(_ctx$slots5));
      var operations = ((_props2$operations = props2.operations) === null || _props2$operations === void 0 ? void 0 : _props2$operations.call(props2, h)) || ((_ctx$slots$operations = (_ctx$slots6 = ctx.slots).operations) === null || _ctx$slots$operations === void 0 ? void 0 : _ctx$slots$operations.call(_ctx$slots6)) || ((_ctx$slots$options = (_ctx$slots7 = ctx.slots).options) === null || _ctx$slots$options === void 0 ? void 0 : _ctx$slots$options.call(_ctx$slots7));
      var content = ((_ctx$slots$default3 = (_ctx$slots8 = ctx.slots)["default"]) === null || _ctx$slots$default3 === void 0 ? void 0 : _ctx$slots$default3.call(_ctx$slots8)) || ((_ctx$slots$content3 = (_ctx$slots9 = ctx.slots).content) === null || _ctx$slots$content3 === void 0 ? void 0 : _ctx$slots$content3.call(_ctx$slots9)) || [];
      return createVNode("div", {
        "class": menuClass.value
      }, [createVNode("div", {
        "class": "".concat(classPrefix2.value, "-head-menu__inner"),
        "ref": innerRef
      }, [logo && createVNode("div", {
        "class": "".concat(classPrefix2.value, "-menu__logo"),
        "ref": logoRef
      }, [logo]), createVNode("ul", {
        "class": "".concat(classPrefix2.value, "-menu"),
        "ref": menuRef
      }, [content]), operations && createVNode("div", {
        "class": "".concat(classPrefix2.value, "-menu__operations"),
        "ref": operationRef
      }, [operations])]), mode.value === "normal" && renderNormalSubmenu()]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$6 = {
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  disabled: Boolean,
  href: {
    type: String,
    "default": ""
  },
  icon: {
    type: Function
  },
  replace: Boolean,
  router: {
    type: Object
  },
  routerLink: Boolean,
  target: {
    type: String,
    validator: function validator27(val) {
      if (!val)
        return true;
      return ["_blank", "_self", "_parent", "_top"].includes(val);
    }
  },
  to: {
    type: [String, Object]
  },
  value: {
    type: [String, Number]
  },
  onClick: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function emitEvent(vm, eventName) {
  var emitEventMethodName;
  if (isString_1(eventName)) {
    emitEventMethodName = getPropsApiByEvent(eventName);
  }
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (isFunction_1(vm.$props[emitEventMethodName])) {
    var _vm$$props;
    (_vm$$props = vm.$props)[emitEventMethodName].apply(_vm$$props, args);
  } else {
    vm.$emit.apply(vm, [eventName].concat(args));
  }
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$2(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _MenuItem = defineComponent({
  name: "TMenuItem",
  props: _objectSpread$2({}, props$6),
  emits: ["click"],
  setup: function setup25(props2, ctx) {
    var _toRefs = toRefs(props2), href = _toRefs.href, _toRefs$target = _toRefs.target, target = _toRefs$target === void 0 ? "_self" : _toRefs$target;
    var classPrefix2 = usePrefixClass();
    var menu = inject("TdMenu");
    var itemRef = ref();
    useRipple(itemRef);
    var submenu = inject("TdSubmenu", null);
    var active = computed(function() {
      return menu.activeValue.value === props2.value;
    });
    var collapsed = computed(function() {
      var _menu$collapsed;
      return (_menu$collapsed = menu.collapsed) === null || _menu$collapsed === void 0 ? void 0 : _menu$collapsed.value;
    });
    var classes = computed(function() {
      var _ref;
      return ["".concat(classPrefix2.value, "-menu__item"), (_ref = {}, _defineProperty$2(_ref, "".concat(classPrefix2.value, "-is-active"), active.value), _defineProperty$2(_ref, "".concat(classPrefix2.value, "-is-disabled"), props2.disabled), _defineProperty$2(_ref, "".concat(classPrefix2.value, "-menu__item--plain"), !ctx.slots.icon && !props2.icon), _defineProperty$2(_ref, "".concat(classPrefix2.value, "-submenu__item"), !!submenu && !menu.isHead), _ref)];
    });
    onMounted(function() {
      var _menu$vMenu;
      menu === null || menu === void 0 || (_menu$vMenu = menu.vMenu) === null || _menu$vMenu === void 0 ? void 0 : _menu$vMenu.add({
        value: props2.value,
        parent: submenu === null || submenu === void 0 ? void 0 : submenu.value,
        vnode: ctx.slots["default"]
      });
    });
    return {
      classPrefix: classPrefix2,
      menu,
      active,
      collapsed,
      classes,
      itemRef,
      href,
      target
    };
  },
  methods: {
    handleClick: function handleClick(e) {
      e.stopPropagation();
      if (this.disabled)
        return;
      this.menu.select(this.value);
      emitEvent(this, "click", {
        e
      });
      if (this.to || this.routerLink && this.href) {
        var router2 = this.router || this.$router;
        var methods = this.replace ? "replace" : "push";
        router2[methods](this.to || this.href)["catch"](function(err) {
          if (err.name !== "NavigationDuplicated" && !err.message.includes("Avoided redundant navigation to current location")) {
            throw err;
          }
        });
      }
    }
  },
  render: function render6() {
    var _this = this;
    var router2 = this.router || this.$router;
    var liContent = createVNode("li", {
      "ref": "itemRef",
      "class": this.classes,
      "onClick": this.handleClick
    }, [renderTNodeJSX(this, "icon"), this.routerLink ? createVNode("a", {
      "href": this.href ? this.href : this.to ? router2 === null || router2 === void 0 ? void 0 : router2.resolve(this.to).href : "",
      "target": this.target,
      "class": "".concat(this.classPrefix, "-menu__item-link"),
      "onClick": function onClick(e) {
        return e.preventDefault();
      }
    }, [createVNode("span", {
      "class": "".concat(this.classPrefix, "-menu__content")
    }, [renderContent(this, "default", "content")])]) : this.href ? createVNode("a", {
      "href": this.href,
      "target": this.target,
      "class": "".concat(this.classPrefix, "-menu__item-link"),
      "onClick": function onClick(e) {
        return _this.disabled && e.preventDefault();
      }
    }, [createVNode("span", {
      "class": "".concat(this.classPrefix, "-menu__content")
    }, [renderContent(this, "default", "content")])]) : createVNode("span", {
      "class": "".concat(this.classPrefix, "-menu__content")
    }, [renderContent(this, "default", "content")])]);
    var instance = getCurrentInstance();
    var node = instance.parent;
    if (this.collapsed && /tmenu/i.test(node === null || node === void 0 ? void 0 : node.type.name)) {
      return createVNode(Tooltip, {
        "content": function content() {
          return renderContent(_this, "default", "content");
        },
        "placement": "right"
      }, _isSlot$2(liContent) ? liContent : {
        "default": function _default3() {
          return [liContent];
        }
      });
    }
    return liContent;
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$5 = {
  title: {
    type: [String, Function]
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _MenuGroup = defineComponent({
  name: "TMenuGroup",
  props: props$5,
  setup: function setup26() {
    var classPrefix2 = usePrefixClass();
    return {
      classPrefix: classPrefix2
    };
  },
  render: function render7() {
    var classPrefix2 = this.classPrefix;
    return createVNode("div", {
      "class": "".concat(classPrefix2, "-menu-group")
    }, [createVNode("div", {
      "class": "".concat(classPrefix2, "-menu-group__title")
    }, [this.title]), renderTNodeJSX(this, "default")]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Menu$1 = withInstall(_Menu);
withInstall(_HeadMenu);
withInstall(_Submenu);
var MenuItem = withInstall(_MenuItem);
withInstall(_MenuGroup);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function observe(element2, root2, callback, marginBottom) {
  if (typeof window === "undefined")
    return null;
  if (!window || !window.IntersectionObserver) {
    callback();
    return null;
  }
  var io = null;
  try {
    io = new window.IntersectionObserver(function(entries) {
      var entry = entries[0];
      if (entry.isIntersecting) {
        callback();
        io.unobserve(element2);
      }
    }, {
      rootMargin: "0px 0px ".concat(marginBottom, "px 0px"),
      root: root2
    });
    io.observe(element2);
  } catch (e) {
    console.error(e);
    callback();
  }
  return io;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$4 = {
  alt: {
    type: String,
    "default": ""
  },
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  hideOnLoadFailed: Boolean,
  icon: {
    type: Function
  },
  image: {
    type: String,
    "default": ""
  },
  imageProps: {
    type: Object
  },
  shape: {
    type: String,
    "default": "circle",
    validator: function validator28(val) {
      if (!val)
        return true;
      return ["circle", "round"].includes(val);
    }
  },
  size: {
    type: String,
    "default": ""
  },
  onError: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$3 = {
  alt: {
    type: String,
    "default": ""
  },
  error: {
    type: [String, Function]
  },
  fallback: {
    type: String,
    "default": ""
  },
  fit: {
    type: String,
    "default": "fill",
    validator: function validator29(val) {
      if (!val)
        return true;
      return ["contain", "cover", "fill", "none", "scale-down"].includes(val);
    }
  },
  gallery: Boolean,
  lazy: Boolean,
  loading: {
    type: [String, Function]
  },
  overlayContent: {
    type: [String, Function]
  },
  overlayTrigger: {
    type: String,
    "default": "always",
    validator: function validator30(val) {
      if (!val)
        return true;
      return ["always", "hover"].includes(val);
    }
  },
  placeholder: {
    type: [String, Function]
  },
  position: {
    type: String,
    "default": "center"
  },
  referrerpolicy: {
    type: String,
    "default": "strict-origin-when-cross-origin",
    validator: function validator31(val) {
      if (!val)
        return true;
      return ["no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"].includes(val);
    }
  },
  shape: {
    type: String,
    "default": "square",
    validator: function validator32(val) {
      if (!val)
        return true;
      return ["circle", "round", "square"].includes(val);
    }
  },
  src: {
    type: [String, Object]
  },
  srcset: {
    type: Object
  },
  onError: Function,
  onLoad: Function
};
const index$5 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _Image = defineComponent({
  name: "TImage",
  props: props$3,
  setup: function setup27(props2) {
    var divRef = ref(null);
    var imgRef = ref(null);
    var io = null;
    var _toRefs = toRefs(props2), src = _toRefs.src;
    var renderTNodeJSX3 = useTNodeJSX();
    onMounted(function() {
      var _imgRef$value;
      if ((_imgRef$value = imgRef.value) !== null && _imgRef$value !== void 0 && _imgRef$value.complete && !props2.lazy) {
        triggerHandleLoad();
      }
      if (!props2.lazy || !divRef.value)
        return;
      var ioObserver = observe(divRef.value, null, handleLoadImage, 0);
      io = ioObserver;
    });
    onUnmounted(function() {
      divRef.value && io && io.unobserve(divRef.value);
    });
    var _useConfig = useConfig("image"), classPrefix2 = _useConfig.classPrefix, globalConfig = _useConfig.globalConfig;
    var imageStrSrc = computed(function() {
      return isFunction_1(globalConfig.value.replaceImageSrc) ? globalConfig.value.replaceImageSrc(props2) : src.value;
    });
    var _useImagePreviewUrl = useImagePreviewUrl(imageStrSrc), previewUrl = _useImagePreviewUrl.previewUrl;
    watch([previewUrl], function() {
      hasError.value = false;
      isLoaded.value = false;
    });
    var shouldLoad = ref(!props2.lazy);
    var handleLoadImage = function handleLoadImage2() {
      shouldLoad.value = true;
    };
    var isLoaded = ref(false);
    var handleLoad = function handleLoad2(e) {
      var _props2$onLoad;
      isLoaded.value = true;
      (_props2$onLoad = props2.onLoad) === null || _props2$onLoad === void 0 ? void 0 : _props2$onLoad.call(props2, {
        e
      });
    };
    var triggerHandleLoad = function triggerHandleLoad2() {
      var loadEvent = new Event("load");
      Object.defineProperty(loadEvent, "target", {
        value: imgRef.value,
        enumerable: true
      });
      handleLoad(loadEvent);
    };
    var hasError = ref(false);
    var handleError2 = function handleError3(e) {
      var _props2$onError;
      hasError.value = true;
      (_props2$onError = props2.onError) === null || _props2$onError === void 0 ? void 0 : _props2$onError.call(props2, {
        e
      });
      if (props2.fallback) {
        previewUrl.value = props2.fallback;
      }
    };
    var hasMouseEvent = computed(function() {
      return props2.overlayTrigger === "hover";
    });
    var imageClasses = computed(function() {
      return ["".concat(classPrefix2.value, "-image"), "".concat(classPrefix2.value, "-image--fit-").concat(props2.fit), "".concat(classPrefix2.value, "-image--position-").concat(props2.position)];
    });
    var shouldShowOverlay = ref(!hasMouseEvent.value);
    var handleToggleOverlay = function handleToggleOverlay2() {
      if (hasMouseEvent.value) {
        shouldShowOverlay.value = !shouldShowOverlay.value;
      }
    };
    var renderPlaceholder = function renderPlaceholder2() {
      var placeholder = renderTNodeJSX3("placeholder");
      if (!placeholder)
        return null;
      return createVNode("div", {
        "class": "".concat(classPrefix2.value, "-image__placeholder")
      }, [placeholder]);
    };
    var renderGalleryShadow = function renderGalleryShadow2() {
      if (!props2.gallery)
        return null;
      return createVNode("div", {
        "class": "".concat(classPrefix2.value, "-image__gallery-shadow")
      }, null);
    };
    var renderOverlay = function renderOverlay2() {
      var overlayContent = renderTNodDefault("overlayContent");
      if (!overlayContent)
        return null;
      return createVNode("div", {
        "class": ["".concat(classPrefix2.value, "-image__overlay-content"), !shouldShowOverlay.value && "".concat(classPrefix2.value, "-image__overlay-content--hidden")]
      }, [overlayContent]);
    };
    function renderImageSrcset() {
      return createVNode("picture", null, [Object.entries(props2.srcset).map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), type = _ref2[0], url = _ref2[1];
        return createVNode("source", {
          "type": type,
          "srcset": url
        }, null);
      }), renderImage()]);
    }
    function renderImage() {
      var url = typeof imageStrSrc.value === "string" ? imageStrSrc.value : previewUrl.value;
      return createVNode("img", {
        "ref": imgRef,
        "src": url,
        "onError": handleError2,
        "onLoad": handleLoad,
        "class": imageClasses.value,
        "alt": props2.alt,
        "referrerpolicy": props2.referrerpolicy
      }, null);
    }
    var renderTNodDefault = useTNodeDefault();
    return function() {
      return createVNode("div", mergeProps({
        "ref": divRef,
        "class": ["".concat(classPrefix2.value, "-image__wrapper"), "".concat(classPrefix2.value, "-image__wrapper--shape-").concat(props2.shape), props2.gallery && "".concat(classPrefix2.value, "-image__wrapper--gallery"), hasMouseEvent.value && "".concat(classPrefix2.value, "-image__wrapper--need-hover")],
        "onMouseenter": handleToggleOverlay,
        "onMouseleave": handleToggleOverlay
      }, omit_1(props2, ["src", "alt", "fit", "position", "shape", "placeholder", "loading", "error", "overlayTrigger", "overlayContent", "lazy", "gallery", "onLoad", "onError"])), [renderPlaceholder(), renderGalleryShadow(), (hasError.value || !shouldLoad.value) && createVNode("div", {
        "class": "".concat(classPrefix2.value, "-image")
      }, null), !(hasError.value || !shouldLoad.value) && (props2.srcset && Object.keys(props2.srcset).length ? renderImageSrcset() : renderImage()), !(hasError.value || !shouldLoad.value) && !isLoaded.value && createVNode("div", {
        "class": "".concat(classPrefix2.value, "-image__loading")
      }, [renderTNodeJSX3("loading") || createVNode(Space, {
        "direction": "vertical",
        "size": 8,
        "align": "center"
      }, {
        "default": function _default3() {
          return [createVNode(image, {
            "size": "24px"
          }, null), typeof props2.loading === "string" ? props2.loading : globalConfig.value.loadingText];
        }
      })]), hasError.value && createVNode("div", {
        "class": "".concat(classPrefix2.value, "-image__error")
      }, [renderTNodDefault("error", {
        defaultNode: createVNode(Space, {
          "direction": "vertical",
          "size": 8,
          "align": "center"
        }, {
          "default": function _default3() {
            return [createVNode(imageError, {
              "size": "24px"
            }, null), typeof props2.error === "string" ? props2.error : globalConfig.value.errorText];
          }
        })
      })]), renderOverlay()]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Image = withInstall(_Image);
const index$4 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Avatar = defineComponent({
  name: "TAvatar",
  props: props$4,
  setup: function setup28(props2) {
    var COMPONENT_NAME = usePrefixClass("avatar");
    var renderContent3 = useContent();
    var renderTNodeJSX3 = useTNodeJSX();
    var _useCommonClassName = useCommonClassName$1(), SIZE = _useCommonClassName.SIZE;
    var avatarGroup = inject("avatarGroup", void 0);
    var avatar = ref(null);
    var avatarChild = ref(null);
    var isImgExist = ref(true);
    var gap = ref(4);
    var scale = ref("");
    var sizeValue = computed(function() {
      return props2.size || (avatarGroup === null || avatarGroup === void 0 ? void 0 : avatarGroup.size);
    });
    var isCustomSize = computed(function() {
      return sizeValue.value && !SIZE.value[sizeValue.value];
    });
    var customAvatarSize = computed(function() {
      return isCustomSize.value ? {
        width: sizeValue.value,
        height: sizeValue.value,
        "font-size": "".concat(Number.parseInt(sizeValue.value, 10) / 2, "px")
      } : {};
    });
    var customImageSize = computed(function() {
      return isCustomSize.value ? {
        height: sizeValue.value,
        width: sizeValue.value
      } : {};
    });
    var customCharacterSize = computed(function() {
      return {
        transform: scale.value
      };
    });
    var handleImgLoadError = function handleImgLoadError2(_ref) {
      var _props2$onError;
      var e = _ref.e;
      var hideOnLoadFailed = props2.hideOnLoadFailed;
      isImgExist.value = !hideOnLoadFailed;
      (_props2$onError = props2.onError) === null || _props2$onError === void 0 ? void 0 : _props2$onError.call(props2, {
        e
      });
    };
    var setScaleParams = function setScaleParams2() {
      var $avatar = avatar.value;
      var $avatarChild = avatarChild.value;
      var avatarWidth = $avatar === null || $avatar === void 0 ? void 0 : $avatar.offsetWidth;
      var avatarChildWidth = $avatarChild === null || $avatarChild === void 0 ? void 0 : $avatarChild.offsetWidth;
      if (gap.value * 2 < avatarWidth) {
        scale.value = avatarChildWidth > avatarWidth - gap.value * 2 ? "scale(".concat((avatarWidth - gap.value * 2) / avatarChildWidth, ")") : "scale(1)";
      }
    };
    onMounted(function() {
      nextTick(function() {
        setScaleParams();
      });
    });
    onUpdated(function() {
      nextTick(function() {
        setScaleParams();
      });
    });
    return function() {
      var _ref2;
      var content = renderContent3("default", "content");
      var icon = renderTNodeJSX3("icon");
      var isIconOnly = icon && !content;
      var shape = props2.shape, image2 = props2.image, alt = props2.alt;
      var avatarClass = ["".concat(COMPONENT_NAME.value), SIZE.value[sizeValue.value], (_ref2 = {}, _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--circle"), shape === "circle"), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--round"), shape === "round"), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "__icon"), !!isIconOnly), _ref2)];
      content = createVNode("span", {
        "ref": avatarChild,
        "style": _objectSpread$1({}, customCharacterSize.value)
      }, [content]);
      if (icon) {
        content = [icon, !isIconOnly ? content : ""];
      }
      if (image2 && isImgExist.value) {
        content = createVNode(Image, mergeProps({
          "style": _objectSpread$1({}, customImageSize.value),
          "src": image2,
          "alt": alt,
          "onError": handleImgLoadError
        }, props2.imageProps), null);
      }
      return createVNode("div", {
        "ref": avatar,
        "class": avatarClass,
        "style": _objectSpread$1({}, customAvatarSize.value)
      }, [content]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$2 = {
  cascading: {
    type: String,
    "default": "right-up",
    validator: function validator33(val) {
      if (!val)
        return true;
      return ["left-up", "right-up"].includes(val);
    }
  },
  collapseAvatar: {
    type: [String, Function]
  },
  max: {
    type: Number
  },
  popupProps: {
    type: Object
  },
  size: {
    type: String,
    "default": ""
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _AvatarGroup = defineComponent({
  name: "TAvatarGroup",
  props: props$2,
  setup: function setup29(props2) {
    provide("avatarGroup", props2);
    var renderTNodeJSX3 = useTNodeJSX();
    var AVATAR_NAME = usePrefixClass("avatar");
    var COMPONENT_NAME = usePrefixClass("avatar-group");
    var renderEllipsisAvatar = function renderEllipsisAvatar2(children) {
      if ((children === null || children === void 0 ? void 0 : children.length) > props2.max) {
        var content = getEllipsisContent(children);
        var outAvatar = children.slice(0, props2.max);
        outAvatar.push(createVNode(_Avatar, {
          "class": "".concat(AVATAR_NAME.value, "__collapse"),
          "size": props2.size
        }, _isSlot$1(content) ? content : {
          "default": function _default3() {
            return [content];
          }
        }));
        return [outAvatar];
      }
      return [children];
    };
    var getEllipsisContent = function getEllipsisContent2(children) {
      return renderTNodeJSX3("collapseAvatar") || "+".concat(children.length - props2.max);
    };
    return function() {
      var _ref;
      var children = renderTNodeJSX3("default");
      var cascading = props2.cascading, max2 = props2.max;
      var groupClass = ["".concat(COMPONENT_NAME.value), (_ref = {}, _defineProperty$2(_ref, "".concat(AVATAR_NAME.value, "--offset-right"), cascading === "right-up"), _defineProperty$2(_ref, "".concat(AVATAR_NAME.value, "--offset-left"), cascading === "left-up"), _ref)];
      var content = max2 && max2 >= 0 ? [renderEllipsisAvatar(children)] : [children];
      return createVNode("div", {
        "class": groupClass
      }, [content]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Avatar = withInstall(_Avatar);
withInstall(_AvatarGroup);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$1 = {
  actions: {
    type: [String, Function]
  },
  avatar: {
    type: [String, Function]
  },
  bordered: {
    type: Boolean,
    "default": true
  },
  content: {
    type: [String, Function]
  },
  cover: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  description: {
    type: [String, Function]
  },
  footer: {
    type: [String, Function]
  },
  header: {
    type: [String, Function]
  },
  headerBordered: Boolean,
  hoverShadow: Boolean,
  loading: {
    type: [Boolean, Function],
    "default": false
  },
  shadow: Boolean,
  size: {
    type: String,
    "default": "medium",
    validator: function validator34(val) {
      if (!val)
        return true;
      return ["medium", "small"].includes(val);
    }
  },
  status: {
    type: String,
    "default": ""
  },
  subtitle: {
    type: [String, Function]
  },
  theme: {
    type: String,
    "default": "normal",
    validator: function validator35(val) {
      if (!val)
        return true;
      return ["normal", "poster1", "poster2"].includes(val);
    }
  },
  title: {
    type: [String, Function]
  }
};
const index$3 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _Card = defineComponent({
  name: "TCard",
  props: props$1,
  setup: function setup30(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX3 = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("card");
    var _useCommonClassName = useCommonClassName$1(), SIZE = _useCommonClassName.SIZE;
    var baseCls = computed(function() {
      var defaultClass = [COMPONENT_NAME.value];
      if (props2.size === "small")
        defaultClass.push("".concat(SIZE.value[props2.size]));
      if (props2.bordered)
        defaultClass.push("".concat(COMPONENT_NAME.value, "--bordered"));
      if (props2.shadow)
        defaultClass.push("".concat(COMPONENT_NAME.value, "--shadow"));
      if (props2.hoverShadow)
        defaultClass.push("".concat(COMPONENT_NAME.value, "--shadow-hover"));
      return defaultClass;
    });
    var headerCls = computed(function() {
      var defaultClass = ["".concat(COMPONENT_NAME.value, "__header")];
      return props2.headerBordered ? defaultClass.concat("".concat(COMPONENT_NAME.value, "__title--bordered")) : ["".concat(COMPONENT_NAME.value, "__header")];
    });
    var headerWrapperCls = usePrefixClass("card__header-wrapper");
    var headerAvatarCls = usePrefixClass("card__avatar");
    var headerTitleCls = usePrefixClass("card__title");
    var headerSubTitleCls = usePrefixClass("card__subtitle");
    var headerDescriptionCls = usePrefixClass("card__description");
    var actionsCls = usePrefixClass("card__actions");
    var bodyCls = usePrefixClass("card__body");
    var coverCls = usePrefixClass("card__cover");
    var footerCls = usePrefixClass("card__footer");
    var footerWrapperCls = usePrefixClass("card__footer-wrapper");
    var isPoster2 = computed(function() {
      return props2.theme === "poster2";
    });
    var showTitle = computed(function() {
      return props2.title || slots.title;
    });
    var showHeader = computed(function() {
      return props2.header || slots.header;
    });
    var showSubtitle = computed(function() {
      return props2.subtitle || slots.subtitle;
    });
    var showAvatar = computed(function() {
      return props2.avatar || slots.avatar;
    });
    var showDescription = computed(function() {
      return props2.description || slots.description;
    });
    var showStatus = computed(function() {
      return props2.status || slots.status;
    });
    var showActions = computed(function() {
      return props2.actions || slots.actions;
    });
    var showFooter = computed(function() {
      return props2.footer || slots.footer;
    });
    var showCover = computed(function() {
      return props2.cover || slots.cover;
    });
    var showLoading = computed(function() {
      return props2.loading || slots.loading;
    });
    var showContent = computed(function() {
      return props2.content || slots.content || props2["default"] || slots["default"];
    });
    var isHeaderRender = computed(function() {
      return showHeader.value || showTitle.value || showSubtitle.value || showDescription.value || showAvatar.value || showStatus.value && isPoster2.value || showActions.value && !isPoster2.value;
    });
    var isFooterRender = computed(function() {
      return showFooter.value || showActions.value && isPoster2.value;
    });
    var renderHeader = function renderHeader2() {
      if (showHeader.value)
        return createVNode("div", {
          "class": headerCls.value
        }, [renderTNodeJSX3("header")]);
      return createVNode("div", {
        "class": headerCls.value
      }, [createVNode("div", {
        "class": headerWrapperCls.value
      }, [showAvatar.value && createVNode("div", {
        "class": headerAvatarCls.value
      }, [renderTNodeJSX3("avatar")]), createVNode("div", null, [showTitle.value && createVNode("span", {
        "class": headerTitleCls.value
      }, [renderTNodeJSX3("title")]), showSubtitle.value && createVNode("span", {
        "class": headerSubTitleCls.value
      }, [renderTNodeJSX3("subtitle")]), showDescription.value && createVNode("p", {
        "class": headerDescriptionCls.value
      }, [renderTNodeJSX3("description")])])]), showActions.value && !isPoster2.value && createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX3("actions")]), showStatus.value && createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX3("status")])]);
    };
    var renderCover = function renderCover2() {
      var textCover = isString_1(props2.cover);
      return createVNode("div", {
        "class": coverCls.value
      }, [textCover ? createVNode("img", {
        "src": props2.cover
      }, null) : renderTNodeJSX3("cover")]);
    };
    return function() {
      var content = createVNode("div", {
        "class": baseCls.value
      }, [isHeaderRender.value ? renderHeader() : null, showCover.value ? renderCover() : null, showContent.value && createVNode("div", {
        "class": bodyCls.value
      }, [renderTNodeJSX3("default") || renderTNodeJSX3("content")]), isFooterRender.value && createVNode("div", {
        "class": footerCls.value
      }, [createVNode("div", {
        "class": footerWrapperCls.value
      }, [renderTNodeJSX3("footer")]), showActions.value && isPoster2.value && createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX3("actions")])])]);
      if (showLoading.value) {
        return renderTNodeJSX3("loading") || createVNode(Loading, null, _isSlot(content) ? content : {
          "default": function _default3() {
            return [content];
          }
        });
      }
      return content;
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Card = withInstall(_Card);
const index$2 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function useAction(action) {
  var instance = getCurrentInstance();
  var renderTNodeJSX3 = useTNodeJSX();
  var getDefaultConfirmBtnProps = function getDefaultConfirmBtnProps2(options) {
    var _omit;
    var globalConfirm = options.globalConfirm, theme = options.theme, globalConfirmBtnTheme = options.globalConfirmBtnTheme;
    var defaultTheme = ((_omit = omit_1(globalConfirmBtnTheme, ["info"])) === null || _omit === void 0 ? void 0 : _omit[theme]) || "primary";
    var props2 = {
      theme: defaultTheme,
      size: options.size,
      onClick: function onClick(e) {
        action.confirmBtnAction(e);
      }
    };
    if (isString_1(globalConfirm)) {
      props2.content = globalConfirm;
    } else if (isObject_1(globalConfirm)) {
      props2 = _objectSpread(_objectSpread({}, props2), globalConfirm);
    }
    return props2;
  };
  var getDefaultCancelBtnProps = function getDefaultCancelBtnProps2(options) {
    var globalCancel = options.globalCancel;
    var props2 = {
      theme: "default",
      size: options.size,
      onClick: function onClick(e) {
        action.cancelBtnAction(e);
      }
    };
    if (isString_1(globalCancel)) {
      props2.content = globalCancel;
    } else if (isObject_1(globalCancel)) {
      props2 = _objectSpread(_objectSpread({}, props2), globalCancel);
    }
    return props2;
  };
  var getButtonByProps = function getButtonByProps2(button, defaultButton, className) {
    var newOptions = defaultButton;
    if (isString_1(button)) {
      newOptions.content = button;
    } else if (isObject_1(button)) {
      newOptions = _objectSpread(_objectSpread({}, newOptions), button);
    }
    return createVNode(Button, mergeProps({
      "class": className
    }, newOptions), null);
  };
  var getConfirmBtn = function getConfirmBtn2(options) {
    var confirmBtn = options.confirmBtn, className = options.className;
    if (confirmBtn === null)
      return null;
    if (confirmBtn && instance.slots.confirmBtn) {
      console.warn("Both $props.confirmBtn and $scopedSlots.confirmBtn exist, $props.confirmBtn is preferred.");
    }
    var defaultButtonProps = getDefaultConfirmBtnProps(options);
    if (!confirmBtn && !instance.slots.confirmBtn) {
      return createVNode(Button, mergeProps({
        "class": className
      }, defaultButtonProps), null);
    }
    if (confirmBtn && ["string", "object"].includes(_typeof(confirmBtn))) {
      return getButtonByProps(confirmBtn, defaultButtonProps, className);
    }
    return renderTNodeJSX3("confirmBtn");
  };
  var getCancelBtn = function getCancelBtn2(options) {
    var cancelBtn = options.cancelBtn, className = options.className;
    if (cancelBtn === null)
      return null;
    if (cancelBtn && instance.slots.cancelBtn) {
      console.warn("Both $props.cancelBtn and $scopedSlots.cancelBtn exist, $props.cancelBtn is preferred.");
    }
    var defaultButtonProps = getDefaultCancelBtnProps(options);
    if (!cancelBtn && !instance.slots.cancelBtn) {
      return createVNode(Button, mergeProps({
        "class": className
      }, defaultButtonProps), null);
    }
    if (cancelBtn && ["string", "object"].includes(_typeof(cancelBtn))) {
      return getButtonByProps(cancelBtn, defaultButtonProps);
    }
    return renderTNodeJSX3("cancelBtn");
  };
  return {
    getConfirmBtn,
    getCancelBtn
  };
}
function useSameTarget(handleClick2) {
  var MOUSEDOWN_TARGET = false;
  var MOUSEUP_TARGET = false;
  var onClick = function onClick2(e) {
    if (MOUSEDOWN_TARGET && MOUSEUP_TARGET) {
      handleClick2(e);
    }
    MOUSEDOWN_TARGET = false;
    MOUSEUP_TARGET = false;
  };
  var onMousedown = function onMousedown2(e) {
    MOUSEDOWN_TARGET = e.target === e.currentTarget;
  };
  var onMouseup = function onMouseup2(e) {
    MOUSEUP_TARGET = e.target === e.currentTarget;
  };
  return {
    onClick,
    onMousedown,
    onMouseup
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function getScrollbarWidthWithCSS() {
  var defaultScrollbarWidth = 6;
  if (typeof navigator === "undefined" || !navigator)
    return defaultScrollbarWidth;
  if (/(Chrome|Safari)/i.test(navigator.userAgent))
    return defaultScrollbarWidth;
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  if (/Firefox/.test(navigator.userAgent)) {
    scrollbarWidth -= 4;
  }
  if (getIEVersion() <= 11) {
    scrollbarWidth = 12;
  }
  return scrollbarWidth;
}
function getScrollbarWidth() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props = {
  attach: {
    type: [String, Function],
    "default": ""
  },
  body: {
    type: [String, Function]
  },
  cancelBtn: {
    type: [String, Object, Function],
    "default": ""
  },
  closeBtn: {
    type: [String, Boolean, Function]
  },
  closeOnEscKeydown: {
    type: Boolean,
    "default": void 0
  },
  closeOnOverlayClick: {
    type: Boolean,
    "default": void 0
  },
  confirmBtn: {
    type: [String, Object, Function],
    "default": ""
  },
  "default": {
    type: [String, Function]
  },
  destroyOnClose: Boolean,
  footer: {
    type: [Boolean, Function],
    "default": true
  },
  header: {
    type: [String, Boolean, Function],
    "default": true
  },
  mode: {
    type: String,
    "default": "overlay",
    validator: function validator36(val) {
      if (!val)
        return true;
      return ["overlay", "push"].includes(val);
    }
  },
  placement: {
    type: String,
    "default": "right",
    validator: function validator37(val) {
      if (!val)
        return true;
      return ["left", "right", "top", "bottom"].includes(val);
    }
  },
  preventScrollThrough: {
    type: Boolean,
    "default": true
  },
  showInAttachedElement: Boolean,
  showOverlay: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    "default": void 0
  },
  sizeDraggable: Boolean,
  visible: Boolean,
  zIndex: {
    type: Number
  },
  onCancel: Function,
  onClose: Function,
  onCloseBtnClick: Function,
  onConfirm: Function,
  onEscKeydown: Function,
  onOverlayClick: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var useDrag = function useDrag2(props2) {
  var isSizeDragging = ref(false);
  var draggedSizeValue = ref(null);
  var enableDrag = function enableDrag2() {
    document.addEventListener("mouseup", handleMouseup, true);
    document.addEventListener("mousemove", handleMousemove, true);
    isSizeDragging.value = true;
  };
  var handleMouseup = function handleMouseup2() {
    document.removeEventListener("mouseup", handleMouseup2, true);
    document.removeEventListener("mousemove", handleMousemove, true);
    isSizeDragging.value = false;
  };
  var handleMousemove = function handleMousemove2(e) {
    var x = e.x, y = e.y;
    var maxHeight = document.documentElement.clientHeight;
    var maxWidth = document.documentElement.clientWidth;
    var offsetHeight = 8;
    var offsetWidth = 8;
    if (isSizeDragging.value && props2.sizeDraggable) {
      if (props2.placement === "right") {
        var moveLeft = Math.min(Math.max(maxWidth - x + offsetWidth, offsetWidth), maxWidth);
        draggedSizeValue.value = "".concat(moveLeft, "px");
      }
      if (props2.placement === "left") {
        var moveRight = Math.min(Math.max(x + offsetWidth, offsetWidth), maxWidth);
        draggedSizeValue.value = "".concat(moveRight, "px");
      }
      if (props2.placement === "top") {
        var moveBottom = Math.min(Math.max(y + offsetHeight, offsetHeight), maxHeight);
        draggedSizeValue.value = "".concat(moveBottom, "px");
      }
      if (props2.placement === "bottom") {
        var moveTop = Math.min(Math.max(maxHeight - y + offsetHeight, offsetHeight), maxHeight);
        draggedSizeValue.value = "".concat(moveTop, "px");
      }
    }
  };
  var draggableLineStyles = computed(function() {
    var _ref;
    var isHorizontal = ["right", "left"].includes(props2.placement);
    var oppositeMap = {
      left: "right",
      right: "left",
      top: "bottom",
      bottom: "top"
    };
    return _ref = {
      zIndex: 1,
      position: "absolute",
      background: "transparent"
    }, _defineProperty$2(_ref, oppositeMap[props2.placement], 0), _defineProperty$2(_ref, "width", isHorizontal ? "16px" : "100%"), _defineProperty$2(_ref, "height", isHorizontal ? "100%" : "16px"), _defineProperty$2(_ref, "cursor", isHorizontal ? "col-resize" : "row-resize"), _ref;
  });
  return {
    draggedSizeValue,
    enableDrag,
    draggableLineStyles
  };
};
const index$1 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var key = 1;
var _Drawer = defineComponent({
  name: "TDrawer",
  inheritAttrs: false,
  props,
  emits: ["update:visible"],
  setup: function setup31(props2, context) {
    var destroyOnCloseVisible = ref(false);
    var isVisible = ref(false);
    var styleEl = ref();
    var styleTimer = ref();
    var _useConfig = useConfig("drawer"), globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
      CloseIcon: close
    }), CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var renderTNodeJSX3 = useTNodeJSX();
    var renderContent3 = useContent();
    var COMPONENT_NAME = usePrefixClass("drawer");
    var _useDrag = useDrag(props2), draggedSizeValue = _useDrag.draggedSizeValue, enableDrag = _useDrag.enableDrag, draggableLineStyles = _useDrag.draggableLineStyles;
    var teleportElement = useTeleport(function() {
      return props2.attach;
    });
    var confirmBtnAction = function confirmBtnAction2(e) {
      var _props2$onConfirm;
      (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 ? void 0 : _props2$onConfirm.call(props2, {
        e
      });
    };
    var cancelBtnAction = function cancelBtnAction2(e) {
      var _props2$onCancel;
      (_props2$onCancel = props2.onCancel) === null || _props2$onCancel === void 0 ? void 0 : _props2$onCancel.call(props2, {
        e
      });
      closeDrawer({
        trigger: "cancel",
        e
      });
    };
    var _useAction = useAction({
      confirmBtnAction,
      cancelBtnAction
    }), getConfirmBtn = _useAction.getConfirmBtn, getCancelBtn = _useAction.getCancelBtn;
    var drawerEle = ref(null);
    var drawerClasses = computed(function() {
      var _ref;
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.placement), (_ref = {}, _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--open"), isVisible.value), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--attach"), props2.showInAttachedElement), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--without-mask"), !props2.showOverlay), _ref)];
    });
    var sizeValue = computed(function() {
      var _props2$size;
      if (draggedSizeValue.value)
        return draggedSizeValue.value;
      var size2 = (_props2$size = props2.size) !== null && _props2$size !== void 0 ? _props2$size : globalConfig.value.size;
      var defaultSize = isNaN(Number(size2)) ? size2 : "".concat(size2, "px");
      return {
        small: "300px",
        medium: "500px",
        large: "760px"
      }[size2] || defaultSize;
    });
    var wrapperStyles = computed(function() {
      return {
        transform: isVisible.value ? "translateX(0)" : void 0,
        width: ["left", "right"].includes(props2.placement) ? sizeValue.value : "",
        height: ["top", "bottom"].includes(props2.placement) ? sizeValue.value : ""
      };
    });
    var wrapperClasses = computed(function() {
      return ["".concat(COMPONENT_NAME.value, "__content-wrapper"), "".concat(COMPONENT_NAME.value, "__content-wrapper--").concat(props2.placement)];
    });
    var parentNode = computed(function() {
      return drawerEle.value && drawerEle.value.parentNode;
    });
    var modeAndPlacement = computed(function() {
      return [props2.mode, props2.placement].join();
    });
    var footerStyle = computed(function() {
      return {
        display: "flex",
        justifyContent: props2.placement === "right" ? "flex-start" : "flex-end"
      };
    });
    var handleEscKeydown = function handleEscKeydown2(e) {
      var _props2$closeOnEscKey;
      if ((_props2$closeOnEscKey = props2.closeOnEscKeydown) !== null && _props2$closeOnEscKey !== void 0 ? _props2$closeOnEscKey : globalConfig.value.closeOnEscKeydown && e.key === "Escape") {
        var _props2$onEscKeydown;
        (_props2$onEscKeydown = props2.onEscKeydown) === null || _props2$onEscKeydown === void 0 ? void 0 : _props2$onEscKeydown.call(props2, {
          e
        });
        closeDrawer({
          trigger: "esc",
          e
        });
      }
    };
    var clearStyleFunc = function clearStyleFunc2() {
      clearTimeout(styleTimer.value);
      styleTimer.value = setTimeout(function() {
        var _styleEl$value, _styleEl$value$remove;
        (_styleEl$value = styleEl.value) === null || _styleEl$value === void 0 || (_styleEl$value = _styleEl$value.parentNode) === null || _styleEl$value === void 0 || (_styleEl$value$remove = _styleEl$value.removeChild) === null || _styleEl$value$remove === void 0 ? void 0 : _styleEl$value$remove.call(_styleEl$value, styleEl.value);
      }, 150);
    };
    var handlePushMode = function handlePushMode2() {
      if (props2.mode !== "push")
        return;
      nextTick(function() {
        if (!parentNode.value)
          return;
        parentNode.value.style.cssText = "transition: margin 300ms cubic-bezier(0.7, 0.3, 0.1, 1) 0s;";
      });
    };
    var updatePushMode = function updatePushMode2() {
      if (!parentNode.value)
        return;
      if (props2.mode !== "push" || !parentNode.value)
        return;
      var marginStr = {
        left: "margin: 0 0 0 ".concat(sizeValue.value),
        right: "margin: 0 0 0 -".concat(sizeValue.value),
        top: "margin: ".concat(sizeValue.value, " 0 0 0"),
        bottom: "margin: -".concat(sizeValue.value, " 0 0 0")
      }[props2.placement];
      if (isVisible.value) {
        parentNode.value.style.cssText += marginStr;
      } else {
        parentNode.value.style.cssText = parentNode.value.style.cssText.replace(/margin:.+;/, "");
      }
    };
    var getDefaultFooter = function getDefaultFooter2() {
      var confirmBtn = getConfirmBtn({
        confirmBtn: props2.confirmBtn,
        globalConfirm: globalConfig.value.confirm,
        className: "".concat(COMPONENT_NAME.value, "__confirm")
      });
      var cancelBtn = getCancelBtn({
        cancelBtn: props2.cancelBtn,
        globalCancel: globalConfig.value.cancel,
        className: "".concat(COMPONENT_NAME.value, "__cancel")
      });
      return createVNode("div", {
        "style": footerStyle.value
      }, [props2.placement === "right" ? confirmBtn : null, cancelBtn, props2.placement !== "right" ? confirmBtn : null]);
    };
    watch(modeAndPlacement, function() {
      handlePushMode();
    }, {
      immediate: true
    });
    watch(function() {
      return props2.visible;
    }, function(value) {
      if (isServer$1)
        return;
      if (value) {
        if (!props2.showInAttachedElement && props2.preventScrollThrough) {
          styleEl.value && document.head.appendChild(styleEl.value);
        }
      } else {
        clearStyleFunc();
      }
      if (props2.destroyOnClose) {
        if (value) {
          destroyOnCloseVisible.value = false;
          setTimeout(function() {
            isVisible.value = true;
          });
        } else {
          isVisible.value = false;
          setTimeout(function() {
            destroyOnCloseVisible.value = true;
          }, 200);
        }
      } else if (destroyOnCloseVisible.value === true && value) {
        destroyOnCloseVisible.value = false;
        setTimeout(function() {
          isVisible.value = true;
        });
      } else {
        isVisible.value = value;
      }
    }, {
      immediate: true
    });
    var handleCloseBtnClick = function handleCloseBtnClick2(e) {
      var _props2$onCloseBtnCli;
      (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 ? void 0 : _props2$onCloseBtnCli.call(props2, {
        e
      });
      closeDrawer({
        trigger: "close-btn",
        e
      });
    };
    var handleWrapperClick = function handleWrapperClick2(e) {
      var _props2$onOverlayClic, _props2$closeOnOverla;
      (_props2$onOverlayClic = props2.onOverlayClick) === null || _props2$onOverlayClic === void 0 ? void 0 : _props2$onOverlayClic.call(props2, {
        e
      });
      if ((_props2$closeOnOverla = props2.closeOnOverlayClick) !== null && _props2$closeOnOverla !== void 0 ? _props2$closeOnOverla : globalConfig.value.closeOnOverlayClick) {
        closeDrawer({
          trigger: "overlay",
          e
        });
      }
    };
    var onKeyDown = function onKeyDown2(e) {
      var _props2$closeOnEscKey2;
      if (((_props2$closeOnEscKey2 = props2.closeOnEscKeydown) !== null && _props2$closeOnEscKey2 !== void 0 ? _props2$closeOnEscKey2 : globalConfig.value.closeOnEscKeydown) && e.key === "Escape") {
        var _props2$onEscKeydown2;
        (_props2$onEscKeydown2 = props2.onEscKeydown) === null || _props2$onEscKeydown2 === void 0 ? void 0 : _props2$onEscKeydown2.call(props2, {
          e
        });
        closeDrawer({
          trigger: "esc",
          e
        });
      }
    };
    var closeDrawer = function closeDrawer2(params) {
      var _props2$onClose;
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 ? void 0 : _props2$onClose.call(props2, params);
      context.emit("update:visible", false);
    };
    onUpdated(function() {
      updatePushMode();
    });
    onMounted(function() {
      var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
      var scrollWidth = hasScrollBar ? getScrollbarWidth() : 0;
      styleEl.value = document.createElement("style");
      styleEl.value.dataset.id = "td_drawer_".concat(+/* @__PURE__ */ new Date(), "_").concat(key += 1);
      styleEl.value.innerHTML = "\n        html body {\n          overflow-y: hidden;\n          transition: margin 300ms cubic-bezier(0.7, 0.3, 0.1, 1) 0s;\n          ".concat(props2.mode === "push" ? "" : "width: calc(100% - ".concat(scrollWidth, "px);"), "\n        }\n      ");
      if (isVisible.value && !props2.showInAttachedElement && props2.preventScrollThrough) {
        document.head.appendChild(styleEl.value);
      }
      window.addEventListener("keydown", handleEscKeydown);
    });
    onBeforeUnmount(function() {
      clearStyleFunc();
      window.removeEventListener("keydown", handleEscKeydown);
    });
    return function() {
      if (destroyOnCloseVisible.value)
        return;
      var body = renderContent3("body", "default");
      var headerContent = renderTNodeJSX3("header");
      var defaultFooter = getDefaultFooter();
      return createVNode(Teleport, {
        "disabled": !props2.attach || !teleportElement.value,
        "to": teleportElement.value
      }, {
        "default": function _default3() {
          return [createVNode("div", mergeProps({
            "ref": drawerEle,
            "class": drawerClasses.value,
            "style": {
              zIndex: props2.zIndex
            },
            "onKeydown": onKeyDown,
            "tabindex": 0
          }, context.attrs), [props2.showOverlay && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__mask"),
            "onClick": handleWrapperClick
          }, null), createVNode("div", {
            "class": wrapperClasses.value,
            "style": wrapperStyles.value
          }, [headerContent && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__header")
          }, [headerContent]), props2.closeBtn && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__close-btn"),
            "onClick": handleCloseBtnClick
          }, [renderTNodeJSX3("closeBtn", createVNode(CloseIcon$1, null, null))]), createVNode("div", {
            "class": ["".concat(COMPONENT_NAME.value, "__body"), "narrow-scrollbar"]
          }, [body]), props2.footer && createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "__footer")
          }, [renderTNodeJSX3("footer", defaultFooter)]), props2.sizeDraggable && createVNode("div", {
            "style": draggableLineStyles.value,
            "onMousedown": enableDrag
          }, null)])])];
        }
      });
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Drawer = withInstall(_Drawer);
const index = "";
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn2, params) {
  const newParams = {};
  for (const key2 in params) {
    const value = params[key2];
    newParams[key2] = isArray(value) ? value.map(fn2) : fn2(value);
  }
  return newParams;
}
const noop = () => {
};
const isArray = Array.isArray;
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash2 = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash2 = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash2,
    path,
    query,
    hash: hash2
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key2 in a) {
    if (!isSameRouteLocationParamsValue(a[key2], b[key2]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset2) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset2.behavior,
    left: elRect.left - docRect.left - (offset2.left || 0),
    top: elRect.top - docRect.top - (offset2.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key2, scrollPosition) {
  scrollPositions.set(key2, scrollPosition);
}
function getSavedScrollPosition(key2) {
  const scroll = scrollPositions.get(key2);
  scrollPositions.delete(key2);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search, hash: hash2 } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash2.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash2.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search + hash2;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history2.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(
      historyState.value.back,
      // keep back and forward entries but override current position
      to,
      historyState.value.forward,
      true
    ), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    // it's overridden right after
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error2, type) {
  return error2 instanceof Error && NavigationFailureSymbol in error2 && (type == null || !!(error2.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys2 = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys2.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key2 = keys2[i - 1];
      params[key2.name] = value && key2.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys: keys2,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last2 = score[score.length - 1];
  return score.length > 0 && last2[last2.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent2, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent: parent2,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent2) {
    if (!matcher.record.aliasOf === !parent2.record.aliasOf)
      parent2.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent2, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent2 && path[0] !== "/") {
        const parentPath = parent2.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent2.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent2, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
        insertMatcher(matcher);
      }
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          matcher.keys.filter((k) => !k.optional).map((k) => k.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
      );
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys2) {
  const newParams = {};
  for (const key2 of keys2) {
    if (key2 in params)
      newParams[key2] = params[key2];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props2 = record.props || false;
  if ("component" in record) {
    propsObject.default = props2;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props2 === "object" ? props2[name] : props2;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key2 in defaults) {
    options[key2] = key2 in partialOptions ? partialOptions[key2] : defaults[key2];
  }
  return options;
}
function isRecordChildOf(record, parent2) {
  return parent2.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key2 = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key2 in query) {
      let currentValue = query[key2];
      if (!isArray(currentValue)) {
        currentValue = query[key2] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key2] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key2 in query) {
    const value = query[key2];
    key2 = encodeQueryKey(key2);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key2;
      }
      continue;
    }
    const values = isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key2;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key2 in query) {
    const value = query[key2];
    if (value !== void 0) {
      normalizedQuery[key2] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add2(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset2() {
    handlers = [];
  }
  return {
    add: add2,
    list: () => handlers.slice(),
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props2) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router2.resolve(unref(props2.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router2[unref(props2.replace) ? "replace" : "push"](
        unref(props2.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props2, { slots }) {
    const link = reactive(useLink(props2));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props2.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props2.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props2.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props2.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key2 in inner) {
    const innerValue = inner[key2];
    const outerValue = outer[key2];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props2, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props2.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props2.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props2.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent2;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent2 = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent2);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key2 in targetParams) {
        if (targetParams[key2] == null) {
          delete targetParams[key2];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash2 = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash2),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: hash2,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in newTargetLocation ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
          force,
          replace: replace2
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error2) => isNavigationFailure(error2) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error2,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error2 : markAsReady(error2)
    ) : (
      // reject any unknown error
      triggerError(error2, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data, failure2.to.state) : data,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error2 = checkCanceledNavigation(to, from);
    return error2 ? Promise.reject(error2) : Promise.resolve();
  }
  function runWithContext(fn2) {
    const app2 = installedApps.values().next().value;
    return app2 && typeof app2.runWithContext === "function" ? app2.runWithContext(fn2) : fn2();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(
      err,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error2 = checkCanceledNavigation(toLocation, from);
    if (error2)
      return error2;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info2) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info2.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error2) => {
        if (isNavigationFailure(
          error2,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error2;
        }
        if (isNavigationFailure(
          error2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error2.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info2.delta && info2.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info2.delta) {
          routerHistory.go(-info2.delta, false);
        }
        return triggerError(error2, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info2.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info2.delta, false);
          } else if (info2.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error2, to, from) {
    markAsReady(error2);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error2, to, from));
    } else {
      console.error(error2);
    }
    return Promise.reject(error2);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app2) {
      const router3 = this;
      app2.component("RouterLink", RouterLink);
      app2.component("RouterView", RouterView);
      app2.config.globalProperties.$router = router3;
      Object.defineProperty(app2.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key2 in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key2, {
          get: () => currentRoute.value[key2],
          enumerable: true
        });
      }
      app2.provide(routerKey, router3);
      app2.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app2.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app2.unmount;
      installedApps.add(app2);
      app2.unmount = function() {
        installedApps.delete(app2);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router2;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
const index_vue_vue_type_style_index_0_scoped_72508450_lang = "";
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props2) {
    target[key2] = val;
  }
  return target;
};
const _hoisted_1$2 = { class: "logo" };
const _hoisted_2$1 = ["width", "src"];
const _hoisted_3$1 = { class: "logo" };
const _hoisted_4 = ["src"];
const _sfc_main$3 = {
  __name: "index",
  props: {
    isMobile: Boolean
  },
  setup(__props, { expose: __expose }) {
    const props2 = __props;
    const isMobile = toRef(props2, "isMobile");
    const collapsed = ref(false);
    const visible = ref(false);
    const iconUrl = ref("https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png");
    const logoUrl = ref("https://tdesign.gtimg.com/site/baseLogo-light.png");
    const imgUrl = ref(logoUrl.value);
    useRouter();
    const defaultMenu = ref("");
    const changeCollapsed = () => {
      collapsed.value = !collapsed.value;
      imgUrl.value = collapsed.value ? iconUrl.value : logoUrl.value;
    };
    const changeSlider = () => {
      if (document.body.clientWidth <= 1080) {
        collapsed.value = true;
        imgUrl.value = collapsed.value ? iconUrl.value : logoUrl.value;
      } else {
        collapsed.value = false;
        imgUrl.value = collapsed.value ? iconUrl.value : logoUrl.value;
      }
    };
    const handleClick2 = () => {
      visible.value = true;
    };
    const changeHandler = (active) => {
      localStorage.setItem("menu_active", active);
      const menu_active = localStorage.getItem("menu_active");
      defaultMenu.value = menu_active;
    };
    onBeforeMount(() => {
      if (localStorage.getItem("menu_active") == null) {
        localStorage.setItem("menu_active", defaultMenu.value ? defaultMenu.value : "dashboard");
      } else {
        const menu_active = localStorage.getItem("menu_active");
        defaultMenu.value = menu_active;
      }
    });
    __expose({
      handleClick: handleClick2,
      changeSlider
    });
    return (_ctx, _cache) => {
      const _component_t_icon = Icon;
      const _component_t_menu_item = MenuItem;
      const _component_t_button = Button;
      const _component_t_menu = Menu$1;
      const _component_t_drawer = Drawer;
      return openBlock(), createElementBlock(Fragment, null, [
        !isMobile.value ? (openBlock(), createBlock(_component_t_menu, {
          key: 0,
          class: "sliderbar-menu",
          theme: "light",
          "default-value": defaultMenu.value,
          collapsed: collapsed.value,
          onChange: changeHandler,
          height: "100%"
        }, {
          operations: withCtx(() => [
            createVNode(_component_t_button, {
              class: "t-demo-collapse-btn",
              variant: "text",
              shape: "square",
              onClick: changeCollapsed
            }, {
              icon: withCtx(() => [
                createVNode(_component_t_icon, { name: "view-list" })
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$2, [
              createBaseVNode("img", {
                width: collapsed.value ? 35 : 136,
                src: imgUrl.value,
                alt: "logo"
              }, null, 8, _hoisted_2$1)
            ]),
            createVNode(_component_t_menu_item, {
              value: "dashboard",
              to: "/"
            }, {
              icon: withCtx(() => [
                createVNode(_component_t_icon, { name: "dashboard" })
              ]),
              default: withCtx(() => [
                createTextVNode(" 仪表盘 ")
              ]),
              _: 1
            }),
            createVNode(_component_t_menu_item, {
              value: "server",
              to: "/server"
            }, {
              icon: withCtx(() => [
                createVNode(_component_t_icon, { name: "server" })
              ]),
              default: withCtx(() => [
                createTextVNode(" 主机列表 ")
              ]),
              _: 1
            }),
            createVNode(_component_t_menu_item, {
              value: "logs",
              to: "/logs"
            }, {
              icon: withCtx(() => [
                createVNode(_component_t_icon, { name: "root-list" })
              ]),
              default: withCtx(() => [
                createTextVNode(" 日志 ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["default-value", "collapsed"])) : createCommentVNode("", true),
        createVNode(_component_t_drawer, {
          visible: visible.value,
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
          placement: "left",
          size: "250px",
          footer: false
        }, {
          default: withCtx(() => [
            isMobile.value ? (openBlock(), createBlock(_component_t_menu, {
              key: 0,
              class: "sliderbar-menu",
              theme: "light",
              "default-value": defaultMenu.value,
              onChange: changeHandler,
              height: "100%",
              width: "100%"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3$1, [
                  createBaseVNode("img", {
                    width: "136",
                    src: logoUrl.value,
                    alt: "logo"
                  }, null, 8, _hoisted_4)
                ]),
                createVNode(_component_t_menu_item, {
                  value: "dashboard",
                  to: "/"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_icon, { name: "dashboard" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 仪表盘 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_t_menu_item, {
                  value: "server",
                  to: "/server"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_icon, { name: "server" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 主机列表 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_t_menu_item, {
                  value: "logs",
                  to: "/logs"
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_t_icon, { name: "root-list" })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 日志 ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["default-value"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["visible"])
      ], 64);
    };
  }
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-72508450"]]);
const index_vue_vue_type_style_index_0_scoped_3240a496_lang = "";
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "layout-content" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-3240a496"]]);
const index_vue_vue_type_style_index_0_scoped_b5c977aa_lang = "";
const _hoisted_1 = { class: "layout" };
const _hoisted_2 = { class: "menu" };
const _hoisted_3 = { class: "layout_right" };
const _sfc_main$1 = {
  __name: "index",
  setup(__props) {
    const menu = ref(null);
    const isMobile = ref(false);
    ref(false);
    const menuOptions = [
      {
        content: "个人设置",
        value: 1,
        onClick: () => MessagePlugin.success("选项一")
      },
      {
        content: "设置中心",
        value: 2,
        onClick: () => MessagePlugin.success("选项二")
      },
      {
        content: "退出登录",
        value: 3,
        onClick: () => MessagePlugin.success("选项三")
      }
    ];
    const handleClick2 = () => {
      menu.value.handleClick();
    };
    const changeMenu = () => {
      if (document.body.clientWidth <= 992) {
        isMobile.value = true;
      } else {
        isMobile.value = false;
      }
    };
    onMounted(() => {
      changeMenu();
      menu.value.changeSlider();
      window.onresize = () => {
        changeMenu();
        menu.value.changeSlider();
      };
    });
    return (_ctx, _cache) => {
      const _component_t_button = Button;
      const _component_t_col = Col;
      const _component_t_avatar = Avatar;
      const _component_t_dropdown = Dropdown;
      const _component_t_row = Row;
      const _component_t_card = Card;
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(Menu, {
            ref_key: "menu",
            ref: menu,
            isMobile: isMobile.value
          }, null, 8, ["isMobile"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_t_card, {
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createVNode(_component_t_row, {
                align: "center",
                justify: "space-between"
              }, {
                default: withCtx(() => [
                  createVNode(_component_t_col, null, {
                    default: withCtx(() => [
                      isMobile.value ? (openBlock(), createBlock(_component_t_button, {
                        key: 0,
                        onClick: handleClick2,
                        theme: "default",
                        variant: "text"
                      }, {
                        icon: withCtx(() => [
                          createVNode(unref(bulletpoint))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_t_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_t_dropdown, {
                        "min-column-width": 88,
                        options: menuOptions
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_t_avatar, { style: { "cursor": "pointer" } }, {
                            default: withCtx(() => [
                              createTextVNode("Admin")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(Content, null, {
            default: withCtx(() => [
              createVNode(_component_router_view)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b5c977aa"]]);
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Layout);
    };
  }
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const routes = [
  {
    name: "home",
    path: "/",
    component: () => __vitePreload(() => import("./index-9170a2e2.js"), true ? ["assets/index-9170a2e2.js","assets/index-574429c8.js","assets/index-a6905e76.css","assets/close-circle-filled-ce58c6f2.js","assets/index-aa15364c.css"] : void 0)
  },
  {
    name: "server",
    path: "/server",
    component: () => __vitePreload(() => import("./index-c0045e60.js"), true ? ["assets/index-c0045e60.js","assets/index-574429c8.js","assets/index-a6905e76.css","assets/plugin-3c4bf433.js","assets/plugin-bfeee548.css","assets/close-circle-filled-ce58c6f2.js","assets/index-97a93e6c.css"] : void 0)
  },
  {
    name: "term",
    path: "/server/term",
    component: () => __vitePreload(() => import("./term-db81110c.js"), true ? ["assets/term-db81110c.js","assets/index-574429c8.js","assets/index-a6905e76.css","assets/plugin-3c4bf433.js","assets/plugin-bfeee548.css","assets/term-1fd117b7.css"] : void 0)
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
const app = createApp(_sfc_main);
app.use(router);
app.mount("#app");
export {
  getUnicodeLength as $,
  _baseClone as A,
  inject as B,
  Col as C,
  getCurrentInstance as D,
  _typeof as E,
  Fragment as F,
  getDefaultExportFromCjs as G,
  watch as H,
  onActivated as I,
  onDeactivated as J,
  onBeforeUnmount as K,
  Loading as L,
  isUndefined_1 as M,
  isFunction_1 as N,
  off as O,
  Popup as P,
  getScrollContainer as Q,
  Row as R,
  Space as S,
  on as T,
  nextTick as U,
  useConfig as V,
  reactive as W,
  toRefs as X,
  isNumber_1 as Y,
  log as Z,
  _defineProperty as _,
  usePrefixClass as a,
  unref as a$,
  getCharacterLength$1 as a0,
  _slicedToArray as a1,
  limitUnicodeMaxLength as a2,
  useVModel as a3,
  useCommonClassName$1 as a4,
  _objectWithoutProperties as a5,
  withDirectives as a6,
  vShow as a7,
  mergeProps as a8,
  add as a9,
  isVNode as aA,
  useTNodeDefault as aB,
  omit_1 as aC,
  debounce_1 as aD,
  FakeArrow as aE,
  h as aF,
  getIEVersion as aG,
  chevronLeft as aH,
  chevronRight as aI,
  isBoolean_1 as aJ,
  requestSubmit as aK,
  isEmpty_1 as aL,
  getCharacterLength as aM,
  _createAssigner as aN,
  _copyObject as aO,
  keysIn_1 as aP,
  _apply as aQ,
  _baseGetTag as aR,
  isObjectLike_1 as aS,
  isPlainObject_1 as aT,
  _isIterateeCall as aU,
  keys_1 as aV,
  toString_1 as aW,
  eq_1 as aX,
  _basePropertyOf as aY,
  omit as aZ,
  onBeforeMount as a_,
  Button as aa,
  _assignValue as ab,
  _castPath as ac,
  _isIndex as ad,
  _toKey as ae,
  _flatRest as af,
  _baseGet as ag,
  isArguments_1 as ah,
  isArray_1 as ai,
  isLength_1 as aj,
  _MapCache as ak,
  _baseRest as al,
  _arrayMap as am,
  _baseUnary as an,
  isArrayLikeObject_1 as ao,
  useDefaultValue as ap,
  onUnmounted as aq,
  _toConsumableArray as ar,
  renderTNodeJSX as as,
  observe as at,
  useRipple as au,
  useDisabled as av,
  useContent as aw,
  watchEffect as ax,
  provide as ay,
  useChildComponentSlots as az,
  useGlobalIcon as b,
  getCurrentScope as b0,
  onScopeDispose as b1,
  useResizeObserver as b2,
  useTeleport as b3,
  useDestroyOnClose as b4,
  getScrollbarWidth as b5,
  Transition as b6,
  Teleport as b7,
  resolveDirective as b8,
  useAction as b9,
  useSameTarget as ba,
  createApp as bb,
  getAttach as bc,
  renderContent as bd,
  Tooltip as be,
  isNodeOverflow as bf,
  getScrollbarWidthWithCSS as bg,
  _Set as bh,
  _arrayFilter as bi,
  last_1 as bj,
  _baseFlatten as bk,
  isServer$1 as bl,
  upperFirst_1 as bm,
  camelCase_1 as bn,
  hasClass as bo,
  _arrayWithHoles as bp,
  _iterableToArray as bq,
  _unsupportedIterableToArray$1 as br,
  _nonIterableRest as bs,
  _createClass as bt,
  _classCallCheck as bu,
  shallowRef as bv,
  useRouter as bw,
  renderList as bx,
  TabPanel as by,
  Tabs as bz,
  computed as c,
  defineComponent as d,
  close as e,
  createVNode as f,
  _defineProperty$2 as g,
  useTNodeJSX as h,
  isString_1 as i,
  getBackgroundColor as j,
  isObject_1 as k,
  _export_sfc as l,
  ref as m,
  openBlock as n,
  onMounted as o,
  createElementBlock as p,
  withCtx as q,
  renderFn as r,
  createTextVNode as s,
  toDisplayString as t,
  useSizeProps as u,
  createBaseVNode as v,
  withInstall as w,
  Card as x,
  pushScopeId as y,
  popScopeId as z
};
