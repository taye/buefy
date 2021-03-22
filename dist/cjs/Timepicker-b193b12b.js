'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var TimepickerMixin = require('./TimepickerMixin-78a9766f.js');
var DropdownItem = require('./DropdownItem-b1e82b61.js');
var Input = require('./Input-045e0369.js');
var Field = require('./Field-3b6d1df1.js');
var Select = require('./Select-00390185.js');
var Icon = require('./Icon-59750035.js');
var vue = require('vue');

var _components;
var script = {
  name: 'BTimepicker',
  components: (_components = {}, _rollupPluginBabelHelpers._defineProperty(_components, Input.script.name, Input.script), _rollupPluginBabelHelpers._defineProperty(_components, Field.script.name, Field.script), _rollupPluginBabelHelpers._defineProperty(_components, Select.script.name, Select.script), _rollupPluginBabelHelpers._defineProperty(_components, Icon.script.name, Icon.script), _rollupPluginBabelHelpers._defineProperty(_components, DropdownItem.script.name, DropdownItem.script), _rollupPluginBabelHelpers._defineProperty(_components, DropdownItem.script$1.name, DropdownItem.script$1), _components),
  mixins: [TimepickerMixin.TimepickerMixin],
  inheritAttrs: false,
  data: function data() {
    return {
      _isTimepicker: true
    };
  },
  computed: {
    nativeStep: function nativeStep() {
      if (this.enableSeconds) return '1';
    }
  }
};

