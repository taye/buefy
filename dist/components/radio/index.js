/*! Buefy v0.9.4 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Radio = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

    var CheckRadioMixin = {
      props: {
        value: [String, Number, Boolean, Function, Object, Array],
        nativeValue: [String, Number, Boolean, Function, Object, Array],
        type: String,
        disabled: Boolean,
        required: Boolean,
        name: String,
        size: String
      },
      data: function data() {
        return {
          newValue: this.value
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

    var script$1 = {
      name: 'BRadio',
      mixins: [CheckRadioMixin]
    };

    const _hoisted_1 = { class: "control-label" };

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("label", {
        class: ["b-radio radio", [_ctx.size, { 'is-disabled': _ctx.disabled }]],
        ref: "label",
        disabled: _ctx.disabled ? '' : null,
        onClick: _cache[3] || (_cache[3] = (...args) => (_ctx.focus && _ctx.focus(...args))),
        onKeydown: _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"]))
      }, [
        vue.withDirectives(vue.createVNode("input", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.computedValue = $event)),
          type: "radio",
          ref: "input",
          onClick: _cache[2] || (_cache[2] = vue.withModifiers(() => {}, ["stop"])),
          disabled: _ctx.disabled ? '' : null,
          required: _ctx.required,
          name: _ctx.name,
          value: _ctx.nativeValue
        }, null, 8 /* PROPS */, ["disabled", "required", "name", "value"]), [
          [vue.vModelRadio, _ctx.computedValue]
        ]),
        vue.createVNode("span", {
          class: ["check", _ctx.type]
        }, null, 2 /* CLASS */),
        vue.createVNode("span", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"]))
    }

    script$1.render = render$1;
    script$1.__file = "src/components/radio/Radio.vue";

    var script = {
      name: 'BRadioButton',
      mixins: [CheckRadioMixin],
      props: {
        type: {
          type: String,
          default: 'is-primary'
        },
        expanded: Boolean
      },
      data: function data() {
        return {
          isFocused: false
        };
      },
      computed: {
        isSelected: function isSelected() {
          return this.newValue === this.nativeValue;
        },
        labelClass: function labelClass() {
          return [this.isSelected ? this.type : null, this.size, {
            'is-selected': this.isSelected,
            'is-disabled': this.disabled,
            'is-focused': this.isFocused
          }];
        }
      }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("div", {
        class: ["control", { 'is-expanded': $props.expanded }]
      }, [
        vue.createVNode("label", {
          class: ["b-radio radio button", $options.labelClass],
          ref: "label",
          disabled: _ctx.disabled ? '' : null,
          onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.focus && _ctx.focus(...args))),
          onKeydown: _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"]))
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          vue.withDirectives(vue.createVNode("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.computedValue = $event)),
            type: "radio",
            ref: "input",
            onClick: _cache[2] || (_cache[2] = vue.withModifiers(() => {}, ["stop"])),
            disabled: _ctx.disabled ? '' : null,
            required: _ctx.required,
            name: _ctx.name,
            value: _ctx.nativeValue,
            onFocus: _cache[3] || (_cache[3] = $event => ($data.isFocused = true)),
            onBlur: _cache[4] || (_cache[4] = $event => ($data.isFocused = false))
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["disabled", "required", "name", "value"]), [
            [vue.vModelRadio, _ctx.computedValue]
          ])
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"])
      ], 2 /* CLASS */))
    }

    script.render = render;
    script.__file = "src/components/radio/RadioButton.vue";

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
        registerComponent(Vue, script$1);
        registerComponent(Vue, script);
      }
    };
    use(Plugin);

    exports.BRadio = script$1;
    exports.BRadioButton = script;
    exports.default = Plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
