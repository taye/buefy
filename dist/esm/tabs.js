import { _ as _defineProperty } from './_rollupPluginBabelHelpers-0979e6ce.js';
import { c as config } from './config-63b70aae.js';
import { T as TabbedMixin, a as TabbedChildMixin } from './TabbedChildMixin-c3a876bc.js';
import { resolveComponent, openBlock, createBlock, createVNode, Fragment, renderList, withDirectives, createCommentVNode, toDisplayString, vShow, renderSlot } from 'vue';
import { a as registerComponent, u as use } from './plugins-a0a180cf.js';
import './Icon-9c398a60.js';
import './helpers.js';
import './SlotComponent-07d8e7a2.js';
import './InjectedChildMixin-9132fdb9.js';

var tabbedMixin = TabbedMixin('tab');
var script = {
  name: 'BTabs',
  mixins: [tabbedMixin],
  props: {
    expanded: {
      type: Boolean,
      default: function _default() {
        return config.defaultTabsExpanded;
      }
    },
    type: {
      type: [String, Object],
      default: function _default() {
        return config.defaultTabsType;
      }
    },
    animated: {
      type: Boolean,
      default: function _default() {
        return config.defaultTabsAnimated;
      }
    },
    multiline: Boolean
  },
  computed: {
    mainClasses: function mainClasses() {
      return _defineProperty({
        'is-fullwidth': this.expanded,
        'is-vertical': this.vertical,
        'is-multiline': this.multiline
      }, this.position, this.position && this.vertical);
    },
    navClasses: function navClasses() {
      var _ref2;

      return [this.type, this.size, (_ref2 = {}, _defineProperty(_ref2, this.position, this.position && !this.vertical), _defineProperty(_ref2, 'is-fullwidth', this.expanded), _defineProperty(_ref2, 'is-toggle-rounded is-toggle', this.type === 'is-toggle-rounded'), _ref2)];
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_slot_component = resolveComponent("b-slot-component");
  const _component_b_icon = resolveComponent("b-icon");

  return (openBlock(), createBlock("div", {
    class: ["b-tabs", $options.mainClasses]
  }, [
    createVNode("nav", {
      class: ["tabs", $options.navClasses]
    }, [
      createVNode("ul", null, [
        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (childItem) => {
          return withDirectives((openBlock(), createBlock("li", {
            key: childItem.value,
            class: [ childItem.headerClass, { 'is-active': childItem.isActive,
                                                       'is-disabled': childItem.disabled }]
          }, [
            (typeof (childItem.$scopedSlots || childItem.$slots).header === 'function')
              ? (openBlock(), createBlock(_component_b_slot_component, {
                  key: 0,
                  component: childItem,
                  name: "header",
                  tag: "a",
                  onClick: $event => (_ctx.childClick(childItem))
                }, null, 8 /* PROPS */, ["component", "onClick"]))
              : (openBlock(), createBlock("a", {
                  key: 1,
                  onClick: $event => (_ctx.childClick(childItem))
                }, [
                  (childItem.icon)
                    ? (openBlock(), createBlock(_component_b_icon, {
                        key: 0,
                        icon: childItem.icon,
                        pack: childItem.iconPack,
                        size: _ctx.size
                      }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
                    : createCommentVNode("v-if", true),
                  createVNode("span", null, toDisplayString(childItem.label), 1 /* TEXT */)
                ], 8 /* PROPS */, ["onClick"]))
          ], 2 /* CLASS */)), [
            [vShow, childItem.visible]
          ])
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */),
    createVNode("section", {
      class: ["tab-content", {'is-transitioning': _ctx.isTransitioning}]
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/tabs/Tabs.vue";

var TabItem = {
  name: 'BTabItem',
  mixins: [TabbedChildMixin('tab')],
  props: {
    disabled: Boolean
  },
  data: function data() {
    return {
      elementClass: 'tab-item'
    };
  }
};

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, script);
    registerComponent(Vue, TabItem);
  }
};
use(Plugin);

export default Plugin;
export { TabItem as BTabItem, script as BTabs };