const _hoisted_1 = { class: "control is-colon" };
const _hoisted_2 = { class: "control is-colon" };
const _hoisted_3 = { class: "control is-colon" };
const _hoisted_4 = {
  key: 0,
  class: "timepicker-footer"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_input = vue.resolveComponent("b-input");
  const _component_b_select = vue.resolveComponent("b-select");
  const _component_b_field = vue.resolveComponent("b-field");
  const _component_b_dropdown_item = vue.resolveComponent("b-dropdown-item");
  const _component_b_dropdown = vue.resolveComponent("b-dropdown");

  return (vue.openBlock(), vue.createBlock("div", {
    class: ["timepicker control", [_ctx.size, {'is-expanded': _ctx.expanded}]]
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
            vue.createVNode(_component_b_dropdown_item, {
              disabled: _ctx.disabled,
              focusable: _ctx.focusable,
              custom: ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_b_field, {
                  grouped: "",
                  position: "is-centered"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_b_select, {
                      modelValue: _ctx.hoursSelected,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.hoursSelected = $event)),
                      onChange: _cache[4] || (_cache[4] = $event => (_ctx.onHoursChange($event.target.value))),
                      disabled: _ctx.disabled,
                      placeholder: "00"
                    }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.hours, (hour) => {
                          return (vue.openBlock(), vue.createBlock("option", {
                            value: hour.value,
                            key: hour.value,
                            disabled: _ctx.isHourDisabled(hour.value) ? '' : null
                          }, vue.toDisplayString(hour.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]),
                      _: 1 /* STABLE */
                    }, 8 /* PROPS */, ["modelValue", "disabled"]),
                    vue.createVNode("span", _hoisted_1, vue.toDisplayString(_ctx.hourLiteral), 1 /* TEXT */),
                    vue.createVNode(_component_b_select, {
                      modelValue: _ctx.minutesSelected,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (_ctx.minutesSelected = $event)),
                      onChange: _cache[6] || (_cache[6] = $event => (_ctx.onMinutesChange($event.target.value))),
                      disabled: _ctx.disabled,
                      placeholder: "00"
                    }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.minutes, (minute) => {
                          return (vue.openBlock(), vue.createBlock("option", {
                            value: minute.value,
                            key: minute.value,
                            disabled: _ctx.isMinuteDisabled(minute.value) ? '' : null
                          }, vue.toDisplayString(minute.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ]),
                      _: 1 /* STABLE */
                    }, 8 /* PROPS */, ["modelValue", "disabled"]),
                    (_ctx.enableSeconds)
                      ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                          vue.createVNode("span", _hoisted_2, vue.toDisplayString(_ctx.minuteLiteral), 1 /* TEXT */),
                          vue.createVNode(_component_b_select, {
                            modelValue: _ctx.secondsSelected,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (_ctx.secondsSelected = $event)),
                            onChange: _cache[8] || (_cache[8] = $event => (_ctx.onSecondsChange($event.target.value))),
                            disabled: _ctx.disabled,
                            placeholder: "00"
                          }, {
                            default: vue.withCtx(() => [
                              (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.seconds, (second) => {
                                return (vue.openBlock(), vue.createBlock("option", {
                                  value: second.value,
                                  key: second.value,
                                  disabled: _ctx.isSecondDisabled(second.value) ? '' : null
                                }, vue.toDisplayString(second.label), 9 /* TEXT, PROPS */, ["value", "disabled"]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["modelValue", "disabled"]),
                          vue.createVNode("span", _hoisted_3, vue.toDisplayString(_ctx.secondLiteral), 1 /* TEXT */)
                        ], 64 /* STABLE_FRAGMENT */))
                      : vue.createCommentVNode("v-if", true),
                    (!_ctx.isHourFormat24)
                      ? (vue.openBlock(), vue.createBlock(_component_b_select, {
                          key: 1,
                          modelValue: _ctx.meridienSelected,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (_ctx.meridienSelected = $event)),
                          onChange: _cache[10] || (_cache[10] = $event => (_ctx.onMeridienChange($event.target.value))),
                          disabled: _ctx.disabled
                        }, {
                          default: vue.withCtx(() => [
                            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.meridiens, (meridien) => {
                              return (vue.openBlock(), vue.createBlock("option", {
                                value: meridien,
                                key: meridien
                              }, vue.toDisplayString(meridien), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 1 /* STABLE */
                        }, 8 /* PROPS */, ["modelValue", "disabled"]))
                      : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 1 /* STABLE */
                }),
                (_ctx.$slots.default !== undefined && _ctx.$slots.default.length)
                  ? (vue.openBlock(), vue.createBlock("footer", _hoisted_4, [
                      vue.renderSlot(_ctx.$slots, "default")
                    ]))
                  : vue.createCommentVNode("v-if", true)
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["disabled", "focusable"])
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
                      onKeyup: _cache[1] || (_cache[1] = vue.withKeys($event => (_ctx.toggle(true)), ["native","enter"])),
                      onChange: _cache[2] || (_cache[2] = $event => (_ctx.onChange($event.target.value))),
                      onFocus: _ctx.handleOnFocus
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
          step: $options.nativeStep,
          autocomplete: "off",
          value: _ctx.formatHHMMSS(_ctx.computedValue),
          placeholder: _ctx.placeholder,
          size: _ctx.size,
          icon: _ctx.icon,
          "icon-pack": _ctx.iconPack,
          rounded: _ctx.rounded,
          loading: _ctx.loading,
          max: _ctx.formatHHMMSS(_ctx.maxTime),
          min: _ctx.formatHHMMSS(_ctx.minTime),
          disabled: _ctx.disabled,
          readonly: false,
          "reset-on-meridian-change": _ctx.isReset
        }, _ctx.$attrs, {
          "use-html5-validation": _ctx.useHtml5Validation,
          onChange: _cache[11] || (_cache[11] = $event => (_ctx.onChange($event.target.value))),
          onFocus: _ctx.handleOnFocus,
          onBlur: _cache[12] || (_cache[12] = $event => (_ctx.onBlur() && _ctx.checkHtml5Validity()))
        }), null, 16 /* FULL_PROPS */, ["step", "value", "placeholder", "size", "icon", "icon-pack", "rounded", "loading", "max", "min", "disabled", "reset-on-meridian-change", "use-html5-validation", "onFocus"]))
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/timepicker/Timepicker.vue";

exports.script = script;
