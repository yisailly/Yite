import { A as _baseClone, d as defineComponent, c as computed, u as useSizeProps, r as renderFn, _ as _defineProperty$1, B as inject, D as getCurrentInstance, E as _typeof$2, G as getDefaultExportFromCjs, a as usePrefixClass, m as ref, H as watch, o as onMounted, I as onActivated, J as onDeactivated, K as onBeforeUnmount, f as createVNode, h as useTNodeJSX, M as isUndefined_1, N as isFunction_1, O as off$1, Q as getScrollContainer, T as on$1, U as nextTick, w as withInstall, V as useConfig, W as reactive, X as toRefs, g as _defineProperty$2, Y as isNumber_1, Z as log, $ as getUnicodeLength, a0 as getCharacterLength, a1 as _slicedToArray, a2 as limitUnicodeMaxLength, k as isObject_1, a3 as useVModel, b as useGlobalIcon, a4 as useCommonClassName$1, a5 as _objectWithoutProperties$1, a6 as withDirectives, a7 as vShow, a8 as mergeProps, i as isString_1, a9 as add$1, aa as Button, ab as _assignValue, ac as _castPath, ad as _isIndex, ae as _toKey, af as _flatRest, ag as _baseGet, ah as isArguments_1, ai as isArray_1, aj as isLength_1, ak as _MapCache, al as _baseRest, am as _arrayMap, an as _baseUnary, ao as isArrayLikeObject_1, ap as useDefaultValue, L as Loading, aq as onUnmounted, ar as _toConsumableArray, as as renderTNodeJSX, P as Popup, at as observe, au as useRipple, av as useDisabled, aw as useContent, ax as watchEffect, ay as provide, az as useChildComponentSlots, aA as isVNode, F as Fragment, aB as useTNodeDefault, aC as omit_1, aD as debounce_1, aE as FakeArrow, aF as h, aG as getIEVersion, aH as chevronLeft, aI as chevronRight, aJ as isBoolean_1, aK as requestSubmit, aL as isEmpty_1, aM as getCharacterLength$1, aN as _createAssigner, aO as _copyObject, aP as keysIn_1, aQ as _apply, aR as _baseGetTag, aS as isObjectLike_1, aT as isPlainObject_1, aU as _isIterateeCall, aV as keys_1, aW as toString_1, aX as eq_1, aY as _basePropertyOf, aZ as omit, a_ as onBeforeMount, a$ as unref, b0 as getCurrentScope, b1 as onScopeDispose, b2 as useResizeObserver, b3 as useTeleport, b4 as useDestroyOnClose, b5 as getScrollbarWidth, b6 as Transition, b7 as Teleport, e as close, b8 as resolveDirective, b9 as useAction, ba as useSameTarget, bb as createApp, bc as getAttach, bd as renderContent, be as Tooltip, bf as isNodeOverflow, bg as getScrollbarWidthWithCSS, bh as _Set, bi as _arrayFilter, bj as last_1, bk as _baseFlatten, bl as isServer, bm as upperFirst_1, bn as camelCase_1, bo as hasClass, bp as _arrayWithHoles, bq as _iterableToArray, br as _unsupportedIterableToArray$3, bs as _nonIterableRest, bt as _createClass, bu as _classCallCheck, bv as shallowRef, bw as useRouter, n as openBlock, p as createElementBlock, q as withCtx, x as Card, v as createBaseVNode, s as createTextVNode, t as toDisplayString, bx as renderList, by as TabPanel, S as Space, bz as Tabs, C as Col, R as Row, y as pushScopeId, z as popScopeId, l as _export_sfc } from "./index-34939a40.js";
import { T as Tag, c as checkCircleFilled, e as errorCircleFilled, l as lookup } from "./index-574429c8.js";
import { i as infoCircleFilled, M as MessagePlugin } from "./plugin-3c4bf433.js";
import { c as closeCircleFilled } from "./close-circle-filled-ce58c6f2.js";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
function ownKeys$10(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$$(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$10(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$10(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$i = {
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
      "d": "M7.5 11V8.5H5v-1h2.5V5h1v2.5H11v1H8.5V11h-1z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M3 14a1 1 0 01-1-1V3a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H3zm0-1h10V3H3v10z",
      "fillOpacity": 0.9
    }
  }]
};
var addRectangle = defineComponent({
  name: "AddRectangleIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-add-rectangle", className.value]);
    var finalStyle = computed(() => _objectSpread$$(_objectSpread$$({}, style.value), attrs.style));
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
    return () => renderFn(element$i, finalProps.value);
  }
});
function ownKeys$$(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$_(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$$(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$$(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$h = {
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
      "d": "M10.77 11.98l1.38 1.37.7-.7-9.7-9.7-.7.7 1.2 1.21a7.9 7.9 0 00-2.53 2.91L1 8l.12.23a7.72 7.72 0 009.65 3.75zM10 11.2A6.67 6.67 0 012.11 8c.56-1 1.34-1.83 2.26-2.43l1.08 1.09a2.88 2.88 0 003.9 3.9l.64.64zM6.21 7.42l2.37 2.37a1.88 1.88 0 01-2.37-2.37zM14.88 8.23L15 8l-.12-.23a7.73 7.73 0 00-9.35-3.86l.8.8A6.7 6.7 0 0113.9 8a6.87 6.87 0 01-2.02 2.26l.7.7a7.9 7.9 0 002.3-2.73z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M10.88 8c0 .37-.07.73-.2 1.06l-.82-.82.02-.24a1.88 1.88 0 00-2.12-1.86l-.82-.82A2.87 2.87 0 0110.88 8z",
      "fillOpacity": 0.9
    }
  }]
};
var browseOff = defineComponent({
  name: "BrowseOffIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-browse-off", className.value]);
    var finalStyle = computed(() => _objectSpread$_(_objectSpread$_({}, style.value), attrs.style));
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
    return () => renderFn(element$h, finalProps.value);
  }
});
function ownKeys$_(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$Z(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$_(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$_(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$g = {
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
      "d": "M10.88 8a2.88 2.88 0 11-5.76 0 2.88 2.88 0 015.76 0zm-1 0a1.88 1.88 0 10-3.76 0 1.88 1.88 0 003.76 0z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M1.12 8.23A7.72 7.72 0 008 12.5c2.9 0 5.54-1.63 6.88-4.27L15 8l-.12-.23A7.73 7.73 0 008 3.5a7.74 7.74 0 00-6.88 4.27L1 8l.12.23zM8 11.5A6.73 6.73 0 012.11 8 6.73 6.73 0 0113.9 8 6.74 6.74 0 018 11.5z",
      "fillOpacity": 0.9
    }
  }]
};
var browse = defineComponent({
  name: "BrowseIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-browse", className.value]);
    var finalStyle = computed(() => _objectSpread$Z(_objectSpread$Z({}, style.value), attrs.style));
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
    return () => renderFn(element$g, finalProps.value);
  }
});
function ownKeys$Z(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$Y(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$Z(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$Z(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$f = {
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
      "d": "M3.54 6.46l.92-.92L8 9.08l3.54-3.54.92.92L8 10.92 3.54 6.46z",
      "fillOpacity": 0.9
    }
  }]
};
var chevronDown = defineComponent({
  name: "ChevronDownIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-chevron-down", className.value]);
    var finalStyle = computed(() => _objectSpread$Y(_objectSpread$Y({}, style.value), attrs.style));
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
    return () => renderFn(element$f, finalProps.value);
  }
});
function ownKeys$Y(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$X(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$Y(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$Y(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$e = {
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
      "d": "M13.04 4.46l-.92-.92L7.66 8l4.46 4.46.92-.92L9.5 8l3.54-3.54z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8.04 4.46l-.92-.92L2.66 8l4.46 4.46.92-.92L4.5 8l3.54-3.54z",
      "fillOpacity": 0.9
    }
  }]
};
var chevronLeftDouble = defineComponent({
  name: "ChevronLeftDoubleIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-chevron-left-double", className.value]);
    var finalStyle = computed(() => _objectSpread$X(_objectSpread$X({}, style.value), attrs.style));
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
    return () => renderFn(element$e, finalProps.value);
  }
});
function ownKeys$X(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$W(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$X(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$X(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$d = {
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
      "d": "M6.2 5.2L9 8l-2.8 2.8.71.7 3.5-3.5-3.5-3.5-.7.7z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8 15A7 7 0 118 1a7 7 0 010 14zm0-1A6 6 0 108 2a6 6 0 000 12z",
      "fillOpacity": 0.9
    }
  }]
};
var chevronRightCircle = defineComponent({
  name: "ChevronRightCircleIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-chevron-right-circle", className.value]);
    var finalStyle = computed(() => _objectSpread$W(_objectSpread$W({}, style.value), attrs.style));
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
    return () => renderFn(element$d, finalProps.value);
  }
});
function ownKeys$W(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$V(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$W(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$W(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$c = {
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
      "d": "M2.96 11.54l.92.92L8.34 8 3.88 3.54l-.92.92L6.5 8l-3.54 3.54zm5 0l.92.92L13.34 8 8.88 3.54l-.92.92L11.5 8l-3.54 3.54z",
      "fillOpacity": 0.9
    }
  }]
};
var chevronRightDouble = defineComponent({
  name: "ChevronRightDoubleIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-chevron-right-double", className.value]);
    var finalStyle = computed(() => _objectSpread$V(_objectSpread$V({}, style.value), attrs.style));
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
    return () => renderFn(element$c, finalProps.value);
  }
});
function ownKeys$V(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$U(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$V(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$V(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$b = {
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
      "d": "M12.46 9.54l-.92.92L8 6.92l-3.54 3.54-.92-.92L8 5.08l4.46 4.46z",
      "fillOpacity": 0.9
    }
  }]
};
var chevronUp = defineComponent({
  name: "ChevronUpIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-chevron-up", className.value]);
    var finalStyle = computed(() => _objectSpread$U(_objectSpread$U({}, style.value), attrs.style));
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
    return () => renderFn(element$b, finalProps.value);
  }
});
function ownKeys$U(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$T(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$U(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$U(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$a = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "g",
    "attrs": {
      "fill": "currentColor",
      "opacity": 0.9,
      "fillOpacity": 0.9
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M14.13 4.95L10.9 1.71l.7-.71 3.25 3.24-.7.71zM5.97 13.11l-3.61.72a.3.3 0 01-.35-.35l.72-3.61 7.3-7.3 3.24 3.24-7.3 7.3zm5.89-7.3l-1.83-1.83-6.38 6.38-.46 2.29 2.29-.46 6.38-6.38zM15 11h-4v1h4v-1zM15 13H8.5v1H15v-1z"
      }
    }]
  }]
};
var edit1 = defineComponent({
  name: "Edit1Icon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-edit-1", className.value]);
    var finalStyle = computed(() => _objectSpread$T(_objectSpread$T({}, style.value), attrs.style));
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
    return () => renderFn(element$a, finalProps.value);
  }
});
function ownKeys$T(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$S(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$T(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$T(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$9 = {
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
      "d": "M3 9a1 1 0 110-2 1 1 0 010 2zM7 8a1 1 0 102 0 1 1 0 00-2 0zM12 8a1 1 0 102 0 1 1 0 00-2 0z",
      "fillOpacity": 0.9
    }
  }]
};
var ellipsis = defineComponent({
  name: "EllipsisIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-ellipsis", className.value]);
    var finalStyle = computed(() => _objectSpread$S(_objectSpread$S({}, style.value), attrs.style));
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
    return () => renderFn(element$9, finalProps.value);
  }
});
function ownKeys$S(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$R(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$S(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$S(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$8 = {
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
      "d": "M2 3a1 1 0 011-1h10a1 1 0 011 1v1.79l-4.25 2.5V14h-3.5V7.29L2 4.79V3zm11 0H3v1.21l4.25 2.5V13h1.5V6.71L13 4.21V3z",
      "fillOpacity": 0.9
    }
  }]
};
var filter = defineComponent({
  name: "FilterIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-filter", className.value]);
    var finalStyle = computed(() => _objectSpread$R(_objectSpread$R({}, style.value), attrs.style));
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
    return () => renderFn(element$8, finalProps.value);
  }
});
function ownKeys$R(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$Q(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$R(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$R(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var element$7 = {
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
      "d": "M6.23 11.89l2.12-2.12.71.7-2.12 2.13A2.5 2.5 0 013.4 9.06l2.13-2.12.7.7-2.12 2.13a1.5 1.5 0 002.12 2.12zM10.47 9.06l-.7-.7 2.12-2.13a1.5 1.5 0 10-2.12-2.12L7.65 6.23l-.71-.7L9.06 3.4a2.5 2.5 0 013.54 3.54l-2.13 2.12z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M9.06 6.23L6.23 9.06l.71.7 2.83-2.82-.7-.7z",
      "fillOpacity": 0.9
    }
  }]
};
var link = defineComponent({
  name: "LinkIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-link", className.value]);
    var finalStyle = computed(() => _objectSpread$Q(_objectSpread$Q({}, style.value), attrs.style));
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
    return () => renderFn(element$7, finalProps.value);
  }
});
function ownKeys$Q(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$P(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$Q(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$Q(Object(source)).forEach(function(key2) {
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
      "d": "M5 8.5h6v-1H5v1z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M3 14a1 1 0 01-1-1V3a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H3zm0-1h10V3H3v10z",
      "fillOpacity": 0.9
    }
  }]
};
var minusRectangle = defineComponent({
  name: "MinusRectangleIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-minus-rectangle", className.value]);
    var finalStyle = computed(() => _objectSpread$P(_objectSpread$P({}, style.value), attrs.style));
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
function ownKeys$P(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$O(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$P(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$P(Object(source)).forEach(function(key2) {
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
      "d": "M12.4 4.46l-.91-.92L7.03 8l4.46 4.46.92-.92L8.86 8l3.55-3.54zM4.8 4v8h1.3V4H4.8z",
      "fillOpacity": 0.9
    }
  }]
};
var pageFirst = defineComponent({
  name: "PageFirstIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-page-first", className.value]);
    var finalStyle = computed(() => _objectSpread$O(_objectSpread$O({}, style.value), attrs.style));
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
function ownKeys$O(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$N(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$O(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$O(Object(source)).forEach(function(key2) {
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
      "d": "M3.6 11.54l.91.92L8.97 8 4.51 3.54l-.92.92L7.14 8l-3.55 3.54zm7.6.46V4H9.9v8h1.3z",
      "fillOpacity": 0.9
    }
  }]
};
var pageLast = defineComponent({
  name: "PageLastIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-page-last", className.value]);
    var finalStyle = computed(() => _objectSpread$N(_objectSpread$N({}, style.value), attrs.style));
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
function ownKeys$N(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$M(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$N(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$N(Object(source)).forEach(function(key2) {
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
      "d": "M3.5 7.35h9v1.3h-9v-1.3z",
      "fillOpacity": 0.9
    }
  }]
};
var remove = defineComponent({
  name: "RemoveIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-remove", className.value]);
    var finalStyle = computed(() => _objectSpread$M(_objectSpread$M({}, style.value), attrs.style));
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
function ownKeys$M(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$L(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$M(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$M(Object(source)).forEach(function(key2) {
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
      "d": "M8 11.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM8 13A5 5 0 108 3a5 5 0 000 10z",
      "fillOpacity": 0.9
    }
  }]
};
var round = defineComponent({
  name: "RoundIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-round", className.value]);
    var finalStyle = computed(() => _objectSpread$L(_objectSpread$L({}, style.value), attrs.style));
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
function ownKeys$L(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$K(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$L(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$L(Object(source)).forEach(function(key2) {
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
      "d": "M9.51 10.22a4.76 4.76 0 11.7-.7l3.54 3.52-.7.71-3.54-3.53zm.77-3.7a3.76 3.76 0 10-7.53 0 3.76 3.76 0 007.53 0z",
      "fillOpacity": 0.9
    }
  }]
};
var search = defineComponent({
  name: "SearchIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-search", className.value]);
    var finalStyle = computed(() => _objectSpread$K(_objectSpread$K({}, style.value), attrs.style));
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
function ownKeys$K(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$J(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$K(Object(source), true).forEach(function(key2) {
      _defineProperty$1(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$K(Object(source)).forEach(function(key2) {
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
      "d": "M11 8a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 10-4 0 2 2 0 004 0z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8 1.25l6.06 3.38v6.75L8 14.75l-6.06-3.38V4.63L8 1.25zM2.94 5.21v5.58L8 13.6l5.06-2.82V5.2L8 2.4 2.94 5.21z",
      "fillOpacity": 0.9
    }
  }]
};
var setting = defineComponent({
  name: "SettingIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-setting", className.value]);
    var finalStyle = computed(() => _objectSpread$J(_objectSpread$J({}, style.value), attrs.style));
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
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useFormDisabled(extend2) {
  var ctx = getCurrentInstance();
  var propsDisabled = computed(function() {
    return ctx.props.disabled;
  });
  var _inject = inject("formDisabled", /* @__PURE__ */ Object.create(null)), disabled = _inject.disabled;
  return computed(function() {
    return propsDisabled.value || (disabled === null || disabled === void 0 ? void 0 : disabled.value) || (extend2 === null || extend2 === void 0 ? void 0 : extend2.value) || false;
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info = gen[key2](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var regeneratorRuntime$2 = { exports: {} };
var _typeof$1 = { exports: {} };
(function(module) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(obj);
  }
  module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof$1);
(function(module) {
  var _typeof2 = _typeof$1.exports["default"];
  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key2, desc) {
      obj[key2] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key2, value) {
      return Object.defineProperty(obj, key2, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      }), obj[key2];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define2(obj, key2, value) {
        return obj[key2] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof2(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function(method, arg) {
        if ("executing" === state)
          throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method)
            throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if ("next" === context.method)
            context.sent = context._sent = context.arg;
          else if ("throw" === context.method) {
            if ("suspendedStart" === state)
              throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else
            "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
              continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method, method = delegate.iterator[methodName];
      if (void 0 === method)
        return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
          return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return next2.value = iterable[i], next2.done = false, next2;
            return next2.value = void 0, next2.done = true, next2;
          };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: void 0,
        done: true
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
      return this;
    }), define(Gp, "toString", function() {
      return "[object Generator]";
    }), exports.keys = function(val) {
      var object = Object(val), keys2 = [];
      for (var key2 in object)
        keys2.push(key2);
      return keys2.reverse(), function next() {
        for (; keys2.length; ) {
          var key3 = keys2.pop();
          if (key3 in object)
            return next.value = key3, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
          for (var name in this)
            "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
      },
      stop: function stop() {
        this.done = true;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type)
          throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done)
          throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i], record = entry.completion;
          if ("root" === entry.tryLoc)
            return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type)
          throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$2);
/* @__PURE__ */ getDefaultExportFromCjs(regeneratorRuntime$2.exports);
var runtime = regeneratorRuntime$2.exports();
var regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof$2(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$h = {
  container: {
    type: [String, Function],
    "default": function _default() {
      return function() {
        return window;
      };
    }
  },
  offsetBottom: {
    type: Number,
    "default": 0
  },
  offsetTop: {
    type: Number,
    "default": 0
  },
  zIndex: {
    type: Number
  },
  onFixedChange: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _Affix = defineComponent({
  name: "TAffix",
  props: props$h,
  emits: ["fixedChange"],
  setup: function setup(props2, context) {
    var _document;
    var COMPONENT_NAME = usePrefixClass("affix");
    var renderTNodeJSX2 = useTNodeJSX();
    var affixWrapRef = ref(null);
    var affixRef = ref(null);
    var placeholderEL = ref((_document = document) === null || _document === void 0 ? void 0 : _document.createElement("div"));
    var ticking = ref(false);
    var binded = ref(false);
    var scrollContainer = ref();
    var affixStyle = ref();
    var rAFId = 0;
    var handleScroll = function handleScroll2() {
      if (!ticking.value) {
        rAFId = window.requestAnimationFrame(function() {
          var _affixWrapRef$value$g;
          rAFId = 0;
          var _ref = (_affixWrapRef$value$g = affixWrapRef.value.getBoundingClientRect()) !== null && _affixWrapRef$value$g !== void 0 ? _affixWrapRef$value$g : {
            top: 0,
            width: 0,
            height: 0
          }, wrapToTop = _ref.top, wrapWidth = _ref.width, wrapHeight = _ref.height;
          var containerTop = 0;
          if (scrollContainer.value instanceof HTMLElement) {
            containerTop = scrollContainer.value.getBoundingClientRect().top;
          }
          var fixedTop;
          var calcTop = wrapToTop - containerTop;
          var containerHeight = scrollContainer.value[scrollContainer.value instanceof Window ? "innerHeight" : "clientHeight"] - wrapHeight;
          var calcBottom = containerTop + containerHeight - props2.offsetBottom;
          if (!isUndefined_1(props2.offsetTop) && calcTop <= props2.offsetTop) {
            fixedTop = containerTop + props2.offsetTop;
          } else if (!isUndefined_1(props2.offsetBottom) && wrapToTop >= calcBottom) {
            fixedTop = calcBottom;
          } else {
            fixedTop = false;
          }
          if (affixRef.value) {
            var affixed = fixedTop !== false;
            var placeholderStatus = affixWrapRef.value.contains(placeholderEL.value);
            if (affixed) {
              affixRef.value.className = COMPONENT_NAME.value;
              affixStyle.value = {
                top: "".concat(fixedTop, "px"),
                width: "".concat(wrapWidth, "px"),
                height: "".concat(wrapHeight, "px"),
                zIndex: props2.zIndex
              };
              if (!placeholderStatus) {
                placeholderEL.value.style.width = "".concat(wrapWidth, "px");
                placeholderEL.value.style.height = "".concat(wrapHeight, "px");
                affixWrapRef.value.appendChild(placeholderEL.value);
              }
            } else {
              affixRef.value.removeAttribute("class");
              affixStyle.value = void 0;
              placeholderStatus && placeholderEL.value.remove();
            }
            context.emit("fixedChange", affixed, {
              top: Number(fixedTop)
            });
            if (isFunction_1(props2.onFixedChange))
              props2.onFixedChange(affixed, {
                top: Number(fixedTop)
              });
          }
          ticking.value = false;
        });
        ticking.value = true;
      }
    };
    var bindScroll = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee() {
        return regenerator.wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return nextTick();
              case 2:
                if (!binded.value) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt("return");
              case 4:
                scrollContainer.value = getScrollContainer(props2.container);
                on$1(scrollContainer.value, "scroll", handleScroll);
                on$1(window, "resize", handleScroll);
                binded.value = true;
              case 8:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
      return function bindScroll2() {
        return _ref2.apply(this, arguments);
      };
    }();
    var unbindScroll = function unbindScroll2() {
      if (!scrollContainer.value || !binded.value)
        return;
      off$1(scrollContainer.value, "scroll", handleScroll);
      off$1(window, "resize", handleScroll);
      if (rAFId) {
        window.cancelAnimationFrame(rAFId);
      }
      binded.value = false;
    };
    watch(function() {
      return props2.offsetTop;
    }, function() {
      handleScroll();
    });
    watch(function() {
      return props2.offsetBottom;
    }, function() {
      handleScroll();
    });
    watch(function() {
      return props2.zIndex;
    }, function() {
      handleScroll();
    });
    onMounted(bindScroll);
    onActivated(bindScroll);
    onDeactivated(unbindScroll);
    onBeforeUnmount(unbindScroll);
    return {
      affixWrapRef,
      affixRef,
      bindScroll,
      unbindScroll,
      handleScroll,
      scrollContainer,
      renderTNodeJSX: renderTNodeJSX2,
      affixStyle
    };
  },
  render: function render() {
    return createVNode("div", {
      "ref": "affixWrapRef"
    }, [createVNode("div", {
      "ref": "affixRef",
      "style": this.affixStyle
    }, [this.renderTNodeJSX("default")])]);
  }
});
const index$d = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Affix = withInstall(_Affix);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useCommonClassName() {
  var _useConfig = useConfig(), classPrefix = _useConfig.classPrefix;
  var sizeClassNames = {
    small: "".concat(classPrefix.value, "-size-s"),
    medium: "".concat(classPrefix.value, "-size-m"),
    large: "".concat(classPrefix.value, "-size-l"),
    "default": "",
    xs: "".concat(classPrefix.value, "-size-xs"),
    xl: "".concat(classPrefix.value, "-size-xl"),
    block: "".concat(classPrefix.value, "-size-full-width")
  };
  var statusClassNames = {
    loading: "".concat(classPrefix.value, "-is-loading"),
    loadMore: "".concat(classPrefix.value, "-is-load-more"),
    disabled: "".concat(classPrefix.value, "-is-disabled"),
    focused: "".concat(classPrefix.value, "-is-focused"),
    success: "".concat(classPrefix.value, "-is-success"),
    error: "".concat(classPrefix.value, "-is-error"),
    warning: "".concat(classPrefix.value, "-is-warning"),
    selected: "".concat(classPrefix.value, "-is-selected"),
    active: "".concat(classPrefix.value, "-is-active"),
    checked: "".concat(classPrefix.value, "-is-checked"),
    current: "".concat(classPrefix.value, "-is-current"),
    hidden: "".concat(classPrefix.value, "-is-hidden"),
    visible: "".concat(classPrefix.value, "-is-visible"),
    expanded: "".concat(classPrefix.value, "-is-expanded"),
    indeterminate: "".concat(classPrefix.value, "-is-indeterminate")
  };
  return {
    classPrefix,
    sizeClassNames,
    statusClassNames,
    classNames: {
      size: sizeClassNames,
      status: statusClassNames
    }
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$J(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$I(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$J(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$J(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var useVirtualScroll$1 = function useVirtualScroll(_ref) {
  var data2 = _ref.data, container = _ref.container, _ref$fixedHeight = _ref.fixedHeight, fixedHeight = _ref$fixedHeight === void 0 ? false : _ref$fixedHeight, _ref$lineHeight = _ref.lineHeight, lineHeight = _ref$lineHeight === void 0 ? 30 : _ref$lineHeight, _ref$bufferSize = _ref.bufferSize, bufferSize = _ref$bufferSize === void 0 ? 20 : _ref$bufferSize, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? 100 : _ref$threshold;
  var state = reactive({
    visibleData: [],
    cachedHeight: [],
    cachedScrollY: []
  });
  var isVirtual = computed(function() {
    return data2.value.length > threshold;
  });
  var updateId = ref(0);
  var trs = /* @__PURE__ */ new Map();
  var visibleCount = 0;
  var beforeScrollTop = 0;
  var index2 = 0;
  var offset = 0;
  var start = 0;
  var last2 = 0;
  var reset = function reset2() {
    data2.value.forEach(function(item, i) {
      item.$index = i;
      if (fixedHeight) {
        state.cachedScrollY[i] = i * lineHeight;
      }
    });
    if (!fixedHeight) {
      state.cachedScrollY[data2.value.length - 1] = void 0;
    }
  };
  reset();
  var scrollHeight = computed(function() {
    var cachedHeight = state.cachedHeight;
    var length = cachedHeight.length;
    if (length) {
      var maxScrollY = cachedHeight.reduce(function(sum, v) {
        return sum + v || lineHeight;
      }, 0);
      if (cachedHeight.length === data2.value.length) {
        return maxScrollY;
      }
      var average = maxScrollY / cachedHeight.length;
      return maxScrollY + (data2.value.length - cachedHeight.length) * average;
    }
    return isVirtual.value ? data2.value.length * lineHeight : 0;
  });
  var translateY = computed(function() {
    var visibleData = state.visibleData;
    var firstRow = visibleData[0];
    if (firstRow) {
      return visibleData.length === 1 ? 0 : state.cachedScrollY[firstRow.$index];
    }
    return 0;
  });
  var updateVisibleData = function updateVisibleData2() {
    last2 = Math.min(start + visibleCount + bufferSize * 2, data2.value.length);
    state.visibleData = data2.value.slice(start, last2);
  };
  var calculateScrollY = function calculateScrollY2() {
    var _anchorDom$getBoundin;
    var anchorDom = trs.get(index2);
    if (!anchorDom) {
      return;
    }
    var anchorDomHeight = anchorDom === null || anchorDom === void 0 || (_anchorDom$getBoundin = anchorDom.getBoundingClientRect()) === null || _anchorDom$getBoundin === void 0 ? void 0 : _anchorDom$getBoundin.height;
    state.cachedScrollY[index2] = container.value.scrollTop - offset;
    state.cachedHeight[index2] = anchorDomHeight;
    for (var i = index2 + 1; i <= ((_state$visibleData = state.visibleData[state.visibleData.length - 1]) === null || _state$visibleData === void 0 ? void 0 : _state$visibleData.$index); i++) {
      var _state$visibleData;
      var tr = trs.get(i);
      var _ref2 = (tr === null || tr === void 0 ? void 0 : tr.getBoundingClientRect()) || {}, height = _ref2.height;
      state.cachedHeight[i] = height;
      var scrollY = state.cachedScrollY[i - 1] + state.cachedHeight[i - 1];
      state.cachedScrollY.splice(i, 1, scrollY);
    }
    for (var _i = index2 - 1; _i >= ((_state$visibleData$ = state.visibleData[0]) === null || _state$visibleData$ === void 0 ? void 0 : _state$visibleData$.$index); _i--) {
      var _state$visibleData$;
      var _tr = trs.get(_i);
      var _ref3 = (_tr === null || _tr === void 0 ? void 0 : _tr.getBoundingClientRect()) || {}, _height = _ref3.height;
      state.cachedHeight[_i] = _height;
      var _scrollY = state.cachedScrollY[_i + 1] - state.cachedHeight[_i];
      state.cachedScrollY.splice(_i, 1, _scrollY);
    }
    if (state.cachedScrollY[0] > 0) {
      var distance2 = state.cachedScrollY[0];
      var length = Math.min(last2, data2.value.length);
      for (var _i2 = 0; _i2 < length; _i2++) {
        state.cachedScrollY.splice(_i2, 1, state.cachedScrollY[_i2] - distance2);
      }
      var scrollTop = state.cachedScrollY[index2 - 1] ? state.cachedScrollY[index2 - 1] + offset : offset;
      container.value.scrollTop = scrollTop;
      beforeScrollTop = scrollTop;
    }
    if (state.cachedScrollY[start] < 0) {
      var s = state.cachedHeight.slice(0, Math.max(0, index2)).reduce(function(sum, v) {
        return sum + v;
      }, 0) + offset;
      container.value.scrollTop = s;
      beforeScrollTop = s;
      if (s === 0) {
        index2 = 0;
        offset = 0;
      }
    }
    nextTick(function() {
      var _container$value = container.value, scrollTop2 = _container$value.scrollTop, scrollHeight2 = _container$value.scrollHeight, clientHeight = _container$value.clientHeight;
      if (scrollTop2 + clientHeight === scrollHeight2) {
        for (var _i3 = last2 - 1; _i3 >= start; _i3--) {
          if (_i3 === last2 - 1) {
            state.cachedScrollY.splice(_i3, 1, scrollHeight2.value - state.cachedHeight[_i3]);
          } else {
            state.cachedScrollY.splice(_i3, 1, state.cachedScrollY[_i3 + 1] - state.cachedHeight[_i3]);
          }
        }
      }
    });
  };
  var handleScroll = function handleScroll2() {
    if (!isVirtual.value)
      return;
    var scrollTop = container.value.scrollTop;
    var distance2 = scrollTop - beforeScrollTop;
    beforeScrollTop = scrollTop;
    distance2 += offset;
    var lastIndex = index2;
    if (!distance2)
      return;
    if (distance2 >= 0) {
      while (lastIndex < data2.value.length && distance2 > (state.cachedHeight[lastIndex] || lineHeight)) {
        if (!state.cachedHeight[lastIndex]) {
          state.cachedHeight[lastIndex] = lineHeight;
        }
        distance2 -= state.cachedHeight[lastIndex];
        lastIndex++;
      }
      if (lastIndex >= data2.value.length) {
        index2 = data2.value.length - 1;
        offset = 0;
      } else {
        index2 = lastIndex;
        offset = distance2;
      }
      var _container$value2 = container.value, clientHeight = _container$value2.clientHeight, scrollHeight2 = _container$value2.scrollHeight;
      if (scrollTop + clientHeight === scrollHeight2) {
        index2 = data2.value.length - visibleCount + 1;
      }
      if (start <= index2 - bufferSize) {
        start = Math.min(data2.value.length - visibleCount, index2 - bufferSize);
        if (start < 0) {
          start = 0;
        }
      }
    } else {
      while (distance2 < 0) {
        lastIndex--;
        if (!state.cachedHeight[lastIndex]) {
          state.cachedHeight[lastIndex] = lineHeight;
        }
        distance2 += state.cachedHeight[lastIndex];
      }
      if (lastIndex < 0) {
        index2 = 0;
        offset = 0;
      } else {
        index2 = lastIndex;
        offset = distance2;
      }
      calculateScrollY();
      if (start > index2 - bufferSize) {
        start = Math.max(0, index2 - bufferSize);
      }
    }
    updateVisibleData();
  };
  !fixedHeight && watch(updateId, calculateScrollY, {
    flush: "post"
  });
  var handleRowMounted = function handleRowMounted2() {
    if (!isVirtual.value)
      return;
    updateId.value++;
  };
  watch(data2, function() {
    reset();
    state.visibleData = [];
    state.cachedScrollY = [];
    state.cachedHeight = [];
    beforeScrollTop = 0;
    index2 = 0;
    offset = 0;
    start = 0;
    trs.clear();
    if (data2.value.length <= threshold) {
      state.visibleData = data2.value;
    } else {
      updateVisibleData();
    }
    container.value && (container.value.scrollTop = 0);
  });
  var mounted = false;
  var refreshContainer = function refreshContainer2() {
    if (mounted) {
      visibleCount = Math.ceil(container.value.offsetHeight / lineHeight);
      updateVisibleData();
    }
  };
  onMounted(function() {
    if (!window || !window.IntersectionObserver) {
      return;
    }
    var ob = new window.IntersectionObserver(function(entries) {
      var entry = entries[0];
      if (entry.isIntersecting || entry.intersectionRatio) {
        mounted = true;
        isVirtual.value && refreshContainer();
        ob.unobserve(container.value);
      }
    });
    container.value && ob.observe(container.value);
  });
  return _objectSpread$I(_objectSpread$I({
    trs,
    scrollHeight
  }, toRefs(state)), {}, {
    translateY,
    handleScroll,
    handleRowMounted,
    refreshContainer,
    fixedHeight,
    calculateScrollY
  });
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$g = {
  align: {
    type: String,
    "default": "left",
    validator: function validator(val) {
      if (!val)
        return true;
      return ["left", "center", "right"].includes(val);
    }
  },
  allowInputOverMax: Boolean,
  autoWidth: Boolean,
  autocomplete: {
    type: String,
    "default": void 0
  },
  autofocus: Boolean,
  clearable: Boolean,
  disabled: Boolean,
  format: {
    type: Function
  },
  inputClass: {
    type: [String, Object, Array]
  },
  label: {
    type: [String, Function]
  },
  maxcharacter: {
    type: Number
  },
  maxlength: {
    type: Number
  },
  name: {
    type: String,
    "default": ""
  },
  placeholder: {
    type: String,
    "default": void 0
  },
  prefixIcon: {
    type: Function
  },
  readonly: Boolean,
  showClearIconOnEmpty: Boolean,
  showLimitNumber: Boolean,
  size: {
    type: String,
    "default": "medium",
    validator: function validator2(val) {
      if (!val)
        return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  status: {
    type: String,
    "default": void 0,
    validator: function validator3(val) {
      if (!val)
        return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  suffix: {
    type: [String, Function]
  },
  suffixIcon: {
    type: Function
  },
  tips: {
    type: [String, Function]
  },
  type: {
    type: String,
    "default": "text",
    validator: function validator4(val) {
      if (!val)
        return true;
      return ["text", "number", "url", "tel", "password", "search", "submit", "hidden"].includes(val);
    }
  },
  value: {
    type: String,
    "default": void 0
  },
  modelValue: {
    type: String,
    "default": void 0
  },
  defaultValue: {
    type: String,
    "default": ""
  },
  onBlur: Function,
  onChange: Function,
  onClear: Function,
  onClick: Function,
  onCompositionend: Function,
  onCompositionstart: Function,
  onEnter: Function,
  onFocus: Function,
  onKeydown: Function,
  onKeypress: Function,
  onKeyup: Function,
  onMouseenter: Function,
  onMouseleave: Function,
  onPaste: Function,
  onValidate: Function,
  onWheel: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var useCLASSNAMES = function useCLASSNAMES2() {
  var classPrefix = usePrefixClass();
  return computed(function() {
    var form = "".concat(classPrefix.value, "-form");
    var input = "".concat(classPrefix.value, "-input");
    var is2 = "".concat(classPrefix.value, "-is");
    return {
      form,
      label: "".concat(form, "__label"),
      labelTop: "".concat(form, "__label--top"),
      inline: "".concat(form, "-inline"),
      formItem: "".concat(form, "__item"),
      formItemWithHelp: "".concat(form, "__item-with-help"),
      formItemWithExtra: "".concat(form, "__item-with-extra"),
      controls: "".concat(form, "__controls"),
      controlsContent: "".concat(form, "__controls-content"),
      status: "".concat(form, "__status"),
      extra: "".concat(input, "__extra"),
      help: "".concat(input, "__help"),
      success: "".concat(is2, "-success"),
      successBorder: "".concat(form, "--success-border"),
      error: "".concat(is2, "-error"),
      warning: "".concat(is2, "-warning")
    };
  });
};
var ValidateStatus = /* @__PURE__ */ function(ValidateStatus2) {
  ValidateStatus2["TO_BE_VALIDATED"] = "not";
  ValidateStatus2["SUCCESS"] = "success";
  ValidateStatus2["FAIL"] = "fail";
  return ValidateStatus2;
}(ValidateStatus || {});
var FormInjectionKey = Symbol("FormProvide");
var FormItemInjectionKey = Symbol("FormItemProvide");
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useLengthLimit(params) {
  var getValueByLimitNumber = function getValueByLimitNumber2(inputValue) {
    var _params$value = params.value, allowInputOverMax = _params$value.allowInputOverMax, maxlength = _params$value.maxlength, maxcharacter = _params$value.maxcharacter;
    if (!(maxlength || maxcharacter) || allowInputOverMax || !inputValue)
      return inputValue;
    if (maxlength) {
      return limitUnicodeMaxLength(inputValue, maxlength);
    }
    if (maxcharacter) {
      var r = getCharacterLength(inputValue, maxcharacter);
      if (isObject_1(r)) {
        return r.characters;
      }
    }
  };
  var limitNumber = computed(function() {
    var _params$value2 = params.value, maxlength = _params$value2.maxlength, maxcharacter = _params$value2.maxcharacter, value = _params$value2.value;
    if (isNumber_1(value))
      return String(value);
    if (maxlength && maxcharacter) {
      log.warn("Input", "Pick one of maxlength and maxcharacter please.");
    }
    if (maxlength) {
      var length = value !== null && value !== void 0 && value.length ? getUnicodeLength(value) : 0;
      return "".concat(length, "/").concat(maxlength);
    }
    if (maxcharacter) {
      return "".concat(getCharacterLength(value || ""), "/").concat(maxcharacter);
    }
    return "";
  });
  var innerStatus = computed(function() {
    if (limitNumber.value) {
      var _limitNumber$value$sp = limitNumber.value.split("/"), _limitNumber$value$sp2 = _slicedToArray(_limitNumber$value$sp, 2), current = _limitNumber$value$sp2[0], total = _limitNumber$value$sp2[1];
      return Number(current) > Number(total) ? "error" : "";
    }
    return "";
  });
  var tStatus = computed(function() {
    var status = params.value.status;
    return status || innerStatus.value;
  });
  var onValidateChange = function onValidateChange2() {
    var _params$value$onValid, _params$value3;
    (_params$value$onValid = (_params$value3 = params.value).onValidate) === null || _params$value$onValid === void 0 ? void 0 : _params$value$onValid.call(_params$value3, {
      error: innerStatus.value ? "exceed-maximum" : void 0
    });
  };
  watch(innerStatus, onValidateChange);
  onMounted(function() {
    innerStatus.value && onValidateChange();
  });
  return {
    tStatus,
    limitNumber,
    getValueByLimitNumber
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useInput(props2, expose) {
  var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
  var inputValue = ref();
  var isComposition = ref(false);
  var compositionValue = ref();
  var clearIconRef = ref(null);
  var innerClickElement = ref();
  var disabled = useFormDisabled();
  var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), innerValue = _useVModel2[0], setInnerValue = _useVModel2[1];
  var isHover = ref(false);
  var focused = ref(false);
  var renderType = ref(props2.type);
  var inputRef = ref(null);
  var limitParams = computed(function() {
    return {
      value: [void 0, null].includes(innerValue.value) ? void 0 : String(innerValue.value),
      status: props2.status,
      maxlength: props2.maxlength,
      maxcharacter: props2.maxcharacter,
      allowInputOverMax: props2.allowInputOverMax,
      onValidate: props2.onValidate
    };
  });
  var _useLengthLimit = useLengthLimit(limitParams), limitNumber = _useLengthLimit.limitNumber, getValueByLimitNumber = _useLengthLimit.getValueByLimitNumber, tStatus = _useLengthLimit.tStatus;
  var showClear = computed(function() {
    return (innerValue.value && !disabled.value && props2.clearable && !props2.readonly || props2.showClearIconOnEmpty) && isHover.value;
  });
  var focus = function focus2() {
    var _inputRef$value;
    return (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 ? void 0 : _inputRef$value.focus();
  };
  var blur = function blur2() {
    var _inputRef$value2;
    return (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 ? void 0 : _inputRef$value2.blur();
  };
  var emitFocus = function emitFocus2(e) {
    var _props$onFocus;
    inputValue.value = innerValue.value;
    if (props2.disabled)
      return;
    focused.value = true;
    (_props$onFocus = props2.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props2, innerValue.value, {
      e
    });
  };
  var emitClear = function emitClear2(_ref) {
    var _props$onClear;
    var e = _ref.e;
    setInnerValue("", {
      e,
      trigger: "clear"
    });
    (_props$onClear = props2.onClear) === null || _props$onClear === void 0 ? void 0 : _props$onClear.call(props2, {
      e
    });
  };
  var onClearIconMousedown = function onClearIconMousedown2(e) {
    innerClickElement.value = e.target;
  };
  var emitPassword = function emitPassword2() {
    var toggleType = renderType.value === "password" ? "text" : "password";
    renderType.value = toggleType;
  };
  var setInputElValue = function setInputElValue2() {
    var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var inputEl = inputRef.value;
    if (!inputEl)
      return;
    var sV = String(v);
    if (!inputEl.value) {
      return;
    }
    if (inputEl.value !== sV) {
      inputEl.value = sV;
    }
  };
  var inputValueChangeHandle = function inputValueChangeHandle2(e) {
    var _innerValue$value;
    var target = e.target;
    var val = target.value;
    if (props2.type !== "number" && val.length > ((_innerValue$value = innerValue.value) === null || _innerValue$value === void 0 ? void 0 : _innerValue$value.length)) {
      val = getValueByLimitNumber(val);
    }
    setInnerValue(val, {
      e
    });
    nextTick(function() {
      setInputElValue(innerValue.value);
    });
  };
  var handleInput = function handleInput2(e) {
    var checkInputType = e.inputType && e.inputType === "insertCompositionText";
    var val = e.currentTarget.value;
    if (checkInputType || isComposition.value) {
      compositionValue.value = val;
      return;
    }
    inputValueChangeHandle(e);
  };
  var isClearIcon = function isClearIcon2() {
    var _clearIconRef$value;
    var tmp = innerClickElement.value;
    if (!tmp || !tmp.tagName || !((_clearIconRef$value = clearIconRef.value) !== null && _clearIconRef$value !== void 0 && _clearIconRef$value.$el) || !["path", "svg"].includes(tmp.tagName))
      return false;
    while (tmp) {
      var _clearIconRef$value2;
      if (((_clearIconRef$value2 = clearIconRef.value) === null || _clearIconRef$value2 === void 0 ? void 0 : _clearIconRef$value2.$el) === tmp) {
        return true;
      }
      tmp = tmp.parentNode;
    }
    return false;
  };
  var formItem = inject(FormItemInjectionKey, void 0);
  var formatAndEmitBlur = function formatAndEmitBlur2(e) {
    if (props2.format) {
      inputValue.value = props2.format(innerValue.value);
    }
    focused.value = false;
    if (!isClearIcon() && props2.allowTriggerBlur) {
      var _props$onBlur;
      (_props$onBlur = props2.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props2, innerValue.value, {
        e
      });
      formItem === null || formItem === void 0 ? void 0 : formItem.handleBlur();
    }
  };
  var onHandleCompositionend = function onHandleCompositionend2(e) {
    var _props$onCompositione;
    isComposition.value = false;
    compositionValue.value = "";
    inputValueChangeHandle(e);
    (_props$onCompositione = props2.onCompositionend) === null || _props$onCompositione === void 0 ? void 0 : _props$onCompositione.call(props2, innerValue.value, {
      e
    });
  };
  var onHandleCompositionstart = function onHandleCompositionstart2(e) {
    var _props$onCompositions;
    isComposition.value = true;
    var value2 = e.currentTarget.value;
    compositionValue.value = value2;
    (_props$onCompositions = props2.onCompositionstart) === null || _props$onCompositions === void 0 ? void 0 : _props$onCompositions.call(props2, innerValue.value, {
      e
    });
  };
  var onRootClick = function onRootClick2(e) {
    var _inputRef$value3, _props$onClick;
    (_inputRef$value3 = inputRef.value) === null || _inputRef$value3 === void 0 ? void 0 : _inputRef$value3.focus();
    (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
      e
    });
  };
  watch(function() {
    return props2.autofocus;
  }, function(value2) {
    if (value2 === true) {
      nextTick(function() {
        var _inputRef$value4;
        (_inputRef$value4 = inputRef.value) === null || _inputRef$value4 === void 0 ? void 0 : _inputRef$value4.focus();
      });
    }
  }, {
    immediate: true
  });
  watch(innerValue, function(val, oldVal) {
    if (oldVal === void 0 && props2.format) {
      inputValue.value = props2.format(val);
    } else {
      inputValue.value = val;
    }
    var newVal = getValueByLimitNumber(val);
    if (newVal !== val && props2.type !== "number") {
      setInnerValue(newVal, {
        trigger: "initial"
      });
    }
  }, {
    immediate: true
  });
  watch(function() {
    return props2.type;
  }, function(v) {
    renderType.value = v;
  }, {
    immediate: true
  });
  expose({
    inputRef,
    focus,
    blur
  });
  return {
    isHover,
    focused,
    renderType,
    showClear,
    inputRef,
    clearIconRef,
    inputValue,
    isComposition,
    compositionValue,
    limitNumber,
    tStatus,
    emitFocus,
    formatAndEmitBlur,
    onHandleCompositionend,
    onHandleCompositionstart,
    onRootClick,
    emitPassword,
    handleInput,
    emitClear,
    onClearIconMousedown,
    innerValue
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useInputEventHandler(props2, isHover) {
  var handleKeydown = function handleKeydown2(e) {
    if (props2.disabled)
      return;
    var code = e.code;
    if (/enter/i.test(code) || /enter/i.test(e.key)) {
      var _props$onEnter;
      (_props$onEnter = props2.onEnter) === null || _props$onEnter === void 0 ? void 0 : _props$onEnter.call(props2, e.currentTarget.value, {
        e
      });
    } else {
      var _props$onKeydown;
      (_props$onKeydown = props2.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call(props2, e.currentTarget.value, {
        e
      });
    }
  };
  var handleKeyUp = function handleKeyUp2(e) {
    var _props$onKeyup;
    if (props2.disabled)
      return;
    (_props$onKeyup = props2.onKeyup) === null || _props$onKeyup === void 0 ? void 0 : _props$onKeyup.call(props2, e.currentTarget.value, {
      e
    });
  };
  var handleKeypress = function handleKeypress2(e) {
    var _props$onKeypress;
    if (props2.disabled)
      return;
    (_props$onKeypress = props2.onKeypress) === null || _props$onKeypress === void 0 ? void 0 : _props$onKeypress.call(props2, e.currentTarget.value, {
      e
    });
  };
  var onHandlePaste = function onHandlePaste2(e) {
    var _props$onPaste;
    if (props2.disabled)
      return;
    var clipData = e.clipboardData || window.clipboardData;
    (_props$onPaste = props2.onPaste) === null || _props$onPaste === void 0 ? void 0 : _props$onPaste.call(props2, {
      e,
      pasteValue: clipData === null || clipData === void 0 ? void 0 : clipData.getData("text/plain")
    });
  };
  var mouseEvent = function mouseEvent2(v) {
    return isHover.value = v;
  };
  var onHandleMousewheel = function onHandleMousewheel2(e) {
    var _props$onWheel;
    return (_props$onWheel = props2.onWheel) === null || _props$onWheel === void 0 ? void 0 : _props$onWheel.call(props2, {
      e
    });
  };
  var onInputMouseenter = function onInputMouseenter2(e) {
    var _props$onMouseenter;
    mouseEvent(true);
    (_props$onMouseenter = props2.onMouseenter) === null || _props$onMouseenter === void 0 ? void 0 : _props$onMouseenter.call(props2, {
      e
    });
  };
  var onInputMouseleave = function onInputMouseleave2(e) {
    var _props$onMouseleave;
    mouseEvent(false);
    (_props$onMouseleave = props2.onMouseleave) === null || _props$onMouseleave === void 0 ? void 0 : _props$onMouseleave.call(props2, {
      e
    });
  };
  return {
    handleKeydown,
    handleKeyUp,
    handleKeypress,
    onHandlePaste,
    onHandleMousewheel,
    onInputMouseenter,
    onInputMouseleave
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useInputWidth(props2, inputRef, innerValue) {
  var inputPreRef = ref(null);
  var composing = ref(false);
  var updateInputWidth = function updateInputWidth2() {
    if (!inputPreRef.value || !inputRef.value)
      return;
    var _inputPreRef$value$ge = inputPreRef.value.getBoundingClientRect(), width = _inputPreRef$value$ge.width;
    inputRef.value.style.width = "".concat(width || 0, "px");
  };
  var addListeners = function addListeners2() {
    watch(function() {
      return innerValue.value + props2.placeholder;
    }, function() {
      if (!props2.autoWidth)
        return;
      nextTick(function() {
        updateInputWidth();
      });
    }, {
      immediate: true
    });
  };
  onMounted(function() {
    composing.value = false;
    if (props2.autoWidth) {
      addListeners();
    }
  });
  var resizeObserver = ref(null);
  var addTableResizeObserver = function addTableResizeObserver2(element2) {
    if (typeof window === "undefined")
      return;
    if (isUndefined_1(window.ResizeObserver) || !element2)
      return;
    resizeObserver.value = new window.ResizeObserver(function() {
      updateInputWidth();
    });
    resizeObserver.value.observe(element2);
  };
  onMounted(function() {
    addTableResizeObserver(inputPreRef.value);
  });
  onBeforeUnmount(function() {
    var _resizeObserver$value, _resizeObserver$value2;
    (_resizeObserver$value = resizeObserver.value) === null || _resizeObserver$value === void 0 ? void 0 : _resizeObserver$value.unobserve(inputPreRef.value);
    (_resizeObserver$value2 = resizeObserver.value) === null || _resizeObserver$value2 === void 0 ? void 0 : _resizeObserver$value2.disconnect();
  });
  return {
    inputPreRef
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _excluded$7 = ["isHover", "tStatus", "inputRef", "renderType", "showClear", "focused", "inputValue", "isComposition", "compositionValue", "innerValue", "limitNumber"];
function ownKeys$I(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$H(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$I(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$I(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function getValidAttrs$1(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function(key2) {
    if (!isUndefined_1(obj[key2])) {
      newObj[key2] = obj[key2];
    }
  });
  return newObj;
}
var _Input = defineComponent({
  name: "TInput",
  props: _objectSpread$H(_objectSpread$H({}, props$g), {}, {
    showInput: {
      type: Boolean,
      "default": true
    },
    keepWrapperWidth: {
      type: Boolean,
      "default": false
    },
    allowTriggerBlur: {
      type: Boolean,
      "default": true
    }
  }),
  setup: function setup2(props2, _ref) {
    var expose = _ref.expose;
    var _useConfig = useConfig("input"), globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
      BrowseIcon: browse,
      BrowseOffIcon: browseOff,
      CloseCircleFilledIcon: closeCircleFilled
    }), BrowseIcon$1 = _useGlobalIcon.BrowseIcon, BrowseOffIcon$1 = _useGlobalIcon.BrowseOffIcon, CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
    var disabled = useFormDisabled();
    var COMPONENT_NAME = usePrefixClass("input");
    var INPUT_WRAP_CLASS = usePrefixClass("input__wrap");
    var INPUT_TIPS_CLASS = usePrefixClass("input__tips");
    var _useCommonClassName = useCommonClassName$1(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
    var classPrefix = usePrefixClass();
    var renderTNodeJSX2 = useTNodeJSX();
    var _useInput = useInput(props2, expose), isHover = _useInput.isHover, tStatus = _useInput.tStatus, inputRef = _useInput.inputRef, renderType = _useInput.renderType, showClear = _useInput.showClear, focused = _useInput.focused, inputValue = _useInput.inputValue, isComposition = _useInput.isComposition, compositionValue = _useInput.compositionValue, innerValue = _useInput.innerValue, limitNumber = _useInput.limitNumber, inputHandle = _objectWithoutProperties$1(_useInput, _excluded$7);
    var _useInputWidth = useInputWidth(props2, inputRef, innerValue), inputPreRef = _useInputWidth.inputPreRef;
    var inputEventHandler = useInputEventHandler(props2, isHover);
    var tPlaceholder = computed(function() {
      var _props2$placeholder;
      return (_props2$placeholder = props2.placeholder) !== null && _props2$placeholder !== void 0 ? _props2$placeholder : globalConfig.value.placeholder;
    });
    var inputAttrs = computed(function() {
      var _props2$autocomplete;
      return getValidAttrs$1({
        autofocus: props2.autofocus,
        disabled: disabled.value,
        readonly: props2.readonly,
        placeholder: tPlaceholder.value,
        maxlength: !props2.allowInputOverMax && props2.maxlength || void 0,
        name: props2.name || void 0,
        type: renderType.value,
        autocomplete: (_props2$autocomplete = props2.autocomplete) !== null && _props2$autocomplete !== void 0 ? _props2$autocomplete : globalConfig.value.autocomplete || void 0,
        unselectable: props2.readonly ? "on" : void 0
      });
    });
    var wrapClasses = computed(function() {
      return [INPUT_WRAP_CLASS.value, _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--auto-width"), props2.autoWidth && !props2.keepWrapperWidth)];
    });
    var inputEvents = getValidAttrs$1({
      onFocus: function onFocus(e) {
        return inputHandle.emitFocus(e);
      },
      onBlur: inputHandle.formatAndEmitBlur,
      onKeydown: inputEventHandler.handleKeydown,
      onKeyup: inputEventHandler.handleKeyUp,
      onKeypress: inputEventHandler.handleKeypress,
      onPaste: inputEventHandler.onHandlePaste,
      onCompositionend: inputHandle.onHandleCompositionend,
      onCompositionstart: inputHandle.onHandleCompositionstart
    });
    return function() {
      var _ref4, _compositionValue$val, _inputValue$value;
      var prefixIcon = renderTNodeJSX2("prefixIcon");
      var suffixIcon = renderTNodeJSX2("suffixIcon");
      var passwordIcon = renderTNodeJSX2("passwordIcon");
      var label = renderTNodeJSX2("label", {
        silent: true
      });
      var suffix = renderTNodeJSX2("suffix");
      var limitNode = limitNumber.value && props2.showLimitNumber ? createVNode("div", {
        "class": ["".concat(classPrefix.value, "-input__limit-number"), _defineProperty$2({}, "".concat(classPrefix.value, "-is-disabled"), disabled.value)]
      }, [limitNumber.value]) : null;
      var labelContent = label ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix")
      }, [label]) : null;
      var suffixContent = suffix || limitNode ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [suffix, limitNode]) : null;
      if (props2.type === "password") {
        if (renderType.value === "password") {
          suffixIcon = createVNode(BrowseOffIcon$1, {
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitPassword
          }, null);
        } else if (renderType.value === "text") {
          suffixIcon = createVNode(BrowseIcon$1, {
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitPassword
          }, null);
        }
      }
      if (showClear.value) {
        if (props2.type === "password") {
          passwordIcon = createVNode(CloseCircleFilledIcon$1, {
            "ref": inputHandle.clearIconRef,
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitClear,
            "onMousedown": inputHandle.onClearIconMousedown
          }, null);
        } else {
          suffixIcon = createVNode(CloseCircleFilledIcon$1, {
            "ref": inputHandle.clearIconRef,
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitClear,
            "onMousedown": inputHandle.onClearIconMousedown
          }, null);
        }
      }
      var classes = [COMPONENT_NAME.value, props2.inputClass, (_ref4 = {}, _defineProperty$2(_ref4, SIZE.value[props2.size], props2.size !== "medium"), _defineProperty$2(_ref4, STATUS.value.disabled, disabled.value), _defineProperty$2(_ref4, STATUS.value.focused, focused.value), _defineProperty$2(_ref4, "".concat(classPrefix.value, "-is-").concat(tStatus.value), tStatus.value && tStatus.value !== "default"), _defineProperty$2(_ref4, "".concat(classPrefix.value, "-align-").concat(props2.align), props2.align !== "left"), _defineProperty$2(_ref4, "".concat(classPrefix.value, "-is-readonly"), props2.readonly), _defineProperty$2(_ref4, "".concat(COMPONENT_NAME.value, "--prefix"), prefixIcon || labelContent), _defineProperty$2(_ref4, "".concat(COMPONENT_NAME.value, "--suffix"), suffixIcon || suffixContent), _defineProperty$2(_ref4, "".concat(COMPONENT_NAME.value, "--focused"), focused.value), _ref4)];
      var tips = renderTNodeJSX2("tips");
      var tipsClasses = [INPUT_TIPS_CLASS.value, "".concat(classPrefix.value, "-tips"), "".concat(classPrefix.value, "-is-").concat(tStatus.value || "default")];
      return withDirectives(createVNode("div", {
        "class": wrapClasses.value
      }, [createVNode("div", {
        "class": classes,
        "onClick": inputHandle.onRootClick,
        "onMouseenter": inputEventHandler.onInputMouseenter,
        "onMouseleave": inputEventHandler.onInputMouseleave,
        "onWheel": inputEventHandler.onHandleMousewheel
      }, [prefixIcon ? createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__prefix"), "".concat(COMPONENT_NAME.value, "__prefix-icon")]
      }, [prefixIcon]) : null, labelContent, props2.showInput && createVNode("input", mergeProps({
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, inputAttrs.value, inputEvents, {
        "ref": inputRef,
        "value": isComposition.value ? (_compositionValue$val = compositionValue.value) !== null && _compositionValue$val !== void 0 ? _compositionValue$val : "" : (_inputValue$value = inputValue.value) !== null && _inputValue$value !== void 0 ? _inputValue$value : "",
        "onInput": function onInput(e) {
          return inputHandle.handleInput(e);
        }
      }), null), props2.autoWidth && createVNode("span", {
        "ref": inputPreRef,
        "class": "".concat(classPrefix.value, "-input__input-pre")
      }, [innerValue.value || tPlaceholder.value]), suffixContent, passwordIcon ? createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), "".concat(COMPONENT_NAME.value, "__clear")]
      }, [passwordIcon]) : null, suffixIcon ? createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "__clear"), showClear.value)]
      }, [suffixIcon]) : null]), tips && createVNode("div", {
        "class": tipsClasses
      }, [tips])]), [[vShow, props2.type !== "hidden"]]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var inputGroupProps = {
  separate: Boolean
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _InputGroup = defineComponent({
  name: "TInputGroup",
  props: inputGroupProps,
  setup: function setup3(props2) {
    var COMPONENT_NAME = usePrefixClass("input-group");
    var renderTNodeJSX2 = useTNodeJSX();
    var CLASS = computed(function() {
      return [COMPONENT_NAME.value, _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--separate"), props2.separate)];
    });
    return function() {
      return createVNode("div", {
        "class": CLASS.value
      }, [renderTNodeJSX2("default")]);
    };
  }
});
const index$c = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Input = withInstall(_Input);
withInstall(_InputGroup);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$f = {
  align: {
    type: String,
    validator: function validator5(val) {
      if (!val)
        return true;
      return ["left", "center", "right"].includes(val);
    }
  },
  allowInputOverLimit: {
    type: Boolean,
    "default": true
  },
  autoWidth: Boolean,
  decimalPlaces: {
    type: Number,
    "default": void 0
  },
  disabled: Boolean,
  format: {
    type: Function
  },
  inputProps: {
    type: Object
  },
  label: {
    type: [String, Function]
  },
  largeNumber: Boolean,
  max: {
    type: [String, Number],
    "default": Infinity
  },
  min: {
    type: [String, Number],
    "default": -Infinity
  },
  placeholder: {
    type: String,
    "default": void 0
  },
  readonly: Boolean,
  size: {
    type: String,
    "default": "medium",
    validator: function validator6(val) {
      if (!val)
        return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  status: {
    type: String,
    "default": "default",
    validator: function validator7(val) {
      if (!val)
        return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  step: {
    type: [String, Number],
    "default": 1
  },
  suffix: {
    type: [String, Function]
  },
  theme: {
    type: String,
    "default": "row",
    validator: function validator8(val) {
      if (!val)
        return true;
      return ["column", "row", "normal"].includes(val);
    }
  },
  tips: {
    type: [String, Function]
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
  onBlur: Function,
  onChange: Function,
  onEnter: Function,
  onFocus: Function,
  onKeydown: Function,
  onKeypress: Function,
  onKeyup: Function,
  onValidate: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function fillZero(length) {
  return new Array(length).fill(0).join("");
}
function isInputNumber(num) {
  if (!num)
    return true;
  if (isNumber_1(num))
    return !Number.isNaN(num);
  var r = /^[0-9|e|E|-]+\.*[0-9|e|E|-]*$/.test(num);
  if (!r)
    return false;
  var eCount = 0;
  var negativeCount = 0;
  var dotCount = 0;
  for (var i = 0, len2 = num.length; i < len2; i++) {
    if (num[i] === ".") {
      dotCount += 1;
      if (dotCount > 1)
        return false;
    }
    if (/(e|E)+/.test(num[i])) {
      eCount += 1;
      if (eCount > 1)
        return false;
    }
    if (num[i] === "-") {
      negativeCount += 1;
      if (negativeCount > 2)
        return false;
    }
  }
  return true;
}
function removeInvalidZero(num) {
  var decimal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (num.indexOf(".") !== -1) {
    log.error("InputNumber", "num is not a integer number.");
    return num;
  }
  if (!num || num === "0" && decimal)
    return "";
  if (num === "0")
    return num;
  return (decimal ? num.replace(/0+$/, "") : num.replace(/^0+/, "")) || "0";
}
function largeIntNumberAdd(num1, num2) {
  var decimal = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var number1 = removeInvalidZero(num1, decimal);
  var number2 = removeInvalidZero(num2, decimal);
  var isFirstLarger = number1.length > number2.length;
  var maxNumber = isFirstLarger ? number1 : number2;
  var minNumber = isFirstLarger ? number2 : number1;
  var newNumber = [];
  var step = [];
  var diff = decimal ? 0 : maxNumber.length - minNumber.length;
  var len2 = decimal ? minNumber.length : maxNumber.length;
  for (var i = len2 - 1; i >= 0; i--) {
    var minIndex = i - diff;
    var count = Number(maxNumber[i]) + (Number(minNumber[minIndex]) || 0) + (step[i] || 0);
    if (count >= 10) {
      step[i - 1] = 1;
    }
    newNumber.unshift(String(count % 10));
  }
  if (step[-1]) {
    newNumber.unshift("1");
  }
  if (decimal) {
    return newNumber.concat(maxNumber.slice(len2, maxNumber.length)).join("");
  }
  return newNumber.join("");
}
function largePositiveNumberAdd(num1, num2) {
  var _num1$split = num1.split("."), _num1$split2 = _slicedToArray(_num1$split, 2), _num1$split2$ = _num1$split2[0], intNumber1 = _num1$split2$ === void 0 ? "0" : _num1$split2$, _num1$split2$2 = _num1$split2[1], decimalNumber1 = _num1$split2$2 === void 0 ? "0" : _num1$split2$2;
  var _num2$split = num2.split("."), _num2$split2 = _slicedToArray(_num2$split, 2), _num2$split2$ = _num2$split2[0], intNumber2 = _num2$split2$ === void 0 ? "0" : _num2$split2$, _num2$split2$2 = _num2$split2[1], decimalNumber2 = _num2$split2$2 === void 0 ? "0" : _num2$split2$2;
  var integerSum = largeIntNumberAdd(intNumber1, intNumber2);
  if (decimalNumber1 === "0" && decimalNumber2 === "0")
    return integerSum;
  var newDecimalNumber1 = removeInvalidZero(decimalNumber1, true);
  var newDecimalNumber2 = removeInvalidZero(decimalNumber2, true);
  var decimalNumberSum = largeIntNumberAdd(newDecimalNumber1, newDecimalNumber2, true);
  var decimalLength = decimalNumberSum.length;
  if (decimalLength > newDecimalNumber1.length && decimalLength > newDecimalNumber2.length) {
    return [removeInvalidZero(largeIntNumberAdd(integerSum, "1")), removeInvalidZero(decimalNumberSum.slice(1), true)].filter(function(v) {
      return v;
    }).join(".");
  }
  return [removeInvalidZero(integerSum), removeInvalidZero(decimalNumberSum, true)].filter(function(v) {
    return v;
  }).join(".");
}
function compareLargeIntegerNumber(num1, num2) {
  var number1 = removeInvalidZero(num1);
  var number2 = removeInvalidZero(num2);
  if (number1.length === number2.length) {
    for (var i = 0, len2 = number1.length; i < len2; i++) {
      if (number1[i] > number2[i])
        return 1;
      if (number1[i] < number2[i])
        return -1;
    }
    return 0;
  }
  return number1.length > number2.length ? 1 : -1;
}
function compareLargeDecimalNumber(num1, num2) {
  var number1 = num1 && num1 !== "0" ? num1.replace(/0+$/, "") : "0";
  var number2 = num2 && num2 !== "0" ? num2.replace(/0+$/, "") : "0";
  var maxLength = Math.max(number1.length, number2.length);
  for (var i = 0, len2 = maxLength; i < len2; i++) {
    if ((number1[i] || 0) > (number2[i] || 0))
      return 1;
    if ((number1[i] || 0) < (number2[i] || 0))
      return -1;
  }
  return 0;
}
function formatENumber(num) {
  var _num$split = num.split("e"), _num$split2 = _slicedToArray(_num$split, 2), num1 = _num$split2[0], num2 = _num$split2[1];
  if (!num2)
    return num;
  var _num$split3 = num.split("."), _num$split4 = _slicedToArray(_num$split3, 2), integer = _num$split4[0], _num$split4$ = _num$split4[1], initDecimal = _num$split4$ === void 0 ? "" : _num$split4$;
  var zeroCount = Number(num2);
  var _initDecimal$split = initDecimal.split("e"), _initDecimal$split2 = _slicedToArray(_initDecimal$split, 1), decimal = _initDecimal$split2[0];
  if (zeroCount > decimal.length) {
    var multipleZero = fillZero(zeroCount - decimal.length);
    return num1.replace(/(^0+|\.)/g, "") + multipleZero;
  }
  var n1 = integer.replace(/^0+/, "") + decimal.slice(0, zeroCount);
  var d2 = decimal.slice(zeroCount);
  return d2 ? [n1, d2].join(".") : n1;
}
function compareLargeNumber(num1, num2) {
  var _formatENumber$split = formatENumber(num1).split("."), _formatENumber$split2 = _slicedToArray(_formatENumber$split, 2), integer1 = _formatENumber$split2[0], decimal1 = _formatENumber$split2[1];
  var _formatENumber$split3 = formatENumber(num2).split("."), _formatENumber$split4 = _slicedToArray(_formatENumber$split3, 2), integer2 = _formatENumber$split4[0], decimal2 = _formatENumber$split4[1];
  var result = compareLargeIntegerNumber(integer1.replace("-", ""), integer2.replace("-", ""));
  var integer1IsNegative = integer1.includes("-");
  var integer2IsNegative = integer2.includes("-");
  if (integer1IsNegative && !integer2IsNegative)
    return -1;
  if (!integer1IsNegative && integer2IsNegative)
    return 1;
  if (integer1IsNegative && integer2IsNegative) {
    if (result === 0)
      return 0;
    return result > 0 ? -1 : 1;
  }
  if (result === 0) {
    return compareLargeDecimalNumber(decimal1, decimal2);
  }
  return result;
}
function isInfinity(num) {
  return [-Infinity, Infinity].includes(Number(num));
}
function isSafeNumber(num) {
  return Number(num) < Number.MAX_SAFE_INTEGER && Number(num) > Number.MIN_SAFE_INTEGER;
}
function compareNumber(num1, num2, largeNumber) {
  var isSafeNumberCompare = isSafeNumber(num1) && isSafeNumber(num2) && !largeNumber;
  var isInfinityCompare = isInfinity(num1) || isInfinity(num2);
  if (isSafeNumberCompare || isInfinityCompare) {
    if (Number(num1) === Number(num2))
      return 0;
    return Number(num1) > Number(num2) ? 1 : -1;
  }
  return compareLargeNumber(String(num1), String(num2));
}
function largeIntegerNumberSubtract(num1, num2, p) {
  if (num1 === num2)
    return "0";
  var _ref = p || {}, decimal = _ref.decimal, stayZero = _ref.stayZero;
  var number1 = removeInvalidZero(num1);
  var number2 = removeInvalidZero(num2);
  var isFirstLarger = compareLargeIntegerNumber(number1, number2) > 0;
  var maxNumber = isFirstLarger ? number1 : number2;
  var minNumber = isFirstLarger ? number2 : number1;
  var newNumber = [];
  var step = [];
  var diff = decimal ? 0 : maxNumber.length - minNumber.length;
  var len2 = decimal ? minNumber.length : maxNumber.length;
  for (var i = len2 - 1; i >= 0; i--) {
    var minIndex = i - diff;
    var count = Number(maxNumber[i]) - (Number(minNumber[minIndex]) || 0) - (step[i] || 0);
    if (count < 0) {
      step[i - 1] = 1;
      count += 10;
    }
    newNumber.unshift(String(count));
  }
  if (decimal) {
    return newNumber.concat(maxNumber.slice(len2, maxNumber.length)).join("");
  }
  var finalNumber = newNumber.join("");
  if (!stayZero) {
    finalNumber = finalNumber.replace(/^0+/, "");
  }
  return removeInvalidZero(isFirstLarger ? finalNumber : "-".concat(finalNumber));
}
function largePositiveNumberSubtract(num1, num2) {
  if (num1 === num2)
    return "0";
  var isFirstLarger = compareNumber(num1, num2, true) > 0;
  var maxNumber = isFirstLarger ? num1 : num2;
  var minNumber = isFirstLarger ? num2 : num1;
  var _maxNumber$split = maxNumber.split("."), _maxNumber$split2 = _slicedToArray(_maxNumber$split, 2), intNumber1 = _maxNumber$split2[0], _maxNumber$split2$ = _maxNumber$split2[1], decimalNumber1 = _maxNumber$split2$ === void 0 ? "0" : _maxNumber$split2$;
  var _minNumber$split = minNumber.split("."), _minNumber$split2 = _slicedToArray(_minNumber$split, 2), intNumber2 = _minNumber$split2[0], _minNumber$split2$ = _minNumber$split2[1], decimalNumber2 = _minNumber$split2$ === void 0 ? "0" : _minNumber$split2$;
  var integerNumber = largeIntegerNumberSubtract(intNumber1, intNumber2);
  if (decimalNumber1 === "0" && decimalNumber2 === "0") {
    return isFirstLarger ? integerNumber : "-".concat(integerNumber);
  }
  var decimalNumber = "";
  var addOneNumber = decimalNumber1;
  if (decimalNumber1.length < decimalNumber2.length) {
    addOneNumber = "".concat(decimalNumber1).concat(fillZero(decimalNumber2.length - decimalNumber1.length));
  }
  if (compareLargeDecimalNumber(addOneNumber, decimalNumber2) >= 0) {
    decimalNumber = largeIntegerNumberSubtract(addOneNumber, decimalNumber2, {
      decimal: true
    });
  } else {
    if (decimalNumber1.length < decimalNumber2.length || decimalNumber1 === "0") {
      decimalNumber = largeIntegerNumberSubtract("1".concat(addOneNumber), decimalNumber2, {
        stayZero: true
      });
      decimalNumber = fillZero(decimalNumber2.length - decimalNumber.length) + decimalNumber;
    } else {
      decimalNumber = largeIntegerNumberSubtract(decimalNumber1, decimalNumber2, {
        decimal: true
      });
    }
    integerNumber = largeIntegerNumberSubtract(integerNumber, "1");
  }
  var finalNumber = decimalNumber ? [integerNumber, decimalNumber].join(".") : integerNumber;
  return isFirstLarger ? finalNumber : "-".concat(finalNumber);
}
function largeNumberSubtract(num1, num2) {
  var isFirstNegative = num1[0] === "-";
  var isSecondNegative = num2[0] === "-";
  if (isFirstNegative && !isSecondNegative) {
    var r = largePositiveNumberAdd(num1.slice(1), num2);
    return "-".concat(r);
  }
  if (isFirstNegative && isSecondNegative) {
    return largePositiveNumberSubtract(num2.slice(1), num1.slice(1));
  }
  if (!isFirstNegative && isSecondNegative) {
    return largePositiveNumberAdd(num1, num2.slice(1));
  }
  return largePositiveNumberSubtract(num1, num2);
}
function largeNumberAdd(num1, num2) {
  var isFirstNegative = num1[0] === "-";
  var isSecondNegative = num2[0] === "-";
  if (isFirstNegative && !isSecondNegative) {
    return largePositiveNumberSubtract(num2, num1.slice(1));
  }
  if (isFirstNegative && isSecondNegative) {
    var r = largePositiveNumberAdd(num2.slice(1), num1.slice(1));
    return "-".concat(r);
  }
  if (!isFirstNegative && isSecondNegative) {
    return largePositiveNumberSubtract(num1, num2.slice(1));
  }
  return largePositiveNumberAdd(num1, num2);
}
function largeNumberToFixed(number2) {
  var decimalPlaces = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var largeNumber = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!largeNumber)
    return Number(number2).toFixed(decimalPlaces);
  if (!isString_1(number2))
    return String(number2);
  var _number$split = number2.split("."), _number$split2 = _slicedToArray(_number$split, 2), num1 = _number$split2[0], num2 = _number$split2[1];
  if (!num2) {
    return decimalPlaces ? [number2, fillZero(decimalPlaces)].join(".") : number2;
  }
  if (decimalPlaces === 0) {
    return Number(num2[0]) >= 5 ? largePositiveNumberAdd(num1, "1") : num1;
  }
  var decimalNumber = num2.slice(0, decimalPlaces);
  if (num2.length < decimalPlaces) {
    decimalNumber += fillZero(decimalPlaces - num2.length);
  } else {
    decimalNumber = Number(num2[decimalPlaces]) >= 5 ? largePositiveNumberAdd(decimalNumber, "1") : decimalNumber;
  }
  return [num1, decimalNumber].join(".");
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function canAddNumber(num, max2) {
  var largeNumber = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (!num && num !== 0)
    return true;
  if (largeNumber && isString_1(num)) {
    return compareNumber(num, max2, largeNumber) < 0;
  }
  return num < max2;
}
function canReduceNumber(num, min3) {
  var largeNumber = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (!num && num !== 0)
    return true;
  if (largeNumber && isString_1(num)) {
    return compareNumber(num, min3, largeNumber) > 0;
  }
  return num > min3;
}
function putInRangeNumber(val, params) {
  if (val === "")
    return void 0;
  var max2 = params.max, min3 = params.min, lastValue = params.lastValue, largeNumber = params.largeNumber;
  if (!isInputNumber(val))
    return lastValue;
  if (largeNumber && (isString_1(max2) || max2 === Infinity) && (isString_1(min3) || min3 === -Infinity)) {
    if (compareNumber(max2, val, largeNumber) < 0)
      return max2;
    if (compareNumber(min3, val, largeNumber) > 0)
      return min3;
    return val;
  }
  return Math.max(Number(min3), Math.min(Number(max2), Number(val)));
}
function positiveAdd(num1, num2) {
  var _num1$toString$split$, _num2$toString$split$;
  if (!num1 || !num2)
    return (num1 || 0) + (num2 || 0);
  var r1 = ((_num1$toString$split$ = num1.toString().split(".")[1]) === null || _num1$toString$split$ === void 0 ? void 0 : _num1$toString$split$.length) || 0;
  var r2 = ((_num2$toString$split$ = num2.toString().split(".")[1]) === null || _num2$toString$split$ === void 0 ? void 0 : _num2$toString$split$.length) || 0;
  if (!r1 && !r2)
    return num1 + num2;
  var newNumber1 = num1;
  var newNumber2 = num2;
  var diff = Math.abs(r1 - r2);
  var digit = Math.pow(10, Math.max(r1, r2));
  if (diff > 0) {
    var cm = Math.pow(10, diff);
    if (r1 > r2) {
      newNumber1 = Number(num1.toString().replace(".", ""));
      newNumber2 = Number(num2.toString().replace(".", "")) * cm;
    } else {
      newNumber1 = Number(num1.toString().replace(".", "")) * cm;
      newNumber2 = Number(num2.toString().replace(".", ""));
    }
  } else {
    newNumber1 = Number(num1.toString().replace(".", ""));
    newNumber2 = Number(num2.toString().replace(".", ""));
  }
  return (newNumber1 + newNumber2) / digit;
}
function positiveSubtract(num1, num2) {
  var _num1$toString$split$2, _num2$toString$split$2;
  if (!num1 || !num2)
    return (num1 || 0) - (num2 || 0);
  var r1 = ((_num1$toString$split$2 = num1.toString().split(".")[1]) === null || _num1$toString$split$2 === void 0 ? void 0 : _num1$toString$split$2.length) || 0;
  var r2 = ((_num2$toString$split$2 = num2.toString().split(".")[1]) === null || _num2$toString$split$2 === void 0 ? void 0 : _num2$toString$split$2.length) || 0;
  var digit = Math.pow(10, Math.max(r1, r2));
  var n = r1 >= r2 ? r1 : r2;
  return Number(((num1 * digit - num2 * digit) / digit).toFixed(n));
}
function add(num1, num2) {
  if (num1 < 0 && num2 > 0)
    return positiveSubtract(num2, Math.abs(num1));
  if (num1 < 0 && num2 < 0)
    return positiveAdd(Math.abs(num1), Math.abs(num2)) * -1;
  if (num1 > 0 && num2 < 0)
    return positiveSubtract(num1, Math.abs(num2));
  return positiveAdd(num1, num2);
}
function subtract(num1, num2) {
  if (num1 < 0 && num2 > 0)
    return positiveAdd(Math.abs(num1), num2) * -1;
  if (num1 < 0 && num2 < 0)
    return positiveSubtract(Math.abs(num2), Math.abs(num1));
  if (num1 > 0 && num2 < 0)
    return positiveAdd(num1, Math.abs(num2));
  return positiveSubtract(num1, num2);
}
function getStepValue(p) {
  var op = p.op, step = p.step, lastValue = p.lastValue, max2 = p.max, min3 = p.min, largeNumber = p.largeNumber;
  if (step <= 0) {
    log.error("InputNumber", "step must be larger than 0.");
    return lastValue;
  }
  var tStep = isNumber_1(step) ? String(step) : step;
  var newVal;
  if (op === "add") {
    if (largeNumber && isString_1(lastValue)) {
      newVal = largeNumberAdd(String(lastValue), String(tStep));
    } else {
      newVal = add(Number(lastValue || 0), Number(step));
    }
  } else if (op === "reduce") {
    if (largeNumber && isString_1(lastValue)) {
      newVal = largeNumberSubtract(String(lastValue), String(tStep));
    } else {
      newVal = subtract(Number(lastValue || 0), Number(step));
    }
  }
  if (isUndefined_1(lastValue)) {
    newVal = putInRangeNumber(newVal, {
      max: max2,
      min: min3,
      lastValue,
      largeNumber
    });
  }
  return largeNumber ? newVal : Number(newVal);
}
function getMaxOrMinValidateResult(p) {
  var largeNumber = p.largeNumber, value = p.value, max2 = p.max, min3 = p.min;
  if (isUndefined_1(largeNumber))
    return void 0;
  if (largeNumber && isNumber_1(value)) {
    log.warn("InputNumber", "largeNumber value must be a string.");
  }
  var error;
  if (compareNumber(value, max2, largeNumber) > 0) {
    error = "exceed-maximum";
  } else if (compareNumber(value, min3, largeNumber) < 0) {
    error = "below-minimum";
  } else {
    error = void 0;
  }
  return error;
}
var specialCode = ["-", ".", "e", "E", "+"];
function canInputNumber(number2, largeNumber) {
  var _number$match, _number$match2;
  if (["", null, void 0].includes(number2))
    return true;
  if (number2.slice(0, 2) === "00")
    return false;
  if (((_number$match = number2.match(/\./g)) === null || _number$match === void 0 ? void 0 : _number$match.length) > 1)
    return false;
  var minusSignCount = ((_number$match2 = number2.match(/-/g)) === null || _number$match2 === void 0 ? void 0 : _number$match2.length) || 0;
  if (minusSignCount > 1 || minusSignCount === 1 && number2[0] !== "-")
    return false;
  var isNumber2 = largeNumber && isInputNumber(number2) || !Number.isNaN(Number(number2));
  if (!isNumber2 && !specialCode.includes(number2.slice(-1)))
    return false;
  if (/e/i.test(number2) && !/\de/i.test(number2))
    return false;
  return true;
}
function canSetValue(number2, lastNumber) {
  return parseFloat(number2) !== lastNumber && !Number.isNaN(Number(number2));
}
function formatUnCompleteNumber(number2) {
  var extra = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (["", null, void 0].includes(number2) || !/\d+/.test(number2))
    return void 0;
  var decimalPlaces = extra.decimalPlaces, largeNumber = extra.largeNumber, isToFixed = extra.isToFixed;
  var newNumber = number2.replace(/[.|+|\-|e]$/, "");
  if (largeNumber) {
    newNumber = formatENumber(newNumber);
  }
  if (decimalPlaces !== void 0) {
    newNumber = largeNumberToFixed(newNumber, decimalPlaces, largeNumber);
  }
  if (largeNumber)
    return newNumber;
  return isToFixed ? newNumber : parseFloat(newNumber);
}
function formatThousandths(number2) {
  var thousandthsRegExp = /^[-+]?\d{1,3}(,\d{3})*(\.(\d*))?$/;
  if (thousandthsRegExp.test(number2))
    return number2.replace(/,/g, "");
  return number2;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useInputNumber(props2) {
  var _useCommonClassName = useCommonClassName(), classPrefix = _useCommonClassName.classPrefix, sizeClassNames = _useCommonClassName.sizeClassNames, statusClassNames = _useCommonClassName.statusClassNames;
  var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue, max2 = _toRefs.max, min3 = _toRefs.min;
  var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), tValue = _useVModel2[0], setTValue = _useVModel2[1];
  var inputRef = ref();
  var userInput = ref("");
  var tDisabled = useFormDisabled();
  var isError2 = ref();
  var disabledReduce = computed(function() {
    return tDisabled.value || !canReduceNumber(tValue.value, props2.min, props2.largeNumber);
  });
  var disabledAdd = computed(function() {
    return tDisabled.value || !canAddNumber(tValue.value, props2.max, props2.largeNumber);
  });
  var wrapClasses = computed(function() {
    var _ref;
    return ["".concat(classPrefix.value, "-input-number"), sizeClassNames[props2.size], (_ref = {}, _defineProperty$2(_ref, statusClassNames.disabled, tDisabled.value), _defineProperty$2(_ref, "".concat(classPrefix.value, "-is-controls-right"), props2.theme === "column"), _defineProperty$2(_ref, "".concat(classPrefix.value, "-input-number--").concat(props2.theme), props2.theme), _defineProperty$2(_ref, "".concat(classPrefix.value, "-input-number--auto-width"), props2.autoWidth), _ref)];
  });
  var reduceClasses = computed(function() {
    return ["".concat(classPrefix.value, "-input-number__decrease"), _defineProperty$2({}, statusClassNames.disabled, disabledReduce.value)];
  });
  var addClasses = computed(function() {
    return ["".concat(classPrefix.value, "-input-number__increase"), _defineProperty$2({}, statusClassNames.disabled, disabledAdd.value)];
  });
  var getUserInput = function getUserInput2(value2) {
    var _inputRef$value;
    if (!value2 && value2 !== 0)
      return "";
    var inputStr = value2 || value2 === 0 ? String(value2) : "";
    if (!((_inputRef$value = inputRef.value) !== null && _inputRef$value !== void 0 && (_inputRef$value = _inputRef$value.inputRef) !== null && _inputRef$value !== void 0 && _inputRef$value.contains(document.activeElement))) {
      var num = formatUnCompleteNumber(inputStr, {
        decimalPlaces: props2.decimalPlaces,
        largeNumber: props2.largeNumber,
        isToFixed: true
      });
      inputStr = num || num === 0 ? String(num) : "";
      if (props2.format) {
        inputStr = String(props2.format(value2, {
          fixedNumber: inputStr
        }));
      }
    }
    return inputStr;
  };
  watch(tValue, function(val) {
    var largeNumber = props2.largeNumber, decimalPlaces = props2.decimalPlaces;
    var inputValue = [void 0, null].includes(val) ? "" : String(val);
    if (!largeNumber && !Number.isNaN(userInput.value)) {
      if (parseFloat(userInput.value) !== val) {
        userInput.value = getUserInput(inputValue);
      }
      var fixedNumber = Number(largeNumberToFixed(inputValue, decimalPlaces, largeNumber));
      if (decimalPlaces !== void 0 && ![void 0, null].includes(val) && Number(fixedNumber) !== Number(tValue.value)) {
        setTValue(fixedNumber, {
          type: "props",
          e: void 0
        });
      }
    }
    if (largeNumber) {
      userInput.value = getUserInput(inputValue);
      if (decimalPlaces !== void 0 && largeNumberToFixed(inputValue, decimalPlaces, largeNumber) !== val) {
        setTValue(userInput.value, {
          type: "props",
          e: void 0
        });
      }
    }
  }, {
    immediate: true
  });
  watch([tValue, max2, min3], function() {
    var _props$onValidate;
    if ([void 0, "", null].includes(tValue.value))
      return;
    var max22 = props2.max, min22 = props2.min, largeNumber = props2.largeNumber;
    var error = getMaxOrMinValidateResult({
      value: tValue.value,
      largeNumber,
      max: max22,
      min: min22
    });
    isError2.value = error;
    (_props$onValidate = props2.onValidate) === null || _props$onValidate === void 0 ? void 0 : _props$onValidate.call(props2, {
      error
    });
  }, {
    immediate: true
  });
  var handleStepValue = function handleStepValue2(op) {
    var newValue = getStepValue({
      op,
      step: props2.step,
      max: props2.max,
      min: props2.min,
      lastValue: tValue.value,
      largeNumber: props2.largeNumber
    });
    var largeNumber = props2.largeNumber, max22 = props2.max, min22 = props2.min;
    var overLimit = getMaxOrMinValidateResult({
      value: newValue,
      largeNumber,
      max: max22,
      min: min22
    });
    return {
      overLimit,
      newValue
    };
  };
  var handleReduce = function handleReduce2(e) {
    if (disabledReduce.value || props2.readonly)
      return;
    var r = handleStepValue("reduce");
    if (r.overLimit && !props2.allowInputOverLimit)
      return;
    setTValue(r.newValue, {
      type: "reduce",
      e
    });
  };
  var handleAdd = function handleAdd2(e) {
    if (disabledAdd.value || props2.readonly)
      return;
    var r = handleStepValue("add");
    if (r.overLimit && !props2.allowInputOverLimit)
      return;
    setTValue(r.newValue, {
      type: "add",
      e
    });
  };
  var onInnerInputChange = function onInnerInputChange2(inputValue, _ref4) {
    var e = _ref4.e;
    var val = formatThousandths(inputValue);
    if (!canInputNumber(val, props2.largeNumber))
      return;
    userInput.value = val;
    if (props2.largeNumber) {
      setTValue(val, {
        type: "input",
        e
      });
      return;
    }
    if (canSetValue(String(val), Number(tValue.value))) {
      var newVal = val === "" ? void 0 : Number(val);
      setTValue(newVal, {
        type: "input",
        e
      });
    }
  };
  var handleBlur = function handleBlur2(value2, ctx) {
    var _props$onBlur;
    var largeNumber = props2.largeNumber, max22 = props2.max, min22 = props2.min, decimalPlaces = props2.decimalPlaces;
    if (!props2.allowInputOverLimit && tValue.value !== void 0) {
      var r = getMaxOrMinValidateResult({
        value: tValue.value,
        largeNumber,
        max: max22,
        min: min22
      });
      if (r === "below-minimum") {
        setTValue(min22, {
          type: "blur",
          e: ctx.e
        });
        return;
      }
      if (r === "exceed-maximum") {
        setTValue(max22, {
          type: "blur",
          e: ctx.e
        });
        return;
      }
    }
    var newValue = formatUnCompleteNumber(value2, {
      decimalPlaces,
      largeNumber
    });
    userInput.value = getUserInput(newValue);
    if (newValue !== tValue.value) {
      setTValue(newValue, {
        type: "blur",
        e: ctx.e
      });
    }
    (_props$onBlur = props2.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props2, newValue, ctx);
  };
  var handleFocus = function handleFocus2(value2, ctx) {
    var _props$onFocus;
    userInput.value = tValue.value || tValue.value === 0 ? String(tValue.value) : "";
    (_props$onFocus = props2.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props2, value2, ctx);
  };
  var handleKeydown = function handleKeydown2(value2, ctx) {
    var _props$onKeydown;
    if (tDisabled.value)
      return;
    var e = ctx.e;
    var keyEvent = {
      ArrowUp: handleAdd,
      ArrowDown: handleReduce
    };
    var code = e.code || e.key;
    if (keyEvent[code] !== void 0) {
      keyEvent[code](e);
    }
    (_props$onKeydown = props2.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call(props2, value2, ctx);
  };
  var handleKeyup = function handleKeyup2(value2, ctx) {
    var _props$onKeyup;
    (_props$onKeyup = props2.onKeyup) === null || _props$onKeyup === void 0 ? void 0 : _props$onKeyup.call(props2, value2, ctx);
  };
  var handleKeypress = function handleKeypress2(value2, ctx) {
    var _props$onKeypress;
    (_props$onKeypress = props2.onKeypress) === null || _props$onKeypress === void 0 ? void 0 : _props$onKeypress.call(props2, value2, ctx);
  };
  var handleEnter = function handleEnter2(value2, ctx) {
    var _props$onEnter;
    userInput.value = getUserInput(value2);
    var newValue = formatUnCompleteNumber(value2, {
      decimalPlaces: props2.decimalPlaces,
      largeNumber: props2.largeNumber
    });
    if (newValue !== value2 && String(newValue) !== value2) {
      setTValue(newValue, {
        type: "enter",
        e: ctx.e
      });
    }
    (_props$onEnter = props2.onEnter) === null || _props$onEnter === void 0 ? void 0 : _props$onEnter.call(props2, newValue, ctx);
  };
  var focus = function focus2() {
    inputRef.value.focus();
  };
  var blur = function blur2() {
    inputRef.value.blur();
  };
  var listeners = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeydown: handleKeydown,
    onKeyup: handleKeyup,
    onKeypress: handleKeypress,
    onEnter: handleEnter,
    onClick: focus
  };
  return {
    classPrefix,
    wrapClasses,
    reduceClasses,
    addClasses,
    tDisabled,
    isError: isError2,
    listeners,
    userInput,
    tValue,
    inputRef,
    focus,
    blur,
    handleReduce,
    handleAdd,
    onInnerInputChange
  };
}
const index$b = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$H(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$G(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$H(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$H(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _InputNumber = defineComponent({
  name: "TInputNumber",
  props: props$f,
  setup: function setup4(props2, context) {
    var _useGlobalIcon = useGlobalIcon({
      AddIcon: add$1,
      RemoveIcon: remove,
      ChevronDownIcon: chevronDown,
      ChevronUpIcon: chevronUp
    }), AddIcon$1 = _useGlobalIcon.AddIcon, RemoveIcon$1 = _useGlobalIcon.RemoveIcon, ChevronDownIcon$1 = _useGlobalIcon.ChevronDownIcon, ChevronUpIcon$1 = _useGlobalIcon.ChevronUpIcon;
    var p = useInputNumber(props2);
    var inputRef = p.inputRef;
    context.expose(_objectSpread$G({}, p));
    return function() {
      var reduceIcon = props2.theme === "column" ? createVNode(ChevronDownIcon$1, {
        "size": props2.size
      }, null) : createVNode(RemoveIcon$1, {
        "size": props2.size
      }, null);
      var addIcon = props2.theme === "column" ? createVNode(ChevronUpIcon$1, {
        "size": props2.size
      }, null) : createVNode(AddIcon$1, {
        "size": props2.size
      }, null);
      var status = p.isError.value ? "error" : props2.status;
      return createVNode("div", {
        "class": p.wrapClasses.value
      }, [props2.theme !== "normal" && createVNode(Button, {
        "class": p.reduceClasses.value,
        "disabled": p.tDisabled.value,
        "onClick": p.handleReduce,
        "variant": "outline",
        "shape": "square",
        "icon": function icon() {
          return reduceIcon;
        }
      }, null), createVNode(Input, mergeProps({
        "ref": inputRef,
        "disabled": p.tDisabled.value,
        "readonly": props2.readonly,
        "autocomplete": "off",
        "placeholder": props2.placeholder,
        "unselectable": props2.readonly ? "on" : "off",
        "autoWidth": props2.autoWidth,
        "align": props2.align || (props2.theme === "row" ? "center" : void 0),
        "status": status,
        "label": props2.label,
        "suffix": props2.suffix
      }, p.listeners, props2.inputProps, {
        "value": p.userInput.value,
        "onChange": p.onInnerInputChange
      }), context.slots), props2.theme !== "normal" && createVNode(Button, {
        "class": p.addClasses.value,
        "disabled": p.tDisabled.value,
        "onClick": p.handleAdd,
        "variant": "outline",
        "shape": "square",
        "icon": function icon() {
          return addIcon;
        }
      }, null), props2.tips && createVNode("div", {
        "class": "".concat(p.classPrefix.value, "-input__tips ").concat(p.classPrefix.value, "-input__tips--").concat(status)
      }, [props2.tips])]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var InputNumber = withInstall(_InputNumber);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var assignValue = _assignValue, castPath$2 = _castPath, isIndex$1 = _isIndex, isObject$1 = isObject_1, toKey$1 = _toKey;
function baseSet$2(object, path, value, customizer) {
  if (!isObject$1(object)) {
    return object;
  }
  path = castPath$2(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key2 = toKey$1(path[index2]), newValue = value;
    if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key2];
      newValue = customizer ? customizer(objValue, key2, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$1(objValue) ? objValue : isIndex$1(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key2, newValue);
    nested = nested[key2];
  }
  return object;
}
var _baseSet = baseSet$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGet$1 = _baseGet, baseSet$1 = _baseSet, castPath$1 = _castPath;
function basePickBy$1(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet$1(object, path);
    if (predicate(value, path)) {
      baseSet$1(result, castPath$1(path, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
function baseHasIn$1(object, key2) {
  return object != null && key2 in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath = _castPath, isArguments = isArguments_1, isArray = isArray_1, isIndex = _isIndex, isLength = isLength_1, toKey = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key2 = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key2))) {
      break;
    }
    object = object[key2];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key2, length) && (isArray(object) || isArguments(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var basePickBy = _basePickBy, hasIn = hasIn_1;
function basePick$1(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var _basePick = basePick$1;
var basePick = _basePick, flatRest = _flatRest;
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick_1 = pick;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseGet = _baseGet;
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$3(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$3.prototype.add = SetCache$3.prototype.push = setCacheAdd;
SetCache$3.prototype.has = setCacheHas;
var _SetCache = SetCache$3;
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index2 = fromIndex - 1, length = array.length;
  while (++index2 < length) {
    if (array[index2] === value) {
      return index2;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$3(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var _arrayIncludes = arrayIncludes$3;
function arrayIncludesWith$3(array, value, comparator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (comparator(value, array[index2])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$3;
function cacheHas$3(cache, key2) {
  return cache.has(key2);
}
var _cacheHas = cacheHas$3;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var SetCache$2 = _SetCache, arrayIncludes$2 = _arrayIncludes, arrayIncludesWith$2 = _arrayIncludesWith, arrayMap$1$1 = _arrayMap, baseUnary$1 = _baseUnary, cacheHas$2 = _cacheHas;
var nativeMin = Math.min;
function baseIntersection$1(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith$2 : arrayIncludes$2, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap$1$1(array, baseUnary$1(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache$2(othIndex && array) : void 0;
  }
  array = arrays[0];
  var index2 = -1, seen = caches[0];
  outer:
    while (++index2 < length && result.length < maxLength) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? cacheHas$2(seen, computed2) : includes(result, computed2, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas$2(cache, computed2) : includes(arrays[othIndex], computed2, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
var _baseIntersection = baseIntersection$1;
var isArrayLikeObject$1 = isArrayLikeObject_1;
function castArrayLikeObject$1(value) {
  return isArrayLikeObject$1(value) ? value : [];
}
var _castArrayLikeObject = castArrayLikeObject$1;
var arrayMap$2 = _arrayMap, baseIntersection = _baseIntersection, baseRest$2 = _baseRest, castArrayLikeObject = _castArrayLikeObject;
var intersection = baseRest$2(function(arrays) {
  var mapped = arrayMap$2(arrays, castArrayLikeObject);
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
});
var intersection_1 = intersection;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$e = {
  allowInput: Boolean,
  autoWidth: Boolean,
  autofocus: Boolean,
  borderless: Boolean,
  clearable: Boolean,
  collapsedItems: {
    type: Function
  },
  disabled: Boolean,
  inputProps: {
    type: Object
  },
  inputValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultInputValue: {
    type: [String, Number]
  },
  keys: {
    type: Object
  },
  label: {
    type: [String, Function]
  },
  loading: Boolean,
  minCollapsedNum: {
    type: Number,
    "default": 0
  },
  multiple: Boolean,
  panel: {
    type: [String, Function]
  },
  placeholder: {
    type: String,
    "default": ""
  },
  popupProps: {
    type: Object
  },
  popupVisible: {
    type: Boolean,
    "default": void 0
  },
  defaultPopupVisible: Boolean,
  readonly: Boolean,
  status: {
    type: String,
    "default": "default",
    validator: function validator9(val) {
      if (!val)
        return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  suffix: {
    type: [String, Function]
  },
  suffixIcon: {
    type: Function
  },
  tag: {
    type: [String, Function]
  },
  tagInputProps: {
    type: Object
  },
  tagProps: {
    type: Object
  },
  tips: {
    type: [String, Function]
  },
  value: {
    type: [String, Number, Boolean, Object, Array, Date],
    "default": void 0
  },
  valueDisplay: {
    type: [String, Function]
  },
  onBlur: Function,
  onClear: Function,
  onEnter: Function,
  onFocus: Function,
  onInputChange: Function,
  onMouseenter: Function,
  onMouseleave: Function,
  onPaste: Function,
  onPopupVisibleChange: Function,
  onTagChange: Function
};
const index$a = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _excluded$6 = ["tips"];
function ownKeys$G(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$F(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$G(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$G(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var COMMON_PROPERTIES = ["status", "clearable", "disabled", "label", "placeholder", "readonly", "suffix", "suffixIcon", "onPaste", "onMouseenter", "onMouseleave"];
var DEFAULT_KEYS$1 = {
  label: "label",
  value: "value",
  children: "children"
};
function getInputValue(value, keys2) {
  var iKeys = _objectSpread$F(_objectSpread$F({}, DEFAULT_KEYS$1), keys2);
  return isObject_1(value) ? value[iKeys.label] : value;
}
function useSingle(props2, context) {
  var _props$defaultInputVa;
  var _toRefs = toRefs(props2), value = _toRefs.value, keys2 = _toRefs.keys, propsInputValue = _toRefs.inputValue;
  var classPrefix = usePrefixClass();
  var inputRef = ref();
  var _useDefaultValue = useDefaultValue(propsInputValue, (_props$defaultInputVa = props2.defaultInputValue) !== null && _props$defaultInputVa !== void 0 ? _props$defaultInputVa : "", props2.onInputChange, "inputValue"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), inputValue = _useDefaultValue2[0], setInputValue = _useDefaultValue2[1];
  var renderTNode = useTNodeJSX();
  var disable = useFormDisabled();
  var commonInputProps = computed(function() {
    return _objectSpread$F(_objectSpread$F({}, pick_1(props2, COMMON_PROPERTIES)), {}, {
      disabled: disable.value
    });
  });
  var onInnerClear = function onInnerClear2(context2) {
    var _context2$e, _props$onClear;
    context2 === null || context2 === void 0 || (_context2$e = context2.e) === null || _context2$e === void 0 ? void 0 : _context2$e.stopPropagation();
    (_props$onClear = props2.onClear) === null || _props$onClear === void 0 ? void 0 : _props$onClear.call(props2, context2);
    setInputValue("", {
      trigger: "clear"
    });
  };
  var onInnerInputChange = function onInnerInputChange2(value2, context2) {
    if (props2.allowInput) {
      setInputValue(value2, _objectSpread$F(_objectSpread$F({}, context2), {}, {
        trigger: context2.trigger || "input"
      }));
    }
  };
  var renderSelectSingle = function renderSelectSingle2(popupVisible) {
    var _context$attrs;
    var singleValueDisplay = renderTNode("valueDisplay");
    var displayedValue = popupVisible && props2.allowInput ? inputValue.value : getInputValue(value.value, keys2.value);
    var prefixContent = [renderTNode("label"), singleValueDisplay];
    var inputProps = _objectSpread$F(_objectSpread$F({}, commonInputProps.value), {}, {
      value: singleValueDisplay ? void 0 : displayedValue,
      label: prefixContent.length ? function() {
        return prefixContent;
      } : void 0,
      autoWidth: props2.autoWidth,
      readonly: !props2.allowInput || props2.readonly,
      placeholder: singleValueDisplay ? "" : props2.placeholder,
      suffixIcon: !disable.value && props2.loading ? function() {
        return createVNode(Loading, {
          "loading": true,
          "size": "small"
        }, null);
      } : props2.suffixIcon,
      showClearIconOnEmpty: Boolean(props2.clearable && (inputValue.value || displayedValue) && !disable.value && !props2.readonly),
      allowTriggerBlur: props2.allowInput && !props2.readonly
    }, props2.inputProps);
    var _context$slots = context.slots;
    _context$slots.tips;
    var slots = _objectWithoutProperties$1(_context$slots, _excluded$6);
    var inputClassProps = popupVisible ? ["".concat(classPrefix.value, "-input--focused"), "".concat(classPrefix.value, "-is-focused"), inputProps === null || inputProps === void 0 ? void 0 : inputProps.inputClass] : inputProps === null || inputProps === void 0 ? void 0 : inputProps.inputClass;
    return createVNode(Input, mergeProps({
      "ref": "inputRef",
      "style": (_context$attrs = context.attrs) === null || _context$attrs === void 0 ? void 0 : _context$attrs.style
    }, _objectSpread$F({
      onChange: onInnerInputChange,
      onClear: onInnerClear,
      onBlur: function onBlur(val, context2) {
        var _props$onBlur;
        (_props$onBlur = props2.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props2, value.value, _objectSpread$F(_objectSpread$F({}, context2), {}, {
          inputValue: val
        }));
      },
      onEnter: function onEnter(val, context2) {
        var _props$onEnter;
        (_props$onEnter = props2.onEnter) === null || _props$onEnter === void 0 ? void 0 : _props$onEnter.call(props2, value.value, _objectSpread$F(_objectSpread$F({}, context2), {}, {
          inputValue: val
        }));
      },
      onFocus: function onFocus(val, context2) {
        var _props$onFocus;
        (_props$onFocus = props2.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props2, value.value, _objectSpread$F(_objectSpread$F({}, context2), {}, {
          inputValue: val
        }));
      }
    }, inputProps), {
      "inputClass": inputClassProps
    }), slots);
  };
  return {
    inputRef,
    commonInputProps,
    onInnerClear,
    renderSelectSingle
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$d = {
  autoWidth: Boolean,
  clearable: Boolean,
  collapsedItems: {
    type: Function
  },
  disabled: Boolean,
  dragSort: Boolean,
  excessTagsDisplayType: {
    type: String,
    "default": "break-line",
    validator: function validator10(val) {
      if (!val)
        return true;
      return ["scroll", "break-line"].includes(val);
    }
  },
  inputProps: {
    type: Object
  },
  inputValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultInputValue: {
    type: [String, Number],
    "default": ""
  },
  label: {
    type: [String, Function]
  },
  max: {
    type: Number
  },
  minCollapsedNum: {
    type: Number,
    "default": 0
  },
  placeholder: {
    type: String,
    "default": void 0
  },
  readonly: Boolean,
  size: {
    type: String,
    "default": "medium",
    validator: function validator11(val) {
      if (!val)
        return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  status: {
    type: String,
    validator: function validator12(val) {
      if (!val)
        return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  suffix: {
    type: [String, Function]
  },
  suffixIcon: {
    type: Function
  },
  tag: {
    type: [String, Function]
  },
  tagProps: {
    type: Object
  },
  tips: {
    type: [String, Function]
  },
  value: {
    type: Array,
    "default": void 0
  },
  modelValue: {
    type: Array,
    "default": void 0
  },
  defaultValue: {
    type: Array,
    "default": function _default2() {
      return [];
    }
  },
  valueDisplay: {
    type: [String, Function]
  },
  onBlur: Function,
  onChange: Function,
  onClear: Function,
  onClick: Function,
  onDragSort: Function,
  onEnter: Function,
  onFocus: Function,
  onInputChange: Function,
  onMouseenter: Function,
  onMouseleave: Function,
  onPaste: Function,
  onRemove: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useTagScroll(props2) {
  var tagInputRef = ref();
  var _toRefs = toRefs(props2), excessTagsDisplayType = _toRefs.excessTagsDisplayType, readonly = _toRefs.readonly, disabled = _toRefs.disabled;
  var scrollDistance = ref(0);
  var scrollElement = ref();
  var mouseEnterTimer = ref();
  var updateScrollElement = function updateScrollElement2(element2) {
    var inputElement = element2.children[0];
    scrollElement.value = inputElement;
  };
  var updateScrollDistance = function updateScrollDistance2() {
    scrollDistance.value = scrollElement.value.scrollWidth - scrollElement.value.clientWidth;
  };
  var scrollTo = function scrollTo2(distance2) {
    var _scrollElement$value;
    if (!isFunction_1((_scrollElement$value = scrollElement.value) === null || _scrollElement$value === void 0 ? void 0 : _scrollElement$value.scroll))
      return;
    scrollElement.value.scroll({
      left: distance2,
      behavior: "smooth"
    });
  };
  var scrollToRight = function scrollToRight2() {
    updateScrollDistance();
    scrollTo(scrollDistance.value);
  };
  var scrollToLeft = function scrollToLeft2() {
    scrollTo(0);
  };
  var onWheel = function onWheel2(_ref) {
    var e = _ref.e;
    if (readonly.value || disabled.value)
      return;
    if (!scrollElement.value)
      return;
    if (e.deltaX > 0) {
      var distance2 = Math.min(scrollElement.value.scrollLeft + 120, scrollDistance.value);
      scrollTo(distance2);
    } else {
      var _distance = Math.max(scrollElement.value.scrollLeft - 120, 0);
      scrollTo(_distance);
    }
  };
  var scrollToRightOnEnter = function scrollToRightOnEnter2() {
    if (excessTagsDisplayType.value !== "scroll")
      return;
    mouseEnterTimer.value = setTimeout(function() {
      scrollToRight();
      clearTimeout(mouseEnterTimer.value);
    }, 100);
  };
  var scrollToLeftOnLeave = function scrollToLeftOnLeave2() {
    if (excessTagsDisplayType.value !== "scroll")
      return;
    scrollTo(0);
    clearTimeout(mouseEnterTimer.value);
  };
  var init = function init2() {
    var _tagInputRef$value;
    var element2 = (_tagInputRef$value = tagInputRef.value) === null || _tagInputRef$value === void 0 ? void 0 : _tagInputRef$value.$el;
    if (!element2)
      return;
    updateScrollElement(element2);
  };
  var clear = function clear2() {
    clearTimeout(mouseEnterTimer.value);
  };
  onMounted(init);
  onUnmounted(clear);
  return {
    tagInputRef,
    scrollElement,
    scrollDistance,
    scrollTo,
    scrollToRight,
    scrollToLeft,
    updateScrollElement,
    updateScrollDistance,
    onWheel,
    scrollToRightOnEnter,
    scrollToLeftOnLeave
  };
}
const index$9 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$F(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$E(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$F(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$F(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function useTagList(props2) {
  var renderTNode = useTNodeJSX();
  var classPrefix = usePrefixClass();
  var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue, onRemove = _toRefs.onRemove, max2 = _toRefs.max, minCollapsedNum = _toRefs.minCollapsedNum, size = _toRefs.size, disabled = _toRefs.disabled, readonly = _toRefs.readonly, tagProps = _toRefs.tagProps, getDragProps = _toRefs.getDragProps;
  var _useVModel = useVModel(value, modelValue, props2.defaultValue || [], props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), tagValue = _useVModel2[0], setTagValue = _useVModel2[1];
  var oldInputValue = ref();
  var _onClose = function onClose(p) {
    var _onRemove$value;
    var arr = _toConsumableArray(tagValue.value);
    arr.splice(p.index, 1);
    setTagValue(arr, _objectSpread$E({
      trigger: "tag-remove"
    }, p));
    (_onRemove$value = onRemove.value) === null || _onRemove$value === void 0 ? void 0 : _onRemove$value.call(onRemove, _objectSpread$E(_objectSpread$E({}, p), {}, {
      trigger: "tag-remove",
      value: arr
    }));
  };
  var clearAll = function clearAll2(context) {
    setTagValue([], {
      trigger: "clear",
      e: context.e
    });
  };
  var onInnerEnter = function onInnerEnter2(value2, context) {
    var _tagValue$value, _props$onEnter;
    var valueStr = value2 ? String(value2).trim() : "";
    var isLimitExceeded = max2 && ((_tagValue$value = tagValue.value) === null || _tagValue$value === void 0 ? void 0 : _tagValue$value.length) >= max2.value;
    var newValue = tagValue.value;
    if (!isLimitExceeded && valueStr) {
      newValue = tagValue.value instanceof Array ? tagValue.value.concat(String(valueStr)) : [valueStr];
      setTagValue(newValue, {
        trigger: "enter",
        index: newValue.length - 1,
        item: valueStr,
        e: context.e
      });
    }
    props2 === null || props2 === void 0 || (_props$onEnter = props2.onEnter) === null || _props$onEnter === void 0 ? void 0 : _props$onEnter.call(props2, newValue, _objectSpread$E(_objectSpread$E({}, context), {}, {
      inputValue: value2
    }));
  };
  var onInputBackspaceKeyUp = function onInputBackspaceKeyUp2(value2) {
    if (!tagValue.value || !tagValue.value.length)
      return;
    oldInputValue.value = value2;
  };
  var onInputBackspaceKeyDown = function onInputBackspaceKeyDown2(value2, context) {
    var e = context.e;
    if (!tagValue.value || !tagValue.value.length || e.key === "Process")
      return;
    var isDelete = /(Backspace|NumpadDelete)/i.test(e.code) || /(Backspace|NumpadDelete)/i.test(e.key);
    if (!value2 && isDelete) {
      var _onRemove$value2;
      var index2 = tagValue.value.length - 1;
      var item = tagValue.value[index2];
      var trigger = "backspace";
      var newValue = tagValue.value.slice(0, -1);
      setTagValue(newValue, {
        e,
        index: index2,
        item,
        trigger
      });
      (_onRemove$value2 = onRemove.value) === null || _onRemove$value2 === void 0 ? void 0 : _onRemove$value2.call(onRemove, {
        e,
        index: index2,
        item,
        trigger,
        value: newValue
      });
    }
    oldInputValue.value = value2;
  };
  var renderLabel = function renderLabel2(_ref) {
    var _newList$map;
    var displayNode = _ref.displayNode, label = _ref.label;
    var newList = minCollapsedNum.value ? tagValue.value.slice(0, minCollapsedNum.value) : tagValue.value;
    var list = displayNode ? [displayNode] : (newList === null || newList === void 0 || (_newList$map = newList.map) === null || _newList$map === void 0 ? void 0 : _newList$map.call(newList, function(item, index2) {
      var _getDragProps$value;
      var tagContent = renderTNode("tag", {
        params: {
          value: item
        }
      });
      return createVNode(Tag, mergeProps({
        "key": "".concat(item).concat(index2),
        "size": size.value,
        "disabled": disabled.value,
        "onClose": function onClose(context) {
          return _onClose({
            e: context.e,
            item,
            index: index2
          });
        },
        "closable": !readonly.value && !disabled.value
      }, (_getDragProps$value = getDragProps.value) === null || _getDragProps$value === void 0 ? void 0 : _getDragProps$value.call(getDragProps, index2, item), tagProps.value), {
        "default": function _default14() {
          return [tagContent !== null && tagContent !== void 0 ? tagContent : item];
        }
      });
    })) || [];
    if (![null, void 0, ""].includes(label)) {
      list.unshift(createVNode("div", {
        "class": "".concat(classPrefix.value, "-tag-input__prefix"),
        "key": "label"
      }, [label]));
    }
    if (newList.length !== (tagValue.value || []).length) {
      var len2 = tagValue.value.length - newList.length;
      var more = renderTNode("collapsedItems", {
        params: {
          value: tagValue.value,
          count: tagValue.value.length - minCollapsedNum.value,
          collapsedTags: tagValue.value.slice(minCollapsedNum.value, tagValue.value.length),
          collapsedSelectedItems: tagValue.value.slice(minCollapsedNum.value, tagValue.value.length)
        }
      });
      list.push(more !== null && more !== void 0 ? more : createVNode(Tag, {
        "key": "more"
      }, {
        "default": function _default14() {
          return ["+", len2];
        }
      }));
    }
    return list;
  };
  return {
    tagValue,
    clearAll,
    onClose: _onClose,
    onInnerEnter,
    onInputBackspaceKeyUp,
    onInputBackspaceKeyDown,
    renderLabel
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useHover(props2) {
  var disabled = props2.disabled, readonly = props2.readonly, onMouseenter = props2.onMouseenter, onMouseleave = props2.onMouseleave;
  var isHover = ref(false);
  var addHover = function addHover2(context) {
    if (readonly || disabled)
      return;
    isHover.value = true;
    onMouseenter === null || onMouseenter === void 0 ? void 0 : onMouseenter(context);
  };
  var cancelHover = function cancelHover2(context) {
    if (readonly || disabled)
      return;
    isHover.value = false;
    onMouseleave === null || onMouseleave === void 0 ? void 0 : onMouseleave(context);
  };
  return {
    isHover,
    addHover,
    cancelHover
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useDragSorter(props2) {
  var sortOnDraggable = props2.sortOnDraggable, onDragSort = props2.onDragSort, onDragOverCheck = props2.onDragOverCheck;
  var draggingIndex = ref(-1);
  var dragStartData = ref(null);
  var isDropped = ref(null);
  var startInfo = reactive({
    nodeX: 0,
    nodeWidth: 0,
    mouseX: 0
  });
  var onDragOver = function onDragOver2(e, index2, record) {
    e.preventDefault();
    if (draggingIndex.value === index2 || draggingIndex.value === -1)
      return;
    var target = e.target;
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp && !(onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp.test(target.className))) {
      return;
    }
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.x && target) {
      if (!startInfo.nodeWidth)
        return;
      var _target$getBoundingCl = target.getBoundingClientRect(), x = _target$getBoundingCl.x, width = _target$getBoundingCl.width;
      var targetNodeMiddleX = x + width / 2;
      var draggingNodeLeft = e.clientX - (startInfo.mouseX - startInfo.nodeX);
      var draggingNodeRight = draggingNodeLeft + startInfo.nodeWidth;
      var overlap = false;
      if (draggingNodeLeft > x && draggingNodeLeft < x + width) {
        overlap = draggingNodeLeft < targetNodeMiddleX;
      } else {
        overlap = draggingNodeRight > targetNodeMiddleX;
      }
      if (!overlap)
        return;
    }
    onDragSort === null || onDragSort === void 0 ? void 0 : onDragSort({
      currentIndex: draggingIndex.value,
      current: dragStartData,
      target: record,
      targetIndex: index2
    });
    draggingIndex.value = index2;
  };
  if (!sortOnDraggable) {
    return {};
  }
  function onDragStart(e, index2, record) {
    draggingIndex.value = index2;
    dragStartData.value = record;
    var target = e.target;
    if (onDragOverCheck && target) {
      var _target$getBoundingCl2 = target.getBoundingClientRect(), x = _target$getBoundingCl2.x, width = _target$getBoundingCl2.width;
      startInfo.nodeX = x;
      startInfo.nodeWidth = width;
      startInfo.mouseX = e.clientX;
    }
  }
  function _onDrop2() {
    isDropped.value = true;
  }
  function onDragEnd() {
    if (!isDropped.value)
      ;
    isDropped.value = false;
    draggingIndex.value = -1;
    dragStartData.value = null;
  }
  function getDragProps(index2, record) {
    if (sortOnDraggable) {
      return {
        draggable: true,
        onDragstart: function onDragstart(e) {
          onDragStart(e, index2, record);
        },
        onDragover: function onDragover(e) {
          onDragOver(e, index2, record);
        },
        onDrop: function onDrop() {
          _onDrop2();
        },
        onDragend: function onDragend() {
          onDragEnd();
        }
      };
    }
    return {};
  }
  return {
    onDragStart,
    onDragOver,
    onDrop: _onDrop2,
    onDragEnd,
    getDragProps,
    dragging: draggingIndex.value !== -1
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$E(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$D(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$E(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$E(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var useComponentClassName$1 = function useComponentClassName() {
  return {
    NAME_CLASS: usePrefixClass("tag-input"),
    CLEAR_CLASS: usePrefixClass("tag-input__suffix-clear"),
    BREAK_LINE_CLASS: usePrefixClass("tag-input--break-line")
  };
};
var _TagInput = defineComponent({
  name: "TTagInput",
  props: _objectSpread$D({}, props$d),
  setup: function setup5(props2) {
    var _useComponentClassNam = useComponentClassName$1(), NAME_CLASS = _useComponentClassNam.NAME_CLASS, CLEAR_CLASS = _useComponentClassNam.CLEAR_CLASS, BREAK_LINE_CLASS = _useComponentClassNam.BREAK_LINE_CLASS;
    var _useGlobalIcon = useGlobalIcon({
      CloseCircleFilledIcon: closeCircleFilled
    }), CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
    var _toRefs = toRefs(props2), inputValue = _toRefs.inputValue, inputProps = _toRefs.inputProps;
    var _useDefault = useDefaultValue(inputValue, props2.defaultInputValue, props2.onInputChange, "inputValue"), _useDefault2 = _slicedToArray(_useDefault, 2), tInputValue = _useDefault2[0], setTInputValue = _useDefault2[1];
    var _toRefs2 = toRefs(props2), excessTagsDisplayType = _toRefs2.excessTagsDisplayType, readonly = _toRefs2.readonly, disabled = _toRefs2.disabled, clearable = _toRefs2.clearable, placeholder = _toRefs2.placeholder;
    var _useHover = useHover({
      readonly: props2.readonly,
      disabled: props2.disabled,
      onMouseenter: props2.onMouseenter,
      onMouseleave: props2.onMouseleave
    }), isHover = _useHover.isHover, addHover = _useHover.addHover, cancelHover = _useHover.cancelHover;
    var isComposition = ref(false);
    var _useConfig = useConfig(), classPrefix = _useConfig.classPrefix;
    var _useDragSorter = useDragSorter(_objectSpread$D(_objectSpread$D({}, props2), {}, {
      sortOnDraggable: props2.dragSort,
      onDragOverCheck: {
        x: true,
        targetClassNameRegExp: new RegExp("^".concat(classPrefix.value, "-tag"))
      }
    })), getDragProps = _useDragSorter.getDragProps;
    var _useTagScroll = useTagScroll(props2), scrollToRight = _useTagScroll.scrollToRight, onWheel = _useTagScroll.onWheel, scrollToRightOnEnter = _useTagScroll.scrollToRightOnEnter, scrollToLeftOnLeave = _useTagScroll.scrollToLeftOnLeave, tagInputRef = _useTagScroll.tagInputRef;
    var _useTagList = useTagList(reactive(_objectSpread$D(_objectSpread$D({}, toRefs(props2)), {}, {
      getDragProps
    }))), tagValue = _useTagList.tagValue, onInnerEnter = _useTagList.onInnerEnter, onInputBackspaceKeyUp = _useTagList.onInputBackspaceKeyUp, onInputBackspaceKeyDown = _useTagList.onInputBackspaceKeyDown, clearAll = _useTagList.clearAll, renderLabel = _useTagList.renderLabel, onClose = _useTagList.onClose;
    var classes = computed(function() {
      var _ref;
      var isEmpty = !(isArray_1(tagValue.value) && tagValue.value.length);
      return [NAME_CLASS.value, (_ref = {}, _defineProperty$2(_ref, BREAK_LINE_CLASS.value, excessTagsDisplayType.value === "break-line"), _defineProperty$2(_ref, "".concat(classPrefix.value, "-is-empty"), isEmpty), _defineProperty$2(_ref, "".concat(classPrefix.value, "-tag-input--with-tag"), !isEmpty), _ref)];
    });
    var tagInputPlaceholder = computed(function() {
      var _tagValue$value;
      return !((_tagValue$value = tagValue.value) !== null && _tagValue$value !== void 0 && _tagValue$value.length) ? placeholder.value : "";
    });
    var showClearIcon = computed(function() {
      var _tagValue$value2;
      return Boolean(!readonly.value && !disabled.value && clearable.value && isHover.value && (((_tagValue$value2 = tagValue.value) === null || _tagValue$value2 === void 0 ? void 0 : _tagValue$value2.length) || tInputValue.value));
    });
    var onInputEnter = function onInputEnter2(value, context) {
      var _context$e, _context$e$preventDef;
      (_context$e = context.e) === null || _context$e === void 0 || (_context$e$preventDef = _context$e.preventDefault) === null || _context$e$preventDef === void 0 ? void 0 : _context$e$preventDef.call(_context$e);
      setTInputValue("", {
        e: context.e,
        trigger: "enter"
      });
      !isComposition.value && onInnerEnter(value, context);
      nextTick(function() {
        scrollToRight();
        isComposition.value = false;
      });
    };
    var onInputCompositionstart = function onInputCompositionstart2(value, context) {
      var _inputProps$value, _inputProps$value$onC;
      isComposition.value = true;
      (_inputProps$value = inputProps.value) === null || _inputProps$value === void 0 || (_inputProps$value$onC = _inputProps$value.onCompositionstart) === null || _inputProps$value$onC === void 0 ? void 0 : _inputProps$value$onC.call(_inputProps$value, value, context);
    };
    var onInputCompositionend = function onInputCompositionend2(value, context) {
      var _inputProps$value2, _inputProps$value2$on;
      isComposition.value = false;
      (_inputProps$value2 = inputProps.value) === null || _inputProps$value2 === void 0 || (_inputProps$value2$on = _inputProps$value2.onCompositionend) === null || _inputProps$value2$on === void 0 ? void 0 : _inputProps$value2$on.call(_inputProps$value2, value, context);
    };
    var onClick = function onClick2(ctx) {
      var _props2$onClick;
      tagInputRef.value.focus();
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 ? void 0 : _props2$onClick.call(props2, ctx);
    };
    var onClearClick = function onClearClick2(context) {
      var _props2$onClear;
      clearAll(context);
      setTInputValue("", {
        e: context.e,
        trigger: "clear"
      });
      (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 ? void 0 : _props2$onClear.call(props2, context);
    };
    var focus = function focus2() {
      tagInputRef.value.focus();
    };
    return {
      CLEAR_CLASS,
      CloseCircleFilledIcon: CloseCircleFilledIcon$1,
      tagValue,
      tInputValue,
      isHover,
      tagInputPlaceholder,
      showClearIcon,
      tagInputRef,
      classPrefix,
      setTInputValue,
      addHover,
      cancelHover,
      onInputEnter,
      onInnerEnter,
      onInputBackspaceKeyUp,
      onInputBackspaceKeyDown,
      renderLabel,
      onWheel,
      scrollToRightOnEnter,
      scrollToLeftOnLeave,
      onClick,
      onClearClick,
      onClose,
      onInputCompositionstart,
      onInputCompositionend,
      focus,
      classes
    };
  },
  render: function render2() {
    var _this = this, _this$inputProps, _this$tagValue;
    var CloseCircleFilledIcon = this.CloseCircleFilledIcon;
    var suffixIconNode = this.showClearIcon ? createVNode(CloseCircleFilledIcon, {
      "class": this.CLEAR_CLASS,
      "onClick": this.onClearClick
    }, null) : renderTNodeJSX(this, "suffixIcon");
    var suffixClass = "".concat(this.classPrefix, "-tag-input__with-suffix-icon");
    if (suffixIconNode && !this.classes.includes(suffixClass)) {
      this.classes.push(suffixClass);
    }
    var displayNode = renderTNodeJSX(this, "valueDisplay", {
      params: {
        value: this.tagValue,
        onClose: function onClose(index2, item) {
          return _this.onClose({
            index: index2,
            item
          });
        }
      }
    });
    var _label = renderTNodeJSX(this, "label", {
      silent: true
    });
    return createVNode(Input, mergeProps({
      "ref": "tagInputRef",
      "readonly": this.readonly,
      "value": this.tInputValue,
      "autoWidth": true,
      "size": this.size,
      "disabled": this.disabled,
      "label": function label() {
        return _this.renderLabel({
          displayNode,
          label: _label
        });
      },
      "class": this.classes,
      "tips": this.tips,
      "status": this.status,
      "placeholder": this.tagInputPlaceholder,
      "suffix": this.suffix,
      "suffixIcon": function suffixIcon() {
        return suffixIconNode;
      },
      "showInput": !((_this$inputProps = this.inputProps) !== null && _this$inputProps !== void 0 && _this$inputProps.readonly) || !this.tagValue || !((_this$tagValue = this.tagValue) !== null && _this$tagValue !== void 0 && _this$tagValue.length),
      "keepWrapperWidth": !this.autoWidth,
      "onWheel": this.onWheel,
      "onChange": function onChange(val, context) {
        _this.setTInputValue(val, _objectSpread$D(_objectSpread$D({}, context), {}, {
          trigger: "input"
        }));
      },
      "onPaste": this.onPaste,
      "onEnter": this.onInputEnter,
      "onKeyup": this.onInputBackspaceKeyUp,
      "onKeydown": this.onInputBackspaceKeyDown,
      "onMouseenter": function onMouseenter(context) {
        _this.addHover(context);
        _this.scrollToRightOnEnter();
      },
      "onMouseleave": function onMouseleave(context) {
        _this.cancelHover(context);
        _this.scrollToLeftOnLeave();
      },
      "onFocus": function onFocus(inputValue, context) {
        var _this$onFocus;
        (_this$onFocus = _this.onFocus) === null || _this$onFocus === void 0 ? void 0 : _this$onFocus.call(_this, _this.tagValue, {
          e: context.e,
          inputValue
        });
      },
      "onBlur": function onBlur(inputValue, context) {
        var _this$onBlur;
        _this.setTInputValue("", {
          e: context.e,
          trigger: "blur"
        });
        (_this$onBlur = _this.onBlur) === null || _this$onBlur === void 0 ? void 0 : _this$onBlur.call(_this, _this.tagValue, {
          e: context.e,
          inputValue: ""
        });
      },
      "onClick": this.onClick,
      "onCompositionstart": this.onInputCompositionstart,
      "onCompositionend": this.onInputCompositionend
    }, this.inputProps), {
      suffix: this.$slots.suffix
    });
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var TagInput = withInstall(_TagInput);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _excluded$5 = ["tips"];
function ownKeys$D(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$C(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$D(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$D(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var DEFAULT_KEYS = {
  label: "label",
  key: "key",
  children: "children"
};
function useMultiple(props2, context) {
  var _toRefs = toRefs(props2), inputValue = _toRefs.inputValue;
  var classPrefix = usePrefixClass();
  var tagInputRef = ref();
  var _useDefault = useDefaultValue(inputValue, props2.defaultInputValue, props2.onInputChange, "inputValue"), _useDefault2 = _slicedToArray(_useDefault, 2), tInputValue = _useDefault2[0], setTInputValue = _useDefault2[1];
  var disable = useFormDisabled();
  var iKeys = computed(function() {
    return _objectSpread$C(_objectSpread$C({}, DEFAULT_KEYS), props2.keys);
  });
  var tags = computed(function() {
    if (!(props2.value instanceof Array)) {
      return isObject_1(props2.value) ? [props2.value[iKeys.value.label]] : [props2.value];
    }
    return props2.value.map(function(item) {
      return isObject_1(item) ? item[iKeys.value.label] : item;
    });
  });
  var tPlaceholder = computed(function() {
    return !tags.value || !tags.value.length ? props2.placeholder : "";
  });
  var onTagInputChange = function onTagInputChange2(val, context2) {
    var _props$onTagChange;
    if (context2.trigger === "tag-remove") {
      var _context2$e;
      (_context2$e = context2.e) === null || _context2$e === void 0 ? void 0 : _context2$e.stopPropagation();
    }
    (_props$onTagChange = props2.onTagChange) === null || _props$onTagChange === void 0 ? void 0 : _props$onTagChange.call(props2, val, context2);
  };
  var renderSelectMultiple = function renderSelectMultiple2(p) {
    var tagInputProps = _objectSpread$C(_objectSpread$C({}, p.commonInputProps), {}, {
      tagProps: props2.tagProps,
      label: props2.label,
      autoWidth: props2.autoWidth,
      readonly: props2.readonly,
      placeholder: tPlaceholder.value,
      minCollapsedNum: props2.minCollapsedNum,
      collapsedItems: props2.collapsedItems,
      tag: props2.tag,
      value: tags.value,
      valueDisplay: props2.valueDisplay,
      inputValue: p.popupVisible && p.allowInput ? tInputValue.value : "",
      inputProps: _objectSpread$C({
        readonly: !props2.allowInput || props2.readonly,
        inputClass: _defineProperty$2({}, "".concat(classPrefix.value, "-input--focused"), p.popupVisible)
      }, props2.inputProps),
      suffixIcon: !disable.value && props2.loading ? function() {
        return createVNode(Loading, {
          "loading": true,
          "size": "small"
        }, null);
      } : props2.suffixIcon
    }, props2.tagInputProps);
    var _context$slots = context.slots;
    _context$slots.tips;
    var slots = _objectWithoutProperties$1(_context$slots, _excluded$5);
    return createVNode(TagInput, mergeProps({
      "ref": "tagInputRef"
    }, tagInputProps, {
      "onInputChange": function onInputChange(val, context2) {
        if ((context2 === null || context2 === void 0 ? void 0 : context2.trigger) === "enter" || (context2 === null || context2 === void 0 ? void 0 : context2.trigger) === "blur")
          return;
        setTInputValue(val, {
          trigger: context2.trigger,
          e: context2.e
        });
      },
      "onChange": onTagInputChange,
      "onClear": p.onInnerClear,
      "onBlur": function onBlur(val, context2) {
        var _props$onBlur;
        (_props$onBlur = props2.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props2, props2.value, _objectSpread$C(_objectSpread$C({}, context2), {}, {
          tagInputValue: val
        }));
      },
      "onEnter": function onEnter(val, context2) {
        var _props$onEnter;
        (_props$onEnter = props2.onEnter) === null || _props$onEnter === void 0 ? void 0 : _props$onEnter.call(props2, props2.value, _objectSpread$C(_objectSpread$C({}, context2), {}, {
          inputValue: tInputValue.value
        }));
      },
      "onFocus": function onFocus(val, context2) {
        var _props$onFocus;
        (_props$onFocus = props2.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props2, props2.value, _objectSpread$C(_objectSpread$C({}, context2), {}, {
          tagInputValue: val
        }));
      }
    }), slots);
  };
  return {
    tags,
    tPlaceholder,
    tagInputRef,
    renderSelectMultiple
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$C(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$B(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$C(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$C(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var MAX_POPUP_WIDTH = 1e3;
function useOverlayInnerStyle(props2) {
  var _toRefs = toRefs(props2), popupProps = _toRefs.popupProps, autoWidth = _toRefs.autoWidth;
  var innerPopupVisible = ref(false);
  var disable = useFormDisabled();
  var matchWidthFunc = function matchWidthFunc2(triggerElement, popupElement) {
    var SCROLLBAR_WIDTH = popupElement.scrollHeight > popupElement.offsetHeight ? 8 : 0;
    var width = popupElement.offsetWidth + SCROLLBAR_WIDTH >= triggerElement.offsetWidth ? popupElement.offsetWidth : triggerElement.offsetWidth;
    var otherOverlayInnerStyle = {};
    if (popupProps.value && _typeof$2(popupProps.value.overlayInnerStyle) === "object" && !popupProps.value.overlayInnerStyle.width) {
      otherOverlayInnerStyle = popupProps.value.overlayInnerStyle;
    }
    return _objectSpread$B({
      width: "".concat(Math.min(width, MAX_POPUP_WIDTH), "px")
    }, otherOverlayInnerStyle);
  };
  var onInnerPopupVisibleChange = function onInnerPopupVisibleChange2(visible, context) {
    if (disable.value || props2.readonly)
      return;
    var newVisible = context.trigger === "trigger-element-click" && props2.allowInput ? true : visible;
    if (props2.popupVisible !== newVisible) {
      var _props$onPopupVisible;
      innerPopupVisible.value = newVisible;
      (_props$onPopupVisible = props2.onPopupVisibleChange) === null || _props$onPopupVisible === void 0 ? void 0 : _props$onPopupVisible.call(props2, newVisible, context);
    }
  };
  var tOverlayInnerStyle = computed(function() {
    var _popupProps$value;
    var result = {};
    var overlayInnerStyle = ((_popupProps$value = popupProps.value) === null || _popupProps$value === void 0 ? void 0 : _popupProps$value.overlayInnerStyle) || {};
    if (isFunction_1(overlayInnerStyle) || isObject_1(overlayInnerStyle) && overlayInnerStyle.width) {
      result = overlayInnerStyle;
    } else if (!autoWidth.value) {
      result = matchWidthFunc;
    }
    return result;
  });
  return {
    tOverlayInnerStyle,
    innerPopupVisible,
    onInnerPopupVisibleChange
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$B(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$A(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$B(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$B(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var useComponentClassName2 = function useComponentClassName3() {
  return {
    NAME_CLASS: usePrefixClass("select-input"),
    BASE_CLASS_BORDERLESS: usePrefixClass("select-input--borderless"),
    BASE_CLASS_MULTIPLE: usePrefixClass("select-input--multiple"),
    BASE_CLASS_POPUP_VISIBLE: usePrefixClass("select-input--popup-visible"),
    BASE_CLASS_EMPTY: usePrefixClass("select-input--empty")
  };
};
var _SelectInput = defineComponent({
  name: "TSelectInput",
  props: _objectSpread$A({}, props$e),
  setup: function setup6(props2, context) {
    var _useComponentClassNam = useComponentClassName2(), NAME_CLASS = _useComponentClassNam.NAME_CLASS, BASE_CLASS_BORDERLESS = _useComponentClassNam.BASE_CLASS_BORDERLESS, BASE_CLASS_MULTIPLE = _useComponentClassNam.BASE_CLASS_MULTIPLE, BASE_CLASS_POPUP_VISIBLE = _useComponentClassNam.BASE_CLASS_POPUP_VISIBLE, BASE_CLASS_EMPTY = _useComponentClassNam.BASE_CLASS_EMPTY;
    var classPrefix = usePrefixClass();
    var renderTNodeJSX2 = useTNodeJSX();
    var selectInputRef = ref();
    var popupRef = ref();
    var _toRefs = toRefs(props2), multiple = _toRefs.multiple, value = _toRefs.value, popupVisible = _toRefs.popupVisible, borderless = _toRefs.borderless;
    var _useSingle = useSingle(props2, context), commonInputProps = _useSingle.commonInputProps, onInnerClear = _useSingle.onInnerClear, renderSelectSingle = _useSingle.renderSelectSingle;
    var _useMultiple = useMultiple(props2, context), renderSelectMultiple = _useMultiple.renderSelectMultiple;
    var _useOverlayInnerStyle = useOverlayInnerStyle(props2), tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle, innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible, onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
    var classes = computed(function() {
      var _popupVisible$value, _ref;
      return ["".concat(NAME_CLASS.value), (_ref = {}, _defineProperty$2(_ref, BASE_CLASS_MULTIPLE.value, multiple.value), _defineProperty$2(_ref, BASE_CLASS_BORDERLESS.value, borderless.value), _defineProperty$2(_ref, BASE_CLASS_POPUP_VISIBLE.value, (_popupVisible$value = popupVisible.value) !== null && _popupVisible$value !== void 0 ? _popupVisible$value : innerPopupVisible.value), _defineProperty$2(_ref, BASE_CLASS_EMPTY.value, value.value instanceof Array ? !value.value.length : !value.value), _ref)];
    });
    return {
      classPrefix,
      NAME_CLASS,
      innerPopupVisible,
      commonInputProps,
      tOverlayInnerStyle,
      selectInputRef,
      popupRef,
      classes,
      onInnerClear,
      renderTNodeJSX: renderTNodeJSX2,
      renderSelectSingle,
      renderSelectMultiple,
      onInnerPopupVisibleChange
    };
  },
  render: function render3() {
    var _this$popupVisible, _this$popupProps, _this = this;
    var visibleProps = {
      visible: (_this$popupVisible = this.popupVisible) !== null && _this$popupVisible !== void 0 ? _this$popupVisible : this.innerPopupVisible
    };
    var mainContent = createVNode(Popup, mergeProps({
      "ref": "popupRef",
      "trigger": ((_this$popupProps = this.popupProps) === null || _this$popupProps === void 0 ? void 0 : _this$popupProps.trigger) || "click",
      "placement": "bottom-left"
    }, visibleProps, {
      "content": this.panel,
      "hideEmptyPopup": true
    }, _objectSpread$A(_objectSpread$A({
      onVisibleChange: this.onInnerPopupVisibleChange
    }, this.popupProps), {}, {
      overlayInnerStyle: this.tOverlayInnerStyle
    })), _objectSpread$A({
      "default": function _default14() {
        return [_this.multiple ? _this.renderSelectMultiple({
          commonInputProps: _this.commonInputProps,
          onInnerClear: _this.onInnerClear,
          popupVisible: visibleProps.visible,
          allowInput: _this.allowInput
        }) : _this.renderSelectSingle(visibleProps.visible)];
      }
    }, _objectSpread$A(_objectSpread$A({}, this.$slots), {}, {
      content: this.$slots.panel
    })));
    var tipsNode = this.renderTNodeJSX("tips");
    var tipsClasses = ["".concat(this.classPrefix, "-input__tips"), "".concat(this.classPrefix, "-tips"), "".concat(this.classPrefix, "-is-").concat(this.status)];
    return createVNode("div", {
      "ref": "selectInputRef",
      "class": this.classes
    }, [mainContent, tipsNode && createVNode("div", {
      "class": tipsClasses
    }, [tipsNode])]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var SelectInput = withInstall(_SelectInput);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$c = {
  checkAll: Boolean,
  content: {
    type: [String, Function]
  },
  "default": {
    type: [String, Function]
  },
  disabled: Boolean,
  label: {
    type: String,
    "default": ""
  },
  title: {
    type: String,
    "default": ""
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
var props$b = {
  checkAll: Boolean,
  checked: {
    type: Boolean,
    "default": void 0
  },
  modelValue: {
    type: Boolean,
    "default": void 0
  },
  defaultChecked: Boolean,
  "default": {
    type: [String, Function]
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
  indeterminate: Boolean,
  label: {
    type: [String, Function]
  },
  lazyLoad: Boolean,
  name: {
    type: String,
    "default": ""
  },
  readonly: Boolean,
  value: {
    type: [String, Number, Boolean]
  },
  onChange: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var CheckboxGroupInjectionKey = Symbol("CheckboxGroupProvide");
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useCheckboxLazyLoad(labelRef, lazyLoad) {
  var ioObserver = ref();
  var showCheckbox = ref(true);
  var handleLazyLoad = function handleLazyLoad2() {
    if (!lazyLoad.value)
      return;
    showCheckbox.value = false;
    var io = observe(labelRef.value, null, function() {
      showCheckbox.value = true;
    }, 0);
    ioObserver.value = io;
  };
  onMounted(handleLazyLoad);
  watch([lazyLoad, labelRef], handleLazyLoad);
  onBeforeUnmount(function() {
    if (!lazyLoad.value)
      return;
    ioObserver.value.unobserve(labelRef.value);
  });
  return {
    showCheckbox
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useKeyboardEvent(handleChange) {
  var keyboardEventListener = function keyboardEventListener2(e) {
    if (e.code === "Enter") {
      var _e$currentTarget$quer = e.currentTarget.querySelector("input"), disabled = _e$currentTarget$quer.disabled;
      !disabled && handleChange(e);
    }
  };
  var onCheckboxFocus = function onCheckboxFocus2(e) {
    e.currentTarget.addEventListener("keydown", keyboardEventListener);
  };
  var onCheckboxBlur = function onCheckboxBlur2(e) {
    e.currentTarget.removeEventListener("keydown", keyboardEventListener);
  };
  return {
    onCheckboxFocus,
    onCheckboxBlur
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$A(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$z(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$A(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$A(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Checkbox = defineComponent({
  name: "TCheckbox",
  props: _objectSpread$z(_objectSpread$z({}, props$b), {}, {
    needRipple: Boolean,
    stopLabelTrigger: Boolean,
    index: Number,
    data: Object
  }),
  setup: function setup7(props2) {
    var labelRef = ref();
    if (props2.needRipple) {
      useRipple(labelRef);
    }
    var _useCommonClassName = useCommonClassName$1(), STATUS = _useCommonClassName.STATUS;
    var _toRefs = toRefs(props2), checked = _toRefs.checked, modelValue = _toRefs.modelValue, lazyLoad = _toRefs.lazyLoad;
    var _useVModel = useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"), _useVModel2 = _slicedToArray(_useVModel, 2), innerChecked = _useVModel2[0], setInnerChecked = _useVModel2[1];
    var checkboxGroupData = inject(CheckboxGroupInjectionKey, void 0);
    var tName = ref();
    watch(function() {
      return [props2.name, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name].join("_");
    }, function() {
      var name = props2.name || (checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name);
      if (name) {
        tName.value = name;
      }
    }, {
      immediate: true
    });
    var tChecked = ref(false);
    var getChecked = function getChecked2() {
      var value = props2.value, checkAll = props2.checkAll;
      if (checkAll)
        return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll;
      return checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value ? checkboxGroupData.value.checkedValues.includes(value) : innerChecked.value;
    };
    watch(function() {
      var _checkboxGroupData$va;
      return [innerChecked.value, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll, checkboxGroupData === null || checkboxGroupData === void 0 || (_checkboxGroupData$va = checkboxGroupData.value.checkedValues) === null || _checkboxGroupData$va === void 0 ? void 0 : _checkboxGroupData$va.join(",")];
    }, function() {
      tChecked.value = getChecked();
    }, {
      immediate: true
    });
    var beforeDisabled = computed(function() {
      if (!props2.checkAll && !tChecked.value && checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value.maxExceeded) {
        return true;
      }
      return null;
    });
    var afterDisabled = computed(function() {
      return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.disabled;
    });
    var isDisabled = useDisabled({
      beforeDisabled,
      afterDisabled
    });
    var tIndeterminate = ref(false);
    watch(function() {
      return [props2.checkAll, props2.indeterminate, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate];
    }, function() {
      tIndeterminate.value = props2.checkAll ? checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate : props2.indeterminate;
    }, {
      immediate: true
    });
    var COMPONENT_NAME = usePrefixClass("checkbox");
    var labelClasses = ref({});
    watch([tChecked, isDisabled, tIndeterminate], function() {
      var _ref;
      labelClasses.value = ["".concat(COMPONENT_NAME.value), (_ref = {}, _defineProperty$2(_ref, STATUS.value.checked, tChecked.value), _defineProperty$2(_ref, STATUS.value.disabled, isDisabled.value), _defineProperty$2(_ref, STATUS.value.indeterminate, tIndeterminate.value), _ref)];
    }, {
      immediate: true
    });
    var handleChange = function handleChange2(e) {
      if (props2.readonly)
        return;
      var checked2 = !tChecked.value;
      setInnerChecked(checked2, {
        e
      });
      if (checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value.handleCheckboxChange) {
        checkboxGroupData.value.onCheckedChange({
          checked: checked2,
          checkAll: props2.checkAll,
          e,
          option: props2
        });
      }
    };
    var renderContent2 = useContent();
    var handleLabelClick = function handleLabelClick2(e) {
      if (props2.stopLabelTrigger)
        e.preventDefault();
    };
    var _useCheckboxLazyLoad = useCheckboxLazyLoad(labelRef, lazyLoad), showCheckbox = _useCheckboxLazyLoad.showCheckbox;
    var _useKeyboardEvent = useKeyboardEvent(handleChange), onCheckboxFocus = _useKeyboardEvent.onCheckboxFocus, onCheckboxBlur = _useKeyboardEvent.onCheckboxBlur;
    return function() {
      return createVNode("label", {
        "ref": labelRef,
        "class": labelClasses.value,
        "tabindex": isDisabled.value ? void 0 : "0",
        "onFocus": onCheckboxFocus,
        "onBlur": onCheckboxBlur
      }, [!showCheckbox.value ? null : [createVNode("input", {
        "type": "checkbox",
        "tabindex": "-1",
        "class": "".concat(COMPONENT_NAME.value, "__former"),
        "disabled": isDisabled.value,
        "readonly": props2.readonly,
        "indeterminate": tIndeterminate.value,
        "name": tName.value,
        "value": props2.value ? props2.value : void 0,
        "checked": tChecked.value,
        "onChange": handleChange,
        "key": "input"
      }, null), createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__input"),
        "key": "input-span"
      }, null), createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__label"),
        "key": "label",
        "onClick": handleLabelClick
      }, [renderContent2("default", "label")])]]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$a = {
  disabled: {
    type: Boolean,
    "default": void 0
  },
  lazyLoad: Boolean,
  max: {
    type: Number,
    "default": void 0
  },
  name: {
    type: String,
    "default": ""
  },
  options: {
    type: Array
  },
  value: {
    type: Array,
    "default": void 0
  },
  modelValue: {
    type: Array,
    "default": void 0
  },
  defaultValue: {
    type: Array,
    "default": function _default3() {
      return [];
    }
  },
  onChange: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _Group$1 = defineComponent({
  name: "TCheckboxGroup",
  props: props$a,
  setup: function setup8(props2) {
    var COMPONENT_NAME = usePrefixClass("checkbox-group");
    var renderTNodeJSX2 = useTNodeJSX();
    var isArray2 = Array.isArray;
    var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), innerValue = _useVModel2[0], setInnerValue = _useVModel2[1];
    var optionList = ref([]);
    var intersectionLen = computed(function() {
      if (!isArray2(innerValue.value))
        return 0;
      var values = optionList.value.map(function(item) {
        return item.value;
      });
      var n = intersection_1(innerValue.value, values);
      return n.length;
    });
    var isCheckAll = computed(function() {
      var optionItems = optionList.value.filter(function(item) {
        return !item.disabled && !item.checkAll;
      }).map(function(t) {
        return t.value;
      });
      var intersectionValues = intersection_1(optionItems, innerValue.value);
      return intersectionValues.length === optionItems.length;
    });
    var indeterminate = computed(function() {
      return !isCheckAll.value && intersectionLen.value < optionList.value.length && intersectionLen.value !== 0;
    });
    var maxExceeded = computed(function() {
      return !isUndefined_1(props2.max) && innerValue.value.length === props2.max;
    });
    watchEffect(function() {
      if (!props2.options)
        return [];
      optionList.value = props2.options.map(function(item) {
        return isObject_1(item) ? item : {
          label: String(item),
          value: item
        };
      });
    });
    var getAllCheckboxValue = function getAllCheckboxValue2() {
      var val = /* @__PURE__ */ new Set();
      for (var i = 0, len2 = optionList.value.length; i < len2; i++) {
        var item = optionList.value[i];
        if (item.checkAll)
          continue;
        if (item.disabled)
          continue;
        val.add(item.value);
        if (maxExceeded.value)
          break;
      }
      return _toConsumableArray(val);
    };
    var onCheckAllChange = function onCheckAllChange2(checked, context) {
      var value2 = checked ? getAllCheckboxValue() : [];
      setInnerValue(value2, {
        e: context.e,
        type: checked ? "check" : "uncheck",
        current: void 0,
        option: void 0
      });
    };
    var handleCheckboxChange = function handleCheckboxChange2(data2) {
      var currentValue = data2.option.value;
      if (!isArray2(innerValue.value)) {
        console.warn("TDesign CheckboxGroup Warn: `value` must be an array, instead of ".concat(_typeof$2(innerValue.value)));
        return;
      }
      var val = _toConsumableArray(innerValue.value);
      if (data2.checked) {
        val.push(currentValue);
      } else {
        var i = val.indexOf(currentValue);
        val.splice(i, 1);
      }
      setInnerValue(val, {
        e: data2.e,
        current: data2.option.value,
        option: data2.option,
        type: data2.checked ? "check" : "uncheck"
      });
    };
    var onCheckedChange = function onCheckedChange2(p) {
      var checked = p.checked, checkAll = p.checkAll, e = p.e;
      if (checkAll) {
        onCheckAllChange(checked, {
          e
        });
      } else {
        handleCheckboxChange(p);
      }
    };
    var getChildComponentSlots = useChildComponentSlots();
    var getOptionListBySlots = function getOptionListBySlots2() {
      var nodes = getChildComponentSlots("Checkbox");
      var arr = [];
      nodes === null || nodes === void 0 ? void 0 : nodes.forEach(function(node) {
        var option2 = node.props;
        if (!option2)
          return;
        if (option2["check-all"] === "" || option2["check-all"] === true) {
          option2.checkAll = true;
        }
        arr.push(option2);
      });
      return arr;
    };
    provide(CheckboxGroupInjectionKey, computed(function() {
      return {
        name: props2.name,
        isCheckAll: isCheckAll.value,
        checkedValues: innerValue.value || [],
        maxExceeded: maxExceeded.value,
        disabled: props2.disabled,
        indeterminate: indeterminate.value,
        handleCheckboxChange,
        onCheckedChange
      };
    }));
    return function() {
      var _props2$options;
      var children = null;
      if ((_props2$options = props2.options) !== null && _props2$options !== void 0 && _props2$options.length) {
        var _optionList$value;
        children = (_optionList$value = optionList.value) === null || _optionList$value === void 0 ? void 0 : _optionList$value.map(function(option2, index2) {
          return createVNode(_Checkbox, mergeProps({
            "key": "".concat(option2.value || "").concat(index2),
            "lazyLoad": props2.lazyLoad
          }, option2, {
            "index": index2,
            "checked": innerValue.value.includes(option2.value),
            "data": option2
          }), null);
        });
      } else {
        var nodes = renderTNodeJSX2("default");
        optionList.value = getOptionListBySlots();
        children = nodes;
      }
      return createVNode("div", {
        "class": COMPONENT_NAME.value,
        "role": "group",
        "aria-label": "checkbox-group"
      }, [children]);
    };
  }
});
const index$8 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Checkbox = withInstall(_Checkbox);
var CheckboxGroup = withInstall(_Group$1);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _createForOfIteratorHelper$2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
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
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len2) {
  if (len2 == null || len2 > arr.length)
    len2 = arr.length;
  for (var i = 0, arr2 = new Array(len2); i < len2; i++)
    arr2[i] = arr[i];
  return arr2;
}
var selectInjectKey = Symbol("selectProvide");
var getSingleContent = function getSingleContent2(value, optionsMap) {
  var option2 = optionsMap.value.get(value);
  return (option2 === null || option2 === void 0 ? void 0 : option2.label) || (value === null || value === void 0 ? void 0 : value.toString());
};
var getMultipleContent = function getMultipleContent2(value, optionsMap) {
  var res = [];
  var _iterator = _createForOfIteratorHelper$2(value), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var iterator = _step.value;
      var resLabel = getSingleContent(iterator, optionsMap);
      if (resLabel) {
        res.push(resLabel);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return res;
};
var getNewMultipleValue = function getNewMultipleValue2(innerValue, optionValue) {
  var value = cloneDeep_1(innerValue);
  var valueIndex = value.indexOf(optionValue);
  if (valueIndex < 0) {
    value.push(optionValue);
  } else {
    value.splice(valueIndex, 1);
  }
  return {
    value,
    isCheck: valueIndex < 0
  };
};
const index$7 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$z(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$y(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$z(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$z(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$8(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _Option = defineComponent({
  name: "TOption",
  props: _objectSpread$y(_objectSpread$y({}, props$c), {}, {
    createAble: Boolean,
    multiple: Boolean,
    index: Number,
    rowIndex: Number,
    trs: Map,
    scrollType: String,
    isVirtual: Boolean,
    bufferSize: Number,
    checkAll: Boolean
  }),
  emits: ["row-mounted"],
  setup: function setup9(props2, context) {
    var selectProvider = inject(selectInjectKey);
    var formDisabled = useFormDisabled();
    var isReachMax = computed(function() {
      return selectProvider.value.max !== 0 && selectProvider.value.max <= selectProvider.value.selectValue.length;
    });
    var disabled = computed(function() {
      return formDisabled.value || props2.multiple && isReachMax.value && !isSelected.value && !selectProvider.value.isCheckAll;
    });
    var renderContent2 = useContent();
    var selectName = usePrefixClass("select");
    var _useCommonClassName = useCommonClassName$1(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
    var liRef = ref();
    var isHover = ref(false);
    var isSelected = computed(function() {
      if (selectProvider.value.isCheckAll && !props2.disabled)
        return true;
      return !props2.multiple ? selectProvider.value.selectValue === props2.value : selectProvider.value.selectValue.includes(props2.value);
    });
    var isIndeterminate = computed(function() {
      if (!props2.checkAll)
        return false;
      return selectProvider.value.indeterminate;
    });
    var classes = computed(function() {
      var _ref;
      return ["".concat(selectName.value, "-option"), [SIZE.value[selectProvider.value.size]], (_ref = {}, _defineProperty$2(_ref, STATUS.value.disabled, disabled.value), _defineProperty$2(_ref, STATUS.value.selected, isSelected.value), _defineProperty$2(_ref, "".concat(selectName.value, "-option__hover"), (isHover.value || selectProvider.value.hoverIndex === props2.index) && !disabled.value && !isSelected.value), _ref)];
    });
    var labelText = computed(function() {
      return props2.label || props2.value;
    });
    var handleClick = function handleClick2(e) {
      if (props2.disabled || disabled.value)
        return;
      if (props2.multiple) {
        handleCheckboxClick(!isSelected.value, {
          e
        });
        e.preventDefault();
        return;
      }
      e.stopPropagation();
      if (props2.createAble) {
        var _selectProvider$value, _selectProvider$value2;
        (_selectProvider$value = (_selectProvider$value2 = selectProvider.value).handleCreate) === null || _selectProvider$value === void 0 ? void 0 : _selectProvider$value.call(_selectProvider$value2, props2.value);
        if (selectProvider.value.multiple) {
          selectProvider.value.selectValue.push(props2.value);
          selectProvider.value.handleValueChange(selectProvider.value.selectValue, {
            selectedOptions: selectProvider.value.getSelectedOptions(),
            trigger: "check",
            e
          });
          return;
        }
      }
      var selectedOptions = selectProvider.value.getSelectedOptions(props2.value);
      selectProvider.value.handleValueChange(props2.value, {
        option: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions[0],
        selectedOptions,
        trigger: "check",
        e
      });
      selectProvider.value.handlePopupVisibleChange(false, {
        e
      });
    };
    var handleCheckboxClick = function handleCheckboxClick2(val, context2) {
      if (props2.checkAll) {
        selectProvider.value.onCheckAllChange(val);
        return;
      }
      var newValue = getNewMultipleValue(selectProvider.value.selectValue, props2.value);
      var selectedOptions = selectProvider.value.getSelectedOptions(newValue.value);
      selectProvider.value.handleValueChange(newValue.value, {
        option: selectedOptions.find(function(v) {
          return v.value === props2.value;
        }),
        selectedOptions,
        trigger: val ? "check" : "uncheck",
        e: context2.e
      });
      if (!selectProvider.value.reserveKeyword) {
        selectProvider.value.handlerInputChange("");
      }
    };
    onMounted(function() {
      var trs = props2.trs, rowIndex = props2.rowIndex, isVirtual = props2.isVirtual;
      if (isVirtual) {
        trs.set(rowIndex, liRef.value);
        context.emit("row-mounted");
      }
    });
    onBeforeUnmount(function() {
      if (props2.isVirtual) {
        var trs = props2.trs, rowIndex = props2.rowIndex;
        trs["delete"](rowIndex);
      }
    });
    useRipple(liRef);
    return function() {
      var optionChild = renderContent2("default", "content") || labelText.value;
      return createVNode("li", {
        "ref": liRef,
        "class": classes.value,
        "title": props2.title || "".concat(labelText.value),
        "onMouseenter": function onMouseenter() {
          return isHover.value = true;
        },
        "onMouseleave": function onMouseleave() {
          return isHover.value = false;
        },
        "onClick": handleClick
      }, [selectProvider && props2.multiple ? createVNode(Checkbox, {
        "checked": isSelected.value,
        "disabled": disabled.value,
        "onChange": handleCheckboxClick,
        "indeterminate": isIndeterminate.value
      }, _isSlot$8(optionChild) ? optionChild : {
        "default": function _default14() {
          return [optionChild];
        }
      }) : createVNode("span", null, [optionChild])]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$9 = {
  divider: {
    type: Boolean,
    "default": true
  },
  label: {
    type: String,
    "default": ""
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$y(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$x(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$y(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$y(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _OptionGroup = defineComponent({
  name: "TOptionGroup",
  props: _objectSpread$x({}, props$9),
  setup: function setup10(props2) {
    var selectProvider = inject(selectInjectKey);
    var COMPONENT_NAME = usePrefixClass("select-option-group");
    var _useCommonClassName = useCommonClassName$1(), SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX2 = useTNodeJSX();
    var classes = computed(function() {
      return [COMPONENT_NAME.value, SIZE.value[selectProvider.value.size], _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "__divider"), props2.divider)];
    });
    return function() {
      return createVNode("li", {
        "class": classes.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header")
      }, [props2.label]), renderTNodeJSX2("default")]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$8 = {
  autoWidth: Boolean,
  autofocus: Boolean,
  borderless: Boolean,
  clearable: Boolean,
  collapsedItems: {
    type: Function
  },
  creatable: Boolean,
  disabled: Boolean,
  empty: {
    type: [String, Function]
  },
  filter: {
    type: Function
  },
  filterable: Boolean,
  inputProps: {
    type: Object
  },
  inputValue: {
    type: [String, Number],
    "default": void 0
  },
  defaultInputValue: {
    type: [String, Number]
  },
  keys: {
    type: Object
  },
  label: {
    type: [String, Function]
  },
  loading: Boolean,
  loadingText: {
    type: [String, Function]
  },
  max: {
    type: Number,
    "default": 0
  },
  minCollapsedNum: {
    type: Number,
    "default": 0
  },
  multiple: Boolean,
  options: {
    type: Array
  },
  panelBottomContent: {
    type: [String, Function]
  },
  panelTopContent: {
    type: [String, Function]
  },
  placeholder: {
    type: String,
    "default": void 0
  },
  popupProps: {
    type: Object
  },
  popupVisible: {
    type: Boolean,
    "default": void 0
  },
  defaultPopupVisible: Boolean,
  prefixIcon: {
    type: Function
  },
  readonly: Boolean,
  reserveKeyword: Boolean,
  scroll: {
    type: Object
  },
  selectInputProps: {
    type: Object
  },
  showArrow: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator13(val) {
      if (!val)
        return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  status: {
    type: String,
    "default": "default",
    validator: function validator14(val) {
      if (!val)
        return true;
      return ["default", "success", "warning", "error"].includes(val);
    }
  },
  suffix: {
    type: [String, Function]
  },
  suffixIcon: {
    type: Function
  },
  tagInputProps: {
    type: Object
  },
  tagProps: {
    type: Object
  },
  tips: {
    type: [String, Function]
  },
  value: {
    type: [String, Number, Boolean, Object, Array],
    "default": void 0
  },
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number, Boolean, Object, Array],
    "default": void 0
  },
  valueDisplay: {
    type: [String, Function]
  },
  valueType: {
    type: String,
    "default": "value",
    validator: function validator15(val) {
      if (!val)
        return true;
      return ["value", "object"].includes(val);
    }
  },
  onBlur: Function,
  onChange: Function,
  onClear: Function,
  onCreate: Function,
  onEnter: Function,
  onFocus: Function,
  onInputChange: Function,
  onPopupVisibleChange: Function,
  onRemove: Function,
  onSearch: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var usePanelVirtualScroll = function usePanelVirtualScroll2(props2) {
  var _props$scroll3, _props$scroll4, _props$scroll5, _props$scroll6, _props$scroll7;
  var isVirtual = computed(function() {
    var _props$scroll, _props$options$value, _props$scroll2;
    return ((_props$scroll = props2.scroll) === null || _props$scroll === void 0 ? void 0 : _props$scroll.type) === "virtual" && ((_props$options$value = props2.options.value) === null || _props$options$value === void 0 ? void 0 : _props$options$value.length) > (((_props$scroll2 = props2.scroll) === null || _props$scroll2 === void 0 ? void 0 : _props$scroll2.threshold) || 100);
  });
  var _ref = ((_props$scroll3 = props2.scroll) === null || _props$scroll3 === void 0 ? void 0 : _props$scroll3.type) === "virtual" ? useVirtualScroll$1({
    container: props2.popupContentRef,
    data: props2.options,
    fixedHeight: ((_props$scroll4 = props2.scroll) === null || _props$scroll4 === void 0 ? void 0 : _props$scroll4.isFixedRowHeight) || false,
    lineHeight: ((_props$scroll5 = props2.scroll) === null || _props$scroll5 === void 0 ? void 0 : _props$scroll5.rowHeight) || 28,
    bufferSize: ((_props$scroll6 = props2.scroll) === null || _props$scroll6 === void 0 ? void 0 : _props$scroll6.bufferSize) || 20,
    threshold: ((_props$scroll7 = props2.scroll) === null || _props$scroll7 === void 0 ? void 0 : _props$scroll7.threshold) || 100
  }) : {}, _ref$trs = _ref.trs, trs = _ref$trs === void 0 ? null : _ref$trs, _ref$visibleData = _ref.visibleData, visibleData = _ref$visibleData === void 0 ? null : _ref$visibleData, _ref$handleScroll = _ref.handleScroll, handleVirtualScroll = _ref$handleScroll === void 0 ? null : _ref$handleScroll, _ref$scrollHeight = _ref.scrollHeight, scrollHeight = _ref$scrollHeight === void 0 ? null : _ref$scrollHeight, _ref$translateY = _ref.translateY, translateY = _ref$translateY === void 0 ? null : _ref$translateY, _ref$handleRowMounted = _ref.handleRowMounted, handleRowMounted = _ref$handleRowMounted === void 0 ? null : _ref$handleRowMounted;
  var lastScrollY = -1;
  var onInnerVirtualScroll = function onInnerVirtualScroll2(e) {
    if (!isVirtual.value) {
      return;
    }
    var target = e.target;
    var top = target.scrollTop;
    if (Math.abs(lastScrollY - top) > 5) {
      handleVirtualScroll();
      lastScrollY = top;
    } else {
      lastScrollY = -1;
    }
  };
  onMounted(function() {
    var _props$popupContentRe;
    (_props$popupContentRe = props2.popupContentRef.value) === null || _props$popupContentRe === void 0 ? void 0 : _props$popupContentRe.addEventListener("scroll", onInnerVirtualScroll);
  });
  onBeforeUnmount(function() {
    var _props$popupContentRe2;
    (_props$popupContentRe2 = props2.popupContentRef.value) === null || _props$popupContentRe2 === void 0 ? void 0 : _props$popupContentRe2.removeEventListener("scroll", onInnerVirtualScroll);
  });
  var cursorStyle = computed(function() {
    return {
      position: "absolute",
      width: "1px",
      height: "1px",
      transition: "transform 0.2s",
      transform: "translate(0, ".concat(scrollHeight.value, "px)"),
      "-ms-transform": "translate(0, ".concat(scrollHeight.value, "px)"),
      "-moz-transform": "translate(0, ".concat(scrollHeight.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(scrollHeight.value, "px)")
    };
  });
  var panelStyle = computed(function() {
    return {
      transform: "translate(0, ".concat(translateY.value, "px)"),
      "-ms-transform": "translate(0, ".concat(translateY.value, "px)"),
      "-moz-transform": "translate(0, ".concat(translateY.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(translateY.value, "px)")
    };
  });
  return {
    trs,
    scrollHeight,
    translateY,
    visibleData,
    handleRowMounted,
    isVirtual,
    cursorStyle,
    panelStyle
  };
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _isSlot$7(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var SelectPanel = defineComponent({
  name: "TSelectPanel",
  props: {
    inputValue: props$8.inputValue,
    panelTopContent: props$8.panelTopContent,
    panelBottomContent: props$8.panelBottomContent,
    empty: props$8.empty,
    creatable: props$8.creatable,
    loading: props$8.loading,
    loadingText: props$8.loadingText,
    multiple: props$8.multiple,
    filterable: props$8.filterable,
    filter: props$8.filter,
    options: {
      type: Array,
      "default": function _default4() {
        return [];
      }
    },
    scroll: props$8.scroll,
    size: props$8.size
  },
  setup: function setup11(props2, _ref) {
    var expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("select");
    var renderTNodeJSX2 = useTNodeJSX();
    var renderDefaultTNode = useTNodeDefault();
    var _useConfig = useConfig("select"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
    var tSelect = inject(selectInjectKey);
    var innerRef = ref(null);
    var popupContentRef = computed(function() {
      return tSelect.value.popupContentRef.value;
    });
    var showCreateOption = computed(function() {
      return props2.creatable && props2.filterable && props2.inputValue;
    });
    var displayOptions = computed(function() {
      return tSelect.value.displayOptions;
    });
    var _usePanelVirtualScrol = usePanelVirtualScroll({
      scroll: props2.scroll,
      popupContentRef,
      options: displayOptions
    }), trs = _usePanelVirtualScrol.trs, visibleData = _usePanelVirtualScrol.visibleData, handleRowMounted = _usePanelVirtualScrol.handleRowMounted, isVirtual = _usePanelVirtualScrol.isVirtual, panelStyle = _usePanelVirtualScrol.panelStyle, cursorStyle = _usePanelVirtualScrol.cursorStyle;
    var isEmpty = computed(function() {
      return !displayOptions.value.length;
    });
    var renderCreateOption = function renderCreateOption2() {
      return createVNode("ul", {
        "class": ["".concat(COMPONENT_NAME.value, "__create-option"), "".concat(COMPONENT_NAME.value, "__list")]
      }, [createVNode(_Option, {
        "value": props2.inputValue,
        "label": "".concat(props2.inputValue),
        "createAble": true,
        "class": "".concat(COMPONENT_NAME.value, "__create-option--special")
      }, null)]);
    };
    var renderOptionsContent = function renderOptionsContent2(options) {
      return createVNode("ul", {
        "class": "".concat(COMPONENT_NAME.value, "__list")
      }, [options.map(function(item, index2) {
        var _props$scroll, _props$scroll2;
        if (item.group) {
          var _slot;
          return createVNode(_OptionGroup, {
            "label": item.group,
            "divider": item.divider
          }, _isSlot$7(_slot = renderOptionsContent2(item.children)) ? _slot : {
            "default": function _default14() {
              return [_slot];
            }
          });
        }
        return createVNode(_Option, mergeProps(omit_1(item, "$index", "className", "tagName"), isVirtual.value ? {
          rowIndex: item.$index,
          trs,
          scrollType: (_props$scroll = props2.scroll) === null || _props$scroll === void 0 ? void 0 : _props$scroll.type,
          isVirtual: isVirtual.value,
          bufferSize: (_props$scroll2 = props2.scroll) === null || _props$scroll2 === void 0 ? void 0 : _props$scroll2.bufferSize,
          key: "".concat(item.$index || "", "_").concat(index2)
        } : {
          key: "".concat(index2, "_").concat(item.value)
        }, {
          "multiple": props2.multiple,
          "onRowMounted": handleRowMounted
        }), item.slots);
      })]);
    };
    var dropdownInnerSize = computed(function() {
      return {
        small: "s",
        medium: "m",
        large: "l"
      }[tSelect.value.size];
    });
    expose({
      innerRef
    });
    var renderPanel = function renderPanel2(options, extraStyle) {
      return createVNode("div", {
        "ref": innerRef,
        "class": ["".concat(COMPONENT_NAME.value, "__dropdown-inner"), "".concat(COMPONENT_NAME.value, "__dropdown-inner--size-").concat(dropdownInnerSize.value)],
        "onClick": function onClick(e) {
          return e.stopPropagation();
        },
        "style": extraStyle
      }, [showCreateOption.value && renderCreateOption(), props2.loading && renderDefaultTNode("loadingText", {
        defaultNode: createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__loading-tips")
        }, [t(globalConfig.value.loadingText)])
      }), !props2.loading && isEmpty.value && !showCreateOption.value && renderDefaultTNode("empty", {
        defaultNode: createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__empty")
        }, [t(globalConfig.value.empty)])
      }), !isEmpty.value && !props2.loading && renderOptionsContent(options)]);
    };
    return {
      renderPanel,
      panelStyle,
      cursorStyle,
      isVirtual,
      displayOptions,
      visibleData,
      renderTNodeJSX: renderTNodeJSX2
    };
  },
  render: function render4() {
    return this.isVirtual ? createVNode(Fragment, null, [this.renderTNodeJSX("panelTopContent"), createVNode("div", null, [createVNode("div", {
      "style": this.cursorStyle
    }, null), this.renderPanel(this.visibleData, this.panelStyle)]), this.renderTNodeJSX("panelBottomContent")]) : createVNode(Fragment, null, [this.renderTNodeJSX("panelTopContent"), this.renderPanel(this.displayOptions), this.renderTNodeJSX("panelBottomContent")]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
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
function _arrayLikeToArray$1(arr, len2) {
  if (len2 == null || len2 > arr.length)
    len2 = arr.length;
  for (var i = 0, arr2 = new Array(len2); i < len2; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys$x(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$w(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$x(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$x(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var useSelectOptions = function useSelectOptions2(props2, keys2, inputValue) {
  var getChildComponentSlots = useChildComponentSlots();
  var optionsCache = ref([]);
  var options = computed(function() {
    var _props$options;
    var dynamicIndex = 0;
    var innerOptions = ((_props$options = props2.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function(option2) {
      var getFormatOption = function getFormatOption2(option22) {
        var _keys$value = keys2.value, value = _keys$value.value, label = _keys$value.label;
        var res2 = _objectSpread$w(_objectSpread$w({}, option22), {}, {
          index: dynamicIndex,
          label: get_1(option22, label),
          value: get_1(option22, value)
        });
        dynamicIndex++;
        return res2;
      };
      if (option2.group && option2.children) {
        return _objectSpread$w(_objectSpread$w({}, option2), {}, {
          children: option2.children.map(function(child2) {
            return getFormatOption(child2);
          })
        });
      }
      return getFormatOption(option2);
    })) || [];
    var optionsSlots = getChildComponentSlots("Option");
    var groupSlots = getChildComponentSlots("OptionGroup");
    if (isArray_1(groupSlots)) {
      var _iterator = _createForOfIteratorHelper$1(groupSlots), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _group$props, _res$, _res$2;
          var group = _step.value;
          var groupOption = _objectSpread$w(_objectSpread$w({
            group: (_group$props = group.props) === null || _group$props === void 0 ? void 0 : _group$props.label
          }, group.props), {}, {
            children: []
          });
          var res = group.children["default"]();
          if (!(isArray_1(res) && !!((_res$ = res[0]) !== null && _res$ !== void 0 && _res$.children)))
            continue;
          var _iterator2 = _createForOfIteratorHelper$1(res === null || res === void 0 || (_res$2 = res[0]) === null || _res$2 === void 0 ? void 0 : _res$2.children), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var child = _step2.value;
              groupOption.children.push(_objectSpread$w(_objectSpread$w({}, child.props), {}, {
                slots: child.children,
                index: dynamicIndex
              }));
              dynamicIndex++;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          innerOptions.push(groupOption);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (isArray_1(optionsSlots)) {
      var _iterator3 = _createForOfIteratorHelper$1(optionsSlots), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var _child = _step3.value;
          innerOptions.push(_objectSpread$w(_objectSpread$w({}, _child.props), {}, {
            slots: _child.children,
            index: dynamicIndex
          }));
          dynamicIndex++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return innerOptions;
  });
  var optionsList = computed(function() {
    var res = [];
    var getOptionsList = function getOptionsList2(options2) {
      var _iterator4 = _createForOfIteratorHelper$1(options2), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var option2 = _step4.value;
          if (option2.group) {
            getOptionsList2(option2.children);
          } else {
            res.push(option2);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    };
    getOptionsList(options.value);
    return res;
  });
  var optionsMap = computed(function() {
    var res = /* @__PURE__ */ new Map();
    optionsCache.value.concat(optionsList.value).forEach(function(option2) {
      res.set(option2.value, option2);
    });
    return res;
  });
  var displayOptions = computed(function() {
    if (!inputValue.value || !(props2.filterable || isFunction_1(props2.filter)))
      return options.value;
    var filterMethods = function filterMethods2(option2) {
      var _option$label, _option$label$toLower;
      if (isFunction_1(props2.filter)) {
        return props2.filter("".concat(inputValue.value), option2);
      }
      return ((_option$label = option2.label) === null || _option$label === void 0 || (_option$label$toLower = _option$label.toLowerCase) === null || _option$label$toLower === void 0 ? void 0 : _option$label$toLower.call(_option$label).indexOf("".concat(inputValue.value).toLowerCase())) > -1;
    };
    var res = [];
    options.value.forEach(function(option2) {
      if (option2.group && option2.children) {
        res.push(_objectSpread$w(_objectSpread$w({}, option2), {}, {
          children: option2.children.filter(filterMethods)
        }));
      }
      if (filterMethods(option2)) {
        res.push(option2);
      }
    });
    return res;
  });
  return {
    options,
    optionsMap,
    optionsList,
    optionsCache,
    displayOptions
  };
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _excluded$4 = ["overlayClassName"];
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
function _arrayLikeToArray(arr, len2) {
  if (len2 == null || len2 > arr.length)
    len2 = arr.length;
  for (var i = 0, arr2 = new Array(len2); i < len2; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys$w(object, enumerableOnly) {
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
    i % 2 ? ownKeys$w(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$w(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Select = defineComponent({
  name: "TSelect",
  props: _objectSpread$v({}, props$8),
  setup: function setup12(props2, _ref) {
    var slots = _ref.slots;
    var classPrefix = usePrefixClass();
    var disabled = useFormDisabled();
    var renderTNodeJSX2 = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("select");
    var _useConfig = useConfig("select"), globalConfig = _useConfig.globalConfig, t = _useConfig.t;
    var _toRefs = toRefs(props2), popupVisible = _toRefs.popupVisible, inputValue = _toRefs.inputValue, modelValue = _toRefs.modelValue, value = _toRefs.value;
    var _useDefaultValue = useDefaultValue(inputValue, props2.defaultInputValue, props2.onInputChange, "inputValue"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), innerInputValue = _useDefaultValue2[0], setInputValue = _useDefaultValue2[1];
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), orgValue = _useVModel2[0], setOrgValue = _useVModel2[1];
    var selectPanelRef = ref(null);
    var selectInputRef = ref(null);
    var keys2 = computed(function() {
      var _props2$keys, _props2$keys2;
      return {
        label: ((_props2$keys = props2.keys) === null || _props2$keys === void 0 ? void 0 : _props2$keys.label) || "label",
        value: ((_props2$keys2 = props2.keys) === null || _props2$keys2 === void 0 ? void 0 : _props2$keys2.value) || "value"
      };
    });
    var _useSelectOptions = useSelectOptions(props2, keys2, innerInputValue), options = _useSelectOptions.options, optionsMap = _useSelectOptions.optionsMap, optionsList = _useSelectOptions.optionsList, optionsCache = _useSelectOptions.optionsCache, displayOptions = _useSelectOptions.displayOptions;
    var innerValue = computed(function() {
      if (orgValue.value === void 0) {
        return props2.multiple ? [] : void 0;
      }
      if (props2.valueType === "object") {
        return !props2.multiple ? orgValue.value[keys2.value.value] : orgValue.value.map(function(option2) {
          return option2[keys2.value.value];
        });
      }
      return orgValue.value;
    });
    var setInnerValue = function setInnerValue2(newVal, context) {
      if (props2.valueType === "object") {
        var _keys$value = keys2.value, value2 = _keys$value.value, label = _keys$value.label;
        var getOption = function getOption2(val) {
          var _ref2;
          if (val === void 0) {
            return void 0;
          }
          var option2 = optionsMap.value.get(val);
          return _ref2 = {}, _defineProperty$2(_ref2, value2, get_1(option2, value2)), _defineProperty$2(_ref2, label, get_1(option2, label)), _ref2;
        };
        newVal = props2.multiple ? newVal.map(function(val) {
          return getOption(val);
        }) : getOption(newVal);
      }
      if (newVal === orgValue.value)
        return;
      setOrgValue(newVal, _objectSpread$v({
        selectedOptions: getSelectedOptions(newVal)
      }, context));
    };
    var _useDefaultValue3 = useDefaultValue(popupVisible, false, function(visible, context) {
      var _props2$onPopupVisibl;
      (_props2$onPopupVisibl = props2.onPopupVisibleChange) === null || _props2$onPopupVisibl === void 0 ? void 0 : _props2$onPopupVisibl.call(props2, visible, context);
    }, "popupVisible"), _useDefaultValue4 = _slicedToArray(_useDefaultValue3, 2), innerPopupVisible = _useDefaultValue4[0], setInnerPopupVisible = _useDefaultValue4[1];
    var placeholderText = computed(function() {
      var _ref3;
      return (_ref3 = !props2.multiple && innerPopupVisible.value && getSingleContent(innerValue.value, optionsMap) || props2.placeholder) !== null && _ref3 !== void 0 ? _ref3 : t(globalConfig.value.placeholder);
    });
    var displayText = computed(function() {
      return props2.multiple ? getMultipleContent(innerValue.value, optionsMap) : getSingleContent(innerValue.value, optionsMap);
    });
    var valueDisplayParams = computed(function() {
      var val = props2.multiple && isArray_1(innerValue.value) ? innerValue.value.map(function(value2) {
        var _optionsMap$value$get;
        return {
          value: value2,
          label: (_optionsMap$value$get = optionsMap.value.get(value2)) === null || _optionsMap$value$get === void 0 ? void 0 : _optionsMap$value$get.label
        };
      }) : innerValue.value;
      var params = {
        value: val,
        onClose: props2.multiple ? function(index2) {
          return removeTag(index2);
        } : function() {
        }
      };
      if (props2.minCollapsedNum && props2.multiple) {
        var _val$slice;
        return _objectSpread$v(_objectSpread$v({}, params), {}, {
          displayValue: val === null || val === void 0 || (_val$slice = val.slice) === null || _val$slice === void 0 ? void 0 : _val$slice.call(val, 0, props2.minCollapsedNum)
        });
      }
      return params;
    });
    var isFilterable = computed(function() {
      return Boolean(props2.filterable || globalConfig.value.filterable || isFunction_1(props2.filter));
    });
    var removeTag = function removeTag2(index2, e) {
      var _props2$onRemove;
      e && e.stopPropagation();
      var selectValue = cloneDeep_1(innerValue.value);
      var value2 = selectValue[index2];
      selectValue.splice(index2, 1);
      setInnerValue(selectValue, {
        selectedOptions: getSelectedOptions(selectValue),
        trigger: "tag-remove",
        e
      });
      (_props2$onRemove = props2.onRemove) === null || _props2$onRemove === void 0 ? void 0 : _props2$onRemove.call(props2, {
        value: value2,
        data: optionsMap.value.get(value2),
        e
      });
    };
    var handleCreate = function handleCreate2() {
      var _props2$onCreate;
      if (!innerInputValue.value)
        return;
      (_props2$onCreate = props2.onCreate) === null || _props2$onCreate === void 0 ? void 0 : _props2$onCreate.call(props2, innerInputValue.value);
      setInputValue("");
    };
    var hoverIndex = ref(-1);
    var handleKeyDown = function handleKeyDown2(e) {
      var _optionsList$value$ne, _optionsList$value$ne2;
      var optionsListLength = displayOptions.value.length;
      var newIndex2 = hoverIndex.value;
      switch (e.code) {
        case "ArrowUp":
          e.preventDefault();
          if (hoverIndex.value === -1) {
            newIndex2 = 0;
          } else if (hoverIndex.value === 0) {
            newIndex2 = optionsListLength - 1;
          } else {
            newIndex2--;
          }
          if ((_optionsList$value$ne = optionsList.value[newIndex2]) !== null && _optionsList$value$ne !== void 0 && _optionsList$value$ne.disabled) {
            newIndex2--;
          }
          hoverIndex.value = newIndex2;
          break;
        case "ArrowDown":
          e.preventDefault();
          if (hoverIndex.value === -1 || hoverIndex.value === optionsListLength - 1) {
            newIndex2 = 0;
          } else {
            newIndex2++;
          }
          if ((_optionsList$value$ne2 = optionsList.value[newIndex2]) !== null && _optionsList$value$ne2 !== void 0 && _optionsList$value$ne2.disabled) {
            newIndex2++;
          }
          hoverIndex.value = newIndex2;
          break;
        case "Enter":
          if (hoverIndex.value === -1)
            break;
          if (!innerPopupVisible.value) {
            setInnerPopupVisible(true, {
              e
            });
            break;
          }
          if (!props2.multiple) {
            var selectedOptions = getSelectedOptions(optionsList.value[hoverIndex.value].value);
            setInnerValue(optionsList.value[hoverIndex.value].value, {
              option: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions[0],
              selectedOptions: getSelectedOptions(optionsList.value[hoverIndex.value].value),
              trigger: "check",
              e
            });
            setInnerPopupVisible(false, {
              e
            });
          } else {
            var _optionsList$value$ho;
            if (hoverIndex.value === -1)
              return;
            var optionValue = (_optionsList$value$ho = optionsList.value[hoverIndex.value]) === null || _optionsList$value$ho === void 0 ? void 0 : _optionsList$value$ho.value;
            if (!optionValue)
              return;
            var newValue = getNewMultipleValue(innerValue.value, optionValue);
            var _selectedOptions = getSelectedOptions(newValue.value);
            setInnerValue(newValue.value, {
              option: _selectedOptions.find(function(v) {
                return v.value == optionValue;
              }),
              selectedOptions: _selectedOptions,
              trigger: newValue.isCheck ? "check" : "uncheck",
              e
            });
          }
          break;
        case "Escape":
          setInnerPopupVisible(false, {
            e
          });
          break;
      }
    };
    var popupContentRef = computed(function() {
      var _selectInputRef$value;
      return (_selectInputRef$value = selectInputRef.value) === null || _selectInputRef$value === void 0 ? void 0 : _selectInputRef$value.popupRef.getOverlay();
    });
    var optionalList = computed(function() {
      return optionsList.value.filter(function(item) {
        return !item.disabled && !item["check-all"] && !item.checkAll;
      });
    });
    var getSelectedOptions = function getSelectedOptions2() {
      var selectValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : innerValue.value;
      return optionsList.value.filter(function(option2) {
        if (option2.checkAll)
          return;
        if (isArray_1(selectValue))
          return selectValue.includes(option2.value);
        return selectValue === option2.value;
      });
    };
    var onCheckAllChange = function onCheckAllChange2(checked) {
      if (!props2.multiple)
        return;
      var value2 = checked ? optionalList.value.map(function(option2) {
        return option2.value;
      }) : [];
      setInnerValue(value2, {
        selectedOptions: getSelectedOptions(value2),
        trigger: checked ? "check" : "clear"
      });
    };
    var intersectionLen = computed(function() {
      var values = optionalList.value.map(function(item) {
        return item.value;
      });
      var n = intersection_1(innerValue.value, values);
      return n.length;
    });
    var isCheckAll = computed(function() {
      return intersectionLen.value === optionalList.value.length;
    });
    var indeterminate = computed(function() {
      return !isCheckAll.value && intersectionLen.value !== 0;
    });
    var SelectProvide = computed(function() {
      return {
        max: props2.max,
        multiple: props2.multiple,
        hoverIndex: hoverIndex.value,
        selectValue: innerValue.value,
        reserveKeyword: props2.reserveKeyword,
        handleValueChange: setInnerValue,
        handlerInputChange: setInputValue,
        handlePopupVisibleChange: setInnerPopupVisible,
        handleCreate,
        size: props2.size,
        popupContentRef,
        indeterminate: indeterminate.value,
        isCheckAll: isCheckAll.value,
        onCheckAllChange,
        getSelectedOptions,
        displayOptions: displayOptions.value
      };
    });
    provide(selectInjectKey, SelectProvide);
    var checkValueInvalid = function checkValueInvalid2() {
      if (!props2.multiple && isArray_1(orgValue.value)) {
        setOrgValue(void 0, {
          selectedOptions: [],
          trigger: "default"
        });
      }
      if (props2.multiple && !isArray_1(orgValue.value)) {
        setOrgValue([], {
          selectedOptions: [],
          trigger: "default"
        });
      }
    };
    var handleSearch = debounce_1(function(value2, _ref4) {
      var _props2$onSearch;
      var e = _ref4.e;
      (_props2$onSearch = props2.onSearch) === null || _props2$onSearch === void 0 ? void 0 : _props2$onSearch.call(props2, "".concat(value2), {
        e
      });
    }, 300);
    var addCache = function addCache2(val) {
      if (props2.multiple) {
        var newCache = [];
        var _iterator = _createForOfIteratorHelper(val || []), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            var option2 = optionsMap.value.get(item);
            if (option2) {
              newCache.push(option2);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        optionsCache.value = Array.from(/* @__PURE__ */ new Set([].concat(newCache, _toConsumableArray(optionsCache.value))));
      } else {
        var _option = optionsMap.value.get(val);
        if (_option) {
          optionsCache.value = Array.from(/* @__PURE__ */ new Set([_option].concat(_toConsumableArray(optionsCache.value))));
        }
      }
    };
    watch(orgValue, function(val) {
      checkValueInvalid();
      nextTick(function() {
        addCache(val);
      });
    }, {
      immediate: true
    });
    watch(function() {
      return props2.multiple;
    }, function() {
      checkValueInvalid();
    });
    watch(innerPopupVisible, function(value2) {
      if (value2) {
        hoverIndex.value = -1;
      } else {
        if (innerInputValue.value) {
          setInputValue("");
        }
      }
    });
    var updateScrollTop = function updateScrollTop2(content) {
      var _selectPanelRef$value;
      if (!selectPanelRef.value) {
        return;
      }
      var firstSelectedNode = (_selectPanelRef$value = selectPanelRef.value) === null || _selectPanelRef$value === void 0 || (_selectPanelRef$value = _selectPanelRef$value.innerRef) === null || _selectPanelRef$value === void 0 ? void 0 : _selectPanelRef$value.querySelector(".".concat(classPrefix.value, "-is-selected"));
      nextTick(function() {
        if (firstSelectedNode && content) {
          var _getComputedStyle = getComputedStyle(firstSelectedNode), paddingBottom = _getComputedStyle.paddingBottom;
          var _getComputedStyle2 = getComputedStyle(content), marginBottom = _getComputedStyle2.marginBottom;
          var elementBottomHeight = parseInt(paddingBottom, 10) + parseInt(marginBottom, 10);
          var updateValue = firstSelectedNode.offsetTop - content.offsetTop - (content.clientHeight - firstSelectedNode.clientHeight) + elementBottomHeight;
          content.scrollTop = updateValue;
        }
      });
    };
    provide("updateScrollTop", updateScrollTop);
    return function() {
      var _ref5 = props2.popupProps || {}, overlayClassName = _ref5.overlayClassName, restPopupProps = _objectWithoutProperties$1(_ref5, _excluded$4);
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__wrap")
      }, [createVNode(SelectInput, mergeProps({
        autoWidth: props2.autoWidth,
        readonly: props2.readonly,
        borderless: props2.borderless,
        multiple: props2.multiple,
        clearable: props2.clearable,
        loading: props2.loading,
        status: props2.status,
        tips: props2.tips,
        minCollapsedNum: props2.minCollapsedNum,
        autofocus: props2.autofocus,
        suffix: props2.suffix
      }, {
        "ref": selectInputRef,
        "class": COMPONENT_NAME.value,
        "value": displayText.value,
        "disabled": disabled.value,
        "popupVisible": innerPopupVisible.value,
        "inputValue": innerPopupVisible.value ? innerInputValue.value : "",
        "placeholder": "".concat(placeholderText.value),
        "allowInput": isFilterable.value,
        "collapsed-items": props2.collapsedItems,
        "inputProps": _objectSpread$v(_objectSpread$v({
          size: props2.size,
          autofocus: props2.autofocus
        }, props2.inputProps), {}, {
          onkeydown: handleKeyDown
        }),
        "tagInputProps": _objectSpread$v({
          size: props2.size
        }, props2.tagInputProps),
        "onTagChange": function onTagChange(val, ctx) {
          removeTag(ctx.index);
        },
        "tagProps": _objectSpread$v({}, props2.tagProps),
        "popupProps": _objectSpread$v({
          overlayClassName: ["".concat(COMPONENT_NAME.value, "__dropdown"), overlayClassName]
        }, restPopupProps),
        "label": function label() {
          return renderTNodeJSX2("prefixIcon");
        },
        "suffixIcon": function suffixIcon() {
          if (props2.suffixIcon || slots.suffixIcon) {
            return renderTNodeJSX2("suffixIcon");
          }
          return props2.showArrow && createVNode(FakeArrow, {
            "overlayClassName": "".concat(COMPONENT_NAME.value, "__right-icon"),
            "isActive": innerPopupVisible.value
          }, null);
        },
        "valueDisplay": function valueDisplay() {
          return renderTNodeJSX2("valueDisplay", {
            params: valueDisplayParams.value
          });
        },
        "onPopupVisibleChange": function onPopupVisibleChange(val, context) {
          setInnerPopupVisible(val, context);
        },
        "onInputChange": function onInputChange(value2, context) {
          if (value2) {
            setInnerPopupVisible(true, {
              e: context.e
            });
          }
          setInputValue(value2);
          handleSearch("".concat(value2), {
            e: context.e
          });
        },
        "onClear": function onClear(_ref6) {
          var _props2$onClear;
          var e = _ref6.e;
          setInnerValue(props2.multiple ? [] : void 0, {
            option: null,
            selectedOptions: getSelectedOptions(props2.multiple ? [] : void 0),
            trigger: "clear",
            e
          });
          (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 ? void 0 : _props2$onClear.call(props2, {
            e
          });
        },
        "onEnter": function onEnter(inputValue2, _ref7) {
          var _props2$onEnter;
          var e = _ref7.e;
          (_props2$onEnter = props2.onEnter) === null || _props2$onEnter === void 0 ? void 0 : _props2$onEnter.call(props2, {
            inputValue: "".concat(innerInputValue.value),
            e,
            value: innerValue.value
          });
          handleCreate();
        },
        "onBlur": function onBlur(inputValue2, _ref8) {
          var _props2$onBlur;
          var e = _ref8.e;
          (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 ? void 0 : _props2$onBlur.call(props2, {
            e,
            value: innerValue.value
          });
        },
        "onFocus": function onFocus(inputValue2, _ref9) {
          var _props2$onFocus;
          var e = _ref9.e;
          (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 ? void 0 : _props2$onFocus.call(props2, {
            e,
            value: innerValue.value
          });
        }
      }, props2.selectInputProps), {
        panel: function panel() {
          return createVNode(SelectPanel, mergeProps({
            "ref": selectPanelRef
          }, pick_1(props2, ["size", "multiple", "empty", "loading", "loadingText", "filterable", "creatable", "panelTopContent", "panelBottomContent", "filter", "scroll"]), {
            "options": options.value,
            "inputValue": innerInputValue.value
          }), slots);
        },
        collapsedItems: slots.collapsedItems,
        suffix: slots.suffix
      })]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Select = withInstall(_Select);
var Option = withInstall(_Option);
withInstall(_OptionGroup);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$7 = {
  append: {
    type: [String, Function]
  },
  prepend: {
    type: [String, Function]
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _InputAdornment = defineComponent({
  name: "TInputAdornment",
  inheritAttrs: false,
  props: props$7,
  setup: function setup13(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = usePrefixClass("input-adornment");
    var renderTNodeJSX2 = useTNodeJSX();
    var renderAddon = function renderAddon2(h2, type, addon) {
      var addonNode;
      var isContentNode = isString_1(addon) || isNumber_1(addon);
      if (!slots[type] && isString_1(addon) && !addon)
        return null;
      if (slots[type]) {
        if (slots[type](null).length === 1 && typeof slots[type](null)[0].children === "string") {
          addonNode = createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "__text")
          }, [slots[type](null)]);
        } else {
          addonNode = slots[type](null);
        }
      } else if (isFunction_1(addon)) {
        addonNode = addon(h2);
      } else {
        addonNode = isContentNode ? createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__text")
        }, [addon]) : addon;
      }
      return addonNode ? createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__").concat(type)
      }, [addonNode]) : addonNode;
    };
    return function() {
      var _ref2;
      var prepend = renderAddon(h, "prepend", props2.prepend);
      var append = renderAddon(h, "append", props2.append);
      var defaultSlot = renderTNodeJSX2("default") || [null];
      var className = [COMPONENT_NAME.value, (_ref2 = {}, _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--prepend"), prepend), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--append"), append), _ref2)];
      if (!prepend && !append) {
        return defaultSlot[0];
      }
      return createVNode("div", {
        "class": className
      }, [prepend, defaultSlot[0], append]);
    };
  }
});
const index$6 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var InputAdornment = withInstall(_InputAdornment);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$6 = {
  current: {
    type: Number,
    "default": void 0
  },
  modelValue: {
    type: Number,
    "default": void 0
  },
  defaultCurrent: {
    type: Number,
    "default": 1
  },
  disabled: Boolean,
  foldedMaxPageBtn: {
    type: Number,
    "default": 5
  },
  maxPageBtn: {
    type: Number,
    "default": 10
  },
  pageEllipsisMode: {
    type: String,
    "default": "mid",
    validator: function validator16(val) {
      if (!val)
        return true;
      return ["mid", "both-ends"].includes(val);
    }
  },
  pageSize: {
    type: Number,
    "default": void 0
  },
  defaultPageSize: {
    type: Number,
    "default": 10
  },
  pageSizeOptions: {
    type: Array,
    "default": function _default5() {
      return [5, 10, 20, 50];
    }
  },
  selectProps: {
    type: Object
  },
  showFirstAndLastPageBtn: Boolean,
  showJumper: Boolean,
  showPageNumber: {
    type: Boolean,
    "default": true
  },
  showPageSize: {
    type: Boolean,
    "default": true
  },
  showPreviousAndNextBtn: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator17(val) {
      if (!val)
        return true;
      return ["small", "medium"].includes(val);
    }
  },
  theme: {
    type: String,
    "default": "default",
    validator: function validator18(val) {
      if (!val)
        return true;
      return ["default", "simple"].includes(val);
    }
  },
  total: {
    type: Number,
    "default": 0
  },
  totalContent: {
    type: [Boolean, Function],
    "default": true
  },
  onChange: Function,
  onCurrentChange: Function,
  onPageSizeChange: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function usePaginationClasses(props2, innerCurrent, innerPageSize, name) {
  var _useCommonClassName = useCommonClassName$1(), SIZE = _useCommonClassName.SIZE, STATUS = _useCommonClassName.STATUS;
  var pageCount = computed(function() {
    var c = Math.ceil(props2.total / innerPageSize.value);
    return c > 0 ? c : 1;
  });
  var paginationClass = computed(function() {
    var _ref;
    return ["".concat(name.value), SIZE.value[props2.size], (_ref = {}, _defineProperty$2(_ref, STATUS.value.disabled, props2.disabled), _defineProperty$2(_ref, "".concat(name.value, "-ie"), getIEVersion() < 11), _ref)];
  });
  var totalClass = computed(function() {
    return ["".concat(name.value, "__total")];
  });
  var sizerClass = computed(function() {
    return ["".concat(name.value, "__select")];
  });
  var preBtnClass = computed(function() {
    return ["".concat(name.value, "__btn"), "".concat(name.value, "__btn-prev"), _defineProperty$2({}, STATUS.value.disabled, props2.disabled || innerCurrent.value === 1)];
  });
  var nextBtnClass = computed(function() {
    return ["".concat(name.value, "__btn"), "".concat(name.value, "__btn-next"), _defineProperty$2({}, STATUS.value.disabled, props2.disabled || innerCurrent.value === pageCount.value)];
  });
  var btnWrapClass = computed(function() {
    return ["".concat(name.value, "__pager")];
  });
  var btnMoreClass = computed(function() {
    return ["".concat(name.value, "__number"), "".concat(name.value, "__number--more"), _defineProperty$2({}, STATUS.value.disabled, props2.disabled)];
  });
  var jumperClass = computed(function() {
    return ["".concat(name.value, "__jump")];
  });
  var jumperInputClass = computed(function() {
    return ["".concat(name.value, "__input")];
  });
  var simpleClass = computed(function() {
    return ["".concat(name.value, "__select")];
  });
  var getButtonClass = function getButtonClass2(index2) {
    var _ref5;
    return ["".concat(name.value, "__number"), (_ref5 = {}, _defineProperty$2(_ref5, STATUS.value.disabled, props2.disabled), _defineProperty$2(_ref5, STATUS.value.current, innerCurrent.value === index2), _ref5)];
  };
  return {
    pageCount,
    paginationClass,
    totalClass,
    sizerClass,
    preBtnClass,
    nextBtnClass,
    btnWrapClass,
    btnMoreClass,
    jumperClass,
    jumperInputClass,
    simpleClass,
    getButtonClass
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useMoreAction(props2, pageCount, innerCurrent) {
  var prevMore = ref(false);
  var nextMore = ref(false);
  var curPageLeftCount = computed(function() {
    return Math.ceil((props2.foldedMaxPageBtn - 1) / 2);
  });
  var curPageRightCount = computed(function() {
    return Math.ceil((props2.foldedMaxPageBtn - 1) / 2);
  });
  var isPrevMoreShow = computed(function() {
    return 2 + curPageLeftCount.value < innerCurrent.value;
  });
  var isNextMoreShow = computed(function() {
    return pageCount.value - 1 - curPageRightCount.value > innerCurrent.value;
  });
  return {
    prevMore,
    nextMore,
    curPageLeftCount,
    curPageRightCount,
    isPrevMoreShow,
    isNextMoreShow
  };
}
const index$5 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var isNumber = isNumber_1;
function isNaN$1(value) {
  return isNumber(value) && value != +value;
}
var _isNaN = isNaN$1;
var _excluded$3 = ["pageCount"];
var min = 1;
var _Pagination = defineComponent({
  name: "TPagination",
  props: props$6,
  setup: function setup14(props2) {
    var _toRefs = toRefs(props2), modelValue = _toRefs.modelValue, pageSize = _toRefs.pageSize, current = _toRefs.current;
    var renderTNodeJSX2 = useTNodeJSX();
    var _useVModel = useVModel(current, modelValue, props2.defaultCurrent, props2.onCurrentChange, "current"), _useVModel2 = _slicedToArray(_useVModel, 2), innerCurrent = _useVModel2[0], setInnerCurrent = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(pageSize, props2.defaultPageSize, props2.onPageSizeChange, "pageSize"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), innerPageSize = _useDefaultValue2[0], setInnerPageSize = _useDefaultValue2[1];
    var _useConfig = useConfig("pagination"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("pagination");
    var _useGlobalIcon = useGlobalIcon({
      PageFirstIcon: pageFirst,
      PageLastIcon: pageLast,
      ChevronLeftIcon: chevronLeft,
      ChevronRightIcon: chevronRight,
      ChevronLeftDoubleIcon: chevronLeftDouble,
      ChevronRightDoubleIcon: chevronRightDouble,
      EllipsisIcon: ellipsis
    }), PageFirstIcon$1 = _useGlobalIcon.PageFirstIcon, PageLastIcon$1 = _useGlobalIcon.PageLastIcon, ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon, ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon, ChevronLeftDoubleIcon$1 = _useGlobalIcon.ChevronLeftDoubleIcon, ChevronRightDoubleIcon$1 = _useGlobalIcon.ChevronRightDoubleIcon, EllipsisIcon$1 = _useGlobalIcon.EllipsisIcon;
    var _usePaginationClasses = usePaginationClasses(props2, innerCurrent, innerPageSize, COMPONENT_NAME), pageCount = _usePaginationClasses.pageCount, CLASS_MAP = _objectWithoutProperties$1(_usePaginationClasses, _excluded$3);
    var _useMoreAction = useMoreAction(props2, pageCount, innerCurrent), prevMore = _useMoreAction.prevMore, isPrevMoreShow = _useMoreAction.isPrevMoreShow, curPageLeftCount = _useMoreAction.curPageLeftCount, nextMore = _useMoreAction.nextMore, isNextMoreShow = _useMoreAction.isNextMoreShow, curPageRightCount = _useMoreAction.curPageRightCount;
    var jumpIndex = ref(innerCurrent.value);
    var isFolded = computed(function() {
      return pageCount.value > props2.maxPageBtn;
    });
    var sizeOptions = computed(function() {
      var pageSizeOptions = props2.pageSizeOptions;
      var options = pageSizeOptions.map(function(option2) {
        return isObject_1(option2) ? option2 : {
          label: t(globalConfig.value.itemsPerPage, {
            size: option2
          }),
          value: Number(option2)
        };
      });
      return options.sort(function(a, b) {
        return a.value - b.value;
      });
    });
    var isMidEllipsis = computed(function() {
      return props2.pageEllipsisMode === "mid";
    });
    var pages = computed(function() {
      var array = [];
      var start;
      var end;
      if (isFolded.value) {
        if (isPrevMoreShow.value && isNextMoreShow.value) {
          start = innerCurrent.value - curPageLeftCount.value;
          end = innerCurrent.value + curPageRightCount.value;
        } else {
          var foldedStart = isMidEllipsis.value ? 2 : 1;
          var foldedEnd = isMidEllipsis.value ? pageCount.value - 1 : pageCount.value;
          start = isPrevMoreShow.value ? pageCount.value - props2.foldedMaxPageBtn + 1 : foldedStart;
          end = isPrevMoreShow.value ? foldedEnd : props2.foldedMaxPageBtn;
        }
      } else {
        start = 1;
        end = pageCount.value;
      }
      for (var i = start; i <= end; i++) {
        array.push(i);
      }
      return array;
    });
    watch(function() {
      return pageCount.value;
    }, function() {
      if (innerCurrent.value > pageCount.value)
        innerCurrent.value = 1;
    });
    watch(function() {
      return innerCurrent.value;
    }, function(val) {
      return jumpIndex.value = val;
    });
    var toPage = function toPage2(pageIndex, isTriggerChange) {
      if (props2.disabled) {
        return;
      }
      var current2 = pageIndex;
      if (pageIndex < min) {
        current2 = min;
      } else if (pageIndex > pageCount.value) {
        current2 = pageCount.value;
      }
      if (innerCurrent.value !== current2) {
        var prev = innerCurrent.value;
        var pageInfo = {
          current: current2,
          previous: prev,
          pageSize: innerPageSize.value
        };
        setInnerCurrent(current2, pageInfo);
        if (isTriggerChange !== false) {
          var _props2$onChange;
          (_props2$onChange = props2.onChange) === null || _props2$onChange === void 0 ? void 0 : _props2$onChange.call(props2, pageInfo);
        }
      }
    };
    var handlePageChange = function handlePageChange2(type) {
      var pageChangeMap = {
        prevPage: function prevPage() {
          return toPage(innerCurrent.value - 1);
        },
        nextPage: function nextPage() {
          return toPage(innerCurrent.value + 1);
        },
        prevMorePage: function prevMorePage() {
          return toPage(innerCurrent.value - props2.foldedMaxPageBtn);
        },
        nextMorePage: function nextMorePage() {
          return toPage(innerCurrent.value + props2.foldedMaxPageBtn);
        }
      };
      pageChangeMap[type]();
    };
    var onSelectorChange = function onSelectorChange2(e) {
      var _props2$onChange2;
      if (props2.disabled) {
        return;
      }
      var pageSize2 = parseInt(e, 10);
      var pageCount2 = 1;
      if (pageSize2 > 0) {
        pageCount2 = Math.max(Math.ceil(props2.total / pageSize2), 1);
      }
      var isIndexChange = false;
      if (innerCurrent.value > pageCount2) {
        isIndexChange = true;
      }
      var pageInfo = {
        current: isIndexChange ? pageCount2 : innerCurrent.value,
        previous: innerCurrent.value,
        pageSize: pageSize2
      };
      (_props2$onChange2 = props2.onChange) === null || _props2$onChange2 === void 0 ? void 0 : _props2$onChange2.call(props2, pageInfo);
      setInnerPageSize(pageSize2, pageInfo);
      if (isIndexChange) {
        toPage(pageCount2, false);
      }
    };
    var onJumperChange = function onJumperChange2(val) {
      var currentIndex = Math.trunc(+val);
      if (_isNaN(currentIndex))
        return;
      jumpIndex.value = currentIndex;
      toPage(currentIndex);
    };
    return function() {
      var total = props2.total, pageSizeOptions = props2.pageSizeOptions, size = props2.size, disabled = props2.disabled, showPageSize = props2.showPageSize;
      if (pageCount.value < 1)
        return null;
      var Jumper = createVNode("div", {
        "class": CLASS_MAP.jumperClass.value
      }, [t(globalConfig.value.jumpTo), createVNode(InputAdornment, {
        "append": "/ ".concat(pageCount.value, " ").concat(t(globalConfig.value.page))
      }, {
        "default": function _default14() {
          return [createVNode(InputNumber, {
            "class": CLASS_MAP.jumperInputClass.value,
            "modelValue": jumpIndex.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return jumpIndex.value = $event;
            },
            "onBlur": onJumperChange,
            "onEnter": onJumperChange,
            "max": pageCount.value,
            "min": min,
            "size": size,
            "disabled": disabled,
            "theme": "normal",
            "placeholder": ""
          }, null)];
        }
      })]);
      return createVNode("div", {
        "class": CLASS_MAP.paginationClass.value
      }, [renderTNodeJSX2("totalContent", createVNode("div", {
        "class": CLASS_MAP.totalClass.value
      }, [t(globalConfig.value.total, {
        total
      })])), showPageSize && pageSizeOptions.length > 0 && createVNode(Select, mergeProps({
        "size": size,
        "value": innerPageSize,
        "disabled": disabled,
        "class": CLASS_MAP.sizerClass.value,
        "autoWidth": true,
        "onChange": onSelectorChange,
        "options": sizeOptions.value
      }, props2.selectProps), null), props2.showFirstAndLastPageBtn ? createVNode("div", {
        "class": CLASS_MAP.preBtnClass.value,
        "onClick": function onClick() {
          return toPage(1);
        },
        "disabled": props2.disabled || props2.current === min
      }, [createVNode(PageFirstIcon$1, null, null)]) : null, props2.showPreviousAndNextBtn ? createVNode("div", {
        "class": CLASS_MAP.preBtnClass.value,
        "onClick": function onClick() {
          return handlePageChange("prevPage");
        },
        "disabled": disabled || innerCurrent.value === min
      }, [createVNode(ChevronLeftIcon$1, null, null)]) : null, props2.showPageNumber && props2.theme === "default" ? createVNode("ul", {
        "class": CLASS_MAP.btnWrapClass.value
      }, [isFolded.value && isMidEllipsis.value && createVNode("li", {
        "class": CLASS_MAP.getButtonClass(1),
        "onClick": function onClick() {
          return toPage(min);
        }
      }, [min]), isFolded.value && isPrevMoreShow.value && isMidEllipsis.value ? createVNode("li", {
        "class": CLASS_MAP.btnMoreClass.value,
        "onClick": function onClick() {
          return handlePageChange("prevMorePage");
        },
        "onMouseOver": function onMouseOver() {
          return prevMore.value = true;
        },
        "onMouseOut": function onMouseOut() {
          return prevMore.value = false;
        }
      }, [prevMore.value ? createVNode(ChevronLeftDoubleIcon$1, null, null) : createVNode(EllipsisIcon$1, null, null)]) : null, pages.value.map(function(i) {
        return createVNode("li", {
          "class": CLASS_MAP.getButtonClass(i),
          "key": i,
          "onClick": function onClick() {
            return toPage(i);
          }
        }, [i]);
      }), isFolded.value && isNextMoreShow.value && isMidEllipsis.value ? createVNode("li", {
        "class": CLASS_MAP.btnMoreClass.value,
        "onClick": function onClick() {
          return handlePageChange("nextMorePage");
        },
        "onMouseOver": function onMouseOver() {
          return nextMore.value = true;
        },
        "onMouseOut": function onMouseOut() {
          return nextMore.value = false;
        }
      }, [nextMore.value ? createVNode(ChevronRightDoubleIcon$1, null, null) : createVNode(EllipsisIcon$1, null, null)]) : null, isFolded.value && isMidEllipsis.value ? createVNode("li", {
        "class": CLASS_MAP.getButtonClass(pageCount.value),
        "onClick": function onClick() {
          return toPage(pageCount.value);
        }
      }, [pageCount.value]) : null]) : null, props2.theme === "simple" && Jumper, props2.showPreviousAndNextBtn ? createVNode("div", {
        "class": CLASS_MAP.nextBtnClass.value,
        "onClick": function onClick() {
          return handlePageChange("nextPage");
        },
        "disabled": disabled || innerCurrent.value === pageCount.value
      }, [createVNode(ChevronRightIcon$1, null, null)]) : null, props2.showFirstAndLastPageBtn ? createVNode("div", {
        "class": CLASS_MAP.nextBtnClass.value,
        "onClick": function onClick() {
          return toPage(pageCount.value);
        },
        "disabled": disabled || innerCurrent.value === pageCount.value
      }, [createVNode(PageLastIcon$1, null, null)]) : null, props2.theme === "default" && props2.showJumper && Jumper]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$5 = {
  disabled: {
    type: [Boolean, Object]
  },
  layout: {
    type: String,
    "default": "horizontal",
    validator: function validator19(val) {
      if (!val)
        return true;
      return ["horizontal", "vertical"].includes(val);
    }
  },
  showCurrent: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator20(val) {
      if (!val)
        return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  tips: {
    type: Object
  },
  variant: {
    type: String,
    "default": "text",
    validator: function validator21(val) {
      if (!val)
        return true;
      return ["text", "outline"].includes(val);
    }
  },
  onChange: Function
};
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
function _objectSpread$u(target) {
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
var _PaginationMini = defineComponent({
  name: "TPaginationMini",
  props: _objectSpread$u({}, props$5),
  setup: function setup15(props2) {
    var COMPONENT_NAME = usePrefixClass("pagination-mini");
    var _useGlobalIcon = useGlobalIcon({
      ChevronLeftIcon: chevronLeft,
      RoundIcon: round,
      ChevronRightIcon: chevronRight,
      ChevronUpIcon: chevronUp,
      ChevronDownIcon: chevronDown
    }), ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon, RoundIcon$1 = _useGlobalIcon.RoundIcon, ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon, ChevronUpIcon$1 = _useGlobalIcon.ChevronUpIcon, ChevronDownIcon$1 = _useGlobalIcon.ChevronDownIcon;
    var titleConfig = computed(function() {
      if (isObject_1(props2.tips))
        return props2.tips;
      if (props2.tips === true)
        return {
          prev: "上一页",
          current: "当前",
          next: "下一页"
        };
      return {};
    });
    var disabledConfig = computed(function() {
      if (isObject_1(props2.disabled))
        return props2.disabled;
      if (props2.disabled === true)
        return {
          prev: true,
          current: true,
          next: true
        };
      return {
        prev: false,
        current: false,
        next: false
      };
    });
    return function() {
      var jumperClass = [COMPONENT_NAME.value, _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--outline"), props2.variant === "outline")];
      return createVNode("div", {
        "class": jumperClass
      }, [createVNode(Button, {
        "title": titleConfig.value.prev,
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange;
          return (_props2$onChange = props2.onChange) === null || _props2$onChange === void 0 ? void 0 : _props2$onChange.call(props2, {
            e,
            trigger: "prev"
          });
        },
        "icon": props2.layout === "horizontal" ? function() {
          return createVNode(ChevronLeftIcon$1, null, null);
        } : function() {
          return createVNode(ChevronUpIcon$1, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__prev"),
        "disabled": disabledConfig.value.prev
      }, null), props2.showCurrent && createVNode(Button, {
        "title": titleConfig.value.current,
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange2;
          return (_props2$onChange2 = props2.onChange) === null || _props2$onChange2 === void 0 ? void 0 : _props2$onChange2.call(props2, {
            e,
            trigger: "current"
          });
        },
        "icon": function icon() {
          return createVNode(RoundIcon$1, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__current"),
        "disabled": disabledConfig.value.current
      }, null), createVNode(Button, {
        "title": titleConfig.value.next,
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange3;
          return (_props2$onChange3 = props2.onChange) === null || _props2$onChange3 === void 0 ? void 0 : _props2$onChange3.call(props2, {
            e,
            trigger: "next"
          });
        },
        "icon": props2.layout === "horizontal" ? function() {
          return createVNode(ChevronRightIcon$1, null, null);
        } : function() {
          return createVNode(ChevronDownIcon$1, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__next"),
        "disabled": disabledConfig.value.next
      }, null)]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Pagination = withInstall(_Pagination);
withInstall(_PaginationMini);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function setToArray$2(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$2;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var SetCache$1 = _SetCache, arrayIncludes$1 = _arrayIncludes, arrayIncludesWith$1 = _arrayIncludesWith, arrayMap$1 = _arrayMap, baseUnary = _baseUnary, cacheHas$1 = _cacheHas;
var LARGE_ARRAY_SIZE$1 = 200;
function baseDifference$1(array, values, iteratee, comparator) {
  var index2 = -1, includes = arrayIncludes$1, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap$1(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith$1;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE$1) {
    includes = cacheHas$1;
    isCommon = false;
    values = new SetCache$1(values);
  }
  outer:
    while (++index2 < length) {
      var value = array[index2], computed2 = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed2) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed2, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var _baseDifference = baseDifference$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function isNil(value) {
  return value == null;
}
var isNil_1 = isNil;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$4 = {
  colon: Boolean,
  data: {
    type: Object,
    "default": function _default6() {
      return {};
    }
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
  errorMessage: {
    type: Object
  },
  formControlledComponents: {
    type: Array
  },
  labelAlign: {
    type: String,
    "default": "right",
    validator: function validator22(val) {
      if (!val)
        return true;
      return ["left", "right", "top"].includes(val);
    }
  },
  labelWidth: {
    type: [String, Number],
    "default": "100px"
  },
  layout: {
    type: String,
    "default": "vertical",
    validator: function validator23(val) {
      if (!val)
        return true;
      return ["vertical", "inline"].includes(val);
    }
  },
  preventSubmitDefault: {
    type: Boolean,
    "default": true
  },
  requiredMark: {
    type: Boolean,
    "default": void 0
  },
  resetType: {
    type: String,
    "default": "empty",
    validator: function validator24(val) {
      if (!val)
        return true;
      return ["empty", "initial"].includes(val);
    }
  },
  rules: {
    type: Object
  },
  scrollToFirstError: {
    type: String,
    validator: function validator25(val) {
      if (!val)
        return true;
      return ["", "smooth", "auto"].includes(val);
    }
  },
  showErrorMessage: {
    type: Boolean,
    "default": true
  },
  statusIcon: {
    type: [Boolean, Function],
    "default": void 0
  },
  submitWithWarningMessage: Boolean,
  onReset: Function,
  onSubmit: Function,
  onValidate: Function
};
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
function _objectSpread$t(target) {
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
var _Form = defineComponent({
  name: "TForm",
  props: _objectSpread$t({}, props$4),
  setup: function setup16(props2, _ref) {
    var expose = _ref.expose;
    var renderContent2 = useTNodeJSX();
    var _toRefs = toRefs(props2), disabled = _toRefs.disabled;
    provide("formDisabled", {
      disabled
    });
    var formRef = ref(null);
    var children = ref([]);
    var _toRefs2 = toRefs(props2), showErrorMessage = _toRefs2.showErrorMessage, labelWidth = _toRefs2.labelWidth, labelAlign = _toRefs2.labelAlign, data2 = _toRefs2.data, colon = _toRefs2.colon, requiredMark = _toRefs2.requiredMark, rules = _toRefs2.rules, errorMessage = _toRefs2.errorMessage, resetType = _toRefs2.resetType;
    provide(FormInjectionKey, reactive({
      showErrorMessage,
      labelWidth,
      labelAlign,
      data: data2,
      colon,
      requiredMark,
      rules,
      errorMessage,
      resetType,
      children,
      renderContent: renderContent2
    }));
    var COMPONENT_NAME = usePrefixClass("form");
    var CLASS_NAMES = useCLASSNAMES();
    var formClass = computed(function() {
      return [CLASS_NAMES.value.form, _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "-inline"), props2.layout === "inline")];
    });
    var FORM_ITEM_CLASS_PREFIX = usePrefixClass("form-item__");
    var getFirstError = function getFirstError2(result) {
      if (isBoolean_1(result))
        return "";
      var _Object$keys = Object.keys(result), _Object$keys2 = _slicedToArray(_Object$keys, 1), firstKey = _Object$keys2[0];
      if (props2.scrollToFirstError) {
        scrollTo("".concat(FORM_ITEM_CLASS_PREFIX.value + firstKey));
      }
      var resArr = result[firstKey];
      if (!isArray_1(resArr))
        return "";
      return resArr.filter(function(item) {
        return !item.result;
      })[0].message;
    };
    var scrollTo = function scrollTo2(selector) {
      var _formRef$value$getEle = formRef.value.getElementsByClassName(selector), _formRef$value$getEle2 = _slicedToArray(_formRef$value$getEle, 1), dom = _formRef$value$getEle2[0];
      var behavior = props2.scrollToFirstError;
      if (behavior) {
        dom && dom.scrollIntoView({
          behavior
        });
      }
    };
    var needValidate = function needValidate2(name, fields) {
      if (!fields || !isArray_1(fields))
        return true;
      return fields.indexOf("".concat(name)) !== -1;
    };
    var formatValidateResult = function formatValidateResult2(validateResultList) {
      var result = validateResultList.reduce(function(r, err) {
        return Object.assign(r || {}, err);
      }, {});
      Object.keys(result).forEach(function(key2) {
        if (result[key2] === true) {
          delete result[key2];
        }
      });
      return isEmpty_1(result) ? true : result;
    };
    var validate2 = /* @__PURE__ */ function() {
      var _ref3 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(param) {
        var _props2$onValidate;
        var _ref4, fields, _ref4$trigger, trigger, showErrorMessage2, list, arr, result, firstError;
        return regenerator.wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                _ref4 = param || {}, fields = _ref4.fields, _ref4$trigger = _ref4.trigger, trigger = _ref4$trigger === void 0 ? "all" : _ref4$trigger, showErrorMessage2 = _ref4.showErrorMessage;
                list = children.value.filter(function(child) {
                  return isFunction_1(child.validate) && needValidate(String(child.name), fields);
                }).map(function(child) {
                  return child.validate(trigger, showErrorMessage2);
                });
                _context.next = 4;
                return Promise.all(list);
              case 4:
                arr = _context.sent;
                result = formatValidateResult(arr);
                firstError = getFirstError(result);
                (_props2$onValidate = props2.onValidate) === null || _props2$onValidate === void 0 ? void 0 : _props2$onValidate.call(props2, {
                  validateResult: result,
                  firstError
                });
                return _context.abrupt("return", result);
              case 9:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
      return function validate3(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    var validateOnly = /* @__PURE__ */ function() {
      var _ref5 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2(params) {
        var _ref6, fields, _ref6$trigger, trigger, list, arr;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref6 = params || {}, fields = _ref6.fields, _ref6$trigger = _ref6.trigger, trigger = _ref6$trigger === void 0 ? "all" : _ref6$trigger;
                list = children.value.filter(function(child) {
                  return isFunction_1(child.validateOnly) && needValidate(String(child.name), fields);
                }).map(function(child) {
                  return child.validateOnly(trigger);
                });
                _context2.next = 4;
                return Promise.all(list);
              case 4:
                arr = _context2.sent;
                return _context2.abrupt("return", formatValidateResult(arr));
              case 6:
              case "end":
                return _context2.stop();
            }
        }, _callee2);
      }));
      return function validateOnly2(_x2) {
        return _ref5.apply(this, arguments);
      };
    }();
    var submitParams = ref();
    var _onSubmit = function onSubmit(e) {
      if (props2.preventSubmitDefault && e) {
        e.preventDefault();
        e.stopPropagation();
      }
      validate2(submitParams.value).then(function(r) {
        var _props2$onSubmit;
        (_props2$onSubmit = props2.onSubmit) === null || _props2$onSubmit === void 0 ? void 0 : _props2$onSubmit.call(props2, {
          validateResult: r,
          firstError: getFirstError(r),
          e
        });
      });
      submitParams.value = void 0;
    };
    var submit = /* @__PURE__ */ function() {
      var _ref7 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee3(params) {
        return regenerator.wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                submitParams.value = params;
                requestSubmit(formRef.value);
              case 2:
              case "end":
                return _context3.stop();
            }
        }, _callee3);
      }));
      return function submit2(_x3) {
        return _ref7.apply(this, arguments);
      };
    }();
    var resetParams = ref();
    var _onReset = function onReset(e) {
      var _props2$onReset;
      if (props2.preventSubmitDefault && e) {
        e.preventDefault();
        e.stopPropagation();
      }
      children.value.filter(function(child) {
        var _resetParams$value;
        return isFunction_1(child.resetField) && needValidate(String(child.name), (_resetParams$value = resetParams.value) === null || _resetParams$value === void 0 ? void 0 : _resetParams$value.fields);
      }).forEach(function(child) {
        var _resetParams$value2;
        return child.resetField((_resetParams$value2 = resetParams.value) === null || _resetParams$value2 === void 0 ? void 0 : _resetParams$value2.type);
      });
      resetParams.value = void 0;
      (_props2$onReset = props2.onReset) === null || _props2$onReset === void 0 ? void 0 : _props2$onReset.call(props2, {
        e
      });
    };
    var reset = function reset2(params) {
      resetParams.value = params;
      formRef.value.reset();
    };
    var clearValidate = function clearValidate2(fields) {
      children.value.forEach(function(child) {
        if (isFunction_1(child.resetHandler) && needValidate(String(child.name), fields)) {
          child.resetHandler();
        }
      });
    };
    var setValidateMessage = function setValidateMessage2(validateMessage) {
      var keys2 = Object.keys(validateMessage);
      if (!keys2.length)
        return;
      var list = children.value.filter(function(child) {
        return isFunction_1(child.setValidateMessage) && keys2.includes("".concat(child.name));
      }).map(function(child) {
        return child.setValidateMessage(validateMessage[child.name]);
      });
      Promise.all(list);
    };
    expose({
      validate: validate2,
      submit,
      reset,
      clearValidate,
      setValidateMessage,
      validateOnly
    });
    return function() {
      return createVNode("form", {
        "ref": formRef,
        "class": formClass.value,
        "onSubmit": function onSubmit(e) {
          return _onSubmit(e);
        },
        "onReset": function onReset(e) {
          return _onReset(e);
        }
      }, [renderContent2("default")]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseSet = _baseSet;
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
var set_1 = set;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var isDate$1 = { exports: {} };
var merge$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = merge;
  function merge() {
    var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var defaults2 = arguments.length > 1 ? arguments[1] : void 0;
    for (var key2 in defaults2) {
      if (typeof obj[key2] === "undefined") {
        obj[key2] = defaults2[key2];
      }
    }
    return obj;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(merge$1, merge$1.exports);
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isDate2;
  var _merge = _interopRequireDefault(merge$1.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _createForOfIteratorHelper2(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F2() {
        };
        return {
          s: F,
          n: function n() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e2) {
            throw _e2;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
      s: function s() {
        it = o[Symbol.iterator]();
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e3) {
        didErr = true;
        err = _e3;
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null)
            it["return"]();
        } finally {
          if (didErr)
            throw err;
        }
      }
    };
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len2) {
    if (len2 == null || len2 > arr.length)
      len2 = arr.length;
    for (var i = 0, arr2 = new Array(len2); i < len2; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var default_date_options = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: false
  };
  function isValidFormat(format) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
  }
  function zip(date, format) {
    var zippedArr = [], len2 = Math.min(date.length, format.length);
    for (var i = 0; i < len2; i++) {
      zippedArr.push([date[i], format[i]]);
    }
    return zippedArr;
  }
  function isDate2(input, options) {
    if (typeof options === "string") {
      options = (0, _merge["default"])({
        format: options
      }, default_date_options);
    } else {
      options = (0, _merge["default"])(options, default_date_options);
    }
    if (typeof input === "string" && isValidFormat(options.format)) {
      var formatDelimiter = options.delimiters.find(function(delimiter) {
        return options.format.indexOf(delimiter) !== -1;
      });
      var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
        return input.indexOf(delimiter) !== -1;
      });
      var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
      var dateObj = {};
      var _iterator = _createForOfIteratorHelper2(dateAndFormat), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray2(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
          if (dateWord.length !== formatWord.length) {
            return false;
          }
          dateObj[formatWord.charAt(0)] = dateWord;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return new Date("".concat(dateObj.m, "/").concat(dateObj.d, "/").concat(dateObj.y)).getDate() === +dateObj.d;
    }
    if (!options.strictMode) {
      return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
    }
    return false;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isDate$1, isDate$1.exports);
var isDate = /* @__PURE__ */ getDefaultExportFromCjs(isDate$1.exports);
var isEmail$1 = { exports: {} };
var assertString$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = assertString;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function assertString(input) {
    var isString = typeof input === "string" || input instanceof String;
    if (!isString) {
      var invalidType = _typeof2(input);
      if (input === null)
        invalidType = "null";
      else if (invalidType === "object")
        invalidType = input.constructor.name;
      throw new TypeError("Expected a string but received a ".concat(invalidType));
    }
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(assertString$1, assertString$1.exports);
var isByteLength$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isByteLength;
  var _assertString = _interopRequireDefault(assertString$1.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function isByteLength(str, options) {
    (0, _assertString["default"])(str);
    var min3;
    var max2;
    if (_typeof2(options) === "object") {
      min3 = options.min || 0;
      max2 = options.max;
    } else {
      min3 = arguments[1];
      max2 = arguments[2];
    }
    var len2 = encodeURI(str).split(/%..|./).length - 1;
    return len2 >= min3 && (typeof max2 === "undefined" || len2 <= max2);
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isByteLength$1, isByteLength$1.exports);
var isFQDN$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isFQDN;
  var _assertString = _interopRequireDefault(assertString$1.exports);
  var _merge = _interopRequireDefault(merge$1.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false
  };
  function isFQDN(str, options) {
    (0, _assertString["default"])(str);
    options = (0, _merge["default"])(options, default_fqdn_options);
    if (options.allow_trailing_dot && str[str.length - 1] === ".") {
      str = str.substring(0, str.length - 1);
    }
    if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
      str = str.substring(2);
    }
    var parts = str.split(".");
    var tld = parts[parts.length - 1];
    if (options.require_tld) {
      if (parts.length < 2) {
        return false;
      }
      if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
        return false;
      }
      if (/\s/.test(tld)) {
        return false;
      }
    }
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
      return false;
    }
    return parts.every(function(part) {
      if (part.length > 63 && !options.ignore_max_length) {
        return false;
      }
      if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
        return false;
      }
      if (/[\uff01-\uff5e]/.test(part)) {
        return false;
      }
      if (/^-|-$/.test(part)) {
        return false;
      }
      if (!options.allow_underscores && /_/.test(part)) {
        return false;
      }
      return true;
    });
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isFQDN$1, isFQDN$1.exports);
var isIP$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isIP;
  var _assertString = _interopRequireDefault(assertString$1.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
  var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
  var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
  var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
  var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
  function isIP(str) {
    var version2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, _assertString["default"])(str);
    version2 = String(version2);
    if (!version2) {
      return isIP(str, 4) || isIP(str, 6);
    }
    if (version2 === "4") {
      return IPv4AddressRegExp.test(str);
    }
    if (version2 === "6") {
      return IPv6AddressRegExp.test(str);
    }
    return false;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isIP$1, isIP$1.exports);
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isEmail2;
  var _assertString = _interopRequireDefault(assertString$1.exports);
  var _merge = _interopRequireDefault(merge$1.exports);
  var _isByteLength = _interopRequireDefault(isByteLength$1.exports);
  var _isFQDN = _interopRequireDefault(isFQDN$1.exports);
  var _isIP = _interopRequireDefault(isIP$1.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  var default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: "",
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: []
  };
  var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
  var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  var gmailUserPart = /^[a-z\d]+$/;
  var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
  var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
  var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  var defaultMaxEmailLength = 254;
  function validateDisplayName(display_name) {
    var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
    if (!display_name_without_quotes.trim()) {
      return false;
    }
    var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
      if (display_name_without_quotes === display_name) {
        return false;
      }
      var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
      if (!all_start_with_back_slash) {
        return false;
      }
    }
    return true;
  }
  function isEmail2(str, options) {
    (0, _assertString["default"])(str);
    options = (0, _merge["default"])(options, default_email_options);
    if (options.require_display_name || options.allow_display_name) {
      var display_email = str.match(splitNameAddress);
      if (display_email) {
        var display_name = display_email[1];
        str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
        if (display_name.endsWith(" ")) {
          display_name = display_name.slice(0, -1);
        }
        if (!validateDisplayName(display_name)) {
          return false;
        }
      } else if (options.require_display_name) {
        return false;
      }
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
      return false;
    }
    var parts = str.split("@");
    var domain = parts.pop();
    var lower_domain = domain.toLowerCase();
    if (options.host_blacklist.includes(lower_domain)) {
      return false;
    }
    if (options.host_whitelist.length > 0 && !options.host_whitelist.includes(lower_domain)) {
      return false;
    }
    var user = parts.join("@");
    if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
      user = user.toLowerCase();
      var username = user.split("+")[0];
      if (!(0, _isByteLength["default"])(username.replace(/\./g, ""), {
        min: 6,
        max: 30
      })) {
        return false;
      }
      var _user_parts = username.split(".");
      for (var i = 0; i < _user_parts.length; i++) {
        if (!gmailUserPart.test(_user_parts[i])) {
          return false;
        }
      }
    }
    if (options.ignore_max_length === false && (!(0, _isByteLength["default"])(user, {
      max: 64
    }) || !(0, _isByteLength["default"])(domain, {
      max: 254
    }))) {
      return false;
    }
    if (!(0, _isFQDN["default"])(domain, {
      require_tld: options.require_tld,
      ignore_max_length: options.ignore_max_length
    })) {
      if (!options.allow_ip_domain) {
        return false;
      }
      if (!(0, _isIP["default"])(domain)) {
        if (!domain.startsWith("[") || !domain.endsWith("]")) {
          return false;
        }
        var noBracketdomain = domain.slice(1, -1);
        if (noBracketdomain.length === 0 || !(0, _isIP["default"])(noBracketdomain)) {
          return false;
        }
      }
    }
    if (user[0] === '"') {
      user = user.slice(1, user.length - 1);
      return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern2 = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split(".");
    for (var _i = 0; _i < user_parts.length; _i++) {
      if (!pattern2.test(user_parts[_i])) {
        return false;
      }
    }
    if (options.blacklisted_chars) {
      if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1)
        return false;
    }
    return true;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isEmail$1, isEmail$1.exports);
var isEmail = /* @__PURE__ */ getDefaultExportFromCjs(isEmail$1.exports);
var isURL$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isURL2;
  var _assertString = _interopRequireDefault(assertString$1.exports);
  var _isFQDN = _interopRequireDefault(isFQDN$1.exports);
  var _isIP = _interopRequireDefault(isIP$1.exports);
  var _merge = _interopRequireDefault(merge$1.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len2) {
    if (len2 == null || len2 > arr.length)
      len2 = arr.length;
    for (var i = 0, arr2 = new Array(len2); i < len2; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var default_url_options = {
    protocols: ["http", "https", "ftp"],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true
  };
  var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  }
  function checkHost(host, matches2) {
    for (var i = 0; i < matches2.length; i++) {
      var match = matches2[i];
      if (host === match || isRegExp(match) && match.test(host)) {
        return true;
      }
    }
    return false;
  }
  function isURL2(url, options) {
    (0, _assertString["default"])(url);
    if (!url || /[\s<>]/.test(url)) {
      return false;
    }
    if (url.indexOf("mailto:") === 0) {
      return false;
    }
    options = (0, _merge["default"])(options, default_url_options);
    if (options.validate_length && url.length >= 2083) {
      return false;
    }
    if (!options.allow_fragments && url.includes("#")) {
      return false;
    }
    if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) {
      return false;
    }
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split("#");
    url = split.shift();
    split = url.split("?");
    url = split.shift();
    split = url.split("://");
    if (split.length > 1) {
      protocol = split.shift().toLowerCase();
      if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
        return false;
      }
    } else if (options.require_protocol) {
      return false;
    } else if (url.slice(0, 2) === "//") {
      if (!options.allow_protocol_relative_urls) {
        return false;
      }
      split[0] = url.slice(2);
    }
    url = split.join("://");
    if (url === "") {
      return false;
    }
    split = url.split("/");
    url = split.shift();
    if (url === "" && !options.require_host) {
      return true;
    }
    split = url.split("@");
    if (split.length > 1) {
      if (options.disallow_auth) {
        return false;
      }
      if (split[0] === "") {
        return false;
      }
      auth = split.shift();
      if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
        return false;
      }
      var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray2(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
      if (user === "" && password === "") {
        return false;
      }
    }
    hostname = split.join("@");
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
      host = "";
      ipv6 = ipv6_match[1];
      port_str = ipv6_match[2] || null;
    } else {
      split = hostname.split(":");
      host = split.shift();
      if (split.length) {
        port_str = split.join(":");
      }
    }
    if (port_str !== null && port_str.length > 0) {
      port = parseInt(port_str, 10);
      if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
        return false;
      }
    } else if (options.require_port) {
      return false;
    }
    if (options.host_whitelist) {
      return checkHost(host, options.host_whitelist);
    }
    if (host === "" && !options.require_host) {
      return true;
    }
    if (!(0, _isIP["default"])(host) && !(0, _isFQDN["default"])(host, options) && (!ipv6 || !(0, _isIP["default"])(ipv6, 6))) {
      return false;
    }
    host = host || ipv6;
    if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
      return false;
    }
    return true;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isURL$1, isURL$1.exports);
var isURL = /* @__PURE__ */ getDefaultExportFromCjs(isURL$1.exports);
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
function _objectSpread$s(target) {
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
function isValueEmpty(val) {
  var type = Object.prototype.toString.call(val);
  var typeMap = {
    Date: "[object Date]"
  };
  if (type === typeMap.Date) {
    return false;
  }
  return isObject_1(val) ? isEmpty_1(val) : ["", void 0, null].includes(val);
}
var VALIDATE_MAP = {
  date: isDate,
  url: isURL,
  email: isEmail,
  required: function required(val) {
    return !isValueEmpty(val);
  },
  whitespace: function whitespace(val) {
    return !(/^\s+$/.test(val) || val === "");
  },
  "boolean": function boolean(val) {
    return isBoolean_1(val);
  },
  max: function max(val, num) {
    return isNumber_1(val) ? val <= num : getCharacterLength$1(val) <= num;
  },
  min: function min2(val, num) {
    return isNumber_1(val) ? val >= num : getCharacterLength$1(val) >= num;
  },
  len: function len(val, num) {
    return getCharacterLength$1(val) === num;
  },
  number: function number(val) {
    return isNumber_1(val);
  },
  "enum": function _enum(val, strs) {
    return strs.includes(val);
  },
  idcard: function idcard(val) {
    return /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i.test(val);
  },
  telnumber: function telnumber(val) {
    return /^1[3-9]\d{9}$/.test(val);
  },
  pattern: function pattern(val, regexp) {
    return regexp.test(val);
  },
  validator: function validator26(val, validate2) {
    return validate2(val);
  }
};
function validateOneRule(_x, _x2) {
  return _validateOneRule.apply(this, arguments);
}
function _validateOneRule() {
  _validateOneRule = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(value, rule) {
    var validateResult, keys2, vOptions, vValidateFun, i, key2, validateRule;
    return regenerator.wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            validateResult = {
              result: true
            };
            keys2 = Object.keys(rule);
            i = 0;
          case 3:
            if (!(i < keys2.length)) {
              _context.next = 15;
              break;
            }
            key2 = keys2[i];
            if (!(!rule.required && isValueEmpty(value) && !rule.validator)) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", validateResult);
          case 7:
            validateRule = VALIDATE_MAP[key2];
            if (!(validateRule && (rule[key2] || rule[key2] === 0))) {
              _context.next = 12;
              break;
            }
            vOptions = rule[key2] === true ? void 0 : rule[key2];
            vValidateFun = validateRule;
            return _context.abrupt("break", 15);
          case 12:
            i++;
            _context.next = 3;
            break;
          case 15:
            if (!vValidateFun) {
              _context.next = 23;
              break;
            }
            _context.next = 18;
            return vValidateFun(value, vOptions);
          case 18:
            validateResult = _context.sent;
            if (!isBoolean_1(validateResult)) {
              _context.next = 21;
              break;
            }
            return _context.abrupt("return", _objectSpread$s(_objectSpread$s({}, rule), {}, {
              result: validateResult
            }));
          case 21:
            if (!isObject_1(validateResult)) {
              _context.next = 23;
              break;
            }
            return _context.abrupt("return", validateResult);
          case 23:
            return _context.abrupt("return", validateResult);
          case 24:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }));
  return _validateOneRule.apply(this, arguments);
}
function validate(_x3, _x4) {
  return _validate.apply(this, arguments);
}
function _validate() {
  _validate = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2(value, rules) {
    var all, r;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            all = rules.map(function(rule) {
              return validateOneRule(value, rule);
            });
            _context2.next = 3;
            return Promise.all(all);
          case 3:
            r = _context2.sent;
            return _context2.abrupt("return", r);
          case 5:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  }));
  return _validate.apply(this, arguments);
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$3 = {
  "for": {
    type: String,
    "default": ""
  },
  help: {
    type: [String, Function]
  },
  label: {
    type: [String, Function],
    "default": ""
  },
  labelAlign: {
    type: String,
    validator: function validator27(val) {
      if (!val)
        return true;
      return ["left", "right", "top"].includes(val);
    }
  },
  labelWidth: {
    type: [String, Number]
  },
  name: {
    type: [String, Number]
  },
  requiredMark: {
    type: Boolean,
    "default": void 0
  },
  rules: {
    type: Array
  },
  showErrorMessage: {
    type: Boolean,
    "default": void 0
  },
  status: {
    type: String,
    "default": ""
  },
  statusIcon: {
    type: [Boolean, Function],
    "default": void 0
  },
  successBorder: Boolean,
  tips: {
    type: [String, Function]
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var copyObject = _copyObject, createAssigner = _createAssigner, keysIn = keysIn_1;
var assignInWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});
var assignInWith_1 = assignInWith$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1, isPlainObject = isPlainObject_1;
var domExcTag = "[object DOMException]", errorTag = "[object Error]";
function isError$2(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
}
var isError_1 = isError$2;
var apply = _apply, baseRest$1 = _baseRest, isError$1 = isError_1;
var attempt$1 = baseRest$1(function(func, args) {
  try {
    return apply(func, void 0, args);
  } catch (e) {
    return isError$1(e) ? e : new Error(e);
  }
});
var attempt_1 = attempt$1;
var arrayMap = _arrayMap;
function baseValues$1(object, props2) {
  return arrayMap(props2, function(key2) {
    return object[key2];
  });
}
var _baseValues = baseValues$1;
var eq = eq_1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function customDefaultsAssignIn$1(objValue, srcValue, key2, object) {
  if (objValue === void 0 || eq(objValue, objectProto$1[key2]) && !hasOwnProperty$1.call(object, key2)) {
    return srcValue;
  }
  return objValue;
}
var _customDefaultsAssignIn = customDefaultsAssignIn$1;
var stringEscapes = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function escapeStringChar$1(chr) {
  return "\\" + stringEscapes[chr];
}
var _escapeStringChar = escapeStringChar$1;
var reInterpolate$2 = /<%=([\s\S]+?)%>/g;
var _reInterpolate = reInterpolate$2;
var basePropertyOf = _basePropertyOf;
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtmlChar$1 = basePropertyOf(htmlEscapes);
var _escapeHtmlChar = escapeHtmlChar$1;
var escapeHtmlChar = _escapeHtmlChar, toString$1 = toString_1;
var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape$1(string) {
  string = toString$1(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}
var _escape = escape$1;
var reEscape$1 = /<%-([\s\S]+?)%>/g;
var _reEscape = reEscape$1;
var reEvaluate$1 = /<%([\s\S]+?)%>/g;
var _reEvaluate = reEvaluate$1;
var escape = _escape, reEscape = _reEscape, reEvaluate = _reEvaluate, reInterpolate$1 = _reInterpolate;
var templateSettings$1 = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "escape": reEscape,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "evaluate": reEvaluate,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "interpolate": reInterpolate$1,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  "variable": "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  "imports": {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    "_": {
      "escape": escape
    }
  }
};
var templateSettings_1 = templateSettings$1;
var assignInWith = assignInWith_1, attempt = attempt_1, baseValues = _baseValues, customDefaultsAssignIn = _customDefaultsAssignIn, escapeStringChar = _escapeStringChar, isError = isError_1, isIterateeCall = _isIterateeCall, keys = keys_1, reInterpolate = _reInterpolate, templateSettings = templateSettings_1, toString = toString_1;
var INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var reNoMatch = /($^)/;
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function template(string, options, guard) {
  var settings = templateSettings.imports._.templateSettings || templateSettings;
  if (guard && isIterateeCall(string, options, guard)) {
    options = void 0;
  }
  string = toString(string);
  options = assignInWith({}, options, settings, customDefaultsAssignIn);
  var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
  var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
  var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
  var sourceURL = hasOwnProperty.call(options, "sourceURL") ? "//# sourceURL=" + (options.sourceURL + "").replace(/\s/g, " ") + "\n" : "";
  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue);
    source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index2 = offset + match.length;
    return match;
  });
  source += "';\n";
  var variable = hasOwnProperty.call(options, "variable") && options.variable;
  if (!variable) {
    source = "with (obj) {\n" + source + "\n}\n";
  } else if (reForbiddenIdentifierChars.test(variable)) {
    throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
  }
  source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
  source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
  var result = attempt(function() {
    return Function(importsKeys, sourceURL + "return " + source).apply(void 0, importsValues);
  });
  result.source = source;
  if (isError(result)) {
    throw result;
  }
  return result;
}
var template_1 = template;
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
function _objectSpread$r(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$s(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$s(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _FormItem = defineComponent({
  name: "TFormItem",
  props: _objectSpread$r({}, props$3),
  setup: function setup17(props2, _ref) {
    var slots = _ref.slots;
    var renderContent2 = useTNodeJSX();
    var CLASS_NAMES = useCLASSNAMES();
    var _useConfig = useConfig("form"), globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
      CheckCircleFilledIcon: checkCircleFilled,
      CloseCircleFilledIcon: closeCircleFilled,
      ErrorCircleFilledIcon: errorCircleFilled
    }), CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon, CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon, ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
    var form = inject(FormInjectionKey, void 0);
    var FORM_ITEM_CLASS_PREFIX = usePrefixClass("form-item__");
    var needRequiredMark = computed(function() {
      var _ref2, _props2$requiredMark;
      var requiredMark = (_ref2 = (_props2$requiredMark = props2.requiredMark) !== null && _props2$requiredMark !== void 0 ? _props2$requiredMark : form === null || form === void 0 ? void 0 : form.requiredMark) !== null && _ref2 !== void 0 ? _ref2 : globalConfig.value.requiredMark;
      var isRequired = innerRules.value.filter(function(rule) {
        return rule.required;
      }).length > 0;
      return requiredMark !== null && requiredMark !== void 0 ? requiredMark : isRequired;
    });
    var hasLabel = computed(function() {
      return slots.label || props2.label;
    });
    var hasColon = computed(function() {
      return !!(form !== null && form !== void 0 && form.colon && hasLabel.value);
    });
    var FROM_LABEL = usePrefixClass("form__label");
    var labelAlign = computed(function() {
      return isNil_1(props2.labelAlign) ? form === null || form === void 0 ? void 0 : form.labelAlign : props2.labelAlign;
    });
    var labelWidth = computed(function() {
      return isNil_1(props2.labelWidth) ? form === null || form === void 0 ? void 0 : form.labelWidth : props2.labelWidth;
    });
    var labelClasses = computed(function() {
      var _ref3;
      return [CLASS_NAMES.value.label, (_ref3 = {}, _defineProperty$2(_ref3, "".concat(FROM_LABEL.value, "--required"), needRequiredMark.value), _defineProperty$2(_ref3, "".concat(FROM_LABEL.value, "--colon"), hasColon.value), _defineProperty$2(_ref3, "".concat(FROM_LABEL.value, "--top"), hasLabel.value && (labelAlign.value === "top" || !labelWidth.value)), _defineProperty$2(_ref3, "".concat(FROM_LABEL.value, "--left"), labelAlign.value === "left" && labelWidth.value), _defineProperty$2(_ref3, "".concat(FROM_LABEL.value, "--right"), labelAlign.value === "right" && labelWidth.value), _ref3)];
    });
    var renderLabel = function renderLabel2() {
      if (Number(labelWidth.value) === 0)
        return;
      var labelStyle = {};
      if (labelWidth.value && labelAlign.value !== "top") {
        if (isNumber_1(labelWidth.value)) {
          labelStyle = {
            width: "".concat(labelWidth.value, "px")
          };
        } else {
          labelStyle = {
            width: labelWidth.value
          };
        }
      }
      return createVNode("div", {
        "class": labelClasses.value,
        "style": labelStyle
      }, [createVNode("label", {
        "for": props2["for"]
      }, [renderContent2("label")])]);
    };
    var getDefaultIcon = function getDefaultIcon2() {
      var resultIcon = function resultIcon2(Icon) {
        return createVNode("span", {
          "class": CLASS_NAMES.value.status
        }, [createVNode(Icon, null, null)]);
      };
      var list = errorList.value;
      if (verifyStatus.value === ValidateStatus.SUCCESS) {
        return resultIcon(CheckCircleFilledIcon$1);
      }
      if (list !== null && list !== void 0 && list[0]) {
        var type = list[0].type || "error";
        var icon = {
          error: CloseCircleFilledIcon$1,
          warning: ErrorCircleFilledIcon$1
        }[type] || CheckCircleFilledIcon$1;
        return resultIcon(icon);
      }
      return null;
    };
    var renderSuffixIcon = function renderSuffixIcon2() {
      var statusIcon = props2.statusIcon;
      if (statusIcon === false)
        return;
      var resultIcon = renderContent2("statusIcon", {
        defaultNode: getDefaultIcon()
      });
      if (resultIcon)
        return createVNode("span", {
          "class": CLASS_NAMES.value.status
        }, [resultIcon]);
      if (resultIcon === false)
        return;
      resultIcon = form === null || form === void 0 ? void 0 : form.renderContent("statusIcon", {
        defaultNode: getDefaultIcon()
      });
      if (resultIcon)
        return resultIcon;
    };
    var errorClasses = computed(function() {
      if (!showErrorMessage.value)
        return "";
      if (verifyStatus.value === ValidateStatus.SUCCESS) {
        return props2.successBorder ? [CLASS_NAMES.value.success, CLASS_NAMES.value.successBorder].join(" ") : CLASS_NAMES.value.success;
      }
      if (!errorList.value.length)
        return;
      var type = errorList.value[0].type || "error";
      return type === "error" ? CLASS_NAMES.value.error : CLASS_NAMES.value.warning;
    });
    var contentClasses = computed(function() {
      return [CLASS_NAMES.value.controls, errorClasses.value];
    });
    var contentStyle = computed(function() {
      var contentStyle2 = {};
      if (labelWidth.value && labelAlign.value !== "top") {
        if (isNumber_1(labelWidth.value)) {
          contentStyle2 = {
            marginLeft: "".concat(labelWidth.value, "px")
          };
        } else {
          contentStyle2 = {
            marginLeft: labelWidth.value
          };
        }
      }
      return contentStyle2;
    });
    var errorList = ref([]);
    var successList = ref([]);
    var verifyStatus = ref(ValidateStatus.TO_BE_VALIDATED);
    var resetValidating = ref(false);
    var needResetField = ref(false);
    var resetHandler = function resetHandler2() {
      needResetField.value = false;
      errorList.value = [];
      successList.value = [];
      verifyStatus.value = ValidateStatus.TO_BE_VALIDATED;
    };
    var getEmptyValue = function getEmptyValue2() {
      var type = Object.prototype.toString.call(get_1(form === null || form === void 0 ? void 0 : form.data, props2.name));
      var emptyValue;
      if (type === "[object String]") {
        emptyValue = "";
      }
      if (type === "[object Array]") {
        emptyValue = [];
      }
      if (type === "[object Object]") {
        emptyValue = {};
      }
      return emptyValue;
    };
    var resetField = /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee() {
        var resetType, _args = arguments;
        return regenerator.wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                resetType = _args.length > 0 && _args[0] !== void 0 ? _args[0] : form === null || form === void 0 ? void 0 : form.resetType;
                if (props2.name) {
                  _context.next = 3;
                  break;
                }
                return _context.abrupt("return");
              case 3:
                if (resetType === "empty")
                  set_1(form === null || form === void 0 ? void 0 : form.data, props2.name, getEmptyValue());
                else if (resetType === "initial")
                  set_1(form === null || form === void 0 ? void 0 : form.data, props2.name, initialValue.value);
                _context.next = 6;
                return nextTick();
              case 6:
                if (resetValidating.value) {
                  needResetField.value = true;
                } else {
                  resetHandler();
                }
              case 7:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
      return function resetField2() {
        return _ref4.apply(this, arguments);
      };
    }();
    var errorMessages = computed(function() {
      var _form$errorMessage;
      return (_form$errorMessage = form === null || form === void 0 ? void 0 : form.errorMessage) !== null && _form$errorMessage !== void 0 ? _form$errorMessage : globalConfig.value.errorMessage;
    });
    var innerRules = computed(function() {
      var _props2$rules;
      if ((_props2$rules = props2.rules) !== null && _props2$rules !== void 0 && _props2$rules.length)
        return props2.rules;
      if (!props2.name)
        return [];
      var index2 = "".concat(props2.name).lastIndexOf(".") || -1;
      var pRuleName = "".concat(props2.name).slice(index2 + 1);
      return get_1(form === null || form === void 0 ? void 0 : form.rules, props2.name) || get_1(form === null || form === void 0 ? void 0 : form.rules, pRuleName) || [];
    });
    var analysisValidateResult = /* @__PURE__ */ function() {
      var _ref5 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2(trigger) {
        var _result$rules;
        var result;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                result = {
                  successList: [],
                  errorList: [],
                  rules: [],
                  resultList: [],
                  allowSetValue: false
                };
                result.rules = trigger === "all" ? innerRules.value : innerRules.value.filter(function(item) {
                  return (item.trigger || "change") === trigger;
                });
                if (!(innerRules.value.length && !((_result$rules = result.rules) !== null && _result$rules !== void 0 && _result$rules.length))) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", result);
              case 4:
                result.allowSetValue = true;
                _context2.next = 7;
                return validate(value.value, result.rules);
              case 7:
                result.resultList = _context2.sent;
                result.errorList = result.resultList.filter(function(item) {
                  return item.result !== true;
                }).map(function(item) {
                  Object.keys(item).forEach(function(key2) {
                    if (!item.message && errorMessages.value[key2]) {
                      var compiled = template_1(errorMessages.value[key2]);
                      var name2 = isString_1(props2.label) ? props2.label : props2.name;
                      item.message = compiled({
                        name: name2,
                        validate: item[key2]
                      });
                    }
                  });
                  return item;
                });
                result.successList = result.resultList.filter(function(item) {
                  return item.result === true && item.message && item.type === "success";
                });
                return _context2.abrupt("return", result);
              case 11:
              case "end":
                return _context2.stop();
            }
        }, _callee2);
      }));
      return function analysisValidateResult2(_x) {
        return _ref5.apply(this, arguments);
      };
    }();
    var validateHandler = /* @__PURE__ */ function() {
      var _ref6 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee3(trigger, showErrorMessage2) {
        var _yield$analysisValida, innerSuccessList, innerErrorList, rules, resultList, allowSetValue;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                resetValidating.value = true;
                freeShowErrorMessage.value = showErrorMessage2;
                _context3.next = 4;
                return analysisValidateResult(trigger);
              case 4:
                _yield$analysisValida = _context3.sent;
                innerSuccessList = _yield$analysisValida.successList;
                innerErrorList = _yield$analysisValida.errorList;
                rules = _yield$analysisValida.rules;
                resultList = _yield$analysisValida.resultList;
                allowSetValue = _yield$analysisValida.allowSetValue;
                if (allowSetValue) {
                  successList.value = innerSuccessList;
                  errorList.value = innerErrorList;
                }
                if (rules.length) {
                  verifyStatus.value = innerErrorList.length ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
                }
                if (needResetField.value) {
                  resetHandler();
                }
                resetValidating.value = false;
                return _context3.abrupt("return", _defineProperty$2({}, props2.name, innerErrorList.length === 0 ? true : resultList));
              case 15:
              case "end":
                return _context3.stop();
            }
        }, _callee3);
      }));
      return function validateHandler2(_x2, _x3) {
        return _ref6.apply(this, arguments);
      };
    }();
    var validateOnly = /* @__PURE__ */ function() {
      var _ref8 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee4(trigger) {
        var _yield$analysisValida2, innerErrorList, resultList;
        return regenerator.wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return analysisValidateResult(trigger);
              case 2:
                _yield$analysisValida2 = _context4.sent;
                innerErrorList = _yield$analysisValida2.errorList;
                resultList = _yield$analysisValida2.resultList;
                return _context4.abrupt("return", _defineProperty$2({}, props2.name, innerErrorList.length === 0 ? true : resultList));
              case 6:
              case "end":
                return _context4.stop();
            }
        }, _callee4);
      }));
      return function validateOnly2(_x4) {
        return _ref8.apply(this, arguments);
      };
    }();
    var setValidateMessage = function setValidateMessage2(validateMessage) {
      if (!validateMessage && !isArray_1(validateMessage))
        return;
      if (validateMessage.length === 0) {
        errorList.value = [];
        verifyStatus.value = ValidateStatus.SUCCESS;
      }
      errorList.value = validateMessage.map(function(item) {
        return _objectSpread$r(_objectSpread$r({}, item), {}, {
          result: false
        });
      });
      verifyStatus.value = ValidateStatus.FAIL;
    };
    var value = computed(function() {
      return (form === null || form === void 0 ? void 0 : form.data) && get_1(form === null || form === void 0 ? void 0 : form.data, props2.name);
    });
    var initialValue = ref(void 0);
    var _toRefs = toRefs(props2), name = _toRefs.name;
    var context = reactive({
      name,
      resetHandler,
      resetField,
      validate: validateHandler,
      validateOnly,
      setValidateMessage
    });
    onMounted(function() {
      initialValue.value = cloneDeep_1(value.value);
      form === null || form === void 0 ? void 0 : form.children.push(context);
    });
    onBeforeUnmount(function() {
      if (form)
        form.children = form === null || form === void 0 ? void 0 : form.children.filter(function(ctx) {
          return ctx !== context;
        });
    });
    watch(value, /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee5() {
      return regenerator.wrap(function _callee5$(_context5) {
        while (1)
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return validateHandler("change");
            case 2:
            case "end":
              return _context5.stop();
          }
      }, _callee5);
    })), {
      deep: true
    });
    watch(function() {
      return [props2.name, JSON.stringify(props2.rules)].join(",");
    }, function() {
      validateHandler("change");
    });
    var freeShowErrorMessage = ref(void 0);
    var showErrorMessage = computed(function() {
      if (isBoolean_1(freeShowErrorMessage.value))
        return freeShowErrorMessage.value;
      if (isBoolean_1(props2.showErrorMessage))
        return props2.showErrorMessage;
      return form === null || form === void 0 ? void 0 : form.showErrorMessage;
    });
    var classes = computed(function() {
      var _ref11;
      return [CLASS_NAMES.value.formItem, FORM_ITEM_CLASS_PREFIX.value + (props2.name || ""), (_ref11 = {}, _defineProperty$2(_ref11, CLASS_NAMES.value.formItemWithHelp, helpNode.value), _defineProperty$2(_ref11, CLASS_NAMES.value.formItemWithExtra, extraNode.value), _ref11)];
    });
    var helpNode = computed(function() {
      var help = renderContent2("help");
      if (help)
        return createVNode("div", {
          "class": CLASS_NAMES.value.help
        }, [help]);
      return null;
    });
    var extraNode = computed(function() {
      var _list$;
      var getExtraNode = function getExtraNode2(content) {
        return createVNode("div", {
          "class": CLASS_NAMES.value.extra
        }, [content]);
      };
      var list = errorList.value;
      if (showErrorMessage.value && list !== null && list !== void 0 && (_list$ = list[0]) !== null && _list$ !== void 0 && _list$.message) {
        return getExtraNode(list[0].message);
      }
      if (successList.value.length) {
        return getExtraNode(successList.value[0].message);
      }
      return null;
    });
    var handleBlur = /* @__PURE__ */ function() {
      var _ref12 = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee6() {
        return regenerator.wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return validateHandler("blur");
              case 2:
              case "end":
                return _context6.stop();
            }
        }, _callee6);
      }));
      return function handleBlur2() {
        return _ref12.apply(this, arguments);
      };
    }();
    provide(FormItemInjectionKey, {
      handleBlur
    });
    return function() {
      return createVNode("div", {
        "class": classes.value
      }, [renderLabel(), createVNode("div", {
        "class": contentClasses.value,
        "style": contentStyle.value
      }, [createVNode("div", {
        "class": CLASS_NAMES.value.controlsContent
      }, [renderContent2("default"), renderSuffixIcon()]), [helpNode.value, extraNode.value]])]);
    };
  }
});
const index$4 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Form = withInstall(_Form);
var FormItem = withInstall(_FormItem);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$2 = {
  allowUncheck: Boolean,
  checked: {
    type: Boolean,
    "default": void 0
  },
  modelValue: {
    type: Boolean,
    "default": void 0
  },
  defaultChecked: Boolean,
  "default": {
    type: [String, Function]
  },
  disabled: {
    type: Boolean,
    "default": void 0
  },
  label: {
    type: [String, Function]
  },
  name: {
    type: String,
    "default": ""
  },
  value: {
    type: [String, Number, Boolean],
    "default": void 0
  },
  onChange: Function,
  onClick: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var RadioGroupInjectionKey = Symbol("RadioGroupProvide");
var RadioButtonInjectionKey = Symbol("RadioButtonProvide");
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$q(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$r(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$r(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function getValidAttrs(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function(key2) {
    if (!isUndefined_1(obj[key2])) {
      newObj[key2] = obj[key2];
    }
  });
  return newObj;
}
var _Radio = defineComponent({
  name: "TRadio",
  inheritAttrs: false,
  props: _objectSpread$q({}, props$2),
  setup: function setup18(props2, _ref) {
    var attrs = _ref.attrs;
    var inputRef = ref();
    var _toRefs = toRefs(props2), checked = _toRefs.checked, modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"), _useVModel2 = _slicedToArray(_useVModel, 2), innerChecked = _useVModel2[0], setInnerChecked = _useVModel2[1];
    var radioChecked = computed(function() {
      return radioGroup ? props2.value === radioGroup.value : innerChecked.value;
    });
    var radioGroup = inject(RadioGroupInjectionKey, void 0);
    var allowUncheck = computed(function() {
      return Boolean(props2.allowUncheck || (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowUncheck));
    });
    var handleClick = function handleClick2(e) {
      e.stopPropagation();
    };
    var onLabelClick = function onLabelClick2(e) {
      var _props2$onClick;
      if (disabled.value)
        return;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 ? void 0 : _props2$onClick.call(props2, {
        e
      });
      if (radioGroup) {
        var value = radioChecked.value && allowUncheck.value ? void 0 : props2.value;
        radioGroup.setValue(value, {
          e
        });
      } else {
        var _value = allowUncheck.value ? !radioChecked.value : true;
        setInnerChecked(_value, {
          e
        });
      }
    };
    var inputEvents = computed(function() {
      return getValidAttrs({
        focus: attrs.onFocus,
        blur: attrs.onBlur,
        keydown: attrs.onKeydown,
        keyup: attrs.onKeyup,
        keypresss: attrs.onKeypresss
      });
    });
    var wrapperAttrs = computed(function() {
      var events = [].concat(_toConsumableArray(Object.keys(inputEvents.value)), ["input", "change"]).map(function(str) {
        return "on".concat(str[0].toUpperCase()).concat(str.slice(1));
      });
      return omit(attrs, events);
    });
    var groupDisabled = computed(function() {
      return radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.disabled;
    });
    var disabled = useFormDisabled(groupDisabled);
    var inputProps = computed(function() {
      return {
        name: radioGroup ? radioGroup.name : props2.name,
        checked: radioChecked.value,
        disabled: disabled.value,
        value: props2.value
      };
    });
    var _useCommonClassName = useCommonClassName$1(), STATUS = _useCommonClassName.STATUS;
    var radioButton = inject(RadioButtonInjectionKey, void 0);
    var radioBtnName = usePrefixClass("radio-button");
    var COMPONENT_NAME = usePrefixClass("radio");
    var prefixCls = computed(function() {
      return radioButton ? radioBtnName.value : COMPONENT_NAME.value;
    });
    var inputClass = computed(function() {
      var _ref2;
      return ["".concat(prefixCls.value), (_ref2 = {}, _defineProperty$2(_ref2, STATUS.value.checked, inputProps.value.checked), _defineProperty$2(_ref2, STATUS.value.disabled, inputProps.value.disabled), _ref2)];
    });
    var renderContent2 = useContent();
    return function() {
      return createVNode("label", mergeProps({
        "ref": inputRef,
        "class": inputClass.value
      }, wrapperAttrs.value, {
        "tabindex": disabled.value ? void 0 : "0",
        "onClick": onLabelClick
      }), [createVNode("input", mergeProps({
        "type": "radio",
        "class": "".concat(prefixCls.value, "__former")
      }, inputEvents.value, inputProps.value, {
        "onClick": handleClick,
        "tabindex": "-1",
        "data-value": isString_1(props2.value) ? "'".concat(props2.value, "'") : props2.value,
        "data-allow-uncheck": allowUncheck.value || void 0
      }), null), createVNode("span", {
        "class": "".concat(prefixCls.value, "__input")
      }, null), createVNode("span", {
        "class": "".concat(prefixCls.value, "__label")
      }, [renderContent2("default", "label")])]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var debounce = debounce_1, isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle$1(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle$1;
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props$1 = {
  allowUncheck: Boolean,
  disabled: Boolean,
  name: {
    type: String,
    "default": ""
  },
  options: {
    type: Array
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator28(val) {
      if (!val)
        return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  value: {
    type: [String, Number, Boolean],
    "default": void 0
  },
  modelValue: {
    type: [String, Number, Boolean],
    "default": void 0
  },
  defaultValue: {
    type: [String, Number, Boolean]
  },
  variant: {
    type: String,
    "default": "outline",
    validator: function validator29(val) {
      if (!val)
        return true;
      return ["outline", "primary-filled", "default-filled"].includes(val);
    }
  },
  onChange: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useKeyboard(radioGroupRef, setInnerValue) {
  var checkRadioInGroup = function checkRadioInGroup2(e) {
    if (/enter/i.test(e.key) || /enter/i.test(e.code)) {
      var inputNode = e.target.querySelector("input");
      var data2 = inputNode.dataset;
      if (inputNode.checked && data2.allowUncheck) {
        setInnerValue(void 0, {
          e
        });
      } else {
        var value = !isNaN(Number(data2.value)) ? Number(data2.value) : data2.value;
        value = isString_1(value) && {
          "true": true,
          "false": false
        }[value] || value;
        value = isString_1(value) && value[0] === "'" ? value.replace(/'/g, "") : value;
        setInnerValue(value, {
          e
        });
      }
    }
  };
  onMounted(function() {
    on$1(radioGroupRef.value, "keydown", checkRadioInGroup);
  });
  onBeforeMount(function() {
    off$1(radioGroupRef.value, "keydown", checkRadioInGroup);
  });
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _excluded$2 = ["window"];
var defaultWindow = typeof window !== "undefined" ? window : void 0;
function unrefElement(elRef) {
  var _plain$$el;
  var plain = unref(elRef);
  return (_plain$$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _plain$$el !== void 0 ? _plain$$el : plain;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useMutationObserver(target, callback) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _options$window = options.window, window2 = _options$window === void 0 ? defaultWindow : _options$window, mutationOptions = _objectWithoutProperties$1(options, _excluded$2);
  var observer;
  var isSupported = window2 && "MutationObserver" in window2;
  var cleanup = function cleanup2() {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  var stopWatch = watch(function() {
    return unrefElement(target);
  }, function(el) {
    cleanup();
    if (isSupported && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, {
    immediate: true
  });
  var stop = function stop2() {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$p(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$q(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$q(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var _Group = defineComponent({
  name: "TRadioGroup",
  props: _objectSpread$p({}, props$1),
  setup: function setup19(props2) {
    var _toRefs = toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), innerValue = _useVModel2[0], setInnerValue = _useVModel2[1];
    var radioGroupRef = ref();
    var radioBtnName = usePrefixClass("radio-button");
    var _useCommonClassName = useCommonClassName$1(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
    useKeyboard(radioGroupRef, setInnerValue);
    var checkedClassName = computed(function() {
      return ".".concat(radioBtnName.value, ".").concat(STATUS.value.checked);
    });
    var barStyle = ref({
      width: "0px",
      height: "0px",
      left: "0px",
      top: "0px"
    });
    var calcDefaultBarStyle = function calcDefaultBarStyle2() {
      var div = document.createElement("div");
      div.setAttribute("style", "position: absolute; visibility: hidden;");
      div.appendChild(radioGroupRef.value.cloneNode(true));
      document.body.appendChild(div);
      var defaultCheckedRadio = div.querySelector(checkedClassName.value);
      var offsetWidth = defaultCheckedRadio.offsetWidth, offsetHeight = defaultCheckedRadio.offsetHeight, offsetLeft = defaultCheckedRadio.offsetLeft, offsetTop = defaultCheckedRadio.offsetTop;
      barStyle.value = {
        width: "".concat(offsetWidth, "px"),
        height: "".concat(offsetHeight, "px"),
        left: "".concat(offsetLeft, "px"),
        top: "".concat(offsetTop, "px")
      };
      document.body.removeChild(div);
    };
    var calcBarStyle = function calcBarStyle2() {
      if (props2.variant === "outline")
        return;
      var checkedRadio = radioGroupRef.value.querySelector(checkedClassName.value);
      if (!checkedRadio) {
        barStyle.value = {
          width: "0px",
          height: "9px",
          left: "0px",
          top: "0px"
        };
        return;
      }
      var offsetWidth = checkedRadio.offsetWidth, offsetHeight = checkedRadio.offsetHeight, offsetLeft = checkedRadio.offsetLeft, offsetTop = checkedRadio.offsetTop;
      if (!offsetWidth) {
        calcDefaultBarStyle();
      } else {
        barStyle.value = {
          width: "".concat(offsetWidth, "px"),
          height: "".concat(offsetHeight, "px"),
          left: "".concat(offsetLeft, "px"),
          top: "".concat(offsetTop, "px")
        };
      }
    };
    var observerReturn;
    watch(innerValue, /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee() {
      return regenerator.wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return nextTick();
            case 2:
              calcBarStyle();
            case 3:
            case "end":
              return _context.stop();
          }
      }, _callee);
    })));
    onMounted(function() {
      calcBarStyle();
      useResizeObserver(radioGroupRef, throttle_1(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return nextTick();
              case 2:
                calcBarStyle();
              case 3:
              case "end":
                return _context2.stop();
            }
        }, _callee2);
      })), 300));
      var checkedRadioLabel = radioGroupRef.value.querySelector("".concat(checkedClassName.value, " .").concat(radioBtnName.value, "__label"));
      if (checkedRadioLabel) {
        observerReturn = useMutationObserver(checkedRadioLabel, function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.type === "characterData") {
              calcBarStyle();
            }
          });
        }, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    });
    onUnmounted(function() {
      var _observerReturn;
      (_observerReturn = observerReturn) === null || _observerReturn === void 0 ? void 0 : _observerReturn.stop();
    });
    var _toRefs2 = toRefs(props2), name = _toRefs2.name, disabled = _toRefs2.disabled;
    provide(RadioGroupInjectionKey, reactive({
      name,
      disabled,
      value: innerValue,
      allowUncheck: props2.allowUncheck,
      setValue: setInnerValue
    }));
    var radioGroupName = usePrefixClass("radio-group");
    var renderSlot = useTNodeDefault();
    var renderBlock = function renderBlock2() {
      if (props2.variant.includes("filled") && !isNil_1(innerValue.value))
        return createVNode("div", {
          "style": barStyle.value,
          "class": "".concat(radioGroupName.value, "__bg-block")
        }, null);
    };
    var renderOptions = function renderOptions2() {
      var _props2$options;
      return (_props2$options = props2.options) === null || _props2$options === void 0 ? void 0 : _props2$options.map(function(option2) {
        var opt = option2;
        if (isNumber_1(option2) || isString_1(option2)) {
          opt = {
            value: option2,
            label: option2.toString()
          };
        }
        return createVNode(_Radio, {
          "key": "radio-group-options-".concat(opt.value, "-").concat(Math.random()),
          "name": props2.name,
          "checked": innerValue.value === opt.value,
          "disabled": "disabled" in opt ? opt.disabled : props2.disabled,
          "value": opt.value
        }, {
          "default": function _default14() {
            return [isFunction_1(opt.label) ? opt.label(h) : opt.label];
          }
        });
      });
    };
    var groupClass = computed(function() {
      var _ref3;
      return ["".concat(radioGroupName.value), SIZE.value[props2.size], (_ref3 = {}, _defineProperty$2(_ref3, "".concat(radioGroupName.value, "__outline"), props2.variant === "outline"), _defineProperty$2(_ref3, "".concat(radioGroupName.value, "--filled"), props2.variant.includes("filled")), _defineProperty$2(_ref3, "".concat(radioGroupName.value, "--primary-filled"), props2.variant === "primary-filled"), _ref3)];
    });
    return function() {
      return createVNode("div", {
        "ref": radioGroupRef,
        "class": groupClass.value
      }, [renderSlot("default") || renderOptions(), renderBlock()]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$o(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$p(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$p(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$6(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _RadioButton = defineComponent({
  name: "TRadioButton",
  inheritAttrs: false,
  props: _objectSpread$o({}, props$2),
  setup: function setup20(props2, _ref) {
    var attrs = _ref.attrs;
    provide(RadioButtonInjectionKey, reactive({}));
    var radioProps = computed(function() {
      var res = _objectSpread$o(_objectSpread$o({}, props2), omit(attrs, Object.keys(attrs).filter(function(key2) {
        return key2.startsWith("on");
      })));
      return res;
    });
    var renderContent2 = useContent();
    return function() {
      var _slot;
      return createVNode(_Radio, radioProps.value, _isSlot$6(_slot = renderContent2("default", "label")) ? _slot : {
        "default": function _default14() {
          return [_slot];
        }
      });
    };
  }
});
const index$3 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Radio = withInstall(_Radio);
var RadioGroup = withInstall(_Group);
withInstall(_RadioButton);
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
    type: [String, Function],
    "default": ""
  },
  cancelBtn: {
    type: [String, Object, Function],
    "default": ""
  },
  closeBtn: {
    type: [String, Boolean, Function],
    "default": true
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
  confirmOnEnter: Boolean,
  "default": {
    type: [String, Function]
  },
  destroyOnClose: Boolean,
  draggable: Boolean,
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
    "default": "modal",
    validator: function validator30(val) {
      if (!val)
        return true;
      return ["modal", "modeless", "normal", "full-screen"].includes(val);
    }
  },
  placement: {
    type: String,
    "default": "top",
    validator: function validator31(val) {
      if (!val)
        return true;
      return ["top", "center"].includes(val);
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
  theme: {
    type: String,
    "default": "default",
    validator: function validator32(val) {
      if (!val)
        return true;
      return ["default", "info", "warning", "danger", "success"].includes(val);
    }
  },
  top: {
    type: [String, Number]
  },
  visible: Boolean,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  onCancel: Function,
  onClose: Function,
  onCloseBtnClick: Function,
  onClosed: Function,
  onConfirm: Function,
  onEscKeydown: Function,
  onOpened: Function,
  onOverlayClick: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var data = [];
var push = function push2(value) {
  data.push(value);
};
var pop = function pop2() {
  data.pop();
};
var stack = {
  push,
  pop,
  get top() {
    return data[data.length - 1];
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function GetCSSValue(v) {
  return Number.isNaN(Number(v)) ? v : "".concat(Number(v), "px");
}
var mousePosition;
var getClickPosition = function getClickPosition2(e) {
  mousePosition = {
    x: e.clientX,
    y: e.clientY
  };
  setTimeout(function() {
    mousePosition = null;
  }, 100);
};
if (typeof window !== "undefined" && window.document && window.document.documentElement) {
  document.documentElement.addEventListener("click", getClickPosition, true);
}
function InitDragEvent(dragBox) {
  var target = dragBox;
  var windowInnerWidth = window.innerWidth || document.documentElement.clientWidth;
  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
  target.addEventListener("mousedown", function(targetEvent) {
    var disX = targetEvent.clientX - target.offsetLeft;
    var disY = targetEvent.clientY - target.offsetTop;
    var dialogW = target.offsetWidth;
    var dialogH = target.offsetHeight;
    if (dialogW > windowInnerWidth || dialogH > windowInnerHeight)
      return;
    function mouseMoverHandler(documentEvent) {
      var left = documentEvent.clientX - disX;
      var top = documentEvent.clientY - disY;
      if (left < 0)
        left = 0;
      if (top < 0)
        top = 0;
      if (windowInnerWidth - target.offsetWidth - left < 0)
        left = windowInnerWidth - target.offsetWidth;
      if (windowInnerHeight - target.offsetHeight - top < 0)
        top = windowInnerHeight - target.offsetHeight;
      target.style.position = "absolute";
      target.style.left = "".concat(left, "px");
      target.style.top = "".concat(top, "px");
    }
    function mouseUpHandler() {
      document.removeEventListener("mousemove", mouseMoverHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }
    document.addEventListener("mousemove", mouseMoverHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("dragend", mouseUpHandler);
  });
}
var key = 1;
var _Dialog = defineComponent({
  name: "TDialog",
  directives: {
    draggable: function draggable(el, binding) {
      if (el && binding && binding.value) {
        InitDragEvent(el);
      }
    }
  },
  inheritAttrs: false,
  props,
  emits: ["update:visible"],
  setup: function setup21(props2, context) {
    var _this = this;
    var COMPONENT_NAME = usePrefixClass("dialog");
    var classPrefix = usePrefixClass();
    var renderContent2 = useContent();
    var renderTNodeJSX2 = useTNodeJSX();
    var dialogEle = ref(null);
    var _useConfig = useConfig("dialog"), globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
      CloseIcon: close,
      InfoCircleFilledIcon: infoCircleFilled,
      CheckCircleFilledIcon: checkCircleFilled,
      ErrorCircleFilledIcon: errorCircleFilled
    }), CloseIcon$1 = _useGlobalIcon.CloseIcon, InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon, CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon, ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
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
      emitCloseEvent({
        e,
        trigger: "cancel"
      });
    };
    var _useAction = useAction({
      confirmBtnAction,
      cancelBtnAction
    }), getConfirmBtn = _useAction.getConfirmBtn, getCancelBtn = _useAction.getCancelBtn;
    var teleportElement = useTeleport(function() {
      return props2.attach;
    });
    useDestroyOnClose();
    var timer = ref();
    var styleEl = ref();
    var isModal = computed(function() {
      return props2.mode === "modal";
    });
    var isModeLess = computed(function() {
      return props2.mode === "modeless";
    });
    var isNormal = computed(function() {
      return props2.mode === "normal";
    });
    var isFullScreen = computed(function() {
      return props2.mode === "full-screen";
    });
    var maskClass = computed(function() {
      return ["".concat(COMPONENT_NAME.value, "__mask"), !props2.showOverlay && "".concat(classPrefix.value, "-is-hidden")];
    });
    var positionClass = computed(function() {
      if (isNormal.value)
        return [];
      if (isFullScreen.value)
        return ["".concat(COMPONENT_NAME.value, "__position_fullscreen")];
      return ["".concat(COMPONENT_NAME.value, "__position"), !!props2.top && "".concat(COMPONENT_NAME.value, "--top"), "".concat(props2.placement && !props2.top ? "".concat(COMPONENT_NAME.value, "--").concat(props2.placement) : "")];
    });
    var wrapClass = computed(function() {
      return [!isNormal.value && "".concat(COMPONENT_NAME.value, "__wrap")];
    });
    var positionStyle = computed(function() {
      if (isFullScreen.value)
        return {};
      var top = props2.top;
      var topStyle = {};
      if (top !== void 0) {
        var topValue = GetCSSValue(top);
        topStyle = {
          paddingTop: topValue
        };
      }
      return topStyle;
    });
    var dialogClass = computed(function() {
      var dialogClass2 = ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "__modal-").concat(props2.theme), isModeLess.value && props2.draggable && "".concat(COMPONENT_NAME.value, "--draggable")];
      if (isFullScreen.value) {
        dialogClass2.push("".concat(COMPONENT_NAME.value, "__fullscreen"));
      } else {
        dialogClass2.push.apply(dialogClass2, ["".concat(COMPONENT_NAME.value, "--default"), "".concat(COMPONENT_NAME.value, "--").concat(props2.placement)]);
      }
      return dialogClass2;
    });
    var dialogStyle = computed(function() {
      return !isFullScreen.value ? {
        width: GetCSSValue(props2.width)
      } : {};
    });
    watch(function() {
      return props2.visible;
    }, function(value) {
      if (value) {
        var _document$activeEleme;
        if (isModal.value && !props2.showInAttachedElement || isFullScreen.value) {
          if (props2.preventScrollThrough) {
            document.head.appendChild(styleEl.value);
          }
          nextTick(function() {
            if (mousePosition && dialogEle.value) {
              dialogEle.value.style.transformOrigin = "".concat(mousePosition.x - dialogEle.value.offsetLeft, "px ").concat(mousePosition.y - dialogEle.value.offsetTop, "px");
            }
          });
        }
        (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.blur();
      } else {
        clearStyleFunc();
      }
      storeUid(value);
      addKeyboardEvent(value);
    });
    function destroySelf() {
      var _styleEl$value$parent, _styleEl$value$parent2;
      (_styleEl$value$parent = styleEl.value.parentNode) === null || _styleEl$value$parent === void 0 || (_styleEl$value$parent2 = _styleEl$value$parent.removeChild) === null || _styleEl$value$parent2 === void 0 ? void 0 : _styleEl$value$parent2.call(_styleEl$value$parent, styleEl.value);
    }
    function clearStyleFunc() {
      clearTimeout(timer.value);
      timer.value = setTimeout(function() {
        destroySelf();
      }, 150);
    }
    var instance = getCurrentInstance();
    var storeUid = function storeUid2(flag) {
      if (flag) {
        stack.push(instance.uid);
      } else {
        stack.pop();
      }
    };
    var addKeyboardEvent = function addKeyboardEvent2(status) {
      if (status) {
        document.addEventListener("keydown", keyboardEvent);
        props2.confirmOnEnter && document.addEventListener("keydown", keyboardEnterEvent);
      } else {
        document.removeEventListener("keydown", keyboardEvent);
        props2.confirmOnEnter && document.removeEventListener("keydown", keyboardEnterEvent);
      }
    };
    var keyboardEnterEvent = function keyboardEnterEvent2(e) {
      var eventSrc = e.target;
      if (eventSrc.tagName.toLowerCase() === "input")
        return;
      var code = e.code;
      if ((code === "Enter" || code === "NumpadEnter") && stack.top === instance.uid) {
        var _props2$onConfirm2;
        (_props2$onConfirm2 = props2.onConfirm) === null || _props2$onConfirm2 === void 0 ? void 0 : _props2$onConfirm2.call(props2, {
          e
        });
      }
    };
    var keyboardEvent = function keyboardEvent2(e) {
      if (e.code === "Escape" && stack.top === instance.uid) {
        var _props2$onEscKeydown, _props2$closeOnEscKey;
        (_props2$onEscKeydown = props2.onEscKeydown) === null || _props2$onEscKeydown === void 0 ? void 0 : _props2$onEscKeydown.call(props2, {
          e
        });
        if ((_props2$closeOnEscKey = props2.closeOnEscKeydown) !== null && _props2$closeOnEscKey !== void 0 ? _props2$closeOnEscKey : globalConfig.value.closeOnEscKeydown) {
          emitCloseEvent({
            e,
            trigger: "esc"
          });
        }
      }
    };
    var overlayAction = function overlayAction2(e) {
      var _props2$closeOnOverla;
      if (props2.showOverlay && ((_props2$closeOnOverla = props2.closeOnOverlayClick) !== null && _props2$closeOnOverla !== void 0 ? _props2$closeOnOverla : globalConfig.value.closeOnOverlayClick)) {
        var _props2$onOverlayClic;
        (_props2$onOverlayClic = props2.onOverlayClick) === null || _props2$onOverlayClic === void 0 ? void 0 : _props2$onOverlayClic.call(props2, {
          e
        });
        emitCloseEvent({
          e,
          trigger: "overlay"
        });
      }
    };
    var _useSameTarget = useSameTarget(overlayAction), onClick = _useSameTarget.onClick, onMousedown = _useSameTarget.onMousedown, onMouseup = _useSameTarget.onMouseup;
    var closeBtnAction = function closeBtnAction2(e) {
      var _props2$onCloseBtnCli;
      (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 ? void 0 : _props2$onCloseBtnCli.call(props2, {
        e
      });
      emitCloseEvent({
        trigger: "close-btn",
        e
      });
    };
    var afterEnter = function afterEnter2() {
      var _props2$onOpened;
      (_props2$onOpened = props2.onOpened) === null || _props2$onOpened === void 0 ? void 0 : _props2$onOpened.call(props2);
    };
    var afterLeave = function afterLeave2() {
      var _props2$onClosed;
      if (isModeLess.value && props2.draggable && dialogEle.value) {
        dialogEle.value.style.position = "relative";
        dialogEle.value.style.left = "unset";
        dialogEle.value.style.top = "unset";
      }
      (_props2$onClosed = props2.onClosed) === null || _props2$onClosed === void 0 ? void 0 : _props2$onClosed.call(props2);
    };
    var emitCloseEvent = function emitCloseEvent2(ctx) {
      var _props2$onClose;
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 ? void 0 : _props2$onClose.call(props2, ctx);
      context.emit("update:visible", false);
    };
    var hasEventOn = function hasEventOn2(name) {
      var _this$_events;
      var eventFuncs = (_this$_events = _this["_events"]) === null || _this$_events === void 0 ? void 0 : _this$_events[name];
      return !!(eventFuncs !== null && eventFuncs !== void 0 && eventFuncs.length);
    };
    var getIcon = function getIcon2() {
      var icon = {
        info: createVNode(InfoCircleFilledIcon$1, {
          "class": "".concat(classPrefix.value, "-is-info")
        }, null),
        warning: createVNode(ErrorCircleFilledIcon$1, {
          "class": "".concat(classPrefix.value, "-is-warning")
        }, null),
        danger: createVNode(ErrorCircleFilledIcon$1, {
          "class": "".concat(classPrefix.value, "-is-error")
        }, null),
        success: createVNode(CheckCircleFilledIcon$1, {
          "class": "".concat(classPrefix.value, "-is-success")
        }, null)
      };
      return icon[props2.theme];
    };
    var renderDialog = function renderDialog2() {
      var defaultHeader = createVNode("h5", {
        "class": "title"
      }, null);
      var defaultCloseBtn = createVNode(CloseIcon$1, null, null);
      var body = renderContent2("default", "body");
      var defaultFooter = createVNode("div", null, [getCancelBtn({
        cancelBtn: props2.cancelBtn,
        globalCancel: globalConfig.value.cancel,
        className: "".concat(COMPONENT_NAME.value, "__cancel")
      }), getConfirmBtn({
        theme: props2.theme,
        confirmBtn: props2.confirmBtn,
        globalConfirm: globalConfig.value.confirm,
        globalConfirmBtnTheme: globalConfig.value.confirmBtnTheme,
        className: "".concat(COMPONENT_NAME.value, "__confirm")
      })]);
      var headerClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__header"), "".concat(COMPONENT_NAME.value, "__header--fullscreen")] : "".concat(COMPONENT_NAME.value, "__header");
      var closeClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__close"), "".concat(COMPONENT_NAME.value, "__close--fullscreen")] : "".concat(COMPONENT_NAME.value, "__close");
      var bodyClassName = props2.theme === "default" ? ["".concat(COMPONENT_NAME.value, "__body")] : ["".concat(COMPONENT_NAME.value, "__body__icon")];
      var footerContent = renderTNodeJSX2("footer", defaultFooter);
      if (isFullScreen.value && footerContent) {
        bodyClassName.push("".concat(COMPONENT_NAME.value, "__body--fullscreen"));
      } else if (isFullScreen.value) {
        bodyClassName.push("".concat(COMPONENT_NAME.value, "__body--fullscreen--without-footer"));
      }
      var footerClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__footer"), "".concat(COMPONENT_NAME.value, "__footer--fullscreen")] : "".concat(COMPONENT_NAME.value, "__footer");
      var onStopDown = function onStopDown2(e) {
        if (isModeLess.value && props2.draggable)
          e.stopPropagation();
      };
      return createVNode("div", {
        "class": wrapClass.value
      }, [createVNode("div", {
        "class": positionClass.value,
        "style": positionStyle.value,
        "onClick": onClick,
        "onMousedown": onMousedown,
        "onMouseup": onMouseup
      }, [withDirectives(createVNode("div", {
        "key": "dialog",
        "class": dialogClass.value,
        "style": dialogStyle.value,
        "ref": dialogEle
      }, [createVNode("div", {
        "class": headerClassName,
        "onMousedown": onStopDown
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header-content")
      }, [getIcon(), renderTNodeJSX2("header", defaultHeader)]), props2.closeBtn ? createVNode("span", {
        "class": closeClassName,
        "onClick": closeBtnAction
      }, [renderTNodeJSX2("closeBtn", defaultCloseBtn)]) : null]), createVNode("div", {
        "class": bodyClassName,
        "onMousedown": onStopDown
      }, [body]), footerContent && createVNode("div", {
        "class": footerClassName,
        "onMousedown": onStopDown
      }, [footerContent])]), [[resolveDirective("draggable"), isModeLess.value && props2.draggable]])])]);
    };
    onMounted(function() {
      var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
      var scrollWidth = hasScrollBar ? getScrollbarWidth() : 0;
      styleEl.value = document.createElement("style");
      styleEl.value.dataset.id = "td_dialog_".concat(+/* @__PURE__ */ new Date(), "_").concat(key += 1);
      styleEl.value.innerHTML = "\n        html body {\n          overflow-y: hidden;\n          width: calc(100% - ".concat(scrollWidth, "px);\n        }\n      ");
    });
    onBeforeUnmount(function() {
      addKeyboardEvent(false);
      destroySelf();
    });
    return {
      COMPONENT_NAME,
      isModal,
      isModeLess,
      isFullScreen,
      maskClass,
      dialogClass,
      dialogStyle,
      dialogEle,
      afterEnter,
      afterLeave,
      hasEventOn,
      renderDialog,
      teleportElement
    };
  },
  render: function render5() {
    var _ref, _this2 = this;
    var COMPONENT_NAME = this.COMPONENT_NAME;
    var maskView = (this.isModal || this.isFullScreen) && createVNode("div", {
      "key": "mask",
      "class": this.maskClass
    }, null);
    var dialogView = this.renderDialog();
    var view = [maskView, dialogView];
    var ctxStyle = {
      zIndex: this.zIndex
    };
    var ctxClass = ["".concat(COMPONENT_NAME, "__ctx"), (_ref = {}, _defineProperty$2(_ref, "".concat(COMPONENT_NAME, "__ctx--fixed"), this.isModal || this.isFullScreen), _defineProperty$2(_ref, "".concat(COMPONENT_NAME, "__ctx--absolute"), this.isModal && this.showInAttachedElement), _defineProperty$2(_ref, "".concat(COMPONENT_NAME, "__ctx--modeless"), this.isModeLess), _ref)];
    return createVNode(Teleport, {
      "disabled": !this.attach || !this.teleportElement,
      "to": this.teleportElement
    }, {
      "default": function _default14() {
        return [createVNode(Transition, {
          "duration": 300,
          "name": "".concat(COMPONENT_NAME, "-zoom__vue"),
          "onAfterEnter": _this2.afterEnter,
          "onAfterLeave": _this2.afterLeave
        }, {
          "default": function _default15() {
            return [(!_this2.destroyOnClose || _this2.visible) && withDirectives(createVNode("div", mergeProps({
              "class": ctxClass,
              "style": ctxStyle
            }, _this2.$attrs), [view]), [[vShow, _this2.visible]])];
          }
        })];
      }
    });
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$n(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$o(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$o(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var createDialog = function createDialog2(props2) {
  var options = _objectSpread$n({}, props2);
  var wrapper = document.createElement("div");
  var visible = ref(false);
  var className = options.className, style = options.style;
  var component = defineComponent({
    setup: function setup33(props22, _ref) {
      var expose = _ref.expose;
      var dialogOptions = ref(options);
      onMounted(function() {
        visible.value = true;
        document.activeElement.blur();
      });
      var update = function update2(newOptions) {
        dialogOptions.value = _objectSpread$n(_objectSpread$n({}, options), newOptions);
      };
      expose({
        update
      });
      return function() {
        var onClose = options.onClose || function() {
          visible.value = false;
        };
        delete options.className;
        delete options.style;
        return h(_Dialog, _objectSpread$n({
          onClose,
          visible: visible.value
        }, dialogOptions.value));
      };
    }
  });
  var dialogComponent = createApp(component);
  var dialog = dialogComponent.mount(wrapper);
  var preClassName = className;
  var updateClassNameStyle = function updateClassNameStyle2(className2, style2) {
    if (className2) {
      if (preClassName !== className2) {
        var _wrapper$firstElement;
        (_wrapper$firstElement = wrapper.firstElementChild.classList).remove.apply(_wrapper$firstElement, _toConsumableArray(preClassName.split(" ").map(function(name) {
          return name.trim();
        })));
      }
      className2.split(" ").forEach(function(name) {
        wrapper.firstElementChild.classList.add(name.trim());
      });
    }
    if (style2) {
      wrapper.firstElementChild.style.cssText += style2;
    }
    preClassName = className2;
  };
  updateClassNameStyle(className, style);
  var container = getAttach(options.attach);
  if (container) {
    container.appendChild(wrapper);
  } else {
    console.error("attach is not exist");
  }
  var dialogNode = {
    show: function show() {
      visible.value = true;
    },
    hide: function hide() {
      visible.value = false;
    },
    update: function update(newOptions) {
      dialog.update(newOptions);
      updateClassNameStyle(newOptions.className, newOptions.style);
    },
    destroy: function destroy2() {
      visible.value = false;
      setTimeout(function() {
        dialogComponent.unmount();
      }, 300);
    }
  };
  return dialogNode;
};
var confirm = function confirm2(props2) {
  return createDialog(props2);
};
var alert = function alert2(props2) {
  var options = _objectSpread$n({}, props2);
  options.cancelBtn = null;
  return createDialog(options);
};
var extraApi = {
  confirm,
  alert
};
var DialogPlugin = createDialog;
DialogPlugin.install = function(app) {
  app.config.globalProperties.$dialog = createDialog;
  Object.keys(extraApi).forEach(function(funcName) {
    app.config.globalProperties.$dialog[funcName] = extraApi[funcName];
  });
};
Object.keys(extraApi).forEach(function(funcName) {
  DialogPlugin[funcName] = extraApi[funcName];
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Dialog = withInstall(_Dialog);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var baseTableProps = {
  allowResizeColumnWidth: {
    type: Boolean,
    "default": void 0
  },
  attach: {
    type: [String, Function]
  },
  bordered: Boolean,
  bottomContent: {
    type: [String, Function]
  },
  cellEmptyContent: {
    type: [String, Function]
  },
  columns: {
    type: Array,
    "default": function _default7() {
      return [];
    }
  },
  data: {
    type: Array,
    "default": function _default8() {
      return [];
    }
  },
  disableDataPage: Boolean,
  empty: {
    type: [String, Function],
    "default": ""
  },
  firstFullRow: {
    type: [String, Function]
  },
  fixedRows: {
    type: Array
  },
  footData: {
    type: Array,
    "default": function _default9() {
      return [];
    }
  },
  footerAffixProps: {
    type: Object
  },
  footerAffixedBottom: {
    type: [Boolean, Object],
    "default": false
  },
  footerSummary: {
    type: [String, Function]
  },
  headerAffixProps: {
    type: Object
  },
  headerAffixedTop: {
    type: [Boolean, Object],
    "default": false
  },
  height: {
    type: [String, Number]
  },
  horizontalScrollAffixedBottom: {
    type: [Boolean, Object]
  },
  hover: Boolean,
  lastFullRow: {
    type: [String, Function]
  },
  lazyLoad: Boolean,
  loading: {
    type: [Boolean, Function],
    "default": void 0
  },
  loadingProps: {
    type: Object
  },
  maxHeight: {
    type: [String, Number]
  },
  pagination: {
    type: Object
  },
  paginationAffixedBottom: {
    type: [Boolean, Object]
  },
  resizable: Boolean,
  rowAttributes: {
    type: [Object, Array, Function]
  },
  rowClassName: {
    type: [String, Object, Array, Function]
  },
  rowKey: {
    type: String,
    "default": "id",
    required: true
  },
  rowspanAndColspan: {
    type: Function
  },
  rowspanAndColspanInFooter: {
    type: Function
  },
  scroll: {
    type: Object
  },
  showHeader: {
    type: Boolean,
    "default": true
  },
  size: {
    type: String,
    "default": "medium",
    validator: function validator33(val) {
      if (!val)
        return true;
      return ["small", "medium", "large"].includes(val);
    }
  },
  stripe: Boolean,
  tableContentWidth: {
    type: String,
    "default": ""
  },
  tableLayout: {
    type: String,
    "default": "fixed",
    validator: function validator34(val) {
      if (!val)
        return true;
      return ["auto", "fixed"].includes(val);
    }
  },
  topContent: {
    type: [String, Function]
  },
  verticalAlign: {
    type: String,
    "default": "middle",
    validator: function validator35(val) {
      if (!val)
        return true;
      return ["top", "middle", "bottom"].includes(val);
    }
  },
  onCellClick: Function,
  onColumnResizeChange: Function,
  onPageChange: Function,
  onRowClick: Function,
  onRowDblclick: Function,
  onRowMousedown: Function,
  onRowMouseenter: Function,
  onRowMouseleave: Function,
  onRowMouseover: Function,
  onRowMouseup: Function,
  onScroll: Function,
  onScrollX: Function,
  onScrollY: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function getNodeDepth(columns, depthMap) {
  var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  var maxDepth = depth;
  for (var i = 0, len2 = columns.length; i < len2; i++) {
    var _col$children;
    var col = columns[i];
    depthMap.set(col, depth);
    if (col !== null && col !== void 0 && (_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
      var deep = getNodeDepth(col.children, depthMap, depth + 1);
      if (deep > maxDepth) {
        maxDepth = deep;
      }
    }
  }
  return maxDepth;
}
function getChildrenNodeWidth(node) {
  var count = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var countNew = count;
  var childrenList = (node === null || node === void 0 ? void 0 : node.children) || [];
  for (var i = 0, len2 = childrenList.length; i < len2; i++) {
    var item = childrenList[i];
    if (item.children) {
      countNew = getChildrenNodeWidth(item, countNew);
    } else {
      countNew += 1;
    }
  }
  return countNew;
}
function getThRowspanAndColspan(columns) {
  var depthMap = /* @__PURE__ */ new Map();
  var columnsDepth = getNodeDepth(columns, depthMap);
  var rowspanAndColspanMap = /* @__PURE__ */ new Map();
  var loop = function loop2(nodes, leafColumns2) {
    for (var i = 0, len2 = nodes.length; i < len2; i++) {
      var _col$children2;
      var col = nodes[i];
      var rowspan = col.children ? 1 : columnsDepth - depthMap.get(col) + 1;
      var colspan = col.children ? getChildrenNodeWidth(col) : 1;
      var span = {};
      rowspan > 1 && (span.rowspan = rowspan);
      colspan > 1 && (span.colspan = colspan);
      rowspanAndColspanMap.set(col, span);
      if (col !== null && col !== void 0 && (_col$children2 = col.children) !== null && _col$children2 !== void 0 && _col$children2.length) {
        loop2(col.children, leafColumns2);
      } else {
        leafColumns2.push(col);
      }
    }
  };
  var leafColumns = [];
  loop(columns, leafColumns);
  return {
    rowspanAndColspanMap,
    leafColumns
  };
}
function getThList(columns) {
  var loop = function loop2(nodes, thRows) {
    var _children;
    var thRowData = [];
    var children = [];
    for (var i = 0, len2 = nodes.length; i < len2; i++) {
      var _node$children;
      var node = nodes[i];
      var thList = [node];
      thRowData = thRowData.concat(thList);
      if (node !== null && node !== void 0 && (_node$children = node.children) !== null && _node$children !== void 0 && _node$children.length) {
        children = children.concat(node.children);
      }
    }
    if ((_children = children) !== null && _children !== void 0 && _children.length) {
      loop2(children, thRows);
    }
    thRows.push(thRowData);
    return thRowData;
  };
  var list = [];
  loop(columns, list);
  list = list.reverse();
  return list;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useClassName() {
  var classPrefix = usePrefixClass();
  var classNames = {
    classPrefix: classPrefix.value,
    tableBaseClass: {
      table: "".concat(classPrefix.value, "-table"),
      columnResizableTable: "".concat(classPrefix.value, "-table--column-resizable"),
      overflowVisible: "".concat(classPrefix.value, "-table--overflow-visible"),
      body: "".concat(classPrefix.value, "-table__body"),
      content: "".concat(classPrefix.value, "-table__content"),
      topContent: "".concat(classPrefix.value, "-table__top-content"),
      bottomContent: "".concat(classPrefix.value, "-table__bottom-content"),
      paginationWrap: "".concat(classPrefix.value, "-table__pagination-wrap"),
      tdLastRow: "".concat(classPrefix.value, "-table__td-last-row"),
      tdFirstCol: "".concat(classPrefix.value, "-table__td-first-col"),
      thCellInner: "".concat(classPrefix.value, "-table__th-cell-inner"),
      tableRowEdit: "".concat(classPrefix.value, "-table--row-edit"),
      cellEditable: "".concat(classPrefix.value, "-table__cell--editable"),
      cellEditWrap: "".concat(classPrefix.value, "-table__cell-wrap"),
      bordered: "".concat(classPrefix.value, "-table--bordered"),
      striped: "".concat(classPrefix.value, "-table--striped"),
      hover: "".concat(classPrefix.value, "-table--hoverable"),
      loading: "".concat(classPrefix.value, "-table--loading"),
      rowspanAndColspan: "".concat(classPrefix.value, "-table--rowspan-colspan"),
      empty: "".concat(classPrefix.value, "-table__empty"),
      emptyRow: "".concat(classPrefix.value, "-table__empty-row"),
      headerFixed: "".concat(classPrefix.value, "-table--header-fixed"),
      columnFixed: "".concat(classPrefix.value, "-table--column-fixed"),
      widthOverflow: "".concat(classPrefix.value, "-table--width-overflow"),
      multipleHeader: "".concat(classPrefix.value, "-table--multiple-header"),
      footerAffixed: "".concat(classPrefix.value, "-table--footer-affixed"),
      horizontalBarAffixed: "".concat(classPrefix.value, "-table--horizontal-bar-affixed"),
      affixedHeader: "".concat(classPrefix.value, "-table--affixed-header"),
      affixedHeaderElm: "".concat(classPrefix.value, "-table__affixed-header-elm"),
      affixedFooterElm: "".concat(classPrefix.value, "-table__affixed-footer-elm"),
      affixedFooterWrap: "".concat(classPrefix.value, "-table__affixed-footer-wrap"),
      scrollbarDivider: "".concat(classPrefix.value, "-table__scroll-bar-divider"),
      fullHeight: "".concat(classPrefix.value, "-table--full-height"),
      resizeLine: "".concat(classPrefix.value, "-table__resize-line"),
      obviousScrollbar: "".concat(classPrefix.value, "-table__scrollbar--obvious"),
      affixedHeaderWrap: "".concat(classPrefix.value, "-table__affixed-header-elm-wrap")
    },
    tdAlignClasses: {
      left: "".concat(classPrefix.value, "-align-left"),
      right: "".concat(classPrefix.value, "-align-right"),
      center: "".concat(classPrefix.value, "-align-center")
    },
    tableHeaderClasses: {
      header: "".concat(classPrefix.value, "-table__header"),
      thBordered: "".concat(classPrefix.value, "-table__header-th--bordered"),
      fixed: "".concat(classPrefix.value, "-table__header--fixed"),
      multipleHeader: "".concat(classPrefix.value, "-table__header--multiple")
    },
    tableFooterClasses: {
      footer: "".concat(classPrefix.value, "-table__footer"),
      fixed: "".concat(classPrefix.value, "-table__footer--fixed")
    },
    tableAlignClasses: {
      top: "".concat(classPrefix.value, "-vertical-align-top"),
      middle: "".concat(classPrefix.value, "-vertical-align-middle"),
      bottom: "".concat(classPrefix.value, "-vertical-align-bottom")
    },
    tableRowFixedClasses: {
      top: "".concat(classPrefix.value, "-table__row--fixed-top"),
      bottom: "".concat(classPrefix.value, "-table__row--fixed-bottom"),
      firstBottom: "".concat(classPrefix.value, "-table__row--fixed-bottom-first"),
      withoutBorderBottom: "".concat(classPrefix.value, "-table__row--without-border-bottom")
    },
    tableColFixedClasses: {
      left: "".concat(classPrefix.value, "-table__cell--fixed-left"),
      right: "".concat(classPrefix.value, "-table__cell--fixed-right"),
      lastLeft: "".concat(classPrefix.value, "-table__cell--fixed-left-last"),
      firstRight: "".concat(classPrefix.value, "-table__cell--fixed-right-first"),
      leftShadow: "".concat(classPrefix.value, "-table__content--scrollable-to-left"),
      rightShadow: "".concat(classPrefix.value, "-table__content--scrollable-to-right")
    },
    tableLayoutClasses: {
      auto: "".concat(classPrefix.value, "-table--layout-auto"),
      fixed: "".concat(classPrefix.value, "-table--layout-fixed")
    },
    tdEllipsisClass: "".concat(classPrefix.value, "-table-td--ellipsis"),
    tableFullRowClasses: {
      base: "".concat(classPrefix.value, "-table__row--full"),
      innerFullRow: "".concat(classPrefix.value, "-table__row-full-inner"),
      innerFullElement: "".concat(classPrefix.value, "-table__row-full-element"),
      firstFullRow: "".concat(classPrefix.value, "-table__first-full-row"),
      lastFullRow: "".concat(classPrefix.value, "-table__last-full-row")
    },
    tableExpandClasses: {
      iconBox: "".concat(classPrefix.value, "-table__expand-box"),
      iconCell: "".concat(classPrefix.value, "-table__expandable-icon-cell"),
      row: "".concat(classPrefix.value, "-table__expanded-row"),
      rowInner: "".concat(classPrefix.value, "-table__expanded-row-inner"),
      expanded: "".concat(classPrefix.value, "-table__row--expanded"),
      collapsed: "".concat(classPrefix.value, "-table__row--collapsed")
    },
    tableSortClasses: {
      sortable: "".concat(classPrefix.value, "-table__cell--sortable"),
      sortColumn: "".concat(classPrefix.value, "-table__sort-column"),
      title: "".concat(classPrefix.value, "-table__cell--title"),
      trigger: "".concat(classPrefix.value, "-table__cell--sort-trigger"),
      doubleIcon: "".concat(classPrefix.value, "-table__double-icons"),
      sortIcon: "".concat(classPrefix.value, "-table__sort-icon"),
      iconDirection: {
        asc: "".concat(classPrefix.value, "-table-sort-asc"),
        desc: "".concat(classPrefix.value, "-table-sort-desc")
      },
      iconActive: "".concat(classPrefix.value, "-table__sort-icon--active"),
      iconDefault: "".concat(classPrefix.value, "-icon-sort--default")
    },
    tableSelectedClasses: {
      selected: "".concat(classPrefix.value, "-table__row--selected"),
      disabled: "".concat(classPrefix.value, "-table__row--disabled"),
      checkCell: "".concat(classPrefix.value, "-table__cell-check")
    },
    tableFilterClasses: {
      filterable: "".concat(classPrefix.value, "-table__cell--filterable"),
      popup: "".concat(classPrefix.value, "-table__filter-pop"),
      icon: "".concat(classPrefix.value, "-table__filter-icon"),
      popupContent: "".concat(classPrefix.value, "-table__filter-pop-content"),
      result: "".concat(classPrefix.value, "-table__filter-result"),
      inner: "".concat(classPrefix.value, "-table__row-filter-inner"),
      bottomButtons: "".concat(classPrefix.value, "-table__filter--bottom-buttons"),
      contentInner: "".concat(classPrefix.value, "-table__filter-pop-content-inner"),
      iconWrap: "".concat(classPrefix.value, "-table__filter-icon-wrap")
    },
    asyncLoadingClass: "".concat(classPrefix.value, "-table__async-loading"),
    isFocusClass: "".concat(classPrefix.value, "-is-focus"),
    isLoadingClass: "".concat(classPrefix.value, "-is-loading"),
    isLoadMoreClass: "".concat(classPrefix.value, "-is-load-more"),
    tableTreeClasses: {
      col: "".concat(classPrefix.value, "-table__tree-col"),
      inlineCol: "".concat(classPrefix.value, "-table__tree-col--inline"),
      icon: "".concat(classPrefix.value, "-table__tree-op-icon"),
      leafNode: "".concat(classPrefix.value, "-table__tree-leaf-node")
    },
    tableDraggableClasses: {
      rowDraggable: "".concat(classPrefix.value, "-table--row-draggable"),
      rowHandlerDraggable: "".concat(classPrefix.value, "-table--row-handler-draggable"),
      colDraggable: "".concat(classPrefix.value, "-table--col-draggable"),
      handle: "".concat(classPrefix.value, "-table__handle-draggable"),
      ghost: "".concat(classPrefix.value, "-table__ele--draggable-ghost"),
      chosen: "".concat(classPrefix.value, "-table__ele--draggable-chosen"),
      dragging: "".concat(classPrefix.value, "-table__ele--draggable-dragging"),
      dragSortTh: "".concat(classPrefix.value, "-table__th--drag-sort")
    },
    virtualScrollClasses: {
      cursor: "".concat(classPrefix.value, "-table__virtual-scroll-cursor"),
      header: "".concat(classPrefix.value, "-table__virtual-scroll-header")
    },
    positiveRotate90: "".concat(classPrefix.value, "-positive-rotate-90"),
    negativeRotate180: "".concat(classPrefix.value, "-negative-rotate-180")
  };
  return classNames;
}
const index$2 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$m(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$n(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$n(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$5(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var TEllipsis = defineComponent({
  name: "TEllipsis",
  props: {
    content: {
      type: [String, Function]
    },
    "default": {
      type: [String, Function]
    },
    tooltipContent: {
      type: [String, Number, Function]
    },
    placement: String,
    attach: [String, Function],
    tooltipProps: Object,
    zIndex: Number,
    overlayClassName: String,
    classPrefix: {
      type: String,
      "default": "t"
    }
  },
  setup: function setup22(props2) {
    var root = ref();
    var isOverflow = ref(false);
    var ellipsisClasses = computed(function() {
      return ["".concat(props2.classPrefix, "-table__ellipsis"), "".concat(props2.classPrefix, "-text-ellipsis")];
    });
    var innerEllipsisClassName = computed(function() {
      return ["".concat(props2.classPrefix, "-table__ellipsis-content"), props2.overlayClassName];
    });
    var onTriggerMouseenter = function onTriggerMouseenter2() {
      if (!root.value)
        return;
      isOverflow.value = isNodeOverflow(root.value);
    };
    var onTriggerMouseleave = function onTriggerMouseleave2() {
      if (!root.value)
        return;
      isOverflow.value = isNodeOverflow(root.value);
    };
    var onMouseAround = debounce_1(function(e) {
      e.type === "mouseleave" ? onTriggerMouseleave() : onTriggerMouseenter();
    }, 80);
    return {
      root,
      isOverflow,
      ellipsisClasses,
      innerEllipsisClassName,
      onMouseAround
    };
  },
  render: function render6() {
    var cellNode = renderContent(this, "default", "content");
    var ellipsisContent = createVNode("div", {
      "ref": "root",
      "class": this.ellipsisClasses,
      "onMouseenter": this.onMouseAround,
      "onMouseleave": this.onMouseAround
    }, [cellNode]);
    var content = null;
    var tooltipProps = this.tooltipProps;
    if (this.isOverflow) {
      var rProps = _objectSpread$m({
        content: this.tooltipContent || function() {
          return cellNode;
        },
        destroyOnClose: true,
        zIndex: this.zIndex,
        attach: this.attach,
        placement: this.placement,
        overlayClassName: tooltipProps !== null && tooltipProps !== void 0 && tooltipProps.overlayClassName ? this.innerEllipsisClassName.concat(tooltipProps.overlayClassName) : this.innerEllipsisClassName
      }, tooltipProps);
      content = createVNode(Tooltip, rProps, _isSlot$5(ellipsisContent) ? ellipsisContent : {
        "default": function _default14() {
          return [ellipsisContent];
        }
      });
    } else {
      content = ellipsisContent;
    }
    return content;
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$l(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$m(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$m(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _isSlot$4(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
function renderTitle(slots, col, index2) {
  var params = {
    col,
    colIndex: index2
  };
  if (isFunction_1(col.title)) {
    return col.title(h, params);
  }
  if (isString_1(col.title) && slots[col.title]) {
    return slots[col.title](params);
  }
  if (isFunction_1(col.render)) {
    return col.render(h, _objectSpread$l(_objectSpread$l({}, params), {}, {
      type: "title",
      row: {},
      rowIndex: -1
    })) || col.title;
  }
  return col.title;
}
function useTableHeader(props2) {
  var _useClassName = useClassName(), tableSortClasses = _useClassName.tableSortClasses, tableFilterClasses = _useClassName.tableFilterClasses;
  var spansAndLeafNodes = computed(function() {
    return getThRowspanAndColspan(props2.columns);
  });
  var thList = computed(function() {
    return getThList(props2.columns);
  });
  var isMultipleHeader = computed(function() {
    return thList.value.length > 1;
  });
  var renderTitleWidthIcon = function renderTitleWidthIcon2(_ref, col, colIndex, ellipsisTitle, attach, extra) {
    var _classes;
    var _ref2 = _slicedToArray(_ref, 3), title = _ref2[0], sortIcon = _ref2[1], filterIcon = _ref2[2];
    var classes = (_classes = {}, _defineProperty$2(_classes, tableSortClasses.sortable, sortIcon), _defineProperty$2(_classes, tableFilterClasses.filterable, filterIcon), _classes);
    var content = isFunction_1(ellipsisTitle) ? ellipsisTitle(h, {
      col,
      colIndex
    }) : void 0;
    var isEllipsis = ellipsisTitle !== void 0 ? Boolean(ellipsisTitle) : Boolean(col.ellipsis);
    return createVNode("div", {
      "class": classes
    }, [createVNode("div", {
      "class": tableSortClasses.title
    }, [isEllipsis ? createVNode(TEllipsis, {
      "placement": "bottom",
      "attach": props2.attach || (attach ? function() {
        return attach;
      } : void 0),
      "tooltipContent": content && function() {
        return content;
      },
      "tooltipProps": _typeof$2(ellipsisTitle) === "object" ? ellipsisTitle : void 0,
      "classPrefix": extra === null || extra === void 0 ? void 0 : extra.classPrefix,
      "overlayClassName": extra === null || extra === void 0 ? void 0 : extra.ellipsisOverlayClassName
    }, _isSlot$4(title) ? title : {
      "default": function _default14() {
        return [title];
      }
    }) : createVNode("div", null, [title]), Boolean(sortIcon || filterIcon) && createVNode("div", {
      "class": tableFilterClasses.iconWrap
    }, [sortIcon, filterIcon])])]);
  };
  return {
    thList,
    isMultipleHeader,
    spansAndLeafNodes,
    renderTitleWidthIcon
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$k(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$l(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$l(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
var DEFAULT_MIN_WIDTH = 80;
var DEFAULT_MAX_WIDTH = 600;
var distance = 8;
function useColumnResize(params) {
  var isWidthOverflow = params.isWidthOverflow, tableContentRef = params.tableContentRef, showColumnShadow = params.showColumnShadow, getThWidthList = params.getThWidthList, updateThWidthList = params.updateThWidthList, setTableElmWidth = params.setTableElmWidth, updateTableAfterColumnResize = params.updateTableAfterColumnResize, onColumnResizeChange = params.onColumnResizeChange;
  var resizeLineRef = ref();
  var effectColMap = ref({});
  var leafColumns = ref([]);
  var originalSelectStart;
  var originalDragStart;
  onMounted(function() {
    var hasDocument = typeof document !== "undefined";
    originalSelectStart = hasDocument ? document.onselectstart : null;
    originalDragStart = hasDocument ? document.ondragstart : null;
  });
  var getSiblingResizableCol = function getSiblingResizableCol2(nodes, index2, type) {
    var i = index2;
    while (nodes[i] && nodes[i].resizable === false) {
      if (type === "next") {
        i += 1;
      } else {
        i -= 1;
      }
    }
    return nodes[i];
  };
  var setEffectColMap = function setEffectColMap2(nodes, parent) {
    if (!nodes)
      return;
    leafColumns.value = nodes;
    nodes.forEach(function(n, index2) {
      var prevNode = getSiblingResizableCol(nodes, index2 - 1, "prev");
      var nextNode = getSiblingResizableCol(nodes, index2 + 1, "next");
      var parentPrevCol = parent ? effectColMap.value[parent.colKey].prev : nextNode;
      var parentNextCol = parent ? effectColMap.value[parent.colKey].next : prevNode;
      var prev = index2 === 0 ? parentPrevCol : prevNode;
      var next = index2 === nodes.length - 1 ? parentNextCol : nextNode;
      effectColMap.value[n.colKey] = {
        prev,
        next,
        current: {
          prevSibling: getSiblingResizableCol(nodes, index2 - 1, "prev"),
          nextSibling: getSiblingResizableCol(nodes, index2 + 1, "next")
        }
      };
      setEffectColMap2(n.children, n);
    });
  };
  var resizeLineParams = {
    isDragging: false,
    draggingCol: null,
    draggingStart: 0,
    effectCol: "next"
  };
  var resizeLineStyle = reactive({
    display: "none",
    height: "10px",
    left: "10px",
    bottom: "0"
  });
  var isColRightFixActive = function isColRightFixActive2(col) {
    return col.fixed === "right" && showColumnShadow.right;
  };
  var onColumnMouseover = function onColumnMouseover2(e, col) {
    if (!resizeLineRef.value || resizeLineParams.isDragging)
      return;
    var target = e.target.closest("th");
    var colKey = target.getAttribute("data-colkey");
    if (!leafColumns.value.find(function(t) {
      return t.colKey === colKey;
    }))
      return;
    var targetBoundRect = target.getBoundingClientRect();
    var thRightCursor = targetBoundRect.right - e.pageX <= distance;
    var thLeftCursor = e.pageX - targetBoundRect.left <= distance;
    var isFixedToRight = isColRightFixActive(col);
    if (thRightCursor || isFixedToRight) {
      var _col$resizable;
      var colResizable = (_col$resizable = col.resizable) !== null && _col$resizable !== void 0 ? _col$resizable : true;
      if (colResizable) {
        target.style.cursor = thRightCursor || isFixedToRight && thLeftCursor ? "col-resize" : "";
        var isCurrent = thRightCursor && !isFixedToRight || isFixedToRight && thLeftCursor;
        resizeLineParams.draggingCol = isCurrent ? target : target.nextElementSibling;
        resizeLineParams.effectCol = "next";
        return;
      }
    } else if (thLeftCursor) {
      var prevEl = target.previousElementSibling;
      if (prevEl) {
        var _effectColMap$value$c, _effectPrevCol$resiza;
        var effectPrevCol = (_effectColMap$value$c = effectColMap.value[col.colKey]) === null || _effectColMap$value$c === void 0 ? void 0 : _effectColMap$value$c.prev;
        var _colResizable = (_effectPrevCol$resiza = effectPrevCol === null || effectPrevCol === void 0 ? void 0 : effectPrevCol.resizable) !== null && _effectPrevCol$resiza !== void 0 ? _effectPrevCol$resiza : true;
        if (_colResizable) {
          target.style.cursor = "col-resize";
          resizeLineParams.draggingCol = prevEl;
          resizeLineParams.effectCol = "prev";
          return;
        }
      }
    }
    target.style.cursor = "";
    resizeLineParams.draggingCol = null;
    resizeLineParams.effectCol = null;
  };
  var getMinMaxColWidth = function getMinMaxColWidth2(targetCol) {
    var _targetCol$resize, _targetCol$resize2;
    var propMinWidth = isNumber_1(targetCol.minWidth) ? targetCol.minWidth : parseInt(targetCol.minWidth || "0", 10);
    return {
      minColWidth: Math.max(((_targetCol$resize = targetCol.resize) === null || _targetCol$resize === void 0 ? void 0 : _targetCol$resize.minWidth) || DEFAULT_MIN_WIDTH, propMinWidth),
      maxColWidth: ((_targetCol$resize2 = targetCol.resize) === null || _targetCol$resize2 === void 0 ? void 0 : _targetCol$resize2.maxWidth) || DEFAULT_MAX_WIDTH
    };
  };
  var getNormalResizeInfo = function getNormalResizeInfo2(col, effectPrevCol, targetBoundRect, tableBoundRect) {
    var resizeLinePos = targetBoundRect.right - tableBoundRect.left;
    var colLeft = targetBoundRect.left - tableBoundRect.left;
    var targetCol = resizeLineParams.effectCol === "next" ? col : effectPrevCol;
    var _getMinMaxColWidth = getMinMaxColWidth(targetCol), minColWidth = _getMinMaxColWidth.minColWidth, maxColWidth = _getMinMaxColWidth.maxColWidth;
    return {
      resizeLinePos,
      minResizeLineLeft: colLeft + minColWidth,
      maxResizeLineLeft: colLeft + maxColWidth
    };
  };
  var getFixedToRightResizeInfo = function getFixedToRightResizeInfo2(target, col, effectPrevCol, targetBoundRect, tableBoundRect) {
    var resizeLinePos = targetBoundRect.left - tableBoundRect.left;
    var targetCol = target.dataset.colkey === col.colKey ? col : effectPrevCol;
    var colLeft = targetBoundRect.left - tableBoundRect.left;
    var _getMinMaxColWidth2 = getMinMaxColWidth(targetCol), minColWidth = _getMinMaxColWidth2.minColWidth, maxColWidth = _getMinMaxColWidth2.maxColWidth;
    return {
      resizeLinePos,
      minResizeLineLeft: colLeft + (targetBoundRect.width - maxColWidth),
      maxResizeLineLeft: colLeft + (targetBoundRect.width - minColWidth)
    };
  };
  var getFixedToLeftResizeInfo = function getFixedToLeftResizeInfo2(targetBoundRect, tableBoundRect) {
    var resizeLinePos = targetBoundRect.left - tableBoundRect.left;
    var colLeft = targetBoundRect.left - tableBoundRect.left;
    return {
      resizeLinePos,
      minResizeLineLeft: colLeft,
      maxResizeLineLeft: colLeft
    };
  };
  var getTotalTableWidth = function getTotalTableWidth2(thWidthList) {
    var tableWidth = 0;
    leafColumns.value.forEach(function(col) {
      tableWidth += thWidthList[col.colKey];
    });
    return tableWidth;
  };
  var getSiblingColCanResizable = function getSiblingColCanResizable2(newThWidthList, effectNextCol, distance2, index2) {
    var isWidthAbnormal = true;
    if (effectNextCol) {
      var _getMinMaxColWidth3 = getMinMaxColWidth(effectNextCol), minColWidth = _getMinMaxColWidth3.minColWidth, maxColWidth = _getMinMaxColWidth3.maxColWidth;
      var targetNextColWidth = newThWidthList[effectNextCol.colKey] + distance2;
      isWidthAbnormal = targetNextColWidth < minColWidth || targetNextColWidth > maxColWidth;
    }
    return !(isWidthAbnormal || isWidthOverflow.value || index2 === leafColumns.value.length - 1);
  };
  var getOtherResizeInfo = function getOtherResizeInfo2(col, effectPrevCol, targetBoundRect, tableBoundRect) {
    return effectPrevCol ? getNormalResizeInfo(col, effectPrevCol, targetBoundRect, tableBoundRect) : getFixedToLeftResizeInfo(targetBoundRect, tableBoundRect);
  };
  var onColumnMousedown = function onColumnMousedown2(e, col, index2) {
    var _tableContentRef$valu, _effectColMap$value$c2, _effectColMap$value$c3;
    if (!resizeLineParams.draggingCol)
      return;
    var target = resizeLineParams.draggingCol;
    var targetBoundRect = target.getBoundingClientRect();
    var tableBoundRect = (_tableContentRef$valu = tableContentRef.value) === null || _tableContentRef$valu === void 0 ? void 0 : _tableContentRef$valu.getBoundingClientRect();
    var effectNextCol = (_effectColMap$value$c2 = effectColMap.value[col.colKey]) === null || _effectColMap$value$c2 === void 0 ? void 0 : _effectColMap$value$c2.next;
    var effectPrevCol = (_effectColMap$value$c3 = effectColMap.value[col.colKey]) === null || _effectColMap$value$c3 === void 0 ? void 0 : _effectColMap$value$c3.prev;
    var _ref = isColRightFixActive(col) ? getFixedToRightResizeInfo(target, col, effectNextCol, targetBoundRect, tableBoundRect) : getOtherResizeInfo(col, effectNextCol, targetBoundRect, tableBoundRect), resizeLinePos = _ref.resizeLinePos, minResizeLineLeft = _ref.minResizeLineLeft, maxResizeLineLeft = _ref.maxResizeLineLeft;
    resizeLineParams.isDragging = true;
    resizeLineParams.draggingStart = e.x;
    if (resizeLineRef !== null && resizeLineRef !== void 0 && resizeLineRef.value) {
      resizeLineStyle.display = "block";
      resizeLineStyle.height = "".concat(tableBoundRect.bottom - targetBoundRect.top, "px");
      resizeLineStyle.left = "".concat(resizeLinePos, "px");
      var parent = tableContentRef.value.parentElement.getBoundingClientRect();
      resizeLineStyle.bottom = "".concat(parent.bottom - tableBoundRect.bottom, "px");
    }
    var onDragEnd = function onDragEnd2() {
      var _effectColMap$value$c4;
      if (!resizeLineParams.isDragging)
        return;
      var moveDistance = resizeLinePos - parseFloat(resizeLineStyle.left) || 0;
      var thWidthList = getThWidthList("calculate");
      var currentCol = (_effectColMap$value$c4 = effectColMap.value[col.colKey]) === null || _effectColMap$value$c4 === void 0 ? void 0 : _effectColMap$value$c4.current;
      var currentSibling = resizeLineParams.effectCol === "next" ? currentCol.nextSibling : currentCol.prevSibling;
      var newThWidthList = _objectSpread$k({}, thWidthList);
      var tmpCurrentCol = col.resizable !== false ? col : currentSibling;
      var rightCol = resizeLineParams.effectCol === "next" ? currentCol.nextSibling : col;
      var canResizeSiblingColWidth = getSiblingColCanResizable(newThWidthList, rightCol, moveDistance, index2);
      if (resizeLineParams.effectCol === "next") {
        if (isColRightFixActive(col)) {
          if (target.dataset.colkey !== col.colKey) {
            newThWidthList[effectNextCol.colKey] += moveDistance;
          } else {
            newThWidthList[tmpCurrentCol.colKey] += moveDistance;
          }
        } else {
          newThWidthList[tmpCurrentCol.colKey] -= moveDistance;
          if (canResizeSiblingColWidth) {
            newThWidthList[effectNextCol.colKey] += moveDistance;
          }
        }
      } else if (resizeLineParams.effectCol === "prev") {
        if (canResizeSiblingColWidth) {
          newThWidthList[tmpCurrentCol.colKey] += moveDistance;
        }
        effectPrevCol && (newThWidthList[effectPrevCol.colKey] -= moveDistance);
      }
      updateThWidthList(newThWidthList);
      var tableWidth = getTotalTableWidth(newThWidthList);
      setTableElmWidth(Math.round(tableWidth));
      updateTableAfterColumnResize();
      resizeLineParams.isDragging = false;
      resizeLineParams.draggingCol = null;
      resizeLineParams.effectCol = null;
      target.style.cursor = "";
      resizeLineStyle.display = "none";
      resizeLineStyle.left = "0";
      off$1(document, "mouseup", onDragEnd2);
      off$1(document, "mousemove", onDragOver);
      document.onselectstart = originalSelectStart;
      document.ondragstart = originalDragStart;
      onColumnResizeChange === null || onColumnResizeChange === void 0 ? void 0 : onColumnResizeChange({
        columnsWidth: newThWidthList
      });
    };
    var onDragOver = function onDragOver2(e2) {
      if (resizeLineParams.isDragging) {
        var left = resizeLinePos + e2.x - resizeLineParams.draggingStart;
        resizeLineStyle.left = "".concat(Math.min(Math.max(left, minResizeLineLeft), maxResizeLineLeft), "px");
      }
    };
    on$1(document, "mouseup", onDragEnd);
    on$1(document, "mousemove", onDragOver);
    document.onselectstart = function() {
      return false;
    };
    document.ondragstart = function() {
      return false;
    };
  };
  return {
    resizeLineRef,
    resizeLineStyle,
    onColumnMouseover,
    onColumnMousedown,
    setEffectColMap
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function noop$1() {
}
var noop_1 = noop$1;
var Set$1 = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set$1 && 1 / setToArray$1(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$1(array, iteratee, comparator) {
  var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set2 = iteratee ? null : createSet(array);
    if (set2) {
      return setToArray(set2);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index2 < length) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed2) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed2);
        }
        result.push(value);
      } else if (!includes(seen, computed2, comparator)) {
        if (seen !== result) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
var _baseUniq = baseUniq$1;
var baseDifference = _baseDifference, baseFlatten = _baseFlatten, baseUniq = _baseUniq;
function baseXor$1(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index2 = -1, result = Array(length);
  while (++index2 < length) {
    var array = arrays[index2], othIndex = -1;
    while (++othIndex < length) {
      if (othIndex != index2) {
        result[index2] = baseDifference(result[index2] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}
var _baseXor = baseXor$1;
var arrayFilter = _arrayFilter, baseRest = _baseRest, baseXor = _baseXor, isArrayLikeObject = isArrayLikeObject_1, last = last_1;
var xorWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseXor(arrayFilter(arrays, isArrayLikeObject), void 0, comparator);
});
var xorWith_1 = xorWith;
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
function _objectSpread$j(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$k(Object(source), true).forEach(function(key2) {
      _defineProperty$2(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$k(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function getColumnFixedStyles(col, index2, rowAndColFixedPosition, tableColFixedClasses) {
  var _thClasses;
  var fixedPos = rowAndColFixedPosition === null || rowAndColFixedPosition === void 0 ? void 0 : rowAndColFixedPosition.get(col.colKey || index2);
  if (!fixedPos)
    return {};
  var thClasses = (_thClasses = {}, _defineProperty$2(_thClasses, tableColFixedClasses.left, col.fixed === "left"), _defineProperty$2(_thClasses, tableColFixedClasses.right, col.fixed === "right"), _defineProperty$2(_thClasses, tableColFixedClasses.lastLeft, col.fixed === "left" && fixedPos.lastLeftFixedCol), _defineProperty$2(_thClasses, tableColFixedClasses.firstRight, col.fixed === "right" && fixedPos.firstRightFixedCol), _thClasses);
  var thStyles = {
    left: col.fixed === "left" ? "".concat(fixedPos.left, "px") : void 0,
    right: col.fixed === "right" ? "".concat(fixedPos.right, "px") : void 0
  };
  return {
    style: thStyles,
    classes: thClasses
  };
}
function getRowFixedStyles(rowId, rowIndex, rowLength, fixedRows, rowAndColFixedPosition, tableRowFixedClasses) {
  var _rowClasses;
  if (!fixedRows || !fixedRows.length)
    return {
      style: void 0,
      classes: void 0
    };
  var fixedTop = rowIndex < fixedRows[0];
  var fixedBottom = rowIndex > rowLength - 1 - fixedRows[1];
  var firstFixedBottomRow = rowLength - fixedRows[1];
  var fixedPos = (rowAndColFixedPosition === null || rowAndColFixedPosition === void 0 ? void 0 : rowAndColFixedPosition.get(rowId)) || {};
  var rowClasses = (_rowClasses = {}, _defineProperty$2(_rowClasses, tableRowFixedClasses.top, fixedTop), _defineProperty$2(_rowClasses, tableRowFixedClasses.bottom, fixedBottom), _defineProperty$2(_rowClasses, tableRowFixedClasses.firstBottom, rowIndex === firstFixedBottomRow), _defineProperty$2(_rowClasses, tableRowFixedClasses.withoutBorderBottom, rowIndex === firstFixedBottomRow - 1), _rowClasses);
  var rowStyles = {
    top: fixedTop ? "".concat(fixedPos.top, "px") : void 0,
    bottom: fixedBottom ? "".concat(fixedPos.bottom, "px") : void 0
  };
  return {
    style: rowStyles,
    classes: rowClasses
  };
}
function useFixed(props2, context, finalColumns, affixRef) {
  var _toRefs = toRefs(props2), columns = _toRefs.columns, tableLayout = _toRefs.tableLayout, tableContentWidth = _toRefs.tableContentWidth, fixedRows = _toRefs.fixedRows, firstFullRow = _toRefs.firstFullRow, lastFullRow = _toRefs.lastFullRow, maxHeight = _toRefs.maxHeight, headerAffixedTop = _toRefs.headerAffixedTop, footerAffixedBottom = _toRefs.footerAffixedBottom, bordered = _toRefs.bordered, resizable = _toRefs.resizable, allowResizeColumnWidth = _toRefs.allowResizeColumnWidth;
  var data2 = ref([]);
  var tableRef = ref();
  var tableContentRef = ref();
  var isFixedHeader = ref(false);
  var isWidthOverflow = ref(false);
  var tableElmRef = ref();
  var scrollbarWidth = ref(6);
  var rowAndColFixedPosition = ref(/* @__PURE__ */ new Map());
  var showColumnShadow = reactive({
    left: false,
    right: false
  });
  var virtualScrollHeaderPos = ref({
    left: 0,
    top: 0
  });
  var tableWidth = ref(0);
  var tableElmWidth = ref(0);
  var thWidthList = ref({});
  var isFixedColumn = ref(false);
  var isFixedRightColumn = ref(false);
  var isFixedLeftColumn = ref(false);
  var columnResizable = computed(function() {
    var _ref, _allowResizeColumnWid;
    return (_ref = (_allowResizeColumnWid = allowResizeColumnWidth.value) !== null && _allowResizeColumnWid !== void 0 ? _allowResizeColumnWid : resizable.value) !== null && _ref !== void 0 ? _ref : false;
  });
  var notNeedThWidthList = computed(function() {
    var _props$scroll;
    return !(props2.headerAffixedTop || props2.footerAffixedBottom || props2.horizontalScrollAffixedBottom || ((_props$scroll = props2.scroll) === null || _props$scroll === void 0 ? void 0 : _props$scroll.type) === "virtual");
  });
  function setUseFixedTableElmRef(val) {
    tableElmRef.value = val;
  }
  function getColumnMap(columns2) {
    var map = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Map();
    var levelNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var level = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    var parent = arguments.length > 4 ? arguments[4] : void 0;
    for (var i = 0, len2 = columns2.length; i < len2; i++) {
      var _col$children;
      var col = columns2[i];
      if (["left", "right"].includes(col.fixed)) {
        isFixedColumn.value = true;
      }
      if (col.fixed === "right") {
        isFixedRightColumn.value = true;
      }
      if (col.fixed === "left") {
        isFixedLeftColumn.value = true;
      }
      var key2 = col.colKey || i;
      var columnInfo = {
        col,
        parent,
        index: i
      };
      map.set(key2, columnInfo);
      if ((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
        getColumnMap(col.children, map, levelNodes, level + 1, columnInfo);
      }
      if (levelNodes[level]) {
        levelNodes[level].push(columnInfo);
      } else {
        levelNodes[level] = [columnInfo];
      }
    }
    return {
      newColumnsMap: map,
      levelNodes
    };
  }
  var setFixedLeftPos = function setFixedLeftPos2(columns2, initialColumnMap) {
    var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    for (var i = 0, len2 = columns2.length; i < len2; i++) {
      var _col$children2;
      var col = columns2[i];
      if (col.fixed === "right")
        return;
      var colInfo = initialColumnMap.get(col.colKey || i);
      var lastColIndex = i - 1;
      while (lastColIndex >= 0 && columns2[lastColIndex].fixed !== "left") {
        lastColIndex -= 1;
      }
      var lastCol = columns2[lastColIndex];
      var defaultWidth = i === 0 ? (parent === null || parent === void 0 ? void 0 : parent.left) || 0 : 0;
      var lastColInfo = initialColumnMap.get((lastCol === null || lastCol === void 0 ? void 0 : lastCol.colKey) || i - 1);
      if (colInfo) {
        colInfo.left = ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.left) || defaultWidth) + ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.width) || 0);
      }
      if ((_col$children2 = col.children) !== null && _col$children2 !== void 0 && _col$children2.length) {
        setFixedLeftPos2(col.children, initialColumnMap, colInfo);
      }
    }
  };
  var setFixedRightPos = function setFixedRightPos2(columns2, initialColumnMap) {
    var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    for (var i = columns2.length - 1; i >= 0; i--) {
      var _col$children3;
      var col = columns2[i];
      if (col.fixed === "left")
        return;
      var colInfo = initialColumnMap.get(col.colKey || i);
      var lastColIndex = i + 1;
      while (lastColIndex < columns2.length && columns2[lastColIndex].fixed !== "right") {
        lastColIndex += 1;
      }
      var lastCol = columns2[lastColIndex];
      var defaultWidth = i === columns2.length - 1 ? (parent === null || parent === void 0 ? void 0 : parent.right) || 0 : 0;
      var lastColInfo = initialColumnMap.get((lastCol === null || lastCol === void 0 ? void 0 : lastCol.colKey) || i + 1);
      if (colInfo) {
        colInfo.right = ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.right) || defaultWidth) + ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.width) || 0);
      }
      if ((_col$children3 = col.children) !== null && _col$children3 !== void 0 && _col$children3.length) {
        setFixedRightPos2(col.children, initialColumnMap, colInfo);
      }
    }
  };
  var setFixedColPosition = function setFixedColPosition2(trList, initialColumnMap) {
    if (!trList)
      return;
    for (var i = 0, len2 = trList.length; i < len2; i++) {
      var thList = trList[i].children;
      for (var j = 0, thLen = thList.length; j < thLen; j++) {
        var _obj$col;
        var th = thList[j];
        var colKey = th.dataset.colkey;
        if (!colKey) {
          log.warn("TDesign Table", "".concat(th.innerText, " missing colKey. colKey is required for fixed column feature."));
        }
        var obj = initialColumnMap.get(colKey || j);
        if (obj !== null && obj !== void 0 && (_obj$col = obj.col) !== null && _obj$col !== void 0 && _obj$col.fixed) {
          initialColumnMap.set(colKey, _objectSpread$j(_objectSpread$j({}, obj), {}, {
            width: th.getBoundingClientRect().width
          }));
        }
      }
    }
    setFixedLeftPos(columns.value, initialColumnMap);
    setFixedRightPos(columns.value, initialColumnMap);
  };
  var setFixedRowPosition = function setFixedRowPosition2(trList, initialColumnMap, thead, tfoot) {
    var _ref2 = fixedRows.value || [], _ref3 = _slicedToArray(_ref2, 2), fixedTopRows = _ref3[0], fixedBottomRows = _ref3[1];
    var data22 = props2.data, _props$rowKey = props2.rowKey, rowKey = _props$rowKey === void 0 ? "id" : _props$rowKey;
    for (var i = 0; i < fixedTopRows; i++) {
      var tr = trList[i];
      var rowId = get_1(data22[i], rowKey);
      var thisRowInfo = initialColumnMap.get(rowId) || {};
      var lastRowId = get_1(data22[i - 1], rowKey);
      var lastRowInfo = initialColumnMap.get(lastRowId) || {};
      var defaultBottom = 0;
      if (i === 0) {
        defaultBottom = (thead === null || thead === void 0 ? void 0 : thead.getBoundingClientRect().height) || 0;
      }
      thisRowInfo.top = (lastRowInfo.top || defaultBottom) + (lastRowInfo.height || 0);
      initialColumnMap.set(rowId, _objectSpread$j(_objectSpread$j({}, thisRowInfo), {}, {
        height: (tr === null || tr === void 0 ? void 0 : tr.getBoundingClientRect().height) || 0
      }));
    }
    for (var _i = data22.length - 1; _i >= data22.length - fixedBottomRows; _i--) {
      var _tr = trList[_i];
      var _rowId = get_1(data22[_i], rowKey);
      var _thisRowInfo = initialColumnMap.get(_rowId) || {};
      var _lastRowId = get_1(data22[_i + 1], rowKey);
      var _lastRowInfo = initialColumnMap.get(_lastRowId) || {};
      var _defaultBottom = 0;
      if (_i === data22.length - 1) {
        _defaultBottom = (tfoot === null || tfoot === void 0 ? void 0 : tfoot.getBoundingClientRect().height) || 0;
      }
      _thisRowInfo.bottom = (_lastRowInfo.bottom || _defaultBottom) + (_lastRowInfo.height || 0);
      initialColumnMap.set(_rowId, _objectSpread$j(_objectSpread$j({}, _thisRowInfo), {}, {
        height: (_tr === null || _tr === void 0 ? void 0 : _tr.getBoundingClientRect().height) || 0
      }));
    }
  };
  var updateRowAndColFixedPosition = function updateRowAndColFixedPosition2(tableContentElm, initialColumnMap) {
    rowAndColFixedPosition.value.clear();
    if (!tableContentElm)
      return;
    var thead = tableContentElm.querySelector("thead");
    thead && setFixedColPosition(thead.children, initialColumnMap);
    var tbody = tableContentElm.querySelector("tbody");
    var tfoot = tableContentElm.querySelector("tfoot");
    tbody && setFixedRowPosition(tbody.children, initialColumnMap, thead, tfoot);
    rowAndColFixedPosition.value = initialColumnMap;
  };
  var shadowLastScrollLeft;
  var updateColumnFixedShadow = function updateColumnFixedShadow2(target, extra) {
    if (!isFixedColumn.value || !target)
      return;
    var scrollLeft = target.scrollLeft;
    if (shadowLastScrollLeft === scrollLeft && (!extra || !extra.skipScrollLimit))
      return;
    shadowLastScrollLeft = scrollLeft;
    var isShowRight = target.clientWidth + scrollLeft < target.scrollWidth;
    var isShowLeft = scrollLeft > 0;
    if (showColumnShadow.left === isShowLeft && showColumnShadow.right === isShowRight)
      return;
    showColumnShadow.left = isShowLeft && isFixedLeftColumn.value;
    showColumnShadow.right = isShowRight && isFixedRightColumn.value;
  };
  var setIsLastOrFirstFixedCol = function setIsLastOrFirstFixedCol2(levelNodes) {
    for (var t = 0; t < levelNodes.length; t++) {
      var nodes = levelNodes[t];
      for (var i = 0, len2 = nodes.length; i < len2; i++) {
        var colMapInfo = nodes[i];
        var nextColMapInfo = nodes[i + 1];
        var parent = colMapInfo.parent;
        var isParentLastLeftFixedCol = !parent || (parent === null || parent === void 0 ? void 0 : parent.lastLeftFixedCol);
        if (isParentLastLeftFixedCol && colMapInfo.col.fixed === "left" && (nextColMapInfo === null || nextColMapInfo === void 0 ? void 0 : nextColMapInfo.col.fixed) !== "left") {
          colMapInfo.lastLeftFixedCol = true;
        }
        var lastColMapInfo = nodes[i - 1];
        var isParentFirstRightFixedCol = !parent || (parent === null || parent === void 0 ? void 0 : parent.firstRightFixedCol);
        if (isParentFirstRightFixedCol && colMapInfo.col.fixed === "right" && (lastColMapInfo === null || lastColMapInfo === void 0 ? void 0 : lastColMapInfo.col.fixed) !== "right") {
          colMapInfo.firstRightFixedCol = true;
        }
      }
    }
  };
  var updateFixedStatus = function updateFixedStatus2() {
    var _getColumnMap = getColumnMap(columns.value), newColumnsMap = _getColumnMap.newColumnsMap, levelNodes = _getColumnMap.levelNodes;
    setIsLastOrFirstFixedCol(levelNodes);
    var timer = setTimeout(function() {
      var _fixedRows$value;
      if (isFixedColumn.value || (_fixedRows$value = fixedRows.value) !== null && _fixedRows$value !== void 0 && _fixedRows$value.length) {
        updateRowAndColFixedPosition(tableContentRef.value, newColumnsMap);
      }
      clearTimeout(timer);
    }, 0);
    return function() {
      clearTimeout(timer);
    };
  };
  var updateFixedHeader = function updateFixedHeader2() {
    var timer = setTimeout(function() {
      if (!tableContentRef.value)
        return;
      isFixedHeader.value = tableContentRef.value.scrollHeight > tableContentRef.value.clientHeight;
      isWidthOverflow.value = tableContentRef.value.scrollWidth > tableContentRef.value.clientWidth;
      var pos = tableContentRef.value.getBoundingClientRect();
      virtualScrollHeaderPos.value = {
        top: pos.top,
        left: pos.left
      };
      clearTimeout(timer);
    }, 0);
  };
  var setTableElmWidth = function setTableElmWidth2(width) {
    if (tableElmWidth.value === width)
      return;
    tableElmWidth.value = width;
  };
  var updateTableWidth = function updateTableWidth2() {
    var _tableContentRef$valu, _tableElmRef$value;
    var rect = (_tableContentRef$valu = tableContentRef.value) === null || _tableContentRef$valu === void 0 ? void 0 : _tableContentRef$valu.getBoundingClientRect();
    if (!rect)
      return;
    var reduceWidth = isFixedHeader.value ? scrollbarWidth.value : 0;
    tableWidth.value = Math.floor(rect.width - reduceWidth - (props2.bordered ? 1 : 0));
    var elmRect = tableElmRef === null || tableElmRef === void 0 || (_tableElmRef$value = tableElmRef.value) === null || _tableElmRef$value === void 0 ? void 0 : _tableElmRef$value.getBoundingClientRect();
    (elmRect === null || elmRect === void 0 ? void 0 : elmRect.width) && setTableElmWidth(elmRect.width);
  };
  var updateAffixPosition = function updateAffixPosition2() {
    var _affixRef$paginationA, _affixRef$paginationA2, _affixRef$horizontalS, _affixRef$horizontalS2, _affixRef$headerTopAf, _affixRef$headerTopAf2, _affixRef$footerBotto, _affixRef$footerBotto2;
    (_affixRef$paginationA = affixRef.paginationAffixRef.value) === null || _affixRef$paginationA === void 0 || (_affixRef$paginationA2 = _affixRef$paginationA.handleScroll) === null || _affixRef$paginationA2 === void 0 ? void 0 : _affixRef$paginationA2.call(_affixRef$paginationA);
    (_affixRef$horizontalS = affixRef.horizontalScrollAffixRef.value) === null || _affixRef$horizontalS === void 0 || (_affixRef$horizontalS2 = _affixRef$horizontalS.handleScroll) === null || _affixRef$horizontalS2 === void 0 ? void 0 : _affixRef$horizontalS2.call(_affixRef$horizontalS);
    (_affixRef$headerTopAf = affixRef.headerTopAffixRef.value) === null || _affixRef$headerTopAf === void 0 || (_affixRef$headerTopAf2 = _affixRef$headerTopAf.handleScroll) === null || _affixRef$headerTopAf2 === void 0 ? void 0 : _affixRef$headerTopAf2.call(_affixRef$headerTopAf);
    (_affixRef$footerBotto = affixRef.footerBottomAffixRef.value) === null || _affixRef$footerBotto === void 0 || (_affixRef$footerBotto2 = _affixRef$footerBotto.handleScroll) === null || _affixRef$footerBotto2 === void 0 ? void 0 : _affixRef$footerBotto2.call(_affixRef$footerBotto);
  };
  var calculateThWidthList = function calculateThWidthList2(trList) {
    var widthMap = {};
    for (var i = 0, len2 = trList.length; i < len2; i++) {
      var thList = trList[i].children;
      for (var j = 0, thLen = thList.length; j < thLen; j++) {
        var th = thList[j];
        var colKey = th.dataset.colkey;
        widthMap[colKey] = th.getBoundingClientRect().width;
      }
    }
    return widthMap;
  };
  var updateThWidthList = function updateThWidthList2(trList) {
    if (trList instanceof HTMLCollection) {
      if (columnResizable.value)
        return;
      thWidthList.value = calculateThWidthList(trList);
    } else {
      thWidthList.value = thWidthList.value || {};
      Object.entries(trList).forEach(function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), colKey = _ref5[0], width = _ref5[1];
        thWidthList.value[colKey] = width;
      });
    }
    return thWidthList.value;
  };
  var updateThWidthListHandler = function updateThWidthListHandler2() {
    var timer = setTimeout(function() {
      var _tableContentRef$valu2;
      updateTableWidth();
      if (notNeedThWidthList.value)
        return;
      var thead = (_tableContentRef$valu2 = tableContentRef.value) === null || _tableContentRef$valu2 === void 0 ? void 0 : _tableContentRef$valu2.querySelector("thead");
      if (!thead)
        return;
      updateThWidthList(thead.children);
      clearTimeout(timer);
    }, 0);
  };
  var resetThWidthList = function resetThWidthList2() {
    thWidthList.value = {};
  };
  var emitScrollEvent = function emitScrollEvent2(e) {
    var _props$onScrollX, _props$onScrollY, _props$onScroll;
    (_props$onScrollX = props2.onScrollX) === null || _props$onScrollX === void 0 ? void 0 : _props$onScrollX.call(props2, {
      e
    });
    (_props$onScrollY = props2.onScrollY) === null || _props$onScrollY === void 0 ? void 0 : _props$onScrollY.call(props2, {
      e
    });
    (_props$onScroll = props2.onScroll) === null || _props$onScroll === void 0 ? void 0 : _props$onScroll.call(props2, {
      e
    });
  };
  var getThWidthList = function getThWidthList2(type) {
    if (type === "calculate") {
      var _tableContentRef$valu3;
      var trList = (_tableContentRef$valu3 = tableContentRef.value) === null || _tableContentRef$valu3 === void 0 || (_tableContentRef$valu3 = _tableContentRef$valu3.querySelector("thead")) === null || _tableContentRef$valu3 === void 0 ? void 0 : _tableContentRef$valu3.children;
      return calculateThWidthList(trList);
    }
    return thWidthList.value || {};
  };
  watch([data2, columns, bordered, tableLayout, tableContentWidth, isFixedHeader, isWidthOverflow, isFixedColumn, fixedRows, firstFullRow, lastFullRow], updateFixedStatus, {
    immediate: true
  });
  watch([isFixedColumn, columns], function() {
    var timer = setTimeout(function() {
      if (isFixedColumn.value) {
        updateColumnFixedShadow(tableContentRef.value);
      }
      clearTimeout(timer);
    }, 0);
  }, {
    immediate: true
  });
  watch([maxHeight, data2, columns, bordered], updateFixedHeader, {
    immediate: true
  });
  watch(finalColumns, function() {
    resetThWidthList();
  });
  watch([data2, bordered, tableLayout, fixedRows, isFixedHeader, headerAffixedTop, footerAffixedBottom, tableContentWidth], function() {
    var timer = setTimeout(function() {
      updateThWidthListHandler();
      updateAffixPosition();
      clearTimeout(timer);
    }, 60);
  }, {
    immediate: true
  });
  watch([finalColumns], function(_ref6, _ref7) {
    var _ref8 = _slicedToArray(_ref6, 1), finalColumns2 = _ref8[0];
    var _ref9 = _slicedToArray(_ref7, 1), preFinalColumns = _ref9[0];
    var finalColKeys = finalColumns2.map(function(t) {
      return t.colKey;
    });
    var preColKeys = preFinalColumns.map(function(t) {
      return t.colKey;
    });
    if (finalColKeys.length < preColKeys.length) {
      var reduceKeys = xorWith_1(preColKeys, finalColKeys);
      var thWidthList2 = getThWidthList("calculate");
      var reduceWidth = 0;
      reduceKeys.forEach(function(key2) {
        reduceWidth += thWidthList2[key2];
      });
      var oldTotalWidth = Object.values(thWidthList2).reduce(function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var n = arguments.length > 1 ? arguments[1] : void 0;
        return r + n;
      });
      setTableElmWidth(oldTotalWidth - reduceWidth);
    }
  });
  var refreshTable = function refreshTable2() {
    updateThWidthListHandler();
    updateFixedHeader();
    updateAffixPosition();
    if (isFixedColumn.value || isFixedHeader.value) {
      updateFixedStatus();
      updateColumnFixedShadow(tableContentRef.value, {
        skipScrollLimit: true
      });
    }
  };
  var onResize = debounce_1(function() {
    refreshTable();
  }, 30);
  var resizeObserver = null;
  function addTableResizeObserver(tableElement) {
    if (getIEVersion() < 11 || typeof window.ResizeObserver === "undefined")
      return;
    off$1(window, "resize", onResize);
    resizeObserver = new window.ResizeObserver(function() {
      var timer = setTimeout(function() {
        refreshTable();
        clearTimeout(timer);
      }, 60);
    });
    resizeObserver.observe(tableElement);
    tableRef.value = tableElement;
  }
  onMounted(function() {
    var scrollWidth = getScrollbarWidthWithCSS();
    scrollbarWidth.value = scrollWidth;
    updateThWidthListHandler();
    var isWatchResize = isFixedColumn.value || isFixedHeader.value || !notNeedThWidthList.value || !data2.value.length;
    if (isWatchResize && getIEVersion() < 11 || typeof window.ResizeObserver === "undefined") {
      on$1(window, "resize", onResize);
    }
  });
  onBeforeUnmount(function() {
    var _resizeObserver, _resizeObserver2;
    off$1(window, "resize", onResize);
    (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 ? void 0 : _resizeObserver.unobserve(tableRef.value);
    (_resizeObserver2 = resizeObserver) === null || _resizeObserver2 === void 0 ? void 0 : _resizeObserver2.disconnect();
  });
  var setData = function setData2(dataSource) {
    data2.value = dataSource;
  };
  var updateTableAfterColumnResize = function updateTableAfterColumnResize2() {
    updateFixedStatus();
    updateFixedHeader();
  };
  return {
    tableWidth,
    tableElmWidth,
    thWidthList,
    isFixedHeader,
    isWidthOverflow,
    tableContentRef,
    isFixedColumn,
    showColumnShadow,
    rowAndColFixedPosition,
    virtualScrollHeaderPos,
    scrollbarWidth,
    setData,
    refreshTable,
    setTableElmWidth,
    emitScrollEvent,
    updateThWidthListHandler,
    updateColumnFixedShadow,
    setUseFixedTableElmRef,
    getThWidthList,
    updateThWidthList,
    addTableResizeObserver,
    updateTableAfterColumnResize
  };
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
function _objectSpread$i(target) {
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
function usePagination(props2, context) {
  var _toRefs = toRefs(props2), pagination = _toRefs.pagination, data2 = _toRefs.data, disableDataPage = _toRefs.disableDataPage;
  var _useConfig = useConfig(), classPrefix = _useConfig.classPrefix;
  var innerPagination = ref(props2.pagination);
  var dataSource = ref([]);
  var isPaginateData = ref(false);
  var updateDataSourceAndPaginate = function updateDataSourceAndPaginate2() {
    var current = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
    var data22 = props2.data;
    var t = Boolean(!disableDataPage.value && data22.length > pageSize);
    isPaginateData.value = t;
    if (t) {
      var start = (current - 1) * pageSize;
      var end = current * pageSize;
      dataSource.value = data22.slice(start, end);
    } else {
      dataSource.value = data22;
    }
  };
  watch(function() {
    var _pagination$value, _pagination$value2;
    return [(_pagination$value = pagination.value) === null || _pagination$value === void 0 ? void 0 : _pagination$value.current, (_pagination$value2 = pagination.value) === null || _pagination$value2 === void 0 ? void 0 : _pagination$value2.pageSize, data2.value.length, disableDataPage];
  }, function() {
    if (!pagination.value || !pagination.value.current)
      return;
    var _pagination$value3 = pagination.value, current = _pagination$value3.current, pageSize = _pagination$value3.pageSize;
    innerPagination.value = {
      current,
      pageSize
    };
    updateDataSourceAndPaginate(pagination.value.current, pagination.value.pageSize);
  }, {
    immediate: true
  });
  watch([data2], function() {
    var _innerPagination$valu, _innerPagination$valu2;
    if (!pagination.value || !pagination.value.defaultCurrent)
      return;
    updateDataSourceAndPaginate((_innerPagination$valu = innerPagination.value.current) !== null && _innerPagination$valu !== void 0 ? _innerPagination$valu : pagination.value.defaultCurrent, (_innerPagination$valu2 = innerPagination.value.pageSize) !== null && _innerPagination$valu2 !== void 0 ? _innerPagination$valu2 : pagination.value.defaultPageSize);
  }, {
    immediate: true
  });
  var renderPagination = function renderPagination2() {
    if (!props2.pagination)
      return null;
    var paginationProps = _objectSpread$i({}, props2.pagination);
    delete paginationProps.onChange;
    return createVNode("div", {
      "class": "".concat(classPrefix.value, "-table__pagination")
    }, [createVNode(Pagination, mergeProps(paginationProps, {
      "onChange": function onChange(pageInfo) {
        var _props$pagination, _props$pagination$onC, _props$onPageChange;
        (_props$pagination = props2.pagination) === null || _props$pagination === void 0 || (_props$pagination$onC = _props$pagination.onChange) === null || _props$pagination$onC === void 0 ? void 0 : _props$pagination$onC.call(_props$pagination, pageInfo);
        innerPagination.value = pageInfo;
        updateDataSourceAndPaginate(pageInfo.current, pageInfo.pageSize);
        (_props$onPageChange = props2.onPageChange) === null || _props$onPageChange === void 0 ? void 0 : _props$onPageChange.call(props2, pageInfo, dataSource.value);
      }
    }), {
      totalContent: context.slots.totalContent
    })]);
  };
  return {
    isPaginateData,
    dataSource,
    innerPagination,
    renderPagination
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var useVirtualScroll2 = function useVirtualScroll3(container, params) {
  var visibleData = ref([]);
  var translateY = ref(0);
  var scrollHeight = ref(0);
  var trScrollTopHeightList = ref([]);
  var trHeightList = ref([]);
  var containerHeight = ref(0);
  var containerWidth = ref(0);
  var startAndEndIndex = ref([0, 15]);
  var tScroll = computed(function() {
    var _scroll$isFixedRowHei;
    var scroll = params.value.scroll;
    if (!scroll)
      return {};
    return {
      bufferSize: scroll.bufferSize || 10,
      isFixedRowHeight: (_scroll$isFixedRowHei = scroll.isFixedRowHeight) !== null && _scroll$isFixedRowHei !== void 0 ? _scroll$isFixedRowHei : false,
      rowHeight: scroll.rowHeight || 47,
      threshold: scroll.threshold || 100,
      type: scroll.type
    };
  });
  var isVirtualScroll = computed(function() {
    var data2 = params.value.data;
    return tScroll.value.type === "virtual" && tScroll.value.threshold < data2.length;
  });
  var getTrScrollTopHeightList = function getTrScrollTopHeightList2(trHeightList2, containerHeight2) {
    var list = [];
    var data2 = params.value.data;
    for (var i = 0, len2 = data2.length; i < len2; i++) {
      list[i] = (list[i - 1] || containerHeight2) + (trHeightList2[i] || tScroll.value.rowHeight);
    }
    return list;
  };
  var tripleBufferSize = computed(function() {
    return tScroll.value.bufferSize * 3;
  });
  var updateVisibleData = function updateVisibleData2(trScrollTopHeightList2, scrollTop) {
    var currentIndex = -1;
    for (var i = 0, len2 = trScrollTopHeightList2.length; i < len2; i++) {
      if (trScrollTopHeightList2[i] > scrollTop) {
        currentIndex = i;
        break;
      }
    }
    if (currentIndex < 0)
      return;
    var startIndex = Math.min(currentIndex, trScrollTopHeightList2.length - tripleBufferSize.value);
    var endIndex = startIndex + tripleBufferSize.value;
    if (startAndEndIndex.value.join() !== [startIndex, endIndex].join() && startIndex >= 0) {
      visibleData.value = params.value.data.slice(startIndex, endIndex);
      var lastScrollTop = trScrollTopHeightList2[startIndex - 1];
      var top = lastScrollTop > 0 ? lastScrollTop - containerHeight.value : 0;
      translateY.value = top;
      startAndEndIndex.value = [startIndex, endIndex];
    }
  };
  var handleRowMounted = function handleRowMounted2(rowData) {
    var _rowData$ref$value;
    if (!isVirtualScroll.value || !rowData || tScroll.value.isFixedRowHeight || !container.value)
      return;
    var trHeight = (_rowData$ref$value = rowData.ref.value) === null || _rowData$ref$value === void 0 ? void 0 : _rowData$ref$value.getBoundingClientRect().height;
    var rowIndex = rowData.data.__VIRTUAL_SCROLL_INDEX;
    var newTrHeightList = trHeightList.value;
    if (newTrHeightList[rowIndex] !== trHeight) {
      newTrHeightList[rowIndex] = trHeight;
      var scrollTopHeightList = getTrScrollTopHeightList(newTrHeightList, containerHeight.value);
      trScrollTopHeightList.value = scrollTopHeightList;
      var lastIndex = scrollTopHeightList.length - 1;
      scrollHeight.value = scrollTopHeightList[lastIndex] - containerHeight.value;
      updateVisibleData(scrollTopHeightList, container.value.scrollTop);
    }
  };
  var handleScroll = function handleScroll2() {
    if (!isVirtualScroll.value)
      return;
    updateVisibleData(trScrollTopHeightList.value, container.value.scrollTop);
  };
  var refreshVirtualScroll = function refreshVirtualScroll2(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), contentRect = _ref2[0].contentRect;
    var maxScrollbarWidth = 16;
    if (Math.abs(contentRect.width - containerWidth.value) > maxScrollbarWidth) {
      container.value.scrollTop = 0;
      translateY.value = 0;
    }
    containerWidth.value = contentRect.width;
    containerHeight.value = contentRect.height;
  };
  var addIndexToData = function addIndexToData2(data2) {
    data2.forEach(function(item, index2) {
      item["__VIRTUAL_SCROLL_INDEX"] = index2;
    });
  };
  var updateScrollTop = function updateScrollTop2(_ref3) {
    var index2 = _ref3.index, _ref3$top = _ref3.top, top = _ref3$top === void 0 ? 0 : _ref3$top, behavior = _ref3.behavior;
    var scrollTop = trScrollTopHeightList.value[index2] - containerHeight.value - top;
    container.value.scrollTo({
      top: scrollTop,
      behavior: behavior || "auto"
    });
  };
  var scrollToElement = function scrollToElement2(p) {
    updateScrollTop(p);
    if (!tScroll.value.isFixedRowHeight) {
      var _p$time;
      var duration = (_p$time = p.time) !== null && _p$time !== void 0 ? _p$time : 60;
      var timer = setTimeout(function() {
        updateScrollTop(p);
        clearTimeout(timer);
      }, duration);
    }
  };
  useResizeObserver(isVirtualScroll.value ? container : void 0, refreshVirtualScroll);
  watch(function() {
    return [[].concat(_toConsumableArray(params.value.data), [tScroll, isVirtualScroll, container])];
  }, function() {
    if (!isVirtualScroll.value)
      return;
    var data2 = params.value.data;
    addIndexToData(data2);
    var startIndex = startAndEndIndex.value[0];
    visibleData.value = data2.slice(startIndex, startIndex + tripleBufferSize.value);
    var timer = setTimeout(function() {
      if (container.value) {
        containerHeight.value = container.value.getBoundingClientRect().height;
        var scrollTopHeightList = getTrScrollTopHeightList(trHeightList.value || [], containerHeight.value);
        trScrollTopHeightList.value = scrollTopHeightList;
      }
      clearTimeout(timer);
    }, 0);
  }, {
    immediate: true
  });
  return {
    visibleData,
    translateY,
    scrollHeight,
    isVirtualScroll,
    handleScroll,
    handleRowMounted,
    scrollToElement
  };
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useAffix(props2) {
  var tableContentRef = ref();
  var affixHeaderRef = ref();
  var affixFooterRef = ref();
  var horizontalScrollbarRef = ref();
  var paginationRef = ref();
  var showAffixHeader = ref(true);
  var showAffixFooter = ref(true);
  var showAffixPagination = ref(true);
  var isVirtualScroll = computed(function() {
    return props2.scroll && props2.scroll.type === "virtual" && (props2.scroll.threshold || 100) < props2.data.length;
  });
  var isAffixed = computed(function() {
    return !!(props2.headerAffixedTop || props2.footerAffixedBottom || props2.horizontalScrollAffixedBottom);
  });
  var lastScrollLeft = 0;
  var onHorizontalScroll = function onHorizontalScroll2(scrollElement) {
    if (!isAffixed.value && !isVirtualScroll.value)
      return;
    var target = scrollElement;
    if (!target && tableContentRef.value) {
      lastScrollLeft = 0;
      target = tableContentRef.value;
    }
    if (!target)
      return;
    var left = target.scrollLeft;
    if (lastScrollLeft === left)
      return;
    lastScrollLeft = left;
    var toUpdateScrollElement = [tableContentRef.value, affixHeaderRef.value, affixFooterRef.value, horizontalScrollbarRef.value];
    for (var i = 0, len2 = toUpdateScrollElement.length; i < len2; i++) {
      if (toUpdateScrollElement[i] && scrollElement !== toUpdateScrollElement[i]) {
        toUpdateScrollElement[i].scrollLeft = left;
      }
    }
  };
  var isAffixedBottomElementShow = function isAffixedBottomElementShow2(elementRect, tableRect, headerHeight) {
    return tableRect.top + headerHeight < elementRect.top && elementRect.top > elementRect.height;
  };
  var getOffsetTop = function getOffsetTop2(props22) {
    if (isBoolean_1(props22))
      return 0;
    return props22.offsetTop || 0;
  };
  var updateAffixHeaderOrFooter = function updateAffixHeaderOrFooter2() {
    var _tableContentRef$valu, _tableContentRef$valu2, _affixFooterRef$value;
    if (!isAffixed.value && !isVirtualScroll.value)
      return;
    var pos = (_tableContentRef$valu = tableContentRef.value) === null || _tableContentRef$valu === void 0 ? void 0 : _tableContentRef$valu.getBoundingClientRect();
    var headerRect = (_tableContentRef$valu2 = tableContentRef.value) === null || _tableContentRef$valu2 === void 0 || (_tableContentRef$valu2 = _tableContentRef$valu2.querySelector("thead")) === null || _tableContentRef$valu2 === void 0 ? void 0 : _tableContentRef$valu2.getBoundingClientRect();
    var headerHeight = (headerRect === null || headerRect === void 0 ? void 0 : headerRect.height) || 0;
    var footerRect = (_affixFooterRef$value = affixFooterRef.value) === null || _affixFooterRef$value === void 0 ? void 0 : _affixFooterRef$value.getBoundingClientRect();
    if ((props2.headerAffixedTop || isVirtualScroll.value) && affixHeaderRef.value) {
      var offsetTop = getOffsetTop(props2.headerAffixProps || props2.headerAffixedTop);
      var footerHeight = (footerRect === null || footerRect === void 0 ? void 0 : footerRect.height) || 0;
      var r = Math.abs(pos.top) < pos.height - headerHeight - offsetTop - footerHeight;
      if (isVirtualScroll.value) {
        r = pos.top > -1 * headerRect.height;
      }
      showAffixHeader.value = r;
    }
    if (props2.footerAffixedBottom && affixFooterRef !== null && affixFooterRef !== void 0 && affixFooterRef.value) {
      showAffixFooter.value = isAffixedBottomElementShow(footerRect, pos, headerHeight);
    } else if (props2.horizontalScrollAffixedBottom && horizontalScrollbarRef !== null && horizontalScrollbarRef !== void 0 && horizontalScrollbarRef.value) {
      var horizontalScrollbarRect = horizontalScrollbarRef.value.getBoundingClientRect();
      showAffixFooter.value = isAffixedBottomElementShow(horizontalScrollbarRect, pos, headerHeight);
    }
    if (props2.paginationAffixedBottom && paginationRef.value) {
      var pageRect = paginationRef.value.getBoundingClientRect();
      showAffixPagination.value = isAffixedBottomElementShow(pageRect, pos, headerHeight);
    }
  };
  var onDocumentScroll = function onDocumentScroll2() {
    updateAffixHeaderOrFooter();
  };
  var onFootScroll = function onFootScroll2() {
    onHorizontalScroll(affixFooterRef.value);
  };
  var onHeaderScroll = function onHeaderScroll2() {
    onHorizontalScroll(affixHeaderRef.value);
  };
  var horizontalScrollbarScroll = function horizontalScrollbarScroll2() {
    onHorizontalScroll(horizontalScrollbarRef.value);
  };
  var onTableContentScroll = function onTableContentScroll2() {
    onHorizontalScroll(tableContentRef.value);
  };
  var onFootMouseEnter = function onFootMouseEnter2() {
    on$1(affixFooterRef.value, "scroll", onFootScroll);
  };
  var onFootMouseLeave = function onFootMouseLeave2() {
    off$1(affixFooterRef.value, "scroll", onFootScroll);
  };
  var onHeaderMouseEnter = function onHeaderMouseEnter2() {
    on$1(affixHeaderRef.value, "scroll", onHeaderScroll);
  };
  var onHeaderMouseLeave = function onHeaderMouseLeave2() {
    off$1(affixHeaderRef.value, "scroll", onHeaderScroll);
  };
  var onScrollbarMouseEnter = function onScrollbarMouseEnter2() {
    on$1(horizontalScrollbarRef.value, "scroll", horizontalScrollbarScroll);
  };
  var onScrollbarMouseLeave = function onScrollbarMouseLeave2() {
    off$1(horizontalScrollbarRef.value, "scroll", horizontalScrollbarScroll);
  };
  var onTableContentMouseEnter = function onTableContentMouseEnter2() {
    on$1(tableContentRef.value, "scroll", onTableContentScroll);
  };
  var onTableContentMouseLeave = function onTableContentMouseLeave2() {
    off$1(tableContentRef.value, "scroll", onTableContentScroll);
  };
  var addHorizontalScrollListeners = function addHorizontalScrollListeners2() {
    if (affixHeaderRef.value) {
      on$1(affixHeaderRef.value, "mouseenter", onHeaderMouseEnter);
      on$1(affixHeaderRef.value, "mouseleave", onHeaderMouseLeave);
    }
    if (props2.footerAffixedBottom && affixFooterRef.value) {
      on$1(affixFooterRef.value, "mouseenter", onFootMouseEnter);
      on$1(affixFooterRef.value, "mouseleave", onFootMouseLeave);
    }
    if (props2.horizontalScrollAffixedBottom && horizontalScrollbarRef.value) {
      on$1(horizontalScrollbarRef.value, "mouseenter", onScrollbarMouseEnter);
      on$1(horizontalScrollbarRef.value, "mouseleave", onScrollbarMouseLeave);
    }
    if ((isAffixed.value || isVirtualScroll.value) && tableContentRef.value) {
      on$1(tableContentRef.value, "mouseenter", onTableContentMouseEnter);
      on$1(tableContentRef.value, "mouseleave", onTableContentMouseLeave);
    }
  };
  var removeHorizontalScrollListeners = function removeHorizontalScrollListeners2() {
    if (affixHeaderRef.value) {
      off$1(affixHeaderRef.value, "mouseenter", onHeaderMouseEnter);
      off$1(affixHeaderRef.value, "mouseleave", onHeaderMouseLeave);
    }
    if (affixFooterRef.value) {
      off$1(affixFooterRef.value, "mouseenter", onFootMouseEnter);
      off$1(affixFooterRef.value, "mouseleave", onFootMouseLeave);
    }
    if (tableContentRef.value) {
      off$1(tableContentRef.value, "mouseenter", onTableContentMouseEnter);
      off$1(tableContentRef.value, "mouseleave", onTableContentMouseLeave);
    }
    if (horizontalScrollbarRef.value) {
      off$1(horizontalScrollbarRef.value, "mouseenter", onScrollbarMouseEnter);
      off$1(horizontalScrollbarRef.value, "mouseleave", onScrollbarMouseLeave);
    }
  };
  var addVerticalScrollListener = function addVerticalScrollListener2() {
    if (!isAffixed.value && !props2.paginationAffixedBottom)
      return;
    var timer = setTimeout(function() {
      if (isAffixed.value || props2.paginationAffixedBottom) {
        on$1(document, "scroll", onDocumentScroll);
      } else {
        off$1(document, "scroll", onDocumentScroll);
      }
      clearTimeout(timer);
    });
  };
  watch([affixHeaderRef, affixFooterRef, horizontalScrollbarRef, tableContentRef], function() {
    addHorizontalScrollListeners();
    onHorizontalScroll();
    updateAffixHeaderOrFooter();
  });
  watch(isAffixed, addVerticalScrollListener);
  watch(function() {
    return [props2.data, props2.columns, props2.headerAffixedTop, props2.footerAffixedBottom, props2.horizontalScrollAffixedBottom];
  }, function() {
    onHorizontalScroll();
  });
  onBeforeMount(function() {
    off$1(document, "scroll", onDocumentScroll);
    removeHorizontalScrollListeners();
  });
  var setTableContentRef = function setTableContentRef2(tableContent) {
    tableContentRef.value = tableContent;
    addVerticalScrollListener();
  };
  return {
    showAffixHeader,
    showAffixFooter,
    showAffixPagination,
    affixHeaderRef,
    affixFooterRef,
    horizontalScrollbarRef,
    paginationRef,
    onHorizontalScroll,
    setTableContentRef,
    updateAffixHeaderOrFooter
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function formatRowAttributes(attributes, params) {
  if (!attributes)
    return void 0;
  var attrList = attributes instanceof Array ? attributes : [attributes];
  var result = {};
  for (var i = 0; i < attrList.length; i++) {
    var attrItem = attrList[i];
    if (!attrItem)
      continue;
    var attrProperty = isFunction_1(attrItem) ? attrItem(params) : attrItem;
    result = attrProperty instanceof Array ? formatRowAttributes(attrProperty, params) : Object.assign(result, attrProperty);
  }
  return result;
}
function formatRowClassNames(rowClassNames, params, rowKey) {
  var rowClassList = rowClassNames instanceof Array ? rowClassNames : [rowClassNames];
  var row = params.row, rowIndex = params.rowIndex;
  var customClasses = [];
  for (var i = 0, len2 = rowClassList.length; i < len2; i++) {
    var rName = rowClassList[i];
    var tClass = isFunction_1(rName) ? rName(params) : rName;
    if (isObject_1(tClass) && !(tClass instanceof Array)) {
      tClass[rowIndex] && (tClass = tClass[rowIndex]);
      var rowId = get_1(row, rowKey || "id");
      tClass[rowId] && (tClass = tClass[rowId]);
    } else if (tClass instanceof Array) {
      tClass = formatRowClassNames(tClass, params, rowKey);
    }
    customClasses = customClasses.concat(tClass);
  }
  return customClasses;
}
function formatClassNames(classNames, params) {
  var classes = classNames instanceof Array ? classNames : [classNames];
  var arr = [];
  for (var i = 0, len2 = classes.length; i < len2; i++) {
    var cls = classes[i];
    if (isFunction_1(cls)) {
      arr.push(cls(params));
    } else {
      arr.push(cls);
    }
  }
  return arr;
}
function getCurrentRowByKey(columns, key2) {
  if (!columns || !key2)
    return;
  var col = columns === null || columns === void 0 ? void 0 : columns.find(function(t) {
    return t.colKey === key2;
  });
  if (col)
    return col;
  for (var i = 0, len2 = columns.length; i < len2; i++) {
    var _columns$i;
    if ((_columns$i = columns[i]) !== null && _columns$i !== void 0 && (_columns$i = _columns$i.children) !== null && _columns$i !== void 0 && _columns$i.length) {
      var _columns$i2;
      return getCurrentRowByKey((_columns$i2 = columns[i]) === null || _columns$i2 === void 0 ? void 0 : _columns$i2.children, key2);
    }
  }
}
function getAffixProps(mainAffixProps, subAffixProps) {
  if (_typeof$2(mainAffixProps) === "object")
    return mainAffixProps;
  if (_typeof$2(subAffixProps) === "object")
    return subAffixProps;
  return {};
}
function getEditableKeysMap(keys2, list, rowKey) {
  var map = {};
  for (var i = 0, len2 = list.length; i < len2; i++) {
    var rowValue = get_1(list[i], rowKey);
    if (keys2.includes(rowValue)) {
      map[rowValue] = true;
    }
  }
  return map;
}
function getColumnDataByKey(columns, colKey) {
  for (var i = 0, len2 = columns.length; i < len2; i++) {
    var _columns$i$children;
    if (columns[i].colKey === colKey)
      return columns[i];
    if ((_columns$i$children = columns[i].children) !== null && _columns$i$children !== void 0 && _columns$i$children.length) {
      var t = getColumnDataByKey(columns[i].children, colKey);
      if (t)
        return t;
    }
  }
  return null;
}
function getColumnIndexByKey(columns, colKey) {
  for (var i = 0, len2 = columns.length; i < len2; i++) {
    var _columns$i$children2;
    if (columns[i].colKey === colKey) {
      return i;
    }
    if ((_columns$i$children2 = columns[i].children) !== null && _columns$i$children2 !== void 0 && _columns$i$children2.length) {
      var t = getColumnDataByKey(columns[i].children, colKey);
      if (t)
        return i;
    }
  }
  return -1;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useLazyLoad(containerRef, childRef, params) {
  var tRowHeight = computed(function() {
    return Math.max(params.rowHeight || 48, 48);
  });
  var isInit = ref(false);
  var hasLazyLoadHolder = computed(function() {
    return (params === null || params === void 0 ? void 0 : params.type) === "lazy" && !isInit.value;
  });
  var requestAnimationFrame = !isServer && window.requestAnimationFrame || function(cb) {
    return setTimeout(cb, 16.6);
  };
  var init = function init2() {
    if (!isInit.value) {
      requestAnimationFrame(function() {
        isInit.value = true;
      });
    }
  };
  onMounted(function() {
    if ((params === null || params === void 0 ? void 0 : params.type) !== "lazy")
      return;
    nextTick(function() {
      var bufferSize = Math.max(10, params.bufferSize || 10);
      var height = tRowHeight.value * bufferSize;
      observe(childRef.value, containerRef.value, init, height);
    });
  });
  return {
    hasLazyLoadHolder,
    tRowHeight
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function getCellKey(row, rowKey, colKey, colIndex) {
  var rowValue = get_1(row, rowKey);
  if (rowValue === void 0) {
    log.error("Table", "rowKey is wrong, can not get unique identifier of row.");
  }
  return [rowValue, colKey || colIndex].join("_");
}
function useRowspanAndColspan(data2, columns, rowKey, rowspanAndColspan) {
  var skipSpansMap = ref(/* @__PURE__ */ new Map());
  var onTrRowspanOrColspan = function onTrRowspanOrColspan2(params, skipSpansValue) {
    var rowIndex = params.rowIndex, colIndex = params.colIndex;
    if (!skipSpansValue.rowspan && !skipSpansValue.colspan)
      return;
    var maxRowIndex = rowIndex + (skipSpansValue.rowspan || 1);
    var maxColIndex = colIndex + (skipSpansValue.colspan || 1);
    for (var i = rowIndex; i < maxRowIndex; i++) {
      for (var j = colIndex; j < maxColIndex; j++) {
        if (i !== rowIndex || j !== colIndex) {
          if (!data2.value[i] || !columns.value[j])
            return;
          var cellKey = getCellKey(data2.value[i], rowKey.value, columns.value[j].colKey, j);
          var state = skipSpansMap.value.get(cellKey) || {};
          state.skipped = true;
          skipSpansMap.value.set(cellKey, state);
        }
      }
    }
  };
  var updateSkipSpansMap = function updateSkipSpansMap2(data22, columns2, rowspanAndColspan2) {
    var _skipSpansMap$value;
    (_skipSpansMap$value = skipSpansMap.value) === null || _skipSpansMap$value === void 0 ? void 0 : _skipSpansMap$value.clear();
    if (!data22 || !rowspanAndColspan2)
      return;
    for (var i = 0, len2 = data22.length; i < len2; i++) {
      var row = data22[i];
      for (var j = 0, colLen = columns2.length; j < colLen; j++) {
        var col = columns2[j];
        var params = {
          row,
          col,
          rowIndex: i,
          colIndex: j
        };
        var cellKey = getCellKey(row, rowKey.value, col.colKey, j);
        var state = skipSpansMap.value.get(cellKey) || {};
        var o = rowspanAndColspan2(params) || {};
        if (o.rowspan || o.colspan || state.rowspan || state.colspan) {
          o.rowspan && (state.rowspan = o.rowspan);
          o.colspan && (state.colspan = o.colspan);
          skipSpansMap.value.set(cellKey, state);
        }
        onTrRowspanOrColspan === null || onTrRowspanOrColspan === void 0 ? void 0 : onTrRowspanOrColspan(params, state);
      }
    }
  };
  watch(function() {
    return [data2.value, columns.value, rowspanAndColspan];
  }, function() {
    updateSkipSpansMap(data2.value, columns.value, rowspanAndColspan === null || rowspanAndColspan === void 0 ? void 0 : rowspanAndColspan.value);
  }, {
    immediate: true
  });
  return {
    skipSpansMap
  };
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
function _objectSpread$h(target) {
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
function _isSlot$3(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var TABLE_PROPS = ["rowKey", "rowClassName", "columns", "fixedRows", "footData", "rowAttributes", "rowspanAndColspan", "scroll", "cellEmptyContent", "pagination", "attach", "onCellClick", "onRowClick", "onRowDblclick", "onRowMouseover", "onRowMousedown", "onRowMouseenter", "onRowMouseleave", "onRowMouseup"];
var ROW_LISTENERS = ["click", "dblclick", "mouseover", "mousedown", "mouseenter", "mouseleave", "mouseup"];
function renderCell(params, slots, extra) {
  var col = params.col, row = params.row, rowIndex = params.rowIndex;
  if (col.colKey === "serial-number") {
    var _ref = (extra === null || extra === void 0 ? void 0 : extra.pagination) || {}, current = _ref.current, pageSize = _ref.pageSize, defaultCurrent = _ref.defaultCurrent, defaultPageSize = _ref.defaultPageSize;
    var tCurrent = current || defaultCurrent;
    var tPageSize = pageSize || defaultPageSize;
    if (tPageSize && tCurrent) {
      return tPageSize * (tCurrent - 1) + rowIndex + 1;
    }
    return rowIndex + 1;
  }
  if (isFunction_1(col.cell)) {
    return col.cell(h, params);
  }
  if (slots[col.colKey]) {
    return slots[col.colKey](params);
  }
  if (isString_1(col.cell) && slots[col.cell]) {
    return slots[col.cell](params);
  }
  if (isFunction_1(col.render)) {
    return col.render(h, _objectSpread$h(_objectSpread$h({}, params), {}, {
      type: "cell"
    }));
  }
  var r = get_1(row, col.colKey);
  if (![void 0, "", null].includes(r))
    return r;
  if (extra !== null && extra !== void 0 && extra.cellEmptyContent) {
    return isFunction_1(extra.cellEmptyContent) ? extra.cellEmptyContent(h, params) : extra.cellEmptyContent;
  }
  if (slots.cellEmptyContent)
    return slots.cellEmptyContent(params);
  if (slots["cell-empty-content"])
    return slots["cell-empty-content"](params);
  return r;
}
var TrElement = defineComponent({
  name: "TR",
  props: _objectSpread$h(_objectSpread$h({
    row: Object,
    rowIndex: Number,
    dataLength: Number,
    ellipsisOverlayClassName: String,
    classPrefix: String,
    rowAndColFixedPosition: Map,
    skipSpansMap: Map,
    virtualConfig: Object
  }, pick_1(baseTableProps, TABLE_PROPS)), {}, {
    tableElm: {},
    tableContentElm: {}
  }),
  emits: ["row-mounted"],
  setup: function setup23(props2, context) {
    var _toRefs = toRefs(props2), tableContentElm = _toRefs.tableContentElm;
    var trRef = ref(null);
    var _useClassName = useClassName(), tdEllipsisClass = _useClassName.tdEllipsisClass, tableBaseClass = _useClassName.tableBaseClass, tableColFixedClasses = _useClassName.tableColFixedClasses, tableRowFixedClasses = _useClassName.tableRowFixedClasses, tdAlignClasses = _useClassName.tdAlignClasses, tableDraggableClasses = _useClassName.tableDraggableClasses;
    var trStyles = computed(function() {
      return getRowFixedStyles(get_1(props2.row, props2.rowKey || "id"), props2.rowIndex, props2.dataLength, props2.fixedRows, props2.rowAndColFixedPosition, tableRowFixedClasses);
    });
    var trAttributes = computed(function() {
      return formatRowAttributes(props2.rowAttributes, {
        row: props2.row,
        rowIndex: props2.rowIndex,
        type: "body"
      }) || {};
    });
    var classes = computed(function() {
      var _trStyles$value;
      var customClasses = formatRowClassNames(props2.rowClassName, {
        row: props2.row,
        rowIndex: props2.rowIndex,
        type: "body"
      }, props2.rowKey || "id");
      return [(_trStyles$value = trStyles.value) === null || _trStyles$value === void 0 ? void 0 : _trStyles$value.classes, customClasses].filter(function(v) {
        return v;
      });
    });
    var _useLazyLoad = useLazyLoad(tableContentElm, trRef, reactive(_objectSpread$h(_objectSpread$h({}, props2.scroll), {}, {
      rowIndex: props2.rowIndex
    }))), hasLazyLoadHolder = _useLazyLoad.hasLazyLoadHolder, tRowHeight = _useLazyLoad.tRowHeight;
    var getTrListeners = function getTrListeners2(row, rowIndex) {
      var trListeners = {};
      ROW_LISTENERS.forEach(function(eventName) {
        trListeners["on".concat(upperFirst_1(eventName))] = function(e) {
          var _props;
          var p = {
            e,
            row,
            index: rowIndex
          };
          (_props = props2["onRow".concat(upperFirst_1(eventName))]) === null || _props === void 0 ? void 0 : _props.call(props2, p);
        };
      });
      return trListeners;
    };
    watch([trRef], function() {
      var _props$virtualConfig;
      if ((_props$virtualConfig = props2.virtualConfig) !== null && _props$virtualConfig !== void 0 && _props$virtualConfig.isVirtualScroll.value) {
        context.emit("row-mounted", {
          ref: trRef,
          data: props2.row
        });
      }
    });
    function renderEllipsisCell(cellParams, params) {
      var cellNode = params.cellNode;
      var col = cellParams.col, colIndex = cellParams.colIndex;
      var content = isFunction_1(col.ellipsis) ? col.ellipsis(h, cellParams) : void 0;
      if (_typeof$2(col.ellipsis) === "object" && isFunction_1(col.ellipsis.content)) {
        content = col.ellipsis.content(h, cellParams);
      }
      var tooltipProps = {};
      if (_typeof$2(col.ellipsis) === "object") {
        tooltipProps = "props" in col.ellipsis ? col.ellipsis.props : col.ellipsis || void 0;
      }
      var tableElement = props2.tableElm;
      var placement = colIndex === 0 ? "top-left" : "top";
      placement = colIndex === props2.columns.length - 1 ? "top-right" : placement;
      return createVNode(TEllipsis, {
        "placement": placement,
        "attach": tableElement ? function() {
          return tableElement;
        } : void 0,
        "tooltipContent": content && function() {
          return content;
        },
        "tooltipProps": tooltipProps,
        "overlayClassName": props2.ellipsisOverlayClassName,
        "classPrefix": props2.classPrefix
      }, _isSlot$3(cellNode) ? cellNode : {
        "default": function _default14() {
          return [cellNode];
        }
      });
    }
    function renderTd(params, extra) {
      var _ref2;
      var col = params.col, colIndex = params.colIndex, rowIndex = params.rowIndex;
      var cellSpans = extra.cellSpans, dataLength = extra.dataLength, rowAndColFixedPosition = extra.rowAndColFixedPosition;
      var cellNode = renderCell(params, context.slots, {
        cellEmptyContent: extra.cellEmptyContent,
        pagination: props2.pagination
      });
      var tdStyles = getColumnFixedStyles(col, colIndex, rowAndColFixedPosition, tableColFixedClasses);
      var customClasses = formatClassNames(col.className, _objectSpread$h(_objectSpread$h({}, params), {}, {
        type: "td"
      }));
      var classes2 = [tdStyles.classes, customClasses, (_ref2 = {}, _defineProperty$2(_ref2, tdEllipsisClass, col.ellipsis), _defineProperty$2(_ref2, tableBaseClass.tdLastRow, rowIndex + cellSpans.rowspan === dataLength), _defineProperty$2(_ref2, tableBaseClass.tdFirstCol, colIndex === 0 && props2.rowspanAndColspan), _defineProperty$2(_ref2, tdAlignClasses[col.align], col.align && col.align !== "left"), _defineProperty$2(_ref2, tableDraggableClasses.handle, col.colKey === "drag"), _ref2)];
      var onClick = function onClick2(e) {
        var _props$onCellClick;
        var p = _objectSpread$h(_objectSpread$h({}, params), {}, {
          e
        });
        if (col.stopPropagation) {
          e.stopPropagation();
        }
        (_props$onCellClick = props2.onCellClick) === null || _props$onCellClick === void 0 ? void 0 : _props$onCellClick.call(props2, p);
      };
      var normalAttrs = isFunction_1(col.attrs) ? col.attrs(_objectSpread$h(_objectSpread$h({}, params), {}, {
        type: "td"
      })) : col.attrs;
      var attrs = _objectSpread$h(_objectSpread$h({}, normalAttrs), cellSpans);
      return createVNode("td", mergeProps({
        "key": col.colKey || colIndex,
        "class": classes2,
        "style": tdStyles.style
      }, attrs, {
        "onClick": onClick
      }), [col.ellipsis ? renderEllipsisCell(params, {
        cellNode
      }) : cellNode]);
    }
    return function() {
      var _trStyles$value2;
      var columns = props2.columns, skipSpansMap = props2.skipSpansMap, row = props2.row, dataLength = props2.dataLength, rowAndColFixedPosition = props2.rowAndColFixedPosition;
      var columVNodeList = columns === null || columns === void 0 ? void 0 : columns.map(function(col, colIndex) {
        var cellSpans = {};
        var params = {
          row,
          col,
          rowIndex: props2.rowIndex,
          colIndex
        };
        var spanState = null;
        if (props2.skipSpansMap.size) {
          var _spanState, _spanState2;
          var cellKey = getCellKey(row, props2.rowKey, col.colKey, colIndex);
          spanState = skipSpansMap.get(cellKey) || {};
          ((_spanState = spanState) === null || _spanState === void 0 ? void 0 : _spanState.rowspan) > 1 && (cellSpans.rowspan = spanState.rowspan);
          ((_spanState2 = spanState) === null || _spanState2 === void 0 ? void 0 : _spanState2.colspan) > 1 && (cellSpans.colspan = spanState.colspan);
          if (spanState.skipped)
            return null;
        }
        return renderTd(params, {
          dataLength,
          rowAndColFixedPosition,
          columnLength: columns.length,
          cellSpans,
          cellEmptyContent: props2.cellEmptyContent
        });
      });
      return createVNode("tr", mergeProps({
        "ref": trRef
      }, trAttributes.value, {
        "style": (_trStyles$value2 = trStyles.value) === null || _trStyles$value2 === void 0 ? void 0 : _trStyles$value2.style,
        "class": classes.value
      }, getTrListeners(row, props2.rowIndex)), [hasLazyLoadHolder.value ? [createVNode("td", {
        "style": {
          height: "".concat(tRowHeight.value, "px"),
          border: "none"
        }
      }, null)] : columVNodeList]);
    };
  }
});
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
function _objectSpread$g(target) {
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
var extendTableProps = ["bordered", "rowKey", "rowClassName", "rowAttributes", "loading", "empty", "fixedRows", "firstFullRow", "lastFullRow", "rowspanAndColspan", "scroll", "cellEmptyContent", "pagination", "attach", "onCellClick", "onPageChange", "onRowClick", "onRowDblclick", "onRowMouseover", "onRowMousedown", "onRowMouseenter", "onRowMouseleave", "onRowMouseup", "onScroll", "onScrollX", "onScrollY"];
var TBody = defineComponent({
  name: "TBody",
  props: _objectSpread$g({
    classPrefix: String,
    data: Array,
    columns: Array,
    ellipsisOverlayClassName: String,
    rowAndColFixedPosition: Map,
    showColumnShadow: Object,
    tableElm: {},
    tableWidth: Number,
    isWidthOverflow: Boolean,
    virtualConfig: Object,
    tableContentElm: {},
    handleRowMounted: Function,
    renderExpandedRow: Function,
    firstFullRow: [String, Function],
    lastFullRow: [String, Function]
  }, pick_1(baseTableProps, extendTableProps)),
  setup: function setup24(props2) {
    var renderTNode = useTNodeJSX();
    var _toRefs = toRefs(props2), data2 = _toRefs.data, columns = _toRefs.columns, rowKey = _toRefs.rowKey, rowspanAndColspan = _toRefs.rowspanAndColspan;
    var _useConfig = useConfig("table"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
    var _useClassName = useClassName(), tableFullRowClasses = _useClassName.tableFullRowClasses, tableBaseClass = _useClassName.tableBaseClass;
    var _useRowspanAndColspan = useRowspanAndColspan(data2, columns, rowKey, rowspanAndColspan), skipSpansMap = _useRowspanAndColspan.skipSpansMap;
    var tbodyClasses = computed(function() {
      return [tableBaseClass.body];
    });
    return {
      t,
      globalConfig,
      renderTNode,
      tableFullRowClasses,
      tbodyClasses,
      tableBaseClass,
      skipSpansMap
    };
  },
  render: function render7() {
    var _this = this, _this$data, _this$data2, _this$virtualConfig, _this$virtualConfig2;
    var renderEmpty = function renderEmpty2(columns) {
      var tableWidth = _this.bordered ? _this.tableWidth - 2 : _this.tableWidth;
      return createVNode("tr", {
        "class": [_this.tableBaseClass.emptyRow, _defineProperty$2({}, _this.tableFullRowClasses.base, _this.isWidthOverflow)]
      }, [createVNode("td", {
        "colspan": columns.length
      }, [createVNode("div", {
        "class": [_this.tableBaseClass.empty, _defineProperty$2({}, _this.tableFullRowClasses.innerFullRow, _this.isWidthOverflow)],
        "style": _this.isWidthOverflow ? {
          width: "".concat(tableWidth, "px")
        } : {}
      }, [_this.renderTNode("empty") || _this.t(_this.globalConfig.empty)])])]);
    };
    var getFullRow = function getFullRow2(columnLength2, type) {
      var tType = camelCase_1(type);
      var fullRowNode = _this.renderTNode(tType);
      if (["", null, void 0, false].includes(fullRowNode))
        return null;
      var isFixedToLeft = _this.isWidthOverflow && _this.columns.find(function(col) {
        return col.fixed === "left";
      });
      var classes = [_this.tableFullRowClasses.base, _this.tableFullRowClasses[tType]];
      var tableWidth = _this.bordered ? _this.tableWidth - 2 : _this.tableWidth;
      return createVNode("tr", {
        "class": classes,
        "key": "key-full-row-".concat(type)
      }, [createVNode("td", {
        "colspan": columnLength2
      }, [createVNode("div", {
        "class": _defineProperty$2({}, _this.tableFullRowClasses.innerFullRow, isFixedToLeft),
        "style": isFixedToLeft ? {
          width: "".concat(tableWidth, "px")
        } : {}
      }, [createVNode("div", {
        "class": _this.tableFullRowClasses.innerFullElement
      }, [fullRowNode])])])]);
    };
    var columnLength = this.columns.length;
    var dataLength = this.data.length;
    var trNodeList = [];
    var properties = ["classPrefix", "ellipsisOverlayClassName", "rowAndColFixedPosition", "scroll", "tableElm", "tableContentElm", "pagination", "attach"];
    (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.forEach(function(row, rowIndex) {
      var trProps = _objectSpread$g(_objectSpread$g({}, pick_1(_this.$props, TABLE_PROPS)), {}, {
        rowKey: _this.rowKey || "id",
        row,
        columns: _this.columns,
        rowIndex: row.__VIRTUAL_SCROLL_INDEX || rowIndex,
        dataLength,
        skipSpansMap: _this.skipSpansMap,
        virtualConfig: _this.virtualConfig
      }, pick_1(_this.$props, properties));
      if (_this.onCellClick) {
        trProps.onCellClick = _this.onCellClick;
      }
      var trNode = createVNode(TrElement, mergeProps({
        "key": get_1(row, _this.rowKey || "id") || rowIndex
      }, trProps, {
        "onRowMounted": _this.handleRowMounted
      }), _this.$slots);
      trNodeList.push(trNode);
      if (_this.renderExpandedRow) {
        var p = {
          row,
          index: rowIndex,
          columns: _this.columns,
          tableWidth: _this.tableWidth,
          isWidthOverflow: _this.isWidthOverflow
        };
        var expandedContent = _this.renderExpandedRow(p);
        expandedContent && trNodeList.push(expandedContent);
      }
    });
    var list = [getFullRow(columnLength, "first-full-row")].concat(trNodeList, [getFullRow(columnLength, "last-full-row")]);
    var isEmpty = !((_this$data2 = this.data) !== null && _this$data2 !== void 0 && _this$data2.length) && !this.loading && !this.firstFullRow && !this.lastFullRow;
    var translate = "translateY(".concat((_this$virtualConfig = this.virtualConfig) === null || _this$virtualConfig === void 0 ? void 0 : _this$virtualConfig.translateY.value, "px)");
    var posStyle = (_this$virtualConfig2 = this.virtualConfig) !== null && _this$virtualConfig2 !== void 0 && _this$virtualConfig2.isVirtualScroll.value ? {
      transform: translate,
      "-ms-transform": translate,
      "-moz-transform": translate,
      "-webkit-transform": translate
    } : void 0;
    return createVNode("tbody", {
      "class": this.tbodyClasses,
      "style": _objectSpread$g({}, posStyle)
    }, [isEmpty ? renderEmpty(this.columns) : list]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function formatCSSUnit(unit) {
  if (!unit)
    return unit;
  return isNaN(Number(unit)) ? unit : "".concat(unit, "px");
}
function useStyle(props2) {
  var _toRefs = toRefs(props2), size = _toRefs.size, bordered = _toRefs.bordered, stripe = _toRefs.stripe, hover = _toRefs.hover, verticalAlign = _toRefs.verticalAlign, height = _toRefs.height, maxHeight = _toRefs.maxHeight, tableContentWidth = _toRefs.tableContentWidth;
  var _useClassName = useClassName(), tableBaseClass = _useClassName.tableBaseClass, tableAlignClasses = _useClassName.tableAlignClasses;
  var _useCommonClassName = useCommonClassName(), sizeClassNames = _useCommonClassName.sizeClassNames;
  var tableClasses = computed(function() {
    var _ref;
    return [tableBaseClass.table, (_ref = {}, _defineProperty$2(_ref, sizeClassNames[size.value], size.value !== "medium"), _defineProperty$2(_ref, tableBaseClass.bordered, bordered.value), _defineProperty$2(_ref, tableBaseClass.striped, stripe.value), _defineProperty$2(_ref, tableBaseClass.hover, hover.value), _defineProperty$2(_ref, tableBaseClass.loading, props2.loading), _defineProperty$2(_ref, tableBaseClass.affixedHeader, props2.headerAffixedTop), _defineProperty$2(_ref, tableBaseClass.rowspanAndColspan, props2.rowspanAndColspan), _defineProperty$2(_ref, tableAlignClasses[verticalAlign.value], verticalAlign.value !== "middle"), _ref)];
  });
  var tableContentStyles = computed(function() {
    return {
      height: formatCSSUnit(height.value),
      maxHeight: formatCSSUnit(maxHeight.value)
    };
  });
  var tableElementStyles = computed(function() {
    return {
      width: formatCSSUnit(tableContentWidth.value)
    };
  });
  return {
    tableClasses,
    sizeClassNames,
    tableElementStyles,
    tableContentStyles
  };
}
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
function _objectSpread$f(target) {
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
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var THead = defineComponent({
  name: "THead",
  props: {
    classPrefix: String,
    ellipsisOverlayClassName: String,
    isFixedHeader: Boolean,
    thDraggable: Boolean,
    maxHeight: [String, Number],
    height: [String, Number],
    rowAndColFixedPosition: Map,
    thWidthList: Object,
    bordered: Boolean,
    isMultipleHeader: Boolean,
    resizable: Boolean,
    attach: [String, Function],
    spansAndLeafNodes: Object,
    thList: Array,
    columnResizeParams: Object,
    showColumnShadow: Object
  },
  setup: function setup25(props2, _ref) {
    var slots = _ref.slots;
    var theadRef = ref();
    var classnames = useClassName();
    var tableHeaderClasses = classnames.tableHeaderClasses, tableBaseClass = classnames.tableBaseClass;
    var theadClasses = computed(function() {
      var _ref2;
      return [tableHeaderClasses.header, (_ref2 = {}, _defineProperty$2(_ref2, tableHeaderClasses.fixed, Boolean(props2.maxHeight || props2.height)), _defineProperty$2(_ref2, tableBaseClass.bordered, props2.bordered && props2.isMultipleHeader), _defineProperty$2(_ref2, tableHeaderClasses.multipleHeader, props2.isMultipleHeader), _ref2)];
    });
    var colspanSkipMap = computed(function() {
      var map = {};
      var list = props2.thList[0];
      for (var i = 0, len2 = list.length; i < len2; i++) {
        var item = list[i];
        if (item.colspan > 1) {
          for (var j = i + 1; j < i + item.colspan; j++) {
            if (list[j]) {
              map[list[j].colKey] = true;
            }
          }
        }
      }
      return map;
    });
    var getTableNode = function getTableNode2(thead) {
      var parent = thead;
      while (parent) {
        var _parent;
        parent = parent.parentNode;
        if ((_parent = parent) !== null && _parent !== void 0 && (_parent = _parent.classList) !== null && _parent !== void 0 && _parent.contains("".concat(props2.classPrefix, "-table"))) {
          break;
        }
      }
      return parent;
    };
    return _objectSpread$f(_objectSpread$f({}, classnames), {}, {
      colspanSkipMap,
      theadClasses,
      theadRef,
      slots,
      getTableNode
    });
  },
  render: function render8() {
    var _this = this;
    var renderThNodeList = function renderThNodeList2(rowAndColFixedPosition, thWidthList) {
      var thBorderMap = /* @__PURE__ */ new Map();
      var thRowspanAndColspan = _this.spansAndLeafNodes.rowspanAndColspanMap;
      return _this.thList.map(function(row, rowIndex) {
        var thRow = row.map(function(col, index2) {
          var _ref3, _col$children;
          if (_this.colspanSkipMap[col.colKey])
            return null;
          var rowspanAndColspan = thRowspanAndColspan.get(col);
          if (index2 === 0 && rowspanAndColspan.rowspan > 1) {
            for (var j = rowIndex + 1; j < rowIndex + rowspanAndColspan.rowspan; j++) {
              thBorderMap.set(_this.thList[j][0], true);
            }
          }
          var thStyles = getColumnFixedStyles(col, index2, rowAndColFixedPosition, _this.tableColFixedClasses);
          var colParams = {
            col,
            colIndex: index2,
            row: {},
            rowIndex: -1
          };
          var customClasses = formatClassNames(col.className, _objectSpread$f(_objectSpread$f({}, colParams), {}, {
            type: "th"
          }));
          var isLeftFixedActive = _this.showColumnShadow.left && col.fixed === "left";
          var isRightFixedActive = _this.showColumnShadow.right && col.fixed === "right";
          var canDragSort = _this.thDraggable && !(isLeftFixedActive || isRightFixedActive);
          var thClasses = [thStyles.classes, customClasses, (_ref3 = {}, _defineProperty$2(_ref3, _this.tableHeaderClasses.thBordered, thBorderMap.get(col)), _defineProperty$2(_ref3, "".concat(_this.classPrefix, "-table__th-").concat(col.colKey), col.colKey), _defineProperty$2(_ref3, _this.tdAlignClasses[col.align], col.align && col.align !== "left"), _defineProperty$2(_ref3, _this.tableDraggableClasses.dragSortTh, canDragSort), _ref3)];
          var withoutChildren = !((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length);
          var width = withoutChildren && thWidthList !== null && thWidthList !== void 0 && thWidthList[col.colKey] ? "".concat(thWidthList === null || thWidthList === void 0 ? void 0 : thWidthList[col.colKey], "px") : void 0;
          var styles = _objectSpread$f(_objectSpread$f({}, thStyles.style || {}), {}, {
            width
          });
          var innerTh = renderTitle(_this.slots, col, index2);
          var resizeColumnListener = _this.resizable || !canDragSort ? {
            onMousedown: function onMousedown(e) {
              if (_this.resizable) {
                var _this$columnResizePar, _this$columnResizePar2;
                (_this$columnResizePar = _this.columnResizeParams) === null || _this$columnResizePar === void 0 || (_this$columnResizePar2 = _this$columnResizePar.onColumnMousedown) === null || _this$columnResizePar2 === void 0 ? void 0 : _this$columnResizePar2.call(_this$columnResizePar, e, col, index2);
              }
              if (!canDragSort) {
                var timer = setTimeout(function() {
                  var _thList$index;
                  var thList = _this.theadRef.querySelectorAll("th");
                  (_thList$index = thList[index2]) === null || _thList$index === void 0 ? void 0 : _thList$index.removeAttribute("draggable");
                  clearTimeout(timer);
                }, 10);
              }
            },
            onMousemove: function onMousemove(e) {
              var _this$columnResizePar3, _this$columnResizePar4;
              _this.resizable && ((_this$columnResizePar3 = _this.columnResizeParams) === null || _this$columnResizePar3 === void 0 || (_this$columnResizePar4 = _this$columnResizePar3.onColumnMouseover) === null || _this$columnResizePar4 === void 0 ? void 0 : _this$columnResizePar4.call(_this$columnResizePar3, e, col));
            }
          } : {};
          var content = isFunction_1(col.ellipsisTitle) ? col.ellipsisTitle(h, {
            col,
            colIndex: index2
          }) : void 0;
          var isEllipsis = col.ellipsisTitle !== void 0 ? Boolean(col.ellipsisTitle) : Boolean(col.ellipsis);
          var attrs = (isFunction_1(col.attrs) ? col.attrs(_objectSpread$f(_objectSpread$f({}, colParams), {}, {
            type: "th"
          })) : col.attrs) || {};
          if (col.colspan > 1) {
            attrs.colspan = col.colspan;
          }
          return createVNode("th", mergeProps({
            "key": col.colKey,
            "data-colkey": col.colKey,
            "class": thClasses,
            "style": styles
          }, attrs, rowspanAndColspan, resizeColumnListener), [createVNode("div", {
            "class": _this.tableBaseClass.thCellInner
          }, [isEllipsis ? createVNode(TEllipsis, {
            "placement": "bottom",
            "attach": _this.attach || (_this.theadRef ? function() {
              return _this.getTableNode(_this.theadRef);
            } : void 0),
            "tooltipContent": content && function() {
              return content;
            },
            "tooltipProps": _typeof$2(col.ellipsisTitle) === "object" ? col.ellipsisTitle : void 0,
            "overlayClassName": _this.ellipsisOverlayClassName,
            "classPrefix": _this.classPrefix
          }, _isSlot$2(innerTh) ? innerTh : {
            "default": function _default14() {
              return [innerTh];
            }
          }) : innerTh])]);
        });
        return createVNode("tr", {
          "key": rowIndex
        }, [thRow]);
      });
    };
    return createVNode("thead", {
      "ref": "theadRef",
      "class": this.theadClasses
    }, [renderThNodeList(this.rowAndColFixedPosition, this.thWidthList)]);
  }
});
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
function _objectSpread$e(target) {
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
var TFoot = defineComponent({
  name: "TFoot",
  props: {
    rowKey: String,
    isFixedHeader: Boolean,
    rowAndColFixedPosition: Map,
    footData: Array,
    columns: Array,
    rowAttributes: [Array, Object, Function],
    rowClassName: [Array, String, Object, Function],
    thWidthList: [Object],
    footerSummary: [String, Function],
    rowspanAndColspanInFooter: Function
  },
  setup: function setup26(props2, context) {
    var renderTNode = useTNodeJSX();
    var classnames = useClassName();
    var _toRefs = toRefs(props2), footData = _toRefs.footData, columns = _toRefs.columns, rowKey = _toRefs.rowKey, rowspanAndColspanInFooter = _toRefs.rowspanAndColspanInFooter;
    var _useRowspanAndColspan = useRowspanAndColspan(footData, columns, rowKey, rowspanAndColspanInFooter), skipSpansMap = _useRowspanAndColspan.skipSpansMap;
    var renderTFootCell = function renderTFootCell2(p) {
      var col = p.col, row = p.row;
      if (isFunction_1(col.foot)) {
        return col.foot(h, p);
      }
      if (isString_1(col.foot) && context.slots[col.foot]) {
        return context.slots[col.foot](p) || col.foot;
      }
      return col.foot || get_1(row, col.colKey);
    };
    return _objectSpread$e(_objectSpread$e({
      skipSpansMap
    }, classnames), {}, {
      renderTFootCell,
      renderTNode
    });
  },
  render: function render9() {
    var _this$footData, _this = this;
    if (!this.columns)
      return null;
    var theadClasses = [this.tableFooterClasses.footer, _defineProperty$2({}, this.tableFooterClasses.fixed, this.isFixedHeader)];
    var footerDomList = (_this$footData = this.footData) === null || _this$footData === void 0 ? void 0 : _this$footData.map(function(row, rowIndex) {
      var trAttributes = formatRowAttributes(_this.rowAttributes, {
        row,
        rowIndex,
        type: "foot"
      });
      var customClasses = formatRowClassNames(_this.rowClassName, {
        row,
        rowIndex,
        type: "foot"
      }, _this.rowKey || "id");
      return createVNode("tr", mergeProps(trAttributes, {
        "key": rowIndex,
        "class": customClasses
      }), [_this.columns.map(function(col, colIndex) {
        var _this$thWidthList;
        var cellSpans = {};
        var spanState = null;
        if (_this.skipSpansMap.size) {
          var _spanState, _spanState2;
          var cellKey = getCellKey(row, _this.rowKey, col.colKey, colIndex);
          spanState = _this.skipSpansMap.get(cellKey) || {};
          ((_spanState = spanState) === null || _spanState === void 0 ? void 0 : _spanState.rowspan) > 1 && (cellSpans.rowspan = spanState.rowspan);
          ((_spanState2 = spanState) === null || _spanState2 === void 0 ? void 0 : _spanState2.colspan) > 1 && (cellSpans.colspan = spanState.colspan);
          if (spanState.skipped)
            return null;
        }
        var tdStyles = getColumnFixedStyles(col, colIndex, _this.rowAndColFixedPosition, _this.tableColFixedClasses);
        var style = _objectSpread$e({}, tdStyles.style);
        if ((_this$thWidthList = _this.thWidthList) !== null && _this$thWidthList !== void 0 && _this$thWidthList[col.colKey]) {
          style.width = "".concat(_this.thWidthList[col.colKey], "px");
        }
        return createVNode("td", mergeProps(_objectSpread$e({
          key: col.colKey
        }, cellSpans), {
          "class": tdStyles.classes,
          "style": style
        }), [_this.renderTFootCell({
          row,
          rowIndex,
          col,
          colIndex
        })]);
      })]);
    });
    var footerSummary = this.renderTNode("footerSummary");
    if (!footerSummary && (!this.footData || !this.footData.length))
      return null;
    return createVNode("tfoot", {
      "ref": "tFooterRef",
      "class": theadClasses
    }, [footerSummary && createVNode("tr", {
      "class": this.tableFullRowClasses.base
    }, [createVNode("td", {
      "colspan": this.columns.length
    }, [createVNode("div", {
      "class": this.tableFullRowClasses.innerFullElement
    }, [footerSummary])])]), footerDomList]);
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
function _objectSpread$d(target) {
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
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _BaseTable = defineComponent({
  name: "TBaseTable",
  props: _objectSpread$d(_objectSpread$d({}, baseTableProps), {}, {
    renderExpandedRow: Function,
    onLeafColumnsChange: Function,
    thDraggable: Boolean
  }),
  setup: function setup27(props2, context) {
    var renderTNode = useTNodeJSX();
    var tableRef = ref();
    var tableElmRef = ref();
    var tableBodyRef = ref();
    var bottomContentRef = ref();
    var tableFootHeight = ref(0);
    var _useClassName = useClassName(), classPrefix = _useClassName.classPrefix, virtualScrollClasses = _useClassName.virtualScrollClasses, tableLayoutClasses = _useClassName.tableLayoutClasses, tableBaseClass = _useClassName.tableBaseClass, tableColFixedClasses = _useClassName.tableColFixedClasses;
    var _useStyle = useStyle(props2), tableClasses = _useStyle.tableClasses, sizeClassNames = _useStyle.sizeClassNames, tableContentStyles = _useStyle.tableContentStyles, tableElementStyles = _useStyle.tableElementStyles;
    var _useConfig = useConfig("table"), globalConfig = _useConfig.globalConfig;
    var _useTableHeader = useTableHeader(props2), isMultipleHeader = _useTableHeader.isMultipleHeader, spansAndLeafNodes = _useTableHeader.spansAndLeafNodes, thList = _useTableHeader.thList;
    var finalColumns = computed(function() {
      var _spansAndLeafNodes$va;
      return ((_spansAndLeafNodes$va = spansAndLeafNodes.value) === null || _spansAndLeafNodes$va === void 0 ? void 0 : _spansAndLeafNodes$va.leafColumns) || props2.columns;
    });
    var paginationAffixRef = ref();
    var horizontalScrollAffixRef = ref();
    var headerTopAffixRef = ref();
    var footerBottomAffixRef = ref();
    var _useFixed = useFixed(props2, context, finalColumns, {
      paginationAffixRef,
      horizontalScrollAffixRef,
      headerTopAffixRef,
      footerBottomAffixRef
    }), scrollbarWidth = _useFixed.scrollbarWidth, virtualScrollHeaderPos = _useFixed.virtualScrollHeaderPos, tableWidth = _useFixed.tableWidth, tableElmWidth = _useFixed.tableElmWidth, tableContentRef = _useFixed.tableContentRef, isFixedHeader = _useFixed.isFixedHeader, isWidthOverflow = _useFixed.isWidthOverflow, isFixedColumn = _useFixed.isFixedColumn, thWidthList = _useFixed.thWidthList, showColumnShadow = _useFixed.showColumnShadow, rowAndColFixedPosition = _useFixed.rowAndColFixedPosition, setData = _useFixed.setData, refreshTable = _useFixed.refreshTable, setTableElmWidth = _useFixed.setTableElmWidth, emitScrollEvent = _useFixed.emitScrollEvent, setUseFixedTableElmRef = _useFixed.setUseFixedTableElmRef, updateColumnFixedShadow = _useFixed.updateColumnFixedShadow, getThWidthList = _useFixed.getThWidthList, updateThWidthList = _useFixed.updateThWidthList, addTableResizeObserver = _useFixed.addTableResizeObserver, updateTableAfterColumnResize = _useFixed.updateTableAfterColumnResize;
    var _useAffix = useAffix(props2), affixHeaderRef = _useAffix.affixHeaderRef, affixFooterRef = _useAffix.affixFooterRef, horizontalScrollbarRef = _useAffix.horizontalScrollbarRef, paginationRef = _useAffix.paginationRef, showAffixHeader = _useAffix.showAffixHeader, showAffixFooter = _useAffix.showAffixFooter, showAffixPagination = _useAffix.showAffixPagination, onHorizontalScroll = _useAffix.onHorizontalScroll, setTableContentRef = _useAffix.setTableContentRef, updateAffixHeaderOrFooter = _useAffix.updateAffixHeaderOrFooter;
    var _usePagination = usePagination(props2, context), dataSource = _usePagination.dataSource, innerPagination = _usePagination.innerPagination, isPaginateData = _usePagination.isPaginateData, renderPagination = _usePagination.renderPagination;
    var columnResizeParams = useColumnResize({
      isWidthOverflow,
      tableContentRef,
      showColumnShadow,
      getThWidthList,
      updateThWidthList,
      setTableElmWidth,
      updateTableAfterColumnResize,
      onColumnResizeChange: props2.onColumnResizeChange
    });
    var resizeLineRef = columnResizeParams.resizeLineRef, resizeLineStyle = columnResizeParams.resizeLineStyle, setEffectColMap = columnResizeParams.setEffectColMap;
    var dynamicBaseTableClasses = computed(function() {
      var _ref;
      return [tableClasses.value, (_ref = {}, _defineProperty$2(_ref, tableBaseClass.headerFixed, isFixedHeader.value), _defineProperty$2(_ref, tableBaseClass.columnFixed, isFixedColumn.value), _defineProperty$2(_ref, tableBaseClass.widthOverflow, isWidthOverflow.value), _defineProperty$2(_ref, tableBaseClass.multipleHeader, isMultipleHeader.value), _defineProperty$2(_ref, tableColFixedClasses.leftShadow, showColumnShadow.left), _defineProperty$2(_ref, tableColFixedClasses.rightShadow, showColumnShadow.right), _defineProperty$2(_ref, tableBaseClass.columnResizableTable, props2.resizable), _ref)];
    });
    var tableElmClasses = computed(function() {
      return [[tableLayoutClasses[props2.tableLayout]]];
    });
    var showRightDivider = computed(function() {
      return props2.bordered && isFixedHeader.value && (isMultipleHeader.value && isWidthOverflow.value || !isMultipleHeader.value);
    });
    var dividerBottom = computed(function() {
      var _bottomContentRef$val, _paginationRef$value;
      if (!props2.bordered)
        return 0;
      var bottomRect = (_bottomContentRef$val = bottomContentRef.value) === null || _bottomContentRef$val === void 0 ? void 0 : _bottomContentRef$val.getBoundingClientRect();
      var paginationRect = (_paginationRef$value = paginationRef.value) === null || _paginationRef$value === void 0 ? void 0 : _paginationRef$value.getBoundingClientRect();
      return ((bottomRect === null || bottomRect === void 0 ? void 0 : bottomRect.height) || 0) + ((paginationRect === null || paginationRect === void 0 ? void 0 : paginationRect.height) || 0);
    });
    watch(tableElmRef, function() {
      setUseFixedTableElmRef(tableElmRef.value);
    });
    watch(function() {
      return [props2.data, dataSource];
    }, function() {
      setData(isPaginateData.value ? dataSource.value : props2.data);
    });
    watch(spansAndLeafNodes, function() {
      var _props2$onLeafColumns;
      (_props2$onLeafColumns = props2.onLeafColumnsChange) === null || _props2$onLeafColumns === void 0 ? void 0 : _props2$onLeafColumns.call(props2, spansAndLeafNodes.value.leafColumns);
      setEffectColMap(spansAndLeafNodes.value.leafColumns, null);
    }, {
      immediate: true
    });
    var onFixedChange = function onFixedChange2() {
      nextTick(function() {
        onHorizontalScroll();
        updateAffixHeaderOrFooter();
      });
    };
    var virtualScrollParams = computed(function() {
      return {
        data: props2.data,
        scroll: props2.scroll
      };
    });
    var virtualConfig = useVirtualScroll2(tableContentRef, virtualScrollParams);
    var lastScrollY = -1;
    var onInnerVirtualScroll = function onInnerVirtualScroll2(e) {
      var target = e.target || e.srcElement;
      var top = target.scrollTop;
      if (lastScrollY !== top) {
        virtualConfig.isVirtualScroll.value && virtualConfig.handleScroll();
      } else {
        lastScrollY = -1;
        updateColumnFixedShadow(target);
      }
      lastScrollY = top;
      emitScrollEvent(e);
    };
    var getTFootHeight = function getTFootHeight2() {
      var _tableElmRef$value$qu;
      if (!tableElmRef.value)
        return;
      tableFootHeight.value = (_tableElmRef$value$qu = tableElmRef.value.querySelector("tfoot")) === null || _tableElmRef$value$qu === void 0 ? void 0 : _tableElmRef$value$qu.getBoundingClientRect().height;
    };
    var scrollColumnIntoView = function scrollColumnIntoView2(colKey) {
      if (!tableContentRef.value)
        return;
      var thDom = tableContentRef.value.querySelector('th[data-colkey="'.concat(colKey, '"]'));
      var fixedThDom = tableContentRef.value.querySelectorAll("th.t-table__cell--fixed-left");
      var totalWidth = 0;
      for (var i = 0, len2 = fixedThDom.length; i < len2; i++) {
        totalWidth += fixedThDom[i].getBoundingClientRect().width;
      }
      var domRect = thDom.getBoundingClientRect();
      var contentRect = tableContentRef.value.getBoundingClientRect();
      var distance2 = domRect.left - contentRect.left - totalWidth;
      tableContentRef.value.scrollTo({
        left: distance2,
        behavior: "smooth"
      });
    };
    watch(tableContentRef, function() {
      setTableContentRef(tableContentRef.value);
    });
    watch(tableElmRef, getTFootHeight);
    watch(tableRef, function(tableRef2) {
      addTableResizeObserver(tableRef2);
    });
    onMounted(function() {
      getTFootHeight();
      setTableContentRef(tableContentRef.value);
      addTableResizeObserver(tableRef.value);
    });
    return {
      thList,
      classPrefix,
      innerPagination,
      globalConfig,
      tableFootHeight,
      virtualScrollHeaderPos,
      tableWidth,
      tableElmWidth,
      tableRef,
      tableElmRef,
      sizeClassNames,
      tableBaseClass,
      spansAndLeafNodes,
      dynamicBaseTableClasses,
      tableContentStyles,
      tableElementStyles,
      dividerBottom,
      virtualScrollClasses,
      tableLayoutClasses,
      tableElmClasses,
      tableContentRef,
      isFixedHeader,
      isWidthOverflow,
      isFixedColumn,
      rowAndColFixedPosition,
      showColumnShadow,
      thWidthList,
      isPaginateData,
      dataSource,
      affixHeaderRef,
      affixFooterRef,
      bottomContentRef,
      paginationRef,
      showAffixHeader,
      showAffixFooter,
      scrollbarWidth,
      isMultipleHeader,
      showRightDivider,
      resizeLineRef,
      resizeLineStyle,
      columnResizeParams,
      horizontalScrollbarRef,
      tableBodyRef,
      virtualConfig,
      showAffixPagination,
      scrollToElement: virtualConfig.scrollToElement,
      renderPagination,
      renderTNode,
      onFixedChange,
      onHorizontalScroll,
      updateAffixHeaderOrFooter,
      onInnerVirtualScroll,
      refreshTable,
      scrollColumnIntoView,
      paginationAffixRef,
      horizontalScrollAffixRef,
      headerTopAffixRef,
      footerBottomAffixRef
    };
  },
  render: function render10() {
    var _this$spansAndLeafNod, _this$allowResizeColu, _this = this, _this$affixHeaderRef, _this$footData, _this$tableContentRef;
    var rowAndColFixedPosition = this.rowAndColFixedPosition, tableLayout = this.tableLayout;
    var data2 = this.isPaginateData ? this.dataSource : this.data;
    var columns = ((_this$spansAndLeafNod = this.spansAndLeafNodes) === null || _this$spansAndLeafNod === void 0 ? void 0 : _this$spansAndLeafNod.leafColumns) || this.columns;
    var columnResizable = (_this$allowResizeColu = this.allowResizeColumnWidth) !== null && _this$allowResizeColu !== void 0 ? _this$allowResizeColu : this.resizable;
    if (columnResizable && tableLayout === "auto") {
      log.warn("Table", "table-layout can not be `auto`, cause you are using column resizable, set `table-layout: fixed` please.");
    }
    var defaultColWidth = tableLayout === "fixed" && this.isWidthOverflow ? "100px" : void 0;
    var renderColGroup = function renderColGroup2() {
      var isAffixHeader = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      return createVNode("colgroup", null, [columns.map(function(col) {
        var style = {
          width: formatCSSUnit((isAffixHeader || columnResizable ? _this.thWidthList[col.colKey] : void 0) || col.width) || defaultColWidth
        };
        if (col.minWidth) {
          style.minWidth = formatCSSUnit(col.minWidth);
        }
        if (!style.width && !col.minWidth && _this.tableLayout === "fixed") {
          style.minWidth = "80px";
        }
        return createVNode("col", {
          "key": col.colKey,
          "style": style
        }, null);
      })]);
    };
    var renderAffixedHeader = function renderAffixedHeader2() {
      if (_this.showHeader === false)
        return null;
      return !!(_this.virtualConfig.isVirtualScroll.value || _this.headerAffixedTop) && (_this.headerAffixedTop ? createVNode(Affix, mergeProps({
        "offsetTop": 0
      }, getAffixProps(_this.headerAffixedTop), {
        "onFixedChange": _this.onFixedChange,
        "ref": "headerTopAffixRef"
      }), _isSlot$1(affixHeaderWithWrap) ? affixHeaderWithWrap : {
        "default": function _default14() {
          return [affixHeaderWithWrap];
        }
      }) : _this.isFixedHeader && affixHeaderWithWrap);
    };
    var renderAffixedHorizontalScrollbar = function renderAffixedHorizontalScrollbar2() {
      return createVNode(Affix, mergeProps({
        "offsetBottom": 0
      }, getAffixProps(_this.horizontalScrollAffixedBottom), {
        "style": {
          marginTop: "-".concat(_this.scrollbarWidth * 2, "px")
        },
        "horizontalScrollAffixedBottom": true,
        "ref": "horizontalScrollAffixRef"
      }), {
        "default": function _default14() {
          return [createVNode("div", {
            "ref": "horizontalScrollbarRef",
            "class": ["scrollbar", _this.tableBaseClass.obviousScrollbar],
            "style": {
              width: "".concat(_this.tableWidth, "px"),
              overflow: "auto",
              opacity: Number(_this.showAffixFooter)
            }
          }, [createVNode("div", {
            "style": {
              width: "".concat(_this.tableElmWidth, "px"),
              height: "5px"
            }
          }, null)])];
        }
      });
    };
    var headProps = {
      isFixedHeader: this.isFixedHeader,
      rowAndColFixedPosition: this.rowAndColFixedPosition,
      isMultipleHeader: this.isMultipleHeader,
      bordered: this.bordered,
      maxHeight: this.maxHeight,
      height: this.height,
      spansAndLeafNodes: this.spansAndLeafNodes,
      thList: this.thList,
      thWidthList: this.thWidthList,
      resizable: this.resizable,
      columnResizeParams: this.columnResizeParams,
      classPrefix: this.classPrefix,
      ellipsisOverlayClassName: this.size !== "medium" ? this.sizeClassNames[this.size] : "",
      attach: this.attach,
      showColumnShadow: this.showColumnShadow,
      thDraggable: this.thDraggable
    };
    var IEHeaderWrap = getIEVersion() <= 11 ? 4 : 0;
    var barWidth = this.isWidthOverflow ? this.scrollbarWidth : 0;
    var affixHeaderHeight = (((_this$affixHeaderRef = this.affixHeaderRef) === null || _this$affixHeaderRef === void 0 ? void 0 : _this$affixHeaderRef.getBoundingClientRect().height) || 0) - IEHeaderWrap;
    var affixHeaderWrapHeight = affixHeaderHeight - barWidth;
    var headerOpacity = baseTableProps.headerAffixedTop ? Number(this.showAffixHeader) : 1;
    var affixHeaderWrapHeightStyle = {
      width: "".concat(this.tableWidth, "px"),
      height: "".concat(affixHeaderWrapHeight, "px"),
      opacity: headerOpacity
    };
    var affixedLeftBorder = this.bordered ? 1 : 0;
    var affixedHeader = Boolean((this.headerAffixedTop || this.virtualConfig.isVirtualScroll.value) && this.tableWidth) && createVNode("div", {
      "ref": "affixHeaderRef",
      "style": {
        width: "".concat(this.tableWidth - affixedLeftBorder, "px"),
        opacity: Number(this.showAffixHeader)
      },
      "class": ["scrollbar", _defineProperty$2({}, this.tableBaseClass.affixedHeaderElm, this.headerAffixedTop || this.virtualConfig.isVirtualScroll.value)]
    }, [createVNode("table", {
      "class": this.tableElmClasses,
      "style": _objectSpread$d(_objectSpread$d({}, this.tableElementStyles), {}, {
        width: "".concat(this.tableElmWidth, "px")
      })
    }, [renderColGroup(true), createVNode(THead, headProps, this.$slots)])]);
    var affixHeaderWithWrap = createVNode("div", {
      "class": this.tableBaseClass.affixedHeaderWrap,
      "style": affixHeaderWrapHeightStyle
    }, [affixedHeader]);
    var marginScrollbarWidth = this.isWidthOverflow ? this.scrollbarWidth : 0;
    if (this.bordered) {
      marginScrollbarWidth += 1;
    }
    var affixedFooter = Boolean(this.footerAffixedBottom && ((_this$footData = this.footData) === null || _this$footData === void 0 ? void 0 : _this$footData.length) && this.tableWidth) && createVNode(Affix, mergeProps({
      "class": this.tableBaseClass.affixedFooterWrap,
      "onFixedChange": this.onFixedChange,
      "offsetBottom": marginScrollbarWidth || 0
    }, getAffixProps(this.footerAffixedBottom), {
      "style": {
        marginTop: "".concat(-1 * (this.tableFootHeight + marginScrollbarWidth), "px")
      },
      "ref": "footerBottomAffixRef"
    }), {
      "default": function _default14() {
        return [createVNode("div", {
          "ref": "affixFooterRef",
          "style": {
            width: "".concat(_this.tableWidth - affixedLeftBorder, "px"),
            opacity: Number(_this.showAffixFooter)
          },
          "class": ["scrollbar", _defineProperty$2({}, _this.tableBaseClass.affixedFooterElm, _this.footerAffixedBottom || _this.isVirtual)]
        }, [createVNode("table", {
          "class": _this.tableElmClasses,
          "style": _objectSpread$d(_objectSpread$d({}, _this.tableElementStyles), {}, {
            width: "".concat(_this.tableElmWidth, "px")
          })
        }, [renderColGroup(true), createVNode(TFoot, {
          "rowKey": _this.rowKey,
          "isFixedHeader": _this.isFixedHeader,
          "rowAndColFixedPosition": rowAndColFixedPosition,
          "footData": _this.footData,
          "columns": columns,
          "rowAttributes": _this.rowAttributes,
          "rowClassName": _this.rowClassName,
          "thWidthList": _this.thWidthList,
          "footerSummary": _this.footerSummary,
          "rowspanAndColspanInFooter": _this.rowspanAndColspanInFooter
        }, _this.$slots)])])];
      }
    });
    var translate = "translate(0, ".concat(this.virtualConfig.scrollHeight.value, "px)");
    var virtualStyle = {
      transform: translate,
      "-ms-transform": translate,
      "-moz-transform": translate,
      "-webkit-transform": translate
    };
    var virtualConfig = this.virtualConfig;
    var tableBodyProps = _objectSpread$d(_objectSpread$d({
      classPrefix: this.classPrefix,
      ellipsisOverlayClassName: this.size !== "medium" ? this.sizeClassNames[this.size] : "",
      rowAndColFixedPosition,
      showColumnShadow: this.showColumnShadow,
      data: virtualConfig.isVirtualScroll.value ? virtualConfig.visibleData.value : data2,
      virtualConfig: this.virtualConfig,
      columns: this.spansAndLeafNodes.leafColumns,
      tableElm: this.tableRef,
      tableWidth: this.tableWidth,
      isWidthOverflow: this.isWidthOverflow,
      scroll: this.scroll,
      cellEmptyContent: this.cellEmptyContent,
      tableContentElm: this.tableContentRef,
      handleRowMounted: this.virtualConfig.handleRowMounted,
      renderExpandedRow: this.renderExpandedRow
    }, pick_1(this.$props, extendTableProps)), {}, {
      pagination: this.innerPagination,
      attach: this.attach
    });
    var tableContent = createVNode("div", {
      "ref": "tableContentRef",
      "class": this.tableBaseClass.content,
      "style": this.tableContentStyles,
      "onScroll": this.onInnerVirtualScroll
    }, [this.virtualConfig.isVirtualScroll.value && createVNode("div", {
      "class": this.virtualScrollClasses.cursor,
      "style": virtualStyle
    }, null), createVNode("table", {
      "ref": "tableElmRef",
      "class": this.tableElmClasses,
      "style": _objectSpread$d(_objectSpread$d({}, this.tableElementStyles), {}, {
        width: this.resizable && this.isWidthOverflow && this.tableElmWidth ? "".concat(this.tableElmWidth, "px") : this.tableElementStyles.width
      })
    }, [renderColGroup(false), this.showHeader && createVNode(THead, _objectSpread$d(_objectSpread$d({}, headProps), {}, {
      thWidthList: columnResizable ? this.thWidthList : {}
    }), this.$slots), createVNode(TBody, tableBodyProps, this.$slots), createVNode(TFoot, {
      "rowKey": this.rowKey,
      "isFixedHeader": this.isFixedHeader,
      "rowAndColFixedPosition": rowAndColFixedPosition,
      "footData": this.footData,
      "columns": columns,
      "rowAttributes": this.rowAttributes,
      "rowClassName": this.rowClassName,
      "footerSummary": this.footerSummary,
      "rowspanAndColspanInFooter": this.rowspanAndColspanInFooter
    }, this.$slots)])]);
    var customLoadingText = this.renderTNode("loading");
    var loadingContent = this.loading !== void 0 && createVNode(Loading, mergeProps({
      "loading": !!this.loading,
      "text": customLoadingText ? function() {
        return customLoadingText;
      } : void 0,
      "attach": this.tableRef ? function() {
        return _this.tableRef;
      } : void 0,
      "showOverlay": true,
      "size": "small"
    }, this.loadingProps), null);
    var topContent = this.renderTNode("topContent");
    var bottomContent = this.renderTNode("bottomContent");
    var pagination = createVNode("div", {
      "ref": "paginationRef",
      "class": this.tableBaseClass.paginationWrap,
      "style": {
        opacity: Number(this.showAffixPagination)
      }
    }, [this.renderPagination()]);
    var bottom = !!bottomContent && createVNode("div", {
      "ref": "bottomContentRef",
      "class": this.tableBaseClass.bottomContent
    }, [bottomContent]);
    return createVNode("div", {
      "ref": "tableRef",
      "class": this.dynamicBaseTableClasses,
      "style": "position: relative"
    }, [!!topContent && createVNode("div", {
      "class": this.tableBaseClass.topContent
    }, [topContent]), renderAffixedHeader(), tableContent, affixedFooter, loadingContent, bottom, this.showRightDivider && createVNode("div", {
      "class": this.tableBaseClass.scrollbarDivider,
      "style": {
        right: "".concat(this.scrollbarWidth, "px"),
        bottom: this.dividerBottom ? "".concat(this.dividerBottom, "px") : void 0,
        height: "".concat((_this$tableContentRef = this.tableContentRef) === null || _this$tableContentRef === void 0 ? void 0 : _this$tableContentRef.getBoundingClientRect().height, "px")
      }
    }, null), this.horizontalScrollAffixedBottom && renderAffixedHorizontalScrollbar(), this.paginationAffixedBottom ? createVNode(Affix, mergeProps({
      "offsetBottom": 0
    }, getAffixProps(this.paginationAffixedBottom), {
      "ref": "paginationAffixRef"
    }), _isSlot$1(pagination) ? pagination : {
      "default": function _default14() {
        return [pagination];
      }
    }) : pagination, createVNode("div", {
      "ref": "resizeLineRef",
      "class": this.tableBaseClass.resizeLine,
      "style": this.resizeLineStyle
    }, null)]);
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var primaryTableProps = {
  asyncLoading: {
    type: [String, Function]
  },
  columnController: {
    type: Object
  },
  columnControllerVisible: {
    type: Boolean,
    "default": void 0
  },
  defaultColumnControllerVisible: {
    type: Boolean,
    "default": void 0
  },
  columns: {
    type: Array,
    "default": function _default10() {
      return [];
    }
  },
  displayColumns: {
    type: Array,
    "default": void 0
  },
  defaultDisplayColumns: {
    type: Array
  },
  dragSort: {
    type: String,
    validator: function validator36(val) {
      if (!val)
        return true;
      return ["row", "row-handler", "col", "row-handler-col", "drag-col"].includes(val);
    }
  },
  dragSortOptions: {
    type: Object
  },
  editableCellState: {
    type: Function
  },
  editableRowKeys: {
    type: Array
  },
  expandIcon: {
    type: [Boolean, Function],
    "default": true
  },
  expandOnRowClick: Boolean,
  expandedRow: {
    type: [String, Function]
  },
  expandedRowKeys: {
    type: Array,
    "default": void 0
  },
  defaultExpandedRowKeys: {
    type: Array,
    "default": function _default11() {
      return [];
    }
  },
  filterIcon: {
    type: Function
  },
  filterRow: {
    type: [String, Function]
  },
  filterValue: {
    type: Object,
    "default": void 0
  },
  defaultFilterValue: {
    type: Object
  },
  hideSortTips: Boolean,
  indeterminateSelectedRowKeys: {
    type: Array
  },
  multipleSort: Boolean,
  reserveSelectedRowOnPaginate: {
    type: Boolean,
    "default": true
  },
  selectOnRowClick: Boolean,
  selectedRowKeys: {
    type: Array,
    "default": void 0
  },
  defaultSelectedRowKeys: {
    type: Array,
    "default": function _default12() {
      return [];
    }
  },
  showSortColumnBgColor: Boolean,
  sort: {
    type: [Object, Array],
    "default": void 0
  },
  defaultSort: {
    type: [Object, Array]
  },
  sortIcon: {
    type: Function
  },
  sortOnRowDraggable: Boolean,
  onAsyncLoadingClick: Function,
  onCellClick: Function,
  onChange: Function,
  onColumnChange: Function,
  onColumnControllerVisibleChange: Function,
  onDataChange: Function,
  onDisplayColumnsChange: Function,
  onDragSort: Function,
  onExpandChange: Function,
  onFilterChange: Function,
  onRowEdit: Function,
  onRowValidate: Function,
  onSelectChange: Function,
  onSortChange: Function,
  onValidate: Function
};
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
function _objectSpread$c(target) {
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
function getColumnKeys(columns) {
  var keys2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (var i = 0, len2 = columns.length; i < len2; i++) {
    var _col$children;
    var col = columns[i];
    col.colKey && keys2.add(col.colKey);
    if ((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
      getColumnKeys(col.children, keys2);
    }
  }
  return keys2;
}
function useColumnController(props2, context) {
  var _useConfig = useConfig("table"), classPrefix = _useConfig.classPrefix, globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = useGlobalIcon({
    SettingIcon: setting
  }), SettingIcon$1 = _useGlobalIcon.SettingIcon;
  var _toRefs = toRefs(props2), columns = _toRefs.columns, columnController = _toRefs.columnController, displayColumns = _toRefs.displayColumns, columnControllerVisible = _toRefs.columnControllerVisible;
  var dialogInstance = ref(null);
  var enabledColKeys = computed(function() {
    var _columnController$val;
    var arr = (((_columnController$val = columnController.value) === null || _columnController$val === void 0 ? void 0 : _columnController$val.fields) || _toConsumableArray(getColumnKeys(columns.value))).filter(function(v) {
      return v;
    });
    return new Set(arr);
  });
  var keys2 = _toConsumableArray(getColumnKeys(columns.value));
  var _useDefaultValue = useDefaultValue(displayColumns, props2.defaultDisplayColumns || keys2, props2.onDisplayColumnsChange, "displayColumns"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), tDisplayColumns = _useDefaultValue2[0], setTDisplayColumns = _useDefaultValue2[1];
  var columnCheckboxKeys = ref(displayColumns.value || props2.defaultDisplayColumns || keys2);
  var checkboxOptions = computed(function() {
    return getCheckboxOptions(columns.value);
  });
  var intersectionChecked = computed(function() {
    return intersection_1(columnCheckboxKeys.value, _toConsumableArray(enabledColKeys.value));
  });
  watch([displayColumns], function(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), val = _ref2[0];
    columnCheckboxKeys.value = val || props2.defaultDisplayColumns || keys2;
  });
  function getCheckboxOptions(columns2) {
    var arr = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var _loop = function _loop2(i2) {
      var _item$children;
      var item = columns2[i2];
      if (item.colKey) {
        arr.push({
          label: function label() {
            return renderTitle(context.slots, item, i2);
          },
          value: item.colKey,
          disabled: !enabledColKeys.value.has(item.colKey)
        });
      }
      if ((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length) {
        getCheckboxOptions(item.children, arr);
      }
    };
    for (var i = 0, len2 = columns2.length; i < len2; i++) {
      _loop(i);
    }
    return arr;
  }
  var handleCheckChange = function handleCheckChange2(val, ctx) {
    var _props$onColumnChange;
    columnCheckboxKeys.value = val;
    var params = {
      columns: val,
      type: ctx.type,
      currentColumn: getCurrentRowByKey(columns.value, String(ctx.current)),
      e: ctx.e
    };
    (_props$onColumnChange = props2.onColumnChange) === null || _props$onColumnChange === void 0 ? void 0 : _props$onColumnChange.call(props2, params);
  };
  var handleClickAllShowColumns = function handleClickAllShowColumns2(checked, ctx) {
    if (checked) {
      var _checkboxOptions$valu, _props$onColumnChange2;
      var newData = ((_checkboxOptions$valu = checkboxOptions.value) === null || _checkboxOptions$valu === void 0 ? void 0 : _checkboxOptions$valu.map(function(t) {
        return t.value;
      })) || [];
      columnCheckboxKeys.value = newData;
      (_props$onColumnChange2 = props2.onColumnChange) === null || _props$onColumnChange2 === void 0 ? void 0 : _props$onColumnChange2.call(props2, {
        type: "check",
        columns: newData,
        e: ctx.e
      });
    } else {
      var _props$onColumnChange3;
      var disabledColKeys = checkboxOptions.value.filter(function(t) {
        return t.disabled;
      }).map(function(t) {
        return t.value;
      });
      columnCheckboxKeys.value = disabledColKeys;
      (_props$onColumnChange3 = props2.onColumnChange) === null || _props$onColumnChange3 === void 0 ? void 0 : _props$onColumnChange3.call(props2, {
        type: "uncheck",
        columns: disabledColKeys,
        e: ctx.e
      });
    }
  };
  var handleToggleColumnController = function handleToggleColumnController2() {
    var _columnController$val4;
    dialogInstance.value = DialogPlugin.confirm(_objectSpread$c({
      header: globalConfig.value.columnConfigTitleText,
      body: function body() {
        var _columnController$val2, _columnController$val3;
        var widthMode = ((_columnController$val2 = columnController.value) === null || _columnController$val2 === void 0 ? void 0 : _columnController$val2.displayType) === "fixed-width" ? "fixed" : "auto";
        var checkedLength = intersectionChecked.value.length;
        var isCheckedAll = checkedLength === enabledColKeys.value.size;
        var isIndeterminate = checkedLength > 0 && checkedLength < enabledColKeys.value.size;
        var defaultNode = createVNode("div", {
          "class": ["".concat(classPrefix.value, "-table__column-controller"), "".concat(classPrefix.value, "-table__column-controller--").concat(widthMode)]
        }, [createVNode("div", {
          "class": "".concat(classPrefix.value, "-table__column-controller-body")
        }, [createVNode("p", {
          "class": "".concat(classPrefix.value, "-table__column-controller-desc")
        }, [globalConfig.value.columnConfigDescriptionText]), createVNode("div", {
          "class": "".concat(classPrefix.value, "-table__column-controller-block")
        }, [createVNode(Checkbox, {
          "indeterminate": isIndeterminate,
          "checked": isCheckedAll,
          "onChange": handleClickAllShowColumns
        }, {
          "default": function _default14() {
            return [globalConfig.value.selectAllText];
          }
        })]), createVNode("div", {
          "class": "".concat(classPrefix.value, "-table__column-controller-block")
        }, [createVNode(CheckboxGroup, mergeProps({
          "options": checkboxOptions.value
        }, ((_columnController$val3 = columnController.value) === null || _columnController$val3 === void 0 ? void 0 : _columnController$val3.checkboxProps) || {}, {
          "value": columnCheckboxKeys.value,
          "onChange": handleCheckChange
        }), null)])])]);
        return defaultNode;
      },
      confirmBtn: globalConfig.value.confirmText,
      cancelBtn: globalConfig.value.cancelText,
      width: 612,
      onConfirm: function onConfirm() {
        setTDisplayColumns(_toConsumableArray(columnCheckboxKeys.value));
        if (columnControllerVisible.value === void 0) {
          dialogInstance.value.hide();
        } else {
          var _props$onColumnContro;
          (_props$onColumnContro = props2.onColumnControllerVisibleChange) === null || _props$onColumnContro === void 0 ? void 0 : _props$onColumnContro.call(props2, false, {
            trigger: "cancel"
          });
          context.emit("update:columnControllerVisible", false);
        }
      },
      onClose: function onClose() {
        if (columnControllerVisible.value === void 0) {
          dialogInstance.value.hide();
        } else {
          var _props$onColumnContro2;
          (_props$onColumnContro2 = props2.onColumnControllerVisibleChange) === null || _props$onColumnContro2 === void 0 ? void 0 : _props$onColumnContro2.call(props2, false, {
            trigger: "confirm"
          });
          context.emit("update:columnControllerVisible", false);
        }
      }
    }, ((_columnController$val4 = columnController.value) === null || _columnController$val4 === void 0 ? void 0 : _columnController$val4.dialogProps) || {}));
  };
  watch([columnControllerVisible], function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1), visible = _ref4[0];
    if (visible === void 0)
      return;
    if (dialogInstance.value) {
      visible ? dialogInstance.value.show() : dialogInstance.value.hide();
    } else {
      visible && handleToggleColumnController();
    }
  }, {
    immediate: true
  });
  var renderColumnController = function renderColumnController2() {
    var _props$columnControll;
    var isColumnController = !!(columnController.value && Object.keys(columnController.value).length);
    var placement = isColumnController ? columnController.value.placement || "top-right" : "";
    if (isColumnController && columnController.value.hideTriggerButton)
      return null;
    var classes = ["".concat(classPrefix.value, "-table__column-controller-trigger"), _defineProperty$2({}, "".concat(classPrefix.value, "-align-").concat(placement), !!placement)];
    return createVNode("div", {
      "class": classes
    }, [createVNode(Button, mergeProps({
      "theme": "default",
      "variant": "outline",
      "onClick": handleToggleColumnController,
      "content": globalConfig.value.columnConfigButtonText
    }, (_props$columnControll = props2.columnController) === null || _props$columnControll === void 0 ? void 0 : _props$columnControll.buttonProps), {
      icon: function icon() {
        return createVNode(SettingIcon$1, null, null);
      }
    })]);
  };
  return {
    tDisplayColumns,
    columnCheckboxKeys,
    checkboxOptions,
    renderColumnController
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useRowExpand(props2, context) {
  var _toRefs = toRefs(props2), expandedRowKeys = _toRefs.expandedRowKeys;
  var renderTNode = useTNodeJSX();
  var _useConfig = useConfig("table"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = useGlobalIcon({
    ChevronRightCircleIcon: chevronRightCircle
  }), ChevronRightCircleIcon$1 = _useGlobalIcon.ChevronRightCircleIcon;
  var _useClassName = useClassName(), tableExpandClasses = _useClassName.tableExpandClasses, positiveRotate90 = _useClassName.positiveRotate90, tableFullRowClasses = _useClassName.tableFullRowClasses;
  var _useDefaultValue = useDefaultValue(expandedRowKeys, props2.defaultExpandedRowKeys || [], props2.onExpandChange, "expandedRowKeys"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), tExpandedRowKeys = _useDefaultValue2[0], setTExpandedRowKeys = _useDefaultValue2[1];
  var showExpandedRow = computed(function() {
    return Boolean(props2.expandedRow || context.slots.expandedRow || context.slots["expanded-row"]);
  });
  var showExpandIconColumn = computed(function() {
    return props2.expandIcon !== false && showExpandedRow.value;
  });
  var isFirstColumnFixed = computed(function() {
    var _props$columns;
    return ((_props$columns = props2.columns) === null || _props$columns === void 0 || (_props$columns = _props$columns[0]) === null || _props$columns === void 0 ? void 0 : _props$columns.fixed) === "left";
  });
  var onToggleExpand = function onToggleExpand2(e, row) {
    props2.expandOnRowClick && e.stopPropagation();
    var currentId = get_1(row, props2.rowKey || "id");
    var index2 = tExpandedRowKeys.value.indexOf(currentId);
    var newKeys = _toConsumableArray(tExpandedRowKeys.value);
    index2 !== -1 ? newKeys.splice(index2, 1) : newKeys.push(currentId);
    setTExpandedRowKeys(newKeys, {
      expandedRowData: props2.data.filter(function(t2) {
        return newKeys.includes(get_1(t2, props2.rowKey || "id"));
      }),
      currentRowData: row
    });
  };
  var renderExpandIcon = function renderExpandIcon2(_, p) {
    var row = p.row, rowIndex = p.rowIndex;
    var currentId = get_1(row, props2.rowKey || "id");
    var expanded = tExpandedRowKeys.value.includes(currentId);
    var icon = renderTNode("expandIcon", {
      defaultNode: t(globalConfig.value.expandIcon) || createVNode(ChevronRightCircleIcon$1, null, null),
      params: {
        row,
        index: rowIndex
      }
    });
    if (!icon)
      return null;
    var classes = [tableExpandClasses.iconBox, tableExpandClasses[expanded ? "expanded" : "collapsed"], _defineProperty$2({}, positiveRotate90, expanded)];
    return createVNode("span", {
      "class": classes,
      "onClick": function onClick(e) {
        return onToggleExpand(e, row);
      }
    }, [icon]);
  };
  var getExpandColumn = function getExpandColumn2() {
    var expandCol = {
      colKey: "__EXPAND_ROW_ICON_COLUMN__",
      width: 46,
      className: tableExpandClasses.iconCell,
      fixed: isFirstColumnFixed.value ? "left" : void 0,
      cell: renderExpandIcon,
      stopPropagation: true
    };
    return expandCol;
  };
  var renderExpandedRow = function renderExpandedRow2(p) {
    var rowId = get_1(p.row, props2.rowKey || "id");
    if (!tExpandedRowKeys.value || !tExpandedRowKeys.value.includes(rowId))
      return null;
    var isFixedLeft = p.isWidthOverflow && props2.columns.find(function(item) {
      return item.fixed === "left";
    });
    return createVNode("tr", {
      "key": "expand_".concat(rowId),
      "class": [tableExpandClasses.row, _defineProperty$2({}, tableFullRowClasses.base, isFixedLeft)]
    }, [createVNode("td", {
      "colspan": p.columns.length
    }, [createVNode("div", {
      "class": [tableExpandClasses.rowInner, _defineProperty$2({}, tableFullRowClasses.innerFullRow, isFixedLeft)],
      "style": isFixedLeft ? {
        width: "".concat(p.tableWidth, "px")
      } : {}
    }, [createVNode("div", {
      "class": tableFullRowClasses.innerFullElement
    }, [renderTNode("expandedRow", {
      params: p
    })])])])]);
  };
  var onInnerExpandRowClick = function onInnerExpandRowClick2(p) {
    onToggleExpand(p.e, p.row);
  };
  return {
    showExpandedRow,
    showExpandIconColumn,
    getExpandColumn,
    renderExpandedRow,
    onInnerExpandRowClick
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function isRowSelectedDisabled(selectColumn, row, rowIndex) {
  var disabled = isFunction_1(selectColumn.disabled) ? selectColumn.disabled({
    row,
    rowIndex
  }) : selectColumn.disabled;
  if (selectColumn.checkProps) {
    if (isFunction_1(selectColumn.checkProps)) {
      disabled = disabled || selectColumn.checkProps({
        row,
        rowIndex
      }).disabled;
    } else if (selectColumn.checkProps === "object") {
      disabled = disabled || selectColumn.checkProps.disabled;
    }
  }
  return !!disabled;
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
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
function _objectSpread$b(target) {
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
function useRowSelect(props2, tableSelectedClasses) {
  var _toRefs = toRefs(props2), selectedRowKeys = _toRefs.selectedRowKeys, columns = _toRefs.columns, rowKey = _toRefs.rowKey, data2 = _toRefs.data, pagination = _toRefs.pagination, reserveSelectedRowOnPaginate = _toRefs.reserveSelectedRowOnPaginate;
  var currentPaginateData = ref(data2.value);
  var selectedRowClassNames = ref();
  var _useDefaultValue = useDefaultValue(selectedRowKeys, props2.defaultSelectedRowKeys || [], props2.onSelectChange, "selectedRowKeys"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), tSelectedRowKeys = _useDefaultValue2[0], setTSelectedRowKeys = _useDefaultValue2[1];
  var selectedRowDataMap = ref(/* @__PURE__ */ new Map());
  var selectColumn = computed(function() {
    return props2.columns.find(function(_ref) {
      var type = _ref.type;
      return ["multiple", "single"].includes(type);
    });
  });
  var canSelectedRows = computed(function() {
    var currentData = reserveSelectedRowOnPaginate.value ? data2.value : currentPaginateData.value;
    return currentData.filter(function(row, rowIndex) {
      return !isDisabled(row, rowIndex);
    });
  });
  var intersectionKeys = computed(function() {
    return intersection_1(tSelectedRowKeys.value, canSelectedRows.value.map(function(t) {
      return get_1(t, props2.rowKey || "id");
    }));
  });
  var allowUncheck = computed(function() {
    var singleSelectCol = columns.value.find(function(col) {
      return col.type === "single";
    });
    if (!singleSelectCol || !singleSelectCol.checkProps || !("allowUncheck" in singleSelectCol.checkProps))
      return false;
    return singleSelectCol.checkProps.allowUncheck;
  });
  watch([data2, pagination, reserveSelectedRowOnPaginate], function() {
    if (reserveSelectedRowOnPaginate.value)
      return;
    var _pagination$value = pagination.value, pageSize = _pagination$value.pageSize, current = _pagination$value.current, defaultPageSize = _pagination$value.defaultPageSize, defaultCurrent = _pagination$value.defaultCurrent;
    var tPageSize = pageSize || defaultPageSize;
    var tCurrent = current || defaultCurrent;
    currentPaginateData.value = data2.value.slice(tPageSize * (tCurrent - 1), tPageSize * tCurrent);
  }, {
    immediate: true
  });
  watch([data2, columns, tSelectedRowKeys, selectColumn, rowKey], function() {
    var _selectColumn$value;
    var disabledRowFunc = function disabledRowFunc2(p) {
      return selectColumn.value.disabled(p) ? tableSelectedClasses.disabled : "";
    };
    var disabledRowClass = (_selectColumn$value = selectColumn.value) !== null && _selectColumn$value !== void 0 && _selectColumn$value.disabled ? disabledRowFunc : void 0;
    var selected = new Set(tSelectedRowKeys.value);
    var selectedRowClassFunc = function selectedRowClassFunc2(_ref2) {
      var row = _ref2.row;
      var rowId = get_1(row, props2.rowKey || "id");
      return selected.has(rowId) ? tableSelectedClasses.selected : "";
    };
    var selectedRowClass = selected.size ? selectedRowClassFunc : void 0;
    selectedRowClassNames.value = [disabledRowClass, selectedRowClass];
  }, {
    immediate: true
  });
  function isDisabled(row, rowIndex) {
    return isRowSelectedDisabled(selectColumn.value, row, rowIndex);
  }
  function getSelectedHeader() {
    return function() {
      var isIndeterminate = intersectionKeys.value.length > 0 && intersectionKeys.value.length < canSelectedRows.value.length;
      var isChecked = intersectionKeys.value.length !== 0 && canSelectedRows.value.length !== 0 && intersectionKeys.value.length === canSelectedRows.value.length;
      return createVNode(Checkbox, {
        "checked": isChecked,
        "indeterminate": isIndeterminate,
        "disabled": !canSelectedRows.value.length,
        "onChange": handleSelectAll
      }, null);
    };
  }
  function getRowSelectDisabledData(p) {
    var col = p.col, row = p.row, rowIndex = p.rowIndex;
    var disabled = isFunction_1(col.disabled) ? col.disabled({
      row,
      rowIndex
    }) : col.disabled;
    var checkProps = isFunction_1(col.checkProps) ? col.checkProps({
      row,
      rowIndex
    }) : col.checkProps;
    return {
      disabled: disabled || (checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled),
      checkProps
    };
  }
  function renderSelectCell(p) {
    var column = p.col, _p$row = p.row, row = _p$row === void 0 ? {} : _p$row;
    var checked = tSelectedRowKeys.value.includes(get_1(row, props2.rowKey || "id"));
    var _getRowSelectDisabled = getRowSelectDisabledData(p), disabled = _getRowSelectDisabled.disabled, checkProps = _getRowSelectDisabled.checkProps;
    var selectBoxProps = _objectSpread$b(_objectSpread$b({
      checked,
      disabled
    }, checkProps), {}, {
      onClick: function onClick(e) {
        if (_typeof$2(e) === "object" && "e" in e) {
          var _e$e;
          (_e$e = e.e) === null || _e$e === void 0 ? void 0 : _e$e.stopPropagation();
        } else {
          e === null || e === void 0 ? void 0 : e.stopPropagation();
        }
      },
      onChange: function onChange() {
        return handleSelectChange(row);
      }
    });
    if (column.type === "single")
      return createVNode(Radio, selectBoxProps, null);
    if (column.type === "multiple") {
      var _props$indeterminateS;
      var isIndeterminate = (_props$indeterminateS = props2.indeterminateSelectedRowKeys) !== null && _props$indeterminateS !== void 0 && _props$indeterminateS.length ? props2.indeterminateSelectedRowKeys.includes(get_1(row, props2.rowKey)) : false;
      return createVNode(Checkbox, mergeProps({
        "indeterminate": isIndeterminate
      }, selectBoxProps), null);
    }
    return null;
  }
  function handleSelectChange() {
    var row = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var selectedRowKeys2 = _toConsumableArray(tSelectedRowKeys.value);
    var reRowKey = props2.rowKey || "id";
    var id = get_1(row, reRowKey);
    var selectedRowIndex = selectedRowKeys2.indexOf(id);
    var isExisted = selectedRowIndex !== -1;
    if (selectColumn.value.type === "multiple") {
      isExisted ? selectedRowKeys2.splice(selectedRowIndex, 1) : selectedRowKeys2.push(id);
    } else if (selectColumn.value.type === "single") {
      selectedRowKeys2 = isExisted && allowUncheck.value ? [] : [id];
    } else {
      log.warn("Table", "`column.type` must be one of `multiple` and `single`");
      return;
    }
    setTSelectedRowKeys(selectedRowKeys2, {
      selectedRowData: selectedRowKeys2.map(function(t) {
        return selectedRowDataMap.value.get(t);
      }),
      currentRowKey: id,
      currentRowData: row,
      type: isExisted ? "uncheck" : "check"
    });
  }
  function handleSelectAll(checked) {
    var _selectedRowKeys$valu;
    var reRowKey = props2.rowKey || "id";
    var canSelectedRowKeys = canSelectedRows.value.map(function(record) {
      return get_1(record, reRowKey);
    });
    var disabledSelectedRowKeys = ((_selectedRowKeys$valu = selectedRowKeys.value) === null || _selectedRowKeys$valu === void 0 ? void 0 : _selectedRowKeys$valu.filter(function(id) {
      return !canSelectedRowKeys.includes(id);
    })) || [];
    var allIds = checked ? [].concat(_toConsumableArray(disabledSelectedRowKeys), _toConsumableArray(canSelectedRowKeys)) : _toConsumableArray(disabledSelectedRowKeys);
    setTSelectedRowKeys(allIds, {
      selectedRowData: checked ? allIds.map(function(t) {
        return selectedRowDataMap.value.get(t);
      }) : [],
      type: checked ? "check" : "uncheck",
      currentRowKey: "CHECK_ALL_BOX"
    });
  }
  function formatToRowSelectColumn(col) {
    var isSelection = ["multiple", "single"].includes(col.type);
    if (!isSelection)
      return col;
    return _objectSpread$b(_objectSpread$b({}, col), {}, {
      width: col.width || 64,
      className: [tableSelectedClasses.checkCell, col.className],
      cell: function cell(_, p) {
        return renderSelectCell(p);
      },
      title: col.type === "multiple" ? getSelectedHeader() : col.title
    });
  }
  var onInnerSelectRowClick = function onInnerSelectRowClick2(_ref3) {
    var row = _ref3.row, index2 = _ref3.index;
    var selectedColIndex = props2.columns.findIndex(function(item) {
      return item.colKey === "row-select";
    });
    if (selectedColIndex === -1)
      return;
    var _getRowSelectDisabled2 = getRowSelectDisabledData({
      row,
      rowIndex: index2,
      col: props2.columns[selectedColIndex],
      colIndex: selectedColIndex
    }), disabled = _getRowSelectDisabled2.disabled;
    if (disabled)
      return;
    handleSelectChange(row);
  };
  watch(function() {
    return [_toConsumableArray(data2.value), rowKey];
  }, function() {
    for (var i = 0, len2 = data2.value.length; i < len2; i++) {
      selectedRowDataMap.value.set(get_1(data2.value[i], rowKey.value || "id"), data2.value[i]);
    }
  }, {
    immediate: true
  });
  return {
    selectedRowClassNames,
    currentPaginateData,
    setTSelectedRowKeys,
    formatToRowSelectColumn,
    onInnerSelectRowClick
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var SorterButton = defineComponent({
  name: "TSorterButton",
  props: {
    sortType: {
      type: String,
      "default": "all"
    },
    sortOrder: {
      type: String,
      "default": function _default13() {
        return "";
      }
    },
    sortIcon: Function,
    tooltipProps: Object,
    hideSortTips: Boolean
  },
  emits: ["sort-icon-click"],
  setup: function setup28(props2, context) {
    var _useClassName = useClassName(), tableSortClasses = _useClassName.tableSortClasses, negativeRotate180 = _useClassName.negativeRotate180;
    var renderTNode = useTNodeDefault();
    var _useConfig = useConfig("table"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
      ChevronDownIcon: chevronDown
    }), ChevronDownIcon$1 = _useGlobalIcon.ChevronDownIcon;
    var allowSortTypes = computed(function() {
      return props2.sortType === "all" ? ["asc", "desc"] : [props2.sortType];
    });
    var onSortIconClick = function onSortIconClick2(e, direction) {
      context.emit("sort-icon-click", e, {
        descending: direction === "desc"
      });
    };
    var getSortIcon = function getSortIcon2(direction, activeClass) {
      var defaultIcon = t(globalConfig.value.sortIcon) || createVNode(ChevronDownIcon$1, null, null);
      var icon = renderTNode("sortIcon", defaultIcon);
      var sortClassName = [activeClass, tableSortClasses.sortIcon, tableSortClasses.iconDirection[direction], _defineProperty$2({}, negativeRotate180, direction === "asc")];
      return createVNode("span", {
        "class": sortClassName,
        "onClick": function onClick(e) {
          return onSortIconClick(e, direction);
        }
      }, [icon]);
    };
    return {
      t,
      globalConfig,
      tableSortClasses,
      negativeRotate180,
      allowSortTypes,
      getSortIcon
    };
  },
  render: function render11() {
    var _this = this;
    var tableSortClasses = this.tableSortClasses;
    var classes = [tableSortClasses.trigger, _defineProperty$2({}, tableSortClasses.doubleIcon, this.allowSortTypes.length > 1)];
    var tooltips = {
      asc: this.globalConfig.sortAscendingOperationText,
      desc: this.globalConfig.sortDescendingOperationText
    };
    var sortButton = this.allowSortTypes.map(function(direction) {
      var _slot;
      var _this$hideSortTips;
      var activeClass = direction === _this.sortOrder ? tableSortClasses.iconActive : tableSortClasses.iconDefault;
      var cancelTips = _this.globalConfig.sortCancelOperationText;
      var tips = direction === _this.sortOrder ? cancelTips : tooltips[direction];
      if ((_this$hideSortTips = _this.hideSortTips) !== null && _this$hideSortTips !== void 0 ? _this$hideSortTips : _this.globalConfig.hideSortTips)
        return _this.getSortIcon(direction, activeClass);
      return createVNode(Tooltip, mergeProps({
        "content": tips,
        "placement": "right"
      }, _this.tooltipProps, {
        "showArrow": false,
        "class": _this.tableSortClasses.iconDirection[direction]
      }), _isSlot(_slot = _this.getSortIcon(direction, activeClass)) ? _slot : {
        "default": function _default14() {
          return [_slot];
        }
      });
    });
    return createVNode("div", {
      "class": classes
    }, [sortButton]);
  }
});
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
function _objectSpread$a(target) {
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
function useSorter(props2, _ref) {
  var slots = _ref.slots;
  var _toRefs = toRefs(props2), sort2 = _toRefs.sort, data2 = _toRefs.data;
  var originalData = ref();
  var _useDefaultValue = useDefaultValue(sort2, props2.defaultSort, props2.onSortChange, "sort"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), tSortInfo = _useDefaultValue2[0], setTSortInfo = _useDefaultValue2[1];
  var _useDefaultValue3 = useDefaultValue(data2, [], props2.onDataChange, "data"), _useDefaultValue4 = _slicedToArray(_useDefaultValue3, 2), tData = _useDefaultValue4[0], setTData = _useDefaultValue4[1];
  var sorterFuncMap = computed(function() {
    return getSorterFuncMap(props2.columns);
  });
  var innerSort = ref();
  var sortArray = computed(function() {
    var sort22 = tSortInfo.value;
    if (!sort22)
      return [];
    return isArray_1(sort22) ? sort22 : [sort22];
  });
  var sortMap = computed(function() {
    var sortMap2 = {};
    sortArray.value.forEach(function(info, index2) {
      var sortBy = info.sortBy;
      sortMap2[sortBy] = _objectSpread$a({
        index: index2
      }, info);
    });
    return sortMap2;
  });
  function getSorterFuncMap(columns) {
    var map = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    for (var i = 0, len2 = columns.length; i < len2; i++) {
      var _col$children;
      var col = columns[i];
      if (isFunction_1(col.sorter)) {
        map[col.colKey] = col.sorter;
      }
      if ((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
        getSorterFuncMap(col.children, map);
      }
    }
    return map;
  }
  function handleDataSort(sortInfo) {
    var sort22 = sortInfo;
    if (!Object.keys(sorterFuncMap.value).length)
      return;
    if (!originalData.value) {
      originalData.value = tData.value;
    }
    var isEmptyArraySort = !sort22 || sort22 instanceof Array && !sort22.length;
    var isEmptyObjectSort = !(sort22 instanceof Array) && !(sort22 !== null && sort22 !== void 0 && sort22.sortBy);
    if (isEmptyArraySort || isEmptyObjectSort) {
      setTData(originalData.value, {
        trigger: "sort"
      });
      return originalData.value;
    }
    var formatedSort = sort22 instanceof Array ? sort22 : [sort22];
    var newData = tData.value.slice().sort(function(a, b) {
      var sortResult = 0;
      for (var i = 0, len2 = formatedSort.length; i < len2; i++) {
        var item = formatedSort[i];
        var sortFunc = sorterFuncMap.value[item.sortBy];
        if (sortResult === 0 && sortFunc) {
          sortResult = item.descending ? sortFunc(b, a) : sortFunc(a, b);
        } else {
          break;
        }
      }
      return sortResult;
    });
    if (JSON.stringify(newData) === JSON.stringify(tData.value))
      return;
    setTData(newData, {
      trigger: "sort"
    });
    return newData;
  }
  function handleSortHeaderClick(col, p) {
    var _props$onChange;
    var sortInfo;
    if (props2.multipleSort) {
      sortInfo = getMultipleNextSort(col, p);
    } else {
      var sort22 = tSortInfo.value instanceof Array ? tSortInfo.value[0] : tSortInfo.value;
      sortInfo = getSingleNextSort(col, sort22, p);
    }
    var newData = handleDataSort(sortInfo);
    var currentData = newData || tData.value;
    var currentDataSource = currentData;
    setTSortInfo(sortInfo, {
      currentDataSource,
      col
    });
    (_props$onChange = props2.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props2, {
      sorter: sortInfo
    }, {
      currentData,
      trigger: "sorter"
    });
    innerSort.value = sortInfo;
  }
  function getSortOrder(descending) {
    if (descending === void 0)
      return;
    return descending ? "desc" : "asc";
  }
  function getSingleNextSort(col, sortInfo, p) {
    if (sortInfo && sortInfo.sortBy === col.colKey && sortInfo.descending === p.descending) {
      return void 0;
    }
    return {
      sortBy: col.colKey,
      descending: p.descending
    };
  }
  function getMultipleNextSort(col, p) {
    if (!Array.isArray(tSortInfo.value)) {
      tSortInfo.value = tSortInfo.value ? [tSortInfo.value] : [];
    }
    var sort22 = tSortInfo.value;
    var colKey = col.colKey;
    var result = _toConsumableArray(sort22);
    for (var i = 0, len2 = sort22.length; i < len2; i++) {
      if (sort22[i].sortBy === colKey) {
        var next = getSingleNextSort(col, sort22[i], p);
        next ? result[i] = next : result.splice(i, 1);
        return result;
      }
    }
    result.push({
      sortBy: colKey,
      descending: p.descending
    });
    return result;
  }
  function renderSortIcon(_ref2) {
    var _sortMap$value$col$co;
    var col = _ref2.col;
    if (!col.sorter)
      return null;
    var sorterButtonsProps = {
      sortType: col.sortType,
      sortOrder: getSortOrder((_sortMap$value$col$co = sortMap.value[col.colKey]) === null || _sortMap$value$col$co === void 0 ? void 0 : _sortMap$value$col$co.descending),
      sortIcon: props2.sortIcon,
      hideSortTips: props2.hideSortTips
    };
    return createVNode(SorterButton, mergeProps(sorterButtonsProps, {
      "onSortIconClick": function onSortIconClick(_, p) {
        return handleSortHeaderClick(col, p);
      }
    }), {
      sortIcon: slots.sortIcon
    });
  }
  var isSortInfoSame = function isSortInfoSame2(a, b) {
    var tmpSortInfo = isArray_1(a) ? a : [a];
    var tmpInnerSortInfo = isArray_1(b) ? b : [b];
    if (tmpSortInfo.length && !b)
      return false;
    var _loop = function _loop2() {
      var item = tmpSortInfo[i];
      var result = tmpInnerSortInfo.find(function(t) {
        return t.sortBy === item.sortBy;
      });
      if (!result)
        return {
          v: false
        };
      return {
        v: item.descending === result.descending
      };
    };
    for (var i = 0, len2 = tmpSortInfo.length; i < len2; i++) {
      var _ret = _loop();
      if (_typeof$2(_ret) === "object")
        return _ret.v;
    }
  };
  watch(function() {
    return [tSortInfo, props2.data];
  }, function() {
    if (!tSortInfo.value || !Object.keys(tSortInfo.value).length || !tData.value.length)
      return;
    if (!isSortInfoSame(tSortInfo.value, innerSort.value)) {
      handleDataSort(tSortInfo.value);
    }
  }, {
    immediate: true
  });
  return {
    renderSortIcon
  };
}
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
function _objectSpread$9(target) {
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
var TableFilterController = defineComponent({
  name: "TableFilterController",
  props: {
    column: Object,
    colIndex: Number,
    tFilterValue: Object,
    innerFilterValue: Object,
    tableFilterClasses: Object,
    isFocusClass: String,
    primaryTableElement: {},
    popupProps: Object,
    attach: [String, Function],
    onVisibleChange: Function
  },
  emits: ["inner-filter-change", "reset", "confirm"],
  setup: function setup29(props2, context) {
    var triggerElementRef = ref(null);
    var renderTNode = useTNodeDefault();
    var _useConfig = useConfig("table"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
      FilterIcon: filter
    }), FilterIcon$1 = _useGlobalIcon.FilterIcon;
    var filterPopupVisible = ref(false);
    var onFilterPopupVisibleChange = function onFilterPopupVisibleChange2(visible) {
      var _props$onVisibleChang;
      filterPopupVisible.value = visible;
      (_props$onVisibleChang = props2.onVisibleChange) === null || _props$onVisibleChang === void 0 ? void 0 : _props$onVisibleChang.call(props2, visible);
    };
    var renderComponent = function renderComponent2(column, filterComponentProps, component) {
      if (!component)
        return null;
      var isVueComponent = !!component.setup;
      if (isFunction_1(column.filter.component) && !isVueComponent) {
        return column.filter.component(function(v, b) {
          var tProps = _typeof$2(b) === "object" && "attrs" in b ? b.attrs : {};
          return h(v, {
            props: _objectSpread$9(_objectSpread$9({}, filterComponentProps), tProps)
          });
        });
      }
      var filter2 = column.filter || {};
      return createVNode(component, mergeProps({
        "class": filter2.classNames,
        "style": filter2.style
      }, filter2.attrs, filterComponentProps), null);
    };
    var getFilterContent = function getFilterContent2(column) {
      var _column$filter, _column$filter2;
      var types = ["single", "multiple", "input"];
      if (column.type && !types.includes(column.filter.type)) {
        console.error("TDesign Table Error: column.filter.type must be the following: ".concat(JSON.stringify(types)));
        return;
      }
      var innerFilterValue = props2.innerFilterValue;
      var component = {
        single: RadioGroup,
        multiple: CheckboxGroup,
        input: Input
      }[column.filter.type] || column.filter.component;
      if (!component && !column.filter.component)
        return;
      var filterComponentProps = _objectSpread$9(_objectSpread$9({
        options: ["single", "multiple"].includes(column.filter.type) ? (_column$filter = column.filter) === null || _column$filter === void 0 ? void 0 : _column$filter.list : void 0
      }, ((_column$filter2 = column.filter) === null || _column$filter2 === void 0 ? void 0 : _column$filter2.props) || {}), {}, {
        onChange: function onChange(val, ctx) {
          var _column$filter$props;
          context.emit("inner-filter-change", val, column);
          if ((_column$filter$props = column.filter.props) !== null && _column$filter$props !== void 0 && _column$filter$props.onChange) {
            var _column$filter$props$, _column$filter$props2;
            (_column$filter$props$ = (_column$filter$props2 = column.filter.props).onChange) === null || _column$filter$props$ === void 0 ? void 0 : _column$filter$props$.call(_column$filter$props2, val, ctx);
          }
        }
      });
      if (column.colKey && innerFilterValue && column.colKey in innerFilterValue) {
        var _props$innerFilterVal;
        filterComponentProps.value = (_props$innerFilterVal = props2.innerFilterValue) === null || _props$innerFilterVal === void 0 ? void 0 : _props$innerFilterVal[column.colKey];
      }
      if (column.filter.confirmEvents) {
        column.filter.confirmEvents.forEach(function(event) {
          filterComponentProps[event] = function() {
            context.emit("confirm", column);
            filterPopupVisible.value = false;
          };
        });
      }
      return createVNode("div", {
        "class": props2.tableFilterClasses.contentInner
      }, [renderComponent(column, filterComponentProps, component)]);
    };
    var getBottomButtons = function getBottomButtons2(column) {
      if (!column.filter.showConfirmAndReset)
        return;
      return createVNode("div", {
        "class": props2.tableFilterClasses.bottomButtons
      }, [createVNode(Button, {
        "theme": "default",
        "size": "small",
        "onClick": function onClick() {
          context.emit("reset", column);
          filterPopupVisible.value = false;
        }
      }, {
        "default": function _default14() {
          return [globalConfig.value.resetText];
        }
      }), createVNode(Button, {
        "theme": "primary",
        "size": "small",
        "onClick": function onClick() {
          context.emit("confirm", column);
          filterPopupVisible.value = false;
        }
      }, {
        "default": function _default14() {
          return [globalConfig.value.confirmText];
        }
      })]);
    };
    var getContent = function getContent2() {
      return createVNode("div", {
        "class": props2.tableFilterClasses.popupContent
      }, [getFilterContent(props2.column), getBottomButtons(props2.column)]);
    };
    return {
      t,
      globalConfig,
      FilterIcon: FilterIcon$1,
      filterPopupVisible,
      triggerElementRef,
      renderTNode,
      getContent,
      onFilterPopupVisibleChange
    };
  },
  render: function render12() {
    var _this$tFilterValue, _this = this;
    var column = this.column, popupProps = this.popupProps, FilterIcon = this.FilterIcon;
    if (!column.filter || column.filter && !Object.keys(column.filter).length)
      return null;
    var defaultFilterIcon = this.t(this.globalConfig.filterIcon) || createVNode(FilterIcon, null, null);
    var filterValue = (_this$tFilterValue = this.tFilterValue) === null || _this$tFilterValue === void 0 ? void 0 : _this$tFilterValue[column.colKey];
    var isObjectTrue = _typeof$2(filterValue) === "object" && !isEmpty_1(filterValue);
    var isValueTrue = filterValue && _typeof$2(filterValue) !== "object";
    return createVNode(Popup, mergeProps({
      "attach": this.attach || (this.primaryTableElement ? function() {
        return _this.primaryTableElement;
      } : void 0),
      "visible": this.filterPopupVisible,
      "destroyOnClose": true,
      "trigger": "click",
      "placement": "bottom-right",
      "showArrow": true,
      "overlayClassName": this.tableFilterClasses.popup,
      "onVisibleChange": function onVisibleChange(val) {
        return _this.onFilterPopupVisibleChange(val);
      },
      "class": [this.tableFilterClasses.icon, _defineProperty$2({}, this.isFocusClass, isObjectTrue || isValueTrue)],
      "content": this.getContent
    }, popupProps), {
      "default": function _default14() {
        return [createVNode("div", {
          "ref": "triggerElementRef"
        }, [_this.renderTNode("filterIcon", {
          defaultNode: defaultFilterIcon,
          params: {
            col: column,
            colIndex: _this.colIndex
          }
        })])];
      }
    });
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
function _objectSpread$8(target) {
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
function isFilterValueExist(value) {
  var isArrayTrue = value instanceof Array && value.length;
  var isObject2 = _typeof$2(value) === "object" && !(value instanceof Array);
  var isObjectTrue = isObject2 && Object.keys(value).length;
  return isArrayTrue || isObjectTrue || !["null", "", "undefined"].includes(String(value));
}
function filterEmptyData(data2) {
  var newFilterValue = {};
  Object.keys(data2).forEach(function(key2) {
    var item = data2[key2];
    if (isFilterValueExist(item)) {
      newFilterValue[key2] = item;
    }
  });
  return newFilterValue;
}
function useFilter(props2, context) {
  var primaryTableRef = ref(null);
  var _useConfig = useConfig("table"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
  var renderTNode = useTNodeDefault();
  var _toRefs = toRefs(props2), filterValue = _toRefs.filterValue;
  var _useClassName = useClassName(), tableFilterClasses = _useClassName.tableFilterClasses, isFocusClass = _useClassName.isFocusClass;
  var isTableOverflowHidden = ref();
  var _useDefaultValue = useDefaultValue(filterValue, props2.defaultFilterValue, props2.onFilterChange, "filterValue"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), tFilterValue = _useDefaultValue2[0], setTFilterValue = _useDefaultValue2[1];
  var innerFilterValue = ref(tFilterValue.value);
  var hasEmptyCondition = computed(function() {
    var filterEmpty = filterEmptyData(tFilterValue.value || {});
    return !tFilterValue.value || !Object.keys(filterEmpty).length;
  });
  watch([tFilterValue], function(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), val = _ref2[0];
    innerFilterValue.value = val;
  });
  function renderFirstFilterRow() {
    var _props$pagination, _props$data;
    if (hasEmptyCondition.value)
      return null;
    var defaultNode = createVNode("div", {
      "class": tableFilterClasses.result
    }, [createVNode("span", null, [t(globalConfig.value.searchResultText, {
      result: getFilterResultContent(),
      count: ((_props$pagination = props2.pagination) === null || _props$pagination === void 0 ? void 0 : _props$pagination.total) || ((_props$data = props2.data) === null || _props$data === void 0 ? void 0 : _props$data.length)
    })]), createVNode(Button, {
      "theme": "primary",
      "variant": "text",
      "onClick": onResetAll
    }, {
      "default": function _default14() {
        return [globalConfig.value.clearFilterResultButtonText];
      }
    })]);
    var filterContent = renderTNode("filterRow");
    if (props2.filterRow && !filterContent || props2.filterRow === null)
      return null;
    return createVNode("div", {
      "class": tableFilterClasses.inner
    }, [filterContent || defaultNode]);
  }
  function getFilterResultContent() {
    var arr = [];
    var columns = [];
    getAllColumns(props2.columns, columns);
    columns.filter(function(col) {
      return col.filter;
    }).forEach(function(col) {
      var value = tFilterValue.value[col.colKey];
      if (col.filter.list && !["null"].includes(String(value))) {
        var formattedValue = value instanceof Array ? value : [value];
        var label = [];
        col.filter.list.forEach(function(option2) {
          if (formattedValue.includes(option2.value)) {
            label.push(option2.label);
          }
        });
        value = label.join();
      }
      if (isFilterValueExist(value)) {
        arr.push("".concat(col.title, "：").concat(value));
      }
    });
    return arr.join("；");
  }
  function getAllColumns(col, columns) {
    col.forEach(function(column) {
      if (column.children) {
        getAllColumns(column.children, columns);
      }
      columns.push(column);
    });
  }
  function onInnerFilterChange(val, column) {
    var filterValue2 = _objectSpread$8(_objectSpread$8({}, innerFilterValue.value), {}, _defineProperty$2({}, column.colKey, val));
    innerFilterValue.value = filterValue2;
    if (!column.filter.showConfirmAndReset) {
      emitFilterChange(filterValue2, column);
    }
  }
  function emitFilterChange(filterValue2, column) {
    var _props$onChange;
    setTFilterValue(filterValue2, {
      col: column
    });
    (_props$onChange = props2.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props2, {
      filter: filterValue2
    }, {
      trigger: "filter"
    });
  }
  function onReset(column) {
    var _ref3, _column$filter$resetV;
    var filterValue2 = _objectSpread$8(_objectSpread$8({}, tFilterValue.value), {}, _defineProperty$2({}, column.colKey, (_ref3 = (_column$filter$resetV = column.filter.resetValue) !== null && _column$filter$resetV !== void 0 ? _column$filter$resetV : {
      single: "",
      multiple: [],
      input: ""
    }[column.filter.type]) !== null && _ref3 !== void 0 ? _ref3 : ""));
    emitFilterChange(filterValue2, column);
  }
  function onResetAll() {
    emitFilterChange({}, void 0);
  }
  function onConfirm(column) {
    emitFilterChange(innerFilterValue.value, column);
  }
  function renderFilterIcon(_ref4) {
    var _primaryTableRef$valu;
    var col = _ref4.col, colIndex = _ref4.colIndex;
    return createVNode(TableFilterController, {
      "column": col,
      "colIndex": colIndex,
      "filterIcon": props2.filterIcon,
      "tFilterValue": tFilterValue.value,
      "innerFilterValue": innerFilterValue.value,
      "tableFilterClasses": tableFilterClasses,
      "isFocusClass": isFocusClass,
      "popupProps": col.filter.popupProps,
      "attach": props2.attach,
      "onReset": onReset,
      "onConfirm": onConfirm,
      "onInnerFilterChange": onInnerFilterChange,
      "primaryTableElement": (_primaryTableRef$valu = primaryTableRef.value) === null || _primaryTableRef$valu === void 0 ? void 0 : _primaryTableRef$valu.$el,
      "onVisibleChange": onPopupVisibleChange
    }, {
      filterIcon: context.slots.filterIcon
    });
  }
  function setFilterPrimaryTableRef(primaryTableElement) {
    primaryTableRef.value = primaryTableElement;
  }
  function onPopupVisibleChange(visible) {
    if (visible && !isTableOverflowHidden.value) {
      isTableOverflowHidden.value = !visible;
    }
  }
  return {
    hasEmptyCondition,
    isTableOverflowHidden,
    renderFilterIcon,
    renderFirstFilterRow,
    setFilterPrimaryTableRef
  };
}
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys$8(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$8(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$8(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
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
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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
var version = "1.15.0";
function userAgent(pattern2) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern2);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx)
        break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent;
    if (parent === getWindowScrollingElement())
      break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0, i = 0, children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el, selector) {
  var last2 = el.lastElementChild;
  while (last2 && (last2 === Sortable.ghost || css(last2, "display") === "none" || selector && !matches(last2, selector))) {
    last2 = last2.previousElementSibling;
  }
  return last2 || null;
}
function index$1(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i))
      continue;
    for (var key2 in obj) {
      if (obj.hasOwnProperty(key2) && obj[key2] === arr[i][key2])
        return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key2 in src) {
      if (src.hasOwnProperty(key2)) {
        dst[key2] = src[key2];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
var expando = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault)
        return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded$1 = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data2 = _objectWithoutProperties(_ref, _excluded$1);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data2));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection2(el, options) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
}, _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
}, _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists && !ChromeForAndroid) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options = _extends({}, options);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter2 = options.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index$1(target);
    oldDraggableIndex = index$1(target, options.draggable);
    if (typeof filter2 === "function") {
      if (filter2.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    } else if (filter2) {
      filter2 = filter2.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter2) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mouseup", _this._onDrop);
      on(ownerDocument, "touchend", _this._onDrop);
      on(ownerDocument, "touchcancel", _this._onDrop);
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(ownerDocument, "mouseup", _this._disableDelayedDrag);
        on(ownerDocument, "touchend", _this._disableDelayedDrag);
        on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent)
          break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index$1(dragEl);
      newDraggableIndex = index$1(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index$1(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options = this.options;
    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el = rootEl2.children[i];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index$1(dragEl) < index$1(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index: index$1,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(element2) {
  return element2[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options) {
  return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll)
    return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval((function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }).bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function swapDragArrayElement(data2, currentIndex, targetIndex) {
  var newData = _toConsumableArray(data2);
  if (targetIndex - currentIndex > 0) {
    newData.splice(targetIndex + 1, 0, newData[currentIndex]);
    newData.splice(currentIndex, 1);
  } else {
    newData.splice(targetIndex, 0, newData[currentIndex]);
    newData.splice(currentIndex + 1, 1);
  }
  return newData;
}
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
function useDragSort(props2, context) {
  var _toRefs = toRefs(props2), sortOnRowDraggable = _toRefs.sortOnRowDraggable, dragSort = _toRefs.dragSort, data2 = _toRefs.data, rowKey = _toRefs.rowKey;
  var _useClassName = useClassName(), tableDraggableClasses = _useClassName.tableDraggableClasses, tableBaseClass = _useClassName.tableBaseClass, tableFullRowClasses = _useClassName.tableFullRowClasses;
  var primaryTableRef = ref(null);
  var columns = ref(props2.columns || []);
  var dragCol = computed(function() {
    return columns.value.find(function(item) {
      return item.colKey === "drag";
    });
  });
  var isRowDraggable = computed(function() {
    return sortOnRowDraggable.value || dragSort.value === "row";
  });
  var isRowHandlerDraggable = computed(function() {
    return ["row-handler", "row-handler-col"].includes(dragSort.value) && !!dragCol.value;
  });
  var isColDraggable = computed(function() {
    return ["col", "row-handler-col"].includes(dragSort.value);
  });
  var lastRowList = ref([]);
  var lastColList = ref([]);
  var dragRowInstanceTmp = null;
  var dragColInstanceTmp = null;
  if (props2.sortOnRowDraggable) {
    log.error("Table", "`sortOnRowDraggable` is going to be deprecated, use dragSort='row' instead.");
  }
  watch([data2], function(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), data22 = _ref2[0];
    lastRowList.value = (data22 === null || data22 === void 0 ? void 0 : data22.map(function(item) {
      return get_1(item, rowKey.value);
    })) || [];
    var timer = setTimeout(function() {
      if (data22.length) {
        var _dragRowInstanceTmp;
        (_dragRowInstanceTmp = dragRowInstanceTmp) === null || _dragRowInstanceTmp === void 0 ? void 0 : _dragRowInstanceTmp.sort(lastRowList.value);
      } else {
        var _primaryTableRef$valu;
        var trList = (_primaryTableRef$valu = primaryTableRef.value) === null || _primaryTableRef$valu === void 0 ? void 0 : _primaryTableRef$valu.$el.querySelectorAll("tr[data-id]");
        trList === null || trList === void 0 ? void 0 : trList.forEach(function(node) {
          return node.remove();
        });
      }
      clearTimeout(timer);
    }, 0);
  }, {
    immediate: true
  });
  watch(columns, function(columns2) {
    lastColList.value = columns2 ? columns2.map(function(t) {
      return t.colKey;
    }) : [];
    var timer = setTimeout(function() {
      var _dragColInstanceTmp;
      if (!dragColInstanceTmp || !dragColInstanceTmp.el)
        return;
      (_dragColInstanceTmp = dragColInstanceTmp) === null || _dragColInstanceTmp === void 0 ? void 0 : _dragColInstanceTmp.sort(lastColList.value);
      clearTimeout(timer);
    }, 0);
  });
  function getDataPageIndex(index2) {
    var pagination = props2.pagination;
    if (!props2.disableDataPage && pagination && data2.value.length > pagination.pageSize) {
      return pagination.pageSize * (pagination.current - 1) + index2;
    }
    return index2;
  }
  var registerRowDragEvent = function registerRowDragEvent2(element2) {
    if (!isRowHandlerDraggable.value && !isRowDraggable.value)
      return;
    var dragContainer = element2 === null || element2 === void 0 ? void 0 : element2.querySelector("tbody");
    if (!dragContainer) {
      console.error("tbody does not exist.");
      return null;
    }
    var baseOptions = _objectSpread$7({
      animation: 150,
      ghostClass: tableDraggableClasses.ghost,
      chosenClass: tableDraggableClasses.chosen,
      dragClass: tableDraggableClasses.dragging,
      filter: ".".concat(tableFullRowClasses.base),
      onMove: function onMove(evt) {
        return !hasClass(evt.related, tableFullRowClasses.base);
      },
      onEnd: function onEnd(evt) {
        var _dragRowInstanceTmp2, _props$onDragSort;
        if (evt.newIndex === evt.oldIndex)
          return;
        (_dragRowInstanceTmp2 = dragRowInstanceTmp) === null || _dragRowInstanceTmp2 === void 0 ? void 0 : _dragRowInstanceTmp2.sort(lastRowList.value);
        var currentIndex = evt.oldIndex, targetIndex = evt.newIndex;
        if (isFunction_1(props2.firstFullRow) && props2.firstFullRow(h) || context.slots.firstFullRow) {
          currentIndex -= 1;
          targetIndex -= 1;
        }
        var params = {
          data: data2.value,
          currentIndex,
          current: data2.value[currentIndex],
          targetIndex,
          target: data2.value[targetIndex],
          newData: swapDragArrayElement(_toConsumableArray(props2.data), getDataPageIndex(currentIndex), getDataPageIndex(targetIndex)),
          e: evt,
          sort: "row"
        };
        params.currentData = params.newData;
        (_props$onDragSort = props2.onDragSort) === null || _props$onDragSort === void 0 ? void 0 : _props$onDragSort.call(props2, params);
      }
    }, props2.dragSortOptions);
    if (!dragContainer)
      return;
    if (isRowDraggable.value) {
      dragRowInstanceTmp = new Sortable(dragContainer, _objectSpread$7({}, baseOptions));
    } else {
      dragRowInstanceTmp = new Sortable(dragContainer, _objectSpread$7(_objectSpread$7({}, baseOptions), {}, {
        handle: ".".concat(tableDraggableClasses.handle)
      }));
    }
    lastRowList.value = dragRowInstanceTmp.toArray();
  };
  var registerOneLevelColDragEvent = function registerOneLevelColDragEvent2(container, recover) {
    var options = _objectSpread$7({
      animation: 150,
      dataIdAttr: "data-colkey",
      direction: "vertical",
      ghostClass: tableDraggableClasses.ghost,
      chosenClass: tableDraggableClasses.chosen,
      dragClass: tableDraggableClasses.dragging,
      handle: ".".concat(tableBaseClass.thCellInner),
      onEnd: function onEnd(evt) {
        var _props$onDragSort2;
        if (evt.newIndex === evt.oldIndex)
          return;
        if (recover) {
          var _dragColInstanceTmp2;
          (_dragColInstanceTmp2 = dragColInstanceTmp) === null || _dragColInstanceTmp2 === void 0 ? void 0 : _dragColInstanceTmp2.sort(_toConsumableArray(lastColList.value));
        }
        var oldIndex2 = evt.oldIndex, newIndex2 = evt.newIndex, targetElement = evt.target;
        var currentIndex = recover ? oldIndex2 : newIndex2;
        var targetIndex = recover ? newIndex2 : oldIndex2;
        var oldElement = targetElement.children[currentIndex];
        var newElement = targetElement.children[targetIndex];
        var current = getColumnDataByKey(columns.value, oldElement.dataset.colkey);
        var target = getColumnDataByKey(columns.value, newElement.dataset.colkey);
        if (!current || !current.colKey) {
          log.error("Table", "colKey is missing in ".concat(JSON.stringify(current)));
        }
        if (!target || !target.colKey) {
          log.error("Table", "colKey is missing in ".concat(JSON.stringify(target)));
        }
        currentIndex = getColumnIndexByKey(props2.columns, current.colKey);
        targetIndex = getColumnIndexByKey(props2.columns, target.colKey);
        var params = {
          data: columns.value,
          currentIndex,
          current,
          targetIndex,
          target,
          newData: swapDragArrayElement(_toConsumableArray(props2.columns), currentIndex, targetIndex),
          e: evt,
          sort: "col"
        };
        params.currentData = params.newData;
        (_props$onDragSort2 = props2.onDragSort) === null || _props$onDragSort2 === void 0 ? void 0 : _props$onDragSort2.call(props2, params);
      }
    }, props2.dragSortOptions);
    if (!container)
      return;
    dragColInstanceTmp = new Sortable(container, options);
    return dragColInstanceTmp;
  };
  var registerColDragEvent = function registerColDragEvent2(tableElement) {
    if (!isColDraggable.value || !tableElement)
      return;
    var trList = tableElement.querySelectorAll("thead > tr");
    if (trList.length <= 1) {
      var _trList = _slicedToArray(trList, 1), container = _trList[0];
      var dragInstanceTmp = registerOneLevelColDragEvent(container, true);
      lastColList.value = dragInstanceTmp === null || dragInstanceTmp === void 0 ? void 0 : dragInstanceTmp.toArray();
    } else {
      trList === null || trList === void 0 ? void 0 : trList.forEach(function(container2) {
        registerOneLevelColDragEvent(container2, false);
      });
    }
  };
  function setDragSortPrimaryTableRef(primaryTableElement) {
    primaryTableRef.value = primaryTableElement;
  }
  function setDragSortColumns(val) {
    columns.value = val;
  }
  watch([primaryTableRef], function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1), val = _ref4[0];
    if (!val || !val.$el)
      return;
    registerRowDragEvent(val.$el);
    registerColDragEvent(val.$el);
    var timer = setTimeout(function() {
      if (val.$refs.affixHeaderRef) {
        registerColDragEvent(val.$refs.affixHeaderRef);
      }
      clearTimeout(timer);
    });
  });
  return {
    isRowDraggable,
    isRowHandlerDraggable,
    isColDraggable,
    setDragSortPrimaryTableRef,
    setDragSortColumns
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function useAsyncLoading(props2) {
  var renderTNode = useTNodeJSX();
  var _useConfig = useConfig("table"), globalConfig = _useConfig.globalConfig;
  var _useClassName = useClassName(), isLoadingClass = _useClassName.isLoadingClass, isLoadMoreClass = _useClassName.isLoadMoreClass, asyncLoadingClass = _useClassName.asyncLoadingClass;
  var classes = computed(function() {
    var _ref;
    return [asyncLoadingClass, (_ref = {}, _defineProperty$2(_ref, isLoadingClass, props2.asyncLoading === "loading"), _defineProperty$2(_ref, isLoadMoreClass, props2.asyncLoading === "load-more"), _ref)];
  });
  function onLoadClick() {
    var _props$onAsyncLoading;
    if (!isString_1(props2.asyncLoading))
      return;
    (_props$onAsyncLoading = props2.onAsyncLoadingClick) === null || _props$onAsyncLoading === void 0 ? void 0 : _props$onAsyncLoading.call(props2, {
      status: props2.asyncLoading
    });
  }
  function renderAsyncLoading() {
    var asyncLoadingNode = renderTNode("asyncLoading");
    if (isString_1(asyncLoadingNode)) {
      var asyncLoading = props2.asyncLoading;
      var loadingText = {
        "load-more": globalConfig.value.loadingMoreText,
        loading: globalConfig.value.loadingText
      }[String(asyncLoading)];
      return createVNode("div", {
        "class": classes.value,
        "onClick": onLoadClick
      }, [createVNode(Loading, {
        "indicator": asyncLoading === "loading",
        "loading": !!asyncLoading,
        "size": "small",
        "text": loadingText
      }, null)]);
    }
    if (![null, false, void 0].includes(asyncLoadingNode)) {
      return createVNode("div", {
        "class": classes.value,
        "onClick": onLoadClick
      }, [asyncLoadingNode]);
    }
    return null;
  }
  return {
    renderAsyncLoading
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableRest();
}
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
var EditableCell = defineComponent({
  name: "TableEditableCell",
  props: {
    row: Object,
    rowIndex: Number,
    col: Object,
    colIndex: Number,
    oldCell: [Function, String],
    tableBaseClass: Object,
    cellEmptyContent: [Function, String],
    editable: {
      type: Boolean,
      "default": void 0
    },
    readonly: {
      type: Boolean
    },
    errors: {
      type: Array,
      "default": void 0
    },
    onChange: Function,
    onValidate: Function,
    onRuleChange: Function,
    onEditableChange: Function
  },
  setup: function setup30(props2, context) {
    var _props$col$edit;
    var _toRefs = toRefs(props2), row = _toRefs.row, col = _toRefs.col;
    ref(null);
    var isEdit = ref(((_props$col$edit = props2.col.edit) === null || _props$col$edit === void 0 ? void 0 : _props$col$edit.defaultEditable) || false);
    var editValue = ref();
    var errorList = ref();
    var classPrefix = usePrefixClass();
    var _useGlobalIcon = useGlobalIcon({
      Edit1Icon: edit1
    }), Edit1Icon$1 = _useGlobalIcon.Edit1Icon;
    var updateEditedCellValue = function updateEditedCellValue2(val) {
      editValue.value = val;
    };
    var editOnListeners = computed(function() {
      var _col$value$edit, _col$value$edit$on;
      return ((_col$value$edit = col.value.edit) === null || _col$value$edit === void 0 || (_col$value$edit$on = _col$value$edit.on) === null || _col$value$edit$on === void 0 ? void 0 : _col$value$edit$on.call(_col$value$edit, _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
        editedRow: currentRow.value,
        updateEditedCellValue
      }))) || {};
    });
    var cellParams = computed(function() {
      return {
        rowIndex: props2.rowIndex,
        colIndex: props2.colIndex,
        col: props2.col,
        row: props2.row
      };
    });
    var currentRow = computed(function() {
      var colKey = col.value.colKey;
      var _ref = colKey.split(".") || [], _ref2 = _toArray(_ref), firstKey = _ref2[0], restKeys = _ref2.slice(1);
      var newRow = _objectSpread$6({}, row.value);
      if (restKeys.length) {
        newRow[firstKey] = cloneDeep_1(row.value[firstKey]);
        set_1(newRow[firstKey], restKeys.join("."), editValue.value);
      } else {
        set_1(newRow, colKey, editValue.value);
      }
      return newRow;
    });
    var cellNode = computed(function() {
      var node = renderCell({
        row: currentRow.value,
        col: _objectSpread$6(_objectSpread$6({}, col.value), {}, {
          cell: props2.oldCell
        }),
        rowIndex: props2.rowIndex,
        colIndex: props2.colIndex
      }, context.slots, {
        cellEmptyContent: props2.cellEmptyContent
      });
      return node;
    });
    var componentProps = computed(function() {
      var _edit$abortEditOnEven;
      var edit = col.value.edit;
      if (!edit)
        return {};
      var editProps = isFunction_1(edit.props) ? edit.props(_objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
        editedRow: currentRow.value,
        updateEditedCellValue
      })) : _objectSpread$6({}, edit.props);
      delete editProps.onChange;
      delete editProps.value;
      (_edit$abortEditOnEven = edit.abortEditOnEvent) === null || _edit$abortEditOnEven === void 0 ? void 0 : _edit$abortEditOnEven.forEach(function(item) {
        delete editProps[item];
      });
      return editProps;
    });
    var isAbortEditOnChange = computed(function() {
      var _edit$abortEditOnEven2;
      var edit = col.value.edit;
      if (!edit)
        return false;
      return Boolean((_edit$abortEditOnEven2 = edit.abortEditOnEvent) === null || _edit$abortEditOnEven2 === void 0 ? void 0 : _edit$abortEditOnEven2.includes("onChange"));
    });
    var validateEdit = function validateEdit2(trigger) {
      return new Promise(function(resolve) {
        var params = {
          result: [_objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
            errorList: [],
            value: editValue.value
          })],
          trigger
        };
        var rules = isFunction_1(col.value.edit.rules) ? col.value.edit.rules(cellParams.value) : col.value.edit.rules;
        if (!col.value.edit || !rules || !rules.length) {
          var _props$onValidate;
          (_props$onValidate = props2.onValidate) === null || _props$onValidate === void 0 ? void 0 : _props$onValidate.call(props2, params);
          resolve(true);
          return;
        }
        validate(editValue.value, rules).then(function(result) {
          var _props$onValidate2;
          var list = result === null || result === void 0 ? void 0 : result.filter(function(t) {
            return !t.result;
          });
          params.result[0].errorList = list;
          (_props$onValidate2 = props2.onValidate) === null || _props$onValidate2 === void 0 ? void 0 : _props$onValidate2.call(props2, params);
          if (!list || !list.length) {
            errorList.value = [];
            resolve(true);
          } else {
            errorList.value = list;
            resolve(list);
          }
        });
      });
    };
    var isSame = function isSame2(a, b) {
      if (isObject_1(a) && isObject_1(b)) {
        return JSON.stringify(a) === JSON.stringify(b);
      }
      return a === b;
    };
    var updateAndSaveAbort = function updateAndSaveAbort2(outsideAbortEvent, eventName) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      validateEdit("self").then(function(result) {
        var _editOnListeners$valu, _editOnListeners$valu2;
        if (result !== true)
          return;
        var oldValue = get_1(row.value, col.value.colKey);
        if (!isSame(editValue.value, oldValue)) {
          editValue.value = oldValue;
          outsideAbortEvent === null || outsideAbortEvent === void 0 ? void 0 : outsideAbortEvent.apply(void 0, args);
        }
        (_editOnListeners$valu = (_editOnListeners$valu2 = editOnListeners.value)[eventName]) === null || _editOnListeners$valu === void 0 ? void 0 : _editOnListeners$valu.call(_editOnListeners$valu2, args[2]);
        var timer = setTimeout(function() {
          var _props$onEditableChan;
          isEdit.value = false;
          errorList.value = [];
          (_props$onEditableChan = props2.onEditableChange) === null || _props$onEditableChan === void 0 ? void 0 : _props$onEditableChan.call(props2, _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
            value: editValue.value,
            editedRow: _objectSpread$6(_objectSpread$6({}, props2.row), {}, _defineProperty$2({}, props2.col.colKey, editValue.value)),
            validateEdit,
            isEdit: false
          }));
          clearTimeout(timer);
        }, 0);
      });
    };
    var listeners = computed(function() {
      var _edit$abortEditOnEven3;
      var edit = col.value.edit;
      var isCellEditable = props2.editable === void 0;
      if (!isEdit.value || !isCellEditable)
        return;
      if (!(edit !== null && edit !== void 0 && (_edit$abortEditOnEven3 = edit.abortEditOnEvent) !== null && _edit$abortEditOnEven3 !== void 0 && _edit$abortEditOnEven3.length))
        return {};
      var tListeners = {};
      var outsideAbortEvent = edit === null || edit === void 0 ? void 0 : edit.onEdited;
      edit.abortEditOnEvent.forEach(function(itemEvent) {
        if (itemEvent === "onChange")
          return;
        tListeners[itemEvent] = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          updateAndSaveAbort.apply(void 0, [outsideAbortEvent, itemEvent, _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
            trigger: itemEvent,
            newRowData: currentRow.value
          })].concat(args));
        };
      });
      return tListeners;
    });
    var onEditChange = function onEditChange2(val) {
      var _props$onChange, _props$onRuleChange, _editOnListeners$valu3, _editOnListeners$valu4, _col$value$edit3;
      editValue.value = val;
      var params = _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
        value: val,
        editedRow: _objectSpread$6(_objectSpread$6({}, props2.row), {}, _defineProperty$2({}, props2.col.colKey, val))
      });
      (_props$onChange = props2.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props2, params);
      (_props$onRuleChange = props2.onRuleChange) === null || _props$onRuleChange === void 0 ? void 0 : _props$onRuleChange.call(props2, params);
      (_editOnListeners$valu3 = editOnListeners.value) === null || _editOnListeners$valu3 === void 0 || (_editOnListeners$valu4 = _editOnListeners$valu3.onChange) === null || _editOnListeners$valu4 === void 0 ? void 0 : _editOnListeners$valu4.call(_editOnListeners$valu3, params);
      var isCellEditable = props2.editable === void 0;
      if (isCellEditable && isAbortEditOnChange.value) {
        var _col$value$edit2;
        var outsideAbortEvent = (_col$value$edit2 = col.value.edit) === null || _col$value$edit2 === void 0 ? void 0 : _col$value$edit2.onEdited;
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        updateAndSaveAbort.apply(void 0, [outsideAbortEvent, "change", _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
          trigger: "onChange",
          newRowData: currentRow.value
        })].concat(args));
      }
      if (((_col$value$edit3 = col.value.edit) === null || _col$value$edit3 === void 0 ? void 0 : _col$value$edit3.validateTrigger) === "change") {
        validateEdit("self");
      }
    };
    var documentClickHandler = function documentClickHandler2(e) {
      var _e$composedPath;
      if (!col.value.edit || !col.value.edit.component)
        return;
      if (!isEdit.value)
        return;
      var path = ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath.call(e)) || e.path || [];
      var node = path.find(function(node2) {
        var _node2$classList;
        return (_node2$classList = node2.classList) === null || _node2$classList === void 0 ? void 0 : _node2$classList.contains("".concat(classPrefix.value, "-popup__content"));
      });
      if (node)
        return;
      var outsideAbortEvent = col.value.edit.onEdited;
      updateAndSaveAbort(outsideAbortEvent, "", _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
        trigger: "document",
        newRowData: currentRow.value
      }));
    };
    var enterEdit = function enterEdit2() {
      var _props$onEditableChan2;
      (_props$onEditableChan2 = props2.onEditableChange) === null || _props$onEditableChan2 === void 0 ? void 0 : _props$onEditableChan2.call(props2, _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
        value: editValue.value,
        editedRow: props2.row,
        isEdit: true,
        validateEdit
      }));
    };
    var onCellClick = function onCellClick2(e) {
      isEdit.value = true;
      enterEdit();
      e.stopPropagation();
    };
    onMounted(function() {
      var _props$col$edit2;
      if ((_props$col$edit2 = props2.col.edit) !== null && _props$col$edit2 !== void 0 && _props$col$edit2.defaultEditable) {
        enterEdit();
      }
    });
    var cellValue = computed(function() {
      return get_1(row.value, col.value.colKey);
    });
    watch(cellValue, function(cellValue2) {
      editValue.value = cellValue2;
    }, {
      immediate: true
    });
    watch(isEdit, function(isEdit2) {
      var isCellEditable = props2.editable === void 0;
      if (!col.value.edit || !col.value.edit.component || !isCellEditable)
        return;
      if (isEdit2) {
        on$1(document, "click", documentClickHandler);
      } else {
        off$1(document, "click", documentClickHandler);
      }
    }, {
      immediate: true
    });
    watch(function() {
      return [props2.editable, props2.row, props2.col, props2.rowIndex, props2.colIndex];
    }, function(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1), editable = _ref4[0];
      if (editable === false) {
        editValue.value = cellValue.value;
      } else if (editable === true) {
        var _props$onRuleChange2;
        (_props$onRuleChange2 = props2.onRuleChange) === null || _props$onRuleChange2 === void 0 ? void 0 : _props$onRuleChange2.call(props2, _objectSpread$6(_objectSpread$6({}, cellParams.value), {}, {
          value: cellValue.value,
          editedRow: row.value
        }));
      }
    }, {
      immediate: true
    });
    watch(function() {
      return props2.errors;
    }, function(errors) {
      errorList.value = errors;
    });
    return function() {
      var _col$value$edit5, _errorList$value, _col$value$edit6, _errorList$value2;
      if (props2.readonly) {
        return cellNode.value;
      }
      if (props2.editable === void 0 && !isEdit.value || props2.editable === false) {
        var _col$value$edit4;
        return createVNode("div", {
          "class": props2.tableBaseClass.cellEditable,
          "onClick": onCellClick
        }, [cellNode.value, ((_col$value$edit4 = col.value.edit) === null || _col$value$edit4 === void 0 ? void 0 : _col$value$edit4.showEditIcon) !== false && createVNode(Edit1Icon$1, null, null)]);
      }
      var Component = (_col$value$edit5 = col.value.edit) === null || _col$value$edit5 === void 0 ? void 0 : _col$value$edit5.component;
      if (!Component) {
        log.error("Table", "edit.component is required.");
        return null;
      }
      var errorMessage = (_errorList$value = errorList.value) === null || _errorList$value === void 0 || (_errorList$value = _errorList$value[0]) === null || _errorList$value === void 0 ? void 0 : _errorList$value.message;
      var tmpEditOnListeners = _objectSpread$6({}, editOnListeners.value);
      delete tmpEditOnListeners.onChange;
      if ((_col$value$edit6 = col.value.edit) !== null && _col$value$edit6 !== void 0 && (_col$value$edit6 = _col$value$edit6.abortEditOnEvent) !== null && _col$value$edit6 !== void 0 && _col$value$edit6.length) {
        col.value.edit.abortEditOnEvent.forEach(function(onEventName) {
          if (tmpEditOnListeners[onEventName]) {
            delete tmpEditOnListeners[onEventName];
          }
        });
      }
      return createVNode("div", {
        "class": props2.tableBaseClass.cellEditWrap,
        "onClick": function onClick(e) {
          e.stopPropagation();
        },
        "ref": "tableEditableCellRef"
      }, [createVNode(Component, mergeProps({
        "status": errorMessage ? ((_errorList$value2 = errorList.value) === null || _errorList$value2 === void 0 || (_errorList$value2 = _errorList$value2[0]) === null || _errorList$value2 === void 0 ? void 0 : _errorList$value2.type) || "error" : void 0,
        "tips": errorMessage
      }, componentProps.value, listeners.value, tmpEditOnListeners, {
        "value": editValue.value,
        "onChange": onEditChange
      }), null)]);
    };
  }
});
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
var cellRuleMap = /* @__PURE__ */ new Map();
function useRowEdit(props2) {
  var errorListMap = ref({});
  var editableKeysMap = computed(function() {
    return getEditableKeysMap(props2.editableRowKeys, props2.data, props2.rowKey || "id");
  });
  var editingCells = ref({});
  var getErrorListMapByErrors = function getErrorListMapByErrors2(errors) {
    var errorMap = {};
    errors.forEach(function(_ref) {
      var row = _ref.row, col = _ref.col, errorList = _ref.errorList;
      var rowValue = get_1(row, props2.rowKey || "id");
      var key2 = [rowValue, col.colKey].join("__");
      if (errorList !== null && errorList !== void 0 && errorList.length) {
        errorMap[key2] = errorList;
      } else {
        delete errorMap[key2];
      }
    });
    return errorMap;
  };
  var validateOneRowData = function validateOneRowData2(rowValue) {
    var rowRules = cellRuleMap.get(rowValue);
    if (!rowRules)
      return;
    var list = rowRules.map(function(item) {
      return new Promise(function(resolve) {
        var editedRow = item.editedRow, col = item.col;
        var rules = isFunction_1(col.edit.rules) ? col.edit.rules(item) : col.edit.rules;
        if (!col.edit || !rules || !rules.length) {
          resolve(_objectSpread$5(_objectSpread$5({}, item), {}, {
            errorList: []
          }));
          return;
        }
        validate(get_1(editedRow, col.colKey), rules).then(function(r) {
          resolve(_objectSpread$5(_objectSpread$5({}, item), {}, {
            errorList: r.filter(function(t) {
              return !t.result;
            })
          }));
        });
      });
    });
    return new Promise(function(resolve, reject) {
      Promise.all(list).then(function(errors) {
        resolve({
          errors: errors.filter(function(t) {
            var _t$errorList;
            return (_t$errorList = t.errorList) === null || _t$errorList === void 0 ? void 0 : _t$errorList.length;
          }),
          errorMap: getErrorListMapByErrors(errors)
        });
      }, reject);
    });
  };
  var validateRowData = function validateRowData2(rowValue) {
    return new Promise(function(resolve, reject) {
      validateOneRowData(rowValue).then(function(_ref2) {
        var _props$onRowValidate;
        var errors = _ref2.errors, errorMap = _ref2.errorMap;
        errorListMap.value = errorMap;
        var tTrigger = "parent";
        (_props$onRowValidate = props2.onRowValidate) === null || _props$onRowValidate === void 0 ? void 0 : _props$onRowValidate.call(props2, {
          trigger: tTrigger,
          result: errors
        });
        resolve({
          trigger: tTrigger,
          result: errors
        });
      }, reject);
    });
  };
  var validateTableCellData = function validateTableCellData2() {
    var cellKeys = Object.keys(editingCells.value);
    var promiseList = cellKeys.map(function(cellKey) {
      return editingCells.value[cellKey].validateEdit("parent");
    });
    return new Promise(function(resolve, reject) {
      Promise.all(promiseList).then(function(arr) {
        var _props$onValidate;
        var allErrorListMap = {};
        arr.forEach(function(result, index2) {
          if (result === true)
            return;
          allErrorListMap[cellKeys[index2]] = result;
        });
        (_props$onValidate = props2.onValidate) === null || _props$onValidate === void 0 ? void 0 : _props$onValidate.call(props2, {
          result: allErrorListMap
        });
        resolve({
          result: allErrorListMap
        });
      }, reject);
    });
  };
  var validateTableData = function validateTableData2() {
    if (Object.keys(editingCells.value).length) {
      return validateTableCellData();
    }
    var promiseList = [];
    var data2 = props2.data || [];
    for (var i = 0, len2 = data2.length; i < len2; i++) {
      var rowValue = get_1(data2[i], props2.rowKey || "id");
      promiseList.push(validateOneRowData(rowValue));
    }
    return new Promise(function(resolve, reject) {
      Promise.all(promiseList).then(function(rList) {
        var _props$onValidate2;
        var allErrorListMap = {};
        rList.forEach(function() {
          var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            errors: [],
            errorMap: {}
          }, errorMap = _ref3.errorMap;
          errorMap && Object.assign(allErrorListMap, errorMap);
        });
        errorListMap.value = allErrorListMap;
        (_props$onValidate2 = props2.onValidate) === null || _props$onValidate2 === void 0 ? void 0 : _props$onValidate2.call(props2, {
          result: allErrorListMap
        });
        resolve({
          result: allErrorListMap
        });
      }, reject);
    });
  };
  var onRuleChange = function onRuleChange2(context) {
    if (props2.editableRowKeys) {
      var rowValue = get_1(context.row, props2.rowKey || "id");
      var rules = cellRuleMap.get(rowValue);
      if (rules) {
        var index2 = rules.findIndex(function(t) {
          return t.col.colKey === context.col.colKey;
        });
        if (index2 === -1) {
          rules.push(context);
        } else {
          rules[index2] = context;
        }
        cellRuleMap.set(rowValue, rules);
      } else {
        cellRuleMap.set(rowValue, [context]);
      }
    }
  };
  var clearValidateData = function clearValidateData2() {
    errorListMap.value = {};
  };
  var onPrimaryTableCellEditChange = function onPrimaryTableCellEditChange2(params) {
    var cellKey = getCellKey(params.row, props2.rowKey, params.col.colKey, params.colIndex);
    if (params.isEdit) {
      editingCells.value[cellKey] = params;
    } else {
      delete editingCells.value[cellKey];
    }
  };
  return {
    errorListMap,
    editableKeysMap,
    validateTableData,
    validateRowData,
    onRuleChange,
    clearValidateData,
    onPrimaryTableCellEditChange
  };
}
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
var OMIT_PROPS = ["hideSortTips", "dragSort", "defaultExpandedRowKeys", "defaultSelectedRowKeys", "columnController", "filterRow", "sortOnRowDraggable", "expandOnRowClick", "multipleSort", "expandIcon", "reserveSelectedRowOnPaginate", "selectOnRowClick", "onChange", "onAsyncLoadingClick", "onColumnChange", "onColumnControllerVisibleChange", "onDataChange", "onDisplayColumnsChange", "onDragSort", "onExpandChange", "onFilterChange", "onSelectChange", "onSortChange"];
var _PrimaryTable = defineComponent({
  name: "TPrimaryTable",
  props: _objectSpread$4(_objectSpread$4({}, baseTableProps), primaryTableProps),
  setup: function setup31(props2, context) {
    var renderTNode = useTNodeJSX();
    var _toRefs = toRefs(props2), columns = _toRefs.columns, columnController = _toRefs.columnController;
    var primaryTableRef = ref(null);
    var _useClassName = useClassName(), classPrefix = _useClassName.classPrefix, tableDraggableClasses = _useClassName.tableDraggableClasses, tableBaseClass = _useClassName.tableBaseClass, tableSelectedClasses = _useClassName.tableSelectedClasses, tableSortClasses = _useClassName.tableSortClasses;
    var _useStyle = useStyle(props2), sizeClassNames = _useStyle.sizeClassNames;
    var _useColumnController = useColumnController(props2, context), tDisplayColumns = _useColumnController.tDisplayColumns, renderColumnController = _useColumnController.renderColumnController;
    var _useRowExpand = useRowExpand(props2, context), showExpandedRow = _useRowExpand.showExpandedRow, showExpandIconColumn = _useRowExpand.showExpandIconColumn, getExpandColumn = _useRowExpand.getExpandColumn, renderExpandedRow = _useRowExpand.renderExpandedRow, onInnerExpandRowClick = _useRowExpand.onInnerExpandRowClick;
    var _useSorter = useSorter(props2, context), renderSortIcon = _useSorter.renderSortIcon;
    var _useRowSelect = useRowSelect(props2, tableSelectedClasses), selectedRowClassNames = _useRowSelect.selectedRowClassNames, currentPaginateData = _useRowSelect.currentPaginateData, formatToRowSelectColumn = _useRowSelect.formatToRowSelectColumn, setTSelectedRowKeys = _useRowSelect.setTSelectedRowKeys, onInnerSelectRowClick = _useRowSelect.onInnerSelectRowClick;
    var _useFilter = useFilter(props2, context), hasEmptyCondition = _useFilter.hasEmptyCondition, isTableOverflowHidden = _useFilter.isTableOverflowHidden, renderFilterIcon = _useFilter.renderFilterIcon, renderFirstFilterRow = _useFilter.renderFirstFilterRow, setFilterPrimaryTableRef = _useFilter.setFilterPrimaryTableRef;
    var _useDragSort = useDragSort(props2, context), isRowHandlerDraggable = _useDragSort.isRowHandlerDraggable, isRowDraggable = _useDragSort.isRowDraggable, isColDraggable = _useDragSort.isColDraggable, setDragSortPrimaryTableRef = _useDragSort.setDragSortPrimaryTableRef, setDragSortColumns = _useDragSort.setDragSortColumns;
    var _useTableHeader = useTableHeader(props2), renderTitleWidthIcon = _useTableHeader.renderTitleWidthIcon;
    var _useAsyncLoading = useAsyncLoading(props2), renderAsyncLoading = _useAsyncLoading.renderAsyncLoading;
    var _useEditableRow = useRowEdit(props2), errorListMap = _useEditableRow.errorListMap, editableKeysMap = _useEditableRow.editableKeysMap, validateRowData = _useEditableRow.validateRowData, validateTableData = _useEditableRow.validateTableData, onRuleChange = _useEditableRow.onRuleChange, clearValidateData = _useEditableRow.clearValidateData, onPrimaryTableCellEditChange = _useEditableRow.onPrimaryTableCellEditChange;
    var primaryTableClasses = computed(function() {
      var _ref;
      return _ref = {}, _defineProperty$2(_ref, tableDraggableClasses.colDraggable, isColDraggable.value), _defineProperty$2(_ref, tableDraggableClasses.rowHandlerDraggable, isRowHandlerDraggable.value), _defineProperty$2(_ref, tableDraggableClasses.rowDraggable, isRowDraggable.value), _defineProperty$2(_ref, tableBaseClass.overflowVisible, isTableOverflowHidden.value === false), _defineProperty$2(_ref, tableBaseClass.tableRowEdit, props2.editableRowKeys), _ref;
    });
    var tRowClassNames = computed(function() {
      var tClassNames = [props2.rowClassName, selectedRowClassNames.value];
      return tClassNames.filter(function(v) {
        return v;
      });
    });
    var tRowAttributes = computed(function() {
      var tAttributes = [props2.rowAttributes];
      if (isRowHandlerDraggable.value || isRowDraggable.value) {
        tAttributes.push(function(_ref2) {
          var row = _ref2.row;
          return {
            "data-id": get_1(row, props2.rowKey || "id")
          };
        });
      }
      return tAttributes.filter(function(v) {
        return v;
      });
    });
    onMounted(function() {
      setFilterPrimaryTableRef(primaryTableRef.value);
      setDragSortPrimaryTableRef(primaryTableRef.value);
    });
    context.expose({
      validateRowData,
      validateTableData,
      clearValidateData,
      refreshTable: function refreshTable() {
        primaryTableRef.value.refreshTable();
      },
      scrollToElement: function scrollToElement(data2) {
        primaryTableRef.value.virtualConfig.scrollToElement(data2);
      },
      scrollColumnIntoView: function scrollColumnIntoView(colKey) {
        primaryTableRef.value.scrollColumnIntoView(colKey);
      },
      baseTableRef: primaryTableRef
    });
    var getColumns = function getColumns2(columns2) {
      var arr = [];
      var _loop = function _loop2() {
        var _item$children, _tDisplayColumns$valu, _item$edit, _item$children2, _item$children3;
        var item = _objectSpread$4({}, columns2[i]);
        var isDisplayColumn = ((_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length) || ((_tDisplayColumns$valu = tDisplayColumns.value) === null || _tDisplayColumns$valu === void 0 ? void 0 : _tDisplayColumns$valu.includes(item.colKey));
        if (!isDisplayColumn && props2.columnController)
          return "continue";
        item = formatToRowSelectColumn(item);
        var sort2 = props2.sort;
        if (item.sorter && props2.showSortColumnBgColor) {
          var sorts = sort2 instanceof Array ? sort2 : [sort2];
          var sortedColumn = sorts.find(function(sort22) {
            return sort22 && sort22.sortBy === item.colKey && sort22.descending !== void 0;
          });
          if (sortedColumn) {
            item.className = item.className instanceof Array ? item.className.concat(tableSortClasses.sortColumn) : [item.className, tableSortClasses.sortColumn];
          }
        }
        if (item.sorter || item.filter) {
          var titleContent = renderTitle(context.slots, item, i);
          var _item = item, ellipsisTitle = _item.ellipsisTitle;
          item.title = function(h2, p) {
            var _primaryTableRef$valu;
            var sortIcon = item.sorter ? renderSortIcon(p) : null;
            var filterIcon = item.filter ? renderFilterIcon(p) : null;
            var attach = (_primaryTableRef$valu = primaryTableRef.value) === null || _primaryTableRef$valu === void 0 ? void 0 : _primaryTableRef$valu.tableContentRef;
            return renderTitleWidthIcon([titleContent, sortIcon, filterIcon], p.col, p.colIndex, ellipsisTitle, attach, {
              classPrefix,
              ellipsisOverlayClassName: props2.size !== "medium" ? sizeClassNames[props2.size] : ""
            });
          };
          item.ellipsisTitle = false;
        }
        if ((_item$edit = item.edit) !== null && _item$edit !== void 0 && _item$edit.component) {
          var oldCell = item.cell;
          item.cell = function(h2, p) {
            var cellProps = _objectSpread$4(_objectSpread$4({}, p), {}, {
              oldCell,
              tableBaseClass,
              cellEmptyContent: props2.cellEmptyContent,
              onChange: props2.onRowEdit,
              onValidate: props2.onRowValidate,
              onRuleChange,
              onEditableChange: onPrimaryTableCellEditChange
            });
            if (props2.editableRowKeys) {
              var _errorListMap$value;
              var rowValue = get_1(p.row, props2.rowKey || "id");
              cellProps.editable = editableKeysMap.value[rowValue] || false;
              var key2 = [rowValue, p.col.colKey].join("__");
              var errorList = (_errorListMap$value = errorListMap.value) === null || _errorListMap$value === void 0 ? void 0 : _errorListMap$value[key2];
              errorList && (cellProps.errors = errorList);
            }
            if (props2.editableCellState) {
              cellProps.readonly = !props2.editableCellState(p);
            }
            return createVNode(EditableCell, cellProps, context.slots);
          };
        }
        if ((_item$children2 = item.children) !== null && _item$children2 !== void 0 && _item$children2.length) {
          item.children = getColumns2(item.children);
        }
        if (!item.children || (_item$children3 = item.children) !== null && _item$children3 !== void 0 && _item$children3.length) {
          arr.push(item);
        }
      };
      for (var i = 0, len2 = columns2.length; i < len2; i++) {
        var _ret = _loop();
        if (_ret === "continue")
          continue;
      }
      return arr;
    };
    var tColumns = computed(function() {
      var cols = getColumns(columns.value);
      if (showExpandIconColumn.value) {
        cols.unshift(getExpandColumn());
      }
      return cols;
    });
    var onInnerPageChange = function onInnerPageChange2(pageInfo, newData) {
      var _props$onPageChange, _props$onChange;
      currentPaginateData.value = newData;
      (_props$onPageChange = props2.onPageChange) === null || _props$onPageChange === void 0 ? void 0 : _props$onPageChange.call(props2, pageInfo, newData);
      var changeParams = [{
        pagination: pageInfo
      }, {
        trigger: "pagination",
        currentData: newData
      }];
      (_props$onChange = props2.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call.apply(_props$onChange, [props2].concat(changeParams));
      if (!props2.reserveSelectedRowOnPaginate) {
        setTSelectedRowKeys([], {
          selectedRowData: [],
          type: "uncheck",
          currentRowKey: "CLEAR_ON_PAGINATE"
        });
      }
    };
    var timer;
    var DURATION = 250;
    var onInnerRowClick = function onInnerRowClick2(params) {
      if (!props2.onRowDblclick) {
        onInnerExpandRowClick(params);
        onInnerSelectRowClick(params);
        return;
      }
      if (timer) {
        clearTimeout(timer);
        timer = void 0;
      } else {
        timer = setTimeout(function() {
          onInnerExpandRowClick(params);
          onInnerSelectRowClick(params);
          timer = void 0;
        }, DURATION);
      }
    };
    return function() {
      var formatNode = function formatNode2(api, renderInnerNode, condition, extra) {
        if (!condition)
          return props2[api];
        var innerNode = renderInnerNode(h);
        var propsNode = renderTNode(api);
        if (innerNode && !propsNode)
          return function() {
            return innerNode;
          };
        if (propsNode && !innerNode)
          return function() {
            return propsNode;
          };
        if (innerNode && propsNode) {
          return function() {
            return extra !== null && extra !== void 0 && extra.reverse ? createVNode("div", null, [innerNode, propsNode]) : createVNode("div", null, [propsNode, innerNode]);
          };
        }
        return null;
      };
      var isColumnController = !!(columnController.value && Object.keys(columnController.value).length);
      var placement = isColumnController ? columnController.value.placement || "top-right" : "";
      var isBottomController = isColumnController && (placement === null || placement === void 0 ? void 0 : placement.indexOf("bottom")) !== -1;
      var topContent = formatNode("topContent", renderColumnController, isColumnController && !isBottomController);
      var bottomContent = formatNode("bottomContent", renderColumnController, isBottomController, {
        reverse: true
      });
      var firstFullRow = formatNode("firstFullRow", renderFirstFilterRow, !hasEmptyCondition.value);
      var lastFullRow = formatNode("lastFullRow", renderAsyncLoading, !!props2.asyncLoading);
      var baseTableProps2 = _objectSpread$4(_objectSpread$4({}, omit_1(props2, OMIT_PROPS)), {}, {
        rowClassName: tRowClassNames.value,
        rowAttributes: tRowAttributes.value,
        columns: tColumns.value,
        topContent,
        bottomContent,
        firstFullRow,
        lastFullRow,
        thDraggable: props2.dragSort === "col",
        onPageChange: onInnerPageChange,
        renderExpandedRow: showExpandedRow.value ? renderExpandedRow : void 0
      });
      if (props2.expandOnRowClick || props2.selectOnRowClick) {
        baseTableProps2.onRowClick = onInnerRowClick;
      }
      return createVNode(_BaseTable, mergeProps({
        "ref": primaryTableRef
      }, baseTableProps2, {
        "class": primaryTableClasses.value,
        "onLeafColumnsChange": setDragSortColumns
      }), context.slots);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var enhancedTableProps = {
  beforeDragSort: {
    type: Function
  },
  tree: {
    type: Object
  },
  treeExpandAndFoldIcon: {
    type: Function
  },
  onAbnormalDragSort: Function,
  onTreeExpandChange: Function
};
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
var TABLE_TREE_ERROR_CODE_NOT_SAME_LEVEL = {
  code: 1001,
  reason: "The same level of rows can not be swapped."
};
var TableTreeStore = /* @__PURE__ */ function() {
  function TableTreeStore2() {
    _classCallCheck(this, TableTreeStore2);
    _defineProperty$2(this, "treeDataMap", /* @__PURE__ */ new Map());
    _defineProperty$2(this, "expandAllRowIndex", void 0);
    this.treeDataMap = /* @__PURE__ */ new Map();
  }
  _createClass(TableTreeStore2, [{
    key: "initialTreeStore",
    value: function initialTreeStore(dataSource, columns, keys2) {
      var _this$treeDataMap;
      (_this$treeDataMap = this.treeDataMap) === null || _this$treeDataMap === void 0 ? void 0 : _this$treeDataMap.clear();
      this.initialTreeDataMap(this.treeDataMap, dataSource, columns[0], keys2);
    }
  }, {
    key: "getAllUniqueKeys",
    value: function getAllUniqueKeys(data2, keys2) {
      var arr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      for (var i = 0, len2 = data2.length; i < len2; i++) {
        var item = data2[i];
        arr.push(get_1(item, keys2.rowKey));
        var children = get_1(item, keys2.childrenKey);
        if (children !== null && children !== void 0 && children.length) {
          this.getAllUniqueKeys(children, keys2, arr);
        }
      }
      return arr;
    }
  }, {
    key: "toggleExpandData",
    value: function toggleExpandData(p, dataSource, keys2) {
      if (!p) {
        log.error("EnhancedTable", "the node you want to toggleExpand doest not exist in `data`");
        return dataSource;
      }
      var rowValue = get_1(p.row, keys2.rowKey);
      if (isUndefined_1(rowValue)) {
        log.error("EnhancedTable", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
        return [];
      }
      var childrenNodes = get_1(p.row, keys2.childrenKey);
      if (childrenNodes === true)
        return dataSource;
      var r = this.treeDataMap.get(rowValue);
      r.rowIndex = p.rowIndex;
      r.expanded = !r.expanded;
      this.treeDataMap.set(rowValue, r);
      return this.updateExpandRow(r, dataSource, keys2);
    }
  }, {
    key: "updateExpandRow",
    value: function updateExpandRow(changeRow, dataSource, keys2) {
      var row = changeRow.row, rowIndex = changeRow.rowIndex, expanded = changeRow.expanded;
      var treeDataMap = this.treeDataMap;
      var childrenNodes = get_1(row, keys2.childrenKey);
      if (!row || !childrenNodes)
        return dataSource;
      if (expanded) {
        updateChildrenRowState(treeDataMap, changeRow, expanded, keys2);
        updateRowExpandLength(treeDataMap, row, childrenNodes.length, "expand", keys2);
        dataSource.splice.apply(dataSource, [rowIndex + 1, 0].concat(childrenNodes));
      } else {
        updateChildrenRowState(treeDataMap, changeRow, expanded, keys2);
        var len2 = changeRow.expandChildrenLength || childrenNodes.length;
        updateRowExpandLength(treeDataMap, row, -1 * len2, "fold", keys2);
        dataSource.splice(rowIndex + 1, len2);
      }
      updateRowIndex(treeDataMap, dataSource, {
        rowKey: keys2.rowKey,
        minRowIndex: rowIndex + 1
      });
      return dataSource;
    }
  }, {
    key: "getData",
    value: function getData(key2) {
      return this.treeDataMap.get(key2);
    }
  }, {
    key: "updateData",
    value: function updateData(rowValue, newRowData, dataSource, keys2) {
      var newRowValue = get_1(newRowData, keys2.rowKey);
      var rowState = this.treeDataMap.get(rowValue);
      if (!rowState || rowState.rowIndex === -1) {
        updateRowData(dataSource, rowValue, newRowData, {
          rowKey: keys2.rowKey,
          childrenKey: keys2.childrenKey
        });
        return -1;
      }
      if (get_1(newRowData, keys2.childrenKey) === true) {
        var oldChildren = get_1(rowState.row, keys2.childrenKey);
        if (oldChildren !== null && oldChildren !== void 0 && oldChildren.length) {
          for (var i = 0, len2 = oldChildren.length; i < len2; i++) {
            var rowValue2 = get_1(oldChildren[i], keys2.rowKey);
            var state = this.treeDataMap.get(rowValue2);
            if (state) {
              this.treeDataMap["delete"](rowValue2);
            }
          }
        }
      }
      var currentRowIndex = rowState.rowIndex;
      rowState.row = newRowData;
      rowState.id = newRowValue;
      if (rowState.parent) {
        var siblings = get_1(rowState.parent.row, keys2.childrenKey);
        var index2 = siblings.findIndex(function(item) {
          return get_1(item, keys2.rowKey) === rowValue;
        });
        siblings[index2] = newRowData;
      }
      this.treeDataMap.set(newRowValue, rowState);
      if (rowValue !== newRowValue) {
        this.treeDataMap["delete"](rowValue);
      }
      return currentRowIndex;
    }
  }, {
    key: "remove",
    value: function remove2(key2, dataSource, keys2) {
      var r = this.treeDataMap.get(key2);
      if (r && r.rowIndex >= 0) {
        var removeNumber = (r.expandChildrenLength || 0) + 1;
        dataSource.splice(r.rowIndex, removeNumber);
        if (r.parent) {
          var siblings = get_1(r.parent.row, keys2.childrenKey);
          var index2 = siblings.findIndex(function(item) {
            return get_1(item, keys2.rowKey) === key2;
          });
          siblings.splice(index2, 1);
          updateRowExpandLength(this.treeDataMap, r.parent.row, -1 * removeNumber, "delete", keys2);
        }
        this.treeDataMap["delete"](key2);
        updateRowIndex(this.treeDataMap, dataSource, {
          minRowIndex: r.rowIndex,
          rowKey: keys2.rowKey,
          type: "remove"
        });
      } else {
        log.warn("EnhancedTable", "Do not remove this node, which is not appeared.");
      }
      return dataSource;
    }
  }, {
    key: "appendTo",
    value: function appendTo(rowValue, newData, dataSource, keys2) {
      var state = this.treeDataMap.get(rowValue);
      if (!this.validateDataExist(state, rowValue))
        return dataSource;
      var children = get_1(state.row, keys2.childrenKey);
      var isShowNewNode = state.expanded || !(children !== null && children !== void 0 && children.length);
      var tmpData = newData instanceof Array ? newData : [newData];
      var newChildrenData = [];
      var firstNewChildrenIndex = -1;
      for (var i = 0, len2 = tmpData.length; i < len2; i++) {
        var oneData = tmpData[i];
        var newRowValue = get_1(oneData, keys2.rowKey);
        var mapState = this.treeDataMap.get(newRowValue);
        if (!this.validateDataDoubleExist(mapState, newRowValue)) {
          log.warn("Table", "Duplicated Data `".concat(newRowValue, "` has been removed."));
        } else {
          var rowIndex = isShowNewNode ? state.rowIndex + (state.expandChildrenLength || 0) + (i + 1) : -1;
          if (i === 0) {
            firstNewChildrenIndex = rowIndex;
          }
          var newState = {
            id: newRowValue,
            row: oneData,
            rowIndex,
            level: state.level + 1,
            expanded: false,
            expandChildrenLength: 0,
            disabled: false,
            path: _toConsumableArray(state.path),
            parent: state
          };
          newState.path = newState.path.concat(newState);
          newChildrenData.push(oneData);
          this.treeDataMap.set(newRowValue, newState);
        }
      }
      if (!newChildrenData.length)
        return dataSource;
      if (children !== null && children !== void 0 && children.length) {
        state.row[keys2.childrenKey] = state.row[keys2.childrenKey].concat(newChildrenData);
      } else {
        state.row[keys2.childrenKey] = newChildrenData;
        state.expanded = true;
      }
      if (isShowNewNode) {
        dataSource.splice.apply(dataSource, [firstNewChildrenIndex, 0].concat(newChildrenData));
        var newChildrenCount = newChildrenData.length || 1;
        updateRowExpandLength(this.treeDataMap, state.row, newChildrenCount, "insert", {
          rowKey: keys2.rowKey,
          childrenKey: keys2.childrenKey
        });
        updateRowIndex(this.treeDataMap, dataSource, {
          minRowIndex: firstNewChildrenIndex + newChildrenData.length - 1,
          rowKey: keys2.rowKey,
          type: "add",
          count: 1
        });
      }
      return dataSource;
    }
  }, {
    key: "appendToRoot",
    value: function appendToRoot(newData, dataSource, keys2) {
      var newDataSource = dataSource.concat(newData);
      var tmpNewData = newData instanceof Array ? newData : [newData];
      var dataSourceLen = dataSource.length;
      for (var i = 0, len2 = tmpNewData.length; i < len2; i++) {
        var rowValue = get_1(tmpNewData[i], keys2.rowKey);
        if (!rowValue) {
          log.error("Table", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
          continue;
        }
        var state = {
          id: rowValue,
          row: tmpNewData[i],
          rowIndex: dataSourceLen + i,
          level: 0,
          expanded: false,
          expandChildrenLength: 0,
          disabled: false
        };
        state.path = [state];
        this.treeDataMap.set(rowValue, state);
      }
      return newDataSource;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(rowValue, newData, dataSource, keys2) {
      return this.insert(rowValue, newData, dataSource, keys2, "after");
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(rowValue, newData, dataSource, keys2) {
      return this.insert(rowValue, newData, dataSource, keys2, "before");
    }
  }, {
    key: "insert",
    value: function insert(rowValue, newData, dataSource, keys2, type) {
      var state = this.treeDataMap.get(rowValue);
      if (!this.validateDataExist(state, rowValue))
        return dataSource;
      var newRowValue = get_1(newData, keys2.rowKey);
      var mapState = this.treeDataMap.get(newRowValue);
      if (!this.validateDataDoubleExist(mapState, newRowValue))
        return dataSource;
      var rowIndex = type === "after" ? state.rowIndex + 1 : state.rowIndex;
      var newState = {
        id: newRowValue,
        row: newData,
        rowIndex,
        level: state.level,
        expanded: false,
        expandChildrenLength: 0,
        disabled: false,
        path: state.path.slice(0, -1),
        parent: state.parent
      };
      newState.path = newState.path.concat(newState);
      var dataIndex = type === "after" ? state.rowIndex + (state.expandChildrenLength + 1) : state.rowIndex;
      dataSource.splice(dataIndex, 0, newData);
      var distance2 = type === "after" ? 1 : 0;
      if (state.parent) {
        var childrenIndex = state.parent.row[keys2.childrenKey].findIndex(function(t) {
          return rowValue === get_1(t, keys2.rowKey);
        });
        state.parent.row[keys2.childrenKey].splice(childrenIndex + distance2, 0, newData);
        updateRowExpandLength(this.treeDataMap, state.parent.row, 1, "insert", keys2);
      }
      this.treeDataMap.set(newRowValue, newState);
      updateRowIndex(this.treeDataMap, dataSource, {
        rowKey: keys2.rowKey,
        minRowIndex: state.rowIndex + 1,
        type: "add"
      });
      return dataSource;
    }
  }, {
    key: "swapData",
    value: function swapData(dataSource, params, keys2) {
      var startIndex = params.currentIndex;
      var endIndex = params.targetIndex;
      if (startIndex === endIndex)
        return {
          dataSource,
          result: true
        };
      var startRowValue = get_1(params.current, keys2.rowKey);
      var endRowValue = get_1(params.target, keys2.rowKey);
      var startState = this.treeDataMap.get(startRowValue);
      var endState = this.treeDataMap.get(endRowValue);
      if (startState.level !== endState.level) {
        return {
          dataSource,
          result: false,
          code: TABLE_TREE_ERROR_CODE_NOT_SAME_LEVEL.code,
          reason: TABLE_TREE_ERROR_CODE_NOT_SAME_LEVEL.reason
        };
      }
      var startLastIndex = startIndex + startState.expandChildrenLength + 1;
      var endLastIndex = endIndex + endState.expandChildrenLength + 1;
      var startRowList = dataSource.slice(startIndex, startLastIndex);
      var endRowList = dataSource.slice(endIndex, endLastIndex);
      if (startIndex > endIndex) {
        var middleRowList = dataSource.slice(endLastIndex, startIndex);
        var allSwapList = startRowList.concat(endRowList, middleRowList);
        dataSource.splice(endIndex, allSwapList.length);
        dataSource.splice.apply(dataSource, [endIndex, 0].concat(_toConsumableArray(allSwapList)));
        updateRowIndex(this.treeDataMap, dataSource, {
          rowKey: keys2.rowKey,
          minRowIndex: endIndex,
          maxRowIndex: startLastIndex
        });
      } else {
        var _middleRowList = dataSource.slice(startLastIndex, endIndex);
        var _allSwapList = _middleRowList.concat(endRowList, startRowList);
        dataSource.splice(startIndex, _allSwapList.length);
        dataSource.splice.apply(dataSource, [startIndex, 0].concat(_toConsumableArray(_allSwapList)));
        updateRowIndex(this.treeDataMap, dataSource, {
          rowKey: keys2.rowKey,
          minRowIndex: startIndex,
          maxRowIndex: endLastIndex
        });
      }
      if (startState.parent) {
        var children = startState.parent.row[keys2.childrenKey];
        var count = 0;
        var targetIndex = -1;
        var currentIndex = -1;
        for (var i = 0, len2 = children.length; i < len2; i++) {
          if (get_1(children[i], keys2.rowKey) === startRowValue) {
            targetIndex = i;
            count += 1;
          }
          if (get_1(children[i], keys2.rowKey) === endRowValue) {
            currentIndex = i;
            count += 1;
          }
          if (count >= 2)
            break;
        }
        children[targetIndex] = params.target;
        children[currentIndex] = params.current;
      }
      return {
        dataSource,
        result: true
      };
    }
  }, {
    key: "expandAll",
    value: function expandAll(dataSource, keys2) {
      var _this = this;
      this.expandAllRowIndex = 0;
      var expandLoop = function expandLoop2(dataSource2, keys22) {
        var newData = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        var parentExpanded = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        var parent = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
        for (var i = 0, len2 = dataSource2.length; i < len2; i++) {
          var item = dataSource2[i];
          var rowValue = get_1(item, keys22.rowKey);
          var state = _this.treeDataMap.get(rowValue);
          var children = get_1(item, keys22.childrenKey);
          var originalExpanded = state.expanded;
          state.rowIndex = _this.expandAllRowIndex;
          if (children !== true && children !== null && children !== void 0 && children.length) {
            state.expanded = true;
          }
          state.expandChildrenLength = (children === null || children === void 0 ? void 0 : children.length) || 0;
          _this.expandAllRowIndex += 1;
          if (!parentExpanded) {
            newData.push(item);
          }
          _this.treeDataMap.set(rowValue, state);
          if (children !== null && children !== void 0 && children.length && !originalExpanded) {
            var tmpParent = parent;
            while ((_tmpParent = tmpParent) !== null && _tmpParent !== void 0 && _tmpParent.row) {
              var _tmpParent;
              tmpParent.expandChildrenLength += children.length;
              _this.treeDataMap.set(tmpParent.id, tmpParent);
              tmpParent = tmpParent.parent;
            }
            expandLoop2(children, keys22, newData, originalExpanded, state);
          }
        }
        return newData;
      };
      return expandLoop(dataSource, keys2);
    }
  }, {
    key: "foldAll",
    value: function foldAll(dataSource, keys2) {
      var newData = [];
      for (var i = 0, len2 = dataSource.length; i < len2; i++) {
        var item = dataSource[i];
        var rowValue = get_1(item, keys2.rowKey);
        var state = this.treeDataMap.get(rowValue);
        state.rowIndex = state.level === 0 ? i : -1;
        state.expanded = false;
        state.expandChildrenLength = 0;
        if (state.level === 0) {
          newData.push(item);
        }
        var children = get_1(item, keys2.childrenKey);
        if (children !== null && children !== void 0 && children.length) {
          this.foldAll(children, keys2);
        }
      }
      return newData;
    }
  }, {
    key: "getTreeNode",
    value: function getTreeNode(dataSource, keys2) {
      var treeData = [];
      for (var i = 0, len2 = dataSource.length; i < len2; i++) {
        var item = dataSource[i];
        var rowValue = get_1(item, keys2.rowKey);
        var state = this.treeDataMap.get(rowValue);
        if (state.level === 0) {
          treeData.push(item);
        }
      }
      return treeData;
    }
  }, {
    key: "getTreeExpandedRow",
    value: function getTreeExpandedRow(dataSource, keys2) {
      var _this2 = this;
      var type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "data";
      var arr = [];
      dataSource.forEach(function(item) {
        var rowValue = get_1(item, keys2.rowKey);
        var rowState = _this2.treeDataMap.get(rowValue);
        if (!rowState.expanded)
          return;
        if (type === "unique") {
          arr.push(rowValue);
        } else if (type === "data") {
          arr.push(item);
        } else {
          arr.push(rowState);
        }
      });
      return arr;
    }
  }, {
    key: "initialTreeDataMap",
    value: function initialTreeDataMap(treeDataMap, dataSource, column, keys2) {
      var level = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
      var parent = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
      for (var i = 0, len2 = dataSource.length; i < len2; i++) {
        var item = dataSource[i];
        var rowValue = get_1(item, keys2.rowKey);
        if (isUndefined_1(rowValue)) {
          log.error("EnhancedTable", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
          return;
        }
        var children = get_1(item, keys2.childrenKey);
        var state = {
          id: rowValue,
          row: item,
          rowIndex: level === 0 ? i : -1,
          level,
          expanded: false,
          expandChildrenLength: 0,
          disabled: isRowSelectedDisabled(column, item, i),
          parent
        };
        state.path = parent ? parent.path.concat(state) : [state];
        treeDataMap.set(rowValue, state);
        if (children !== null && children !== void 0 && children.length) {
          this.initialTreeDataMap(treeDataMap, children, column, keys2, level + 1, state);
        }
      }
    }
  }, {
    key: "updateDisabledState",
    value: function updateDisabledState(dataSource, column, keys2) {
      for (var i = 0, len2 = dataSource.length; i < len2; i++) {
        var item = dataSource[i];
        var rowValue = get_1(item, keys2.rowKey);
        if (isUndefined_1(rowValue)) {
          log.error("EnhancedTable", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
          return;
        }
        var state = this.treeDataMap.get(rowValue);
        state.disabled = isRowSelectedDisabled(column, item, i);
        this.treeDataMap.set(rowValue, state);
        var children = get_1(item, keys2.childrenKey);
        if (children !== null && children !== void 0 && children.length) {
          this.updateDisabledState(children, column, keys2);
        }
      }
    }
  }, {
    key: "validateDataExist",
    value: function validateDataExist(state, rowValue) {
      if (!state) {
        log.warn("EnhancedTable", "".concat(rowValue, " does not exist."));
        return false;
      }
      return true;
    }
  }, {
    key: "validateDataDoubleExist",
    value: function validateDataDoubleExist(state, rowValue) {
      if (state) {
        log.warn("EnhancedTable", "Duplicated Key. ".concat(rowValue, " already exists."));
        return false;
      }
      return true;
    }
  }]);
  return TableTreeStore2;
}();
function updateRowExpandLength(treeDataMap, row, distance2, type, keys2) {
  var tmp = row;
  while (tmp) {
    var _state$parent;
    var state = treeDataMap.get(get_1(tmp, keys2.rowKey));
    var expandLen = (state.expandChildrenLength || 0) + distance2;
    state.expandChildrenLength = Math.max(0, expandLen);
    tmp = state === null || state === void 0 || (_state$parent = state.parent) === null || _state$parent === void 0 ? void 0 : _state$parent.row;
  }
  if (type === "fold") {
    clearRowExpandLength(treeDataMap, row, keys2);
  }
}
function clearRowExpandLength(treeDataMap, row, keys2) {
  var children = get_1(row, keys2.childrenKey);
  if (children !== null && children !== void 0 && children.length) {
    children.forEach(function(item) {
      var state = treeDataMap.get(get_1(item, keys2.rowKey));
      if (!state)
        return;
      state.expandChildrenLength = 0;
      clearRowExpandLength(treeDataMap, state.row, keys2);
    });
  }
}
function updateChildrenRowState(treeDataMap, rowState, expanded, keys2) {
  var row = rowState.row, rowIndex = rowState.rowIndex;
  var childrenNodes = get_1(row, keys2.childrenKey);
  childrenNodes.forEach(function(item, kidRowIndex) {
    var rowValue = get_1(item, keys2.rowKey);
    var index2 = expanded ? rowIndex + 1 + kidRowIndex : -1;
    var curState = treeDataMap.get(rowValue);
    var newState = _objectSpread$3(_objectSpread$3({}, curState), {}, {
      row: item,
      rowIndex: index2,
      expanded: false,
      parent: rowState
    });
    treeDataMap.set(rowValue, newState);
    if (!expanded) {
      var children = get_1(item, keys2.childrenKey);
      if (children !== null && children !== void 0 && children.length) {
        updateChildrenRowState(treeDataMap, _objectSpread$3(_objectSpread$3({}, newState), {}, {
          rowIndex: -1,
          expanded: false
        }), expanded, keys2);
      }
    }
  });
}
function updateRowData(data2, key2, newData, keys2) {
  for (var i = 0, len2 = data2.length; i < len2; i++) {
    var item = data2[i];
    if (get_1(item, keys2.rowKey) === key2) {
      data2[i] = newData;
      return;
    }
    var children = get_1(item, keys2.childrenKey) || [];
    if (children !== null && children !== void 0 && children.length) {
      updateRowData(children, key2, newData, keys2);
    }
  }
}
function updateRowIndex(treeDataMap, dataSource, extra) {
  var start = extra.minRowIndex || 0;
  var end = extra.maxRowIndex || dataSource.length;
  for (var rowIndex = start; rowIndex < end; rowIndex++) {
    var item = dataSource[rowIndex];
    var state = treeDataMap.get(get_1(item, extra.rowKey));
    if (!state) {
      log.warn("Table", "tree map went wrong");
    }
    state.rowIndex = rowIndex + ((extra === null || extra === void 0 ? void 0 : extra.count) || 1) - 1;
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
function useTreeData(props2, context) {
  var _toRefs = toRefs(props2), data2 = _toRefs.data, columns = _toRefs.columns;
  var _useConfig = useConfig("table"), t = _useConfig.t, globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = useGlobalIcon({
    AddRectangleIcon: addRectangle,
    MinusRectangleIcon: minusRectangle
  }), AddRectangleIcon$1 = _useGlobalIcon.AddRectangleIcon, MinusRectangleIcon$1 = _useGlobalIcon.MinusRectangleIcon;
  var store = ref(new TableTreeStore());
  var treeNodeCol = shallowRef();
  var dataSource = ref([]);
  var _useClassName = useClassName(), tableTreeClasses = _useClassName.tableTreeClasses;
  var renderTNode = useTNodeDefault();
  var rowDataKeys = computed(function() {
    var _props$tree;
    return {
      rowKey: props2.rowKey || "id",
      childrenKey: ((_props$tree = props2.tree) === null || _props$tree === void 0 ? void 0 : _props$tree.childrenKey) || "children"
    };
  });
  var checkedColumn = computed(function() {
    return columns.value.find(function(col) {
      return col.colKey === "row-select";
    });
  });
  watch(checkedColumn, function(column) {
    if (!store.value)
      return;
    store.value.updateDisabledState(dataSource.value, column, rowDataKeys.value);
  });
  var foldIcon = function foldIcon2(context2) {
    var params = _objectSpread$2(_objectSpread$2({}, context2), {}, {
      type: "fold"
    });
    var defaultFoldIcon = t(globalConfig.value.treeExpandAndFoldIcon, h, params) || createVNode(MinusRectangleIcon$1, null, null);
    return renderTNode("treeExpandAndFoldIcon", {
      defaultNode: defaultFoldIcon,
      params
    });
  };
  var expandIcon = function expandIcon2(context2) {
    var params = _objectSpread$2(_objectSpread$2({}, context2), {}, {
      type: "expand"
    });
    var defaultExpandIcon = t(globalConfig.value.treeExpandAndFoldIcon, h, params) || createVNode(AddRectangleIcon$1, null, null);
    return renderTNode("treeExpandAndFoldIcon", {
      defaultNode: defaultExpandIcon,
      params
    });
  };
  var uniqueKeys = computed(function() {
    var _store$value;
    return ((_store$value = store.value) === null || _store$value === void 0 || (_store$value = _store$value.getAllUniqueKeys(data2.value, rowDataKeys.value)) === null || _store$value === void 0 ? void 0 : _store$value.join()) || "";
  });
  watch([uniqueKeys], function() {
    if (!data2.value)
      return;
    if (!props2.tree) {
      dataSource.value = data2.value;
      return;
    }
    resetData(data2.value);
  }, {
    immediate: true
  });
  onUnmounted(function() {
    var _store$value$treeData;
    if (!props2.tree)
      return;
    (_store$value$treeData = store.value.treeDataMap) === null || _store$value$treeData === void 0 ? void 0 : _store$value$treeData.clear();
    store.value = null;
  });
  watch(function() {
    var _props$tree2;
    return [columns, (_props$tree2 = props2.tree) === null || _props$tree2 === void 0 ? void 0 : _props$tree2.treeNodeColumnIndex];
  }, function() {
    treeNodeCol.value = getTreeNodeColumnCol();
  }, {
    immediate: true
  });
  function resetData(data22) {
    var _props$tree3;
    var newVal = cloneDeep_1(data22);
    store.value.initialTreeStore(newVal, props2.columns, rowDataKeys.value);
    if ((_props$tree3 = props2.tree) !== null && _props$tree3 !== void 0 && _props$tree3.defaultExpandAll) {
      newVal = store.value.expandAll(newVal, rowDataKeys.value);
    }
    dataSource.value = newVal;
  }
  function getTreeNodeStyle(level) {
    var _props$tree4, _props$tree5;
    if (level === void 0)
      return;
    var indent = ((_props$tree4 = props2.tree) === null || _props$tree4 === void 0 ? void 0 : _props$tree4.indent) === void 0 ? 24 : (_props$tree5 = props2.tree) === null || _props$tree5 === void 0 ? void 0 : _props$tree5.indent;
    return indent ? {
      paddingLeft: "".concat(level * indent || 1, "px")
    } : {};
  }
  function toggleExpandData(p, trigger) {
    var _store$value2, _props$onTreeExpandCh;
    var currentData = _objectSpread$2({}, p);
    if (p.row.__VIRTUAL_SCROLL_INDEX !== void 0) {
      currentData.rowIndex = p.row.__VIRTUAL_SCROLL_INDEX;
    }
    dataSource.value = _toConsumableArray(store.value.toggleExpandData(currentData, dataSource.value, rowDataKeys.value));
    var rowValue = get_1(p.row, rowDataKeys.value.rowKey);
    var rowState = (_store$value2 = store.value) === null || _store$value2 === void 0 || (_store$value2 = _store$value2.treeDataMap) === null || _store$value2 === void 0 ? void 0 : _store$value2.get(rowValue);
    (_props$onTreeExpandCh = props2.onTreeExpandChange) === null || _props$onTreeExpandCh === void 0 ? void 0 : _props$onTreeExpandCh.call(props2, {
      row: p.row,
      rowIndex: p.rowIndex,
      rowState,
      trigger
    });
  }
  function getTreeNodeColumnCol() {
    var _props$tree6;
    var columns2 = props2.columns;
    var treeNodeColumnIndex = ((_props$tree6 = props2.tree) === null || _props$tree6 === void 0 ? void 0 : _props$tree6.treeNodeColumnIndex) || 0;
    while ((_columns2$treeNodeCol = columns2[treeNodeColumnIndex]) !== null && _columns2$treeNodeCol !== void 0 && _columns2$treeNodeCol.type || ((_columns2$treeNodeCol2 = columns2[treeNodeColumnIndex]) === null || _columns2$treeNodeCol2 === void 0 ? void 0 : _columns2$treeNodeCol2.colKey) === "__EXPAND_ROW_ICON_COLUMN__") {
      var _columns2$treeNodeCol, _columns2$treeNodeCol2;
      treeNodeColumnIndex += 1;
    }
    return columns2[treeNodeColumnIndex];
  }
  function formatTreeColumn(col) {
    if (!props2.tree || col.colKey !== treeNodeCol.value.colKey)
      return col;
    var newCol = _objectSpread$2({}, treeNodeCol.value);
    newCol.cell = function(h2, p) {
      var cellInfo = renderCell(_objectSpread$2(_objectSpread$2({}, p), {}, {
        col: _objectSpread$2({}, treeNodeCol.value)
      }), context.slots, {
        cellEmptyContent: props2.cellEmptyContent
      });
      var currentState = store.value.treeDataMap.get(get_1(p.row, rowDataKeys.value.rowKey));
      var colStyle = getTreeNodeStyle(currentState === null || currentState === void 0 ? void 0 : currentState.level);
      var classes = _defineProperty$2({}, tableTreeClasses.inlineCol, !!col.ellipsis);
      var childrenNodes = get_1(p.row, rowDataKeys.value.childrenKey);
      if (childrenNodes && childrenNodes instanceof Array || childrenNodes === true) {
        var _store$value$treeData2;
        var iconNode = (_store$value$treeData2 = store.value.treeDataMap.get(get_1(p.row, rowDataKeys.value.rowKey))) !== null && _store$value$treeData2 !== void 0 && _store$value$treeData2.expanded ? foldIcon(p) : expandIcon(p);
        return createVNode("div", {
          "class": [tableTreeClasses.col, classes],
          "style": colStyle
        }, [!!(childrenNodes.length || childrenNodes === true) && createVNode("span", {
          "class": tableTreeClasses.icon,
          "onClick": function onClick(e) {
            toggleExpandData(p, "expand-fold-icon");
            e.stopPropagation();
          }
        }, [iconNode]), cellInfo]);
      }
      return createVNode("div", {
        "style": colStyle,
        "class": [classes, tableTreeClasses.leafNode]
      }, [createVNode("span", {
        "class": tableTreeClasses.icon
      }, null), cellInfo]);
    };
    if (newCol.ellipsis === true) {
      newCol.ellipsis = function(h2, p) {
        return renderCell(_objectSpread$2(_objectSpread$2({}, p), {}, {
          col: _objectSpread$2({}, treeNodeCol.value)
        }), context.slots);
      };
    }
    return newCol;
  }
  function setData(key2, newRowData) {
    var rowIndex = store.value.updateData(key2, newRowData, dataSource.value, rowDataKeys.value);
    var newData = _toConsumableArray(dataSource.value);
    newData[rowIndex] = newRowData;
    dataSource.value = newData;
  }
  function getData(key2) {
    return store.value.getData(key2);
  }
  function remove2(key2) {
    dataSource.value = _toConsumableArray(store.value.remove(key2, dataSource.value, rowDataKeys.value));
  }
  function appendTo() {
    var key2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var newData = arguments.length > 1 ? arguments[1] : void 0;
    if (!key2) {
      dataSource.value = store.value.appendToRoot(newData, dataSource.value, rowDataKeys.value);
      return;
    }
    dataSource.value = _toConsumableArray(store.value.appendTo(key2, newData, dataSource.value, rowDataKeys.value));
  }
  function insertAfter(rowValue, newData) {
    dataSource.value = _toConsumableArray(store.value.insertAfter(rowValue, newData, dataSource.value, rowDataKeys.value));
  }
  function insertBefore(rowValue, newData) {
    dataSource.value = _toConsumableArray(store.value.insertBefore(rowValue, newData, dataSource.value, rowDataKeys.value));
  }
  function expandAll() {
    dataSource.value = _toConsumableArray(store.value.expandAll(dataSource.value, rowDataKeys.value));
  }
  function foldAll() {
    dataSource.value = _toConsumableArray(store.value.foldAll(dataSource.value, rowDataKeys.value));
  }
  function swapData(params) {
    var r = store.value.swapData(dataSource.value, params, rowDataKeys.value);
    if (r.result) {
      dataSource.value = _toConsumableArray(r.dataSource);
    } else {
      var _props$onAbnormalDrag;
      var params2 = {
        code: r.code,
        reason: r.reason
      };
      (_props$onAbnormalDrag = props2.onAbnormalDragSort) === null || _props$onAbnormalDrag === void 0 ? void 0 : _props$onAbnormalDrag.call(props2, params2);
    }
  }
  function getTreeNode() {
    return store.value.getTreeNode(dataSource.value, rowDataKeys.value);
  }
  function getTreeExpandedRow() {
    var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data";
    return store.value.getTreeExpandedRow(dataSource.value, rowDataKeys.value, type);
  }
  return {
    store,
    rowDataKeys,
    dataSource,
    swapData,
    setData,
    getData,
    remove: remove2,
    appendTo,
    insertAfter,
    insertBefore,
    formatTreeColumn,
    toggleExpandData,
    expandAll,
    foldAll,
    getTreeNode,
    resetData,
    getTreeExpandedRow
  };
}
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
var childrenMap = /* @__PURE__ */ new Map();
function getChildrenData(treeDataMap, data2, keys2, r) {
  if (childrenMap.get(data2))
    return childrenMap.get(data2);
  var result = r || {
    allChildren: [],
    allChildrenKeys: [],
    leafNodeKeys: []
  };
  var children = get_1(data2, keys2.childrenKey);
  if (!children || !children.length)
    return result;
  var selectableChildren = children.filter(function(item2) {
    var _treeDataMap$get;
    return !((_treeDataMap$get = treeDataMap.get(get_1(item2, keys2.rowKey))) !== null && _treeDataMap$get !== void 0 && _treeDataMap$get.disabled);
  });
  result.allChildren = _toConsumableArray(new Set(result.allChildren.concat(selectableChildren)));
  for (var i = 0, len2 = children.length; i < len2; i++) {
    var tItem = children[i];
    var c = get_1(tItem, keys2.childrenKey);
    if (c !== null && c !== void 0 && c.length) {
      var nextLevelData = getChildrenData(treeDataMap, tItem, keys2, result);
      result.allChildren = _toConsumableArray(new Set(result.allChildren.concat(nextLevelData.allChildren)));
    }
  }
  for (var _i = 0, _len = result.allChildren.length; _i < _len; _i++) {
    var item = result.allChildren[_i];
    var children2 = get_1(item, keys2.childrenKey);
    var rowValue = get_1(item, keys2.rowKey);
    result.allChildrenKeys.push(rowValue);
    if (!children2 || !children2.length) {
      result.leafNodeKeys.push(rowValue);
    }
  }
  result.allChildrenKeys = _toConsumableArray(new Set(result.allChildrenKeys));
  result.leafNodeKeys = _toConsumableArray(new Set(result.leafNodeKeys));
  return result;
}
function removeChildrenKeys(p, r) {
  var selectedRowKeys = p.selectedRowKeys, removeKeys = p.removeKeys;
  var result = r || {
    data: [],
    keys: []
  };
  for (var i = 0, len2 = selectedRowKeys.length; i < len2; i++) {
    var key2 = selectedRowKeys[i];
    if (!removeKeys.includes(key2)) {
      result.keys.push(key2);
    }
  }
  return result;
}
function getRowDataByKeys(p) {
  var treeDataMap = p.treeDataMap, selectedRowKeys = p.selectedRowKeys;
  var result = [];
  for (var i = 0, len2 = selectedRowKeys.length; i < len2; i++) {
    var key2 = selectedRowKeys[i];
    result.push(treeDataMap.get(key2));
  }
  return result;
}
function useTreeSelect(props2, treeDataMap) {
  var _toRefs = toRefs(props2), selectedRowKeys = _toRefs.selectedRowKeys, tree = _toRefs.tree, data2 = _toRefs.data, indeterminateSelectedRowKeys = _toRefs.indeterminateSelectedRowKeys;
  var tIndeterminateSelectedRowKeys = ref([]);
  var _useDefaultValue = useDefaultValue(selectedRowKeys, props2.defaultSelectedRowKeys || [], props2.onSelectChange, "selectedRowKeys"), _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2), tSelectedRowKeys = _useDefaultValue2[0], setTSelectedRowKeys = _useDefaultValue2[1];
  var rowDataKeys = computed(function() {
    var _props$tree;
    return {
      rowKey: props2.rowKey || "id",
      childrenKey: ((_props$tree = props2.tree) === null || _props$tree === void 0 ? void 0 : _props$tree.childrenKey) || "children"
    };
  });
  watch([tree, treeDataMap, data2, tSelectedRowKeys], function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), tree2 = _ref2[0], treeDataMap2 = _ref2[1];
    if (!tree2 || !treeDataMap2.size || tree2.checkStrictly)
      return;
    updateIndeterminateState();
  });
  function updateIndeterminateState() {
    if (!tree.value || tree.value.checkStrictly)
      return;
    if (!tSelectedRowKeys.value.length) {
      tIndeterminateSelectedRowKeys.value = [];
      return;
    }
    var keys2 = [];
    var parentMap = {};
    for (var i = 0, len2 = tSelectedRowKeys.value.length; i < len2; i++) {
      var rowValue = tSelectedRowKeys.value[i];
      var state = treeDataMap.value.get(rowValue);
      if (!state)
        continue;
      var children = get_1(state.row, rowDataKeys.value.childrenKey);
      if (!children || !children.length) {
        var parentTmp = state.parent;
        while (parentTmp) {
          if (!parentMap[parentTmp.id]) {
            parentMap[parentTmp.id] = [];
          }
          parentMap[parentTmp.id].push(state.row);
          var checkedLength = parentMap[parentTmp.id].length;
          var _getChildrenData = getChildrenData(treeDataMap.value, parentTmp.row, rowDataKeys.value), allChildrenKeys = _getChildrenData.allChildrenKeys;
          var parentTmpIndex = keys2.indexOf(parentTmp.id);
          var selectedIndex = tSelectedRowKeys.value.indexOf(parentTmp.id);
          if (checkedLength > 0 && checkedLength < allChildrenKeys.length && selectedIndex === -1) {
            parentTmpIndex === -1 && keys2.push(parentTmp.id);
          } else {
            parentTmpIndex !== -1 && keys2.splice(parentTmpIndex, 1);
          }
          parentTmp = parentTmp.parent;
        }
      }
    }
    tIndeterminateSelectedRowKeys.value = keys2;
  }
  function updateParentCheckedState(selectedKeys, currentRowKey, type) {
    if (!tree.value || tree.value.checkStrictly)
      return;
    var keys2 = _toConsumableArray(selectedKeys);
    var state = treeDataMap.value.get(currentRowKey);
    var parentTmp = state.parent;
    while (parentTmp) {
      var _getChildrenData2 = getChildrenData(treeDataMap.value, parentTmp.row, rowDataKeys.value), leafNodeKeys = _getChildrenData2.leafNodeKeys;
      var checkedChildrenKeys = intersection_1(leafNodeKeys, selectedKeys);
      var selectedIndex = keys2.indexOf(parentTmp.id);
      if (type === "uncheck") {
        selectedIndex !== -1 && keys2.splice(selectedIndex, 1);
      } else if (checkedChildrenKeys.length === leafNodeKeys.length) {
        selectedIndex === -1 && keys2.push(parentTmp.id);
      }
      parentTmp = parentTmp.parent;
    }
    return keys2;
  }
  function onInnerSelectChange(rowKeys, extraData) {
    if (!tree.value || tree.value.checkStrictly) {
      setTSelectedRowKeys(rowKeys, extraData);
      return;
    }
    if (extraData.currentRowKey === "CHECK_ALL_BOX") {
      handleSelectAll(extraData);
    } else {
      handleSelect(rowKeys, extraData);
    }
  }
  function handleSelectAll(extraData) {
    var newRowKeys = [];
    var newRowData = [];
    if (extraData.type === "check") {
      var arr = _toConsumableArray(treeDataMap.value.values());
      for (var i = 0, len2 = arr.length; i < len2; i++) {
        var item = arr[i];
        if (!item.disabled) {
          newRowData.push(item.row);
          newRowKeys.push(get_1(item.row, rowDataKeys.value.rowKey));
        }
      }
    }
    var newExtraData = _objectSpread$1(_objectSpread$1({}, extraData), {}, {
      selectedRowData: newRowData || []
    });
    setTSelectedRowKeys(newRowKeys, newExtraData);
  }
  function handleSelect(rowKeys, extraData) {
    var _props$tree2;
    var newRowKeys = _toConsumableArray(rowKeys);
    if (((_props$tree2 = props2.tree) === null || _props$tree2 === void 0 ? void 0 : _props$tree2.checkStrictly) === false) {
      if ((extraData === null || extraData === void 0 ? void 0 : extraData.type) === "check") {
        var result = getChildrenData(treeDataMap.value, extraData.currentRowData, rowDataKeys.value);
        var allChildrenKeys = result.allChildrenKeys;
        childrenMap.set(extraData.currentRowData, result);
        newRowKeys = _toConsumableArray(new Set(newRowKeys.concat(allChildrenKeys)));
      } else if ((extraData === null || extraData === void 0 ? void 0 : extraData.type) === "uncheck") {
        var children = getChildrenData(treeDataMap.value, extraData.currentRowData, rowDataKeys.value);
        var _result = removeChildrenKeys({
          selectedRowKeys: rowKeys,
          removeKeys: children.allChildrenKeys
        });
        newRowKeys = _result.keys;
      }
    }
    newRowKeys = updateParentCheckedState(newRowKeys, extraData.currentRowKey, extraData.type);
    var newRowData = getRowDataByKeys({
      treeDataMap: treeDataMap.value,
      selectedRowKeys: newRowKeys
    });
    var newExtraData = _objectSpread$1(_objectSpread$1({}, extraData), {}, {
      selectedRowData: newRowData
    });
    setTSelectedRowKeys(newRowKeys, newExtraData);
  }
  return {
    tIndeterminateSelectedRowKeys: indeterminateSelectedRowKeys.value ? indeterminateSelectedRowKeys : tIndeterminateSelectedRowKeys,
    onInnerSelectChange
  };
}
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _excluded = ["store", "dataSource", "formatTreeColumn", "swapData"];
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
var _EnhancedTable = defineComponent({
  name: "TEnhancedTable",
  props: _objectSpread(_objectSpread(_objectSpread({}, baseTableProps), primaryTableProps), enhancedTableProps),
  setup: function setup32(props2, context) {
    var primaryTableRef = ref(null);
    var _useTreeData = useTreeData(props2, context), store = _useTreeData.store, dataSource = _useTreeData.dataSource, formatTreeColumn = _useTreeData.formatTreeColumn, swapData = _useTreeData.swapData, treeInstanceFunctions = _objectWithoutProperties$1(_useTreeData, _excluded);
    var classPrefix = usePrefixClass();
    var treeDataMap = ref(store.value.treeDataMap);
    var _useTreeSelect = useTreeSelect(props2, treeDataMap), tIndeterminateSelectedRowKeys = _useTreeSelect.tIndeterminateSelectedRowKeys, onInnerSelectChange = _useTreeSelect.onInnerSelectChange;
    var getColumns = function getColumns2(columns) {
      var arr = [];
      for (var i = 0, len2 = columns.length; i < len2; i++) {
        var _item$children, _item$children2;
        var item = _objectSpread({}, columns[i]);
        item = formatTreeColumn(item);
        if ((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length) {
          item.children = getColumns2(item.children);
        }
        if (!item.children || (_item$children2 = item.children) !== null && _item$children2 !== void 0 && _item$children2.length) {
          arr.push(item);
        }
      }
      return arr;
    };
    var tColumns = computed(function() {
      var isTreeData = !props2.tree || !Object.keys(props2.tree).length;
      return isTreeData ? props2.columns : getColumns(props2.columns);
    });
    var onDragSortChange = function onDragSortChange2(params) {
      var _props$onDragSort;
      if (props2.beforeDragSort && !props2.beforeDragSort(params))
        return;
      swapData({
        current: params.current,
        target: params.target,
        currentIndex: params.currentIndex,
        targetIndex: params.targetIndex
      });
      (_props$onDragSort = props2.onDragSort) === null || _props$onDragSort === void 0 ? void 0 : _props$onDragSort.call(props2, params);
    };
    var onEnhancedTableRowClick = function onEnhancedTableRowClick2(p) {
      var _props$tree, _props$onRowClick;
      if ((_props$tree = props2.tree) !== null && _props$tree !== void 0 && _props$tree.expandTreeNodeOnClick) {
        treeInstanceFunctions.toggleExpandData({
          row: p.row,
          rowIndex: p.index
        }, "row-click");
      }
      (_props$onRowClick = props2.onRowClick) === null || _props$onRowClick === void 0 ? void 0 : _props$onRowClick.call(props2, p);
    };
    context.expose(_objectSpread(_objectSpread({
      store: store.value,
      dataSource: dataSource.value
    }, treeInstanceFunctions), {}, {
      primaryTableRef,
      validateRowData: function validateRowData(rowValue) {
        return primaryTableRef.value.validateRowData(rowValue);
      },
      validateTableData: function validateTableData() {
        return primaryTableRef.value.validateTableData();
      },
      clearValidateData: function clearValidateData() {
        primaryTableRef.value.clearValidateData();
      },
      refreshTable: function refreshTable() {
        primaryTableRef.value.refreshTable();
      },
      scrollToElement: function scrollToElement(data2) {
        primaryTableRef.value.scrollToElement(data2);
      }
    }));
    return function() {
      var _props$tree2;
      var _getCurrentInstance = getCurrentInstance(), vnode = _getCurrentInstance.vnode;
      var enhancedProps = _objectSpread(_objectSpread({}, vnode.props), {}, {
        rowKey: props2.rowKey || "id",
        data: dataSource.value,
        columns: tColumns.value,
        indeterminateSelectedRowKeys: tIndeterminateSelectedRowKeys.value,
        disableDataPage: Boolean(props2.tree && Object.keys(props2.tree).length),
        onSelectChange: onInnerSelectChange,
        onDragSort: onDragSortChange,
        rowClassName: function rowClassName(_ref) {
          var row = _ref.row;
          var rowValue = get_1(row, props2.rowKey || "id");
          var rowState = treeDataMap.value.get(rowValue);
          if (!rowState)
            return [props2.rowClassName];
          return ["".concat(classPrefix.value, "-table-tr--level-").concat(rowState.level), props2.rowClassName];
        }
      });
      if ((_props$tree2 = props2.tree) !== null && _props$tree2 !== void 0 && _props$tree2.expandTreeNodeOnClick) {
        enhancedProps.onRowClick = onEnhancedTableRowClick;
      }
      return createVNode(_PrimaryTable, mergeProps(enhancedProps, {
        "ref": primaryTableRef
      }), context.slots);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
withInstall(_BaseTable);
withInstall(_PrimaryTable);
withInstall(_EnhancedTable);
var table = cloneDeep_1(_PrimaryTable);
var Table = withInstall(table, "TTable");
const _withScopeId = (n) => (pushScopeId("data-v-3f139bd1"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "serinfo"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "serinfo-name"
}, "主机供应商", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "serinfo-name"
}, "主机名", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "serinfo-name"
}, "IP", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "serinfo-name"
}, "用户名", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "serinfo-name"
}, "端口", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "serinfo-name"
}, "配置信息", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "serinfo-name"
}, "备注", -1));
const _sfc_main = {
  __name: "index",
  setup(__props) {
    var socket = lookup("ws://127.0.0.1:3000", {
      transports: ["websocket"],
      withCredentials: false
    });
    const router = useRouter();
    const loading = ref(false);
    const tableLoading = ref(true);
    const placement = ref("top-right");
    const bordered = ref(false);
    const setVisible = ref(false);
    const addVisible = ref(false);
    const delVisible = ref(false);
    const temVisible = ref(false);
    const tabValue = ref(1);
    const deleteId = ref(null);
    const activeRow = ref(null);
    const initialData = ref([]);
    const newData = ref([]);
    const staticColumn = ["oprate", "vendor", "name", "ip", "port", "config", "mark"];
    const displayColumns = ref(staticColumn.concat(["oprate", "vendor", "name", "ip", "port", "config", "mark"]));
    const columns = ref([{
      colKey: "name",
      title: "主机名",
      ellipsis: true
    }, {
      colKey: "ip",
      title: "IP",
      ellipsis: true
    }, {
      title: "操作",
      colKey: "oprate",
      cell: (h2, {
        row
      }) => createVNode("div", null, [createVNode(Button, {
        "shape": "circle",
        "variant": "text",
        "onClick": () => (activeRow.value = row, temVisible.value = true)
      }, {
        default: () => [createVNode(link, null, null)]
      }), createVNode(Button, {
        "shape": "circle",
        "variant": "text",
        "onClick": () => openSetModel(row)
      }, {
        default: () => [createVNode(setting, null, null)]
      }), createVNode(Button, {
        "shape": "circle",
        "variant": "text",
        "onClick": () => (deleteId.value = row.id, delVisible.value = true)
      }, {
        default: () => [createVNode(close, null, null)]
      })])
    }]);
    const servercard = ref(null);
    const sertableHeight = ref(300);
    const filterCont = ref("");
    const servertable = ref(null);
    const updateform = ref(null);
    const addform = ref(null);
    const temform = ref(null);
    const setModelValue = ref({});
    const updateformData = reactive({
      name: "",
      vendor: "",
      ip: "",
      username: "",
      port: "",
      config: "",
      mark: "",
      id: ""
    });
    const updaterules = {
      name: [{
        required: true,
        message: "主机名必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "主机名必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "主机名不能为空"
      }],
      vendor: [{
        required: true,
        message: "主机供应商必选",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "主机供应商必选",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "主机供应商不能为空"
      }],
      ip: [{
        required: true,
        message: "IP必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "IP必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "IP不能为空"
      }],
      username: [{
        required: true,
        message: "用户名必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "用户名必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "用户名不能为空"
      }],
      port: [{
        required: true,
        message: "端口必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "端口必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "端口不能为空"
      }]
    };
    const updateoptions = [{
      label: "腾讯云",
      value: "1"
    }, {
      label: "阿里云",
      value: "2"
    }, {
      label: "华为云",
      value: "3"
    }, {
      label: "百度云",
      value: "4"
    }, {
      label: "网易云",
      value: "5"
    }, {
      label: "京东云",
      value: "6"
    }, {
      label: "其他",
      value: "7"
    }];
    const addformData = reactive({
      name: "",
      vendor: "",
      ip: "",
      username: "",
      port: "",
      config: "",
      mark: ""
    });
    const addrules = {
      name: [{
        required: true,
        message: "主机名必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "主机名必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "主机名不能为空"
      }],
      vendor: [{
        required: true,
        message: "主机供应商必选",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "主机供应商必选",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "主机供应商不能为空"
      }],
      ip: [{
        required: true,
        message: "IP必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "IP必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "IP不能为空"
      }],
      username: [{
        required: true,
        message: "用户名必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "用户名必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "用户名不能为空"
      }],
      port: [{
        required: true,
        message: "端口必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "端口必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "端口不能为空"
      }]
    };
    const addoptions = [{
      label: "腾讯云",
      value: "1"
    }, {
      label: "阿里云",
      value: "2"
    }, {
      label: "华为云",
      value: "3"
    }, {
      label: "百度云",
      value: "4"
    }, {
      label: "网易云",
      value: "5"
    }, {
      label: "京东云",
      value: "6"
    }, {
      label: "其他",
      value: "7"
    }];
    const temformData = reactive({
      password: ""
    });
    const temrules = {
      password: [{
        required: true,
        message: "密码必填",
        type: "error",
        trigger: "blur"
      }, {
        required: true,
        message: "密码必填",
        type: "error",
        trigger: "change"
      }, {
        whitespace: true,
        message: "密码不能为空"
      }]
    };
    const getServer = () => {
      socket.emit("getServer");
      socket.on("getServer", (msg) => {
        const data2 = JSON.parse(msg);
        initialData.value = data2;
        searchEvent();
        tableLoading.value = false;
      });
    };
    onMounted(() => {
      const servercardHeight = servercard.value.$el.offsetHeight;
      sertableHeight.value = servercardHeight - servercard.value.$el.offsetTop - 120;
    });
    onBeforeMount(() => {
      getServer();
    });
    const searchEvent = () => {
      const filterVal = String(filterCont.value).trim().toLowerCase();
      if (filterVal) {
        const searchProps = ["vendor", "name", "ip", "port", "config", "mark"];
        const rest = initialData.value.filter((item) => searchProps.some((key2) => String(item[key2]).toLowerCase().indexOf(filterVal) > -1));
        newData.value = rest.map((row) => {
          const item = Object.assign({}, row);
          return item;
        });
      } else {
        newData.value = initialData.value;
      }
    };
    const openSetModel = (row) => {
      setVisible.value = !setVisible.value;
      setModelValue.value = row;
      if (row.vendor == "腾讯云") {
        updateformData.vendor = "1";
      }
      if (row.vendor == "阿里云") {
        updateformData.vendor = "2";
      }
      if (row.vendor == "华为云") {
        updateformData.vendor = "3";
      }
      if (row.vendor == "百度云") {
        updateformData.vendor = "4";
      }
      if (row.vendor == "网易云") {
        updateformData.vendor = "5";
      }
      if (row.vendor == "京东云") {
        updateformData.vendor = "6";
      }
      if (row.vendor == "其他") {
        updateformData.vendor = "7";
      }
      updateformData.ip = row.ip;
      updateformData.config = row.config;
      updateformData.mark = row.mark;
      updateformData.name = row.name;
      updateformData.port = String(row.port);
      updateformData.username = row.username;
      updateformData.id = row.id;
    };
    const onupdateSubmit = ({
      validateResult,
      firstError,
      e
    }) => {
      e.preventDefault();
      if (validateResult === true) {
        const data2 = {
          vendor: "",
          name: "",
          ip: "",
          port: null,
          config: "",
          mark: "",
          username: ""
        };
        if (updateformData.vendor == "1") {
          data2.vendor = "腾讯云";
        }
        if (updateformData.vendor == "2") {
          data2.vendor = "阿里云";
        }
        if (updateformData.vendor == "3") {
          data2.vendor = "华为云";
        }
        if (updateformData.vendor == "4") {
          data2.vendor = "百度云";
        }
        if (updateformData.vendor == "5") {
          data2.vendor = "网易云";
        }
        if (updateformData.vendor == "6") {
          data2.vendor = "京东云";
        }
        if (updateformData.vendor == "7") {
          data2.vendor = "其他";
        }
        data2.ip = updateformData.ip;
        data2.config = updateformData.config;
        data2.mark = updateformData.mark;
        data2.name = updateformData.name;
        data2.port = Number(updateformData.port);
        data2.username = updateformData.username;
        const endData = {
          id: updateformData.id,
          data: data2
        };
        socket.emit("updateServer", JSON.stringify(endData));
        socket.on("updateServer", (msg) => {
          const data3 = JSON.parse(msg);
          if (data3.type == "success") {
            MessagePlugin.success(data3.msg);
            setVisible.value = false;
            getServer();
          } else {
            MessagePlugin.error(data3.msg);
          }
        });
      } else {
        console.log("Validate Errors: ", firstError, validateResult);
        MessagePlugin.warning(firstError);
      }
    };
    const onaddSubmit = ({
      validateResult,
      firstError,
      e
    }) => {
      e.preventDefault();
      if (validateResult === true) {
        const data2 = {
          vendor: "",
          name: "",
          ip: "",
          port: null,
          config: "",
          mark: "",
          username: ""
        };
        if (addformData.vendor == "1") {
          data2.vendor = "腾讯云";
        }
        if (addformData.vendor == "2") {
          data2.vendor = "阿里云";
        }
        if (addformData.vendor == "3") {
          data2.vendor = "华为云";
        }
        if (addformData.vendor == "4") {
          data2.vendor = "百度云";
        }
        if (addformData.vendor == "5") {
          data2.vendor = "网易云";
        }
        if (addformData.vendor == "6") {
          data2.vendor = "京东云";
        }
        if (addformData.vendor == "7") {
          data2.vendor = "其他";
        }
        data2.ip = addformData.ip;
        data2.config = addformData.config;
        data2.mark = addformData.mark;
        data2.name = addformData.name;
        data2.port = Number(addformData.port);
        data2.username = addformData.username;
        socket.emit("addServer", JSON.stringify(data2));
        socket.on("addServer", (msg) => {
          const data3 = JSON.parse(msg);
          if (data3.type == "success") {
            MessagePlugin.success(data3.msg);
            addVisible.value = false;
            getServer();
          } else {
            MessagePlugin.error(data3.msg);
          }
        });
      } else {
        console.log("Validate Errors: ", firstError, validateResult);
        MessagePlugin.warning(firstError);
      }
    };
    const deleteData = () => {
      if (deleteId.value != null) {
        socket.emit("delServer", deleteId.value);
        socket.on("delServer", (msg) => {
          const data2 = JSON.parse(msg);
          if (data2.type == "success") {
            MessagePlugin.success(data2.msg);
            getServer();
          } else {
            MessagePlugin.error(data2.msg);
          }
        });
        delVisible.value = false;
      } else {
        MessagePlugin.error("删除失败");
        delVisible.value = false;
      }
    };
    const ontemSubmit = ({
      validateResult,
      firstError,
      e
    }) => {
      e.preventDefault();
      if (validateResult === true) {
        openTerm();
      } else {
        console.log("Validate Errors: ", firstError, validateResult);
        MessagePlugin.warning(firstError);
      }
    };
    const openTerm = () => {
      const data2 = {
        ip: activeRow.value.ip,
        password: temformData.password,
        port: activeRow.value.port,
        username: activeRow.value.username
      };
      router.push({
        name: "term",
        state: {
          data: data2
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_t_loading = Loading;
      const _component_t_tag = Tag;
      const _component_t_tab_panel = TabPanel;
      const _component_t_option = Option;
      const _component_t_select = Select;
      const _component_t_form_item = FormItem;
      const _component_t_input = Input;
      const _component_t_button = Button;
      const _component_t_space = Space;
      const _component_t_form = Form;
      const _component_t_tabs = Tabs;
      const _component_t_dialog = Dialog;
      const _component_t_col = Col;
      const _component_t_row = Row;
      const _component_t_table = Table;
      const _component_t_card = Card;
      return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_t_loading, {
        loading: loading.value,
        fullscreen: ""
      }, null, 8, ["loading"]), createVNode(_component_t_dialog, {
        visible: setVisible.value,
        "onUpdate:visible": _cache[8] || (_cache[8] = ($event) => setVisible.value = $event),
        header: "设置",
        attach: "body",
        footer: false
      }, {
        body: withCtx(() => [createVNode(_component_t_tabs, {
          modelValue: tabValue.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tabValue.value = $event)
        }, {
          default: withCtx(() => [createVNode(_component_t_tab_panel, {
            value: 1,
            label: "详细信息",
            "destroy-on-hide": false
          }, {
            default: withCtx(() => [createBaseVNode("ul", _hoisted_1, [createBaseVNode("li", null, [_hoisted_2, createVNode(_component_t_tag, {
              theme: "primary",
              variant: "light"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(setModelValue.value.vendor), 1)]),
              _: 1
            })]), createBaseVNode("li", null, [_hoisted_3, createVNode(_component_t_tag, {
              theme: "primary",
              variant: "light"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(setModelValue.value.name), 1)]),
              _: 1
            })]), createBaseVNode("li", null, [_hoisted_4, createVNode(_component_t_tag, {
              theme: "primary",
              variant: "light"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(setModelValue.value.ip), 1)]),
              _: 1
            })]), createBaseVNode("li", null, [_hoisted_5, createVNode(_component_t_tag, {
              theme: "primary",
              variant: "light"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(setModelValue.value.username), 1)]),
              _: 1
            })]), createBaseVNode("li", null, [_hoisted_6, createVNode(_component_t_tag, {
              theme: "primary",
              variant: "light"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(setModelValue.value.port), 1)]),
              _: 1
            })]), createBaseVNode("li", null, [_hoisted_7, createVNode(_component_t_tag, {
              theme: "primary",
              variant: "light"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(setModelValue.value.config ? setModelValue.value.config : "未填写"), 1)]),
              _: 1
            })]), createBaseVNode("li", null, [_hoisted_8, createVNode(_component_t_tag, {
              theme: "primary",
              variant: "light"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(setModelValue.value.mark ? setModelValue.value.mark : "无备注"), 1)]),
              _: 1
            })])])]),
            _: 1
          }), createVNode(_component_t_tab_panel, {
            value: 2,
            label: "修改信息",
            "destroy-on-hide": false
          }, {
            panel: withCtx(() => [createVNode(_component_t_form, {
              ref_key: "updateform",
              ref: updateform,
              style: {
                "margin-top": "15px"
              },
              data: updateformData,
              rules: updaterules,
              onSubmit: onupdateSubmit
            }, {
              default: withCtx(() => [createVNode(_component_t_form_item, {
                label: "主机供应商",
                name: "vendor"
              }, {
                default: withCtx(() => [createVNode(_component_t_select, {
                  modelValue: updateformData.vendor,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => updateformData.vendor = $event),
                  clearable: "",
                  filterable: ""
                }, {
                  default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(updateoptions, (item, index2) => {
                    return createVNode(_component_t_option, {
                      key: index2,
                      value: item.value,
                      label: item.label
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
                      _: 2
                    }, 1032, ["value", "label"]);
                  }), 64))]),
                  _: 1
                }, 8, ["modelValue"])]),
                _: 1
              }), createVNode(_component_t_form_item, {
                label: "主机名",
                name: "name"
              }, {
                default: withCtx(() => [createVNode(_component_t_input, {
                  modelValue: updateformData.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => updateformData.name = $event)
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(_component_t_form_item, {
                label: "IP",
                name: "ip"
              }, {
                default: withCtx(() => [createVNode(_component_t_input, {
                  modelValue: updateformData.ip,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => updateformData.ip = $event)
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(_component_t_form_item, {
                label: "用户名",
                name: "username"
              }, {
                default: withCtx(() => [createVNode(_component_t_input, {
                  modelValue: updateformData.username,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => updateformData.username = $event),
                  placeholder: "例如：root"
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(_component_t_form_item, {
                label: "端口",
                name: "port"
              }, {
                default: withCtx(() => [createVNode(_component_t_input, {
                  modelValue: updateformData.port,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => updateformData.port = $event)
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(_component_t_form_item, {
                label: "配置信息",
                name: "config"
              }, {
                default: withCtx(() => [createVNode(_component_t_input, {
                  modelValue: updateformData.config,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => updateformData.config = $event)
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(_component_t_form_item, {
                label: "备注",
                name: "mark"
              }, {
                default: withCtx(() => [createVNode(_component_t_input, {
                  modelValue: updateformData.mark,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => updateformData.mark = $event)
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(_component_t_form_item, null, {
                default: withCtx(() => [createVNode(_component_t_space, {
                  size: "small"
                }, {
                  default: withCtx(() => [createVNode(_component_t_button, {
                    theme: "primary",
                    type: "submit"
                  }, {
                    default: withCtx(() => [createTextVNode("提交")]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }, 8, ["data"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }, 8, ["visible"]), createVNode(_component_t_dialog, {
        visible: addVisible.value,
        "onUpdate:visible": _cache[16] || (_cache[16] = ($event) => addVisible.value = $event),
        header: "新增主机",
        attach: "body",
        footer: false
      }, {
        body: withCtx(() => [createVNode(_component_t_form, {
          ref_key: "addform",
          ref: addform,
          style: {
            "margin-top": "15px"
          },
          data: addformData,
          rules: addrules,
          onSubmit: onaddSubmit
        }, {
          default: withCtx(() => [createVNode(_component_t_form_item, {
            label: "主机供应商",
            name: "vendor"
          }, {
            default: withCtx(() => [createVNode(_component_t_select, {
              modelValue: addformData.vendor,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => addformData.vendor = $event),
              clearable: "",
              filterable: ""
            }, {
              default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(addoptions, (item, index2) => {
                return createVNode(_component_t_option, {
                  key: index2,
                  value: item.value,
                  label: item.label
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
                  _: 2
                }, 1032, ["value", "label"]);
              }), 64))]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, {
            label: "主机名",
            name: "name"
          }, {
            default: withCtx(() => [createVNode(_component_t_input, {
              modelValue: addformData.name,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => addformData.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, {
            label: "IP",
            name: "ip"
          }, {
            default: withCtx(() => [createVNode(_component_t_input, {
              modelValue: addformData.ip,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => addformData.ip = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, {
            label: "用户名",
            name: "username"
          }, {
            default: withCtx(() => [createVNode(_component_t_input, {
              modelValue: addformData.username,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => addformData.username = $event),
              placeholder: "例如：root"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, {
            label: "端口",
            name: "port"
          }, {
            default: withCtx(() => [createVNode(_component_t_input, {
              modelValue: addformData.port,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => addformData.port = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, {
            label: "配置信息",
            name: "config"
          }, {
            default: withCtx(() => [createVNode(_component_t_input, {
              modelValue: addformData.config,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => addformData.config = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, {
            label: "备注",
            name: "mark"
          }, {
            default: withCtx(() => [createVNode(_component_t_input, {
              modelValue: addformData.mark,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => addformData.mark = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, null, {
            default: withCtx(() => [createVNode(_component_t_space, {
              size: "small"
            }, {
              default: withCtx(() => [createVNode(_component_t_button, {
                theme: "primary",
                type: "submit"
              }, {
                default: withCtx(() => [createTextVNode("提交")]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])]),
        _: 1
      }, 8, ["visible"]), createVNode(_component_t_dialog, {
        visible: temVisible.value,
        "onUpdate:visible": _cache[18] || (_cache[18] = ($event) => temVisible.value = $event),
        header: "请输入密码以连接主机",
        attach: "body",
        footer: false
      }, {
        body: withCtx(() => [createVNode(_component_t_form, {
          ref_key: "temform",
          ref: temform,
          style: {
            "margin-top": "15px"
          },
          data: temformData,
          rules: temrules,
          onSubmit: ontemSubmit
        }, {
          default: withCtx(() => [createVNode(_component_t_form_item, {
            label: "密码",
            name: "password"
          }, {
            default: withCtx(() => [createVNode(_component_t_input, {
              type: "password",
              modelValue: temformData.password,
              "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => temformData.password = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), createVNode(_component_t_form_item, null, {
            default: withCtx(() => [createVNode(_component_t_space, {
              size: "small"
            }, {
              default: withCtx(() => [createVNode(_component_t_button, {
                theme: "primary",
                type: "submit"
              }, {
                default: withCtx(() => [createTextVNode("提交")]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])]),
        _: 1
      }, 8, ["visible"]), createVNode(_component_t_dialog, {
        visible: delVisible.value,
        "onUpdate:visible": _cache[19] || (_cache[19] = ($event) => delVisible.value = $event),
        theme: "info",
        header: "提示",
        closeOnOverlayClick: false,
        body: "确认删除？",
        "cancel-btn": null,
        onConfirm: deleteData
      }, null, 8, ["visible"]), createVNode(_component_t_card, {
        ref_key: "servercard",
        ref: servercard,
        style: {
          "height": "100%",
          "width": "100%"
        },
        bordered: false
      }, {
        default: withCtx(() => [createVNode(_component_t_row, {
          justify: "space-around"
        }, {
          default: withCtx(() => [createVNode(_component_t_col, {
            flex: "1"
          }, {
            default: withCtx(() => [createVNode(_component_t_button, {
              onClick: _cache[20] || (_cache[20] = ($event) => addVisible.value = !addVisible.value)
            }, {
              default: withCtx(() => [createTextVNode("新增主机")]),
              _: 1
            })]),
            _: 1
          }), createVNode(_component_t_col, null, {
            default: withCtx(() => [createVNode(_component_t_input, {
              onKeyup: searchEvent,
              modelValue: filterCont.value,
              "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => filterCont.value = $event),
              placeholder: "请输入..."
            }, {
              suffixIcon: withCtx(() => [createVNode(unref(search), {
                style: {
                  cursor: "pointer"
                }
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }), createVNode(_component_t_table, {
          ref_key: "servertable",
          ref: servertable,
          style: {
            marginTop: "20px"
          },
          displayColumns: displayColumns.value,
          "onUpdate:displayColumns": _cache[22] || (_cache[22] = ($event) => displayColumns.value = $event),
          "row-key": "id",
          loading: tableLoading.value,
          height: sertableHeight.value,
          data: newData.value,
          columns: columns.value,
          "column-controller": {
            placement: placement.value,
            fields: ["oprate", "vendor", "name", "port", "config", "mark"],
            dialogProps: {
              preventScrollThrough: true
            },
            hideTriggerButton: true
          },
          bordered: bordered.value,
          lazyLoad: true,
          stripe: false,
          hover: true,
          resizable: ""
        }, null, 8, ["displayColumns", "loading", "height", "data", "columns", "column-controller", "bordered"])]),
        _: 1
      }, 512)], 64);
    };
  }
};
const index_vue_vue_type_style_index_0_scoped_3f139bd1_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f139bd1"]]);
export {
  index as default
};
