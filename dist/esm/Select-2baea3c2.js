import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { s as script$1 } from './Icon-9c398a60.js';
import { F as FormElementMixin } from './FormElementMixin-3605f28d.js';
import { resolveComponent, openBlock, createBlock, createVNode, withDirectives, mergeProps, Fragment, toDisplayString, createCommentVNode, renderSlot, vModelSelect } from 'vue';

var script = {
  name: 'BSelect',
  components: _defineProperty({}, script$1.name, script$1),
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function, Date],
      default: null
    },
    placeholder: String,
    multiple: Boolean,
    nativeSize: [String, Number]
  },
  data: function data() {
    return {
      selected: this.value,
      _elementRef: 'select'
    };
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.selected;
      },
      set: function set(value) {
        this.selected = value;
        this.$emit('input', value);
        !this.isValid && this.checkHtml5Validity();
      }
    },
    spanClasses: function spanClasses() {
      return [this.size, this.statusType, {
        'is-fullwidth': this.expanded,
        'is-loading': this.loading,
        'is-multiple': this.multiple,
        'is-rounded': this.rounded,
        'is-empty': this.selected === null
      }];
    }
  },
  watch: {
    /**
    * When v-model is changed:
    *   1. Set the selected option.
    *   2. If it's invalid, validate again.
    */
    value: function value(_value) {
      this.selected = _value;
      !this.isValid && this.checkHtml5Validity();
    }
  }
};

const _hoisted_1 = {
  key: 0,
  value: null,
  disabled: "",
  hidden: ""
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["control", { 'is-expanded': _ctx.expanded, 'has-icons-left': _ctx.icon }]
  }, [
    createVNode("span", {
      class: ["select", $options.spanClasses]
    }, [
      withDirectives(createVNode("select", mergeProps({
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($options.computedValue = $event)),
        ref: "select",
        multiple: $props.multiple,
        size: $props.nativeSize
      }, _ctx.$attrs, {
        onBlur: _cache[2] || (_cache[2] = $event => (_ctx.$emit('blur', $event) && _ctx.checkHtml5Validity())),
        onFocus: _cache[3] || (_cache[3] = $event => (_ctx.$emit('focus', $event)))
      }), [
        ($props.placeholder)
          ? (openBlock(), createBlock(Fragment, { key: 0 }, [
              ($options.computedValue == null)
                ? (openBlock(), createBlock("option", _hoisted_1, toDisplayString($props.placeholder), 1 /* TEXT */))
                : createCommentVNode("v-if", true)
            ], 64 /* STABLE_FRAGMENT */))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 16 /* FULL_PROPS */, ["multiple", "size"]), [
        [vModelSelect, $options.computedValue]
      ])
    ], 2 /* CLASS */),
    (_ctx.icon)
      ? (openBlock(), createBlock(_component_b_icon, {
          key: 0,
          class: "is-left",
          icon: _ctx.icon,
          pack: _ctx.iconPack,
          size: _ctx.iconSize
        }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/select/Select.vue";

export { script as s };
