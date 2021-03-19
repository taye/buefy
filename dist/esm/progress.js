import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { c as config } from './config-63b70aae.js';
import { P as ProviderParentMixin, I as InjectedChildMixin } from './InjectedChildMixin-9132fdb9.js';
import { openBlock, createBlock, toDisplayString, renderSlot, createTextVNode, createCommentVNode } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './helpers.js';

var script$1 = {
  name: 'BProgress',
  mixins: [ProviderParentMixin('progress')],
  props: {
    type: {
      type: [String, Object],
      default: 'is-darkgrey'
    },
    size: String,
    value: {
      type: Number,
      default: undefined
    },
    max: {
      type: Number,
      default: 100
    },
    showValue: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'raw',
      validator: function validator(value) {
        return ['raw', 'percent'].indexOf(value) >= 0;
      }
    },
    precision: {
      type: Number,
      default: 2
    },
    keepTrailingZeroes: {
      type: Boolean,
      default: false
    },
    locale: {
      type: [String, Array],
      default: function _default() {
        return config.defaultLocale;
      }
    }
  },
  computed: {
    isIndeterminate: function isIndeterminate() {
      return this.value === undefined || this.value === null;
    },
    newType: function newType() {
      return [this.size, this.type, {
        'is-more-than-half': this.value && this.value > this.max / 2
      }];
    },
    newValue: function newValue() {
      return this.calculateValue(this.value);
    },
    isNative: function isNative() {
      return getSlot(this.$slots, 'bar') === undefined;
    },
    wrapperClasses: function wrapperClasses() {
      return _defineProperty({
        'is-not-native': !this.isNative
      }, this.size, !this.isNative);
    }
  },
  watch: {
    /**
     * When value is changed back to undefined, value of native progress get reset to 0.
     * Need to add and remove the value attribute to have the indeterminate or not.
     */
    isIndeterminate: function isIndeterminate(indeterminate) {
      var _this = this;

      this.$nextTick(function () {
        if (_this.$refs.progress) {
          if (indeterminate) {
            _this.$refs.progress.removeAttribute('value');
          } else {
            _this.$refs.progress.setAttribute('value', _this.value);
          }
        }
      });
    }
  },
  methods: {
    calculateValue: function calculateValue(value) {
      if (value === undefined || value === null || isNaN(value)) {
        return undefined;
      }

      var minimumFractionDigits = this.keepTrailingZeroes ? this.precision : 0;
      var maximumFractionDigits = this.precision;

      if (this.format === 'percent') {
        return new Intl.NumberFormat(this.locale, {
          style: 'percent',
          minimumFractionDigits: minimumFractionDigits,
          maximumFractionDigits: maximumFractionDigits
        }).format(value / this.max);
      }

      return new Intl.NumberFormat(this.locale, {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
      }).format(value);
    }
  }
};

const _hoisted_1$1 = {
  key: 2,
  class: "progress-value"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["progress-wrapper", $options.wrapperClasses]
  }, [
    ($options.isNative)
      ? (openBlock(), createBlock("progress", {
          key: 0,
          ref: "progress",
          class: ["progress", $options.newType],
          max: $props.max,
          value: $props.value
        }, toDisplayString($options.newValue), 11 /* TEXT, CLASS, PROPS */, ["max", "value"]))
      : renderSlot(_ctx.$slots, "bar", { key: 1 }),
    ($options.isNative && $props.showValue)
      ? (openBlock(), createBlock("p", _hoisted_1$1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString($options.newValue), 1 /* TEXT */)
          ])
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "src/components/progress/Progress.vue";

var script = {
  name: 'BProgressBar',
  mixins: [InjectedChildMixin('progress')],
  props: {
    type: {
      type: [String, Object],
      default: undefined
    },
    value: {
      type: Number,
      default: undefined
    },
    showValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    newType: function newType() {
      return [this.parent.size, this.type || this.parent.type];
    },
    newShowValue: function newShowValue() {
      return this.showValue || this.parent.showValue;
    },
    newValue: function newValue() {
      return this.parent.calculateValue(this.value);
    },
    barWidth: function barWidth() {
      return "".concat(this.value * 100 / this.parent.max, "%");
    }
  }
};

const _hoisted_1 = {
  key: 0,
  class: "progress-value"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["progress-bar", $options.newType],
    role: "progressbar",
    "aria-valuenow": $props.value,
    "aria-valuemax": _ctx.parent.max,
    "aria-valuemin": "0",
    style: {width: $options.barWidth}
  }, [
    ($options.newShowValue)
      ? (openBlock(), createBlock("p", _hoisted_1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString($options.newValue), 1 /* TEXT */)
          ])
        ]))
      : createCommentVNode("v-if", true)
  ], 14 /* CLASS, STYLE, PROPS */, ["aria-valuenow", "aria-valuemax"]))
}

script.render = render;
script.__file = "src/components/progress/ProgressBar.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script$1);
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script$1 as BProgress, script as BProgressBar };
