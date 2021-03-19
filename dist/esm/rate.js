import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { c as config } from './config-63b70aae.js';
import { s as script$1 } from './Icon-9c398a60.js';
import { resolveComponent, openBlock, createBlock, Fragment, renderList, withModifiers, createVNode, createCommentVNode, toDisplayString } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './helpers.js';

var script = {
  name: 'BRate',
  components: _defineProperty({}, script$1.name, script$1),
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: 'star'
    },
    iconPack: String,
    size: String,
    spaced: Boolean,
    rtl: Boolean,
    disabled: Boolean,
    showScore: Boolean,
    showText: Boolean,
    customText: String,
    texts: Array,
    locale: {
      type: [String, Array],
      default: function _default() {
        return config.defaultLocale;
      }
    }
  },
  data: function data() {
    return {
      newValue: this.value,
      hoverValue: 0
    };
  },
  computed: {
    halfStyle: function halfStyle() {
      return "width:".concat(this.valueDecimal, "%");
    },
    showMe: function showMe() {
      var result = '';

      if (this.showScore) {
        result = this.disabled ? this.value : this.newValue;

        if (result === 0) {
          result = '';
        } else {
          result = new Intl.NumberFormat(this.locale).format(this.value);
        }
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.newValue) - 1];
      }

      return result;
    },
    valueDecimal: function valueDecimal() {
      return this.value * 100 - Math.floor(this.value) * 100;
    }
  },
  watch: {
    // When v-model is changed set the new value.
    value: function value(_value) {
      this.newValue = _value;
    }
  },
  methods: {
    resetNewValue: function resetNewValue() {
      if (this.disabled) return;
      this.hoverValue = 0;
    },
    previewRate: function previewRate(index, event) {
      if (this.disabled) return;
      this.hoverValue = index;
      event.stopPropagation();
    },
    confirmValue: function confirmValue(index) {
      if (this.disabled) return;
      this.newValue = index;
      this.$emit('change', this.newValue);
      this.$emit('input', this.newValue);
    },
    checkHalf: function checkHalf(index) {
      var showWhenDisabled = this.disabled && this.valueDecimal > 0 && index - 1 < this.value && index > this.value;
      return showWhenDisabled;
    },
    rateClass: function rateClass(index) {
      var output = '';
      var currentValue = this.hoverValue !== 0 ? this.hoverValue : this.newValue;

      if (index <= currentValue) {
        output = 'set-on';
      } else if (this.disabled && Math.ceil(this.value) === index) {
        output = 'set-half';
      }

      return output;
    }
  }
};

const _hoisted_1 = { key: 0 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["rate", { 'is-disabled': $props.disabled, 'is-spaced': $props.spaced, 'is-rtl': $props.rtl }]
  }, [
    (openBlock(true), createBlock(Fragment, null, renderList($props.max, (item, index) => {
      return (openBlock(), createBlock("div", {
        class: ["rate-item", $options.rateClass(item)],
        key: index,
        onMousemove: $event => ($options.previewRate(item, $event)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => ($options.resetNewValue && $options.resetNewValue(...args))),
        onClick: withModifiers($event => ($options.confirmValue(item)), ["prevent"])
      }, [
        createVNode(_component_b_icon, {
          pack: $props.iconPack,
          icon: $props.icon,
          size: $props.size
        }, null, 8 /* PROPS */, ["pack", "icon", "size"]),
        ($options.checkHalf(item))
          ? (openBlock(), createBlock(_component_b_icon, {
              key: 0,
              class: "is-half",
              pack: $props.iconPack,
              icon: $props.icon,
              size: $props.size,
              style: $options.halfStyle
            }, null, 8 /* PROPS */, ["pack", "icon", "size", "style"]))
          : createCommentVNode("v-if", true)
      ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onMousemove", "onClick"]))
    }), 128 /* KEYED_FRAGMENT */)),
    ($props.showText || $props.showScore || $props.customText)
      ? (openBlock(), createBlock("div", {
          key: 0,
          class: ["rate-text", $props.size]
        }, [
          createVNode("span", null, toDisplayString($options.showMe), 1 /* TEXT */),
          ($props.customText && !$props.showText)
            ? (openBlock(), createBlock("span", _hoisted_1, toDisplayString($props.customText), 1 /* TEXT */))
            : createCommentVNode("v-if", true)
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/rate/Rate.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BRate };
