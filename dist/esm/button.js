import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { s as script$1 } from './Icon-9c398a60.js';
import { c as config } from './config-63b70aae.js';
import { resolveComponent, openBlock, createBlock, resolveDynamicComponent, mergeProps, toHandlers, withCtx, createCommentVNode, toDisplayString, renderSlot } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './helpers.js';

var script = {
  name: 'BButton',
  components: _defineProperty({}, script$1.name, script$1),
  inheritAttrs: false,
  props: {
    type: [String, Object],
    size: String,
    label: String,
    iconPack: String,
    iconLeft: String,
    iconRight: String,
    rounded: {
      type: Boolean,
      default: function _default() {
        return config.defaultButtonRounded;
      }
    },
    loading: Boolean,
    outlined: Boolean,
    expanded: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean,
    nativeType: {
      type: String,
      default: 'button',
      validator: function validator(value) {
        return ['button', 'submit', 'reset'].indexOf(value) >= 0;
      }
    },
    tag: {
      type: String,
      default: 'button',
      validator: function validator(value) {
        return config.defaultLinkTags.indexOf(value) >= 0;
      }
    }
  },
  computed: {
    computedTag: function computedTag() {
      if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
        return 'button';
      }

      return this.tag;
    },
    iconSize: function iconSize() {
      if (!this.size || this.size === 'is-medium') {
        return 'is-small';
      } else if (this.size === 'is-large') {
        return 'is-medium';
      }

      return this.size;
    }
  }
};

const _hoisted_1 = { key: 1 };
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock(resolveDynamicComponent($options.computedTag), mergeProps({ class: "button" }, _ctx.$attrs, {
    type: $props.nativeType,
    class: [$props.size, $props.type, {
            'is-rounded': $props.rounded,
            'is-loading': $props.loading,
            'is-outlined': $props.outlined,
            'is-fullwidth': $props.expanded,
            'is-inverted': $props.inverted,
            'is-focused': $props.focused,
            'is-active': $props.active,
            'is-hovered': $props.hovered,
            'is-selected': $props.selected
        }]
  }, toHandlers(_ctx.$listeners)), {
    default: withCtx(() => [
      ($props.iconLeft)
        ? (openBlock(), createBlock(_component_b_icon, {
            key: 0,
            pack: $props.iconPack,
            icon: $props.iconLeft,
            size: $options.iconSize
          }, null, 8 /* PROPS */, ["pack", "icon", "size"]))
        : createCommentVNode("v-if", true),
      ($props.label)
        ? (openBlock(), createBlock("span", _hoisted_1, toDisplayString($props.label), 1 /* TEXT */))
        : (_ctx.$slots.default)
          ? (openBlock(), createBlock("span", _hoisted_2, [
              renderSlot(_ctx.$slots, "default")
            ]))
          : createCommentVNode("v-if", true),
      ($props.iconRight)
        ? (openBlock(), createBlock(_component_b_icon, {
            key: 3,
            pack: $props.iconPack,
            icon: $props.iconRight,
            size: $options.iconSize
          }, null, 8 /* PROPS */, ["pack", "icon", "size"]))
        : createCommentVNode("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */, ["type", "class"]))
}

script.render = render;
script.__file = "src/components/button/Button.vue";

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
  }
};
use(Plugin);

export default Plugin;
export { script as BButton };
