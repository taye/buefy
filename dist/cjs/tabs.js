'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var config = require('./config-1bc87110.js');
var TabbedChildMixin = require('./TabbedChildMixin-9aa8bab3.js');
var vue = require('vue');
var plugins = require('./plugins-c99a13c9.js');
require('./Icon-59750035.js');
require('./helpers.js');
require('./SlotComponent-2eefe90f.js');
require('./InjectedChildMixin-28e1211a.js');

var tabbedMixin = TabbedChildMixin.TabbedMixin('tab');
var script = {
  name: 'BTabs',
  mixins: [tabbedMixin],
  props: {
    expanded: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultTabsExpanded;
      }
    },
    type: {
      type: [String, Object],
      default: function _default() {
        return config.config.defaultTabsType;
      }
    },
    animated: {
      type: Boolean,
      default: function _default() {
        return config.config.defaultTabsAnimated;
      }
    },
    multiline: Boolean
  },
  computed: {
    mainClasses: function mainClasses() {
      return _rollupPluginBabelHelpers._defineProperty({
        'is-fullwidth': this.expanded,
        'is-vertical': this.vertical,
        'is-multiline': this.multiline
      }, this.position, this.position && this.vertical);
    },
    navClasses: function navClasses() {
      var _ref2;

      return [this.type, this.size, (_ref2 = {}, _rollupPluginBabelHelpers._defineProperty(_ref2, this.position, this.position && !this.vertical), _rollupPluginBabelHelpers._defineProperty(_ref2, 'is-fullwidth', this.expanded), _rollupPluginBabelHelpers._defineProperty(_ref2, 'is-toggle-rounded is-toggle', this.type === 'is-toggle-rounded'), _ref2)];
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_slot_component = vue.resolveComponent("b-slot-component");
  const _component_b_icon = vue.resolveComponent("b-icon");

  return (vue.openBlock(), vue.createBlock("div", {
    class: ["b-tabs", $options.mainClasses]
  }, [
    vue.createVNode("nav", {
      class: ["tabs", $options.navClasses]
    }, [
      vue.createVNode("ul", null, [
        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.items, (childItem) => {
          return vue.withDirectives((vue.openBlock(), vue.createBlock("li", {
            key: childItem.value,
            class: [ childItem.headerClass, { 'is-active': childItem.isActive,
                                                       'is-disabled': childItem.disabled }]
          }, [
            (typeof (childItem.$scopedSlots || childItem.$slots).header === 'function')
              ? (vue.openBlock(), vue.createBlock(_component_b_slot_component, {
                  key: 0,
                  component: childItem,
                  name: "header",
                  tag: "a",
                  onClick: $event => (_ctx.childClick(childItem))
                }, null, 8 /* PROPS */, ["component", "onClick"]))
              : (vue.openBlock(), vue.createBlock("a", {
                  key: 1,
                  onClick: $event => (_ctx.childClick(childItem))
                }, [
                  (childItem.icon)
                    ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
                        key: 0,
                        icon: childItem.icon,
                        pack: childItem.iconPack,
                        size: _ctx.size
                      }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
                    : vue.createCommentVNode("v-if", true),
                  vue.createVNode("span", null, vue.toDisplayString(childItem.label), 1 /* TEXT */)
                ], 8 /* PROPS */, ["onClick"]))
          ], 2 /* CLASS */)), [
            [vue.vShow, childItem.visible]
          ])
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */),
    vue.createVNode("section", {
      class: ["tab-content", {'is-transitioning': _ctx.isTransitioning}]
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/tabs/Tabs.vue";

var TabItem = {
  name: 'BTabItem',
  mixins: [TabbedChildMixin.TabbedChildMixin('tab')],
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
    plugins.registerComponent(Vue, script);
    plugins.registerComponent(Vue, TabItem);
  }
};
plugins.use(Plugin);

exports.BTabItem = TabItem;
exports.BTabs = script;
exports.default = Plugin;
