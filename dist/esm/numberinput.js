import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { s as script$1 } from './Icon-9c398a60.js';
import { s as script$2 } from './Input-a74a428d.js';
import { F as FormElementMixin } from './FormElementMixin-3605f28d.js';
import { resolveComponent, openBlock, createBlock, Fragment, renderList, createVNode, withModifiers, mergeProps } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './config-63b70aae.js';
import './helpers.js';

var _components;
var script = {
  name: 'BNumberinput',
  components: (_components = {}, _defineProperty(_components, script$1.name, script$1), _defineProperty(_components, script$2.name, script$2), _components),
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: Number,
    min: {
      type: [Number, String]
    },
    max: [Number, String],
    step: [Number, String],
    minStep: [Number, String],
    exponential: [Boolean, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: 'is-primary'
    },
    editable: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsAlignment: {
      type: String,
      default: 'center',
      validator: function validator(value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0;
      }
    },
    controlsRounded: {
      type: Boolean,
      default: false
    },
    controlsPosition: String,
    placeholder: [Number, String]
  },
  data: function data() {
    return {
      newValue: this.value,
      newStep: this.step || 1,
      newMinStep: this.minStep,
      timesPressed: 1,
      _elementRef: 'input'
    };
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.newValue;
      },
      set: function set(value) {
        var newValue = value;

        if (value === '' || value === undefined || value === null) {
          if (this.minNumber !== undefined) {
            newValue = this.minNumber;
          } else {
            newValue = null;
          }
        }

        this.newValue = newValue;

        if (!isNaN(newValue) && newValue !== null && newValue !== '-0') {
          this.$emit('input', Number(newValue));
        }

        !this.isValid && this.$refs.input.checkHtml5Validity();
      }
    },
    controlsLeft: function controlsLeft() {
      if (this.controls && this.controlsAlignment !== 'right') {
        return this.controlsAlignment === 'left' ? ['minus', 'plus'] : ['minus'];
      }

      return [];
    },
    controlsRight: function controlsRight() {
      if (this.controls && this.controlsAlignment !== 'left') {
        return this.controlsAlignment === 'right' ? ['minus', 'plus'] : ['plus'];
      }

      return [];
    },
    fieldClasses: function fieldClasses() {
      return [{
        'has-addons': this.controlsPosition === 'compact'
      }, {
        'is-grouped': this.controlsPosition !== 'compact'
      }, {
        'is-expanded': this.expanded
      }];
    },
    buttonClasses: function buttonClasses() {
      return [this.type, this.size, {
        'is-rounded': this.controlsRounded
      }];
    },
    minNumber: function minNumber() {
      return typeof this.min === 'string' ? parseFloat(this.min) : this.min;
    },
    maxNumber: function maxNumber() {
      return typeof this.max === 'string' ? parseFloat(this.max) : this.max;
    },
    stepNumber: function stepNumber() {
      return typeof this.newStep === 'string' ? parseFloat(this.newStep) : this.newStep;
    },
    minStepNumber: function minStepNumber() {
      var step = typeof this.newMinStep !== 'undefined' ? this.newMinStep : this.newStep;
      return typeof step === 'string' ? parseFloat(step) : step;
    },
    disabledMin: function disabledMin() {
      return this.computedValue - this.stepNumber < this.minNumber;
    },
    disabledMax: function disabledMax() {
      return this.computedValue + this.stepNumber > this.maxNumber;
    },
    stepDecimals: function stepDecimals() {
      var step = this.minStepNumber.toString();
      var index = step.indexOf('.');

      if (index >= 0) {
        return step.substring(index + 1).length;
      }

      return 0;
    }
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     */
    value: {
      immediate: true,
      handler: function handler(value) {
        this.newValue = value;
      }
    },
    step: function step(value) {
      this.newStep = value;
    },
    minStep: function minStep(value) {
      this.newMinStep = value;
    }
  },
  methods: {
    decrement: function decrement() {
      if (typeof this.minNumber === 'undefined' || this.computedValue - this.stepNumber >= this.minNumber) {
        if (this.computedValue === null || typeof this.computedValue === 'undefined') {
          if (this.maxNumber) {
            this.computedValue = this.maxNumber;
            return;
          }

          this.computedValue = 0;
        }

        var value = this.computedValue - this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },
    increment: function increment() {
      if (typeof this.maxNumber === 'undefined' || this.computedValue + this.stepNumber <= this.maxNumber) {
        if (this.computedValue === null || typeof this.computedValue === 'undefined') {
          if (this.minNumber) {
            this.computedValue = this.minNumber;
            return;
          }

          this.computedValue = 0;
        }

        var value = this.computedValue + this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },
    onControlClick: function onControlClick(event, inc) {
      // IE 11 -> filter click event
      if (event.detail !== 0 || event.type !== 'click') return;
      if (inc) this.increment();else this.decrement();
    },
    longPressTick: function longPressTick(inc) {
      var _this = this;

      if (inc) this.increment();else this.decrement();
      this._$intervalRef = setTimeout(function () {
        _this.longPressTick(inc);
      }, this.exponential ? 250 / (this.exponential * this.timesPressed++) : 250);
    },
    onStartLongPress: function onStartLongPress(event, inc) {
      if (event.button !== 0 && event.type !== 'touchstart') return;
      clearTimeout(this._$intervalRef);
      this.longPressTick(inc);
    },
    onStopLongPress: function onStopLongPress() {
      if (!this._$intervalRef) return;
      this.timesPressed = 1;
      clearTimeout(this._$intervalRef);
      this._$intervalRef = null;
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");
  const _component_b_input = resolveComponent("b-input");

  return (openBlock(), createBlock("div", {
    class: ["b-numberinput field", $options.fieldClasses]
  }, [
    (openBlock(true), createBlock(Fragment, null, renderList($options.controlsLeft, (control) => {
      return (openBlock(), createBlock("p", {
        key: control,
        class: ['control', control],
        onMouseup: _cache[1] || (_cache[1] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onMouseleave: _cache[2] || (_cache[2] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchend: _cache[3] || (_cache[3] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchcancel: _cache[4] || (_cache[4] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args)))
      }, [
        createVNode("button", {
          type: "button",
          class: ["button", $options.buttonClasses],
          disabled: ($props.disabled || control === 'plus' ? $options.disabledMax : $options.disabledMin) ? '' : null,
          onMousedown: $event => ($options.onStartLongPress($event, control === 'plus')),
          onTouchstart: withModifiers($event => ($options.onStartLongPress($event, control === 'plus')), ["prevent"]),
          onClick: $event => ($options.onControlClick($event, control === 'plus'))
        }, [
          createVNode(_component_b_icon, {
            both: "",
            icon: control,
            pack: _ctx.iconPack,
            size: _ctx.iconSize
          }, null, 8 /* PROPS */, ["icon", "pack", "size"])
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onMousedown", "onTouchstart", "onClick"])
      ], 34 /* CLASS, HYDRATE_EVENTS */))
    }), 128 /* KEYED_FRAGMENT */)),
    createVNode(_component_b_input, mergeProps({
      type: "number",
      ref: "input",
      modelValue: $options.computedValue,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ($options.computedValue = $event))
    }, _ctx.$attrs, {
      step: $options.minStepNumber,
      max: $props.max,
      min: $props.min,
      size: _ctx.size,
      disabled: $props.disabled,
      readonly: !$props.editable,
      loading: _ctx.loading,
      rounded: _ctx.rounded,
      icon: _ctx.icon,
      "icon-pack": _ctx.iconPack,
      autocomplete: _ctx.autocomplete,
      expanded: _ctx.expanded,
      placeholder: $props.placeholder,
      "use-html5-validation": _ctx.useHtml5Validation,
      onFocus: _cache[6] || (_cache[6] = $event => (_ctx.$emit('focus', $event))),
      onBlur: _cache[7] || (_cache[7] = $event => (_ctx.$emit('blur', $event)))
    }), null, 16 /* FULL_PROPS */, ["modelValue", "step", "max", "min", "size", "disabled", "readonly", "loading", "rounded", "icon", "icon-pack", "autocomplete", "expanded", "placeholder", "use-html5-validation"]),
    (openBlock(true), createBlock(Fragment, null, renderList($options.controlsRight, (control) => {
      return (openBlock(), createBlock("p", {
        key: control,
        class: ['control', control],
        onMouseup: _cache[8] || (_cache[8] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onMouseleave: _cache[9] || (_cache[9] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchend: _cache[10] || (_cache[10] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args))),
        onTouchcancel: _cache[11] || (_cache[11] = (...args) => ($options.onStopLongPress && $options.onStopLongPress(...args)))
      }, [
        createVNode("button", {
          type: "button",
          class: ["button", $options.buttonClasses],
          disabled: ($props.disabled || control === 'plus' ? $options.disabledMax : $options.disabledMin) ? '' : null,
          onMousedown: $event => ($options.onStartLongPress($event, control === 'plus')),
          onTouchstart: withModifiers($event => ($options.onStartLongPress($event, control === 'plus')), ["prevent"]),
          onClick: $event => ($options.onControlClick($event, control === 'plus'))
        }, [
          createVNode(_component_b_icon, {
            both: "",
            icon: control,
            pack: _ctx.iconPack,
            size: _ctx.iconSize
          }, null, 8 /* PROPS */, ["icon", "pack", "size"])
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["disabled", "onMousedown", "onTouchstart", "onClick"])
      ], 34 /* CLASS, HYDRATE_EVENTS */))
    }), 128 /* KEYED_FRAGMENT */))
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/numberinput/Numberinput.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BNumberinput };
