'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a6b1b170.js');
var Icon = require('./Icon-59750035.js');
var TabbedChildMixin = require('./TabbedChildMixin-9aa8bab3.js');
var config = require('./config-1bc87110.js');
var vue = require('vue');
var plugins = require('./plugins-c99a13c9.js');
require('./helpers.js');
require('./SlotComponent-2eefe90f.js');
require('./InjectedChildMixin-28e1211a.js');

var script$1 = {
  name: 'BSteps',
  components: _rollupPluginBabelHelpers._defineProperty({}, Icon.script.name, Icon.script),
  mixins: [TabbedChildMixin.TabbedMixin('step')],
  props: {
    type: [String, Object],
    iconPack: String,
    iconPrev: {
      type: String,
      default: function _default() {
        return config.config.defaultIconPrev;
      }
    },
    iconNext: {
      type: String,
      default: function _default() {
        return config.config.defaultIconNext;
      }
    },
    hasNavigation: {
      type: Boolean,
      default: true
    },
    labelPosition: {
      type: String,
      validator: function validator(value) {
        return ['bottom', 'right', 'left'].indexOf(value) > -1;
      },
      default: 'bottom'
    },
    rounded: {
      type: Boolean,
      default: true
    },
    mobileMode: {
      type: String,
      validator: function validator(value) {
        return ['minimalist', 'compact'].indexOf(value) > -1;
      },
      default: 'minimalist'
    },
    ariaNextLabel: String,
    ariaPreviousLabel: String
  },
  computed: {
    // Override mixin implementation to always have a value
    activeItem: function activeItem() {
      var _this = this;

      return this.childItems.filter(function (i) {
        return i.value === _this.activeId;
      })[0] || this.items[0];
    },
    wrapperClasses: function wrapperClasses() {
      return [this.size, _rollupPluginBabelHelpers._defineProperty({
        'is-vertical': this.vertical
      }, this.position, this.position && this.vertical)];
    },
    mainClasses: function mainClasses() {
      return [this.type, _rollupPluginBabelHelpers._defineProperty({
        'has-label-right': this.labelPosition === 'right',
        'has-label-left': this.labelPosition === 'left',
        'is-animated': this.animated,
        'is-rounded': this.rounded
      }, "mobile-".concat(this.mobileMode), this.mobileMode !== null)];
    },

    /**
     * Check if previous button is available.
     */
    hasPrev: function hasPrev() {
      return !!this.prevItem;
    },

    /**
     * Retrieves the next visible item
     */
    nextItem: function nextItem() {
      var nextItem = null;
      var idx = this.activeItem ? this.items.indexOf(this.activeItem) + 1 : 0;

      for (; idx < this.items.length; idx++) {
        if (this.items[idx].visible) {
          nextItem = this.items[idx];
          break;
        }
      }

      return nextItem;
    },

    /**
     * Retrieves the previous visible item
     */
    prevItem: function prevItem() {
      if (!this.activeItem) {
        return null;
      }

      var prevItem = null;

      for (var idx = this.items.indexOf(this.activeItem) - 1; idx >= 0; idx--) {
        if (this.items[idx].visible) {
          prevItem = this.items[idx];
          break;
        }
      }

      return prevItem;
    },

    /**
     * Check if next button is available.
     */
    hasNext: function hasNext() {
      return !!this.nextItem;
    },
    navigationProps: function navigationProps() {
      return {
        previous: {
          disabled: !this.hasPrev,
          action: this.prev
        },
        next: {
          disabled: !this.hasNext,
          action: this.next
        }
      };
    }
  },
  methods: {
    /**
     * Return if the step should be clickable or not.
     */
    isItemClickable: function isItemClickable(stepItem) {
      if (stepItem.clickable === undefined) {
        return stepItem.index < this.activeItem.index;
      }

      return stepItem.clickable;
    },

    /**
     * Previous button click listener.
     */
    prev: function prev() {
      if (this.hasPrev) {
        this.activeId = this.prevItem.value;
      }
    },

    /**
     * Previous button click listener.
     */
    next: function next() {
      if (this.hasNext) {
        this.activeId = this.nextItem.value;
      }
    }
  }
};

