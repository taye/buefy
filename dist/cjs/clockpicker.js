'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var TimepickerMixin = require('./TimepickerMixin-78a9766f.js');
var config = require('./config-1bc87110.js');
var DropdownItem = require('./DropdownItem-b1e82b61.js');
var Input = require('./Input-045e0369.js');
var Field = require('./Field-3b6d1df1.js');
var Icon = require('./Icon-59750035.js');
var vue = require('vue');
var plugins = require('./plugins-c99a13c9.js');
require('./FormElementMixin-d260225f.js');
require('./helpers.js');
require('./trapFocus-050ad8e5.js');
require('./InjectedChildMixin-28e1211a.js');

// These should match the variables in clockpicker.scss
var indicatorSize = 40;
var paddingInner = 5;
var script$1 = {
  name: 'BClockpickerFace',
  props: {
    pickerSize: Number,
    min: Number,
    max: Number,
    double: Boolean,
    value: Number,
    faceNumbers: Array,
    disabledValues: Function
  },
  data: function data() {
    return {
      isDragging: false,
      inputValue: this.value,
      prevAngle: 720
    };
  },
  computed: {
    /**
    * How many number indicators are shown on the face
    */
    count: function count() {
      return this.max - this.min + 1;
    },

    /**
    * How many number indicators are shown per ring on the face
    */
    countPerRing: function countPerRing() {
      return this.double ? this.count / 2 : this.count;
    },

    /**
    * Radius of the clock face
    */
    radius: function radius() {
      return this.pickerSize / 2;
    },

    /**
    * Radius of the outer ring of number indicators
    */
    outerRadius: function outerRadius() {
      return this.radius - paddingInner - indicatorSize / 2;
    },

    /**
    * Radius of the inner ring of number indicators
    */
    innerRadius: function innerRadius() {
      return Math.max(this.outerRadius * 0.6, this.outerRadius - paddingInner - indicatorSize); // 48px gives enough room for the outer ring of numbers
    },

    /**
    * The angle for each selectable value
    * For hours this ends up being 30 degrees, for minutes 6 degrees
    */
    degreesPerUnit: function degreesPerUnit() {
      return 360 / this.countPerRing;
    },

    /**
    * Used for calculating x/y grid location based on degrees
    */
    degrees: function degrees() {
      return this.degreesPerUnit * Math.PI / 180;
    },

    /**
    * Calculates the angle the clock hand should be rotated for the
    * selected value
    */
    handRotateAngle: function handRotateAngle() {
      var currentAngle = this.prevAngle;

      while (currentAngle < 0) {
        currentAngle += 360;
      }

      var targetAngle = this.calcHandAngle(this.displayedValue);
      var degreesDiff = this.shortestDistanceDegrees(currentAngle, targetAngle);
      var angle = this.prevAngle + degreesDiff;
      return angle;
    },

    /**
    * Determines how long the selector hand is based on if the
    * selected value is located along the outer or inner ring
    */
    handScale: function handScale() {
      return this.calcHandScale(this.displayedValue);
    },
    handStyle: function handStyle() {
      return {
        transform: "rotate(".concat(this.handRotateAngle, "deg) scaleY(").concat(this.handScale, ")"),
        transition: '.3s cubic-bezier(.25,.8,.50,1)'
      };
    },

    /**
    * The value the hand should be pointing at
    */
    displayedValue: function displayedValue() {
      return this.inputValue == null ? this.min : this.inputValue;
    }
  },
  watch: {
    value: function value(_value) {
      if (_value !== this.inputValue) {
        this.prevAngle = this.handRotateAngle;
      }

      this.inputValue = _value;
    }
  },
  methods: {
    isDisabled: function isDisabled(value) {
      return this.disabledValues && this.disabledValues(value);
    },

    /**
    * Calculates the distance between two points
    */
    euclidean: function euclidean(p0, p1) {
      var dx = p1.x - p0.x;
      var dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    },
    shortestDistanceDegrees: function shortestDistanceDegrees(start, stop) {
      var modDiff = (stop - start) % 360;
      var shortestDistance = 180 - Math.abs(Math.abs(modDiff) - 180);
      return (modDiff + 360) % 360 < 180 ? shortestDistance * 1 : shortestDistance * -1;
    },

    /**
    * Calculates the angle of the line from the center point
    * to the given point.
    */
    coordToAngle: function coordToAngle(center, p1) {
      var value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    },

    /**
    * Generates the inline style translate() property for a
    * number indicator, which determines it's location on the
    * clock face
    */
    getNumberTranslate: function getNumberTranslate(value) {
      var _this$getNumberCoords = this.getNumberCoords(value),
          x = _this$getNumberCoords.x,
          y = _this$getNumberCoords.y;

      return "translate(".concat(x, "px, ").concat(y, "px)");
    },

    /***
    * Calculates the coordinates on the clock face for a number
    * indicator value
    */
    getNumberCoords: function getNumberCoords(value) {
      var radius = this.isInnerRing(value) ? this.innerRadius : this.outerRadius;
      return {
        x: Math.round(radius * Math.sin((value - this.min) * this.degrees)),
        y: Math.round(-radius * Math.cos((value - this.min) * this.degrees))
      };
    },
    getFaceNumberClasses: function getFaceNumberClasses(num) {
      return {
        'active': num.value === this.displayedValue,
        'disabled': this.isDisabled(num.value)
      };
    },

    /**
    * Determines if a value resides on the inner ring
    */
    isInnerRing: function isInnerRing(value) {
      return this.double && value - this.min >= this.countPerRing;
    },
    calcHandAngle: function calcHandAngle(value) {
      var angle = this.degreesPerUnit * (value - this.min);
      if (this.isInnerRing(value)) angle -= 360;
      return angle;
    },
    calcHandScale: function calcHandScale(value) {
      return this.isInnerRing(value) ? this.innerRadius / this.outerRadius : 1;
    },
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      this.isDragging = true;
      this.onDragMove(e);
    },
    onMouseUp: function onMouseUp() {
      this.isDragging = false;

      if (!this.isDisabled(this.inputValue)) {
        this.$emit('change', this.inputValue);
      }
    },
    onDragMove: function onDragMove(e) {
      e.preventDefault();
      if (!this.isDragging && e.type !== 'click') return;

      var _this$$refs$clock$get = this.$refs.clock.getBoundingClientRect(),
          width = _this$$refs$clock$get.width,
          top = _this$$refs$clock$get.top,
          left = _this$$refs$clock$get.left;

      var _ref = 'touches' in e ? e.touches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var center = {
        x: width / 2,
        y: -width / 2
      };
      var coords = {
        x: clientX - left,
        y: top - clientY
      };
      var handAngle = Math.round(this.coordToAngle(center, coords) + 360) % 360;
      var insideClick = this.double && this.euclidean(center, coords) < (this.outerRadius + this.innerRadius) / 2 - 16;
      var value = Math.round(handAngle / this.degreesPerUnit) + this.min + (insideClick ? this.countPerRing : 0); // Necessary to fix edge case when selecting left part of max value

      if (handAngle >= 360 - this.degreesPerUnit / 2) {
        value = insideClick ? this.max : this.min;
      }

      this.update(value);
    },
    update: function update(value) {
      if (this.inputValue !== value && !this.isDisabled(value)) {
        this.prevAngle = this.handRotateAngle;
        this.inputValue = value;
        this.$emit('input', value);
      }
    }
  }
};

