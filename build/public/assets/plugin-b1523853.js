import { d as defineComponent, c as computed, u as useSizeProps, r as renderFn, _ as _defineProperty, a as usePrefixClass, b as useGlobalIcon, e as close, aw as useContent, m as ref, g as _defineProperty$1, a_ as onBeforeMount, o as onMounted, f as createVNode, N as isFunction_1, aF as h, L as Loading, h as useTNodeJSX, a8 as mergeProps, i as isString_1, k as isObject_1, bc as getAttach, bb as createApp, U as nextTick } from "./index-6d155c59.js";
import { c as checkCircleFilled, e as errorCircleFilled } from "./index-87a98986.js";
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
      "d": "M15 8A7 7 0 101 8a7 7 0 0014 0zM5.8 6.63a2.2 2.2 0 014.39 0c0 .97-.75 1.72-1.49 2.02a.34.34 0 00-.2.32v.8h-1v-.8c0-.56.33-1.04.82-1.24.5-.2.87-.66.87-1.1a1.2 1.2 0 00-2.39 0h-1zm1.67 4.54a.53.53 0 111.05 0 .53.53 0 01-1.05 0z",
      "fillOpacity": 0.9
    }
  }]
};
var helpCircleFilled = defineComponent({
  name: "HelpCircleFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-help-circle-filled", className.value]);
    var finalStyle = computed(() => _objectSpread$4(_objectSpread$4({}, style.value), attrs.style));
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
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
      "d": "M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",
      "fillOpacity": 0.9
    }
  }]
};
var infoCircleFilled = defineComponent({
  name: "InfoCircleFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-info-circle-filled", className.value]);
    var finalStyle = computed(() => _objectSpread$3(_objectSpread$3({}, style.value), attrs.style));
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
var THEME_LIST = ["info", "success", "warning", "error", "question", "loading"];
var DISTANCE = "32px";
var PLACEMENT_OFFSET = {
  top: {
    top: DISTANCE,
    left: "50%",
    transform: "translateX(-50%)"
  },
  center: {
    left: "50%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)"
  },
  left: {
    left: DISTANCE,
    top: "50%",
    transform: "translateY(-50%)"
  },
  bottom: {
    bottom: DISTANCE,
    left: "50%",
    transform: "translateX(-50%)"
  },
  right: {
    right: DISTANCE,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  "top-left": {
    left: DISTANCE,
    top: DISTANCE
  },
  "top-right": {
    right: DISTANCE,
    top: DISTANCE,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  "bottom-right": {
    right: DISTANCE,
    bottom: DISTANCE,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  "bottom-left": {
    left: DISTANCE,
    bottom: DISTANCE
  }
};
var PLACEMENT_LIST = Object.keys(PLACEMENT_OFFSET);
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props = {
  closeBtn: {
    type: [String, Boolean, Function],
    "default": void 0
  },
  content: {
    type: [String, Function]
  },
  duration: {
    type: Number,
    "default": 3e3
  },
  icon: {
    type: [Boolean, Function],
    "default": true
  },
  theme: {
    type: String,
    "default": "info",
    validator: function validator(val) {
      if (!val)
        return true;
      return ["info", "success", "warning", "error", "question", "loading"].includes(val);
    }
  },
  onClose: Function,
  onCloseBtnClick: Function,
  onDurationEnd: Function
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var ANIMATION_OPTION = {
  duration: 200,
  easing: "linear"
};
function fadeIn(dom, placement) {
  if (!dom)
    return;
  var offsetWidth = (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
  var offsetHeight = (dom === null || dom === void 0 ? void 0 : dom.offsetHeight) || 0;
  var fadeInKeyframes = getFadeInKeyframes(placement, offsetWidth, offsetHeight);
  if (!fadeInKeyframes)
    return;
  var styleAfterFadeIn = fadeInKeyframes[fadeInKeyframes.length - 1];
  setDomStyleAfterAnimation(dom, styleAfterFadeIn);
  dom.animate && dom.animate(fadeInKeyframes, ANIMATION_OPTION);
}
function fadeOut(dom, placement, onFinish) {
  if (!dom)
    return;
  var offsetHeight = (dom === null || dom === void 0 ? void 0 : dom.offsetHeight) || 0;
  var fadeOutKeyframes = getFadeOutKeyframes(placement, offsetHeight);
  if (!fadeOutKeyframes)
    return onFinish();
  var styleAfterFadeOut = fadeOutKeyframes[fadeOutKeyframes.length - 1];
  setDomStyleAfterAnimation(dom, styleAfterFadeOut);
  var animation = dom.animate && dom.animate(fadeOutKeyframes, ANIMATION_OPTION);
  if (animation) {
    animation.onfinish = function() {
      dom.style.display = "none";
      onFinish();
    };
  } else {
    dom.style.display = "none";
    onFinish();
  }
}
function setDomStyleAfterAnimation(dom, styleAfterAnimation) {
  var keys = Object.keys(styleAfterAnimation);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    dom.style[key] = styleAfterAnimation[key];
  }
}
function getFadeInKeyframes(placement, offsetWidth, offsetHeight) {
  if (!PLACEMENT_LIST.includes(placement))
    return null;
  if (["top-left", "left", "bottom-left"].includes(placement)) {
    return [{
      opacity: 0,
      marginLeft: "-".concat(offsetWidth, "px")
    }, {
      opacity: 1,
      marginLeft: "0"
    }];
  }
  if (["top-right", "right", "bottom-right"].includes(placement)) {
    return [{
      opacity: 0,
      marginRight: "-".concat(offsetWidth, "px")
    }, {
      opacity: 1,
      marginRight: "0"
    }];
  }
  if (["top", "center"].includes(placement)) {
    return [{
      opacity: 0,
      marginTop: "-".concat(offsetHeight, "px")
    }, {
      opacity: 1,
      marginTop: "0"
    }];
  }
  if (["bottom"].includes(placement)) {
    return [{
      opacity: 0,
      transform: "translate3d(0, ".concat(offsetHeight, "px, 0)")
    }, {
      opacity: 1,
      transform: "translate3d(0, 0, 0)"
    }];
  }
}
function getFadeOutKeyframes(placement, offsetHeight) {
  if (!PLACEMENT_LIST.includes(placement))
    return null;
  if (["bottom-left", "bottom", "bottom-right"].includes(placement)) {
    var marginOffset2 = "".concat(offsetHeight, "px");
    return [{
      opacity: 1,
      marginTop: "0px"
    }, {
      opacity: 0,
      marginTop: marginOffset2
    }];
  }
  var marginOffset = "-".concat(offsetHeight, "px");
  return [{
    opacity: 1,
    marginTop: "0px"
  }, {
    opacity: 0,
    marginTop: marginOffset
  }];
}
const index = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var _Message = defineComponent({
  name: "TMessage",
  props: _objectSpread$2(_objectSpread$2({}, props), {}, {
    placement: String
  }),
  setup: function setup(props2, _ref) {
    var slots = _ref.slots, expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("message");
    var _useGlobalIcon = useGlobalIcon({
      InfoCircleFilledIcon: infoCircleFilled,
      CheckCircleFilledIcon: checkCircleFilled,
      ErrorCircleFilledIcon: errorCircleFilled,
      HelpCircleFilledIcon: helpCircleFilled,
      CloseIcon: close
    }), InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon, CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon, ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon, HelpCircleFilledIcon$1 = _useGlobalIcon.HelpCircleFilledIcon, CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var classPrefix = usePrefixClass();
    var renderTNode = useTNodeJSX();
    var renderContent = useContent();
    var msgRef = ref(null);
    var timer = ref(null);
    var classes = computed(function() {
      var status = {};
      THEME_LIST.forEach(function(t) {
        return status["".concat(classPrefix.value, "-is-").concat(t)] = props2.theme === t;
      });
      return [COMPONENT_NAME.value, status, _defineProperty$1({}, "".concat(classPrefix.value, "-is-closable"), props2.closeBtn || slots.closeBtn)];
    });
    var close$1 = function close3(e) {
      var _props2$onCloseBtnCli;
      (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 ? void 0 : _props2$onCloseBtnCli.call(props2, {
        e
      });
    };
    var clearTimer = function clearTimer2() {
      props2.duration && clearTimeout(timer.value);
    };
    var setTimer = function setTimer2() {
      if (!props2.duration) {
        return;
      }
      timer.value = Number(setTimeout(function() {
        clearTimer();
        var msgDom = msgRef.value;
        fadeOut(msgDom, props2.placement, function() {
          var _props2$onDurationEnd;
          (_props2$onDurationEnd = props2.onDurationEnd) === null || _props2$onDurationEnd === void 0 ? void 0 : _props2$onDurationEnd.call(props2);
        });
      }, props2.duration));
    };
    var renderClose = function renderClose2() {
      var defaultClose = createVNode(CloseIcon$1, null, null);
      return createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__close"),
        "onClick": close$1
      }, [renderTNode("closeBtn", defaultClose)]);
    };
    var renderIcon = function renderIcon2() {
      if (props2.icon === false)
        return;
      if (isFunction_1(props2.icon))
        return props2.icon(h);
      if (slots.icon) {
        return slots.icon(null);
      }
      var Icon = {
        info: InfoCircleFilledIcon$1,
        success: CheckCircleFilledIcon$1,
        warning: ErrorCircleFilledIcon$1,
        error: ErrorCircleFilledIcon$1,
        question: HelpCircleFilledIcon$1,
        loading: Loading
      }[props2.theme];
      return createVNode(Icon, null, null);
    };
    onBeforeMount(function() {
      props2.duration && setTimer();
    });
    onMounted(function() {
      var msgDom = msgRef.value;
      fadeIn(msgDom, props2.placement);
    });
    expose({
      close: close$1
    });
    return function() {
      return createVNode("div", {
        "ref": msgRef,
        "class": classes.value,
        "onMouseenter": clearTimer,
        "onMouseleave": setTimer
      }, [renderIcon(), renderContent("content", "default"), renderClose()]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var DEFAULT_Z_INDEX = 6e3;
var getUniqueId = function() {
  var id = 0;
  return function() {
    id += 1;
    return id;
  };
}();
var MessageList = defineComponent({
  name: "TMessageList",
  props: {
    zIndex: {
      type: Number,
      "default": 0
    },
    placement: {
      type: String,
      "default": ""
    }
  },
  setup: function setup2(props2, _ref) {
    var expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("message__list");
    var list = ref([]);
    var messageList = ref([]);
    var styles = computed(function() {
      return _objectSpread$1(_objectSpread$1({}, PLACEMENT_OFFSET[props2.placement]), {}, {
        zIndex: props2.zIndex !== DEFAULT_Z_INDEX ? props2.zIndex : DEFAULT_Z_INDEX
      });
    });
    var add = function add2(msg) {
      var mg = _objectSpread$1(_objectSpread$1({}, msg), {}, {
        key: getUniqueId()
      });
      list.value.push(mg);
      return mg.key;
    };
    var remove = function remove2(index2) {
      list.value.splice(index2, 1);
    };
    var removeAll = function removeAll2() {
      list.value = [];
    };
    var getOffset = function getOffset2(val) {
      if (!val)
        return;
      return isNaN(Number(val)) ? val : "".concat(val, "px");
    };
    var msgStyles = function msgStyles2(item) {
      return item.offset && {
        position: "relative",
        left: getOffset(item.offset[0]),
        top: getOffset(item.offset[1])
      };
    };
    var getProps = function getProps2(index2, item) {
      return _objectSpread$1(_objectSpread$1({}, item), {}, {
        onCloseBtnClick: function onCloseBtnClick(e) {
          if (item.onCloseBtnClick) {
            item.onCloseBtnClick(e);
          }
          return remove(index2);
        },
        onDurationEnd: function onDurationEnd() {
          if (item.onDurationEnd) {
            item.onDurationEnd();
          }
          return remove(index2);
        }
      });
    };
    var addChild = function addChild2(el) {
      if (el) {
        messageList.value.push(el);
      }
    };
    expose({
      add,
      removeAll,
      list,
      messageList
    });
    return function() {
      if (!list.value.length)
        return;
      return createVNode("div", {
        "class": COMPONENT_NAME.value,
        "style": styles.value
      }, [list.value.map(function(item, index2) {
        return createVNode(_Message, mergeProps({
          "key": item.key,
          "style": msgStyles(item),
          "ref": addChild
        }, getProps(index2, item)), null);
      })]);
    };
  }
});
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var instanceMap = /* @__PURE__ */ new Map();
function handleParams(params) {
  var options = _objectSpread({
    duration: 3e3,
    attach: "body",
    zIndex: DEFAULT_Z_INDEX,
    placement: "top"
  }, params);
  options.content = params.content;
  return options;
}
var MessageFunction = function MessageFunction2(props2) {
  var options = handleParams(props2);
  var attach = options.attach, placement = options.placement;
  var attachDom = getAttach(attach);
  if (!instanceMap.get(attachDom)) {
    instanceMap.set(attachDom, {});
  }
  var p = instanceMap.get(attachDom)[placement];
  var mgKey;
  if (!p) {
    var wrapper = document.createElement("div");
    var instance = createApp(MessageList, {
      zIndex: options.zIndex,
      placement: options.placement
    }).mount(wrapper);
    mgKey = instance.add(options);
    instanceMap.get(attachDom)[placement] = instance;
    attachDom.appendChild(wrapper);
  } else {
    mgKey = p.add(options);
  }
  return new Promise(function(resolve) {
    var ins = instanceMap.get(attachDom)[placement];
    nextTick(function() {
      var msg = ins.messageList;
      resolve(msg === null || msg === void 0 ? void 0 : msg.find(function(mg) {
        var _mg$$;
        return ((_mg$$ = mg.$) === null || _mg$$ === void 0 || (_mg$$ = _mg$$.vnode) === null || _mg$$ === void 0 ? void 0 : _mg$$.key) === mgKey;
      }));
    });
  });
};
var showThemeMessage = function showThemeMessage2(theme, params, duration) {
  var options = {
    theme
  };
  if (isString_1(params)) {
    options.content = params;
  } else if (isObject_1(params) && !(params instanceof Array)) {
    options = _objectSpread(_objectSpread({}, options), params);
  }
  (duration || duration === 0) && (options.duration = duration);
  return MessageFunction(options);
};
var extraApi = {
  info: function info(params, duration) {
    return showThemeMessage("info", params, duration);
  },
  success: function success(params, duration) {
    return showThemeMessage("success", params, duration);
  },
  warning: function warning(params, duration) {
    return showThemeMessage("warning", params, duration);
  },
  error: function error(params, duration) {
    return showThemeMessage("error", params, duration);
  },
  question: function question(params, duration) {
    return showThemeMessage("question", params, duration);
  },
  loading: function loading(params, duration) {
    return showThemeMessage("loading", params, duration);
  },
  close: function close2(promise) {
    promise.then(function(instance) {
      return instance === null || instance === void 0 ? void 0 : instance.close();
    });
  },
  closeAll: function closeAll() {
    if (instanceMap instanceof Map) {
      instanceMap.forEach(function(attach) {
        Object.keys(attach).forEach(function(placement) {
          var instance = attach[placement];
          instance.list = [];
        });
      });
    }
  }
};
var MessagePlugin = showThemeMessage;
MessagePlugin.install = function(app) {
  app.config.globalProperties.$message = showThemeMessage;
  Object.keys(extraApi).forEach(function(funcName) {
    app.config.globalProperties.$message[funcName] = extraApi[funcName];
  });
};
Object.keys(extraApi).forEach(function(funcName) {
  MessagePlugin[funcName] = extraApi[funcName];
});
export {
  MessagePlugin as M,
  infoCircleFilled as i
};