const _hoisted_1 = { class: "step-items" };
const _hoisted_2 = { class: "step-marker" };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "step-details" };
const _hoisted_5 = { class: "step-title" };
const _hoisted_6 = {
  key: 0,
  class: "step-navigation"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_icon = vue.resolveComponent("b-icon");

  return (vue.openBlock(), vue.createBlock("div", {
    class: ["b-steps", $options.wrapperClasses]
  }, [
    vue.createVNode("nav", {
      class: ["steps", $options.mainClasses]
    }, [
      vue.createVNode("ul", _hoisted_1, [
        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.items, (childItem) => {
          return vue.withDirectives((vue.openBlock(), vue.createBlock("li", {
            key: childItem.value,
            class: ["step-item", [childItem.type || $props.type, childItem.headerClass, {
                        'is-active': childItem.isActive,
                        'is-previous': $options.activeItem.index > childItem.index
                }]]
          }, [
            vue.createVNode("a", {
              class: ["step-link", {'is-clickable': $options.isItemClickable(childItem)}],
              onClick: $event => ($options.isItemClickable(childItem) && _ctx.childClick(childItem))
            }, [
              vue.createVNode("div", _hoisted_2, [
                (childItem.icon)
                  ? (vue.openBlock(), vue.createBlock(_component_b_icon, {
                      key: 0,
                      icon: childItem.icon,
                      pack: childItem.iconPack,
                      size: _ctx.size
                    }, null, 8 /* PROPS */, ["icon", "pack", "size"]))
                  : (childItem.step)
                    ? (vue.openBlock(), vue.createBlock("span", _hoisted_3, vue.toDisplayString(childItem.step), 1 /* TEXT */))
                    : vue.createCommentVNode("v-if", true)
              ]),
              vue.createVNode("div", _hoisted_4, [
                vue.createVNode("span", _hoisted_5, vue.toDisplayString(childItem.label), 1 /* TEXT */)
              ])
            ], 10 /* CLASS, PROPS */, ["onClick"])
          ], 2 /* CLASS */)), [
            [vue.vShow, childItem.visible]
          ])
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ], 2 /* CLASS */),
    vue.createVNode("section", {
      class: ["step-content", {'is-transitioning': _ctx.isTransitioning}]
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2 /* CLASS */),
    vue.renderSlot(_ctx.$slots, "navigation", {
      previous: $options.navigationProps.previous,
      next: $options.navigationProps.next
    }, () => [
      ($props.hasNavigation)
        ? (vue.openBlock(), vue.createBlock("nav", _hoisted_6, [
            vue.createVNode("a", {
              role: "button",
              class: "pagination-previous",
              disabled: $options.navigationProps.previous.disabled ? '' : null,
              onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => ($options.navigationProps.previous.action && $options.navigationProps.previous.action(...args)), ["prevent"])),
              "aria-label": $props.ariaPreviousLabel
            }, [
              vue.createVNode(_component_b_icon, {
                icon: $props.iconPrev,
                pack: $props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8 /* PROPS */, ["icon", "pack"])
            ], 8 /* PROPS */, ["disabled", "aria-label"]),
            vue.createVNode("a", {
              role: "button",
              class: "pagination-next",
              disabled: $options.navigationProps.next.disabled ? '' : null,
              onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => ($options.navigationProps.next.action && $options.navigationProps.next.action(...args)), ["prevent"])),
              "aria-label": $props.ariaNextLabel
            }, [
              vue.createVNode(_component_b_icon, {
                icon: $props.iconNext,
                pack: $props.iconPack,
                both: "",
                "aria-hidden": "true"
              }, null, 8 /* PROPS */, ["icon", "pack"])
            ], 8 /* PROPS */, ["disabled", "aria-label"])
          ]))
        : vue.createCommentVNode("v-if", true)
    ])
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "src/components/steps/Steps.vue";

var script = {
  name: 'BStepItem',
  mixins: [TabbedChildMixin.TabbedChildMixin('step')],
  props: {
    step: [String, Number],
    type: [String, Object],
    clickable: {
      type: Boolean,
      default: undefined
    }
  },
  data: function data() {
    return {
      elementClass: 'step-item'
    };
  }
};

const render = () => {};


script.render = render;
script.__file = "src/components/steps/StepItem.vue";

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, script$1);
    plugins.registerComponent(Vue, script);
  }
};
plugins.use(Plugin);

exports.BStepItem = script;
exports.BSteps = script$1;
exports.default = Plugin;