const _hoisted_1$1 = {
  class: "b-clockpicker-face-outer-ring",
  ref: "clock"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", {
    class: "b-clockpicker-face",
    onMousedown: _cache[1] || (_cache[1] = (...args) => ($options.onMouseDown && $options.onMouseDown(...args))),
    onMouseup: _cache[2] || (_cache[2] = (...args) => ($options.onMouseUp && $options.onMouseUp(...args))),
    onMousemove: _cache[3] || (_cache[3] = (...args) => ($options.onDragMove && $options.onDragMove(...args))),
    onTouchstart: _cache[4] || (_cache[4] = (...args) => ($options.onMouseDown && $options.onMouseDown(...args))),
    onTouchend: _cache[5] || (_cache[5] = (...args) => ($options.onMouseUp && $options.onMouseUp(...args))),
    onTouchmove: _cache[6] || (_cache[6] = (...args) => ($options.onDragMove && $options.onDragMove(...args)))
  }, [
    vue.createVNode("div", _hoisted_1$1, [
      vue.createVNode("div", {
        class: "b-clockpicker-face-hand",
        style: $options.handStyle
      }, null, 4 /* STYLE */),
      (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.faceNumbers, (num, index) => {
        return (vue.openBlock(), vue.createBlock("span", {
          key: index,
          class: ["b-clockpicker-face-number", $options.getFaceNumberClasses(num)],
          style: { transform: $options.getNumberTranslate(num.value) }
        }, [
          vue.createVNode("span", null, vue.toDisplayString(num.label), 1 /* TEXT */)
        ], 6 /* CLASS, STYLE */))
      }), 128 /* KEYED_FRAGMENT */))
    ], 512 /* NEED_PATCH */)
  ], 32 /* HYDRATE_EVENTS */))
}

