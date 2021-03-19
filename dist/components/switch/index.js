/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Switch = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

    var config = {
      defaultContainerElement: null,
      defaultIconPack: 'mdi',
      defaultIconComponent: null,
      defaultIconPrev: 'chevron-left',
      defaultIconNext: 'chevron-right',
      defaultLocale: undefined,
      defaultDialogConfirmText: null,
      defaultDialogCancelText: null,
      defaultSnackbarDuration: 3500,
      defaultSnackbarPosition: null,
      defaultToastDuration: 2000,
      defaultToastPosition: null,
      defaultNotificationDuration: 2000,
      defaultNotificationPosition: null,
      defaultTooltipType: 'is-primary',
      defaultTooltipDelay: null,
      defaultInputAutocomplete: 'on',
      defaultDateFormatter: null,
      defaultDateParser: null,
      defaultDateCreator: null,
      defaultTimeCreator: null,
      defaultDayNames: null,
      defaultMonthNames: null,
      defaultFirstDayOfWeek: null,
      defaultUnselectableDaysOfWeek: null,
      defaultTimeFormatter: null,
      defaultTimeParser: null,
      defaultModalCanCancel: ['escape', 'x', 'outside', 'button'],
      defaultModalScroll: null,
      defaultDatepickerMobileNative: true,
      defaultTimepickerMobileNative: true,
      defaultNoticeQueue: true,
      defaultInputHasCounter: true,
      defaultTaginputHasCounter: true,
      defaultUseHtml5Validation: true,
      defaultDropdownMobileModal: true,
      defaultFieldLabelPosition: null,
      defaultDatepickerYearsRange: [-100, 10],
      defaultDatepickerNearbyMonthDays: true,
      defaultDatepickerNearbySelectableMonthDays: false,
      defaultDatepickerShowWeekNumber: false,
      defaultDatepickerWeekNumberClickable: false,
      defaultDatepickerMobileModal: true,
      defaultTrapFocus: true,
      defaultAutoFocus: true,
      defaultButtonRounded: false,
      defaultSwitchRounded: true,
      defaultCarouselInterval: 3500,
      defaultTabsExpanded: false,
      defaultTabsAnimated: true,
      defaultTabsType: null,
      defaultStatusIcon: true,
      defaultProgrammaticPromise: false,
      defaultLinkTags: ['a', 'button', 'input', 'router-link', 'nuxt-link', 'n-link', 'RouterLink', 'NuxtLink', 'NLink'],
      defaultImageWebpFallback: null,
      defaultImageLazy: true,
      defaultImageResponsive: true,
      defaultImageRatio: null,
      defaultImageSrcsetFormatter: null,
      customIconPacks: null
    };

    var script = {
      name: 'BSwitch',
      props: {
        value: [String, Number, Boolean, Function, Object, Array, Date],
        nativeValue: [String, Number, Boolean, Function, Object, Array, Date],
        disabled: Boolean,
        type: String,
        passiveType: String,
        name: String,
        required: Boolean,
        size: String,
        trueValue: {
          type: [String, Number, Boolean, Function, Object, Array, Date],
          default: true
        },
        falseValue: {
          type: [String, Number, Boolean, Function, Object, Array, Date],
          default: false
        },
        rounded: {
          type: Boolean,
          default: function _default() {
            return config.defaultSwitchRounded;
          }
        },
        outlined: {
          type: Boolean,
          default: false
        },
        leftLabel: {
          type: Boolean,
          default: false
        }
      },
      data: function data() {
        return {
          newValue: this.value,
          isMouseDown: false
        };
      },
      computed: {
        computedValue: {
          get: function get() {
            return this.newValue;
          },
          set: function set(value) {
            this.newValue = value;
            this.$emit('input', value);
          }
        },
        newClass: function newClass() {
          return [this.size, {
            'is-disabled': this.disabled,
            'is-rounded': this.rounded,
            'is-outlined': this.outlined,
            'has-left-label': this.leftLabel
          }];
        },
        checkClasses: function checkClasses() {
          return [{
            'is-elastic': this.isMouseDown && !this.disabled
          }, this.passiveType && "".concat(this.passiveType, "-passive"), this.type];
        }
      },
      watch: {
        /**
        * When v-model change, set internal value.
        */
        value: function value(_value) {
          this.newValue = _value;
        }
      },
      methods: {
        focus: function focus() {
          // MacOS FireFox and Safari do not focus when clicked
          this.$refs.input.focus();
        }
      }
    };

    const _hoisted_1 = { class: "control-label" };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("label", {
        class: ["switch", $options.newClass],
        ref: "label",
        disabled: $props.disabled ? '' : null,
        onClick: _cache[3] || (_cache[3] = (...args) => ($options.focus && $options.focus(...args))),
        onKeydown: _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"])),
        onMousedown: _cache[5] || (_cache[5] = $event => ($data.isMouseDown = true)),
        onMouseup: _cache[6] || (_cache[6] = $event => ($data.isMouseDown = false)),
        onMouseout: _cache[7] || (_cache[7] = $event => ($data.isMouseDown = false)),
        onBlur: _cache[8] || (_cache[8] = $event => ($data.isMouseDown = false))
      }, [
        vue.withDirectives(vue.createVNode("input", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
          type: "checkbox",
          ref: "input",
          onClick: _cache[2] || (_cache[2] = vue.withModifiers(() => {}, ["stop"])),
          disabled: $props.disabled ? '' : null,
          name: $props.name,
          required: $props.required,
          value: $props.nativeValue,
          "true-value": $props.trueValue,
          "false-value": $props.falseValue
        }, null, 8 /* PROPS */, ["disabled", "name", "required", "value", "true-value", "false-value"]), [
          [vue.vModelCheckbox, $options.computedValue]
        ]),
        vue.createVNode("span", {
          class: ["check", $options.checkClasses]
        }, null, 2 /* CLASS */),
        vue.createVNode("span", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"]))
    }

    script.render = render;
    script.__file = "src/components/switch/Switch.vue";

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    var use = function use(plugin) {
      if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin);
      }
    };
    var registerComponent = function registerComponent(VueApp, component) {
      if (!VueApp.prototype) {
        patchHooks(component);
      }

      VueApp.component(component.name, component);
    };

    function patchHooks(component) {
      var deprecatedHooks = [['beforeDestroy', 'beforeUnmount'], ['destroyed', 'umounted']];
      deprecatedHooks.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            v2Name = _ref2[0],
            v3Name = _ref2[1];

        var v2Value = component[v2Name];
        if (!v2Value) return;
        component[v3Name] = v2Value;
        component[v2Name] = undefined;
      });

      if (component.mixins) {
        component.mixins.forEach(function (mixin) {
          return patchHooks(mixin);
        });
      }
    }

    var Plugin = {
      install: function install(Vue) {
        registerComponent(Vue, script);
      }
    };
    use(Plugin);

    exports.BSwitch = script;
    exports.default = Plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
