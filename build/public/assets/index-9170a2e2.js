import { c as checkCircleFilled, e as errorCircleFilled, l as lookup, T as Tag } from "./index-574429c8.js";
import { d as defineComponent, c as computed, u as useSizeProps, r as renderFn, _ as _defineProperty, a as usePrefixClass, b as useGlobalIcon, e as close, f as createVNode, g as _defineProperty$1, h as useTNodeJSX, i as isString_1, j as getBackgroundColor, k as isObject_1, w as withInstall, l as _export_sfc, m as ref, o as onMounted, n as openBlock, p as createElementBlock, q as withCtx, F as Fragment, L as Loading, R as Row, s as createTextVNode, t as toDisplayString, v as createBaseVNode, C as Col, x as Card, S as Space, P as Popup, y as pushScopeId, z as popScopeId } from "./index-34939a40.js";
import { c as closeCircleFilled } from "./close-circle-filled-ce58c6f2.js";
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
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
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
      "d": "M6.43 9.92l6.23-6.22.92.92-7.15 7.14L1.97 7.3l.92-.92 3.54 3.54z",
      "fillOpacity": 0.9
    }
  }]
};
var check = defineComponent({
  name: "CheckIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-check", className.value]);
    var finalStyle = computed(() => _objectSpread$1(_objectSpread$1({}, style.value), attrs.style));
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
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
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
      "d": "M8.5 2h-1v9h1V2zm.1 10.8H7.4V14h1.2v-1.2z",
      "fillOpacity": 0.9
    }
  }]
};
var error = defineComponent({
  name: "ErrorIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-error", className.value]);
    var finalStyle = computed(() => _objectSpread(_objectSpread({}, style.value), attrs.style));
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
var PRO_THEME = {
  LINE: "line",
  PLUMP: "plump",
  CIRCLE: "circle"
};
var CIRCLE_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
var CIRCLE_SIZE_PX = {
  SMALL: 72,
  MEDIUM: 112,
  LARGE: 160
};
var CIRCLE_FONT_SIZE_RATIO = {
  SMALL: 14 / CIRCLE_SIZE_PX.SMALL,
  MEDIUM: 20 / CIRCLE_SIZE_PX.MEDIUM,
  LARGE: 36 / CIRCLE_SIZE_PX.LARGE
};
var STATUS_ICON = ["success", "error", "warning"];
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var props = {
  color: {
    type: [String, Object, Array],
    "default": ""
  },
  label: {
    type: [String, Boolean, Function],
    "default": true
  },
  percentage: {
    type: Number,
    "default": 0
  },
  size: {
    type: [String, Number],
    "default": "medium"
  },
  status: {
    type: String,
    validator: function validator(val) {
      return ["success", "error", "warning", "active"].includes(val);
    }
  },
  strokeWidth: {
    type: [String, Number]
  },
  theme: {
    type: String,
    "default": "line",
    validator: function validator2(val) {
      return ["line", "plump", "circle"].includes(val);
    }
  },
  trackColor: {
    type: String,
    "default": ""
  }
};
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var _Progress = defineComponent({
  name: "TProgress",
  props,
  setup: function setup(props2) {
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("progress");
    var _useGlobalIcon = useGlobalIcon({
      CloseCircleFilledIcon: closeCircleFilled,
      CheckCircleFilledIcon: checkCircleFilled,
      ErrorCircleFilledIcon: errorCircleFilled,
      CloseIcon: close,
      CheckIcon: check,
      ErrorIcon: error
    }), CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon, CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon, ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon, CloseIcon$1 = _useGlobalIcon.CloseIcon, CheckIcon$1 = _useGlobalIcon.CheckIcon, ErrorIcon$1 = _useGlobalIcon.ErrorIcon;
    var statusStyle = computed(function() {
      if (props2.percentage >= 100) {
        return "success";
      }
      return props2.status || "default";
    });
    var trackBgStyle = computed(function() {
      var style = {};
      if (props2.strokeWidth) {
        var height = isString_1(props2.strokeWidth) ? props2.strokeWidth : "".concat(props2.strokeWidth, "px");
        style.height = height;
        style.borderRadius = height;
      }
      if (props2.trackColor) {
        style.backgroundColor = props2.trackColor;
      }
      return style;
    });
    var barStyle = computed(function() {
      return {
        width: "".concat(props2.percentage, "%"),
        background: props2.color && getBackgroundColor(props2.color)
      };
    });
    var circlePathStyle = computed(function() {
      var strokeColor = isObject_1(props2.color) ? "" : props2.color;
      return {
        stroke: strokeColor
      };
    });
    var circleOuterStyle = computed(function() {
      var strokeColor = isObject_1(props2.trackColor) ? "" : props2.trackColor;
      return {
        stroke: strokeColor
      };
    });
    var diameter = computed(function() {
      var diameter2 = CIRCLE_SIZE_PX.MEDIUM;
      if (!props2.size) {
        return diameter2;
      }
      var SMALL = CIRCLE_SIZE.SMALL, LARGE = CIRCLE_SIZE.LARGE, MEDIUM = CIRCLE_SIZE.MEDIUM;
      switch (props2.size) {
        case SMALL:
          diameter2 = CIRCLE_SIZE_PX.SMALL;
          break;
        case MEDIUM:
          diameter2 = CIRCLE_SIZE_PX.MEDIUM;
          break;
        case LARGE:
          diameter2 = CIRCLE_SIZE_PX.LARGE;
          break;
        default:
          diameter2 = Number(props2.size);
          break;
      }
      return diameter2;
    });
    var rPoints = computed(function() {
      return diameter.value / 2;
    });
    var radius = computed(function() {
      return rPoints.value - circleStrokeWidth.value / 2;
    });
    var circleStyle = computed(function() {
      if (props2.theme !== PRO_THEME.CIRCLE) {
        return {};
      }
      var fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.MEDIUM;
      if (diameter.value <= CIRCLE_SIZE_PX.SMALL) {
        fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.SMALL;
      } else if (diameter.value >= CIRCLE_SIZE_PX.LARGE) {
        fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.LARGE;
      }
      return {
        width: "".concat(diameter.value, "px"),
        height: "".concat(diameter.value, "px"),
        fontSize: "".concat(fontSize, "px")
      };
    });
    var circleStrokeWidth = computed(function() {
      var defaultWidth = props2.size === CIRCLE_SIZE.SMALL ? 4 : 6;
      return props2.strokeWidth ? Number(props2.strokeWidth) : defaultWidth;
    });
    var strokeDashArr = computed(function() {
      var radius2 = (diameter.value - circleStrokeWidth.value) / 2;
      var perimeter = Math.PI * 2 * radius2;
      var percent = props2.percentage / 100;
      return "".concat(perimeter * percent, "  ").concat(perimeter * (1 - percent));
    });
    var getIconMap = function getIconMap2() {
      var CIRCLE_ICONS = {
        success: CheckIcon$1,
        warning: ErrorIcon$1,
        error: CloseIcon$1
      };
      var NORMAL_ICONS = {
        success: CheckCircleFilledIcon$1,
        warning: ErrorCircleFilledIcon$1,
        error: CloseCircleFilledIcon$1
      };
      return props2.theme === PRO_THEME.CIRCLE ? CIRCLE_ICONS : NORMAL_ICONS;
    };
    var getLabelContent = function getLabelContent2() {
      var labelContent = "".concat(props2.percentage, "%");
      var status = props2.status || "";
      if (STATUS_ICON.includes(status) && props2.theme !== PRO_THEME.PLUMP) {
        var components = getIconMap();
        var component = components[status];
        if (component) {
          labelContent = createVNode(component, {
            "class": ["".concat(COMPONENT_NAME.value, "__icon")]
          }, null);
        }
      }
      return labelContent;
    };
    return function() {
      var labelContent = createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__info")
      }, [renderTNodeJSX("label", getLabelContent())]);
      var PLUMP_SEPARATE = 10;
      var separateClasses = props2.percentage > PLUMP_SEPARATE ? "".concat(COMPONENT_NAME.value, "--over-ten") : "".concat(COMPONENT_NAME.value, "--under-ten");
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [props2.theme === PRO_THEME.LINE && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "--thin ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value)
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__bar"),
        "style": trackBgStyle.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "style": barStyle.value
      }, null)]), labelContent]), props2.theme === PRO_THEME.PLUMP && createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__bar ").concat(COMPONENT_NAME.value, "--plump ").concat(separateClasses), _defineProperty$1({}, "".concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value), statusStyle.value)],
        "style": trackBgStyle.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "style": barStyle.value
      }, [props2.percentage > PLUMP_SEPARATE && labelContent]), props2.percentage <= PLUMP_SEPARATE && labelContent]), props2.theme === PRO_THEME.CIRCLE && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "--circle ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value),
        "style": circleStyle.value
      }, [labelContent, createVNode("svg", {
        "width": diameter.value,
        "height": diameter.value,
        "viewBox": "0 0 ".concat(diameter.value, " ").concat(diameter.value)
      }, [createVNode("circle", {
        "cx": rPoints.value,
        "cy": rPoints.value,
        "r": radius.value,
        "stroke-width": circleStrokeWidth.value,
        "fill": "none",
        "class": ["".concat(COMPONENT_NAME.value, "__circle-outer")],
        "style": circleOuterStyle.value
      }, null), props2.percentage > 0 && createVNode("circle", {
        "cx": rPoints.value,
        "cy": rPoints.value,
        "r": radius.value,
        "stroke-width": circleStrokeWidth.value,
        "fill": "none",
        "stroke-linecap": "round",
        "class": ["".concat(COMPONENT_NAME.value, "__circle-inner")],
        "transform": "matrix(0,-1,1,0,0,".concat(diameter.value, ")"),
        "stroke-dasharray": strokeDashArr.value,
        "style": circlePathStyle.value
      }, null)])])]);
    };
  }
});
const index$1 = "";
/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */
var Progress = withInstall(_Progress);
const index_vue_vue_type_style_index_0_scoped_87444ba7_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-87444ba7"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "overview-text" }, "主机", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "overview-count" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "1")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "overview-text" }, "日志", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "overview-count" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "1")
], -1));
const _hoisted_5 = { class: "systemstate" };
const _hoisted_6 = { class: "systemstate" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_8 = { class: "systemstate" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_11 = { class: "systemstate" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_14 = { class: "systeminfo" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "systeminfo-name" }, "主机IP", -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "systeminfo-name" }, "主机名称", -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "systeminfo-name" }, "操作系统", -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "systeminfo-name" }, "发行版本", -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "systeminfo-name" }, "内核版本", -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "systeminfo-name" }, "系统类型", -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "systeminfo-name" }, "运行时间", -1));
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const socket = lookup("ws://127.0.0.1:3000", {
      transports: ["websocket"],
      withCredentials: false
    });
    const SystemInfo = ref({
      ip: "127.0.0.1",
      hostname: "Loading",
      platform: "Loading",
      release: "Loading",
      kernel: "Loading",
      arch: "Loading",
      runningTime: "Loading"
    });
    const SystemState = ref({
      disk: {
        totalSize: "Loading",
        usedSize: "Loading",
        usedPercentage: 0
      },
      master: {
        cpu: {
          cpuUsagePercent: 0,
          cpuBrand: "Loading",
          avgLoad: {
            main: 0,
            one: 0,
            five: 0,
            fifth: 0
          },
          currentLoad: 0,
          count: {
            Main: 0,
            Idle: 0,
            Physical: 0
          }
        },
        memory: {
          memUsagePercent: 0,
          totalMemMB: "Loading",
          usedMemMB: "Loading"
        }
      }
    });
    const loading = ref(true);
    let systemInternal;
    onMounted(() => {
      socket.on("connect", () => {
        systemInternal = setInterval(() => {
          socket.emit("get");
        }, 3e3);
        socket.on("get", (msg) => {
          const data = JSON.parse(msg);
          SystemInfo.value = data.systeminfo;
          SystemState.value = data.systemstate;
          socket.send("getSystemInfo");
          socket.send("getSystemState");
          loading.value = false;
        });
      });
      socket.on("disconnect", () => {
        clearInterval(systemInternal);
        console.log("Disconnect");
      });
    });
    return (_ctx, _cache) => {
      const _component_t_loading = Loading;
      const _component_t_col = Col;
      const _component_t_row = Row;
      const _component_t_card = Card;
      const _component_t_progress = Progress;
      const _component_t_tag = Tag;
      const _component_t_space = Space;
      const _component_t_popup = Popup;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_t_loading, {
          loading: loading.value,
          fullscreen: ""
        }, null, 8, ["loading"]),
        createVNode(_component_t_row, { gutter: [{ xs: 4, sm: 8, md: 12, lg: 16, xl: 16, xxl: 20 }, {
          xs: 16,
          sm: 16,
          md: 16,
          lg: 16,
          xl: 16,
          xxl: 20
        }] }, {
          default: withCtx(() => [
            createVNode(_component_t_col, {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 12,
              xl: 12
            }, {
              default: withCtx(() => [
                createVNode(_component_t_card, {
                  title: "- 概览",
                  bordered: false
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_row, { justify: "space-around" }, {
                      default: withCtx(() => [
                        createVNode(_component_t_col, null, {
                          default: withCtx(() => [
                            _hoisted_1,
                            _hoisted_2
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_col, null, {
                          default: withCtx(() => [
                            _hoisted_3,
                            _hoisted_4
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_t_card, {
                  title: "- 系统状态",
                  style: { "margin-top": "10px" },
                  bordered: false
                }, {
                  default: withCtx(() => [
                    createVNode(_component_t_row, {
                      justify: "space-around",
                      gutter: [{ xs: 4, sm: 8, md: 12, lg: 16, xl: 16, xxl: 20 }, {
                        xs: 16,
                        sm: 16,
                        md: 16,
                        lg: 16,
                        xl: 16,
                        xxl: 20
                      }]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_t_col, { class: "systemstate-col" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_popup, {
                              placement: "bottom",
                              "show-arrow": "",
                              "destroy-on-close": ""
                            }, {
                              content: withCtx(() => [
                                createVNode(_component_t_space, {
                                  direction: "vertical",
                                  align: "center",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_t_tag, {
                                      theme: "primary",
                                      variant: "light"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("最近 1 分钟平均负载: " + toDisplayString(SystemState.value.master.cpu.avgLoad.one), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_t_tag, {
                                      theme: "primary",
                                      variant: "light"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("最近 5 分钟平均负载: " + toDisplayString(SystemState.value.master.cpu.avgLoad.five), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_t_tag, {
                                      theme: "primary",
                                      variant: "light"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("最近 15 分钟平均负载: " + toDisplayString(SystemState.value.master.cpu.avgLoad.fifth), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_t_progress, {
                                  theme: "circle",
                                  percentage: SystemState.value.master.cpu.avgLoad.main
                                }, null, 8, ["percentage"]),
                                createBaseVNode("div", _hoisted_5, toDisplayString(SystemState.value.master.cpu.avgLoad.main < 75 ? "运行流畅" : "运行负载"), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_col, { class: "systemstate-col" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_popup, {
                              placement: "bottom",
                              "show-arrow": "",
                              "destroy-on-close": ""
                            }, {
                              content: withCtx(() => [
                                createVNode(_component_t_space, {
                                  direction: "vertical",
                                  align: "center",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_t_tag, {
                                      theme: "primary",
                                      variant: "light"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(SystemState.value.master.cpu.cpuBrand), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_t_tag, {
                                      theme: "primary",
                                      variant: "light"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("物理核心 *" + toDisplayString(SystemState.value.master.cpu.count.Physical) + " 逻辑核心 *" + toDisplayString(SystemState.value.master.cpu.count.Idle), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_t_progress, {
                                  theme: "circle",
                                  percentage: SystemState.value.master.cpu.cpuUsagePercent
                                }, null, 8, ["percentage"]),
                                createBaseVNode("div", _hoisted_6, [
                                  createTextVNode("CPU"),
                                  _hoisted_7,
                                  createTextVNode(toDisplayString(SystemState.value.master.cpu.count.Main) + " 核心", 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_col, { class: "systemstate-col" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_progress, {
                              theme: "circle",
                              percentage: SystemState.value.master.memory.memUsagePercent
                            }, null, 8, ["percentage"]),
                            createBaseVNode("div", _hoisted_8, [
                              createTextVNode("内存"),
                              _hoisted_9,
                              createTextVNode(toDisplayString(SystemState.value.master.memory.usedMemMB) + " / " + toDisplayString(SystemState.value.master.memory.totalMemMB), 1),
                              _hoisted_10,
                              createTextVNode("MB")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_t_col, { class: "systemstate-col" }, {
                          default: withCtx(() => [
                            createVNode(_component_t_progress, {
                              theme: "circle",
                              percentage: SystemState.value.disk.usedPercentage
                            }, null, 8, ["percentage"]),
                            createBaseVNode("div", _hoisted_11, [
                              createTextVNode("/"),
                              _hoisted_12,
                              createTextVNode(toDisplayString(SystemState.value.disk.usedSize) + " / " + toDisplayString(SystemState.value.disk.totalSize), 1),
                              _hoisted_13,
                              createTextVNode("GB")
                            ])
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
            createVNode(_component_t_col, {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 12,
              xl: 12
            }, {
              default: withCtx(() => [
                createVNode(_component_t_card, {
                  title: "- 系统信息",
                  bordered: false
                }, {
                  default: withCtx(() => [
                    createBaseVNode("ul", _hoisted_14, [
                      createBaseVNode("li", null, [
                        _hoisted_15,
                        createVNode(_component_t_tag, {
                          theme: "primary",
                          variant: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(SystemInfo.value.ip), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("li", null, [
                        _hoisted_16,
                        createVNode(_component_t_tag, {
                          theme: "primary",
                          variant: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(SystemInfo.value.hostname), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("li", null, [
                        _hoisted_17,
                        createVNode(_component_t_tag, {
                          theme: "primary",
                          variant: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(SystemInfo.value.platform), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("li", null, [
                        _hoisted_18,
                        createVNode(_component_t_tag, {
                          theme: "primary",
                          variant: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(SystemInfo.value.kernel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("li", null, [
                        _hoisted_19,
                        createVNode(_component_t_tag, {
                          theme: "primary",
                          variant: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(SystemInfo.value.release), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("li", null, [
                        _hoisted_20,
                        createVNode(_component_t_tag, {
                          theme: "primary",
                          variant: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(SystemInfo.value.arch), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("li", null, [
                        _hoisted_21,
                        createVNode(_component_t_tag, {
                          theme: "primary",
                          variant: "light"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(SystemInfo.value.runningTime), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87444ba7"]]);
export {
  index as default
};