script$1.render = render$1;
script$1.__file = "src/components/clockpicker/ClockpickerFace.vue";

var _components;
var outerPadding = 12;
var script = {
  name: 'BClockpicker',
  components: (_components = {}, _rollupPluginBabelHelpers._defineProperty(_components, script$1.name, script$1), _rollupPluginBabelHelpers._defineProperty(_components, Input.script.name, Input.script), _rollupPluginBabelHelpers._defineProperty(_components, Field.script.name, Field.script), _rollupPluginBabelHelpers._defineProperty(_components, Icon.script.name, Icon.script), _rollupPluginBabelHelpers._defineProperty(_components, DropdownItem.script.name, DropdownItem.script), _rollupPluginBabelHelpers._defineProperty(_components, DropdownItem.script$1.name, DropdownItem.script$1), _components),
  mixins: [TimepickerMixin.TimepickerMixin],
  props: {
    pickerSize: {
      type: Number,
      default: 290
    },
    incrementMinutes: {
      type: Number,
      default: 5
    },
    autoSwitch: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'is-primary'
    },
    hoursLabel: {
      type: String,
      default: function _default() {
        return config.config.defaultClockpickerHoursLabel || 'Hours';
      }
    },
    minutesLabel: {
      type: String,
      default: function _default() {
        return config.config.defaultClockpickerMinutesLabel || 'Min';
      }
    }
  },
  data: function data() {
    return {
      isSelectingHour: true,
      isDragging: false,
      _isClockpicker: true
    };
  },
  computed: {
    hoursDisplay: function hoursDisplay() {
      if (this.hoursSelected == null) return '--';
      if (this.isHourFormat24) return this.pad(this.hoursSelected);
      var display = this.hoursSelected;

      if (this.meridienSelected === this.pmString || this.meridienSelected === this.PM) {
        display -= 12;
      }

      if (display === 0) display = 12;
      return display;
    },
    minutesDisplay: function minutesDisplay() {
      return this.minutesSelected == null ? '--' : this.pad(this.minutesSelected);
    },
    minFaceValue: function minFaceValue() {
      return this.isSelectingHour && !this.isHourFormat24 && (this.meridienSelected === this.pmString || this.meridienSelected === this.PM) ? 12 : 0;
    },
    maxFaceValue: function maxFaceValue() {
      return this.isSelectingHour ? !this.isHourFormat24 && (this.meridienSelected === this.amString || this.meridienSelected === this.AM) ? 11 : 23 : 59;
    },
    faceSize: function faceSize() {
      return this.pickerSize - outerPadding * 2;
    },
    faceDisabledValues: function faceDisabledValues() {
      return this.isSelectingHour ? this.isHourDisabled : this.isMinuteDisabled;
    }
  },
  methods: {
    onClockInput: function onClockInput(value) {
      if (this.isSelectingHour) {
        this.hoursSelected = value;
        this.onHoursChange(value);
      } else {
        this.minutesSelected = value;
        this.onMinutesChange(value);
      }
    },
    onClockChange: function onClockChange(value) {
      if (this.autoSwitch && this.isSelectingHour) {
        this.isSelectingHour = !this.isSelectingHour;
      }
    },
    onMeridienClick: function onMeridienClick(value) {
      if (this.meridienSelected !== value) {
        this.meridienSelected = value;
        this.onMeridienChange(value);
      }
    }
  }
};

