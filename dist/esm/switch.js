import { c as config } from './config-63b70aae.js';
import { openBlock, createBlock, withKeys, withModifiers, withDirectives, createVNode, vModelCheckbox, renderSlot } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './_rollupPluginBabelHelpers-0979e6ce.js';

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
  return (openBlock(), createBlock("label", {
    class: ["switch", $options.newClass],
    ref: "label",
    disabled: $props.disabled ? '' : null,
    onClick: _cache[3] || (_cache[3] = (...args) => ($options.focus && $options.focus(...args))),
    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers($event => (_ctx.$refs.label.click()), ["prevent"]), ["enter"])),
    onMousedown: _cache[5] || (_cache[5] = $event => ($data.isMouseDown = true)),
    onMouseup: _cache[6] || (_cache[6] = $event => ($data.isMouseDown = false)),
    onMouseout: _cache[7] || (_cache[7] = $event => ($data.isMouseDown = false)),
    onBlur: _cache[8] || (_cache[8] = $event => ($data.isMouseDown = false))
  }, [
    withDirectives(createVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
      type: "checkbox",
      ref: "input",
      onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
      disabled: $props.disabled ? '' : null,
      name: $props.name,
      required: $props.required,
      value: $props.nativeValue,
      "true-value": $props.trueValue,
      "false-value": $props.falseValue
    }, null, 8 /* PROPS */, ["disabled", "name", "required", "value", "true-value", "false-value"]), [
      [vModelCheckbox, $options.computedValue]
    ]),
    createVNode("span", {
      class: ["check", $options.checkClasses]
    }, null, 2 /* CLASS */),
    createVNode("span", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled"]))
}

script.render = render;
script.__file = "src/components/switch/Switch.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BSwitch };