const _hoisted_1 = {
  key: 0,
  class: "card-header"
};
const _hoisted_2 = { class: "b-clockpicker-header card-header-title" };
const _hoisted_3 = { class: "b-clockpicker-time" };
const _hoisted_4 = {
  key: 0,
  class: "b-clockpicker-period"
};
const _hoisted_5 = { class: "card-content" };
const _hoisted_6 = {
  key: 0,
  class: "b-clockpicker-time"
};
const _hoisted_7 = {
  key: 1,
  class: "b-clockpicker-period"
};
const _hoisted_8 = {
  key: 1,
  class: "b-clockpicker-footer card-footer"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = vue.resolveComponent("b-input");
  const _component_b_clockpicker_face = vue.resolveComponent("b-clockpicker-face");
  const _component_b_dropdown = vue.resolveComponent("b-dropdown");

  return (vue.openBlock(), vue.createBlock("div", {
    class: ["b-clockpicker control", [_ctx.size, $props.type, {'is-expanded': _ctx.expanded}]]
  }, [
    (!_ctx.isMobile || _ctx.inline)
      ? (vue.openBlock(), vue.createBlock(_component_b_dropdown, {
          key: 0,
          ref: "dropdown",
          position: _ctx.position,
          disabled: _ctx.disabled,
          inline: _ctx.inline,
          "append-to-body": _ctx.appendToBody,
          "append-to-body-copy-parent": "",
          onActiveChange: _ctx.onActiveChange
        }, vue.createSlots({
          default: vue.withCtx(() => [
            vue.createVNode("div", {
              class: "card",
              disabled: _ctx.disabled ? '' : null,
              custom: ""
            }, [
              (_ctx.inline)
                ? (vue.openBlock(), vue.createBlock("header", _hoisted_1, [
                    vue.createVNode("div", _hoisted_2, [
                      vue.createVNode("div", _hoisted_3, [
                        vue.createVNode("span", {
                          class: ["b-clockpicker-btn", { active: $data.isSelectingHour }],
                          onClick: _cache[5] || (_cache[5] = $event => ($data.isSelectingHour = true))
                        }, vue.toDisplayString($options.hoursDisplay), 3 /* TEXT, CLASS */),
                        vue.createVNode("span", null, vue.toDisplayString(_ctx.hourLiteral), 1 /* TEXT */),
                        vue.createVNode("span", {
                          class: ["b-clockpicker-btn", { active: !$data.isSelectingHour }],
                          onClick: _cache[6] || (_cache[6] = $event => ($data.isSelectingHour = false))
                        }, vue.toDisplayString($options.minutesDisplay), 3 /* TEXT, CLASS */)
                      ]),
                      (!_ctx.isHourFormat24)
                        ? (vue.openBlock(), vue.createBlock("div", _hoisted_4, [
                            vue.createVNode("div", {
                              class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.amString || _ctx.meridienSelected === _ctx.AM
                                }],
                              onClick: _cache[7] || (_cache[7] = $event => ($options.onMeridienClick(_ctx.amString)))
                            }, vue.toDisplayString(_ctx.amString), 3 /* TEXT, CLASS */),
                            vue.createVNode("div", {
                              class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.pmString || _ctx.meridienSelected === _ctx.PM
                                }],
                              onClick: _cache[8] || (_cache[8] = $event => ($options.onMeridienClick(_ctx.pmString)))
                            }, vue.toDisplayString(_ctx.pmString), 3 /* TEXT, CLASS */)
                          ]))
                        : vue.createCommentVNode("v-if", true)
                    ])
                  ]))
                : vue.createCommentVNode("v-if", true),
              vue.createVNode("div", _hoisted_5, [
                vue.createVNode("div", {
                  class: "b-clockpicker-body",
                  style: { width: $options.faceSize + 'px', height: $options.faceSize + 'px' }
                }, [
                  (!_ctx.inline)
                    ? (vue.openBlock(), vue.createBlock("div", _hoisted_6, [
                        vue.createVNode("div", {
                          class: ["b-clockpicker-btn", { active: $data.isSelectingHour }],
                          onClick: _cache[9] || (_cache[9] = $event => ($data.isSelectingHour = true))
                        }, vue.toDisplayString($props.hoursLabel), 3 /* TEXT, CLASS */),
                        vue.createVNode("span", {
                          class: ["b-clockpicker-btn", { active: !$data.isSelectingHour }],
                          onClick: _cache[10] || (_cache[10] = $event => ($data.isSelectingHour = false))
                        }, vue.toDisplayString($props.minutesLabel), 3 /* TEXT, CLASS */)
                      ]))
                    : vue.createCommentVNode("v-if", true),
                  (!_ctx.isHourFormat24 && !_ctx.inline)
                    ? (vue.openBlock(), vue.createBlock("div", _hoisted_7, [
                        vue.createVNode("div", {
                          class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.amString || _ctx.meridienSelected === _ctx.AM
                                }],
                          onClick: _cache[11] || (_cache[11] = $event => ($options.onMeridienClick(_ctx.amString)))
                        }, vue.toDisplayString(_ctx.amString), 3 /* TEXT, CLASS */),
                        vue.createVNode("div", {
                          class: ["b-clockpicker-btn", {
                                    active: _ctx.meridienSelected === _ctx.pmString || _ctx.meridienSelected === _ctx.PM
                                }],
                          onClick: _cache[12] || (_cache[12] = $event => ($options.onMeridienClick(_ctx.pmString)))
                        }, vue.toDisplayString(_ctx.pmString), 3 /* TEXT, CLASS */)
                      ]))
                    : vue.createCommentVNode("v-if", true),
                  vue.createVNode(_component_b_clockpicker_face, {
                    "picker-size": $options.faceSize,
                    min: $options.minFaceValue,
                    max: $options.maxFaceValue,
                    "face-numbers": $data.isSelectingHour ? _ctx.hours : _ctx.minutes,
                    "disabled-values": $options.faceDisabledValues,
                    double: $data.isSelectingHour && _ctx.isHourFormat24,
                    value: $data.isSelectingHour ? _ctx.hoursSelected : _ctx.minutesSelected,
                    onInput: $options.onClockInput,
                    onChange: $options.onClockChange
                  }, null, 8 /* PROPS */, ["picker-size", "min", "max", "face-numbers", "disabled-values", "double", "value", "onInput", "onChange"])
                ], 4 /* STYLE */)
              ]),
              (_ctx.$slots.default !== undefined && _ctx.$slots.default.length)
                ? (vue.openBlock(), vue.createBlock("footer", _hoisted_8, [
                    vue.renderSlot(_ctx.$slots, "default")
                  ]))
                : vue.createCommentVNode("v-if", true)
            ], 8 /* PROPS */, ["disabled"])
          ]),
          _: 2 /* DYNAMIC */
        }, [
          (!_ctx.inline)
            ? {
                name: "trigger",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
                    vue.createVNode(_component_b_input, vue.mergeProps({
                      ref: "input",
                      slot: "trigger",
                      autocomplete: "off",
                      value: _ctx.formatValue(_ctx.computedValue),
                      placeholder: _ctx.placeholder,
                      size: _ctx.size,
                      icon: _ctx.icon,
                      "icon-pack": _ctx.iconPack,
                      loading: _ctx.loading,
                      disabled: _ctx.disabled,
                      readonly: !_ctx.editable,
                      rounded: _ctx.rounded
                    }, _ctx.$attrs, {
                      "use-html5-validation": _ctx.useHtml5Validation,
                      onClick: _cache[1] || (_cache[1] = vue.withModifiers($event => (_ctx.toggle(true)), ["stop"])),
                      onKeyup: _cache[2] || (_cache[2] = vue.withKeys($event => (_ctx.toggle(true)), ["native","enter"])),
                      onChange: _cache[3] || (_cache[3] = $event => (_ctx.onChange($event.target.value))),
                      onFocus: _ctx.handleOnFocus,
                      onBlur: _cache[4] || (_cache[4] = $event => (_ctx.checkHtml5Validity()))
                    }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "disabled", "readonly", "rounded", "use-html5-validation", "onFocus"])
                  ])
                ])
              }
            : undefined
        ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["position", "disabled", "inline", "append-to-body", "onActiveChange"]))
      : (vue.openBlock(), vue.createBlock(_component_b_input, vue.mergeProps({
          key: 1,
          ref: "input",
          type: "time",
          autocomplete: "off",
          value: _ctx.formatHHMMSS(_ctx.computedValue),
          placeholder: _ctx.placeholder,
          size: _ctx.size,
          icon: _ctx.icon,
          "icon-pack": _ctx.iconPack,
          loading: _ctx.loading,
          max: _ctx.formatHHMMSS(_ctx.maxTime),
          min: _ctx.formatHHMMSS(_ctx.minTime),
          disabled: _ctx.disabled,
          readonly: false
        }, _ctx.$attrs, {
          "use-html5-validation": _ctx.useHtml5Validation,
          onClick: _cache[13] || (_cache[13] = vue.withModifiers($event => (_ctx.toggle(true)), ["stop"])),
          onKeyup: _cache[14] || (_cache[14] = vue.withKeys($event => (_ctx.toggle(true)), ["native","enter"])),
          onChange: _ctx.onChangeNativePicker,
          onFocus: _ctx.handleOnFocus,
          onBlur: _cache[15] || (_cache[15] = $event => (_ctx.onBlur() && _ctx.checkHtml5Validity()))
        }), null, 16 /* FULL_PROPS */, ["value", "placeholder", "size", "icon", "icon-pack", "loading", "max", "min", "disabled", "use-html5-validation", "onChange", "onFocus"]))
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/clockpicker/Clockpicker.vue";

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, script);
  }
};
plugins.use(Plugin);

exports.BClockpicker = script;
exports.default = Plugin;
